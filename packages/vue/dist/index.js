/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Xh(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const ta = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, Wh = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], Xu = () => {
}, Fh = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), _r = Object.assign, jh = Object.prototype.hasOwnProperty, na = (e, t) => jh.call(e, t), mt = Array.isArray, _o = (e) => Wu(e) === "[object Map]", Xt = (e) => typeof e == "function", An = (e) => typeof e == "string", Bo = (e) => typeof e == "symbol", Wt = (e) => e !== null && typeof e == "object", qh = (e) => (Wt(e) || Xt(e)) && Xt(e.then) && Xt(e.catch), Gh = Object.prototype.toString, Wu = (e) => Gh.call(e), Fu = (e) => Wu(e).slice(8, -1), Ha = (e) => An(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ju = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, qu = ju((e) => e.charAt(0).toUpperCase() + e.slice(1)), Uh = ju(
  (e) => e ? `on${qu(e)}` : ""
), Ta = (e, t) => !Object.is(e, t);
let zl;
const as = () => zl || (zl = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function ls(e) {
  if (mt(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], o = An(r) ? tg(r) : ls(r);
      if (o)
        for (const i in o)
          t[i] = o[i];
    }
    return t;
  } else if (An(e) || Wt(e))
    return e;
}
const Jh = /;(?![^(]*\))/g, Qh = /:([^]+)/, eg = /\/\*[^]*?\*\//g;
function tg(e) {
  const t = {};
  return e.replace(eg, "").split(Jh).forEach((n) => {
    if (n) {
      const r = n.split(Qh);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function us(e) {
  let t = "";
  if (An(e))
    t = e;
  else if (mt(e))
    for (let n = 0; n < e.length; n++) {
      const r = us(e[n]);
      r && (t += r + " ");
    }
  else if (Wt(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Co(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let Gu = 0, As;
function La() {
  Gu++;
}
function Da() {
  if (--Gu > 0)
    return;
  let e;
  for (; As; ) {
    let t = As;
    for (As = void 0; t; ) {
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
class ng {
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
            _r(
              {
                effect: n.sub
              },
              t
            )
          );
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Da();
    }
  }
}
const rg = /* @__PURE__ */ new WeakMap(), Is = Symbol(
  process.env.NODE_ENV !== "production" ? "Object iterate" : ""
), Hl = Symbol(
  process.env.NODE_ENV !== "production" ? "Map keys iterate" : ""
), Tl = Symbol(
  process.env.NODE_ENV !== "production" ? "Array iterate" : ""
);
function Un(e, t, n, r, o, i) {
  const s = rg.get(e);
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
    const l = mt(e), u = l && Ha(n);
    if (l && n === "length") {
      const c = Number(r);
      s.forEach((d, f) => {
        (f === "length" || f === Tl || !Bo(f) && f >= c) && a(d);
      });
    } else
      switch ((n !== void 0 || s.has(void 0)) && a(s.get(n)), u && a(s.get(Tl)), t) {
        case "add":
          l ? u && a(s.get("length")) : (a(s.get(Is)), _o(e) && a(s.get(Hl)));
          break;
        case "delete":
          l || (a(s.get(Is)), _o(e) && a(s.get(Hl)));
          break;
        case "set":
          _o(e) && a(s.get(Is));
          break;
      }
  }
  Da();
}
function Mr(e) {
  const t = Le(e);
  return t === e || on(e) ? t : t.map(bt);
}
function Aa(e) {
  return e = Le(e), e;
}
const og = {
  __proto__: null,
  [Symbol.iterator]() {
    return Rs(this, Symbol.iterator, bt);
  },
  concat(...e) {
    return Mr(this).concat(
      ...e.map((t) => mt(t) ? Mr(t) : t)
    );
  },
  entries() {
    return Rs(this, "entries", (e) => (e[1] = bt(e[1]), e));
  },
  every(e, t) {
    return En(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return En(this, "filter", e, t, (n) => n.map(bt), arguments);
  },
  find(e, t) {
    return En(this, "find", e, t, bt, arguments);
  },
  findIndex(e, t) {
    return En(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return En(this, "findLast", e, t, bt, arguments);
  },
  findLastIndex(e, t) {
    return En(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return En(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Zs(this, "includes", e);
  },
  indexOf(...e) {
    return Zs(this, "indexOf", e);
  },
  join(e) {
    return Mr(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return Zs(this, "lastIndexOf", e);
  },
  map(e, t) {
    return En(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return go(this, "pop");
  },
  push(...e) {
    return go(this, "push", e);
  },
  reduce(e, ...t) {
    return Ll(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Ll(this, "reduceRight", e, t);
  },
  shift() {
    return go(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return En(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return go(this, "splice", e);
  },
  toReversed() {
    return Mr(this).toReversed();
  },
  toSorted(e) {
    return Mr(this).toSorted(e);
  },
  toSpliced(...e) {
    return Mr(this).toSpliced(...e);
  },
  unshift(...e) {
    return go(this, "unshift", e);
  },
  values() {
    return Rs(this, "values", bt);
  }
};
function Rs(e, t, n) {
  const r = Aa(e), o = r[t]();
  return r !== e && !on(e) && (o._next = o.next, o.next = () => {
    const i = o._next();
    return i.value && (i.value = n(i.value)), i;
  }), o;
}
const ig = Array.prototype;
function En(e, t, n, r, o, i) {
  const s = Aa(e), a = s !== e && !on(e), l = s[t];
  if (l !== ig[t]) {
    const d = l.apply(e, i);
    return a ? bt(d) : d;
  }
  let u = n;
  s !== e && (a ? u = function(d, f) {
    return n.call(this, bt(d), f, e);
  } : n.length > 2 && (u = function(d, f) {
    return n.call(this, d, f, e);
  }));
  const c = l.call(s, u, r);
  return a && o ? o(c) : c;
}
function Ll(e, t, n, r) {
  const o = Aa(e);
  let i = n;
  return o !== e && (on(e) ? n.length > 3 && (i = function(s, a, l) {
    return n.call(this, s, a, l, e);
  }) : i = function(s, a, l) {
    return n.call(this, s, bt(a), l, e);
  }), o[t](i, ...r);
}
function Zs(e, t, n) {
  const r = Le(e), o = r[t](...n);
  return (o === -1 || o === !1) && Ni(n[0]) ? (n[0] = Le(n[0]), r[t](...n)) : o;
}
function go(e, t, n = []) {
  La();
  const r = Le(e)[t].apply(e, n);
  return Da(), r;
}
const sg = /* @__PURE__ */ Xh("__proto__,__v_isRef,__isVue"), Uu = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Bo)
);
function ag(e) {
  return Bo(e) || (e = String(e)), Le(this).hasOwnProperty(e);
}
class Ju {
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
      return r === (o ? i ? mg : tc : i ? vg : ec).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const s = mt(t);
    if (!o) {
      let l;
      if (s && (l = og[n]))
        return l;
      if (n === "hasOwnProperty")
        return ag;
    }
    const a = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Hn(t) ? t : r
    );
    return (Bo(n) ? Uu.has(n) : sg(n)) || i ? a : Hn(a) ? s && Ha(n) ? a : a.value : Wt(a) ? o ? rc(a) : nc(a) : a;
  }
}
class lg extends Ju {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, o) {
    let i = t[n];
    if (!this._isShallow) {
      const l = In(i);
      if (!on(r) && !In(r) && (i = Le(i), r = Le(r)), !mt(t) && Hn(i) && !Hn(r))
        return l ? !1 : (i.value = r, !0);
    }
    const s = mt(t) && Ha(n) ? Number(n) < t.length : na(t, n), a = Reflect.set(
      t,
      n,
      r,
      Hn(t) ? t : o
    );
    return t === Le(o) && (s ? Ta(r, i) && Un(t, "set", n, r, i) : Un(t, "add", n, r)), a;
  }
  deleteProperty(t, n) {
    const r = na(t, n), o = t[n], i = Reflect.deleteProperty(t, n);
    return i && r && Un(t, "delete", n, void 0, o), i;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return !Bo(n) || Uu.has(n), r;
  }
  ownKeys(t) {
    return Reflect.ownKeys(t);
  }
}
class ug extends Ju {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return process.env.NODE_ENV !== "production" && Co(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return process.env.NODE_ENV !== "production" && Co(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const cg = /* @__PURE__ */ new lg(), dg = /* @__PURE__ */ new ug(), ra = (e) => e, ai = (e) => Reflect.getPrototypeOf(e);
function fg(e, t, n) {
  return function(...r) {
    const o = this.__v_raw, i = Le(o), s = _o(i), a = e === "entries" || e === Symbol.iterator && s, l = o[e](...r), u = n ? ra : t ? oa : bt;
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
function li(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      Co(
        `${qu(e)} operation ${n}failed: target is readonly.`,
        Le(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function hg(e, t) {
  const n = {
    get(o) {
      const i = this.__v_raw, s = Le(i), a = Le(o), { has: l } = ai(s), u = t ? ra : e ? oa : bt;
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
      const l = t ? ra : e ? oa : bt;
      return a.forEach((u, c) => o.call(i, l(u), l(c), s));
    }
  };
  return _r(
    n,
    e ? {
      add: li("add"),
      set: li("set"),
      delete: li("delete"),
      clear: li("clear")
    } : {
      add(o) {
        !t && !on(o) && !In(o) && (o = Le(o));
        const i = Le(this);
        return ai(i).has.call(i, o) || (i.add(o), Un(i, "add", o, o)), this;
      },
      set(o, i) {
        !t && !on(i) && !In(i) && (i = Le(i));
        const s = Le(this), { has: a, get: l } = ai(s);
        let u = a.call(s, o);
        u ? process.env.NODE_ENV !== "production" && Dl(s, a, o) : (o = Le(o), u = a.call(s, o));
        const c = l.call(s, o);
        return s.set(o, i), u ? Ta(i, c) && Un(s, "set", o, i, c) : Un(s, "add", o, i), this;
      },
      delete(o) {
        const i = Le(this), { has: s, get: a } = ai(i);
        let l = s.call(i, o);
        l ? process.env.NODE_ENV !== "production" && Dl(i, s, o) : (o = Le(o), l = s.call(i, o));
        const u = a ? a.call(i, o) : void 0, c = i.delete(o);
        return l && Un(i, "delete", o, void 0, u), c;
      },
      clear() {
        const o = Le(this), i = o.size !== 0, s = process.env.NODE_ENV !== "production" ? _o(o) ? new Map(o) : new Set(o) : void 0, a = o.clear();
        return i && Un(
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
    n[o] = fg(o, e, t);
  }), n;
}
function Qu(e, t) {
  const n = hg(e, t);
  return (r, o, i) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? r : Reflect.get(
    na(n, o) && o in r ? n : r,
    o,
    i
  );
}
const gg = {
  get: /* @__PURE__ */ Qu(!1, !1)
}, pg = {
  get: /* @__PURE__ */ Qu(!0, !1)
};
function Dl(e, t, n) {
  const r = Le(n);
  if (r !== n && t.call(e, r)) {
    const o = Fu(e);
    Co(
      `Reactive ${o} contains both the raw and reactive versions of the same object${o === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const ec = /* @__PURE__ */ new WeakMap(), vg = /* @__PURE__ */ new WeakMap(), tc = /* @__PURE__ */ new WeakMap(), mg = /* @__PURE__ */ new WeakMap();
function yg(e) {
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
function wg(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : yg(Fu(e));
}
function nc(e) {
  return In(e) ? e : oc(
    e,
    !1,
    cg,
    gg,
    ec
  );
}
function rc(e) {
  return oc(
    e,
    !0,
    dg,
    pg,
    tc
  );
}
function oc(e, t, n, r, o) {
  if (!Wt(e))
    return process.env.NODE_ENV !== "production" && Co(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = o.get(e);
  if (i)
    return i;
  const s = wg(e);
  if (s === 0)
    return e;
  const a = new Proxy(
    e,
    s === 2 ? r : n
  );
  return o.set(e, a), a;
}
function ic(e) {
  return In(e) ? ic(e.__v_raw) : !!(e && e.__v_isReactive);
}
function In(e) {
  return !!(e && e.__v_isReadonly);
}
function on(e) {
  return !!(e && e.__v_isShallow);
}
function Ni(e) {
  return e ? !!e.__v_raw : !1;
}
function Le(e) {
  const t = e && e.__v_raw;
  return t ? Le(t) : e;
}
const bt = (e) => Wt(e) ? nc(e) : e, oa = (e) => Wt(e) ? rc(e) : e;
function Hn(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function bg(e) {
  return xg(e, !1);
}
function xg(e, t) {
  return Hn(e) ? e : new _g(e, t);
}
class _g {
  constructor(t, n) {
    this.dep = new ng(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : Le(t), this._value = n ? t : bt(t), this.__v_isShallow = n;
  }
  get value() {
    return process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || on(t) || In(t);
    t = r ? t : Le(t), Ta(t, n) && (this._rawValue = t, this._value = r ? t : bt(t), process.env.NODE_ENV !== "production" ? this.dep.trigger({
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
const gr = [];
function $g(e) {
  gr.push(e);
}
function Cg() {
  gr.pop();
}
let Bs = !1;
function or(e, ...t) {
  if (Bs) return;
  Bs = !0;
  const n = gr.length ? gr[gr.length - 1].component : null, r = n && n.appContext.config.warnHandler, o = kg();
  if (r)
    cs(
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
`, ...Sg(o)), console.warn(...i);
  }
  Bs = !1;
}
function kg() {
  let e = gr[gr.length - 1];
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
function Sg(e) {
  const t = [];
  return e.forEach((n, r) => {
    t.push(...r === 0 ? [] : [`
`], ...Eg(n));
  }), t;
}
function Eg({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", r = e.component ? e.component.parent == null : !1, o = ` at <${_c(
    e.component,
    e.type,
    r
  )}`, i = ">" + n;
  return e.props ? [o, ...Ng(e.props), i] : [o + i];
}
function Ng(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((r) => {
    t.push(...sc(r, e[r]));
  }), n.length > 3 && t.push(" ..."), t;
}
function sc(e, t, n) {
  return An(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : Hn(t) ? (t = sc(e, Le(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : Xt(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = Le(t), n ? t : [`${e}=`, t]);
}
const Ia = {
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
function cs(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (o) {
    Ra(o, t, n);
  }
}
function ac(e, t, n, r) {
  if (Xt(e)) {
    const o = cs(e, t, n, r);
    return o && qh(o) && o.catch((i) => {
      Ra(i, t, n);
    }), o;
  }
  if (mt(e)) {
    const o = [];
    for (let i = 0; i < e.length; i++)
      o.push(ac(e[i], t, n, r));
    return o;
  } else process.env.NODE_ENV !== "production" && or(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function Ra(e, t, n, r = !0) {
  const o = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: s } = t && t.appContext.config || ta;
  if (t) {
    let a = t.parent;
    const l = t.proxy, u = process.env.NODE_ENV !== "production" ? Ia[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
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
      cs(i, null, 10, [
        e,
        l,
        u
      ]);
      return;
    }
  }
  Pg(e, n, o, r, s);
}
function Pg(e, t, n, r = !0, o = !1) {
  if (process.env.NODE_ENV !== "production") {
    const i = Ia[t];
    if (n && $g(n), or(`Unhandled error${i ? ` during execution of ${i}` : ""}`), n && Cg(), r)
      throw e;
    console.error(e);
  } else {
    if (o)
      throw e;
    console.error(e);
  }
}
const Kt = [];
let Pn = -1;
const Ar = [];
let jn = null, Hr = 0;
const Og = /* @__PURE__ */ Promise.resolve();
let ia = null;
const Mg = 100;
function Vg(e) {
  let t = Pn + 1, n = Kt.length;
  for (; t < n; ) {
    const r = t + n >>> 1, o = Kt[r], i = ko(o);
    i < e || i === e && o.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function zg(e) {
  if (!(e.flags & 1)) {
    const t = ko(e), n = Kt[Kt.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= ko(n) ? Kt.push(e) : Kt.splice(Vg(t), 0, e), e.flags |= 1, lc();
  }
}
function lc() {
  ia || (ia = Og.then(uc));
}
function Hg(e) {
  mt(e) ? Ar.push(...e) : jn && e.id === -1 ? jn.splice(Hr + 1, 0, e) : e.flags & 1 || (Ar.push(e), e.flags |= 1), lc();
}
function Tg(e) {
  if (Ar.length) {
    const t = [...new Set(Ar)].sort(
      (n, r) => ko(n) - ko(r)
    );
    if (Ar.length = 0, jn) {
      jn.push(...t);
      return;
    }
    for (jn = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Hr = 0; Hr < jn.length; Hr++) {
      const n = jn[Hr];
      process.env.NODE_ENV !== "production" && cc(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    jn = null, Hr = 0;
  }
}
const ko = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function uc(e) {
  process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = process.env.NODE_ENV !== "production" ? (n) => cc(e, n) : Xu;
  try {
    for (Pn = 0; Pn < Kt.length; Pn++) {
      const n = Kt[Pn];
      if (n && !(n.flags & 8)) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), cs(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; Pn < Kt.length; Pn++) {
      const n = Kt[Pn];
      n && (n.flags &= -2);
    }
    Pn = -1, Kt.length = 0, Tg(e), ia = null, (Kt.length || Ar.length) && uc(e);
  }
}
function cc(e, t) {
  const n = e.get(t) || 0;
  if (n > Mg) {
    const r = t.i, o = r && xc(r.type);
    return Ra(
      `Maximum recursive updates exceeded${o ? ` in component <${o}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
const Ks = /* @__PURE__ */ new Map();
process.env.NODE_ENV !== "production" && (as().__VUE_HMR_RUNTIME__ = {
  createRecord: Ys(Lg),
  rerender: Ys(Dg),
  reload: Ys(Ag)
});
const Pi = /* @__PURE__ */ new Map();
function Lg(e, t) {
  return Pi.has(e) ? !1 : (Pi.set(e, {
    initialDef: Oi(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Oi(e) {
  return $c(e) ? e.__vccOpts : e;
}
function Dg(e, t) {
  const n = Pi.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((r) => {
    t && (r.render = t, Oi(r.type).render = t), r.renderCache = [], r.update();
  }));
}
function Ag(e, t) {
  const n = Pi.get(e);
  if (!n) return;
  t = Oi(t), Al(n.initialDef, t);
  const r = [...n.instances];
  for (let o = 0; o < r.length; o++) {
    const i = r[o], s = Oi(i.type);
    let a = Ks.get(s);
    a || (s !== n.initialDef && Al(s, t), Ks.set(s, a = /* @__PURE__ */ new Set())), a.add(i), i.appContext.propsCache.delete(i.type), i.appContext.emitsCache.delete(i.type), i.appContext.optionsCache.delete(i.type), i.ceReload ? (a.add(i), i.ceReload(t.styles), a.delete(i)) : i.parent ? zg(() => {
      i.parent.update(), a.delete(i);
    }) : i.appContext.reload ? i.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), i.root.ce && i !== i.root && i.root.ce._removeChildStyle(s);
  }
  Hg(() => {
    Ks.clear();
  });
}
function Al(e, t) {
  _r(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function Ys(e) {
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
let Tr, ui = [];
function dc(e, t) {
  var n, r;
  Tr = e, Tr ? (Tr.enabled = !0, ui.forEach(({ event: o, args: i }) => Tr.emit(o, ...i)), ui = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((r = (n = window.navigator) == null ? void 0 : n.userAgent) != null && r.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((i) => {
    dc(i, t);
  }), setTimeout(() => {
    Tr || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, ui = []);
  }, 3e3)) : ui = [];
}
let Mi = null, Ig = null;
const Rg = (e) => e.__isTeleport;
function fc(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, fc(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Zg(e, t) {
  return Xt(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    _r({ name: e.name }, t, { setup: e })
  ) : e;
}
as().requestIdleCallback;
as().cancelIdleCallback;
function Bg(e, t, n = ds, r = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...s) => {
      const a = ap(n), l = ac(t, n, e, s);
      return a(), l;
    });
    return r ? o.unshift(i) : o.push(i), i;
  } else if (process.env.NODE_ENV !== "production") {
    const o = Uh(Ia[e].replace(/ hook$/, ""));
    or(
      `${o} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const hc = (e) => (t, n = ds) => {
  (!bc || e === "sp") && Bg(e, (...r) => t(...r), n);
}, Kg = hc("m"), Yg = hc("um"), Xg = Symbol.for("v-ndc"), Wg = {};
process.env.NODE_ENV !== "production" && (Wg.ownKeys = (e) => (or(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
const Fg = {}, gc = (e) => Object.getPrototypeOf(e) === Fg, jg = (e) => e.__isSuspense, pc = Symbol.for("v-fgt"), qg = Symbol.for("v-txt"), Gg = Symbol.for("v-cmt"), mi = [];
let rn = null;
function Ug(e = !1) {
  mi.push(rn = e ? null : []);
}
function Jg() {
  mi.pop(), rn = mi[mi.length - 1] || null;
}
function Qg(e) {
  return e.dynamicChildren = rn || Wh, Jg(), rn && rn.push(e), e;
}
function ep(e, t, n, r, o, i) {
  return Qg(
    mc(
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
function tp(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
const np = (...e) => yc(
  ...e
), vc = ({ key: e }) => e ?? null, yi = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? An(e) || Hn(e) || Xt(e) ? { i: Mi, r: e, k: t, f: !!n } : e : null);
function mc(e, t = null, n = null, r = 0, o = null, i = e === pc ? 0 : 1, s = !1, a = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && vc(t),
    ref: t && yi(t),
    scopeId: Ig,
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
    ctx: Mi
  };
  return a ? (Za(l, n), i & 128 && e.normalize(l)) : n && (l.shapeFlag |= An(n) ? 8 : 16), process.env.NODE_ENV !== "production" && l.key !== l.key && or("VNode created with invalid key (NaN). VNode type:", l.type), // avoid a block node from tracking itself
  !s && // has current parent block
  rn && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && rn.push(l), l;
}
const rp = process.env.NODE_ENV !== "production" ? np : yc;
function yc(e, t = null, n = null, r = 0, o = null, i = !1) {
  if ((!e || e === Xg) && (process.env.NODE_ENV !== "production" && !e && or(`Invalid vnode type when creating vnode: ${e}.`), e = Gg), tp(e)) {
    const a = Vi(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Za(a, n), !i && rn && (a.shapeFlag & 6 ? rn[rn.indexOf(e)] = a : rn.push(a)), a.patchFlag = -2, a;
  }
  if ($c(e) && (e = e.__vccOpts), t) {
    t = op(t);
    let { class: a, style: l } = t;
    a && !An(a) && (t.class = us(a)), Wt(l) && (Ni(l) && !mt(l) && (l = _r({}, l)), t.style = ls(l));
  }
  const s = An(e) ? 1 : jg(e) ? 128 : Rg(e) ? 64 : Wt(e) ? 4 : Xt(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && s & 4 && Ni(e) && (e = Le(e), or(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), mc(
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
function op(e) {
  return e ? Ni(e) || gc(e) ? _r({}, e) : e : null;
}
function Vi(e, t, n = !1, r = !1) {
  const { props: o, ref: i, patchFlag: s, children: a, transition: l } = e, u = t ? sp(o || {}, t) : o, c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: u,
    key: u && vc(u),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? mt(i) ? i.concat(yi(t)) : [i, yi(t)] : yi(t)
    ) : i,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && s === -1 && mt(a) ? a.map(wc) : a,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== pc ? s === -1 ? 16 : s | 16 : s,
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
    ssContent: e.ssContent && Vi(e.ssContent),
    ssFallback: e.ssFallback && Vi(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return l && r && fc(
    c,
    l.clone(c)
  ), c;
}
function wc(e) {
  const t = Vi(e);
  return mt(e.children) && (t.children = e.children.map(wc)), t;
}
function ip(e = " ", t = 0) {
  return rp(qg, null, e, t);
}
function Za(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (mt(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), Za(e, o()), o._c && (o._d = !0));
      return;
    } else
      n = 32, !t._ && !gc(t) && (t._ctx = Mi);
  else Xt(t) ? (t = { default: t, _ctx: Mi }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [ip(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function sp(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const o in r)
      if (o === "class")
        t.class !== r.class && (t.class = us([t.class, r.class]));
      else if (o === "style")
        t.style = ls([t.style, r.style]);
      else if (Fh(o)) {
        const i = t[o], s = r[o];
        s && i !== s && !(mt(i) && i.includes(s)) && (t[o] = i ? [].concat(i, s) : s);
      } else o !== "" && (t[o] = r[o]);
  }
  return t;
}
let ds = null, sa;
{
  const e = as(), t = (n, r) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(r), (i) => {
      o.length > 1 ? o.forEach((s) => s(i)) : o[0](i);
    };
  };
  sa = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => ds = n
  ), t(
    "__VUE_SSR_SETTERS__",
    (n) => bc = n
  );
}
const ap = (e) => {
  const t = ds;
  return sa(e), e.scope.on(), () => {
    e.scope.off(), sa(t);
  };
};
let bc = !1;
process.env.NODE_ENV;
const lp = /(?:^|[-_])(\w)/g, up = (e) => e.replace(lp, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function xc(e, t = !0) {
  return Xt(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function _c(e, t, n = !1) {
  let r = xc(t);
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
  return r ? up(r) : n ? "App" : "Anonymous";
}
function $c(e) {
  return Xt(e) && "__vccOpts" in e;
}
function cp() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, r = { style: "color:#eb2f96" }, o = {
    __vue_custom_formatter: !0,
    header(d) {
      return Wt(d) ? d.__isVue ? ["div", e, "VueInstance"] : Hn(d) ? [
        "div",
        {},
        ["span", e, c(d)],
        "<",
        // avoid debugger accessing value affecting behavior
        a("_value" in d ? d._value : d),
        ">"
      ] : ic(d) ? [
        "div",
        {},
        ["span", e, on(d) ? "ShallowReactive" : "Reactive"],
        "<",
        a(d),
        `>${In(d) ? " (readonly)" : ""}`
      ] : In(d) ? [
        "div",
        {},
        ["span", e, on(d) ? "ShallowReadonly" : "Readonly"],
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
    d.type.props && d.props && f.push(s("props", Le(d.props))), d.setupState !== ta && f.push(s("setup", d.setupState)), d.data !== ta && f.push(s("data", Le(d.data)));
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
    return f = _r({}, f), Object.keys(f).length ? [
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
    return typeof d == "number" ? ["span", t, d] : typeof d == "string" ? ["span", n, JSON.stringify(d)] : typeof d == "boolean" ? ["span", r, d] : Wt(d) ? ["object", { object: f ? Le(d) : d }] : ["span", n, String(d)];
  }
  function l(d, f) {
    const h = d.type;
    if (Xt(h))
      return;
    const p = {};
    for (const b in d.ctx)
      u(h, b, f) && (p[b] = d.ctx[b]);
    return p;
  }
  function u(d, f, h) {
    const p = d[h];
    if (mt(p) && p.includes(f) || Wt(p) && f in p || d.extends && u(d.extends, f, h) || d.mixins && d.mixins.some((b) => u(b, f, h)))
      return !0;
  }
  function c(d) {
    return on(d) ? "ShallowRef" : d.effect ? "ComputedRef" : "Ref";
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
function dp() {
  cp();
}
process.env.NODE_ENV !== "production" && dp();
var fp = Object.defineProperty, Cc = (e) => {
  throw TypeError(e);
}, hp = (e, t, n) => t in e ? fp(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Nt = (e, t, n) => hp(e, typeof t != "symbol" ? t + "" : t, n), Ba = (e, t, n) => t.has(e) || Cc("Cannot " + n), at = (e, t, n) => (Ba(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Lr = (e, t, n) => t.has(e) ? Cc("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), zi = (e, t, n, r) => (Ba(e, t, "write to private field"), t.set(e, n), n), gp = (e, t, n) => (Ba(e, t, "access private method"), n);
const pp = "5";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(pp);
let oo = !1, vp = !1;
function mp() {
  oo = !0;
}
mp();
const Ka = 1, Ya = 2, kc = 4, yp = 8, wp = 16, bp = 1, xp = 2, Sc = 4, _p = 8, $p = 16, Ec = 1, Cp = 2, Nc = "[", Xa = "[!", Wa = "]", Ir = {}, St = Symbol(), Pc = "http://www.w3.org/2000/svg", kp = !1, sn = 2, Oc = 4, fs = 8, Fa = 16, Yn = 32, io = 64, Hi = 128, Ft = 256, Ti = 512, yt = 1024, Xn = 2048, $r = 4096, Tn = 8192, hs = 16384, Sp = 32768, so = 65536, Ep = 1 << 17, Np = 1 << 19, Mc = 1 << 20, er = Symbol("$state"), ja = Symbol("legacy props"), Pp = Symbol("");
var Ko = Array.isArray, Op = Array.prototype.indexOf, qa = Array.from, Li = Object.keys, So = Object.defineProperty, Ln = Object.getOwnPropertyDescriptor, Vc = Object.getOwnPropertyDescriptors, Mp = Object.prototype, Vp = Array.prototype, Ga = Object.getPrototypeOf;
function po(e) {
  return typeof e == "function";
}
const ft = () => {
};
function zp(e) {
  return e();
}
function Eo(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const Hp = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let Di = !1, Ai = !1, aa = [], la = [];
function zc() {
  Di = !1;
  const e = aa.slice();
  aa = [], Eo(e);
}
function Hc() {
  Ai = !1;
  const e = la.slice();
  la = [], Eo(e);
}
function Yo(e) {
  Di || (Di = !0, queueMicrotask(zc)), aa.push(e);
}
function Tp(e) {
  Ai || (Ai = !0, Hp(Hc)), la.push(e);
}
function Lp() {
  Di && zc(), Ai && Hc();
}
function Tc(e) {
  return e === this.v;
}
function Ua(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Ja(e) {
  return !Ua(e, this.v);
}
function Dp(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Ap() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Ip(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Rp() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Zp() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Bp(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Kp() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Yp() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Xp() {
  throw new Error("https://svelte.dev/e/state_unsafe_local_read");
}
function Wp() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Pt(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Tc,
    rv: 0,
    wv: 0
  };
  return n;
}
function ua(e) {
  return /* @__PURE__ */ Lc(Pt(e));
}
// @__NO_SIDE_EFFECTS__
function Xo(e, t = !1) {
  var n;
  const r = Pt(e);
  return t || (r.equals = Ja), oo && Ze !== null && Ze.l !== null && ((n = Ze.l).s ?? (n.s = [])).push(r), r;
}
function te(e, t = !1) {
  return /* @__PURE__ */ Lc(/* @__PURE__ */ Xo(e, t));
}
// @__NO_SIDE_EFFECTS__
function Lc(e) {
  return Fe !== null && !pn && Fe.f & sn && (vn === null ? Gp([e]) : vn.push(e)), e;
}
function U(e, t) {
  return Fe !== null && !pn && ws() && Fe.f & (sn | Fa) && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (vn === null || !vn.includes(e)) && Wp(), ca(e, t);
}
function ca(e, t) {
  return e.equals(t) || (e.v, e.v = t, e.wv = Xc(), Dc(e, Xn), ws() && Be !== null && Be.f & yt && !(Be.f & (Yn | io)) && (On === null ? Up([e]) : On.push(e))), t;
}
function Il(e, t = 1) {
  var n = g(e), r = t === 1 ? n++ : n--;
  return U(e, n), r;
}
function Dc(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = ws(), o = n.length, i = 0; i < o; i++) {
      var s = n[i], a = s.f;
      a & Xn || !r && s === Be || (an(s, t), a & (yt | Ft) && (a & sn ? Dc(
        /** @type {Derived} */
        s,
        $r
      ) : ms(
        /** @type {Effect} */
        s
      )));
    }
}
// @__NO_SIDE_EFFECTS__
function ze(e) {
  var t = sn | Xn, n = Fe !== null && Fe.f & sn ? (
    /** @type {Derived} */
    Fe
  ) : null;
  return Be === null || n !== null && n.f & Ft ? t |= Ft : Be.f |= Mc, {
    ctx: Ze,
    deps: null,
    effects: null,
    equals: Tc,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: n ?? Be
  };
}
// @__NO_SIDE_EFFECTS__
function pe(e) {
  const t = /* @__PURE__ */ ze(e);
  return t.equals = Ja, t;
}
function Ac(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      jt(
        /** @type {Effect} */
        t[n]
      );
  }
}
function Fp(e) {
  for (var t = e.parent; t !== null; ) {
    if (!(t.f & sn))
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function jp(e) {
  var t, n = Be;
  sr(Fp(e));
  try {
    Ac(e), t = Fc(e);
  } finally {
    sr(n);
  }
  return t;
}
function Ic(e) {
  var t = jp(e), n = (Jn || e.f & Ft) && e.deps !== null ? $r : yt;
  an(e, n), e.equals(t) || (e.v = t, e.wv = Xc());
}
function gs(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let $e = !1;
function Tt(e) {
  $e = e;
}
let Me;
function $t(e) {
  if (e === null)
    throw gs(), Ir;
  return Me = e;
}
function wn() {
  return $t(
    /** @type {TemplateNode} */
    /* @__PURE__ */ _n(Me)
  );
}
function F(e) {
  if ($e) {
    if (/* @__PURE__ */ _n(Me) !== null)
      throw gs(), Ir;
    Me = e;
  }
}
function Ae(e = 1) {
  if ($e) {
    for (var t = e, n = Me; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ _n(n);
    Me = n;
  }
}
function da() {
  for (var e = 0, t = Me; ; ) {
    if (t.nodeType === 8) {
      var n = (
        /** @type {Comment} */
        t.data
      );
      if (n === Wa) {
        if (e === 0) return t;
        e -= 1;
      } else (n === Nc || n === Xa) && (e += 1);
    }
    var r = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ _n(t)
    );
    t.remove(), t = r;
  }
}
function gn(e, t = null, n) {
  if (typeof e != "object" || e === null || er in e)
    return e;
  const r = Ga(e);
  if (r !== Mp && r !== Vp)
    return e;
  var o = /* @__PURE__ */ new Map(), i = Ko(e), s = Pt(0);
  i && o.set("length", Pt(
    /** @type {any[]} */
    e.length
  ));
  var a;
  return new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(l, u, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && Kp();
        var d = o.get(u);
        return d === void 0 ? (d = Pt(c.value), o.set(u, d)) : U(d, gn(c.value, a)), !0;
      },
      deleteProperty(l, u) {
        var c = o.get(u);
        if (c === void 0)
          u in l && o.set(u, Pt(St));
        else {
          if (i && typeof u == "string") {
            var d = (
              /** @type {Source<number>} */
              o.get("length")
            ), f = Number(u);
            Number.isInteger(f) && f < d.v && U(d, f);
          }
          U(c, St), Rl(s);
        }
        return !0;
      },
      get(l, u, c) {
        var d;
        if (u === er)
          return e;
        var f = o.get(u), h = u in l;
        if (f === void 0 && (!h || (d = Ln(l, u)) != null && d.writable) && (f = Pt(gn(h ? l[u] : St, a)), o.set(u, f)), f !== void 0) {
          var p = g(f);
          return p === St ? void 0 : p;
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
          if (f !== void 0 && h !== St)
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
        if (u === er)
          return !0;
        var d = o.get(u), f = d !== void 0 && d.v !== St || Reflect.has(l, u);
        if (d !== void 0 || Be !== null && (!f || (c = Ln(l, u)) != null && c.writable)) {
          d === void 0 && (d = Pt(f ? gn(l[u], a) : St), o.set(u, d));
          var h = g(d);
          if (h === St)
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
            x !== void 0 ? U(x, St) : b in l && (x = Pt(St), o.set(b + "", x));
          }
        h === void 0 ? (!p || (f = Ln(l, u)) != null && f.writable) && (h = Pt(void 0), U(h, gn(c, a)), o.set(u, h)) : (p = h.v !== St, U(h, gn(c, a)));
        var k = Reflect.getOwnPropertyDescriptor(l, u);
        if (k != null && k.set && k.set.call(d, c), !p) {
          if (i && typeof u == "string") {
            var v = (
              /** @type {Source<number>} */
              o.get("length")
            ), _ = Number(u);
            Number.isInteger(_) && _ >= v.v && U(v, _ + 1);
          }
          Rl(s);
        }
        return !0;
      },
      ownKeys(l) {
        g(s);
        var u = Reflect.ownKeys(l).filter((f) => {
          var h = o.get(f);
          return h === void 0 || h.v !== St;
        });
        for (var [c, d] of o)
          d.v !== St && !(c in l) && u.push(c);
        return u;
      },
      setPrototypeOf() {
        Yp();
      }
    }
  );
}
function Rl(e, t = 1) {
  U(e, e.v + t);
}
var Et, Rc, Zc, Bc;
function fa() {
  if (Et === void 0) {
    Et = window, Rc = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype;
    Zc = Ln(t, "firstChild").get, Bc = Ln(t, "nextSibling").get, e.__click = void 0, e.__className = "", e.__attributes = null, e.__styles = null, e.__e = void 0, Text.prototype.__t = void 0;
  }
}
function Rn(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function xt(e) {
  return Zc.call(e);
}
// @__NO_SIDE_EFFECTS__
function _n(e) {
  return Bc.call(e);
}
function j(e, t) {
  if (!$e)
    return /* @__PURE__ */ xt(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ xt(Me)
  );
  if (n === null)
    n = Me.appendChild(Rn());
  else if (t && n.nodeType !== 3) {
    var r = Rn();
    return n == null || n.before(r), $t(r), r;
  }
  return $t(n), n;
}
function ye(e, t) {
  if (!$e) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ xt(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ _n(n) : n;
  }
  return Me;
}
function K(e, t = 1, n = !1) {
  let r = $e ? Me : e;
  for (var o; t--; )
    o = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ _n(r);
  if (!$e)
    return r;
  var i = r == null ? void 0 : r.nodeType;
  if (n && i !== 3) {
    var s = Rn();
    return r === null ? o == null || o.after(s) : r.before(s), $t(s), s;
  }
  return $t(r), /** @type {TemplateNode} */
  r;
}
function Qa(e) {
  e.textContent = "";
}
const Kc = 0, qp = 1;
let wi = !1, bi = Kc, No = !1, Po = null, Rr = !1, el = !1;
function Zl(e) {
  Rr = e;
}
function Bl(e) {
  el = e;
}
let fr = [], Zr = 0, Fe = null, pn = !1;
function ir(e) {
  Fe = e;
}
let Be = null;
function sr(e) {
  Be = e;
}
let vn = null;
function Gp(e) {
  vn = e;
}
let wt = null, zt = 0, On = null;
function Up(e) {
  On = e;
}
let Yc = 1, Ii = 0, Jn = !1;
function Xc() {
  return ++Yc;
}
function ao(e) {
  var t, n = e.f;
  if (n & Xn)
    return !0;
  if (n & $r) {
    var r = e.deps, o = (n & Ft) !== 0;
    if (r !== null) {
      var i, s, a = (n & Ti) !== 0, l = o && Be !== null && !Jn, u = r.length;
      if (a || l) {
        var c = (
          /** @type {Derived} */
          e
        ), d = c.parent;
        for (i = 0; i < u; i++)
          s = r[i], (a || !((t = s == null ? void 0 : s.reactions) != null && t.includes(c))) && (s.reactions ?? (s.reactions = [])).push(c);
        a && (c.f ^= Ti), l && d !== null && !(d.f & Ft) && (c.f ^= Ft);
      }
      for (i = 0; i < u; i++)
        if (s = r[i], ao(
          /** @type {Derived} */
          s
        ) && Ic(
          /** @type {Derived} */
          s
        ), s.wv > e.wv)
          return !0;
    }
    (!o || Be !== null && !Jn) && an(e, yt);
  }
  return !1;
}
function Jp(e, t) {
  for (var n = t; n !== null; ) {
    if (n.f & Hi)
      try {
        n.fn(e);
        return;
      } catch {
        n.f ^= Hi;
      }
    n = n.parent;
  }
  throw wi = !1, e;
}
function Qp(e) {
  return (e.f & hs) === 0 && (e.parent === null || (e.parent.f & Hi) === 0);
}
function ps(e, t, n, r) {
  if (wi) {
    if (n === null && (wi = !1), Qp(t))
      throw e;
    return;
  }
  n !== null && (wi = !0);
  {
    Jp(e, t);
    return;
  }
}
function Wc(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null)
    for (var o = 0; o < r.length; o++) {
      var i = r[o];
      i.f & sn ? Wc(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? an(i, Xn) : i.f & yt && an(i, $r), ms(
        /** @type {Effect} */
        i
      ));
    }
}
function Fc(e) {
  var t, n = wt, r = zt, o = On, i = Fe, s = Jn, a = vn, l = Ze, u = pn, c = e.f;
  wt = /** @type {null | Value[]} */
  null, zt = 0, On = null, Fe = c & (Yn | io) ? null : e, Jn = (c & Ft) !== 0 && (!Rr || i === null || u), vn = null, Kl(e.ctx), pn = !1, Ii++;
  try {
    var d = (
      /** @type {Function} */
      (0, e.fn)()
    ), f = e.deps;
    if (wt !== null) {
      var h;
      if (Ri(e, zt), f !== null && zt > 0)
        for (f.length = zt + wt.length, h = 0; h < wt.length; h++)
          f[zt + h] = wt[h];
      else
        e.deps = f = wt;
      if (!Jn)
        for (h = zt; h < f.length; h++)
          ((t = f[h]).reactions ?? (t.reactions = [])).push(e);
    } else f !== null && zt < f.length && (Ri(e, zt), f.length = zt);
    if (ws() && On !== null && !pn && f !== null && !(e.f & (sn | $r | Xn)))
      for (h = 0; h < /** @type {Source[]} */
      On.length; h++)
        Wc(
          On[h],
          /** @type {Effect} */
          e
        );
    return i !== null && Ii++, d;
  } finally {
    wt = n, zt = r, On = o, Fe = i, Jn = s, vn = a, Kl(l), pn = u;
  }
}
function ev(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Op.call(n, e);
    if (r !== -1) {
      var o = n.length - 1;
      o === 0 ? n = t.reactions = null : (n[r] = n[o], n.pop());
    }
  }
  n === null && t.f & sn && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (wt === null || !wt.includes(t)) && (an(t, $r), t.f & (Ft | Ti) || (t.f ^= Ti), Ac(
    /** @type {Derived} **/
    t
  ), Ri(
    /** @type {Derived} **/
    t,
    0
  ));
}
function Ri(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      ev(e, n[r]);
}
function vs(e) {
  var t = e.f;
  if (!(t & hs)) {
    an(e, yt);
    var n = Be, r = Ze;
    Be = e;
    try {
      t & Fa ? uv(e) : Qc(e), Jc(e);
      var o = Fc(e);
      e.teardown = typeof o == "function" ? o : null, e.wv = Yc;
      var i = e.deps, s;
      kp && vp && e.f & Xn;
    } catch (a) {
      ps(a, e, n, r || e.ctx);
    } finally {
      Be = n;
    }
  }
}
function jc() {
  if (Zr > 1e3) {
    Zr = 0;
    try {
      Rp();
    } catch (e) {
      if (Po !== null)
        ps(e, Po, null);
      else
        throw e;
    }
  }
  Zr++;
}
function qc(e) {
  var t = e.length;
  if (t !== 0) {
    jc();
    var n = Rr;
    Rr = !0;
    try {
      for (var r = 0; r < t; r++) {
        var o = e[r];
        o.f & yt || (o.f ^= yt);
        var i = rv(o);
        tv(i);
      }
    } finally {
      Rr = n;
    }
  }
}
function tv(e) {
  var t = e.length;
  if (t !== 0)
    for (var n = 0; n < t; n++) {
      var r = e[n];
      if (!(r.f & (hs | Tn)))
        try {
          ao(r) && (vs(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? ed(r) : r.fn = null));
        } catch (o) {
          ps(o, r, null, r.ctx);
        }
    }
}
function nv() {
  if (No = !1, Zr > 1001)
    return;
  const e = fr;
  fr = [], qc(e), No || (Zr = 0, Po = null);
}
function ms(e) {
  bi === Kc && (No || (No = !0, queueMicrotask(nv))), Po = e;
  for (var t = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (n & (io | Yn)) {
      if (!(n & yt)) return;
      t.f ^= yt;
    }
  }
  fr.push(t);
}
function rv(e) {
  var t = [], n = e.first;
  e: for (; n !== null; ) {
    var r = n.f, o = (r & Yn) !== 0, i = o && (r & yt) !== 0, s = n.next;
    if (!i && !(r & Tn)) {
      if (r & Oc)
        t.push(n);
      else if (o)
        n.f ^= yt;
      else {
        var a = Fe;
        try {
          Fe = n, ao(n) && vs(n);
        } catch (c) {
          ps(c, n, null, n.ctx);
        } finally {
          Fe = a;
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
  var t = bi, n = fr;
  try {
    jc();
    const o = [];
    bi = qp, fr = o, No = !1, qc(n);
    var r = e == null ? void 0 : e();
    return Lp(), (fr.length > 0 || o.length > 0) && m(), Zr = 0, Po = null, r;
  } finally {
    bi = t, fr = n;
  }
}
function g(e) {
  var t = e.f, n = (t & sn) !== 0;
  if (Fe !== null && !pn) {
    vn !== null && vn.includes(e) && Xp();
    var r = Fe.deps;
    e.rv < Ii && (e.rv = Ii, wt === null && r !== null && r[zt] === e ? zt++ : wt === null ? wt = [e] : (!Jn || !wt.includes(e)) && wt.push(e));
  } else if (n && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var o = (
      /** @type {Derived} */
      e
    ), i = o.parent;
    i !== null && !(i.f & Ft) && (o.f ^= Ft);
  }
  return n && (o = /** @type {Derived} */
  e, ao(o) && Ic(o)), e.v;
}
function bn(e) {
  var t = pn;
  try {
    return pn = !0, e();
  } finally {
    pn = t;
  }
}
const ov = -7169;
function an(e, t) {
  e.f = e.f & ov | t;
}
function G(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (er in e)
      ha(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && er in n && ha(n);
      }
  }
}
function ha(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e)
      try {
        ha(e[r], t);
      } catch {
      }
    const n = Ga(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = Vc(n);
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
function Gc(e) {
  Be === null && Fe === null && Ip(), Fe !== null && Fe.f & Ft && Be === null && Ap(), el && Dp();
}
function iv(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Cr(e, t, n, r = !0) {
  var o = (e & io) !== 0, i = Be, s = {
    ctx: Ze,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Xn,
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
    var a = Rr;
    try {
      Zl(!0), vs(s), s.f |= Sp;
    } catch (c) {
      throw jt(s), c;
    } finally {
      Zl(a);
    }
  } else t !== null && ms(s);
  var l = n && s.deps === null && s.first === null && s.nodes_start === null && s.teardown === null && (s.f & (Mc | Hi)) === 0;
  if (!l && !o && r && (i !== null && iv(s, i), Fe !== null && Fe.f & sn)) {
    var u = (
      /** @type {Derived} */
      Fe
    );
    (u.effects ?? (u.effects = [])).push(s);
  }
  return s;
}
function Uc(e) {
  const t = Cr(fs, null, !1);
  return an(t, yt), t.teardown = e, t;
}
function Zi(e) {
  Gc();
  var t = Be !== null && (Be.f & Yn) !== 0 && Ze !== null && !Ze.m;
  if (t) {
    var n = (
      /** @type {ComponentContext} */
      Ze
    );
    (n.e ?? (n.e = [])).push({
      fn: e,
      effect: Be,
      reaction: Fe
    });
  } else {
    var r = Ht(e);
    return r;
  }
}
function sv(e) {
  return Gc(), lo(e);
}
function av(e) {
  const t = Cr(io, e, !0);
  return () => {
    jt(t);
  };
}
function lv(e) {
  const t = Cr(io, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Fr(t, () => {
      jt(t), r(void 0);
    }) : (jt(t), r(void 0));
  });
}
function Ht(e) {
  return Cr(Oc, e, !1);
}
function ae(e, t) {
  var n = (
    /** @type {ComponentContextLegacy} */
    Ze
  ), r = { effect: null, ran: !1 };
  n.l.r1.push(r), r.effect = lo(() => {
    e(), !r.ran && (r.ran = !0, U(n.l.r2, !0), bn(t));
  });
}
function ht() {
  var e = (
    /** @type {ComponentContextLegacy} */
    Ze
  );
  lo(() => {
    if (g(e.l.r2)) {
      for (var t of e.l.r1) {
        var n = t.effect;
        n.f & yt && an(n, $r), ao(n) && vs(n), t.ran = !1;
      }
      e.l.r2.v = !1;
    }
  });
}
function lo(e) {
  return Cr(fs, e, !0);
}
function Se(e, t = [], n = ze) {
  const r = t.map(n);
  return kr(() => e(...r.map(g)));
}
function kr(e, t = 0) {
  return Cr(fs | Fa | t, e, !0);
}
function Zn(e, t = !0) {
  return Cr(fs | Yn, e, !0, t);
}
function Jc(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = el, r = Fe;
    Bl(!0), ir(null);
    try {
      t.call(null);
    } finally {
      Bl(n), ir(r);
    }
  }
}
function Qc(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    var r = n.next;
    jt(n, t), n = r;
  }
}
function uv(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    t.f & Yn || jt(t), t = n;
  }
}
function jt(e, t = !0) {
  var n = !1;
  if ((t || e.f & Np) && e.nodes_start !== null) {
    for (var r = e.nodes_start, o = e.nodes_end; r !== null; ) {
      var i = r === o ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ _n(r)
      );
      r.remove(), r = i;
    }
    n = !0;
  }
  Qc(e, t && !n), Ri(e, 0), an(e, hs);
  var s = e.transitions;
  if (s !== null)
    for (const l of s)
      l.stop();
  Jc(e);
  var a = e.parent;
  a !== null && a.first !== null && ed(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function ed(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function Fr(e, t) {
  var n = [];
  tl(e, n, !0), td(n, () => {
    jt(e), t && t();
  });
}
function td(e, t) {
  var n = e.length;
  if (n > 0) {
    var r = () => --n || t();
    for (var o of e)
      o.out(r);
  } else
    t();
}
function tl(e, t, n) {
  if (!(e.f & Tn)) {
    if (e.f ^= Tn, e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || n) && t.push(s);
    for (var r = e.first; r !== null; ) {
      var o = r.next, i = (r.f & so) !== 0 || (r.f & Yn) !== 0;
      tl(r, t, i ? n : !1), r = o;
    }
  }
}
function Oo(e) {
  nd(e, !0);
}
function nd(e, t) {
  if (e.f & Tn) {
    e.f ^= Tn, e.f & yt || (e.f ^= yt), ao(e) && (an(e, Xn), ms(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, o = (n.f & so) !== 0 || (n.f & Yn) !== 0;
      nd(n, o ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || t) && i.in();
  }
}
function ys(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let Ze = null;
function Kl(e) {
  Ze = e;
}
function vr(e) {
  return (
    /** @type {T} */
    nl().get(e)
  );
}
function jr(e, t) {
  return nl().set(e, t), t;
}
function cv(e) {
  return nl().has(e);
}
function ce(e, t = !1, n) {
  Ze = {
    p: Ze,
    c: null,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  }, oo && !t && (Ze.l = {
    s: null,
    u: null,
    r1: [],
    r2: Pt(!1)
  });
}
function de(e) {
  const t = Ze;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const s = t.e;
    if (s !== null) {
      var n = Be, r = Fe;
      t.e = null;
      try {
        for (var o = 0; o < s.length; o++) {
          var i = s[o];
          sr(i.effect), ir(i.reaction), Ht(i.fn);
        }
      } finally {
        sr(n), ir(r);
      }
    }
    Ze = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function ws() {
  return !oo || Ze !== null && Ze.l === null;
}
function nl(e) {
  return Ze === null && ys(), Ze.c ?? (Ze.c = new Map(dv(Ze) || void 0));
}
function dv(e) {
  let t = e.p;
  for (; t !== null; ) {
    const n = t.c;
    if (n !== null)
      return n;
    t = t.p;
  }
  return null;
}
function fv(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const hv = [
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
function gv(e) {
  return hv.includes(e);
}
const pv = {
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
function vv(e) {
  return e = e.toLowerCase(), pv[e] ?? e;
}
const mv = ["touchstart", "touchmove"];
function yv(e) {
  return mv.includes(e);
}
const wv = (
  /** @type {const} */
  ["textarea", "script", "style", "title"]
);
function bv(e) {
  return wv.includes(
    /** @type {RAW_TEXT_ELEMENTS[number]} */
    e
  );
}
function xv(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, Yo(() => {
      document.activeElement === n && e.focus();
    });
  }
}
function _v(e) {
  $e && /* @__PURE__ */ xt(e) !== null && Qa(e);
}
let Yl = !1;
function $v() {
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
function Cv(e) {
  var t = Fe, n = Be;
  ir(null), sr(null);
  try {
    return e();
  } finally {
    ir(t), sr(n);
  }
}
const rd = /* @__PURE__ */ new Set(), ga = /* @__PURE__ */ new Set();
function od(e, t, n, r = {}) {
  function o(i) {
    if (r.capture || yo.call(t, i), !i.cancelBubble)
      return Cv(() => n == null ? void 0 : n.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Yo(() => {
    t.addEventListener(e, o, r);
  }) : t.addEventListener(e, o, r), o;
}
function je(e, t, n, r, o) {
  var i = { capture: r, passive: o }, s = od(e, t, n, i);
  (t === document.body || t === window || t === document) && Uc(() => {
    t.removeEventListener(e, s, i);
  });
}
function bs(e) {
  for (var t = 0; t < e.length; t++)
    rd.add(e[t]);
  for (var n of ga)
    n(e);
}
function yo(e) {
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
    So(e, "currentTarget", {
      configurable: !0,
      get() {
        return s || r;
      }
    });
    var d = Fe, f = Be;
    ir(null), sr(null);
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
            if (Ko(x)) {
              var [k, ...v] = x;
              k.apply(s, [e, ...v]);
            } else
              x.call(s, e);
        } catch (_) {
          h ? p.push(_) : h = _;
        }
        if (e.cancelBubble || b === n || b === null)
          break;
        s = b;
      }
      if (h) {
        for (let _ of p)
          queueMicrotask(() => {
            throw _;
          });
        throw h;
      }
    } finally {
      e.__root = n, delete e.currentTarget, ir(d), sr(f);
    }
  }
}
function rl(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function Mt(e, t) {
  var n = (
    /** @type {Effect} */
    Be
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function oe(e, t) {
  var n = (t & Ec) !== 0, r = (t & Cp) !== 0, o, i = !e.startsWith("<!>");
  return () => {
    if ($e)
      return Mt(Me, null), Me;
    o === void 0 && (o = rl(i ? e : "<!>" + e), n || (o = /** @type {Node} */
    /* @__PURE__ */ xt(o)));
    var s = (
      /** @type {TemplateNode} */
      r || Rc ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ xt(s)
      ), l = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      Mt(a, l);
    } else
      Mt(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function ke(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), o = (t & Ec) !== 0, i = `<${n}>${r ? e : "<!>" + e}</${n}>`, s;
  return () => {
    if ($e)
      return Mt(Me, null), Me;
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        rl(i)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ xt(a)
      );
      if (o)
        for (s = document.createDocumentFragment(); /* @__PURE__ */ xt(l); )
          s.appendChild(
            /** @type {Node} */
            /* @__PURE__ */ xt(l)
          );
      else
        s = /** @type {Element} */
        /* @__PURE__ */ xt(l);
    }
    var u = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    if (o) {
      var c = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ xt(u)
      ), d = (
        /** @type {TemplateNode} */
        u.lastChild
      );
      Mt(c, d);
    } else
      Mt(u, u);
    return u;
  };
}
function Ue(e = "") {
  if (!$e) {
    var t = Rn(e + "");
    return Mt(t, t), t;
  }
  var n = Me;
  return n.nodeType !== 3 && (n.before(n = Rn()), $t(n)), Mt(n, n), n;
}
function qe() {
  if ($e)
    return Mt(Me, null), Me;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = Rn();
  return e.append(t, n), Mt(t, n), e;
}
function L(e, t) {
  if ($e) {
    Be.nodes_end = Me, wn();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function $n(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = n, e.nodeValue = n + "");
}
function id(e, t) {
  return sd(e, t);
}
function kv(e, t) {
  fa(), t.intro = t.intro ?? !1;
  const n = t.target, r = $e, o = Me;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ xt(n)
    ); i && (i.nodeType !== 8 || /** @type {Comment} */
    i.data !== Nc); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ _n(i);
    if (!i)
      throw Ir;
    Tt(!0), $t(
      /** @type {Comment} */
      i
    ), wn();
    const s = sd(e, { ...t, anchor: i });
    if (Me === null || Me.nodeType !== 8 || /** @type {Comment} */
    Me.data !== Wa)
      throw gs(), Ir;
    return Tt(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s === Ir)
      return t.recover === !1 && Zp(), fa(), Qa(n), Tt(!1), id(e, t);
    throw s;
  } finally {
    Tt(r), $t(o);
  }
}
const Vr = /* @__PURE__ */ new Map();
function sd(e, { target: t, anchor: n, props: r = {}, events: o, context: i, intro: s = !0 }) {
  fa();
  var a = /* @__PURE__ */ new Set(), l = (d) => {
    for (var f = 0; f < d.length; f++) {
      var h = d[f];
      if (!a.has(h)) {
        a.add(h);
        var p = yv(h);
        t.addEventListener(h, yo, { passive: p });
        var b = Vr.get(h);
        b === void 0 ? (document.addEventListener(h, yo, { passive: p }), Vr.set(h, 1)) : Vr.set(h, b + 1);
      }
    }
  };
  l(qa(rd)), ga.add(l);
  var u = void 0, c = lv(() => {
    var d = n ?? t.appendChild(Rn());
    return Zn(() => {
      if (i) {
        ce({});
        var f = (
          /** @type {ComponentContext} */
          Ze
        );
        f.c = i;
      }
      o && (r.$$events = o), $e && Mt(
        /** @type {TemplateNode} */
        d,
        null
      ), u = e(d, r) || {}, $e && (Be.nodes_end = Me), i && de();
    }), () => {
      var f;
      for (var h of a) {
        t.removeEventListener(h, yo);
        var p = (
          /** @type {number} */
          Vr.get(h)
        );
        --p === 0 ? (document.removeEventListener(h, yo), Vr.delete(h)) : Vr.set(h, p);
      }
      ga.delete(l), d !== n && ((f = d.parentNode) == null || f.removeChild(d));
    };
  });
  return pa.set(u, c), u;
}
let pa = /* @__PURE__ */ new WeakMap();
function Sv(e, t) {
  const n = pa.get(e);
  return n ? (pa.delete(e), n(t)) : Promise.resolve();
}
function _e(e, t, n = !1) {
  $e && wn();
  var r = e, o = null, i = null, s = St, a = n ? so : 0, l = !1;
  const u = (d, f = !0) => {
    l = !0, c(f, d);
  }, c = (d, f) => {
    if (s === (s = d)) return;
    let h = !1;
    if ($e) {
      const p = (
        /** @type {Comment} */
        r.data === Xa
      );
      !!s === p && (r = da(), $t(r), Tt(!1), h = !0);
    }
    s ? (o ? Oo(o) : f && (o = Zn(() => f(r))), i && Fr(i, () => {
      i = null;
    })) : (i ? Oo(i) : f && (i = Zn(() => f(r))), o && Fr(o, () => {
      o = null;
    })), h && Tt(!0);
  };
  kr(() => {
    l = !1, t(u), l || c(null, null);
  }, a), $e && (r = Me);
}
function xs(e, t) {
  return t;
}
function Ev(e, t, n, r) {
  for (var o = [], i = t.length, s = 0; s < i; s++)
    tl(t[s].e, o, !0);
  var a = i > 0 && o.length === 0 && n !== null;
  if (a) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    Qa(l), l.append(
      /** @type {Element} */
      n
    ), r.clear(), qn(e, t[0].prev, t[i - 1].next);
  }
  td(o, () => {
    for (var u = 0; u < i; u++) {
      var c = t[u];
      a || (r.delete(c.k), qn(e, c.prev, c.next)), jt(c.e, !a);
    }
  });
}
function Dt(e, t, n, r, o, i = null) {
  var s = e, a = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, l = (t & kc) !== 0;
  if (l) {
    var u = (
      /** @type {Element} */
      e
    );
    s = $e ? $t(
      /** @type {Comment | Text} */
      /* @__PURE__ */ xt(u)
    ) : u.appendChild(Rn());
  }
  $e && wn();
  var c = null, d = !1, f = /* @__PURE__ */ pe(() => {
    var h = n();
    return Ko(h) ? h : h == null ? [] : qa(h);
  });
  kr(() => {
    var h = g(f), p = h.length;
    if (d && p === 0)
      return;
    d = p === 0;
    let b = !1;
    if ($e) {
      var x = (
        /** @type {Comment} */
        s.data === Xa
      );
      x !== (p === 0) && (s = da(), $t(s), Tt(!1), b = !0);
    }
    if ($e) {
      for (var k = null, v, _ = 0; _ < p; _++) {
        if (Me.nodeType === 8 && /** @type {Comment} */
        Me.data === Wa) {
          s = /** @type {Comment} */
          Me, b = !0, Tt(!1);
          break;
        }
        var w = h[_], C = r(w, _);
        v = ad(
          Me,
          a,
          k,
          null,
          w,
          C,
          _,
          o,
          t,
          n
        ), a.items.set(C, v), k = v;
      }
      p > 0 && $t(da());
    }
    $e || Nv(h, a, s, o, t, r, n), i !== null && (p === 0 ? c ? Oo(c) : c = Zn(() => i(s)) : c !== null && Fr(c, () => {
      c = null;
    })), b && Tt(!0), g(f);
  }), $e && (s = Me);
}
function Nv(e, t, n, r, o, i, s) {
  var a, l, u, c, d = (o & yp) !== 0, f = (o & (Ka | Ya)) !== 0, h = e.length, p = t.items, b = t.first, x = b, k, v = null, _, w = [], C = [], N, P, M, z;
  if (d)
    for (z = 0; z < h; z += 1)
      N = e[z], P = i(N, z), M = p.get(P), M !== void 0 && ((a = M.a) == null || a.measure(), (_ ?? (_ = /* @__PURE__ */ new Set())).add(M));
  for (z = 0; z < h; z += 1) {
    if (N = e[z], P = i(N, z), M = p.get(P), M === void 0) {
      var H = x ? (
        /** @type {TemplateNode} */
        x.e.nodes_start
      ) : n;
      v = ad(
        H,
        t,
        v,
        v === null ? t.first : v.next,
        N,
        P,
        z,
        r,
        o,
        s
      ), p.set(P, v), w = [], C = [], x = v.next;
      continue;
    }
    if (f && Pv(M, N, z, o), M.e.f & Tn && (Oo(M.e), d && ((l = M.a) == null || l.unfix(), (_ ?? (_ = /* @__PURE__ */ new Set())).delete(M))), M !== x) {
      if (k !== void 0 && k.has(M)) {
        if (w.length < C.length) {
          var A = C[0], D;
          v = A.prev;
          var R = w[0], S = w[w.length - 1];
          for (D = 0; D < w.length; D += 1)
            Xl(w[D], A, n);
          for (D = 0; D < C.length; D += 1)
            k.delete(C[D]);
          qn(t, R.prev, S.next), qn(t, v, R), qn(t, S, A), x = A, v = S, z -= 1, w = [], C = [];
        } else
          k.delete(M), Xl(M, x, n), qn(t, M.prev, M.next), qn(t, M, v === null ? t.first : v.next), qn(t, v, M), v = M;
        continue;
      }
      for (w = [], C = []; x !== null && x.k !== P; )
        x.e.f & Tn || (k ?? (k = /* @__PURE__ */ new Set())).add(x), C.push(x), x = x.next;
      if (x === null)
        continue;
      M = x;
    }
    w.push(M), v = M, x = M.next;
  }
  if (x !== null || k !== void 0) {
    for (var O = k === void 0 ? [] : qa(k); x !== null; )
      x.e.f & Tn || O.push(x), x = x.next;
    var $ = O.length;
    if ($ > 0) {
      var E = o & kc && h === 0 ? n : null;
      if (d) {
        for (z = 0; z < $; z += 1)
          (u = O[z].a) == null || u.measure();
        for (z = 0; z < $; z += 1)
          (c = O[z].a) == null || c.fix();
      }
      Ev(t, O, E, p);
    }
  }
  d && Yo(() => {
    var V;
    if (_ !== void 0)
      for (M of _)
        (V = M.a) == null || V.apply();
  }), Be.first = t.first && t.first.e, Be.last = v && v.e;
}
function Pv(e, t, n, r) {
  r & Ka && ca(e.v, t), r & Ya ? ca(
    /** @type {Value<number>} */
    e.i,
    n
  ) : e.i = n;
}
function ad(e, t, n, r, o, i, s, a, l, u) {
  var c = (l & Ka) !== 0, d = (l & wp) === 0, f = c ? d ? /* @__PURE__ */ Xo(o) : Pt(o) : o, h = l & Ya ? Pt(s) : s, p = {
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
    return p.e = Zn(() => a(e, f, h, u), $e), p.e.prev = n && n.e, p.e.next = r && r.e, n === null ? t.first = p : (n.next = p, n.e.next = p.e), r !== null && (r.prev = p, r.e.prev = p.e), p;
  } finally {
  }
}
function Xl(e, t, n) {
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
      /* @__PURE__ */ _n(i)
    );
    o.before(i), i = s;
  }
}
function qn(e, t, n) {
  t === null ? e.first = n : (t.next = n, t.e.next = n && n.e), n !== null && (n.prev = t, n.e.prev = t && t.e);
}
function ld(e, t, n, r, o) {
  var i = e, s = "", a;
  kr(() => {
    if (s === (s = t() ?? "")) {
      $e && wn();
      return;
    }
    a !== void 0 && (jt(a), a = void 0), s !== "" && (a = Zn(() => {
      if ($e) {
        Me.data;
        for (var l = wn(), u = l; l !== null && (l.nodeType !== 8 || /** @type {Comment} */
        l.data !== ""); )
          u = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ _n(l);
        if (l === null)
          throw gs(), Ir;
        Mt(Me, u), i = $t(l);
        return;
      }
      var c = s + "", d = rl(c);
      Mt(
        /** @type {TemplateNode} */
        /* @__PURE__ */ xt(d),
        /** @type {TemplateNode} */
        d.lastChild
      ), i.before(d);
    }));
  });
}
function vt(e, t, n, r, o) {
  var i;
  $e && wn();
  var s = (i = t.$$slots) == null ? void 0 : i[n], a = !1;
  s === !0 && (s = t[n === "default" ? "children" : n], a = !0), s === void 0 || s(e, a ? () => r : r);
}
function Ov(e) {
  const t = {};
  e.children && (t.default = !0);
  for (const n in e.$$slots)
    t[n] = !0;
  return t;
}
function qr(e, t, ...n) {
  var r = e, o = ft, i;
  kr(() => {
    o !== (o = t()) && (i && (jt(i), i = null), i = Zn(() => (
      /** @type {SnippetFn} */
      o(r, ...n)
    )));
  }, so), $e && (r = Me);
}
function ud(e, t, n) {
  $e && wn();
  var r = e, o, i;
  kr(() => {
    o !== (o = t()) && (i && (Fr(i), i = null), o && (i = Zn(() => n(r, o))));
  }, so), $e && (r = Me);
}
function Mv(e, t, n, r, o, i) {
  let s = $e;
  $e && wn();
  var a, l, u = null;
  $e && Me.nodeType === 1 && (u = /** @type {Element} */
  Me, wn());
  var c = (
    /** @type {TemplateNode} */
    $e ? Me : e
  ), d;
  kr(() => {
    const f = t() || null;
    var h = f === "svg" ? Pc : null;
    f !== a && (d && (f === null ? Fr(d, () => {
      d = null, l = null;
    }) : f === l ? Oo(d) : jt(d)), f && f !== l && (d = Zn(() => {
      if (u = $e ? (
        /** @type {Element} */
        u
      ) : h ? document.createElementNS(h, f) : document.createElement(f), Mt(u, u), r) {
        $e && bv(f) && u.append(document.createComment(""));
        var p = (
          /** @type {TemplateNode} */
          $e ? /* @__PURE__ */ xt(u) : u.appendChild(Rn())
        );
        $e && (p === null ? Tt(!1) : $t(p)), r(u, p);
      }
      Be.nodes_end = u, c.before(u);
    })), a = f, a && (l = a));
  }, so), s && (Tt(!0), $t(c));
}
function nt(e, t) {
  Yo(() => {
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
function pt(e, t, n) {
  Ht(() => {
    var r = bn(() => t(e, n == null ? void 0 : n()) || {});
    if (n && r != null && r.update) {
      var o = !1, i = (
        /** @type {any} */
        {}
      );
      lo(() => {
        var s = n();
        G(s), o && Ua(i, s) && (i = s, r.update(s));
      }), o = !0;
    }
    if (r != null && r.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function cd(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = cd(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Vv() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = cd(e)) && (r && (r += " "), r += t);
  return r;
}
function Cn(e) {
  return typeof e == "object" ? Vv(e) : e ?? "";
}
function dd(e) {
  if ($e) {
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
    e.__on_r = n, Tp(n), $v();
  }
}
function zv(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function se(e, t, n, r) {
  var o = e.__attributes ?? (e.__attributes = {});
  $e && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = n) && (t === "style" && "__styles" in e && (e.__styles = {}), t === "loading" && (e[Pp] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && fd(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function ln(e, t, n, r, o = !1, i = !1, s = !1) {
  let a = $e && i;
  a && Tt(!1);
  var l = t || {}, u = e.tagName === "OPTION";
  for (var c in t)
    c in n || (n[c] = null);
  n.class && (n.class = Cn(n.class)), r !== void 0 && (n.class = n.class ? n.class + " " + r : r);
  var d = fd(e), f = (
    /** @type {Record<string, unknown>} **/
    e.__attributes ?? (e.__attributes = {})
  );
  for (const v in n) {
    let _ = n[v];
    if (u && v === "value" && _ == null) {
      e.value = e.__value = "", l[v] = _;
      continue;
    }
    var h = l[v];
    if (_ !== h) {
      l[v] = _;
      var p = v[0] + v[1];
      if (p !== "$$") {
        if (p === "on") {
          const w = {}, C = "$$" + v;
          let N = v.slice(2);
          var b = gv(N);
          if (fv(N) && (N = N.slice(0, -7), w.capture = !0), !b && h) {
            if (_ != null) continue;
            e.removeEventListener(N, l[C], w), l[C] = null;
          }
          if (_ != null)
            if (b)
              e[`__${N}`] = _, bs([N]);
            else {
              let P = function(M) {
                l[v].call(this, M);
              };
              l[C] = od(N, e, P, w);
            }
          else b && (e[`__${N}`] = void 0);
        } else if (v === "style" && _ != null)
          e.style.cssText = _ + "";
        else if (v === "autofocus")
          xv(
            /** @type {HTMLElement} */
            e,
            !!_
          );
        else if (!i && (v === "__value" || v === "value" && _ != null))
          e.value = e.__value = _;
        else if (v === "selected" && u)
          zv(
            /** @type {HTMLOptionElement} */
            e,
            _
          );
        else {
          var x = v;
          o || (x = vv(x));
          var k = x === "defaultValue" || x === "defaultChecked";
          if (_ == null && !i && !k)
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
          else k || d.includes(x) && (i || typeof _ != "string") ? e[x] = _ : typeof _ != "function" && se(e, x, _);
        }
        v === "style" && "__styles" in e && (e.__styles = {});
      }
    }
  }
  return a && Tt(!0), l;
}
var Wl = /* @__PURE__ */ new Map();
function fd(e) {
  var t = Wl.get(e.nodeName);
  if (t) return t;
  Wl.set(e.nodeName, t = []);
  for (var n, r = e, o = Element.prototype; o !== r; ) {
    n = Vc(r);
    for (var i in n)
      n[i].set && t.push(i);
    r = Ga(r);
  }
  return t;
}
function Sr(e, t, n) {
  var r = e.__className, o = hd(t, n);
  $e && e.getAttribute("class") === o ? e.__className = o : (r !== o || $e && e.getAttribute("class") !== o) && (o === "" ? e.removeAttribute("class") : e.setAttribute("class", o), e.__className = o);
}
function Gr(e, t, n) {
  var r = e.__className, o = hd(t, n);
  $e && e.className === o ? e.__className = o : (r !== o || $e && e.className !== o) && (t == null ? e.removeAttribute("class") : e.className = o, e.__className = o);
}
function hd(e, t) {
  return (e ?? "") + (t ? " " + t : "");
}
function tt(e, t, n) {
  if (n) {
    if (e.classList.contains(t)) return;
    e.classList.add(t);
  } else {
    if (!e.classList.contains(t)) return;
    e.classList.remove(t);
  }
}
function ot(e, t, n, r) {
  var o = e.__styles ?? (e.__styles = {});
  o[t] !== n && (o[t] = n, n == null ? e.style.removeProperty(t) : e.style.setProperty(t, n, ""));
}
var dr, $o, xi, va, gd;
const ma = class {
  /** @param {ResizeObserverOptions} options */
  constructor(t) {
    Lr(this, va), Lr(this, dr, /* @__PURE__ */ new WeakMap()), Lr(this, $o), Lr(this, xi), zi(this, xi, t);
  }
  /**
   * @param {Element} element
   * @param {(entry: ResizeObserverEntry) => any} listener
   */
  observe(t, n) {
    var r = at(this, dr).get(t) || /* @__PURE__ */ new Set();
    return r.add(n), at(this, dr).set(t, r), gp(this, va, gd).call(this).observe(t, at(this, xi)), () => {
      var o = at(this, dr).get(t);
      o.delete(n), o.size === 0 && (at(this, dr).delete(t), at(this, $o).unobserve(t));
    };
  }
};
dr = /* @__PURE__ */ new WeakMap(), $o = /* @__PURE__ */ new WeakMap(), xi = /* @__PURE__ */ new WeakMap(), va = /* @__PURE__ */ new WeakSet(), gd = function() {
  return at(this, $o) ?? zi(this, $o, new ResizeObserver(
    /** @param {any} entries */
    (e) => {
      for (var t of e) {
        ma.entries.set(t.target, t);
        for (var n of at(this, dr).get(t.target) || [])
          n(t);
      }
    }
  ));
}, /** @static */
Nt(ma, "entries", /* @__PURE__ */ new WeakMap());
let Hv = ma;
var Tv = /* @__PURE__ */ new Hv({
  box: "border-box"
});
function Fl(e, t, n) {
  var r = Tv.observe(e, () => n(e[t]));
  Ht(() => (bn(() => n(e[t])), r));
}
function jl(e, t) {
  return e === t || (e == null ? void 0 : e[er]) === t;
}
function Bn(e = {}, t, n, r) {
  return Ht(() => {
    var o, i;
    return lo(() => {
      o = i, i = [], bn(() => {
        e !== n(...i) && (t(e, ...i), o && jl(n(...o), e) && t(null, ...o));
      });
    }), () => {
      Yo(() => {
        i && jl(n(...i), e) && t(null, ...i);
      });
    };
  }), e;
}
function Oe(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    Ze
  ), n = t.l.u;
  if (!n) return;
  let r = () => G(t.s);
  if (e) {
    let o = 0, i = (
      /** @type {Record<string, any>} */
      {}
    );
    const s = /* @__PURE__ */ ze(() => {
      let a = !1;
      const l = t.s;
      for (const u in l)
        l[u] !== i[u] && (i[u] = l[u], a = !0);
      return a && o++, o;
    });
    r = () => g(s);
  }
  n.b.length && sv(() => {
    ql(t, r), Eo(n.b);
  }), Zi(() => {
    const o = bn(() => n.m.map(zp));
    return () => {
      for (const i of o)
        typeof i == "function" && i();
    };
  }), n.a.length && Zi(() => {
    ql(t, r), Eo(n.a);
  });
}
function ql(e, t) {
  if (e.l.s)
    for (const n of e.l.s) g(n);
  t();
}
function De(e, t) {
  var n, r = (
    /** @type {Record<string, Function[] | Function>} */
    (n = e.$$events) == null ? void 0 : n[t.type]
  ), o = Ko(r) ? r.slice() : r == null ? [] : [r];
  for (var i of o)
    i.call(this, t);
}
function Er(e) {
  Ze === null && ys(), oo && Ze.l !== null ? Dv(Ze).m.push(e) : Zi(() => {
    const t = bn(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function ol(e) {
  Ze === null && ys(), Er(() => () => bn(e));
}
function Lv(e, t, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(e, { detail: t, bubbles: n, cancelable: r });
}
function _s() {
  const e = Ze;
  return e === null && ys(), (t, n, r) => {
    var o;
    const i = (
      /** @type {Record<string, Function | Function[]>} */
      (o = e.s.$$events) == null ? void 0 : o[
        /** @type {any} */
        t
      ]
    );
    if (i) {
      const s = Ko(i) ? i.slice() : [i], a = Lv(
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
function Dv(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ?? (t.u = { a: [], b: [], m: [] });
}
function il(e, t, n) {
  if (e == null)
    return t(void 0), n && n(void 0), ft;
  const r = bn(
    () => e.subscribe(
      t,
      // @ts-expect-error
      n
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
const zr = [];
function Bt(e, t) {
  return {
    subscribe: me(e, t).subscribe
  };
}
function me(e, t = ft) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function o(a) {
    if (Ua(e, a) && (e = a, n)) {
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
function tr(e, t, n) {
  const r = !Array.isArray(e), o = r ? [e] : e;
  if (!o.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const i = t.length < 2;
  return Bt(n, (s, a) => {
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
      (p, b) => il(
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
      Eo(h), d(), l = !1;
    };
  });
}
function X(e) {
  let t;
  return il(e, (n) => t = n)(), t;
}
let ci = !1, ya = Symbol();
function J(e, t, n) {
  const r = n[t] ?? (n[t] = {
    store: null,
    source: /* @__PURE__ */ Xo(void 0),
    unsubscribe: ft
  });
  if (r.store !== e && !(ya in n))
    if (r.unsubscribe(), r.store = e ?? null, e == null)
      r.source.v = void 0, r.unsubscribe = ft;
    else {
      var o = !0;
      r.unsubscribe = il(e, (i) => {
        o ? r.source.v = i : U(r.source, i);
      }), o = !1;
    }
  return e && ya in n ? X(e) : g(r.source);
}
function Av(e, t, n) {
  let r = n[t];
  return r && r.store !== e && (r.unsubscribe(), r.unsubscribe = ft), e;
}
function Bi(e, t) {
  return e.set(t), t;
}
function Qe() {
  const e = {};
  function t() {
    Uc(() => {
      for (var n in e)
        e[n].unsubscribe();
      So(e, ya, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function Iv(e) {
  var t = ci;
  try {
    return ci = !1, [e(), ci];
  } finally {
    ci = t;
  }
}
const Rv = {
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
function qt(e, t, n) {
  return new Proxy(
    { props: e, exclude: t },
    Rv
  );
}
const Zv = {
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
      Sc
    )), e.special[t](n), Il(e.version), !0;
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
    return e.exclude.includes(t) || (e.exclude.push(t), Il(e.version)), !0;
  },
  has(e, t) {
    return e.exclude.includes(t) ? !1 : t in e.props;
  },
  ownKeys(e) {
    return Reflect.ownKeys(e.props).filter((t) => !e.exclude.includes(t));
  }
};
function et(e, t) {
  return new Proxy({ props: e, exclude: t, special: {}, version: Pt(0) }, Zv);
}
const Bv = {
  get(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (po(r) && (r = r()), typeof r == "object" && r !== null && t in r) return r[t];
    }
  },
  set(e, t, n) {
    let r = e.props.length;
    for (; r--; ) {
      let o = e.props[r];
      po(o) && (o = o());
      const i = Ln(o, t);
      if (i && i.set)
        return i.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (po(r) && (r = r()), typeof r == "object" && r !== null && t in r) {
        const o = Ln(r, t);
        return o && !o.configurable && (o.configurable = !0), o;
      }
    }
  },
  has(e, t) {
    if (t === er || t === ja) return !1;
    for (let n of e.props)
      if (po(n) && (n = n()), n != null && t in n) return !0;
    return !1;
  },
  ownKeys(e) {
    const t = [];
    for (let n of e.props) {
      po(n) && (n = n());
      for (const r in n)
        t.includes(r) || t.push(r);
    }
    return t;
  }
};
function _t(...e) {
  return new Proxy({ props: e }, Bv);
}
function y(e, t, n, r) {
  var o, i = (n & bp) !== 0, s = !oo || (n & xp) !== 0, a = (n & _p) !== 0, l = (n & $p) !== 0, u = !1, c;
  a ? [c, u] = Iv(() => (
    /** @type {V} */
    e[t]
  )) : c = /** @type {V} */
  e[t];
  var d = er in e || ja in e, f = a && (((o = Ln(e, t)) == null ? void 0 : o.set) ?? (d && t in e && ((P) => e[t] = P))) || void 0, h = (
    /** @type {V} */
    r
  ), p = !0, b = !1, x = () => (b = !0, p && (p = !1, l ? h = bn(
    /** @type {() => V} */
    r
  ) : h = /** @type {V} */
  r), h);
  c === void 0 && r !== void 0 && (f && s && Bp(), c = x(), f && f(c));
  var k;
  if (s)
    k = () => {
      var P = (
        /** @type {V} */
        e[t]
      );
      return P === void 0 ? x() : (p = !0, b = !1, P);
    };
  else {
    var v = (i ? ze : pe)(
      () => (
        /** @type {V} */
        e[t]
      )
    );
    v.f |= Ep, k = () => {
      var P = g(v);
      return P !== void 0 && (h = /** @type {V} */
      void 0), P === void 0 ? h : P;
    };
  }
  if (!(n & Sc))
    return k;
  if (f) {
    var _ = e.$$legacy;
    return function(P, M) {
      return arguments.length > 0 ? ((!s || !M || _ || u) && f(M ? k() : P), P) : k();
    };
  }
  var w = !1, C = /* @__PURE__ */ Xo(c), N = /* @__PURE__ */ ze(() => {
    var P = k(), M = g(C);
    return w ? (w = !1, M) : C.v = P;
  });
  return i || (N.equals = Ja), function(P, M) {
    if (arguments.length > 0) {
      const z = M ? g(N) : s && a ? gn(P) : P;
      return N.equals(z) || (w = !0, U(C, z), b && h !== void 0 && (h = z), bn(() => g(N))), P;
    }
    return g(N);
  };
}
function Kv(e) {
  return new Yv(e);
}
var Fn, Qt;
class Yv {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    Lr(this, Fn), Lr(this, Qt);
    var n, r = /* @__PURE__ */ new Map(), o = (s, a) => {
      var l = /* @__PURE__ */ Xo(a);
      return r.set(s, l), l;
    };
    const i = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(s, a) {
          return g(r.get(a) ?? o(a, Reflect.get(s, a)));
        },
        has(s, a) {
          return a === ja ? !0 : (g(r.get(a) ?? o(a, Reflect.get(s, a))), Reflect.has(s, a));
        },
        set(s, a, l) {
          return U(r.get(a) ?? o(a, l), l), Reflect.set(s, a, l);
        }
      }
    );
    zi(this, Qt, (t.hydrate ? kv : id)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: i,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((n = t == null ? void 0 : t.props) != null && n.$$host) || t.sync === !1) && m(), zi(this, Fn, i.$$events);
    for (const s of Object.keys(at(this, Qt)))
      s === "$set" || s === "$destroy" || s === "$on" || So(this, s, {
        get() {
          return at(this, Qt)[s];
        },
        /** @param {any} value */
        set(a) {
          at(this, Qt)[s] = a;
        },
        enumerable: !0
      });
    at(this, Qt).$set = /** @param {Record<string, any>} next */
    (s) => {
      Object.assign(i, s);
    }, at(this, Qt).$destroy = () => {
      Sv(at(this, Qt));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    at(this, Qt).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, n) {
    at(this, Fn)[t] = at(this, Fn)[t] || [];
    const r = (...o) => n.call(this, ...o);
    return at(this, Fn)[t].push(r), () => {
      at(this, Fn)[t] = at(this, Fn)[t].filter(
        /** @param {any} fn */
        (o) => o !== r
      );
    };
  }
  $destroy() {
    at(this, Qt).$destroy();
  }
}
Fn = /* @__PURE__ */ new WeakMap(), Qt = /* @__PURE__ */ new WeakMap();
let pd;
typeof HTMLElement == "function" && (pd = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(e, t, n) {
    super(), Nt(this, "$$ctor"), Nt(this, "$$s"), Nt(this, "$$c"), Nt(this, "$$cn", !1), Nt(this, "$$d", {}), Nt(this, "$$r", !1), Nt(this, "$$p_d", {}), Nt(this, "$$l", {}), Nt(this, "$$l_u", /* @__PURE__ */ new Map()), Nt(this, "$$me"), this.$$ctor = e, this.$$s = t, n && this.attachShadow({ mode: "open" });
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
      const t = {}, n = Xv(this);
      for (const r of this.$$s)
        r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = e(r), t.default = !0) : t[r] = e(r));
      for (const r of this.attributes) {
        const o = this.$$g_p(r.name);
        o in this.$$d || (this.$$d[o] = _i(o, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = Kv({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: t,
          $$host: this
        }
      }), this.$$me = av(() => {
        lo(() => {
          var r;
          this.$$r = !0;
          for (const o of Li(this.$$c)) {
            if (!((r = this.$$p_d[o]) != null && r.reflect)) continue;
            this.$$d[o] = this.$$c[o];
            const i = _i(
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
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = _i(e, n, this.$$p_d, "toProp"), (r = this.$$c) == null || r.$set({ [e]: this.$$d[e] }));
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
    return Li(this.$$p_d).find(
      (t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e
    ) || e;
  }
});
function _i(e, t, n, r) {
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
function Xv(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function ie(e, t, n, r, o, i) {
  let s = class extends pd {
    constructor() {
      super(e, n, o), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Li(t).map(
        (a) => (t[a].attribute || a).toLowerCase()
      );
    }
  };
  return Li(t).forEach((a) => {
    So(s.prototype, a, {
      get() {
        return this.$$c && a in this.$$c ? this.$$c[a] : this.$$d[a];
      },
      set(l) {
        var u;
        l = _i(a, l, t), this.$$d[a] = l;
        var c = this.$$c;
        if (c) {
          var d = (u = Ln(c, a)) == null ? void 0 : u.get;
          d ? c[a] = l : c.$set({ [a]: l });
        }
      }
    });
  }), r.forEach((a) => {
    So(s.prototype, a, {
      get() {
        var l;
        return (l = this.$$c) == null ? void 0 : l[a];
      }
    });
  }), e.element = /** @type {any} */
  s, s;
}
function Ct(e) {
  if (typeof e == "string" || typeof e == "number") return "" + e;
  let t = "";
  if (Array.isArray(e))
    for (let n = 0, r; n < e.length; n++)
      (r = Ct(e[n])) !== "" && (t += (t && " ") + r);
  else
    for (let n in e)
      e[n] && (t += (t && " ") + n);
  return t;
}
var Wv = { value: () => {
} };
function $s() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new $i(n);
}
function $i(e) {
  this._ = e;
}
function Fv(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
$i.prototype = $s.prototype = {
  constructor: $i,
  on: function(e, t) {
    var n = this._, r = Fv(e + "", n), o, i = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++i < s; ) if ((o = (e = r[i]).type) && (o = jv(n[o], e.name))) return o;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++i < s; )
      if (o = (e = r[i]).type) n[o] = Gl(n[o], e.name, t);
      else if (t == null) for (o in n) n[o] = Gl(n[o], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t) e[n] = t[n].slice();
    return new $i(e);
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
function jv(e, t) {
  for (var n = 0, r = e.length, o; n < r; ++n)
    if ((o = e[n]).name === t)
      return o.value;
}
function Gl(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = Wv, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var wa = "http://www.w3.org/1999/xhtml";
const Ul = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: wa,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Cs(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), Ul.hasOwnProperty(t) ? { space: Ul[t], local: e } : e;
}
function qv(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === wa && t.documentElement.namespaceURI === wa ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function Gv(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function vd(e) {
  var t = Cs(e);
  return (t.local ? Gv : qv)(t);
}
function Uv() {
}
function sl(e) {
  return e == null ? Uv : function() {
    return this.querySelector(e);
  };
}
function Jv(e) {
  typeof e != "function" && (e = sl(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = new Array(s), l, u, c = 0; c < s; ++c)
      (l = i[c]) && (u = e.call(l, l.__data__, c, i)) && ("__data__" in l && (u.__data__ = l.__data__), a[c] = u);
  return new At(r, this._parents);
}
function Qv(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function e1() {
  return [];
}
function md(e) {
  return e == null ? e1 : function() {
    return this.querySelectorAll(e);
  };
}
function t1(e) {
  return function() {
    return Qv(e.apply(this, arguments));
  };
}
function n1(e) {
  typeof e == "function" ? e = t1(e) : e = md(e);
  for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
    for (var s = t[i], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && (r.push(e.call(l, l.__data__, u, s)), o.push(l));
  return new At(r, o);
}
function yd(e) {
  return function() {
    return this.matches(e);
  };
}
function wd(e) {
  return function(t) {
    return t.matches(e);
  };
}
var r1 = Array.prototype.find;
function o1(e) {
  return function() {
    return r1.call(this.children, e);
  };
}
function i1() {
  return this.firstElementChild;
}
function s1(e) {
  return this.select(e == null ? i1 : o1(typeof e == "function" ? e : wd(e)));
}
var a1 = Array.prototype.filter;
function l1() {
  return Array.from(this.children);
}
function u1(e) {
  return function() {
    return a1.call(this.children, e);
  };
}
function c1(e) {
  return this.selectAll(e == null ? l1 : u1(typeof e == "function" ? e : wd(e)));
}
function d1(e) {
  typeof e != "function" && (e = yd(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && a.push(l);
  return new At(r, this._parents);
}
function bd(e) {
  return new Array(e.length);
}
function f1() {
  return new At(this._enter || this._groups.map(bd), this._parents);
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
function h1(e) {
  return function() {
    return e;
  };
}
function g1(e, t, n, r, o, i) {
  for (var s = 0, a, l = t.length, u = i.length; s < u; ++s)
    (a = t[s]) ? (a.__data__ = i[s], r[s] = a) : n[s] = new Ki(e, i[s]);
  for (; s < l; ++s)
    (a = t[s]) && (o[s] = a);
}
function p1(e, t, n, r, o, i, s) {
  var a, l, u = /* @__PURE__ */ new Map(), c = t.length, d = i.length, f = new Array(c), h;
  for (a = 0; a < c; ++a)
    (l = t[a]) && (f[a] = h = s.call(l, l.__data__, a, t) + "", u.has(h) ? o[a] = l : u.set(h, l));
  for (a = 0; a < d; ++a)
    h = s.call(e, i[a], a, i) + "", (l = u.get(h)) ? (r[a] = l, l.__data__ = i[a], u.delete(h)) : n[a] = new Ki(e, i[a]);
  for (a = 0; a < c; ++a)
    (l = t[a]) && u.get(f[a]) === l && (o[a] = l);
}
function v1(e) {
  return e.__data__;
}
function m1(e, t) {
  if (!arguments.length) return Array.from(this, v1);
  var n = t ? p1 : g1, r = this._parents, o = this._groups;
  typeof e != "function" && (e = h1(e));
  for (var i = o.length, s = new Array(i), a = new Array(i), l = new Array(i), u = 0; u < i; ++u) {
    var c = r[u], d = o[u], f = d.length, h = y1(e.call(c, c && c.__data__, u, r)), p = h.length, b = a[u] = new Array(p), x = s[u] = new Array(p), k = l[u] = new Array(f);
    n(c, d, b, x, k, h, t);
    for (var v = 0, _ = 0, w, C; v < p; ++v)
      if (w = b[v]) {
        for (v >= _ && (_ = v + 1); !(C = x[_]) && ++_ < p; ) ;
        w._next = C || null;
      }
  }
  return s = new At(s, r), s._enter = a, s._exit = l, s;
}
function y1(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function w1() {
  return new At(this._exit || this._groups.map(bd), this._parents);
}
function b1(e, t, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function x1(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, i = r.length, s = Math.min(o, i), a = new Array(o), l = 0; l < s; ++l)
    for (var u = n[l], c = r[l], d = u.length, f = a[l] = new Array(d), h, p = 0; p < d; ++p)
      (h = u[p] || c[p]) && (f[p] = h);
  for (; l < o; ++l)
    a[l] = n[l];
  return new At(a, this._parents);
}
function _1() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, i = r[o], s; --o >= 0; )
      (s = r[o]) && (i && s.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(s, i), i = s);
  return this;
}
function $1(e) {
  e || (e = C1);
  function t(d, f) {
    return d && f ? e(d.__data__, f.__data__) : !d - !f;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), i = 0; i < r; ++i) {
    for (var s = n[i], a = s.length, l = o[i] = new Array(a), u, c = 0; c < a; ++c)
      (u = s[c]) && (l[c] = u);
    l.sort(t);
  }
  return new At(o, this._parents).order();
}
function C1(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function k1() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function S1() {
  return Array.from(this);
}
function E1() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length; o < i; ++o) {
      var s = r[o];
      if (s) return s;
    }
  return null;
}
function N1() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function P1() {
  return !this.node();
}
function O1(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], i = 0, s = o.length, a; i < s; ++i)
      (a = o[i]) && e.call(a, a.__data__, i, o);
  return this;
}
function M1(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function V1(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function z1(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function H1(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function T1(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function L1(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function D1(e, t) {
  var n = Cs(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? V1 : M1 : typeof t == "function" ? n.local ? L1 : T1 : n.local ? H1 : z1)(n, t));
}
function xd(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function A1(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function I1(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function R1(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function Z1(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? A1 : typeof t == "function" ? R1 : I1)(e, t, n ?? "")) : Ur(this.node(), e);
}
function Ur(e, t) {
  return e.style.getPropertyValue(t) || xd(e).getComputedStyle(e, null).getPropertyValue(t);
}
function B1(e) {
  return function() {
    delete this[e];
  };
}
function K1(e, t) {
  return function() {
    this[e] = t;
  };
}
function Y1(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function X1(e, t) {
  return arguments.length > 1 ? this.each((t == null ? B1 : typeof t == "function" ? Y1 : K1)(e, t)) : this.node()[e];
}
function _d(e) {
  return e.trim().split(/^|\s+/);
}
function al(e) {
  return e.classList || new $d(e);
}
function $d(e) {
  this._node = e, this._names = _d(e.getAttribute("class") || "");
}
$d.prototype = {
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
function Cd(e, t) {
  for (var n = al(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function kd(e, t) {
  for (var n = al(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
}
function W1(e) {
  return function() {
    Cd(this, e);
  };
}
function F1(e) {
  return function() {
    kd(this, e);
  };
}
function j1(e, t) {
  return function() {
    (t.apply(this, arguments) ? Cd : kd)(this, e);
  };
}
function q1(e, t) {
  var n = _d(e + "");
  if (arguments.length < 2) {
    for (var r = al(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? j1 : t ? W1 : F1)(n, t));
}
function G1() {
  this.textContent = "";
}
function U1(e) {
  return function() {
    this.textContent = e;
  };
}
function J1(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function Q1(e) {
  return arguments.length ? this.each(e == null ? G1 : (typeof e == "function" ? J1 : U1)(e)) : this.node().textContent;
}
function e0() {
  this.innerHTML = "";
}
function t0(e) {
  return function() {
    this.innerHTML = e;
  };
}
function n0(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function r0(e) {
  return arguments.length ? this.each(e == null ? e0 : (typeof e == "function" ? n0 : t0)(e)) : this.node().innerHTML;
}
function o0() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function i0() {
  return this.each(o0);
}
function s0() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function a0() {
  return this.each(s0);
}
function l0(e) {
  var t = typeof e == "function" ? e : vd(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function u0() {
  return null;
}
function c0(e, t) {
  var n = typeof e == "function" ? e : vd(e), r = t == null ? u0 : typeof t == "function" ? t : sl(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function d0() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function f0() {
  return this.each(d0);
}
function h0() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function g0() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function p0(e) {
  return this.select(e ? g0 : h0);
}
function v0(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function m0(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function y0(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", r = t.indexOf(".");
    return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n };
  });
}
function w0(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, o = t.length, i; n < o; ++n)
        i = t[n], (!e.type || i.type === e.type) && i.name === e.name ? this.removeEventListener(i.type, i.listener, i.options) : t[++r] = i;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function b0(e, t, n) {
  return function() {
    var r = this.__on, o, i = m0(t);
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
function x0(e, t, n) {
  var r = y0(e + ""), o, i = r.length, s;
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
  for (a = t ? b0 : w0, o = 0; o < i; ++o) this.each(a(r[o], t, n));
  return this;
}
function Sd(e, t, n) {
  var r = xd(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function _0(e, t) {
  return function() {
    return Sd(this, e, t);
  };
}
function $0(e, t) {
  return function() {
    return Sd(this, e, t.apply(this, arguments));
  };
}
function C0(e, t) {
  return this.each((typeof t == "function" ? $0 : _0)(e, t));
}
function* k0() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length, s; o < i; ++o)
      (s = r[o]) && (yield s);
}
var Ed = [null];
function At(e, t) {
  this._groups = e, this._parents = t;
}
function Wo() {
  return new At([[document.documentElement]], Ed);
}
function S0() {
  return this;
}
At.prototype = Wo.prototype = {
  constructor: At,
  select: Jv,
  selectAll: n1,
  selectChild: s1,
  selectChildren: c1,
  filter: d1,
  data: m1,
  enter: f1,
  exit: w1,
  join: b1,
  merge: x1,
  selection: S0,
  order: _1,
  sort: $1,
  call: k1,
  nodes: S1,
  node: E1,
  size: N1,
  empty: P1,
  each: O1,
  attr: D1,
  style: Z1,
  property: X1,
  classed: q1,
  text: Q1,
  html: r0,
  raise: i0,
  lower: a0,
  append: l0,
  insert: c0,
  remove: f0,
  clone: p0,
  datum: v0,
  on: x0,
  dispatch: C0,
  [Symbol.iterator]: k0
};
function Yt(e) {
  return typeof e == "string" ? new At([[document.querySelector(e)]], [document.documentElement]) : new At([[e]], Ed);
}
function E0(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function en(e, t) {
  if (e = E0(e), t === void 0 && (t = e.currentTarget), t) {
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
const N0 = { passive: !1 }, Mo = { capture: !0, passive: !1 };
function Xs(e) {
  e.stopImmediatePropagation();
}
function Br(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Nd(e) {
  var t = e.document.documentElement, n = Yt(e).on("dragstart.drag", Br, Mo);
  "onselectstart" in t ? n.on("selectstart.drag", Br, Mo) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function Pd(e, t) {
  var n = e.document.documentElement, r = Yt(e).on("dragstart.drag", null);
  t && (r.on("click.drag", Br, Mo), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const di = (e) => () => e;
function ba(e, {
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
ba.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function P0(e) {
  return !e.ctrlKey && !e.button;
}
function O0() {
  return this.parentNode;
}
function M0(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function V0() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function z0() {
  var e = P0, t = O0, n = M0, r = V0, o = {}, i = $s("start", "drag", "end"), s = 0, a, l, u, c, d = 0;
  function f(w) {
    w.on("mousedown.drag", h).filter(r).on("touchstart.drag", x).on("touchmove.drag", k, N0).on("touchend.drag touchcancel.drag", v).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function h(w, C) {
    if (!(c || !e.call(this, w, C))) {
      var N = _(this, t.call(this, w, C), w, C, "mouse");
      N && (Yt(w.view).on("mousemove.drag", p, Mo).on("mouseup.drag", b, Mo), Nd(w.view), Xs(w), u = !1, a = w.clientX, l = w.clientY, N("start", w));
    }
  }
  function p(w) {
    if (Br(w), !u) {
      var C = w.clientX - a, N = w.clientY - l;
      u = C * C + N * N > d;
    }
    o.mouse("drag", w);
  }
  function b(w) {
    Yt(w.view).on("mousemove.drag mouseup.drag", null), Pd(w.view, u), Br(w), o.mouse("end", w);
  }
  function x(w, C) {
    if (e.call(this, w, C)) {
      var N = w.changedTouches, P = t.call(this, w, C), M = N.length, z, H;
      for (z = 0; z < M; ++z)
        (H = _(this, P, w, C, N[z].identifier, N[z])) && (Xs(w), H("start", w, N[z]));
    }
  }
  function k(w) {
    var C = w.changedTouches, N = C.length, P, M;
    for (P = 0; P < N; ++P)
      (M = o[C[P].identifier]) && (Br(w), M("drag", w, C[P]));
  }
  function v(w) {
    var C = w.changedTouches, N = C.length, P, M;
    for (c && clearTimeout(c), c = setTimeout(function() {
      c = null;
    }, 500), P = 0; P < N; ++P)
      (M = o[C[P].identifier]) && (Xs(w), M("end", w, C[P]));
  }
  function _(w, C, N, P, M, z) {
    var H = i.copy(), A = en(z || N, C), D, R, S;
    if ((S = n.call(w, new ba("beforestart", {
      sourceEvent: N,
      target: f,
      identifier: M,
      active: s,
      x: A[0],
      y: A[1],
      dx: 0,
      dy: 0,
      dispatch: H
    }), P)) != null)
      return D = S.x - A[0] || 0, R = S.y - A[1] || 0, function O($, E, V) {
        var T = A, Z;
        switch ($) {
          case "start":
            o[M] = O, Z = s++;
            break;
          case "end":
            delete o[M], --s;
          // falls through
          case "drag":
            A = en(V || E, C), Z = s;
            break;
        }
        H.call(
          $,
          w,
          new ba($, {
            sourceEvent: E,
            subject: S,
            target: f,
            identifier: M,
            active: Z,
            x: A[0] + D,
            y: A[1] + R,
            dx: A[0] - T[0],
            dy: A[1] - T[1],
            dispatch: H
          }),
          P
        );
      };
  }
  return f.filter = function(w) {
    return arguments.length ? (e = typeof w == "function" ? w : di(!!w), f) : e;
  }, f.container = function(w) {
    return arguments.length ? (t = typeof w == "function" ? w : di(w), f) : t;
  }, f.subject = function(w) {
    return arguments.length ? (n = typeof w == "function" ? w : di(w), f) : n;
  }, f.touchable = function(w) {
    return arguments.length ? (r = typeof w == "function" ? w : di(!!w), f) : r;
  }, f.on = function() {
    var w = i.on.apply(i, arguments);
    return w === i ? f : w;
  }, f.clickDistance = function(w) {
    return arguments.length ? (d = (w = +w) * w, f) : Math.sqrt(d);
  }, f;
}
function ll(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function Od(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function Fo() {
}
var Vo = 0.7, Yi = 1 / Vo, Kr = "\\s*([+-]?\\d+)\\s*", zo = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", mn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", H0 = /^#([0-9a-f]{3,8})$/, T0 = new RegExp(`^rgb\\(${Kr},${Kr},${Kr}\\)$`), L0 = new RegExp(`^rgb\\(${mn},${mn},${mn}\\)$`), D0 = new RegExp(`^rgba\\(${Kr},${Kr},${Kr},${zo}\\)$`), A0 = new RegExp(`^rgba\\(${mn},${mn},${mn},${zo}\\)$`), I0 = new RegExp(`^hsl\\(${zo},${mn},${mn}\\)$`), R0 = new RegExp(`^hsla\\(${zo},${mn},${mn},${zo}\\)$`), Jl = {
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
ll(Fo, Ho, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Ql,
  // Deprecated! Use color.formatHex.
  formatHex: Ql,
  formatHex8: Z0,
  formatHsl: B0,
  formatRgb: eu,
  toString: eu
});
function Ql() {
  return this.rgb().formatHex();
}
function Z0() {
  return this.rgb().formatHex8();
}
function B0() {
  return Md(this).formatHsl();
}
function eu() {
  return this.rgb().formatRgb();
}
function Ho(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = H0.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? tu(t) : n === 3 ? new Ot(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? fi(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? fi(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = T0.exec(e)) ? new Ot(t[1], t[2], t[3], 1) : (t = L0.exec(e)) ? new Ot(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = D0.exec(e)) ? fi(t[1], t[2], t[3], t[4]) : (t = A0.exec(e)) ? fi(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = I0.exec(e)) ? ou(t[1], t[2] / 100, t[3] / 100, 1) : (t = R0.exec(e)) ? ou(t[1], t[2] / 100, t[3] / 100, t[4]) : Jl.hasOwnProperty(e) ? tu(Jl[e]) : e === "transparent" ? new Ot(NaN, NaN, NaN, 0) : null;
}
function tu(e) {
  return new Ot(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function fi(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new Ot(e, t, n, r);
}
function K0(e) {
  return e instanceof Fo || (e = Ho(e)), e ? (e = e.rgb(), new Ot(e.r, e.g, e.b, e.opacity)) : new Ot();
}
function xa(e, t, n, r) {
  return arguments.length === 1 ? K0(e) : new Ot(e, t, n, r ?? 1);
}
function Ot(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
ll(Ot, xa, Od(Fo, {
  brighter(e) {
    return e = e == null ? Yi : Math.pow(Yi, e), new Ot(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Vo : Math.pow(Vo, e), new Ot(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Ot(pr(this.r), pr(this.g), pr(this.b), Xi(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: nu,
  // Deprecated! Use color.formatHex.
  formatHex: nu,
  formatHex8: Y0,
  formatRgb: ru,
  toString: ru
}));
function nu() {
  return `#${hr(this.r)}${hr(this.g)}${hr(this.b)}`;
}
function Y0() {
  return `#${hr(this.r)}${hr(this.g)}${hr(this.b)}${hr((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function ru() {
  const e = Xi(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${pr(this.r)}, ${pr(this.g)}, ${pr(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Xi(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function pr(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function hr(e) {
  return e = pr(e), (e < 16 ? "0" : "") + e.toString(16);
}
function ou(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new nn(e, t, n, r);
}
function Md(e) {
  if (e instanceof nn) return new nn(e.h, e.s, e.l, e.opacity);
  if (e instanceof Fo || (e = Ho(e)), !e) return new nn();
  if (e instanceof nn) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), s = NaN, a = i - o, l = (i + o) / 2;
  return a ? (t === i ? s = (n - r) / a + (n < r) * 6 : n === i ? s = (r - t) / a + 2 : s = (t - n) / a + 4, a /= l < 0.5 ? i + o : 2 - i - o, s *= 60) : a = l > 0 && l < 1 ? 0 : s, new nn(s, a, l, e.opacity);
}
function X0(e, t, n, r) {
  return arguments.length === 1 ? Md(e) : new nn(e, t, n, r ?? 1);
}
function nn(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
ll(nn, X0, Od(Fo, {
  brighter(e) {
    return e = e == null ? Yi : Math.pow(Yi, e), new nn(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Vo : Math.pow(Vo, e), new nn(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new Ot(
      Ws(e >= 240 ? e - 240 : e + 120, o, r),
      Ws(e, o, r),
      Ws(e < 120 ? e + 240 : e - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new nn(iu(this.h), hi(this.s), hi(this.l), Xi(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Xi(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${iu(this.h)}, ${hi(this.s) * 100}%, ${hi(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function iu(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function hi(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Ws(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const Vd = (e) => () => e;
function W0(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function F0(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function j0(e) {
  return (e = +e) == 1 ? zd : function(t, n) {
    return n - t ? F0(t, n, e) : Vd(isNaN(t) ? n : t);
  };
}
function zd(e, t) {
  var n = t - e;
  return n ? W0(e, n) : Vd(isNaN(e) ? t : e);
}
const su = function e(t) {
  var n = j0(t);
  function r(o, i) {
    var s = n((o = xa(o)).r, (i = xa(i)).r), a = n(o.g, i.g), l = n(o.b, i.b), u = zd(o.opacity, i.opacity);
    return function(c) {
      return o.r = s(c), o.g = a(c), o.b = l(c), o.opacity = u(c), o + "";
    };
  }
  return r.gamma = e, r;
}(1);
function Gn(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
var _a = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Fs = new RegExp(_a.source, "g");
function q0(e) {
  return function() {
    return e;
  };
}
function G0(e) {
  return function(t) {
    return e(t) + "";
  };
}
function U0(e, t) {
  var n = _a.lastIndex = Fs.lastIndex = 0, r, o, i, s = -1, a = [], l = [];
  for (e = e + "", t = t + ""; (r = _a.exec(e)) && (o = Fs.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), a[s] ? a[s] += i : a[++s] = i), (r = r[0]) === (o = o[0]) ? a[s] ? a[s] += o : a[++s] = o : (a[++s] = null, l.push({ i: s, x: Gn(r, o) })), n = Fs.lastIndex;
  return n < t.length && (i = t.slice(n), a[s] ? a[s] += i : a[++s] = i), a.length < 2 ? l[0] ? G0(l[0].x) : q0(t) : (t = l.length, function(u) {
    for (var c = 0, d; c < t; ++c) a[(d = l[c]).i] = d.x(u);
    return a.join("");
  });
}
var au = 180 / Math.PI, Hd = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Td(e, t, n, r, o, i) {
  var s, a, l;
  return (s = Math.sqrt(e * e + t * t)) && (e /= s, t /= s), (l = e * n + t * r) && (n -= e * l, r -= t * l), (a = Math.sqrt(n * n + r * r)) && (n /= a, r /= a, l /= a), e * r < t * n && (e = -e, t = -t, l = -l, s = -s), {
    translateX: o,
    translateY: i,
    rotate: Math.atan2(t, e) * au,
    skewX: Math.atan(l) * au,
    scaleX: s,
    scaleY: a
  };
}
var gi;
function J0(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? Hd : Td(t.a, t.b, t.c, t.d, t.e, t.f);
}
function Q0(e) {
  return e == null || (gi || (gi = document.createElementNS("http://www.w3.org/2000/svg", "g")), gi.setAttribute("transform", e), !(e = gi.transform.baseVal.consolidate())) ? Hd : (e = e.matrix, Td(e.a, e.b, e.c, e.d, e.e, e.f));
}
function Ld(e, t, n, r) {
  function o(u) {
    return u.length ? u.pop() + " " : "";
  }
  function i(u, c, d, f, h, p) {
    if (u !== d || c !== f) {
      var b = h.push("translate(", null, t, null, n);
      p.push({ i: b - 4, x: Gn(u, d) }, { i: b - 2, x: Gn(c, f) });
    } else (d || f) && h.push("translate(" + d + t + f + n);
  }
  function s(u, c, d, f) {
    u !== c ? (u - c > 180 ? c += 360 : c - u > 180 && (u += 360), f.push({ i: d.push(o(d) + "rotate(", null, r) - 2, x: Gn(u, c) })) : c && d.push(o(d) + "rotate(" + c + r);
  }
  function a(u, c, d, f) {
    u !== c ? f.push({ i: d.push(o(d) + "skewX(", null, r) - 2, x: Gn(u, c) }) : c && d.push(o(d) + "skewX(" + c + r);
  }
  function l(u, c, d, f, h, p) {
    if (u !== d || c !== f) {
      var b = h.push(o(h) + "scale(", null, ",", null, ")");
      p.push({ i: b - 4, x: Gn(u, d) }, { i: b - 2, x: Gn(c, f) });
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
var em = Ld(J0, "px, ", "px)", "deg)"), tm = Ld(Q0, ", ", ")", ")"), nm = 1e-12;
function lu(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function rm(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function om(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const im = function e(t, n, r) {
  function o(i, s) {
    var a = i[0], l = i[1], u = i[2], c = s[0], d = s[1], f = s[2], h = c - a, p = d - l, b = h * h + p * p, x, k;
    if (b < nm)
      k = Math.log(f / u) / t, x = function(P) {
        return [
          a + P * h,
          l + P * p,
          u * Math.exp(t * P * k)
        ];
      };
    else {
      var v = Math.sqrt(b), _ = (f * f - u * u + r * b) / (2 * u * n * v), w = (f * f - u * u - r * b) / (2 * f * n * v), C = Math.log(Math.sqrt(_ * _ + 1) - _), N = Math.log(Math.sqrt(w * w + 1) - w);
      k = (N - C) / t, x = function(P) {
        var M = P * k, z = lu(C), H = u / (n * v) * (z * om(t * M + C) - rm(C));
        return [
          a + H * h,
          l + H * p,
          u * z / lu(t * M + C)
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
var Jr = 0, wo = 0, vo = 0, Dd = 1e3, Wi, bo, Fi = 0, mr = 0, ks = 0, To = typeof performance == "object" && performance.now ? performance : Date, Ad = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function ul() {
  return mr || (Ad(sm), mr = To.now() + ks);
}
function sm() {
  mr = 0;
}
function ji() {
  this._call = this._time = this._next = null;
}
ji.prototype = Id.prototype = {
  constructor: ji,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? ul() : +n) + (t == null ? 0 : +t), !this._next && bo !== this && (bo ? bo._next = this : Wi = this, bo = this), this._call = e, this._time = n, $a();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, $a());
  }
};
function Id(e, t, n) {
  var r = new ji();
  return r.restart(e, t, n), r;
}
function am() {
  ul(), ++Jr;
  for (var e = Wi, t; e; )
    (t = mr - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --Jr;
}
function uu() {
  mr = (Fi = To.now()) + ks, Jr = wo = 0;
  try {
    am();
  } finally {
    Jr = 0, um(), mr = 0;
  }
}
function lm() {
  var e = To.now(), t = e - Fi;
  t > Dd && (ks -= t, Fi = e);
}
function um() {
  for (var e, t = Wi, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : Wi = n);
  bo = e, $a(r);
}
function $a(e) {
  if (!Jr) {
    wo && (wo = clearTimeout(wo));
    var t = e - mr;
    t > 24 ? (e < 1 / 0 && (wo = setTimeout(uu, e - To.now() - ks)), vo && (vo = clearInterval(vo))) : (vo || (Fi = To.now(), vo = setInterval(lm, Dd)), Jr = 1, Ad(uu));
  }
}
function cu(e, t, n) {
  var r = new ji();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var cm = $s("start", "end", "cancel", "interrupt"), dm = [], Rd = 0, du = 1, Ca = 2, Ci = 3, fu = 4, ka = 5, ki = 6;
function Ss(e, t, n, r, o, i) {
  var s = e.__transition;
  if (!s) e.__transition = {};
  else if (n in s) return;
  fm(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: cm,
    tween: dm,
    time: i.time,
    delay: i.delay,
    duration: i.duration,
    ease: i.ease,
    timer: null,
    state: Rd
  });
}
function cl(e, t) {
  var n = dn(e, t);
  if (n.state > Rd) throw new Error("too late; already scheduled");
  return n;
}
function kn(e, t) {
  var n = dn(e, t);
  if (n.state > Ci) throw new Error("too late; already running");
  return n;
}
function dn(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function fm(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = Id(i, 0, n.time);
  function i(u) {
    n.state = du, n.timer.restart(s, n.delay, n.time), n.delay <= u && s(u - n.delay);
  }
  function s(u) {
    var c, d, f, h;
    if (n.state !== du) return l();
    for (c in r)
      if (h = r[c], h.name === n.name) {
        if (h.state === Ci) return cu(s);
        h.state === fu ? (h.state = ki, h.timer.stop(), h.on.call("interrupt", e, e.__data__, h.index, h.group), delete r[c]) : +c < t && (h.state = ki, h.timer.stop(), h.on.call("cancel", e, e.__data__, h.index, h.group), delete r[c]);
      }
    if (cu(function() {
      n.state === Ci && (n.state = fu, n.timer.restart(a, n.delay, n.time), a(u));
    }), n.state = Ca, n.on.call("start", e, e.__data__, n.index, n.group), n.state === Ca) {
      for (n.state = Ci, o = new Array(f = n.tween.length), c = 0, d = -1; c < f; ++c)
        (h = n.tween[c].value.call(e, e.__data__, n.index, n.group)) && (o[++d] = h);
      o.length = d + 1;
    }
  }
  function a(u) {
    for (var c = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), n.state = ka, 1), d = -1, f = o.length; ++d < f; )
      o[d].call(e, c);
    n.state === ka && (n.on.call("end", e, e.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = ki, n.timer.stop(), delete r[t];
    for (var u in r) return;
    delete e.__transition;
  }
}
function Si(e, t) {
  var n = e.__transition, r, o, i = !0, s;
  if (n) {
    t = t == null ? null : t + "";
    for (s in n) {
      if ((r = n[s]).name !== t) {
        i = !1;
        continue;
      }
      o = r.state > Ca && r.state < ka, r.state = ki, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[s];
    }
    i && delete e.__transition;
  }
}
function hm(e) {
  return this.each(function() {
    Si(this, e);
  });
}
function gm(e, t) {
  var n, r;
  return function() {
    var o = kn(this, e), i = o.tween;
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
function pm(e, t, n) {
  var r, o;
  if (typeof n != "function") throw new Error();
  return function() {
    var i = kn(this, e), s = i.tween;
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
function vm(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = dn(this.node(), n).tween, o = 0, i = r.length, s; o < i; ++o)
      if ((s = r[o]).name === e)
        return s.value;
    return null;
  }
  return this.each((t == null ? gm : pm)(n, e, t));
}
function dl(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = kn(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return dn(o, r).value[t];
  };
}
function Zd(e, t) {
  var n;
  return (typeof t == "number" ? Gn : t instanceof Ho ? su : (n = Ho(t)) ? (t = n, su) : U0)(e, t);
}
function mm(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function ym(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function wm(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttribute(e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function bm(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttributeNS(e.space, e.local);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function xm(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttribute(e) : (s = this.getAttribute(e), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a)));
  };
}
function _m(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttributeNS(e.space, e.local) : (s = this.getAttributeNS(e.space, e.local), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a)));
  };
}
function $m(e, t) {
  var n = Cs(e), r = n === "transform" ? tm : Zd;
  return this.attrTween(e, typeof t == "function" ? (n.local ? _m : xm)(n, r, dl(this, "attr." + e, t)) : t == null ? (n.local ? ym : mm)(n) : (n.local ? bm : wm)(n, r, t));
}
function Cm(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function km(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function Sm(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && km(e, i)), n;
  }
  return o._value = t, o;
}
function Em(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && Cm(e, i)), n;
  }
  return o._value = t, o;
}
function Nm(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = Cs(e);
  return this.tween(n, (r.local ? Sm : Em)(r, t));
}
function Pm(e, t) {
  return function() {
    cl(this, e).delay = +t.apply(this, arguments);
  };
}
function Om(e, t) {
  return t = +t, function() {
    cl(this, e).delay = t;
  };
}
function Mm(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Pm : Om)(t, e)) : dn(this.node(), t).delay;
}
function Vm(e, t) {
  return function() {
    kn(this, e).duration = +t.apply(this, arguments);
  };
}
function zm(e, t) {
  return t = +t, function() {
    kn(this, e).duration = t;
  };
}
function Hm(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Vm : zm)(t, e)) : dn(this.node(), t).duration;
}
function Tm(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    kn(this, e).ease = t;
  };
}
function Lm(e) {
  var t = this._id;
  return arguments.length ? this.each(Tm(t, e)) : dn(this.node(), t).ease;
}
function Dm(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    kn(this, e).ease = n;
  };
}
function Am(e) {
  if (typeof e != "function") throw new Error();
  return this.each(Dm(this._id, e));
}
function Im(e) {
  typeof e != "function" && (e = yd(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && a.push(l);
  return new Kn(r, this._parents, this._name, this._id);
}
function Rm(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), s = new Array(r), a = 0; a < i; ++a)
    for (var l = t[a], u = n[a], c = l.length, d = s[a] = new Array(c), f, h = 0; h < c; ++h)
      (f = l[h] || u[h]) && (d[h] = f);
  for (; a < r; ++a)
    s[a] = t[a];
  return new Kn(s, this._parents, this._name, this._id);
}
function Zm(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function Bm(e, t, n) {
  var r, o, i = Zm(t) ? cl : kn;
  return function() {
    var s = i(this, e), a = s.on;
    a !== r && (o = (r = a).copy()).on(t, n), s.on = o;
  };
}
function Km(e, t) {
  var n = this._id;
  return arguments.length < 2 ? dn(this.node(), n).on.on(e) : this.each(Bm(n, e, t));
}
function Ym(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function Xm() {
  return this.on("end.remove", Ym(this._id));
}
function Wm(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = sl(e));
  for (var r = this._groups, o = r.length, i = new Array(o), s = 0; s < o; ++s)
    for (var a = r[s], l = a.length, u = i[s] = new Array(l), c, d, f = 0; f < l; ++f)
      (c = a[f]) && (d = e.call(c, c.__data__, f, a)) && ("__data__" in c && (d.__data__ = c.__data__), u[f] = d, Ss(u[f], t, n, f, u, dn(c, n)));
  return new Kn(i, this._parents, t, n);
}
function Fm(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = md(e));
  for (var r = this._groups, o = r.length, i = [], s = [], a = 0; a < o; ++a)
    for (var l = r[a], u = l.length, c, d = 0; d < u; ++d)
      if (c = l[d]) {
        for (var f = e.call(c, c.__data__, d, l), h, p = dn(c, n), b = 0, x = f.length; b < x; ++b)
          (h = f[b]) && Ss(h, t, n, b, f, p);
        i.push(f), s.push(c);
      }
  return new Kn(i, s, t, n);
}
var jm = Wo.prototype.constructor;
function qm() {
  return new jm(this._groups, this._parents);
}
function Gm(e, t) {
  var n, r, o;
  return function() {
    var i = Ur(this, e), s = (this.style.removeProperty(e), Ur(this, e));
    return i === s ? null : i === n && s === r ? o : o = t(n = i, r = s);
  };
}
function Bd(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Um(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = Ur(this, e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function Jm(e, t, n) {
  var r, o, i;
  return function() {
    var s = Ur(this, e), a = n(this), l = a + "";
    return a == null && (l = a = (this.style.removeProperty(e), Ur(this, e))), s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a));
  };
}
function Qm(e, t) {
  var n, r, o, i = "style." + t, s = "end." + i, a;
  return function() {
    var l = kn(this, e), u = l.on, c = l.value[i] == null ? a || (a = Bd(t)) : void 0;
    (u !== n || o !== c) && (r = (n = u).copy()).on(s, o = c), l.on = r;
  };
}
function e2(e, t, n) {
  var r = (e += "") == "transform" ? em : Zd;
  return t == null ? this.styleTween(e, Gm(e, r)).on("end.style." + e, Bd(e)) : typeof t == "function" ? this.styleTween(e, Jm(e, r, dl(this, "style." + e, t))).each(Qm(this._id, e)) : this.styleTween(e, Um(e, r, t), n).on("end.style." + e, null);
}
function t2(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function n2(e, t, n) {
  var r, o;
  function i() {
    var s = t.apply(this, arguments);
    return s !== o && (r = (o = s) && t2(e, s, n)), r;
  }
  return i._value = t, i;
}
function r2(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  return this.tween(r, n2(e, t, n ?? ""));
}
function o2(e) {
  return function() {
    this.textContent = e;
  };
}
function i2(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function s2(e) {
  return this.tween("text", typeof e == "function" ? i2(dl(this, "text", e)) : o2(e == null ? "" : e + ""));
}
function a2(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function l2(e) {
  var t, n;
  function r() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && a2(o)), t;
  }
  return r._value = e, r;
}
function u2(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, l2(e));
}
function c2() {
  for (var e = this._name, t = this._id, n = Kd(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, u = 0; u < a; ++u)
      if (l = s[u]) {
        var c = dn(l, t);
        Ss(l, e, n, u, s, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new Kn(r, this._parents, e, n);
}
function d2() {
  var e, t, n = this, r = n._id, o = n.size();
  return new Promise(function(i, s) {
    var a = { value: s }, l = { value: function() {
      --o === 0 && i();
    } };
    n.each(function() {
      var u = kn(this, r), c = u.on;
      c !== e && (t = (e = c).copy(), t._.cancel.push(a), t._.interrupt.push(a), t._.end.push(l)), u.on = t;
    }), o === 0 && i();
  });
}
var f2 = 0;
function Kn(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function Kd() {
  return ++f2;
}
var Nn = Wo.prototype;
Kn.prototype = {
  constructor: Kn,
  select: Wm,
  selectAll: Fm,
  selectChild: Nn.selectChild,
  selectChildren: Nn.selectChildren,
  filter: Im,
  merge: Rm,
  selection: qm,
  transition: c2,
  call: Nn.call,
  nodes: Nn.nodes,
  node: Nn.node,
  size: Nn.size,
  empty: Nn.empty,
  each: Nn.each,
  on: Km,
  attr: $m,
  attrTween: Nm,
  style: e2,
  styleTween: r2,
  text: s2,
  textTween: u2,
  remove: Xm,
  tween: vm,
  delay: Mm,
  duration: Hm,
  ease: Lm,
  easeVarying: Am,
  end: d2,
  [Symbol.iterator]: Nn[Symbol.iterator]
};
function h2(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var g2 = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: h2
};
function p2(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function v2(e) {
  var t, n;
  e instanceof Kn ? (t = e._id, e = e._name) : (t = Kd(), (n = g2).time = ul(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && Ss(l, e, t, u, s, n || p2(l, t));
  return new Kn(r, this._parents, e, t);
}
Wo.prototype.interrupt = hm;
Wo.prototype.transition = v2;
const pi = (e) => () => e;
function m2(e, {
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
function Mn(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
Mn.prototype = {
  constructor: Mn,
  scale: function(e) {
    return e === 1 ? this : new Mn(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new Mn(this.k, this.x + this.k * e, this.y + this.k * t);
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
var Es = new Mn(1, 0, 0);
Yd.prototype = Mn.prototype;
function Yd(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return Es;
  return e.__zoom;
}
function js(e) {
  e.stopImmediatePropagation();
}
function mo(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function y2(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function w2() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function hu() {
  return this.__zoom || Es;
}
function b2(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function x2() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function _2(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0], o = e.invertX(t[1][0]) - n[1][0], i = e.invertY(t[0][1]) - n[0][1], s = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    s > i ? (i + s) / 2 : Math.min(0, i) || Math.max(0, s)
  );
}
function Xd() {
  var e = y2, t = w2, n = _2, r = b2, o = x2, i = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], a = 250, l = im, u = $s("start", "zoom", "end"), c, d, f, h = 500, p = 150, b = 0, x = 10;
  function k(S) {
    S.property("__zoom", hu).on("wheel.zoom", M, { passive: !1 }).on("mousedown.zoom", z).on("dblclick.zoom", H).filter(o).on("touchstart.zoom", A).on("touchmove.zoom", D).on("touchend.zoom touchcancel.zoom", R).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  k.transform = function(S, O, $, E) {
    var V = S.selection ? S.selection() : S;
    V.property("__zoom", hu), S !== V ? C(S, O, $, E) : V.interrupt().each(function() {
      N(this, arguments).event(E).start().zoom(null, typeof O == "function" ? O.apply(this, arguments) : O).end();
    });
  }, k.scaleBy = function(S, O, $, E) {
    k.scaleTo(S, function() {
      var V = this.__zoom.k, T = typeof O == "function" ? O.apply(this, arguments) : O;
      return V * T;
    }, $, E);
  }, k.scaleTo = function(S, O, $, E) {
    k.transform(S, function() {
      var V = t.apply(this, arguments), T = this.__zoom, Z = $ == null ? w(V) : typeof $ == "function" ? $.apply(this, arguments) : $, W = T.invert(Z), q = typeof O == "function" ? O.apply(this, arguments) : O;
      return n(_(v(T, q), Z, W), V, s);
    }, $, E);
  }, k.translateBy = function(S, O, $, E) {
    k.transform(S, function() {
      return n(this.__zoom.translate(
        typeof O == "function" ? O.apply(this, arguments) : O,
        typeof $ == "function" ? $.apply(this, arguments) : $
      ), t.apply(this, arguments), s);
    }, null, E);
  }, k.translateTo = function(S, O, $, E, V) {
    k.transform(S, function() {
      var T = t.apply(this, arguments), Z = this.__zoom, W = E == null ? w(T) : typeof E == "function" ? E.apply(this, arguments) : E;
      return n(Es.translate(W[0], W[1]).scale(Z.k).translate(
        typeof O == "function" ? -O.apply(this, arguments) : -O,
        typeof $ == "function" ? -$.apply(this, arguments) : -$
      ), T, s);
    }, E, V);
  };
  function v(S, O) {
    return O = Math.max(i[0], Math.min(i[1], O)), O === S.k ? S : new Mn(O, S.x, S.y);
  }
  function _(S, O, $) {
    var E = O[0] - $[0] * S.k, V = O[1] - $[1] * S.k;
    return E === S.x && V === S.y ? S : new Mn(S.k, E, V);
  }
  function w(S) {
    return [(+S[0][0] + +S[1][0]) / 2, (+S[0][1] + +S[1][1]) / 2];
  }
  function C(S, O, $, E) {
    S.on("start.zoom", function() {
      N(this, arguments).event(E).start();
    }).on("interrupt.zoom end.zoom", function() {
      N(this, arguments).event(E).end();
    }).tween("zoom", function() {
      var V = this, T = arguments, Z = N(V, T).event(E), W = t.apply(V, T), q = $ == null ? w(W) : typeof $ == "function" ? $.apply(V, T) : $, fe = Math.max(W[1][0] - W[0][0], W[1][1] - W[0][1]), Q = V.__zoom, B = typeof O == "function" ? O.apply(V, T) : O, ue = l(Q.invert(q).concat(fe / Q.k), B.invert(q).concat(fe / B.k));
      return function(we) {
        if (we === 1) we = B;
        else {
          var be = ue(we), ve = fe / be[2];
          we = new Mn(ve, q[0] - be[0] * ve, q[1] - be[1] * ve);
        }
        Z.zoom(null, we);
      };
    });
  }
  function N(S, O, $) {
    return !$ && S.__zooming || new P(S, O);
  }
  function P(S, O) {
    this.that = S, this.args = O, this.active = 0, this.sourceEvent = null, this.extent = t.apply(S, O), this.taps = 0;
  }
  P.prototype = {
    event: function(S) {
      return S && (this.sourceEvent = S), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(S, O) {
      return this.mouse && S !== "mouse" && (this.mouse[1] = O.invert(this.mouse[0])), this.touch0 && S !== "touch" && (this.touch0[1] = O.invert(this.touch0[0])), this.touch1 && S !== "touch" && (this.touch1[1] = O.invert(this.touch1[0])), this.that.__zoom = O, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(S) {
      var O = Yt(this.that).datum();
      u.call(
        S,
        this.that,
        new m2(S, {
          sourceEvent: this.sourceEvent,
          target: k,
          transform: this.that.__zoom,
          dispatch: u
        }),
        O
      );
    }
  };
  function M(S, ...O) {
    if (!e.apply(this, arguments)) return;
    var $ = N(this, O).event(S), E = this.__zoom, V = Math.max(i[0], Math.min(i[1], E.k * Math.pow(2, r.apply(this, arguments)))), T = en(S);
    if ($.wheel)
      ($.mouse[0][0] !== T[0] || $.mouse[0][1] !== T[1]) && ($.mouse[1] = E.invert($.mouse[0] = T)), clearTimeout($.wheel);
    else {
      if (E.k === V) return;
      $.mouse = [T, E.invert(T)], Si(this), $.start();
    }
    mo(S), $.wheel = setTimeout(Z, p), $.zoom("mouse", n(_(v(E, V), $.mouse[0], $.mouse[1]), $.extent, s));
    function Z() {
      $.wheel = null, $.end();
    }
  }
  function z(S, ...O) {
    if (f || !e.apply(this, arguments)) return;
    var $ = S.currentTarget, E = N(this, O, !0).event(S), V = Yt(S.view).on("mousemove.zoom", q, !0).on("mouseup.zoom", fe, !0), T = en(S, $), Z = S.clientX, W = S.clientY;
    Nd(S.view), js(S), E.mouse = [T, this.__zoom.invert(T)], Si(this), E.start();
    function q(Q) {
      if (mo(Q), !E.moved) {
        var B = Q.clientX - Z, ue = Q.clientY - W;
        E.moved = B * B + ue * ue > b;
      }
      E.event(Q).zoom("mouse", n(_(E.that.__zoom, E.mouse[0] = en(Q, $), E.mouse[1]), E.extent, s));
    }
    function fe(Q) {
      V.on("mousemove.zoom mouseup.zoom", null), Pd(Q.view, E.moved), mo(Q), E.event(Q).end();
    }
  }
  function H(S, ...O) {
    if (e.apply(this, arguments)) {
      var $ = this.__zoom, E = en(S.changedTouches ? S.changedTouches[0] : S, this), V = $.invert(E), T = $.k * (S.shiftKey ? 0.5 : 2), Z = n(_(v($, T), E, V), t.apply(this, O), s);
      mo(S), a > 0 ? Yt(this).transition().duration(a).call(C, Z, E, S) : Yt(this).call(k.transform, Z, E, S);
    }
  }
  function A(S, ...O) {
    if (e.apply(this, arguments)) {
      var $ = S.touches, E = $.length, V = N(this, O, S.changedTouches.length === E).event(S), T, Z, W, q;
      for (js(S), Z = 0; Z < E; ++Z)
        W = $[Z], q = en(W, this), q = [q, this.__zoom.invert(q), W.identifier], V.touch0 ? !V.touch1 && V.touch0[2] !== q[2] && (V.touch1 = q, V.taps = 0) : (V.touch0 = q, T = !0, V.taps = 1 + !!c);
      c && (c = clearTimeout(c)), T && (V.taps < 2 && (d = q[0], c = setTimeout(function() {
        c = null;
      }, h)), Si(this), V.start());
    }
  }
  function D(S, ...O) {
    if (this.__zooming) {
      var $ = N(this, O).event(S), E = S.changedTouches, V = E.length, T, Z, W, q;
      for (mo(S), T = 0; T < V; ++T)
        Z = E[T], W = en(Z, this), $.touch0 && $.touch0[2] === Z.identifier ? $.touch0[0] = W : $.touch1 && $.touch1[2] === Z.identifier && ($.touch1[0] = W);
      if (Z = $.that.__zoom, $.touch1) {
        var fe = $.touch0[0], Q = $.touch0[1], B = $.touch1[0], ue = $.touch1[1], we = (we = B[0] - fe[0]) * we + (we = B[1] - fe[1]) * we, be = (be = ue[0] - Q[0]) * be + (be = ue[1] - Q[1]) * be;
        Z = v(Z, Math.sqrt(we / be)), W = [(fe[0] + B[0]) / 2, (fe[1] + B[1]) / 2], q = [(Q[0] + ue[0]) / 2, (Q[1] + ue[1]) / 2];
      } else if ($.touch0) W = $.touch0[0], q = $.touch0[1];
      else return;
      $.zoom("touch", n(_(Z, W, q), $.extent, s));
    }
  }
  function R(S, ...O) {
    if (this.__zooming) {
      var $ = N(this, O).event(S), E = S.changedTouches, V = E.length, T, Z;
      for (js(S), f && clearTimeout(f), f = setTimeout(function() {
        f = null;
      }, h), T = 0; T < V; ++T)
        Z = E[T], $.touch0 && $.touch0[2] === Z.identifier ? delete $.touch0 : $.touch1 && $.touch1[2] === Z.identifier && delete $.touch1;
      if ($.touch1 && !$.touch0 && ($.touch0 = $.touch1, delete $.touch1), $.touch0) $.touch0[1] = this.__zoom.invert($.touch0[0]);
      else if ($.end(), $.taps === 2 && (Z = en(Z, this), Math.hypot(d[0] - Z[0], d[1] - Z[1]) < x)) {
        var W = Yt(this).on("dblclick.zoom");
        W && W.apply(this, arguments);
      }
    }
  }
  return k.wheelDelta = function(S) {
    return arguments.length ? (r = typeof S == "function" ? S : pi(+S), k) : r;
  }, k.filter = function(S) {
    return arguments.length ? (e = typeof S == "function" ? S : pi(!!S), k) : e;
  }, k.touchable = function(S) {
    return arguments.length ? (o = typeof S == "function" ? S : pi(!!S), k) : o;
  }, k.extent = function(S) {
    return arguments.length ? (t = typeof S == "function" ? S : pi([[+S[0][0], +S[0][1]], [+S[1][0], +S[1][1]]]), k) : t;
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
const jo = {
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
}, qi = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
];
var yr;
(function(e) {
  e.Strict = "strict", e.Loose = "loose";
})(yr || (yr = {}));
var nr;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(nr || (nr = {}));
var Gi;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(Gi || (Gi = {}));
const Sa = {
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
var Yr;
(function(e) {
  e.Bezier = "default", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e.SimpleBezier = "simplebezier";
})(Yr || (Yr = {}));
var Lo;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(Lo || (Lo = {}));
var Ce;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(Ce || (Ce = {}));
const gu = {
  [Ce.Left]: Ce.Right,
  [Ce.Right]: Ce.Left,
  [Ce.Top]: Ce.Bottom,
  [Ce.Bottom]: Ce.Top
};
function $2(e, t) {
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
function pu(e, t, n) {
  if (!n)
    return;
  const r = [];
  e.forEach((o, i) => {
    t != null && t.has(i) || r.push(o);
  }), r.length && n(r);
}
function C2(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const k2 = (e) => "id" in e && "source" in e && "target" in e, S2 = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), fl = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), qo = (e, t = [0, 0]) => {
  const { width: n, height: r } = ur(e), o = e.origin ?? t, i = n * o[0], s = r * o[1];
  return {
    x: e.position.x - i,
    y: e.position.y - s
  };
}, E2 = (e, t = { nodeOrigin: [0, 0], nodeLookup: void 0 }) => {
  if (e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = e.reduce((r, o) => {
    const i = typeof o == "string";
    let s = !t.nodeLookup && !i ? o : void 0;
    t.nodeLookup && (s = i ? t.nodeLookup.get(o) : fl(o) ? o : t.nodeLookup.get(o.id));
    const a = s ? Ui(s, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return Ns(r, a);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return Ps(n);
}, Go = (e, t = {}) => {
  if (e.size === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 };
  return e.forEach((r) => {
    if (t.filter === void 0 || t.filter(r)) {
      const o = Ui(r);
      n = Ns(n, o);
    }
  }), Ps(n);
}, Wd = (e, t, [n, r, o] = [0, 0, 1], i = !1, s = !1) => {
  const a = {
    ...Uo(t, [n, r, o]),
    width: t.width / o,
    height: t.height / o
  }, l = [];
  for (const u of e.values()) {
    const { measured: c, selectable: d = !0, hidden: f = !1 } = u;
    if (s && !d || f)
      continue;
    const h = c.width ?? u.width ?? u.initialWidth ?? null, p = c.height ?? u.height ?? u.initialHeight ?? null, b = Do(a, eo(u)), x = (h ?? 0) * (p ?? 0), k = i && b > 0;
    (!u.internals.handleBounds || k || b >= x || u.dragging) && l.push(u);
  }
  return l;
}, Ea = (e, t) => {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    n.add(r.id);
  }), t.filter((r) => n.has(r.source) || n.has(r.target));
};
function vu(e, t) {
  const n = /* @__PURE__ */ new Map(), r = t != null && t.nodes ? new Set(t.nodes.map((o) => o.id)) : null;
  return e.forEach((o) => {
    o.measured.width && o.measured.height && (t != null && t.includeHiddenNodes || !o.hidden) && (!r || r.has(o.id)) && n.set(o.id, o);
  }), n;
}
async function mu({ nodes: e, width: t, height: n, panZoom: r, minZoom: o, maxZoom: i }, s) {
  if (e.size === 0)
    return Promise.resolve(!1);
  const a = Go(e), l = gl(a, t, n, (s == null ? void 0 : s.minZoom) ?? o, (s == null ? void 0 : s.maxZoom) ?? i, (s == null ? void 0 : s.padding) ?? 0.1);
  return await r.setViewport(l, { duration: s == null ? void 0 : s.duration }), Promise.resolve(!0);
}
function N2({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
  const s = n.get(e), a = s.parentId ? n.get(s.parentId) : void 0, { x: l, y: u } = a ? a.internals.positionAbsolute : { x: 0, y: 0 }, c = s.origin ?? r;
  let d = o;
  if (s.extent === "parent" && !s.expandParent)
    if (!a)
      i == null || i("005", jo.error005());
    else {
      const h = a.measured.width, p = a.measured.height;
      h && p && (d = [
        [l, u],
        [l + h, u + p]
      ]);
    }
  else a && to(s.extent) && (d = [
    [s.extent[0][0] + l, s.extent[0][1] + u],
    [s.extent[1][0] + l, s.extent[1][1] + u]
  ]);
  const f = to(d) ? wr(t, d, s.measured) : t;
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
  const a = new Set(t.map((d) => d.id)), l = r.filter((d) => d.deletable !== !1), u = Ea(s, l);
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
const Qr = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), wr = (e = { x: 0, y: 0 }, t, n) => ({
  x: Qr(e.x, t[0][0], t[1][0] - ((n == null ? void 0 : n.width) ?? 0)),
  y: Qr(e.y, t[0][1], t[1][1] - ((n == null ? void 0 : n.height) ?? 0))
});
function jd(e, t, n) {
  const { width: r, height: o } = ur(n), { x: i, y: s } = n.internals.positionAbsolute;
  return wr(e, [
    [i, s],
    [i + r, s + o]
  ], t);
}
const yu = (e, t, n) => e < t ? Qr(Math.abs(e - t), 1, t) / t : e > n ? -Qr(Math.abs(e - n), 1, t) / t : 0, qd = (e, t, n = 15, r = 40) => {
  const o = yu(e.x, r, t.width - r) * n, i = yu(e.y, r, t.height - r) * n;
  return [o, i];
}, Ns = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), Na = ({ x: e, y: t, width: n, height: r }) => ({
  x: e,
  y: t,
  x2: e + n,
  y2: t + r
}), Ps = ({ x: e, y: t, x2: n, y2: r }) => ({
  x: e,
  y: t,
  width: n - e,
  height: r - t
}), eo = (e, t = [0, 0]) => {
  var n, r;
  const { x: o, y: i } = fl(e) ? e.internals.positionAbsolute : qo(e, t);
  return {
    x: o,
    y: i,
    width: ((n = e.measured) == null ? void 0 : n.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((r = e.measured) == null ? void 0 : r.height) ?? e.height ?? e.initialHeight ?? 0
  };
}, Ui = (e, t = [0, 0]) => {
  var n, r;
  const { x: o, y: i } = fl(e) ? e.internals.positionAbsolute : qo(e, t);
  return {
    x: o,
    y: i,
    x2: o + (((n = e.measured) == null ? void 0 : n.width) ?? e.width ?? e.initialWidth ?? 0),
    y2: i + (((r = e.measured) == null ? void 0 : r.height) ?? e.height ?? e.initialHeight ?? 0)
  };
}, Gd = (e, t) => Ps(Ns(Na(e), Na(t))), Do = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, wu = (e) => Vn(e.width) && Vn(e.height) && Vn(e.x) && Vn(e.y), Vn = (e) => !isNaN(e) && isFinite(e), P2 = (e, t) => {
}, hl = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), Uo = ({ x: e, y: t }, [n, r, o], i = !1, s = [1, 1]) => {
  const a = {
    x: (e - n) / o,
    y: (t - r) / o
  };
  return i ? hl(a, s) : a;
}, Ud = ({ x: e, y: t }, [n, r, o]) => ({
  x: e * o + n,
  y: t * o + r
}), gl = (e, t, n, r, o, i) => {
  const s = t / (e.width * (1 + i)), a = n / (e.height * (1 + i)), l = Math.min(s, a), u = Qr(l, r, o), c = e.x + e.width / 2, d = e.y + e.height / 2, f = t / 2 - c * u, h = n / 2 - d * u;
  return { x: f, y: h, zoom: u };
}, Ji = () => {
  var e;
  return typeof navigator < "u" && ((e = navigator == null ? void 0 : navigator.userAgent) == null ? void 0 : e.indexOf("Mac")) >= 0;
};
function to(e) {
  return e !== void 0 && e !== "parent";
}
function ur(e) {
  var t, n;
  return {
    width: ((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight ?? 0
  };
}
function Jd(e) {
  var t, n;
  return (((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth) !== void 0 && (((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight) !== void 0;
}
function O2(e, t = { width: 0, height: 0 }, n, r, o) {
  const i = { ...e }, s = r.get(n);
  if (s) {
    const a = s.origin || o;
    i.x += s.internals.positionAbsolute.x - (t.width ?? 0) * a[0], i.y += s.internals.positionAbsolute.y - (t.height ?? 0) * a[1];
  }
  return i;
}
function qs(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: i, y: s } = Dn(e), a = Uo({ x: i - ((o == null ? void 0 : o.left) ?? 0), y: s - ((o == null ? void 0 : o.top) ?? 0) }, r), { x: l, y: u } = n ? hl(a, t) : a;
  return {
    xSnapped: l,
    ySnapped: u,
    ...a
  };
}
const pl = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), M2 = (e) => {
  var t;
  return ((t = e == null ? void 0 : e.getRootNode) == null ? void 0 : t.call(e)) || (window == null ? void 0 : window.document);
}, V2 = ["INPUT", "SELECT", "TEXTAREA"];
function z2(e) {
  var t, n;
  const r = ((n = (t = e.composedPath) == null ? void 0 : t.call(e)) == null ? void 0 : n[0]) || e.target;
  return (r == null ? void 0 : r.nodeType) !== 1 ? !1 : V2.includes(r.nodeName) || r.hasAttribute("contenteditable") || !!r.closest(".nokey");
}
const Qd = (e) => "clientX" in e, Dn = (e, t) => {
  var n, r;
  const o = Qd(e), i = o ? e.clientX : (n = e.touches) == null ? void 0 : n[0].clientX, s = o ? e.clientY : (r = e.touches) == null ? void 0 : r[0].clientY;
  return {
    x: i - ((t == null ? void 0 : t.left) ?? 0),
    y: s - ((t == null ? void 0 : t.top) ?? 0)
  };
}, bu = (e, t, n, r, o) => {
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
      ...pl(s)
    };
  });
};
function H2({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: o, sourceControlY: i, targetControlX: s, targetControlY: a }) {
  const l = e * 0.125 + o * 0.375 + s * 0.375 + n * 0.125, u = t * 0.125 + i * 0.375 + a * 0.375 + r * 0.125, c = Math.abs(l - e), d = Math.abs(u - t);
  return [l, u, c, d];
}
function vi(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function xu({ pos: e, x1: t, y1: n, x2: r, y2: o, c: i }) {
  switch (e) {
    case Ce.Left:
      return [t - vi(t - r, i), n];
    case Ce.Right:
      return [t + vi(r - t, i), n];
    case Ce.Top:
      return [t, n - vi(n - o, i)];
    case Ce.Bottom:
      return [t, n + vi(o - n, i)];
  }
}
function ef({ sourceX: e, sourceY: t, sourcePosition: n = Ce.Bottom, targetX: r, targetY: o, targetPosition: i = Ce.Top, curvature: s = 0.25 }) {
  const [a, l] = xu({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: o,
    c: s
  }), [u, c] = xu({
    pos: i,
    x1: r,
    y1: o,
    x2: e,
    y2: t,
    c: s
  }), [d, f, h, p] = H2({
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
function tf({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const o = Math.abs(n - e) / 2, i = n < e ? n + o : n - o, s = Math.abs(r - t) / 2, a = r < t ? r + s : r - s;
  return [i, a, o, s];
}
function T2({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r = 0, elevateOnSelect: o = !1 }) {
  if (!o)
    return r;
  const i = n || t.selected || e.selected, s = Math.max(e.internals.z || 0, t.internals.z || 0, 1e3);
  return r + (i ? s : 0);
}
function L2({ sourceNode: e, targetNode: t, width: n, height: r, transform: o }) {
  const i = Ns(Ui(e), Ui(t));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const s = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return Do(s, Ps(i)) > 0;
}
const D2 = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, A2 = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), I2 = (e, t) => {
  if (!e.source || !e.target)
    return t;
  let n;
  return k2(e) ? n = { ...e } : n = {
    ...e,
    id: D2(e)
  }, A2(n, t) ? t : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, t.concat(n));
};
function Pa({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const [o, i, s, a] = tf({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: r
  });
  return [`M ${e},${t}L ${n},${r}`, o, i, s, a];
}
const _u = {
  [Ce.Left]: { x: -1, y: 0 },
  [Ce.Right]: { x: 1, y: 0 },
  [Ce.Top]: { x: 0, y: -1 },
  [Ce.Bottom]: { x: 0, y: 1 }
}, R2 = ({ source: e, sourcePosition: t = Ce.Bottom, target: n }) => t === Ce.Left || t === Ce.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, $u = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function Z2({ source: e, sourcePosition: t = Ce.Bottom, target: n, targetPosition: r = Ce.Top, center: o, offset: i }) {
  const s = _u[t], a = _u[r], l = { x: e.x + s.x * i, y: e.y + s.y * i }, u = { x: n.x + a.x * i, y: n.y + a.y * i }, c = R2({
    source: l,
    sourcePosition: t,
    target: u
  }), d = c.x !== 0 ? "x" : "y", f = c[d];
  let h = [], p, b;
  const x = { x: 0, y: 0 }, k = { x: 0, y: 0 }, [v, _, w, C] = tf({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (s[d] * a[d] === -1) {
    p = o.x ?? v, b = o.y ?? _;
    const N = [
      { x: p, y: l.y },
      { x: p, y: u.y }
    ], P = [
      { x: l.x, y: b },
      { x: u.x, y: b }
    ];
    s[d] === f ? h = d === "x" ? N : P : h = d === "x" ? P : N;
  } else {
    const N = [{ x: l.x, y: u.y }], P = [{ x: u.x, y: l.y }];
    if (d === "x" ? h = s.x === f ? P : N : h = s.y === f ? N : P, t === r) {
      const D = Math.abs(e[d] - n[d]);
      if (D <= i) {
        const R = Math.min(i - 1, i - D);
        s[d] === f ? x[d] = (l[d] > e[d] ? -1 : 1) * R : k[d] = (u[d] > n[d] ? -1 : 1) * R;
      }
    }
    if (t !== r) {
      const D = d === "x" ? "y" : "x", R = s[d] === a[D], S = l[D] > u[D], O = l[D] < u[D];
      (s[d] === 1 && (!R && S || R && O) || s[d] !== 1 && (!R && O || R && S)) && (h = d === "x" ? N : P);
    }
    const M = { x: l.x + x.x, y: l.y + x.y }, z = { x: u.x + k.x, y: u.y + k.y }, H = Math.max(Math.abs(M.x - h[0].x), Math.abs(z.x - h[0].x)), A = Math.max(Math.abs(M.y - h[0].y), Math.abs(z.y - h[0].y));
    H >= A ? (p = (M.x + z.x) / 2, b = h[0].y) : (p = h[0].x, b = (M.y + z.y) / 2);
  }
  return [[
    e,
    { x: l.x + x.x, y: l.y + x.y },
    ...h,
    { x: u.x + k.x, y: u.y + k.y },
    n
  ], p, b, w, C];
}
function B2(e, t, n, r) {
  const o = Math.min($u(e, t) / 2, $u(t, n) / 2, r), { x: i, y: s } = t;
  if (e.x === i && i === n.x || e.y === s && s === n.y)
    return `L${i} ${s}`;
  if (e.y === s) {
    const u = e.x < n.x ? -1 : 1, c = e.y < n.y ? 1 : -1;
    return `L ${i + o * u},${s}Q ${i},${s} ${i},${s + o * c}`;
  }
  const a = e.x < n.x ? 1 : -1, l = e.y < n.y ? -1 : 1;
  return `L ${i},${s + o * l}Q ${i},${s} ${i + o * a},${s}`;
}
function Qi({ sourceX: e, sourceY: t, sourcePosition: n = Ce.Bottom, targetX: r, targetY: o, targetPosition: i = Ce.Top, borderRadius: s = 5, centerX: a, centerY: l, offset: u = 20 }) {
  const [c, d, f, h, p] = Z2({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: a, y: l },
    offset: u
  });
  return [c.reduce((b, x, k) => {
    let v = "";
    return k > 0 && k < c.length - 1 ? v = B2(c[k - 1], x, c[k + 1], s) : v = `${k === 0 ? "M" : "L"}${x.x} ${x.y}`, b += v, b;
  }, ""), d, f, h, p];
}
function Cu(e) {
  var t;
  return e && !!(e.internals.handleBounds || (t = e.handles) != null && t.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function K2(e) {
  var t;
  const { sourceNode: n, targetNode: r } = e;
  if (!Cu(n) || !Cu(r))
    return null;
  const o = n.internals.handleBounds || ku(n.handles), i = r.internals.handleBounds || ku(r.handles), s = Su((o == null ? void 0 : o.source) ?? [], e.sourceHandle), a = Su(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === yr.Strict ? (i == null ? void 0 : i.target) ?? [] : ((i == null ? void 0 : i.target) ?? []).concat((i == null ? void 0 : i.source) ?? []),
    e.targetHandle
  );
  if (!s || !a)
    return (t = e.onError) == null || t.call(e, "008", jo.error008(s ? "target" : "source", {
      id: e.id,
      sourceHandle: e.sourceHandle,
      targetHandle: e.targetHandle
    })), null;
  const l = (s == null ? void 0 : s.position) || Ce.Bottom, u = (a == null ? void 0 : a.position) || Ce.Top, c = Ao(n, s, l), d = Ao(r, a, u);
  return {
    sourceX: c.x,
    sourceY: c.y,
    targetX: d.x,
    targetY: d.y,
    sourcePosition: l,
    targetPosition: u
  };
}
function ku(e) {
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
function Ao(e, t, n = Ce.Left, r = !1) {
  const o = ((t == null ? void 0 : t.x) ?? 0) + e.internals.positionAbsolute.x, i = ((t == null ? void 0 : t.y) ?? 0) + e.internals.positionAbsolute.y, { width: s, height: a } = t ?? ur(e);
  if (r)
    return { x: o + s / 2, y: i + a / 2 };
  switch ((t == null ? void 0 : t.position) ?? n) {
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
function Su(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function Oa(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((n) => `${n}=${e[n]}`).join("&")}` : "";
}
function Y2(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const i = /* @__PURE__ */ new Set();
  return e.reduce((s, a) => ([a.markerStart || r, a.markerEnd || o].forEach((l) => {
    if (l && typeof l == "object") {
      const u = Oa(l, t);
      i.has(u) || (s.push({ id: u, color: l.color || n, ...l }), i.add(u));
    }
  }), s), []).sort((s, a) => s.id.localeCompare(a.id));
}
function X2(e, t, n, r, o) {
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
const vl = {
  nodeOrigin: [0, 0],
  nodeExtent: qi,
  elevateNodesOnSelect: !0,
  defaults: {}
}, W2 = {
  ...vl,
  checkEquality: !0
};
function ml(e, t) {
  const n = { ...e };
  for (const r in t)
    t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function F2(e, t, n) {
  const r = ml(vl, n);
  for (const o of e.values())
    if (o.parentId)
      yl(o, e, t, r);
    else {
      const i = qo(o, r.nodeOrigin), s = to(o.extent) ? o.extent : r.nodeExtent, a = wr(i, s, ur(o));
      o.internals.positionAbsolute = a;
    }
}
function nf(e, t, n, r) {
  var o, i;
  const s = ml(W2, r), a = new Map(t), l = s != null && s.elevateNodesOnSelect ? 1e3 : 0;
  t.clear(), n.clear();
  for (const u of e) {
    let c = a.get(u.id);
    if (s.checkEquality && u === (c == null ? void 0 : c.internals.userNode))
      t.set(u.id, c);
    else {
      const d = qo(u, s.nodeOrigin), f = to(u.extent) ? u.extent : s.nodeExtent, h = wr(d, f, ur(u));
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
          z: rf(u, l),
          userNode: u
        }
      }, t.set(u.id, c);
    }
    u.parentId && yl(c, t, n, r);
  }
}
function j2(e, t) {
  if (!e.parentId)
    return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function yl(e, t, n, r) {
  const { elevateNodesOnSelect: o, nodeOrigin: i, nodeExtent: s } = ml(vl, r), a = e.parentId, l = t.get(a);
  if (!l) {
    console.warn(`Parent node ${a} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  j2(e, n);
  const u = o ? 1e3 : 0, { x: c, y: d, z: f } = q2(e, l, i, s, u), { positionAbsolute: h } = e.internals, p = c !== h.x || d !== h.y;
  (p || f !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: p ? { x: c, y: d } : h,
      z: f
    }
  });
}
function rf(e, t) {
  return (Vn(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function q2(e, t, n, r, o) {
  const { x: i, y: s } = t.internals.positionAbsolute, a = ur(e), l = qo(e, n), u = to(e.extent) ? wr(l, e.extent, a) : l;
  let c = wr({ x: i + u.x, y: s + u.y }, r, a);
  e.extent === "parent" && (c = jd(c, a, t));
  const d = rf(e, o), f = t.internals.z ?? 0;
  return {
    x: c.x,
    y: c.y,
    z: f > d ? f : d
  };
}
function G2(e, t, n, r = [0, 0]) {
  var o;
  const i = [], s = /* @__PURE__ */ new Map();
  for (const a of e) {
    const l = t.get(a.parentId);
    if (!l)
      continue;
    const u = ((o = s.get(a.parentId)) == null ? void 0 : o.expandedRect) ?? eo(l), c = Gd(u, a.rect);
    s.set(a.parentId, { expandedRect: c, parent: l });
  }
  return s.size > 0 && s.forEach(({ expandedRect: a, parent: l }, u) => {
    var c;
    const d = l.internals.positionAbsolute, f = ur(l), h = l.origin ?? r, p = a.x < d.x ? Math.round(Math.abs(d.x - a.x)) : 0, b = a.y < d.y ? Math.round(Math.abs(d.y - a.y)) : 0, x = Math.max(f.width, Math.round(a.width)), k = Math.max(f.height, Math.round(a.height)), v = (x - f.width) * h[0], _ = (k - f.height) * h[1];
    (p > 0 || b > 0 || v || _) && (i.push({
      id: u,
      type: "position",
      position: {
        x: l.position.x - p + v,
        y: l.position.y - b + _
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
        height: k + (b ? h[1] * b - _ : 0)
      }
    });
  }), i;
}
function U2(e, t, n, r, o, i) {
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
    const p = pl(f.nodeElement), b = h.measured.width !== p.width || h.measured.height !== p.height;
    if (p.width && p.height && (b || !h.internals.handleBounds || f.force)) {
      const x = f.nodeElement.getBoundingClientRect(), k = to(h.extent) ? h.extent : i;
      let { positionAbsolute: v } = h.internals;
      h.parentId && h.extent === "parent" ? v = jd(v, p, t.get(h.parentId)) : k && (v = wr(v, k, p));
      const _ = {
        ...h,
        measured: p,
        internals: {
          ...h.internals,
          positionAbsolute: v,
          handleBounds: {
            source: bu("source", f.nodeElement, x, c, h.id),
            target: bu("target", f.nodeElement, x, c, h.id)
          }
        }
      };
      t.set(h.id, _), h.parentId && yl(_, t, n, { nodeOrigin: o }), a = !0, b && (l.push({
        id: h.id,
        type: "dimensions",
        dimensions: p
      }), h.expandParent && h.parentId && d.push({
        id: h.id,
        parentId: h.parentId,
        rect: eo(_, o)
      }));
    }
  }
  if (d.length > 0) {
    const f = G2(d, t, n, o);
    l.push(...f);
  }
  return { changes: l, updatedInternals: a };
}
async function J2({ delta: e, panZoom: t, transform: n, translateExtent: r, width: o, height: i }) {
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
function Eu(e, t, n, r, o, i) {
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
function of(e, t, n) {
  e.clear(), t.clear();
  for (const r of n) {
    const { source: o, target: i, sourceHandle: s = null, targetHandle: a = null } = r, l = { edgeId: r.id, source: o, target: i, sourceHandle: s, targetHandle: a }, u = `${o}-${s}--${i}-${a}`, c = `${i}-${a}--${o}-${s}`;
    Eu("source", l, c, e, o, s), Eu("target", l, u, e, i, a), t.set(r.id, r);
  }
}
function Q2(e, t) {
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
function sf(e, t) {
  if (!e.parentId)
    return !1;
  const n = t.get(e.parentId);
  return n ? n.selected ? !0 : sf(n, t) : !1;
}
function Nu(e, t, n) {
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
function ey(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  for (const [i, s] of e)
    if ((s.selected || s.id === r) && (!s.parentId || !sf(s, e)) && (s.draggable || t && typeof s.draggable > "u")) {
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
function Gs({ nodeId: e, dragItems: t, nodeLookup: n, dragging: r = !0 }) {
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
function ty({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: o }) {
  let i = { x: null, y: null }, s = 0, a = /* @__PURE__ */ new Map(), l = !1, u = { x: 0, y: 0 }, c = null, d = !1, f = null, h = !1;
  function p({ noDragClassName: x, handleSelector: k, domNode: v, isSelectable: _, nodeId: w, nodeClickDistance: C = 0 }) {
    f = Yt(v);
    function N({ x: H, y: A }, D) {
      const { nodeLookup: R, nodeExtent: S, snapGrid: O, snapToGrid: $, nodeOrigin: E, onNodeDrag: V, onSelectionDrag: T, onError: Z, updateNodePositions: W } = t();
      i = { x: H, y: A };
      let q = !1, fe = { x: 0, y: 0, x2: 0, y2: 0 };
      if (a.size > 1 && S) {
        const Q = Go(a);
        fe = Na(Q);
      }
      for (const [Q, B] of a) {
        if (!R.has(Q))
          continue;
        let ue = { x: H - B.distance.x, y: A - B.distance.y };
        $ && (ue = hl(ue, O));
        let we = [
          [S[0][0], S[0][1]],
          [S[1][0], S[1][1]]
        ];
        if (a.size > 1 && S && !B.extent) {
          const { positionAbsolute: ne } = B.internals, le = ne.x - fe.x + S[0][0], Ie = ne.x + B.measured.width - fe.x2 + S[1][0], We = ne.y - fe.y + S[0][1], Re = ne.y + B.measured.height - fe.y2 + S[1][1];
          we = [
            [le, We],
            [Ie, Re]
          ];
        }
        const { position: be, positionAbsolute: ve } = N2({
          nodeId: Q,
          nextPosition: ue,
          nodeLookup: R,
          nodeExtent: we,
          nodeOrigin: E,
          onError: Z
        });
        q = q || B.position.x !== be.x || B.position.y !== be.y, B.position = be, B.internals.positionAbsolute = ve;
      }
      if (q && (W(a, !0), D && (r || V || !w && T))) {
        const [Q, B] = Gs({
          nodeId: w,
          dragItems: a,
          nodeLookup: R
        });
        r == null || r(D, a, Q, B), V == null || V(D, Q, B), w || T == null || T(D, B);
      }
    }
    async function P() {
      if (!c)
        return;
      const { transform: H, panBy: A, autoPanSpeed: D, autoPanOnNodeDrag: R } = t();
      if (!R) {
        l = !1, cancelAnimationFrame(s);
        return;
      }
      const [S, O] = qd(u, c, D);
      (S !== 0 || O !== 0) && (i.x = (i.x ?? 0) - S / H[2], i.y = (i.y ?? 0) - O / H[2], await A({ x: S, y: O }) && N(i, null)), s = requestAnimationFrame(P);
    }
    function M(H) {
      var A;
      const { nodeLookup: D, multiSelectionActive: R, nodesDraggable: S, transform: O, snapGrid: $, snapToGrid: E, selectNodesOnDrag: V, onNodeDragStart: T, onSelectionDragStart: Z, unselectNodesAndEdges: W } = t();
      d = !0, (!V || !_) && !R && w && ((A = D.get(w)) != null && A.selected || W()), _ && V && w && (e == null || e(w));
      const q = qs(H.sourceEvent, { transform: O, snapGrid: $, snapToGrid: E, containerBounds: c });
      if (i = q, a = ey(D, S, q, w), a.size > 0 && (n || T || !w && Z)) {
        const [fe, Q] = Gs({
          nodeId: w,
          dragItems: a,
          nodeLookup: D
        });
        n == null || n(H.sourceEvent, a, fe, Q), T == null || T(H.sourceEvent, fe, Q), w || Z == null || Z(H.sourceEvent, Q);
      }
    }
    const z = z0().clickDistance(C).on("start", (H) => {
      const { domNode: A, nodeDragThreshold: D, transform: R, snapGrid: S, snapToGrid: O } = t();
      c = (A == null ? void 0 : A.getBoundingClientRect()) || null, h = !1, D === 0 && M(H), i = qs(H.sourceEvent, { transform: R, snapGrid: S, snapToGrid: O, containerBounds: c }), u = Dn(H.sourceEvent, c);
    }).on("drag", (H) => {
      const { autoPanOnNodeDrag: A, transform: D, snapGrid: R, snapToGrid: S, nodeDragThreshold: O, nodeLookup: $ } = t(), E = qs(H.sourceEvent, { transform: D, snapGrid: R, snapToGrid: S, containerBounds: c });
      if ((H.sourceEvent.type === "touchmove" && H.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      w && !$.has(w)) && (h = !0), !h) {
        if (!l && A && d && (l = !0, P()), !d) {
          const V = E.xSnapped - (i.x ?? 0), T = E.ySnapped - (i.y ?? 0);
          Math.sqrt(V * V + T * T) > O && M(H);
        }
        (i.x !== E.xSnapped || i.y !== E.ySnapped) && a && d && (u = Dn(H.sourceEvent, c), N(E, H.sourceEvent));
      }
    }).on("end", (H) => {
      if (!(!d || h) && (l = !1, d = !1, cancelAnimationFrame(s), a.size > 0)) {
        const { nodeLookup: A, updateNodePositions: D, onNodeDragStop: R, onSelectionDragStop: S } = t();
        if (D(a, !1), o || R || !w && S) {
          const [O, $] = Gs({
            nodeId: w,
            dragItems: a,
            nodeLookup: A,
            dragging: !1
          });
          o == null || o(H.sourceEvent, a, O, $), R == null || R(H.sourceEvent, O, $), w || S == null || S(H.sourceEvent, $);
        }
      }
    }).filter((H) => {
      const A = H.target;
      return !H.button && (!x || !Nu(A, `.${x}`, v)) && (!k || Nu(A, k, v));
    });
    f.call(z);
  }
  function b() {
    f == null || f.on(".drag", null);
  }
  return {
    update: p,
    destroy: b
  };
}
function ny(e, t, n) {
  const r = [], o = {
    x: e.x - n,
    y: e.y - n,
    width: n * 2,
    height: n * 2
  };
  for (const i of t.values())
    Do(o, eo(i)) > 0 && r.push(i);
  return r;
}
const ry = 250;
function oy(e, t, n, r) {
  var o, i;
  let s = [], a = 1 / 0;
  const l = ny(e, n, t + ry);
  for (const u of l) {
    const c = [...((o = u.internals.handleBounds) == null ? void 0 : o.source) ?? [], ...((i = u.internals.handleBounds) == null ? void 0 : i.target) ?? []];
    for (const d of c) {
      if (r.nodeId === d.nodeId && r.type === d.type && r.id === d.id)
        continue;
      const { x: f, y: h } = Ao(u, d, d.position, !0), p = Math.sqrt(Math.pow(f - e.x, 2) + Math.pow(h - e.y, 2));
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
function af(e, t, n, r, o, i = !1) {
  var s, a, l;
  const u = r.get(e);
  if (!u)
    return null;
  const c = o === "strict" ? (s = u.internals.handleBounds) == null ? void 0 : s[t] : [...((a = u.internals.handleBounds) == null ? void 0 : a.source) ?? [], ...((l = u.internals.handleBounds) == null ? void 0 : l.target) ?? []], d = (n ? c == null ? void 0 : c.find((f) => f.id === n) : c == null ? void 0 : c[0]) ?? null;
  return d && i ? { ...d, ...Ao(u, d, d.position, !0) } : d;
}
function lf(e, t) {
  return e || (t != null && t.classList.contains("target") ? "target" : t != null && t.classList.contains("source") ? "source" : null);
}
function iy(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const uf = () => !0;
function sy(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: s, domNode: a, nodeLookup: l, lib: u, autoPanOnConnect: c, flowId: d, panBy: f, cancelConnection: h, onConnectStart: p, onConnect: b, onConnectEnd: x, isValidConnection: k = uf, onReconnectEnd: v, updateConnection: _, getTransform: w, getFromHandle: C, autoPanSpeed: N }) {
  const P = M2(e.target);
  let M = 0, z;
  const { x: H, y: A } = Dn(e), D = P == null ? void 0 : P.elementFromPoint(H, A), R = lf(i, D), S = a == null ? void 0 : a.getBoundingClientRect();
  if (!S || !R)
    return;
  const O = af(o, R, r, l, t);
  if (!O)
    return;
  let $ = Dn(e, S), E = !1, V = null, T = !1, Z = null;
  function W() {
    if (!c || !S)
      return;
    const [be, ve] = qd($, S, N);
    f({ x: be, y: ve }), M = requestAnimationFrame(W);
  }
  const q = {
    ...O,
    nodeId: o,
    type: R,
    position: O.position
  }, fe = l.get(o), Q = {
    inProgress: !0,
    isValid: null,
    from: Ao(fe, q, Ce.Left, !0),
    fromHandle: q,
    fromPosition: q.position,
    fromNode: fe,
    to: $,
    toHandle: null,
    toPosition: gu[q.position],
    toNode: null
  };
  _(Q);
  let B = Q;
  p == null || p(e, { nodeId: o, handleId: r, handleType: R });
  function ue(be) {
    if (!C() || !q) {
      we(be);
      return;
    }
    const ve = w();
    $ = Dn(be, S), z = oy(Uo($, ve, !1, [1, 1]), n, l, q), E || (W(), E = !0);
    const ne = cf(be, {
      handle: z,
      connectionMode: t,
      fromNodeId: o,
      fromHandleId: r,
      fromType: s ? "target" : "source",
      isValidConnection: k,
      doc: P,
      lib: u,
      flowId: d,
      nodeLookup: l
    });
    Z = ne.handleDomNode, V = ne.connection, T = iy(!!z, ne.isValid);
    const le = {
      // from stays the same
      ...B,
      isValid: T,
      to: z && T ? Ud({ x: z.x, y: z.y }, ve) : $,
      toHandle: ne.toHandle,
      toPosition: T && ne.toHandle ? ne.toHandle.position : gu[q.position],
      toNode: ne.toHandle ? l.get(ne.toHandle.nodeId) : null
    };
    T && z && B.toHandle && le.toHandle && B.toHandle.type === le.toHandle.type && B.toHandle.nodeId === le.toHandle.nodeId && B.toHandle.id === le.toHandle.id && B.to.x === le.to.x && B.to.y === le.to.y || (_(le), B = le);
  }
  function we(be) {
    (z || Z) && V && T && (b == null || b(V));
    const { inProgress: ve, ...ne } = B, le = {
      ...ne,
      toPosition: B.toHandle ? B.toPosition : null
    };
    x == null || x(be, le), i && (v == null || v(be, le)), h(), cancelAnimationFrame(M), E = !1, T = !1, V = null, Z = null, P.removeEventListener("mousemove", ue), P.removeEventListener("mouseup", we), P.removeEventListener("touchmove", ue), P.removeEventListener("touchend", we);
  }
  P.addEventListener("mousemove", ue), P.addEventListener("mouseup", we), P.addEventListener("touchmove", ue), P.addEventListener("touchend", we);
}
function cf(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: s, lib: a, flowId: l, isValidConnection: u = uf, nodeLookup: c }) {
  const d = i === "target", f = t ? s.querySelector(`.${a}-flow__handle[data-id="${l}-${t == null ? void 0 : t.nodeId}-${t == null ? void 0 : t.id}-${t == null ? void 0 : t.type}"]`) : null, { x: h, y: p } = Dn(e), b = s.elementFromPoint(h, p), x = b != null && b.classList.contains(`${a}-flow__handle`) ? b : f, k = {
    handleDomNode: x,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (x) {
    const v = lf(void 0, x), _ = x.getAttribute("data-nodeid"), w = x.getAttribute("data-handleid"), C = x.classList.contains("connectable"), N = x.classList.contains("connectableend");
    if (!_ || !v)
      return k;
    const P = {
      source: d ? _ : r,
      sourceHandle: d ? w : o,
      target: d ? r : _,
      targetHandle: d ? o : w
    };
    k.connection = P;
    const M = C && N && (n === yr.Strict ? d && v === "source" || !d && v === "target" : _ !== r || w !== o);
    k.isValid = M && u(P), k.toHandle = af(_, v, w, c, n, !1);
  }
  return k;
}
const ay = {
  onPointerDown: sy,
  isValid: cf
};
function ly({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = Yt(e);
  function i({ translateExtent: a, width: l, height: u, zoomStep: c = 10, pannable: d = !0, zoomable: f = !0, inversePan: h = !1 }) {
    const p = (_) => {
      const w = n();
      if (_.sourceEvent.type !== "wheel" || !t)
        return;
      const C = -_.sourceEvent.deltaY * (_.sourceEvent.deltaMode === 1 ? 0.05 : _.sourceEvent.deltaMode ? 1 : 2e-3) * c, N = w[2] * Math.pow(2, C);
      t.scaleTo(N);
    };
    let b = [0, 0];
    const x = (_) => {
      (_.sourceEvent.type === "mousedown" || _.sourceEvent.type === "touchstart") && (b = [
        _.sourceEvent.clientX ?? _.sourceEvent.touches[0].clientX,
        _.sourceEvent.clientY ?? _.sourceEvent.touches[0].clientY
      ]);
    }, k = (_) => {
      const w = n();
      if (_.sourceEvent.type !== "mousemove" && _.sourceEvent.type !== "touchmove" || !t)
        return;
      const C = [
        _.sourceEvent.clientX ?? _.sourceEvent.touches[0].clientX,
        _.sourceEvent.clientY ?? _.sourceEvent.touches[0].clientY
      ], N = [C[0] - b[0], C[1] - b[1]];
      b = C;
      const P = r() * Math.max(w[2], Math.log(w[2])) * (h ? -1 : 1), M = {
        x: w[0] - N[0] * P,
        y: w[1] - N[1] * P
      }, z = [
        [0, 0],
        [l, u]
      ];
      t.setViewportConstrained({
        x: M.x,
        y: M.y,
        zoom: w[2]
      }, z, a);
    }, v = Xd().on("start", x).on("zoom", d ? k : null).on("zoom.wheel", f ? p : null);
    o.call(v, {});
  }
  function s() {
    o.on("zoom", null);
  }
  return {
    update: i,
    destroy: s,
    pointer: en
  };
}
const uy = (e, t) => e.x !== t.x || e.y !== t.y || e.zoom !== t.k, Os = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), Us = ({ x: e, y: t, zoom: n }) => Es.translate(e, t).scale(n), Dr = (e, t) => e.target.closest(`.${t}`), df = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), Js = (e, t = 0, n = () => {
}) => {
  const r = typeof t == "number" && t > 0;
  return r || n(), r ? e.transition().duration(t).on("end", n) : e;
}, ff = (e) => {
  const t = e.ctrlKey && Ji() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function cy({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: s, onPanZoomStart: a, onPanZoom: l, onPanZoomEnd: u }) {
  return (c) => {
    if (Dr(c, t))
      return !1;
    c.preventDefault(), c.stopImmediatePropagation();
    const d = n.property("__zoom").k || 1;
    if (c.ctrlKey && s) {
      const x = en(c), k = ff(c), v = d * Math.pow(2, k);
      r.scaleTo(n, v, x, c);
      return;
    }
    const f = c.deltaMode === 1 ? 20 : 1;
    let h = o === nr.Vertical ? 0 : c.deltaX * f, p = o === nr.Horizontal ? 0 : c.deltaY * f;
    !Ji() && c.shiftKey && o !== nr.Vertical && (h = c.deltaY * f, p = 0), r.translateBy(
      n,
      -(h / d) * i,
      -(p / d) * i,
      // @ts-ignore
      { internal: !0 }
    );
    const b = Os(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling || (e.isPanScrolling = !0, a == null || a(c, b)), e.isPanScrolling && (l == null || l(c, b), e.panScrollTimeout = setTimeout(() => {
      u == null || u(c, b), e.isPanScrolling = !1;
    }, 150));
  };
}
function dy({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(r, o) {
    if (!t && r.type === "wheel" && !r.ctrlKey || Dr(r, e))
      return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function fy({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (r) => {
    var o, i, s;
    if ((o = r.sourceEvent) != null && o.internal)
      return;
    const a = Os(r.transform);
    e.mouseButton = ((i = r.sourceEvent) == null ? void 0 : i.button) || 0, e.isZoomingOrPanning = !0, e.prevViewport = a, ((s = r.sourceEvent) == null ? void 0 : s.type) === "mousedown" && t(!0), n && (n == null || n(r.sourceEvent, a));
  };
}
function hy({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (i) => {
    var s, a;
    e.usedRightMouseButton = !!(n && df(t, e.mouseButton ?? 0)), (s = i.sourceEvent) != null && s.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !((a = i.sourceEvent) != null && a.internal) && (o == null || o(i.sourceEvent, Os(i.transform)));
  };
}
function gy({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (s) => {
    var a;
    if (!((a = s.sourceEvent) != null && a.internal) && (e.isZoomingOrPanning = !1, i && df(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && s.sourceEvent && i(s.sourceEvent), e.usedRightMouseButton = !1, r(!1), o && uy(e.prevViewport, s.transform))) {
      const l = Os(s.transform);
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
function py({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: r, panOnScroll: o, zoomOnDoubleClick: i, userSelectionActive: s, noWheelClassName: a, noPanClassName: l, lib: u }) {
  return (c) => {
    var d;
    const f = e || t, h = n && c.ctrlKey;
    if (c.button === 1 && c.type === "mousedown" && (Dr(c, `${u}-flow__node`) || Dr(c, `${u}-flow__edge`)))
      return !0;
    if (!r && !f && !o && !i && !n || s || Dr(c, a) && c.type === "wheel" || Dr(c, l) && (c.type !== "wheel" || o && c.type === "wheel" && !e) || !n && c.ctrlKey && c.type === "wheel")
      return !1;
    if (!n && c.type === "touchstart" && ((d = c.touches) == null ? void 0 : d.length) > 1)
      return c.preventDefault(), !1;
    if (!f && !o && !h && c.type === "wheel" || !r && (c.type === "mousedown" || c.type === "touchstart") || Array.isArray(r) && !r.includes(c.button) && c.type === "mousedown")
      return !1;
    const p = Array.isArray(r) && r.includes(c.button) || !c.button || c.button <= 1;
    return (!c.ctrlKey || c.type === "wheel") && p;
  };
}
function vy({ domNode: e, minZoom: t, maxZoom: n, paneClickDistance: r, translateExtent: o, viewport: i, onPanZoom: s, onPanZoomStart: a, onPanZoomEnd: l, onDraggingChange: u }) {
  const c = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: { x: 0, y: 0, zoom: 0 },
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, d = e.getBoundingClientRect(), f = Xd().clickDistance(!Vn(r) || r < 0 ? 0 : r).scaleExtent([t, n]).translateExtent(o), h = Yt(e).call(f);
  _({
    x: i.x,
    y: i.y,
    zoom: Qr(i.zoom, t, n)
  }, [
    [0, 0],
    [d.width, d.height]
  ], o);
  const p = h.on("wheel.zoom"), b = h.on("dblclick.zoom");
  f.wheelDelta(ff);
  function x(D, R) {
    return h ? new Promise((S) => {
      f == null || f.transform(Js(h, R == null ? void 0 : R.duration, () => S(!0)), D);
    }) : Promise.resolve(!1);
  }
  function k({ noWheelClassName: D, noPanClassName: R, onPaneContextMenu: S, userSelectionActive: O, panOnScroll: $, panOnDrag: E, panOnScrollMode: V, panOnScrollSpeed: T, preventScrolling: Z, zoomOnPinch: W, zoomOnScroll: q, zoomOnDoubleClick: fe, zoomActivationKeyPressed: Q, lib: B, onTransformChange: ue }) {
    O && !c.isZoomingOrPanning && v();
    const we = $ && !Q && !O ? cy({
      zoomPanValues: c,
      noWheelClassName: D,
      d3Selection: h,
      d3Zoom: f,
      panOnScrollMode: V,
      panOnScrollSpeed: T,
      zoomOnPinch: W,
      onPanZoomStart: a,
      onPanZoom: s,
      onPanZoomEnd: l
    }) : dy({
      noWheelClassName: D,
      preventScrolling: Z,
      d3ZoomHandler: p
    });
    if (h.on("wheel.zoom", we, { passive: !1 }), !O) {
      const ve = fy({
        zoomPanValues: c,
        onDraggingChange: u,
        onPanZoomStart: a
      });
      f.on("start", ve);
      const ne = hy({
        zoomPanValues: c,
        panOnDrag: E,
        onPaneContextMenu: !!S,
        onPanZoom: s,
        onTransformChange: ue
      });
      f.on("zoom", ne);
      const le = gy({
        zoomPanValues: c,
        panOnDrag: E,
        panOnScroll: $,
        onPaneContextMenu: S,
        onPanZoomEnd: l,
        onDraggingChange: u
      });
      f.on("end", le);
    }
    const be = py({
      zoomActivationKeyPressed: Q,
      panOnDrag: E,
      zoomOnScroll: q,
      panOnScroll: $,
      zoomOnDoubleClick: fe,
      zoomOnPinch: W,
      userSelectionActive: O,
      noPanClassName: R,
      noWheelClassName: D,
      lib: B
    });
    f.filter(be), fe ? h.on("dblclick.zoom", b) : h.on("dblclick.zoom", null);
  }
  function v() {
    f.on("zoom", null);
  }
  async function _(D, R, S) {
    const O = Us(D), $ = f == null ? void 0 : f.constrain()(O, R, S);
    return $ && await x($), new Promise((E) => E($));
  }
  async function w(D, R) {
    const S = Us(D);
    return await x(S, R), new Promise((O) => O(S));
  }
  function C(D) {
    if (h) {
      const R = Us(D), S = h.property("__zoom");
      (S.k !== D.zoom || S.x !== D.x || S.y !== D.y) && (f == null || f.transform(h, R, null, { sync: !0 }));
    }
  }
  function N() {
    const D = h ? Yd(h.node()) : { x: 0, y: 0, k: 1 };
    return { x: D.x, y: D.y, zoom: D.k };
  }
  function P(D, R) {
    return h ? new Promise((S) => {
      f == null || f.scaleTo(Js(h, R == null ? void 0 : R.duration, () => S(!0)), D);
    }) : Promise.resolve(!1);
  }
  function M(D, R) {
    return h ? new Promise((S) => {
      f == null || f.scaleBy(Js(h, R == null ? void 0 : R.duration, () => S(!0)), D);
    }) : Promise.resolve(!1);
  }
  function z(D) {
    f == null || f.scaleExtent(D);
  }
  function H(D) {
    f == null || f.translateExtent(D);
  }
  function A(D) {
    const R = !Vn(D) || D < 0 ? 0 : D;
    f == null || f.clickDistance(R);
  }
  return {
    update: k,
    destroy: v,
    setViewport: w,
    setViewportConstrained: _,
    getViewport: N,
    scaleTo: P,
    scaleBy: M,
    setScaleExtent: z,
    setTranslateExtent: H,
    syncViewport: C,
    setClickDistance: A
  };
}
var Pu;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(Pu || (Pu = {}));
var my = /* @__PURE__ */ oe('<div role="button" tabindex="-1"><!></div>');
function br(e, t) {
  ce(t, !1);
  const [n, r] = Qe(), o = () => J(fe, "$connectable", n), i = () => J(be, "$connectionRadius", n), s = () => J(ue, "$domNode", n), a = () => J(we, "$nodeLookup", n), l = () => J(B, "$connectionMode", n), u = () => J(le, "$lib", n), c = () => J(he, "$autoPanOnConnect", n), d = () => J(Xe, "$flowId", n), f = () => J(ne, "$isValidConnectionStore", n), h = () => J(We, "$onedgecreate", n), p = () => J(it, "$onConnectAction", n), b = () => J(Ve, "$onConnectStartAction", n), x = () => J(Ye, "$onConnectEndAction", n), k = () => J(ve, "$viewport", n), v = () => J(rt, "$connection", n), _ = () => J(ge, "$edges", n), w = () => J(Ee, "$connectionLookup", n), C = te(), N = te(), P = te(), M = te(), z = te(), H = te(), A = te(), D = te();
  let R = y(t, "id", 12, void 0), S = y(t, "type", 12, "source"), O = y(t, "position", 28, () => Ce.Top), $ = y(t, "style", 12, void 0), E = y(t, "isValidConnection", 12, void 0), V = y(t, "onconnect", 12, void 0), T = y(t, "ondisconnect", 12, void 0), Z = y(t, "isConnectable", 12, void 0), W = y(t, "class", 12, void 0);
  const q = vr("svelteflow__node_id"), fe = vr("svelteflow__node_connectable"), Q = Ge(), {
    connectionMode: B,
    domNode: ue,
    nodeLookup: we,
    connectionRadius: be,
    viewport: ve,
    isValidConnection: ne,
    lib: le,
    addEdge: Ie,
    onedgecreate: We,
    panBy: Re,
    cancelConnection: Ke,
    updateConnection: Y,
    autoPanOnConnect: he,
    edges: ge,
    connectionLookup: Ee,
    onconnect: it,
    onconnectstart: Ve,
    onconnectend: Ye,
    flowId: Xe,
    connection: rt
  } = Q;
  function gt(Ne) {
    const lt = Qd(Ne);
    (lt && Ne.button === 0 || !lt) && ay.onPointerDown(Ne, {
      handleId: g(P),
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
      panBy: Re,
      onConnect: (xe) => {
        var He;
        const st = h() ? h()(xe) : xe;
        st && (Ie(st), (He = p()) == null || He(xe));
      },
      onConnectStart: (xe, He) => {
        var st;
        (st = b()) == null || st(xe, {
          nodeId: He.nodeId,
          handleId: He.handleId,
          handleType: He.handleType
        });
      },
      onConnectEnd: (xe, He) => {
        var st;
        (st = x()) == null || st(xe, He);
      },
      getTransform: () => [
        k().x,
        k().y,
        k().zoom
      ],
      getFromHandle: () => v().fromHandle
    });
  }
  let ee = te(null), Pe = te();
  ae(() => G(S()), () => {
    U(C, S() === "target");
  }), ae(
    () => (G(Z()), o()),
    () => {
      U(N, Z() !== void 0 ? Z() : o());
    }
  ), ae(() => G(R()), () => {
    U(P, R() || null);
  }), ae(
    () => (G(V()), G(T()), _(), w(), G(S()), G(R())),
    () => {
      (V() || T()) && (_(), U(Pe, w().get(`${q}-${S()}${R() ? `-${R()}` : ""}`)));
    }
  ), ae(
    () => (g(ee), g(Pe), G(T()), G(V())),
    () => {
      if (g(ee) && !$2(g(Pe), g(ee))) {
        const Ne = g(Pe) ?? /* @__PURE__ */ new Map();
        pu(g(ee), Ne, T()), pu(Ne, g(ee), V());
      }
      U(ee, g(Pe) ?? /* @__PURE__ */ new Map());
    }
  ), ae(() => v(), () => {
    U(M, !!v().fromHandle);
  }), ae(
    () => (v(), G(S()), g(P)),
    () => {
      var Ne, lt, xe;
      U(z, ((Ne = v().fromHandle) == null ? void 0 : Ne.nodeId) === q && ((lt = v().fromHandle) == null ? void 0 : lt.type) === S() && ((xe = v().fromHandle) == null ? void 0 : xe.id) === g(P));
    }
  ), ae(
    () => (v(), G(S()), g(P)),
    () => {
      var Ne, lt, xe;
      U(H, ((Ne = v().toHandle) == null ? void 0 : Ne.nodeId) === q && ((lt = v().toHandle) == null ? void 0 : lt.type) === S() && ((xe = v().toHandle) == null ? void 0 : xe.id) === g(P));
    }
  ), ae(
    () => (l(), v(), G(S()), g(P)),
    () => {
      var Ne, lt, xe;
      U(A, l() === yr.Strict ? ((Ne = v().fromHandle) == null ? void 0 : Ne.type) !== S() : q !== ((lt = v().fromHandle) == null ? void 0 : lt.nodeId) || g(P) !== ((xe = v().fromHandle) == null ? void 0 : xe.id));
    }
  ), ae(() => (g(H), v()), () => {
    U(D, g(H) && v().isValid);
  }), ht(), Oe();
  var re = my();
  se(re, "data-nodeid", q);
  var Sn = j(re);
  vt(Sn, t, "default", {}), F(re), Se(
    (Ne) => {
      se(re, "data-handleid", g(P)), se(re, "data-handlepos", O()), se(re, "data-id", `${d() ?? ""}-${q ?? ""}-${R() || ""}-${S() ?? ""}`), Gr(re, Cn(Ne)), se(re, "style", $()), tt(re, "valid", g(D)), tt(re, "connectingto", g(H)), tt(re, "connectingfrom", g(z)), tt(re, "source", !g(C)), tt(re, "target", g(C)), tt(re, "connectablestart", g(N)), tt(re, "connectableend", g(N)), tt(re, "connectable", g(N)), tt(re, "connectionindicator", g(N) && (!g(M) || g(A)));
    },
    [
      () => Ct([
        "svelte-flow__handle",
        `svelte-flow__handle-${O()}`,
        "nodrag",
        "nopan",
        O(),
        W()
      ])
    ],
    pe
  ), je("mousedown", re, gt), je("touchstart", re, gt), L(e, re);
  var Gt = de({
    get id() {
      return R();
    },
    set id(Ne) {
      R(Ne), m();
    },
    get type() {
      return S();
    },
    set type(Ne) {
      S(Ne), m();
    },
    get position() {
      return O();
    },
    set position(Ne) {
      O(Ne), m();
    },
    get style() {
      return $();
    },
    set style(Ne) {
      $(Ne), m();
    },
    get isValidConnection() {
      return E();
    },
    set isValidConnection(Ne) {
      E(Ne), m();
    },
    get onconnect() {
      return V();
    },
    set onconnect(Ne) {
      V(Ne), m();
    },
    get ondisconnect() {
      return T();
    },
    set ondisconnect(Ne) {
      T(Ne), m();
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
  return r(), Gt;
}
ie(
  br,
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
var yy = /* @__PURE__ */ oe("<!> <!>", 1);
function es(e, t) {
  const n = et(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  et(n, ["data", "targetPosition", "sourcePosition"]), ce(t, !1);
  let r = y(t, "data", 28, () => ({ label: "Node" })), o = y(t, "targetPosition", 12, void 0), i = y(t, "sourcePosition", 12, void 0);
  Oe();
  var s = yy(), a = ye(s);
  const l = /* @__PURE__ */ pe(() => o() ?? Ce.Top);
  br(a, {
    type: "target",
    get position() {
      return g(l);
    }
  });
  var u = K(a), c = K(u);
  const d = /* @__PURE__ */ pe(() => i() ?? Ce.Bottom);
  return br(c, {
    type: "source",
    get position() {
      return g(d);
    }
  }), Se(() => {
    var f;
    return $n(u, ` ${((f = r()) == null ? void 0 : f.label) ?? ""} `);
  }), L(e, s), de({
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
ie(
  es,
  {
    data: {},
    targetPosition: {},
    sourcePosition: {}
  },
  [],
  [],
  !0
);
var wy = /* @__PURE__ */ oe(" <!>", 1);
function hf(e, t) {
  const n = et(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  et(n, ["data", "sourcePosition"]), ce(t, !1);
  let r = y(t, "data", 28, () => ({ label: "Node" })), o = y(t, "sourcePosition", 12, void 0);
  Oe(), Ae();
  var i = wy(), s = ye(i), a = K(s);
  const l = /* @__PURE__ */ pe(() => o() ?? Ce.Bottom);
  return br(a, {
    type: "source",
    get position() {
      return g(l);
    }
  }), Se(() => {
    var u;
    return $n(s, `${((u = r()) == null ? void 0 : u.label) ?? ""} `);
  }), L(e, i), de({
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
ie(hf, { data: {}, sourcePosition: {} }, [], [], !0);
var by = /* @__PURE__ */ oe(" <!>", 1);
function gf(e, t) {
  const n = et(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  et(n, ["data", "targetPosition"]), ce(t, !1);
  let r = y(t, "data", 28, () => ({ label: "Node" })), o = y(t, "targetPosition", 12, void 0);
  Oe(), Ae();
  var i = by(), s = ye(i), a = K(s);
  const l = /* @__PURE__ */ pe(() => o() ?? Ce.Top);
  return br(a, {
    type: "target",
    get position() {
      return g(l);
    }
  }), Se(() => {
    var u;
    return $n(s, `${((u = r()) == null ? void 0 : u.label) ?? ""} `);
  }), L(e, i), de({
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
ie(gf, { data: {}, targetPosition: {} }, [], [], !0);
function pf(e, t) {
  const n = et(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  et(n, []);
}
ie(pf, {}, [], [], !0);
function Ou(e, t, n) {
  if (!t)
    return;
  const r = n ? t.querySelector(n) : t;
  r && r.appendChild(e);
}
function ts(e, { target: t, domNode: n }) {
  return Ou(e, n, t), {
    async update({ target: r, domNode: o }) {
      Ou(e, o, r);
    },
    destroy() {
      e.parentNode && e.parentNode.removeChild(e);
    }
  };
}
var xy = /* @__PURE__ */ oe("<div><!></div>");
function vf(e, t) {
  ce(t, !1);
  const [n, r] = Qe(), o = () => J(i, "$domNode", n), { domNode: i } = Ge();
  Oe();
  var s = xy(), a = j(s);
  vt(a, t, "default", {}), F(s), pt(s, (l, u) => ts == null ? void 0 : ts(l, u), () => ({
    target: ".svelte-flow__edgelabel-renderer",
    domNode: o()
  })), L(e, s), de(), r();
}
ie(vf, {}, ["default"], [], !0);
function mf() {
  const { edgeLookup: e, selectionRect: t, selectionRectMode: n, multiselectionKeyPressed: r, addSelectedEdges: o, unselectNodesAndEdges: i, elementsSelectable: s } = Ge();
  return (a) => {
    const l = X(e).get(a);
    if (!l) {
      console.warn("012", jo.error012(a));
      return;
    }
    (l.selectable || X(s) && typeof l.selectable > "u") && (t.set(null), n.set(null), l.selected ? l.selected && X(r) && i({ nodes: [], edges: [l] }) : o([a]));
  };
}
var _y = /* @__PURE__ */ oe('<div class="svelte-flow__edge-label" role="button" tabindex="-1"><!></div>');
function yf(e, t) {
  ce(t, !1);
  let n = y(t, "style", 12, void 0), r = y(t, "x", 12, void 0), o = y(t, "y", 12, void 0);
  const i = mf(), s = vr("svelteflow__edge_id");
  return Oe(), vf(e, {
    children: (a, l) => {
      var u = _y(), c = j(u);
      vt(c, t, "default", {}), F(u), Se(() => {
        se(u, "style", "pointer-events: all;" + n()), ot(u, "transform", `translate(-50%, -50%) translate(${r() ?? ""}px,${o() ?? ""}px)`);
      }), je("keyup", u, () => {
      }), je("click", u, () => {
        s && i(s);
      }), L(a, u);
    },
    $$slots: { default: !0 }
  }), de({
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
ie(yf, { style: {}, x: {}, y: {} }, ["default"], [], !0);
var $y = /* @__PURE__ */ ke('<path fill="none" class="svelte-flow__edge-interaction"></path>'), Cy = /* @__PURE__ */ ke('<path fill="none"></path><!><!>', 1);
function Jo(e, t) {
  ce(t, !1);
  let n = y(t, "id", 12, void 0), r = y(t, "path", 12), o = y(t, "label", 12, void 0), i = y(t, "labelX", 12, void 0), s = y(t, "labelY", 12, void 0), a = y(t, "labelStyle", 12, void 0), l = y(t, "markerStart", 12, void 0), u = y(t, "markerEnd", 12, void 0), c = y(t, "style", 12, void 0), d = y(t, "interactionWidth", 12, 20), f = y(t, "class", 12, void 0), h = d() === void 0 ? 20 : d();
  Oe();
  var p = Cy(), b = ye(p), x = K(b);
  {
    var k = (w) => {
      var C = $y();
      se(C, "stroke-opacity", 0), se(C, "stroke-width", h), Se(() => se(C, "d", r())), L(w, C);
    };
    _e(x, (w) => {
      h && w(k);
    });
  }
  var v = K(x);
  {
    var _ = (w) => {
      yf(w, {
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
          Ae();
          var P = Ue();
          Se(() => $n(P, o())), L(C, P);
        },
        $$slots: { default: !0 }
      });
    };
    _e(v, (w) => {
      o() && w(_);
    });
  }
  return Se(
    (w) => {
      se(b, "id", n()), se(b, "d", r()), Sr(b, Cn(w)), se(b, "marker-start", l()), se(b, "marker-end", u()), se(b, "style", c());
    },
    [
      () => Ct(["svelte-flow__edge-path", f()])
    ],
    pe
  ), L(e, p), de({
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
ie(
  Jo,
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
function ns(e, t) {
  const n = et(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  et(n, [
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
  ]), ce(t, !1);
  const r = te(), o = te(), i = te();
  let s = y(t, "label", 12, void 0), a = y(t, "labelStyle", 12, void 0), l = y(t, "style", 12, void 0), u = y(t, "markerStart", 12, void 0), c = y(t, "markerEnd", 12, void 0), d = y(t, "interactionWidth", 12, void 0), f = y(t, "sourceX", 12), h = y(t, "sourceY", 12), p = y(t, "sourcePosition", 12), b = y(t, "targetX", 12), x = y(t, "targetY", 12), k = y(t, "targetPosition", 12);
  return ae(
    () => (g(r), g(o), g(i), G(f()), G(h()), G(b()), G(x()), G(p()), G(k())),
    () => {
      ((v) => (U(r, v[0]), U(o, v[1]), U(i, v[2])))(ef({
        sourceX: f(),
        sourceY: h(),
        targetX: b(),
        targetY: x(),
        sourcePosition: p(),
        targetPosition: k()
      }));
    }
  ), ht(), Oe(), Jo(e, {
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
  }), de({
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
ie(
  ns,
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
function wf(e, t) {
  const n = et(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  et(n, [
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
  ]), ce(t, !1);
  const r = te(), o = te(), i = te();
  let s = y(t, "label", 12, void 0), a = y(t, "labelStyle", 12, void 0), l = y(t, "style", 12, void 0), u = y(t, "markerStart", 12, void 0), c = y(t, "markerEnd", 12, void 0), d = y(t, "interactionWidth", 12, void 0), f = y(t, "sourceX", 12), h = y(t, "sourceY", 12), p = y(t, "sourcePosition", 12), b = y(t, "targetX", 12), x = y(t, "targetY", 12), k = y(t, "targetPosition", 12);
  return ae(
    () => (g(r), g(o), g(i), G(f()), G(h()), G(b()), G(x()), G(p()), G(k())),
    () => {
      ((v) => (U(r, v[0]), U(o, v[1]), U(i, v[2])))(Qi({
        sourceX: f(),
        sourceY: h(),
        targetX: b(),
        targetY: x(),
        sourcePosition: p(),
        targetPosition: k()
      }));
    }
  ), ht(), Oe(), Jo(e, {
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
  }), de({
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
ie(
  wf,
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
  const n = et(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  et(n, [
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
  ]), ce(t, !1);
  const r = te(), o = te(), i = te();
  let s = y(t, "label", 12, void 0), a = y(t, "labelStyle", 12, void 0), l = y(t, "style", 12, void 0), u = y(t, "markerStart", 12, void 0), c = y(t, "markerEnd", 12, void 0), d = y(t, "interactionWidth", 12, void 0), f = y(t, "sourceX", 12), h = y(t, "sourceY", 12), p = y(t, "targetX", 12), b = y(t, "targetY", 12);
  return ae(
    () => (g(r), g(o), g(i), G(f()), G(h()), G(p()), G(b())),
    () => {
      ((x) => (U(r, x[0]), U(o, x[1]), U(i, x[2])))(Pa({
        sourceX: f(),
        sourceY: h(),
        targetX: p(),
        targetY: b()
      }));
    }
  ), ht(), Oe(), Jo(e, {
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
  }), de({
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
ie(
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
    targetX: {},
    targetY: {}
  },
  [],
  [],
  !0
);
function xf(e, t) {
  const n = et(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  et(n, [
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
  ]), ce(t, !1);
  const r = te(), o = te(), i = te();
  let s = y(t, "label", 12, void 0), a = y(t, "labelStyle", 12, void 0), l = y(t, "style", 12, void 0), u = y(t, "markerStart", 12, void 0), c = y(t, "markerEnd", 12, void 0), d = y(t, "interactionWidth", 12, void 0), f = y(t, "sourceX", 12), h = y(t, "sourceY", 12), p = y(t, "sourcePosition", 12), b = y(t, "targetX", 12), x = y(t, "targetY", 12), k = y(t, "targetPosition", 12);
  return ae(
    () => (g(r), g(o), g(i), G(f()), G(h()), G(b()), G(x()), G(p()), G(k())),
    () => {
      ((v) => (U(r, v[0]), U(o, v[1]), U(i, v[2])))(Qi({
        sourceX: f(),
        sourceY: h(),
        targetX: b(),
        targetY: x(),
        sourcePosition: p(),
        targetPosition: k(),
        borderRadius: 0
      }));
    }
  ), ht(), Oe(), Jo(e, {
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
  }), de({
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
ie(
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
    sourcePosition: {},
    targetX: {},
    targetY: {},
    targetPosition: {}
  },
  [],
  [],
  !0
);
function ky(e, t) {
  const n = e.set, r = t.set, o = X(e), i = X(t);
  let s = o.length === 0 && i.length > 0 ? i : o;
  e.set(s);
  const a = (l) => {
    const u = n(l);
    return s = u, r(s), u;
  };
  e.set = t.set = a, e.update = t.update = (l) => a(l(s));
}
function Sy(e, t) {
  const n = e.set, r = t.set;
  let o = X(t);
  e.set(o);
  const i = (s) => {
    n(s), r(s), o = s;
  };
  e.set = t.set = i, e.update = t.update = (s) => i(s(o));
}
const Ey = (e, t, n) => {
  if (!n)
    return;
  const r = X(e), o = t.set, i = n.set;
  let s = n ? X(n) : { x: 0, y: 0, zoom: 1 };
  t.set(s), t.set = (a) => (o(a), i(a), s = a, a), n.set = (a) => (r == null || r.syncViewport(a), o(a), i(a), s = a, a), t.update = (a) => {
    t.set(a(s));
  }, n.update = (a) => {
    n.set(a(s));
  };
}, Ny = (e, t, n, r = [0, 0], o = qi) => {
  const { subscribe: i, set: s, update: a } = me([]);
  let l = e, u = {}, c = !0;
  const d = (b) => (nf(b, t, n, {
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
}, Py = (e, t, n, r) => {
  const { subscribe: o, set: i, update: s } = me([]);
  let a = e, l = {};
  const u = (f) => {
    const h = l ? f.map((p) => ({ ...l, ...p })) : f;
    of(t, n, h), a = h, i(a);
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
  input: hf,
  output: gf,
  default: es,
  group: pf
}, $f = {
  straight: bf,
  smoothstep: wf,
  default: ns,
  step: xf
}, Oy = ({ nodes: e = [], edges: t = [], width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: s }) => {
  const a = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), d = i ?? [0, 0], f = s ?? qi;
  nf(e, a, l, {
    nodeExtent: f,
    nodeOrigin: d,
    elevateNodesOnSelect: !1,
    checkEquality: !1
  }), of(u, c, t);
  let h = { x: 0, y: 0, zoom: 1 };
  if (o && n && r) {
    const p = Go(a, {
      filter: (b) => !!((b.width || b.initialWidth) && (b.height || b.initialHeight))
    });
    h = gl(p, n, r, 0.5, 2, 0.1);
  }
  return {
    flowId: me(null),
    nodes: Ny(e, a, l, d, f),
    nodeLookup: Bt(a),
    parentLookup: Bt(l),
    edgeLookup: Bt(c),
    visibleNodes: Bt([]),
    edges: Py(t, u, c),
    visibleEdges: Bt([]),
    connectionLookup: Bt(u),
    height: me(500),
    width: me(500),
    minZoom: me(0.5),
    maxZoom: me(2),
    nodeOrigin: me(d),
    nodeDragThreshold: me(1),
    nodeExtent: me(f),
    translateExtent: me(qi),
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
    selectionMode: me(Gi.Partial),
    nodeTypes: me(_f),
    edgeTypes: me($f),
    viewport: me(h),
    connectionMode: me(yr.Strict),
    domNode: me(null),
    connection: Bt(Sa),
    connectionLineType: me(Yr.Bezier),
    connectionRadius: me(20),
    isValidConnection: me(() => !0),
    nodesDraggable: me(!0),
    nodesConnectable: me(!0),
    elementsSelectable: me(!0),
    selectNodesOnDrag: me(!0),
    markers: Bt([]),
    defaultMarkerColor: me("#b1b1b7"),
    lib: Bt("svelte"),
    onlyRenderVisibleElements: me(!1),
    onerror: me(P2),
    ondelete: me(void 0),
    onedgecreate: me(void 0),
    onconnect: me(void 0),
    onconnectstart: me(void 0),
    onconnectend: me(void 0),
    onbeforedelete: me(void 0),
    nodesInitialized: me(!1),
    edgesInitialized: me(!1),
    viewportInitialized: me(!1),
    initialized: Bt(!1)
  };
};
function My(e) {
  const t = tr([
    e.edges,
    e.nodes,
    e.nodeLookup,
    e.onlyRenderVisibleElements,
    e.viewport,
    e.width,
    e.height
  ], ([n, , r, o, i, s, a]) => o && s && a ? n.filter((l) => {
    const u = r.get(l.source), c = r.get(l.target);
    return u && c && L2({
      sourceNode: u,
      targetNode: c,
      width: s,
      height: a,
      transform: [i.x, i.y, i.zoom]
    });
  }) : n);
  return tr([t, e.nodes, e.nodeLookup, e.connectionMode, e.onerror], ([n, , r, o, i]) => n.reduce((s, a) => {
    const l = r.get(a.source), u = r.get(a.target);
    if (!l || !u)
      return s;
    const c = K2({
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
      zIndex: T2({
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
function Vy(e) {
  return tr([
    e.nodeLookup,
    e.onlyRenderVisibleElements,
    e.width,
    e.height,
    e.viewport,
    e.nodes
  ], ([t, n, r, o, i]) => {
    const s = [i.x, i.y, i.zoom];
    return n ? Wd(t, { x: 0, y: 0, width: r, height: o }, s, !0) : Array.from(t.values());
  });
}
const Ms = Symbol();
function Cf({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: s }) {
  const a = Oy({
    nodes: e,
    edges: t,
    width: n,
    height: r,
    fitView: o,
    nodeOrigin: i,
    nodeExtent: s
  });
  function l($) {
    a.nodeTypes.set({
      ..._f,
      ...$
    });
  }
  function u($) {
    a.edgeTypes.set({
      ...$f,
      ...$
    });
  }
  function c($) {
    const E = X(a.edges);
    a.edges.set(I2($, E));
  }
  const d = ($, E = !1) => {
    var V;
    const T = X(a.nodeLookup);
    for (const [Z, W] of $) {
      const q = (V = T.get(Z)) == null ? void 0 : V.internals.userNode;
      q && (q.position = W.position, q.dragging = E);
    }
    a.nodes.update((Z) => Z);
  };
  function f($) {
    var E, V, T;
    const Z = X(a.nodeLookup), W = X(a.parentLookup), { changes: q, updatedInternals: fe } = U2($, Z, X(a.parentLookup), X(a.domNode), X(a.nodeOrigin));
    if (fe) {
      if (F2(Z, W, { nodeOrigin: i, nodeExtent: s }), !X(a.fitViewOnInitDone) && X(a.fitViewOnInit)) {
        const Q = X(a.fitViewOptions), B = p({
          ...Q,
          nodes: Q == null ? void 0 : Q.nodes
        });
        a.fitViewOnInitDone.set(B);
      }
      for (const Q of q) {
        const B = (E = Z.get(Q.id)) == null ? void 0 : E.internals.userNode;
        if (B)
          switch (Q.type) {
            case "dimensions": {
              const ue = { ...B.measured, ...Q.dimensions };
              Q.setAttributes && (B.width = ((V = Q.dimensions) == null ? void 0 : V.width) ?? B.width, B.height = ((T = Q.dimensions) == null ? void 0 : T.height) ?? B.height), B.measured = ue;
              break;
            }
            case "position":
              B.position = Q.position ?? B.position;
              break;
          }
      }
      a.nodes.update((Q) => Q), X(a.nodesInitialized) || a.nodesInitialized.set(!0);
    }
  }
  function h($) {
    const E = X(a.panZoom), V = X(a.domNode);
    if (!E || !V)
      return Promise.resolve(!1);
    const { width: T, height: Z } = pl(V), W = vu(X(a.nodeLookup), $);
    return mu({
      nodes: W,
      width: T,
      height: Z,
      minZoom: X(a.minZoom),
      maxZoom: X(a.maxZoom),
      panZoom: E
    }, $);
  }
  function p($) {
    const E = X(a.panZoom);
    if (!E)
      return !1;
    const V = vu(X(a.nodeLookup), $);
    return mu({
      nodes: V,
      width: X(a.width),
      height: X(a.height),
      minZoom: X(a.minZoom),
      maxZoom: X(a.maxZoom),
      panZoom: E
    }, $), V.size > 0;
  }
  function b($, E) {
    const V = X(a.panZoom);
    return V ? V.scaleBy($, E) : Promise.resolve(!1);
  }
  function x($) {
    return b(1.2, $);
  }
  function k($) {
    return b(1 / 1.2, $);
  }
  function v($) {
    const E = X(a.panZoom);
    E && (E.setScaleExtent([$, X(a.maxZoom)]), a.minZoom.set($));
  }
  function _($) {
    const E = X(a.panZoom);
    E && (E.setScaleExtent([X(a.minZoom), $]), a.maxZoom.set($));
  }
  function w($) {
    const E = X(a.panZoom);
    E && (E.setTranslateExtent($), a.translateExtent.set($));
  }
  function C($) {
    let E = !1;
    return $.forEach((V) => {
      V.selected && (V.selected = !1, E = !0);
    }), E;
  }
  function N($) {
    var E;
    (E = X(a.panZoom)) == null || E.setClickDistance($);
  }
  function P($) {
    C(($ == null ? void 0 : $.nodes) || X(a.nodes)) && a.nodes.set(X(a.nodes)), C(($ == null ? void 0 : $.edges) || X(a.edges)) && a.edges.set(X(a.edges));
  }
  a.deleteKeyPressed.subscribe(async ($) => {
    var E;
    if ($) {
      const V = X(a.nodes), T = X(a.edges), Z = V.filter((Q) => Q.selected), W = T.filter((Q) => Q.selected), { nodes: q, edges: fe } = await Fd({
        nodesToRemove: Z,
        edgesToRemove: W,
        nodes: V,
        edges: T,
        onBeforeDelete: X(a.onbeforedelete)
      });
      (q.length || fe.length) && (a.nodes.update((Q) => Q.filter((B) => !q.some((ue) => ue.id === B.id))), a.edges.update((Q) => Q.filter((B) => !fe.some((ue) => ue.id === B.id))), (E = X(a.ondelete)) == null || E({
        nodes: q,
        edges: fe
      }));
    }
  });
  function M($) {
    const E = X(a.multiselectionKeyPressed);
    a.nodes.update((V) => V.map((T) => {
      const Z = $.includes(T.id), W = E && T.selected || Z;
      return T.selected = W, T;
    })), E || a.edges.update((V) => V.map((T) => (T.selected = !1, T)));
  }
  function z($) {
    const E = X(a.multiselectionKeyPressed);
    a.edges.update((V) => V.map((T) => {
      const Z = $.includes(T.id), W = E && T.selected || Z;
      return T.selected = W, T;
    })), E || a.nodes.update((V) => V.map((T) => (T.selected = !1, T)));
  }
  function H($) {
    var E;
    const V = (E = X(a.nodes)) == null ? void 0 : E.find((T) => T.id === $);
    if (!V) {
      console.warn("012", jo.error012($));
      return;
    }
    a.selectionRect.set(null), a.selectionRectMode.set(null), V.selected ? V.selected && X(a.multiselectionKeyPressed) && P({ nodes: [V], edges: [] }) : M([$]);
  }
  function A($) {
    const E = X(a.viewport);
    return J2({
      delta: $,
      panZoom: X(a.panZoom),
      transform: [E.x, E.y, E.zoom],
      translateExtent: X(a.translateExtent),
      width: X(a.width),
      height: X(a.height)
    });
  }
  const D = me(Sa), R = ($) => {
    D.set({ ...$ });
  };
  function S() {
    D.set(Sa);
  }
  function O() {
    a.fitViewOnInitDone.set(!1), a.selectionRect.set(null), a.selectionRectMode.set(null), a.snapGrid.set(null), a.isValidConnection.set(() => !0), P(), S();
  }
  return {
    // state
    ...a,
    // derived state
    visibleEdges: My(a),
    visibleNodes: Vy(a),
    connection: tr([D, a.viewport], ([$, E]) => $.inProgress ? {
      ...$,
      to: Uo($.to, [E.x, E.y, E.zoom])
    } : { ...$ }),
    markers: tr([a.edges, a.defaultMarkerColor, a.flowId], ([$, E, V]) => Y2($, { defaultColor: E, id: V })),
    initialized: (() => {
      let $ = !1;
      const E = X(a.nodes).length, V = X(a.edges).length;
      return tr([a.nodesInitialized, a.edgesInitialized, a.viewportInitialized], ([T, Z, W]) => $ || (E === 0 ? $ = W : V === 0 ? $ = W && T : $ = W && T && Z, $));
    })(),
    // actions
    syncNodeStores: ($) => ky(a.nodes, $),
    syncEdgeStores: ($) => Sy(a.edges, $),
    syncViewport: ($) => Ey(a.panZoom, a.viewport, $),
    setNodeTypes: l,
    setEdgeTypes: u,
    addEdge: c,
    updateNodePositions: d,
    updateNodeInternals: f,
    zoomIn: x,
    zoomOut: k,
    fitView: ($) => h($),
    setMinZoom: v,
    setMaxZoom: _,
    setTranslateExtent: w,
    setPaneClickDistance: N,
    unselectNodesAndEdges: P,
    addSelectedNodes: M,
    addSelectedEdges: z,
    handleNodeSelection: H,
    panBy: A,
    updateConnection: R,
    cancelConnection: S,
    reset: O
  };
}
function Ge() {
  const e = vr(Ms);
  if (!e)
    throw new Error("In order to use useStore you need to wrap your component in a <SvelteFlowProvider />");
  return e.getStore();
}
function zy({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: s }) {
  const a = Cf({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: s });
  return jr(Ms, {
    getStore: () => a
  }), a;
}
function Mu(e, t) {
  const { panZoom: n, minZoom: r, maxZoom: o, initialViewport: i, viewport: s, dragging: a, translateExtent: l, paneClickDistance: u } = t, c = vy({
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
var Hy = /* @__PURE__ */ oe('<div class="svelte-flow__zoom svelte-4xkw84"><!></div>');
const Ty = {
  hash: "svelte-4xkw84",
  code: ".svelte-flow__zoom.svelte-4xkw84 {width:100%;height:100%;position:absolute;top:0;left:0;z-index:4;}"
};
function kf(e, t) {
  ce(t, !1), nt(e, Ty);
  const [n, r] = Qe(), o = () => J(V, "$panActivationKeyPressed", n), i = () => J(R, "$minZoom", n), s = () => J(S, "$maxZoom", n), a = () => J(T, "$zoomActivationKeyPressed", n), l = () => J(D, "$selectionRect", n), u = () => J($, "$translateExtent", n), c = () => J(E, "$lib", n), d = te(), f = te(), h = te();
  let p = y(t, "initialViewport", 12, void 0), b = y(t, "onMoveStart", 12, void 0), x = y(t, "onMove", 12, void 0), k = y(t, "onMoveEnd", 12, void 0), v = y(t, "panOnScrollMode", 12), _ = y(t, "preventScrolling", 12), w = y(t, "zoomOnScroll", 12), C = y(t, "zoomOnDoubleClick", 12), N = y(t, "zoomOnPinch", 12), P = y(t, "panOnDrag", 12), M = y(t, "panOnScroll", 12), z = y(t, "paneClickDistance", 12);
  const {
    viewport: H,
    panZoom: A,
    selectionRect: D,
    minZoom: R,
    maxZoom: S,
    dragging: O,
    translateExtent: $,
    lib: E,
    panActivationKeyPressed: V,
    zoomActivationKeyPressed: T,
    viewportInitialized: Z
  } = Ge(), W = (B) => H.set({
    x: B[0],
    y: B[1],
    zoom: B[2]
  });
  Er(() => {
    Bi(Z, !0);
  }), ae(() => G(p()), () => {
    U(d, p() || { x: 0, y: 0, zoom: 1 });
  }), ae(
    () => (o(), G(P())),
    () => {
      U(f, o() || P());
    }
  ), ae(
    () => (o(), G(M())),
    () => {
      U(h, o() || M());
    }
  ), ht(), Oe();
  var q = Hy(), fe = j(q);
  vt(fe, t, "default", {}), F(q), pt(q, (B, ue) => Mu == null ? void 0 : Mu(B, ue), () => ({
    viewport: H,
    minZoom: i(),
    maxZoom: s(),
    initialViewport: g(d),
    dragging: O,
    panZoom: A,
    onPanZoomStart: b(),
    onPanZoom: x(),
    onPanZoomEnd: k(),
    zoomOnScroll: w(),
    zoomOnDoubleClick: C(),
    zoomOnPinch: N(),
    panOnScroll: g(h),
    panOnDrag: g(f),
    panOnScrollSpeed: 0.5,
    panOnScrollMode: v() || nr.Free,
    zoomActivationKeyPressed: a(),
    preventScrolling: typeof _() == "boolean" ? _() : !0,
    noPanClassName: "nopan",
    noWheelClassName: "nowheel",
    userSelectionActive: !!l(),
    translateExtent: u(),
    lib: c(),
    paneClickDistance: z(),
    onTransformChange: W
  })), L(e, q);
  var Q = de({
    get initialViewport() {
      return p();
    },
    set initialViewport(B) {
      p(B), m();
    },
    get onMoveStart() {
      return b();
    },
    set onMoveStart(B) {
      b(B), m();
    },
    get onMove() {
      return x();
    },
    set onMove(B) {
      x(B), m();
    },
    get onMoveEnd() {
      return k();
    },
    set onMoveEnd(B) {
      k(B), m();
    },
    get panOnScrollMode() {
      return v();
    },
    set panOnScrollMode(B) {
      v(B), m();
    },
    get preventScrolling() {
      return _();
    },
    set preventScrolling(B) {
      _(B), m();
    },
    get zoomOnScroll() {
      return w();
    },
    set zoomOnScroll(B) {
      w(B), m();
    },
    get zoomOnDoubleClick() {
      return C();
    },
    set zoomOnDoubleClick(B) {
      C(B), m();
    },
    get zoomOnPinch() {
      return N();
    },
    set zoomOnPinch(B) {
      N(B), m();
    },
    get panOnDrag() {
      return P();
    },
    set panOnDrag(B) {
      P(B), m();
    },
    get panOnScroll() {
      return M();
    },
    set panOnScroll(B) {
      M(B), m();
    },
    get paneClickDistance() {
      return z();
    },
    set paneClickDistance(B) {
      z(B), m();
    }
  });
  return r(), Q;
}
ie(
  kf,
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
function Vu(e, t) {
  return (n) => {
    n.target === t && (e == null || e(n));
  };
}
function zu(e) {
  return (t) => {
    const n = e.includes(t.id);
    return t.selected !== n && (t.selected = n), t;
  };
}
var Ly = /* @__PURE__ */ oe('<div class="svelte-flow__pane svelte-1esy7hx"><!></div>');
const Dy = {
  hash: "svelte-1esy7hx",
  code: ".svelte-flow__pane.svelte-1esy7hx {position:absolute;top:0;left:0;width:100%;height:100%;}"
};
function Sf(e, t) {
  ce(t, !1), nt(e, Dy);
  const [n, r] = Qe(), o = () => J(S, "$panActivationKeyPressed", n), i = () => J(D, "$selectionKeyPressed", n), s = () => J(H, "$selectionRect", n), a = () => J(z, "$elementsSelectable", n), l = () => J(A, "$selectionRectMode", n), u = () => J(N, "$edges", n), c = () => J(C, "$nodeLookup", n), d = () => J(P, "$viewport", n), f = () => J(R, "$selectionMode", n), h = () => J(M, "$dragging", n), p = te(), b = te(), x = te();
  let k = y(t, "panOnDrag", 12, void 0), v = y(t, "selectionOnDrag", 12, void 0);
  const _ = _s(), {
    nodes: w,
    nodeLookup: C,
    edges: N,
    viewport: P,
    dragging: M,
    elementsSelectable: z,
    selectionRect: H,
    selectionRectMode: A,
    selectionKeyPressed: D,
    selectionMode: R,
    panActivationKeyPressed: S,
    unselectNodesAndEdges: O
  } = Ge();
  let $ = te(), E = null, V = [], T = !1;
  function Z(ne) {
    if (T) {
      T = !1;
      return;
    }
    _("paneclick", { event: ne }), O(), A.set(null);
  }
  function W(ne) {
    var le, Ie;
    if (E = g($).getBoundingClientRect(), !z || !g(b) || ne.button !== 0 || ne.target !== g($) || !E)
      return;
    (Ie = (le = ne.target) == null ? void 0 : le.setPointerCapture) == null || Ie.call(le, ne.pointerId);
    const { x: We, y: Re } = Dn(ne, E);
    O(), H.set({
      width: 0,
      height: 0,
      startX: We,
      startY: Re,
      x: We,
      y: Re
    });
  }
  function q(ne) {
    if (!g(b) || !E || !s())
      return;
    T = !0;
    const le = Dn(ne, E), Ie = s().startX ?? 0, We = s().startY ?? 0, Re = {
      ...s(),
      x: le.x < Ie ? le.x : Ie,
      y: le.y < We ? le.y : We,
      width: Math.abs(le.x - Ie),
      height: Math.abs(le.y - We)
    }, Ke = V.map((Ee) => Ee.id), Y = Ea(V, u()).map((Ee) => Ee.id);
    V = Wd(
      c(),
      Re,
      [
        d().x,
        d().y,
        d().zoom
      ],
      f() === Gi.Partial,
      !0
    );
    const he = Ea(V, u()).map((Ee) => Ee.id), ge = V.map((Ee) => Ee.id);
    (Ke.length !== ge.length || ge.some((Ee) => !Ke.includes(Ee))) && w.update((Ee) => Ee.map(zu(ge))), (Y.length !== he.length || he.some((Ee) => !Y.includes(Ee))) && N.update((Ee) => Ee.map(zu(he))), A.set("user"), H.set(Re);
  }
  function fe(ne) {
    var le, Ie;
    ne.button === 0 && ((Ie = (le = ne.target) == null ? void 0 : le.releasePointerCapture) == null || Ie.call(le, ne.pointerId), !g(b) && l() === "user" && ne.target === g($) && (Z == null || Z(ne)), H.set(null), V.length > 0 && Bi(A, "nodes"), i() && (T = !1));
  }
  const Q = (ne) => {
    var le;
    if (Array.isArray(g(p)) && (le = g(p)) != null && le.includes(2)) {
      ne.preventDefault();
      return;
    }
    _("panecontextmenu", { event: ne });
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
  ), ht(), Oe();
  var B = Ly(), ue = /* @__PURE__ */ ze(() => g(x) ? void 0 : Vu(Z, g($))), we = /* @__PURE__ */ ze(() => Vu(Q, g($))), be = j(B);
  vt(be, t, "default", {}), F(B), Bn(B, (ne) => U($, ne), () => g($)), Se(
    (ne) => {
      tt(B, "draggable", ne), tt(B, "dragging", h()), tt(B, "selection", g(b));
    },
    [
      () => k() === !0 || Array.isArray(k()) && k().includes(0)
    ],
    pe
  ), je("click", B, function(...ne) {
    var le;
    (le = g(ue)) == null || le.apply(this, ne);
  }), je("pointerdown", B, function(...ne) {
    var le;
    (le = g(x) ? W : void 0) == null || le.apply(this, ne);
  }), je("pointermove", B, function(...ne) {
    var le;
    (le = g(x) ? q : void 0) == null || le.apply(this, ne);
  }), je("pointerup", B, function(...ne) {
    var le;
    (le = g(x) ? fe : void 0) == null || le.apply(this, ne);
  }), je("contextmenu", B, function(...ne) {
    var le;
    (le = g(we)) == null || le.apply(this, ne);
  }), L(e, B);
  var ve = de({
    get panOnDrag() {
      return k();
    },
    set panOnDrag(ne) {
      k(ne), m();
    },
    get selectionOnDrag() {
      return v();
    },
    set selectionOnDrag(ne) {
      v(ne), m();
    }
  });
  return r(), ve;
}
ie(Sf, { panOnDrag: {}, selectionOnDrag: {} }, ["default"], [], !0);
var Ay = /* @__PURE__ */ oe('<div class="svelte-flow__viewport xyflow__viewport svelte-1floaup"><!></div>');
const Iy = {
  hash: "svelte-1floaup",
  code: ".svelte-flow__viewport.svelte-1floaup {width:100%;height:100%;position:absolute;top:0;left:0;}"
};
function Ef(e, t) {
  ce(t, !1), nt(e, Iy);
  const [n, r] = Qe(), o = () => J(i, "$viewport", n), { viewport: i } = Ge();
  Oe();
  var s = Ay(), a = j(s);
  vt(a, t, "default", {}), F(s), Se(() => se(s, "style", `transform: translate(${o().x ?? ""}px, ${o().y ?? ""}px) scale(${o().zoom ?? ""})`)), L(e, s), de(), r();
}
ie(Ef, {}, ["default"], [], !0);
function rs(e, t) {
  const { store: n, onDrag: r, onDragStart: o, onDragStop: i, onNodeMouseDown: s } = t, a = ty({
    onDrag: r,
    onDragStart: o,
    onDragStop: i,
    onNodeMouseDown: s,
    getStoreItems: () => {
      const u = X(n.snapGrid), c = X(n.viewport);
      return {
        nodes: X(n.nodes),
        nodeLookup: X(n.nodeLookup),
        edges: X(n.edges),
        nodeExtent: X(n.nodeExtent),
        snapGrid: u || [0, 0],
        snapToGrid: !!u,
        nodeOrigin: X(n.nodeOrigin),
        multiSelectionActive: X(n.multiselectionKeyPressed),
        domNode: X(n.domNode),
        transform: [c.x, c.y, c.zoom],
        autoPanOnNodeDrag: X(n.autoPanOnNodeDrag),
        nodesDraggable: X(n.nodesDraggable),
        selectNodesOnDrag: X(n.selectNodesOnDrag),
        nodeDragThreshold: X(n.nodeDragThreshold),
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
function Ry({ width: e, height: t, initialWidth: n, initialHeight: r, measuredWidth: o, measuredHeight: i }) {
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
var Zy = /* @__PURE__ */ oe("<div><!></div>");
function Nf(e, t) {
  ce(t, !1);
  const [n, r] = Qe(), o = () => J(we, "$nodeTypes", n), i = () => J(Ie, "$elementsSelectable", n), s = () => J(We, "$nodesDraggable", n), a = () => J(he, "$connectableStore", n), l = te(void 0, !0), u = te(void 0, !0), c = te(void 0, !0), d = te(void 0, !0);
  let f = y(t, "node", 13), h = y(t, "id", 13), p = y(t, "data", 29, () => ({})), b = y(t, "selected", 13, !1), x = y(t, "draggable", 13, void 0), k = y(t, "selectable", 13, void 0), v = y(t, "connectable", 13, !0), _ = y(t, "deletable", 13, !0), w = y(t, "hidden", 13, !1), C = y(t, "dragging", 13, !1), N = y(t, "resizeObserver", 13, null), P = y(t, "style", 13, void 0), M = y(t, "type", 13, "default"), z = y(t, "isParent", 13, !1), H = y(t, "positionX", 13), A = y(t, "positionY", 13), D = y(t, "sourcePosition", 13, void 0), R = y(t, "targetPosition", 13, void 0), S = y(t, "zIndex", 13), O = y(t, "measuredWidth", 13, void 0), $ = y(t, "measuredHeight", 13, void 0), E = y(t, "initialWidth", 13, void 0), V = y(t, "initialHeight", 13, void 0), T = y(t, "width", 13, void 0), Z = y(t, "height", 13, void 0), W = y(t, "dragHandle", 13, void 0), q = y(t, "initialized", 13, !1), fe = y(t, "parentId", 13, void 0), Q = y(t, "nodeClickDistance", 13, void 0), B = y(t, "class", 13, "");
  const ue = Ge(), {
    nodeTypes: we,
    nodeDragThreshold: be,
    selectNodesOnDrag: ve,
    handleNodeSelection: ne,
    updateNodeInternals: le,
    elementsSelectable: Ie,
    nodesDraggable: We
  } = ue;
  let Re = te(void 0, !0), Ke = te(null, !0);
  const Y = _s(), he = me(v());
  let ge = te(void 0, !0), Ee = te(void 0, !0), it = te(void 0, !0);
  jr("svelteflow__node_id", h()), jr("svelteflow__node_connectable", he), ol(() => {
    var ee;
    g(Ke) && ((ee = N()) == null || ee.unobserve(g(Ke)));
  });
  function Ve(ee) {
    k() && (!X(ve) || !x() || X(be) > 0) && ne(h()), Y("nodeclick", { node: f().internals.userNode, event: ee });
  }
  ae(() => G(M()), () => {
    U(l, M() || "default");
  }), ae(() => (o(), g(l)), () => {
    U(u, !!o()[g(l)]);
  }), ae(
    () => (o(), g(l), es),
    () => {
      U(c, o()[g(l)] || es);
    }
  ), ae(
    () => (g(u), G(M())),
    () => {
      g(u) || console.warn("003", jo.error003(M()));
    }
  ), ae(
    () => (G(T()), G(Z()), G(E()), G(V()), G(O()), G($())),
    () => {
      U(d, Ry({
        width: T(),
        height: Z(),
        initialWidth: E(),
        initialHeight: V(),
        measuredWidth: O(),
        measuredHeight: $()
      }));
    }
  ), ae(() => G(v()), () => {
    he.set(!!v());
  }), ae(
    () => (g(ge), g(l), g(Ee), G(D()), g(it), G(R()), G(h()), g(Re)),
    () => {
      (g(ge) && g(l) !== g(ge) || g(Ee) && D() !== g(Ee) || g(it) && R() !== g(it)) && requestAnimationFrame(() => le(/* @__PURE__ */ new Map([
        [
          h(),
          {
            id: h(),
            nodeElement: g(Re),
            force: !0
          }
        ]
      ]))), U(ge, g(l)), U(Ee, D()), U(it, R());
    }
  ), ae(
    () => (G(N()), g(Re), g(Ke), G(q())),
    () => {
      N() && (g(Re) !== g(Ke) || !q()) && (g(Ke) && N().unobserve(g(Ke)), g(Re) && N().observe(g(Re)), U(Ke, g(Re)));
    }
  ), ht(), Oe(!0);
  var Ye = qe(), Xe = ye(Ye);
  {
    var rt = (ee) => {
      var Pe = Zy(), re = j(Pe);
      const Sn = /* @__PURE__ */ pe(() => b() ?? !1), Gt = /* @__PURE__ */ pe(() => k() ?? i() ?? !0), Ne = /* @__PURE__ */ pe(() => _() ?? !0), lt = /* @__PURE__ */ pe(() => x() ?? s() ?? !0);
      ud(re, () => g(c), (xe, He) => {
        He(xe, {
          get data() {
            return p();
          },
          get id() {
            return h();
          },
          get selected() {
            return g(Sn);
          },
          get selectable() {
            return g(Gt);
          },
          get deletable() {
            return g(Ne);
          },
          get sourcePosition() {
            return D();
          },
          get targetPosition() {
            return R();
          },
          get zIndex() {
            return S();
          },
          get dragging() {
            return C();
          },
          get draggable() {
            return g(lt);
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
            return H();
          },
          get positionAbsoluteY() {
            return A();
          },
          get width() {
            return T();
          },
          get height() {
            return Z();
          }
        });
      }), F(Pe), pt(Pe, (xe, He) => rs == null ? void 0 : rs(xe, He), () => ({
        nodeId: h(),
        isSelectable: k(),
        disabled: !1,
        handleSelector: W(),
        noDragClass: "nodrag",
        nodeClickDistance: Q(),
        onNodeMouseDown: ne,
        onDrag: (xe, He, st, Zt) => {
          Y("nodedrag", { event: xe, targetNode: st, nodes: Zt });
        },
        onDragStart: (xe, He, st, Zt) => {
          Y("nodedragstart", { event: xe, targetNode: st, nodes: Zt });
        },
        onDragStop: (xe, He, st, Zt) => {
          Y("nodedragstop", { event: xe, targetNode: st, nodes: Zt });
        },
        store: ue
      })), Bn(Pe, (xe) => U(Re, xe), () => g(Re)), Ht(() => je("click", Pe, Ve)), Ht(() => je("mouseenter", Pe, (xe) => Y("nodemouseenter", { node: f(), event: xe }))), Ht(() => je("mouseleave", Pe, (xe) => Y("nodemouseleave", { node: f(), event: xe }))), Ht(() => je("mousemove", Pe, (xe) => Y("nodemousemove", { node: f(), event: xe }))), Ht(() => je("contextmenu", Pe, (xe) => Y("nodecontextmenu", { node: f(), event: xe }))), Se(
        (xe) => {
          se(Pe, "data-id", h()), Gr(Pe, Cn(xe)), se(Pe, "style", `${P() ?? ""};${g(d).width ?? ""}${g(d).height ?? ""}`), tt(Pe, "dragging", C()), tt(Pe, "selected", b()), tt(Pe, "draggable", x()), tt(Pe, "connectable", v()), tt(Pe, "selectable", k()), tt(Pe, "nopan", x()), tt(Pe, "parent", z()), ot(Pe, "z-index", S()), ot(Pe, "transform", `translate(${H() ?? ""}px, ${A() ?? ""}px)`), ot(Pe, "visibility", q() ? "visible" : "hidden");
        },
        [
          () => Ct([
            "svelte-flow__node",
            `svelte-flow__node-${g(l)}`,
            B()
          ])
        ],
        pe
      ), L(ee, Pe);
    };
    _e(Xe, (ee) => {
      w() || ee(rt);
    });
  }
  L(e, Ye);
  var gt = de({
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
      return _();
    },
    set deletable(ee) {
      _(ee), m();
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
      return P();
    },
    set style(ee) {
      P(ee), m();
    },
    get type() {
      return M();
    },
    set type(ee) {
      M(ee), m();
    },
    get isParent() {
      return z();
    },
    set isParent(ee) {
      z(ee), m();
    },
    get positionX() {
      return H();
    },
    set positionX(ee) {
      H(ee), m();
    },
    get positionY() {
      return A();
    },
    set positionY(ee) {
      A(ee), m();
    },
    get sourcePosition() {
      return D();
    },
    set sourcePosition(ee) {
      D(ee), m();
    },
    get targetPosition() {
      return R();
    },
    set targetPosition(ee) {
      R(ee), m();
    },
    get zIndex() {
      return S();
    },
    set zIndex(ee) {
      S(ee), m();
    },
    get measuredWidth() {
      return O();
    },
    set measuredWidth(ee) {
      O(ee), m();
    },
    get measuredHeight() {
      return $();
    },
    set measuredHeight(ee) {
      $(ee), m();
    },
    get initialWidth() {
      return E();
    },
    set initialWidth(ee) {
      E(ee), m();
    },
    get initialHeight() {
      return V();
    },
    set initialHeight(ee) {
      V(ee), m();
    },
    get width() {
      return T();
    },
    set width(ee) {
      T(ee), m();
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
      return B();
    },
    set class(ee) {
      B(ee), m();
    }
  });
  return r(), gt;
}
ie(
  Nf,
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
var By = /* @__PURE__ */ oe('<div class="svelte-flow__nodes svelte-tf4uy4"></div>');
const Ky = {
  hash: "svelte-tf4uy4",
  code: ".svelte-flow__nodes.svelte-tf4uy4 {width:100%;height:100%;position:absolute;left:0;top:0;}"
};
function Pf(e, t) {
  ce(t, !1), nt(e, Ky);
  const [n, r] = Qe(), o = () => J(c, "$visibleNodes", n), i = () => J(d, "$nodesDraggable", n), s = () => J(h, "$elementsSelectable", n), a = () => J(f, "$nodesConnectable", n), l = () => J(b, "$parentLookup", n);
  let u = y(t, "nodeClickDistance", 12, 0);
  const {
    visibleNodes: c,
    nodesDraggable: d,
    nodesConnectable: f,
    elementsSelectable: h,
    updateNodeInternals: p,
    parentLookup: b
  } = Ge(), x = typeof ResizeObserver > "u" ? null : new ResizeObserver((_) => {
    const w = /* @__PURE__ */ new Map();
    _.forEach((C) => {
      const N = C.target.getAttribute("data-id");
      w.set(N, { id: N, nodeElement: C.target, force: !0 });
    }), p(w);
  });
  ol(() => {
    x == null || x.disconnect();
  }), Oe();
  var k = By();
  Dt(k, 5, o, (_) => _.id, (_, w) => {
    const C = /* @__PURE__ */ pe(() => !!g(w).selected), N = /* @__PURE__ */ pe(() => !!g(w).hidden), P = /* @__PURE__ */ pe(() => !!(g(w).draggable || i() && typeof g(w).draggable > "u")), M = /* @__PURE__ */ pe(() => !!(g(w).selectable || s() && typeof g(w).selectable > "u")), z = /* @__PURE__ */ pe(() => !!(g(w).connectable || a() && typeof g(w).connectable > "u")), H = /* @__PURE__ */ pe(() => g(w).deletable ?? !0), A = /* @__PURE__ */ pe(() => l().has(g(w).id)), D = /* @__PURE__ */ pe(() => g(w).type ?? "default"), R = /* @__PURE__ */ pe(() => g(w).internals.z ?? 0), S = /* @__PURE__ */ pe(() => Jd(g(w)));
    Nf(_, {
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
        return g(P);
      },
      get selectable() {
        return g(M);
      },
      get connectable() {
        return g(z);
      },
      get deletable() {
        return g(H);
      },
      get positionX() {
        return g(w).internals.positionAbsolute.x;
      },
      get positionY() {
        return g(w).internals.positionAbsolute.y;
      },
      get isParent() {
        return g(A);
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
        return g(R);
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
        nodeclick(O) {
          De.call(this, t, O);
        },
        nodemouseenter(O) {
          De.call(this, t, O);
        },
        nodemousemove(O) {
          De.call(this, t, O);
        },
        nodemouseleave(O) {
          De.call(this, t, O);
        },
        nodedrag(O) {
          De.call(this, t, O);
        },
        nodedragstart(O) {
          De.call(this, t, O);
        },
        nodedragstop(O) {
          De.call(this, t, O);
        },
        nodecontextmenu(O) {
          De.call(this, t, O);
        }
      }
    });
  }), F(k), L(e, k);
  var v = de({
    get nodeClickDistance() {
      return u();
    },
    set nodeClickDistance(_) {
      u(_), m();
    }
  });
  return r(), v;
}
ie(Pf, { nodeClickDistance: {} }, [], [], !0);
var Yy = /* @__PURE__ */ ke('<svg><g role="img"><!></g></svg>');
function Of(e, t) {
  ce(t, !1);
  const [n, r] = Qe(), o = () => J(B, "$edgeTypes", n), i = () => J(ue, "$flowId", n), s = () => J(we, "$elementsSelectable", n), a = () => J(Q, "$edgeLookup", n), l = te(void 0, !0), u = te(void 0, !0), c = te(void 0, !0), d = te(void 0, !0), f = te(void 0, !0);
  let h = y(t, "id", 13), p = y(t, "type", 13, "default"), b = y(t, "source", 13, ""), x = y(t, "target", 13, ""), k = y(t, "data", 29, () => ({})), v = y(t, "style", 13, void 0), _ = y(t, "zIndex", 13, void 0), w = y(t, "animated", 13, !1), C = y(t, "selected", 13, !1), N = y(t, "selectable", 13, void 0), P = y(t, "deletable", 13, void 0), M = y(t, "hidden", 13, !1), z = y(t, "label", 13, void 0), H = y(t, "labelStyle", 13, void 0), A = y(t, "markerStart", 13, void 0), D = y(t, "markerEnd", 13, void 0), R = y(t, "sourceHandle", 13, void 0), S = y(t, "targetHandle", 13, void 0), O = y(t, "sourceX", 13), $ = y(t, "sourceY", 13), E = y(t, "targetX", 13), V = y(t, "targetY", 13), T = y(t, "sourcePosition", 13), Z = y(t, "targetPosition", 13), W = y(t, "ariaLabel", 13, void 0), q = y(t, "interactionWidth", 13, void 0), fe = y(t, "class", 13, "");
  jr("svelteflow__edge_id", h());
  const {
    edgeLookup: Q,
    edgeTypes: B,
    flowId: ue,
    elementsSelectable: we
  } = Ge(), be = _s(), ve = mf();
  function ne(Y) {
    const he = a().get(h());
    he && (ve(h()), be("edgeclick", { event: Y, edge: he }));
  }
  function le(Y, he) {
    const ge = a().get(h());
    ge && be(he, { event: Y, edge: ge });
  }
  ae(() => G(p()), () => {
    U(l, p() || "default");
  }), ae(
    () => (o(), g(l), ns),
    () => {
      U(u, o()[g(l)] || ns);
    }
  ), ae(
    () => (G(A()), i()),
    () => {
      U(c, A() ? `url('#${Oa(A(), i())}')` : void 0);
    }
  ), ae(
    () => (G(D()), i()),
    () => {
      U(d, D() ? `url('#${Oa(D(), i())}')` : void 0);
    }
  ), ae(
    () => (G(N()), s()),
    () => {
      U(f, N() ?? s());
    }
  ), ht(), Oe(!0);
  var Ie = qe(), We = ye(Ie);
  {
    var Re = (Y) => {
      var he = Yy(), ge = j(he), Ee = j(ge);
      const it = /* @__PURE__ */ pe(() => P() ?? !0);
      ud(Ee, () => g(u), (Ve, Ye) => {
        Ye(Ve, {
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
            return O();
          },
          get sourceY() {
            return $();
          },
          get targetX() {
            return E();
          },
          get targetY() {
            return V();
          },
          get sourcePosition() {
            return T();
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
            return z();
          },
          get labelStyle() {
            return H();
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
            return g(it);
          },
          get type() {
            return g(l);
          },
          get sourceHandleId() {
            return R();
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
      }), F(ge), F(he), Se(
        (Ve) => {
          ot(he, "z-index", _()), Sr(ge, Cn(Ve)), se(ge, "data-id", h()), se(ge, "aria-label", W() === null ? void 0 : W() ? W() : `Edge from ${b()} to ${x()}`), tt(ge, "animated", w()), tt(ge, "selected", C()), tt(ge, "selectable", g(f));
        },
        [
          () => Ct(["svelte-flow__edge", fe()])
        ],
        pe
      ), je("click", ge, ne), je("contextmenu", ge, (Ve) => {
        le(Ve, "edgecontextmenu");
      }), je("mouseenter", ge, (Ve) => {
        le(Ve, "edgemouseenter");
      }), je("mouseleave", ge, (Ve) => {
        le(Ve, "edgemouseleave");
      }), L(Y, he);
    };
    _e(We, (Y) => {
      M() || Y(Re);
    });
  }
  L(e, Ie);
  var Ke = de({
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
      return _();
    },
    set zIndex(Y) {
      _(Y), m();
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
      return P();
    },
    set deletable(Y) {
      P(Y), m();
    },
    get hidden() {
      return M();
    },
    set hidden(Y) {
      M(Y), m();
    },
    get label() {
      return z();
    },
    set label(Y) {
      z(Y), m();
    },
    get labelStyle() {
      return H();
    },
    set labelStyle(Y) {
      H(Y), m();
    },
    get markerStart() {
      return A();
    },
    set markerStart(Y) {
      A(Y), m();
    },
    get markerEnd() {
      return D();
    },
    set markerEnd(Y) {
      D(Y), m();
    },
    get sourceHandle() {
      return R();
    },
    set sourceHandle(Y) {
      R(Y), m();
    },
    get targetHandle() {
      return S();
    },
    set targetHandle(Y) {
      S(Y), m();
    },
    get sourceX() {
      return O();
    },
    set sourceX(Y) {
      O(Y), m();
    },
    get sourceY() {
      return $();
    },
    set sourceY(Y) {
      $(Y), m();
    },
    get targetX() {
      return E();
    },
    set targetX(Y) {
      E(Y), m();
    },
    get targetY() {
      return V();
    },
    set targetY(Y) {
      V(Y), m();
    },
    get sourcePosition() {
      return T();
    },
    set sourcePosition(Y) {
      T(Y), m();
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
ie(
  Of,
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
function Mf(e, t) {
  ce(t, !1);
  let n = y(t, "onMount", 12, void 0), r = y(t, "onDestroy", 12, void 0);
  return Er(() => {
    var o;
    return (o = n()) == null || o(), r();
  }), Oe(), de({
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
ie(Mf, { onMount: {}, onDestroy: {} }, [], [], !0);
var Xy = /* @__PURE__ */ ke("<defs></defs>");
function Vf(e, t) {
  ce(t, !1);
  const [n, r] = Qe(), o = () => J(i, "$markers", n), { markers: i } = Ge();
  Oe();
  var s = Xy();
  Dt(s, 5, o, (a) => a.id, (a, l) => {
    zf(a, _t(() => g(l)));
  }), F(s), L(e, s), de(), r();
}
ie(Vf, {}, [], [], !0);
var Wy = /* @__PURE__ */ ke('<polyline stroke-linecap="round" stroke-linejoin="round" fill="none" points="-5,-4 0,0 -5,4"></polyline>'), Fy = /* @__PURE__ */ ke('<polyline stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), jy = /* @__PURE__ */ ke('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function zf(e, t) {
  ce(t, !1);
  let n = y(t, "id", 12), r = y(t, "type", 12), o = y(t, "width", 12, 12.5), i = y(t, "height", 12, 12.5), s = y(t, "markerUnits", 12, "strokeWidth"), a = y(t, "orient", 12, "auto-start-reverse"), l = y(t, "color", 12, void 0), u = y(t, "strokeWidth", 12, void 0);
  Oe();
  var c = jy(), d = j(c);
  {
    var f = (p) => {
      var b = Wy();
      Se(() => {
        se(b, "stroke", l()), se(b, "stroke-width", u());
      }), L(p, b);
    }, h = (p) => {
      var b = qe(), x = ye(b);
      {
        var k = (v) => {
          var _ = Fy();
          Se(() => {
            se(_, "stroke", l()), se(_, "stroke-width", u()), se(_, "fill", l());
          }), L(v, _);
        };
        _e(
          x,
          (v) => {
            r() === Lo.ArrowClosed && v(k);
          },
          !0
        );
      }
      L(p, b);
    };
    _e(d, (p) => {
      r() === Lo.Arrow ? p(f) : p(h, !1);
    });
  }
  return F(c), Se(() => {
    se(c, "id", n()), se(c, "markerWidth", `${o()}`), se(c, "markerHeight", `${i()}`), se(c, "markerUnits", s()), se(c, "orient", a());
  }), L(e, c), de({
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
ie(
  zf,
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
var qy = /* @__PURE__ */ oe('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!> <!></div>');
function Hf(e, t) {
  ce(t, !1);
  const [n, r] = Qe(), o = () => J(a, "$visibleEdges", n), i = () => J(c, "$elementsSelectable", n);
  let s = y(t, "defaultEdgeOptions", 12);
  const {
    visibleEdges: a,
    edgesInitialized: l,
    edges: { setDefaultOptions: u },
    elementsSelectable: c
  } = Ge();
  Er(() => {
    s() && u(s());
  }), Oe();
  var d = qy(), f = j(d), h = j(f);
  Vf(h, {}), F(f);
  var p = K(f, 2);
  Dt(p, 1, o, (v) => v.id, (v, _) => {
    const w = /* @__PURE__ */ pe(() => g(_).selectable ?? i()), C = /* @__PURE__ */ pe(() => g(_).type || "default");
    Of(v, {
      get id() {
        return g(_).id;
      },
      get source() {
        return g(_).source;
      },
      get target() {
        return g(_).target;
      },
      get data() {
        return g(_).data;
      },
      get style() {
        return g(_).style;
      },
      get animated() {
        return g(_).animated;
      },
      get selected() {
        return g(_).selected;
      },
      get selectable() {
        return g(w);
      },
      get deletable() {
        return g(_).deletable;
      },
      get hidden() {
        return g(_).hidden;
      },
      get label() {
        return g(_).label;
      },
      get labelStyle() {
        return g(_).labelStyle;
      },
      get markerStart() {
        return g(_).markerStart;
      },
      get markerEnd() {
        return g(_).markerEnd;
      },
      get sourceHandle() {
        return g(_).sourceHandle;
      },
      get targetHandle() {
        return g(_).targetHandle;
      },
      get sourceX() {
        return g(_).sourceX;
      },
      get sourceY() {
        return g(_).sourceY;
      },
      get targetX() {
        return g(_).targetX;
      },
      get targetY() {
        return g(_).targetY;
      },
      get sourcePosition() {
        return g(_).sourcePosition;
      },
      get targetPosition() {
        return g(_).targetPosition;
      },
      get ariaLabel() {
        return g(_).ariaLabel;
      },
      get interactionWidth() {
        return g(_).interactionWidth;
      },
      get class() {
        return g(_).class;
      },
      get type() {
        return g(C);
      },
      get zIndex() {
        return g(_).zIndex;
      },
      $$events: {
        edgeclick(N) {
          De.call(this, t, N);
        },
        edgecontextmenu(N) {
          De.call(this, t, N);
        },
        edgemouseenter(N) {
          De.call(this, t, N);
        },
        edgemouseleave(N) {
          De.call(this, t, N);
        }
      }
    });
  });
  var b = K(p, 2);
  {
    var x = (v) => {
      Mf(v, {
        onMount: () => {
          Bi(l, !0);
        },
        onDestroy: () => {
          Bi(l, !1);
        }
      });
    };
    _e(b, (v) => {
      o().length > 0 && v(x);
    });
  }
  F(d), L(e, d);
  var k = de({
    get defaultEdgeOptions() {
      return s();
    },
    set defaultEdgeOptions(v) {
      s(v), m();
    }
  });
  return r(), k;
}
ie(Hf, { defaultEdgeOptions: {} }, [], [], !0);
var Gy = /* @__PURE__ */ oe('<div class="svelte-flow__selection svelte-1iugwpu"></div>');
const Uy = {
  hash: "svelte-1iugwpu",
  code: ".svelte-flow__selection.svelte-1iugwpu {position:absolute;top:0;left:0;}"
};
function wl(e, t) {
  ce(t, !1), nt(e, Uy);
  let n = y(t, "x", 12, 0), r = y(t, "y", 12, 0), o = y(t, "width", 12, 0), i = y(t, "height", 12, 0), s = y(t, "isVisible", 12, !0);
  var a = qe(), l = ye(a);
  {
    var u = (c) => {
      var d = Gy();
      Se(() => {
        ot(d, "width", typeof o() == "string" ? o() : `${o()}px`), ot(d, "height", typeof i() == "string" ? i() : `${i()}px`), ot(d, "transform", `translate(${n()}px, ${r()}px)`);
      }), L(c, d);
    };
    _e(l, (c) => {
      s() && c(u);
    });
  }
  return L(e, a), de({
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
ie(
  wl,
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
function Tf(e, t) {
  ce(t, !1);
  const [n, r] = Qe(), o = () => J(s, "$selectionRect", n), i = () => J(a, "$selectionRectMode", n), { selectionRect: s, selectionRectMode: a } = Ge();
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
  wl(e, {
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
  }), de(), r();
}
ie(Tf, {}, [], [], !0);
var Jy = /* @__PURE__ */ oe('<div class="selection-wrapper nopan svelte-5pxri" role="button" tabindex="-1"><!></div>');
const Qy = {
  hash: "svelte-5pxri",
  code: ".selection-wrapper.svelte-5pxri {position:absolute;top:0;left:0;z-index:7;pointer-events:all;}"
};
function Lf(e, t) {
  ce(t, !1), nt(e, Qy);
  const [n, r] = Qe(), o = () => J(l, "$selectionRectMode", n), i = () => J(c, "$nodeLookup", n), s = () => J(u, "$nodes", n), a = Ge(), { selectionRectMode: l, nodes: u, nodeLookup: c } = a, d = _s();
  let f = te(null);
  function h(v) {
    const _ = s().filter((w) => w.selected);
    d("selectioncontextmenu", { nodes: _, event: v });
  }
  function p(v) {
    const _ = s().filter((w) => w.selected);
    d("selectionclick", { nodes: _, event: v });
  }
  ae(
    () => (o(), i(), s()),
    () => {
      o() === "nodes" && (U(f, Go(i(), { filter: (v) => !!v.selected })), s());
    }
  ), ht(), Oe();
  var b = qe(), x = ye(b);
  {
    var k = (v) => {
      var _ = Jy(), w = j(_);
      wl(w, { width: "100%", height: "100%", x: 0, y: 0 }), F(_), pt(_, (C, N) => rs == null ? void 0 : rs(C, N), () => ({
        disabled: !1,
        store: a,
        onDrag: (C, N, P, M) => {
          d("nodedrag", { event: C, targetNode: null, nodes: M });
        },
        onDragStart: (C, N, P, M) => {
          d("nodedragstart", { event: C, targetNode: null, nodes: M });
        },
        onDragStop: (C, N, P, M) => {
          d("nodedragstop", { event: C, targetNode: null, nodes: M });
        }
      })), Ht(() => je("contextmenu", _, h)), Ht(() => je("click", _, p)), Ht(() => je("keyup", _, () => {
      })), Se(() => se(_, "style", `width: ${g(f).width ?? ""}px; height: ${g(f).height ?? ""}px; transform: translate(${g(f).x ?? ""}px, ${g(f).y ?? ""}px)`)), L(v, _);
    };
    _e(x, (v) => {
      o() === "nodes" && g(f) && Vn(g(f).x) && Vn(g(f).y) && v(k);
    });
  }
  L(e, b), de(), r();
}
ie(Lf, {}, [], [], !0);
function ut(e, t) {
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
function Df(e, t) {
  ce(t, !1);
  let n = y(t, "selectionKey", 12, "Shift"), r = y(t, "multiSelectionKey", 28, () => Ji() ? "Meta" : "Control"), o = y(t, "deleteKey", 12, "Backspace"), i = y(t, "panActivationKey", 12, " "), s = y(t, "zoomActivationKey", 28, () => Ji() ? "Meta" : "Control");
  const {
    selectionKeyPressed: a,
    multiselectionKeyPressed: l,
    deleteKeyPressed: u,
    panActivationKeyPressed: c,
    zoomActivationKeyPressed: d,
    selectionRect: f
  } = Ge();
  function h(v) {
    return v !== null && typeof v == "object";
  }
  function p(v) {
    return h(v) ? v.modifier || [] : [];
  }
  function b(v) {
    return v == null ? "" : h(v) ? v.key : v;
  }
  function x(v, _) {
    return (Array.isArray(v) ? v : [v]).map((w) => {
      const C = b(w);
      return {
        key: C,
        modifier: p(w),
        enabled: C !== null,
        callback: _
      };
    });
  }
  function k() {
    f.set(null), a.set(!1), l.set(!1), u.set(!1), c.set(!1), d.set(!1);
  }
  return Oe(), je("blur", Et, k), je("contextmenu", Et, k), pt(Et, (v, _) => ut == null ? void 0 : ut(v, _), () => ({
    trigger: x(n(), () => a.set(!0)),
    type: "keydown"
  })), pt(Et, (v, _) => ut == null ? void 0 : ut(v, _), () => ({
    trigger: x(n(), () => a.set(!1)),
    type: "keyup"
  })), pt(Et, (v, _) => ut == null ? void 0 : ut(v, _), () => ({
    trigger: x(r(), () => l.set(!0)),
    type: "keydown"
  })), pt(Et, (v, _) => ut == null ? void 0 : ut(v, _), () => ({
    trigger: x(r(), () => l.set(!1)),
    type: "keyup"
  })), pt(Et, (v, _) => ut == null ? void 0 : ut(v, _), () => ({
    trigger: x(o(), (v) => {
      !(v.originalEvent.ctrlKey || v.originalEvent.metaKey || v.originalEvent.shiftKey) && !z2(v.originalEvent) && u.set(!0);
    }),
    type: "keydown"
  })), pt(Et, (v, _) => ut == null ? void 0 : ut(v, _), () => ({
    trigger: x(o(), () => u.set(!1)),
    type: "keyup"
  })), pt(Et, (v, _) => ut == null ? void 0 : ut(v, _), () => ({
    trigger: x(i(), () => c.set(!0)),
    type: "keydown"
  })), pt(Et, (v, _) => ut == null ? void 0 : ut(v, _), () => ({
    trigger: x(i(), () => c.set(!1)),
    type: "keyup"
  })), pt(Et, (v, _) => ut == null ? void 0 : ut(v, _), () => ({
    trigger: x(s(), () => d.set(!0)),
    type: "keydown"
  })), pt(Et, (v, _) => ut == null ? void 0 : ut(v, _), () => ({
    trigger: x(s(), () => d.set(!1)),
    type: "keyup"
  })), de({
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
ie(
  Df,
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
var ew = /* @__PURE__ */ ke('<path fill="none" class="svelte-flow__connection-path"></path>'), tw = /* @__PURE__ */ ke('<svg class="svelte-flow__connectionline"><g><!><!></g></svg>');
function Af(e, t) {
  ce(t, !1);
  const [n, r] = Qe(), o = () => J(h, "$connection", n), i = () => J(p, "$connectionLineType", n), s = () => J(d, "$width", n), a = () => J(f, "$height", n);
  let l = y(t, "containerStyle", 12, ""), u = y(t, "style", 12, ""), c = y(t, "isCustomComponent", 12, !1);
  const {
    width: d,
    height: f,
    connection: h,
    connectionLineType: p
  } = Ge();
  let b = te(null);
  ae(
    () => (o(), G(c()), i(), g(b), Pa),
    () => {
      if (o().inProgress && !c()) {
        const { from: w, to: C, fromPosition: N, toPosition: P } = o(), M = {
          sourceX: w.x,
          sourceY: w.y,
          sourcePosition: N,
          targetX: C.x,
          targetY: C.y,
          targetPosition: P
        };
        switch (i()) {
          case Yr.Bezier:
            ((z) => U(b, z[0]))(ef(M));
            break;
          case Yr.Step:
            ((z) => U(b, z[0]))(Qi({ ...M, borderRadius: 0 }));
            break;
          case Yr.SmoothStep:
            ((z) => U(b, z[0]))(Qi(M));
            break;
          default:
            ((z) => U(b, z[0]))(Pa(M));
        }
      }
    }
  ), ht(), Oe();
  var x = qe(), k = ye(x);
  {
    var v = (w) => {
      var C = tw(), N = j(C), P = j(N);
      vt(P, t, "connectionLine", {});
      var M = K(P);
      {
        var z = (H) => {
          var A = ew();
          Se(() => {
            se(A, "d", g(b)), se(A, "style", u());
          }), L(H, A);
        };
        _e(M, (H) => {
          c() || H(z);
        });
      }
      F(N), F(C), Se(
        (H) => {
          se(C, "width", s()), se(C, "height", a()), se(C, "style", l()), Sr(N, Cn(H));
        },
        [
          () => Ct([
            "svelte-flow__connection",
            C2(o().isValid)
          ])
        ],
        pe
      ), L(w, C);
    };
    _e(k, (w) => {
      o().inProgress && w(v);
    });
  }
  L(e, x);
  var _ = de({
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
  return r(), _;
}
ie(
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
var nw = /* @__PURE__ */ oe("<div><!></div>");
function Vs(e, t) {
  const n = et(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = et(n, ["position", "style", "class"]);
  ce(t, !1);
  const [o, i] = Qe(), s = () => J(d, "$selectionRectMode", o), a = te();
  let l = y(t, "position", 12, "top-right"), u = y(t, "style", 12, void 0), c = y(t, "class", 12, void 0);
  const { selectionRectMode: d } = Ge();
  ae(() => G(l()), () => {
    U(a, `${l()}`.split("-"));
  }), ht(), Oe();
  var f = nw();
  let h;
  var p = j(f);
  vt(p, t, "default", {}), F(f), Se(
    (x) => {
      h = ln(f, h, {
        class: x,
        style: u(),
        ...r
      }), ot(f, "pointer-events", s() ? "none" : "");
    },
    [
      () => Ct([
        "svelte-flow__panel",
        c(),
        ...g(a)
      ])
    ],
    pe
  ), L(e, f);
  var b = de({
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
ie(Vs, { position: {}, style: {}, class: {} }, ["default"], [], !0);
var rw = /* @__PURE__ */ oe('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function If(e, t) {
  ce(t, !1);
  let n = y(t, "proOptions", 12, void 0), r = y(t, "position", 12, "bottom-right");
  Oe();
  var o = qe(), i = ye(o);
  {
    var s = (a) => {
      Vs(a, {
        get position() {
          return r();
        },
        class: "svelte-flow__attribution",
        "data-message": "Feel free to remove the attribution or check out how you could support us: https://svelteflow.dev/support-us",
        children: (l, u) => {
          var c = rw();
          L(l, c);
        },
        $$slots: { default: !0 }
      });
    };
    _e(i, (a) => {
      var l;
      (l = n()) != null && l.hideAttribution || a(s);
    });
  }
  return L(e, o), de({
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
ie(If, { proOptions: {}, position: {} }, [], [], !0);
function Hu(e, { nodeTypes: t, edgeTypes: n, minZoom: r, maxZoom: o, translateExtent: i, paneClickDistance: s }) {
  t !== void 0 && e.setNodeTypes(t), n !== void 0 && e.setEdgeTypes(n), r !== void 0 && e.setMinZoom(r), o !== void 0 && e.setMaxZoom(o), i !== void 0 && e.setTranslateExtent(i), s !== void 0 && e.setPaneClickDistance(s);
}
const ow = (e) => Object.keys(e);
function Tu(e, t) {
  ow(t).forEach((n) => {
    const r = t[n];
    r !== void 0 && e[n].set(r);
  });
}
function iw() {
  return typeof window > "u" || !window.matchMedia ? null : window.matchMedia("(prefers-color-scheme: dark)");
}
function sw(e = "light") {
  return Bt("light", (t) => {
    if (e !== "system") {
      t(e);
      return;
    }
    const n = iw(), r = () => t(n != null && n.matches ? "dark" : "light");
    return t(n != null && n.matches ? "dark" : "light"), n == null || n.addEventListener("change", r), () => {
      n == null || n.removeEventListener("change", r);
    };
  });
}
var aw = /* @__PURE__ */ oe('<!> <!> <div class="svelte-flow__edgelabel-renderer"></div> <div class="svelte-flow__viewport-portal"></div> <!> <!>', 1), lw = /* @__PURE__ */ oe("<!> <!>", 1), uw = /* @__PURE__ */ oe("<div><!> <!> <!> <!></div>");
const cw = {
  hash: "svelte-12wlba6",
  code: ".svelte-flow.svelte-12wlba6 {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;background-color:var(--background-color, var(--background-color-default));}:root {--background-color-default: #fff;--background-pattern-color-default: #ddd;--minimap-mask-color-default: rgb(240, 240, 240, 0.6);--minimap-mask-stroke-color-default: none;--minimap-mask-stroke-width-default: 1;--controls-button-background-color-default: #fefefe;--controls-button-background-color-hover-default: #f4f4f4;--controls-button-color-default: inherit;--controls-button-color-hover-default: inherit;--controls-button-border-color-default: #eee;}"
};
function Rf(e, t) {
  const n = Ov(t), r = et(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), o = et(r, [
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
  ce(t, !1), nt(e, cw);
  const [i, s] = Qe(), a = () => J(_(), "$viewport", i), l = () => J(Ds, "$initialized", i), u = () => J(g(c), "$colorModeClass", i), c = te();
  let d = y(t, "id", 12, "1"), f = y(t, "nodes", 12), h = y(t, "edges", 12), p = y(t, "fitView", 12, void 0), b = y(t, "fitViewOptions", 12, void 0), x = y(t, "minZoom", 12, void 0), k = y(t, "maxZoom", 12, void 0), v = y(t, "initialViewport", 12, void 0), _ = y(t, "viewport", 12, void 0), w = y(t, "nodeTypes", 12, void 0), C = y(t, "edgeTypes", 12, void 0), N = y(t, "selectionKey", 12, void 0), P = y(t, "selectionMode", 12, void 0), M = y(t, "panActivationKey", 12, void 0), z = y(t, "multiSelectionKey", 12, void 0), H = y(t, "zoomActivationKey", 12, void 0), A = y(t, "nodesDraggable", 12, void 0), D = y(t, "nodesConnectable", 12, void 0), R = y(t, "nodeDragThreshold", 12, void 0), S = y(t, "elementsSelectable", 12, void 0), O = y(t, "snapGrid", 12, void 0), $ = y(t, "deleteKey", 12, void 0), E = y(t, "connectionRadius", 12, void 0), V = y(t, "connectionLineType", 12, void 0), T = y(t, "connectionMode", 28, () => yr.Strict), Z = y(t, "connectionLineStyle", 12, ""), W = y(t, "connectionLineContainerStyle", 12, ""), q = y(t, "onMoveStart", 12, void 0), fe = y(t, "onMove", 12, void 0), Q = y(t, "onMoveEnd", 12, void 0), B = y(t, "isValidConnection", 12, void 0), ue = y(t, "translateExtent", 12, void 0), we = y(t, "nodeExtent", 12, void 0), be = y(t, "onlyRenderVisibleElements", 12, void 0), ve = y(t, "panOnScrollMode", 28, () => nr.Free), ne = y(t, "preventScrolling", 12, !0), le = y(t, "zoomOnScroll", 12, !0), Ie = y(t, "zoomOnDoubleClick", 12, !0), We = y(t, "zoomOnPinch", 12, !0), Re = y(t, "panOnScroll", 12, !1), Ke = y(t, "panOnDrag", 12, !0), Y = y(t, "selectionOnDrag", 12, void 0), he = y(t, "autoPanOnConnect", 12, !0), ge = y(t, "autoPanOnNodeDrag", 12, !0), Ee = y(t, "onerror", 12, void 0), it = y(t, "ondelete", 12, void 0), Ve = y(t, "onedgecreate", 12, void 0), Ye = y(t, "attributionPosition", 12, void 0), Xe = y(t, "proOptions", 12, void 0), rt = y(t, "defaultEdgeOptions", 12, void 0), gt = y(t, "width", 12, void 0), ee = y(t, "height", 12, void 0), Pe = y(t, "colorMode", 12, "light"), re = y(t, "onconnect", 12, void 0), Sn = y(t, "onconnectstart", 12, void 0), Gt = y(t, "onconnectend", 12, void 0), Ne = y(t, "onbeforedelete", 12, void 0), lt = y(t, "oninit", 12, void 0), xe = y(t, "nodeOrigin", 12, void 0), He = y(t, "paneClickDistance", 12, 0), st = y(t, "nodeClickDistance", 12, 0), Zt = y(t, "defaultMarkerColor", 12, "#b1b1b7"), Or = y(t, "style", 12, void 0), fo = y(t, "class", 12, void 0), Vt = te(), kt = te(), hn = te();
  const Ut = a() || v(), dt = cv(Ms) ? Ge() : zy({
    nodes: X(f()),
    edges: X(h()),
    width: gt(),
    height: ee(),
    fitView: p(),
    nodeOrigin: xe(),
    nodeExtent: we()
  });
  Er(() => (dt.width.set(g(kt)), dt.height.set(g(hn)), dt.domNode.set(g(Vt)), dt.syncNodeStores(f()), dt.syncEdgeStores(h()), dt.syncViewport(_()), p() !== void 0 && dt.fitViewOnInit.set(p()), b() && dt.fitViewOptions.set(b()), Hu(dt, {
    nodeTypes: w(),
    edgeTypes: C(),
    minZoom: x(),
    maxZoom: k(),
    translateExtent: ue(),
    paneClickDistance: He()
  }), () => {
    dt.reset();
  }));
  const { initialized: Ds } = dt;
  let cr = te(!1);
  ae(
    () => (g(kt), g(hn)),
    () => {
      g(kt) !== void 0 && g(hn) !== void 0 && (dt.width.set(g(kt)), dt.height.set(g(hn)));
    }
  ), ae(
    () => (g(cr), l(), G(lt())),
    () => {
      var I;
      !g(cr) && l() && ((I = lt()) == null || I(), U(cr, !0));
    }
  ), ae(
    () => (G(d()), G(V()), G(E()), G(P()), G(O()), G(Zt()), G(A()), G(D()), G(S()), G(be()), G(B()), G(he()), G(ge()), G(Ee()), G(it()), G(Ve()), G(T()), G(R()), G(re()), G(Sn()), G(Gt()), G(Ne()), G(xe()), Tu),
    () => {
      const I = {
        flowId: d(),
        connectionLineType: V(),
        connectionRadius: E(),
        selectionMode: P(),
        snapGrid: O(),
        defaultMarkerColor: Zt(),
        nodesDraggable: A(),
        nodesConnectable: D(),
        elementsSelectable: S(),
        onlyRenderVisibleElements: be(),
        isValidConnection: B(),
        autoPanOnConnect: he(),
        autoPanOnNodeDrag: ge(),
        onerror: Ee(),
        ondelete: it(),
        onedgecreate: Ve(),
        connectionMode: T(),
        nodeDragThreshold: R(),
        onconnect: re(),
        onconnectstart: Sn(),
        onconnectend: Gt(),
        onbeforedelete: Ne(),
        nodeOrigin: xe()
      };
      Tu(dt, I);
    }
  ), ae(
    () => (G(w()), G(C()), G(x()), G(k()), G(ue()), G(He())),
    () => {
      Hu(dt, {
        nodeTypes: w(),
        edgeTypes: C(),
        minZoom: x(),
        maxZoom: k(),
        translateExtent: ue(),
        paneClickDistance: He()
      });
    }
  ), ae(
    () => G(Pe()),
    () => {
      Av(U(c, sw(Pe())), "$colorModeClass", i);
    }
  ), ht(), Oe();
  var Jt = uw();
  let oi;
  var ii = j(Jt);
  Df(ii, {
    get selectionKey() {
      return N();
    },
    get deleteKey() {
      return $();
    },
    get panActivationKey() {
      return M();
    },
    get multiSelectionKey() {
      return z();
    },
    get zoomActivationKey() {
      return H();
    }
  });
  var si = K(ii, 2);
  const Oh = /* @__PURE__ */ pe(() => ve() === void 0 ? nr.Free : ve()), Mh = /* @__PURE__ */ pe(() => ne() === void 0 ? !0 : ne()), Vh = /* @__PURE__ */ pe(() => le() === void 0 ? !0 : le()), zh = /* @__PURE__ */ pe(() => Ie() === void 0 ? !0 : Ie()), Hh = /* @__PURE__ */ pe(() => We() === void 0 ? !0 : We()), Th = /* @__PURE__ */ pe(() => Re() === void 0 ? !1 : Re()), Lh = /* @__PURE__ */ pe(() => Ke() === void 0 ? !0 : Ke()), Dh = /* @__PURE__ */ pe(() => He() === void 0 ? 0 : He());
  kf(si, {
    initialViewport: Ut,
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
      return g(Oh);
    },
    get preventScrolling() {
      return g(Mh);
    },
    get zoomOnScroll() {
      return g(Vh);
    },
    get zoomOnDoubleClick() {
      return g(zh);
    },
    get zoomOnPinch() {
      return g(Hh);
    },
    get panOnScroll() {
      return g(Th);
    },
    get panOnDrag() {
      return g(Lh);
    },
    get paneClickDistance() {
      return g(Dh);
    },
    children: (I, s5) => {
      const Rh = /* @__PURE__ */ pe(() => Ke() === void 0 ? !0 : Ke());
      Sf(I, {
        get panOnDrag() {
          return g(Rh);
        },
        get selectionOnDrag() {
          return Y();
        },
        $$events: {
          paneclick(ho) {
            De.call(this, t, ho);
          },
          panecontextmenu(ho) {
            De.call(this, t, ho);
          }
        },
        children: (ho, a5) => {
          var Sl = lw(), El = ye(Sl);
          Ef(El, {
            children: (Bh, l5) => {
              var Nl = aw(), Pl = ye(Nl);
              Hf(Pl, {
                get defaultEdgeOptions() {
                  return rt();
                },
                $$events: {
                  edgeclick(Te) {
                    De.call(this, t, Te);
                  },
                  edgecontextmenu(Te) {
                    De.call(this, t, Te);
                  },
                  edgemouseenter(Te) {
                    De.call(this, t, Te);
                  },
                  edgemouseleave(Te) {
                    De.call(this, t, Te);
                  }
                }
              });
              var Ol = K(Pl, 2);
              Af(Ol, {
                get containerStyle() {
                  return W();
                },
                get style() {
                  return Z();
                },
                isCustomComponent: n.connectionLine,
                $$slots: {
                  connectionLine: (Te, u5) => {
                    var Vl = qe(), Yh = ye(Vl);
                    vt(Yh, t, "connectionLine", {}), L(Te, Vl);
                  }
                }
              });
              var Ml = K(Ol, 6);
              Pf(Ml, {
                get nodeClickDistance() {
                  return st();
                },
                $$events: {
                  nodeclick(Te) {
                    De.call(this, t, Te);
                  },
                  nodemouseenter(Te) {
                    De.call(this, t, Te);
                  },
                  nodemousemove(Te) {
                    De.call(this, t, Te);
                  },
                  nodemouseleave(Te) {
                    De.call(this, t, Te);
                  },
                  nodedragstart(Te) {
                    De.call(this, t, Te);
                  },
                  nodedrag(Te) {
                    De.call(this, t, Te);
                  },
                  nodedragstop(Te) {
                    De.call(this, t, Te);
                  },
                  nodecontextmenu(Te) {
                    De.call(this, t, Te);
                  }
                }
              });
              var Kh = K(Ml, 2);
              Lf(Kh, {
                $$events: {
                  selectionclick(Te) {
                    De.call(this, t, Te);
                  },
                  selectioncontextmenu(Te) {
                    De.call(this, t, Te);
                  },
                  nodedragstart(Te) {
                    De.call(this, t, Te);
                  },
                  nodedrag(Te) {
                    De.call(this, t, Te);
                  },
                  nodedragstop(Te) {
                    De.call(this, t, Te);
                  }
                }
              }), L(Bh, Nl);
            },
            $$slots: { default: !0 }
          });
          var Zh = K(El, 2);
          Tf(Zh, {}), L(ho, Sl);
        },
        $$slots: { default: !0 }
      });
    },
    $$slots: { default: !0 }
  });
  var kl = K(si, 2);
  If(kl, {
    get proOptions() {
      return Xe();
    },
    get position() {
      return Ye();
    }
  });
  var Ah = K(kl, 2);
  vt(Ah, t, "default", {}), F(Jt), Bn(Jt, (I) => U(Vt, I), () => g(Vt)), Se(
    (I) => oi = ln(
      Jt,
      oi,
      {
        style: Or(),
        class: I,
        "data-testid": "svelte-flow__wrapper",
        ...o,
        role: "application"
      },
      "svelte-12wlba6"
    ),
    [
      () => Ct([
        "svelte-flow",
        fo(),
        u()
      ])
    ],
    pe
  ), Fl(Jt, "clientWidth", (I) => U(kt, I)), Fl(Jt, "clientHeight", (I) => U(hn, I)), je("dragover", Jt, function(I) {
    De.call(this, t, I);
  }), je("drop", Jt, function(I) {
    De.call(this, t, I);
  }), L(e, Jt);
  var Ih = de({
    get id() {
      return d();
    },
    set id(I) {
      d(I), m();
    },
    get nodes() {
      return f();
    },
    set nodes(I) {
      f(I), m();
    },
    get edges() {
      return h();
    },
    set edges(I) {
      h(I), m();
    },
    get fitView() {
      return p();
    },
    set fitView(I) {
      p(I), m();
    },
    get fitViewOptions() {
      return b();
    },
    set fitViewOptions(I) {
      b(I), m();
    },
    get minZoom() {
      return x();
    },
    set minZoom(I) {
      x(I), m();
    },
    get maxZoom() {
      return k();
    },
    set maxZoom(I) {
      k(I), m();
    },
    get initialViewport() {
      return v();
    },
    set initialViewport(I) {
      v(I), m();
    },
    get viewport() {
      return _();
    },
    set viewport(I) {
      _(I), m();
    },
    get nodeTypes() {
      return w();
    },
    set nodeTypes(I) {
      w(I), m();
    },
    get edgeTypes() {
      return C();
    },
    set edgeTypes(I) {
      C(I), m();
    },
    get selectionKey() {
      return N();
    },
    set selectionKey(I) {
      N(I), m();
    },
    get selectionMode() {
      return P();
    },
    set selectionMode(I) {
      P(I), m();
    },
    get panActivationKey() {
      return M();
    },
    set panActivationKey(I) {
      M(I), m();
    },
    get multiSelectionKey() {
      return z();
    },
    set multiSelectionKey(I) {
      z(I), m();
    },
    get zoomActivationKey() {
      return H();
    },
    set zoomActivationKey(I) {
      H(I), m();
    },
    get nodesDraggable() {
      return A();
    },
    set nodesDraggable(I) {
      A(I), m();
    },
    get nodesConnectable() {
      return D();
    },
    set nodesConnectable(I) {
      D(I), m();
    },
    get nodeDragThreshold() {
      return R();
    },
    set nodeDragThreshold(I) {
      R(I), m();
    },
    get elementsSelectable() {
      return S();
    },
    set elementsSelectable(I) {
      S(I), m();
    },
    get snapGrid() {
      return O();
    },
    set snapGrid(I) {
      O(I), m();
    },
    get deleteKey() {
      return $();
    },
    set deleteKey(I) {
      $(I), m();
    },
    get connectionRadius() {
      return E();
    },
    set connectionRadius(I) {
      E(I), m();
    },
    get connectionLineType() {
      return V();
    },
    set connectionLineType(I) {
      V(I), m();
    },
    get connectionMode() {
      return T();
    },
    set connectionMode(I) {
      T(I), m();
    },
    get connectionLineStyle() {
      return Z();
    },
    set connectionLineStyle(I) {
      Z(I), m();
    },
    get connectionLineContainerStyle() {
      return W();
    },
    set connectionLineContainerStyle(I) {
      W(I), m();
    },
    get onMoveStart() {
      return q();
    },
    set onMoveStart(I) {
      q(I), m();
    },
    get onMove() {
      return fe();
    },
    set onMove(I) {
      fe(I), m();
    },
    get onMoveEnd() {
      return Q();
    },
    set onMoveEnd(I) {
      Q(I), m();
    },
    get isValidConnection() {
      return B();
    },
    set isValidConnection(I) {
      B(I), m();
    },
    get translateExtent() {
      return ue();
    },
    set translateExtent(I) {
      ue(I), m();
    },
    get nodeExtent() {
      return we();
    },
    set nodeExtent(I) {
      we(I), m();
    },
    get onlyRenderVisibleElements() {
      return be();
    },
    set onlyRenderVisibleElements(I) {
      be(I), m();
    },
    get panOnScrollMode() {
      return ve();
    },
    set panOnScrollMode(I) {
      ve(I), m();
    },
    get preventScrolling() {
      return ne();
    },
    set preventScrolling(I) {
      ne(I), m();
    },
    get zoomOnScroll() {
      return le();
    },
    set zoomOnScroll(I) {
      le(I), m();
    },
    get zoomOnDoubleClick() {
      return Ie();
    },
    set zoomOnDoubleClick(I) {
      Ie(I), m();
    },
    get zoomOnPinch() {
      return We();
    },
    set zoomOnPinch(I) {
      We(I), m();
    },
    get panOnScroll() {
      return Re();
    },
    set panOnScroll(I) {
      Re(I), m();
    },
    get panOnDrag() {
      return Ke();
    },
    set panOnDrag(I) {
      Ke(I), m();
    },
    get selectionOnDrag() {
      return Y();
    },
    set selectionOnDrag(I) {
      Y(I), m();
    },
    get autoPanOnConnect() {
      return he();
    },
    set autoPanOnConnect(I) {
      he(I), m();
    },
    get autoPanOnNodeDrag() {
      return ge();
    },
    set autoPanOnNodeDrag(I) {
      ge(I), m();
    },
    get onerror() {
      return Ee();
    },
    set onerror(I) {
      Ee(I), m();
    },
    get ondelete() {
      return it();
    },
    set ondelete(I) {
      it(I), m();
    },
    get onedgecreate() {
      return Ve();
    },
    set onedgecreate(I) {
      Ve(I), m();
    },
    get attributionPosition() {
      return Ye();
    },
    set attributionPosition(I) {
      Ye(I), m();
    },
    get proOptions() {
      return Xe();
    },
    set proOptions(I) {
      Xe(I), m();
    },
    get defaultEdgeOptions() {
      return rt();
    },
    set defaultEdgeOptions(I) {
      rt(I), m();
    },
    get width() {
      return gt();
    },
    set width(I) {
      gt(I), m();
    },
    get height() {
      return ee();
    },
    set height(I) {
      ee(I), m();
    },
    get colorMode() {
      return Pe();
    },
    set colorMode(I) {
      Pe(I), m();
    },
    get onconnect() {
      return re();
    },
    set onconnect(I) {
      re(I), m();
    },
    get onconnectstart() {
      return Sn();
    },
    set onconnectstart(I) {
      Sn(I), m();
    },
    get onconnectend() {
      return Gt();
    },
    set onconnectend(I) {
      Gt(I), m();
    },
    get onbeforedelete() {
      return Ne();
    },
    set onbeforedelete(I) {
      Ne(I), m();
    },
    get oninit() {
      return lt();
    },
    set oninit(I) {
      lt(I), m();
    },
    get nodeOrigin() {
      return xe();
    },
    set nodeOrigin(I) {
      xe(I), m();
    },
    get paneClickDistance() {
      return He();
    },
    set paneClickDistance(I) {
      He(I), m();
    },
    get nodeClickDistance() {
      return st();
    },
    set nodeClickDistance(I) {
      st(I), m();
    },
    get defaultMarkerColor() {
      return Zt();
    },
    set defaultMarkerColor(I) {
      Zt(I), m();
    },
    get style() {
      return Or();
    },
    set style(I) {
      Or(I), m();
    },
    get class() {
      return fo();
    },
    set class(I) {
      fo(I), m();
    }
  });
  return s(), Ih;
}
ie(
  Rf,
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
function Zf(e, t) {
  ce(t, !1);
  let n = y(t, "initialNodes", 12, void 0), r = y(t, "initialEdges", 12, void 0), o = y(t, "initialWidth", 12, void 0), i = y(t, "initialHeight", 12, void 0), s = y(t, "fitView", 12, void 0), a = y(t, "nodeOrigin", 12, void 0);
  const l = Cf({
    nodes: n(),
    edges: r(),
    width: o(),
    height: i(),
    nodeOrigin: a(),
    fitView: s()
  });
  jr(Ms, { getStore: () => l }), ol(() => {
    l.reset();
  }), Oe();
  var u = qe(), c = ye(u);
  return vt(c, t, "default", {}), L(e, u), de({
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
ie(
  Zf,
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
var dw = /* @__PURE__ */ oe("<button><!></button>");
function xo(e, t) {
  const n = et(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = et(n, [
    "class",
    "bgColor",
    "bgColorHover",
    "color",
    "colorHover",
    "borderColor"
  ]);
  ce(t, !1);
  let o = y(t, "class", 12, void 0), i = y(t, "bgColor", 12, void 0), s = y(t, "bgColorHover", 12, void 0), a = y(t, "color", 12, void 0), l = y(t, "colorHover", 12, void 0), u = y(t, "borderColor", 12, void 0);
  Oe();
  var c = dw();
  let d;
  var f = j(c);
  return vt(f, t, "default", { class: "button-svg" }), F(c), Se(
    (h) => {
      d = ln(c, d, { type: "button", class: h, ...r }), ot(c, "--xy-controls-button-background-color-props", i()), ot(c, "--xy-controls-button-background-color-hover-props", s()), ot(c, "--xy-controls-button-color-props", a()), ot(c, "--xy-controls-button-color-hover-props", l()), ot(c, "--xy-controls-button-border-color-props", u());
    },
    [
      () => Ct([
        "svelte-flow__controls-button",
        o()
      ])
    ],
    pe
  ), je("click", c, function(h) {
    De.call(this, t, h);
  }), L(e, c), de({
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
ie(
  xo,
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
var fw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function Bf(e) {
  var t = fw();
  L(e, t);
}
ie(Bf, {}, [], [], !0);
var hw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function Kf(e) {
  var t = hw();
  L(e, t);
}
ie(Kf, {}, [], [], !0);
var gw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function Yf(e) {
  var t = gw();
  L(e, t);
}
ie(Yf, {}, [], [], !0);
var pw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function Xf(e) {
  var t = pw();
  L(e, t);
}
ie(Xf, {}, [], [], !0);
var vw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function Wf(e) {
  var t = vw();
  L(e, t);
}
ie(Wf, {}, [], [], !0);
var mw = /* @__PURE__ */ oe("<!> <!>", 1), yw = /* @__PURE__ */ oe("<!> <!> <!> <!> <!> <!>", 1);
function Ff(e, t) {
  ce(t, !1);
  const [n, r] = Qe(), o = () => J(V, "$nodesDraggable", n), i = () => J(T, "$nodesConnectable", n), s = () => J(Z, "$elementsSelectable", n), a = () => J(O, "$viewport", n), l = () => J($, "$minZoom", n), u = () => J(E, "$maxZoom", n), c = te(), d = te(), f = te(), h = te();
  let p = y(t, "position", 12, "bottom-left"), b = y(t, "showZoom", 12, !0), x = y(t, "showFitView", 12, !0), k = y(t, "showLock", 12, !0), v = y(t, "buttonBgColor", 12, void 0), _ = y(t, "buttonBgColorHover", 12, void 0), w = y(t, "buttonColor", 12, void 0), C = y(t, "buttonColorHover", 12, void 0), N = y(t, "buttonBorderColor", 12, void 0), P = y(t, "ariaLabel", 12, void 0), M = y(t, "style", 12, void 0), z = y(t, "orientation", 12, "vertical"), H = y(t, "fitViewOptions", 12, void 0), A = y(t, "class", 12, "");
  const {
    zoomIn: D,
    zoomOut: R,
    fitView: S,
    viewport: O,
    minZoom: $,
    maxZoom: E,
    nodesDraggable: V,
    nodesConnectable: T,
    elementsSelectable: Z
  } = Ge(), W = {
    bgColor: v(),
    bgColorHover: _(),
    color: w(),
    colorHover: C(),
    borderColor: N()
  }, q = () => {
    D();
  }, fe = () => {
    R();
  }, Q = () => {
    S(H());
  }, B = () => {
    U(c, !g(c)), V.set(g(c)), T.set(g(c)), Z.set(g(c));
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
  }), ae(() => G(z()), () => {
    U(h, z() === "horizontal" ? "horizontal" : "vertical");
  }), ht(), Oe();
  const ue = /* @__PURE__ */ pe(() => Ct([
    "svelte-flow__controls",
    g(h),
    A()
  ])), we = /* @__PURE__ */ pe(() => P() ?? "Svelte Flow controls");
  Vs(e, {
    get class() {
      return g(ue);
    },
    get position() {
      return p();
    },
    "data-testid": "svelte-flow__controls",
    get "aria-label"() {
      return g(we);
    },
    get style() {
      return M();
    },
    children: (ve, ne) => {
      var le = yw(), Ie = ye(le);
      vt(Ie, t, "before", {});
      var We = K(Ie, 2);
      {
        var Re = (Ve) => {
          var Ye = mw(), Xe = ye(Ye);
          xo(Xe, _t(
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
              children: (gt, ee) => {
                Bf(gt);
              },
              $$slots: { default: !0 }
            }
          ));
          var rt = K(Xe, 2);
          xo(rt, _t(
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
              children: (gt, ee) => {
                Kf(gt);
              },
              $$slots: { default: !0 }
            }
          )), L(Ve, Ye);
        };
        _e(We, (Ve) => {
          b() && Ve(Re);
        });
      }
      var Ke = K(We, 2);
      {
        var Y = (Ve) => {
          xo(Ve, _t(
            {
              class: "svelte-flow__controls-fitview",
              title: "fit view",
              "aria-label": "fit view"
            },
            W,
            {
              $$events: { click: Q },
              children: (Ye, Xe) => {
                Yf(Ye);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        _e(Ke, (Ve) => {
          x() && Ve(Y);
        });
      }
      var he = K(Ke, 2);
      {
        var ge = (Ve) => {
          xo(Ve, _t(
            {
              class: "svelte-flow__controls-interactive",
              title: "toggle interactivity",
              "aria-label": "toggle interactivity"
            },
            W,
            {
              $$events: { click: B },
              children: (Ye, Xe) => {
                var rt = qe(), gt = ye(rt);
                {
                  var ee = (re) => {
                    Wf(re);
                  }, Pe = (re) => {
                    Xf(re);
                  };
                  _e(gt, (re) => {
                    g(c) ? re(ee) : re(Pe, !1);
                  });
                }
                L(Ye, rt);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        _e(he, (Ve) => {
          k() && Ve(ge);
        });
      }
      var Ee = K(he, 2);
      vt(Ee, t, "default", {});
      var it = K(Ee, 2);
      vt(it, t, "after", {}), L(ve, le);
    },
    $$slots: { default: !0 }
  });
  var be = de({
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
      return _();
    },
    set buttonBgColorHover(ve) {
      _(ve), m();
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
      return P();
    },
    set ariaLabel(ve) {
      P(ve), m();
    },
    get style() {
      return M();
    },
    set style(ve) {
      M(ve), m();
    },
    get orientation() {
      return z();
    },
    set orientation(ve) {
      z(ve), m();
    },
    get fitViewOptions() {
      return H();
    },
    set fitViewOptions(ve) {
      H(ve), m();
    },
    get class() {
      return A();
    },
    set class(ve) {
      A(ve), m();
    }
  });
  return r(), be;
}
ie(
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
var rr;
(function(e) {
  e.Lines = "lines", e.Dots = "dots", e.Cross = "cross";
})(rr || (rr = {}));
var ww = /* @__PURE__ */ ke("<circle></circle>");
function jf(e, t) {
  ce(t, !1);
  let n = y(t, "radius", 12, 5), r = y(t, "class", 12, "");
  Oe();
  var o = ww();
  return Se(
    (i) => {
      se(o, "cx", n()), se(o, "cy", n()), se(o, "r", n()), Sr(o, Cn(i));
    },
    [
      () => Ct([
        "svelte-flow__background-pattern",
        "dots",
        r()
      ])
    ],
    pe
  ), L(e, o), de({
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
ie(jf, { radius: {}, class: {} }, [], [], !0);
var bw = /* @__PURE__ */ ke("<path></path>");
function qf(e, t) {
  ce(t, !1);
  let n = y(t, "lineWidth", 12, 1), r = y(t, "dimensions", 12), o = y(t, "variant", 12, void 0), i = y(t, "class", 12, "");
  Oe();
  var s = bw();
  return Se(
    (a) => {
      se(s, "stroke-width", n()), se(s, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), Sr(s, Cn(a));
    },
    [
      () => Ct([
        "svelte-flow__background-pattern",
        o(),
        i()
      ])
    ],
    pe
  ), L(e, s), de({
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
ie(
  qf,
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
const xw = {
  [rr.Dots]: 1,
  [rr.Lines]: 1,
  [rr.Cross]: 6
};
var _w = /* @__PURE__ */ ke('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
const $w = {
  hash: "svelte-1r7pe8d",
  code: ".svelte-flow__background.svelte-1r7pe8d {position:absolute;width:100%;height:100%;top:0;left:0;}"
};
function Gf(e, t) {
  ce(t, !1), nt(e, $w);
  const [n, r] = Qe(), o = () => J(C, "$flowId", n), i = () => J(w, "$viewport", n), s = te(), a = te(), l = te(), u = te(), c = te();
  let d = y(t, "id", 12, void 0), f = y(t, "variant", 28, () => rr.Dots), h = y(t, "gap", 12, 20), p = y(t, "size", 12, 1), b = y(t, "lineWidth", 12, 1), x = y(t, "bgColor", 12, void 0), k = y(t, "patternColor", 12, void 0), v = y(t, "patternClass", 12, void 0), _ = y(t, "class", 12, "");
  const { viewport: w, flowId: C } = Ge(), N = p() || xw[f()], P = f() === rr.Dots, M = f() === rr.Cross, z = Array.isArray(h()) ? h() : [h(), h()];
  ae(
    () => (o(), G(d())),
    () => {
      U(s, `background-pattern-${o()}-${d() ? d() : ""}`);
    }
  ), ae(() => i(), () => {
    U(a, [
      z[0] * i().zoom || 1,
      z[1] * i().zoom || 1
    ]);
  }), ae(() => i(), () => {
    U(l, N * i().zoom);
  }), ae(() => (g(l), g(a)), () => {
    U(u, M ? [g(l), g(l)] : g(a));
  }), ae(
    () => (g(l), g(u)),
    () => {
      U(c, P ? [
        g(l) / 2,
        g(l) / 2
      ] : [
        g(u)[0] / 2,
        g(u)[1] / 2
      ]);
    }
  ), ht(), Oe();
  var H = _w(), A = j(H), D = j(A);
  {
    var R = (E) => {
      const V = /* @__PURE__ */ pe(() => g(l) / 2);
      jf(E, {
        get radius() {
          return g(V);
        },
        get class() {
          return v();
        }
      });
    }, S = (E) => {
      qf(E, {
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
    _e(D, (E) => {
      P ? E(R) : E(S, !1);
    });
  }
  F(A);
  var O = K(A);
  F(H), Se(
    (E) => {
      Sr(H, Cn(E), "svelte-1r7pe8d"), ot(H, "--xy-background-color-props", x()), ot(H, "--xy-background-pattern-color-props", k()), se(A, "id", g(s)), se(A, "x", i().x % g(a)[0]), se(A, "y", i().y % g(a)[1]), se(A, "width", g(a)[0]), se(A, "height", g(a)[1]), se(A, "patternTransform", `translate(-${g(c)[0]},-${g(c)[1]})`), se(O, "fill", `url(#${g(s)})`);
    },
    [
      () => Ct(["svelte-flow__background", _()])
    ],
    pe
  ), L(e, H);
  var $ = de({
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
      return _();
    },
    set class(E) {
      _(E), m();
    }
  });
  return r(), $;
}
ie(
  Gf,
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
var Cw = /* @__PURE__ */ ke("<rect></rect>");
function Uf(e, t) {
  ce(t, !1);
  let n = y(t, "x", 12), r = y(t, "y", 12), o = y(t, "width", 12, 0), i = y(t, "height", 12, 0), s = y(t, "borderRadius", 12, 5), a = y(t, "color", 12, void 0), l = y(t, "shapeRendering", 12), u = y(t, "strokeColor", 12, void 0), c = y(t, "strokeWidth", 12, 2), d = y(t, "selected", 12, !1), f = y(t, "class", 12, "");
  Oe();
  var h = Cw();
  return Se(
    (p) => {
      Sr(h, Cn(p)), se(h, "x", n()), se(h, "y", r()), se(h, "rx", s()), se(h, "ry", s()), se(h, "width", o()), se(h, "height", i()), se(h, "style", `${a() ? `fill: ${a()};` : ""}${u() ? `stroke: ${u()};` : ""}${c() ? `stroke-width: ${c()};` : ""}`), se(h, "shape-rendering", l()), tt(h, "selected", d());
    },
    [
      () => Ct(["svelte-flow__minimap-node", f()])
    ],
    pe
  ), L(e, h), de({
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
ie(
  Uf,
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
  const n = ly({
    domNode: e,
    panZoom: t.panZoom,
    getTransform: () => {
      const o = X(t.viewport);
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
const Qs = (e) => e instanceof Function ? e : () => e;
var kw = /* @__PURE__ */ ke("<title> </title>"), Sw = /* @__PURE__ */ ke('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>');
function Jf(e, t) {
  ce(t, !1);
  const [n, r] = Qe(), o = () => J(Ke, "$flowId", n), i = () => J(Ie, "$viewport", n), s = () => J(We, "$containerWidth", n), a = () => J(Re, "$containerHeight", n), l = () => J(le, "$nodeLookup", n), u = () => J(ne, "$nodes", n), c = () => J(Y, "$panZoom", n), d = () => J(he, "$translateExtent", n), f = te(), h = te(), p = te(), b = te(), x = te(), k = te(), v = te(), _ = te(), w = te(), C = te(), N = te(), P = te(), M = te();
  let z = y(t, "position", 12, "bottom-right"), H = y(t, "ariaLabel", 12, "Mini map"), A = y(t, "nodeStrokeColor", 12, "transparent"), D = y(t, "nodeColor", 12, void 0), R = y(t, "nodeClass", 12, ""), S = y(t, "nodeBorderRadius", 12, 5), O = y(t, "nodeStrokeWidth", 12, 2), $ = y(t, "bgColor", 12, void 0), E = y(t, "maskColor", 12, void 0), V = y(t, "maskStrokeColor", 12, void 0), T = y(t, "maskStrokeWidth", 12, void 0), Z = y(t, "width", 12, void 0), W = y(t, "height", 12, void 0), q = y(t, "pannable", 12, !0), fe = y(t, "zoomable", 12, !0), Q = y(t, "inversePan", 12, void 0), B = y(t, "zoomStep", 12, void 0), ue = y(t, "style", 12, ""), we = y(t, "class", 12, "");
  const be = 200, ve = 150, {
    nodes: ne,
    nodeLookup: le,
    viewport: Ie,
    width: We,
    height: Re,
    flowId: Ke,
    panZoom: Y,
    translateExtent: he
  } = Ge(), ge = D() === void 0 ? void 0 : Qs(D()), Ee = Qs(A()), it = Qs(R()), Ve = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  ), Ye = `svelte-flow__minimap-desc-${o()}`;
  let Xe = te(g(f));
  const rt = () => g(k);
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
      U(Xe, l().size > 0 ? Gd(Go(l()), g(f)) : g(f)), u();
    }
  ), ae(() => G(Z()), () => {
    U(h, Z() ?? be);
  }), ae(() => G(W()), () => {
    U(p, W() ?? ve);
  }), ae(
    () => (g(Xe), g(h)),
    () => {
      U(b, g(Xe).width / g(h));
    }
  ), ae(
    () => (g(Xe), g(p)),
    () => {
      U(x, g(Xe).height / g(p));
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
      U(_, g(k) * g(p));
    }
  ), ae(() => g(k), () => {
    U(w, 5 * g(k));
  }), ae(
    () => (g(Xe), g(v), g(w)),
    () => {
      U(C, g(Xe).x - (g(v) - g(Xe).width) / 2 - g(w));
    }
  ), ae(
    () => (g(Xe), g(_), g(w)),
    () => {
      U(N, g(Xe).y - (g(_) - g(Xe).height) / 2 - g(w));
    }
  ), ae(() => (g(v), g(w)), () => {
    U(P, g(v) + g(w) * 2);
  }), ae(() => (g(_), g(w)), () => {
    U(M, g(_) + g(w) * 2);
  }), ht(), Oe();
  const gt = /* @__PURE__ */ pe(() => ue() + ($() ? `;--xy-minimap-background-color-props:${$()}` : "")), ee = /* @__PURE__ */ pe(() => Ct(["svelte-flow__minimap", we()]));
  Vs(e, {
    get position() {
      return z();
    },
    get style() {
      return g(gt);
    },
    get class() {
      return g(ee);
    },
    "data-testid": "svelte-flow__minimap",
    children: (re, Sn) => {
      var Gt = qe(), Ne = ye(Gt);
      {
        var lt = (xe) => {
          var He = Sw();
          se(He, "aria-labelledby", Ye);
          var st = j(He);
          {
            var Zt = (Vt) => {
              var kt = kw();
              se(kt, "id", Ye);
              var hn = j(kt, !0);
              F(kt), Se(() => $n(hn, H())), L(Vt, kt);
            };
            _e(st, (Vt) => {
              H() && Vt(Zt);
            });
          }
          var Or = K(st);
          Dt(Or, 1, u, (Vt) => Vt.id, (Vt, kt) => {
            var hn = qe();
            const Ut = /* @__PURE__ */ pe(() => l().get(g(kt).id));
            var dt = ye(hn);
            {
              var Ds = (cr) => {
                const Jt = /* @__PURE__ */ pe(() => ur(g(Ut))), oi = /* @__PURE__ */ pe(() => ge == null ? void 0 : ge(g(Ut))), ii = /* @__PURE__ */ pe(() => Ee(g(Ut))), si = /* @__PURE__ */ pe(() => it(g(Ut)));
                Uf(cr, _t(
                  {
                    get x() {
                      return g(Ut).internals.positionAbsolute.x;
                    },
                    get y() {
                      return g(Ut).internals.positionAbsolute.y;
                    }
                  },
                  () => g(Jt),
                  {
                    get selected() {
                      return g(Ut).selected;
                    },
                    get color() {
                      return g(oi);
                    },
                    get borderRadius() {
                      return S();
                    },
                    get strokeColor() {
                      return g(ii);
                    },
                    get strokeWidth() {
                      return O();
                    },
                    shapeRendering: Ve,
                    get class() {
                      return g(si);
                    }
                  }
                ));
              };
              _e(dt, (cr) => {
                g(Ut) && Jd(g(Ut)) && cr(Ds);
              });
            }
            L(Vt, hn);
          });
          var fo = K(Or);
          F(He), pt(He, (Vt, kt) => Lu == null ? void 0 : Lu(Vt, kt), () => ({
            panZoom: c(),
            viewport: Ie,
            getViewScale: rt,
            translateExtent: d(),
            width: s(),
            height: a(),
            inversePan: Q(),
            zoomStep: B(),
            pannable: q(),
            zoomable: fe()
          })), Se(() => {
            se(He, "width", g(h)), se(He, "height", g(p)), se(He, "viewBox", `${g(C) ?? ""} ${g(N) ?? ""} ${g(P) ?? ""} ${g(M) ?? ""}`), ot(He, "--xy-minimap-mask-background-color-props", E()), ot(He, "--xy-minimap-mask-stroke-color-props", V()), ot(He, "--xy-minimap-mask-stroke-width-props", T() ? T() * g(k) : void 0), se(fo, "d", `M${g(C) - g(w)},${g(N) - g(w)}h${g(P) + g(w) * 2}v${g(M) + g(w) * 2}h${-g(P) - g(w) * 2}z
      M${g(f).x ?? ""},${g(f).y ?? ""}h${g(f).width ?? ""}v${g(f).height ?? ""}h${-g(f).width}z`);
          }), L(xe, He);
        };
        _e(Ne, (xe) => {
          c() && xe(lt);
        });
      }
      L(re, Gt);
    },
    $$slots: { default: !0 }
  });
  var Pe = de({
    get position() {
      return z();
    },
    set position(re) {
      z(re), m();
    },
    get ariaLabel() {
      return H();
    },
    set ariaLabel(re) {
      H(re), m();
    },
    get nodeStrokeColor() {
      return A();
    },
    set nodeStrokeColor(re) {
      A(re), m();
    },
    get nodeColor() {
      return D();
    },
    set nodeColor(re) {
      D(re), m();
    },
    get nodeClass() {
      return R();
    },
    set nodeClass(re) {
      R(re), m();
    },
    get nodeBorderRadius() {
      return S();
    },
    set nodeBorderRadius(re) {
      S(re), m();
    },
    get nodeStrokeWidth() {
      return O();
    },
    set nodeStrokeWidth(re) {
      O(re), m();
    },
    get bgColor() {
      return $();
    },
    set bgColor(re) {
      $(re), m();
    },
    get maskColor() {
      return E();
    },
    set maskColor(re) {
      E(re), m();
    },
    get maskStrokeColor() {
      return V();
    },
    set maskStrokeColor(re) {
      V(re), m();
    },
    get maskStrokeWidth() {
      return T();
    },
    set maskStrokeWidth(re) {
      T(re), m();
    },
    get width() {
      return Z();
    },
    set width(re) {
      Z(re), m();
    },
    get height() {
      return W();
    },
    set height(re) {
      W(re), m();
    },
    get pannable() {
      return q();
    },
    set pannable(re) {
      q(re), m();
    },
    get zoomable() {
      return fe();
    },
    set zoomable(re) {
      fe(re), m();
    },
    get inversePan() {
      return Q();
    },
    set inversePan(re) {
      Q(re), m();
    },
    get zoomStep() {
      return B();
    },
    set zoomStep(re) {
      B(re), m();
    },
    get style() {
      return ue();
    },
    set style(re) {
      ue(re), m();
    },
    get class() {
      return we();
    },
    set class(re) {
      we(re), m();
    }
  });
  return r(), Pe;
}
ie(
  Jf,
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
const Du = (e) => S2(e);
function fn() {
  const { zoomIn: e, zoomOut: t, fitView: n, onbeforedelete: r, snapGrid: o, viewport: i, width: s, height: a, minZoom: l, maxZoom: u, panZoom: c, nodes: d, edges: f, domNode: h, nodeLookup: p, nodeOrigin: b, edgeLookup: x, connectionLookup: k } = Ge(), v = (C) => {
    var N, P;
    const M = X(p), z = Du(C) ? C : M.get(C.id), H = z.parentId ? O2(z.position, z.measured, z.parentId, M, X(b)) : z.position, A = {
      ...z,
      position: H,
      width: ((N = z.measured) == null ? void 0 : N.width) ?? z.width,
      height: ((P = z.measured) == null ? void 0 : P.height) ?? z.height
    };
    return eo(A);
  }, _ = (C, N, P = { replace: !1 }) => {
    var M;
    const z = (M = X(p).get(C)) == null ? void 0 : M.internals.userNode;
    if (!z)
      return;
    const H = typeof N == "function" ? N(z) : N;
    P.replace ? d.update((A) => A.map((D) => D.id === C ? Du(H) ? H : { ...D, ...H } : D)) : (Object.assign(z, H), d.update((A) => A));
  }, w = (C) => X(p).get(C);
  return {
    zoomIn: e,
    zoomOut: t,
    getInternalNode: w,
    getNode: (C) => {
      var N;
      return (N = w(C)) == null ? void 0 : N.internals.userNode;
    },
    getNodes: (C) => C === void 0 ? X(d) : Au(X(p), C),
    getEdge: (C) => X(x).get(C),
    getEdges: (C) => C === void 0 ? X(f) : Au(X(x), C),
    setZoom: (C, N) => {
      const P = X(c);
      return P ? P.scaleTo(C, { duration: N == null ? void 0 : N.duration }) : Promise.resolve(!1);
    },
    getZoom: () => X(i).zoom,
    setViewport: async (C, N) => {
      const P = X(i), M = X(c);
      return M ? (await M.setViewport({
        x: C.x ?? P.x,
        y: C.y ?? P.y,
        zoom: C.zoom ?? P.zoom
      }, { duration: N == null ? void 0 : N.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    getViewport: () => X(i),
    setCenter: async (C, N, P) => {
      const M = typeof (P == null ? void 0 : P.zoom) < "u" ? P.zoom : X(u), z = X(c);
      return z ? (await z.setViewport({
        x: X(s) / 2 - C * M,
        y: X(a) / 2 - N * M,
        zoom: M
      }, { duration: P == null ? void 0 : P.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    fitView: n,
    fitBounds: async (C, N) => {
      const P = X(c);
      if (!P)
        return Promise.resolve(!1);
      const M = gl(C, X(s), X(a), X(l), X(u), (N == null ? void 0 : N.padding) ?? 0.1);
      return await P.setViewport(M, { duration: N == null ? void 0 : N.duration }), Promise.resolve(!0);
    },
    getIntersectingNodes: (C, N = !0, P) => {
      const M = wu(C), z = M ? C : v(C);
      return z ? (P || X(d)).filter((H) => {
        const A = X(p).get(H.id);
        if (!A || !M && H.id === C.id)
          return !1;
        const D = eo(A), R = Do(D, z);
        return N && R > 0 || R >= z.width * z.height;
      }) : [];
    },
    isNodeIntersecting: (C, N, P = !0) => {
      const M = wu(C) ? C : v(C);
      if (!M)
        return !1;
      const z = Do(M, N);
      return P && z > 0 || z >= M.width * M.height;
    },
    deleteElements: async ({ nodes: C = [], edges: N = [] }) => {
      const { nodes: P, edges: M } = await Fd({
        nodesToRemove: C,
        edgesToRemove: N,
        nodes: X(d),
        edges: X(f),
        onBeforeDelete: X(r)
      });
      return P && d.update((z) => z.filter((H) => !P.some(({ id: A }) => A === H.id))), M && f.update((z) => z.filter((H) => !M.some(({ id: A }) => A === H.id))), {
        deletedNodes: P,
        deletedEdges: M
      };
    },
    screenToFlowPosition: (C, N = { snapToGrid: !0 }) => {
      const P = X(h);
      if (!P)
        return C;
      const M = N.snapToGrid ? X(o) : !1, { x: z, y: H, zoom: A } = X(i), { x: D, y: R } = P.getBoundingClientRect(), S = {
        x: C.x - D,
        y: C.y - R
      };
      return Uo(S, [z, H, A], M !== null, M || [1, 1]);
    },
    /**
     *
     * @param position
     * @returns
     */
    flowToScreenPosition: (C) => {
      const N = X(h);
      if (!N)
        return C;
      const { x: P, y: M, zoom: z } = X(i), { x: H, y: A } = N.getBoundingClientRect(), D = Ud(C, [P, M, z]);
      return {
        x: D.x + H,
        y: D.y + A
      };
    },
    toObject: () => ({
      nodes: X(d).map((C) => ({
        ...C,
        // we want to make sure that changes to the nodes object that gets returned by toObject
        // do not affect the nodes object
        position: { ...C.position },
        data: { ...C.data }
      })),
      edges: X(f).map((C) => ({ ...C })),
      viewport: { ...X(i) }
    }),
    updateNode: _,
    updateNodeData: (C, N, P) => {
      var M;
      const z = (M = X(p).get(C)) == null ? void 0 : M.internals.userNode;
      if (!z)
        return;
      const H = typeof N == "function" ? N(z) : N;
      z.data = P != null && P.replace ? H : { ...z.data, ...H }, d.update((A) => A);
    },
    getNodesBounds: (C) => {
      const N = X(p), P = X(b);
      return E2(C, { nodeLookup: N, nodeOrigin: P });
    },
    getHandleConnections: ({ type: C, id: N, nodeId: P }) => {
      var M;
      return Array.from(((M = X(k).get(`${P}-${C}-${N ?? null}`)) == null ? void 0 : M.values()) ?? []);
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
var Ew = /* @__PURE__ */ oe('<div class="svelte-flow__node-toolbar"><!></div>');
function Qf(e, t) {
  ce(t, !1);
  const [n, r] = Qe(), o = () => J(_, "$nodes", n), i = () => J(v, "$nodeLookup", n), s = () => J(k, "$viewport", n), a = () => J(x, "$domNode", n), l = te(), u = te(), c = te();
  let d = y(t, "nodeId", 12, void 0), f = y(t, "position", 12, void 0), h = y(t, "align", 12, void 0), p = y(t, "offset", 12, void 0), b = y(t, "isVisible", 12, void 0);
  const { domNode: x, viewport: k, nodeLookup: v, nodes: _ } = Ge(), { getNodesBounds: w } = fn(), C = vr("svelteflow__node_id");
  let N = te(), P = te([]), M = p() !== void 0 ? p() : 10, z = f() !== void 0 ? f() : Ce.Top, H = h() !== void 0 ? h() : "center";
  ae(
    () => (o(), G(d()), i()),
    () => {
      o();
      const O = Array.isArray(d()) ? d() : [d() || C];
      U(P, O.reduce(
        ($, E) => {
          const V = i().get(E);
          return V && $.push(V), $;
        },
        []
      ));
    }
  ), ae(
    () => (g(P), s()),
    () => {
      const O = w(g(P));
      O && U(N, X2(O, s(), z, M, H));
    }
  ), ae(() => g(P), () => {
    U(l, g(P).length === 0 ? 1 : Math.max(...g(P).map((O) => (O.internals.z || 5) + 1)));
  }), ae(() => o(), () => {
    U(u, o().filter((O) => O.selected).length);
  }), ae(
    () => (G(b()), g(P), g(u)),
    () => {
      U(c, typeof b() == "boolean" ? b() : g(P).length === 1 && g(P)[0].selected && g(u) === 1);
    }
  ), ht(), Oe();
  var A = qe(), D = ye(A);
  {
    var R = (O) => {
      var $ = Ew(), E = j($);
      vt(E, t, "default", {}), F($), pt($, (V, T) => ts == null ? void 0 : ts(V, T), () => ({ domNode: a() })), Se(
        (V) => {
          se($, "data-id", V), ot($, "position", "absolute"), ot($, "transform", g(N)), ot($, "z-index", g(l));
        },
        [
          () => g(P).reduce((V, T) => `${V}${T.id} `, "").trim()
        ],
        pe
      ), L(O, $);
    };
    _e(D, (O) => {
      a() && g(c) && g(P) && O(R);
    });
  }
  L(e, A);
  var S = de({
    get nodeId() {
      return d();
    },
    set nodeId(O) {
      d(O), m();
    },
    get position() {
      return f();
    },
    set position(O) {
      f(O), m();
    },
    get align() {
      return h();
    },
    set align(O) {
      h(O), m();
    },
    get offset() {
      return p();
    },
    set offset(O) {
      p(O), m();
    },
    get isVisible() {
      return b();
    },
    set isVisible(O) {
      b(O), m();
    }
  });
  return r(), S;
}
ie(
  Qf,
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
function Nr(e) {
  const { nodes: t, nodeLookup: n } = Ge();
  let r = [], o = !0;
  return tr([t, n], ([, i], s) => {
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
    (!Q2(l, r) || o) && (r = l, s(u ? l : l[0] ?? null), o = !1);
  });
}
const Iu = "tinyflow-component";
class Nw {
  constructor(t) {
    if (Nt(this, "options"), Nt(this, "rootEl"), Nt(this, "svelteFlowInstance"), typeof t.element != "string" && !(t.element instanceof Element))
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
    const t = document.createElement(Iu);
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
    const n = document.createElement(Iu);
    n.style.display = "block", n.style.width = "100%", n.style.height = "100%", n.classList.add("tf-theme-light"), n.options = this.options, n.onInit = (r) => {
      this.svelteFlowInstance = r;
    }, this.destroy(), this.rootEl.appendChild(n);
  }
  destroy() {
    for (; this.rootEl.firstChild; )
      this.rootEl.removeChild(this.rootEl.firstChild);
  }
}
const Pw = () => {
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
}, Ei = Pw();
var Ow = /* @__PURE__ */ oe("<button><!></button>");
function Je(e, t) {
  ce(t, !0);
  const n = y(t, "children", 7), r = /* @__PURE__ */ qt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "children"
  ]);
  var o = Ow();
  let i;
  var s = j(o);
  return qr(s, () => n() ?? ft), F(o), Se(() => i = ln(o, i, {
    type: "button",
    ...r,
    class: `tf-btn nopan nodrag ${t.class ?? ""}`
  })), L(e, o), de({
    get children() {
      return n();
    },
    set children(a) {
      n(a), m();
    }
  });
}
ie(Je, { children: {} }, [], [], !0);
var Mw = /* @__PURE__ */ oe("<input>");
function eh(e, t) {
  ce(t, !0);
  const n = /* @__PURE__ */ qt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = Mw();
  dd(r);
  let o;
  Se(() => o = ln(r, o, {
    type: "checkbox",
    ...n,
    class: `tf-checkbox nopan nodrag ${t.class ?? ""}`
  })), L(e, r), de();
}
ie(eh, {}, [], [], !0);
var Vw = /* @__PURE__ */ oe("<input>");
function tn(e, t) {
  ce(t, !0);
  const n = /* @__PURE__ */ qt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = Vw();
  dd(r);
  let o;
  Se(() => o = ln(r, o, {
    type: "text",
    ...n,
    class: `tf-input  nopan nodrag ${t.class ?? ""}`
  })), L(e, r), de();
}
ie(tn, {}, [], [], !0);
var zw = /* @__PURE__ */ oe("<textarea></textarea>");
function It(e, t) {
  ce(t, !0);
  const n = /* @__PURE__ */ qt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = zw();
  _v(r);
  let o;
  Se(() => o = ln(r, o, {
    ...n,
    class: `tf-textarea nodrag ${t.class ?? ""}`
  })), L(e, r), de();
}
ie(It, {}, [], [], !0);
var Hw = /* @__PURE__ */ oe('<div role="button"><!></div>'), Tw = /* @__PURE__ */ oe("<div></div>");
function th(e, t) {
  const n = et(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = et(n, ["items", "onChange", "activeIndex"]);
  ce(t, !1);
  let o = y(t, "items", 28, () => []), i = y(t, "onChange", 12, () => {
  }), s = y(t, "activeIndex", 12, 0);
  function a(c, d) {
    var f;
    s(d), (f = i()) == null || f(c, d);
  }
  Oe();
  var l = Tw();
  let u;
  return Dt(l, 5, o, xs, (c, d, f) => {
    var h = Hw();
    se(h, "tabindex", f), h.__click = () => a(g(d), f), h.__keydown = (k) => {
      (k.key === "Enter" || k.key === " ") && (k.preventDefault(), a(g(d), f));
    };
    var p = j(h);
    {
      var b = (k) => {
        var v = Ue();
        Se(() => $n(v, g(d).label)), L(k, v);
      }, x = (k) => {
        var v = qe(), _ = ye(v);
        qr(_, () => g(d).label ?? ft), L(k, v);
      };
      _e(p, (k) => {
        typeof g(d).label == "string" ? k(b) : k(x, !1);
      });
    }
    F(h), Se(() => Gr(h, `tf-tabs-item ${(f === s() ? "active" : "") ?? ""}`)), L(c, h);
  }), F(l), Se(() => u = ln(l, u, {
    ...r,
    class: `tf-tabs ${r.class ?? ""}`
  })), L(e, l), de({
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
bs(["click", "keydown"]);
ie(th, { items: {}, onChange: {}, activeIndex: {} }, [], [], !0);
var Lw = (e, t, n) => t(g(n)), Dw = (e, t, n) => {
  (e.key === "Enter" || e.key === " ") && (e.preventDefault(), t(g(n)));
}, Aw = /* @__PURE__ */ oe('<div class="tf-collapse-item-description"><!></div>'), Iw = /* @__PURE__ */ oe('<div class="tf-collapse-item-content"><!></div>'), Rw = /* @__PURE__ */ oe('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><span class="tf-collapse-item-title-icon"><!></span> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), Zw = /* @__PURE__ */ oe("<div></div>");
const Bw = {
  hash: "svelte-1jfktzw",
  code: `
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-1jfktzw {transform:rotate(90deg);transition:transform 0.3s ease;}`
};
function nh(e, t) {
  ce(t, !0), nt(e, Bw);
  let n = y(t, "items", 7), r = y(t, "onChange", 7), o = y(t, "activeKeys", 31, () => gn([]));
  function i(a) {
    var l;
    o().includes(a.key) ? o(o().filter((u) => u !== a.key)) : (o().push(a.key), o(o())), (l = r()) == null || l(a, o());
  }
  var s = Zw();
  return Dt(s, 21, n, xs, (a, l, u) => {
    var c = Rw(), d = j(c);
    se(d, "tabindex", u), d.__click = [Lw, i, l], d.__keydown = [Dw, i, l];
    var f = j(d), h = j(f);
    Qn(h, {
      get target() {
        return g(l).icon;
      }
    }), F(f);
    var p = K(f, 2);
    Qn(p, {
      get target() {
        return g(l).title;
      }
    });
    var b = K(p, 2);
    F(d);
    var x = K(d, 2);
    {
      var k = (w) => {
        var C = Aw(), N = j(C);
        Qn(N, {
          get target() {
            return g(l).description;
          }
        }), F(C), L(w, C);
      };
      _e(x, (w) => {
        g(l).description && w(k);
      });
    }
    var v = K(x, 2);
    {
      var _ = (w) => {
        var C = Iw(), N = j(C);
        Qn(N, {
          get target() {
            return g(l).content;
          }
        }), F(C), L(w, C);
      };
      _e(v, (w) => {
        o().includes(g(l).key) && w(_);
      });
    }
    F(c), Se((w) => Gr(b, `tf-collapse-item-title-arrow ${w ?? ""} svelte-1jfktzw`), [
      () => o().includes(g(l).key) ? "rotate-90" : ""
    ]), L(a, c);
  }), F(s), Se(() => {
    se(s, "style", t.style), Gr(s, `tf-collapse ${t.class ?? ""} svelte-1jfktzw`);
  }), L(e, s), de({
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
bs(["click", "keydown"]);
ie(nh, { items: {}, onChange: {}, activeKeys: {} }, [], [], !0);
function Qn(e, t) {
  ce(t, !0);
  let n = y(t, "target", 7);
  typeof n() > "u" && n("undefined");
  var r = qe(), o = ye(r);
  {
    var i = (a) => {
      var l = qe(), u = ye(l);
      qr(u, () => n() ?? ft), L(a, l);
    }, s = (a) => {
      var l = qe(), u = ye(l);
      ld(u, n), L(a, l);
    };
    _e(o, (a) => {
      typeof n() == "function" ? a(i) : a(s, !1);
    });
  }
  return L(e, r), de({
    get target() {
      return n();
    },
    set target(a) {
      n(a), m();
    }
  });
}
ie(Qn, { target: {} }, [], [], !0);
var Kw = (e, t, n) => t(g(n)), Yw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), Xw = /* @__PURE__ */ oe('<div class="tf-select-content-children"><!></div>'), Ww = /* @__PURE__ */ oe('<button class="tf-select-content-item"><span><!></span> <!></button> <!>', 1), Fw = /* @__PURE__ */ oe('<div class="tf-select-content nopan nodrag"><!></div>'), jw = /* @__PURE__ */ oe("<!> <!>", 1), qw = /* @__PURE__ */ oe('<div class="tf-select-input-placeholder"> </div>'), Gw = /* @__PURE__ */ oe('<button><div class="tf-select-input-value"></div> <div class="tf-select-input-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></div></button>'), Uw = /* @__PURE__ */ oe("<div><!></div>");
function ar(e, t) {
  ce(t, !0);
  const n = (_, w = ft) => {
    var C = qe(), N = ye(C);
    Dt(N, 19, w, (P, M) => `${M}_${P.value}`, (P, M) => {
      var z = Ww(), H = ye(z);
      H.__click = [Kw, b, M];
      var A = j(H), D = j(A);
      {
        var R = (E) => {
          var V = Yw();
          L(E, V);
        };
        _e(D, (E) => {
          g(M).children && g(M).children.length > 0 && E(R);
        });
      }
      F(A);
      var S = K(A, 2);
      Qn(S, {
        get target() {
          return g(M).label;
        }
      }), F(H);
      var O = K(H, 2);
      {
        var $ = (E) => {
          var V = Xw(), T = j(V);
          n(T, () => g(M).children), F(V), L(E, V);
        };
        _e(O, (E) => {
          g(M).children && g(M).children.length > 0 && (l() || c().includes(g(M).value)) && E($);
        });
      }
      L(P, z);
    }), L(_, C);
  };
  let r = y(t, "items", 7), o = y(t, "onExpand", 7), i = y(t, "onSelect", 7), s = y(t, "value", 23, () => []), a = y(t, "defaultValue", 23, () => []), l = y(t, "expandAll", 7, !0), u = y(t, "multiple", 7, !1), c = y(t, "expandValue", 23, () => []), d = y(t, "placeholder", 7), f = /* @__PURE__ */ qt(t, [
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
  ]), h = /* @__PURE__ */ ze(() => {
    const _ = [], w = (C) => {
      for (let N of C)
        s().length > 0 ? s().includes(N.value) && _.push(N) : a().includes(N.value) && _.push(N), N.children && N.children.length > 0 && w(N.children);
    };
    return w(r()), _;
  }), p;
  function b(_) {
    var w, C;
    if (_.children && _.children.length > 0) {
      (w = o()) == null || w(_);
      return;
    } else
      p == null || p.hide(), (C = i()) == null || C(_);
  }
  var x = Uw();
  let k;
  var v = j(x);
  return Bn(
    ni(v, {
      floating: (_) => {
        var w = Fw(), C = j(w);
        n(C, r), F(w), L(_, w);
      },
      children: (_, w) => {
        var C = Gw();
        let N;
        var P = j(C);
        Dt(
          P,
          23,
          () => g(h),
          (M, z) => `${z}_${M.value}`,
          (M, z, H) => {
            var A = qe(), D = ye(A);
            {
              var R = (O) => {
                var $ = qe(), E = ye($);
                {
                  var V = (T) => {
                    Qn(T, {
                      get target() {
                        return g(z).label;
                      }
                    });
                  };
                  _e(E, (T) => {
                    g(H) === 0 && T(V);
                  });
                }
                L(O, $);
              }, S = (O) => {
                var $ = jw(), E = ye($);
                Qn(E, {
                  get target() {
                    return g(z).label;
                  }
                });
                var V = K(E, 2);
                {
                  var T = (Z) => {
                    var W = Ue(",");
                    L(Z, W);
                  };
                  _e(V, (Z) => {
                    g(H) < g(h).length - 1 && Z(T);
                  });
                }
                L(O, $);
              };
              _e(D, (O) => {
                u() ? O(S, !1) : O(R);
              });
            }
            L(M, A);
          },
          (M) => {
            var z = qw(), H = j(z, !0);
            F(z), Se(() => $n(H, d())), L(M, z);
          }
        ), F(P), Ae(2), F(C), Se(() => N = ln(C, N, {
          class: "tf-select-input nopan nodrag",
          ...f
        })), L(_, C);
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (_) => p = _,
    () => p
  ), F(x), Se(() => k = ln(x, k, {
    ...f,
    class: `tf-select ${f.class ?? ""}`
  })), L(e, x), de({
    get items() {
      return r();
    },
    set items(_) {
      r(_), m();
    },
    get onExpand() {
      return o();
    },
    set onExpand(_) {
      o(_), m();
    },
    get onSelect() {
      return i();
    },
    set onSelect(_) {
      i(_), m();
    },
    get value() {
      return s();
    },
    set value(_ = []) {
      s(_), m();
    },
    get defaultValue() {
      return a();
    },
    set defaultValue(_ = []) {
      a(_), m();
    },
    get expandAll() {
      return l();
    },
    set expandAll(_ = !0) {
      l(_), m();
    },
    get multiple() {
      return u();
    },
    set multiple(_ = !1) {
      u(_), m();
    },
    get expandValue() {
      return c();
    },
    set expandValue(_ = []) {
      c(_), m();
    },
    get placeholder() {
      return d();
    },
    set placeholder(_) {
      d(_), m();
    }
  });
}
bs(["click"]);
ie(
  ar,
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
const Io = Math.min, Xr = Math.max, os = Math.round, yn = (e) => ({
  x: e,
  y: e
}), Jw = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Qw = {
  start: "end",
  end: "start"
};
function Ma(e, t, n) {
  return Xr(e, Io(t, n));
}
function Qo(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function xr(e) {
  return e.split("-")[0];
}
function ei(e) {
  return e.split("-")[1];
}
function rh(e) {
  return e === "x" ? "y" : "x";
}
function bl(e) {
  return e === "y" ? "height" : "width";
}
function no(e) {
  return ["top", "bottom"].includes(xr(e)) ? "y" : "x";
}
function xl(e) {
  return rh(no(e));
}
function eb(e, t, n) {
  n === void 0 && (n = !1);
  const r = ei(e), o = xl(e), i = bl(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = is(s)), [s, is(s)];
}
function tb(e) {
  const t = is(e);
  return [Va(e), t, Va(t)];
}
function Va(e) {
  return e.replace(/start|end/g, (t) => Qw[t]);
}
function nb(e, t, n) {
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
function rb(e, t, n, r) {
  const o = ei(e);
  let i = nb(xr(e), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map(Va)))), i;
}
function is(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Jw[t]);
}
function ob(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function oh(e) {
  return typeof e != "number" ? ob(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function ss(e) {
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
function Ru(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = no(t), s = xl(t), a = bl(s), l = xr(t), u = i === "y", c = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, f = r[a] / 2 - o[a] / 2;
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
  switch (ei(t)) {
    case "start":
      h[s] -= f * (n && u ? -1 : 1);
      break;
    case "end":
      h[s] += f * (n && u ? -1 : 1);
      break;
  }
  return h;
}
const ib = async (e, t, n) => {
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
  } = Ru(u, r, l), f = r, h = {}, p = 0;
  for (let b = 0; b < a.length; b++) {
    const {
      name: x,
      fn: k
    } = a[b], {
      x: v,
      y: _,
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
    c = v ?? c, d = _ ?? d, h = {
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
    } = Ru(u, f, l)), b = -1);
  }
  return {
    x: c,
    y: d,
    placement: f,
    strategy: o,
    middlewareData: h
  };
};
async function ih(e, t) {
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
  } = Qo(t, e), p = oh(h), b = a[f ? d === "floating" ? "reference" : "floating" : d], x = ss(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(b))) == null || n ? b : b.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: u,
    rootBoundary: c,
    strategy: l
  })), k = d === "floating" ? {
    x: r,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, v = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)), _ = await (i.isElement == null ? void 0 : i.isElement(v)) ? await (i.getScale == null ? void 0 : i.getScale(v)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, w = ss(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: k,
    offsetParent: v,
    strategy: l
  }) : k);
  return {
    top: (x.top - w.top + p.top) / _.y,
    bottom: (w.bottom - x.bottom + p.bottom) / _.y,
    left: (x.left - w.left + p.left) / _.x,
    right: (w.right - x.right + p.right) / _.x
  };
}
const sb = (e) => ({
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
    } = Qo(e, t) || {};
    if (u == null)
      return {};
    const d = oh(c), f = {
      x: n,
      y: r
    }, h = xl(o), p = bl(h), b = await s.getDimensions(u), x = h === "y", k = x ? "top" : "left", v = x ? "bottom" : "right", _ = x ? "clientHeight" : "clientWidth", w = i.reference[p] + i.reference[h] - f[h] - i.floating[p], C = f[h] - i.reference[h], N = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
    let P = N ? N[_] : 0;
    (!P || !await (s.isElement == null ? void 0 : s.isElement(N))) && (P = a.floating[_] || i.floating[p]);
    const M = w / 2 - C / 2, z = P / 2 - b[p] / 2 - 1, H = Io(d[k], z), A = Io(d[v], z), D = H, R = P - b[p] - A, S = P / 2 - b[p] / 2 + M, O = Ma(D, S, R), $ = !l.arrow && ei(o) != null && S !== O && i.reference[p] / 2 - (S < D ? H : A) - b[p] / 2 < 0, E = $ ? S < D ? S - D : S - R : 0;
    return {
      [h]: f[h] + E,
      data: {
        [h]: O,
        centerOffset: S - O - E,
        ...$ && {
          alignmentOffset: E
        }
      },
      reset: $
    };
  }
}), ab = function(e) {
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
      } = Qo(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const k = xr(o), v = no(a), _ = xr(a) === a, w = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), C = f || (_ || !b ? [is(a)] : tb(a)), N = p !== "none";
      !f && N && C.push(...rb(a, b, p, w));
      const P = [a, ...C], M = await ih(t, x), z = [];
      let H = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (c && z.push(M[k]), d) {
        const S = eb(o, s, w);
        z.push(M[S[0]], M[S[1]]);
      }
      if (H = [...H, {
        placement: o,
        overflows: z
      }], !z.every((S) => S <= 0)) {
        var A, D;
        const S = (((A = i.flip) == null ? void 0 : A.index) || 0) + 1, O = P[S];
        if (O)
          return {
            data: {
              index: S,
              overflows: H
            },
            reset: {
              placement: O
            }
          };
        let $ = (D = H.filter((E) => E.overflows[0] <= 0).sort((E, V) => E.overflows[1] - V.overflows[1])[0]) == null ? void 0 : D.placement;
        if (!$)
          switch (h) {
            case "bestFit": {
              var R;
              const E = (R = H.filter((V) => {
                if (N) {
                  const T = no(V.placement);
                  return T === v || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  T === "y";
                }
                return !0;
              }).map((V) => [V.placement, V.overflows.filter((T) => T > 0).reduce((T, Z) => T + Z, 0)]).sort((V, T) => V[1] - T[1])[0]) == null ? void 0 : R[0];
              E && ($ = E);
              break;
            }
            case "initialPlacement":
              $ = a;
              break;
          }
        if (o !== $)
          return {
            reset: {
              placement: $
            }
          };
      }
      return {};
    }
  };
};
async function lb(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = xr(n), a = ei(n), l = no(n) === "y", u = ["left", "top"].includes(s) ? -1 : 1, c = i && l ? -1 : 1, d = Qo(t, e);
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
const ub = function(e) {
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
      } = t, l = await lb(t, e);
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
}, cb = function(e) {
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
      } = Qo(e, t), u = {
        x: n,
        y: r
      }, c = await ih(t, l), d = no(xr(o)), f = rh(d);
      let h = u[f], p = u[d];
      if (i) {
        const x = f === "y" ? "top" : "left", k = f === "y" ? "bottom" : "right", v = h + c[x], _ = h - c[k];
        h = Ma(v, h, _);
      }
      if (s) {
        const x = d === "y" ? "top" : "left", k = d === "y" ? "bottom" : "right", v = p + c[x], _ = p - c[k];
        p = Ma(v, p, _);
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
function zs() {
  return typeof window < "u";
}
function uo(e) {
  return sh(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Lt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Wn(e) {
  var t;
  return (t = (sh(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function sh(e) {
  return zs() ? e instanceof Node || e instanceof Lt(e).Node : !1;
}
function un(e) {
  return zs() ? e instanceof Element || e instanceof Lt(e).Element : !1;
}
function xn(e) {
  return zs() ? e instanceof HTMLElement || e instanceof Lt(e).HTMLElement : !1;
}
function Zu(e) {
  return !zs() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Lt(e).ShadowRoot;
}
function ti(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = cn(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function db(e) {
  return ["table", "td", "th"].includes(uo(e));
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
  const t = $l(), n = un(e) ? cn(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function fb(e) {
  let t = lr(e);
  for (; xn(t) && !ro(t); ) {
    if (_l(t))
      return t;
    if (Hs(t))
      return null;
    t = lr(t);
  }
  return null;
}
function $l() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function ro(e) {
  return ["html", "body", "#document"].includes(uo(e));
}
function cn(e) {
  return Lt(e).getComputedStyle(e);
}
function Ts(e) {
  return un(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function lr(e) {
  if (uo(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Zu(e) && e.host || // Fallback.
    Wn(e)
  );
  return Zu(t) ? t.host : t;
}
function ah(e) {
  const t = lr(e);
  return ro(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : xn(t) && ti(t) ? t : ah(t);
}
function lh(e, t, n) {
  var r;
  t === void 0 && (t = []);
  const o = ah(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = Lt(o);
  return i ? (za(s), t.concat(s, s.visualViewport || [], ti(o) ? o : [], [])) : t.concat(o, lh(o, []));
}
function za(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function uh(e) {
  const t = cn(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = xn(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, a = os(n) !== i || os(r) !== s;
  return a && (n = i, r = s), {
    width: n,
    height: r,
    $: a
  };
}
function ch(e) {
  return un(e) ? e : e.contextElement;
}
function Wr(e) {
  const t = ch(e);
  if (!xn(t))
    return yn(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = uh(t);
  let s = (i ? os(n.width) : n.width) / r, a = (i ? os(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const hb = /* @__PURE__ */ yn(0);
function dh(e) {
  const t = Lt(e);
  return !$l() || !t.visualViewport ? hb : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function gb(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Lt(e) ? !1 : t;
}
function Ro(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = ch(e);
  let s = yn(1);
  t && (r ? un(r) && (s = Wr(r)) : s = Wr(e));
  const a = gb(i, n, r) ? dh(i) : yn(0);
  let l = (o.left + a.x) / s.x, u = (o.top + a.y) / s.y, c = o.width / s.x, d = o.height / s.y;
  if (i) {
    const f = Lt(i), h = r && un(r) ? Lt(r) : r;
    let p = f, b = za(p);
    for (; b && r && h !== p; ) {
      const x = Wr(b), k = b.getBoundingClientRect(), v = cn(b), _ = k.left + (b.clientLeft + parseFloat(v.paddingLeft)) * x.x, w = k.top + (b.clientTop + parseFloat(v.paddingTop)) * x.y;
      l *= x.x, u *= x.y, c *= x.x, d *= x.y, l += _, u += w, p = Lt(b), b = za(p);
    }
  }
  return ss({
    width: c,
    height: d,
    x: l,
    y: u
  });
}
function Cl(e, t) {
  const n = Ts(e).scrollLeft;
  return t ? t.left + n : Ro(Wn(e)).left + n;
}
function fh(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    Cl(e, r)
  )), i = r.top + t.scrollTop;
  return {
    x: o,
    y: i
  };
}
function pb(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", s = Wn(r), a = t ? Hs(t.floating) : !1;
  if (r === s || a && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = yn(1);
  const c = yn(0), d = xn(r);
  if ((d || !d && !i) && ((uo(r) !== "body" || ti(s)) && (l = Ts(r)), xn(r))) {
    const h = Ro(r);
    u = Wr(r), c.x = h.x + r.clientLeft, c.y = h.y + r.clientTop;
  }
  const f = s && !d && !i ? fh(s, l, !0) : yn(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + c.x + f.x,
    y: n.y * u.y - l.scrollTop * u.y + c.y + f.y
  };
}
function vb(e) {
  return Array.from(e.getClientRects());
}
function mb(e) {
  const t = Wn(e), n = Ts(e), r = e.ownerDocument.body, o = Xr(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = Xr(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + Cl(e);
  const a = -n.scrollTop;
  return cn(r).direction === "rtl" && (s += Xr(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
function yb(e, t) {
  const n = Lt(e), r = Wn(e), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, a = 0, l = 0;
  if (o) {
    i = o.width, s = o.height;
    const u = $l();
    (!u || u && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: a,
    y: l
  };
}
function wb(e, t) {
  const n = Ro(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = xn(e) ? Wr(e) : yn(1), s = e.clientWidth * i.x, a = e.clientHeight * i.y, l = o * i.x, u = r * i.y;
  return {
    width: s,
    height: a,
    x: l,
    y: u
  };
}
function Bu(e, t, n) {
  let r;
  if (t === "viewport")
    r = yb(e, n);
  else if (t === "document")
    r = mb(Wn(e));
  else if (un(t))
    r = wb(t, n);
  else {
    const o = dh(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return ss(r);
}
function hh(e, t) {
  const n = lr(e);
  return n === t || !un(n) || ro(n) ? !1 : cn(n).position === "fixed" || hh(n, t);
}
function bb(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = lh(e, []).filter((a) => un(a) && uo(a) !== "body"), o = null;
  const i = cn(e).position === "fixed";
  let s = i ? lr(e) : e;
  for (; un(s) && !ro(s); ) {
    const a = cn(s), l = _l(s);
    !l && a.position === "fixed" && (o = null), (i ? !l && !o : !l && a.position === "static" && o && ["absolute", "fixed"].includes(o.position) || ti(s) && !l && hh(e, s)) ? r = r.filter((u) => u !== s) : o = a, s = lr(s);
  }
  return t.set(e, r), r;
}
function xb(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const i = [...n === "clippingAncestors" ? Hs(t) ? [] : bb(t, this._c) : [].concat(n), r], s = i[0], a = i.reduce((l, u) => {
    const c = Bu(t, u, o);
    return l.top = Xr(c.top, l.top), l.right = Io(c.right, l.right), l.bottom = Io(c.bottom, l.bottom), l.left = Xr(c.left, l.left), l;
  }, Bu(t, s, o));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top
  };
}
function _b(e) {
  const {
    width: t,
    height: n
  } = uh(e);
  return {
    width: t,
    height: n
  };
}
function $b(e, t, n) {
  const r = xn(t), o = Wn(t), i = n === "fixed", s = Ro(e, !0, i, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = yn(0);
  if (r || !r && !i)
    if ((uo(t) !== "body" || ti(o)) && (a = Ts(t)), r) {
      const f = Ro(t, !0, i, t);
      l.x = f.x + t.clientLeft, l.y = f.y + t.clientTop;
    } else o && (l.x = Cl(o));
  const u = o && !r && !i ? fh(o, a) : yn(0), c = s.left + a.scrollLeft - l.x - u.x, d = s.top + a.scrollTop - l.y - u.y;
  return {
    x: c,
    y: d,
    width: s.width,
    height: s.height
  };
}
function ea(e) {
  return cn(e).position === "static";
}
function Ku(e, t) {
  if (!xn(e) || cn(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Wn(e) === n && (n = n.ownerDocument.body), n;
}
function gh(e, t) {
  const n = Lt(e);
  if (Hs(e))
    return n;
  if (!xn(e)) {
    let o = lr(e);
    for (; o && !ro(o); ) {
      if (un(o) && !ea(o))
        return o;
      o = lr(o);
    }
    return n;
  }
  let r = Ku(e, t);
  for (; r && db(r) && ea(r); )
    r = Ku(r, t);
  return r && ro(r) && ea(r) && !_l(r) ? n : r || fb(e) || n;
}
const Cb = async function(e) {
  const t = this.getOffsetParent || gh, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: $b(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function kb(e) {
  return cn(e).direction === "rtl";
}
const Sb = {
  convertOffsetParentRelativeRectToViewportRelativeRect: pb,
  getDocumentElement: Wn,
  getClippingRect: xb,
  getOffsetParent: gh,
  getElementRects: Cb,
  getClientRects: vb,
  getDimensions: _b,
  getScale: Wr,
  isElement: un,
  isRTL: kb
}, Eb = ub, Nb = cb, Pb = ab, Ob = sb, Mb = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: Sb,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return ib(e, t, {
    ...o,
    platform: i
  });
}, Vb = ({
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
    Mb(e, u, {
      placement: r,
      middleware: [
        Eb(o),
        // 手动偏移配置
        Pb(i),
        //自动翻转
        Nb(s),
        //自动偏移（使得浮动元素能够进入视野）
        ...l ? [Ob({ element: c })] : []
      ]
    }).then(({ x: k, y: v, placement: _, middlewareData: w }) => {
      if (Object.assign(u.style, {
        left: `${k}px`,
        top: `${v}px`
      }), l) {
        const { x: C, y: N } = w.arrow, P = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[_.split("-")[0]];
        Object.assign(c.style, {
          zIndex: -1,
          left: C != null ? `${C}px` : "",
          top: N != null ? `${N}px` : "",
          right: "",
          bottom: "",
          [P]: "2px"
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
var zb = /* @__PURE__ */ oe('<div style="position: relative"><div><!></div> <div style="display: none; width: 100%;z-index: 9999"><!></div></div>');
function ni(e, t) {
  ce(t, !0);
  const n = y(t, "children", 7), r = y(t, "floating", 7), o = y(t, "placement", 7, "bottom");
  let i, s, a;
  Er(() => (a = Vb({
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
  var u = zb(), c = j(u), d = j(c);
  qr(d, n), F(c), Bn(c, (p) => i = p, () => i);
  var f = K(c, 2), h = j(f);
  return qr(h, r), F(f), Bn(f, (p) => s = p, () => s), F(u), L(e, u), de({
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
ie(ni, { children: {}, floating: {}, placement: {} }, [], ["hide"], !0);
function ct(e, t) {
  ce(t, !0);
  const n = y(t, "children", 7), r = y(t, "level", 7, 1), o = y(t, "mt", 7), i = y(t, "mb", 7);
  var s = qe(), a = ye(s);
  return Mv(a, () => `h${r()}`, !1, (l, u) => {
    let c;
    Se(() => c = ln(
      l,
      c,
      {
        class: "tf-heading",
        style: `margin-top:${o() || "0"};margin-bottom:${i() || "0"}`
      },
      void 0,
      l.namespaceURI === Pc,
      l.nodeName.includes("-")
    ));
    var d = qe(), f = ye(d);
    qr(f, () => n() ?? ft), L(u, d);
  }), L(e, s), de({
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
ie(ct, { children: {}, level: {}, mt: {}, mb: {} }, [], [], !0);
var Hb = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1rvn4a8"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1rvn4a8"></path></svg>');
const Tb = {
  hash: "svelte-1rvn4a8",
  code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:#eee;border:1px solid transparent;}}"
};
function Ls(e, t) {
  ce(t, !0), nt(e, Tb);
  const n = /* @__PURE__ */ qt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  Je(e, _t(() => n, {
    get class() {
      return `input-btn-more ${t.class ?? ""}`;
    },
    children: (r, o) => {
      var i = Hb();
      L(r, i);
    },
    $$slots: { default: !0 }
  })), de();
}
ie(Ls, {}, [], [], !0);
const Lb = () => {
  const e = Ge();
  return {
    deleteNode: (t) => {
      e.nodes.update((n) => n.filter((r) => r.id !== t)), e.edges.update(
        (n) => n.filter((r) => r.source !== t && r.target !== t)
      );
    }
  };
}, Zo = (e = 16) => {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = new Uint8Array(e);
  return crypto.getRandomValues(n), Array.from(n, (r) => t[r % t.length]).join("");
}, Db = () => {
  const { nodes: e, nodeLookup: t } = Ge();
  return {
    copyNode: (n) => {
      var r;
      const o = (r = X(t).get(n)) == null ? void 0 : r.internals.userNode;
      if (o) {
        const i = Zo(), s = {
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
var Ab = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'), Ib = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'), Rb = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'), Zb = /* @__PURE__ */ oe('<div class="tf-node-toolbar svelte-44dmwv"><!> <!> <!></div>'), Bb = /* @__PURE__ */ oe('<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!>', 1);
const Kb = {
  hash: "svelte-44dmwv",
  code: ".tf-node-toolbar.svelte-44dmwv {display:flex;gap:5px;padding:5px;border-radius:5px;background:#fff;border:1px solid #eee;box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}"
};
function Pr(e, t) {
  ce(t, !0), nt(e, Kb);
  const n = y(t, "data", 7), r = y(t, "id", 7, ""), o = y(t, "icon", 7), i = y(t, "children", 7), s = y(t, "allowExecute", 7, !0), a = y(t, "allowCopy", 7, !0), l = y(t, "allowDelete", 7, !0);
  let u = n().expand ? ["key"] : [];
  const { updateNodeData: c } = fn(), d = [
    {
      key: "key",
      icon: o(),
      title: n().title,
      description: n().description,
      content: i()
    }
  ], { deleteNode: f } = Lb(), { copyNode: h } = Db();
  var p = Bb(), b = ye(p);
  {
    var x = (N) => {
      Qf(N, {
        get position() {
          return Ce.Top;
        },
        align: "end",
        children: (P, M) => {
          var z = Zb(), H = j(z);
          {
            var A = ($) => {
              Je($, {
                class: "tf-node-toolbar-item",
                children: (E, V) => {
                  var T = Ab();
                  L(E, T);
                },
                $$slots: { default: !0 }
              });
            };
            _e(H, ($) => {
              s() && $(A);
            });
          }
          var D = K(H, 2);
          {
            var R = ($) => {
              Je($, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  h(r());
                },
                children: (E, V) => {
                  var T = Ib();
                  L(E, T);
                },
                $$slots: { default: !0 }
              });
            };
            _e(D, ($) => {
              a() && $(R);
            });
          }
          var S = K(D, 2);
          {
            var O = ($) => {
              Je($, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  f(r());
                },
                children: (E, V) => {
                  var T = Rb();
                  L(E, T);
                },
                $$slots: { default: !0 }
              });
            };
            _e(S, ($) => {
              l() && $(O);
            });
          }
          F(z), L(P, z);
        },
        $$slots: { default: !0 }
      });
    };
    _e(b, (N) => {
      (s() || a() || l()) && N(x);
    });
  }
  var k = K(b, 2), v = K(j(k), 2), _ = j(v);
  nh(_, {
    items: d,
    activeKeys: u,
    onChange: (N, P) => {
      c(r(), { expand: P == null ? void 0 : P.includes("key") });
    }
  }), F(v), F(k);
  var w = K(k, 2);
  br(w, {
    type: "target",
    get position() {
      return Ce.Left;
    },
    style: " left: -12px;top: 20px"
  });
  var C = K(w, 2);
  return br(C, {
    type: "source",
    get position() {
      return Ce.Right;
    },
    style: "right: -12px;top: 20px"
  }), L(e, p), de({
    get data() {
      return n();
    },
    set data(N) {
      n(N), m();
    },
    get id() {
      return r();
    },
    set id(N = "") {
      r(N), m();
    },
    get icon() {
      return o();
    },
    set icon(N) {
      o(N), m();
    },
    get children() {
      return i();
    },
    set children(N) {
      i(N), m();
    },
    get allowExecute() {
      return s();
    },
    set allowExecute(N = !0) {
      s(N), m();
    },
    get allowCopy() {
      return a();
    },
    set allowCopy(N = !0) {
      a(N), m();
    },
    get allowDelete() {
      return l();
    },
    set allowDelete(N = !0) {
      l(N), m();
    }
  });
}
ie(
  Pr,
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
function Rt() {
  return vr("svelteflow__node_id");
}
const ph = [
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
], Yb = [
  {
    value: "ref",
    label: "引用"
  },
  {
    value: "input",
    label: "固定值"
  }
];
var Xb = /* @__PURE__ */ oe('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">参数类型： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), Wb = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>'), Fb = /* @__PURE__ */ oe('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const jb = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function vh(e, t) {
  ce(t, !0), nt(e, jb);
  const [n, r] = Qe(), o = () => J(g(l), "$node", n), i = y(t, "parameter", 7), s = y(t, "index", 7);
  let a = Rt(), l = /* @__PURE__ */ ze(() => Nr(a)), u = /* @__PURE__ */ ze(() => {
    var P, M;
    return {
      ...i(),
      ...(M = (P = o()) == null ? void 0 : P.data) == null ? void 0 : M.parameters[s()]
    };
  });
  const { updateNodeData: c } = fn(), d = (P) => {
    const M = P.target.value;
    c(a, (z) => {
      let H = z.data.parameters;
      return H[s()].name = M, { parameters: H };
    });
  }, f = (P) => {
    const M = P.target.checked;
    c(a, (z) => {
      let H = z.data.parameters;
      return H[s()].required = M, { parameters: H };
    });
  };
  let h;
  const p = () => {
    c(a, (P) => {
      let M = P.data.parameters;
      return M.splice(s(), 1), { parameters: [...M] };
    }), h == null || h.hide();
  };
  var b = Fb(), x = ye(b), k = j(x);
  tn(k, {
    style: "width: 100%;",
    get value() {
      return g(u).name;
    },
    placeholder: "请输入参数名称",
    oninput: d
  }), F(x);
  var v = K(x, 2), _ = j(v);
  eh(_, {
    get checked() {
      return g(u).required;
    },
    onchange: f
  }), F(v);
  var w = K(v, 2), C = j(w);
  Bn(
    ni(C, {
      placement: "bottom",
      floating: (P) => {
        var M = Xb(), z = j(M), H = K(j(z));
        ar(H, {
          items: ph,
          style: "width: 100%"
        }), F(z);
        var A = K(z, 2), D = K(j(A));
        It(D, { rows: 1, style: "width: 100%;" }), F(A);
        var R = K(A, 2), S = K(j(R));
        It(S, { rows: 3, style: "width: 100%;" }), F(R);
        var O = K(R, 2), $ = j(O);
        Je($, {
          onclick: p,
          children: (E, V) => {
            Ae();
            var T = Ue("删除");
            L(E, T);
          },
          $$slots: { default: !0 }
        }), F(O), F(M), L(P, M);
      },
      children: (P, M) => {
        Je(P, {
          class: "input-btn-more",
          children: (z, H) => {
            var A = Wb();
            L(z, A);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (P) => h = P,
    () => h
  ), F(w), L(e, b);
  var N = de({
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
  return r(), N;
}
ie(vh, { parameter: {}, index: {} }, [], [], !0);
var qb = /* @__PURE__ */ oe('<div class="input-header svelte-3n0wca">参数名称</div> <div class="input-header svelte-3n0wca">必填</div> <div class="input-header svelte-3n0wca"></div>', 1), Gb = /* @__PURE__ */ oe('<div class="none-params svelte-3n0wca">无输入参数</div>'), Ub = /* @__PURE__ */ oe('<div class="input-container svelte-3n0wca"><!> <!></div>');
const Jb = {
  hash: "svelte-3n0wca",
  code: `.input-container.svelte-3n0wca {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-3n0wca .none-params:where(.svelte-3n0wca) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-3n0wca .input-header:where(.svelte-3n0wca) {font-size:12px;color:#666;}`
};
function mh(e, t) {
  ce(t, !0), nt(e, Jb);
  const [n, r] = Qe(), o = () => J(g(s), "$node", n);
  let i = Rt(), s = /* @__PURE__ */ ze(() => Nr(i)), a = /* @__PURE__ */ ze(() => {
    var f, h;
    return [...((h = (f = o()) == null ? void 0 : f.data) == null ? void 0 : h.parameters) || []];
  });
  var l = Ub(), u = j(l);
  {
    var c = (f) => {
      var h = qb();
      Ae(4), L(f, h);
    };
    _e(u, (f) => {
      g(a).length !== 0 && f(c);
    });
  }
  var d = K(u, 2);
  Dt(
    d,
    19,
    () => g(a),
    (f) => f.id,
    (f, h, p) => {
      vh(f, {
        get parameter() {
          return g(h);
        },
        get index() {
          return g(p);
        }
      });
    },
    (f) => {
      var h = Gb();
      L(f, h);
    }
  ), F(l), L(e, l), de(), r();
}
ie(mh, {}, [], [], !0);
const co = () => {
  const { updateNodeData: e } = fn();
  return {
    addParameter: (t, n = "parameters", r) => {
      const o = {
        ...r,
        id: Zo()
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
var Qb = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), ex = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), tx = /* @__PURE__ */ oe('<div class="heading svelte-r5g35l"><!> <!></div> <!>', 1);
const nx = {
  hash: "svelte-r5g35l",
  code: ".heading.svelte-r5g35l {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:#eee;border:1px solid transparent;}"
};
function yh(e, t) {
  ce(t, !0), nt(e, nx);
  const n = y(t, "data", 7), r = /* @__PURE__ */ qt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = Rt(), { addParameter: i } = co();
  return Pr(e, _t(() => r, {
    get data() {
      return n();
    },
    allowExecute: !1,
    icon: (s) => {
      var a = Qb();
      L(s, a);
    },
    children: (s, a) => {
      var l = tx(), u = ye(l), c = j(u);
      ct(c, {
        level: 3,
        children: (h, p) => {
          Ae();
          var b = Ue("输入参数");
          L(h, b);
        },
        $$slots: { default: !0 }
      });
      var d = K(c, 2);
      Je(d, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: () => {
          i(o);
        },
        children: (h, p) => {
          var b = ex();
          L(h, b);
        },
        $$slots: { default: !0 }
      }), F(u);
      var f = K(u, 2);
      mh(f, {}), L(s, l);
    },
    $$slots: { icon: !0, default: !0 }
  })), de({
    get data() {
      return n();
    },
    set data(s) {
      n(s), m();
    }
  });
}
ie(yh, { data: {} }, [], [], !0);
const wh = (e, t, n) => {
  for (let r of n)
    r.target === t && r.source && (e.push(r.source), wh(e, r.source, n));
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
}, rx = (e = !1) => {
  const t = Rt(), n = Nr(t), { nodes: r, edges: o } = Ge();
  return tr([n, r, o], ([i, s, a]) => {
    const l = [];
    if (e) {
      for (let u of s)
        if (u.parentId === i.id) {
          const c = Yu(u, u.parentId === i.id);
          c && l.push(c);
        }
    } else {
      const u = [];
      wh(u, t, a);
      for (let c of s)
        if (u.includes(c.id)) {
          const d = Yu(c, c.parentId === i.id);
          d && l.push(d);
        }
    }
    return l;
  });
};
var ox = /* @__PURE__ */ oe('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">数据来源： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), ix = /* @__PURE__ */ oe('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const sx = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function bh(e, t) {
  ce(t, !0), nt(e, sx);
  const [n, r] = Qe(), o = () => J(g(c), "$node", n), i = () => J(w, "$selectItems", n), s = y(t, "parameter", 7), a = y(t, "index", 7), l = y(t, "dataKeyName", 7);
  let u = Rt(), c = /* @__PURE__ */ ze(() => Nr(u)), d = /* @__PURE__ */ ze(() => {
    var O;
    return {
      ...s(),
      ...(O = o()) == null ? void 0 : O.data[l()][a()]
    };
  });
  const { updateNodeData: f } = fn(), h = (O, $) => {
    f(u, (E) => {
      let V = E.data[l()];
      return V[a()] = { ...V[a()], [O]: $ }, { [l()]: V };
    });
  }, p = (O) => {
    const $ = O.target.value;
    h("name", $);
  }, b = (O) => {
    const $ = O.target.value;
    h("value", $);
  }, x = (O) => {
    const $ = O.value;
    h("ref", $);
  }, k = (O) => {
    const $ = O.value;
    h("refType", $);
  };
  let v;
  const _ = () => {
    f(u, (O) => {
      let $ = O.data[l()];
      return $.splice(a(), 1), { [l()]: [...$] };
    }), v == null || v.hide();
  }, w = rx();
  var C = ix(), N = ye(C), P = j(N);
  tn(P, {
    style: "width: 100%;",
    get value() {
      return g(d).name;
    },
    placeholder: "请输入参数名称",
    oninput: p
  }), F(N);
  var M = K(N, 2), z = j(M);
  {
    var H = (O) => {
      tn(O, {
        get value() {
          return g(d).value;
        },
        placeholder: "请输入参数值",
        oninput: b
      });
    }, A = (O) => {
      const $ = /* @__PURE__ */ ze(() => [g(d).ref]);
      ar(O, {
        get items() {
          return i();
        },
        style: "width: 100%",
        defaultValue: ["ref"],
        get value() {
          return g($);
        },
        expandAll: !0,
        onSelect: x
      });
    };
    _e(z, (O) => {
      g(d).refType === "input" ? O(H) : O(A, !1);
    });
  }
  F(M);
  var D = K(M, 2), R = j(D);
  Bn(
    ni(R, {
      placement: "bottom",
      floating: (O) => {
        var $ = ox(), E = j($), V = K(j(E));
        const T = /* @__PURE__ */ ze(() => g(d).refType ? [g(d).refType] : []);
        ar(V, {
          items: Yb,
          style: "width: 100%",
          defaultValue: ["ref"],
          get value() {
            return g(T);
          },
          onSelect: k
        }), F(E);
        var Z = K(E, 2), W = K(j(Z));
        It(W, {
          rows: 1,
          style: "width: 100%;",
          onchange: (ue) => {
            const we = ue.target.value;
            h("defaultValue", we);
          }
        }), F(Z);
        var q = K(Z, 2), fe = K(j(q));
        It(fe, {
          rows: 3,
          style: "width: 100%;",
          onchange: (ue) => {
            const we = ue.target.value;
            h("description", we);
          }
        }), F(q);
        var Q = K(q, 2), B = j(Q);
        Je(B, {
          onclick: _,
          children: (ue, we) => {
            Ae();
            var be = Ue("删除");
            L(ue, be);
          },
          $$slots: { default: !0 }
        }), F(Q), F($), L(O, $);
      },
      children: (O, $) => {
        Ls(O, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (O) => v = O,
    () => v
  ), F(D), L(e, C);
  var S = de({
    get parameter() {
      return s();
    },
    set parameter(O) {
      s(O), m();
    },
    get index() {
      return a();
    },
    set index(O) {
      a(O), m();
    },
    get dataKeyName() {
      return l();
    },
    set dataKeyName(O) {
      l(O), m();
    }
  });
  return r(), S;
}
ie(bh, { parameter: {}, index: {}, dataKeyName: {} }, [], [], !0);
var ax = /* @__PURE__ */ oe('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数值</div> <div class="input-header svelte-1sm1mgi"></div>', 1), lx = /* @__PURE__ */ oe('<div class="none-params svelte-1sm1mgi"> </div>'), ux = /* @__PURE__ */ oe('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const cx = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function zn(e, t) {
  ce(t, !0), nt(e, cx);
  const [n, r] = Qe(), o = () => J(g(l), "$node", n), i = y(t, "noneParameterText", 7, "无输入参数"), s = y(t, "dataKeyName", 7, "parameters");
  let a = Rt(), l = /* @__PURE__ */ ze(() => Nr(a)), u = /* @__PURE__ */ ze(() => {
    var b;
    return [...((b = o()) == null ? void 0 : b.data[s()]) || []];
  });
  var c = ux(), d = j(c);
  {
    var f = (b) => {
      var x = ax();
      Ae(4), L(b, x);
    };
    _e(d, (b) => {
      g(u).length !== 0 && b(f);
    });
  }
  var h = K(d, 2);
  Dt(
    h,
    19,
    () => g(u),
    (b) => b.id,
    (b, x, k) => {
      bh(b, {
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
      var x = lx(), k = j(x, !0);
      F(x), Se(() => $n(k, i())), L(b, x);
    }
  ), F(c), L(e, c);
  var p = de({
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
ie(zn, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var dx = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), fx = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), hx = /* @__PURE__ */ oe('<div class="heading svelte-11h445j"><!> <!></div> <!>', 1);
const gx = {
  hash: "svelte-11h445j",
  code: ".heading.svelte-11h445j {display:flex;margin-bottom:10px;}"
};
function xh(e, t) {
  ce(t, !0), nt(e, gx);
  const n = y(t, "data", 7), r = /* @__PURE__ */ qt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = Rt(), { addParameter: i } = co();
  return Pr(e, _t(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      allowExecute: !1,
      icon: (s) => {
        var a = dx();
        L(s, a);
      },
      children: (s, a) => {
        var l = hx(), u = ye(l), c = j(u);
        ct(c, {
          level: 3,
          children: (h, p) => {
            Ae();
            var b = Ue("输出参数");
            L(h, b);
          },
          $$slots: { default: !0 }
        });
        var d = K(c, 2);
        Je(d, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (h, p) => {
            var b = fx();
            L(h, b);
          },
          $$slots: { default: !0 }
        }), F(u);
        var f = K(u, 2);
        zn(f, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs"
        }), L(s, l);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), de({
    get data() {
      return n();
    },
    set data(s) {
      n(s), m();
    }
  });
}
ie(xh, { data: {} }, [], [], !0);
const px = () => vr("tinyflow_options");
var vx = /* @__PURE__ */ ke('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), mx = /* @__PURE__ */ oe('<div class="input-more-item svelte-1cfeest"><!></div>'), yx = /* @__PURE__ */ oe('<div class="input-more-setting svelte-1cfeest"><div class="input-more-item svelte-1cfeest">默认值： <!></div> <div class="input-more-item svelte-1cfeest">参数描述： <!></div> <!></div>'), wx = /* @__PURE__ */ oe('<div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!></div>', 1);
const bx = {
  hash: "svelte-1cfeest",
  code: ".input-item.svelte-1cfeest {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-1cfeest {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-1cfeest .input-more-item:where(.svelte-1cfeest) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function _h(e, t) {
  ce(t, !0), nt(e, bx);
  const [n, r] = Qe(), o = () => J(g(u), "$node", n), i = y(t, "parameter", 7), s = y(t, "position", 7), a = y(t, "dataKeyName", 7);
  let l = Rt(), u = /* @__PURE__ */ ze(() => Nr(l)), c = /* @__PURE__ */ ze(() => {
    var E;
    let V = (E = o()) == null ? void 0 : E.data[a()], T;
    if (V && s().length > 0) {
      let Z = V;
      for (let W = 0; W < s().length; W++) {
        const q = s()[W];
        W == s().length - 1 ? T = Z[q] : Z = Z[q].children;
      }
    }
    return { ...i(), ...T };
  });
  const { updateNodeData: d } = fn(), f = (E, V) => {
    d(l, (T) => {
      const Z = T.data[a()];
      if (Z && s().length > 0) {
        let W = Z;
        for (let q = 0; q < s().length; q++) {
          const fe = s()[q];
          q == s().length - 1 ? W[fe] = { ...W[fe], [E]: V } : W = Z[fe].children;
        }
      }
      return { [a()]: Z };
    });
  }, h = (E) => {
    const V = E.target.value;
    f("name", V);
  }, p = (E) => {
    const V = E.value;
    f("dataType", V);
  };
  let b;
  const x = () => {
    d(l, (E) => {
      let V = E.data[a()];
      if (V && s().length > 0) {
        let T = V;
        for (let Z = 0; Z < s().length; Z++) {
          const W = s()[Z];
          Z == s().length - 1 ? T.splice(W, 1) : T = T[W].children;
        }
      }
      return { [a()]: [...V] };
    }), b == null || b.hide();
  }, k = () => {
    d(l, (E) => {
      let V = E.data[a()];
      if (V && s().length > 0) {
        let T = V;
        for (let Z = 0; Z < s().length; Z++) {
          const W = s()[Z];
          Z == s().length - 1 ? T[W].children ? T[W].children.push({
            id: Zo(),
            name: "newParam",
            dataType: "String"
          }) : T[W].children = [
            {
              id: Zo(),
              name: "newParam",
              dataType: "String"
            }
          ] : T = T[W].children;
        }
      }
      return { [a()]: [...V] };
    });
  };
  var v = wx(), _ = ye(v), w = j(_);
  {
    var C = (E) => {
      var V = qe(), T = ye(V);
      Dt(T, 17, s, xs, (Z, W) => {
        Ae();
        var q = Ue(" ");
        L(Z, q);
      }), L(E, V);
    };
    _e(w, (E) => {
      s().length > 1 && E(C);
    });
  }
  var N = K(w, 2);
  const P = /* @__PURE__ */ ze(() => g(c).nameDisabled === !0);
  tn(N, {
    style: "width: 100%;",
    get value() {
      return g(c).name;
    },
    placeholder: "请输入参数名称",
    oninput: h,
    get disabled() {
      return g(P);
    }
  }), F(_);
  var M = K(_, 2), z = j(M);
  const H = /* @__PURE__ */ ze(() => g(c).dataType ? [g(c).dataType] : []), A = /* @__PURE__ */ ze(() => g(c).dataTypeDisabled === !0);
  ar(z, {
    items: ph,
    style: "width: 100%",
    defaultValue: ["String"],
    get value() {
      return g(H);
    },
    get disabled() {
      return g(A);
    },
    onSelect: p
  });
  var D = K(z, 2);
  {
    var R = (E) => {
      Je(E, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: k,
        children: (V, T) => {
          var Z = vx();
          L(V, Z);
        },
        $$slots: { default: !0 }
      });
    };
    _e(D, (E) => {
      (g(c).dataType === "Object" || g(c).dataType === "Array") && E(R);
    });
  }
  F(M);
  var S = K(M, 2), O = j(S);
  Bn(
    ni(O, {
      placement: "bottom",
      floating: (E) => {
        var V = yx(), T = j(V), Z = K(j(T));
        It(Z, {
          rows: 1,
          style: "width: 100%;",
          onchange: (B) => {
            const ue = B.target.value;
            f("defaultValue", ue);
          }
        }), F(T);
        var W = K(T, 2), q = K(j(W));
        It(q, {
          rows: 3,
          style: "width: 100%;",
          onchange: (B) => {
            const ue = B.target.value;
            f("description", ue);
          }
        }), F(W);
        var fe = K(W, 2);
        {
          var Q = (B) => {
            var ue = mx(), we = j(ue);
            Je(we, {
              onclick: x,
              children: (be, ve) => {
                Ae();
                var ne = Ue("删除");
                L(be, ne);
              },
              $$slots: { default: !0 }
            }), F(ue), L(B, ue);
          };
          _e(fe, (B) => {
            g(c).deleteDisabled !== !0 && B(Q);
          });
        }
        F(V), L(E, V);
      },
      children: (E, V) => {
        Ls(E, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (E) => b = E,
    () => b
  ), F(S), L(e, v);
  var $ = de({
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
  return r(), $;
}
ie(_h, { parameter: {}, position: {}, dataKeyName: {} }, [], [], !0);
var xx = /* @__PURE__ */ oe("<!> <!>", 1), _x = /* @__PURE__ */ oe('<div class="none-params svelte-1sm1mgi"> </div>'), $x = /* @__PURE__ */ oe('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数类型</div> <div class="input-header svelte-1sm1mgi"></div>', 1), Cx = /* @__PURE__ */ oe('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const kx = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function ri(e, t) {
  ce(t, !0), nt(e, kx);
  const [n, r] = Qe(), o = () => J(g(u), "$node", n), i = (x, k = ft, v = ft) => {
    var _ = qe(), w = ye(_);
    Dt(
      w,
      19,
      k,
      (C) => `${C.id}_${C.children ? C.children.length : 0}`,
      (C, N, P) => {
        var M = xx(), z = ye(M);
        const H = /* @__PURE__ */ ze(() => [...v(), g(P)]);
        _h(z, {
          get parameter() {
            return g(N);
          },
          get position() {
            return g(H);
          },
          get dataKeyName() {
            return a();
          }
        });
        var A = K(z, 2);
        {
          var D = (R) => {
            var S = /* @__PURE__ */ pe(() => [...v(), g(P)]);
            i(R, () => g(N).children, () => g(S));
          };
          _e(A, (R) => {
            g(N).children && R(D);
          });
        }
        L(C, M);
      },
      (C) => {
        var N = qe(), P = ye(N);
        {
          var M = (z) => {
            var H = _x(), A = j(H, !0);
            F(H), Se(() => $n(A, s())), L(z, H);
          };
          _e(P, (z) => {
            v().length === 0 && z(M);
          });
        }
        L(C, N);
      }
    ), L(x, _);
  }, s = y(t, "noneParameterText", 7, "无输出参数"), a = y(t, "dataKeyName", 7, "outputDefs");
  let l = Rt(), u = /* @__PURE__ */ ze(() => Nr(l)), c = /* @__PURE__ */ ze(() => {
    var x;
    return [...((x = o()) == null ? void 0 : x.data[a()]) || []];
  });
  var d = Cx(), f = j(d);
  {
    var h = (x) => {
      var k = $x();
      Ae(4), L(x, k);
    };
    _e(f, (x) => {
      g(c).length !== 0 && x(h);
    });
  }
  var p = K(f, 2);
  i(p, () => g(c) || [], () => []), F(d), L(e, d);
  var b = de({
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
ie(ri, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var Sx = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), Ex = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Nx = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Px = /* @__PURE__ */ oe('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">模型</div> <div class="setting-item svelte-15t2v24"><!> <!></div> <div class="setting-title svelte-15t2v24">系统提示词</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">用户提示词</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!> <!></div> <!>', 1);
const Ox = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function $h(e, t) {
  ce(t, !0), nt(e, Ox);
  const n = y(t, "data", 7), r = /* @__PURE__ */ qt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = Rt(), { addParameter: i } = co(), s = px();
  let a = ua(gn([]));
  Er(async () => {
    var u;
    const c = await ((u = s.provider) == null ? void 0 : u.llms());
    g(a).push(...c || []);
  });
  const { updateNodeData: l } = fn();
  return Pr(e, _t(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var c = Sx();
        L(u, c);
      },
      children: (u, c) => {
        var d = Px(), f = ye(d), h = j(f);
        ct(h, {
          level: 3,
          children: (R, S) => {
            Ae();
            var O = Ue("输入参数");
            L(R, O);
          },
          $$slots: { default: !0 }
        });
        var p = K(h, 2);
        Je(p, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (R, S) => {
            var O = Ex();
            L(R, O);
          },
          $$slots: { default: !0 }
        }), F(f);
        var b = K(f, 2);
        zn(b, {});
        var x = K(b, 2);
        ct(x, {
          level: 3,
          mt: "10px",
          children: (R, S) => {
            Ae();
            var O = Ue("模型设置");
            L(R, O);
          },
          $$slots: { default: !0 }
        });
        var k = K(x, 4), v = j(k);
        const _ = /* @__PURE__ */ ze(() => n().llmId ? [n().llmId] : []);
        ar(v, {
          get items() {
            return g(a);
          },
          style: "width: 100%",
          placeholder: "请选择模型",
          onSelect: (R) => {
            const S = R.value;
            l(o, () => ({ llmId: S }));
          },
          get value() {
            return g(_);
          }
        });
        var w = K(v, 2);
        Ls(w, {}), F(k);
        var C = K(k, 4), N = j(C);
        It(N, {
          rows: 5,
          placeholder: "请输入系统提示词",
          style: "width: 100%"
        }), F(C);
        var P = K(C, 4), M = j(P);
        It(M, {
          rows: 5,
          placeholder: "请输入用户提示词",
          style: "width: 100%"
        }), F(P);
        var z = K(P, 2), H = j(z);
        ct(H, {
          level: 3,
          mt: "10px",
          children: (R, S) => {
            Ae();
            var O = Ue("输出参数");
            L(R, O);
          },
          $$slots: { default: !0 }
        });
        var A = K(H, 2);
        Je(A, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (R, S) => {
            var O = Nx();
            L(R, O);
          },
          $$slots: { default: !0 }
        }), F(z);
        var D = K(z, 2);
        ri(D, {}), L(u, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), de({
    get data() {
      return n();
    },
    set data(u) {
      n(u), m();
    }
  });
}
ie($h, { data: {} }, [], [], !0);
var Mx = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), Vx = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), zx = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Hx = /* @__PURE__ */ oe('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!> <!></div> <!>', 1);
const Tx = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Ch(e, t) {
  ce(t, !0), nt(e, Tx);
  const n = y(t, "data", 7), r = /* @__PURE__ */ qt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = Rt(), { addParameter: i } = co(), { updateNodeData: s } = fn(), a = [
    { label: "QLExpress", value: "qlexpress" },
    { label: "Groovy", value: "groovy" }
  ];
  return Pr(e, _t(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = Mx();
        L(l, u);
      },
      children: (l, u) => {
        var c = Hx(), d = ye(c), f = j(d);
        ct(f, {
          level: 3,
          children: (H, A) => {
            Ae();
            var D = Ue("输入参数");
            L(H, D);
          },
          $$slots: { default: !0 }
        });
        var h = K(f, 2);
        Je(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (H, A) => {
            var D = Vx();
            L(H, D);
          },
          $$slots: { default: !0 }
        }), F(d);
        var p = K(d, 2);
        zn(p, {});
        var b = K(p, 2);
        ct(b, {
          level: 3,
          mt: "10px",
          children: (H, A) => {
            Ae();
            var D = Ue("代码");
            L(H, D);
          },
          $$slots: { default: !0 }
        });
        var x = K(b, 4), k = j(x);
        const v = /* @__PURE__ */ ze(() => n().engine ? [n().engine] : ["qlexpress"]);
        ar(k, {
          items: a,
          style: "width: 100%",
          placeholder: "请选择执行引擎",
          onSelect: (H) => {
            const A = H.value;
            s(o, () => ({ engine: A }));
          },
          get value() {
            return g(v);
          }
        }), F(x);
        var _ = K(x, 4), w = j(_);
        const C = /* @__PURE__ */ ze(() => n().code || "");
        It(w, {
          rows: 10,
          placeholder: "请输入执行代码",
          style: "width: 100%",
          onchange: (H) => {
            s(o, () => ({ code: H.target.value }));
          },
          get value() {
            return g(C);
          }
        }), F(_);
        var N = K(_, 2), P = j(N);
        ct(P, {
          level: 3,
          mt: "10px",
          children: (H, A) => {
            Ae();
            var D = Ue("输出参数");
            L(H, D);
          },
          $$slots: { default: !0 }
        });
        var M = K(P, 2);
        Je(M, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (H, A) => {
            var D = zx();
            L(H, D);
          },
          $$slots: { default: !0 }
        }), F(N);
        var z = K(N, 2);
        ri(z, {}), L(l, c);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), de({
    get data() {
      return n();
    },
    set data(l) {
      n(l), m();
    }
  });
}
ie(Ch, { data: {} }, [], [], !0);
var Lx = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>'), Dx = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ax = /* @__PURE__ */ oe('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const Ix = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function kh(e, t) {
  ce(t, !0), nt(e, Ix);
  const n = y(t, "data", 7), r = /* @__PURE__ */ qt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = Rt(), { addParameter: i } = co(), { updateNodeData: s } = fn();
  return Zi(() => {
    (!n().outputDefs || n().outputDefs.length === 0) && i(o, "outputDefs", {
      name: "output",
      dataType: "String",
      dataTypeDisabled: !0,
      deleteDisabled: !0
    });
  }), Pr(e, _t(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (a) => {
        var l = Lx();
        L(a, l);
      },
      children: (a, l) => {
        var u = Ax(), c = ye(u), d = j(c);
        ct(d, {
          level: 3,
          children: (C, N) => {
            Ae();
            var P = Ue("输入参数");
            L(C, P);
          },
          $$slots: { default: !0 }
        });
        var f = K(d, 2);
        Je(f, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (C, N) => {
            var P = Dx();
            L(C, P);
          },
          $$slots: { default: !0 }
        }), F(c);
        var h = K(c, 2);
        zn(h, {});
        var p = K(h, 2);
        ct(p, {
          level: 3,
          mt: "10px",
          children: (C, N) => {
            Ae();
            var P = Ue("代码");
            L(C, P);
          },
          $$slots: { default: !0 }
        });
        var b = K(p, 4), x = j(b);
        const k = /* @__PURE__ */ ze(() => n().template || "");
        It(x, {
          rows: 10,
          placeholder: "请输入执行代码",
          style: "width: 100%",
          onchange: (C) => {
            s(o, () => ({ template: C.target.value }));
          },
          get value() {
            return g(k);
          }
        }), F(b);
        var v = K(b, 2), _ = j(v);
        ct(_, {
          level: 3,
          mt: "10px",
          children: (C, N) => {
            Ae();
            var P = Ue("输出参数");
            L(C, P);
          },
          $$slots: { default: !0 }
        }), F(v);
        var w = K(v, 2);
        ri(w, {}), L(a, u);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), de({
    get data() {
      return n();
    },
    set data(a) {
      n(a), m();
    }
  });
}
ie(kh, { data: {} }, [], [], !0);
var Rx = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), Zx = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Bx = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Kx = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Yx = /* @__PURE__ */ oe('<div class="heading svelte-1vtcqdz" style="padding-top: 10px"><!> <!></div> <!>', 1), Xx = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Wx = /* @__PURE__ */ oe('<div class="heading svelte-1vtcqdz" style="padding-top: 10px"><!> <!></div> <!>', 1), Fx = /* @__PURE__ */ oe('<div style="width: 100%"><!></div>'), jx = /* @__PURE__ */ oe('<div style="width: 100%"><!></div>'), qx = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Gx = /* @__PURE__ */ oe('<div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-1vtcqdz"><!> <!></div> <!> <div class="heading svelte-1vtcqdz" style="padding-top: 10px"><!> <!></div> <!> <!> <div class="radio-group svelte-1vtcqdz"><label class="svelte-1vtcqdz"><!>none</label> <label class="svelte-1vtcqdz"><!>form-data</label> <label class="svelte-1vtcqdz"><!>x-www-form-urlencoded</label> <label class="svelte-1vtcqdz"><!>json</label> <label class="svelte-1vtcqdz"><!>raw</label></div> <!> <!> <!> <!> <div class="heading svelte-1vtcqdz"><!> <!></div> <!>', 1);
const Ux = {
  hash: "svelte-1vtcqdz",
  code: ".heading.svelte-1vtcqdz {display:flex;margin-bottom:10px;}.radio-group.svelte-1vtcqdz {display:flex;margin:10px 0;}.radio-group.svelte-1vtcqdz label:where(.svelte-1vtcqdz) {display:flex;font-size:14px;}"
};
function Sh(e, t) {
  ce(t, !0), nt(e, Ux);
  const n = y(t, "data", 7), r = /* @__PURE__ */ qt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = Rt(), { addParameter: i } = co(), { updateNodeData: s } = fn();
  return Pr(e, _t(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (a) => {
        var l = Rx();
        L(a, l);
      },
      children: (a, l) => {
        var u = Gx(), c = ye(u), d = j(c), f = j(d);
        ar(f, {
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
        }), F(d);
        var h = K(d, 2), p = j(h);
        tn(p, { placeholder: "请输入url", style: "width: 100%" }), F(h), F(c);
        var b = K(c, 2), x = j(b);
        ct(x, {
          level: 3,
          children: (Y, he) => {
            Ae();
            var ge = Ue("Http 头信息");
            L(Y, ge);
          },
          $$slots: { default: !0 }
        });
        var k = K(x, 2);
        Je(k, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "headers");
          },
          children: (Y, he) => {
            var ge = Zx();
            L(Y, ge);
          },
          $$slots: { default: !0 }
        }), F(b);
        var v = K(b, 2);
        zn(v, { dataKeyName: "headers" });
        var _ = K(v, 2), w = j(_);
        ct(w, {
          level: 3,
          children: (Y, he) => {
            Ae();
            var ge = Ue("参数");
            L(Y, ge);
          },
          $$slots: { default: !0 }
        });
        var C = K(w, 2);
        Je(C, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "urlParameters");
          },
          children: (Y, he) => {
            var ge = Bx();
            L(Y, ge);
          },
          $$slots: { default: !0 }
        }), F(_);
        var N = K(_, 2);
        zn(N, { dataKeyName: "urlParameters" });
        var P = K(N, 2);
        ct(P, {
          level: 3,
          mt: "10px",
          children: (Y, he) => {
            Ae();
            var ge = Ue("Body");
            L(Y, ge);
          },
          $$slots: { default: !0 }
        });
        var M = K(P, 2), z = j(M), H = j(z);
        const A = /* @__PURE__ */ ze(() => !n().bodyType);
        tn(H, {
          type: "radio",
          name: "bodyType",
          value: "",
          get checked() {
            return g(A);
          },
          onchange: (Y) => {
            var he;
            (he = Y.target) != null && he.checked && s(o, { bodyType: "" });
          }
        }), Ae(), F(z);
        var D = K(z, 2), R = j(D);
        const S = /* @__PURE__ */ ze(() => n().bodyType === "form-data");
        tn(R, {
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
        }), Ae(), F(D);
        var O = K(D, 2), $ = j(O);
        const E = /* @__PURE__ */ ze(() => n().bodyType === "x-www-form-urlencoded");
        tn($, {
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
        }), Ae(), F(O);
        var V = K(O, 2), T = j(V);
        const Z = /* @__PURE__ */ ze(() => n().bodyType === "json");
        tn(T, {
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
        }), Ae(), F(V);
        var W = K(V, 2), q = j(W);
        const fe = /* @__PURE__ */ ze(() => n().bodyType === "raw");
        tn(q, {
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
        }), Ae(), F(W), F(M);
        var Q = K(M, 2);
        {
          var B = (Y) => {
            var he = Yx(), ge = ye(he), Ee = j(ge);
            ct(Ee, {
              level: 3,
              children: (Ye, Xe) => {
                Ae();
                var rt = Ue("参数");
                L(Ye, rt);
              },
              $$slots: { default: !0 }
            });
            var it = K(Ee, 2);
            Je(it, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                i(o, "fromData");
              },
              children: (Ye, Xe) => {
                var rt = Kx();
                L(Ye, rt);
              },
              $$slots: { default: !0 }
            }), F(ge);
            var Ve = K(ge, 2);
            zn(Ve, { dataKeyName: "fromData" }), L(Y, he);
          };
          _e(Q, (Y) => {
            n().bodyType === "form-data" && Y(B);
          });
        }
        var ue = K(Q, 2);
        {
          var we = (Y) => {
            var he = Wx(), ge = ye(he), Ee = j(ge);
            ct(Ee, {
              level: 3,
              children: (Ye, Xe) => {
                Ae();
                var rt = Ue("参数");
                L(Ye, rt);
              },
              $$slots: { default: !0 }
            });
            var it = K(Ee, 2);
            Je(it, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                i(o, "fromUrlencoded");
              },
              children: (Ye, Xe) => {
                var rt = Xx();
                L(Ye, rt);
              },
              $$slots: { default: !0 }
            }), F(ge);
            var Ve = K(ge, 2);
            zn(Ve, { dataKeyName: "fromUrlencoded" }), L(Y, he);
          };
          _e(ue, (Y) => {
            n().bodyType === "x-www-form-urlencoded" && Y(we);
          });
        }
        var be = K(ue, 2);
        {
          var ve = (Y) => {
            var he = Fx(), ge = j(he);
            It(ge, {
              rows: "5",
              style: "width: 100%",
              placeholder: "请输入 json 信息",
              get value() {
                return n().bodyJson;
              },
              oninput: (Ee) => {
                s(o, { bodyJson: Ee.target.value });
              }
            }), F(he), L(Y, he);
          };
          _e(be, (Y) => {
            n().bodyType === "json" && Y(ve);
          });
        }
        var ne = K(be, 2);
        {
          var le = (Y) => {
            var he = jx(), ge = j(he);
            It(ge, {
              rows: "5",
              style: "width: 100%",
              placeholder: "请输入请求信息",
              get value() {
                return n().bodyRaw;
              },
              oninput: (Ee) => {
                s(o, { bodyRaw: Ee.target.value });
              }
            }), F(he), L(Y, he);
          };
          _e(ne, (Y) => {
            n().bodyType === "raw" && Y(le);
          });
        }
        var Ie = K(ne, 2), We = j(Ie);
        ct(We, {
          level: 3,
          mt: "10px",
          children: (Y, he) => {
            Ae();
            var ge = Ue("输出参数");
            L(Y, ge);
          },
          $$slots: { default: !0 }
        });
        var Re = K(We, 2);
        Je(Re, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (Y, he) => {
            var ge = qx();
            L(Y, ge);
          },
          $$slots: { default: !0 }
        }), F(Ie);
        var Ke = K(Ie, 2);
        ri(Ke, {}), L(a, u);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), de({
    get data() {
      return n();
    },
    set data(a) {
      n(a), m();
    }
  });
}
ie(Sh, { data: {} }, [], [], !0);
const Jx = {
  startNode: yh,
  codeNode: Ch,
  llmNode: $h,
  templateNode: kh,
  httpNode: Sh,
  endNode: xh
};
var Qx = /* @__PURE__ */ oe("<!> ", 1);
function Eh(e, t) {
  ce(t, !0);
  const n = y(t, "icon", 7), r = y(t, "title", 7), o = y(t, "type", 7), i = y(t, "description", 7), s = y(t, "extra", 7);
  return Je(e, {
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
      var u = Qx(), c = ye(u);
      ld(c, n);
      var d = K(c);
      Se(() => $n(d, ` ${r() ?? ""}`)), L(a, u);
    },
    $$slots: { default: !0 }
  }), de({
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
ie(
  Eh,
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
var e5 = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), t5 = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), n5 = /* @__PURE__ */ oe('<div><div class="tf-toolbar-container "><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"><!></div></div></div> <!></div>');
function Nh(e) {
  let t = ua("base"), n = ua("show");
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
  var i = n5(), s = j(i), a = j(s), l = j(a);
  th(l, {
    style: "width: 100%",
    items: o,
    onChange: (p) => {
      U(t, gn(p.value.toString()));
    }
  }), F(a);
  var u = K(a, 2), c = j(u);
  Dt(c, 21, () => r, xs, (p, b) => {
    Eh(p, _t(() => g(b)));
  }), F(c);
  var d = K(c, 2), f = j(d);
  Je(f, {
    children: (p, b) => {
      Ae();
      var x = Ue("测试业务按钮");
      L(p, x);
    },
    $$slots: { default: !0 }
  }), F(d), F(u), F(s);
  var h = K(s, 2);
  Je(h, {
    onclick: () => {
      U(n, gn(g(n) ? "" : "show"));
    },
    children: (p, b) => {
      var x = qe(), k = ye(x);
      {
        var v = (w) => {
          var C = e5();
          L(w, C);
        }, _ = (w) => {
          var C = t5();
          L(w, C);
        };
        _e(k, (w) => {
          g(n) === "show" ? w(v) : w(_, !1);
        });
      }
      L(p, x);
    },
    $$slots: { default: !0 }
  }), F(i), Se(() => {
    Gr(i, `tf-toolbar ${g(n) ?? ""}`), se(c, "style", `display: ${(g(t) === "base" ? "flex" : "none") ?? ""}`), se(d, "style", `display: ${(g(t) !== "base" ? "flex" : "none") ?? ""}`);
  }), L(e, i);
}
ie(Nh, {}, [], [], !0);
var r5 = /* @__PURE__ */ oe("<!> <!> <!>", 1), o5 = /* @__PURE__ */ oe('<div style="position: relative; height: 100%; width: 100%"><!> <!></div>');
function Ph(e, t) {
  ce(t, !0);
  const n = y(t, "onInit", 7), r = fn();
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
      id: `node_${Zo()}`,
      position: f,
      data: {},
      ...p
    };
    Ei.addNode(b), Ei.selectNodeOnly(b.id);
  };
  var s = o5(), a = j(s);
  Nh(a);
  var l = K(a, 2);
  const u = /* @__PURE__ */ ze(() => ({
    // animated: true,
    // label: 'edge label',
    markerEnd: {
      type: Lo.ArrowClosed,
      // color: 'red',
      width: 20,
      height: 20
    }
  }));
  return Rf(l, _t({ nodeTypes: Jx }, Ei, {
    class: "tinyflow-logo",
    get defaultEdgeOptions() {
      return g(u);
    },
    $$events: { drop: i, dragover: o },
    children: (c, d) => {
      var f = r5(), h = ye(f);
      Gf(h, {});
      var p = K(h, 2);
      Ff(p, {});
      var b = K(p, 2);
      Jf(b, {}), L(c, f);
    },
    $$slots: { default: !0 }
  })), F(s), L(e, s), de({
    get onInit() {
      return n();
    },
    set onInit(c) {
      n(c), m();
    }
  });
}
ie(Ph, { onInit: {} }, [], [], !0);
function i5(e, t) {
  ce(t, !0);
  const n = y(t, "options", 7), r = y(t, "onInit", 7), { data: o } = n();
  return Ei.init(o.nodes || [], o.edges || []), jr("tinyflow_options", n()), Zf(e, {
    fitView: !0,
    children: (i, s) => {
      Ph(i, {
        get onInit() {
          return r();
        }
      });
    },
    $$slots: { default: !0 }
  }), de({
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
customElements.define("tinyflow-component", ie(i5, { options: {}, onInit: {} }, [], [], !1));
const d5 = /* @__PURE__ */ Zg({
  __name: "Tinyflow",
  props: {
    className: {},
    style: {},
    data: {}
  },
  setup(e, { expose: t }) {
    const n = e, r = bg(null);
    let o = null;
    return Kg(() => {
      r.value && (o = new Nw({
        element: r.value,
        data: n.data || {}
      }));
    }), Yg(() => {
      o && (o.destroy(), o = null);
    }), t({
      getData: () => o ? o.getData() : (console.warn("Tinyflow instance is not initialized"), null)
    }), (s, a) => (Ug(), ep("div", {
      ref_key: "divRef",
      ref: r,
      class: us(["tinyflow", s.className]),
      style: ls(s.style)
    }, null, 6));
  }
});
export {
  d5 as Tinyflow
};
//# sourceMappingURL=index.js.map
