import { defineComponent as Rv, ref as Bv, onMounted as jv, onUnmounted as Kv, createElementBlock as Fv, openBlock as Zv, normalizeStyle as Wv, normalizeClass as Xv } from "vue";
const qv = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(qv);
const Dd = 1, Vd = 2, Hd = 4, Yv = 8, Uv = 16, Gv = 1, Jv = 2, Ld = 4, Qv = 8, em = 16, Id = 1, tm = 2, Rd = "[", Zs = "[!", Al = "]", Kr = {}, St = Symbol(), nm = "http://www.w3.org/1999/xhtml", rm = "http://www.w3.org/2000/svg", Bd = "@attach", om = !1;
var Ws = Array.isArray, im = Array.prototype.indexOf, Dl = Array.from, ls = Object.keys, us = Object.defineProperty, Gn = Object.getOwnPropertyDescriptor, jd = Object.getOwnPropertyDescriptors, Kd = Object.prototype, sm = Array.prototype, Xs = Object.getPrototypeOf, qu = Object.isExtensible;
function To(t) {
  return typeof t == "function";
}
const Re = () => {
};
function am(t) {
  return t();
}
function La(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
function Fd() {
  var t, e, n = new Promise((r, o) => {
    t = r, e = o;
  });
  return { promise: n, resolve: t, reject: e };
}
function Dt(t, e, n = !1) {
  return t === void 0 ? n ? (
    /** @type {() => V} */
    e()
  ) : (
    /** @type {V} */
    e
  ) : t;
}
function _o(t, e) {
  if (Array.isArray(t))
    return t;
  if (e === void 0 || !(Symbol.iterator in t))
    return Array.from(t);
  const n = [];
  for (const r of t)
    if (n.push(r), n.length === e) break;
  return n;
}
const Ot = 2, Vl = 4, qs = 8, Zd = 1 << 24, sr = 16, ar = 32, _r = 64, Ys = 128, vn = 512, Mt = 1024, Wt = 2048, lr = 4096, Gt = 8192, Jn = 16384, Us = 32768, tr = 65536, Yu = 1 << 17, Hl = 1 << 18, Gr = 1 << 19, Wd = 1 << 20, Uo = 32768, Ia = 1 << 21, Ll = 1 << 22, mr = 1 << 23, Mn = Symbol("$state"), Il = Symbol("legacy props"), lm = Symbol(""), lo = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), um = 1, Gs = 3, ur = 8;
function Rl(t) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function cm() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function dm(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function hm() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function pm(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function fm() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function gm() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function vm(t) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function mm() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function ym() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function wm() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function bm() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function hi(t) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function xm() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function km() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let $e = !1;
function Ht(t) {
  $e = t;
}
let Te;
function ct(t) {
  if (t === null)
    throw hi(), Kr;
  return Te = t;
}
function mn() {
  return ct(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Qt(Te)
  );
}
function Z(t) {
  if ($e) {
    if (/* @__PURE__ */ Qt(Te) !== null)
      throw hi(), Kr;
    Te = t;
  }
}
function Se(t = 1) {
  if ($e) {
    for (var e = t, n = Te; e--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ Qt(n);
    Te = n;
  }
}
function cs(t = !0) {
  for (var e = 0, n = Te; ; ) {
    if (n.nodeType === ur) {
      var r = (
        /** @type {Comment} */
        n.data
      );
      if (r === Al) {
        if (e === 0) return n;
        e -= 1;
      } else (r === Rd || r === Zs) && (e += 1);
    }
    var o = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Qt(n)
    );
    t && n.remove(), n = o;
  }
}
function Xd(t) {
  if (!t || t.nodeType !== ur)
    throw hi(), Kr;
  return (
    /** @type {Comment} */
    t.data
  );
}
function qd(t) {
  return t === this.v;
}
function Yd(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function Ud(t) {
  return !Yd(t, this.v);
}
let Oo = !1, Cm = !1;
function $m() {
  Oo = !0;
}
const Sm = [];
function Bl(t, e = !1, n = !1) {
  return Yi(t, /* @__PURE__ */ new Map(), "", Sm, null, n);
}
function Yi(t, e, n, r, o = null, i = !1) {
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
    if (Ws(t)) {
      var a = (
        /** @type {Snapshot<any>} */
        Array(t.length)
      );
      e.set(t, a), o !== null && e.set(o, a);
      for (var l = 0; l < t.length; l += 1) {
        var u = t[l];
        l in t && (a[l] = Yi(u, e, n, r, null, i));
      }
      return a;
    }
    if (Xs(t) === Kd) {
      a = {}, e.set(t, a), o !== null && e.set(o, a);
      for (var d in t)
        a[d] = Yi(
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
      return Yi(
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
let ot = null;
function go(t) {
  ot = t;
}
function yn(t) {
  return (
    /** @type {T} */
    Js().get(t)
  );
}
function Fr(t, e) {
  return Js().set(t, e), e;
}
function _m(t) {
  return Js().has(t);
}
function Om() {
  return Js();
}
function ae(t, e = !1, n) {
  ot = {
    p: ot,
    i: !1,
    c: null,
    e: null,
    s: t,
    x: null,
    l: Oo && !e ? { s: null, u: null, $: [] } : null
  };
}
function le(t) {
  var e = (
    /** @type {ComponentContext} */
    ot
  ), n = e.e;
  if (n !== null) {
    e.e = null;
    for (var r of n)
      gh(r);
  }
  return t !== void 0 && (e.x = t), e.i = !0, ot = e.p, t ?? /** @type {T} */
  {};
}
function Po() {
  return !Oo || ot !== null && ot.l === null;
}
function Js(t) {
  return ot === null && Rl(), ot.c ??= new Map(Pm(ot) || void 0);
}
function Pm(t) {
  let e = t.p;
  for (; e !== null; ) {
    const n = e.c;
    if (n !== null)
      return n;
    e = e.p;
  }
  return null;
}
let Vr = [];
function Gd() {
  var t = Vr;
  Vr = [], La(t);
}
function Or(t) {
  if (Vr.length === 0 && !Wo) {
    var e = Vr;
    queueMicrotask(() => {
      e === Vr && Gd();
    });
  }
  Vr.push(t);
}
function Em() {
  for (; Vr.length > 0; )
    Gd();
}
function Jd(t) {
  var e = Ke;
  if (e === null)
    return Ye.f |= mr, t;
  if ((e.f & Us) === 0) {
    if ((e.f & Ys) === 0)
      throw t;
    e.b.error(t);
  } else
    vo(t, e);
}
function vo(t, e) {
  for (; e !== null; ) {
    if ((e.f & Ys) !== 0)
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
const Ti = /* @__PURE__ */ new Set();
let Je = null, Ui = null, on = null, rn = [], Qs = null, Ra = !1, Wo = !1;
class pn {
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
    rn = [], Ui = null, this.apply();
    var n = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: [],
      block_effects: []
    };
    for (const r of e)
      this.#s(r, n);
    this.is_fork || this.#c(), this.is_deferred() ? (this.#l(n.effects), this.#l(n.render_effects), this.#l(n.block_effects)) : (Ui = this, Je = null, Uu(n.render_effects), Uu(n.effects), Ui = null, this.#o?.resolve()), on = null;
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   * @param {EffectTarget} target
   */
  #s(e, n) {
    e.f ^= Mt;
    for (var r = e.first; r !== null; ) {
      var o = r.f, i = (o & (ar | _r)) !== 0, s = i && (o & Mt) !== 0, a = s || (o & Gt) !== 0 || this.skipped_effects.has(r);
      if ((r.f & Ys) !== 0 && r.b?.is_pending() && (n = {
        parent: n,
        effect: r,
        effects: [],
        render_effects: [],
        block_effects: []
      }), !a && r.fn !== null) {
        i ? r.f ^= Mt : (o & Vl) !== 0 ? n.effects.push(r) : fi(r) && ((r.f & sr) !== 0 && n.block_effects.push(r), Qo(r));
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
      ((n.f & Wt) !== 0 ? this.#i : this.#a).push(n), this.#u(n.deps), Tt(n, Mt);
  }
  /**
   * @param {Value[] | null} deps
   */
  #u(e) {
    if (e !== null)
      for (const n of e)
        (n.f & Ot) === 0 || (n.f & Uo) === 0 || (n.f ^= Uo, this.#u(
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
    this.previous.has(e) || this.previous.set(e, n), (e.f & mr) === 0 && (this.current.set(e, e.v), on?.set(e, e.v));
  }
  activate() {
    Je = this, this.apply();
  }
  deactivate() {
    Je === this && (Je = null, on = null);
  }
  flush() {
    if (this.activate(), rn.length > 0) {
      if (Qd(), Je !== null && Je !== this)
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
    if (Ti.size > 1) {
      this.previous.clear();
      var e = on, n = !0, r = {
        parent: null,
        effect: null,
        effects: [],
        render_effects: [],
        block_effects: []
      };
      for (const i of Ti) {
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
          var o = rn;
          rn = [];
          const l = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map();
          for (const d of s)
            eh(d, a, l, u);
          if (rn.length > 0) {
            Je = i, i.apply();
            for (const d of rn)
              i.#s(d, r);
            i.deactivate();
          }
          rn = o;
        }
      }
      Je = null, on = e;
    }
    this.committed = !0, Ti.delete(this);
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
      Tt(e, Wt), Zr(e);
    for (const e of this.#a)
      Tt(e, lr), Zr(e);
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
    return (this.#o ??= Fd()).promise;
  }
  static ensure() {
    if (Je === null) {
      const e = Je = new pn();
      Ti.add(Je), Wo || pn.enqueue(() => {
        Je === e && e.flush();
      });
    }
    return Je;
  }
  /** @param {() => void} task */
  static enqueue(e) {
    Or(e);
  }
  apply() {
  }
}
function f(t) {
  var e = Wo;
  Wo = !0;
  try {
    for (var n; ; ) {
      if (Em(), rn.length === 0 && (Je?.flush(), rn.length === 0))
        return Qs = null, /** @type {T} */
        n;
      Qd();
    }
  } finally {
    Wo = e;
  }
}
function Qd() {
  var t = wr;
  Ra = !0;
  try {
    var e = 0;
    for (hs(!0); rn.length > 0; ) {
      var n = pn.ensure();
      if (e++ > 1e3) {
        var r, o;
        Nm();
      }
      n.process(rn), yr.clear();
    }
  } finally {
    Ra = !1, hs(t), Qs = null;
  }
}
function Nm() {
  try {
    fm();
  } catch (t) {
    vo(t, Qs);
  }
}
let Fn = null;
function Uu(t) {
  var e = t.length;
  if (e !== 0) {
    for (var n = 0; n < e; ) {
      var r = t[n++];
      if ((r.f & (Jn | Gt)) === 0 && fi(r) && (Fn = /* @__PURE__ */ new Set(), Qo(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? bh(r) : r.fn = null), Fn?.size > 0)) {
        yr.clear();
        for (const o of Fn) {
          if ((o.f & (Jn | Gt)) !== 0) continue;
          const i = [o];
          let s = o.parent;
          for (; s !== null; )
            Fn.has(s) && (Fn.delete(s), i.push(s)), s = s.parent;
          for (let a = i.length - 1; a >= 0; a--) {
            const l = i[a];
            (l.f & (Jn | Gt)) === 0 && Qo(l);
          }
        }
        Fn.clear();
      }
    }
    Fn = null;
  }
}
function eh(t, e, n, r) {
  if (!n.has(t) && (n.add(t), t.reactions !== null))
    for (const o of t.reactions) {
      const i = o.f;
      (i & Ot) !== 0 ? eh(
        /** @type {Derived} */
        o,
        e,
        n,
        r
      ) : (i & (Ll | sr)) !== 0 && (i & Wt) === 0 && th(o, e, r) && (Tt(o, Wt), Zr(
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
      if ((o.f & Ot) !== 0 && th(
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
function Zr(t) {
  for (var e = Qs = t; e.parent !== null; ) {
    e = e.parent;
    var n = e.f;
    if (Ra && e === Ke && (n & sr) !== 0 && (n & Hl) === 0)
      return;
    if ((n & (_r | ar)) !== 0) {
      if ((n & Mt) === 0) return;
      e.f ^= Mt;
    }
  }
  rn.push(e);
}
function Jr(t) {
  let e = 0, n = nr(0), r;
  return () => {
    Go() && (c(n), eo(() => (e === 0 && (r = lt(() => t(() => On(n)))), e += 1, () => {
      Or(() => {
        e -= 1, e === 0 && (r?.(), r = void 0, On(n));
      });
    })));
  };
}
var zm = tr | Gr | Ys;
function Mm(t, e, n) {
  new Tm(t, e, n);
}
class Tm {
  /** @type {Boundary | null} */
  parent;
  #e = !1;
  /** @type {TemplateNode} */
  #t;
  /** @type {TemplateNode | null} */
  #n = $e ? Te : null;
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
  #f = !1;
  /**
   * A source containing the number of pending async deriveds/expressions.
   * Only created if `$effect.pending()` is used inside the boundary,
   * otherwise updating the source results in needless `Batch.ensure()`
   * calls followed by no-op flushes
   * @type {Source<number> | null}
   */
  #p = null;
  #y = Jr(() => (this.#p = nr(this.#d), () => {
    this.#p = null;
  }));
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(e, n, r) {
    this.#t = e, this.#r = n, this.#o = r, this.parent = /** @type {Effect} */
    Ke.b, this.#e = !!this.#r.pending, this.#i = Pr(() => {
      if (Ke.b = this, $e) {
        const i = this.#n;
        mn(), /** @type {Comment} */
        i.nodeType === ur && /** @type {Comment} */
        i.data === Zs ? this.#w() : this.#v();
      } else {
        var o = this.#m();
        try {
          this.#a = Yt(() => r(o));
        } catch (i) {
          this.error(i);
        }
        this.#h > 0 ? this.#b() : this.#e = !1;
      }
      return () => {
        this.#c?.remove();
      };
    }, zm), $e && (this.#t = Te);
  }
  #v() {
    try {
      this.#a = Yt(() => this.#o(this.#t));
    } catch (e) {
      this.error(e);
    }
    this.#e = !1;
  }
  #w() {
    const e = this.#r.pending;
    e && (this.#s = Yt(() => e(this.#t)), pn.enqueue(() => {
      var n = this.#m();
      this.#a = this.#g(() => (pn.ensure(), Yt(() => this.#o(n)))), this.#h > 0 ? this.#b() : (co(
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
    return this.#e && (this.#c = It(), this.#t.before(this.#c), e = this.#c), e;
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
    var n = Ke, r = Ye, o = ot;
    an(this.#i), Kt(this.#i), go(this.#i.ctx);
    try {
      return e();
    } catch (i) {
      return Jd(i), null;
    } finally {
      an(n), Kt(r), go(o);
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
    ), Ch(this.#a, this.#u)), this.#s === null && (this.#s = Yt(() => e(this.#t)));
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
    this.#h += e, this.#h === 0 && (this.#e = !1, this.#s && co(this.#s, () => {
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
    this.#x(e), this.#d += e, this.#p && mo(this.#p, this.#d);
  }
  get_effect_pending() {
    return this.#y(), c(
      /** @type {Source<number>} */
      this.#p
    );
  }
  /** @param {unknown} error */
  error(e) {
    var n = this.#r.onerror;
    let r = this.#r.failed;
    if (this.#f || !n && !r)
      throw e;
    this.#a && ($t(this.#a), this.#a = null), this.#s && ($t(this.#s), this.#s = null), this.#l && ($t(this.#l), this.#l = null), $e && (ct(
      /** @type {TemplateNode} */
      this.#n
    ), Se(), ct(cs()));
    var o = !1, i = !1;
    const s = () => {
      if (o) {
        km();
        return;
      }
      o = !0, i && bm(), pn.ensure(), this.#d = 0, this.#l !== null && co(this.#l, () => {
        this.#l = null;
      }), this.#e = this.has_pending_snippet(), this.#a = this.#g(() => (this.#f = !1, Yt(() => this.#o(this.#t)))), this.#h > 0 ? this.#b() : this.#e = !1;
    };
    var a = Ye;
    try {
      Kt(null), i = !0, n?.(e, s), i = !1;
    } catch (l) {
      vo(l, this.#i && this.#i.parent);
    } finally {
      Kt(a);
    }
    r && Or(() => {
      this.#l = this.#g(() => {
        pn.ensure(), this.#f = !0;
        try {
          return Yt(() => {
            r(
              this.#t,
              () => e,
              () => s
            );
          });
        } catch (l) {
          return vo(
            l,
            /** @type {Effect} */
            this.#i.parent
          ), null;
        } finally {
          this.#f = !1;
        }
      });
    });
  }
}
function Wr(t, e) {
  return e;
}
function Am(t, e, n) {
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
      Fl(l), l.append(a), t.items.clear(), cn(t, e[0].prev, e[o - 1].next);
    }
    for (var u = 0; u < o; u++) {
      var d = e[u];
      s || (t.items.delete(d.k), cn(t, d.prev, d.next)), $t(d.e, !s);
    }
    t.first === e[0] && (t.first = e[0].prev);
  });
}
function xt(t, e, n, r, o, i = null) {
  var s = t, a = /* @__PURE__ */ new Map(), l = null, u = (e & Hd) !== 0, d = (e & Dd) !== 0, h = (e & Vd) !== 0;
  if (u) {
    var p = (
      /** @type {Element} */
      t
    );
    s = $e ? ct(
      /** @type {Comment | Text} */
      /* @__PURE__ */ mt(p)
    ) : p.appendChild(It());
  }
  $e && mn();
  var v = null, m = /* @__PURE__ */ jl(() => {
    var C = n();
    return Ws(C) ? C : C == null ? [] : Dl(C);
  }), y, w = !0;
  function b() {
    Dm(O, y, s, e, r), v !== null && (y.length === 0 ? (v.fragment ? (s.before(v.fragment), v.fragment = null) : Wl(v.effect), k.first = v.effect) : co(v.effect, () => {
      v = null;
    }));
  }
  var k = Pr(() => {
    y = /** @type {V[]} */
    c(m);
    var C = y.length;
    let x = !1;
    if ($e) {
      var E = Xd(s) === Zs;
      E !== (C === 0) && (s = cs(), ct(s), Ht(!1), x = !0);
    }
    for (var V = /* @__PURE__ */ new Set(), H = (
      /** @type {Batch} */
      Je
    ), I = null, A = dh(), D = 0; D < C; D += 1) {
      $e && Te.nodeType === ur && /** @type {Comment} */
      Te.data === Al && (s = /** @type {Comment} */
      Te, x = !0, Ht(!1));
      var _ = y[D], M = r(_, D), S = w ? null : a.get(M);
      S ? (d && mo(S.v, _), h ? mo(
        /** @type {Value<number>} */
        S.i,
        D
      ) : S.i = D, A && H.skipped_effects.delete(S.e)) : (S = Vm(
        w ? s : null,
        I,
        _,
        M,
        D,
        o,
        e,
        n
      ), w && (S.o = !0, I === null ? l = S : I.next = S, I = S), a.set(M, S)), V.add(M);
    }
    if (C === 0 && i && !v)
      if (w)
        v = {
          fragment: null,
          effect: Yt(() => i(s))
        };
      else {
        var P = document.createDocumentFragment(), z = It();
        P.append(z), v = {
          fragment: P,
          effect: Yt(() => i(z))
        };
      }
    if ($e && C > 0 && ct(cs()), !w)
      if (A) {
        for (const [B, q] of a)
          V.has(B) || H.skipped_effects.add(q.e);
        H.oncommit(b), H.ondiscard(() => {
        });
      } else
        b();
    x && Ht(!0), c(m);
  }), O = { effect: k, items: a, first: l };
  w = !1, $e && (s = Te);
}
function Dm(t, e, n, r, o) {
  var i = (r & Yv) !== 0, s = e.length, a = t.items, l = t.first, u, d = null, h, p = [], v = [], m, y, w, b;
  if (i)
    for (b = 0; b < s; b += 1)
      m = e[b], y = o(m, b), w = /** @type {EachItem} */
      a.get(y), w.o && (w.a?.measure(), (h ??= /* @__PURE__ */ new Set()).add(w));
  for (b = 0; b < s; b += 1) {
    if (m = e[b], y = o(m, b), w = /** @type {EachItem} */
    a.get(y), t.first ??= w, !w.o) {
      w.o = !0;
      var k = d ? d.next : l;
      cn(t, d, w), cn(t, w, k), ma(w, k, n), d = w, p = [], v = [], l = d.next;
      continue;
    }
    if ((w.e.f & Gt) !== 0 && (Wl(w.e), i && (w.a?.unfix(), (h ??= /* @__PURE__ */ new Set()).delete(w))), w !== l) {
      if (u !== void 0 && u.has(w)) {
        if (p.length < v.length) {
          var O = v[0], C;
          d = O.prev;
          var x = p[0], E = p[p.length - 1];
          for (C = 0; C < p.length; C += 1)
            ma(p[C], O, n);
          for (C = 0; C < v.length; C += 1)
            u.delete(v[C]);
          cn(t, x.prev, E.next), cn(t, d, x), cn(t, E, O), l = O, d = E, b -= 1, p = [], v = [];
        } else
          u.delete(w), ma(w, l, n), cn(t, w.prev, w.next), cn(t, w, d === null ? t.first : d.next), cn(t, d, w), d = w;
        continue;
      }
      for (p = [], v = []; l !== null && l.k !== y; )
        (l.e.f & Gt) === 0 && (u ??= /* @__PURE__ */ new Set()).add(l), v.push(l), l = l.next;
      if (l === null)
        continue;
      w = l;
    }
    p.push(w), d = w, l = w.next;
  }
  let V = a.size > s;
  if (l !== null || u !== void 0) {
    for (var H = u === void 0 ? [] : Dl(u); l !== null; )
      (l.e.f & Gt) === 0 && H.push(l), l = l.next;
    var I = H.length;
    if (V = a.size - I > s, I > 0) {
      var A = (r & Hd) !== 0 && s === 0 ? n : null;
      if (i) {
        for (b = 0; b < I; b += 1)
          H[b].a?.measure();
        for (b = 0; b < I; b += 1)
          H[b].a?.fix();
      }
      Am(t, H, A);
    }
  }
  if (V)
    for (const D of a.values())
      D.o || (cn(t, d, D), d = D);
  t.effect.last = d && d.e, i && Or(() => {
    if (h !== void 0)
      for (w of h)
        w.a?.apply();
  });
}
function Vm(t, e, n, r, o, i, s, a) {
  var l = (s & Dd) !== 0, u = (s & Uv) === 0, d = l ? u ? /* @__PURE__ */ sh(n, !1, !1) : nr(n) : n, h = (s & Vd) === 0 ? o : nr(o), p = {
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
      v.append(t = It());
    }
    return p.e = Yt(() => i(
      /** @type {Node} */
      t,
      d,
      h,
      a
    )), e !== null && (e.next = p), p;
  } finally {
  }
}
function ma(t, e, n) {
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
      /* @__PURE__ */ Qt(i)
    );
    o.before(i), i = s;
  }
}
function cn(t, e, n) {
  e === null ? (t.first = n, t.effect.first = n && n.e) : (e.e.next && (e.e.next.prev = null), e.next = n, e.e.next = n && n.e), n !== null && (n.e.prev && (n.e.prev.next = null), n.prev = e, n.e.prev = e && e.e);
}
function nh(t, e, n, r) {
  const o = Po() ? pi : jl;
  if (n.length === 0 && t.length === 0) {
    r(e.map(o));
    return;
  }
  var i = Je, s = (
    /** @type {Effect} */
    Ke
  ), a = Hm();
  function l() {
    Promise.all(n.map((u) => /* @__PURE__ */ Lm(u))).then((u) => {
      a();
      try {
        r([...e.map(o), ...u]);
      } catch (d) {
        (s.f & Jn) === 0 && vo(d, s);
      }
      i?.deactivate(), ds();
    }).catch((u) => {
      vo(u, s);
    });
  }
  t.length > 0 ? Promise.all(t).then(() => {
    a();
    try {
      return l();
    } finally {
      i?.deactivate(), ds();
    }
  }) : l();
}
function Hm() {
  var t = Ke, e = Ye, n = ot, r = Je;
  return function(o = !0) {
    an(t), Kt(e), go(n), o && r?.activate();
  };
}
function ds() {
  an(null), Kt(null), go(null);
}
// @__NO_SIDE_EFFECTS__
function pi(t) {
  var e = Ot | Wt, n = Ye !== null && (Ye.f & Ot) !== 0 ? (
    /** @type {Derived} */
    Ye
  ) : null;
  return Ke !== null && (Ke.f |= Gr), {
    ctx: ot,
    deps: null,
    effects: null,
    equals: qd,
    f: e,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      St
    ),
    wv: 0,
    parent: n ?? Ke,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Lm(t, e) {
  let n = (
    /** @type {Effect | null} */
    Ke
  );
  n === null && cm();
  var r = (
    /** @type {Boundary} */
    n.b
  ), o = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), i = nr(
    /** @type {V} */
    St
  ), s = !Ye, a = /* @__PURE__ */ new Map();
  return Wm(() => {
    var l = Fd();
    o = l.promise;
    try {
      Promise.resolve(t()).then(l.resolve, l.reject).then(() => {
        u === Je && u.committed && u.deactivate(), ds();
      });
    } catch (p) {
      l.reject(p), ds();
    }
    var u = (
      /** @type {Batch} */
      Je
    );
    if (s) {
      var d = !r.is_pending();
      r.update_pending_count(1), u.increment(d), a.get(u)?.reject(lo), a.delete(u), a.set(u, l);
    }
    const h = (p, v = void 0) => {
      if (u.activate(), v)
        v !== lo && (i.f |= mr, mo(i, v));
      else {
        (i.f & mr) !== 0 && (i.f ^= mr), mo(i, p);
        for (const [m, y] of a) {
          if (a.delete(m), m === u) break;
          y.reject(lo);
        }
      }
      s && (r.update_pending_count(-1), u.decrement(d));
    };
    l.promise.then(h, (p) => h(null, p || "unknown"));
  }), ta(() => {
    for (const l of a.values())
      l.reject(lo);
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
  const e = /* @__PURE__ */ pi(t);
  return $h(e), e;
}
// @__NO_SIDE_EFFECTS__
function jl(t) {
  const e = /* @__PURE__ */ pi(t);
  return e.equals = Ud, e;
}
function rh(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var n = 0; n < e.length; n += 1)
      $t(
        /** @type {Effect} */
        e[n]
      );
  }
}
function Im(t) {
  for (var e = t.parent; e !== null; ) {
    if ((e.f & Ot) === 0)
      return (e.f & Jn) === 0 ? (
        /** @type {Effect} */
        e
      ) : null;
    e = e.parent;
  }
  return null;
}
function Kl(t) {
  var e, n = Ke;
  an(Im(t));
  try {
    t.f &= ~Uo, rh(t), e = Ph(t);
  } finally {
    an(n);
  }
  return e;
}
function oh(t) {
  var e = Kl(t);
  if (t.equals(e) || (Je?.is_fork || (t.v = e), t.wv = _h()), !to)
    if (on !== null)
      (Go() || Je?.is_fork) && on.set(t, e);
    else {
      var n = (t.f & vn) === 0 ? lr : Mt;
      Tt(t, n);
    }
}
let Ba = /* @__PURE__ */ new Set();
const yr = /* @__PURE__ */ new Map();
let ih = !1;
function nr(t, e) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: qd,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function me(t, e) {
  const n = nr(t);
  return $h(n), n;
}
// @__NO_SIDE_EFFECTS__
function sh(t, e = !1, n = !0) {
  const r = nr(t);
  return e || (r.equals = Ud), Oo && n && ot !== null && ot.l !== null && (ot.l.s ??= []).push(r), r;
}
function K(t, e, n = !1) {
  Ye !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!En || (Ye.f & Yu) !== 0) && Po() && (Ye.f & (Ot | sr | Ll | Yu)) !== 0 && !Qn?.includes(t) && wm();
  let r = n ? pt(e) : e;
  return mo(t, r);
}
function mo(t, e) {
  if (!t.equals(e)) {
    var n = t.v;
    to ? yr.set(t, e) : yr.set(t, n), t.v = e;
    var r = pn.ensure();
    r.capture(t, n), (t.f & Ot) !== 0 && ((t.f & Wt) !== 0 && Kl(
      /** @type {Derived} */
      t
    ), Tt(t, (t.f & vn) !== 0 ? Mt : lr)), t.wv = _h(), ah(t, Wt), Po() && Ke !== null && (Ke.f & Mt) !== 0 && (Ke.f & (ar | _r)) === 0 && (nn === null ? qm([t]) : nn.push(t)), !r.is_fork && Ba.size > 0 && !ih && Rm();
  }
  return e;
}
function Rm() {
  ih = !1;
  var t = wr;
  hs(!0);
  const e = Array.from(Ba);
  try {
    for (const n of e)
      (n.f & Mt) !== 0 && Tt(n, lr), fi(n) && Qo(n);
  } finally {
    hs(t);
  }
  Ba.clear();
}
function Gu(t, e = 1) {
  var n = c(t), r = e === 1 ? n++ : n--;
  return K(t, n), r;
}
function On(t) {
  K(t, t.v + 1);
}
function ah(t, e) {
  var n = t.reactions;
  if (n !== null)
    for (var r = Po(), o = n.length, i = 0; i < o; i++) {
      var s = n[i], a = s.f;
      if (!(!r && s === Ke)) {
        var l = (a & Wt) === 0;
        if (l && Tt(s, e), (a & Ot) !== 0) {
          var u = (
            /** @type {Derived} */
            s
          );
          on?.delete(u), (a & Uo) === 0 && (a & vn && (s.f |= Uo), ah(u, lr));
        } else l && ((a & sr) !== 0 && Fn !== null && Fn.add(
          /** @type {Effect} */
          s
        ), Zr(
          /** @type {Effect} */
          s
        ));
      }
    }
}
function pt(t) {
  if (typeof t != "object" || t === null || Mn in t)
    return t;
  const e = Xs(t);
  if (e !== Kd && e !== sm)
    return t;
  var n = /* @__PURE__ */ new Map(), r = Ws(t), o = /* @__PURE__ */ me(0), i = er, s = (a) => {
    if (er === i)
      return a();
    var l = Ye, u = er;
    Kt(null), tc(i);
    var d = a();
    return Kt(l), tc(u), d;
  };
  return r && n.set("length", /* @__PURE__ */ me(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(a, l, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && mm();
        var d = n.get(l);
        return d === void 0 ? d = s(() => {
          var h = /* @__PURE__ */ me(u.value);
          return n.set(l, h), h;
        }) : K(d, u.value, !0), !0;
      },
      deleteProperty(a, l) {
        var u = n.get(l);
        if (u === void 0) {
          if (l in a) {
            const d = s(() => /* @__PURE__ */ me(St));
            n.set(l, d), On(o);
          }
        } else
          K(u, St), On(o);
        return !0;
      },
      get(a, l, u) {
        if (l === Mn)
          return t;
        var d = n.get(l), h = l in a;
        if (d === void 0 && (!h || Gn(a, l)?.writable) && (d = s(() => {
          var v = pt(h ? a[l] : St), m = /* @__PURE__ */ me(v);
          return m;
        }), n.set(l, d)), d !== void 0) {
          var p = c(d);
          return p === St ? void 0 : p;
        }
        return Reflect.get(a, l, u);
      },
      getOwnPropertyDescriptor(a, l) {
        var u = Reflect.getOwnPropertyDescriptor(a, l);
        if (u && "value" in u) {
          var d = n.get(l);
          d && (u.value = c(d));
        } else if (u === void 0) {
          var h = n.get(l), p = h?.v;
          if (h !== void 0 && p !== St)
            return {
              enumerable: !0,
              configurable: !0,
              value: p,
              writable: !0
            };
        }
        return u;
      },
      has(a, l) {
        if (l === Mn)
          return !0;
        var u = n.get(l), d = u !== void 0 && u.v !== St || Reflect.has(a, l);
        if (u !== void 0 || Ke !== null && (!d || Gn(a, l)?.writable)) {
          u === void 0 && (u = s(() => {
            var p = d ? pt(a[l]) : St, v = /* @__PURE__ */ me(p);
            return v;
          }), n.set(l, u));
          var h = c(u);
          if (h === St)
            return !1;
        }
        return d;
      },
      set(a, l, u, d) {
        var h = n.get(l), p = l in a;
        if (r && l === "length")
          for (var v = u; v < /** @type {Source<number>} */
          h.v; v += 1) {
            var m = n.get(v + "");
            m !== void 0 ? K(m, St) : v in a && (m = s(() => /* @__PURE__ */ me(St)), n.set(v + "", m));
          }
        if (h === void 0)
          (!p || Gn(a, l)?.writable) && (h = s(() => /* @__PURE__ */ me(void 0)), K(h, pt(u)), n.set(l, h));
        else {
          p = h.v !== St;
          var y = s(() => pt(u));
          K(h, y);
        }
        var w = Reflect.getOwnPropertyDescriptor(a, l);
        if (w?.set && w.set.call(d, u), !p) {
          if (r && typeof l == "string") {
            var b = (
              /** @type {Source<number>} */
              n.get("length")
            ), k = Number(l);
            Number.isInteger(k) && k >= b.v && K(b, k + 1);
          }
          On(o);
        }
        return !0;
      },
      ownKeys(a) {
        c(o);
        var l = Reflect.ownKeys(a).filter((h) => {
          var p = n.get(h);
          return p === void 0 || p.v !== St;
        });
        for (var [u, d] of n)
          d.v !== St && !(u in a) && l.push(u);
        return l;
      },
      setPrototypeOf() {
        ym();
      }
    }
  );
}
function Ju(t) {
  try {
    if (t !== null && typeof t == "object" && Mn in t)
      return t[Mn];
  } catch {
  }
  return t;
}
function Bm(t, e) {
  return Object.is(Ju(t), Ju(e));
}
var Bt, lh, uh, ch;
function ja() {
  if (Bt === void 0) {
    Bt = window, lh = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype, n = Text.prototype;
    uh = Gn(e, "firstChild").get, ch = Gn(e, "nextSibling").get, qu(t) && (t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__style = void 0, t.__e = void 0), qu(n) && (n.__t = void 0);
  }
}
function It(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function mt(t) {
  return uh.call(t);
}
// @__NO_SIDE_EFFECTS__
function Qt(t) {
  return ch.call(t);
}
function X(t, e) {
  if (!$e)
    return /* @__PURE__ */ mt(t);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ mt(Te)
  );
  if (n === null)
    n = Te.appendChild(It());
  else if (e && n.nodeType !== Gs) {
    var r = It();
    return n?.before(r), ct(r), r;
  }
  return ct(n), n;
}
function J(t, e = !1) {
  if (!$e) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ mt(
        /** @type {Node} */
        t
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Qt(n) : n;
  }
  if (e && Te?.nodeType !== Gs) {
    var r = It();
    return Te?.before(r), ct(r), r;
  }
  return Te;
}
function R(t, e = 1, n = !1) {
  let r = $e ? Te : t;
  for (var o; e--; )
    o = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ Qt(r);
  if (!$e)
    return r;
  if (n && r?.nodeType !== Gs) {
    var i = It();
    return r === null ? o?.after(i) : r.before(i), ct(i), i;
  }
  return ct(r), /** @type {TemplateNode} */
  r;
}
function Fl(t) {
  t.textContent = "";
}
function dh() {
  return !1;
}
function jm(t, e) {
  if (e) {
    const n = document.body;
    t.autofocus = !0, Or(() => {
      document.activeElement === n && t.focus();
    });
  }
}
function Km(t) {
  $e && /* @__PURE__ */ mt(t) !== null && Fl(t);
}
let Qu = !1;
function hh() {
  Qu || (Qu = !0, document.addEventListener(
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
function ea(t) {
  var e = Ye, n = Ke;
  Kt(null), an(null);
  try {
    return t();
  } finally {
    Kt(e), an(n);
  }
}
function ph(t, e, n, r = n) {
  t.addEventListener(e, () => ea(n));
  const o = t.__on_r;
  o ? t.__on_r = () => {
    o(), r(!0);
  } : t.__on_r = () => r(!0), hh();
}
function fh(t) {
  Ke === null && (Ye === null && pm(), hm()), to && dm();
}
function Fm(t, e) {
  var n = e.last;
  n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t);
}
function ln(t, e, n) {
  var r = Ke;
  r !== null && (r.f & Gt) !== 0 && (t |= Gt);
  var o = {
    ctx: ot,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: t | Wt | vn,
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
      Qo(o), o.f |= Us;
    } catch (a) {
      throw $t(o), a;
    }
  else e !== null && Zr(o);
  var i = o;
  if (n && i.deps === null && i.teardown === null && i.nodes_start === null && i.first === i.last && // either `null`, or a singular child
  (i.f & Gr) === 0 && (i = i.first, (t & sr) !== 0 && (t & tr) !== 0 && i !== null && (i.f |= tr)), i !== null && (i.parent = r, r !== null && Fm(i, r), Ye !== null && (Ye.f & Ot) !== 0 && (t & _r) === 0)) {
    var s = (
      /** @type {Derived} */
      Ye
    );
    (s.effects ??= []).push(i);
  }
  return o;
}
function Go() {
  return Ye !== null && !En;
}
function ta(t) {
  const e = ln(qs, null, !1);
  return Tt(e, Mt), e.teardown = t, e;
}
function He(t) {
  fh();
  var e = (
    /** @type {Effect} */
    Ke.f
  ), n = !Ye && (e & ar) !== 0 && (e & Us) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      ot
    );
    (r.e ??= []).push(t);
  } else
    return gh(t);
}
function gh(t) {
  return ln(Vl | Wd, t, !1);
}
function jt(t) {
  return fh(), ln(qs | Wd, t, !0);
}
function Qr(t) {
  pn.ensure();
  const e = ln(_r | Gr, t, !0);
  return () => {
    $t(e);
  };
}
function Zm(t) {
  pn.ensure();
  const e = ln(_r | Gr, t, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? co(e, () => {
      $t(e), r(void 0);
    }) : ($t(e), r(void 0));
  });
}
function Eo(t) {
  return ln(Vl, t, !1);
}
function Wm(t) {
  return ln(Ll | Gr, t, !0);
}
function eo(t, e = 0) {
  return ln(qs | e, t, !0);
}
function Ne(t, e = [], n = [], r = []) {
  nh(r, e, n, (o) => {
    ln(qs, () => t(...o.map(c)), !0);
  });
}
function Pr(t, e = 0) {
  var n = ln(sr | e, t, !0);
  return n;
}
function vh(t, e = 0) {
  var n = ln(Zd | e, t, !0);
  return n;
}
function Yt(t) {
  return ln(ar | Gr, t, !0);
}
function mh(t) {
  var e = t.teardown;
  if (e !== null) {
    const n = to, r = Ye;
    ec(!0), Kt(null);
    try {
      e.call(null);
    } finally {
      ec(n), Kt(r);
    }
  }
}
function yh(t, e = !1) {
  var n = t.first;
  for (t.first = t.last = null; n !== null; ) {
    const o = n.ac;
    o !== null && ea(() => {
      o.abort(lo);
    });
    var r = n.next;
    (n.f & _r) !== 0 ? n.parent = null : $t(n, e), n = r;
  }
}
function Xm(t) {
  for (var e = t.first; e !== null; ) {
    var n = e.next;
    (e.f & ar) === 0 && $t(e), e = n;
  }
}
function $t(t, e = !0) {
  var n = !1;
  (e || (t.f & Hl) !== 0) && t.nodes_start !== null && t.nodes_end !== null && (wh(
    t.nodes_start,
    /** @type {TemplateNode} */
    t.nodes_end
  ), n = !0), yh(t, e && !n), ps(t, 0), Tt(t, Jn);
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
      /* @__PURE__ */ Qt(t)
    );
    t.remove(), t = n;
  }
}
function bh(t) {
  var e = t.parent, n = t.prev, r = t.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), e !== null && (e.first === t && (e.first = r), e.last === t && (e.last = n));
}
function co(t, e, n = !0) {
  var r = [];
  Zl(t, r, !0), xh(r, () => {
    n && $t(t), e && e();
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
  if ((t.f & Gt) === 0) {
    if (t.f ^= Gt, t.transitions !== null)
      for (const s of t.transitions)
        (s.is_global || n) && e.push(s);
    for (var r = t.first; r !== null; ) {
      var o = r.next, i = (r.f & tr) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (r.f & ar) !== 0 && (t.f & sr) !== 0;
      Zl(r, e, i ? n : !1), r = o;
    }
  }
}
function Wl(t) {
  kh(t, !0);
}
function kh(t, e) {
  if ((t.f & Gt) !== 0) {
    t.f ^= Gt, (t.f & Mt) === 0 && (Tt(t, Wt), Zr(t));
    for (var n = t.first; n !== null; ) {
      var r = n.next, o = (n.f & tr) !== 0 || (n.f & ar) !== 0;
      kh(n, o ? e : !1), n = r;
    }
    if (t.transitions !== null)
      for (const i of t.transitions)
        (i.is_global || e) && i.in();
  }
}
function Ch(t, e) {
  for (var n = t.nodes_start, r = t.nodes_end; n !== null; ) {
    var o = n === r ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Qt(n)
    );
    e.append(n), n = o;
  }
}
let wr = !1;
function hs(t) {
  wr = t;
}
let to = !1;
function ec(t) {
  to = t;
}
let Ye = null, En = !1;
function Kt(t) {
  Ye = t;
}
let Ke = null;
function an(t) {
  Ke = t;
}
let Qn = null;
function $h(t) {
  Ye !== null && (Qn === null ? Qn = [t] : Qn.push(t));
}
let Vt = null, qt = 0, nn = null;
function qm(t) {
  nn = t;
}
let Sh = 1, Jo = 0, er = Jo;
function tc(t) {
  er = t;
}
function _h() {
  return ++Sh;
}
function fi(t) {
  var e = t.f;
  if ((e & Wt) !== 0)
    return !0;
  if (e & Ot && (t.f &= -32769), (e & lr) !== 0) {
    var n = t.deps;
    if (n !== null)
      for (var r = n.length, o = 0; o < r; o++) {
        var i = n[o];
        if (fi(
          /** @type {Derived} */
          i
        ) && oh(
          /** @type {Derived} */
          i
        ), i.wv > t.wv)
          return !0;
      }
    (e & vn) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    on === null && Tt(t, Mt);
  }
  return !1;
}
function Oh(t, e, n = !0) {
  var r = t.reactions;
  if (r !== null && !Qn?.includes(t))
    for (var o = 0; o < r.length; o++) {
      var i = r[o];
      (i.f & Ot) !== 0 ? Oh(
        /** @type {Derived} */
        i,
        e,
        !1
      ) : e === i && (n ? Tt(i, Wt) : (i.f & Mt) !== 0 && Tt(i, lr), Zr(
        /** @type {Effect} */
        i
      ));
    }
}
function Ph(t) {
  var e = Vt, n = qt, r = nn, o = Ye, i = Qn, s = ot, a = En, l = er, u = t.f;
  Vt = /** @type {null | Value[]} */
  null, qt = 0, nn = null, Ye = (u & (ar | _r)) === 0 ? t : null, Qn = null, go(t.ctx), En = !1, er = ++Jo, t.ac !== null && (ea(() => {
    t.ac.abort(lo);
  }), t.ac = null);
  try {
    t.f |= Ia;
    var d = (
      /** @type {Function} */
      t.fn
    ), h = d(), p = t.deps;
    if (Vt !== null) {
      var v;
      if (ps(t, qt), p !== null && qt > 0)
        for (p.length = qt + Vt.length, v = 0; v < Vt.length; v++)
          p[qt + v] = Vt[v];
      else
        t.deps = p = Vt;
      if (wr && Go() && (t.f & vn) !== 0)
        for (v = qt; v < p.length; v++)
          (p[v].reactions ??= []).push(t);
    } else p !== null && qt < p.length && (ps(t, qt), p.length = qt);
    if (Po() && nn !== null && !En && p !== null && (t.f & (Ot | lr | Wt)) === 0)
      for (v = 0; v < /** @type {Source[]} */
      nn.length; v++)
        Oh(
          nn[v],
          /** @type {Effect} */
          t
        );
    return o !== null && o !== t && (Jo++, nn !== null && (r === null ? r = nn : r.push(.../** @type {Source[]} */
    nn))), (t.f & mr) !== 0 && (t.f ^= mr), h;
  } catch (m) {
    return Jd(m);
  } finally {
    t.f ^= Ia, Vt = e, qt = n, nn = r, Ye = o, Qn = i, go(s), En = a, er = l;
  }
}
function Ym(t, e) {
  let n = e.reactions;
  if (n !== null) {
    var r = im.call(n, t);
    if (r !== -1) {
      var o = n.length - 1;
      o === 0 ? n = e.reactions = null : (n[r] = n[o], n.pop());
    }
  }
  n === null && (e.f & Ot) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Vt === null || !Vt.includes(e)) && (Tt(e, lr), (e.f & vn) !== 0 && (e.f ^= vn, e.f &= -32769), rh(
    /** @type {Derived} **/
    e
  ), ps(
    /** @type {Derived} **/
    e,
    0
  ));
}
function ps(t, e) {
  var n = t.deps;
  if (n !== null)
    for (var r = e; r < n.length; r++)
      Ym(t, n[r]);
}
function Qo(t) {
  var e = t.f;
  if ((e & Jn) === 0) {
    Tt(t, Mt);
    var n = Ke, r = wr;
    Ke = t, wr = !0;
    try {
      (e & (sr | Zd)) !== 0 ? Xm(t) : yh(t), mh(t);
      var o = Ph(t);
      t.teardown = typeof o == "function" ? o : null, t.wv = Sh;
      var i;
      om && Cm && (t.f & Wt) !== 0 && t.deps;
    } finally {
      wr = r, Ke = n;
    }
  }
}
async function Eh() {
  await Promise.resolve(), f();
}
function c(t) {
  var e = t.f, n = (e & Ot) !== 0;
  if (Ye !== null && !En) {
    var r = Ke !== null && (Ke.f & Jn) !== 0;
    if (!r && !Qn?.includes(t)) {
      var o = Ye.deps;
      if ((Ye.f & Ia) !== 0)
        t.rv < Jo && (t.rv = Jo, Vt === null && o !== null && o[qt] === t ? qt++ : Vt === null ? Vt = [t] : Vt.includes(t) || Vt.push(t));
      else {
        (Ye.deps ??= []).push(t);
        var i = t.reactions;
        i === null ? t.reactions = [Ye] : i.includes(Ye) || i.push(Ye);
      }
    }
  }
  if (to) {
    if (yr.has(t))
      return yr.get(t);
    if (n) {
      var s = (
        /** @type {Derived} */
        t
      ), a = s.v;
      return ((s.f & Mt) === 0 && s.reactions !== null || zh(s)) && (a = Kl(s)), yr.set(s, a), a;
    }
  } else n && (!on?.has(t) || Je?.is_fork && !Go()) && (s = /** @type {Derived} */
  t, fi(s) && oh(s), wr && Go() && (s.f & vn) === 0 && Nh(s));
  if (on?.has(t))
    return on.get(t);
  if ((t.f & mr) !== 0)
    throw t.v;
  return t.v;
}
function Nh(t) {
  if (t.deps !== null) {
    t.f ^= vn;
    for (const e of t.deps)
      (e.reactions ??= []).push(t), (e.f & Ot) !== 0 && (e.f & vn) === 0 && Nh(
        /** @type {Derived} */
        e
      );
  }
}
function zh(t) {
  if (t.v === St) return !0;
  if (t.deps === null) return !1;
  for (const e of t.deps)
    if (yr.has(e) || (e.f & Ot) !== 0 && zh(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function lt(t) {
  var e = En;
  try {
    return En = !0, t();
  } finally {
    En = e;
  }
}
const Um = -7169;
function Tt(t, e) {
  t.f = t.f & Um | e;
}
function Gm(t, e) {
  var n = {};
  for (var r in t)
    e.includes(r) || (n[r] = t[r]);
  for (var o of Object.getOwnPropertySymbols(t))
    Object.propertyIsEnumerable.call(t, o) && !e.includes(o) && (n[o] = t[o]);
  return n;
}
function Xl(t) {
  if (!(typeof t != "object" || !t || t instanceof EventTarget)) {
    if (Mn in t)
      Ka(t);
    else if (!Array.isArray(t))
      for (let e in t) {
        const n = t[e];
        typeof n == "object" && n && Mn in n && Ka(n);
      }
  }
}
function Ka(t, e = /* @__PURE__ */ new Set()) {
  if (typeof t == "object" && t !== null && // We don't want to traverse DOM elements
  !(t instanceof EventTarget) && !e.has(t)) {
    e.add(t), t instanceof Date && t.getTime();
    for (let r in t)
      try {
        Ka(t[r], e);
      } catch {
      }
    const n = Xs(t);
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
const Mh = /* @__PURE__ */ new Set(), Fa = /* @__PURE__ */ new Set();
function ql(t, e, n, r = {}) {
  function o(i) {
    if (r.capture || Io.call(e, i), !i.cancelBubble)
      return ea(() => n?.call(this, i));
  }
  return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? Or(() => {
    e.addEventListener(t, o, r);
  }) : e.addEventListener(t, o, r), o;
}
function ft(t, e, n, r = {}) {
  var o = ql(e, t, n, r);
  return () => {
    t.removeEventListener(e, o, r);
  };
}
function fs(t, e, n, r, o) {
  var i = { capture: r, passive: o }, s = ql(t, e, n, i);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && ta(() => {
    e.removeEventListener(t, s, i);
  });
}
function no(t) {
  for (var e = 0; e < t.length; e++)
    Mh.add(t[e]);
  for (var n of Fa)
    n(t);
}
let nc = null;
function Io(t) {
  var e = this, n = (
    /** @type {Node} */
    e.ownerDocument
  ), r = t.type, o = t.composedPath?.() || [], i = (
    /** @type {null | Element} */
    o[0] || t.target
  );
  nc = t;
  var s = 0, a = nc === t && t.__root;
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
    us(t, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    var d = Ye, h = Ke;
    Kt(null), an(null);
    try {
      for (var p, v = []; i !== null; ) {
        var m = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var y = i["__" + r];
          y != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          t.target === i) && y.call(i, t);
        } catch (w) {
          p ? v.push(w) : p = w;
        }
        if (t.cancelBubble || m === e || m === null)
          break;
        i = m;
      }
      if (p) {
        for (let w of v)
          queueMicrotask(() => {
            throw w;
          });
        throw p;
      }
    } finally {
      t.__root = e, delete t.currentTarget, Kt(d), an(h);
    }
  }
}
function Yl(t) {
  var e = document.createElement("template");
  return e.innerHTML = t.replaceAll("<!>", "<!---->"), e.content;
}
function Zt(t, e) {
  var n = (
    /** @type {Effect} */
    Ke
  );
  n.nodes_start === null && (n.nodes_start = t, n.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function ne(t, e) {
  var n = (e & Id) !== 0, r = (e & tm) !== 0, o, i = !t.startsWith("<!>");
  return () => {
    if ($e)
      return Zt(Te, null), Te;
    o === void 0 && (o = Yl(i ? t : "<!>" + t), n || (o = /** @type {Node} */
    /* @__PURE__ */ mt(o)));
    var s = (
      /** @type {TemplateNode} */
      r || lh ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ mt(s)
      ), l = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      Zt(a, l);
    } else
      Zt(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function Jm(t, e, n = "svg") {
  var r = !t.startsWith("<!>"), o = (e & Id) !== 0, i = `<${n}>${r ? t : "<!>" + t}</${n}>`, s;
  return () => {
    if ($e)
      return Zt(Te, null), Te;
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        Yl(i)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ mt(a)
      );
      if (o)
        for (s = document.createDocumentFragment(); /* @__PURE__ */ mt(l); )
          s.appendChild(
            /** @type {Node} */
            /* @__PURE__ */ mt(l)
          );
      else
        s = /** @type {Element} */
        /* @__PURE__ */ mt(l);
    }
    var u = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    if (o) {
      var d = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ mt(u)
      ), h = (
        /** @type {TemplateNode} */
        u.lastChild
      );
      Zt(d, h);
    } else
      Zt(u, u);
    return u;
  };
}
// @__NO_SIDE_EFFECTS__
function Ce(t, e) {
  return /* @__PURE__ */ Jm(t, e, "svg");
}
function Me(t = "") {
  if (!$e) {
    var e = It(t + "");
    return Zt(e, e), e;
  }
  var n = Te;
  return n.nodeType !== Gs && (n.before(n = It()), ct(n)), Zt(n, n), n;
}
function he() {
  if ($e)
    return Zt(Te, null), Te;
  var t = document.createDocumentFragment(), e = document.createComment(""), n = It();
  return t.append(e, n), Zt(e, n), t;
}
function T(t, e) {
  if ($e) {
    var n = (
      /** @type {Effect} */
      Ke
    );
    ((n.f & Us) === 0 || n.nodes_end === null) && (n.nodes_end = Te), mn();
    return;
  }
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
function gi() {
  if ($e && Te && Te.nodeType === ur && Te.textContent?.startsWith("$")) {
    const t = Te.textContent.substring(1);
    return mn(), t;
  }
  return (window.__svelte ??= {}).uid ??= 1, `c${window.__svelte.uid++}`;
}
function Qm(t) {
  return t.endsWith("capture") && t !== "gotpointercapture" && t !== "lostpointercapture";
}
const e1 = [
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
function t1(t) {
  return e1.includes(t);
}
const n1 = {
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
function r1(t) {
  return t = t.toLowerCase(), n1[t] ?? t;
}
const o1 = ["touchstart", "touchmove"];
function i1(t) {
  return o1.includes(t);
}
const s1 = (
  /** @type {const} */
  ["textarea", "script", "style", "title"]
);
function a1(t) {
  return s1.includes(
    /** @type {typeof RAW_TEXT_ELEMENTS[number]} */
    t
  );
}
function nt(t, e) {
  var n = e == null ? "" : typeof e == "object" ? e + "" : e;
  n !== (t.__t ??= t.nodeValue) && (t.__t = n, t.nodeValue = n + "");
}
function Ul(t, e) {
  return Th(t, e);
}
function l1(t, e) {
  ja(), e.intro = e.intro ?? !1;
  const n = e.target, r = $e, o = Te;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ mt(n)
    ); i && (i.nodeType !== ur || /** @type {Comment} */
    i.data !== Rd); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ Qt(i);
    if (!i)
      throw Kr;
    Ht(!0), ct(
      /** @type {Comment} */
      i
    );
    const s = Th(t, { ...e, anchor: i });
    return Ht(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s instanceof Error && s.message.split(`
`).some((a) => a.startsWith("https://svelte.dev/e/")))
      throw s;
    return s !== Kr && console.warn("Failed to hydrate: ", s), e.recover === !1 && gm(), ja(), Fl(n), Ht(!1), Ul(t, e);
  } finally {
    Ht(r), ct(o);
  }
}
const io = /* @__PURE__ */ new Map();
function Th(t, { target: e, anchor: n, props: r = {}, events: o, context: i, intro: s = !0 }) {
  ja();
  var a = /* @__PURE__ */ new Set(), l = (h) => {
    for (var p = 0; p < h.length; p++) {
      var v = h[p];
      if (!a.has(v)) {
        a.add(v);
        var m = i1(v);
        e.addEventListener(v, Io, { passive: m });
        var y = io.get(v);
        y === void 0 ? (document.addEventListener(v, Io, { passive: m }), io.set(v, 1)) : io.set(v, y + 1);
      }
    }
  };
  l(Dl(Mh)), Fa.add(l);
  var u = void 0, d = Zm(() => {
    var h = n ?? e.appendChild(It());
    return Mm(
      /** @type {TemplateNode} */
      h,
      {
        pending: () => {
        }
      },
      (p) => {
        if (i) {
          ae({});
          var v = (
            /** @type {ComponentContext} */
            ot
          );
          v.c = i;
        }
        if (o && (r.$$events = o), $e && Zt(
          /** @type {TemplateNode} */
          p,
          null
        ), u = t(p, r) || {}, $e && (Ke.nodes_end = Te, Te === null || Te.nodeType !== ur || /** @type {Comment} */
        Te.data !== Al))
          throw hi(), Kr;
        i && le();
      }
    ), () => {
      for (var p of a) {
        e.removeEventListener(p, Io);
        var v = (
          /** @type {number} */
          io.get(p)
        );
        --v === 0 ? (document.removeEventListener(p, Io), io.delete(p)) : io.set(p, v);
      }
      Fa.delete(l), h !== n && h.parentNode?.removeChild(h);
    };
  });
  return Za.set(u, d), u;
}
let Za = /* @__PURE__ */ new WeakMap();
function Ah(t, e) {
  const n = Za.get(t);
  return n ? (Za.delete(t), n(e)) : Promise.resolve();
}
class vi {
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
      Je
    );
    if (this.#e.has(e)) {
      var n = (
        /** @type {Key} */
        this.#e.get(e)
      ), r = this.#t.get(n);
      if (r)
        Wl(r), this.#r.delete(n);
      else {
        var o = this.#n.get(n);
        o && (this.#t.set(n, o.effect), this.#n.delete(n), o.fragment.lastChild.remove(), this.anchor.before(o.fragment), r = o.effect);
      }
      for (const [i, s] of this.#e) {
        if (this.#e.delete(i), i === e)
          break;
        const a = this.#n.get(s);
        a && ($t(a.effect), this.#n.delete(s));
      }
      for (const [i, s] of this.#t) {
        if (i === n || this.#r.has(i)) continue;
        const a = () => {
          if (Array.from(this.#e.values()).includes(i)) {
            var l = document.createDocumentFragment();
            Ch(s, l), l.append(It()), this.#n.set(i, { effect: s, fragment: l });
          } else
            $t(s);
          this.#r.delete(i), this.#t.delete(i);
        };
        this.#o || !r ? (this.#r.add(i), co(s, a, !1)) : a();
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
      n.includes(r) || ($t(o.effect), this.#n.delete(r));
  };
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(e, n) {
    var r = (
      /** @type {Batch} */
      Je
    ), o = dh();
    n && !this.#t.has(e) && !this.#n.has(e) && this.#t.set(
      e,
      Yt(() => n(this.anchor))
    ), this.#e.set(r, e), o || ($e && (this.anchor = Te), this.#i());
  }
}
function Ee(t, e, ...n) {
  var r = new vi(t);
  Pr(() => {
    const o = e() ?? null;
    r.ensure(o, o && ((i) => o(i, ...n)));
  }, tr);
}
function xn(t) {
  ot === null && Rl(), Oo && ot.l !== null ? u1(ot).m.push(t) : He(() => {
    const e = lt(t);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function mi(t) {
  ot === null && Rl(), xn(() => () => lt(t));
}
function u1(t) {
  var e = (
    /** @type {ComponentContextLegacy} */
    t.l
  );
  return e.u ??= { a: [], b: [], m: [] };
}
function c1() {
  return Symbol(Bd);
}
function se(t, e, n = !1) {
  $e && mn();
  var r = new vi(t), o = n ? tr : 0;
  function i(s, a) {
    if ($e) {
      const u = Xd(t) === Zs;
      if (s === u) {
        var l = cs();
        ct(l), r.anchor = l, Ht(!1), r.ensure(s, a), Ht(!0);
        return;
      }
    }
    r.ensure(s, a);
  }
  Pr(() => {
    var s = !1;
    e((a, l = !0) => {
      s = !0, i(l, a);
    }), s || i(!1, null);
  }, o);
}
function d1(t, e, n) {
  $e && mn();
  var r = new vi(t), o = !Po();
  Pr(() => {
    var i = e();
    o && i !== null && typeof i == "object" && (i = /** @type {V} */
    {}), r.ensure(i, n);
  });
}
function h1(t, e) {
  $e && ct(
    /** @type {TemplateNode} */
    /* @__PURE__ */ mt(t)
  ), eo(() => {
    var n = e();
    for (var r in n) {
      var o = n[r];
      o ? t.style.setProperty(r, o) : t.style.removeProperty(r);
    }
  });
}
function na(t, e, n = !1, r = !1, o = !1) {
  var i = t, s = "";
  Ne(() => {
    var a = (
      /** @type {Effect} */
      Ke
    );
    if (s === (s = e() ?? "")) {
      $e && mn();
      return;
    }
    if (a.nodes_start !== null && (wh(
      a.nodes_start,
      /** @type {TemplateNode} */
      a.nodes_end
    ), a.nodes_start = a.nodes_end = null), s !== "") {
      if ($e) {
        Te.data;
        for (var l = mn(), u = l; l !== null && (l.nodeType !== ur || /** @type {Comment} */
        l.data !== ""); )
          u = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ Qt(l);
        if (l === null)
          throw hi(), Kr;
        Zt(Te, u), i = ct(l);
        return;
      }
      var d = s + "";
      n ? d = `<svg>${d}</svg>` : r && (d = `<math>${d}</math>`);
      var h = Yl(d);
      if ((n || r) && (h = /** @type {Element} */
      /* @__PURE__ */ mt(h)), Zt(
        /** @type {TemplateNode} */
        /* @__PURE__ */ mt(h),
        /** @type {TemplateNode} */
        h.lastChild
      ), n || r)
        for (; /* @__PURE__ */ mt(h); )
          i.before(
            /** @type {Node} */
            /* @__PURE__ */ mt(h)
          );
      else
        i.before(h);
    }
  });
}
function Ct(t, e, n) {
  $e && mn();
  var r = new vi(t);
  Pr(() => {
    var o = e() ?? null;
    r.ensure(o, o && ((i) => n(i, o)));
  }, tr);
}
function Dh(t, e, n, r, o, i) {
  let s = $e;
  $e && mn();
  var a = null;
  $e && Te.nodeType === um && (a = /** @type {Element} */
  Te, mn());
  var l = (
    /** @type {TemplateNode} */
    $e ? Te : t
  ), u = new vi(l, !1);
  Pr(() => {
    const d = e() || null;
    var h = n || d === "svg" ? rm : null;
    if (d === null) {
      u.ensure(null, null);
      return;
    }
    return u.ensure(d, (p) => {
      if (d) {
        if (a = $e ? (
          /** @type {Element} */
          a
        ) : h ? document.createElementNS(h, d) : document.createElement(d), Zt(a, a), r) {
          $e && a1(d) && a.append(document.createComment(""));
          var v = (
            /** @type {TemplateNode} */
            $e ? /* @__PURE__ */ mt(a) : a.appendChild(It())
          );
          $e && (v === null ? Ht(!1) : ct(v)), r(a, v);
        }
        Ke.nodes_end = a, p.before(a);
      }
      $e && ct(p);
    }), () => {
    };
  }, tr), ta(() => {
  }), s && (Ht(!0), ct(l));
}
function p1(t, e) {
  let n = null, r = $e;
  var o;
  if ($e) {
    n = Te;
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ mt(document.head)
    ); i !== null && (i.nodeType !== ur || /** @type {Comment} */
    i.data !== t); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ Qt(i);
    if (i === null)
      Ht(!1);
    else {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Qt(i)
      );
      i.remove(), ct(s);
    }
  }
  $e || (o = document.head.appendChild(It()));
  try {
    Pr(() => e(o), Hl);
  } finally {
    r && (Ht(!0), ct(
      /** @type {TemplateNode} */
      n
    ));
  }
}
function Ge(t, e) {
  Eo(() => {
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
function zt(t, e, n) {
  Eo(() => {
    var r = lt(() => e(t, n?.()) || {});
    if (n && r?.update) {
      var o = !1, i = (
        /** @type {any} */
        {}
      );
      eo(() => {
        var s = n();
        Xl(s), o && Yd(i, s) && (i = s, r.update(s));
      }), o = !0;
    }
    if (r?.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function f1(t, e) {
  var n = void 0, r;
  vh(() => {
    n !== (n = e()) && (r && ($t(r), r = null), n && (r = Yt(() => {
      Eo(() => (
        /** @type {(node: Element) => void} */
        n(t)
      ));
    })));
  });
}
function Vh(t) {
  var e, n, r = "";
  if (typeof t == "string" || typeof t == "number") r += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var o = t.length;
    for (e = 0; e < o; e++) t[e] && (n = Vh(t[e])) && (r && (r += " "), r += n);
  } else for (n in t) t[n] && (r && (r += " "), r += n);
  return r;
}
function Xo() {
  for (var t, e, n = 0, r = "", o = arguments.length; n < o; n++) (t = arguments[n]) && (e = Vh(t)) && (r && (r += " "), r += e);
  return r;
}
function cr(t) {
  return typeof t == "object" ? Xo(t) : t ?? "";
}
const rc = [...` 	
\r\f \v\uFEFF`];
function g1(t, e, n) {
  var r = t == null ? "" : "" + t;
  if (e && (r = r ? r + " " + e : e), n) {
    for (var o in n)
      if (n[o])
        r = r ? r + " " + o : o;
      else if (r.length)
        for (var i = o.length, s = 0; (s = r.indexOf(o, s)) >= 0; ) {
          var a = s + i;
          (s === 0 || rc.includes(r[s - 1])) && (a === r.length || rc.includes(r[a])) ? r = (s === 0 ? "" : r.substring(0, s)) + r.substring(a + 1) : s = a;
        }
  }
  return r === "" ? null : r;
}
function oc(t, e = !1) {
  var n = e ? " !important;" : ";", r = "";
  for (var o in t) {
    var i = t[o];
    i != null && i !== "" && (r += " " + o + ": " + i + n);
  }
  return r;
}
function ya(t) {
  return t[0] !== "-" || t[1] !== "-" ? t.toLowerCase() : t;
}
function v1(t, e) {
  if (e) {
    var n = "", r, o;
    if (Array.isArray(e) ? (r = e[0], o = e[1]) : r = e, t) {
      t = String(t).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var i = !1, s = 0, a = !1, l = [];
      r && l.push(...Object.keys(r).map(ya)), o && l.push(...Object.keys(o).map(ya));
      var u = 0, d = -1;
      const y = t.length;
      for (var h = 0; h < y; h++) {
        var p = t[h];
        if (a ? p === "/" && t[h - 1] === "*" && (a = !1) : i ? i === p && (i = !1) : p === "/" && t[h + 1] === "*" ? a = !0 : p === '"' || p === "'" ? i = p : p === "(" ? s++ : p === ")" && s--, !a && i === !1 && s === 0) {
          if (p === ":" && d === -1)
            d = h;
          else if (p === ";" || h === y - 1) {
            if (d !== -1) {
              var v = ya(t.substring(u, d).trim());
              if (!l.includes(v)) {
                p !== ";" && h++;
                var m = t.substring(u, h).trim();
                n += " " + m + ";";
              }
            }
            u = h + 1, d = -1;
          }
        }
      }
    }
    return r && (n += oc(r)), o && (n += oc(o, !0)), n = n.trim(), n === "" ? null : n;
  }
  return t == null ? null : String(t);
}
function Xt(t, e, n, r, o, i) {
  var s = t.__className;
  if ($e || s !== n || s === void 0) {
    var a = g1(n, r, i);
    (!$e || a !== t.getAttribute("class")) && (a == null ? t.removeAttribute("class") : e ? t.className = a : t.setAttribute("class", a)), t.__className = n;
  } else if (i && o !== i)
    for (var l in i) {
      var u = !!i[l];
      (o == null || u !== !!o[l]) && t.classList.toggle(l, u);
    }
  return i;
}
function wa(t, e = {}, n, r) {
  for (var o in n) {
    var i = n[o];
    e[o] !== i && (n[o] == null ? t.style.removeProperty(o) : t.style.setProperty(o, i, r));
  }
}
function Pt(t, e, n, r) {
  var o = t.__style;
  if ($e || o !== e) {
    var i = v1(e, r);
    (!$e || i !== t.getAttribute("style")) && (i == null ? t.removeAttribute("style") : t.style.cssText = i), t.__style = e;
  } else r && (Array.isArray(r) ? (wa(t, n?.[0], r[0]), wa(t, n?.[1], r[1], "important")) : wa(t, n, r));
  return r;
}
function Wa(t, e, n = !1) {
  if (t.multiple) {
    if (e == null)
      return;
    if (!Ws(e))
      return xm();
    for (var r of t.options)
      r.selected = e.includes(ic(r));
    return;
  }
  for (r of t.options) {
    var o = ic(r);
    if (Bm(o, e)) {
      r.selected = !0;
      return;
    }
  }
  (!n || e !== void 0) && (t.selectedIndex = -1);
}
function m1(t) {
  var e = new MutationObserver(() => {
    Wa(t, t.__value);
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
  }), ta(() => {
    e.disconnect();
  });
}
function ic(t) {
  return "__value" in t ? t.__value : t.value;
}
const gr = Symbol("class"), Pn = Symbol("style"), Hh = Symbol("is custom element"), Lh = Symbol("is html");
function br(t) {
  if ($e) {
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
    t.__on_r = n, Or(n), hh();
  }
}
function Gi(t, e) {
  var n = ra(t);
  n.value === (n.value = // treat null and undefined the same for the initial value
  e ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  t.value === e && (e !== 0 || t.nodeName !== "PROGRESS") || (t.value = e ?? "");
}
function ba(t, e) {
  var n = ra(t);
  n.checked !== (n.checked = // treat null and undefined the same for the initial value
  e ?? void 0) && (t.checked = e);
}
function y1(t, e) {
  e ? t.hasAttribute("selected") || t.setAttribute("selected", "") : t.removeAttribute("selected");
}
function Oe(t, e, n, r) {
  var o = ra(t);
  $e && (o[e] = t.getAttribute(e), e === "src" || e === "srcset" || e === "href" && t.nodeName === "LINK") || o[e] !== (o[e] = n) && (e === "loading" && (t[lm] = n), n == null ? t.removeAttribute(e) : typeof n != "string" && Ih(t).includes(e) ? t[e] = n : t.setAttribute(e, n));
}
function w1(t, e, n, r, o = !1, i = !1) {
  if ($e && o && t.tagName === "INPUT") {
    var s = (
      /** @type {HTMLInputElement} */
      t
    ), a = s.type === "checkbox" ? "defaultChecked" : "defaultValue";
    a in n || br(s);
  }
  var l = ra(t), u = l[Hh], d = !l[Lh];
  let h = $e && u;
  h && Ht(!1);
  var p = e || {}, v = t.tagName === "OPTION";
  for (var m in e)
    m in n || (n[m] = null);
  n.class ? n.class = cr(n.class) : (r || n[gr]) && (n.class = null), n[Pn] && (n.style ??= null);
  var y = Ih(t);
  for (const E in n) {
    let V = n[E];
    if (v && E === "value" && V == null) {
      t.value = t.__value = "", p[E] = V;
      continue;
    }
    if (E === "class") {
      var w = t.namespaceURI === "http://www.w3.org/1999/xhtml";
      Xt(t, w, V, r, e?.[gr], n[gr]), p[E] = V, p[gr] = n[gr];
      continue;
    }
    if (E === "style") {
      Pt(t, V, e?.[Pn], n[Pn]), p[E] = V, p[Pn] = n[Pn];
      continue;
    }
    var b = p[E];
    if (!(V === b && !(V === void 0 && t.hasAttribute(E)))) {
      p[E] = V;
      var k = E[0] + E[1];
      if (k !== "$$")
        if (k === "on") {
          const H = {}, I = "$$" + E;
          let A = E.slice(2);
          var O = t1(A);
          if (Qm(A) && (A = A.slice(0, -7), H.capture = !0), !O && b) {
            if (V != null) continue;
            t.removeEventListener(A, p[I], H), p[I] = null;
          }
          if (V != null)
            if (O)
              t[`__${A}`] = V, no([A]);
            else {
              let D = function(_) {
                p[E].call(this, _);
              };
              p[I] = ql(A, t, D, H);
            }
          else O && (t[`__${A}`] = void 0);
        } else if (E === "style")
          Oe(t, E, V);
        else if (E === "autofocus")
          jm(
            /** @type {HTMLElement} */
            t,
            !!V
          );
        else if (!u && (E === "__value" || E === "value" && V != null))
          t.value = t.__value = V;
        else if (E === "selected" && v)
          y1(
            /** @type {HTMLOptionElement} */
            t,
            V
          );
        else {
          var C = E;
          d || (C = r1(C));
          var x = C === "defaultValue" || C === "defaultChecked";
          if (V == null && !u && !x)
            if (l[E] = null, C === "value" || C === "checked") {
              let H = (
                /** @type {HTMLInputElement} */
                t
              );
              const I = e === void 0;
              if (C === "value") {
                let A = H.defaultValue;
                H.removeAttribute(C), H.defaultValue = A, H.value = H.__value = I ? A : null;
              } else {
                let A = H.defaultChecked;
                H.removeAttribute(C), H.defaultChecked = A, H.checked = I ? A : !1;
              }
            } else
              t.removeAttribute(E);
          else x || y.includes(C) && (u || typeof V != "string") ? (t[C] = V, C in l && (l[C] = St)) : typeof V != "function" && Oe(t, C, V);
        }
    }
  }
  return h && Ht(!0), p;
}
function Ue(t, e, n = [], r = [], o = [], i, s = !1, a = !1) {
  nh(o, n, r, (l) => {
    var u = void 0, d = {}, h = t.nodeName === "SELECT", p = !1;
    if (vh(() => {
      var m = e(...l.map(c)), y = w1(
        t,
        u,
        m,
        i,
        s,
        a
      );
      p && h && "value" in m && Wa(
        /** @type {HTMLSelectElement} */
        t,
        m.value
      );
      for (let b of Object.getOwnPropertySymbols(d))
        m[b] || $t(d[b]);
      for (let b of Object.getOwnPropertySymbols(m)) {
        var w = m[b];
        b.description === Bd && (!u || w !== u[b]) && (d[b] && $t(d[b]), d[b] = Yt(() => f1(t, () => w))), y[b] = w;
      }
      u = y;
    }), h) {
      var v = (
        /** @type {HTMLSelectElement} */
        t
      );
      Eo(() => {
        Wa(
          v,
          /** @type {Record<string | symbol, any>} */
          u.value,
          !0
        ), m1(v);
      });
    }
    p = !0;
  });
}
function ra(t) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    t.__attributes ??= {
      [Hh]: t.nodeName.includes("-"),
      [Lh]: t.namespaceURI === nm
    }
  );
}
var sc = /* @__PURE__ */ new Map();
function Ih(t) {
  var e = t.getAttribute("is") || t.nodeName, n = sc.get(e);
  if (n) return n;
  sc.set(e, n = []);
  for (var r, o = t, i = Element.prototype; i !== o; ) {
    r = jd(o);
    for (var s in r)
      r[s].set && n.push(s);
    o = Xs(o);
  }
  return n;
}
function gs(t, e, n = e) {
  var r = /* @__PURE__ */ new WeakSet();
  ph(t, "input", async (o) => {
    var i = o ? t.defaultValue : t.value;
    if (i = xa(t) ? ka(i) : i, n(i), Je !== null && r.add(Je), await Eh(), i !== (i = e())) {
      var s = t.selectionStart, a = t.selectionEnd, l = t.value.length;
      if (t.value = i ?? "", a !== null) {
        var u = t.value.length;
        s === a && a === l && u > l ? (t.selectionStart = u, t.selectionEnd = u) : (t.selectionStart = s, t.selectionEnd = Math.min(a, u));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  ($e && t.defaultValue !== t.value || // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  lt(e) == null && t.value) && (n(xa(t) ? ka(t.value) : t.value), Je !== null && r.add(Je)), eo(() => {
    var o = e();
    if (t === document.activeElement) {
      var i = (
        /** @type {Batch} */
        Ui ?? Je
      );
      if (r.has(i))
        return;
    }
    xa(t) && o === ka(t.value) || t.type === "date" && !o && !t.value || o !== t.value && (t.value = o ?? "");
  });
}
function xa(t) {
  var e = t.type;
  return e === "number" || e === "range";
}
function ka(t) {
  return t === "" ? null : +t;
}
function b1(t, e, n = e) {
  ph(t, "change", () => {
    n(t.files);
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  $e && t.files && n(t.files), eo(() => {
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
var x1 = /* @__PURE__ */ new Gl({
  box: "border-box"
});
function ac(t, e, n) {
  var r = x1.observe(t, () => n(t[e]));
  Eo(() => (lt(() => n(t[e])), r));
}
function lc(t, e) {
  return t === e || t?.[Mn] === e;
}
function Et(t = {}, e, n, r) {
  return Eo(() => {
    var o, i;
    return eo(() => {
      o = i, i = [], lt(() => {
        t !== n(...i) && (e(t, ...i), o && lc(n(...o), t) && e(null, ...o));
      });
    }), () => {
      Or(() => {
        i && lc(n(...i), t) && e(null, ...i);
      });
    };
  }), t;
}
function Jl(t = !1) {
  const e = (
    /** @type {ComponentContextLegacy} */
    ot
  ), n = e.l.u;
  if (!n) return;
  let r = () => Xl(e.s);
  if (t) {
    let o = 0, i = (
      /** @type {Record<string, any>} */
      {}
    );
    const s = /* @__PURE__ */ pi(() => {
      let a = !1;
      const l = e.s;
      for (const u in l)
        l[u] !== i[u] && (i[u] = l[u], a = !0);
      return a && o++, o;
    });
    r = () => c(s);
  }
  n.b.length && jt(() => {
    uc(e, r), La(n.b);
  }), He(() => {
    const o = lt(() => n.m.map(am));
    return () => {
      for (const i of o)
        typeof i == "function" && i();
    };
  }), n.a.length && He(() => {
    uc(e, r), La(n.a);
  });
}
function uc(t, e) {
  if (t.l.s)
    for (const n of t.l.s) c(n);
  e();
}
let Ai = !1;
function k1(t) {
  var e = Ai;
  try {
    return Ai = !1, [t(), Ai];
  } finally {
    Ai = e;
  }
}
const C1 = {
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
function De(t, e, n) {
  return new Proxy(
    { props: t, exclude: e },
    C1
  );
}
const $1 = {
  get(t, e) {
    if (!t.exclude.includes(e))
      return c(t.version), e in t.special ? t.special[e]() : t.props[e];
  },
  set(t, e, n) {
    if (!(e in t.special)) {
      var r = Ke;
      try {
        an(t.parent_effect), t.special[e] = g(
          {
            get [e]() {
              return t.props[e];
            }
          },
          /** @type {string} */
          e,
          Ld
        );
      } finally {
        an(r);
      }
    }
    return t.special[e](n), Gu(t.version), !0;
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
    return t.exclude.includes(e) || (t.exclude.push(e), Gu(t.version)), !0;
  },
  has(t, e) {
    return t.exclude.includes(e) ? !1 : e in t.props;
  },
  ownKeys(t) {
    return Reflect.ownKeys(t.props).filter((e) => !t.exclude.includes(e));
  }
};
function cc(t, e) {
  return new Proxy(
    {
      props: t,
      exclude: e,
      special: {},
      version: nr(0),
      // TODO this is only necessary because we need to track component
      // destruction inside `prop`, because of `bind:this`, but it
      // seems likely that we can simplify `bind:this` instead
      parent_effect: (
        /** @type {Effect} */
        Ke
      )
    },
    $1
  );
}
const S1 = {
  get(t, e) {
    let n = t.props.length;
    for (; n--; ) {
      let r = t.props[n];
      if (To(r) && (r = r()), typeof r == "object" && r !== null && e in r) return r[e];
    }
  },
  set(t, e, n) {
    let r = t.props.length;
    for (; r--; ) {
      let o = t.props[r];
      To(o) && (o = o());
      const i = Gn(o, e);
      if (i && i.set)
        return i.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(t, e) {
    let n = t.props.length;
    for (; n--; ) {
      let r = t.props[n];
      if (To(r) && (r = r()), typeof r == "object" && r !== null && e in r) {
        const o = Gn(r, e);
        return o && !o.configurable && (o.configurable = !0), o;
      }
    }
  },
  has(t, e) {
    if (e === Mn || e === Il) return !1;
    for (let n of t.props)
      if (To(n) && (n = n()), n != null && e in n) return !0;
    return !1;
  },
  ownKeys(t) {
    const e = [];
    for (let n of t.props)
      if (To(n) && (n = n()), !!n) {
        for (const r in n)
          e.includes(r) || e.push(r);
        for (const r of Object.getOwnPropertySymbols(n))
          e.includes(r) || e.push(r);
      }
    return e;
  }
};
function Ie(...t) {
  return new Proxy({ props: t }, S1);
}
function g(t, e, n, r) {
  var o = !Oo || (n & Jv) !== 0, i = (n & Qv) !== 0, s = (n & em) !== 0, a = (
    /** @type {V} */
    r
  ), l = !0, u = () => (l && (l = !1, a = s ? lt(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), a), d;
  if (i) {
    var h = Mn in t || Il in t;
    d = Gn(t, e)?.set ?? (h && e in t ? (O) => t[e] = O : void 0);
  }
  var p, v = !1;
  i ? [p, v] = k1(() => (
    /** @type {V} */
    t[e]
  )) : p = /** @type {V} */
  t[e], p === void 0 && r !== void 0 && (p = u(), d && (o && vm(), d(p)));
  var m;
  if (o ? m = () => {
    var O = (
      /** @type {V} */
      t[e]
    );
    return O === void 0 ? u() : (l = !0, O);
  } : m = () => {
    var O = (
      /** @type {V} */
      t[e]
    );
    return O !== void 0 && (a = /** @type {V} */
    void 0), O === void 0 ? a : O;
  }, o && (n & Ld) === 0)
    return m;
  if (d) {
    var y = t.$$legacy;
    return (
      /** @type {() => V} */
      function(O, C) {
        return arguments.length > 0 ? ((!o || !C || y || v) && d(C ? m() : O), O) : m();
      }
    );
  }
  var w = !1, b = ((n & Gv) !== 0 ? pi : jl)(() => (w = !1, m()));
  i && c(b);
  var k = (
    /** @type {Effect} */
    Ke
  );
  return (
    /** @type {() => V} */
    function(O, C) {
      if (arguments.length > 0) {
        const x = C ? c(b) : o && i ? pt(O) : O;
        return K(b, x), w = !0, a !== void 0 && (a = x), O;
      }
      return to && w || (k.f & Jn) !== 0 ? b.v : c(b);
    }
  );
}
function _1(t) {
  return new O1(t);
}
class O1 {
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
          return s === Il ? !0 : (c(n.get(s) ?? r(s, Reflect.get(i, s))), Reflect.has(i, s));
        },
        set(i, s, a) {
          return K(n.get(s) ?? r(s, a), a), Reflect.set(i, s, a);
        }
      }
    );
    this.#t = (e.hydrate ? l1 : Ul)(e.component, {
      target: e.target,
      anchor: e.anchor,
      props: o,
      context: e.context,
      intro: e.intro ?? !1,
      recover: e.recover
    }), (!e?.props?.$$host || e.sync === !1) && f(), this.#e = o.$$events;
    for (const i of Object.keys(this.#t))
      i === "$set" || i === "$destroy" || i === "$on" || us(this, i, {
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
      Ah(this.#t);
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
      const e = {}, n = P1(this);
      for (const r of this.$$s)
        r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = t(r), e.default = !0) : e[r] = t(r));
      for (const r of this.attributes) {
        const o = this.$$g_p(r.name);
        o in this.$$d || (this.$$d[o] = Ji(o, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = _1({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: e,
          $$host: this
        }
      }), this.$$me = Qr(() => {
        eo(() => {
          this.$$r = !0;
          for (const r of ls(this.$$c)) {
            if (!this.$$p_d[r]?.reflect) continue;
            this.$$d[r] = this.$$c[r];
            const o = Ji(
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
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = Ji(t, n, this.$$p_d, "toProp"), this.$$c?.$set({ [t]: this.$$d[t] }));
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
    return ls(this.$$p_d).find(
      (e) => this.$$p_d[e].attribute === t || !this.$$p_d[e].attribute && e.toLowerCase() === t
    ) || t;
  }
});
function Ji(t, e, n, r) {
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
function P1(t) {
  const e = {};
  return t.childNodes.forEach((n) => {
    e[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), e;
}
function ie(t, e, n, r, o, i) {
  let s = class extends Rh {
    constructor() {
      super(t, n, o), this.$$p_d = e;
    }
    static get observedAttributes() {
      return ls(e).map(
        (a) => (e[a].attribute || a).toLowerCase()
      );
    }
  };
  return ls(e).forEach((a) => {
    us(s.prototype, a, {
      get() {
        return this.$$c && a in this.$$c ? this.$$c[a] : this.$$d[a];
      },
      set(l) {
        l = Ji(a, l, e), this.$$d[a] = l;
        var u = this.$$c;
        if (u) {
          var d = Gn(u, a)?.get;
          d ? u[a] = l : u.$set({ [a]: l });
        }
      }
    });
  }), r.forEach((a) => {
    us(s.prototype, a, {
      get() {
        return this.$$c?.[a];
      }
    });
  }), t.element = /** @type {any} */
  s, s;
}
var E1 = { value: () => {
} };
function oa() {
  for (var t = 0, e = arguments.length, n = {}, r; t < e; ++t) {
    if (!(r = arguments[t] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new Qi(n);
}
function Qi(t) {
  this._ = t;
}
function N1(t, e) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !e.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
Qi.prototype = oa.prototype = {
  constructor: Qi,
  on: function(t, e) {
    var n = this._, r = N1(t + "", n), o, i = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++i < s; ) if ((o = (t = r[i]).type) && (o = z1(n[o], t.name))) return o;
      return;
    }
    if (e != null && typeof e != "function") throw new Error("invalid callback: " + e);
    for (; ++i < s; )
      if (o = (t = r[i]).type) n[o] = dc(n[o], t.name, e);
      else if (e == null) for (o in n) n[o] = dc(n[o], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, e = this._;
    for (var n in e) t[n] = e[n].slice();
    return new Qi(t);
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
function z1(t, e) {
  for (var n = 0, r = t.length, o; n < r; ++n)
    if ((o = t[n]).name === e)
      return o.value;
}
function dc(t, e, n) {
  for (var r = 0, o = t.length; r < o; ++r)
    if (t[r].name === e) {
      t[r] = E1, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return n != null && t.push({ name: e, value: n }), t;
}
var Xa = "http://www.w3.org/1999/xhtml";
const hc = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Xa,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function ia(t) {
  var e = t += "", n = e.indexOf(":");
  return n >= 0 && (e = t.slice(0, n)) !== "xmlns" && (t = t.slice(n + 1)), hc.hasOwnProperty(e) ? { space: hc[e], local: t } : t;
}
function M1(t) {
  return function() {
    var e = this.ownerDocument, n = this.namespaceURI;
    return n === Xa && e.documentElement.namespaceURI === Xa ? e.createElement(t) : e.createElementNS(n, t);
  };
}
function T1(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function Bh(t) {
  var e = ia(t);
  return (e.local ? T1 : M1)(e);
}
function A1() {
}
function Ql(t) {
  return t == null ? A1 : function() {
    return this.querySelector(t);
  };
}
function D1(t) {
  typeof t != "function" && (t = Ql(t));
  for (var e = this._groups, n = e.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = e[o], s = i.length, a = r[o] = new Array(s), l, u, d = 0; d < s; ++d)
      (l = i[d]) && (u = t.call(l, l.__data__, d, i)) && ("__data__" in l && (u.__data__ = l.__data__), a[d] = u);
  return new en(r, this._parents);
}
function V1(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function H1() {
  return [];
}
function jh(t) {
  return t == null ? H1 : function() {
    return this.querySelectorAll(t);
  };
}
function L1(t) {
  return function() {
    return V1(t.apply(this, arguments));
  };
}
function I1(t) {
  typeof t == "function" ? t = L1(t) : t = jh(t);
  for (var e = this._groups, n = e.length, r = [], o = [], i = 0; i < n; ++i)
    for (var s = e[i], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && (r.push(t.call(l, l.__data__, u, s)), o.push(l));
  return new en(r, o);
}
function Kh(t) {
  return function() {
    return this.matches(t);
  };
}
function Fh(t) {
  return function(e) {
    return e.matches(t);
  };
}
var R1 = Array.prototype.find;
function B1(t) {
  return function() {
    return R1.call(this.children, t);
  };
}
function j1() {
  return this.firstElementChild;
}
function K1(t) {
  return this.select(t == null ? j1 : B1(typeof t == "function" ? t : Fh(t)));
}
var F1 = Array.prototype.filter;
function Z1() {
  return Array.from(this.children);
}
function W1(t) {
  return function() {
    return F1.call(this.children, t);
  };
}
function X1(t) {
  return this.selectAll(t == null ? Z1 : W1(typeof t == "function" ? t : Fh(t)));
}
function q1(t) {
  typeof t != "function" && (t = Kh(t));
  for (var e = this._groups, n = e.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = e[o], s = i.length, a = r[o] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && t.call(l, l.__data__, u, i) && a.push(l);
  return new en(r, this._parents);
}
function Zh(t) {
  return new Array(t.length);
}
function Y1() {
  return new en(this._enter || this._groups.map(Zh), this._parents);
}
function vs(t, e) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
}
vs.prototype = {
  constructor: vs,
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
function U1(t) {
  return function() {
    return t;
  };
}
function G1(t, e, n, r, o, i) {
  for (var s = 0, a, l = e.length, u = i.length; s < u; ++s)
    (a = e[s]) ? (a.__data__ = i[s], r[s] = a) : n[s] = new vs(t, i[s]);
  for (; s < l; ++s)
    (a = e[s]) && (o[s] = a);
}
function J1(t, e, n, r, o, i, s) {
  var a, l, u = /* @__PURE__ */ new Map(), d = e.length, h = i.length, p = new Array(d), v;
  for (a = 0; a < d; ++a)
    (l = e[a]) && (p[a] = v = s.call(l, l.__data__, a, e) + "", u.has(v) ? o[a] = l : u.set(v, l));
  for (a = 0; a < h; ++a)
    v = s.call(t, i[a], a, i) + "", (l = u.get(v)) ? (r[a] = l, l.__data__ = i[a], u.delete(v)) : n[a] = new vs(t, i[a]);
  for (a = 0; a < d; ++a)
    (l = e[a]) && u.get(p[a]) === l && (o[a] = l);
}
function Q1(t) {
  return t.__data__;
}
function e0(t, e) {
  if (!arguments.length) return Array.from(this, Q1);
  var n = e ? J1 : G1, r = this._parents, o = this._groups;
  typeof t != "function" && (t = U1(t));
  for (var i = o.length, s = new Array(i), a = new Array(i), l = new Array(i), u = 0; u < i; ++u) {
    var d = r[u], h = o[u], p = h.length, v = t0(t.call(d, d && d.__data__, u, r)), m = v.length, y = a[u] = new Array(m), w = s[u] = new Array(m), b = l[u] = new Array(p);
    n(d, h, y, w, b, v, e);
    for (var k = 0, O = 0, C, x; k < m; ++k)
      if (C = y[k]) {
        for (k >= O && (O = k + 1); !(x = w[O]) && ++O < m; ) ;
        C._next = x || null;
      }
  }
  return s = new en(s, r), s._enter = a, s._exit = l, s;
}
function t0(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function n0() {
  return new en(this._exit || this._groups.map(Zh), this._parents);
}
function r0(t, e, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), e != null && (o = e(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function o0(t) {
  for (var e = t.selection ? t.selection() : t, n = this._groups, r = e._groups, o = n.length, i = r.length, s = Math.min(o, i), a = new Array(o), l = 0; l < s; ++l)
    for (var u = n[l], d = r[l], h = u.length, p = a[l] = new Array(h), v, m = 0; m < h; ++m)
      (v = u[m] || d[m]) && (p[m] = v);
  for (; l < o; ++l)
    a[l] = n[l];
  return new en(a, this._parents);
}
function i0() {
  for (var t = this._groups, e = -1, n = t.length; ++e < n; )
    for (var r = t[e], o = r.length - 1, i = r[o], s; --o >= 0; )
      (s = r[o]) && (i && s.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(s, i), i = s);
  return this;
}
function s0(t) {
  t || (t = a0);
  function e(h, p) {
    return h && p ? t(h.__data__, p.__data__) : !h - !p;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), i = 0; i < r; ++i) {
    for (var s = n[i], a = s.length, l = o[i] = new Array(a), u, d = 0; d < a; ++d)
      (u = s[d]) && (l[d] = u);
    l.sort(e);
  }
  return new en(o, this._parents).order();
}
function a0(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function l0() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function u0() {
  return Array.from(this);
}
function c0() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], o = 0, i = r.length; o < i; ++o) {
      var s = r[o];
      if (s) return s;
    }
  return null;
}
function d0() {
  let t = 0;
  for (const e of this) ++t;
  return t;
}
function h0() {
  return !this.node();
}
function p0(t) {
  for (var e = this._groups, n = 0, r = e.length; n < r; ++n)
    for (var o = e[n], i = 0, s = o.length, a; i < s; ++i)
      (a = o[i]) && t.call(a, a.__data__, i, o);
  return this;
}
function f0(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function g0(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function v0(t, e) {
  return function() {
    this.setAttribute(t, e);
  };
}
function m0(t, e) {
  return function() {
    this.setAttributeNS(t.space, t.local, e);
  };
}
function y0(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttribute(t) : this.setAttribute(t, n);
  };
}
function w0(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n);
  };
}
function b0(t, e) {
  var n = ia(t);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((e == null ? n.local ? g0 : f0 : typeof e == "function" ? n.local ? w0 : y0 : n.local ? m0 : v0)(n, e));
}
function Wh(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function x0(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function k0(t, e, n) {
  return function() {
    this.style.setProperty(t, e, n);
  };
}
function C0(t, e, n) {
  return function() {
    var r = e.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, n);
  };
}
function $0(t, e, n) {
  return arguments.length > 1 ? this.each((e == null ? x0 : typeof e == "function" ? C0 : k0)(t, e, n ?? "")) : yo(this.node(), t);
}
function yo(t, e) {
  return t.style.getPropertyValue(e) || Wh(t).getComputedStyle(t, null).getPropertyValue(e);
}
function S0(t) {
  return function() {
    delete this[t];
  };
}
function _0(t, e) {
  return function() {
    this[t] = e;
  };
}
function O0(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? delete this[t] : this[t] = n;
  };
}
function P0(t, e) {
  return arguments.length > 1 ? this.each((e == null ? S0 : typeof e == "function" ? O0 : _0)(t, e)) : this.node()[t];
}
function Xh(t) {
  return t.trim().split(/^|\s+/);
}
function eu(t) {
  return t.classList || new qh(t);
}
function qh(t) {
  this._node = t, this._names = Xh(t.getAttribute("class") || "");
}
qh.prototype = {
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
function Yh(t, e) {
  for (var n = eu(t), r = -1, o = e.length; ++r < o; ) n.add(e[r]);
}
function Uh(t, e) {
  for (var n = eu(t), r = -1, o = e.length; ++r < o; ) n.remove(e[r]);
}
function E0(t) {
  return function() {
    Yh(this, t);
  };
}
function N0(t) {
  return function() {
    Uh(this, t);
  };
}
function z0(t, e) {
  return function() {
    (e.apply(this, arguments) ? Yh : Uh)(this, t);
  };
}
function M0(t, e) {
  var n = Xh(t + "");
  if (arguments.length < 2) {
    for (var r = eu(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof e == "function" ? z0 : e ? E0 : N0)(n, e));
}
function T0() {
  this.textContent = "";
}
function A0(t) {
  return function() {
    this.textContent = t;
  };
}
function D0(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
function V0(t) {
  return arguments.length ? this.each(t == null ? T0 : (typeof t == "function" ? D0 : A0)(t)) : this.node().textContent;
}
function H0() {
  this.innerHTML = "";
}
function L0(t) {
  return function() {
    this.innerHTML = t;
  };
}
function I0(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function R0(t) {
  return arguments.length ? this.each(t == null ? H0 : (typeof t == "function" ? I0 : L0)(t)) : this.node().innerHTML;
}
function B0() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function j0() {
  return this.each(B0);
}
function K0() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function F0() {
  return this.each(K0);
}
function Z0(t) {
  var e = typeof t == "function" ? t : Bh(t);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function W0() {
  return null;
}
function X0(t, e) {
  var n = typeof t == "function" ? t : Bh(t), r = e == null ? W0 : typeof e == "function" ? e : Ql(e);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function q0() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function Y0() {
  return this.each(q0);
}
function U0() {
  var t = this.cloneNode(!1), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function G0() {
  var t = this.cloneNode(!0), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function J0(t) {
  return this.select(t ? G0 : U0);
}
function Q0(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function ey(t) {
  return function(e) {
    t.call(this, e, this.__data__);
  };
}
function ty(t) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var n = "", r = e.indexOf(".");
    return r >= 0 && (n = e.slice(r + 1), e = e.slice(0, r)), { type: e, name: n };
  });
}
function ny(t) {
  return function() {
    var e = this.__on;
    if (e) {
      for (var n = 0, r = -1, o = e.length, i; n < o; ++n)
        i = e[n], (!t.type || i.type === t.type) && i.name === t.name ? this.removeEventListener(i.type, i.listener, i.options) : e[++r] = i;
      ++r ? e.length = r : delete this.__on;
    }
  };
}
function ry(t, e, n) {
  return function() {
    var r = this.__on, o, i = ey(e);
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
function oy(t, e, n) {
  var r = ty(t + ""), o, i = r.length, s;
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
  for (a = e ? ry : ny, o = 0; o < i; ++o) this.each(a(r[o], e, n));
  return this;
}
function Gh(t, e, n) {
  var r = Wh(t), o = r.CustomEvent;
  typeof o == "function" ? o = new o(e, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(e, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(e, !1, !1)), t.dispatchEvent(o);
}
function iy(t, e) {
  return function() {
    return Gh(this, t, e);
  };
}
function sy(t, e) {
  return function() {
    return Gh(this, t, e.apply(this, arguments));
  };
}
function ay(t, e) {
  return this.each((typeof e == "function" ? sy : iy)(t, e));
}
function* ly() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], o = 0, i = r.length, s; o < i; ++o)
      (s = r[o]) && (yield s);
}
var Jh = [null];
function en(t, e) {
  this._groups = t, this._parents = e;
}
function yi() {
  return new en([[document.documentElement]], Jh);
}
function uy() {
  return this;
}
en.prototype = yi.prototype = {
  constructor: en,
  select: D1,
  selectAll: I1,
  selectChild: K1,
  selectChildren: X1,
  filter: q1,
  data: e0,
  enter: Y1,
  exit: n0,
  join: r0,
  merge: o0,
  selection: uy,
  order: i0,
  sort: s0,
  call: l0,
  nodes: u0,
  node: c0,
  size: d0,
  empty: h0,
  each: p0,
  attr: b0,
  style: $0,
  property: P0,
  classed: M0,
  text: V0,
  html: R0,
  raise: j0,
  lower: F0,
  append: Z0,
  insert: X0,
  remove: Y0,
  clone: J0,
  datum: Q0,
  on: oy,
  dispatch: ay,
  [Symbol.iterator]: ly
};
function sn(t) {
  return typeof t == "string" ? new en([[document.querySelector(t)]], [document.documentElement]) : new en([[t]], Jh);
}
function cy(t) {
  let e;
  for (; e = t.sourceEvent; ) t = e;
  return t;
}
function dn(t, e) {
  if (t = cy(t), e === void 0 && (e = t.currentTarget), e) {
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
const dy = { passive: !1 }, ei = { capture: !0, passive: !1 };
function Ca(t) {
  t.stopImmediatePropagation();
}
function ho(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function Qh(t) {
  var e = t.document.documentElement, n = sn(t).on("dragstart.drag", ho, ei);
  "onselectstart" in e ? n.on("selectstart.drag", ho, ei) : (e.__noselect = e.style.MozUserSelect, e.style.MozUserSelect = "none");
}
function ep(t, e) {
  var n = t.document.documentElement, r = sn(t).on("dragstart.drag", null);
  e && (r.on("click.drag", ho, ei), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const Di = (t) => () => t;
function qa(t, {
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
qa.prototype.on = function() {
  var t = this._.on.apply(this._, arguments);
  return t === this._ ? this : t;
};
function hy(t) {
  return !t.ctrlKey && !t.button;
}
function py() {
  return this.parentNode;
}
function fy(t, e) {
  return e ?? { x: t.x, y: t.y };
}
function gy() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function vy() {
  var t = hy, e = py, n = fy, r = gy, o = {}, i = oa("start", "drag", "end"), s = 0, a, l, u, d, h = 0;
  function p(C) {
    C.on("mousedown.drag", v).filter(r).on("touchstart.drag", w).on("touchmove.drag", b, dy).on("touchend.drag touchcancel.drag", k).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function v(C, x) {
    if (!(d || !t.call(this, C, x))) {
      var E = O(this, e.call(this, C, x), C, x, "mouse");
      E && (sn(C.view).on("mousemove.drag", m, ei).on("mouseup.drag", y, ei), Qh(C.view), Ca(C), u = !1, a = C.clientX, l = C.clientY, E("start", C));
    }
  }
  function m(C) {
    if (ho(C), !u) {
      var x = C.clientX - a, E = C.clientY - l;
      u = x * x + E * E > h;
    }
    o.mouse("drag", C);
  }
  function y(C) {
    sn(C.view).on("mousemove.drag mouseup.drag", null), ep(C.view, u), ho(C), o.mouse("end", C);
  }
  function w(C, x) {
    if (t.call(this, C, x)) {
      var E = C.changedTouches, V = e.call(this, C, x), H = E.length, I, A;
      for (I = 0; I < H; ++I)
        (A = O(this, V, C, x, E[I].identifier, E[I])) && (Ca(C), A("start", C, E[I]));
    }
  }
  function b(C) {
    var x = C.changedTouches, E = x.length, V, H;
    for (V = 0; V < E; ++V)
      (H = o[x[V].identifier]) && (ho(C), H("drag", C, x[V]));
  }
  function k(C) {
    var x = C.changedTouches, E = x.length, V, H;
    for (d && clearTimeout(d), d = setTimeout(function() {
      d = null;
    }, 500), V = 0; V < E; ++V)
      (H = o[x[V].identifier]) && (Ca(C), H("end", C, x[V]));
  }
  function O(C, x, E, V, H, I) {
    var A = i.copy(), D = dn(I || E, x), _, M, S;
    if ((S = n.call(C, new qa("beforestart", {
      sourceEvent: E,
      target: p,
      identifier: H,
      active: s,
      x: D[0],
      y: D[1],
      dx: 0,
      dy: 0,
      dispatch: A
    }), V)) != null)
      return _ = S.x - D[0] || 0, M = S.y - D[1] || 0, function P(z, B, q) {
        var U = D, N;
        switch (z) {
          case "start":
            o[H] = P, N = s++;
            break;
          case "end":
            delete o[H], --s;
          // falls through
          case "drag":
            D = dn(q || B, x), N = s;
            break;
        }
        A.call(
          z,
          C,
          new qa(z, {
            sourceEvent: B,
            subject: S,
            target: p,
            identifier: H,
            active: N,
            x: D[0] + _,
            y: D[1] + M,
            dx: D[0] - U[0],
            dy: D[1] - U[1],
            dispatch: A
          }),
          V
        );
      };
  }
  return p.filter = function(C) {
    return arguments.length ? (t = typeof C == "function" ? C : Di(!!C), p) : t;
  }, p.container = function(C) {
    return arguments.length ? (e = typeof C == "function" ? C : Di(C), p) : e;
  }, p.subject = function(C) {
    return arguments.length ? (n = typeof C == "function" ? C : Di(C), p) : n;
  }, p.touchable = function(C) {
    return arguments.length ? (r = typeof C == "function" ? C : Di(!!C), p) : r;
  }, p.on = function() {
    var C = i.on.apply(i, arguments);
    return C === i ? p : C;
  }, p.clickDistance = function(C) {
    return arguments.length ? (h = (C = +C) * C, p) : Math.sqrt(h);
  }, p;
}
function tu(t, e, n) {
  t.prototype = e.prototype = n, n.constructor = t;
}
function tp(t, e) {
  var n = Object.create(t.prototype);
  for (var r in e) n[r] = e[r];
  return n;
}
function wi() {
}
var ti = 0.7, ms = 1 / ti, po = "\\s*([+-]?\\d+)\\s*", ni = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Tn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", my = /^#([0-9a-f]{3,8})$/, yy = new RegExp(`^rgb\\(${po},${po},${po}\\)$`), wy = new RegExp(`^rgb\\(${Tn},${Tn},${Tn}\\)$`), by = new RegExp(`^rgba\\(${po},${po},${po},${ni}\\)$`), xy = new RegExp(`^rgba\\(${Tn},${Tn},${Tn},${ni}\\)$`), ky = new RegExp(`^hsl\\(${ni},${Tn},${Tn}\\)$`), Cy = new RegExp(`^hsla\\(${ni},${Tn},${Tn},${ni}\\)$`), pc = {
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
tu(wi, Xr, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: fc,
  // Deprecated! Use color.formatHex.
  formatHex: fc,
  formatHex8: $y,
  formatHsl: Sy,
  formatRgb: gc,
  toString: gc
});
function fc() {
  return this.rgb().formatHex();
}
function $y() {
  return this.rgb().formatHex8();
}
function Sy() {
  return np(this).formatHsl();
}
function gc() {
  return this.rgb().formatRgb();
}
function Xr(t) {
  var e, n;
  return t = (t + "").trim().toLowerCase(), (e = my.exec(t)) ? (n = e[1].length, e = parseInt(e[1], 16), n === 6 ? vc(e) : n === 3 ? new Ft(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : n === 8 ? Vi(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : n === 4 ? Vi(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = yy.exec(t)) ? new Ft(e[1], e[2], e[3], 1) : (e = wy.exec(t)) ? new Ft(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = by.exec(t)) ? Vi(e[1], e[2], e[3], e[4]) : (e = xy.exec(t)) ? Vi(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = ky.exec(t)) ? wc(e[1], e[2] / 100, e[3] / 100, 1) : (e = Cy.exec(t)) ? wc(e[1], e[2] / 100, e[3] / 100, e[4]) : pc.hasOwnProperty(t) ? vc(pc[t]) : t === "transparent" ? new Ft(NaN, NaN, NaN, 0) : null;
}
function vc(t) {
  return new Ft(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function Vi(t, e, n, r) {
  return r <= 0 && (t = e = n = NaN), new Ft(t, e, n, r);
}
function _y(t) {
  return t instanceof wi || (t = Xr(t)), t ? (t = t.rgb(), new Ft(t.r, t.g, t.b, t.opacity)) : new Ft();
}
function Ya(t, e, n, r) {
  return arguments.length === 1 ? _y(t) : new Ft(t, e, n, r ?? 1);
}
function Ft(t, e, n, r) {
  this.r = +t, this.g = +e, this.b = +n, this.opacity = +r;
}
tu(Ft, Ya, tp(wi, {
  brighter(t) {
    return t = t == null ? ms : Math.pow(ms, t), new Ft(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? ti : Math.pow(ti, t), new Ft(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Ft(Br(this.r), Br(this.g), Br(this.b), ys(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: mc,
  // Deprecated! Use color.formatHex.
  formatHex: mc,
  formatHex8: Oy,
  formatRgb: yc,
  toString: yc
}));
function mc() {
  return `#${Hr(this.r)}${Hr(this.g)}${Hr(this.b)}`;
}
function Oy() {
  return `#${Hr(this.r)}${Hr(this.g)}${Hr(this.b)}${Hr((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function yc() {
  const t = ys(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${Br(this.r)}, ${Br(this.g)}, ${Br(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function ys(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function Br(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function Hr(t) {
  return t = Br(t), (t < 16 ? "0" : "") + t.toString(16);
}
function wc(t, e, n, r) {
  return r <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new hn(t, e, n, r);
}
function np(t) {
  if (t instanceof hn) return new hn(t.h, t.s, t.l, t.opacity);
  if (t instanceof wi || (t = Xr(t)), !t) return new hn();
  if (t instanceof hn) return t;
  t = t.rgb();
  var e = t.r / 255, n = t.g / 255, r = t.b / 255, o = Math.min(e, n, r), i = Math.max(e, n, r), s = NaN, a = i - o, l = (i + o) / 2;
  return a ? (e === i ? s = (n - r) / a + (n < r) * 6 : n === i ? s = (r - e) / a + 2 : s = (e - n) / a + 4, a /= l < 0.5 ? i + o : 2 - i - o, s *= 60) : a = l > 0 && l < 1 ? 0 : s, new hn(s, a, l, t.opacity);
}
function Py(t, e, n, r) {
  return arguments.length === 1 ? np(t) : new hn(t, e, n, r ?? 1);
}
function hn(t, e, n, r) {
  this.h = +t, this.s = +e, this.l = +n, this.opacity = +r;
}
tu(hn, Py, tp(wi, {
  brighter(t) {
    return t = t == null ? ms : Math.pow(ms, t), new hn(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? ti : Math.pow(ti, t), new hn(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, e = isNaN(t) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * e, o = 2 * n - r;
    return new Ft(
      $a(t >= 240 ? t - 240 : t + 120, o, r),
      $a(t, o, r),
      $a(t < 120 ? t + 240 : t - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new hn(bc(this.h), Hi(this.s), Hi(this.l), ys(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = ys(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${bc(this.h)}, ${Hi(this.s) * 100}%, ${Hi(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function bc(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function Hi(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function $a(t, e, n) {
  return (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e) * 255;
}
const nu = (t) => () => t;
function Ey(t, e) {
  return function(n) {
    return t + n * e;
  };
}
function Ny(t, e, n) {
  return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function(r) {
    return Math.pow(t + r * e, n);
  };
}
function zy(t) {
  return (t = +t) == 1 ? rp : function(e, n) {
    return n - e ? Ny(e, n, t) : nu(isNaN(e) ? n : e);
  };
}
function rp(t, e) {
  var n = e - t;
  return n ? Ey(t, n) : nu(isNaN(t) ? e : t);
}
const ws = function t(e) {
  var n = zy(e);
  function r(o, i) {
    var s = n((o = Ya(o)).r, (i = Ya(i)).r), a = n(o.g, i.g), l = n(o.b, i.b), u = rp(o.opacity, i.opacity);
    return function(d) {
      return o.r = s(d), o.g = a(d), o.b = l(d), o.opacity = u(d), o + "";
    };
  }
  return r.gamma = t, r;
}(1);
function My(t, e) {
  e || (e = []);
  var n = t ? Math.min(e.length, t.length) : 0, r = e.slice(), o;
  return function(i) {
    for (o = 0; o < n; ++o) r[o] = t[o] * (1 - i) + e[o] * i;
    return r;
  };
}
function Ty(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function Ay(t, e) {
  var n = e ? e.length : 0, r = t ? Math.min(n, t.length) : 0, o = new Array(r), i = new Array(n), s;
  for (s = 0; s < r; ++s) o[s] = qo(t[s], e[s]);
  for (; s < n; ++s) i[s] = e[s];
  return function(a) {
    for (s = 0; s < r; ++s) i[s] = o[s](a);
    return i;
  };
}
function Dy(t, e) {
  var n = /* @__PURE__ */ new Date();
  return t = +t, e = +e, function(r) {
    return n.setTime(t * (1 - r) + e * r), n;
  };
}
function _n(t, e) {
  return t = +t, e = +e, function(n) {
    return t * (1 - n) + e * n;
  };
}
function Vy(t, e) {
  var n = {}, r = {}, o;
  (t === null || typeof t != "object") && (t = {}), (e === null || typeof e != "object") && (e = {});
  for (o in e)
    o in t ? n[o] = qo(t[o], e[o]) : r[o] = e[o];
  return function(i) {
    for (o in n) r[o] = n[o](i);
    return r;
  };
}
var Ua = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Sa = new RegExp(Ua.source, "g");
function Hy(t) {
  return function() {
    return t;
  };
}
function Ly(t) {
  return function(e) {
    return t(e) + "";
  };
}
function op(t, e) {
  var n = Ua.lastIndex = Sa.lastIndex = 0, r, o, i, s = -1, a = [], l = [];
  for (t = t + "", e = e + ""; (r = Ua.exec(t)) && (o = Sa.exec(e)); )
    (i = o.index) > n && (i = e.slice(n, i), a[s] ? a[s] += i : a[++s] = i), (r = r[0]) === (o = o[0]) ? a[s] ? a[s] += o : a[++s] = o : (a[++s] = null, l.push({ i: s, x: _n(r, o) })), n = Sa.lastIndex;
  return n < e.length && (i = e.slice(n), a[s] ? a[s] += i : a[++s] = i), a.length < 2 ? l[0] ? Ly(l[0].x) : Hy(e) : (e = l.length, function(u) {
    for (var d = 0, h; d < e; ++d) a[(h = l[d]).i] = h.x(u);
    return a.join("");
  });
}
function qo(t, e) {
  var n = typeof e, r;
  return e == null || n === "boolean" ? nu(e) : (n === "number" ? _n : n === "string" ? (r = Xr(e)) ? (e = r, ws) : op : e instanceof Xr ? ws : e instanceof Date ? Dy : Ty(e) ? My : Array.isArray(e) ? Ay : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? Vy : _n)(t, e);
}
var xc = 180 / Math.PI, ip = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function sp(t, e, n, r, o, i) {
  var s, a, l;
  return (s = Math.sqrt(t * t + e * e)) && (t /= s, e /= s), (l = t * n + e * r) && (n -= t * l, r -= e * l), (a = Math.sqrt(n * n + r * r)) && (n /= a, r /= a, l /= a), t * r < e * n && (t = -t, e = -e, l = -l, s = -s), {
    translateX: o,
    translateY: i,
    rotate: Math.atan2(e, t) * xc,
    skewX: Math.atan(l) * xc,
    scaleX: s,
    scaleY: a
  };
}
var Li;
function Iy(t) {
  const e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return e.isIdentity ? ip : sp(e.a, e.b, e.c, e.d, e.e, e.f);
}
function Ry(t) {
  return t == null || (Li || (Li = document.createElementNS("http://www.w3.org/2000/svg", "g")), Li.setAttribute("transform", t), !(t = Li.transform.baseVal.consolidate())) ? ip : (t = t.matrix, sp(t.a, t.b, t.c, t.d, t.e, t.f));
}
function ap(t, e, n, r) {
  function o(u) {
    return u.length ? u.pop() + " " : "";
  }
  function i(u, d, h, p, v, m) {
    if (u !== h || d !== p) {
      var y = v.push("translate(", null, e, null, n);
      m.push({ i: y - 4, x: _n(u, h) }, { i: y - 2, x: _n(d, p) });
    } else (h || p) && v.push("translate(" + h + e + p + n);
  }
  function s(u, d, h, p) {
    u !== d ? (u - d > 180 ? d += 360 : d - u > 180 && (u += 360), p.push({ i: h.push(o(h) + "rotate(", null, r) - 2, x: _n(u, d) })) : d && h.push(o(h) + "rotate(" + d + r);
  }
  function a(u, d, h, p) {
    u !== d ? p.push({ i: h.push(o(h) + "skewX(", null, r) - 2, x: _n(u, d) }) : d && h.push(o(h) + "skewX(" + d + r);
  }
  function l(u, d, h, p, v, m) {
    if (u !== h || d !== p) {
      var y = v.push(o(v) + "scale(", null, ",", null, ")");
      m.push({ i: y - 4, x: _n(u, h) }, { i: y - 2, x: _n(d, p) });
    } else (h !== 1 || p !== 1) && v.push(o(v) + "scale(" + h + "," + p + ")");
  }
  return function(u, d) {
    var h = [], p = [];
    return u = t(u), d = t(d), i(u.translateX, u.translateY, d.translateX, d.translateY, h, p), s(u.rotate, d.rotate, h, p), a(u.skewX, d.skewX, h, p), l(u.scaleX, u.scaleY, d.scaleX, d.scaleY, h, p), u = d = null, function(v) {
      for (var m = -1, y = p.length, w; ++m < y; ) h[(w = p[m]).i] = w.x(v);
      return h.join("");
    };
  };
}
var By = ap(Iy, "px, ", "px)", "deg)"), jy = ap(Ry, ", ", ")", ")"), Ky = 1e-12;
function kc(t) {
  return ((t = Math.exp(t)) + 1 / t) / 2;
}
function Fy(t) {
  return ((t = Math.exp(t)) - 1 / t) / 2;
}
function Zy(t) {
  return ((t = Math.exp(2 * t)) - 1) / (t + 1);
}
const es = function t(e, n, r) {
  function o(i, s) {
    var a = i[0], l = i[1], u = i[2], d = s[0], h = s[1], p = s[2], v = d - a, m = h - l, y = v * v + m * m, w, b;
    if (y < Ky)
      b = Math.log(p / u) / e, w = function(V) {
        return [
          a + V * v,
          l + V * m,
          u * Math.exp(e * V * b)
        ];
      };
    else {
      var k = Math.sqrt(y), O = (p * p - u * u + r * y) / (2 * u * n * k), C = (p * p - u * u - r * y) / (2 * p * n * k), x = Math.log(Math.sqrt(O * O + 1) - O), E = Math.log(Math.sqrt(C * C + 1) - C);
      b = (E - x) / e, w = function(V) {
        var H = V * b, I = kc(x), A = u / (n * k) * (I * Zy(e * H + x) - Fy(x));
        return [
          a + A * v,
          l + A * m,
          u * I / kc(e * H + x)
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
var wo = 0, Ro = 0, Ao = 0, lp = 1e3, bs, Bo, xs = 0, qr = 0, sa = 0, ri = typeof performance == "object" && performance.now ? performance : Date, up = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function ru() {
  return qr || (up(Wy), qr = ri.now() + sa);
}
function Wy() {
  qr = 0;
}
function ks() {
  this._call = this._time = this._next = null;
}
ks.prototype = cp.prototype = {
  constructor: ks,
  restart: function(t, e, n) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    n = (n == null ? ru() : +n) + (e == null ? 0 : +e), !this._next && Bo !== this && (Bo ? Bo._next = this : bs = this, Bo = this), this._call = t, this._time = n, Ga();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Ga());
  }
};
function cp(t, e, n) {
  var r = new ks();
  return r.restart(t, e, n), r;
}
function Xy() {
  ru(), ++wo;
  for (var t = bs, e; t; )
    (e = qr - t._time) >= 0 && t._call.call(void 0, e), t = t._next;
  --wo;
}
function Cc() {
  qr = (xs = ri.now()) + sa, wo = Ro = 0;
  try {
    Xy();
  } finally {
    wo = 0, Yy(), qr = 0;
  }
}
function qy() {
  var t = ri.now(), e = t - xs;
  e > lp && (sa -= e, xs = t);
}
function Yy() {
  for (var t, e = bs, n, r = 1 / 0; e; )
    e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : bs = n);
  Bo = t, Ga(r);
}
function Ga(t) {
  if (!wo) {
    Ro && (Ro = clearTimeout(Ro));
    var e = t - qr;
    e > 24 ? (t < 1 / 0 && (Ro = setTimeout(Cc, t - ri.now() - sa)), Ao && (Ao = clearInterval(Ao))) : (Ao || (xs = ri.now(), Ao = setInterval(qy, lp)), wo = 1, up(Cc));
  }
}
function $c(t, e, n) {
  var r = new ks();
  return e = e == null ? 0 : +e, r.restart((o) => {
    r.stop(), t(o + e);
  }, e, n), r;
}
var Uy = oa("start", "end", "cancel", "interrupt"), Gy = [], dp = 0, Sc = 1, Ja = 2, ts = 3, _c = 4, Qa = 5, ns = 6;
function aa(t, e, n, r, o, i) {
  var s = t.__transition;
  if (!s) t.__transition = {};
  else if (n in s) return;
  Jy(t, n, {
    name: e,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: Uy,
    tween: Gy,
    time: i.time,
    delay: i.delay,
    duration: i.duration,
    ease: i.ease,
    timer: null,
    state: dp
  });
}
function ou(t, e) {
  var n = kn(t, e);
  if (n.state > dp) throw new Error("too late; already scheduled");
  return n;
}
function Rn(t, e) {
  var n = kn(t, e);
  if (n.state > ts) throw new Error("too late; already running");
  return n;
}
function kn(t, e) {
  var n = t.__transition;
  if (!n || !(n = n[e])) throw new Error("transition not found");
  return n;
}
function Jy(t, e, n) {
  var r = t.__transition, o;
  r[e] = n, n.timer = cp(i, 0, n.time);
  function i(u) {
    n.state = Sc, n.timer.restart(s, n.delay, n.time), n.delay <= u && s(u - n.delay);
  }
  function s(u) {
    var d, h, p, v;
    if (n.state !== Sc) return l();
    for (d in r)
      if (v = r[d], v.name === n.name) {
        if (v.state === ts) return $c(s);
        v.state === _c ? (v.state = ns, v.timer.stop(), v.on.call("interrupt", t, t.__data__, v.index, v.group), delete r[d]) : +d < e && (v.state = ns, v.timer.stop(), v.on.call("cancel", t, t.__data__, v.index, v.group), delete r[d]);
      }
    if ($c(function() {
      n.state === ts && (n.state = _c, n.timer.restart(a, n.delay, n.time), a(u));
    }), n.state = Ja, n.on.call("start", t, t.__data__, n.index, n.group), n.state === Ja) {
      for (n.state = ts, o = new Array(p = n.tween.length), d = 0, h = -1; d < p; ++d)
        (v = n.tween[d].value.call(t, t.__data__, n.index, n.group)) && (o[++h] = v);
      o.length = h + 1;
    }
  }
  function a(u) {
    for (var d = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), n.state = Qa, 1), h = -1, p = o.length; ++h < p; )
      o[h].call(t, d);
    n.state === Qa && (n.on.call("end", t, t.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = ns, n.timer.stop(), delete r[e];
    for (var u in r) return;
    delete t.__transition;
  }
}
function rs(t, e) {
  var n = t.__transition, r, o, i = !0, s;
  if (n) {
    e = e == null ? null : e + "";
    for (s in n) {
      if ((r = n[s]).name !== e) {
        i = !1;
        continue;
      }
      o = r.state > Ja && r.state < Qa, r.state = ns, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete n[s];
    }
    i && delete t.__transition;
  }
}
function Qy(t) {
  return this.each(function() {
    rs(this, t);
  });
}
function ew(t, e) {
  var n, r;
  return function() {
    var o = Rn(this, t), i = o.tween;
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
function tw(t, e, n) {
  var r, o;
  if (typeof n != "function") throw new Error();
  return function() {
    var i = Rn(this, t), s = i.tween;
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
function nw(t, e) {
  var n = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = kn(this.node(), n).tween, o = 0, i = r.length, s; o < i; ++o)
      if ((s = r[o]).name === t)
        return s.value;
    return null;
  }
  return this.each((e == null ? ew : tw)(n, t, e));
}
function iu(t, e, n) {
  var r = t._id;
  return t.each(function() {
    var o = Rn(this, r);
    (o.value || (o.value = {}))[e] = n.apply(this, arguments);
  }), function(o) {
    return kn(o, r).value[e];
  };
}
function hp(t, e) {
  var n;
  return (typeof e == "number" ? _n : e instanceof Xr ? ws : (n = Xr(e)) ? (e = n, ws) : op)(t, e);
}
function rw(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function ow(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function iw(t, e, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttribute(t);
    return s === o ? null : s === r ? i : i = e(r = s, n);
  };
}
function sw(t, e, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttributeNS(t.space, t.local);
    return s === o ? null : s === r ? i : i = e(r = s, n);
  };
}
function aw(t, e, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttribute(t) : (s = this.getAttribute(t), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = e(r = s, a)));
  };
}
function lw(t, e, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttributeNS(t.space, t.local) : (s = this.getAttributeNS(t.space, t.local), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = e(r = s, a)));
  };
}
function uw(t, e) {
  var n = ia(t), r = n === "transform" ? jy : hp;
  return this.attrTween(t, typeof e == "function" ? (n.local ? lw : aw)(n, r, iu(this, "attr." + t, e)) : e == null ? (n.local ? ow : rw)(n) : (n.local ? sw : iw)(n, r, e));
}
function cw(t, e) {
  return function(n) {
    this.setAttribute(t, e.call(this, n));
  };
}
function dw(t, e) {
  return function(n) {
    this.setAttributeNS(t.space, t.local, e.call(this, n));
  };
}
function hw(t, e) {
  var n, r;
  function o() {
    var i = e.apply(this, arguments);
    return i !== r && (n = (r = i) && dw(t, i)), n;
  }
  return o._value = e, o;
}
function pw(t, e) {
  var n, r;
  function o() {
    var i = e.apply(this, arguments);
    return i !== r && (n = (r = i) && cw(t, i)), n;
  }
  return o._value = e, o;
}
function fw(t, e) {
  var n = "attr." + t;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (e == null) return this.tween(n, null);
  if (typeof e != "function") throw new Error();
  var r = ia(t);
  return this.tween(n, (r.local ? hw : pw)(r, e));
}
function gw(t, e) {
  return function() {
    ou(this, t).delay = +e.apply(this, arguments);
  };
}
function vw(t, e) {
  return e = +e, function() {
    ou(this, t).delay = e;
  };
}
function mw(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? gw : vw)(e, t)) : kn(this.node(), e).delay;
}
function yw(t, e) {
  return function() {
    Rn(this, t).duration = +e.apply(this, arguments);
  };
}
function ww(t, e) {
  return e = +e, function() {
    Rn(this, t).duration = e;
  };
}
function bw(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? yw : ww)(e, t)) : kn(this.node(), e).duration;
}
function xw(t, e) {
  if (typeof e != "function") throw new Error();
  return function() {
    Rn(this, t).ease = e;
  };
}
function kw(t) {
  var e = this._id;
  return arguments.length ? this.each(xw(e, t)) : kn(this.node(), e).ease;
}
function Cw(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    Rn(this, t).ease = n;
  };
}
function $w(t) {
  if (typeof t != "function") throw new Error();
  return this.each(Cw(this._id, t));
}
function Sw(t) {
  typeof t != "function" && (t = Kh(t));
  for (var e = this._groups, n = e.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = e[o], s = i.length, a = r[o] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && t.call(l, l.__data__, u, i) && a.push(l);
  return new rr(r, this._parents, this._name, this._id);
}
function _w(t) {
  if (t._id !== this._id) throw new Error();
  for (var e = this._groups, n = t._groups, r = e.length, o = n.length, i = Math.min(r, o), s = new Array(r), a = 0; a < i; ++a)
    for (var l = e[a], u = n[a], d = l.length, h = s[a] = new Array(d), p, v = 0; v < d; ++v)
      (p = l[v] || u[v]) && (h[v] = p);
  for (; a < r; ++a)
    s[a] = e[a];
  return new rr(s, this._parents, this._name, this._id);
}
function Ow(t) {
  return (t + "").trim().split(/^|\s+/).every(function(e) {
    var n = e.indexOf(".");
    return n >= 0 && (e = e.slice(0, n)), !e || e === "start";
  });
}
function Pw(t, e, n) {
  var r, o, i = Ow(e) ? ou : Rn;
  return function() {
    var s = i(this, t), a = s.on;
    a !== r && (o = (r = a).copy()).on(e, n), s.on = o;
  };
}
function Ew(t, e) {
  var n = this._id;
  return arguments.length < 2 ? kn(this.node(), n).on.on(t) : this.each(Pw(n, t, e));
}
function Nw(t) {
  return function() {
    var e = this.parentNode;
    for (var n in this.__transition) if (+n !== t) return;
    e && e.removeChild(this);
  };
}
function zw() {
  return this.on("end.remove", Nw(this._id));
}
function Mw(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = Ql(t));
  for (var r = this._groups, o = r.length, i = new Array(o), s = 0; s < o; ++s)
    for (var a = r[s], l = a.length, u = i[s] = new Array(l), d, h, p = 0; p < l; ++p)
      (d = a[p]) && (h = t.call(d, d.__data__, p, a)) && ("__data__" in d && (h.__data__ = d.__data__), u[p] = h, aa(u[p], e, n, p, u, kn(d, n)));
  return new rr(i, this._parents, e, n);
}
function Tw(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = jh(t));
  for (var r = this._groups, o = r.length, i = [], s = [], a = 0; a < o; ++a)
    for (var l = r[a], u = l.length, d, h = 0; h < u; ++h)
      if (d = l[h]) {
        for (var p = t.call(d, d.__data__, h, l), v, m = kn(d, n), y = 0, w = p.length; y < w; ++y)
          (v = p[y]) && aa(v, e, n, y, p, m);
        i.push(p), s.push(d);
      }
  return new rr(i, s, e, n);
}
var Aw = yi.prototype.constructor;
function Dw() {
  return new Aw(this._groups, this._parents);
}
function Vw(t, e) {
  var n, r, o;
  return function() {
    var i = yo(this, t), s = (this.style.removeProperty(t), yo(this, t));
    return i === s ? null : i === n && s === r ? o : o = e(n = i, r = s);
  };
}
function pp(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Hw(t, e, n) {
  var r, o = n + "", i;
  return function() {
    var s = yo(this, t);
    return s === o ? null : s === r ? i : i = e(r = s, n);
  };
}
function Lw(t, e, n) {
  var r, o, i;
  return function() {
    var s = yo(this, t), a = n(this), l = a + "";
    return a == null && (l = a = (this.style.removeProperty(t), yo(this, t))), s === l ? null : s === r && l === o ? i : (o = l, i = e(r = s, a));
  };
}
function Iw(t, e) {
  var n, r, o, i = "style." + e, s = "end." + i, a;
  return function() {
    var l = Rn(this, t), u = l.on, d = l.value[i] == null ? a || (a = pp(e)) : void 0;
    (u !== n || o !== d) && (r = (n = u).copy()).on(s, o = d), l.on = r;
  };
}
function Rw(t, e, n) {
  var r = (t += "") == "transform" ? By : hp;
  return e == null ? this.styleTween(t, Vw(t, r)).on("end.style." + t, pp(t)) : typeof e == "function" ? this.styleTween(t, Lw(t, r, iu(this, "style." + t, e))).each(Iw(this._id, t)) : this.styleTween(t, Hw(t, r, e), n).on("end.style." + t, null);
}
function Bw(t, e, n) {
  return function(r) {
    this.style.setProperty(t, e.call(this, r), n);
  };
}
function jw(t, e, n) {
  var r, o;
  function i() {
    var s = e.apply(this, arguments);
    return s !== o && (r = (o = s) && Bw(t, s, n)), r;
  }
  return i._value = e, i;
}
function Kw(t, e, n) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (e == null) return this.tween(r, null);
  if (typeof e != "function") throw new Error();
  return this.tween(r, jw(t, e, n ?? ""));
}
function Fw(t) {
  return function() {
    this.textContent = t;
  };
}
function Zw(t) {
  return function() {
    var e = t(this);
    this.textContent = e ?? "";
  };
}
function Ww(t) {
  return this.tween("text", typeof t == "function" ? Zw(iu(this, "text", t)) : Fw(t == null ? "" : t + ""));
}
function Xw(t) {
  return function(e) {
    this.textContent = t.call(this, e);
  };
}
function qw(t) {
  var e, n;
  function r() {
    var o = t.apply(this, arguments);
    return o !== n && (e = (n = o) && Xw(o)), e;
  }
  return r._value = t, r;
}
function Yw(t) {
  var e = "text";
  if (arguments.length < 1) return (e = this.tween(e)) && e._value;
  if (t == null) return this.tween(e, null);
  if (typeof t != "function") throw new Error();
  return this.tween(e, qw(t));
}
function Uw() {
  for (var t = this._name, e = this._id, n = fp(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, u = 0; u < a; ++u)
      if (l = s[u]) {
        var d = kn(l, e);
        aa(l, t, n, u, s, {
          time: d.time + d.delay + d.duration,
          delay: 0,
          duration: d.duration,
          ease: d.ease
        });
      }
  return new rr(r, this._parents, t, n);
}
function Gw() {
  var t, e, n = this, r = n._id, o = n.size();
  return new Promise(function(i, s) {
    var a = { value: s }, l = { value: function() {
      --o === 0 && i();
    } };
    n.each(function() {
      var u = Rn(this, r), d = u.on;
      d !== t && (e = (t = d).copy(), e._.cancel.push(a), e._.interrupt.push(a), e._.end.push(l)), u.on = e;
    }), o === 0 && i();
  });
}
var Jw = 0;
function rr(t, e, n, r) {
  this._groups = t, this._parents = e, this._name = n, this._id = r;
}
function fp() {
  return ++Jw;
}
var jn = yi.prototype;
rr.prototype = {
  constructor: rr,
  select: Mw,
  selectAll: Tw,
  selectChild: jn.selectChild,
  selectChildren: jn.selectChildren,
  filter: Sw,
  merge: _w,
  selection: Dw,
  transition: Uw,
  call: jn.call,
  nodes: jn.nodes,
  node: jn.node,
  size: jn.size,
  empty: jn.empty,
  each: jn.each,
  on: Ew,
  attr: uw,
  attrTween: fw,
  style: Rw,
  styleTween: Kw,
  text: Ww,
  textTween: Yw,
  remove: zw,
  tween: nw,
  delay: mw,
  duration: bw,
  ease: kw,
  easeVarying: $w,
  end: Gw,
  [Symbol.iterator]: jn[Symbol.iterator]
};
function Qw(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var eb = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Qw
};
function tb(t, e) {
  for (var n; !(n = t.__transition) || !(n = n[e]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${e} not found`);
  return n;
}
function nb(t) {
  var e, n;
  t instanceof rr ? (e = t._id, t = t._name) : (e = fp(), (n = eb).time = ru(), t = t == null ? null : t + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && aa(l, t, e, u, s, n || tb(l, e));
  return new rr(r, this._parents, t, e);
}
yi.prototype.interrupt = Qy;
yi.prototype.transition = nb;
const Ii = (t) => () => t;
function rb(t, {
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
function Xn(t, e, n) {
  this.k = t, this.x = e, this.y = n;
}
Xn.prototype = {
  constructor: Xn,
  scale: function(t) {
    return t === 1 ? this : new Xn(this.k * t, this.x, this.y);
  },
  translate: function(t, e) {
    return t === 0 & e === 0 ? this : new Xn(this.k, this.x + this.k * t, this.y + this.k * e);
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
var la = new Xn(1, 0, 0);
gp.prototype = Xn.prototype;
function gp(t) {
  for (; !t.__zoom; ) if (!(t = t.parentNode)) return la;
  return t.__zoom;
}
function _a(t) {
  t.stopImmediatePropagation();
}
function Do(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function ob(t) {
  return (!t.ctrlKey || t.type === "wheel") && !t.button;
}
function ib() {
  var t = this;
  return t instanceof SVGElement ? (t = t.ownerSVGElement || t, t.hasAttribute("viewBox") ? (t = t.viewBox.baseVal, [[t.x, t.y], [t.x + t.width, t.y + t.height]]) : [[0, 0], [t.width.baseVal.value, t.height.baseVal.value]]) : [[0, 0], [t.clientWidth, t.clientHeight]];
}
function Oc() {
  return this.__zoom || la;
}
function sb(t) {
  return -t.deltaY * (t.deltaMode === 1 ? 0.05 : t.deltaMode ? 1 : 2e-3) * (t.ctrlKey ? 10 : 1);
}
function ab() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function lb(t, e, n) {
  var r = t.invertX(e[0][0]) - n[0][0], o = t.invertX(e[1][0]) - n[1][0], i = t.invertY(e[0][1]) - n[0][1], s = t.invertY(e[1][1]) - n[1][1];
  return t.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    s > i ? (i + s) / 2 : Math.min(0, i) || Math.max(0, s)
  );
}
function vp() {
  var t = ob, e = ib, n = lb, r = sb, o = ab, i = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], a = 250, l = es, u = oa("start", "zoom", "end"), d, h, p, v = 500, m = 150, y = 0, w = 10;
  function b(S) {
    S.property("__zoom", Oc).on("wheel.zoom", H, { passive: !1 }).on("mousedown.zoom", I).on("dblclick.zoom", A).filter(o).on("touchstart.zoom", D).on("touchmove.zoom", _).on("touchend.zoom touchcancel.zoom", M).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  b.transform = function(S, P, z, B) {
    var q = S.selection ? S.selection() : S;
    q.property("__zoom", Oc), S !== q ? x(S, P, z, B) : q.interrupt().each(function() {
      E(this, arguments).event(B).start().zoom(null, typeof P == "function" ? P.apply(this, arguments) : P).end();
    });
  }, b.scaleBy = function(S, P, z, B) {
    b.scaleTo(S, function() {
      var q = this.__zoom.k, U = typeof P == "function" ? P.apply(this, arguments) : P;
      return q * U;
    }, z, B);
  }, b.scaleTo = function(S, P, z, B) {
    b.transform(S, function() {
      var q = e.apply(this, arguments), U = this.__zoom, N = z == null ? C(q) : typeof z == "function" ? z.apply(this, arguments) : z, Y = U.invert(N), ee = typeof P == "function" ? P.apply(this, arguments) : P;
      return n(O(k(U, ee), N, Y), q, s);
    }, z, B);
  }, b.translateBy = function(S, P, z, B) {
    b.transform(S, function() {
      return n(this.__zoom.translate(
        typeof P == "function" ? P.apply(this, arguments) : P,
        typeof z == "function" ? z.apply(this, arguments) : z
      ), e.apply(this, arguments), s);
    }, null, B);
  }, b.translateTo = function(S, P, z, B, q) {
    b.transform(S, function() {
      var U = e.apply(this, arguments), N = this.__zoom, Y = B == null ? C(U) : typeof B == "function" ? B.apply(this, arguments) : B;
      return n(la.translate(Y[0], Y[1]).scale(N.k).translate(
        typeof P == "function" ? -P.apply(this, arguments) : -P,
        typeof z == "function" ? -z.apply(this, arguments) : -z
      ), U, s);
    }, B, q);
  };
  function k(S, P) {
    return P = Math.max(i[0], Math.min(i[1], P)), P === S.k ? S : new Xn(P, S.x, S.y);
  }
  function O(S, P, z) {
    var B = P[0] - z[0] * S.k, q = P[1] - z[1] * S.k;
    return B === S.x && q === S.y ? S : new Xn(S.k, B, q);
  }
  function C(S) {
    return [(+S[0][0] + +S[1][0]) / 2, (+S[0][1] + +S[1][1]) / 2];
  }
  function x(S, P, z, B) {
    S.on("start.zoom", function() {
      E(this, arguments).event(B).start();
    }).on("interrupt.zoom end.zoom", function() {
      E(this, arguments).event(B).end();
    }).tween("zoom", function() {
      var q = this, U = arguments, N = E(q, U).event(B), Y = e.apply(q, U), ee = z == null ? C(Y) : typeof z == "function" ? z.apply(q, U) : z, j = Math.max(Y[1][0] - Y[0][0], Y[1][1] - Y[0][1]), F = q.__zoom, W = typeof P == "function" ? P.apply(q, U) : P, G = l(F.invert(ee).concat(j / F.k), W.invert(ee).concat(j / W.k));
      return function(re) {
        if (re === 1) re = W;
        else {
          var L = G(re), te = j / L[2];
          re = new Xn(te, ee[0] - L[0] * te, ee[1] - L[1] * te);
        }
        N.zoom(null, re);
      };
    });
  }
  function E(S, P, z) {
    return !z && S.__zooming || new V(S, P);
  }
  function V(S, P) {
    this.that = S, this.args = P, this.active = 0, this.sourceEvent = null, this.extent = e.apply(S, P), this.taps = 0;
  }
  V.prototype = {
    event: function(S) {
      return S && (this.sourceEvent = S), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(S, P) {
      return this.mouse && S !== "mouse" && (this.mouse[1] = P.invert(this.mouse[0])), this.touch0 && S !== "touch" && (this.touch0[1] = P.invert(this.touch0[0])), this.touch1 && S !== "touch" && (this.touch1[1] = P.invert(this.touch1[0])), this.that.__zoom = P, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(S) {
      var P = sn(this.that).datum();
      u.call(
        S,
        this.that,
        new rb(S, {
          sourceEvent: this.sourceEvent,
          target: b,
          transform: this.that.__zoom,
          dispatch: u
        }),
        P
      );
    }
  };
  function H(S, ...P) {
    if (!t.apply(this, arguments)) return;
    var z = E(this, P).event(S), B = this.__zoom, q = Math.max(i[0], Math.min(i[1], B.k * Math.pow(2, r.apply(this, arguments)))), U = dn(S);
    if (z.wheel)
      (z.mouse[0][0] !== U[0] || z.mouse[0][1] !== U[1]) && (z.mouse[1] = B.invert(z.mouse[0] = U)), clearTimeout(z.wheel);
    else {
      if (B.k === q) return;
      z.mouse = [U, B.invert(U)], rs(this), z.start();
    }
    Do(S), z.wheel = setTimeout(N, m), z.zoom("mouse", n(O(k(B, q), z.mouse[0], z.mouse[1]), z.extent, s));
    function N() {
      z.wheel = null, z.end();
    }
  }
  function I(S, ...P) {
    if (p || !t.apply(this, arguments)) return;
    var z = S.currentTarget, B = E(this, P, !0).event(S), q = sn(S.view).on("mousemove.zoom", ee, !0).on("mouseup.zoom", j, !0), U = dn(S, z), N = S.clientX, Y = S.clientY;
    Qh(S.view), _a(S), B.mouse = [U, this.__zoom.invert(U)], rs(this), B.start();
    function ee(F) {
      if (Do(F), !B.moved) {
        var W = F.clientX - N, G = F.clientY - Y;
        B.moved = W * W + G * G > y;
      }
      B.event(F).zoom("mouse", n(O(B.that.__zoom, B.mouse[0] = dn(F, z), B.mouse[1]), B.extent, s));
    }
    function j(F) {
      q.on("mousemove.zoom mouseup.zoom", null), ep(F.view, B.moved), Do(F), B.event(F).end();
    }
  }
  function A(S, ...P) {
    if (t.apply(this, arguments)) {
      var z = this.__zoom, B = dn(S.changedTouches ? S.changedTouches[0] : S, this), q = z.invert(B), U = z.k * (S.shiftKey ? 0.5 : 2), N = n(O(k(z, U), B, q), e.apply(this, P), s);
      Do(S), a > 0 ? sn(this).transition().duration(a).call(x, N, B, S) : sn(this).call(b.transform, N, B, S);
    }
  }
  function D(S, ...P) {
    if (t.apply(this, arguments)) {
      var z = S.touches, B = z.length, q = E(this, P, S.changedTouches.length === B).event(S), U, N, Y, ee;
      for (_a(S), N = 0; N < B; ++N)
        Y = z[N], ee = dn(Y, this), ee = [ee, this.__zoom.invert(ee), Y.identifier], q.touch0 ? !q.touch1 && q.touch0[2] !== ee[2] && (q.touch1 = ee, q.taps = 0) : (q.touch0 = ee, U = !0, q.taps = 1 + !!d);
      d && (d = clearTimeout(d)), U && (q.taps < 2 && (h = ee[0], d = setTimeout(function() {
        d = null;
      }, v)), rs(this), q.start());
    }
  }
  function _(S, ...P) {
    if (this.__zooming) {
      var z = E(this, P).event(S), B = S.changedTouches, q = B.length, U, N, Y, ee;
      for (Do(S), U = 0; U < q; ++U)
        N = B[U], Y = dn(N, this), z.touch0 && z.touch0[2] === N.identifier ? z.touch0[0] = Y : z.touch1 && z.touch1[2] === N.identifier && (z.touch1[0] = Y);
      if (N = z.that.__zoom, z.touch1) {
        var j = z.touch0[0], F = z.touch0[1], W = z.touch1[0], G = z.touch1[1], re = (re = W[0] - j[0]) * re + (re = W[1] - j[1]) * re, L = (L = G[0] - F[0]) * L + (L = G[1] - F[1]) * L;
        N = k(N, Math.sqrt(re / L)), Y = [(j[0] + W[0]) / 2, (j[1] + W[1]) / 2], ee = [(F[0] + G[0]) / 2, (F[1] + G[1]) / 2];
      } else if (z.touch0) Y = z.touch0[0], ee = z.touch0[1];
      else return;
      z.zoom("touch", n(O(N, Y, ee), z.extent, s));
    }
  }
  function M(S, ...P) {
    if (this.__zooming) {
      var z = E(this, P).event(S), B = S.changedTouches, q = B.length, U, N;
      for (_a(S), p && clearTimeout(p), p = setTimeout(function() {
        p = null;
      }, v), U = 0; U < q; ++U)
        N = B[U], z.touch0 && z.touch0[2] === N.identifier ? delete z.touch0 : z.touch1 && z.touch1[2] === N.identifier && delete z.touch1;
      if (z.touch1 && !z.touch0 && (z.touch0 = z.touch1, delete z.touch1), z.touch0) z.touch0[1] = this.__zoom.invert(z.touch0[0]);
      else if (z.end(), z.taps === 2 && (N = dn(N, this), Math.hypot(h[0] - N[0], h[1] - N[1]) < w)) {
        var Y = sn(this).on("dblclick.zoom");
        Y && Y.apply(this, arguments);
      }
    }
  }
  return b.wheelDelta = function(S) {
    return arguments.length ? (r = typeof S == "function" ? S : Ii(+S), b) : r;
  }, b.filter = function(S) {
    return arguments.length ? (t = typeof S == "function" ? S : Ii(!!S), b) : t;
  }, b.touchable = function(S) {
    return arguments.length ? (o = typeof S == "function" ? S : Ii(!!S), b) : o;
  }, b.extent = function(S) {
    return arguments.length ? (e = typeof S == "function" ? S : Ii([[+S[0][0], +S[0][1]], [+S[1][0], +S[1][1]]]), b) : e;
  }, b.scaleExtent = function(S) {
    return arguments.length ? (i[0] = +S[0], i[1] = +S[1], b) : [i[0], i[1]];
  }, b.translateExtent = function(S) {
    return arguments.length ? (s[0][0] = +S[0][0], s[1][0] = +S[1][0], s[0][1] = +S[0][1], s[1][1] = +S[1][1], b) : [[s[0][0], s[0][1]], [s[1][0], s[1][1]]];
  }, b.constrain = function(S) {
    return arguments.length ? (n = S, b) : n;
  }, b.duration = function(S) {
    return arguments.length ? (a = +S, b) : a;
  }, b.interpolate = function(S) {
    return arguments.length ? (l = S, b) : l;
  }, b.on = function() {
    var S = u.on.apply(u, arguments);
    return S === u ? b : S;
  }, b.clickDistance = function(S) {
    return arguments.length ? (y = (S = +S) * S, b) : Math.sqrt(y);
  }, b.tapDistance = function(S) {
    return arguments.length ? (w = +S, b) : w;
  }, b;
}
const oi = {
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
}, el = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
], mp = ["Enter", " ", "Escape"], ub = {
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
var bo;
(function(t) {
  t.Strict = "strict", t.Loose = "loose";
})(bo || (bo = {}));
var jr;
(function(t) {
  t.Free = "free", t.Vertical = "vertical", t.Horizontal = "horizontal";
})(jr || (jr = {}));
var Cs;
(function(t) {
  t.Partial = "partial", t.Full = "full";
})(Cs || (Cs = {}));
const tl = {
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
var Wn;
(function(t) {
  t.Bezier = "default", t.Straight = "straight", t.Step = "step", t.SmoothStep = "smoothstep", t.SimpleBezier = "simplebezier";
})(Wn || (Wn = {}));
var ii;
(function(t) {
  t.Arrow = "arrow", t.ArrowClosed = "arrowclosed";
})(ii || (ii = {}));
var _e;
(function(t) {
  t.Left = "left", t.Top = "top", t.Right = "right", t.Bottom = "bottom";
})(_e || (_e = {}));
const Pc = {
  [_e.Left]: _e.Right,
  [_e.Right]: _e.Left,
  [_e.Top]: _e.Bottom,
  [_e.Bottom]: _e.Top
};
function cb(t, e) {
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
function Ec(t, e, n) {
  if (!n)
    return;
  const r = [];
  t.forEach((o, i) => {
    e?.has(i) || r.push(o);
  }), r.length && n(r);
}
function db(t) {
  return t === null ? null : t ? "valid" : "invalid";
}
const yp = (t) => "id" in t && "source" in t && "target" in t, hb = (t) => "id" in t && "position" in t && !("source" in t) && !("target" in t), su = (t) => "id" in t && "internals" in t && !("source" in t) && !("target" in t), bi = (t, e = [0, 0]) => {
  const { width: n, height: r } = Er(t), o = t.origin ?? e, i = n * o[0], s = r * o[1];
  return {
    x: t.position.x - i,
    y: t.position.y - s
  };
}, pb = (t, e = { nodeOrigin: [0, 0] }) => {
  if (t.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = t.reduce((r, o) => {
    const i = typeof o == "string";
    let s = !e.nodeLookup && !i ? o : void 0;
    e.nodeLookup && (s = i ? e.nodeLookup.get(o) : su(o) ? o : e.nodeLookup.get(o.id));
    const a = s ? $s(s, e.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return ua(r, a);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return ca(n);
}, xi = (t, e = {}) => {
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 }, r = !1;
  return t.forEach((o) => {
    (e.filter === void 0 || e.filter(o)) && (n = ua(n, $s(o)), r = !0);
  }), r ? ca(n) : { x: 0, y: 0, width: 0, height: 0 };
}, au = (t, e, [n, r, o] = [0, 0, 1], i = !1, s = !1) => {
  const a = {
    ...Ci(e, [n, r, o]),
    width: e.width / o,
    height: e.height / o
  }, l = [];
  for (const u of t.values()) {
    const { measured: d, selectable: h = !0, hidden: p = !1 } = u;
    if (s && !h || p)
      continue;
    const v = d.width ?? u.width ?? u.initialWidth ?? null, m = d.height ?? u.height ?? u.initialHeight ?? null, y = si(a, ko(u)), w = (v ?? 0) * (m ?? 0), b = i && y > 0;
    (!u.internals.handleBounds || b || y >= w || u.dragging) && l.push(u);
  }
  return l;
}, fb = (t, e) => {
  const n = /* @__PURE__ */ new Set();
  return t.forEach((r) => {
    n.add(r.id);
  }), e.filter((r) => n.has(r.source) || n.has(r.target));
};
function gb(t, e) {
  const n = /* @__PURE__ */ new Map(), r = e?.nodes ? new Set(e.nodes.map((o) => o.id)) : null;
  return t.forEach((o) => {
    o.measured.width && o.measured.height && (e?.includeHiddenNodes || !o.hidden) && (!r || r.has(o.id)) && n.set(o.id, o);
  }), n;
}
async function vb({ nodes: t, width: e, height: n, panZoom: r, minZoom: o, maxZoom: i }, s) {
  if (t.size === 0)
    return Promise.resolve(!0);
  const a = gb(t, s), l = xi(a), u = lu(l, e, n, s?.minZoom ?? o, s?.maxZoom ?? i, s?.padding ?? 0.1);
  return await r.setViewport(u, {
    duration: s?.duration,
    ease: s?.ease,
    interpolate: s?.interpolate
  }), Promise.resolve(!0);
}
function wp({ nodeId: t, nextPosition: e, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
  const s = n.get(t), a = s.parentId ? n.get(s.parentId) : void 0, { x: l, y: u } = a ? a.internals.positionAbsolute : { x: 0, y: 0 }, d = s.origin ?? r;
  let h = s.extent || o;
  if (s.extent === "parent" && !s.expandParent)
    if (!a)
      i?.("005", oi.error005());
    else {
      const v = a.measured.width, m = a.measured.height;
      v && m && (h = [
        [l, u],
        [l + v, u + m]
      ]);
    }
  else a && Co(s.extent) && (h = [
    [s.extent[0][0] + l, s.extent[0][1] + u],
    [s.extent[1][0] + l, s.extent[1][1] + u]
  ]);
  const p = Co(h) ? Yr(e, h, s.measured) : e;
  return (s.measured.width === void 0 || s.measured.height === void 0) && i?.("015", oi.error015()), {
    position: {
      x: p.x - l + (s.measured.width ?? 0) * d[0],
      y: p.y - u + (s.measured.height ?? 0) * d[1]
    },
    positionAbsolute: p
  };
}
async function mb({ nodesToRemove: t = [], edgesToRemove: e = [], nodes: n, edges: r, onBeforeDelete: o }) {
  const i = new Set(t.map((h) => h.id)), s = [];
  for (const h of n) {
    if (h.deletable === !1)
      continue;
    const p = i.has(h.id), v = !p && h.parentId && s.find((m) => m.id === h.parentId);
    (p || v) && s.push(h);
  }
  const a = new Set(e.map((h) => h.id)), l = r.filter((h) => h.deletable !== !1), u = fb(s, l);
  for (const h of l)
    a.has(h.id) && !u.find((p) => p.id === h.id) && u.push(h);
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
const xo = (t, e = 0, n = 1) => Math.min(Math.max(t, e), n), Yr = (t = { x: 0, y: 0 }, e, n) => ({
  x: xo(t.x, e[0][0], e[1][0] - (n?.width ?? 0)),
  y: xo(t.y, e[0][1], e[1][1] - (n?.height ?? 0))
});
function bp(t, e, n) {
  const { width: r, height: o } = Er(n), { x: i, y: s } = n.internals.positionAbsolute;
  return Yr(t, [
    [i, s],
    [i + r, s + o]
  ], e);
}
const Nc = (t, e, n) => t < e ? xo(Math.abs(t - e), 1, e) / e : t > n ? -xo(Math.abs(t - n), 1, e) / e : 0, xp = (t, e, n = 15, r = 40) => {
  const o = Nc(t.x, r, e.width - r) * n, i = Nc(t.y, r, e.height - r) * n;
  return [o, i];
}, ua = (t, e) => ({
  x: Math.min(t.x, e.x),
  y: Math.min(t.y, e.y),
  x2: Math.max(t.x2, e.x2),
  y2: Math.max(t.y2, e.y2)
}), nl = ({ x: t, y: e, width: n, height: r }) => ({
  x: t,
  y: e,
  x2: t + n,
  y2: e + r
}), ca = ({ x: t, y: e, x2: n, y2: r }) => ({
  x: t,
  y: e,
  width: n - t,
  height: r - e
}), ko = (t, e = [0, 0]) => {
  const { x: n, y: r } = su(t) ? t.internals.positionAbsolute : bi(t, e);
  return {
    x: n,
    y: r,
    width: t.measured?.width ?? t.width ?? t.initialWidth ?? 0,
    height: t.measured?.height ?? t.height ?? t.initialHeight ?? 0
  };
}, $s = (t, e = [0, 0]) => {
  const { x: n, y: r } = su(t) ? t.internals.positionAbsolute : bi(t, e);
  return {
    x: n,
    y: r,
    x2: n + (t.measured?.width ?? t.width ?? t.initialWidth ?? 0),
    y2: r + (t.measured?.height ?? t.height ?? t.initialHeight ?? 0)
  };
}, kp = (t, e) => ca(ua(nl(t), nl(e))), si = (t, e) => {
  const n = Math.max(0, Math.min(t.x + t.width, e.x + e.width) - Math.max(t.x, e.x)), r = Math.max(0, Math.min(t.y + t.height, e.y + e.height) - Math.max(t.y, e.y));
  return Math.ceil(n * r);
}, zc = (t) => qn(t.width) && qn(t.height) && qn(t.x) && qn(t.y), qn = (t) => !isNaN(t) && isFinite(t), yb = (t, e) => {
}, ki = (t, e = [1, 1]) => ({
  x: e[0] * Math.round(t.x / e[0]),
  y: e[1] * Math.round(t.y / e[1])
}), Ci = ({ x: t, y: e }, [n, r, o], i = !1, s = [1, 1]) => {
  const a = {
    x: (t - n) / o,
    y: (e - r) / o
  };
  return i ? ki(a, s) : a;
}, Ss = ({ x: t, y: e }, [n, r, o]) => ({
  x: t * o + n,
  y: e * o + r
});
function so(t, e) {
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
function wb(t, e, n) {
  if (typeof t == "string" || typeof t == "number") {
    const r = so(t, n), o = so(t, e);
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
    const r = so(t.top ?? t.y ?? 0, n), o = so(t.bottom ?? t.y ?? 0, n), i = so(t.left ?? t.x ?? 0, e), s = so(t.right ?? t.x ?? 0, e);
    return { top: r, right: s, bottom: o, left: i, x: i + s, y: r + o };
  }
  return { top: 0, right: 0, bottom: 0, left: 0, x: 0, y: 0 };
}
function bb(t, e, n, r, o, i) {
  const { x: s, y: a } = Ss(t, [e, n, r]), { x: l, y: u } = Ss({ x: t.x + t.width, y: t.y + t.height }, [e, n, r]), d = o - l, h = i - u;
  return {
    left: Math.floor(s),
    top: Math.floor(a),
    right: Math.floor(d),
    bottom: Math.floor(h)
  };
}
const lu = (t, e, n, r, o, i) => {
  const s = wb(i, e, n), a = (e - s.x) / t.width, l = (n - s.y) / t.height, u = Math.min(a, l), d = xo(u, r, o), h = t.x + t.width / 2, p = t.y + t.height / 2, v = e / 2 - h * d, m = n / 2 - p * d, y = bb(t, v, m, d, e, n), w = {
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
}, Lr = () => typeof navigator < "u" && navigator?.userAgent?.indexOf("Mac") >= 0;
function Co(t) {
  return t != null && t !== "parent";
}
function Er(t) {
  return {
    width: t.measured?.width ?? t.width ?? t.initialWidth ?? 0,
    height: t.measured?.height ?? t.height ?? t.initialHeight ?? 0
  };
}
function Cp(t) {
  return (t.measured?.width ?? t.width ?? t.initialWidth) !== void 0 && (t.measured?.height ?? t.height ?? t.initialHeight) !== void 0;
}
function xb(t, e = { width: 0, height: 0 }, n, r, o) {
  const i = { ...t }, s = r.get(n);
  if (s) {
    const a = s.origin || o;
    i.x += s.internals.positionAbsolute.x - (e.width ?? 0) * a[0], i.y += s.internals.positionAbsolute.y - (e.height ?? 0) * a[1];
  }
  return i;
}
function kb(t) {
  return { ...ub, ...t || {} };
}
function Oa(t, { snapGrid: e = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: i, y: s } = fn(t), a = Ci({ x: i - (o?.left ?? 0), y: s - (o?.top ?? 0) }, r), { x: l, y: u } = n ? ki(a, e) : a;
  return {
    xSnapped: l,
    ySnapped: u,
    ...a
  };
}
const $p = (t) => ({
  width: t.offsetWidth,
  height: t.offsetHeight
}), Sp = (t) => t?.getRootNode?.() || window?.document, Cb = ["INPUT", "SELECT", "TEXTAREA"];
function _p(t) {
  const e = t.composedPath?.()?.[0] || t.target;
  return e?.nodeType !== 1 ? !1 : Cb.includes(e.nodeName) || e.hasAttribute("contenteditable") || !!e.closest(".nokey");
}
const Op = (t) => "clientX" in t, fn = (t, e) => {
  const n = Op(t), r = n ? t.clientX : t.touches?.[0].clientX, o = n ? t.clientY : t.touches?.[0].clientY;
  return {
    x: r - (e?.left ?? 0),
    y: o - (e?.top ?? 0)
  };
}, Mc = (t, e, n, r, o) => {
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
      ...$p(s)
    };
  });
};
function $b({ sourceX: t, sourceY: e, targetX: n, targetY: r, sourceControlX: o, sourceControlY: i, targetControlX: s, targetControlY: a }) {
  const l = t * 0.125 + o * 0.375 + s * 0.375 + n * 0.125, u = e * 0.125 + i * 0.375 + a * 0.375 + r * 0.125, d = Math.abs(l - t), h = Math.abs(u - e);
  return [l, u, d, h];
}
function Ri(t, e) {
  return t >= 0 ? 0.5 * t : e * 25 * Math.sqrt(-t);
}
function Tc({ pos: t, x1: e, y1: n, x2: r, y2: o, c: i }) {
  switch (t) {
    case _e.Left:
      return [e - Ri(e - r, i), n];
    case _e.Right:
      return [e + Ri(r - e, i), n];
    case _e.Top:
      return [e, n - Ri(n - o, i)];
    case _e.Bottom:
      return [e, n + Ri(o - n, i)];
  }
}
function Pp({ sourceX: t, sourceY: e, sourcePosition: n = _e.Bottom, targetX: r, targetY: o, targetPosition: i = _e.Top, curvature: s = 0.25 }) {
  const [a, l] = Tc({
    pos: n,
    x1: t,
    y1: e,
    x2: r,
    y2: o,
    c: s
  }), [u, d] = Tc({
    pos: i,
    x1: r,
    y1: o,
    x2: t,
    y2: e,
    c: s
  }), [h, p, v, m] = $b({
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
    p,
    v,
    m
  ];
}
function Ep({ sourceX: t, sourceY: e, targetX: n, targetY: r }) {
  const o = Math.abs(n - t) / 2, i = n < t ? n + o : n - o, s = Math.abs(r - e) / 2, a = r < e ? r + s : r - s;
  return [i, a, o, s];
}
function Sb({ sourceNode: t, targetNode: e, selected: n = !1, zIndex: r, elevateOnSelect: o = !1 }) {
  if (r !== void 0)
    return r;
  const i = o && n ? 1e3 : 0, s = Math.max(t.parentId || o && t.selected ? t.internals.z : 0, e.parentId || o && e.selected ? e.internals.z : 0);
  return i + s;
}
function _b({ sourceNode: t, targetNode: e, width: n, height: r, transform: o }) {
  const i = ua($s(t), $s(e));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const s = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return si(s, ca(i)) > 0;
}
const Ob = ({ source: t, sourceHandle: e, target: n, targetHandle: r }) => `xy-edge__${t}${e || ""}-${n}${r || ""}`, Pb = (t, e) => e.some((n) => n.source === t.source && n.target === t.target && (n.sourceHandle === t.sourceHandle || !n.sourceHandle && !t.sourceHandle) && (n.targetHandle === t.targetHandle || !n.targetHandle && !t.targetHandle)), Eb = (t, e) => {
  if (!t.source || !t.target)
    return e;
  let n;
  return yp(t) ? n = { ...t } : n = {
    ...t,
    id: Ob(t)
  }, Pb(n, e) ? e : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, e.concat(n));
};
function Np({ sourceX: t, sourceY: e, targetX: n, targetY: r }) {
  const [o, i, s, a] = Ep({
    sourceX: t,
    sourceY: e,
    targetX: n,
    targetY: r
  });
  return [`M ${t},${e}L ${n},${r}`, o, i, s, a];
}
const Ac = {
  [_e.Left]: { x: -1, y: 0 },
  [_e.Right]: { x: 1, y: 0 },
  [_e.Top]: { x: 0, y: -1 },
  [_e.Bottom]: { x: 0, y: 1 }
}, Nb = ({ source: t, sourcePosition: e = _e.Bottom, target: n }) => e === _e.Left || e === _e.Right ? t.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : t.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, Dc = (t, e) => Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
function zb({ source: t, sourcePosition: e = _e.Bottom, target: n, targetPosition: r = _e.Top, center: o, offset: i, stepPosition: s }) {
  const a = Ac[e], l = Ac[r], u = { x: t.x + a.x * i, y: t.y + a.y * i }, d = { x: n.x + l.x * i, y: n.y + l.y * i }, h = Nb({
    source: u,
    sourcePosition: e,
    target: d
  }), p = h.x !== 0 ? "x" : "y", v = h[p];
  let m = [], y, w;
  const b = { x: 0, y: 0 }, k = { x: 0, y: 0 }, [, , O, C] = Ep({
    sourceX: t.x,
    sourceY: t.y,
    targetX: n.x,
    targetY: n.y
  });
  if (a[p] * l[p] === -1) {
    p === "x" ? (y = o.x ?? u.x + (d.x - u.x) * s, w = o.y ?? (u.y + d.y) / 2) : (y = o.x ?? (u.x + d.x) / 2, w = o.y ?? u.y + (d.y - u.y) * s);
    const x = [
      { x: y, y: u.y },
      { x: y, y: d.y }
    ], E = [
      { x: u.x, y: w },
      { x: d.x, y: w }
    ];
    a[p] === v ? m = p === "x" ? x : E : m = p === "x" ? E : x;
  } else {
    const x = [{ x: u.x, y: d.y }], E = [{ x: d.x, y: u.y }];
    if (p === "x" ? m = a.x === v ? E : x : m = a.y === v ? x : E, e === r) {
      const D = Math.abs(t[p] - n[p]);
      if (D <= i) {
        const _ = Math.min(i - 1, i - D);
        a[p] === v ? b[p] = (u[p] > t[p] ? -1 : 1) * _ : k[p] = (d[p] > n[p] ? -1 : 1) * _;
      }
    }
    if (e !== r) {
      const D = p === "x" ? "y" : "x", _ = a[p] === l[D], M = u[D] > d[D], S = u[D] < d[D];
      (a[p] === 1 && (!_ && M || _ && S) || a[p] !== 1 && (!_ && S || _ && M)) && (m = p === "x" ? x : E);
    }
    const V = { x: u.x + b.x, y: u.y + b.y }, H = { x: d.x + k.x, y: d.y + k.y }, I = Math.max(Math.abs(V.x - m[0].x), Math.abs(H.x - m[0].x)), A = Math.max(Math.abs(V.y - m[0].y), Math.abs(H.y - m[0].y));
    I >= A ? (y = (V.x + H.x) / 2, w = m[0].y) : (y = m[0].x, w = (V.y + H.y) / 2);
  }
  return [[
    t,
    { x: u.x + b.x, y: u.y + b.y },
    ...m,
    { x: d.x + k.x, y: d.y + k.y },
    n
  ], y, w, O, C];
}
function Mb(t, e, n, r) {
  const o = Math.min(Dc(t, e) / 2, Dc(e, n) / 2, r), { x: i, y: s } = e;
  if (t.x === i && i === n.x || t.y === s && s === n.y)
    return `L${i} ${s}`;
  if (t.y === s) {
    const u = t.x < n.x ? -1 : 1, d = t.y < n.y ? 1 : -1;
    return `L ${i + o * u},${s}Q ${i},${s} ${i},${s + o * d}`;
  }
  const a = t.x < n.x ? 1 : -1, l = t.y < n.y ? -1 : 1;
  return `L ${i},${s + o * l}Q ${i},${s} ${i + o * a},${s}`;
}
function uu({ sourceX: t, sourceY: e, sourcePosition: n = _e.Bottom, targetX: r, targetY: o, targetPosition: i = _e.Top, borderRadius: s = 5, centerX: a, centerY: l, offset: u = 20, stepPosition: d = 0.5 }) {
  const [h, p, v, m, y] = zb({
    source: { x: t, y: e },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: a, y: l },
    offset: u,
    stepPosition: d
  });
  return [h.reduce((w, b, k) => {
    let O = "";
    return k > 0 && k < h.length - 1 ? O = Mb(h[k - 1], b, h[k + 1], s) : O = `${k === 0 ? "M" : "L"}${b.x} ${b.y}`, w += O, w;
  }, ""), p, v, m, y];
}
function Vc(t) {
  return t && !!(t.internals.handleBounds || t.handles?.length) && !!(t.measured.width || t.width || t.initialWidth);
}
function Tb(t) {
  const { sourceNode: e, targetNode: n } = t;
  if (!Vc(e) || !Vc(n))
    return null;
  const r = e.internals.handleBounds || Hc(e.handles), o = n.internals.handleBounds || Hc(n.handles), i = Lc(r?.source ?? [], t.sourceHandle), s = Lc(
    // when connection type is loose we can define all handles as sources and connect source -> source
    t.connectionMode === bo.Strict ? o?.target ?? [] : (o?.target ?? []).concat(o?.source ?? []),
    t.targetHandle
  );
  if (!i || !s)
    return t.onError?.("008", oi.error008(i ? "target" : "source", {
      id: t.id,
      sourceHandle: t.sourceHandle,
      targetHandle: t.targetHandle
    })), null;
  const a = i?.position || _e.Bottom, l = s?.position || _e.Top, u = ai(e, i, a), d = ai(n, s, l);
  return {
    sourceX: u.x,
    sourceY: u.y,
    targetX: d.x,
    targetY: d.y,
    sourcePosition: a,
    targetPosition: l
  };
}
function Hc(t) {
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
function ai(t, e, n = _e.Left, r = !1) {
  const o = (e?.x ?? 0) + t.internals.positionAbsolute.x, i = (e?.y ?? 0) + t.internals.positionAbsolute.y, { width: s, height: a } = e ?? Er(t);
  if (r)
    return { x: o + s / 2, y: i + a / 2 };
  switch (e?.position ?? n) {
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
function Lc(t, e) {
  return t && (e ? t.find((n) => n.id === e) : t[0]) || null;
}
function rl(t, e) {
  return t ? typeof t == "string" ? t : `${e ? `${e}__` : ""}${Object.keys(t).sort().map((n) => `${n}=${t[n]}`).join("&")}` : "";
}
function Ab(t, { id: e, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const i = /* @__PURE__ */ new Set();
  return t.reduce((s, a) => ([a.markerStart || r, a.markerEnd || o].forEach((l) => {
    if (l && typeof l == "object") {
      const u = rl(l, e);
      i.has(u) || (s.push({ id: u, color: l.color || n, ...l }), i.add(u));
    }
  }), s), []).sort((s, a) => s.id.localeCompare(a.id));
}
function Db(t, e, n, r, o) {
  let i = 0.5;
  o === "start" ? i = 0 : o === "end" && (i = 1);
  let s = [
    (t.x + t.width * i) * e.zoom + e.x,
    t.y * e.zoom + e.y - r
  ], a = [-100 * i, -100];
  switch (n) {
    case _e.Right:
      s = [
        (t.x + t.width) * e.zoom + e.x + r,
        (t.y + t.height * i) * e.zoom + e.y
      ], a = [0, -100 * i];
      break;
    case _e.Bottom:
      s[1] = (t.y + t.height) * e.zoom + e.y + r, a[1] = 0;
      break;
    case _e.Left:
      s = [
        t.x * e.zoom + e.x - r,
        (t.y + t.height * i) * e.zoom + e.y
      ], a = [-100, -100 * i];
      break;
  }
  return `translate(${s[0]}px, ${s[1]}px) translate(${a[0]}%, ${a[1]}%)`;
}
const zp = 1e3, Vb = 10, cu = {
  nodeOrigin: [0, 0],
  nodeExtent: el,
  elevateNodesOnSelect: !0,
  defaults: {}
}, Hb = {
  ...cu,
  checkEquality: !0
};
function du(t, e) {
  const n = { ...t };
  for (const r in e)
    e[r] !== void 0 && (n[r] = e[r]);
  return n;
}
function Lb(t, e, n) {
  const r = du(cu, n);
  for (const o of t.values())
    if (o.parentId)
      hu(o, t, e, r);
    else {
      const i = bi(o, r.nodeOrigin), s = Co(o.extent) ? o.extent : r.nodeExtent, a = Yr(i, s, Er(o));
      o.internals.positionAbsolute = a;
    }
}
function Ib(t, e) {
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
function Rb(t, e, n, r) {
  const o = du(Hb, r);
  let i = { i: -1 }, s = t.length > 0;
  const a = new Map(e), l = o?.elevateNodesOnSelect ? zp : 0;
  e.clear(), n.clear();
  for (const u of t) {
    let d = a.get(u.id);
    if (o.checkEquality && u === d?.internals.userNode)
      e.set(u.id, d);
    else {
      const h = bi(u, o.nodeOrigin), p = Co(u.extent) ? u.extent : o.nodeExtent, v = Yr(h, p, Er(u));
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
          handleBounds: Ib(u, d),
          z: Mp(u, l),
          userNode: u
        }
      }, e.set(u.id, d);
    }
    (d.measured === void 0 || d.measured.width === void 0 || d.measured.height === void 0) && !d.hidden && (s = !1), u.parentId && hu(d, e, n, r, i);
  }
  return s;
}
function Bb(t, e) {
  if (!t.parentId)
    return;
  const n = e.get(t.parentId);
  n ? n.set(t.id, t) : e.set(t.parentId, /* @__PURE__ */ new Map([[t.id, t]]));
}
function hu(t, e, n, r, o) {
  const { elevateNodesOnSelect: i, nodeOrigin: s, nodeExtent: a } = du(cu, r), l = t.parentId, u = e.get(l);
  if (!u) {
    console.warn(`Parent node ${l} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  Bb(t, n), o && !u.parentId && u.internals.rootParentIndex === void 0 && (u.internals.rootParentIndex = ++o.i, u.internals.z = u.internals.z + o.i * Vb), o && u.internals.rootParentIndex !== void 0 && (o.i = u.internals.rootParentIndex);
  const d = i ? zp : 0, { x: h, y: p, z: v } = jb(t, u, s, a, d), { positionAbsolute: m } = t.internals, y = h !== m.x || p !== m.y;
  (y || v !== t.internals.z) && e.set(t.id, {
    ...t,
    internals: {
      ...t.internals,
      positionAbsolute: y ? { x: h, y: p } : m,
      z: v
    }
  });
}
function Mp(t, e) {
  return (qn(t.zIndex) ? t.zIndex : 0) + (t.selected ? e : 0);
}
function jb(t, e, n, r, o) {
  const { x: i, y: s } = e.internals.positionAbsolute, a = Er(t), l = bi(t, n), u = Co(t.extent) ? Yr(l, t.extent, a) : l;
  let d = Yr({ x: i + u.x, y: s + u.y }, r, a);
  t.extent === "parent" && (d = bp(d, a, e));
  const h = Mp(t, o), p = e.internals.z ?? 0;
  return {
    x: d.x,
    y: d.y,
    z: p >= h ? p + 1 : h
  };
}
function Kb(t, e, n, r = [0, 0]) {
  const o = [], i = /* @__PURE__ */ new Map();
  for (const s of t) {
    const a = e.get(s.parentId);
    if (!a)
      continue;
    const l = i.get(s.parentId)?.expandedRect ?? ko(a), u = kp(l, s.rect);
    i.set(s.parentId, { expandedRect: u, parent: a });
  }
  return i.size > 0 && i.forEach(({ expandedRect: s, parent: a }, l) => {
    const u = a.internals.positionAbsolute, d = Er(a), h = a.origin ?? r, p = s.x < u.x ? Math.round(Math.abs(u.x - s.x)) : 0, v = s.y < u.y ? Math.round(Math.abs(u.y - s.y)) : 0, m = Math.max(d.width, Math.round(s.width)), y = Math.max(d.height, Math.round(s.height)), w = (m - d.width) * h[0], b = (y - d.height) * h[1];
    (p > 0 || v > 0 || w || b) && (o.push({
      id: l,
      type: "position",
      position: {
        x: a.position.x - p + w,
        y: a.position.y - v + b
      }
    }), n.get(l)?.forEach((k) => {
      t.some((O) => O.id === k.id) || o.push({
        id: k.id,
        type: "position",
        position: {
          x: k.position.x + p,
          y: k.position.y + v
        }
      });
    })), (d.width < s.width || d.height < s.height || p || v) && o.push({
      id: l,
      type: "dimensions",
      setAttributes: !0,
      dimensions: {
        width: m + (p ? h[0] * p - w : 0),
        height: y + (v ? h[1] * v - b : 0)
      }
    });
  }), o;
}
function Fb(t, e, n, r, o, i) {
  const s = r?.querySelector(".xyflow__viewport");
  let a = !1;
  if (!s)
    return { changes: [], updatedInternals: a };
  const l = [], u = window.getComputedStyle(s), { m22: d } = new window.DOMMatrixReadOnly(u.transform), h = [];
  for (const p of t.values()) {
    const v = e.get(p.id);
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
    const m = $p(p.nodeElement), y = v.measured.width !== m.width || v.measured.height !== m.height;
    if (m.width && m.height && (y || !v.internals.handleBounds || p.force)) {
      const w = p.nodeElement.getBoundingClientRect(), b = Co(v.extent) ? v.extent : i;
      let { positionAbsolute: k } = v.internals;
      v.parentId && v.extent === "parent" ? k = bp(k, m, e.get(v.parentId)) : b && (k = Yr(k, b, m));
      const O = {
        ...v,
        measured: m,
        internals: {
          ...v.internals,
          positionAbsolute: k,
          handleBounds: {
            source: Mc("source", p.nodeElement, w, d, v.id),
            target: Mc("target", p.nodeElement, w, d, v.id)
          }
        }
      };
      e.set(v.id, O), v.parentId && hu(O, e, n, { nodeOrigin: o }), a = !0, y && (l.push({
        id: v.id,
        type: "dimensions",
        dimensions: m
      }), v.expandParent && v.parentId && h.push({
        id: v.id,
        parentId: v.parentId,
        rect: ko(O, o)
      }));
    }
  }
  if (h.length > 0) {
    const p = Kb(h, e, n, o);
    l.push(...p);
  }
  return { changes: l, updatedInternals: a };
}
async function Zb({ delta: t, panZoom: e, transform: n, translateExtent: r, width: o, height: i }) {
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
function Ic(t, e, n, r, o, i) {
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
function Wb(t, e, n) {
  t.clear(), e.clear();
  for (const r of n) {
    const { source: o, target: i, sourceHandle: s = null, targetHandle: a = null } = r, l = { edgeId: r.id, source: o, target: i, sourceHandle: s, targetHandle: a }, u = `${o}-${s}--${i}-${a}`, d = `${i}-${a}--${o}-${s}`;
    Ic("source", l, d, t, o, s), Ic("target", l, u, t, i, a), e.set(r.id, r);
  }
}
function Xb(t, e) {
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
function Tp(t, e) {
  if (!t.parentId)
    return !1;
  const n = e.get(t.parentId);
  return n ? n.selected ? !0 : Tp(n, e) : !1;
}
function Rc(t, e, n) {
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
function qb(t, e, n, r) {
  const o = /* @__PURE__ */ new Map();
  for (const [i, s] of t)
    if ((s.selected || s.id === r) && (!s.parentId || !Tp(s, t)) && (s.draggable || e && typeof s.draggable > "u")) {
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
function Pa({ nodeId: t, dragItems: e, nodeLookup: n, dragging: r = !0 }) {
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
function Yb({ dragItems: t, snapGrid: e, x: n, y: r }) {
  const o = t.values().next().value;
  if (!o)
    return null;
  const i = {
    x: n - o.distance.x,
    y: r - o.distance.y
  }, s = ki(i, e);
  return {
    x: s.x - i.x,
    y: s.y - i.y
  };
}
function Ub({ onNodeMouseDown: t, getStoreItems: e, onDragStart: n, onDrag: r, onDragStop: o }) {
  let i = { x: null, y: null }, s = 0, a = /* @__PURE__ */ new Map(), l = !1, u = { x: 0, y: 0 }, d = null, h = !1, p = null, v = !1, m = !1, y = null;
  function w({ noDragClassName: k, handleSelector: O, domNode: C, isSelectable: x, nodeId: E, nodeClickDistance: V = 0 }) {
    p = sn(C);
    function H({ x: _, y: M }) {
      const { nodeLookup: S, nodeExtent: P, snapGrid: z, snapToGrid: B, nodeOrigin: q, onNodeDrag: U, onSelectionDrag: N, onError: Y, updateNodePositions: ee } = e();
      i = { x: _, y: M };
      let j = !1;
      const F = a.size > 1, W = F && P ? nl(xi(a)) : null, G = F && B ? Yb({
        dragItems: a,
        snapGrid: z,
        x: _,
        y: M
      }) : null;
      for (const [re, L] of a) {
        if (!S.has(re))
          continue;
        let te = { x: _ - L.distance.x, y: M - L.distance.y };
        B && (te = G ? {
          x: Math.round(te.x + G.x),
          y: Math.round(te.y + G.y)
        } : ki(te, z));
        let fe = null;
        if (F && P && !L.extent && W) {
          const { positionAbsolute: ce } = L.internals, ve = ce.x - W.x + P[0][0], ke = ce.x + L.measured.width - W.x2 + P[1][0], be = ce.y - W.y + P[0][1], de = ce.y + L.measured.height - W.y2 + P[1][1];
          fe = [
            [ve, be],
            [ke, de]
          ];
        }
        const { position: ue, positionAbsolute: oe } = wp({
          nodeId: re,
          nextPosition: te,
          nodeLookup: S,
          nodeExtent: fe || P,
          nodeOrigin: q,
          onError: Y
        });
        j = j || L.position.x !== ue.x || L.position.y !== ue.y, L.position = ue, L.internals.positionAbsolute = oe;
      }
      if (m = m || j, !!j && (ee(a, !0), y && (r || U || !E && N))) {
        const [re, L] = Pa({
          nodeId: E,
          dragItems: a,
          nodeLookup: S
        });
        r?.(y, a, re, L), U?.(y, re, L), E || N?.(y, L);
      }
    }
    async function I() {
      if (!d)
        return;
      const { transform: _, panBy: M, autoPanSpeed: S, autoPanOnNodeDrag: P } = e();
      if (!P) {
        l = !1, cancelAnimationFrame(s);
        return;
      }
      const [z, B] = xp(u, d, S);
      (z !== 0 || B !== 0) && (i.x = (i.x ?? 0) - z / _[2], i.y = (i.y ?? 0) - B / _[2], await M({ x: z, y: B }) && H(i)), s = requestAnimationFrame(I);
    }
    function A(_) {
      const { nodeLookup: M, multiSelectionActive: S, nodesDraggable: P, transform: z, snapGrid: B, snapToGrid: q, selectNodesOnDrag: U, onNodeDragStart: N, onSelectionDragStart: Y, unselectNodesAndEdges: ee } = e();
      h = !0, (!U || !x) && !S && E && (M.get(E)?.selected || ee()), x && U && E && t?.(E);
      const j = Oa(_.sourceEvent, { transform: z, snapGrid: B, snapToGrid: q, containerBounds: d });
      if (i = j, a = qb(M, P, j, E), a.size > 0 && (n || N || !E && Y)) {
        const [F, W] = Pa({
          nodeId: E,
          dragItems: a,
          nodeLookup: M
        });
        n?.(_.sourceEvent, a, F, W), N?.(_.sourceEvent, F, W), E || Y?.(_.sourceEvent, W);
      }
    }
    const D = vy().clickDistance(V).on("start", (_) => {
      const { domNode: M, nodeDragThreshold: S, transform: P, snapGrid: z, snapToGrid: B } = e();
      d = M?.getBoundingClientRect() || null, v = !1, m = !1, y = _.sourceEvent, S === 0 && A(_), i = Oa(_.sourceEvent, { transform: P, snapGrid: z, snapToGrid: B, containerBounds: d }), u = fn(_.sourceEvent, d);
    }).on("drag", (_) => {
      const { autoPanOnNodeDrag: M, transform: S, snapGrid: P, snapToGrid: z, nodeDragThreshold: B, nodeLookup: q } = e(), U = Oa(_.sourceEvent, { transform: S, snapGrid: P, snapToGrid: z, containerBounds: d });
      if (y = _.sourceEvent, (_.sourceEvent.type === "touchmove" && _.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      E && !q.has(E)) && (v = !0), !v) {
        if (!l && M && h && (l = !0, I()), !h) {
          const N = fn(_.sourceEvent, d), Y = N.x - u.x, ee = N.y - u.y;
          Math.sqrt(Y * Y + ee * ee) > B && A(_);
        }
        (i.x !== U.xSnapped || i.y !== U.ySnapped) && a && h && (u = fn(_.sourceEvent, d), H(U));
      }
    }).on("end", (_) => {
      if (!(!h || v) && (l = !1, h = !1, cancelAnimationFrame(s), a.size > 0)) {
        const { nodeLookup: M, updateNodePositions: S, onNodeDragStop: P, onSelectionDragStop: z } = e();
        if (m && (S(a, !1), m = !1), o || P || !E && z) {
          const [B, q] = Pa({
            nodeId: E,
            dragItems: a,
            nodeLookup: M,
            dragging: !1
          });
          o?.(_.sourceEvent, a, B, q), P?.(_.sourceEvent, B, q), E || z?.(_.sourceEvent, q);
        }
      }
    }).filter((_) => {
      const M = _.target;
      return !_.button && (!k || !Rc(M, `.${k}`, C)) && (!O || Rc(M, O, C));
    });
    p.call(D);
  }
  function b() {
    p?.on(".drag", null);
  }
  return {
    update: w,
    destroy: b
  };
}
function Gb(t, e, n) {
  const r = [], o = {
    x: t.x - n,
    y: t.y - n,
    width: n * 2,
    height: n * 2
  };
  for (const i of e.values())
    si(o, ko(i)) > 0 && r.push(i);
  return r;
}
const Jb = 250;
function Qb(t, e, n, r) {
  let o = [], i = 1 / 0;
  const s = Gb(t, n, e + Jb);
  for (const a of s) {
    const l = [...a.internals.handleBounds?.source ?? [], ...a.internals.handleBounds?.target ?? []];
    for (const u of l) {
      if (r.nodeId === u.nodeId && r.type === u.type && r.id === u.id)
        continue;
      const { x: d, y: h } = ai(a, u, u.position, !0), p = Math.sqrt(Math.pow(d - t.x, 2) + Math.pow(h - t.y, 2));
      p > e || (p < i ? (o = [{ ...u, x: d, y: h }], i = p) : p === i && o.push({ ...u, x: d, y: h }));
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
function Ap(t, e, n, r, o, i = !1) {
  const s = r.get(t);
  if (!s)
    return null;
  const a = o === "strict" ? s.internals.handleBounds?.[e] : [...s.internals.handleBounds?.source ?? [], ...s.internals.handleBounds?.target ?? []], l = (n ? a?.find((u) => u.id === n) : a?.[0]) ?? null;
  return l && i ? { ...l, ...ai(s, l, l.position, !0) } : l;
}
function Dp(t, e) {
  return t || (e?.classList.contains("target") ? "target" : e?.classList.contains("source") ? "source" : null);
}
function e2(t, e) {
  let n = null;
  return e ? n = !0 : t && !e && (n = !1), n;
}
const Vp = () => !0;
function t2(t, { connectionMode: e, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: s, domNode: a, nodeLookup: l, lib: u, autoPanOnConnect: d, flowId: h, panBy: p, cancelConnection: v, onConnectStart: m, onConnect: y, onConnectEnd: w, isValidConnection: b = Vp, onReconnectEnd: k, updateConnection: O, getTransform: C, getFromHandle: x, autoPanSpeed: E, dragThreshold: V = 1, handleDomNode: H }) {
  const I = Sp(t.target);
  let A = 0, D;
  const { x: _, y: M } = fn(t), S = Dp(i, H), P = a?.getBoundingClientRect();
  let z = !1;
  if (!P || !S)
    return;
  const B = Ap(o, S, r, l, e);
  if (!B)
    return;
  let q = fn(t, P), U = !1, N = null, Y = !1, ee = null;
  function j() {
    if (!d || !P)
      return;
    const [fe, ue] = xp(q, P, E);
    p({ x: fe, y: ue }), A = requestAnimationFrame(j);
  }
  const F = {
    ...B,
    nodeId: o,
    type: S,
    position: B.position
  }, W = l.get(o);
  let G = {
    inProgress: !0,
    isValid: null,
    from: ai(W, F, _e.Left, !0),
    fromHandle: F,
    fromPosition: F.position,
    fromNode: W,
    to: q,
    toHandle: null,
    toPosition: Pc[F.position],
    toNode: null,
    pointer: q
  };
  function re() {
    z = !0, O(G), m?.(t, { nodeId: o, handleId: r, handleType: S });
  }
  V === 0 && re();
  function L(fe) {
    if (!z) {
      const { x: ve, y: ke } = fn(fe), be = ve - _, de = ke - M;
      if (!(be * be + de * de > V * V))
        return;
      re();
    }
    if (!x() || !F) {
      te(fe);
      return;
    }
    const ue = C();
    q = fn(fe, P), D = Qb(Ci(q, ue, !1, [1, 1]), n, l, F), U || (j(), U = !0);
    const oe = Hp(fe, {
      handle: D,
      connectionMode: e,
      fromNodeId: o,
      fromHandleId: r,
      fromType: s ? "target" : "source",
      isValidConnection: b,
      doc: I,
      lib: u,
      flowId: h,
      nodeLookup: l
    });
    ee = oe.handleDomNode, N = oe.connection, Y = e2(!!D, oe.isValid);
    const ce = {
      // from stays the same
      ...G,
      isValid: Y,
      to: oe.toHandle && Y ? Ss({ x: oe.toHandle.x, y: oe.toHandle.y }, ue) : q,
      toHandle: oe.toHandle,
      toPosition: Y && oe.toHandle ? oe.toHandle.position : Pc[F.position],
      toNode: oe.toHandle ? l.get(oe.toHandle.nodeId) : null,
      pointer: q
    };
    O(ce), G = ce;
  }
  function te(fe) {
    if (!("touches" in fe && fe.touches.length > 0)) {
      if (z) {
        (D || ee) && N && Y && y?.(N);
        const { inProgress: ue, ...oe } = G, ce = {
          ...oe,
          toPosition: G.toHandle ? G.toPosition : null
        };
        w?.(fe, ce), i && k?.(fe, ce);
      }
      v(), cancelAnimationFrame(A), U = !1, Y = !1, N = null, ee = null, I.removeEventListener("mousemove", L), I.removeEventListener("mouseup", te), I.removeEventListener("touchmove", L), I.removeEventListener("touchend", te);
    }
  }
  I.addEventListener("mousemove", L), I.addEventListener("mouseup", te), I.addEventListener("touchmove", L), I.addEventListener("touchend", te);
}
function Hp(t, { handle: e, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: s, lib: a, flowId: l, isValidConnection: u = Vp, nodeLookup: d }) {
  const h = i === "target", p = e ? s.querySelector(`.${a}-flow__handle[data-id="${l}-${e?.nodeId}-${e?.id}-${e?.type}"]`) : null, { x: v, y: m } = fn(t), y = s.elementFromPoint(v, m), w = y?.classList.contains(`${a}-flow__handle`) ? y : p, b = {
    handleDomNode: w,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (w) {
    const k = Dp(void 0, w), O = w.getAttribute("data-nodeid"), C = w.getAttribute("data-handleid"), x = w.classList.contains("connectable"), E = w.classList.contains("connectableend");
    if (!O || !k)
      return b;
    const V = {
      source: h ? O : r,
      sourceHandle: h ? C : o,
      target: h ? r : O,
      targetHandle: h ? o : C
    };
    b.connection = V;
    const H = x && E && (n === bo.Strict ? h && k === "source" || !h && k === "target" : O !== r || C !== o);
    b.isValid = H && u(V), b.toHandle = Ap(O, k, C, d, n, !0);
  }
  return b;
}
const Bc = {
  onPointerDown: t2,
  isValid: Hp
};
function n2({ domNode: t, panZoom: e, getTransform: n, getViewScale: r }) {
  const o = sn(t);
  function i({ translateExtent: a, width: l, height: u, zoomStep: d = 1, pannable: h = !0, zoomable: p = !0, inversePan: v = !1 }) {
    const m = (O) => {
      if (O.sourceEvent.type !== "wheel" || !e)
        return;
      const C = n(), x = O.sourceEvent.ctrlKey && Lr() ? 10 : 1, E = -O.sourceEvent.deltaY * (O.sourceEvent.deltaMode === 1 ? 0.05 : O.sourceEvent.deltaMode ? 1 : 2e-3) * d, V = C[2] * Math.pow(2, E * x);
      e.scaleTo(V);
    };
    let y = [0, 0];
    const w = (O) => {
      (O.sourceEvent.type === "mousedown" || O.sourceEvent.type === "touchstart") && (y = [
        O.sourceEvent.clientX ?? O.sourceEvent.touches[0].clientX,
        O.sourceEvent.clientY ?? O.sourceEvent.touches[0].clientY
      ]);
    }, b = (O) => {
      const C = n();
      if (O.sourceEvent.type !== "mousemove" && O.sourceEvent.type !== "touchmove" || !e)
        return;
      const x = [
        O.sourceEvent.clientX ?? O.sourceEvent.touches[0].clientX,
        O.sourceEvent.clientY ?? O.sourceEvent.touches[0].clientY
      ], E = [x[0] - y[0], x[1] - y[1]];
      y = x;
      const V = r() * Math.max(C[2], Math.log(C[2])) * (v ? -1 : 1), H = {
        x: C[0] - E[0] * V,
        y: C[1] - E[1] * V
      }, I = [
        [0, 0],
        [l, u]
      ];
      e.setViewportConstrained({
        x: H.x,
        y: H.y,
        zoom: C[2]
      }, I, a);
    }, k = vp().on("start", w).on("zoom", h ? b : null).on("zoom.wheel", p ? m : null);
    o.call(k, {});
  }
  function s() {
    o.on("zoom", null);
  }
  return {
    update: i,
    destroy: s,
    pointer: dn
  };
}
const da = (t) => ({
  x: t.x,
  y: t.y,
  zoom: t.k
}), Ea = ({ x: t, y: e, zoom: n }) => la.translate(t, e).scale(n), uo = (t, e) => t.target.closest(`.${e}`), Lp = (t, e) => e === 2 && Array.isArray(t) && t.includes(2), r2 = (t) => ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2, Na = (t, e = 0, n = r2, r = () => {
}) => {
  const o = typeof e == "number" && e > 0;
  return o || r(), o ? t.transition().duration(e).ease(n).on("end", r) : t;
}, Ip = (t) => {
  const e = t.ctrlKey && Lr() ? 10 : 1;
  return -t.deltaY * (t.deltaMode === 1 ? 0.05 : t.deltaMode ? 1 : 2e-3) * e;
};
function o2({ zoomPanValues: t, noWheelClassName: e, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: s, onPanZoomStart: a, onPanZoom: l, onPanZoomEnd: u }) {
  return (d) => {
    if (uo(d, e))
      return d.ctrlKey && d.preventDefault(), !1;
    d.preventDefault(), d.stopImmediatePropagation();
    const h = n.property("__zoom").k || 1;
    if (d.ctrlKey && s) {
      const w = dn(d), b = Ip(d), k = h * Math.pow(2, b);
      r.scaleTo(n, k, w, d);
      return;
    }
    const p = d.deltaMode === 1 ? 20 : 1;
    let v = o === jr.Vertical ? 0 : d.deltaX * p, m = o === jr.Horizontal ? 0 : d.deltaY * p;
    !Lr() && d.shiftKey && o !== jr.Vertical && (v = d.deltaY * p, m = 0), r.translateBy(
      n,
      -(v / h) * i,
      -(m / h) * i,
      // @ts-ignore
      { internal: !0 }
    );
    const y = da(n.property("__zoom"));
    clearTimeout(t.panScrollTimeout), t.isPanScrolling ? (l?.(d, y), t.panScrollTimeout = setTimeout(() => {
      u?.(d, y), t.isPanScrolling = !1;
    }, 150)) : (t.isPanScrolling = !0, a?.(d, y));
  };
}
function i2({ noWheelClassName: t, preventScrolling: e, d3ZoomHandler: n }) {
  return function(r, o) {
    const i = r.type === "wheel", s = !e && i && !r.ctrlKey, a = uo(r, t);
    if (r.ctrlKey && i && a && r.preventDefault(), s || a)
      return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function s2({ zoomPanValues: t, onDraggingChange: e, onPanZoomStart: n }) {
  return (r) => {
    if (r.sourceEvent?.internal)
      return;
    const o = da(r.transform);
    t.mouseButton = r.sourceEvent?.button || 0, t.isZoomingOrPanning = !0, t.prevViewport = o, r.sourceEvent?.type === "mousedown" && e(!0), n && n?.(r.sourceEvent, o);
  };
}
function a2({ zoomPanValues: t, panOnDrag: e, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (i) => {
    t.usedRightMouseButton = !!(n && Lp(e, t.mouseButton ?? 0)), i.sourceEvent?.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !i.sourceEvent?.internal && o?.(i.sourceEvent, da(i.transform));
  };
}
function l2({ zoomPanValues: t, panOnDrag: e, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (s) => {
    if (!s.sourceEvent?.internal && (t.isZoomingOrPanning = !1, i && Lp(e, t.mouseButton ?? 0) && !t.usedRightMouseButton && s.sourceEvent && i(s.sourceEvent), t.usedRightMouseButton = !1, r(!1), o)) {
      const a = da(s.transform);
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
function u2({ zoomActivationKeyPressed: t, zoomOnScroll: e, zoomOnPinch: n, panOnDrag: r, panOnScroll: o, zoomOnDoubleClick: i, userSelectionActive: s, noWheelClassName: a, noPanClassName: l, lib: u, connectionInProgress: d }) {
  return (h) => {
    const p = t || e, v = n && h.ctrlKey, m = h.type === "wheel";
    if (h.button === 1 && h.type === "mousedown" && (uo(h, `${u}-flow__node`) || uo(h, `${u}-flow__edge`)))
      return !0;
    if (!r && !p && !o && !i && !n || s || d && !m || uo(h, a) && m || uo(h, l) && (!m || o && m && !t) || !n && h.ctrlKey && m)
      return !1;
    if (!n && h.type === "touchstart" && h.touches?.length > 1)
      return h.preventDefault(), !1;
    if (!p && !o && !v && m || !r && (h.type === "mousedown" || h.type === "touchstart") || Array.isArray(r) && !r.includes(h.button) && h.type === "mousedown")
      return !1;
    const y = Array.isArray(r) && r.includes(h.button) || !h.button || h.button <= 1;
    return (!h.ctrlKey || m) && y;
  };
}
function c2({ domNode: t, minZoom: e, maxZoom: n, translateExtent: r, viewport: o, onPanZoom: i, onPanZoomStart: s, onPanZoomEnd: a, onDraggingChange: l }) {
  const u = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: {},
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, d = t.getBoundingClientRect(), h = vp().scaleExtent([e, n]).translateExtent(r), p = sn(t).call(h);
  k({
    x: o.x,
    y: o.y,
    zoom: xo(o.zoom, e, n)
  }, [
    [0, 0],
    [d.width, d.height]
  ], r);
  const v = p.on("wheel.zoom"), m = p.on("dblclick.zoom");
  h.wheelDelta(Ip);
  function y(D, _) {
    return p ? new Promise((M) => {
      h?.interpolate(_?.interpolate === "linear" ? qo : es).transform(Na(p, _?.duration, _?.ease, () => M(!0)), D);
    }) : Promise.resolve(!1);
  }
  function w({ noWheelClassName: D, noPanClassName: _, onPaneContextMenu: M, userSelectionActive: S, panOnScroll: P, panOnDrag: z, panOnScrollMode: B, panOnScrollSpeed: q, preventScrolling: U, zoomOnPinch: N, zoomOnScroll: Y, zoomOnDoubleClick: ee, zoomActivationKeyPressed: j, lib: F, onTransformChange: W, connectionInProgress: G, paneClickDistance: re, selectionOnDrag: L }) {
    S && !u.isZoomingOrPanning && b();
    const te = P && !j && !S;
    h.clickDistance(L ? 1 / 0 : !qn(re) || re < 0 ? 0 : re);
    const fe = te ? o2({
      zoomPanValues: u,
      noWheelClassName: D,
      d3Selection: p,
      d3Zoom: h,
      panOnScrollMode: B,
      panOnScrollSpeed: q,
      zoomOnPinch: N,
      onPanZoomStart: s,
      onPanZoom: i,
      onPanZoomEnd: a
    }) : i2({
      noWheelClassName: D,
      preventScrolling: U,
      d3ZoomHandler: v
    });
    if (p.on("wheel.zoom", fe, { passive: !1 }), !S) {
      const oe = s2({
        zoomPanValues: u,
        onDraggingChange: l,
        onPanZoomStart: s
      });
      h.on("start", oe);
      const ce = a2({
        zoomPanValues: u,
        panOnDrag: z,
        onPaneContextMenu: !!M,
        onPanZoom: i,
        onTransformChange: W
      });
      h.on("zoom", ce);
      const ve = l2({
        zoomPanValues: u,
        panOnDrag: z,
        panOnScroll: P,
        onPaneContextMenu: M,
        onPanZoomEnd: a,
        onDraggingChange: l
      });
      h.on("end", ve);
    }
    const ue = u2({
      zoomActivationKeyPressed: j,
      panOnDrag: z,
      zoomOnScroll: Y,
      panOnScroll: P,
      zoomOnDoubleClick: ee,
      zoomOnPinch: N,
      userSelectionActive: S,
      noPanClassName: _,
      noWheelClassName: D,
      lib: F,
      connectionInProgress: G
    });
    h.filter(ue), ee ? p.on("dblclick.zoom", m) : p.on("dblclick.zoom", null);
  }
  function b() {
    h.on("zoom", null);
  }
  async function k(D, _, M) {
    const S = Ea(D), P = h?.constrain()(S, _, M);
    return P && await y(P), new Promise((z) => z(P));
  }
  async function O(D, _) {
    const M = Ea(D);
    return await y(M, _), new Promise((S) => S(M));
  }
  function C(D) {
    if (p) {
      const _ = Ea(D), M = p.property("__zoom");
      (M.k !== D.zoom || M.x !== D.x || M.y !== D.y) && h?.transform(p, _, null, { sync: !0 });
    }
  }
  function x() {
    const D = p ? gp(p.node()) : { x: 0, y: 0, k: 1 };
    return { x: D.x, y: D.y, zoom: D.k };
  }
  function E(D, _) {
    return p ? new Promise((M) => {
      h?.interpolate(_?.interpolate === "linear" ? qo : es).scaleTo(Na(p, _?.duration, _?.ease, () => M(!0)), D);
    }) : Promise.resolve(!1);
  }
  function V(D, _) {
    return p ? new Promise((M) => {
      h?.interpolate(_?.interpolate === "linear" ? qo : es).scaleBy(Na(p, _?.duration, _?.ease, () => M(!0)), D);
    }) : Promise.resolve(!1);
  }
  function H(D) {
    h?.scaleExtent(D);
  }
  function I(D) {
    h?.translateExtent(D);
  }
  function A(D) {
    const _ = !qn(D) || D < 0 ? 0 : D;
    h?.clickDistance(_);
  }
  return {
    update: w,
    destroy: b,
    setViewport: O,
    setViewportConstrained: k,
    getViewport: x,
    scaleTo: E,
    scaleBy: V,
    setScaleExtent: H,
    setTranslateExtent: I,
    syncViewport: C,
    setClickDistance: A
  };
}
var jc;
(function(t) {
  t.Line = "line", t.Handle = "handle";
})(jc || (jc = {}));
var d2 = /* @__PURE__ */ ne("<div><!></div>");
function kr(t, e) {
  ae(e, !0);
  let n = g(e, "id", 7, null), r = g(e, "type", 7, "source"), o = g(e, "position", 23, () => _e.Top), i = g(e, "style", 7), s = g(e, "class", 7), a = g(e, "isConnectable", 7), l = g(e, "isConnectableStart", 7, !0), u = g(e, "isConnectableEnd", 7, !0), d = g(e, "isValidConnection", 7), h = g(e, "onconnect", 7), p = g(e, "ondisconnect", 7), v = g(e, "children", 7), m = /* @__PURE__ */ De(e, [
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
  const y = yn("svelteflow__node_id"), w = yn("svelteflow__node_connectable");
  let b = /* @__PURE__ */ $(() => r() === "target"), k = /* @__PURE__ */ $(() => a() !== void 0 ? a() : w.value), O = Cn(), C = /* @__PURE__ */ $(() => O.ariaLabelConfig), x = null;
  jt(() => {
    if (h() || p()) {
      O.edges;
      let N = O.connectionLookup.get(`${y}-${r()}${n() ? `-${n()}` : ""}`);
      if (x && !cb(N, x)) {
        const Y = N ?? /* @__PURE__ */ new Map();
        Ec(x, Y, p()), Ec(Y, x, h());
      }
      x = new Map(N);
    }
  });
  let E = /* @__PURE__ */ $(() => {
    if (!O.connection.inProgress)
      return [!1, !1, !1, !1, null];
    const { fromHandle: N, toHandle: Y, isValid: ee } = O.connection, j = N && N.nodeId === y && N.type === r() && N.id === n(), F = Y && Y.nodeId === y && Y.type === r() && Y.id === n(), W = O.connectionMode === bo.Strict ? N?.type !== r() : y !== N?.nodeId || n() !== N?.id;
    return [
      !0,
      j,
      F,
      W,
      F && ee
    ];
  }), V = /* @__PURE__ */ $(() => _o(c(E), 5)), H = /* @__PURE__ */ $(() => c(V)[0]), I = /* @__PURE__ */ $(() => c(V)[1]), A = /* @__PURE__ */ $(() => c(V)[2]), D = /* @__PURE__ */ $(() => c(V)[3]), _ = /* @__PURE__ */ $(() => c(V)[4]);
  function M(N) {
    const Y = O.onbeforeconnect ? O.onbeforeconnect(N) : N;
    Y && (O.addEdge(Y), O.onconnect?.(N));
  }
  function S(N) {
    const Y = Op(N);
    N.currentTarget && (Y && N.button === 0 || !Y) && Bc.onPointerDown(N, {
      handleId: n(),
      nodeId: y,
      isTarget: c(b),
      connectionRadius: O.connectionRadius,
      domNode: O.domNode,
      nodeLookup: O.nodeLookup,
      connectionMode: O.connectionMode,
      lib: "svelte",
      autoPanOnConnect: O.autoPanOnConnect,
      autoPanSpeed: O.autoPanSpeed,
      flowId: O.flowId,
      isValidConnection: d() ?? O.isValidConnection,
      updateConnection: O.updateConnection,
      cancelConnection: O.cancelConnection,
      panBy: O.panBy,
      onConnect: M,
      onConnectStart: (ee, j) => {
        O.onconnectstart?.(ee, {
          nodeId: j.nodeId,
          handleId: j.handleId,
          handleType: j.handleType
        });
      },
      onConnectEnd: (ee, j) => {
        O.onconnectend?.(ee, j);
      },
      getTransform: () => [O.viewport.x, O.viewport.y, O.viewport.zoom],
      getFromHandle: () => O.connection.fromHandle,
      dragThreshold: O.connectionDragThreshold,
      handleDomNode: N.currentTarget
    });
  }
  function P(N) {
    if (!y || !O.clickConnectStartHandle && !l())
      return;
    if (!O.clickConnectStartHandle) {
      O.onclickconnectstart?.(N, { nodeId: y, handleId: n(), handleType: r() }), O.clickConnectStartHandle = { nodeId: y, type: r(), id: n() };
      return;
    }
    const Y = Sp(N.target), ee = d() ?? O.isValidConnection, { connectionMode: j, clickConnectStartHandle: F, flowId: W, nodeLookup: G } = O, { connection: re, isValid: L } = Bc.isValid(N, {
      handle: { nodeId: y, id: n(), type: r() },
      connectionMode: j,
      fromNodeId: F.nodeId,
      fromHandleId: F.id ?? null,
      fromType: F.type,
      isValidConnection: ee,
      flowId: W,
      doc: Y,
      lib: "svelte",
      nodeLookup: G
    });
    L && re && M(re);
    const te = structuredClone(Bl(O.connection));
    delete te.inProgress, te.toPosition = te.toHandle ? te.toHandle.position : null, O.onclickconnectend?.(N, te), O.clickConnectStartHandle = null;
  }
  var z = {
    get id() {
      return n();
    },
    set id(N = null) {
      n(N), f();
    },
    get type() {
      return r();
    },
    set type(N = "source") {
      r(N), f();
    },
    get position() {
      return o();
    },
    set position(N = _e.Top) {
      o(N), f();
    },
    get style() {
      return i();
    },
    set style(N) {
      i(N), f();
    },
    get class() {
      return s();
    },
    set class(N) {
      s(N), f();
    },
    get isConnectable() {
      return a();
    },
    set isConnectable(N) {
      a(N), f();
    },
    get isConnectableStart() {
      return l();
    },
    set isConnectableStart(N = !0) {
      l(N), f();
    },
    get isConnectableEnd() {
      return u();
    },
    set isConnectableEnd(N = !0) {
      u(N), f();
    },
    get isValidConnection() {
      return d();
    },
    set isValidConnection(N) {
      d(N), f();
    },
    get onconnect() {
      return h();
    },
    set onconnect(N) {
      h(N), f();
    },
    get ondisconnect() {
      return p();
    },
    set ondisconnect(N) {
      p(N), f();
    },
    get children() {
      return v();
    },
    set children(N) {
      v(N), f();
    }
  }, B = d2(), q = () => {
  };
  Ue(B, () => ({
    "data-handleid": n(),
    "data-nodeid": y,
    "data-handlepos": o(),
    "data-id": `${O.flowId ?? ""}-${y ?? ""}-${n() ?? "null" ?? ""}-${r() ?? ""}`,
    class: [
      "svelte-flow__handle",
      `svelte-flow__handle-${o()}`,
      O.noDragClass,
      O.noPanClass,
      o(),
      s()
    ],
    onmousedown: S,
    ontouchstart: S,
    onclick: O.clickConnect ? P : void 0,
    onkeypress: q,
    style: i(),
    role: "button",
    "aria-label": c(C)["handle.ariaLabel"],
    tabindex: "-1",
    ...m,
    [gr]: {
      valid: c(_),
      connectingto: c(A),
      connectingfrom: c(I),
      source: !c(b),
      target: c(b),
      connectablestart: l(),
      connectableend: u(),
      connectable: c(k),
      connectionindicator: c(k) && (!c(H) || c(D)) && (c(H) || O.clickConnectStartHandle ? u() : l())
    }
  }));
  var U = X(B);
  return Ee(U, () => v() ?? Re), Z(B), T(t, B), le(z);
}
ie(
  kr,
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
var h2 = /* @__PURE__ */ ne("<!> <!>", 1);
function pu(t, e) {
  ae(e, !0);
  let n = g(e, "data", 7), r = g(e, "targetPosition", 23, () => _e.Top), o = g(e, "sourcePosition", 23, () => _e.Bottom);
  var i = {
    get data() {
      return n();
    },
    set data(d) {
      n(d), f();
    },
    get targetPosition() {
      return r();
    },
    set targetPosition(d = _e.Top) {
      r(d), f();
    },
    get sourcePosition() {
      return o();
    },
    set sourcePosition(d = _e.Bottom) {
      o(d), f();
    }
  }, s = h2(), a = J(s);
  kr(a, {
    type: "target",
    get position() {
      return r();
    }
  });
  var l = R(a), u = R(l);
  return kr(u, {
    type: "source",
    get position() {
      return o();
    }
  }), Ne(() => nt(l, ` ${n()?.label ?? ""} `)), T(t, s), le(i);
}
ie(pu, { data: {}, targetPosition: {}, sourcePosition: {} }, [], [], !0);
var p2 = /* @__PURE__ */ ne(" <!>", 1);
function Rp(t, e) {
  ae(e, !0);
  let n = g(e, "data", 23, () => ({ label: "Node" })), r = g(e, "sourcePosition", 23, () => _e.Bottom);
  var o = {
    get data() {
      return n();
    },
    set data(l = { label: "Node" }) {
      n(l), f();
    },
    get sourcePosition() {
      return r();
    },
    set sourcePosition(l = _e.Bottom) {
      r(l), f();
    }
  };
  Se();
  var i = p2(), s = J(i), a = R(s);
  return kr(a, {
    type: "source",
    get position() {
      return r();
    }
  }), Ne(() => nt(s, `${n()?.label ?? ""} `)), T(t, i), le(o);
}
ie(Rp, { data: {}, sourcePosition: {} }, [], [], !0);
var f2 = /* @__PURE__ */ ne(" <!>", 1);
function Bp(t, e) {
  ae(e, !0);
  let n = g(e, "data", 23, () => ({ label: "Node" })), r = g(e, "targetPosition", 23, () => _e.Top);
  var o = {
    get data() {
      return n();
    },
    set data(l = { label: "Node" }) {
      n(l), f();
    },
    get targetPosition() {
      return r();
    },
    set targetPosition(l = _e.Top) {
      r(l), f();
    }
  };
  Se();
  var i = f2(), s = J(i), a = R(s);
  return kr(a, {
    type: "target",
    get position() {
      return r();
    }
  }), Ne(() => nt(s, `${n()?.label ?? ""} `)), T(t, i), le(o);
}
ie(Bp, { data: {}, targetPosition: {} }, [], [], !0);
function jp(t, e) {
}
ie(jp, {}, [], [], !0);
function za(t, e, n) {
  if (!n || !e)
    return;
  const r = n === "root" ? e : e.querySelector(`.svelte-flow__${n}`);
  r && r.appendChild(t);
}
function Kp(t, e) {
  const n = /* @__PURE__ */ $(Cn), r = /* @__PURE__ */ $(() => c(n).domNode);
  let o;
  return c(r) ? za(t, c(r), e) : o = Qr(() => {
    He(() => {
      za(t, c(r), e), o?.();
    });
  }), {
    async update(i) {
      za(t, c(r), i);
    },
    destroy() {
      t.parentNode && t.parentNode.removeChild(t), o?.();
    }
  };
}
function Fp() {
  let t = /* @__PURE__ */ me(typeof window > "u");
  if (c(t)) {
    const e = Qr(() => {
      He(() => {
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
const Kc = (t) => hb(t), g2 = (t) => yp(t);
function Vn(t) {
  return t === void 0 ? void 0 : `${t}px`;
}
const _s = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
};
var v2 = /* @__PURE__ */ ne("<div><!></div>");
const m2 = {
  hash: "svelte-herprs",
  code: ".transparent.svelte-herprs {background:transparent;}"
};
function Zp(t, e) {
  ae(e, !0), Ge(t, m2);
  let n = g(e, "x", 7, 0), r = g(e, "y", 7, 0), o = g(e, "width", 7), i = g(e, "height", 7), s = g(e, "selectEdgeOnClick", 7, !1), a = g(e, "transparent", 7, !1), l = g(e, "class", 7), u = g(e, "children", 7), d = /* @__PURE__ */ De(e, [
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
  const h = Cn(), p = yn("svelteflow__edge_id");
  if (!p)
    throw new Error("EdgeLabel must be used within an edge");
  let v = /* @__PURE__ */ $(() => h.visible.edges.get(p)?.zIndex);
  var m = {
    get x() {
      return n();
    },
    set x(k = 0) {
      n(k), f();
    },
    get y() {
      return r();
    },
    set y(k = 0) {
      r(k), f();
    },
    get width() {
      return o();
    },
    set width(k) {
      o(k), f();
    },
    get height() {
      return i();
    },
    set height(k) {
      i(k), f();
    },
    get selectEdgeOnClick() {
      return s();
    },
    set selectEdgeOnClick(k = !1) {
      s(k), f();
    },
    get transparent() {
      return a();
    },
    set transparent(k = !1) {
      a(k), f();
    },
    get class() {
      return l();
    },
    set class(k) {
      l(k), f();
    },
    get children() {
      return u();
    },
    set children(k) {
      u(k), f();
    }
  }, y = v2(), w = () => {
    s() && h.handleEdgeSelection(p);
  };
  Ue(
    y,
    (k) => ({
      class: [
        "svelte-flow__edge-label",
        { transparent: a() },
        l()
      ],
      tabindex: "-1",
      onclick: w,
      ...d,
      [Pn]: k
    }),
    [
      () => ({
        display: Fp().value ? "none" : void 0,
        cursor: s() ? "pointer" : void 0,
        transform: `translate(-50%, -50%) translate(${n() ?? ""}px,${r() ?? ""}px)`,
        "pointer-events": "all",
        width: Vn(o()),
        height: Vn(i()),
        "z-index": c(v)
      })
    ],
    void 0,
    void 0,
    "svelte-herprs"
  );
  var b = X(y);
  return Ee(b, () => u() ?? Re), Z(y), zt(y, (k, O) => Kp?.(k, O), () => "edge-labels"), T(t, y), le(m);
}
ie(
  Zp,
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
var y2 = /* @__PURE__ */ Ce("<path></path>"), w2 = /* @__PURE__ */ Ce('<path fill="none"></path><!><!>', 1);
function $i(t, e) {
  ae(e, !0);
  let n = g(e, "id", 7), r = g(e, "path", 7), o = g(e, "label", 7), i = g(e, "labelX", 7), s = g(e, "labelY", 7), a = g(e, "labelStyle", 7), l = g(e, "markerStart", 7), u = g(e, "markerEnd", 7), d = g(e, "style", 7), h = g(e, "interactionWidth", 7, 20), p = g(e, "class", 7), v = /* @__PURE__ */ De(e, [
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
    set id(x) {
      n(x), f();
    },
    get path() {
      return r();
    },
    set path(x) {
      r(x), f();
    },
    get label() {
      return o();
    },
    set label(x) {
      o(x), f();
    },
    get labelX() {
      return i();
    },
    set labelX(x) {
      i(x), f();
    },
    get labelY() {
      return s();
    },
    set labelY(x) {
      s(x), f();
    },
    get labelStyle() {
      return a();
    },
    set labelStyle(x) {
      a(x), f();
    },
    get markerStart() {
      return l();
    },
    set markerStart(x) {
      l(x), f();
    },
    get markerEnd() {
      return u();
    },
    set markerEnd(x) {
      u(x), f();
    },
    get style() {
      return d();
    },
    set style(x) {
      d(x), f();
    },
    get interactionWidth() {
      return h();
    },
    set interactionWidth(x = 20) {
      h(x), f();
    },
    get class() {
      return p();
    },
    set class(x) {
      p(x), f();
    }
  }, y = w2(), w = J(y), b = R(w);
  {
    var k = (x) => {
      var E = y2();
      Ue(E, () => ({
        d: r(),
        "stroke-opacity": 0,
        "stroke-width": h(),
        fill: "none",
        class: "svelte-flow__edge-interaction",
        ...v
      })), T(x, E);
    };
    se(b, (x) => {
      h() > 0 && x(k);
    });
  }
  var O = R(b);
  {
    var C = (x) => {
      Zp(x, {
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
        children: (E, V) => {
          Se();
          var H = Me();
          Ne(() => nt(H, o())), T(E, H);
        },
        $$slots: { default: !0 }
      });
    };
    se(O, (x) => {
      o() && x(C);
    });
  }
  return Ne(() => {
    Oe(w, "id", n()), Oe(w, "d", r()), Xt(w, 0, cr(["svelte-flow__edge-path", p()])), Oe(w, "marker-start", l()), Oe(w, "marker-end", u()), Pt(w, d());
  }), T(t, y), le(m);
}
ie(
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
function fu(t, e) {
  ae(e, !0);
  let n = g(e, "id", 7), r = g(e, "interactionWidth", 7), o = g(e, "label", 7), i = g(e, "labelStyle", 7), s = g(e, "markerEnd", 7), a = g(e, "markerStart", 7), l = g(e, "pathOptions", 7), u = g(e, "sourcePosition", 7), d = g(e, "sourceX", 7), h = g(e, "sourceY", 7), p = g(e, "style", 7), v = g(e, "targetPosition", 7), m = g(e, "targetX", 7), y = g(e, "targetY", 7), w = /* @__PURE__ */ $(() => Pp({
    sourceX: d(),
    sourceY: h(),
    targetX: m(),
    targetY: y(),
    sourcePosition: u(),
    targetPosition: v(),
    curvature: l()?.curvature
  })), b = /* @__PURE__ */ $(() => _o(c(w), 3)), k = /* @__PURE__ */ $(() => c(b)[0]), O = /* @__PURE__ */ $(() => c(b)[1]), C = /* @__PURE__ */ $(() => c(b)[2]);
  var x = {
    get id() {
      return n();
    },
    set id(E) {
      n(E), f();
    },
    get interactionWidth() {
      return r();
    },
    set interactionWidth(E) {
      r(E), f();
    },
    get label() {
      return o();
    },
    set label(E) {
      o(E), f();
    },
    get labelStyle() {
      return i();
    },
    set labelStyle(E) {
      i(E), f();
    },
    get markerEnd() {
      return s();
    },
    set markerEnd(E) {
      s(E), f();
    },
    get markerStart() {
      return a();
    },
    set markerStart(E) {
      a(E), f();
    },
    get pathOptions() {
      return l();
    },
    set pathOptions(E) {
      l(E), f();
    },
    get sourcePosition() {
      return u();
    },
    set sourcePosition(E) {
      u(E), f();
    },
    get sourceX() {
      return d();
    },
    set sourceX(E) {
      d(E), f();
    },
    get sourceY() {
      return h();
    },
    set sourceY(E) {
      h(E), f();
    },
    get style() {
      return p();
    },
    set style(E) {
      p(E), f();
    },
    get targetPosition() {
      return v();
    },
    set targetPosition(E) {
      v(E), f();
    },
    get targetX() {
      return m();
    },
    set targetX(E) {
      m(E), f();
    },
    get targetY() {
      return y();
    },
    set targetY(E) {
      y(E), f();
    }
  };
  return $i(t, {
    get id() {
      return n();
    },
    get path() {
      return c(k);
    },
    get labelX() {
      return c(O);
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
      return p();
    }
  }), le(x);
}
ie(
  fu,
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
function Wp(t, e) {
  ae(e, !0);
  let n = g(e, "interactionWidth", 7), r = g(e, "label", 7), o = g(e, "labelStyle", 7), i = g(e, "style", 7), s = g(e, "markerEnd", 7), a = g(e, "markerStart", 7), l = g(e, "sourcePosition", 7), u = g(e, "sourceX", 7), d = g(e, "sourceY", 7), h = g(e, "targetPosition", 7), p = g(e, "targetX", 7), v = g(e, "targetY", 7), m = /* @__PURE__ */ $(() => uu({
    sourceX: u(),
    sourceY: d(),
    targetX: p(),
    targetY: v(),
    sourcePosition: l(),
    targetPosition: h()
  })), y = /* @__PURE__ */ $(() => _o(c(m), 3)), w = /* @__PURE__ */ $(() => c(y)[0]), b = /* @__PURE__ */ $(() => c(y)[1]), k = /* @__PURE__ */ $(() => c(y)[2]);
  var O = {
    get interactionWidth() {
      return n();
    },
    set interactionWidth(C) {
      n(C), f();
    },
    get label() {
      return r();
    },
    set label(C) {
      r(C), f();
    },
    get labelStyle() {
      return o();
    },
    set labelStyle(C) {
      o(C), f();
    },
    get style() {
      return i();
    },
    set style(C) {
      i(C), f();
    },
    get markerEnd() {
      return s();
    },
    set markerEnd(C) {
      s(C), f();
    },
    get markerStart() {
      return a();
    },
    set markerStart(C) {
      a(C), f();
    },
    get sourcePosition() {
      return l();
    },
    set sourcePosition(C) {
      l(C), f();
    },
    get sourceX() {
      return u();
    },
    set sourceX(C) {
      u(C), f();
    },
    get sourceY() {
      return d();
    },
    set sourceY(C) {
      d(C), f();
    },
    get targetPosition() {
      return h();
    },
    set targetPosition(C) {
      h(C), f();
    },
    get targetX() {
      return p();
    },
    set targetX(C) {
      p(C), f();
    },
    get targetY() {
      return v();
    },
    set targetY(C) {
      v(C), f();
    }
  };
  return $i(t, {
    get path() {
      return c(w);
    },
    get labelX() {
      return c(b);
    },
    get labelY() {
      return c(k);
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
  }), le(O);
}
ie(
  Wp,
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
function Xp(t, e) {
  ae(e, !0);
  let n = g(e, "sourceX", 7), r = g(e, "sourceY", 7), o = g(e, "targetX", 7), i = g(e, "targetY", 7), s = g(e, "label", 7), a = g(e, "labelStyle", 7), l = g(e, "markerStart", 7), u = g(e, "markerEnd", 7), d = g(e, "interactionWidth", 7), h = g(e, "style", 7), p = /* @__PURE__ */ $(() => Np({
    sourceX: n(),
    sourceY: r(),
    targetX: o(),
    targetY: i()
  })), v = /* @__PURE__ */ $(() => _o(c(p), 3)), m = /* @__PURE__ */ $(() => c(v)[0]), y = /* @__PURE__ */ $(() => c(v)[1]), w = /* @__PURE__ */ $(() => c(v)[2]);
  var b = {
    get sourceX() {
      return n();
    },
    set sourceX(k) {
      n(k), f();
    },
    get sourceY() {
      return r();
    },
    set sourceY(k) {
      r(k), f();
    },
    get targetX() {
      return o();
    },
    set targetX(k) {
      o(k), f();
    },
    get targetY() {
      return i();
    },
    set targetY(k) {
      i(k), f();
    },
    get label() {
      return s();
    },
    set label(k) {
      s(k), f();
    },
    get labelStyle() {
      return a();
    },
    set labelStyle(k) {
      a(k), f();
    },
    get markerStart() {
      return l();
    },
    set markerStart(k) {
      l(k), f();
    },
    get markerEnd() {
      return u();
    },
    set markerEnd(k) {
      u(k), f();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(k) {
      d(k), f();
    },
    get style() {
      return h();
    },
    set style(k) {
      h(k), f();
    }
  };
  return $i(t, {
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
  }), le(b);
}
ie(
  Xp,
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
function qp(t, e) {
  ae(e, !0);
  let n = g(e, "sourceX", 7), r = g(e, "sourceY", 7), o = g(e, "sourcePosition", 7), i = g(e, "targetX", 7), s = g(e, "targetY", 7), a = g(e, "targetPosition", 7), l = g(e, "label", 7), u = g(e, "labelStyle", 7), d = g(e, "markerStart", 7), h = g(e, "markerEnd", 7), p = g(e, "interactionWidth", 7), v = g(e, "style", 7), m = /* @__PURE__ */ $(() => uu({
    sourceX: n(),
    sourceY: r(),
    targetX: i(),
    targetY: s(),
    sourcePosition: o(),
    targetPosition: a(),
    borderRadius: 0
  })), y = /* @__PURE__ */ $(() => _o(c(m), 3)), w = /* @__PURE__ */ $(() => c(y)[0]), b = /* @__PURE__ */ $(() => c(y)[1]), k = /* @__PURE__ */ $(() => c(y)[2]);
  var O = {
    get sourceX() {
      return n();
    },
    set sourceX(C) {
      n(C), f();
    },
    get sourceY() {
      return r();
    },
    set sourceY(C) {
      r(C), f();
    },
    get sourcePosition() {
      return o();
    },
    set sourcePosition(C) {
      o(C), f();
    },
    get targetX() {
      return i();
    },
    set targetX(C) {
      i(C), f();
    },
    get targetY() {
      return s();
    },
    set targetY(C) {
      s(C), f();
    },
    get targetPosition() {
      return a();
    },
    set targetPosition(C) {
      a(C), f();
    },
    get label() {
      return l();
    },
    set label(C) {
      l(C), f();
    },
    get labelStyle() {
      return u();
    },
    set labelStyle(C) {
      u(C), f();
    },
    get markerStart() {
      return d();
    },
    set markerStart(C) {
      d(C), f();
    },
    get markerEnd() {
      return h();
    },
    set markerEnd(C) {
      h(C), f();
    },
    get interactionWidth() {
      return p();
    },
    set interactionWidth(C) {
      p(C), f();
    },
    get style() {
      return v();
    },
    set style(C) {
      v(C), f();
    }
  };
  return $i(t, {
    get path() {
      return c(w);
    },
    get labelX() {
      return c(b);
    },
    get labelY() {
      return c(k);
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
      return p();
    },
    get style() {
      return v();
    }
  }), le(O);
}
ie(
  qp,
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
class b2 extends Map {
  /** @type {Map<K, Source<number>>} */
  #e = /* @__PURE__ */ new Map();
  #t = /* @__PURE__ */ me(0);
  #n = /* @__PURE__ */ me(0);
  #r = er || -1;
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
    return er === this.#r ? /* @__PURE__ */ me(e) : nr(e);
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
      o = this.#o(0), r.set(e, o), K(this.#n, super.size), On(a);
    else if (i !== n) {
      On(o);
      var l = a.reactions === null ? null : new Set(a.reactions), u = l === null || !o.reactions?.every(
        (d) => (
          /** @type {NonNullable<typeof v_reactions>} */
          l.has(d)
        )
      );
      u && On(a);
    }
    return s;
  }
  /** @param {K} key */
  delete(e) {
    var n = this.#e, r = n.get(e), o = super.delete(e);
    return r !== void 0 && (n.delete(e), K(this.#n, super.size), K(r, -1), On(this.#t)), o;
  }
  clear() {
    if (super.size !== 0) {
      super.clear();
      var e = this.#e;
      K(this.#n, 0);
      for (var n of e.values())
        K(n, -1);
      On(this.#t), e.clear();
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
class x2 {
  #e;
  #t;
  /**
   *
   * @param {() => T} fn
   * @param {(update: () => void) => void} onsubscribe
   */
  constructor(e, n) {
    this.#e = e, this.#t = Jr(n);
  }
  get current() {
    return this.#t(), this.#e();
  }
}
const k2 = /\(.+\)/, C2 = /* @__PURE__ */ new Set(["all", "print", "screen", "and", "or", "not", "only"]);
class Yp extends x2 {
  /**
   * @param {string} query A media query string
   * @param {boolean} [fallback] Fallback value for the server
   */
  constructor(e, n) {
    let r = k2.test(e) || // we need to use `some` here because technically this `window.matchMedia('random,screen')` still returns true
    e.split(/[\s,]+/).some((i) => C2.has(i.trim())) ? e : `(${e})`;
    const o = window.matchMedia(r);
    super(
      () => o.matches,
      (i) => ft(o, "change", i)
    );
  }
}
function $2(t, e, n, r) {
  const o = /* @__PURE__ */ new Map();
  return au(t, { x: 0, y: 0, width: n, height: r }, e, !0).forEach((i) => {
    o.set(i.id, i);
  }), o;
}
function Fc(t) {
  const { edges: e, defaultEdgeOptions: n, nodeLookup: r, previousEdges: o, connectionMode: i, onerror: s, onlyRenderVisible: a, elevateEdgesOnSelect: l } = t, u = /* @__PURE__ */ new Map();
  for (const d of e) {
    const h = r.get(d.source), p = r.get(d.target);
    if (!h || !p)
      continue;
    if (a) {
      const { visibleNodes: y, transform: w, width: b, height: k } = t;
      if (_b({
        sourceNode: h,
        targetNode: p,
        width: b,
        height: k,
        transform: w
      }))
        y.set(h.id, h), y.set(p.id, p);
      else
        continue;
    }
    const v = o.get(d.id);
    if (v && d === v.edge && h == v.sourceNode && p == v.targetNode) {
      u.set(d.id, v);
      continue;
    }
    const m = Tb({
      id: d.id,
      sourceNode: h,
      targetNode: p,
      sourceHandle: d.sourceHandle || null,
      targetHandle: d.targetHandle || null,
      connectionMode: i,
      onError: s
    });
    m && u.set(d.id, {
      ...n,
      ...d,
      ...m,
      zIndex: Sb({
        selected: d.selected,
        zIndex: d.zIndex ?? n.zIndex,
        sourceNode: h,
        targetNode: p,
        elevateOnSelect: l
      }),
      sourceNode: h,
      targetNode: p,
      edge: d
    });
  }
  return u;
}
const Up = {
  input: Rp,
  output: Bp,
  default: pu,
  group: jp
}, Gp = {
  straight: Xp,
  smoothstep: Wp,
  default: fu,
  step: qp
};
function S2(t, e, n, r, o, i) {
  if (e && !n && r && o) {
    const s = xi(i, {
      filter: (a) => !!((a.width || a.initialWidth) && (a.height || a.initialHeight))
    });
    return lu(s, r, o, 0.5, 2, 0.1);
  } else
    return n ?? { x: 0, y: 0, zoom: 1 };
}
function _2(t) {
  class e {
    #e = /* @__PURE__ */ $(() => t.props.id ?? "1");
    get flowId() {
      return c(this.#e);
    }
    set flowId(r) {
      K(this.#e, r);
    }
    #t = /* @__PURE__ */ me(null);
    get domNode() {
      return c(this.#t);
    }
    set domNode(r) {
      K(this.#t, r);
    }
    #n = /* @__PURE__ */ me(null);
    get panZoom() {
      return c(this.#n);
    }
    set panZoom(r) {
      K(this.#n, r);
    }
    #r = /* @__PURE__ */ me(t.width ?? 0);
    get width() {
      return c(this.#r);
    }
    set width(r) {
      K(this.#r, r);
    }
    #o = /* @__PURE__ */ me(t.height ?? 0);
    get height() {
      return c(this.#o);
    }
    set height(r) {
      K(this.#o, r);
    }
    #i = /* @__PURE__ */ $(() => {
      const r = Rb(t.nodes, this.nodeLookup, this.parentLookup, {
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
    #a = /* @__PURE__ */ $(() => this.panZoom !== null);
    get viewportInitialized() {
      return c(this.#a);
    }
    set viewportInitialized(r) {
      K(this.#a, r);
    }
    #s = /* @__PURE__ */ $(() => (Wb(this.connectionLookup, this.edgeLookup, t.edges), t.edges));
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
    #l = /* @__PURE__ */ $(() => {
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
    #u = /* @__PURE__ */ $(() => {
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
      let h, p;
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
        h = $2(s, b, y, w), p = Fc({
          ...v,
          onlyRenderVisible: !0,
          visibleNodes: h,
          transform: b,
          width: y,
          height: w
        });
      } else
        h = this.nodeLookup, p = Fc(v);
      return { nodes: h, edges: p };
    });
    get visible() {
      return c(this.#c);
    }
    set visible(r) {
      K(this.#c, r);
    }
    #d = /* @__PURE__ */ $(() => t.props.nodesDraggable ?? !0);
    get nodesDraggable() {
      return c(this.#d);
    }
    set nodesDraggable(r) {
      K(this.#d, r);
    }
    #h = /* @__PURE__ */ $(() => t.props.nodesConnectable ?? !0);
    get nodesConnectable() {
      return c(this.#h);
    }
    set nodesConnectable(r) {
      K(this.#h, r);
    }
    #f = /* @__PURE__ */ $(() => t.props.elementsSelectable ?? !0);
    get elementsSelectable() {
      return c(this.#f);
    }
    set elementsSelectable(r) {
      K(this.#f, r);
    }
    #p = /* @__PURE__ */ $(() => t.props.nodesFocusable ?? !0);
    get nodesFocusable() {
      return c(this.#p);
    }
    set nodesFocusable(r) {
      K(this.#p, r);
    }
    #y = /* @__PURE__ */ $(() => t.props.edgesFocusable ?? !0);
    get edgesFocusable() {
      return c(this.#y);
    }
    set edgesFocusable(r) {
      K(this.#y, r);
    }
    #v = /* @__PURE__ */ $(() => t.props.disableKeyboardA11y ?? !1);
    get disableKeyboardA11y() {
      return c(this.#v);
    }
    set disableKeyboardA11y(r) {
      K(this.#v, r);
    }
    #w = /* @__PURE__ */ $(() => t.props.minZoom ?? 0.5);
    get minZoom() {
      return c(this.#w);
    }
    set minZoom(r) {
      K(this.#w, r);
    }
    #m = /* @__PURE__ */ $(() => t.props.maxZoom ?? 2);
    get maxZoom() {
      return c(this.#m);
    }
    set maxZoom(r) {
      K(this.#m, r);
    }
    #g = /* @__PURE__ */ $(() => t.props.nodeOrigin ?? [0, 0]);
    get nodeOrigin() {
      return c(this.#g);
    }
    set nodeOrigin(r) {
      K(this.#g, r);
    }
    #b = /* @__PURE__ */ $(() => t.props.nodeExtent ?? el);
    get nodeExtent() {
      return c(this.#b);
    }
    set nodeExtent(r) {
      K(this.#b, r);
    }
    #x = /* @__PURE__ */ $(() => t.props.translateExtent ?? el);
    get translateExtent() {
      return c(this.#x);
    }
    set translateExtent(r) {
      K(this.#x, r);
    }
    #k = /* @__PURE__ */ $(() => t.props.defaultEdgeOptions ?? {});
    get defaultEdgeOptions() {
      return c(this.#k);
    }
    set defaultEdgeOptions(r) {
      K(this.#k, r);
    }
    #C = /* @__PURE__ */ $(() => t.props.nodeDragThreshold ?? 1);
    get nodeDragThreshold() {
      return c(this.#C);
    }
    set nodeDragThreshold(r) {
      K(this.#C, r);
    }
    #$ = /* @__PURE__ */ $(() => t.props.autoPanOnNodeDrag ?? !0);
    get autoPanOnNodeDrag() {
      return c(this.#$);
    }
    set autoPanOnNodeDrag(r) {
      K(this.#$, r);
    }
    #S = /* @__PURE__ */ $(() => t.props.autoPanOnConnect ?? !0);
    get autoPanOnConnect() {
      return c(this.#S);
    }
    set autoPanOnConnect(r) {
      K(this.#S, r);
    }
    #_ = /* @__PURE__ */ $(() => t.props.autoPanOnNodeFocus ?? !0);
    get autoPanOnNodeFocus() {
      return c(this.#_);
    }
    set autoPanOnNodeFocus(r) {
      K(this.#_, r);
    }
    #O = /* @__PURE__ */ $(() => t.props.autoPanSpeed ?? 15);
    get autoPanSpeed() {
      return c(this.#O);
    }
    set autoPanSpeed(r) {
      K(this.#O, r);
    }
    #P = /* @__PURE__ */ $(() => t.props.connectionDragThreshold ?? 1);
    get connectionDragThreshold() {
      return c(this.#P);
    }
    set connectionDragThreshold(r) {
      K(this.#P, r);
    }
    fitViewQueued = t.props.fitView ?? !1;
    fitViewOptions = t.props.fitViewOptions;
    fitViewResolver = null;
    #E = /* @__PURE__ */ $(() => t.props.snapGrid ?? null);
    get snapGrid() {
      return c(this.#E);
    }
    set snapGrid(r) {
      K(this.#E, r);
    }
    #N = /* @__PURE__ */ me(!1);
    get dragging() {
      return c(this.#N);
    }
    set dragging(r) {
      K(this.#N, r);
    }
    #z = /* @__PURE__ */ me(null);
    get selectionRect() {
      return c(this.#z);
    }
    set selectionRect(r) {
      K(this.#z, r);
    }
    #M = /* @__PURE__ */ me(!1);
    get selectionKeyPressed() {
      return c(this.#M);
    }
    set selectionKeyPressed(r) {
      K(this.#M, r);
    }
    #T = /* @__PURE__ */ me(!1);
    get multiselectionKeyPressed() {
      return c(this.#T);
    }
    set multiselectionKeyPressed(r) {
      K(this.#T, r);
    }
    #A = /* @__PURE__ */ me(!1);
    get deleteKeyPressed() {
      return c(this.#A);
    }
    set deleteKeyPressed(r) {
      K(this.#A, r);
    }
    #D = /* @__PURE__ */ me(!1);
    get panActivationKeyPressed() {
      return c(this.#D);
    }
    set panActivationKeyPressed(r) {
      K(this.#D, r);
    }
    #V = /* @__PURE__ */ me(!1);
    get zoomActivationKeyPressed() {
      return c(this.#V);
    }
    set zoomActivationKeyPressed(r) {
      K(this.#V, r);
    }
    #H = /* @__PURE__ */ me(null);
    get selectionRectMode() {
      return c(this.#H);
    }
    set selectionRectMode(r) {
      K(this.#H, r);
    }
    #L = /* @__PURE__ */ me("");
    get ariaLiveMessage() {
      return c(this.#L);
    }
    set ariaLiveMessage(r) {
      K(this.#L, r);
    }
    #I = /* @__PURE__ */ $(() => t.props.selectionMode ?? Cs.Partial);
    get selectionMode() {
      return c(this.#I);
    }
    set selectionMode(r) {
      K(this.#I, r);
    }
    #R = /* @__PURE__ */ $(() => ({ ...Up, ...t.props.nodeTypes }));
    get nodeTypes() {
      return c(this.#R);
    }
    set nodeTypes(r) {
      K(this.#R, r);
    }
    #B = /* @__PURE__ */ $(() => ({ ...Gp, ...t.props.edgeTypes }));
    get edgeTypes() {
      return c(this.#B);
    }
    set edgeTypes(r) {
      K(this.#B, r);
    }
    #j = /* @__PURE__ */ $(() => t.props.noPanClass ?? "nopan");
    get noPanClass() {
      return c(this.#j);
    }
    set noPanClass(r) {
      K(this.#j, r);
    }
    #K = /* @__PURE__ */ $(() => t.props.noDragClass ?? "nodrag");
    get noDragClass() {
      return c(this.#K);
    }
    set noDragClass(r) {
      K(this.#K, r);
    }
    #F = /* @__PURE__ */ $(() => t.props.noWheelClass ?? "nowheel");
    get noWheelClass() {
      return c(this.#F);
    }
    set noWheelClass(r) {
      K(this.#F, r);
    }
    #Z = /* @__PURE__ */ $(() => kb(t.props.ariaLabelConfig));
    get ariaLabelConfig() {
      return c(this.#Z);
    }
    set ariaLabelConfig(r) {
      K(this.#Z, r);
    }
    #W = /* @__PURE__ */ me(S2(this.nodesInitialized, t.props.fitView, t.props.initialViewport, this.width, this.height, this.nodeLookup));
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
    #X = /* @__PURE__ */ me(
      // _connection is viewport independent and originating from XYHandle
      tl
    );
    get _connection() {
      return c(this.#X);
    }
    set _connection(r) {
      K(this.#X, r);
    }
    #q = /* @__PURE__ */ $(() => this._connection.inProgress ? {
      ...this._connection,
      to: Ci(this._connection.to, [this.viewport.x, this.viewport.y, this.viewport.zoom])
    } : this._connection);
    get connection() {
      return c(this.#q);
    }
    set connection(r) {
      K(this.#q, r);
    }
    #Y = /* @__PURE__ */ $(() => t.props.connectionMode ?? bo.Strict);
    get connectionMode() {
      return c(this.#Y);
    }
    set connectionMode(r) {
      K(this.#Y, r);
    }
    #U = /* @__PURE__ */ $(() => t.props.connectionRadius ?? 20);
    get connectionRadius() {
      return c(this.#U);
    }
    set connectionRadius(r) {
      K(this.#U, r);
    }
    #G = /* @__PURE__ */ $(() => t.props.isValidConnection ?? (() => !0));
    get isValidConnection() {
      return c(this.#G);
    }
    set isValidConnection(r) {
      K(this.#G, r);
    }
    #J = /* @__PURE__ */ $(() => t.props.selectNodesOnDrag ?? !0);
    get selectNodesOnDrag() {
      return c(this.#J);
    }
    set selectNodesOnDrag(r) {
      K(this.#J, r);
    }
    #Q = /* @__PURE__ */ $(() => t.props.defaultMarkerColor === void 0 ? "#b1b1b7" : t.props.defaultMarkerColor);
    get defaultMarkerColor() {
      return c(this.#Q);
    }
    set defaultMarkerColor(r) {
      K(this.#Q, r);
    }
    #ee = /* @__PURE__ */ $(() => Ab(t.edges, {
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
    #te = /* @__PURE__ */ $(() => t.props.onlyRenderVisibleElements ?? !1);
    get onlyRenderVisibleElements() {
      return c(this.#te);
    }
    set onlyRenderVisibleElements(r) {
      K(this.#te, r);
    }
    #ne = /* @__PURE__ */ $(() => t.props.onflowerror ?? yb);
    get onerror() {
      return c(this.#ne);
    }
    set onerror(r) {
      K(this.#ne, r);
    }
    #re = /* @__PURE__ */ $(() => t.props.ondelete);
    get ondelete() {
      return c(this.#re);
    }
    set ondelete(r) {
      K(this.#re, r);
    }
    #oe = /* @__PURE__ */ $(() => t.props.onbeforedelete);
    get onbeforedelete() {
      return c(this.#oe);
    }
    set onbeforedelete(r) {
      K(this.#oe, r);
    }
    #ie = /* @__PURE__ */ $(() => t.props.onbeforeconnect);
    get onbeforeconnect() {
      return c(this.#ie);
    }
    set onbeforeconnect(r) {
      K(this.#ie, r);
    }
    #se = /* @__PURE__ */ $(() => t.props.onconnect);
    get onconnect() {
      return c(this.#se);
    }
    set onconnect(r) {
      K(this.#se, r);
    }
    #ae = /* @__PURE__ */ $(() => t.props.onconnectstart);
    get onconnectstart() {
      return c(this.#ae);
    }
    set onconnectstart(r) {
      K(this.#ae, r);
    }
    #le = /* @__PURE__ */ $(() => t.props.onconnectend);
    get onconnectend() {
      return c(this.#le);
    }
    set onconnectend(r) {
      K(this.#le, r);
    }
    #ue = /* @__PURE__ */ $(() => t.props.onbeforereconnect);
    get onbeforereconnect() {
      return c(this.#ue);
    }
    set onbeforereconnect(r) {
      K(this.#ue, r);
    }
    #ce = /* @__PURE__ */ $(() => t.props.onreconnect);
    get onreconnect() {
      return c(this.#ce);
    }
    set onreconnect(r) {
      K(this.#ce, r);
    }
    #de = /* @__PURE__ */ $(() => t.props.onreconnectstart);
    get onreconnectstart() {
      return c(this.#de);
    }
    set onreconnectstart(r) {
      K(this.#de, r);
    }
    #he = /* @__PURE__ */ $(() => t.props.onreconnectend);
    get onreconnectend() {
      return c(this.#he);
    }
    set onreconnectend(r) {
      K(this.#he, r);
    }
    #pe = /* @__PURE__ */ $(() => t.props.clickConnect ?? !0);
    get clickConnect() {
      return c(this.#pe);
    }
    set clickConnect(r) {
      K(this.#pe, r);
    }
    #fe = /* @__PURE__ */ $(() => t.props.onclickconnectstart);
    get onclickconnectstart() {
      return c(this.#fe);
    }
    set onclickconnectstart(r) {
      K(this.#fe, r);
    }
    #ge = /* @__PURE__ */ $(() => t.props.onclickconnectend);
    get onclickconnectend() {
      return c(this.#ge);
    }
    set onclickconnectend(r) {
      K(this.#ge, r);
    }
    #ve = /* @__PURE__ */ me(null);
    get clickConnectStartHandle() {
      return c(this.#ve);
    }
    set clickConnectStartHandle(r) {
      K(this.#ve, r);
    }
    #me = /* @__PURE__ */ $(() => t.props.onselectiondrag);
    get onselectiondrag() {
      return c(this.#me);
    }
    set onselectiondrag(r) {
      K(this.#me, r);
    }
    #ye = /* @__PURE__ */ $(() => t.props.onselectiondragstart);
    get onselectiondragstart() {
      return c(this.#ye);
    }
    set onselectiondragstart(r) {
      K(this.#ye, r);
    }
    #we = /* @__PURE__ */ $(() => t.props.onselectiondragstop);
    get onselectiondragstop() {
      return c(this.#we);
    }
    set onselectiondragstop(r) {
      K(this.#we, r);
    }
    resolveFitView = async () => {
      this.panZoom && (await vb(
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
    _prefersDark = new Yp("(prefers-color-scheme: dark)", t.props.colorModeSSR === "dark");
    #be = /* @__PURE__ */ $(() => t.props.colorMode === "system" ? this._prefersDark.current ? "dark" : "light" : t.props.colorMode ?? "light");
    get colorMode() {
      return c(this.#be);
    }
    set colorMode(r) {
      K(this.#be, r);
    }
    constructor() {
    }
    resetStoreValues() {
      this.dragging = !1, this.selectionRect = null, this.selectionRectMode = null, this.selectionKeyPressed = !1, this.multiselectionKeyPressed = !1, this.deleteKeyPressed = !1, this.panActivationKeyPressed = !1, this.zoomActivationKeyPressed = !1, this._connection = tl, this.clickConnectStartHandle = null, this.viewport = t.props.initialViewport ?? { x: 0, y: 0, zoom: 1 }, this.ariaLiveMessage = "";
    }
  }
  return new e();
}
function Cn() {
  const t = yn(Os);
  if (!t)
    throw new Error("To call useStore outside of <SvelteFlow /> you need to wrap your component in a <SvelteFlowProvider />");
  return t.getStore();
}
const Os = Symbol();
function Jp(t) {
  const e = _2(t);
  function n(A) {
    e.nodeTypes = {
      ...Up,
      ...A
    };
  }
  function r(A) {
    e.edgeTypes = {
      ...Gp,
      ...A
    };
  }
  function o(A) {
    e.edges = Eb(A, e.edges);
  }
  const i = (A, D = !1) => {
    e.nodes = e.nodes.map((_) => {
      const M = A.get(_.id);
      return M ? { ..._, position: M.position, dragging: D } : _;
    });
  };
  function s(A) {
    const { changes: D, updatedInternals: _ } = Fb(A, e.nodeLookup, e.parentLookup, e.domNode, e.nodeOrigin);
    if (!_)
      return;
    Lb(e.nodeLookup, e.parentLookup, {
      nodeOrigin: e.nodeOrigin,
      nodeExtent: e.nodeExtent
    }), e.fitViewQueued && e.resolveFitView();
    const M = /* @__PURE__ */ new Map();
    for (const S of D) {
      const P = e.nodeLookup.get(S.id)?.internals.userNode;
      if (!P)
        continue;
      const z = { ...P };
      switch (S.type) {
        case "dimensions": {
          const B = { ...z.measured, ...S.dimensions };
          S.setAttributes && (z.width = S.dimensions?.width ?? z.width, z.height = S.dimensions?.height ?? z.height), z.measured = B;
          break;
        }
        case "position":
          z.position = S.position ?? z.position;
          break;
      }
      M.set(S.id, z);
    }
    e.nodes = e.nodes.map((S) => M.get(S.id) ?? S);
  }
  function a(A) {
    const D = e.fitViewResolver ?? Promise.withResolvers();
    return e.fitViewQueued = !0, e.fitViewOptions = A, e.fitViewResolver = D, e.nodes = [...e.nodes], D.promise;
  }
  async function l(A, D, _) {
    const M = typeof _?.zoom < "u" ? _.zoom : e.maxZoom, S = e.panZoom;
    return S ? (await S.setViewport({
      x: e.width / 2 - A * M,
      y: e.height / 2 - D * M,
      zoom: M
    }, { duration: _?.duration, ease: _?.ease, interpolate: _?.interpolate }), Promise.resolve(!0)) : Promise.resolve(!1);
  }
  function u(A, D) {
    const _ = e.panZoom;
    return _ ? _.scaleBy(A, D) : Promise.resolve(!1);
  }
  function d(A) {
    return u(1.2, A);
  }
  function h(A) {
    return u(1 / 1.2, A);
  }
  function p(A) {
    const D = e.panZoom;
    D && (D.setScaleExtent([A, e.maxZoom]), e.minZoom = A);
  }
  function v(A) {
    const D = e.panZoom;
    D && (D.setScaleExtent([e.minZoom, A]), e.maxZoom = A);
  }
  function m(A) {
    const D = e.panZoom;
    D && (D.setTranslateExtent(A), e.translateExtent = A);
  }
  function y(A, D = null) {
    let _ = !1;
    const M = A.map((S) => (!D || D.has(S.id)) && S.selected ? (_ = !0, { ...S, selected: !1 }) : S);
    return [_, M];
  }
  function w(A) {
    const D = A?.nodes ? new Set(A.nodes.map((B) => B.id)) : null, [_, M] = y(e.nodes, D);
    _ && (e.nodes = M);
    const S = A?.edges ? new Set(A.edges.map((B) => B.id)) : null, [P, z] = y(e.edges, S);
    P && (e.edges = z);
  }
  function b(A) {
    const D = e.multiselectionKeyPressed;
    e.nodes = e.nodes.map((_) => {
      const M = A.includes(_.id), S = D && _.selected || M;
      return !!_.selected !== S ? { ..._, selected: S } : _;
    }), D || w({ nodes: [] });
  }
  function k(A) {
    const D = e.multiselectionKeyPressed;
    e.edges = e.edges.map((_) => {
      const M = A.includes(_.id), S = D && _.selected || M;
      return !!_.selected !== S ? { ..._, selected: S } : _;
    }), D || w({ edges: [] });
  }
  function O(A, D, _) {
    const M = e.nodeLookup.get(A);
    if (!M) {
      console.warn("012", oi.error012(A));
      return;
    }
    e.selectionRect = null, e.selectionRectMode = null, M.selected ? (D || M.selected && e.multiselectionKeyPressed) && (w({ nodes: [M], edges: [] }), requestAnimationFrame(() => _?.blur())) : b([A]);
  }
  function C(A) {
    const D = e.edgeLookup.get(A);
    if (!D) {
      console.warn("012", oi.error012(A));
      return;
    }
    (D.selectable || e.elementsSelectable && typeof D.selectable > "u") && (e.selectionRect = null, e.selectionRectMode = null, D.selected ? D.selected && e.multiselectionKeyPressed && w({ nodes: [], edges: [D] }) : k([A]));
  }
  function x(A, D) {
    const { nodeExtent: _, snapGrid: M, nodeOrigin: S, nodeLookup: P, nodesDraggable: z, onerror: B } = e, q = /* @__PURE__ */ new Map(), U = M?.[0] ?? 5, N = M?.[1] ?? 5, Y = A.x * U * D, ee = A.y * N * D;
    for (const j of P.values()) {
      if (!(j.selected && (j.draggable || z && typeof j.draggable > "u")))
        continue;
      let F = {
        x: j.internals.positionAbsolute.x + Y,
        y: j.internals.positionAbsolute.y + ee
      };
      M && (F = ki(F, M));
      const { position: W, positionAbsolute: G } = wp({
        nodeId: j.id,
        nextPosition: F,
        nodeLookup: P,
        nodeExtent: _,
        nodeOrigin: S,
        onError: B
      });
      j.position = W, j.internals.positionAbsolute = G, q.set(j.id, j);
    }
    i(q);
  }
  function E(A) {
    return Zb({
      delta: A,
      panZoom: e.panZoom,
      transform: [e.viewport.x, e.viewport.y, e.viewport.zoom],
      translateExtent: e.translateExtent,
      width: e.width,
      height: e.height
    });
  }
  const V = (A) => {
    e._connection = { ...A };
  };
  function H() {
    e._connection = tl;
  }
  function I() {
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
    setMinZoom: p,
    setMaxZoom: v,
    setTranslateExtent: m,
    unselectNodesAndEdges: w,
    addSelectedNodes: b,
    addSelectedEdges: k,
    handleNodeSelection: O,
    handleEdgeSelection: C,
    moveSelectedNodes: x,
    panBy: E,
    updateConnection: V,
    cancelConnection: H,
    reset: I
  });
}
function O2(t, e) {
  const { minZoom: n, maxZoom: r, initialViewport: o, onPanZoomStart: i, onPanZoom: s, onPanZoomEnd: a, translateExtent: l, setPanZoomInstance: u, onDraggingChange: d, onTransformChange: h } = e, p = c2({
    domNode: t,
    minZoom: n,
    maxZoom: r,
    translateExtent: l,
    viewport: o,
    onPanZoom: s,
    onPanZoomStart: i,
    onPanZoomEnd: a,
    onDraggingChange: d
  }), v = p.getViewport();
  return (o.x !== v.x || o.y !== v.y || o.zoom !== v.zoom) && h([v.x, v.y, v.zoom]), u(p), p.update(e), {
    update(m) {
      p.update(m);
    }
  };
}
var P2 = /* @__PURE__ */ ne('<div class="svelte-flow__zoom svelte-flow__container"><!></div>');
function Qp(t, e) {
  ae(e, !0);
  let n = g(e, "store", 15), r = g(e, "panOnScrollMode", 7), o = g(e, "preventScrolling", 7), i = g(e, "zoomOnScroll", 7), s = g(e, "zoomOnDoubleClick", 7), a = g(e, "zoomOnPinch", 7), l = g(e, "panOnDrag", 7), u = g(e, "panOnScroll", 7), d = g(e, "panOnScrollSpeed", 7), h = g(e, "paneClickDistance", 7), p = g(e, "selectionOnDrag", 7), v = g(e, "onmovestart", 7), m = g(e, "onmove", 7), y = g(e, "onmoveend", 7), w = g(e, "oninit", 7), b = g(e, "children", 7), k = /* @__PURE__ */ $(() => n().panActivationKeyPressed || l()), O = /* @__PURE__ */ $(() => n().panActivationKeyPressed || u());
  const { viewport: C } = n();
  let x = !1;
  He(() => {
    !x && n().viewportInitialized && (w()?.(), x = !0);
  });
  var E = {
    get store() {
      return n();
    },
    set store(I) {
      n(I), f();
    },
    get panOnScrollMode() {
      return r();
    },
    set panOnScrollMode(I) {
      r(I), f();
    },
    get preventScrolling() {
      return o();
    },
    set preventScrolling(I) {
      o(I), f();
    },
    get zoomOnScroll() {
      return i();
    },
    set zoomOnScroll(I) {
      i(I), f();
    },
    get zoomOnDoubleClick() {
      return s();
    },
    set zoomOnDoubleClick(I) {
      s(I), f();
    },
    get zoomOnPinch() {
      return a();
    },
    set zoomOnPinch(I) {
      a(I), f();
    },
    get panOnDrag() {
      return l();
    },
    set panOnDrag(I) {
      l(I), f();
    },
    get panOnScroll() {
      return u();
    },
    set panOnScroll(I) {
      u(I), f();
    },
    get panOnScrollSpeed() {
      return d();
    },
    set panOnScrollSpeed(I) {
      d(I), f();
    },
    get paneClickDistance() {
      return h();
    },
    set paneClickDistance(I) {
      h(I), f();
    },
    get selectionOnDrag() {
      return p();
    },
    set selectionOnDrag(I) {
      p(I), f();
    },
    get onmovestart() {
      return v();
    },
    set onmovestart(I) {
      v(I), f();
    },
    get onmove() {
      return m();
    },
    set onmove(I) {
      m(I), f();
    },
    get onmoveend() {
      return y();
    },
    set onmoveend(I) {
      y(I), f();
    },
    get oninit() {
      return w();
    },
    set oninit(I) {
      w(I), f();
    },
    get children() {
      return b();
    },
    set children(I) {
      b(I), f();
    }
  }, V = P2(), H = X(V);
  return Ee(H, b), Z(V), zt(V, (I, A) => O2?.(I, A), () => ({
    viewport: n().viewport,
    minZoom: n().minZoom,
    maxZoom: n().maxZoom,
    initialViewport: C,
    onDraggingChange: (I) => {
      n(n().dragging = I, !0);
    },
    setPanZoomInstance: (I) => {
      n(n().panZoom = I, !0);
    },
    onPanZoomStart: v(),
    onPanZoom: m(),
    onPanZoomEnd: y(),
    zoomOnScroll: i(),
    zoomOnDoubleClick: s(),
    zoomOnPinch: a(),
    panOnScroll: c(O),
    panOnDrag: c(k),
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
    selectionOnDrag: p(),
    onTransformChange: (I) => {
      n(n().viewport = { x: I[0], y: I[1], zoom: I[2] }, !0);
    },
    connectionInProgress: n().connection.inProgress
  })), T(t, V), le(E);
}
ie(
  Qp,
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
function Zc(t, e) {
  return (n) => {
    n.target === e && t?.(n);
  };
}
function Wc(t) {
  return (e) => {
    const n = t.has(e.id);
    return !!e.selected !== n ? { ...e, selected: n } : e;
  };
}
function Xc(t, e) {
  if (t.size !== e.size)
    return !1;
  for (const n of t)
    if (!e.has(n))
      return !1;
  return !0;
}
var E2 = /* @__PURE__ */ ne("<div><!></div>");
function ef(t, e) {
  ae(e, !0);
  let n = g(e, "store", 15), r = g(e, "panOnDrag", 7, !0), o = g(e, "paneClickDistance", 7, 1), i = g(e, "selectionOnDrag", 7), s = g(e, "onpaneclick", 7), a = g(e, "onpanecontextmenu", 7), l = g(e, "onselectionstart", 7), u = g(e, "onselectionend", 7), d = g(e, "children", 7), h, p = null, v = /* @__PURE__ */ new Set(), m = /* @__PURE__ */ new Set(), y = /* @__PURE__ */ $(() => n().panActivationKeyPressed || r()), w = /* @__PURE__ */ $(() => n().selectionKeyPressed || !!n().selectionRect || i() && c(y) !== !0), b = /* @__PURE__ */ $(() => n().elementsSelectable && (c(w) || n().selectionRectMode === "user")), k = !1;
  function O(P) {
    if (p = h?.getBoundingClientRect(), !p) return;
    const z = P.target === h, B = !z && !!P.target.closest(".nokey"), q = i() && z || n().selectionKeyPressed;
    if (B || !c(w) || !q || P.button !== 0 || !P.isPrimary)
      return;
    P.target?.setPointerCapture?.(P.pointerId), k = !1;
    const { x: U, y: N } = fn(P, p);
    n(n().selectionRect = { width: 0, height: 0, startX: U, startY: N, x: U, y: N }, !0), z || (P.stopPropagation(), P.preventDefault());
  }
  function C(P) {
    if (!c(w) || !p || !n().selectionRect)
      return;
    const z = fn(P, p), { startX: B = 0, startY: q = 0 } = n().selectionRect;
    if (!k) {
      const j = n().selectionKeyPressed ? 0 : o();
      if (Math.hypot(z.x - B, z.y - q) <= j)
        return;
      n().unselectNodesAndEdges(), l()?.(P);
    }
    k = !0;
    const U = {
      ...n().selectionRect,
      x: z.x < B ? z.x : B,
      y: z.y < q ? z.y : q,
      width: Math.abs(z.x - B),
      height: Math.abs(z.y - q)
    }, N = v, Y = m;
    v = new Set(au(
      n().nodeLookup,
      U,
      [
        n().viewport.x,
        n().viewport.y,
        n().viewport.zoom
      ],
      n().selectionMode === Cs.Partial,
      !0
    ).map((j) => j.id));
    const ee = n().defaultEdgeOptions.selectable ?? !0;
    m = /* @__PURE__ */ new Set();
    for (const j of v) {
      const F = n().connectionLookup.get(j);
      if (F)
        for (const { edgeId: W } of F.values()) {
          const G = n().edgeLookup.get(W);
          G && (G.selectable ?? ee) && m.add(W);
        }
    }
    Xc(N, v) || n(n().nodes = n().nodes.map(Wc(v)), !0), Xc(Y, m) || n(n().edges = n().edges.map(Wc(m)), !0), n(n().selectionRectMode = "user", !0), n(n().selectionRect = U, !0);
  }
  function x(P) {
    P.button === 0 && (P.target?.releasePointerCapture?.(P.pointerId), !k && P.target === h && H?.(P), n(n().selectionRect = null, !0), k && n(n().selectionRectMode = v.size > 0 ? "nodes" : null, !0), k && u()?.(P));
  }
  const E = (P) => {
    if (Array.isArray(c(y)) && c(y).includes(2)) {
      P.preventDefault();
      return;
    }
    a()?.({ event: P });
  }, V = (P) => {
    k && (P.stopPropagation(), k = !1);
  };
  function H(P) {
    if (k || n().connection.inProgress) {
      k = !1;
      return;
    }
    s()?.({ event: P }), n().unselectNodesAndEdges(), n(n().selectionRectMode = null, !0), n(n().selectionRect = null, !0);
  }
  var I = {
    get store() {
      return n();
    },
    set store(P) {
      n(P), f();
    },
    get panOnDrag() {
      return r();
    },
    set panOnDrag(P = !0) {
      r(P), f();
    },
    get paneClickDistance() {
      return o();
    },
    set paneClickDistance(P = 1) {
      o(P), f();
    },
    get selectionOnDrag() {
      return i();
    },
    set selectionOnDrag(P) {
      i(P), f();
    },
    get onpaneclick() {
      return s();
    },
    set onpaneclick(P) {
      s(P), f();
    },
    get onpanecontextmenu() {
      return a();
    },
    set onpanecontextmenu(P) {
      a(P), f();
    },
    get onselectionstart() {
      return l();
    },
    set onselectionstart(P) {
      l(P), f();
    },
    get onselectionend() {
      return u();
    },
    set onselectionend(P) {
      u(P), f();
    },
    get children() {
      return d();
    },
    set children(P) {
      d(P), f();
    }
  }, A = E2();
  let D;
  var _ = /* @__PURE__ */ $(() => c(b) ? void 0 : Zc(H, h));
  A.__click = function(...P) {
    c(_)?.apply(this, P);
  }, A.__pointermove = function(...P) {
    (c(b) ? C : void 0)?.apply(this, P);
  }, A.__pointerup = function(...P) {
    (c(b) ? x : void 0)?.apply(this, P);
  };
  var M = /* @__PURE__ */ $(() => Zc(E, h));
  A.__contextmenu = function(...P) {
    c(M)?.apply(this, P);
  };
  var S = X(A);
  return Ee(S, d), Z(A), Et(A, (P) => h = P, () => h), Ne((P) => D = Xt(A, 1, "svelte-flow__pane svelte-flow__container", null, D, P), [
    () => ({
      draggable: r() === !0 || Array.isArray(r()) && r().includes(0),
      dragging: n().dragging,
      selection: c(w)
    })
  ]), fs(
    "pointerdown",
    A,
    function(...P) {
      (c(b) ? O : void 0)?.apply(this, P);
    },
    !0
  ), fs(
    "click",
    A,
    function(...P) {
      (c(b) ? V : void 0)?.apply(this, P);
    },
    !0
  ), T(t, A), le(I);
}
no(["click", "pointermove", "pointerup", "contextmenu"]);
ie(
  ef,
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
var N2 = /* @__PURE__ */ ne('<div class="svelte-flow__viewport xyflow__viewport svelte-flow__container"><!></div>');
function tf(t, e) {
  ae(e, !0);
  let n = g(e, "store", 15), r = g(e, "children", 7);
  var o = {
    get store() {
      return n();
    },
    set store(l) {
      n(l), f();
    },
    get children() {
      return r();
    },
    set children(l) {
      r(l), f();
    }
  }, i = N2();
  let s;
  var a = X(i);
  return Ee(a, r), Z(i), Ne(() => s = Pt(i, "", s, {
    transform: `translate(${n().viewport.x ?? ""}px, ${n().viewport.y ?? ""}px) scale(${n().viewport.zoom ?? ""})`
  })), T(t, i), le(o);
}
ie(tf, { store: {}, children: {} }, [], [], !0);
function nf(t, e) {
  const { store: n, onDrag: r, onDragStart: o, onDragStop: i, onNodeMouseDown: s } = e, a = Ub({
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
var z2 = /* @__PURE__ */ ne('<div aria-live="assertive" aria-atomic="true" class="a11y-live-msg svelte-wlt670"> </div>'), M2 = /* @__PURE__ */ ne('<div class="a11y-hidden svelte-wlt670"> </div> <div class="a11y-hidden svelte-wlt670"> </div> <!>', 1);
const T2 = {
  hash: "svelte-wlt670",
  code: ".a11y-hidden.svelte-wlt670 {display:none;}.a11y-live-msg.svelte-wlt670 {position:absolute;width:1px;height:1px;margin:-1px;border:0;padding:0;overflow:hidden;clip:rect(0px, 0px, 0px, 0px);clip-path:inset(100%);}"
};
function rf(t, e) {
  ae(e, !0), Ge(t, T2);
  let n = g(e, "store", 7);
  var r = {
    get store() {
      return n();
    },
    set store(h) {
      n(h), f();
    }
  }, o = M2(), i = J(o), s = X(i, !0);
  Z(i);
  var a = R(i, 2), l = X(a, !0);
  Z(a);
  var u = R(a, 2);
  {
    var d = (h) => {
      var p = z2(), v = X(p, !0);
      Z(p), Ne(() => {
        Oe(p, "id", `${A2}-${n().flowId}`), nt(v, n().ariaLiveMessage);
      }), T(h, p);
    };
    se(u, (h) => {
      n().disableKeyboardA11y || h(d);
    });
  }
  return Ne(() => {
    Oe(i, "id", `${of}-${n().flowId}`), nt(s, n().disableKeyboardA11y ? n().ariaLabelConfig["node.a11yDescription.default"] : n().ariaLabelConfig["node.a11yDescription.keyboardDisabled"]), Oe(a, "id", `${sf}-${n().flowId}`), nt(l, n().ariaLabelConfig["edge.a11yDescription.default"]);
  }), T(t, o), le(r);
}
ie(rf, { store: {} }, [], [], !0);
const of = "svelte-flow__node-desc", sf = "svelte-flow__edge-desc", A2 = "svelte-flow__aria-live";
var D2 = /* @__PURE__ */ ne("<div><!></div>");
function af(t, e) {
  ae(e, !0);
  let n = g(e, "store", 15), r = g(e, "node", 7), o = g(e, "resizeObserver", 7), i = g(e, "nodeClickDistance", 7), s = g(e, "onnodeclick", 7), a = g(e, "onnodedrag", 7), l = g(e, "onnodedragstart", 7), u = g(e, "onnodedragstop", 7), d = g(e, "onnodepointerenter", 7), h = g(e, "onnodepointerleave", 7), p = g(e, "onnodepointermove", 7), v = g(e, "onnodecontextmenu", 7), m = /* @__PURE__ */ $(() => Dt(r().data, () => ({}), !0)), y = /* @__PURE__ */ $(() => Dt(r().selected, !1)), w = /* @__PURE__ */ $(() => r().draggable), b = /* @__PURE__ */ $(() => r().selectable), k = /* @__PURE__ */ $(() => Dt(r().deletable, !0)), O = /* @__PURE__ */ $(() => r().connectable), C = /* @__PURE__ */ $(() => r().focusable), x = /* @__PURE__ */ $(() => Dt(r().hidden, !1)), E = /* @__PURE__ */ $(() => Dt(r().dragging, !1)), V = /* @__PURE__ */ $(() => Dt(r().style, "")), H = /* @__PURE__ */ $(() => r().class), I = /* @__PURE__ */ $(() => Dt(r().type, "default")), A = /* @__PURE__ */ $(() => r().parentId), D = /* @__PURE__ */ $(() => r().sourcePosition), _ = /* @__PURE__ */ $(() => r().targetPosition), M = /* @__PURE__ */ $(() => Dt(r().measured, () => ({ width: 0, height: 0 }), !0).width), S = /* @__PURE__ */ $(() => Dt(r().measured, () => ({ width: 0, height: 0 }), !0).height), P = /* @__PURE__ */ $(() => r().initialWidth), z = /* @__PURE__ */ $(() => r().initialHeight), B = /* @__PURE__ */ $(() => r().width), q = /* @__PURE__ */ $(() => r().height), U = /* @__PURE__ */ $(() => r().dragHandle), N = /* @__PURE__ */ $(() => Dt(r().internals.z, 0)), Y = /* @__PURE__ */ $(() => r().internals.positionAbsolute.x), ee = /* @__PURE__ */ $(() => r().internals.positionAbsolute.y), j = /* @__PURE__ */ $(() => r().internals.userNode), { id: F } = r(), W = /* @__PURE__ */ $(() => c(w) ?? n().nodesDraggable), G = /* @__PURE__ */ $(() => c(b) ?? n().elementsSelectable), re = /* @__PURE__ */ $(() => c(O) ?? n().nodesConnectable), L = /* @__PURE__ */ $(() => Cp(r())), te = /* @__PURE__ */ $(() => !!r().internals.handleBounds), fe = /* @__PURE__ */ $(() => c(L) && c(te)), ue = /* @__PURE__ */ $(() => c(C) ?? n().nodesFocusable);
  function oe(ge) {
    return n().parentLookup.has(ge);
  }
  let ce = /* @__PURE__ */ $(() => oe(F)), ve = /* @__PURE__ */ me(null), ke = null, be = c(I), de = c(D), ye = c(_), Pe = /* @__PURE__ */ $(() => n().nodeTypes[c(I)] ?? pu), Q = /* @__PURE__ */ $(() => n().ariaLabelConfig);
  Fr("svelteflow__node_connectable", {
    get value() {
      return c(re);
    }
  }), Fr("svelteflow__node_id", F);
  let Le = /* @__PURE__ */ $(() => {
    const ge = c(M) === void 0 ? c(B) ?? c(P) : c(B), ze = c(S) === void 0 ? c(q) ?? c(z) : c(q);
    if (!(ge === void 0 && ze === void 0 && c(V) === void 0))
      return `${c(V)};${ge ? `width:${Vn(ge)};` : ""}${ze ? `height:${Vn(ze)};` : ""}`;
  });
  He(() => {
    (c(I) !== be || c(D) !== de || c(_) !== ye) && c(ve) !== null && requestAnimationFrame(() => {
      c(ve) !== null && n().updateNodeInternals(/* @__PURE__ */ new Map([[F, { id: F, nodeElement: c(ve), force: !0 }]]));
    }), be = c(I), de = c(D), ye = c(_);
  }), He(() => {
    o() && (!c(fe) || c(ve) !== ke) && (ke && o().unobserve(ke), c(ve) && o().observe(c(ve)), ke = c(ve));
  }), mi(() => {
    ke && o()?.unobserve(ke);
  });
  function Ae(ge) {
    c(G) && (!n().selectNodesOnDrag || !c(W) || n().nodeDragThreshold > 0) && n().handleNodeSelection(F), s()?.({ node: c(j), event: ge });
  }
  function We(ge) {
    if (!(_p(ge) || n().disableKeyboardA11y))
      if (mp.includes(ge.key) && c(G)) {
        const ze = ge.key === "Escape";
        n().handleNodeSelection(F, ze, c(ve));
      } else c(W) && r().selected && Object.prototype.hasOwnProperty.call(_s, ge.key) && (ge.preventDefault(), n(
        n().ariaLiveMessage = c(Q)["node.a11yDescription.ariaLiveMessage"]({
          direction: ge.key.replace("Arrow", "").toLowerCase(),
          x: ~~r().internals.positionAbsolute.x,
          y: ~~r().internals.positionAbsolute.y
        }),
        !0
      ), n().moveSelectedNodes(_s[ge.key], ge.shiftKey ? 4 : 1));
  }
  const je = () => {
    if (n().disableKeyboardA11y || !n().autoPanOnNodeFocus || !c(ve)?.matches(":focus-visible"))
      return;
    const { width: ge, height: ze, viewport: rt } = n();
    au(/* @__PURE__ */ new Map([[F, r()]]), { x: 0, y: 0, width: ge, height: ze }, [rt.x, rt.y, rt.zoom], !0).length > 0 || n().setCenter(r().position.x + (r().measured.width ?? 0) / 2, r().position.y + (r().measured.height ?? 0) / 2, { zoom: rt.zoom });
  };
  var tt = {
    get store() {
      return n();
    },
    set store(ge) {
      n(ge), f();
    },
    get node() {
      return r();
    },
    set node(ge) {
      r(ge), f();
    },
    get resizeObserver() {
      return o();
    },
    set resizeObserver(ge) {
      o(ge), f();
    },
    get nodeClickDistance() {
      return i();
    },
    set nodeClickDistance(ge) {
      i(ge), f();
    },
    get onnodeclick() {
      return s();
    },
    set onnodeclick(ge) {
      s(ge), f();
    },
    get onnodedrag() {
      return a();
    },
    set onnodedrag(ge) {
      a(ge), f();
    },
    get onnodedragstart() {
      return l();
    },
    set onnodedragstart(ge) {
      l(ge), f();
    },
    get onnodedragstop() {
      return u();
    },
    set onnodedragstop(ge) {
      u(ge), f();
    },
    get onnodepointerenter() {
      return d();
    },
    set onnodepointerenter(ge) {
      d(ge), f();
    },
    get onnodepointerleave() {
      return h();
    },
    set onnodepointerleave(ge) {
      h(ge), f();
    },
    get onnodepointermove() {
      return p();
    },
    set onnodepointermove(ge) {
      p(ge), f();
    },
    get onnodecontextmenu() {
      return v();
    },
    set onnodecontextmenu(ge) {
      v(ge), f();
    }
  }, it = he(), dt = J(it);
  {
    var Qe = (ge) => {
      var ze = D2();
      Ue(ze, () => ({
        "data-id": F,
        class: [
          "svelte-flow__node",
          `svelte-flow__node-${c(I)}`,
          c(H)
        ],
        style: c(Le),
        onclick: Ae,
        onpointerenter: d() ? (Xe) => d()({ node: c(j), event: Xe }) : void 0,
        onpointerleave: h() ? (Xe) => h()({ node: c(j), event: Xe }) : void 0,
        onpointermove: p() ? (Xe) => p()({ node: c(j), event: Xe }) : void 0,
        oncontextmenu: v() ? (Xe) => v()({ node: c(j), event: Xe }) : void 0,
        onkeydown: c(ue) ? We : void 0,
        onfocus: c(ue) ? je : void 0,
        tabIndex: c(ue) ? 0 : void 0,
        role: r().ariaRole ?? (c(ue) ? "group" : void 0),
        "aria-roledescription": "node",
        "aria-describedby": n().disableKeyboardA11y ? void 0 : `${of}-${n().flowId}`,
        ...r().domAttributes,
        [gr]: {
          dragging: c(E),
          selected: c(y),
          draggable: c(W),
          connectable: c(re),
          selectable: c(G),
          nopan: c(W),
          parent: c(ce)
        },
        [Pn]: {
          "z-index": c(N),
          transform: `translate(${c(Y) ?? ""}px, ${c(ee) ?? ""}px)`,
          visibility: c(L) ? "visible" : "hidden"
        }
      }));
      var rt = X(ze);
      Ct(rt, () => c(Pe), (Xe, ut) => {
        ut(Xe, {
          get data() {
            return c(m);
          },
          get id() {
            return F;
          },
          get selected() {
            return c(y);
          },
          get selectable() {
            return c(G);
          },
          get deletable() {
            return c(k);
          },
          get sourcePosition() {
            return c(D);
          },
          get targetPosition() {
            return c(_);
          },
          get zIndex() {
            return c(N);
          },
          get dragging() {
            return c(E);
          },
          get draggable() {
            return c(W);
          },
          get dragHandle() {
            return c(U);
          },
          get parentId() {
            return c(A);
          },
          get type() {
            return c(I);
          },
          get isConnectable() {
            return c(re);
          },
          get positionAbsoluteX() {
            return c(Y);
          },
          get positionAbsoluteY() {
            return c(ee);
          },
          get width() {
            return c(B);
          },
          get height() {
            return c(q);
          }
        });
      }), Z(ze), zt(ze, (Xe, ut) => nf?.(Xe, ut), () => ({
        nodeId: F,
        isSelectable: c(G),
        disabled: !c(W),
        handleSelector: c(U),
        noDragClass: n().noDragClass,
        nodeClickDistance: i(),
        onNodeMouseDown: n().handleNodeSelection,
        onDrag: (Xe, ut, At, ht) => {
          a()?.({ event: Xe, targetNode: At, nodes: ht });
        },
        onDragStart: (Xe, ut, At, ht) => {
          l()?.({ event: Xe, targetNode: At, nodes: ht });
        },
        onDragStop: (Xe, ut, At, ht) => {
          u()?.({ event: Xe, targetNode: At, nodes: ht });
        },
        store: n()
      })), Et(ze, (Xe) => K(ve, Xe), () => c(ve)), T(ge, ze);
    };
    se(dt, (ge) => {
      c(x) || ge(Qe);
    });
  }
  return T(t, it), le(tt);
}
ie(
  af,
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
var V2 = /* @__PURE__ */ ne('<div class="svelte-flow__nodes"></div>');
function lf(t, e) {
  ae(e, !0);
  let n = g(e, "store", 15), r = g(e, "nodeClickDistance", 7), o = g(e, "onnodeclick", 7), i = g(e, "onnodecontextmenu", 7), s = g(e, "onnodepointerenter", 7), a = g(e, "onnodepointermove", 7), l = g(e, "onnodepointerleave", 7), u = g(e, "onnodedrag", 7), d = g(e, "onnodedragstart", 7), h = g(e, "onnodedragstop", 7);
  const p = typeof ResizeObserver > "u" ? null : new ResizeObserver((y) => {
    const w = /* @__PURE__ */ new Map();
    y.forEach((b) => {
      const k = b.target.getAttribute("data-id");
      w.set(k, { id: k, nodeElement: b.target, force: !0 });
    }), n().updateNodeInternals(w);
  });
  mi(() => {
    p?.disconnect();
  });
  var v = {
    get store() {
      return n();
    },
    set store(y) {
      n(y), f();
    },
    get nodeClickDistance() {
      return r();
    },
    set nodeClickDistance(y) {
      r(y), f();
    },
    get onnodeclick() {
      return o();
    },
    set onnodeclick(y) {
      o(y), f();
    },
    get onnodecontextmenu() {
      return i();
    },
    set onnodecontextmenu(y) {
      i(y), f();
    },
    get onnodepointerenter() {
      return s();
    },
    set onnodepointerenter(y) {
      s(y), f();
    },
    get onnodepointermove() {
      return a();
    },
    set onnodepointermove(y) {
      a(y), f();
    },
    get onnodepointerleave() {
      return l();
    },
    set onnodepointerleave(y) {
      l(y), f();
    },
    get onnodedrag() {
      return u();
    },
    set onnodedrag(y) {
      u(y), f();
    },
    get onnodedragstart() {
      return d();
    },
    set onnodedragstart(y) {
      d(y), f();
    },
    get onnodedragstop() {
      return h();
    },
    set onnodedragstop(y) {
      h(y), f();
    }
  }, m = V2();
  return xt(m, 21, () => n().visible.nodes.values(), (y) => y.id, (y, w) => {
    af(y, {
      get node() {
        return c(w);
      },
      get resizeObserver() {
        return p;
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
  }), Z(m), T(t, m), le(v);
}
ie(
  lf,
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
var H2 = /* @__PURE__ */ Ce('<svg class="svelte-flow__edge-wrapper"><g><!></g></svg>');
function uf(t, e) {
  ae(e, !0);
  const n = g(e, "edge", 7), r = g(e, "store", 15), o = g(e, "onedgeclick", 7), i = g(e, "onedgecontextmenu", 7), s = g(e, "onedgepointerenter", 7), a = g(e, "onedgepointerleave", 7);
  let l = /* @__PURE__ */ $(() => n().source), u = /* @__PURE__ */ $(() => n().target), d = /* @__PURE__ */ $(() => n().sourceX), h = /* @__PURE__ */ $(() => n().sourceY), p = /* @__PURE__ */ $(() => n().targetX), v = /* @__PURE__ */ $(() => n().targetY), m = /* @__PURE__ */ $(() => n().sourcePosition), y = /* @__PURE__ */ $(() => n().targetPosition), w = /* @__PURE__ */ $(() => Dt(n().animated, !1)), b = /* @__PURE__ */ $(() => Dt(n().selected, !1)), k = /* @__PURE__ */ $(() => n().label), O = /* @__PURE__ */ $(() => n().labelStyle), C = /* @__PURE__ */ $(() => Dt(n().data, () => ({}), !0)), x = /* @__PURE__ */ $(() => n().style), E = /* @__PURE__ */ $(() => n().interactionWidth), V = /* @__PURE__ */ $(() => Dt(n().type, "default")), H = /* @__PURE__ */ $(() => n().sourceHandle), I = /* @__PURE__ */ $(() => n().targetHandle), A = /* @__PURE__ */ $(() => n().markerStart), D = /* @__PURE__ */ $(() => n().markerEnd), _ = /* @__PURE__ */ $(() => n().selectable), M = /* @__PURE__ */ $(() => n().focusable), S = /* @__PURE__ */ $(() => Dt(n().deletable, !0)), P = /* @__PURE__ */ $(() => n().hidden), z = /* @__PURE__ */ $(() => n().zIndex), B = /* @__PURE__ */ $(() => n().class), q = /* @__PURE__ */ $(() => n().ariaLabel), U = null;
  const { id: N } = n();
  Fr("svelteflow__edge_id", N);
  let Y = /* @__PURE__ */ $(() => c(_) ?? r().elementsSelectable), ee = /* @__PURE__ */ $(() => c(M) ?? r().edgesFocusable), j = /* @__PURE__ */ $(() => r().edgeTypes[c(V)] ?? fu), F = /* @__PURE__ */ $(() => c(A) ? `url('#${rl(c(A), r().flowId)}')` : void 0), W = /* @__PURE__ */ $(() => c(D) ? `url('#${rl(c(D), r().flowId)}')` : void 0);
  function G(ce) {
    const ve = r().edgeLookup.get(N);
    ve && (c(Y) && r().handleEdgeSelection(N), o()?.({ event: ce, edge: ve }));
  }
  function re(ce, ve) {
    const ke = r().edgeLookup.get(N);
    ke && ve({ event: ce, edge: ke });
  }
  function L(ce) {
    if (!r().disableKeyboardA11y && mp.includes(ce.key) && c(Y)) {
      const { unselectNodesAndEdges: ve, addSelectedEdges: ke } = r();
      ce.key === "Escape" ? (U?.blur(), ve({ edges: [n()] })) : ke([N]);
    }
  }
  var te = {
    get edge() {
      return n();
    },
    set edge(ce) {
      n(ce), f();
    },
    get store() {
      return r();
    },
    set store(ce) {
      r(ce), f();
    },
    get onedgeclick() {
      return o();
    },
    set onedgeclick(ce) {
      o(ce), f();
    },
    get onedgecontextmenu() {
      return i();
    },
    set onedgecontextmenu(ce) {
      i(ce), f();
    },
    get onedgepointerenter() {
      return s();
    },
    set onedgepointerenter(ce) {
      s(ce), f();
    },
    get onedgepointerleave() {
      return a();
    },
    set onedgepointerleave(ce) {
      a(ce), f();
    }
  }, fe = he(), ue = J(fe);
  {
    var oe = (ce) => {
      var ve = H2();
      let ke;
      var be = X(ve);
      Ue(be, () => ({
        class: ["svelte-flow__edge", c(B)],
        "data-id": N,
        onclick: G,
        oncontextmenu: i() ? (ye) => {
          re(ye, i());
        } : void 0,
        onpointerenter: s() ? (ye) => {
          re(ye, s());
        } : void 0,
        onpointerleave: a() ? (ye) => {
          re(ye, a());
        } : void 0,
        "aria-label": c(q) === null ? void 0 : c(q) ? c(q) : `Edge from ${c(l)} to ${c(u)}`,
        "aria-describedby": c(ee) ? `${sf}-${r().flowId}` : void 0,
        role: n().ariaRole ?? (c(ee) ? "group" : "img"),
        "aria-roledescription": "edge",
        onkeydown: c(ee) ? L : void 0,
        tabindex: c(ee) ? 0 : void 0,
        ...n().domAttributes,
        [gr]: {
          animated: c(w),
          selected: c(b),
          selectable: c(Y)
        }
      }));
      var de = X(be);
      Ct(de, () => c(j), (ye, Pe) => {
        Pe(ye, {
          get id() {
            return N;
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
            return c(p);
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
            return c(k);
          },
          get labelStyle() {
            return c(O);
          },
          get data() {
            return c(C);
          },
          get style() {
            return c(x);
          },
          get interactionWidth() {
            return c(E);
          },
          get selectable() {
            return c(Y);
          },
          get deletable() {
            return c(S);
          },
          get type() {
            return c(V);
          },
          get sourceHandleId() {
            return c(H);
          },
          get targetHandleId() {
            return c(I);
          },
          get markerStart() {
            return c(F);
          },
          get markerEnd() {
            return c(W);
          }
        });
      }), Z(be), Et(be, (ye) => U = ye, () => U), Z(ve), Ne(() => ke = Pt(ve, "", ke, { "z-index": c(z) })), T(ce, ve);
    };
    se(ue, (ce) => {
      c(P) || ce(oe);
    });
  }
  return T(t, fe), le(te);
}
ie(
  uf,
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
$m();
var L2 = /* @__PURE__ */ Ce("<defs></defs>");
function cf(t, e) {
  ae(e, !1);
  const n = Cn();
  Jl();
  var r = L2();
  xt(r, 5, () => n.markers, (o) => o.id, (o, i) => {
    df(o, Ie(() => c(i)));
  }), Z(r), T(t, r), le();
}
ie(cf, {}, [], [], !0);
var I2 = /* @__PURE__ */ Ce('<polyline class="arrow" fill="none" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4"></polyline>'), R2 = /* @__PURE__ */ Ce('<polyline class="arrowclosed" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), B2 = /* @__PURE__ */ Ce('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function df(t, e) {
  ae(e, !0);
  let n = g(e, "id", 7), r = g(e, "type", 7), o = g(e, "width", 7, 12.5), i = g(e, "height", 7, 12.5), s = g(e, "markerUnits", 7, "strokeWidth"), a = g(e, "orient", 7, "auto-start-reverse"), l = g(e, "color", 7, "none"), u = g(e, "strokeWidth", 7);
  var d = {
    get id() {
      return n();
    },
    set id(y) {
      n(y), f();
    },
    get type() {
      return r();
    },
    set type(y) {
      r(y), f();
    },
    get width() {
      return o();
    },
    set width(y = 12.5) {
      o(y), f();
    },
    get height() {
      return i();
    },
    set height(y = 12.5) {
      i(y), f();
    },
    get markerUnits() {
      return s();
    },
    set markerUnits(y = "strokeWidth") {
      s(y), f();
    },
    get orient() {
      return a();
    },
    set orient(y = "auto-start-reverse") {
      a(y), f();
    },
    get color() {
      return l();
    },
    set color(y = "none") {
      l(y), f();
    },
    get strokeWidth() {
      return u();
    },
    set strokeWidth(y) {
      u(y), f();
    }
  }, h = B2(), p = X(h);
  {
    var v = (y) => {
      var w = I2();
      let b;
      Ne(() => {
        Oe(w, "stroke-width", u()), b = Pt(w, "", b, { stroke: l() });
      }), T(y, w);
    }, m = (y) => {
      var w = he(), b = J(w);
      {
        var k = (O) => {
          var C = R2();
          let x;
          Ne(() => {
            Oe(C, "stroke-width", u()), x = Pt(C, "", x, { stroke: l(), fill: l() });
          }), T(O, C);
        };
        se(
          b,
          (O) => {
            r() === ii.ArrowClosed && O(k);
          },
          !0
        );
      }
      T(y, w);
    };
    se(p, (y) => {
      r() === ii.Arrow ? y(v) : y(m, !1);
    });
  }
  return Z(h), Ne(() => {
    Oe(h, "id", n()), Oe(h, "markerWidth", `${o()}`), Oe(h, "markerHeight", `${i()}`), Oe(h, "markerUnits", s()), Oe(h, "orient", a());
  }), T(t, h), le(d);
}
ie(
  df,
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
var j2 = /* @__PURE__ */ ne('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!></div>');
function hf(t, e) {
  ae(e, !0);
  let n = g(e, "store", 15), r = g(e, "onedgeclick", 7), o = g(e, "onedgecontextmenu", 7), i = g(e, "onedgepointerenter", 7), s = g(e, "onedgepointerleave", 7);
  var a = {
    get store() {
      return n();
    },
    set store(p) {
      n(p), f();
    },
    get onedgeclick() {
      return r();
    },
    set onedgeclick(p) {
      r(p), f();
    },
    get onedgecontextmenu() {
      return o();
    },
    set onedgecontextmenu(p) {
      o(p), f();
    },
    get onedgepointerenter() {
      return i();
    },
    set onedgepointerenter(p) {
      i(p), f();
    },
    get onedgepointerleave() {
      return s();
    },
    set onedgepointerleave(p) {
      s(p), f();
    }
  }, l = j2(), u = X(l), d = X(u);
  cf(d, {}), Z(u);
  var h = R(u, 2);
  return xt(h, 17, () => n().visible.edges.values(), (p) => p.id, (p, v) => {
    uf(p, {
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
  }), Z(l), T(t, l), le(a);
}
ie(
  hf,
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
var K2 = /* @__PURE__ */ ne('<div class="svelte-flow__selection svelte-1rrpn9s"></div>');
const F2 = {
  hash: "svelte-1rrpn9s",
  code: ".svelte-flow__selection.svelte-1rrpn9s {position:absolute;top:0;left:0;}"
};
function gu(t, e) {
  ae(e, !0), Ge(t, F2);
  let n = g(e, "x", 7, 0), r = g(e, "y", 7, 0), o = g(e, "width", 7, 0), i = g(e, "height", 7, 0), s = g(e, "isVisible", 7, !0);
  var a = {
    get x() {
      return n();
    },
    set x(h = 0) {
      n(h), f();
    },
    get y() {
      return r();
    },
    set y(h = 0) {
      r(h), f();
    },
    get width() {
      return o();
    },
    set width(h = 0) {
      o(h), f();
    },
    get height() {
      return i();
    },
    set height(h = 0) {
      i(h), f();
    },
    get isVisible() {
      return s();
    },
    set isVisible(h = !0) {
      s(h), f();
    }
  }, l = he(), u = J(l);
  {
    var d = (h) => {
      var p = K2();
      let v;
      Ne((m) => v = Pt(p, "", v, m), [
        () => ({
          width: typeof o() == "string" ? o() : Vn(o()),
          height: typeof i() == "string" ? i() : Vn(i()),
          transform: `translate(${n()}px, ${r()}px)`
        })
      ]), T(h, p);
    };
    se(u, (h) => {
      s() && h(d);
    });
  }
  return T(t, l), le(a);
}
ie(gu, { x: {}, y: {}, width: {}, height: {}, isVisible: {} }, [], [], !0);
var Z2 = /* @__PURE__ */ ne("<div><!></div>");
const W2 = {
  hash: "svelte-ceq0zw",
  code: `.svelte-flow__selection-wrapper.svelte-ceq0zw {position:absolute;top:0;left:0;z-index:2000;pointer-events:all;}.svelte-flow__selection-wrapper.svelte-ceq0zw:focus,
  .svelte-flow__selection-wrapper.svelte-ceq0zw:focus-visible {outline:none;}`
};
function pf(t, e) {
  ae(e, !0), Ge(t, W2);
  let n = g(e, "store", 15), r = g(e, "onnodedrag", 7), o = g(e, "onnodedragstart", 7), i = g(e, "onnodedragstop", 7), s = g(e, "onselectionclick", 7), a = g(e, "onselectioncontextmenu", 7), l = /* @__PURE__ */ me(void 0);
  He(() => {
    n().disableKeyboardA11y || c(l)?.focus({ preventScroll: !0 });
  });
  let u = /* @__PURE__ */ $(() => {
    if (n().selectionRectMode === "nodes") {
      n().nodes;
      const b = xi(n().nodeLookup, { filter: (k) => !!k.selected });
      if (b.width > 0 && b.height > 0)
        return b;
    }
    return null;
  });
  function d(b) {
    const k = n().nodes.filter((O) => O.selected);
    a()?.({ nodes: k, event: b });
  }
  function h(b) {
    const k = n().nodes.filter((O) => O.selected);
    s()?.({ nodes: k, event: b });
  }
  function p(b) {
    Object.prototype.hasOwnProperty.call(_s, b.key) && (b.preventDefault(), n().moveSelectedNodes(_s[b.key], b.shiftKey ? 4 : 1));
  }
  var v = {
    get store() {
      return n();
    },
    set store(b) {
      n(b), f();
    },
    get onnodedrag() {
      return r();
    },
    set onnodedrag(b) {
      r(b), f();
    },
    get onnodedragstart() {
      return o();
    },
    set onnodedragstart(b) {
      o(b), f();
    },
    get onnodedragstop() {
      return i();
    },
    set onnodedragstop(b) {
      i(b), f();
    },
    get onselectionclick() {
      return s();
    },
    set onselectionclick(b) {
      s(b), f();
    },
    get onselectioncontextmenu() {
      return a();
    },
    set onselectioncontextmenu(b) {
      a(b), f();
    }
  }, m = he(), y = J(m);
  {
    var w = (b) => {
      var k = Z2();
      k.__contextmenu = d, k.__click = h, k.__keydown = function(...x) {
        (n().disableKeyboardA11y ? void 0 : p)?.apply(this, x);
      };
      let O;
      var C = X(k);
      gu(C, { width: "100%", height: "100%", x: 0, y: 0 }), Z(k), zt(k, (x, E) => nf?.(x, E), () => ({
        disabled: !1,
        store: n(),
        onDrag: (x, E, V, H) => {
          r()?.({ event: x, targetNode: null, nodes: H });
        },
        onDragStart: (x, E, V, H) => {
          o()?.({ event: x, targetNode: null, nodes: H });
        },
        onDragStop: (x, E, V, H) => {
          i()?.({ event: x, targetNode: null, nodes: H });
        }
      })), Et(k, (x) => K(l, x), () => c(l)), Ne(
        (x) => {
          Xt(k, 1, cr(["svelte-flow__selection-wrapper", n().noPanClass]), "svelte-ceq0zw"), Oe(k, "role", n().disableKeyboardA11y ? void 0 : "button"), Oe(k, "tabindex", n().disableKeyboardA11y ? void 0 : -1), O = Pt(k, "", O, x);
        },
        [
          () => ({
            width: Vn(c(u).width),
            height: Vn(c(u).height),
            transform: `translate(${c(u).x ?? ""}px, ${c(u).y ?? ""}px)`
          })
        ]
      ), T(b, k);
    };
    se(y, (b) => {
      n().selectionRectMode === "nodes" && c(u) && qn(c(u).x) && qn(c(u).y) && b(w);
    });
  }
  return T(t, m), le(v);
}
no(["contextmenu", "click", "keydown"]);
ie(
  pf,
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
function X2(t) {
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
function Sn(t, e) {
  let { enabled: n = !0, trigger: r, type: o = "keydown" } = e;
  function i(a) {
    const l = Array.isArray(r) ? r : [r], u = [a.metaKey, a.altKey, a.shiftKey, a.ctrlKey].reduce(
      (d, h, p) => h ? d | 1 << p : d,
      0
    );
    for (const d of l) {
      const h = {
        preventDefault: !1,
        enabled: !0,
        ...d
      }, { modifier: p, key: v, callback: m, preventDefault: y, enabled: w } = h;
      if (w) {
        if (a.key !== v) continue;
        if (p === null || p === !1) {
          if (u !== 0) continue;
        } else if (p !== void 0 && p?.[0]?.length > 0) {
          const k = Array.isArray(p) ? p : [p];
          let O = !1;
          for (const C of k)
            if ((Array.isArray(C) ? C : [C]).reduce(
              (x, E) => x | X2(E),
              0
            ) === u) {
              O = !0;
              break;
            }
          if (!O) continue;
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
  return n && (s = ft(t, o, i)), {
    update: (a) => {
      const { enabled: l = !0, type: u = "keydown" } = a;
      n && (!l || o !== u) ? s?.() : !n && l && (s = ft(t, u, i)), n = l, o = u, r = a.trigger;
    },
    destroy: () => {
      s?.();
    }
  };
}
function kt() {
  const t = /* @__PURE__ */ $(Cn), e = (i) => {
    const s = Kc(i) ? i : c(t).nodeLookup.get(i.id), a = s.parentId ? xb(s.position, s.measured, s.parentId, c(t).nodeLookup, c(t).nodeOrigin) : s.position, l = {
      ...s,
      position: a,
      width: s.measured?.width ?? s.width,
      height: s.measured?.height ?? s.height
    };
    return ko(l);
  };
  function n(i, s, a = { replace: !1 }) {
    c(t).nodes = lt(() => c(t).nodes).map((l) => {
      if (l.id === i) {
        const u = typeof s == "function" ? s(l) : s;
        return a?.replace && Kc(u) ? u : { ...l, ...u };
      }
      return l;
    });
  }
  function r(i, s, a = { replace: !1 }) {
    c(t).edges = lt(() => c(t).edges).map((l) => {
      if (l.id === i) {
        const u = typeof s == "function" ? s(l) : s;
        return a.replace && g2(u) ? u : { ...l, ...u };
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
    getNodes: (i) => i === void 0 ? c(t).nodes : qc(c(t).nodeLookup, i),
    getEdge: (i) => c(t).edgeLookup.get(i),
    getEdges: (i) => i === void 0 ? c(t).edges : qc(c(t).edgeLookup, i),
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
    getViewport: () => Bl(c(t).viewport),
    setCenter: async (i, s, a) => c(t).setCenter(i, s, a),
    fitView: (i) => c(t).fitView(i),
    fitBounds: async (i, s) => {
      if (!c(t).panZoom)
        return Promise.resolve(!1);
      const a = lu(i, c(t).width, c(t).height, c(t).minZoom, c(t).maxZoom, s?.padding ?? 0.1);
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
      const l = zc(i), u = l ? i : e(i);
      return u ? (a || c(t).nodes).filter((d) => {
        const h = c(t).nodeLookup.get(d.id);
        if (!h || !l && d.id === i.id)
          return !1;
        const p = ko(h), v = si(p, u);
        return s && v > 0 || v >= p.width * p.height || v >= u.width * u.height;
      }) : [];
    },
    isNodeIntersecting: (i, s, a = !0) => {
      const l = zc(i) ? i : e(i);
      if (!l)
        return !1;
      const u = si(l, s);
      return a && u > 0 || u >= s.width * s.height || u >= l.width * l.height;
    },
    deleteElements: async ({ nodes: i = [], edges: s = [] }) => {
      const { nodes: a, edges: l } = await mb({
        nodesToRemove: i,
        edgesToRemove: s,
        nodes: c(t).nodes,
        edges: c(t).edges,
        onBeforeDelete: c(t).onbeforedelete
      });
      return a && (c(t).nodes = lt(() => c(t).nodes).filter((u) => !a.some(({ id: d }) => d === u.id))), l && (c(t).edges = lt(() => c(t).edges).filter((u) => !l.some(({ id: d }) => d === u.id))), (a.length > 0 || l.length > 0) && c(t).ondelete?.({ nodes: a, edges: l }), { deletedNodes: a, deletedEdges: l };
    },
    screenToFlowPosition: (i, s = { snapToGrid: !0 }) => {
      if (!c(t).domNode)
        return i;
      const a = s.snapToGrid ? c(t).snapGrid : !1, { x: l, y: u, zoom: d } = c(t).viewport, { x: h, y: p } = c(t).domNode.getBoundingClientRect(), v = { x: i.x - h, y: i.y - p };
      return Ci(v, [l, u, d], a !== null, a || [1, 1]);
    },
    /**
     *
     * @param position
     * @returns
     */
    flowToScreenPosition: (i) => {
      if (!c(t).domNode)
        return i;
      const { x: s, y: a, zoom: l } = c(t).viewport, { x: u, y: d } = c(t).domNode.getBoundingClientRect(), h = Ss(i, [s, a, l]);
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
    getNodesBounds: (i) => pb(i, {
      nodeLookup: c(t).nodeLookup,
      nodeOrigin: c(t).nodeOrigin
    }),
    getHandleConnections: ({ type: i, id: s, nodeId: a }) => Array.from(c(t).connectionLookup.get(`${a}-${i}-${s ?? null}`)?.values() ?? [])
  };
}
function qc(t, e) {
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
function ff(t, e) {
  ae(e, !0);
  let n = g(e, "store", 15), r = g(e, "selectionKey", 7, "Shift"), o = g(e, "multiSelectionKey", 23, () => Lr() ? "Meta" : "Control"), i = g(e, "deleteKey", 7, "Backspace"), s = g(e, "panActivationKey", 7, " "), a = g(e, "zoomActivationKey", 23, () => Lr() ? "Meta" : "Control"), { deleteElements: l } = kt();
  function u(w) {
    return w !== null && typeof w == "object";
  }
  function d(w) {
    return u(w) ? w.modifier || [] : [];
  }
  function h(w) {
    return w == null ? "" : u(w) ? w.key : w;
  }
  function p(w, b) {
    return (Array.isArray(w) ? w : [w]).map((k) => {
      const O = h(k);
      return {
        key: O,
        modifier: d(k),
        enabled: O !== null,
        callback: b
      };
    });
  }
  function v() {
    n(n().selectionRect = null, !0), n(n().selectionKeyPressed = !1, !0), n(n().multiselectionKeyPressed = !1, !0), n(n().deleteKeyPressed = !1, !0), n(n().panActivationKeyPressed = !1, !0), n(n().zoomActivationKeyPressed = !1, !0);
  }
  function m() {
    const w = n().nodes.filter((k) => k.selected), b = n().edges.filter((k) => k.selected);
    l({ nodes: w, edges: b });
  }
  var y = {
    get store() {
      return n();
    },
    set store(w) {
      n(w), f();
    },
    get selectionKey() {
      return r();
    },
    set selectionKey(w = "Shift") {
      r(w), f();
    },
    get multiSelectionKey() {
      return o();
    },
    set multiSelectionKey(w = Lr() ? "Meta" : "Control") {
      o(w), f();
    },
    get deleteKey() {
      return i();
    },
    set deleteKey(w = "Backspace") {
      i(w), f();
    },
    get panActivationKey() {
      return s();
    },
    set panActivationKey(w = " ") {
      s(w), f();
    },
    get zoomActivationKey() {
      return a();
    },
    set zoomActivationKey(w = Lr() ? "Meta" : "Control") {
      a(w), f();
    }
  };
  return fs("blur", Bt, v), fs("contextmenu", Bt, v), zt(Bt, (w, b) => Sn?.(w, b), () => ({
    trigger: p(r(), () => n(n().selectionKeyPressed = !0, !0)),
    type: "keydown"
  })), zt(Bt, (w, b) => Sn?.(w, b), () => ({
    trigger: p(r(), () => n(n().selectionKeyPressed = !1, !0)),
    type: "keyup"
  })), zt(Bt, (w, b) => Sn?.(w, b), () => ({
    trigger: p(o(), () => {
      n(n().multiselectionKeyPressed = !0, !0);
    }),
    type: "keydown"
  })), zt(Bt, (w, b) => Sn?.(w, b), () => ({
    trigger: p(o(), () => n(n().multiselectionKeyPressed = !1, !0)),
    type: "keyup"
  })), zt(Bt, (w, b) => Sn?.(w, b), () => ({
    trigger: p(i(), (w) => {
      !(w.originalEvent.ctrlKey || w.originalEvent.metaKey || w.originalEvent.shiftKey) && !_p(w.originalEvent) && (n(n().deleteKeyPressed = !0, !0), m());
    }),
    type: "keydown"
  })), zt(Bt, (w, b) => Sn?.(w, b), () => ({
    trigger: p(i(), () => n(n().deleteKeyPressed = !1, !0)),
    type: "keyup"
  })), zt(Bt, (w, b) => Sn?.(w, b), () => ({
    trigger: p(s(), () => n(n().panActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), zt(Bt, (w, b) => Sn?.(w, b), () => ({
    trigger: p(s(), () => n(n().panActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), zt(Bt, (w, b) => Sn?.(w, b), () => ({
    trigger: p(a(), () => n(n().zoomActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), zt(Bt, (w, b) => Sn?.(w, b), () => ({
    trigger: p(a(), () => n(n().zoomActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), le(y);
}
ie(
  ff,
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
var q2 = /* @__PURE__ */ Ce('<path fill="none" class="svelte-flow__connection-path"></path>'), Y2 = /* @__PURE__ */ Ce('<svg class="svelte-flow__connectionline"><g><!></g></svg>');
function gf(t, e) {
  ae(e, !0);
  let n = g(e, "store", 15), r = g(e, "type", 7), o = g(e, "containerStyle", 7), i = g(e, "style", 7), s = g(e, "LineComponent", 7), a = /* @__PURE__ */ $(() => {
    if (!n().connection.inProgress)
      return "";
    const p = {
      sourceX: n().connection.from.x,
      sourceY: n().connection.from.y,
      sourcePosition: n().connection.fromPosition,
      targetX: n().connection.to.x,
      targetY: n().connection.to.y,
      targetPosition: n().connection.toPosition
    };
    switch (r()) {
      case Wn.Bezier: {
        const [v] = Pp(p);
        return v;
      }
      case Wn.Straight: {
        const [v] = Np(p);
        return v;
      }
      case Wn.Step:
      case Wn.SmoothStep: {
        const [v] = uu({
          ...p,
          borderRadius: r() === Wn.Step ? 0 : void 0
        });
        return v;
      }
    }
  });
  var l = {
    get store() {
      return n();
    },
    set store(p) {
      n(p), f();
    },
    get type() {
      return r();
    },
    set type(p) {
      r(p), f();
    },
    get containerStyle() {
      return o();
    },
    set containerStyle(p) {
      o(p), f();
    },
    get style() {
      return i();
    },
    set style(p) {
      i(p), f();
    },
    get LineComponent() {
      return s();
    },
    set LineComponent(p) {
      s(p), f();
    }
  }, u = he(), d = J(u);
  {
    var h = (p) => {
      var v = Y2(), m = X(v), y = X(m);
      {
        var w = (k) => {
          var O = he(), C = J(O);
          Ct(C, s, (x, E) => {
            E(x, {});
          }), T(k, O);
        }, b = (k) => {
          var O = q2();
          Ne(() => {
            Oe(O, "d", c(a)), Pt(O, i());
          }), T(k, O);
        };
        se(y, (k) => {
          s() ? k(w) : k(b, !1);
        });
      }
      Z(m), Z(v), Ne(
        (k) => {
          Oe(v, "width", n().width), Oe(v, "height", n().height), Pt(v, o()), Xt(m, 0, k);
        },
        [
          () => cr([
            "svelte-flow__connection",
            db(n().connection.isValid)
          ])
        ]
      ), T(p, v);
    };
    se(d, (p) => {
      n().connection.inProgress && p(h);
    });
  }
  return T(t, u), le(l);
}
ie(
  gf,
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
var U2 = /* @__PURE__ */ ne("<div><!></div>");
function Si(t, e) {
  ae(e, !0);
  let n = g(e, "position", 7, "top-right"), r = g(e, "style", 7), o = g(e, "class", 7), i = g(e, "children", 7), s = /* @__PURE__ */ De(e, [
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
      n(h), f();
    },
    get style() {
      return r();
    },
    set style(h) {
      r(h), f();
    },
    get class() {
      return o();
    },
    set class(h) {
      o(h), f();
    },
    get children() {
      return i();
    },
    set children(h) {
      i(h), f();
    }
  }, u = U2();
  Ue(u, (h) => ({ class: h, style: r(), ...s }), [
    () => ["svelte-flow__panel", o(), ...c(a)]
  ]);
  var d = X(u);
  return Ee(d, () => i() ?? Re), Z(u), T(t, u), le(l);
}
ie(Si, { position: {}, style: {}, class: {}, children: {} }, [], [], !0);
var G2 = /* @__PURE__ */ ne('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function vf(t, e) {
  ae(e, !0);
  let n = g(e, "proOptions", 7), r = g(e, "position", 7, "bottom-right");
  var o = {
    get proOptions() {
      return n();
    },
    set proOptions(l) {
      n(l), f();
    },
    get position() {
      return r();
    },
    set position(l = "bottom-right") {
      r(l), f();
    }
  }, i = he(), s = J(i);
  {
    var a = (l) => {
      Si(l, {
        get position() {
          return r();
        },
        class: "svelte-flow__attribution",
        "data-message": "Feel free to remove the attribution or check out how you could support us: https://svelteflow.dev/support-us",
        children: (u, d) => {
          var h = G2();
          T(u, h);
        },
        $$slots: { default: !0 }
      });
    };
    se(s, (l) => {
      n()?.hideAttribution || l(a);
    });
  }
  return T(t, i), le(o);
}
ie(vf, { proOptions: {}, position: {} }, [], [], !0);
var J2 = /* @__PURE__ */ ne("<div><!></div>");
const Q2 = {
  hash: "svelte-152mfj7",
  code: ".svelte-flow.svelte-152mfj7 {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;background-color:var(--background-color, var(--background-color-default));}:root {--background-color-default: #fff;--background-pattern-color-default: #ddd;--minimap-mask-color-default: rgb(240, 240, 240, 0.6);--minimap-mask-stroke-color-default: none;--minimap-mask-stroke-width-default: 1;--controls-button-background-color-default: #fefefe;--controls-button-background-color-hover-default: #f4f4f4;--controls-button-color-default: inherit;--controls-button-color-hover-default: inherit;--controls-button-border-color-default: #eee;}"
};
function mf(t, e) {
  ae(e, !0), Ge(t, Q2);
  let n = g(e, "width", 7), r = g(e, "height", 7), o = g(e, "colorMode", 7), i = g(e, "domNode", 15), s = g(e, "clientWidth", 15), a = g(e, "clientHeight", 15), l = g(e, "children", 7), u = g(e, "rest", 7), d = /* @__PURE__ */ $(() => u().class), h = /* @__PURE__ */ $(() => Gm(u(), [
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
  function p(w) {
    w.currentTarget.scrollTo({ top: 0, left: 0, behavior: "auto" }), u().onscroll && u().onscroll(w);
  }
  var v = {
    get width() {
      return n();
    },
    set width(w) {
      n(w), f();
    },
    get height() {
      return r();
    },
    set height(w) {
      r(w), f();
    },
    get colorMode() {
      return o();
    },
    set colorMode(w) {
      o(w), f();
    },
    get domNode() {
      return i();
    },
    set domNode(w) {
      i(w), f();
    },
    get clientWidth() {
      return s();
    },
    set clientWidth(w) {
      s(w), f();
    },
    get clientHeight() {
      return a();
    },
    set clientHeight(w) {
      a(w), f();
    },
    get children() {
      return l();
    },
    set children(w) {
      l(w), f();
    },
    get rest() {
      return u();
    },
    set rest(w) {
      u(w), f();
    }
  }, m = J2();
  Ue(
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
      onscroll: p,
      ...c(h),
      [Pn]: w
    }),
    [
      () => ({ width: Vn(n()), height: Vn(r()) })
    ],
    void 0,
    void 0,
    "svelte-152mfj7"
  );
  var y = X(m);
  return Ee(y, () => l() ?? Re), Z(m), Et(m, (w) => i(w), () => i()), ac(m, "clientHeight", a), ac(m, "clientWidth", s), T(t, m), le(v);
}
ie(
  mf,
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
var ex = /* @__PURE__ */ ne('<div class="svelte-flow__viewport-back svelte-flow__container"></div> <!> <div class="svelte-flow__edge-labels svelte-flow__container"></div> <!> <!> <!> <div class="svelte-flow__viewport-front svelte-flow__container"></div>', 1), tx = /* @__PURE__ */ ne("<!> <!>", 1), nx = /* @__PURE__ */ ne("<!> <!> <!> <!> <!>", 1);
function yf(t, e) {
  ae(e, !0);
  let n = g(e, "width", 7), r = g(e, "height", 7), o = g(e, "proOptions", 7), i = g(e, "selectionKey", 7), s = g(e, "deleteKey", 7), a = g(e, "panActivationKey", 7), l = g(e, "multiSelectionKey", 7), u = g(e, "zoomActivationKey", 7), d = g(e, "paneClickDistance", 7, 1), h = g(e, "nodeClickDistance", 7, 1), p = g(e, "onmovestart", 7), v = g(e, "onmoveend", 7), m = g(e, "onmove", 7), y = g(e, "oninit", 7), w = g(e, "onnodeclick", 7), b = g(e, "onnodecontextmenu", 7), k = g(e, "onnodedrag", 7), O = g(e, "onnodedragstart", 7), C = g(e, "onnodedragstop", 7), x = g(e, "onnodepointerenter", 7), E = g(e, "onnodepointermove", 7), V = g(e, "onnodepointerleave", 7), H = g(e, "onselectionclick", 7), I = g(e, "onselectioncontextmenu", 7), A = g(e, "onselectionstart", 7), D = g(e, "onselectionend", 7), _ = g(e, "onedgeclick", 7), M = g(e, "onedgecontextmenu", 7), S = g(e, "onedgepointerenter", 7), P = g(e, "onedgepointerleave", 7), z = g(e, "onpaneclick", 7), B = g(e, "onpanecontextmenu", 7), q = g(e, "panOnScrollMode", 23, () => jr.Free), U = g(e, "preventScrolling", 7, !0), N = g(e, "zoomOnScroll", 7, !0), Y = g(e, "zoomOnDoubleClick", 7, !0), ee = g(e, "zoomOnPinch", 7, !0), j = g(e, "panOnScroll", 7, !1), F = g(e, "panOnScrollSpeed", 7, 0.5), W = g(e, "panOnDrag", 7, !0), G = g(e, "selectionOnDrag", 7, !1), re = g(e, "connectionLineComponent", 7), L = g(e, "connectionLineStyle", 7), te = g(e, "connectionLineContainerStyle", 7), fe = g(e, "connectionLineType", 23, () => Wn.Bezier), ue = g(e, "attributionPosition", 7), oe = g(e, "children", 7), ce = g(e, "nodes", 31, () => pt([])), ve = g(e, "edges", 31, () => pt([])), ke = g(e, "viewport", 31, () => {
  }), be = /* @__PURE__ */ De(e, [
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
  ]), de = Jp({
    props: be,
    width: n(),
    height: r(),
    get nodes() {
      return ce();
    },
    set nodes(Q) {
      ce(Q);
    },
    get edges() {
      return ve();
    },
    set edges(Q) {
      ve(Q);
    },
    get viewport() {
      return ke();
    },
    set viewport(Q) {
      ke(Q);
    }
  });
  const ye = yn(Os);
  ye && ye.setStore && ye.setStore(de), Fr(Os, {
    provider: !1,
    getStore() {
      return de;
    }
  }), He(() => {
    const Q = { nodes: de.selectedNodes, edges: de.selectedEdges };
    lt(() => e.onselectionchange)?.(Q);
    for (const Le of de.selectionChangeHandlers.values())
      Le(Q);
  }), mi(() => {
    de.reset();
  });
  var Pe = {
    get width() {
      return n();
    },
    set width(Q) {
      n(Q), f();
    },
    get height() {
      return r();
    },
    set height(Q) {
      r(Q), f();
    },
    get proOptions() {
      return o();
    },
    set proOptions(Q) {
      o(Q), f();
    },
    get selectionKey() {
      return i();
    },
    set selectionKey(Q) {
      i(Q), f();
    },
    get deleteKey() {
      return s();
    },
    set deleteKey(Q) {
      s(Q), f();
    },
    get panActivationKey() {
      return a();
    },
    set panActivationKey(Q) {
      a(Q), f();
    },
    get multiSelectionKey() {
      return l();
    },
    set multiSelectionKey(Q) {
      l(Q), f();
    },
    get zoomActivationKey() {
      return u();
    },
    set zoomActivationKey(Q) {
      u(Q), f();
    },
    get paneClickDistance() {
      return d();
    },
    set paneClickDistance(Q = 1) {
      d(Q), f();
    },
    get nodeClickDistance() {
      return h();
    },
    set nodeClickDistance(Q = 1) {
      h(Q), f();
    },
    get onmovestart() {
      return p();
    },
    set onmovestart(Q) {
      p(Q), f();
    },
    get onmoveend() {
      return v();
    },
    set onmoveend(Q) {
      v(Q), f();
    },
    get onmove() {
      return m();
    },
    set onmove(Q) {
      m(Q), f();
    },
    get oninit() {
      return y();
    },
    set oninit(Q) {
      y(Q), f();
    },
    get onnodeclick() {
      return w();
    },
    set onnodeclick(Q) {
      w(Q), f();
    },
    get onnodecontextmenu() {
      return b();
    },
    set onnodecontextmenu(Q) {
      b(Q), f();
    },
    get onnodedrag() {
      return k();
    },
    set onnodedrag(Q) {
      k(Q), f();
    },
    get onnodedragstart() {
      return O();
    },
    set onnodedragstart(Q) {
      O(Q), f();
    },
    get onnodedragstop() {
      return C();
    },
    set onnodedragstop(Q) {
      C(Q), f();
    },
    get onnodepointerenter() {
      return x();
    },
    set onnodepointerenter(Q) {
      x(Q), f();
    },
    get onnodepointermove() {
      return E();
    },
    set onnodepointermove(Q) {
      E(Q), f();
    },
    get onnodepointerleave() {
      return V();
    },
    set onnodepointerleave(Q) {
      V(Q), f();
    },
    get onselectionclick() {
      return H();
    },
    set onselectionclick(Q) {
      H(Q), f();
    },
    get onselectioncontextmenu() {
      return I();
    },
    set onselectioncontextmenu(Q) {
      I(Q), f();
    },
    get onselectionstart() {
      return A();
    },
    set onselectionstart(Q) {
      A(Q), f();
    },
    get onselectionend() {
      return D();
    },
    set onselectionend(Q) {
      D(Q), f();
    },
    get onedgeclick() {
      return _();
    },
    set onedgeclick(Q) {
      _(Q), f();
    },
    get onedgecontextmenu() {
      return M();
    },
    set onedgecontextmenu(Q) {
      M(Q), f();
    },
    get onedgepointerenter() {
      return S();
    },
    set onedgepointerenter(Q) {
      S(Q), f();
    },
    get onedgepointerleave() {
      return P();
    },
    set onedgepointerleave(Q) {
      P(Q), f();
    },
    get onpaneclick() {
      return z();
    },
    set onpaneclick(Q) {
      z(Q), f();
    },
    get onpanecontextmenu() {
      return B();
    },
    set onpanecontextmenu(Q) {
      B(Q), f();
    },
    get panOnScrollMode() {
      return q();
    },
    set panOnScrollMode(Q = jr.Free) {
      q(Q), f();
    },
    get preventScrolling() {
      return U();
    },
    set preventScrolling(Q = !0) {
      U(Q), f();
    },
    get zoomOnScroll() {
      return N();
    },
    set zoomOnScroll(Q = !0) {
      N(Q), f();
    },
    get zoomOnDoubleClick() {
      return Y();
    },
    set zoomOnDoubleClick(Q = !0) {
      Y(Q), f();
    },
    get zoomOnPinch() {
      return ee();
    },
    set zoomOnPinch(Q = !0) {
      ee(Q), f();
    },
    get panOnScroll() {
      return j();
    },
    set panOnScroll(Q = !1) {
      j(Q), f();
    },
    get panOnScrollSpeed() {
      return F();
    },
    set panOnScrollSpeed(Q = 0.5) {
      F(Q), f();
    },
    get panOnDrag() {
      return W();
    },
    set panOnDrag(Q = !0) {
      W(Q), f();
    },
    get selectionOnDrag() {
      return G();
    },
    set selectionOnDrag(Q = !1) {
      G(Q), f();
    },
    get connectionLineComponent() {
      return re();
    },
    set connectionLineComponent(Q) {
      re(Q), f();
    },
    get connectionLineStyle() {
      return L();
    },
    set connectionLineStyle(Q) {
      L(Q), f();
    },
    get connectionLineContainerStyle() {
      return te();
    },
    set connectionLineContainerStyle(Q) {
      te(Q), f();
    },
    get connectionLineType() {
      return fe();
    },
    set connectionLineType(Q = Wn.Bezier) {
      fe(Q), f();
    },
    get attributionPosition() {
      return ue();
    },
    set attributionPosition(Q) {
      ue(Q), f();
    },
    get children() {
      return oe();
    },
    set children(Q) {
      oe(Q), f();
    },
    get nodes() {
      return ce();
    },
    set nodes(Q = []) {
      ce(Q), f();
    },
    get edges() {
      return ve();
    },
    set edges(Q = []) {
      ve(Q), f();
    },
    get viewport() {
      return ke();
    },
    set viewport(Q = void 0) {
      ke(Q), f();
    }
  };
  return mf(t, {
    get colorMode() {
      return de.colorMode;
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
      return de.domNode;
    },
    set domNode(Q) {
      de.domNode = Q;
    },
    get clientWidth() {
      return de.width;
    },
    set clientWidth(Q) {
      de.width = Q;
    },
    get clientHeight() {
      return de.height;
    },
    set clientHeight(Q) {
      de.height = Q;
    },
    children: (Q, Le) => {
      var Ae = nx(), We = J(Ae);
      ff(We, {
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
          return de;
        },
        set store(Qe) {
          de = Qe;
        }
      });
      var je = R(We, 2);
      Qp(je, {
        get panOnScrollMode() {
          return q();
        },
        get preventScrolling() {
          return U();
        },
        get zoomOnScroll() {
          return N();
        },
        get zoomOnDoubleClick() {
          return Y();
        },
        get zoomOnPinch() {
          return ee();
        },
        get panOnScroll() {
          return j();
        },
        get panOnScrollSpeed() {
          return F();
        },
        get panOnDrag() {
          return W();
        },
        get paneClickDistance() {
          return d();
        },
        get selectionOnDrag() {
          return G();
        },
        get onmovestart() {
          return p();
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
          return de;
        },
        set store(Qe) {
          de = Qe;
        },
        children: (Qe, ge) => {
          ef(Qe, {
            get onpaneclick() {
              return z();
            },
            get onpanecontextmenu() {
              return B();
            },
            get onselectionstart() {
              return A();
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
              return G();
            },
            get store() {
              return de;
            },
            set store(ze) {
              de = ze;
            },
            children: (ze, rt) => {
              var Xe = tx(), ut = J(Xe);
              tf(ut, {
                get store() {
                  return de;
                },
                set store(ht) {
                  de = ht;
                },
                children: (ht, st) => {
                  var at = ex(), Nt = R(J(at), 2);
                  hf(Nt, {
                    get onedgeclick() {
                      return _();
                    },
                    get onedgecontextmenu() {
                      return M();
                    },
                    get onedgepointerenter() {
                      return S();
                    },
                    get onedgepointerleave() {
                      return P();
                    },
                    get store() {
                      return de;
                    },
                    set store(Mr) {
                      de = Mr;
                    }
                  });
                  var tn = R(Nt, 4);
                  gf(tn, {
                    get type() {
                      return fe();
                    },
                    get LineComponent() {
                      return re();
                    },
                    get containerStyle() {
                      return te();
                    },
                    get style() {
                      return L();
                    },
                    get store() {
                      return de;
                    },
                    set store(Mr) {
                      de = Mr;
                    }
                  });
                  var Xu = R(tn, 2);
                  lf(Xu, {
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
                      return x();
                    },
                    get onnodepointermove() {
                      return E();
                    },
                    get onnodepointerleave() {
                      return V();
                    },
                    get onnodedrag() {
                      return k();
                    },
                    get onnodedragstart() {
                      return O();
                    },
                    get onnodedragstop() {
                      return C();
                    },
                    get store() {
                      return de;
                    },
                    set store(Mr) {
                      de = Mr;
                    }
                  });
                  var Iv = R(Xu, 2);
                  pf(Iv, {
                    get onselectionclick() {
                      return H();
                    },
                    get onselectioncontextmenu() {
                      return I();
                    },
                    get onnodedrag() {
                      return k();
                    },
                    get onnodedragstart() {
                      return O();
                    },
                    get onnodedragstop() {
                      return C();
                    },
                    get store() {
                      return de;
                    },
                    set store(Mr) {
                      de = Mr;
                    }
                  }), Se(2), T(ht, at);
                },
                $$slots: { default: !0 }
              });
              var At = R(ut, 2);
              {
                let ht = /* @__PURE__ */ $(() => !!(de.selectionRect && de.selectionRectMode === "user")), st = /* @__PURE__ */ $(() => de.selectionRect?.width), at = /* @__PURE__ */ $(() => de.selectionRect?.height), Nt = /* @__PURE__ */ $(() => de.selectionRect?.x), tn = /* @__PURE__ */ $(() => de.selectionRect?.y);
                gu(At, {
                  get isVisible() {
                    return c(ht);
                  },
                  get width() {
                    return c(st);
                  },
                  get height() {
                    return c(at);
                  },
                  get x() {
                    return c(Nt);
                  },
                  get y() {
                    return c(tn);
                  }
                });
              }
              T(ze, Xe);
            },
            $$slots: { default: !0 }
          });
        },
        $$slots: { default: !0 }
      });
      var tt = R(je, 2);
      vf(tt, {
        get proOptions() {
          return o();
        },
        get position() {
          return ue();
        }
      });
      var it = R(tt, 2);
      rf(it, {
        get store() {
          return de;
        }
      });
      var dt = R(it, 2);
      Ee(dt, () => oe() ?? Re), T(Q, Ae);
    },
    $$slots: { default: !0 }
  }), le(Pe);
}
ie(
  yf,
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
function wf(t, e) {
  ae(e, !0);
  let n = g(e, "children", 7), r = /* @__PURE__ */ me(Jp({ props: {}, nodes: [], edges: [] }));
  Fr(Os, {
    provider: !0,
    getStore() {
      return c(r);
    },
    setStore: (a) => {
      K(r, a);
    }
  }), mi(() => {
    c(r).reset();
  });
  var o = {
    get children() {
      return n();
    },
    set children(a) {
      n(a), f();
    }
  }, i = he(), s = J(i);
  return Ee(s, () => n() ?? Re), T(t, i), le(o);
}
ie(wf, { children: {} }, [], [], !0);
var rx = /* @__PURE__ */ ne("<button><!></button>");
function jo(t, e) {
  ae(e, !0);
  let n = g(e, "class", 7), r = g(e, "bgColor", 7), o = g(e, "bgColorHover", 7), i = g(e, "color", 7), s = g(e, "colorHover", 7), a = g(e, "borderColor", 7), l = g(e, "onclick", 7), u = g(e, "children", 7), d = /* @__PURE__ */ De(e, [
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
      n(m), f();
    },
    get bgColor() {
      return r();
    },
    set bgColor(m) {
      r(m), f();
    },
    get bgColorHover() {
      return o();
    },
    set bgColorHover(m) {
      o(m), f();
    },
    get color() {
      return i();
    },
    set color(m) {
      i(m), f();
    },
    get colorHover() {
      return s();
    },
    set colorHover(m) {
      s(m), f();
    },
    get borderColor() {
      return a();
    },
    set borderColor(m) {
      a(m), f();
    },
    get onclick() {
      return l();
    },
    set onclick(m) {
      l(m), f();
    },
    get children() {
      return u();
    },
    set children(m) {
      u(m), f();
    }
  }, p = rx();
  Ue(p, () => ({
    type: "button",
    onclick: l(),
    class: ["svelte-flow__controls-button", n()],
    ...d,
    [Pn]: {
      "--xy-controls-button-background-color-props": r(),
      "--xy-controls-button-background-color-hover-props": o(),
      "--xy-controls-button-color-props": i(),
      "--xy-controls-button-color-hover-props": s(),
      "--xy-controls-button-border-color-props": a()
    }
  }));
  var v = X(p);
  return Ee(v, () => u() ?? Re), Z(p), T(t, p), le(h);
}
ie(
  jo,
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
var ox = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function bf(t) {
  var e = ox();
  T(t, e);
}
ie(bf, {}, [], [], !0);
var ix = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function xf(t) {
  var e = ix();
  T(t, e);
}
ie(xf, {}, [], [], !0);
var sx = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function kf(t) {
  var e = sx();
  T(t, e);
}
ie(kf, {}, [], [], !0);
var ax = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function Cf(t) {
  var e = ax();
  T(t, e);
}
ie(Cf, {}, [], [], !0);
var lx = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function $f(t) {
  var e = lx();
  T(t, e);
}
ie($f, {}, [], [], !0);
var ux = /* @__PURE__ */ ne("<!> <!>", 1), cx = /* @__PURE__ */ ne("<!> <!> <!> <!> <!> <!>", 1);
function Sf(t, e) {
  ae(e, !0);
  let n = g(e, "position", 7, "bottom-left"), r = g(e, "orientation", 7, "vertical"), o = g(e, "showZoom", 7, !0), i = g(e, "showFitView", 7, !0), s = g(e, "showLock", 7, !0), a = g(e, "style", 7), l = g(e, "class", 7), u = g(e, "buttonBgColor", 7), d = g(e, "buttonBgColorHover", 7), h = g(e, "buttonColor", 7), p = g(e, "buttonColorHover", 7), v = g(e, "buttonBorderColor", 7), m = g(e, "fitViewOptions", 7), y = g(e, "children", 7), w = g(e, "before", 7), b = g(e, "after", 7), k = /* @__PURE__ */ De(e, [
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
  ]), O = /* @__PURE__ */ $(Cn);
  const C = {
    bgColor: u(),
    bgColorHover: d(),
    color: h(),
    colorHover: p(),
    borderColor: v()
  };
  let x = /* @__PURE__ */ $(() => c(O).nodesDraggable || c(O).nodesConnectable || c(O).elementsSelectable), E = /* @__PURE__ */ $(() => c(O).viewport.zoom <= c(O).minZoom), V = /* @__PURE__ */ $(() => c(O).viewport.zoom >= c(O).maxZoom), H = /* @__PURE__ */ $(() => c(O).ariaLabelConfig), I = /* @__PURE__ */ $(() => r() === "horizontal" ? "horizontal" : "vertical");
  const A = () => {
    c(O).zoomIn();
  }, D = () => {
    c(O).zoomOut();
  }, _ = () => {
    c(O).fitView(m());
  }, M = () => {
    let P = !c(x);
    c(O).nodesDraggable = P, c(O).nodesConnectable = P, c(O).elementsSelectable = P;
  };
  var S = {
    get position() {
      return n();
    },
    set position(P = "bottom-left") {
      n(P), f();
    },
    get orientation() {
      return r();
    },
    set orientation(P = "vertical") {
      r(P), f();
    },
    get showZoom() {
      return o();
    },
    set showZoom(P = !0) {
      o(P), f();
    },
    get showFitView() {
      return i();
    },
    set showFitView(P = !0) {
      i(P), f();
    },
    get showLock() {
      return s();
    },
    set showLock(P = !0) {
      s(P), f();
    },
    get style() {
      return a();
    },
    set style(P) {
      a(P), f();
    },
    get class() {
      return l();
    },
    set class(P) {
      l(P), f();
    },
    get buttonBgColor() {
      return u();
    },
    set buttonBgColor(P) {
      u(P), f();
    },
    get buttonBgColorHover() {
      return d();
    },
    set buttonBgColorHover(P) {
      d(P), f();
    },
    get buttonColor() {
      return h();
    },
    set buttonColor(P) {
      h(P), f();
    },
    get buttonColorHover() {
      return p();
    },
    set buttonColorHover(P) {
      p(P), f();
    },
    get buttonBorderColor() {
      return v();
    },
    set buttonBorderColor(P) {
      v(P), f();
    },
    get fitViewOptions() {
      return m();
    },
    set fitViewOptions(P) {
      m(P), f();
    },
    get children() {
      return y();
    },
    set children(P) {
      y(P), f();
    },
    get before() {
      return w();
    },
    set before(P) {
      w(P), f();
    },
    get after() {
      return b();
    },
    set after(P) {
      b(P), f();
    }
  };
  {
    let P = /* @__PURE__ */ $(() => [
      "svelte-flow__controls",
      c(I),
      l()
    ]);
    Si(t, Ie(
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
      () => k,
      {
        children: (z, B) => {
          var q = cx(), U = J(q);
          {
            var N = (ue) => {
              var oe = he(), ce = J(oe);
              Ee(ce, w), T(ue, oe);
            };
            se(U, (ue) => {
              w() && ue(N);
            });
          }
          var Y = R(U, 2);
          {
            var ee = (ue) => {
              var oe = ux(), ce = J(oe);
              jo(ce, Ie(
                {
                  onclick: A,
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
                  children: (ke, be) => {
                    bf(ke);
                  },
                  $$slots: { default: !0 }
                }
              ));
              var ve = R(ce, 2);
              jo(ve, Ie(
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
                    return c(E);
                  }
                },
                () => C,
                {
                  children: (ke, be) => {
                    xf(ke);
                  },
                  $$slots: { default: !0 }
                }
              )), T(ue, oe);
            };
            se(Y, (ue) => {
              o() && ue(ee);
            });
          }
          var j = R(Y, 2);
          {
            var F = (ue) => {
              jo(ue, Ie(
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
                  children: (oe, ce) => {
                    kf(oe);
                  },
                  $$slots: { default: !0 }
                }
              ));
            };
            se(j, (ue) => {
              i() && ue(F);
            });
          }
          var W = R(j, 2);
          {
            var G = (ue) => {
              jo(ue, Ie(
                {
                  class: "svelte-flow__controls-interactive",
                  onclick: M,
                  get title() {
                    return c(H)["controls.interactive.ariaLabel"];
                  },
                  get "aria-label"() {
                    return c(H)["controls.interactive.ariaLabel"];
                  }
                },
                () => C,
                {
                  children: (oe, ce) => {
                    var ve = he(), ke = J(ve);
                    {
                      var be = (ye) => {
                        $f(ye);
                      }, de = (ye) => {
                        Cf(ye);
                      };
                      se(ke, (ye) => {
                        c(x) ? ye(be) : ye(de, !1);
                      });
                    }
                    T(oe, ve);
                  },
                  $$slots: { default: !0 }
                }
              ));
            };
            se(W, (ue) => {
              s() && ue(G);
            });
          }
          var re = R(W, 2);
          {
            var L = (ue) => {
              var oe = he(), ce = J(oe);
              Ee(ce, y), T(ue, oe);
            };
            se(re, (ue) => {
              y() && ue(L);
            });
          }
          var te = R(re, 2);
          {
            var fe = (ue) => {
              var oe = he(), ce = J(oe);
              Ee(ce, b), T(ue, oe);
            };
            se(te, (ue) => {
              b() && ue(fe);
            });
          }
          T(z, q);
        },
        $$slots: { default: !0 }
      }
    ));
  }
  return le(S);
}
ie(
  Sf,
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
var Yn;
(function(t) {
  t.Lines = "lines", t.Dots = "dots", t.Cross = "cross";
})(Yn || (Yn = {}));
var dx = /* @__PURE__ */ Ce("<circle></circle>");
function _f(t, e) {
  ae(e, !0);
  let n = g(e, "radius", 7), r = g(e, "class", 7);
  var o = {
    get radius() {
      return n();
    },
    set radius(s) {
      n(s), f();
    },
    get class() {
      return r();
    },
    set class(s) {
      r(s), f();
    }
  }, i = dx();
  return Ne(() => {
    Oe(i, "cx", n()), Oe(i, "cy", n()), Oe(i, "r", n()), Xt(i, 0, cr(["svelte-flow__background-pattern", "dots", r()]));
  }), T(t, i), le(o);
}
ie(_f, { radius: {}, class: {} }, [], [], !0);
var hx = /* @__PURE__ */ Ce("<path></path>");
function Of(t, e) {
  ae(e, !0);
  let n = g(e, "lineWidth", 7), r = g(e, "dimensions", 7), o = g(e, "variant", 7), i = g(e, "class", 7);
  var s = {
    get lineWidth() {
      return n();
    },
    set lineWidth(l) {
      n(l), f();
    },
    get dimensions() {
      return r();
    },
    set dimensions(l) {
      r(l), f();
    },
    get variant() {
      return o();
    },
    set variant(l) {
      o(l), f();
    },
    get class() {
      return i();
    },
    set class(l) {
      i(l), f();
    }
  }, a = hx();
  return Ne(() => {
    Oe(a, "stroke-width", n()), Oe(a, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), Xt(a, 0, cr(["svelte-flow__background-pattern", o(), i()]));
  }), T(t, a), le(s);
}
ie(Of, { lineWidth: {}, dimensions: {}, variant: {}, class: {} }, [], [], !0);
const px = {
  [Yn.Dots]: 1,
  [Yn.Lines]: 1,
  [Yn.Cross]: 6
};
var fx = /* @__PURE__ */ Ce('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
function Pf(t, e) {
  ae(e, !0);
  let n = g(e, "id", 7), r = g(e, "variant", 23, () => Yn.Dots), o = g(e, "gap", 7, 20), i = g(e, "size", 7), s = g(e, "lineWidth", 7, 1), a = g(e, "bgColor", 7), l = g(e, "patternColor", 7), u = g(e, "patternClass", 7), d = g(e, "class", 7), h = /* @__PURE__ */ $(Cn), p = /* @__PURE__ */ $(() => r() === Yn.Dots), v = /* @__PURE__ */ $(() => r() === Yn.Cross), m = /* @__PURE__ */ $(() => Array.isArray(o()) ? o() : [o(), o()]), y = /* @__PURE__ */ $(() => `background-pattern-${c(h).flowId}-${n() ?? ""}`), w = /* @__PURE__ */ $(() => [
    c(m)[0] * c(h).viewport.zoom || 1,
    c(m)[1] * c(h).viewport.zoom || 1
  ]), b = /* @__PURE__ */ $(() => (i() ?? px[r()]) * c(h).viewport.zoom), k = /* @__PURE__ */ $(() => c(v) ? [c(b), c(b)] : c(w)), O = /* @__PURE__ */ $(() => c(p) ? [c(b) / 2, c(b) / 2] : [
    c(k)[0] / 2,
    c(k)[1] / 2
  ]);
  var C = {
    get id() {
      return n();
    },
    set id(_) {
      n(_), f();
    },
    get variant() {
      return r();
    },
    set variant(_ = Yn.Dots) {
      r(_), f();
    },
    get gap() {
      return o();
    },
    set gap(_ = 20) {
      o(_), f();
    },
    get size() {
      return i();
    },
    set size(_) {
      i(_), f();
    },
    get lineWidth() {
      return s();
    },
    set lineWidth(_ = 1) {
      s(_), f();
    },
    get bgColor() {
      return a();
    },
    set bgColor(_) {
      a(_), f();
    },
    get patternColor() {
      return l();
    },
    set patternColor(_) {
      l(_), f();
    },
    get patternClass() {
      return u();
    },
    set patternClass(_) {
      u(_), f();
    },
    get class() {
      return d();
    },
    set class(_) {
      d(_), f();
    }
  }, x = fx();
  let E;
  var V = X(x), H = X(V);
  {
    var I = (_) => {
      {
        let M = /* @__PURE__ */ $(() => c(b) / 2);
        _f(_, {
          get radius() {
            return c(M);
          },
          get class() {
            return u();
          }
        });
      }
    }, A = (_) => {
      Of(_, {
        get dimensions() {
          return c(k);
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
    se(H, (_) => {
      c(p) ? _(I) : _(A, !1);
    });
  }
  Z(V);
  var D = R(V);
  return Z(x), Ne(() => {
    Xt(x, 0, cr([
      "svelte-flow__background",
      "svelte-flow__container",
      d()
    ])), E = Pt(x, "", E, {
      "--xy-background-color-props": a(),
      "--xy-background-pattern-color-props": l()
    }), Oe(V, "id", c(y)), Oe(V, "x", c(h).viewport.x % c(w)[0]), Oe(V, "y", c(h).viewport.y % c(w)[1]), Oe(V, "width", c(w)[0]), Oe(V, "height", c(w)[1]), Oe(V, "patternTransform", `translate(-${c(O)[0]},-${c(O)[1]})`), Oe(D, "fill", `url(#${c(y)})`);
  }), T(t, x), le(C);
}
ie(
  Pf,
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
var gx = /* @__PURE__ */ Ce("<rect></rect>");
function Ef(t, e) {
  ae(e, !0);
  let n = g(e, "id", 7), r = g(e, "x", 7), o = g(e, "y", 7), i = g(e, "width", 7), s = g(e, "height", 7), a = g(e, "borderRadius", 7, 5), l = g(e, "color", 7), u = g(e, "shapeRendering", 7), d = g(e, "strokeColor", 7), h = g(e, "strokeWidth", 7, 2), p = g(e, "selected", 7), v = g(e, "class", 7), m = g(e, "nodeComponent", 7);
  var y = {
    get id() {
      return n();
    },
    set id(C) {
      n(C), f();
    },
    get x() {
      return r();
    },
    set x(C) {
      r(C), f();
    },
    get y() {
      return o();
    },
    set y(C) {
      o(C), f();
    },
    get width() {
      return i();
    },
    set width(C) {
      i(C), f();
    },
    get height() {
      return s();
    },
    set height(C) {
      s(C), f();
    },
    get borderRadius() {
      return a();
    },
    set borderRadius(C = 5) {
      a(C), f();
    },
    get color() {
      return l();
    },
    set color(C) {
      l(C), f();
    },
    get shapeRendering() {
      return u();
    },
    set shapeRendering(C) {
      u(C), f();
    },
    get strokeColor() {
      return d();
    },
    set strokeColor(C) {
      d(C), f();
    },
    get strokeWidth() {
      return h();
    },
    set strokeWidth(C = 2) {
      h(C), f();
    },
    get selected() {
      return p();
    },
    set selected(C) {
      p(C), f();
    },
    get class() {
      return v();
    },
    set class(C) {
      v(C), f();
    },
    get nodeComponent() {
      return m();
    },
    set nodeComponent(C) {
      m(C), f();
    }
  }, w = he(), b = J(w);
  {
    var k = (C) => {
      const x = /* @__PURE__ */ $(m);
      var E = he(), V = J(E);
      Ct(V, () => c(x), (H, I) => {
        I(H, {
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
            return p();
          }
        });
      }), T(C, E);
    }, O = (C) => {
      var x = gx();
      let E, V;
      Ne(() => {
        E = Xt(x, 0, cr(["svelte-flow__minimap-node", v()]), null, E, { selected: p() }), Oe(x, "x", r()), Oe(x, "y", o()), Oe(x, "rx", a()), Oe(x, "ry", a()), Oe(x, "width", i()), Oe(x, "height", s()), Oe(x, "shape-rendering", u()), V = Pt(x, "", V, {
          fill: l(),
          stroke: d(),
          "stroke-width": h()
        });
      }), T(C, x);
    };
    se(b, (C) => {
      m() ? C(k) : C(O, !1);
    });
  }
  return T(t, w), le(y);
}
ie(
  Ef,
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
function vx(t, e) {
  const n = n2({
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
const Ma = (t) => t instanceof Function ? t : () => t;
var mx = /* @__PURE__ */ Ce("<title> </title>"), yx = /* @__PURE__ */ Ce('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>'), wx = /* @__PURE__ */ ne('<svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>', 1);
function Nf(t, e) {
  ae(e, !0);
  let n = g(e, "position", 7, "bottom-right"), r = g(e, "ariaLabel", 7), o = g(e, "nodeStrokeColor", 7, "transparent"), i = g(e, "nodeColor", 7), s = g(e, "nodeClass", 7, ""), a = g(e, "nodeBorderRadius", 7, 5), l = g(e, "nodeStrokeWidth", 7, 2), u = g(e, "nodeComponent", 7), d = g(e, "bgColor", 7), h = g(e, "maskColor", 7), p = g(e, "maskStrokeColor", 7), v = g(e, "maskStrokeWidth", 7), m = g(e, "width", 7, 200), y = g(e, "height", 7, 150), w = g(e, "pannable", 7, !0), b = g(e, "zoomable", 7, !0), k = g(e, "inversePan", 7), O = g(e, "zoomStep", 7), C = g(e, "class", 7), x = /* @__PURE__ */ De(e, [
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
  ]), E = /* @__PURE__ */ $(Cn), V = /* @__PURE__ */ $(() => c(E).ariaLabelConfig);
  const H = i() === void 0 ? void 0 : Ma(i()), I = Ma(o()), A = Ma(s()), D = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  );
  let _ = /* @__PURE__ */ $(() => `svelte-flow__minimap-desc-${c(E).flowId}`), M = /* @__PURE__ */ $(() => ({
    x: -c(E).viewport.x / c(E).viewport.zoom,
    y: -c(E).viewport.y / c(E).viewport.zoom,
    width: c(E).width / c(E).viewport.zoom,
    height: c(E).height / c(E).viewport.zoom
  })), S = /* @__PURE__ */ $(() => kp(xi(c(E).nodeLookup, { filter: (te) => !te.hidden }), c(M))), P = /* @__PURE__ */ $(() => c(S).width / m()), z = /* @__PURE__ */ $(() => c(S).height / y()), B = /* @__PURE__ */ $(() => Math.max(c(P), c(z))), q = /* @__PURE__ */ $(() => c(B) * m()), U = /* @__PURE__ */ $(() => c(B) * y()), N = /* @__PURE__ */ $(() => 5 * c(B)), Y = /* @__PURE__ */ $(() => c(S).x - (c(q) - c(S).width) / 2 - c(N)), ee = /* @__PURE__ */ $(() => c(S).y - (c(U) - c(S).height) / 2 - c(N)), j = /* @__PURE__ */ $(() => c(q) + c(N) * 2), F = /* @__PURE__ */ $(() => c(U) + c(N) * 2);
  const W = () => c(B);
  var G = {
    get position() {
      return n();
    },
    set position(te = "bottom-right") {
      n(te), f();
    },
    get ariaLabel() {
      return r();
    },
    set ariaLabel(te) {
      r(te), f();
    },
    get nodeStrokeColor() {
      return o();
    },
    set nodeStrokeColor(te = "transparent") {
      o(te), f();
    },
    get nodeColor() {
      return i();
    },
    set nodeColor(te) {
      i(te), f();
    },
    get nodeClass() {
      return s();
    },
    set nodeClass(te = "") {
      s(te), f();
    },
    get nodeBorderRadius() {
      return a();
    },
    set nodeBorderRadius(te = 5) {
      a(te), f();
    },
    get nodeStrokeWidth() {
      return l();
    },
    set nodeStrokeWidth(te = 2) {
      l(te), f();
    },
    get nodeComponent() {
      return u();
    },
    set nodeComponent(te) {
      u(te), f();
    },
    get bgColor() {
      return d();
    },
    set bgColor(te) {
      d(te), f();
    },
    get maskColor() {
      return h();
    },
    set maskColor(te) {
      h(te), f();
    },
    get maskStrokeColor() {
      return p();
    },
    set maskStrokeColor(te) {
      p(te), f();
    },
    get maskStrokeWidth() {
      return v();
    },
    set maskStrokeWidth(te) {
      v(te), f();
    },
    get width() {
      return m();
    },
    set width(te = 200) {
      m(te), f();
    },
    get height() {
      return y();
    },
    set height(te = 150) {
      y(te), f();
    },
    get pannable() {
      return w();
    },
    set pannable(te = !0) {
      w(te), f();
    },
    get zoomable() {
      return b();
    },
    set zoomable(te = !0) {
      b(te), f();
    },
    get inversePan() {
      return k();
    },
    set inversePan(te) {
      k(te), f();
    },
    get zoomStep() {
      return O();
    },
    set zoomStep(te) {
      O(te), f();
    },
    get class() {
      return C();
    },
    set class(te) {
      C(te), f();
    }
  }, re = wx(), L = J(re);
  {
    let te = /* @__PURE__ */ $(() => ["svelte-flow__minimap", C()]);
    h1(L, () => ({ "--xy-minimap-background-color-props": d() })), Si(L.lastChild, Ie(
      {
        get position() {
          return n();
        },
        get class() {
          return c(te);
        },
        "data-testid": "svelte-flow__minimap"
      },
      () => x,
      {
        children: (fe, ue) => {
          var oe = he(), ce = J(oe);
          {
            var ve = (ke) => {
              var be = yx();
              let de;
              var ye = X(be);
              {
                var Pe = (Ae) => {
                  var We = mx(), je = X(We, !0);
                  Z(We), Ne(() => {
                    Oe(We, "id", c(_)), nt(je, r() ?? c(V)["minimap.ariaLabel"]);
                  }), T(Ae, We);
                };
                se(ye, (Ae) => {
                  (r() ?? c(V)["minimap.ariaLabel"]) && Ae(Pe);
                });
              }
              var Q = R(ye);
              xt(Q, 17, () => c(E).nodes, (Ae) => Ae.id, (Ae, We) => {
                const je = /* @__PURE__ */ $(() => c(E).nodeLookup.get(c(We).id));
                var tt = he(), it = J(tt);
                {
                  var dt = (Qe) => {
                    const ge = /* @__PURE__ */ $(() => Er(c(je)));
                    {
                      let ze = /* @__PURE__ */ $(() => H?.(c(je))), rt = /* @__PURE__ */ $(() => I(c(je))), Xe = /* @__PURE__ */ $(() => A(c(je)));
                      Ef(Qe, Ie(
                        {
                          get id() {
                            return c(je).id;
                          },
                          get x() {
                            return c(je).internals.positionAbsolute.x;
                          },
                          get y() {
                            return c(je).internals.positionAbsolute.y;
                          }
                        },
                        () => c(ge),
                        {
                          get selected() {
                            return c(je).selected;
                          },
                          get nodeComponent() {
                            return u();
                          },
                          get color() {
                            return c(ze);
                          },
                          get borderRadius() {
                            return a();
                          },
                          get strokeColor() {
                            return c(rt);
                          },
                          get strokeWidth() {
                            return l();
                          },
                          get shapeRendering() {
                            return D;
                          },
                          get class() {
                            return c(Xe);
                          }
                        }
                      ));
                    }
                  };
                  se(it, (Qe) => {
                    c(je) && Cp(c(je)) && !c(je).hidden && Qe(dt);
                  });
                }
                T(Ae, tt);
              });
              var Le = R(Q);
              Z(be), zt(be, (Ae, We) => vx?.(Ae, We), () => ({
                store: c(E),
                panZoom: c(E).panZoom,
                getViewScale: W,
                translateExtent: c(E).translateExtent,
                width: c(E).width,
                height: c(E).height,
                inversePan: k(),
                zoomStep: O(),
                pannable: w(),
                zoomable: b()
              })), Ne(() => {
                Oe(be, "width", m()), Oe(be, "height", y()), Oe(be, "viewBox", `${c(Y) ?? ""} ${c(ee) ?? ""} ${c(j) ?? ""} ${c(F) ?? ""}`), Oe(be, "aria-labelledby", c(_)), de = Pt(be, "", de, {
                  "--xy-minimap-mask-background-color-props": h(),
                  "--xy-minimap-mask-stroke-color-props": p(),
                  "--xy-minimap-mask-stroke-width-props": v() ? v() * c(B) : void 0
                }), Oe(Le, "d", `M${c(Y) - c(N)},${c(ee) - c(N)}h${c(j) + c(N) * 2}v${c(F) + c(N) * 2}h${-c(j) - c(N) * 2}z
      M${c(M).x ?? ""},${c(M).y ?? ""}h${c(M).width ?? ""}v${c(M).height ?? ""}h${-c(M).width}z`);
              }), T(ke, be);
            };
            se(ce, (ke) => {
              c(E).panZoom && ke(ve);
            });
          }
          T(fe, oe);
        },
        $$slots: { default: !0 }
      }
    )), Z(L);
  }
  return T(t, re), le(G);
}
ie(
  Nf,
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
var bx = /* @__PURE__ */ ne("<div><!></div>");
function zf(t, e) {
  ae(e, !0);
  let n = g(e, "nodeId", 7), r = g(e, "position", 23, () => _e.Top), o = g(e, "align", 7, "center"), i = g(e, "offset", 7, 10), s = g(e, "isVisible", 7), a = g(e, "children", 7), l = /* @__PURE__ */ De(e, [
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
  const u = Cn(), { getNodesBounds: d } = kt(), h = yn("svelteflow__node_id");
  let p = /* @__PURE__ */ $(() => (u.nodes, (Array.isArray(n()) ? n() : [n() ?? h]).reduce(
    (x, E) => {
      const V = u.nodeLookup.get(E);
      return V && x.push(V), x;
    },
    []
  ))), v = /* @__PURE__ */ $(() => {
    const x = d(c(p));
    return x ? Db(x, u.viewport, r(), i(), o()) : "";
  }), m = /* @__PURE__ */ $(() => c(p).length === 0 ? 1 : Math.max(...c(p).map((x) => (x.internals.z || 5) + 1))), y = /* @__PURE__ */ $(() => u.nodes.filter((x) => x.selected).length), w = /* @__PURE__ */ $(() => typeof s() == "boolean" ? s() : c(p).length === 1 && c(p)[0].selected && c(y) === 1);
  var b = {
    get nodeId() {
      return n();
    },
    set nodeId(x) {
      n(x), f();
    },
    get position() {
      return r();
    },
    set position(x = _e.Top) {
      r(x), f();
    },
    get align() {
      return o();
    },
    set align(x = "center") {
      o(x), f();
    },
    get offset() {
      return i();
    },
    set offset(x = 10) {
      i(x), f();
    },
    get isVisible() {
      return s();
    },
    set isVisible(x) {
      s(x), f();
    },
    get children() {
      return a();
    },
    set children(x) {
      a(x), f();
    }
  }, k = he(), O = J(k);
  {
    var C = (x) => {
      var E = bx();
      Ue(
        E,
        (H, I) => ({
          class: "svelte-flow__node-toolbar",
          "data-id": H,
          ...l,
          [Pn]: I
        }),
        [
          () => c(p).reduce((H, I) => `${H}${I.id} `, "").trim(),
          () => ({
            display: Fp().value ? "none" : void 0,
            position: "absolute",
            transform: c(v),
            "z-index": c(m)
          })
        ]
      );
      var V = X(E);
      Ee(V, () => a() ?? Re), Z(E), zt(E, (H, I) => Kp?.(H, I), () => "root"), T(x, E);
    };
    se(O, (x) => {
      u.domNode && c(w) && c(p) && x(C);
    });
  }
  return T(t, k), le(b);
}
ie(
  zf,
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
function dr(t) {
  const e = /* @__PURE__ */ $(Cn), n = /* @__PURE__ */ $(() => c(e).nodes), r = /* @__PURE__ */ $(() => c(e).nodeLookup);
  let o = [], i = !0;
  const s = /* @__PURE__ */ $(() => {
    c(n);
    const a = [], l = Array.isArray(t), u = l ? t : [t];
    for (const d of u) {
      const h = c(r).get(d)?.internals.userNode;
      h && a.push({ id: h.id, type: h.type, data: h.data });
    }
    return (!Xb(a, o) || i) && (o = a, i = !1), l ? o : o[0] ?? null;
  });
  return {
    get current() {
      return c(s);
    }
  };
}
const Yc = "tinyflow-component", xx = [
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
], kx = [
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
], vu = [
  { label: "文字", value: "text" },
  { label: "图片", value: "image" },
  { label: "视频", value: "video" },
  { label: "音频", value: "audio" },
  { label: "文件", value: "file" },
  { label: "其他", value: "other" }
], Cx = [
  { label: "单行输入框", value: "input" },
  { label: "多行输入框", value: "textarea" },
  { label: "下拉菜单", value: "select" },
  { label: "单选", value: "radio" },
  { label: "多选", value: "checkbox" }
], $x = [
  { label: "单选", value: "radio" },
  { label: "多选", value: "checkbox" }
];
class Sx {
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
    const e = document.createElement(Yc);
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
    const n = document.createElement(Yc);
    n.style.display = "block", n.style.width = "100%", n.style.height = "100%", n.classList.add("tf-theme-light"), n.options = this.options, n.onInit = (r) => {
      this.svelteFlowInstance = r;
    }, this.destroy(), this.rootEl.appendChild(n);
  }
  destroy() {
    for (; this.rootEl.firstChild; )
      this.rootEl.removeChild(this.rootEl.firstChild);
  }
}
const _x = () => {
  let t = /* @__PURE__ */ me([]), e = /* @__PURE__ */ me([]), n = /* @__PURE__ */ me({ x: 250, y: 100, zoom: 1 });
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
}, Fe = _x(), Ox = (t, e) => {
  const n = new Array(t.length + e.length);
  for (let r = 0; r < t.length; r++)
    n[r] = t[r];
  for (let r = 0; r < e.length; r++)
    n[t.length + r] = e[r];
  return n;
}, Px = (t, e) => ({
  classGroupId: t,
  validator: e
}), Mf = (t = /* @__PURE__ */ new Map(), e = null, n) => ({
  nextPart: t,
  validators: e,
  classGroupId: n
}), Ps = "-", Uc = [], Ex = "arbitrary..", Nx = (t) => {
  const e = Mx(t), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = t;
  return {
    getClassGroupId: (o) => {
      if (o.startsWith("[") && o.endsWith("]"))
        return zx(o);
      const i = o.split(Ps), s = i[0] === "" && i.length > 1 ? 1 : 0;
      return Tf(i, s, e);
    },
    getConflictingClassGroupIds: (o, i) => {
      if (i) {
        const s = r[o], a = n[o];
        return s ? a ? Ox(a, s) : s : a || Uc;
      }
      return n[o] || Uc;
    }
  };
}, Tf = (t, e, n) => {
  if (t.length - e === 0)
    return n.classGroupId;
  const r = t[e], o = n.nextPart.get(r);
  if (o) {
    const l = Tf(t, e + 1, o);
    if (l) return l;
  }
  const i = n.validators;
  if (i === null)
    return;
  const s = e === 0 ? t.join(Ps) : t.slice(e).join(Ps), a = i.length;
  for (let l = 0; l < a; l++) {
    const u = i[l];
    if (u.validator(s))
      return u.classGroupId;
  }
}, zx = (t) => t.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const e = t.slice(1, -1), n = e.indexOf(":"), r = e.slice(0, n);
  return r ? Ex + r : void 0;
})(), Mx = (t) => {
  const {
    theme: e,
    classGroups: n
  } = t;
  return Tx(n, e);
}, Tx = (t, e) => {
  const n = Mf();
  for (const r in t) {
    const o = t[r];
    mu(o, n, r, e);
  }
  return n;
}, mu = (t, e, n, r) => {
  const o = t.length;
  for (let i = 0; i < o; i++) {
    const s = t[i];
    Ax(s, e, n, r);
  }
}, Ax = (t, e, n, r) => {
  if (typeof t == "string") {
    Dx(t, e, n);
    return;
  }
  if (typeof t == "function") {
    Vx(t, e, n, r);
    return;
  }
  Hx(t, e, n, r);
}, Dx = (t, e, n) => {
  const r = t === "" ? e : Af(e, t);
  r.classGroupId = n;
}, Vx = (t, e, n, r) => {
  if (Lx(t)) {
    mu(t(r), e, n, r);
    return;
  }
  e.validators === null && (e.validators = []), e.validators.push(Px(n, t));
}, Hx = (t, e, n, r) => {
  const o = Object.entries(t), i = o.length;
  for (let s = 0; s < i; s++) {
    const [a, l] = o[s];
    mu(l, Af(e, a), n, r);
  }
}, Af = (t, e) => {
  let n = t;
  const r = e.split(Ps), o = r.length;
  for (let i = 0; i < o; i++) {
    const s = r[i];
    let a = n.nextPart.get(s);
    a || (a = Mf(), n.nextPart.set(s, a)), n = a;
  }
  return n;
}, Lx = (t) => "isThemeGetter" in t && t.isThemeGetter === !0, Ix = (t) => {
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
}, ol = "!", Gc = ":", Rx = [], Jc = (t, e, n, r, o) => ({
  modifiers: t,
  hasImportantModifier: e,
  baseClassName: n,
  maybePostfixModifierPosition: r,
  isExternal: o
}), Bx = (t) => {
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
        if (w === Gc) {
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
    let p = h, v = !1;
    h.endsWith(ol) ? (p = h.slice(0, -1), v = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      h.startsWith(ol) && (p = h.slice(1), v = !0)
    );
    const m = u && u > l ? u - l : void 0;
    return Jc(i, v, p, m);
  };
  if (e) {
    const o = e + Gc, i = r;
    r = (s) => s.startsWith(o) ? i(s.slice(o.length)) : Jc(Rx, !1, s, void 0, !0);
  }
  if (n) {
    const o = r;
    r = (i) => n({
      className: i,
      parseClassName: o
    });
  }
  return r;
}, jx = (t) => {
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
}, Kx = (t) => ({
  cache: Ix(t.cacheSize),
  parseClassName: Bx(t),
  sortModifiers: jx(t),
  ...Nx(t)
}), Fx = /\s+/, Zx = (t, e) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o,
    sortModifiers: i
  } = e, s = [], a = t.trim().split(Fx);
  let l = "";
  for (let u = a.length - 1; u >= 0; u -= 1) {
    const d = a[u], {
      isExternal: h,
      modifiers: p,
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
    const k = p.length === 0 ? "" : p.length === 1 ? p[0] : i(p).join(":"), O = v ? k + ol : k, C = O + b;
    if (s.indexOf(C) > -1)
      continue;
    s.push(C);
    const x = o(b, w);
    for (let E = 0; E < x.length; ++E) {
      const V = x[E];
      s.push(O + V);
    }
    l = d + (l.length > 0 ? " " + l : l);
  }
  return l;
}, Wx = (...t) => {
  let e = 0, n, r, o = "";
  for (; e < t.length; )
    (n = t[e++]) && (r = Df(n)) && (o && (o += " "), o += r);
  return o;
}, Df = (t) => {
  if (typeof t == "string")
    return t;
  let e, n = "";
  for (let r = 0; r < t.length; r++)
    t[r] && (e = Df(t[r])) && (n && (n += " "), n += e);
  return n;
}, il = (t, ...e) => {
  let n, r, o, i;
  const s = (l) => {
    const u = e.reduce((d, h) => h(d), t());
    return n = Kx(u), r = n.cache.get, o = n.cache.set, i = a, a(l);
  }, a = (l) => {
    const u = r(l);
    if (u)
      return u;
    const d = Zx(l, n);
    return o(l, d), d;
  };
  return i = s, (...l) => i(Wx(...l));
}, Xx = [], bt = (t) => {
  const e = (n) => n[t] || Xx;
  return e.isThemeGetter = !0, e;
}, Vf = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Hf = /^\((?:(\w[\w-]*):)?(.+)\)$/i, qx = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, Yx = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Ux = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Gx = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Jx = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Qx = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, pr = (t) => qx.test(t), Ve = (t) => !!t && !Number.isNaN(Number(t)), fr = (t) => !!t && Number.isInteger(Number(t)), Ta = (t) => t.endsWith("%") && Ve(t.slice(0, -1)), Kn = (t) => Yx.test(t), Lf = () => !0, e7 = (t) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Ux.test(t) && !Gx.test(t)
), yu = () => !1, t7 = (t) => Jx.test(t), n7 = (t) => Qx.test(t), r7 = (t) => !we(t) && !xe(t), o7 = (t) => Nr(t, Bf, yu), we = (t) => Vf.test(t), Tr = (t) => Nr(t, jf, e7), Qc = (t) => Nr(t, h7, Ve), i7 = (t) => Nr(t, Ff, Lf), s7 = (t) => Nr(t, Kf, yu), ed = (t) => Nr(t, If, yu), a7 = (t) => Nr(t, Rf, n7), Bi = (t) => Nr(t, Zf, t7), xe = (t) => Hf.test(t), Vo = (t) => ro(t, jf), l7 = (t) => ro(t, Kf), td = (t) => ro(t, If), u7 = (t) => ro(t, Bf), c7 = (t) => ro(t, Rf), ji = (t) => ro(t, Zf, !0), d7 = (t) => ro(t, Ff, !0), Nr = (t, e, n) => {
  const r = Vf.exec(t);
  return r ? r[1] ? e(r[1]) : n(r[2]) : !1;
}, ro = (t, e, n = !1) => {
  const r = Hf.exec(t);
  return r ? r[1] ? e(r[1]) : n : !1;
}, If = (t) => t === "position" || t === "percentage", Rf = (t) => t === "image" || t === "url", Bf = (t) => t === "length" || t === "size" || t === "bg-size", jf = (t) => t === "length", h7 = (t) => t === "number", Kf = (t) => t === "family-name", Ff = (t) => t === "number" || t === "weight", Zf = (t) => t === "shadow", sl = () => {
  const t = bt("color"), e = bt("font"), n = bt("text"), r = bt("font-weight"), o = bt("tracking"), i = bt("leading"), s = bt("breakpoint"), a = bt("container"), l = bt("spacing"), u = bt("radius"), d = bt("shadow"), h = bt("inset-shadow"), p = bt("text-shadow"), v = bt("drop-shadow"), m = bt("blur"), y = bt("perspective"), w = bt("aspect"), b = bt("ease"), k = bt("animate"), O = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], C = () => [
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
  ], x = () => [...C(), xe, we], E = () => ["auto", "hidden", "clip", "visible", "scroll"], V = () => ["auto", "contain", "none"], H = () => [xe, we, l], I = () => [pr, "full", "auto", ...H()], A = () => [fr, "none", "subgrid", xe, we], D = () => ["auto", {
    span: ["full", fr, xe, we]
  }, fr, xe, we], _ = () => [fr, "auto", xe, we], M = () => ["auto", "min", "max", "fr", xe, we], S = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], P = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], z = () => ["auto", ...H()], B = () => [pr, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...H()], q = () => [pr, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...H()], U = () => [pr, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...H()], N = () => [t, xe, we], Y = () => [...C(), td, ed, {
    position: [xe, we]
  }], ee = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], j = () => ["auto", "cover", "contain", u7, o7, {
    size: [xe, we]
  }], F = () => [Ta, Vo, Tr], W = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    u,
    xe,
    we
  ], G = () => ["", Ve, Vo, Tr], re = () => ["solid", "dashed", "dotted", "double"], L = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], te = () => [Ve, Ta, td, ed], fe = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    m,
    xe,
    we
  ], ue = () => ["none", Ve, xe, we], oe = () => ["none", Ve, xe, we], ce = () => [Ve, xe, we], ve = () => [pr, "full", ...H()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Kn],
      breakpoint: [Kn],
      color: [Lf],
      container: [Kn],
      "drop-shadow": [Kn],
      ease: ["in", "out", "in-out"],
      font: [r7],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [Kn],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [Kn],
      shadow: [Kn],
      spacing: ["px", Ve],
      text: [Kn],
      "text-shadow": [Kn],
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
        aspect: ["auto", "square", pr, we, xe, w]
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
        columns: [Ve, we, xe, a]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": O()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": O()
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
        object: x()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: E()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": E()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": E()
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
        inset: I()
      }],
      /**
       * Inset Inline
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": I()
      }],
      /**
       * Inset Block
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": I()
      }],
      /**
       * Inset Inline Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-s` in next major release
       */
      start: [{
        "inset-s": I(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-s-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        start: I()
      }],
      /**
       * Inset Inline End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-e` in next major release
       */
      end: [{
        "inset-e": I(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-e-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        end: I()
      }],
      /**
       * Inset Block Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-bs": [{
        "inset-bs": I()
      }],
      /**
       * Inset Block End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-be": [{
        "inset-be": I()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: I()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: I()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: I()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: I()
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
        z: [fr, "auto", xe, we]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [pr, "full", "auto", a, ...H()]
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
        flex: [Ve, pr, "auto", "initial", "none", we]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", Ve, xe, we]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", Ve, xe, we]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [fr, "first", "last", "none", xe, we]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": A()
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
        "grid-rows": A()
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
        "auto-cols": M()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": M()
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
        justify: [...S(), "normal"]
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
        content: ["normal", ...S()]
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
        "place-content": S()
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
        m: z()
      }],
      /**
       * Margin Inline
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: z()
      }],
      /**
       * Margin Block
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: z()
      }],
      /**
       * Margin Inline Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: z()
      }],
      /**
       * Margin Inline End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: z()
      }],
      /**
       * Margin Block Start
       * @see https://tailwindcss.com/docs/margin
       */
      mbs: [{
        mbs: z()
      }],
      /**
       * Margin Block End
       * @see https://tailwindcss.com/docs/margin
       */
      mbe: [{
        mbe: z()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: z()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: z()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: z()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: z()
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
        size: B()
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
        block: ["auto", ...U()]
      }],
      /**
       * Min-Block Size
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-block-size": [{
        "min-block": ["auto", ...U()]
      }],
      /**
       * Max-Block Size
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-block-size": [{
        "max-block": ["none", ...U()]
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [a, "screen", ...B()]
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
          ...B()
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
          ...B()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...B()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...B()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...B()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", n, Vo, Tr]
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
        font: [r, d7, i7]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Ta, we]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [l7, s7, e]
      }],
      /**
       * Font Feature Settings
       * @see https://tailwindcss.com/docs/font-feature-settings
       */
      "font-features": [{
        "font-features": [we]
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
        tracking: [o, xe, we]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [Ve, "none", xe, Qc]
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
        "list-image": ["none", xe, we]
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
        list: ["disc", "decimal", "none", xe, we]
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
        placeholder: N()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: N()
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
        decoration: [...re(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [Ve, "from-font", "auto", xe, Tr]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: N()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [Ve, "auto", xe, we]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", xe, we]
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
        content: ["none", xe, we]
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
        bg: Y()
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
        bg: j()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, fr, xe, we],
          radial: ["", xe, we],
          conic: [fr, xe, we]
        }, c7, a7]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: N()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: F()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: F()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: F()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: N()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: N()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: N()
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
        border: G()
      }],
      /**
       * Border Width Inline
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": G()
      }],
      /**
       * Border Width Block
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": G()
      }],
      /**
       * Border Width Inline Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": G()
      }],
      /**
       * Border Width Inline End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": G()
      }],
      /**
       * Border Width Block Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-bs": [{
        "border-bs": G()
      }],
      /**
       * Border Width Block End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-be": [{
        "border-be": G()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": G()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": G()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": G()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": G()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": G()
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
        "divide-y": G()
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
        border: [...re(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...re(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: N()
      }],
      /**
       * Border Color Inline
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": N()
      }],
      /**
       * Border Color Block
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": N()
      }],
      /**
       * Border Color Inline Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": N()
      }],
      /**
       * Border Color Inline End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": N()
      }],
      /**
       * Border Color Block Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-bs": [{
        "border-bs": N()
      }],
      /**
       * Border Color Block End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-be": [{
        "border-be": N()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": N()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": N()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": N()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": N()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: N()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...re(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Ve, xe, we]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", Ve, Vo, Tr]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: N()
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
          ji,
          Bi
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: N()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", h, ji, Bi]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": N()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: G()
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
        ring: N()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [Ve, Tr]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": N()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": G()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": N()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", p, ji, Bi]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": N()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [Ve, xe, we]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...L(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": L()
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
        "mask-linear": [Ve]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": te()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": te()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": N()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": N()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": te()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": te()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": N()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": N()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": te()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": te()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": N()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": N()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": te()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": te()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": N()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": N()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": te()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": te()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": N()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": N()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": te()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": te()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": N()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": N()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": te()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": te()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": N()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": N()
      }],
      "mask-image-radial": [{
        "mask-radial": [xe, we]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": te()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": te()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": N()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": N()
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
        "mask-conic": [Ve]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": te()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": te()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": N()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": N()
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
        mask: Y()
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
        mask: j()
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
        mask: ["none", xe, we]
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
          xe,
          we
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: fe()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [Ve, xe, we]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [Ve, xe, we]
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
          ji,
          Bi
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": N()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", Ve, xe, we]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [Ve, xe, we]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", Ve, xe, we]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [Ve, xe, we]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", Ve, xe, we]
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
          xe,
          we
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": fe()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [Ve, xe, we]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [Ve, xe, we]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", Ve, xe, we]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [Ve, xe, we]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", Ve, xe, we]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [Ve, xe, we]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [Ve, xe, we]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", Ve, xe, we]
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", xe, we]
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
        duration: [Ve, "initial", xe, we]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", b, xe, we]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [Ve, xe, we]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", k, xe, we]
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
        perspective: [y, xe, we]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": x()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: ue()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": ue()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": ue()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": ue()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: oe()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": oe()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": oe()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": oe()
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
        skew: ce()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": ce()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": ce()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [xe, we, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: x()
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
        translate: ve()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": ve()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": ve()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": ve()
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
        accent: N()
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
        caret: N()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", xe, we]
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
        "will-change": ["auto", "scroll", "contents", "transform", xe, we]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...N()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [Ve, Vo, Tr, Qc]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...N()]
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
}, p7 = (t, {
  cacheSize: e,
  prefix: n,
  experimentalParseClassName: r,
  extend: o = {},
  override: i = {}
}) => (Ko(t, "cacheSize", e), Ko(t, "prefix", n), Ko(t, "experimentalParseClassName", r), Ki(t.theme, i.theme), Ki(t.classGroups, i.classGroups), Ki(t.conflictingClassGroups, i.conflictingClassGroups), Ki(t.conflictingClassGroupModifiers, i.conflictingClassGroupModifiers), Ko(t, "orderSensitiveModifiers", i.orderSensitiveModifiers), Fi(t.theme, o.theme), Fi(t.classGroups, o.classGroups), Fi(t.conflictingClassGroups, o.conflictingClassGroups), Fi(t.conflictingClassGroupModifiers, o.conflictingClassGroupModifiers), Wf(t, o, "orderSensitiveModifiers"), t), Ko = (t, e, n) => {
  n !== void 0 && (t[e] = n);
}, Ki = (t, e) => {
  if (e)
    for (const n in e)
      Ko(t, n, e[n]);
}, Fi = (t, e) => {
  if (e)
    for (const n in e)
      Wf(t, e, n);
}, Wf = (t, e, n) => {
  const r = e[n];
  r !== void 0 && (t[n] = t[n] ? t[n].concat(r) : r);
}, f7 = (t, ...e) => typeof t == "function" ? il(sl, t, ...e) : il(() => p7(sl(), t), ...e), Xf = /* @__PURE__ */ il(sl);
function gn(...t) {
  return Xf(Xo(t));
}
var g7 = /\s+/g, v7 = (t) => typeof t != "string" || !t ? t : t.replace(g7, " ").trim(), Es = (...t) => {
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
  return e.length > 0 ? v7(e.join(" ")) : void 0;
}, nd = (t) => t === !1 ? "false" : t === !0 ? "true" : t === 0 ? "0" : t, Rt = (t) => {
  if (!t || typeof t != "object") return !0;
  for (const e in t) return !1;
  return !0;
}, m7 = (t, e) => {
  if (t === e) return !0;
  if (!t || !e) return !1;
  const n = Object.keys(t), r = Object.keys(e);
  if (n.length !== r.length) return !1;
  for (let o = 0; o < n.length; o++) {
    const i = n[o];
    if (!r.includes(i) || t[i] !== e[i]) return !1;
  }
  return !0;
}, y7 = (t, e) => {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      const r = e[n];
      n in t ? t[n] = Es(t[n], r) : t[n] = r;
    }
  return t;
}, qf = (t, e) => {
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    Array.isArray(r) ? qf(r, e) : r && e.push(r);
  }
}, Yf = (...t) => {
  const e = [];
  qf(t, e);
  const n = [];
  for (let r = 0; r < e.length; r++)
    e[r] && n.push(e[r]);
  return n;
}, al = (t, e) => {
  const n = {};
  for (const r in t) {
    const o = t[r];
    if (r in e) {
      const i = e[r];
      Array.isArray(o) || Array.isArray(i) ? n[r] = Yf(i, o) : typeof o == "object" && typeof i == "object" && o && i ? n[r] = al(o, i) : n[r] = i + " " + o;
    } else
      n[r] = o;
  }
  for (const r in e)
    r in t || (n[r] = e[r]);
  return n;
}, w7 = {
  twMerge: !0,
  twMergeConfig: {}
};
function b7() {
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
var Zn = b7(), x7 = (t) => {
  const e = (n, r) => {
    const {
      extend: o = null,
      slots: i = {},
      variants: s = {},
      compoundVariants: a = [],
      compoundSlots: l = [],
      defaultVariants: u = {}
    } = n, d = { ...w7, ...r }, h = o?.base ? Es(o.base, n?.base) : n?.base, p = o?.variants && !Rt(o.variants) ? al(s, o.variants) : s, v = o?.defaultVariants && !Rt(o.defaultVariants) ? { ...o.defaultVariants, ...u } : u;
    !Rt(d.twMergeConfig) && !m7(d.twMergeConfig, Zn.cachedTwMergeConfig) && (Zn.didTwMergeConfigChange = !0, Zn.cachedTwMergeConfig = d.twMergeConfig);
    const m = Rt(o?.slots), y = Rt(i) ? {} : {
      // add "base" to the slots object
      base: Es(n?.base, m && o?.base),
      ...i
    }, w = m ? y : y7(
      { ...o?.slots },
      Rt(y) ? { base: n?.base } : y
    ), b = Rt(o?.compoundVariants) ? a : Yf(o?.compoundVariants, a), k = (C) => {
      if (Rt(p) && Rt(i) && m)
        return t(h, C?.class, C?.className)(d);
      if (b && !Array.isArray(b))
        throw new TypeError(
          `The "compoundVariants" prop must be an array. Received: ${typeof b}`
        );
      if (l && !Array.isArray(l))
        throw new TypeError(
          `The "compoundSlots" prop must be an array. Received: ${typeof l}`
        );
      const x = (M, S = p, P = null, z = null) => {
        const B = S[M];
        if (!B || Rt(B))
          return null;
        const q = z?.[M] ?? C?.[M];
        if (q === null) return null;
        const U = nd(q);
        if (typeof U == "object")
          return null;
        const N = v?.[M], Y = U ?? nd(N);
        return B[Y || "false"];
      }, E = () => {
        if (!p) return null;
        const M = Object.keys(p), S = [];
        for (let P = 0; P < M.length; P++) {
          const z = x(M[P], p);
          z && S.push(z);
        }
        return S;
      }, V = (M, S) => {
        if (!p || typeof p != "object") return null;
        const P = [];
        for (const z in p) {
          const B = x(z, p, M, S), q = M === "base" && typeof B == "string" ? B : B && B[M];
          q && P.push(q);
        }
        return P;
      }, H = {};
      for (const M in C) {
        const S = C[M];
        S !== void 0 && (H[M] = S);
      }
      const I = (M, S) => {
        const P = typeof C?.[M] == "object" ? {
          [M]: C[M]?.initial
        } : {};
        return {
          ...v,
          ...H,
          ...P,
          ...S
        };
      }, A = (M = [], S) => {
        const P = [], z = M.length;
        for (let B = 0; B < z; B++) {
          const { class: q, className: U, ...N } = M[B];
          let Y = !0;
          const ee = I(null, S);
          for (const j in N) {
            const F = N[j], W = ee[j];
            if (Array.isArray(F)) {
              if (!F.includes(W)) {
                Y = !1;
                break;
              }
            } else {
              if ((F == null || F === !1) && (W == null || W === !1))
                continue;
              if (W !== F) {
                Y = !1;
                break;
              }
            }
          }
          Y && (q && P.push(q), U && P.push(U));
        }
        return P;
      }, D = (M) => {
        const S = A(b, M);
        if (!Array.isArray(S)) return S;
        const P = {}, z = t;
        for (let B = 0; B < S.length; B++) {
          const q = S[B];
          if (typeof q == "string")
            P.base = z(P.base, q)(d);
          else if (typeof q == "object")
            for (const U in q)
              P[U] = z(P[U], q[U])(d);
        }
        return P;
      }, _ = (M) => {
        if (l.length < 1) return null;
        const S = {}, P = I(null, M);
        for (let z = 0; z < l.length; z++) {
          const {
            slots: B = [],
            class: q,
            className: U,
            ...N
          } = l[z];
          if (!Rt(N)) {
            let Y = !0;
            for (const ee in N) {
              const j = P[ee], F = N[ee];
              if (j === void 0 || (Array.isArray(F) ? !F.includes(j) : F !== j)) {
                Y = !1;
                break;
              }
            }
            if (!Y) continue;
          }
          for (let Y = 0; Y < B.length; Y++) {
            const ee = B[Y];
            S[ee] || (S[ee] = []), S[ee].push([q, U]);
          }
        }
        return S;
      };
      if (!Rt(i) || !m) {
        const M = {};
        if (typeof w == "object" && !Rt(w)) {
          const S = t;
          for (const P in w)
            M[P] = (z) => {
              const B = D(z), q = _(z);
              return S(
                w[P],
                V(P, z),
                B ? B[P] : void 0,
                q ? q[P] : void 0,
                z?.class,
                z?.className
              )(d);
            };
        }
        return M;
      }
      return t(
        h,
        E(),
        A(b),
        C?.class,
        C?.className
      )(d);
    }, O = () => {
      if (!(!p || typeof p != "object"))
        return Object.keys(p);
    };
    return k.variantKeys = O(), k.extend = o, k.base = h, k.slots = w, k.variants = p, k.defaultVariants = v, k.compoundSlots = l, k.compoundVariants = b, k;
  };
  return {
    tv: e,
    createTV: (n) => (r, o) => e(r, o ? al(n, o) : n)
  };
}, k7 = (t) => Rt(t) ? Xf : f7({
  ...t,
  extend: {
    theme: t.theme,
    classGroups: t.classGroups,
    conflictingClassGroupModifiers: t.conflictingClassGroupModifiers,
    conflictingClassGroups: t.conflictingClassGroups,
    ...t.extend
  }
}), C7 = (t, e) => {
  const n = Es(t);
  return !n || !(e?.twMerge ?? !0) ? n : ((!Zn.cachedTwMerge || Zn.didTwMergeConfigChange) && (Zn.didTwMergeConfigChange = !1, Zn.cachedTwMerge = k7(Zn.cachedTwMergeConfig)), Zn.cachedTwMerge(n) || void 0);
}, $7 = (...t) => (e) => C7(t, e), { tv: S7 } = x7($7);
const rd = S7({
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
var _7 = /* @__PURE__ */ ne("<a><!></a>"), O7 = /* @__PURE__ */ ne("<button><!></button>");
function Ze(t, e) {
  ae(e, !0);
  let n = g(e, "class", 7), r = g(e, "variant", 7, "outline"), o = g(e, "size", 7, "default"), i = g(e, "ref", 15, null), s = g(e, "href", 23, () => {
  }), a = g(e, "type", 7, "button"), l = g(e, "disabled", 7), u = g(e, "children", 7), d = g(e, "primary", 7), h = /* @__PURE__ */ De(e, [
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
  var p = {
    get class() {
      return n();
    },
    set class(b) {
      n(b), f();
    },
    get variant() {
      return r();
    },
    set variant(b = "outline") {
      r(b), f();
    },
    get size() {
      return o();
    },
    set size(b = "default") {
      o(b), f();
    },
    get ref() {
      return i();
    },
    set ref(b = null) {
      i(b), f();
    },
    get href() {
      return s();
    },
    set href(b = void 0) {
      s(b), f();
    },
    get type() {
      return a();
    },
    set type(b = "button") {
      a(b), f();
    },
    get disabled() {
      return l();
    },
    set disabled(b) {
      l(b), f();
    },
    get children() {
      return u();
    },
    set children(b) {
      u(b), f();
    },
    get primary() {
      return d();
    },
    set primary(b) {
      d(b), f();
    }
  }, v = he(), m = J(v);
  {
    var y = (b) => {
      var k = _7();
      Ue(
        k,
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
          () => gn(rd({ variant: r(), size: o() }), n())
        ]
      );
      var O = X(k);
      Ee(O, () => u() ?? Re), Z(k), Et(k, (C) => i(C), () => i()), T(b, k);
    }, w = (b) => {
      var k = O7();
      Ue(
        k,
        (C) => ({
          "data-slot": "button",
          class: C,
          type: a(),
          disabled: l(),
          ...h
        }),
        [
          () => gn(rd({ variant: r(), size: o() }), n())
        ]
      );
      var O = X(k);
      Ee(O, () => u() ?? Re), Z(k), Et(k, (C) => i(C), () => i()), T(b, k);
    };
    se(m, (b) => {
      s() ? b(y) : b(w, !1);
    });
  }
  return T(t, v), le(p);
}
ie(
  Ze,
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
function P7(t) {
  return typeof t == "function";
}
function _i(t) {
  return t !== null && typeof t == "object";
}
const E7 = ["string", "number", "bigint", "boolean"];
function ll(t) {
  return t == null || E7.includes(typeof t) ? !0 : Array.isArray(t) ? t.every((e) => ll(e)) : typeof t == "object" ? Object.getPrototypeOf(t) === Object.prototype : !1;
}
const Ns = Symbol("box"), Uf = Symbol("is-writable");
function pe(t, e) {
  const n = /* @__PURE__ */ $(t);
  return e ? {
    [Ns]: !0,
    [Uf]: !0,
    get current() {
      return c(n);
    },
    set current(r) {
      e(r);
    }
  } : {
    [Ns]: !0,
    get current() {
      return t();
    }
  };
}
function Gf(t) {
  return _i(t) && Ns in t;
}
function N7(t) {
  return Gf(t) ? t : P7(t) ? pe(t) : Nn(t);
}
function Nn(t) {
  let e = /* @__PURE__ */ me(pt(t));
  return {
    [Ns]: !0,
    [Uf]: !0,
    get current() {
      return c(e);
    },
    set current(n) {
      K(e, n, !0);
    }
  };
}
function Jf(...t) {
  return function(e) {
    for (const n of t)
      if (n) {
        if (e.defaultPrevented)
          return;
        typeof n == "function" ? n.call(this, e) : n.current?.call(this, e);
      }
  };
}
var od = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, z7 = /\n/g, M7 = /^\s*/, T7 = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, A7 = /^:\s*/, D7 = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, V7 = /^[;\s]*/, H7 = /^\s+|\s+$/g, L7 = `
`, id = "/", sd = "*", Dr = "", I7 = "comment", R7 = "declaration";
function B7(t, e) {
  if (typeof t != "string")
    throw new TypeError("First argument must be a string");
  if (!t) return [];
  e = e || {};
  var n = 1, r = 1;
  function o(m) {
    var y = m.match(z7);
    y && (n += y.length);
    var w = m.lastIndexOf(L7);
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
    l(M7);
  }
  function d(m) {
    var y;
    for (m = m || []; y = h(); )
      y !== !1 && m.push(y);
    return m;
  }
  function h() {
    var m = i();
    if (!(id != t.charAt(0) || sd != t.charAt(1))) {
      for (var y = 2; Dr != t.charAt(y) && (sd != t.charAt(y) || id != t.charAt(y + 1)); )
        ++y;
      if (y += 2, Dr === t.charAt(y - 1))
        return a("End of comment missing");
      var w = t.slice(2, y - 2);
      return r += 2, o(w), t = t.slice(y), r += 2, m({
        type: I7,
        comment: w
      });
    }
  }
  function p() {
    var m = i(), y = l(T7);
    if (y) {
      if (h(), !l(A7)) return a("property missing ':'");
      var w = l(D7), b = m({
        type: R7,
        property: ad(y[0].replace(od, Dr)),
        value: w ? ad(w[0].replace(od, Dr)) : Dr
      });
      return l(V7), b;
    }
  }
  function v() {
    var m = [];
    d(m);
    for (var y; y = p(); )
      y !== !1 && (m.push(y), d(m));
    return m;
  }
  return u(), v();
}
function ad(t) {
  return t ? t.replace(H7, Dr) : Dr;
}
function j7(t, e) {
  let n = null;
  if (!t || typeof t != "string")
    return n;
  const r = B7(t), o = typeof e == "function";
  return r.forEach((i) => {
    if (i.type !== "declaration")
      return;
    const { property: s, value: a } = i;
    o ? e(s, a, i) : a && (n = n || {}, n[s] = a);
  }), n;
}
const K7 = /\d/, F7 = ["-", "_", "/", "."];
function Z7(t = "") {
  if (!K7.test(t))
    return t !== t.toLowerCase();
}
function W7(t) {
  const e = [];
  let n = "", r, o;
  for (const i of t) {
    const s = F7.includes(i);
    if (s === !0) {
      e.push(n), n = "", r = void 0;
      continue;
    }
    const a = Z7(i);
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
function Qf(t) {
  return t ? W7(t).map((e) => q7(e)).join("") : "";
}
function X7(t) {
  return Y7(Qf(t || ""));
}
function q7(t) {
  return t ? t[0].toUpperCase() + t.slice(1) : "";
}
function Y7(t) {
  return t ? t[0].toLowerCase() + t.slice(1) : "";
}
function Fo(t) {
  if (!t)
    return {};
  const e = {};
  function n(r, o) {
    if (r.startsWith("-moz-") || r.startsWith("-webkit-") || r.startsWith("-ms-") || r.startsWith("-o-")) {
      e[Qf(r)] = o;
      return;
    }
    if (r.startsWith("--")) {
      e[r] = o;
      return;
    }
    e[X7(r)] = o;
  }
  return j7(t, n), e;
}
function Yo(...t) {
  return (...e) => {
    for (const n of t)
      typeof n == "function" && n(...e);
  };
}
function U7(t, e) {
  const n = RegExp(t, "g");
  return (r) => {
    if (typeof r != "string")
      throw new TypeError(`expected an argument of type string, but got ${typeof r}`);
    return r.match(n) ? r.replace(n, e) : r;
  };
}
const G7 = U7(/[A-Z]/, (t) => `-${t.toLowerCase()}`);
function J7(t) {
  if (!t || typeof t != "object" || Array.isArray(t))
    throw new TypeError(`expected an argument of type object, but got ${typeof t}`);
  return Object.keys(t).map((e) => `${G7(e)}: ${t[e]};`).join(`
`);
}
function wu(t = {}) {
  return J7(t).replace(`
`, " ");
}
const Q7 = [
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
], e5 = new Set(Q7);
function t5(t) {
  return e5.has(t);
}
function An(...t) {
  const e = { ...t[0] };
  for (let n = 1; n < t.length; n++) {
    const r = t[n];
    if (r) {
      for (const o of Object.keys(r)) {
        const i = e[o], s = r[o], a = typeof i == "function", l = typeof s == "function";
        if (a && t5(o)) {
          const u = i, d = s;
          e[o] = Jf(u, d);
        } else if (a && l)
          e[o] = Yo(i, s);
        else if (o === "class") {
          const u = ll(i), d = ll(s);
          u && d ? e[o] = Xo(i, s) : u ? e[o] = Xo(i) : d && (e[o] = Xo(s));
        } else if (o === "style") {
          const u = typeof i == "object", d = typeof s == "object", h = typeof i == "string", p = typeof s == "string";
          if (u && d)
            e[o] = { ...i, ...s };
          else if (u && p) {
            const v = Fo(s);
            e[o] = { ...i, ...v };
          } else if (h && d) {
            const v = Fo(i);
            e[o] = { ...v, ...s };
          } else if (h && p) {
            const v = Fo(i), m = Fo(s);
            e[o] = { ...v, ...m };
          } else u ? e[o] = i : d ? e[o] = s : h ? e[o] = i : p && (e[o] = s);
        } else
          e[o] = s !== void 0 ? s : i;
      }
      for (const o of Object.getOwnPropertySymbols(r)) {
        const i = e[o], s = r[o];
        e[o] = s !== void 0 ? s : i;
      }
    }
  }
  return typeof e.style == "object" && (e.style = wu(e.style).replaceAll(`
`, " ")), e.hidden === !1 && (e.hidden = void 0, delete e.hidden), e.disabled === !1 && (e.disabled = void 0, delete e.disabled), e;
}
const n5 = {
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
}, r5 = wu(n5), eg = typeof window < "u" ? window : void 0;
function o5(t) {
  let e = t.activeElement;
  for (; e?.shadowRoot; ) {
    const n = e.shadowRoot.activeElement;
    if (n === e)
      break;
    e = n;
  }
  return e;
}
let i5 = class {
  #e;
  #t;
  constructor(t = {}) {
    const { window: e = eg, document: n = e?.document } = t;
    e !== void 0 && (this.#e = n, this.#t = Jr((r) => {
      const o = ft(e, "focusin", r), i = ft(e, "focusout", r);
      return () => {
        o(), i();
      };
    }));
  }
  get current() {
    return this.#t?.(), this.#e ? o5(this.#e) : null;
  }
};
new i5();
function s5(t) {
  return typeof t == "function";
}
class zr {
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
    return _m(this.#t);
  }
  /**
   * Retrieves the context that belongs to the closest parent component.
   *
   * Must be called during component initialisation.
   *
   * @throws An error if the context does not exist.
   */
  get() {
    const e = yn(this.#t);
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
    const n = yn(this.#t);
    return n === void 0 ? e : n;
  }
  /**
   * Associates the given value with the current component and returns it.
   *
   * Must be called during component initialisation.
   */
  set(e) {
    return Fr(this.#t, e);
  }
}
function a5(t, e) {
  switch (t) {
    case "post":
      He(e);
      break;
    case "pre":
      jt(e);
      break;
  }
}
function tg(t, e, n, r = {}) {
  const { lazy: o = !1 } = r;
  let i = !o, s = Array.isArray(t) ? [] : void 0;
  a5(e, () => {
    const a = Array.isArray(t) ? t.map((u) => u()) : t();
    if (!i) {
      i = !0, s = a;
      return;
    }
    const l = lt(() => n(a, s));
    return s = a, l;
  });
}
function wt(t, e, n) {
  tg(t, "post", e, n);
}
function l5(t, e, n) {
  tg(t, "pre", e, n);
}
wt.pre = l5;
function ld(t) {
  return s5(t) ? t() : t;
}
class u5 {
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
    const e = ld(this.#r);
    if (e)
      return Jr((n) => {
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
    this.#o = n.window ?? eg, this.#n = n, this.#r = e, this.#e = { width: 0, height: 0 };
  }
  calculateSize() {
    const e = ld(this.#r);
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
class c5 {
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
function No(t) {
  He(() => () => {
    t();
  });
}
function d5(t) {
  He(() => lt(() => t()));
}
function h5(t, e) {
  return setTimeout(e, t);
}
function Oi(t) {
  Eh().then(t);
}
const p5 = 1, f5 = 9, g5 = 11;
function ul(t) {
  return _i(t) && t.nodeType === p5 && typeof t.nodeName == "string";
}
function ng(t) {
  return _i(t) && t.nodeType === f5;
}
function v5(t) {
  return _i(t) && t.constructor?.name === "VisualViewport";
}
function m5(t) {
  return _i(t) && t.nodeType !== void 0;
}
function rg(t) {
  return m5(t) && t.nodeType === g5 && "host" in t;
}
function y5(t, e) {
  if (!t || !e || !ul(t) || !ul(e))
    return !1;
  const n = e.getRootNode?.();
  if (t === e || t.contains(e))
    return !0;
  if (n && rg(n)) {
    let r = e;
    for (; r; ) {
      if (t === r)
        return !0;
      r = r.parentNode || r.host;
    }
  }
  return !1;
}
function w5(t) {
  return ng(t) ? t : v5(t) ? t.document : t?.ownerDocument ?? document;
}
function og(t) {
  return rg(t) ? og(t.host) : ng(t) ? t.defaultView ?? window : ul(t) ? t.ownerDocument?.defaultView ?? window : window;
}
function b5(t) {
  let e = t.activeElement;
  for (; e?.shadowRoot; ) {
    const n = e.shadowRoot.activeElement;
    if (n === e)
      break;
    e = n;
  }
  return e;
}
class Pi {
  element;
  #e = /* @__PURE__ */ $(() => this.element.current ? this.element.current.getRootNode() ?? document : document);
  get root() {
    return c(this.#e);
  }
  set root(e) {
    K(this.#e, e);
  }
  constructor(e) {
    typeof e == "function" ? this.element = pe(e) : this.element = e;
  }
  getDocument = () => w5(this.root);
  getWindow = () => this.getDocument().defaultView ?? window;
  getActiveElement = () => b5(this.root);
  isActiveElement = (e) => e === this.getActiveElement();
  getElementById(e) {
    return this.root.getElementById(e);
  }
  querySelector = (e) => this.root ? this.root.querySelector(e) : null;
  querySelectorAll = (e) => this.root ? this.root.querySelectorAll(e) : [];
  setTimeout = (e, n) => this.getWindow().setTimeout(e, n);
  clearTimeout = (e) => this.getWindow().clearTimeout(e);
}
function xr(t, e) {
  return {
    [c1()]: (n) => Gf(t) ? (t.current = n, lt(() => e?.(n)), () => {
      "isConnected" in n && n.isConnected || (t.current = null, e?.(null));
    }) : (t(n), lt(() => e?.(n)), () => {
      "isConnected" in n && n.isConnected || (t(null), e?.(null));
    })
  };
}
function cl(t) {
  return t ? "true" : "false";
}
function zs(t) {
  return t ? "" : void 0;
}
function ud(t) {
  return t ? !0 : void 0;
}
function ig(t) {
  return t ? "open" : "closed";
}
function x5(t, e) {
  return e ? "mixed" : t ? "true" : "false";
}
class k5 {
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
function bu(t) {
  const e = new k5(t);
  return {
    ...e.attrs,
    selector: e.selector,
    getAttr: e.getAttr
  };
}
const Zo = "ArrowDown", ao = "ArrowUp", sg = "End", dl = "Enter", C5 = "Escape", ag = "Home", lg = "PageDown", ug = "PageUp", os = " ", cd = "Tab", cg = typeof document < "u", hl = $5();
function $5() {
  return cg && window?.navigator?.userAgent && (/iP(ad|hone|od)/.test(window.navigator.userAgent) || // The new iPad Pro Gen3 does not identify itself as iPad, but as Macintosh.
  window?.navigator?.maxTouchPoints > 2 && /iPad|Macintosh/.test(window?.navigator.userAgent));
}
function pl(t) {
  return t instanceof HTMLElement;
}
function S5(t) {
  return t instanceof Element || t instanceof SVGElement;
}
function _5(t) {
  return t !== null;
}
class O5 {
  #e;
  #t = null;
  constructor(e) {
    this.#e = e, No(() => this.#n());
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
    this.#e.afterTick ? Oi(n) : n();
  }
}
class P5 {
  #e;
  #t;
  #n;
  #r = /* @__PURE__ */ me(!1);
  constructor(e) {
    this.#e = e, K(this.#r, e.open.current, !0), this.#t = e.enabled ?? !0, this.#n = new O5({ ref: this.#e.ref, afterTick: this.#e.open }), wt(() => this.#e.open.current, (n) => {
      n && K(this.#r, !0), this.#t && this.#n.run(() => {
        n === this.#e.open.current && (this.#e.open.current || K(this.#r, !1), this.#e.onComplete?.());
      });
    });
  }
  get shouldRender() {
    return c(this.#r);
  }
}
function Be() {
}
function Hn(t, e) {
  return `bits-${t}`;
}
function dg(t, e) {
  ae(e, !0);
  const n = g(e, "children", 7);
  var r = {
    get children() {
      return n();
    },
    set children(s) {
      n(s), f();
    }
  }, o = he(), i = J(o);
  return d1(i, n, (s) => {
    var a = he(), l = J(a);
    Ee(l, () => n() ?? Re), T(s, a);
  }), T(t, o), le(r);
}
ie(dg, { children: {} }, [], [], !0);
const E5 = new zr("BitsConfig");
function N5() {
  const t = new z5(null, {});
  return E5.getOr(t).opts;
}
class z5 {
  opts;
  constructor(e, n) {
    const r = M5(e, n);
    this.opts = {
      defaultPortalTo: r((o) => o.defaultPortalTo),
      defaultLocale: r((o) => o.defaultLocale)
    };
  }
}
function M5(t, e) {
  return (n) => pe(() => {
    const r = n(e)?.current;
    if (r !== void 0)
      return r;
    if (t !== null)
      return n(t.opts)?.current;
  });
}
function T5(t, e) {
  return (n) => {
    const r = N5();
    return pe(() => {
      const o = n();
      if (o !== void 0)
        return o;
      const i = t(r).current;
      return i !== void 0 ? i : e;
    });
  };
}
const A5 = T5((t) => t.defaultPortalTo, "body");
function fl(t, e) {
  ae(e, !0);
  let n = g(e, "to", 7), r = g(e, "children", 7), o = g(e, "disabled", 7);
  const i = A5(() => n()), s = Om();
  let a = /* @__PURE__ */ $(l);
  function l() {
    if (!cg || o()) return null;
    let y = null;
    return typeof i.current == "string" ? y = document.querySelector(i.current) : y = i.current, y;
  }
  let u;
  function d() {
    u && (Ah(u), u = null);
  }
  wt([() => c(a), () => o()], ([y, w]) => {
    if (!y || w) {
      d();
      return;
    }
    return u = Ul(dg, { target: y, props: { children: r() }, context: s }), () => {
      d();
    };
  });
  var h = {
    get to() {
      return n();
    },
    set to(y) {
      n(y), f();
    },
    get children() {
      return r();
    },
    set children(y) {
      r(y), f();
    },
    get disabled() {
      return o();
    },
    set disabled(y) {
      o(y), f();
    }
  }, p = he(), v = J(p);
  {
    var m = (y) => {
      var w = he(), b = J(w);
      Ee(b, () => r() ?? Re), T(y, w);
    };
    se(v, (y) => {
      o() && y(m);
    });
  }
  return T(t, p), le(h);
}
ie(fl, { to: {}, children: {}, disabled: {} }, [], [], !0);
function dd(t, e = 500) {
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
function hg(t, e) {
  return t === e || t.contains(e);
}
function pg(t) {
  return t?.ownerDocument ?? document;
}
function D5(t, e) {
  const { clientX: n, clientY: r } = t, o = e.getBoundingClientRect();
  return n < o.left || n > o.right || r < o.top || r > o.bottom;
}
var fg = ["input:not([inert]):not([inert] *)", "select:not([inert]):not([inert] *)", "textarea:not([inert]):not([inert] *)", "a[href]:not([inert]):not([inert] *)", "button:not([inert]):not([inert] *)", "[tabindex]:not(slot):not([inert]):not([inert] *)", "audio[controls]:not([inert]):not([inert] *)", "video[controls]:not([inert]):not([inert] *)", '[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)', "details>summary:first-of-type:not([inert]):not([inert] *)", "details:not([inert]):not([inert] *)"], gl = /* @__PURE__ */ fg.join(","), gg = typeof Element > "u", $o = gg ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, Ms = !gg && Element.prototype.getRootNode ? function(t) {
  var e;
  return t == null || (e = t.getRootNode) === null || e === void 0 ? void 0 : e.call(t);
} : function(t) {
  return t?.ownerDocument;
}, Ts = function(t, e) {
  var n;
  e === void 0 && (e = !0);
  var r = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "inert"), o = r === "" || r === "true", i = o || e && t && // closest does not exist on shadow roots, so we fall back to a manual
  // lookup upward, in case it is not defined.
  (typeof t.closest == "function" ? t.closest("[inert]") : Ts(t.parentNode));
  return i;
}, V5 = function(t) {
  var e, n = t == null || (e = t.getAttribute) === null || e === void 0 ? void 0 : e.call(t, "contenteditable");
  return n === "" || n === "true";
}, vg = function(t, e, n) {
  if (Ts(t))
    return [];
  var r = Array.prototype.slice.apply(t.querySelectorAll(gl));
  return e && $o.call(t, gl) && r.unshift(t), r = r.filter(n), r;
}, As = function(t, e, n) {
  for (var r = [], o = Array.from(t); o.length; ) {
    var i = o.shift();
    if (!Ts(i, !1))
      if (i.tagName === "SLOT") {
        var s = i.assignedElements(), a = s.length ? s : i.children, l = As(a, !0, n);
        n.flatten ? r.push.apply(r, l) : r.push({
          scopeParent: i,
          candidates: l
        });
      } else {
        var u = $o.call(i, gl);
        u && n.filter(i) && (e || !t.includes(i)) && r.push(i);
        var d = i.shadowRoot || // check for an undisclosed shadow
        typeof n.getShadowRoot == "function" && n.getShadowRoot(i), h = !Ts(d, !1) && (!n.shadowRootFilter || n.shadowRootFilter(i));
        if (d && h) {
          var p = As(d === !0 ? i.children : d.children, !0, n);
          n.flatten ? r.push.apply(r, p) : r.push({
            scopeParent: i,
            candidates: p
          });
        } else
          o.unshift.apply(o, i.children);
      }
  }
  return r;
}, mg = function(t) {
  return !isNaN(parseInt(t.getAttribute("tabindex"), 10));
}, yg = function(t) {
  if (!t)
    throw new Error("No node provided");
  return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || V5(t)) && !mg(t) ? 0 : t.tabIndex;
}, H5 = function(t, e) {
  var n = yg(t);
  return n < 0 && e && !mg(t) ? 0 : n;
}, L5 = function(t, e) {
  return t.tabIndex === e.tabIndex ? t.documentOrder - e.documentOrder : t.tabIndex - e.tabIndex;
}, wg = function(t) {
  return t.tagName === "INPUT";
}, I5 = function(t) {
  return wg(t) && t.type === "hidden";
}, R5 = function(t) {
  var e = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(n) {
    return n.tagName === "SUMMARY";
  });
  return e;
}, B5 = function(t, e) {
  for (var n = 0; n < t.length; n++)
    if (t[n].checked && t[n].form === e)
      return t[n];
}, j5 = function(t) {
  if (!t.name)
    return !0;
  var e = t.form || Ms(t), n = function(i) {
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
  var o = B5(r, t.form);
  return !o || o === t;
}, K5 = function(t) {
  return wg(t) && t.type === "radio";
}, F5 = function(t) {
  return K5(t) && !j5(t);
}, Z5 = function(t) {
  var e, n = t && Ms(t), r = (e = n) === null || e === void 0 ? void 0 : e.host, o = !1;
  if (n && n !== t) {
    var i, s, a;
    for (o = !!((i = r) !== null && i !== void 0 && (s = i.ownerDocument) !== null && s !== void 0 && s.contains(r) || t != null && (a = t.ownerDocument) !== null && a !== void 0 && a.contains(t)); !o && r; ) {
      var l, u, d;
      n = Ms(r), r = (l = n) === null || l === void 0 ? void 0 : l.host, o = !!((u = r) !== null && u !== void 0 && (d = u.ownerDocument) !== null && d !== void 0 && d.contains(r));
    }
  }
  return o;
}, hd = function(t) {
  var e = t.getBoundingClientRect(), n = e.width, r = e.height;
  return n === 0 && r === 0;
}, W5 = function(t, e) {
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
  var i = $o.call(t, "details>summary:first-of-type"), s = i ? t.parentElement : t;
  if ($o.call(s, "details:not([open]) *"))
    return !0;
  if (!n || n === "full" || // full-native can run this branch when it falls through in case
  // Element#checkVisibility is unsupported
  n === "full-native" || n === "legacy-full") {
    if (typeof r == "function") {
      for (var a = t; t; ) {
        var l = t.parentElement, u = Ms(t);
        if (l && !l.shadowRoot && r(l) === !0)
          return hd(t);
        t.assignedSlot ? t = t.assignedSlot : !l && u !== t.ownerDocument ? t = u.host : t = l;
      }
      t = a;
    }
    if (Z5(t))
      return !t.getClientRects().length;
    if (n !== "legacy-full")
      return !0;
  } else if (n === "non-zero-area")
    return hd(t);
  return !1;
}, X5 = function(t) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
    for (var e = t.parentElement; e; ) {
      if (e.tagName === "FIELDSET" && e.disabled) {
        for (var n = 0; n < e.children.length; n++) {
          var r = e.children.item(n);
          if (r.tagName === "LEGEND")
            return $o.call(e, "fieldset[disabled] *") ? !0 : !r.contains(t);
        }
        return !0;
      }
      e = e.parentElement;
    }
  return !1;
}, Ds = function(t, e) {
  return !(e.disabled || I5(e) || W5(e, t) || // For a details element with a summary, the summary element gets the focus
  R5(e) || X5(e));
}, pd = function(t, e) {
  return !(F5(e) || yg(e) < 0 || !Ds(t, e));
}, q5 = function(t) {
  var e = parseInt(t.getAttribute("tabindex"), 10);
  return !!(isNaN(e) || e >= 0);
}, bg = function(t) {
  var e = [], n = [];
  return t.forEach(function(r, o) {
    var i = !!r.scopeParent, s = i ? r.scopeParent : r, a = H5(s, i), l = i ? bg(r.candidates) : s;
    a === 0 ? i ? e.push.apply(e, l) : e.push(s) : n.push({
      documentOrder: o,
      tabIndex: a,
      item: r,
      isScope: i,
      content: l
    });
  }), n.sort(L5).reduce(function(r, o) {
    return o.isScope ? r.push.apply(r, o.content) : r.push(o.content), r;
  }, []).concat(e);
}, Y5 = function(t, e) {
  e = e || {};
  var n;
  return e.getShadowRoot ? n = As([t], e.includeContainer, {
    filter: pd.bind(null, e),
    flatten: !1,
    getShadowRoot: e.getShadowRoot,
    shadowRootFilter: q5
  }) : n = vg(t, e.includeContainer, pd.bind(null, e)), bg(n);
}, U5 = function(t, e) {
  e = e || {};
  var n;
  return e.getShadowRoot ? n = As([t], e.includeContainer, {
    filter: Ds.bind(null, e),
    flatten: !0,
    getShadowRoot: e.getShadowRoot
  }) : n = vg(t, e.includeContainer, Ds.bind(null, e)), n;
}, G5 = /* @__PURE__ */ fg.concat("iframe:not([inert]):not([inert] *)").join(","), J5 = function(t, e) {
  if (e = e || {}, !t)
    throw new Error("No node provided");
  return $o.call(t, G5) === !1 ? !1 : Ds(e, t);
};
function Q5(t, e, n = !0) {
  if (!(t.length === 0 || e < 0 || e >= t.length))
    return t.length === 1 && e === 0 ? t[0] : e === t.length - 1 ? n ? t[0] : void 0 : t[e + 1];
}
function e3(t, e, n = !0) {
  if (!(t.length === 0 || e < 0 || e >= t.length))
    return t.length === 1 && e === 0 ? t[0] : e === 0 ? n ? t[t.length - 1] : void 0 : t[e - 1];
}
function t3(t, e, n, r = !0) {
  if (t.length === 0 || e < 0 || e >= t.length)
    return;
  let o = e + n;
  return r ? o = (o % t.length + t.length) % t.length : o = Math.max(0, Math.min(o, t.length - 1)), t[o];
}
function n3(t, e, n, r = !0) {
  if (t.length === 0 || e < 0 || e >= t.length)
    return;
  let o = e - n;
  return r ? o = (o % t.length + t.length) % t.length : o = Math.max(0, Math.min(o, t.length - 1)), t[o];
}
function xu(t, e, n) {
  const r = e.toLowerCase();
  if (r.endsWith(" ")) {
    const u = r.slice(0, -1);
    if (t.filter((p) => p.toLowerCase().startsWith(u)).length <= 1)
      return xu(t, u, n);
    const d = n?.toLowerCase();
    if (d && d.startsWith(u) && d.charAt(u.length) === " " && e.trim() === u)
      return n;
    const h = t.filter((p) => p.toLowerCase().startsWith(r));
    if (h.length > 0) {
      const p = n ? t.indexOf(n) : -1;
      return fd(h, Math.max(p, 0)).find((v) => v !== n) || n;
    }
  }
  const o = e.length > 1 && Array.from(e).every((u) => u === e[0]) ? e[0] : e, i = o.toLowerCase(), s = n ? t.indexOf(n) : -1;
  let a = fd(t, Math.max(s, 0));
  o.length === 1 && (a = a.filter((u) => u !== n));
  const l = a.find((u) => u?.toLowerCase().startsWith(i));
  return l !== n ? l : void 0;
}
function fd(t, e) {
  return t.map((n, r) => t[(e + r) % t.length]);
}
const r3 = { afterMs: 1e4, onChange: Be };
function xg(t, e) {
  const { afterMs: n, onChange: r, getWindow: o } = { ...r3, ...e };
  let i = null, s = /* @__PURE__ */ me(pt(t));
  function a() {
    return o().setTimeout(
      () => {
        K(s, t, !0), r?.(t);
      },
      n
    );
  }
  return He(() => () => {
    i && o().clearTimeout(i);
  }), pe(() => c(s), (l) => {
    K(s, l, !0), r?.(l), i && o().clearTimeout(i), i = a();
  });
}
class o3 {
  #e;
  #t;
  #n = /* @__PURE__ */ $(() => this.#e.onMatch ? this.#e.onMatch : (e) => e.focus());
  #r = /* @__PURE__ */ $(() => this.#e.getCurrentItem ? this.#e.getCurrentItem : this.#e.getActiveElement);
  constructor(e) {
    this.#e = e, this.#t = xg("", { afterMs: 1e3, getWindow: e.getWindow }), this.handleTypeaheadSearch = this.handleTypeaheadSearch.bind(this), this.resetTypeahead = this.resetTypeahead.bind(this);
  }
  handleTypeaheadSearch(e, n) {
    if (!n.length) return;
    this.#t.current = this.#t.current + e;
    const r = c(this.#r)(), o = n.find((l) => l === r)?.textContent?.trim() ?? "", i = n.map((l) => l.textContent?.trim() ?? ""), s = xu(i, this.#t.current, o), a = n.find((l) => l.textContent?.trim() === s);
    return a && c(this.#n)(a), a;
  }
  resetTypeahead() {
    this.#t.current = "";
  }
  get search() {
    return this.#t.current;
  }
}
const i3 = "data-context-menu-trigger", s3 = "data-context-menu-content";
bu({
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
  #s = Be;
  constructor(e) {
    this.opts = e, this.#t = e.interactOutsideBehavior, this.#e = e.onInteractOutside, this.#a = e.onFocusOutside, He(() => {
      this.#i = pg(this.opts.ref.current);
    });
    let n = Be;
    const r = () => {
      this.#v(), globalThis.bitsDismissableLayers.delete(this), this.#d.destroy(), n();
    };
    wt([() => this.opts.enabled.current, () => this.opts.ref.current], () => {
      if (!(!this.opts.enabled.current || !this.opts.ref.current))
        return h5(1, () => {
          this.opts.ref.current && (globalThis.bitsDismissableLayers.set(this, this.#t), n(), n = this.#u());
        }), r;
    }), No(() => {
      this.#v.destroy(), globalThis.bitsDismissableLayers.delete(this), this.#d.destroy(), this.#s(), n();
    });
  }
  #l = (e) => {
    e.defaultPrevented || this.opts.ref.current && Oi(() => {
      !this.opts.ref.current || this.#y(e.target) || e.target && !this.#o && this.#a.current?.(e);
    });
  };
  #u() {
    return Yo(
      /**
       * CAPTURE INTERACTION START
       * mark interaction-start event as intercepted.
       * mark responsible layer during interaction start
       * to avoid checking if is responsible layer during interaction end
       * when a new floating element may have been opened.
       */
      ft(this.#i, "pointerdown", Yo(this.#h, this.#p), { capture: !0 }),
      /**
       * BUBBLE INTERACTION START
       * Mark interaction-start event as non-intercepted. Debounce `onInteractOutsideStart`
       * to avoid prematurely checking if other events were intercepted.
       */
      ft(this.#i, "pointerdown", Yo(this.#f, this.#d)),
      /**
       * HANDLE FOCUS OUTSIDE
       */
      ft(this.#i, "focusin", this.#l)
    );
  }
  #c = (e) => {
    let n = e;
    n.defaultPrevented && (n = gd(e)), this.#e.current(e);
  };
  #d = dd(
    (e) => {
      if (!this.opts.ref.current) {
        this.#s();
        return;
      }
      const n = this.opts.isValidEvent.current(e, this.opts.ref.current) || u3(e, this.opts.ref.current);
      if (!this.#r || this.#w() || !n) {
        this.#s();
        return;
      }
      let r = e;
      if (r.defaultPrevented && (r = gd(r)), this.#t.current !== "close" && this.#t.current !== "defer-otherwise-close") {
        this.#s();
        return;
      }
      e.pointerType === "touch" ? (this.#s(), this.#s = ft(this.#i, "click", this.#c, { once: !0 })) : this.#e.current(r);
    },
    10
  );
  #h = (e) => {
    this.#n[e.type] = !0;
  };
  #f = (e) => {
    this.#n[e.type] = !1;
  };
  #p = () => {
    this.opts.ref.current && (this.#r = l3(this.opts.ref.current));
  };
  #y = (e) => this.opts.ref.current ? hg(this.opts.ref.current, e) : !1;
  #v = dd(
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
function a3(t = [...globalThis.bitsDismissableLayers]) {
  return t.findLast(([e, { current: n }]) => n === "close" || n === "ignore");
}
function l3(t) {
  const e = [...globalThis.bitsDismissableLayers], n = a3(e);
  if (n) return n[0].opts.ref.current === t;
  const [r] = e[0];
  return r.opts.ref.current === t;
}
function u3(t, e) {
  const n = t.target;
  if (!S5(n)) return !1;
  const r = !!n.closest(`[${i3}]`);
  if ("button" in t && t.button > 0 && !r) return !1;
  if ("button" in t && t.button === 0 && r) return !0;
  const o = !!e.closest(`[${s3}]`);
  return r && o ? !1 : pg(n).documentElement.contains(n) && !hg(e, n) && D5(t, e);
}
function gd(t) {
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
function kg(t, e) {
  ae(e, !0);
  let n = g(e, "interactOutsideBehavior", 7, "close"), r = g(e, "onInteractOutside", 7, Be), o = g(e, "onFocusOutside", 7, Be), i = g(e, "id", 7), s = g(e, "children", 7), a = g(e, "enabled", 7), l = g(e, "isValidEvent", 7, () => !1), u = g(e, "ref", 7);
  const d = ku.create({
    id: pe(() => i()),
    interactOutsideBehavior: pe(() => n()),
    onInteractOutside: pe(() => r()),
    enabled: pe(() => a()),
    onFocusOutside: pe(() => o()),
    isValidEvent: pe(() => l()),
    ref: u()
  });
  var h = {
    get interactOutsideBehavior() {
      return n();
    },
    set interactOutsideBehavior(m = "close") {
      n(m), f();
    },
    get onInteractOutside() {
      return r();
    },
    set onInteractOutside(m = Be) {
      r(m), f();
    },
    get onFocusOutside() {
      return o();
    },
    set onFocusOutside(m = Be) {
      o(m), f();
    },
    get id() {
      return i();
    },
    set id(m) {
      i(m), f();
    },
    get children() {
      return s();
    },
    set children(m) {
      s(m), f();
    },
    get enabled() {
      return a();
    },
    set enabled(m) {
      a(m), f();
    },
    get isValidEvent() {
      return l();
    },
    set isValidEvent(m = () => !1) {
      l(m), f();
    },
    get ref() {
      return u();
    },
    set ref(m) {
      u(m), f();
    }
  }, p = he(), v = J(p);
  return Ee(v, () => s() ?? Re, () => ({ props: d.props })), T(t, p), le(h);
}
ie(
  kg,
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
class Cu {
  static create(e) {
    return new Cu(e);
  }
  opts;
  domContext;
  constructor(e) {
    this.opts = e, this.domContext = new Pi(this.opts.ref);
    let n = Be;
    wt(() => e.enabled.current, (r) => (r && (globalThis.bitsEscapeLayers.set(this, e.escapeKeydownBehavior), n = this.#e()), () => {
      n(), globalThis.bitsEscapeLayers.delete(this);
    }));
  }
  #e = () => ft(this.domContext.getDocument(), "keydown", this.#t, { passive: !1 });
  #t = (e) => {
    if (e.key !== C5 || !c3(this)) return;
    const n = new KeyboardEvent(e.type, e);
    e.preventDefault();
    const r = this.opts.escapeKeydownBehavior.current;
    r !== "close" && r !== "defer-otherwise-close" || this.opts.onEscapeKeydown.current(n);
  };
}
function c3(t) {
  const e = [...globalThis.bitsEscapeLayers], n = e.findLast(([o, { current: i }]) => i === "close" || i === "ignore");
  if (n) return n[0] === t;
  const [r] = e[0];
  return r === t;
}
function Cg(t, e) {
  ae(e, !0);
  let n = g(e, "escapeKeydownBehavior", 7, "close"), r = g(e, "onEscapeKeydown", 7, Be), o = g(e, "children", 7), i = g(e, "enabled", 7), s = g(e, "ref", 7);
  Cu.create({
    escapeKeydownBehavior: pe(() => n()),
    onEscapeKeydown: pe(() => r()),
    enabled: pe(() => i()),
    ref: s()
  });
  var a = {
    get escapeKeydownBehavior() {
      return n();
    },
    set escapeKeydownBehavior(d = "close") {
      n(d), f();
    },
    get onEscapeKeydown() {
      return r();
    },
    set onEscapeKeydown(d = Be) {
      r(d), f();
    },
    get children() {
      return o();
    },
    set children(d) {
      o(d), f();
    },
    get enabled() {
      return i();
    },
    set enabled(d) {
      i(d), f();
    },
    get ref() {
      return s();
    },
    set ref(d) {
      s(d), f();
    }
  }, l = he(), u = J(l);
  return Ee(u, () => o() ?? Re), T(t, l), le(a);
}
ie(
  Cg,
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
class $u {
  static instance;
  #e = Nn([]);
  #t = /* @__PURE__ */ new WeakMap();
  #n = /* @__PURE__ */ new WeakMap();
  static getInstance() {
    return this.instance || (this.instance = new $u()), this.instance;
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
class Su {
  #e = !1;
  #t = null;
  #n = $u.getInstance();
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
          if (l && e.contains(l) && J5(l))
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
    this.#r.push(ft(n, "focusin", r, { capture: !0 }), ft(e, "keydown", o));
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
    return this.#t ? Y5(this.#t, { includeContainer: !1, getShadowRoot: !0 }) : [];
  }
  #c() {
    return this.#u()[0] || null;
  }
  #d() {
    return this.#t ? U5(this.#t, { includeContainer: !1, getShadowRoot: !0 }) : [];
  }
  static use(e) {
    let n = null;
    return wt([() => e.ref.current, () => e.enabled.current], ([r, o]) => {
      r && o ? (n || (n = new Su(e)), n.mount(r)) : n && (n.unmount(), n = null);
    }), No(() => {
      n?.unmount();
    }), {
      get props() {
        return { tabindex: -1 };
      }
    };
  }
}
function $g(t, e) {
  ae(e, !0);
  let n = g(e, "enabled", 7, !1), r = g(e, "trapFocus", 7, !1), o = g(e, "loop", 7, !1), i = g(e, "onCloseAutoFocus", 7, Be), s = g(e, "onOpenAutoFocus", 7, Be), a = g(e, "focusScope", 7), l = g(e, "ref", 7);
  const u = Su.use({
    enabled: pe(() => n()),
    trap: pe(() => r()),
    loop: o(),
    onCloseAutoFocus: pe(() => i()),
    onOpenAutoFocus: pe(() => s()),
    ref: l()
  });
  var d = {
    get enabled() {
      return n();
    },
    set enabled(v = !1) {
      n(v), f();
    },
    get trapFocus() {
      return r();
    },
    set trapFocus(v = !1) {
      r(v), f();
    },
    get loop() {
      return o();
    },
    set loop(v = !1) {
      o(v), f();
    },
    get onCloseAutoFocus() {
      return i();
    },
    set onCloseAutoFocus(v = Be) {
      i(v), f();
    },
    get onOpenAutoFocus() {
      return s();
    },
    set onOpenAutoFocus(v = Be) {
      s(v), f();
    },
    get focusScope() {
      return a();
    },
    set focusScope(v) {
      a(v), f();
    },
    get ref() {
      return l();
    },
    set ref(v) {
      l(v), f();
    }
  }, h = he(), p = J(h);
  return Ee(p, () => a() ?? Re, () => ({ props: u.props })), T(t, h), le(d);
}
ie(
  $g,
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
class _u {
  static create(e) {
    return new _u(e);
  }
  opts;
  domContext;
  #e = Be;
  constructor(e) {
    this.opts = e, this.domContext = new Pi(e.ref);
    let n = Be;
    wt(() => this.opts.enabled.current, (r) => (r && (globalThis.bitsTextSelectionLayers.set(this, this.opts.enabled), n(), n = this.#t()), () => {
      n(), this.#r(), globalThis.bitsTextSelectionLayers.delete(this);
    }));
  }
  #t() {
    return Yo(ft(this.domContext.getDocument(), "pointerdown", this.#n), ft(this.domContext.getDocument(), "pointerup", Jf(this.#r, this.opts.onPointerUp.current)));
  }
  #n = (e) => {
    const n = this.opts.ref.current, r = e.target;
    !pl(n) || !pl(r) || !this.opts.enabled.current || !h3(this) || !y5(n, r) || (this.opts.onPointerDown.current(e), !e.defaultPrevented && (this.#e = d3(n, this.domContext.getDocument().body)));
  };
  #r = () => {
    this.#e(), this.#e = Be;
  };
}
const vd = (t) => t.style.userSelect || t.style.webkitUserSelect;
function d3(t, e) {
  const n = vd(e), r = vd(t);
  return Zi(e, "none"), Zi(t, "text"), () => {
    Zi(e, n), Zi(t, r);
  };
}
function Zi(t, e) {
  t.style.userSelect = e, t.style.webkitUserSelect = e;
}
function h3(t) {
  const e = [...globalThis.bitsTextSelectionLayers];
  if (!e.length) return !1;
  const n = e.at(-1);
  return n ? n[0] === t : !1;
}
function Sg(t, e) {
  ae(e, !0);
  let n = g(e, "preventOverflowTextSelection", 7, !0), r = g(e, "onPointerDown", 7, Be), o = g(e, "onPointerUp", 7, Be), i = g(e, "id", 7), s = g(e, "children", 7), a = g(e, "enabled", 7), l = g(e, "ref", 7);
  _u.create({
    id: pe(() => i()),
    onPointerDown: pe(() => r()),
    onPointerUp: pe(() => o()),
    enabled: pe(() => a() && n()),
    ref: l()
  });
  var u = {
    get preventOverflowTextSelection() {
      return n();
    },
    set preventOverflowTextSelection(p = !0) {
      n(p), f();
    },
    get onPointerDown() {
      return r();
    },
    set onPointerDown(p = Be) {
      r(p), f();
    },
    get onPointerUp() {
      return o();
    },
    set onPointerUp(p = Be) {
      o(p), f();
    },
    get id() {
      return i();
    },
    set id(p) {
      i(p), f();
    },
    get children() {
      return s();
    },
    set children(p) {
      s(p), f();
    },
    get enabled() {
      return a();
    },
    set enabled(p) {
      a(p), f();
    },
    get ref() {
      return l();
    },
    set ref(p) {
      l(p), f();
    }
  }, d = he(), h = J(d);
  return Ee(h, () => s() ?? Re), T(t, d), le(u);
}
ie(
  Sg,
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
function Vs(t = "bits") {
  return globalThis.bitsIdCounter.current++, `${t}-${globalThis.bitsIdCounter.current}`;
}
class p3 {
  #e;
  #t = 0;
  #n = /* @__PURE__ */ me();
  #r;
  constructor(e) {
    this.#e = e;
  }
  #o() {
    this.#t -= 1, this.#r && this.#t <= 0 && (this.#r(), K(this.#n, void 0), this.#r = void 0);
  }
  get(...e) {
    return this.#t += 1, c(this.#n) === void 0 && (this.#r = Qr(() => {
      K(this.#n, this.#e(...e), !0);
    })), He(() => () => {
      this.#o();
    }), c(this.#n);
  }
}
const is = new b2();
let Wi = /* @__PURE__ */ me(null), Aa = null, Ho = null, Lo = !1;
const md = pe(() => {
  for (const t of is.values())
    if (t) return !0;
  return !1;
});
let Da = null;
const f3 = new p3(() => {
  function t() {
    document.body.setAttribute("style", c(Wi) ?? ""), document.body.style.removeProperty("--scrollbar-width"), hl && Aa?.(), K(Wi, null);
  }
  function e() {
    Ho !== null && (window.clearTimeout(Ho), Ho = null);
  }
  function n(o, i) {
    e(), Lo = !0, Da = Date.now();
    const s = Da, a = () => {
      Ho = null, Da === s && (_g(is) ? Lo = !1 : (Lo = !1, i()));
    }, l = o === null ? 24 : o;
    Ho = window.setTimeout(a, l);
  }
  function r() {
    c(Wi) === null && is.size === 0 && !Lo && K(Wi, document.body.getAttribute("style"), !0);
  }
  return wt(() => md.current, () => {
    if (!md.current) return;
    r(), Lo = !1;
    const o = getComputedStyle(document.documentElement), i = getComputedStyle(document.body), s = o.scrollbarGutter?.includes("stable") || i.scrollbarGutter?.includes("stable"), a = window.innerWidth - document.documentElement.clientWidth, l = {
      padding: Number.parseInt(i.paddingRight ?? "0", 10) + a,
      margin: Number.parseInt(i.marginRight ?? "0", 10)
    };
    a > 0 && !s && (document.body.style.paddingRight = `${l.padding}px`, document.body.style.marginRight = `${l.margin}px`, document.body.style.setProperty("--scrollbar-width", `${a}px`)), document.body.style.overflow = "hidden", hl && (Aa = ft(
      document,
      "touchmove",
      (u) => {
        u.target === document.documentElement && (u.touches.length > 1 || u.preventDefault());
      },
      { passive: !1 }
    )), Oi(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }), No(() => () => {
    Aa?.();
  }), {
    get lockMap() {
      return is;
    },
    resetBodyStyle: t,
    scheduleCleanupIfNoNewLocks: n,
    cancelPendingCleanup: e,
    ensureInitialStyleCaptured: r
  };
});
class g3 {
  #e = Vs();
  #t;
  #n = () => null;
  #r;
  locked;
  constructor(e, n = () => null) {
    this.#t = e, this.#n = n, this.#r = f3.get(), this.#r && (this.#r.cancelPendingCleanup(), this.#r.ensureInitialStyleCaptured(), this.#r.lockMap.set(this.#e, this.#t ?? !1), this.locked = pe(() => this.#r.lockMap.get(this.#e) ?? !1, (r) => this.#r.lockMap.set(this.#e, r)), No(() => {
      if (this.#r.lockMap.delete(this.#e), _g(this.#r.lockMap)) return;
      const r = this.#n();
      this.#r.scheduleCleanupIfNoNewLocks(r, () => {
        this.#r.resetBodyStyle();
      });
    }));
  }
}
function _g(t) {
  for (const [e, n] of t)
    if (n) return !0;
  return !1;
}
function vl(t, e) {
  ae(e, !0);
  let n = g(e, "preventScroll", 7, !0), r = g(e, "restoreScrollDelay", 7, null);
  n() && new g3(n(), () => r());
  var o = {
    get preventScroll() {
      return n();
    },
    set preventScroll(i = !0) {
      n(i), f();
    },
    get restoreScrollDelay() {
      return r();
    },
    set restoreScrollDelay(i = null) {
      r(i), f();
    }
  };
  return le(o);
}
ie(vl, { preventScroll: {}, restoreScrollDelay: {} }, [], [], !0);
const v3 = bu({
  component: "checkbox",
  parts: ["root", "group", "group-label", "input"]
}), m3 = new zr("Checkbox.Group"), Og = new zr("Checkbox.Root");
class Ou {
  static create(e, n = null) {
    return Og.set(new Ou(e, n));
  }
  opts;
  group;
  #e = /* @__PURE__ */ $(() => this.group && this.group.opts.name.current ? this.group.opts.name.current : this.opts.name.current);
  get trueName() {
    return c(this.#e);
  }
  set trueName(e) {
    K(this.#e, e);
  }
  #t = /* @__PURE__ */ $(() => this.group && this.group.opts.required.current ? !0 : this.opts.required.current);
  get trueRequired() {
    return c(this.#t);
  }
  set trueRequired(e) {
    K(this.#t, e);
  }
  #n = /* @__PURE__ */ $(() => this.group && this.group.opts.disabled.current ? !0 : this.opts.disabled.current);
  get trueDisabled() {
    return c(this.#n);
  }
  set trueDisabled(e) {
    K(this.#n, e);
  }
  #r = /* @__PURE__ */ $(() => this.group && this.group.opts.readonly.current ? !0 : this.opts.readonly.current);
  get trueReadonly() {
    return c(this.#r);
  }
  set trueReadonly(e) {
    K(this.#r, e);
  }
  attachment;
  constructor(e, n) {
    this.opts = e, this.group = n, this.attachment = xr(this.opts.ref), this.onkeydown = this.onkeydown.bind(this), this.onclick = this.onclick.bind(this), wt.pre(
      [
        () => Bl(this.group?.opts.value.current),
        () => this.opts.value.current
      ],
      ([r, o]) => {
        !r || !o || (this.opts.checked.current = r.includes(o));
      }
    ), wt.pre(() => this.opts.checked.current, (r) => {
      this.group && (r ? this.group?.addValue(this.opts.value.current) : this.group?.removeValue(this.opts.value.current));
    });
  }
  onkeydown(e) {
    if (!(this.trueDisabled || this.trueReadonly)) {
      if (e.key === dl) {
        e.preventDefault(), this.opts.type.current === "submit" && e.currentTarget.closest("form")?.requestSubmit();
        return;
      }
      e.key === os && (e.preventDefault(), this.#o());
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
    K(this.#i, e);
  }
  #a = /* @__PURE__ */ $(() => ({
    id: this.opts.id.current,
    role: "checkbox",
    type: this.opts.type.current,
    disabled: this.trueDisabled,
    "aria-checked": x5(this.opts.checked.current, this.opts.indeterminate.current),
    "aria-required": cl(this.trueRequired),
    "aria-readonly": cl(this.trueReadonly),
    "data-disabled": zs(this.trueDisabled),
    "data-readonly": zs(this.trueReadonly),
    "data-state": y3(this.opts.checked.current, this.opts.indeterminate.current),
    [v3.root]: "",
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
class Pu {
  static create() {
    return new Pu(Og.get());
  }
  root;
  #e = /* @__PURE__ */ $(() => this.root.group ? !!(this.root.opts.value.current !== void 0 && this.root.group.opts.value.current.includes(this.root.opts.value.current)) : this.root.opts.checked.current);
  get trueChecked() {
    return c(this.#e);
  }
  set trueChecked(e) {
    K(this.#e, e);
  }
  #t = /* @__PURE__ */ $(() => !!this.root.trueName);
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
    pl(this.root.opts.ref.current) && this.root.opts.ref.current.focus();
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
    K(this.#n, e);
  }
}
function y3(t, e) {
  return e ? "indeterminate" : t ? "checked" : "unchecked";
}
var w3 = /* @__PURE__ */ ne("<input/>"), b3 = /* @__PURE__ */ ne("<input/>");
function Eu(t, e) {
  ae(e, !0);
  let n = g(e, "value", 15), r = /* @__PURE__ */ De(e, ["$$slots", "$$events", "$$legacy", "$$host", "value"]);
  const o = /* @__PURE__ */ $(() => An(r, {
    "aria-hidden": "true",
    tabindex: -1,
    style: r5
  }));
  var i = {
    get value() {
      return n();
    },
    set value(d) {
      n(d), f();
    }
  }, s = he(), a = J(s);
  {
    var l = (d) => {
      var h = w3();
      Ue(h, () => ({ ...c(o), value: n() }), void 0, void 0, void 0, void 0, !0), T(d, h);
    }, u = (d) => {
      var h = b3();
      Ue(h, () => ({ ...c(o) }), void 0, void 0, void 0, void 0, !0), gs(h, n), T(d, h);
    };
    se(a, (d) => {
      c(o).type === "checkbox" ? d(l) : d(u, !1);
    });
  }
  return T(t, s), le(i);
}
ie(Eu, { value: {} }, [], [], !0);
function Pg(t, e) {
  ae(e, !1);
  const n = Pu.create();
  Jl();
  var r = he(), o = J(r);
  {
    var i = (s) => {
      Eu(s, Ie(() => n.props));
    };
    se(o, (s) => {
      n.shouldRender && s(i);
    });
  }
  T(t, r), le();
}
ie(Pg, {}, [], [], !0);
var x3 = /* @__PURE__ */ ne("<button><!></button>"), k3 = /* @__PURE__ */ ne("<!> <!>", 1);
function Eg(t, e) {
  const n = gi();
  ae(e, !0);
  let r = g(e, "checked", 15, !1), o = g(e, "ref", 15, null), i = g(e, "onCheckedChange", 7), s = g(e, "children", 7), a = g(e, "disabled", 7, !1), l = g(e, "required", 7, !1), u = g(e, "name", 23, () => {
  }), d = g(e, "value", 7, "on"), h = g(e, "id", 23, () => Hn(n)), p = g(e, "indeterminate", 15, !1), v = g(e, "onIndeterminateChange", 7), m = g(e, "child", 7), y = g(e, "type", 7, "button"), w = g(e, "readonly", 7), b = /* @__PURE__ */ De(e, [
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
  const k = m3.getOr(null);
  k && d() && (k.opts.value.current.includes(d()) ? r(!0) : r(!1)), wt.pre(() => d(), () => {
    k && d() && (k.opts.value.current.includes(d()) ? r(!0) : r(!1));
  });
  const O = Ou.create(
    {
      checked: pe(() => r(), (D) => {
        r(D), i()?.(D);
      }),
      disabled: pe(() => a() ?? !1),
      required: pe(() => l()),
      name: pe(() => u()),
      value: pe(() => d()),
      id: pe(() => h()),
      ref: pe(() => o(), (D) => o(D)),
      indeterminate: pe(() => p(), (D) => {
        p(D), v()?.(D);
      }),
      type: pe(() => y()),
      readonly: pe(() => !!w())
    },
    k
  ), C = /* @__PURE__ */ $(() => An({ ...b }, O.props));
  var x = {
    get checked() {
      return r();
    },
    set checked(D = !1) {
      r(D), f();
    },
    get ref() {
      return o();
    },
    set ref(D = null) {
      o(D), f();
    },
    get onCheckedChange() {
      return i();
    },
    set onCheckedChange(D) {
      i(D), f();
    },
    get children() {
      return s();
    },
    set children(D) {
      s(D), f();
    },
    get disabled() {
      return a();
    },
    set disabled(D = !1) {
      a(D), f();
    },
    get required() {
      return l();
    },
    set required(D = !1) {
      l(D), f();
    },
    get name() {
      return u();
    },
    set name(D = void 0) {
      u(D), f();
    },
    get value() {
      return d();
    },
    set value(D = "on") {
      d(D), f();
    },
    get id() {
      return h();
    },
    set id(D = Hn(n)) {
      h(D), f();
    },
    get indeterminate() {
      return p();
    },
    set indeterminate(D = !1) {
      p(D), f();
    },
    get onIndeterminateChange() {
      return v();
    },
    set onIndeterminateChange(D) {
      v(D), f();
    },
    get child() {
      return m();
    },
    set child(D) {
      m(D), f();
    },
    get type() {
      return y();
    },
    set type(D = "button") {
      y(D), f();
    },
    get readonly() {
      return w();
    },
    set readonly(D) {
      w(D), f();
    }
  }, E = k3(), V = J(E);
  {
    var H = (D) => {
      var _ = he(), M = J(_);
      {
        let S = /* @__PURE__ */ $(() => ({ props: c(C), ...O.snippetProps }));
        Ee(M, m, () => c(S));
      }
      T(D, _);
    }, I = (D) => {
      var _ = x3();
      Ue(_, () => ({ ...c(C) }));
      var M = X(_);
      Ee(M, () => s() ?? Re, () => O.snippetProps), Z(_), T(D, _);
    };
    se(V, (D) => {
      m() ? D(H) : D(I, !1);
    });
  }
  var A = R(V, 2);
  return Pg(A, {}), T(t, E), le(x);
}
ie(
  Eg,
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
const C3 = ["top", "right", "bottom", "left"], Cr = Math.min, Ut = Math.max, Hs = Math.round, Xi = Math.floor, Dn = (t) => ({
  x: t,
  y: t
}), $3 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, S3 = {
  start: "end",
  end: "start"
};
function ml(t, e, n) {
  return Ut(t, Cr(e, n));
}
function or(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function ir(t) {
  return t.split("-")[0];
}
function zo(t) {
  return t.split("-")[1];
}
function Nu(t) {
  return t === "x" ? "y" : "x";
}
function zu(t) {
  return t === "y" ? "height" : "width";
}
const _3 = /* @__PURE__ */ new Set(["top", "bottom"]);
function zn(t) {
  return _3.has(ir(t)) ? "y" : "x";
}
function Mu(t) {
  return Nu(zn(t));
}
function O3(t, e, n) {
  n === void 0 && (n = !1);
  const r = zo(t), o = Mu(t), i = zu(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return e.reference[i] > e.floating[i] && (s = Ls(s)), [s, Ls(s)];
}
function P3(t) {
  const e = Ls(t);
  return [yl(t), e, yl(e)];
}
function yl(t) {
  return t.replace(/start|end/g, (e) => S3[e]);
}
const yd = ["left", "right"], wd = ["right", "left"], E3 = ["top", "bottom"], N3 = ["bottom", "top"];
function z3(t, e, n) {
  switch (t) {
    case "top":
    case "bottom":
      return n ? e ? wd : yd : e ? yd : wd;
    case "left":
    case "right":
      return e ? E3 : N3;
    default:
      return [];
  }
}
function M3(t, e, n, r) {
  const o = zo(t);
  let i = z3(ir(t), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), e && (i = i.concat(i.map(yl)))), i;
}
function Ls(t) {
  return t.replace(/left|right|bottom|top/g, (e) => $3[e]);
}
function T3(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function Ng(t) {
  return typeof t != "number" ? T3(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function Is(t) {
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
function bd(t, e, n) {
  let {
    reference: r,
    floating: o
  } = t;
  const i = zn(e), s = Mu(e), a = zu(s), l = ir(e), u = i === "y", d = r.x + r.width / 2 - o.width / 2, h = r.y + r.height / 2 - o.height / 2, p = r[a] / 2 - o[a] / 2;
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
  switch (zo(e)) {
    case "start":
      v[s] -= p * (n && u ? -1 : 1);
      break;
    case "end":
      v[s] += p * (n && u ? -1 : 1);
      break;
  }
  return v;
}
const A3 = async (t, e, n) => {
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
  } = bd(u, r, l), p = r, v = {}, m = 0;
  for (let y = 0; y < a.length; y++) {
    const {
      name: w,
      fn: b
    } = a[y], {
      x: k,
      y: O,
      data: C,
      reset: x
    } = await b({
      x: d,
      y: h,
      initialPlacement: r,
      placement: p,
      strategy: o,
      middlewareData: v,
      rects: u,
      platform: s,
      elements: {
        reference: t,
        floating: e
      }
    });
    d = k ?? d, h = O ?? h, v = {
      ...v,
      [w]: {
        ...v[w],
        ...C
      }
    }, x && m <= 50 && (m++, typeof x == "object" && (x.placement && (p = x.placement), x.rects && (u = x.rects === !0 ? await s.getElementRects({
      reference: t,
      floating: e,
      strategy: o
    }) : x.rects), {
      x: d,
      y: h
    } = bd(u, p, l)), y = -1);
  }
  return {
    x: d,
    y: h,
    placement: p,
    strategy: o,
    middlewareData: v
  };
};
async function li(t, e) {
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
    altBoundary: p = !1,
    padding: v = 0
  } = or(e, t), m = Ng(v), y = a[p ? h === "floating" ? "reference" : "floating" : h], w = Is(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(y))) == null || n ? y : y.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: u,
    rootBoundary: d,
    strategy: l
  })), b = h === "floating" ? {
    x: r,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, k = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)), O = await (i.isElement == null ? void 0 : i.isElement(k)) ? await (i.getScale == null ? void 0 : i.getScale(k)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, C = Is(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: b,
    offsetParent: k,
    strategy: l
  }) : b);
  return {
    top: (w.top - C.top + m.top) / O.y,
    bottom: (C.bottom - w.bottom + m.bottom) / O.y,
    left: (w.left - C.left + m.left) / O.x,
    right: (C.right - w.right + m.right) / O.x
  };
}
const D3 = (t) => ({
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
    } = or(t, e) || {};
    if (u == null)
      return {};
    const h = Ng(d), p = {
      x: n,
      y: r
    }, v = Mu(o), m = zu(v), y = await s.getDimensions(u), w = v === "y", b = w ? "top" : "left", k = w ? "bottom" : "right", O = w ? "clientHeight" : "clientWidth", C = i.reference[m] + i.reference[v] - p[v] - i.floating[m], x = p[v] - i.reference[v], E = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
    let V = E ? E[O] : 0;
    (!V || !await (s.isElement == null ? void 0 : s.isElement(E))) && (V = a.floating[O] || i.floating[m]);
    const H = C / 2 - x / 2, I = V / 2 - y[m] / 2 - 1, A = Cr(h[b], I), D = Cr(h[k], I), _ = A, M = V - y[m] - D, S = V / 2 - y[m] / 2 + H, P = ml(_, S, M), z = !l.arrow && zo(o) != null && S !== P && i.reference[m] / 2 - (S < _ ? A : D) - y[m] / 2 < 0, B = z ? S < _ ? S - _ : S - M : 0;
    return {
      [v]: p[v] + B,
      data: {
        [v]: P,
        centerOffset: S - P - B,
        ...z && {
          alignmentOffset: B
        }
      },
      reset: z
    };
  }
}), V3 = function(t) {
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
        fallbackPlacements: p,
        fallbackStrategy: v = "bestFit",
        fallbackAxisSideDirection: m = "none",
        flipAlignment: y = !0,
        ...w
      } = or(t, e);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const b = ir(o), k = zn(a), O = ir(a) === a, C = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), x = p || (O || !y ? [Ls(a)] : P3(a)), E = m !== "none";
      !p && E && x.push(...M3(a, y, m, C));
      const V = [a, ...x], H = await li(e, w), I = [];
      let A = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (d && I.push(H[b]), h) {
        const S = O3(o, s, C);
        I.push(H[S[0]], H[S[1]]);
      }
      if (A = [...A, {
        placement: o,
        overflows: I
      }], !I.every((S) => S <= 0)) {
        var D, _;
        const S = (((D = i.flip) == null ? void 0 : D.index) || 0) + 1, P = V[S];
        if (P && (!(h === "alignment" && k !== zn(P)) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        A.every((B) => zn(B.placement) === k ? B.overflows[0] > 0 : !0)))
          return {
            data: {
              index: S,
              overflows: A
            },
            reset: {
              placement: P
            }
          };
        let z = (_ = A.filter((B) => B.overflows[0] <= 0).sort((B, q) => B.overflows[1] - q.overflows[1])[0]) == null ? void 0 : _.placement;
        if (!z)
          switch (v) {
            case "bestFit": {
              var M;
              const B = (M = A.filter((q) => {
                if (E) {
                  const U = zn(q.placement);
                  return U === k || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  U === "y";
                }
                return !0;
              }).map((q) => [q.placement, q.overflows.filter((U) => U > 0).reduce((U, N) => U + N, 0)]).sort((q, U) => q[1] - U[1])[0]) == null ? void 0 : M[0];
              B && (z = B);
              break;
            }
            case "initialPlacement":
              z = a;
              break;
          }
        if (o !== z)
          return {
            reset: {
              placement: z
            }
          };
      }
      return {};
    }
  };
};
function xd(t, e) {
  return {
    top: t.top - e.height,
    right: t.right - e.width,
    bottom: t.bottom - e.height,
    left: t.left - e.width
  };
}
function kd(t) {
  return C3.some((e) => t[e] >= 0);
}
const H3 = function(t) {
  return t === void 0 && (t = {}), {
    name: "hide",
    options: t,
    async fn(e) {
      const {
        rects: n
      } = e, {
        strategy: r = "referenceHidden",
        ...o
      } = or(t, e);
      switch (r) {
        case "referenceHidden": {
          const i = await li(e, {
            ...o,
            elementContext: "reference"
          }), s = xd(i, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: kd(s)
            }
          };
        }
        case "escaped": {
          const i = await li(e, {
            ...o,
            altBoundary: !0
          }), s = xd(i, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: kd(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, zg = /* @__PURE__ */ new Set(["left", "top"]);
async function L3(t, e) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = t, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = ir(n), a = zo(n), l = zn(n) === "y", u = zg.has(s) ? -1 : 1, d = i && l ? -1 : 1, h = or(e, t);
  let {
    mainAxis: p,
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
    y: p * u
  } : {
    x: p * u,
    y: v * d
  };
}
const I3 = function(t) {
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
      } = e, l = await L3(e, t);
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
}, R3 = function(t) {
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
              y: k
            } = w;
            return {
              x: b,
              y: k
            };
          }
        },
        ...l
      } = or(t, e), u = {
        x: n,
        y: r
      }, d = await li(e, l), h = zn(ir(o)), p = Nu(h);
      let v = u[p], m = u[h];
      if (i) {
        const w = p === "y" ? "top" : "left", b = p === "y" ? "bottom" : "right", k = v + d[w], O = v - d[b];
        v = ml(k, v, O);
      }
      if (s) {
        const w = h === "y" ? "top" : "left", b = h === "y" ? "bottom" : "right", k = m + d[w], O = m - d[b];
        m = ml(k, m, O);
      }
      const y = a.fn({
        ...e,
        [p]: v,
        [h]: m
      });
      return {
        ...y,
        data: {
          x: y.x - n,
          y: y.y - r,
          enabled: {
            [p]: i,
            [h]: s
          }
        }
      };
    }
  };
}, B3 = function(t) {
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
      } = or(t, e), d = {
        x: n,
        y: r
      }, h = zn(o), p = Nu(h);
      let v = d[p], m = d[h];
      const y = or(a, e), w = typeof y == "number" ? {
        mainAxis: y,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...y
      };
      if (l) {
        const O = p === "y" ? "height" : "width", C = i.reference[p] - i.floating[O] + w.mainAxis, x = i.reference[p] + i.reference[O] - w.mainAxis;
        v < C ? v = C : v > x && (v = x);
      }
      if (u) {
        var b, k;
        const O = p === "y" ? "width" : "height", C = zg.has(ir(o)), x = i.reference[h] - i.floating[O] + (C && ((b = s.offset) == null ? void 0 : b[h]) || 0) + (C ? 0 : w.crossAxis), E = i.reference[h] + i.reference[O] + (C ? 0 : ((k = s.offset) == null ? void 0 : k[h]) || 0) - (C ? w.crossAxis : 0);
        m < x ? m = x : m > E && (m = E);
      }
      return {
        [p]: v,
        [h]: m
      };
    }
  };
}, j3 = function(t) {
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
      } = or(t, e), d = await li(e, u), h = ir(o), p = zo(o), v = zn(o) === "y", {
        width: m,
        height: y
      } = i.floating;
      let w, b;
      h === "top" || h === "bottom" ? (w = h, b = p === (await (s.isRTL == null ? void 0 : s.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (b = h, w = p === "end" ? "top" : "bottom");
      const k = y - d.top - d.bottom, O = m - d.left - d.right, C = Cr(y - d[w], k), x = Cr(m - d[b], O), E = !e.middlewareData.shift;
      let V = C, H = x;
      if ((n = e.middlewareData.shift) != null && n.enabled.x && (H = O), (r = e.middlewareData.shift) != null && r.enabled.y && (V = k), E && !p) {
        const A = Ut(d.left, 0), D = Ut(d.right, 0), _ = Ut(d.top, 0), M = Ut(d.bottom, 0);
        v ? H = m - 2 * (A !== 0 || D !== 0 ? A + D : Ut(d.left, d.right)) : V = y - 2 * (_ !== 0 || M !== 0 ? _ + M : Ut(d.top, d.bottom));
      }
      await l({
        ...e,
        availableWidth: H,
        availableHeight: V
      });
      const I = await s.getDimensions(a.floating);
      return m !== I.width || y !== I.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function ha() {
  return typeof window < "u";
}
function Mo(t) {
  return Mg(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function Jt(t) {
  var e;
  return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function Bn(t) {
  var e;
  return (e = (Mg(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
}
function Mg(t) {
  return ha() ? t instanceof Node || t instanceof Jt(t).Node : !1;
}
function wn(t) {
  return ha() ? t instanceof Element || t instanceof Jt(t).Element : !1;
}
function Ln(t) {
  return ha() ? t instanceof HTMLElement || t instanceof Jt(t).HTMLElement : !1;
}
function Cd(t) {
  return !ha() || typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof Jt(t).ShadowRoot;
}
const K3 = /* @__PURE__ */ new Set(["inline", "contents"]);
function Ei(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: r,
    display: o
  } = bn(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + r + n) && !K3.has(o);
}
const F3 = /* @__PURE__ */ new Set(["table", "td", "th"]);
function Z3(t) {
  return F3.has(Mo(t));
}
const W3 = [":popover-open", ":modal"];
function pa(t) {
  return W3.some((e) => {
    try {
      return t.matches(e);
    } catch {
      return !1;
    }
  });
}
const X3 = ["transform", "translate", "scale", "rotate", "perspective"], q3 = ["transform", "translate", "scale", "rotate", "perspective", "filter"], Y3 = ["paint", "layout", "strict", "content"];
function Tu(t) {
  const e = Au(), n = wn(t) ? bn(t) : t;
  return X3.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !e && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !e && (n.filter ? n.filter !== "none" : !1) || q3.some((r) => (n.willChange || "").includes(r)) || Y3.some((r) => (n.contain || "").includes(r));
}
function U3(t) {
  let e = $r(t);
  for (; Ln(e) && !So(e); ) {
    if (Tu(e))
      return e;
    if (pa(e))
      return null;
    e = $r(e);
  }
  return null;
}
function Au() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const G3 = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function So(t) {
  return G3.has(Mo(t));
}
function bn(t) {
  return Jt(t).getComputedStyle(t);
}
function fa(t) {
  return wn(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.scrollX,
    scrollTop: t.scrollY
  };
}
function $r(t) {
  if (Mo(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node.
    t.assignedSlot || // DOM Element detected.
    t.parentNode || // ShadowRoot detected.
    Cd(t) && t.host || // Fallback.
    Bn(t)
  );
  return Cd(e) ? e.host : e;
}
function Tg(t) {
  const e = $r(t);
  return So(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : Ln(e) && Ei(e) ? e : Tg(e);
}
function ui(t, e, n) {
  var r;
  e === void 0 && (e = []), n === void 0 && (n = !0);
  const o = Tg(t), i = o === ((r = t.ownerDocument) == null ? void 0 : r.body), s = Jt(o);
  if (i) {
    const a = wl(s);
    return e.concat(s, s.visualViewport || [], Ei(o) ? o : [], a && n ? ui(a) : []);
  }
  return e.concat(o, ui(o, [], n));
}
function wl(t) {
  return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null;
}
function Ag(t) {
  const e = bn(t);
  let n = parseFloat(e.width) || 0, r = parseFloat(e.height) || 0;
  const o = Ln(t), i = o ? t.offsetWidth : n, s = o ? t.offsetHeight : r, a = Hs(n) !== i || Hs(r) !== s;
  return a && (n = i, r = s), {
    width: n,
    height: r,
    $: a
  };
}
function Du(t) {
  return wn(t) ? t : t.contextElement;
}
function fo(t) {
  const e = Du(t);
  if (!Ln(e))
    return Dn(1);
  const n = e.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = Ag(e);
  let s = (i ? Hs(n.width) : n.width) / r, a = (i ? Hs(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const J3 = /* @__PURE__ */ Dn(0);
function Dg(t) {
  const e = Jt(t);
  return !Au() || !e.visualViewport ? J3 : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function Q3(t, e, n) {
  return e === void 0 && (e = !1), !n || e && n !== Jt(t) ? !1 : e;
}
function Ur(t, e, n, r) {
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const o = t.getBoundingClientRect(), i = Du(t);
  let s = Dn(1);
  e && (r ? wn(r) && (s = fo(r)) : s = fo(t));
  const a = Q3(i, n, r) ? Dg(i) : Dn(0);
  let l = (o.left + a.x) / s.x, u = (o.top + a.y) / s.y, d = o.width / s.x, h = o.height / s.y;
  if (i) {
    const p = Jt(i), v = r && wn(r) ? Jt(r) : r;
    let m = p, y = wl(m);
    for (; y && r && v !== m; ) {
      const w = fo(y), b = y.getBoundingClientRect(), k = bn(y), O = b.left + (y.clientLeft + parseFloat(k.paddingLeft)) * w.x, C = b.top + (y.clientTop + parseFloat(k.paddingTop)) * w.y;
      l *= w.x, u *= w.y, d *= w.x, h *= w.y, l += O, u += C, m = Jt(y), y = wl(m);
    }
  }
  return Is({
    width: d,
    height: h,
    x: l,
    y: u
  });
}
function ga(t, e) {
  const n = fa(t).scrollLeft;
  return e ? e.left + n : Ur(Bn(t)).left + n;
}
function Vg(t, e) {
  const n = t.getBoundingClientRect(), r = n.left + e.scrollLeft - ga(t, n), o = n.top + e.scrollTop;
  return {
    x: r,
    y: o
  };
}
function ek(t) {
  let {
    elements: e,
    rect: n,
    offsetParent: r,
    strategy: o
  } = t;
  const i = o === "fixed", s = Bn(r), a = e ? pa(e.floating) : !1;
  if (r === s || a && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = Dn(1);
  const d = Dn(0), h = Ln(r);
  if ((h || !h && !i) && ((Mo(r) !== "body" || Ei(s)) && (l = fa(r)), Ln(r))) {
    const v = Ur(r);
    u = fo(r), d.x = v.x + r.clientLeft, d.y = v.y + r.clientTop;
  }
  const p = s && !h && !i ? Vg(s, l) : Dn(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + d.x + p.x,
    y: n.y * u.y - l.scrollTop * u.y + d.y + p.y
  };
}
function tk(t) {
  return Array.from(t.getClientRects());
}
function nk(t) {
  const e = Bn(t), n = fa(t), r = t.ownerDocument.body, o = Ut(e.scrollWidth, e.clientWidth, r.scrollWidth, r.clientWidth), i = Ut(e.scrollHeight, e.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + ga(t);
  const a = -n.scrollTop;
  return bn(r).direction === "rtl" && (s += Ut(e.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
const $d = 25;
function rk(t, e) {
  const n = Jt(t), r = Bn(t), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, a = 0, l = 0;
  if (o) {
    i = o.width, s = o.height;
    const d = Au();
    (!d || d && e === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  const u = ga(r);
  if (u <= 0) {
    const d = r.ownerDocument, h = d.body, p = getComputedStyle(h), v = d.compatMode === "CSS1Compat" && parseFloat(p.marginLeft) + parseFloat(p.marginRight) || 0, m = Math.abs(r.clientWidth - h.clientWidth - v);
    m <= $d && (i -= m);
  } else u <= $d && (i += u);
  return {
    width: i,
    height: s,
    x: a,
    y: l
  };
}
const ok = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function ik(t, e) {
  const n = Ur(t, !0, e === "fixed"), r = n.top + t.clientTop, o = n.left + t.clientLeft, i = Ln(t) ? fo(t) : Dn(1), s = t.clientWidth * i.x, a = t.clientHeight * i.y, l = o * i.x, u = r * i.y;
  return {
    width: s,
    height: a,
    x: l,
    y: u
  };
}
function Sd(t, e, n) {
  let r;
  if (e === "viewport")
    r = rk(t, n);
  else if (e === "document")
    r = nk(Bn(t));
  else if (wn(e))
    r = ik(e, n);
  else {
    const o = Dg(t);
    r = {
      x: e.x - o.x,
      y: e.y - o.y,
      width: e.width,
      height: e.height
    };
  }
  return Is(r);
}
function Hg(t, e) {
  const n = $r(t);
  return n === e || !wn(n) || So(n) ? !1 : bn(n).position === "fixed" || Hg(n, e);
}
function sk(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let r = ui(t, [], !1).filter((a) => wn(a) && Mo(a) !== "body"), o = null;
  const i = bn(t).position === "fixed";
  let s = i ? $r(t) : t;
  for (; wn(s) && !So(s); ) {
    const a = bn(s), l = Tu(s);
    !l && a.position === "fixed" && (o = null), (i ? !l && !o : !l && a.position === "static" && o && ok.has(o.position) || Ei(s) && !l && Hg(t, s)) ? r = r.filter((u) => u !== s) : o = a, s = $r(s);
  }
  return e.set(t, r), r;
}
function ak(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = t;
  const i = [...n === "clippingAncestors" ? pa(e) ? [] : sk(e, this._c) : [].concat(n), r], s = i[0], a = i.reduce((l, u) => {
    const d = Sd(e, u, o);
    return l.top = Ut(d.top, l.top), l.right = Cr(d.right, l.right), l.bottom = Cr(d.bottom, l.bottom), l.left = Ut(d.left, l.left), l;
  }, Sd(e, s, o));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top
  };
}
function lk(t) {
  const {
    width: e,
    height: n
  } = Ag(t);
  return {
    width: e,
    height: n
  };
}
function uk(t, e, n) {
  const r = Ln(e), o = Bn(e), i = n === "fixed", s = Ur(t, !0, i, e);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Dn(0);
  function u() {
    l.x = ga(o);
  }
  if (r || !r && !i)
    if ((Mo(e) !== "body" || Ei(o)) && (a = fa(e)), r) {
      const v = Ur(e, !0, i, e);
      l.x = v.x + e.clientLeft, l.y = v.y + e.clientTop;
    } else o && u();
  i && !r && o && u();
  const d = o && !r && !i ? Vg(o, a) : Dn(0), h = s.left + a.scrollLeft - l.x - d.x, p = s.top + a.scrollTop - l.y - d.y;
  return {
    x: h,
    y: p,
    width: s.width,
    height: s.height
  };
}
function Va(t) {
  return bn(t).position === "static";
}
function _d(t, e) {
  if (!Ln(t) || bn(t).position === "fixed")
    return null;
  if (e)
    return e(t);
  let n = t.offsetParent;
  return Bn(t) === n && (n = n.ownerDocument.body), n;
}
function Lg(t, e) {
  const n = Jt(t);
  if (pa(t))
    return n;
  if (!Ln(t)) {
    let o = $r(t);
    for (; o && !So(o); ) {
      if (wn(o) && !Va(o))
        return o;
      o = $r(o);
    }
    return n;
  }
  let r = _d(t, e);
  for (; r && Z3(r) && Va(r); )
    r = _d(r, e);
  return r && So(r) && Va(r) && !Tu(r) ? n : r || U3(t) || n;
}
const ck = async function(t) {
  const e = this.getOffsetParent || Lg, n = this.getDimensions, r = await n(t.floating);
  return {
    reference: uk(t.reference, await e(t.floating), t.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function dk(t) {
  return bn(t).direction === "rtl";
}
const hk = {
  convertOffsetParentRelativeRectToViewportRelativeRect: ek,
  getDocumentElement: Bn,
  getClippingRect: ak,
  getOffsetParent: Lg,
  getElementRects: ck,
  getClientRects: tk,
  getDimensions: lk,
  getScale: fo,
  isElement: wn,
  isRTL: dk
};
function Ig(t, e) {
  return t.x === e.x && t.y === e.y && t.width === e.width && t.height === e.height;
}
function pk(t, e) {
  let n = null, r;
  const o = Bn(t);
  function i() {
    var a;
    clearTimeout(r), (a = n) == null || a.disconnect(), n = null;
  }
  function s(a, l) {
    a === void 0 && (a = !1), l === void 0 && (l = 1), i();
    const u = t.getBoundingClientRect(), {
      left: d,
      top: h,
      width: p,
      height: v
    } = u;
    if (a || e(), !p || !v)
      return;
    const m = Xi(h), y = Xi(o.clientWidth - (d + p)), w = Xi(o.clientHeight - (h + v)), b = Xi(d), k = {
      rootMargin: -m + "px " + -y + "px " + -w + "px " + -b + "px",
      threshold: Ut(0, Cr(1, l)) || 1
    };
    let O = !0;
    function C(x) {
      const E = x[0].intersectionRatio;
      if (E !== l) {
        if (!O)
          return s();
        E ? s(!1, E) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      E === 1 && !Ig(u, t.getBoundingClientRect()) && s(), O = !1;
    }
    try {
      n = new IntersectionObserver(C, {
        ...k,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(C, k);
    }
    n.observe(t);
  }
  return s(!0), i;
}
function fk(t, e, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, u = Du(t), d = o || i ? [...u ? ui(u) : [], ...ui(e)] : [];
  d.forEach((b) => {
    o && b.addEventListener("scroll", n, {
      passive: !0
    }), i && b.addEventListener("resize", n);
  });
  const h = u && a ? pk(u, n) : null;
  let p = -1, v = null;
  s && (v = new ResizeObserver((b) => {
    let [k] = b;
    k && k.target === u && v && (v.unobserve(e), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var O;
      (O = v) == null || O.observe(e);
    })), n();
  }), u && !l && v.observe(u), v.observe(e));
  let m, y = l ? Ur(t) : null;
  l && w();
  function w() {
    const b = Ur(t);
    y && !Ig(y, b) && n(), y = b, m = requestAnimationFrame(w);
  }
  return n(), () => {
    var b;
    d.forEach((k) => {
      o && k.removeEventListener("scroll", n), i && k.removeEventListener("resize", n);
    }), h?.(), (b = v) == null || b.disconnect(), v = null, l && cancelAnimationFrame(m);
  };
}
const Rg = I3, Bg = R3, jg = V3, gk = j3, vk = H3, Kg = D3, mk = B3, Fg = (t, e, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: hk,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return A3(t, e, {
    ...o,
    platform: i
  });
};
function Ar(t) {
  return typeof t == "function" ? t() : t;
}
function Zg(t) {
  return typeof window > "u" ? 1 : (t.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Od(t, e) {
  const n = Zg(t);
  return Math.round(e * n) / n;
}
function yk(t) {
  return {
    [`--bits-${t}-content-transform-origin`]: "var(--bits-floating-transform-origin)",
    [`--bits-${t}-content-available-width`]: "var(--bits-floating-available-width)",
    [`--bits-${t}-content-available-height`]: "var(--bits-floating-available-height)",
    [`--bits-${t}-anchor-width`]: "var(--bits-floating-anchor-width)",
    [`--bits-${t}-anchor-height`]: "var(--bits-floating-anchor-height)"
  };
}
function wk(t) {
  const e = t.whileElementsMounted, n = /* @__PURE__ */ $(() => Ar(t.open) ?? !0), r = /* @__PURE__ */ $(() => Ar(t.middleware)), o = /* @__PURE__ */ $(() => Ar(t.transform) ?? !0), i = /* @__PURE__ */ $(() => Ar(t.placement) ?? "bottom"), s = /* @__PURE__ */ $(() => Ar(t.strategy) ?? "absolute"), a = /* @__PURE__ */ $(() => Ar(t.sideOffset) ?? 0), l = /* @__PURE__ */ $(() => Ar(t.alignOffset) ?? 0), u = t.reference;
  let d = /* @__PURE__ */ me(0), h = /* @__PURE__ */ me(0);
  const p = Nn(null);
  let v = /* @__PURE__ */ me(pt(c(s))), m = /* @__PURE__ */ me(pt(c(i))), y = /* @__PURE__ */ me(pt({})), w = /* @__PURE__ */ me(!1), b = !1, k = 0;
  const O = /* @__PURE__ */ $(() => {
    const A = p.current ? Od(p.current, c(d)) : c(d), D = p.current ? Od(p.current, c(h)) : c(h);
    return c(o) ? {
      position: c(v),
      left: "0",
      top: "0",
      transform: `translate(${A}px, ${D}px)`,
      ...p.current && Zg(p.current) >= 1.5 && { willChange: "transform" }
    } : {
      position: c(v),
      left: `${A}px`,
      top: `${D}px`
    };
  });
  let C;
  function x() {
    if (u.current === null || p.current === null) return;
    const A = u.current, D = p.current, _ = ++k;
    Fg(A, D, {
      middleware: c(r),
      placement: c(i),
      strategy: c(s)
    }).then((M) => {
      if (!(_ !== k || u.current !== A || p.current !== D)) {
        if (bk(A)) {
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
          const S = Math.max(Math.abs(c(a)), Math.abs(c(l)), 15);
          if (M.x <= S && M.y <= S) return;
        }
        K(d, M.x, !0), K(h, M.y, !0), K(v, M.strategy, !0), K(m, M.placement, !0), K(y, M.middlewareData, !0), K(w, !0);
      }
    });
  }
  function E() {
    typeof C == "function" && (C(), C = void 0), k++;
  }
  function V() {
    if (E(), e === void 0) {
      x();
      return;
    }
    c(n) && (u.current === null || p.current === null || (C = e(u.current, p.current, x)));
  }
  function H() {
    !c(n) && p.current === null && K(w, !1);
  }
  function I() {
    return [
      c(r),
      c(i),
      c(s),
      c(a),
      c(l),
      c(n)
    ];
  }
  return He(() => {
    e === void 0 && c(n) && x();
  }), He(V), He(() => {
    if (e !== void 0) {
      if (I(), !c(n)) {
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
      x();
    }
  }), He(H), He(() => E), {
    floating: p,
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
      return c(O);
    },
    get update() {
      return x;
    }
  };
}
function bk(t) {
  return t instanceof Element ? !t.isConnected || t instanceof HTMLElement && t.hidden ? !0 : t.getClientRects().length === 0 : !1;
}
const xk = { top: "bottom", right: "left", bottom: "top", left: "right" }, Vu = new zr("Floating.Root"), Pd = new zr("Floating.Content"), Hu = new zr("Floating.Root");
class Rs {
  static create(e = !1) {
    return e ? Hu.set(new Rs()) : Vu.set(new Rs());
  }
  anchorNode = Nn(null);
  customAnchorNode = Nn(null);
  triggerNode = Nn(null);
  constructor() {
    He(() => {
      this.customAnchorNode.current ? typeof this.customAnchorNode.current == "string" ? this.anchorNode.current = document.querySelector(this.customAnchorNode.current) : this.anchorNode.current = this.customAnchorNode.current : this.anchorNode.current = this.triggerNode.current;
    });
  }
}
class Bs {
  static create(e, n = !1) {
    return n ? Pd.set(new Bs(e, Hu.get())) : Pd.set(new Bs(e, Vu.get()));
  }
  opts;
  root;
  // nodes
  contentRef = Nn(null);
  wrapperRef = Nn(null);
  arrowRef = Nn(null);
  contentAttachment = xr(this.contentRef);
  wrapperAttachment = xr(this.wrapperRef);
  arrowAttachment = xr(this.arrowRef);
  // ids
  arrowId = Nn(Vs());
  #e = /* @__PURE__ */ $(() => {
    if (typeof this.opts.style == "string") return Fo(this.opts.style);
    if (!this.opts.style) return {};
  });
  #t = void 0;
  #n = new u5(() => this.arrowRef.current ?? void 0);
  #r = /* @__PURE__ */ $(() => this.#n?.width ?? 0);
  #o = /* @__PURE__ */ $(() => this.#n?.height ?? 0);
  #i = /* @__PURE__ */ $(() => this.opts.side?.current + (this.opts.align.current !== "center" ? `-${this.opts.align.current}` : ""));
  #a = /* @__PURE__ */ $(() => Array.isArray(this.opts.collisionBoundary.current) ? this.opts.collisionBoundary.current : [this.opts.collisionBoundary.current]);
  #s = /* @__PURE__ */ $(() => c(this.#a).length > 0);
  get hasExplicitBoundaries() {
    return c(this.#s);
  }
  set hasExplicitBoundaries(e) {
    K(this.#s, e);
  }
  #l = /* @__PURE__ */ $(() => ({
    padding: this.opts.collisionPadding.current,
    boundary: c(this.#a).filter(_5),
    altBoundary: this.hasExplicitBoundaries
  }));
  get detectOverflowOptions() {
    return c(this.#l);
  }
  set detectOverflowOptions(e) {
    K(this.#l, e);
  }
  #u = /* @__PURE__ */ me(void 0);
  #c = /* @__PURE__ */ me(void 0);
  #d = /* @__PURE__ */ me(void 0);
  #h = /* @__PURE__ */ me(void 0);
  #f = /* @__PURE__ */ $(() => [
    Rg({
      mainAxis: this.opts.sideOffset.current + c(this.#o),
      alignmentAxis: this.opts.alignOffset.current
    }),
    this.opts.avoidCollisions.current && Bg({
      mainAxis: !0,
      crossAxis: !1,
      limiter: this.opts.sticky.current === "partial" ? mk() : void 0,
      ...this.detectOverflowOptions
    }),
    this.opts.avoidCollisions.current && jg({ ...this.detectOverflowOptions }),
    gk({
      ...this.detectOverflowOptions,
      apply: ({ rects: e, availableWidth: n, availableHeight: r }) => {
        const { width: o, height: i } = e.reference;
        K(this.#u, n, !0), K(this.#c, r, !0), K(this.#d, o, !0), K(this.#h, i, !0);
      }
    }),
    this.arrowRef.current && Kg({
      element: this.arrowRef.current,
      padding: this.opts.arrowPadding.current
    }),
    kk({
      arrowWidth: c(this.#r),
      arrowHeight: c(this.#o)
    }),
    this.opts.hideWhenDetached.current && vk({ strategy: "referenceHidden", ...this.detectOverflowOptions })
  ].filter(Boolean));
  get middleware() {
    return c(this.#f);
  }
  set middleware(e) {
    K(this.#f, e);
  }
  floating;
  #p = /* @__PURE__ */ $(() => Ck(this.floating.placement));
  get placedSide() {
    return c(this.#p);
  }
  set placedSide(e) {
    K(this.#p, e);
  }
  #y = /* @__PURE__ */ $(() => $k(this.floating.placement));
  get placedAlign() {
    return c(this.#y);
  }
  set placedAlign(e) {
    K(this.#y, e);
  }
  #v = /* @__PURE__ */ $(() => this.floating.middlewareData.arrow?.x ?? 0);
  get arrowX() {
    return c(this.#v);
  }
  set arrowX(e) {
    K(this.#v, e);
  }
  #w = /* @__PURE__ */ $(() => this.floating.middlewareData.arrow?.y ?? 0);
  get arrowY() {
    return c(this.#w);
  }
  set arrowY(e) {
    K(this.#w, e);
  }
  #m = /* @__PURE__ */ $(() => this.floating.middlewareData.arrow?.centerOffset !== 0);
  get cannotCenterArrow() {
    return c(this.#m);
  }
  set cannotCenterArrow(e) {
    K(this.#m, e);
  }
  #g = /* @__PURE__ */ me();
  get contentZIndex() {
    return c(this.#g);
  }
  set contentZIndex(e) {
    K(this.#g, e, !0);
  }
  #b = /* @__PURE__ */ $(() => xk[this.placedSide]);
  get arrowBaseSide() {
    return c(this.#b);
  }
  set arrowBaseSide(e) {
    K(this.#b, e);
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
    K(this.#x, e);
  }
  #k = /* @__PURE__ */ $(() => ({
    "data-side": this.placedSide,
    "data-align": this.placedAlign,
    style: wu({ ...c(this.#e) }),
    ...this.contentAttachment
  }));
  get props() {
    return c(this.#k);
  }
  set props(e) {
    K(this.#k, e);
  }
  #C = /* @__PURE__ */ $(() => ({
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
    this.opts = e, this.root = n, this.#t = e.updatePositionStrategy, e.customAnchor && (this.root.customAnchorNode.current = e.customAnchor.current), wt(() => e.customAnchor.current, (r) => {
      this.root.customAnchorNode.current = r;
    }), this.floating = wk({
      strategy: () => this.opts.strategy.current,
      placement: () => c(this.#i),
      middleware: () => this.middleware,
      reference: this.root.anchorNode,
      whileElementsMounted: (...r) => fk(...r, {
        animationFrame: this.#t?.current === "always"
      }),
      open: () => this.opts.enabled.current,
      sideOffset: () => this.opts.sideOffset.current,
      alignOffset: () => this.opts.alignOffset.current
    }), He(() => {
      this.floating.isPositioned && this.opts.onPlaced?.current();
    }), wt(() => this.contentRef.current, (r) => {
      if (!r || !this.opts.enabled.current) return;
      const o = og(r), i = o.requestAnimationFrame(() => {
        if (this.contentRef.current !== r || !this.opts.enabled.current) return;
        const s = o.getComputedStyle(r).zIndex;
        s !== this.contentZIndex && (this.contentZIndex = s);
      });
      return () => {
        o.cancelAnimationFrame(i);
      };
    }), He(() => {
      this.floating.floating.current = this.wrapperRef.current;
    });
  }
}
class js {
  static create(e, n = !1) {
    return n ? new js(e, Hu.get()) : new js(e, Vu.get());
  }
  opts;
  root;
  constructor(e, n) {
    this.opts = e, this.root = n, e.virtualEl && e.virtualEl.current ? n.triggerNode = N7(e.virtualEl.current) : n.triggerNode = e.ref;
  }
}
function kk(t) {
  return {
    name: "transformOrigin",
    options: t,
    fn(e) {
      const { placement: n, rects: r, middlewareData: o } = e, i = o.arrow?.centerOffset !== 0, s = i ? 0 : t.arrowWidth, a = i ? 0 : t.arrowHeight, [l, u] = Lu(n), d = { start: "0%", center: "50%", end: "100%" }[u], h = (o.arrow?.x ?? 0) + s / 2, p = (o.arrow?.y ?? 0) + a / 2;
      let v = "", m = "";
      return l === "bottom" ? (v = i ? d : `${h}px`, m = `${-a}px`) : l === "top" ? (v = i ? d : `${h}px`, m = `${r.floating.height + a}px`) : l === "right" ? (v = `${-a}px`, m = i ? d : `${p}px`) : l === "left" && (v = `${r.floating.width + a}px`, m = i ? d : `${p}px`), { data: { x: v, y: m } };
    }
  };
}
function Lu(t) {
  const [e, n = "center"] = t.split("-");
  return [e, n];
}
function Ck(t) {
  return Lu(t)[0];
}
function $k(t) {
  return Lu(t)[1];
}
function Wg(t, e) {
  ae(e, !0);
  let n = g(e, "children", 7), r = g(e, "tooltip", 7, !1);
  Rs.create(r());
  var o = {
    get children() {
      return n();
    },
    set children(a) {
      n(a), f();
    },
    get tooltip() {
      return r();
    },
    set tooltip(a = !1) {
      r(a), f();
    }
  }, i = he(), s = J(i);
  return Ee(s, () => n() ?? Re), T(t, i), le(o);
}
ie(Wg, { children: {}, tooltip: {} }, [], [], !0);
class Sk {
  #e;
  #t = /* @__PURE__ */ $(() => this.#e.candidateValues());
  #n;
  constructor(e) {
    this.#e = e, this.#n = xg("", { afterMs: 1e3, getWindow: this.#e.getWindow }), this.handleTypeaheadSearch = this.handleTypeaheadSearch.bind(this), this.resetTypeahead = this.resetTypeahead.bind(this);
  }
  handleTypeaheadSearch(e) {
    if (!this.#e.enabled() || !c(this.#t).length) return;
    this.#n.current = this.#n.current + e;
    const n = this.#e.getCurrentItem(), r = c(this.#t).find((a) => a === n) ?? "", o = c(this.#t).map((a) => a ?? ""), i = xu(o, this.#n.current, r), s = c(this.#t).find((a) => a === i);
    return s && this.#e.onMatch(s), s;
  }
  resetTypeahead() {
    this.#n.current = "";
  }
}
const _k = [Zo, ug, ag], Ok = [ao, lg, sg], Pk = [..._k, ...Ok], Ek = bu({
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
}), Ni = new zr("Select.Root | Combobox.Root"), Xg = new zr("Select.Content | Combobox.Content");
class qg {
  opts;
  #e = /* @__PURE__ */ me(!1);
  get touchedInput() {
    return c(this.#e);
  }
  set touchedInput(e) {
    K(this.#e, e, !0);
  }
  #t = /* @__PURE__ */ me(null);
  get inputNode() {
    return c(this.#t);
  }
  set inputNode(e) {
    K(this.#t, e, !0);
  }
  #n = /* @__PURE__ */ me(null);
  get contentNode() {
    return c(this.#n);
  }
  set contentNode(e) {
    K(this.#n, e, !0);
  }
  contentPresence;
  #r = /* @__PURE__ */ me(null);
  get viewportNode() {
    return c(this.#r);
  }
  set viewportNode(e) {
    K(this.#r, e, !0);
  }
  #o = /* @__PURE__ */ me(null);
  get triggerNode() {
    return c(this.#o);
  }
  set triggerNode(e) {
    K(this.#o, e, !0);
  }
  #i = /* @__PURE__ */ me("");
  get valueId() {
    return c(this.#i);
  }
  set valueId(e) {
    K(this.#i, e, !0);
  }
  #a = /* @__PURE__ */ me(null);
  get highlightedNode() {
    return c(this.#a);
  }
  set highlightedNode(e) {
    K(this.#a, e, !0);
  }
  #s = /* @__PURE__ */ $(() => this.highlightedNode ? this.highlightedNode.getAttribute("data-value") : null);
  get highlightedValue() {
    return c(this.#s);
  }
  set highlightedValue(e) {
    K(this.#s, e);
  }
  #l = /* @__PURE__ */ $(() => {
    if (this.highlightedNode)
      return this.highlightedNode.id;
  });
  get highlightedId() {
    return c(this.#l);
  }
  set highlightedId(e) {
    K(this.#l, e);
  }
  #u = /* @__PURE__ */ $(() => this.highlightedNode ? this.highlightedNode.getAttribute("data-label") : null);
  get highlightedLabel() {
    return c(this.#u);
  }
  set highlightedLabel(e) {
    K(this.#u, e);
  }
  #c = /* @__PURE__ */ me(!1);
  get contentIsPositioned() {
    return c(this.#c);
  }
  set contentIsPositioned(e) {
    K(this.#c, e, !0);
  }
  isUsingKeyboard = !1;
  isCombobox = !1;
  domContext = new Pi(() => null);
  constructor(e) {
    this.opts = e, this.isCombobox = e.isCombobox, this.contentPresence = new P5({
      ref: pe(() => this.contentNode),
      open: this.opts.open,
      onComplete: () => {
        this.opts.onOpenChangeComplete.current(this.opts.open.current);
      }
    }), jt(() => {
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
  getBitsAttr = (e) => Ek.getAttr(e, this.isCombobox ? "combobox" : void 0);
}
class Nk extends qg {
  opts;
  isMulti = !1;
  #e = /* @__PURE__ */ $(() => this.opts.value.current !== "");
  get hasValue() {
    return c(this.#e);
  }
  set hasValue(e) {
    K(this.#e, e);
  }
  #t = /* @__PURE__ */ $(() => this.opts.items.current.length ? this.opts.items.current.find((e) => e.value === this.opts.value.current)?.label ?? "" : "");
  get currentLabel() {
    return c(this.#t);
  }
  set currentLabel(e) {
    K(this.#t, e);
  }
  #n = /* @__PURE__ */ $(() => this.opts.items.current.length ? this.opts.items.current.filter((e) => !e.disabled).map((e) => e.label) : []);
  get candidateLabels() {
    return c(this.#n);
  }
  set candidateLabels(e) {
    K(this.#n, e);
  }
  #r = /* @__PURE__ */ $(() => !(this.isMulti || this.opts.items.current.length === 0));
  get dataTypeaheadEnabled() {
    return c(this.#r);
  }
  set dataTypeaheadEnabled(e) {
    K(this.#r, e);
  }
  constructor(e) {
    super(e), this.opts = e, He(() => {
      !this.opts.open.current && this.highlightedNode && this.setHighlightedNode(null);
    }), wt(() => this.opts.open.current, () => {
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
    Oi(() => {
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
class zk extends qg {
  opts;
  isMulti = !0;
  #e = /* @__PURE__ */ $(() => this.opts.value.current.length > 0);
  get hasValue() {
    return c(this.#e);
  }
  set hasValue(e) {
    K(this.#e, e);
  }
  constructor(e) {
    super(e), this.opts = e, He(() => {
      !this.opts.open.current && this.highlightedNode && this.setHighlightedNode(null);
    }), wt(() => this.opts.open.current, () => {
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
    Oi(() => {
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
class Mk {
  static create(e) {
    const { type: n, ...r } = e, o = n === "single" ? new Nk(r) : new zk(r);
    return Ni.set(o);
  }
}
class Iu {
  static create(e) {
    return new Iu(e, Ni.get());
  }
  opts;
  root;
  attachment;
  #e;
  #t;
  constructor(e, n) {
    this.opts = e, this.root = n, this.attachment = xr(e.ref, (r) => this.root.triggerNode = r), this.root.domContext = new Pi(e.ref), this.#e = new o3({
      getCurrentItem: () => this.root.highlightedNode,
      onMatch: (r) => {
        this.root.setHighlightedNode(r);
      },
      getActiveElement: () => this.root.domContext.getActiveElement(),
      getWindow: () => this.root.domContext.getWindow()
    }), this.#t = new Sk({
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
    if (this.root.isUsingKeyboard = !0, (e.key === ao || e.key === Zo) && e.preventDefault(), !this.root.opts.open.current) {
      if (e.key === dl || e.key === os || e.key === Zo || e.key === ao)
        e.preventDefault(), this.root.handleOpen();
      else if (!this.root.isMulti && this.root.dataTypeaheadEnabled) {
        this.#t.handleTypeaheadSearch(e.key);
        return;
      }
      if (this.root.hasValue) return;
      const s = this.root.getCandidateNodes();
      if (!s.length) return;
      if (e.key === Zo) {
        const a = s[0];
        this.root.setHighlightedNode(a);
      } else if (e.key === ao) {
        const a = s[s.length - 1];
        this.root.setHighlightedNode(a);
      }
      return;
    }
    if (e.key === cd) {
      this.root.handleClose();
      return;
    }
    if ((e.key === dl || // if we're currently "typing ahead", we don't want to select the item
    // just yet as the item the user is trying to get to may have a space in it,
    // so we defer handling the close for this case until further down
    e.key === os && this.#e.search === "") && !e.isComposing && (e.preventDefault(), this.#o()))
      return;
    if (e.key === ao && e.altKey && this.root.handleClose(), Pk.includes(e.key)) {
      e.preventDefault();
      const s = this.root.getCandidateNodes(), a = this.root.highlightedNode, l = a ? s.indexOf(a) : -1, u = this.root.opts.loop.current;
      let d;
      if (e.key === Zo ? d = Q5(s, l, u) : e.key === ao ? d = e3(s, l, u) : e.key === lg ? d = t3(s, l, 10, u) : e.key === ug ? d = n3(s, l, 10, u) : e.key === ag ? d = s[0] : e.key === sg && (d = s[s.length - 1]), !d) return;
      this.root.setHighlightedNode(d);
      return;
    }
    const n = e.ctrlKey || e.altKey || e.metaKey, r = e.key.length === 1, o = e.key === os, i = this.root.getCandidateNodes();
    if (e.key !== cd) {
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
    "aria-expanded": cl(this.root.opts.open.current),
    "aria-activedescendant": this.root.highlightedId,
    "data-state": ig(this.root.opts.open.current),
    "data-disabled": zs(this.root.opts.disabled.current),
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
class Ru {
  static create(e) {
    return Xg.set(new Ru(e, Ni.get()));
  }
  opts;
  root;
  attachment;
  #e = /* @__PURE__ */ me(!1);
  get isPositioned() {
    return c(this.#e);
  }
  set isPositioned(e) {
    K(this.#e, e, !0);
  }
  domContext;
  constructor(e, n) {
    this.opts = e, this.root = n, this.attachment = xr(e.ref, (r) => this.root.contentNode = r), this.domContext = new Pi(this.opts.ref), this.root.domContext === null && (this.root.domContext = this.domContext), No(() => {
      this.root.contentNode = null, this.root.contentIsPositioned = !1, this.isPositioned = !1;
    }), wt(() => this.root.opts.open.current, () => {
      this.root.opts.open.current || (this.root.contentIsPositioned = !1, this.isPositioned = !1);
    }), wt([() => this.isPositioned, () => this.root.highlightedNode], () => {
      !this.isPositioned || !this.root.highlightedNode || this.root.scrollHighlightedNodeIntoView(this.root.highlightedNode);
    }), this.onpointermove = this.onpointermove.bind(this);
  }
  onpointermove(e) {
    this.root.isUsingKeyboard = !1;
  }
  #t = /* @__PURE__ */ $(() => yk(this.root.isCombobox ? "combobox" : "select"));
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
    K(this.#n, e);
  }
  #r = /* @__PURE__ */ $(() => ({
    id: this.opts.id.current,
    role: "listbox",
    "aria-multiselectable": this.root.isMulti ? "true" : void 0,
    "data-state": ig(this.root.opts.open.current),
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
class Bu {
  static create(e) {
    return new Bu(e, Ni.get());
  }
  opts;
  root;
  attachment;
  #e = /* @__PURE__ */ $(() => this.root.includesItem(this.opts.value.current));
  get isSelected() {
    return c(this.#e);
  }
  set isSelected(e) {
    K(this.#e, e);
  }
  #t = /* @__PURE__ */ $(() => this.root.highlightedValue === this.opts.value.current);
  get isHighlighted() {
    return c(this.#t);
  }
  set isHighlighted(e) {
    K(this.#t, e);
  }
  prevHighlighted = new c5(() => this.isHighlighted);
  #n = /* @__PURE__ */ me(!1);
  get mounted() {
    return c(this.#n);
  }
  set mounted(e) {
    K(this.#n, e, !0);
  }
  constructor(e, n) {
    this.opts = e, this.root = n, this.attachment = xr(e.ref), wt([() => this.isHighlighted, () => this.prevHighlighted.current], () => {
      this.isHighlighted ? this.opts.onHighlight.current() : this.prevHighlighted.current && this.opts.onUnhighlight.current();
    }), wt(() => this.mounted, () => {
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
      if (e.pointerType === "touch" && !hl) {
        ft(
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
    "data-disabled": zs(this.opts.disabled.current),
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
class ju {
  static create(e) {
    return new ju(e, Ni.get());
  }
  opts;
  root;
  #e = /* @__PURE__ */ $(() => this.root.opts.name.current !== "");
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
  #t = /* @__PURE__ */ $(() => ({
    disabled: ud(this.root.opts.disabled.current),
    required: ud(this.root.opts.required.current),
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
class Ku {
  static create(e) {
    return new Ku(e, Xg.get());
  }
  opts;
  content;
  root;
  attachment;
  #e = /* @__PURE__ */ me(0);
  get prevScrollTop() {
    return c(this.#e);
  }
  set prevScrollTop(e) {
    K(this.#e, e, !0);
  }
  constructor(e, n) {
    this.opts = e, this.content = n, this.root = n.root, this.attachment = xr(e.ref, (r) => {
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
    K(this.#t, e);
  }
}
function ss(t, e) {
  ae(e, !0);
  let n = g(e, "value", 15), r = g(e, "autocomplete", 7);
  const o = ju.create({ value: pe(() => n()) });
  var i = {
    get value() {
      return n();
    },
    set value(u) {
      n(u), f();
    },
    get autocomplete() {
      return r();
    },
    set autocomplete(u) {
      r(u), f();
    }
  }, s = he(), a = J(s);
  {
    var l = (u) => {
      Eu(u, Ie(() => o.props, {
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
  return T(t, s), le(i);
}
ie(ss, { value: {}, autocomplete: {} }, [], [], !0);
function Yg(t, e) {
  ae(e, !0);
  let n = g(e, "id", 7), r = g(e, "children", 7), o = g(e, "virtualEl", 7), i = g(e, "ref", 7), s = g(e, "tooltip", 7, !1);
  js.create(
    {
      id: pe(() => n()),
      virtualEl: pe(() => o()),
      ref: i()
    },
    s()
  );
  var a = {
    get id() {
      return n();
    },
    set id(d) {
      n(d), f();
    },
    get children() {
      return r();
    },
    set children(d) {
      r(d), f();
    },
    get virtualEl() {
      return o();
    },
    set virtualEl(d) {
      o(d), f();
    },
    get ref() {
      return i();
    },
    set ref(d) {
      i(d), f();
    },
    get tooltip() {
      return s();
    },
    set tooltip(d = !1) {
      s(d), f();
    }
  }, l = he(), u = J(l);
  return Ee(u, () => r() ?? Re), T(t, l), le(a);
}
ie(Yg, { id: {}, children: {}, virtualEl: {}, ref: {}, tooltip: {} }, [], [], !0);
function Ug(t, e) {
  ae(e, !0);
  let n = g(e, "content", 7), r = g(e, "side", 7, "bottom"), o = g(e, "sideOffset", 7, 0), i = g(e, "align", 7, "center"), s = g(e, "alignOffset", 7, 0), a = g(e, "id", 7), l = g(e, "arrowPadding", 7, 0), u = g(e, "avoidCollisions", 7, !0), d = g(e, "collisionBoundary", 23, () => []), h = g(e, "collisionPadding", 7, 0), p = g(e, "hideWhenDetached", 7, !1), v = g(e, "onPlaced", 7, () => {
  }), m = g(e, "sticky", 7, "partial"), y = g(e, "updatePositionStrategy", 7, "optimized"), w = g(e, "strategy", 7, "fixed"), b = g(e, "dir", 7, "ltr"), k = g(e, "style", 23, () => ({})), O = g(e, "wrapperId", 23, Vs), C = g(e, "customAnchor", 7, null), x = g(e, "enabled", 7), E = g(e, "tooltip", 7, !1);
  const V = Bs.create(
    {
      side: pe(() => r()),
      sideOffset: pe(() => o()),
      align: pe(() => i()),
      alignOffset: pe(() => s()),
      id: pe(() => a()),
      arrowPadding: pe(() => l()),
      avoidCollisions: pe(() => u()),
      collisionBoundary: pe(() => d()),
      collisionPadding: pe(() => h()),
      hideWhenDetached: pe(() => p()),
      onPlaced: pe(() => v()),
      sticky: pe(() => m()),
      updatePositionStrategy: pe(() => y()),
      strategy: pe(() => w()),
      dir: pe(() => b()),
      style: pe(() => k()),
      enabled: pe(() => x()),
      wrapperId: pe(() => O()),
      customAnchor: pe(() => C())
    },
    E()
  ), H = /* @__PURE__ */ $(() => An(V.wrapperProps, { style: { pointerEvents: "auto" } }));
  var I = {
    get content() {
      return n();
    },
    set content(_) {
      n(_), f();
    },
    get side() {
      return r();
    },
    set side(_ = "bottom") {
      r(_), f();
    },
    get sideOffset() {
      return o();
    },
    set sideOffset(_ = 0) {
      o(_), f();
    },
    get align() {
      return i();
    },
    set align(_ = "center") {
      i(_), f();
    },
    get alignOffset() {
      return s();
    },
    set alignOffset(_ = 0) {
      s(_), f();
    },
    get id() {
      return a();
    },
    set id(_) {
      a(_), f();
    },
    get arrowPadding() {
      return l();
    },
    set arrowPadding(_ = 0) {
      l(_), f();
    },
    get avoidCollisions() {
      return u();
    },
    set avoidCollisions(_ = !0) {
      u(_), f();
    },
    get collisionBoundary() {
      return d();
    },
    set collisionBoundary(_ = []) {
      d(_), f();
    },
    get collisionPadding() {
      return h();
    },
    set collisionPadding(_ = 0) {
      h(_), f();
    },
    get hideWhenDetached() {
      return p();
    },
    set hideWhenDetached(_ = !1) {
      p(_), f();
    },
    get onPlaced() {
      return v();
    },
    set onPlaced(_ = () => {
    }) {
      v(_), f();
    },
    get sticky() {
      return m();
    },
    set sticky(_ = "partial") {
      m(_), f();
    },
    get updatePositionStrategy() {
      return y();
    },
    set updatePositionStrategy(_ = "optimized") {
      y(_), f();
    },
    get strategy() {
      return w();
    },
    set strategy(_ = "fixed") {
      w(_), f();
    },
    get dir() {
      return b();
    },
    set dir(_ = "ltr") {
      b(_), f();
    },
    get style() {
      return k();
    },
    set style(_ = {}) {
      k(_), f();
    },
    get wrapperId() {
      return O();
    },
    set wrapperId(_ = Vs()) {
      O(_), f();
    },
    get customAnchor() {
      return C();
    },
    set customAnchor(_ = null) {
      C(_), f();
    },
    get enabled() {
      return x();
    },
    set enabled(_) {
      x(_), f();
    },
    get tooltip() {
      return E();
    },
    set tooltip(_ = !1) {
      E(_), f();
    }
  }, A = he(), D = J(A);
  return Ee(D, () => n() ?? Re, () => ({ props: V.props, wrapperProps: c(H) })), T(t, A), le(I);
}
ie(
  Ug,
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
function Gg(t, e) {
  ae(e, !0);
  let n = g(e, "content", 7), r = g(e, "onPlaced", 7);
  xn(() => {
    r()?.();
  });
  var o = {
    get content() {
      return n();
    },
    set content(a) {
      n(a), f();
    },
    get onPlaced() {
      return r();
    },
    set onPlaced(a) {
      r(a), f();
    }
  }, i = he(), s = J(i);
  return Ee(s, () => n() ?? Re, () => ({ props: {}, wrapperProps: {} })), T(t, i), le(o);
}
ie(Gg, { content: {}, onPlaced: {} }, [], [], !0);
function Jg(t, e) {
  ae(e, !0);
  let n = g(e, "content", 7), r = g(e, "isStatic", 7, !1), o = g(e, "onPlaced", 7), i = /* @__PURE__ */ De(e, [
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
      n(h), f();
    },
    get isStatic() {
      return r();
    },
    set isStatic(h = !1) {
      r(h), f();
    },
    get onPlaced() {
      return o();
    },
    set onPlaced(h) {
      o(h), f();
    }
  }, a = he(), l = J(a);
  {
    var u = (h) => {
      Gg(h, {
        get content() {
          return n();
        },
        get onPlaced() {
          return o();
        }
      });
    }, d = (h) => {
      Ug(h, Ie(
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
  return T(t, a), le(s);
}
ie(Jg, { content: {}, isStatic: {}, onPlaced: {} }, [], [], !0);
var Tk = /* @__PURE__ */ ne("<!> <!>", 1);
function Fu(t, e) {
  ae(e, !0);
  let n = g(e, "popper", 7), r = g(e, "onEscapeKeydown", 7), o = g(e, "escapeKeydownBehavior", 7), i = g(e, "preventOverflowTextSelection", 7), s = g(e, "id", 7), a = g(e, "onPointerDown", 7), l = g(e, "onPointerUp", 7), u = g(e, "side", 7), d = g(e, "sideOffset", 7), h = g(e, "align", 7), p = g(e, "alignOffset", 7), v = g(e, "arrowPadding", 7), m = g(e, "avoidCollisions", 7), y = g(e, "collisionBoundary", 7), w = g(e, "collisionPadding", 7), b = g(e, "sticky", 7), k = g(e, "hideWhenDetached", 7), O = g(e, "updatePositionStrategy", 7), C = g(e, "strategy", 7), x = g(e, "dir", 7), E = g(e, "preventScroll", 7), V = g(e, "wrapperId", 7), H = g(e, "style", 7), I = g(e, "onPlaced", 7), A = g(e, "onInteractOutside", 7), D = g(e, "onCloseAutoFocus", 7), _ = g(e, "onOpenAutoFocus", 7), M = g(e, "onFocusOutside", 7), S = g(e, "interactOutsideBehavior", 7, "close"), P = g(e, "loop", 7), z = g(e, "trapFocus", 7, !0), B = g(e, "isValidEvent", 7, () => !1), q = g(e, "customAnchor", 7, null), U = g(e, "isStatic", 7, !1), N = g(e, "enabled", 7), Y = g(e, "ref", 7), ee = g(e, "tooltip", 7, !1), j = g(e, "contentPointerEvents", 7, "auto"), F = /* @__PURE__ */ De(e, [
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
  const W = /* @__PURE__ */ $(() => E() ?? !0), G = /* @__PURE__ */ $(() => C() ?? (c(W) ? "fixed" : "absolute"));
  var re = {
    get popper() {
      return n();
    },
    set popper(L) {
      n(L), f();
    },
    get onEscapeKeydown() {
      return r();
    },
    set onEscapeKeydown(L) {
      r(L), f();
    },
    get escapeKeydownBehavior() {
      return o();
    },
    set escapeKeydownBehavior(L) {
      o(L), f();
    },
    get preventOverflowTextSelection() {
      return i();
    },
    set preventOverflowTextSelection(L) {
      i(L), f();
    },
    get id() {
      return s();
    },
    set id(L) {
      s(L), f();
    },
    get onPointerDown() {
      return a();
    },
    set onPointerDown(L) {
      a(L), f();
    },
    get onPointerUp() {
      return l();
    },
    set onPointerUp(L) {
      l(L), f();
    },
    get side() {
      return u();
    },
    set side(L) {
      u(L), f();
    },
    get sideOffset() {
      return d();
    },
    set sideOffset(L) {
      d(L), f();
    },
    get align() {
      return h();
    },
    set align(L) {
      h(L), f();
    },
    get alignOffset() {
      return p();
    },
    set alignOffset(L) {
      p(L), f();
    },
    get arrowPadding() {
      return v();
    },
    set arrowPadding(L) {
      v(L), f();
    },
    get avoidCollisions() {
      return m();
    },
    set avoidCollisions(L) {
      m(L), f();
    },
    get collisionBoundary() {
      return y();
    },
    set collisionBoundary(L) {
      y(L), f();
    },
    get collisionPadding() {
      return w();
    },
    set collisionPadding(L) {
      w(L), f();
    },
    get sticky() {
      return b();
    },
    set sticky(L) {
      b(L), f();
    },
    get hideWhenDetached() {
      return k();
    },
    set hideWhenDetached(L) {
      k(L), f();
    },
    get updatePositionStrategy() {
      return O();
    },
    set updatePositionStrategy(L) {
      O(L), f();
    },
    get strategy() {
      return C();
    },
    set strategy(L) {
      C(L), f();
    },
    get dir() {
      return x();
    },
    set dir(L) {
      x(L), f();
    },
    get preventScroll() {
      return E();
    },
    set preventScroll(L) {
      E(L), f();
    },
    get wrapperId() {
      return V();
    },
    set wrapperId(L) {
      V(L), f();
    },
    get style() {
      return H();
    },
    set style(L) {
      H(L), f();
    },
    get onPlaced() {
      return I();
    },
    set onPlaced(L) {
      I(L), f();
    },
    get onInteractOutside() {
      return A();
    },
    set onInteractOutside(L) {
      A(L), f();
    },
    get onCloseAutoFocus() {
      return D();
    },
    set onCloseAutoFocus(L) {
      D(L), f();
    },
    get onOpenAutoFocus() {
      return _();
    },
    set onOpenAutoFocus(L) {
      _(L), f();
    },
    get onFocusOutside() {
      return M();
    },
    set onFocusOutside(L) {
      M(L), f();
    },
    get interactOutsideBehavior() {
      return S();
    },
    set interactOutsideBehavior(L = "close") {
      S(L), f();
    },
    get loop() {
      return P();
    },
    set loop(L) {
      P(L), f();
    },
    get trapFocus() {
      return z();
    },
    set trapFocus(L = !0) {
      z(L), f();
    },
    get isValidEvent() {
      return B();
    },
    set isValidEvent(L = () => !1) {
      B(L), f();
    },
    get customAnchor() {
      return q();
    },
    set customAnchor(L = null) {
      q(L), f();
    },
    get isStatic() {
      return U();
    },
    set isStatic(L = !1) {
      U(L), f();
    },
    get enabled() {
      return N();
    },
    set enabled(L) {
      N(L), f();
    },
    get ref() {
      return Y();
    },
    set ref(L) {
      Y(L), f();
    },
    get tooltip() {
      return ee();
    },
    set tooltip(L = !1) {
      ee(L), f();
    },
    get contentPointerEvents() {
      return j();
    },
    set contentPointerEvents(L = "auto") {
      j(L), f();
    }
  };
  return Jg(t, {
    get isStatic() {
      return U();
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
      return p();
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
      return k();
    },
    get updatePositionStrategy() {
      return O();
    },
    get strategy() {
      return c(G);
    },
    get dir() {
      return x();
    },
    get wrapperId() {
      return V();
    },
    get style() {
      return H();
    },
    get onPlaced() {
      return I();
    },
    get customAnchor() {
      return q();
    },
    get enabled() {
      return N();
    },
    get tooltip() {
      return ee();
    },
    content: (L, te) => {
      let fe = () => te?.().props, ue = () => te?.().wrapperProps;
      var oe = Tk(), ce = J(oe);
      {
        var ve = (de) => {
          vl(de, {
            get preventScroll() {
              return c(W);
            }
          });
        }, ke = (de) => {
          var ye = he(), Pe = J(ye);
          {
            var Q = (Le) => {
              vl(Le, {
                get preventScroll() {
                  return c(W);
                }
              });
            };
            se(
              Pe,
              (Le) => {
                e.forceMount || Le(Q);
              },
              !0
            );
          }
          T(de, ye);
        };
        se(ce, (de) => {
          e.forceMount && N() ? de(ve) : de(ke, !1);
        });
      }
      var be = R(ce, 2);
      $g(be, {
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
          return N();
        },
        get trapFocus() {
          return z();
        },
        get forceMount() {
          return e.forceMount;
        },
        get ref() {
          return Y();
        },
        focusScope: (de, ye) => {
          let Pe = () => ye?.().props;
          Cg(de, {
            get onEscapeKeydown() {
              return r();
            },
            get escapeKeydownBehavior() {
              return o();
            },
            get enabled() {
              return N();
            },
            get ref() {
              return Y();
            },
            children: (Q, Le) => {
              kg(Q, {
                get id() {
                  return s();
                },
                get onInteractOutside() {
                  return A();
                },
                get onFocusOutside() {
                  return M();
                },
                get interactOutsideBehavior() {
                  return S();
                },
                get isValidEvent() {
                  return B();
                },
                get enabled() {
                  return N();
                },
                get ref() {
                  return Y();
                },
                children: (Ae, We) => {
                  let je = () => We?.().props;
                  Sg(Ae, {
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
                      return N();
                    },
                    get ref() {
                      return Y();
                    },
                    children: (tt, it) => {
                      var dt = he(), Qe = J(dt);
                      {
                        let ge = /* @__PURE__ */ $(() => ({
                          props: An(F, fe(), je(), Pe(), { style: { pointerEvents: j() } }),
                          wrapperProps: ue()
                        }));
                        Ee(Qe, () => n() ?? Re, () => c(ge));
                      }
                      T(tt, dt);
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
      }), T(L, oe);
    },
    $$slots: { content: !0 }
  }), le(re);
}
ie(
  Fu,
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
function Qg(t, e) {
  ae(e, !0);
  let n = g(e, "popper", 7), r = g(e, "open", 7), o = g(e, "onEscapeKeydown", 7), i = g(e, "escapeKeydownBehavior", 7), s = g(e, "preventOverflowTextSelection", 7), a = g(e, "id", 7), l = g(e, "onPointerDown", 7), u = g(e, "onPointerUp", 7), d = g(e, "side", 7), h = g(e, "sideOffset", 7), p = g(e, "align", 7), v = g(e, "alignOffset", 7), m = g(e, "arrowPadding", 7), y = g(e, "avoidCollisions", 7), w = g(e, "collisionBoundary", 7), b = g(e, "collisionPadding", 7), k = g(e, "sticky", 7), O = g(e, "hideWhenDetached", 7), C = g(e, "updatePositionStrategy", 7), x = g(e, "strategy", 7), E = g(e, "dir", 7), V = g(e, "preventScroll", 7), H = g(e, "wrapperId", 7), I = g(e, "style", 7), A = g(e, "onPlaced", 7), D = g(e, "onInteractOutside", 7), _ = g(e, "onCloseAutoFocus", 7), M = g(e, "onOpenAutoFocus", 7), S = g(e, "onFocusOutside", 7), P = g(e, "interactOutsideBehavior", 7, "close"), z = g(e, "loop", 7), B = g(e, "trapFocus", 7, !0), q = g(e, "isValidEvent", 7, () => !1), U = g(e, "customAnchor", 7, null), N = g(e, "isStatic", 7, !1), Y = g(e, "ref", 7), ee = g(e, "shouldRender", 7), j = /* @__PURE__ */ De(e, [
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
  var F = {
    get popper() {
      return n();
    },
    set popper(L) {
      n(L), f();
    },
    get open() {
      return r();
    },
    set open(L) {
      r(L), f();
    },
    get onEscapeKeydown() {
      return o();
    },
    set onEscapeKeydown(L) {
      o(L), f();
    },
    get escapeKeydownBehavior() {
      return i();
    },
    set escapeKeydownBehavior(L) {
      i(L), f();
    },
    get preventOverflowTextSelection() {
      return s();
    },
    set preventOverflowTextSelection(L) {
      s(L), f();
    },
    get id() {
      return a();
    },
    set id(L) {
      a(L), f();
    },
    get onPointerDown() {
      return l();
    },
    set onPointerDown(L) {
      l(L), f();
    },
    get onPointerUp() {
      return u();
    },
    set onPointerUp(L) {
      u(L), f();
    },
    get side() {
      return d();
    },
    set side(L) {
      d(L), f();
    },
    get sideOffset() {
      return h();
    },
    set sideOffset(L) {
      h(L), f();
    },
    get align() {
      return p();
    },
    set align(L) {
      p(L), f();
    },
    get alignOffset() {
      return v();
    },
    set alignOffset(L) {
      v(L), f();
    },
    get arrowPadding() {
      return m();
    },
    set arrowPadding(L) {
      m(L), f();
    },
    get avoidCollisions() {
      return y();
    },
    set avoidCollisions(L) {
      y(L), f();
    },
    get collisionBoundary() {
      return w();
    },
    set collisionBoundary(L) {
      w(L), f();
    },
    get collisionPadding() {
      return b();
    },
    set collisionPadding(L) {
      b(L), f();
    },
    get sticky() {
      return k();
    },
    set sticky(L) {
      k(L), f();
    },
    get hideWhenDetached() {
      return O();
    },
    set hideWhenDetached(L) {
      O(L), f();
    },
    get updatePositionStrategy() {
      return C();
    },
    set updatePositionStrategy(L) {
      C(L), f();
    },
    get strategy() {
      return x();
    },
    set strategy(L) {
      x(L), f();
    },
    get dir() {
      return E();
    },
    set dir(L) {
      E(L), f();
    },
    get preventScroll() {
      return V();
    },
    set preventScroll(L) {
      V(L), f();
    },
    get wrapperId() {
      return H();
    },
    set wrapperId(L) {
      H(L), f();
    },
    get style() {
      return I();
    },
    set style(L) {
      I(L), f();
    },
    get onPlaced() {
      return A();
    },
    set onPlaced(L) {
      A(L), f();
    },
    get onInteractOutside() {
      return D();
    },
    set onInteractOutside(L) {
      D(L), f();
    },
    get onCloseAutoFocus() {
      return _();
    },
    set onCloseAutoFocus(L) {
      _(L), f();
    },
    get onOpenAutoFocus() {
      return M();
    },
    set onOpenAutoFocus(L) {
      M(L), f();
    },
    get onFocusOutside() {
      return S();
    },
    set onFocusOutside(L) {
      S(L), f();
    },
    get interactOutsideBehavior() {
      return P();
    },
    set interactOutsideBehavior(L = "close") {
      P(L), f();
    },
    get loop() {
      return z();
    },
    set loop(L) {
      z(L), f();
    },
    get trapFocus() {
      return B();
    },
    set trapFocus(L = !0) {
      B(L), f();
    },
    get isValidEvent() {
      return q();
    },
    set isValidEvent(L = () => !1) {
      q(L), f();
    },
    get customAnchor() {
      return U();
    },
    set customAnchor(L = null) {
      U(L), f();
    },
    get isStatic() {
      return N();
    },
    set isStatic(L = !1) {
      N(L), f();
    },
    get ref() {
      return Y();
    },
    set ref(L) {
      Y(L), f();
    },
    get shouldRender() {
      return ee();
    },
    set shouldRender(L) {
      ee(L), f();
    }
  }, W = he(), G = J(W);
  {
    var re = (L) => {
      Fu(L, Ie(
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
            return p();
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
            return k();
          },
          get hideWhenDetached() {
            return O();
          },
          get updatePositionStrategy() {
            return C();
          },
          get strategy() {
            return x();
          },
          get dir() {
            return E();
          },
          get preventScroll() {
            return V();
          },
          get wrapperId() {
            return H();
          },
          get style() {
            return I();
          },
          get onPlaced() {
            return A();
          },
          get customAnchor() {
            return U();
          },
          get isStatic() {
            return N();
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
            return M();
          },
          get interactOutsideBehavior() {
            return P();
          },
          get loop() {
            return z();
          },
          get trapFocus() {
            return B();
          },
          get isValidEvent() {
            return q();
          },
          get onFocusOutside() {
            return S();
          },
          forceMount: !1,
          get ref() {
            return Y();
          }
        },
        () => j
      ));
    };
    se(G, (L) => {
      ee() && L(re);
    });
  }
  return T(t, W), le(F);
}
ie(
  Qg,
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
function ev(t, e) {
  ae(e, !0);
  let n = g(e, "popper", 7), r = g(e, "onEscapeKeydown", 7), o = g(e, "escapeKeydownBehavior", 7), i = g(e, "preventOverflowTextSelection", 7), s = g(e, "id", 7), a = g(e, "onPointerDown", 7), l = g(e, "onPointerUp", 7), u = g(e, "side", 7), d = g(e, "sideOffset", 7), h = g(e, "align", 7), p = g(e, "alignOffset", 7), v = g(e, "arrowPadding", 7), m = g(e, "avoidCollisions", 7), y = g(e, "collisionBoundary", 7), w = g(e, "collisionPadding", 7), b = g(e, "sticky", 7), k = g(e, "hideWhenDetached", 7), O = g(e, "updatePositionStrategy", 7), C = g(e, "strategy", 7), x = g(e, "dir", 7), E = g(e, "preventScroll", 7), V = g(e, "wrapperId", 7), H = g(e, "style", 7), I = g(e, "onPlaced", 7), A = g(e, "onInteractOutside", 7), D = g(e, "onCloseAutoFocus", 7), _ = g(e, "onOpenAutoFocus", 7), M = g(e, "onFocusOutside", 7), S = g(e, "interactOutsideBehavior", 7, "close"), P = g(e, "loop", 7), z = g(e, "trapFocus", 7, !0), B = g(e, "isValidEvent", 7, () => !1), q = g(e, "customAnchor", 7, null), U = g(e, "isStatic", 7, !1), N = g(e, "enabled", 7), Y = /* @__PURE__ */ De(e, [
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
    set popper(j) {
      n(j), f();
    },
    get onEscapeKeydown() {
      return r();
    },
    set onEscapeKeydown(j) {
      r(j), f();
    },
    get escapeKeydownBehavior() {
      return o();
    },
    set escapeKeydownBehavior(j) {
      o(j), f();
    },
    get preventOverflowTextSelection() {
      return i();
    },
    set preventOverflowTextSelection(j) {
      i(j), f();
    },
    get id() {
      return s();
    },
    set id(j) {
      s(j), f();
    },
    get onPointerDown() {
      return a();
    },
    set onPointerDown(j) {
      a(j), f();
    },
    get onPointerUp() {
      return l();
    },
    set onPointerUp(j) {
      l(j), f();
    },
    get side() {
      return u();
    },
    set side(j) {
      u(j), f();
    },
    get sideOffset() {
      return d();
    },
    set sideOffset(j) {
      d(j), f();
    },
    get align() {
      return h();
    },
    set align(j) {
      h(j), f();
    },
    get alignOffset() {
      return p();
    },
    set alignOffset(j) {
      p(j), f();
    },
    get arrowPadding() {
      return v();
    },
    set arrowPadding(j) {
      v(j), f();
    },
    get avoidCollisions() {
      return m();
    },
    set avoidCollisions(j) {
      m(j), f();
    },
    get collisionBoundary() {
      return y();
    },
    set collisionBoundary(j) {
      y(j), f();
    },
    get collisionPadding() {
      return w();
    },
    set collisionPadding(j) {
      w(j), f();
    },
    get sticky() {
      return b();
    },
    set sticky(j) {
      b(j), f();
    },
    get hideWhenDetached() {
      return k();
    },
    set hideWhenDetached(j) {
      k(j), f();
    },
    get updatePositionStrategy() {
      return O();
    },
    set updatePositionStrategy(j) {
      O(j), f();
    },
    get strategy() {
      return C();
    },
    set strategy(j) {
      C(j), f();
    },
    get dir() {
      return x();
    },
    set dir(j) {
      x(j), f();
    },
    get preventScroll() {
      return E();
    },
    set preventScroll(j) {
      E(j), f();
    },
    get wrapperId() {
      return V();
    },
    set wrapperId(j) {
      V(j), f();
    },
    get style() {
      return H();
    },
    set style(j) {
      H(j), f();
    },
    get onPlaced() {
      return I();
    },
    set onPlaced(j) {
      I(j), f();
    },
    get onInteractOutside() {
      return A();
    },
    set onInteractOutside(j) {
      A(j), f();
    },
    get onCloseAutoFocus() {
      return D();
    },
    set onCloseAutoFocus(j) {
      D(j), f();
    },
    get onOpenAutoFocus() {
      return _();
    },
    set onOpenAutoFocus(j) {
      _(j), f();
    },
    get onFocusOutside() {
      return M();
    },
    set onFocusOutside(j) {
      M(j), f();
    },
    get interactOutsideBehavior() {
      return S();
    },
    set interactOutsideBehavior(j = "close") {
      S(j), f();
    },
    get loop() {
      return P();
    },
    set loop(j) {
      P(j), f();
    },
    get trapFocus() {
      return z();
    },
    set trapFocus(j = !0) {
      z(j), f();
    },
    get isValidEvent() {
      return B();
    },
    set isValidEvent(j = () => !1) {
      B(j), f();
    },
    get customAnchor() {
      return q();
    },
    set customAnchor(j = null) {
      q(j), f();
    },
    get isStatic() {
      return U();
    },
    set isStatic(j = !1) {
      U(j), f();
    },
    get enabled() {
      return N();
    },
    set enabled(j) {
      N(j), f();
    }
  };
  return Fu(t, Ie(
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
        return p();
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
        return k();
      },
      get updatePositionStrategy() {
        return O();
      },
      get strategy() {
        return C();
      },
      get dir() {
        return x();
      },
      get preventScroll() {
        return E();
      },
      get wrapperId() {
        return V();
      },
      get style() {
        return H();
      },
      get onPlaced() {
        return I();
      },
      get customAnchor() {
        return q();
      },
      get isStatic() {
        return U();
      },
      get enabled() {
        return N();
      },
      get onInteractOutside() {
        return A();
      },
      get onCloseAutoFocus() {
        return D();
      },
      get onOpenAutoFocus() {
        return _();
      },
      get interactOutsideBehavior() {
        return S();
      },
      get loop() {
        return P();
      },
      get trapFocus() {
        return z();
      },
      get isValidEvent() {
        return B();
      },
      get onFocusOutside() {
        return M();
      }
    },
    () => Y,
    { forceMount: !0 }
  )), le(ee);
}
ie(
  ev,
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
var Ak = /* @__PURE__ */ ne("<div><div><!></div></div>"), Dk = /* @__PURE__ */ ne("<div><div><!></div></div>");
function bl(t, e) {
  const n = gi();
  ae(e, !0);
  let r = g(e, "id", 23, () => Hn(n)), o = g(e, "ref", 15, null), i = g(e, "forceMount", 7, !1), s = g(e, "side", 7, "bottom"), a = g(e, "onInteractOutside", 7, Be), l = g(e, "onEscapeKeydown", 7, Be), u = g(e, "children", 7), d = g(e, "child", 7), h = g(e, "preventScroll", 7, !1), p = g(e, "style", 7), v = /* @__PURE__ */ De(e, [
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
  const m = Ru.create({
    id: pe(() => r()),
    ref: pe(() => o(), (x) => o(x)),
    onInteractOutside: pe(() => a()),
    onEscapeKeydown: pe(() => l())
  }), y = /* @__PURE__ */ $(() => An(v, m.props));
  var w = {
    get id() {
      return r();
    },
    set id(x = Hn(n)) {
      r(x), f();
    },
    get ref() {
      return o();
    },
    set ref(x = null) {
      o(x), f();
    },
    get forceMount() {
      return i();
    },
    set forceMount(x = !1) {
      i(x), f();
    },
    get side() {
      return s();
    },
    set side(x = "bottom") {
      s(x), f();
    },
    get onInteractOutside() {
      return a();
    },
    set onInteractOutside(x = Be) {
      a(x), f();
    },
    get onEscapeKeydown() {
      return l();
    },
    set onEscapeKeydown(x = Be) {
      l(x), f();
    },
    get children() {
      return u();
    },
    set children(x) {
      u(x), f();
    },
    get child() {
      return d();
    },
    set child(x) {
      d(x), f();
    },
    get preventScroll() {
      return h();
    },
    set preventScroll(x = !1) {
      h(x), f();
    },
    get style() {
      return p();
    },
    set style(x) {
      p(x), f();
    }
  }, b = he(), k = J(b);
  {
    var O = (x) => {
      ev(x, Ie(() => c(y), () => m.popperProps, {
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
        popper: (E, V) => {
          let H = () => V?.().props, I = () => V?.().wrapperProps;
          const A = /* @__PURE__ */ $(() => An(H(), { style: m.props.style }, { style: p() }));
          var D = he(), _ = J(D);
          {
            var M = (P) => {
              var z = he(), B = J(z);
              {
                let q = /* @__PURE__ */ $(() => ({
                  props: c(A),
                  wrapperProps: I(),
                  ...m.snippetProps
                }));
                Ee(B, d, () => c(q));
              }
              T(P, z);
            }, S = (P) => {
              var z = Ak();
              Ue(z, () => ({ ...I() }));
              var B = X(z);
              Ue(B, () => ({ ...c(A) }));
              var q = X(B);
              Ee(q, () => u() ?? Re), Z(B), Z(z), T(P, z);
            };
            se(_, (P) => {
              d() ? P(M) : P(S, !1);
            });
          }
          T(E, D);
        },
        $$slots: { popper: !0 }
      }));
    }, C = (x) => {
      var E = he(), V = J(E);
      {
        var H = (I) => {
          Qg(I, Ie(() => c(y), () => m.popperProps, {
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
            popper: (A, D) => {
              let _ = () => D?.().props, M = () => D?.().wrapperProps;
              const S = /* @__PURE__ */ $(() => An(_(), { style: m.props.style }, { style: p() }));
              var P = he(), z = J(P);
              {
                var B = (U) => {
                  var N = he(), Y = J(N);
                  {
                    let ee = /* @__PURE__ */ $(() => ({
                      props: c(S),
                      wrapperProps: M(),
                      ...m.snippetProps
                    }));
                    Ee(Y, d, () => c(ee));
                  }
                  T(U, N);
                }, q = (U) => {
                  var N = Dk();
                  Ue(N, () => ({ ...M() }));
                  var Y = X(N);
                  Ue(Y, () => ({ ...c(S) }));
                  var ee = X(Y);
                  Ee(ee, () => u() ?? Re), Z(Y), Z(N), T(U, N);
                };
                se(z, (U) => {
                  d() ? U(B) : U(q, !1);
                });
              }
              T(A, P);
            },
            $$slots: { popper: !0 }
          }));
        };
        se(
          V,
          (I) => {
            i() || I(H);
          },
          !0
        );
      }
      T(x, E);
    };
    se(k, (x) => {
      i() ? x(O) : x(C, !1);
    });
  }
  return T(t, b), le(w);
}
ie(
  bl,
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
function tv(t, e) {
  ae(e, !0);
  let n = g(e, "mounted", 15, !1), r = g(e, "onMountedChange", 7, Be);
  d5(() => (n(!0), r()(!0), () => {
    n(!1), r()(!1);
  }));
  var o = {
    get mounted() {
      return n();
    },
    set mounted(i = !1) {
      n(i), f();
    },
    get onMountedChange() {
      return r();
    },
    set onMountedChange(i = Be) {
      r(i), f();
    }
  };
  return le(o);
}
ie(tv, { mounted: {}, onMountedChange: {} }, [], [], !0);
var Vk = /* @__PURE__ */ ne("<div><!></div>"), Hk = /* @__PURE__ */ ne("<!> <!>", 1);
function xl(t, e) {
  const n = gi();
  ae(e, !0);
  let r = g(e, "id", 23, () => Hn(n)), o = g(e, "ref", 15, null), i = g(e, "value", 7), s = g(e, "label", 23, i), a = g(e, "disabled", 7, !1), l = g(e, "children", 7), u = g(e, "child", 7), d = g(e, "onHighlight", 7, Be), h = g(e, "onUnhighlight", 7, Be), p = /* @__PURE__ */ De(e, [
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
  const v = Bu.create({
    id: pe(() => r()),
    ref: pe(() => o(), (x) => o(x)),
    value: pe(() => i()),
    disabled: pe(() => a()),
    label: pe(() => s()),
    onHighlight: pe(() => d()),
    onUnhighlight: pe(() => h())
  }), m = /* @__PURE__ */ $(() => An(p, v.props));
  var y = {
    get id() {
      return r();
    },
    set id(x = Hn(n)) {
      r(x), f();
    },
    get ref() {
      return o();
    },
    set ref(x = null) {
      o(x), f();
    },
    get value() {
      return i();
    },
    set value(x) {
      i(x), f();
    },
    get label() {
      return s();
    },
    set label(x = i) {
      s(x), f();
    },
    get disabled() {
      return a();
    },
    set disabled(x = !1) {
      a(x), f();
    },
    get children() {
      return l();
    },
    set children(x) {
      l(x), f();
    },
    get child() {
      return u();
    },
    set child(x) {
      u(x), f();
    },
    get onHighlight() {
      return d();
    },
    set onHighlight(x = Be) {
      d(x), f();
    },
    get onUnhighlight() {
      return h();
    },
    set onUnhighlight(x = Be) {
      h(x), f();
    }
  }, w = Hk(), b = J(w);
  {
    var k = (x) => {
      var E = he(), V = J(E);
      {
        let H = /* @__PURE__ */ $(() => ({ props: c(m), ...v.snippetProps }));
        Ee(V, u, () => c(H));
      }
      T(x, E);
    }, O = (x) => {
      var E = Vk();
      Ue(E, () => ({ ...c(m) }));
      var V = X(E);
      Ee(V, () => l() ?? Re, () => v.snippetProps), Z(E), T(x, E);
    };
    se(b, (x) => {
      u() ? x(k) : x(O, !1);
    });
  }
  var C = R(b, 2);
  return tv(C, {
    get mounted() {
      return v.mounted;
    },
    set mounted(x) {
      v.mounted = x;
    }
  }), T(t, w), le(y);
}
ie(
  xl,
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
var Lk = /* @__PURE__ */ ne("<div><!></div>");
const Ik = {
  hash: "svelte-1dj2lcd",
  code: `
	/* Hide scrollbars cross browser and enable momentum scroll for touch devices */[data-select-viewport] {scrollbar-width:none !important;-ms-overflow-style:none !important;-webkit-overflow-scrolling:touch !important;}[data-combobox-viewport] {scrollbar-width:none !important;-ms-overflow-style:none !important;-webkit-overflow-scrolling:touch !important;}[data-combobox-viewport]::-webkit-scrollbar {display:none !important;}[data-select-viewport]::-webkit-scrollbar {display:none !important;}`
};
function kl(t, e) {
  const n = gi();
  ae(e, !0), Ge(t, Ik);
  let r = g(e, "id", 23, () => Hn(n)), o = g(e, "ref", 15, null), i = g(e, "children", 7), s = g(e, "child", 7), a = /* @__PURE__ */ De(e, [
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
    id: pe(() => r()),
    ref: pe(() => o(), (y) => o(y))
  }), u = /* @__PURE__ */ $(() => An(a, l.props));
  var d = {
    get id() {
      return r();
    },
    set id(y = Hn(n)) {
      r(y), f();
    },
    get ref() {
      return o();
    },
    set ref(y = null) {
      o(y), f();
    },
    get children() {
      return i();
    },
    set children(y) {
      i(y), f();
    },
    get child() {
      return s();
    },
    set child(y) {
      s(y), f();
    }
  }, h = he(), p = J(h);
  {
    var v = (y) => {
      var w = he(), b = J(w);
      Ee(b, s, () => ({ props: c(u) })), T(y, w);
    }, m = (y) => {
      var w = Lk();
      Ue(w, () => ({ ...c(u) }));
      var b = X(w);
      Ee(b, () => i() ?? Re), Z(w), T(y, w);
    };
    se(p, (y) => {
      s() ? y(v) : y(m, !1);
    });
  }
  return T(t, h), le(d);
}
ie(kl, { id: {}, ref: {}, children: {}, child: {} }, [], [], !0);
var Rk = /* @__PURE__ */ ne("<!> <!>", 1);
function Cl(t, e) {
  ae(e, !0);
  let n = g(e, "value", 15), r = g(e, "onValueChange", 7, Be), o = g(e, "name", 7, ""), i = g(e, "disabled", 7, !1), s = g(e, "type", 7), a = g(e, "open", 15, !1), l = g(e, "onOpenChange", 7, Be), u = g(e, "onOpenChangeComplete", 7, Be), d = g(e, "loop", 7, !1), h = g(e, "scrollAlignment", 7, "nearest"), p = g(e, "required", 7, !1), v = g(e, "items", 23, () => []), m = g(e, "allowDeselect", 7, !1), y = g(e, "autocomplete", 7), w = g(e, "children", 7);
  function b() {
    n() === void 0 && n(s() === "single" ? "" : []);
  }
  b(), wt.pre(() => n(), () => {
    b();
  });
  let k = /* @__PURE__ */ me("");
  const O = Mk.create({
    type: s(),
    value: pe(() => n(), (A) => {
      n(A), r()(A);
    }),
    disabled: pe(() => i()),
    required: pe(() => p()),
    open: pe(() => a(), (A) => {
      a(A), l()(A);
    }),
    loop: pe(() => d()),
    scrollAlignment: pe(() => h()),
    name: pe(() => o()),
    isCombobox: !1,
    items: pe(() => v()),
    allowDeselect: pe(() => m()),
    inputValue: pe(() => c(k), (A) => K(k, A, !0)),
    onOpenChangeComplete: pe(() => u())
  });
  var C = {
    get value() {
      return n();
    },
    set value(A) {
      n(A), f();
    },
    get onValueChange() {
      return r();
    },
    set onValueChange(A = Be) {
      r(A), f();
    },
    get name() {
      return o();
    },
    set name(A = "") {
      o(A), f();
    },
    get disabled() {
      return i();
    },
    set disabled(A = !1) {
      i(A), f();
    },
    get type() {
      return s();
    },
    set type(A) {
      s(A), f();
    },
    get open() {
      return a();
    },
    set open(A = !1) {
      a(A), f();
    },
    get onOpenChange() {
      return l();
    },
    set onOpenChange(A = Be) {
      l(A), f();
    },
    get onOpenChangeComplete() {
      return u();
    },
    set onOpenChangeComplete(A = Be) {
      u(A), f();
    },
    get loop() {
      return d();
    },
    set loop(A = !1) {
      d(A), f();
    },
    get scrollAlignment() {
      return h();
    },
    set scrollAlignment(A = "nearest") {
      h(A), f();
    },
    get required() {
      return p();
    },
    set required(A = !1) {
      p(A), f();
    },
    get items() {
      return v();
    },
    set items(A = []) {
      v(A), f();
    },
    get allowDeselect() {
      return m();
    },
    set allowDeselect(A = !1) {
      m(A), f();
    },
    get autocomplete() {
      return y();
    },
    set autocomplete(A) {
      y(A), f();
    },
    get children() {
      return w();
    },
    set children(A) {
      w(A), f();
    }
  }, x = Rk(), E = J(x);
  Wg(E, {
    children: (A, D) => {
      var _ = he(), M = J(_);
      Ee(M, () => w() ?? Re), T(A, _);
    },
    $$slots: { default: !0 }
  });
  var V = R(E, 2);
  {
    var H = (A) => {
      var D = he(), _ = J(D);
      {
        var M = (P) => {
          ss(P, {
            get autocomplete() {
              return y();
            }
          });
        }, S = (P) => {
          var z = he(), B = J(z);
          xt(B, 16, () => O.opts.value.current, (q) => q, (q, U) => {
            ss(q, {
              get value() {
                return U;
              },
              get autocomplete() {
                return y();
              }
            });
          }), T(P, z);
        };
        se(_, (P) => {
          O.opts.value.current.length === 0 ? P(M) : P(S, !1);
        });
      }
      T(A, D);
    }, I = (A) => {
      ss(A, {
        get autocomplete() {
          return y();
        },
        get value() {
          return O.opts.value.current;
        },
        set value(D) {
          O.opts.value.current = D;
        }
      });
    };
    se(V, (A) => {
      Array.isArray(O.opts.value.current) ? A(H) : A(I, !1);
    });
  }
  return T(t, x), le(C);
}
ie(
  Cl,
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
var Bk = /* @__PURE__ */ ne("<button><!></button>");
function $l(t, e) {
  const n = gi();
  ae(e, !0);
  let r = g(e, "id", 23, () => Hn(n)), o = g(e, "ref", 15, null), i = g(e, "child", 7), s = g(e, "children", 7), a = g(e, "type", 7, "button"), l = /* @__PURE__ */ De(e, [
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
  const u = Iu.create({
    id: pe(() => r()),
    ref: pe(() => o(), (m) => o(m))
  }), d = /* @__PURE__ */ $(() => An(l, u.props, { type: a() }));
  var h = {
    get id() {
      return r();
    },
    set id(m = Hn(n)) {
      r(m), f();
    },
    get ref() {
      return o();
    },
    set ref(m = null) {
      o(m), f();
    },
    get child() {
      return i();
    },
    set child(m) {
      i(m), f();
    },
    get children() {
      return s();
    },
    set children(m) {
      s(m), f();
    },
    get type() {
      return a();
    },
    set type(m = "button") {
      a(m), f();
    }
  }, p = he(), v = J(p);
  return Ct(v, () => Yg, (m, y) => {
    y(m, {
      get id() {
        return r();
      },
      get ref() {
        return u.opts.ref;
      },
      children: (w, b) => {
        var k = he(), O = J(k);
        {
          var C = (E) => {
            var V = he(), H = J(V);
            Ee(H, i, () => ({ props: c(d) })), T(E, V);
          }, x = (E) => {
            var V = Bk();
            Ue(V, () => ({ ...c(d) }));
            var H = X(V);
            Ee(H, () => s() ?? Re), Z(V), T(E, V);
          };
          se(O, (E) => {
            i() ? E(C) : E(x, !1);
          });
        }
        T(w, k);
      },
      $$slots: { default: !0 }
    });
  }), T(t, p), le(h);
}
ie($l, { id: {}, ref: {}, child: {}, children: {}, type: {} }, [], [], !0);
const jk = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, Kk = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
  return !1;
}, Fk = Symbol("lucide-context"), Zk = () => yn(Fk);
var Wk = /* @__PURE__ */ Ce("<svg><!><!></svg>");
function va(t, e) {
  ae(e, !0);
  const n = Zk() ?? {}, r = g(e, "name", 7), o = g(e, "color", 23, () => n.color ?? "currentColor"), i = g(e, "size", 23, () => n.size ?? 24), s = g(e, "strokeWidth", 23, () => n.strokeWidth ?? 2), a = g(e, "absoluteStrokeWidth", 23, () => n.absoluteStrokeWidth ?? !1), l = g(e, "iconNode", 23, () => []), u = g(e, "children", 7), d = /* @__PURE__ */ De(e, [
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
  var p = {
    get name() {
      return r();
    },
    set name(w) {
      r(w), f();
    },
    get color() {
      return o();
    },
    set color(w = n.color ?? "currentColor") {
      o(w), f();
    },
    get size() {
      return i();
    },
    set size(w = n.size ?? 24) {
      i(w), f();
    },
    get strokeWidth() {
      return s();
    },
    set strokeWidth(w = n.strokeWidth ?? 2) {
      s(w), f();
    },
    get absoluteStrokeWidth() {
      return a();
    },
    set absoluteStrokeWidth(w = n.absoluteStrokeWidth ?? !1) {
      a(w), f();
    },
    get iconNode() {
      return l();
    },
    set iconNode(w = []) {
      l(w), f();
    },
    get children() {
      return u();
    },
    set children(w) {
      u(w), f();
    }
  }, v = Wk();
  Ue(
    v,
    (w) => ({
      ...jk,
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
      () => !u() && !Kk(d) && { "aria-hidden": "true" }
    ]
  );
  var m = X(v);
  xt(m, 17, l, Wr, (w, b) => {
    var k = /* @__PURE__ */ $(() => _o(c(b), 2));
    let O = () => c(k)[0], C = () => c(k)[1];
    var x = he(), E = J(x);
    Dh(E, O, !0, (V, H) => {
      Ue(V, () => ({ ...C() }));
    }), T(w, x);
  });
  var y = R(m);
  return Ee(y, () => u() ?? Re), Z(v), T(t, v), le(p);
}
ie(
  va,
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
function nv(t, e) {
  ae(e, !0);
  let n = /* @__PURE__ */ De(e, ["$$slots", "$$events", "$$legacy", "$$host"]);
  const r = [["path", { d: "M20 6 9 17l-5-5" }]];
  va(t, Ie({ name: "check" }, () => n, {
    get iconNode() {
      return r;
    },
    children: (o, i) => {
      var s = he(), a = J(s);
      Ee(a, () => e.children ?? Re), T(o, s);
    },
    $$slots: { default: !0 }
  })), le();
}
ie(nv, {}, [], [], !0);
function rv(t, e) {
  ae(e, !0);
  let n = /* @__PURE__ */ De(e, ["$$slots", "$$events", "$$legacy", "$$host"]);
  const r = [["path", { d: "M5 12h14" }]];
  va(t, Ie({ name: "minus" }, () => n, {
    get iconNode() {
      return r;
    },
    children: (o, i) => {
      var s = he(), a = J(s);
      Ee(a, () => e.children ?? Re), T(o, s);
    },
    $$slots: { default: !0 }
  })), le();
}
ie(rv, {}, [], [], !0);
var Xk = /* @__PURE__ */ ne('<div data-slot="checkbox-indicator" class="[&amp;>svg]:size-3.5 grid place-content-center text-current transition-none"><!></div>');
function ov(t, e) {
  ae(e, !0);
  let n = g(e, "ref", 15, null), r = g(e, "checked", 15, !1), o = g(e, "indeterminate", 15, !1), i = g(e, "class", 7), s = /* @__PURE__ */ De(e, [
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
      n(d), f();
    },
    get checked() {
      return r();
    },
    set checked(d = !1) {
      r(d), f();
    },
    get indeterminate() {
      return o();
    },
    set indeterminate(d = !1) {
      o(d), f();
    },
    get class() {
      return i();
    },
    set class(d) {
      i(d), f();
    }
  }, l = he(), u = J(l);
  {
    const d = (p, v) => {
      let m = () => v?.().checked, y = () => v?.().indeterminate;
      var w = Xk(), b = X(w);
      {
        var k = (C) => {
          nv(C, {});
        }, O = (C) => {
          var x = he(), E = J(x);
          {
            var V = (H) => {
              rv(H, {});
            };
            se(
              E,
              (H) => {
                y() && H(V);
              },
              !0
            );
          }
          T(C, x);
        };
        se(b, (C) => {
          m() ? C(k) : C(O, !1);
        });
      }
      Z(w), T(p, w);
    };
    let h = /* @__PURE__ */ $(() => gn("nopan nodrag border-input dark:bg-input/30 data-checked:bg-primary data-checked:text-primary-foreground dark:data-checked:bg-primary data-checked:border-primary aria-invalid:aria-checked:border-primary aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 flex size-4 items-center justify-center rounded-[4px] border shadow-xs transition-shadow group-has-disabled/field:opacity-50 focus-visible:ring-3 aria-invalid:ring-3 peer relative shrink-0 outline-none after:absolute after:-inset-x-3 after:-inset-y-2 disabled:cursor-not-allowed disabled:opacity-50", i()));
    Ct(u, () => Eg, (p, v) => {
      v(p, Ie(
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
  return T(t, l), le(a);
}
ie(ov, { ref: {}, checked: {}, indeterminate: {}, class: {} }, [], [], !0);
var qk = /* @__PURE__ */ ne('<div><input type="hidden"/> <!> <!></div>');
const Yk = {
  hash: "svelte-1o3a23c",
  code: ".tf-chosen.svelte-1o3a23c {display:flex;flex-direction:row;align-items:center;justify-content:space-between;gap:5px;}"
};
function iv(t, e) {
  ae(e, !0), Ge(t, Yk);
  const n = g(e, "placeholder", 7), r = g(e, "label", 7), o = g(e, "value", 7), i = g(e, "buttonText", 7, "选择..."), s = g(e, "onChosen", 7), a = /* @__PURE__ */ De(e, [
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
      n(v), f();
    },
    get label() {
      return r();
    },
    set label(v) {
      r(v), f();
    },
    get value() {
      return o();
    },
    set value(v) {
      o(v), f();
    },
    get buttonText() {
      return i();
    },
    set buttonText(v = "选择...") {
      i(v), f();
    },
    get onChosen() {
      return s();
    },
    set onChosen(v) {
      s(v), f();
    }
  }, u = qk();
  Ue(
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
  var d = X(u);
  br(d);
  var h = R(d, 2);
  vt(h, {
    get value() {
      return r();
    },
    get placeholder() {
      return n();
    },
    style: "flex-grow: 1;",
    disabled: !0
  });
  var p = R(h, 2);
  return Ze(p, {
    variant: "outline",
    onclick: (v) => {
      s()?.(o(), r(), v);
    },
    style: "padding: 3px",
    children: (v, m) => {
      Se();
      var y = Me();
      Ne(() => nt(y, i())), T(v, y);
    },
    $$slots: { default: !0 }
  }), Z(u), Ne(() => Gi(d, o())), T(t, u), le(l);
}
ie(
  iv,
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
var Uk = /* @__PURE__ */ ne("<input/>"), Gk = /* @__PURE__ */ ne("<input/>");
function vt(t, e) {
  ae(e, !0);
  let n = g(e, "ref", 15, null), r = g(e, "value", 15), o = g(e, "type", 7), i = g(e, "files", 15), s = g(e, "class", 7), a = g(e, "data-slot", 7, "input"), l = /* @__PURE__ */ De(e, [
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
      n(m), f();
    },
    get value() {
      return r();
    },
    set value(m) {
      r(m), f();
    },
    get type() {
      return o();
    },
    set type(m) {
      o(m), f();
    },
    get files() {
      return i();
    },
    set files(m) {
      i(m), f();
    },
    get class() {
      return s();
    },
    set class(m) {
      s(m), f();
    },
    get "data-slot"() {
      return a();
    },
    set "data-slot"(m = "input") {
      a(m), f();
    }
  }, d = he(), h = J(d);
  {
    var p = (m) => {
      var y = Uk();
      Ue(
        y,
        (w) => ({
          "data-slot": a(),
          class: w,
          type: "file",
          ...l
        }),
        [
          () => gn("nopan nodrag dark:bg-input/30 border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 h-9 rounded-md border bg-transparent px-2.5 py-1 text-base shadow-xs transition-[color,box-shadow] file:h-7 file:text-sm file:font-medium focus-visible:ring-3 aria-invalid:ring-3 md:text-sm file:text-foreground placeholder:text-muted-foreground w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50", s())
        ],
        void 0,
        void 0,
        void 0,
        !0
      ), Et(y, (w) => n(w), () => n()), b1(y, i), gs(y, r), T(m, y);
    }, v = (m) => {
      var y = Gk();
      Ue(
        y,
        (w) => ({
          "data-slot": a(),
          spellcheck: "false",
          class: w,
          type: o(),
          ...l
        }),
        [
          () => gn("nopan nodrag dark:bg-input/30 border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 h-9 rounded-md border bg-transparent px-2.5 py-1 text-base shadow-xs transition-[color,box-shadow] file:h-7 file:text-sm file:font-medium focus-visible:ring-3 aria-invalid:ring-3 md:text-sm file:text-foreground placeholder:text-muted-foreground w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50", s())
        ],
        void 0,
        void 0,
        void 0,
        !0
      ), Et(y, (w) => n(w), () => n()), gs(y, r), T(m, y);
    };
    se(h, (m) => {
      o() === "file" ? m(p) : m(v, !1);
    });
  }
  return T(t, d), le(u);
}
ie(
  vt,
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
var Jk = /* @__PURE__ */ ne("<textarea></textarea>");
function et(t, e) {
  ae(e, !0);
  let n = g(e, "ref", 15, null), r = g(e, "value", 15), o = g(e, "class", 7), i = g(e, "data-slot", 7, "textarea"), s = g(e, "height", 7), a = g(e, "autoHeight", 7, !0), l = g(e, "maxHeight", 7), u = g(e, "onHeightChange", 7), d = /* @__PURE__ */ De(e, [
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
  ]), h, p;
  function v() {
    if (h && a()) {
      if (s() !== void 0) {
        const O = typeof s() == "number" ? `${s()}px` : s();
        h.style.height = O, h.style.overflowY = "hidden", u()?.(O);
        return;
      }
      h.style.height = "auto", h.style.overflowY = "hidden";
      let k = h.scrollHeight;
      if (!p) {
        const O = e.rows || 1, C = getComputedStyle(h);
        p = parseFloat(C.fontSize) * 1.2 * O + parseFloat(C.paddingTop) + parseFloat(C.paddingBottom) + parseFloat(C.borderTopWidth);
      }
      if (k < p && (k = p), l()) {
        const O = typeof l() == "number" ? `${l()}px` : l();
        k > parseInt(O) ? (h.style.height = O, h.style.overflowY = "auto") : h.style.height = `${k}px`;
      } else
        h.style.height = `${k}px`;
      u()?.(h.style.height);
    }
  }
  He(() => {
    v();
  });
  var m = {
    get ref() {
      return n();
    },
    set ref(k = null) {
      n(k), f();
    },
    get value() {
      return r();
    },
    set value(k) {
      r(k), f();
    },
    get class() {
      return o();
    },
    set class(k) {
      o(k), f();
    },
    get "data-slot"() {
      return i();
    },
    set "data-slot"(k = "textarea") {
      i(k), f();
    },
    get height() {
      return s();
    },
    set height(k) {
      s(k), f();
    },
    get autoHeight() {
      return a();
    },
    set autoHeight(k = !0) {
      a(k), f();
    },
    get maxHeight() {
      return l();
    },
    set maxHeight(k) {
      l(k), f();
    },
    get onHeightChange() {
      return u();
    },
    set onHeightChange(k) {
      u(k), f();
    }
  }, y = Jk();
  Km(y);
  var w = (k) => {
    v(), e.oninput?.(k);
  }, b = (k) => {
    v(), e.onchange?.(k);
  };
  return Ue(
    y,
    (k) => ({
      spellcheck: "false",
      ...d,
      "data-slot": i(),
      oninput: w,
      onchange: b,
      class: k
    }),
    [
      () => gn("nodrag nowheel border-input dark:bg-input/30 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 rounded-md border bg-transparent px-2.5 py-2 text-base shadow-xs transition-[color,box-shadow] focus-visible:ring-3 aria-invalid:ring-3 md:text-sm placeholder:text-muted-foreground flex field-sizing-content min-h-16 w-full outline-none disabled:cursor-not-allowed disabled:opacity-50", o())
    ]
  ), Et(y, (k) => h = k, () => h), gs(y, r), T(t, y), le(m);
}
ie(
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
var Qk = /* @__PURE__ */ ne('<div role="button"><!></div>'), e4 = /* @__PURE__ */ ne("<div></div>");
function sv(t, e) {
  const n = cc(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]), r = cc(n, ["items", "onChange", "activeIndex"]);
  ae(e, !1);
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
      o(d), f();
    },
    get onChange() {
      return i();
    },
    set onChange(d) {
      i(d), f();
    },
    get activeIndex() {
      return s();
    },
    set activeIndex(d) {
      s(d), f();
    }
  };
  Jl();
  var u = e4();
  return Ue(u, () => ({
    ...r,
    class: `tf-tabs ${Xl(r), lt(() => r.class) ?? ""}`
  })), xt(u, 5, o, Wr, (d, h, p) => {
    var v = Qk();
    Oe(v, "tabindex", p), v.__click = () => a(c(h), p), v.__keydown = (b) => {
      (b.key === "Enter" || b.key === " ") && (b.preventDefault(), a(c(h), p));
    };
    var m = X(v);
    {
      var y = (b) => {
        var k = Me();
        Ne(() => nt(k, (c(h), lt(() => c(h).label)))), T(b, k);
      }, w = (b) => {
        var k = he(), O = J(k);
        Ee(O, () => (c(h), lt(() => c(h).label) ?? Re)), T(b, k);
      };
      se(m, (b) => {
        c(h), lt(() => typeof c(h).label == "string") ? b(y) : b(w, !1);
      });
    }
    Z(v), Ne(() => Xt(v, 1, `tf-tabs-item ${p === s() ? "active" : ""}`)), T(d, v);
  }), Z(u), T(t, u), le(l);
}
no(["click", "keydown"]);
ie(sv, { items: {}, onChange: {}, activeIndex: {} }, [], [], !0);
var t4 = /* @__PURE__ */ ne('<span class="tf-collapse-item-title-icon"><!></span>'), n4 = /* @__PURE__ */ ne('<div class="tf-collapse-item-description"><!></div>'), r4 = /* @__PURE__ */ ne('<div class="tf-collapse-item-content"><!></div>'), o4 = /* @__PURE__ */ ne('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><!> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), i4 = /* @__PURE__ */ ne("<div></div>");
const s4 = {
  hash: "svelte-ynwjxt",
  code: `\r
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-ynwjxt {transform:rotate(90deg);transition:transform 0.3s ease;}`
};
function av(t, e) {
  ae(e, !0), Ge(t, s4);
  let n = g(e, "items", 7), r = g(e, "onChange", 7), o = g(e, "activeKeys", 31, () => pt([]));
  function i(l) {
    o().includes(l.key) ? o(o().filter((u) => u !== l.key)) : (o().push(l.key), o(o())), r()?.(l, o());
  }
  var s = {
    get items() {
      return n();
    },
    set items(l) {
      n(l), f();
    },
    get onChange() {
      return r();
    },
    set onChange(l) {
      r(l), f();
    },
    get activeKeys() {
      return o();
    },
    set activeKeys(l = []) {
      o(l), f();
    }
  }, a = i4();
  return xt(a, 21, n, Wr, (l, u, d) => {
    var h = o4(), p = X(h);
    Oe(p, "tabindex", d), p.__click = () => i(c(u)), p.__keydown = (x) => {
      (x.key === "Enter" || x.key === " ") && (x.preventDefault(), i(c(u)));
    };
    var v = X(p);
    {
      var m = (x) => {
        var E = t4(), V = X(E);
        Un(V, {
          get target() {
            return c(u).icon;
          }
        }), Z(E), T(x, E);
      };
      se(v, (x) => {
        c(u).icon && x(m);
      });
    }
    var y = R(v, 2);
    Un(y, {
      get target() {
        return c(u).title;
      }
    });
    var w = R(y, 2);
    Z(p);
    var b = R(p, 2);
    {
      var k = (x) => {
        var E = n4(), V = X(E);
        Un(V, {
          get target() {
            return c(u).description;
          }
        }), Z(E), T(x, E);
      };
      se(b, (x) => {
        c(u).description && x(k);
      });
    }
    var O = R(b, 2);
    {
      var C = (x) => {
        var E = r4(), V = X(E);
        Un(V, {
          get target() {
            return c(u).content;
          }
        }), Z(E), T(x, E);
      };
      se(O, (x) => {
        o().includes(c(u).key) && x(C);
      });
    }
    Z(h), Ne((x) => Xt(w, 1, `tf-collapse-item-title-arrow ${x ?? ""}`, "svelte-ynwjxt"), [
      () => o().includes(c(u).key) ? "rotate-90" : ""
    ]), T(l, h);
  }), Z(a), Ne(() => {
    Pt(a, e.style), Xt(a, 1, `tf-collapse ${e.class ?? ""}`, "svelte-ynwjxt");
  }), T(t, a), le(s);
}
no(["click", "keydown"]);
ie(av, { items: {}, onChange: {}, activeKeys: {} }, [], [], !0);
function Un(t, e) {
  ae(e, !0);
  let n = g(e, "target", 7);
  typeof n() > "u" && n("undefined");
  var r = {
    get target() {
      return n();
    },
    set target(l) {
      n(l), f();
    }
  }, o = he(), i = J(o);
  {
    var s = (l) => {
      var u = he(), d = J(u);
      Ee(d, () => n() ?? Re), T(l, u);
    }, a = (l) => {
      var u = he(), d = J(u);
      na(d, n), T(l, u);
    };
    se(i, (l) => {
      typeof n() == "function" ? l(s) : l(a, !1);
    });
  }
  return T(t, o), le(r);
}
ie(Un, { target: {} }, [], [], !0);
function Sl(t, e) {
  ae(e, !0);
  let n = /* @__PURE__ */ De(e, ["$$slots", "$$events", "$$legacy", "$$host"]);
  const r = [["path", { d: "m6 9 6 6 6-6" }]];
  va(t, Ie({ name: "chevron-down" }, () => n, {
    get iconNode() {
      return r;
    },
    children: (o, i) => {
      var s = he(), a = J(s);
      Ee(a, () => e.children ?? Re), T(o, s);
    },
    $$slots: { default: !0 }
  })), le();
}
ie(Sl, {}, [], [], !0);
var a4 = /* @__PURE__ */ ne('<span class="mx-1">,</span>'), l4 = /* @__PURE__ */ ne("<!> <!>", 1), u4 = /* @__PURE__ */ ne('<span class="text-muted-foreground"> </span>'), c4 = /* @__PURE__ */ ne('<span class="flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-left"><!></span> <!>', 1), d4 = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), h4 = /* @__PURE__ */ ne('<span class="absolute right-2 flex size-3.5 items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path></svg></span>'), p4 = /* @__PURE__ */ ne('<span class="flex items-center gap-2 whitespace-nowrap"><!> <!></span> <!>', 1), f4 = /* @__PURE__ */ ne("<!> <!>", 1), g4 = /* @__PURE__ */ ne('<span class="text-muted-foreground"> </span>'), v4 = /* @__PURE__ */ ne('<span class="flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-left"><!></span> <!>', 1), m4 = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), y4 = /* @__PURE__ */ ne('<span class="absolute right-2 flex size-3.5 items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path></svg></span>'), w4 = /* @__PURE__ */ ne('<span class="flex items-center gap-2 whitespace-nowrap"><!> <!></span> <!>', 1), b4 = /* @__PURE__ */ ne("<!> <!>", 1);
function _t(t, e) {
  ae(e, !0);
  let n = g(e, "items", 7), r = g(e, "onSelect", 7), o = g(e, "value", 23, () => []), i = g(e, "defaultValue", 23, () => []), s = g(e, "expandAll", 7, !0), a = g(e, "multiple", 7, !1), l = g(e, "expandValue", 23, () => []), u = g(e, "placeholder", 7), d = g(e, "class", 7), h = /* @__PURE__ */ De(e, [
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
  ]), p = /* @__PURE__ */ $(() => {
    const A = [], D = (_) => {
      for (const M of _)
        A.push(M), M.children?.length && D(M.children);
    };
    return D(n()), A;
  }), v = /* @__PURE__ */ $(() => {
    const A = [], D = o().length > 0 ? o() : i();
    for (const _ of D) {
      if (_ == null) continue;
      const M = c(p).find((S) => S.value === _);
      M && A.push(M);
    }
    return A;
  }), m = /* @__PURE__ */ $(() => !a() && c(v).length > 0 ? String(c(v)[0].value) : ""), y = /* @__PURE__ */ $(() => a() ? c(v).map((A) => String(A.value)) : []);
  function w(A, D) {
    A.stopPropagation(), r()?.(D);
  }
  function b(A, D = 0) {
    const _ = [];
    for (const M of A) {
      _.push(M);
      const S = s() || l().includes(M.value);
      M.children?.length && S && _.push(...b(M.children, D + 1));
    }
    return _;
  }
  let k = /* @__PURE__ */ $(() => b(n()));
  function O(A) {
    return n().findIndex((D) => D.value === A.value) === -1;
  }
  function C(A) {
    return {
      value: String(A.value),
      label: typeof A.label == "string" ? A.label : String(A.value),
      disabled: !1
    };
  }
  var x = {
    get items() {
      return n();
    },
    set items(A) {
      n(A), f();
    },
    get onSelect() {
      return r();
    },
    set onSelect(A) {
      r(A), f();
    },
    get value() {
      return o();
    },
    set value(A = []) {
      o(A), f();
    },
    get defaultValue() {
      return i();
    },
    set defaultValue(A = []) {
      i(A), f();
    },
    get expandAll() {
      return s();
    },
    set expandAll(A = !0) {
      s(A), f();
    },
    get multiple() {
      return a();
    },
    set multiple(A = !1) {
      a(A), f();
    },
    get expandValue() {
      return l();
    },
    set expandValue(A = []) {
      l(A), f();
    },
    get placeholder() {
      return u();
    },
    set placeholder(A) {
      u(A), f();
    },
    get class() {
      return d();
    },
    set class(A) {
      d(A), f();
    }
  }, E = he(), V = J(E);
  {
    var H = (A) => {
      var D = he(), _ = J(D);
      Ct(_, () => Cl, (M, S) => {
        S(M, Ie(
          {
            type: "multiple",
            get value() {
              return c(y);
            }
          },
          () => h,
          {
            children: (P, z) => {
              var B = f4(), q = J(B);
              {
                let N = /* @__PURE__ */ $(() => gn("nopan nodrag border-input dark:bg-input/30 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 flex h-9 w-full items-center justify-between rounded-md border bg-transparent px-2.5 py-1 text-base shadow-xs transition-[color,box-shadow] focus-visible:ring-3 aria-invalid:ring-3 md:text-sm", d()));
                Ct(q, () => $l, (Y, ee) => {
                  ee(Y, {
                    get class() {
                      return c(N);
                    },
                    children: (j, F) => {
                      var W = c4(), G = J(W), re = X(G);
                      {
                        var L = (ue) => {
                          var oe = he(), ce = J(oe);
                          xt(ce, 19, () => c(v), (ve) => ve.value, (ve, ke, be) => {
                            var de = l4(), ye = J(de);
                            Un(ye, {
                              get target() {
                                return c(ke).label;
                              }
                            });
                            var Pe = R(ye, 2);
                            {
                              var Q = (Le) => {
                                var Ae = a4();
                                T(Le, Ae);
                              };
                              se(Pe, (Le) => {
                                c(be) < c(v).length - 1 && Le(Q);
                              });
                            }
                            T(ve, de);
                          }), T(ue, oe);
                        }, te = (ue) => {
                          var oe = u4(), ce = X(oe, !0);
                          Z(oe), Ne(() => nt(ce, u() ?? "")), T(ue, oe);
                        };
                        se(re, (ue) => {
                          c(v).length > 0 ? ue(L) : ue(te, !1);
                        });
                      }
                      Z(G);
                      var fe = R(G, 2);
                      Sl(fe, { class: "size-4 opacity-50" }), T(j, W);
                    },
                    $$slots: { default: !0 }
                  });
                });
              }
              var U = R(q, 2);
              Ct(U, () => fl, (N, Y) => {
                Y(N, {
                  children: (ee, j) => {
                    var F = he(), W = J(F);
                    Ct(W, () => bl, (G, re) => {
                      re(G, {
                        class: "nopan nodrag nowheel data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-96 min-w-(--bits-select-anchor-width) overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md",
                        children: (L, te) => {
                          var fe = he(), ue = J(fe);
                          Ct(ue, () => kl, (oe, ce) => {
                            ce(oe, {
                              class: "p-1",
                              children: (ve, ke) => {
                                var be = he(), de = J(be);
                                xt(de, 17, () => c(k), (ye) => ye.value, (ye, Pe) => {
                                  const Q = /* @__PURE__ */ $(() => c(Pe).children && c(Pe).children.length > 0), Le = /* @__PURE__ */ $(() => C(c(Pe)));
                                  var Ae = he(), We = J(Ae);
                                  {
                                    const je = (it, dt) => {
                                      let Qe = () => dt?.().selected;
                                      var ge = p4(), ze = J(ge), rt = X(ze);
                                      {
                                        var Xe = (st) => {
                                          var at = d4();
                                          T(st, at);
                                        };
                                        se(rt, (st) => {
                                          c(Q) && st(Xe);
                                        });
                                      }
                                      var ut = R(rt, 2);
                                      Un(ut, {
                                        get target() {
                                          return c(Pe).label;
                                        }
                                      }), Z(ze);
                                      var At = R(ze, 2);
                                      {
                                        var ht = (st) => {
                                          var at = h4();
                                          T(st, at);
                                        };
                                        se(At, (st) => {
                                          Qe() && st(ht);
                                        });
                                      }
                                      T(it, ge);
                                    };
                                    let tt = /* @__PURE__ */ $(() => gn("relative flex w-full cursor-pointer select-none items-center rounded-sm py-1.5 pr-8 pl-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50", O(c(Pe)) && "pl-6"));
                                    Ct(We, () => xl, (it, dt) => {
                                      dt(it, {
                                        get value() {
                                          return c(Le).value;
                                        },
                                        get label() {
                                          return c(Le).label;
                                        },
                                        get class() {
                                          return c(tt);
                                        },
                                        onclick: (Qe) => w(Qe, c(Pe)),
                                        children: je,
                                        $$slots: { default: !0 }
                                      });
                                    });
                                  }
                                  T(ye, Ae);
                                }), T(ve, be);
                              },
                              $$slots: { default: !0 }
                            });
                          }), T(L, fe);
                        },
                        $$slots: { default: !0 }
                      });
                    }), T(ee, F);
                  },
                  $$slots: { default: !0 }
                });
              }), T(P, B);
            },
            $$slots: { default: !0 }
          }
        ));
      }), T(A, D);
    }, I = (A) => {
      var D = he(), _ = J(D);
      Ct(_, () => Cl, (M, S) => {
        S(M, Ie(
          {
            type: "single",
            get value() {
              return c(m);
            }
          },
          () => h,
          {
            children: (P, z) => {
              var B = b4(), q = J(B);
              {
                let N = /* @__PURE__ */ $(() => gn("nopan nodrag border-input dark:bg-input/30 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 flex h-9 w-full items-center justify-between rounded-md border bg-transparent px-2.5 py-1 text-base shadow-xs transition-[color,box-shadow] focus-visible:ring-3 aria-invalid:ring-3 md:text-sm", d()));
                Ct(q, () => $l, (Y, ee) => {
                  ee(Y, {
                    get class() {
                      return c(N);
                    },
                    children: (j, F) => {
                      var W = v4(), G = J(W), re = X(G);
                      {
                        var L = (ue) => {
                          Un(ue, {
                            get target() {
                              return c(v)[0].label;
                            }
                          });
                        }, te = (ue) => {
                          var oe = g4(), ce = X(oe, !0);
                          Z(oe), Ne(() => nt(ce, u() ?? "")), T(ue, oe);
                        };
                        se(re, (ue) => {
                          c(v).length > 0 ? ue(L) : ue(te, !1);
                        });
                      }
                      Z(G);
                      var fe = R(G, 2);
                      Sl(fe, { class: "size-4 opacity-50" }), T(j, W);
                    },
                    $$slots: { default: !0 }
                  });
                });
              }
              var U = R(q, 2);
              Ct(U, () => fl, (N, Y) => {
                Y(N, {
                  children: (ee, j) => {
                    var F = he(), W = J(F);
                    Ct(W, () => bl, (G, re) => {
                      re(G, {
                        class: "nopan nodrag nowheel data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-96 min-w-(--bits-select-anchor-width) overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md",
                        children: (L, te) => {
                          var fe = he(), ue = J(fe);
                          Ct(ue, () => kl, (oe, ce) => {
                            ce(oe, {
                              class: "p-1",
                              children: (ve, ke) => {
                                var be = he(), de = J(be);
                                xt(de, 17, () => c(k), (ye) => ye.value, (ye, Pe) => {
                                  const Q = /* @__PURE__ */ $(() => c(Pe).children && c(Pe).children.length > 0), Le = /* @__PURE__ */ $(() => C(c(Pe)));
                                  var Ae = he(), We = J(Ae);
                                  {
                                    const je = (it, dt) => {
                                      let Qe = () => dt?.().selected;
                                      var ge = w4(), ze = J(ge), rt = X(ze);
                                      {
                                        var Xe = (st) => {
                                          var at = m4();
                                          T(st, at);
                                        };
                                        se(rt, (st) => {
                                          c(Q) && st(Xe);
                                        });
                                      }
                                      var ut = R(rt, 2);
                                      Un(ut, {
                                        get target() {
                                          return c(Pe).label;
                                        }
                                      }), Z(ze);
                                      var At = R(ze, 2);
                                      {
                                        var ht = (st) => {
                                          var at = y4();
                                          T(st, at);
                                        };
                                        se(At, (st) => {
                                          Qe() && st(ht);
                                        });
                                      }
                                      T(it, ge);
                                    };
                                    let tt = /* @__PURE__ */ $(() => gn("relative flex w-full cursor-pointer select-none items-center rounded-sm py-1.5 pr-8 pl-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50", O(c(Pe)) && "pl-6"));
                                    Ct(We, () => xl, (it, dt) => {
                                      dt(it, {
                                        get value() {
                                          return c(Le).value;
                                        },
                                        get label() {
                                          return c(Le).label;
                                        },
                                        get class() {
                                          return c(tt);
                                        },
                                        onclick: (Qe) => w(Qe, c(Pe)),
                                        children: je,
                                        $$slots: { default: !0 }
                                      });
                                    });
                                  }
                                  T(ye, Ae);
                                }), T(ve, be);
                              },
                              $$slots: { default: !0 }
                            });
                          }), T(L, fe);
                        },
                        $$slots: { default: !0 }
                      });
                    }), T(ee, F);
                  },
                  $$slots: { default: !0 }
                });
              }), T(P, B);
            },
            $$slots: { default: !0 }
          }
        ));
      }), T(A, D);
    };
    se(V, (A) => {
      a() ? A(H) : A(I, !1);
    });
  }
  return T(t, E), le(x);
}
ie(
  _t,
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
const x4 = ({
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
    Fg(t, u, {
      placement: r,
      middleware: [
        Rg(o),
        // 手动偏移配置
        jg(i),
        //自动翻转
        Bg(s),
        //自动偏移（使得浮动元素能够进入视野）
        ...l ? [Kg({ element: d })] : []
      ]
    }).then(({ x: b, y: k, placement: O, middlewareData: C }) => {
      if (Object.assign(u.style, {
        left: `${b}px`,
        top: `${k}px`
      }), l) {
        const { x, y: E } = C.arrow, V = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[O.split("-")[0]];
        Object.assign(d.style, {
          zIndex: -1,
          left: x != null ? `${x}px` : "",
          top: E != null ? `${E}px` : "",
          right: "",
          bottom: "",
          [V]: "2px"
        });
      }
    });
  }
  let p = !1;
  function v() {
    u.style.display = "block", u.style.visibility = "block", u.style.position = "absolute", l && (d.style.display = "block"), p = !0, h();
  }
  function m() {
    u.style.display = "none", l && (d.style.display = "none"), p = !1;
  }
  function y(b) {
    b.stopPropagation(), p ? m() : v();
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
      return p;
    }
  };
};
var k4 = /* @__PURE__ */ ne('<div style="position: relative"><div><!></div> <div style="display: none; width: 100%;z-index: 9999"><!></div></div>');
function oo(t, e) {
  ae(e, !0);
  const n = g(e, "children", 7), r = g(e, "floating", 7), o = g(e, "placement", 7, "bottom");
  let i, s, a;
  xn(() => (a = x4({
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
      n(y), f();
    },
    get floating() {
      return r();
    },
    set floating(y) {
      r(y), f();
    },
    get placement() {
      return o();
    },
    set placement(y = "bottom") {
      o(y), f();
    }
  }, d = k4(), h = X(d), p = X(h);
  Ee(p, n), Z(h), Et(h, (y) => i = y, () => i);
  var v = R(h, 2), m = X(v);
  return Ee(m, r), Z(v), Et(v, (y) => s = y, () => s), Z(d), T(t, d), le(u);
}
ie(oo, { children: {}, floating: {}, placement: {} }, [], ["hide"], !0);
function qe(t, e) {
  ae(e, !0);
  const n = g(e, "children", 7), r = g(e, "level", 7, 1), o = g(e, "mt", 7), i = g(e, "mb", 7);
  var s = {
    get children() {
      return n();
    },
    set children(u) {
      n(u), f();
    },
    get level() {
      return r();
    },
    set level(u = 1) {
      r(u), f();
    },
    get mt() {
      return o();
    },
    set mt(u) {
      o(u), f();
    },
    get mb() {
      return i();
    },
    set mb(u) {
      i(u), f();
    }
  }, a = he(), l = J(a);
  return Dh(l, () => `h${r()}`, !1, (u, d) => {
    Ue(u, () => ({
      class: "tf-heading",
      style: `margin-top:${o() || "0"};margin-bottom:${i() || "0"}`
    }));
    var h = he(), p = J(h);
    Ee(p, () => n() ?? Re), T(d, h);
  }), T(t, a), le(s);
}
ie(qe, { children: {}, level: {}, mt: {}, mb: {} }, [], [], !0);
var C4 = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1q3h954"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1q3h954"></path></svg>');
const $4 = {
  hash: "svelte-1q3h954",
  code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:var(--input);border:1px solid transparent;}}"
};
function zi(t, e) {
  ae(e, !0), Ge(t, $4);
  const n = /* @__PURE__ */ De(e, ["$$slots", "$$events", "$$legacy", "$$host"]);
  {
    let r = /* @__PURE__ */ $(() => gn("input-btn-more", e.class));
    Ze(t, Ie(
      {
        size: "icon-xs",
        get class() {
          return c(r);
        }
      },
      () => n,
      {
        children: (o, i) => {
          var s = C4();
          T(o, s);
        },
        $$slots: { default: !0 }
      }
    ));
  }
  le();
}
ie(zi, {}, [], [], !0);
const S4 = () => ({ deleteNode: (t) => {
  Fe.removeNode(t), Fe.updateEdges((e) => e.filter((n) => n.source !== t && n.target !== t));
} }), In = (t = 16) => {
  const e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = new Uint8Array(t);
  return crypto.getRandomValues(n), Array.from(n, (r) => e[r % e.length]).join("");
}, _4 = () => ({ copyNode: (t) => {
  const e = Fe.getNode(t);
  if (e) {
    const n = In(), r = {
      ...e,
      id: n,
      position: { x: e.position.x + 50, y: e.position.y + 50 }
    };
    Fe.updateNodes((o) => [...o.map((i) => ({ ...i, selected: !1 })), r]);
  }
} }), gt = () => yn("svelteflow__node_id"), Sr = () => yn("tinyflow_options");
var O4 = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'), P4 = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'), E4 = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'), N4 = /* @__PURE__ */ ne('<div class="input-item svelte-ana6zl">执行条件： <!></div>'), z4 = /* @__PURE__ */ ne('<div class="input-item svelte-ana6zl">循环间隔时间（单位：毫秒）： <!></div> <div class="input-item svelte-ana6zl">最大循环次数（0 表示不限制）： <!></div> <div class="input-item svelte-ana6zl">退出条件： <!></div>', 1), M4 = /* @__PURE__ */ ne('<div class="input-item svelte-ana6zl">错误重试间隔时间（单位：毫秒）： <!></div> <div class="input-item svelte-ana6zl">最大重试次数： <!></div> <label class="input-item-inline svelte-ana6zl"><span>正常后重置重试次数记录：</span> <input type="checkbox"/></label>', 1), T4 = /* @__PURE__ */ ne('<div class="settings svelte-ana6zl"><div class="input-item svelte-ana6zl">节点名称： <!></div> <div class="input-item svelte-ana6zl">参数描述： <!></div> <!> <label class="input-item-inline svelte-ana6zl"><span>循环执行：</span> <input type="checkbox"/></label> <!> <label class="input-item-inline svelte-ana6zl"><span>错误重试：</span> <input type="checkbox"/></label> <!></div>'), A4 = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3.33946 17.0002C2.90721 16.2515 2.58277 15.4702 2.36133 14.6741C3.3338 14.1779 3.99972 13.1668 3.99972 12.0002C3.99972 10.8345 3.3348 9.824 2.36353 9.32741C2.81025 7.71651 3.65857 6.21627 4.86474 4.99001C5.7807 5.58416 6.98935 5.65534 7.99972 5.072C9.01009 4.48866 9.55277 3.40635 9.4962 2.31604C11.1613 1.8846 12.8847 1.90004 14.5031 2.31862C14.4475 3.40806 14.9901 4.48912 15.9997 5.072C17.0101 5.65532 18.2187 5.58416 19.1346 4.99007C19.7133 5.57986 20.2277 6.25151 20.66 7.00021C21.0922 7.7489 21.4167 8.53025 21.6381 9.32628C20.6656 9.82247 19.9997 10.8336 19.9997 12.0002C19.9997 13.166 20.6646 14.1764 21.6359 14.673C21.1892 16.2839 20.3409 17.7841 19.1347 19.0104C18.2187 18.4163 17.0101 18.3451 15.9997 18.9284C14.9893 19.5117 14.4467 20.5941 14.5032 21.6844C12.8382 22.1158 11.1148 22.1004 9.49633 21.6818C9.55191 20.5923 9.00929 19.5113 7.99972 18.9284C6.98938 18.3451 5.78079 18.4162 4.86484 19.0103C4.28617 18.4205 3.77172 17.7489 3.33946 17.0002ZM8.99972 17.1964C10.0911 17.8265 10.8749 18.8227 11.2503 19.9659C11.7486 20.0133 12.2502 20.014 12.7486 19.9675C13.1238 18.8237 13.9078 17.8268 14.9997 17.1964C16.0916 16.5659 17.347 16.3855 18.5252 16.6324C18.8146 16.224 19.0648 15.7892 19.2729 15.334C18.4706 14.4373 17.9997 13.2604 17.9997 12.0002C17.9997 10.74 18.4706 9.5632 19.2729 8.6665C19.1688 8.4405 19.0538 8.21822 18.9279 8.00021C18.802 7.78219 18.667 7.57148 18.5233 7.36842C17.3457 7.61476 16.0911 7.43414 14.9997 6.80405C13.9083 6.17395 13.1246 5.17768 12.7491 4.03455C12.2509 3.98714 11.7492 3.98646 11.2509 4.03292C10.8756 5.17671 10.0916 6.17364 8.99972 6.80405C7.9078 7.43447 6.65245 7.61494 5.47428 7.36803C5.18485 7.77641 4.93463 8.21117 4.72656 8.66637C5.52881 9.56311 5.99972 10.74 5.99972 12.0002C5.99972 13.2604 5.52883 14.4372 4.72656 15.3339C4.83067 15.5599 4.94564 15.7822 5.07152 16.0002C5.19739 16.2182 5.3324 16.4289 5.47612 16.632C6.65377 16.3857 7.90838 16.5663 8.99972 17.1964ZM11.9997 15.0002C10.3429 15.0002 8.99972 13.6571 8.99972 12.0002C8.99972 10.3434 10.3429 9.00021 11.9997 9.00021C13.6566 9.00021 14.9997 10.3434 14.9997 12.0002C14.9997 13.6571 13.6566 15.0002 11.9997 15.0002ZM11.9997 13.0002C12.552 13.0002 12.9997 12.5525 12.9997 12.0002C12.9997 11.4479 12.552 11.0002 11.9997 11.0002C11.4474 11.0002 10.9997 11.4479 10.9997 12.0002C10.9997 12.5525 11.4474 13.0002 11.9997 13.0002Z"></path></svg>'), D4 = /* @__PURE__ */ ne('<div class="tf-node-toolbar svelte-ana6zl"><!> <!> <!> <!></div>'), V4 = /* @__PURE__ */ ne('<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!> <!>', 1);
const H4 = {
  hash: "svelte-ana6zl",
  code: ".tf-node-toolbar.svelte-ana6zl {display:flex;gap:5px;padding:5px;border-radius:5px;background:var(--background);border:1px solid var(--border);box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}.settings.svelte-ana6zl {display:flex;flex-direction:column;gap:10px;padding:10px;background:var(--background);border:1px solid var(--border);border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.settings.svelte-ana6zl .input-item:where(.svelte-ana6zl) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:var(--muted-foreground);}.settings.svelte-ana6zl .input-item-inline:where(.svelte-ana6zl) {display:flex;align-items:center;font-size:12px;color:var(--muted-foreground);}"
};
function un(t, e) {
  ae(e, !0), Ge(t, H4);
  const n = g(e, "data", 7), r = g(e, "id", 7, ""), o = g(e, "icon", 7), i = g(e, "handle", 7), s = g(e, "children", 7), a = g(e, "allowExecute", 7, !0), l = g(e, "allowCopy", 7, !0), u = g(e, "allowDelete", 7, !0), d = g(e, "allowSetting", 7, !0), h = g(e, "allowSettingOfCondition", 7, !0), p = g(e, "showSourceHandle", 7, !0), v = g(e, "showTargetHandle", 7, !0), m = g(e, "onCollapse", 7);
  let y = n().expand ? ["key"] : [];
  const { updateNodeData: w, getNode: b } = kt(), k = /* @__PURE__ */ $(() => [
    {
      key: "key",
      icon: o(),
      title: n().title,
      description: n().description,
      content: s()
    }
  ]), { deleteNode: O } = S4(), { copyNode: C } = _4(), x = Sr(), E = () => {
    x.onNodeExecute?.(b(r()));
  };
  let V = gt();
  var H = {
    get data() {
      return n();
    },
    set data(N) {
      n(N), f();
    },
    get id() {
      return r();
    },
    set id(N = "") {
      r(N), f();
    },
    get icon() {
      return o();
    },
    set icon(N) {
      o(N), f();
    },
    get handle() {
      return i();
    },
    set handle(N) {
      i(N), f();
    },
    get children() {
      return s();
    },
    set children(N) {
      s(N), f();
    },
    get allowExecute() {
      return a();
    },
    set allowExecute(N = !0) {
      a(N), f();
    },
    get allowCopy() {
      return l();
    },
    set allowCopy(N = !0) {
      l(N), f();
    },
    get allowDelete() {
      return u();
    },
    set allowDelete(N = !0) {
      u(N), f();
    },
    get allowSetting() {
      return d();
    },
    set allowSetting(N = !0) {
      d(N), f();
    },
    get allowSettingOfCondition() {
      return h();
    },
    set allowSettingOfCondition(N = !0) {
      h(N), f();
    },
    get showSourceHandle() {
      return p();
    },
    set showSourceHandle(N = !0) {
      p(N), f();
    },
    get showTargetHandle() {
      return v();
    },
    set showTargetHandle(N = !0) {
      v(N), f();
    },
    get onCollapse() {
      return m();
    },
    set onCollapse(N) {
      m(N), f();
    }
  }, I = V4(), A = J(I);
  {
    var D = (N) => {
      zf(N, {
        get position() {
          return _e.Top;
        },
        align: "start",
        children: (Y, ee) => {
          var j = D4(), F = X(j);
          {
            var W = (oe) => {
              Ze(oe, {
                size: "icon",
                class: "tf-node-toolbar-item",
                onclick: () => {
                  O(r());
                },
                children: (ce, ve) => {
                  var ke = O4();
                  T(ce, ke);
                },
                $$slots: { default: !0 }
              });
            };
            se(F, (oe) => {
              u() && oe(W);
            });
          }
          var G = R(F, 2);
          {
            var re = (oe) => {
              Ze(oe, {
                size: "icon",
                class: "tf-node-toolbar-item",
                onclick: () => {
                  C(r());
                },
                children: (ce, ve) => {
                  var ke = P4();
                  T(ce, ke);
                },
                $$slots: { default: !0 }
              });
            };
            se(G, (oe) => {
              l() && oe(re);
            });
          }
          var L = R(G, 2);
          {
            var te = (oe) => {
              Ze(oe, {
                size: "icon",
                class: "tf-node-toolbar-item",
                onclick: E,
                children: (ce, ve) => {
                  var ke = E4();
                  T(ce, ke);
                },
                $$slots: { default: !0 }
              });
            };
            se(L, (oe) => {
              a() && oe(te);
            });
          }
          var fe = R(L, 2);
          {
            var ue = (oe) => {
              oo(oe, {
                placement: "bottom",
                floating: (ce) => {
                  var ve = T4(), ke = X(ve), be = R(X(ke));
                  vt(be, {
                    style: "width: 100%;",
                    onchange: (ge) => {
                      const ze = ge.target.value;
                      w(V, { title: ze });
                    },
                    get value() {
                      return n().title;
                    }
                  }), Z(ke);
                  var de = R(ke, 2), ye = R(X(de));
                  et(ye, {
                    rows: 3,
                    style: "width: 100%;",
                    onchange: (ge) => {
                      const ze = ge.target.value;
                      w(V, { description: ze });
                    },
                    get value() {
                      return n().description;
                    }
                  }), Z(de);
                  var Pe = R(de, 2);
                  {
                    var Q = (ge) => {
                      var ze = N4(), rt = R(X(ze));
                      et(rt, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (Xe) => {
                          const ut = Xe.target.value;
                          w(V, { condition: ut });
                        },
                        get value() {
                          return n().condition;
                        }
                      }), Z(ze), T(ge, ze);
                    };
                    se(Pe, (ge) => {
                      h() && ge(Q);
                    });
                  }
                  var Le = R(Pe, 2), Ae = R(X(Le), 2);
                  br(Ae), Ae.__change = (ge) => {
                    const ze = ge.target.checked;
                    w(V, { loopEnable: ze });
                  }, Z(Le);
                  var We = R(Le, 2);
                  {
                    var je = (ge) => {
                      var ze = z4(), rt = J(ze), Xe = R(X(rt));
                      {
                        let at = /* @__PURE__ */ $(() => n().loopIntervalMs || "1000");
                        et(Xe, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (Nt) => {
                            const tn = Nt.target.value;
                            w(V, { loopIntervalMs: tn });
                          },
                          get value() {
                            return c(at);
                          }
                        });
                      }
                      Z(rt);
                      var ut = R(rt, 2), At = R(X(ut));
                      {
                        let at = /* @__PURE__ */ $(() => n().maxLoopCount || "0");
                        et(At, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (Nt) => {
                            const tn = Nt.target.value;
                            w(V, { maxLoopCount: tn });
                          },
                          get value() {
                            return c(at);
                          }
                        });
                      }
                      Z(ut);
                      var ht = R(ut, 2), st = R(X(ht));
                      et(st, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (at) => {
                          const Nt = at.target.value;
                          w(V, { loopBreakCondition: Nt });
                        },
                        get value() {
                          return n().loopBreakCondition;
                        }
                      }), Z(ht), T(ge, ze);
                    };
                    se(We, (ge) => {
                      n().loopEnable && ge(je);
                    });
                  }
                  var tt = R(We, 2), it = R(X(tt), 2);
                  br(it), it.__change = (ge) => {
                    const ze = ge.target.checked;
                    w(V, { retryEnable: ze });
                  }, Z(tt);
                  var dt = R(tt, 2);
                  {
                    var Qe = (ge) => {
                      var ze = M4(), rt = J(ze), Xe = R(X(rt));
                      {
                        let at = /* @__PURE__ */ $(() => n().retryIntervalMs || "1000");
                        et(Xe, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (Nt) => {
                            const tn = Nt.target.value;
                            w(V, { retryIntervalMs: tn });
                          },
                          get value() {
                            return c(at);
                          }
                        });
                      }
                      Z(rt);
                      var ut = R(rt, 2), At = R(X(ut));
                      {
                        let at = /* @__PURE__ */ $(() => n().maxRetryCount || "3");
                        et(At, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (Nt) => {
                            const tn = Nt.target.value;
                            w(V, { maxRetryCount: tn });
                          },
                          get value() {
                            return c(at);
                          }
                        });
                      }
                      Z(ut);
                      var ht = R(ut, 2), st = R(X(ht), 2);
                      br(st), st.__change = (at) => {
                        const Nt = at.target.checked;
                        w(V, { resetRetryCountAfterNormal: Nt });
                      }, Z(ht), Ne(() => ba(st, !!n().resetRetryCountAfterNormal)), T(ge, ze);
                    };
                    se(dt, (ge) => {
                      n().retryEnable && ge(Qe);
                    });
                  }
                  Z(ve), Ne(() => {
                    ba(Ae, !!n().loopEnable), ba(it, !!n().retryEnable);
                  }), T(ce, ve);
                },
                children: (ce, ve) => {
                  Ze(ce, {
                    size: "icon",
                    class: "tf-node-toolbar-item",
                    children: (ke, be) => {
                      var de = A4();
                      T(ke, de);
                    },
                    $$slots: { default: !0 }
                  });
                },
                $$slots: { floating: !0, default: !0 }
              });
            };
            se(fe, (oe) => {
              d() && oe(ue);
            });
          }
          Z(j), T(Y, j);
        },
        $$slots: { default: !0 }
      });
    };
    se(A, (N) => {
      (a() || l() || u()) && N(D);
    });
  }
  var _ = R(A, 2), M = R(X(_), 2), S = X(M);
  av(S, {
    get items() {
      return c(k);
    },
    get activeKeys() {
      return y;
    },
    onChange: (N, Y) => {
      w(r(), { expand: Y?.includes("key") }), m()?.(Y?.includes("key") ? "key" : "");
    }
  }), Z(M), Z(_);
  var P = R(_, 2);
  {
    var z = (N) => {
      kr(N, {
        type: "target",
        get position() {
          return _e.Left;
        },
        style: " left: -12px;top: 20px"
      });
    };
    se(P, (N) => {
      v() && N(z);
    });
  }
  var B = R(P, 2);
  {
    var q = (N) => {
      kr(N, {
        type: "source",
        get position() {
          return _e.Right;
        },
        style: "right: -12px;top: 20px"
      });
    };
    se(B, (N) => {
      p() && N(q);
    });
  }
  var U = R(B, 2);
  return Ee(U, () => i() ?? Re), T(t, I), le(H);
}
no(["change"]);
ie(
  un,
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
var L4 = /* @__PURE__ */ ne('<div class="input-more-item svelte-n5iecj">数据选项： <!></div>'), I4 = /* @__PURE__ */ ne('<div class="input-more-setting svelte-n5iecj"><div class="input-more-item svelte-n5iecj">数据内容： <!></div> <div class="input-more-item svelte-n5iecj">输入方式： <!></div> <!> <div class="input-more-item svelte-n5iecj">数据标题： <!></div> <div class="input-more-item svelte-n5iecj">数据描述： <!></div> <div class="input-more-item svelte-n5iecj">占位符： <!></div> <div class="input-more-item svelte-n5iecj"><!></div></div>'), R4 = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>'), B4 = /* @__PURE__ */ ne('<div class="input-item svelte-n5iecj"><!></div> <div class="input-item svelte-n5iecj"><!></div> <div class="input-item svelte-n5iecj"><!></div>', 1);
const j4 = {
  hash: "svelte-n5iecj",
  code: ".input-item.svelte-n5iecj {display:flex;align-items:center;}.input-more-setting.svelte-n5iecj {display:flex;flex-direction:column;gap:10px;padding:10px;background:var(--background);border:1px solid var(--border);border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-n5iecj .input-more-item:where(.svelte-n5iecj) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:var(--muted-foreground);}"
};
function lv(t, e) {
  ae(e, !0), Ge(t, j4);
  const n = g(e, "parameter", 7), r = g(e, "index", 7);
  let o = gt(), i = dr(o), s = /* @__PURE__ */ $(() => ({ ...n(), ...i?.current?.data?.parameters[r()] }));
  const { updateNodeData: a } = kt(), l = (H, I) => {
    a(o, (A) => {
      let D = A.data.parameters;
      return D[r()][H] = I, { parameters: D };
    });
  }, u = (H, I) => {
    const A = I.target.value;
    l(H, A);
  }, d = (H) => {
    const I = H.target.value;
    l("name", I);
  }, h = (H) => {
    l("required", H);
  }, p = (H) => {
    const I = H.value;
    l("formType", I);
  }, v = (H) => {
    const I = H.value;
    l("contentType", I);
  };
  let m;
  const y = () => {
    a(o, (H) => {
      let I = H.data.parameters;
      return I.splice(r(), 1), { parameters: [...I] };
    }), m?.hide();
  };
  var w = {
    get parameter() {
      return n();
    },
    set parameter(H) {
      n(H), f();
    },
    get index() {
      return r();
    },
    set index(H) {
      r(H), f();
    }
  }, b = B4(), k = J(b), O = X(k);
  vt(O, {
    style: "width: 100%;",
    get value() {
      return c(s).name;
    },
    placeholder: "请输入参数名称",
    oninput: d
  }), Z(k);
  var C = R(k, 2), x = X(C);
  ov(x, {
    get checked() {
      return c(s).required;
    },
    onCheckedChange: h
  }), Z(C);
  var E = R(C, 2), V = X(E);
  return Et(
    oo(V, {
      placement: "bottom",
      floating: (H) => {
        var I = I4(), A = X(I), D = R(X(A));
        {
          let F = /* @__PURE__ */ $(() => c(s).contentType ? [c(s).contentType] : []);
          _t(D, {
            get items() {
              return vu;
            },
            style: "width: 100%",
            defaultValue: ["text"],
            get value() {
              return c(F);
            },
            onSelect: v
          });
        }
        Z(A);
        var _ = R(A, 2), M = R(X(_));
        {
          let F = /* @__PURE__ */ $(() => c(s).formType ? [c(s).formType] : []);
          _t(M, {
            get items() {
              return Cx;
            },
            style: "width: 100%",
            defaultValue: ["input"],
            get value() {
              return c(F);
            },
            onSelect: p
          });
        }
        Z(_);
        var S = R(_, 2);
        {
          var P = (F) => {
            var W = L4(), G = R(X(W));
            {
              let re = /* @__PURE__ */ $(() => c(s).enums?.join(`
`));
              et(G, {
                rows: 3,
                style: "width: 100%;",
                onchange: (L) => {
                  l("enums", L.target?.value.trim().split(`
`));
                },
                get value() {
                  return c(re);
                },
                placeholder: "一行一个选项"
              });
            }
            Z(W), T(F, W);
          };
          se(S, (F) => {
            (c(s).formType === "radio" || c(s).formType === "checkbox" || c(s).formType === "select") && F(P);
          });
        }
        var z = R(S, 2), B = R(X(z));
        et(B, {
          rows: 1,
          style: "width: 100%;",
          onchange: (F) => {
            u("formLabel", F);
          },
          get value() {
            return c(s).formLabel;
          }
        }), Z(z);
        var q = R(z, 2), U = R(X(q));
        et(U, {
          rows: 2,
          style: "width: 100%;",
          onchange: (F) => {
            u("formDescription", F);
          },
          get value() {
            return c(s).formDescription;
          }
        }), Z(q);
        var N = R(q, 2), Y = R(X(N));
        et(Y, {
          rows: 2,
          style: "width: 100%;",
          onchange: (F) => {
            u("formPlaceholder", F);
          },
          get value() {
            return c(s).formPlaceholder;
          }
        }), Z(N);
        var ee = R(N, 2), j = X(ee);
        Ze(j, {
          variant: "destructive",
          onclick: y,
          children: (F, W) => {
            Se();
            var G = Me("删除");
            T(F, G);
          },
          $$slots: { default: !0 }
        }), Z(ee), Z(I), T(H, I);
      },
      children: (H, I) => {
        Ze(H, {
          size: "icon-xs",
          class: "input-btn-more",
          children: (A, D) => {
            var _ = R4();
            T(A, _);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (H) => m = H,
    () => m
  ), Z(E), T(t, b), le(w);
}
ie(lv, { parameter: {}, index: {} }, [], [], !0);
var K4 = /* @__PURE__ */ ne('<div class="input-header svelte-1yp5n1k">参数名称</div> <div class="input-header svelte-1yp5n1k">必填</div> <div class="input-header svelte-1yp5n1k"></div>', 1), F4 = /* @__PURE__ */ ne('<div class="none-params svelte-1yp5n1k">无输入参数</div>'), Z4 = /* @__PURE__ */ ne('<div class="input-container svelte-1yp5n1k"><!> <!></div>');
const W4 = {
  hash: "svelte-1yp5n1k",
  code: `.input-container.svelte-1yp5n1k {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1yp5n1k .none-params:where(.svelte-1yp5n1k) {font-size:12px;background:var(--secondary);height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1yp5n1k .input-header:where(.svelte-1yp5n1k) {font-size:12px;color:var(--muted-foreground);}`
};
function uv(t, e) {
  ae(e, !0), Ge(t, W4);
  let n = gt(), r = dr(n), o = /* @__PURE__ */ $(() => [...r?.current?.data?.parameters || []]);
  var i = Z4(), s = X(i);
  {
    var a = (u) => {
      var d = K4();
      Se(4), T(u, d);
    };
    se(s, (u) => {
      c(o).length !== 0 && u(a);
    });
  }
  var l = R(s, 2);
  xt(
    l,
    19,
    () => c(o),
    (u) => u.id,
    (u, d, h) => {
      lv(u, {
        get parameter() {
          return c(d);
        },
        get index() {
          return c(h);
        }
      });
    },
    (u) => {
      var d = F4();
      T(u, d);
    }
  ), Z(i), T(t, i), le();
}
ie(uv, {}, [], [], !0);
const ci = (t) => (!t || t.length == 0 || t.forEach((e) => {
  e.id || (e.id = In()), ci(e.children);
}), t), $n = () => {
  const { updateNodeData: t } = kt();
  return {
    addParameter: (e, n = "parameters", r) => {
      Array.isArray(r) ? r.forEach((s) => ci(s?.children)) : ci(r?.children);
      function o(s) {
        return {
          name: "",
          dataType: "String",
          refType: "ref",
          ...s,
          id: In()
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
var X4 = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), q4 = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Y4 = /* @__PURE__ */ ne('<div class="heading svelte-llt1qy"><!> <!></div> <!>', 1);
const U4 = {
  hash: "svelte-llt1qy",
  code: ".heading.svelte-llt1qy {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:var(--muted);border:1px solid transparent;}"
};
function cv(t, e) {
  ae(e, !0), Ge(t, U4);
  const n = g(e, "data", 7), r = /* @__PURE__ */ De(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = gt(), { addParameter: i } = $n();
  var s = {
    get data() {
      return n();
    },
    set data(a) {
      n(a), f();
    }
  };
  return un(t, Ie(() => r, {
    get data() {
      return n();
    },
    allowExecute: !1,
    showTargetHandle: !1,
    allowSettingOfCondition: !1,
    icon: (a) => {
      var l = X4();
      T(a, l);
    },
    children: (a, l) => {
      var u = Y4(), d = J(u), h = X(d);
      qe(h, {
        level: 3,
        children: (m, y) => {
          Se();
          var w = Me("输入参数");
          T(m, w);
        },
        $$slots: { default: !0 }
      });
      var p = R(h, 2);
      Ze(p, {
        size: "icon-xs",
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: () => {
          i(o, "parameters", { refType: "input", name: "newParam" });
        },
        children: (m, y) => {
          var w = q4();
          T(m, w);
        },
        $$slots: { default: !0 }
      }), Z(d);
      var v = R(d, 2);
      uv(v, {}), T(a, u);
    },
    $$slots: { icon: !0, default: !0 }
  })), le(s);
}
ie(cv, { data: {} }, [], [], !0);
const dv = (t, e, n) => {
  for (const r of n)
    r.target === e && r.source && (t.push(r.source), dv(t, r.source, n));
}, hv = (t, e, n) => !t || t.length === 0 ? [] : t.map((r) => ({
  label: r.name + (n ? ` (Array<${r.dataType || "String"}>)` : ` (${r.dataType || "String"})`),
  value: e + "." + r.name,
  children: hv(r.children, e + "." + r.name, n)
})), Ed = (t, e, n) => {
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
          children: hv(r, t.id, e)
        };
    }
  }
}, pv = (t = !1) => {
  const e = gt(), n = dr(e), r = /* @__PURE__ */ $(Cn), o = /* @__PURE__ */ $(() => c(r).nodes), i = /* @__PURE__ */ $(() => c(r).edges), s = /* @__PURE__ */ $(() => c(r).nodeLookup);
  let a = /* @__PURE__ */ $(() => {
    const l = [];
    if (!n.current)
      return [];
    const u = c(s).get(e);
    if (t)
      for (const d of c(o)) {
        const h = d.parentId === n.current.id;
        if (h) {
          const p = Ed(d, h, u);
          p && l.push(p);
        }
      }
    else {
      const d = [];
      dv(d, e, c(i));
      for (const h of c(o))
        if (d.includes(h.id)) {
          const p = h.parentId === n.current.id, v = Ed(h, p, u);
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
var G4 = /* @__PURE__ */ ne('<div class="input-more-item svelte-jmeys3">数据内容： <!></div>'), J4 = /* @__PURE__ */ ne('<div class="input-more-setting svelte-jmeys3"><div class="input-more-item svelte-jmeys3">数据来源： <!></div> <!> <div class="input-more-item svelte-jmeys3">默认值： <!></div> <div class="input-more-item svelte-jmeys3">参数描述： <!></div> <div class="input-more-item svelte-jmeys3"><!></div></div>'), Q4 = /* @__PURE__ */ ne('<div class="input-item svelte-jmeys3"><!></div> <div class="input-item svelte-jmeys3"><!></div> <div class="input-item svelte-jmeys3"><!></div>', 1);
const eC = {
  hash: "svelte-jmeys3",
  code: ".input-item.svelte-jmeys3 {display:flex;align-items:center;}.input-more-setting.svelte-jmeys3 {display:flex;flex-direction:column;gap:10px;padding:10px;background:var(--background);border:1px solid var(--border);border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-jmeys3 .input-more-item:where(.svelte-jmeys3) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:var(--muted-foreground);}"
};
function fv(t, e) {
  ae(e, !0), Ge(t, eC), xn(() => {
    c(u).refType || m({ value: "ref" });
  });
  const n = g(e, "parameter", 7), r = g(e, "index", 7), o = g(e, "dataKeyName", 7), i = g(e, "useChildrenOnly", 7), s = g(e, "showContentType", 7, !1);
  let a = gt(), l = dr(a), u = /* @__PURE__ */ $(() => ({
    ...n(),
    ...l?.current?.data?.[o()][r()]
  }));
  const { updateNodeData: d } = kt(), h = (M, S) => {
    d(a, (P) => {
      let z = P.data?.[o()];
      return z[r()] = { ...z[r()], [M]: S }, { [o()]: z };
    });
  }, p = (M, S) => {
    const P = S.target.value;
    h(M, P);
  }, v = (M) => {
    const S = M.value;
    h("ref", S);
  }, m = (M) => {
    const S = M.value;
    h("refType", S);
  }, y = (M) => {
    const S = M.value;
    h("contentType", S);
  };
  let w;
  const b = () => {
    d(a, (M) => {
      let S = M.data?.[o()];
      return S.splice(r(), 1), { [o()]: [...S] };
    }), w?.hide();
  };
  let k = pv(i());
  var O = {
    get parameter() {
      return n();
    },
    set parameter(M) {
      n(M), f();
    },
    get index() {
      return r();
    },
    set index(M) {
      r(M), f();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(M) {
      o(M), f();
    },
    get useChildrenOnly() {
      return i();
    },
    set useChildrenOnly(M) {
      i(M), f();
    },
    get showContentType() {
      return s();
    },
    set showContentType(M = !1) {
      s(M), f();
    }
  }, C = Q4(), x = J(C), E = X(x);
  {
    let M = /* @__PURE__ */ $(() => c(u).nameDisabled === !0);
    vt(E, {
      style: "width: 100%;",
      get value() {
        return c(u).name;
      },
      placeholder: "请输入参数名称",
      get disabled() {
        return c(M);
      },
      oninput: (S) => p("name", S)
    });
  }
  Z(x);
  var V = R(x, 2), H = X(V);
  {
    var I = (M) => {
      vt(M, {
        get value() {
          return c(u).value;
        },
        placeholder: "请输入参数值",
        oninput: (S) => p("value", S)
      });
    }, A = (M) => {
      var S = he(), P = J(S);
      {
        var z = (B) => {
          {
            let q = /* @__PURE__ */ $(() => [c(u).ref]);
            _t(B, {
              get items() {
                return k.current;
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
        se(
          P,
          (B) => {
            c(u).refType !== "input" && B(z);
          },
          !0
        );
      }
      T(M, S);
    };
    se(H, (M) => {
      c(u).refType === "fixed" ? M(I) : M(A, !1);
    });
  }
  Z(V);
  var D = R(V, 2), _ = X(D);
  return Et(
    oo(_, {
      placement: "bottom",
      floating: (M) => {
        var S = J4(), P = X(S), z = R(X(P));
        {
          let W = /* @__PURE__ */ $(() => c(u).refType ? [c(u).refType] : []);
          _t(z, {
            get items() {
              return kx;
            },
            style: "width: 100%",
            defaultValue: ["ref"],
            get value() {
              return c(W);
            },
            onSelect: m
          });
        }
        Z(P);
        var B = R(P, 2);
        {
          var q = (W) => {
            var G = G4(), re = R(X(G));
            {
              let L = /* @__PURE__ */ $(() => c(u).contentType ? [c(u).contentType] : []);
              _t(re, {
                get items() {
                  return vu;
                },
                style: "width: 100%",
                defaultValue: ["text"],
                get value() {
                  return c(L);
                },
                onSelect: y
              });
            }
            Z(G), T(W, G);
          };
          se(B, (W) => {
            s() && W(q);
          });
        }
        var U = R(B, 2), N = R(X(U));
        et(N, {
          rows: 1,
          style: "width: 100%;",
          onchange: (W) => {
            p("defaultValue", W);
          },
          get value() {
            return c(u).defaultValue;
          },
          placeholder: "请输入参数默认值"
        }), Z(U);
        var Y = R(U, 2), ee = R(X(Y));
        et(ee, {
          rows: 3,
          style: "width: 100%;",
          onchange: (W) => {
            p("description", W);
          },
          get value() {
            return c(u).description;
          },
          placeholder: "请输入参数描述"
        }), Z(Y);
        var j = R(Y, 2), F = X(j);
        Ze(F, {
          variant: "destructive",
          onclick: b,
          children: (W, G) => {
            Se();
            var re = Me("删除");
            T(W, re);
          },
          $$slots: { default: !0 }
        }), Z(j), Z(S), T(M, S);
      },
      children: (M, S) => {
        zi(M, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (M) => w = M,
    () => w
  ), Z(D), T(t, C), le(O);
}
ie(
  fv,
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
var tC = /* @__PURE__ */ ne('<div class="input-header svelte-32f1pk">参数名称</div> <div class="input-header svelte-32f1pk">参数值</div> <div class="input-header svelte-32f1pk"></div>', 1), nC = /* @__PURE__ */ ne('<div class="none-params svelte-32f1pk"> </div>'), rC = /* @__PURE__ */ ne('<div class="input-container svelte-32f1pk"><!> <!></div>');
const oC = {
  hash: "svelte-32f1pk",
  code: `.input-container.svelte-32f1pk {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-32f1pk .none-params:where(.svelte-32f1pk) {font-size:12px;background:var(--secondary);height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-32f1pk .input-header:where(.svelte-32f1pk) {font-size:12px;color:var(--muted-foreground);}`
};
function Lt(t, e) {
  ae(e, !0), Ge(t, oC);
  const n = g(e, "noneParameterText", 7, "无输入参数"), r = g(e, "dataKeyName", 7, "parameters"), o = g(e, "useChildrenOnly", 7), i = g(e, "showContentType", 7, !1);
  let s = gt(), a = dr(s), l = /* @__PURE__ */ $(() => [...a?.current?.data?.[r()] || []]);
  var u = {
    get noneParameterText() {
      return n();
    },
    set noneParameterText(m = "无输入参数") {
      n(m), f();
    },
    get dataKeyName() {
      return r();
    },
    set dataKeyName(m = "parameters") {
      r(m), f();
    },
    get useChildrenOnly() {
      return o();
    },
    set useChildrenOnly(m) {
      o(m), f();
    },
    get showContentType() {
      return i();
    },
    set showContentType(m = !1) {
      i(m), f();
    }
  }, d = rC(), h = X(d);
  {
    var p = (m) => {
      var y = tC();
      Se(4), T(m, y);
    };
    se(h, (m) => {
      c(l).length !== 0 && m(p);
    });
  }
  var v = R(h, 2);
  return xt(
    v,
    19,
    () => c(l),
    (m) => m.id,
    (m, y, w) => {
      fv(m, {
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
      var y = nC(), w = X(y, !0);
      Z(y), Ne(() => nt(w, n())), T(m, y);
    }
  ), Z(d), T(t, d), le(u);
}
ie(
  Lt,
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
var iC = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), sC = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), aC = /* @__PURE__ */ ne('<div class="heading svelte-1fiuxu3"><!> <!></div> <!>', 1);
const lC = {
  hash: "svelte-1fiuxu3",
  code: ".heading.svelte-1fiuxu3 {display:flex;margin-bottom:10px;}"
};
function gv(t, e) {
  ae(e, !0), Ge(t, lC);
  const n = g(e, "data", 7), r = /* @__PURE__ */ De(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = gt(), { addParameter: i } = $n();
  var s = {
    get data() {
      return n();
    },
    set data(a) {
      n(a), f();
    }
  };
  return un(t, Ie(
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
        var l = iC();
        T(a, l);
      },
      children: (a, l) => {
        var u = aC(), d = J(u), h = X(d);
        qe(h, {
          level: 3,
          children: (m, y) => {
            Se();
            var w = Me("输出参数");
            T(m, w);
          },
          $$slots: { default: !0 }
        });
        var p = R(h, 2);
        Ze(p, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs", { name: "output" });
          },
          children: (m, y) => {
            var w = sC();
            T(m, w);
          },
          $$slots: { default: !0 }
        }), Z(d);
        var v = R(d, 2);
        Lt(v, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs",
          showContentType: !0
        }), T(a, u);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), le(s);
}
ie(gv, { data: {} }, [], [], !0);
const Ha = (t) => JSON.parse(JSON.stringify(t));
var uC = /* @__PURE__ */ Ce('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), cC = /* @__PURE__ */ ne('<div class="input-more-item svelte-hwmib9"><!></div>'), dC = /* @__PURE__ */ ne('<div class="input-more-setting svelte-hwmib9"><div class="input-more-item svelte-hwmib9">默认值： <!></div> <div class="input-more-item svelte-hwmib9">参数描述： <!></div> <!></div>'), hC = /* @__PURE__ */ ne('<div class="input-item svelte-hwmib9"><!> <!></div> <div class="input-item svelte-hwmib9"><!> <!></div> <div class="input-item svelte-hwmib9"><!></div>', 1);
const pC = {
  hash: "svelte-hwmib9",
  code: ".input-item.svelte-hwmib9 {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-hwmib9 {display:flex;flex-direction:column;gap:10px;padding:10px;background:var(--background);border:1px solid var(--border);border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-hwmib9 .input-more-item:where(.svelte-hwmib9) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:var(--muted-foreground);}"
};
function vv(t, e) {
  ae(e, !0), Ge(t, pC);
  const n = g(e, "parameter", 7), r = g(e, "position", 7), o = g(e, "dataKeyName", 7), i = g(e, "placeholder", 7, "请输入参数值");
  let s = gt(), a = dr(s), l = /* @__PURE__ */ $(() => {
    let _ = a?.current?.data?.[o()], M;
    if (_ && r().length > 0) {
      let S = _;
      for (let P = 0; P < r().length; P++) {
        const z = r()[P];
        P == r().length - 1 ? M = S[z] : S = S[z].children;
      }
    }
    return { ...n(), ...M };
  });
  const { updateNodeData: u } = kt(), d = (_, M) => {
    u(s, (S) => {
      const P = S.data?.[o()];
      if (P && r().length > 0) {
        let z = P;
        for (let B = 0; B < r().length; B++) {
          const q = r()[B];
          B == r().length - 1 ? z[q] = { ...z[q], [_]: M } : z = z[q].children;
        }
      }
      return { [o()]: [...Ha(P)] };
    });
  }, h = (_, M) => {
    const S = M.target.value;
    d(_, S);
  }, p = (_) => {
    const M = _.value;
    d("dataType", M);
  };
  let v;
  const m = () => {
    u(s, (_) => {
      let M = _.data?.[o()];
      if (M && r().length > 0) {
        let S = M;
        for (let P = 0; P < r().length; P++) {
          const z = r()[P];
          P == r().length - 1 ? S.splice(z, 1) : S = S[z].children;
        }
      }
      return { [o()]: [...Ha(M)] };
    }), v?.hide();
  }, y = () => {
    u(s, (_) => {
      let M = _.data?.[o()];
      if (M && r().length > 0) {
        let S = M;
        for (let P = 0; P < r().length; P++) {
          const z = r()[P];
          P == r().length - 1 ? S[z].children ? S[z].children.push({ id: In(), name: "newParam", dataType: "String" }) : S[z].children = [{ id: In(), name: "newParam", dataType: "String" }] : S = S[z].children;
        }
      }
      return { [o()]: [...Ha(M)] };
    });
  };
  var w = {
    get parameter() {
      return n();
    },
    set parameter(_) {
      n(_), f();
    },
    get position() {
      return r();
    },
    set position(_) {
      r(_), f();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(_) {
      o(_), f();
    },
    get placeholder() {
      return i();
    },
    set placeholder(_ = "请输入参数值") {
      i(_), f();
    }
  }, b = hC(), k = J(b), O = X(k);
  {
    var C = (_) => {
      var M = he(), S = J(M);
      xt(S, 17, r, Wr, (P, z) => {
        Se();
        var B = Me(" ");
        T(P, B);
      }), T(_, M);
    };
    se(O, (_) => {
      r().length > 1 && _(C);
    });
  }
  var x = R(O, 2);
  {
    let _ = /* @__PURE__ */ $(() => c(l).nameDisabled === !0);
    vt(x, {
      style: "width: 100%;",
      get value() {
        return c(l).name;
      },
      get placeholder() {
        return i();
      },
      oninput: (M) => {
        h("name", M);
      },
      get disabled() {
        return c(_);
      }
    });
  }
  Z(k);
  var E = R(k, 2), V = X(E);
  {
    let _ = /* @__PURE__ */ $(() => c(l).dataTypeItems || xx), M = /* @__PURE__ */ $(() => c(l).dataType ? [c(l).dataType] : []), S = /* @__PURE__ */ $(() => c(l).dataTypeDisabled === !0);
    _t(V, {
      get items() {
        return c(_);
      },
      style: "width: 100%",
      defaultValue: ["String"],
      get value() {
        return c(M);
      },
      get disabled() {
        return c(S);
      },
      onSelect: p
    });
  }
  var H = R(V, 2);
  {
    var I = (_) => {
      Ze(_, {
        size: "icon-xs",
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: y,
        children: (M, S) => {
          var P = uC();
          T(M, P);
        },
        $$slots: { default: !0 }
      });
    };
    se(H, (_) => {
      (c(l).dataType === "Object" || c(l).dataType === "Array") && c(l).addChildDisabled !== !0 && _(I);
    });
  }
  Z(E);
  var A = R(E, 2), D = X(A);
  return Et(
    oo(D, {
      placement: "bottom",
      floating: (_) => {
        var M = dC(), S = X(M), P = R(X(S));
        {
          let N = /* @__PURE__ */ $(() => c(l).defaultValue || "");
          et(P, {
            rows: 1,
            style: "width: 100%;",
            get value() {
              return c(N);
            },
            onchange: (Y) => {
              h("defaultValue", Y);
            }
          });
        }
        Z(S);
        var z = R(S, 2), B = R(X(z));
        {
          let N = /* @__PURE__ */ $(() => c(l).description || "");
          et(B, {
            rows: 3,
            style: "width: 100%;",
            get value() {
              return c(N);
            },
            onchange: (Y) => {
              h("description", Y);
            }
          });
        }
        Z(z);
        var q = R(z, 2);
        {
          var U = (N) => {
            var Y = cC(), ee = X(Y);
            Ze(ee, {
              variant: "destructive",
              onclick: m,
              children: (j, F) => {
                Se();
                var W = Me("删除");
                T(j, W);
              },
              $$slots: { default: !0 }
            }), Z(Y), T(N, Y);
          };
          se(q, (N) => {
            c(l).deleteDisabled !== !0 && N(U);
          });
        }
        Z(M), T(_, M);
      },
      children: (_, M) => {
        zi(_, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (_) => v = _,
    () => v
  ), Z(A), T(t, b), le(w);
}
ie(
  vv,
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
var fC = /* @__PURE__ */ ne("<!> <!>", 1), gC = /* @__PURE__ */ ne('<div class="none-params svelte-1oz5kx0"> </div>'), vC = /* @__PURE__ */ ne('<div class="input-header svelte-1oz5kx0">参数名称</div> <div class="input-header svelte-1oz5kx0">参数类型</div> <div class="input-header svelte-1oz5kx0"></div>', 1), mC = /* @__PURE__ */ ne('<div class="input-container svelte-1oz5kx0"><!> <!></div>');
const yC = {
  hash: "svelte-1oz5kx0",
  code: `.input-container.svelte-1oz5kx0 {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1oz5kx0 .none-params:where(.svelte-1oz5kx0) {font-size:12px;background:var(--secondary);height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1oz5kx0 .input-header:where(.svelte-1oz5kx0) {font-size:12px;color:var(--muted-foreground);}`
};
function hr(t, e) {
  ae(e, !0), Ge(t, yC);
  const n = (m, y = Re, w = Re) => {
    var b = he(), k = J(b);
    xt(
      k,
      19,
      y,
      (O) => `${O.id}_${O.children ? O.children.length : 0}`,
      (O, C, x) => {
        var E = fC(), V = J(E);
        {
          let A = /* @__PURE__ */ $(() => [...w(), c(x)]);
          vv(V, {
            get parameter() {
              return c(C);
            },
            get position() {
              return c(A);
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
          var I = (A) => {
            {
              let D = /* @__PURE__ */ $(() => [...w(), c(x)]);
              n(A, () => c(C).children, () => c(D));
            }
          };
          se(H, (A) => {
            c(C).children && A(I);
          });
        }
        T(O, E);
      },
      (O) => {
        var C = he(), x = J(C);
        {
          var E = (V) => {
            var H = gC(), I = X(H, !0);
            Z(H), Ne(() => nt(I, r())), T(V, H);
          };
          se(x, (V) => {
            w().length === 0 && V(E);
          });
        }
        T(O, C);
      }
    ), T(m, b);
  }, r = g(e, "noneParameterText", 7, "无输出参数"), o = g(e, "dataKeyName", 7, "outputDefs"), i = g(e, "placeholder", 7, "请输入参数名称");
  let s = gt(), a = dr(s), l = /* @__PURE__ */ $(() => [...a?.current?.data?.[o()] || []]);
  var u = {
    get noneParameterText() {
      return r();
    },
    set noneParameterText(m = "无输出参数") {
      r(m), f();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(m = "outputDefs") {
      o(m), f();
    },
    get placeholder() {
      return i();
    },
    set placeholder(m = "请输入参数名称") {
      i(m), f();
    }
  }, d = mC(), h = X(d);
  {
    var p = (m) => {
      var y = vC();
      Se(4), T(m, y);
    };
    se(h, (m) => {
      c(l).length !== 0 && m(p);
    });
  }
  var v = R(h, 2);
  return n(v, () => c(l) || [], () => []), Z(d), T(t, d), le(u);
}
ie(hr, { noneParameterText: {}, dataKeyName: {}, placeholder: {} }, [], [], !0);
var wC = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), bC = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), xC = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), kC = /* @__PURE__ */ ne('<div class="llm-setting svelte-j81vcl"><div class="setting-title svelte-j81vcl">采样参数</div> <div class="setting-item svelte-j81vcl"><div class="slider-container svelte-j81vcl"><span class="svelte-j81vcl"> </span> <input class="nodrag svelte-j81vcl" type="range" min="0" max="1" step="0.1"/></div></div> <div class="setting-item svelte-j81vcl"><div class="slider-container svelte-j81vcl"><span class="svelte-j81vcl"> </span> <input class="nodrag svelte-j81vcl" type="range" min="0" max="1" step="0.1"/></div></div> <div class="setting-item svelte-j81vcl"><div class="slider-container svelte-j81vcl"><span class="svelte-j81vcl"> </span> <input class="nodrag svelte-j81vcl" type="range" min="0" max="100" step="1"/></div></div></div>'), CC = /* @__PURE__ */ ne('<div class="setting-title svelte-j81vcl">JSON Schema</div> <div class="setting-item svelte-j81vcl"><!></div>', 1), $C = /* @__PURE__ */ ne('<div class="heading svelte-j81vcl"><!> <!></div> <!> <div class="heading svelte-j81vcl" style="padding-top: 10px"><!> <!></div> <!> <!> <div class="setting-title svelte-j81vcl">模型</div> <div class="setting-item svelte-j81vcl"><!> <!></div> <div class="setting-title svelte-j81vcl">系统提示词</div> <div class="setting-item svelte-j81vcl"><!></div> <div class="setting-title svelte-j81vcl">用户提示词</div> <div class="setting-item svelte-j81vcl"><!></div> <!> <div class="heading svelte-j81vcl"><!> <!></div> <!>', 1);
const SC = {
  hash: "svelte-j81vcl",
  code: `.heading.svelte-j81vcl {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-j81vcl {font-size:12px;color:var(--secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-j81vcl {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}\r
\r
    /* 新增样式 */.slider-container.svelte-j81vcl {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-j81vcl span:where(.svelte-j81vcl) {font-size:12px;color:var(--muted-foreground);display:flex;justify-content:space-between;align-items:center;}.llm-setting.svelte-j81vcl {width:200px;background:var(--background);padding:10px;border-radius:5px;box-shadow:0 0 10px rgba(0, 0, 0, 0.1);border:1px solid var(--border);}input[type='range'].svelte-j81vcl {width:100%;height:4px;background:var(--muted);border-radius:2px;outline:none;-webkit-appearance:none;}input[type='range'].svelte-j81vcl::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:var(--primary);border-radius:50%;cursor:pointer;}`
};
function mv(t, e) {
  ae(e, !0), Ge(t, SC);
  const n = g(e, "data", 7), r = /* @__PURE__ */ De(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = gt(), { addParameter: i } = $n(), s = Sr();
  let a = /* @__PURE__ */ me(pt([]));
  xn(async () => {
    const h = await s.provider?.llm?.();
    c(a).push(...h || []);
  });
  const { updateNodeData: l } = kt(), u = (h) => {
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
  He(() => {
    n().outType || u("text");
  });
  var d = {
    get data() {
      return n();
    },
    set data(h) {
      n(h), f();
    }
  };
  return un(t, Ie(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (h) => {
        var p = wC();
        T(h, p);
      },
      children: (h, p) => {
        var v = $C(), m = J(v), y = X(m);
        qe(y, {
          level: 3,
          children: (N, Y) => {
            Se();
            var ee = Me("输入参数");
            T(N, ee);
          },
          $$slots: { default: !0 }
        });
        var w = R(y, 2);
        Ze(w, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (N, Y) => {
            var ee = bC();
            T(N, ee);
          },
          $$slots: { default: !0 }
        }), Z(m);
        var b = R(m, 2);
        Lt(b, {});
        var k = R(b, 2), O = X(k);
        qe(O, {
          level: 3,
          children: (N, Y) => {
            Se();
            var ee = Me("图片识别");
            T(N, ee);
          },
          $$slots: { default: !0 }
        });
        var C = R(O, 2);
        Ze(C, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "images");
          },
          children: (N, Y) => {
            var ee = xC();
            T(N, ee);
          },
          $$slots: { default: !0 }
        }), Z(k);
        var x = R(k, 2);
        Lt(x, { dataKeyName: "images", noneParameterText: "无图片参数" });
        var E = R(x, 2);
        qe(E, {
          level: 3,
          mt: "10px",
          children: (N, Y) => {
            Se();
            var ee = Me("模型设置");
            T(N, ee);
          },
          $$slots: { default: !0 }
        });
        var V = R(E, 4), H = X(V);
        {
          let N = /* @__PURE__ */ $(() => n().llmId ? [n().llmId] : []);
          _t(H, {
            get items() {
              return c(a);
            },
            style: "width: 100%",
            placeholder: "请选择模型",
            onSelect: (Y) => {
              const ee = Y.value;
              l(o, () => ({ llmId: ee }));
            },
            get value() {
              return c(N);
            }
          });
        }
        var I = R(H, 2);
        oo(I, {
          placement: "bottom",
          floating: (N) => {
            var Y = kC(), ee = R(X(Y), 2), j = X(ee), F = X(j), W = X(F);
            Z(F);
            var G = R(F, 2);
            br(G), G.__input = (de) => l(o, { temperature: parseFloat(de.target.value) }), Z(j), Z(ee);
            var re = R(ee, 2), L = X(re), te = X(L), fe = X(te);
            Z(te);
            var ue = R(te, 2);
            br(ue), ue.__input = (de) => l(o, { topP: parseFloat(de.target.value) }), Z(L), Z(re);
            var oe = R(re, 2), ce = X(oe), ve = X(ce), ke = X(ve);
            Z(ve);
            var be = R(ve, 2);
            br(be), be.__input = (de) => l(o, { topK: parseInt(de.target.value) }), Z(ce), Z(oe), Z(Y), Ne(() => {
              nt(W, `Temperature: ${n().temperature ?? 0.5 ?? ""}`), Gi(G, n().temperature ?? 0.5), nt(fe, `Top P: ${n().topP ?? 0.9 ?? ""}`), Gi(ue, n().topP ?? 0.9), nt(ke, `Top K: ${n().topK ?? 50 ?? ""}`), Gi(be, n().topK ?? 50);
            }), T(N, Y);
          },
          children: (N, Y) => {
            zi(N, {});
          },
          $$slots: { floating: !0, default: !0 }
        }), Z(V);
        var A = R(V, 4), D = X(A);
        {
          let N = /* @__PURE__ */ $(() => n().systemPrompt || "");
          et(D, {
            rows: 5,
            placeholder: "请输入系统提示词",
            style: "width: 100%",
            get value() {
              return c(N);
            },
            oninput: (Y) => {
              l(o, { systemPrompt: Y.target.value });
            }
          });
        }
        Z(A);
        var _ = R(A, 4), M = X(_);
        {
          let N = /* @__PURE__ */ $(() => n().userPrompt || "");
          et(M, {
            rows: 5,
            placeholder: "请输入用户提示词",
            style: "width: 100%",
            get value() {
              return c(N);
            },
            oninput: (Y) => {
              l(o, { userPrompt: Y.target.value });
            }
          });
        }
        Z(_);
        var S = R(_, 2);
        {
          var P = (N) => {
            var Y = CC(), ee = R(J(Y), 2), j = X(ee);
            {
              let F = /* @__PURE__ */ $(() => n().jsonSchema || "");
              et(j, {
                rows: 5,
                placeholder: "请输入 SON Schema",
                style: "width: 100%",
                get value() {
                  return c(F);
                },
                oninput: (W) => {
                  l(o, { jsonSchema: W.target.value });
                }
              });
            }
            Z(ee), T(N, Y);
          };
          se(S, (N) => {
            n().outType === "json" && N(P);
          });
        }
        var z = R(S, 2), B = X(z);
        qe(B, {
          level: 3,
          children: (N, Y) => {
            Se();
            var ee = Me("输出参数");
            T(N, ee);
          },
          $$slots: { default: !0 }
        });
        var q = R(B, 2);
        {
          let N = /* @__PURE__ */ $(() => n().outType ? [n().outType] : []);
          _t(q, {
            class: "w-25 ml-auto",
            items: [
              { label: "文本", value: "text" },
              { label: "JSON", value: "json" }
            ],
            onSelect: (Y) => {
              u(Y.value);
            },
            get value() {
              return c(N);
            }
          });
        }
        Z(z);
        var U = R(z, 2);
        hr(U, {}), T(h, v);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), le(d);
}
no(["input"]);
ie(mv, { data: {} }, [], [], !0);
var _C = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), OC = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), PC = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), EC = /* @__PURE__ */ ne('<div class="heading svelte-1wcsayx"><!> <!></div> <!> <!> <div class="setting-title svelte-1wcsayx">执行引擎</div> <div class="setting-item svelte-1wcsayx"><!></div> <div class="setting-title svelte-1wcsayx">执行代码</div> <div class="setting-item svelte-1wcsayx"><!></div> <div class="heading svelte-1wcsayx"><!> <!></div> <!>', 1);
const NC = {
  hash: "svelte-1wcsayx",
  code: ".heading.svelte-1wcsayx {display:flex;margin-bottom:10px;}.setting-title.svelte-1wcsayx {font-size:12px;color:var(--secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-1wcsayx {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function yv(t, e) {
  ae(e, !0), Ge(t, NC);
  const n = g(e, "data", 7), r = /* @__PURE__ */ De(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]);
  xn(() => {
    n().engine || s(o, () => ({ engine: "qlexpress" }));
  });
  const o = gt(), { addParameter: i } = $n(), { updateNodeData: s } = kt(), a = [
    { label: "JavaScript", value: "js" },
    { label: "Groovy", value: "groovy" },
    { label: "QLExpress", value: "qlexpress" }
  ];
  var l = {
    get data() {
      return n();
    },
    set data(u) {
      n(u), f();
    }
  };
  return un(t, Ie(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var d = _C();
        T(u, d);
      },
      children: (u, d) => {
        var h = EC(), p = J(h), v = X(p);
        qe(v, {
          level: 3,
          children: (I, A) => {
            Se();
            var D = Me("输入参数");
            T(I, D);
          },
          $$slots: { default: !0 }
        });
        var m = R(v, 2);
        Ze(m, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (I, A) => {
            var D = OC();
            T(I, D);
          },
          $$slots: { default: !0 }
        }), Z(p);
        var y = R(p, 2);
        Lt(y, {});
        var w = R(y, 2);
        qe(w, {
          level: 3,
          mt: "10px",
          children: (I, A) => {
            Se();
            var D = Me("代码");
            T(I, D);
          },
          $$slots: { default: !0 }
        });
        var b = R(w, 4), k = X(b);
        {
          let I = /* @__PURE__ */ $(() => n().engine ? [n().engine] : ["qlexpress"]);
          _t(k, {
            get items() {
              return a;
            },
            style: "width: 100%",
            placeholder: "请选择执行引擎",
            onSelect: (A) => {
              const D = A.value;
              s(o, () => ({ engine: D }));
            },
            get value() {
              return c(I);
            }
          });
        }
        Z(b);
        var O = R(b, 4), C = X(O);
        {
          let I = /* @__PURE__ */ $(() => n().code || "");
          et(C, {
            rows: 10,
            placeholder: "请输入执行代码，注：输出内容需添加到_result中，如：_result['key'] = value 或者 _result.key = value",
            style: "width: 100%",
            onchange: (A) => {
              s(o, () => ({ code: A.target.value }));
            },
            get value() {
              return c(I);
            }
          });
        }
        Z(O);
        var x = R(O, 2), E = X(x);
        qe(E, {
          level: 3,
          mt: "10px",
          children: (I, A) => {
            Se();
            var D = Me("输出参数");
            T(I, D);
          },
          $$slots: { default: !0 }
        });
        var V = R(E, 2);
        Ze(V, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (I, A) => {
            var D = PC();
            T(I, D);
          },
          $$slots: { default: !0 }
        }), Z(x);
        var H = R(x, 2);
        hr(H, {}), T(u, h);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), le(l);
}
ie(yv, { data: {} }, [], [], !0);
var zC = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>'), MC = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), TC = /* @__PURE__ */ ne('<div class="heading svelte-1lcrzpc"><!> <!></div> <!> <!> <div class="setting-item svelte-1lcrzpc"><!></div> <div class="heading svelte-1lcrzpc"><!></div> <!>', 1);
const AC = {
  hash: "svelte-1lcrzpc",
  code: ".heading.svelte-1lcrzpc {display:flex;margin-bottom:10px;}.setting-item.svelte-1lcrzpc {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function wv(t, e) {
  ae(e, !0), Ge(t, AC);
  const n = g(e, "data", 7), r = /* @__PURE__ */ De(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = gt(), { addParameter: i } = $n(), { updateNodeData: s } = kt();
  He(() => {
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
      n(l), f();
    }
  };
  return un(t, Ie(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = zC();
        T(l, u);
      },
      children: (l, u) => {
        var d = TC(), h = J(d), p = X(h);
        qe(p, {
          level: 3,
          children: (x, E) => {
            Se();
            var V = Me("输入参数");
            T(x, V);
          },
          $$slots: { default: !0 }
        });
        var v = R(p, 2);
        Ze(v, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (x, E) => {
            var V = MC();
            T(x, V);
          },
          $$slots: { default: !0 }
        }), Z(h);
        var m = R(h, 2);
        Lt(m, {});
        var y = R(m, 2);
        qe(y, {
          level: 3,
          mt: "10px",
          mb: "10px",
          children: (x, E) => {
            Se();
            var V = Me("模板内容");
            T(x, V);
          },
          $$slots: { default: !0 }
        });
        var w = R(y, 2), b = X(w);
        {
          let x = /* @__PURE__ */ $(() => n().template || "");
          et(b, {
            rows: 10,
            placeholder: "请输入模板内容",
            style: "width: 100%",
            onchange: (E) => {
              s(o, () => ({ template: E.target.value }));
            },
            get value() {
              return c(x);
            }
          });
        }
        Z(w);
        var k = R(w, 2), O = X(k);
        qe(O, {
          level: 3,
          mt: "10px",
          children: (x, E) => {
            Se();
            var V = Me("输出参数");
            T(x, V);
          },
          $$slots: { default: !0 }
        }), Z(k);
        var C = R(k, 2);
        hr(C, {}), T(l, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), le(a);
}
ie(wv, { data: {} }, [], [], !0);
var DC = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), VC = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), HC = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), LC = /* @__PURE__ */ ne('<!> <div class="radio-group svelte-19uflw6"><label class="svelte-19uflw6"><!>none</label> <label class="svelte-19uflw6"><!>form-data</label> <label class="svelte-19uflw6"><!>x-www-form-urlencoded</label> <label class="svelte-19uflw6"><!>json</label> <label class="svelte-19uflw6"><!>raw</label></div>', 1), IC = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), RC = /* @__PURE__ */ ne('<div class="heading svelte-19uflw6" style="padding-top: 10px"><!> <!></div> <!>', 1), BC = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), jC = /* @__PURE__ */ ne('<div class="heading svelte-19uflw6" style="padding-top: 10px"><!> <!></div> <!>', 1), KC = /* @__PURE__ */ ne('<div style="width: 100%"><!></div>'), FC = /* @__PURE__ */ ne('<div style="width: 100%"><!></div>'), ZC = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), WC = /* @__PURE__ */ ne('<div class="heading svelte-19uflw6"><!> <!></div> <!> <!> <div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-19uflw6"><!> <!></div> <!> <!> <!> <!> <!> <!> <div class="heading svelte-19uflw6"><!> <!></div> <!>', 1);
const XC = {
  hash: "svelte-19uflw6",
  code: ".heading.svelte-19uflw6 {display:flex;margin-bottom:10px;}.radio-group.svelte-19uflw6 {display:flex;margin:10px 0;flex-wrap:wrap;}.radio-group.svelte-19uflw6 label:where(.svelte-19uflw6) {display:flex;font-size:14px;box-sizing:border-box;}"
};
function bv(t, e) {
  ae(e, !0), Ge(t, XC);
  const n = g(e, "data", 7), r = /* @__PURE__ */ De(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]);
  xn(() => {
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
  ], i = gt(), { addParameter: s } = $n(), { updateNodeData: a } = kt();
  var l = {
    get data() {
      return n();
    },
    set data(u) {
      n(u), f();
    }
  };
  return un(t, Ie(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var d = DC();
        T(u, d);
      },
      children: (u, d) => {
        var h = WC(), p = J(h), v = X(p);
        qe(v, {
          level: 3,
          children: (F, W) => {
            Se();
            var G = Me("输入参数");
            T(F, G);
          },
          $$slots: { default: !0 }
        });
        var m = R(v, 2);
        Ze(m, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i);
          },
          children: (F, W) => {
            var G = VC();
            T(F, G);
          },
          $$slots: { default: !0 }
        }), Z(p);
        var y = R(p, 2);
        Lt(y, {});
        var w = R(y, 2);
        qe(w, {
          level: 3,
          mt: "10px",
          children: (F, W) => {
            Se();
            var G = Me("URL 地址");
            T(F, G);
          },
          $$slots: { default: !0 }
        });
        var b = R(w, 2), k = X(b), O = X(k);
        {
          let F = /* @__PURE__ */ $(() => n().method ? [n().method] : ["get"]);
          _t(O, {
            get items() {
              return o;
            },
            style: "width: 100%",
            placeholder: "请选择请求方式",
            onSelect: (W) => {
              const G = W.value;
              a(i, () => ({ method: G }));
            },
            get value() {
              return c(F);
            }
          });
        }
        Z(k);
        var C = R(k, 2), x = X(C);
        {
          let F = /* @__PURE__ */ $(() => n().url || "");
          vt(x, {
            placeholder: "请输入url",
            style: "width: 100%",
            onchange: (W) => {
              a(i, () => ({ url: W.target.value }));
            },
            get value() {
              return c(F);
            }
          });
        }
        Z(C), Z(b);
        var E = R(b, 2), V = X(E);
        qe(V, {
          level: 3,
          children: (F, W) => {
            Se();
            var G = Me("Http 头信息");
            T(F, G);
          },
          $$slots: { default: !0 }
        });
        var H = R(V, 2);
        Ze(H, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "headers");
          },
          children: (F, W) => {
            var G = HC();
            T(F, G);
          },
          $$slots: { default: !0 }
        }), Z(E);
        var I = R(E, 2);
        Lt(I, { dataKeyName: "headers" });
        var A = R(I, 2);
        {
          var D = (F) => {
            var W = LC(), G = J(W);
            qe(G, {
              level: 3,
              mt: "10px",
              children: (ye, Pe) => {
                Se();
                var Q = Me("Body");
                T(ye, Q);
              },
              $$slots: { default: !0 }
            });
            var re = R(G, 2), L = X(re), te = X(L);
            {
              let ye = /* @__PURE__ */ $(() => !n().bodyType || n().bodyType === "");
              vt(te, {
                type: "radio",
                value: "",
                get checked() {
                  return c(ye);
                },
                onchange: (Pe) => {
                  Pe.target?.checked && a(i, { bodyType: "" });
                }
              });
            }
            Se(), Z(L);
            var fe = R(L, 2), ue = X(fe);
            {
              let ye = /* @__PURE__ */ $(() => n().bodyType === "form-data");
              vt(ue, {
                type: "radio",
                value: "form-data",
                get checked() {
                  return c(ye);
                },
                onchange: (Pe) => {
                  Pe.target?.checked && a(i, { bodyType: "form-data" });
                }
              });
            }
            Se(), Z(fe);
            var oe = R(fe, 2), ce = X(oe);
            {
              let ye = /* @__PURE__ */ $(() => n().bodyType === "x-www-form-urlencoded");
              vt(ce, {
                type: "radio",
                value: "x-www-form-urlencoded",
                get checked() {
                  return c(ye);
                },
                onchange: (Pe) => {
                  Pe.target?.checked && a(i, { bodyType: "x-www-form-urlencoded" });
                }
              });
            }
            Se(), Z(oe);
            var ve = R(oe, 2), ke = X(ve);
            {
              let ye = /* @__PURE__ */ $(() => n().bodyType === "json");
              vt(ke, {
                type: "radio",
                value: "json",
                get checked() {
                  return c(ye);
                },
                onchange: (Pe) => {
                  Pe.target?.checked && a(i, { bodyType: "json" });
                }
              });
            }
            Se(), Z(ve);
            var be = R(ve, 2), de = X(be);
            {
              let ye = /* @__PURE__ */ $(() => n().bodyType === "raw");
              vt(de, {
                type: "radio",
                value: "raw",
                get checked() {
                  return c(ye);
                },
                onchange: (Pe) => {
                  Pe.target?.checked && a(i, { bodyType: "raw" });
                }
              });
            }
            Se(), Z(be), Z(re), T(F, W);
          };
          se(A, (F) => {
            (n().method === "post" || n().method === "put" || n().method === "delete" || n().method === "patch") && F(D);
          });
        }
        var _ = R(A, 2);
        {
          var M = (F) => {
            var W = RC(), G = J(W), re = X(G);
            qe(re, {
              level: 3,
              children: (fe, ue) => {
                Se();
                var oe = Me("参数");
                T(fe, oe);
              },
              $$slots: { default: !0 }
            });
            var L = R(re, 2);
            Ze(L, {
              size: "icon-xs",
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formData");
              },
              children: (fe, ue) => {
                var oe = IC();
                T(fe, oe);
              },
              $$slots: { default: !0 }
            }), Z(G);
            var te = R(G, 2);
            Lt(te, { dataKeyName: "formData" }), T(F, W);
          };
          se(_, (F) => {
            n().bodyType === "form-data" && F(M);
          });
        }
        var S = R(_, 2);
        {
          var P = (F) => {
            var W = jC(), G = J(W), re = X(G);
            qe(re, {
              level: 3,
              children: (fe, ue) => {
                Se();
                var oe = Me("Body 参数");
                T(fe, oe);
              },
              $$slots: { default: !0 }
            });
            var L = R(re, 2);
            Ze(L, {
              size: "icon-xs",
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formUrlencoded");
              },
              children: (fe, ue) => {
                var oe = BC();
                T(fe, oe);
              },
              $$slots: { default: !0 }
            }), Z(G);
            var te = R(G, 2);
            Lt(te, { dataKeyName: "formUrlencoded" }), T(F, W);
          };
          se(S, (F) => {
            n().bodyType === "x-www-form-urlencoded" && F(P);
          });
        }
        var z = R(S, 2);
        {
          var B = (F) => {
            var W = KC(), G = X(W);
            et(G, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入 json 信息",
              get value() {
                return n().bodyJson;
              },
              oninput: (re) => {
                a(i, { bodyJson: re.target.value });
              }
            }), Z(W), T(F, W);
          };
          se(z, (F) => {
            n().bodyType === "json" && F(B);
          });
        }
        var q = R(z, 2);
        {
          var U = (F) => {
            var W = FC(), G = X(W);
            et(G, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入请求信息",
              get value() {
                return n().bodyRaw;
              },
              oninput: (re) => {
                a(i, { bodyRaw: re.target.value });
              }
            }), Z(W), T(F, W);
          };
          se(q, (F) => {
            n().bodyType === "raw" && F(U);
          });
        }
        var N = R(q, 2), Y = X(N);
        qe(Y, {
          level: 3,
          mt: "10px",
          children: (F, W) => {
            Se();
            var G = Me("输出参数");
            T(F, G);
          },
          $$slots: { default: !0 }
        });
        var ee = R(Y, 2);
        Ze(ee, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "outputDefs");
          },
          children: (F, W) => {
            var G = ZC();
            T(F, G);
          },
          $$slots: { default: !0 }
        }), Z(N);
        var j = R(N, 2);
        hr(j, {}), T(u, h);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), le(l);
}
ie(bv, { data: {} }, [], [], !0);
var qC = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>'), YC = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), UC = /* @__PURE__ */ ne('<div class="heading svelte-ddi5i"><!> <!></div> <!> <!> <div class="setting-title svelte-ddi5i">知识库</div> <div class="setting-item svelte-ddi5i"><!></div> <div class="setting-title svelte-ddi5i">关键字</div> <div class="setting-item svelte-ddi5i"><!></div> <div class="setting-title svelte-ddi5i">获取数据量</div> <div class="setting-item svelte-ddi5i"><!></div> <div class="heading svelte-ddi5i"><!></div> <!>', 1);
const GC = {
  hash: "svelte-ddi5i",
  code: ".heading.svelte-ddi5i {display:flex;margin-bottom:10px;}.setting-title.svelte-ddi5i {font-size:12px;color:var(--secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-ddi5i {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function xv(t, e) {
  ae(e, !0), Ge(t, GC);
  const n = g(e, "data", 7), r = /* @__PURE__ */ De(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = gt(), { addParameter: i } = $n(), s = Sr();
  let a = /* @__PURE__ */ me(pt([]));
  xn(async () => {
    const d = await s.provider?.knowledge?.();
    c(a).push(...d || []);
  });
  const { updateNodeData: l } = kt();
  He(() => {
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
      n(d), f();
    }
  };
  return un(t, Ie(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (d) => {
        var h = qC();
        T(d, h);
      },
      children: (d, h) => {
        var p = UC(), v = J(p), m = X(v);
        qe(m, {
          level: 3,
          children: (D, _) => {
            Se();
            var M = Me("输入参数");
            T(D, M);
          },
          $$slots: { default: !0 }
        });
        var y = R(m, 2);
        Ze(y, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (D, _) => {
            var M = YC();
            T(D, M);
          },
          $$slots: { default: !0 }
        }), Z(v);
        var w = R(v, 2);
        Lt(w, {});
        var b = R(w, 2);
        qe(b, {
          level: 3,
          mt: "10px",
          children: (D, _) => {
            Se();
            var M = Me("知识库设置");
            T(D, M);
          },
          $$slots: { default: !0 }
        });
        var k = R(b, 4), O = X(k);
        {
          let D = /* @__PURE__ */ $(() => n().knowledgeId ? [n().knowledgeId] : []);
          _t(O, {
            get items() {
              return c(a);
            },
            style: "width: 100%",
            placeholder: "请选择知识库",
            onSelect: (_) => {
              const M = _.value;
              l(o, () => ({ knowledgeId: M }));
            },
            get value() {
              return c(D);
            }
          });
        }
        Z(k);
        var C = R(k, 4), x = X(C);
        vt(x, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (D) => {
            const _ = D.target.value;
            l(o, () => ({ keyword: _ }));
          }
        }), Z(C);
        var E = R(C, 4), V = X(E);
        {
          let D = /* @__PURE__ */ $(() => n().limit || "");
          vt(V, {
            placeholder: "搜索的数据条数",
            style: "width: 100%",
            onchange: (_) => {
              const M = _.target.value;
              l(o, () => ({ limit: M }));
            },
            get value() {
              return c(D);
            }
          });
        }
        Z(E);
        var H = R(E, 2), I = X(H);
        qe(I, {
          level: 3,
          mt: "10px",
          children: (D, _) => {
            Se();
            var M = Me("输出参数");
            T(D, M);
          },
          $$slots: { default: !0 }
        }), Z(H);
        var A = R(H, 2);
        hr(A, {}), T(d, p);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), le(u);
}
ie(xv, { data: {} }, [], [], !0);
var JC = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>'), QC = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), e$ = /* @__PURE__ */ ne('<div class="heading svelte-1qblm04"><!> <!></div> <!> <!> <div class="setting-title svelte-1qblm04">搜索引擎</div> <div class="setting-item svelte-1qblm04"><!></div> <div class="setting-title svelte-1qblm04">关键字</div> <div class="setting-item svelte-1qblm04"><!></div> <div class="setting-title svelte-1qblm04">搜索数据量</div> <div class="setting-item svelte-1qblm04"><!></div> <div class="heading svelte-1qblm04"><!></div> <!>', 1);
const t$ = {
  hash: "svelte-1qblm04",
  code: ".heading.svelte-1qblm04 {display:flex;margin-bottom:10px;}.setting-title.svelte-1qblm04 {font-size:12px;color:var(--secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-1qblm04 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function kv(t, e) {
  ae(e, !0), Ge(t, t$);
  const n = g(e, "data", 7), r = /* @__PURE__ */ De(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = gt(), { addParameter: i } = $n(), s = Sr();
  let a = /* @__PURE__ */ me(pt([]));
  xn(async () => {
    const d = await s.provider?.searchEngine?.();
    c(a).push(...d || []);
  });
  const { updateNodeData: l } = kt();
  He(() => {
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
      n(d), f();
    }
  };
  return un(t, Ie(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (d) => {
        var h = JC();
        T(d, h);
      },
      children: (d, h) => {
        var p = e$(), v = J(p), m = X(v);
        qe(m, {
          level: 3,
          children: (D, _) => {
            Se();
            var M = Me("输入参数");
            T(D, M);
          },
          $$slots: { default: !0 }
        });
        var y = R(m, 2);
        Ze(y, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (D, _) => {
            var M = QC();
            T(D, M);
          },
          $$slots: { default: !0 }
        }), Z(v);
        var w = R(v, 2);
        Lt(w, {});
        var b = R(w, 2);
        qe(b, {
          level: 3,
          mt: "10px",
          children: (D, _) => {
            Se();
            var M = Me("搜索引擎设置");
            T(D, M);
          },
          $$slots: { default: !0 }
        });
        var k = R(b, 4), O = X(k);
        {
          let D = /* @__PURE__ */ $(() => n().engine ? [n().engine] : []);
          _t(O, {
            get items() {
              return c(a);
            },
            style: "width: 100%",
            placeholder: "请选择搜索引擎",
            onSelect: (_) => {
              const M = _.value;
              l(o, () => ({ engine: M }));
            },
            get value() {
              return c(D);
            }
          });
        }
        Z(k);
        var C = R(k, 4), x = X(C);
        vt(x, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (D) => {
            const _ = D.target.value;
            l(o, () => ({ keyword: _ }));
          }
        }), Z(C);
        var E = R(C, 4), V = X(E);
        vt(V, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          get value() {
            return n().limit;
          },
          onchange: (D) => {
            const _ = D.target.value;
            l(o, () => ({ limit: _ }));
          }
        }), Z(E);
        var H = R(E, 2), I = X(H);
        qe(I, {
          level: 3,
          mt: "10px",
          children: (D, _) => {
            Se();
            var M = Me("输出参数");
            T(D, M);
          },
          $$slots: { default: !0 }
        }), Z(H);
        var A = R(H, 2);
        hr(A, {}), T(d, p);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), le(u);
}
ie(kv, { data: {} }, [], [], !0);
var n$ = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>'), r$ = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), o$ = /* @__PURE__ */ ne('<div class="heading svelte-1o34e8c"><!></div> <!> <div class="heading svelte-1o34e8c"><!> <!></div> <!>', 1);
const i$ = {
  hash: "svelte-1o34e8c",
  code: ".heading.svelte-1o34e8c {display:flex;margin:10px 0;align-items:center;}.loop_handle_wrapper::after {content:'循环体';width:100px;height:20px;background:var(--primary);color:var(--primary-foreground);display:flex;justify-content:center;align-items:center;}"
};
function Cv(t, e) {
  ae(e, !0), Ge(t, i$);
  const n = g(e, "data", 7), r = /* @__PURE__ */ De(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = gt(), { addParameter: i } = $n();
  He(() => {
    (!n().loopVars || n().loopVars.length === 0) && i(o, "loopVars", { name: "loopVar", nameDisabled: !0, deleteDisabled: !0 });
  });
  var s = {
    get data() {
      return n();
    },
    set data(a) {
      n(a), f();
    }
  };
  return un(t, Ie(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (a) => {
        var l = n$();
        T(a, l);
      },
      handle: (a) => {
        kr(a, {
          type: "source",
          get position() {
            return _e.Bottom;
          },
          id: "loop_handle",
          style: "bottom: -12px;width: 100px",
          class: "loop_handle_wrapper"
        });
      },
      children: (a, l) => {
        var u = o$(), d = J(u), h = X(d);
        qe(h, {
          level: 3,
          children: (b, k) => {
            Se();
            var O = Me("循环变量");
            T(b, O);
          },
          $$slots: { default: !0 }
        }), Z(d);
        var p = R(d, 2);
        Lt(p, { dataKeyName: "loopVars" });
        var v = R(p, 2), m = X(v);
        qe(m, {
          level: 3,
          children: (b, k) => {
            Se();
            var O = Me("输出参数");
            T(b, O);
          },
          $$slots: { default: !0 }
        });
        var y = R(m, 2);
        Ze(y, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (b, k) => {
            var O = r$();
            T(b, O);
          },
          $$slots: { default: !0 }
        }), Z(v);
        var w = R(v, 2);
        Lt(w, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs",
          useChildrenOnly: !0
        }), T(a, u);
      },
      $$slots: { icon: !0, handle: !0, default: !0 }
    }
  )), le(s);
}
ie(Cv, { data: {} }, [], [], !0);
var s$ = /* @__PURE__ */ ne('<div class="input-more-setting svelte-5x0hls"><div class="input-more-item svelte-5x0hls">数据内容： <!></div> <div class="input-more-item svelte-5x0hls">确认方式： <!></div> <div class="input-more-item svelte-5x0hls">数据标题： <!></div> <div class="input-more-item svelte-5x0hls">数据描述： <!></div>   <div class="input-more-item svelte-5x0hls"><!></div></div>'), a$ = /* @__PURE__ */ ne('<div class="input-item svelte-5x0hls"><!></div> <div class="input-item svelte-5x0hls"><!></div> <div class="input-item svelte-5x0hls"><!></div>', 1);
const l$ = {
  hash: "svelte-5x0hls",
  code: ".input-item.svelte-5x0hls {display:flex;align-items:center;}.input-more-setting.svelte-5x0hls {display:flex;flex-direction:column;gap:10px;padding:10px;background:var(--background);border:1px solid var(--border);border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-5x0hls .input-more-item:where(.svelte-5x0hls) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:var(--muted-foreground);}"
};
function $v(t, e) {
  ae(e, !0), Ge(t, l$);
  const n = g(e, "parameter", 7), r = g(e, "index", 7), o = g(e, "dataKeyName", 7), i = g(e, "useChildrenOnly", 7);
  let s = gt(), a = dr(s), l = /* @__PURE__ */ $(() => ({
    ...n(),
    ...a?.current?.data?.[o()][r()]
  }));
  const { updateNodeData: u } = kt(), d = (_, M) => {
    u(s, (S) => {
      let P = S.data?.[o()];
      return P[r()] = { ...P[r()], [_]: M }, { [o()]: P };
    });
  }, h = (_, M) => {
    const S = M.target.value;
    d(_, S);
  }, p = (_) => {
    const M = _.value;
    d("ref", M);
  }, v = (_) => {
    const M = _.value;
    d("formType", M);
  }, m = (_) => {
    const M = _.value;
    d("contentType", M);
  };
  let y;
  const w = () => {
    u(s, (_) => {
      let M = _.data?.[o()];
      return M.splice(r(), 1), { [o()]: [...M] };
    }), y?.hide();
  };
  let b = pv(i());
  var k = {
    get parameter() {
      return n();
    },
    set parameter(_) {
      n(_), f();
    },
    get index() {
      return r();
    },
    set index(_) {
      r(_), f();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(_) {
      o(_), f();
    },
    get useChildrenOnly() {
      return i();
    },
    set useChildrenOnly(_) {
      i(_), f();
    }
  }, O = a$(), C = J(O), x = X(C);
  {
    let _ = /* @__PURE__ */ $(() => c(l).nameDisabled === !0);
    vt(x, {
      style: "width: 100%;",
      get value() {
        return c(l).name;
      },
      placeholder: "请输入参数名称",
      get disabled() {
        return c(_);
      },
      oninput: (M) => h("name", M)
    });
  }
  Z(C);
  var E = R(C, 2), V = X(E);
  {
    var H = (_) => {
      vt(_, {
        get value() {
          return c(l).value;
        },
        placeholder: "请输入参数值",
        oninput: (M) => h("value", M)
      });
    }, I = (_) => {
      var M = he(), S = J(M);
      {
        var P = (z) => {
          {
            let B = /* @__PURE__ */ $(() => [c(l).ref]);
            _t(z, {
              get items() {
                return b.current;
              },
              style: "width: 100%",
              defaultValue: ["ref"],
              get value() {
                return c(B);
              },
              expandAll: !0,
              onSelect: p
            });
          }
        };
        se(
          S,
          (z) => {
            c(l).refType !== "input" && z(P);
          },
          !0
        );
      }
      T(_, M);
    };
    se(V, (_) => {
      c(l).refType === "fixed" ? _(H) : _(I, !1);
    });
  }
  Z(E);
  var A = R(E, 2), D = X(A);
  return Et(
    oo(D, {
      placement: "bottom",
      floating: (_) => {
        var M = s$(), S = X(M), P = R(X(S));
        {
          let F = /* @__PURE__ */ $(() => c(l).contentType ? [c(l).contentType] : []);
          _t(P, {
            get items() {
              return vu;
            },
            style: "width: 100%",
            defaultValue: ["text"],
            get value() {
              return c(F);
            },
            onSelect: m
          });
        }
        Z(S);
        var z = R(S, 2), B = R(X(z));
        {
          let F = /* @__PURE__ */ $(() => c(l).formType ? [c(l).formType] : []);
          _t(B, {
            get items() {
              return $x;
            },
            style: "width: 100%",
            defaultValue: ["single"],
            get value() {
              return c(F);
            },
            onSelect: v
          });
        }
        Z(z);
        var q = R(z, 2), U = R(X(q));
        et(U, {
          rows: 1,
          style: "width: 100%;",
          onchange: (F) => {
            h("formLabel", F);
          },
          get value() {
            return c(l).formLabel;
          }
        }), Z(q);
        var N = R(q, 2), Y = R(X(N));
        et(Y, {
          rows: 2,
          style: "width: 100%;",
          onchange: (F) => {
            h("formDescription", F);
          },
          get value() {
            return c(l).formDescription;
          }
        }), Z(N);
        var ee = R(N, 2), j = X(ee);
        Ze(j, {
          variant: "destructive",
          onclick: w,
          children: (F, W) => {
            Se();
            var G = Me("删除");
            T(F, G);
          },
          $$slots: { default: !0 }
        }), Z(ee), Z(M), T(_, M);
      },
      children: (_, M) => {
        zi(_, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (_) => y = _,
    () => y
  ), Z(A), T(t, O), le(k);
}
ie(
  $v,
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
var u$ = /* @__PURE__ */ ne('<div class="input-header svelte-1fllp9b">参数名称</div> <div class="input-header svelte-1fllp9b">参数值</div> <div class="input-header svelte-1fllp9b"></div>', 1), c$ = /* @__PURE__ */ ne('<div class="none-params svelte-1fllp9b"> </div>'), d$ = /* @__PURE__ */ ne('<div class="input-container svelte-1fllp9b"><!> <!></div>');
const h$ = {
  hash: "svelte-1fllp9b",
  code: `.input-container.svelte-1fllp9b {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1fllp9b .none-params:where(.svelte-1fllp9b) {font-size:12px;background:var(--secondary);height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1fllp9b .input-header:where(.svelte-1fllp9b) {font-size:12px;color:var(--muted-foreground);}`
};
function Sv(t, e) {
  ae(e, !0), Ge(t, h$);
  const n = g(e, "noneParameterText", 7, "无确认数据"), r = g(e, "dataKeyName", 7, "parameters"), o = g(e, "useChildrenOnly", 7);
  let i = gt(), s = dr(i), a = /* @__PURE__ */ $(() => [...s?.current?.data?.[r()] || []]);
  var l = {
    get noneParameterText() {
      return n();
    },
    set noneParameterText(v = "无确认数据") {
      n(v), f();
    },
    get dataKeyName() {
      return r();
    },
    set dataKeyName(v = "parameters") {
      r(v), f();
    },
    get useChildrenOnly() {
      return o();
    },
    set useChildrenOnly(v) {
      o(v), f();
    }
  }, u = d$(), d = X(u);
  {
    var h = (v) => {
      var m = u$();
      Se(4), T(v, m);
    };
    se(d, (v) => {
      c(a).length !== 0 && v(h);
    });
  }
  var p = R(d, 2);
  return xt(
    p,
    19,
    () => c(a),
    (v) => v.id,
    (v, m, y) => {
      $v(v, {
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
      var m = c$(), y = X(m, !0);
      Z(m), Ne(() => nt(y, n())), T(v, m);
    }
  ), Z(u), T(t, u), le(l);
}
ie(Sv, { noneParameterText: {}, dataKeyName: {}, useChildrenOnly: {} }, [], [], !0);
const _l = (t, e) => {
  if (t === e) return !0;
  if (typeof t != "object" || t === null || typeof e != "object" || e === null)
    return !1;
  const n = Array.isArray(t), r = Array.isArray(e);
  if (n !== r) return !1;
  if (n && r) {
    if (t.length !== e.length) return !1;
    for (let o = 0; o < t.length; o++)
      if (!_l(t[o], e[o])) return !1;
    return !0;
  } else {
    const o = Object.keys(t), i = Object.keys(e);
    if (o.length !== i.length) return !1;
    for (const s of o)
      if (!(s in e) || !_l(t[s], e[s])) return !1;
    return !0;
  }
};
var p$ = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), f$ = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), g$ = /* @__PURE__ */ ne('<div class="heading svelte-8iukvu"><!> <!></div> <!> <!> <div class="setting-title svelte-8iukvu">消息内容</div> <div class="setting-item svelte-8iukvu"><!></div> <div class="heading svelte-8iukvu"><!></div> <!>', 1);
const v$ = {
  hash: "svelte-8iukvu",
  code: ".heading.svelte-8iukvu {display:flex;margin-bottom:10px;}.setting-title.svelte-8iukvu {font-size:12px;color:var(--secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-8iukvu {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function _v(t, e) {
  ae(e, !0), Ge(t, v$);
  const n = g(e, "data", 7), r = /* @__PURE__ */ De(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = gt(), { addParameter: i } = $n(), { updateNodeData: s } = kt();
  He(() => {
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
      _l(l, n().outputDefs) || s(o, () => ({ outputDefs: l }));
    }
  });
  var a = {
    get data() {
      return n();
    },
    set data(l) {
      n(l), f();
    }
  };
  return un(t, Ie(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = p$();
        T(l, u);
      },
      children: (l, u) => {
        var d = g$(), h = J(d), p = X(h);
        qe(p, {
          level: 3,
          children: (x, E) => {
            Se();
            var V = Me("确认数据");
            T(x, V);
          },
          $$slots: { default: !0 }
        });
        var v = R(p, 2);
        Ze(v, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "confirms");
          },
          children: (x, E) => {
            var V = f$();
            T(x, V);
          },
          $$slots: { default: !0 }
        }), Z(h);
        var m = R(h, 2);
        Sv(m, { dataKeyName: "confirms", noneParameterText: "无确认数据" });
        var y = R(m, 2);
        qe(y, {
          level: 3,
          mt: "10px",
          children: (x, E) => {
            Se();
            var V = Me("确认消息");
            T(x, V);
          },
          $$slots: { default: !0 }
        });
        var w = R(y, 4), b = X(w);
        {
          let x = /* @__PURE__ */ $(() => n().message || "");
          et(b, {
            rows: 5,
            placeholder: "请输入用户需要确认的消息内容",
            style: "width: 100%",
            onchange: (E) => {
              s(o, () => ({ message: E.target.value }));
            },
            get value() {
              return c(x);
            }
          });
        }
        Z(w);
        var k = R(w, 2), O = X(k);
        qe(O, {
          level: 3,
          mt: "10px",
          children: (x, E) => {
            Se();
            var V = Me("输出参数");
            T(x, V);
          },
          $$slots: { default: !0 }
        }), Z(k);
        var C = R(k, 2);
        hr(C, { placeholder: "" }), T(l, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), le(a);
}
ie(_v, { data: {} }, [], [], !0);
const m$ = {
  startNode: cv,
  codeNode: yv,
  confirmNode: _v,
  llmNode: mv,
  templateNode: wv,
  httpNode: bv,
  knowledgeNode: xv,
  searchEngineNode: kv,
  loopNode: Cv,
  endNode: gv
};
var y$ = /* @__PURE__ */ ne("<!> ", 1);
function Ol(t, e) {
  ae(e, !0);
  const n = g(e, "icon", 7), r = g(e, "title", 7), o = g(e, "type", 7), i = g(e, "description", 7), s = g(e, "extra", 7), a = kt(), l = (h) => {
    if (!h.dataTransfer)
      return null;
    const p = {
      type: o(),
      data: { title: r(), description: i(), ...s() }
    };
    h.dataTransfer.setData("application/tinyflow", JSON.stringify(p)), h.dataTransfer.effectAllowed = "move";
  }, u = () => {
    const h = window.innerWidth, p = window.innerHeight, v = a.screenToFlowPosition({ x: h / 2, y: p / 2 }), m = {
      id: `node_${In()}`,
      type: o(),
      position: v,
      data: { title: r(), description: i(), ...s() }
    };
    Fe.addNode(m), Fe.selectNodeOnly(m.id);
  };
  var d = {
    get icon() {
      return n();
    },
    set icon(h) {
      n(h), f();
    },
    get title() {
      return r();
    },
    set title(h) {
      r(h), f();
    },
    get type() {
      return o();
    },
    set type(h) {
      o(h), f();
    },
    get description() {
      return i();
    },
    set description(h) {
      i(h), f();
    },
    get extra() {
      return s();
    },
    set extra(h) {
      s(h), f();
    }
  };
  return Ze(t, {
    draggable: !0,
    ondragstart: l,
    onclick: u,
    get "data-node-type"() {
      return o();
    },
    children: (h, p) => {
      var v = y$(), m = J(v);
      na(m, n);
      var y = R(m);
      Ne(() => nt(y, ` ${r() ?? ""}`)), T(h, v);
    },
    $$slots: { default: !0 }
  }), le(d);
}
ie(Ol, { icon: {}, title: {}, type: {}, description: {}, extra: {} }, [], [], !0);
var w$ = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), b$ = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), x$ = /* @__PURE__ */ ne('<div><div class="tf-toolbar-container"><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"></div></div></div> <!></div>');
function Ov(t, e) {
  ae(e, !0);
  let n = /* @__PURE__ */ me("base"), r = /* @__PURE__ */ me("show");
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
  ], s = [], a = Sr(), l = a.customNodes;
  if (l) {
    const b = Object.keys(l).sort((k, O) => (l[k].sortNo || 0) - (l[O].sortNo || 0));
    for (let k of b)
      l[k].group === "base" ? o.push({ type: k, ...l[k] }) : s.push({
        icon: l[k].icon,
        title: l[k].title,
        type: k
      });
    o.sort((k, O) => (k.sortNo || 0) - (O.sortNo || 0));
  }
  if (a.hiddenNodes) {
    const b = typeof a.hiddenNodes == "function" ? a.hiddenNodes() : a.hiddenNodes;
    if (Array.isArray(b)) {
      for (let k of b)
        for (let O = 0; O < o.length; O++)
          if (o[O].type === k) {
            o.splice(O, 1);
            break;
          }
    }
  }
  var u = x$(), d = X(u), h = X(d), p = X(h);
  sv(p, {
    style: "width: 100%",
    get items() {
      return i;
    },
    onChange: (b) => {
      K(n, b.value.toString(), !0);
    }
  }), Z(h);
  var v = R(h, 2), m = X(v);
  xt(m, 21, () => o, Wr, (b, k) => {
    Ol(b, Ie(() => c(k)));
  }), Z(m);
  var y = R(m, 2);
  xt(y, 21, () => s, Wr, (b, k) => {
    Ol(b, Ie(() => c(k)));
  }), Z(y), Z(v), Z(d);
  var w = R(d, 2);
  Ze(w, {
    size: "icon",
    variant: "outline",
    onclick: () => {
      K(r, c(r) ? "" : "show", !0);
    },
    children: (b, k) => {
      var O = he(), C = J(O);
      {
        var x = (V) => {
          var H = w$();
          T(V, H);
        }, E = (V) => {
          var H = b$();
          T(V, H);
        };
        se(C, (V) => {
          c(r) === "show" ? V(x) : V(E, !1);
        });
      }
      T(b, O);
    },
    $$slots: { default: !0 }
  }), Z(u), Ne(() => {
    Xt(u, 1, `tf-toolbar ${c(r) ?? ""}`), Pt(m, `display: ${c(n) === "base" ? "flex" : "none"}`), Pt(y, `display: ${c(n) !== "base" ? "flex" : "none"}`);
  }), T(t, u), le();
}
ie(Ov, {}, [], [], !0);
const k$ = () => ({ getNode: (t) => Fe.getNode(t) }), C$ = () => ({ ensureParentInNodesBefore: (t, e) => {
  Fe.updateNodes((n) => {
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
} }), $$ = () => ({ getEdgesByTarget: (t) => Fe.getEdges().filter((e) => e.target === t) });
var S$ = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), _$ = /* @__PURE__ */ ne('<div class="heading svelte-qt4m0r"><!> <!></div> <!>', 1), O$ = /* @__PURE__ */ ne('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), P$ = /* @__PURE__ */ ne('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), E$ = /* @__PURE__ */ ne('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><div class="slider-container svelte-qt4m0r"><span class="svelte-qt4m0r"> </span> <input/></div></div>', 1), N$ = /* @__PURE__ */ ne('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), z$ = /* @__PURE__ */ ne('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), M$ = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), T$ = /* @__PURE__ */ ne('<div class="heading svelte-qt4m0r"><!> <!></div> <!>', 1), A$ = /* @__PURE__ */ ne("<!> <!> <div></div> <!>", 1);
const D$ = {
  hash: "svelte-qt4m0r",
  code: `.heading.svelte-qt4m0r {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-qt4m0r {font-size:12px;color:var(--secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-qt4m0r {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}\r
\r
    /* 新增样式 */.slider-container.svelte-qt4m0r {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-qt4m0r span:where(.svelte-qt4m0r) {font-size:12px;color:var(--muted-foreground);display:flex;justify-content:space-between;align-items:center;}input[type='range'].svelte-qt4m0r {width:100%;height:4px;background:var(--muted);border-radius:2px;outline:none;-webkit-appearance:none;}input[type='range'].svelte-qt4m0r::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:var(--primary);border-radius:50%;cursor:pointer;}`
};
function Pv(t, e) {
  ae(e, !0), Ge(t, D$);
  const n = g(e, "data", 7), r = /* @__PURE__ */ De(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = gt(), { addParameter: i } = $n(), s = kt(), { updateNodeData: a } = s, l = (w) => {
    a(o, w);
  }, u = (w, b) => {
    l({ [w]: b.target?.value });
  }, d = { ...r, id: o, data: n() }, h = document.createElement("div"), p = Sr().customNodes[e.type];
  p.render?.(h, d, s);
  const v = p.forms;
  let m;
  He(() => {
    n().expand && m && m.append(h);
  }), He(() => {
    n() && p.onUpdate?.(h, { ...d, data: n() });
  }), He(() => {
    !n().parameters && p.parameters && l({
      parameters: ci(JSON.parse(JSON.stringify(p.parameters)))
    });
  }), He(() => {
    !n().outputDefs && p.outputDefs && l({
      outputDefs: ci(JSON.parse(JSON.stringify(p.outputDefs)))
    });
  });
  var y = {
    get data() {
      return n();
    },
    set data(w) {
      n(w), f();
    }
  };
  {
    const w = (k) => {
      var O = he(), C = J(O);
      na(C, () => p.icon), T(k, O);
    };
    let b = /* @__PURE__ */ $(() => ({ ...n(), description: p.description }));
    un(t, Ie(
      {
        get data() {
          return c(b);
        }
      },
      () => r,
      {
        icon: w,
        children: (k, O) => {
          var C = A$(), x = J(C);
          {
            var E = (_) => {
              var M = _$(), S = J(M), P = X(S);
              qe(P, {
                level: 3,
                children: (U, N) => {
                  Se();
                  var Y = Me("输入参数");
                  T(U, Y);
                },
                $$slots: { default: !0 }
              });
              var z = R(P, 2);
              {
                var B = (U) => {
                  Ze(U, {
                    size: "icon-xs",
                    class: "input-btn-more",
                    style: "margin-left: auto",
                    onclick: () => {
                      i(o);
                    },
                    children: (N, Y) => {
                      var ee = S$();
                      T(N, ee);
                    },
                    $$slots: { default: !0 }
                  });
                };
                se(z, (U) => {
                  p.parametersAddEnable !== !1 && U(B);
                });
              }
              Z(S);
              var q = R(S, 2);
              Lt(q, {}), T(_, M);
            };
            se(x, (_) => {
              p.parametersEnable !== !1 && _(E);
            });
          }
          var V = R(x, 2);
          {
            var H = (_) => {
              var M = he(), S = J(M);
              xt(S, 17, () => v, Wr, (P, z) => {
                var B = he(), q = J(B);
                {
                  var U = (Y) => {
                    var ee = O$(), j = J(ee), F = X(j, !0);
                    Z(j);
                    var W = R(j, 2), G = X(W);
                    {
                      let re = /* @__PURE__ */ $(() => n()[c(z).name] || c(z).defaultValue);
                      vt(G, Ie(
                        {
                          get placeholder() {
                            return c(z).placeholder;
                          },
                          style: "width: 100%",
                          get value() {
                            return c(re);
                          }
                        },
                        () => c(z).attrs,
                        {
                          onchange: (L) => {
                            u(c(z).name, L);
                          }
                        }
                      ));
                    }
                    Z(W), Ne(() => nt(F, c(z).label)), T(Y, ee);
                  }, N = (Y) => {
                    var ee = he(), j = J(ee);
                    {
                      var F = (G) => {
                        var re = P$(), L = J(re), te = X(L, !0);
                        Z(L);
                        var fe = R(L, 2), ue = X(fe);
                        {
                          let oe = /* @__PURE__ */ $(() => n()[c(z).name] || c(z).defaultValue);
                          et(ue, Ie(
                            {
                              rows: 3,
                              get placeholder() {
                                return c(z).placeholder;
                              },
                              style: "width: 100%",
                              get value() {
                                return c(oe);
                              }
                            },
                            () => c(z).attrs,
                            {
                              onchange: (ce) => {
                                u(c(z).name, ce);
                              }
                            }
                          ));
                        }
                        Z(fe), Ne(() => nt(te, c(z).label)), T(G, re);
                      }, W = (G) => {
                        var re = he(), L = J(re);
                        {
                          var te = (ue) => {
                            var oe = E$(), ce = J(oe), ve = X(ce, !0);
                            Z(ce);
                            var ke = R(ce, 2), be = X(ke), de = X(be), ye = X(de);
                            Z(de);
                            var Pe = R(de, 2), Q = (Le) => l({ [c(z).name]: parseFloat(Le.target.value) });
                            Ue(
                              Pe,
                              () => ({
                                class: "nodrag",
                                type: "range",
                                ...c(z).attrs,
                                value: n()[c(z).name] ?? c(z).defaultValue,
                                oninput: Q
                              }),
                              void 0,
                              void 0,
                              void 0,
                              "svelte-qt4m0r",
                              !0
                            ), Z(be), Z(ke), Ne(() => {
                              nt(ve, c(z).label), nt(ye, `${c(z).description ?? ""}: ${n()[c(z).name] ?? c(z).defaultValue ?? ""}`);
                            }), T(ue, oe);
                          }, fe = (ue) => {
                            var oe = he(), ce = J(oe);
                            {
                              var ve = (be) => {
                                var de = N$(), ye = J(de), Pe = X(ye, !0);
                                Z(ye);
                                var Q = R(ye, 2), Le = X(Q);
                                {
                                  let Ae = /* @__PURE__ */ $(() => c(z).options || []), We = /* @__PURE__ */ $(() => n()[c(z).name] ? [n()[c(z).name]] : [c(z).defaultValue]);
                                  _t(Le, {
                                    get items() {
                                      return c(Ae);
                                    },
                                    style: "width: 100%",
                                    get placeholder() {
                                      return c(z).placeholder;
                                    },
                                    onSelect: (je) => {
                                      const tt = je.value;
                                      l({ [c(z).name]: tt });
                                    },
                                    get value() {
                                      return c(We);
                                    }
                                  });
                                }
                                Z(Q), Ne(() => nt(Pe, c(z).label)), T(be, de);
                              }, ke = (be) => {
                                var de = he(), ye = J(de);
                                {
                                  var Pe = (Le) => {
                                    var Ae = z$(), We = J(Ae), je = X(We, !0);
                                    Z(We);
                                    var tt = R(We, 2), it = X(tt);
                                    {
                                      let dt = /* @__PURE__ */ $(() => c(z).chosen?.buttonText);
                                      iv(it, {
                                        style: "width: 100%",
                                        get placeholder() {
                                          return c(z).placeholder;
                                        },
                                        get buttonText() {
                                          return c(dt);
                                        },
                                        onChosen: (Qe, ge, ze) => {
                                          c(z).chosen?.onChosen?.(l, Qe, ge, ze);
                                        },
                                        get value() {
                                          return n()[c(z).chosen?.valueDataKey || ""];
                                        },
                                        get label() {
                                          return n()[c(z).chosen?.labelDataKey || ""];
                                        }
                                      });
                                    }
                                    Z(tt), Ne(() => nt(je, c(z).label)), T(Le, Ae);
                                  }, Q = (Le) => {
                                    var Ae = he(), We = J(Ae);
                                    {
                                      var je = (tt) => {
                                        qe(tt, Ie({ level: 3, mt: "10px" }, () => c(z).attrs, {
                                          children: (it, dt) => {
                                            Se();
                                            var Qe = Me();
                                            Ne(() => nt(Qe, c(z).label)), T(it, Qe);
                                          },
                                          $$slots: { default: !0 }
                                        }));
                                      };
                                      se(
                                        We,
                                        (tt) => {
                                          c(z).type === "heading" && tt(je);
                                        },
                                        !0
                                      );
                                    }
                                    T(Le, Ae);
                                  };
                                  se(
                                    ye,
                                    (Le) => {
                                      c(z).type === "chosen" ? Le(Pe) : Le(Q, !1);
                                    },
                                    !0
                                  );
                                }
                                T(be, de);
                              };
                              se(
                                ce,
                                (be) => {
                                  c(z).type === "select" ? be(ve) : be(ke, !1);
                                },
                                !0
                              );
                            }
                            T(ue, oe);
                          };
                          se(
                            L,
                            (ue) => {
                              c(z).type === "slider" ? ue(te) : ue(fe, !1);
                            },
                            !0
                          );
                        }
                        T(G, re);
                      };
                      se(
                        j,
                        (G) => {
                          c(z).type === "textarea" ? G(F) : G(W, !1);
                        },
                        !0
                      );
                    }
                    T(Y, ee);
                  };
                  se(q, (Y) => {
                    c(z).type === "input" ? Y(U) : Y(N, !1);
                  });
                }
                T(P, B);
              }), T(_, M);
            };
            se(V, (_) => {
              v && _(H);
            });
          }
          var I = R(V, 2);
          Et(I, (_) => m = _, () => m);
          var A = R(I, 2);
          {
            var D = (_) => {
              var M = T$(), S = J(M), P = X(S);
              qe(P, {
                level: 3,
                mt: "10px",
                children: (U, N) => {
                  Se();
                  var Y = Me("输出参数");
                  T(U, Y);
                },
                $$slots: { default: !0 }
              });
              var z = R(P, 2);
              {
                var B = (U) => {
                  Ze(U, {
                    size: "icon-xs",
                    class: "input-btn-more",
                    style: "margin-left: auto",
                    onclick: () => {
                      i(o, "outputDefs");
                    },
                    children: (N, Y) => {
                      var ee = M$();
                      T(N, ee);
                    },
                    $$slots: { default: !0 }
                  });
                };
                se(z, (U) => {
                  p.outputDefsAddEnable !== !1 && U(B);
                });
              }
              Z(S);
              var q = R(S, 2);
              hr(q, {}), T(_, M);
            };
            se(A, (_) => {
              p.outputDefsEnable !== !1 && _(D);
            });
          }
          Ne(() => {
            Pt(I, p.rootStyle || ""), Xt(I, 1, cr(p.rootClass), "svelte-qt4m0r");
          }), T(k, C);
        },
        $$slots: { icon: !0, default: !0 }
      }
    ));
  }
  return le(y);
}
ie(Pv, { data: {} }, [], [], !0);
const V$ = () => ({ updateEdgeData: (t, e, n) => {
  const r = Fe.getEdge(t);
  if (!r)
    return;
  const o = typeof e == "function" ? e(r) : e;
  r.data = n?.replace ? o : { ...r.data, ...o }, Fe.updateEdges((i) => i.map((s) => s.id === t ? r : s));
} }), H$ = () => ({ deleteEdge: (t) => {
  Fe.removeEdge(t);
} }), L$ = () => {
  const t = (e, n) => n.filter(
    // 排除循环节点的子节点，否则在多层循环嵌套时不正确
    (r) => r.source === e && r.sourceHandle !== "loop_handle"
  );
  return { getNodesFromSource: (e) => {
    const n = Fe.getEdges(), r = [];
    let o = t(e, n);
    for (; o.length > 0; ) {
      const i = [];
      o.forEach((s) => {
        r.push(Fe.getNode(s.target)), i.push(...t(s.target, n));
      }), o = i;
    }
    return r;
  } };
}, I$ = () => ({ getNodeRelativePosition: (t) => {
  let e = Fe.getNode(t);
  const n = { x: 0, y: 0 };
  for (; e; )
    n.x += e.position.x, n.y += e.position.y, e.parentId ? e = Fe.getNode(e.parentId) : e = void 0;
  return n;
} });
function R$(t) {
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
function B$(t) {
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
function j$(t) {
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
function Pl(t, e) {
  if (t == null)
    return t;
  if (Array.isArray(t))
    return t.map((n) => Pl(n, e));
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
      Object.hasOwn(t, r) && (n[r] = Pl(t[r], e));
    return n;
  }
  return t;
}
const K$ = () => (kt(), { copyHandler: async (t) => {
  const e = Fe.getNodes().filter((s) => s.selected);
  if (e.length === 0) return;
  const n = Fe.getEdges().filter((s) => e.some((a) => a.id === s.source) && e.some((a) => a.id === s.target)), r = e.map(R$), o = n.map(j$), i = JSON.stringify({
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
  const r = B$(n.tinyflowNodes), o = n.tinyflowEdges || [], i = /* @__PURE__ */ new Map(), s = [];
  for (const l of r) {
    const u = `node_${In()}`;
    i.set(l.id, u);
  }
  for (const l of r) {
    const u = i.get(l.id), d = l.parentId !== void 0 ? i.get(l.parentId) : void 0, h = Pl(l.data, i);
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
      id: `edge_${In()}`,
      source: u,
      target: d
    });
  }
  Fe.updateNodes((l) => [...l.map((u) => ({ ...u, selected: !1 })), ...s]), Fe.updateEdges((l) => [...l.map((u) => ({ ...u, selected: !1 })), ...a]);
} }), Nd = () => {
  const t = document.activeElement;
  return !t || !(t instanceof HTMLElement) ? !1 : t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement || t.isContentEditable;
};
var F$ = /* @__PURE__ */ ne('<div class="panel-content svelte-woejl3"><div>边属性设置</div> <div class="setting-title svelte-woejl3">边条件设置</div> <div class="setting-item svelte-woejl3"><!></div> <div class="setting-item svelte-woejl3" style="padding: 8px 0"><!> <!></div></div>'), Z$ = /* @__PURE__ */ ne("<!> <!> <!> <!>", 1), W$ = /* @__PURE__ */ ne('<div style="position: relative; height: 100%; width: 100%;overflow: hidden"><!> <!></div>');
const X$ = {
  hash: "svelte-woejl3",
  code: ".panel-content.svelte-woejl3 {padding:10px;background-color:var(--background);border-radius:5px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);width:200px;border:1px solid var(--border);}.setting-title.svelte-woejl3 {margin:10px 0;font-size:12px;color:var(--muted-foreground);}.setting-item.svelte-woejl3 {display:flex;gap:5px;align-items:center;justify-content:end;}"
};
function Ev(t, e) {
  ae(e, !0), Ge(t, X$);
  const n = g(e, "onInit", 7), r = g(e, "colorMode", 7), o = /* @__PURE__ */ De(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "onInit",
    "colorMode"
  ]), i = kt();
  console.log("props", o), n()(i);
  let s = /* @__PURE__ */ me(!1), a = /* @__PURE__ */ me(null);
  const { updateEdgeData: l } = V$(), u = (j) => {
    j.preventDefault(), j.dataTransfer && (j.dataTransfer.dropEffect = "move");
  }, d = (j) => {
    j.preventDefault();
    const F = i.screenToFlowPosition({ x: j.clientX - 250, y: j.clientY - 100 }), W = j.dataTransfer?.getData("application/tinyflow");
    if (!W)
      return;
    const G = JSON.parse(W), re = { id: `node_${In()}`, position: F, data: {}, ...G };
    Fe.addNode(re), Fe.selectNodeOnly(re.id);
  }, { getNode: h } = k$(), p = (j) => {
    const F = h(j.source), W = h(j.target);
    if (j.sourceHandle === "loop_handle" || F.parentId) {
      const G = i.getEdges();
      for (let re of G)
        if (re.target === j.target) {
          const L = h(re.source);
          if (j.sourceHandle === "loop_handle" && L.parentId !== F.id || F.parentId && L.parentId !== F.parentId)
            return !1;
        }
    }
    return !(!F.parentId && W.parentId && W.parentId !== F.id);
  }, { getNodesFromSource: v } = L$(), { getNodeRelativePosition: m } = I$(), { ensureParentInNodesBefore: y } = C$(), w = (j, F) => {
    if (!F.isValid)
      return;
    const W = F.toNode;
    if (W.parentId)
      return;
    const G = F.fromNode, re = F.fromHandle, L = { position: { ...W.position } };
    if (re.id === "loop_handle" ? L.parentId = G.id : G.parentId && (L.parentId = G.parentId), L.parentId) {
      const { x: te, y: fe } = m(L.parentId);
      L.position = { x: W.position.x - te, y: W.position.y - fe }, i.updateNode(W.id, L), v(W.id).forEach((ue) => {
        i.updateNode(ue.id, {
          parentId: L.parentId,
          position: { x: ue.position.x - te, y: ue.position.y - fe }
        });
      }), y(L.parentId, W.id);
    }
    setTimeout(() => {
      Fe.getEdges().forEach((te) => {
        te.target === W.id && te.source == G.id && (K(s, !0), K(a, te, !0));
      });
    });
  }, { getEdgesByTarget: b } = $$(), k = (j) => {
    j.edges.forEach((F) => {
      F.id === c(a)?.id && (K(a, null), K(s, !1));
      const W = h(F.target);
      if (W && W.parentId) {
        const G = b(F.target), { x: re, y: L } = m(W.parentId);
        if (G.length === 0)
          i.updateNode(W.id, {
            parentId: void 0,
            position: { x: W.position.x + re, y: W.position.y + L }
          }), v(W.id).forEach((te) => {
            i.updateNode(te.id, {
              parentId: void 0,
              position: { x: te.position.x + re, y: te.position.y + L }
            });
          });
        else {
          let te = !1;
          for (let fe = 0; fe < G.length; fe++) {
            const ue = G[fe], oe = h(ue.source);
            if (oe.parentId || oe.type === "loopNode") {
              te = !0;
              break;
            }
          }
          te || (i.updateNode(W.id, {
            parentId: void 0,
            position: { x: W.position.x + re, y: W.position.y + L }
          }), v(W.id).forEach((fe) => {
            i.updateNode(fe.id, {
              parentId: void 0,
              position: { x: fe.position.x + re, y: fe.position.y + L }
            });
          }));
        }
      }
    });
  }, { deleteEdge: O } = H$(), C = (j, F) => {
  }, x = (j) => {
  }, { copyHandler: E, pasteHandler: V } = K$(), H = (j) => {
    Nd() || ((j.ctrlKey || j.metaKey) && j.key === "c" && (j.preventDefault(), E(j)), (j.ctrlKey || j.metaKey) && j.key === "a" && (j.preventDefault(), Fe.updateNodes((F) => F.map((W) => ({ ...W, selected: !0 }))), Fe.updateEdges((F) => F.map((W) => ({ ...W, selected: !0 })))));
  }, I = async (j) => {
    Nd() || V(j);
  };
  xn(() => {
    window.addEventListener("keydown", H), window.addEventListener("paste", I);
  }), mi(() => {
    window.removeEventListener("keydown", H), window.removeEventListener("paste", I);
  });
  const A = {
    // ...nodeTypes
  }, D = Sr().customNodes;
  if (D)
    for (let j of Object.keys(D))
      A[j] = Pv;
  const _ = Sr().onDataChange;
  He(() => {
    _?.({
      nodes: Fe.getNodes(),
      edges: Fe.getEdges(),
      viewport: Fe.getViewport()
    });
  });
  var M = {
    get onInit() {
      return n();
    },
    set onInit(j) {
      n(j), f();
    },
    get colorMode() {
      return r();
    },
    set colorMode(j) {
      r(j), f();
    }
  }, S = W$(), P = X(S), z = Fe.getNodes, B = Fe.setNodes, q = Fe.getEdges, U = Fe.setEdges, N = Fe.getViewport, Y = Fe.setViewport;
  {
    let j = /* @__PURE__ */ $(() => ({ ...m$, ...A })), F = /* @__PURE__ */ $(() => ({
      markerEnd: { type: ii.ArrowClosed, width: 20, height: 20 }
    }));
    yf(P, {
      get colorMode() {
        return r();
      },
      get nodeTypes() {
        return c(j);
      },
      get nodes() {
        return z();
      },
      set nodes(W) {
        B(W);
      },
      get edges() {
        return q();
      },
      set edges(W) {
        U(W);
      },
      get viewport() {
        return N();
      },
      set viewport(W) {
        Y(W);
      },
      class: "tinyflow-logo",
      ondrop: d,
      ondragover: u,
      isValidConnection: p,
      onconnectend: w,
      onconnectstart: C,
      onconnect: x,
      connectionRadius: 50,
      onedgeclick: (W) => {
        K(s, !0), K(a, W.edge, !0);
      },
      onbeforeconnect: (W) => ({ ...W, id: In() }),
      ondelete: k,
      onclick: (W) => {
        const G = W.target;
        G.classList.contains("svelte-flow__edge-interaction") || G.classList.contains("panel-content") || G.closest(".panel-content") || (K(s, !1), K(a, null));
      },
      get defaultEdgeOptions() {
        return c(F);
      },
      children: (W, G) => {
        var re = Z$(), L = J(re);
        Pf(L, {});
        var te = R(L, 2);
        Sf(te, {});
        var fe = R(te, 2);
        Nf(fe, {});
        var ue = R(fe, 2);
        {
          var oe = (ce) => {
            Si(ce, {
              children: (ve, ke) => {
                var be = F$(), de = R(X(be), 4), ye = X(de);
                {
                  let Ae = /* @__PURE__ */ $(() => c(a)?.data?.condition);
                  et(ye, {
                    rows: 3,
                    placeholder: "请输入边条件",
                    style: "width: 100%",
                    get value() {
                      return c(Ae);
                    },
                    onchange: (We) => {
                      c(a) && l(c(a).id, { condition: We.target?.value });
                    }
                  });
                }
                Z(de);
                var Pe = R(de, 2), Q = X(Pe);
                Ze(Q, {
                  variant: "destructive",
                  onclick: () => {
                    O(c(a)?.id), K(s, !1);
                  },
                  children: (Ae, We) => {
                    Se();
                    var je = Me("删除");
                    T(Ae, je);
                  },
                  $$slots: { default: !0 }
                });
                var Le = R(Q, 2);
                Ze(Le, {
                  variant: "default",
                  onclick: () => {
                    K(s, !1);
                  },
                  children: (Ae, We) => {
                    Se();
                    var je = Me("保存");
                    T(Ae, je);
                  },
                  $$slots: { default: !0 }
                }), Z(Pe), Z(be), T(ve, be);
              },
              $$slots: { default: !0 }
            });
          };
          se(ue, (ce) => {
            c(s) && ce(oe);
          });
        }
        T(W, re);
      },
      $$slots: { default: !0 }
    });
  }
  var ee = R(P, 2);
  return Ov(ee, {}), Z(S), T(t, S), le(M);
}
ie(Ev, { onInit: {}, colorMode: {} }, [], [], !0);
const Nv = typeof window < "u" ? window : void 0;
function q$(t) {
  let e = t.activeElement;
  for (; e?.shadowRoot; ) {
    const n = e.shadowRoot.activeElement;
    if (n === e)
      break;
    e = n;
  }
  return e;
}
let Y$ = class {
  #e;
  #t;
  constructor(t = {}) {
    const { window: e = Nv, document: n = e?.document } = t;
    e !== void 0 && (this.#e = n, this.#t = Jr((r) => {
      const o = ft(e, "focusin", r), i = ft(e, "focusout", r);
      return () => {
        o(), i();
      };
    }));
  }
  get current() {
    return this.#t?.(), this.#e ? q$(this.#e) : null;
  }
};
new Y$();
function U$(t, e) {
  switch (t) {
    case "post":
      He(e);
      break;
    case "pre":
      jt(e);
      break;
  }
}
function zv(t, e, n, r = {}) {
  const { lazy: o = !1 } = r;
  let i = !o, s = Array.isArray(t) ? [] : void 0;
  U$(e, () => {
    const a = Array.isArray(t) ? t.map((u) => u()) : t();
    if (!i) {
      i = !0, s = a;
      return;
    }
    const l = lt(() => n(a, s));
    return s = a, l;
  });
}
function Zu(t, e, n) {
  zv(t, "post", e, n);
}
function G$(t, e, n) {
  zv(t, "pre", e, n);
}
Zu.pre = G$;
function J$(t, e) {
  switch (t) {
    case "local":
      return e.localStorage;
    case "session":
      return e.sessionStorage;
  }
}
class Mv {
  #e;
  #t;
  #n;
  #r;
  #o;
  #i = /* @__PURE__ */ me(0);
  constructor(e, n, r = {}) {
    const {
      storage: o = "local",
      serializer: i = { serialize: JSON.stringify, deserialize: JSON.parse },
      syncTabs: s = !0,
      window: a = Nv
    } = r;
    if (this.#e = n, this.#t = e, this.#n = i, a === void 0) return;
    const l = J$(o, a);
    this.#r = l;
    const u = l.getItem(e);
    u !== null ? this.#e = this.#s(u) : this.#l(n), s && o === "local" && (this.#o = Jr(() => ft(a, "storage", this.#a)));
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
function zd(t) {
  return t.filter((e) => e.length > 0);
}
const Tv = {
  getItem: (t) => null,
  setItem: (t, e) => {
  }
}, Mi = typeof document < "u";
function Q$(t) {
  return typeof t == "function";
}
function e6(t) {
  return t !== null && typeof t == "object";
}
const di = Symbol("box"), Wu = Symbol("is-writable");
function t6(t) {
  return e6(t) && di in t;
}
function n6(t) {
  return yt.isBox(t) && Wu in t;
}
function yt(t) {
  let e = /* @__PURE__ */ me(pt(t));
  return {
    [di]: !0,
    [Wu]: !0,
    get current() {
      return c(e);
    },
    set current(n) {
      K(e, n, !0);
    }
  };
}
function r6(t, e) {
  const n = /* @__PURE__ */ $(t);
  return e ? {
    [di]: !0,
    [Wu]: !0,
    get current() {
      return c(n);
    },
    set current(r) {
      e(r);
    }
  } : {
    [di]: !0,
    get current() {
      return t();
    }
  };
}
function o6(t) {
  return yt.isBox(t) ? t : Q$(t) ? yt.with(t) : yt(t);
}
function i6(t) {
  return Object.entries(t).reduce(
    (e, [n, r]) => yt.isBox(r) ? (yt.isWritableBox(r) ? Object.defineProperty(e, n, {
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
function s6(t) {
  return yt.isWritableBox(t) ? {
    [di]: !0,
    get current() {
      return t.current;
    }
  } : t;
}
yt.from = o6;
yt.with = r6;
yt.flatten = i6;
yt.readonly = s6;
yt.isBox = t6;
yt.isWritableBox = n6;
function a6(t, e) {
  const n = RegExp(t, "g");
  return (r) => {
    if (typeof r != "string")
      throw new TypeError(`expected an argument of type string, but got ${typeof r}`);
    return r.match(n) ? r.replace(n, e) : r;
  };
}
const l6 = a6(/[A-Z]/, (t) => `-${t.toLowerCase()}`);
function u6(t) {
  if (!t || typeof t != "object" || Array.isArray(t))
    throw new TypeError(`expected an argument of type object, but got ${typeof t}`);
  return Object.keys(t).map((e) => `${l6(e)}: ${t[e]};`).join(`
`);
}
function c6(t = {}) {
  return u6(t).replace(`
`, " ");
}
const d6 = {
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
c6(d6);
const h6 = typeof window < "u" ? window : void 0;
function p6(t) {
  let e = t.activeElement;
  for (; e?.shadowRoot; ) {
    const n = e.shadowRoot.activeElement;
    if (n === e)
      break;
    e = n;
  }
  return e;
}
class f6 {
  #e;
  #t;
  constructor(e = {}) {
    const { window: n = h6, document: r = n?.document } = e;
    n !== void 0 && (this.#e = r, this.#t = Jr((o) => {
      const i = ft(n, "focusin", o), s = ft(n, "focusout", o);
      return () => {
        i(), s();
      };
    }));
  }
  get current() {
    return this.#t?.(), this.#e ? p6(this.#e) : null;
  }
}
new f6();
const Ir = yt("mode-watcher-mode"), Rr = yt("mode-watcher-theme"), g6 = ["dark", "light", "system"];
function El(t) {
  return typeof t != "string" ? !1 : g6.includes(t);
}
class v6 {
  #e = "system";
  #t = Mi ? localStorage : Tv;
  #n = this.#t.getItem(Ir.current);
  #r = El(this.#n) ? this.#n : this.#e;
  #o = /* @__PURE__ */ me(pt(this.#i()));
  #i(e = this.#r) {
    return new Mv(Ir.current, e, {
      serializer: {
        serialize: (n) => n,
        deserialize: (n) => El(n) ? n : this.#e
      }
    });
  }
  constructor() {
    Qr(() => Zu.pre(() => Ir.current, (e, n) => {
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
class m6 {
  #e = void 0;
  #t = !0;
  #n = /* @__PURE__ */ me(pt(this.#e));
  #r = typeof window < "u" && typeof window.matchMedia == "function" ? new Yp("prefers-color-scheme: light") : { current: !1 };
  query() {
    Mi && K(this.#n, this.#r.current ? "light" : "dark", !0);
  }
  tracking(e) {
    this.#t = e;
  }
  constructor() {
    Qr(() => {
      jt(() => {
        this.#t && this.query();
      });
    }), this.query = this.query.bind(this), this.tracking = this.tracking.bind(this);
  }
  get current() {
    return c(this.#n);
  }
}
const Nl = new v6(), zl = new m6();
class y6 {
  #e = Mi ? localStorage : Tv;
  #t = this.#e.getItem(Rr.current);
  #n = this.#t === null || this.#t === void 0 ? "" : this.#t;
  #r = /* @__PURE__ */ me(pt(this.#o()));
  #o(e = this.#n) {
    return new Mv(Rr.current, e, {
      serializer: {
        serialize: (n) => typeof n != "string" ? "" : n,
        deserialize: (n) => n
      }
    });
  }
  constructor() {
    Qr(() => Zu.pre(() => Rr.current, (e, n) => {
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
const as = new y6();
let Md, Td, Ad = !1, qi = null;
function w6() {
  return qi || (qi = document.createElement("style"), qi.appendChild(document.createTextNode(`* {
		-webkit-transition: none !important;
		-moz-transition: none !important;
		-o-transition: none !important;
		-ms-transition: none !important;
		transition: none !important;
	}`)), qi);
}
function Av(t, e = !1) {
  if (typeof document > "u")
    return;
  if (!Ad) {
    Ad = !0, t();
    return;
  }
  if (typeof process < "u" && process.env?.NODE_ENV === "test" || typeof window < "u" && window.__vitest_worker__) {
    t();
    return;
  }
  clearTimeout(Md), clearTimeout(Td);
  const n = w6(), r = () => document.head.appendChild(n), o = () => {
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
  r(), Md = window.setTimeout(() => {
    t(), Td = window.setTimeout(o, 16);
  }, 16);
}
const vr = yt(void 0), Ks = yt(!0), Fs = yt(!1), Ml = yt([]), Tl = yt([]);
function b6() {
  const t = /* @__PURE__ */ $(() => {
    if (!Mi) return;
    const e = Nl.current === "system" ? zl.current : Nl.current, n = zd(Ml.current), r = zd(Tl.current);
    function o() {
      const i = document.documentElement, s = document.querySelector('meta[name="theme-color"]');
      e === "light" ? (n.length && i.classList.remove(...n), r.length && i.classList.add(...r), i.style.colorScheme = "light", s && vr.current && s.setAttribute("content", vr.current.light)) : (r.length && i.classList.remove(...r), n.length && i.classList.add(...n), i.style.colorScheme = "dark", s && vr.current && s.setAttribute("content", vr.current.dark));
    }
    return Ks.current ? Av(o, Fs.current) : o(), e;
  });
  return {
    get current() {
      return c(t);
    }
  };
}
function x6() {
  const t = /* @__PURE__ */ $(() => {
    if (as.current, !Mi) return;
    function e() {
      document.documentElement.setAttribute("data-theme", as.current);
    }
    return Ks.current ? Av(e, lt(() => Fs.current)) : e(), as.current;
  });
  return {
    get current() {
      return c(t);
    }
  };
}
const k6 = b6(), C6 = x6();
function Dv(t) {
  Nl.current = t;
}
function $6(t) {
  as.current = t;
}
function S6({ defaultMode: t = "system", themeColors: e, darkClassNames: n = ["dark"], lightClassNames: r = [], defaultTheme: o = "", modeStorageKey: i = "mode-watcher-mode", themeStorageKey: s = "mode-watcher-theme" }) {
  const a = document.documentElement, l = localStorage.getItem(i) ?? t, u = localStorage.getItem(s) ?? o, d = l === "light" || l === "system" && window.matchMedia("(prefers-color-scheme: light)").matches;
  if (d ? (n.length && a.classList.remove(...n.filter(Boolean)), r.length && a.classList.add(...r.filter(Boolean))) : (r.length && a.classList.remove(...r.filter(Boolean)), n.length && a.classList.add(...n.filter(Boolean))), a.style.colorScheme = d ? "light" : "dark", e) {
    const h = document.querySelector('meta[name="theme-color"]');
    h && h.setAttribute("content", l === "light" ? e.light : e.dark);
  }
  u && (a.setAttribute("data-theme", u), localStorage.setItem(s, u)), localStorage.setItem(i, l);
}
var _6 = /* @__PURE__ */ ne('<meta name="theme-color"/>');
function Vv(t, e) {
  ae(e, !0);
  let n = g(e, "themeColors", 7);
  var r = {
    get themeColors() {
      return n();
    },
    set themeColors(a) {
      n(a), f();
    }
  }, o = he(), i = J(o);
  {
    var s = (a) => {
      var l = _6();
      Ne(() => Oe(l, "content", n().dark)), T(a, l);
    };
    se(i, (a) => {
      n() && a(s);
    });
  }
  return T(t, o), le(r);
}
ie(Vv, { themeColors: {} }, [], [], !0);
var O6 = /* @__PURE__ */ ne('<meta name="theme-color"/>'), P6 = /* @__PURE__ */ ne("<!> <!>", 1);
function Hv(t, e) {
  ae(e, !0);
  let n = g(e, "trueNonce", 7, ""), r = g(e, "initConfig", 7), o = g(e, "themeColors", 7);
  var i = {
    get trueNonce() {
      return n();
    },
    set trueNonce(s = "") {
      n(s), f();
    },
    get initConfig() {
      return r();
    },
    set initConfig(s) {
      r(s), f();
    },
    get themeColors() {
      return o();
    },
    set themeColors(s) {
      o(s), f();
    }
  };
  return p1("171tvz2", (s) => {
    var a = P6(), l = J(a);
    {
      var u = (h) => {
        var p = O6();
        Ne(() => Oe(p, "content", o().dark)), T(h, p);
      };
      se(l, (h) => {
        o() && h(u);
      });
    }
    var d = R(l, 2);
    na(d, () => `<script${n() ? ` nonce=${n()}` : ""}>(` + S6.toString() + ")(" + JSON.stringify(r()) + ");<\/script>"), T(s, a);
  }), le(i);
}
ie(Hv, { trueNonce: {}, initConfig: {}, themeColors: {} }, [], [], !0);
function Lv(t, e) {
  ae(e, !0);
  let n = g(e, "track", 7, !0), r = g(e, "defaultMode", 7, "system"), o = g(e, "themeColors", 7), i = g(e, "disableTransitions", 7, !0), s = g(e, "darkClassNames", 23, () => ["dark"]), a = g(e, "lightClassNames", 23, () => []), l = g(e, "defaultTheme", 7, ""), u = g(e, "nonce", 7, ""), d = g(e, "themeStorageKey", 7, "mode-watcher-theme"), h = g(e, "modeStorageKey", 7, "mode-watcher-mode"), p = g(e, "disableHeadScriptInjection", 7, !1), v = g(e, "synchronousModeChanges", 7, !1);
  Ir.current = h(), Rr.current = d(), Ml.current = s(), Tl.current = a(), Ks.current = i(), vr.current = o(), Fs.current = v(), jt(() => {
    Fs.current = v();
  }), jt(() => {
    Ks.current = i();
  }), jt(() => {
    vr.current = o();
  }), jt(() => {
    Ml.current = s();
  }), jt(() => {
    Tl.current = a();
  }), jt(() => {
    Ir.current = h();
  }), jt(() => {
    Rr.current = d();
  }), jt(() => {
    k6.current, Ir.current, Rr.current, C6.current;
  }), xn(() => {
    zl.tracking(n()), zl.query();
    const x = localStorage.getItem(Ir.current);
    Dv(El(x) ? x : r());
    const E = localStorage.getItem(Rr.current);
    $6(E || l());
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
    set track(x = !0) {
      n(x), f();
    },
    get defaultMode() {
      return r();
    },
    set defaultMode(x = "system") {
      r(x), f();
    },
    get themeColors() {
      return o();
    },
    set themeColors(x) {
      o(x), f();
    },
    get disableTransitions() {
      return i();
    },
    set disableTransitions(x = !0) {
      i(x), f();
    },
    get darkClassNames() {
      return s();
    },
    set darkClassNames(x = ["dark"]) {
      s(x), f();
    },
    get lightClassNames() {
      return a();
    },
    set lightClassNames(x = []) {
      a(x), f();
    },
    get defaultTheme() {
      return l();
    },
    set defaultTheme(x = "") {
      l(x), f();
    },
    get nonce() {
      return u();
    },
    set nonce(x = "") {
      u(x), f();
    },
    get themeStorageKey() {
      return d();
    },
    set themeStorageKey(x = "mode-watcher-theme") {
      d(x), f();
    },
    get modeStorageKey() {
      return h();
    },
    set modeStorageKey(x = "mode-watcher-mode") {
      h(x), f();
    },
    get disableHeadScriptInjection() {
      return p();
    },
    set disableHeadScriptInjection(x = !1) {
      p(x), f();
    },
    get synchronousModeChanges() {
      return v();
    },
    set synchronousModeChanges(x = !1) {
      v(x), f();
    }
  }, b = he(), k = J(b);
  {
    var O = (x) => {
      Vv(x, {
        get themeColors() {
          return vr.current;
        }
      });
    }, C = (x) => {
      Hv(x, {
        get trueNonce() {
          return c(y);
        },
        get initConfig() {
          return m;
        },
        get themeColors() {
          return vr.current;
        }
      });
    };
    se(k, (x) => {
      p() ? x(O) : x(C, !1);
    });
  }
  return T(t, b), le(w);
}
ie(
  Lv,
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
var E6 = /* @__PURE__ */ ne("<!> <!>", 1);
function N6(t, e) {
  ae(e, !0);
  const n = g(e, "options", 7), r = g(e, "onInit", 7);
  let { data: o, theme: i = "system" } = n();
  if (Dv(i), typeof o == "string")
    try {
      o = JSON.parse(o.trim());
    } catch {
      console.error("Invalid JSON data:", o);
    }
  Fe.init(o?.nodes || [], o?.edges || []), Fr("tinyflow_options", n());
  var s = {
    get options() {
      return n();
    },
    set options(d) {
      n(d), f();
    },
    get onInit() {
      return r();
    },
    set onInit(d) {
      r(d), f();
    }
  }, a = E6(), l = J(a);
  Lv(l, {});
  var u = R(l, 2);
  return wf(u, {
    children: (d, h) => {
      Ev(d, {
        get onInit() {
          return r();
        },
        get colorMode() {
          return i;
        }
      });
    },
    $$slots: { default: !0 }
  }), T(t, a), le(s);
}
customElements.define("tinyflow-component", ie(N6, { options: {}, onInit: {} }, [], [], !1));
const M6 = /* @__PURE__ */ Rv({
  __name: "Tinyflow",
  props: {
    className: {},
    style: {},
    data: {},
    provider: {},
    customNodes: {},
    onNodeExecute: { type: Function },
    hiddenNodes: { type: [Array, Function] },
    onDataChange: { type: Function },
    theme: {}
  },
  setup(t, { expose: e }) {
    const n = t, r = Bv(null);
    let o = null;
    function i(l) {
      if (l === null || typeof l != "object") return l;
      try {
        return structuredClone(l);
      } catch {
        try {
          return JSON.parse(JSON.stringify(l));
        } catch {
          return console.warn("Failed to clone object, returning original (may cause issues)", l), l;
        }
      }
    }
    return jv(() => {
      if (r.value) {
        const l = { ...n };
        "data" in l && l.data != null && (l.data = i(l.data)), o = new Sx({
          ...l,
          element: r.value
        });
      }
    }), Kv(() => {
      o && (o.destroy(), o = null);
    }), e({
      getData: () => o ? o.getData() : (console.warn("Tinyflow instance is not initialized"), null),
      getInstance: () => o || (console.warn("Tinyflow instance is not initialized"), null)
    }), (l, u) => (Zv(), Fv("div", {
      ref_key: "divRef",
      ref: r,
      class: Xv(["tinyflow", l.className]),
      style: Wv(l.style)
    }, null, 6));
  }
});
export {
  M6 as Tinyflow
};
//# sourceMappingURL=index.js.map
