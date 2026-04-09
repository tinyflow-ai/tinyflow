import { defineComponent as Rv, ref as jv, onMounted as Kv, onUnmounted as Fv, createElementBlock as Zv, openBlock as Wv, normalizeStyle as Xv, normalizeClass as qv } from "vue";
const Yv = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(Yv);
const Ld = 1, Hd = 2, Id = 4, Gv = 8, Uv = 16, Jv = 1, Qv = 2, Bd = 4, em = 8, tm = 16, Rd = 1, nm = 2, jd = "[", qs = "[!", Ll = "]", Fr = {}, Ot = Symbol(), rm = "http://www.w3.org/1999/xhtml", om = "http://www.w3.org/2000/svg", Kd = "@attach", im = !1;
var Ys = Array.isArray, sm = Array.prototype.indexOf, Hl = Array.from, ds = Object.keys, hs = Object.defineProperty, Jn = Object.getOwnPropertyDescriptor, Fd = Object.getOwnPropertyDescriptors, Zd = Object.prototype, am = Array.prototype, Gs = Object.getPrototypeOf, Gu = Object.isExtensible;
function Vo(t) {
  return typeof t == "function";
}
const je = () => {
};
function lm(t) {
  return t();
}
function Ra(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
function Wd() {
  var t, e, n = new Promise((r, o) => {
    t = r, e = o;
  });
  return { promise: n, resolve: t, reject: e };
}
function Lt(t, e, n = !1) {
  return t === void 0 ? n ? (
    /** @type {() => V} */
    e()
  ) : (
    /** @type {V} */
    e
  ) : t;
}
function Po(t, e) {
  if (Array.isArray(t))
    return t;
  if (e === void 0 || !(Symbol.iterator in t))
    return Array.from(t);
  const n = [];
  for (const r of t)
    if (n.push(r), n.length === e) break;
  return n;
}
const Et = 2, Il = 4, Us = 8, Xd = 1 << 24, ar = 16, lr = 32, Or = 64, Js = 128, mn = 512, Dt = 1024, qt = 2048, ur = 4096, Qt = 8192, Qn = 16384, Qs = 32768, nr = 65536, Uu = 1 << 17, Bl = 1 << 18, Jr = 1 << 19, qd = 1 << 20, Qo = 32768, ja = 1 << 21, Rl = 1 << 22, yr = 1 << 23, An = Symbol("$state"), jl = Symbol("legacy props"), um = Symbol(""), co = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), cm = 1, ea = 3, cr = 8;
function Kl(t) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function dm() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function hm(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function pm() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function fm(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function gm() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function vm() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function mm(t) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function ym() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function wm() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function bm() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function xm() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function gi(t) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function km() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function Cm() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let $e = !1;
function It(t) {
  $e = t;
}
let Te;
function ct(t) {
  if (t === null)
    throw gi(), Fr;
  return Te = t;
}
function yn() {
  return ct(
    /** @type {TemplateNode} */
    /* @__PURE__ */ tn(Te)
  );
}
function Z(t) {
  if ($e) {
    if (/* @__PURE__ */ tn(Te) !== null)
      throw gi(), Fr;
    Te = t;
  }
}
function Se(t = 1) {
  if ($e) {
    for (var e = t, n = Te; e--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ tn(n);
    Te = n;
  }
}
function ps(t = !0) {
  for (var e = 0, n = Te; ; ) {
    if (n.nodeType === cr) {
      var r = (
        /** @type {Comment} */
        n.data
      );
      if (r === Ll) {
        if (e === 0) return n;
        e -= 1;
      } else (r === jd || r === qs) && (e += 1);
    }
    var o = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ tn(n)
    );
    t && n.remove(), n = o;
  }
}
function Yd(t) {
  if (!t || t.nodeType !== cr)
    throw gi(), Fr;
  return (
    /** @type {Comment} */
    t.data
  );
}
function Gd(t) {
  return t === this.v;
}
function Ud(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function Jd(t) {
  return !Ud(t, this.v);
}
let Eo = !1, $m = !1;
function Sm() {
  Eo = !0;
}
const _m = [];
function Fl(t, e = !1, n = !1) {
  return Ji(t, /* @__PURE__ */ new Map(), "", _m, null, n);
}
function Ji(t, e, n, r, o = null, i = !1) {
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
    if (Ys(t)) {
      var a = (
        /** @type {Snapshot<any>} */
        Array(t.length)
      );
      e.set(t, a), o !== null && e.set(o, a);
      for (var l = 0; l < t.length; l += 1) {
        var u = t[l];
        l in t && (a[l] = Ji(u, e, n, r, null, i));
      }
      return a;
    }
    if (Gs(t) === Zd) {
      a = {}, e.set(t, a), o !== null && e.set(o, a);
      for (var d in t)
        a[d] = Ji(
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
      return Ji(
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
function mo(t) {
  ot = t;
}
function wn(t) {
  return (
    /** @type {T} */
    ta().get(t)
  );
}
function Zr(t, e) {
  return ta().set(t, e), e;
}
function Om(t) {
  return ta().has(t);
}
function Pm() {
  return ta();
}
function ae(t, e = !1, n) {
  ot = {
    p: ot,
    i: !1,
    c: null,
    e: null,
    s: t,
    x: null,
    l: Eo && !e ? { s: null, u: null, $: [] } : null
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
      mh(r);
  }
  return t !== void 0 && (e.x = t), e.i = !0, ot = e.p, t ?? /** @type {T} */
  {};
}
function No() {
  return !Eo || ot !== null && ot.l === null;
}
function ta(t) {
  return ot === null && Kl(), ot.c ??= new Map(Em(ot) || void 0);
}
function Em(t) {
  let e = t.p;
  for (; e !== null; ) {
    const n = e.c;
    if (n !== null)
      return n;
    e = e.p;
  }
  return null;
}
let Lr = [];
function Qd() {
  var t = Lr;
  Lr = [], Ra(t);
}
function Pr(t) {
  if (Lr.length === 0 && !Yo) {
    var e = Lr;
    queueMicrotask(() => {
      e === Lr && Qd();
    });
  }
  Lr.push(t);
}
function Nm() {
  for (; Lr.length > 0; )
    Qd();
}
function eh(t) {
  var e = We;
  if (e === null)
    return Ge.f |= yr, t;
  if ((e.f & Qs) === 0) {
    if ((e.f & Js) === 0)
      throw t;
    e.b.error(t);
  } else
    yo(t, e);
}
function yo(t, e) {
  for (; e !== null; ) {
    if ((e.f & Js) !== 0)
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
const Vi = /* @__PURE__ */ new Set();
let Qe = null, Qi = null, sn = null, on = [], na = null, Ka = !1, Yo = !1;
class fn {
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
    on = [], Qi = null, this.apply();
    var n = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: [],
      block_effects: []
    };
    for (const r of e)
      this.#s(r, n);
    this.is_fork || this.#c(), this.is_deferred() ? (this.#l(n.effects), this.#l(n.render_effects), this.#l(n.block_effects)) : (Qi = this, Qe = null, Ju(n.render_effects), Ju(n.effects), Qi = null, this.#o?.resolve()), sn = null;
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   * @param {EffectTarget} target
   */
  #s(e, n) {
    e.f ^= Dt;
    for (var r = e.first; r !== null; ) {
      var o = r.f, i = (o & (lr | Or)) !== 0, s = i && (o & Dt) !== 0, a = s || (o & Qt) !== 0 || this.skipped_effects.has(r);
      if ((r.f & Js) !== 0 && r.b?.is_pending() && (n = {
        parent: n,
        effect: r,
        effects: [],
        render_effects: [],
        block_effects: []
      }), !a && r.fn !== null) {
        i ? r.f ^= Dt : (o & Il) !== 0 ? n.effects.push(r) : mi(r) && ((r.f & ar) !== 0 && n.block_effects.push(r), ni(r));
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
      ((n.f & qt) !== 0 ? this.#i : this.#a).push(n), this.#u(n.deps), Vt(n, Dt);
  }
  /**
   * @param {Value[] | null} deps
   */
  #u(e) {
    if (e !== null)
      for (const n of e)
        (n.f & Et) === 0 || (n.f & Qo) === 0 || (n.f ^= Qo, this.#u(
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
    this.previous.has(e) || this.previous.set(e, n), (e.f & yr) === 0 && (this.current.set(e, e.v), sn?.set(e, e.v));
  }
  activate() {
    Qe = this, this.apply();
  }
  deactivate() {
    Qe === this && (Qe = null, sn = null);
  }
  flush() {
    if (this.activate(), on.length > 0) {
      if (th(), Qe !== null && Qe !== this)
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
    if (Vi.size > 1) {
      this.previous.clear();
      var e = sn, n = !0, r = {
        parent: null,
        effect: null,
        effects: [],
        render_effects: [],
        block_effects: []
      };
      for (const i of Vi) {
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
          var o = on;
          on = [];
          const l = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map();
          for (const d of s)
            nh(d, a, l, u);
          if (on.length > 0) {
            Qe = i, i.apply();
            for (const d of on)
              i.#s(d, r);
            i.deactivate();
          }
          on = o;
        }
      }
      Qe = null, sn = e;
    }
    this.committed = !0, Vi.delete(this);
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
      Vt(e, qt), Wr(e);
    for (const e of this.#a)
      Vt(e, ur), Wr(e);
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
    return (this.#o ??= Wd()).promise;
  }
  static ensure() {
    if (Qe === null) {
      const e = Qe = new fn();
      Vi.add(Qe), Yo || fn.enqueue(() => {
        Qe === e && e.flush();
      });
    }
    return Qe;
  }
  /** @param {() => void} task */
  static enqueue(e) {
    Pr(e);
  }
  apply() {
  }
}
function f(t) {
  var e = Yo;
  Yo = !0;
  try {
    for (var n; ; ) {
      if (Nm(), on.length === 0 && (Qe?.flush(), on.length === 0))
        return na = null, /** @type {T} */
        n;
      th();
    }
  } finally {
    Yo = e;
  }
}
function th() {
  var t = br;
  Ka = !0;
  try {
    var e = 0;
    for (gs(!0); on.length > 0; ) {
      var n = fn.ensure();
      if (e++ > 1e3) {
        var r, o;
        Mm();
      }
      n.process(on), wr.clear();
    }
  } finally {
    Ka = !1, gs(t), na = null;
  }
}
function Mm() {
  try {
    gm();
  } catch (t) {
    yo(t, na);
  }
}
let Zn = null;
function Ju(t) {
  var e = t.length;
  if (e !== 0) {
    for (var n = 0; n < e; ) {
      var r = t[n++];
      if ((r.f & (Qn | Qt)) === 0 && mi(r) && (Zn = /* @__PURE__ */ new Set(), ni(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? kh(r) : r.fn = null), Zn?.size > 0)) {
        wr.clear();
        for (const o of Zn) {
          if ((o.f & (Qn | Qt)) !== 0) continue;
          const i = [o];
          let s = o.parent;
          for (; s !== null; )
            Zn.has(s) && (Zn.delete(s), i.push(s)), s = s.parent;
          for (let a = i.length - 1; a >= 0; a--) {
            const l = i[a];
            (l.f & (Qn | Qt)) === 0 && ni(l);
          }
        }
        Zn.clear();
      }
    }
    Zn = null;
  }
}
function nh(t, e, n, r) {
  if (!n.has(t) && (n.add(t), t.reactions !== null))
    for (const o of t.reactions) {
      const i = o.f;
      (i & Et) !== 0 ? nh(
        /** @type {Derived} */
        o,
        e,
        n,
        r
      ) : (i & (Rl | ar)) !== 0 && (i & qt) === 0 && rh(o, e, r) && (Vt(o, qt), Wr(
        /** @type {Effect} */
        o
      ));
    }
}
function rh(t, e, n) {
  const r = n.get(t);
  if (r !== void 0) return r;
  if (t.deps !== null)
    for (const o of t.deps) {
      if (e.includes(o))
        return !0;
      if ((o.f & Et) !== 0 && rh(
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
function Wr(t) {
  for (var e = na = t; e.parent !== null; ) {
    e = e.parent;
    var n = e.f;
    if (Ka && e === We && (n & ar) !== 0 && (n & Bl) === 0)
      return;
    if ((n & (Or | lr)) !== 0) {
      if ((n & Dt) === 0) return;
      e.f ^= Dt;
    }
  }
  on.push(e);
}
function Qr(t) {
  let e = 0, n = rr(0), r;
  return () => {
    ei() && (c(n), to(() => (e === 0 && (r = it(() => t(() => Pn(n)))), e += 1, () => {
      Pr(() => {
        e -= 1, e === 0 && (r?.(), r = void 0, Pn(n));
      });
    })));
  };
}
var zm = nr | Jr | Js;
function Am(t, e, n) {
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
  #y = Qr(() => (this.#p = rr(this.#d), () => {
    this.#p = null;
  }));
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(e, n, r) {
    this.#t = e, this.#r = n, this.#o = r, this.parent = /** @type {Effect} */
    We.b, this.#e = !!this.#r.pending, this.#i = Er(() => {
      if (We.b = this, $e) {
        const i = this.#n;
        yn(), /** @type {Comment} */
        i.nodeType === cr && /** @type {Comment} */
        i.data === qs ? this.#w() : this.#v();
      } else {
        var o = this.#m();
        try {
          this.#a = Ut(() => r(o));
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
      this.#a = Ut(() => this.#o(this.#t));
    } catch (e) {
      this.error(e);
    }
    this.#e = !1;
  }
  #w() {
    const e = this.#r.pending;
    e && (this.#s = Ut(() => e(this.#t)), fn.enqueue(() => {
      var n = this.#m();
      this.#a = this.#g(() => (fn.ensure(), Ut(() => this.#o(n)))), this.#h > 0 ? this.#b() : (po(
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
    return this.#e && (this.#c = Rt(), this.#t.before(this.#c), e = this.#c), e;
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
    var n = We, r = Ge, o = ot;
    ln(this.#i), Zt(this.#i), mo(this.#i.ctx);
    try {
      return e();
    } catch (i) {
      return eh(i), null;
    } finally {
      ln(n), Zt(r), mo(o);
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
    ), Sh(this.#a, this.#u)), this.#s === null && (this.#s = Ut(() => e(this.#t)));
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
    this.#h += e, this.#h === 0 && (this.#e = !1, this.#s && po(this.#s, () => {
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
    this.#x(e), this.#d += e, this.#p && wo(this.#p, this.#d);
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
    this.#a && (_t(this.#a), this.#a = null), this.#s && (_t(this.#s), this.#s = null), this.#l && (_t(this.#l), this.#l = null), $e && (ct(
      /** @type {TemplateNode} */
      this.#n
    ), Se(), ct(ps()));
    var o = !1, i = !1;
    const s = () => {
      if (o) {
        Cm();
        return;
      }
      o = !0, i && xm(), fn.ensure(), this.#d = 0, this.#l !== null && po(this.#l, () => {
        this.#l = null;
      }), this.#e = this.has_pending_snippet(), this.#a = this.#g(() => (this.#f = !1, Ut(() => this.#o(this.#t)))), this.#h > 0 ? this.#b() : this.#e = !1;
    };
    var a = Ge;
    try {
      Zt(null), i = !0, n?.(e, s), i = !1;
    } catch (l) {
      yo(l, this.#i && this.#i.parent);
    } finally {
      Zt(a);
    }
    r && Pr(() => {
      this.#l = this.#g(() => {
        fn.ensure(), this.#f = !0;
        try {
          return Ut(() => {
            r(
              this.#t,
              () => e,
              () => s
            );
          });
        } catch (l) {
          return yo(
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
function Xr(t, e) {
  return e;
}
function Dm(t, e, n) {
  for (var r = [], o = e.length, i = 0; i < o; i++)
    ql(e[i].e, r, !0);
  Ch(r, () => {
    var s = r.length === 0 && n !== null;
    if (s) {
      var a = (
        /** @type {Element} */
        n
      ), l = (
        /** @type {Element} */
        a.parentNode
      );
      Xl(l), l.append(a), t.items.clear(), dn(t, e[0].prev, e[o - 1].next);
    }
    for (var u = 0; u < o; u++) {
      var d = e[u];
      s || (t.items.delete(d.k), dn(t, d.prev, d.next)), _t(d.e, !s);
    }
    t.first === e[0] && (t.first = e[0].prev);
  });
}
function Ct(t, e, n, r, o, i = null) {
  var s = t, a = /* @__PURE__ */ new Map(), l = null, u = (e & Id) !== 0, d = (e & Ld) !== 0, h = (e & Hd) !== 0;
  if (u) {
    var p = (
      /** @type {Element} */
      t
    );
    s = $e ? ct(
      /** @type {Comment | Text} */
      /* @__PURE__ */ mt(p)
    ) : p.appendChild(Rt());
  }
  $e && yn();
  var v = null, m = /* @__PURE__ */ Zl(() => {
    var C = n();
    return Ys(C) ? C : C == null ? [] : Hl(C);
  }), y, w = !0;
  function b() {
    Vm(O, y, s, e, r), v !== null && (y.length === 0 ? (v.fragment ? (s.before(v.fragment), v.fragment = null) : Yl(v.effect), k.first = v.effect) : po(v.effect, () => {
      v = null;
    }));
  }
  var k = Er(() => {
    y = /** @type {V[]} */
    c(m);
    var C = y.length;
    let x = !1;
    if ($e) {
      var E = Yd(s) === qs;
      E !== (C === 0) && (s = ps(), ct(s), It(!1), x = !0);
    }
    for (var V = /* @__PURE__ */ new Set(), L = (
      /** @type {Batch} */
      Qe
    ), I = null, D = ph(), N = 0; N < C; N += 1) {
      $e && Te.nodeType === cr && /** @type {Comment} */
      Te.data === Ll && (s = /** @type {Comment} */
      Te, x = !0, It(!1));
      var S = y[N], T = r(S, N), $ = w ? null : a.get(T);
      $ ? (d && wo($.v, S), h ? wo(
        /** @type {Value<number>} */
        $.i,
        N
      ) : $.i = N, D && L.skipped_effects.delete($.e)) : ($ = Lm(
        w ? s : null,
        I,
        S,
        T,
        N,
        o,
        e,
        n
      ), w && ($.o = !0, I === null ? l = $ : I.next = $, I = $), a.set(T, $)), V.add(T);
    }
    if (C === 0 && i && !v)
      if (w)
        v = {
          fragment: null,
          effect: Ut(() => i(s))
        };
      else {
        var P = document.createDocumentFragment(), M = Rt();
        P.append(M), v = {
          fragment: P,
          effect: Ut(() => i(M))
        };
      }
    if ($e && C > 0 && ct(ps()), !w)
      if (D) {
        for (const [j, q] of a)
          V.has(j) || L.skipped_effects.add(q.e);
        L.oncommit(b), L.ondiscard(() => {
        });
      } else
        b();
    x && It(!0), c(m);
  }), O = { effect: k, items: a, first: l };
  w = !1, $e && (s = Te);
}
function Vm(t, e, n, r, o) {
  var i = (r & Gv) !== 0, s = e.length, a = t.items, l = t.first, u, d = null, h, p = [], v = [], m, y, w, b;
  if (i)
    for (b = 0; b < s; b += 1)
      m = e[b], y = o(m, b), w = /** @type {EachItem} */
      a.get(y), w.o && (w.a?.measure(), (h ??= /* @__PURE__ */ new Set()).add(w));
  for (b = 0; b < s; b += 1) {
    if (m = e[b], y = o(m, b), w = /** @type {EachItem} */
    a.get(y), t.first ??= w, !w.o) {
      w.o = !0;
      var k = d ? d.next : l;
      dn(t, d, w), dn(t, w, k), ba(w, k, n), d = w, p = [], v = [], l = d.next;
      continue;
    }
    if ((w.e.f & Qt) !== 0 && (Yl(w.e), i && (w.a?.unfix(), (h ??= /* @__PURE__ */ new Set()).delete(w))), w !== l) {
      if (u !== void 0 && u.has(w)) {
        if (p.length < v.length) {
          var O = v[0], C;
          d = O.prev;
          var x = p[0], E = p[p.length - 1];
          for (C = 0; C < p.length; C += 1)
            ba(p[C], O, n);
          for (C = 0; C < v.length; C += 1)
            u.delete(v[C]);
          dn(t, x.prev, E.next), dn(t, d, x), dn(t, E, O), l = O, d = E, b -= 1, p = [], v = [];
        } else
          u.delete(w), ba(w, l, n), dn(t, w.prev, w.next), dn(t, w, d === null ? t.first : d.next), dn(t, d, w), d = w;
        continue;
      }
      for (p = [], v = []; l !== null && l.k !== y; )
        (l.e.f & Qt) === 0 && (u ??= /* @__PURE__ */ new Set()).add(l), v.push(l), l = l.next;
      if (l === null)
        continue;
      w = l;
    }
    p.push(w), d = w, l = w.next;
  }
  let V = a.size > s;
  if (l !== null || u !== void 0) {
    for (var L = u === void 0 ? [] : Hl(u); l !== null; )
      (l.e.f & Qt) === 0 && L.push(l), l = l.next;
    var I = L.length;
    if (V = a.size - I > s, I > 0) {
      var D = (r & Id) !== 0 && s === 0 ? n : null;
      if (i) {
        for (b = 0; b < I; b += 1)
          L[b].a?.measure();
        for (b = 0; b < I; b += 1)
          L[b].a?.fix();
      }
      Dm(t, L, D);
    }
  }
  if (V)
    for (const N of a.values())
      N.o || (dn(t, d, N), d = N);
  t.effect.last = d && d.e, i && Pr(() => {
    if (h !== void 0)
      for (w of h)
        w.a?.apply();
  });
}
function Lm(t, e, n, r, o, i, s, a) {
  var l = (s & Ld) !== 0, u = (s & Uv) === 0, d = l ? u ? /* @__PURE__ */ lh(n, !1, !1) : rr(n) : n, h = (s & Hd) === 0 ? o : rr(o), p = {
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
      v.append(t = Rt());
    }
    return p.e = Ut(() => i(
      /** @type {Node} */
      t,
      d,
      h,
      a
    )), e !== null && (e.next = p), p;
  } finally {
  }
}
function ba(t, e, n) {
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
      /* @__PURE__ */ tn(i)
    );
    o.before(i), i = s;
  }
}
function dn(t, e, n) {
  e === null ? (t.first = n, t.effect.first = n && n.e) : (e.e.next && (e.e.next.prev = null), e.next = n, e.e.next = n && n.e), n !== null && (n.e.prev && (n.e.prev.next = null), n.prev = e, n.e.prev = e && e.e);
}
function oh(t, e, n, r) {
  const o = No() ? vi : Zl;
  if (n.length === 0 && t.length === 0) {
    r(e.map(o));
    return;
  }
  var i = Qe, s = (
    /** @type {Effect} */
    We
  ), a = Hm();
  function l() {
    Promise.all(n.map((u) => /* @__PURE__ */ Im(u))).then((u) => {
      a();
      try {
        r([...e.map(o), ...u]);
      } catch (d) {
        (s.f & Qn) === 0 && yo(d, s);
      }
      i?.deactivate(), fs();
    }).catch((u) => {
      yo(u, s);
    });
  }
  t.length > 0 ? Promise.all(t).then(() => {
    a();
    try {
      return l();
    } finally {
      i?.deactivate(), fs();
    }
  }) : l();
}
function Hm() {
  var t = We, e = Ge, n = ot, r = Qe;
  return function(o = !0) {
    ln(t), Zt(e), mo(n), o && r?.activate();
  };
}
function fs() {
  ln(null), Zt(null), mo(null);
}
// @__NO_SIDE_EFFECTS__
function vi(t) {
  var e = Et | qt, n = Ge !== null && (Ge.f & Et) !== 0 ? (
    /** @type {Derived} */
    Ge
  ) : null;
  return We !== null && (We.f |= Jr), {
    ctx: ot,
    deps: null,
    effects: null,
    equals: Gd,
    f: e,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      Ot
    ),
    wv: 0,
    parent: n ?? We,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Im(t, e) {
  let n = (
    /** @type {Effect | null} */
    We
  );
  n === null && dm();
  var r = (
    /** @type {Boundary} */
    n.b
  ), o = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), i = rr(
    /** @type {V} */
    Ot
  ), s = !Ge, a = /* @__PURE__ */ new Map();
  return Xm(() => {
    var l = Wd();
    o = l.promise;
    try {
      Promise.resolve(t()).then(l.resolve, l.reject).then(() => {
        u === Qe && u.committed && u.deactivate(), fs();
      });
    } catch (p) {
      l.reject(p), fs();
    }
    var u = (
      /** @type {Batch} */
      Qe
    );
    if (s) {
      var d = !r.is_pending();
      r.update_pending_count(1), u.increment(d), a.get(u)?.reject(co), a.delete(u), a.set(u, l);
    }
    const h = (p, v = void 0) => {
      if (u.activate(), v)
        v !== co && (i.f |= yr, wo(i, v));
      else {
        (i.f & yr) !== 0 && (i.f ^= yr), wo(i, p);
        for (const [m, y] of a) {
          if (a.delete(m), m === u) break;
          y.reject(co);
        }
      }
      s && (r.update_pending_count(-1), u.decrement(d));
    };
    l.promise.then(h, (p) => h(null, p || "unknown"));
  }), oa(() => {
    for (const l of a.values())
      l.reject(co);
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
function _(t) {
  const e = /* @__PURE__ */ vi(t);
  return _h(e), e;
}
// @__NO_SIDE_EFFECTS__
function Zl(t) {
  const e = /* @__PURE__ */ vi(t);
  return e.equals = Jd, e;
}
function ih(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var n = 0; n < e.length; n += 1)
      _t(
        /** @type {Effect} */
        e[n]
      );
  }
}
function Bm(t) {
  for (var e = t.parent; e !== null; ) {
    if ((e.f & Et) === 0)
      return (e.f & Qn) === 0 ? (
        /** @type {Effect} */
        e
      ) : null;
    e = e.parent;
  }
  return null;
}
function Wl(t) {
  var e, n = We;
  ln(Bm(t));
  try {
    t.f &= ~Qo, ih(t), e = Nh(t);
  } finally {
    ln(n);
  }
  return e;
}
function sh(t) {
  var e = Wl(t);
  if (t.equals(e) || (Qe?.is_fork || (t.v = e), t.wv = Ph()), !no)
    if (sn !== null)
      (ei() || Qe?.is_fork) && sn.set(t, e);
    else {
      var n = (t.f & mn) === 0 ? ur : Dt;
      Vt(t, n);
    }
}
let Fa = /* @__PURE__ */ new Set();
const wr = /* @__PURE__ */ new Map();
let ah = !1;
function rr(t, e) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: Gd,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function me(t, e) {
  const n = rr(t);
  return _h(n), n;
}
// @__NO_SIDE_EFFECTS__
function lh(t, e = !1, n = !0) {
  const r = rr(t);
  return e || (r.equals = Jd), Eo && n && ot !== null && ot.l !== null && (ot.l.s ??= []).push(r), r;
}
function K(t, e, n = !1) {
  Ge !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Nn || (Ge.f & Uu) !== 0) && No() && (Ge.f & (Et | ar | Rl | Uu)) !== 0 && !er?.includes(t) && bm();
  let r = n ? dt(e) : e;
  return wo(t, r);
}
function wo(t, e) {
  if (!t.equals(e)) {
    var n = t.v;
    no ? wr.set(t, e) : wr.set(t, n), t.v = e;
    var r = fn.ensure();
    r.capture(t, n), (t.f & Et) !== 0 && ((t.f & qt) !== 0 && Wl(
      /** @type {Derived} */
      t
    ), Vt(t, (t.f & mn) !== 0 ? Dt : ur)), t.wv = Ph(), uh(t, qt), No() && We !== null && (We.f & Dt) !== 0 && (We.f & (lr | Or)) === 0 && (rn === null ? Ym([t]) : rn.push(t)), !r.is_fork && Fa.size > 0 && !ah && Rm();
  }
  return e;
}
function Rm() {
  ah = !1;
  var t = br;
  gs(!0);
  const e = Array.from(Fa);
  try {
    for (const n of e)
      (n.f & Dt) !== 0 && Vt(n, ur), mi(n) && ni(n);
  } finally {
    gs(t);
  }
  Fa.clear();
}
function Qu(t, e = 1) {
  var n = c(t), r = e === 1 ? n++ : n--;
  return K(t, n), r;
}
function Pn(t) {
  K(t, t.v + 1);
}
function uh(t, e) {
  var n = t.reactions;
  if (n !== null)
    for (var r = No(), o = n.length, i = 0; i < o; i++) {
      var s = n[i], a = s.f;
      if (!(!r && s === We)) {
        var l = (a & qt) === 0;
        if (l && Vt(s, e), (a & Et) !== 0) {
          var u = (
            /** @type {Derived} */
            s
          );
          sn?.delete(u), (a & Qo) === 0 && (a & mn && (s.f |= Qo), uh(u, ur));
        } else l && ((a & ar) !== 0 && Zn !== null && Zn.add(
          /** @type {Effect} */
          s
        ), Wr(
          /** @type {Effect} */
          s
        ));
      }
    }
}
function dt(t) {
  if (typeof t != "object" || t === null || An in t)
    return t;
  const e = Gs(t);
  if (e !== Zd && e !== am)
    return t;
  var n = /* @__PURE__ */ new Map(), r = Ys(t), o = /* @__PURE__ */ me(0), i = tr, s = (a) => {
    if (tr === i)
      return a();
    var l = Ge, u = tr;
    Zt(null), rc(i);
    var d = a();
    return Zt(l), rc(u), d;
  };
  return r && n.set("length", /* @__PURE__ */ me(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(a, l, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && ym();
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
            const d = s(() => /* @__PURE__ */ me(Ot));
            n.set(l, d), Pn(o);
          }
        } else
          K(u, Ot), Pn(o);
        return !0;
      },
      get(a, l, u) {
        if (l === An)
          return t;
        var d = n.get(l), h = l in a;
        if (d === void 0 && (!h || Jn(a, l)?.writable) && (d = s(() => {
          var v = dt(h ? a[l] : Ot), m = /* @__PURE__ */ me(v);
          return m;
        }), n.set(l, d)), d !== void 0) {
          var p = c(d);
          return p === Ot ? void 0 : p;
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
          if (h !== void 0 && p !== Ot)
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
        if (l === An)
          return !0;
        var u = n.get(l), d = u !== void 0 && u.v !== Ot || Reflect.has(a, l);
        if (u !== void 0 || We !== null && (!d || Jn(a, l)?.writable)) {
          u === void 0 && (u = s(() => {
            var p = d ? dt(a[l]) : Ot, v = /* @__PURE__ */ me(p);
            return v;
          }), n.set(l, u));
          var h = c(u);
          if (h === Ot)
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
            m !== void 0 ? K(m, Ot) : v in a && (m = s(() => /* @__PURE__ */ me(Ot)), n.set(v + "", m));
          }
        if (h === void 0)
          (!p || Jn(a, l)?.writable) && (h = s(() => /* @__PURE__ */ me(void 0)), K(h, dt(u)), n.set(l, h));
        else {
          p = h.v !== Ot;
          var y = s(() => dt(u));
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
          Pn(o);
        }
        return !0;
      },
      ownKeys(a) {
        c(o);
        var l = Reflect.ownKeys(a).filter((h) => {
          var p = n.get(h);
          return p === void 0 || p.v !== Ot;
        });
        for (var [u, d] of n)
          d.v !== Ot && !(u in a) && l.push(u);
        return l;
      },
      setPrototypeOf() {
        wm();
      }
    }
  );
}
function ec(t) {
  try {
    if (t !== null && typeof t == "object" && An in t)
      return t[An];
  } catch {
  }
  return t;
}
function jm(t, e) {
  return Object.is(ec(t), ec(e));
}
var Kt, ch, dh, hh;
function Za() {
  if (Kt === void 0) {
    Kt = window, ch = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype, n = Text.prototype;
    dh = Jn(e, "firstChild").get, hh = Jn(e, "nextSibling").get, Gu(t) && (t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__style = void 0, t.__e = void 0), Gu(n) && (n.__t = void 0);
  }
}
function Rt(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function mt(t) {
  return dh.call(t);
}
// @__NO_SIDE_EFFECTS__
function tn(t) {
  return hh.call(t);
}
function X(t, e) {
  if (!$e)
    return /* @__PURE__ */ mt(t);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ mt(Te)
  );
  if (n === null)
    n = Te.appendChild(Rt());
  else if (e && n.nodeType !== ea) {
    var r = Rt();
    return n?.before(r), ct(r), r;
  }
  return ct(n), n;
}
function U(t, e = !1) {
  if (!$e) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ mt(
        /** @type {Node} */
        t
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ tn(n) : n;
  }
  if (e && Te?.nodeType !== ea) {
    var r = Rt();
    return Te?.before(r), ct(r), r;
  }
  return Te;
}
function B(t, e = 1, n = !1) {
  let r = $e ? Te : t;
  for (var o; e--; )
    o = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ tn(r);
  if (!$e)
    return r;
  if (n && r?.nodeType !== ea) {
    var i = Rt();
    return r === null ? o?.after(i) : r.before(i), ct(i), i;
  }
  return ct(r), /** @type {TemplateNode} */
  r;
}
function Xl(t) {
  t.textContent = "";
}
function ph() {
  return !1;
}
function Km(t, e) {
  if (e) {
    const n = document.body;
    t.autofocus = !0, Pr(() => {
      document.activeElement === n && t.focus();
    });
  }
}
function Fm(t) {
  $e && /* @__PURE__ */ mt(t) !== null && Xl(t);
}
let tc = !1;
function fh() {
  tc || (tc = !0, document.addEventListener(
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
function ra(t) {
  var e = Ge, n = We;
  Zt(null), ln(null);
  try {
    return t();
  } finally {
    Zt(e), ln(n);
  }
}
function gh(t, e, n, r = n) {
  t.addEventListener(e, () => ra(n));
  const o = t.__on_r;
  o ? t.__on_r = () => {
    o(), r(!0);
  } : t.__on_r = () => r(!0), fh();
}
function vh(t) {
  We === null && (Ge === null && fm(), pm()), no && hm();
}
function Zm(t, e) {
  var n = e.last;
  n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t);
}
function un(t, e, n) {
  var r = We;
  r !== null && (r.f & Qt) !== 0 && (t |= Qt);
  var o = {
    ctx: ot,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: t | qt | mn,
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
      ni(o), o.f |= Qs;
    } catch (a) {
      throw _t(o), a;
    }
  else e !== null && Wr(o);
  var i = o;
  if (n && i.deps === null && i.teardown === null && i.nodes_start === null && i.first === i.last && // either `null`, or a singular child
  (i.f & Jr) === 0 && (i = i.first, (t & ar) !== 0 && (t & nr) !== 0 && i !== null && (i.f |= nr)), i !== null && (i.parent = r, r !== null && Zm(i, r), Ge !== null && (Ge.f & Et) !== 0 && (t & Or) === 0)) {
    var s = (
      /** @type {Derived} */
      Ge
    );
    (s.effects ??= []).push(i);
  }
  return o;
}
function ei() {
  return Ge !== null && !Nn;
}
function oa(t) {
  const e = un(Us, null, !1);
  return Vt(e, Dt), e.teardown = t, e;
}
function Ie(t) {
  vh();
  var e = (
    /** @type {Effect} */
    We.f
  ), n = !Ge && (e & lr) !== 0 && (e & Qs) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      ot
    );
    (r.e ??= []).push(t);
  } else
    return mh(t);
}
function mh(t) {
  return un(Il | qd, t, !1);
}
function Ft(t) {
  return vh(), un(Us | qd, t, !0);
}
function eo(t) {
  fn.ensure();
  const e = un(Or | Jr, t, !0);
  return () => {
    _t(e);
  };
}
function Wm(t) {
  fn.ensure();
  const e = un(Or | Jr, t, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? po(e, () => {
      _t(e), r(void 0);
    }) : (_t(e), r(void 0));
  });
}
function Mo(t) {
  return un(Il, t, !1);
}
function Xm(t) {
  return un(Rl | Jr, t, !0);
}
function to(t, e = 0) {
  return un(Us | e, t, !0);
}
function Ee(t, e = [], n = [], r = []) {
  oh(r, e, n, (o) => {
    un(Us, () => t(...o.map(c)), !0);
  });
}
function Er(t, e = 0) {
  var n = un(ar | e, t, !0);
  return n;
}
function yh(t, e = 0) {
  var n = un(Xd | e, t, !0);
  return n;
}
function Ut(t) {
  return un(lr | Jr, t, !0);
}
function wh(t) {
  var e = t.teardown;
  if (e !== null) {
    const n = no, r = Ge;
    nc(!0), Zt(null);
    try {
      e.call(null);
    } finally {
      nc(n), Zt(r);
    }
  }
}
function bh(t, e = !1) {
  var n = t.first;
  for (t.first = t.last = null; n !== null; ) {
    const o = n.ac;
    o !== null && ra(() => {
      o.abort(co);
    });
    var r = n.next;
    (n.f & Or) !== 0 ? n.parent = null : _t(n, e), n = r;
  }
}
function qm(t) {
  for (var e = t.first; e !== null; ) {
    var n = e.next;
    (e.f & lr) === 0 && _t(e), e = n;
  }
}
function _t(t, e = !0) {
  var n = !1;
  (e || (t.f & Bl) !== 0) && t.nodes_start !== null && t.nodes_end !== null && (xh(
    t.nodes_start,
    /** @type {TemplateNode} */
    t.nodes_end
  ), n = !0), bh(t, e && !n), vs(t, 0), Vt(t, Qn);
  var r = t.transitions;
  if (r !== null)
    for (const i of r)
      i.stop();
  wh(t);
  var o = t.parent;
  o !== null && o.first !== null && kh(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes_start = t.nodes_end = t.ac = null;
}
function xh(t, e) {
  for (; t !== null; ) {
    var n = t === e ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ tn(t)
    );
    t.remove(), t = n;
  }
}
function kh(t) {
  var e = t.parent, n = t.prev, r = t.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), e !== null && (e.first === t && (e.first = r), e.last === t && (e.last = n));
}
function po(t, e, n = !0) {
  var r = [];
  ql(t, r, !0), Ch(r, () => {
    n && _t(t), e && e();
  });
}
function Ch(t, e) {
  var n = t.length;
  if (n > 0) {
    var r = () => --n || e();
    for (var o of t)
      o.out(r);
  } else
    e();
}
function ql(t, e, n) {
  if ((t.f & Qt) === 0) {
    if (t.f ^= Qt, t.transitions !== null)
      for (const s of t.transitions)
        (s.is_global || n) && e.push(s);
    for (var r = t.first; r !== null; ) {
      var o = r.next, i = (r.f & nr) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (r.f & lr) !== 0 && (t.f & ar) !== 0;
      ql(r, e, i ? n : !1), r = o;
    }
  }
}
function Yl(t) {
  $h(t, !0);
}
function $h(t, e) {
  if ((t.f & Qt) !== 0) {
    t.f ^= Qt, (t.f & Dt) === 0 && (Vt(t, qt), Wr(t));
    for (var n = t.first; n !== null; ) {
      var r = n.next, o = (n.f & nr) !== 0 || (n.f & lr) !== 0;
      $h(n, o ? e : !1), n = r;
    }
    if (t.transitions !== null)
      for (const i of t.transitions)
        (i.is_global || e) && i.in();
  }
}
function Sh(t, e) {
  for (var n = t.nodes_start, r = t.nodes_end; n !== null; ) {
    var o = n === r ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ tn(n)
    );
    e.append(n), n = o;
  }
}
let br = !1;
function gs(t) {
  br = t;
}
let no = !1;
function nc(t) {
  no = t;
}
let Ge = null, Nn = !1;
function Zt(t) {
  Ge = t;
}
let We = null;
function ln(t) {
  We = t;
}
let er = null;
function _h(t) {
  Ge !== null && (er === null ? er = [t] : er.push(t));
}
let Ht = null, Gt = 0, rn = null;
function Ym(t) {
  rn = t;
}
let Oh = 1, ti = 0, tr = ti;
function rc(t) {
  tr = t;
}
function Ph() {
  return ++Oh;
}
function mi(t) {
  var e = t.f;
  if ((e & qt) !== 0)
    return !0;
  if (e & Et && (t.f &= -32769), (e & ur) !== 0) {
    var n = t.deps;
    if (n !== null)
      for (var r = n.length, o = 0; o < r; o++) {
        var i = n[o];
        if (mi(
          /** @type {Derived} */
          i
        ) && sh(
          /** @type {Derived} */
          i
        ), i.wv > t.wv)
          return !0;
      }
    (e & mn) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    sn === null && Vt(t, Dt);
  }
  return !1;
}
function Eh(t, e, n = !0) {
  var r = t.reactions;
  if (r !== null && !er?.includes(t))
    for (var o = 0; o < r.length; o++) {
      var i = r[o];
      (i.f & Et) !== 0 ? Eh(
        /** @type {Derived} */
        i,
        e,
        !1
      ) : e === i && (n ? Vt(i, qt) : (i.f & Dt) !== 0 && Vt(i, ur), Wr(
        /** @type {Effect} */
        i
      ));
    }
}
function Nh(t) {
  var e = Ht, n = Gt, r = rn, o = Ge, i = er, s = ot, a = Nn, l = tr, u = t.f;
  Ht = /** @type {null | Value[]} */
  null, Gt = 0, rn = null, Ge = (u & (lr | Or)) === 0 ? t : null, er = null, mo(t.ctx), Nn = !1, tr = ++ti, t.ac !== null && (ra(() => {
    t.ac.abort(co);
  }), t.ac = null);
  try {
    t.f |= ja;
    var d = (
      /** @type {Function} */
      t.fn
    ), h = d(), p = t.deps;
    if (Ht !== null) {
      var v;
      if (vs(t, Gt), p !== null && Gt > 0)
        for (p.length = Gt + Ht.length, v = 0; v < Ht.length; v++)
          p[Gt + v] = Ht[v];
      else
        t.deps = p = Ht;
      if (br && ei() && (t.f & mn) !== 0)
        for (v = Gt; v < p.length; v++)
          (p[v].reactions ??= []).push(t);
    } else p !== null && Gt < p.length && (vs(t, Gt), p.length = Gt);
    if (No() && rn !== null && !Nn && p !== null && (t.f & (Et | ur | qt)) === 0)
      for (v = 0; v < /** @type {Source[]} */
      rn.length; v++)
        Eh(
          rn[v],
          /** @type {Effect} */
          t
        );
    return o !== null && o !== t && (ti++, rn !== null && (r === null ? r = rn : r.push(.../** @type {Source[]} */
    rn))), (t.f & yr) !== 0 && (t.f ^= yr), h;
  } catch (m) {
    return eh(m);
  } finally {
    t.f ^= ja, Ht = e, Gt = n, rn = r, Ge = o, er = i, mo(s), Nn = a, tr = l;
  }
}
function Gm(t, e) {
  let n = e.reactions;
  if (n !== null) {
    var r = sm.call(n, t);
    if (r !== -1) {
      var o = n.length - 1;
      o === 0 ? n = e.reactions = null : (n[r] = n[o], n.pop());
    }
  }
  n === null && (e.f & Et) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Ht === null || !Ht.includes(e)) && (Vt(e, ur), (e.f & mn) !== 0 && (e.f ^= mn, e.f &= -32769), ih(
    /** @type {Derived} **/
    e
  ), vs(
    /** @type {Derived} **/
    e,
    0
  ));
}
function vs(t, e) {
  var n = t.deps;
  if (n !== null)
    for (var r = e; r < n.length; r++)
      Gm(t, n[r]);
}
function ni(t) {
  var e = t.f;
  if ((e & Qn) === 0) {
    Vt(t, Dt);
    var n = We, r = br;
    We = t, br = !0;
    try {
      (e & (ar | Xd)) !== 0 ? qm(t) : bh(t), wh(t);
      var o = Nh(t);
      t.teardown = typeof o == "function" ? o : null, t.wv = Oh;
      var i;
      im && $m && (t.f & qt) !== 0 && t.deps;
    } finally {
      br = r, We = n;
    }
  }
}
async function Mh() {
  await Promise.resolve(), f();
}
function c(t) {
  var e = t.f, n = (e & Et) !== 0;
  if (Ge !== null && !Nn) {
    var r = We !== null && (We.f & Qn) !== 0;
    if (!r && !er?.includes(t)) {
      var o = Ge.deps;
      if ((Ge.f & ja) !== 0)
        t.rv < ti && (t.rv = ti, Ht === null && o !== null && o[Gt] === t ? Gt++ : Ht === null ? Ht = [t] : Ht.includes(t) || Ht.push(t));
      else {
        (Ge.deps ??= []).push(t);
        var i = t.reactions;
        i === null ? t.reactions = [Ge] : i.includes(Ge) || i.push(Ge);
      }
    }
  }
  if (no) {
    if (wr.has(t))
      return wr.get(t);
    if (n) {
      var s = (
        /** @type {Derived} */
        t
      ), a = s.v;
      return ((s.f & Dt) === 0 && s.reactions !== null || Ah(s)) && (a = Wl(s)), wr.set(s, a), a;
    }
  } else n && (!sn?.has(t) || Qe?.is_fork && !ei()) && (s = /** @type {Derived} */
  t, mi(s) && sh(s), br && ei() && (s.f & mn) === 0 && zh(s));
  if (sn?.has(t))
    return sn.get(t);
  if ((t.f & yr) !== 0)
    throw t.v;
  return t.v;
}
function zh(t) {
  if (t.deps !== null) {
    t.f ^= mn;
    for (const e of t.deps)
      (e.reactions ??= []).push(t), (e.f & Et) !== 0 && (e.f & mn) === 0 && zh(
        /** @type {Derived} */
        e
      );
  }
}
function Ah(t) {
  if (t.v === Ot) return !0;
  if (t.deps === null) return !1;
  for (const e of t.deps)
    if (wr.has(e) || (e.f & Et) !== 0 && Ah(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function it(t) {
  var e = Nn;
  try {
    return Nn = !0, t();
  } finally {
    Nn = e;
  }
}
const Um = -7169;
function Vt(t, e) {
  t.f = t.f & Um | e;
}
function Jm(t, e) {
  var n = {};
  for (var r in t)
    e.includes(r) || (n[r] = t[r]);
  for (var o of Object.getOwnPropertySymbols(t))
    Object.propertyIsEnumerable.call(t, o) && !e.includes(o) && (n[o] = t[o]);
  return n;
}
function Gl(t) {
  if (!(typeof t != "object" || !t || t instanceof EventTarget)) {
    if (An in t)
      Wa(t);
    else if (!Array.isArray(t))
      for (let e in t) {
        const n = t[e];
        typeof n == "object" && n && An in n && Wa(n);
      }
  }
}
function Wa(t, e = /* @__PURE__ */ new Set()) {
  if (typeof t == "object" && t !== null && // We don't want to traverse DOM elements
  !(t instanceof EventTarget) && !e.has(t)) {
    e.add(t), t instanceof Date && t.getTime();
    for (let r in t)
      try {
        Wa(t[r], e);
      } catch {
      }
    const n = Gs(t);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = Fd(n);
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
const Th = /* @__PURE__ */ new Set(), Xa = /* @__PURE__ */ new Set();
function Ul(t, e, n, r = {}) {
  function o(i) {
    if (r.capture || jo.call(e, i), !i.cancelBubble)
      return ra(() => n?.call(this, i));
  }
  return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? Pr(() => {
    e.addEventListener(t, o, r);
  }) : e.addEventListener(t, o, r), o;
}
function ht(t, e, n, r = {}) {
  var o = Ul(e, t, n, r);
  return () => {
    t.removeEventListener(e, o, r);
  };
}
function ms(t, e, n, r, o) {
  var i = { capture: r, passive: o }, s = Ul(t, e, n, i);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && oa(() => {
    e.removeEventListener(t, s, i);
  });
}
function ro(t) {
  for (var e = 0; e < t.length; e++)
    Th.add(t[e]);
  for (var n of Xa)
    n(t);
}
let oc = null;
function jo(t) {
  var e = this, n = (
    /** @type {Node} */
    e.ownerDocument
  ), r = t.type, o = t.composedPath?.() || [], i = (
    /** @type {null | Element} */
    o[0] || t.target
  );
  oc = t;
  var s = 0, a = oc === t && t.__root;
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
    hs(t, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    var d = Ge, h = We;
    Zt(null), ln(null);
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
      t.__root = e, delete t.currentTarget, Zt(d), ln(h);
    }
  }
}
function Jl(t) {
  var e = document.createElement("template");
  return e.innerHTML = t.replaceAll("<!>", "<!---->"), e.content;
}
function Xt(t, e) {
  var n = (
    /** @type {Effect} */
    We
  );
  n.nodes_start === null && (n.nodes_start = t, n.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function ne(t, e) {
  var n = (e & Rd) !== 0, r = (e & nm) !== 0, o, i = !t.startsWith("<!>");
  return () => {
    if ($e)
      return Xt(Te, null), Te;
    o === void 0 && (o = Jl(i ? t : "<!>" + t), n || (o = /** @type {Node} */
    /* @__PURE__ */ mt(o)));
    var s = (
      /** @type {TemplateNode} */
      r || ch ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ mt(s)
      ), l = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      Xt(a, l);
    } else
      Xt(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function Qm(t, e, n = "svg") {
  var r = !t.startsWith("<!>"), o = (e & Rd) !== 0, i = `<${n}>${r ? t : "<!>" + t}</${n}>`, s;
  return () => {
    if ($e)
      return Xt(Te, null), Te;
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        Jl(i)
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
      Xt(d, h);
    } else
      Xt(u, u);
    return u;
  };
}
// @__NO_SIDE_EFFECTS__
function ke(t, e) {
  return /* @__PURE__ */ Qm(t, e, "svg");
}
function Ae(t = "") {
  if (!$e) {
    var e = Rt(t + "");
    return Xt(e, e), e;
  }
  var n = Te;
  return n.nodeType !== ea && (n.before(n = Rt()), ct(n)), Xt(n, n), n;
}
function ce() {
  if ($e)
    return Xt(Te, null), Te;
  var t = document.createDocumentFragment(), e = document.createComment(""), n = Rt();
  return t.append(e, n), Xt(e, n), t;
}
function z(t, e) {
  if ($e) {
    var n = (
      /** @type {Effect} */
      We
    );
    ((n.f & Qs) === 0 || n.nodes_end === null) && (n.nodes_end = Te), yn();
    return;
  }
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
function yi() {
  if ($e && Te && Te.nodeType === cr && Te.textContent?.startsWith("$")) {
    const t = Te.textContent.substring(1);
    return yn(), t;
  }
  return (window.__svelte ??= {}).uid ??= 1, `c${window.__svelte.uid++}`;
}
function e1(t) {
  return t.endsWith("capture") && t !== "gotpointercapture" && t !== "lostpointercapture";
}
const t1 = [
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
function n1(t) {
  return t1.includes(t);
}
const r1 = {
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
function o1(t) {
  return t = t.toLowerCase(), r1[t] ?? t;
}
const i1 = ["touchstart", "touchmove"];
function s1(t) {
  return i1.includes(t);
}
const a1 = (
  /** @type {const} */
  ["textarea", "script", "style", "title"]
);
function l1(t) {
  return a1.includes(
    /** @type {typeof RAW_TEXT_ELEMENTS[number]} */
    t
  );
}
function rt(t, e) {
  var n = e == null ? "" : typeof e == "object" ? e + "" : e;
  n !== (t.__t ??= t.nodeValue) && (t.__t = n, t.nodeValue = n + "");
}
function Ql(t, e) {
  return Dh(t, e);
}
function u1(t, e) {
  Za(), e.intro = e.intro ?? !1;
  const n = e.target, r = $e, o = Te;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ mt(n)
    ); i && (i.nodeType !== cr || /** @type {Comment} */
    i.data !== jd); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ tn(i);
    if (!i)
      throw Fr;
    It(!0), ct(
      /** @type {Comment} */
      i
    );
    const s = Dh(t, { ...e, anchor: i });
    return It(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s instanceof Error && s.message.split(`
`).some((a) => a.startsWith("https://svelte.dev/e/")))
      throw s;
    return s !== Fr && console.warn("Failed to hydrate: ", s), e.recover === !1 && vm(), Za(), Xl(n), It(!1), Ql(t, e);
  } finally {
    It(r), ct(o);
  }
}
const ao = /* @__PURE__ */ new Map();
function Dh(t, { target: e, anchor: n, props: r = {}, events: o, context: i, intro: s = !0 }) {
  Za();
  var a = /* @__PURE__ */ new Set(), l = (h) => {
    for (var p = 0; p < h.length; p++) {
      var v = h[p];
      if (!a.has(v)) {
        a.add(v);
        var m = s1(v);
        e.addEventListener(v, jo, { passive: m });
        var y = ao.get(v);
        y === void 0 ? (document.addEventListener(v, jo, { passive: m }), ao.set(v, 1)) : ao.set(v, y + 1);
      }
    }
  };
  l(Hl(Th)), Xa.add(l);
  var u = void 0, d = Wm(() => {
    var h = n ?? e.appendChild(Rt());
    return Am(
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
        if (o && (r.$$events = o), $e && Xt(
          /** @type {TemplateNode} */
          p,
          null
        ), u = t(p, r) || {}, $e && (We.nodes_end = Te, Te === null || Te.nodeType !== cr || /** @type {Comment} */
        Te.data !== Ll))
          throw gi(), Fr;
        i && le();
      }
    ), () => {
      for (var p of a) {
        e.removeEventListener(p, jo);
        var v = (
          /** @type {number} */
          ao.get(p)
        );
        --v === 0 ? (document.removeEventListener(p, jo), ao.delete(p)) : ao.set(p, v);
      }
      Xa.delete(l), h !== n && h.parentNode?.removeChild(h);
    };
  });
  return qa.set(u, d), u;
}
let qa = /* @__PURE__ */ new WeakMap();
function Vh(t, e) {
  const n = qa.get(t);
  return n ? (qa.delete(t), n(e)) : Promise.resolve();
}
class wi {
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
      Qe
    );
    if (this.#e.has(e)) {
      var n = (
        /** @type {Key} */
        this.#e.get(e)
      ), r = this.#t.get(n);
      if (r)
        Yl(r), this.#r.delete(n);
      else {
        var o = this.#n.get(n);
        o && (this.#t.set(n, o.effect), this.#n.delete(n), o.fragment.lastChild.remove(), this.anchor.before(o.fragment), r = o.effect);
      }
      for (const [i, s] of this.#e) {
        if (this.#e.delete(i), i === e)
          break;
        const a = this.#n.get(s);
        a && (_t(a.effect), this.#n.delete(s));
      }
      for (const [i, s] of this.#t) {
        if (i === n || this.#r.has(i)) continue;
        const a = () => {
          if (Array.from(this.#e.values()).includes(i)) {
            var l = document.createDocumentFragment();
            Sh(s, l), l.append(Rt()), this.#n.set(i, { effect: s, fragment: l });
          } else
            _t(s);
          this.#r.delete(i), this.#t.delete(i);
        };
        this.#o || !r ? (this.#r.add(i), po(s, a, !1)) : a();
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
      n.includes(r) || (_t(o.effect), this.#n.delete(r));
  };
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(e, n) {
    var r = (
      /** @type {Batch} */
      Qe
    ), o = ph();
    n && !this.#t.has(e) && !this.#n.has(e) && this.#t.set(
      e,
      Ut(() => n(this.anchor))
    ), this.#e.set(r, e), o || ($e && (this.anchor = Te), this.#i());
  }
}
function Pe(t, e, ...n) {
  var r = new wi(t);
  Er(() => {
    const o = e() ?? null;
    r.ensure(o, o && ((i) => o(i, ...n)));
  }, nr);
}
function kn(t) {
  ot === null && Kl(), Eo && ot.l !== null ? c1(ot).m.push(t) : Ie(() => {
    const e = it(t);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function bi(t) {
  ot === null && Kl(), kn(() => () => it(t));
}
function c1(t) {
  var e = (
    /** @type {ComponentContextLegacy} */
    t.l
  );
  return e.u ??= { a: [], b: [], m: [] };
}
function d1() {
  return Symbol(Kd);
}
function se(t, e, n = !1) {
  $e && yn();
  var r = new wi(t), o = n ? nr : 0;
  function i(s, a) {
    if ($e) {
      const u = Yd(t) === qs;
      if (s === u) {
        var l = ps();
        ct(l), r.anchor = l, It(!1), r.ensure(s, a), It(!0);
        return;
      }
    }
    r.ensure(s, a);
  }
  Er(() => {
    var s = !1;
    e((a, l = !0) => {
      s = !0, i(l, a);
    }), s || i(!1, null);
  }, o);
}
function h1(t, e, n) {
  $e && yn();
  var r = new wi(t), o = !No();
  Er(() => {
    var i = e();
    o && i !== null && typeof i == "object" && (i = /** @type {V} */
    {}), r.ensure(i, n);
  });
}
function p1(t, e) {
  $e && ct(
    /** @type {TemplateNode} */
    /* @__PURE__ */ mt(t)
  ), to(() => {
    var n = e();
    for (var r in n) {
      var o = n[r];
      o ? t.style.setProperty(r, o) : t.style.removeProperty(r);
    }
  });
}
function ia(t, e, n = !1, r = !1, o = !1) {
  var i = t, s = "";
  Ee(() => {
    var a = (
      /** @type {Effect} */
      We
    );
    if (s === (s = e() ?? "")) {
      $e && yn();
      return;
    }
    if (a.nodes_start !== null && (xh(
      a.nodes_start,
      /** @type {TemplateNode} */
      a.nodes_end
    ), a.nodes_start = a.nodes_end = null), s !== "") {
      if ($e) {
        Te.data;
        for (var l = yn(), u = l; l !== null && (l.nodeType !== cr || /** @type {Comment} */
        l.data !== ""); )
          u = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ tn(l);
        if (l === null)
          throw gi(), Fr;
        Xt(Te, u), i = ct(l);
        return;
      }
      var d = s + "";
      n ? d = `<svg>${d}</svg>` : r && (d = `<math>${d}</math>`);
      var h = Jl(d);
      if ((n || r) && (h = /** @type {Element} */
      /* @__PURE__ */ mt(h)), Xt(
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
function St(t, e, n) {
  $e && yn();
  var r = new wi(t);
  Er(() => {
    var o = e() ?? null;
    r.ensure(o, o && ((i) => n(i, o)));
  }, nr);
}
function Lh(t, e, n, r, o, i) {
  let s = $e;
  $e && yn();
  var a = null;
  $e && Te.nodeType === cm && (a = /** @type {Element} */
  Te, yn());
  var l = (
    /** @type {TemplateNode} */
    $e ? Te : t
  ), u = new wi(l, !1);
  Er(() => {
    const d = e() || null;
    var h = n || d === "svg" ? om : null;
    if (d === null) {
      u.ensure(null, null);
      return;
    }
    return u.ensure(d, (p) => {
      if (d) {
        if (a = $e ? (
          /** @type {Element} */
          a
        ) : h ? document.createElementNS(h, d) : document.createElement(d), Xt(a, a), r) {
          $e && l1(d) && a.append(document.createComment(""));
          var v = (
            /** @type {TemplateNode} */
            $e ? /* @__PURE__ */ mt(a) : a.appendChild(Rt())
          );
          $e && (v === null ? It(!1) : ct(v)), r(a, v);
        }
        We.nodes_end = a, p.before(a);
      }
      $e && ct(p);
    }), () => {
    };
  }, nr), oa(() => {
  }), s && (It(!0), ct(l));
}
function f1(t, e) {
  let n = null, r = $e;
  var o;
  if ($e) {
    n = Te;
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ mt(document.head)
    ); i !== null && (i.nodeType !== cr || /** @type {Comment} */
    i.data !== t); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ tn(i);
    if (i === null)
      It(!1);
    else {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ tn(i)
      );
      i.remove(), ct(s);
    }
  }
  $e || (o = document.head.appendChild(Rt()));
  try {
    Er(() => e(o), Bl);
  } finally {
    r && (It(!0), ct(
      /** @type {TemplateNode} */
      n
    ));
  }
}
function Je(t, e) {
  Mo(() => {
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
function Tt(t, e, n) {
  Mo(() => {
    var r = it(() => e(t, n?.()) || {});
    if (n && r?.update) {
      var o = !1, i = (
        /** @type {any} */
        {}
      );
      to(() => {
        var s = n();
        Gl(s), o && Ud(i, s) && (i = s, r.update(s));
      }), o = !0;
    }
    if (r?.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function g1(t, e) {
  var n = void 0, r;
  yh(() => {
    n !== (n = e()) && (r && (_t(r), r = null), n && (r = Ut(() => {
      Mo(() => (
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
function Go() {
  for (var t, e, n = 0, r = "", o = arguments.length; n < o; n++) (t = arguments[n]) && (e = Hh(t)) && (r && (r += " "), r += e);
  return r;
}
function dr(t) {
  return typeof t == "object" ? Go(t) : t ?? "";
}
const ic = [...` 	
\r\f \v\uFEFF`];
function v1(t, e, n) {
  var r = t == null ? "" : "" + t;
  if (e && (r = r ? r + " " + e : e), n) {
    for (var o in n)
      if (n[o])
        r = r ? r + " " + o : o;
      else if (r.length)
        for (var i = o.length, s = 0; (s = r.indexOf(o, s)) >= 0; ) {
          var a = s + i;
          (s === 0 || ic.includes(r[s - 1])) && (a === r.length || ic.includes(r[a])) ? r = (s === 0 ? "" : r.substring(0, s)) + r.substring(a + 1) : s = a;
        }
  }
  return r === "" ? null : r;
}
function sc(t, e = !1) {
  var n = e ? " !important;" : ";", r = "";
  for (var o in t) {
    var i = t[o];
    i != null && i !== "" && (r += " " + o + ": " + i + n);
  }
  return r;
}
function xa(t) {
  return t[0] !== "-" || t[1] !== "-" ? t.toLowerCase() : t;
}
function m1(t, e) {
  if (e) {
    var n = "", r, o;
    if (Array.isArray(e) ? (r = e[0], o = e[1]) : r = e, t) {
      t = String(t).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var i = !1, s = 0, a = !1, l = [];
      r && l.push(...Object.keys(r).map(xa)), o && l.push(...Object.keys(o).map(xa));
      var u = 0, d = -1;
      const y = t.length;
      for (var h = 0; h < y; h++) {
        var p = t[h];
        if (a ? p === "/" && t[h - 1] === "*" && (a = !1) : i ? i === p && (i = !1) : p === "/" && t[h + 1] === "*" ? a = !0 : p === '"' || p === "'" ? i = p : p === "(" ? s++ : p === ")" && s--, !a && i === !1 && s === 0) {
          if (p === ":" && d === -1)
            d = h;
          else if (p === ";" || h === y - 1) {
            if (d !== -1) {
              var v = xa(t.substring(u, d).trim());
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
    return r && (n += sc(r)), o && (n += sc(o, !0)), n = n.trim(), n === "" ? null : n;
  }
  return t == null ? null : String(t);
}
function Yt(t, e, n, r, o, i) {
  var s = t.__className;
  if ($e || s !== n || s === void 0) {
    var a = v1(n, r, i);
    (!$e || a !== t.getAttribute("class")) && (a == null ? t.removeAttribute("class") : e ? t.className = a : t.setAttribute("class", a)), t.__className = n;
  } else if (i && o !== i)
    for (var l in i) {
      var u = !!i[l];
      (o == null || u !== !!o[l]) && t.classList.toggle(l, u);
    }
  return i;
}
function ka(t, e = {}, n, r) {
  for (var o in n) {
    var i = n[o];
    e[o] !== i && (n[o] == null ? t.style.removeProperty(o) : t.style.setProperty(o, i, r));
  }
}
function Nt(t, e, n, r) {
  var o = t.__style;
  if ($e || o !== e) {
    var i = m1(e, r);
    (!$e || i !== t.getAttribute("style")) && (i == null ? t.removeAttribute("style") : t.style.cssText = i), t.__style = e;
  } else r && (Array.isArray(r) ? (ka(t, n?.[0], r[0]), ka(t, n?.[1], r[1], "important")) : ka(t, n, r));
  return r;
}
function Ya(t, e, n = !1) {
  if (t.multiple) {
    if (e == null)
      return;
    if (!Ys(e))
      return km();
    for (var r of t.options)
      r.selected = e.includes(ac(r));
    return;
  }
  for (r of t.options) {
    var o = ac(r);
    if (jm(o, e)) {
      r.selected = !0;
      return;
    }
  }
  (!n || e !== void 0) && (t.selectedIndex = -1);
}
function y1(t) {
  var e = new MutationObserver(() => {
    Ya(t, t.__value);
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
  }), oa(() => {
    e.disconnect();
  });
}
function ac(t) {
  return "__value" in t ? t.__value : t.value;
}
const vr = Symbol("class"), En = Symbol("style"), Ih = Symbol("is custom element"), Bh = Symbol("is html");
function xr(t) {
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
    t.__on_r = n, Pr(n), fh();
  }
}
function es(t, e) {
  var n = sa(t);
  n.value === (n.value = // treat null and undefined the same for the initial value
  e ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  t.value === e && (e !== 0 || t.nodeName !== "PROGRESS") || (t.value = e ?? "");
}
function Ca(t, e) {
  var n = sa(t);
  n.checked !== (n.checked = // treat null and undefined the same for the initial value
  e ?? void 0) && (t.checked = e);
}
function w1(t, e) {
  e ? t.hasAttribute("selected") || t.setAttribute("selected", "") : t.removeAttribute("selected");
}
function Oe(t, e, n, r) {
  var o = sa(t);
  $e && (o[e] = t.getAttribute(e), e === "src" || e === "srcset" || e === "href" && t.nodeName === "LINK") || o[e] !== (o[e] = n) && (e === "loading" && (t[um] = n), n == null ? t.removeAttribute(e) : typeof n != "string" && Rh(t).includes(e) ? t[e] = n : t.setAttribute(e, n));
}
function b1(t, e, n, r, o = !1, i = !1) {
  if ($e && o && t.tagName === "INPUT") {
    var s = (
      /** @type {HTMLInputElement} */
      t
    ), a = s.type === "checkbox" ? "defaultChecked" : "defaultValue";
    a in n || xr(s);
  }
  var l = sa(t), u = l[Ih], d = !l[Bh];
  let h = $e && u;
  h && It(!1);
  var p = e || {}, v = t.tagName === "OPTION";
  for (var m in e)
    m in n || (n[m] = null);
  n.class ? n.class = dr(n.class) : (r || n[vr]) && (n.class = null), n[En] && (n.style ??= null);
  var y = Rh(t);
  for (const E in n) {
    let V = n[E];
    if (v && E === "value" && V == null) {
      t.value = t.__value = "", p[E] = V;
      continue;
    }
    if (E === "class") {
      var w = t.namespaceURI === "http://www.w3.org/1999/xhtml";
      Yt(t, w, V, r, e?.[vr], n[vr]), p[E] = V, p[vr] = n[vr];
      continue;
    }
    if (E === "style") {
      Nt(t, V, e?.[En], n[En]), p[E] = V, p[En] = n[En];
      continue;
    }
    var b = p[E];
    if (!(V === b && !(V === void 0 && t.hasAttribute(E)))) {
      p[E] = V;
      var k = E[0] + E[1];
      if (k !== "$$")
        if (k === "on") {
          const L = {}, I = "$$" + E;
          let D = E.slice(2);
          var O = n1(D);
          if (e1(D) && (D = D.slice(0, -7), L.capture = !0), !O && b) {
            if (V != null) continue;
            t.removeEventListener(D, p[I], L), p[I] = null;
          }
          if (V != null)
            if (O)
              t[`__${D}`] = V, ro([D]);
            else {
              let N = function(S) {
                p[E].call(this, S);
              };
              p[I] = Ul(D, t, N, L);
            }
          else O && (t[`__${D}`] = void 0);
        } else if (E === "style")
          Oe(t, E, V);
        else if (E === "autofocus")
          Km(
            /** @type {HTMLElement} */
            t,
            !!V
          );
        else if (!u && (E === "__value" || E === "value" && V != null))
          t.value = t.__value = V;
        else if (E === "selected" && v)
          w1(
            /** @type {HTMLOptionElement} */
            t,
            V
          );
        else {
          var C = E;
          d || (C = o1(C));
          var x = C === "defaultValue" || C === "defaultChecked";
          if (V == null && !u && !x)
            if (l[E] = null, C === "value" || C === "checked") {
              let L = (
                /** @type {HTMLInputElement} */
                t
              );
              const I = e === void 0;
              if (C === "value") {
                let D = L.defaultValue;
                L.removeAttribute(C), L.defaultValue = D, L.value = L.__value = I ? D : null;
              } else {
                let D = L.defaultChecked;
                L.removeAttribute(C), L.defaultChecked = D, L.checked = I ? D : !1;
              }
            } else
              t.removeAttribute(E);
          else x || y.includes(C) && (u || typeof V != "string") ? (t[C] = V, C in l && (l[C] = Ot)) : typeof V != "function" && Oe(t, C, V);
        }
    }
  }
  return h && It(!0), p;
}
function Ue(t, e, n = [], r = [], o = [], i, s = !1, a = !1) {
  oh(o, n, r, (l) => {
    var u = void 0, d = {}, h = t.nodeName === "SELECT", p = !1;
    if (yh(() => {
      var m = e(...l.map(c)), y = b1(
        t,
        u,
        m,
        i,
        s,
        a
      );
      p && h && "value" in m && Ya(
        /** @type {HTMLSelectElement} */
        t,
        m.value
      );
      for (let b of Object.getOwnPropertySymbols(d))
        m[b] || _t(d[b]);
      for (let b of Object.getOwnPropertySymbols(m)) {
        var w = m[b];
        b.description === Kd && (!u || w !== u[b]) && (d[b] && _t(d[b]), d[b] = Ut(() => g1(t, () => w))), y[b] = w;
      }
      u = y;
    }), h) {
      var v = (
        /** @type {HTMLSelectElement} */
        t
      );
      Mo(() => {
        Ya(
          v,
          /** @type {Record<string | symbol, any>} */
          u.value,
          !0
        ), y1(v);
      });
    }
    p = !0;
  });
}
function sa(t) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    t.__attributes ??= {
      [Ih]: t.nodeName.includes("-"),
      [Bh]: t.namespaceURI === rm
    }
  );
}
var lc = /* @__PURE__ */ new Map();
function Rh(t) {
  var e = t.getAttribute("is") || t.nodeName, n = lc.get(e);
  if (n) return n;
  lc.set(e, n = []);
  for (var r, o = t, i = Element.prototype; i !== o; ) {
    r = Fd(o);
    for (var s in r)
      r[s].set && n.push(s);
    o = Gs(o);
  }
  return n;
}
function ys(t, e, n = e) {
  var r = /* @__PURE__ */ new WeakSet();
  gh(t, "input", async (o) => {
    var i = o ? t.defaultValue : t.value;
    if (i = $a(t) ? Sa(i) : i, n(i), Qe !== null && r.add(Qe), await Mh(), i !== (i = e())) {
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
  it(e) == null && t.value) && (n($a(t) ? Sa(t.value) : t.value), Qe !== null && r.add(Qe)), to(() => {
    var o = e();
    if (t === document.activeElement) {
      var i = (
        /** @type {Batch} */
        Qi ?? Qe
      );
      if (r.has(i))
        return;
    }
    $a(t) && o === Sa(t.value) || t.type === "date" && !o && !t.value || o !== t.value && (t.value = o ?? "");
  });
}
function $a(t) {
  var e = t.type;
  return e === "number" || e === "range";
}
function Sa(t) {
  return t === "" ? null : +t;
}
function x1(t, e, n = e) {
  gh(t, "change", () => {
    n(t.files);
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  $e && t.files && n(t.files), to(() => {
    t.files = e();
  });
}
class eu {
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
          eu.entries.set(n.target, n);
          for (var r of this.#e.get(n.target) || [])
            r(n);
        }
      }
    ));
  }
}
var k1 = /* @__PURE__ */ new eu({
  box: "border-box"
});
function uc(t, e, n) {
  var r = k1.observe(t, () => n(t[e]));
  Mo(() => (it(() => n(t[e])), r));
}
function cc(t, e) {
  return t === e || t?.[An] === e;
}
function Mt(t = {}, e, n, r) {
  return Mo(() => {
    var o, i;
    return to(() => {
      o = i, i = [], it(() => {
        t !== n(...i) && (e(t, ...i), o && cc(n(...o), t) && e(null, ...o));
      });
    }), () => {
      Pr(() => {
        i && cc(n(...i), t) && e(null, ...i);
      });
    };
  }), t;
}
function tu(t = !1) {
  const e = (
    /** @type {ComponentContextLegacy} */
    ot
  ), n = e.l.u;
  if (!n) return;
  let r = () => Gl(e.s);
  if (t) {
    let o = 0, i = (
      /** @type {Record<string, any>} */
      {}
    );
    const s = /* @__PURE__ */ vi(() => {
      let a = !1;
      const l = e.s;
      for (const u in l)
        l[u] !== i[u] && (i[u] = l[u], a = !0);
      return a && o++, o;
    });
    r = () => c(s);
  }
  n.b.length && Ft(() => {
    dc(e, r), Ra(n.b);
  }), Ie(() => {
    const o = it(() => n.m.map(lm));
    return () => {
      for (const i of o)
        typeof i == "function" && i();
    };
  }), n.a.length && Ie(() => {
    dc(e, r), Ra(n.a);
  });
}
function dc(t, e) {
  if (t.l.s)
    for (const n of t.l.s) c(n);
  e();
}
let Li = !1;
function C1(t) {
  var e = Li;
  try {
    return Li = !1, [t(), Li];
  } finally {
    Li = e;
  }
}
const $1 = {
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
    $1
  );
}
const S1 = {
  get(t, e) {
    if (!t.exclude.includes(e))
      return c(t.version), e in t.special ? t.special[e]() : t.props[e];
  },
  set(t, e, n) {
    if (!(e in t.special)) {
      var r = We;
      try {
        ln(t.parent_effect), t.special[e] = g(
          {
            get [e]() {
              return t.props[e];
            }
          },
          /** @type {string} */
          e,
          Bd
        );
      } finally {
        ln(r);
      }
    }
    return t.special[e](n), Qu(t.version), !0;
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
    return t.exclude.includes(e) || (t.exclude.push(e), Qu(t.version)), !0;
  },
  has(t, e) {
    return t.exclude.includes(e) ? !1 : e in t.props;
  },
  ownKeys(t) {
    return Reflect.ownKeys(t.props).filter((e) => !t.exclude.includes(e));
  }
};
function hc(t, e) {
  return new Proxy(
    {
      props: t,
      exclude: e,
      special: {},
      version: rr(0),
      // TODO this is only necessary because we need to track component
      // destruction inside `prop`, because of `bind:this`, but it
      // seems likely that we can simplify `bind:this` instead
      parent_effect: (
        /** @type {Effect} */
        We
      )
    },
    S1
  );
}
const _1 = {
  get(t, e) {
    let n = t.props.length;
    for (; n--; ) {
      let r = t.props[n];
      if (Vo(r) && (r = r()), typeof r == "object" && r !== null && e in r) return r[e];
    }
  },
  set(t, e, n) {
    let r = t.props.length;
    for (; r--; ) {
      let o = t.props[r];
      Vo(o) && (o = o());
      const i = Jn(o, e);
      if (i && i.set)
        return i.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(t, e) {
    let n = t.props.length;
    for (; n--; ) {
      let r = t.props[n];
      if (Vo(r) && (r = r()), typeof r == "object" && r !== null && e in r) {
        const o = Jn(r, e);
        return o && !o.configurable && (o.configurable = !0), o;
      }
    }
  },
  has(t, e) {
    if (e === An || e === jl) return !1;
    for (let n of t.props)
      if (Vo(n) && (n = n()), n != null && e in n) return !0;
    return !1;
  },
  ownKeys(t) {
    const e = [];
    for (let n of t.props)
      if (Vo(n) && (n = n()), !!n) {
        for (const r in n)
          e.includes(r) || e.push(r);
        for (const r of Object.getOwnPropertySymbols(n))
          e.includes(r) || e.push(r);
      }
    return e;
  }
};
function Re(...t) {
  return new Proxy({ props: t }, _1);
}
function g(t, e, n, r) {
  var o = !Eo || (n & Qv) !== 0, i = (n & em) !== 0, s = (n & tm) !== 0, a = (
    /** @type {V} */
    r
  ), l = !0, u = () => (l && (l = !1, a = s ? it(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), a), d;
  if (i) {
    var h = An in t || jl in t;
    d = Jn(t, e)?.set ?? (h && e in t ? (O) => t[e] = O : void 0);
  }
  var p, v = !1;
  i ? [p, v] = C1(() => (
    /** @type {V} */
    t[e]
  )) : p = /** @type {V} */
  t[e], p === void 0 && r !== void 0 && (p = u(), d && (o && mm(), d(p)));
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
  }, o && (n & Bd) === 0)
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
  var w = !1, b = ((n & Jv) !== 0 ? vi : Zl)(() => (w = !1, m()));
  i && c(b);
  var k = (
    /** @type {Effect} */
    We
  );
  return (
    /** @type {() => V} */
    function(O, C) {
      if (arguments.length > 0) {
        const x = C ? c(b) : o && i ? dt(O) : O;
        return K(b, x), w = !0, a !== void 0 && (a = x), O;
      }
      return no && w || (k.f & Qn) !== 0 ? b.v : c(b);
    }
  );
}
function O1(t) {
  return new P1(t);
}
class P1 {
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
      var a = /* @__PURE__ */ lh(s, !1, !1);
      return n.set(i, a), a;
    };
    const o = new Proxy(
      { ...e.props || {}, $$events: {} },
      {
        get(i, s) {
          return c(n.get(s) ?? r(s, Reflect.get(i, s)));
        },
        has(i, s) {
          return s === jl ? !0 : (c(n.get(s) ?? r(s, Reflect.get(i, s))), Reflect.has(i, s));
        },
        set(i, s, a) {
          return K(n.get(s) ?? r(s, a), a), Reflect.set(i, s, a);
        }
      }
    );
    this.#t = (e.hydrate ? u1 : Ql)(e.component, {
      target: e.target,
      anchor: e.anchor,
      props: o,
      context: e.context,
      intro: e.intro ?? !1,
      recover: e.recover
    }), (!e?.props?.$$host || e.sync === !1) && f(), this.#e = o.$$events;
    for (const i of Object.keys(this.#t))
      i === "$set" || i === "$destroy" || i === "$on" || hs(this, i, {
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
      Vh(this.#t);
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
let jh;
typeof HTMLElement == "function" && (jh = class extends HTMLElement {
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
      const e = {}, n = E1(this);
      for (const r of this.$$s)
        r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = t(r), e.default = !0) : e[r] = t(r));
      for (const r of this.attributes) {
        const o = this.$$g_p(r.name);
        o in this.$$d || (this.$$d[o] = ts(o, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = O1({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: e,
          $$host: this
        }
      }), this.$$me = eo(() => {
        to(() => {
          this.$$r = !0;
          for (const r of ds(this.$$c)) {
            if (!this.$$p_d[r]?.reflect) continue;
            this.$$d[r] = this.$$c[r];
            const o = ts(
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
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = ts(t, n, this.$$p_d, "toProp"), this.$$c?.$set({ [t]: this.$$d[t] }));
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
    return ds(this.$$p_d).find(
      (e) => this.$$p_d[e].attribute === t || !this.$$p_d[e].attribute && e.toLowerCase() === t
    ) || t;
  }
});
function ts(t, e, n, r) {
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
function E1(t) {
  const e = {};
  return t.childNodes.forEach((n) => {
    e[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), e;
}
function ie(t, e, n, r, o, i) {
  let s = class extends jh {
    constructor() {
      super(t, n, o), this.$$p_d = e;
    }
    static get observedAttributes() {
      return ds(e).map(
        (a) => (e[a].attribute || a).toLowerCase()
      );
    }
  };
  return ds(e).forEach((a) => {
    hs(s.prototype, a, {
      get() {
        return this.$$c && a in this.$$c ? this.$$c[a] : this.$$d[a];
      },
      set(l) {
        l = ts(a, l, e), this.$$d[a] = l;
        var u = this.$$c;
        if (u) {
          var d = Jn(u, a)?.get;
          d ? u[a] = l : u.$set({ [a]: l });
        }
      }
    });
  }), r.forEach((a) => {
    hs(s.prototype, a, {
      get() {
        return this.$$c?.[a];
      }
    });
  }), t.element = /** @type {any} */
  s, s;
}
var N1 = { value: () => {
} };
function aa() {
  for (var t = 0, e = arguments.length, n = {}, r; t < e; ++t) {
    if (!(r = arguments[t] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new ns(n);
}
function ns(t) {
  this._ = t;
}
function M1(t, e) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !e.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
ns.prototype = aa.prototype = {
  constructor: ns,
  on: function(t, e) {
    var n = this._, r = M1(t + "", n), o, i = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++i < s; ) if ((o = (t = r[i]).type) && (o = z1(n[o], t.name))) return o;
      return;
    }
    if (e != null && typeof e != "function") throw new Error("invalid callback: " + e);
    for (; ++i < s; )
      if (o = (t = r[i]).type) n[o] = pc(n[o], t.name, e);
      else if (e == null) for (o in n) n[o] = pc(n[o], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, e = this._;
    for (var n in e) t[n] = e[n].slice();
    return new ns(t);
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
function pc(t, e, n) {
  for (var r = 0, o = t.length; r < o; ++r)
    if (t[r].name === e) {
      t[r] = N1, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return n != null && t.push({ name: e, value: n }), t;
}
var Ga = "http://www.w3.org/1999/xhtml";
const fc = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Ga,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function la(t) {
  var e = t += "", n = e.indexOf(":");
  return n >= 0 && (e = t.slice(0, n)) !== "xmlns" && (t = t.slice(n + 1)), fc.hasOwnProperty(e) ? { space: fc[e], local: t } : t;
}
function A1(t) {
  return function() {
    var e = this.ownerDocument, n = this.namespaceURI;
    return n === Ga && e.documentElement.namespaceURI === Ga ? e.createElement(t) : e.createElementNS(n, t);
  };
}
function T1(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function Kh(t) {
  var e = la(t);
  return (e.local ? T1 : A1)(e);
}
function D1() {
}
function nu(t) {
  return t == null ? D1 : function() {
    return this.querySelector(t);
  };
}
function V1(t) {
  typeof t != "function" && (t = nu(t));
  for (var e = this._groups, n = e.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = e[o], s = i.length, a = r[o] = new Array(s), l, u, d = 0; d < s; ++d)
      (l = i[d]) && (u = t.call(l, l.__data__, d, i)) && ("__data__" in l && (u.__data__ = l.__data__), a[d] = u);
  return new nn(r, this._parents);
}
function L1(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function H1() {
  return [];
}
function Fh(t) {
  return t == null ? H1 : function() {
    return this.querySelectorAll(t);
  };
}
function I1(t) {
  return function() {
    return L1(t.apply(this, arguments));
  };
}
function B1(t) {
  typeof t == "function" ? t = I1(t) : t = Fh(t);
  for (var e = this._groups, n = e.length, r = [], o = [], i = 0; i < n; ++i)
    for (var s = e[i], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && (r.push(t.call(l, l.__data__, u, s)), o.push(l));
  return new nn(r, o);
}
function Zh(t) {
  return function() {
    return this.matches(t);
  };
}
function Wh(t) {
  return function(e) {
    return e.matches(t);
  };
}
var R1 = Array.prototype.find;
function j1(t) {
  return function() {
    return R1.call(this.children, t);
  };
}
function K1() {
  return this.firstElementChild;
}
function F1(t) {
  return this.select(t == null ? K1 : j1(typeof t == "function" ? t : Wh(t)));
}
var Z1 = Array.prototype.filter;
function W1() {
  return Array.from(this.children);
}
function X1(t) {
  return function() {
    return Z1.call(this.children, t);
  };
}
function q1(t) {
  return this.selectAll(t == null ? W1 : X1(typeof t == "function" ? t : Wh(t)));
}
function Y1(t) {
  typeof t != "function" && (t = Zh(t));
  for (var e = this._groups, n = e.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = e[o], s = i.length, a = r[o] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && t.call(l, l.__data__, u, i) && a.push(l);
  return new nn(r, this._parents);
}
function Xh(t) {
  return new Array(t.length);
}
function G1() {
  return new nn(this._enter || this._groups.map(Xh), this._parents);
}
function ws(t, e) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
}
ws.prototype = {
  constructor: ws,
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
function J1(t, e, n, r, o, i) {
  for (var s = 0, a, l = e.length, u = i.length; s < u; ++s)
    (a = e[s]) ? (a.__data__ = i[s], r[s] = a) : n[s] = new ws(t, i[s]);
  for (; s < l; ++s)
    (a = e[s]) && (o[s] = a);
}
function Q1(t, e, n, r, o, i, s) {
  var a, l, u = /* @__PURE__ */ new Map(), d = e.length, h = i.length, p = new Array(d), v;
  for (a = 0; a < d; ++a)
    (l = e[a]) && (p[a] = v = s.call(l, l.__data__, a, e) + "", u.has(v) ? o[a] = l : u.set(v, l));
  for (a = 0; a < h; ++a)
    v = s.call(t, i[a], a, i) + "", (l = u.get(v)) ? (r[a] = l, l.__data__ = i[a], u.delete(v)) : n[a] = new ws(t, i[a]);
  for (a = 0; a < d; ++a)
    (l = e[a]) && u.get(p[a]) === l && (o[a] = l);
}
function e0(t) {
  return t.__data__;
}
function t0(t, e) {
  if (!arguments.length) return Array.from(this, e0);
  var n = e ? Q1 : J1, r = this._parents, o = this._groups;
  typeof t != "function" && (t = U1(t));
  for (var i = o.length, s = new Array(i), a = new Array(i), l = new Array(i), u = 0; u < i; ++u) {
    var d = r[u], h = o[u], p = h.length, v = n0(t.call(d, d && d.__data__, u, r)), m = v.length, y = a[u] = new Array(m), w = s[u] = new Array(m), b = l[u] = new Array(p);
    n(d, h, y, w, b, v, e);
    for (var k = 0, O = 0, C, x; k < m; ++k)
      if (C = y[k]) {
        for (k >= O && (O = k + 1); !(x = w[O]) && ++O < m; ) ;
        C._next = x || null;
      }
  }
  return s = new nn(s, r), s._enter = a, s._exit = l, s;
}
function n0(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function r0() {
  return new nn(this._exit || this._groups.map(Xh), this._parents);
}
function o0(t, e, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), e != null && (o = e(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function i0(t) {
  for (var e = t.selection ? t.selection() : t, n = this._groups, r = e._groups, o = n.length, i = r.length, s = Math.min(o, i), a = new Array(o), l = 0; l < s; ++l)
    for (var u = n[l], d = r[l], h = u.length, p = a[l] = new Array(h), v, m = 0; m < h; ++m)
      (v = u[m] || d[m]) && (p[m] = v);
  for (; l < o; ++l)
    a[l] = n[l];
  return new nn(a, this._parents);
}
function s0() {
  for (var t = this._groups, e = -1, n = t.length; ++e < n; )
    for (var r = t[e], o = r.length - 1, i = r[o], s; --o >= 0; )
      (s = r[o]) && (i && s.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(s, i), i = s);
  return this;
}
function a0(t) {
  t || (t = l0);
  function e(h, p) {
    return h && p ? t(h.__data__, p.__data__) : !h - !p;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), i = 0; i < r; ++i) {
    for (var s = n[i], a = s.length, l = o[i] = new Array(a), u, d = 0; d < a; ++d)
      (u = s[d]) && (l[d] = u);
    l.sort(e);
  }
  return new nn(o, this._parents).order();
}
function l0(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function u0() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function c0() {
  return Array.from(this);
}
function d0() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], o = 0, i = r.length; o < i; ++o) {
      var s = r[o];
      if (s) return s;
    }
  return null;
}
function h0() {
  let t = 0;
  for (const e of this) ++t;
  return t;
}
function p0() {
  return !this.node();
}
function f0(t) {
  for (var e = this._groups, n = 0, r = e.length; n < r; ++n)
    for (var o = e[n], i = 0, s = o.length, a; i < s; ++i)
      (a = o[i]) && t.call(a, a.__data__, i, o);
  return this;
}
function g0(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function v0(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function m0(t, e) {
  return function() {
    this.setAttribute(t, e);
  };
}
function y0(t, e) {
  return function() {
    this.setAttributeNS(t.space, t.local, e);
  };
}
function w0(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttribute(t) : this.setAttribute(t, n);
  };
}
function b0(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n);
  };
}
function x0(t, e) {
  var n = la(t);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((e == null ? n.local ? v0 : g0 : typeof e == "function" ? n.local ? b0 : w0 : n.local ? y0 : m0)(n, e));
}
function qh(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function k0(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function C0(t, e, n) {
  return function() {
    this.style.setProperty(t, e, n);
  };
}
function $0(t, e, n) {
  return function() {
    var r = e.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, n);
  };
}
function S0(t, e, n) {
  return arguments.length > 1 ? this.each((e == null ? k0 : typeof e == "function" ? $0 : C0)(t, e, n ?? "")) : bo(this.node(), t);
}
function bo(t, e) {
  return t.style.getPropertyValue(e) || qh(t).getComputedStyle(t, null).getPropertyValue(e);
}
function _0(t) {
  return function() {
    delete this[t];
  };
}
function O0(t, e) {
  return function() {
    this[t] = e;
  };
}
function P0(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? delete this[t] : this[t] = n;
  };
}
function E0(t, e) {
  return arguments.length > 1 ? this.each((e == null ? _0 : typeof e == "function" ? P0 : O0)(t, e)) : this.node()[t];
}
function Yh(t) {
  return t.trim().split(/^|\s+/);
}
function ru(t) {
  return t.classList || new Gh(t);
}
function Gh(t) {
  this._node = t, this._names = Yh(t.getAttribute("class") || "");
}
Gh.prototype = {
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
function Uh(t, e) {
  for (var n = ru(t), r = -1, o = e.length; ++r < o; ) n.add(e[r]);
}
function Jh(t, e) {
  for (var n = ru(t), r = -1, o = e.length; ++r < o; ) n.remove(e[r]);
}
function N0(t) {
  return function() {
    Uh(this, t);
  };
}
function M0(t) {
  return function() {
    Jh(this, t);
  };
}
function z0(t, e) {
  return function() {
    (e.apply(this, arguments) ? Uh : Jh)(this, t);
  };
}
function A0(t, e) {
  var n = Yh(t + "");
  if (arguments.length < 2) {
    for (var r = ru(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof e == "function" ? z0 : e ? N0 : M0)(n, e));
}
function T0() {
  this.textContent = "";
}
function D0(t) {
  return function() {
    this.textContent = t;
  };
}
function V0(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
function L0(t) {
  return arguments.length ? this.each(t == null ? T0 : (typeof t == "function" ? V0 : D0)(t)) : this.node().textContent;
}
function H0() {
  this.innerHTML = "";
}
function I0(t) {
  return function() {
    this.innerHTML = t;
  };
}
function B0(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function R0(t) {
  return arguments.length ? this.each(t == null ? H0 : (typeof t == "function" ? B0 : I0)(t)) : this.node().innerHTML;
}
function j0() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function K0() {
  return this.each(j0);
}
function F0() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Z0() {
  return this.each(F0);
}
function W0(t) {
  var e = typeof t == "function" ? t : Kh(t);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function X0() {
  return null;
}
function q0(t, e) {
  var n = typeof t == "function" ? t : Kh(t), r = e == null ? X0 : typeof e == "function" ? e : nu(e);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Y0() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function G0() {
  return this.each(Y0);
}
function U0() {
  var t = this.cloneNode(!1), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function J0() {
  var t = this.cloneNode(!0), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function Q0(t) {
  return this.select(t ? J0 : U0);
}
function ey(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function ty(t) {
  return function(e) {
    t.call(this, e, this.__data__);
  };
}
function ny(t) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var n = "", r = e.indexOf(".");
    return r >= 0 && (n = e.slice(r + 1), e = e.slice(0, r)), { type: e, name: n };
  });
}
function ry(t) {
  return function() {
    var e = this.__on;
    if (e) {
      for (var n = 0, r = -1, o = e.length, i; n < o; ++n)
        i = e[n], (!t.type || i.type === t.type) && i.name === t.name ? this.removeEventListener(i.type, i.listener, i.options) : e[++r] = i;
      ++r ? e.length = r : delete this.__on;
    }
  };
}
function oy(t, e, n) {
  return function() {
    var r = this.__on, o, i = ty(e);
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
function iy(t, e, n) {
  var r = ny(t + ""), o, i = r.length, s;
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
  for (a = e ? oy : ry, o = 0; o < i; ++o) this.each(a(r[o], e, n));
  return this;
}
function Qh(t, e, n) {
  var r = qh(t), o = r.CustomEvent;
  typeof o == "function" ? o = new o(e, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(e, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(e, !1, !1)), t.dispatchEvent(o);
}
function sy(t, e) {
  return function() {
    return Qh(this, t, e);
  };
}
function ay(t, e) {
  return function() {
    return Qh(this, t, e.apply(this, arguments));
  };
}
function ly(t, e) {
  return this.each((typeof e == "function" ? ay : sy)(t, e));
}
function* uy() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], o = 0, i = r.length, s; o < i; ++o)
      (s = r[o]) && (yield s);
}
var ep = [null];
function nn(t, e) {
  this._groups = t, this._parents = e;
}
function xi() {
  return new nn([[document.documentElement]], ep);
}
function cy() {
  return this;
}
nn.prototype = xi.prototype = {
  constructor: nn,
  select: V1,
  selectAll: B1,
  selectChild: F1,
  selectChildren: q1,
  filter: Y1,
  data: t0,
  enter: G1,
  exit: r0,
  join: o0,
  merge: i0,
  selection: cy,
  order: s0,
  sort: a0,
  call: u0,
  nodes: c0,
  node: d0,
  size: h0,
  empty: p0,
  each: f0,
  attr: x0,
  style: S0,
  property: E0,
  classed: A0,
  text: L0,
  html: R0,
  raise: K0,
  lower: Z0,
  append: W0,
  insert: q0,
  remove: G0,
  clone: Q0,
  datum: ey,
  on: iy,
  dispatch: ly,
  [Symbol.iterator]: uy
};
function an(t) {
  return typeof t == "string" ? new nn([[document.querySelector(t)]], [document.documentElement]) : new nn([[t]], ep);
}
function dy(t) {
  let e;
  for (; e = t.sourceEvent; ) t = e;
  return t;
}
function hn(t, e) {
  if (t = dy(t), e === void 0 && (e = t.currentTarget), e) {
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
const hy = { passive: !1 }, ri = { capture: !0, passive: !1 };
function _a(t) {
  t.stopImmediatePropagation();
}
function fo(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function tp(t) {
  var e = t.document.documentElement, n = an(t).on("dragstart.drag", fo, ri);
  "onselectstart" in e ? n.on("selectstart.drag", fo, ri) : (e.__noselect = e.style.MozUserSelect, e.style.MozUserSelect = "none");
}
function np(t, e) {
  var n = t.document.documentElement, r = an(t).on("dragstart.drag", null);
  e && (r.on("click.drag", fo, ri), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const Hi = (t) => () => t;
function Ua(t, {
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
Ua.prototype.on = function() {
  var t = this._.on.apply(this._, arguments);
  return t === this._ ? this : t;
};
function py(t) {
  return !t.ctrlKey && !t.button;
}
function fy() {
  return this.parentNode;
}
function gy(t, e) {
  return e ?? { x: t.x, y: t.y };
}
function vy() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function my() {
  var t = py, e = fy, n = gy, r = vy, o = {}, i = aa("start", "drag", "end"), s = 0, a, l, u, d, h = 0;
  function p(C) {
    C.on("mousedown.drag", v).filter(r).on("touchstart.drag", w).on("touchmove.drag", b, hy).on("touchend.drag touchcancel.drag", k).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function v(C, x) {
    if (!(d || !t.call(this, C, x))) {
      var E = O(this, e.call(this, C, x), C, x, "mouse");
      E && (an(C.view).on("mousemove.drag", m, ri).on("mouseup.drag", y, ri), tp(C.view), _a(C), u = !1, a = C.clientX, l = C.clientY, E("start", C));
    }
  }
  function m(C) {
    if (fo(C), !u) {
      var x = C.clientX - a, E = C.clientY - l;
      u = x * x + E * E > h;
    }
    o.mouse("drag", C);
  }
  function y(C) {
    an(C.view).on("mousemove.drag mouseup.drag", null), np(C.view, u), fo(C), o.mouse("end", C);
  }
  function w(C, x) {
    if (t.call(this, C, x)) {
      var E = C.changedTouches, V = e.call(this, C, x), L = E.length, I, D;
      for (I = 0; I < L; ++I)
        (D = O(this, V, C, x, E[I].identifier, E[I])) && (_a(C), D("start", C, E[I]));
    }
  }
  function b(C) {
    var x = C.changedTouches, E = x.length, V, L;
    for (V = 0; V < E; ++V)
      (L = o[x[V].identifier]) && (fo(C), L("drag", C, x[V]));
  }
  function k(C) {
    var x = C.changedTouches, E = x.length, V, L;
    for (d && clearTimeout(d), d = setTimeout(function() {
      d = null;
    }, 500), V = 0; V < E; ++V)
      (L = o[x[V].identifier]) && (_a(C), L("end", C, x[V]));
  }
  function O(C, x, E, V, L, I) {
    var D = i.copy(), N = hn(I || E, x), S, T, $;
    if (($ = n.call(C, new Ua("beforestart", {
      sourceEvent: E,
      target: p,
      identifier: L,
      active: s,
      x: N[0],
      y: N[1],
      dx: 0,
      dy: 0,
      dispatch: D
    }), V)) != null)
      return S = $.x - N[0] || 0, T = $.y - N[1] || 0, function P(M, j, q) {
        var G = N, A;
        switch (M) {
          case "start":
            o[L] = P, A = s++;
            break;
          case "end":
            delete o[L], --s;
          // falls through
          case "drag":
            N = hn(q || j, x), A = s;
            break;
        }
        D.call(
          M,
          C,
          new Ua(M, {
            sourceEvent: j,
            subject: $,
            target: p,
            identifier: L,
            active: A,
            x: N[0] + S,
            y: N[1] + T,
            dx: N[0] - G[0],
            dy: N[1] - G[1],
            dispatch: D
          }),
          V
        );
      };
  }
  return p.filter = function(C) {
    return arguments.length ? (t = typeof C == "function" ? C : Hi(!!C), p) : t;
  }, p.container = function(C) {
    return arguments.length ? (e = typeof C == "function" ? C : Hi(C), p) : e;
  }, p.subject = function(C) {
    return arguments.length ? (n = typeof C == "function" ? C : Hi(C), p) : n;
  }, p.touchable = function(C) {
    return arguments.length ? (r = typeof C == "function" ? C : Hi(!!C), p) : r;
  }, p.on = function() {
    var C = i.on.apply(i, arguments);
    return C === i ? p : C;
  }, p.clickDistance = function(C) {
    return arguments.length ? (h = (C = +C) * C, p) : Math.sqrt(h);
  }, p;
}
function ou(t, e, n) {
  t.prototype = e.prototype = n, n.constructor = t;
}
function rp(t, e) {
  var n = Object.create(t.prototype);
  for (var r in e) n[r] = e[r];
  return n;
}
function ki() {
}
var oi = 0.7, bs = 1 / oi, go = "\\s*([+-]?\\d+)\\s*", ii = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Tn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", yy = /^#([0-9a-f]{3,8})$/, wy = new RegExp(`^rgb\\(${go},${go},${go}\\)$`), by = new RegExp(`^rgb\\(${Tn},${Tn},${Tn}\\)$`), xy = new RegExp(`^rgba\\(${go},${go},${go},${ii}\\)$`), ky = new RegExp(`^rgba\\(${Tn},${Tn},${Tn},${ii}\\)$`), Cy = new RegExp(`^hsl\\(${ii},${Tn},${Tn}\\)$`), $y = new RegExp(`^hsla\\(${ii},${Tn},${Tn},${ii}\\)$`), gc = {
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
ou(ki, qr, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: vc,
  // Deprecated! Use color.formatHex.
  formatHex: vc,
  formatHex8: Sy,
  formatHsl: _y,
  formatRgb: mc,
  toString: mc
});
function vc() {
  return this.rgb().formatHex();
}
function Sy() {
  return this.rgb().formatHex8();
}
function _y() {
  return op(this).formatHsl();
}
function mc() {
  return this.rgb().formatRgb();
}
function qr(t) {
  var e, n;
  return t = (t + "").trim().toLowerCase(), (e = yy.exec(t)) ? (n = e[1].length, e = parseInt(e[1], 16), n === 6 ? yc(e) : n === 3 ? new Wt(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : n === 8 ? Ii(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : n === 4 ? Ii(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = wy.exec(t)) ? new Wt(e[1], e[2], e[3], 1) : (e = by.exec(t)) ? new Wt(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = xy.exec(t)) ? Ii(e[1], e[2], e[3], e[4]) : (e = ky.exec(t)) ? Ii(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = Cy.exec(t)) ? xc(e[1], e[2] / 100, e[3] / 100, 1) : (e = $y.exec(t)) ? xc(e[1], e[2] / 100, e[3] / 100, e[4]) : gc.hasOwnProperty(t) ? yc(gc[t]) : t === "transparent" ? new Wt(NaN, NaN, NaN, 0) : null;
}
function yc(t) {
  return new Wt(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function Ii(t, e, n, r) {
  return r <= 0 && (t = e = n = NaN), new Wt(t, e, n, r);
}
function Oy(t) {
  return t instanceof ki || (t = qr(t)), t ? (t = t.rgb(), new Wt(t.r, t.g, t.b, t.opacity)) : new Wt();
}
function Ja(t, e, n, r) {
  return arguments.length === 1 ? Oy(t) : new Wt(t, e, n, r ?? 1);
}
function Wt(t, e, n, r) {
  this.r = +t, this.g = +e, this.b = +n, this.opacity = +r;
}
ou(Wt, Ja, rp(ki, {
  brighter(t) {
    return t = t == null ? bs : Math.pow(bs, t), new Wt(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? oi : Math.pow(oi, t), new Wt(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Wt(jr(this.r), jr(this.g), jr(this.b), xs(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: wc,
  // Deprecated! Use color.formatHex.
  formatHex: wc,
  formatHex8: Py,
  formatRgb: bc,
  toString: bc
}));
function wc() {
  return `#${Hr(this.r)}${Hr(this.g)}${Hr(this.b)}`;
}
function Py() {
  return `#${Hr(this.r)}${Hr(this.g)}${Hr(this.b)}${Hr((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function bc() {
  const t = xs(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${jr(this.r)}, ${jr(this.g)}, ${jr(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function xs(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function jr(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function Hr(t) {
  return t = jr(t), (t < 16 ? "0" : "") + t.toString(16);
}
function xc(t, e, n, r) {
  return r <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new pn(t, e, n, r);
}
function op(t) {
  if (t instanceof pn) return new pn(t.h, t.s, t.l, t.opacity);
  if (t instanceof ki || (t = qr(t)), !t) return new pn();
  if (t instanceof pn) return t;
  t = t.rgb();
  var e = t.r / 255, n = t.g / 255, r = t.b / 255, o = Math.min(e, n, r), i = Math.max(e, n, r), s = NaN, a = i - o, l = (i + o) / 2;
  return a ? (e === i ? s = (n - r) / a + (n < r) * 6 : n === i ? s = (r - e) / a + 2 : s = (e - n) / a + 4, a /= l < 0.5 ? i + o : 2 - i - o, s *= 60) : a = l > 0 && l < 1 ? 0 : s, new pn(s, a, l, t.opacity);
}
function Ey(t, e, n, r) {
  return arguments.length === 1 ? op(t) : new pn(t, e, n, r ?? 1);
}
function pn(t, e, n, r) {
  this.h = +t, this.s = +e, this.l = +n, this.opacity = +r;
}
ou(pn, Ey, rp(ki, {
  brighter(t) {
    return t = t == null ? bs : Math.pow(bs, t), new pn(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? oi : Math.pow(oi, t), new pn(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, e = isNaN(t) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * e, o = 2 * n - r;
    return new Wt(
      Oa(t >= 240 ? t - 240 : t + 120, o, r),
      Oa(t, o, r),
      Oa(t < 120 ? t + 240 : t - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new pn(kc(this.h), Bi(this.s), Bi(this.l), xs(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = xs(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${kc(this.h)}, ${Bi(this.s) * 100}%, ${Bi(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function kc(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function Bi(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function Oa(t, e, n) {
  return (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e) * 255;
}
const iu = (t) => () => t;
function Ny(t, e) {
  return function(n) {
    return t + n * e;
  };
}
function My(t, e, n) {
  return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function(r) {
    return Math.pow(t + r * e, n);
  };
}
function zy(t) {
  return (t = +t) == 1 ? ip : function(e, n) {
    return n - e ? My(e, n, t) : iu(isNaN(e) ? n : e);
  };
}
function ip(t, e) {
  var n = e - t;
  return n ? Ny(t, n) : iu(isNaN(t) ? e : t);
}
const ks = function t(e) {
  var n = zy(e);
  function r(o, i) {
    var s = n((o = Ja(o)).r, (i = Ja(i)).r), a = n(o.g, i.g), l = n(o.b, i.b), u = ip(o.opacity, i.opacity);
    return function(d) {
      return o.r = s(d), o.g = a(d), o.b = l(d), o.opacity = u(d), o + "";
    };
  }
  return r.gamma = t, r;
}(1);
function Ay(t, e) {
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
function Dy(t, e) {
  var n = e ? e.length : 0, r = t ? Math.min(n, t.length) : 0, o = new Array(r), i = new Array(n), s;
  for (s = 0; s < r; ++s) o[s] = Uo(t[s], e[s]);
  for (; s < n; ++s) i[s] = e[s];
  return function(a) {
    for (s = 0; s < r; ++s) i[s] = o[s](a);
    return i;
  };
}
function Vy(t, e) {
  var n = /* @__PURE__ */ new Date();
  return t = +t, e = +e, function(r) {
    return n.setTime(t * (1 - r) + e * r), n;
  };
}
function On(t, e) {
  return t = +t, e = +e, function(n) {
    return t * (1 - n) + e * n;
  };
}
function Ly(t, e) {
  var n = {}, r = {}, o;
  (t === null || typeof t != "object") && (t = {}), (e === null || typeof e != "object") && (e = {});
  for (o in e)
    o in t ? n[o] = Uo(t[o], e[o]) : r[o] = e[o];
  return function(i) {
    for (o in n) r[o] = n[o](i);
    return r;
  };
}
var Qa = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Pa = new RegExp(Qa.source, "g");
function Hy(t) {
  return function() {
    return t;
  };
}
function Iy(t) {
  return function(e) {
    return t(e) + "";
  };
}
function sp(t, e) {
  var n = Qa.lastIndex = Pa.lastIndex = 0, r, o, i, s = -1, a = [], l = [];
  for (t = t + "", e = e + ""; (r = Qa.exec(t)) && (o = Pa.exec(e)); )
    (i = o.index) > n && (i = e.slice(n, i), a[s] ? a[s] += i : a[++s] = i), (r = r[0]) === (o = o[0]) ? a[s] ? a[s] += o : a[++s] = o : (a[++s] = null, l.push({ i: s, x: On(r, o) })), n = Pa.lastIndex;
  return n < e.length && (i = e.slice(n), a[s] ? a[s] += i : a[++s] = i), a.length < 2 ? l[0] ? Iy(l[0].x) : Hy(e) : (e = l.length, function(u) {
    for (var d = 0, h; d < e; ++d) a[(h = l[d]).i] = h.x(u);
    return a.join("");
  });
}
function Uo(t, e) {
  var n = typeof e, r;
  return e == null || n === "boolean" ? iu(e) : (n === "number" ? On : n === "string" ? (r = qr(e)) ? (e = r, ks) : sp : e instanceof qr ? ks : e instanceof Date ? Vy : Ty(e) ? Ay : Array.isArray(e) ? Dy : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? Ly : On)(t, e);
}
var Cc = 180 / Math.PI, ap = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function lp(t, e, n, r, o, i) {
  var s, a, l;
  return (s = Math.sqrt(t * t + e * e)) && (t /= s, e /= s), (l = t * n + e * r) && (n -= t * l, r -= e * l), (a = Math.sqrt(n * n + r * r)) && (n /= a, r /= a, l /= a), t * r < e * n && (t = -t, e = -e, l = -l, s = -s), {
    translateX: o,
    translateY: i,
    rotate: Math.atan2(e, t) * Cc,
    skewX: Math.atan(l) * Cc,
    scaleX: s,
    scaleY: a
  };
}
var Ri;
function By(t) {
  const e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return e.isIdentity ? ap : lp(e.a, e.b, e.c, e.d, e.e, e.f);
}
function Ry(t) {
  return t == null || (Ri || (Ri = document.createElementNS("http://www.w3.org/2000/svg", "g")), Ri.setAttribute("transform", t), !(t = Ri.transform.baseVal.consolidate())) ? ap : (t = t.matrix, lp(t.a, t.b, t.c, t.d, t.e, t.f));
}
function up(t, e, n, r) {
  function o(u) {
    return u.length ? u.pop() + " " : "";
  }
  function i(u, d, h, p, v, m) {
    if (u !== h || d !== p) {
      var y = v.push("translate(", null, e, null, n);
      m.push({ i: y - 4, x: On(u, h) }, { i: y - 2, x: On(d, p) });
    } else (h || p) && v.push("translate(" + h + e + p + n);
  }
  function s(u, d, h, p) {
    u !== d ? (u - d > 180 ? d += 360 : d - u > 180 && (u += 360), p.push({ i: h.push(o(h) + "rotate(", null, r) - 2, x: On(u, d) })) : d && h.push(o(h) + "rotate(" + d + r);
  }
  function a(u, d, h, p) {
    u !== d ? p.push({ i: h.push(o(h) + "skewX(", null, r) - 2, x: On(u, d) }) : d && h.push(o(h) + "skewX(" + d + r);
  }
  function l(u, d, h, p, v, m) {
    if (u !== h || d !== p) {
      var y = v.push(o(v) + "scale(", null, ",", null, ")");
      m.push({ i: y - 4, x: On(u, h) }, { i: y - 2, x: On(d, p) });
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
var jy = up(By, "px, ", "px)", "deg)"), Ky = up(Ry, ", ", ")", ")"), Fy = 1e-12;
function $c(t) {
  return ((t = Math.exp(t)) + 1 / t) / 2;
}
function Zy(t) {
  return ((t = Math.exp(t)) - 1 / t) / 2;
}
function Wy(t) {
  return ((t = Math.exp(2 * t)) - 1) / (t + 1);
}
const rs = function t(e, n, r) {
  function o(i, s) {
    var a = i[0], l = i[1], u = i[2], d = s[0], h = s[1], p = s[2], v = d - a, m = h - l, y = v * v + m * m, w, b;
    if (y < Fy)
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
        var L = V * b, I = $c(x), D = u / (n * k) * (I * Wy(e * L + x) - Zy(x));
        return [
          a + D * v,
          l + D * m,
          u * I / $c(e * L + x)
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
var xo = 0, Ko = 0, Lo = 0, cp = 1e3, Cs, Fo, $s = 0, Yr = 0, ua = 0, si = typeof performance == "object" && performance.now ? performance : Date, dp = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function su() {
  return Yr || (dp(Xy), Yr = si.now() + ua);
}
function Xy() {
  Yr = 0;
}
function Ss() {
  this._call = this._time = this._next = null;
}
Ss.prototype = hp.prototype = {
  constructor: Ss,
  restart: function(t, e, n) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    n = (n == null ? su() : +n) + (e == null ? 0 : +e), !this._next && Fo !== this && (Fo ? Fo._next = this : Cs = this, Fo = this), this._call = t, this._time = n, el();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, el());
  }
};
function hp(t, e, n) {
  var r = new Ss();
  return r.restart(t, e, n), r;
}
function qy() {
  su(), ++xo;
  for (var t = Cs, e; t; )
    (e = Yr - t._time) >= 0 && t._call.call(void 0, e), t = t._next;
  --xo;
}
function Sc() {
  Yr = ($s = si.now()) + ua, xo = Ko = 0;
  try {
    qy();
  } finally {
    xo = 0, Gy(), Yr = 0;
  }
}
function Yy() {
  var t = si.now(), e = t - $s;
  e > cp && (ua -= e, $s = t);
}
function Gy() {
  for (var t, e = Cs, n, r = 1 / 0; e; )
    e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : Cs = n);
  Fo = t, el(r);
}
function el(t) {
  if (!xo) {
    Ko && (Ko = clearTimeout(Ko));
    var e = t - Yr;
    e > 24 ? (t < 1 / 0 && (Ko = setTimeout(Sc, t - si.now() - ua)), Lo && (Lo = clearInterval(Lo))) : (Lo || ($s = si.now(), Lo = setInterval(Yy, cp)), xo = 1, dp(Sc));
  }
}
function _c(t, e, n) {
  var r = new Ss();
  return e = e == null ? 0 : +e, r.restart((o) => {
    r.stop(), t(o + e);
  }, e, n), r;
}
var Uy = aa("start", "end", "cancel", "interrupt"), Jy = [], pp = 0, Oc = 1, tl = 2, os = 3, Pc = 4, nl = 5, is = 6;
function ca(t, e, n, r, o, i) {
  var s = t.__transition;
  if (!s) t.__transition = {};
  else if (n in s) return;
  Qy(t, n, {
    name: e,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: Uy,
    tween: Jy,
    time: i.time,
    delay: i.delay,
    duration: i.duration,
    ease: i.ease,
    timer: null,
    state: pp
  });
}
function au(t, e) {
  var n = Cn(t, e);
  if (n.state > pp) throw new Error("too late; already scheduled");
  return n;
}
function Rn(t, e) {
  var n = Cn(t, e);
  if (n.state > os) throw new Error("too late; already running");
  return n;
}
function Cn(t, e) {
  var n = t.__transition;
  if (!n || !(n = n[e])) throw new Error("transition not found");
  return n;
}
function Qy(t, e, n) {
  var r = t.__transition, o;
  r[e] = n, n.timer = hp(i, 0, n.time);
  function i(u) {
    n.state = Oc, n.timer.restart(s, n.delay, n.time), n.delay <= u && s(u - n.delay);
  }
  function s(u) {
    var d, h, p, v;
    if (n.state !== Oc) return l();
    for (d in r)
      if (v = r[d], v.name === n.name) {
        if (v.state === os) return _c(s);
        v.state === Pc ? (v.state = is, v.timer.stop(), v.on.call("interrupt", t, t.__data__, v.index, v.group), delete r[d]) : +d < e && (v.state = is, v.timer.stop(), v.on.call("cancel", t, t.__data__, v.index, v.group), delete r[d]);
      }
    if (_c(function() {
      n.state === os && (n.state = Pc, n.timer.restart(a, n.delay, n.time), a(u));
    }), n.state = tl, n.on.call("start", t, t.__data__, n.index, n.group), n.state === tl) {
      for (n.state = os, o = new Array(p = n.tween.length), d = 0, h = -1; d < p; ++d)
        (v = n.tween[d].value.call(t, t.__data__, n.index, n.group)) && (o[++h] = v);
      o.length = h + 1;
    }
  }
  function a(u) {
    for (var d = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), n.state = nl, 1), h = -1, p = o.length; ++h < p; )
      o[h].call(t, d);
    n.state === nl && (n.on.call("end", t, t.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = is, n.timer.stop(), delete r[e];
    for (var u in r) return;
    delete t.__transition;
  }
}
function ss(t, e) {
  var n = t.__transition, r, o, i = !0, s;
  if (n) {
    e = e == null ? null : e + "";
    for (s in n) {
      if ((r = n[s]).name !== e) {
        i = !1;
        continue;
      }
      o = r.state > tl && r.state < nl, r.state = is, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete n[s];
    }
    i && delete t.__transition;
  }
}
function ew(t) {
  return this.each(function() {
    ss(this, t);
  });
}
function tw(t, e) {
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
function nw(t, e, n) {
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
function rw(t, e) {
  var n = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = Cn(this.node(), n).tween, o = 0, i = r.length, s; o < i; ++o)
      if ((s = r[o]).name === t)
        return s.value;
    return null;
  }
  return this.each((e == null ? tw : nw)(n, t, e));
}
function lu(t, e, n) {
  var r = t._id;
  return t.each(function() {
    var o = Rn(this, r);
    (o.value || (o.value = {}))[e] = n.apply(this, arguments);
  }), function(o) {
    return Cn(o, r).value[e];
  };
}
function fp(t, e) {
  var n;
  return (typeof e == "number" ? On : e instanceof qr ? ks : (n = qr(e)) ? (e = n, ks) : sp)(t, e);
}
function ow(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function iw(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function sw(t, e, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttribute(t);
    return s === o ? null : s === r ? i : i = e(r = s, n);
  };
}
function aw(t, e, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttributeNS(t.space, t.local);
    return s === o ? null : s === r ? i : i = e(r = s, n);
  };
}
function lw(t, e, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttribute(t) : (s = this.getAttribute(t), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = e(r = s, a)));
  };
}
function uw(t, e, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttributeNS(t.space, t.local) : (s = this.getAttributeNS(t.space, t.local), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = e(r = s, a)));
  };
}
function cw(t, e) {
  var n = la(t), r = n === "transform" ? Ky : fp;
  return this.attrTween(t, typeof e == "function" ? (n.local ? uw : lw)(n, r, lu(this, "attr." + t, e)) : e == null ? (n.local ? iw : ow)(n) : (n.local ? aw : sw)(n, r, e));
}
function dw(t, e) {
  return function(n) {
    this.setAttribute(t, e.call(this, n));
  };
}
function hw(t, e) {
  return function(n) {
    this.setAttributeNS(t.space, t.local, e.call(this, n));
  };
}
function pw(t, e) {
  var n, r;
  function o() {
    var i = e.apply(this, arguments);
    return i !== r && (n = (r = i) && hw(t, i)), n;
  }
  return o._value = e, o;
}
function fw(t, e) {
  var n, r;
  function o() {
    var i = e.apply(this, arguments);
    return i !== r && (n = (r = i) && dw(t, i)), n;
  }
  return o._value = e, o;
}
function gw(t, e) {
  var n = "attr." + t;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (e == null) return this.tween(n, null);
  if (typeof e != "function") throw new Error();
  var r = la(t);
  return this.tween(n, (r.local ? pw : fw)(r, e));
}
function vw(t, e) {
  return function() {
    au(this, t).delay = +e.apply(this, arguments);
  };
}
function mw(t, e) {
  return e = +e, function() {
    au(this, t).delay = e;
  };
}
function yw(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? vw : mw)(e, t)) : Cn(this.node(), e).delay;
}
function ww(t, e) {
  return function() {
    Rn(this, t).duration = +e.apply(this, arguments);
  };
}
function bw(t, e) {
  return e = +e, function() {
    Rn(this, t).duration = e;
  };
}
function xw(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? ww : bw)(e, t)) : Cn(this.node(), e).duration;
}
function kw(t, e) {
  if (typeof e != "function") throw new Error();
  return function() {
    Rn(this, t).ease = e;
  };
}
function Cw(t) {
  var e = this._id;
  return arguments.length ? this.each(kw(e, t)) : Cn(this.node(), e).ease;
}
function $w(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    Rn(this, t).ease = n;
  };
}
function Sw(t) {
  if (typeof t != "function") throw new Error();
  return this.each($w(this._id, t));
}
function _w(t) {
  typeof t != "function" && (t = Zh(t));
  for (var e = this._groups, n = e.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = e[o], s = i.length, a = r[o] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && t.call(l, l.__data__, u, i) && a.push(l);
  return new or(r, this._parents, this._name, this._id);
}
function Ow(t) {
  if (t._id !== this._id) throw new Error();
  for (var e = this._groups, n = t._groups, r = e.length, o = n.length, i = Math.min(r, o), s = new Array(r), a = 0; a < i; ++a)
    for (var l = e[a], u = n[a], d = l.length, h = s[a] = new Array(d), p, v = 0; v < d; ++v)
      (p = l[v] || u[v]) && (h[v] = p);
  for (; a < r; ++a)
    s[a] = e[a];
  return new or(s, this._parents, this._name, this._id);
}
function Pw(t) {
  return (t + "").trim().split(/^|\s+/).every(function(e) {
    var n = e.indexOf(".");
    return n >= 0 && (e = e.slice(0, n)), !e || e === "start";
  });
}
function Ew(t, e, n) {
  var r, o, i = Pw(e) ? au : Rn;
  return function() {
    var s = i(this, t), a = s.on;
    a !== r && (o = (r = a).copy()).on(e, n), s.on = o;
  };
}
function Nw(t, e) {
  var n = this._id;
  return arguments.length < 2 ? Cn(this.node(), n).on.on(t) : this.each(Ew(n, t, e));
}
function Mw(t) {
  return function() {
    var e = this.parentNode;
    for (var n in this.__transition) if (+n !== t) return;
    e && e.removeChild(this);
  };
}
function zw() {
  return this.on("end.remove", Mw(this._id));
}
function Aw(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = nu(t));
  for (var r = this._groups, o = r.length, i = new Array(o), s = 0; s < o; ++s)
    for (var a = r[s], l = a.length, u = i[s] = new Array(l), d, h, p = 0; p < l; ++p)
      (d = a[p]) && (h = t.call(d, d.__data__, p, a)) && ("__data__" in d && (h.__data__ = d.__data__), u[p] = h, ca(u[p], e, n, p, u, Cn(d, n)));
  return new or(i, this._parents, e, n);
}
function Tw(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = Fh(t));
  for (var r = this._groups, o = r.length, i = [], s = [], a = 0; a < o; ++a)
    for (var l = r[a], u = l.length, d, h = 0; h < u; ++h)
      if (d = l[h]) {
        for (var p = t.call(d, d.__data__, h, l), v, m = Cn(d, n), y = 0, w = p.length; y < w; ++y)
          (v = p[y]) && ca(v, e, n, y, p, m);
        i.push(p), s.push(d);
      }
  return new or(i, s, e, n);
}
var Dw = xi.prototype.constructor;
function Vw() {
  return new Dw(this._groups, this._parents);
}
function Lw(t, e) {
  var n, r, o;
  return function() {
    var i = bo(this, t), s = (this.style.removeProperty(t), bo(this, t));
    return i === s ? null : i === n && s === r ? o : o = e(n = i, r = s);
  };
}
function gp(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Hw(t, e, n) {
  var r, o = n + "", i;
  return function() {
    var s = bo(this, t);
    return s === o ? null : s === r ? i : i = e(r = s, n);
  };
}
function Iw(t, e, n) {
  var r, o, i;
  return function() {
    var s = bo(this, t), a = n(this), l = a + "";
    return a == null && (l = a = (this.style.removeProperty(t), bo(this, t))), s === l ? null : s === r && l === o ? i : (o = l, i = e(r = s, a));
  };
}
function Bw(t, e) {
  var n, r, o, i = "style." + e, s = "end." + i, a;
  return function() {
    var l = Rn(this, t), u = l.on, d = l.value[i] == null ? a || (a = gp(e)) : void 0;
    (u !== n || o !== d) && (r = (n = u).copy()).on(s, o = d), l.on = r;
  };
}
function Rw(t, e, n) {
  var r = (t += "") == "transform" ? jy : fp;
  return e == null ? this.styleTween(t, Lw(t, r)).on("end.style." + t, gp(t)) : typeof e == "function" ? this.styleTween(t, Iw(t, r, lu(this, "style." + t, e))).each(Bw(this._id, t)) : this.styleTween(t, Hw(t, r, e), n).on("end.style." + t, null);
}
function jw(t, e, n) {
  return function(r) {
    this.style.setProperty(t, e.call(this, r), n);
  };
}
function Kw(t, e, n) {
  var r, o;
  function i() {
    var s = e.apply(this, arguments);
    return s !== o && (r = (o = s) && jw(t, s, n)), r;
  }
  return i._value = e, i;
}
function Fw(t, e, n) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (e == null) return this.tween(r, null);
  if (typeof e != "function") throw new Error();
  return this.tween(r, Kw(t, e, n ?? ""));
}
function Zw(t) {
  return function() {
    this.textContent = t;
  };
}
function Ww(t) {
  return function() {
    var e = t(this);
    this.textContent = e ?? "";
  };
}
function Xw(t) {
  return this.tween("text", typeof t == "function" ? Ww(lu(this, "text", t)) : Zw(t == null ? "" : t + ""));
}
function qw(t) {
  return function(e) {
    this.textContent = t.call(this, e);
  };
}
function Yw(t) {
  var e, n;
  function r() {
    var o = t.apply(this, arguments);
    return o !== n && (e = (n = o) && qw(o)), e;
  }
  return r._value = t, r;
}
function Gw(t) {
  var e = "text";
  if (arguments.length < 1) return (e = this.tween(e)) && e._value;
  if (t == null) return this.tween(e, null);
  if (typeof t != "function") throw new Error();
  return this.tween(e, Yw(t));
}
function Uw() {
  for (var t = this._name, e = this._id, n = vp(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, u = 0; u < a; ++u)
      if (l = s[u]) {
        var d = Cn(l, e);
        ca(l, t, n, u, s, {
          time: d.time + d.delay + d.duration,
          delay: 0,
          duration: d.duration,
          ease: d.ease
        });
      }
  return new or(r, this._parents, t, n);
}
function Jw() {
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
var Qw = 0;
function or(t, e, n, r) {
  this._groups = t, this._parents = e, this._name = n, this._id = r;
}
function vp() {
  return ++Qw;
}
var Kn = xi.prototype;
or.prototype = {
  constructor: or,
  select: Aw,
  selectAll: Tw,
  selectChild: Kn.selectChild,
  selectChildren: Kn.selectChildren,
  filter: _w,
  merge: Ow,
  selection: Vw,
  transition: Uw,
  call: Kn.call,
  nodes: Kn.nodes,
  node: Kn.node,
  size: Kn.size,
  empty: Kn.empty,
  each: Kn.each,
  on: Nw,
  attr: cw,
  attrTween: gw,
  style: Rw,
  styleTween: Fw,
  text: Xw,
  textTween: Gw,
  remove: zw,
  tween: rw,
  delay: yw,
  duration: xw,
  ease: Cw,
  easeVarying: Sw,
  end: Jw,
  [Symbol.iterator]: Kn[Symbol.iterator]
};
function eb(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var tb = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: eb
};
function nb(t, e) {
  for (var n; !(n = t.__transition) || !(n = n[e]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${e} not found`);
  return n;
}
function rb(t) {
  var e, n;
  t instanceof or ? (e = t._id, t = t._name) : (e = vp(), (n = tb).time = su(), t = t == null ? null : t + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && ca(l, t, e, u, s, n || nb(l, e));
  return new or(r, this._parents, t, e);
}
xi.prototype.interrupt = ew;
xi.prototype.transition = rb;
const ji = (t) => () => t;
function ob(t, {
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
function qn(t, e, n) {
  this.k = t, this.x = e, this.y = n;
}
qn.prototype = {
  constructor: qn,
  scale: function(t) {
    return t === 1 ? this : new qn(this.k * t, this.x, this.y);
  },
  translate: function(t, e) {
    return t === 0 & e === 0 ? this : new qn(this.k, this.x + this.k * t, this.y + this.k * e);
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
var da = new qn(1, 0, 0);
mp.prototype = qn.prototype;
function mp(t) {
  for (; !t.__zoom; ) if (!(t = t.parentNode)) return da;
  return t.__zoom;
}
function Ea(t) {
  t.stopImmediatePropagation();
}
function Ho(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function ib(t) {
  return (!t.ctrlKey || t.type === "wheel") && !t.button;
}
function sb() {
  var t = this;
  return t instanceof SVGElement ? (t = t.ownerSVGElement || t, t.hasAttribute("viewBox") ? (t = t.viewBox.baseVal, [[t.x, t.y], [t.x + t.width, t.y + t.height]]) : [[0, 0], [t.width.baseVal.value, t.height.baseVal.value]]) : [[0, 0], [t.clientWidth, t.clientHeight]];
}
function Ec() {
  return this.__zoom || da;
}
function ab(t) {
  return -t.deltaY * (t.deltaMode === 1 ? 0.05 : t.deltaMode ? 1 : 2e-3) * (t.ctrlKey ? 10 : 1);
}
function lb() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function ub(t, e, n) {
  var r = t.invertX(e[0][0]) - n[0][0], o = t.invertX(e[1][0]) - n[1][0], i = t.invertY(e[0][1]) - n[0][1], s = t.invertY(e[1][1]) - n[1][1];
  return t.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    s > i ? (i + s) / 2 : Math.min(0, i) || Math.max(0, s)
  );
}
function yp() {
  var t = ib, e = sb, n = ub, r = ab, o = lb, i = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], a = 250, l = rs, u = aa("start", "zoom", "end"), d, h, p, v = 500, m = 150, y = 0, w = 10;
  function b($) {
    $.property("__zoom", Ec).on("wheel.zoom", L, { passive: !1 }).on("mousedown.zoom", I).on("dblclick.zoom", D).filter(o).on("touchstart.zoom", N).on("touchmove.zoom", S).on("touchend.zoom touchcancel.zoom", T).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  b.transform = function($, P, M, j) {
    var q = $.selection ? $.selection() : $;
    q.property("__zoom", Ec), $ !== q ? x($, P, M, j) : q.interrupt().each(function() {
      E(this, arguments).event(j).start().zoom(null, typeof P == "function" ? P.apply(this, arguments) : P).end();
    });
  }, b.scaleBy = function($, P, M, j) {
    b.scaleTo($, function() {
      var q = this.__zoom.k, G = typeof P == "function" ? P.apply(this, arguments) : P;
      return q * G;
    }, M, j);
  }, b.scaleTo = function($, P, M, j) {
    b.transform($, function() {
      var q = e.apply(this, arguments), G = this.__zoom, A = M == null ? C(q) : typeof M == "function" ? M.apply(this, arguments) : M, Y = G.invert(A), ee = typeof P == "function" ? P.apply(this, arguments) : P;
      return n(O(k(G, ee), A, Y), q, s);
    }, M, j);
  }, b.translateBy = function($, P, M, j) {
    b.transform($, function() {
      return n(this.__zoom.translate(
        typeof P == "function" ? P.apply(this, arguments) : P,
        typeof M == "function" ? M.apply(this, arguments) : M
      ), e.apply(this, arguments), s);
    }, null, j);
  }, b.translateTo = function($, P, M, j, q) {
    b.transform($, function() {
      var G = e.apply(this, arguments), A = this.__zoom, Y = j == null ? C(G) : typeof j == "function" ? j.apply(this, arguments) : j;
      return n(da.translate(Y[0], Y[1]).scale(A.k).translate(
        typeof P == "function" ? -P.apply(this, arguments) : -P,
        typeof M == "function" ? -M.apply(this, arguments) : -M
      ), G, s);
    }, j, q);
  };
  function k($, P) {
    return P = Math.max(i[0], Math.min(i[1], P)), P === $.k ? $ : new qn(P, $.x, $.y);
  }
  function O($, P, M) {
    var j = P[0] - M[0] * $.k, q = P[1] - M[1] * $.k;
    return j === $.x && q === $.y ? $ : new qn($.k, j, q);
  }
  function C($) {
    return [(+$[0][0] + +$[1][0]) / 2, (+$[0][1] + +$[1][1]) / 2];
  }
  function x($, P, M, j) {
    $.on("start.zoom", function() {
      E(this, arguments).event(j).start();
    }).on("interrupt.zoom end.zoom", function() {
      E(this, arguments).event(j).end();
    }).tween("zoom", function() {
      var q = this, G = arguments, A = E(q, G).event(j), Y = e.apply(q, G), ee = M == null ? C(Y) : typeof M == "function" ? M.apply(q, G) : M, R = Math.max(Y[1][0] - Y[0][0], Y[1][1] - Y[0][1]), F = q.__zoom, W = typeof P == "function" ? P.apply(q, G) : P, J = l(F.invert(ee).concat(R / F.k), W.invert(ee).concat(R / W.k));
      return function(re) {
        if (re === 1) re = W;
        else {
          var H = J(re), te = R / H[2];
          re = new qn(te, ee[0] - H[0] * te, ee[1] - H[1] * te);
        }
        A.zoom(null, re);
      };
    });
  }
  function E($, P, M) {
    return !M && $.__zooming || new V($, P);
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
      var P = an(this.that).datum();
      u.call(
        $,
        this.that,
        new ob($, {
          sourceEvent: this.sourceEvent,
          target: b,
          transform: this.that.__zoom,
          dispatch: u
        }),
        P
      );
    }
  };
  function L($, ...P) {
    if (!t.apply(this, arguments)) return;
    var M = E(this, P).event($), j = this.__zoom, q = Math.max(i[0], Math.min(i[1], j.k * Math.pow(2, r.apply(this, arguments)))), G = hn($);
    if (M.wheel)
      (M.mouse[0][0] !== G[0] || M.mouse[0][1] !== G[1]) && (M.mouse[1] = j.invert(M.mouse[0] = G)), clearTimeout(M.wheel);
    else {
      if (j.k === q) return;
      M.mouse = [G, j.invert(G)], ss(this), M.start();
    }
    Ho($), M.wheel = setTimeout(A, m), M.zoom("mouse", n(O(k(j, q), M.mouse[0], M.mouse[1]), M.extent, s));
    function A() {
      M.wheel = null, M.end();
    }
  }
  function I($, ...P) {
    if (p || !t.apply(this, arguments)) return;
    var M = $.currentTarget, j = E(this, P, !0).event($), q = an($.view).on("mousemove.zoom", ee, !0).on("mouseup.zoom", R, !0), G = hn($, M), A = $.clientX, Y = $.clientY;
    tp($.view), Ea($), j.mouse = [G, this.__zoom.invert(G)], ss(this), j.start();
    function ee(F) {
      if (Ho(F), !j.moved) {
        var W = F.clientX - A, J = F.clientY - Y;
        j.moved = W * W + J * J > y;
      }
      j.event(F).zoom("mouse", n(O(j.that.__zoom, j.mouse[0] = hn(F, M), j.mouse[1]), j.extent, s));
    }
    function R(F) {
      q.on("mousemove.zoom mouseup.zoom", null), np(F.view, j.moved), Ho(F), j.event(F).end();
    }
  }
  function D($, ...P) {
    if (t.apply(this, arguments)) {
      var M = this.__zoom, j = hn($.changedTouches ? $.changedTouches[0] : $, this), q = M.invert(j), G = M.k * ($.shiftKey ? 0.5 : 2), A = n(O(k(M, G), j, q), e.apply(this, P), s);
      Ho($), a > 0 ? an(this).transition().duration(a).call(x, A, j, $) : an(this).call(b.transform, A, j, $);
    }
  }
  function N($, ...P) {
    if (t.apply(this, arguments)) {
      var M = $.touches, j = M.length, q = E(this, P, $.changedTouches.length === j).event($), G, A, Y, ee;
      for (Ea($), A = 0; A < j; ++A)
        Y = M[A], ee = hn(Y, this), ee = [ee, this.__zoom.invert(ee), Y.identifier], q.touch0 ? !q.touch1 && q.touch0[2] !== ee[2] && (q.touch1 = ee, q.taps = 0) : (q.touch0 = ee, G = !0, q.taps = 1 + !!d);
      d && (d = clearTimeout(d)), G && (q.taps < 2 && (h = ee[0], d = setTimeout(function() {
        d = null;
      }, v)), ss(this), q.start());
    }
  }
  function S($, ...P) {
    if (this.__zooming) {
      var M = E(this, P).event($), j = $.changedTouches, q = j.length, G, A, Y, ee;
      for (Ho($), G = 0; G < q; ++G)
        A = j[G], Y = hn(A, this), M.touch0 && M.touch0[2] === A.identifier ? M.touch0[0] = Y : M.touch1 && M.touch1[2] === A.identifier && (M.touch1[0] = Y);
      if (A = M.that.__zoom, M.touch1) {
        var R = M.touch0[0], F = M.touch0[1], W = M.touch1[0], J = M.touch1[1], re = (re = W[0] - R[0]) * re + (re = W[1] - R[1]) * re, H = (H = J[0] - F[0]) * H + (H = J[1] - F[1]) * H;
        A = k(A, Math.sqrt(re / H)), Y = [(R[0] + W[0]) / 2, (R[1] + W[1]) / 2], ee = [(F[0] + J[0]) / 2, (F[1] + J[1]) / 2];
      } else if (M.touch0) Y = M.touch0[0], ee = M.touch0[1];
      else return;
      M.zoom("touch", n(O(A, Y, ee), M.extent, s));
    }
  }
  function T($, ...P) {
    if (this.__zooming) {
      var M = E(this, P).event($), j = $.changedTouches, q = j.length, G, A;
      for (Ea($), p && clearTimeout(p), p = setTimeout(function() {
        p = null;
      }, v), G = 0; G < q; ++G)
        A = j[G], M.touch0 && M.touch0[2] === A.identifier ? delete M.touch0 : M.touch1 && M.touch1[2] === A.identifier && delete M.touch1;
      if (M.touch1 && !M.touch0 && (M.touch0 = M.touch1, delete M.touch1), M.touch0) M.touch0[1] = this.__zoom.invert(M.touch0[0]);
      else if (M.end(), M.taps === 2 && (A = hn(A, this), Math.hypot(h[0] - A[0], h[1] - A[1]) < w)) {
        var Y = an(this).on("dblclick.zoom");
        Y && Y.apply(this, arguments);
      }
    }
  }
  return b.wheelDelta = function($) {
    return arguments.length ? (r = typeof $ == "function" ? $ : ji(+$), b) : r;
  }, b.filter = function($) {
    return arguments.length ? (t = typeof $ == "function" ? $ : ji(!!$), b) : t;
  }, b.touchable = function($) {
    return arguments.length ? (o = typeof $ == "function" ? $ : ji(!!$), b) : o;
  }, b.extent = function($) {
    return arguments.length ? (e = typeof $ == "function" ? $ : ji([[+$[0][0], +$[0][1]], [+$[1][0], +$[1][1]]]), b) : e;
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
const ai = {
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
}, rl = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
], wp = ["Enter", " ", "Escape"], cb = {
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
var ko;
(function(t) {
  t.Strict = "strict", t.Loose = "loose";
})(ko || (ko = {}));
var Kr;
(function(t) {
  t.Free = "free", t.Vertical = "vertical", t.Horizontal = "horizontal";
})(Kr || (Kr = {}));
var _s;
(function(t) {
  t.Partial = "partial", t.Full = "full";
})(_s || (_s = {}));
const ol = {
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
var Xn;
(function(t) {
  t.Bezier = "default", t.Straight = "straight", t.Step = "step", t.SmoothStep = "smoothstep", t.SimpleBezier = "simplebezier";
})(Xn || (Xn = {}));
var li;
(function(t) {
  t.Arrow = "arrow", t.ArrowClosed = "arrowclosed";
})(li || (li = {}));
var _e;
(function(t) {
  t.Left = "left", t.Top = "top", t.Right = "right", t.Bottom = "bottom";
})(_e || (_e = {}));
const Nc = {
  [_e.Left]: _e.Right,
  [_e.Right]: _e.Left,
  [_e.Top]: _e.Bottom,
  [_e.Bottom]: _e.Top
};
function db(t, e) {
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
function hb(t) {
  return t === null ? null : t ? "valid" : "invalid";
}
const bp = (t) => "id" in t && "source" in t && "target" in t, pb = (t) => "id" in t && "position" in t && !("source" in t) && !("target" in t), uu = (t) => "id" in t && "internals" in t && !("source" in t) && !("target" in t), Ci = (t, e = [0, 0]) => {
  const { width: n, height: r } = Nr(t), o = t.origin ?? e, i = n * o[0], s = r * o[1];
  return {
    x: t.position.x - i,
    y: t.position.y - s
  };
}, fb = (t, e = { nodeOrigin: [0, 0] }) => {
  if (t.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = t.reduce((r, o) => {
    const i = typeof o == "string";
    let s = !e.nodeLookup && !i ? o : void 0;
    e.nodeLookup && (s = i ? e.nodeLookup.get(o) : uu(o) ? o : e.nodeLookup.get(o.id));
    const a = s ? Os(s, e.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return ha(r, a);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return pa(n);
}, $i = (t, e = {}) => {
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 }, r = !1;
  return t.forEach((o) => {
    (e.filter === void 0 || e.filter(o)) && (n = ha(n, Os(o)), r = !0);
  }), r ? pa(n) : { x: 0, y: 0, width: 0, height: 0 };
}, cu = (t, e, [n, r, o] = [0, 0, 1], i = !1, s = !1) => {
  const a = {
    ..._i(e, [n, r, o]),
    width: e.width / o,
    height: e.height / o
  }, l = [];
  for (const u of t.values()) {
    const { measured: d, selectable: h = !0, hidden: p = !1 } = u;
    if (s && !h || p)
      continue;
    const v = d.width ?? u.width ?? u.initialWidth ?? null, m = d.height ?? u.height ?? u.initialHeight ?? null, y = ui(a, $o(u)), w = (v ?? 0) * (m ?? 0), b = i && y > 0;
    (!u.internals.handleBounds || b || y >= w || u.dragging) && l.push(u);
  }
  return l;
}, gb = (t, e) => {
  const n = /* @__PURE__ */ new Set();
  return t.forEach((r) => {
    n.add(r.id);
  }), e.filter((r) => n.has(r.source) || n.has(r.target));
};
function vb(t, e) {
  const n = /* @__PURE__ */ new Map(), r = e?.nodes ? new Set(e.nodes.map((o) => o.id)) : null;
  return t.forEach((o) => {
    o.measured.width && o.measured.height && (e?.includeHiddenNodes || !o.hidden) && (!r || r.has(o.id)) && n.set(o.id, o);
  }), n;
}
async function mb({ nodes: t, width: e, height: n, panZoom: r, minZoom: o, maxZoom: i }, s) {
  if (t.size === 0)
    return Promise.resolve(!0);
  const a = vb(t, s), l = $i(a), u = du(l, e, n, s?.minZoom ?? o, s?.maxZoom ?? i, s?.padding ?? 0.1);
  return await r.setViewport(u, {
    duration: s?.duration,
    ease: s?.ease,
    interpolate: s?.interpolate
  }), Promise.resolve(!0);
}
function xp({ nodeId: t, nextPosition: e, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
  const s = n.get(t), a = s.parentId ? n.get(s.parentId) : void 0, { x: l, y: u } = a ? a.internals.positionAbsolute : { x: 0, y: 0 }, d = s.origin ?? r;
  let h = s.extent || o;
  if (s.extent === "parent" && !s.expandParent)
    if (!a)
      i?.("005", ai.error005());
    else {
      const v = a.measured.width, m = a.measured.height;
      v && m && (h = [
        [l, u],
        [l + v, u + m]
      ]);
    }
  else a && So(s.extent) && (h = [
    [s.extent[0][0] + l, s.extent[0][1] + u],
    [s.extent[1][0] + l, s.extent[1][1] + u]
  ]);
  const p = So(h) ? Gr(e, h, s.measured) : e;
  return (s.measured.width === void 0 || s.measured.height === void 0) && i?.("015", ai.error015()), {
    position: {
      x: p.x - l + (s.measured.width ?? 0) * d[0],
      y: p.y - u + (s.measured.height ?? 0) * d[1]
    },
    positionAbsolute: p
  };
}
async function yb({ nodesToRemove: t = [], edgesToRemove: e = [], nodes: n, edges: r, onBeforeDelete: o }) {
  const i = new Set(t.map((h) => h.id)), s = [];
  for (const h of n) {
    if (h.deletable === !1)
      continue;
    const p = i.has(h.id), v = !p && h.parentId && s.find((m) => m.id === h.parentId);
    (p || v) && s.push(h);
  }
  const a = new Set(e.map((h) => h.id)), l = r.filter((h) => h.deletable !== !1), u = gb(s, l);
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
const Co = (t, e = 0, n = 1) => Math.min(Math.max(t, e), n), Gr = (t = { x: 0, y: 0 }, e, n) => ({
  x: Co(t.x, e[0][0], e[1][0] - (n?.width ?? 0)),
  y: Co(t.y, e[0][1], e[1][1] - (n?.height ?? 0))
});
function kp(t, e, n) {
  const { width: r, height: o } = Nr(n), { x: i, y: s } = n.internals.positionAbsolute;
  return Gr(t, [
    [i, s],
    [i + r, s + o]
  ], e);
}
const zc = (t, e, n) => t < e ? Co(Math.abs(t - e), 1, e) / e : t > n ? -Co(Math.abs(t - n), 1, e) / e : 0, Cp = (t, e, n = 15, r = 40) => {
  const o = zc(t.x, r, e.width - r) * n, i = zc(t.y, r, e.height - r) * n;
  return [o, i];
}, ha = (t, e) => ({
  x: Math.min(t.x, e.x),
  y: Math.min(t.y, e.y),
  x2: Math.max(t.x2, e.x2),
  y2: Math.max(t.y2, e.y2)
}), il = ({ x: t, y: e, width: n, height: r }) => ({
  x: t,
  y: e,
  x2: t + n,
  y2: e + r
}), pa = ({ x: t, y: e, x2: n, y2: r }) => ({
  x: t,
  y: e,
  width: n - t,
  height: r - e
}), $o = (t, e = [0, 0]) => {
  const { x: n, y: r } = uu(t) ? t.internals.positionAbsolute : Ci(t, e);
  return {
    x: n,
    y: r,
    width: t.measured?.width ?? t.width ?? t.initialWidth ?? 0,
    height: t.measured?.height ?? t.height ?? t.initialHeight ?? 0
  };
}, Os = (t, e = [0, 0]) => {
  const { x: n, y: r } = uu(t) ? t.internals.positionAbsolute : Ci(t, e);
  return {
    x: n,
    y: r,
    x2: n + (t.measured?.width ?? t.width ?? t.initialWidth ?? 0),
    y2: r + (t.measured?.height ?? t.height ?? t.initialHeight ?? 0)
  };
}, $p = (t, e) => pa(ha(il(t), il(e))), ui = (t, e) => {
  const n = Math.max(0, Math.min(t.x + t.width, e.x + e.width) - Math.max(t.x, e.x)), r = Math.max(0, Math.min(t.y + t.height, e.y + e.height) - Math.max(t.y, e.y));
  return Math.ceil(n * r);
}, Ac = (t) => Yn(t.width) && Yn(t.height) && Yn(t.x) && Yn(t.y), Yn = (t) => !isNaN(t) && isFinite(t), wb = (t, e) => {
}, Si = (t, e = [1, 1]) => ({
  x: e[0] * Math.round(t.x / e[0]),
  y: e[1] * Math.round(t.y / e[1])
}), _i = ({ x: t, y: e }, [n, r, o], i = !1, s = [1, 1]) => {
  const a = {
    x: (t - n) / o,
    y: (e - r) / o
  };
  return i ? Si(a, s) : a;
}, Ps = ({ x: t, y: e }, [n, r, o]) => ({
  x: t * o + n,
  y: e * o + r
});
function lo(t, e) {
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
function bb(t, e, n) {
  if (typeof t == "string" || typeof t == "number") {
    const r = lo(t, n), o = lo(t, e);
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
    const r = lo(t.top ?? t.y ?? 0, n), o = lo(t.bottom ?? t.y ?? 0, n), i = lo(t.left ?? t.x ?? 0, e), s = lo(t.right ?? t.x ?? 0, e);
    return { top: r, right: s, bottom: o, left: i, x: i + s, y: r + o };
  }
  return { top: 0, right: 0, bottom: 0, left: 0, x: 0, y: 0 };
}
function xb(t, e, n, r, o, i) {
  const { x: s, y: a } = Ps(t, [e, n, r]), { x: l, y: u } = Ps({ x: t.x + t.width, y: t.y + t.height }, [e, n, r]), d = o - l, h = i - u;
  return {
    left: Math.floor(s),
    top: Math.floor(a),
    right: Math.floor(d),
    bottom: Math.floor(h)
  };
}
const du = (t, e, n, r, o, i) => {
  const s = bb(i, e, n), a = (e - s.x) / t.width, l = (n - s.y) / t.height, u = Math.min(a, l), d = Co(u, r, o), h = t.x + t.width / 2, p = t.y + t.height / 2, v = e / 2 - h * d, m = n / 2 - p * d, y = xb(t, v, m, d, e, n), w = {
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
}, Ir = () => typeof navigator < "u" && navigator?.userAgent?.indexOf("Mac") >= 0;
function So(t) {
  return t != null && t !== "parent";
}
function Nr(t) {
  return {
    width: t.measured?.width ?? t.width ?? t.initialWidth ?? 0,
    height: t.measured?.height ?? t.height ?? t.initialHeight ?? 0
  };
}
function Sp(t) {
  return (t.measured?.width ?? t.width ?? t.initialWidth) !== void 0 && (t.measured?.height ?? t.height ?? t.initialHeight) !== void 0;
}
function kb(t, e = { width: 0, height: 0 }, n, r, o) {
  const i = { ...t }, s = r.get(n);
  if (s) {
    const a = s.origin || o;
    i.x += s.internals.positionAbsolute.x - (e.width ?? 0) * a[0], i.y += s.internals.positionAbsolute.y - (e.height ?? 0) * a[1];
  }
  return i;
}
function Cb(t) {
  return { ...cb, ...t || {} };
}
function Na(t, { snapGrid: e = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: i, y: s } = gn(t), a = _i({ x: i - (o?.left ?? 0), y: s - (o?.top ?? 0) }, r), { x: l, y: u } = n ? Si(a, e) : a;
  return {
    xSnapped: l,
    ySnapped: u,
    ...a
  };
}
const _p = (t) => ({
  width: t.offsetWidth,
  height: t.offsetHeight
}), Op = (t) => t?.getRootNode?.() || window?.document, $b = ["INPUT", "SELECT", "TEXTAREA"];
function Pp(t) {
  const e = t.composedPath?.()?.[0] || t.target;
  return e?.nodeType !== 1 ? !1 : $b.includes(e.nodeName) || e.hasAttribute("contenteditable") || !!e.closest(".nokey");
}
const Ep = (t) => "clientX" in t, gn = (t, e) => {
  const n = Ep(t), r = n ? t.clientX : t.touches?.[0].clientX, o = n ? t.clientY : t.touches?.[0].clientY;
  return {
    x: r - (e?.left ?? 0),
    y: o - (e?.top ?? 0)
  };
}, Tc = (t, e, n, r, o) => {
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
      ..._p(s)
    };
  });
};
function Sb({ sourceX: t, sourceY: e, targetX: n, targetY: r, sourceControlX: o, sourceControlY: i, targetControlX: s, targetControlY: a }) {
  const l = t * 0.125 + o * 0.375 + s * 0.375 + n * 0.125, u = e * 0.125 + i * 0.375 + a * 0.375 + r * 0.125, d = Math.abs(l - t), h = Math.abs(u - e);
  return [l, u, d, h];
}
function Ki(t, e) {
  return t >= 0 ? 0.5 * t : e * 25 * Math.sqrt(-t);
}
function Dc({ pos: t, x1: e, y1: n, x2: r, y2: o, c: i }) {
  switch (t) {
    case _e.Left:
      return [e - Ki(e - r, i), n];
    case _e.Right:
      return [e + Ki(r - e, i), n];
    case _e.Top:
      return [e, n - Ki(n - o, i)];
    case _e.Bottom:
      return [e, n + Ki(o - n, i)];
  }
}
function Np({ sourceX: t, sourceY: e, sourcePosition: n = _e.Bottom, targetX: r, targetY: o, targetPosition: i = _e.Top, curvature: s = 0.25 }) {
  const [a, l] = Dc({
    pos: n,
    x1: t,
    y1: e,
    x2: r,
    y2: o,
    c: s
  }), [u, d] = Dc({
    pos: i,
    x1: r,
    y1: o,
    x2: t,
    y2: e,
    c: s
  }), [h, p, v, m] = Sb({
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
function Mp({ sourceX: t, sourceY: e, targetX: n, targetY: r }) {
  const o = Math.abs(n - t) / 2, i = n < t ? n + o : n - o, s = Math.abs(r - e) / 2, a = r < e ? r + s : r - s;
  return [i, a, o, s];
}
function _b({ sourceNode: t, targetNode: e, selected: n = !1, zIndex: r, elevateOnSelect: o = !1 }) {
  if (r !== void 0)
    return r;
  const i = o && n ? 1e3 : 0, s = Math.max(t.parentId || o && t.selected ? t.internals.z : 0, e.parentId || o && e.selected ? e.internals.z : 0);
  return i + s;
}
function Ob({ sourceNode: t, targetNode: e, width: n, height: r, transform: o }) {
  const i = ha(Os(t), Os(e));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const s = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return ui(s, pa(i)) > 0;
}
const Pb = ({ source: t, sourceHandle: e, target: n, targetHandle: r }) => `xy-edge__${t}${e || ""}-${n}${r || ""}`, Eb = (t, e) => e.some((n) => n.source === t.source && n.target === t.target && (n.sourceHandle === t.sourceHandle || !n.sourceHandle && !t.sourceHandle) && (n.targetHandle === t.targetHandle || !n.targetHandle && !t.targetHandle)), Nb = (t, e) => {
  if (!t.source || !t.target)
    return e;
  let n;
  return bp(t) ? n = { ...t } : n = {
    ...t,
    id: Pb(t)
  }, Eb(n, e) ? e : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, e.concat(n));
};
function zp({ sourceX: t, sourceY: e, targetX: n, targetY: r }) {
  const [o, i, s, a] = Mp({
    sourceX: t,
    sourceY: e,
    targetX: n,
    targetY: r
  });
  return [`M ${t},${e}L ${n},${r}`, o, i, s, a];
}
const Vc = {
  [_e.Left]: { x: -1, y: 0 },
  [_e.Right]: { x: 1, y: 0 },
  [_e.Top]: { x: 0, y: -1 },
  [_e.Bottom]: { x: 0, y: 1 }
}, Mb = ({ source: t, sourcePosition: e = _e.Bottom, target: n }) => e === _e.Left || e === _e.Right ? t.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : t.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, Lc = (t, e) => Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
function zb({ source: t, sourcePosition: e = _e.Bottom, target: n, targetPosition: r = _e.Top, center: o, offset: i, stepPosition: s }) {
  const a = Vc[e], l = Vc[r], u = { x: t.x + a.x * i, y: t.y + a.y * i }, d = { x: n.x + l.x * i, y: n.y + l.y * i }, h = Mb({
    source: u,
    sourcePosition: e,
    target: d
  }), p = h.x !== 0 ? "x" : "y", v = h[p];
  let m = [], y, w;
  const b = { x: 0, y: 0 }, k = { x: 0, y: 0 }, [, , O, C] = Mp({
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
      const N = Math.abs(t[p] - n[p]);
      if (N <= i) {
        const S = Math.min(i - 1, i - N);
        a[p] === v ? b[p] = (u[p] > t[p] ? -1 : 1) * S : k[p] = (d[p] > n[p] ? -1 : 1) * S;
      }
    }
    if (e !== r) {
      const N = p === "x" ? "y" : "x", S = a[p] === l[N], T = u[N] > d[N], $ = u[N] < d[N];
      (a[p] === 1 && (!S && T || S && $) || a[p] !== 1 && (!S && $ || S && T)) && (m = p === "x" ? x : E);
    }
    const V = { x: u.x + b.x, y: u.y + b.y }, L = { x: d.x + k.x, y: d.y + k.y }, I = Math.max(Math.abs(V.x - m[0].x), Math.abs(L.x - m[0].x)), D = Math.max(Math.abs(V.y - m[0].y), Math.abs(L.y - m[0].y));
    I >= D ? (y = (V.x + L.x) / 2, w = m[0].y) : (y = m[0].x, w = (V.y + L.y) / 2);
  }
  return [[
    t,
    { x: u.x + b.x, y: u.y + b.y },
    ...m,
    { x: d.x + k.x, y: d.y + k.y },
    n
  ], y, w, O, C];
}
function Ab(t, e, n, r) {
  const o = Math.min(Lc(t, e) / 2, Lc(e, n) / 2, r), { x: i, y: s } = e;
  if (t.x === i && i === n.x || t.y === s && s === n.y)
    return `L${i} ${s}`;
  if (t.y === s) {
    const u = t.x < n.x ? -1 : 1, d = t.y < n.y ? 1 : -1;
    return `L ${i + o * u},${s}Q ${i},${s} ${i},${s + o * d}`;
  }
  const a = t.x < n.x ? 1 : -1, l = t.y < n.y ? -1 : 1;
  return `L ${i},${s + o * l}Q ${i},${s} ${i + o * a},${s}`;
}
function hu({ sourceX: t, sourceY: e, sourcePosition: n = _e.Bottom, targetX: r, targetY: o, targetPosition: i = _e.Top, borderRadius: s = 5, centerX: a, centerY: l, offset: u = 20, stepPosition: d = 0.5 }) {
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
    return k > 0 && k < h.length - 1 ? O = Ab(h[k - 1], b, h[k + 1], s) : O = `${k === 0 ? "M" : "L"}${b.x} ${b.y}`, w += O, w;
  }, ""), p, v, m, y];
}
function Hc(t) {
  return t && !!(t.internals.handleBounds || t.handles?.length) && !!(t.measured.width || t.width || t.initialWidth);
}
function Tb(t) {
  const { sourceNode: e, targetNode: n } = t;
  if (!Hc(e) || !Hc(n))
    return null;
  const r = e.internals.handleBounds || Ic(e.handles), o = n.internals.handleBounds || Ic(n.handles), i = Bc(r?.source ?? [], t.sourceHandle), s = Bc(
    // when connection type is loose we can define all handles as sources and connect source -> source
    t.connectionMode === ko.Strict ? o?.target ?? [] : (o?.target ?? []).concat(o?.source ?? []),
    t.targetHandle
  );
  if (!i || !s)
    return t.onError?.("008", ai.error008(i ? "target" : "source", {
      id: t.id,
      sourceHandle: t.sourceHandle,
      targetHandle: t.targetHandle
    })), null;
  const a = i?.position || _e.Bottom, l = s?.position || _e.Top, u = ci(e, i, a), d = ci(n, s, l);
  return {
    sourceX: u.x,
    sourceY: u.y,
    targetX: d.x,
    targetY: d.y,
    sourcePosition: a,
    targetPosition: l
  };
}
function Ic(t) {
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
function ci(t, e, n = _e.Left, r = !1) {
  const o = (e?.x ?? 0) + t.internals.positionAbsolute.x, i = (e?.y ?? 0) + t.internals.positionAbsolute.y, { width: s, height: a } = e ?? Nr(t);
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
function Bc(t, e) {
  return t && (e ? t.find((n) => n.id === e) : t[0]) || null;
}
function sl(t, e) {
  return t ? typeof t == "string" ? t : `${e ? `${e}__` : ""}${Object.keys(t).sort().map((n) => `${n}=${t[n]}`).join("&")}` : "";
}
function Db(t, { id: e, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const i = /* @__PURE__ */ new Set();
  return t.reduce((s, a) => ([a.markerStart || r, a.markerEnd || o].forEach((l) => {
    if (l && typeof l == "object") {
      const u = sl(l, e);
      i.has(u) || (s.push({ id: u, color: l.color || n, ...l }), i.add(u));
    }
  }), s), []).sort((s, a) => s.id.localeCompare(a.id));
}
function Vb(t, e, n, r, o) {
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
const Ap = 1e3, Lb = 10, pu = {
  nodeOrigin: [0, 0],
  nodeExtent: rl,
  elevateNodesOnSelect: !0,
  defaults: {}
}, Hb = {
  ...pu,
  checkEquality: !0
};
function fu(t, e) {
  const n = { ...t };
  for (const r in e)
    e[r] !== void 0 && (n[r] = e[r]);
  return n;
}
function Ib(t, e, n) {
  const r = fu(pu, n);
  for (const o of t.values())
    if (o.parentId)
      gu(o, t, e, r);
    else {
      const i = Ci(o, r.nodeOrigin), s = So(o.extent) ? o.extent : r.nodeExtent, a = Gr(i, s, Nr(o));
      o.internals.positionAbsolute = a;
    }
}
function Bb(t, e) {
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
  const o = fu(Hb, r);
  let i = { i: -1 }, s = t.length > 0;
  const a = new Map(e), l = o?.elevateNodesOnSelect ? Ap : 0;
  e.clear(), n.clear();
  for (const u of t) {
    let d = a.get(u.id);
    if (o.checkEquality && u === d?.internals.userNode)
      e.set(u.id, d);
    else {
      const h = Ci(u, o.nodeOrigin), p = So(u.extent) ? u.extent : o.nodeExtent, v = Gr(h, p, Nr(u));
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
          handleBounds: Bb(u, d),
          z: Tp(u, l),
          userNode: u
        }
      }, e.set(u.id, d);
    }
    (d.measured === void 0 || d.measured.width === void 0 || d.measured.height === void 0) && !d.hidden && (s = !1), u.parentId && gu(d, e, n, r, i);
  }
  return s;
}
function jb(t, e) {
  if (!t.parentId)
    return;
  const n = e.get(t.parentId);
  n ? n.set(t.id, t) : e.set(t.parentId, /* @__PURE__ */ new Map([[t.id, t]]));
}
function gu(t, e, n, r, o) {
  const { elevateNodesOnSelect: i, nodeOrigin: s, nodeExtent: a } = fu(pu, r), l = t.parentId, u = e.get(l);
  if (!u) {
    console.warn(`Parent node ${l} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  jb(t, n), o && !u.parentId && u.internals.rootParentIndex === void 0 && (u.internals.rootParentIndex = ++o.i, u.internals.z = u.internals.z + o.i * Lb), o && u.internals.rootParentIndex !== void 0 && (o.i = u.internals.rootParentIndex);
  const d = i ? Ap : 0, { x: h, y: p, z: v } = Kb(t, u, s, a, d), { positionAbsolute: m } = t.internals, y = h !== m.x || p !== m.y;
  (y || v !== t.internals.z) && e.set(t.id, {
    ...t,
    internals: {
      ...t.internals,
      positionAbsolute: y ? { x: h, y: p } : m,
      z: v
    }
  });
}
function Tp(t, e) {
  return (Yn(t.zIndex) ? t.zIndex : 0) + (t.selected ? e : 0);
}
function Kb(t, e, n, r, o) {
  const { x: i, y: s } = e.internals.positionAbsolute, a = Nr(t), l = Ci(t, n), u = So(t.extent) ? Gr(l, t.extent, a) : l;
  let d = Gr({ x: i + u.x, y: s + u.y }, r, a);
  t.extent === "parent" && (d = kp(d, a, e));
  const h = Tp(t, o), p = e.internals.z ?? 0;
  return {
    x: d.x,
    y: d.y,
    z: p >= h ? p + 1 : h
  };
}
function Fb(t, e, n, r = [0, 0]) {
  const o = [], i = /* @__PURE__ */ new Map();
  for (const s of t) {
    const a = e.get(s.parentId);
    if (!a)
      continue;
    const l = i.get(s.parentId)?.expandedRect ?? $o(a), u = $p(l, s.rect);
    i.set(s.parentId, { expandedRect: u, parent: a });
  }
  return i.size > 0 && i.forEach(({ expandedRect: s, parent: a }, l) => {
    const u = a.internals.positionAbsolute, d = Nr(a), h = a.origin ?? r, p = s.x < u.x ? Math.round(Math.abs(u.x - s.x)) : 0, v = s.y < u.y ? Math.round(Math.abs(u.y - s.y)) : 0, m = Math.max(d.width, Math.round(s.width)), y = Math.max(d.height, Math.round(s.height)), w = (m - d.width) * h[0], b = (y - d.height) * h[1];
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
function Zb(t, e, n, r, o, i) {
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
    const m = _p(p.nodeElement), y = v.measured.width !== m.width || v.measured.height !== m.height;
    if (m.width && m.height && (y || !v.internals.handleBounds || p.force)) {
      const w = p.nodeElement.getBoundingClientRect(), b = So(v.extent) ? v.extent : i;
      let { positionAbsolute: k } = v.internals;
      v.parentId && v.extent === "parent" ? k = kp(k, m, e.get(v.parentId)) : b && (k = Gr(k, b, m));
      const O = {
        ...v,
        measured: m,
        internals: {
          ...v.internals,
          positionAbsolute: k,
          handleBounds: {
            source: Tc("source", p.nodeElement, w, d, v.id),
            target: Tc("target", p.nodeElement, w, d, v.id)
          }
        }
      };
      e.set(v.id, O), v.parentId && gu(O, e, n, { nodeOrigin: o }), a = !0, y && (l.push({
        id: v.id,
        type: "dimensions",
        dimensions: m
      }), v.expandParent && v.parentId && h.push({
        id: v.id,
        parentId: v.parentId,
        rect: $o(O, o)
      }));
    }
  }
  if (h.length > 0) {
    const p = Fb(h, e, n, o);
    l.push(...p);
  }
  return { changes: l, updatedInternals: a };
}
async function Wb({ delta: t, panZoom: e, transform: n, translateExtent: r, width: o, height: i }) {
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
function Rc(t, e, n, r, o, i) {
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
function Xb(t, e, n) {
  t.clear(), e.clear();
  for (const r of n) {
    const { source: o, target: i, sourceHandle: s = null, targetHandle: a = null } = r, l = { edgeId: r.id, source: o, target: i, sourceHandle: s, targetHandle: a }, u = `${o}-${s}--${i}-${a}`, d = `${i}-${a}--${o}-${s}`;
    Rc("source", l, d, t, o, s), Rc("target", l, u, t, i, a), e.set(r.id, r);
  }
}
function qb(t, e) {
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
function Dp(t, e) {
  if (!t.parentId)
    return !1;
  const n = e.get(t.parentId);
  return n ? n.selected ? !0 : Dp(n, e) : !1;
}
function jc(t, e, n) {
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
function Yb(t, e, n, r) {
  const o = /* @__PURE__ */ new Map();
  for (const [i, s] of t)
    if ((s.selected || s.id === r) && (!s.parentId || !Dp(s, t)) && (s.draggable || e && typeof s.draggable > "u")) {
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
function Ma({ nodeId: t, dragItems: e, nodeLookup: n, dragging: r = !0 }) {
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
function Gb({ dragItems: t, snapGrid: e, x: n, y: r }) {
  const o = t.values().next().value;
  if (!o)
    return null;
  const i = {
    x: n - o.distance.x,
    y: r - o.distance.y
  }, s = Si(i, e);
  return {
    x: s.x - i.x,
    y: s.y - i.y
  };
}
function Ub({ onNodeMouseDown: t, getStoreItems: e, onDragStart: n, onDrag: r, onDragStop: o }) {
  let i = { x: null, y: null }, s = 0, a = /* @__PURE__ */ new Map(), l = !1, u = { x: 0, y: 0 }, d = null, h = !1, p = null, v = !1, m = !1, y = null;
  function w({ noDragClassName: k, handleSelector: O, domNode: C, isSelectable: x, nodeId: E, nodeClickDistance: V = 0 }) {
    p = an(C);
    function L({ x: S, y: T }) {
      const { nodeLookup: $, nodeExtent: P, snapGrid: M, snapToGrid: j, nodeOrigin: q, onNodeDrag: G, onSelectionDrag: A, onError: Y, updateNodePositions: ee } = e();
      i = { x: S, y: T };
      let R = !1;
      const F = a.size > 1, W = F && P ? il($i(a)) : null, J = F && j ? Gb({
        dragItems: a,
        snapGrid: M,
        x: S,
        y: T
      }) : null;
      for (const [re, H] of a) {
        if (!$.has(re))
          continue;
        let te = { x: S - H.distance.x, y: T - H.distance.y };
        j && (te = J ? {
          x: Math.round(te.x + J.x),
          y: Math.round(te.y + J.y)
        } : Si(te, M));
        let ve = null;
        if (F && P && !H.extent && W) {
          const { positionAbsolute: ue } = H.internals, fe = ue.x - W.x + P[0][0], ye = ue.x + H.measured.width - W.x2 + P[1][0], Ce = ue.y - W.y + P[0][1], de = ue.y + H.measured.height - W.y2 + P[1][1];
          ve = [
            [fe, Ce],
            [ye, de]
          ];
        }
        const { position: he, positionAbsolute: oe } = xp({
          nodeId: re,
          nextPosition: te,
          nodeLookup: $,
          nodeExtent: ve || P,
          nodeOrigin: q,
          onError: Y
        });
        R = R || H.position.x !== he.x || H.position.y !== he.y, H.position = he, H.internals.positionAbsolute = oe;
      }
      if (m = m || R, !!R && (ee(a, !0), y && (r || G || !E && A))) {
        const [re, H] = Ma({
          nodeId: E,
          dragItems: a,
          nodeLookup: $
        });
        r?.(y, a, re, H), G?.(y, re, H), E || A?.(y, H);
      }
    }
    async function I() {
      if (!d)
        return;
      const { transform: S, panBy: T, autoPanSpeed: $, autoPanOnNodeDrag: P } = e();
      if (!P) {
        l = !1, cancelAnimationFrame(s);
        return;
      }
      const [M, j] = Cp(u, d, $);
      (M !== 0 || j !== 0) && (i.x = (i.x ?? 0) - M / S[2], i.y = (i.y ?? 0) - j / S[2], await T({ x: M, y: j }) && L(i)), s = requestAnimationFrame(I);
    }
    function D(S) {
      const { nodeLookup: T, multiSelectionActive: $, nodesDraggable: P, transform: M, snapGrid: j, snapToGrid: q, selectNodesOnDrag: G, onNodeDragStart: A, onSelectionDragStart: Y, unselectNodesAndEdges: ee } = e();
      h = !0, (!G || !x) && !$ && E && (T.get(E)?.selected || ee()), x && G && E && t?.(E);
      const R = Na(S.sourceEvent, { transform: M, snapGrid: j, snapToGrid: q, containerBounds: d });
      if (i = R, a = Yb(T, P, R, E), a.size > 0 && (n || A || !E && Y)) {
        const [F, W] = Ma({
          nodeId: E,
          dragItems: a,
          nodeLookup: T
        });
        n?.(S.sourceEvent, a, F, W), A?.(S.sourceEvent, F, W), E || Y?.(S.sourceEvent, W);
      }
    }
    const N = my().clickDistance(V).on("start", (S) => {
      const { domNode: T, nodeDragThreshold: $, transform: P, snapGrid: M, snapToGrid: j } = e();
      d = T?.getBoundingClientRect() || null, v = !1, m = !1, y = S.sourceEvent, $ === 0 && D(S), i = Na(S.sourceEvent, { transform: P, snapGrid: M, snapToGrid: j, containerBounds: d }), u = gn(S.sourceEvent, d);
    }).on("drag", (S) => {
      const { autoPanOnNodeDrag: T, transform: $, snapGrid: P, snapToGrid: M, nodeDragThreshold: j, nodeLookup: q } = e(), G = Na(S.sourceEvent, { transform: $, snapGrid: P, snapToGrid: M, containerBounds: d });
      if (y = S.sourceEvent, (S.sourceEvent.type === "touchmove" && S.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      E && !q.has(E)) && (v = !0), !v) {
        if (!l && T && h && (l = !0, I()), !h) {
          const A = gn(S.sourceEvent, d), Y = A.x - u.x, ee = A.y - u.y;
          Math.sqrt(Y * Y + ee * ee) > j && D(S);
        }
        (i.x !== G.xSnapped || i.y !== G.ySnapped) && a && h && (u = gn(S.sourceEvent, d), L(G));
      }
    }).on("end", (S) => {
      if (!(!h || v) && (l = !1, h = !1, cancelAnimationFrame(s), a.size > 0)) {
        const { nodeLookup: T, updateNodePositions: $, onNodeDragStop: P, onSelectionDragStop: M } = e();
        if (m && ($(a, !1), m = !1), o || P || !E && M) {
          const [j, q] = Ma({
            nodeId: E,
            dragItems: a,
            nodeLookup: T,
            dragging: !1
          });
          o?.(S.sourceEvent, a, j, q), P?.(S.sourceEvent, j, q), E || M?.(S.sourceEvent, q);
        }
      }
    }).filter((S) => {
      const T = S.target;
      return !S.button && (!k || !jc(T, `.${k}`, C)) && (!O || jc(T, O, C));
    });
    p.call(N);
  }
  function b() {
    p?.on(".drag", null);
  }
  return {
    update: w,
    destroy: b
  };
}
function Jb(t, e, n) {
  const r = [], o = {
    x: t.x - n,
    y: t.y - n,
    width: n * 2,
    height: n * 2
  };
  for (const i of e.values())
    ui(o, $o(i)) > 0 && r.push(i);
  return r;
}
const Qb = 250;
function e2(t, e, n, r) {
  let o = [], i = 1 / 0;
  const s = Jb(t, n, e + Qb);
  for (const a of s) {
    const l = [...a.internals.handleBounds?.source ?? [], ...a.internals.handleBounds?.target ?? []];
    for (const u of l) {
      if (r.nodeId === u.nodeId && r.type === u.type && r.id === u.id)
        continue;
      const { x: d, y: h } = ci(a, u, u.position, !0), p = Math.sqrt(Math.pow(d - t.x, 2) + Math.pow(h - t.y, 2));
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
function Vp(t, e, n, r, o, i = !1) {
  const s = r.get(t);
  if (!s)
    return null;
  const a = o === "strict" ? s.internals.handleBounds?.[e] : [...s.internals.handleBounds?.source ?? [], ...s.internals.handleBounds?.target ?? []], l = (n ? a?.find((u) => u.id === n) : a?.[0]) ?? null;
  return l && i ? { ...l, ...ci(s, l, l.position, !0) } : l;
}
function Lp(t, e) {
  return t || (e?.classList.contains("target") ? "target" : e?.classList.contains("source") ? "source" : null);
}
function t2(t, e) {
  let n = null;
  return e ? n = !0 : t && !e && (n = !1), n;
}
const Hp = () => !0;
function n2(t, { connectionMode: e, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: s, domNode: a, nodeLookup: l, lib: u, autoPanOnConnect: d, flowId: h, panBy: p, cancelConnection: v, onConnectStart: m, onConnect: y, onConnectEnd: w, isValidConnection: b = Hp, onReconnectEnd: k, updateConnection: O, getTransform: C, getFromHandle: x, autoPanSpeed: E, dragThreshold: V = 1, handleDomNode: L }) {
  const I = Op(t.target);
  let D = 0, N;
  const { x: S, y: T } = gn(t), $ = Lp(i, L), P = a?.getBoundingClientRect();
  let M = !1;
  if (!P || !$)
    return;
  const j = Vp(o, $, r, l, e);
  if (!j)
    return;
  let q = gn(t, P), G = !1, A = null, Y = !1, ee = null;
  function R() {
    if (!d || !P)
      return;
    const [ve, he] = Cp(q, P, E);
    p({ x: ve, y: he }), D = requestAnimationFrame(R);
  }
  const F = {
    ...j,
    nodeId: o,
    type: $,
    position: j.position
  }, W = l.get(o);
  let J = {
    inProgress: !0,
    isValid: null,
    from: ci(W, F, _e.Left, !0),
    fromHandle: F,
    fromPosition: F.position,
    fromNode: W,
    to: q,
    toHandle: null,
    toPosition: Nc[F.position],
    toNode: null,
    pointer: q
  };
  function re() {
    M = !0, O(J), m?.(t, { nodeId: o, handleId: r, handleType: $ });
  }
  V === 0 && re();
  function H(ve) {
    if (!M) {
      const { x: fe, y: ye } = gn(ve), Ce = fe - S, de = ye - T;
      if (!(Ce * Ce + de * de > V * V))
        return;
      re();
    }
    if (!x() || !F) {
      te(ve);
      return;
    }
    const he = C();
    q = gn(ve, P), N = e2(_i(q, he, !1, [1, 1]), n, l, F), G || (R(), G = !0);
    const oe = Ip(ve, {
      handle: N,
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
    ee = oe.handleDomNode, A = oe.connection, Y = t2(!!N, oe.isValid);
    const ue = {
      // from stays the same
      ...J,
      isValid: Y,
      to: oe.toHandle && Y ? Ps({ x: oe.toHandle.x, y: oe.toHandle.y }, he) : q,
      toHandle: oe.toHandle,
      toPosition: Y && oe.toHandle ? oe.toHandle.position : Nc[F.position],
      toNode: oe.toHandle ? l.get(oe.toHandle.nodeId) : null,
      pointer: q
    };
    O(ue), J = ue;
  }
  function te(ve) {
    if (!("touches" in ve && ve.touches.length > 0)) {
      if (M) {
        (N || ee) && A && Y && y?.(A);
        const { inProgress: he, ...oe } = J, ue = {
          ...oe,
          toPosition: J.toHandle ? J.toPosition : null
        };
        w?.(ve, ue), i && k?.(ve, ue);
      }
      v(), cancelAnimationFrame(D), G = !1, Y = !1, A = null, ee = null, I.removeEventListener("mousemove", H), I.removeEventListener("mouseup", te), I.removeEventListener("touchmove", H), I.removeEventListener("touchend", te);
    }
  }
  I.addEventListener("mousemove", H), I.addEventListener("mouseup", te), I.addEventListener("touchmove", H), I.addEventListener("touchend", te);
}
function Ip(t, { handle: e, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: s, lib: a, flowId: l, isValidConnection: u = Hp, nodeLookup: d }) {
  const h = i === "target", p = e ? s.querySelector(`.${a}-flow__handle[data-id="${l}-${e?.nodeId}-${e?.id}-${e?.type}"]`) : null, { x: v, y: m } = gn(t), y = s.elementFromPoint(v, m), w = y?.classList.contains(`${a}-flow__handle`) ? y : p, b = {
    handleDomNode: w,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (w) {
    const k = Lp(void 0, w), O = w.getAttribute("data-nodeid"), C = w.getAttribute("data-handleid"), x = w.classList.contains("connectable"), E = w.classList.contains("connectableend");
    if (!O || !k)
      return b;
    const V = {
      source: h ? O : r,
      sourceHandle: h ? C : o,
      target: h ? r : O,
      targetHandle: h ? o : C
    };
    b.connection = V;
    const L = x && E && (n === ko.Strict ? h && k === "source" || !h && k === "target" : O !== r || C !== o);
    b.isValid = L && u(V), b.toHandle = Vp(O, k, C, d, n, !0);
  }
  return b;
}
const Kc = {
  onPointerDown: n2,
  isValid: Ip
};
function r2({ domNode: t, panZoom: e, getTransform: n, getViewScale: r }) {
  const o = an(t);
  function i({ translateExtent: a, width: l, height: u, zoomStep: d = 1, pannable: h = !0, zoomable: p = !0, inversePan: v = !1 }) {
    const m = (O) => {
      if (O.sourceEvent.type !== "wheel" || !e)
        return;
      const C = n(), x = O.sourceEvent.ctrlKey && Ir() ? 10 : 1, E = -O.sourceEvent.deltaY * (O.sourceEvent.deltaMode === 1 ? 0.05 : O.sourceEvent.deltaMode ? 1 : 2e-3) * d, V = C[2] * Math.pow(2, E * x);
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
      const V = r() * Math.max(C[2], Math.log(C[2])) * (v ? -1 : 1), L = {
        x: C[0] - E[0] * V,
        y: C[1] - E[1] * V
      }, I = [
        [0, 0],
        [l, u]
      ];
      e.setViewportConstrained({
        x: L.x,
        y: L.y,
        zoom: C[2]
      }, I, a);
    }, k = yp().on("start", w).on("zoom", h ? b : null).on("zoom.wheel", p ? m : null);
    o.call(k, {});
  }
  function s() {
    o.on("zoom", null);
  }
  return {
    update: i,
    destroy: s,
    pointer: hn
  };
}
const fa = (t) => ({
  x: t.x,
  y: t.y,
  zoom: t.k
}), za = ({ x: t, y: e, zoom: n }) => da.translate(t, e).scale(n), ho = (t, e) => t.target.closest(`.${e}`), Bp = (t, e) => e === 2 && Array.isArray(t) && t.includes(2), o2 = (t) => ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2, Aa = (t, e = 0, n = o2, r = () => {
}) => {
  const o = typeof e == "number" && e > 0;
  return o || r(), o ? t.transition().duration(e).ease(n).on("end", r) : t;
}, Rp = (t) => {
  const e = t.ctrlKey && Ir() ? 10 : 1;
  return -t.deltaY * (t.deltaMode === 1 ? 0.05 : t.deltaMode ? 1 : 2e-3) * e;
};
function i2({ zoomPanValues: t, noWheelClassName: e, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: s, onPanZoomStart: a, onPanZoom: l, onPanZoomEnd: u }) {
  return (d) => {
    if (ho(d, e))
      return d.ctrlKey && d.preventDefault(), !1;
    d.preventDefault(), d.stopImmediatePropagation();
    const h = n.property("__zoom").k || 1;
    if (d.ctrlKey && s) {
      const w = hn(d), b = Rp(d), k = h * Math.pow(2, b);
      r.scaleTo(n, k, w, d);
      return;
    }
    const p = d.deltaMode === 1 ? 20 : 1;
    let v = o === Kr.Vertical ? 0 : d.deltaX * p, m = o === Kr.Horizontal ? 0 : d.deltaY * p;
    !Ir() && d.shiftKey && o !== Kr.Vertical && (v = d.deltaY * p, m = 0), r.translateBy(
      n,
      -(v / h) * i,
      -(m / h) * i,
      // @ts-ignore
      { internal: !0 }
    );
    const y = fa(n.property("__zoom"));
    clearTimeout(t.panScrollTimeout), t.isPanScrolling ? (l?.(d, y), t.panScrollTimeout = setTimeout(() => {
      u?.(d, y), t.isPanScrolling = !1;
    }, 150)) : (t.isPanScrolling = !0, a?.(d, y));
  };
}
function s2({ noWheelClassName: t, preventScrolling: e, d3ZoomHandler: n }) {
  return function(r, o) {
    const i = r.type === "wheel", s = !e && i && !r.ctrlKey, a = ho(r, t);
    if (r.ctrlKey && i && a && r.preventDefault(), s || a)
      return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function a2({ zoomPanValues: t, onDraggingChange: e, onPanZoomStart: n }) {
  return (r) => {
    if (r.sourceEvent?.internal)
      return;
    const o = fa(r.transform);
    t.mouseButton = r.sourceEvent?.button || 0, t.isZoomingOrPanning = !0, t.prevViewport = o, r.sourceEvent?.type === "mousedown" && e(!0), n && n?.(r.sourceEvent, o);
  };
}
function l2({ zoomPanValues: t, panOnDrag: e, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (i) => {
    t.usedRightMouseButton = !!(n && Bp(e, t.mouseButton ?? 0)), i.sourceEvent?.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !i.sourceEvent?.internal && o?.(i.sourceEvent, fa(i.transform));
  };
}
function u2({ zoomPanValues: t, panOnDrag: e, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (s) => {
    if (!s.sourceEvent?.internal && (t.isZoomingOrPanning = !1, i && Bp(e, t.mouseButton ?? 0) && !t.usedRightMouseButton && s.sourceEvent && i(s.sourceEvent), t.usedRightMouseButton = !1, r(!1), o)) {
      const a = fa(s.transform);
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
function c2({ zoomActivationKeyPressed: t, zoomOnScroll: e, zoomOnPinch: n, panOnDrag: r, panOnScroll: o, zoomOnDoubleClick: i, userSelectionActive: s, noWheelClassName: a, noPanClassName: l, lib: u, connectionInProgress: d }) {
  return (h) => {
    const p = t || e, v = n && h.ctrlKey, m = h.type === "wheel";
    if (h.button === 1 && h.type === "mousedown" && (ho(h, `${u}-flow__node`) || ho(h, `${u}-flow__edge`)))
      return !0;
    if (!r && !p && !o && !i && !n || s || d && !m || ho(h, a) && m || ho(h, l) && (!m || o && m && !t) || !n && h.ctrlKey && m)
      return !1;
    if (!n && h.type === "touchstart" && h.touches?.length > 1)
      return h.preventDefault(), !1;
    if (!p && !o && !v && m || !r && (h.type === "mousedown" || h.type === "touchstart") || Array.isArray(r) && !r.includes(h.button) && h.type === "mousedown")
      return !1;
    const y = Array.isArray(r) && r.includes(h.button) || !h.button || h.button <= 1;
    return (!h.ctrlKey || m) && y;
  };
}
function d2({ domNode: t, minZoom: e, maxZoom: n, translateExtent: r, viewport: o, onPanZoom: i, onPanZoomStart: s, onPanZoomEnd: a, onDraggingChange: l }) {
  const u = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: {},
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, d = t.getBoundingClientRect(), h = yp().scaleExtent([e, n]).translateExtent(r), p = an(t).call(h);
  k({
    x: o.x,
    y: o.y,
    zoom: Co(o.zoom, e, n)
  }, [
    [0, 0],
    [d.width, d.height]
  ], r);
  const v = p.on("wheel.zoom"), m = p.on("dblclick.zoom");
  h.wheelDelta(Rp);
  function y(N, S) {
    return p ? new Promise((T) => {
      h?.interpolate(S?.interpolate === "linear" ? Uo : rs).transform(Aa(p, S?.duration, S?.ease, () => T(!0)), N);
    }) : Promise.resolve(!1);
  }
  function w({ noWheelClassName: N, noPanClassName: S, onPaneContextMenu: T, userSelectionActive: $, panOnScroll: P, panOnDrag: M, panOnScrollMode: j, panOnScrollSpeed: q, preventScrolling: G, zoomOnPinch: A, zoomOnScroll: Y, zoomOnDoubleClick: ee, zoomActivationKeyPressed: R, lib: F, onTransformChange: W, connectionInProgress: J, paneClickDistance: re, selectionOnDrag: H }) {
    $ && !u.isZoomingOrPanning && b();
    const te = P && !R && !$;
    h.clickDistance(H ? 1 / 0 : !Yn(re) || re < 0 ? 0 : re);
    const ve = te ? i2({
      zoomPanValues: u,
      noWheelClassName: N,
      d3Selection: p,
      d3Zoom: h,
      panOnScrollMode: j,
      panOnScrollSpeed: q,
      zoomOnPinch: A,
      onPanZoomStart: s,
      onPanZoom: i,
      onPanZoomEnd: a
    }) : s2({
      noWheelClassName: N,
      preventScrolling: G,
      d3ZoomHandler: v
    });
    if (p.on("wheel.zoom", ve, { passive: !1 }), !$) {
      const oe = a2({
        zoomPanValues: u,
        onDraggingChange: l,
        onPanZoomStart: s
      });
      h.on("start", oe);
      const ue = l2({
        zoomPanValues: u,
        panOnDrag: M,
        onPaneContextMenu: !!T,
        onPanZoom: i,
        onTransformChange: W
      });
      h.on("zoom", ue);
      const fe = u2({
        zoomPanValues: u,
        panOnDrag: M,
        panOnScroll: P,
        onPaneContextMenu: T,
        onPanZoomEnd: a,
        onDraggingChange: l
      });
      h.on("end", fe);
    }
    const he = c2({
      zoomActivationKeyPressed: R,
      panOnDrag: M,
      zoomOnScroll: Y,
      panOnScroll: P,
      zoomOnDoubleClick: ee,
      zoomOnPinch: A,
      userSelectionActive: $,
      noPanClassName: S,
      noWheelClassName: N,
      lib: F,
      connectionInProgress: J
    });
    h.filter(he), ee ? p.on("dblclick.zoom", m) : p.on("dblclick.zoom", null);
  }
  function b() {
    h.on("zoom", null);
  }
  async function k(N, S, T) {
    const $ = za(N), P = h?.constrain()($, S, T);
    return P && await y(P), new Promise((M) => M(P));
  }
  async function O(N, S) {
    const T = za(N);
    return await y(T, S), new Promise(($) => $(T));
  }
  function C(N) {
    if (p) {
      const S = za(N), T = p.property("__zoom");
      (T.k !== N.zoom || T.x !== N.x || T.y !== N.y) && h?.transform(p, S, null, { sync: !0 });
    }
  }
  function x() {
    const N = p ? mp(p.node()) : { x: 0, y: 0, k: 1 };
    return { x: N.x, y: N.y, zoom: N.k };
  }
  function E(N, S) {
    return p ? new Promise((T) => {
      h?.interpolate(S?.interpolate === "linear" ? Uo : rs).scaleTo(Aa(p, S?.duration, S?.ease, () => T(!0)), N);
    }) : Promise.resolve(!1);
  }
  function V(N, S) {
    return p ? new Promise((T) => {
      h?.interpolate(S?.interpolate === "linear" ? Uo : rs).scaleBy(Aa(p, S?.duration, S?.ease, () => T(!0)), N);
    }) : Promise.resolve(!1);
  }
  function L(N) {
    h?.scaleExtent(N);
  }
  function I(N) {
    h?.translateExtent(N);
  }
  function D(N) {
    const S = !Yn(N) || N < 0 ? 0 : N;
    h?.clickDistance(S);
  }
  return {
    update: w,
    destroy: b,
    setViewport: O,
    setViewportConstrained: k,
    getViewport: x,
    scaleTo: E,
    scaleBy: V,
    setScaleExtent: L,
    setTranslateExtent: I,
    syncViewport: C,
    setClickDistance: D
  };
}
var Fc;
(function(t) {
  t.Line = "line", t.Handle = "handle";
})(Fc || (Fc = {}));
var h2 = /* @__PURE__ */ ne("<div><!></div>");
function Cr(t, e) {
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
  const y = wn("svelteflow__node_id"), w = wn("svelteflow__node_connectable");
  let b = /* @__PURE__ */ _(() => r() === "target"), k = /* @__PURE__ */ _(() => a() !== void 0 ? a() : w.value), O = $n(), C = /* @__PURE__ */ _(() => O.ariaLabelConfig), x = null;
  Ft(() => {
    if (h() || p()) {
      O.edges;
      let A = O.connectionLookup.get(`${y}-${r()}${n() ? `-${n()}` : ""}`);
      if (x && !db(A, x)) {
        const Y = A ?? /* @__PURE__ */ new Map();
        Mc(x, Y, p()), Mc(Y, x, h());
      }
      x = new Map(A);
    }
  });
  let E = /* @__PURE__ */ _(() => {
    if (!O.connection.inProgress)
      return [!1, !1, !1, !1, null];
    const { fromHandle: A, toHandle: Y, isValid: ee } = O.connection, R = A && A.nodeId === y && A.type === r() && A.id === n(), F = Y && Y.nodeId === y && Y.type === r() && Y.id === n(), W = O.connectionMode === ko.Strict ? A?.type !== r() : y !== A?.nodeId || n() !== A?.id;
    return [
      !0,
      R,
      F,
      W,
      F && ee
    ];
  }), V = /* @__PURE__ */ _(() => Po(c(E), 5)), L = /* @__PURE__ */ _(() => c(V)[0]), I = /* @__PURE__ */ _(() => c(V)[1]), D = /* @__PURE__ */ _(() => c(V)[2]), N = /* @__PURE__ */ _(() => c(V)[3]), S = /* @__PURE__ */ _(() => c(V)[4]);
  function T(A) {
    const Y = O.onbeforeconnect ? O.onbeforeconnect(A) : A;
    Y && (O.addEdge(Y), O.onconnect?.(A));
  }
  function $(A) {
    const Y = Ep(A);
    A.currentTarget && (Y && A.button === 0 || !Y) && Kc.onPointerDown(A, {
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
      onConnect: T,
      onConnectStart: (ee, R) => {
        O.onconnectstart?.(ee, {
          nodeId: R.nodeId,
          handleId: R.handleId,
          handleType: R.handleType
        });
      },
      onConnectEnd: (ee, R) => {
        O.onconnectend?.(ee, R);
      },
      getTransform: () => [O.viewport.x, O.viewport.y, O.viewport.zoom],
      getFromHandle: () => O.connection.fromHandle,
      dragThreshold: O.connectionDragThreshold,
      handleDomNode: A.currentTarget
    });
  }
  function P(A) {
    if (!y || !O.clickConnectStartHandle && !l())
      return;
    if (!O.clickConnectStartHandle) {
      O.onclickconnectstart?.(A, { nodeId: y, handleId: n(), handleType: r() }), O.clickConnectStartHandle = { nodeId: y, type: r(), id: n() };
      return;
    }
    const Y = Op(A.target), ee = d() ?? O.isValidConnection, { connectionMode: R, clickConnectStartHandle: F, flowId: W, nodeLookup: J } = O, { connection: re, isValid: H } = Kc.isValid(A, {
      handle: { nodeId: y, id: n(), type: r() },
      connectionMode: R,
      fromNodeId: F.nodeId,
      fromHandleId: F.id ?? null,
      fromType: F.type,
      isValidConnection: ee,
      flowId: W,
      doc: Y,
      lib: "svelte",
      nodeLookup: J
    });
    H && re && T(re);
    const te = structuredClone(Fl(O.connection));
    delete te.inProgress, te.toPosition = te.toHandle ? te.toHandle.position : null, O.onclickconnectend?.(A, te), O.clickConnectStartHandle = null;
  }
  var M = {
    get id() {
      return n();
    },
    set id(A = null) {
      n(A), f();
    },
    get type() {
      return r();
    },
    set type(A = "source") {
      r(A), f();
    },
    get position() {
      return o();
    },
    set position(A = _e.Top) {
      o(A), f();
    },
    get style() {
      return i();
    },
    set style(A) {
      i(A), f();
    },
    get class() {
      return s();
    },
    set class(A) {
      s(A), f();
    },
    get isConnectable() {
      return a();
    },
    set isConnectable(A) {
      a(A), f();
    },
    get isConnectableStart() {
      return l();
    },
    set isConnectableStart(A = !0) {
      l(A), f();
    },
    get isConnectableEnd() {
      return u();
    },
    set isConnectableEnd(A = !0) {
      u(A), f();
    },
    get isValidConnection() {
      return d();
    },
    set isValidConnection(A) {
      d(A), f();
    },
    get onconnect() {
      return h();
    },
    set onconnect(A) {
      h(A), f();
    },
    get ondisconnect() {
      return p();
    },
    set ondisconnect(A) {
      p(A), f();
    },
    get children() {
      return v();
    },
    set children(A) {
      v(A), f();
    }
  }, j = h2(), q = () => {
  };
  Ue(j, () => ({
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
    onmousedown: $,
    ontouchstart: $,
    onclick: O.clickConnect ? P : void 0,
    onkeypress: q,
    style: i(),
    role: "button",
    "aria-label": c(C)["handle.ariaLabel"],
    tabindex: "-1",
    ...m,
    [vr]: {
      valid: c(S),
      connectingto: c(D),
      connectingfrom: c(I),
      source: !c(b),
      target: c(b),
      connectablestart: l(),
      connectableend: u(),
      connectable: c(k),
      connectionindicator: c(k) && (!c(L) || c(N)) && (c(L) || O.clickConnectStartHandle ? u() : l())
    }
  }));
  var G = X(j);
  return Pe(G, () => v() ?? je), Z(j), z(t, j), le(M);
}
ie(
  Cr,
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
var p2 = /* @__PURE__ */ ne("<!> <!>", 1);
function vu(t, e) {
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
  }, s = p2(), a = U(s);
  Cr(a, {
    type: "target",
    get position() {
      return r();
    }
  });
  var l = B(a), u = B(l);
  return Cr(u, {
    type: "source",
    get position() {
      return o();
    }
  }), Ee(() => rt(l, ` ${n()?.label ?? ""} `)), z(t, s), le(i);
}
ie(vu, { data: {}, targetPosition: {}, sourcePosition: {} }, [], [], !0);
var f2 = /* @__PURE__ */ ne(" <!>", 1);
function jp(t, e) {
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
  var i = f2(), s = U(i), a = B(s);
  return Cr(a, {
    type: "source",
    get position() {
      return r();
    }
  }), Ee(() => rt(s, `${n()?.label ?? ""} `)), z(t, i), le(o);
}
ie(jp, { data: {}, sourcePosition: {} }, [], [], !0);
var g2 = /* @__PURE__ */ ne(" <!>", 1);
function Kp(t, e) {
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
  var i = g2(), s = U(i), a = B(s);
  return Cr(a, {
    type: "target",
    get position() {
      return r();
    }
  }), Ee(() => rt(s, `${n()?.label ?? ""} `)), z(t, i), le(o);
}
ie(Kp, { data: {}, targetPosition: {} }, [], [], !0);
function Fp(t, e) {
}
ie(Fp, {}, [], [], !0);
function Ta(t, e, n) {
  if (!n || !e)
    return;
  const r = n === "root" ? e : e.querySelector(`.svelte-flow__${n}`);
  r && r.appendChild(t);
}
function Zp(t, e) {
  const n = /* @__PURE__ */ _($n), r = /* @__PURE__ */ _(() => c(n).domNode);
  let o;
  return c(r) ? Ta(t, c(r), e) : o = eo(() => {
    Ie(() => {
      Ta(t, c(r), e), o?.();
    });
  }), {
    async update(i) {
      Ta(t, c(r), i);
    },
    destroy() {
      t.parentNode && t.parentNode.removeChild(t), o?.();
    }
  };
}
function Wp() {
  let t = /* @__PURE__ */ me(typeof window > "u");
  if (c(t)) {
    const e = eo(() => {
      Ie(() => {
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
const Zc = (t) => pb(t), v2 = (t) => bp(t);
function Ln(t) {
  return t === void 0 ? void 0 : `${t}px`;
}
const Es = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
};
var m2 = /* @__PURE__ */ ne("<div><!></div>");
const y2 = {
  hash: "svelte-herprs",
  code: ".transparent.svelte-herprs {background:transparent;}"
};
function Xp(t, e) {
  ae(e, !0), Je(t, y2);
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
  const h = $n(), p = wn("svelteflow__edge_id");
  if (!p)
    throw new Error("EdgeLabel must be used within an edge");
  let v = /* @__PURE__ */ _(() => h.visible.edges.get(p)?.zIndex);
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
  }, y = m2(), w = () => {
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
      [En]: k
    }),
    [
      () => ({
        display: Wp().value ? "none" : void 0,
        cursor: s() ? "pointer" : void 0,
        transform: `translate(-50%, -50%) translate(${n() ?? ""}px,${r() ?? ""}px)`,
        "pointer-events": "all",
        width: Ln(o()),
        height: Ln(i()),
        "z-index": c(v)
      })
    ],
    void 0,
    void 0,
    "svelte-herprs"
  );
  var b = X(y);
  return Pe(b, () => u() ?? je), Z(y), Tt(y, (k, O) => Zp?.(k, O), () => "edge-labels"), z(t, y), le(m);
}
ie(
  Xp,
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
var w2 = /* @__PURE__ */ ke("<path></path>"), b2 = /* @__PURE__ */ ke('<path fill="none"></path><!><!>', 1);
function Oi(t, e) {
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
  }, y = b2(), w = U(y), b = B(w);
  {
    var k = (x) => {
      var E = w2();
      Ue(E, () => ({
        d: r(),
        "stroke-opacity": 0,
        "stroke-width": h(),
        fill: "none",
        class: "svelte-flow__edge-interaction",
        ...v
      })), z(x, E);
    };
    se(b, (x) => {
      h() > 0 && x(k);
    });
  }
  var O = B(b);
  {
    var C = (x) => {
      Xp(x, {
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
          var L = Ae();
          Ee(() => rt(L, o())), z(E, L);
        },
        $$slots: { default: !0 }
      });
    };
    se(O, (x) => {
      o() && x(C);
    });
  }
  return Ee(() => {
    Oe(w, "id", n()), Oe(w, "d", r()), Yt(w, 0, dr(["svelte-flow__edge-path", p()])), Oe(w, "marker-start", l()), Oe(w, "marker-end", u()), Nt(w, d());
  }), z(t, y), le(m);
}
ie(
  Oi,
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
function mu(t, e) {
  ae(e, !0);
  let n = g(e, "id", 7), r = g(e, "interactionWidth", 7), o = g(e, "label", 7), i = g(e, "labelStyle", 7), s = g(e, "markerEnd", 7), a = g(e, "markerStart", 7), l = g(e, "pathOptions", 7), u = g(e, "sourcePosition", 7), d = g(e, "sourceX", 7), h = g(e, "sourceY", 7), p = g(e, "style", 7), v = g(e, "targetPosition", 7), m = g(e, "targetX", 7), y = g(e, "targetY", 7), w = /* @__PURE__ */ _(() => Np({
    sourceX: d(),
    sourceY: h(),
    targetX: m(),
    targetY: y(),
    sourcePosition: u(),
    targetPosition: v(),
    curvature: l()?.curvature
  })), b = /* @__PURE__ */ _(() => Po(c(w), 3)), k = /* @__PURE__ */ _(() => c(b)[0]), O = /* @__PURE__ */ _(() => c(b)[1]), C = /* @__PURE__ */ _(() => c(b)[2]);
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
  return Oi(t, {
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
  mu,
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
function qp(t, e) {
  ae(e, !0);
  let n = g(e, "interactionWidth", 7), r = g(e, "label", 7), o = g(e, "labelStyle", 7), i = g(e, "style", 7), s = g(e, "markerEnd", 7), a = g(e, "markerStart", 7), l = g(e, "sourcePosition", 7), u = g(e, "sourceX", 7), d = g(e, "sourceY", 7), h = g(e, "targetPosition", 7), p = g(e, "targetX", 7), v = g(e, "targetY", 7), m = /* @__PURE__ */ _(() => hu({
    sourceX: u(),
    sourceY: d(),
    targetX: p(),
    targetY: v(),
    sourcePosition: l(),
    targetPosition: h()
  })), y = /* @__PURE__ */ _(() => Po(c(m), 3)), w = /* @__PURE__ */ _(() => c(y)[0]), b = /* @__PURE__ */ _(() => c(y)[1]), k = /* @__PURE__ */ _(() => c(y)[2]);
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
  return Oi(t, {
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
  qp,
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
function Yp(t, e) {
  ae(e, !0);
  let n = g(e, "sourceX", 7), r = g(e, "sourceY", 7), o = g(e, "targetX", 7), i = g(e, "targetY", 7), s = g(e, "label", 7), a = g(e, "labelStyle", 7), l = g(e, "markerStart", 7), u = g(e, "markerEnd", 7), d = g(e, "interactionWidth", 7), h = g(e, "style", 7), p = /* @__PURE__ */ _(() => zp({
    sourceX: n(),
    sourceY: r(),
    targetX: o(),
    targetY: i()
  })), v = /* @__PURE__ */ _(() => Po(c(p), 3)), m = /* @__PURE__ */ _(() => c(v)[0]), y = /* @__PURE__ */ _(() => c(v)[1]), w = /* @__PURE__ */ _(() => c(v)[2]);
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
  return Oi(t, {
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
  Yp,
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
function Gp(t, e) {
  ae(e, !0);
  let n = g(e, "sourceX", 7), r = g(e, "sourceY", 7), o = g(e, "sourcePosition", 7), i = g(e, "targetX", 7), s = g(e, "targetY", 7), a = g(e, "targetPosition", 7), l = g(e, "label", 7), u = g(e, "labelStyle", 7), d = g(e, "markerStart", 7), h = g(e, "markerEnd", 7), p = g(e, "interactionWidth", 7), v = g(e, "style", 7), m = /* @__PURE__ */ _(() => hu({
    sourceX: n(),
    sourceY: r(),
    targetX: i(),
    targetY: s(),
    sourcePosition: o(),
    targetPosition: a(),
    borderRadius: 0
  })), y = /* @__PURE__ */ _(() => Po(c(m), 3)), w = /* @__PURE__ */ _(() => c(y)[0]), b = /* @__PURE__ */ _(() => c(y)[1]), k = /* @__PURE__ */ _(() => c(y)[2]);
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
  return Oi(t, {
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
  Gp,
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
class x2 extends Map {
  /** @type {Map<K, Source<number>>} */
  #e = /* @__PURE__ */ new Map();
  #t = /* @__PURE__ */ me(0);
  #n = /* @__PURE__ */ me(0);
  #r = tr || -1;
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
    return tr === this.#r ? /* @__PURE__ */ me(e) : rr(e);
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
      o = this.#o(0), r.set(e, o), K(this.#n, super.size), Pn(a);
    else if (i !== n) {
      Pn(o);
      var l = a.reactions === null ? null : new Set(a.reactions), u = l === null || !o.reactions?.every(
        (d) => (
          /** @type {NonNullable<typeof v_reactions>} */
          l.has(d)
        )
      );
      u && Pn(a);
    }
    return s;
  }
  /** @param {K} key */
  delete(e) {
    var n = this.#e, r = n.get(e), o = super.delete(e);
    return r !== void 0 && (n.delete(e), K(this.#n, super.size), K(r, -1), Pn(this.#t)), o;
  }
  clear() {
    if (super.size !== 0) {
      super.clear();
      var e = this.#e;
      K(this.#n, 0);
      for (var n of e.values())
        K(n, -1);
      Pn(this.#t), e.clear();
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
class k2 {
  #e;
  #t;
  /**
   *
   * @param {() => T} fn
   * @param {(update: () => void) => void} onsubscribe
   */
  constructor(e, n) {
    this.#e = e, this.#t = Qr(n);
  }
  get current() {
    return this.#t(), this.#e();
  }
}
const C2 = /\(.+\)/, $2 = /* @__PURE__ */ new Set(["all", "print", "screen", "and", "or", "not", "only"]);
class Up extends k2 {
  /**
   * @param {string} query A media query string
   * @param {boolean} [fallback] Fallback value for the server
   */
  constructor(e, n) {
    let r = C2.test(e) || // we need to use `some` here because technically this `window.matchMedia('random,screen')` still returns true
    e.split(/[\s,]+/).some((i) => $2.has(i.trim())) ? e : `(${e})`;
    const o = window.matchMedia(r);
    super(
      () => o.matches,
      (i) => ht(o, "change", i)
    );
  }
}
function S2(t, e, n, r) {
  const o = /* @__PURE__ */ new Map();
  return cu(t, { x: 0, y: 0, width: n, height: r }, e, !0).forEach((i) => {
    o.set(i.id, i);
  }), o;
}
function Wc(t) {
  const { edges: e, defaultEdgeOptions: n, nodeLookup: r, previousEdges: o, connectionMode: i, onerror: s, onlyRenderVisible: a, elevateEdgesOnSelect: l } = t, u = /* @__PURE__ */ new Map();
  for (const d of e) {
    const h = r.get(d.source), p = r.get(d.target);
    if (!h || !p)
      continue;
    if (a) {
      const { visibleNodes: y, transform: w, width: b, height: k } = t;
      if (Ob({
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
      zIndex: _b({
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
const Jp = {
  input: jp,
  output: Kp,
  default: vu,
  group: Fp
}, Qp = {
  straight: Yp,
  smoothstep: qp,
  default: mu,
  step: Gp
};
function _2(t, e, n, r, o, i) {
  if (e && !n && r && o) {
    const s = $i(i, {
      filter: (a) => !!((a.width || a.initialWidth) && (a.height || a.initialHeight))
    });
    return du(s, r, o, 0.5, 2, 0.1);
  } else
    return n ?? { x: 0, y: 0, zoom: 1 };
}
function O2(t) {
  class e {
    #e = /* @__PURE__ */ _(() => t.props.id ?? "1");
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
    #i = /* @__PURE__ */ _(() => {
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
    #a = /* @__PURE__ */ _(() => this.panZoom !== null);
    get viewportInitialized() {
      return c(this.#a);
    }
    set viewportInitialized(r) {
      K(this.#a, r);
    }
    #s = /* @__PURE__ */ _(() => (Xb(this.connectionLookup, this.edgeLookup, t.edges), t.edges));
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
    #l = /* @__PURE__ */ _(() => {
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
    #u = /* @__PURE__ */ _(() => {
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
    #c = /* @__PURE__ */ _(() => {
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
        h = S2(s, b, y, w), p = Wc({
          ...v,
          onlyRenderVisible: !0,
          visibleNodes: h,
          transform: b,
          width: y,
          height: w
        });
      } else
        h = this.nodeLookup, p = Wc(v);
      return { nodes: h, edges: p };
    });
    get visible() {
      return c(this.#c);
    }
    set visible(r) {
      K(this.#c, r);
    }
    #d = /* @__PURE__ */ _(() => t.props.nodesDraggable ?? !0);
    get nodesDraggable() {
      return c(this.#d);
    }
    set nodesDraggable(r) {
      K(this.#d, r);
    }
    #h = /* @__PURE__ */ _(() => t.props.nodesConnectable ?? !0);
    get nodesConnectable() {
      return c(this.#h);
    }
    set nodesConnectable(r) {
      K(this.#h, r);
    }
    #f = /* @__PURE__ */ _(() => t.props.elementsSelectable ?? !0);
    get elementsSelectable() {
      return c(this.#f);
    }
    set elementsSelectable(r) {
      K(this.#f, r);
    }
    #p = /* @__PURE__ */ _(() => t.props.nodesFocusable ?? !0);
    get nodesFocusable() {
      return c(this.#p);
    }
    set nodesFocusable(r) {
      K(this.#p, r);
    }
    #y = /* @__PURE__ */ _(() => t.props.edgesFocusable ?? !0);
    get edgesFocusable() {
      return c(this.#y);
    }
    set edgesFocusable(r) {
      K(this.#y, r);
    }
    #v = /* @__PURE__ */ _(() => t.props.disableKeyboardA11y ?? !1);
    get disableKeyboardA11y() {
      return c(this.#v);
    }
    set disableKeyboardA11y(r) {
      K(this.#v, r);
    }
    #w = /* @__PURE__ */ _(() => t.props.minZoom ?? 0.5);
    get minZoom() {
      return c(this.#w);
    }
    set minZoom(r) {
      K(this.#w, r);
    }
    #m = /* @__PURE__ */ _(() => t.props.maxZoom ?? 2);
    get maxZoom() {
      return c(this.#m);
    }
    set maxZoom(r) {
      K(this.#m, r);
    }
    #g = /* @__PURE__ */ _(() => t.props.nodeOrigin ?? [0, 0]);
    get nodeOrigin() {
      return c(this.#g);
    }
    set nodeOrigin(r) {
      K(this.#g, r);
    }
    #b = /* @__PURE__ */ _(() => t.props.nodeExtent ?? rl);
    get nodeExtent() {
      return c(this.#b);
    }
    set nodeExtent(r) {
      K(this.#b, r);
    }
    #x = /* @__PURE__ */ _(() => t.props.translateExtent ?? rl);
    get translateExtent() {
      return c(this.#x);
    }
    set translateExtent(r) {
      K(this.#x, r);
    }
    #k = /* @__PURE__ */ _(() => t.props.defaultEdgeOptions ?? {});
    get defaultEdgeOptions() {
      return c(this.#k);
    }
    set defaultEdgeOptions(r) {
      K(this.#k, r);
    }
    #C = /* @__PURE__ */ _(() => t.props.nodeDragThreshold ?? 1);
    get nodeDragThreshold() {
      return c(this.#C);
    }
    set nodeDragThreshold(r) {
      K(this.#C, r);
    }
    #$ = /* @__PURE__ */ _(() => t.props.autoPanOnNodeDrag ?? !0);
    get autoPanOnNodeDrag() {
      return c(this.#$);
    }
    set autoPanOnNodeDrag(r) {
      K(this.#$, r);
    }
    #S = /* @__PURE__ */ _(() => t.props.autoPanOnConnect ?? !0);
    get autoPanOnConnect() {
      return c(this.#S);
    }
    set autoPanOnConnect(r) {
      K(this.#S, r);
    }
    #_ = /* @__PURE__ */ _(() => t.props.autoPanOnNodeFocus ?? !0);
    get autoPanOnNodeFocus() {
      return c(this.#_);
    }
    set autoPanOnNodeFocus(r) {
      K(this.#_, r);
    }
    #O = /* @__PURE__ */ _(() => t.props.autoPanSpeed ?? 15);
    get autoPanSpeed() {
      return c(this.#O);
    }
    set autoPanSpeed(r) {
      K(this.#O, r);
    }
    #P = /* @__PURE__ */ _(() => t.props.connectionDragThreshold ?? 1);
    get connectionDragThreshold() {
      return c(this.#P);
    }
    set connectionDragThreshold(r) {
      K(this.#P, r);
    }
    fitViewQueued = t.props.fitView ?? !1;
    fitViewOptions = t.props.fitViewOptions;
    fitViewResolver = null;
    #E = /* @__PURE__ */ _(() => t.props.snapGrid ?? null);
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
    #M = /* @__PURE__ */ me(null);
    get selectionRect() {
      return c(this.#M);
    }
    set selectionRect(r) {
      K(this.#M, r);
    }
    #z = /* @__PURE__ */ me(!1);
    get selectionKeyPressed() {
      return c(this.#z);
    }
    set selectionKeyPressed(r) {
      K(this.#z, r);
    }
    #A = /* @__PURE__ */ me(!1);
    get multiselectionKeyPressed() {
      return c(this.#A);
    }
    set multiselectionKeyPressed(r) {
      K(this.#A, r);
    }
    #T = /* @__PURE__ */ me(!1);
    get deleteKeyPressed() {
      return c(this.#T);
    }
    set deleteKeyPressed(r) {
      K(this.#T, r);
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
    #L = /* @__PURE__ */ me(null);
    get selectionRectMode() {
      return c(this.#L);
    }
    set selectionRectMode(r) {
      K(this.#L, r);
    }
    #H = /* @__PURE__ */ me("");
    get ariaLiveMessage() {
      return c(this.#H);
    }
    set ariaLiveMessage(r) {
      K(this.#H, r);
    }
    #I = /* @__PURE__ */ _(() => t.props.selectionMode ?? _s.Partial);
    get selectionMode() {
      return c(this.#I);
    }
    set selectionMode(r) {
      K(this.#I, r);
    }
    #B = /* @__PURE__ */ _(() => ({ ...Jp, ...t.props.nodeTypes }));
    get nodeTypes() {
      return c(this.#B);
    }
    set nodeTypes(r) {
      K(this.#B, r);
    }
    #R = /* @__PURE__ */ _(() => ({ ...Qp, ...t.props.edgeTypes }));
    get edgeTypes() {
      return c(this.#R);
    }
    set edgeTypes(r) {
      K(this.#R, r);
    }
    #j = /* @__PURE__ */ _(() => t.props.noPanClass ?? "nopan");
    get noPanClass() {
      return c(this.#j);
    }
    set noPanClass(r) {
      K(this.#j, r);
    }
    #K = /* @__PURE__ */ _(() => t.props.noDragClass ?? "nodrag");
    get noDragClass() {
      return c(this.#K);
    }
    set noDragClass(r) {
      K(this.#K, r);
    }
    #F = /* @__PURE__ */ _(() => t.props.noWheelClass ?? "nowheel");
    get noWheelClass() {
      return c(this.#F);
    }
    set noWheelClass(r) {
      K(this.#F, r);
    }
    #Z = /* @__PURE__ */ _(() => Cb(t.props.ariaLabelConfig));
    get ariaLabelConfig() {
      return c(this.#Z);
    }
    set ariaLabelConfig(r) {
      K(this.#Z, r);
    }
    #W = /* @__PURE__ */ me(_2(this.nodesInitialized, t.props.fitView, t.props.initialViewport, this.width, this.height, this.nodeLookup));
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
      ol
    );
    get _connection() {
      return c(this.#X);
    }
    set _connection(r) {
      K(this.#X, r);
    }
    #q = /* @__PURE__ */ _(() => this._connection.inProgress ? {
      ...this._connection,
      to: _i(this._connection.to, [this.viewport.x, this.viewport.y, this.viewport.zoom])
    } : this._connection);
    get connection() {
      return c(this.#q);
    }
    set connection(r) {
      K(this.#q, r);
    }
    #Y = /* @__PURE__ */ _(() => t.props.connectionMode ?? ko.Strict);
    get connectionMode() {
      return c(this.#Y);
    }
    set connectionMode(r) {
      K(this.#Y, r);
    }
    #G = /* @__PURE__ */ _(() => t.props.connectionRadius ?? 20);
    get connectionRadius() {
      return c(this.#G);
    }
    set connectionRadius(r) {
      K(this.#G, r);
    }
    #U = /* @__PURE__ */ _(() => t.props.isValidConnection ?? (() => !0));
    get isValidConnection() {
      return c(this.#U);
    }
    set isValidConnection(r) {
      K(this.#U, r);
    }
    #J = /* @__PURE__ */ _(() => t.props.selectNodesOnDrag ?? !0);
    get selectNodesOnDrag() {
      return c(this.#J);
    }
    set selectNodesOnDrag(r) {
      K(this.#J, r);
    }
    #Q = /* @__PURE__ */ _(() => t.props.defaultMarkerColor === void 0 ? "#b1b1b7" : t.props.defaultMarkerColor);
    get defaultMarkerColor() {
      return c(this.#Q);
    }
    set defaultMarkerColor(r) {
      K(this.#Q, r);
    }
    #ee = /* @__PURE__ */ _(() => Db(t.edges, {
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
    #te = /* @__PURE__ */ _(() => t.props.onlyRenderVisibleElements ?? !1);
    get onlyRenderVisibleElements() {
      return c(this.#te);
    }
    set onlyRenderVisibleElements(r) {
      K(this.#te, r);
    }
    #ne = /* @__PURE__ */ _(() => t.props.onflowerror ?? wb);
    get onerror() {
      return c(this.#ne);
    }
    set onerror(r) {
      K(this.#ne, r);
    }
    #re = /* @__PURE__ */ _(() => t.props.ondelete);
    get ondelete() {
      return c(this.#re);
    }
    set ondelete(r) {
      K(this.#re, r);
    }
    #oe = /* @__PURE__ */ _(() => t.props.onbeforedelete);
    get onbeforedelete() {
      return c(this.#oe);
    }
    set onbeforedelete(r) {
      K(this.#oe, r);
    }
    #ie = /* @__PURE__ */ _(() => t.props.onbeforeconnect);
    get onbeforeconnect() {
      return c(this.#ie);
    }
    set onbeforeconnect(r) {
      K(this.#ie, r);
    }
    #se = /* @__PURE__ */ _(() => t.props.onconnect);
    get onconnect() {
      return c(this.#se);
    }
    set onconnect(r) {
      K(this.#se, r);
    }
    #ae = /* @__PURE__ */ _(() => t.props.onconnectstart);
    get onconnectstart() {
      return c(this.#ae);
    }
    set onconnectstart(r) {
      K(this.#ae, r);
    }
    #le = /* @__PURE__ */ _(() => t.props.onconnectend);
    get onconnectend() {
      return c(this.#le);
    }
    set onconnectend(r) {
      K(this.#le, r);
    }
    #ue = /* @__PURE__ */ _(() => t.props.onbeforereconnect);
    get onbeforereconnect() {
      return c(this.#ue);
    }
    set onbeforereconnect(r) {
      K(this.#ue, r);
    }
    #ce = /* @__PURE__ */ _(() => t.props.onreconnect);
    get onreconnect() {
      return c(this.#ce);
    }
    set onreconnect(r) {
      K(this.#ce, r);
    }
    #de = /* @__PURE__ */ _(() => t.props.onreconnectstart);
    get onreconnectstart() {
      return c(this.#de);
    }
    set onreconnectstart(r) {
      K(this.#de, r);
    }
    #he = /* @__PURE__ */ _(() => t.props.onreconnectend);
    get onreconnectend() {
      return c(this.#he);
    }
    set onreconnectend(r) {
      K(this.#he, r);
    }
    #pe = /* @__PURE__ */ _(() => t.props.clickConnect ?? !0);
    get clickConnect() {
      return c(this.#pe);
    }
    set clickConnect(r) {
      K(this.#pe, r);
    }
    #fe = /* @__PURE__ */ _(() => t.props.onclickconnectstart);
    get onclickconnectstart() {
      return c(this.#fe);
    }
    set onclickconnectstart(r) {
      K(this.#fe, r);
    }
    #ge = /* @__PURE__ */ _(() => t.props.onclickconnectend);
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
    #me = /* @__PURE__ */ _(() => t.props.onselectiondrag);
    get onselectiondrag() {
      return c(this.#me);
    }
    set onselectiondrag(r) {
      K(this.#me, r);
    }
    #ye = /* @__PURE__ */ _(() => t.props.onselectiondragstart);
    get onselectiondragstart() {
      return c(this.#ye);
    }
    set onselectiondragstart(r) {
      K(this.#ye, r);
    }
    #we = /* @__PURE__ */ _(() => t.props.onselectiondragstop);
    get onselectiondragstop() {
      return c(this.#we);
    }
    set onselectiondragstop(r) {
      K(this.#we, r);
    }
    resolveFitView = async () => {
      this.panZoom && (await mb(
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
    _prefersDark = new Up("(prefers-color-scheme: dark)", t.props.colorModeSSR === "dark");
    #be = /* @__PURE__ */ _(() => t.props.colorMode === "system" ? this._prefersDark.current ? "dark" : "light" : t.props.colorMode ?? "light");
    get colorMode() {
      return c(this.#be);
    }
    set colorMode(r) {
      K(this.#be, r);
    }
    constructor() {
    }
    resetStoreValues() {
      this.dragging = !1, this.selectionRect = null, this.selectionRectMode = null, this.selectionKeyPressed = !1, this.multiselectionKeyPressed = !1, this.deleteKeyPressed = !1, this.panActivationKeyPressed = !1, this.zoomActivationKeyPressed = !1, this._connection = ol, this.clickConnectStartHandle = null, this.viewport = t.props.initialViewport ?? { x: 0, y: 0, zoom: 1 }, this.ariaLiveMessage = "";
    }
  }
  return new e();
}
function $n() {
  const t = wn(Ns);
  if (!t)
    throw new Error("To call useStore outside of <SvelteFlow /> you need to wrap your component in a <SvelteFlowProvider />");
  return t.getStore();
}
const Ns = Symbol();
function ef(t) {
  const e = O2(t);
  function n(D) {
    e.nodeTypes = {
      ...Jp,
      ...D
    };
  }
  function r(D) {
    e.edgeTypes = {
      ...Qp,
      ...D
    };
  }
  function o(D) {
    e.edges = Nb(D, e.edges);
  }
  const i = (D, N = !1) => {
    e.nodes = e.nodes.map((S) => {
      const T = D.get(S.id);
      return T ? { ...S, position: T.position, dragging: N } : S;
    });
  };
  function s(D) {
    const { changes: N, updatedInternals: S } = Zb(D, e.nodeLookup, e.parentLookup, e.domNode, e.nodeOrigin);
    if (!S)
      return;
    Ib(e.nodeLookup, e.parentLookup, {
      nodeOrigin: e.nodeOrigin,
      nodeExtent: e.nodeExtent
    }), e.fitViewQueued && e.resolveFitView();
    const T = /* @__PURE__ */ new Map();
    for (const $ of N) {
      const P = e.nodeLookup.get($.id)?.internals.userNode;
      if (!P)
        continue;
      const M = { ...P };
      switch ($.type) {
        case "dimensions": {
          const j = { ...M.measured, ...$.dimensions };
          $.setAttributes && (M.width = $.dimensions?.width ?? M.width, M.height = $.dimensions?.height ?? M.height), M.measured = j;
          break;
        }
        case "position":
          M.position = $.position ?? M.position;
          break;
      }
      T.set($.id, M);
    }
    e.nodes = e.nodes.map(($) => T.get($.id) ?? $);
  }
  function a(D) {
    const N = e.fitViewResolver ?? Promise.withResolvers();
    return e.fitViewQueued = !0, e.fitViewOptions = D, e.fitViewResolver = N, e.nodes = [...e.nodes], N.promise;
  }
  async function l(D, N, S) {
    const T = typeof S?.zoom < "u" ? S.zoom : e.maxZoom, $ = e.panZoom;
    return $ ? (await $.setViewport({
      x: e.width / 2 - D * T,
      y: e.height / 2 - N * T,
      zoom: T
    }, { duration: S?.duration, ease: S?.ease, interpolate: S?.interpolate }), Promise.resolve(!0)) : Promise.resolve(!1);
  }
  function u(D, N) {
    const S = e.panZoom;
    return S ? S.scaleBy(D, N) : Promise.resolve(!1);
  }
  function d(D) {
    return u(1.2, D);
  }
  function h(D) {
    return u(1 / 1.2, D);
  }
  function p(D) {
    const N = e.panZoom;
    N && (N.setScaleExtent([D, e.maxZoom]), e.minZoom = D);
  }
  function v(D) {
    const N = e.panZoom;
    N && (N.setScaleExtent([e.minZoom, D]), e.maxZoom = D);
  }
  function m(D) {
    const N = e.panZoom;
    N && (N.setTranslateExtent(D), e.translateExtent = D);
  }
  function y(D, N = null) {
    let S = !1;
    const T = D.map(($) => (!N || N.has($.id)) && $.selected ? (S = !0, { ...$, selected: !1 }) : $);
    return [S, T];
  }
  function w(D) {
    const N = D?.nodes ? new Set(D.nodes.map((j) => j.id)) : null, [S, T] = y(e.nodes, N);
    S && (e.nodes = T);
    const $ = D?.edges ? new Set(D.edges.map((j) => j.id)) : null, [P, M] = y(e.edges, $);
    P && (e.edges = M);
  }
  function b(D) {
    const N = e.multiselectionKeyPressed;
    e.nodes = e.nodes.map((S) => {
      const T = D.includes(S.id), $ = N && S.selected || T;
      return !!S.selected !== $ ? { ...S, selected: $ } : S;
    }), N || w({ nodes: [] });
  }
  function k(D) {
    const N = e.multiselectionKeyPressed;
    e.edges = e.edges.map((S) => {
      const T = D.includes(S.id), $ = N && S.selected || T;
      return !!S.selected !== $ ? { ...S, selected: $ } : S;
    }), N || w({ edges: [] });
  }
  function O(D, N, S) {
    const T = e.nodeLookup.get(D);
    if (!T) {
      console.warn("012", ai.error012(D));
      return;
    }
    e.selectionRect = null, e.selectionRectMode = null, T.selected ? (N || T.selected && e.multiselectionKeyPressed) && (w({ nodes: [T], edges: [] }), requestAnimationFrame(() => S?.blur())) : b([D]);
  }
  function C(D) {
    const N = e.edgeLookup.get(D);
    if (!N) {
      console.warn("012", ai.error012(D));
      return;
    }
    (N.selectable || e.elementsSelectable && typeof N.selectable > "u") && (e.selectionRect = null, e.selectionRectMode = null, N.selected ? N.selected && e.multiselectionKeyPressed && w({ nodes: [], edges: [N] }) : k([D]));
  }
  function x(D, N) {
    const { nodeExtent: S, snapGrid: T, nodeOrigin: $, nodeLookup: P, nodesDraggable: M, onerror: j } = e, q = /* @__PURE__ */ new Map(), G = T?.[0] ?? 5, A = T?.[1] ?? 5, Y = D.x * G * N, ee = D.y * A * N;
    for (const R of P.values()) {
      if (!(R.selected && (R.draggable || M && typeof R.draggable > "u")))
        continue;
      let F = {
        x: R.internals.positionAbsolute.x + Y,
        y: R.internals.positionAbsolute.y + ee
      };
      T && (F = Si(F, T));
      const { position: W, positionAbsolute: J } = xp({
        nodeId: R.id,
        nextPosition: F,
        nodeLookup: P,
        nodeExtent: S,
        nodeOrigin: $,
        onError: j
      });
      R.position = W, R.internals.positionAbsolute = J, q.set(R.id, R);
    }
    i(q);
  }
  function E(D) {
    return Wb({
      delta: D,
      panZoom: e.panZoom,
      transform: [e.viewport.x, e.viewport.y, e.viewport.zoom],
      translateExtent: e.translateExtent,
      width: e.width,
      height: e.height
    });
  }
  const V = (D) => {
    e._connection = { ...D };
  };
  function L() {
    e._connection = ol;
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
    cancelConnection: L,
    reset: I
  });
}
function P2(t, e) {
  const { minZoom: n, maxZoom: r, initialViewport: o, onPanZoomStart: i, onPanZoom: s, onPanZoomEnd: a, translateExtent: l, setPanZoomInstance: u, onDraggingChange: d, onTransformChange: h } = e, p = d2({
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
var E2 = /* @__PURE__ */ ne('<div class="svelte-flow__zoom svelte-flow__container"><!></div>');
function tf(t, e) {
  ae(e, !0);
  let n = g(e, "store", 15), r = g(e, "panOnScrollMode", 7), o = g(e, "preventScrolling", 7), i = g(e, "zoomOnScroll", 7), s = g(e, "zoomOnDoubleClick", 7), a = g(e, "zoomOnPinch", 7), l = g(e, "panOnDrag", 7), u = g(e, "panOnScroll", 7), d = g(e, "panOnScrollSpeed", 7), h = g(e, "paneClickDistance", 7), p = g(e, "selectionOnDrag", 7), v = g(e, "onmovestart", 7), m = g(e, "onmove", 7), y = g(e, "onmoveend", 7), w = g(e, "oninit", 7), b = g(e, "children", 7), k = /* @__PURE__ */ _(() => n().panActivationKeyPressed || l()), O = /* @__PURE__ */ _(() => n().panActivationKeyPressed || u());
  const { viewport: C } = n();
  let x = !1;
  Ie(() => {
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
  }, V = E2(), L = X(V);
  return Pe(L, b), Z(V), Tt(V, (I, D) => P2?.(I, D), () => ({
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
  })), z(t, V), le(E);
}
ie(
  tf,
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
function Xc(t, e) {
  return (n) => {
    n.target === e && t?.(n);
  };
}
function qc(t) {
  return (e) => {
    const n = t.has(e.id);
    return !!e.selected !== n ? { ...e, selected: n } : e;
  };
}
function Yc(t, e) {
  if (t.size !== e.size)
    return !1;
  for (const n of t)
    if (!e.has(n))
      return !1;
  return !0;
}
var N2 = /* @__PURE__ */ ne("<div><!></div>");
function nf(t, e) {
  ae(e, !0);
  let n = g(e, "store", 15), r = g(e, "panOnDrag", 7, !0), o = g(e, "paneClickDistance", 7, 1), i = g(e, "selectionOnDrag", 7), s = g(e, "onpaneclick", 7), a = g(e, "onpanecontextmenu", 7), l = g(e, "onselectionstart", 7), u = g(e, "onselectionend", 7), d = g(e, "children", 7), h, p = null, v = /* @__PURE__ */ new Set(), m = /* @__PURE__ */ new Set(), y = /* @__PURE__ */ _(() => n().panActivationKeyPressed || r()), w = /* @__PURE__ */ _(() => n().selectionKeyPressed || !!n().selectionRect || i() && c(y) !== !0), b = /* @__PURE__ */ _(() => n().elementsSelectable && (c(w) || n().selectionRectMode === "user")), k = !1;
  function O(P) {
    if (p = h?.getBoundingClientRect(), !p) return;
    const M = P.target === h, j = !M && !!P.target.closest(".nokey"), q = i() && M || n().selectionKeyPressed;
    if (j || !c(w) || !q || P.button !== 0 || !P.isPrimary)
      return;
    P.target?.setPointerCapture?.(P.pointerId), k = !1;
    const { x: G, y: A } = gn(P, p);
    n(n().selectionRect = { width: 0, height: 0, startX: G, startY: A, x: G, y: A }, !0), M || (P.stopPropagation(), P.preventDefault());
  }
  function C(P) {
    if (!c(w) || !p || !n().selectionRect)
      return;
    const M = gn(P, p), { startX: j = 0, startY: q = 0 } = n().selectionRect;
    if (!k) {
      const R = n().selectionKeyPressed ? 0 : o();
      if (Math.hypot(M.x - j, M.y - q) <= R)
        return;
      n().unselectNodesAndEdges(), l()?.(P);
    }
    k = !0;
    const G = {
      ...n().selectionRect,
      x: M.x < j ? M.x : j,
      y: M.y < q ? M.y : q,
      width: Math.abs(M.x - j),
      height: Math.abs(M.y - q)
    }, A = v, Y = m;
    v = new Set(cu(
      n().nodeLookup,
      G,
      [
        n().viewport.x,
        n().viewport.y,
        n().viewport.zoom
      ],
      n().selectionMode === _s.Partial,
      !0
    ).map((R) => R.id));
    const ee = n().defaultEdgeOptions.selectable ?? !0;
    m = /* @__PURE__ */ new Set();
    for (const R of v) {
      const F = n().connectionLookup.get(R);
      if (F)
        for (const { edgeId: W } of F.values()) {
          const J = n().edgeLookup.get(W);
          J && (J.selectable ?? ee) && m.add(W);
        }
    }
    Yc(A, v) || n(n().nodes = n().nodes.map(qc(v)), !0), Yc(Y, m) || n(n().edges = n().edges.map(qc(m)), !0), n(n().selectionRectMode = "user", !0), n(n().selectionRect = G, !0);
  }
  function x(P) {
    P.button === 0 && (P.target?.releasePointerCapture?.(P.pointerId), !k && P.target === h && L?.(P), n(n().selectionRect = null, !0), k && n(n().selectionRectMode = v.size > 0 ? "nodes" : null, !0), k && u()?.(P));
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
  function L(P) {
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
  }, D = N2();
  let N;
  var S = /* @__PURE__ */ _(() => c(b) ? void 0 : Xc(L, h));
  D.__click = function(...P) {
    c(S)?.apply(this, P);
  }, D.__pointermove = function(...P) {
    (c(b) ? C : void 0)?.apply(this, P);
  }, D.__pointerup = function(...P) {
    (c(b) ? x : void 0)?.apply(this, P);
  };
  var T = /* @__PURE__ */ _(() => Xc(E, h));
  D.__contextmenu = function(...P) {
    c(T)?.apply(this, P);
  };
  var $ = X(D);
  return Pe($, d), Z(D), Mt(D, (P) => h = P, () => h), Ee((P) => N = Yt(D, 1, "svelte-flow__pane svelte-flow__container", null, N, P), [
    () => ({
      draggable: r() === !0 || Array.isArray(r()) && r().includes(0),
      dragging: n().dragging,
      selection: c(w)
    })
  ]), ms(
    "pointerdown",
    D,
    function(...P) {
      (c(b) ? O : void 0)?.apply(this, P);
    },
    !0
  ), ms(
    "click",
    D,
    function(...P) {
      (c(b) ? V : void 0)?.apply(this, P);
    },
    !0
  ), z(t, D), le(I);
}
ro(["click", "pointermove", "pointerup", "contextmenu"]);
ie(
  nf,
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
var M2 = /* @__PURE__ */ ne('<div class="svelte-flow__viewport xyflow__viewport svelte-flow__container"><!></div>');
function rf(t, e) {
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
  }, i = M2();
  let s;
  var a = X(i);
  return Pe(a, r), Z(i), Ee(() => s = Nt(i, "", s, {
    transform: `translate(${n().viewport.x ?? ""}px, ${n().viewport.y ?? ""}px) scale(${n().viewport.zoom ?? ""})`
  })), z(t, i), le(o);
}
ie(rf, { store: {}, children: {} }, [], [], !0);
function of(t, e) {
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
var z2 = /* @__PURE__ */ ne('<div aria-live="assertive" aria-atomic="true" class="a11y-live-msg svelte-wlt670"> </div>'), A2 = /* @__PURE__ */ ne('<div class="a11y-hidden svelte-wlt670"> </div> <div class="a11y-hidden svelte-wlt670"> </div> <!>', 1);
const T2 = {
  hash: "svelte-wlt670",
  code: ".a11y-hidden.svelte-wlt670 {display:none;}.a11y-live-msg.svelte-wlt670 {position:absolute;width:1px;height:1px;margin:-1px;border:0;padding:0;overflow:hidden;clip:rect(0px, 0px, 0px, 0px);clip-path:inset(100%);}"
};
function sf(t, e) {
  ae(e, !0), Je(t, T2);
  let n = g(e, "store", 7);
  var r = {
    get store() {
      return n();
    },
    set store(h) {
      n(h), f();
    }
  }, o = A2(), i = U(o), s = X(i, !0);
  Z(i);
  var a = B(i, 2), l = X(a, !0);
  Z(a);
  var u = B(a, 2);
  {
    var d = (h) => {
      var p = z2(), v = X(p, !0);
      Z(p), Ee(() => {
        Oe(p, "id", `${D2}-${n().flowId}`), rt(v, n().ariaLiveMessage);
      }), z(h, p);
    };
    se(u, (h) => {
      n().disableKeyboardA11y || h(d);
    });
  }
  return Ee(() => {
    Oe(i, "id", `${af}-${n().flowId}`), rt(s, n().disableKeyboardA11y ? n().ariaLabelConfig["node.a11yDescription.default"] : n().ariaLabelConfig["node.a11yDescription.keyboardDisabled"]), Oe(a, "id", `${lf}-${n().flowId}`), rt(l, n().ariaLabelConfig["edge.a11yDescription.default"]);
  }), z(t, o), le(r);
}
ie(sf, { store: {} }, [], [], !0);
const af = "svelte-flow__node-desc", lf = "svelte-flow__edge-desc", D2 = "svelte-flow__aria-live";
var V2 = /* @__PURE__ */ ne("<div><!></div>");
function uf(t, e) {
  ae(e, !0);
  let n = g(e, "store", 15), r = g(e, "node", 7), o = g(e, "resizeObserver", 7), i = g(e, "nodeClickDistance", 7), s = g(e, "onnodeclick", 7), a = g(e, "onnodedrag", 7), l = g(e, "onnodedragstart", 7), u = g(e, "onnodedragstop", 7), d = g(e, "onnodepointerenter", 7), h = g(e, "onnodepointerleave", 7), p = g(e, "onnodepointermove", 7), v = g(e, "onnodecontextmenu", 7), m = /* @__PURE__ */ _(() => Lt(r().data, () => ({}), !0)), y = /* @__PURE__ */ _(() => Lt(r().selected, !1)), w = /* @__PURE__ */ _(() => r().draggable), b = /* @__PURE__ */ _(() => r().selectable), k = /* @__PURE__ */ _(() => Lt(r().deletable, !0)), O = /* @__PURE__ */ _(() => r().connectable), C = /* @__PURE__ */ _(() => r().focusable), x = /* @__PURE__ */ _(() => Lt(r().hidden, !1)), E = /* @__PURE__ */ _(() => Lt(r().dragging, !1)), V = /* @__PURE__ */ _(() => Lt(r().style, "")), L = /* @__PURE__ */ _(() => r().class), I = /* @__PURE__ */ _(() => Lt(r().type, "default")), D = /* @__PURE__ */ _(() => r().parentId), N = /* @__PURE__ */ _(() => r().sourcePosition), S = /* @__PURE__ */ _(() => r().targetPosition), T = /* @__PURE__ */ _(() => Lt(r().measured, () => ({ width: 0, height: 0 }), !0).width), $ = /* @__PURE__ */ _(() => Lt(r().measured, () => ({ width: 0, height: 0 }), !0).height), P = /* @__PURE__ */ _(() => r().initialWidth), M = /* @__PURE__ */ _(() => r().initialHeight), j = /* @__PURE__ */ _(() => r().width), q = /* @__PURE__ */ _(() => r().height), G = /* @__PURE__ */ _(() => r().dragHandle), A = /* @__PURE__ */ _(() => Lt(r().internals.z, 0)), Y = /* @__PURE__ */ _(() => r().internals.positionAbsolute.x), ee = /* @__PURE__ */ _(() => r().internals.positionAbsolute.y), R = /* @__PURE__ */ _(() => r().internals.userNode), { id: F } = r(), W = /* @__PURE__ */ _(() => c(w) ?? n().nodesDraggable), J = /* @__PURE__ */ _(() => c(b) ?? n().elementsSelectable), re = /* @__PURE__ */ _(() => c(O) ?? n().nodesConnectable), H = /* @__PURE__ */ _(() => Sp(r())), te = /* @__PURE__ */ _(() => !!r().internals.handleBounds), ve = /* @__PURE__ */ _(() => c(H) && c(te)), he = /* @__PURE__ */ _(() => c(C) ?? n().nodesFocusable);
  function oe(ge) {
    return n().parentLookup.has(ge);
  }
  let ue = /* @__PURE__ */ _(() => oe(F)), fe = /* @__PURE__ */ me(null), ye = null, Ce = c(I), de = c(N), xe = c(S), Ve = /* @__PURE__ */ _(() => n().nodeTypes[c(I)] ?? vu), Q = /* @__PURE__ */ _(() => n().ariaLabelConfig);
  Zr("svelteflow__node_connectable", {
    get value() {
      return c(re);
    }
  }), Zr("svelteflow__node_id", F);
  let Me = /* @__PURE__ */ _(() => {
    const ge = c(T) === void 0 ? c(j) ?? c(P) : c(j), ze = c($) === void 0 ? c(q) ?? c(M) : c(q);
    if (!(ge === void 0 && ze === void 0 && c(V) === void 0))
      return `${c(V)};${ge ? `width:${Ln(ge)};` : ""}${ze ? `height:${Ln(ze)};` : ""}`;
  });
  Ie(() => {
    (c(I) !== Ce || c(N) !== de || c(S) !== xe) && c(fe) !== null && requestAnimationFrame(() => {
      c(fe) !== null && n().updateNodeInternals(/* @__PURE__ */ new Map([[F, { id: F, nodeElement: c(fe), force: !0 }]]));
    }), Ce = c(I), de = c(N), xe = c(S);
  }), Ie(() => {
    o() && (!c(ve) || c(fe) !== ye) && (ye && o().unobserve(ye), c(fe) && o().observe(c(fe)), ye = c(fe));
  }), bi(() => {
    ye && o()?.unobserve(ye);
  });
  function Ne(ge) {
    c(J) && (!n().selectNodesOnDrag || !c(W) || n().nodeDragThreshold > 0) && n().handleNodeSelection(F), s()?.({ node: c(R), event: ge });
  }
  function Fe(ge) {
    if (!(Pp(ge) || n().disableKeyboardA11y))
      if (wp.includes(ge.key) && c(J)) {
        const ze = ge.key === "Escape";
        n().handleNodeSelection(F, ze, c(fe));
      } else c(W) && r().selected && Object.prototype.hasOwnProperty.call(Es, ge.key) && (ge.preventDefault(), n(
        n().ariaLiveMessage = c(Q)["node.a11yDescription.ariaLiveMessage"]({
          direction: ge.key.replace("Arrow", "").toLowerCase(),
          x: ~~r().internals.positionAbsolute.x,
          y: ~~r().internals.positionAbsolute.y
        }),
        !0
      ), n().moveSelectedNodes(Es[ge.key], ge.shiftKey ? 4 : 1));
  }
  const Le = () => {
    if (n().disableKeyboardA11y || !n().autoPanOnNodeFocus || !c(fe)?.matches(":focus-visible"))
      return;
    const { width: ge, height: ze, viewport: st } = n();
    cu(/* @__PURE__ */ new Map([[F, r()]]), { x: 0, y: 0, width: ge, height: ze }, [st.x, st.y, st.zoom], !0).length > 0 || n().setCenter(r().position.x + (r().measured.width ?? 0) / 2, r().position.y + (r().measured.height ?? 0) / 2, { zoom: st.zoom });
  };
  var Ze = {
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
  }, ft = ce(), bt = U(ft);
  {
    var nt = (ge) => {
      var ze = V2();
      Ue(ze, () => ({
        "data-id": F,
        class: [
          "svelte-flow__node",
          `svelte-flow__node-${c(I)}`,
          c(L)
        ],
        style: c(Me),
        onclick: Ne,
        onpointerenter: d() ? (Be) => d()({ node: c(R), event: Be }) : void 0,
        onpointerleave: h() ? (Be) => h()({ node: c(R), event: Be }) : void 0,
        onpointermove: p() ? (Be) => p()({ node: c(R), event: Be }) : void 0,
        oncontextmenu: v() ? (Be) => v()({ node: c(R), event: Be }) : void 0,
        onkeydown: c(he) ? Fe : void 0,
        onfocus: c(he) ? Le : void 0,
        tabIndex: c(he) ? 0 : void 0,
        role: r().ariaRole ?? (c(he) ? "group" : void 0),
        "aria-roledescription": "node",
        "aria-describedby": n().disableKeyboardA11y ? void 0 : `${af}-${n().flowId}`,
        ...r().domAttributes,
        [vr]: {
          dragging: c(E),
          selected: c(y),
          draggable: c(W),
          connectable: c(re),
          selectable: c(J),
          nopan: c(W),
          parent: c(ue)
        },
        [En]: {
          "z-index": c(A),
          transform: `translate(${c(Y) ?? ""}px, ${c(ee) ?? ""}px)`,
          visibility: c(H) ? "visible" : "hidden"
        }
      }));
      var st = X(ze);
      St(st, () => c(Ve), (Be, tt) => {
        tt(Be, {
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
            return c(J);
          },
          get deletable() {
            return c(k);
          },
          get sourcePosition() {
            return c(N);
          },
          get targetPosition() {
            return c(S);
          },
          get zIndex() {
            return c(A);
          },
          get dragging() {
            return c(E);
          },
          get draggable() {
            return c(W);
          },
          get dragHandle() {
            return c(G);
          },
          get parentId() {
            return c(D);
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
            return c(j);
          },
          get height() {
            return c(q);
          }
        });
      }), Z(ze), Tt(ze, (Be, tt) => of?.(Be, tt), () => ({
        nodeId: F,
        isSelectable: c(J),
        disabled: !c(W),
        handleSelector: c(G),
        noDragClass: n().noDragClass,
        nodeClickDistance: i(),
        onNodeMouseDown: n().handleNodeSelection,
        onDrag: (Be, tt, xt, at) => {
          a()?.({ event: Be, targetNode: xt, nodes: at });
        },
        onDragStart: (Be, tt, xt, at) => {
          l()?.({ event: Be, targetNode: xt, nodes: at });
        },
        onDragStop: (Be, tt, xt, at) => {
          u()?.({ event: Be, targetNode: xt, nodes: at });
        },
        store: n()
      })), Mt(ze, (Be) => K(fe, Be), () => c(fe)), z(ge, ze);
    };
    se(bt, (ge) => {
      c(x) || ge(nt);
    });
  }
  return z(t, ft), le(Ze);
}
ie(
  uf,
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
var L2 = /* @__PURE__ */ ne('<div class="svelte-flow__nodes"></div>');
function cf(t, e) {
  ae(e, !0);
  let n = g(e, "store", 15), r = g(e, "nodeClickDistance", 7), o = g(e, "onnodeclick", 7), i = g(e, "onnodecontextmenu", 7), s = g(e, "onnodepointerenter", 7), a = g(e, "onnodepointermove", 7), l = g(e, "onnodepointerleave", 7), u = g(e, "onnodedrag", 7), d = g(e, "onnodedragstart", 7), h = g(e, "onnodedragstop", 7);
  const p = typeof ResizeObserver > "u" ? null : new ResizeObserver((y) => {
    const w = /* @__PURE__ */ new Map();
    y.forEach((b) => {
      const k = b.target.getAttribute("data-id");
      w.set(k, { id: k, nodeElement: b.target, force: !0 });
    }), n().updateNodeInternals(w);
  });
  bi(() => {
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
  }, m = L2();
  return Ct(m, 21, () => n().visible.nodes.values(), (y) => y.id, (y, w) => {
    uf(y, {
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
  }), Z(m), z(t, m), le(v);
}
ie(
  cf,
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
var H2 = /* @__PURE__ */ ke('<svg class="svelte-flow__edge-wrapper"><g><!></g></svg>');
function df(t, e) {
  ae(e, !0);
  const n = g(e, "edge", 7), r = g(e, "store", 15), o = g(e, "onedgeclick", 7), i = g(e, "onedgecontextmenu", 7), s = g(e, "onedgepointerenter", 7), a = g(e, "onedgepointerleave", 7);
  let l = /* @__PURE__ */ _(() => n().source), u = /* @__PURE__ */ _(() => n().target), d = /* @__PURE__ */ _(() => n().sourceX), h = /* @__PURE__ */ _(() => n().sourceY), p = /* @__PURE__ */ _(() => n().targetX), v = /* @__PURE__ */ _(() => n().targetY), m = /* @__PURE__ */ _(() => n().sourcePosition), y = /* @__PURE__ */ _(() => n().targetPosition), w = /* @__PURE__ */ _(() => Lt(n().animated, !1)), b = /* @__PURE__ */ _(() => Lt(n().selected, !1)), k = /* @__PURE__ */ _(() => n().label), O = /* @__PURE__ */ _(() => n().labelStyle), C = /* @__PURE__ */ _(() => Lt(n().data, () => ({}), !0)), x = /* @__PURE__ */ _(() => n().style), E = /* @__PURE__ */ _(() => n().interactionWidth), V = /* @__PURE__ */ _(() => Lt(n().type, "default")), L = /* @__PURE__ */ _(() => n().sourceHandle), I = /* @__PURE__ */ _(() => n().targetHandle), D = /* @__PURE__ */ _(() => n().markerStart), N = /* @__PURE__ */ _(() => n().markerEnd), S = /* @__PURE__ */ _(() => n().selectable), T = /* @__PURE__ */ _(() => n().focusable), $ = /* @__PURE__ */ _(() => Lt(n().deletable, !0)), P = /* @__PURE__ */ _(() => n().hidden), M = /* @__PURE__ */ _(() => n().zIndex), j = /* @__PURE__ */ _(() => n().class), q = /* @__PURE__ */ _(() => n().ariaLabel), G = null;
  const { id: A } = n();
  Zr("svelteflow__edge_id", A);
  let Y = /* @__PURE__ */ _(() => c(S) ?? r().elementsSelectable), ee = /* @__PURE__ */ _(() => c(T) ?? r().edgesFocusable), R = /* @__PURE__ */ _(() => r().edgeTypes[c(V)] ?? mu), F = /* @__PURE__ */ _(() => c(D) ? `url('#${sl(c(D), r().flowId)}')` : void 0), W = /* @__PURE__ */ _(() => c(N) ? `url('#${sl(c(N), r().flowId)}')` : void 0);
  function J(ue) {
    const fe = r().edgeLookup.get(A);
    fe && (c(Y) && r().handleEdgeSelection(A), o()?.({ event: ue, edge: fe }));
  }
  function re(ue, fe) {
    const ye = r().edgeLookup.get(A);
    ye && fe({ event: ue, edge: ye });
  }
  function H(ue) {
    if (!r().disableKeyboardA11y && wp.includes(ue.key) && c(Y)) {
      const { unselectNodesAndEdges: fe, addSelectedEdges: ye } = r();
      ue.key === "Escape" ? (G?.blur(), fe({ edges: [n()] })) : ye([A]);
    }
  }
  var te = {
    get edge() {
      return n();
    },
    set edge(ue) {
      n(ue), f();
    },
    get store() {
      return r();
    },
    set store(ue) {
      r(ue), f();
    },
    get onedgeclick() {
      return o();
    },
    set onedgeclick(ue) {
      o(ue), f();
    },
    get onedgecontextmenu() {
      return i();
    },
    set onedgecontextmenu(ue) {
      i(ue), f();
    },
    get onedgepointerenter() {
      return s();
    },
    set onedgepointerenter(ue) {
      s(ue), f();
    },
    get onedgepointerleave() {
      return a();
    },
    set onedgepointerleave(ue) {
      a(ue), f();
    }
  }, ve = ce(), he = U(ve);
  {
    var oe = (ue) => {
      var fe = H2();
      let ye;
      var Ce = X(fe);
      Ue(Ce, () => ({
        class: ["svelte-flow__edge", c(j)],
        "data-id": A,
        onclick: J,
        oncontextmenu: i() ? (xe) => {
          re(xe, i());
        } : void 0,
        onpointerenter: s() ? (xe) => {
          re(xe, s());
        } : void 0,
        onpointerleave: a() ? (xe) => {
          re(xe, a());
        } : void 0,
        "aria-label": c(q) === null ? void 0 : c(q) ? c(q) : `Edge from ${c(l)} to ${c(u)}`,
        "aria-describedby": c(ee) ? `${lf}-${r().flowId}` : void 0,
        role: n().ariaRole ?? (c(ee) ? "group" : "img"),
        "aria-roledescription": "edge",
        onkeydown: c(ee) ? H : void 0,
        tabindex: c(ee) ? 0 : void 0,
        ...n().domAttributes,
        [vr]: {
          animated: c(w),
          selected: c(b),
          selectable: c(Y)
        }
      }));
      var de = X(Ce);
      St(de, () => c(R), (xe, Ve) => {
        Ve(xe, {
          get id() {
            return A;
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
            return c($);
          },
          get type() {
            return c(V);
          },
          get sourceHandleId() {
            return c(L);
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
      }), Z(Ce), Mt(Ce, (xe) => G = xe, () => G), Z(fe), Ee(() => ye = Nt(fe, "", ye, { "z-index": c(M) })), z(ue, fe);
    };
    se(he, (ue) => {
      c(P) || ue(oe);
    });
  }
  return z(t, ve), le(te);
}
ie(
  df,
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
Sm();
var I2 = /* @__PURE__ */ ke("<defs></defs>");
function hf(t, e) {
  ae(e, !1);
  const n = $n();
  tu();
  var r = I2();
  Ct(r, 5, () => n.markers, (o) => o.id, (o, i) => {
    pf(o, Re(() => c(i)));
  }), Z(r), z(t, r), le();
}
ie(hf, {}, [], [], !0);
var B2 = /* @__PURE__ */ ke('<polyline class="arrow" fill="none" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4"></polyline>'), R2 = /* @__PURE__ */ ke('<polyline class="arrowclosed" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), j2 = /* @__PURE__ */ ke('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function pf(t, e) {
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
  }, h = j2(), p = X(h);
  {
    var v = (y) => {
      var w = B2();
      let b;
      Ee(() => {
        Oe(w, "stroke-width", u()), b = Nt(w, "", b, { stroke: l() });
      }), z(y, w);
    }, m = (y) => {
      var w = ce(), b = U(w);
      {
        var k = (O) => {
          var C = R2();
          let x;
          Ee(() => {
            Oe(C, "stroke-width", u()), x = Nt(C, "", x, { stroke: l(), fill: l() });
          }), z(O, C);
        };
        se(
          b,
          (O) => {
            r() === li.ArrowClosed && O(k);
          },
          !0
        );
      }
      z(y, w);
    };
    se(p, (y) => {
      r() === li.Arrow ? y(v) : y(m, !1);
    });
  }
  return Z(h), Ee(() => {
    Oe(h, "id", n()), Oe(h, "markerWidth", `${o()}`), Oe(h, "markerHeight", `${i()}`), Oe(h, "markerUnits", s()), Oe(h, "orient", a());
  }), z(t, h), le(d);
}
ie(
  pf,
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
var K2 = /* @__PURE__ */ ne('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!></div>');
function ff(t, e) {
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
  }, l = K2(), u = X(l), d = X(u);
  hf(d, {}), Z(u);
  var h = B(u, 2);
  return Ct(h, 17, () => n().visible.edges.values(), (p) => p.id, (p, v) => {
    df(p, {
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
  }), Z(l), z(t, l), le(a);
}
ie(
  ff,
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
var F2 = /* @__PURE__ */ ne('<div class="svelte-flow__selection svelte-1rrpn9s"></div>');
const Z2 = {
  hash: "svelte-1rrpn9s",
  code: ".svelte-flow__selection.svelte-1rrpn9s {position:absolute;top:0;left:0;}"
};
function yu(t, e) {
  ae(e, !0), Je(t, Z2);
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
  }, l = ce(), u = U(l);
  {
    var d = (h) => {
      var p = F2();
      let v;
      Ee((m) => v = Nt(p, "", v, m), [
        () => ({
          width: typeof o() == "string" ? o() : Ln(o()),
          height: typeof i() == "string" ? i() : Ln(i()),
          transform: `translate(${n()}px, ${r()}px)`
        })
      ]), z(h, p);
    };
    se(u, (h) => {
      s() && h(d);
    });
  }
  return z(t, l), le(a);
}
ie(yu, { x: {}, y: {}, width: {}, height: {}, isVisible: {} }, [], [], !0);
var W2 = /* @__PURE__ */ ne("<div><!></div>");
const X2 = {
  hash: "svelte-ceq0zw",
  code: `.svelte-flow__selection-wrapper.svelte-ceq0zw {position:absolute;top:0;left:0;z-index:2000;pointer-events:all;}.svelte-flow__selection-wrapper.svelte-ceq0zw:focus,
  .svelte-flow__selection-wrapper.svelte-ceq0zw:focus-visible {outline:none;}`
};
function gf(t, e) {
  ae(e, !0), Je(t, X2);
  let n = g(e, "store", 15), r = g(e, "onnodedrag", 7), o = g(e, "onnodedragstart", 7), i = g(e, "onnodedragstop", 7), s = g(e, "onselectionclick", 7), a = g(e, "onselectioncontextmenu", 7), l = /* @__PURE__ */ me(void 0);
  Ie(() => {
    n().disableKeyboardA11y || c(l)?.focus({ preventScroll: !0 });
  });
  let u = /* @__PURE__ */ _(() => {
    if (n().selectionRectMode === "nodes") {
      n().nodes;
      const b = $i(n().nodeLookup, { filter: (k) => !!k.selected });
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
    Object.prototype.hasOwnProperty.call(Es, b.key) && (b.preventDefault(), n().moveSelectedNodes(Es[b.key], b.shiftKey ? 4 : 1));
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
  }, m = ce(), y = U(m);
  {
    var w = (b) => {
      var k = W2();
      k.__contextmenu = d, k.__click = h, k.__keydown = function(...x) {
        (n().disableKeyboardA11y ? void 0 : p)?.apply(this, x);
      };
      let O;
      var C = X(k);
      yu(C, { width: "100%", height: "100%", x: 0, y: 0 }), Z(k), Tt(k, (x, E) => of?.(x, E), () => ({
        disabled: !1,
        store: n(),
        onDrag: (x, E, V, L) => {
          r()?.({ event: x, targetNode: null, nodes: L });
        },
        onDragStart: (x, E, V, L) => {
          o()?.({ event: x, targetNode: null, nodes: L });
        },
        onDragStop: (x, E, V, L) => {
          i()?.({ event: x, targetNode: null, nodes: L });
        }
      })), Mt(k, (x) => K(l, x), () => c(l)), Ee(
        (x) => {
          Yt(k, 1, dr(["svelte-flow__selection-wrapper", n().noPanClass]), "svelte-ceq0zw"), Oe(k, "role", n().disableKeyboardA11y ? void 0 : "button"), Oe(k, "tabindex", n().disableKeyboardA11y ? void 0 : -1), O = Nt(k, "", O, x);
        },
        [
          () => ({
            width: Ln(c(u).width),
            height: Ln(c(u).height),
            transform: `translate(${c(u).x ?? ""}px, ${c(u).y ?? ""}px)`
          })
        ]
      ), z(b, k);
    };
    se(y, (b) => {
      n().selectionRectMode === "nodes" && c(u) && Yn(c(u).x) && Yn(c(u).y) && b(w);
    });
  }
  return z(t, m), le(v);
}
ro(["contextmenu", "click", "keydown"]);
ie(
  gf,
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
function q2(t) {
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
function _n(t, e) {
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
              (x, E) => x | q2(E),
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
  return n && (s = ht(t, o, i)), {
    update: (a) => {
      const { enabled: l = !0, type: u = "keydown" } = a;
      n && (!l || o !== u) ? s?.() : !n && l && (s = ht(t, u, i)), n = l, o = u, r = a.trigger;
    },
    destroy: () => {
      s?.();
    }
  };
}
function $t() {
  const t = /* @__PURE__ */ _($n), e = (i) => {
    const s = Zc(i) ? i : c(t).nodeLookup.get(i.id), a = s.parentId ? kb(s.position, s.measured, s.parentId, c(t).nodeLookup, c(t).nodeOrigin) : s.position, l = {
      ...s,
      position: a,
      width: s.measured?.width ?? s.width,
      height: s.measured?.height ?? s.height
    };
    return $o(l);
  };
  function n(i, s, a = { replace: !1 }) {
    c(t).nodes = it(() => c(t).nodes).map((l) => {
      if (l.id === i) {
        const u = typeof s == "function" ? s(l) : s;
        return a?.replace && Zc(u) ? u : { ...l, ...u };
      }
      return l;
    });
  }
  function r(i, s, a = { replace: !1 }) {
    c(t).edges = it(() => c(t).edges).map((l) => {
      if (l.id === i) {
        const u = typeof s == "function" ? s(l) : s;
        return a.replace && v2(u) ? u : { ...l, ...u };
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
    getNodes: (i) => i === void 0 ? c(t).nodes : Gc(c(t).nodeLookup, i),
    getEdge: (i) => c(t).edgeLookup.get(i),
    getEdges: (i) => i === void 0 ? c(t).edges : Gc(c(t).edgeLookup, i),
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
    getViewport: () => Fl(c(t).viewport),
    setCenter: async (i, s, a) => c(t).setCenter(i, s, a),
    fitView: (i) => c(t).fitView(i),
    fitBounds: async (i, s) => {
      if (!c(t).panZoom)
        return Promise.resolve(!1);
      const a = du(i, c(t).width, c(t).height, c(t).minZoom, c(t).maxZoom, s?.padding ?? 0.1);
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
      const l = Ac(i), u = l ? i : e(i);
      return u ? (a || c(t).nodes).filter((d) => {
        const h = c(t).nodeLookup.get(d.id);
        if (!h || !l && d.id === i.id)
          return !1;
        const p = $o(h), v = ui(p, u);
        return s && v > 0 || v >= p.width * p.height || v >= u.width * u.height;
      }) : [];
    },
    isNodeIntersecting: (i, s, a = !0) => {
      const l = Ac(i) ? i : e(i);
      if (!l)
        return !1;
      const u = ui(l, s);
      return a && u > 0 || u >= s.width * s.height || u >= l.width * l.height;
    },
    deleteElements: async ({ nodes: i = [], edges: s = [] }) => {
      const { nodes: a, edges: l } = await yb({
        nodesToRemove: i,
        edgesToRemove: s,
        nodes: c(t).nodes,
        edges: c(t).edges,
        onBeforeDelete: c(t).onbeforedelete
      });
      return a && (c(t).nodes = it(() => c(t).nodes).filter((u) => !a.some(({ id: d }) => d === u.id))), l && (c(t).edges = it(() => c(t).edges).filter((u) => !l.some(({ id: d }) => d === u.id))), (a.length > 0 || l.length > 0) && c(t).ondelete?.({ nodes: a, edges: l }), { deletedNodes: a, deletedEdges: l };
    },
    screenToFlowPosition: (i, s = { snapToGrid: !0 }) => {
      if (!c(t).domNode)
        return i;
      const a = s.snapToGrid ? c(t).snapGrid : !1, { x: l, y: u, zoom: d } = c(t).viewport, { x: h, y: p } = c(t).domNode.getBoundingClientRect(), v = { x: i.x - h, y: i.y - p };
      return _i(v, [l, u, d], a !== null, a || [1, 1]);
    },
    /**
     *
     * @param position
     * @returns
     */
    flowToScreenPosition: (i) => {
      if (!c(t).domNode)
        return i;
      const { x: s, y: a, zoom: l } = c(t).viewport, { x: u, y: d } = c(t).domNode.getBoundingClientRect(), h = Ps(i, [s, a, l]);
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
    getNodesBounds: (i) => fb(i, {
      nodeLookup: c(t).nodeLookup,
      nodeOrigin: c(t).nodeOrigin
    }),
    getHandleConnections: ({ type: i, id: s, nodeId: a }) => Array.from(c(t).connectionLookup.get(`${a}-${i}-${s ?? null}`)?.values() ?? [])
  };
}
function Gc(t, e) {
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
function vf(t, e) {
  ae(e, !0);
  let n = g(e, "store", 15), r = g(e, "selectionKey", 7, "Shift"), o = g(e, "multiSelectionKey", 23, () => Ir() ? "Meta" : "Control"), i = g(e, "deleteKey", 7, "Backspace"), s = g(e, "panActivationKey", 7, " "), a = g(e, "zoomActivationKey", 23, () => Ir() ? "Meta" : "Control"), { deleteElements: l } = $t();
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
    set multiSelectionKey(w = Ir() ? "Meta" : "Control") {
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
    set zoomActivationKey(w = Ir() ? "Meta" : "Control") {
      a(w), f();
    }
  };
  return ms("blur", Kt, v), ms("contextmenu", Kt, v), Tt(Kt, (w, b) => _n?.(w, b), () => ({
    trigger: p(r(), () => n(n().selectionKeyPressed = !0, !0)),
    type: "keydown"
  })), Tt(Kt, (w, b) => _n?.(w, b), () => ({
    trigger: p(r(), () => n(n().selectionKeyPressed = !1, !0)),
    type: "keyup"
  })), Tt(Kt, (w, b) => _n?.(w, b), () => ({
    trigger: p(o(), () => {
      n(n().multiselectionKeyPressed = !0, !0);
    }),
    type: "keydown"
  })), Tt(Kt, (w, b) => _n?.(w, b), () => ({
    trigger: p(o(), () => n(n().multiselectionKeyPressed = !1, !0)),
    type: "keyup"
  })), Tt(Kt, (w, b) => _n?.(w, b), () => ({
    trigger: p(i(), (w) => {
      !(w.originalEvent.ctrlKey || w.originalEvent.metaKey || w.originalEvent.shiftKey) && !Pp(w.originalEvent) && (n(n().deleteKeyPressed = !0, !0), m());
    }),
    type: "keydown"
  })), Tt(Kt, (w, b) => _n?.(w, b), () => ({
    trigger: p(i(), () => n(n().deleteKeyPressed = !1, !0)),
    type: "keyup"
  })), Tt(Kt, (w, b) => _n?.(w, b), () => ({
    trigger: p(s(), () => n(n().panActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), Tt(Kt, (w, b) => _n?.(w, b), () => ({
    trigger: p(s(), () => n(n().panActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), Tt(Kt, (w, b) => _n?.(w, b), () => ({
    trigger: p(a(), () => n(n().zoomActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), Tt(Kt, (w, b) => _n?.(w, b), () => ({
    trigger: p(a(), () => n(n().zoomActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), le(y);
}
ie(
  vf,
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
var Y2 = /* @__PURE__ */ ke('<path fill="none" class="svelte-flow__connection-path"></path>'), G2 = /* @__PURE__ */ ke('<svg class="svelte-flow__connectionline"><g><!></g></svg>');
function mf(t, e) {
  ae(e, !0);
  let n = g(e, "store", 15), r = g(e, "type", 7), o = g(e, "containerStyle", 7), i = g(e, "style", 7), s = g(e, "LineComponent", 7), a = /* @__PURE__ */ _(() => {
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
      case Xn.Bezier: {
        const [v] = Np(p);
        return v;
      }
      case Xn.Straight: {
        const [v] = zp(p);
        return v;
      }
      case Xn.Step:
      case Xn.SmoothStep: {
        const [v] = hu({
          ...p,
          borderRadius: r() === Xn.Step ? 0 : void 0
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
  }, u = ce(), d = U(u);
  {
    var h = (p) => {
      var v = G2(), m = X(v), y = X(m);
      {
        var w = (k) => {
          var O = ce(), C = U(O);
          St(C, s, (x, E) => {
            E(x, {});
          }), z(k, O);
        }, b = (k) => {
          var O = Y2();
          Ee(() => {
            Oe(O, "d", c(a)), Nt(O, i());
          }), z(k, O);
        };
        se(y, (k) => {
          s() ? k(w) : k(b, !1);
        });
      }
      Z(m), Z(v), Ee(
        (k) => {
          Oe(v, "width", n().width), Oe(v, "height", n().height), Nt(v, o()), Yt(m, 0, k);
        },
        [
          () => dr([
            "svelte-flow__connection",
            hb(n().connection.isValid)
          ])
        ]
      ), z(p, v);
    };
    se(d, (p) => {
      n().connection.inProgress && p(h);
    });
  }
  return z(t, u), le(l);
}
ie(
  mf,
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
function Pi(t, e) {
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
  ]), a = /* @__PURE__ */ _(() => `${n()}`.split("-"));
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
  return Pe(d, () => i() ?? je), Z(u), z(t, u), le(l);
}
ie(Pi, { position: {}, style: {}, class: {}, children: {} }, [], [], !0);
var J2 = /* @__PURE__ */ ne('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function yf(t, e) {
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
  }, i = ce(), s = U(i);
  {
    var a = (l) => {
      Pi(l, {
        get position() {
          return r();
        },
        class: "svelte-flow__attribution",
        "data-message": "Feel free to remove the attribution or check out how you could support us: https://svelteflow.dev/support-us",
        children: (u, d) => {
          var h = J2();
          z(u, h);
        },
        $$slots: { default: !0 }
      });
    };
    se(s, (l) => {
      n()?.hideAttribution || l(a);
    });
  }
  return z(t, i), le(o);
}
ie(yf, { proOptions: {}, position: {} }, [], [], !0);
var Q2 = /* @__PURE__ */ ne("<div><!></div>");
const ex = {
  hash: "svelte-152mfj7",
  code: ".svelte-flow.svelte-152mfj7 {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;background-color:var(--background-color, var(--background-color-default));}:root {--background-color-default: #fff;--background-pattern-color-default: #ddd;--minimap-mask-color-default: rgb(240, 240, 240, 0.6);--minimap-mask-stroke-color-default: none;--minimap-mask-stroke-width-default: 1;--controls-button-background-color-default: #fefefe;--controls-button-background-color-hover-default: #f4f4f4;--controls-button-color-default: inherit;--controls-button-color-hover-default: inherit;--controls-button-border-color-default: #eee;}"
};
function wf(t, e) {
  ae(e, !0), Je(t, ex);
  let n = g(e, "width", 7), r = g(e, "height", 7), o = g(e, "colorMode", 7), i = g(e, "domNode", 15), s = g(e, "clientWidth", 15), a = g(e, "clientHeight", 15), l = g(e, "children", 7), u = g(e, "rest", 7), d = /* @__PURE__ */ _(() => u().class), h = /* @__PURE__ */ _(() => Jm(u(), [
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
  }, m = Q2();
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
      [En]: w
    }),
    [
      () => ({ width: Ln(n()), height: Ln(r()) })
    ],
    void 0,
    void 0,
    "svelte-152mfj7"
  );
  var y = X(m);
  return Pe(y, () => l() ?? je), Z(m), Mt(m, (w) => i(w), () => i()), uc(m, "clientHeight", a), uc(m, "clientWidth", s), z(t, m), le(v);
}
ie(
  wf,
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
var tx = /* @__PURE__ */ ne('<div class="svelte-flow__viewport-back svelte-flow__container"></div> <!> <div class="svelte-flow__edge-labels svelte-flow__container"></div> <!> <!> <!> <div class="svelte-flow__viewport-front svelte-flow__container"></div>', 1), nx = /* @__PURE__ */ ne("<!> <!>", 1), rx = /* @__PURE__ */ ne("<!> <!> <!> <!> <!>", 1);
function bf(t, e) {
  ae(e, !0);
  let n = g(e, "width", 7), r = g(e, "height", 7), o = g(e, "proOptions", 7), i = g(e, "selectionKey", 7), s = g(e, "deleteKey", 7), a = g(e, "panActivationKey", 7), l = g(e, "multiSelectionKey", 7), u = g(e, "zoomActivationKey", 7), d = g(e, "paneClickDistance", 7, 1), h = g(e, "nodeClickDistance", 7, 1), p = g(e, "onmovestart", 7), v = g(e, "onmoveend", 7), m = g(e, "onmove", 7), y = g(e, "oninit", 7), w = g(e, "onnodeclick", 7), b = g(e, "onnodecontextmenu", 7), k = g(e, "onnodedrag", 7), O = g(e, "onnodedragstart", 7), C = g(e, "onnodedragstop", 7), x = g(e, "onnodepointerenter", 7), E = g(e, "onnodepointermove", 7), V = g(e, "onnodepointerleave", 7), L = g(e, "onselectionclick", 7), I = g(e, "onselectioncontextmenu", 7), D = g(e, "onselectionstart", 7), N = g(e, "onselectionend", 7), S = g(e, "onedgeclick", 7), T = g(e, "onedgecontextmenu", 7), $ = g(e, "onedgepointerenter", 7), P = g(e, "onedgepointerleave", 7), M = g(e, "onpaneclick", 7), j = g(e, "onpanecontextmenu", 7), q = g(e, "panOnScrollMode", 23, () => Kr.Free), G = g(e, "preventScrolling", 7, !0), A = g(e, "zoomOnScroll", 7, !0), Y = g(e, "zoomOnDoubleClick", 7, !0), ee = g(e, "zoomOnPinch", 7, !0), R = g(e, "panOnScroll", 7, !1), F = g(e, "panOnScrollSpeed", 7, 0.5), W = g(e, "panOnDrag", 7, !0), J = g(e, "selectionOnDrag", 7, !1), re = g(e, "connectionLineComponent", 7), H = g(e, "connectionLineStyle", 7), te = g(e, "connectionLineContainerStyle", 7), ve = g(e, "connectionLineType", 23, () => Xn.Bezier), he = g(e, "attributionPosition", 7), oe = g(e, "children", 7), ue = g(e, "nodes", 31, () => dt([])), fe = g(e, "edges", 31, () => dt([])), ye = g(e, "viewport", 31, () => {
  }), Ce = /* @__PURE__ */ De(e, [
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
  ]), de = ef({
    props: Ce,
    width: n(),
    height: r(),
    get nodes() {
      return ue();
    },
    set nodes(Q) {
      ue(Q);
    },
    get edges() {
      return fe();
    },
    set edges(Q) {
      fe(Q);
    },
    get viewport() {
      return ye();
    },
    set viewport(Q) {
      ye(Q);
    }
  });
  const xe = wn(Ns);
  xe && xe.setStore && xe.setStore(de), Zr(Ns, {
    provider: !1,
    getStore() {
      return de;
    }
  }), Ie(() => {
    const Q = { nodes: de.selectedNodes, edges: de.selectedEdges };
    it(() => e.onselectionchange)?.(Q);
    for (const Me of de.selectionChangeHandlers.values())
      Me(Q);
  }), bi(() => {
    de.reset();
  });
  var Ve = {
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
      return L();
    },
    set onselectionclick(Q) {
      L(Q), f();
    },
    get onselectioncontextmenu() {
      return I();
    },
    set onselectioncontextmenu(Q) {
      I(Q), f();
    },
    get onselectionstart() {
      return D();
    },
    set onselectionstart(Q) {
      D(Q), f();
    },
    get onselectionend() {
      return N();
    },
    set onselectionend(Q) {
      N(Q), f();
    },
    get onedgeclick() {
      return S();
    },
    set onedgeclick(Q) {
      S(Q), f();
    },
    get onedgecontextmenu() {
      return T();
    },
    set onedgecontextmenu(Q) {
      T(Q), f();
    },
    get onedgepointerenter() {
      return $();
    },
    set onedgepointerenter(Q) {
      $(Q), f();
    },
    get onedgepointerleave() {
      return P();
    },
    set onedgepointerleave(Q) {
      P(Q), f();
    },
    get onpaneclick() {
      return M();
    },
    set onpaneclick(Q) {
      M(Q), f();
    },
    get onpanecontextmenu() {
      return j();
    },
    set onpanecontextmenu(Q) {
      j(Q), f();
    },
    get panOnScrollMode() {
      return q();
    },
    set panOnScrollMode(Q = Kr.Free) {
      q(Q), f();
    },
    get preventScrolling() {
      return G();
    },
    set preventScrolling(Q = !0) {
      G(Q), f();
    },
    get zoomOnScroll() {
      return A();
    },
    set zoomOnScroll(Q = !0) {
      A(Q), f();
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
      return R();
    },
    set panOnScroll(Q = !1) {
      R(Q), f();
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
      return J();
    },
    set selectionOnDrag(Q = !1) {
      J(Q), f();
    },
    get connectionLineComponent() {
      return re();
    },
    set connectionLineComponent(Q) {
      re(Q), f();
    },
    get connectionLineStyle() {
      return H();
    },
    set connectionLineStyle(Q) {
      H(Q), f();
    },
    get connectionLineContainerStyle() {
      return te();
    },
    set connectionLineContainerStyle(Q) {
      te(Q), f();
    },
    get connectionLineType() {
      return ve();
    },
    set connectionLineType(Q = Xn.Bezier) {
      ve(Q), f();
    },
    get attributionPosition() {
      return he();
    },
    set attributionPosition(Q) {
      he(Q), f();
    },
    get children() {
      return oe();
    },
    set children(Q) {
      oe(Q), f();
    },
    get nodes() {
      return ue();
    },
    set nodes(Q = []) {
      ue(Q), f();
    },
    get edges() {
      return fe();
    },
    set edges(Q = []) {
      fe(Q), f();
    },
    get viewport() {
      return ye();
    },
    set viewport(Q = void 0) {
      ye(Q), f();
    }
  };
  return wf(t, {
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
      return Ce;
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
    children: (Q, Me) => {
      var Ne = rx(), Fe = U(Ne);
      vf(Fe, {
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
        set store(nt) {
          de = nt;
        }
      });
      var Le = B(Fe, 2);
      tf(Le, {
        get panOnScrollMode() {
          return q();
        },
        get preventScrolling() {
          return G();
        },
        get zoomOnScroll() {
          return A();
        },
        get zoomOnDoubleClick() {
          return Y();
        },
        get zoomOnPinch() {
          return ee();
        },
        get panOnScroll() {
          return R();
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
          return J();
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
        set store(nt) {
          de = nt;
        },
        children: (nt, ge) => {
          nf(nt, {
            get onpaneclick() {
              return M();
            },
            get onpanecontextmenu() {
              return j();
            },
            get onselectionstart() {
              return D();
            },
            get onselectionend() {
              return N();
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
              return de;
            },
            set store(ze) {
              de = ze;
            },
            children: (ze, st) => {
              var Be = nx(), tt = U(Be);
              rf(tt, {
                get store() {
                  return de;
                },
                set store(at) {
                  de = at;
                },
                children: (at, zt) => {
                  var ut = tx(), gt = B(U(ut), 2);
                  ff(gt, {
                    get onedgeclick() {
                      return S();
                    },
                    get onedgecontextmenu() {
                      return T();
                    },
                    get onedgepointerenter() {
                      return $();
                    },
                    get onedgepointerleave() {
                      return P();
                    },
                    get store() {
                      return de;
                    },
                    set store(lt) {
                      de = lt;
                    }
                  });
                  var At = B(gt, 4);
                  mf(At, {
                    get type() {
                      return ve();
                    },
                    get LineComponent() {
                      return re();
                    },
                    get containerStyle() {
                      return te();
                    },
                    get style() {
                      return H();
                    },
                    get store() {
                      return de;
                    },
                    set store(lt) {
                      de = lt;
                    }
                  });
                  var so = B(At, 2);
                  cf(so, {
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
                    set store(lt) {
                      de = lt;
                    }
                  });
                  var Do = B(so, 2);
                  gf(Do, {
                    get onselectionclick() {
                      return L();
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
                    set store(lt) {
                      de = lt;
                    }
                  }), Se(2), z(at, ut);
                },
                $$slots: { default: !0 }
              });
              var xt = B(tt, 2);
              {
                let at = /* @__PURE__ */ _(() => !!(de.selectionRect && de.selectionRectMode === "user")), zt = /* @__PURE__ */ _(() => de.selectionRect?.width), ut = /* @__PURE__ */ _(() => de.selectionRect?.height), gt = /* @__PURE__ */ _(() => de.selectionRect?.x), At = /* @__PURE__ */ _(() => de.selectionRect?.y);
                yu(xt, {
                  get isVisible() {
                    return c(at);
                  },
                  get width() {
                    return c(zt);
                  },
                  get height() {
                    return c(ut);
                  },
                  get x() {
                    return c(gt);
                  },
                  get y() {
                    return c(At);
                  }
                });
              }
              z(ze, Be);
            },
            $$slots: { default: !0 }
          });
        },
        $$slots: { default: !0 }
      });
      var Ze = B(Le, 2);
      yf(Ze, {
        get proOptions() {
          return o();
        },
        get position() {
          return he();
        }
      });
      var ft = B(Ze, 2);
      sf(ft, {
        get store() {
          return de;
        }
      });
      var bt = B(ft, 2);
      Pe(bt, () => oe() ?? je), z(Q, Ne);
    },
    $$slots: { default: !0 }
  }), le(Ve);
}
ie(
  bf,
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
function xf(t, e) {
  ae(e, !0);
  let n = g(e, "children", 7), r = /* @__PURE__ */ me(ef({ props: {}, nodes: [], edges: [] }));
  Zr(Ns, {
    provider: !0,
    getStore() {
      return c(r);
    },
    setStore: (a) => {
      K(r, a);
    }
  }), bi(() => {
    c(r).reset();
  });
  var o = {
    get children() {
      return n();
    },
    set children(a) {
      n(a), f();
    }
  }, i = ce(), s = U(i);
  return Pe(s, () => n() ?? je), z(t, i), le(o);
}
ie(xf, { children: {} }, [], [], !0);
var ox = /* @__PURE__ */ ne("<button><!></button>");
function Zo(t, e) {
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
  }, p = ox();
  Ue(p, () => ({
    type: "button",
    onclick: l(),
    class: ["svelte-flow__controls-button", n()],
    ...d,
    [En]: {
      "--xy-controls-button-background-color-props": r(),
      "--xy-controls-button-background-color-hover-props": o(),
      "--xy-controls-button-color-props": i(),
      "--xy-controls-button-color-hover-props": s(),
      "--xy-controls-button-border-color-props": a()
    }
  }));
  var v = X(p);
  return Pe(v, () => u() ?? je), Z(p), z(t, p), le(h);
}
ie(
  Zo,
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
var ix = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function kf(t) {
  var e = ix();
  z(t, e);
}
ie(kf, {}, [], [], !0);
var sx = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function Cf(t) {
  var e = sx();
  z(t, e);
}
ie(Cf, {}, [], [], !0);
var ax = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function $f(t) {
  var e = ax();
  z(t, e);
}
ie($f, {}, [], [], !0);
var lx = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function Sf(t) {
  var e = lx();
  z(t, e);
}
ie(Sf, {}, [], [], !0);
var ux = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function _f(t) {
  var e = ux();
  z(t, e);
}
ie(_f, {}, [], [], !0);
var cx = /* @__PURE__ */ ne("<!> <!>", 1), dx = /* @__PURE__ */ ne("<!> <!> <!> <!> <!> <!>", 1);
function Of(t, e) {
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
  ]), O = /* @__PURE__ */ _($n);
  const C = {
    bgColor: u(),
    bgColorHover: d(),
    color: h(),
    colorHover: p(),
    borderColor: v()
  };
  let x = /* @__PURE__ */ _(() => c(O).nodesDraggable || c(O).nodesConnectable || c(O).elementsSelectable), E = /* @__PURE__ */ _(() => c(O).viewport.zoom <= c(O).minZoom), V = /* @__PURE__ */ _(() => c(O).viewport.zoom >= c(O).maxZoom), L = /* @__PURE__ */ _(() => c(O).ariaLabelConfig), I = /* @__PURE__ */ _(() => r() === "horizontal" ? "horizontal" : "vertical");
  const D = () => {
    c(O).zoomIn();
  }, N = () => {
    c(O).zoomOut();
  }, S = () => {
    c(O).fitView(m());
  }, T = () => {
    let P = !c(x);
    c(O).nodesDraggable = P, c(O).nodesConnectable = P, c(O).elementsSelectable = P;
  };
  var $ = {
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
    let P = /* @__PURE__ */ _(() => [
      "svelte-flow__controls",
      c(I),
      l()
    ]);
    Pi(t, Re(
      {
        get class() {
          return c(P);
        },
        get position() {
          return n();
        },
        "data-testid": "svelte-flow__controls",
        get "aria-label"() {
          return c(L)["controls.ariaLabel"];
        },
        get style() {
          return a();
        }
      },
      () => k,
      {
        children: (M, j) => {
          var q = dx(), G = U(q);
          {
            var A = (he) => {
              var oe = ce(), ue = U(oe);
              Pe(ue, w), z(he, oe);
            };
            se(G, (he) => {
              w() && he(A);
            });
          }
          var Y = B(G, 2);
          {
            var ee = (he) => {
              var oe = cx(), ue = U(oe);
              Zo(ue, Re(
                {
                  onclick: D,
                  class: "svelte-flow__controls-zoomin",
                  get title() {
                    return c(L)["controls.zoomIn.ariaLabel"];
                  },
                  get "aria-label"() {
                    return c(L)["controls.zoomIn.ariaLabel"];
                  },
                  get disabled() {
                    return c(V);
                  }
                },
                () => C,
                {
                  children: (ye, Ce) => {
                    kf(ye);
                  },
                  $$slots: { default: !0 }
                }
              ));
              var fe = B(ue, 2);
              Zo(fe, Re(
                {
                  onclick: N,
                  class: "svelte-flow__controls-zoomout",
                  get title() {
                    return c(L)["controls.zoomOut.ariaLabel"];
                  },
                  get "aria-label"() {
                    return c(L)["controls.zoomOut.ariaLabel"];
                  },
                  get disabled() {
                    return c(E);
                  }
                },
                () => C,
                {
                  children: (ye, Ce) => {
                    Cf(ye);
                  },
                  $$slots: { default: !0 }
                }
              )), z(he, oe);
            };
            se(Y, (he) => {
              o() && he(ee);
            });
          }
          var R = B(Y, 2);
          {
            var F = (he) => {
              Zo(he, Re(
                {
                  class: "svelte-flow__controls-fitview",
                  onclick: S,
                  get title() {
                    return c(L)["controls.fitView.ariaLabel"];
                  },
                  get "aria-label"() {
                    return c(L)["controls.fitView.ariaLabel"];
                  }
                },
                () => C,
                {
                  children: (oe, ue) => {
                    $f(oe);
                  },
                  $$slots: { default: !0 }
                }
              ));
            };
            se(R, (he) => {
              i() && he(F);
            });
          }
          var W = B(R, 2);
          {
            var J = (he) => {
              Zo(he, Re(
                {
                  class: "svelte-flow__controls-interactive",
                  onclick: T,
                  get title() {
                    return c(L)["controls.interactive.ariaLabel"];
                  },
                  get "aria-label"() {
                    return c(L)["controls.interactive.ariaLabel"];
                  }
                },
                () => C,
                {
                  children: (oe, ue) => {
                    var fe = ce(), ye = U(fe);
                    {
                      var Ce = (xe) => {
                        _f(xe);
                      }, de = (xe) => {
                        Sf(xe);
                      };
                      se(ye, (xe) => {
                        c(x) ? xe(Ce) : xe(de, !1);
                      });
                    }
                    z(oe, fe);
                  },
                  $$slots: { default: !0 }
                }
              ));
            };
            se(W, (he) => {
              s() && he(J);
            });
          }
          var re = B(W, 2);
          {
            var H = (he) => {
              var oe = ce(), ue = U(oe);
              Pe(ue, y), z(he, oe);
            };
            se(re, (he) => {
              y() && he(H);
            });
          }
          var te = B(re, 2);
          {
            var ve = (he) => {
              var oe = ce(), ue = U(oe);
              Pe(ue, b), z(he, oe);
            };
            se(te, (he) => {
              b() && he(ve);
            });
          }
          z(M, q);
        },
        $$slots: { default: !0 }
      }
    ));
  }
  return le($);
}
ie(
  Of,
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
var Gn;
(function(t) {
  t.Lines = "lines", t.Dots = "dots", t.Cross = "cross";
})(Gn || (Gn = {}));
var hx = /* @__PURE__ */ ke("<circle></circle>");
function Pf(t, e) {
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
  }, i = hx();
  return Ee(() => {
    Oe(i, "cx", n()), Oe(i, "cy", n()), Oe(i, "r", n()), Yt(i, 0, dr(["svelte-flow__background-pattern", "dots", r()]));
  }), z(t, i), le(o);
}
ie(Pf, { radius: {}, class: {} }, [], [], !0);
var px = /* @__PURE__ */ ke("<path></path>");
function Ef(t, e) {
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
  }, a = px();
  return Ee(() => {
    Oe(a, "stroke-width", n()), Oe(a, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), Yt(a, 0, dr(["svelte-flow__background-pattern", o(), i()]));
  }), z(t, a), le(s);
}
ie(Ef, { lineWidth: {}, dimensions: {}, variant: {}, class: {} }, [], [], !0);
const fx = {
  [Gn.Dots]: 1,
  [Gn.Lines]: 1,
  [Gn.Cross]: 6
};
var gx = /* @__PURE__ */ ke('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
function Nf(t, e) {
  ae(e, !0);
  let n = g(e, "id", 7), r = g(e, "variant", 23, () => Gn.Dots), o = g(e, "gap", 7, 20), i = g(e, "size", 7), s = g(e, "lineWidth", 7, 1), a = g(e, "bgColor", 7), l = g(e, "patternColor", 7), u = g(e, "patternClass", 7), d = g(e, "class", 7), h = /* @__PURE__ */ _($n), p = /* @__PURE__ */ _(() => r() === Gn.Dots), v = /* @__PURE__ */ _(() => r() === Gn.Cross), m = /* @__PURE__ */ _(() => Array.isArray(o()) ? o() : [o(), o()]), y = /* @__PURE__ */ _(() => `background-pattern-${c(h).flowId}-${n() ?? ""}`), w = /* @__PURE__ */ _(() => [
    c(m)[0] * c(h).viewport.zoom || 1,
    c(m)[1] * c(h).viewport.zoom || 1
  ]), b = /* @__PURE__ */ _(() => (i() ?? fx[r()]) * c(h).viewport.zoom), k = /* @__PURE__ */ _(() => c(v) ? [c(b), c(b)] : c(w)), O = /* @__PURE__ */ _(() => c(p) ? [c(b) / 2, c(b) / 2] : [
    c(k)[0] / 2,
    c(k)[1] / 2
  ]);
  var C = {
    get id() {
      return n();
    },
    set id(S) {
      n(S), f();
    },
    get variant() {
      return r();
    },
    set variant(S = Gn.Dots) {
      r(S), f();
    },
    get gap() {
      return o();
    },
    set gap(S = 20) {
      o(S), f();
    },
    get size() {
      return i();
    },
    set size(S) {
      i(S), f();
    },
    get lineWidth() {
      return s();
    },
    set lineWidth(S = 1) {
      s(S), f();
    },
    get bgColor() {
      return a();
    },
    set bgColor(S) {
      a(S), f();
    },
    get patternColor() {
      return l();
    },
    set patternColor(S) {
      l(S), f();
    },
    get patternClass() {
      return u();
    },
    set patternClass(S) {
      u(S), f();
    },
    get class() {
      return d();
    },
    set class(S) {
      d(S), f();
    }
  }, x = gx();
  let E;
  var V = X(x), L = X(V);
  {
    var I = (S) => {
      {
        let T = /* @__PURE__ */ _(() => c(b) / 2);
        Pf(S, {
          get radius() {
            return c(T);
          },
          get class() {
            return u();
          }
        });
      }
    }, D = (S) => {
      Ef(S, {
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
    se(L, (S) => {
      c(p) ? S(I) : S(D, !1);
    });
  }
  Z(V);
  var N = B(V);
  return Z(x), Ee(() => {
    Yt(x, 0, dr([
      "svelte-flow__background",
      "svelte-flow__container",
      d()
    ])), E = Nt(x, "", E, {
      "--xy-background-color-props": a(),
      "--xy-background-pattern-color-props": l()
    }), Oe(V, "id", c(y)), Oe(V, "x", c(h).viewport.x % c(w)[0]), Oe(V, "y", c(h).viewport.y % c(w)[1]), Oe(V, "width", c(w)[0]), Oe(V, "height", c(w)[1]), Oe(V, "patternTransform", `translate(-${c(O)[0]},-${c(O)[1]})`), Oe(N, "fill", `url(#${c(y)})`);
  }), z(t, x), le(C);
}
ie(
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
var vx = /* @__PURE__ */ ke("<rect></rect>");
function Mf(t, e) {
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
  }, w = ce(), b = U(w);
  {
    var k = (C) => {
      const x = /* @__PURE__ */ _(m);
      var E = ce(), V = U(E);
      St(V, () => c(x), (L, I) => {
        I(L, {
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
      }), z(C, E);
    }, O = (C) => {
      var x = vx();
      let E, V;
      Ee(() => {
        E = Yt(x, 0, dr(["svelte-flow__minimap-node", v()]), null, E, { selected: p() }), Oe(x, "x", r()), Oe(x, "y", o()), Oe(x, "rx", a()), Oe(x, "ry", a()), Oe(x, "width", i()), Oe(x, "height", s()), Oe(x, "shape-rendering", u()), V = Nt(x, "", V, {
          fill: l(),
          stroke: d(),
          "stroke-width": h()
        });
      }), z(C, x);
    };
    se(b, (C) => {
      m() ? C(k) : C(O, !1);
    });
  }
  return z(t, w), le(y);
}
ie(
  Mf,
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
function mx(t, e) {
  const n = r2({
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
const Da = (t) => t instanceof Function ? t : () => t;
var yx = /* @__PURE__ */ ke("<title> </title>"), wx = /* @__PURE__ */ ke('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>'), bx = /* @__PURE__ */ ne('<svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>', 1);
function zf(t, e) {
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
  ]), E = /* @__PURE__ */ _($n), V = /* @__PURE__ */ _(() => c(E).ariaLabelConfig);
  const L = i() === void 0 ? void 0 : Da(i()), I = Da(o()), D = Da(s()), N = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  );
  let S = /* @__PURE__ */ _(() => `svelte-flow__minimap-desc-${c(E).flowId}`), T = /* @__PURE__ */ _(() => ({
    x: -c(E).viewport.x / c(E).viewport.zoom,
    y: -c(E).viewport.y / c(E).viewport.zoom,
    width: c(E).width / c(E).viewport.zoom,
    height: c(E).height / c(E).viewport.zoom
  })), $ = /* @__PURE__ */ _(() => $p($i(c(E).nodeLookup, { filter: (te) => !te.hidden }), c(T))), P = /* @__PURE__ */ _(() => c($).width / m()), M = /* @__PURE__ */ _(() => c($).height / y()), j = /* @__PURE__ */ _(() => Math.max(c(P), c(M))), q = /* @__PURE__ */ _(() => c(j) * m()), G = /* @__PURE__ */ _(() => c(j) * y()), A = /* @__PURE__ */ _(() => 5 * c(j)), Y = /* @__PURE__ */ _(() => c($).x - (c(q) - c($).width) / 2 - c(A)), ee = /* @__PURE__ */ _(() => c($).y - (c(G) - c($).height) / 2 - c(A)), R = /* @__PURE__ */ _(() => c(q) + c(A) * 2), F = /* @__PURE__ */ _(() => c(G) + c(A) * 2);
  const W = () => c(j);
  var J = {
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
  }, re = bx(), H = U(re);
  {
    let te = /* @__PURE__ */ _(() => ["svelte-flow__minimap", C()]);
    p1(H, () => ({ "--xy-minimap-background-color-props": d() })), Pi(H.lastChild, Re(
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
        children: (ve, he) => {
          var oe = ce(), ue = U(oe);
          {
            var fe = (ye) => {
              var Ce = wx();
              let de;
              var xe = X(Ce);
              {
                var Ve = (Ne) => {
                  var Fe = yx(), Le = X(Fe, !0);
                  Z(Fe), Ee(() => {
                    Oe(Fe, "id", c(S)), rt(Le, r() ?? c(V)["minimap.ariaLabel"]);
                  }), z(Ne, Fe);
                };
                se(xe, (Ne) => {
                  (r() ?? c(V)["minimap.ariaLabel"]) && Ne(Ve);
                });
              }
              var Q = B(xe);
              Ct(Q, 17, () => c(E).nodes, (Ne) => Ne.id, (Ne, Fe) => {
                const Le = /* @__PURE__ */ _(() => c(E).nodeLookup.get(c(Fe).id));
                var Ze = ce(), ft = U(Ze);
                {
                  var bt = (nt) => {
                    const ge = /* @__PURE__ */ _(() => Nr(c(Le)));
                    {
                      let ze = /* @__PURE__ */ _(() => L?.(c(Le))), st = /* @__PURE__ */ _(() => I(c(Le))), Be = /* @__PURE__ */ _(() => D(c(Le)));
                      Mf(nt, Re(
                        {
                          get id() {
                            return c(Le).id;
                          },
                          get x() {
                            return c(Le).internals.positionAbsolute.x;
                          },
                          get y() {
                            return c(Le).internals.positionAbsolute.y;
                          }
                        },
                        () => c(ge),
                        {
                          get selected() {
                            return c(Le).selected;
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
                            return c(st);
                          },
                          get strokeWidth() {
                            return l();
                          },
                          get shapeRendering() {
                            return N;
                          },
                          get class() {
                            return c(Be);
                          }
                        }
                      ));
                    }
                  };
                  se(ft, (nt) => {
                    c(Le) && Sp(c(Le)) && !c(Le).hidden && nt(bt);
                  });
                }
                z(Ne, Ze);
              });
              var Me = B(Q);
              Z(Ce), Tt(Ce, (Ne, Fe) => mx?.(Ne, Fe), () => ({
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
              })), Ee(() => {
                Oe(Ce, "width", m()), Oe(Ce, "height", y()), Oe(Ce, "viewBox", `${c(Y) ?? ""} ${c(ee) ?? ""} ${c(R) ?? ""} ${c(F) ?? ""}`), Oe(Ce, "aria-labelledby", c(S)), de = Nt(Ce, "", de, {
                  "--xy-minimap-mask-background-color-props": h(),
                  "--xy-minimap-mask-stroke-color-props": p(),
                  "--xy-minimap-mask-stroke-width-props": v() ? v() * c(j) : void 0
                }), Oe(Me, "d", `M${c(Y) - c(A)},${c(ee) - c(A)}h${c(R) + c(A) * 2}v${c(F) + c(A) * 2}h${-c(R) - c(A) * 2}z
      M${c(T).x ?? ""},${c(T).y ?? ""}h${c(T).width ?? ""}v${c(T).height ?? ""}h${-c(T).width}z`);
              }), z(ye, Ce);
            };
            se(ue, (ye) => {
              c(E).panZoom && ye(fe);
            });
          }
          z(ve, oe);
        },
        $$slots: { default: !0 }
      }
    )), Z(H);
  }
  return z(t, re), le(J);
}
ie(
  zf,
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
var xx = /* @__PURE__ */ ne("<div><!></div>");
function Af(t, e) {
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
  const u = $n(), { getNodesBounds: d } = $t(), h = wn("svelteflow__node_id");
  let p = /* @__PURE__ */ _(() => (u.nodes, (Array.isArray(n()) ? n() : [n() ?? h]).reduce(
    (x, E) => {
      const V = u.nodeLookup.get(E);
      return V && x.push(V), x;
    },
    []
  ))), v = /* @__PURE__ */ _(() => {
    const x = d(c(p));
    return x ? Vb(x, u.viewport, r(), i(), o()) : "";
  }), m = /* @__PURE__ */ _(() => c(p).length === 0 ? 1 : Math.max(...c(p).map((x) => (x.internals.z || 5) + 1))), y = /* @__PURE__ */ _(() => u.nodes.filter((x) => x.selected).length), w = /* @__PURE__ */ _(() => typeof s() == "boolean" ? s() : c(p).length === 1 && c(p)[0].selected && c(y) === 1);
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
  }, k = ce(), O = U(k);
  {
    var C = (x) => {
      var E = xx();
      Ue(
        E,
        (L, I) => ({
          class: "svelte-flow__node-toolbar",
          "data-id": L,
          ...l,
          [En]: I
        }),
        [
          () => c(p).reduce((L, I) => `${L}${I.id} `, "").trim(),
          () => ({
            display: Wp().value ? "none" : void 0,
            position: "absolute",
            transform: c(v),
            "z-index": c(m)
          })
        ]
      );
      var V = X(E);
      Pe(V, () => a() ?? je), Z(E), Tt(E, (L, I) => Zp?.(L, I), () => "root"), z(x, E);
    };
    se(O, (x) => {
      u.domNode && c(w) && c(p) && x(C);
    });
  }
  return z(t, k), le(b);
}
ie(
  Af,
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
function hr(t) {
  const e = /* @__PURE__ */ _($n), n = /* @__PURE__ */ _(() => c(e).nodes), r = /* @__PURE__ */ _(() => c(e).nodeLookup);
  let o = [], i = !0;
  const s = /* @__PURE__ */ _(() => {
    c(n);
    const a = [], l = Array.isArray(t), u = l ? t : [t];
    for (const d of u) {
      const h = c(r).get(d)?.internals.userNode;
      h && a.push({ id: h.id, type: h.type, data: h.data });
    }
    return (!qb(a, o) || i) && (o = a, i = !1), l ? o : o[0] ?? null;
  });
  return {
    get current() {
      return c(s);
    }
  };
}
const Uc = "tinyflow-component", kx = [
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
], Cx = [
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
], wu = [
  { label: "文字", value: "text" },
  { label: "图片", value: "image" },
  { label: "视频", value: "video" },
  { label: "音频", value: "audio" },
  { label: "文件", value: "file" },
  { label: "其他", value: "other" }
], $x = [
  { label: "单行输入框", value: "input" },
  { label: "多行输入框", value: "textarea" },
  { label: "下拉菜单", value: "select" },
  { label: "单选", value: "radio" },
  { label: "多选", value: "checkbox" }
], Sx = [
  { label: "单选", value: "radio" },
  { label: "多选", value: "checkbox" }
];
class _x {
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
    const e = document.createElement(Uc);
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
    const n = document.createElement(Uc);
    n.style.display = "block", n.style.width = "100%", n.style.height = "100%", n.classList.add("tf-theme-light"), n.options = this.options, n.onInit = (r) => {
      this.svelteFlowInstance = r;
    }, this.destroy(), this.rootEl.appendChild(n);
  }
  destroy() {
    for (; this.rootEl.firstChild; )
      this.rootEl.removeChild(this.rootEl.firstChild);
  }
}
const Ox = () => {
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
}, Xe = Ox(), Px = (t, e) => {
  const n = new Array(t.length + e.length);
  for (let r = 0; r < t.length; r++)
    n[r] = t[r];
  for (let r = 0; r < e.length; r++)
    n[t.length + r] = e[r];
  return n;
}, Ex = (t, e) => ({
  classGroupId: t,
  validator: e
}), Tf = (t = /* @__PURE__ */ new Map(), e = null, n) => ({
  nextPart: t,
  validators: e,
  classGroupId: n
}), Ms = "-", Jc = [], Nx = "arbitrary..", Mx = (t) => {
  const e = Ax(t), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = t;
  return {
    getClassGroupId: (o) => {
      if (o.startsWith("[") && o.endsWith("]"))
        return zx(o);
      const i = o.split(Ms), s = i[0] === "" && i.length > 1 ? 1 : 0;
      return Df(i, s, e);
    },
    getConflictingClassGroupIds: (o, i) => {
      if (i) {
        const s = r[o], a = n[o];
        return s ? a ? Px(a, s) : s : a || Jc;
      }
      return n[o] || Jc;
    }
  };
}, Df = (t, e, n) => {
  if (t.length - e === 0)
    return n.classGroupId;
  const r = t[e], o = n.nextPart.get(r);
  if (o) {
    const l = Df(t, e + 1, o);
    if (l) return l;
  }
  const i = n.validators;
  if (i === null)
    return;
  const s = e === 0 ? t.join(Ms) : t.slice(e).join(Ms), a = i.length;
  for (let l = 0; l < a; l++) {
    const u = i[l];
    if (u.validator(s))
      return u.classGroupId;
  }
}, zx = (t) => t.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const e = t.slice(1, -1), n = e.indexOf(":"), r = e.slice(0, n);
  return r ? Nx + r : void 0;
})(), Ax = (t) => {
  const {
    theme: e,
    classGroups: n
  } = t;
  return Tx(n, e);
}, Tx = (t, e) => {
  const n = Tf();
  for (const r in t) {
    const o = t[r];
    bu(o, n, r, e);
  }
  return n;
}, bu = (t, e, n, r) => {
  const o = t.length;
  for (let i = 0; i < o; i++) {
    const s = t[i];
    Dx(s, e, n, r);
  }
}, Dx = (t, e, n, r) => {
  if (typeof t == "string") {
    Vx(t, e, n);
    return;
  }
  if (typeof t == "function") {
    Lx(t, e, n, r);
    return;
  }
  Hx(t, e, n, r);
}, Vx = (t, e, n) => {
  const r = t === "" ? e : Vf(e, t);
  r.classGroupId = n;
}, Lx = (t, e, n, r) => {
  if (Ix(t)) {
    bu(t(r), e, n, r);
    return;
  }
  e.validators === null && (e.validators = []), e.validators.push(Ex(n, t));
}, Hx = (t, e, n, r) => {
  const o = Object.entries(t), i = o.length;
  for (let s = 0; s < i; s++) {
    const [a, l] = o[s];
    bu(l, Vf(e, a), n, r);
  }
}, Vf = (t, e) => {
  let n = t;
  const r = e.split(Ms), o = r.length;
  for (let i = 0; i < o; i++) {
    const s = r[i];
    let a = n.nextPart.get(s);
    a || (a = Tf(), n.nextPart.set(s, a)), n = a;
  }
  return n;
}, Ix = (t) => "isThemeGetter" in t && t.isThemeGetter === !0, Bx = (t) => {
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
}, al = "!", Qc = ":", Rx = [], ed = (t, e, n, r, o) => ({
  modifiers: t,
  hasImportantModifier: e,
  baseClassName: n,
  maybePostfixModifierPosition: r,
  isExternal: o
}), jx = (t) => {
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
        if (w === Qc) {
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
    h.endsWith(al) ? (p = h.slice(0, -1), v = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      h.startsWith(al) && (p = h.slice(1), v = !0)
    );
    const m = u && u > l ? u - l : void 0;
    return ed(i, v, p, m);
  };
  if (e) {
    const o = e + Qc, i = r;
    r = (s) => s.startsWith(o) ? i(s.slice(o.length)) : ed(Rx, !1, s, void 0, !0);
  }
  if (n) {
    const o = r;
    r = (i) => n({
      className: i,
      parseClassName: o
    });
  }
  return r;
}, Kx = (t) => {
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
}, Fx = (t) => ({
  cache: Bx(t.cacheSize),
  parseClassName: jx(t),
  sortModifiers: Kx(t),
  ...Mx(t)
}), Zx = /\s+/, Wx = (t, e) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o,
    sortModifiers: i
  } = e, s = [], a = t.trim().split(Zx);
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
    const k = p.length === 0 ? "" : p.length === 1 ? p[0] : i(p).join(":"), O = v ? k + al : k, C = O + b;
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
}, Xx = (...t) => {
  let e = 0, n, r, o = "";
  for (; e < t.length; )
    (n = t[e++]) && (r = Lf(n)) && (o && (o += " "), o += r);
  return o;
}, Lf = (t) => {
  if (typeof t == "string")
    return t;
  let e, n = "";
  for (let r = 0; r < t.length; r++)
    t[r] && (e = Lf(t[r])) && (n && (n += " "), n += e);
  return n;
}, ll = (t, ...e) => {
  let n, r, o, i;
  const s = (l) => {
    const u = e.reduce((d, h) => h(d), t());
    return n = Fx(u), r = n.cache.get, o = n.cache.set, i = a, a(l);
  }, a = (l) => {
    const u = r(l);
    if (u)
      return u;
    const d = Wx(l, n);
    return o(l, d), d;
  };
  return i = s, (...l) => i(Xx(...l));
}, qx = [], kt = (t) => {
  const e = (n) => n[t] || qx;
  return e.isThemeGetter = !0, e;
}, Hf = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, If = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Yx = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, Gx = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Ux = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Jx = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Qx = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, e7 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, fr = (t) => Yx.test(t), He = (t) => !!t && !Number.isNaN(Number(t)), gr = (t) => !!t && Number.isInteger(Number(t)), Va = (t) => t.endsWith("%") && He(t.slice(0, -1)), Fn = (t) => Gx.test(t), Bf = () => !0, t7 = (t) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Ux.test(t) && !Jx.test(t)
), xu = () => !1, n7 = (t) => Qx.test(t), r7 = (t) => e7.test(t), o7 = (t) => !we(t) && !be(t), i7 = (t) => Mr(t, Kf, xu), we = (t) => Hf.test(t), Tr = (t) => Mr(t, Ff, t7), td = (t) => Mr(t, p7, He), s7 = (t) => Mr(t, Wf, Bf), a7 = (t) => Mr(t, Zf, xu), nd = (t) => Mr(t, Rf, xu), l7 = (t) => Mr(t, jf, r7), Fi = (t) => Mr(t, Xf, n7), be = (t) => If.test(t), Io = (t) => oo(t, Ff), u7 = (t) => oo(t, Zf), rd = (t) => oo(t, Rf), c7 = (t) => oo(t, Kf), d7 = (t) => oo(t, jf), Zi = (t) => oo(t, Xf, !0), h7 = (t) => oo(t, Wf, !0), Mr = (t, e, n) => {
  const r = Hf.exec(t);
  return r ? r[1] ? e(r[1]) : n(r[2]) : !1;
}, oo = (t, e, n = !1) => {
  const r = If.exec(t);
  return r ? r[1] ? e(r[1]) : n : !1;
}, Rf = (t) => t === "position" || t === "percentage", jf = (t) => t === "image" || t === "url", Kf = (t) => t === "length" || t === "size" || t === "bg-size", Ff = (t) => t === "length", p7 = (t) => t === "number", Zf = (t) => t === "family-name", Wf = (t) => t === "number" || t === "weight", Xf = (t) => t === "shadow", ul = () => {
  const t = kt("color"), e = kt("font"), n = kt("text"), r = kt("font-weight"), o = kt("tracking"), i = kt("leading"), s = kt("breakpoint"), a = kt("container"), l = kt("spacing"), u = kt("radius"), d = kt("shadow"), h = kt("inset-shadow"), p = kt("text-shadow"), v = kt("drop-shadow"), m = kt("blur"), y = kt("perspective"), w = kt("aspect"), b = kt("ease"), k = kt("animate"), O = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], C = () => [
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
  ], x = () => [...C(), be, we], E = () => ["auto", "hidden", "clip", "visible", "scroll"], V = () => ["auto", "contain", "none"], L = () => [be, we, l], I = () => [fr, "full", "auto", ...L()], D = () => [gr, "none", "subgrid", be, we], N = () => ["auto", {
    span: ["full", gr, be, we]
  }, gr, be, we], S = () => [gr, "auto", be, we], T = () => ["auto", "min", "max", "fr", be, we], $ = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], P = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], M = () => ["auto", ...L()], j = () => [fr, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...L()], q = () => [fr, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...L()], G = () => [fr, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...L()], A = () => [t, be, we], Y = () => [...C(), rd, nd, {
    position: [be, we]
  }], ee = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], R = () => ["auto", "cover", "contain", c7, i7, {
    size: [be, we]
  }], F = () => [Va, Io, Tr], W = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    u,
    be,
    we
  ], J = () => ["", He, Io, Tr], re = () => ["solid", "dashed", "dotted", "double"], H = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], te = () => [He, Va, rd, nd], ve = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    m,
    be,
    we
  ], he = () => ["none", He, be, we], oe = () => ["none", He, be, we], ue = () => [He, be, we], fe = () => [fr, "full", ...L()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Fn],
      breakpoint: [Fn],
      color: [Bf],
      container: [Fn],
      "drop-shadow": [Fn],
      ease: ["in", "out", "in-out"],
      font: [o7],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [Fn],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [Fn],
      shadow: [Fn],
      spacing: ["px", He],
      text: [Fn],
      "text-shadow": [Fn],
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
        aspect: ["auto", "square", fr, we, be, w]
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
        columns: [He, we, be, a]
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
        z: [gr, "auto", be, we]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [fr, "full", "auto", a, ...L()]
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
        flex: [He, fr, "auto", "initial", "none", we]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", He, be, we]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", He, be, we]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [gr, "first", "last", "none", be, we]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": D()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: N()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": S()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": S()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": D()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: N()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": S()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": S()
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
        "auto-cols": T()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": T()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: L()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": L()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": L()
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
        p: L()
      }],
      /**
       * Padding Inline
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: L()
      }],
      /**
       * Padding Block
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: L()
      }],
      /**
       * Padding Inline Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: L()
      }],
      /**
       * Padding Inline End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: L()
      }],
      /**
       * Padding Block Start
       * @see https://tailwindcss.com/docs/padding
       */
      pbs: [{
        pbs: L()
      }],
      /**
       * Padding Block End
       * @see https://tailwindcss.com/docs/padding
       */
      pbe: [{
        pbe: L()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: L()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: L()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: L()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: L()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: M()
      }],
      /**
       * Margin Inline
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: M()
      }],
      /**
       * Margin Block
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: M()
      }],
      /**
       * Margin Inline Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: M()
      }],
      /**
       * Margin Inline End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: M()
      }],
      /**
       * Margin Block Start
       * @see https://tailwindcss.com/docs/margin
       */
      mbs: [{
        mbs: M()
      }],
      /**
       * Margin Block End
       * @see https://tailwindcss.com/docs/margin
       */
      mbe: [{
        mbe: M()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: M()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: M()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: M()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: M()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": L()
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
        "space-y": L()
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
        text: ["base", n, Io, Tr]
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
        font: [r, h7, s7]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Va, we]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [u7, a7, e]
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
        tracking: [o, be, we]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [He, "none", be, td]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          i,
          ...L()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", be, we]
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
        list: ["disc", "decimal", "none", be, we]
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
        placeholder: A()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: A()
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
        decoration: [He, "from-font", "auto", be, Tr]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: A()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [He, "auto", be, we]
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
        indent: L()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", be, we]
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
        content: ["none", be, we]
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
        bg: R()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, gr, be, we],
          radial: ["", be, we],
          conic: [gr, be, we]
        }, d7, l7]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: A()
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
        from: A()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: A()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: A()
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
        border: A()
      }],
      /**
       * Border Color Inline
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": A()
      }],
      /**
       * Border Color Block
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": A()
      }],
      /**
       * Border Color Inline Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": A()
      }],
      /**
       * Border Color Inline End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": A()
      }],
      /**
       * Border Color Block Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-bs": [{
        "border-bs": A()
      }],
      /**
       * Border Color Block End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-be": [{
        "border-be": A()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": A()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": A()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": A()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": A()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: A()
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
        "outline-offset": [He, be, we]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", He, Io, Tr]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: A()
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
          Zi,
          Fi
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: A()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", h, Zi, Fi]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": A()
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
        ring: A()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [He, Tr]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": A()
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
        "inset-ring": A()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", p, Zi, Fi]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": A()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [He, be, we]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...H(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": H()
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
        "mask-linear": [He]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": te()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": te()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": A()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": A()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": te()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": te()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": A()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": A()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": te()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": te()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": A()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": A()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": te()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": te()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": A()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": A()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": te()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": te()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": A()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": A()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": te()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": te()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": A()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": A()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": te()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": te()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": A()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": A()
      }],
      "mask-image-radial": [{
        "mask-radial": [be, we]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": te()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": te()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": A()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": A()
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
        "mask-conic": [He]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": te()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": te()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": A()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": A()
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
        mask: R()
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
        mask: ["none", be, we]
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
          be,
          we
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: ve()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [He, be, we]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [He, be, we]
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
          Zi,
          Fi
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": A()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", He, be, we]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [He, be, we]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", He, be, we]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [He, be, we]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", He, be, we]
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
          be,
          we
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": ve()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [He, be, we]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [He, be, we]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", He, be, we]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [He, be, we]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", He, be, we]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [He, be, we]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [He, be, we]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", He, be, we]
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
        "border-spacing": L()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": L()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": L()
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", be, we]
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
        duration: [He, "initial", be, we]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", b, be, we]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [He, be, we]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", k, be, we]
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
        perspective: [y, be, we]
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
        rotate: he()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": he()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": he()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": he()
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
        skew: ue()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": ue()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": ue()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [be, we, "", "none", "gpu", "cpu"]
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
        translate: fe()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": fe()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": fe()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": fe()
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
        accent: A()
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
        caret: A()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", be, we]
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
        "scroll-m": L()
      }],
      /**
       * Scroll Margin Inline
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": L()
      }],
      /**
       * Scroll Margin Block
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": L()
      }],
      /**
       * Scroll Margin Inline Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": L()
      }],
      /**
       * Scroll Margin Inline End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": L()
      }],
      /**
       * Scroll Margin Block Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mbs": [{
        "scroll-mbs": L()
      }],
      /**
       * Scroll Margin Block End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mbe": [{
        "scroll-mbe": L()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": L()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": L()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": L()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": L()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": L()
      }],
      /**
       * Scroll Padding Inline
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": L()
      }],
      /**
       * Scroll Padding Block
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": L()
      }],
      /**
       * Scroll Padding Inline Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": L()
      }],
      /**
       * Scroll Padding Inline End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": L()
      }],
      /**
       * Scroll Padding Block Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pbs": [{
        "scroll-pbs": L()
      }],
      /**
       * Scroll Padding Block End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pbe": [{
        "scroll-pbe": L()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": L()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": L()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": L()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": L()
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
        "will-change": ["auto", "scroll", "contents", "transform", be, we]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...A()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [He, Io, Tr, td]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...A()]
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
}, f7 = (t, {
  cacheSize: e,
  prefix: n,
  experimentalParseClassName: r,
  extend: o = {},
  override: i = {}
}) => (Wo(t, "cacheSize", e), Wo(t, "prefix", n), Wo(t, "experimentalParseClassName", r), Wi(t.theme, i.theme), Wi(t.classGroups, i.classGroups), Wi(t.conflictingClassGroups, i.conflictingClassGroups), Wi(t.conflictingClassGroupModifiers, i.conflictingClassGroupModifiers), Wo(t, "orderSensitiveModifiers", i.orderSensitiveModifiers), Xi(t.theme, o.theme), Xi(t.classGroups, o.classGroups), Xi(t.conflictingClassGroups, o.conflictingClassGroups), Xi(t.conflictingClassGroupModifiers, o.conflictingClassGroupModifiers), qf(t, o, "orderSensitiveModifiers"), t), Wo = (t, e, n) => {
  n !== void 0 && (t[e] = n);
}, Wi = (t, e) => {
  if (e)
    for (const n in e)
      Wo(t, n, e[n]);
}, Xi = (t, e) => {
  if (e)
    for (const n in e)
      qf(t, e, n);
}, qf = (t, e, n) => {
  const r = e[n];
  r !== void 0 && (t[n] = t[n] ? t[n].concat(r) : r);
}, g7 = (t, ...e) => typeof t == "function" ? ll(ul, t, ...e) : ll(() => f7(ul(), t), ...e), Yf = /* @__PURE__ */ ll(ul);
function vn(...t) {
  return Yf(Go(t));
}
var v7 = /\s+/g, m7 = (t) => typeof t != "string" || !t ? t : t.replace(v7, " ").trim(), zs = (...t) => {
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
  return e.length > 0 ? m7(e.join(" ")) : void 0;
}, od = (t) => t === !1 ? "false" : t === !0 ? "true" : t === 0 ? "0" : t, jt = (t) => {
  if (!t || typeof t != "object") return !0;
  for (const e in t) return !1;
  return !0;
}, y7 = (t, e) => {
  if (t === e) return !0;
  if (!t || !e) return !1;
  const n = Object.keys(t), r = Object.keys(e);
  if (n.length !== r.length) return !1;
  for (let o = 0; o < n.length; o++) {
    const i = n[o];
    if (!r.includes(i) || t[i] !== e[i]) return !1;
  }
  return !0;
}, w7 = (t, e) => {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      const r = e[n];
      n in t ? t[n] = zs(t[n], r) : t[n] = r;
    }
  return t;
}, Gf = (t, e) => {
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    Array.isArray(r) ? Gf(r, e) : r && e.push(r);
  }
}, Uf = (...t) => {
  const e = [];
  Gf(t, e);
  const n = [];
  for (let r = 0; r < e.length; r++)
    e[r] && n.push(e[r]);
  return n;
}, cl = (t, e) => {
  const n = {};
  for (const r in t) {
    const o = t[r];
    if (r in e) {
      const i = e[r];
      Array.isArray(o) || Array.isArray(i) ? n[r] = Uf(i, o) : typeof o == "object" && typeof i == "object" && o && i ? n[r] = cl(o, i) : n[r] = i + " " + o;
    } else
      n[r] = o;
  }
  for (const r in e)
    r in t || (n[r] = e[r]);
  return n;
}, b7 = {
  twMerge: !0,
  twMergeConfig: {}
};
function x7() {
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
var Wn = x7(), k7 = (t) => {
  const e = (n, r) => {
    const {
      extend: o = null,
      slots: i = {},
      variants: s = {},
      compoundVariants: a = [],
      compoundSlots: l = [],
      defaultVariants: u = {}
    } = n, d = { ...b7, ...r }, h = o?.base ? zs(o.base, n?.base) : n?.base, p = o?.variants && !jt(o.variants) ? cl(s, o.variants) : s, v = o?.defaultVariants && !jt(o.defaultVariants) ? { ...o.defaultVariants, ...u } : u;
    !jt(d.twMergeConfig) && !y7(d.twMergeConfig, Wn.cachedTwMergeConfig) && (Wn.didTwMergeConfigChange = !0, Wn.cachedTwMergeConfig = d.twMergeConfig);
    const m = jt(o?.slots), y = jt(i) ? {} : {
      // add "base" to the slots object
      base: zs(n?.base, m && o?.base),
      ...i
    }, w = m ? y : w7(
      { ...o?.slots },
      jt(y) ? { base: n?.base } : y
    ), b = jt(o?.compoundVariants) ? a : Uf(o?.compoundVariants, a), k = (C) => {
      if (jt(p) && jt(i) && m)
        return t(h, C?.class, C?.className)(d);
      if (b && !Array.isArray(b))
        throw new TypeError(
          `The "compoundVariants" prop must be an array. Received: ${typeof b}`
        );
      if (l && !Array.isArray(l))
        throw new TypeError(
          `The "compoundSlots" prop must be an array. Received: ${typeof l}`
        );
      const x = (T, $ = p, P = null, M = null) => {
        const j = $[T];
        if (!j || jt(j))
          return null;
        const q = M?.[T] ?? C?.[T];
        if (q === null) return null;
        const G = od(q);
        if (typeof G == "object")
          return null;
        const A = v?.[T], Y = G ?? od(A);
        return j[Y || "false"];
      }, E = () => {
        if (!p) return null;
        const T = Object.keys(p), $ = [];
        for (let P = 0; P < T.length; P++) {
          const M = x(T[P], p);
          M && $.push(M);
        }
        return $;
      }, V = (T, $) => {
        if (!p || typeof p != "object") return null;
        const P = [];
        for (const M in p) {
          const j = x(M, p, T, $), q = T === "base" && typeof j == "string" ? j : j && j[T];
          q && P.push(q);
        }
        return P;
      }, L = {};
      for (const T in C) {
        const $ = C[T];
        $ !== void 0 && (L[T] = $);
      }
      const I = (T, $) => {
        const P = typeof C?.[T] == "object" ? {
          [T]: C[T]?.initial
        } : {};
        return {
          ...v,
          ...L,
          ...P,
          ...$
        };
      }, D = (T = [], $) => {
        const P = [], M = T.length;
        for (let j = 0; j < M; j++) {
          const { class: q, className: G, ...A } = T[j];
          let Y = !0;
          const ee = I(null, $);
          for (const R in A) {
            const F = A[R], W = ee[R];
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
          Y && (q && P.push(q), G && P.push(G));
        }
        return P;
      }, N = (T) => {
        const $ = D(b, T);
        if (!Array.isArray($)) return $;
        const P = {}, M = t;
        for (let j = 0; j < $.length; j++) {
          const q = $[j];
          if (typeof q == "string")
            P.base = M(P.base, q)(d);
          else if (typeof q == "object")
            for (const G in q)
              P[G] = M(P[G], q[G])(d);
        }
        return P;
      }, S = (T) => {
        if (l.length < 1) return null;
        const $ = {}, P = I(null, T);
        for (let M = 0; M < l.length; M++) {
          const {
            slots: j = [],
            class: q,
            className: G,
            ...A
          } = l[M];
          if (!jt(A)) {
            let Y = !0;
            for (const ee in A) {
              const R = P[ee], F = A[ee];
              if (R === void 0 || (Array.isArray(F) ? !F.includes(R) : F !== R)) {
                Y = !1;
                break;
              }
            }
            if (!Y) continue;
          }
          for (let Y = 0; Y < j.length; Y++) {
            const ee = j[Y];
            $[ee] || ($[ee] = []), $[ee].push([q, G]);
          }
        }
        return $;
      };
      if (!jt(i) || !m) {
        const T = {};
        if (typeof w == "object" && !jt(w)) {
          const $ = t;
          for (const P in w)
            T[P] = (M) => {
              const j = N(M), q = S(M);
              return $(
                w[P],
                V(P, M),
                j ? j[P] : void 0,
                q ? q[P] : void 0,
                M?.class,
                M?.className
              )(d);
            };
        }
        return T;
      }
      return t(
        h,
        E(),
        D(b),
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
    createTV: (n) => (r, o) => e(r, o ? cl(n, o) : n)
  };
}, C7 = (t) => jt(t) ? Yf : g7({
  ...t,
  extend: {
    theme: t.theme,
    classGroups: t.classGroups,
    conflictingClassGroupModifiers: t.conflictingClassGroupModifiers,
    conflictingClassGroups: t.conflictingClassGroups,
    ...t.extend
  }
}), $7 = (t, e) => {
  const n = zs(t);
  return !n || !(e?.twMerge ?? !0) ? n : ((!Wn.cachedTwMerge || Wn.didTwMergeConfigChange) && (Wn.didTwMergeConfigChange = !1, Wn.cachedTwMerge = C7(Wn.cachedTwMergeConfig)), Wn.cachedTwMerge(n) || void 0);
}, S7 = (...t) => (e) => $7(t, e), { tv: _7 } = k7(S7);
const id = _7({
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
var O7 = /* @__PURE__ */ ne("<a><!></a>"), P7 = /* @__PURE__ */ ne("<button><!></button>");
function qe(t, e) {
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
  }, v = ce(), m = U(v);
  {
    var y = (b) => {
      var k = O7();
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
          () => vn(id({ variant: r(), size: o() }), n())
        ]
      );
      var O = X(k);
      Pe(O, () => u() ?? je), Z(k), Mt(k, (C) => i(C), () => i()), z(b, k);
    }, w = (b) => {
      var k = P7();
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
          () => vn(id({ variant: r(), size: o() }), n())
        ]
      );
      var O = X(k);
      Pe(O, () => u() ?? je), Z(k), Mt(k, (C) => i(C), () => i()), z(b, k);
    };
    se(m, (b) => {
      s() ? b(y) : b(w, !1);
    });
  }
  return z(t, v), le(p);
}
ie(
  qe,
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
function E7(t) {
  return typeof t == "function";
}
function Ei(t) {
  return t !== null && typeof t == "object";
}
const N7 = ["string", "number", "bigint", "boolean"];
function dl(t) {
  return t == null || N7.includes(typeof t) ? !0 : Array.isArray(t) ? t.every((e) => dl(e)) : typeof t == "object" ? Object.getPrototypeOf(t) === Object.prototype : !1;
}
const As = Symbol("box"), Jf = Symbol("is-writable");
function pe(t, e) {
  const n = /* @__PURE__ */ _(t);
  return e ? {
    [As]: !0,
    [Jf]: !0,
    get current() {
      return c(n);
    },
    set current(r) {
      e(r);
    }
  } : {
    [As]: !0,
    get current() {
      return t();
    }
  };
}
function Qf(t) {
  return Ei(t) && As in t;
}
function M7(t) {
  return Qf(t) ? t : E7(t) ? pe(t) : Mn(t);
}
function Mn(t) {
  let e = /* @__PURE__ */ me(dt(t));
  return {
    [As]: !0,
    [Jf]: !0,
    get current() {
      return c(e);
    },
    set current(n) {
      K(e, n, !0);
    }
  };
}
function eg(...t) {
  return function(e) {
    for (const n of t)
      if (n) {
        if (e.defaultPrevented)
          return;
        typeof n == "function" ? n.call(this, e) : n.current?.call(this, e);
      }
  };
}
var sd = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, z7 = /\n/g, A7 = /^\s*/, T7 = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, D7 = /^:\s*/, V7 = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, L7 = /^[;\s]*/, H7 = /^\s+|\s+$/g, I7 = `
`, ad = "/", ld = "*", Vr = "", B7 = "comment", R7 = "declaration";
function j7(t, e) {
  if (typeof t != "string")
    throw new TypeError("First argument must be a string");
  if (!t) return [];
  e = e || {};
  var n = 1, r = 1;
  function o(m) {
    var y = m.match(z7);
    y && (n += y.length);
    var w = m.lastIndexOf(I7);
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
    l(A7);
  }
  function d(m) {
    var y;
    for (m = m || []; y = h(); )
      y !== !1 && m.push(y);
    return m;
  }
  function h() {
    var m = i();
    if (!(ad != t.charAt(0) || ld != t.charAt(1))) {
      for (var y = 2; Vr != t.charAt(y) && (ld != t.charAt(y) || ad != t.charAt(y + 1)); )
        ++y;
      if (y += 2, Vr === t.charAt(y - 1))
        return a("End of comment missing");
      var w = t.slice(2, y - 2);
      return r += 2, o(w), t = t.slice(y), r += 2, m({
        type: B7,
        comment: w
      });
    }
  }
  function p() {
    var m = i(), y = l(T7);
    if (y) {
      if (h(), !l(D7)) return a("property missing ':'");
      var w = l(V7), b = m({
        type: R7,
        property: ud(y[0].replace(sd, Vr)),
        value: w ? ud(w[0].replace(sd, Vr)) : Vr
      });
      return l(L7), b;
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
function ud(t) {
  return t ? t.replace(H7, Vr) : Vr;
}
function K7(t, e) {
  let n = null;
  if (!t || typeof t != "string")
    return n;
  const r = j7(t), o = typeof e == "function";
  return r.forEach((i) => {
    if (i.type !== "declaration")
      return;
    const { property: s, value: a } = i;
    o ? e(s, a, i) : a && (n = n || {}, n[s] = a);
  }), n;
}
const F7 = /\d/, Z7 = ["-", "_", "/", "."];
function W7(t = "") {
  if (!F7.test(t))
    return t !== t.toLowerCase();
}
function X7(t) {
  const e = [];
  let n = "", r, o;
  for (const i of t) {
    const s = Z7.includes(i);
    if (s === !0) {
      e.push(n), n = "", r = void 0;
      continue;
    }
    const a = W7(i);
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
function tg(t) {
  return t ? X7(t).map((e) => Y7(e)).join("") : "";
}
function q7(t) {
  return G7(tg(t || ""));
}
function Y7(t) {
  return t ? t[0].toUpperCase() + t.slice(1) : "";
}
function G7(t) {
  return t ? t[0].toLowerCase() + t.slice(1) : "";
}
function Xo(t) {
  if (!t)
    return {};
  const e = {};
  function n(r, o) {
    if (r.startsWith("-moz-") || r.startsWith("-webkit-") || r.startsWith("-ms-") || r.startsWith("-o-")) {
      e[tg(r)] = o;
      return;
    }
    if (r.startsWith("--")) {
      e[r] = o;
      return;
    }
    e[q7(r)] = o;
  }
  return K7(t, n), e;
}
function Jo(...t) {
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
const J7 = U7(/[A-Z]/, (t) => `-${t.toLowerCase()}`);
function Q7(t) {
  if (!t || typeof t != "object" || Array.isArray(t))
    throw new TypeError(`expected an argument of type object, but got ${typeof t}`);
  return Object.keys(t).map((e) => `${J7(e)}: ${t[e]};`).join(`
`);
}
function ku(t = {}) {
  return Q7(t).replace(`
`, " ");
}
const e5 = [
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
], t5 = new Set(e5);
function n5(t) {
  return t5.has(t);
}
function Dn(...t) {
  const e = { ...t[0] };
  for (let n = 1; n < t.length; n++) {
    const r = t[n];
    if (r) {
      for (const o of Object.keys(r)) {
        const i = e[o], s = r[o], a = typeof i == "function", l = typeof s == "function";
        if (a && n5(o)) {
          const u = i, d = s;
          e[o] = eg(u, d);
        } else if (a && l)
          e[o] = Jo(i, s);
        else if (o === "class") {
          const u = dl(i), d = dl(s);
          u && d ? e[o] = Go(i, s) : u ? e[o] = Go(i) : d && (e[o] = Go(s));
        } else if (o === "style") {
          const u = typeof i == "object", d = typeof s == "object", h = typeof i == "string", p = typeof s == "string";
          if (u && d)
            e[o] = { ...i, ...s };
          else if (u && p) {
            const v = Xo(s);
            e[o] = { ...i, ...v };
          } else if (h && d) {
            const v = Xo(i);
            e[o] = { ...v, ...s };
          } else if (h && p) {
            const v = Xo(i), m = Xo(s);
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
  return typeof e.style == "object" && (e.style = ku(e.style).replaceAll(`
`, " ")), e.hidden === !1 && (e.hidden = void 0, delete e.hidden), e.disabled === !1 && (e.disabled = void 0, delete e.disabled), e;
}
const r5 = {
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
}, o5 = ku(r5), ng = typeof window < "u" ? window : void 0;
function i5(t) {
  let e = t.activeElement;
  for (; e?.shadowRoot; ) {
    const n = e.shadowRoot.activeElement;
    if (n === e)
      break;
    e = n;
  }
  return e;
}
let s5 = class {
  #e;
  #t;
  constructor(t = {}) {
    const { window: e = ng, document: n = e?.document } = t;
    e !== void 0 && (this.#e = n, this.#t = Qr((r) => {
      const o = ht(e, "focusin", r), i = ht(e, "focusout", r);
      return () => {
        o(), i();
      };
    }));
  }
  get current() {
    return this.#t?.(), this.#e ? i5(this.#e) : null;
  }
};
new s5();
function a5(t) {
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
    return Om(this.#t);
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
    return Zr(this.#t, e);
  }
}
function l5(t, e) {
  switch (t) {
    case "post":
      Ie(e);
      break;
    case "pre":
      Ft(e);
      break;
  }
}
function rg(t, e, n, r = {}) {
  const { lazy: o = !1 } = r;
  let i = !o, s = Array.isArray(t) ? [] : void 0;
  l5(e, () => {
    const a = Array.isArray(t) ? t.map((u) => u()) : t();
    if (!i) {
      i = !0, s = a;
      return;
    }
    const l = it(() => n(a, s));
    return s = a, l;
  });
}
function wt(t, e, n) {
  rg(t, "post", e, n);
}
function u5(t, e, n) {
  rg(t, "pre", e, n);
}
wt.pre = u5;
function cd(t) {
  return a5(t) ? t() : t;
}
class c5 {
  // no need to use `$state` here since we are using createSubscriber
  #e = { width: 0, height: 0 };
  #t = !1;
  #n;
  #r;
  #o;
  // we use a derived here to extract the width so that if the width doesn't change we don't get a state update
  // which we would get if we would just use a getter since the version of the subscriber will be changing
  #i = /* @__PURE__ */ _(() => (c(this.#s)?.(), this.getSize().width));
  // we use a derived here to extract the height so that if the height doesn't change we don't get a state update
  // which we would get if we would just use a getter since the version of the subscriber will be changing
  #a = /* @__PURE__ */ _(() => (c(this.#s)?.(), this.getSize().height));
  // we need to use a derived here because the class will be created before the node is bound to the ref
  #s = /* @__PURE__ */ _(() => {
    const e = cd(this.#r);
    if (e)
      return Qr((n) => {
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
    this.#o = n.window ?? ng, this.#n = n, this.#r = e, this.#e = { width: 0, height: 0 };
  }
  calculateSize() {
    const e = cd(this.#r);
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
class d5 {
  #e = () => {
  };
  #t = /* @__PURE__ */ _(() => this.#e());
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
function zo(t) {
  Ie(() => () => {
    t();
  });
}
function h5(t) {
  Ie(() => it(() => t()));
}
function p5(t, e) {
  return setTimeout(e, t);
}
function Ni(t) {
  Mh().then(t);
}
const f5 = 1, g5 = 9, v5 = 11;
function hl(t) {
  return Ei(t) && t.nodeType === f5 && typeof t.nodeName == "string";
}
function og(t) {
  return Ei(t) && t.nodeType === g5;
}
function m5(t) {
  return Ei(t) && t.constructor?.name === "VisualViewport";
}
function y5(t) {
  return Ei(t) && t.nodeType !== void 0;
}
function ig(t) {
  return y5(t) && t.nodeType === v5 && "host" in t;
}
function w5(t, e) {
  if (!t || !e || !hl(t) || !hl(e))
    return !1;
  const n = e.getRootNode?.();
  if (t === e || t.contains(e))
    return !0;
  if (n && ig(n)) {
    let r = e;
    for (; r; ) {
      if (t === r)
        return !0;
      r = r.parentNode || r.host;
    }
  }
  return !1;
}
function b5(t) {
  return og(t) ? t : m5(t) ? t.document : t?.ownerDocument ?? document;
}
function sg(t) {
  return ig(t) ? sg(t.host) : og(t) ? t.defaultView ?? window : hl(t) ? t.ownerDocument?.defaultView ?? window : window;
}
function x5(t) {
  let e = t.activeElement;
  for (; e?.shadowRoot; ) {
    const n = e.shadowRoot.activeElement;
    if (n === e)
      break;
    e = n;
  }
  return e;
}
class Mi {
  element;
  #e = /* @__PURE__ */ _(() => this.element.current ? this.element.current.getRootNode() ?? document : document);
  get root() {
    return c(this.#e);
  }
  set root(e) {
    K(this.#e, e);
  }
  constructor(e) {
    typeof e == "function" ? this.element = pe(e) : this.element = e;
  }
  getDocument = () => b5(this.root);
  getWindow = () => this.getDocument().defaultView ?? window;
  getActiveElement = () => x5(this.root);
  isActiveElement = (e) => e === this.getActiveElement();
  getElementById(e) {
    return this.root.getElementById(e);
  }
  querySelector = (e) => this.root ? this.root.querySelector(e) : null;
  querySelectorAll = (e) => this.root ? this.root.querySelectorAll(e) : [];
  setTimeout = (e, n) => this.getWindow().setTimeout(e, n);
  clearTimeout = (e) => this.getWindow().clearTimeout(e);
}
function kr(t, e) {
  return {
    [d1()]: (n) => Qf(t) ? (t.current = n, it(() => e?.(n)), () => {
      "isConnected" in n && n.isConnected || (t.current = null, e?.(null));
    }) : (t(n), it(() => e?.(n)), () => {
      "isConnected" in n && n.isConnected || (t(null), e?.(null));
    })
  };
}
function pl(t) {
  return t ? "true" : "false";
}
function Ts(t) {
  return t ? "" : void 0;
}
function dd(t) {
  return t ? !0 : void 0;
}
function ag(t) {
  return t ? "open" : "closed";
}
function k5(t, e) {
  return e ? "mixed" : t ? "true" : "false";
}
class C5 {
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
function Cu(t) {
  const e = new C5(t);
  return {
    ...e.attrs,
    selector: e.selector,
    getAttr: e.getAttr
  };
}
const qo = "ArrowDown", uo = "ArrowUp", lg = "End", fl = "Enter", $5 = "Escape", ug = "Home", cg = "PageDown", dg = "PageUp", as = " ", hd = "Tab", hg = typeof document < "u", gl = S5();
function S5() {
  return hg && window?.navigator?.userAgent && (/iP(ad|hone|od)/.test(window.navigator.userAgent) || // The new iPad Pro Gen3 does not identify itself as iPad, but as Macintosh.
  window?.navigator?.maxTouchPoints > 2 && /iPad|Macintosh/.test(window?.navigator.userAgent));
}
function vl(t) {
  return t instanceof HTMLElement;
}
function _5(t) {
  return t instanceof Element || t instanceof SVGElement;
}
function O5(t) {
  return t !== null;
}
class P5 {
  #e;
  #t = null;
  constructor(e) {
    this.#e = e, zo(() => this.#n());
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
    this.#e.afterTick ? Ni(n) : n();
  }
}
class E5 {
  #e;
  #t;
  #n;
  #r = /* @__PURE__ */ me(!1);
  constructor(e) {
    this.#e = e, K(this.#r, e.open.current, !0), this.#t = e.enabled ?? !0, this.#n = new P5({ ref: this.#e.ref, afterTick: this.#e.open }), wt(() => this.#e.open.current, (n) => {
      n && K(this.#r, !0), this.#t && this.#n.run(() => {
        n === this.#e.open.current && (this.#e.open.current || K(this.#r, !1), this.#e.onComplete?.());
      });
    });
  }
  get shouldRender() {
    return c(this.#r);
  }
}
function Ke() {
}
function Hn(t, e) {
  return `bits-${t}`;
}
function pg(t, e) {
  ae(e, !0);
  const n = g(e, "children", 7);
  var r = {
    get children() {
      return n();
    },
    set children(s) {
      n(s), f();
    }
  }, o = ce(), i = U(o);
  return h1(i, n, (s) => {
    var a = ce(), l = U(a);
    Pe(l, () => n() ?? je), z(s, a);
  }), z(t, o), le(r);
}
ie(pg, { children: {} }, [], [], !0);
const N5 = new zr("BitsConfig");
function M5() {
  const t = new z5(null, {});
  return N5.getOr(t).opts;
}
class z5 {
  opts;
  constructor(e, n) {
    const r = A5(e, n);
    this.opts = {
      defaultPortalTo: r((o) => o.defaultPortalTo),
      defaultLocale: r((o) => o.defaultLocale)
    };
  }
}
function A5(t, e) {
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
    const r = M5();
    return pe(() => {
      const o = n();
      if (o !== void 0)
        return o;
      const i = t(r).current;
      return i !== void 0 ? i : e;
    });
  };
}
const D5 = T5((t) => t.defaultPortalTo, "body");
function ml(t, e) {
  ae(e, !0);
  let n = g(e, "to", 7), r = g(e, "children", 7), o = g(e, "disabled", 7);
  const i = D5(() => n()), s = Pm();
  let a = /* @__PURE__ */ _(l);
  function l() {
    if (!hg || o()) return null;
    let y = null;
    return typeof i.current == "string" ? y = document.querySelector(i.current) : y = i.current, y;
  }
  let u;
  function d() {
    u && (Vh(u), u = null);
  }
  wt([() => c(a), () => o()], ([y, w]) => {
    if (!y || w) {
      d();
      return;
    }
    return u = Ql(pg, { target: y, props: { children: r() }, context: s }), () => {
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
  }, p = ce(), v = U(p);
  {
    var m = (y) => {
      var w = ce(), b = U(w);
      Pe(b, () => r() ?? je), z(y, w);
    };
    se(v, (y) => {
      o() && y(m);
    });
  }
  return z(t, p), le(h);
}
ie(ml, { to: {}, children: {}, disabled: {} }, [], [], !0);
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
function fg(t, e) {
  return t === e || t.contains(e);
}
function gg(t) {
  return t?.ownerDocument ?? document;
}
function V5(t, e) {
  const { clientX: n, clientY: r } = t, o = e.getBoundingClientRect();
  return n < o.left || n > o.right || r < o.top || r > o.bottom;
}
var vg = ["input:not([inert]):not([inert] *)", "select:not([inert]):not([inert] *)", "textarea:not([inert]):not([inert] *)", "a[href]:not([inert]):not([inert] *)", "button:not([inert]):not([inert] *)", "[tabindex]:not(slot):not([inert]):not([inert] *)", "audio[controls]:not([inert]):not([inert] *)", "video[controls]:not([inert]):not([inert] *)", '[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)', "details>summary:first-of-type:not([inert]):not([inert] *)", "details:not([inert]):not([inert] *)"], yl = /* @__PURE__ */ vg.join(","), mg = typeof Element > "u", _o = mg ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, Ds = !mg && Element.prototype.getRootNode ? function(t) {
  var e;
  return t == null || (e = t.getRootNode) === null || e === void 0 ? void 0 : e.call(t);
} : function(t) {
  return t?.ownerDocument;
}, Vs = function(t, e) {
  var n;
  e === void 0 && (e = !0);
  var r = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "inert"), o = r === "" || r === "true", i = o || e && t && // closest does not exist on shadow roots, so we fall back to a manual
  // lookup upward, in case it is not defined.
  (typeof t.closest == "function" ? t.closest("[inert]") : Vs(t.parentNode));
  return i;
}, L5 = function(t) {
  var e, n = t == null || (e = t.getAttribute) === null || e === void 0 ? void 0 : e.call(t, "contenteditable");
  return n === "" || n === "true";
}, yg = function(t, e, n) {
  if (Vs(t))
    return [];
  var r = Array.prototype.slice.apply(t.querySelectorAll(yl));
  return e && _o.call(t, yl) && r.unshift(t), r = r.filter(n), r;
}, Ls = function(t, e, n) {
  for (var r = [], o = Array.from(t); o.length; ) {
    var i = o.shift();
    if (!Vs(i, !1))
      if (i.tagName === "SLOT") {
        var s = i.assignedElements(), a = s.length ? s : i.children, l = Ls(a, !0, n);
        n.flatten ? r.push.apply(r, l) : r.push({
          scopeParent: i,
          candidates: l
        });
      } else {
        var u = _o.call(i, yl);
        u && n.filter(i) && (e || !t.includes(i)) && r.push(i);
        var d = i.shadowRoot || // check for an undisclosed shadow
        typeof n.getShadowRoot == "function" && n.getShadowRoot(i), h = !Vs(d, !1) && (!n.shadowRootFilter || n.shadowRootFilter(i));
        if (d && h) {
          var p = Ls(d === !0 ? i.children : d.children, !0, n);
          n.flatten ? r.push.apply(r, p) : r.push({
            scopeParent: i,
            candidates: p
          });
        } else
          o.unshift.apply(o, i.children);
      }
  }
  return r;
}, wg = function(t) {
  return !isNaN(parseInt(t.getAttribute("tabindex"), 10));
}, bg = function(t) {
  if (!t)
    throw new Error("No node provided");
  return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || L5(t)) && !wg(t) ? 0 : t.tabIndex;
}, H5 = function(t, e) {
  var n = bg(t);
  return n < 0 && e && !wg(t) ? 0 : n;
}, I5 = function(t, e) {
  return t.tabIndex === e.tabIndex ? t.documentOrder - e.documentOrder : t.tabIndex - e.tabIndex;
}, xg = function(t) {
  return t.tagName === "INPUT";
}, B5 = function(t) {
  return xg(t) && t.type === "hidden";
}, R5 = function(t) {
  var e = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(n) {
    return n.tagName === "SUMMARY";
  });
  return e;
}, j5 = function(t, e) {
  for (var n = 0; n < t.length; n++)
    if (t[n].checked && t[n].form === e)
      return t[n];
}, K5 = function(t) {
  if (!t.name)
    return !0;
  var e = t.form || Ds(t), n = function(i) {
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
  var o = j5(r, t.form);
  return !o || o === t;
}, F5 = function(t) {
  return xg(t) && t.type === "radio";
}, Z5 = function(t) {
  return F5(t) && !K5(t);
}, W5 = function(t) {
  var e, n = t && Ds(t), r = (e = n) === null || e === void 0 ? void 0 : e.host, o = !1;
  if (n && n !== t) {
    var i, s, a;
    for (o = !!((i = r) !== null && i !== void 0 && (s = i.ownerDocument) !== null && s !== void 0 && s.contains(r) || t != null && (a = t.ownerDocument) !== null && a !== void 0 && a.contains(t)); !o && r; ) {
      var l, u, d;
      n = Ds(r), r = (l = n) === null || l === void 0 ? void 0 : l.host, o = !!((u = r) !== null && u !== void 0 && (d = u.ownerDocument) !== null && d !== void 0 && d.contains(r));
    }
  }
  return o;
}, fd = function(t) {
  var e = t.getBoundingClientRect(), n = e.width, r = e.height;
  return n === 0 && r === 0;
}, X5 = function(t, e) {
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
  var i = _o.call(t, "details>summary:first-of-type"), s = i ? t.parentElement : t;
  if (_o.call(s, "details:not([open]) *"))
    return !0;
  if (!n || n === "full" || // full-native can run this branch when it falls through in case
  // Element#checkVisibility is unsupported
  n === "full-native" || n === "legacy-full") {
    if (typeof r == "function") {
      for (var a = t; t; ) {
        var l = t.parentElement, u = Ds(t);
        if (l && !l.shadowRoot && r(l) === !0)
          return fd(t);
        t.assignedSlot ? t = t.assignedSlot : !l && u !== t.ownerDocument ? t = u.host : t = l;
      }
      t = a;
    }
    if (W5(t))
      return !t.getClientRects().length;
    if (n !== "legacy-full")
      return !0;
  } else if (n === "non-zero-area")
    return fd(t);
  return !1;
}, q5 = function(t) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
    for (var e = t.parentElement; e; ) {
      if (e.tagName === "FIELDSET" && e.disabled) {
        for (var n = 0; n < e.children.length; n++) {
          var r = e.children.item(n);
          if (r.tagName === "LEGEND")
            return _o.call(e, "fieldset[disabled] *") ? !0 : !r.contains(t);
        }
        return !0;
      }
      e = e.parentElement;
    }
  return !1;
}, Hs = function(t, e) {
  return !(e.disabled || B5(e) || X5(e, t) || // For a details element with a summary, the summary element gets the focus
  R5(e) || q5(e));
}, gd = function(t, e) {
  return !(Z5(e) || bg(e) < 0 || !Hs(t, e));
}, Y5 = function(t) {
  var e = parseInt(t.getAttribute("tabindex"), 10);
  return !!(isNaN(e) || e >= 0);
}, kg = function(t) {
  var e = [], n = [];
  return t.forEach(function(r, o) {
    var i = !!r.scopeParent, s = i ? r.scopeParent : r, a = H5(s, i), l = i ? kg(r.candidates) : s;
    a === 0 ? i ? e.push.apply(e, l) : e.push(s) : n.push({
      documentOrder: o,
      tabIndex: a,
      item: r,
      isScope: i,
      content: l
    });
  }), n.sort(I5).reduce(function(r, o) {
    return o.isScope ? r.push.apply(r, o.content) : r.push(o.content), r;
  }, []).concat(e);
}, G5 = function(t, e) {
  e = e || {};
  var n;
  return e.getShadowRoot ? n = Ls([t], e.includeContainer, {
    filter: gd.bind(null, e),
    flatten: !1,
    getShadowRoot: e.getShadowRoot,
    shadowRootFilter: Y5
  }) : n = yg(t, e.includeContainer, gd.bind(null, e)), kg(n);
}, U5 = function(t, e) {
  e = e || {};
  var n;
  return e.getShadowRoot ? n = Ls([t], e.includeContainer, {
    filter: Hs.bind(null, e),
    flatten: !0,
    getShadowRoot: e.getShadowRoot
  }) : n = yg(t, e.includeContainer, Hs.bind(null, e)), n;
}, J5 = /* @__PURE__ */ vg.concat("iframe:not([inert]):not([inert] *)").join(","), Q5 = function(t, e) {
  if (e = e || {}, !t)
    throw new Error("No node provided");
  return _o.call(t, J5) === !1 ? !1 : Hs(e, t);
};
function e3(t, e, n = !0) {
  if (!(t.length === 0 || e < 0 || e >= t.length))
    return t.length === 1 && e === 0 ? t[0] : e === t.length - 1 ? n ? t[0] : void 0 : t[e + 1];
}
function t3(t, e, n = !0) {
  if (!(t.length === 0 || e < 0 || e >= t.length))
    return t.length === 1 && e === 0 ? t[0] : e === 0 ? n ? t[t.length - 1] : void 0 : t[e - 1];
}
function n3(t, e, n, r = !0) {
  if (t.length === 0 || e < 0 || e >= t.length)
    return;
  let o = e + n;
  return r ? o = (o % t.length + t.length) % t.length : o = Math.max(0, Math.min(o, t.length - 1)), t[o];
}
function r3(t, e, n, r = !0) {
  if (t.length === 0 || e < 0 || e >= t.length)
    return;
  let o = e - n;
  return r ? o = (o % t.length + t.length) % t.length : o = Math.max(0, Math.min(o, t.length - 1)), t[o];
}
function $u(t, e, n) {
  const r = e.toLowerCase();
  if (r.endsWith(" ")) {
    const u = r.slice(0, -1);
    if (t.filter((p) => p.toLowerCase().startsWith(u)).length <= 1)
      return $u(t, u, n);
    const d = n?.toLowerCase();
    if (d && d.startsWith(u) && d.charAt(u.length) === " " && e.trim() === u)
      return n;
    const h = t.filter((p) => p.toLowerCase().startsWith(r));
    if (h.length > 0) {
      const p = n ? t.indexOf(n) : -1;
      return vd(h, Math.max(p, 0)).find((v) => v !== n) || n;
    }
  }
  const o = e.length > 1 && Array.from(e).every((u) => u === e[0]) ? e[0] : e, i = o.toLowerCase(), s = n ? t.indexOf(n) : -1;
  let a = vd(t, Math.max(s, 0));
  o.length === 1 && (a = a.filter((u) => u !== n));
  const l = a.find((u) => u?.toLowerCase().startsWith(i));
  return l !== n ? l : void 0;
}
function vd(t, e) {
  return t.map((n, r) => t[(e + r) % t.length]);
}
const o3 = { afterMs: 1e4, onChange: Ke };
function Cg(t, e) {
  const { afterMs: n, onChange: r, getWindow: o } = { ...o3, ...e };
  let i = null, s = /* @__PURE__ */ me(dt(t));
  function a() {
    return o().setTimeout(
      () => {
        K(s, t, !0), r?.(t);
      },
      n
    );
  }
  return Ie(() => () => {
    i && o().clearTimeout(i);
  }), pe(() => c(s), (l) => {
    K(s, l, !0), r?.(l), i && o().clearTimeout(i), i = a();
  });
}
class i3 {
  #e;
  #t;
  #n = /* @__PURE__ */ _(() => this.#e.onMatch ? this.#e.onMatch : (e) => e.focus());
  #r = /* @__PURE__ */ _(() => this.#e.getCurrentItem ? this.#e.getCurrentItem : this.#e.getActiveElement);
  constructor(e) {
    this.#e = e, this.#t = Cg("", { afterMs: 1e3, getWindow: e.getWindow }), this.handleTypeaheadSearch = this.handleTypeaheadSearch.bind(this), this.resetTypeahead = this.resetTypeahead.bind(this);
  }
  handleTypeaheadSearch(e, n) {
    if (!n.length) return;
    this.#t.current = this.#t.current + e;
    const r = c(this.#r)(), o = n.find((l) => l === r)?.textContent?.trim() ?? "", i = n.map((l) => l.textContent?.trim() ?? ""), s = $u(i, this.#t.current, o), a = n.find((l) => l.textContent?.trim() === s);
    return a && c(this.#n)(a), a;
  }
  resetTypeahead() {
    this.#t.current = "";
  }
  get search() {
    return this.#t.current;
  }
}
const s3 = "data-context-menu-trigger", a3 = "data-context-menu-content";
Cu({
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
class Su {
  static create(e) {
    return new Su(e);
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
    this.opts = e, this.#t = e.interactOutsideBehavior, this.#e = e.onInteractOutside, this.#a = e.onFocusOutside, Ie(() => {
      this.#i = gg(this.opts.ref.current);
    });
    let n = Ke;
    const r = () => {
      this.#v(), globalThis.bitsDismissableLayers.delete(this), this.#d.destroy(), n();
    };
    wt([() => this.opts.enabled.current, () => this.opts.ref.current], () => {
      if (!(!this.opts.enabled.current || !this.opts.ref.current))
        return p5(1, () => {
          this.opts.ref.current && (globalThis.bitsDismissableLayers.set(this, this.#t), n(), n = this.#u());
        }), r;
    }), zo(() => {
      this.#v.destroy(), globalThis.bitsDismissableLayers.delete(this), this.#d.destroy(), this.#s(), n();
    });
  }
  #l = (e) => {
    e.defaultPrevented || this.opts.ref.current && Ni(() => {
      !this.opts.ref.current || this.#y(e.target) || e.target && !this.#o && this.#a.current?.(e);
    });
  };
  #u() {
    return Jo(
      /**
       * CAPTURE INTERACTION START
       * mark interaction-start event as intercepted.
       * mark responsible layer during interaction start
       * to avoid checking if is responsible layer during interaction end
       * when a new floating element may have been opened.
       */
      ht(this.#i, "pointerdown", Jo(this.#h, this.#p), { capture: !0 }),
      /**
       * BUBBLE INTERACTION START
       * Mark interaction-start event as non-intercepted. Debounce `onInteractOutsideStart`
       * to avoid prematurely checking if other events were intercepted.
       */
      ht(this.#i, "pointerdown", Jo(this.#f, this.#d)),
      /**
       * HANDLE FOCUS OUTSIDE
       */
      ht(this.#i, "focusin", this.#l)
    );
  }
  #c = (e) => {
    let n = e;
    n.defaultPrevented && (n = md(e)), this.#e.current(e);
  };
  #d = pd(
    (e) => {
      if (!this.opts.ref.current) {
        this.#s();
        return;
      }
      const n = this.opts.isValidEvent.current(e, this.opts.ref.current) || c3(e, this.opts.ref.current);
      if (!this.#r || this.#w() || !n) {
        this.#s();
        return;
      }
      let r = e;
      if (r.defaultPrevented && (r = md(r)), this.#t.current !== "close" && this.#t.current !== "defer-otherwise-close") {
        this.#s();
        return;
      }
      e.pointerType === "touch" ? (this.#s(), this.#s = ht(this.#i, "click", this.#c, { once: !0 })) : this.#e.current(r);
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
    this.opts.ref.current && (this.#r = u3(this.opts.ref.current));
  };
  #y = (e) => this.opts.ref.current ? fg(this.opts.ref.current, e) : !1;
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
function l3(t = [...globalThis.bitsDismissableLayers]) {
  return t.findLast(([e, { current: n }]) => n === "close" || n === "ignore");
}
function u3(t) {
  const e = [...globalThis.bitsDismissableLayers], n = l3(e);
  if (n) return n[0].opts.ref.current === t;
  const [r] = e[0];
  return r.opts.ref.current === t;
}
function c3(t, e) {
  const n = t.target;
  if (!_5(n)) return !1;
  const r = !!n.closest(`[${s3}]`);
  if ("button" in t && t.button > 0 && !r) return !1;
  if ("button" in t && t.button === 0 && r) return !0;
  const o = !!e.closest(`[${a3}]`);
  return r && o ? !1 : gg(n).documentElement.contains(n) && !fg(e, n) && V5(t, e);
}
function md(t) {
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
function $g(t, e) {
  ae(e, !0);
  let n = g(e, "interactOutsideBehavior", 7, "close"), r = g(e, "onInteractOutside", 7, Ke), o = g(e, "onFocusOutside", 7, Ke), i = g(e, "id", 7), s = g(e, "children", 7), a = g(e, "enabled", 7), l = g(e, "isValidEvent", 7, () => !1), u = g(e, "ref", 7);
  const d = Su.create({
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
    set onInteractOutside(m = Ke) {
      r(m), f();
    },
    get onFocusOutside() {
      return o();
    },
    set onFocusOutside(m = Ke) {
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
  }, p = ce(), v = U(p);
  return Pe(v, () => s() ?? je, () => ({ props: d.props })), z(t, p), le(h);
}
ie(
  $g,
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
class _u {
  static create(e) {
    return new _u(e);
  }
  opts;
  domContext;
  constructor(e) {
    this.opts = e, this.domContext = new Mi(this.opts.ref);
    let n = Ke;
    wt(() => e.enabled.current, (r) => (r && (globalThis.bitsEscapeLayers.set(this, e.escapeKeydownBehavior), n = this.#e()), () => {
      n(), globalThis.bitsEscapeLayers.delete(this);
    }));
  }
  #e = () => ht(this.domContext.getDocument(), "keydown", this.#t, { passive: !1 });
  #t = (e) => {
    if (e.key !== $5 || !d3(this)) return;
    const n = new KeyboardEvent(e.type, e);
    e.preventDefault();
    const r = this.opts.escapeKeydownBehavior.current;
    r !== "close" && r !== "defer-otherwise-close" || this.opts.onEscapeKeydown.current(n);
  };
}
function d3(t) {
  const e = [...globalThis.bitsEscapeLayers], n = e.findLast(([o, { current: i }]) => i === "close" || i === "ignore");
  if (n) return n[0] === t;
  const [r] = e[0];
  return r === t;
}
function Sg(t, e) {
  ae(e, !0);
  let n = g(e, "escapeKeydownBehavior", 7, "close"), r = g(e, "onEscapeKeydown", 7, Ke), o = g(e, "children", 7), i = g(e, "enabled", 7), s = g(e, "ref", 7);
  _u.create({
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
    set onEscapeKeydown(d = Ke) {
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
  }, l = ce(), u = U(l);
  return Pe(u, () => o() ?? je), z(t, l), le(a);
}
ie(
  Sg,
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
class Ou {
  static instance;
  #e = Mn([]);
  #t = /* @__PURE__ */ new WeakMap();
  #n = /* @__PURE__ */ new WeakMap();
  static getInstance() {
    return this.instance || (this.instance = new Ou()), this.instance;
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
class Pu {
  #e = !1;
  #t = null;
  #n = Ou.getInstance();
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
          if (l && e.contains(l) && Q5(l))
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
    this.#r.push(ht(n, "focusin", r, { capture: !0 }), ht(e, "keydown", o));
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
    return this.#t ? G5(this.#t, { includeContainer: !1, getShadowRoot: !0 }) : [];
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
      r && o ? (n || (n = new Pu(e)), n.mount(r)) : n && (n.unmount(), n = null);
    }), zo(() => {
      n?.unmount();
    }), {
      get props() {
        return { tabindex: -1 };
      }
    };
  }
}
function _g(t, e) {
  ae(e, !0);
  let n = g(e, "enabled", 7, !1), r = g(e, "trapFocus", 7, !1), o = g(e, "loop", 7, !1), i = g(e, "onCloseAutoFocus", 7, Ke), s = g(e, "onOpenAutoFocus", 7, Ke), a = g(e, "focusScope", 7), l = g(e, "ref", 7);
  const u = Pu.use({
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
    set onCloseAutoFocus(v = Ke) {
      i(v), f();
    },
    get onOpenAutoFocus() {
      return s();
    },
    set onOpenAutoFocus(v = Ke) {
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
  }, h = ce(), p = U(h);
  return Pe(p, () => a() ?? je, () => ({ props: u.props })), z(t, h), le(d);
}
ie(
  _g,
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
    this.opts = e, this.domContext = new Mi(e.ref);
    let n = Ke;
    wt(() => this.opts.enabled.current, (r) => (r && (globalThis.bitsTextSelectionLayers.set(this, this.opts.enabled), n(), n = this.#t()), () => {
      n(), this.#r(), globalThis.bitsTextSelectionLayers.delete(this);
    }));
  }
  #t() {
    return Jo(ht(this.domContext.getDocument(), "pointerdown", this.#n), ht(this.domContext.getDocument(), "pointerup", eg(this.#r, this.opts.onPointerUp.current)));
  }
  #n = (e) => {
    const n = this.opts.ref.current, r = e.target;
    !vl(n) || !vl(r) || !this.opts.enabled.current || !p3(this) || !w5(n, r) || (this.opts.onPointerDown.current(e), !e.defaultPrevented && (this.#e = h3(n, this.domContext.getDocument().body)));
  };
  #r = () => {
    this.#e(), this.#e = Ke;
  };
}
const yd = (t) => t.style.userSelect || t.style.webkitUserSelect;
function h3(t, e) {
  const n = yd(e), r = yd(t);
  return qi(e, "none"), qi(t, "text"), () => {
    qi(e, n), qi(t, r);
  };
}
function qi(t, e) {
  t.style.userSelect = e, t.style.webkitUserSelect = e;
}
function p3(t) {
  const e = [...globalThis.bitsTextSelectionLayers];
  if (!e.length) return !1;
  const n = e.at(-1);
  return n ? n[0] === t : !1;
}
function Og(t, e) {
  ae(e, !0);
  let n = g(e, "preventOverflowTextSelection", 7, !0), r = g(e, "onPointerDown", 7, Ke), o = g(e, "onPointerUp", 7, Ke), i = g(e, "id", 7), s = g(e, "children", 7), a = g(e, "enabled", 7), l = g(e, "ref", 7);
  Eu.create({
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
    set onPointerDown(p = Ke) {
      r(p), f();
    },
    get onPointerUp() {
      return o();
    },
    set onPointerUp(p = Ke) {
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
  }, d = ce(), h = U(d);
  return Pe(h, () => s() ?? je), z(t, d), le(u);
}
ie(
  Og,
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
function Is(t = "bits") {
  return globalThis.bitsIdCounter.current++, `${t}-${globalThis.bitsIdCounter.current}`;
}
class f3 {
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
    return this.#t += 1, c(this.#n) === void 0 && (this.#r = eo(() => {
      K(this.#n, this.#e(...e), !0);
    })), Ie(() => () => {
      this.#o();
    }), c(this.#n);
  }
}
const ls = new x2();
let Yi = /* @__PURE__ */ me(null), La = null, Bo = null, Ro = !1;
const wd = pe(() => {
  for (const t of ls.values())
    if (t) return !0;
  return !1;
});
let Ha = null;
const g3 = new f3(() => {
  function t() {
    document.body.setAttribute("style", c(Yi) ?? ""), document.body.style.removeProperty("--scrollbar-width"), gl && La?.(), K(Yi, null);
  }
  function e() {
    Bo !== null && (window.clearTimeout(Bo), Bo = null);
  }
  function n(o, i) {
    e(), Ro = !0, Ha = Date.now();
    const s = Ha, a = () => {
      Bo = null, Ha === s && (Pg(ls) ? Ro = !1 : (Ro = !1, i()));
    }, l = o === null ? 24 : o;
    Bo = window.setTimeout(a, l);
  }
  function r() {
    c(Yi) === null && ls.size === 0 && !Ro && K(Yi, document.body.getAttribute("style"), !0);
  }
  return wt(() => wd.current, () => {
    if (!wd.current) return;
    r(), Ro = !1;
    const o = getComputedStyle(document.documentElement), i = getComputedStyle(document.body), s = o.scrollbarGutter?.includes("stable") || i.scrollbarGutter?.includes("stable"), a = window.innerWidth - document.documentElement.clientWidth, l = {
      padding: Number.parseInt(i.paddingRight ?? "0", 10) + a,
      margin: Number.parseInt(i.marginRight ?? "0", 10)
    };
    a > 0 && !s && (document.body.style.paddingRight = `${l.padding}px`, document.body.style.marginRight = `${l.margin}px`, document.body.style.setProperty("--scrollbar-width", `${a}px`)), document.body.style.overflow = "hidden", gl && (La = ht(
      document,
      "touchmove",
      (u) => {
        u.target === document.documentElement && (u.touches.length > 1 || u.preventDefault());
      },
      { passive: !1 }
    )), Ni(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }), zo(() => () => {
    La?.();
  }), {
    get lockMap() {
      return ls;
    },
    resetBodyStyle: t,
    scheduleCleanupIfNoNewLocks: n,
    cancelPendingCleanup: e,
    ensureInitialStyleCaptured: r
  };
});
class v3 {
  #e = Is();
  #t;
  #n = () => null;
  #r;
  locked;
  constructor(e, n = () => null) {
    this.#t = e, this.#n = n, this.#r = g3.get(), this.#r && (this.#r.cancelPendingCleanup(), this.#r.ensureInitialStyleCaptured(), this.#r.lockMap.set(this.#e, this.#t ?? !1), this.locked = pe(() => this.#r.lockMap.get(this.#e) ?? !1, (r) => this.#r.lockMap.set(this.#e, r)), zo(() => {
      if (this.#r.lockMap.delete(this.#e), Pg(this.#r.lockMap)) return;
      const r = this.#n();
      this.#r.scheduleCleanupIfNoNewLocks(r, () => {
        this.#r.resetBodyStyle();
      });
    }));
  }
}
function Pg(t) {
  for (const [e, n] of t)
    if (n) return !0;
  return !1;
}
function wl(t, e) {
  ae(e, !0);
  let n = g(e, "preventScroll", 7, !0), r = g(e, "restoreScrollDelay", 7, null);
  n() && new v3(n(), () => r());
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
ie(wl, { preventScroll: {}, restoreScrollDelay: {} }, [], [], !0);
const m3 = Cu({
  component: "checkbox",
  parts: ["root", "group", "group-label", "input"]
}), y3 = new zr("Checkbox.Group"), Eg = new zr("Checkbox.Root");
class Nu {
  static create(e, n = null) {
    return Eg.set(new Nu(e, n));
  }
  opts;
  group;
  #e = /* @__PURE__ */ _(() => this.group && this.group.opts.name.current ? this.group.opts.name.current : this.opts.name.current);
  get trueName() {
    return c(this.#e);
  }
  set trueName(e) {
    K(this.#e, e);
  }
  #t = /* @__PURE__ */ _(() => this.group && this.group.opts.required.current ? !0 : this.opts.required.current);
  get trueRequired() {
    return c(this.#t);
  }
  set trueRequired(e) {
    K(this.#t, e);
  }
  #n = /* @__PURE__ */ _(() => this.group && this.group.opts.disabled.current ? !0 : this.opts.disabled.current);
  get trueDisabled() {
    return c(this.#n);
  }
  set trueDisabled(e) {
    K(this.#n, e);
  }
  #r = /* @__PURE__ */ _(() => this.group && this.group.opts.readonly.current ? !0 : this.opts.readonly.current);
  get trueReadonly() {
    return c(this.#r);
  }
  set trueReadonly(e) {
    K(this.#r, e);
  }
  attachment;
  constructor(e, n) {
    this.opts = e, this.group = n, this.attachment = kr(this.opts.ref), this.onkeydown = this.onkeydown.bind(this), this.onclick = this.onclick.bind(this), wt.pre(
      [
        () => Fl(this.group?.opts.value.current),
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
      if (e.key === fl) {
        e.preventDefault(), this.opts.type.current === "submit" && e.currentTarget.closest("form")?.requestSubmit();
        return;
      }
      e.key === as && (e.preventDefault(), this.#o());
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
  #i = /* @__PURE__ */ _(() => ({
    checked: this.opts.checked.current,
    indeterminate: this.opts.indeterminate.current
  }));
  get snippetProps() {
    return c(this.#i);
  }
  set snippetProps(e) {
    K(this.#i, e);
  }
  #a = /* @__PURE__ */ _(() => ({
    id: this.opts.id.current,
    role: "checkbox",
    type: this.opts.type.current,
    disabled: this.trueDisabled,
    "aria-checked": k5(this.opts.checked.current, this.opts.indeterminate.current),
    "aria-required": pl(this.trueRequired),
    "aria-readonly": pl(this.trueReadonly),
    "data-disabled": Ts(this.trueDisabled),
    "data-readonly": Ts(this.trueReadonly),
    "data-state": w3(this.opts.checked.current, this.opts.indeterminate.current),
    [m3.root]: "",
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
class Mu {
  static create() {
    return new Mu(Eg.get());
  }
  root;
  #e = /* @__PURE__ */ _(() => this.root.group ? !!(this.root.opts.value.current !== void 0 && this.root.group.opts.value.current.includes(this.root.opts.value.current)) : this.root.opts.checked.current);
  get trueChecked() {
    return c(this.#e);
  }
  set trueChecked(e) {
    K(this.#e, e);
  }
  #t = /* @__PURE__ */ _(() => !!this.root.trueName);
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
    vl(this.root.opts.ref.current) && this.root.opts.ref.current.focus();
  }
  #n = /* @__PURE__ */ _(() => ({
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
function w3(t, e) {
  return e ? "indeterminate" : t ? "checked" : "unchecked";
}
var b3 = /* @__PURE__ */ ne("<input/>"), x3 = /* @__PURE__ */ ne("<input/>");
function zu(t, e) {
  ae(e, !0);
  let n = g(e, "value", 15), r = /* @__PURE__ */ De(e, ["$$slots", "$$events", "$$legacy", "$$host", "value"]);
  const o = /* @__PURE__ */ _(() => Dn(r, {
    "aria-hidden": "true",
    tabindex: -1,
    style: o5
  }));
  var i = {
    get value() {
      return n();
    },
    set value(d) {
      n(d), f();
    }
  }, s = ce(), a = U(s);
  {
    var l = (d) => {
      var h = b3();
      Ue(h, () => ({ ...c(o), value: n() }), void 0, void 0, void 0, void 0, !0), z(d, h);
    }, u = (d) => {
      var h = x3();
      Ue(h, () => ({ ...c(o) }), void 0, void 0, void 0, void 0, !0), ys(h, n), z(d, h);
    };
    se(a, (d) => {
      c(o).type === "checkbox" ? d(l) : d(u, !1);
    });
  }
  return z(t, s), le(i);
}
ie(zu, { value: {} }, [], [], !0);
function Ng(t, e) {
  ae(e, !1);
  const n = Mu.create();
  tu();
  var r = ce(), o = U(r);
  {
    var i = (s) => {
      zu(s, Re(() => n.props));
    };
    se(o, (s) => {
      n.shouldRender && s(i);
    });
  }
  z(t, r), le();
}
ie(Ng, {}, [], [], !0);
var k3 = /* @__PURE__ */ ne("<button><!></button>"), C3 = /* @__PURE__ */ ne("<!> <!>", 1);
function Mg(t, e) {
  const n = yi();
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
  const k = y3.getOr(null);
  k && d() && (k.opts.value.current.includes(d()) ? r(!0) : r(!1)), wt.pre(() => d(), () => {
    k && d() && (k.opts.value.current.includes(d()) ? r(!0) : r(!1));
  });
  const O = Nu.create(
    {
      checked: pe(() => r(), (N) => {
        r(N), i()?.(N);
      }),
      disabled: pe(() => a() ?? !1),
      required: pe(() => l()),
      name: pe(() => u()),
      value: pe(() => d()),
      id: pe(() => h()),
      ref: pe(() => o(), (N) => o(N)),
      indeterminate: pe(() => p(), (N) => {
        p(N), v()?.(N);
      }),
      type: pe(() => y()),
      readonly: pe(() => !!w())
    },
    k
  ), C = /* @__PURE__ */ _(() => Dn({ ...b }, O.props));
  var x = {
    get checked() {
      return r();
    },
    set checked(N = !1) {
      r(N), f();
    },
    get ref() {
      return o();
    },
    set ref(N = null) {
      o(N), f();
    },
    get onCheckedChange() {
      return i();
    },
    set onCheckedChange(N) {
      i(N), f();
    },
    get children() {
      return s();
    },
    set children(N) {
      s(N), f();
    },
    get disabled() {
      return a();
    },
    set disabled(N = !1) {
      a(N), f();
    },
    get required() {
      return l();
    },
    set required(N = !1) {
      l(N), f();
    },
    get name() {
      return u();
    },
    set name(N = void 0) {
      u(N), f();
    },
    get value() {
      return d();
    },
    set value(N = "on") {
      d(N), f();
    },
    get id() {
      return h();
    },
    set id(N = Hn(n)) {
      h(N), f();
    },
    get indeterminate() {
      return p();
    },
    set indeterminate(N = !1) {
      p(N), f();
    },
    get onIndeterminateChange() {
      return v();
    },
    set onIndeterminateChange(N) {
      v(N), f();
    },
    get child() {
      return m();
    },
    set child(N) {
      m(N), f();
    },
    get type() {
      return y();
    },
    set type(N = "button") {
      y(N), f();
    },
    get readonly() {
      return w();
    },
    set readonly(N) {
      w(N), f();
    }
  }, E = C3(), V = U(E);
  {
    var L = (N) => {
      var S = ce(), T = U(S);
      {
        let $ = /* @__PURE__ */ _(() => ({ props: c(C), ...O.snippetProps }));
        Pe(T, m, () => c($));
      }
      z(N, S);
    }, I = (N) => {
      var S = k3();
      Ue(S, () => ({ ...c(C) }));
      var T = X(S);
      Pe(T, () => s() ?? je, () => O.snippetProps), Z(S), z(N, S);
    };
    se(V, (N) => {
      m() ? N(L) : N(I, !1);
    });
  }
  var D = B(V, 2);
  return Ng(D, {}), z(t, E), le(x);
}
ie(
  Mg,
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
const $3 = ["top", "right", "bottom", "left"], $r = Math.min, Jt = Math.max, Bs = Math.round, Gi = Math.floor, Vn = (t) => ({
  x: t,
  y: t
}), S3 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, _3 = {
  start: "end",
  end: "start"
};
function bl(t, e, n) {
  return Jt(t, $r(e, n));
}
function ir(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function sr(t) {
  return t.split("-")[0];
}
function Ao(t) {
  return t.split("-")[1];
}
function Au(t) {
  return t === "x" ? "y" : "x";
}
function Tu(t) {
  return t === "y" ? "height" : "width";
}
const O3 = /* @__PURE__ */ new Set(["top", "bottom"]);
function zn(t) {
  return O3.has(sr(t)) ? "y" : "x";
}
function Du(t) {
  return Au(zn(t));
}
function P3(t, e, n) {
  n === void 0 && (n = !1);
  const r = Ao(t), o = Du(t), i = Tu(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return e.reference[i] > e.floating[i] && (s = Rs(s)), [s, Rs(s)];
}
function E3(t) {
  const e = Rs(t);
  return [xl(t), e, xl(e)];
}
function xl(t) {
  return t.replace(/start|end/g, (e) => _3[e]);
}
const bd = ["left", "right"], xd = ["right", "left"], N3 = ["top", "bottom"], M3 = ["bottom", "top"];
function z3(t, e, n) {
  switch (t) {
    case "top":
    case "bottom":
      return n ? e ? xd : bd : e ? bd : xd;
    case "left":
    case "right":
      return e ? N3 : M3;
    default:
      return [];
  }
}
function A3(t, e, n, r) {
  const o = Ao(t);
  let i = z3(sr(t), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), e && (i = i.concat(i.map(xl)))), i;
}
function Rs(t) {
  return t.replace(/left|right|bottom|top/g, (e) => S3[e]);
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
function zg(t) {
  return typeof t != "number" ? T3(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function js(t) {
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
  const i = zn(e), s = Du(e), a = Tu(s), l = sr(e), u = i === "y", d = r.x + r.width / 2 - o.width / 2, h = r.y + r.height / 2 - o.height / 2, p = r[a] / 2 - o[a] / 2;
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
  switch (Ao(e)) {
    case "start":
      v[s] -= p * (n && u ? -1 : 1);
      break;
    case "end":
      v[s] += p * (n && u ? -1 : 1);
      break;
  }
  return v;
}
const D3 = async (t, e, n) => {
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
  } = kd(u, r, l), p = r, v = {}, m = 0;
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
    } = kd(u, p, l)), y = -1);
  }
  return {
    x: d,
    y: h,
    placement: p,
    strategy: o,
    middlewareData: v
  };
};
async function di(t, e) {
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
  } = ir(e, t), m = zg(v), y = a[p ? h === "floating" ? "reference" : "floating" : h], w = js(await i.getClippingRect({
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
  }, C = js(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
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
const V3 = (t) => ({
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
    } = ir(t, e) || {};
    if (u == null)
      return {};
    const h = zg(d), p = {
      x: n,
      y: r
    }, v = Du(o), m = Tu(v), y = await s.getDimensions(u), w = v === "y", b = w ? "top" : "left", k = w ? "bottom" : "right", O = w ? "clientHeight" : "clientWidth", C = i.reference[m] + i.reference[v] - p[v] - i.floating[m], x = p[v] - i.reference[v], E = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
    let V = E ? E[O] : 0;
    (!V || !await (s.isElement == null ? void 0 : s.isElement(E))) && (V = a.floating[O] || i.floating[m]);
    const L = C / 2 - x / 2, I = V / 2 - y[m] / 2 - 1, D = $r(h[b], I), N = $r(h[k], I), S = D, T = V - y[m] - N, $ = V / 2 - y[m] / 2 + L, P = bl(S, $, T), M = !l.arrow && Ao(o) != null && $ !== P && i.reference[m] / 2 - ($ < S ? D : N) - y[m] / 2 < 0, j = M ? $ < S ? $ - S : $ - T : 0;
    return {
      [v]: p[v] + j,
      data: {
        [v]: P,
        centerOffset: $ - P - j,
        ...M && {
          alignmentOffset: j
        }
      },
      reset: M
    };
  }
}), L3 = function(t) {
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
      } = ir(t, e);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const b = sr(o), k = zn(a), O = sr(a) === a, C = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), x = p || (O || !y ? [Rs(a)] : E3(a)), E = m !== "none";
      !p && E && x.push(...A3(a, y, m, C));
      const V = [a, ...x], L = await di(e, w), I = [];
      let D = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (d && I.push(L[b]), h) {
        const $ = P3(o, s, C);
        I.push(L[$[0]], L[$[1]]);
      }
      if (D = [...D, {
        placement: o,
        overflows: I
      }], !I.every(($) => $ <= 0)) {
        var N, S;
        const $ = (((N = i.flip) == null ? void 0 : N.index) || 0) + 1, P = V[$];
        if (P && (!(h === "alignment" && k !== zn(P)) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        D.every((j) => zn(j.placement) === k ? j.overflows[0] > 0 : !0)))
          return {
            data: {
              index: $,
              overflows: D
            },
            reset: {
              placement: P
            }
          };
        let M = (S = D.filter((j) => j.overflows[0] <= 0).sort((j, q) => j.overflows[1] - q.overflows[1])[0]) == null ? void 0 : S.placement;
        if (!M)
          switch (v) {
            case "bestFit": {
              var T;
              const j = (T = D.filter((q) => {
                if (E) {
                  const G = zn(q.placement);
                  return G === k || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  G === "y";
                }
                return !0;
              }).map((q) => [q.placement, q.overflows.filter((G) => G > 0).reduce((G, A) => G + A, 0)]).sort((q, G) => q[1] - G[1])[0]) == null ? void 0 : T[0];
              j && (M = j);
              break;
            }
            case "initialPlacement":
              M = a;
              break;
          }
        if (o !== M)
          return {
            reset: {
              placement: M
            }
          };
      }
      return {};
    }
  };
};
function Cd(t, e) {
  return {
    top: t.top - e.height,
    right: t.right - e.width,
    bottom: t.bottom - e.height,
    left: t.left - e.width
  };
}
function $d(t) {
  return $3.some((e) => t[e] >= 0);
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
      } = ir(t, e);
      switch (r) {
        case "referenceHidden": {
          const i = await di(e, {
            ...o,
            elementContext: "reference"
          }), s = Cd(i, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: $d(s)
            }
          };
        }
        case "escaped": {
          const i = await di(e, {
            ...o,
            altBoundary: !0
          }), s = Cd(i, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: $d(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, Ag = /* @__PURE__ */ new Set(["left", "top"]);
async function I3(t, e) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = t, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = sr(n), a = Ao(n), l = zn(n) === "y", u = Ag.has(s) ? -1 : 1, d = i && l ? -1 : 1, h = ir(e, t);
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
const B3 = function(t) {
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
      } = e, l = await I3(e, t);
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
      } = ir(t, e), u = {
        x: n,
        y: r
      }, d = await di(e, l), h = zn(sr(o)), p = Au(h);
      let v = u[p], m = u[h];
      if (i) {
        const w = p === "y" ? "top" : "left", b = p === "y" ? "bottom" : "right", k = v + d[w], O = v - d[b];
        v = bl(k, v, O);
      }
      if (s) {
        const w = h === "y" ? "top" : "left", b = h === "y" ? "bottom" : "right", k = m + d[w], O = m - d[b];
        m = bl(k, m, O);
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
}, j3 = function(t) {
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
      } = ir(t, e), d = {
        x: n,
        y: r
      }, h = zn(o), p = Au(h);
      let v = d[p], m = d[h];
      const y = ir(a, e), w = typeof y == "number" ? {
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
        const O = p === "y" ? "width" : "height", C = Ag.has(sr(o)), x = i.reference[h] - i.floating[O] + (C && ((b = s.offset) == null ? void 0 : b[h]) || 0) + (C ? 0 : w.crossAxis), E = i.reference[h] + i.reference[O] + (C ? 0 : ((k = s.offset) == null ? void 0 : k[h]) || 0) - (C ? w.crossAxis : 0);
        m < x ? m = x : m > E && (m = E);
      }
      return {
        [p]: v,
        [h]: m
      };
    }
  };
}, K3 = function(t) {
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
      } = ir(t, e), d = await di(e, u), h = sr(o), p = Ao(o), v = zn(o) === "y", {
        width: m,
        height: y
      } = i.floating;
      let w, b;
      h === "top" || h === "bottom" ? (w = h, b = p === (await (s.isRTL == null ? void 0 : s.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (b = h, w = p === "end" ? "top" : "bottom");
      const k = y - d.top - d.bottom, O = m - d.left - d.right, C = $r(y - d[w], k), x = $r(m - d[b], O), E = !e.middlewareData.shift;
      let V = C, L = x;
      if ((n = e.middlewareData.shift) != null && n.enabled.x && (L = O), (r = e.middlewareData.shift) != null && r.enabled.y && (V = k), E && !p) {
        const D = Jt(d.left, 0), N = Jt(d.right, 0), S = Jt(d.top, 0), T = Jt(d.bottom, 0);
        v ? L = m - 2 * (D !== 0 || N !== 0 ? D + N : Jt(d.left, d.right)) : V = y - 2 * (S !== 0 || T !== 0 ? S + T : Jt(d.top, d.bottom));
      }
      await l({
        ...e,
        availableWidth: L,
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
function ga() {
  return typeof window < "u";
}
function To(t) {
  return Tg(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function en(t) {
  var e;
  return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function jn(t) {
  var e;
  return (e = (Tg(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
}
function Tg(t) {
  return ga() ? t instanceof Node || t instanceof en(t).Node : !1;
}
function bn(t) {
  return ga() ? t instanceof Element || t instanceof en(t).Element : !1;
}
function In(t) {
  return ga() ? t instanceof HTMLElement || t instanceof en(t).HTMLElement : !1;
}
function Sd(t) {
  return !ga() || typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof en(t).ShadowRoot;
}
const F3 = /* @__PURE__ */ new Set(["inline", "contents"]);
function zi(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: r,
    display: o
  } = xn(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + r + n) && !F3.has(o);
}
const Z3 = /* @__PURE__ */ new Set(["table", "td", "th"]);
function W3(t) {
  return Z3.has(To(t));
}
const X3 = [":popover-open", ":modal"];
function va(t) {
  return X3.some((e) => {
    try {
      return t.matches(e);
    } catch {
      return !1;
    }
  });
}
const q3 = ["transform", "translate", "scale", "rotate", "perspective"], Y3 = ["transform", "translate", "scale", "rotate", "perspective", "filter"], G3 = ["paint", "layout", "strict", "content"];
function Vu(t) {
  const e = Lu(), n = bn(t) ? xn(t) : t;
  return q3.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !e && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !e && (n.filter ? n.filter !== "none" : !1) || Y3.some((r) => (n.willChange || "").includes(r)) || G3.some((r) => (n.contain || "").includes(r));
}
function U3(t) {
  let e = Sr(t);
  for (; In(e) && !Oo(e); ) {
    if (Vu(e))
      return e;
    if (va(e))
      return null;
    e = Sr(e);
  }
  return null;
}
function Lu() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const J3 = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function Oo(t) {
  return J3.has(To(t));
}
function xn(t) {
  return en(t).getComputedStyle(t);
}
function ma(t) {
  return bn(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.scrollX,
    scrollTop: t.scrollY
  };
}
function Sr(t) {
  if (To(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node.
    t.assignedSlot || // DOM Element detected.
    t.parentNode || // ShadowRoot detected.
    Sd(t) && t.host || // Fallback.
    jn(t)
  );
  return Sd(e) ? e.host : e;
}
function Dg(t) {
  const e = Sr(t);
  return Oo(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : In(e) && zi(e) ? e : Dg(e);
}
function hi(t, e, n) {
  var r;
  e === void 0 && (e = []), n === void 0 && (n = !0);
  const o = Dg(t), i = o === ((r = t.ownerDocument) == null ? void 0 : r.body), s = en(o);
  if (i) {
    const a = kl(s);
    return e.concat(s, s.visualViewport || [], zi(o) ? o : [], a && n ? hi(a) : []);
  }
  return e.concat(o, hi(o, [], n));
}
function kl(t) {
  return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null;
}
function Vg(t) {
  const e = xn(t);
  let n = parseFloat(e.width) || 0, r = parseFloat(e.height) || 0;
  const o = In(t), i = o ? t.offsetWidth : n, s = o ? t.offsetHeight : r, a = Bs(n) !== i || Bs(r) !== s;
  return a && (n = i, r = s), {
    width: n,
    height: r,
    $: a
  };
}
function Hu(t) {
  return bn(t) ? t : t.contextElement;
}
function vo(t) {
  const e = Hu(t);
  if (!In(e))
    return Vn(1);
  const n = e.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = Vg(e);
  let s = (i ? Bs(n.width) : n.width) / r, a = (i ? Bs(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const Q3 = /* @__PURE__ */ Vn(0);
function Lg(t) {
  const e = en(t);
  return !Lu() || !e.visualViewport ? Q3 : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function ek(t, e, n) {
  return e === void 0 && (e = !1), !n || e && n !== en(t) ? !1 : e;
}
function Ur(t, e, n, r) {
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const o = t.getBoundingClientRect(), i = Hu(t);
  let s = Vn(1);
  e && (r ? bn(r) && (s = vo(r)) : s = vo(t));
  const a = ek(i, n, r) ? Lg(i) : Vn(0);
  let l = (o.left + a.x) / s.x, u = (o.top + a.y) / s.y, d = o.width / s.x, h = o.height / s.y;
  if (i) {
    const p = en(i), v = r && bn(r) ? en(r) : r;
    let m = p, y = kl(m);
    for (; y && r && v !== m; ) {
      const w = vo(y), b = y.getBoundingClientRect(), k = xn(y), O = b.left + (y.clientLeft + parseFloat(k.paddingLeft)) * w.x, C = b.top + (y.clientTop + parseFloat(k.paddingTop)) * w.y;
      l *= w.x, u *= w.y, d *= w.x, h *= w.y, l += O, u += C, m = en(y), y = kl(m);
    }
  }
  return js({
    width: d,
    height: h,
    x: l,
    y: u
  });
}
function ya(t, e) {
  const n = ma(t).scrollLeft;
  return e ? e.left + n : Ur(jn(t)).left + n;
}
function Hg(t, e) {
  const n = t.getBoundingClientRect(), r = n.left + e.scrollLeft - ya(t, n), o = n.top + e.scrollTop;
  return {
    x: r,
    y: o
  };
}
function tk(t) {
  let {
    elements: e,
    rect: n,
    offsetParent: r,
    strategy: o
  } = t;
  const i = o === "fixed", s = jn(r), a = e ? va(e.floating) : !1;
  if (r === s || a && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = Vn(1);
  const d = Vn(0), h = In(r);
  if ((h || !h && !i) && ((To(r) !== "body" || zi(s)) && (l = ma(r)), In(r))) {
    const v = Ur(r);
    u = vo(r), d.x = v.x + r.clientLeft, d.y = v.y + r.clientTop;
  }
  const p = s && !h && !i ? Hg(s, l) : Vn(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + d.x + p.x,
    y: n.y * u.y - l.scrollTop * u.y + d.y + p.y
  };
}
function nk(t) {
  return Array.from(t.getClientRects());
}
function rk(t) {
  const e = jn(t), n = ma(t), r = t.ownerDocument.body, o = Jt(e.scrollWidth, e.clientWidth, r.scrollWidth, r.clientWidth), i = Jt(e.scrollHeight, e.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + ya(t);
  const a = -n.scrollTop;
  return xn(r).direction === "rtl" && (s += Jt(e.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
const _d = 25;
function ok(t, e) {
  const n = en(t), r = jn(t), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, a = 0, l = 0;
  if (o) {
    i = o.width, s = o.height;
    const d = Lu();
    (!d || d && e === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  const u = ya(r);
  if (u <= 0) {
    const d = r.ownerDocument, h = d.body, p = getComputedStyle(h), v = d.compatMode === "CSS1Compat" && parseFloat(p.marginLeft) + parseFloat(p.marginRight) || 0, m = Math.abs(r.clientWidth - h.clientWidth - v);
    m <= _d && (i -= m);
  } else u <= _d && (i += u);
  return {
    width: i,
    height: s,
    x: a,
    y: l
  };
}
const ik = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function sk(t, e) {
  const n = Ur(t, !0, e === "fixed"), r = n.top + t.clientTop, o = n.left + t.clientLeft, i = In(t) ? vo(t) : Vn(1), s = t.clientWidth * i.x, a = t.clientHeight * i.y, l = o * i.x, u = r * i.y;
  return {
    width: s,
    height: a,
    x: l,
    y: u
  };
}
function Od(t, e, n) {
  let r;
  if (e === "viewport")
    r = ok(t, n);
  else if (e === "document")
    r = rk(jn(t));
  else if (bn(e))
    r = sk(e, n);
  else {
    const o = Lg(t);
    r = {
      x: e.x - o.x,
      y: e.y - o.y,
      width: e.width,
      height: e.height
    };
  }
  return js(r);
}
function Ig(t, e) {
  const n = Sr(t);
  return n === e || !bn(n) || Oo(n) ? !1 : xn(n).position === "fixed" || Ig(n, e);
}
function ak(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let r = hi(t, [], !1).filter((a) => bn(a) && To(a) !== "body"), o = null;
  const i = xn(t).position === "fixed";
  let s = i ? Sr(t) : t;
  for (; bn(s) && !Oo(s); ) {
    const a = xn(s), l = Vu(s);
    !l && a.position === "fixed" && (o = null), (i ? !l && !o : !l && a.position === "static" && o && ik.has(o.position) || zi(s) && !l && Ig(t, s)) ? r = r.filter((u) => u !== s) : o = a, s = Sr(s);
  }
  return e.set(t, r), r;
}
function lk(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = t;
  const i = [...n === "clippingAncestors" ? va(e) ? [] : ak(e, this._c) : [].concat(n), r], s = i[0], a = i.reduce((l, u) => {
    const d = Od(e, u, o);
    return l.top = Jt(d.top, l.top), l.right = $r(d.right, l.right), l.bottom = $r(d.bottom, l.bottom), l.left = Jt(d.left, l.left), l;
  }, Od(e, s, o));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top
  };
}
function uk(t) {
  const {
    width: e,
    height: n
  } = Vg(t);
  return {
    width: e,
    height: n
  };
}
function ck(t, e, n) {
  const r = In(e), o = jn(e), i = n === "fixed", s = Ur(t, !0, i, e);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Vn(0);
  function u() {
    l.x = ya(o);
  }
  if (r || !r && !i)
    if ((To(e) !== "body" || zi(o)) && (a = ma(e)), r) {
      const v = Ur(e, !0, i, e);
      l.x = v.x + e.clientLeft, l.y = v.y + e.clientTop;
    } else o && u();
  i && !r && o && u();
  const d = o && !r && !i ? Hg(o, a) : Vn(0), h = s.left + a.scrollLeft - l.x - d.x, p = s.top + a.scrollTop - l.y - d.y;
  return {
    x: h,
    y: p,
    width: s.width,
    height: s.height
  };
}
function Ia(t) {
  return xn(t).position === "static";
}
function Pd(t, e) {
  if (!In(t) || xn(t).position === "fixed")
    return null;
  if (e)
    return e(t);
  let n = t.offsetParent;
  return jn(t) === n && (n = n.ownerDocument.body), n;
}
function Bg(t, e) {
  const n = en(t);
  if (va(t))
    return n;
  if (!In(t)) {
    let o = Sr(t);
    for (; o && !Oo(o); ) {
      if (bn(o) && !Ia(o))
        return o;
      o = Sr(o);
    }
    return n;
  }
  let r = Pd(t, e);
  for (; r && W3(r) && Ia(r); )
    r = Pd(r, e);
  return r && Oo(r) && Ia(r) && !Vu(r) ? n : r || U3(t) || n;
}
const dk = async function(t) {
  const e = this.getOffsetParent || Bg, n = this.getDimensions, r = await n(t.floating);
  return {
    reference: ck(t.reference, await e(t.floating), t.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function hk(t) {
  return xn(t).direction === "rtl";
}
const pk = {
  convertOffsetParentRelativeRectToViewportRelativeRect: tk,
  getDocumentElement: jn,
  getClippingRect: lk,
  getOffsetParent: Bg,
  getElementRects: dk,
  getClientRects: nk,
  getDimensions: uk,
  getScale: vo,
  isElement: bn,
  isRTL: hk
};
function Rg(t, e) {
  return t.x === e.x && t.y === e.y && t.width === e.width && t.height === e.height;
}
function fk(t, e) {
  let n = null, r;
  const o = jn(t);
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
    const m = Gi(h), y = Gi(o.clientWidth - (d + p)), w = Gi(o.clientHeight - (h + v)), b = Gi(d), k = {
      rootMargin: -m + "px " + -y + "px " + -w + "px " + -b + "px",
      threshold: Jt(0, $r(1, l)) || 1
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
      E === 1 && !Rg(u, t.getBoundingClientRect()) && s(), O = !1;
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
function gk(t, e, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, u = Hu(t), d = o || i ? [...u ? hi(u) : [], ...hi(e)] : [];
  d.forEach((b) => {
    o && b.addEventListener("scroll", n, {
      passive: !0
    }), i && b.addEventListener("resize", n);
  });
  const h = u && a ? fk(u, n) : null;
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
    y && !Rg(y, b) && n(), y = b, m = requestAnimationFrame(w);
  }
  return n(), () => {
    var b;
    d.forEach((k) => {
      o && k.removeEventListener("scroll", n), i && k.removeEventListener("resize", n);
    }), h?.(), (b = v) == null || b.disconnect(), v = null, l && cancelAnimationFrame(m);
  };
}
const jg = B3, Kg = R3, Fg = L3, vk = K3, mk = H3, Zg = V3, yk = j3, Wg = (t, e, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: pk,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return D3(t, e, {
    ...o,
    platform: i
  });
};
function Dr(t) {
  return typeof t == "function" ? t() : t;
}
function Xg(t) {
  return typeof window > "u" ? 1 : (t.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Ed(t, e) {
  const n = Xg(t);
  return Math.round(e * n) / n;
}
function wk(t) {
  return {
    [`--bits-${t}-content-transform-origin`]: "var(--bits-floating-transform-origin)",
    [`--bits-${t}-content-available-width`]: "var(--bits-floating-available-width)",
    [`--bits-${t}-content-available-height`]: "var(--bits-floating-available-height)",
    [`--bits-${t}-anchor-width`]: "var(--bits-floating-anchor-width)",
    [`--bits-${t}-anchor-height`]: "var(--bits-floating-anchor-height)"
  };
}
function bk(t) {
  const e = t.whileElementsMounted, n = /* @__PURE__ */ _(() => Dr(t.open) ?? !0), r = /* @__PURE__ */ _(() => Dr(t.middleware)), o = /* @__PURE__ */ _(() => Dr(t.transform) ?? !0), i = /* @__PURE__ */ _(() => Dr(t.placement) ?? "bottom"), s = /* @__PURE__ */ _(() => Dr(t.strategy) ?? "absolute"), a = /* @__PURE__ */ _(() => Dr(t.sideOffset) ?? 0), l = /* @__PURE__ */ _(() => Dr(t.alignOffset) ?? 0), u = t.reference;
  let d = /* @__PURE__ */ me(0), h = /* @__PURE__ */ me(0);
  const p = Mn(null);
  let v = /* @__PURE__ */ me(dt(c(s))), m = /* @__PURE__ */ me(dt(c(i))), y = /* @__PURE__ */ me(dt({})), w = /* @__PURE__ */ me(!1), b = !1, k = 0;
  const O = /* @__PURE__ */ _(() => {
    const D = p.current ? Ed(p.current, c(d)) : c(d), N = p.current ? Ed(p.current, c(h)) : c(h);
    return c(o) ? {
      position: c(v),
      left: "0",
      top: "0",
      transform: `translate(${D}px, ${N}px)`,
      ...p.current && Xg(p.current) >= 1.5 && { willChange: "transform" }
    } : {
      position: c(v),
      left: `${D}px`,
      top: `${N}px`
    };
  });
  let C;
  function x() {
    if (u.current === null || p.current === null) return;
    const D = u.current, N = p.current, S = ++k;
    Wg(D, N, {
      middleware: c(r),
      placement: c(i),
      strategy: c(s)
    }).then((T) => {
      if (!(S !== k || u.current !== D || p.current !== N)) {
        if (xk(D)) {
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
          if (T.x <= $ && T.y <= $) return;
        }
        K(d, T.x, !0), K(h, T.y, !0), K(v, T.strategy, !0), K(m, T.placement, !0), K(y, T.middlewareData, !0), K(w, !0);
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
  function L() {
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
  return Ie(() => {
    e === void 0 && c(n) && x();
  }), Ie(V), Ie(() => {
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
  }), Ie(L), Ie(() => E), {
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
function xk(t) {
  return t instanceof Element ? !t.isConnected || t instanceof HTMLElement && t.hidden ? !0 : t.getClientRects().length === 0 : !1;
}
const kk = { top: "bottom", right: "left", bottom: "top", left: "right" }, Iu = new zr("Floating.Root"), Nd = new zr("Floating.Content"), Bu = new zr("Floating.Root");
class Ks {
  static create(e = !1) {
    return e ? Bu.set(new Ks()) : Iu.set(new Ks());
  }
  anchorNode = Mn(null);
  customAnchorNode = Mn(null);
  triggerNode = Mn(null);
  constructor() {
    Ie(() => {
      this.customAnchorNode.current ? typeof this.customAnchorNode.current == "string" ? this.anchorNode.current = document.querySelector(this.customAnchorNode.current) : this.anchorNode.current = this.customAnchorNode.current : this.anchorNode.current = this.triggerNode.current;
    });
  }
}
class Fs {
  static create(e, n = !1) {
    return n ? Nd.set(new Fs(e, Bu.get())) : Nd.set(new Fs(e, Iu.get()));
  }
  opts;
  root;
  // nodes
  contentRef = Mn(null);
  wrapperRef = Mn(null);
  arrowRef = Mn(null);
  contentAttachment = kr(this.contentRef);
  wrapperAttachment = kr(this.wrapperRef);
  arrowAttachment = kr(this.arrowRef);
  // ids
  arrowId = Mn(Is());
  #e = /* @__PURE__ */ _(() => {
    if (typeof this.opts.style == "string") return Xo(this.opts.style);
    if (!this.opts.style) return {};
  });
  #t = void 0;
  #n = new c5(() => this.arrowRef.current ?? void 0);
  #r = /* @__PURE__ */ _(() => this.#n?.width ?? 0);
  #o = /* @__PURE__ */ _(() => this.#n?.height ?? 0);
  #i = /* @__PURE__ */ _(() => this.opts.side?.current + (this.opts.align.current !== "center" ? `-${this.opts.align.current}` : ""));
  #a = /* @__PURE__ */ _(() => Array.isArray(this.opts.collisionBoundary.current) ? this.opts.collisionBoundary.current : [this.opts.collisionBoundary.current]);
  #s = /* @__PURE__ */ _(() => c(this.#a).length > 0);
  get hasExplicitBoundaries() {
    return c(this.#s);
  }
  set hasExplicitBoundaries(e) {
    K(this.#s, e);
  }
  #l = /* @__PURE__ */ _(() => ({
    padding: this.opts.collisionPadding.current,
    boundary: c(this.#a).filter(O5),
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
  #f = /* @__PURE__ */ _(() => [
    jg({
      mainAxis: this.opts.sideOffset.current + c(this.#o),
      alignmentAxis: this.opts.alignOffset.current
    }),
    this.opts.avoidCollisions.current && Kg({
      mainAxis: !0,
      crossAxis: !1,
      limiter: this.opts.sticky.current === "partial" ? yk() : void 0,
      ...this.detectOverflowOptions
    }),
    this.opts.avoidCollisions.current && Fg({ ...this.detectOverflowOptions }),
    vk({
      ...this.detectOverflowOptions,
      apply: ({ rects: e, availableWidth: n, availableHeight: r }) => {
        const { width: o, height: i } = e.reference;
        K(this.#u, n, !0), K(this.#c, r, !0), K(this.#d, o, !0), K(this.#h, i, !0);
      }
    }),
    this.arrowRef.current && Zg({
      element: this.arrowRef.current,
      padding: this.opts.arrowPadding.current
    }),
    Ck({
      arrowWidth: c(this.#r),
      arrowHeight: c(this.#o)
    }),
    this.opts.hideWhenDetached.current && mk({ strategy: "referenceHidden", ...this.detectOverflowOptions })
  ].filter(Boolean));
  get middleware() {
    return c(this.#f);
  }
  set middleware(e) {
    K(this.#f, e);
  }
  floating;
  #p = /* @__PURE__ */ _(() => $k(this.floating.placement));
  get placedSide() {
    return c(this.#p);
  }
  set placedSide(e) {
    K(this.#p, e);
  }
  #y = /* @__PURE__ */ _(() => Sk(this.floating.placement));
  get placedAlign() {
    return c(this.#y);
  }
  set placedAlign(e) {
    K(this.#y, e);
  }
  #v = /* @__PURE__ */ _(() => this.floating.middlewareData.arrow?.x ?? 0);
  get arrowX() {
    return c(this.#v);
  }
  set arrowX(e) {
    K(this.#v, e);
  }
  #w = /* @__PURE__ */ _(() => this.floating.middlewareData.arrow?.y ?? 0);
  get arrowY() {
    return c(this.#w);
  }
  set arrowY(e) {
    K(this.#w, e);
  }
  #m = /* @__PURE__ */ _(() => this.floating.middlewareData.arrow?.centerOffset !== 0);
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
  #b = /* @__PURE__ */ _(() => kk[this.placedSide]);
  get arrowBaseSide() {
    return c(this.#b);
  }
  set arrowBaseSide(e) {
    K(this.#b, e);
  }
  #x = /* @__PURE__ */ _(() => ({
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
  #k = /* @__PURE__ */ _(() => ({
    "data-side": this.placedSide,
    "data-align": this.placedAlign,
    style: ku({ ...c(this.#e) }),
    ...this.contentAttachment
  }));
  get props() {
    return c(this.#k);
  }
  set props(e) {
    K(this.#k, e);
  }
  #C = /* @__PURE__ */ _(() => ({
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
    }), this.floating = bk({
      strategy: () => this.opts.strategy.current,
      placement: () => c(this.#i),
      middleware: () => this.middleware,
      reference: this.root.anchorNode,
      whileElementsMounted: (...r) => gk(...r, {
        animationFrame: this.#t?.current === "always"
      }),
      open: () => this.opts.enabled.current,
      sideOffset: () => this.opts.sideOffset.current,
      alignOffset: () => this.opts.alignOffset.current
    }), Ie(() => {
      this.floating.isPositioned && this.opts.onPlaced?.current();
    }), wt(() => this.contentRef.current, (r) => {
      if (!r || !this.opts.enabled.current) return;
      const o = sg(r), i = o.requestAnimationFrame(() => {
        if (this.contentRef.current !== r || !this.opts.enabled.current) return;
        const s = o.getComputedStyle(r).zIndex;
        s !== this.contentZIndex && (this.contentZIndex = s);
      });
      return () => {
        o.cancelAnimationFrame(i);
      };
    }), Ie(() => {
      this.floating.floating.current = this.wrapperRef.current;
    });
  }
}
class Zs {
  static create(e, n = !1) {
    return n ? new Zs(e, Bu.get()) : new Zs(e, Iu.get());
  }
  opts;
  root;
  constructor(e, n) {
    this.opts = e, this.root = n, e.virtualEl && e.virtualEl.current ? n.triggerNode = M7(e.virtualEl.current) : n.triggerNode = e.ref;
  }
}
function Ck(t) {
  return {
    name: "transformOrigin",
    options: t,
    fn(e) {
      const { placement: n, rects: r, middlewareData: o } = e, i = o.arrow?.centerOffset !== 0, s = i ? 0 : t.arrowWidth, a = i ? 0 : t.arrowHeight, [l, u] = Ru(n), d = { start: "0%", center: "50%", end: "100%" }[u], h = (o.arrow?.x ?? 0) + s / 2, p = (o.arrow?.y ?? 0) + a / 2;
      let v = "", m = "";
      return l === "bottom" ? (v = i ? d : `${h}px`, m = `${-a}px`) : l === "top" ? (v = i ? d : `${h}px`, m = `${r.floating.height + a}px`) : l === "right" ? (v = `${-a}px`, m = i ? d : `${p}px`) : l === "left" && (v = `${r.floating.width + a}px`, m = i ? d : `${p}px`), { data: { x: v, y: m } };
    }
  };
}
function Ru(t) {
  const [e, n = "center"] = t.split("-");
  return [e, n];
}
function $k(t) {
  return Ru(t)[0];
}
function Sk(t) {
  return Ru(t)[1];
}
function qg(t, e) {
  ae(e, !0);
  let n = g(e, "children", 7), r = g(e, "tooltip", 7, !1);
  Ks.create(r());
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
  }, i = ce(), s = U(i);
  return Pe(s, () => n() ?? je), z(t, i), le(o);
}
ie(qg, { children: {}, tooltip: {} }, [], [], !0);
class _k {
  #e;
  #t = /* @__PURE__ */ _(() => this.#e.candidateValues());
  #n;
  constructor(e) {
    this.#e = e, this.#n = Cg("", { afterMs: 1e3, getWindow: this.#e.getWindow }), this.handleTypeaheadSearch = this.handleTypeaheadSearch.bind(this), this.resetTypeahead = this.resetTypeahead.bind(this);
  }
  handleTypeaheadSearch(e) {
    if (!this.#e.enabled() || !c(this.#t).length) return;
    this.#n.current = this.#n.current + e;
    const n = this.#e.getCurrentItem(), r = c(this.#t).find((a) => a === n) ?? "", o = c(this.#t).map((a) => a ?? ""), i = $u(o, this.#n.current, r), s = c(this.#t).find((a) => a === i);
    return s && this.#e.onMatch(s), s;
  }
  resetTypeahead() {
    this.#n.current = "";
  }
}
const Ok = [qo, dg, ug], Pk = [uo, cg, lg], Ek = [...Ok, ...Pk], Nk = Cu({
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
}), Ai = new zr("Select.Root | Combobox.Root"), Yg = new zr("Select.Content | Combobox.Content");
class Gg {
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
  #s = /* @__PURE__ */ _(() => this.highlightedNode ? this.highlightedNode.getAttribute("data-value") : null);
  get highlightedValue() {
    return c(this.#s);
  }
  set highlightedValue(e) {
    K(this.#s, e);
  }
  #l = /* @__PURE__ */ _(() => {
    if (this.highlightedNode)
      return this.highlightedNode.id;
  });
  get highlightedId() {
    return c(this.#l);
  }
  set highlightedId(e) {
    K(this.#l, e);
  }
  #u = /* @__PURE__ */ _(() => this.highlightedNode ? this.highlightedNode.getAttribute("data-label") : null);
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
  domContext = new Mi(() => null);
  constructor(e) {
    this.opts = e, this.isCombobox = e.isCombobox, this.contentPresence = new E5({
      ref: pe(() => this.contentNode),
      open: this.opts.open,
      onComplete: () => {
        this.opts.onOpenChangeComplete.current(this.opts.open.current);
      }
    }), Ft(() => {
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
  getBitsAttr = (e) => Nk.getAttr(e, this.isCombobox ? "combobox" : void 0);
}
class Mk extends Gg {
  opts;
  isMulti = !1;
  #e = /* @__PURE__ */ _(() => this.opts.value.current !== "");
  get hasValue() {
    return c(this.#e);
  }
  set hasValue(e) {
    K(this.#e, e);
  }
  #t = /* @__PURE__ */ _(() => this.opts.items.current.length ? this.opts.items.current.find((e) => e.value === this.opts.value.current)?.label ?? "" : "");
  get currentLabel() {
    return c(this.#t);
  }
  set currentLabel(e) {
    K(this.#t, e);
  }
  #n = /* @__PURE__ */ _(() => this.opts.items.current.length ? this.opts.items.current.filter((e) => !e.disabled).map((e) => e.label) : []);
  get candidateLabels() {
    return c(this.#n);
  }
  set candidateLabels(e) {
    K(this.#n, e);
  }
  #r = /* @__PURE__ */ _(() => !(this.isMulti || this.opts.items.current.length === 0));
  get dataTypeaheadEnabled() {
    return c(this.#r);
  }
  set dataTypeaheadEnabled(e) {
    K(this.#r, e);
  }
  constructor(e) {
    super(e), this.opts = e, Ie(() => {
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
    Ni(() => {
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
class zk extends Gg {
  opts;
  isMulti = !0;
  #e = /* @__PURE__ */ _(() => this.opts.value.current.length > 0);
  get hasValue() {
    return c(this.#e);
  }
  set hasValue(e) {
    K(this.#e, e);
  }
  constructor(e) {
    super(e), this.opts = e, Ie(() => {
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
    Ni(() => {
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
class Ak {
  static create(e) {
    const { type: n, ...r } = e, o = n === "single" ? new Mk(r) : new zk(r);
    return Ai.set(o);
  }
}
class ju {
  static create(e) {
    return new ju(e, Ai.get());
  }
  opts;
  root;
  attachment;
  #e;
  #t;
  constructor(e, n) {
    this.opts = e, this.root = n, this.attachment = kr(e.ref, (r) => this.root.triggerNode = r), this.root.domContext = new Mi(e.ref), this.#e = new i3({
      getCurrentItem: () => this.root.highlightedNode,
      onMatch: (r) => {
        this.root.setHighlightedNode(r);
      },
      getActiveElement: () => this.root.domContext.getActiveElement(),
      getWindow: () => this.root.domContext.getWindow()
    }), this.#t = new _k({
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
    if (this.root.isUsingKeyboard = !0, (e.key === uo || e.key === qo) && e.preventDefault(), !this.root.opts.open.current) {
      if (e.key === fl || e.key === as || e.key === qo || e.key === uo)
        e.preventDefault(), this.root.handleOpen();
      else if (!this.root.isMulti && this.root.dataTypeaheadEnabled) {
        this.#t.handleTypeaheadSearch(e.key);
        return;
      }
      if (this.root.hasValue) return;
      const s = this.root.getCandidateNodes();
      if (!s.length) return;
      if (e.key === qo) {
        const a = s[0];
        this.root.setHighlightedNode(a);
      } else if (e.key === uo) {
        const a = s[s.length - 1];
        this.root.setHighlightedNode(a);
      }
      return;
    }
    if (e.key === hd) {
      this.root.handleClose();
      return;
    }
    if ((e.key === fl || // if we're currently "typing ahead", we don't want to select the item
    // just yet as the item the user is trying to get to may have a space in it,
    // so we defer handling the close for this case until further down
    e.key === as && this.#e.search === "") && !e.isComposing && (e.preventDefault(), this.#o()))
      return;
    if (e.key === uo && e.altKey && this.root.handleClose(), Ek.includes(e.key)) {
      e.preventDefault();
      const s = this.root.getCandidateNodes(), a = this.root.highlightedNode, l = a ? s.indexOf(a) : -1, u = this.root.opts.loop.current;
      let d;
      if (e.key === qo ? d = e3(s, l, u) : e.key === uo ? d = t3(s, l, u) : e.key === cg ? d = n3(s, l, 10, u) : e.key === dg ? d = r3(s, l, 10, u) : e.key === ug ? d = s[0] : e.key === lg && (d = s[s.length - 1]), !d) return;
      this.root.setHighlightedNode(d);
      return;
    }
    const n = e.ctrlKey || e.altKey || e.metaKey, r = e.key.length === 1, o = e.key === as, i = this.root.getCandidateNodes();
    if (e.key !== hd) {
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
  #i = /* @__PURE__ */ _(() => ({
    id: this.opts.id.current,
    disabled: this.root.opts.disabled.current ? !0 : void 0,
    "aria-haspopup": "listbox",
    "aria-expanded": pl(this.root.opts.open.current),
    "aria-activedescendant": this.root.highlightedId,
    "data-state": ag(this.root.opts.open.current),
    "data-disabled": Ts(this.root.opts.disabled.current),
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
class Ku {
  static create(e) {
    return Yg.set(new Ku(e, Ai.get()));
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
    this.opts = e, this.root = n, this.attachment = kr(e.ref, (r) => this.root.contentNode = r), this.domContext = new Mi(this.opts.ref), this.root.domContext === null && (this.root.domContext = this.domContext), zo(() => {
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
  #t = /* @__PURE__ */ _(() => wk(this.root.isCombobox ? "combobox" : "select"));
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
  #n = /* @__PURE__ */ _(() => ({ open: this.root.opts.open.current }));
  get snippetProps() {
    return c(this.#n);
  }
  set snippetProps(e) {
    K(this.#n, e);
  }
  #r = /* @__PURE__ */ _(() => ({
    id: this.opts.id.current,
    role: "listbox",
    "aria-multiselectable": this.root.isMulti ? "true" : void 0,
    "data-state": ag(this.root.opts.open.current),
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
class Fu {
  static create(e) {
    return new Fu(e, Ai.get());
  }
  opts;
  root;
  attachment;
  #e = /* @__PURE__ */ _(() => this.root.includesItem(this.opts.value.current));
  get isSelected() {
    return c(this.#e);
  }
  set isSelected(e) {
    K(this.#e, e);
  }
  #t = /* @__PURE__ */ _(() => this.root.highlightedValue === this.opts.value.current);
  get isHighlighted() {
    return c(this.#t);
  }
  set isHighlighted(e) {
    K(this.#t, e);
  }
  prevHighlighted = new d5(() => this.isHighlighted);
  #n = /* @__PURE__ */ me(!1);
  get mounted() {
    return c(this.#n);
  }
  set mounted(e) {
    K(this.#n, e, !0);
  }
  constructor(e, n) {
    this.opts = e, this.root = n, this.attachment = kr(e.ref), wt([() => this.isHighlighted, () => this.prevHighlighted.current], () => {
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
  #r = /* @__PURE__ */ _(() => ({ selected: this.isSelected, highlighted: this.isHighlighted }));
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
      if (e.pointerType === "touch" && !gl) {
        ht(
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
  #o = /* @__PURE__ */ _(() => ({
    id: this.opts.id.current,
    role: "option",
    "aria-selected": this.root.includesItem(this.opts.value.current) ? "true" : void 0,
    "data-value": this.opts.value.current,
    "data-disabled": Ts(this.opts.disabled.current),
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
class Zu {
  static create(e) {
    return new Zu(e, Ai.get());
  }
  opts;
  root;
  #e = /* @__PURE__ */ _(() => this.root.opts.name.current !== "");
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
  #t = /* @__PURE__ */ _(() => ({
    disabled: dd(this.root.opts.disabled.current),
    required: dd(this.root.opts.required.current),
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
class Wu {
  static create(e) {
    return new Wu(e, Yg.get());
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
    this.opts = e, this.content = n, this.root = n.root, this.attachment = kr(e.ref, (r) => {
      this.root.viewportNode = r;
    });
  }
  #t = /* @__PURE__ */ _(() => ({
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
function us(t, e) {
  ae(e, !0);
  let n = g(e, "value", 15), r = g(e, "autocomplete", 7);
  const o = Zu.create({ value: pe(() => n()) });
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
  }, s = ce(), a = U(s);
  {
    var l = (u) => {
      zu(u, Re(() => o.props, {
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
  return z(t, s), le(i);
}
ie(us, { value: {}, autocomplete: {} }, [], [], !0);
function Ug(t, e) {
  ae(e, !0);
  let n = g(e, "id", 7), r = g(e, "children", 7), o = g(e, "virtualEl", 7), i = g(e, "ref", 7), s = g(e, "tooltip", 7, !1);
  Zs.create(
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
  }, l = ce(), u = U(l);
  return Pe(u, () => r() ?? je), z(t, l), le(a);
}
ie(Ug, { id: {}, children: {}, virtualEl: {}, ref: {}, tooltip: {} }, [], [], !0);
function Jg(t, e) {
  ae(e, !0);
  let n = g(e, "content", 7), r = g(e, "side", 7, "bottom"), o = g(e, "sideOffset", 7, 0), i = g(e, "align", 7, "center"), s = g(e, "alignOffset", 7, 0), a = g(e, "id", 7), l = g(e, "arrowPadding", 7, 0), u = g(e, "avoidCollisions", 7, !0), d = g(e, "collisionBoundary", 23, () => []), h = g(e, "collisionPadding", 7, 0), p = g(e, "hideWhenDetached", 7, !1), v = g(e, "onPlaced", 7, () => {
  }), m = g(e, "sticky", 7, "partial"), y = g(e, "updatePositionStrategy", 7, "optimized"), w = g(e, "strategy", 7, "fixed"), b = g(e, "dir", 7, "ltr"), k = g(e, "style", 23, () => ({})), O = g(e, "wrapperId", 23, Is), C = g(e, "customAnchor", 7, null), x = g(e, "enabled", 7), E = g(e, "tooltip", 7, !1);
  const V = Fs.create(
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
  ), L = /* @__PURE__ */ _(() => Dn(V.wrapperProps, { style: { pointerEvents: "auto" } }));
  var I = {
    get content() {
      return n();
    },
    set content(S) {
      n(S), f();
    },
    get side() {
      return r();
    },
    set side(S = "bottom") {
      r(S), f();
    },
    get sideOffset() {
      return o();
    },
    set sideOffset(S = 0) {
      o(S), f();
    },
    get align() {
      return i();
    },
    set align(S = "center") {
      i(S), f();
    },
    get alignOffset() {
      return s();
    },
    set alignOffset(S = 0) {
      s(S), f();
    },
    get id() {
      return a();
    },
    set id(S) {
      a(S), f();
    },
    get arrowPadding() {
      return l();
    },
    set arrowPadding(S = 0) {
      l(S), f();
    },
    get avoidCollisions() {
      return u();
    },
    set avoidCollisions(S = !0) {
      u(S), f();
    },
    get collisionBoundary() {
      return d();
    },
    set collisionBoundary(S = []) {
      d(S), f();
    },
    get collisionPadding() {
      return h();
    },
    set collisionPadding(S = 0) {
      h(S), f();
    },
    get hideWhenDetached() {
      return p();
    },
    set hideWhenDetached(S = !1) {
      p(S), f();
    },
    get onPlaced() {
      return v();
    },
    set onPlaced(S = () => {
    }) {
      v(S), f();
    },
    get sticky() {
      return m();
    },
    set sticky(S = "partial") {
      m(S), f();
    },
    get updatePositionStrategy() {
      return y();
    },
    set updatePositionStrategy(S = "optimized") {
      y(S), f();
    },
    get strategy() {
      return w();
    },
    set strategy(S = "fixed") {
      w(S), f();
    },
    get dir() {
      return b();
    },
    set dir(S = "ltr") {
      b(S), f();
    },
    get style() {
      return k();
    },
    set style(S = {}) {
      k(S), f();
    },
    get wrapperId() {
      return O();
    },
    set wrapperId(S = Is()) {
      O(S), f();
    },
    get customAnchor() {
      return C();
    },
    set customAnchor(S = null) {
      C(S), f();
    },
    get enabled() {
      return x();
    },
    set enabled(S) {
      x(S), f();
    },
    get tooltip() {
      return E();
    },
    set tooltip(S = !1) {
      E(S), f();
    }
  }, D = ce(), N = U(D);
  return Pe(N, () => n() ?? je, () => ({ props: V.props, wrapperProps: c(L) })), z(t, D), le(I);
}
ie(
  Jg,
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
function Qg(t, e) {
  ae(e, !0);
  let n = g(e, "content", 7), r = g(e, "onPlaced", 7);
  kn(() => {
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
  }, i = ce(), s = U(i);
  return Pe(s, () => n() ?? je, () => ({ props: {}, wrapperProps: {} })), z(t, i), le(o);
}
ie(Qg, { content: {}, onPlaced: {} }, [], [], !0);
function ev(t, e) {
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
  }, a = ce(), l = U(a);
  {
    var u = (h) => {
      Qg(h, {
        get content() {
          return n();
        },
        get onPlaced() {
          return o();
        }
      });
    }, d = (h) => {
      Jg(h, Re(
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
  return z(t, a), le(s);
}
ie(ev, { content: {}, isStatic: {}, onPlaced: {} }, [], [], !0);
var Tk = /* @__PURE__ */ ne("<!> <!>", 1);
function Xu(t, e) {
  ae(e, !0);
  let n = g(e, "popper", 7), r = g(e, "onEscapeKeydown", 7), o = g(e, "escapeKeydownBehavior", 7), i = g(e, "preventOverflowTextSelection", 7), s = g(e, "id", 7), a = g(e, "onPointerDown", 7), l = g(e, "onPointerUp", 7), u = g(e, "side", 7), d = g(e, "sideOffset", 7), h = g(e, "align", 7), p = g(e, "alignOffset", 7), v = g(e, "arrowPadding", 7), m = g(e, "avoidCollisions", 7), y = g(e, "collisionBoundary", 7), w = g(e, "collisionPadding", 7), b = g(e, "sticky", 7), k = g(e, "hideWhenDetached", 7), O = g(e, "updatePositionStrategy", 7), C = g(e, "strategy", 7), x = g(e, "dir", 7), E = g(e, "preventScroll", 7), V = g(e, "wrapperId", 7), L = g(e, "style", 7), I = g(e, "onPlaced", 7), D = g(e, "onInteractOutside", 7), N = g(e, "onCloseAutoFocus", 7), S = g(e, "onOpenAutoFocus", 7), T = g(e, "onFocusOutside", 7), $ = g(e, "interactOutsideBehavior", 7, "close"), P = g(e, "loop", 7), M = g(e, "trapFocus", 7, !0), j = g(e, "isValidEvent", 7, () => !1), q = g(e, "customAnchor", 7, null), G = g(e, "isStatic", 7, !1), A = g(e, "enabled", 7), Y = g(e, "ref", 7), ee = g(e, "tooltip", 7, !1), R = g(e, "contentPointerEvents", 7, "auto"), F = /* @__PURE__ */ De(e, [
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
  const W = /* @__PURE__ */ _(() => E() ?? !0), J = /* @__PURE__ */ _(() => C() ?? (c(W) ? "fixed" : "absolute"));
  var re = {
    get popper() {
      return n();
    },
    set popper(H) {
      n(H), f();
    },
    get onEscapeKeydown() {
      return r();
    },
    set onEscapeKeydown(H) {
      r(H), f();
    },
    get escapeKeydownBehavior() {
      return o();
    },
    set escapeKeydownBehavior(H) {
      o(H), f();
    },
    get preventOverflowTextSelection() {
      return i();
    },
    set preventOverflowTextSelection(H) {
      i(H), f();
    },
    get id() {
      return s();
    },
    set id(H) {
      s(H), f();
    },
    get onPointerDown() {
      return a();
    },
    set onPointerDown(H) {
      a(H), f();
    },
    get onPointerUp() {
      return l();
    },
    set onPointerUp(H) {
      l(H), f();
    },
    get side() {
      return u();
    },
    set side(H) {
      u(H), f();
    },
    get sideOffset() {
      return d();
    },
    set sideOffset(H) {
      d(H), f();
    },
    get align() {
      return h();
    },
    set align(H) {
      h(H), f();
    },
    get alignOffset() {
      return p();
    },
    set alignOffset(H) {
      p(H), f();
    },
    get arrowPadding() {
      return v();
    },
    set arrowPadding(H) {
      v(H), f();
    },
    get avoidCollisions() {
      return m();
    },
    set avoidCollisions(H) {
      m(H), f();
    },
    get collisionBoundary() {
      return y();
    },
    set collisionBoundary(H) {
      y(H), f();
    },
    get collisionPadding() {
      return w();
    },
    set collisionPadding(H) {
      w(H), f();
    },
    get sticky() {
      return b();
    },
    set sticky(H) {
      b(H), f();
    },
    get hideWhenDetached() {
      return k();
    },
    set hideWhenDetached(H) {
      k(H), f();
    },
    get updatePositionStrategy() {
      return O();
    },
    set updatePositionStrategy(H) {
      O(H), f();
    },
    get strategy() {
      return C();
    },
    set strategy(H) {
      C(H), f();
    },
    get dir() {
      return x();
    },
    set dir(H) {
      x(H), f();
    },
    get preventScroll() {
      return E();
    },
    set preventScroll(H) {
      E(H), f();
    },
    get wrapperId() {
      return V();
    },
    set wrapperId(H) {
      V(H), f();
    },
    get style() {
      return L();
    },
    set style(H) {
      L(H), f();
    },
    get onPlaced() {
      return I();
    },
    set onPlaced(H) {
      I(H), f();
    },
    get onInteractOutside() {
      return D();
    },
    set onInteractOutside(H) {
      D(H), f();
    },
    get onCloseAutoFocus() {
      return N();
    },
    set onCloseAutoFocus(H) {
      N(H), f();
    },
    get onOpenAutoFocus() {
      return S();
    },
    set onOpenAutoFocus(H) {
      S(H), f();
    },
    get onFocusOutside() {
      return T();
    },
    set onFocusOutside(H) {
      T(H), f();
    },
    get interactOutsideBehavior() {
      return $();
    },
    set interactOutsideBehavior(H = "close") {
      $(H), f();
    },
    get loop() {
      return P();
    },
    set loop(H) {
      P(H), f();
    },
    get trapFocus() {
      return M();
    },
    set trapFocus(H = !0) {
      M(H), f();
    },
    get isValidEvent() {
      return j();
    },
    set isValidEvent(H = () => !1) {
      j(H), f();
    },
    get customAnchor() {
      return q();
    },
    set customAnchor(H = null) {
      q(H), f();
    },
    get isStatic() {
      return G();
    },
    set isStatic(H = !1) {
      G(H), f();
    },
    get enabled() {
      return A();
    },
    set enabled(H) {
      A(H), f();
    },
    get ref() {
      return Y();
    },
    set ref(H) {
      Y(H), f();
    },
    get tooltip() {
      return ee();
    },
    set tooltip(H = !1) {
      ee(H), f();
    },
    get contentPointerEvents() {
      return R();
    },
    set contentPointerEvents(H = "auto") {
      R(H), f();
    }
  };
  return ev(t, {
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
      return c(J);
    },
    get dir() {
      return x();
    },
    get wrapperId() {
      return V();
    },
    get style() {
      return L();
    },
    get onPlaced() {
      return I();
    },
    get customAnchor() {
      return q();
    },
    get enabled() {
      return A();
    },
    get tooltip() {
      return ee();
    },
    content: (H, te) => {
      let ve = () => te?.().props, he = () => te?.().wrapperProps;
      var oe = Tk(), ue = U(oe);
      {
        var fe = (de) => {
          wl(de, {
            get preventScroll() {
              return c(W);
            }
          });
        }, ye = (de) => {
          var xe = ce(), Ve = U(xe);
          {
            var Q = (Me) => {
              wl(Me, {
                get preventScroll() {
                  return c(W);
                }
              });
            };
            se(
              Ve,
              (Me) => {
                e.forceMount || Me(Q);
              },
              !0
            );
          }
          z(de, xe);
        };
        se(ue, (de) => {
          e.forceMount && A() ? de(fe) : de(ye, !1);
        });
      }
      var Ce = B(ue, 2);
      _g(Ce, {
        get onOpenAutoFocus() {
          return S();
        },
        get onCloseAutoFocus() {
          return N();
        },
        get loop() {
          return P();
        },
        get enabled() {
          return A();
        },
        get trapFocus() {
          return M();
        },
        get forceMount() {
          return e.forceMount;
        },
        get ref() {
          return Y();
        },
        focusScope: (de, xe) => {
          let Ve = () => xe?.().props;
          Sg(de, {
            get onEscapeKeydown() {
              return r();
            },
            get escapeKeydownBehavior() {
              return o();
            },
            get enabled() {
              return A();
            },
            get ref() {
              return Y();
            },
            children: (Q, Me) => {
              $g(Q, {
                get id() {
                  return s();
                },
                get onInteractOutside() {
                  return D();
                },
                get onFocusOutside() {
                  return T();
                },
                get interactOutsideBehavior() {
                  return $();
                },
                get isValidEvent() {
                  return j();
                },
                get enabled() {
                  return A();
                },
                get ref() {
                  return Y();
                },
                children: (Ne, Fe) => {
                  let Le = () => Fe?.().props;
                  Og(Ne, {
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
                      return A();
                    },
                    get ref() {
                      return Y();
                    },
                    children: (Ze, ft) => {
                      var bt = ce(), nt = U(bt);
                      {
                        let ge = /* @__PURE__ */ _(() => ({
                          props: Dn(F, ve(), Le(), Ve(), { style: { pointerEvents: R() } }),
                          wrapperProps: he()
                        }));
                        Pe(nt, () => n() ?? je, () => c(ge));
                      }
                      z(Ze, bt);
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
      }), z(H, oe);
    },
    $$slots: { content: !0 }
  }), le(re);
}
ie(
  Xu,
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
function tv(t, e) {
  ae(e, !0);
  let n = g(e, "popper", 7), r = g(e, "open", 7), o = g(e, "onEscapeKeydown", 7), i = g(e, "escapeKeydownBehavior", 7), s = g(e, "preventOverflowTextSelection", 7), a = g(e, "id", 7), l = g(e, "onPointerDown", 7), u = g(e, "onPointerUp", 7), d = g(e, "side", 7), h = g(e, "sideOffset", 7), p = g(e, "align", 7), v = g(e, "alignOffset", 7), m = g(e, "arrowPadding", 7), y = g(e, "avoidCollisions", 7), w = g(e, "collisionBoundary", 7), b = g(e, "collisionPadding", 7), k = g(e, "sticky", 7), O = g(e, "hideWhenDetached", 7), C = g(e, "updatePositionStrategy", 7), x = g(e, "strategy", 7), E = g(e, "dir", 7), V = g(e, "preventScroll", 7), L = g(e, "wrapperId", 7), I = g(e, "style", 7), D = g(e, "onPlaced", 7), N = g(e, "onInteractOutside", 7), S = g(e, "onCloseAutoFocus", 7), T = g(e, "onOpenAutoFocus", 7), $ = g(e, "onFocusOutside", 7), P = g(e, "interactOutsideBehavior", 7, "close"), M = g(e, "loop", 7), j = g(e, "trapFocus", 7, !0), q = g(e, "isValidEvent", 7, () => !1), G = g(e, "customAnchor", 7, null), A = g(e, "isStatic", 7, !1), Y = g(e, "ref", 7), ee = g(e, "shouldRender", 7), R = /* @__PURE__ */ De(e, [
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
    set popper(H) {
      n(H), f();
    },
    get open() {
      return r();
    },
    set open(H) {
      r(H), f();
    },
    get onEscapeKeydown() {
      return o();
    },
    set onEscapeKeydown(H) {
      o(H), f();
    },
    get escapeKeydownBehavior() {
      return i();
    },
    set escapeKeydownBehavior(H) {
      i(H), f();
    },
    get preventOverflowTextSelection() {
      return s();
    },
    set preventOverflowTextSelection(H) {
      s(H), f();
    },
    get id() {
      return a();
    },
    set id(H) {
      a(H), f();
    },
    get onPointerDown() {
      return l();
    },
    set onPointerDown(H) {
      l(H), f();
    },
    get onPointerUp() {
      return u();
    },
    set onPointerUp(H) {
      u(H), f();
    },
    get side() {
      return d();
    },
    set side(H) {
      d(H), f();
    },
    get sideOffset() {
      return h();
    },
    set sideOffset(H) {
      h(H), f();
    },
    get align() {
      return p();
    },
    set align(H) {
      p(H), f();
    },
    get alignOffset() {
      return v();
    },
    set alignOffset(H) {
      v(H), f();
    },
    get arrowPadding() {
      return m();
    },
    set arrowPadding(H) {
      m(H), f();
    },
    get avoidCollisions() {
      return y();
    },
    set avoidCollisions(H) {
      y(H), f();
    },
    get collisionBoundary() {
      return w();
    },
    set collisionBoundary(H) {
      w(H), f();
    },
    get collisionPadding() {
      return b();
    },
    set collisionPadding(H) {
      b(H), f();
    },
    get sticky() {
      return k();
    },
    set sticky(H) {
      k(H), f();
    },
    get hideWhenDetached() {
      return O();
    },
    set hideWhenDetached(H) {
      O(H), f();
    },
    get updatePositionStrategy() {
      return C();
    },
    set updatePositionStrategy(H) {
      C(H), f();
    },
    get strategy() {
      return x();
    },
    set strategy(H) {
      x(H), f();
    },
    get dir() {
      return E();
    },
    set dir(H) {
      E(H), f();
    },
    get preventScroll() {
      return V();
    },
    set preventScroll(H) {
      V(H), f();
    },
    get wrapperId() {
      return L();
    },
    set wrapperId(H) {
      L(H), f();
    },
    get style() {
      return I();
    },
    set style(H) {
      I(H), f();
    },
    get onPlaced() {
      return D();
    },
    set onPlaced(H) {
      D(H), f();
    },
    get onInteractOutside() {
      return N();
    },
    set onInteractOutside(H) {
      N(H), f();
    },
    get onCloseAutoFocus() {
      return S();
    },
    set onCloseAutoFocus(H) {
      S(H), f();
    },
    get onOpenAutoFocus() {
      return T();
    },
    set onOpenAutoFocus(H) {
      T(H), f();
    },
    get onFocusOutside() {
      return $();
    },
    set onFocusOutside(H) {
      $(H), f();
    },
    get interactOutsideBehavior() {
      return P();
    },
    set interactOutsideBehavior(H = "close") {
      P(H), f();
    },
    get loop() {
      return M();
    },
    set loop(H) {
      M(H), f();
    },
    get trapFocus() {
      return j();
    },
    set trapFocus(H = !0) {
      j(H), f();
    },
    get isValidEvent() {
      return q();
    },
    set isValidEvent(H = () => !1) {
      q(H), f();
    },
    get customAnchor() {
      return G();
    },
    set customAnchor(H = null) {
      G(H), f();
    },
    get isStatic() {
      return A();
    },
    set isStatic(H = !1) {
      A(H), f();
    },
    get ref() {
      return Y();
    },
    set ref(H) {
      Y(H), f();
    },
    get shouldRender() {
      return ee();
    },
    set shouldRender(H) {
      ee(H), f();
    }
  }, W = ce(), J = U(W);
  {
    var re = (H) => {
      Xu(H, Re(
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
            return L();
          },
          get style() {
            return I();
          },
          get onPlaced() {
            return D();
          },
          get customAnchor() {
            return G();
          },
          get isStatic() {
            return A();
          },
          get enabled() {
            return r();
          },
          get onInteractOutside() {
            return N();
          },
          get onCloseAutoFocus() {
            return S();
          },
          get onOpenAutoFocus() {
            return T();
          },
          get interactOutsideBehavior() {
            return P();
          },
          get loop() {
            return M();
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
            return Y();
          }
        },
        () => R
      ));
    };
    se(J, (H) => {
      ee() && H(re);
    });
  }
  return z(t, W), le(F);
}
ie(
  tv,
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
function nv(t, e) {
  ae(e, !0);
  let n = g(e, "popper", 7), r = g(e, "onEscapeKeydown", 7), o = g(e, "escapeKeydownBehavior", 7), i = g(e, "preventOverflowTextSelection", 7), s = g(e, "id", 7), a = g(e, "onPointerDown", 7), l = g(e, "onPointerUp", 7), u = g(e, "side", 7), d = g(e, "sideOffset", 7), h = g(e, "align", 7), p = g(e, "alignOffset", 7), v = g(e, "arrowPadding", 7), m = g(e, "avoidCollisions", 7), y = g(e, "collisionBoundary", 7), w = g(e, "collisionPadding", 7), b = g(e, "sticky", 7), k = g(e, "hideWhenDetached", 7), O = g(e, "updatePositionStrategy", 7), C = g(e, "strategy", 7), x = g(e, "dir", 7), E = g(e, "preventScroll", 7), V = g(e, "wrapperId", 7), L = g(e, "style", 7), I = g(e, "onPlaced", 7), D = g(e, "onInteractOutside", 7), N = g(e, "onCloseAutoFocus", 7), S = g(e, "onOpenAutoFocus", 7), T = g(e, "onFocusOutside", 7), $ = g(e, "interactOutsideBehavior", 7, "close"), P = g(e, "loop", 7), M = g(e, "trapFocus", 7, !0), j = g(e, "isValidEvent", 7, () => !1), q = g(e, "customAnchor", 7, null), G = g(e, "isStatic", 7, !1), A = g(e, "enabled", 7), Y = /* @__PURE__ */ De(e, [
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
    set popper(R) {
      n(R), f();
    },
    get onEscapeKeydown() {
      return r();
    },
    set onEscapeKeydown(R) {
      r(R), f();
    },
    get escapeKeydownBehavior() {
      return o();
    },
    set escapeKeydownBehavior(R) {
      o(R), f();
    },
    get preventOverflowTextSelection() {
      return i();
    },
    set preventOverflowTextSelection(R) {
      i(R), f();
    },
    get id() {
      return s();
    },
    set id(R) {
      s(R), f();
    },
    get onPointerDown() {
      return a();
    },
    set onPointerDown(R) {
      a(R), f();
    },
    get onPointerUp() {
      return l();
    },
    set onPointerUp(R) {
      l(R), f();
    },
    get side() {
      return u();
    },
    set side(R) {
      u(R), f();
    },
    get sideOffset() {
      return d();
    },
    set sideOffset(R) {
      d(R), f();
    },
    get align() {
      return h();
    },
    set align(R) {
      h(R), f();
    },
    get alignOffset() {
      return p();
    },
    set alignOffset(R) {
      p(R), f();
    },
    get arrowPadding() {
      return v();
    },
    set arrowPadding(R) {
      v(R), f();
    },
    get avoidCollisions() {
      return m();
    },
    set avoidCollisions(R) {
      m(R), f();
    },
    get collisionBoundary() {
      return y();
    },
    set collisionBoundary(R) {
      y(R), f();
    },
    get collisionPadding() {
      return w();
    },
    set collisionPadding(R) {
      w(R), f();
    },
    get sticky() {
      return b();
    },
    set sticky(R) {
      b(R), f();
    },
    get hideWhenDetached() {
      return k();
    },
    set hideWhenDetached(R) {
      k(R), f();
    },
    get updatePositionStrategy() {
      return O();
    },
    set updatePositionStrategy(R) {
      O(R), f();
    },
    get strategy() {
      return C();
    },
    set strategy(R) {
      C(R), f();
    },
    get dir() {
      return x();
    },
    set dir(R) {
      x(R), f();
    },
    get preventScroll() {
      return E();
    },
    set preventScroll(R) {
      E(R), f();
    },
    get wrapperId() {
      return V();
    },
    set wrapperId(R) {
      V(R), f();
    },
    get style() {
      return L();
    },
    set style(R) {
      L(R), f();
    },
    get onPlaced() {
      return I();
    },
    set onPlaced(R) {
      I(R), f();
    },
    get onInteractOutside() {
      return D();
    },
    set onInteractOutside(R) {
      D(R), f();
    },
    get onCloseAutoFocus() {
      return N();
    },
    set onCloseAutoFocus(R) {
      N(R), f();
    },
    get onOpenAutoFocus() {
      return S();
    },
    set onOpenAutoFocus(R) {
      S(R), f();
    },
    get onFocusOutside() {
      return T();
    },
    set onFocusOutside(R) {
      T(R), f();
    },
    get interactOutsideBehavior() {
      return $();
    },
    set interactOutsideBehavior(R = "close") {
      $(R), f();
    },
    get loop() {
      return P();
    },
    set loop(R) {
      P(R), f();
    },
    get trapFocus() {
      return M();
    },
    set trapFocus(R = !0) {
      M(R), f();
    },
    get isValidEvent() {
      return j();
    },
    set isValidEvent(R = () => !1) {
      j(R), f();
    },
    get customAnchor() {
      return q();
    },
    set customAnchor(R = null) {
      q(R), f();
    },
    get isStatic() {
      return G();
    },
    set isStatic(R = !1) {
      G(R), f();
    },
    get enabled() {
      return A();
    },
    set enabled(R) {
      A(R), f();
    }
  };
  return Xu(t, Re(
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
        return L();
      },
      get onPlaced() {
        return I();
      },
      get customAnchor() {
        return q();
      },
      get isStatic() {
        return G();
      },
      get enabled() {
        return A();
      },
      get onInteractOutside() {
        return D();
      },
      get onCloseAutoFocus() {
        return N();
      },
      get onOpenAutoFocus() {
        return S();
      },
      get interactOutsideBehavior() {
        return $();
      },
      get loop() {
        return P();
      },
      get trapFocus() {
        return M();
      },
      get isValidEvent() {
        return j();
      },
      get onFocusOutside() {
        return T();
      }
    },
    () => Y,
    { forceMount: !0 }
  )), le(ee);
}
ie(
  nv,
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
var Dk = /* @__PURE__ */ ne("<div><div><!></div></div>"), Vk = /* @__PURE__ */ ne("<div><div><!></div></div>");
function Cl(t, e) {
  const n = yi();
  ae(e, !0);
  let r = g(e, "id", 23, () => Hn(n)), o = g(e, "ref", 15, null), i = g(e, "forceMount", 7, !1), s = g(e, "side", 7, "bottom"), a = g(e, "onInteractOutside", 7, Ke), l = g(e, "onEscapeKeydown", 7, Ke), u = g(e, "children", 7), d = g(e, "child", 7), h = g(e, "preventScroll", 7, !1), p = g(e, "style", 7), v = /* @__PURE__ */ De(e, [
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
  const m = Ku.create({
    id: pe(() => r()),
    ref: pe(() => o(), (x) => o(x)),
    onInteractOutside: pe(() => a()),
    onEscapeKeydown: pe(() => l())
  }), y = /* @__PURE__ */ _(() => Dn(v, m.props));
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
    set onInteractOutside(x = Ke) {
      a(x), f();
    },
    get onEscapeKeydown() {
      return l();
    },
    set onEscapeKeydown(x = Ke) {
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
  }, b = ce(), k = U(b);
  {
    var O = (x) => {
      nv(x, Re(() => c(y), () => m.popperProps, {
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
          let L = () => V?.().props, I = () => V?.().wrapperProps;
          const D = /* @__PURE__ */ _(() => Dn(L(), { style: m.props.style }, { style: p() }));
          var N = ce(), S = U(N);
          {
            var T = (P) => {
              var M = ce(), j = U(M);
              {
                let q = /* @__PURE__ */ _(() => ({
                  props: c(D),
                  wrapperProps: I(),
                  ...m.snippetProps
                }));
                Pe(j, d, () => c(q));
              }
              z(P, M);
            }, $ = (P) => {
              var M = Dk();
              Ue(M, () => ({ ...I() }));
              var j = X(M);
              Ue(j, () => ({ ...c(D) }));
              var q = X(j);
              Pe(q, () => u() ?? je), Z(j), Z(M), z(P, M);
            };
            se(S, (P) => {
              d() ? P(T) : P($, !1);
            });
          }
          z(E, N);
        },
        $$slots: { popper: !0 }
      }));
    }, C = (x) => {
      var E = ce(), V = U(E);
      {
        var L = (I) => {
          tv(I, Re(() => c(y), () => m.popperProps, {
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
            popper: (D, N) => {
              let S = () => N?.().props, T = () => N?.().wrapperProps;
              const $ = /* @__PURE__ */ _(() => Dn(S(), { style: m.props.style }, { style: p() }));
              var P = ce(), M = U(P);
              {
                var j = (G) => {
                  var A = ce(), Y = U(A);
                  {
                    let ee = /* @__PURE__ */ _(() => ({
                      props: c($),
                      wrapperProps: T(),
                      ...m.snippetProps
                    }));
                    Pe(Y, d, () => c(ee));
                  }
                  z(G, A);
                }, q = (G) => {
                  var A = Vk();
                  Ue(A, () => ({ ...T() }));
                  var Y = X(A);
                  Ue(Y, () => ({ ...c($) }));
                  var ee = X(Y);
                  Pe(ee, () => u() ?? je), Z(Y), Z(A), z(G, A);
                };
                se(M, (G) => {
                  d() ? G(j) : G(q, !1);
                });
              }
              z(D, P);
            },
            $$slots: { popper: !0 }
          }));
        };
        se(
          V,
          (I) => {
            i() || I(L);
          },
          !0
        );
      }
      z(x, E);
    };
    se(k, (x) => {
      i() ? x(O) : x(C, !1);
    });
  }
  return z(t, b), le(w);
}
ie(
  Cl,
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
function rv(t, e) {
  ae(e, !0);
  let n = g(e, "mounted", 15, !1), r = g(e, "onMountedChange", 7, Ke);
  h5(() => (n(!0), r()(!0), () => {
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
    set onMountedChange(i = Ke) {
      r(i), f();
    }
  };
  return le(o);
}
ie(rv, { mounted: {}, onMountedChange: {} }, [], [], !0);
var Lk = /* @__PURE__ */ ne("<div><!></div>"), Hk = /* @__PURE__ */ ne("<!> <!>", 1);
function $l(t, e) {
  const n = yi();
  ae(e, !0);
  let r = g(e, "id", 23, () => Hn(n)), o = g(e, "ref", 15, null), i = g(e, "value", 7), s = g(e, "label", 23, i), a = g(e, "disabled", 7, !1), l = g(e, "children", 7), u = g(e, "child", 7), d = g(e, "onHighlight", 7, Ke), h = g(e, "onUnhighlight", 7, Ke), p = /* @__PURE__ */ De(e, [
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
  const v = Fu.create({
    id: pe(() => r()),
    ref: pe(() => o(), (x) => o(x)),
    value: pe(() => i()),
    disabled: pe(() => a()),
    label: pe(() => s()),
    onHighlight: pe(() => d()),
    onUnhighlight: pe(() => h())
  }), m = /* @__PURE__ */ _(() => Dn(p, v.props));
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
    set onHighlight(x = Ke) {
      d(x), f();
    },
    get onUnhighlight() {
      return h();
    },
    set onUnhighlight(x = Ke) {
      h(x), f();
    }
  }, w = Hk(), b = U(w);
  {
    var k = (x) => {
      var E = ce(), V = U(E);
      {
        let L = /* @__PURE__ */ _(() => ({ props: c(m), ...v.snippetProps }));
        Pe(V, u, () => c(L));
      }
      z(x, E);
    }, O = (x) => {
      var E = Lk();
      Ue(E, () => ({ ...c(m) }));
      var V = X(E);
      Pe(V, () => l() ?? je, () => v.snippetProps), Z(E), z(x, E);
    };
    se(b, (x) => {
      u() ? x(k) : x(O, !1);
    });
  }
  var C = B(b, 2);
  return rv(C, {
    get mounted() {
      return v.mounted;
    },
    set mounted(x) {
      v.mounted = x;
    }
  }), z(t, w), le(y);
}
ie(
  $l,
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
var Ik = /* @__PURE__ */ ne("<div><!></div>");
const Bk = {
  hash: "svelte-1dj2lcd",
  code: `
	/* Hide scrollbars cross browser and enable momentum scroll for touch devices */[data-select-viewport] {scrollbar-width:none !important;-ms-overflow-style:none !important;-webkit-overflow-scrolling:touch !important;}[data-combobox-viewport] {scrollbar-width:none !important;-ms-overflow-style:none !important;-webkit-overflow-scrolling:touch !important;}[data-combobox-viewport]::-webkit-scrollbar {display:none !important;}[data-select-viewport]::-webkit-scrollbar {display:none !important;}`
};
function Sl(t, e) {
  const n = yi();
  ae(e, !0), Je(t, Bk);
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
  const l = Wu.create({
    id: pe(() => r()),
    ref: pe(() => o(), (y) => o(y))
  }), u = /* @__PURE__ */ _(() => Dn(a, l.props));
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
  }, h = ce(), p = U(h);
  {
    var v = (y) => {
      var w = ce(), b = U(w);
      Pe(b, s, () => ({ props: c(u) })), z(y, w);
    }, m = (y) => {
      var w = Ik();
      Ue(w, () => ({ ...c(u) }));
      var b = X(w);
      Pe(b, () => i() ?? je), Z(w), z(y, w);
    };
    se(p, (y) => {
      s() ? y(v) : y(m, !1);
    });
  }
  return z(t, h), le(d);
}
ie(Sl, { id: {}, ref: {}, children: {}, child: {} }, [], [], !0);
var Rk = /* @__PURE__ */ ne("<!> <!>", 1);
function _l(t, e) {
  ae(e, !0);
  let n = g(e, "value", 15), r = g(e, "onValueChange", 7, Ke), o = g(e, "name", 7, ""), i = g(e, "disabled", 7, !1), s = g(e, "type", 7), a = g(e, "open", 15, !1), l = g(e, "onOpenChange", 7, Ke), u = g(e, "onOpenChangeComplete", 7, Ke), d = g(e, "loop", 7, !1), h = g(e, "scrollAlignment", 7, "nearest"), p = g(e, "required", 7, !1), v = g(e, "items", 23, () => []), m = g(e, "allowDeselect", 7, !1), y = g(e, "autocomplete", 7), w = g(e, "children", 7);
  function b() {
    n() === void 0 && n(s() === "single" ? "" : []);
  }
  b(), wt.pre(() => n(), () => {
    b();
  });
  let k = /* @__PURE__ */ me("");
  const O = Ak.create({
    type: s(),
    value: pe(() => n(), (D) => {
      n(D), r()(D);
    }),
    disabled: pe(() => i()),
    required: pe(() => p()),
    open: pe(() => a(), (D) => {
      a(D), l()(D);
    }),
    loop: pe(() => d()),
    scrollAlignment: pe(() => h()),
    name: pe(() => o()),
    isCombobox: !1,
    items: pe(() => v()),
    allowDeselect: pe(() => m()),
    inputValue: pe(() => c(k), (D) => K(k, D, !0)),
    onOpenChangeComplete: pe(() => u())
  });
  var C = {
    get value() {
      return n();
    },
    set value(D) {
      n(D), f();
    },
    get onValueChange() {
      return r();
    },
    set onValueChange(D = Ke) {
      r(D), f();
    },
    get name() {
      return o();
    },
    set name(D = "") {
      o(D), f();
    },
    get disabled() {
      return i();
    },
    set disabled(D = !1) {
      i(D), f();
    },
    get type() {
      return s();
    },
    set type(D) {
      s(D), f();
    },
    get open() {
      return a();
    },
    set open(D = !1) {
      a(D), f();
    },
    get onOpenChange() {
      return l();
    },
    set onOpenChange(D = Ke) {
      l(D), f();
    },
    get onOpenChangeComplete() {
      return u();
    },
    set onOpenChangeComplete(D = Ke) {
      u(D), f();
    },
    get loop() {
      return d();
    },
    set loop(D = !1) {
      d(D), f();
    },
    get scrollAlignment() {
      return h();
    },
    set scrollAlignment(D = "nearest") {
      h(D), f();
    },
    get required() {
      return p();
    },
    set required(D = !1) {
      p(D), f();
    },
    get items() {
      return v();
    },
    set items(D = []) {
      v(D), f();
    },
    get allowDeselect() {
      return m();
    },
    set allowDeselect(D = !1) {
      m(D), f();
    },
    get autocomplete() {
      return y();
    },
    set autocomplete(D) {
      y(D), f();
    },
    get children() {
      return w();
    },
    set children(D) {
      w(D), f();
    }
  }, x = Rk(), E = U(x);
  qg(E, {
    children: (D, N) => {
      var S = ce(), T = U(S);
      Pe(T, () => w() ?? je), z(D, S);
    },
    $$slots: { default: !0 }
  });
  var V = B(E, 2);
  {
    var L = (D) => {
      var N = ce(), S = U(N);
      {
        var T = (P) => {
          us(P, {
            get autocomplete() {
              return y();
            }
          });
        }, $ = (P) => {
          var M = ce(), j = U(M);
          Ct(j, 16, () => O.opts.value.current, (q) => q, (q, G) => {
            us(q, {
              get value() {
                return G;
              },
              get autocomplete() {
                return y();
              }
            });
          }), z(P, M);
        };
        se(S, (P) => {
          O.opts.value.current.length === 0 ? P(T) : P($, !1);
        });
      }
      z(D, N);
    }, I = (D) => {
      us(D, {
        get autocomplete() {
          return y();
        },
        get value() {
          return O.opts.value.current;
        },
        set value(N) {
          O.opts.value.current = N;
        }
      });
    };
    se(V, (D) => {
      Array.isArray(O.opts.value.current) ? D(L) : D(I, !1);
    });
  }
  return z(t, x), le(C);
}
ie(
  _l,
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
var jk = /* @__PURE__ */ ne("<button><!></button>");
function Ol(t, e) {
  const n = yi();
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
  const u = ju.create({
    id: pe(() => r()),
    ref: pe(() => o(), (m) => o(m))
  }), d = /* @__PURE__ */ _(() => Dn(l, u.props, { type: a() }));
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
  }, p = ce(), v = U(p);
  return St(v, () => Ug, (m, y) => {
    y(m, {
      get id() {
        return r();
      },
      get ref() {
        return u.opts.ref;
      },
      children: (w, b) => {
        var k = ce(), O = U(k);
        {
          var C = (E) => {
            var V = ce(), L = U(V);
            Pe(L, i, () => ({ props: c(d) })), z(E, V);
          }, x = (E) => {
            var V = jk();
            Ue(V, () => ({ ...c(d) }));
            var L = X(V);
            Pe(L, () => s() ?? je), Z(V), z(E, V);
          };
          se(O, (E) => {
            i() ? E(C) : E(x, !1);
          });
        }
        z(w, k);
      },
      $$slots: { default: !0 }
    });
  }), z(t, p), le(h);
}
ie(Ol, { id: {}, ref: {}, child: {}, children: {}, type: {} }, [], [], !0);
const Kk = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, Fk = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
  return !1;
}, Zk = Symbol("lucide-context"), Wk = () => wn(Zk);
var Xk = /* @__PURE__ */ ke("<svg><!><!></svg>");
function wa(t, e) {
  ae(e, !0);
  const n = Wk() ?? {}, r = g(e, "name", 7), o = g(e, "color", 23, () => n.color ?? "currentColor"), i = g(e, "size", 23, () => n.size ?? 24), s = g(e, "strokeWidth", 23, () => n.strokeWidth ?? 2), a = g(e, "absoluteStrokeWidth", 23, () => n.absoluteStrokeWidth ?? !1), l = g(e, "iconNode", 23, () => []), u = g(e, "children", 7), d = /* @__PURE__ */ De(e, [
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
  ]), h = /* @__PURE__ */ _(() => a() ? Number(s()) * 24 / Number(i()) : s());
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
  }, v = Xk();
  Ue(
    v,
    (w) => ({
      ...Kk,
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
      () => !u() && !Fk(d) && { "aria-hidden": "true" }
    ]
  );
  var m = X(v);
  Ct(m, 17, l, Xr, (w, b) => {
    var k = /* @__PURE__ */ _(() => Po(c(b), 2));
    let O = () => c(k)[0], C = () => c(k)[1];
    var x = ce(), E = U(x);
    Lh(E, O, !0, (V, L) => {
      Ue(V, () => ({ ...C() }));
    }), z(w, x);
  });
  var y = B(m);
  return Pe(y, () => u() ?? je), Z(v), z(t, v), le(p);
}
ie(
  wa,
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
function ov(t, e) {
  ae(e, !0);
  let n = /* @__PURE__ */ De(e, ["$$slots", "$$events", "$$legacy", "$$host"]);
  const r = [["path", { d: "M20 6 9 17l-5-5" }]];
  wa(t, Re({ name: "check" }, () => n, {
    get iconNode() {
      return r;
    },
    children: (o, i) => {
      var s = ce(), a = U(s);
      Pe(a, () => e.children ?? je), z(o, s);
    },
    $$slots: { default: !0 }
  })), le();
}
ie(ov, {}, [], [], !0);
function iv(t, e) {
  ae(e, !0);
  let n = /* @__PURE__ */ De(e, ["$$slots", "$$events", "$$legacy", "$$host"]);
  const r = [["path", { d: "M5 12h14" }]];
  wa(t, Re({ name: "minus" }, () => n, {
    get iconNode() {
      return r;
    },
    children: (o, i) => {
      var s = ce(), a = U(s);
      Pe(a, () => e.children ?? je), z(o, s);
    },
    $$slots: { default: !0 }
  })), le();
}
ie(iv, {}, [], [], !0);
var qk = /* @__PURE__ */ ne('<div data-slot="checkbox-indicator" class="[&amp;>svg]:size-3.5 grid place-content-center text-current transition-none"><!></div>');
function sv(t, e) {
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
  }, l = ce(), u = U(l);
  {
    const d = (p, v) => {
      let m = () => v?.().checked, y = () => v?.().indeterminate;
      var w = qk(), b = X(w);
      {
        var k = (C) => {
          ov(C, {});
        }, O = (C) => {
          var x = ce(), E = U(x);
          {
            var V = (L) => {
              iv(L, {});
            };
            se(
              E,
              (L) => {
                y() && L(V);
              },
              !0
            );
          }
          z(C, x);
        };
        se(b, (C) => {
          m() ? C(k) : C(O, !1);
        });
      }
      Z(w), z(p, w);
    };
    let h = /* @__PURE__ */ _(() => vn("nopan nodrag border-input dark:bg-input/30 data-checked:bg-primary data-checked:text-primary-foreground dark:data-checked:bg-primary data-checked:border-primary aria-invalid:aria-checked:border-primary aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 flex size-4 items-center justify-center rounded-[4px] border shadow-xs transition-shadow group-has-disabled/field:opacity-50 focus-visible:ring-3 aria-invalid:ring-3 peer relative shrink-0 outline-none after:absolute after:-inset-x-3 after:-inset-y-2 disabled:cursor-not-allowed disabled:opacity-50", i()));
    St(u, () => Mg, (p, v) => {
      v(p, Re(
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
  return z(t, l), le(a);
}
ie(sv, { ref: {}, checked: {}, indeterminate: {}, class: {} }, [], [], !0);
var Yk = /* @__PURE__ */ ne('<div><input type="hidden"/> <!> <!></div>');
const Gk = {
  hash: "svelte-1o3a23c",
  code: ".tf-chosen.svelte-1o3a23c {display:flex;flex-direction:row;align-items:center;justify-content:space-between;gap:5px;}"
};
function av(t, e) {
  ae(e, !0), Je(t, Gk);
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
  }, u = Yk();
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
  xr(d);
  var h = B(d, 2);
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
  var p = B(h, 2);
  return qe(p, {
    variant: "outline",
    onclick: (v) => {
      s()?.(o(), r(), v);
    },
    style: "padding: 3px",
    children: (v, m) => {
      Se();
      var y = Ae();
      Ee(() => rt(y, i())), z(v, y);
    },
    $$slots: { default: !0 }
  }), Z(u), Ee(() => es(d, o())), z(t, u), le(l);
}
ie(
  av,
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
var Uk = /* @__PURE__ */ ne("<input/>"), Jk = /* @__PURE__ */ ne("<input/>");
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
  }, d = ce(), h = U(d);
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
          () => vn("nopan nodrag dark:bg-input/30 border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 h-9 rounded-md border bg-transparent px-2.5 py-1 text-base shadow-xs transition-[color,box-shadow] file:h-7 file:text-sm file:font-medium focus-visible:ring-3 aria-invalid:ring-3 md:text-sm file:text-foreground placeholder:text-muted-foreground w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50", s())
        ],
        void 0,
        void 0,
        void 0,
        !0
      ), Mt(y, (w) => n(w), () => n()), x1(y, i), ys(y, r), z(m, y);
    }, v = (m) => {
      var y = Jk();
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
          () => vn("nopan nodrag dark:bg-input/30 border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 h-9 rounded-md border bg-transparent px-2.5 py-1 text-base shadow-xs transition-[color,box-shadow] file:h-7 file:text-sm file:font-medium focus-visible:ring-3 aria-invalid:ring-3 md:text-sm file:text-foreground placeholder:text-muted-foreground w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50", s())
        ],
        void 0,
        void 0,
        void 0,
        !0
      ), Mt(y, (w) => n(w), () => n()), ys(y, r), z(m, y);
    };
    se(h, (m) => {
      o() === "file" ? m(p) : m(v, !1);
    });
  }
  return z(t, d), le(u);
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
var Qk = /* @__PURE__ */ ne("<textarea></textarea>");
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
  Ie(() => {
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
  }, y = Qk();
  Fm(y);
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
      () => vn("nodrag nowheel border-input dark:bg-input/30 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 rounded-md border bg-transparent px-2.5 py-2 text-base shadow-xs transition-[color,box-shadow] focus-visible:ring-3 aria-invalid:ring-3 md:text-sm placeholder:text-muted-foreground flex field-sizing-content min-h-16 w-full outline-none disabled:cursor-not-allowed disabled:opacity-50", o())
    ]
  ), Mt(y, (k) => h = k, () => h), ys(y, r), z(t, y), le(m);
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
var e4 = /* @__PURE__ */ ne('<div role="button"><!></div>'), t4 = /* @__PURE__ */ ne("<div></div>");
function lv(t, e) {
  const n = hc(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]), r = hc(n, ["items", "onChange", "activeIndex"]);
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
  tu();
  var u = t4();
  return Ue(u, () => ({
    ...r,
    class: `tf-tabs ${Gl(r), it(() => r.class) ?? ""}`
  })), Ct(u, 5, o, Xr, (d, h, p) => {
    var v = e4();
    Oe(v, "tabindex", p), v.__click = () => a(c(h), p), v.__keydown = (b) => {
      (b.key === "Enter" || b.key === " ") && (b.preventDefault(), a(c(h), p));
    };
    var m = X(v);
    {
      var y = (b) => {
        var k = Ae();
        Ee(() => rt(k, (c(h), it(() => c(h).label)))), z(b, k);
      }, w = (b) => {
        var k = ce(), O = U(k);
        Pe(O, () => (c(h), it(() => c(h).label) ?? je)), z(b, k);
      };
      se(m, (b) => {
        c(h), it(() => typeof c(h).label == "string") ? b(y) : b(w, !1);
      });
    }
    Z(v), Ee(() => Yt(v, 1, `tf-tabs-item ${p === s() ? "active" : ""}`)), z(d, v);
  }), Z(u), z(t, u), le(l);
}
ro(["click", "keydown"]);
ie(lv, { items: {}, onChange: {}, activeIndex: {} }, [], [], !0);
var n4 = /* @__PURE__ */ ne('<span class="tf-collapse-item-title-icon"><!></span>'), r4 = /* @__PURE__ */ ne('<div class="tf-collapse-item-description"><!></div>'), o4 = /* @__PURE__ */ ne('<div class="tf-collapse-item-content"><!></div>'), i4 = /* @__PURE__ */ ne('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><!> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), s4 = /* @__PURE__ */ ne("<div></div>");
const a4 = {
  hash: "svelte-ynwjxt",
  code: `\r
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-ynwjxt {transform:rotate(90deg);transition:transform 0.3s ease;}`
};
function uv(t, e) {
  ae(e, !0), Je(t, a4);
  let n = g(e, "items", 7), r = g(e, "onChange", 7), o = g(e, "activeKeys", 31, () => dt([]));
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
  }, a = s4();
  return Ct(a, 21, n, Xr, (l, u, d) => {
    var h = i4(), p = X(h);
    Oe(p, "tabindex", d), p.__click = () => i(c(u)), p.__keydown = (x) => {
      (x.key === "Enter" || x.key === " ") && (x.preventDefault(), i(c(u)));
    };
    var v = X(p);
    {
      var m = (x) => {
        var E = n4(), V = X(E);
        Un(V, {
          get target() {
            return c(u).icon;
          }
        }), Z(E), z(x, E);
      };
      se(v, (x) => {
        c(u).icon && x(m);
      });
    }
    var y = B(v, 2);
    Un(y, {
      get target() {
        return c(u).title;
      }
    });
    var w = B(y, 2);
    Z(p);
    var b = B(p, 2);
    {
      var k = (x) => {
        var E = r4(), V = X(E);
        Un(V, {
          get target() {
            return c(u).description;
          }
        }), Z(E), z(x, E);
      };
      se(b, (x) => {
        c(u).description && x(k);
      });
    }
    var O = B(b, 2);
    {
      var C = (x) => {
        var E = o4(), V = X(E);
        Un(V, {
          get target() {
            return c(u).content;
          }
        }), Z(E), z(x, E);
      };
      se(O, (x) => {
        o().includes(c(u).key) && x(C);
      });
    }
    Z(h), Ee((x) => Yt(w, 1, `tf-collapse-item-title-arrow ${x ?? ""}`, "svelte-ynwjxt"), [
      () => o().includes(c(u).key) ? "rotate-90" : ""
    ]), z(l, h);
  }), Z(a), Ee(() => {
    Nt(a, e.style), Yt(a, 1, `tf-collapse ${e.class ?? ""}`, "svelte-ynwjxt");
  }), z(t, a), le(s);
}
ro(["click", "keydown"]);
ie(uv, { items: {}, onChange: {}, activeKeys: {} }, [], [], !0);
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
  }, o = ce(), i = U(o);
  {
    var s = (l) => {
      var u = ce(), d = U(u);
      Pe(d, () => n() ?? je), z(l, u);
    }, a = (l) => {
      var u = ce(), d = U(u);
      ia(d, n), z(l, u);
    };
    se(i, (l) => {
      typeof n() == "function" ? l(s) : l(a, !1);
    });
  }
  return z(t, o), le(r);
}
ie(Un, { target: {} }, [], [], !0);
function Pl(t, e) {
  ae(e, !0);
  let n = /* @__PURE__ */ De(e, ["$$slots", "$$events", "$$legacy", "$$host"]);
  const r = [["path", { d: "m6 9 6 6 6-6" }]];
  wa(t, Re({ name: "chevron-down" }, () => n, {
    get iconNode() {
      return r;
    },
    children: (o, i) => {
      var s = ce(), a = U(s);
      Pe(a, () => e.children ?? je), z(o, s);
    },
    $$slots: { default: !0 }
  })), le();
}
ie(Pl, {}, [], [], !0);
var l4 = /* @__PURE__ */ ne('<span class="mx-1">,</span>'), u4 = /* @__PURE__ */ ne("<!> <!>", 1), c4 = /* @__PURE__ */ ne('<span class="text-muted-foreground"> </span>'), d4 = /* @__PURE__ */ ne('<span class="flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-left"><!></span> <!>', 1), h4 = /* @__PURE__ */ ne('<div class="py-6 text-center text-sm text-muted-foreground">暂无数据</div>'), p4 = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), f4 = /* @__PURE__ */ ne('<span class="absolute right-2 flex size-3.5 items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path></svg></span>'), g4 = /* @__PURE__ */ ne('<span class="flex items-center gap-2 whitespace-nowrap"><!> <!></span> <!>', 1), v4 = /* @__PURE__ */ ne("<!> <!>", 1), m4 = /* @__PURE__ */ ne('<span class="text-muted-foreground"> </span>'), y4 = /* @__PURE__ */ ne('<span class="flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-left"><!></span> <!>', 1), w4 = /* @__PURE__ */ ne('<div class="py-6 text-center text-sm text-muted-foreground">暂无数据</div>'), b4 = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), x4 = /* @__PURE__ */ ne('<span class="absolute right-2 flex size-3.5 items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path></svg></span>'), k4 = /* @__PURE__ */ ne('<span class="flex items-center gap-2 whitespace-nowrap"><!> <!></span> <!>', 1), C4 = /* @__PURE__ */ ne("<!> <!>", 1);
function Pt(t, e) {
  ae(e, !0);
  let n = g(e, "items", 7), r = g(e, "onSelect", 7), o = g(e, "value", 23, () => []), i = g(e, "defaultValue", 23, () => []), s = g(e, "expandAll", 7, !0), a = g(e, "multiple", 7, !1), l = g(e, "expandValue", 23, () => []), u = g(e, "placeholder", 7), d = g(e, "disabled", 7, !1), h = g(e, "class", 7), p = /* @__PURE__ */ De(e, [
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
  ]), v = /* @__PURE__ */ _(() => {
    const N = [], S = (T) => {
      for (const $ of T)
        N.push($), $.children?.length && S($.children);
    };
    return S(n()), N;
  }), m = /* @__PURE__ */ _(() => {
    const N = [], S = o().length > 0 ? o() : i();
    for (const T of S) {
      if (T == null) continue;
      const $ = c(v).find((P) => P.value === T);
      $ && N.push($);
    }
    return N;
  }), y = /* @__PURE__ */ _(() => !a() && c(m).length > 0 ? String(c(m)[0].value) : ""), w = /* @__PURE__ */ _(() => a() ? c(m).map((N) => String(N.value)) : []);
  function b(N, S) {
    N.stopPropagation(), r()?.(S);
  }
  function k(N, S = 0) {
    const T = [];
    for (const $ of N) {
      T.push($);
      const P = s() || l().includes($.value);
      $.children?.length && P && T.push(...k($.children, S + 1));
    }
    return T;
  }
  let O = /* @__PURE__ */ _(() => k(n()));
  function C(N) {
    return n().findIndex((S) => S.value === N.value) === -1;
  }
  function x(N) {
    return {
      value: String(N.value),
      label: typeof N.label == "string" ? N.label : String(N.value),
      disabled: !1
    };
  }
  var E = {
    get items() {
      return n();
    },
    set items(N) {
      n(N), f();
    },
    get onSelect() {
      return r();
    },
    set onSelect(N) {
      r(N), f();
    },
    get value() {
      return o();
    },
    set value(N = []) {
      o(N), f();
    },
    get defaultValue() {
      return i();
    },
    set defaultValue(N = []) {
      i(N), f();
    },
    get expandAll() {
      return s();
    },
    set expandAll(N = !0) {
      s(N), f();
    },
    get multiple() {
      return a();
    },
    set multiple(N = !1) {
      a(N), f();
    },
    get expandValue() {
      return l();
    },
    set expandValue(N = []) {
      l(N), f();
    },
    get placeholder() {
      return u();
    },
    set placeholder(N) {
      u(N), f();
    },
    get disabled() {
      return d();
    },
    set disabled(N = !1) {
      d(N), f();
    },
    get class() {
      return h();
    },
    set class(N) {
      h(N), f();
    }
  }, V = ce(), L = U(V);
  {
    var I = (N) => {
      var S = ce(), T = U(S);
      St(T, () => _l, ($, P) => {
        P($, Re(
          {
            type: "multiple",
            get value() {
              return c(w);
            }
          },
          () => p,
          {
            children: (M, j) => {
              var q = v4(), G = U(q);
              {
                let Y = /* @__PURE__ */ _(() => vn("nopan nodrag border-input dark:bg-input/30 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 flex h-9 w-full items-center justify-between rounded-md border bg-transparent px-2.5 py-1 text-base shadow-xs transition-[color,box-shadow] focus-visible:ring-3 aria-invalid:ring-3 md:text-sm", d() && "cursor-not-allowed bg-muted/50 text-muted-foreground opacity-60", h()));
                St(G, () => Ol, (ee, R) => {
                  R(ee, {
                    get class() {
                      return c(Y);
                    },
                    get disabled() {
                      return d();
                    },
                    children: (F, W) => {
                      var J = d4(), re = U(J), H = X(re);
                      {
                        var te = (oe) => {
                          var ue = ce(), fe = U(ue);
                          Ct(fe, 19, () => c(m), (ye) => ye.value, (ye, Ce, de) => {
                            var xe = u4(), Ve = U(xe);
                            Un(Ve, {
                              get target() {
                                return c(Ce).label;
                              }
                            });
                            var Q = B(Ve, 2);
                            {
                              var Me = (Ne) => {
                                var Fe = l4();
                                z(Ne, Fe);
                              };
                              se(Q, (Ne) => {
                                c(de) < c(m).length - 1 && Ne(Me);
                              });
                            }
                            z(ye, xe);
                          }), z(oe, ue);
                        }, ve = (oe) => {
                          var ue = c4(), fe = X(ue, !0);
                          Z(ue), Ee(() => rt(fe, u() ?? "")), z(oe, ue);
                        };
                        se(H, (oe) => {
                          c(m).length > 0 ? oe(te) : oe(ve, !1);
                        });
                      }
                      Z(re);
                      var he = B(re, 2);
                      Pl(he, { class: "size-4 opacity-50" }), z(F, J);
                    },
                    $$slots: { default: !0 }
                  });
                });
              }
              var A = B(G, 2);
              St(A, () => ml, (Y, ee) => {
                ee(Y, {
                  children: (R, F) => {
                    var W = ce(), J = U(W);
                    St(J, () => Cl, (re, H) => {
                      H(re, {
                        class: "nopan nodrag nowheel data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-96 min-w-(--bits-select-anchor-width) overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md",
                        children: (te, ve) => {
                          var he = ce(), oe = U(he);
                          St(oe, () => Sl, (ue, fe) => {
                            fe(ue, {
                              class: "p-1",
                              children: (ye, Ce) => {
                                var de = ce(), xe = U(de);
                                {
                                  var Ve = (Me) => {
                                    var Ne = h4();
                                    z(Me, Ne);
                                  }, Q = (Me) => {
                                    var Ne = ce(), Fe = U(Ne);
                                    Ct(Fe, 17, () => c(O), (Le) => Le.value, (Le, Ze) => {
                                      const ft = /* @__PURE__ */ _(() => c(Ze).children && c(Ze).children.length > 0), bt = /* @__PURE__ */ _(() => x(c(Ze)));
                                      var nt = ce(), ge = U(nt);
                                      {
                                        const ze = (Be, tt) => {
                                          let xt = () => tt?.().selected;
                                          var at = g4(), zt = U(at), ut = X(zt);
                                          {
                                            var gt = (lt) => {
                                              var Ar = p4();
                                              z(lt, Ar);
                                            };
                                            se(ut, (lt) => {
                                              c(ft) && lt(gt);
                                            });
                                          }
                                          var At = B(ut, 2);
                                          Un(At, {
                                            get target() {
                                              return c(Ze).label;
                                            }
                                          }), Z(zt);
                                          var so = B(zt, 2);
                                          {
                                            var Do = (lt) => {
                                              var Ar = f4();
                                              z(lt, Ar);
                                            };
                                            se(so, (lt) => {
                                              xt() && lt(Do);
                                            });
                                          }
                                          z(Be, at);
                                        };
                                        let st = /* @__PURE__ */ _(() => vn("relative flex w-full cursor-pointer select-none items-center rounded-sm py-1.5 pr-8 pl-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50", C(c(Ze)) && "pl-6"));
                                        St(ge, () => $l, (Be, tt) => {
                                          tt(Be, {
                                            get value() {
                                              return c(bt).value;
                                            },
                                            get label() {
                                              return c(bt).label;
                                            },
                                            get class() {
                                              return c(st);
                                            },
                                            onclick: (xt) => b(xt, c(Ze)),
                                            children: ze,
                                            $$slots: { default: !0 }
                                          });
                                        });
                                      }
                                      z(Le, nt);
                                    }), z(Me, Ne);
                                  };
                                  se(xe, (Me) => {
                                    c(O).length === 0 ? Me(Ve) : Me(Q, !1);
                                  });
                                }
                                z(ye, de);
                              },
                              $$slots: { default: !0 }
                            });
                          }), z(te, he);
                        },
                        $$slots: { default: !0 }
                      });
                    }), z(R, W);
                  },
                  $$slots: { default: !0 }
                });
              }), z(M, q);
            },
            $$slots: { default: !0 }
          }
        ));
      }), z(N, S);
    }, D = (N) => {
      var S = ce(), T = U(S);
      St(T, () => _l, ($, P) => {
        P($, Re(
          {
            type: "single",
            get value() {
              return c(y);
            }
          },
          () => p,
          {
            children: (M, j) => {
              var q = C4(), G = U(q);
              {
                let Y = /* @__PURE__ */ _(() => vn("nopan nodrag border-input dark:bg-input/30 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 flex h-9 w-full items-center justify-between rounded-md border bg-transparent px-2.5 py-1 text-base shadow-xs transition-[color,box-shadow] focus-visible:ring-3 aria-invalid:ring-3 md:text-sm", d() && "cursor-not-allowed bg-muted/50 text-muted-foreground opacity-60", h()));
                St(G, () => Ol, (ee, R) => {
                  R(ee, {
                    get class() {
                      return c(Y);
                    },
                    get disabled() {
                      return d();
                    },
                    children: (F, W) => {
                      var J = y4(), re = U(J), H = X(re);
                      {
                        var te = (oe) => {
                          Un(oe, {
                            get target() {
                              return c(m)[0].label;
                            }
                          });
                        }, ve = (oe) => {
                          var ue = m4(), fe = X(ue, !0);
                          Z(ue), Ee(() => rt(fe, u() ?? "")), z(oe, ue);
                        };
                        se(H, (oe) => {
                          c(m).length > 0 ? oe(te) : oe(ve, !1);
                        });
                      }
                      Z(re);
                      var he = B(re, 2);
                      Pl(he, { class: "size-4 opacity-50" }), z(F, J);
                    },
                    $$slots: { default: !0 }
                  });
                });
              }
              var A = B(G, 2);
              St(A, () => ml, (Y, ee) => {
                ee(Y, {
                  children: (R, F) => {
                    var W = ce(), J = U(W);
                    St(J, () => Cl, (re, H) => {
                      H(re, {
                        class: "nopan nodrag nowheel data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-96 min-w-(--bits-select-anchor-width) overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md",
                        children: (te, ve) => {
                          var he = ce(), oe = U(he);
                          St(oe, () => Sl, (ue, fe) => {
                            fe(ue, {
                              class: "p-1",
                              children: (ye, Ce) => {
                                var de = ce(), xe = U(de);
                                {
                                  var Ve = (Me) => {
                                    var Ne = w4();
                                    z(Me, Ne);
                                  }, Q = (Me) => {
                                    var Ne = ce(), Fe = U(Ne);
                                    Ct(Fe, 17, () => c(O), (Le) => Le.value, (Le, Ze) => {
                                      const ft = /* @__PURE__ */ _(() => c(Ze).children && c(Ze).children.length > 0), bt = /* @__PURE__ */ _(() => x(c(Ze)));
                                      var nt = ce(), ge = U(nt);
                                      {
                                        const ze = (Be, tt) => {
                                          let xt = () => tt?.().selected;
                                          var at = k4(), zt = U(at), ut = X(zt);
                                          {
                                            var gt = (lt) => {
                                              var Ar = b4();
                                              z(lt, Ar);
                                            };
                                            se(ut, (lt) => {
                                              c(ft) && lt(gt);
                                            });
                                          }
                                          var At = B(ut, 2);
                                          Un(At, {
                                            get target() {
                                              return c(Ze).label;
                                            }
                                          }), Z(zt);
                                          var so = B(zt, 2);
                                          {
                                            var Do = (lt) => {
                                              var Ar = x4();
                                              z(lt, Ar);
                                            };
                                            se(so, (lt) => {
                                              xt() && lt(Do);
                                            });
                                          }
                                          z(Be, at);
                                        };
                                        let st = /* @__PURE__ */ _(() => vn("relative flex w-full cursor-pointer select-none items-center rounded-sm py-1.5 pr-8 pl-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50", C(c(Ze)) && "pl-6"));
                                        St(ge, () => $l, (Be, tt) => {
                                          tt(Be, {
                                            get value() {
                                              return c(bt).value;
                                            },
                                            get label() {
                                              return c(bt).label;
                                            },
                                            get class() {
                                              return c(st);
                                            },
                                            onclick: (xt) => b(xt, c(Ze)),
                                            children: ze,
                                            $$slots: { default: !0 }
                                          });
                                        });
                                      }
                                      z(Le, nt);
                                    }), z(Me, Ne);
                                  };
                                  se(xe, (Me) => {
                                    c(O).length === 0 ? Me(Ve) : Me(Q, !1);
                                  });
                                }
                                z(ye, de);
                              },
                              $$slots: { default: !0 }
                            });
                          }), z(te, he);
                        },
                        $$slots: { default: !0 }
                      });
                    }), z(R, W);
                  },
                  $$slots: { default: !0 }
                });
              }), z(M, q);
            },
            $$slots: { default: !0 }
          }
        ));
      }), z(N, S);
    };
    se(L, (N) => {
      a() ? N(I) : N(D, !1);
    });
  }
  return z(t, V), le(E);
}
ie(
  Pt,
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
const $4 = ({
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
    Wg(t, u, {
      placement: r,
      middleware: [
        jg(o),
        // 手动偏移配置
        Fg(i),
        //自动翻转
        Kg(s),
        //自动偏移（使得浮动元素能够进入视野）
        ...l ? [Zg({ element: d })] : []
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
var S4 = /* @__PURE__ */ ne('<div style="position: relative"><div><!></div> <div style="display: none; width: 100%;z-index: 9999"><!></div></div>');
function io(t, e) {
  ae(e, !0);
  const n = g(e, "children", 7), r = g(e, "floating", 7), o = g(e, "placement", 7, "bottom");
  let i, s, a;
  kn(() => (a = $4({
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
  }, d = S4(), h = X(d), p = X(h);
  Pe(p, n), Z(h), Mt(h, (y) => i = y, () => i);
  var v = B(h, 2), m = X(v);
  return Pe(m, r), Z(v), Mt(v, (y) => s = y, () => s), Z(d), z(t, d), le(u);
}
ie(io, { children: {}, floating: {}, placement: {} }, [], ["hide"], !0);
function Ye(t, e) {
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
  }, a = ce(), l = U(a);
  return Lh(l, () => `h${r()}`, !1, (u, d) => {
    Ue(u, () => ({
      class: "tf-heading",
      style: `margin-top:${o() || "0"};margin-bottom:${i() || "0"}`
    }));
    var h = ce(), p = U(h);
    Pe(p, () => n() ?? je), z(d, h);
  }), z(t, a), le(s);
}
ie(Ye, { children: {}, level: {}, mt: {}, mb: {} }, [], [], !0);
var _4 = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1q3h954"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1q3h954"></path></svg>');
const O4 = {
  hash: "svelte-1q3h954",
  code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:var(--input);border:1px solid transparent;}}"
};
function Ti(t, e) {
  ae(e, !0), Je(t, O4);
  const n = /* @__PURE__ */ De(e, ["$$slots", "$$events", "$$legacy", "$$host"]);
  {
    let r = /* @__PURE__ */ _(() => vn("input-btn-more", e.class));
    qe(t, Re(
      {
        size: "icon-xs",
        get class() {
          return c(r);
        }
      },
      () => n,
      {
        children: (o, i) => {
          var s = _4();
          z(o, s);
        },
        $$slots: { default: !0 }
      }
    ));
  }
  le();
}
ie(Ti, {}, [], [], !0);
const P4 = () => ({ deleteNode: (t) => {
  Xe.removeNode(t), Xe.updateEdges((e) => e.filter((n) => n.source !== t && n.target !== t));
} }), Bn = (t = 16) => {
  const e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = new Uint8Array(t);
  return crypto.getRandomValues(n), Array.from(n, (r) => e[r % e.length]).join("");
}, E4 = () => ({ copyNode: (t) => {
  const e = Xe.getNode(t);
  if (e) {
    const n = Bn(), r = {
      ...e,
      id: n,
      position: { x: e.position.x + 50, y: e.position.y + 50 }
    };
    Xe.updateNodes((o) => [...o.map((i) => ({ ...i, selected: !1 })), r]);
  }
} }), pt = () => wn("svelteflow__node_id"), _r = () => wn("tinyflow_options");
var N4 = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'), M4 = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'), z4 = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'), A4 = /* @__PURE__ */ ne('<div class="input-item svelte-ana6zl">执行条件： <!></div>'), T4 = /* @__PURE__ */ ne('<div class="input-item svelte-ana6zl">循环间隔时间（单位：毫秒）： <!></div> <div class="input-item svelte-ana6zl">最大循环次数（0 表示不限制）： <!></div> <div class="input-item svelte-ana6zl">退出条件： <!></div>', 1), D4 = /* @__PURE__ */ ne('<div class="input-item svelte-ana6zl">错误重试间隔时间（单位：毫秒）： <!></div> <div class="input-item svelte-ana6zl">最大重试次数： <!></div> <label class="input-item-inline svelte-ana6zl"><span>正常后重置重试次数记录：</span> <input type="checkbox"/></label>', 1), V4 = /* @__PURE__ */ ne('<div class="settings svelte-ana6zl"><div class="input-item svelte-ana6zl">节点名称： <!></div> <div class="input-item svelte-ana6zl">参数描述： <!></div> <!> <label class="input-item-inline svelte-ana6zl"><span>循环执行：</span> <input type="checkbox"/></label> <!> <label class="input-item-inline svelte-ana6zl"><span>错误重试：</span> <input type="checkbox"/></label> <!></div>'), L4 = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3.33946 17.0002C2.90721 16.2515 2.58277 15.4702 2.36133 14.6741C3.3338 14.1779 3.99972 13.1668 3.99972 12.0002C3.99972 10.8345 3.3348 9.824 2.36353 9.32741C2.81025 7.71651 3.65857 6.21627 4.86474 4.99001C5.7807 5.58416 6.98935 5.65534 7.99972 5.072C9.01009 4.48866 9.55277 3.40635 9.4962 2.31604C11.1613 1.8846 12.8847 1.90004 14.5031 2.31862C14.4475 3.40806 14.9901 4.48912 15.9997 5.072C17.0101 5.65532 18.2187 5.58416 19.1346 4.99007C19.7133 5.57986 20.2277 6.25151 20.66 7.00021C21.0922 7.7489 21.4167 8.53025 21.6381 9.32628C20.6656 9.82247 19.9997 10.8336 19.9997 12.0002C19.9997 13.166 20.6646 14.1764 21.6359 14.673C21.1892 16.2839 20.3409 17.7841 19.1347 19.0104C18.2187 18.4163 17.0101 18.3451 15.9997 18.9284C14.9893 19.5117 14.4467 20.5941 14.5032 21.6844C12.8382 22.1158 11.1148 22.1004 9.49633 21.6818C9.55191 20.5923 9.00929 19.5113 7.99972 18.9284C6.98938 18.3451 5.78079 18.4162 4.86484 19.0103C4.28617 18.4205 3.77172 17.7489 3.33946 17.0002ZM8.99972 17.1964C10.0911 17.8265 10.8749 18.8227 11.2503 19.9659C11.7486 20.0133 12.2502 20.014 12.7486 19.9675C13.1238 18.8237 13.9078 17.8268 14.9997 17.1964C16.0916 16.5659 17.347 16.3855 18.5252 16.6324C18.8146 16.224 19.0648 15.7892 19.2729 15.334C18.4706 14.4373 17.9997 13.2604 17.9997 12.0002C17.9997 10.74 18.4706 9.5632 19.2729 8.6665C19.1688 8.4405 19.0538 8.21822 18.9279 8.00021C18.802 7.78219 18.667 7.57148 18.5233 7.36842C17.3457 7.61476 16.0911 7.43414 14.9997 6.80405C13.9083 6.17395 13.1246 5.17768 12.7491 4.03455C12.2509 3.98714 11.7492 3.98646 11.2509 4.03292C10.8756 5.17671 10.0916 6.17364 8.99972 6.80405C7.9078 7.43447 6.65245 7.61494 5.47428 7.36803C5.18485 7.77641 4.93463 8.21117 4.72656 8.66637C5.52881 9.56311 5.99972 10.74 5.99972 12.0002C5.99972 13.2604 5.52883 14.4372 4.72656 15.3339C4.83067 15.5599 4.94564 15.7822 5.07152 16.0002C5.19739 16.2182 5.3324 16.4289 5.47612 16.632C6.65377 16.3857 7.90838 16.5663 8.99972 17.1964ZM11.9997 15.0002C10.3429 15.0002 8.99972 13.6571 8.99972 12.0002C8.99972 10.3434 10.3429 9.00021 11.9997 9.00021C13.6566 9.00021 14.9997 10.3434 14.9997 12.0002C14.9997 13.6571 13.6566 15.0002 11.9997 15.0002ZM11.9997 13.0002C12.552 13.0002 12.9997 12.5525 12.9997 12.0002C12.9997 11.4479 12.552 11.0002 11.9997 11.0002C11.4474 11.0002 10.9997 11.4479 10.9997 12.0002C10.9997 12.5525 11.4474 13.0002 11.9997 13.0002Z"></path></svg>'), H4 = /* @__PURE__ */ ne('<div class="tf-node-toolbar svelte-ana6zl"><!> <!> <!> <!></div>'), I4 = /* @__PURE__ */ ne('<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!> <!>', 1);
const B4 = {
  hash: "svelte-ana6zl",
  code: ".tf-node-toolbar.svelte-ana6zl {display:flex;gap:5px;padding:5px;border-radius:5px;background:var(--background);border:1px solid var(--border);box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}.settings.svelte-ana6zl {display:flex;flex-direction:column;gap:10px;padding:10px;background:var(--background);border:1px solid var(--border);border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.settings.svelte-ana6zl .input-item:where(.svelte-ana6zl) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:var(--muted-foreground);}.settings.svelte-ana6zl .input-item-inline:where(.svelte-ana6zl) {display:flex;align-items:center;font-size:12px;color:var(--muted-foreground);}"
};
function cn(t, e) {
  ae(e, !0), Je(t, B4);
  const n = g(e, "data", 7), r = g(e, "id", 7, ""), o = g(e, "icon", 7), i = g(e, "handle", 7), s = g(e, "children", 7), a = g(e, "allowExecute", 7, !0), l = g(e, "allowCopy", 7, !0), u = g(e, "allowDelete", 7, !0), d = g(e, "allowSetting", 7, !0), h = g(e, "allowSettingOfCondition", 7, !0), p = g(e, "showSourceHandle", 7, !0), v = g(e, "showTargetHandle", 7, !0), m = g(e, "onCollapse", 7);
  let y = n().expand ? ["key"] : [];
  const { updateNodeData: w, getNode: b } = $t(), k = /* @__PURE__ */ _(() => [
    {
      key: "key",
      icon: o(),
      title: n().title,
      description: n().description,
      content: s()
    }
  ]), { deleteNode: O } = P4(), { copyNode: C } = E4(), x = _r(), E = () => {
    x.onNodeExecute?.(b(r()));
  };
  let V = pt();
  var L = {
    get data() {
      return n();
    },
    set data(A) {
      n(A), f();
    },
    get id() {
      return r();
    },
    set id(A = "") {
      r(A), f();
    },
    get icon() {
      return o();
    },
    set icon(A) {
      o(A), f();
    },
    get handle() {
      return i();
    },
    set handle(A) {
      i(A), f();
    },
    get children() {
      return s();
    },
    set children(A) {
      s(A), f();
    },
    get allowExecute() {
      return a();
    },
    set allowExecute(A = !0) {
      a(A), f();
    },
    get allowCopy() {
      return l();
    },
    set allowCopy(A = !0) {
      l(A), f();
    },
    get allowDelete() {
      return u();
    },
    set allowDelete(A = !0) {
      u(A), f();
    },
    get allowSetting() {
      return d();
    },
    set allowSetting(A = !0) {
      d(A), f();
    },
    get allowSettingOfCondition() {
      return h();
    },
    set allowSettingOfCondition(A = !0) {
      h(A), f();
    },
    get showSourceHandle() {
      return p();
    },
    set showSourceHandle(A = !0) {
      p(A), f();
    },
    get showTargetHandle() {
      return v();
    },
    set showTargetHandle(A = !0) {
      v(A), f();
    },
    get onCollapse() {
      return m();
    },
    set onCollapse(A) {
      m(A), f();
    }
  }, I = I4(), D = U(I);
  {
    var N = (A) => {
      Af(A, {
        get position() {
          return _e.Top;
        },
        align: "start",
        children: (Y, ee) => {
          var R = H4(), F = X(R);
          {
            var W = (oe) => {
              qe(oe, {
                size: "icon",
                class: "tf-node-toolbar-item",
                onclick: () => {
                  O(r());
                },
                children: (ue, fe) => {
                  var ye = N4();
                  z(ue, ye);
                },
                $$slots: { default: !0 }
              });
            };
            se(F, (oe) => {
              u() && oe(W);
            });
          }
          var J = B(F, 2);
          {
            var re = (oe) => {
              qe(oe, {
                size: "icon",
                class: "tf-node-toolbar-item",
                onclick: () => {
                  C(r());
                },
                children: (ue, fe) => {
                  var ye = M4();
                  z(ue, ye);
                },
                $$slots: { default: !0 }
              });
            };
            se(J, (oe) => {
              l() && oe(re);
            });
          }
          var H = B(J, 2);
          {
            var te = (oe) => {
              qe(oe, {
                size: "icon",
                class: "tf-node-toolbar-item",
                onclick: E,
                children: (ue, fe) => {
                  var ye = z4();
                  z(ue, ye);
                },
                $$slots: { default: !0 }
              });
            };
            se(H, (oe) => {
              a() && oe(te);
            });
          }
          var ve = B(H, 2);
          {
            var he = (oe) => {
              io(oe, {
                placement: "bottom",
                floating: (ue) => {
                  var fe = V4(), ye = X(fe), Ce = B(X(ye));
                  vt(Ce, {
                    style: "width: 100%;",
                    onchange: (ge) => {
                      const ze = ge.target.value;
                      w(V, { title: ze });
                    },
                    get value() {
                      return n().title;
                    }
                  }), Z(ye);
                  var de = B(ye, 2), xe = B(X(de));
                  et(xe, {
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
                  var Ve = B(de, 2);
                  {
                    var Q = (ge) => {
                      var ze = A4(), st = B(X(ze));
                      et(st, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (Be) => {
                          const tt = Be.target.value;
                          w(V, { condition: tt });
                        },
                        get value() {
                          return n().condition;
                        }
                      }), Z(ze), z(ge, ze);
                    };
                    se(Ve, (ge) => {
                      h() && ge(Q);
                    });
                  }
                  var Me = B(Ve, 2), Ne = B(X(Me), 2);
                  xr(Ne), Ne.__change = (ge) => {
                    const ze = ge.target.checked;
                    w(V, { loopEnable: ze });
                  }, Z(Me);
                  var Fe = B(Me, 2);
                  {
                    var Le = (ge) => {
                      var ze = T4(), st = U(ze), Be = B(X(st));
                      {
                        let ut = /* @__PURE__ */ _(() => n().loopIntervalMs || "1000");
                        et(Be, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (gt) => {
                            const At = gt.target.value;
                            w(V, { loopIntervalMs: At });
                          },
                          get value() {
                            return c(ut);
                          }
                        });
                      }
                      Z(st);
                      var tt = B(st, 2), xt = B(X(tt));
                      {
                        let ut = /* @__PURE__ */ _(() => n().maxLoopCount || "0");
                        et(xt, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (gt) => {
                            const At = gt.target.value;
                            w(V, { maxLoopCount: At });
                          },
                          get value() {
                            return c(ut);
                          }
                        });
                      }
                      Z(tt);
                      var at = B(tt, 2), zt = B(X(at));
                      et(zt, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (ut) => {
                          const gt = ut.target.value;
                          w(V, { loopBreakCondition: gt });
                        },
                        get value() {
                          return n().loopBreakCondition;
                        }
                      }), Z(at), z(ge, ze);
                    };
                    se(Fe, (ge) => {
                      n().loopEnable && ge(Le);
                    });
                  }
                  var Ze = B(Fe, 2), ft = B(X(Ze), 2);
                  xr(ft), ft.__change = (ge) => {
                    const ze = ge.target.checked;
                    w(V, { retryEnable: ze });
                  }, Z(Ze);
                  var bt = B(Ze, 2);
                  {
                    var nt = (ge) => {
                      var ze = D4(), st = U(ze), Be = B(X(st));
                      {
                        let ut = /* @__PURE__ */ _(() => n().retryIntervalMs || "1000");
                        et(Be, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (gt) => {
                            const At = gt.target.value;
                            w(V, { retryIntervalMs: At });
                          },
                          get value() {
                            return c(ut);
                          }
                        });
                      }
                      Z(st);
                      var tt = B(st, 2), xt = B(X(tt));
                      {
                        let ut = /* @__PURE__ */ _(() => n().maxRetryCount || "3");
                        et(xt, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (gt) => {
                            const At = gt.target.value;
                            w(V, { maxRetryCount: At });
                          },
                          get value() {
                            return c(ut);
                          }
                        });
                      }
                      Z(tt);
                      var at = B(tt, 2), zt = B(X(at), 2);
                      xr(zt), zt.__change = (ut) => {
                        const gt = ut.target.checked;
                        w(V, { resetRetryCountAfterNormal: gt });
                      }, Z(at), Ee(() => Ca(zt, !!n().resetRetryCountAfterNormal)), z(ge, ze);
                    };
                    se(bt, (ge) => {
                      n().retryEnable && ge(nt);
                    });
                  }
                  Z(fe), Ee(() => {
                    Ca(Ne, !!n().loopEnable), Ca(ft, !!n().retryEnable);
                  }), z(ue, fe);
                },
                children: (ue, fe) => {
                  qe(ue, {
                    size: "icon",
                    class: "tf-node-toolbar-item",
                    children: (ye, Ce) => {
                      var de = L4();
                      z(ye, de);
                    },
                    $$slots: { default: !0 }
                  });
                },
                $$slots: { floating: !0, default: !0 }
              });
            };
            se(ve, (oe) => {
              d() && oe(he);
            });
          }
          Z(R), z(Y, R);
        },
        $$slots: { default: !0 }
      });
    };
    se(D, (A) => {
      (a() || l() || u()) && A(N);
    });
  }
  var S = B(D, 2), T = B(X(S), 2), $ = X(T);
  uv($, {
    get items() {
      return c(k);
    },
    get activeKeys() {
      return y;
    },
    onChange: (A, Y) => {
      w(r(), { expand: Y?.includes("key") }), m()?.(Y?.includes("key") ? "key" : "");
    }
  }), Z(T), Z(S);
  var P = B(S, 2);
  {
    var M = (A) => {
      Cr(A, {
        type: "target",
        get position() {
          return _e.Left;
        },
        style: " left: -12px;top: 20px"
      });
    };
    se(P, (A) => {
      v() && A(M);
    });
  }
  var j = B(P, 2);
  {
    var q = (A) => {
      Cr(A, {
        type: "source",
        get position() {
          return _e.Right;
        },
        style: "right: -12px;top: 20px"
      });
    };
    se(j, (A) => {
      p() && A(q);
    });
  }
  var G = B(j, 2);
  return Pe(G, () => i() ?? je), z(t, I), le(L);
}
ro(["change"]);
ie(
  cn,
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
var R4 = /* @__PURE__ */ ne('<div class="input-more-item svelte-n5iecj">数据选项： <!></div>'), j4 = /* @__PURE__ */ ne('<div class="input-more-setting svelte-n5iecj"><div class="input-more-item svelte-n5iecj">数据内容： <!></div> <div class="input-more-item svelte-n5iecj">输入方式： <!></div> <!> <div class="input-more-item svelte-n5iecj">数据标题： <!></div> <div class="input-more-item svelte-n5iecj">数据描述： <!></div> <div class="input-more-item svelte-n5iecj">占位符： <!></div> <div class="input-more-item svelte-n5iecj"><!></div></div>'), K4 = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>'), F4 = /* @__PURE__ */ ne('<div class="input-item svelte-n5iecj"><!></div> <div class="input-item svelte-n5iecj"><!></div> <div class="input-item svelte-n5iecj"><!></div>', 1);
const Z4 = {
  hash: "svelte-n5iecj",
  code: ".input-item.svelte-n5iecj {display:flex;align-items:center;}.input-more-setting.svelte-n5iecj {display:flex;flex-direction:column;gap:10px;padding:10px;background:var(--background);border:1px solid var(--border);border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-n5iecj .input-more-item:where(.svelte-n5iecj) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:var(--muted-foreground);}"
};
function cv(t, e) {
  ae(e, !0), Je(t, Z4);
  const n = g(e, "parameter", 7), r = g(e, "index", 7);
  let o = pt(), i = hr(o), s = /* @__PURE__ */ _(() => ({ ...n(), ...i?.current?.data?.parameters[r()] }));
  const { updateNodeData: a } = $t(), l = (L, I) => {
    a(o, (D) => {
      let N = D.data.parameters;
      return N[r()][L] = I, { parameters: N };
    });
  }, u = (L, I) => {
    const D = I.target.value;
    l(L, D);
  }, d = (L) => {
    const I = L.target.value;
    l("name", I);
  }, h = (L) => {
    l("required", L);
  }, p = (L) => {
    const I = L.value;
    l("formType", I);
  }, v = (L) => {
    const I = L.value;
    l("contentType", I);
  };
  let m;
  const y = () => {
    a(o, (L) => {
      let I = L.data.parameters;
      return I.splice(r(), 1), { parameters: [...I] };
    }), m?.hide();
  };
  var w = {
    get parameter() {
      return n();
    },
    set parameter(L) {
      n(L), f();
    },
    get index() {
      return r();
    },
    set index(L) {
      r(L), f();
    }
  }, b = F4(), k = U(b), O = X(k);
  vt(O, {
    style: "width: 100%;",
    get value() {
      return c(s).name;
    },
    placeholder: "请输入参数名称",
    oninput: d
  }), Z(k);
  var C = B(k, 2), x = X(C);
  sv(x, {
    get checked() {
      return c(s).required;
    },
    onCheckedChange: h
  }), Z(C);
  var E = B(C, 2), V = X(E);
  return Mt(
    io(V, {
      placement: "bottom",
      floating: (L) => {
        var I = j4(), D = X(I), N = B(X(D));
        {
          let F = /* @__PURE__ */ _(() => c(s).contentType ? [c(s).contentType] : []);
          Pt(N, {
            get items() {
              return wu;
            },
            style: "width: 100%",
            defaultValue: ["text"],
            get value() {
              return c(F);
            },
            onSelect: v
          });
        }
        Z(D);
        var S = B(D, 2), T = B(X(S));
        {
          let F = /* @__PURE__ */ _(() => c(s).formType ? [c(s).formType] : []);
          Pt(T, {
            get items() {
              return $x;
            },
            style: "width: 100%",
            defaultValue: ["input"],
            get value() {
              return c(F);
            },
            onSelect: p
          });
        }
        Z(S);
        var $ = B(S, 2);
        {
          var P = (F) => {
            var W = R4(), J = B(X(W));
            {
              let re = /* @__PURE__ */ _(() => c(s).enums?.join(`
`));
              et(J, {
                rows: 3,
                style: "width: 100%;",
                onchange: (H) => {
                  l("enums", H.target?.value.trim().split(`
`));
                },
                get value() {
                  return c(re);
                },
                placeholder: "一行一个选项"
              });
            }
            Z(W), z(F, W);
          };
          se($, (F) => {
            (c(s).formType === "radio" || c(s).formType === "checkbox" || c(s).formType === "select") && F(P);
          });
        }
        var M = B($, 2), j = B(X(M));
        et(j, {
          rows: 1,
          style: "width: 100%;",
          onchange: (F) => {
            u("formLabel", F);
          },
          get value() {
            return c(s).formLabel;
          }
        }), Z(M);
        var q = B(M, 2), G = B(X(q));
        et(G, {
          rows: 2,
          style: "width: 100%;",
          onchange: (F) => {
            u("formDescription", F);
          },
          get value() {
            return c(s).formDescription;
          }
        }), Z(q);
        var A = B(q, 2), Y = B(X(A));
        et(Y, {
          rows: 2,
          style: "width: 100%;",
          onchange: (F) => {
            u("formPlaceholder", F);
          },
          get value() {
            return c(s).formPlaceholder;
          }
        }), Z(A);
        var ee = B(A, 2), R = X(ee);
        qe(R, {
          variant: "destructive",
          onclick: y,
          children: (F, W) => {
            Se();
            var J = Ae("删除");
            z(F, J);
          },
          $$slots: { default: !0 }
        }), Z(ee), Z(I), z(L, I);
      },
      children: (L, I) => {
        qe(L, {
          size: "icon-xs",
          class: "input-btn-more",
          children: (D, N) => {
            var S = K4();
            z(D, S);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (L) => m = L,
    () => m
  ), Z(E), z(t, b), le(w);
}
ie(cv, { parameter: {}, index: {} }, [], [], !0);
var W4 = /* @__PURE__ */ ne('<div class="input-header svelte-1yp5n1k">参数名称</div> <div class="input-header svelte-1yp5n1k">必填</div> <div class="input-header svelte-1yp5n1k"></div>', 1), X4 = /* @__PURE__ */ ne('<div class="none-params svelte-1yp5n1k">无输入参数</div>'), q4 = /* @__PURE__ */ ne('<div class="input-container svelte-1yp5n1k"><!> <!></div>');
const Y4 = {
  hash: "svelte-1yp5n1k",
  code: `.input-container.svelte-1yp5n1k {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1yp5n1k .none-params:where(.svelte-1yp5n1k) {font-size:12px;background:var(--secondary);height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1yp5n1k .input-header:where(.svelte-1yp5n1k) {font-size:12px;color:var(--muted-foreground);}`
};
function dv(t, e) {
  ae(e, !0), Je(t, Y4);
  let n = pt(), r = hr(n), o = /* @__PURE__ */ _(() => [...r?.current?.data?.parameters || []]);
  var i = q4(), s = X(i);
  {
    var a = (u) => {
      var d = W4();
      Se(4), z(u, d);
    };
    se(s, (u) => {
      c(o).length !== 0 && u(a);
    });
  }
  var l = B(s, 2);
  Ct(
    l,
    19,
    () => c(o),
    (u) => u.id,
    (u, d, h) => {
      cv(u, {
        get parameter() {
          return c(d);
        },
        get index() {
          return c(h);
        }
      });
    },
    (u) => {
      var d = X4();
      z(u, d);
    }
  ), Z(i), z(t, i), le();
}
ie(dv, {}, [], [], !0);
const pi = (t) => (!t || t.length == 0 || t.forEach((e) => {
  e.id || (e.id = Bn()), pi(e.children);
}), t), Sn = () => {
  const { updateNodeData: t } = $t();
  return {
    addParameter: (e, n = "parameters", r) => {
      Array.isArray(r) ? r.forEach((s) => pi(s?.children)) : pi(r?.children);
      function o(s) {
        return {
          name: "",
          dataType: "String",
          refType: "ref",
          ...s,
          id: Bn()
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
var G4 = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), U4 = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), J4 = /* @__PURE__ */ ne('<div class="heading svelte-llt1qy"><!> <!></div> <!>', 1);
const Q4 = {
  hash: "svelte-llt1qy",
  code: ".heading.svelte-llt1qy {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:var(--muted);border:1px solid transparent;}"
};
function hv(t, e) {
  ae(e, !0), Je(t, Q4);
  const n = g(e, "data", 7), r = /* @__PURE__ */ De(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = pt(), { addParameter: i } = Sn();
  var s = {
    get data() {
      return n();
    },
    set data(a) {
      n(a), f();
    }
  };
  return cn(t, Re(() => r, {
    get data() {
      return n();
    },
    allowExecute: !1,
    showTargetHandle: !1,
    allowSettingOfCondition: !1,
    icon: (a) => {
      var l = G4();
      z(a, l);
    },
    children: (a, l) => {
      var u = J4(), d = U(u), h = X(d);
      Ye(h, {
        level: 3,
        children: (m, y) => {
          Se();
          var w = Ae("输入参数");
          z(m, w);
        },
        $$slots: { default: !0 }
      });
      var p = B(h, 2);
      qe(p, {
        size: "icon-xs",
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: () => {
          i(o, "parameters", { refType: "input", name: "newParam" });
        },
        children: (m, y) => {
          var w = U4();
          z(m, w);
        },
        $$slots: { default: !0 }
      }), Z(d);
      var v = B(d, 2);
      dv(v, {}), z(a, u);
    },
    $$slots: { icon: !0, default: !0 }
  })), le(s);
}
ie(hv, { data: {} }, [], [], !0);
const pv = (t, e, n) => {
  for (const r of n)
    r.target === e && r.source && (t.push(r.source), pv(t, r.source, n));
}, fv = (t, e, n) => !t || t.length === 0 ? [] : t.map((r) => ({
  label: r.name + (n ? ` (Array<${r.dataType || "String"}>)` : ` (${r.dataType || "String"})`),
  value: e + "." + r.name,
  children: fv(r.children, e + "." + r.name, n)
})), Md = (t, e, n) => {
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
          children: fv(r, t.id, e)
        };
    }
  }
}, gv = (t = !1) => {
  const e = pt(), n = hr(e), r = /* @__PURE__ */ _($n), o = /* @__PURE__ */ _(() => c(r).nodes), i = /* @__PURE__ */ _(() => c(r).edges), s = /* @__PURE__ */ _(() => c(r).nodeLookup);
  let a = /* @__PURE__ */ _(() => {
    const l = [];
    if (!n.current)
      return [];
    const u = c(s).get(e);
    if (t)
      for (const d of c(o)) {
        const h = d.parentId === n.current.id;
        if (h) {
          const p = Md(d, h, u);
          p && l.push(p);
        }
      }
    else {
      const d = [];
      pv(d, e, c(i));
      for (const h of c(o))
        if (d.includes(h.id)) {
          const p = h.parentId === n.current.id, v = Md(h, p, u);
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
var eC = /* @__PURE__ */ ne('<div class="input-more-item svelte-jmeys3">数据内容： <!></div>'), tC = /* @__PURE__ */ ne('<div class="input-more-setting svelte-jmeys3"><div class="input-more-item svelte-jmeys3">数据来源： <!></div> <!> <div class="input-more-item svelte-jmeys3">默认值： <!></div> <div class="input-more-item svelte-jmeys3">参数描述： <!></div> <div class="input-more-item svelte-jmeys3"><!></div></div>'), nC = /* @__PURE__ */ ne('<div class="input-item svelte-jmeys3"><!></div> <div class="input-item svelte-jmeys3"><!></div> <div class="input-item svelte-jmeys3"><!></div>', 1);
const rC = {
  hash: "svelte-jmeys3",
  code: ".input-item.svelte-jmeys3 {display:flex;align-items:center;}.input-more-setting.svelte-jmeys3 {display:flex;flex-direction:column;gap:10px;padding:10px;background:var(--background);border:1px solid var(--border);border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-jmeys3 .input-more-item:where(.svelte-jmeys3) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:var(--muted-foreground);}"
};
function vv(t, e) {
  ae(e, !0), Je(t, rC), kn(() => {
    c(u).refType || m({ value: "ref" });
  });
  const n = g(e, "parameter", 7), r = g(e, "index", 7), o = g(e, "dataKeyName", 7), i = g(e, "useChildrenOnly", 7), s = g(e, "showContentType", 7, !1);
  let a = pt(), l = hr(a), u = /* @__PURE__ */ _(() => ({
    ...n(),
    ...l?.current?.data?.[o()][r()]
  }));
  const { updateNodeData: d } = $t(), h = (T, $) => {
    d(a, (P) => {
      let M = P.data?.[o()];
      return M[r()] = { ...M[r()], [T]: $ }, { [o()]: M };
    });
  }, p = (T, $) => {
    const P = $.target.value;
    h(T, P);
  }, v = (T) => {
    const $ = T.value;
    h("ref", $);
  }, m = (T) => {
    const $ = T.value;
    h("refType", $);
  }, y = (T) => {
    const $ = T.value;
    h("contentType", $);
  };
  let w;
  const b = () => {
    d(a, (T) => {
      let $ = T.data?.[o()];
      return $.splice(r(), 1), { [o()]: [...$] };
    }), w?.hide();
  };
  let k = gv(i());
  var O = {
    get parameter() {
      return n();
    },
    set parameter(T) {
      n(T), f();
    },
    get index() {
      return r();
    },
    set index(T) {
      r(T), f();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(T) {
      o(T), f();
    },
    get useChildrenOnly() {
      return i();
    },
    set useChildrenOnly(T) {
      i(T), f();
    },
    get showContentType() {
      return s();
    },
    set showContentType(T = !1) {
      s(T), f();
    }
  }, C = nC(), x = U(C), E = X(x);
  {
    let T = /* @__PURE__ */ _(() => c(u).nameDisabled === !0);
    vt(E, {
      style: "width: 100%;",
      get value() {
        return c(u).name;
      },
      placeholder: "请输入参数名称",
      get disabled() {
        return c(T);
      },
      oninput: ($) => p("name", $)
    });
  }
  Z(x);
  var V = B(x, 2), L = X(V);
  {
    var I = (T) => {
      vt(T, {
        get value() {
          return c(u).value;
        },
        placeholder: "请输入参数值",
        oninput: ($) => p("value", $)
      });
    }, D = (T) => {
      var $ = ce(), P = U($);
      {
        var M = (j) => {
          {
            let q = /* @__PURE__ */ _(() => [c(u).ref]);
            Pt(j, {
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
          (j) => {
            c(u).refType !== "input" && j(M);
          },
          !0
        );
      }
      z(T, $);
    };
    se(L, (T) => {
      c(u).refType === "fixed" ? T(I) : T(D, !1);
    });
  }
  Z(V);
  var N = B(V, 2), S = X(N);
  return Mt(
    io(S, {
      placement: "bottom",
      floating: (T) => {
        var $ = tC(), P = X($), M = B(X(P));
        {
          let W = /* @__PURE__ */ _(() => c(u).refType ? [c(u).refType] : []);
          Pt(M, {
            get items() {
              return Cx;
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
        var j = B(P, 2);
        {
          var q = (W) => {
            var J = eC(), re = B(X(J));
            {
              let H = /* @__PURE__ */ _(() => c(u).contentType ? [c(u).contentType] : []);
              Pt(re, {
                get items() {
                  return wu;
                },
                style: "width: 100%",
                defaultValue: ["text"],
                get value() {
                  return c(H);
                },
                onSelect: y
              });
            }
            Z(J), z(W, J);
          };
          se(j, (W) => {
            s() && W(q);
          });
        }
        var G = B(j, 2), A = B(X(G));
        et(A, {
          rows: 1,
          style: "width: 100%;",
          onchange: (W) => {
            p("defaultValue", W);
          },
          get value() {
            return c(u).defaultValue;
          },
          placeholder: "请输入参数默认值"
        }), Z(G);
        var Y = B(G, 2), ee = B(X(Y));
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
        var R = B(Y, 2), F = X(R);
        qe(F, {
          variant: "destructive",
          onclick: b,
          children: (W, J) => {
            Se();
            var re = Ae("删除");
            z(W, re);
          },
          $$slots: { default: !0 }
        }), Z(R), Z($), z(T, $);
      },
      children: (T, $) => {
        Ti(T, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (T) => w = T,
    () => w
  ), Z(N), z(t, C), le(O);
}
ie(
  vv,
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
var oC = /* @__PURE__ */ ne('<div class="input-header svelte-32f1pk">参数名称</div> <div class="input-header svelte-32f1pk">参数值</div> <div class="input-header svelte-32f1pk"></div>', 1), iC = /* @__PURE__ */ ne('<div class="none-params svelte-32f1pk"> </div>'), sC = /* @__PURE__ */ ne('<div class="input-container svelte-32f1pk"><!> <!></div>');
const aC = {
  hash: "svelte-32f1pk",
  code: `.input-container.svelte-32f1pk {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-32f1pk .none-params:where(.svelte-32f1pk) {font-size:12px;background:var(--secondary);height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-32f1pk .input-header:where(.svelte-32f1pk) {font-size:12px;color:var(--muted-foreground);}`
};
function Bt(t, e) {
  ae(e, !0), Je(t, aC);
  const n = g(e, "noneParameterText", 7, "无输入参数"), r = g(e, "dataKeyName", 7, "parameters"), o = g(e, "useChildrenOnly", 7), i = g(e, "showContentType", 7, !1);
  let s = pt(), a = hr(s), l = /* @__PURE__ */ _(() => [...a?.current?.data?.[r()] || []]);
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
  }, d = sC(), h = X(d);
  {
    var p = (m) => {
      var y = oC();
      Se(4), z(m, y);
    };
    se(h, (m) => {
      c(l).length !== 0 && m(p);
    });
  }
  var v = B(h, 2);
  return Ct(
    v,
    19,
    () => c(l),
    (m) => m.id,
    (m, y, w) => {
      vv(m, {
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
      var y = iC(), w = X(y, !0);
      Z(y), Ee(() => rt(w, n())), z(m, y);
    }
  ), Z(d), z(t, d), le(u);
}
ie(
  Bt,
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
var lC = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), uC = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), cC = /* @__PURE__ */ ne('<div class="heading svelte-1fiuxu3"><!> <!></div> <!>', 1);
const dC = {
  hash: "svelte-1fiuxu3",
  code: ".heading.svelte-1fiuxu3 {display:flex;margin-bottom:10px;}"
};
function mv(t, e) {
  ae(e, !0), Je(t, dC);
  const n = g(e, "data", 7), r = /* @__PURE__ */ De(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = pt(), { addParameter: i } = Sn();
  var s = {
    get data() {
      return n();
    },
    set data(a) {
      n(a), f();
    }
  };
  return cn(t, Re(
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
        var l = lC();
        z(a, l);
      },
      children: (a, l) => {
        var u = cC(), d = U(u), h = X(d);
        Ye(h, {
          level: 3,
          children: (m, y) => {
            Se();
            var w = Ae("输出参数");
            z(m, w);
          },
          $$slots: { default: !0 }
        });
        var p = B(h, 2);
        qe(p, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs", { name: "output" });
          },
          children: (m, y) => {
            var w = uC();
            z(m, w);
          },
          $$slots: { default: !0 }
        }), Z(d);
        var v = B(d, 2);
        Bt(v, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs",
          showContentType: !0
        }), z(a, u);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), le(s);
}
ie(mv, { data: {} }, [], [], !0);
const Ba = (t) => JSON.parse(JSON.stringify(t));
var hC = /* @__PURE__ */ ke('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), pC = /* @__PURE__ */ ne('<div class="input-more-item svelte-hwmib9"><!></div>'), fC = /* @__PURE__ */ ne('<div class="input-more-setting svelte-hwmib9"><div class="input-more-item svelte-hwmib9">默认值： <!></div> <div class="input-more-item svelte-hwmib9">参数描述： <!></div> <!></div>'), gC = /* @__PURE__ */ ne('<div class="input-item svelte-hwmib9"><!> <!></div> <div class="input-item svelte-hwmib9"><!> <!></div> <div class="input-item svelte-hwmib9"><!></div>', 1);
const vC = {
  hash: "svelte-hwmib9",
  code: ".input-item.svelte-hwmib9 {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-hwmib9 {display:flex;flex-direction:column;gap:10px;padding:10px;background:var(--background);border:1px solid var(--border);border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-hwmib9 .input-more-item:where(.svelte-hwmib9) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:var(--muted-foreground);}"
};
function yv(t, e) {
  ae(e, !0), Je(t, vC);
  const n = g(e, "parameter", 7), r = g(e, "position", 7), o = g(e, "dataKeyName", 7), i = g(e, "placeholder", 7, "请输入参数值");
  let s = pt(), a = hr(s), l = /* @__PURE__ */ _(() => {
    let S = a?.current?.data?.[o()], T;
    if (S && r().length > 0) {
      let $ = S;
      for (let P = 0; P < r().length; P++) {
        const M = r()[P];
        P == r().length - 1 ? T = $[M] : $ = $[M].children;
      }
    }
    return { ...n(), ...T };
  });
  const { updateNodeData: u } = $t(), d = (S, T) => {
    u(s, ($) => {
      const P = $.data?.[o()];
      if (P && r().length > 0) {
        let M = P;
        for (let j = 0; j < r().length; j++) {
          const q = r()[j];
          j == r().length - 1 ? M[q] = { ...M[q], [S]: T } : M = M[q].children;
        }
      }
      return { [o()]: [...Ba(P)] };
    });
  }, h = (S, T) => {
    const $ = T.target.value;
    d(S, $);
  }, p = (S) => {
    const T = S.value;
    d("dataType", T);
  };
  let v;
  const m = () => {
    u(s, (S) => {
      let T = S.data?.[o()];
      if (T && r().length > 0) {
        let $ = T;
        for (let P = 0; P < r().length; P++) {
          const M = r()[P];
          P == r().length - 1 ? $.splice(M, 1) : $ = $[M].children;
        }
      }
      return { [o()]: [...Ba(T)] };
    }), v?.hide();
  }, y = () => {
    u(s, (S) => {
      let T = S.data?.[o()];
      if (T && r().length > 0) {
        let $ = T;
        for (let P = 0; P < r().length; P++) {
          const M = r()[P];
          P == r().length - 1 ? $[M].children ? $[M].children.push({ id: Bn(), name: "newParam", dataType: "String" }) : $[M].children = [{ id: Bn(), name: "newParam", dataType: "String" }] : $ = $[M].children;
        }
      }
      return { [o()]: [...Ba(T)] };
    });
  };
  var w = {
    get parameter() {
      return n();
    },
    set parameter(S) {
      n(S), f();
    },
    get position() {
      return r();
    },
    set position(S) {
      r(S), f();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(S) {
      o(S), f();
    },
    get placeholder() {
      return i();
    },
    set placeholder(S = "请输入参数值") {
      i(S), f();
    }
  }, b = gC(), k = U(b), O = X(k);
  {
    var C = (S) => {
      var T = ce(), $ = U(T);
      Ct($, 17, r, Xr, (P, M) => {
        Se();
        var j = Ae(" ");
        z(P, j);
      }), z(S, T);
    };
    se(O, (S) => {
      r().length > 1 && S(C);
    });
  }
  var x = B(O, 2);
  {
    let S = /* @__PURE__ */ _(() => c(l).nameDisabled === !0);
    vt(x, {
      style: "width: 100%;",
      get value() {
        return c(l).name;
      },
      get placeholder() {
        return i();
      },
      oninput: (T) => {
        h("name", T);
      },
      get disabled() {
        return c(S);
      }
    });
  }
  Z(k);
  var E = B(k, 2), V = X(E);
  {
    let S = /* @__PURE__ */ _(() => c(l).dataTypeItems || kx), T = /* @__PURE__ */ _(() => c(l).dataType ? [c(l).dataType] : []), $ = /* @__PURE__ */ _(() => c(l).dataTypeDisabled === !0);
    Pt(V, {
      get items() {
        return c(S);
      },
      style: "width: 100%",
      defaultValue: ["String"],
      get value() {
        return c(T);
      },
      get disabled() {
        return c($);
      },
      onSelect: p
    });
  }
  var L = B(V, 2);
  {
    var I = (S) => {
      qe(S, {
        size: "icon-xs",
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: y,
        children: (T, $) => {
          var P = hC();
          z(T, P);
        },
        $$slots: { default: !0 }
      });
    };
    se(L, (S) => {
      (c(l).dataType === "Object" || c(l).dataType === "Array") && c(l).addChildDisabled !== !0 && S(I);
    });
  }
  Z(E);
  var D = B(E, 2), N = X(D);
  return Mt(
    io(N, {
      placement: "bottom",
      floating: (S) => {
        var T = fC(), $ = X(T), P = B(X($));
        {
          let A = /* @__PURE__ */ _(() => c(l).defaultValue || "");
          et(P, {
            rows: 1,
            style: "width: 100%;",
            get value() {
              return c(A);
            },
            onchange: (Y) => {
              h("defaultValue", Y);
            }
          });
        }
        Z($);
        var M = B($, 2), j = B(X(M));
        {
          let A = /* @__PURE__ */ _(() => c(l).description || "");
          et(j, {
            rows: 3,
            style: "width: 100%;",
            get value() {
              return c(A);
            },
            onchange: (Y) => {
              h("description", Y);
            }
          });
        }
        Z(M);
        var q = B(M, 2);
        {
          var G = (A) => {
            var Y = pC(), ee = X(Y);
            qe(ee, {
              variant: "destructive",
              onclick: m,
              children: (R, F) => {
                Se();
                var W = Ae("删除");
                z(R, W);
              },
              $$slots: { default: !0 }
            }), Z(Y), z(A, Y);
          };
          se(q, (A) => {
            c(l).deleteDisabled !== !0 && A(G);
          });
        }
        Z(T), z(S, T);
      },
      children: (S, T) => {
        Ti(S, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (S) => v = S,
    () => v
  ), Z(D), z(t, b), le(w);
}
ie(
  yv,
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
var mC = /* @__PURE__ */ ne("<!> <!>", 1), yC = /* @__PURE__ */ ne('<div class="none-params svelte-1oz5kx0"> </div>'), wC = /* @__PURE__ */ ne('<div class="input-header svelte-1oz5kx0">参数名称</div> <div class="input-header svelte-1oz5kx0">参数类型</div> <div class="input-header svelte-1oz5kx0"></div>', 1), bC = /* @__PURE__ */ ne('<div class="input-container svelte-1oz5kx0"><!> <!></div>');
const xC = {
  hash: "svelte-1oz5kx0",
  code: `.input-container.svelte-1oz5kx0 {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1oz5kx0 .none-params:where(.svelte-1oz5kx0) {font-size:12px;background:var(--secondary);height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1oz5kx0 .input-header:where(.svelte-1oz5kx0) {font-size:12px;color:var(--muted-foreground);}`
};
function pr(t, e) {
  ae(e, !0), Je(t, xC);
  const n = (m, y = je, w = je) => {
    var b = ce(), k = U(b);
    Ct(
      k,
      19,
      y,
      (O) => `${O.id}_${O.children ? O.children.length : 0}`,
      (O, C, x) => {
        var E = mC(), V = U(E);
        {
          let D = /* @__PURE__ */ _(() => [...w(), c(x)]);
          yv(V, {
            get parameter() {
              return c(C);
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
        var L = B(V, 2);
        {
          var I = (D) => {
            {
              let N = /* @__PURE__ */ _(() => [...w(), c(x)]);
              n(D, () => c(C).children, () => c(N));
            }
          };
          se(L, (D) => {
            c(C).children && D(I);
          });
        }
        z(O, E);
      },
      (O) => {
        var C = ce(), x = U(C);
        {
          var E = (V) => {
            var L = yC(), I = X(L, !0);
            Z(L), Ee(() => rt(I, r())), z(V, L);
          };
          se(x, (V) => {
            w().length === 0 && V(E);
          });
        }
        z(O, C);
      }
    ), z(m, b);
  }, r = g(e, "noneParameterText", 7, "无输出参数"), o = g(e, "dataKeyName", 7, "outputDefs"), i = g(e, "placeholder", 7, "请输入参数名称");
  let s = pt(), a = hr(s), l = /* @__PURE__ */ _(() => [...a?.current?.data?.[o()] || []]);
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
  }, d = bC(), h = X(d);
  {
    var p = (m) => {
      var y = wC();
      Se(4), z(m, y);
    };
    se(h, (m) => {
      c(l).length !== 0 && m(p);
    });
  }
  var v = B(h, 2);
  return n(v, () => c(l) || [], () => []), Z(d), z(t, d), le(u);
}
ie(pr, { noneParameterText: {}, dataKeyName: {}, placeholder: {} }, [], [], !0);
var kC = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), CC = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), $C = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), SC = /* @__PURE__ */ ne('<div class="llm-setting svelte-j81vcl"><div class="setting-title svelte-j81vcl">采样参数</div> <div class="setting-item svelte-j81vcl"><div class="slider-container svelte-j81vcl"><span class="svelte-j81vcl"> </span> <input class="nodrag svelte-j81vcl" type="range" min="0" max="1" step="0.1"/></div></div> <div class="setting-item svelte-j81vcl"><div class="slider-container svelte-j81vcl"><span class="svelte-j81vcl"> </span> <input class="nodrag svelte-j81vcl" type="range" min="0" max="1" step="0.1"/></div></div> <div class="setting-item svelte-j81vcl"><div class="slider-container svelte-j81vcl"><span class="svelte-j81vcl"> </span> <input class="nodrag svelte-j81vcl" type="range" min="0" max="100" step="1"/></div></div></div>'), _C = /* @__PURE__ */ ne('<div class="setting-title svelte-j81vcl">JSON Schema</div> <div class="setting-item svelte-j81vcl"><!></div>', 1), OC = /* @__PURE__ */ ne('<div class="heading svelte-j81vcl"><!> <!></div> <!> <div class="heading svelte-j81vcl" style="padding-top: 10px"><!> <!></div> <!> <!> <div class="setting-title svelte-j81vcl">模型</div> <div class="setting-item svelte-j81vcl"><!> <!></div> <div class="setting-title svelte-j81vcl">系统提示词</div> <div class="setting-item svelte-j81vcl"><!></div> <div class="setting-title svelte-j81vcl">用户提示词</div> <div class="setting-item svelte-j81vcl"><!></div> <!> <div class="heading svelte-j81vcl"><!> <!></div> <!>', 1);
const PC = {
  hash: "svelte-j81vcl",
  code: `.heading.svelte-j81vcl {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-j81vcl {font-size:12px;color:var(--secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-j81vcl {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}\r
\r
    /* 新增样式 */.slider-container.svelte-j81vcl {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-j81vcl span:where(.svelte-j81vcl) {font-size:12px;color:var(--muted-foreground);display:flex;justify-content:space-between;align-items:center;}.llm-setting.svelte-j81vcl {width:200px;background:var(--background);padding:10px;border-radius:5px;box-shadow:0 0 10px rgba(0, 0, 0, 0.1);border:1px solid var(--border);}input[type='range'].svelte-j81vcl {width:100%;height:4px;background:var(--muted);border-radius:2px;outline:none;-webkit-appearance:none;}input[type='range'].svelte-j81vcl::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:var(--primary);border-radius:50%;cursor:pointer;}`
};
function wv(t, e) {
  ae(e, !0), Je(t, PC);
  const n = g(e, "data", 7), r = /* @__PURE__ */ De(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = pt(), { addParameter: i } = Sn(), s = _r();
  let a = /* @__PURE__ */ me(dt([]));
  kn(async () => {
    const h = await s.provider?.llm?.();
    c(a).push(...h || []);
  });
  const { updateNodeData: l } = $t(), u = (h) => {
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
  Ie(() => {
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
  return cn(t, Re(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (h) => {
        var p = kC();
        z(h, p);
      },
      children: (h, p) => {
        var v = OC(), m = U(v), y = X(m);
        Ye(y, {
          level: 3,
          children: (A, Y) => {
            Se();
            var ee = Ae("输入参数");
            z(A, ee);
          },
          $$slots: { default: !0 }
        });
        var w = B(y, 2);
        qe(w, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (A, Y) => {
            var ee = CC();
            z(A, ee);
          },
          $$slots: { default: !0 }
        }), Z(m);
        var b = B(m, 2);
        Bt(b, {});
        var k = B(b, 2), O = X(k);
        Ye(O, {
          level: 3,
          children: (A, Y) => {
            Se();
            var ee = Ae("图片识别");
            z(A, ee);
          },
          $$slots: { default: !0 }
        });
        var C = B(O, 2);
        qe(C, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "images");
          },
          children: (A, Y) => {
            var ee = $C();
            z(A, ee);
          },
          $$slots: { default: !0 }
        }), Z(k);
        var x = B(k, 2);
        Bt(x, { dataKeyName: "images", noneParameterText: "无图片参数" });
        var E = B(x, 2);
        Ye(E, {
          level: 3,
          mt: "10px",
          children: (A, Y) => {
            Se();
            var ee = Ae("模型设置");
            z(A, ee);
          },
          $$slots: { default: !0 }
        });
        var V = B(E, 4), L = X(V);
        {
          let A = /* @__PURE__ */ _(() => n().llmId ? [n().llmId] : []);
          Pt(L, {
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
              return c(A);
            }
          });
        }
        var I = B(L, 2);
        io(I, {
          placement: "bottom",
          floating: (A) => {
            var Y = SC(), ee = B(X(Y), 2), R = X(ee), F = X(R), W = X(F);
            Z(F);
            var J = B(F, 2);
            xr(J), J.__input = (de) => l(o, { temperature: parseFloat(de.target.value) }), Z(R), Z(ee);
            var re = B(ee, 2), H = X(re), te = X(H), ve = X(te);
            Z(te);
            var he = B(te, 2);
            xr(he), he.__input = (de) => l(o, { topP: parseFloat(de.target.value) }), Z(H), Z(re);
            var oe = B(re, 2), ue = X(oe), fe = X(ue), ye = X(fe);
            Z(fe);
            var Ce = B(fe, 2);
            xr(Ce), Ce.__input = (de) => l(o, { topK: parseInt(de.target.value) }), Z(ue), Z(oe), Z(Y), Ee(() => {
              rt(W, `Temperature: ${n().temperature ?? 0.5 ?? ""}`), es(J, n().temperature ?? 0.5), rt(ve, `Top P: ${n().topP ?? 0.9 ?? ""}`), es(he, n().topP ?? 0.9), rt(ye, `Top K: ${n().topK ?? 50 ?? ""}`), es(Ce, n().topK ?? 50);
            }), z(A, Y);
          },
          children: (A, Y) => {
            Ti(A, {});
          },
          $$slots: { floating: !0, default: !0 }
        }), Z(V);
        var D = B(V, 4), N = X(D);
        {
          let A = /* @__PURE__ */ _(() => n().systemPrompt || "");
          et(N, {
            rows: 5,
            placeholder: "请输入系统提示词",
            style: "width: 100%",
            get value() {
              return c(A);
            },
            oninput: (Y) => {
              l(o, { systemPrompt: Y.target.value });
            }
          });
        }
        Z(D);
        var S = B(D, 4), T = X(S);
        {
          let A = /* @__PURE__ */ _(() => n().userPrompt || "");
          et(T, {
            rows: 5,
            placeholder: "请输入用户提示词",
            style: "width: 100%",
            get value() {
              return c(A);
            },
            oninput: (Y) => {
              l(o, { userPrompt: Y.target.value });
            }
          });
        }
        Z(S);
        var $ = B(S, 2);
        {
          var P = (A) => {
            var Y = _C(), ee = B(U(Y), 2), R = X(ee);
            {
              let F = /* @__PURE__ */ _(() => n().jsonSchema || "");
              et(R, {
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
            Z(ee), z(A, Y);
          };
          se($, (A) => {
            n().outType === "json" && A(P);
          });
        }
        var M = B($, 2), j = X(M);
        Ye(j, {
          level: 3,
          children: (A, Y) => {
            Se();
            var ee = Ae("输出参数");
            z(A, ee);
          },
          $$slots: { default: !0 }
        });
        var q = B(j, 2);
        {
          let A = /* @__PURE__ */ _(() => n().outType ? [n().outType] : []);
          Pt(q, {
            class: "w-25 ml-auto",
            items: [
              { label: "文本", value: "text" },
              { label: "JSON", value: "json" }
            ],
            onSelect: (Y) => {
              u(Y.value);
            },
            get value() {
              return c(A);
            }
          });
        }
        Z(M);
        var G = B(M, 2);
        pr(G, {}), z(h, v);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), le(d);
}
ro(["input"]);
ie(wv, { data: {} }, [], [], !0);
var EC = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), NC = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), MC = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), zC = /* @__PURE__ */ ne('<div class="heading svelte-1wcsayx"><!> <!></div> <!> <!> <div class="setting-title svelte-1wcsayx">执行引擎</div> <div class="setting-item svelte-1wcsayx"><!></div> <div class="setting-title svelte-1wcsayx">执行代码</div> <div class="setting-item svelte-1wcsayx"><!></div> <div class="heading svelte-1wcsayx"><!> <!></div> <!>', 1);
const AC = {
  hash: "svelte-1wcsayx",
  code: ".heading.svelte-1wcsayx {display:flex;margin-bottom:10px;}.setting-title.svelte-1wcsayx {font-size:12px;color:var(--secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-1wcsayx {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function bv(t, e) {
  ae(e, !0), Je(t, AC);
  const n = g(e, "data", 7), r = /* @__PURE__ */ De(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]);
  kn(() => {
    n().engine || s(o, () => ({ engine: "qlexpress" }));
  });
  const o = pt(), { addParameter: i } = Sn(), { updateNodeData: s } = $t(), a = [
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
  return cn(t, Re(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var d = EC();
        z(u, d);
      },
      children: (u, d) => {
        var h = zC(), p = U(h), v = X(p);
        Ye(v, {
          level: 3,
          children: (I, D) => {
            Se();
            var N = Ae("输入参数");
            z(I, N);
          },
          $$slots: { default: !0 }
        });
        var m = B(v, 2);
        qe(m, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (I, D) => {
            var N = NC();
            z(I, N);
          },
          $$slots: { default: !0 }
        }), Z(p);
        var y = B(p, 2);
        Bt(y, {});
        var w = B(y, 2);
        Ye(w, {
          level: 3,
          mt: "10px",
          children: (I, D) => {
            Se();
            var N = Ae("代码");
            z(I, N);
          },
          $$slots: { default: !0 }
        });
        var b = B(w, 4), k = X(b);
        {
          let I = /* @__PURE__ */ _(() => n().engine ? [n().engine] : ["qlexpress"]);
          Pt(k, {
            get items() {
              return a;
            },
            style: "width: 100%",
            placeholder: "请选择执行引擎",
            onSelect: (D) => {
              const N = D.value;
              s(o, () => ({ engine: N }));
            },
            get value() {
              return c(I);
            }
          });
        }
        Z(b);
        var O = B(b, 4), C = X(O);
        {
          let I = /* @__PURE__ */ _(() => n().code || "");
          et(C, {
            rows: 10,
            placeholder: "请输入执行代码，注：输出内容需添加到_result中，如：_result['key'] = value 或者 _result.key = value",
            style: "width: 100%",
            onchange: (D) => {
              s(o, () => ({ code: D.target.value }));
            },
            get value() {
              return c(I);
            }
          });
        }
        Z(O);
        var x = B(O, 2), E = X(x);
        Ye(E, {
          level: 3,
          mt: "10px",
          children: (I, D) => {
            Se();
            var N = Ae("输出参数");
            z(I, N);
          },
          $$slots: { default: !0 }
        });
        var V = B(E, 2);
        qe(V, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (I, D) => {
            var N = MC();
            z(I, N);
          },
          $$slots: { default: !0 }
        }), Z(x);
        var L = B(x, 2);
        pr(L, {}), z(u, h);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), le(l);
}
ie(bv, { data: {} }, [], [], !0);
var TC = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>'), DC = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), VC = /* @__PURE__ */ ne('<div class="heading svelte-1lcrzpc"><!> <!></div> <!> <!> <div class="setting-item svelte-1lcrzpc"><!></div> <div class="heading svelte-1lcrzpc"><!></div> <!>', 1);
const LC = {
  hash: "svelte-1lcrzpc",
  code: ".heading.svelte-1lcrzpc {display:flex;margin-bottom:10px;}.setting-item.svelte-1lcrzpc {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function xv(t, e) {
  ae(e, !0), Je(t, LC);
  const n = g(e, "data", 7), r = /* @__PURE__ */ De(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = pt(), { addParameter: i } = Sn(), { updateNodeData: s } = $t();
  Ie(() => {
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
  return cn(t, Re(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = TC();
        z(l, u);
      },
      children: (l, u) => {
        var d = VC(), h = U(d), p = X(h);
        Ye(p, {
          level: 3,
          children: (x, E) => {
            Se();
            var V = Ae("输入参数");
            z(x, V);
          },
          $$slots: { default: !0 }
        });
        var v = B(p, 2);
        qe(v, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (x, E) => {
            var V = DC();
            z(x, V);
          },
          $$slots: { default: !0 }
        }), Z(h);
        var m = B(h, 2);
        Bt(m, {});
        var y = B(m, 2);
        Ye(y, {
          level: 3,
          mt: "10px",
          mb: "10px",
          children: (x, E) => {
            Se();
            var V = Ae("模板内容");
            z(x, V);
          },
          $$slots: { default: !0 }
        });
        var w = B(y, 2), b = X(w);
        {
          let x = /* @__PURE__ */ _(() => n().template || "");
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
        var k = B(w, 2), O = X(k);
        Ye(O, {
          level: 3,
          mt: "10px",
          children: (x, E) => {
            Se();
            var V = Ae("输出参数");
            z(x, V);
          },
          $$slots: { default: !0 }
        }), Z(k);
        var C = B(k, 2);
        pr(C, {}), z(l, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), le(a);
}
ie(xv, { data: {} }, [], [], !0);
var HC = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), IC = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), BC = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), RC = /* @__PURE__ */ ne('<!> <div class="radio-group svelte-19uflw6"><label class="svelte-19uflw6"><!>none</label> <label class="svelte-19uflw6"><!>form-data</label> <label class="svelte-19uflw6"><!>x-www-form-urlencoded</label> <label class="svelte-19uflw6"><!>json</label> <label class="svelte-19uflw6"><!>raw</label></div>', 1), jC = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), KC = /* @__PURE__ */ ne('<div class="heading svelte-19uflw6" style="padding-top: 10px"><!> <!></div> <!>', 1), FC = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), ZC = /* @__PURE__ */ ne('<div class="heading svelte-19uflw6" style="padding-top: 10px"><!> <!></div> <!>', 1), WC = /* @__PURE__ */ ne('<div style="width: 100%"><!></div>'), XC = /* @__PURE__ */ ne('<div style="width: 100%"><!></div>'), qC = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), YC = /* @__PURE__ */ ne('<div class="heading svelte-19uflw6"><!> <!></div> <!> <!> <div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-19uflw6"><!> <!></div> <!> <!> <!> <!> <!> <!> <div class="heading svelte-19uflw6"><!> <!></div> <!>', 1);
const GC = {
  hash: "svelte-19uflw6",
  code: ".heading.svelte-19uflw6 {display:flex;margin-bottom:10px;}.radio-group.svelte-19uflw6 {display:flex;margin:10px 0;flex-wrap:wrap;}.radio-group.svelte-19uflw6 label:where(.svelte-19uflw6) {display:flex;font-size:14px;box-sizing:border-box;}"
};
function kv(t, e) {
  ae(e, !0), Je(t, GC);
  const n = g(e, "data", 7), r = /* @__PURE__ */ De(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]);
  kn(() => {
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
  ], i = pt(), { addParameter: s } = Sn(), { updateNodeData: a } = $t();
  var l = {
    get data() {
      return n();
    },
    set data(u) {
      n(u), f();
    }
  };
  return cn(t, Re(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var d = HC();
        z(u, d);
      },
      children: (u, d) => {
        var h = YC(), p = U(h), v = X(p);
        Ye(v, {
          level: 3,
          children: (F, W) => {
            Se();
            var J = Ae("输入参数");
            z(F, J);
          },
          $$slots: { default: !0 }
        });
        var m = B(v, 2);
        qe(m, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i);
          },
          children: (F, W) => {
            var J = IC();
            z(F, J);
          },
          $$slots: { default: !0 }
        }), Z(p);
        var y = B(p, 2);
        Bt(y, {});
        var w = B(y, 2);
        Ye(w, {
          level: 3,
          mt: "10px",
          children: (F, W) => {
            Se();
            var J = Ae("URL 地址");
            z(F, J);
          },
          $$slots: { default: !0 }
        });
        var b = B(w, 2), k = X(b), O = X(k);
        {
          let F = /* @__PURE__ */ _(() => n().method ? [n().method] : ["get"]);
          Pt(O, {
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
              return c(F);
            }
          });
        }
        Z(k);
        var C = B(k, 2), x = X(C);
        {
          let F = /* @__PURE__ */ _(() => n().url || "");
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
        var E = B(b, 2), V = X(E);
        Ye(V, {
          level: 3,
          children: (F, W) => {
            Se();
            var J = Ae("Http 头信息");
            z(F, J);
          },
          $$slots: { default: !0 }
        });
        var L = B(V, 2);
        qe(L, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "headers");
          },
          children: (F, W) => {
            var J = BC();
            z(F, J);
          },
          $$slots: { default: !0 }
        }), Z(E);
        var I = B(E, 2);
        Bt(I, { dataKeyName: "headers" });
        var D = B(I, 2);
        {
          var N = (F) => {
            var W = RC(), J = U(W);
            Ye(J, {
              level: 3,
              mt: "10px",
              children: (xe, Ve) => {
                Se();
                var Q = Ae("Body");
                z(xe, Q);
              },
              $$slots: { default: !0 }
            });
            var re = B(J, 2), H = X(re), te = X(H);
            {
              let xe = /* @__PURE__ */ _(() => !n().bodyType || n().bodyType === "");
              vt(te, {
                type: "radio",
                value: "",
                get checked() {
                  return c(xe);
                },
                onchange: (Ve) => {
                  Ve.target?.checked && a(i, { bodyType: "" });
                }
              });
            }
            Se(), Z(H);
            var ve = B(H, 2), he = X(ve);
            {
              let xe = /* @__PURE__ */ _(() => n().bodyType === "form-data");
              vt(he, {
                type: "radio",
                value: "form-data",
                get checked() {
                  return c(xe);
                },
                onchange: (Ve) => {
                  Ve.target?.checked && a(i, { bodyType: "form-data" });
                }
              });
            }
            Se(), Z(ve);
            var oe = B(ve, 2), ue = X(oe);
            {
              let xe = /* @__PURE__ */ _(() => n().bodyType === "x-www-form-urlencoded");
              vt(ue, {
                type: "radio",
                value: "x-www-form-urlencoded",
                get checked() {
                  return c(xe);
                },
                onchange: (Ve) => {
                  Ve.target?.checked && a(i, { bodyType: "x-www-form-urlencoded" });
                }
              });
            }
            Se(), Z(oe);
            var fe = B(oe, 2), ye = X(fe);
            {
              let xe = /* @__PURE__ */ _(() => n().bodyType === "json");
              vt(ye, {
                type: "radio",
                value: "json",
                get checked() {
                  return c(xe);
                },
                onchange: (Ve) => {
                  Ve.target?.checked && a(i, { bodyType: "json" });
                }
              });
            }
            Se(), Z(fe);
            var Ce = B(fe, 2), de = X(Ce);
            {
              let xe = /* @__PURE__ */ _(() => n().bodyType === "raw");
              vt(de, {
                type: "radio",
                value: "raw",
                get checked() {
                  return c(xe);
                },
                onchange: (Ve) => {
                  Ve.target?.checked && a(i, { bodyType: "raw" });
                }
              });
            }
            Se(), Z(Ce), Z(re), z(F, W);
          };
          se(D, (F) => {
            (n().method === "post" || n().method === "put" || n().method === "delete" || n().method === "patch") && F(N);
          });
        }
        var S = B(D, 2);
        {
          var T = (F) => {
            var W = KC(), J = U(W), re = X(J);
            Ye(re, {
              level: 3,
              children: (ve, he) => {
                Se();
                var oe = Ae("参数");
                z(ve, oe);
              },
              $$slots: { default: !0 }
            });
            var H = B(re, 2);
            qe(H, {
              size: "icon-xs",
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formData");
              },
              children: (ve, he) => {
                var oe = jC();
                z(ve, oe);
              },
              $$slots: { default: !0 }
            }), Z(J);
            var te = B(J, 2);
            Bt(te, { dataKeyName: "formData" }), z(F, W);
          };
          se(S, (F) => {
            n().bodyType === "form-data" && F(T);
          });
        }
        var $ = B(S, 2);
        {
          var P = (F) => {
            var W = ZC(), J = U(W), re = X(J);
            Ye(re, {
              level: 3,
              children: (ve, he) => {
                Se();
                var oe = Ae("Body 参数");
                z(ve, oe);
              },
              $$slots: { default: !0 }
            });
            var H = B(re, 2);
            qe(H, {
              size: "icon-xs",
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formUrlencoded");
              },
              children: (ve, he) => {
                var oe = FC();
                z(ve, oe);
              },
              $$slots: { default: !0 }
            }), Z(J);
            var te = B(J, 2);
            Bt(te, { dataKeyName: "formUrlencoded" }), z(F, W);
          };
          se($, (F) => {
            n().bodyType === "x-www-form-urlencoded" && F(P);
          });
        }
        var M = B($, 2);
        {
          var j = (F) => {
            var W = WC(), J = X(W);
            et(J, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入 json 信息",
              get value() {
                return n().bodyJson;
              },
              oninput: (re) => {
                a(i, { bodyJson: re.target.value });
              }
            }), Z(W), z(F, W);
          };
          se(M, (F) => {
            n().bodyType === "json" && F(j);
          });
        }
        var q = B(M, 2);
        {
          var G = (F) => {
            var W = XC(), J = X(W);
            et(J, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入请求信息",
              get value() {
                return n().bodyRaw;
              },
              oninput: (re) => {
                a(i, { bodyRaw: re.target.value });
              }
            }), Z(W), z(F, W);
          };
          se(q, (F) => {
            n().bodyType === "raw" && F(G);
          });
        }
        var A = B(q, 2), Y = X(A);
        Ye(Y, {
          level: 3,
          mt: "10px",
          children: (F, W) => {
            Se();
            var J = Ae("输出参数");
            z(F, J);
          },
          $$slots: { default: !0 }
        });
        var ee = B(Y, 2);
        qe(ee, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "outputDefs");
          },
          children: (F, W) => {
            var J = qC();
            z(F, J);
          },
          $$slots: { default: !0 }
        }), Z(A);
        var R = B(A, 2);
        pr(R, {}), z(u, h);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), le(l);
}
ie(kv, { data: {} }, [], [], !0);
var UC = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>'), JC = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), QC = /* @__PURE__ */ ne('<div class="heading svelte-ddi5i"><!> <!></div> <!> <!> <div class="setting-title svelte-ddi5i">知识库</div> <div class="setting-item svelte-ddi5i"><!></div> <div class="setting-title svelte-ddi5i">关键字</div> <div class="setting-item svelte-ddi5i"><!></div> <div class="setting-title svelte-ddi5i">获取数据量</div> <div class="setting-item svelte-ddi5i"><!></div> <div class="heading svelte-ddi5i"><!></div> <!>', 1);
const e$ = {
  hash: "svelte-ddi5i",
  code: ".heading.svelte-ddi5i {display:flex;margin-bottom:10px;}.setting-title.svelte-ddi5i {font-size:12px;color:var(--secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-ddi5i {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Cv(t, e) {
  ae(e, !0), Je(t, e$);
  const n = g(e, "data", 7), r = /* @__PURE__ */ De(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = pt(), { addParameter: i } = Sn(), s = _r();
  let a = /* @__PURE__ */ me(dt([]));
  kn(async () => {
    const d = await s.provider?.knowledge?.();
    c(a).push(...d || []);
  });
  const { updateNodeData: l } = $t();
  Ie(() => {
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
  return cn(t, Re(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (d) => {
        var h = UC();
        z(d, h);
      },
      children: (d, h) => {
        var p = QC(), v = U(p), m = X(v);
        Ye(m, {
          level: 3,
          children: (N, S) => {
            Se();
            var T = Ae("输入参数");
            z(N, T);
          },
          $$slots: { default: !0 }
        });
        var y = B(m, 2);
        qe(y, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (N, S) => {
            var T = JC();
            z(N, T);
          },
          $$slots: { default: !0 }
        }), Z(v);
        var w = B(v, 2);
        Bt(w, {});
        var b = B(w, 2);
        Ye(b, {
          level: 3,
          mt: "10px",
          children: (N, S) => {
            Se();
            var T = Ae("知识库设置");
            z(N, T);
          },
          $$slots: { default: !0 }
        });
        var k = B(b, 4), O = X(k);
        {
          let N = /* @__PURE__ */ _(() => n().knowledgeId ? [n().knowledgeId] : []);
          Pt(O, {
            get items() {
              return c(a);
            },
            style: "width: 100%",
            placeholder: "请选择知识库",
            onSelect: (S) => {
              const T = S.value;
              l(o, () => ({ knowledgeId: T }));
            },
            get value() {
              return c(N);
            }
          });
        }
        Z(k);
        var C = B(k, 4), x = X(C);
        vt(x, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (N) => {
            const S = N.target.value;
            l(o, () => ({ keyword: S }));
          }
        }), Z(C);
        var E = B(C, 4), V = X(E);
        {
          let N = /* @__PURE__ */ _(() => n().limit || "");
          vt(V, {
            placeholder: "搜索的数据条数",
            style: "width: 100%",
            onchange: (S) => {
              const T = S.target.value;
              l(o, () => ({ limit: T }));
            },
            get value() {
              return c(N);
            }
          });
        }
        Z(E);
        var L = B(E, 2), I = X(L);
        Ye(I, {
          level: 3,
          mt: "10px",
          children: (N, S) => {
            Se();
            var T = Ae("输出参数");
            z(N, T);
          },
          $$slots: { default: !0 }
        }), Z(L);
        var D = B(L, 2);
        pr(D, {}), z(d, p);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), le(u);
}
ie(Cv, { data: {} }, [], [], !0);
var t$ = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>'), n$ = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), r$ = /* @__PURE__ */ ne('<div class="heading svelte-1qblm04"><!> <!></div> <!> <!> <div class="setting-title svelte-1qblm04">搜索引擎</div> <div class="setting-item svelte-1qblm04"><!></div> <div class="setting-title svelte-1qblm04">关键字</div> <div class="setting-item svelte-1qblm04"><!></div> <div class="setting-title svelte-1qblm04">搜索数据量</div> <div class="setting-item svelte-1qblm04"><!></div> <div class="heading svelte-1qblm04"><!></div> <!>', 1);
const o$ = {
  hash: "svelte-1qblm04",
  code: ".heading.svelte-1qblm04 {display:flex;margin-bottom:10px;}.setting-title.svelte-1qblm04 {font-size:12px;color:var(--secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-1qblm04 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function $v(t, e) {
  ae(e, !0), Je(t, o$);
  const n = g(e, "data", 7), r = /* @__PURE__ */ De(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = pt(), { addParameter: i } = Sn(), s = _r();
  let a = /* @__PURE__ */ me(dt([]));
  kn(async () => {
    const d = await s.provider?.searchEngine?.();
    c(a).push(...d || []);
  });
  const { updateNodeData: l } = $t();
  Ie(() => {
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
  return cn(t, Re(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (d) => {
        var h = t$();
        z(d, h);
      },
      children: (d, h) => {
        var p = r$(), v = U(p), m = X(v);
        Ye(m, {
          level: 3,
          children: (N, S) => {
            Se();
            var T = Ae("输入参数");
            z(N, T);
          },
          $$slots: { default: !0 }
        });
        var y = B(m, 2);
        qe(y, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (N, S) => {
            var T = n$();
            z(N, T);
          },
          $$slots: { default: !0 }
        }), Z(v);
        var w = B(v, 2);
        Bt(w, {});
        var b = B(w, 2);
        Ye(b, {
          level: 3,
          mt: "10px",
          children: (N, S) => {
            Se();
            var T = Ae("搜索引擎设置");
            z(N, T);
          },
          $$slots: { default: !0 }
        });
        var k = B(b, 4), O = X(k);
        {
          let N = /* @__PURE__ */ _(() => n().engine ? [n().engine] : []);
          Pt(O, {
            get items() {
              return c(a);
            },
            style: "width: 100%",
            placeholder: "请选择搜索引擎",
            onSelect: (S) => {
              const T = S.value;
              l(o, () => ({ engine: T }));
            },
            get value() {
              return c(N);
            }
          });
        }
        Z(k);
        var C = B(k, 4), x = X(C);
        vt(x, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (N) => {
            const S = N.target.value;
            l(o, () => ({ keyword: S }));
          }
        }), Z(C);
        var E = B(C, 4), V = X(E);
        vt(V, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          get value() {
            return n().limit;
          },
          onchange: (N) => {
            const S = N.target.value;
            l(o, () => ({ limit: S }));
          }
        }), Z(E);
        var L = B(E, 2), I = X(L);
        Ye(I, {
          level: 3,
          mt: "10px",
          children: (N, S) => {
            Se();
            var T = Ae("输出参数");
            z(N, T);
          },
          $$slots: { default: !0 }
        }), Z(L);
        var D = B(L, 2);
        pr(D, {}), z(d, p);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), le(u);
}
ie($v, { data: {} }, [], [], !0);
var i$ = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>'), s$ = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), a$ = /* @__PURE__ */ ne('<div class="heading svelte-1o34e8c"><!></div> <!> <div class="heading svelte-1o34e8c"><!> <!></div> <!>', 1);
const l$ = {
  hash: "svelte-1o34e8c",
  code: ".heading.svelte-1o34e8c {display:flex;margin:10px 0;align-items:center;}.loop_handle_wrapper::after {content:'循环体';width:100px;height:20px;background:var(--primary);color:var(--primary-foreground);display:flex;justify-content:center;align-items:center;}"
};
function Sv(t, e) {
  ae(e, !0), Je(t, l$);
  const n = g(e, "data", 7), r = /* @__PURE__ */ De(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = pt(), { addParameter: i } = Sn();
  Ie(() => {
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
  return cn(t, Re(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (a) => {
        var l = i$();
        z(a, l);
      },
      handle: (a) => {
        Cr(a, {
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
        var u = a$(), d = U(u), h = X(d);
        Ye(h, {
          level: 3,
          children: (b, k) => {
            Se();
            var O = Ae("循环变量");
            z(b, O);
          },
          $$slots: { default: !0 }
        }), Z(d);
        var p = B(d, 2);
        Bt(p, { dataKeyName: "loopVars" });
        var v = B(p, 2), m = X(v);
        Ye(m, {
          level: 3,
          children: (b, k) => {
            Se();
            var O = Ae("输出参数");
            z(b, O);
          },
          $$slots: { default: !0 }
        });
        var y = B(m, 2);
        qe(y, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (b, k) => {
            var O = s$();
            z(b, O);
          },
          $$slots: { default: !0 }
        }), Z(v);
        var w = B(v, 2);
        Bt(w, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs",
          useChildrenOnly: !0
        }), z(a, u);
      },
      $$slots: { icon: !0, handle: !0, default: !0 }
    }
  )), le(s);
}
ie(Sv, { data: {} }, [], [], !0);
var u$ = /* @__PURE__ */ ne('<div class="input-more-setting svelte-5x0hls"><div class="input-more-item svelte-5x0hls">数据内容： <!></div> <div class="input-more-item svelte-5x0hls">确认方式： <!></div> <div class="input-more-item svelte-5x0hls">数据标题： <!></div> <div class="input-more-item svelte-5x0hls">数据描述： <!></div>   <div class="input-more-item svelte-5x0hls"><!></div></div>'), c$ = /* @__PURE__ */ ne('<div class="input-item svelte-5x0hls"><!></div> <div class="input-item svelte-5x0hls"><!></div> <div class="input-item svelte-5x0hls"><!></div>', 1);
const d$ = {
  hash: "svelte-5x0hls",
  code: ".input-item.svelte-5x0hls {display:flex;align-items:center;}.input-more-setting.svelte-5x0hls {display:flex;flex-direction:column;gap:10px;padding:10px;background:var(--background);border:1px solid var(--border);border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-5x0hls .input-more-item:where(.svelte-5x0hls) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:var(--muted-foreground);}"
};
function _v(t, e) {
  ae(e, !0), Je(t, d$);
  const n = g(e, "parameter", 7), r = g(e, "index", 7), o = g(e, "dataKeyName", 7), i = g(e, "useChildrenOnly", 7);
  let s = pt(), a = hr(s), l = /* @__PURE__ */ _(() => ({
    ...n(),
    ...a?.current?.data?.[o()][r()]
  }));
  const { updateNodeData: u } = $t(), d = (S, T) => {
    u(s, ($) => {
      let P = $.data?.[o()];
      return P[r()] = { ...P[r()], [S]: T }, { [o()]: P };
    });
  }, h = (S, T) => {
    const $ = T.target.value;
    d(S, $);
  }, p = (S) => {
    const T = S.value;
    d("ref", T);
  }, v = (S) => {
    const T = S.value;
    d("formType", T);
  }, m = (S) => {
    const T = S.value;
    d("contentType", T);
  };
  let y;
  const w = () => {
    u(s, (S) => {
      let T = S.data?.[o()];
      return T.splice(r(), 1), { [o()]: [...T] };
    }), y?.hide();
  };
  let b = gv(i());
  var k = {
    get parameter() {
      return n();
    },
    set parameter(S) {
      n(S), f();
    },
    get index() {
      return r();
    },
    set index(S) {
      r(S), f();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(S) {
      o(S), f();
    },
    get useChildrenOnly() {
      return i();
    },
    set useChildrenOnly(S) {
      i(S), f();
    }
  }, O = c$(), C = U(O), x = X(C);
  {
    let S = /* @__PURE__ */ _(() => c(l).nameDisabled === !0);
    vt(x, {
      style: "width: 100%;",
      get value() {
        return c(l).name;
      },
      placeholder: "请输入参数名称",
      get disabled() {
        return c(S);
      },
      oninput: (T) => h("name", T)
    });
  }
  Z(C);
  var E = B(C, 2), V = X(E);
  {
    var L = (S) => {
      vt(S, {
        get value() {
          return c(l).value;
        },
        placeholder: "请输入参数值",
        oninput: (T) => h("value", T)
      });
    }, I = (S) => {
      var T = ce(), $ = U(T);
      {
        var P = (M) => {
          {
            let j = /* @__PURE__ */ _(() => [c(l).ref]);
            Pt(M, {
              get items() {
                return b.current;
              },
              style: "width: 100%",
              defaultValue: ["ref"],
              get value() {
                return c(j);
              },
              expandAll: !0,
              onSelect: p
            });
          }
        };
        se(
          $,
          (M) => {
            c(l).refType !== "input" && M(P);
          },
          !0
        );
      }
      z(S, T);
    };
    se(V, (S) => {
      c(l).refType === "fixed" ? S(L) : S(I, !1);
    });
  }
  Z(E);
  var D = B(E, 2), N = X(D);
  return Mt(
    io(N, {
      placement: "bottom",
      floating: (S) => {
        var T = u$(), $ = X(T), P = B(X($));
        {
          let F = /* @__PURE__ */ _(() => c(l).contentType ? [c(l).contentType] : []);
          Pt(P, {
            get items() {
              return wu;
            },
            style: "width: 100%",
            defaultValue: ["text"],
            get value() {
              return c(F);
            },
            onSelect: m
          });
        }
        Z($);
        var M = B($, 2), j = B(X(M));
        {
          let F = /* @__PURE__ */ _(() => c(l).formType ? [c(l).formType] : []);
          Pt(j, {
            get items() {
              return Sx;
            },
            style: "width: 100%",
            defaultValue: ["single"],
            get value() {
              return c(F);
            },
            onSelect: v
          });
        }
        Z(M);
        var q = B(M, 2), G = B(X(q));
        et(G, {
          rows: 1,
          style: "width: 100%;",
          onchange: (F) => {
            h("formLabel", F);
          },
          get value() {
            return c(l).formLabel;
          }
        }), Z(q);
        var A = B(q, 2), Y = B(X(A));
        et(Y, {
          rows: 2,
          style: "width: 100%;",
          onchange: (F) => {
            h("formDescription", F);
          },
          get value() {
            return c(l).formDescription;
          }
        }), Z(A);
        var ee = B(A, 2), R = X(ee);
        qe(R, {
          variant: "destructive",
          onclick: w,
          children: (F, W) => {
            Se();
            var J = Ae("删除");
            z(F, J);
          },
          $$slots: { default: !0 }
        }), Z(ee), Z(T), z(S, T);
      },
      children: (S, T) => {
        Ti(S, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (S) => y = S,
    () => y
  ), Z(D), z(t, O), le(k);
}
ie(
  _v,
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
var h$ = /* @__PURE__ */ ne('<div class="input-header svelte-1fllp9b">参数名称</div> <div class="input-header svelte-1fllp9b">参数值</div> <div class="input-header svelte-1fllp9b"></div>', 1), p$ = /* @__PURE__ */ ne('<div class="none-params svelte-1fllp9b"> </div>'), f$ = /* @__PURE__ */ ne('<div class="input-container svelte-1fllp9b"><!> <!></div>');
const g$ = {
  hash: "svelte-1fllp9b",
  code: `.input-container.svelte-1fllp9b {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1fllp9b .none-params:where(.svelte-1fllp9b) {font-size:12px;background:var(--secondary);height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1fllp9b .input-header:where(.svelte-1fllp9b) {font-size:12px;color:var(--muted-foreground);}`
};
function Ov(t, e) {
  ae(e, !0), Je(t, g$);
  const n = g(e, "noneParameterText", 7, "无确认数据"), r = g(e, "dataKeyName", 7, "parameters"), o = g(e, "useChildrenOnly", 7);
  let i = pt(), s = hr(i), a = /* @__PURE__ */ _(() => [...s?.current?.data?.[r()] || []]);
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
  }, u = f$(), d = X(u);
  {
    var h = (v) => {
      var m = h$();
      Se(4), z(v, m);
    };
    se(d, (v) => {
      c(a).length !== 0 && v(h);
    });
  }
  var p = B(d, 2);
  return Ct(
    p,
    19,
    () => c(a),
    (v) => v.id,
    (v, m, y) => {
      _v(v, {
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
      var m = p$(), y = X(m, !0);
      Z(m), Ee(() => rt(y, n())), z(v, m);
    }
  ), Z(u), z(t, u), le(l);
}
ie(Ov, { noneParameterText: {}, dataKeyName: {}, useChildrenOnly: {} }, [], [], !0);
const El = (t, e) => {
  if (t === e) return !0;
  if (typeof t != "object" || t === null || typeof e != "object" || e === null)
    return !1;
  const n = Array.isArray(t), r = Array.isArray(e);
  if (n !== r) return !1;
  if (n && r) {
    if (t.length !== e.length) return !1;
    for (let o = 0; o < t.length; o++)
      if (!El(t[o], e[o])) return !1;
    return !0;
  } else {
    const o = Object.keys(t), i = Object.keys(e);
    if (o.length !== i.length) return !1;
    for (const s of o)
      if (!(s in e) || !El(t[s], e[s])) return !1;
    return !0;
  }
};
var v$ = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), m$ = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), y$ = /* @__PURE__ */ ne('<div class="heading svelte-8iukvu"><!> <!></div> <!> <!> <div class="setting-title svelte-8iukvu">消息内容</div> <div class="setting-item svelte-8iukvu"><!></div> <div class="heading svelte-8iukvu"><!></div> <!>', 1);
const w$ = {
  hash: "svelte-8iukvu",
  code: ".heading.svelte-8iukvu {display:flex;margin-bottom:10px;}.setting-title.svelte-8iukvu {font-size:12px;color:var(--secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-8iukvu {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Pv(t, e) {
  ae(e, !0), Je(t, w$);
  const n = g(e, "data", 7), r = /* @__PURE__ */ De(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = pt(), { addParameter: i } = Sn(), { updateNodeData: s } = $t();
  Ie(() => {
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
      El(l, n().outputDefs) || s(o, () => ({ outputDefs: l }));
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
  return cn(t, Re(
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
        var d = y$(), h = U(d), p = X(h);
        Ye(p, {
          level: 3,
          children: (x, E) => {
            Se();
            var V = Ae("确认数据");
            z(x, V);
          },
          $$slots: { default: !0 }
        });
        var v = B(p, 2);
        qe(v, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "confirms");
          },
          children: (x, E) => {
            var V = m$();
            z(x, V);
          },
          $$slots: { default: !0 }
        }), Z(h);
        var m = B(h, 2);
        Ov(m, { dataKeyName: "confirms", noneParameterText: "无确认数据" });
        var y = B(m, 2);
        Ye(y, {
          level: 3,
          mt: "10px",
          children: (x, E) => {
            Se();
            var V = Ae("确认消息");
            z(x, V);
          },
          $$slots: { default: !0 }
        });
        var w = B(y, 4), b = X(w);
        {
          let x = /* @__PURE__ */ _(() => n().message || "");
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
        var k = B(w, 2), O = X(k);
        Ye(O, {
          level: 3,
          mt: "10px",
          children: (x, E) => {
            Se();
            var V = Ae("输出参数");
            z(x, V);
          },
          $$slots: { default: !0 }
        }), Z(k);
        var C = B(k, 2);
        pr(C, { placeholder: "" }), z(l, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), le(a);
}
ie(Pv, { data: {} }, [], [], !0);
const b$ = {
  startNode: hv,
  codeNode: bv,
  confirmNode: Pv,
  llmNode: wv,
  templateNode: xv,
  httpNode: kv,
  knowledgeNode: Cv,
  searchEngineNode: $v,
  loopNode: Sv,
  endNode: mv
};
var x$ = /* @__PURE__ */ ne("<!> ", 1);
function Nl(t, e) {
  ae(e, !0);
  const n = g(e, "icon", 7), r = g(e, "title", 7), o = g(e, "type", 7), i = g(e, "description", 7), s = g(e, "extra", 7), a = $t(), l = (h) => {
    if (!h.dataTransfer)
      return null;
    const p = {
      type: o(),
      data: { title: r(), description: i(), ...s() }
    };
    h.dataTransfer.setData("application/tinyflow", JSON.stringify(p)), h.dataTransfer.effectAllowed = "move";
  }, u = () => {
    const h = window.innerWidth, p = window.innerHeight, v = a.screenToFlowPosition({ x: h / 2, y: p / 2 }), m = {
      id: `node_${Bn()}`,
      type: o(),
      position: v,
      data: { title: r(), description: i(), ...s() }
    };
    Xe.addNode(m), Xe.selectNodeOnly(m.id);
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
  return qe(t, {
    draggable: !0,
    ondragstart: l,
    onclick: u,
    get "data-node-type"() {
      return o();
    },
    children: (h, p) => {
      var v = x$(), m = U(v);
      ia(m, n);
      var y = B(m);
      Ee(() => rt(y, ` ${r() ?? ""}`)), z(h, v);
    },
    $$slots: { default: !0 }
  }), le(d);
}
ie(Nl, { icon: {}, title: {}, type: {}, description: {}, extra: {} }, [], [], !0);
var k$ = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), C$ = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), $$ = /* @__PURE__ */ ne('<div><div class="tf-toolbar-container"><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"></div></div></div> <!></div>');
function Ev(t, e) {
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
  ], s = [], a = _r(), l = a.customNodes;
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
  var u = $$(), d = X(u), h = X(d), p = X(h);
  lv(p, {
    style: "width: 100%",
    get items() {
      return i;
    },
    onChange: (b) => {
      K(n, b.value.toString(), !0);
    }
  }), Z(h);
  var v = B(h, 2), m = X(v);
  Ct(m, 21, () => o, Xr, (b, k) => {
    Nl(b, Re(() => c(k)));
  }), Z(m);
  var y = B(m, 2);
  Ct(y, 21, () => s, Xr, (b, k) => {
    Nl(b, Re(() => c(k)));
  }), Z(y), Z(v), Z(d);
  var w = B(d, 2);
  qe(w, {
    size: "icon",
    variant: "outline",
    onclick: () => {
      K(r, c(r) ? "" : "show", !0);
    },
    children: (b, k) => {
      var O = ce(), C = U(O);
      {
        var x = (V) => {
          var L = k$();
          z(V, L);
        }, E = (V) => {
          var L = C$();
          z(V, L);
        };
        se(C, (V) => {
          c(r) === "show" ? V(x) : V(E, !1);
        });
      }
      z(b, O);
    },
    $$slots: { default: !0 }
  }), Z(u), Ee(() => {
    Yt(u, 1, `tf-toolbar ${c(r) ?? ""}`), Nt(m, `display: ${c(n) === "base" ? "flex" : "none"}`), Nt(y, `display: ${c(n) !== "base" ? "flex" : "none"}`);
  }), z(t, u), le();
}
ie(Ev, {}, [], [], !0);
const S$ = () => ({ getNode: (t) => Xe.getNode(t) }), _$ = () => ({ ensureParentInNodesBefore: (t, e) => {
  Xe.updateNodes((n) => {
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
} }), O$ = () => ({ getEdgesByTarget: (t) => Xe.getEdges().filter((e) => e.target === t) });
var P$ = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), E$ = /* @__PURE__ */ ne('<div class="heading svelte-qt4m0r"><!> <!></div> <!>', 1), N$ = /* @__PURE__ */ ne('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), M$ = /* @__PURE__ */ ne('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), z$ = /* @__PURE__ */ ne('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><div class="slider-container svelte-qt4m0r"><span class="svelte-qt4m0r"> </span> <input/></div></div>', 1), A$ = /* @__PURE__ */ ne('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), T$ = /* @__PURE__ */ ne('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), D$ = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), V$ = /* @__PURE__ */ ne('<div class="heading svelte-qt4m0r"><!> <!></div> <!>', 1), L$ = /* @__PURE__ */ ne("<!> <!> <div></div> <!>", 1);
const H$ = {
  hash: "svelte-qt4m0r",
  code: `.heading.svelte-qt4m0r {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-qt4m0r {font-size:12px;color:var(--secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-qt4m0r {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}\r
\r
    /* 新增样式 */.slider-container.svelte-qt4m0r {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-qt4m0r span:where(.svelte-qt4m0r) {font-size:12px;color:var(--muted-foreground);display:flex;justify-content:space-between;align-items:center;}input[type='range'].svelte-qt4m0r {width:100%;height:4px;background:var(--muted);border-radius:2px;outline:none;-webkit-appearance:none;}input[type='range'].svelte-qt4m0r::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:var(--primary);border-radius:50%;cursor:pointer;}`
};
function Nv(t, e) {
  ae(e, !0), Je(t, H$);
  const n = g(e, "data", 7), r = /* @__PURE__ */ De(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = pt(), { addParameter: i } = Sn(), s = $t(), { updateNodeData: a } = s, l = (w) => {
    a(o, w);
  }, u = (w, b) => {
    l({ [w]: b.target?.value });
  }, d = { ...r, id: o, data: n() }, h = document.createElement("div"), p = _r().customNodes[e.type];
  p.render?.(h, d, s);
  const v = p.forms;
  let m;
  Ie(() => {
    n().expand && m && m.append(h);
  }), Ie(() => {
    n() && p.onUpdate?.(h, { ...d, data: n() });
  }), Ie(() => {
    !n().parameters && p.parameters && l({
      parameters: pi(JSON.parse(JSON.stringify(p.parameters)))
    });
  }), Ie(() => {
    !n().outputDefs && p.outputDefs && l({
      outputDefs: pi(JSON.parse(JSON.stringify(p.outputDefs)))
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
      var O = ce(), C = U(O);
      ia(C, () => p.icon), z(k, O);
    };
    let b = /* @__PURE__ */ _(() => ({ ...n(), description: p.description }));
    cn(t, Re(
      {
        get data() {
          return c(b);
        }
      },
      () => r,
      {
        icon: w,
        children: (k, O) => {
          var C = L$(), x = U(C);
          {
            var E = (S) => {
              var T = E$(), $ = U(T), P = X($);
              Ye(P, {
                level: 3,
                children: (G, A) => {
                  Se();
                  var Y = Ae("输入参数");
                  z(G, Y);
                },
                $$slots: { default: !0 }
              });
              var M = B(P, 2);
              {
                var j = (G) => {
                  qe(G, {
                    size: "icon-xs",
                    class: "input-btn-more",
                    style: "margin-left: auto",
                    onclick: () => {
                      i(o);
                    },
                    children: (A, Y) => {
                      var ee = P$();
                      z(A, ee);
                    },
                    $$slots: { default: !0 }
                  });
                };
                se(M, (G) => {
                  p.parametersAddEnable !== !1 && G(j);
                });
              }
              Z($);
              var q = B($, 2);
              Bt(q, {}), z(S, T);
            };
            se(x, (S) => {
              p.parametersEnable !== !1 && S(E);
            });
          }
          var V = B(x, 2);
          {
            var L = (S) => {
              var T = ce(), $ = U(T);
              Ct($, 17, () => v, Xr, (P, M) => {
                var j = ce(), q = U(j);
                {
                  var G = (Y) => {
                    var ee = N$(), R = U(ee), F = X(R, !0);
                    Z(R);
                    var W = B(R, 2), J = X(W);
                    {
                      let re = /* @__PURE__ */ _(() => n()[c(M).name] || c(M).defaultValue);
                      vt(J, Re(
                        {
                          get placeholder() {
                            return c(M).placeholder;
                          },
                          style: "width: 100%",
                          get value() {
                            return c(re);
                          }
                        },
                        () => c(M).attrs,
                        {
                          onchange: (H) => {
                            u(c(M).name, H);
                          }
                        }
                      ));
                    }
                    Z(W), Ee(() => rt(F, c(M).label)), z(Y, ee);
                  }, A = (Y) => {
                    var ee = ce(), R = U(ee);
                    {
                      var F = (J) => {
                        var re = M$(), H = U(re), te = X(H, !0);
                        Z(H);
                        var ve = B(H, 2), he = X(ve);
                        {
                          let oe = /* @__PURE__ */ _(() => n()[c(M).name] || c(M).defaultValue);
                          et(he, Re(
                            {
                              rows: 3,
                              get placeholder() {
                                return c(M).placeholder;
                              },
                              style: "width: 100%",
                              get value() {
                                return c(oe);
                              }
                            },
                            () => c(M).attrs,
                            {
                              onchange: (ue) => {
                                u(c(M).name, ue);
                              }
                            }
                          ));
                        }
                        Z(ve), Ee(() => rt(te, c(M).label)), z(J, re);
                      }, W = (J) => {
                        var re = ce(), H = U(re);
                        {
                          var te = (he) => {
                            var oe = z$(), ue = U(oe), fe = X(ue, !0);
                            Z(ue);
                            var ye = B(ue, 2), Ce = X(ye), de = X(Ce), xe = X(de);
                            Z(de);
                            var Ve = B(de, 2), Q = (Me) => l({ [c(M).name]: parseFloat(Me.target.value) });
                            Ue(
                              Ve,
                              () => ({
                                class: "nodrag",
                                type: "range",
                                ...c(M).attrs,
                                value: n()[c(M).name] ?? c(M).defaultValue,
                                oninput: Q
                              }),
                              void 0,
                              void 0,
                              void 0,
                              "svelte-qt4m0r",
                              !0
                            ), Z(Ce), Z(ye), Ee(() => {
                              rt(fe, c(M).label), rt(xe, `${c(M).description ?? ""}: ${n()[c(M).name] ?? c(M).defaultValue ?? ""}`);
                            }), z(he, oe);
                          }, ve = (he) => {
                            var oe = ce(), ue = U(oe);
                            {
                              var fe = (Ce) => {
                                var de = A$(), xe = U(de), Ve = X(xe, !0);
                                Z(xe);
                                var Q = B(xe, 2), Me = X(Q);
                                {
                                  let Ne = /* @__PURE__ */ _(() => c(M).options || []), Fe = /* @__PURE__ */ _(() => n()[c(M).name] ? [n()[c(M).name]] : [c(M).defaultValue]);
                                  Pt(Me, {
                                    get items() {
                                      return c(Ne);
                                    },
                                    style: "width: 100%",
                                    get placeholder() {
                                      return c(M).placeholder;
                                    },
                                    onSelect: (Le) => {
                                      const Ze = Le.value;
                                      l({ [c(M).name]: Ze });
                                    },
                                    get value() {
                                      return c(Fe);
                                    }
                                  });
                                }
                                Z(Q), Ee(() => rt(Ve, c(M).label)), z(Ce, de);
                              }, ye = (Ce) => {
                                var de = ce(), xe = U(de);
                                {
                                  var Ve = (Me) => {
                                    var Ne = T$(), Fe = U(Ne), Le = X(Fe, !0);
                                    Z(Fe);
                                    var Ze = B(Fe, 2), ft = X(Ze);
                                    {
                                      let bt = /* @__PURE__ */ _(() => c(M).chosen?.buttonText);
                                      av(ft, {
                                        style: "width: 100%",
                                        get placeholder() {
                                          return c(M).placeholder;
                                        },
                                        get buttonText() {
                                          return c(bt);
                                        },
                                        onChosen: (nt, ge, ze) => {
                                          c(M).chosen?.onChosen?.(l, nt, ge, ze);
                                        },
                                        get value() {
                                          return n()[c(M).chosen?.valueDataKey || ""];
                                        },
                                        get label() {
                                          return n()[c(M).chosen?.labelDataKey || ""];
                                        }
                                      });
                                    }
                                    Z(Ze), Ee(() => rt(Le, c(M).label)), z(Me, Ne);
                                  }, Q = (Me) => {
                                    var Ne = ce(), Fe = U(Ne);
                                    {
                                      var Le = (Ze) => {
                                        Ye(Ze, Re({ level: 3, mt: "10px" }, () => c(M).attrs, {
                                          children: (ft, bt) => {
                                            Se();
                                            var nt = Ae();
                                            Ee(() => rt(nt, c(M).label)), z(ft, nt);
                                          },
                                          $$slots: { default: !0 }
                                        }));
                                      };
                                      se(
                                        Fe,
                                        (Ze) => {
                                          c(M).type === "heading" && Ze(Le);
                                        },
                                        !0
                                      );
                                    }
                                    z(Me, Ne);
                                  };
                                  se(
                                    xe,
                                    (Me) => {
                                      c(M).type === "chosen" ? Me(Ve) : Me(Q, !1);
                                    },
                                    !0
                                  );
                                }
                                z(Ce, de);
                              };
                              se(
                                ue,
                                (Ce) => {
                                  c(M).type === "select" ? Ce(fe) : Ce(ye, !1);
                                },
                                !0
                              );
                            }
                            z(he, oe);
                          };
                          se(
                            H,
                            (he) => {
                              c(M).type === "slider" ? he(te) : he(ve, !1);
                            },
                            !0
                          );
                        }
                        z(J, re);
                      };
                      se(
                        R,
                        (J) => {
                          c(M).type === "textarea" ? J(F) : J(W, !1);
                        },
                        !0
                      );
                    }
                    z(Y, ee);
                  };
                  se(q, (Y) => {
                    c(M).type === "input" ? Y(G) : Y(A, !1);
                  });
                }
                z(P, j);
              }), z(S, T);
            };
            se(V, (S) => {
              v && S(L);
            });
          }
          var I = B(V, 2);
          Mt(I, (S) => m = S, () => m);
          var D = B(I, 2);
          {
            var N = (S) => {
              var T = V$(), $ = U(T), P = X($);
              Ye(P, {
                level: 3,
                mt: "10px",
                children: (G, A) => {
                  Se();
                  var Y = Ae("输出参数");
                  z(G, Y);
                },
                $$slots: { default: !0 }
              });
              var M = B(P, 2);
              {
                var j = (G) => {
                  qe(G, {
                    size: "icon-xs",
                    class: "input-btn-more",
                    style: "margin-left: auto",
                    onclick: () => {
                      i(o, "outputDefs");
                    },
                    children: (A, Y) => {
                      var ee = D$();
                      z(A, ee);
                    },
                    $$slots: { default: !0 }
                  });
                };
                se(M, (G) => {
                  p.outputDefsAddEnable !== !1 && G(j);
                });
              }
              Z($);
              var q = B($, 2);
              pr(q, {}), z(S, T);
            };
            se(D, (S) => {
              p.outputDefsEnable !== !1 && S(N);
            });
          }
          Ee(() => {
            Nt(I, p.rootStyle || ""), Yt(I, 1, dr(p.rootClass), "svelte-qt4m0r");
          }), z(k, C);
        },
        $$slots: { icon: !0, default: !0 }
      }
    ));
  }
  return le(y);
}
ie(Nv, { data: {} }, [], [], !0);
const I$ = () => ({ updateEdgeData: (t, e, n) => {
  const r = Xe.getEdge(t);
  if (!r)
    return;
  const o = typeof e == "function" ? e(r) : e;
  r.data = n?.replace ? o : { ...r.data, ...o }, Xe.updateEdges((i) => i.map((s) => s.id === t ? r : s));
} }), B$ = () => ({ deleteEdge: (t) => {
  Xe.removeEdge(t);
} }), R$ = () => {
  const t = (e, n) => n.filter(
    // 排除循环节点的子节点，否则在多层循环嵌套时不正确
    (r) => r.source === e && r.sourceHandle !== "loop_handle"
  );
  return { getNodesFromSource: (e) => {
    const n = Xe.getEdges(), r = [];
    let o = t(e, n);
    for (; o.length > 0; ) {
      const i = [];
      o.forEach((s) => {
        r.push(Xe.getNode(s.target)), i.push(...t(s.target, n));
      }), o = i;
    }
    return r;
  } };
}, j$ = () => ({ getNodeRelativePosition: (t) => {
  let e = Xe.getNode(t);
  const n = { x: 0, y: 0 };
  for (; e; )
    n.x += e.position.x, n.y += e.position.y, e.parentId ? e = Xe.getNode(e.parentId) : e = void 0;
  return n;
} });
function K$(t) {
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
function F$(t) {
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
function Z$(t) {
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
const W$ = () => ($t(), { copyHandler: async (t) => {
  const e = Xe.getNodes().filter((s) => s.selected);
  if (e.length === 0) return;
  const n = Xe.getEdges().filter((s) => e.some((a) => a.id === s.source) && e.some((a) => a.id === s.target)), r = e.map(K$), o = n.map(Z$), i = JSON.stringify({
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
  const r = F$(n.tinyflowNodes), o = n.tinyflowEdges || [], i = /* @__PURE__ */ new Map(), s = [];
  for (const l of r) {
    const u = `node_${Bn()}`;
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
      id: `edge_${Bn()}`,
      source: u,
      target: d
    });
  }
  Xe.updateNodes((l) => [...l.map((u) => ({ ...u, selected: !1 })), ...s]), Xe.updateEdges((l) => [...l.map((u) => ({ ...u, selected: !1 })), ...a]);
} }), zd = () => {
  const t = document.activeElement;
  return !t || !(t instanceof HTMLElement) ? !1 : t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement || t.isContentEditable;
};
var X$ = /* @__PURE__ */ ne('<div class="panel-content svelte-woejl3"><div>边属性设置</div> <div class="setting-title svelte-woejl3">边条件设置</div> <div class="setting-item svelte-woejl3"><!></div> <div class="setting-item svelte-woejl3" style="padding: 8px 0"><!> <!></div></div>'), q$ = /* @__PURE__ */ ne("<!> <!> <!> <!>", 1), Y$ = /* @__PURE__ */ ne('<div style="position: relative; height: 100%; width: 100%;overflow: hidden"><!> <!></div>');
const G$ = {
  hash: "svelte-woejl3",
  code: ".panel-content.svelte-woejl3 {padding:10px;background-color:var(--background);border-radius:5px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);width:200px;border:1px solid var(--border);}.setting-title.svelte-woejl3 {margin:10px 0;font-size:12px;color:var(--muted-foreground);}.setting-item.svelte-woejl3 {display:flex;gap:5px;align-items:center;justify-content:end;}"
};
function Mv(t, e) {
  ae(e, !0), Je(t, G$);
  const n = g(e, "onInit", 7), r = g(e, "colorMode", 7), o = /* @__PURE__ */ De(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "onInit",
    "colorMode"
  ]), i = $t();
  console.log("props", o), n()(i);
  let s = /* @__PURE__ */ me(!1), a = /* @__PURE__ */ me(null);
  const { updateEdgeData: l } = I$(), u = (R) => {
    R.preventDefault(), R.dataTransfer && (R.dataTransfer.dropEffect = "move");
  }, d = (R) => {
    R.preventDefault();
    const F = i.screenToFlowPosition({ x: R.clientX - 250, y: R.clientY - 100 }), W = R.dataTransfer?.getData("application/tinyflow");
    if (!W)
      return;
    const J = JSON.parse(W), re = { id: `node_${Bn()}`, position: F, data: {}, ...J };
    Xe.addNode(re), Xe.selectNodeOnly(re.id);
  }, { getNode: h } = S$(), p = (R) => {
    const F = h(R.source), W = h(R.target);
    if (R.sourceHandle === "loop_handle" || F.parentId) {
      const J = i.getEdges();
      for (let re of J)
        if (re.target === R.target) {
          const H = h(re.source);
          if (R.sourceHandle === "loop_handle" && H.parentId !== F.id || F.parentId && H.parentId !== F.parentId)
            return !1;
        }
    }
    return !(!F.parentId && W.parentId && W.parentId !== F.id);
  }, { getNodesFromSource: v } = R$(), { getNodeRelativePosition: m } = j$(), { ensureParentInNodesBefore: y } = _$(), w = (R, F) => {
    if (!F.isValid)
      return;
    const W = F.toNode;
    if (W.parentId)
      return;
    const J = F.fromNode, re = F.fromHandle, H = { position: { ...W.position } };
    if (re.id === "loop_handle" ? H.parentId = J.id : J.parentId && (H.parentId = J.parentId), H.parentId) {
      const { x: te, y: ve } = m(H.parentId);
      H.position = { x: W.position.x - te, y: W.position.y - ve }, i.updateNode(W.id, H), v(W.id).forEach((he) => {
        i.updateNode(he.id, {
          parentId: H.parentId,
          position: { x: he.position.x - te, y: he.position.y - ve }
        });
      }), y(H.parentId, W.id);
    }
    setTimeout(() => {
      Xe.getEdges().forEach((te) => {
        te.target === W.id && te.source == J.id && (K(s, !0), K(a, te, !0));
      });
    });
  }, { getEdgesByTarget: b } = O$(), k = (R) => {
    R.edges.forEach((F) => {
      F.id === c(a)?.id && (K(a, null), K(s, !1));
      const W = h(F.target);
      if (W && W.parentId) {
        const J = b(F.target), { x: re, y: H } = m(W.parentId);
        if (J.length === 0)
          i.updateNode(W.id, {
            parentId: void 0,
            position: { x: W.position.x + re, y: W.position.y + H }
          }), v(W.id).forEach((te) => {
            i.updateNode(te.id, {
              parentId: void 0,
              position: { x: te.position.x + re, y: te.position.y + H }
            });
          });
        else {
          let te = !1;
          for (let ve = 0; ve < J.length; ve++) {
            const he = J[ve], oe = h(he.source);
            if (oe.parentId || oe.type === "loopNode") {
              te = !0;
              break;
            }
          }
          te || (i.updateNode(W.id, {
            parentId: void 0,
            position: { x: W.position.x + re, y: W.position.y + H }
          }), v(W.id).forEach((ve) => {
            i.updateNode(ve.id, {
              parentId: void 0,
              position: { x: ve.position.x + re, y: ve.position.y + H }
            });
          }));
        }
      }
    });
  }, { deleteEdge: O } = B$(), C = (R, F) => {
  }, x = (R) => {
  }, { copyHandler: E, pasteHandler: V } = W$(), L = (R) => {
    zd() || ((R.ctrlKey || R.metaKey) && R.key === "c" && (R.preventDefault(), E(R)), (R.ctrlKey || R.metaKey) && R.key === "a" && (R.preventDefault(), Xe.updateNodes((F) => F.map((W) => ({ ...W, selected: !0 }))), Xe.updateEdges((F) => F.map((W) => ({ ...W, selected: !0 })))));
  }, I = async (R) => {
    zd() || V(R);
  };
  kn(() => {
    window.addEventListener("keydown", L), window.addEventListener("paste", I);
  }), bi(() => {
    window.removeEventListener("keydown", L), window.removeEventListener("paste", I);
  });
  const D = {
    // ...nodeTypes
  }, N = _r().customNodes;
  if (N)
    for (let R of Object.keys(N))
      D[R] = Nv;
  const S = _r().onDataChange;
  Ie(() => {
    S?.({
      nodes: Xe.getNodes(),
      edges: Xe.getEdges(),
      viewport: Xe.getViewport()
    });
  });
  var T = {
    get onInit() {
      return n();
    },
    set onInit(R) {
      n(R), f();
    },
    get colorMode() {
      return r();
    },
    set colorMode(R) {
      r(R), f();
    }
  }, $ = Y$(), P = X($), M = Xe.getNodes, j = Xe.setNodes, q = Xe.getEdges, G = Xe.setEdges, A = Xe.getViewport, Y = Xe.setViewport;
  {
    let R = /* @__PURE__ */ _(() => ({ ...b$, ...D })), F = /* @__PURE__ */ _(() => ({
      markerEnd: { type: li.ArrowClosed, width: 20, height: 20 }
    }));
    bf(P, {
      get colorMode() {
        return r();
      },
      get nodeTypes() {
        return c(R);
      },
      get nodes() {
        return M();
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
        return A();
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
      onbeforeconnect: (W) => ({ ...W, id: Bn() }),
      ondelete: k,
      onclick: (W) => {
        const J = W.target;
        J.classList.contains("svelte-flow__edge-interaction") || J.classList.contains("panel-content") || J.closest(".panel-content") || (K(s, !1), K(a, null));
      },
      get defaultEdgeOptions() {
        return c(F);
      },
      children: (W, J) => {
        var re = q$(), H = U(re);
        Nf(H, {});
        var te = B(H, 2);
        Of(te, {});
        var ve = B(te, 2);
        zf(ve, {});
        var he = B(ve, 2);
        {
          var oe = (ue) => {
            Pi(ue, {
              children: (fe, ye) => {
                var Ce = X$(), de = B(X(Ce), 4), xe = X(de);
                {
                  let Ne = /* @__PURE__ */ _(() => c(a)?.data?.condition);
                  et(xe, {
                    rows: 3,
                    placeholder: "请输入边条件",
                    style: "width: 100%",
                    get value() {
                      return c(Ne);
                    },
                    onchange: (Fe) => {
                      c(a) && l(c(a).id, { condition: Fe.target?.value });
                    }
                  });
                }
                Z(de);
                var Ve = B(de, 2), Q = X(Ve);
                qe(Q, {
                  variant: "destructive",
                  onclick: () => {
                    O(c(a)?.id), K(s, !1);
                  },
                  children: (Ne, Fe) => {
                    Se();
                    var Le = Ae("删除");
                    z(Ne, Le);
                  },
                  $$slots: { default: !0 }
                });
                var Me = B(Q, 2);
                qe(Me, {
                  variant: "default",
                  onclick: () => {
                    K(s, !1);
                  },
                  children: (Ne, Fe) => {
                    Se();
                    var Le = Ae("保存");
                    z(Ne, Le);
                  },
                  $$slots: { default: !0 }
                }), Z(Ve), Z(Ce), z(fe, Ce);
              },
              $$slots: { default: !0 }
            });
          };
          se(he, (ue) => {
            c(s) && ue(oe);
          });
        }
        z(W, re);
      },
      $$slots: { default: !0 }
    });
  }
  var ee = B(P, 2);
  return Ev(ee, {}), Z($), z(t, $), le(T);
}
ie(Mv, { onInit: {}, colorMode: {} }, [], [], !0);
const zv = typeof window < "u" ? window : void 0;
function U$(t) {
  let e = t.activeElement;
  for (; e?.shadowRoot; ) {
    const n = e.shadowRoot.activeElement;
    if (n === e)
      break;
    e = n;
  }
  return e;
}
let J$ = class {
  #e;
  #t;
  constructor(t = {}) {
    const { window: e = zv, document: n = e?.document } = t;
    e !== void 0 && (this.#e = n, this.#t = Qr((r) => {
      const o = ht(e, "focusin", r), i = ht(e, "focusout", r);
      return () => {
        o(), i();
      };
    }));
  }
  get current() {
    return this.#t?.(), this.#e ? U$(this.#e) : null;
  }
};
new J$();
function Q$(t, e) {
  switch (t) {
    case "post":
      Ie(e);
      break;
    case "pre":
      Ft(e);
      break;
  }
}
function Av(t, e, n, r = {}) {
  const { lazy: o = !1 } = r;
  let i = !o, s = Array.isArray(t) ? [] : void 0;
  Q$(e, () => {
    const a = Array.isArray(t) ? t.map((u) => u()) : t();
    if (!i) {
      i = !0, s = a;
      return;
    }
    const l = it(() => n(a, s));
    return s = a, l;
  });
}
function qu(t, e, n) {
  Av(t, "post", e, n);
}
function e6(t, e, n) {
  Av(t, "pre", e, n);
}
qu.pre = e6;
function t6(t, e) {
  switch (t) {
    case "local":
      return e.localStorage;
    case "session":
      return e.sessionStorage;
  }
}
class Tv {
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
      window: a = zv
    } = r;
    if (this.#e = n, this.#t = e, this.#n = i, a === void 0) return;
    const l = t6(o, a);
    this.#r = l;
    const u = l.getItem(e);
    u !== null ? this.#e = this.#s(u) : this.#l(n), s && o === "local" && (this.#o = Qr(() => ht(a, "storage", this.#a)));
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
function Ad(t) {
  return t.filter((e) => e.length > 0);
}
const Dv = {
  getItem: (t) => null,
  setItem: (t, e) => {
  }
}, Di = typeof document < "u";
function n6(t) {
  return typeof t == "function";
}
function r6(t) {
  return t !== null && typeof t == "object";
}
const fi = Symbol("box"), Yu = Symbol("is-writable");
function o6(t) {
  return r6(t) && fi in t;
}
function i6(t) {
  return yt.isBox(t) && Yu in t;
}
function yt(t) {
  let e = /* @__PURE__ */ me(dt(t));
  return {
    [fi]: !0,
    [Yu]: !0,
    get current() {
      return c(e);
    },
    set current(n) {
      K(e, n, !0);
    }
  };
}
function s6(t, e) {
  const n = /* @__PURE__ */ _(t);
  return e ? {
    [fi]: !0,
    [Yu]: !0,
    get current() {
      return c(n);
    },
    set current(r) {
      e(r);
    }
  } : {
    [fi]: !0,
    get current() {
      return t();
    }
  };
}
function a6(t) {
  return yt.isBox(t) ? t : n6(t) ? yt.with(t) : yt(t);
}
function l6(t) {
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
function u6(t) {
  return yt.isWritableBox(t) ? {
    [fi]: !0,
    get current() {
      return t.current;
    }
  } : t;
}
yt.from = a6;
yt.with = s6;
yt.flatten = l6;
yt.readonly = u6;
yt.isBox = o6;
yt.isWritableBox = i6;
function c6(t, e) {
  const n = RegExp(t, "g");
  return (r) => {
    if (typeof r != "string")
      throw new TypeError(`expected an argument of type string, but got ${typeof r}`);
    return r.match(n) ? r.replace(n, e) : r;
  };
}
const d6 = c6(/[A-Z]/, (t) => `-${t.toLowerCase()}`);
function h6(t) {
  if (!t || typeof t != "object" || Array.isArray(t))
    throw new TypeError(`expected an argument of type object, but got ${typeof t}`);
  return Object.keys(t).map((e) => `${d6(e)}: ${t[e]};`).join(`
`);
}
function p6(t = {}) {
  return h6(t).replace(`
`, " ");
}
const f6 = {
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
p6(f6);
const g6 = typeof window < "u" ? window : void 0;
function v6(t) {
  let e = t.activeElement;
  for (; e?.shadowRoot; ) {
    const n = e.shadowRoot.activeElement;
    if (n === e)
      break;
    e = n;
  }
  return e;
}
class m6 {
  #e;
  #t;
  constructor(e = {}) {
    const { window: n = g6, document: r = n?.document } = e;
    n !== void 0 && (this.#e = r, this.#t = Qr((o) => {
      const i = ht(n, "focusin", o), s = ht(n, "focusout", o);
      return () => {
        i(), s();
      };
    }));
  }
  get current() {
    return this.#t?.(), this.#e ? v6(this.#e) : null;
  }
}
new m6();
const Br = yt("mode-watcher-mode"), Rr = yt("mode-watcher-theme"), y6 = ["dark", "light", "system"];
function zl(t) {
  return typeof t != "string" ? !1 : y6.includes(t);
}
class w6 {
  #e = "system";
  #t = Di ? localStorage : Dv;
  #n = this.#t.getItem(Br.current);
  #r = zl(this.#n) ? this.#n : this.#e;
  #o = /* @__PURE__ */ me(dt(this.#i()));
  #i(e = this.#r) {
    return new Tv(Br.current, e, {
      serializer: {
        serialize: (n) => n,
        deserialize: (n) => zl(n) ? n : this.#e
      }
    });
  }
  constructor() {
    eo(() => qu.pre(() => Br.current, (e, n) => {
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
class b6 {
  #e = void 0;
  #t = !0;
  #n = /* @__PURE__ */ me(dt(this.#e));
  #r = typeof window < "u" && typeof window.matchMedia == "function" ? new Up("prefers-color-scheme: light") : { current: !1 };
  query() {
    Di && K(this.#n, this.#r.current ? "light" : "dark", !0);
  }
  tracking(e) {
    this.#t = e;
  }
  constructor() {
    eo(() => {
      Ft(() => {
        this.#t && this.query();
      });
    }), this.query = this.query.bind(this), this.tracking = this.tracking.bind(this);
  }
  get current() {
    return c(this.#n);
  }
}
const Al = new w6(), Tl = new b6();
class x6 {
  #e = Di ? localStorage : Dv;
  #t = this.#e.getItem(Rr.current);
  #n = this.#t === null || this.#t === void 0 ? "" : this.#t;
  #r = /* @__PURE__ */ me(dt(this.#o()));
  #o(e = this.#n) {
    return new Tv(Rr.current, e, {
      serializer: {
        serialize: (n) => typeof n != "string" ? "" : n,
        deserialize: (n) => n
      }
    });
  }
  constructor() {
    eo(() => qu.pre(() => Rr.current, (e, n) => {
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
const cs = new x6();
let Td, Dd, Vd = !1, Ui = null;
function k6() {
  return Ui || (Ui = document.createElement("style"), Ui.appendChild(document.createTextNode(`* {
		-webkit-transition: none !important;
		-moz-transition: none !important;
		-o-transition: none !important;
		-ms-transition: none !important;
		transition: none !important;
	}`)), Ui);
}
function Vv(t, e = !1) {
  if (typeof document > "u")
    return;
  if (!Vd) {
    Vd = !0, t();
    return;
  }
  if (typeof process < "u" && process.env?.NODE_ENV === "test" || typeof window < "u" && window.__vitest_worker__) {
    t();
    return;
  }
  clearTimeout(Td), clearTimeout(Dd);
  const n = k6(), r = () => document.head.appendChild(n), o = () => {
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
  r(), Td = window.setTimeout(() => {
    t(), Dd = window.setTimeout(o, 16);
  }, 16);
}
const mr = yt(void 0), Ws = yt(!0), Xs = yt(!1), Dl = yt([]), Vl = yt([]);
function C6() {
  const t = /* @__PURE__ */ _(() => {
    if (!Di) return;
    const e = Al.current === "system" ? Tl.current : Al.current, n = Ad(Dl.current), r = Ad(Vl.current);
    function o() {
      const i = document.documentElement, s = document.querySelector('meta[name="theme-color"]');
      e === "light" ? (n.length && i.classList.remove(...n), r.length && i.classList.add(...r), i.style.colorScheme = "light", s && mr.current && s.setAttribute("content", mr.current.light)) : (r.length && i.classList.remove(...r), n.length && i.classList.add(...n), i.style.colorScheme = "dark", s && mr.current && s.setAttribute("content", mr.current.dark));
    }
    return Ws.current ? Vv(o, Xs.current) : o(), e;
  });
  return {
    get current() {
      return c(t);
    }
  };
}
function $6() {
  const t = /* @__PURE__ */ _(() => {
    if (cs.current, !Di) return;
    function e() {
      document.documentElement.setAttribute("data-theme", cs.current);
    }
    return Ws.current ? Vv(e, it(() => Xs.current)) : e(), cs.current;
  });
  return {
    get current() {
      return c(t);
    }
  };
}
const S6 = C6(), _6 = $6();
function Lv(t) {
  Al.current = t;
}
function O6(t) {
  cs.current = t;
}
function P6({ defaultMode: t = "system", themeColors: e, darkClassNames: n = ["dark"], lightClassNames: r = [], defaultTheme: o = "", modeStorageKey: i = "mode-watcher-mode", themeStorageKey: s = "mode-watcher-theme" }) {
  const a = document.documentElement, l = localStorage.getItem(i) ?? t, u = localStorage.getItem(s) ?? o, d = l === "light" || l === "system" && window.matchMedia("(prefers-color-scheme: light)").matches;
  if (d ? (n.length && a.classList.remove(...n.filter(Boolean)), r.length && a.classList.add(...r.filter(Boolean))) : (r.length && a.classList.remove(...r.filter(Boolean)), n.length && a.classList.add(...n.filter(Boolean))), a.style.colorScheme = d ? "light" : "dark", e) {
    const h = document.querySelector('meta[name="theme-color"]');
    h && h.setAttribute("content", l === "light" ? e.light : e.dark);
  }
  u && (a.setAttribute("data-theme", u), localStorage.setItem(s, u)), localStorage.setItem(i, l);
}
var E6 = /* @__PURE__ */ ne('<meta name="theme-color"/>');
function Hv(t, e) {
  ae(e, !0);
  let n = g(e, "themeColors", 7);
  var r = {
    get themeColors() {
      return n();
    },
    set themeColors(a) {
      n(a), f();
    }
  }, o = ce(), i = U(o);
  {
    var s = (a) => {
      var l = E6();
      Ee(() => Oe(l, "content", n().dark)), z(a, l);
    };
    se(i, (a) => {
      n() && a(s);
    });
  }
  return z(t, o), le(r);
}
ie(Hv, { themeColors: {} }, [], [], !0);
var N6 = /* @__PURE__ */ ne('<meta name="theme-color"/>'), M6 = /* @__PURE__ */ ne("<!> <!>", 1);
function Iv(t, e) {
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
  return f1("171tvz2", (s) => {
    var a = M6(), l = U(a);
    {
      var u = (h) => {
        var p = N6();
        Ee(() => Oe(p, "content", o().dark)), z(h, p);
      };
      se(l, (h) => {
        o() && h(u);
      });
    }
    var d = B(l, 2);
    ia(d, () => `<script${n() ? ` nonce=${n()}` : ""}>(` + P6.toString() + ")(" + JSON.stringify(r()) + ");<\/script>"), z(s, a);
  }), le(i);
}
ie(Iv, { trueNonce: {}, initConfig: {}, themeColors: {} }, [], [], !0);
function Bv(t, e) {
  ae(e, !0);
  let n = g(e, "track", 7, !0), r = g(e, "defaultMode", 7, "system"), o = g(e, "themeColors", 7), i = g(e, "disableTransitions", 7, !0), s = g(e, "darkClassNames", 23, () => ["dark"]), a = g(e, "lightClassNames", 23, () => []), l = g(e, "defaultTheme", 7, ""), u = g(e, "nonce", 7, ""), d = g(e, "themeStorageKey", 7, "mode-watcher-theme"), h = g(e, "modeStorageKey", 7, "mode-watcher-mode"), p = g(e, "disableHeadScriptInjection", 7, !1), v = g(e, "synchronousModeChanges", 7, !1);
  Br.current = h(), Rr.current = d(), Dl.current = s(), Vl.current = a(), Ws.current = i(), mr.current = o(), Xs.current = v(), Ft(() => {
    Xs.current = v();
  }), Ft(() => {
    Ws.current = i();
  }), Ft(() => {
    mr.current = o();
  }), Ft(() => {
    Dl.current = s();
  }), Ft(() => {
    Vl.current = a();
  }), Ft(() => {
    Br.current = h();
  }), Ft(() => {
    Rr.current = d();
  }), Ft(() => {
    S6.current, Br.current, Rr.current, _6.current;
  }), kn(() => {
    Tl.tracking(n()), Tl.query();
    const x = localStorage.getItem(Br.current);
    Lv(zl(x) ? x : r());
    const E = localStorage.getItem(Rr.current);
    O6(E || l());
  });
  const m = {
    defaultMode: r(),
    themeColors: o(),
    darkClassNames: s(),
    lightClassNames: a(),
    defaultTheme: l(),
    modeStorageKey: h(),
    themeStorageKey: d()
  }, y = /* @__PURE__ */ _(() => typeof window > "u" ? u() : "");
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
  }, b = ce(), k = U(b);
  {
    var O = (x) => {
      Hv(x, {
        get themeColors() {
          return mr.current;
        }
      });
    }, C = (x) => {
      Iv(x, {
        get trueNonce() {
          return c(y);
        },
        get initConfig() {
          return m;
        },
        get themeColors() {
          return mr.current;
        }
      });
    };
    se(k, (x) => {
      p() ? x(O) : x(C, !1);
    });
  }
  return z(t, b), le(w);
}
ie(
  Bv,
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
var z6 = /* @__PURE__ */ ne("<!> <!>", 1);
function A6(t, e) {
  ae(e, !0);
  const n = g(e, "options", 7), r = g(e, "onInit", 7);
  let { data: o, theme: i = "system" } = n();
  if (Lv(i), typeof o == "string")
    try {
      o = JSON.parse(o.trim());
    } catch {
      console.error("Invalid JSON data:", o);
    }
  Xe.init(o?.nodes || [], o?.edges || []), Zr("tinyflow_options", n());
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
  }, a = z6(), l = U(a);
  Bv(l, {});
  var u = B(l, 2);
  return xf(u, {
    children: (d, h) => {
      Mv(d, {
        get onInit() {
          return r();
        },
        get colorMode() {
          return i;
        }
      });
    },
    $$slots: { default: !0 }
  }), z(t, a), le(s);
}
customElements.define("tinyflow-component", ie(A6, { options: {}, onInit: {} }, [], [], !1));
const D6 = /* @__PURE__ */ Rv({
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
    const n = t, r = jv(null);
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
    return Kv(() => {
      if (r.value) {
        const l = { ...n };
        "data" in l && l.data != null && (l.data = i(l.data)), o = new _x({
          ...l,
          element: r.value
        });
      }
    }), Fv(() => {
      o && (o.destroy(), o = null);
    }), e({
      getData: () => o ? o.getData() : (console.warn("Tinyflow instance is not initialized"), null),
      getInstance: () => o || (console.warn("Tinyflow instance is not initialized"), null)
    }), (l, u) => (Wv(), Zv("div", {
      ref_key: "divRef",
      ref: r,
      class: qv(["tinyflow", l.className]),
      style: Xv(l.style)
    }, null, 6));
  }
});
export {
  D6 as Tinyflow
};
//# sourceMappingURL=index.js.map
