/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Gh(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const ra = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, Uh = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], Wu = () => {
}, Jh = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Er = Object.assign, Qh = Object.prototype.hasOwnProperty, oa = (e, t) => Qh.call(e, t), yt = Array.isArray, So = (e) => ju(e) === "[object Map]", Gt = (e) => typeof e == "function", Zn = (e) => typeof e == "string", Yo = (e) => typeof e == "symbol", Ut = (e) => e !== null && typeof e == "object", e1 = (e) => (Ut(e) || Gt(e)) && Gt(e.then) && Gt(e.catch), t1 = Object.prototype.toString, ju = (e) => t1.call(e), Fu = (e) => ju(e).slice(8, -1), Ha = (e) => Zn(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, qu = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Gu = qu((e) => e.charAt(0).toUpperCase() + e.slice(1)), n1 = qu(
  (e) => e ? `on${Gu(e)}` : ""
), za = (e, t) => !Object.is(e, t);
let Tl;
const ls = () => Tl || (Tl = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function us(e) {
  if (yt(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], o = Zn(r) ? s1(r) : us(r);
      if (o)
        for (const i in o)
          t[i] = o[i];
    }
    return t;
  } else if (Zn(e) || Ut(e))
    return e;
}
const r1 = /;(?![^(]*\))/g, o1 = /:([^]+)/, i1 = /\/\*[^]*?\*\//g;
function s1(e) {
  const t = {};
  return e.replace(i1, "").split(r1).forEach((n) => {
    if (n) {
      const r = n.split(o1);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function cs(e) {
  let t = "";
  if (Zn(e))
    t = e;
  else if (yt(e))
    for (let n = 0; n < e.length; n++) {
      const r = cs(e[n]);
      r && (t += r + " ");
    }
  else if (Ut(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function No(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let Uu = 0, Rs;
function La() {
  Uu++;
}
function Ia() {
  if (--Uu > 0)
    return;
  let e;
  for (; Rs; ) {
    let t = Rs;
    for (Rs = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (r) {
          e || (e = r);
        }
      t = n;
    }
  }
  if (e) throw e;
}
class a1 {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, process.env.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
  }
  trigger(t) {
    this.version++, this.notify(t);
  }
  notify(t) {
    La();
    try {
      if (process.env.NODE_ENV !== "production")
        for (let n = this.subsHead; n; n = n.nextSub)
          n.sub.onTrigger && !(n.sub.flags & 8) && n.sub.onTrigger(
            Er(
              {
                effect: n.sub
              },
              t
            )
          );
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Ia();
    }
  }
}
const l1 = /* @__PURE__ */ new WeakMap(), Zs = Symbol(
  process.env.NODE_ENV !== "production" ? "Object iterate" : ""
), Hl = Symbol(
  process.env.NODE_ENV !== "production" ? "Map keys iterate" : ""
), zl = Symbol(
  process.env.NODE_ENV !== "production" ? "Array iterate" : ""
);
function tr(e, t, n, r, o, i) {
  const s = l1.get(e);
  if (!s)
    return;
  const a = (l) => {
    l && (process.env.NODE_ENV !== "production" ? l.trigger({
      target: e,
      type: t,
      key: n,
      newValue: r,
      oldValue: o,
      oldTarget: i
    }) : l.trigger());
  };
  if (La(), t === "clear")
    s.forEach(a);
  else {
    const l = yt(e), u = l && Ha(n);
    if (l && n === "length") {
      const c = Number(r);
      s.forEach((d, f) => {
        (f === "length" || f === zl || !Yo(f) && f >= c) && a(d);
      });
    } else
      switch ((n !== void 0 || s.has(void 0)) && a(s.get(n)), u && a(s.get(zl)), t) {
        case "add":
          l ? u && a(s.get("length")) : (a(s.get(Zs)), So(e) && a(s.get(Hl)));
          break;
        case "delete":
          l || (a(s.get(Zs)), So(e) && a(s.get(Hl)));
          break;
        case "set":
          So(e) && a(s.get(Zs));
          break;
      }
  }
  Ia();
}
function Tr(e) {
  const t = Le(e);
  return t === e || ln(e) ? t : t.map($t);
}
function Aa(e) {
  return e = Le(e), e;
}
const u1 = {
  __proto__: null,
  [Symbol.iterator]() {
    return Bs(this, Symbol.iterator, $t);
  },
  concat(...e) {
    return Tr(this).concat(
      ...e.map((t) => yt(t) ? Tr(t) : t)
    );
  },
  entries() {
    return Bs(this, "entries", (e) => (e[1] = $t(e[1]), e));
  },
  every(e, t) {
    return Vn(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Vn(this, "filter", e, t, (n) => n.map($t), arguments);
  },
  find(e, t) {
    return Vn(this, "find", e, t, $t, arguments);
  },
  findIndex(e, t) {
    return Vn(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Vn(this, "findLast", e, t, $t, arguments);
  },
  findLastIndex(e, t) {
    return Vn(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Vn(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Xs(this, "includes", e);
  },
  indexOf(...e) {
    return Xs(this, "indexOf", e);
  },
  join(e) {
    return Tr(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return Xs(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Vn(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return yo(this, "pop");
  },
  push(...e) {
    return yo(this, "push", e);
  },
  reduce(e, ...t) {
    return Ll(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Ll(this, "reduceRight", e, t);
  },
  shift() {
    return yo(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Vn(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return yo(this, "splice", e);
  },
  toReversed() {
    return Tr(this).toReversed();
  },
  toSorted(e) {
    return Tr(this).toSorted(e);
  },
  toSpliced(...e) {
    return Tr(this).toSpliced(...e);
  },
  unshift(...e) {
    return yo(this, "unshift", e);
  },
  values() {
    return Bs(this, "values", $t);
  }
};
function Bs(e, t, n) {
  const r = Aa(e), o = r[t]();
  return r !== e && !ln(e) && (o._next = o.next, o.next = () => {
    const i = o._next();
    return i.value && (i.value = n(i.value)), i;
  }), o;
}
const c1 = Array.prototype;
function Vn(e, t, n, r, o, i) {
  const s = Aa(e), a = s !== e && !ln(e), l = s[t];
  if (l !== c1[t]) {
    const d = l.apply(e, i);
    return a ? $t(d) : d;
  }
  let u = n;
  s !== e && (a ? u = function(d, f) {
    return n.call(this, $t(d), f, e);
  } : n.length > 2 && (u = function(d, f) {
    return n.call(this, d, f, e);
  }));
  const c = l.call(s, u, r);
  return a && o ? o(c) : c;
}
function Ll(e, t, n, r) {
  const o = Aa(e);
  let i = n;
  return o !== e && (ln(e) ? n.length > 3 && (i = function(s, a, l) {
    return n.call(this, s, a, l, e);
  }) : i = function(s, a, l) {
    return n.call(this, s, $t(a), l, e);
  }), o[t](i, ...r);
}
function Xs(e, t, n) {
  const r = Le(e), o = r[t](...n);
  return (o === -1 || o === !1) && Mi(n[0]) ? (n[0] = Le(n[0]), r[t](...n)) : o;
}
function yo(e, t, n = []) {
  La();
  const r = Le(e)[t].apply(e, n);
  return Ia(), r;
}
const d1 = /* @__PURE__ */ Gh("__proto__,__v_isRef,__isVue"), Ju = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Yo)
);
function f1(e) {
  return Yo(e) || (e = String(e)), Le(this).hasOwnProperty(e);
}
class Qu {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, r) {
    if (n === "__v_skip") return t.__v_skip;
    const o = this._isReadonly, i = this._isShallow;
    if (n === "__v_isReactive")
      return !o;
    if (n === "__v_isReadonly")
      return o;
    if (n === "__v_isShallow")
      return i;
    if (n === "__v_raw")
      return r === (o ? i ? $1 : nc : i ? x1 : tc).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const s = yt(t);
    if (!o) {
      let l;
      if (s && (l = u1[n]))
        return l;
      if (n === "hasOwnProperty")
        return f1;
    }
    const a = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Ln(t) ? t : r
    );
    return (Yo(n) ? Ju.has(n) : d1(n)) || i ? a : Ln(a) ? s && Ha(n) ? a : a.value : Ut(a) ? o ? oc(a) : rc(a) : a;
  }
}
class h1 extends Qu {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, o) {
    let i = t[n];
    if (!this._isShallow) {
      const l = Bn(i);
      if (!ln(r) && !Bn(r) && (i = Le(i), r = Le(r)), !yt(t) && Ln(i) && !Ln(r))
        return l ? !1 : (i.value = r, !0);
    }
    const s = yt(t) && Ha(n) ? Number(n) < t.length : oa(t, n), a = Reflect.set(
      t,
      n,
      r,
      Ln(t) ? t : o
    );
    return t === Le(o) && (s ? za(r, i) && tr(t, "set", n, r, i) : tr(t, "add", n, r)), a;
  }
  deleteProperty(t, n) {
    const r = oa(t, n), o = t[n], i = Reflect.deleteProperty(t, n);
    return i && r && tr(t, "delete", n, void 0, o), i;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return !Yo(n) || Ju.has(n), r;
  }
  ownKeys(t) {
    return Reflect.ownKeys(t);
  }
}
class g1 extends Qu {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return process.env.NODE_ENV !== "production" && No(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return process.env.NODE_ENV !== "production" && No(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const p1 = /* @__PURE__ */ new h1(), v1 = /* @__PURE__ */ new g1(), ia = (e) => e, ui = (e) => Reflect.getPrototypeOf(e);
function m1(e, t, n) {
  return function(...r) {
    const o = this.__v_raw, i = Le(o), s = So(i), a = e === "entries" || e === Symbol.iterator && s, l = o[e](...r), u = n ? ia : t ? sa : $t;
    return {
      // iterator protocol
      next() {
        const { value: c, done: d } = l.next();
        return d ? { value: c, done: d } : {
          value: a ? [u(c[0]), u(c[1])] : u(c),
          done: d
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function ci(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      No(
        `${Gu(e)} operation ${n}failed: target is readonly.`,
        Le(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function y1(e, t) {
  const n = {
    get(o) {
      const i = this.__v_raw, s = Le(i), a = Le(o), { has: l } = ui(s), u = t ? ia : e ? sa : $t;
      if (l.call(s, o))
        return u(i.get(o));
      if (l.call(s, a))
        return u(i.get(a));
      i !== s && i.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && (Le(o), void 0), Reflect.get(o, "size", o);
    },
    has(o) {
      const i = this.__v_raw;
      Le(i);
      const s = Le(o);
      return o === s ? i.has(o) : i.has(o) || i.has(s);
    },
    forEach(o, i) {
      const s = this, a = s.__v_raw;
      Le(a);
      const l = t ? ia : e ? sa : $t;
      return a.forEach((u, c) => o.call(i, l(u), l(c), s));
    }
  };
  return Er(
    n,
    e ? {
      add: ci("add"),
      set: ci("set"),
      delete: ci("delete"),
      clear: ci("clear")
    } : {
      add(o) {
        !t && !ln(o) && !Bn(o) && (o = Le(o));
        const i = Le(this);
        return ui(i).has.call(i, o) || (i.add(o), tr(i, "add", o, o)), this;
      },
      set(o, i) {
        !t && !ln(i) && !Bn(i) && (i = Le(i));
        const s = Le(this), { has: a, get: l } = ui(s);
        let u = a.call(s, o);
        u ? process.env.NODE_ENV !== "production" && Il(s, a, o) : (o = Le(o), u = a.call(s, o));
        const c = l.call(s, o);
        return s.set(o, i), u ? za(i, c) && tr(s, "set", o, i, c) : tr(s, "add", o, i), this;
      },
      delete(o) {
        const i = Le(this), { has: s, get: a } = ui(i);
        let l = s.call(i, o);
        l ? process.env.NODE_ENV !== "production" && Il(i, s, o) : (o = Le(o), l = s.call(i, o));
        const u = a ? a.call(i, o) : void 0, c = i.delete(o);
        return l && tr(i, "delete", o, void 0, u), c;
      },
      clear() {
        const o = Le(this), i = o.size !== 0, s = process.env.NODE_ENV !== "production" ? So(o) ? new Map(o) : new Set(o) : void 0, a = o.clear();
        return i && tr(
          o,
          "clear",
          void 0,
          void 0,
          s
        ), a;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((o) => {
    n[o] = m1(o, e, t);
  }), n;
}
function ec(e, t) {
  const n = y1(e, t);
  return (r, o, i) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? r : Reflect.get(
    oa(n, o) && o in r ? n : r,
    o,
    i
  );
}
const w1 = {
  get: /* @__PURE__ */ ec(!1, !1)
}, b1 = {
  get: /* @__PURE__ */ ec(!0, !1)
};
function Il(e, t, n) {
  const r = Le(n);
  if (r !== n && t.call(e, r)) {
    const o = Fu(e);
    No(
      `Reactive ${o} contains both the raw and reactive versions of the same object${o === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const tc = /* @__PURE__ */ new WeakMap(), x1 = /* @__PURE__ */ new WeakMap(), nc = /* @__PURE__ */ new WeakMap(), $1 = /* @__PURE__ */ new WeakMap();
function _1(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function C1(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : _1(Fu(e));
}
function rc(e) {
  return Bn(e) ? e : ic(
    e,
    !1,
    p1,
    w1,
    tc
  );
}
function oc(e) {
  return ic(
    e,
    !0,
    v1,
    b1,
    nc
  );
}
function ic(e, t, n, r, o) {
  if (!Ut(e))
    return process.env.NODE_ENV !== "production" && No(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = o.get(e);
  if (i)
    return i;
  const s = C1(e);
  if (s === 0)
    return e;
  const a = new Proxy(
    e,
    s === 2 ? r : n
  );
  return o.set(e, a), a;
}
function sc(e) {
  return Bn(e) ? sc(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Bn(e) {
  return !!(e && e.__v_isReadonly);
}
function ln(e) {
  return !!(e && e.__v_isShallow);
}
function Mi(e) {
  return e ? !!e.__v_raw : !1;
}
function Le(e) {
  const t = e && e.__v_raw;
  return t ? Le(t) : e;
}
const $t = (e) => Ut(e) ? rc(e) : e, sa = (e) => Ut(e) ? oc(e) : e;
function Ln(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function k1(e) {
  return S1(e, !1);
}
function S1(e, t) {
  return Ln(e) ? e : new E1(e, t);
}
class E1 {
  constructor(t, n) {
    this.dep = new a1(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : Le(t), this._value = n ? t : $t(t), this.__v_isShallow = n;
  }
  get value() {
    return process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || ln(t) || Bn(t);
    t = r ? t : Le(t), za(t, n) && (this._rawValue = t, this._value = r ? t : $t(t), process.env.NODE_ENV !== "production" ? this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: t,
      oldValue: n
    }) : this.dep.trigger());
  }
}
/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const wr = [];
function N1(e) {
  wr.push(e);
}
function P1() {
  wr.pop();
}
let Ks = !1;
function lr(e, ...t) {
  if (Ks) return;
  Ks = !0;
  const n = wr.length ? wr[wr.length - 1].component : null, r = n && n.appContext.config.warnHandler, o = M1();
  if (r)
    ds(
      r,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((i) => {
          var s, a;
          return (a = (s = i.toString) == null ? void 0 : s.call(i)) != null ? a : JSON.stringify(i);
        }).join(""),
        n && n.proxy,
        o.map(
          ({ vnode: i }) => `at <${_c(n, i.type)}>`
        ).join(`
`),
        o
      ]
    );
  else {
    const i = [`[Vue warn]: ${e}`, ...t];
    o.length && i.push(`
`, ...V1(o)), console.warn(...i);
  }
  Ks = !1;
}
function M1() {
  let e = wr[wr.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const r = e.component && e.component.parent;
    e = r && r.vnode;
  }
  return t;
}
function V1(e) {
  const t = [];
  return e.forEach((n, r) => {
    t.push(...r === 0 ? [] : [`
`], ...O1(n));
  }), t;
}
function O1({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", r = e.component ? e.component.parent == null : !1, o = ` at <${_c(
    e.component,
    e.type,
    r
  )}`, i = ">" + n;
  return e.props ? [o, ...D1(e.props), i] : [o + i];
}
function D1(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((r) => {
    t.push(...ac(r, e[r]));
  }), n.length > 3 && t.push(" ..."), t;
}
function ac(e, t, n) {
  return Zn(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : Ln(t) ? (t = ac(e, Le(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : Gt(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = Le(t), n ? t : [`${e}=`, t]);
}
const Ra = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush",
  15: "component update",
  16: "app unmount cleanup function"
};
function ds(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (o) {
    Za(o, t, n);
  }
}
function lc(e, t, n, r) {
  if (Gt(e)) {
    const o = ds(e, t, n, r);
    return o && e1(o) && o.catch((i) => {
      Za(i, t, n);
    }), o;
  }
  if (yt(e)) {
    const o = [];
    for (let i = 0; i < e.length; i++)
      o.push(lc(e[i], t, n, r));
    return o;
  } else process.env.NODE_ENV !== "production" && lr(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function Za(e, t, n, r = !0) {
  const o = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: s } = t && t.appContext.config || ra;
  if (t) {
    let a = t.parent;
    const l = t.proxy, u = process.env.NODE_ENV !== "production" ? Ra[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; a; ) {
      const c = a.ec;
      if (c) {
        for (let d = 0; d < c.length; d++)
          if (c[d](e, l, u) === !1)
            return;
      }
      a = a.parent;
    }
    if (i) {
      ds(i, null, 10, [
        e,
        l,
        u
      ]);
      return;
    }
  }
  T1(e, n, o, r, s);
}
function T1(e, t, n, r = !0, o = !1) {
  if (process.env.NODE_ENV !== "production") {
    const i = Ra[t];
    if (n && N1(n), lr(`Unhandled error${i ? ` during execution of ${i}` : ""}`), n && P1(), r)
      throw e;
    console.error(e);
  } else {
    if (o)
      throw e;
    console.error(e);
  }
}
const jt = [];
let Dn = -1;
const Zr = [];
let Jn = null, Lr = 0;
const H1 = /* @__PURE__ */ Promise.resolve();
let aa = null;
const z1 = 100;
function L1(e) {
  let t = Dn + 1, n = jt.length;
  for (; t < n; ) {
    const r = t + n >>> 1, o = jt[r], i = Po(o);
    i < e || i === e && o.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function I1(e) {
  if (!(e.flags & 1)) {
    const t = Po(e), n = jt[jt.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Po(n) ? jt.push(e) : jt.splice(L1(t), 0, e), e.flags |= 1, uc();
  }
}
function uc() {
  aa || (aa = H1.then(cc));
}
function A1(e) {
  yt(e) ? Zr.push(...e) : Jn && e.id === -1 ? Jn.splice(Lr + 1, 0, e) : e.flags & 1 || (Zr.push(e), e.flags |= 1), uc();
}
function R1(e) {
  if (Zr.length) {
    const t = [...new Set(Zr)].sort(
      (n, r) => Po(n) - Po(r)
    );
    if (Zr.length = 0, Jn) {
      Jn.push(...t);
      return;
    }
    for (Jn = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Lr = 0; Lr < Jn.length; Lr++) {
      const n = Jn[Lr];
      process.env.NODE_ENV !== "production" && dc(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    Jn = null, Lr = 0;
  }
}
const Po = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function cc(e) {
  process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = process.env.NODE_ENV !== "production" ? (n) => dc(e, n) : Wu;
  try {
    for (Dn = 0; Dn < jt.length; Dn++) {
      const n = jt[Dn];
      if (n && !(n.flags & 8)) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), ds(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; Dn < jt.length; Dn++) {
      const n = jt[Dn];
      n && (n.flags &= -2);
    }
    Dn = -1, jt.length = 0, R1(e), aa = null, (jt.length || Zr.length) && cc(e);
  }
}
function dc(e, t) {
  const n = e.get(t) || 0;
  if (n > z1) {
    const r = t.i, o = r && $c(r.type);
    return Za(
      `Maximum recursive updates exceeded${o ? ` in component <${o}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
const Ys = /* @__PURE__ */ new Map();
process.env.NODE_ENV !== "production" && (ls().__VUE_HMR_RUNTIME__ = {
  createRecord: Ws(Z1),
  rerender: Ws(B1),
  reload: Ws(X1)
});
const Vi = /* @__PURE__ */ new Map();
function Z1(e, t) {
  return Vi.has(e) ? !1 : (Vi.set(e, {
    initialDef: Oi(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Oi(e) {
  return Cc(e) ? e.__vccOpts : e;
}
function B1(e, t) {
  const n = Vi.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((r) => {
    t && (r.render = t, Oi(r.type).render = t), r.renderCache = [], r.update();
  }));
}
function X1(e, t) {
  const n = Vi.get(e);
  if (!n) return;
  t = Oi(t), Al(n.initialDef, t);
  const r = [...n.instances];
  for (let o = 0; o < r.length; o++) {
    const i = r[o], s = Oi(i.type);
    let a = Ys.get(s);
    a || (s !== n.initialDef && Al(s, t), Ys.set(s, a = /* @__PURE__ */ new Set())), a.add(i), i.appContext.propsCache.delete(i.type), i.appContext.emitsCache.delete(i.type), i.appContext.optionsCache.delete(i.type), i.ceReload ? (a.add(i), i.ceReload(t.styles), a.delete(i)) : i.parent ? I1(() => {
      i.parent.update(), a.delete(i);
    }) : i.appContext.reload ? i.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), i.root.ce && i !== i.root && i.root.ce._removeChildStyle(s);
  }
  A1(() => {
    Ys.clear();
  });
}
function Al(e, t) {
  Er(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function Ws(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (r) {
      console.error(r), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let Ir, di = [];
function fc(e, t) {
  var n, r;
  Ir = e, Ir ? (Ir.enabled = !0, di.forEach(({ event: o, args: i }) => Ir.emit(o, ...i)), di = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((r = (n = window.navigator) == null ? void 0 : n.userAgent) != null && r.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((i) => {
    fc(i, t);
  }), setTimeout(() => {
    Ir || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, di = []);
  }, 3e3)) : di = [];
}
let Di = null, K1 = null;
const Y1 = (e) => e.__isTeleport;
function hc(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, hc(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function W1(e, t) {
  return Gt(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Er({ name: e.name }, t, { setup: e })
  ) : e;
}
ls().requestIdleCallback;
ls().cancelIdleCallback;
function j1(e, t, n = fs, r = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...s) => {
      const a = fg(n), l = lc(t, n, e, s);
      return a(), l;
    });
    return r ? o.unshift(i) : o.push(i), i;
  } else if (process.env.NODE_ENV !== "production") {
    const o = n1(Ra[e].replace(/ hook$/, ""));
    lr(
      `${o} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const gc = (e) => (t, n = fs) => {
  (!xc || e === "sp") && j1(e, (...r) => t(...r), n);
}, F1 = gc("m"), q1 = gc("um"), G1 = Symbol.for("v-ndc"), U1 = {};
process.env.NODE_ENV !== "production" && (U1.ownKeys = (e) => (lr(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
const J1 = {}, pc = (e) => Object.getPrototypeOf(e) === J1, Q1 = (e) => e.__isSuspense, vc = Symbol.for("v-fgt"), eg = Symbol.for("v-txt"), tg = Symbol.for("v-cmt"), wi = [];
let an = null;
function ng(e = !1) {
  wi.push(an = e ? null : []);
}
function rg() {
  wi.pop(), an = wi[wi.length - 1] || null;
}
function og(e) {
  return e.dynamicChildren = an || Uh, rg(), an && an.push(e), e;
}
function ig(e, t, n, r, o, i) {
  return og(
    yc(
      e,
      t,
      n,
      r,
      o,
      i,
      !0
    )
  );
}
function sg(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
const ag = (...e) => wc(
  ...e
), mc = ({ key: e }) => e ?? null, bi = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Zn(e) || Ln(e) || Gt(e) ? { i: Di, r: e, k: t, f: !!n } : e : null);
function yc(e, t = null, n = null, r = 0, o = null, i = e === vc ? 0 : 1, s = !1, a = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && mc(t),
    ref: t && bi(t),
    scopeId: K1,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: r,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: Di
  };
  return a ? (Ba(l, n), i & 128 && e.normalize(l)) : n && (l.shapeFlag |= Zn(n) ? 8 : 16), process.env.NODE_ENV !== "production" && l.key !== l.key && lr("VNode created with invalid key (NaN). VNode type:", l.type), // avoid a block node from tracking itself
  !s && // has current parent block
  an && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && an.push(l), l;
}
const lg = process.env.NODE_ENV !== "production" ? ag : wc;
function wc(e, t = null, n = null, r = 0, o = null, i = !1) {
  if ((!e || e === G1) && (process.env.NODE_ENV !== "production" && !e && lr(`Invalid vnode type when creating vnode: ${e}.`), e = tg), sg(e)) {
    const a = Ti(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Ba(a, n), !i && an && (a.shapeFlag & 6 ? an[an.indexOf(e)] = a : an.push(a)), a.patchFlag = -2, a;
  }
  if (Cc(e) && (e = e.__vccOpts), t) {
    t = ug(t);
    let { class: a, style: l } = t;
    a && !Zn(a) && (t.class = cs(a)), Ut(l) && (Mi(l) && !yt(l) && (l = Er({}, l)), t.style = us(l));
  }
  const s = Zn(e) ? 1 : Q1(e) ? 128 : Y1(e) ? 64 : Ut(e) ? 4 : Gt(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && s & 4 && Mi(e) && (e = Le(e), lr(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), yc(
    e,
    t,
    n,
    r,
    o,
    s,
    i,
    !0
  );
}
function ug(e) {
  return e ? Mi(e) || pc(e) ? Er({}, e) : e : null;
}
function Ti(e, t, n = !1, r = !1) {
  const { props: o, ref: i, patchFlag: s, children: a, transition: l } = e, u = t ? dg(o || {}, t) : o, c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: u,
    key: u && mc(u),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? yt(i) ? i.concat(bi(t)) : [i, bi(t)] : bi(t)
    ) : i,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && s === -1 && yt(a) ? a.map(bc) : a,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== vc ? s === -1 ? 16 : s | 16 : s,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: l,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Ti(e.ssContent),
    ssFallback: e.ssFallback && Ti(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return l && r && hc(
    c,
    l.clone(c)
  ), c;
}
function bc(e) {
  const t = Ti(e);
  return yt(e.children) && (t.children = e.children.map(bc)), t;
}
function cg(e = " ", t = 0) {
  return lg(eg, null, e, t);
}
function Ba(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (yt(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), Ba(e, o()), o._c && (o._d = !0));
      return;
    } else
      n = 32, !t._ && !pc(t) && (t._ctx = Di);
  else Gt(t) ? (t = { default: t, _ctx: Di }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [cg(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function dg(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const o in r)
      if (o === "class")
        t.class !== r.class && (t.class = cs([t.class, r.class]));
      else if (o === "style")
        t.style = us([t.style, r.style]);
      else if (Jh(o)) {
        const i = t[o], s = r[o];
        s && i !== s && !(yt(i) && i.includes(s)) && (t[o] = i ? [].concat(i, s) : s);
      } else o !== "" && (t[o] = r[o]);
  }
  return t;
}
let fs = null, la;
{
  const e = ls(), t = (n, r) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(r), (i) => {
      o.length > 1 ? o.forEach((s) => s(i)) : o[0](i);
    };
  };
  la = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => fs = n
  ), t(
    "__VUE_SSR_SETTERS__",
    (n) => xc = n
  );
}
const fg = (e) => {
  const t = fs;
  return la(e), e.scope.on(), () => {
    e.scope.off(), la(t);
  };
};
let xc = !1;
process.env.NODE_ENV;
const hg = /(?:^|[-_])(\w)/g, gg = (e) => e.replace(hg, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function $c(e, t = !0) {
  return Gt(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function _c(e, t, n = !1) {
  let r = $c(t);
  if (!r && t.__file) {
    const o = t.__file.match(/([^/\\]+)\.\w+$/);
    o && (r = o[1]);
  }
  if (!r && e && e.parent) {
    const o = (i) => {
      for (const s in i)
        if (i[s] === t)
          return s;
    };
    r = o(
      e.components || e.parent.type.components
    ) || o(e.appContext.components);
  }
  return r ? gg(r) : n ? "App" : "Anonymous";
}
function Cc(e) {
  return Gt(e) && "__vccOpts" in e;
}
function pg() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, r = { style: "color:#eb2f96" }, o = {
    __vue_custom_formatter: !0,
    header(d) {
      return Ut(d) ? d.__isVue ? ["div", e, "VueInstance"] : Ln(d) ? [
        "div",
        {},
        ["span", e, c(d)],
        "<",
        // avoid debugger accessing value affecting behavior
        a("_value" in d ? d._value : d),
        ">"
      ] : sc(d) ? [
        "div",
        {},
        ["span", e, ln(d) ? "ShallowReactive" : "Reactive"],
        "<",
        a(d),
        `>${Bn(d) ? " (readonly)" : ""}`
      ] : Bn(d) ? [
        "div",
        {},
        ["span", e, ln(d) ? "ShallowReadonly" : "Readonly"],
        "<",
        a(d),
        ">"
      ] : null : null;
    },
    hasBody(d) {
      return d && d.__isVue;
    },
    body(d) {
      if (d && d.__isVue)
        return [
          "div",
          {},
          ...i(d.$)
        ];
    }
  };
  function i(d) {
    const f = [];
    d.type.props && d.props && f.push(s("props", Le(d.props))), d.setupState !== ra && f.push(s("setup", d.setupState)), d.data !== ra && f.push(s("data", Le(d.data)));
    const h = l(d, "computed");
    h && f.push(s("computed", h));
    const p = l(d, "inject");
    return p && f.push(s("injected", p)), f.push([
      "div",
      {},
      [
        "span",
        {
          style: r.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: d }]
    ]), f;
  }
  function s(d, f) {
    return f = Er({}, f), Object.keys(f).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        d
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(f).map((h) => [
          "div",
          {},
          ["span", r, h + ": "],
          a(f[h], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function a(d, f = !0) {
    return typeof d == "number" ? ["span", t, d] : typeof d == "string" ? ["span", n, JSON.stringify(d)] : typeof d == "boolean" ? ["span", r, d] : Ut(d) ? ["object", { object: f ? Le(d) : d }] : ["span", n, String(d)];
  }
  function l(d, f) {
    const h = d.type;
    if (Gt(h))
      return;
    const p = {};
    for (const b in d.ctx)
      u(h, b, f) && (p[b] = d.ctx[b]);
    return p;
  }
  function u(d, f, h) {
    const p = d[h];
    if (yt(p) && p.includes(f) || Ut(p) && f in p || d.extends && u(d.extends, f, h) || d.mixins && d.mixins.some((b) => u(b, f, h)))
      return !0;
  }
  function c(d) {
    return ln(d) ? "ShallowRef" : d.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(o) : window.devtoolsFormatters = [o];
}
process.env.NODE_ENV;
process.env.NODE_ENV;
process.env.NODE_ENV;
/**
* vue v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function vg() {
  pg();
}
process.env.NODE_ENV !== "production" && vg();
var mg = Object.defineProperty, kc = (e) => {
  throw TypeError(e);
}, yg = (e, t, n) => t in e ? mg(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Vt = (e, t, n) => yg(e, typeof t != "symbol" ? t + "" : t, n), Xa = (e, t, n) => t.has(e) || kc("Cannot " + n), lt = (e, t, n) => (Xa(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Ar = (e, t, n) => t.has(e) ? kc("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Hi = (e, t, n, r) => (Xa(e, t, "write to private field"), t.set(e, n), n), wg = (e, t, n) => (Xa(e, t, "access private method"), n);
const bg = "5";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(bg);
let uo = !1, xg = !1;
function $g() {
  uo = !0;
}
$g();
const Ka = 1, Ya = 2, Sc = 4, _g = 8, Cg = 16, kg = 1, Sg = 2, Ec = 4, Eg = 8, Ng = 16, Nc = 1, Pg = 2, Pc = "[", Wa = "[!", ja = "]", Br = {}, Pt = Symbol(), Mc = "http://www.w3.org/2000/svg", Mg = !1, un = 2, Vc = 4, hs = 8, Fa = 16, jn = 32, co = 64, zi = 128, Jt = 256, Li = 512, wt = 1024, Fn = 2048, Nr = 4096, In = 8192, gs = 16384, Vg = 32768, fo = 65536, Og = 1 << 17, Dg = 1 << 19, Oc = 1 << 20, or = Symbol("$state"), qa = Symbol("legacy props"), Tg = Symbol("");
var Wo = Array.isArray, Hg = Array.prototype.indexOf, Ga = Array.from, Ii = Object.keys, Mo = Object.defineProperty, An = Object.getOwnPropertyDescriptor, Dc = Object.getOwnPropertyDescriptors, zg = Object.prototype, Lg = Array.prototype, Ua = Object.getPrototypeOf;
function wo(e) {
  return typeof e == "function";
}
const ft = () => {
};
function Ig(e) {
  return e();
}
function Vo(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const Ag = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let Ai = !1, Ri = !1, ua = [], ca = [];
function Tc() {
  Ai = !1;
  const e = ua.slice();
  ua = [], Vo(e);
}
function Hc() {
  Ri = !1;
  const e = ca.slice();
  ca = [], Vo(e);
}
function jo(e) {
  Ai || (Ai = !0, queueMicrotask(Tc)), ua.push(e);
}
function Rg(e) {
  Ri || (Ri = !0, Ag(Hc)), ca.push(e);
}
function Zg() {
  Ai && Tc(), Ri && Hc();
}
function zc(e) {
  return e === this.v;
}
function Ja(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Qa(e) {
  return !Ja(e, this.v);
}
function Bg(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Xg() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Kg(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Yg() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Wg() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function jg(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Fg() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function qg() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Gg() {
  throw new Error("https://svelte.dev/e/state_unsafe_local_read");
}
function Ug() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Ot(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: zc,
    rv: 0,
    wv: 0
  };
  return n;
}
function Gr(e) {
  return /* @__PURE__ */ Lc(Ot(e));
}
// @__NO_SIDE_EFFECTS__
function Fo(e, t = !1) {
  var n;
  const r = Ot(e);
  return t || (r.equals = Qa), uo && Be !== null && Be.l !== null && ((n = Be.l).s ?? (n.s = [])).push(r), r;
}
function te(e, t = !1) {
  return /* @__PURE__ */ Lc(/* @__PURE__ */ Fo(e, t));
}
// @__NO_SIDE_EFFECTS__
function Lc(e) {
  return qe !== null && !vn && qe.f & un && (mn === null ? tp([e]) : mn.push(e)), e;
}
function U(e, t) {
  return qe !== null && !vn && bs() && qe.f & (un | Fa) && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (mn === null || !mn.includes(e)) && Ug(), da(e, t);
}
function da(e, t) {
  return e.equals(t) || (e.v, e.v = t, e.wv = Wc(), Ic(e, Fn), bs() && Xe !== null && Xe.f & wt && !(Xe.f & (jn | co)) && (Tn === null ? np([e]) : Tn.push(e))), t;
}
function Rl(e, t = 1) {
  var n = g(e), r = t === 1 ? n++ : n--;
  return U(e, n), r;
}
function Ic(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = bs(), o = n.length, i = 0; i < o; i++) {
      var s = n[i], a = s.f;
      a & Fn || !r && s === Xe || (cn(s, t), a & (wt | Jt) && (a & un ? Ic(
        /** @type {Derived} */
        s,
        Nr
      ) : ys(
        /** @type {Effect} */
        s
      )));
    }
}
// @__NO_SIDE_EFFECTS__
function Me(e) {
  var t = un | Fn, n = qe !== null && qe.f & un ? (
    /** @type {Derived} */
    qe
  ) : null;
  return Xe === null || n !== null && n.f & Jt ? t |= Jt : Xe.f |= Oc, {
    ctx: Be,
    deps: null,
    effects: null,
    equals: zc,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: n ?? Xe
  };
}
// @__NO_SIDE_EFFECTS__
function pe(e) {
  const t = /* @__PURE__ */ Me(e);
  return t.equals = Qa, t;
}
function Ac(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      Qt(
        /** @type {Effect} */
        t[n]
      );
  }
}
function Jg(e) {
  for (var t = e.parent; t !== null; ) {
    if (!(t.f & un))
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function Qg(e) {
  var t, n = Xe;
  cr(Jg(e));
  try {
    Ac(e), t = Fc(e);
  } finally {
    cr(n);
  }
  return t;
}
function Rc(e) {
  var t = Qg(e), n = (nr || e.f & Jt) && e.deps !== null ? Nr : wt;
  cn(e, n), e.equals(t) || (e.v = t, e.wv = Wc());
}
function ps(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let ke = !1;
function Rt(e) {
  ke = e;
}
let De;
function kt(e) {
  if (e === null)
    throw ps(), Br;
  return De = e;
}
function bn() {
  return kt(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Cn(De)
  );
}
function K(e) {
  if (ke) {
    if (/* @__PURE__ */ Cn(De) !== null)
      throw ps(), Br;
    De = e;
  }
}
function Pe(e = 1) {
  if (ke) {
    for (var t = e, n = De; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ Cn(n);
    De = n;
  }
}
function fa() {
  for (var e = 0, t = De; ; ) {
    if (t.nodeType === 8) {
      var n = (
        /** @type {Comment} */
        t.data
      );
      if (n === ja) {
        if (e === 0) return t;
        e -= 1;
      } else (n === Pc || n === Wa) && (e += 1);
    }
    var r = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Cn(t)
    );
    t.remove(), t = r;
  }
}
function It(e, t = null, n) {
  if (typeof e != "object" || e === null || or in e)
    return e;
  const r = Ua(e);
  if (r !== zg && r !== Lg)
    return e;
  var o = /* @__PURE__ */ new Map(), i = Wo(e), s = Ot(0);
  i && o.set("length", Ot(
    /** @type {any[]} */
    e.length
  ));
  var a;
  return new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(l, u, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && Fg();
        var d = o.get(u);
        return d === void 0 ? (d = Ot(c.value), o.set(u, d)) : U(d, It(c.value, a)), !0;
      },
      deleteProperty(l, u) {
        var c = o.get(u);
        if (c === void 0)
          u in l && o.set(u, Ot(Pt));
        else {
          if (i && typeof u == "string") {
            var d = (
              /** @type {Source<number>} */
              o.get("length")
            ), f = Number(u);
            Number.isInteger(f) && f < d.v && U(d, f);
          }
          U(c, Pt), Zl(s);
        }
        return !0;
      },
      get(l, u, c) {
        var d;
        if (u === or)
          return e;
        var f = o.get(u), h = u in l;
        if (f === void 0 && (!h || (d = An(l, u)) != null && d.writable) && (f = Ot(It(h ? l[u] : Pt, a)), o.set(u, f)), f !== void 0) {
          var p = g(f);
          return p === Pt ? void 0 : p;
        }
        return Reflect.get(l, u, c);
      },
      getOwnPropertyDescriptor(l, u) {
        var c = Reflect.getOwnPropertyDescriptor(l, u);
        if (c && "value" in c) {
          var d = o.get(u);
          d && (c.value = g(d));
        } else if (c === void 0) {
          var f = o.get(u), h = f == null ? void 0 : f.v;
          if (f !== void 0 && h !== Pt)
            return {
              enumerable: !0,
              configurable: !0,
              value: h,
              writable: !0
            };
        }
        return c;
      },
      has(l, u) {
        var c;
        if (u === or)
          return !0;
        var d = o.get(u), f = d !== void 0 && d.v !== Pt || Reflect.has(l, u);
        if (d !== void 0 || Xe !== null && (!f || (c = An(l, u)) != null && c.writable)) {
          d === void 0 && (d = Ot(f ? It(l[u], a) : Pt), o.set(u, d));
          var h = g(d);
          if (h === Pt)
            return !1;
        }
        return f;
      },
      set(l, u, c, d) {
        var f, h = o.get(u), p = u in l;
        if (i && u === "length")
          for (var b = c; b < /** @type {Source<number>} */
          h.v; b += 1) {
            var x = o.get(b + "");
            x !== void 0 ? U(x, Pt) : b in l && (x = Ot(Pt), o.set(b + "", x));
          }
        h === void 0 ? (!p || (f = An(l, u)) != null && f.writable) && (h = Ot(void 0), U(h, It(c, a)), o.set(u, h)) : (p = h.v !== Pt, U(h, It(c, a)));
        var k = Reflect.getOwnPropertyDescriptor(l, u);
        if (k != null && k.set && k.set.call(d, c), !p) {
          if (i && typeof u == "string") {
            var v = (
              /** @type {Source<number>} */
              o.get("length")
            ), $ = Number(u);
            Number.isInteger($) && $ >= v.v && U(v, $ + 1);
          }
          Zl(s);
        }
        return !0;
      },
      ownKeys(l) {
        g(s);
        var u = Reflect.ownKeys(l).filter((f) => {
          var h = o.get(f);
          return h === void 0 || h.v !== Pt;
        });
        for (var [c, d] of o)
          d.v !== Pt && !(c in l) && u.push(c);
        return u;
      },
      setPrototypeOf() {
        qg();
      }
    }
  );
}
function Zl(e, t = 1) {
  U(e, e.v + t);
}
var Mt, Zc, Bc, Xc;
function ha() {
  if (Mt === void 0) {
    Mt = window, Zc = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype;
    Bc = An(t, "firstChild").get, Xc = An(t, "nextSibling").get, e.__click = void 0, e.__className = "", e.__attributes = null, e.__styles = null, e.__e = void 0, Text.prototype.__t = void 0;
  }
}
function Xn(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Ct(e) {
  return Bc.call(e);
}
// @__NO_SIDE_EFFECTS__
function Cn(e) {
  return Xc.call(e);
}
function j(e, t) {
  if (!ke)
    return /* @__PURE__ */ Ct(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ Ct(De)
  );
  if (n === null)
    n = De.appendChild(Xn());
  else if (t && n.nodeType !== 3) {
    var r = Xn();
    return n == null || n.before(r), kt(r), r;
  }
  return kt(n), n;
}
function ye(e, t) {
  if (!ke) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Ct(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Cn(n) : n;
  }
  return De;
}
function A(e, t = 1, n = !1) {
  let r = ke ? De : e;
  for (var o; t--; )
    o = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ Cn(r);
  if (!ke)
    return r;
  var i = r == null ? void 0 : r.nodeType;
  if (n && i !== 3) {
    var s = Xn();
    return r === null ? o == null || o.after(s) : r.before(s), kt(s), s;
  }
  return kt(r), /** @type {TemplateNode} */
  r;
}
function el(e) {
  e.textContent = "";
}
const Kc = 0, ep = 1;
let xi = !1, $i = Kc, Oo = !1, Do = null, Xr = !1, tl = !1;
function Bl(e) {
  Xr = e;
}
function Xl(e) {
  tl = e;
}
let mr = [], Kr = 0, qe = null, vn = !1;
function ur(e) {
  qe = e;
}
let Xe = null;
function cr(e) {
  Xe = e;
}
let mn = null;
function tp(e) {
  mn = e;
}
let xt = null, Lt = 0, Tn = null;
function np(e) {
  Tn = e;
}
let Yc = 1, Zi = 0, nr = !1;
function Wc() {
  return ++Yc;
}
function ho(e) {
  var t, n = e.f;
  if (n & Fn)
    return !0;
  if (n & Nr) {
    var r = e.deps, o = (n & Jt) !== 0;
    if (r !== null) {
      var i, s, a = (n & Li) !== 0, l = o && Xe !== null && !nr, u = r.length;
      if (a || l) {
        var c = (
          /** @type {Derived} */
          e
        ), d = c.parent;
        for (i = 0; i < u; i++)
          s = r[i], (a || !((t = s == null ? void 0 : s.reactions) != null && t.includes(c))) && (s.reactions ?? (s.reactions = [])).push(c);
        a && (c.f ^= Li), l && d !== null && !(d.f & Jt) && (c.f ^= Jt);
      }
      for (i = 0; i < u; i++)
        if (s = r[i], ho(
          /** @type {Derived} */
          s
        ) && Rc(
          /** @type {Derived} */
          s
        ), s.wv > e.wv)
          return !0;
    }
    (!o || Xe !== null && !nr) && cn(e, wt);
  }
  return !1;
}
function rp(e, t) {
  for (var n = t; n !== null; ) {
    if (n.f & zi)
      try {
        n.fn(e);
        return;
      } catch {
        n.f ^= zi;
      }
    n = n.parent;
  }
  throw xi = !1, e;
}
function op(e) {
  return (e.f & gs) === 0 && (e.parent === null || (e.parent.f & zi) === 0);
}
function vs(e, t, n, r) {
  if (xi) {
    if (n === null && (xi = !1), op(t))
      throw e;
    return;
  }
  n !== null && (xi = !0);
  {
    rp(e, t);
    return;
  }
}
function jc(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null)
    for (var o = 0; o < r.length; o++) {
      var i = r[o];
      i.f & un ? jc(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? cn(i, Fn) : i.f & wt && cn(i, Nr), ys(
        /** @type {Effect} */
        i
      ));
    }
}
function Fc(e) {
  var t, n = xt, r = Lt, o = Tn, i = qe, s = nr, a = mn, l = Be, u = vn, c = e.f;
  xt = /** @type {null | Value[]} */
  null, Lt = 0, Tn = null, qe = c & (jn | co) ? null : e, nr = (c & Jt) !== 0 && (!Xr || i === null || u), mn = null, Kl(e.ctx), vn = !1, Zi++;
  try {
    var d = (
      /** @type {Function} */
      (0, e.fn)()
    ), f = e.deps;
    if (xt !== null) {
      var h;
      if (Bi(e, Lt), f !== null && Lt > 0)
        for (f.length = Lt + xt.length, h = 0; h < xt.length; h++)
          f[Lt + h] = xt[h];
      else
        e.deps = f = xt;
      if (!nr)
        for (h = Lt; h < f.length; h++)
          ((t = f[h]).reactions ?? (t.reactions = [])).push(e);
    } else f !== null && Lt < f.length && (Bi(e, Lt), f.length = Lt);
    if (bs() && Tn !== null && !vn && f !== null && !(e.f & (un | Nr | Fn)))
      for (h = 0; h < /** @type {Source[]} */
      Tn.length; h++)
        jc(
          Tn[h],
          /** @type {Effect} */
          e
        );
    return i !== null && Zi++, d;
  } finally {
    xt = n, Lt = r, Tn = o, qe = i, nr = s, mn = a, Kl(l), vn = u;
  }
}
function ip(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Hg.call(n, e);
    if (r !== -1) {
      var o = n.length - 1;
      o === 0 ? n = t.reactions = null : (n[r] = n[o], n.pop());
    }
  }
  n === null && t.f & un && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (xt === null || !xt.includes(t)) && (cn(t, Nr), t.f & (Jt | Li) || (t.f ^= Li), Ac(
    /** @type {Derived} **/
    t
  ), Bi(
    /** @type {Derived} **/
    t,
    0
  ));
}
function Bi(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      ip(e, n[r]);
}
function ms(e) {
  var t = e.f;
  if (!(t & gs)) {
    cn(e, wt);
    var n = Xe, r = Be;
    Xe = e;
    try {
      t & Fa ? gp(e) : ed(e), Qc(e);
      var o = Fc(e);
      e.teardown = typeof o == "function" ? o : null, e.wv = Yc;
      var i = e.deps, s;
      Mg && xg && e.f & Fn;
    } catch (a) {
      vs(a, e, n, r || e.ctx);
    } finally {
      Xe = n;
    }
  }
}
function qc() {
  if (Kr > 1e3) {
    Kr = 0;
    try {
      Yg();
    } catch (e) {
      if (Do !== null)
        vs(e, Do, null);
      else
        throw e;
    }
  }
  Kr++;
}
function Gc(e) {
  var t = e.length;
  if (t !== 0) {
    qc();
    var n = Xr;
    Xr = !0;
    try {
      for (var r = 0; r < t; r++) {
        var o = e[r];
        o.f & wt || (o.f ^= wt);
        var i = lp(o);
        sp(i);
      }
    } finally {
      Xr = n;
    }
  }
}
function sp(e) {
  var t = e.length;
  if (t !== 0)
    for (var n = 0; n < t; n++) {
      var r = e[n];
      if (!(r.f & (gs | In)))
        try {
          ho(r) && (ms(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? td(r) : r.fn = null));
        } catch (o) {
          vs(o, r, null, r.ctx);
        }
    }
}
function ap() {
  if (Oo = !1, Kr > 1001)
    return;
  const e = mr;
  mr = [], Gc(e), Oo || (Kr = 0, Do = null);
}
function ys(e) {
  $i === Kc && (Oo || (Oo = !0, queueMicrotask(ap))), Do = e;
  for (var t = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (n & (co | jn)) {
      if (!(n & wt)) return;
      t.f ^= wt;
    }
  }
  mr.push(t);
}
function lp(e) {
  var t = [], n = e.first;
  e: for (; n !== null; ) {
    var r = n.f, o = (r & jn) !== 0, i = o && (r & wt) !== 0, s = n.next;
    if (!i && !(r & In)) {
      if (r & Vc)
        t.push(n);
      else if (o)
        n.f ^= wt;
      else {
        var a = qe;
        try {
          qe = n, ho(n) && ms(n);
        } catch (c) {
          vs(c, n, null, n.ctx);
        } finally {
          qe = a;
        }
      }
      var l = n.first;
      if (l !== null) {
        n = l;
        continue;
      }
    }
    if (s === null) {
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
    n = s;
  }
  return t;
}
function m(e) {
  var t = $i, n = mr;
  try {
    qc();
    const o = [];
    $i = ep, mr = o, Oo = !1, Gc(n);
    var r = e == null ? void 0 : e();
    return Zg(), (mr.length > 0 || o.length > 0) && m(), Kr = 0, Do = null, r;
  } finally {
    $i = t, mr = n;
  }
}
function g(e) {
  var t = e.f, n = (t & un) !== 0;
  if (qe !== null && !vn) {
    mn !== null && mn.includes(e) && Gg();
    var r = qe.deps;
    e.rv < Zi && (e.rv = Zi, xt === null && r !== null && r[Lt] === e ? Lt++ : xt === null ? xt = [e] : (!nr || !xt.includes(e)) && xt.push(e));
  } else if (n && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var o = (
      /** @type {Derived} */
      e
    ), i = o.parent;
    i !== null && !(i.f & Jt) && (o.f ^= Jt);
  }
  return n && (o = /** @type {Derived} */
  e, ho(o) && Rc(o)), e.v;
}
function xn(e) {
  var t = vn;
  try {
    return vn = !0, e();
  } finally {
    vn = t;
  }
}
const up = -7169;
function cn(e, t) {
  e.f = e.f & up | t;
}
function G(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (or in e)
      ga(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && or in n && ga(n);
      }
  }
}
function ga(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e)
      try {
        ga(e[r], t);
      } catch {
      }
    const n = Ua(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = Dc(n);
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
function Uc(e) {
  Xe === null && qe === null && Kg(), qe !== null && qe.f & Jt && Xe === null && Xg(), tl && Bg();
}
function cp(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Pr(e, t, n, r = !0) {
  var o = (e & co) !== 0, i = Xe, s = {
    ctx: Be,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Fn,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: o ? null : i,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0
  };
  if (n) {
    var a = Xr;
    try {
      Bl(!0), ms(s), s.f |= Vg;
    } catch (c) {
      throw Qt(s), c;
    } finally {
      Bl(a);
    }
  } else t !== null && ys(s);
  var l = n && s.deps === null && s.first === null && s.nodes_start === null && s.teardown === null && (s.f & (Oc | zi)) === 0;
  if (!l && !o && r && (i !== null && cp(s, i), qe !== null && qe.f & un)) {
    var u = (
      /** @type {Derived} */
      qe
    );
    (u.effects ?? (u.effects = [])).push(s);
  }
  return s;
}
function Jc(e) {
  const t = Pr(hs, null, !1);
  return cn(t, wt), t.teardown = e, t;
}
function Ur(e) {
  Uc();
  var t = Xe !== null && (Xe.f & jn) !== 0 && Be !== null && !Be.m;
  if (t) {
    var n = (
      /** @type {ComponentContext} */
      Be
    );
    (n.e ?? (n.e = [])).push({
      fn: e,
      effect: Xe,
      reaction: qe
    });
  } else {
    var r = At(e);
    return r;
  }
}
function dp(e) {
  return Uc(), go(e);
}
function fp(e) {
  const t = Pr(co, e, !0);
  return () => {
    Qt(t);
  };
}
function hp(e) {
  const t = Pr(co, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Jr(t, () => {
      Qt(t), r(void 0);
    }) : (Qt(t), r(void 0));
  });
}
function At(e) {
  return Pr(Vc, e, !1);
}
function ae(e, t) {
  var n = (
    /** @type {ComponentContextLegacy} */
    Be
  ), r = { effect: null, ran: !1 };
  n.l.r1.push(r), r.effect = go(() => {
    e(), !r.ran && (r.ran = !0, U(n.l.r2, !0), xn(t));
  });
}
function gt() {
  var e = (
    /** @type {ComponentContextLegacy} */
    Be
  );
  go(() => {
    if (g(e.l.r2)) {
      for (var t of e.l.r1) {
        var n = t.effect;
        n.f & wt && cn(n, Nr), ho(n) && ms(n), t.ran = !1;
      }
      e.l.r2.v = !1;
    }
  });
}
function go(e) {
  return Pr(hs, e, !0);
}
function Se(e, t = [], n = Me) {
  const r = t.map(n);
  return Mr(() => e(...r.map(g)));
}
function Mr(e, t = 0) {
  return Pr(hs | Fa | t, e, !0);
}
function Kn(e, t = !0) {
  return Pr(hs | jn, e, !0, t);
}
function Qc(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = tl, r = qe;
    Xl(!0), ur(null);
    try {
      t.call(null);
    } finally {
      Xl(n), ur(r);
    }
  }
}
function ed(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    var r = n.next;
    Qt(n, t), n = r;
  }
}
function gp(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    t.f & jn || Qt(t), t = n;
  }
}
function Qt(e, t = !0) {
  var n = !1;
  if ((t || e.f & Dg) && e.nodes_start !== null) {
    for (var r = e.nodes_start, o = e.nodes_end; r !== null; ) {
      var i = r === o ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Cn(r)
      );
      r.remove(), r = i;
    }
    n = !0;
  }
  ed(e, t && !n), Bi(e, 0), cn(e, gs);
  var s = e.transitions;
  if (s !== null)
    for (const l of s)
      l.stop();
  Qc(e);
  var a = e.parent;
  a !== null && a.first !== null && td(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function td(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function Jr(e, t) {
  var n = [];
  nl(e, n, !0), nd(n, () => {
    Qt(e), t && t();
  });
}
function nd(e, t) {
  var n = e.length;
  if (n > 0) {
    var r = () => --n || t();
    for (var o of e)
      o.out(r);
  } else
    t();
}
function nl(e, t, n) {
  if (!(e.f & In)) {
    if (e.f ^= In, e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || n) && t.push(s);
    for (var r = e.first; r !== null; ) {
      var o = r.next, i = (r.f & fo) !== 0 || (r.f & jn) !== 0;
      nl(r, t, i ? n : !1), r = o;
    }
  }
}
function To(e) {
  rd(e, !0);
}
function rd(e, t) {
  if (e.f & In) {
    e.f ^= In, e.f & wt || (e.f ^= wt), ho(e) && (cn(e, Fn), ys(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, o = (n.f & fo) !== 0 || (n.f & jn) !== 0;
      rd(n, o ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || t) && i.in();
  }
}
function ws(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let Be = null;
function Kl(e) {
  Be = e;
}
function xr(e) {
  return (
    /** @type {T} */
    rl().get(e)
  );
}
function Qr(e, t) {
  return rl().set(e, t), t;
}
function pp(e) {
  return rl().has(e);
}
function le(e, t = !1, n) {
  Be = {
    p: Be,
    c: null,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  }, uo && !t && (Be.l = {
    s: null,
    u: null,
    r1: [],
    r2: Ot(!1)
  });
}
function ue(e) {
  const t = Be;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const s = t.e;
    if (s !== null) {
      var n = Xe, r = qe;
      t.e = null;
      try {
        for (var o = 0; o < s.length; o++) {
          var i = s[o];
          cr(i.effect), ur(i.reaction), At(i.fn);
        }
      } finally {
        cr(n), ur(r);
      }
    }
    Be = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function bs() {
  return !uo || Be !== null && Be.l === null;
}
function rl(e) {
  return Be === null && ws(), Be.c ?? (Be.c = new Map(vp(Be) || void 0));
}
function vp(e) {
  let t = e.p;
  for (; t !== null; ) {
    const n = t.c;
    if (n !== null)
      return n;
    t = t.p;
  }
  return null;
}
function mp(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const yp = [
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
function wp(e) {
  return yp.includes(e);
}
const bp = {
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
function xp(e) {
  return e = e.toLowerCase(), bp[e] ?? e;
}
const $p = ["touchstart", "touchmove"];
function _p(e) {
  return $p.includes(e);
}
const Cp = (
  /** @type {const} */
  ["textarea", "script", "style", "title"]
);
function kp(e) {
  return Cp.includes(
    /** @type {RAW_TEXT_ELEMENTS[number]} */
    e
  );
}
function Sp(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, jo(() => {
      document.activeElement === n && e.focus();
    });
  }
}
function Ep(e) {
  ke && /* @__PURE__ */ Ct(e) !== null && el(e);
}
let Yl = !1;
function Np() {
  Yl || (Yl = !0, document.addEventListener(
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
function Pp(e) {
  var t = qe, n = Xe;
  ur(null), cr(null);
  try {
    return e();
  } finally {
    ur(t), cr(n);
  }
}
const od = /* @__PURE__ */ new Set(), pa = /* @__PURE__ */ new Set();
function id(e, t, n, r = {}) {
  function o(i) {
    if (r.capture || $o.call(t, i), !i.cancelBubble)
      return Pp(() => n == null ? void 0 : n.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? jo(() => {
    t.addEventListener(e, o, r);
  }) : t.addEventListener(e, o, r), o;
}
function Ue(e, t, n, r, o) {
  var i = { capture: r, passive: o }, s = id(e, t, n, i);
  (t === document.body || t === window || t === document) && Jc(() => {
    t.removeEventListener(e, s, i);
  });
}
function xs(e) {
  for (var t = 0; t < e.length; t++)
    od.add(e[t]);
  for (var n of pa)
    n(e);
}
function $o(e) {
  var t, n = this, r = (
    /** @type {Node} */
    n.ownerDocument
  ), o = e.type, i = ((t = e.composedPath) == null ? void 0 : t.call(e)) || [], s = (
    /** @type {null | Element} */
    i[0] || e.target
  ), a = 0, l = e.__root;
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
    u <= c && (a = u);
  }
  if (s = /** @type {Element} */
  i[a] || e.target, s !== n) {
    Mo(e, "currentTarget", {
      configurable: !0,
      get() {
        return s || r;
      }
    });
    var d = qe, f = Xe;
    ur(null), cr(null);
    try {
      for (var h, p = []; s !== null; ) {
        var b = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var x = s["__" + o];
          if (x !== void 0 && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === s))
            if (Wo(x)) {
              var [k, ...v] = x;
              k.apply(s, [e, ...v]);
            } else
              x.call(s, e);
        } catch ($) {
          h ? p.push($) : h = $;
        }
        if (e.cancelBubble || b === n || b === null)
          break;
        s = b;
      }
      if (h) {
        for (let $ of p)
          queueMicrotask(() => {
            throw $;
          });
        throw h;
      }
    } finally {
      e.__root = n, delete e.currentTarget, ur(d), cr(f);
    }
  }
}
function ol(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function Tt(e, t) {
  var n = (
    /** @type {Effect} */
    Xe
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function ne(e, t) {
  var n = (t & Nc) !== 0, r = (t & Pg) !== 0, o, i = !e.startsWith("<!>");
  return () => {
    if (ke)
      return Tt(De, null), De;
    o === void 0 && (o = ol(i ? e : "<!>" + e), n || (o = /** @type {Node} */
    /* @__PURE__ */ Ct(o)));
    var s = (
      /** @type {TemplateNode} */
      r || Zc ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ct(s)
      ), l = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      Tt(a, l);
    } else
      Tt(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function we(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), o = (t & Nc) !== 0, i = `<${n}>${r ? e : "<!>" + e}</${n}>`, s;
  return () => {
    if (ke)
      return Tt(De, null), De;
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        ol(i)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ Ct(a)
      );
      if (o)
        for (s = document.createDocumentFragment(); /* @__PURE__ */ Ct(l); )
          s.appendChild(
            /** @type {Node} */
            /* @__PURE__ */ Ct(l)
          );
      else
        s = /** @type {Element} */
        /* @__PURE__ */ Ct(l);
    }
    var u = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    if (o) {
      var c = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ct(u)
      ), d = (
        /** @type {TemplateNode} */
        u.lastChild
      );
      Tt(c, d);
    } else
      Tt(u, u);
    return u;
  };
}
function Re(e = "") {
  if (!ke) {
    var t = Xn(e + "");
    return Tt(t, t), t;
  }
  var n = De;
  return n.nodeType !== 3 && (n.before(n = Xn()), kt(n)), Tt(n, n), n;
}
function Je() {
  if (ke)
    return Tt(De, null), De;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = Xn();
  return e.append(t, n), Tt(t, n), e;
}
function H(e, t) {
  if (ke) {
    Xe.nodes_end = De, bn();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function kn(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = n, e.nodeValue = n + "");
}
function sd(e, t) {
  return ad(e, t);
}
function Mp(e, t) {
  ha(), t.intro = t.intro ?? !1;
  const n = t.target, r = ke, o = De;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ct(n)
    ); i && (i.nodeType !== 8 || /** @type {Comment} */
    i.data !== Pc); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ Cn(i);
    if (!i)
      throw Br;
    Rt(!0), kt(
      /** @type {Comment} */
      i
    ), bn();
    const s = ad(e, { ...t, anchor: i });
    if (De === null || De.nodeType !== 8 || /** @type {Comment} */
    De.data !== ja)
      throw ps(), Br;
    return Rt(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s === Br)
      return t.recover === !1 && Wg(), ha(), el(n), Rt(!1), sd(e, t);
    throw s;
  } finally {
    Rt(r), kt(o);
  }
}
const Hr = /* @__PURE__ */ new Map();
function ad(e, { target: t, anchor: n, props: r = {}, events: o, context: i, intro: s = !0 }) {
  ha();
  var a = /* @__PURE__ */ new Set(), l = (d) => {
    for (var f = 0; f < d.length; f++) {
      var h = d[f];
      if (!a.has(h)) {
        a.add(h);
        var p = _p(h);
        t.addEventListener(h, $o, { passive: p });
        var b = Hr.get(h);
        b === void 0 ? (document.addEventListener(h, $o, { passive: p }), Hr.set(h, 1)) : Hr.set(h, b + 1);
      }
    }
  };
  l(Ga(od)), pa.add(l);
  var u = void 0, c = hp(() => {
    var d = n ?? t.appendChild(Xn());
    return Kn(() => {
      if (i) {
        le({});
        var f = (
          /** @type {ComponentContext} */
          Be
        );
        f.c = i;
      }
      o && (r.$$events = o), ke && Tt(
        /** @type {TemplateNode} */
        d,
        null
      ), u = e(d, r) || {}, ke && (Xe.nodes_end = De), i && ue();
    }), () => {
      var f;
      for (var h of a) {
        t.removeEventListener(h, $o);
        var p = (
          /** @type {number} */
          Hr.get(h)
        );
        --p === 0 ? (document.removeEventListener(h, $o), Hr.delete(h)) : Hr.set(h, p);
      }
      pa.delete(l), d !== n && ((f = d.parentNode) == null || f.removeChild(d));
    };
  });
  return va.set(u, c), u;
}
let va = /* @__PURE__ */ new WeakMap();
function Vp(e, t) {
  const n = va.get(e);
  return n ? (va.delete(e), n(t)) : Promise.resolve();
}
function Ce(e, t, n = !1) {
  ke && bn();
  var r = e, o = null, i = null, s = Pt, a = n ? fo : 0, l = !1;
  const u = (d, f = !0) => {
    l = !0, c(f, d);
  }, c = (d, f) => {
    if (s === (s = d)) return;
    let h = !1;
    if (ke) {
      const p = (
        /** @type {Comment} */
        r.data === Wa
      );
      !!s === p && (r = fa(), kt(r), Rt(!1), h = !0);
    }
    s ? (o ? To(o) : f && (o = Kn(() => f(r))), i && Jr(i, () => {
      i = null;
    })) : (i ? To(i) : f && (i = Kn(() => f(r))), o && Jr(o, () => {
      o = null;
    })), h && Rt(!0);
  };
  Mr(() => {
    l = !1, t(u), l || c(null, null);
  }, a), ke && (r = De);
}
function $s(e, t) {
  return t;
}
function Op(e, t, n, r) {
  for (var o = [], i = t.length, s = 0; s < i; s++)
    nl(t[s].e, o, !0);
  var a = i > 0 && o.length === 0 && n !== null;
  if (a) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    el(l), l.append(
      /** @type {Element} */
      n
    ), r.clear(), Qn(e, t[0].prev, t[i - 1].next);
  }
  nd(o, () => {
    for (var u = 0; u < i; u++) {
      var c = t[u];
      a || (r.delete(c.k), Qn(e, c.prev, c.next)), Qt(c.e, !a);
    }
  });
}
function Bt(e, t, n, r, o, i = null) {
  var s = e, a = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, l = (t & Sc) !== 0;
  if (l) {
    var u = (
      /** @type {Element} */
      e
    );
    s = ke ? kt(
      /** @type {Comment | Text} */
      /* @__PURE__ */ Ct(u)
    ) : u.appendChild(Xn());
  }
  ke && bn();
  var c = null, d = !1, f = /* @__PURE__ */ pe(() => {
    var h = n();
    return Wo(h) ? h : h == null ? [] : Ga(h);
  });
  Mr(() => {
    var h = g(f), p = h.length;
    if (d && p === 0)
      return;
    d = p === 0;
    let b = !1;
    if (ke) {
      var x = (
        /** @type {Comment} */
        s.data === Wa
      );
      x !== (p === 0) && (s = fa(), kt(s), Rt(!1), b = !0);
    }
    if (ke) {
      for (var k = null, v, $ = 0; $ < p; $++) {
        if (De.nodeType === 8 && /** @type {Comment} */
        De.data === ja) {
          s = /** @type {Comment} */
          De, b = !0, Rt(!1);
          break;
        }
        var w = h[$], C = r(w, $);
        v = ld(
          De,
          a,
          k,
          null,
          w,
          C,
          $,
          o,
          t,
          n
        ), a.items.set(C, v), k = v;
      }
      p > 0 && kt(fa());
    }
    ke || Dp(h, a, s, o, t, r, n), i !== null && (p === 0 ? c ? To(c) : c = Kn(() => i(s)) : c !== null && Jr(c, () => {
      c = null;
    })), b && Rt(!0), g(f);
  }), ke && (s = De);
}
function Dp(e, t, n, r, o, i, s) {
  var a, l, u, c, d = (o & _g) !== 0, f = (o & (Ka | Ya)) !== 0, h = e.length, p = t.items, b = t.first, x = b, k, v = null, $, w = [], C = [], N, V, P, O;
  if (d)
    for (O = 0; O < h; O += 1)
      N = e[O], V = i(N, O), P = p.get(V), P !== void 0 && ((a = P.a) == null || a.measure(), ($ ?? ($ = /* @__PURE__ */ new Set())).add(P));
  for (O = 0; O < h; O += 1) {
    if (N = e[O], V = i(N, O), P = p.get(V), P === void 0) {
      var T = x ? (
        /** @type {TemplateNode} */
        x.e.nodes_start
      ) : n;
      v = ld(
        T,
        t,
        v,
        v === null ? t.first : v.next,
        N,
        V,
        O,
        r,
        o,
        s
      ), p.set(V, v), w = [], C = [], x = v.next;
      continue;
    }
    if (f && Tp(P, N, O, o), P.e.f & In && (To(P.e), d && ((l = P.a) == null || l.unfix(), ($ ?? ($ = /* @__PURE__ */ new Set())).delete(P))), P !== x) {
      if (k !== void 0 && k.has(P)) {
        if (w.length < C.length) {
          var L = C[0], I;
          v = L.prev;
          var B = w[0], S = w[w.length - 1];
          for (I = 0; I < w.length; I += 1)
            Wl(w[I], L, n);
          for (I = 0; I < C.length; I += 1)
            k.delete(C[I]);
          Qn(t, B.prev, S.next), Qn(t, v, B), Qn(t, S, L), x = L, v = S, O -= 1, w = [], C = [];
        } else
          k.delete(P), Wl(P, x, n), Qn(t, P.prev, P.next), Qn(t, P, v === null ? t.first : v.next), Qn(t, v, P), v = P;
        continue;
      }
      for (w = [], C = []; x !== null && x.k !== V; )
        x.e.f & In || (k ?? (k = /* @__PURE__ */ new Set())).add(x), C.push(x), x = x.next;
      if (x === null)
        continue;
      P = x;
    }
    w.push(P), v = P, x = P.next;
  }
  if (x !== null || k !== void 0) {
    for (var M = k === void 0 ? [] : Ga(k); x !== null; )
      x.e.f & In || M.push(x), x = x.next;
    var _ = M.length;
    if (_ > 0) {
      var E = o & Sc && h === 0 ? n : null;
      if (d) {
        for (O = 0; O < _; O += 1)
          (u = M[O].a) == null || u.measure();
        for (O = 0; O < _; O += 1)
          (c = M[O].a) == null || c.fix();
      }
      Op(t, M, E, p);
    }
  }
  d && jo(() => {
    var D;
    if ($ !== void 0)
      for (P of $)
        (D = P.a) == null || D.apply();
  }), Xe.first = t.first && t.first.e, Xe.last = v && v.e;
}
function Tp(e, t, n, r) {
  r & Ka && da(e.v, t), r & Ya ? da(
    /** @type {Value<number>} */
    e.i,
    n
  ) : e.i = n;
}
function ld(e, t, n, r, o, i, s, a, l, u) {
  var c = (l & Ka) !== 0, d = (l & Cg) === 0, f = c ? d ? /* @__PURE__ */ Fo(o) : Ot(o) : o, h = l & Ya ? Ot(s) : s, p = {
    i: h,
    v: f,
    k: i,
    a: null,
    // @ts-expect-error
    e: null,
    prev: n,
    next: r
  };
  try {
    return p.e = Kn(() => a(e, f, h, u), ke), p.e.prev = n && n.e, p.e.next = r && r.e, n === null ? t.first = p : (n.next = p, n.e.next = p.e), r !== null && (r.prev = p, r.e.prev = p.e), p;
  } finally {
  }
}
function Wl(e, t, n) {
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
    var s = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Cn(i)
    );
    o.before(i), i = s;
  }
}
function Qn(e, t, n) {
  t === null ? e.first = n : (t.next = n, t.e.next = n && n.e), n !== null && (n.prev = t, n.e.prev = t && t.e);
}
function ud(e, t, n, r, o) {
  var i = e, s = "", a;
  Mr(() => {
    if (s === (s = t() ?? "")) {
      ke && bn();
      return;
    }
    a !== void 0 && (Qt(a), a = void 0), s !== "" && (a = Kn(() => {
      if (ke) {
        De.data;
        for (var l = bn(), u = l; l !== null && (l.nodeType !== 8 || /** @type {Comment} */
        l.data !== ""); )
          u = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ Cn(l);
        if (l === null)
          throw ps(), Br;
        Tt(De, u), i = kt(l);
        return;
      }
      var c = s + "", d = ol(c);
      Tt(
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ct(d),
        /** @type {TemplateNode} */
        d.lastChild
      ), i.before(d);
    }));
  });
}
function mt(e, t, n, r, o) {
  var i;
  ke && bn();
  var s = (i = t.$$slots) == null ? void 0 : i[n], a = !1;
  s === !0 && (s = t[n === "default" ? "children" : n], a = !0), s === void 0 || s(e, a ? () => r : r);
}
function Hp(e) {
  const t = {};
  e.children && (t.default = !0);
  for (const n in e.$$slots)
    t[n] = !0;
  return t;
}
function $r(e, t, ...n) {
  var r = e, o = ft, i;
  Mr(() => {
    o !== (o = t()) && (i && (Qt(i), i = null), i = Kn(() => (
      /** @type {SnippetFn} */
      o(r, ...n)
    )));
  }, fo), ke && (r = De);
}
function cd(e, t, n) {
  ke && bn();
  var r = e, o, i;
  Mr(() => {
    o !== (o = t()) && (i && (Jr(i), i = null), o && (i = Kn(() => n(r, o))));
  }, fo), ke && (r = De);
}
function zp(e, t, n, r, o, i) {
  let s = ke;
  ke && bn();
  var a, l, u = null;
  ke && De.nodeType === 1 && (u = /** @type {Element} */
  De, bn());
  var c = (
    /** @type {TemplateNode} */
    ke ? De : e
  ), d;
  Mr(() => {
    const f = t() || null;
    var h = f === "svg" ? Mc : null;
    f !== a && (d && (f === null ? Jr(d, () => {
      d = null, l = null;
    }) : f === l ? To(d) : Qt(d)), f && f !== l && (d = Kn(() => {
      if (u = ke ? (
        /** @type {Element} */
        u
      ) : h ? document.createElementNS(h, f) : document.createElement(f), Tt(u, u), r) {
        ke && kp(f) && u.append(document.createComment(""));
        var p = (
          /** @type {TemplateNode} */
          ke ? /* @__PURE__ */ Ct(u) : u.appendChild(Xn())
        );
        ke && (p === null ? Rt(!1) : kt(p)), r(u, p);
      }
      Xe.nodes_end = u, c.before(u);
    })), a = f, a && (l = a));
  }, fo), s && (Rt(!0), kt(c));
}
function Qe(e, t) {
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
function vt(e, t, n) {
  At(() => {
    var r = xn(() => t(e, n == null ? void 0 : n()) || {});
    if (n && r != null && r.update) {
      var o = !1, i = (
        /** @type {any} */
        {}
      );
      go(() => {
        var s = n();
        G(s), o && Ja(i, s) && (i = s, r.update(s));
      }), o = !0;
    }
    if (r != null && r.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function dd(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = dd(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Lp() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = dd(e)) && (r && (r += " "), r += t);
  return r;
}
function Sn(e) {
  return typeof e == "object" ? Lp(e) : e ?? "";
}
function fd(e) {
  if (ke) {
    var t = !1, n = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var r = e.value;
          se(e, "value", null), e.value = r;
        }
        if (e.hasAttribute("checked")) {
          var o = e.checked;
          se(e, "checked", null), e.checked = o;
        }
      }
    };
    e.__on_r = n, Rg(n), Np();
  }
}
function Ip(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function se(e, t, n, r) {
  var o = e.__attributes ?? (e.__attributes = {});
  ke && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = n) && (t === "style" && "__styles" in e && (e.__styles = {}), t === "loading" && (e[Tg] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && hd(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function dn(e, t, n, r, o = !1, i = !1, s = !1) {
  let a = ke && i;
  a && Rt(!1);
  var l = t || {}, u = e.tagName === "OPTION";
  for (var c in t)
    c in n || (n[c] = null);
  n.class && (n.class = Sn(n.class)), r !== void 0 && (n.class = n.class ? n.class + " " + r : r);
  var d = hd(e), f = (
    /** @type {Record<string, unknown>} **/
    e.__attributes ?? (e.__attributes = {})
  );
  for (const v in n) {
    let $ = n[v];
    if (u && v === "value" && $ == null) {
      e.value = e.__value = "", l[v] = $;
      continue;
    }
    var h = l[v];
    if ($ !== h) {
      l[v] = $;
      var p = v[0] + v[1];
      if (p !== "$$") {
        if (p === "on") {
          const w = {}, C = "$$" + v;
          let N = v.slice(2);
          var b = wp(N);
          if (mp(N) && (N = N.slice(0, -7), w.capture = !0), !b && h) {
            if ($ != null) continue;
            e.removeEventListener(N, l[C], w), l[C] = null;
          }
          if ($ != null)
            if (b)
              e[`__${N}`] = $, xs([N]);
            else {
              let V = function(P) {
                l[v].call(this, P);
              };
              l[C] = id(N, e, V, w);
            }
          else b && (e[`__${N}`] = void 0);
        } else if (v === "style" && $ != null)
          e.style.cssText = $ + "";
        else if (v === "autofocus")
          Sp(
            /** @type {HTMLElement} */
            e,
            !!$
          );
        else if (!i && (v === "__value" || v === "value" && $ != null))
          e.value = e.__value = $;
        else if (v === "selected" && u)
          Ip(
            /** @type {HTMLOptionElement} */
            e,
            $
          );
        else {
          var x = v;
          o || (x = xp(x));
          var k = x === "defaultValue" || x === "defaultChecked";
          if ($ == null && !i && !k)
            if (f[v] = null, x === "value" || x === "checked") {
              let w = (
                /** @type {HTMLInputElement} */
                e
              );
              const C = t === void 0;
              if (x === "value") {
                let N = w.defaultValue;
                w.removeAttribute(x), w.defaultValue = N, w.value = w.__value = C ? N : null;
              } else {
                let N = w.defaultChecked;
                w.removeAttribute(x), w.defaultChecked = N, w.checked = C ? N : !1;
              }
            } else
              e.removeAttribute(v);
          else k || d.includes(x) && (i || typeof $ != "string") ? e[x] = $ : typeof $ != "function" && se(e, x, $);
        }
        v === "style" && "__styles" in e && (e.__styles = {});
      }
    }
  }
  return a && Rt(!0), l;
}
var jl = /* @__PURE__ */ new Map();
function hd(e) {
  var t = jl.get(e.nodeName);
  if (t) return t;
  jl.set(e.nodeName, t = []);
  for (var n, r = e, o = Element.prototype; o !== r; ) {
    n = Dc(r);
    for (var i in n)
      n[i].set && t.push(i);
    r = Ua(r);
  }
  return t;
}
function Vr(e, t, n) {
  var r = e.__className, o = gd(t, n);
  ke && e.getAttribute("class") === o ? e.__className = o : (r !== o || ke && e.getAttribute("class") !== o) && (o === "" ? e.removeAttribute("class") : e.setAttribute("class", o), e.__className = o);
}
function eo(e, t, n) {
  var r = e.__className, o = gd(t, n);
  ke && e.className === o ? e.__className = o : (r !== o || ke && e.className !== o) && (t == null ? e.removeAttribute("class") : e.className = o, e.__className = o);
}
function gd(e, t) {
  return (e ?? "") + (t ? " " + t : "");
}
function rt(e, t, n) {
  if (n) {
    if (e.classList.contains(t)) return;
    e.classList.add(t);
  } else {
    if (!e.classList.contains(t)) return;
    e.classList.remove(t);
  }
}
function it(e, t, n, r) {
  var o = e.__styles ?? (e.__styles = {});
  o[t] !== n && (o[t] = n, n == null ? e.style.removeProperty(t) : e.style.setProperty(t, n, ""));
}
var vr, Eo, _i, ma, pd;
const ya = class {
  /** @param {ResizeObserverOptions} options */
  constructor(t) {
    Ar(this, ma), Ar(this, vr, /* @__PURE__ */ new WeakMap()), Ar(this, Eo), Ar(this, _i), Hi(this, _i, t);
  }
  /**
   * @param {Element} element
   * @param {(entry: ResizeObserverEntry) => any} listener
   */
  observe(t, n) {
    var r = lt(this, vr).get(t) || /* @__PURE__ */ new Set();
    return r.add(n), lt(this, vr).set(t, r), wg(this, ma, pd).call(this).observe(t, lt(this, _i)), () => {
      var o = lt(this, vr).get(t);
      o.delete(n), o.size === 0 && (lt(this, vr).delete(t), lt(this, Eo).unobserve(t));
    };
  }
};
vr = /* @__PURE__ */ new WeakMap(), Eo = /* @__PURE__ */ new WeakMap(), _i = /* @__PURE__ */ new WeakMap(), ma = /* @__PURE__ */ new WeakSet(), pd = function() {
  return lt(this, Eo) ?? Hi(this, Eo, new ResizeObserver(
    /** @param {any} entries */
    (e) => {
      for (var t of e) {
        ya.entries.set(t.target, t);
        for (var n of lt(this, vr).get(t.target) || [])
          n(t);
      }
    }
  ));
}, /** @static */
Vt(ya, "entries", /* @__PURE__ */ new WeakMap());
let Ap = ya;
var Rp = /* @__PURE__ */ new Ap({
  box: "border-box"
});
function Fl(e, t, n) {
  var r = Rp.observe(e, () => n(e[t]));
  At(() => (xn(() => n(e[t])), r));
}
function ql(e, t) {
  return e === t || (e == null ? void 0 : e[or]) === t;
}
function Yn(e = {}, t, n, r) {
  return At(() => {
    var o, i;
    return go(() => {
      o = i, i = [], xn(() => {
        e !== n(...i) && (t(e, ...i), o && ql(n(...o), e) && t(null, ...o));
      });
    }), () => {
      jo(() => {
        i && ql(n(...i), e) && t(null, ...i);
      });
    };
  }), e;
}
function Oe(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    Be
  ), n = t.l.u;
  if (!n) return;
  let r = () => G(t.s);
  if (e) {
    let o = 0, i = (
      /** @type {Record<string, any>} */
      {}
    );
    const s = /* @__PURE__ */ Me(() => {
      let a = !1;
      const l = t.s;
      for (const u in l)
        l[u] !== i[u] && (i[u] = l[u], a = !0);
      return a && o++, o;
    });
    r = () => g(s);
  }
  n.b.length && dp(() => {
    Gl(t, r), Vo(n.b);
  }), Ur(() => {
    const o = xn(() => n.m.map(Ig));
    return () => {
      for (const i of o)
        typeof i == "function" && i();
    };
  }), n.a.length && Ur(() => {
    Gl(t, r), Vo(n.a);
  });
}
function Gl(e, t) {
  if (e.l.s)
    for (const n of e.l.s) g(n);
  t();
}
function Ie(e, t) {
  var n, r = (
    /** @type {Record<string, Function[] | Function>} */
    (n = e.$$events) == null ? void 0 : n[t.type]
  ), o = Wo(r) ? r.slice() : r == null ? [] : [r];
  for (var i of o)
    i.call(this, t);
}
function En(e) {
  Be === null && ws(), uo && Be.l !== null ? Bp(Be).m.push(e) : Ur(() => {
    const t = xn(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function il(e) {
  Be === null && ws(), En(() => () => xn(e));
}
function Zp(e, t, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(e, { detail: t, bubbles: n, cancelable: r });
}
function _s() {
  const e = Be;
  return e === null && ws(), (t, n, r) => {
    var o;
    const i = (
      /** @type {Record<string, Function | Function[]>} */
      (o = e.s.$$events) == null ? void 0 : o[
        /** @type {any} */
        t
      ]
    );
    if (i) {
      const s = Wo(i) ? i.slice() : [i], a = Zp(
        /** @type {string} */
        t,
        n,
        r
      );
      for (const l of s)
        l.call(e.x, a);
      return !a.defaultPrevented;
    }
    return !0;
  };
}
function Bp(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ?? (t.u = { a: [], b: [], m: [] });
}
function sl(e, t, n) {
  if (e == null)
    return t(void 0), n && n(void 0), ft;
  const r = xn(
    () => e.subscribe(
      t,
      // @ts-expect-error
      n
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
const zr = [];
function Wt(e, t) {
  return {
    subscribe: me(e, t).subscribe
  };
}
function me(e, t = ft) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function o(a) {
    if (Ja(e, a) && (e = a, n)) {
      const l = !zr.length;
      for (const u of r)
        u[1](), zr.push(u, e);
      if (l) {
        for (let u = 0; u < zr.length; u += 2)
          zr[u][0](zr[u + 1]);
        zr.length = 0;
      }
    }
  }
  function i(a) {
    o(a(
      /** @type {T} */
      e
    ));
  }
  function s(a, l = ft) {
    const u = [a, l];
    return r.add(u), r.size === 1 && (n = t(o, i) || ft), a(
      /** @type {T} */
      e
    ), () => {
      r.delete(u), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: o, update: i, subscribe: s };
}
function ir(e, t, n) {
  const r = !Array.isArray(e), o = r ? [e] : e;
  if (!o.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const i = t.length < 2;
  return Wt(n, (s, a) => {
    let l = !1;
    const u = [];
    let c = 0, d = ft;
    const f = () => {
      if (c)
        return;
      d();
      const p = t(r ? u[0] : u, s, a);
      i ? s(p) : d = typeof p == "function" ? p : ft;
    }, h = o.map(
      (p, b) => sl(
        p,
        (x) => {
          u[b] = x, c &= ~(1 << b), l && f();
        },
        () => {
          c |= 1 << b;
        }
      )
    );
    return l = !0, f(), function() {
      Vo(h), d(), l = !1;
    };
  });
}
function F(e) {
  let t;
  return sl(e, (n) => t = n)(), t;
}
let fi = !1, wa = Symbol();
function J(e, t, n) {
  const r = n[t] ?? (n[t] = {
    store: null,
    source: /* @__PURE__ */ Fo(void 0),
    unsubscribe: ft
  });
  if (r.store !== e && !(wa in n))
    if (r.unsubscribe(), r.store = e ?? null, e == null)
      r.source.v = void 0, r.unsubscribe = ft;
    else {
      var o = !0;
      r.unsubscribe = sl(e, (i) => {
        o ? r.source.v = i : U(r.source, i);
      }), o = !1;
    }
  return e && wa in n ? F(e) : g(r.source);
}
function Xp(e, t, n) {
  let r = n[t];
  return r && r.store !== e && (r.unsubscribe(), r.unsubscribe = ft), e;
}
function Xi(e, t) {
  return e.set(t), t;
}
function tt() {
  const e = {};
  function t() {
    Jc(() => {
      for (var n in e)
        e[n].unsubscribe();
      Mo(e, wa, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function Kp(e) {
  var t = fi;
  try {
    return fi = !1, [e(), fi];
  } finally {
    fi = t;
  }
}
const Yp = {
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
function St(e, t, n) {
  return new Proxy(
    { props: e, exclude: t },
    Yp
  );
}
const Wp = {
  get(e, t) {
    if (!e.exclude.includes(t))
      return g(e.version), t in e.special ? e.special[t]() : e.props[t];
  },
  set(e, t, n) {
    return t in e.special || (e.special[t] = y(
      {
        get [t]() {
          return e.props[t];
        }
      },
      /** @type {string} */
      t,
      Ec
    )), e.special[t](n), Rl(e.version), !0;
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
    return e.exclude.includes(t) || (e.exclude.push(t), Rl(e.version)), !0;
  },
  has(e, t) {
    return e.exclude.includes(t) ? !1 : t in e.props;
  },
  ownKeys(e) {
    return Reflect.ownKeys(e.props).filter((t) => !e.exclude.includes(t));
  }
};
function nt(e, t) {
  return new Proxy({ props: e, exclude: t, special: {}, version: Ot(0) }, Wp);
}
const jp = {
  get(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (wo(r) && (r = r()), typeof r == "object" && r !== null && t in r) return r[t];
    }
  },
  set(e, t, n) {
    let r = e.props.length;
    for (; r--; ) {
      let o = e.props[r];
      wo(o) && (o = o());
      const i = An(o, t);
      if (i && i.set)
        return i.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (wo(r) && (r = r()), typeof r == "object" && r !== null && t in r) {
        const o = An(r, t);
        return o && !o.configurable && (o.configurable = !0), o;
      }
    }
  },
  has(e, t) {
    if (t === or || t === qa) return !1;
    for (let n of e.props)
      if (wo(n) && (n = n()), n != null && t in n) return !0;
    return !1;
  },
  ownKeys(e) {
    const t = [];
    for (let n of e.props) {
      wo(n) && (n = n());
      for (const r in n)
        t.includes(r) || t.push(r);
    }
    return t;
  }
};
function dt(...e) {
  return new Proxy({ props: e }, jp);
}
function y(e, t, n, r) {
  var o, i = (n & kg) !== 0, s = !uo || (n & Sg) !== 0, a = (n & Eg) !== 0, l = (n & Ng) !== 0, u = !1, c;
  a ? [c, u] = Kp(() => (
    /** @type {V} */
    e[t]
  )) : c = /** @type {V} */
  e[t];
  var d = or in e || qa in e, f = a && (((o = An(e, t)) == null ? void 0 : o.set) ?? (d && t in e && ((V) => e[t] = V))) || void 0, h = (
    /** @type {V} */
    r
  ), p = !0, b = !1, x = () => (b = !0, p && (p = !1, l ? h = xn(
    /** @type {() => V} */
    r
  ) : h = /** @type {V} */
  r), h);
  c === void 0 && r !== void 0 && (f && s && jg(), c = x(), f && f(c));
  var k;
  if (s)
    k = () => {
      var V = (
        /** @type {V} */
        e[t]
      );
      return V === void 0 ? x() : (p = !0, b = !1, V);
    };
  else {
    var v = (i ? Me : pe)(
      () => (
        /** @type {V} */
        e[t]
      )
    );
    v.f |= Og, k = () => {
      var V = g(v);
      return V !== void 0 && (h = /** @type {V} */
      void 0), V === void 0 ? h : V;
    };
  }
  if (!(n & Ec))
    return k;
  if (f) {
    var $ = e.$$legacy;
    return function(V, P) {
      return arguments.length > 0 ? ((!s || !P || $ || u) && f(P ? k() : V), V) : k();
    };
  }
  var w = !1, C = /* @__PURE__ */ Fo(c), N = /* @__PURE__ */ Me(() => {
    var V = k(), P = g(C);
    return w ? (w = !1, P) : C.v = V;
  });
  return i || (N.equals = Qa), function(V, P) {
    if (arguments.length > 0) {
      const O = P ? g(N) : s && a ? It(V) : V;
      return N.equals(O) || (w = !0, U(C, O), b && h !== void 0 && (h = O), xn(() => g(N))), V;
    }
    return g(N);
  };
}
function Fp(e) {
  return new qp(e);
}
var Un, rn;
class qp {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    Ar(this, Un), Ar(this, rn);
    var n, r = /* @__PURE__ */ new Map(), o = (s, a) => {
      var l = /* @__PURE__ */ Fo(a);
      return r.set(s, l), l;
    };
    const i = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(s, a) {
          return g(r.get(a) ?? o(a, Reflect.get(s, a)));
        },
        has(s, a) {
          return a === qa ? !0 : (g(r.get(a) ?? o(a, Reflect.get(s, a))), Reflect.has(s, a));
        },
        set(s, a, l) {
          return U(r.get(a) ?? o(a, l), l), Reflect.set(s, a, l);
        }
      }
    );
    Hi(this, rn, (t.hydrate ? Mp : sd)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: i,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((n = t == null ? void 0 : t.props) != null && n.$$host) || t.sync === !1) && m(), Hi(this, Un, i.$$events);
    for (const s of Object.keys(lt(this, rn)))
      s === "$set" || s === "$destroy" || s === "$on" || Mo(this, s, {
        get() {
          return lt(this, rn)[s];
        },
        /** @param {any} value */
        set(a) {
          lt(this, rn)[s] = a;
        },
        enumerable: !0
      });
    lt(this, rn).$set = /** @param {Record<string, any>} next */
    (s) => {
      Object.assign(i, s);
    }, lt(this, rn).$destroy = () => {
      Vp(lt(this, rn));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    lt(this, rn).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, n) {
    lt(this, Un)[t] = lt(this, Un)[t] || [];
    const r = (...o) => n.call(this, ...o);
    return lt(this, Un)[t].push(r), () => {
      lt(this, Un)[t] = lt(this, Un)[t].filter(
        /** @param {any} fn */
        (o) => o !== r
      );
    };
  }
  $destroy() {
    lt(this, rn).$destroy();
  }
}
Un = /* @__PURE__ */ new WeakMap(), rn = /* @__PURE__ */ new WeakMap();
let vd;
typeof HTMLElement == "function" && (vd = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(e, t, n) {
    super(), Vt(this, "$$ctor"), Vt(this, "$$s"), Vt(this, "$$c"), Vt(this, "$$cn", !1), Vt(this, "$$d", {}), Vt(this, "$$r", !1), Vt(this, "$$p_d", {}), Vt(this, "$$l", {}), Vt(this, "$$l_u", /* @__PURE__ */ new Map()), Vt(this, "$$me"), this.$$ctor = e, this.$$s = t, n && this.attachShadow({ mode: "open" });
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
          r !== "default" && (i.name = r), H(o, i);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const t = {}, n = Gp(this);
      for (const r of this.$$s)
        r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = e(r), t.default = !0) : t[r] = e(r));
      for (const r of this.attributes) {
        const o = this.$$g_p(r.name);
        o in this.$$d || (this.$$d[o] = Ci(o, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = Fp({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: t,
          $$host: this
        }
      }), this.$$me = fp(() => {
        go(() => {
          var r;
          this.$$r = !0;
          for (const o of Ii(this.$$c)) {
            if (!((r = this.$$p_d[o]) != null && r.reflect)) continue;
            this.$$d[o] = this.$$c[o];
            const i = Ci(
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
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = Ci(e, n, this.$$p_d, "toProp"), (r = this.$$c) == null || r.$set({ [e]: this.$$d[e] }));
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
    return Ii(this.$$p_d).find(
      (t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e
    ) || e;
  }
});
function Ci(e, t, n, r) {
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
function Gp(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function re(e, t, n, r, o, i) {
  let s = class extends vd {
    constructor() {
      super(e, n, o), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Ii(t).map(
        (a) => (t[a].attribute || a).toLowerCase()
      );
    }
  };
  return Ii(t).forEach((a) => {
    Mo(s.prototype, a, {
      get() {
        return this.$$c && a in this.$$c ? this.$$c[a] : this.$$d[a];
      },
      set(l) {
        var u;
        l = Ci(a, l, t), this.$$d[a] = l;
        var c = this.$$c;
        if (c) {
          var d = (u = An(c, a)) == null ? void 0 : u.get;
          d ? c[a] = l : c.$set({ [a]: l });
        }
      }
    });
  }), r.forEach((a) => {
    Mo(s.prototype, a, {
      get() {
        var l;
        return (l = this.$$c) == null ? void 0 : l[a];
      }
    });
  }), e.element = /** @type {any} */
  s, s;
}
function Et(e) {
  if (typeof e == "string" || typeof e == "number") return "" + e;
  let t = "";
  if (Array.isArray(e))
    for (let n = 0, r; n < e.length; n++)
      (r = Et(e[n])) !== "" && (t += (t && " ") + r);
  else
    for (let n in e)
      e[n] && (t += (t && " ") + n);
  return t;
}
var Up = { value: () => {
} };
function Cs() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new ki(n);
}
function ki(e) {
  this._ = e;
}
function Jp(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
ki.prototype = Cs.prototype = {
  constructor: ki,
  on: function(e, t) {
    var n = this._, r = Jp(e + "", n), o, i = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++i < s; ) if ((o = (e = r[i]).type) && (o = Qp(n[o], e.name))) return o;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++i < s; )
      if (o = (e = r[i]).type) n[o] = Ul(n[o], e.name, t);
      else if (t == null) for (o in n) n[o] = Ul(n[o], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t) e[n] = t[n].slice();
    return new ki(e);
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
function Qp(e, t) {
  for (var n = 0, r = e.length, o; n < r; ++n)
    if ((o = e[n]).name === t)
      return o.value;
}
function Ul(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = Up, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var ba = "http://www.w3.org/1999/xhtml";
const Jl = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: ba,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function ks(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), Jl.hasOwnProperty(t) ? { space: Jl[t], local: e } : e;
}
function ev(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === ba && t.documentElement.namespaceURI === ba ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function tv(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function md(e) {
  var t = ks(e);
  return (t.local ? tv : ev)(t);
}
function nv() {
}
function al(e) {
  return e == null ? nv : function() {
    return this.querySelector(e);
  };
}
function rv(e) {
  typeof e != "function" && (e = al(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = new Array(s), l, u, c = 0; c < s; ++c)
      (l = i[c]) && (u = e.call(l, l.__data__, c, i)) && ("__data__" in l && (u.__data__ = l.__data__), a[c] = u);
  return new Xt(r, this._parents);
}
function ov(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function iv() {
  return [];
}
function yd(e) {
  return e == null ? iv : function() {
    return this.querySelectorAll(e);
  };
}
function sv(e) {
  return function() {
    return ov(e.apply(this, arguments));
  };
}
function av(e) {
  typeof e == "function" ? e = sv(e) : e = yd(e);
  for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
    for (var s = t[i], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && (r.push(e.call(l, l.__data__, u, s)), o.push(l));
  return new Xt(r, o);
}
function wd(e) {
  return function() {
    return this.matches(e);
  };
}
function bd(e) {
  return function(t) {
    return t.matches(e);
  };
}
var lv = Array.prototype.find;
function uv(e) {
  return function() {
    return lv.call(this.children, e);
  };
}
function cv() {
  return this.firstElementChild;
}
function dv(e) {
  return this.select(e == null ? cv : uv(typeof e == "function" ? e : bd(e)));
}
var fv = Array.prototype.filter;
function hv() {
  return Array.from(this.children);
}
function gv(e) {
  return function() {
    return fv.call(this.children, e);
  };
}
function pv(e) {
  return this.selectAll(e == null ? hv : gv(typeof e == "function" ? e : bd(e)));
}
function vv(e) {
  typeof e != "function" && (e = wd(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && a.push(l);
  return new Xt(r, this._parents);
}
function xd(e) {
  return new Array(e.length);
}
function mv() {
  return new Xt(this._enter || this._groups.map(xd), this._parents);
}
function Ki(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
Ki.prototype = {
  constructor: Ki,
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
function yv(e) {
  return function() {
    return e;
  };
}
function wv(e, t, n, r, o, i) {
  for (var s = 0, a, l = t.length, u = i.length; s < u; ++s)
    (a = t[s]) ? (a.__data__ = i[s], r[s] = a) : n[s] = new Ki(e, i[s]);
  for (; s < l; ++s)
    (a = t[s]) && (o[s] = a);
}
function bv(e, t, n, r, o, i, s) {
  var a, l, u = /* @__PURE__ */ new Map(), c = t.length, d = i.length, f = new Array(c), h;
  for (a = 0; a < c; ++a)
    (l = t[a]) && (f[a] = h = s.call(l, l.__data__, a, t) + "", u.has(h) ? o[a] = l : u.set(h, l));
  for (a = 0; a < d; ++a)
    h = s.call(e, i[a], a, i) + "", (l = u.get(h)) ? (r[a] = l, l.__data__ = i[a], u.delete(h)) : n[a] = new Ki(e, i[a]);
  for (a = 0; a < c; ++a)
    (l = t[a]) && u.get(f[a]) === l && (o[a] = l);
}
function xv(e) {
  return e.__data__;
}
function $v(e, t) {
  if (!arguments.length) return Array.from(this, xv);
  var n = t ? bv : wv, r = this._parents, o = this._groups;
  typeof e != "function" && (e = yv(e));
  for (var i = o.length, s = new Array(i), a = new Array(i), l = new Array(i), u = 0; u < i; ++u) {
    var c = r[u], d = o[u], f = d.length, h = _v(e.call(c, c && c.__data__, u, r)), p = h.length, b = a[u] = new Array(p), x = s[u] = new Array(p), k = l[u] = new Array(f);
    n(c, d, b, x, k, h, t);
    for (var v = 0, $ = 0, w, C; v < p; ++v)
      if (w = b[v]) {
        for (v >= $ && ($ = v + 1); !(C = x[$]) && ++$ < p; ) ;
        w._next = C || null;
      }
  }
  return s = new Xt(s, r), s._enter = a, s._exit = l, s;
}
function _v(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Cv() {
  return new Xt(this._exit || this._groups.map(xd), this._parents);
}
function kv(e, t, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function Sv(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, i = r.length, s = Math.min(o, i), a = new Array(o), l = 0; l < s; ++l)
    for (var u = n[l], c = r[l], d = u.length, f = a[l] = new Array(d), h, p = 0; p < d; ++p)
      (h = u[p] || c[p]) && (f[p] = h);
  for (; l < o; ++l)
    a[l] = n[l];
  return new Xt(a, this._parents);
}
function Ev() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, i = r[o], s; --o >= 0; )
      (s = r[o]) && (i && s.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(s, i), i = s);
  return this;
}
function Nv(e) {
  e || (e = Pv);
  function t(d, f) {
    return d && f ? e(d.__data__, f.__data__) : !d - !f;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), i = 0; i < r; ++i) {
    for (var s = n[i], a = s.length, l = o[i] = new Array(a), u, c = 0; c < a; ++c)
      (u = s[c]) && (l[c] = u);
    l.sort(t);
  }
  return new Xt(o, this._parents).order();
}
function Pv(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Mv() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function Vv() {
  return Array.from(this);
}
function Ov() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length; o < i; ++o) {
      var s = r[o];
      if (s) return s;
    }
  return null;
}
function Dv() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function Tv() {
  return !this.node();
}
function Hv(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], i = 0, s = o.length, a; i < s; ++i)
      (a = o[i]) && e.call(a, a.__data__, i, o);
  return this;
}
function zv(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Lv(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Iv(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function Av(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function Rv(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function Zv(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function Bv(e, t) {
  var n = ks(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? Lv : zv : typeof t == "function" ? n.local ? Zv : Rv : n.local ? Av : Iv)(n, t));
}
function $d(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function Xv(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Kv(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function Yv(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function Wv(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? Xv : typeof t == "function" ? Yv : Kv)(e, t, n ?? "")) : to(this.node(), e);
}
function to(e, t) {
  return e.style.getPropertyValue(t) || $d(e).getComputedStyle(e, null).getPropertyValue(t);
}
function jv(e) {
  return function() {
    delete this[e];
  };
}
function Fv(e, t) {
  return function() {
    this[e] = t;
  };
}
function qv(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function Gv(e, t) {
  return arguments.length > 1 ? this.each((t == null ? jv : typeof t == "function" ? qv : Fv)(e, t)) : this.node()[e];
}
function _d(e) {
  return e.trim().split(/^|\s+/);
}
function ll(e) {
  return e.classList || new Cd(e);
}
function Cd(e) {
  this._node = e, this._names = _d(e.getAttribute("class") || "");
}
Cd.prototype = {
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
function kd(e, t) {
  for (var n = ll(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function Sd(e, t) {
  for (var n = ll(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
}
function Uv(e) {
  return function() {
    kd(this, e);
  };
}
function Jv(e) {
  return function() {
    Sd(this, e);
  };
}
function Qv(e, t) {
  return function() {
    (t.apply(this, arguments) ? kd : Sd)(this, e);
  };
}
function e0(e, t) {
  var n = _d(e + "");
  if (arguments.length < 2) {
    for (var r = ll(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? Qv : t ? Uv : Jv)(n, t));
}
function t0() {
  this.textContent = "";
}
function n0(e) {
  return function() {
    this.textContent = e;
  };
}
function r0(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function o0(e) {
  return arguments.length ? this.each(e == null ? t0 : (typeof e == "function" ? r0 : n0)(e)) : this.node().textContent;
}
function i0() {
  this.innerHTML = "";
}
function s0(e) {
  return function() {
    this.innerHTML = e;
  };
}
function a0(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function l0(e) {
  return arguments.length ? this.each(e == null ? i0 : (typeof e == "function" ? a0 : s0)(e)) : this.node().innerHTML;
}
function u0() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function c0() {
  return this.each(u0);
}
function d0() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function f0() {
  return this.each(d0);
}
function h0(e) {
  var t = typeof e == "function" ? e : md(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function g0() {
  return null;
}
function p0(e, t) {
  var n = typeof e == "function" ? e : md(e), r = t == null ? g0 : typeof t == "function" ? t : al(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function v0() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function m0() {
  return this.each(v0);
}
function y0() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function w0() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function b0(e) {
  return this.select(e ? w0 : y0);
}
function x0(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function $0(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function _0(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", r = t.indexOf(".");
    return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n };
  });
}
function C0(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, o = t.length, i; n < o; ++n)
        i = t[n], (!e.type || i.type === e.type) && i.name === e.name ? this.removeEventListener(i.type, i.listener, i.options) : t[++r] = i;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function k0(e, t, n) {
  return function() {
    var r = this.__on, o, i = $0(t);
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
function S0(e, t, n) {
  var r = _0(e + ""), o, i = r.length, s;
  if (arguments.length < 2) {
    var a = this.node().__on;
    if (a) {
      for (var l = 0, u = a.length, c; l < u; ++l)
        for (o = 0, c = a[l]; o < i; ++o)
          if ((s = r[o]).type === c.type && s.name === c.name)
            return c.value;
    }
    return;
  }
  for (a = t ? k0 : C0, o = 0; o < i; ++o) this.each(a(r[o], t, n));
  return this;
}
function Ed(e, t, n) {
  var r = $d(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function E0(e, t) {
  return function() {
    return Ed(this, e, t);
  };
}
function N0(e, t) {
  return function() {
    return Ed(this, e, t.apply(this, arguments));
  };
}
function P0(e, t) {
  return this.each((typeof t == "function" ? N0 : E0)(e, t));
}
function* M0() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length, s; o < i; ++o)
      (s = r[o]) && (yield s);
}
var Nd = [null];
function Xt(e, t) {
  this._groups = e, this._parents = t;
}
function qo() {
  return new Xt([[document.documentElement]], Nd);
}
function V0() {
  return this;
}
Xt.prototype = qo.prototype = {
  constructor: Xt,
  select: rv,
  selectAll: av,
  selectChild: dv,
  selectChildren: pv,
  filter: vv,
  data: $v,
  enter: mv,
  exit: Cv,
  join: kv,
  merge: Sv,
  selection: V0,
  order: Ev,
  sort: Nv,
  call: Mv,
  nodes: Vv,
  node: Ov,
  size: Dv,
  empty: Tv,
  each: Hv,
  attr: Bv,
  style: Wv,
  property: Gv,
  classed: e0,
  text: o0,
  html: l0,
  raise: c0,
  lower: f0,
  append: h0,
  insert: p0,
  remove: m0,
  clone: b0,
  datum: x0,
  on: S0,
  dispatch: P0,
  [Symbol.iterator]: M0
};
function Ft(e) {
  return typeof e == "string" ? new Xt([[document.querySelector(e)]], [document.documentElement]) : new Xt([[e]], Nd);
}
function O0(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function on(e, t) {
  if (e = O0(e), t === void 0 && (t = e.currentTarget), t) {
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
const D0 = { passive: !1 }, Ho = { capture: !0, passive: !1 };
function js(e) {
  e.stopImmediatePropagation();
}
function Yr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Pd(e) {
  var t = e.document.documentElement, n = Ft(e).on("dragstart.drag", Yr, Ho);
  "onselectstart" in t ? n.on("selectstart.drag", Yr, Ho) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function Md(e, t) {
  var n = e.document.documentElement, r = Ft(e).on("dragstart.drag", null);
  t && (r.on("click.drag", Yr, Ho), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const hi = (e) => () => e;
function xa(e, {
  sourceEvent: t,
  subject: n,
  target: r,
  identifier: o,
  active: i,
  x: s,
  y: a,
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
    x: { value: s, enumerable: !0, configurable: !0 },
    y: { value: a, enumerable: !0, configurable: !0 },
    dx: { value: l, enumerable: !0, configurable: !0 },
    dy: { value: u, enumerable: !0, configurable: !0 },
    _: { value: c }
  });
}
xa.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function T0(e) {
  return !e.ctrlKey && !e.button;
}
function H0() {
  return this.parentNode;
}
function z0(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function L0() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function I0() {
  var e = T0, t = H0, n = z0, r = L0, o = {}, i = Cs("start", "drag", "end"), s = 0, a, l, u, c, d = 0;
  function f(w) {
    w.on("mousedown.drag", h).filter(r).on("touchstart.drag", x).on("touchmove.drag", k, D0).on("touchend.drag touchcancel.drag", v).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function h(w, C) {
    if (!(c || !e.call(this, w, C))) {
      var N = $(this, t.call(this, w, C), w, C, "mouse");
      N && (Ft(w.view).on("mousemove.drag", p, Ho).on("mouseup.drag", b, Ho), Pd(w.view), js(w), u = !1, a = w.clientX, l = w.clientY, N("start", w));
    }
  }
  function p(w) {
    if (Yr(w), !u) {
      var C = w.clientX - a, N = w.clientY - l;
      u = C * C + N * N > d;
    }
    o.mouse("drag", w);
  }
  function b(w) {
    Ft(w.view).on("mousemove.drag mouseup.drag", null), Md(w.view, u), Yr(w), o.mouse("end", w);
  }
  function x(w, C) {
    if (e.call(this, w, C)) {
      var N = w.changedTouches, V = t.call(this, w, C), P = N.length, O, T;
      for (O = 0; O < P; ++O)
        (T = $(this, V, w, C, N[O].identifier, N[O])) && (js(w), T("start", w, N[O]));
    }
  }
  function k(w) {
    var C = w.changedTouches, N = C.length, V, P;
    for (V = 0; V < N; ++V)
      (P = o[C[V].identifier]) && (Yr(w), P("drag", w, C[V]));
  }
  function v(w) {
    var C = w.changedTouches, N = C.length, V, P;
    for (c && clearTimeout(c), c = setTimeout(function() {
      c = null;
    }, 500), V = 0; V < N; ++V)
      (P = o[C[V].identifier]) && (js(w), P("end", w, C[V]));
  }
  function $(w, C, N, V, P, O) {
    var T = i.copy(), L = on(O || N, C), I, B, S;
    if ((S = n.call(w, new xa("beforestart", {
      sourceEvent: N,
      target: f,
      identifier: P,
      active: s,
      x: L[0],
      y: L[1],
      dx: 0,
      dy: 0,
      dispatch: T
    }), V)) != null)
      return I = S.x - L[0] || 0, B = S.y - L[1] || 0, function M(_, E, D) {
        var z = L, Z;
        switch (_) {
          case "start":
            o[P] = M, Z = s++;
            break;
          case "end":
            delete o[P], --s;
          // falls through
          case "drag":
            L = on(D || E, C), Z = s;
            break;
        }
        T.call(
          _,
          w,
          new xa(_, {
            sourceEvent: E,
            subject: S,
            target: f,
            identifier: P,
            active: Z,
            x: L[0] + I,
            y: L[1] + B,
            dx: L[0] - z[0],
            dy: L[1] - z[1],
            dispatch: T
          }),
          V
        );
      };
  }
  return f.filter = function(w) {
    return arguments.length ? (e = typeof w == "function" ? w : hi(!!w), f) : e;
  }, f.container = function(w) {
    return arguments.length ? (t = typeof w == "function" ? w : hi(w), f) : t;
  }, f.subject = function(w) {
    return arguments.length ? (n = typeof w == "function" ? w : hi(w), f) : n;
  }, f.touchable = function(w) {
    return arguments.length ? (r = typeof w == "function" ? w : hi(!!w), f) : r;
  }, f.on = function() {
    var w = i.on.apply(i, arguments);
    return w === i ? f : w;
  }, f.clickDistance = function(w) {
    return arguments.length ? (d = (w = +w) * w, f) : Math.sqrt(d);
  }, f;
}
function ul(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function Vd(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function Go() {
}
var zo = 0.7, Yi = 1 / zo, Wr = "\\s*([+-]?\\d+)\\s*", Lo = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", yn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", A0 = /^#([0-9a-f]{3,8})$/, R0 = new RegExp(`^rgb\\(${Wr},${Wr},${Wr}\\)$`), Z0 = new RegExp(`^rgb\\(${yn},${yn},${yn}\\)$`), B0 = new RegExp(`^rgba\\(${Wr},${Wr},${Wr},${Lo}\\)$`), X0 = new RegExp(`^rgba\\(${yn},${yn},${yn},${Lo}\\)$`), K0 = new RegExp(`^hsl\\(${Lo},${yn},${yn}\\)$`), Y0 = new RegExp(`^hsla\\(${Lo},${yn},${yn},${Lo}\\)$`), Ql = {
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
ul(Go, Io, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: eu,
  // Deprecated! Use color.formatHex.
  formatHex: eu,
  formatHex8: W0,
  formatHsl: j0,
  formatRgb: tu,
  toString: tu
});
function eu() {
  return this.rgb().formatHex();
}
function W0() {
  return this.rgb().formatHex8();
}
function j0() {
  return Od(this).formatHsl();
}
function tu() {
  return this.rgb().formatRgb();
}
function Io(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = A0.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? nu(t) : n === 3 ? new Dt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? gi(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? gi(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = R0.exec(e)) ? new Dt(t[1], t[2], t[3], 1) : (t = Z0.exec(e)) ? new Dt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = B0.exec(e)) ? gi(t[1], t[2], t[3], t[4]) : (t = X0.exec(e)) ? gi(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = K0.exec(e)) ? iu(t[1], t[2] / 100, t[3] / 100, 1) : (t = Y0.exec(e)) ? iu(t[1], t[2] / 100, t[3] / 100, t[4]) : Ql.hasOwnProperty(e) ? nu(Ql[e]) : e === "transparent" ? new Dt(NaN, NaN, NaN, 0) : null;
}
function nu(e) {
  return new Dt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function gi(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new Dt(e, t, n, r);
}
function F0(e) {
  return e instanceof Go || (e = Io(e)), e ? (e = e.rgb(), new Dt(e.r, e.g, e.b, e.opacity)) : new Dt();
}
function $a(e, t, n, r) {
  return arguments.length === 1 ? F0(e) : new Dt(e, t, n, r ?? 1);
}
function Dt(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
ul(Dt, $a, Vd(Go, {
  brighter(e) {
    return e = e == null ? Yi : Math.pow(Yi, e), new Dt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? zo : Math.pow(zo, e), new Dt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Dt(br(this.r), br(this.g), br(this.b), Wi(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: ru,
  // Deprecated! Use color.formatHex.
  formatHex: ru,
  formatHex8: q0,
  formatRgb: ou,
  toString: ou
}));
function ru() {
  return `#${yr(this.r)}${yr(this.g)}${yr(this.b)}`;
}
function q0() {
  return `#${yr(this.r)}${yr(this.g)}${yr(this.b)}${yr((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function ou() {
  const e = Wi(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${br(this.r)}, ${br(this.g)}, ${br(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Wi(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function br(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function yr(e) {
  return e = br(e), (e < 16 ? "0" : "") + e.toString(16);
}
function iu(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new sn(e, t, n, r);
}
function Od(e) {
  if (e instanceof sn) return new sn(e.h, e.s, e.l, e.opacity);
  if (e instanceof Go || (e = Io(e)), !e) return new sn();
  if (e instanceof sn) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), s = NaN, a = i - o, l = (i + o) / 2;
  return a ? (t === i ? s = (n - r) / a + (n < r) * 6 : n === i ? s = (r - t) / a + 2 : s = (t - n) / a + 4, a /= l < 0.5 ? i + o : 2 - i - o, s *= 60) : a = l > 0 && l < 1 ? 0 : s, new sn(s, a, l, e.opacity);
}
function G0(e, t, n, r) {
  return arguments.length === 1 ? Od(e) : new sn(e, t, n, r ?? 1);
}
function sn(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
ul(sn, G0, Vd(Go, {
  brighter(e) {
    return e = e == null ? Yi : Math.pow(Yi, e), new sn(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? zo : Math.pow(zo, e), new sn(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new Dt(
      Fs(e >= 240 ? e - 240 : e + 120, o, r),
      Fs(e, o, r),
      Fs(e < 120 ? e + 240 : e - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new sn(su(this.h), pi(this.s), pi(this.l), Wi(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Wi(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${su(this.h)}, ${pi(this.s) * 100}%, ${pi(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function su(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function pi(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Fs(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const Dd = (e) => () => e;
function U0(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function J0(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function Q0(e) {
  return (e = +e) == 1 ? Td : function(t, n) {
    return n - t ? J0(t, n, e) : Dd(isNaN(t) ? n : t);
  };
}
function Td(e, t) {
  var n = t - e;
  return n ? U0(e, n) : Dd(isNaN(e) ? t : e);
}
const au = function e(t) {
  var n = Q0(t);
  function r(o, i) {
    var s = n((o = $a(o)).r, (i = $a(i)).r), a = n(o.g, i.g), l = n(o.b, i.b), u = Td(o.opacity, i.opacity);
    return function(c) {
      return o.r = s(c), o.g = a(c), o.b = l(c), o.opacity = u(c), o + "";
    };
  }
  return r.gamma = e, r;
}(1);
function er(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
var _a = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, qs = new RegExp(_a.source, "g");
function em(e) {
  return function() {
    return e;
  };
}
function tm(e) {
  return function(t) {
    return e(t) + "";
  };
}
function nm(e, t) {
  var n = _a.lastIndex = qs.lastIndex = 0, r, o, i, s = -1, a = [], l = [];
  for (e = e + "", t = t + ""; (r = _a.exec(e)) && (o = qs.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), a[s] ? a[s] += i : a[++s] = i), (r = r[0]) === (o = o[0]) ? a[s] ? a[s] += o : a[++s] = o : (a[++s] = null, l.push({ i: s, x: er(r, o) })), n = qs.lastIndex;
  return n < t.length && (i = t.slice(n), a[s] ? a[s] += i : a[++s] = i), a.length < 2 ? l[0] ? tm(l[0].x) : em(t) : (t = l.length, function(u) {
    for (var c = 0, d; c < t; ++c) a[(d = l[c]).i] = d.x(u);
    return a.join("");
  });
}
var lu = 180 / Math.PI, Hd = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function zd(e, t, n, r, o, i) {
  var s, a, l;
  return (s = Math.sqrt(e * e + t * t)) && (e /= s, t /= s), (l = e * n + t * r) && (n -= e * l, r -= t * l), (a = Math.sqrt(n * n + r * r)) && (n /= a, r /= a, l /= a), e * r < t * n && (e = -e, t = -t, l = -l, s = -s), {
    translateX: o,
    translateY: i,
    rotate: Math.atan2(t, e) * lu,
    skewX: Math.atan(l) * lu,
    scaleX: s,
    scaleY: a
  };
}
var vi;
function rm(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? Hd : zd(t.a, t.b, t.c, t.d, t.e, t.f);
}
function om(e) {
  return e == null || (vi || (vi = document.createElementNS("http://www.w3.org/2000/svg", "g")), vi.setAttribute("transform", e), !(e = vi.transform.baseVal.consolidate())) ? Hd : (e = e.matrix, zd(e.a, e.b, e.c, e.d, e.e, e.f));
}
function Ld(e, t, n, r) {
  function o(u) {
    return u.length ? u.pop() + " " : "";
  }
  function i(u, c, d, f, h, p) {
    if (u !== d || c !== f) {
      var b = h.push("translate(", null, t, null, n);
      p.push({ i: b - 4, x: er(u, d) }, { i: b - 2, x: er(c, f) });
    } else (d || f) && h.push("translate(" + d + t + f + n);
  }
  function s(u, c, d, f) {
    u !== c ? (u - c > 180 ? c += 360 : c - u > 180 && (u += 360), f.push({ i: d.push(o(d) + "rotate(", null, r) - 2, x: er(u, c) })) : c && d.push(o(d) + "rotate(" + c + r);
  }
  function a(u, c, d, f) {
    u !== c ? f.push({ i: d.push(o(d) + "skewX(", null, r) - 2, x: er(u, c) }) : c && d.push(o(d) + "skewX(" + c + r);
  }
  function l(u, c, d, f, h, p) {
    if (u !== d || c !== f) {
      var b = h.push(o(h) + "scale(", null, ",", null, ")");
      p.push({ i: b - 4, x: er(u, d) }, { i: b - 2, x: er(c, f) });
    } else (d !== 1 || f !== 1) && h.push(o(h) + "scale(" + d + "," + f + ")");
  }
  return function(u, c) {
    var d = [], f = [];
    return u = e(u), c = e(c), i(u.translateX, u.translateY, c.translateX, c.translateY, d, f), s(u.rotate, c.rotate, d, f), a(u.skewX, c.skewX, d, f), l(u.scaleX, u.scaleY, c.scaleX, c.scaleY, d, f), u = c = null, function(h) {
      for (var p = -1, b = f.length, x; ++p < b; ) d[(x = f[p]).i] = x.x(h);
      return d.join("");
    };
  };
}
var im = Ld(rm, "px, ", "px)", "deg)"), sm = Ld(om, ", ", ")", ")"), am = 1e-12;
function uu(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function lm(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function um(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const cm = function e(t, n, r) {
  function o(i, s) {
    var a = i[0], l = i[1], u = i[2], c = s[0], d = s[1], f = s[2], h = c - a, p = d - l, b = h * h + p * p, x, k;
    if (b < am)
      k = Math.log(f / u) / t, x = function(V) {
        return [
          a + V * h,
          l + V * p,
          u * Math.exp(t * V * k)
        ];
      };
    else {
      var v = Math.sqrt(b), $ = (f * f - u * u + r * b) / (2 * u * n * v), w = (f * f - u * u - r * b) / (2 * f * n * v), C = Math.log(Math.sqrt($ * $ + 1) - $), N = Math.log(Math.sqrt(w * w + 1) - w);
      k = (N - C) / t, x = function(V) {
        var P = V * k, O = uu(C), T = u / (n * v) * (O * um(t * P + C) - lm(C));
        return [
          a + T * h,
          l + T * p,
          u * O / uu(t * P + C)
        ];
      };
    }
    return x.duration = k * 1e3 * t / Math.SQRT2, x;
  }
  return o.rho = function(i) {
    var s = Math.max(1e-3, +i), a = s * s, l = a * a;
    return e(s, a, l);
  }, o;
}(Math.SQRT2, 2, 4);
var no = 0, _o = 0, bo = 0, Id = 1e3, ji, Co, Fi = 0, _r = 0, Ss = 0, Ao = typeof performance == "object" && performance.now ? performance : Date, Ad = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function cl() {
  return _r || (Ad(dm), _r = Ao.now() + Ss);
}
function dm() {
  _r = 0;
}
function qi() {
  this._call = this._time = this._next = null;
}
qi.prototype = Rd.prototype = {
  constructor: qi,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? cl() : +n) + (t == null ? 0 : +t), !this._next && Co !== this && (Co ? Co._next = this : ji = this, Co = this), this._call = e, this._time = n, Ca();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Ca());
  }
};
function Rd(e, t, n) {
  var r = new qi();
  return r.restart(e, t, n), r;
}
function fm() {
  cl(), ++no;
  for (var e = ji, t; e; )
    (t = _r - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --no;
}
function cu() {
  _r = (Fi = Ao.now()) + Ss, no = _o = 0;
  try {
    fm();
  } finally {
    no = 0, gm(), _r = 0;
  }
}
function hm() {
  var e = Ao.now(), t = e - Fi;
  t > Id && (Ss -= t, Fi = e);
}
function gm() {
  for (var e, t = ji, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : ji = n);
  Co = e, Ca(r);
}
function Ca(e) {
  if (!no) {
    _o && (_o = clearTimeout(_o));
    var t = e - _r;
    t > 24 ? (e < 1 / 0 && (_o = setTimeout(cu, e - Ao.now() - Ss)), bo && (bo = clearInterval(bo))) : (bo || (Fi = Ao.now(), bo = setInterval(hm, Id)), no = 1, Ad(cu));
  }
}
function du(e, t, n) {
  var r = new qi();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var pm = Cs("start", "end", "cancel", "interrupt"), vm = [], Zd = 0, fu = 1, ka = 2, Si = 3, hu = 4, Sa = 5, Ei = 6;
function Es(e, t, n, r, o, i) {
  var s = e.__transition;
  if (!s) e.__transition = {};
  else if (n in s) return;
  mm(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: pm,
    tween: vm,
    time: i.time,
    delay: i.delay,
    duration: i.duration,
    ease: i.ease,
    timer: null,
    state: Zd
  });
}
function dl(e, t) {
  var n = gn(e, t);
  if (n.state > Zd) throw new Error("too late; already scheduled");
  return n;
}
function Nn(e, t) {
  var n = gn(e, t);
  if (n.state > Si) throw new Error("too late; already running");
  return n;
}
function gn(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function mm(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = Rd(i, 0, n.time);
  function i(u) {
    n.state = fu, n.timer.restart(s, n.delay, n.time), n.delay <= u && s(u - n.delay);
  }
  function s(u) {
    var c, d, f, h;
    if (n.state !== fu) return l();
    for (c in r)
      if (h = r[c], h.name === n.name) {
        if (h.state === Si) return du(s);
        h.state === hu ? (h.state = Ei, h.timer.stop(), h.on.call("interrupt", e, e.__data__, h.index, h.group), delete r[c]) : +c < t && (h.state = Ei, h.timer.stop(), h.on.call("cancel", e, e.__data__, h.index, h.group), delete r[c]);
      }
    if (du(function() {
      n.state === Si && (n.state = hu, n.timer.restart(a, n.delay, n.time), a(u));
    }), n.state = ka, n.on.call("start", e, e.__data__, n.index, n.group), n.state === ka) {
      for (n.state = Si, o = new Array(f = n.tween.length), c = 0, d = -1; c < f; ++c)
        (h = n.tween[c].value.call(e, e.__data__, n.index, n.group)) && (o[++d] = h);
      o.length = d + 1;
    }
  }
  function a(u) {
    for (var c = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), n.state = Sa, 1), d = -1, f = o.length; ++d < f; )
      o[d].call(e, c);
    n.state === Sa && (n.on.call("end", e, e.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = Ei, n.timer.stop(), delete r[t];
    for (var u in r) return;
    delete e.__transition;
  }
}
function Ni(e, t) {
  var n = e.__transition, r, o, i = !0, s;
  if (n) {
    t = t == null ? null : t + "";
    for (s in n) {
      if ((r = n[s]).name !== t) {
        i = !1;
        continue;
      }
      o = r.state > ka && r.state < Sa, r.state = Ei, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[s];
    }
    i && delete e.__transition;
  }
}
function ym(e) {
  return this.each(function() {
    Ni(this, e);
  });
}
function wm(e, t) {
  var n, r;
  return function() {
    var o = Nn(this, e), i = o.tween;
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
function bm(e, t, n) {
  var r, o;
  if (typeof n != "function") throw new Error();
  return function() {
    var i = Nn(this, e), s = i.tween;
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
function xm(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = gn(this.node(), n).tween, o = 0, i = r.length, s; o < i; ++o)
      if ((s = r[o]).name === e)
        return s.value;
    return null;
  }
  return this.each((t == null ? wm : bm)(n, e, t));
}
function fl(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = Nn(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return gn(o, r).value[t];
  };
}
function Bd(e, t) {
  var n;
  return (typeof t == "number" ? er : t instanceof Io ? au : (n = Io(t)) ? (t = n, au) : nm)(e, t);
}
function $m(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function _m(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Cm(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttribute(e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function km(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttributeNS(e.space, e.local);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function Sm(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttribute(e) : (s = this.getAttribute(e), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a)));
  };
}
function Em(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttributeNS(e.space, e.local) : (s = this.getAttributeNS(e.space, e.local), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a)));
  };
}
function Nm(e, t) {
  var n = ks(e), r = n === "transform" ? sm : Bd;
  return this.attrTween(e, typeof t == "function" ? (n.local ? Em : Sm)(n, r, fl(this, "attr." + e, t)) : t == null ? (n.local ? _m : $m)(n) : (n.local ? km : Cm)(n, r, t));
}
function Pm(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function Mm(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function Vm(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && Mm(e, i)), n;
  }
  return o._value = t, o;
}
function Om(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && Pm(e, i)), n;
  }
  return o._value = t, o;
}
function Dm(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = ks(e);
  return this.tween(n, (r.local ? Vm : Om)(r, t));
}
function Tm(e, t) {
  return function() {
    dl(this, e).delay = +t.apply(this, arguments);
  };
}
function Hm(e, t) {
  return t = +t, function() {
    dl(this, e).delay = t;
  };
}
function zm(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Tm : Hm)(t, e)) : gn(this.node(), t).delay;
}
function Lm(e, t) {
  return function() {
    Nn(this, e).duration = +t.apply(this, arguments);
  };
}
function Im(e, t) {
  return t = +t, function() {
    Nn(this, e).duration = t;
  };
}
function Am(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Lm : Im)(t, e)) : gn(this.node(), t).duration;
}
function Rm(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    Nn(this, e).ease = t;
  };
}
function Zm(e) {
  var t = this._id;
  return arguments.length ? this.each(Rm(t, e)) : gn(this.node(), t).ease;
}
function Bm(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    Nn(this, e).ease = n;
  };
}
function Xm(e) {
  if (typeof e != "function") throw new Error();
  return this.each(Bm(this._id, e));
}
function Km(e) {
  typeof e != "function" && (e = wd(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && a.push(l);
  return new Wn(r, this._parents, this._name, this._id);
}
function Ym(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), s = new Array(r), a = 0; a < i; ++a)
    for (var l = t[a], u = n[a], c = l.length, d = s[a] = new Array(c), f, h = 0; h < c; ++h)
      (f = l[h] || u[h]) && (d[h] = f);
  for (; a < r; ++a)
    s[a] = t[a];
  return new Wn(s, this._parents, this._name, this._id);
}
function Wm(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function jm(e, t, n) {
  var r, o, i = Wm(t) ? dl : Nn;
  return function() {
    var s = i(this, e), a = s.on;
    a !== r && (o = (r = a).copy()).on(t, n), s.on = o;
  };
}
function Fm(e, t) {
  var n = this._id;
  return arguments.length < 2 ? gn(this.node(), n).on.on(e) : this.each(jm(n, e, t));
}
function qm(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function Gm() {
  return this.on("end.remove", qm(this._id));
}
function Um(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = al(e));
  for (var r = this._groups, o = r.length, i = new Array(o), s = 0; s < o; ++s)
    for (var a = r[s], l = a.length, u = i[s] = new Array(l), c, d, f = 0; f < l; ++f)
      (c = a[f]) && (d = e.call(c, c.__data__, f, a)) && ("__data__" in c && (d.__data__ = c.__data__), u[f] = d, Es(u[f], t, n, f, u, gn(c, n)));
  return new Wn(i, this._parents, t, n);
}
function Jm(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = yd(e));
  for (var r = this._groups, o = r.length, i = [], s = [], a = 0; a < o; ++a)
    for (var l = r[a], u = l.length, c, d = 0; d < u; ++d)
      if (c = l[d]) {
        for (var f = e.call(c, c.__data__, d, l), h, p = gn(c, n), b = 0, x = f.length; b < x; ++b)
          (h = f[b]) && Es(h, t, n, b, f, p);
        i.push(f), s.push(c);
      }
  return new Wn(i, s, t, n);
}
var Qm = qo.prototype.constructor;
function e2() {
  return new Qm(this._groups, this._parents);
}
function t2(e, t) {
  var n, r, o;
  return function() {
    var i = to(this, e), s = (this.style.removeProperty(e), to(this, e));
    return i === s ? null : i === n && s === r ? o : o = t(n = i, r = s);
  };
}
function Xd(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function n2(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = to(this, e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function r2(e, t, n) {
  var r, o, i;
  return function() {
    var s = to(this, e), a = n(this), l = a + "";
    return a == null && (l = a = (this.style.removeProperty(e), to(this, e))), s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a));
  };
}
function o2(e, t) {
  var n, r, o, i = "style." + t, s = "end." + i, a;
  return function() {
    var l = Nn(this, e), u = l.on, c = l.value[i] == null ? a || (a = Xd(t)) : void 0;
    (u !== n || o !== c) && (r = (n = u).copy()).on(s, o = c), l.on = r;
  };
}
function i2(e, t, n) {
  var r = (e += "") == "transform" ? im : Bd;
  return t == null ? this.styleTween(e, t2(e, r)).on("end.style." + e, Xd(e)) : typeof t == "function" ? this.styleTween(e, r2(e, r, fl(this, "style." + e, t))).each(o2(this._id, e)) : this.styleTween(e, n2(e, r, t), n).on("end.style." + e, null);
}
function s2(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function a2(e, t, n) {
  var r, o;
  function i() {
    var s = t.apply(this, arguments);
    return s !== o && (r = (o = s) && s2(e, s, n)), r;
  }
  return i._value = t, i;
}
function l2(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  return this.tween(r, a2(e, t, n ?? ""));
}
function u2(e) {
  return function() {
    this.textContent = e;
  };
}
function c2(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function d2(e) {
  return this.tween("text", typeof e == "function" ? c2(fl(this, "text", e)) : u2(e == null ? "" : e + ""));
}
function f2(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function h2(e) {
  var t, n;
  function r() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && f2(o)), t;
  }
  return r._value = e, r;
}
function g2(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, h2(e));
}
function p2() {
  for (var e = this._name, t = this._id, n = Kd(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, u = 0; u < a; ++u)
      if (l = s[u]) {
        var c = gn(l, t);
        Es(l, e, n, u, s, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new Wn(r, this._parents, e, n);
}
function v2() {
  var e, t, n = this, r = n._id, o = n.size();
  return new Promise(function(i, s) {
    var a = { value: s }, l = { value: function() {
      --o === 0 && i();
    } };
    n.each(function() {
      var u = Nn(this, r), c = u.on;
      c !== e && (t = (e = c).copy(), t._.cancel.push(a), t._.interrupt.push(a), t._.end.push(l)), u.on = t;
    }), o === 0 && i();
  });
}
var m2 = 0;
function Wn(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function Kd() {
  return ++m2;
}
var On = qo.prototype;
Wn.prototype = {
  constructor: Wn,
  select: Um,
  selectAll: Jm,
  selectChild: On.selectChild,
  selectChildren: On.selectChildren,
  filter: Km,
  merge: Ym,
  selection: e2,
  transition: p2,
  call: On.call,
  nodes: On.nodes,
  node: On.node,
  size: On.size,
  empty: On.empty,
  each: On.each,
  on: Fm,
  attr: Nm,
  attrTween: Dm,
  style: i2,
  styleTween: l2,
  text: d2,
  textTween: g2,
  remove: Gm,
  tween: xm,
  delay: zm,
  duration: Am,
  ease: Zm,
  easeVarying: Xm,
  end: v2,
  [Symbol.iterator]: On[Symbol.iterator]
};
function y2(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var w2 = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: y2
};
function b2(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function x2(e) {
  var t, n;
  e instanceof Wn ? (t = e._id, e = e._name) : (t = Kd(), (n = w2).time = cl(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && Es(l, e, t, u, s, n || b2(l, t));
  return new Wn(r, this._parents, e, t);
}
qo.prototype.interrupt = ym;
qo.prototype.transition = x2;
const mi = (e) => () => e;
function $2(e, {
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
function Hn(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
Hn.prototype = {
  constructor: Hn,
  scale: function(e) {
    return e === 1 ? this : new Hn(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new Hn(this.k, this.x + this.k * e, this.y + this.k * t);
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
var Ns = new Hn(1, 0, 0);
Yd.prototype = Hn.prototype;
function Yd(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return Ns;
  return e.__zoom;
}
function Gs(e) {
  e.stopImmediatePropagation();
}
function xo(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function _2(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function C2() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function gu() {
  return this.__zoom || Ns;
}
function k2(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function S2() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function E2(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0], o = e.invertX(t[1][0]) - n[1][0], i = e.invertY(t[0][1]) - n[0][1], s = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    s > i ? (i + s) / 2 : Math.min(0, i) || Math.max(0, s)
  );
}
function Wd() {
  var e = _2, t = C2, n = E2, r = k2, o = S2, i = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], a = 250, l = cm, u = Cs("start", "zoom", "end"), c, d, f, h = 500, p = 150, b = 0, x = 10;
  function k(S) {
    S.property("__zoom", gu).on("wheel.zoom", P, { passive: !1 }).on("mousedown.zoom", O).on("dblclick.zoom", T).filter(o).on("touchstart.zoom", L).on("touchmove.zoom", I).on("touchend.zoom touchcancel.zoom", B).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  k.transform = function(S, M, _, E) {
    var D = S.selection ? S.selection() : S;
    D.property("__zoom", gu), S !== D ? C(S, M, _, E) : D.interrupt().each(function() {
      N(this, arguments).event(E).start().zoom(null, typeof M == "function" ? M.apply(this, arguments) : M).end();
    });
  }, k.scaleBy = function(S, M, _, E) {
    k.scaleTo(S, function() {
      var D = this.__zoom.k, z = typeof M == "function" ? M.apply(this, arguments) : M;
      return D * z;
    }, _, E);
  }, k.scaleTo = function(S, M, _, E) {
    k.transform(S, function() {
      var D = t.apply(this, arguments), z = this.__zoom, Z = _ == null ? w(D) : typeof _ == "function" ? _.apply(this, arguments) : _, W = z.invert(Z), q = typeof M == "function" ? M.apply(this, arguments) : M;
      return n($(v(z, q), Z, W), D, s);
    }, _, E);
  }, k.translateBy = function(S, M, _, E) {
    k.transform(S, function() {
      return n(this.__zoom.translate(
        typeof M == "function" ? M.apply(this, arguments) : M,
        typeof _ == "function" ? _.apply(this, arguments) : _
      ), t.apply(this, arguments), s);
    }, null, E);
  }, k.translateTo = function(S, M, _, E, D) {
    k.transform(S, function() {
      var z = t.apply(this, arguments), Z = this.__zoom, W = E == null ? w(z) : typeof E == "function" ? E.apply(this, arguments) : E;
      return n(Ns.translate(W[0], W[1]).scale(Z.k).translate(
        typeof M == "function" ? -M.apply(this, arguments) : -M,
        typeof _ == "function" ? -_.apply(this, arguments) : -_
      ), z, s);
    }, E, D);
  };
  function v(S, M) {
    return M = Math.max(i[0], Math.min(i[1], M)), M === S.k ? S : new Hn(M, S.x, S.y);
  }
  function $(S, M, _) {
    var E = M[0] - _[0] * S.k, D = M[1] - _[1] * S.k;
    return E === S.x && D === S.y ? S : new Hn(S.k, E, D);
  }
  function w(S) {
    return [(+S[0][0] + +S[1][0]) / 2, (+S[0][1] + +S[1][1]) / 2];
  }
  function C(S, M, _, E) {
    S.on("start.zoom", function() {
      N(this, arguments).event(E).start();
    }).on("interrupt.zoom end.zoom", function() {
      N(this, arguments).event(E).end();
    }).tween("zoom", function() {
      var D = this, z = arguments, Z = N(D, z).event(E), W = t.apply(D, z), q = _ == null ? w(W) : typeof _ == "function" ? _.apply(D, z) : _, fe = Math.max(W[1][0] - W[0][0], W[1][1] - W[0][1]), Q = D.__zoom, X = typeof M == "function" ? M.apply(D, z) : M, de = l(Q.invert(q).concat(fe / Q.k), X.invert(q).concat(fe / X.k));
      return function(be) {
        if (be === 1) be = X;
        else {
          var xe = de(be), ve = fe / xe[2];
          be = new Hn(ve, q[0] - xe[0] * ve, q[1] - xe[1] * ve);
        }
        Z.zoom(null, be);
      };
    });
  }
  function N(S, M, _) {
    return !_ && S.__zooming || new V(S, M);
  }
  function V(S, M) {
    this.that = S, this.args = M, this.active = 0, this.sourceEvent = null, this.extent = t.apply(S, M), this.taps = 0;
  }
  V.prototype = {
    event: function(S) {
      return S && (this.sourceEvent = S), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(S, M) {
      return this.mouse && S !== "mouse" && (this.mouse[1] = M.invert(this.mouse[0])), this.touch0 && S !== "touch" && (this.touch0[1] = M.invert(this.touch0[0])), this.touch1 && S !== "touch" && (this.touch1[1] = M.invert(this.touch1[0])), this.that.__zoom = M, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(S) {
      var M = Ft(this.that).datum();
      u.call(
        S,
        this.that,
        new $2(S, {
          sourceEvent: this.sourceEvent,
          target: k,
          transform: this.that.__zoom,
          dispatch: u
        }),
        M
      );
    }
  };
  function P(S, ...M) {
    if (!e.apply(this, arguments)) return;
    var _ = N(this, M).event(S), E = this.__zoom, D = Math.max(i[0], Math.min(i[1], E.k * Math.pow(2, r.apply(this, arguments)))), z = on(S);
    if (_.wheel)
      (_.mouse[0][0] !== z[0] || _.mouse[0][1] !== z[1]) && (_.mouse[1] = E.invert(_.mouse[0] = z)), clearTimeout(_.wheel);
    else {
      if (E.k === D) return;
      _.mouse = [z, E.invert(z)], Ni(this), _.start();
    }
    xo(S), _.wheel = setTimeout(Z, p), _.zoom("mouse", n($(v(E, D), _.mouse[0], _.mouse[1]), _.extent, s));
    function Z() {
      _.wheel = null, _.end();
    }
  }
  function O(S, ...M) {
    if (f || !e.apply(this, arguments)) return;
    var _ = S.currentTarget, E = N(this, M, !0).event(S), D = Ft(S.view).on("mousemove.zoom", q, !0).on("mouseup.zoom", fe, !0), z = on(S, _), Z = S.clientX, W = S.clientY;
    Pd(S.view), Gs(S), E.mouse = [z, this.__zoom.invert(z)], Ni(this), E.start();
    function q(Q) {
      if (xo(Q), !E.moved) {
        var X = Q.clientX - Z, de = Q.clientY - W;
        E.moved = X * X + de * de > b;
      }
      E.event(Q).zoom("mouse", n($(E.that.__zoom, E.mouse[0] = on(Q, _), E.mouse[1]), E.extent, s));
    }
    function fe(Q) {
      D.on("mousemove.zoom mouseup.zoom", null), Md(Q.view, E.moved), xo(Q), E.event(Q).end();
    }
  }
  function T(S, ...M) {
    if (e.apply(this, arguments)) {
      var _ = this.__zoom, E = on(S.changedTouches ? S.changedTouches[0] : S, this), D = _.invert(E), z = _.k * (S.shiftKey ? 0.5 : 2), Z = n($(v(_, z), E, D), t.apply(this, M), s);
      xo(S), a > 0 ? Ft(this).transition().duration(a).call(C, Z, E, S) : Ft(this).call(k.transform, Z, E, S);
    }
  }
  function L(S, ...M) {
    if (e.apply(this, arguments)) {
      var _ = S.touches, E = _.length, D = N(this, M, S.changedTouches.length === E).event(S), z, Z, W, q;
      for (Gs(S), Z = 0; Z < E; ++Z)
        W = _[Z], q = on(W, this), q = [q, this.__zoom.invert(q), W.identifier], D.touch0 ? !D.touch1 && D.touch0[2] !== q[2] && (D.touch1 = q, D.taps = 0) : (D.touch0 = q, z = !0, D.taps = 1 + !!c);
      c && (c = clearTimeout(c)), z && (D.taps < 2 && (d = q[0], c = setTimeout(function() {
        c = null;
      }, h)), Ni(this), D.start());
    }
  }
  function I(S, ...M) {
    if (this.__zooming) {
      var _ = N(this, M).event(S), E = S.changedTouches, D = E.length, z, Z, W, q;
      for (xo(S), z = 0; z < D; ++z)
        Z = E[z], W = on(Z, this), _.touch0 && _.touch0[2] === Z.identifier ? _.touch0[0] = W : _.touch1 && _.touch1[2] === Z.identifier && (_.touch1[0] = W);
      if (Z = _.that.__zoom, _.touch1) {
        var fe = _.touch0[0], Q = _.touch0[1], X = _.touch1[0], de = _.touch1[1], be = (be = X[0] - fe[0]) * be + (be = X[1] - fe[1]) * be, xe = (xe = de[0] - Q[0]) * xe + (xe = de[1] - Q[1]) * xe;
        Z = v(Z, Math.sqrt(be / xe)), W = [(fe[0] + X[0]) / 2, (fe[1] + X[1]) / 2], q = [(Q[0] + de[0]) / 2, (Q[1] + de[1]) / 2];
      } else if (_.touch0) W = _.touch0[0], q = _.touch0[1];
      else return;
      _.zoom("touch", n($(Z, W, q), _.extent, s));
    }
  }
  function B(S, ...M) {
    if (this.__zooming) {
      var _ = N(this, M).event(S), E = S.changedTouches, D = E.length, z, Z;
      for (Gs(S), f && clearTimeout(f), f = setTimeout(function() {
        f = null;
      }, h), z = 0; z < D; ++z)
        Z = E[z], _.touch0 && _.touch0[2] === Z.identifier ? delete _.touch0 : _.touch1 && _.touch1[2] === Z.identifier && delete _.touch1;
      if (_.touch1 && !_.touch0 && (_.touch0 = _.touch1, delete _.touch1), _.touch0) _.touch0[1] = this.__zoom.invert(_.touch0[0]);
      else if (_.end(), _.taps === 2 && (Z = on(Z, this), Math.hypot(d[0] - Z[0], d[1] - Z[1]) < x)) {
        var W = Ft(this).on("dblclick.zoom");
        W && W.apply(this, arguments);
      }
    }
  }
  return k.wheelDelta = function(S) {
    return arguments.length ? (r = typeof S == "function" ? S : mi(+S), k) : r;
  }, k.filter = function(S) {
    return arguments.length ? (e = typeof S == "function" ? S : mi(!!S), k) : e;
  }, k.touchable = function(S) {
    return arguments.length ? (o = typeof S == "function" ? S : mi(!!S), k) : o;
  }, k.extent = function(S) {
    return arguments.length ? (t = typeof S == "function" ? S : mi([[+S[0][0], +S[0][1]], [+S[1][0], +S[1][1]]]), k) : t;
  }, k.scaleExtent = function(S) {
    return arguments.length ? (i[0] = +S[0], i[1] = +S[1], k) : [i[0], i[1]];
  }, k.translateExtent = function(S) {
    return arguments.length ? (s[0][0] = +S[0][0], s[1][0] = +S[1][0], s[0][1] = +S[0][1], s[1][1] = +S[1][1], k) : [[s[0][0], s[0][1]], [s[1][0], s[1][1]]];
  }, k.constrain = function(S) {
    return arguments.length ? (n = S, k) : n;
  }, k.duration = function(S) {
    return arguments.length ? (a = +S, k) : a;
  }, k.interpolate = function(S) {
    return arguments.length ? (l = S, k) : l;
  }, k.on = function() {
    var S = u.on.apply(u, arguments);
    return S === u ? k : S;
  }, k.clickDistance = function(S) {
    return arguments.length ? (b = (S = +S) * S, k) : Math.sqrt(b);
  }, k.tapDistance = function(S) {
    return arguments.length ? (x = +S, k) : x;
  }, k;
}
const Uo = {
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
}, Gi = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
];
var Cr;
(function(e) {
  e.Strict = "strict", e.Loose = "loose";
})(Cr || (Cr = {}));
var sr;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(sr || (sr = {}));
var Ui;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(Ui || (Ui = {}));
const Ea = {
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
var jr;
(function(e) {
  e.Bezier = "default", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e.SimpleBezier = "simplebezier";
})(jr || (jr = {}));
var Ro;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(Ro || (Ro = {}));
var _e;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(_e || (_e = {}));
const pu = {
  [_e.Left]: _e.Right,
  [_e.Right]: _e.Left,
  [_e.Top]: _e.Bottom,
  [_e.Bottom]: _e.Top
};
function N2(e, t) {
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
function vu(e, t, n) {
  if (!n)
    return;
  const r = [];
  e.forEach((o, i) => {
    t != null && t.has(i) || r.push(o);
  }), r.length && n(r);
}
function P2(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const M2 = (e) => "id" in e && "source" in e && "target" in e, V2 = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), hl = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), Jo = (e, t = [0, 0]) => {
  const { width: n, height: r } = hr(e), o = e.origin ?? t, i = n * o[0], s = r * o[1];
  return {
    x: e.position.x - i,
    y: e.position.y - s
  };
}, O2 = (e, t = { nodeOrigin: [0, 0], nodeLookup: void 0 }) => {
  if (e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = e.reduce((r, o) => {
    const i = typeof o == "string";
    let s = !t.nodeLookup && !i ? o : void 0;
    t.nodeLookup && (s = i ? t.nodeLookup.get(o) : hl(o) ? o : t.nodeLookup.get(o.id));
    const a = s ? Ji(s, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return Ps(r, a);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return Ms(n);
}, Qo = (e, t = {}) => {
  if (e.size === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 };
  return e.forEach((r) => {
    if (t.filter === void 0 || t.filter(r)) {
      const o = Ji(r);
      n = Ps(n, o);
    }
  }), Ms(n);
}, jd = (e, t, [n, r, o] = [0, 0, 1], i = !1, s = !1) => {
  const a = {
    ...ei(t, [n, r, o]),
    width: t.width / o,
    height: t.height / o
  }, l = [];
  for (const u of e.values()) {
    const { measured: c, selectable: d = !0, hidden: f = !1 } = u;
    if (s && !d || f)
      continue;
    const h = c.width ?? u.width ?? u.initialWidth ?? null, p = c.height ?? u.height ?? u.initialHeight ?? null, b = Zo(a, oo(u)), x = (h ?? 0) * (p ?? 0), k = i && b > 0;
    (!u.internals.handleBounds || k || b >= x || u.dragging) && l.push(u);
  }
  return l;
}, Na = (e, t) => {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    n.add(r.id);
  }), t.filter((r) => n.has(r.source) || n.has(r.target));
};
function mu(e, t) {
  const n = /* @__PURE__ */ new Map(), r = t != null && t.nodes ? new Set(t.nodes.map((o) => o.id)) : null;
  return e.forEach((o) => {
    o.measured.width && o.measured.height && (t != null && t.includeHiddenNodes || !o.hidden) && (!r || r.has(o.id)) && n.set(o.id, o);
  }), n;
}
async function yu({ nodes: e, width: t, height: n, panZoom: r, minZoom: o, maxZoom: i }, s) {
  if (e.size === 0)
    return Promise.resolve(!1);
  const a = Qo(e), l = pl(a, t, n, (s == null ? void 0 : s.minZoom) ?? o, (s == null ? void 0 : s.maxZoom) ?? i, (s == null ? void 0 : s.padding) ?? 0.1);
  return await r.setViewport(l, { duration: s == null ? void 0 : s.duration }), Promise.resolve(!0);
}
function D2({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
  const s = n.get(e), a = s.parentId ? n.get(s.parentId) : void 0, { x: l, y: u } = a ? a.internals.positionAbsolute : { x: 0, y: 0 }, c = s.origin ?? r;
  let d = o;
  if (s.extent === "parent" && !s.expandParent)
    if (!a)
      i == null || i("005", Uo.error005());
    else {
      const h = a.measured.width, p = a.measured.height;
      h && p && (d = [
        [l, u],
        [l + h, u + p]
      ]);
    }
  else a && io(s.extent) && (d = [
    [s.extent[0][0] + l, s.extent[0][1] + u],
    [s.extent[1][0] + l, s.extent[1][1] + u]
  ]);
  const f = io(d) ? kr(t, d, s.measured) : t;
  return {
    position: {
      x: f.x - l + s.measured.width * c[0],
      y: f.y - u + s.measured.height * c[1]
    },
    positionAbsolute: f
  };
}
async function Fd({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: r, onBeforeDelete: o }) {
  const i = new Set(e.map((d) => d.id)), s = [];
  for (const d of n) {
    if (d.deletable === !1)
      continue;
    const f = i.has(d.id), h = !f && d.parentId && s.find((p) => p.id === d.parentId);
    (f || h) && s.push(d);
  }
  const a = new Set(t.map((d) => d.id)), l = r.filter((d) => d.deletable !== !1), u = Na(s, l);
  for (const d of l)
    a.has(d.id) && !u.find((f) => f.id === d.id) && u.push(d);
  if (!o)
    return {
      edges: u,
      nodes: s
    };
  const c = await o({
    nodes: s,
    edges: u
  });
  return typeof c == "boolean" ? c ? { edges: u, nodes: s } : { edges: [], nodes: [] } : c;
}
const ro = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), kr = (e = { x: 0, y: 0 }, t, n) => ({
  x: ro(e.x, t[0][0], t[1][0] - ((n == null ? void 0 : n.width) ?? 0)),
  y: ro(e.y, t[0][1], t[1][1] - ((n == null ? void 0 : n.height) ?? 0))
});
function qd(e, t, n) {
  const { width: r, height: o } = hr(n), { x: i, y: s } = n.internals.positionAbsolute;
  return kr(e, [
    [i, s],
    [i + r, s + o]
  ], t);
}
const wu = (e, t, n) => e < t ? ro(Math.abs(e - t), 1, t) / t : e > n ? -ro(Math.abs(e - n), 1, t) / t : 0, Gd = (e, t, n = 15, r = 40) => {
  const o = wu(e.x, r, t.width - r) * n, i = wu(e.y, r, t.height - r) * n;
  return [o, i];
}, Ps = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), Pa = ({ x: e, y: t, width: n, height: r }) => ({
  x: e,
  y: t,
  x2: e + n,
  y2: t + r
}), Ms = ({ x: e, y: t, x2: n, y2: r }) => ({
  x: e,
  y: t,
  width: n - e,
  height: r - t
}), oo = (e, t = [0, 0]) => {
  var n, r;
  const { x: o, y: i } = hl(e) ? e.internals.positionAbsolute : Jo(e, t);
  return {
    x: o,
    y: i,
    width: ((n = e.measured) == null ? void 0 : n.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((r = e.measured) == null ? void 0 : r.height) ?? e.height ?? e.initialHeight ?? 0
  };
}, Ji = (e, t = [0, 0]) => {
  var n, r;
  const { x: o, y: i } = hl(e) ? e.internals.positionAbsolute : Jo(e, t);
  return {
    x: o,
    y: i,
    x2: o + (((n = e.measured) == null ? void 0 : n.width) ?? e.width ?? e.initialWidth ?? 0),
    y2: i + (((r = e.measured) == null ? void 0 : r.height) ?? e.height ?? e.initialHeight ?? 0)
  };
}, Ud = (e, t) => Ms(Ps(Pa(e), Pa(t))), Zo = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, bu = (e) => zn(e.width) && zn(e.height) && zn(e.x) && zn(e.y), zn = (e) => !isNaN(e) && isFinite(e), T2 = (e, t) => {
}, gl = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), ei = ({ x: e, y: t }, [n, r, o], i = !1, s = [1, 1]) => {
  const a = {
    x: (e - n) / o,
    y: (t - r) / o
  };
  return i ? gl(a, s) : a;
}, Jd = ({ x: e, y: t }, [n, r, o]) => ({
  x: e * o + n,
  y: t * o + r
}), pl = (e, t, n, r, o, i) => {
  const s = t / (e.width * (1 + i)), a = n / (e.height * (1 + i)), l = Math.min(s, a), u = ro(l, r, o), c = e.x + e.width / 2, d = e.y + e.height / 2, f = t / 2 - c * u, h = n / 2 - d * u;
  return { x: f, y: h, zoom: u };
}, Qi = () => {
  var e;
  return typeof navigator < "u" && ((e = navigator == null ? void 0 : navigator.userAgent) == null ? void 0 : e.indexOf("Mac")) >= 0;
};
function io(e) {
  return e !== void 0 && e !== "parent";
}
function hr(e) {
  var t, n;
  return {
    width: ((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight ?? 0
  };
}
function Qd(e) {
  var t, n;
  return (((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth) !== void 0 && (((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight) !== void 0;
}
function H2(e, t = { width: 0, height: 0 }, n, r, o) {
  const i = { ...e }, s = r.get(n);
  if (s) {
    const a = s.origin || o;
    i.x += s.internals.positionAbsolute.x - (t.width ?? 0) * a[0], i.y += s.internals.positionAbsolute.y - (t.height ?? 0) * a[1];
  }
  return i;
}
function Us(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: i, y: s } = Rn(e), a = ei({ x: i - ((o == null ? void 0 : o.left) ?? 0), y: s - ((o == null ? void 0 : o.top) ?? 0) }, r), { x: l, y: u } = n ? gl(a, t) : a;
  return {
    xSnapped: l,
    ySnapped: u,
    ...a
  };
}
const vl = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), z2 = (e) => {
  var t;
  return ((t = e == null ? void 0 : e.getRootNode) == null ? void 0 : t.call(e)) || (window == null ? void 0 : window.document);
}, L2 = ["INPUT", "SELECT", "TEXTAREA"];
function I2(e) {
  var t, n;
  const r = ((n = (t = e.composedPath) == null ? void 0 : t.call(e)) == null ? void 0 : n[0]) || e.target;
  return (r == null ? void 0 : r.nodeType) !== 1 ? !1 : L2.includes(r.nodeName) || r.hasAttribute("contenteditable") || !!r.closest(".nokey");
}
const ef = (e) => "clientX" in e, Rn = (e, t) => {
  var n, r;
  const o = ef(e), i = o ? e.clientX : (n = e.touches) == null ? void 0 : n[0].clientX, s = o ? e.clientY : (r = e.touches) == null ? void 0 : r[0].clientY;
  return {
    x: i - ((t == null ? void 0 : t.left) ?? 0),
    y: s - ((t == null ? void 0 : t.top) ?? 0)
  };
}, xu = (e, t, n, r, o) => {
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
      ...vl(s)
    };
  });
};
function A2({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: o, sourceControlY: i, targetControlX: s, targetControlY: a }) {
  const l = e * 0.125 + o * 0.375 + s * 0.375 + n * 0.125, u = t * 0.125 + i * 0.375 + a * 0.375 + r * 0.125, c = Math.abs(l - e), d = Math.abs(u - t);
  return [l, u, c, d];
}
function yi(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function $u({ pos: e, x1: t, y1: n, x2: r, y2: o, c: i }) {
  switch (e) {
    case _e.Left:
      return [t - yi(t - r, i), n];
    case _e.Right:
      return [t + yi(r - t, i), n];
    case _e.Top:
      return [t, n - yi(n - o, i)];
    case _e.Bottom:
      return [t, n + yi(o - n, i)];
  }
}
function tf({ sourceX: e, sourceY: t, sourcePosition: n = _e.Bottom, targetX: r, targetY: o, targetPosition: i = _e.Top, curvature: s = 0.25 }) {
  const [a, l] = $u({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: o,
    c: s
  }), [u, c] = $u({
    pos: i,
    x1: r,
    y1: o,
    x2: e,
    y2: t,
    c: s
  }), [d, f, h, p] = A2({
    sourceX: e,
    sourceY: t,
    targetX: r,
    targetY: o,
    sourceControlX: a,
    sourceControlY: l,
    targetControlX: u,
    targetControlY: c
  });
  return [
    `M${e},${t} C${a},${l} ${u},${c} ${r},${o}`,
    d,
    f,
    h,
    p
  ];
}
function nf({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const o = Math.abs(n - e) / 2, i = n < e ? n + o : n - o, s = Math.abs(r - t) / 2, a = r < t ? r + s : r - s;
  return [i, a, o, s];
}
function R2({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r = 0, elevateOnSelect: o = !1 }) {
  if (!o)
    return r;
  const i = n || t.selected || e.selected, s = Math.max(e.internals.z || 0, t.internals.z || 0, 1e3);
  return r + (i ? s : 0);
}
function Z2({ sourceNode: e, targetNode: t, width: n, height: r, transform: o }) {
  const i = Ps(Ji(e), Ji(t));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const s = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return Zo(s, Ms(i)) > 0;
}
const B2 = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, X2 = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), K2 = (e, t) => {
  if (!e.source || !e.target)
    return t;
  let n;
  return M2(e) ? n = { ...e } : n = {
    ...e,
    id: B2(e)
  }, X2(n, t) ? t : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, t.concat(n));
};
function Ma({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const [o, i, s, a] = nf({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: r
  });
  return [`M ${e},${t}L ${n},${r}`, o, i, s, a];
}
const _u = {
  [_e.Left]: { x: -1, y: 0 },
  [_e.Right]: { x: 1, y: 0 },
  [_e.Top]: { x: 0, y: -1 },
  [_e.Bottom]: { x: 0, y: 1 }
}, Y2 = ({ source: e, sourcePosition: t = _e.Bottom, target: n }) => t === _e.Left || t === _e.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, Cu = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function W2({ source: e, sourcePosition: t = _e.Bottom, target: n, targetPosition: r = _e.Top, center: o, offset: i }) {
  const s = _u[t], a = _u[r], l = { x: e.x + s.x * i, y: e.y + s.y * i }, u = { x: n.x + a.x * i, y: n.y + a.y * i }, c = Y2({
    source: l,
    sourcePosition: t,
    target: u
  }), d = c.x !== 0 ? "x" : "y", f = c[d];
  let h = [], p, b;
  const x = { x: 0, y: 0 }, k = { x: 0, y: 0 }, [v, $, w, C] = nf({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (s[d] * a[d] === -1) {
    p = o.x ?? v, b = o.y ?? $;
    const N = [
      { x: p, y: l.y },
      { x: p, y: u.y }
    ], V = [
      { x: l.x, y: b },
      { x: u.x, y: b }
    ];
    s[d] === f ? h = d === "x" ? N : V : h = d === "x" ? V : N;
  } else {
    const N = [{ x: l.x, y: u.y }], V = [{ x: u.x, y: l.y }];
    if (d === "x" ? h = s.x === f ? V : N : h = s.y === f ? N : V, t === r) {
      const I = Math.abs(e[d] - n[d]);
      if (I <= i) {
        const B = Math.min(i - 1, i - I);
        s[d] === f ? x[d] = (l[d] > e[d] ? -1 : 1) * B : k[d] = (u[d] > n[d] ? -1 : 1) * B;
      }
    }
    if (t !== r) {
      const I = d === "x" ? "y" : "x", B = s[d] === a[I], S = l[I] > u[I], M = l[I] < u[I];
      (s[d] === 1 && (!B && S || B && M) || s[d] !== 1 && (!B && M || B && S)) && (h = d === "x" ? N : V);
    }
    const P = { x: l.x + x.x, y: l.y + x.y }, O = { x: u.x + k.x, y: u.y + k.y }, T = Math.max(Math.abs(P.x - h[0].x), Math.abs(O.x - h[0].x)), L = Math.max(Math.abs(P.y - h[0].y), Math.abs(O.y - h[0].y));
    T >= L ? (p = (P.x + O.x) / 2, b = h[0].y) : (p = h[0].x, b = (P.y + O.y) / 2);
  }
  return [[
    e,
    { x: l.x + x.x, y: l.y + x.y },
    ...h,
    { x: u.x + k.x, y: u.y + k.y },
    n
  ], p, b, w, C];
}
function j2(e, t, n, r) {
  const o = Math.min(Cu(e, t) / 2, Cu(t, n) / 2, r), { x: i, y: s } = t;
  if (e.x === i && i === n.x || e.y === s && s === n.y)
    return `L${i} ${s}`;
  if (e.y === s) {
    const u = e.x < n.x ? -1 : 1, c = e.y < n.y ? 1 : -1;
    return `L ${i + o * u},${s}Q ${i},${s} ${i},${s + o * c}`;
  }
  const a = e.x < n.x ? 1 : -1, l = e.y < n.y ? -1 : 1;
  return `L ${i},${s + o * l}Q ${i},${s} ${i + o * a},${s}`;
}
function es({ sourceX: e, sourceY: t, sourcePosition: n = _e.Bottom, targetX: r, targetY: o, targetPosition: i = _e.Top, borderRadius: s = 5, centerX: a, centerY: l, offset: u = 20 }) {
  const [c, d, f, h, p] = W2({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: a, y: l },
    offset: u
  });
  return [c.reduce((b, x, k) => {
    let v = "";
    return k > 0 && k < c.length - 1 ? v = j2(c[k - 1], x, c[k + 1], s) : v = `${k === 0 ? "M" : "L"}${x.x} ${x.y}`, b += v, b;
  }, ""), d, f, h, p];
}
function ku(e) {
  var t;
  return e && !!(e.internals.handleBounds || (t = e.handles) != null && t.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function F2(e) {
  var t;
  const { sourceNode: n, targetNode: r } = e;
  if (!ku(n) || !ku(r))
    return null;
  const o = n.internals.handleBounds || Su(n.handles), i = r.internals.handleBounds || Su(r.handles), s = Eu((o == null ? void 0 : o.source) ?? [], e.sourceHandle), a = Eu(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === Cr.Strict ? (i == null ? void 0 : i.target) ?? [] : ((i == null ? void 0 : i.target) ?? []).concat((i == null ? void 0 : i.source) ?? []),
    e.targetHandle
  );
  if (!s || !a)
    return (t = e.onError) == null || t.call(e, "008", Uo.error008(s ? "target" : "source", {
      id: e.id,
      sourceHandle: e.sourceHandle,
      targetHandle: e.targetHandle
    })), null;
  const l = (s == null ? void 0 : s.position) || _e.Bottom, u = (a == null ? void 0 : a.position) || _e.Top, c = Bo(n, s, l), d = Bo(r, a, u);
  return {
    sourceX: c.x,
    sourceY: c.y,
    targetX: d.x,
    targetY: d.y,
    sourcePosition: l,
    targetPosition: u
  };
}
function Su(e) {
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
function Bo(e, t, n = _e.Left, r = !1) {
  const o = ((t == null ? void 0 : t.x) ?? 0) + e.internals.positionAbsolute.x, i = ((t == null ? void 0 : t.y) ?? 0) + e.internals.positionAbsolute.y, { width: s, height: a } = t ?? hr(e);
  if (r)
    return { x: o + s / 2, y: i + a / 2 };
  switch ((t == null ? void 0 : t.position) ?? n) {
    case _e.Top:
      return { x: o + s / 2, y: i };
    case _e.Right:
      return { x: o + s, y: i + a / 2 };
    case _e.Bottom:
      return { x: o + s / 2, y: i + a };
    case _e.Left:
      return { x: o, y: i + a / 2 };
  }
}
function Eu(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function Va(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((n) => `${n}=${e[n]}`).join("&")}` : "";
}
function q2(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const i = /* @__PURE__ */ new Set();
  return e.reduce((s, a) => ([a.markerStart || r, a.markerEnd || o].forEach((l) => {
    if (l && typeof l == "object") {
      const u = Va(l, t);
      i.has(u) || (s.push({ id: u, color: l.color || n, ...l }), i.add(u));
    }
  }), s), []).sort((s, a) => s.id.localeCompare(a.id));
}
function G2(e, t, n, r, o) {
  let i = 0.5;
  o === "start" ? i = 0 : o === "end" && (i = 1);
  let s = [
    (e.x + e.width * i) * t.zoom + t.x,
    e.y * t.zoom + t.y - r
  ], a = [-100 * i, -100];
  switch (n) {
    case _e.Right:
      s = [
        (e.x + e.width) * t.zoom + t.x + r,
        (e.y + e.height * i) * t.zoom + t.y
      ], a = [0, -100 * i];
      break;
    case _e.Bottom:
      s[1] = (e.y + e.height) * t.zoom + t.y + r, a[1] = 0;
      break;
    case _e.Left:
      s = [
        e.x * t.zoom + t.x - r,
        (e.y + e.height * i) * t.zoom + t.y
      ], a = [-100, -100 * i];
      break;
  }
  return `translate(${s[0]}px, ${s[1]}px) translate(${a[0]}%, ${a[1]}%)`;
}
const ml = {
  nodeOrigin: [0, 0],
  nodeExtent: Gi,
  elevateNodesOnSelect: !0,
  defaults: {}
}, U2 = {
  ...ml,
  checkEquality: !0
};
function yl(e, t) {
  const n = { ...e };
  for (const r in t)
    t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function J2(e, t, n) {
  const r = yl(ml, n);
  for (const o of e.values())
    if (o.parentId)
      wl(o, e, t, r);
    else {
      const i = Jo(o, r.nodeOrigin), s = io(o.extent) ? o.extent : r.nodeExtent, a = kr(i, s, hr(o));
      o.internals.positionAbsolute = a;
    }
}
function rf(e, t, n, r) {
  var o, i;
  const s = yl(U2, r), a = new Map(t), l = s != null && s.elevateNodesOnSelect ? 1e3 : 0;
  t.clear(), n.clear();
  for (const u of e) {
    let c = a.get(u.id);
    if (s.checkEquality && u === (c == null ? void 0 : c.internals.userNode))
      t.set(u.id, c);
    else {
      const d = Jo(u, s.nodeOrigin), f = io(u.extent) ? u.extent : s.nodeExtent, h = kr(d, f, hr(u));
      c = {
        ...s.defaults,
        ...u,
        measured: {
          width: (o = u.measured) == null ? void 0 : o.width,
          height: (i = u.measured) == null ? void 0 : i.height
        },
        internals: {
          positionAbsolute: h,
          // if user re-initializes the node or removes `measured` for whatever reason, we reset the handleBounds so that the node gets re-measured
          handleBounds: u.measured ? c == null ? void 0 : c.internals.handleBounds : void 0,
          z: of(u, l),
          userNode: u
        }
      }, t.set(u.id, c);
    }
    u.parentId && wl(c, t, n, r);
  }
}
function Q2(e, t) {
  if (!e.parentId)
    return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function wl(e, t, n, r) {
  const { elevateNodesOnSelect: o, nodeOrigin: i, nodeExtent: s } = yl(ml, r), a = e.parentId, l = t.get(a);
  if (!l) {
    console.warn(`Parent node ${a} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  Q2(e, n);
  const u = o ? 1e3 : 0, { x: c, y: d, z: f } = ey(e, l, i, s, u), { positionAbsolute: h } = e.internals, p = c !== h.x || d !== h.y;
  (p || f !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: p ? { x: c, y: d } : h,
      z: f
    }
  });
}
function of(e, t) {
  return (zn(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function ey(e, t, n, r, o) {
  const { x: i, y: s } = t.internals.positionAbsolute, a = hr(e), l = Jo(e, n), u = io(e.extent) ? kr(l, e.extent, a) : l;
  let c = kr({ x: i + u.x, y: s + u.y }, r, a);
  e.extent === "parent" && (c = qd(c, a, t));
  const d = of(e, o), f = t.internals.z ?? 0;
  return {
    x: c.x,
    y: c.y,
    z: f > d ? f : d
  };
}
function ty(e, t, n, r = [0, 0]) {
  var o;
  const i = [], s = /* @__PURE__ */ new Map();
  for (const a of e) {
    const l = t.get(a.parentId);
    if (!l)
      continue;
    const u = ((o = s.get(a.parentId)) == null ? void 0 : o.expandedRect) ?? oo(l), c = Ud(u, a.rect);
    s.set(a.parentId, { expandedRect: c, parent: l });
  }
  return s.size > 0 && s.forEach(({ expandedRect: a, parent: l }, u) => {
    var c;
    const d = l.internals.positionAbsolute, f = hr(l), h = l.origin ?? r, p = a.x < d.x ? Math.round(Math.abs(d.x - a.x)) : 0, b = a.y < d.y ? Math.round(Math.abs(d.y - a.y)) : 0, x = Math.max(f.width, Math.round(a.width)), k = Math.max(f.height, Math.round(a.height)), v = (x - f.width) * h[0], $ = (k - f.height) * h[1];
    (p > 0 || b > 0 || v || $) && (i.push({
      id: u,
      type: "position",
      position: {
        x: l.position.x - p + v,
        y: l.position.y - b + $
      }
    }), (c = n.get(u)) == null || c.forEach((w) => {
      e.some((C) => C.id === w.id) || i.push({
        id: w.id,
        type: "position",
        position: {
          x: w.position.x + p,
          y: w.position.y + b
        }
      });
    })), (f.width < a.width || f.height < a.height || p || b) && i.push({
      id: u,
      type: "dimensions",
      setAttributes: !0,
      dimensions: {
        width: x + (p ? h[0] * p - v : 0),
        height: k + (b ? h[1] * b - $ : 0)
      }
    });
  }), i;
}
function ny(e, t, n, r, o, i) {
  const s = r == null ? void 0 : r.querySelector(".xyflow__viewport");
  let a = !1;
  if (!s)
    return { changes: [], updatedInternals: a };
  const l = [], u = window.getComputedStyle(s), { m22: c } = new window.DOMMatrixReadOnly(u.transform), d = [];
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
    const p = vl(f.nodeElement), b = h.measured.width !== p.width || h.measured.height !== p.height;
    if (p.width && p.height && (b || !h.internals.handleBounds || f.force)) {
      const x = f.nodeElement.getBoundingClientRect(), k = io(h.extent) ? h.extent : i;
      let { positionAbsolute: v } = h.internals;
      h.parentId && h.extent === "parent" ? v = qd(v, p, t.get(h.parentId)) : k && (v = kr(v, k, p));
      const $ = {
        ...h,
        measured: p,
        internals: {
          ...h.internals,
          positionAbsolute: v,
          handleBounds: {
            source: xu("source", f.nodeElement, x, c, h.id),
            target: xu("target", f.nodeElement, x, c, h.id)
          }
        }
      };
      t.set(h.id, $), h.parentId && wl($, t, n, { nodeOrigin: o }), a = !0, b && (l.push({
        id: h.id,
        type: "dimensions",
        dimensions: p
      }), h.expandParent && h.parentId && d.push({
        id: h.id,
        parentId: h.parentId,
        rect: oo($, o)
      }));
    }
  }
  if (d.length > 0) {
    const f = ty(d, t, n, o);
    l.push(...f);
  }
  return { changes: l, updatedInternals: a };
}
async function ry({ delta: e, panZoom: t, transform: n, translateExtent: r, width: o, height: i }) {
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
function Nu(e, t, n, r, o, i) {
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
function sf(e, t, n) {
  e.clear(), t.clear();
  for (const r of n) {
    const { source: o, target: i, sourceHandle: s = null, targetHandle: a = null } = r, l = { edgeId: r.id, source: o, target: i, sourceHandle: s, targetHandle: a }, u = `${o}-${s}--${i}-${a}`, c = `${i}-${a}--${o}-${s}`;
    Nu("source", l, c, e, o, s), Nu("target", l, u, e, i, a), t.set(r.id, r);
  }
}
function oy(e, t) {
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
function af(e, t) {
  if (!e.parentId)
    return !1;
  const n = t.get(e.parentId);
  return n ? n.selected ? !0 : af(n, t) : !1;
}
function Pu(e, t, n) {
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
function iy(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  for (const [i, s] of e)
    if ((s.selected || s.id === r) && (!s.parentId || !af(s, e)) && (s.draggable || t && typeof s.draggable > "u")) {
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
function Js({ nodeId: e, dragItems: t, nodeLookup: n, dragging: r = !0 }) {
  var o, i, s;
  const a = [];
  for (const [u, c] of t) {
    const d = (o = n.get(u)) == null ? void 0 : o.internals.userNode;
    d && a.push({
      ...d,
      position: c.position,
      dragging: r
    });
  }
  if (!e)
    return [a[0], a];
  const l = (i = n.get(e)) == null ? void 0 : i.internals.userNode;
  return [
    l ? {
      ...l,
      position: ((s = t.get(e)) == null ? void 0 : s.position) || l.position,
      dragging: r
    } : a[0],
    a
  ];
}
function sy({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: o }) {
  let i = { x: null, y: null }, s = 0, a = /* @__PURE__ */ new Map(), l = !1, u = { x: 0, y: 0 }, c = null, d = !1, f = null, h = !1;
  function p({ noDragClassName: x, handleSelector: k, domNode: v, isSelectable: $, nodeId: w, nodeClickDistance: C = 0 }) {
    f = Ft(v);
    function N({ x: T, y: L }, I) {
      const { nodeLookup: B, nodeExtent: S, snapGrid: M, snapToGrid: _, nodeOrigin: E, onNodeDrag: D, onSelectionDrag: z, onError: Z, updateNodePositions: W } = t();
      i = { x: T, y: L };
      let q = !1, fe = { x: 0, y: 0, x2: 0, y2: 0 };
      if (a.size > 1 && S) {
        const Q = Qo(a);
        fe = Pa(Q);
      }
      for (const [Q, X] of a) {
        if (!B.has(Q))
          continue;
        let de = { x: T - X.distance.x, y: L - X.distance.y };
        _ && (de = gl(de, M));
        let be = [
          [S[0][0], S[0][1]],
          [S[1][0], S[1][1]]
        ];
        if (a.size > 1 && S && !X.extent) {
          const { positionAbsolute: oe } = X.internals, ce = oe.x - fe.x + S[0][0], Ae = oe.x + X.measured.width - fe.x2 + S[1][0], Fe = oe.y - fe.y + S[0][1], Ze = oe.y + X.measured.height - fe.y2 + S[1][1];
          be = [
            [ce, Fe],
            [Ae, Ze]
          ];
        }
        const { position: xe, positionAbsolute: ve } = D2({
          nodeId: Q,
          nextPosition: de,
          nodeLookup: B,
          nodeExtent: be,
          nodeOrigin: E,
          onError: Z
        });
        q = q || X.position.x !== xe.x || X.position.y !== xe.y, X.position = xe, X.internals.positionAbsolute = ve;
      }
      if (q && (W(a, !0), I && (r || D || !w && z))) {
        const [Q, X] = Js({
          nodeId: w,
          dragItems: a,
          nodeLookup: B
        });
        r == null || r(I, a, Q, X), D == null || D(I, Q, X), w || z == null || z(I, X);
      }
    }
    async function V() {
      if (!c)
        return;
      const { transform: T, panBy: L, autoPanSpeed: I, autoPanOnNodeDrag: B } = t();
      if (!B) {
        l = !1, cancelAnimationFrame(s);
        return;
      }
      const [S, M] = Gd(u, c, I);
      (S !== 0 || M !== 0) && (i.x = (i.x ?? 0) - S / T[2], i.y = (i.y ?? 0) - M / T[2], await L({ x: S, y: M }) && N(i, null)), s = requestAnimationFrame(V);
    }
    function P(T) {
      var L;
      const { nodeLookup: I, multiSelectionActive: B, nodesDraggable: S, transform: M, snapGrid: _, snapToGrid: E, selectNodesOnDrag: D, onNodeDragStart: z, onSelectionDragStart: Z, unselectNodesAndEdges: W } = t();
      d = !0, (!D || !$) && !B && w && ((L = I.get(w)) != null && L.selected || W()), $ && D && w && (e == null || e(w));
      const q = Us(T.sourceEvent, { transform: M, snapGrid: _, snapToGrid: E, containerBounds: c });
      if (i = q, a = iy(I, S, q, w), a.size > 0 && (n || z || !w && Z)) {
        const [fe, Q] = Js({
          nodeId: w,
          dragItems: a,
          nodeLookup: I
        });
        n == null || n(T.sourceEvent, a, fe, Q), z == null || z(T.sourceEvent, fe, Q), w || Z == null || Z(T.sourceEvent, Q);
      }
    }
    const O = I0().clickDistance(C).on("start", (T) => {
      const { domNode: L, nodeDragThreshold: I, transform: B, snapGrid: S, snapToGrid: M } = t();
      c = (L == null ? void 0 : L.getBoundingClientRect()) || null, h = !1, I === 0 && P(T), i = Us(T.sourceEvent, { transform: B, snapGrid: S, snapToGrid: M, containerBounds: c }), u = Rn(T.sourceEvent, c);
    }).on("drag", (T) => {
      const { autoPanOnNodeDrag: L, transform: I, snapGrid: B, snapToGrid: S, nodeDragThreshold: M, nodeLookup: _ } = t(), E = Us(T.sourceEvent, { transform: I, snapGrid: B, snapToGrid: S, containerBounds: c });
      if ((T.sourceEvent.type === "touchmove" && T.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      w && !_.has(w)) && (h = !0), !h) {
        if (!l && L && d && (l = !0, V()), !d) {
          const D = E.xSnapped - (i.x ?? 0), z = E.ySnapped - (i.y ?? 0);
          Math.sqrt(D * D + z * z) > M && P(T);
        }
        (i.x !== E.xSnapped || i.y !== E.ySnapped) && a && d && (u = Rn(T.sourceEvent, c), N(E, T.sourceEvent));
      }
    }).on("end", (T) => {
      if (!(!d || h) && (l = !1, d = !1, cancelAnimationFrame(s), a.size > 0)) {
        const { nodeLookup: L, updateNodePositions: I, onNodeDragStop: B, onSelectionDragStop: S } = t();
        if (I(a, !1), o || B || !w && S) {
          const [M, _] = Js({
            nodeId: w,
            dragItems: a,
            nodeLookup: L,
            dragging: !1
          });
          o == null || o(T.sourceEvent, a, M, _), B == null || B(T.sourceEvent, M, _), w || S == null || S(T.sourceEvent, _);
        }
      }
    }).filter((T) => {
      const L = T.target;
      return !T.button && (!x || !Pu(L, `.${x}`, v)) && (!k || Pu(L, k, v));
    });
    f.call(O);
  }
  function b() {
    f == null || f.on(".drag", null);
  }
  return {
    update: p,
    destroy: b
  };
}
function ay(e, t, n) {
  const r = [], o = {
    x: e.x - n,
    y: e.y - n,
    width: n * 2,
    height: n * 2
  };
  for (const i of t.values())
    Zo(o, oo(i)) > 0 && r.push(i);
  return r;
}
const ly = 250;
function uy(e, t, n, r) {
  var o, i;
  let s = [], a = 1 / 0;
  const l = ay(e, n, t + ly);
  for (const u of l) {
    const c = [...((o = u.internals.handleBounds) == null ? void 0 : o.source) ?? [], ...((i = u.internals.handleBounds) == null ? void 0 : i.target) ?? []];
    for (const d of c) {
      if (r.nodeId === d.nodeId && r.type === d.type && r.id === d.id)
        continue;
      const { x: f, y: h } = Bo(u, d, d.position, !0), p = Math.sqrt(Math.pow(f - e.x, 2) + Math.pow(h - e.y, 2));
      p > t || (p < a ? (s = [{ ...d, x: f, y: h }], a = p) : p === a && s.push({ ...d, x: f, y: h }));
    }
  }
  if (!s.length)
    return null;
  if (s.length > 1) {
    const u = r.type === "source" ? "target" : "source";
    return s.find((c) => c.type === u) ?? s[0];
  }
  return s[0];
}
function lf(e, t, n, r, o, i = !1) {
  var s, a, l;
  const u = r.get(e);
  if (!u)
    return null;
  const c = o === "strict" ? (s = u.internals.handleBounds) == null ? void 0 : s[t] : [...((a = u.internals.handleBounds) == null ? void 0 : a.source) ?? [], ...((l = u.internals.handleBounds) == null ? void 0 : l.target) ?? []], d = (n ? c == null ? void 0 : c.find((f) => f.id === n) : c == null ? void 0 : c[0]) ?? null;
  return d && i ? { ...d, ...Bo(u, d, d.position, !0) } : d;
}
function uf(e, t) {
  return e || (t != null && t.classList.contains("target") ? "target" : t != null && t.classList.contains("source") ? "source" : null);
}
function cy(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const cf = () => !0;
function dy(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: s, domNode: a, nodeLookup: l, lib: u, autoPanOnConnect: c, flowId: d, panBy: f, cancelConnection: h, onConnectStart: p, onConnect: b, onConnectEnd: x, isValidConnection: k = cf, onReconnectEnd: v, updateConnection: $, getTransform: w, getFromHandle: C, autoPanSpeed: N }) {
  const V = z2(e.target);
  let P = 0, O;
  const { x: T, y: L } = Rn(e), I = V == null ? void 0 : V.elementFromPoint(T, L), B = uf(i, I), S = a == null ? void 0 : a.getBoundingClientRect();
  if (!S || !B)
    return;
  const M = lf(o, B, r, l, t);
  if (!M)
    return;
  let _ = Rn(e, S), E = !1, D = null, z = !1, Z = null;
  function W() {
    if (!c || !S)
      return;
    const [xe, ve] = Gd(_, S, N);
    f({ x: xe, y: ve }), P = requestAnimationFrame(W);
  }
  const q = {
    ...M,
    nodeId: o,
    type: B,
    position: M.position
  }, fe = l.get(o), Q = {
    inProgress: !0,
    isValid: null,
    from: Bo(fe, q, _e.Left, !0),
    fromHandle: q,
    fromPosition: q.position,
    fromNode: fe,
    to: _,
    toHandle: null,
    toPosition: pu[q.position],
    toNode: null
  };
  $(Q);
  let X = Q;
  p == null || p(e, { nodeId: o, handleId: r, handleType: B });
  function de(xe) {
    if (!C() || !q) {
      be(xe);
      return;
    }
    const ve = w();
    _ = Rn(xe, S), O = uy(ei(_, ve, !1, [1, 1]), n, l, q), E || (W(), E = !0);
    const oe = df(xe, {
      handle: O,
      connectionMode: t,
      fromNodeId: o,
      fromHandleId: r,
      fromType: s ? "target" : "source",
      isValidConnection: k,
      doc: V,
      lib: u,
      flowId: d,
      nodeLookup: l
    });
    Z = oe.handleDomNode, D = oe.connection, z = cy(!!O, oe.isValid);
    const ce = {
      // from stays the same
      ...X,
      isValid: z,
      to: O && z ? Jd({ x: O.x, y: O.y }, ve) : _,
      toHandle: oe.toHandle,
      toPosition: z && oe.toHandle ? oe.toHandle.position : pu[q.position],
      toNode: oe.toHandle ? l.get(oe.toHandle.nodeId) : null
    };
    z && O && X.toHandle && ce.toHandle && X.toHandle.type === ce.toHandle.type && X.toHandle.nodeId === ce.toHandle.nodeId && X.toHandle.id === ce.toHandle.id && X.to.x === ce.to.x && X.to.y === ce.to.y || ($(ce), X = ce);
  }
  function be(xe) {
    (O || Z) && D && z && (b == null || b(D));
    const { inProgress: ve, ...oe } = X, ce = {
      ...oe,
      toPosition: X.toHandle ? X.toPosition : null
    };
    x == null || x(xe, ce), i && (v == null || v(xe, ce)), h(), cancelAnimationFrame(P), E = !1, z = !1, D = null, Z = null, V.removeEventListener("mousemove", de), V.removeEventListener("mouseup", be), V.removeEventListener("touchmove", de), V.removeEventListener("touchend", be);
  }
  V.addEventListener("mousemove", de), V.addEventListener("mouseup", be), V.addEventListener("touchmove", de), V.addEventListener("touchend", be);
}
function df(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: s, lib: a, flowId: l, isValidConnection: u = cf, nodeLookup: c }) {
  const d = i === "target", f = t ? s.querySelector(`.${a}-flow__handle[data-id="${l}-${t == null ? void 0 : t.nodeId}-${t == null ? void 0 : t.id}-${t == null ? void 0 : t.type}"]`) : null, { x: h, y: p } = Rn(e), b = s.elementFromPoint(h, p), x = b != null && b.classList.contains(`${a}-flow__handle`) ? b : f, k = {
    handleDomNode: x,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (x) {
    const v = uf(void 0, x), $ = x.getAttribute("data-nodeid"), w = x.getAttribute("data-handleid"), C = x.classList.contains("connectable"), N = x.classList.contains("connectableend");
    if (!$ || !v)
      return k;
    const V = {
      source: d ? $ : r,
      sourceHandle: d ? w : o,
      target: d ? r : $,
      targetHandle: d ? o : w
    };
    k.connection = V;
    const P = C && N && (n === Cr.Strict ? d && v === "source" || !d && v === "target" : $ !== r || w !== o);
    k.isValid = P && u(V), k.toHandle = lf($, v, w, c, n, !1);
  }
  return k;
}
const fy = {
  onPointerDown: dy,
  isValid: df
};
function hy({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = Ft(e);
  function i({ translateExtent: a, width: l, height: u, zoomStep: c = 10, pannable: d = !0, zoomable: f = !0, inversePan: h = !1 }) {
    const p = ($) => {
      const w = n();
      if ($.sourceEvent.type !== "wheel" || !t)
        return;
      const C = -$.sourceEvent.deltaY * ($.sourceEvent.deltaMode === 1 ? 0.05 : $.sourceEvent.deltaMode ? 1 : 2e-3) * c, N = w[2] * Math.pow(2, C);
      t.scaleTo(N);
    };
    let b = [0, 0];
    const x = ($) => {
      ($.sourceEvent.type === "mousedown" || $.sourceEvent.type === "touchstart") && (b = [
        $.sourceEvent.clientX ?? $.sourceEvent.touches[0].clientX,
        $.sourceEvent.clientY ?? $.sourceEvent.touches[0].clientY
      ]);
    }, k = ($) => {
      const w = n();
      if ($.sourceEvent.type !== "mousemove" && $.sourceEvent.type !== "touchmove" || !t)
        return;
      const C = [
        $.sourceEvent.clientX ?? $.sourceEvent.touches[0].clientX,
        $.sourceEvent.clientY ?? $.sourceEvent.touches[0].clientY
      ], N = [C[0] - b[0], C[1] - b[1]];
      b = C;
      const V = r() * Math.max(w[2], Math.log(w[2])) * (h ? -1 : 1), P = {
        x: w[0] - N[0] * V,
        y: w[1] - N[1] * V
      }, O = [
        [0, 0],
        [l, u]
      ];
      t.setViewportConstrained({
        x: P.x,
        y: P.y,
        zoom: w[2]
      }, O, a);
    }, v = Wd().on("start", x).on("zoom", d ? k : null).on("zoom.wheel", f ? p : null);
    o.call(v, {});
  }
  function s() {
    o.on("zoom", null);
  }
  return {
    update: i,
    destroy: s,
    pointer: on
  };
}
const gy = (e, t) => e.x !== t.x || e.y !== t.y || e.zoom !== t.k, Vs = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), Qs = ({ x: e, y: t, zoom: n }) => Ns.translate(e, t).scale(n), Rr = (e, t) => e.target.closest(`.${t}`), ff = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), ea = (e, t = 0, n = () => {
}) => {
  const r = typeof t == "number" && t > 0;
  return r || n(), r ? e.transition().duration(t).on("end", n) : e;
}, hf = (e) => {
  const t = e.ctrlKey && Qi() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function py({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: s, onPanZoomStart: a, onPanZoom: l, onPanZoomEnd: u }) {
  return (c) => {
    if (Rr(c, t))
      return !1;
    c.preventDefault(), c.stopImmediatePropagation();
    const d = n.property("__zoom").k || 1;
    if (c.ctrlKey && s) {
      const x = on(c), k = hf(c), v = d * Math.pow(2, k);
      r.scaleTo(n, v, x, c);
      return;
    }
    const f = c.deltaMode === 1 ? 20 : 1;
    let h = o === sr.Vertical ? 0 : c.deltaX * f, p = o === sr.Horizontal ? 0 : c.deltaY * f;
    !Qi() && c.shiftKey && o !== sr.Vertical && (h = c.deltaY * f, p = 0), r.translateBy(
      n,
      -(h / d) * i,
      -(p / d) * i,
      // @ts-ignore
      { internal: !0 }
    );
    const b = Vs(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling || (e.isPanScrolling = !0, a == null || a(c, b)), e.isPanScrolling && (l == null || l(c, b), e.panScrollTimeout = setTimeout(() => {
      u == null || u(c, b), e.isPanScrolling = !1;
    }, 150));
  };
}
function vy({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(r, o) {
    if (!t && r.type === "wheel" && !r.ctrlKey || Rr(r, e))
      return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function my({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (r) => {
    var o, i, s;
    if ((o = r.sourceEvent) != null && o.internal)
      return;
    const a = Vs(r.transform);
    e.mouseButton = ((i = r.sourceEvent) == null ? void 0 : i.button) || 0, e.isZoomingOrPanning = !0, e.prevViewport = a, ((s = r.sourceEvent) == null ? void 0 : s.type) === "mousedown" && t(!0), n && (n == null || n(r.sourceEvent, a));
  };
}
function yy({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (i) => {
    var s, a;
    e.usedRightMouseButton = !!(n && ff(t, e.mouseButton ?? 0)), (s = i.sourceEvent) != null && s.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !((a = i.sourceEvent) != null && a.internal) && (o == null || o(i.sourceEvent, Vs(i.transform)));
  };
}
function wy({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (s) => {
    var a;
    if (!((a = s.sourceEvent) != null && a.internal) && (e.isZoomingOrPanning = !1, i && ff(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && s.sourceEvent && i(s.sourceEvent), e.usedRightMouseButton = !1, r(!1), o && gy(e.prevViewport, s.transform))) {
      const l = Vs(s.transform);
      e.prevViewport = l, clearTimeout(e.timerId), e.timerId = setTimeout(
        () => {
          o == null || o(s.sourceEvent, l);
        },
        // we need a setTimeout for panOnScroll to supress multiple end events fired during scroll
        n ? 150 : 0
      );
    }
  };
}
function by({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: r, panOnScroll: o, zoomOnDoubleClick: i, userSelectionActive: s, noWheelClassName: a, noPanClassName: l, lib: u }) {
  return (c) => {
    var d;
    const f = e || t, h = n && c.ctrlKey;
    if (c.button === 1 && c.type === "mousedown" && (Rr(c, `${u}-flow__node`) || Rr(c, `${u}-flow__edge`)))
      return !0;
    if (!r && !f && !o && !i && !n || s || Rr(c, a) && c.type === "wheel" || Rr(c, l) && (c.type !== "wheel" || o && c.type === "wheel" && !e) || !n && c.ctrlKey && c.type === "wheel")
      return !1;
    if (!n && c.type === "touchstart" && ((d = c.touches) == null ? void 0 : d.length) > 1)
      return c.preventDefault(), !1;
    if (!f && !o && !h && c.type === "wheel" || !r && (c.type === "mousedown" || c.type === "touchstart") || Array.isArray(r) && !r.includes(c.button) && c.type === "mousedown")
      return !1;
    const p = Array.isArray(r) && r.includes(c.button) || !c.button || c.button <= 1;
    return (!c.ctrlKey || c.type === "wheel") && p;
  };
}
function xy({ domNode: e, minZoom: t, maxZoom: n, paneClickDistance: r, translateExtent: o, viewport: i, onPanZoom: s, onPanZoomStart: a, onPanZoomEnd: l, onDraggingChange: u }) {
  const c = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: { x: 0, y: 0, zoom: 0 },
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, d = e.getBoundingClientRect(), f = Wd().clickDistance(!zn(r) || r < 0 ? 0 : r).scaleExtent([t, n]).translateExtent(o), h = Ft(e).call(f);
  $({
    x: i.x,
    y: i.y,
    zoom: ro(i.zoom, t, n)
  }, [
    [0, 0],
    [d.width, d.height]
  ], o);
  const p = h.on("wheel.zoom"), b = h.on("dblclick.zoom");
  f.wheelDelta(hf);
  function x(I, B) {
    return h ? new Promise((S) => {
      f == null || f.transform(ea(h, B == null ? void 0 : B.duration, () => S(!0)), I);
    }) : Promise.resolve(!1);
  }
  function k({ noWheelClassName: I, noPanClassName: B, onPaneContextMenu: S, userSelectionActive: M, panOnScroll: _, panOnDrag: E, panOnScrollMode: D, panOnScrollSpeed: z, preventScrolling: Z, zoomOnPinch: W, zoomOnScroll: q, zoomOnDoubleClick: fe, zoomActivationKeyPressed: Q, lib: X, onTransformChange: de }) {
    M && !c.isZoomingOrPanning && v();
    const be = _ && !Q && !M ? py({
      zoomPanValues: c,
      noWheelClassName: I,
      d3Selection: h,
      d3Zoom: f,
      panOnScrollMode: D,
      panOnScrollSpeed: z,
      zoomOnPinch: W,
      onPanZoomStart: a,
      onPanZoom: s,
      onPanZoomEnd: l
    }) : vy({
      noWheelClassName: I,
      preventScrolling: Z,
      d3ZoomHandler: p
    });
    if (h.on("wheel.zoom", be, { passive: !1 }), !M) {
      const ve = my({
        zoomPanValues: c,
        onDraggingChange: u,
        onPanZoomStart: a
      });
      f.on("start", ve);
      const oe = yy({
        zoomPanValues: c,
        panOnDrag: E,
        onPaneContextMenu: !!S,
        onPanZoom: s,
        onTransformChange: de
      });
      f.on("zoom", oe);
      const ce = wy({
        zoomPanValues: c,
        panOnDrag: E,
        panOnScroll: _,
        onPaneContextMenu: S,
        onPanZoomEnd: l,
        onDraggingChange: u
      });
      f.on("end", ce);
    }
    const xe = by({
      zoomActivationKeyPressed: Q,
      panOnDrag: E,
      zoomOnScroll: q,
      panOnScroll: _,
      zoomOnDoubleClick: fe,
      zoomOnPinch: W,
      userSelectionActive: M,
      noPanClassName: B,
      noWheelClassName: I,
      lib: X
    });
    f.filter(xe), fe ? h.on("dblclick.zoom", b) : h.on("dblclick.zoom", null);
  }
  function v() {
    f.on("zoom", null);
  }
  async function $(I, B, S) {
    const M = Qs(I), _ = f == null ? void 0 : f.constrain()(M, B, S);
    return _ && await x(_), new Promise((E) => E(_));
  }
  async function w(I, B) {
    const S = Qs(I);
    return await x(S, B), new Promise((M) => M(S));
  }
  function C(I) {
    if (h) {
      const B = Qs(I), S = h.property("__zoom");
      (S.k !== I.zoom || S.x !== I.x || S.y !== I.y) && (f == null || f.transform(h, B, null, { sync: !0 }));
    }
  }
  function N() {
    const I = h ? Yd(h.node()) : { x: 0, y: 0, k: 1 };
    return { x: I.x, y: I.y, zoom: I.k };
  }
  function V(I, B) {
    return h ? new Promise((S) => {
      f == null || f.scaleTo(ea(h, B == null ? void 0 : B.duration, () => S(!0)), I);
    }) : Promise.resolve(!1);
  }
  function P(I, B) {
    return h ? new Promise((S) => {
      f == null || f.scaleBy(ea(h, B == null ? void 0 : B.duration, () => S(!0)), I);
    }) : Promise.resolve(!1);
  }
  function O(I) {
    f == null || f.scaleExtent(I);
  }
  function T(I) {
    f == null || f.translateExtent(I);
  }
  function L(I) {
    const B = !zn(I) || I < 0 ? 0 : I;
    f == null || f.clickDistance(B);
  }
  return {
    update: k,
    destroy: v,
    setViewport: w,
    setViewportConstrained: $,
    getViewport: N,
    scaleTo: V,
    scaleBy: P,
    setScaleExtent: O,
    setTranslateExtent: T,
    syncViewport: C,
    setClickDistance: L
  };
}
var Mu;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(Mu || (Mu = {}));
var $y = /* @__PURE__ */ ne('<div role="button" tabindex="-1"><!></div>');
function dr(e, t) {
  le(t, !1);
  const [n, r] = tt(), o = () => J(fe, "$connectable", n), i = () => J(xe, "$connectionRadius", n), s = () => J(de, "$domNode", n), a = () => J(be, "$nodeLookup", n), l = () => J(X, "$connectionMode", n), u = () => J(ce, "$lib", n), c = () => J(he, "$autoPanOnConnect", n), d = () => J(We, "$flowId", n), f = () => J(oe, "$isValidConnectionStore", n), h = () => J(Fe, "$onedgecreate", n), p = () => J(st, "$onConnectAction", n), b = () => J(Te, "$onConnectStartAction", n), x = () => J(Ye, "$onConnectEndAction", n), k = () => J(ve, "$viewport", n), v = () => J(ot, "$connection", n), $ = () => J(ge, "$edges", n), w = () => J(Ee, "$connectionLookup", n), C = te(), N = te(), V = te(), P = te(), O = te(), T = te(), L = te(), I = te();
  let B = y(t, "id", 12, void 0), S = y(t, "type", 12, "source"), M = y(t, "position", 28, () => _e.Top), _ = y(t, "style", 12, void 0), E = y(t, "isValidConnection", 12, void 0), D = y(t, "onconnect", 12, void 0), z = y(t, "ondisconnect", 12, void 0), Z = y(t, "isConnectable", 12, void 0), W = y(t, "class", 12, void 0);
  const q = xr("svelteflow__node_id"), fe = xr("svelteflow__node_connectable"), Q = et(), {
    connectionMode: X,
    domNode: de,
    nodeLookup: be,
    connectionRadius: xe,
    viewport: ve,
    isValidConnection: oe,
    lib: ce,
    addEdge: Ae,
    onedgecreate: Fe,
    panBy: Ze,
    cancelConnection: Ke,
    updateConnection: Y,
    autoPanOnConnect: he,
    edges: ge,
    connectionLookup: Ee,
    onconnect: st,
    onconnectstart: Te,
    onconnectend: Ye,
    flowId: We,
    connection: ot
  } = Q;
  function pt(Ne) {
    const ut = ef(Ne);
    (ut && Ne.button === 0 || !ut) && fy.onPointerDown(Ne, {
      handleId: g(V),
      nodeId: q,
      isTarget: g(C),
      connectionRadius: i(),
      domNode: s(),
      nodeLookup: a(),
      connectionMode: l(),
      lib: u(),
      autoPanOnConnect: c(),
      flowId: d(),
      isValidConnection: E() ?? f(),
      updateConnection: Y,
      cancelConnection: Ke,
      panBy: Ze,
      onConnect: ($e) => {
        var He;
        const at = h() ? h()($e) : $e;
        at && (Ae(at), (He = p()) == null || He($e));
      },
      onConnectStart: ($e, He) => {
        var at;
        (at = b()) == null || at($e, {
          nodeId: He.nodeId,
          handleId: He.handleId,
          handleType: He.handleType
        });
      },
      onConnectEnd: ($e, He) => {
        var at;
        (at = x()) == null || at($e, He);
      },
      getTransform: () => [
        k().x,
        k().y,
        k().zoom
      ],
      getFromHandle: () => v().fromHandle
    });
  }
  let ee = te(null), Ve = te();
  ae(() => G(S()), () => {
    U(C, S() === "target");
  }), ae(
    () => (G(Z()), o()),
    () => {
      U(N, Z() !== void 0 ? Z() : o());
    }
  ), ae(() => G(B()), () => {
    U(V, B() || null);
  }), ae(
    () => (G(D()), G(z()), $(), w(), G(S()), G(B())),
    () => {
      (D() || z()) && ($(), U(Ve, w().get(`${q}-${S()}${B() ? `-${B()}` : ""}`)));
    }
  ), ae(
    () => (g(ee), g(Ve), G(z()), G(D())),
    () => {
      if (g(ee) && !N2(g(Ve), g(ee))) {
        const Ne = g(Ve) ?? /* @__PURE__ */ new Map();
        vu(g(ee), Ne, z()), vu(Ne, g(ee), D());
      }
      U(ee, g(Ve) ?? /* @__PURE__ */ new Map());
    }
  ), ae(() => v(), () => {
    U(P, !!v().fromHandle);
  }), ae(
    () => (v(), G(S()), g(V)),
    () => {
      var Ne, ut, $e;
      U(O, ((Ne = v().fromHandle) == null ? void 0 : Ne.nodeId) === q && ((ut = v().fromHandle) == null ? void 0 : ut.type) === S() && (($e = v().fromHandle) == null ? void 0 : $e.id) === g(V));
    }
  ), ae(
    () => (v(), G(S()), g(V)),
    () => {
      var Ne, ut, $e;
      U(T, ((Ne = v().toHandle) == null ? void 0 : Ne.nodeId) === q && ((ut = v().toHandle) == null ? void 0 : ut.type) === S() && (($e = v().toHandle) == null ? void 0 : $e.id) === g(V));
    }
  ), ae(
    () => (l(), v(), G(S()), g(V)),
    () => {
      var Ne, ut, $e;
      U(L, l() === Cr.Strict ? ((Ne = v().fromHandle) == null ? void 0 : Ne.type) !== S() : q !== ((ut = v().fromHandle) == null ? void 0 : ut.nodeId) || g(V) !== (($e = v().fromHandle) == null ? void 0 : $e.id));
    }
  ), ae(() => (g(T), v()), () => {
    U(I, g(T) && v().isValid);
  }), gt(), Oe();
  var ie = $y();
  se(ie, "data-nodeid", q);
  var Mn = j(ie);
  mt(Mn, t, "default", {}), K(ie), Se(
    (Ne) => {
      se(ie, "data-handleid", g(V)), se(ie, "data-handlepos", M()), se(ie, "data-id", `${d() ?? ""}-${q ?? ""}-${B() || ""}-${S() ?? ""}`), eo(ie, Sn(Ne)), se(ie, "style", _()), rt(ie, "valid", g(I)), rt(ie, "connectingto", g(T)), rt(ie, "connectingfrom", g(O)), rt(ie, "source", !g(C)), rt(ie, "target", g(C)), rt(ie, "connectablestart", g(N)), rt(ie, "connectableend", g(N)), rt(ie, "connectable", g(N)), rt(ie, "connectionindicator", g(N) && (!g(P) || g(L)));
    },
    [
      () => Et([
        "svelte-flow__handle",
        `svelte-flow__handle-${M()}`,
        "nodrag",
        "nopan",
        M(),
        W()
      ])
    ],
    pe
  ), Ue("mousedown", ie, pt), Ue("touchstart", ie, pt), H(e, ie);
  var en = ue({
    get id() {
      return B();
    },
    set id(Ne) {
      B(Ne), m();
    },
    get type() {
      return S();
    },
    set type(Ne) {
      S(Ne), m();
    },
    get position() {
      return M();
    },
    set position(Ne) {
      M(Ne), m();
    },
    get style() {
      return _();
    },
    set style(Ne) {
      _(Ne), m();
    },
    get isValidConnection() {
      return E();
    },
    set isValidConnection(Ne) {
      E(Ne), m();
    },
    get onconnect() {
      return D();
    },
    set onconnect(Ne) {
      D(Ne), m();
    },
    get ondisconnect() {
      return z();
    },
    set ondisconnect(Ne) {
      z(Ne), m();
    },
    get isConnectable() {
      return Z();
    },
    set isConnectable(Ne) {
      Z(Ne), m();
    },
    get class() {
      return W();
    },
    set class(Ne) {
      W(Ne), m();
    }
  });
  return r(), en;
}
re(
  dr,
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
var _y = /* @__PURE__ */ ne("<!> <!>", 1);
function ts(e, t) {
  const n = nt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  nt(n, ["data", "targetPosition", "sourcePosition"]), le(t, !1);
  let r = y(t, "data", 28, () => ({ label: "Node" })), o = y(t, "targetPosition", 12, void 0), i = y(t, "sourcePosition", 12, void 0);
  Oe();
  var s = _y(), a = ye(s);
  const l = /* @__PURE__ */ pe(() => o() ?? _e.Top);
  dr(a, {
    type: "target",
    get position() {
      return g(l);
    }
  });
  var u = A(a), c = A(u);
  const d = /* @__PURE__ */ pe(() => i() ?? _e.Bottom);
  return dr(c, {
    type: "source",
    get position() {
      return g(d);
    }
  }), Se(() => {
    var f;
    return kn(u, ` ${((f = r()) == null ? void 0 : f.label) ?? ""} `);
  }), H(e, s), ue({
    get data() {
      return r();
    },
    set data(f) {
      r(f), m();
    },
    get targetPosition() {
      return o();
    },
    set targetPosition(f) {
      o(f), m();
    },
    get sourcePosition() {
      return i();
    },
    set sourcePosition(f) {
      i(f), m();
    }
  });
}
re(
  ts,
  {
    data: {},
    targetPosition: {},
    sourcePosition: {}
  },
  [],
  [],
  !0
);
var Cy = /* @__PURE__ */ ne(" <!>", 1);
function gf(e, t) {
  const n = nt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  nt(n, ["data", "sourcePosition"]), le(t, !1);
  let r = y(t, "data", 28, () => ({ label: "Node" })), o = y(t, "sourcePosition", 12, void 0);
  Oe(), Pe();
  var i = Cy(), s = ye(i), a = A(s);
  const l = /* @__PURE__ */ pe(() => o() ?? _e.Bottom);
  return dr(a, {
    type: "source",
    get position() {
      return g(l);
    }
  }), Se(() => {
    var u;
    return kn(s, `${((u = r()) == null ? void 0 : u.label) ?? ""} `);
  }), H(e, i), ue({
    get data() {
      return r();
    },
    set data(u) {
      r(u), m();
    },
    get sourcePosition() {
      return o();
    },
    set sourcePosition(u) {
      o(u), m();
    }
  });
}
re(gf, { data: {}, sourcePosition: {} }, [], [], !0);
var ky = /* @__PURE__ */ ne(" <!>", 1);
function pf(e, t) {
  const n = nt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  nt(n, ["data", "targetPosition"]), le(t, !1);
  let r = y(t, "data", 28, () => ({ label: "Node" })), o = y(t, "targetPosition", 12, void 0);
  Oe(), Pe();
  var i = ky(), s = ye(i), a = A(s);
  const l = /* @__PURE__ */ pe(() => o() ?? _e.Top);
  return dr(a, {
    type: "target",
    get position() {
      return g(l);
    }
  }), Se(() => {
    var u;
    return kn(s, `${((u = r()) == null ? void 0 : u.label) ?? ""} `);
  }), H(e, i), ue({
    get data() {
      return r();
    },
    set data(u) {
      r(u), m();
    },
    get targetPosition() {
      return o();
    },
    set targetPosition(u) {
      o(u), m();
    }
  });
}
re(pf, { data: {}, targetPosition: {} }, [], [], !0);
function vf(e, t) {
  const n = nt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  nt(n, []);
}
re(vf, {}, [], [], !0);
function Vu(e, t, n) {
  if (!t)
    return;
  const r = n ? t.querySelector(n) : t;
  r && r.appendChild(e);
}
function ns(e, { target: t, domNode: n }) {
  return Vu(e, n, t), {
    async update({ target: r, domNode: o }) {
      Vu(e, o, r);
    },
    destroy() {
      e.parentNode && e.parentNode.removeChild(e);
    }
  };
}
var Sy = /* @__PURE__ */ ne("<div><!></div>");
function mf(e, t) {
  le(t, !1);
  const [n, r] = tt(), o = () => J(i, "$domNode", n), { domNode: i } = et();
  Oe();
  var s = Sy(), a = j(s);
  mt(a, t, "default", {}), K(s), vt(s, (l, u) => ns == null ? void 0 : ns(l, u), () => ({
    target: ".svelte-flow__edgelabel-renderer",
    domNode: o()
  })), H(e, s), ue(), r();
}
re(mf, {}, ["default"], [], !0);
function yf() {
  const { edgeLookup: e, selectionRect: t, selectionRectMode: n, multiselectionKeyPressed: r, addSelectedEdges: o, unselectNodesAndEdges: i, elementsSelectable: s } = et();
  return (a) => {
    const l = F(e).get(a);
    if (!l) {
      console.warn("012", Uo.error012(a));
      return;
    }
    (l.selectable || F(s) && typeof l.selectable > "u") && (t.set(null), n.set(null), l.selected ? l.selected && F(r) && i({ nodes: [], edges: [l] }) : o([a]));
  };
}
var Ey = /* @__PURE__ */ ne('<div class="svelte-flow__edge-label" role="button" tabindex="-1"><!></div>');
function wf(e, t) {
  le(t, !1);
  let n = y(t, "style", 12, void 0), r = y(t, "x", 12, void 0), o = y(t, "y", 12, void 0);
  const i = yf(), s = xr("svelteflow__edge_id");
  return Oe(), mf(e, {
    children: (a, l) => {
      var u = Ey(), c = j(u);
      mt(c, t, "default", {}), K(u), Se(() => {
        se(u, "style", "pointer-events: all;" + n()), it(u, "transform", `translate(-50%, -50%) translate(${r() ?? ""}px,${o() ?? ""}px)`);
      }), Ue("keyup", u, () => {
      }), Ue("click", u, () => {
        s && i(s);
      }), H(a, u);
    },
    $$slots: { default: !0 }
  }), ue({
    get style() {
      return n();
    },
    set style(a) {
      n(a), m();
    },
    get x() {
      return r();
    },
    set x(a) {
      r(a), m();
    },
    get y() {
      return o();
    },
    set y(a) {
      o(a), m();
    }
  });
}
re(wf, { style: {}, x: {}, y: {} }, ["default"], [], !0);
var Ny = /* @__PURE__ */ we('<path fill="none" class="svelte-flow__edge-interaction"></path>'), Py = /* @__PURE__ */ we('<path fill="none"></path><!><!>', 1);
function ti(e, t) {
  le(t, !1);
  let n = y(t, "id", 12, void 0), r = y(t, "path", 12), o = y(t, "label", 12, void 0), i = y(t, "labelX", 12, void 0), s = y(t, "labelY", 12, void 0), a = y(t, "labelStyle", 12, void 0), l = y(t, "markerStart", 12, void 0), u = y(t, "markerEnd", 12, void 0), c = y(t, "style", 12, void 0), d = y(t, "interactionWidth", 12, 20), f = y(t, "class", 12, void 0), h = d() === void 0 ? 20 : d();
  Oe();
  var p = Py(), b = ye(p), x = A(b);
  {
    var k = (w) => {
      var C = Ny();
      se(C, "stroke-opacity", 0), se(C, "stroke-width", h), Se(() => se(C, "d", r())), H(w, C);
    };
    Ce(x, (w) => {
      h && w(k);
    });
  }
  var v = A(x);
  {
    var $ = (w) => {
      wf(w, {
        get x() {
          return i();
        },
        get y() {
          return s();
        },
        get style() {
          return a();
        },
        children: (C, N) => {
          Pe();
          var V = Re();
          Se(() => kn(V, o())), H(C, V);
        },
        $$slots: { default: !0 }
      });
    };
    Ce(v, (w) => {
      o() && w($);
    });
  }
  return Se(
    (w) => {
      se(b, "id", n()), se(b, "d", r()), Vr(b, Sn(w)), se(b, "marker-start", l()), se(b, "marker-end", u()), se(b, "style", c());
    },
    [
      () => Et(["svelte-flow__edge-path", f()])
    ],
    pe
  ), H(e, p), ue({
    get id() {
      return n();
    },
    set id(w) {
      n(w), m();
    },
    get path() {
      return r();
    },
    set path(w) {
      r(w), m();
    },
    get label() {
      return o();
    },
    set label(w) {
      o(w), m();
    },
    get labelX() {
      return i();
    },
    set labelX(w) {
      i(w), m();
    },
    get labelY() {
      return s();
    },
    set labelY(w) {
      s(w), m();
    },
    get labelStyle() {
      return a();
    },
    set labelStyle(w) {
      a(w), m();
    },
    get markerStart() {
      return l();
    },
    set markerStart(w) {
      l(w), m();
    },
    get markerEnd() {
      return u();
    },
    set markerEnd(w) {
      u(w), m();
    },
    get style() {
      return c();
    },
    set style(w) {
      c(w), m();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(w) {
      d(w), m();
    },
    get class() {
      return f();
    },
    set class(w) {
      f(w), m();
    }
  });
}
re(
  ti,
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
function rs(e, t) {
  const n = nt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  nt(n, [
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
  ]), le(t, !1);
  const r = te(), o = te(), i = te();
  let s = y(t, "label", 12, void 0), a = y(t, "labelStyle", 12, void 0), l = y(t, "style", 12, void 0), u = y(t, "markerStart", 12, void 0), c = y(t, "markerEnd", 12, void 0), d = y(t, "interactionWidth", 12, void 0), f = y(t, "sourceX", 12), h = y(t, "sourceY", 12), p = y(t, "sourcePosition", 12), b = y(t, "targetX", 12), x = y(t, "targetY", 12), k = y(t, "targetPosition", 12);
  return ae(
    () => (g(r), g(o), g(i), G(f()), G(h()), G(b()), G(x()), G(p()), G(k())),
    () => {
      ((v) => (U(r, v[0]), U(o, v[1]), U(i, v[2])))(tf({
        sourceX: f(),
        sourceY: h(),
        targetX: b(),
        targetY: x(),
        sourcePosition: p(),
        targetPosition: k()
      }));
    }
  ), gt(), Oe(), ti(e, {
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
      return s();
    },
    get labelStyle() {
      return a();
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
  }), ue({
    get label() {
      return s();
    },
    set label(v) {
      s(v), m();
    },
    get labelStyle() {
      return a();
    },
    set labelStyle(v) {
      a(v), m();
    },
    get style() {
      return l();
    },
    set style(v) {
      l(v), m();
    },
    get markerStart() {
      return u();
    },
    set markerStart(v) {
      u(v), m();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(v) {
      c(v), m();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(v) {
      d(v), m();
    },
    get sourceX() {
      return f();
    },
    set sourceX(v) {
      f(v), m();
    },
    get sourceY() {
      return h();
    },
    set sourceY(v) {
      h(v), m();
    },
    get sourcePosition() {
      return p();
    },
    set sourcePosition(v) {
      p(v), m();
    },
    get targetX() {
      return b();
    },
    set targetX(v) {
      b(v), m();
    },
    get targetY() {
      return x();
    },
    set targetY(v) {
      x(v), m();
    },
    get targetPosition() {
      return k();
    },
    set targetPosition(v) {
      k(v), m();
    }
  });
}
re(
  rs,
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
function bf(e, t) {
  const n = nt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  nt(n, [
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
  ]), le(t, !1);
  const r = te(), o = te(), i = te();
  let s = y(t, "label", 12, void 0), a = y(t, "labelStyle", 12, void 0), l = y(t, "style", 12, void 0), u = y(t, "markerStart", 12, void 0), c = y(t, "markerEnd", 12, void 0), d = y(t, "interactionWidth", 12, void 0), f = y(t, "sourceX", 12), h = y(t, "sourceY", 12), p = y(t, "sourcePosition", 12), b = y(t, "targetX", 12), x = y(t, "targetY", 12), k = y(t, "targetPosition", 12);
  return ae(
    () => (g(r), g(o), g(i), G(f()), G(h()), G(b()), G(x()), G(p()), G(k())),
    () => {
      ((v) => (U(r, v[0]), U(o, v[1]), U(i, v[2])))(es({
        sourceX: f(),
        sourceY: h(),
        targetX: b(),
        targetY: x(),
        sourcePosition: p(),
        targetPosition: k()
      }));
    }
  ), gt(), Oe(), ti(e, {
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
      return s();
    },
    get labelStyle() {
      return a();
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
  }), ue({
    get label() {
      return s();
    },
    set label(v) {
      s(v), m();
    },
    get labelStyle() {
      return a();
    },
    set labelStyle(v) {
      a(v), m();
    },
    get style() {
      return l();
    },
    set style(v) {
      l(v), m();
    },
    get markerStart() {
      return u();
    },
    set markerStart(v) {
      u(v), m();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(v) {
      c(v), m();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(v) {
      d(v), m();
    },
    get sourceX() {
      return f();
    },
    set sourceX(v) {
      f(v), m();
    },
    get sourceY() {
      return h();
    },
    set sourceY(v) {
      h(v), m();
    },
    get sourcePosition() {
      return p();
    },
    set sourcePosition(v) {
      p(v), m();
    },
    get targetX() {
      return b();
    },
    set targetX(v) {
      b(v), m();
    },
    get targetY() {
      return x();
    },
    set targetY(v) {
      x(v), m();
    },
    get targetPosition() {
      return k();
    },
    set targetPosition(v) {
      k(v), m();
    }
  });
}
re(
  bf,
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
function xf(e, t) {
  const n = nt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  nt(n, [
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
  ]), le(t, !1);
  const r = te(), o = te(), i = te();
  let s = y(t, "label", 12, void 0), a = y(t, "labelStyle", 12, void 0), l = y(t, "style", 12, void 0), u = y(t, "markerStart", 12, void 0), c = y(t, "markerEnd", 12, void 0), d = y(t, "interactionWidth", 12, void 0), f = y(t, "sourceX", 12), h = y(t, "sourceY", 12), p = y(t, "targetX", 12), b = y(t, "targetY", 12);
  return ae(
    () => (g(r), g(o), g(i), G(f()), G(h()), G(p()), G(b())),
    () => {
      ((x) => (U(r, x[0]), U(o, x[1]), U(i, x[2])))(Ma({
        sourceX: f(),
        sourceY: h(),
        targetX: p(),
        targetY: b()
      }));
    }
  ), gt(), Oe(), ti(e, {
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
      return s();
    },
    get labelStyle() {
      return a();
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
  }), ue({
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
    get style() {
      return l();
    },
    set style(x) {
      l(x), m();
    },
    get markerStart() {
      return u();
    },
    set markerStart(x) {
      u(x), m();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(x) {
      c(x), m();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(x) {
      d(x), m();
    },
    get sourceX() {
      return f();
    },
    set sourceX(x) {
      f(x), m();
    },
    get sourceY() {
      return h();
    },
    set sourceY(x) {
      h(x), m();
    },
    get targetX() {
      return p();
    },
    set targetX(x) {
      p(x), m();
    },
    get targetY() {
      return b();
    },
    set targetY(x) {
      b(x), m();
    }
  });
}
re(
  xf,
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
function $f(e, t) {
  const n = nt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  nt(n, [
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
  ]), le(t, !1);
  const r = te(), o = te(), i = te();
  let s = y(t, "label", 12, void 0), a = y(t, "labelStyle", 12, void 0), l = y(t, "style", 12, void 0), u = y(t, "markerStart", 12, void 0), c = y(t, "markerEnd", 12, void 0), d = y(t, "interactionWidth", 12, void 0), f = y(t, "sourceX", 12), h = y(t, "sourceY", 12), p = y(t, "sourcePosition", 12), b = y(t, "targetX", 12), x = y(t, "targetY", 12), k = y(t, "targetPosition", 12);
  return ae(
    () => (g(r), g(o), g(i), G(f()), G(h()), G(b()), G(x()), G(p()), G(k())),
    () => {
      ((v) => (U(r, v[0]), U(o, v[1]), U(i, v[2])))(es({
        sourceX: f(),
        sourceY: h(),
        targetX: b(),
        targetY: x(),
        sourcePosition: p(),
        targetPosition: k(),
        borderRadius: 0
      }));
    }
  ), gt(), Oe(), ti(e, {
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
      return s();
    },
    get labelStyle() {
      return a();
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
  }), ue({
    get label() {
      return s();
    },
    set label(v) {
      s(v), m();
    },
    get labelStyle() {
      return a();
    },
    set labelStyle(v) {
      a(v), m();
    },
    get style() {
      return l();
    },
    set style(v) {
      l(v), m();
    },
    get markerStart() {
      return u();
    },
    set markerStart(v) {
      u(v), m();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(v) {
      c(v), m();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(v) {
      d(v), m();
    },
    get sourceX() {
      return f();
    },
    set sourceX(v) {
      f(v), m();
    },
    get sourceY() {
      return h();
    },
    set sourceY(v) {
      h(v), m();
    },
    get sourcePosition() {
      return p();
    },
    set sourcePosition(v) {
      p(v), m();
    },
    get targetX() {
      return b();
    },
    set targetX(v) {
      b(v), m();
    },
    get targetY() {
      return x();
    },
    set targetY(v) {
      x(v), m();
    },
    get targetPosition() {
      return k();
    },
    set targetPosition(v) {
      k(v), m();
    }
  });
}
re(
  $f,
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
function My(e, t) {
  const n = e.set, r = t.set, o = F(e), i = F(t);
  let s = o.length === 0 && i.length > 0 ? i : o;
  e.set(s);
  const a = (l) => {
    const u = n(l);
    return s = u, r(s), u;
  };
  e.set = t.set = a, e.update = t.update = (l) => a(l(s));
}
function Vy(e, t) {
  const n = e.set, r = t.set;
  let o = F(t);
  e.set(o);
  const i = (s) => {
    n(s), r(s), o = s;
  };
  e.set = t.set = i, e.update = t.update = (s) => i(s(o));
}
const Oy = (e, t, n) => {
  if (!n)
    return;
  const r = F(e), o = t.set, i = n.set;
  let s = n ? F(n) : { x: 0, y: 0, zoom: 1 };
  t.set(s), t.set = (a) => (o(a), i(a), s = a, a), n.set = (a) => (r == null || r.syncViewport(a), o(a), i(a), s = a, a), t.update = (a) => {
    t.set(a(s));
  }, n.update = (a) => {
    n.set(a(s));
  };
}, Dy = (e, t, n, r = [0, 0], o = Gi) => {
  const { subscribe: i, set: s, update: a } = me([]);
  let l = e, u = {}, c = !0;
  const d = (b) => (rf(b, t, n, {
    elevateNodesOnSelect: c,
    nodeOrigin: r,
    nodeExtent: o,
    defaults: u,
    checkEquality: !1
  }), l = b, s(l), l), f = (b) => d(b(l)), h = (b) => {
    u = b;
  }, p = (b) => {
    c = b.elevateNodesOnSelect ?? c;
  };
  return d(l), {
    subscribe: i,
    set: d,
    update: f,
    setDefaultOptions: h,
    setOptions: p
  };
}, Ty = (e, t, n, r) => {
  const { subscribe: o, set: i, update: s } = me([]);
  let a = e, l = {};
  const u = (f) => {
    const h = l ? f.map((p) => ({ ...l, ...p })) : f;
    sf(t, n, h), a = h, i(a);
  }, c = (f) => u(f(a)), d = (f) => {
    l = f;
  };
  return u(a), {
    subscribe: o,
    set: u,
    update: c,
    setDefaultOptions: d
  };
}, _f = {
  input: gf,
  output: pf,
  default: ts,
  group: vf
}, Cf = {
  straight: xf,
  smoothstep: bf,
  default: rs,
  step: $f
}, Hy = ({ nodes: e = [], edges: t = [], width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: s }) => {
  const a = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), d = i ?? [0, 0], f = s ?? Gi;
  rf(e, a, l, {
    nodeExtent: f,
    nodeOrigin: d,
    elevateNodesOnSelect: !1,
    checkEquality: !1
  }), sf(u, c, t);
  let h = { x: 0, y: 0, zoom: 1 };
  if (o && n && r) {
    const p = Qo(a, {
      filter: (b) => !!((b.width || b.initialWidth) && (b.height || b.initialHeight))
    });
    h = pl(p, n, r, 0.5, 2, 0.1);
  }
  return {
    flowId: me(null),
    nodes: Dy(e, a, l, d, f),
    nodeLookup: Wt(a),
    parentLookup: Wt(l),
    edgeLookup: Wt(c),
    visibleNodes: Wt([]),
    edges: Ty(t, u, c),
    visibleEdges: Wt([]),
    connectionLookup: Wt(u),
    height: me(500),
    width: me(500),
    minZoom: me(0.5),
    maxZoom: me(2),
    nodeOrigin: me(d),
    nodeDragThreshold: me(1),
    nodeExtent: me(f),
    translateExtent: me(Gi),
    autoPanOnNodeDrag: me(!0),
    autoPanOnConnect: me(!0),
    fitViewOnInit: me(!1),
    fitViewOnInitDone: me(!1),
    fitViewOptions: me(void 0),
    panZoom: me(null),
    snapGrid: me(null),
    dragging: me(!1),
    selectionRect: me(null),
    selectionKeyPressed: me(!1),
    multiselectionKeyPressed: me(!1),
    deleteKeyPressed: me(!1),
    panActivationKeyPressed: me(!1),
    zoomActivationKeyPressed: me(!1),
    selectionRectMode: me(null),
    selectionMode: me(Ui.Partial),
    nodeTypes: me(_f),
    edgeTypes: me(Cf),
    viewport: me(h),
    connectionMode: me(Cr.Strict),
    domNode: me(null),
    connection: Wt(Ea),
    connectionLineType: me(jr.Bezier),
    connectionRadius: me(20),
    isValidConnection: me(() => !0),
    nodesDraggable: me(!0),
    nodesConnectable: me(!0),
    elementsSelectable: me(!0),
    selectNodesOnDrag: me(!0),
    markers: Wt([]),
    defaultMarkerColor: me("#b1b1b7"),
    lib: Wt("svelte"),
    onlyRenderVisibleElements: me(!1),
    onerror: me(T2),
    ondelete: me(void 0),
    onedgecreate: me(void 0),
    onconnect: me(void 0),
    onconnectstart: me(void 0),
    onconnectend: me(void 0),
    onbeforedelete: me(void 0),
    nodesInitialized: me(!1),
    edgesInitialized: me(!1),
    viewportInitialized: me(!1),
    initialized: Wt(!1)
  };
};
function zy(e) {
  const t = ir([
    e.edges,
    e.nodes,
    e.nodeLookup,
    e.onlyRenderVisibleElements,
    e.viewport,
    e.width,
    e.height
  ], ([n, , r, o, i, s, a]) => o && s && a ? n.filter((l) => {
    const u = r.get(l.source), c = r.get(l.target);
    return u && c && Z2({
      sourceNode: u,
      targetNode: c,
      width: s,
      height: a,
      transform: [i.x, i.y, i.zoom]
    });
  }) : n);
  return ir([t, e.nodes, e.nodeLookup, e.connectionMode, e.onerror], ([n, , r, o, i]) => n.reduce((s, a) => {
    const l = r.get(a.source), u = r.get(a.target);
    if (!l || !u)
      return s;
    const c = F2({
      id: a.id,
      sourceNode: l,
      targetNode: u,
      sourceHandle: a.sourceHandle || null,
      targetHandle: a.targetHandle || null,
      connectionMode: o,
      onError: i
    });
    return c && s.push({
      ...a,
      zIndex: R2({
        selected: a.selected,
        zIndex: a.zIndex,
        sourceNode: l,
        targetNode: u,
        elevateOnSelect: !1
      }),
      ...c
    }), s;
  }, []));
}
function Ly(e) {
  return ir([
    e.nodeLookup,
    e.onlyRenderVisibleElements,
    e.width,
    e.height,
    e.viewport,
    e.nodes
  ], ([t, n, r, o, i]) => {
    const s = [i.x, i.y, i.zoom];
    return n ? jd(t, { x: 0, y: 0, width: r, height: o }, s, !0) : Array.from(t.values());
  });
}
const Os = Symbol();
function kf({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: s }) {
  const a = Hy({
    nodes: e,
    edges: t,
    width: n,
    height: r,
    fitView: o,
    nodeOrigin: i,
    nodeExtent: s
  });
  function l(_) {
    a.nodeTypes.set({
      ..._f,
      ..._
    });
  }
  function u(_) {
    a.edgeTypes.set({
      ...Cf,
      ..._
    });
  }
  function c(_) {
    const E = F(a.edges);
    a.edges.set(K2(_, E));
  }
  const d = (_, E = !1) => {
    var D;
    const z = F(a.nodeLookup);
    for (const [Z, W] of _) {
      const q = (D = z.get(Z)) == null ? void 0 : D.internals.userNode;
      q && (q.position = W.position, q.dragging = E);
    }
    a.nodes.update((Z) => Z);
  };
  function f(_) {
    var E, D, z;
    const Z = F(a.nodeLookup), W = F(a.parentLookup), { changes: q, updatedInternals: fe } = ny(_, Z, F(a.parentLookup), F(a.domNode), F(a.nodeOrigin));
    if (fe) {
      if (J2(Z, W, { nodeOrigin: i, nodeExtent: s }), !F(a.fitViewOnInitDone) && F(a.fitViewOnInit)) {
        const Q = F(a.fitViewOptions), X = p({
          ...Q,
          nodes: Q == null ? void 0 : Q.nodes
        });
        a.fitViewOnInitDone.set(X);
      }
      for (const Q of q) {
        const X = (E = Z.get(Q.id)) == null ? void 0 : E.internals.userNode;
        if (X)
          switch (Q.type) {
            case "dimensions": {
              const de = { ...X.measured, ...Q.dimensions };
              Q.setAttributes && (X.width = ((D = Q.dimensions) == null ? void 0 : D.width) ?? X.width, X.height = ((z = Q.dimensions) == null ? void 0 : z.height) ?? X.height), X.measured = de;
              break;
            }
            case "position":
              X.position = Q.position ?? X.position;
              break;
          }
      }
      a.nodes.update((Q) => Q), F(a.nodesInitialized) || a.nodesInitialized.set(!0);
    }
  }
  function h(_) {
    const E = F(a.panZoom), D = F(a.domNode);
    if (!E || !D)
      return Promise.resolve(!1);
    const { width: z, height: Z } = vl(D), W = mu(F(a.nodeLookup), _);
    return yu({
      nodes: W,
      width: z,
      height: Z,
      minZoom: F(a.minZoom),
      maxZoom: F(a.maxZoom),
      panZoom: E
    }, _);
  }
  function p(_) {
    const E = F(a.panZoom);
    if (!E)
      return !1;
    const D = mu(F(a.nodeLookup), _);
    return yu({
      nodes: D,
      width: F(a.width),
      height: F(a.height),
      minZoom: F(a.minZoom),
      maxZoom: F(a.maxZoom),
      panZoom: E
    }, _), D.size > 0;
  }
  function b(_, E) {
    const D = F(a.panZoom);
    return D ? D.scaleBy(_, E) : Promise.resolve(!1);
  }
  function x(_) {
    return b(1.2, _);
  }
  function k(_) {
    return b(1 / 1.2, _);
  }
  function v(_) {
    const E = F(a.panZoom);
    E && (E.setScaleExtent([_, F(a.maxZoom)]), a.minZoom.set(_));
  }
  function $(_) {
    const E = F(a.panZoom);
    E && (E.setScaleExtent([F(a.minZoom), _]), a.maxZoom.set(_));
  }
  function w(_) {
    const E = F(a.panZoom);
    E && (E.setTranslateExtent(_), a.translateExtent.set(_));
  }
  function C(_) {
    let E = !1;
    return _.forEach((D) => {
      D.selected && (D.selected = !1, E = !0);
    }), E;
  }
  function N(_) {
    var E;
    (E = F(a.panZoom)) == null || E.setClickDistance(_);
  }
  function V(_) {
    C((_ == null ? void 0 : _.nodes) || F(a.nodes)) && a.nodes.set(F(a.nodes)), C((_ == null ? void 0 : _.edges) || F(a.edges)) && a.edges.set(F(a.edges));
  }
  a.deleteKeyPressed.subscribe(async (_) => {
    var E;
    if (_) {
      const D = F(a.nodes), z = F(a.edges), Z = D.filter((Q) => Q.selected), W = z.filter((Q) => Q.selected), { nodes: q, edges: fe } = await Fd({
        nodesToRemove: Z,
        edgesToRemove: W,
        nodes: D,
        edges: z,
        onBeforeDelete: F(a.onbeforedelete)
      });
      (q.length || fe.length) && (a.nodes.update((Q) => Q.filter((X) => !q.some((de) => de.id === X.id))), a.edges.update((Q) => Q.filter((X) => !fe.some((de) => de.id === X.id))), (E = F(a.ondelete)) == null || E({
        nodes: q,
        edges: fe
      }));
    }
  });
  function P(_) {
    const E = F(a.multiselectionKeyPressed);
    a.nodes.update((D) => D.map((z) => {
      const Z = _.includes(z.id), W = E && z.selected || Z;
      return z.selected = W, z;
    })), E || a.edges.update((D) => D.map((z) => (z.selected = !1, z)));
  }
  function O(_) {
    const E = F(a.multiselectionKeyPressed);
    a.edges.update((D) => D.map((z) => {
      const Z = _.includes(z.id), W = E && z.selected || Z;
      return z.selected = W, z;
    })), E || a.nodes.update((D) => D.map((z) => (z.selected = !1, z)));
  }
  function T(_) {
    var E;
    const D = (E = F(a.nodes)) == null ? void 0 : E.find((z) => z.id === _);
    if (!D) {
      console.warn("012", Uo.error012(_));
      return;
    }
    a.selectionRect.set(null), a.selectionRectMode.set(null), D.selected ? D.selected && F(a.multiselectionKeyPressed) && V({ nodes: [D], edges: [] }) : P([_]);
  }
  function L(_) {
    const E = F(a.viewport);
    return ry({
      delta: _,
      panZoom: F(a.panZoom),
      transform: [E.x, E.y, E.zoom],
      translateExtent: F(a.translateExtent),
      width: F(a.width),
      height: F(a.height)
    });
  }
  const I = me(Ea), B = (_) => {
    I.set({ ..._ });
  };
  function S() {
    I.set(Ea);
  }
  function M() {
    a.fitViewOnInitDone.set(!1), a.selectionRect.set(null), a.selectionRectMode.set(null), a.snapGrid.set(null), a.isValidConnection.set(() => !0), V(), S();
  }
  return {
    // state
    ...a,
    // derived state
    visibleEdges: zy(a),
    visibleNodes: Ly(a),
    connection: ir([I, a.viewport], ([_, E]) => _.inProgress ? {
      ..._,
      to: ei(_.to, [E.x, E.y, E.zoom])
    } : { ..._ }),
    markers: ir([a.edges, a.defaultMarkerColor, a.flowId], ([_, E, D]) => q2(_, { defaultColor: E, id: D })),
    initialized: (() => {
      let _ = !1;
      const E = F(a.nodes).length, D = F(a.edges).length;
      return ir([a.nodesInitialized, a.edgesInitialized, a.viewportInitialized], ([z, Z, W]) => _ || (E === 0 ? _ = W : D === 0 ? _ = W && z : _ = W && z && Z, _));
    })(),
    // actions
    syncNodeStores: (_) => My(a.nodes, _),
    syncEdgeStores: (_) => Vy(a.edges, _),
    syncViewport: (_) => Oy(a.panZoom, a.viewport, _),
    setNodeTypes: l,
    setEdgeTypes: u,
    addEdge: c,
    updateNodePositions: d,
    updateNodeInternals: f,
    zoomIn: x,
    zoomOut: k,
    fitView: (_) => h(_),
    setMinZoom: v,
    setMaxZoom: $,
    setTranslateExtent: w,
    setPaneClickDistance: N,
    unselectNodesAndEdges: V,
    addSelectedNodes: P,
    addSelectedEdges: O,
    handleNodeSelection: T,
    panBy: L,
    updateConnection: B,
    cancelConnection: S,
    reset: M
  };
}
function et() {
  const e = xr(Os);
  if (!e)
    throw new Error("In order to use useStore you need to wrap your component in a <SvelteFlowProvider />");
  return e.getStore();
}
function Iy({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: s }) {
  const a = kf({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: s });
  return Qr(Os, {
    getStore: () => a
  }), a;
}
function Ou(e, t) {
  const { panZoom: n, minZoom: r, maxZoom: o, initialViewport: i, viewport: s, dragging: a, translateExtent: l, paneClickDistance: u } = t, c = xy({
    domNode: e,
    minZoom: r,
    maxZoom: o,
    translateExtent: l,
    viewport: i,
    paneClickDistance: u,
    onDraggingChange: a.set
  }), d = c.getViewport();
  return s.set(d), n.set(c), c.update(t), {
    update(f) {
      c.update(f);
    }
  };
}
var Ay = /* @__PURE__ */ ne('<div class="svelte-flow__zoom svelte-4xkw84"><!></div>');
const Ry = {
  hash: "svelte-4xkw84",
  code: ".svelte-flow__zoom.svelte-4xkw84 {width:100%;height:100%;position:absolute;top:0;left:0;z-index:4;}"
};
function Sf(e, t) {
  le(t, !1), Qe(e, Ry);
  const [n, r] = tt(), o = () => J(D, "$panActivationKeyPressed", n), i = () => J(B, "$minZoom", n), s = () => J(S, "$maxZoom", n), a = () => J(z, "$zoomActivationKeyPressed", n), l = () => J(I, "$selectionRect", n), u = () => J(_, "$translateExtent", n), c = () => J(E, "$lib", n), d = te(), f = te(), h = te();
  let p = y(t, "initialViewport", 12, void 0), b = y(t, "onMoveStart", 12, void 0), x = y(t, "onMove", 12, void 0), k = y(t, "onMoveEnd", 12, void 0), v = y(t, "panOnScrollMode", 12), $ = y(t, "preventScrolling", 12), w = y(t, "zoomOnScroll", 12), C = y(t, "zoomOnDoubleClick", 12), N = y(t, "zoomOnPinch", 12), V = y(t, "panOnDrag", 12), P = y(t, "panOnScroll", 12), O = y(t, "paneClickDistance", 12);
  const {
    viewport: T,
    panZoom: L,
    selectionRect: I,
    minZoom: B,
    maxZoom: S,
    dragging: M,
    translateExtent: _,
    lib: E,
    panActivationKeyPressed: D,
    zoomActivationKeyPressed: z,
    viewportInitialized: Z
  } = et(), W = (X) => T.set({
    x: X[0],
    y: X[1],
    zoom: X[2]
  });
  En(() => {
    Xi(Z, !0);
  }), ae(() => G(p()), () => {
    U(d, p() || { x: 0, y: 0, zoom: 1 });
  }), ae(
    () => (o(), G(V())),
    () => {
      U(f, o() || V());
    }
  ), ae(
    () => (o(), G(P())),
    () => {
      U(h, o() || P());
    }
  ), gt(), Oe();
  var q = Ay(), fe = j(q);
  mt(fe, t, "default", {}), K(q), vt(q, (X, de) => Ou == null ? void 0 : Ou(X, de), () => ({
    viewport: T,
    minZoom: i(),
    maxZoom: s(),
    initialViewport: g(d),
    dragging: M,
    panZoom: L,
    onPanZoomStart: b(),
    onPanZoom: x(),
    onPanZoomEnd: k(),
    zoomOnScroll: w(),
    zoomOnDoubleClick: C(),
    zoomOnPinch: N(),
    panOnScroll: g(h),
    panOnDrag: g(f),
    panOnScrollSpeed: 0.5,
    panOnScrollMode: v() || sr.Free,
    zoomActivationKeyPressed: a(),
    preventScrolling: typeof $() == "boolean" ? $() : !0,
    noPanClassName: "nopan",
    noWheelClassName: "nowheel",
    userSelectionActive: !!l(),
    translateExtent: u(),
    lib: c(),
    paneClickDistance: O(),
    onTransformChange: W
  })), H(e, q);
  var Q = ue({
    get initialViewport() {
      return p();
    },
    set initialViewport(X) {
      p(X), m();
    },
    get onMoveStart() {
      return b();
    },
    set onMoveStart(X) {
      b(X), m();
    },
    get onMove() {
      return x();
    },
    set onMove(X) {
      x(X), m();
    },
    get onMoveEnd() {
      return k();
    },
    set onMoveEnd(X) {
      k(X), m();
    },
    get panOnScrollMode() {
      return v();
    },
    set panOnScrollMode(X) {
      v(X), m();
    },
    get preventScrolling() {
      return $();
    },
    set preventScrolling(X) {
      $(X), m();
    },
    get zoomOnScroll() {
      return w();
    },
    set zoomOnScroll(X) {
      w(X), m();
    },
    get zoomOnDoubleClick() {
      return C();
    },
    set zoomOnDoubleClick(X) {
      C(X), m();
    },
    get zoomOnPinch() {
      return N();
    },
    set zoomOnPinch(X) {
      N(X), m();
    },
    get panOnDrag() {
      return V();
    },
    set panOnDrag(X) {
      V(X), m();
    },
    get panOnScroll() {
      return P();
    },
    set panOnScroll(X) {
      P(X), m();
    },
    get paneClickDistance() {
      return O();
    },
    set paneClickDistance(X) {
      O(X), m();
    }
  });
  return r(), Q;
}
re(
  Sf,
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
function Du(e, t) {
  return (n) => {
    n.target === t && (e == null || e(n));
  };
}
function Tu(e) {
  return (t) => {
    const n = e.includes(t.id);
    return t.selected !== n && (t.selected = n), t;
  };
}
var Zy = /* @__PURE__ */ ne('<div class="svelte-flow__pane svelte-1esy7hx"><!></div>');
const By = {
  hash: "svelte-1esy7hx",
  code: ".svelte-flow__pane.svelte-1esy7hx {position:absolute;top:0;left:0;width:100%;height:100%;}"
};
function Ef(e, t) {
  le(t, !1), Qe(e, By);
  const [n, r] = tt(), o = () => J(S, "$panActivationKeyPressed", n), i = () => J(I, "$selectionKeyPressed", n), s = () => J(T, "$selectionRect", n), a = () => J(O, "$elementsSelectable", n), l = () => J(L, "$selectionRectMode", n), u = () => J(N, "$edges", n), c = () => J(C, "$nodeLookup", n), d = () => J(V, "$viewport", n), f = () => J(B, "$selectionMode", n), h = () => J(P, "$dragging", n), p = te(), b = te(), x = te();
  let k = y(t, "panOnDrag", 12, void 0), v = y(t, "selectionOnDrag", 12, void 0);
  const $ = _s(), {
    nodes: w,
    nodeLookup: C,
    edges: N,
    viewport: V,
    dragging: P,
    elementsSelectable: O,
    selectionRect: T,
    selectionRectMode: L,
    selectionKeyPressed: I,
    selectionMode: B,
    panActivationKeyPressed: S,
    unselectNodesAndEdges: M
  } = et();
  let _ = te(), E = null, D = [], z = !1;
  function Z(oe) {
    if (z) {
      z = !1;
      return;
    }
    $("paneclick", { event: oe }), M(), L.set(null);
  }
  function W(oe) {
    var ce, Ae;
    if (E = g(_).getBoundingClientRect(), !O || !g(b) || oe.button !== 0 || oe.target !== g(_) || !E)
      return;
    (Ae = (ce = oe.target) == null ? void 0 : ce.setPointerCapture) == null || Ae.call(ce, oe.pointerId);
    const { x: Fe, y: Ze } = Rn(oe, E);
    M(), T.set({
      width: 0,
      height: 0,
      startX: Fe,
      startY: Ze,
      x: Fe,
      y: Ze
    });
  }
  function q(oe) {
    if (!g(b) || !E || !s())
      return;
    z = !0;
    const ce = Rn(oe, E), Ae = s().startX ?? 0, Fe = s().startY ?? 0, Ze = {
      ...s(),
      x: ce.x < Ae ? ce.x : Ae,
      y: ce.y < Fe ? ce.y : Fe,
      width: Math.abs(ce.x - Ae),
      height: Math.abs(ce.y - Fe)
    }, Ke = D.map((Ee) => Ee.id), Y = Na(D, u()).map((Ee) => Ee.id);
    D = jd(
      c(),
      Ze,
      [
        d().x,
        d().y,
        d().zoom
      ],
      f() === Ui.Partial,
      !0
    );
    const he = Na(D, u()).map((Ee) => Ee.id), ge = D.map((Ee) => Ee.id);
    (Ke.length !== ge.length || ge.some((Ee) => !Ke.includes(Ee))) && w.update((Ee) => Ee.map(Tu(ge))), (Y.length !== he.length || he.some((Ee) => !Y.includes(Ee))) && N.update((Ee) => Ee.map(Tu(he))), L.set("user"), T.set(Ze);
  }
  function fe(oe) {
    var ce, Ae;
    oe.button === 0 && ((Ae = (ce = oe.target) == null ? void 0 : ce.releasePointerCapture) == null || Ae.call(ce, oe.pointerId), !g(b) && l() === "user" && oe.target === g(_) && (Z == null || Z(oe)), T.set(null), D.length > 0 && Xi(L, "nodes"), i() && (z = !1));
  }
  const Q = (oe) => {
    var ce;
    if (Array.isArray(g(p)) && (ce = g(p)) != null && ce.includes(2)) {
      oe.preventDefault();
      return;
    }
    $("panecontextmenu", { event: oe });
  };
  ae(
    () => (o(), G(k())),
    () => {
      U(p, o() || k());
    }
  ), ae(
    () => (i(), s(), G(v()), g(p)),
    () => {
      U(b, i() || s() || v() && g(p) !== !0);
    }
  ), ae(
    () => (a(), g(b), l()),
    () => {
      U(x, a() && (g(b) || l() === "user"));
    }
  ), gt(), Oe();
  var X = Zy(), de = /* @__PURE__ */ Me(() => g(x) ? void 0 : Du(Z, g(_))), be = /* @__PURE__ */ Me(() => Du(Q, g(_))), xe = j(X);
  mt(xe, t, "default", {}), K(X), Yn(X, (oe) => U(_, oe), () => g(_)), Se(
    (oe) => {
      rt(X, "draggable", oe), rt(X, "dragging", h()), rt(X, "selection", g(b));
    },
    [
      () => k() === !0 || Array.isArray(k()) && k().includes(0)
    ],
    pe
  ), Ue("click", X, function(...oe) {
    var ce;
    (ce = g(de)) == null || ce.apply(this, oe);
  }), Ue("pointerdown", X, function(...oe) {
    var ce;
    (ce = g(x) ? W : void 0) == null || ce.apply(this, oe);
  }), Ue("pointermove", X, function(...oe) {
    var ce;
    (ce = g(x) ? q : void 0) == null || ce.apply(this, oe);
  }), Ue("pointerup", X, function(...oe) {
    var ce;
    (ce = g(x) ? fe : void 0) == null || ce.apply(this, oe);
  }), Ue("contextmenu", X, function(...oe) {
    var ce;
    (ce = g(be)) == null || ce.apply(this, oe);
  }), H(e, X);
  var ve = ue({
    get panOnDrag() {
      return k();
    },
    set panOnDrag(oe) {
      k(oe), m();
    },
    get selectionOnDrag() {
      return v();
    },
    set selectionOnDrag(oe) {
      v(oe), m();
    }
  });
  return r(), ve;
}
re(Ef, { panOnDrag: {}, selectionOnDrag: {} }, ["default"], [], !0);
var Xy = /* @__PURE__ */ ne('<div class="svelte-flow__viewport xyflow__viewport svelte-1floaup"><!></div>');
const Ky = {
  hash: "svelte-1floaup",
  code: ".svelte-flow__viewport.svelte-1floaup {width:100%;height:100%;position:absolute;top:0;left:0;}"
};
function Nf(e, t) {
  le(t, !1), Qe(e, Ky);
  const [n, r] = tt(), o = () => J(i, "$viewport", n), { viewport: i } = et();
  Oe();
  var s = Xy(), a = j(s);
  mt(a, t, "default", {}), K(s), Se(() => se(s, "style", `transform: translate(${o().x ?? ""}px, ${o().y ?? ""}px) scale(${o().zoom ?? ""})`)), H(e, s), ue(), r();
}
re(Nf, {}, ["default"], [], !0);
function os(e, t) {
  const { store: n, onDrag: r, onDragStart: o, onDragStop: i, onNodeMouseDown: s } = t, a = sy({
    onDrag: r,
    onDragStart: o,
    onDragStop: i,
    onNodeMouseDown: s,
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
      a.destroy();
      return;
    }
    a.update({
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
      a.destroy();
    }
  };
}
function Yy({ width: e, height: t, initialWidth: n, initialHeight: r, measuredWidth: o, measuredHeight: i }) {
  if (o === void 0 && i === void 0) {
    const s = e ?? n, a = t ?? r;
    return {
      width: s ? `width:${s}px;` : "",
      height: a ? `height:${a}px;` : ""
    };
  }
  return {
    width: e ? `width:${e}px;` : "",
    height: t ? `height:${t}px;` : ""
  };
}
var Wy = /* @__PURE__ */ ne("<div><!></div>");
function Pf(e, t) {
  le(t, !1);
  const [n, r] = tt(), o = () => J(be, "$nodeTypes", n), i = () => J(Ae, "$elementsSelectable", n), s = () => J(Fe, "$nodesDraggable", n), a = () => J(he, "$connectableStore", n), l = te(void 0, !0), u = te(void 0, !0), c = te(void 0, !0), d = te(void 0, !0);
  let f = y(t, "node", 13), h = y(t, "id", 13), p = y(t, "data", 29, () => ({})), b = y(t, "selected", 13, !1), x = y(t, "draggable", 13, void 0), k = y(t, "selectable", 13, void 0), v = y(t, "connectable", 13, !0), $ = y(t, "deletable", 13, !0), w = y(t, "hidden", 13, !1), C = y(t, "dragging", 13, !1), N = y(t, "resizeObserver", 13, null), V = y(t, "style", 13, void 0), P = y(t, "type", 13, "default"), O = y(t, "isParent", 13, !1), T = y(t, "positionX", 13), L = y(t, "positionY", 13), I = y(t, "sourcePosition", 13, void 0), B = y(t, "targetPosition", 13, void 0), S = y(t, "zIndex", 13), M = y(t, "measuredWidth", 13, void 0), _ = y(t, "measuredHeight", 13, void 0), E = y(t, "initialWidth", 13, void 0), D = y(t, "initialHeight", 13, void 0), z = y(t, "width", 13, void 0), Z = y(t, "height", 13, void 0), W = y(t, "dragHandle", 13, void 0), q = y(t, "initialized", 13, !1), fe = y(t, "parentId", 13, void 0), Q = y(t, "nodeClickDistance", 13, void 0), X = y(t, "class", 13, "");
  const de = et(), {
    nodeTypes: be,
    nodeDragThreshold: xe,
    selectNodesOnDrag: ve,
    handleNodeSelection: oe,
    updateNodeInternals: ce,
    elementsSelectable: Ae,
    nodesDraggable: Fe
  } = de;
  let Ze = te(void 0, !0), Ke = te(null, !0);
  const Y = _s(), he = me(v());
  let ge = te(void 0, !0), Ee = te(void 0, !0), st = te(void 0, !0);
  Qr("svelteflow__node_id", h()), Qr("svelteflow__node_connectable", he), il(() => {
    var ee;
    g(Ke) && ((ee = N()) == null || ee.unobserve(g(Ke)));
  });
  function Te(ee) {
    k() && (!F(ve) || !x() || F(xe) > 0) && oe(h()), Y("nodeclick", { node: f().internals.userNode, event: ee });
  }
  ae(() => G(P()), () => {
    U(l, P() || "default");
  }), ae(() => (o(), g(l)), () => {
    U(u, !!o()[g(l)]);
  }), ae(
    () => (o(), g(l), ts),
    () => {
      U(c, o()[g(l)] || ts);
    }
  ), ae(
    () => (g(u), G(P())),
    () => {
      g(u) || console.warn("003", Uo.error003(P()));
    }
  ), ae(
    () => (G(z()), G(Z()), G(E()), G(D()), G(M()), G(_())),
    () => {
      U(d, Yy({
        width: z(),
        height: Z(),
        initialWidth: E(),
        initialHeight: D(),
        measuredWidth: M(),
        measuredHeight: _()
      }));
    }
  ), ae(() => G(v()), () => {
    he.set(!!v());
  }), ae(
    () => (g(ge), g(l), g(Ee), G(I()), g(st), G(B()), G(h()), g(Ze)),
    () => {
      (g(ge) && g(l) !== g(ge) || g(Ee) && I() !== g(Ee) || g(st) && B() !== g(st)) && requestAnimationFrame(() => ce(/* @__PURE__ */ new Map([
        [
          h(),
          {
            id: h(),
            nodeElement: g(Ze),
            force: !0
          }
        ]
      ]))), U(ge, g(l)), U(Ee, I()), U(st, B());
    }
  ), ae(
    () => (G(N()), g(Ze), g(Ke), G(q())),
    () => {
      N() && (g(Ze) !== g(Ke) || !q()) && (g(Ke) && N().unobserve(g(Ke)), g(Ze) && N().observe(g(Ze)), U(Ke, g(Ze)));
    }
  ), gt(), Oe(!0);
  var Ye = Je(), We = ye(Ye);
  {
    var ot = (ee) => {
      var Ve = Wy(), ie = j(Ve);
      const Mn = /* @__PURE__ */ pe(() => b() ?? !1), en = /* @__PURE__ */ pe(() => k() ?? i() ?? !0), Ne = /* @__PURE__ */ pe(() => $() ?? !0), ut = /* @__PURE__ */ pe(() => x() ?? s() ?? !0);
      cd(ie, () => g(c), ($e, He) => {
        He($e, {
          get data() {
            return p();
          },
          get id() {
            return h();
          },
          get selected() {
            return g(Mn);
          },
          get selectable() {
            return g(en);
          },
          get deletable() {
            return g(Ne);
          },
          get sourcePosition() {
            return I();
          },
          get targetPosition() {
            return B();
          },
          get zIndex() {
            return S();
          },
          get dragging() {
            return C();
          },
          get draggable() {
            return g(ut);
          },
          get dragHandle() {
            return W();
          },
          get parentId() {
            return fe();
          },
          get type() {
            return g(l);
          },
          get isConnectable() {
            return a();
          },
          get positionAbsoluteX() {
            return T();
          },
          get positionAbsoluteY() {
            return L();
          },
          get width() {
            return z();
          },
          get height() {
            return Z();
          }
        });
      }), K(Ve), vt(Ve, ($e, He) => os == null ? void 0 : os($e, He), () => ({
        nodeId: h(),
        isSelectable: k(),
        disabled: !1,
        handleSelector: W(),
        noDragClass: "nodrag",
        nodeClickDistance: Q(),
        onNodeMouseDown: oe,
        onDrag: ($e, He, at, Yt) => {
          Y("nodedrag", { event: $e, targetNode: at, nodes: Yt });
        },
        onDragStart: ($e, He, at, Yt) => {
          Y("nodedragstart", { event: $e, targetNode: at, nodes: Yt });
        },
        onDragStop: ($e, He, at, Yt) => {
          Y("nodedragstop", { event: $e, targetNode: at, nodes: Yt });
        },
        store: de
      })), Yn(Ve, ($e) => U(Ze, $e), () => g(Ze)), At(() => Ue("click", Ve, Te)), At(() => Ue("mouseenter", Ve, ($e) => Y("nodemouseenter", { node: f(), event: $e }))), At(() => Ue("mouseleave", Ve, ($e) => Y("nodemouseleave", { node: f(), event: $e }))), At(() => Ue("mousemove", Ve, ($e) => Y("nodemousemove", { node: f(), event: $e }))), At(() => Ue("contextmenu", Ve, ($e) => Y("nodecontextmenu", { node: f(), event: $e }))), Se(
        ($e) => {
          se(Ve, "data-id", h()), eo(Ve, Sn($e)), se(Ve, "style", `${V() ?? ""};${g(d).width ?? ""}${g(d).height ?? ""}`), rt(Ve, "dragging", C()), rt(Ve, "selected", b()), rt(Ve, "draggable", x()), rt(Ve, "connectable", v()), rt(Ve, "selectable", k()), rt(Ve, "nopan", x()), rt(Ve, "parent", O()), it(Ve, "z-index", S()), it(Ve, "transform", `translate(${T() ?? ""}px, ${L() ?? ""}px)`), it(Ve, "visibility", q() ? "visible" : "hidden");
        },
        [
          () => Et([
            "svelte-flow__node",
            `svelte-flow__node-${g(l)}`,
            X()
          ])
        ],
        pe
      ), H(ee, Ve);
    };
    Ce(We, (ee) => {
      w() || ee(ot);
    });
  }
  H(e, Ye);
  var pt = ue({
    get node() {
      return f();
    },
    set node(ee) {
      f(ee), m();
    },
    get id() {
      return h();
    },
    set id(ee) {
      h(ee), m();
    },
    get data() {
      return p();
    },
    set data(ee) {
      p(ee), m();
    },
    get selected() {
      return b();
    },
    set selected(ee) {
      b(ee), m();
    },
    get draggable() {
      return x();
    },
    set draggable(ee) {
      x(ee), m();
    },
    get selectable() {
      return k();
    },
    set selectable(ee) {
      k(ee), m();
    },
    get connectable() {
      return v();
    },
    set connectable(ee) {
      v(ee), m();
    },
    get deletable() {
      return $();
    },
    set deletable(ee) {
      $(ee), m();
    },
    get hidden() {
      return w();
    },
    set hidden(ee) {
      w(ee), m();
    },
    get dragging() {
      return C();
    },
    set dragging(ee) {
      C(ee), m();
    },
    get resizeObserver() {
      return N();
    },
    set resizeObserver(ee) {
      N(ee), m();
    },
    get style() {
      return V();
    },
    set style(ee) {
      V(ee), m();
    },
    get type() {
      return P();
    },
    set type(ee) {
      P(ee), m();
    },
    get isParent() {
      return O();
    },
    set isParent(ee) {
      O(ee), m();
    },
    get positionX() {
      return T();
    },
    set positionX(ee) {
      T(ee), m();
    },
    get positionY() {
      return L();
    },
    set positionY(ee) {
      L(ee), m();
    },
    get sourcePosition() {
      return I();
    },
    set sourcePosition(ee) {
      I(ee), m();
    },
    get targetPosition() {
      return B();
    },
    set targetPosition(ee) {
      B(ee), m();
    },
    get zIndex() {
      return S();
    },
    set zIndex(ee) {
      S(ee), m();
    },
    get measuredWidth() {
      return M();
    },
    set measuredWidth(ee) {
      M(ee), m();
    },
    get measuredHeight() {
      return _();
    },
    set measuredHeight(ee) {
      _(ee), m();
    },
    get initialWidth() {
      return E();
    },
    set initialWidth(ee) {
      E(ee), m();
    },
    get initialHeight() {
      return D();
    },
    set initialHeight(ee) {
      D(ee), m();
    },
    get width() {
      return z();
    },
    set width(ee) {
      z(ee), m();
    },
    get height() {
      return Z();
    },
    set height(ee) {
      Z(ee), m();
    },
    get dragHandle() {
      return W();
    },
    set dragHandle(ee) {
      W(ee), m();
    },
    get initialized() {
      return q();
    },
    set initialized(ee) {
      q(ee), m();
    },
    get parentId() {
      return fe();
    },
    set parentId(ee) {
      fe(ee), m();
    },
    get nodeClickDistance() {
      return Q();
    },
    set nodeClickDistance(ee) {
      Q(ee), m();
    },
    get class() {
      return X();
    },
    set class(ee) {
      X(ee), m();
    }
  });
  return r(), pt;
}
re(
  Pf,
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
var jy = /* @__PURE__ */ ne('<div class="svelte-flow__nodes svelte-tf4uy4"></div>');
const Fy = {
  hash: "svelte-tf4uy4",
  code: ".svelte-flow__nodes.svelte-tf4uy4 {width:100%;height:100%;position:absolute;left:0;top:0;}"
};
function Mf(e, t) {
  le(t, !1), Qe(e, Fy);
  const [n, r] = tt(), o = () => J(c, "$visibleNodes", n), i = () => J(d, "$nodesDraggable", n), s = () => J(h, "$elementsSelectable", n), a = () => J(f, "$nodesConnectable", n), l = () => J(b, "$parentLookup", n);
  let u = y(t, "nodeClickDistance", 12, 0);
  const {
    visibleNodes: c,
    nodesDraggable: d,
    nodesConnectable: f,
    elementsSelectable: h,
    updateNodeInternals: p,
    parentLookup: b
  } = et(), x = typeof ResizeObserver > "u" ? null : new ResizeObserver(($) => {
    const w = /* @__PURE__ */ new Map();
    $.forEach((C) => {
      const N = C.target.getAttribute("data-id");
      w.set(N, { id: N, nodeElement: C.target, force: !0 });
    }), p(w);
  });
  il(() => {
    x == null || x.disconnect();
  }), Oe();
  var k = jy();
  Bt(k, 5, o, ($) => $.id, ($, w) => {
    const C = /* @__PURE__ */ pe(() => !!g(w).selected), N = /* @__PURE__ */ pe(() => !!g(w).hidden), V = /* @__PURE__ */ pe(() => !!(g(w).draggable || i() && typeof g(w).draggable > "u")), P = /* @__PURE__ */ pe(() => !!(g(w).selectable || s() && typeof g(w).selectable > "u")), O = /* @__PURE__ */ pe(() => !!(g(w).connectable || a() && typeof g(w).connectable > "u")), T = /* @__PURE__ */ pe(() => g(w).deletable ?? !0), L = /* @__PURE__ */ pe(() => l().has(g(w).id)), I = /* @__PURE__ */ pe(() => g(w).type ?? "default"), B = /* @__PURE__ */ pe(() => g(w).internals.z ?? 0), S = /* @__PURE__ */ pe(() => Qd(g(w)));
    Pf($, {
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
        return g(C);
      },
      get hidden() {
        return g(N);
      },
      get draggable() {
        return g(V);
      },
      get selectable() {
        return g(P);
      },
      get connectable() {
        return g(O);
      },
      get deletable() {
        return g(T);
      },
      get positionX() {
        return g(w).internals.positionAbsolute.x;
      },
      get positionY() {
        return g(w).internals.positionAbsolute.y;
      },
      get isParent() {
        return g(L);
      },
      get style() {
        return g(w).style;
      },
      get class() {
        return g(w).class;
      },
      get type() {
        return g(I);
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
        return g(B);
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
      resizeObserver: x,
      get nodeClickDistance() {
        return u();
      },
      $$events: {
        nodeclick(M) {
          Ie.call(this, t, M);
        },
        nodemouseenter(M) {
          Ie.call(this, t, M);
        },
        nodemousemove(M) {
          Ie.call(this, t, M);
        },
        nodemouseleave(M) {
          Ie.call(this, t, M);
        },
        nodedrag(M) {
          Ie.call(this, t, M);
        },
        nodedragstart(M) {
          Ie.call(this, t, M);
        },
        nodedragstop(M) {
          Ie.call(this, t, M);
        },
        nodecontextmenu(M) {
          Ie.call(this, t, M);
        }
      }
    });
  }), K(k), H(e, k);
  var v = ue({
    get nodeClickDistance() {
      return u();
    },
    set nodeClickDistance($) {
      u($), m();
    }
  });
  return r(), v;
}
re(Mf, { nodeClickDistance: {} }, [], [], !0);
var qy = /* @__PURE__ */ we('<svg><g role="img"><!></g></svg>');
function Vf(e, t) {
  le(t, !1);
  const [n, r] = tt(), o = () => J(X, "$edgeTypes", n), i = () => J(de, "$flowId", n), s = () => J(be, "$elementsSelectable", n), a = () => J(Q, "$edgeLookup", n), l = te(void 0, !0), u = te(void 0, !0), c = te(void 0, !0), d = te(void 0, !0), f = te(void 0, !0);
  let h = y(t, "id", 13), p = y(t, "type", 13, "default"), b = y(t, "source", 13, ""), x = y(t, "target", 13, ""), k = y(t, "data", 29, () => ({})), v = y(t, "style", 13, void 0), $ = y(t, "zIndex", 13, void 0), w = y(t, "animated", 13, !1), C = y(t, "selected", 13, !1), N = y(t, "selectable", 13, void 0), V = y(t, "deletable", 13, void 0), P = y(t, "hidden", 13, !1), O = y(t, "label", 13, void 0), T = y(t, "labelStyle", 13, void 0), L = y(t, "markerStart", 13, void 0), I = y(t, "markerEnd", 13, void 0), B = y(t, "sourceHandle", 13, void 0), S = y(t, "targetHandle", 13, void 0), M = y(t, "sourceX", 13), _ = y(t, "sourceY", 13), E = y(t, "targetX", 13), D = y(t, "targetY", 13), z = y(t, "sourcePosition", 13), Z = y(t, "targetPosition", 13), W = y(t, "ariaLabel", 13, void 0), q = y(t, "interactionWidth", 13, void 0), fe = y(t, "class", 13, "");
  Qr("svelteflow__edge_id", h());
  const {
    edgeLookup: Q,
    edgeTypes: X,
    flowId: de,
    elementsSelectable: be
  } = et(), xe = _s(), ve = yf();
  function oe(Y) {
    const he = a().get(h());
    he && (ve(h()), xe("edgeclick", { event: Y, edge: he }));
  }
  function ce(Y, he) {
    const ge = a().get(h());
    ge && xe(he, { event: Y, edge: ge });
  }
  ae(() => G(p()), () => {
    U(l, p() || "default");
  }), ae(
    () => (o(), g(l), rs),
    () => {
      U(u, o()[g(l)] || rs);
    }
  ), ae(
    () => (G(L()), i()),
    () => {
      U(c, L() ? `url('#${Va(L(), i())}')` : void 0);
    }
  ), ae(
    () => (G(I()), i()),
    () => {
      U(d, I() ? `url('#${Va(I(), i())}')` : void 0);
    }
  ), ae(
    () => (G(N()), s()),
    () => {
      U(f, N() ?? s());
    }
  ), gt(), Oe(!0);
  var Ae = Je(), Fe = ye(Ae);
  {
    var Ze = (Y) => {
      var he = qy(), ge = j(he), Ee = j(ge);
      const st = /* @__PURE__ */ pe(() => V() ?? !0);
      cd(Ee, () => g(u), (Te, Ye) => {
        Ye(Te, {
          get id() {
            return h();
          },
          get source() {
            return b();
          },
          get target() {
            return x();
          },
          get sourceX() {
            return M();
          },
          get sourceY() {
            return _();
          },
          get targetX() {
            return E();
          },
          get targetY() {
            return D();
          },
          get sourcePosition() {
            return z();
          },
          get targetPosition() {
            return Z();
          },
          get animated() {
            return w();
          },
          get selected() {
            return C();
          },
          get label() {
            return O();
          },
          get labelStyle() {
            return T();
          },
          get data() {
            return k();
          },
          get style() {
            return v();
          },
          get interactionWidth() {
            return q();
          },
          get selectable() {
            return g(f);
          },
          get deletable() {
            return g(st);
          },
          get type() {
            return g(l);
          },
          get sourceHandleId() {
            return B();
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
      }), K(ge), K(he), Se(
        (Te) => {
          it(he, "z-index", $()), Vr(ge, Sn(Te)), se(ge, "data-id", h()), se(ge, "aria-label", W() === null ? void 0 : W() ? W() : `Edge from ${b()} to ${x()}`), rt(ge, "animated", w()), rt(ge, "selected", C()), rt(ge, "selectable", g(f));
        },
        [
          () => Et(["svelte-flow__edge", fe()])
        ],
        pe
      ), Ue("click", ge, oe), Ue("contextmenu", ge, (Te) => {
        ce(Te, "edgecontextmenu");
      }), Ue("mouseenter", ge, (Te) => {
        ce(Te, "edgemouseenter");
      }), Ue("mouseleave", ge, (Te) => {
        ce(Te, "edgemouseleave");
      }), H(Y, he);
    };
    Ce(Fe, (Y) => {
      P() || Y(Ze);
    });
  }
  H(e, Ae);
  var Ke = ue({
    get id() {
      return h();
    },
    set id(Y) {
      h(Y), m();
    },
    get type() {
      return p();
    },
    set type(Y) {
      p(Y), m();
    },
    get source() {
      return b();
    },
    set source(Y) {
      b(Y), m();
    },
    get target() {
      return x();
    },
    set target(Y) {
      x(Y), m();
    },
    get data() {
      return k();
    },
    set data(Y) {
      k(Y), m();
    },
    get style() {
      return v();
    },
    set style(Y) {
      v(Y), m();
    },
    get zIndex() {
      return $();
    },
    set zIndex(Y) {
      $(Y), m();
    },
    get animated() {
      return w();
    },
    set animated(Y) {
      w(Y), m();
    },
    get selected() {
      return C();
    },
    set selected(Y) {
      C(Y), m();
    },
    get selectable() {
      return N();
    },
    set selectable(Y) {
      N(Y), m();
    },
    get deletable() {
      return V();
    },
    set deletable(Y) {
      V(Y), m();
    },
    get hidden() {
      return P();
    },
    set hidden(Y) {
      P(Y), m();
    },
    get label() {
      return O();
    },
    set label(Y) {
      O(Y), m();
    },
    get labelStyle() {
      return T();
    },
    set labelStyle(Y) {
      T(Y), m();
    },
    get markerStart() {
      return L();
    },
    set markerStart(Y) {
      L(Y), m();
    },
    get markerEnd() {
      return I();
    },
    set markerEnd(Y) {
      I(Y), m();
    },
    get sourceHandle() {
      return B();
    },
    set sourceHandle(Y) {
      B(Y), m();
    },
    get targetHandle() {
      return S();
    },
    set targetHandle(Y) {
      S(Y), m();
    },
    get sourceX() {
      return M();
    },
    set sourceX(Y) {
      M(Y), m();
    },
    get sourceY() {
      return _();
    },
    set sourceY(Y) {
      _(Y), m();
    },
    get targetX() {
      return E();
    },
    set targetX(Y) {
      E(Y), m();
    },
    get targetY() {
      return D();
    },
    set targetY(Y) {
      D(Y), m();
    },
    get sourcePosition() {
      return z();
    },
    set sourcePosition(Y) {
      z(Y), m();
    },
    get targetPosition() {
      return Z();
    },
    set targetPosition(Y) {
      Z(Y), m();
    },
    get ariaLabel() {
      return W();
    },
    set ariaLabel(Y) {
      W(Y), m();
    },
    get interactionWidth() {
      return q();
    },
    set interactionWidth(Y) {
      q(Y), m();
    },
    get class() {
      return fe();
    },
    set class(Y) {
      fe(Y), m();
    }
  });
  return r(), Ke;
}
re(
  Vf,
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
function Of(e, t) {
  le(t, !1);
  let n = y(t, "onMount", 12, void 0), r = y(t, "onDestroy", 12, void 0);
  return En(() => {
    var o;
    return (o = n()) == null || o(), r();
  }), Oe(), ue({
    get onMount() {
      return n();
    },
    set onMount(o) {
      n(o), m();
    },
    get onDestroy() {
      return r();
    },
    set onDestroy(o) {
      r(o), m();
    }
  });
}
re(Of, { onMount: {}, onDestroy: {} }, [], [], !0);
var Gy = /* @__PURE__ */ we("<defs></defs>");
function Df(e, t) {
  le(t, !1);
  const [n, r] = tt(), o = () => J(i, "$markers", n), { markers: i } = et();
  Oe();
  var s = Gy();
  Bt(s, 5, o, (a) => a.id, (a, l) => {
    Tf(a, dt(() => g(l)));
  }), K(s), H(e, s), ue(), r();
}
re(Df, {}, [], [], !0);
var Uy = /* @__PURE__ */ we('<polyline stroke-linecap="round" stroke-linejoin="round" fill="none" points="-5,-4 0,0 -5,4"></polyline>'), Jy = /* @__PURE__ */ we('<polyline stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), Qy = /* @__PURE__ */ we('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function Tf(e, t) {
  le(t, !1);
  let n = y(t, "id", 12), r = y(t, "type", 12), o = y(t, "width", 12, 12.5), i = y(t, "height", 12, 12.5), s = y(t, "markerUnits", 12, "strokeWidth"), a = y(t, "orient", 12, "auto-start-reverse"), l = y(t, "color", 12, void 0), u = y(t, "strokeWidth", 12, void 0);
  Oe();
  var c = Qy(), d = j(c);
  {
    var f = (p) => {
      var b = Uy();
      Se(() => {
        se(b, "stroke", l()), se(b, "stroke-width", u());
      }), H(p, b);
    }, h = (p) => {
      var b = Je(), x = ye(b);
      {
        var k = (v) => {
          var $ = Jy();
          Se(() => {
            se($, "stroke", l()), se($, "stroke-width", u()), se($, "fill", l());
          }), H(v, $);
        };
        Ce(
          x,
          (v) => {
            r() === Ro.ArrowClosed && v(k);
          },
          !0
        );
      }
      H(p, b);
    };
    Ce(d, (p) => {
      r() === Ro.Arrow ? p(f) : p(h, !1);
    });
  }
  return K(c), Se(() => {
    se(c, "id", n()), se(c, "markerWidth", `${o()}`), se(c, "markerHeight", `${i()}`), se(c, "markerUnits", s()), se(c, "orient", a());
  }), H(e, c), ue({
    get id() {
      return n();
    },
    set id(p) {
      n(p), m();
    },
    get type() {
      return r();
    },
    set type(p) {
      r(p), m();
    },
    get width() {
      return o();
    },
    set width(p) {
      o(p), m();
    },
    get height() {
      return i();
    },
    set height(p) {
      i(p), m();
    },
    get markerUnits() {
      return s();
    },
    set markerUnits(p) {
      s(p), m();
    },
    get orient() {
      return a();
    },
    set orient(p) {
      a(p), m();
    },
    get color() {
      return l();
    },
    set color(p) {
      l(p), m();
    },
    get strokeWidth() {
      return u();
    },
    set strokeWidth(p) {
      u(p), m();
    }
  });
}
re(
  Tf,
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
var ew = /* @__PURE__ */ ne('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!> <!></div>');
function Hf(e, t) {
  le(t, !1);
  const [n, r] = tt(), o = () => J(a, "$visibleEdges", n), i = () => J(c, "$elementsSelectable", n);
  let s = y(t, "defaultEdgeOptions", 12);
  const {
    visibleEdges: a,
    edgesInitialized: l,
    edges: { setDefaultOptions: u },
    elementsSelectable: c
  } = et();
  En(() => {
    s() && u(s());
  }), Oe();
  var d = ew(), f = j(d), h = j(f);
  Df(h, {}), K(f);
  var p = A(f, 2);
  Bt(p, 1, o, (v) => v.id, (v, $) => {
    const w = /* @__PURE__ */ pe(() => g($).selectable ?? i()), C = /* @__PURE__ */ pe(() => g($).type || "default");
    Vf(v, {
      get id() {
        return g($).id;
      },
      get source() {
        return g($).source;
      },
      get target() {
        return g($).target;
      },
      get data() {
        return g($).data;
      },
      get style() {
        return g($).style;
      },
      get animated() {
        return g($).animated;
      },
      get selected() {
        return g($).selected;
      },
      get selectable() {
        return g(w);
      },
      get deletable() {
        return g($).deletable;
      },
      get hidden() {
        return g($).hidden;
      },
      get label() {
        return g($).label;
      },
      get labelStyle() {
        return g($).labelStyle;
      },
      get markerStart() {
        return g($).markerStart;
      },
      get markerEnd() {
        return g($).markerEnd;
      },
      get sourceHandle() {
        return g($).sourceHandle;
      },
      get targetHandle() {
        return g($).targetHandle;
      },
      get sourceX() {
        return g($).sourceX;
      },
      get sourceY() {
        return g($).sourceY;
      },
      get targetX() {
        return g($).targetX;
      },
      get targetY() {
        return g($).targetY;
      },
      get sourcePosition() {
        return g($).sourcePosition;
      },
      get targetPosition() {
        return g($).targetPosition;
      },
      get ariaLabel() {
        return g($).ariaLabel;
      },
      get interactionWidth() {
        return g($).interactionWidth;
      },
      get class() {
        return g($).class;
      },
      get type() {
        return g(C);
      },
      get zIndex() {
        return g($).zIndex;
      },
      $$events: {
        edgeclick(N) {
          Ie.call(this, t, N);
        },
        edgecontextmenu(N) {
          Ie.call(this, t, N);
        },
        edgemouseenter(N) {
          Ie.call(this, t, N);
        },
        edgemouseleave(N) {
          Ie.call(this, t, N);
        }
      }
    });
  });
  var b = A(p, 2);
  {
    var x = (v) => {
      Of(v, {
        onMount: () => {
          Xi(l, !0);
        },
        onDestroy: () => {
          Xi(l, !1);
        }
      });
    };
    Ce(b, (v) => {
      o().length > 0 && v(x);
    });
  }
  K(d), H(e, d);
  var k = ue({
    get defaultEdgeOptions() {
      return s();
    },
    set defaultEdgeOptions(v) {
      s(v), m();
    }
  });
  return r(), k;
}
re(Hf, { defaultEdgeOptions: {} }, [], [], !0);
var tw = /* @__PURE__ */ ne('<div class="svelte-flow__selection svelte-1iugwpu"></div>');
const nw = {
  hash: "svelte-1iugwpu",
  code: ".svelte-flow__selection.svelte-1iugwpu {position:absolute;top:0;left:0;}"
};
function bl(e, t) {
  le(t, !1), Qe(e, nw);
  let n = y(t, "x", 12, 0), r = y(t, "y", 12, 0), o = y(t, "width", 12, 0), i = y(t, "height", 12, 0), s = y(t, "isVisible", 12, !0);
  var a = Je(), l = ye(a);
  {
    var u = (c) => {
      var d = tw();
      Se(() => {
        it(d, "width", typeof o() == "string" ? o() : `${o()}px`), it(d, "height", typeof i() == "string" ? i() : `${i()}px`), it(d, "transform", `translate(${n()}px, ${r()}px)`);
      }), H(c, d);
    };
    Ce(l, (c) => {
      s() && c(u);
    });
  }
  return H(e, a), ue({
    get x() {
      return n();
    },
    set x(c) {
      n(c), m();
    },
    get y() {
      return r();
    },
    set y(c) {
      r(c), m();
    },
    get width() {
      return o();
    },
    set width(c) {
      o(c), m();
    },
    get height() {
      return i();
    },
    set height(c) {
      i(c), m();
    },
    get isVisible() {
      return s();
    },
    set isVisible(c) {
      s(c), m();
    }
  });
}
re(
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
function zf(e, t) {
  le(t, !1);
  const [n, r] = tt(), o = () => J(s, "$selectionRect", n), i = () => J(a, "$selectionRectMode", n), { selectionRect: s, selectionRectMode: a } = et();
  Oe();
  const l = /* @__PURE__ */ pe(() => !!(o() && i() === "user")), u = /* @__PURE__ */ pe(() => {
    var h;
    return (h = o()) == null ? void 0 : h.width;
  }), c = /* @__PURE__ */ pe(() => {
    var h;
    return (h = o()) == null ? void 0 : h.height;
  }), d = /* @__PURE__ */ pe(() => {
    var h;
    return (h = o()) == null ? void 0 : h.x;
  }), f = /* @__PURE__ */ pe(() => {
    var h;
    return (h = o()) == null ? void 0 : h.y;
  });
  bl(e, {
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
  }), ue(), r();
}
re(zf, {}, [], [], !0);
var rw = /* @__PURE__ */ ne('<div class="selection-wrapper nopan svelte-5pxri" role="button" tabindex="-1"><!></div>');
const ow = {
  hash: "svelte-5pxri",
  code: ".selection-wrapper.svelte-5pxri {position:absolute;top:0;left:0;z-index:7;pointer-events:all;}"
};
function Lf(e, t) {
  le(t, !1), Qe(e, ow);
  const [n, r] = tt(), o = () => J(l, "$selectionRectMode", n), i = () => J(c, "$nodeLookup", n), s = () => J(u, "$nodes", n), a = et(), { selectionRectMode: l, nodes: u, nodeLookup: c } = a, d = _s();
  let f = te(null);
  function h(v) {
    const $ = s().filter((w) => w.selected);
    d("selectioncontextmenu", { nodes: $, event: v });
  }
  function p(v) {
    const $ = s().filter((w) => w.selected);
    d("selectionclick", { nodes: $, event: v });
  }
  ae(
    () => (o(), i(), s()),
    () => {
      o() === "nodes" && (U(f, Qo(i(), { filter: (v) => !!v.selected })), s());
    }
  ), gt(), Oe();
  var b = Je(), x = ye(b);
  {
    var k = (v) => {
      var $ = rw(), w = j($);
      bl(w, { width: "100%", height: "100%", x: 0, y: 0 }), K($), vt($, (C, N) => os == null ? void 0 : os(C, N), () => ({
        disabled: !1,
        store: a,
        onDrag: (C, N, V, P) => {
          d("nodedrag", { event: C, targetNode: null, nodes: P });
        },
        onDragStart: (C, N, V, P) => {
          d("nodedragstart", { event: C, targetNode: null, nodes: P });
        },
        onDragStop: (C, N, V, P) => {
          d("nodedragstop", { event: C, targetNode: null, nodes: P });
        }
      })), At(() => Ue("contextmenu", $, h)), At(() => Ue("click", $, p)), At(() => Ue("keyup", $, () => {
      })), Se(() => se($, "style", `width: ${g(f).width ?? ""}px; height: ${g(f).height ?? ""}px; transform: translate(${g(f).x ?? ""}px, ${g(f).y ?? ""}px)`)), H(v, $);
    };
    Ce(x, (v) => {
      o() === "nodes" && g(f) && zn(g(f).x) && zn(g(f).y) && v(k);
    });
  }
  H(e, b), ue(), r();
}
re(Lf, {}, [], [], !0);
function ct(e, t) {
  let { enabled: n = !0, trigger: r, type: o = "keydown" } = t;
  function i(s) {
    const a = Array.isArray(r) ? r : [r], l = {
      alt: s.altKey,
      ctrl: s.ctrlKey,
      shift: s.shiftKey,
      meta: s.metaKey
    };
    for (const u of a) {
      const c = {
        modifier: [],
        preventDefault: !1,
        enabled: !0,
        ...u
      }, { modifier: d, key: f, callback: h, preventDefault: p, enabled: b } = c;
      if (b) {
        if (d.length && !(Array.isArray(d) ? d : [d]).map(
          (x) => typeof x == "string" ? [x] : x
        ).some(
          (x) => x.every((k) => l[k])
        ))
          continue;
        if (s.key === f) {
          p && s.preventDefault();
          const x = {
            node: e,
            trigger: c,
            originalEvent: s
          };
          e.dispatchEvent(new CustomEvent("shortcut", { detail: x })), h == null || h(x);
        }
      }
    }
  }
  return n && e.addEventListener(o, i), {
    update: (s) => {
      const { enabled: a = !0, type: l = "keydown" } = s;
      n && (!a || o !== l) ? e.removeEventListener(o, i) : !n && a && e.addEventListener(l, i), n = a, o = l, r = s.trigger;
    },
    destroy: () => {
      e.removeEventListener(o, i);
    }
  };
}
function If(e, t) {
  le(t, !1);
  let n = y(t, "selectionKey", 12, "Shift"), r = y(t, "multiSelectionKey", 28, () => Qi() ? "Meta" : "Control"), o = y(t, "deleteKey", 12, "Backspace"), i = y(t, "panActivationKey", 12, " "), s = y(t, "zoomActivationKey", 28, () => Qi() ? "Meta" : "Control");
  const {
    selectionKeyPressed: a,
    multiselectionKeyPressed: l,
    deleteKeyPressed: u,
    panActivationKeyPressed: c,
    zoomActivationKeyPressed: d,
    selectionRect: f
  } = et();
  function h(v) {
    return v !== null && typeof v == "object";
  }
  function p(v) {
    return h(v) ? v.modifier || [] : [];
  }
  function b(v) {
    return v == null ? "" : h(v) ? v.key : v;
  }
  function x(v, $) {
    return (Array.isArray(v) ? v : [v]).map((w) => {
      const C = b(w);
      return {
        key: C,
        modifier: p(w),
        enabled: C !== null,
        callback: $
      };
    });
  }
  function k() {
    f.set(null), a.set(!1), l.set(!1), u.set(!1), c.set(!1), d.set(!1);
  }
  return Oe(), Ue("blur", Mt, k), Ue("contextmenu", Mt, k), vt(Mt, (v, $) => ct == null ? void 0 : ct(v, $), () => ({
    trigger: x(n(), () => a.set(!0)),
    type: "keydown"
  })), vt(Mt, (v, $) => ct == null ? void 0 : ct(v, $), () => ({
    trigger: x(n(), () => a.set(!1)),
    type: "keyup"
  })), vt(Mt, (v, $) => ct == null ? void 0 : ct(v, $), () => ({
    trigger: x(r(), () => l.set(!0)),
    type: "keydown"
  })), vt(Mt, (v, $) => ct == null ? void 0 : ct(v, $), () => ({
    trigger: x(r(), () => l.set(!1)),
    type: "keyup"
  })), vt(Mt, (v, $) => ct == null ? void 0 : ct(v, $), () => ({
    trigger: x(o(), (v) => {
      !(v.originalEvent.ctrlKey || v.originalEvent.metaKey || v.originalEvent.shiftKey) && !I2(v.originalEvent) && u.set(!0);
    }),
    type: "keydown"
  })), vt(Mt, (v, $) => ct == null ? void 0 : ct(v, $), () => ({
    trigger: x(o(), () => u.set(!1)),
    type: "keyup"
  })), vt(Mt, (v, $) => ct == null ? void 0 : ct(v, $), () => ({
    trigger: x(i(), () => c.set(!0)),
    type: "keydown"
  })), vt(Mt, (v, $) => ct == null ? void 0 : ct(v, $), () => ({
    trigger: x(i(), () => c.set(!1)),
    type: "keyup"
  })), vt(Mt, (v, $) => ct == null ? void 0 : ct(v, $), () => ({
    trigger: x(s(), () => d.set(!0)),
    type: "keydown"
  })), vt(Mt, (v, $) => ct == null ? void 0 : ct(v, $), () => ({
    trigger: x(s(), () => d.set(!1)),
    type: "keyup"
  })), ue({
    get selectionKey() {
      return n();
    },
    set selectionKey(v) {
      n(v), m();
    },
    get multiSelectionKey() {
      return r();
    },
    set multiSelectionKey(v) {
      r(v), m();
    },
    get deleteKey() {
      return o();
    },
    set deleteKey(v) {
      o(v), m();
    },
    get panActivationKey() {
      return i();
    },
    set panActivationKey(v) {
      i(v), m();
    },
    get zoomActivationKey() {
      return s();
    },
    set zoomActivationKey(v) {
      s(v), m();
    }
  });
}
re(
  If,
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
var iw = /* @__PURE__ */ we('<path fill="none" class="svelte-flow__connection-path"></path>'), sw = /* @__PURE__ */ we('<svg class="svelte-flow__connectionline"><g><!><!></g></svg>');
function Af(e, t) {
  le(t, !1);
  const [n, r] = tt(), o = () => J(h, "$connection", n), i = () => J(p, "$connectionLineType", n), s = () => J(d, "$width", n), a = () => J(f, "$height", n);
  let l = y(t, "containerStyle", 12, ""), u = y(t, "style", 12, ""), c = y(t, "isCustomComponent", 12, !1);
  const {
    width: d,
    height: f,
    connection: h,
    connectionLineType: p
  } = et();
  let b = te(null);
  ae(
    () => (o(), G(c()), i(), g(b), Ma),
    () => {
      if (o().inProgress && !c()) {
        const { from: w, to: C, fromPosition: N, toPosition: V } = o(), P = {
          sourceX: w.x,
          sourceY: w.y,
          sourcePosition: N,
          targetX: C.x,
          targetY: C.y,
          targetPosition: V
        };
        switch (i()) {
          case jr.Bezier:
            ((O) => U(b, O[0]))(tf(P));
            break;
          case jr.Step:
            ((O) => U(b, O[0]))(es({ ...P, borderRadius: 0 }));
            break;
          case jr.SmoothStep:
            ((O) => U(b, O[0]))(es(P));
            break;
          default:
            ((O) => U(b, O[0]))(Ma(P));
        }
      }
    }
  ), gt(), Oe();
  var x = Je(), k = ye(x);
  {
    var v = (w) => {
      var C = sw(), N = j(C), V = j(N);
      mt(V, t, "connectionLine", {});
      var P = A(V);
      {
        var O = (T) => {
          var L = iw();
          Se(() => {
            se(L, "d", g(b)), se(L, "style", u());
          }), H(T, L);
        };
        Ce(P, (T) => {
          c() || T(O);
        });
      }
      K(N), K(C), Se(
        (T) => {
          se(C, "width", s()), se(C, "height", a()), se(C, "style", l()), Vr(N, Sn(T));
        },
        [
          () => Et([
            "svelte-flow__connection",
            P2(o().isValid)
          ])
        ],
        pe
      ), H(w, C);
    };
    Ce(k, (w) => {
      o().inProgress && w(v);
    });
  }
  H(e, x);
  var $ = ue({
    get containerStyle() {
      return l();
    },
    set containerStyle(w) {
      l(w), m();
    },
    get style() {
      return u();
    },
    set style(w) {
      u(w), m();
    },
    get isCustomComponent() {
      return c();
    },
    set isCustomComponent(w) {
      c(w), m();
    }
  });
  return r(), $;
}
re(
  Af,
  {
    containerStyle: {},
    style: {},
    isCustomComponent: {}
  },
  ["connectionLine"],
  [],
  !0
);
var aw = /* @__PURE__ */ ne("<div><!></div>");
function Ds(e, t) {
  const n = nt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = nt(n, ["position", "style", "class"]);
  le(t, !1);
  const [o, i] = tt(), s = () => J(d, "$selectionRectMode", o), a = te();
  let l = y(t, "position", 12, "top-right"), u = y(t, "style", 12, void 0), c = y(t, "class", 12, void 0);
  const { selectionRectMode: d } = et();
  ae(() => G(l()), () => {
    U(a, `${l()}`.split("-"));
  }), gt(), Oe();
  var f = aw();
  let h;
  var p = j(f);
  mt(p, t, "default", {}), K(f), Se(
    (x) => {
      h = dn(f, h, {
        class: x,
        style: u(),
        ...r
      }), it(f, "pointer-events", s() ? "none" : "");
    },
    [
      () => Et([
        "svelte-flow__panel",
        c(),
        ...g(a)
      ])
    ],
    pe
  ), H(e, f);
  var b = ue({
    get position() {
      return l();
    },
    set position(x) {
      l(x), m();
    },
    get style() {
      return u();
    },
    set style(x) {
      u(x), m();
    },
    get class() {
      return c();
    },
    set class(x) {
      c(x), m();
    }
  });
  return i(), b;
}
re(Ds, { position: {}, style: {}, class: {} }, ["default"], [], !0);
var lw = /* @__PURE__ */ ne('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function Rf(e, t) {
  le(t, !1);
  let n = y(t, "proOptions", 12, void 0), r = y(t, "position", 12, "bottom-right");
  Oe();
  var o = Je(), i = ye(o);
  {
    var s = (a) => {
      Ds(a, {
        get position() {
          return r();
        },
        class: "svelte-flow__attribution",
        "data-message": "Feel free to remove the attribution or check out how you could support us: https://svelteflow.dev/support-us",
        children: (l, u) => {
          var c = lw();
          H(l, c);
        },
        $$slots: { default: !0 }
      });
    };
    Ce(i, (a) => {
      var l;
      (l = n()) != null && l.hideAttribution || a(s);
    });
  }
  return H(e, o), ue({
    get proOptions() {
      return n();
    },
    set proOptions(a) {
      n(a), m();
    },
    get position() {
      return r();
    },
    set position(a) {
      r(a), m();
    }
  });
}
re(Rf, { proOptions: {}, position: {} }, [], [], !0);
function Hu(e, { nodeTypes: t, edgeTypes: n, minZoom: r, maxZoom: o, translateExtent: i, paneClickDistance: s }) {
  t !== void 0 && e.setNodeTypes(t), n !== void 0 && e.setEdgeTypes(n), r !== void 0 && e.setMinZoom(r), o !== void 0 && e.setMaxZoom(o), i !== void 0 && e.setTranslateExtent(i), s !== void 0 && e.setPaneClickDistance(s);
}
const uw = (e) => Object.keys(e);
function zu(e, t) {
  uw(t).forEach((n) => {
    const r = t[n];
    r !== void 0 && e[n].set(r);
  });
}
function cw() {
  return typeof window > "u" || !window.matchMedia ? null : window.matchMedia("(prefers-color-scheme: dark)");
}
function dw(e = "light") {
  return Wt("light", (t) => {
    if (e !== "system") {
      t(e);
      return;
    }
    const n = cw(), r = () => t(n != null && n.matches ? "dark" : "light");
    return t(n != null && n.matches ? "dark" : "light"), n == null || n.addEventListener("change", r), () => {
      n == null || n.removeEventListener("change", r);
    };
  });
}
var fw = /* @__PURE__ */ ne('<!> <!> <div class="svelte-flow__edgelabel-renderer"></div> <div class="svelte-flow__viewport-portal"></div> <!> <!>', 1), hw = /* @__PURE__ */ ne("<!> <!>", 1), gw = /* @__PURE__ */ ne("<div><!> <!> <!> <!></div>");
const pw = {
  hash: "svelte-12wlba6",
  code: ".svelte-flow.svelte-12wlba6 {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;background-color:var(--background-color, var(--background-color-default));}:root {--background-color-default: #fff;--background-pattern-color-default: #ddd;--minimap-mask-color-default: rgb(240, 240, 240, 0.6);--minimap-mask-stroke-color-default: none;--minimap-mask-stroke-width-default: 1;--controls-button-background-color-default: #fefefe;--controls-button-background-color-hover-default: #f4f4f4;--controls-button-color-default: inherit;--controls-button-color-hover-default: inherit;--controls-button-border-color-default: #eee;}"
};
function Zf(e, t) {
  const n = Hp(t), r = nt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), o = nt(r, [
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
  le(t, !1), Qe(e, pw);
  const [i, s] = tt(), a = () => J($(), "$viewport", i), l = () => J(As, "$initialized", i), u = () => J(g(c), "$colorModeClass", i), c = te();
  let d = y(t, "id", 12, "1"), f = y(t, "nodes", 12), h = y(t, "edges", 12), p = y(t, "fitView", 12, void 0), b = y(t, "fitViewOptions", 12, void 0), x = y(t, "minZoom", 12, void 0), k = y(t, "maxZoom", 12, void 0), v = y(t, "initialViewport", 12, void 0), $ = y(t, "viewport", 12, void 0), w = y(t, "nodeTypes", 12, void 0), C = y(t, "edgeTypes", 12, void 0), N = y(t, "selectionKey", 12, void 0), V = y(t, "selectionMode", 12, void 0), P = y(t, "panActivationKey", 12, void 0), O = y(t, "multiSelectionKey", 12, void 0), T = y(t, "zoomActivationKey", 12, void 0), L = y(t, "nodesDraggable", 12, void 0), I = y(t, "nodesConnectable", 12, void 0), B = y(t, "nodeDragThreshold", 12, void 0), S = y(t, "elementsSelectable", 12, void 0), M = y(t, "snapGrid", 12, void 0), _ = y(t, "deleteKey", 12, void 0), E = y(t, "connectionRadius", 12, void 0), D = y(t, "connectionLineType", 12, void 0), z = y(t, "connectionMode", 28, () => Cr.Strict), Z = y(t, "connectionLineStyle", 12, ""), W = y(t, "connectionLineContainerStyle", 12, ""), q = y(t, "onMoveStart", 12, void 0), fe = y(t, "onMove", 12, void 0), Q = y(t, "onMoveEnd", 12, void 0), X = y(t, "isValidConnection", 12, void 0), de = y(t, "translateExtent", 12, void 0), be = y(t, "nodeExtent", 12, void 0), xe = y(t, "onlyRenderVisibleElements", 12, void 0), ve = y(t, "panOnScrollMode", 28, () => sr.Free), oe = y(t, "preventScrolling", 12, !0), ce = y(t, "zoomOnScroll", 12, !0), Ae = y(t, "zoomOnDoubleClick", 12, !0), Fe = y(t, "zoomOnPinch", 12, !0), Ze = y(t, "panOnScroll", 12, !1), Ke = y(t, "panOnDrag", 12, !0), Y = y(t, "selectionOnDrag", 12, void 0), he = y(t, "autoPanOnConnect", 12, !0), ge = y(t, "autoPanOnNodeDrag", 12, !0), Ee = y(t, "onerror", 12, void 0), st = y(t, "ondelete", 12, void 0), Te = y(t, "onedgecreate", 12, void 0), Ye = y(t, "attributionPosition", 12, void 0), We = y(t, "proOptions", 12, void 0), ot = y(t, "defaultEdgeOptions", 12, void 0), pt = y(t, "width", 12, void 0), ee = y(t, "height", 12, void 0), Ve = y(t, "colorMode", 12, "light"), ie = y(t, "onconnect", 12, void 0), Mn = y(t, "onconnectstart", 12, void 0), en = y(t, "onconnectend", 12, void 0), Ne = y(t, "onbeforedelete", 12, void 0), ut = y(t, "oninit", 12, void 0), $e = y(t, "nodeOrigin", 12, void 0), He = y(t, "paneClickDistance", 12, 0), at = y(t, "nodeClickDistance", 12, 0), Yt = y(t, "defaultMarkerColor", 12, "#b1b1b7"), Dr = y(t, "style", 12, void 0), vo = y(t, "class", 12, void 0), zt = te(), Nt = te(), pn = te();
  const tn = a() || v(), ht = pp(Os) ? et() : Iy({
    nodes: F(f()),
    edges: F(h()),
    width: pt(),
    height: ee(),
    fitView: p(),
    nodeOrigin: $e(),
    nodeExtent: be()
  });
  En(() => (ht.width.set(g(Nt)), ht.height.set(g(pn)), ht.domNode.set(g(zt)), ht.syncNodeStores(f()), ht.syncEdgeStores(h()), ht.syncViewport($()), p() !== void 0 && ht.fitViewOnInit.set(p()), b() && ht.fitViewOptions.set(b()), Hu(ht, {
    nodeTypes: w(),
    edgeTypes: C(),
    minZoom: x(),
    maxZoom: k(),
    translateExtent: de(),
    paneClickDistance: He()
  }), () => {
    ht.reset();
  }));
  const { initialized: As } = ht;
  let pr = te(!1);
  ae(
    () => (g(Nt), g(pn)),
    () => {
      g(Nt) !== void 0 && g(pn) !== void 0 && (ht.width.set(g(Nt)), ht.height.set(g(pn)));
    }
  ), ae(
    () => (g(pr), l(), G(ut())),
    () => {
      var R;
      !g(pr) && l() && ((R = ut()) == null || R(), U(pr, !0));
    }
  ), ae(
    () => (G(d()), G(D()), G(E()), G(V()), G(M()), G(Yt()), G(L()), G(I()), G(S()), G(xe()), G(X()), G(he()), G(ge()), G(Ee()), G(st()), G(Te()), G(z()), G(B()), G(ie()), G(Mn()), G(en()), G(Ne()), G($e()), zu),
    () => {
      const R = {
        flowId: d(),
        connectionLineType: D(),
        connectionRadius: E(),
        selectionMode: V(),
        snapGrid: M(),
        defaultMarkerColor: Yt(),
        nodesDraggable: L(),
        nodesConnectable: I(),
        elementsSelectable: S(),
        onlyRenderVisibleElements: xe(),
        isValidConnection: X(),
        autoPanOnConnect: he(),
        autoPanOnNodeDrag: ge(),
        onerror: Ee(),
        ondelete: st(),
        onedgecreate: Te(),
        connectionMode: z(),
        nodeDragThreshold: B(),
        onconnect: ie(),
        onconnectstart: Mn(),
        onconnectend: en(),
        onbeforedelete: Ne(),
        nodeOrigin: $e()
      };
      zu(ht, R);
    }
  ), ae(
    () => (G(w()), G(C()), G(x()), G(k()), G(de()), G(He())),
    () => {
      Hu(ht, {
        nodeTypes: w(),
        edgeTypes: C(),
        minZoom: x(),
        maxZoom: k(),
        translateExtent: de(),
        paneClickDistance: He()
      });
    }
  ), ae(
    () => G(Ve()),
    () => {
      Xp(U(c, dw(Ve())), "$colorModeClass", i);
    }
  ), gt(), Oe();
  var nn = gw();
  let si;
  var ai = j(nn);
  If(ai, {
    get selectionKey() {
      return N();
    },
    get deleteKey() {
      return _();
    },
    get panActivationKey() {
      return P();
    },
    get multiSelectionKey() {
      return O();
    },
    get zoomActivationKey() {
      return T();
    }
  });
  var li = A(ai, 2);
  const Hh = /* @__PURE__ */ pe(() => ve() === void 0 ? sr.Free : ve()), zh = /* @__PURE__ */ pe(() => oe() === void 0 ? !0 : oe()), Lh = /* @__PURE__ */ pe(() => ce() === void 0 ? !0 : ce()), Ih = /* @__PURE__ */ pe(() => Ae() === void 0 ? !0 : Ae()), Ah = /* @__PURE__ */ pe(() => Fe() === void 0 ? !0 : Fe()), Rh = /* @__PURE__ */ pe(() => Ze() === void 0 ? !1 : Ze()), Zh = /* @__PURE__ */ pe(() => Ke() === void 0 ? !0 : Ke()), Bh = /* @__PURE__ */ pe(() => He() === void 0 ? 0 : He());
  Sf(li, {
    initialViewport: tn,
    get onMoveStart() {
      return q();
    },
    get onMove() {
      return fe();
    },
    get onMoveEnd() {
      return Q();
    },
    get panOnScrollMode() {
      return g(Hh);
    },
    get preventScrolling() {
      return g(zh);
    },
    get zoomOnScroll() {
      return g(Lh);
    },
    get zoomOnDoubleClick() {
      return g(Ih);
    },
    get zoomOnPinch() {
      return g(Ah);
    },
    get panOnScroll() {
      return g(Rh);
    },
    get panOnDrag() {
      return g(Zh);
    },
    get paneClickDistance() {
      return g(Bh);
    },
    children: (R, $5) => {
      const Yh = /* @__PURE__ */ pe(() => Ke() === void 0 ? !0 : Ke());
      Ef(R, {
        get panOnDrag() {
          return g(Yh);
        },
        get selectionOnDrag() {
          return Y();
        },
        $$events: {
          paneclick(mo) {
            Ie.call(this, t, mo);
          },
          panecontextmenu(mo) {
            Ie.call(this, t, mo);
          }
        },
        children: (mo, _5) => {
          var El = hw(), Nl = ye(El);
          Nf(Nl, {
            children: (jh, C5) => {
              var Pl = fw(), Ml = ye(Pl);
              Hf(Ml, {
                get defaultEdgeOptions() {
                  return ot();
                },
                $$events: {
                  edgeclick(ze) {
                    Ie.call(this, t, ze);
                  },
                  edgecontextmenu(ze) {
                    Ie.call(this, t, ze);
                  },
                  edgemouseenter(ze) {
                    Ie.call(this, t, ze);
                  },
                  edgemouseleave(ze) {
                    Ie.call(this, t, ze);
                  }
                }
              });
              var Vl = A(Ml, 2);
              Af(Vl, {
                get containerStyle() {
                  return W();
                },
                get style() {
                  return Z();
                },
                isCustomComponent: n.connectionLine,
                $$slots: {
                  connectionLine: (ze, k5) => {
                    var Dl = Je(), qh = ye(Dl);
                    mt(qh, t, "connectionLine", {}), H(ze, Dl);
                  }
                }
              });
              var Ol = A(Vl, 6);
              Mf(Ol, {
                get nodeClickDistance() {
                  return at();
                },
                $$events: {
                  nodeclick(ze) {
                    Ie.call(this, t, ze);
                  },
                  nodemouseenter(ze) {
                    Ie.call(this, t, ze);
                  },
                  nodemousemove(ze) {
                    Ie.call(this, t, ze);
                  },
                  nodemouseleave(ze) {
                    Ie.call(this, t, ze);
                  },
                  nodedragstart(ze) {
                    Ie.call(this, t, ze);
                  },
                  nodedrag(ze) {
                    Ie.call(this, t, ze);
                  },
                  nodedragstop(ze) {
                    Ie.call(this, t, ze);
                  },
                  nodecontextmenu(ze) {
                    Ie.call(this, t, ze);
                  }
                }
              });
              var Fh = A(Ol, 2);
              Lf(Fh, {
                $$events: {
                  selectionclick(ze) {
                    Ie.call(this, t, ze);
                  },
                  selectioncontextmenu(ze) {
                    Ie.call(this, t, ze);
                  },
                  nodedragstart(ze) {
                    Ie.call(this, t, ze);
                  },
                  nodedrag(ze) {
                    Ie.call(this, t, ze);
                  },
                  nodedragstop(ze) {
                    Ie.call(this, t, ze);
                  }
                }
              }), H(jh, Pl);
            },
            $$slots: { default: !0 }
          });
          var Wh = A(Nl, 2);
          zf(Wh, {}), H(mo, El);
        },
        $$slots: { default: !0 }
      });
    },
    $$slots: { default: !0 }
  });
  var Sl = A(li, 2);
  Rf(Sl, {
    get proOptions() {
      return We();
    },
    get position() {
      return Ye();
    }
  });
  var Xh = A(Sl, 2);
  mt(Xh, t, "default", {}), K(nn), Yn(nn, (R) => U(zt, R), () => g(zt)), Se(
    (R) => si = dn(
      nn,
      si,
      {
        style: Dr(),
        class: R,
        "data-testid": "svelte-flow__wrapper",
        ...o,
        role: "application"
      },
      "svelte-12wlba6"
    ),
    [
      () => Et([
        "svelte-flow",
        vo(),
        u()
      ])
    ],
    pe
  ), Fl(nn, "clientWidth", (R) => U(Nt, R)), Fl(nn, "clientHeight", (R) => U(pn, R)), Ue("dragover", nn, function(R) {
    Ie.call(this, t, R);
  }), Ue("drop", nn, function(R) {
    Ie.call(this, t, R);
  }), H(e, nn);
  var Kh = ue({
    get id() {
      return d();
    },
    set id(R) {
      d(R), m();
    },
    get nodes() {
      return f();
    },
    set nodes(R) {
      f(R), m();
    },
    get edges() {
      return h();
    },
    set edges(R) {
      h(R), m();
    },
    get fitView() {
      return p();
    },
    set fitView(R) {
      p(R), m();
    },
    get fitViewOptions() {
      return b();
    },
    set fitViewOptions(R) {
      b(R), m();
    },
    get minZoom() {
      return x();
    },
    set minZoom(R) {
      x(R), m();
    },
    get maxZoom() {
      return k();
    },
    set maxZoom(R) {
      k(R), m();
    },
    get initialViewport() {
      return v();
    },
    set initialViewport(R) {
      v(R), m();
    },
    get viewport() {
      return $();
    },
    set viewport(R) {
      $(R), m();
    },
    get nodeTypes() {
      return w();
    },
    set nodeTypes(R) {
      w(R), m();
    },
    get edgeTypes() {
      return C();
    },
    set edgeTypes(R) {
      C(R), m();
    },
    get selectionKey() {
      return N();
    },
    set selectionKey(R) {
      N(R), m();
    },
    get selectionMode() {
      return V();
    },
    set selectionMode(R) {
      V(R), m();
    },
    get panActivationKey() {
      return P();
    },
    set panActivationKey(R) {
      P(R), m();
    },
    get multiSelectionKey() {
      return O();
    },
    set multiSelectionKey(R) {
      O(R), m();
    },
    get zoomActivationKey() {
      return T();
    },
    set zoomActivationKey(R) {
      T(R), m();
    },
    get nodesDraggable() {
      return L();
    },
    set nodesDraggable(R) {
      L(R), m();
    },
    get nodesConnectable() {
      return I();
    },
    set nodesConnectable(R) {
      I(R), m();
    },
    get nodeDragThreshold() {
      return B();
    },
    set nodeDragThreshold(R) {
      B(R), m();
    },
    get elementsSelectable() {
      return S();
    },
    set elementsSelectable(R) {
      S(R), m();
    },
    get snapGrid() {
      return M();
    },
    set snapGrid(R) {
      M(R), m();
    },
    get deleteKey() {
      return _();
    },
    set deleteKey(R) {
      _(R), m();
    },
    get connectionRadius() {
      return E();
    },
    set connectionRadius(R) {
      E(R), m();
    },
    get connectionLineType() {
      return D();
    },
    set connectionLineType(R) {
      D(R), m();
    },
    get connectionMode() {
      return z();
    },
    set connectionMode(R) {
      z(R), m();
    },
    get connectionLineStyle() {
      return Z();
    },
    set connectionLineStyle(R) {
      Z(R), m();
    },
    get connectionLineContainerStyle() {
      return W();
    },
    set connectionLineContainerStyle(R) {
      W(R), m();
    },
    get onMoveStart() {
      return q();
    },
    set onMoveStart(R) {
      q(R), m();
    },
    get onMove() {
      return fe();
    },
    set onMove(R) {
      fe(R), m();
    },
    get onMoveEnd() {
      return Q();
    },
    set onMoveEnd(R) {
      Q(R), m();
    },
    get isValidConnection() {
      return X();
    },
    set isValidConnection(R) {
      X(R), m();
    },
    get translateExtent() {
      return de();
    },
    set translateExtent(R) {
      de(R), m();
    },
    get nodeExtent() {
      return be();
    },
    set nodeExtent(R) {
      be(R), m();
    },
    get onlyRenderVisibleElements() {
      return xe();
    },
    set onlyRenderVisibleElements(R) {
      xe(R), m();
    },
    get panOnScrollMode() {
      return ve();
    },
    set panOnScrollMode(R) {
      ve(R), m();
    },
    get preventScrolling() {
      return oe();
    },
    set preventScrolling(R) {
      oe(R), m();
    },
    get zoomOnScroll() {
      return ce();
    },
    set zoomOnScroll(R) {
      ce(R), m();
    },
    get zoomOnDoubleClick() {
      return Ae();
    },
    set zoomOnDoubleClick(R) {
      Ae(R), m();
    },
    get zoomOnPinch() {
      return Fe();
    },
    set zoomOnPinch(R) {
      Fe(R), m();
    },
    get panOnScroll() {
      return Ze();
    },
    set panOnScroll(R) {
      Ze(R), m();
    },
    get panOnDrag() {
      return Ke();
    },
    set panOnDrag(R) {
      Ke(R), m();
    },
    get selectionOnDrag() {
      return Y();
    },
    set selectionOnDrag(R) {
      Y(R), m();
    },
    get autoPanOnConnect() {
      return he();
    },
    set autoPanOnConnect(R) {
      he(R), m();
    },
    get autoPanOnNodeDrag() {
      return ge();
    },
    set autoPanOnNodeDrag(R) {
      ge(R), m();
    },
    get onerror() {
      return Ee();
    },
    set onerror(R) {
      Ee(R), m();
    },
    get ondelete() {
      return st();
    },
    set ondelete(R) {
      st(R), m();
    },
    get onedgecreate() {
      return Te();
    },
    set onedgecreate(R) {
      Te(R), m();
    },
    get attributionPosition() {
      return Ye();
    },
    set attributionPosition(R) {
      Ye(R), m();
    },
    get proOptions() {
      return We();
    },
    set proOptions(R) {
      We(R), m();
    },
    get defaultEdgeOptions() {
      return ot();
    },
    set defaultEdgeOptions(R) {
      ot(R), m();
    },
    get width() {
      return pt();
    },
    set width(R) {
      pt(R), m();
    },
    get height() {
      return ee();
    },
    set height(R) {
      ee(R), m();
    },
    get colorMode() {
      return Ve();
    },
    set colorMode(R) {
      Ve(R), m();
    },
    get onconnect() {
      return ie();
    },
    set onconnect(R) {
      ie(R), m();
    },
    get onconnectstart() {
      return Mn();
    },
    set onconnectstart(R) {
      Mn(R), m();
    },
    get onconnectend() {
      return en();
    },
    set onconnectend(R) {
      en(R), m();
    },
    get onbeforedelete() {
      return Ne();
    },
    set onbeforedelete(R) {
      Ne(R), m();
    },
    get oninit() {
      return ut();
    },
    set oninit(R) {
      ut(R), m();
    },
    get nodeOrigin() {
      return $e();
    },
    set nodeOrigin(R) {
      $e(R), m();
    },
    get paneClickDistance() {
      return He();
    },
    set paneClickDistance(R) {
      He(R), m();
    },
    get nodeClickDistance() {
      return at();
    },
    set nodeClickDistance(R) {
      at(R), m();
    },
    get defaultMarkerColor() {
      return Yt();
    },
    set defaultMarkerColor(R) {
      Yt(R), m();
    },
    get style() {
      return Dr();
    },
    set style(R) {
      Dr(R), m();
    },
    get class() {
      return vo();
    },
    set class(R) {
      vo(R), m();
    }
  });
  return s(), Kh;
}
re(
  Zf,
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
function Bf(e, t) {
  le(t, !1);
  let n = y(t, "initialNodes", 12, void 0), r = y(t, "initialEdges", 12, void 0), o = y(t, "initialWidth", 12, void 0), i = y(t, "initialHeight", 12, void 0), s = y(t, "fitView", 12, void 0), a = y(t, "nodeOrigin", 12, void 0);
  const l = kf({
    nodes: n(),
    edges: r(),
    width: o(),
    height: i(),
    nodeOrigin: a(),
    fitView: s()
  });
  Qr(Os, { getStore: () => l }), il(() => {
    l.reset();
  }), Oe();
  var u = Je(), c = ye(u);
  return mt(c, t, "default", {}), H(e, u), ue({
    get initialNodes() {
      return n();
    },
    set initialNodes(d) {
      n(d), m();
    },
    get initialEdges() {
      return r();
    },
    set initialEdges(d) {
      r(d), m();
    },
    get initialWidth() {
      return o();
    },
    set initialWidth(d) {
      o(d), m();
    },
    get initialHeight() {
      return i();
    },
    set initialHeight(d) {
      i(d), m();
    },
    get fitView() {
      return s();
    },
    set fitView(d) {
      s(d), m();
    },
    get nodeOrigin() {
      return a();
    },
    set nodeOrigin(d) {
      a(d), m();
    }
  });
}
re(
  Bf,
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
var vw = /* @__PURE__ */ ne("<button><!></button>");
function ko(e, t) {
  const n = nt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = nt(n, [
    "class",
    "bgColor",
    "bgColorHover",
    "color",
    "colorHover",
    "borderColor"
  ]);
  le(t, !1);
  let o = y(t, "class", 12, void 0), i = y(t, "bgColor", 12, void 0), s = y(t, "bgColorHover", 12, void 0), a = y(t, "color", 12, void 0), l = y(t, "colorHover", 12, void 0), u = y(t, "borderColor", 12, void 0);
  Oe();
  var c = vw();
  let d;
  var f = j(c);
  return mt(f, t, "default", { class: "button-svg" }), K(c), Se(
    (h) => {
      d = dn(c, d, { type: "button", class: h, ...r }), it(c, "--xy-controls-button-background-color-props", i()), it(c, "--xy-controls-button-background-color-hover-props", s()), it(c, "--xy-controls-button-color-props", a()), it(c, "--xy-controls-button-color-hover-props", l()), it(c, "--xy-controls-button-border-color-props", u());
    },
    [
      () => Et([
        "svelte-flow__controls-button",
        o()
      ])
    ],
    pe
  ), Ue("click", c, function(h) {
    Ie.call(this, t, h);
  }), H(e, c), ue({
    get class() {
      return o();
    },
    set class(h) {
      o(h), m();
    },
    get bgColor() {
      return i();
    },
    set bgColor(h) {
      i(h), m();
    },
    get bgColorHover() {
      return s();
    },
    set bgColorHover(h) {
      s(h), m();
    },
    get color() {
      return a();
    },
    set color(h) {
      a(h), m();
    },
    get colorHover() {
      return l();
    },
    set colorHover(h) {
      l(h), m();
    },
    get borderColor() {
      return u();
    },
    set borderColor(h) {
      u(h), m();
    }
  });
}
re(
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
var mw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function Xf(e) {
  var t = mw();
  H(e, t);
}
re(Xf, {}, [], [], !0);
var yw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function Kf(e) {
  var t = yw();
  H(e, t);
}
re(Kf, {}, [], [], !0);
var ww = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function Yf(e) {
  var t = ww();
  H(e, t);
}
re(Yf, {}, [], [], !0);
var bw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function Wf(e) {
  var t = bw();
  H(e, t);
}
re(Wf, {}, [], [], !0);
var xw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function jf(e) {
  var t = xw();
  H(e, t);
}
re(jf, {}, [], [], !0);
var $w = /* @__PURE__ */ ne("<!> <!>", 1), _w = /* @__PURE__ */ ne("<!> <!> <!> <!> <!> <!>", 1);
function Ff(e, t) {
  le(t, !1);
  const [n, r] = tt(), o = () => J(D, "$nodesDraggable", n), i = () => J(z, "$nodesConnectable", n), s = () => J(Z, "$elementsSelectable", n), a = () => J(M, "$viewport", n), l = () => J(_, "$minZoom", n), u = () => J(E, "$maxZoom", n), c = te(), d = te(), f = te(), h = te();
  let p = y(t, "position", 12, "bottom-left"), b = y(t, "showZoom", 12, !0), x = y(t, "showFitView", 12, !0), k = y(t, "showLock", 12, !0), v = y(t, "buttonBgColor", 12, void 0), $ = y(t, "buttonBgColorHover", 12, void 0), w = y(t, "buttonColor", 12, void 0), C = y(t, "buttonColorHover", 12, void 0), N = y(t, "buttonBorderColor", 12, void 0), V = y(t, "ariaLabel", 12, void 0), P = y(t, "style", 12, void 0), O = y(t, "orientation", 12, "vertical"), T = y(t, "fitViewOptions", 12, void 0), L = y(t, "class", 12, "");
  const {
    zoomIn: I,
    zoomOut: B,
    fitView: S,
    viewport: M,
    minZoom: _,
    maxZoom: E,
    nodesDraggable: D,
    nodesConnectable: z,
    elementsSelectable: Z
  } = et(), W = {
    bgColor: v(),
    bgColorHover: $(),
    color: w(),
    colorHover: C(),
    borderColor: N()
  }, q = () => {
    I();
  }, fe = () => {
    B();
  }, Q = () => {
    S(T());
  }, X = () => {
    U(c, !g(c)), D.set(g(c)), z.set(g(c)), Z.set(g(c));
  };
  ae(
    () => (o(), i(), s()),
    () => {
      U(c, o() || i() || s());
    }
  ), ae(() => (a(), l()), () => {
    U(d, a().zoom <= l());
  }), ae(() => (a(), u()), () => {
    U(f, a().zoom >= u());
  }), ae(() => G(O()), () => {
    U(h, O() === "horizontal" ? "horizontal" : "vertical");
  }), gt(), Oe();
  const de = /* @__PURE__ */ pe(() => Et([
    "svelte-flow__controls",
    g(h),
    L()
  ])), be = /* @__PURE__ */ pe(() => V() ?? "Svelte Flow controls");
  Ds(e, {
    get class() {
      return g(de);
    },
    get position() {
      return p();
    },
    "data-testid": "svelte-flow__controls",
    get "aria-label"() {
      return g(be);
    },
    get style() {
      return P();
    },
    children: (ve, oe) => {
      var ce = _w(), Ae = ye(ce);
      mt(Ae, t, "before", {});
      var Fe = A(Ae, 2);
      {
        var Ze = (Te) => {
          var Ye = $w(), We = ye(Ye);
          ko(We, dt(
            {
              class: "svelte-flow__controls-zoomin",
              title: "zoom in",
              "aria-label": "zoom in",
              get disabled() {
                return g(f);
              }
            },
            W,
            {
              $$events: { click: q },
              children: (pt, ee) => {
                Xf(pt);
              },
              $$slots: { default: !0 }
            }
          ));
          var ot = A(We, 2);
          ko(ot, dt(
            {
              class: "svelte-flow__controls-zoomout",
              title: "zoom out",
              "aria-label": "zoom out",
              get disabled() {
                return g(d);
              }
            },
            W,
            {
              $$events: { click: fe },
              children: (pt, ee) => {
                Kf(pt);
              },
              $$slots: { default: !0 }
            }
          )), H(Te, Ye);
        };
        Ce(Fe, (Te) => {
          b() && Te(Ze);
        });
      }
      var Ke = A(Fe, 2);
      {
        var Y = (Te) => {
          ko(Te, dt(
            {
              class: "svelte-flow__controls-fitview",
              title: "fit view",
              "aria-label": "fit view"
            },
            W,
            {
              $$events: { click: Q },
              children: (Ye, We) => {
                Yf(Ye);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        Ce(Ke, (Te) => {
          x() && Te(Y);
        });
      }
      var he = A(Ke, 2);
      {
        var ge = (Te) => {
          ko(Te, dt(
            {
              class: "svelte-flow__controls-interactive",
              title: "toggle interactivity",
              "aria-label": "toggle interactivity"
            },
            W,
            {
              $$events: { click: X },
              children: (Ye, We) => {
                var ot = Je(), pt = ye(ot);
                {
                  var ee = (ie) => {
                    jf(ie);
                  }, Ve = (ie) => {
                    Wf(ie);
                  };
                  Ce(pt, (ie) => {
                    g(c) ? ie(ee) : ie(Ve, !1);
                  });
                }
                H(Ye, ot);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        Ce(he, (Te) => {
          k() && Te(ge);
        });
      }
      var Ee = A(he, 2);
      mt(Ee, t, "default", {});
      var st = A(Ee, 2);
      mt(st, t, "after", {}), H(ve, ce);
    },
    $$slots: { default: !0 }
  });
  var xe = ue({
    get position() {
      return p();
    },
    set position(ve) {
      p(ve), m();
    },
    get showZoom() {
      return b();
    },
    set showZoom(ve) {
      b(ve), m();
    },
    get showFitView() {
      return x();
    },
    set showFitView(ve) {
      x(ve), m();
    },
    get showLock() {
      return k();
    },
    set showLock(ve) {
      k(ve), m();
    },
    get buttonBgColor() {
      return v();
    },
    set buttonBgColor(ve) {
      v(ve), m();
    },
    get buttonBgColorHover() {
      return $();
    },
    set buttonBgColorHover(ve) {
      $(ve), m();
    },
    get buttonColor() {
      return w();
    },
    set buttonColor(ve) {
      w(ve), m();
    },
    get buttonColorHover() {
      return C();
    },
    set buttonColorHover(ve) {
      C(ve), m();
    },
    get buttonBorderColor() {
      return N();
    },
    set buttonBorderColor(ve) {
      N(ve), m();
    },
    get ariaLabel() {
      return V();
    },
    set ariaLabel(ve) {
      V(ve), m();
    },
    get style() {
      return P();
    },
    set style(ve) {
      P(ve), m();
    },
    get orientation() {
      return O();
    },
    set orientation(ve) {
      O(ve), m();
    },
    get fitViewOptions() {
      return T();
    },
    set fitViewOptions(ve) {
      T(ve), m();
    },
    get class() {
      return L();
    },
    set class(ve) {
      L(ve), m();
    }
  });
  return r(), xe;
}
re(
  Ff,
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
var ar;
(function(e) {
  e.Lines = "lines", e.Dots = "dots", e.Cross = "cross";
})(ar || (ar = {}));
var Cw = /* @__PURE__ */ we("<circle></circle>");
function qf(e, t) {
  le(t, !1);
  let n = y(t, "radius", 12, 5), r = y(t, "class", 12, "");
  Oe();
  var o = Cw();
  return Se(
    (i) => {
      se(o, "cx", n()), se(o, "cy", n()), se(o, "r", n()), Vr(o, Sn(i));
    },
    [
      () => Et([
        "svelte-flow__background-pattern",
        "dots",
        r()
      ])
    ],
    pe
  ), H(e, o), ue({
    get radius() {
      return n();
    },
    set radius(i) {
      n(i), m();
    },
    get class() {
      return r();
    },
    set class(i) {
      r(i), m();
    }
  });
}
re(qf, { radius: {}, class: {} }, [], [], !0);
var kw = /* @__PURE__ */ we("<path></path>");
function Gf(e, t) {
  le(t, !1);
  let n = y(t, "lineWidth", 12, 1), r = y(t, "dimensions", 12), o = y(t, "variant", 12, void 0), i = y(t, "class", 12, "");
  Oe();
  var s = kw();
  return Se(
    (a) => {
      se(s, "stroke-width", n()), se(s, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), Vr(s, Sn(a));
    },
    [
      () => Et([
        "svelte-flow__background-pattern",
        o(),
        i()
      ])
    ],
    pe
  ), H(e, s), ue({
    get lineWidth() {
      return n();
    },
    set lineWidth(a) {
      n(a), m();
    },
    get dimensions() {
      return r();
    },
    set dimensions(a) {
      r(a), m();
    },
    get variant() {
      return o();
    },
    set variant(a) {
      o(a), m();
    },
    get class() {
      return i();
    },
    set class(a) {
      i(a), m();
    }
  });
}
re(
  Gf,
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
const Sw = {
  [ar.Dots]: 1,
  [ar.Lines]: 1,
  [ar.Cross]: 6
};
var Ew = /* @__PURE__ */ we('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
const Nw = {
  hash: "svelte-1r7pe8d",
  code: ".svelte-flow__background.svelte-1r7pe8d {position:absolute;width:100%;height:100%;top:0;left:0;}"
};
function Uf(e, t) {
  le(t, !1), Qe(e, Nw);
  const [n, r] = tt(), o = () => J(C, "$flowId", n), i = () => J(w, "$viewport", n), s = te(), a = te(), l = te(), u = te(), c = te();
  let d = y(t, "id", 12, void 0), f = y(t, "variant", 28, () => ar.Dots), h = y(t, "gap", 12, 20), p = y(t, "size", 12, 1), b = y(t, "lineWidth", 12, 1), x = y(t, "bgColor", 12, void 0), k = y(t, "patternColor", 12, void 0), v = y(t, "patternClass", 12, void 0), $ = y(t, "class", 12, "");
  const { viewport: w, flowId: C } = et(), N = p() || Sw[f()], V = f() === ar.Dots, P = f() === ar.Cross, O = Array.isArray(h()) ? h() : [h(), h()];
  ae(
    () => (o(), G(d())),
    () => {
      U(s, `background-pattern-${o()}-${d() ? d() : ""}`);
    }
  ), ae(() => i(), () => {
    U(a, [
      O[0] * i().zoom || 1,
      O[1] * i().zoom || 1
    ]);
  }), ae(() => i(), () => {
    U(l, N * i().zoom);
  }), ae(() => (g(l), g(a)), () => {
    U(u, P ? [g(l), g(l)] : g(a));
  }), ae(
    () => (g(l), g(u)),
    () => {
      U(c, V ? [
        g(l) / 2,
        g(l) / 2
      ] : [
        g(u)[0] / 2,
        g(u)[1] / 2
      ]);
    }
  ), gt(), Oe();
  var T = Ew(), L = j(T), I = j(L);
  {
    var B = (E) => {
      const D = /* @__PURE__ */ pe(() => g(l) / 2);
      qf(E, {
        get radius() {
          return g(D);
        },
        get class() {
          return v();
        }
      });
    }, S = (E) => {
      Gf(E, {
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
          return v();
        }
      });
    };
    Ce(I, (E) => {
      V ? E(B) : E(S, !1);
    });
  }
  K(L);
  var M = A(L);
  K(T), Se(
    (E) => {
      Vr(T, Sn(E), "svelte-1r7pe8d"), it(T, "--xy-background-color-props", x()), it(T, "--xy-background-pattern-color-props", k()), se(L, "id", g(s)), se(L, "x", i().x % g(a)[0]), se(L, "y", i().y % g(a)[1]), se(L, "width", g(a)[0]), se(L, "height", g(a)[1]), se(L, "patternTransform", `translate(-${g(c)[0]},-${g(c)[1]})`), se(M, "fill", `url(#${g(s)})`);
    },
    [
      () => Et(["svelte-flow__background", $()])
    ],
    pe
  ), H(e, T);
  var _ = ue({
    get id() {
      return d();
    },
    set id(E) {
      d(E), m();
    },
    get variant() {
      return f();
    },
    set variant(E) {
      f(E), m();
    },
    get gap() {
      return h();
    },
    set gap(E) {
      h(E), m();
    },
    get size() {
      return p();
    },
    set size(E) {
      p(E), m();
    },
    get lineWidth() {
      return b();
    },
    set lineWidth(E) {
      b(E), m();
    },
    get bgColor() {
      return x();
    },
    set bgColor(E) {
      x(E), m();
    },
    get patternColor() {
      return k();
    },
    set patternColor(E) {
      k(E), m();
    },
    get patternClass() {
      return v();
    },
    set patternClass(E) {
      v(E), m();
    },
    get class() {
      return $();
    },
    set class(E) {
      $(E), m();
    }
  });
  return r(), _;
}
re(
  Uf,
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
var Pw = /* @__PURE__ */ we("<rect></rect>");
function Jf(e, t) {
  le(t, !1);
  let n = y(t, "x", 12), r = y(t, "y", 12), o = y(t, "width", 12, 0), i = y(t, "height", 12, 0), s = y(t, "borderRadius", 12, 5), a = y(t, "color", 12, void 0), l = y(t, "shapeRendering", 12), u = y(t, "strokeColor", 12, void 0), c = y(t, "strokeWidth", 12, 2), d = y(t, "selected", 12, !1), f = y(t, "class", 12, "");
  Oe();
  var h = Pw();
  return Se(
    (p) => {
      Vr(h, Sn(p)), se(h, "x", n()), se(h, "y", r()), se(h, "rx", s()), se(h, "ry", s()), se(h, "width", o()), se(h, "height", i()), se(h, "style", `${a() ? `fill: ${a()};` : ""}${u() ? `stroke: ${u()};` : ""}${c() ? `stroke-width: ${c()};` : ""}`), se(h, "shape-rendering", l()), rt(h, "selected", d());
    },
    [
      () => Et(["svelte-flow__minimap-node", f()])
    ],
    pe
  ), H(e, h), ue({
    get x() {
      return n();
    },
    set x(p) {
      n(p), m();
    },
    get y() {
      return r();
    },
    set y(p) {
      r(p), m();
    },
    get width() {
      return o();
    },
    set width(p) {
      o(p), m();
    },
    get height() {
      return i();
    },
    set height(p) {
      i(p), m();
    },
    get borderRadius() {
      return s();
    },
    set borderRadius(p) {
      s(p), m();
    },
    get color() {
      return a();
    },
    set color(p) {
      a(p), m();
    },
    get shapeRendering() {
      return l();
    },
    set shapeRendering(p) {
      l(p), m();
    },
    get strokeColor() {
      return u();
    },
    set strokeColor(p) {
      u(p), m();
    },
    get strokeWidth() {
      return c();
    },
    set strokeWidth(p) {
      c(p), m();
    },
    get selected() {
      return d();
    },
    set selected(p) {
      d(p), m();
    },
    get class() {
      return f();
    },
    set class(p) {
      f(p), m();
    }
  });
}
re(
  Jf,
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
function Lu(e, t) {
  const n = hy({
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
const ta = (e) => e instanceof Function ? e : () => e;
var Mw = /* @__PURE__ */ we("<title> </title>"), Vw = /* @__PURE__ */ we('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>');
function Qf(e, t) {
  le(t, !1);
  const [n, r] = tt(), o = () => J(Ke, "$flowId", n), i = () => J(Ae, "$viewport", n), s = () => J(Fe, "$containerWidth", n), a = () => J(Ze, "$containerHeight", n), l = () => J(ce, "$nodeLookup", n), u = () => J(oe, "$nodes", n), c = () => J(Y, "$panZoom", n), d = () => J(he, "$translateExtent", n), f = te(), h = te(), p = te(), b = te(), x = te(), k = te(), v = te(), $ = te(), w = te(), C = te(), N = te(), V = te(), P = te();
  let O = y(t, "position", 12, "bottom-right"), T = y(t, "ariaLabel", 12, "Mini map"), L = y(t, "nodeStrokeColor", 12, "transparent"), I = y(t, "nodeColor", 12, void 0), B = y(t, "nodeClass", 12, ""), S = y(t, "nodeBorderRadius", 12, 5), M = y(t, "nodeStrokeWidth", 12, 2), _ = y(t, "bgColor", 12, void 0), E = y(t, "maskColor", 12, void 0), D = y(t, "maskStrokeColor", 12, void 0), z = y(t, "maskStrokeWidth", 12, void 0), Z = y(t, "width", 12, void 0), W = y(t, "height", 12, void 0), q = y(t, "pannable", 12, !0), fe = y(t, "zoomable", 12, !0), Q = y(t, "inversePan", 12, void 0), X = y(t, "zoomStep", 12, void 0), de = y(t, "style", 12, ""), be = y(t, "class", 12, "");
  const xe = 200, ve = 150, {
    nodes: oe,
    nodeLookup: ce,
    viewport: Ae,
    width: Fe,
    height: Ze,
    flowId: Ke,
    panZoom: Y,
    translateExtent: he
  } = et(), ge = I() === void 0 ? void 0 : ta(I()), Ee = ta(L()), st = ta(B()), Te = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  ), Ye = `svelte-flow__minimap-desc-${o()}`;
  let We = te(g(f));
  const ot = () => g(k);
  ae(
    () => (i(), s(), a()),
    () => {
      U(f, {
        x: -i().x / i().zoom,
        y: -i().y / i().zoom,
        width: s() / i().zoom,
        height: a() / i().zoom
      });
    }
  ), ae(
    () => (l(), g(f), u()),
    () => {
      U(We, l().size > 0 ? Ud(Qo(l()), g(f)) : g(f)), u();
    }
  ), ae(() => G(Z()), () => {
    U(h, Z() ?? xe);
  }), ae(() => G(W()), () => {
    U(p, W() ?? ve);
  }), ae(
    () => (g(We), g(h)),
    () => {
      U(b, g(We).width / g(h));
    }
  ), ae(
    () => (g(We), g(p)),
    () => {
      U(x, g(We).height / g(p));
    }
  ), ae(
    () => (g(b), g(x)),
    () => {
      U(k, Math.max(g(b), g(x)));
    }
  ), ae(() => (g(k), g(h)), () => {
    U(v, g(k) * g(h));
  }), ae(
    () => (g(k), g(p)),
    () => {
      U($, g(k) * g(p));
    }
  ), ae(() => g(k), () => {
    U(w, 5 * g(k));
  }), ae(
    () => (g(We), g(v), g(w)),
    () => {
      U(C, g(We).x - (g(v) - g(We).width) / 2 - g(w));
    }
  ), ae(
    () => (g(We), g($), g(w)),
    () => {
      U(N, g(We).y - (g($) - g(We).height) / 2 - g(w));
    }
  ), ae(() => (g(v), g(w)), () => {
    U(V, g(v) + g(w) * 2);
  }), ae(() => (g($), g(w)), () => {
    U(P, g($) + g(w) * 2);
  }), gt(), Oe();
  const pt = /* @__PURE__ */ pe(() => de() + (_() ? `;--xy-minimap-background-color-props:${_()}` : "")), ee = /* @__PURE__ */ pe(() => Et(["svelte-flow__minimap", be()]));
  Ds(e, {
    get position() {
      return O();
    },
    get style() {
      return g(pt);
    },
    get class() {
      return g(ee);
    },
    "data-testid": "svelte-flow__minimap",
    children: (ie, Mn) => {
      var en = Je(), Ne = ye(en);
      {
        var ut = ($e) => {
          var He = Vw();
          se(He, "aria-labelledby", Ye);
          var at = j(He);
          {
            var Yt = (zt) => {
              var Nt = Mw();
              se(Nt, "id", Ye);
              var pn = j(Nt, !0);
              K(Nt), Se(() => kn(pn, T())), H(zt, Nt);
            };
            Ce(at, (zt) => {
              T() && zt(Yt);
            });
          }
          var Dr = A(at);
          Bt(Dr, 1, u, (zt) => zt.id, (zt, Nt) => {
            var pn = Je();
            const tn = /* @__PURE__ */ pe(() => l().get(g(Nt).id));
            var ht = ye(pn);
            {
              var As = (pr) => {
                const nn = /* @__PURE__ */ pe(() => hr(g(tn))), si = /* @__PURE__ */ pe(() => ge == null ? void 0 : ge(g(tn))), ai = /* @__PURE__ */ pe(() => Ee(g(tn))), li = /* @__PURE__ */ pe(() => st(g(tn)));
                Jf(pr, dt(
                  {
                    get x() {
                      return g(tn).internals.positionAbsolute.x;
                    },
                    get y() {
                      return g(tn).internals.positionAbsolute.y;
                    }
                  },
                  () => g(nn),
                  {
                    get selected() {
                      return g(tn).selected;
                    },
                    get color() {
                      return g(si);
                    },
                    get borderRadius() {
                      return S();
                    },
                    get strokeColor() {
                      return g(ai);
                    },
                    get strokeWidth() {
                      return M();
                    },
                    shapeRendering: Te,
                    get class() {
                      return g(li);
                    }
                  }
                ));
              };
              Ce(ht, (pr) => {
                g(tn) && Qd(g(tn)) && pr(As);
              });
            }
            H(zt, pn);
          });
          var vo = A(Dr);
          K(He), vt(He, (zt, Nt) => Lu == null ? void 0 : Lu(zt, Nt), () => ({
            panZoom: c(),
            viewport: Ae,
            getViewScale: ot,
            translateExtent: d(),
            width: s(),
            height: a(),
            inversePan: Q(),
            zoomStep: X(),
            pannable: q(),
            zoomable: fe()
          })), Se(() => {
            se(He, "width", g(h)), se(He, "height", g(p)), se(He, "viewBox", `${g(C) ?? ""} ${g(N) ?? ""} ${g(V) ?? ""} ${g(P) ?? ""}`), it(He, "--xy-minimap-mask-background-color-props", E()), it(He, "--xy-minimap-mask-stroke-color-props", D()), it(He, "--xy-minimap-mask-stroke-width-props", z() ? z() * g(k) : void 0), se(vo, "d", `M${g(C) - g(w)},${g(N) - g(w)}h${g(V) + g(w) * 2}v${g(P) + g(w) * 2}h${-g(V) - g(w) * 2}z
      M${g(f).x ?? ""},${g(f).y ?? ""}h${g(f).width ?? ""}v${g(f).height ?? ""}h${-g(f).width}z`);
          }), H($e, He);
        };
        Ce(Ne, ($e) => {
          c() && $e(ut);
        });
      }
      H(ie, en);
    },
    $$slots: { default: !0 }
  });
  var Ve = ue({
    get position() {
      return O();
    },
    set position(ie) {
      O(ie), m();
    },
    get ariaLabel() {
      return T();
    },
    set ariaLabel(ie) {
      T(ie), m();
    },
    get nodeStrokeColor() {
      return L();
    },
    set nodeStrokeColor(ie) {
      L(ie), m();
    },
    get nodeColor() {
      return I();
    },
    set nodeColor(ie) {
      I(ie), m();
    },
    get nodeClass() {
      return B();
    },
    set nodeClass(ie) {
      B(ie), m();
    },
    get nodeBorderRadius() {
      return S();
    },
    set nodeBorderRadius(ie) {
      S(ie), m();
    },
    get nodeStrokeWidth() {
      return M();
    },
    set nodeStrokeWidth(ie) {
      M(ie), m();
    },
    get bgColor() {
      return _();
    },
    set bgColor(ie) {
      _(ie), m();
    },
    get maskColor() {
      return E();
    },
    set maskColor(ie) {
      E(ie), m();
    },
    get maskStrokeColor() {
      return D();
    },
    set maskStrokeColor(ie) {
      D(ie), m();
    },
    get maskStrokeWidth() {
      return z();
    },
    set maskStrokeWidth(ie) {
      z(ie), m();
    },
    get width() {
      return Z();
    },
    set width(ie) {
      Z(ie), m();
    },
    get height() {
      return W();
    },
    set height(ie) {
      W(ie), m();
    },
    get pannable() {
      return q();
    },
    set pannable(ie) {
      q(ie), m();
    },
    get zoomable() {
      return fe();
    },
    set zoomable(ie) {
      fe(ie), m();
    },
    get inversePan() {
      return Q();
    },
    set inversePan(ie) {
      Q(ie), m();
    },
    get zoomStep() {
      return X();
    },
    set zoomStep(ie) {
      X(ie), m();
    },
    get style() {
      return de();
    },
    set style(ie) {
      de(ie), m();
    },
    get class() {
      return be();
    },
    set class(ie) {
      be(ie), m();
    }
  });
  return r(), Ve;
}
re(
  Qf,
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
const Iu = (e) => V2(e);
function Kt() {
  const { zoomIn: e, zoomOut: t, fitView: n, onbeforedelete: r, snapGrid: o, viewport: i, width: s, height: a, minZoom: l, maxZoom: u, panZoom: c, nodes: d, edges: f, domNode: h, nodeLookup: p, nodeOrigin: b, edgeLookup: x, connectionLookup: k } = et(), v = (C) => {
    var N, V;
    const P = F(p), O = Iu(C) ? C : P.get(C.id), T = O.parentId ? H2(O.position, O.measured, O.parentId, P, F(b)) : O.position, L = {
      ...O,
      position: T,
      width: ((N = O.measured) == null ? void 0 : N.width) ?? O.width,
      height: ((V = O.measured) == null ? void 0 : V.height) ?? O.height
    };
    return oo(L);
  }, $ = (C, N, V = { replace: !1 }) => {
    var P;
    const O = (P = F(p).get(C)) == null ? void 0 : P.internals.userNode;
    if (!O)
      return;
    const T = typeof N == "function" ? N(O) : N;
    V.replace ? d.update((L) => L.map((I) => I.id === C ? Iu(T) ? T : { ...I, ...T } : I)) : (Object.assign(O, T), d.update((L) => L));
  }, w = (C) => F(p).get(C);
  return {
    zoomIn: e,
    zoomOut: t,
    getInternalNode: w,
    getNode: (C) => {
      var N;
      return (N = w(C)) == null ? void 0 : N.internals.userNode;
    },
    getNodes: (C) => C === void 0 ? F(d) : Au(F(p), C),
    getEdge: (C) => F(x).get(C),
    getEdges: (C) => C === void 0 ? F(f) : Au(F(x), C),
    setZoom: (C, N) => {
      const V = F(c);
      return V ? V.scaleTo(C, { duration: N == null ? void 0 : N.duration }) : Promise.resolve(!1);
    },
    getZoom: () => F(i).zoom,
    setViewport: async (C, N) => {
      const V = F(i), P = F(c);
      return P ? (await P.setViewport({
        x: C.x ?? V.x,
        y: C.y ?? V.y,
        zoom: C.zoom ?? V.zoom
      }, { duration: N == null ? void 0 : N.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    getViewport: () => F(i),
    setCenter: async (C, N, V) => {
      const P = typeof (V == null ? void 0 : V.zoom) < "u" ? V.zoom : F(u), O = F(c);
      return O ? (await O.setViewport({
        x: F(s) / 2 - C * P,
        y: F(a) / 2 - N * P,
        zoom: P
      }, { duration: V == null ? void 0 : V.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    fitView: n,
    fitBounds: async (C, N) => {
      const V = F(c);
      if (!V)
        return Promise.resolve(!1);
      const P = pl(C, F(s), F(a), F(l), F(u), (N == null ? void 0 : N.padding) ?? 0.1);
      return await V.setViewport(P, { duration: N == null ? void 0 : N.duration }), Promise.resolve(!0);
    },
    getIntersectingNodes: (C, N = !0, V) => {
      const P = bu(C), O = P ? C : v(C);
      return O ? (V || F(d)).filter((T) => {
        const L = F(p).get(T.id);
        if (!L || !P && T.id === C.id)
          return !1;
        const I = oo(L), B = Zo(I, O);
        return N && B > 0 || B >= O.width * O.height;
      }) : [];
    },
    isNodeIntersecting: (C, N, V = !0) => {
      const P = bu(C) ? C : v(C);
      if (!P)
        return !1;
      const O = Zo(P, N);
      return V && O > 0 || O >= P.width * P.height;
    },
    deleteElements: async ({ nodes: C = [], edges: N = [] }) => {
      const { nodes: V, edges: P } = await Fd({
        nodesToRemove: C,
        edgesToRemove: N,
        nodes: F(d),
        edges: F(f),
        onBeforeDelete: F(r)
      });
      return V && d.update((O) => O.filter((T) => !V.some(({ id: L }) => L === T.id))), P && f.update((O) => O.filter((T) => !P.some(({ id: L }) => L === T.id))), {
        deletedNodes: V,
        deletedEdges: P
      };
    },
    screenToFlowPosition: (C, N = { snapToGrid: !0 }) => {
      const V = F(h);
      if (!V)
        return C;
      const P = N.snapToGrid ? F(o) : !1, { x: O, y: T, zoom: L } = F(i), { x: I, y: B } = V.getBoundingClientRect(), S = {
        x: C.x - I,
        y: C.y - B
      };
      return ei(S, [O, T, L], P !== null, P || [1, 1]);
    },
    /**
     *
     * @param position
     * @returns
     */
    flowToScreenPosition: (C) => {
      const N = F(h);
      if (!N)
        return C;
      const { x: V, y: P, zoom: O } = F(i), { x: T, y: L } = N.getBoundingClientRect(), I = Jd(C, [V, P, O]);
      return {
        x: I.x + T,
        y: I.y + L
      };
    },
    toObject: () => ({
      nodes: F(d).map((C) => ({
        ...C,
        // we want to make sure that changes to the nodes object that gets returned by toObject
        // do not affect the nodes object
        position: { ...C.position },
        data: { ...C.data }
      })),
      edges: F(f).map((C) => ({ ...C })),
      viewport: { ...F(i) }
    }),
    updateNode: $,
    updateNodeData: (C, N, V) => {
      var P;
      const O = (P = F(p).get(C)) == null ? void 0 : P.internals.userNode;
      if (!O)
        return;
      const T = typeof N == "function" ? N(O) : N;
      O.data = V != null && V.replace ? T : { ...O.data, ...T }, d.update((L) => L);
    },
    getNodesBounds: (C) => {
      const N = F(p), V = F(b);
      return O2(C, { nodeLookup: N, nodeOrigin: V });
    },
    getHandleConnections: ({ type: C, id: N, nodeId: V }) => {
      var P;
      return Array.from(((P = F(k).get(`${V}-${C}-${N ?? null}`)) == null ? void 0 : P.values()) ?? []);
    },
    viewport: i
  };
}
function Au(e, t) {
  var n;
  const r = [];
  for (const o of t) {
    const i = e.get(o);
    if (i) {
      const s = "internals" in i ? (n = i.internals) == null ? void 0 : n.userNode : i;
      r.push(s);
    }
  }
  return r;
}
var Ow = /* @__PURE__ */ ne('<div class="svelte-flow__node-toolbar"><!></div>');
function eh(e, t) {
  le(t, !1);
  const [n, r] = tt(), o = () => J($, "$nodes", n), i = () => J(v, "$nodeLookup", n), s = () => J(k, "$viewport", n), a = () => J(x, "$domNode", n), l = te(), u = te(), c = te();
  let d = y(t, "nodeId", 12, void 0), f = y(t, "position", 12, void 0), h = y(t, "align", 12, void 0), p = y(t, "offset", 12, void 0), b = y(t, "isVisible", 12, void 0);
  const { domNode: x, viewport: k, nodeLookup: v, nodes: $ } = et(), { getNodesBounds: w } = Kt(), C = xr("svelteflow__node_id");
  let N = te(), V = te([]), P = p() !== void 0 ? p() : 10, O = f() !== void 0 ? f() : _e.Top, T = h() !== void 0 ? h() : "center";
  ae(
    () => (o(), G(d()), i()),
    () => {
      o();
      const M = Array.isArray(d()) ? d() : [d() || C];
      U(V, M.reduce(
        (_, E) => {
          const D = i().get(E);
          return D && _.push(D), _;
        },
        []
      ));
    }
  ), ae(
    () => (g(V), s()),
    () => {
      const M = w(g(V));
      M && U(N, G2(M, s(), O, P, T));
    }
  ), ae(() => g(V), () => {
    U(l, g(V).length === 0 ? 1 : Math.max(...g(V).map((M) => (M.internals.z || 5) + 1)));
  }), ae(() => o(), () => {
    U(u, o().filter((M) => M.selected).length);
  }), ae(
    () => (G(b()), g(V), g(u)),
    () => {
      U(c, typeof b() == "boolean" ? b() : g(V).length === 1 && g(V)[0].selected && g(u) === 1);
    }
  ), gt(), Oe();
  var L = Je(), I = ye(L);
  {
    var B = (M) => {
      var _ = Ow(), E = j(_);
      mt(E, t, "default", {}), K(_), vt(_, (D, z) => ns == null ? void 0 : ns(D, z), () => ({ domNode: a() })), Se(
        (D) => {
          se(_, "data-id", D), it(_, "position", "absolute"), it(_, "transform", g(N)), it(_, "z-index", g(l));
        },
        [
          () => g(V).reduce((D, z) => `${D}${z.id} `, "").trim()
        ],
        pe
      ), H(M, _);
    };
    Ce(I, (M) => {
      a() && g(c) && g(V) && M(B);
    });
  }
  H(e, L);
  var S = ue({
    get nodeId() {
      return d();
    },
    set nodeId(M) {
      d(M), m();
    },
    get position() {
      return f();
    },
    set position(M) {
      f(M), m();
    },
    get align() {
      return h();
    },
    set align(M) {
      h(M), m();
    },
    get offset() {
      return p();
    },
    set offset(M) {
      p(M), m();
    },
    get isVisible() {
      return b();
    },
    set isVisible(M) {
      b(M), m();
    }
  });
  return r(), S;
}
re(
  eh,
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
function Or(e) {
  const { nodes: t, nodeLookup: n } = et();
  let r = [], o = !0;
  return ir([t, n], ([, i], s) => {
    var a;
    const l = [], u = Array.isArray(e), c = u ? e : [e];
    for (const d of c) {
      const f = (a = i.get(d)) == null ? void 0 : a.internals.userNode;
      f && l.push({
        id: f.id,
        type: f.type,
        data: f.data
      });
    }
    (!oy(l, r) || o) && (r = l, s(u ? l : l[0] ?? null), o = !1);
  });
}
const Ru = "tinyflow-component";
class Dw {
  constructor(t) {
    if (Vt(this, "options"), Vt(this, "rootEl"), Vt(this, "svelteFlowInstance"), typeof t.element != "string" && !(t.element instanceof Element))
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
    const t = document.createElement(Ru);
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
    const n = document.createElement(Ru);
    n.style.display = "block", n.style.width = "100%", n.style.height = "100%", n.classList.add("tf-theme-light"), n.options = this.options, n.onInit = (r) => {
      this.svelteFlowInstance = r;
    }, this.destroy(), this.rootEl.appendChild(n);
  }
  destroy() {
    for (; this.rootEl.firstChild; )
      this.rootEl.removeChild(this.rootEl.firstChild);
  }
}
const Tw = () => {
  const e = me([]), t = me([]), n = me({ x: 250, y: 100, zoom: 1 });
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
      e.update((i) => i.map((s) => s.id === r ? o : s));
    },
    updateNodeData: (r, o) => {
      e.update(
        (i) => i.map((s) => s.id === r ? { ...s, data: { ...s.data, ...o } } : s)
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
      t.update((i) => i.map((s) => s.id === r ? o : s));
    },
    updateEdgeData: (r, o) => {
      t.update((i) => i.map((s) => s.id === r ? { ...s, data: o } : s));
    }
  };
}, Pi = Tw();
var Hw = /* @__PURE__ */ ne("<button><!></button>");
function je(e, t) {
  le(t, !0);
  const n = y(t, "children", 7), r = /* @__PURE__ */ St(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "children"
  ]);
  var o = Hw();
  let i;
  var s = j(o);
  return $r(s, () => n() ?? ft), K(o), Se(() => i = dn(o, i, {
    type: "button",
    ...r,
    class: `tf-btn nopan nodrag ${t.class ?? ""}`
  })), H(e, o), ue({
    get children() {
      return n();
    },
    set children(a) {
      n(a), m();
    }
  });
}
re(je, { children: {} }, [], [], !0);
var zw = /* @__PURE__ */ ne("<input>");
function th(e, t) {
  le(t, !0);
  const n = /* @__PURE__ */ St(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = zw();
  fd(r);
  let o;
  Se(() => o = dn(r, o, {
    type: "checkbox",
    ...n,
    class: `tf-checkbox nopan nodrag ${t.class ?? ""}`
  })), H(e, r), ue();
}
re(th, {}, [], [], !0);
var Lw = /* @__PURE__ */ ne("<input>");
function _t(e, t) {
  le(t, !0);
  const n = /* @__PURE__ */ St(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = Lw();
  fd(r);
  let o;
  Se(() => o = dn(r, o, {
    type: "text",
    ...n,
    class: `tf-input  nopan nodrag ${t.class ?? ""}`
  })), H(e, r), ue();
}
re(_t, {}, [], [], !0);
var Iw = /* @__PURE__ */ ne("<textarea></textarea>");
function Ht(e, t) {
  le(t, !0);
  const n = /* @__PURE__ */ St(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = Iw();
  Ep(r);
  let o;
  Se(() => o = dn(r, o, {
    ...n,
    class: `tf-textarea nodrag ${t.class ?? ""}`
  })), H(e, r), ue();
}
re(Ht, {}, [], [], !0);
var Aw = /* @__PURE__ */ ne('<div role="button"><!></div>'), Rw = /* @__PURE__ */ ne("<div></div>");
function nh(e, t) {
  const n = nt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = nt(n, ["items", "onChange", "activeIndex"]);
  le(t, !1);
  let o = y(t, "items", 28, () => []), i = y(t, "onChange", 12, () => {
  }), s = y(t, "activeIndex", 12, 0);
  function a(c, d) {
    var f;
    s(d), (f = i()) == null || f(c, d);
  }
  Oe();
  var l = Rw();
  let u;
  return Bt(l, 5, o, $s, (c, d, f) => {
    var h = Aw();
    se(h, "tabindex", f), h.__click = () => a(g(d), f), h.__keydown = (k) => {
      (k.key === "Enter" || k.key === " ") && (k.preventDefault(), a(g(d), f));
    };
    var p = j(h);
    {
      var b = (k) => {
        var v = Re();
        Se(() => kn(v, g(d).label)), H(k, v);
      }, x = (k) => {
        var v = Je(), $ = ye(v);
        $r($, () => g(d).label ?? ft), H(k, v);
      };
      Ce(p, (k) => {
        typeof g(d).label == "string" ? k(b) : k(x, !1);
      });
    }
    K(h), Se(() => eo(h, `tf-tabs-item ${(f === s() ? "active" : "") ?? ""}`)), H(c, h);
  }), K(l), Se(() => u = dn(l, u, {
    ...r,
    class: `tf-tabs ${r.class ?? ""}`
  })), H(e, l), ue({
    get items() {
      return o();
    },
    set items(c) {
      o(c), m();
    },
    get onChange() {
      return i();
    },
    set onChange(c) {
      i(c), m();
    },
    get activeIndex() {
      return s();
    },
    set activeIndex(c) {
      s(c), m();
    }
  });
}
xs(["click", "keydown"]);
re(nh, { items: {}, onChange: {}, activeIndex: {} }, [], [], !0);
var Zw = (e, t, n) => t(g(n)), Bw = (e, t, n) => {
  (e.key === "Enter" || e.key === " ") && (e.preventDefault(), t(g(n)));
}, Xw = /* @__PURE__ */ ne('<div class="tf-collapse-item-description"><!></div>'), Kw = /* @__PURE__ */ ne('<div class="tf-collapse-item-content"><!></div>'), Yw = /* @__PURE__ */ ne('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><span class="tf-collapse-item-title-icon"><!></span> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), Ww = /* @__PURE__ */ ne("<div></div>");
const jw = {
  hash: "svelte-1jfktzw",
  code: `
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-1jfktzw {transform:rotate(90deg);transition:transform 0.3s ease;}`
};
function rh(e, t) {
  le(t, !0), Qe(e, jw);
  let n = y(t, "items", 7), r = y(t, "onChange", 7), o = y(t, "activeKeys", 31, () => It([]));
  function i(a) {
    var l;
    o().includes(a.key) ? o(o().filter((u) => u !== a.key)) : (o().push(a.key), o(o())), (l = r()) == null || l(a, o());
  }
  var s = Ww();
  return Bt(s, 21, n, $s, (a, l, u) => {
    var c = Yw(), d = j(c);
    se(d, "tabindex", u), d.__click = [Zw, i, l], d.__keydown = [Bw, i, l];
    var f = j(d), h = j(f);
    rr(h, {
      get target() {
        return g(l).icon;
      }
    }), K(f);
    var p = A(f, 2);
    rr(p, {
      get target() {
        return g(l).title;
      }
    });
    var b = A(p, 2);
    K(d);
    var x = A(d, 2);
    {
      var k = (w) => {
        var C = Xw(), N = j(C);
        rr(N, {
          get target() {
            return g(l).description;
          }
        }), K(C), H(w, C);
      };
      Ce(x, (w) => {
        g(l).description && w(k);
      });
    }
    var v = A(x, 2);
    {
      var $ = (w) => {
        var C = Kw(), N = j(C);
        rr(N, {
          get target() {
            return g(l).content;
          }
        }), K(C), H(w, C);
      };
      Ce(v, (w) => {
        o().includes(g(l).key) && w($);
      });
    }
    K(c), Se((w) => eo(b, `tf-collapse-item-title-arrow ${w ?? ""} svelte-1jfktzw`), [
      () => o().includes(g(l).key) ? "rotate-90" : ""
    ]), H(a, c);
  }), K(s), Se(() => {
    se(s, "style", t.style), eo(s, `tf-collapse ${t.class ?? ""} svelte-1jfktzw`);
  }), H(e, s), ue({
    get items() {
      return n();
    },
    set items(a) {
      n(a), m();
    },
    get onChange() {
      return r();
    },
    set onChange(a) {
      r(a), m();
    },
    get activeKeys() {
      return o();
    },
    set activeKeys(a = []) {
      o(a), m();
    }
  });
}
xs(["click", "keydown"]);
re(rh, { items: {}, onChange: {}, activeKeys: {} }, [], [], !0);
function rr(e, t) {
  le(t, !0);
  let n = y(t, "target", 7);
  typeof n() > "u" && n("undefined");
  var r = Je(), o = ye(r);
  {
    var i = (a) => {
      var l = Je(), u = ye(l);
      $r(u, () => n() ?? ft), H(a, l);
    }, s = (a) => {
      var l = Je(), u = ye(l);
      ud(u, n), H(a, l);
    };
    Ce(o, (a) => {
      typeof n() == "function" ? a(i) : a(s, !1);
    });
  }
  return H(e, r), ue({
    get target() {
      return n();
    },
    set target(a) {
      n(a), m();
    }
  });
}
re(rr, { target: {} }, [], [], !0);
var Fw = (e, t, n) => t(g(n)), qw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), Gw = /* @__PURE__ */ ne('<div class="tf-select-content-children"><!></div>'), Uw = /* @__PURE__ */ ne('<button class="tf-select-content-item"><span><!></span> <!></button> <!>', 1), Jw = /* @__PURE__ */ ne('<div class="tf-select-content nopan nodrag"><!></div>'), Qw = /* @__PURE__ */ ne("<!> <!>", 1), eb = /* @__PURE__ */ ne('<div class="tf-select-input-placeholder"> </div>'), tb = /* @__PURE__ */ ne('<button><div class="tf-select-input-value"></div> <div class="tf-select-input-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></div></button>'), nb = /* @__PURE__ */ ne("<div><!></div>");
function $n(e, t) {
  le(t, !0);
  const n = ($, w = ft) => {
    var C = Je(), N = ye(C);
    Bt(N, 19, w, (V, P) => `${P}_${V.value}`, (V, P) => {
      var O = Uw(), T = ye(O);
      T.__click = [Fw, b, P];
      var L = j(T), I = j(L);
      {
        var B = (E) => {
          var D = qw();
          H(E, D);
        };
        Ce(I, (E) => {
          g(P).children && g(P).children.length > 0 && E(B);
        });
      }
      K(L);
      var S = A(L, 2);
      rr(S, {
        get target() {
          return g(P).label;
        }
      }), K(T);
      var M = A(T, 2);
      {
        var _ = (E) => {
          var D = Gw(), z = j(D);
          n(z, () => g(P).children), K(D), H(E, D);
        };
        Ce(M, (E) => {
          g(P).children && g(P).children.length > 0 && (l() || c().includes(g(P).value)) && E(_);
        });
      }
      H(V, O);
    }), H($, C);
  };
  let r = y(t, "items", 7), o = y(t, "onExpand", 7), i = y(t, "onSelect", 7), s = y(t, "value", 23, () => []), a = y(t, "defaultValue", 23, () => []), l = y(t, "expandAll", 7, !0), u = y(t, "multiple", 7, !1), c = y(t, "expandValue", 23, () => []), d = y(t, "placeholder", 7), f = /* @__PURE__ */ St(t, [
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
  ]), h = /* @__PURE__ */ Me(() => {
    const $ = [], w = (C) => {
      for (let N of C)
        s().length > 0 ? s().includes(N.value) && $.push(N) : a().includes(N.value) && $.push(N), N.children && N.children.length > 0 && w(N.children);
    };
    return w(r()), $;
  }), p;
  function b($) {
    var w, C;
    if ($.children && $.children.length > 0) {
      (w = o()) == null || w($);
      return;
    } else
      p == null || p.hide(), (C = i()) == null || C($);
  }
  var x = nb();
  let k;
  var v = j(x);
  return Yn(
    ii(v, {
      floating: ($) => {
        var w = Jw(), C = j(w);
        n(C, r), K(w), H($, w);
      },
      children: ($, w) => {
        var C = tb();
        let N;
        var V = j(C);
        Bt(
          V,
          23,
          () => g(h),
          (P, O) => `${O}_${P.value}`,
          (P, O, T) => {
            var L = Je(), I = ye(L);
            {
              var B = (M) => {
                var _ = Je(), E = ye(_);
                {
                  var D = (z) => {
                    rr(z, {
                      get target() {
                        return g(O).label;
                      }
                    });
                  };
                  Ce(E, (z) => {
                    g(T) === 0 && z(D);
                  });
                }
                H(M, _);
              }, S = (M) => {
                var _ = Qw(), E = ye(_);
                rr(E, {
                  get target() {
                    return g(O).label;
                  }
                });
                var D = A(E, 2);
                {
                  var z = (Z) => {
                    var W = Re(",");
                    H(Z, W);
                  };
                  Ce(D, (Z) => {
                    g(T) < g(h).length - 1 && Z(z);
                  });
                }
                H(M, _);
              };
              Ce(I, (M) => {
                u() ? M(S, !1) : M(B);
              });
            }
            H(P, L);
          },
          (P) => {
            var O = eb(), T = j(O, !0);
            K(O), Se(() => kn(T, d())), H(P, O);
          }
        ), K(V), Pe(2), K(C), Se(() => N = dn(C, N, {
          class: "tf-select-input nopan nodrag",
          ...f
        })), H($, C);
      },
      $$slots: { floating: !0, default: !0 }
    }),
    ($) => p = $,
    () => p
  ), K(x), Se(() => k = dn(x, k, {
    ...f,
    class: `tf-select ${f.class ?? ""}`
  })), H(e, x), ue({
    get items() {
      return r();
    },
    set items($) {
      r($), m();
    },
    get onExpand() {
      return o();
    },
    set onExpand($) {
      o($), m();
    },
    get onSelect() {
      return i();
    },
    set onSelect($) {
      i($), m();
    },
    get value() {
      return s();
    },
    set value($ = []) {
      s($), m();
    },
    get defaultValue() {
      return a();
    },
    set defaultValue($ = []) {
      a($), m();
    },
    get expandAll() {
      return l();
    },
    set expandAll($ = !0) {
      l($), m();
    },
    get multiple() {
      return u();
    },
    set multiple($ = !1) {
      u($), m();
    },
    get expandValue() {
      return c();
    },
    set expandValue($ = []) {
      c($), m();
    },
    get placeholder() {
      return d();
    },
    set placeholder($) {
      d($), m();
    }
  });
}
xs(["click"]);
re(
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
const Xo = Math.min, Fr = Math.max, is = Math.round, wn = (e) => ({
  x: e,
  y: e
}), rb = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, ob = {
  start: "end",
  end: "start"
};
function Oa(e, t, n) {
  return Fr(e, Xo(t, n));
}
function ni(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Sr(e) {
  return e.split("-")[0];
}
function ri(e) {
  return e.split("-")[1];
}
function oh(e) {
  return e === "x" ? "y" : "x";
}
function xl(e) {
  return e === "y" ? "height" : "width";
}
function so(e) {
  return ["top", "bottom"].includes(Sr(e)) ? "y" : "x";
}
function $l(e) {
  return oh(so(e));
}
function ib(e, t, n) {
  n === void 0 && (n = !1);
  const r = ri(e), o = $l(e), i = xl(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = ss(s)), [s, ss(s)];
}
function sb(e) {
  const t = ss(e);
  return [Da(e), t, Da(t)];
}
function Da(e) {
  return e.replace(/start|end/g, (t) => ob[t]);
}
function ab(e, t, n) {
  const r = ["left", "right"], o = ["right", "left"], i = ["top", "bottom"], s = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? o : r : t ? r : o;
    case "left":
    case "right":
      return t ? i : s;
    default:
      return [];
  }
}
function lb(e, t, n, r) {
  const o = ri(e);
  let i = ab(Sr(e), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map(Da)))), i;
}
function ss(e) {
  return e.replace(/left|right|bottom|top/g, (t) => rb[t]);
}
function ub(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function ih(e) {
  return typeof e != "number" ? ub(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function as(e) {
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
function Zu(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = so(t), s = $l(t), a = xl(s), l = Sr(t), u = i === "y", c = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, f = r[a] / 2 - o[a] / 2;
  let h;
  switch (l) {
    case "top":
      h = {
        x: c,
        y: r.y - o.height
      };
      break;
    case "bottom":
      h = {
        x: c,
        y: r.y + r.height
      };
      break;
    case "right":
      h = {
        x: r.x + r.width,
        y: d
      };
      break;
    case "left":
      h = {
        x: r.x - o.width,
        y: d
      };
      break;
    default:
      h = {
        x: r.x,
        y: r.y
      };
  }
  switch (ri(t)) {
    case "start":
      h[s] -= f * (n && u ? -1 : 1);
      break;
    case "end":
      h[s] += f * (n && u ? -1 : 1);
      break;
  }
  return h;
}
const cb = async (e, t, n) => {
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
    x: c,
    y: d
  } = Zu(u, r, l), f = r, h = {}, p = 0;
  for (let b = 0; b < a.length; b++) {
    const {
      name: x,
      fn: k
    } = a[b], {
      x: v,
      y: $,
      data: w,
      reset: C
    } = await k({
      x: c,
      y: d,
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
    c = v ?? c, d = $ ?? d, h = {
      ...h,
      [x]: {
        ...h[x],
        ...w
      }
    }, C && p <= 50 && (p++, typeof C == "object" && (C.placement && (f = C.placement), C.rects && (u = C.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : C.rects), {
      x: c,
      y: d
    } = Zu(u, f, l)), b = -1);
  }
  return {
    x: c,
    y: d,
    placement: f,
    strategy: o,
    middlewareData: h
  };
};
async function sh(e, t) {
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
    rootBoundary: c = "viewport",
    elementContext: d = "floating",
    altBoundary: f = !1,
    padding: h = 0
  } = ni(t, e), p = ih(h), b = a[f ? d === "floating" ? "reference" : "floating" : d], x = as(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(b))) == null || n ? b : b.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: u,
    rootBoundary: c,
    strategy: l
  })), k = d === "floating" ? {
    x: r,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, v = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)), $ = await (i.isElement == null ? void 0 : i.isElement(v)) ? await (i.getScale == null ? void 0 : i.getScale(v)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, w = as(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: k,
    offsetParent: v,
    strategy: l
  }) : k);
  return {
    top: (x.top - w.top + p.top) / $.y,
    bottom: (w.bottom - x.bottom + p.bottom) / $.y,
    left: (x.left - w.left + p.left) / $.x,
    right: (w.right - x.right + p.right) / $.x
  };
}
const db = (e) => ({
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
      padding: c = 0
    } = ni(e, t) || {};
    if (u == null)
      return {};
    const d = ih(c), f = {
      x: n,
      y: r
    }, h = $l(o), p = xl(h), b = await s.getDimensions(u), x = h === "y", k = x ? "top" : "left", v = x ? "bottom" : "right", $ = x ? "clientHeight" : "clientWidth", w = i.reference[p] + i.reference[h] - f[h] - i.floating[p], C = f[h] - i.reference[h], N = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
    let V = N ? N[$] : 0;
    (!V || !await (s.isElement == null ? void 0 : s.isElement(N))) && (V = a.floating[$] || i.floating[p]);
    const P = w / 2 - C / 2, O = V / 2 - b[p] / 2 - 1, T = Xo(d[k], O), L = Xo(d[v], O), I = T, B = V - b[p] - L, S = V / 2 - b[p] / 2 + P, M = Oa(I, S, B), _ = !l.arrow && ri(o) != null && S !== M && i.reference[p] / 2 - (S < I ? T : L) - b[p] / 2 < 0, E = _ ? S < I ? S - I : S - B : 0;
    return {
      [h]: f[h] + E,
      data: {
        [h]: M,
        centerOffset: S - M - E,
        ..._ && {
          alignmentOffset: E
        }
      },
      reset: _
    };
  }
}), fb = function(e) {
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
        mainAxis: c = !0,
        crossAxis: d = !0,
        fallbackPlacements: f,
        fallbackStrategy: h = "bestFit",
        fallbackAxisSideDirection: p = "none",
        flipAlignment: b = !0,
        ...x
      } = ni(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const k = Sr(o), v = so(a), $ = Sr(a) === a, w = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), C = f || ($ || !b ? [ss(a)] : sb(a)), N = p !== "none";
      !f && N && C.push(...lb(a, b, p, w));
      const V = [a, ...C], P = await sh(t, x), O = [];
      let T = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (c && O.push(P[k]), d) {
        const S = ib(o, s, w);
        O.push(P[S[0]], P[S[1]]);
      }
      if (T = [...T, {
        placement: o,
        overflows: O
      }], !O.every((S) => S <= 0)) {
        var L, I;
        const S = (((L = i.flip) == null ? void 0 : L.index) || 0) + 1, M = V[S];
        if (M)
          return {
            data: {
              index: S,
              overflows: T
            },
            reset: {
              placement: M
            }
          };
        let _ = (I = T.filter((E) => E.overflows[0] <= 0).sort((E, D) => E.overflows[1] - D.overflows[1])[0]) == null ? void 0 : I.placement;
        if (!_)
          switch (h) {
            case "bestFit": {
              var B;
              const E = (B = T.filter((D) => {
                if (N) {
                  const z = so(D.placement);
                  return z === v || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  z === "y";
                }
                return !0;
              }).map((D) => [D.placement, D.overflows.filter((z) => z > 0).reduce((z, Z) => z + Z, 0)]).sort((D, z) => D[1] - z[1])[0]) == null ? void 0 : B[0];
              E && (_ = E);
              break;
            }
            case "initialPlacement":
              _ = a;
              break;
          }
        if (o !== _)
          return {
            reset: {
              placement: _
            }
          };
      }
      return {};
    }
  };
};
async function hb(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = Sr(n), a = ri(n), l = so(n) === "y", u = ["left", "top"].includes(s) ? -1 : 1, c = i && l ? -1 : 1, d = ni(t, e);
  let {
    mainAxis: f,
    crossAxis: h,
    alignmentAxis: p
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: d.mainAxis || 0,
    crossAxis: d.crossAxis || 0,
    alignmentAxis: d.alignmentAxis
  };
  return a && typeof p == "number" && (h = a === "end" ? p * -1 : p), l ? {
    x: h * c,
    y: f * u
  } : {
    x: f * u,
    y: h * c
  };
}
const gb = function(e) {
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
      } = t, l = await hb(t, e);
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
}, pb = function(e) {
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
          fn: (x) => {
            let {
              x: k,
              y: v
            } = x;
            return {
              x: k,
              y: v
            };
          }
        },
        ...l
      } = ni(e, t), u = {
        x: n,
        y: r
      }, c = await sh(t, l), d = so(Sr(o)), f = oh(d);
      let h = u[f], p = u[d];
      if (i) {
        const x = f === "y" ? "top" : "left", k = f === "y" ? "bottom" : "right", v = h + c[x], $ = h - c[k];
        h = Oa(v, h, $);
      }
      if (s) {
        const x = d === "y" ? "top" : "left", k = d === "y" ? "bottom" : "right", v = p + c[x], $ = p - c[k];
        p = Oa(v, p, $);
      }
      const b = a.fn({
        ...t,
        [f]: h,
        [d]: p
      });
      return {
        ...b,
        data: {
          x: b.x - n,
          y: b.y - r,
          enabled: {
            [f]: i,
            [d]: s
          }
        }
      };
    }
  };
};
function Ts() {
  return typeof window < "u";
}
function po(e) {
  return ah(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Zt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function qn(e) {
  var t;
  return (t = (ah(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function ah(e) {
  return Ts() ? e instanceof Node || e instanceof Zt(e).Node : !1;
}
function fn(e) {
  return Ts() ? e instanceof Element || e instanceof Zt(e).Element : !1;
}
function _n(e) {
  return Ts() ? e instanceof HTMLElement || e instanceof Zt(e).HTMLElement : !1;
}
function Bu(e) {
  return !Ts() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Zt(e).ShadowRoot;
}
function oi(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = hn(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function vb(e) {
  return ["table", "td", "th"].includes(po(e));
}
function Hs(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function _l(e) {
  const t = Cl(), n = fn(e) ? hn(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function mb(e) {
  let t = fr(e);
  for (; _n(t) && !ao(t); ) {
    if (_l(t))
      return t;
    if (Hs(t))
      return null;
    t = fr(t);
  }
  return null;
}
function Cl() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function ao(e) {
  return ["html", "body", "#document"].includes(po(e));
}
function hn(e) {
  return Zt(e).getComputedStyle(e);
}
function zs(e) {
  return fn(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function fr(e) {
  if (po(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Bu(e) && e.host || // Fallback.
    qn(e)
  );
  return Bu(t) ? t.host : t;
}
function lh(e) {
  const t = fr(e);
  return ao(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : _n(t) && oi(t) ? t : lh(t);
}
function uh(e, t, n) {
  var r;
  t === void 0 && (t = []);
  const o = lh(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = Zt(o);
  return i ? (Ta(s), t.concat(s, s.visualViewport || [], oi(o) ? o : [], [])) : t.concat(o, uh(o, []));
}
function Ta(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function ch(e) {
  const t = hn(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = _n(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, a = is(n) !== i || is(r) !== s;
  return a && (n = i, r = s), {
    width: n,
    height: r,
    $: a
  };
}
function dh(e) {
  return fn(e) ? e : e.contextElement;
}
function qr(e) {
  const t = dh(e);
  if (!_n(t))
    return wn(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = ch(t);
  let s = (i ? is(n.width) : n.width) / r, a = (i ? is(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const yb = /* @__PURE__ */ wn(0);
function fh(e) {
  const t = Zt(e);
  return !Cl() || !t.visualViewport ? yb : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function wb(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Zt(e) ? !1 : t;
}
function Ko(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = dh(e);
  let s = wn(1);
  t && (r ? fn(r) && (s = qr(r)) : s = qr(e));
  const a = wb(i, n, r) ? fh(i) : wn(0);
  let l = (o.left + a.x) / s.x, u = (o.top + a.y) / s.y, c = o.width / s.x, d = o.height / s.y;
  if (i) {
    const f = Zt(i), h = r && fn(r) ? Zt(r) : r;
    let p = f, b = Ta(p);
    for (; b && r && h !== p; ) {
      const x = qr(b), k = b.getBoundingClientRect(), v = hn(b), $ = k.left + (b.clientLeft + parseFloat(v.paddingLeft)) * x.x, w = k.top + (b.clientTop + parseFloat(v.paddingTop)) * x.y;
      l *= x.x, u *= x.y, c *= x.x, d *= x.y, l += $, u += w, p = Zt(b), b = Ta(p);
    }
  }
  return as({
    width: c,
    height: d,
    x: l,
    y: u
  });
}
function kl(e, t) {
  const n = zs(e).scrollLeft;
  return t ? t.left + n : Ko(qn(e)).left + n;
}
function hh(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    kl(e, r)
  )), i = r.top + t.scrollTop;
  return {
    x: o,
    y: i
  };
}
function bb(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", s = qn(r), a = t ? Hs(t.floating) : !1;
  if (r === s || a && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = wn(1);
  const c = wn(0), d = _n(r);
  if ((d || !d && !i) && ((po(r) !== "body" || oi(s)) && (l = zs(r)), _n(r))) {
    const h = Ko(r);
    u = qr(r), c.x = h.x + r.clientLeft, c.y = h.y + r.clientTop;
  }
  const f = s && !d && !i ? hh(s, l, !0) : wn(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + c.x + f.x,
    y: n.y * u.y - l.scrollTop * u.y + c.y + f.y
  };
}
function xb(e) {
  return Array.from(e.getClientRects());
}
function $b(e) {
  const t = qn(e), n = zs(e), r = e.ownerDocument.body, o = Fr(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = Fr(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + kl(e);
  const a = -n.scrollTop;
  return hn(r).direction === "rtl" && (s += Fr(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
function _b(e, t) {
  const n = Zt(e), r = qn(e), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, a = 0, l = 0;
  if (o) {
    i = o.width, s = o.height;
    const u = Cl();
    (!u || u && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: a,
    y: l
  };
}
function Cb(e, t) {
  const n = Ko(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = _n(e) ? qr(e) : wn(1), s = e.clientWidth * i.x, a = e.clientHeight * i.y, l = o * i.x, u = r * i.y;
  return {
    width: s,
    height: a,
    x: l,
    y: u
  };
}
function Xu(e, t, n) {
  let r;
  if (t === "viewport")
    r = _b(e, n);
  else if (t === "document")
    r = $b(qn(e));
  else if (fn(t))
    r = Cb(t, n);
  else {
    const o = fh(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return as(r);
}
function gh(e, t) {
  const n = fr(e);
  return n === t || !fn(n) || ao(n) ? !1 : hn(n).position === "fixed" || gh(n, t);
}
function kb(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = uh(e, []).filter((a) => fn(a) && po(a) !== "body"), o = null;
  const i = hn(e).position === "fixed";
  let s = i ? fr(e) : e;
  for (; fn(s) && !ao(s); ) {
    const a = hn(s), l = _l(s);
    !l && a.position === "fixed" && (o = null), (i ? !l && !o : !l && a.position === "static" && o && ["absolute", "fixed"].includes(o.position) || oi(s) && !l && gh(e, s)) ? r = r.filter((u) => u !== s) : o = a, s = fr(s);
  }
  return t.set(e, r), r;
}
function Sb(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const i = [...n === "clippingAncestors" ? Hs(t) ? [] : kb(t, this._c) : [].concat(n), r], s = i[0], a = i.reduce((l, u) => {
    const c = Xu(t, u, o);
    return l.top = Fr(c.top, l.top), l.right = Xo(c.right, l.right), l.bottom = Xo(c.bottom, l.bottom), l.left = Fr(c.left, l.left), l;
  }, Xu(t, s, o));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top
  };
}
function Eb(e) {
  const {
    width: t,
    height: n
  } = ch(e);
  return {
    width: t,
    height: n
  };
}
function Nb(e, t, n) {
  const r = _n(t), o = qn(t), i = n === "fixed", s = Ko(e, !0, i, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = wn(0);
  if (r || !r && !i)
    if ((po(t) !== "body" || oi(o)) && (a = zs(t)), r) {
      const f = Ko(t, !0, i, t);
      l.x = f.x + t.clientLeft, l.y = f.y + t.clientTop;
    } else o && (l.x = kl(o));
  const u = o && !r && !i ? hh(o, a) : wn(0), c = s.left + a.scrollLeft - l.x - u.x, d = s.top + a.scrollTop - l.y - u.y;
  return {
    x: c,
    y: d,
    width: s.width,
    height: s.height
  };
}
function na(e) {
  return hn(e).position === "static";
}
function Ku(e, t) {
  if (!_n(e) || hn(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return qn(e) === n && (n = n.ownerDocument.body), n;
}
function ph(e, t) {
  const n = Zt(e);
  if (Hs(e))
    return n;
  if (!_n(e)) {
    let o = fr(e);
    for (; o && !ao(o); ) {
      if (fn(o) && !na(o))
        return o;
      o = fr(o);
    }
    return n;
  }
  let r = Ku(e, t);
  for (; r && vb(r) && na(r); )
    r = Ku(r, t);
  return r && ao(r) && na(r) && !_l(r) ? n : r || mb(e) || n;
}
const Pb = async function(e) {
  const t = this.getOffsetParent || ph, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: Nb(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function Mb(e) {
  return hn(e).direction === "rtl";
}
const Vb = {
  convertOffsetParentRelativeRectToViewportRelativeRect: bb,
  getDocumentElement: qn,
  getClippingRect: Sb,
  getOffsetParent: ph,
  getElementRects: Pb,
  getClientRects: xb,
  getDimensions: Eb,
  getScale: qr,
  isElement: fn,
  isRTL: Mb
}, Ob = gb, Db = pb, Tb = fb, Hb = db, zb = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: Vb,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return cb(e, t, {
    ...o,
    platform: i
  });
}, Lb = ({
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
    const k = document.querySelector(e);
    if (k)
      e = k;
    else
      throw new Error("element not found by document.querySelector('" + e + "')");
  }
  let u;
  if (typeof n == "string") {
    const k = document.querySelector(n);
    if (k)
      u = k;
    else
      throw new Error("element not found by document.querySelector('" + n + "')");
  } else
    u = n;
  let c;
  l && (c = document.createElement("div"), c.style.position = "absolute", c.style.backgroundColor = "#222", c.style.width = "8px", c.style.height = "8px", c.style.transform = "rotate(45deg)", c.style.display = "none", u.firstElementChild.before(c));
  function d() {
    zb(e, u, {
      placement: r,
      middleware: [
        Ob(o),
        // 手动偏移配置
        Tb(i),
        //自动翻转
        Db(s),
        //自动偏移（使得浮动元素能够进入视野）
        ...l ? [Hb({ element: c })] : []
      ]
    }).then(({ x: k, y: v, placement: $, middlewareData: w }) => {
      if (Object.assign(u.style, {
        left: `${k}px`,
        top: `${v}px`
      }), l) {
        const { x: C, y: N } = w.arrow, V = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[$.split("-")[0]];
        Object.assign(c.style, {
          zIndex: -1,
          left: C != null ? `${C}px` : "",
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
    u.style.display = "block", u.style.visibility = "block", u.style.position = "absolute", l && (c.style.display = "block"), f = !0, d();
  }
  function p() {
    u.style.display = "none", l && (c.style.display = "none"), f = !1;
  }
  function b(k) {
    k.stopPropagation(), f ? p() : h();
  }
  function x(k) {
    u.contains(k.target) || p();
  }
  return (!t || t.length == 0) && (t = ["click"]), t.forEach((k) => {
    e.addEventListener(k, b);
  }), document.addEventListener("click", x), {
    destroy() {
      t.forEach((k) => {
        e.removeEventListener(k, b);
      }), document.removeEventListener("click", x);
    },
    hide() {
      p();
    },
    isVisible() {
      return f;
    }
  };
};
var Ib = /* @__PURE__ */ ne('<div style="position: relative"><div><!></div> <div style="display: none; width: 100%;z-index: 9999"><!></div></div>');
function ii(e, t) {
  le(t, !0);
  const n = y(t, "children", 7), r = y(t, "floating", 7), o = y(t, "placement", 7, "bottom");
  let i, s, a;
  En(() => (a = Lb({
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
  var u = Ib(), c = j(u), d = j(c);
  $r(d, n), K(c), Yn(c, (p) => i = p, () => i);
  var f = A(c, 2), h = j(f);
  return $r(h, r), K(f), Yn(f, (p) => s = p, () => s), K(u), H(e, u), ue({
    hide: l,
    get children() {
      return n();
    },
    set children(p) {
      n(p), m();
    },
    get floating() {
      return r();
    },
    set floating(p) {
      r(p), m();
    },
    get placement() {
      return o();
    },
    set placement(p = "bottom") {
      o(p), m();
    }
  });
}
re(ii, { children: {}, floating: {}, placement: {} }, [], ["hide"], !0);
function Ge(e, t) {
  le(t, !0);
  const n = y(t, "children", 7), r = y(t, "level", 7, 1), o = y(t, "mt", 7), i = y(t, "mb", 7);
  var s = Je(), a = ye(s);
  return zp(a, () => `h${r()}`, !1, (l, u) => {
    let c;
    Se(() => c = dn(
      l,
      c,
      {
        class: "tf-heading",
        style: `margin-top:${o() || "0"};margin-bottom:${i() || "0"}`
      },
      void 0,
      l.namespaceURI === Mc,
      l.nodeName.includes("-")
    ));
    var d = Je(), f = ye(d);
    $r(f, () => n() ?? ft), H(u, d);
  }), H(e, s), ue({
    get children() {
      return n();
    },
    set children(l) {
      n(l), m();
    },
    get level() {
      return r();
    },
    set level(l = 1) {
      r(l), m();
    },
    get mt() {
      return o();
    },
    set mt(l) {
      o(l), m();
    },
    get mb() {
      return i();
    },
    set mb(l) {
      i(l), m();
    }
  });
}
re(Ge, { children: {}, level: {}, mt: {}, mb: {} }, [], [], !0);
var Ab = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1rvn4a8"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1rvn4a8"></path></svg>');
const Rb = {
  hash: "svelte-1rvn4a8",
  code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:#eee;border:1px solid transparent;}}"
};
function Ls(e, t) {
  le(t, !0), Qe(e, Rb);
  const n = /* @__PURE__ */ St(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  je(e, dt(() => n, {
    get class() {
      return `input-btn-more ${t.class ?? ""}`;
    },
    children: (r, o) => {
      var i = Ab();
      H(r, i);
    },
    $$slots: { default: !0 }
  })), ue();
}
re(Ls, {}, [], [], !0);
const Zb = () => {
  const e = et();
  return {
    deleteNode: (t) => {
      e.nodes.update((n) => n.filter((r) => r.id !== t)), e.edges.update(
        (n) => n.filter((r) => r.source !== t && r.target !== t)
      );
    }
  };
}, lo = (e = 16) => {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = new Uint8Array(e);
  return crypto.getRandomValues(n), Array.from(n, (r) => t[r % t.length]).join("");
}, Bb = () => {
  const { nodes: e, nodeLookup: t } = et();
  return {
    copyNode: (n) => {
      var r;
      const o = (r = F(t).get(n)) == null ? void 0 : r.internals.userNode;
      if (o) {
        const i = lo(), s = {
          ...o,
          id: i,
          position: {
            x: o.position.x + 50,
            y: o.position.y + 50
          }
        };
        e.update((a) => [...a, s]), e.update(
          (a) => a.map(
            (l) => l.id === i ? { ...l, selected: !0 } : { ...l, selected: !1 }
          )
        );
      }
    }
  };
};
var Xb = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'), Kb = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'), Yb = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'), Wb = /* @__PURE__ */ ne('<div class="tf-node-toolbar svelte-44dmwv"><!> <!> <!></div>'), jb = /* @__PURE__ */ ne('<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!> <!>', 1);
const Fb = {
  hash: "svelte-44dmwv",
  code: ".tf-node-toolbar.svelte-44dmwv {display:flex;gap:5px;padding:5px;border-radius:5px;background:#fff;border:1px solid #eee;box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}"
};
function Pn(e, t) {
  le(t, !0), Qe(e, Fb);
  const n = y(t, "data", 7), r = y(t, "id", 7, ""), o = y(t, "icon", 7), i = y(t, "handle", 7), s = y(t, "children", 7), a = y(t, "allowExecute", 7, !0), l = y(t, "allowCopy", 7, !0), u = y(t, "allowDelete", 7, !0);
  let c = n().expand ? ["key"] : [];
  const { updateNodeData: d } = Kt(), f = [
    {
      key: "key",
      icon: o(),
      title: n().title,
      description: n().description,
      content: s()
    }
  ], { deleteNode: h } = Zb(), { copyNode: p } = Bb();
  var b = jb(), x = ye(b);
  {
    var k = (P) => {
      eh(P, {
        get position() {
          return _e.Top;
        },
        align: "end",
        children: (O, T) => {
          var L = Wb(), I = j(L);
          {
            var B = (D) => {
              je(D, {
                class: "tf-node-toolbar-item",
                children: (z, Z) => {
                  var W = Xb();
                  H(z, W);
                },
                $$slots: { default: !0 }
              });
            };
            Ce(I, (D) => {
              a() && D(B);
            });
          }
          var S = A(I, 2);
          {
            var M = (D) => {
              je(D, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  p(r());
                },
                children: (z, Z) => {
                  var W = Kb();
                  H(z, W);
                },
                $$slots: { default: !0 }
              });
            };
            Ce(S, (D) => {
              l() && D(M);
            });
          }
          var _ = A(S, 2);
          {
            var E = (D) => {
              je(D, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  h(r());
                },
                children: (z, Z) => {
                  var W = Yb();
                  H(z, W);
                },
                $$slots: { default: !0 }
              });
            };
            Ce(_, (D) => {
              u() && D(E);
            });
          }
          K(L), H(O, L);
        },
        $$slots: { default: !0 }
      });
    };
    Ce(x, (P) => {
      (a() || l() || u()) && P(k);
    });
  }
  var v = A(x, 2), $ = A(j(v), 2), w = j($);
  rh(w, {
    items: f,
    activeKeys: c,
    onChange: (P, O) => {
      d(r(), { expand: O == null ? void 0 : O.includes("key") });
    }
  }), K($), K(v);
  var C = A(v, 2);
  dr(C, {
    type: "target",
    get position() {
      return _e.Left;
    },
    style: " left: -12px;top: 20px"
  });
  var N = A(C, 2);
  dr(N, {
    type: "source",
    get position() {
      return _e.Right;
    },
    style: "right: -12px;top: 20px"
  });
  var V = A(N, 2);
  return $r(V, () => i() ?? ft), H(e, b), ue({
    get data() {
      return n();
    },
    set data(P) {
      n(P), m();
    },
    get id() {
      return r();
    },
    set id(P = "") {
      r(P), m();
    },
    get icon() {
      return o();
    },
    set icon(P) {
      o(P), m();
    },
    get handle() {
      return i();
    },
    set handle(P) {
      i(P), m();
    },
    get children() {
      return s();
    },
    set children(P) {
      s(P), m();
    },
    get allowExecute() {
      return a();
    },
    set allowExecute(P = !0) {
      a(P), m();
    },
    get allowCopy() {
      return l();
    },
    set allowCopy(P = !0) {
      l(P), m();
    },
    get allowDelete() {
      return u();
    },
    set allowDelete(P = !0) {
      u(P), m();
    }
  });
}
re(
  Pn,
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
function bt() {
  return xr("svelteflow__node_id");
}
const vh = [
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
], qb = [
  {
    value: "ref",
    label: "引用"
  },
  {
    value: "input",
    label: "固定值"
  }
];
var Gb = /* @__PURE__ */ ne('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">参数类型： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), Ub = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>'), Jb = /* @__PURE__ */ ne('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const Qb = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function mh(e, t) {
  le(t, !0), Qe(e, Qb);
  const [n, r] = tt(), o = () => J(g(l), "$node", n), i = y(t, "parameter", 7), s = y(t, "index", 7);
  let a = bt(), l = /* @__PURE__ */ Me(() => Or(a)), u = /* @__PURE__ */ Me(() => {
    var P, O;
    return {
      ...i(),
      ...(O = (P = o()) == null ? void 0 : P.data) == null ? void 0 : O.parameters[s()]
    };
  });
  const { updateNodeData: c } = Kt(), d = (P) => {
    const O = P.target.value;
    c(a, (T) => {
      let L = T.data.parameters;
      return L[s()].name = O, { parameters: L };
    });
  }, f = (P) => {
    const O = P.target.checked;
    c(a, (T) => {
      let L = T.data.parameters;
      return L[s()].required = O, { parameters: L };
    });
  }, h = (P) => {
    const O = P.value;
    O && c(a, (T) => {
      let L = T.data.parameters;
      return L[s()].dataType = O, { parameters: L };
    });
  };
  let p;
  const b = () => {
    c(a, (P) => {
      let O = P.data.parameters;
      return O.splice(s(), 1), { parameters: [...O] };
    }), p == null || p.hide();
  };
  var x = Jb(), k = ye(x), v = j(k);
  _t(v, {
    style: "width: 100%;",
    get value() {
      return g(u).name;
    },
    placeholder: "请输入参数名称",
    oninput: d
  }), K(k);
  var $ = A(k, 2), w = j($);
  th(w, {
    get checked() {
      return g(u).required;
    },
    onchange: f
  }), K($);
  var C = A($, 2), N = j(C);
  Yn(
    ii(N, {
      placement: "bottom",
      floating: (P) => {
        var O = Gb(), T = j(O), L = A(j(T));
        const I = /* @__PURE__ */ Me(() => g(u).dataType ? [g(u).dataType] : ["String"]);
        $n(L, {
          items: vh,
          style: "width: 100%",
          onSelect: h,
          get value() {
            return g(I);
          }
        }), K(T);
        var B = A(T, 2), S = A(j(B));
        Ht(S, { rows: 1, style: "width: 100%;" }), K(B);
        var M = A(B, 2), _ = A(j(M));
        Ht(_, { rows: 3, style: "width: 100%;" }), K(M);
        var E = A(M, 2), D = j(E);
        je(D, {
          onclick: b,
          children: (z, Z) => {
            Pe();
            var W = Re("删除");
            H(z, W);
          },
          $$slots: { default: !0 }
        }), K(E), K(O), H(P, O);
      },
      children: (P, O) => {
        je(P, {
          class: "input-btn-more",
          children: (T, L) => {
            var I = Ub();
            H(T, I);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (P) => p = P,
    () => p
  ), K(C), H(e, x);
  var V = ue({
    get parameter() {
      return i();
    },
    set parameter(P) {
      i(P), m();
    },
    get index() {
      return s();
    },
    set index(P) {
      s(P), m();
    }
  });
  return r(), V;
}
re(mh, { parameter: {}, index: {} }, [], [], !0);
var ex = /* @__PURE__ */ ne('<div class="input-header svelte-3n0wca">参数名称</div> <div class="input-header svelte-3n0wca">必填</div> <div class="input-header svelte-3n0wca"></div>', 1), tx = /* @__PURE__ */ ne('<div class="none-params svelte-3n0wca">无输入参数</div>'), nx = /* @__PURE__ */ ne('<div class="input-container svelte-3n0wca"><!> <!></div>');
const rx = {
  hash: "svelte-3n0wca",
  code: `.input-container.svelte-3n0wca {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-3n0wca .none-params:where(.svelte-3n0wca) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-3n0wca .input-header:where(.svelte-3n0wca) {font-size:12px;color:#666;}`
};
function yh(e, t) {
  le(t, !0), Qe(e, rx);
  const [n, r] = tt(), o = () => J(g(s), "$node", n);
  let i = bt(), s = /* @__PURE__ */ Me(() => Or(i)), a = /* @__PURE__ */ Me(() => {
    var f, h;
    return [...((h = (f = o()) == null ? void 0 : f.data) == null ? void 0 : h.parameters) || []];
  });
  var l = nx(), u = j(l);
  {
    var c = (f) => {
      var h = ex();
      Pe(4), H(f, h);
    };
    Ce(u, (f) => {
      g(a).length !== 0 && f(c);
    });
  }
  var d = A(u, 2);
  Bt(
    d,
    19,
    () => g(a),
    (f) => f.id,
    (f, h, p) => {
      mh(f, {
        get parameter() {
          return g(h);
        },
        get index() {
          return g(p);
        }
      });
    },
    (f) => {
      var h = tx();
      H(f, h);
    }
  ), K(l), H(e, l), ue(), r();
}
re(yh, {}, [], [], !0);
const wh = (e) => {
  !e || e.length == 0 || e.forEach((t) => {
    t.id || (t.id = lo()), wh(t.children);
  });
}, Gn = () => {
  const { updateNodeData: e } = Kt();
  return {
    addParameter: (t, n = "parameters", r) => {
      wh(r == null ? void 0 : r.children);
      const o = {
        ...r,
        id: lo()
      };
      e(t, (i) => {
        let s = i.data[n];
        return s ? s.push(o) : s = [o], {
          [n]: [...s]
        };
      });
    }
  };
};
var ox = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), ix = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), sx = /* @__PURE__ */ ne('<div class="heading svelte-r5g35l"><!> <!></div> <!>', 1);
const ax = {
  hash: "svelte-r5g35l",
  code: ".heading.svelte-r5g35l {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:#eee;border:1px solid transparent;}"
};
function bh(e, t) {
  le(t, !0), Qe(e, ax);
  const n = y(t, "data", 7), r = /* @__PURE__ */ St(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = bt(), { addParameter: i } = Gn();
  return Pn(e, dt(() => r, {
    get data() {
      return n();
    },
    allowExecute: !1,
    icon: (s) => {
      var a = ox();
      H(s, a);
    },
    children: (s, a) => {
      var l = sx(), u = ye(l), c = j(u);
      Ge(c, {
        level: 3,
        children: (h, p) => {
          Pe();
          var b = Re("输入参数");
          H(h, b);
        },
        $$slots: { default: !0 }
      });
      var d = A(c, 2);
      je(d, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: () => {
          i(o);
        },
        children: (h, p) => {
          var b = ix();
          H(h, b);
        },
        $$slots: { default: !0 }
      }), K(u);
      var f = A(u, 2);
      yh(f, {}), H(s, l);
    },
    $$slots: { icon: !0, default: !0 }
  })), ue({
    get data() {
      return n();
    },
    set data(s) {
      n(s), m();
    }
  });
}
re(bh, { data: {} }, [], [], !0);
const xh = (e, t, n) => {
  for (let r of n)
    r.target === t && r.source && (e.push(r.source), xh(e, r.source, n));
}, Yu = (e, t) => {
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
        const r = (o, i) => !o || o.length === 0 ? [] : o.map((s) => ({
          label: s.name + (t ? ` (Array<${s.dataType || "String"}>)` : ` (${s.dataType || "String"})`),
          // label: param.name ,
          value: i + "." + s.name,
          children: r(s.children, i + "." + s.name)
        }));
        return {
          label: e.data.title,
          value: e.id,
          children: r(n, e.id)
        };
      }
    }
  }
}, lx = (e = !1) => {
  const t = bt(), n = Or(t), { nodes: r, edges: o } = et();
  return ir([n, r, o], ([i, s, a]) => {
    const l = [];
    if (e) {
      for (let u of s)
        if (u.parentId === i.id) {
          const c = Yu(u, u.parentId === i.id);
          c && l.push(c);
        }
    } else {
      const u = [];
      xh(u, t, a);
      for (let c of s)
        if (u.includes(c.id)) {
          const d = Yu(c, c.parentId === i.id);
          d && l.push(d);
        }
    }
    return l;
  });
};
var ux = /* @__PURE__ */ ne('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">数据来源： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), cx = /* @__PURE__ */ ne('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const dx = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function $h(e, t) {
  le(t, !0), Qe(e, dx);
  const [n, r] = tt(), o = () => J(g(c), "$node", n), i = () => J(w, "$selectItems", n), s = y(t, "parameter", 7), a = y(t, "index", 7), l = y(t, "dataKeyName", 7);
  let u = bt(), c = /* @__PURE__ */ Me(() => Or(u)), d = /* @__PURE__ */ Me(() => {
    var M;
    return {
      ...s(),
      ...(M = o()) == null ? void 0 : M.data[l()][a()]
    };
  });
  const { updateNodeData: f } = Kt(), h = (M, _) => {
    f(u, (E) => {
      let D = E.data[l()];
      return D[a()] = { ...D[a()], [M]: _ }, { [l()]: D };
    });
  }, p = (M) => {
    const _ = M.target.value;
    h("name", _);
  }, b = (M) => {
    const _ = M.target.value;
    h("value", _);
  }, x = (M) => {
    const _ = M.value;
    h("ref", _);
  }, k = (M) => {
    const _ = M.value;
    h("refType", _);
  };
  let v;
  const $ = () => {
    f(u, (M) => {
      let _ = M.data[l()];
      return _.splice(a(), 1), { [l()]: [..._] };
    }), v == null || v.hide();
  }, w = lx();
  var C = cx(), N = ye(C), V = j(N);
  _t(V, {
    style: "width: 100%;",
    get value() {
      return g(d).name;
    },
    placeholder: "请输入参数名称",
    oninput: p
  }), K(N);
  var P = A(N, 2), O = j(P);
  {
    var T = (M) => {
      _t(M, {
        get value() {
          return g(d).value;
        },
        placeholder: "请输入参数值",
        oninput: b
      });
    }, L = (M) => {
      const _ = /* @__PURE__ */ Me(() => [g(d).ref]);
      $n(M, {
        get items() {
          return i();
        },
        style: "width: 100%",
        defaultValue: ["ref"],
        get value() {
          return g(_);
        },
        expandAll: !0,
        onSelect: x
      });
    };
    Ce(O, (M) => {
      g(d).refType === "input" ? M(T) : M(L, !1);
    });
  }
  K(P);
  var I = A(P, 2), B = j(I);
  Yn(
    ii(B, {
      placement: "bottom",
      floating: (M) => {
        var _ = ux(), E = j(_), D = A(j(E));
        const z = /* @__PURE__ */ Me(() => g(d).refType ? [g(d).refType] : []);
        $n(D, {
          items: qb,
          style: "width: 100%",
          defaultValue: ["ref"],
          get value() {
            return g(z);
          },
          onSelect: k
        }), K(E);
        var Z = A(E, 2), W = A(j(Z));
        Ht(W, {
          rows: 1,
          style: "width: 100%;",
          onchange: (de) => {
            const be = de.target.value;
            h("defaultValue", be);
          }
        }), K(Z);
        var q = A(Z, 2), fe = A(j(q));
        Ht(fe, {
          rows: 3,
          style: "width: 100%;",
          onchange: (de) => {
            const be = de.target.value;
            h("description", be);
          }
        }), K(q);
        var Q = A(q, 2), X = j(Q);
        je(X, {
          onclick: $,
          children: (de, be) => {
            Pe();
            var xe = Re("删除");
            H(de, xe);
          },
          $$slots: { default: !0 }
        }), K(Q), K(_), H(M, _);
      },
      children: (M, _) => {
        Ls(M, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (M) => v = M,
    () => v
  ), K(I), H(e, C);
  var S = ue({
    get parameter() {
      return s();
    },
    set parameter(M) {
      s(M), m();
    },
    get index() {
      return a();
    },
    set index(M) {
      a(M), m();
    },
    get dataKeyName() {
      return l();
    },
    set dataKeyName(M) {
      l(M), m();
    }
  });
  return r(), S;
}
re($h, { parameter: {}, index: {}, dataKeyName: {} }, [], [], !0);
var fx = /* @__PURE__ */ ne('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数值</div> <div class="input-header svelte-1sm1mgi"></div>', 1), hx = /* @__PURE__ */ ne('<div class="none-params svelte-1sm1mgi"> </div>'), gx = /* @__PURE__ */ ne('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const px = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function qt(e, t) {
  le(t, !0), Qe(e, px);
  const [n, r] = tt(), o = () => J(g(l), "$node", n), i = y(t, "noneParameterText", 7, "无输入参数"), s = y(t, "dataKeyName", 7, "parameters");
  let a = bt(), l = /* @__PURE__ */ Me(() => Or(a)), u = /* @__PURE__ */ Me(() => {
    var b;
    return [...((b = o()) == null ? void 0 : b.data[s()]) || []];
  });
  var c = gx(), d = j(c);
  {
    var f = (b) => {
      var x = fx();
      Pe(4), H(b, x);
    };
    Ce(d, (b) => {
      g(u).length !== 0 && b(f);
    });
  }
  var h = A(d, 2);
  Bt(
    h,
    19,
    () => g(u),
    (b) => b.id,
    (b, x, k) => {
      $h(b, {
        get parameter() {
          return g(x);
        },
        get index() {
          return g(k);
        },
        get dataKeyName() {
          return s();
        }
      });
    },
    (b) => {
      var x = hx(), k = j(x, !0);
      K(x), Se(() => kn(k, i())), H(b, x);
    }
  ), K(c), H(e, c);
  var p = ue({
    get noneParameterText() {
      return i();
    },
    set noneParameterText(b = "无输入参数") {
      i(b), m();
    },
    get dataKeyName() {
      return s();
    },
    set dataKeyName(b = "parameters") {
      s(b), m();
    }
  });
  return r(), p;
}
re(qt, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var vx = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), mx = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), yx = /* @__PURE__ */ ne('<div class="heading svelte-11h445j"><!> <!></div> <!>', 1);
const wx = {
  hash: "svelte-11h445j",
  code: ".heading.svelte-11h445j {display:flex;margin-bottom:10px;}"
};
function _h(e, t) {
  le(t, !0), Qe(e, wx);
  const n = y(t, "data", 7), r = /* @__PURE__ */ St(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = bt(), { addParameter: i } = Gn();
  return Pn(e, dt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      allowExecute: !1,
      icon: (s) => {
        var a = vx();
        H(s, a);
      },
      children: (s, a) => {
        var l = yx(), u = ye(l), c = j(u);
        Ge(c, {
          level: 3,
          children: (h, p) => {
            Pe();
            var b = Re("输出参数");
            H(h, b);
          },
          $$slots: { default: !0 }
        });
        var d = A(c, 2);
        je(d, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (h, p) => {
            var b = mx();
            H(h, b);
          },
          $$slots: { default: !0 }
        }), K(u);
        var f = A(u, 2);
        qt(f, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs"
        }), H(s, l);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue({
    get data() {
      return n();
    },
    set data(s) {
      n(s), m();
    }
  });
}
re(_h, { data: {} }, [], [], !0);
const Is = () => xr("tinyflow_options");
var bx = /* @__PURE__ */ we('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), xx = /* @__PURE__ */ ne('<div class="input-more-item svelte-1cfeest"><!></div>'), $x = /* @__PURE__ */ ne('<div class="input-more-setting svelte-1cfeest"><div class="input-more-item svelte-1cfeest">默认值： <!></div> <div class="input-more-item svelte-1cfeest">参数描述： <!></div> <!></div>'), _x = /* @__PURE__ */ ne('<div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!></div>', 1);
const Cx = {
  hash: "svelte-1cfeest",
  code: ".input-item.svelte-1cfeest {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-1cfeest {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-1cfeest .input-more-item:where(.svelte-1cfeest) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Ch(e, t) {
  le(t, !0), Qe(e, Cx);
  const [n, r] = tt(), o = () => J(g(u), "$node", n), i = y(t, "parameter", 7), s = y(t, "position", 7), a = y(t, "dataKeyName", 7);
  let l = bt(), u = /* @__PURE__ */ Me(() => Or(l)), c = /* @__PURE__ */ Me(() => {
    var E;
    let D = (E = o()) == null ? void 0 : E.data[a()], z;
    if (D && s().length > 0) {
      let Z = D;
      for (let W = 0; W < s().length; W++) {
        const q = s()[W];
        W == s().length - 1 ? z = Z[q] : Z = Z[q].children;
      }
    }
    return { ...i(), ...z };
  });
  const { updateNodeData: d } = Kt(), f = (E, D) => {
    d(l, (z) => {
      const Z = z.data[a()];
      if (Z && s().length > 0) {
        let W = Z;
        for (let q = 0; q < s().length; q++) {
          const fe = s()[q];
          q == s().length - 1 ? W[fe] = { ...W[fe], [E]: D } : W = Z[fe].children;
        }
      }
      return { [a()]: Z };
    });
  }, h = (E) => {
    const D = E.target.value;
    f("name", D);
  }, p = (E) => {
    const D = E.value;
    f("dataType", D);
  };
  let b;
  const x = () => {
    d(l, (E) => {
      let D = E.data[a()];
      if (D && s().length > 0) {
        let z = D;
        for (let Z = 0; Z < s().length; Z++) {
          const W = s()[Z];
          Z == s().length - 1 ? z.splice(W, 1) : z = z[W].children;
        }
      }
      return { [a()]: [...D] };
    }), b == null || b.hide();
  }, k = () => {
    d(l, (E) => {
      let D = E.data[a()];
      if (D && s().length > 0) {
        let z = D;
        for (let Z = 0; Z < s().length; Z++) {
          const W = s()[Z];
          Z == s().length - 1 ? z[W].children ? z[W].children.push({
            id: lo(),
            name: "newParam",
            dataType: "String"
          }) : z[W].children = [
            {
              id: lo(),
              name: "newParam",
              dataType: "String"
            }
          ] : z = z[W].children;
        }
      }
      return { [a()]: [...D] };
    });
  };
  var v = _x(), $ = ye(v), w = j($);
  {
    var C = (E) => {
      var D = Je(), z = ye(D);
      Bt(z, 17, s, $s, (Z, W) => {
        Pe();
        var q = Re(" ");
        H(Z, q);
      }), H(E, D);
    };
    Ce(w, (E) => {
      s().length > 1 && E(C);
    });
  }
  var N = A(w, 2);
  const V = /* @__PURE__ */ Me(() => g(c).nameDisabled === !0);
  _t(N, {
    style: "width: 100%;",
    get value() {
      return g(c).name;
    },
    placeholder: "请输入参数名称",
    oninput: h,
    get disabled() {
      return g(V);
    }
  }), K($);
  var P = A($, 2), O = j(P);
  const T = /* @__PURE__ */ Me(() => g(c).dataType ? [g(c).dataType] : []), L = /* @__PURE__ */ Me(() => g(c).dataTypeDisabled === !0);
  $n(O, {
    items: vh,
    style: "width: 100%",
    defaultValue: ["String"],
    get value() {
      return g(T);
    },
    get disabled() {
      return g(L);
    },
    onSelect: p
  });
  var I = A(O, 2);
  {
    var B = (E) => {
      je(E, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: k,
        children: (D, z) => {
          var Z = bx();
          H(D, Z);
        },
        $$slots: { default: !0 }
      });
    };
    Ce(I, (E) => {
      (g(c).dataType === "Object" || g(c).dataType === "Array") && g(c).addChildDisabled !== !0 && E(B);
    });
  }
  K(P);
  var S = A(P, 2), M = j(S);
  Yn(
    ii(M, {
      placement: "bottom",
      floating: (E) => {
        var D = $x(), z = j(D), Z = A(j(z));
        Ht(Z, {
          rows: 1,
          style: "width: 100%;",
          onchange: (X) => {
            const de = X.target.value;
            f("defaultValue", de);
          }
        }), K(z);
        var W = A(z, 2), q = A(j(W));
        Ht(q, {
          rows: 3,
          style: "width: 100%;",
          onchange: (X) => {
            const de = X.target.value;
            f("description", de);
          }
        }), K(W);
        var fe = A(W, 2);
        {
          var Q = (X) => {
            var de = xx(), be = j(de);
            je(be, {
              onclick: x,
              children: (xe, ve) => {
                Pe();
                var oe = Re("删除");
                H(xe, oe);
              },
              $$slots: { default: !0 }
            }), K(de), H(X, de);
          };
          Ce(fe, (X) => {
            g(c).deleteDisabled !== !0 && X(Q);
          });
        }
        K(D), H(E, D);
      },
      children: (E, D) => {
        Ls(E, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (E) => b = E,
    () => b
  ), K(S), H(e, v);
  var _ = ue({
    get parameter() {
      return i();
    },
    set parameter(E) {
      i(E), m();
    },
    get position() {
      return s();
    },
    set position(E) {
      s(E), m();
    },
    get dataKeyName() {
      return a();
    },
    set dataKeyName(E) {
      a(E), m();
    }
  });
  return r(), _;
}
re(Ch, { parameter: {}, position: {}, dataKeyName: {} }, [], [], !0);
var kx = /* @__PURE__ */ ne("<!> <!>", 1), Sx = /* @__PURE__ */ ne('<div class="none-params svelte-1sm1mgi"> </div>'), Ex = /* @__PURE__ */ ne('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数类型</div> <div class="input-header svelte-1sm1mgi"></div>', 1), Nx = /* @__PURE__ */ ne('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const Px = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function gr(e, t) {
  le(t, !0), Qe(e, Px);
  const [n, r] = tt(), o = () => J(g(u), "$node", n), i = (x, k = ft, v = ft) => {
    var $ = Je(), w = ye($);
    Bt(
      w,
      19,
      k,
      (C) => `${C.id}_${C.children ? C.children.length : 0}`,
      (C, N, V) => {
        var P = kx(), O = ye(P);
        const T = /* @__PURE__ */ Me(() => [...v(), g(V)]);
        Ch(O, {
          get parameter() {
            return g(N);
          },
          get position() {
            return g(T);
          },
          get dataKeyName() {
            return a();
          }
        });
        var L = A(O, 2);
        {
          var I = (B) => {
            var S = /* @__PURE__ */ pe(() => [...v(), g(V)]);
            i(B, () => g(N).children, () => g(S));
          };
          Ce(L, (B) => {
            g(N).children && B(I);
          });
        }
        H(C, P);
      },
      (C) => {
        var N = Je(), V = ye(N);
        {
          var P = (O) => {
            var T = Sx(), L = j(T, !0);
            K(T), Se(() => kn(L, s())), H(O, T);
          };
          Ce(V, (O) => {
            v().length === 0 && O(P);
          });
        }
        H(C, N);
      }
    ), H(x, $);
  }, s = y(t, "noneParameterText", 7, "无输出参数"), a = y(t, "dataKeyName", 7, "outputDefs");
  let l = bt(), u = /* @__PURE__ */ Me(() => Or(l)), c = /* @__PURE__ */ Me(() => {
    var x;
    return [...((x = o()) == null ? void 0 : x.data[a()]) || []];
  });
  var d = Nx(), f = j(d);
  {
    var h = (x) => {
      var k = Ex();
      Pe(4), H(x, k);
    };
    Ce(f, (x) => {
      g(c).length !== 0 && x(h);
    });
  }
  var p = A(f, 2);
  i(p, () => g(c) || [], () => []), K(d), H(e, d);
  var b = ue({
    get noneParameterText() {
      return s();
    },
    set noneParameterText(x = "无输出参数") {
      s(x), m();
    },
    get dataKeyName() {
      return a();
    },
    set dataKeyName(x = "outputDefs") {
      a(x), m();
    }
  });
  return r(), b;
}
re(gr, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var Mx = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), Vx = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ox = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Dx = /* @__PURE__ */ ne('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">模型</div> <div class="setting-item svelte-15t2v24"><!> <!></div> <div class="setting-title svelte-15t2v24">系统提示词</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">用户提示词</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!> <!></div> <!>', 1);
const Tx = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function kh(e, t) {
  le(t, !0), Qe(e, Tx);
  const n = y(t, "data", 7), r = /* @__PURE__ */ St(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = bt(), { addParameter: i } = Gn(), s = Is();
  let a = Gr(It([]));
  En(async () => {
    var u;
    const c = await ((u = s.provider) == null ? void 0 : u.llm());
    g(a).push(...c || []);
  });
  const { updateNodeData: l } = Kt();
  return Pn(e, dt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var c = Mx();
        H(u, c);
      },
      children: (u, c) => {
        var d = Dx(), f = ye(d), h = j(f);
        Ge(h, {
          level: 3,
          children: (B, S) => {
            Pe();
            var M = Re("输入参数");
            H(B, M);
          },
          $$slots: { default: !0 }
        });
        var p = A(h, 2);
        je(p, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (B, S) => {
            var M = Vx();
            H(B, M);
          },
          $$slots: { default: !0 }
        }), K(f);
        var b = A(f, 2);
        qt(b, {});
        var x = A(b, 2);
        Ge(x, {
          level: 3,
          mt: "10px",
          children: (B, S) => {
            Pe();
            var M = Re("模型设置");
            H(B, M);
          },
          $$slots: { default: !0 }
        });
        var k = A(x, 4), v = j(k);
        const $ = /* @__PURE__ */ Me(() => n().llmId ? [n().llmId] : []);
        $n(v, {
          get items() {
            return g(a);
          },
          style: "width: 100%",
          placeholder: "请选择模型",
          onSelect: (B) => {
            const S = B.value;
            l(o, () => ({ llmId: S }));
          },
          get value() {
            return g($);
          }
        });
        var w = A(v, 2);
        Ls(w, {}), K(k);
        var C = A(k, 4), N = j(C);
        Ht(N, {
          rows: 5,
          placeholder: "请输入系统提示词",
          style: "width: 100%"
        }), K(C);
        var V = A(C, 4), P = j(V);
        Ht(P, {
          rows: 5,
          placeholder: "请输入用户提示词",
          style: "width: 100%"
        }), K(V);
        var O = A(V, 2), T = j(O);
        Ge(T, {
          level: 3,
          mt: "10px",
          children: (B, S) => {
            Pe();
            var M = Re("输出参数");
            H(B, M);
          },
          $$slots: { default: !0 }
        });
        var L = A(T, 2);
        je(L, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (B, S) => {
            var M = Ox();
            H(B, M);
          },
          $$slots: { default: !0 }
        }), K(O);
        var I = A(O, 2);
        gr(I, {}), H(u, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue({
    get data() {
      return n();
    },
    set data(u) {
      n(u), m();
    }
  });
}
re(kh, { data: {} }, [], [], !0);
var Hx = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), zx = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Lx = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ix = /* @__PURE__ */ ne('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!> <!></div> <!>', 1);
const Ax = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Sh(e, t) {
  le(t, !0), Qe(e, Ax);
  const n = y(t, "data", 7), r = /* @__PURE__ */ St(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = bt(), { addParameter: i } = Gn(), { updateNodeData: s } = Kt(), a = [
    { label: "QLExpress", value: "qlexpress" },
    { label: "Groovy", value: "groovy" }
  ];
  return Pn(e, dt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = Hx();
        H(l, u);
      },
      children: (l, u) => {
        var c = Ix(), d = ye(c), f = j(d);
        Ge(f, {
          level: 3,
          children: (T, L) => {
            Pe();
            var I = Re("输入参数");
            H(T, I);
          },
          $$slots: { default: !0 }
        });
        var h = A(f, 2);
        je(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (T, L) => {
            var I = zx();
            H(T, I);
          },
          $$slots: { default: !0 }
        }), K(d);
        var p = A(d, 2);
        qt(p, {});
        var b = A(p, 2);
        Ge(b, {
          level: 3,
          mt: "10px",
          children: (T, L) => {
            Pe();
            var I = Re("代码");
            H(T, I);
          },
          $$slots: { default: !0 }
        });
        var x = A(b, 4), k = j(x);
        const v = /* @__PURE__ */ Me(() => n().engine ? [n().engine] : ["qlexpress"]);
        $n(k, {
          items: a,
          style: "width: 100%",
          placeholder: "请选择执行引擎",
          onSelect: (T) => {
            const L = T.value;
            s(o, () => ({ engine: L }));
          },
          get value() {
            return g(v);
          }
        }), K(x);
        var $ = A(x, 4), w = j($);
        const C = /* @__PURE__ */ Me(() => n().code || "");
        Ht(w, {
          rows: 10,
          placeholder: "请输入执行代码",
          style: "width: 100%",
          onchange: (T) => {
            s(o, () => ({ code: T.target.value }));
          },
          get value() {
            return g(C);
          }
        }), K($);
        var N = A($, 2), V = j(N);
        Ge(V, {
          level: 3,
          mt: "10px",
          children: (T, L) => {
            Pe();
            var I = Re("输出参数");
            H(T, I);
          },
          $$slots: { default: !0 }
        });
        var P = A(V, 2);
        je(P, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (T, L) => {
            var I = Lx();
            H(T, I);
          },
          $$slots: { default: !0 }
        }), K(N);
        var O = A(N, 2);
        gr(O, {}), H(l, c);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue({
    get data() {
      return n();
    },
    set data(l) {
      n(l), m();
    }
  });
}
re(Sh, { data: {} }, [], [], !0);
var Rx = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>'), Zx = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Bx = /* @__PURE__ */ ne('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const Xx = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Eh(e, t) {
  le(t, !0), Qe(e, Xx);
  const n = y(t, "data", 7), r = /* @__PURE__ */ St(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = bt(), { addParameter: i } = Gn(), { updateNodeData: s } = Kt();
  return Ur(() => {
    (!n().outputDefs || n().outputDefs.length === 0) && i(o, "outputDefs", {
      name: "output",
      dataType: "String",
      dataTypeDisabled: !0,
      deleteDisabled: !0
    });
  }), Pn(e, dt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (a) => {
        var l = Rx();
        H(a, l);
      },
      children: (a, l) => {
        var u = Bx(), c = ye(u), d = j(c);
        Ge(d, {
          level: 3,
          children: (C, N) => {
            Pe();
            var V = Re("输入参数");
            H(C, V);
          },
          $$slots: { default: !0 }
        });
        var f = A(d, 2);
        je(f, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (C, N) => {
            var V = Zx();
            H(C, V);
          },
          $$slots: { default: !0 }
        }), K(c);
        var h = A(c, 2);
        qt(h, {});
        var p = A(h, 2);
        Ge(p, {
          level: 3,
          mt: "10px",
          children: (C, N) => {
            Pe();
            var V = Re("代码");
            H(C, V);
          },
          $$slots: { default: !0 }
        });
        var b = A(p, 4), x = j(b);
        const k = /* @__PURE__ */ Me(() => n().template || "");
        Ht(x, {
          rows: 10,
          placeholder: "请输入执行代码",
          style: "width: 100%",
          onchange: (C) => {
            s(o, () => ({ template: C.target.value }));
          },
          get value() {
            return g(k);
          }
        }), K(b);
        var v = A(b, 2), $ = j(v);
        Ge($, {
          level: 3,
          mt: "10px",
          children: (C, N) => {
            Pe();
            var V = Re("输出参数");
            H(C, V);
          },
          $$slots: { default: !0 }
        }), K(v);
        var w = A(v, 2);
        gr(w, {}), H(a, u);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue({
    get data() {
      return n();
    },
    set data(a) {
      n(a), m();
    }
  });
}
re(Eh, { data: {} }, [], [], !0);
var Kx = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), Yx = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Wx = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), jx = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Fx = /* @__PURE__ */ ne('<div class="heading svelte-1vtcqdz" style="padding-top: 10px"><!> <!></div> <!>', 1), qx = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Gx = /* @__PURE__ */ ne('<div class="heading svelte-1vtcqdz" style="padding-top: 10px"><!> <!></div> <!>', 1), Ux = /* @__PURE__ */ ne('<div style="width: 100%"><!></div>'), Jx = /* @__PURE__ */ ne('<div style="width: 100%"><!></div>'), Qx = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), e5 = /* @__PURE__ */ ne('<div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-1vtcqdz"><!> <!></div> <!> <div class="heading svelte-1vtcqdz" style="padding-top: 10px"><!> <!></div> <!> <!> <div class="radio-group svelte-1vtcqdz"><label class="svelte-1vtcqdz"><!>none</label> <label class="svelte-1vtcqdz"><!>form-data</label> <label class="svelte-1vtcqdz"><!>x-www-form-urlencoded</label> <label class="svelte-1vtcqdz"><!>json</label> <label class="svelte-1vtcqdz"><!>raw</label></div> <!> <!> <!> <!> <div class="heading svelte-1vtcqdz"><!> <!></div> <!>', 1);
const t5 = {
  hash: "svelte-1vtcqdz",
  code: ".heading.svelte-1vtcqdz {display:flex;margin-bottom:10px;}.radio-group.svelte-1vtcqdz {display:flex;margin:10px 0;}.radio-group.svelte-1vtcqdz label:where(.svelte-1vtcqdz) {display:flex;font-size:14px;}"
};
function Nh(e, t) {
  le(t, !0), Qe(e, t5);
  const n = y(t, "data", 7), r = /* @__PURE__ */ St(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = bt(), { addParameter: i } = Gn(), { updateNodeData: s } = Kt();
  return Pn(e, dt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (a) => {
        var l = Kx();
        H(a, l);
      },
      children: (a, l) => {
        var u = e5(), c = ye(u), d = j(c), f = j(d);
        $n(f, {
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
        }), K(d);
        var h = A(d, 2), p = j(h);
        _t(p, { placeholder: "请输入url", style: "width: 100%" }), K(h), K(c);
        var b = A(c, 2), x = j(b);
        Ge(x, {
          level: 3,
          children: (Y, he) => {
            Pe();
            var ge = Re("Http 头信息");
            H(Y, ge);
          },
          $$slots: { default: !0 }
        });
        var k = A(x, 2);
        je(k, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "headers");
          },
          children: (Y, he) => {
            var ge = Yx();
            H(Y, ge);
          },
          $$slots: { default: !0 }
        }), K(b);
        var v = A(b, 2);
        qt(v, { dataKeyName: "headers" });
        var $ = A(v, 2), w = j($);
        Ge(w, {
          level: 3,
          children: (Y, he) => {
            Pe();
            var ge = Re("参数");
            H(Y, ge);
          },
          $$slots: { default: !0 }
        });
        var C = A(w, 2);
        je(C, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "urlParameters");
          },
          children: (Y, he) => {
            var ge = Wx();
            H(Y, ge);
          },
          $$slots: { default: !0 }
        }), K($);
        var N = A($, 2);
        qt(N, { dataKeyName: "urlParameters" });
        var V = A(N, 2);
        Ge(V, {
          level: 3,
          mt: "10px",
          children: (Y, he) => {
            Pe();
            var ge = Re("Body");
            H(Y, ge);
          },
          $$slots: { default: !0 }
        });
        var P = A(V, 2), O = j(P), T = j(O);
        const L = /* @__PURE__ */ Me(() => !n().bodyType);
        _t(T, {
          type: "radio",
          name: "bodyType",
          value: "",
          get checked() {
            return g(L);
          },
          onchange: (Y) => {
            var he;
            (he = Y.target) != null && he.checked && s(o, { bodyType: "" });
          }
        }), Pe(), K(O);
        var I = A(O, 2), B = j(I);
        const S = /* @__PURE__ */ Me(() => n().bodyType === "form-data");
        _t(B, {
          type: "radio",
          name: "bodyType",
          value: "form-data",
          get checked() {
            return g(S);
          },
          onchange: (Y) => {
            var he;
            (he = Y.target) != null && he.checked && s(o, { bodyType: "form-data" });
          }
        }), Pe(), K(I);
        var M = A(I, 2), _ = j(M);
        const E = /* @__PURE__ */ Me(() => n().bodyType === "x-www-form-urlencoded");
        _t(_, {
          type: "radio",
          name: "bodyType",
          value: "x-www-form-urlencoded",
          get checked() {
            return g(E);
          },
          onchange: (Y) => {
            var he;
            (he = Y.target) != null && he.checked && s(o, { bodyType: "x-www-form-urlencoded" });
          }
        }), Pe(), K(M);
        var D = A(M, 2), z = j(D);
        const Z = /* @__PURE__ */ Me(() => n().bodyType === "json");
        _t(z, {
          type: "radio",
          name: "bodyType",
          value: "json",
          get checked() {
            return g(Z);
          },
          onchange: (Y) => {
            var he;
            (he = Y.target) != null && he.checked && s(o, { bodyType: "json" });
          }
        }), Pe(), K(D);
        var W = A(D, 2), q = j(W);
        const fe = /* @__PURE__ */ Me(() => n().bodyType === "raw");
        _t(q, {
          type: "radio",
          name: "bodyType",
          value: "raw",
          get checked() {
            return g(fe);
          },
          onchange: (Y) => {
            var he;
            (he = Y.target) != null && he.checked && s(o, { bodyType: "raw" });
          }
        }), Pe(), K(W), K(P);
        var Q = A(P, 2);
        {
          var X = (Y) => {
            var he = Fx(), ge = ye(he), Ee = j(ge);
            Ge(Ee, {
              level: 3,
              children: (Ye, We) => {
                Pe();
                var ot = Re("参数");
                H(Ye, ot);
              },
              $$slots: { default: !0 }
            });
            var st = A(Ee, 2);
            je(st, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                i(o, "fromData");
              },
              children: (Ye, We) => {
                var ot = jx();
                H(Ye, ot);
              },
              $$slots: { default: !0 }
            }), K(ge);
            var Te = A(ge, 2);
            qt(Te, { dataKeyName: "fromData" }), H(Y, he);
          };
          Ce(Q, (Y) => {
            n().bodyType === "form-data" && Y(X);
          });
        }
        var de = A(Q, 2);
        {
          var be = (Y) => {
            var he = Gx(), ge = ye(he), Ee = j(ge);
            Ge(Ee, {
              level: 3,
              children: (Ye, We) => {
                Pe();
                var ot = Re("参数");
                H(Ye, ot);
              },
              $$slots: { default: !0 }
            });
            var st = A(Ee, 2);
            je(st, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                i(o, "fromUrlencoded");
              },
              children: (Ye, We) => {
                var ot = qx();
                H(Ye, ot);
              },
              $$slots: { default: !0 }
            }), K(ge);
            var Te = A(ge, 2);
            qt(Te, { dataKeyName: "fromUrlencoded" }), H(Y, he);
          };
          Ce(de, (Y) => {
            n().bodyType === "x-www-form-urlencoded" && Y(be);
          });
        }
        var xe = A(de, 2);
        {
          var ve = (Y) => {
            var he = Ux(), ge = j(he);
            Ht(ge, {
              rows: "5",
              style: "width: 100%",
              placeholder: "请输入 json 信息",
              get value() {
                return n().bodyJson;
              },
              oninput: (Ee) => {
                s(o, { bodyJson: Ee.target.value });
              }
            }), K(he), H(Y, he);
          };
          Ce(xe, (Y) => {
            n().bodyType === "json" && Y(ve);
          });
        }
        var oe = A(xe, 2);
        {
          var ce = (Y) => {
            var he = Jx(), ge = j(he);
            Ht(ge, {
              rows: "5",
              style: "width: 100%",
              placeholder: "请输入请求信息",
              get value() {
                return n().bodyRaw;
              },
              oninput: (Ee) => {
                s(o, { bodyRaw: Ee.target.value });
              }
            }), K(he), H(Y, he);
          };
          Ce(oe, (Y) => {
            n().bodyType === "raw" && Y(ce);
          });
        }
        var Ae = A(oe, 2), Fe = j(Ae);
        Ge(Fe, {
          level: 3,
          mt: "10px",
          children: (Y, he) => {
            Pe();
            var ge = Re("输出参数");
            H(Y, ge);
          },
          $$slots: { default: !0 }
        });
        var Ze = A(Fe, 2);
        je(Ze, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (Y, he) => {
            var ge = Qx();
            H(Y, ge);
          },
          $$slots: { default: !0 }
        }), K(Ae);
        var Ke = A(Ae, 2);
        gr(Ke, {}), H(a, u);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue({
    get data() {
      return n();
    },
    set data(a) {
      n(a), m();
    }
  });
}
re(Nh, { data: {} }, [], [], !0);
var n5 = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>'), r5 = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), o5 = /* @__PURE__ */ ne('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">知识库</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">获取数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const i5 = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Ph(e, t) {
  le(t, !0), Qe(e, i5);
  const n = y(t, "data", 7), r = /* @__PURE__ */ St(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = bt(), { addParameter: i } = Gn(), s = Is();
  let a = Gr(It([]));
  En(async () => {
    var u;
    const c = await ((u = s.provider) == null ? void 0 : u.knowledge());
    g(a).push(...c || []);
  });
  const { updateNodeData: l } = Kt();
  return Ur(() => {
    (!n().outputDefs || n().outputDefs.length === 0) && i(o, "outputDefs", {
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
  }), Pn(e, dt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var c = n5();
        H(u, c);
      },
      children: (u, c) => {
        var d = o5(), f = ye(d), h = j(f);
        Ge(h, {
          level: 3,
          children: (O, T) => {
            Pe();
            var L = Re("输入参数");
            H(O, L);
          },
          $$slots: { default: !0 }
        });
        var p = A(h, 2);
        je(p, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (O, T) => {
            var L = r5();
            H(O, L);
          },
          $$slots: { default: !0 }
        }), K(f);
        var b = A(f, 2);
        qt(b, {});
        var x = A(b, 2);
        Ge(x, {
          level: 3,
          mt: "10px",
          children: (O, T) => {
            Pe();
            var L = Re("知识库设置");
            H(O, L);
          },
          $$slots: { default: !0 }
        });
        var k = A(x, 4), v = j(k);
        const $ = /* @__PURE__ */ Me(() => n().knowledgeId ? [n().knowledgeId] : []);
        $n(v, {
          get items() {
            return g(a);
          },
          style: "width: 100%",
          placeholder: "请选择知识库",
          onSelect: (O) => {
            const T = O.value;
            l(o, () => ({ knowledgeId: T }));
          },
          get value() {
            return g($);
          }
        }), K(k);
        var w = A(k, 4), C = j(w);
        _t(C, { placeholder: "搜索的数据条数", style: "width: 100%" }), K(w);
        var N = A(w, 2), V = j(N);
        Ge(V, {
          level: 3,
          mt: "10px",
          children: (O, T) => {
            Pe();
            var L = Re("输出参数");
            H(O, L);
          },
          $$slots: { default: !0 }
        }), K(N);
        var P = A(N, 2);
        gr(P, {}), H(u, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue({
    get data() {
      return n();
    },
    set data(u) {
      n(u), m();
    }
  });
}
re(Ph, { data: {} }, [], [], !0);
var s5 = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>'), a5 = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), l5 = /* @__PURE__ */ ne('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">API 服务商</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">API Key</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">其他参数</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const u5 = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Mh(e, t) {
  le(t, !0), Qe(e, u5);
  const n = y(t, "data", 7), r = /* @__PURE__ */ St(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = bt(), { addParameter: i } = Gn(), s = Is();
  let a = Gr(It([]));
  En(async () => {
    var u;
    const c = await ((u = s.provider) == null ? void 0 : u.knowledge());
    g(a).push(...c || []);
  });
  const { updateNodeData: l } = Kt();
  return Ur(() => {
    (!n().outputDefs || n().outputDefs.length === 0) && i(o, "outputDefs", {
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
  }), Pn(e, dt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var c = s5();
        H(u, c);
      },
      children: (u, c) => {
        var d = l5(), f = ye(d), h = j(f);
        Ge(h, {
          level: 3,
          children: (M, _) => {
            Pe();
            var E = Re("输入参数");
            H(M, E);
          },
          $$slots: { default: !0 }
        });
        var p = A(h, 2);
        je(p, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (M, _) => {
            var E = a5();
            H(M, E);
          },
          $$slots: { default: !0 }
        }), K(f);
        var b = A(f, 2);
        qt(b, {});
        var x = A(b, 2);
        Ge(x, {
          level: 3,
          mt: "10px",
          children: (M, _) => {
            Pe();
            var E = Re("搜索引擎设置");
            H(M, E);
          },
          $$slots: { default: !0 }
        });
        var k = A(x, 4), v = j(k);
        const $ = /* @__PURE__ */ Me(() => n().knowledgeId ? [n().knowledgeId] : []);
        $n(v, {
          get items() {
            return g(a);
          },
          style: "width: 100%",
          placeholder: "请选择 API 服务商",
          onSelect: (M) => {
            const _ = M.value;
            l(o, () => ({ knowledgeId: _ }));
          },
          get value() {
            return g($);
          }
        }), K(k);
        var w = A(k, 4), C = j(w);
        _t(C, {
          placeholder: "请输入 API Key",
          style: "width: 100%"
        }), K(w);
        var N = A(w, 4), V = j(N);
        _t(V, { placeholder: "请输入关键字", style: "width: 100%" }), K(N);
        var P = A(N, 4), O = j(P);
        _t(O, { placeholder: "搜索的数据条数", style: "width: 100%" }), K(P);
        var T = A(P, 4), L = j(T);
        Ht(L, {
          rows: 3,
          placeholder: "请输入其他参数（Property 格式）",
          style: "width: 100%"
        }), K(T);
        var I = A(T, 2), B = j(I);
        Ge(B, {
          level: 3,
          mt: "10px",
          children: (M, _) => {
            Pe();
            var E = Re("输出参数");
            H(M, E);
          },
          $$slots: { default: !0 }
        }), K(I);
        var S = A(I, 2);
        gr(S, {}), H(u, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue({
    get data() {
      return n();
    },
    set data(u) {
      n(u), m();
    }
  });
}
re(Mh, { data: {} }, [], [], !0);
var c5 = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>'), d5 = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), f5 = /* @__PURE__ */ ne('<div class="heading svelte-md8tgj"><!> <!></div> <!> <div class="heading svelte-md8tgj"><!></div> <!>', 1);
const h5 = {
  hash: "svelte-md8tgj",
  code: ".heading.svelte-md8tgj {display:flex;margin-bottom:10px;}.loop_handle_wrapper ::after {content:'循环体';width:100px;height:20px;background:#000;color:#fff;display:flex;justify-content:center;align-items:center;}"
};
function Vh(e, t) {
  le(t, !0), Qe(e, h5);
  const n = y(t, "data", 7), r = /* @__PURE__ */ St(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = bt(), { addParameter: i } = Gn(), s = Is();
  let a = Gr(It([]));
  return En(async () => {
    var l;
    const u = await ((l = s.provider) == null ? void 0 : l.knowledge());
    g(a).push(...u || []);
  }), Pn(e, dt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = c5();
        H(l, u);
      },
      handle: (l) => {
        dr(l, {
          type: "source",
          get position() {
            return _e.Bottom;
          },
          id: "loop_handle",
          style: "bottom: -12px;width: 100px",
          class: "loop_handle_wrapper"
        });
      },
      children: (l, u) => {
        var c = f5(), d = ye(c), f = j(d);
        Ge(f, {
          level: 3,
          children: (v, $) => {
            Pe();
            var w = Re("循环变量");
            H(v, w);
          },
          $$slots: { default: !0 }
        });
        var h = A(f, 2);
        je(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (v, $) => {
            var w = d5();
            H(v, w);
          },
          $$slots: { default: !0 }
        }), K(d);
        var p = A(d, 2);
        qt(p, {});
        var b = A(p, 2), x = j(b);
        Ge(x, {
          level: 3,
          mt: "10px",
          children: (v, $) => {
            Pe();
            var w = Re("输出参数");
            H(v, w);
          },
          $$slots: { default: !0 }
        }), K(b);
        var k = A(b, 2);
        gr(k, {}), H(l, c);
      },
      $$slots: { icon: !0, handle: !0, default: !0 }
    }
  )), ue({
    get data() {
      return n();
    },
    set data(l) {
      n(l), m();
    }
  });
}
re(Vh, { data: {} }, [], [], !0);
const g5 = {
  startNode: bh,
  codeNode: Sh,
  llmNode: kh,
  templateNode: Eh,
  httpNode: Nh,
  knowledgeNode: Ph,
  searchEngineNode: Mh,
  loopNode: Vh,
  endNode: _h
};
var p5 = /* @__PURE__ */ ne("<!> ", 1);
function Oh(e, t) {
  le(t, !0);
  const n = y(t, "icon", 7), r = y(t, "title", 7), o = y(t, "type", 7), i = y(t, "description", 7), s = y(t, "extra", 7);
  return je(e, {
    draggable: !0,
    ondragstart: (a) => {
      if (!a.dataTransfer)
        return null;
      const l = {
        type: o(),
        data: {
          title: r(),
          description: i(),
          extra: s()
        }
      };
      a.dataTransfer.setData("application/tinyflow", JSON.stringify(l)), a.dataTransfer.effectAllowed = "move";
    },
    children: (a, l) => {
      var u = p5(), c = ye(u);
      ud(c, n);
      var d = A(c);
      Se(() => kn(d, ` ${r() ?? ""}`)), H(a, u);
    },
    $$slots: { default: !0 }
  }), ue({
    get icon() {
      return n();
    },
    set icon(a) {
      n(a), m();
    },
    get title() {
      return r();
    },
    set title(a) {
      r(a), m();
    },
    get type() {
      return o();
    },
    set type(a) {
      o(a), m();
    },
    get description() {
      return i();
    },
    set description(a) {
      i(a), m();
    },
    get extra() {
      return s();
    },
    set extra(a) {
      s(a), m();
    }
  });
}
re(
  Oh,
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
var v5 = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), m5 = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), y5 = /* @__PURE__ */ ne('<div><div class="tf-toolbar-container "><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"><!></div></div></div> <!></div>');
function Dh(e) {
  let t = Gr("base"), n = Gr("show");
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
  var i = y5(), s = j(i), a = j(s), l = j(a);
  nh(l, {
    style: "width: 100%",
    items: o,
    onChange: (p) => {
      U(t, It(p.value.toString()));
    }
  }), K(a);
  var u = A(a, 2), c = j(u);
  Bt(c, 21, () => r, $s, (p, b) => {
    Oh(p, dt(() => g(b)));
  }), K(c);
  var d = A(c, 2), f = j(d);
  je(f, {
    children: (p, b) => {
      Pe();
      var x = Re("测试业务按钮");
      H(p, x);
    },
    $$slots: { default: !0 }
  }), K(d), K(u), K(s);
  var h = A(s, 2);
  je(h, {
    onclick: () => {
      U(n, It(g(n) ? "" : "show"));
    },
    children: (p, b) => {
      var x = Je(), k = ye(x);
      {
        var v = (w) => {
          var C = v5();
          H(w, C);
        }, $ = (w) => {
          var C = m5();
          H(w, C);
        };
        Ce(k, (w) => {
          g(n) === "show" ? w(v) : w($, !1);
        });
      }
      H(p, x);
    },
    $$slots: { default: !0 }
  }), K(i), Se(() => {
    eo(i, `tf-toolbar ${g(n) ?? ""}`), se(c, "style", `display: ${(g(t) === "base" ? "flex" : "none") ?? ""}`), se(d, "style", `display: ${(g(t) !== "base" ? "flex" : "none") ?? ""}`);
  }), H(e, i);
}
re(Dh, {}, [], [], !0);
var w5 = /* @__PURE__ */ ne("<!> <!> <!>", 1), b5 = /* @__PURE__ */ ne('<div style="position: relative; height: 100%; width: 100%"><!> <!></div>');
function Th(e, t) {
  le(t, !0);
  const n = y(t, "onInit", 7), r = Kt();
  n()(r);
  const o = (c) => {
    c.preventDefault(), c.dataTransfer && (c.dataTransfer.dropEffect = "move");
  }, i = (c) => {
    var d;
    c.preventDefault();
    const f = r.screenToFlowPosition({
      x: c.clientX - 250,
      y: c.clientY - 100
    }), h = (d = c.dataTransfer) == null ? void 0 : d.getData("application/tinyflow"), p = h ? JSON.parse(h) : {}, b = {
      id: `node_${lo()}`,
      position: f,
      data: {},
      ...p
    };
    Pi.addNode(b), Pi.selectNodeOnly(b.id);
  };
  var s = b5(), a = j(s);
  Dh(a);
  var l = A(a, 2);
  const u = /* @__PURE__ */ Me(() => ({
    // animated: true,
    // label: 'edge label',
    markerEnd: {
      type: Ro.ArrowClosed,
      // color: 'red',
      width: 20,
      height: 20
    }
  }));
  return Zf(l, dt({ nodeTypes: g5 }, Pi, {
    class: "tinyflow-logo",
    get defaultEdgeOptions() {
      return g(u);
    },
    $$events: { drop: i, dragover: o },
    children: (c, d) => {
      var f = w5(), h = ye(f);
      Uf(h, {});
      var p = A(h, 2);
      Ff(p, {});
      var b = A(p, 2);
      Qf(b, {}), H(c, f);
    },
    $$slots: { default: !0 }
  })), K(s), H(e, s), ue({
    get onInit() {
      return n();
    },
    set onInit(c) {
      n(c), m();
    }
  });
}
re(Th, { onInit: {} }, [], [], !0);
function x5(e, t) {
  le(t, !0);
  const n = y(t, "options", 7), r = y(t, "onInit", 7), { data: o } = n();
  return Pi.init(o.nodes || [], o.edges || []), Qr("tinyflow_options", n()), Bf(e, {
    fitView: !0,
    children: (i, s) => {
      Th(i, {
        get onInit() {
          return r();
        }
      });
    },
    $$slots: { default: !0 }
  }), ue({
    get options() {
      return n();
    },
    set options(i) {
      n(i), m();
    },
    get onInit() {
      return r();
    },
    set onInit(i) {
      r(i), m();
    }
  });
}
customElements.define("tinyflow-component", re(x5, { options: {}, onInit: {} }, [], [], !1));
const E5 = /* @__PURE__ */ W1({
  __name: "Tinyflow",
  props: {
    className: {},
    style: {},
    data: {}
  },
  setup(e, { expose: t }) {
    const n = e, r = k1(null);
    let o = null;
    return F1(() => {
      r.value && (o = new Dw({
        element: r.value,
        data: n.data || {}
      }));
    }), q1(() => {
      o && (o.destroy(), o = null);
    }), t({
      getData: () => o ? o.getData() : (console.warn("Tinyflow instance is not initialized"), null)
    }), (s, a) => (ng(), ig("div", {
      ref_key: "divRef",
      ref: r,
      class: cs(["tinyflow", s.className]),
      style: us(s.style)
    }, null, 6));
  }
});
export {
  E5 as Tinyflow
};
//# sourceMappingURL=index.js.map
