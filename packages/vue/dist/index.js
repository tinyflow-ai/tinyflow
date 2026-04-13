import { defineComponent as jv, ref as Zv, onMounted as Wv, onUnmounted as qv, createElementBlock as Xv, openBlock as Yv, normalizeStyle as Uv, normalizeClass as Gv } from "vue";
const Jv = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(Jv);
const Rd = 1, Bd = 2, Kd = 4, Qv = 8, em = 16, tm = 1, nm = 2, Fd = 4, rm = 8, om = 16, jd = 1, im = 2, Zd = "[", Ys = "[!", Rl = "]", Zr = {}, Ot = Symbol(), sm = "http://www.w3.org/1999/xhtml", am = "http://www.w3.org/2000/svg", Wd = "@attach", lm = !1;
var Us = Array.isArray, um = Array.prototype.indexOf, Bl = Array.from, hs = Object.keys, ps = Object.defineProperty, er = Object.getOwnPropertyDescriptor, qd = Object.getOwnPropertyDescriptors, Xd = Object.prototype, cm = Array.prototype, Gs = Object.getPrototypeOf, Qu = Object.isExtensible;
function Ho(t) {
  return typeof t == "function";
}
const Ke = () => {
};
function dm(t) {
  return t();
}
function ja(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
function Yd() {
  var t, e, n = new Promise((r, o) => {
    t = r, e = o;
  });
  return { promise: n, resolve: t, reject: e };
}
function Ht(t, e, n = !1) {
  return t === void 0 ? n ? (
    /** @type {() => V} */
    e()
  ) : (
    /** @type {V} */
    e
  ) : t;
}
function No(t, e) {
  if (Array.isArray(t))
    return t;
  if (e === void 0 || !(Symbol.iterator in t))
    return Array.from(t);
  const n = [];
  for (const r of t)
    if (n.push(r), n.length === e) break;
  return n;
}
const Et = 2, Kl = 4, Js = 8, Ud = 1 << 24, ur = 16, cr = 32, Nr = 64, Qs = 128, wn = 512, Dt = 1024, Xt = 2048, dr = 4096, Qt = 8192, tr = 16384, ea = 32768, or = 65536, ec = 1 << 17, Fl = 1 << 18, Qr = 1 << 19, Gd = 1 << 20, ei = 32768, Za = 1 << 21, jl = 1 << 22, br = 1 << 23, Dn = Symbol("$state"), Zl = Symbol("legacy props"), hm = Symbol(""), ho = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), pm = 1, ta = 3, hr = 8;
function Wl(t) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function fm() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function gm(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function vm() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function mm(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function ym() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function wm() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function bm(t) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function xm() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function km() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Cm() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function $m() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function vi(t) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function Sm() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function _m() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let $e = !1;
function It(t) {
  $e = t;
}
let Me;
function ct(t) {
  if (t === null)
    throw vi(), Zr;
  return Me = t;
}
function bn() {
  return ct(
    /** @type {TemplateNode} */
    /* @__PURE__ */ tn(Me)
  );
}
function Z(t) {
  if ($e) {
    if (/* @__PURE__ */ tn(Me) !== null)
      throw vi(), Zr;
    Me = t;
  }
}
function Se(t = 1) {
  if ($e) {
    for (var e = t, n = Me; e--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ tn(n);
    Me = n;
  }
}
function fs(t = !0) {
  for (var e = 0, n = Me; ; ) {
    if (n.nodeType === hr) {
      var r = (
        /** @type {Comment} */
        n.data
      );
      if (r === Rl) {
        if (e === 0) return n;
        e -= 1;
      } else (r === Zd || r === Ys) && (e += 1);
    }
    var o = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ tn(n)
    );
    t && n.remove(), n = o;
  }
}
function Jd(t) {
  if (!t || t.nodeType !== hr)
    throw vi(), Zr;
  return (
    /** @type {Comment} */
    t.data
  );
}
function Qd(t) {
  return t === this.v;
}
function eh(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function th(t) {
  return !eh(t, this.v);
}
let Eo = !1, Pm = !1;
function Om() {
  Eo = !0;
}
const Nm = [];
function ql(t, e = !1, n = !1) {
  return Qi(t, /* @__PURE__ */ new Map(), "", Nm, null, n);
}
function Qi(t, e, n, r, o = null, i = !1) {
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
    if (Us(t)) {
      var a = (
        /** @type {Snapshot<any>} */
        Array(t.length)
      );
      e.set(t, a), o !== null && e.set(o, a);
      for (var l = 0; l < t.length; l += 1) {
        var u = t[l];
        l in t && (a[l] = Qi(u, e, n, r, null, i));
      }
      return a;
    }
    if (Gs(t) === Xd) {
      a = {}, e.set(t, a), o !== null && e.set(o, a);
      for (var d in t)
        a[d] = Qi(
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
      return Qi(
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
function yo(t) {
  ot = t;
}
function xn(t) {
  return (
    /** @type {T} */
    na().get(t)
  );
}
function Wr(t, e) {
  return na().set(t, e), e;
}
function Em(t) {
  return na().has(t);
}
function zm() {
  return na();
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
      bh(r);
  }
  return t !== void 0 && (e.x = t), e.i = !0, ot = e.p, t ?? /** @type {T} */
  {};
}
function zo() {
  return !Eo || ot !== null && ot.l === null;
}
function na(t) {
  return ot === null && Wl(), ot.c ??= new Map(Mm(ot) || void 0);
}
function Mm(t) {
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
function nh() {
  var t = Lr;
  Lr = [], ja(t);
}
function Er(t) {
  if (Lr.length === 0 && !Uo) {
    var e = Lr;
    queueMicrotask(() => {
      e === Lr && nh();
    });
  }
  Lr.push(t);
}
function Tm() {
  for (; Lr.length > 0; )
    nh();
}
function rh(t) {
  var e = je;
  if (e === null)
    return Ue.f |= br, t;
  if ((e.f & ea) === 0) {
    if ((e.f & Qs) === 0)
      throw t;
    e.b.error(t);
  } else
    wo(t, e);
}
function wo(t, e) {
  for (; e !== null; ) {
    if ((e.f & Qs) !== 0)
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
const Hi = /* @__PURE__ */ new Set();
let Qe = null, es = null, sn = null, on = [], ra = null, Wa = !1, Uo = !1;
class vn {
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
    on = [], es = null, this.apply();
    var n = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: [],
      block_effects: []
    };
    for (const r of e)
      this.#s(r, n);
    this.is_fork || this.#c(), this.is_deferred() ? (this.#l(n.effects), this.#l(n.render_effects), this.#l(n.block_effects)) : (es = this, Qe = null, tc(n.render_effects), tc(n.effects), es = null, this.#o?.resolve()), sn = null;
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
      var o = r.f, i = (o & (cr | Nr)) !== 0, s = i && (o & Dt) !== 0, a = s || (o & Qt) !== 0 || this.skipped_effects.has(r);
      if ((r.f & Qs) !== 0 && r.b?.is_pending() && (n = {
        parent: n,
        effect: r,
        effects: [],
        render_effects: [],
        block_effects: []
      }), !a && r.fn !== null) {
        i ? r.f ^= Dt : (o & Kl) !== 0 ? n.effects.push(r) : yi(r) && ((r.f & ur) !== 0 && n.block_effects.push(r), ri(r));
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
      ((n.f & Xt) !== 0 ? this.#i : this.#a).push(n), this.#u(n.deps), Vt(n, Dt);
  }
  /**
   * @param {Value[] | null} deps
   */
  #u(e) {
    if (e !== null)
      for (const n of e)
        (n.f & Et) === 0 || (n.f & ei) === 0 || (n.f ^= ei, this.#u(
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
    this.previous.has(e) || this.previous.set(e, n), (e.f & br) === 0 && (this.current.set(e, e.v), sn?.set(e, e.v));
  }
  activate() {
    Qe = this, this.apply();
  }
  deactivate() {
    Qe === this && (Qe = null, sn = null);
  }
  flush() {
    if (this.activate(), on.length > 0) {
      if (oh(), Qe !== null && Qe !== this)
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
    if (Hi.size > 1) {
      this.previous.clear();
      var e = sn, n = !0, r = {
        parent: null,
        effect: null,
        effects: [],
        render_effects: [],
        block_effects: []
      };
      for (const i of Hi) {
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
            ih(d, a, l, u);
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
    this.committed = !0, Hi.delete(this);
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
      Vt(e, Xt), qr(e);
    for (const e of this.#a)
      Vt(e, dr), qr(e);
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
    return (this.#o ??= Yd()).promise;
  }
  static ensure() {
    if (Qe === null) {
      const e = Qe = new vn();
      Hi.add(Qe), Uo || vn.enqueue(() => {
        Qe === e && e.flush();
      });
    }
    return Qe;
  }
  /** @param {() => void} task */
  static enqueue(e) {
    Er(e);
  }
  apply() {
  }
}
function f(t) {
  var e = Uo;
  Uo = !0;
  try {
    for (var n; ; ) {
      if (Tm(), on.length === 0 && (Qe?.flush(), on.length === 0))
        return ra = null, /** @type {T} */
        n;
      oh();
    }
  } finally {
    Uo = e;
  }
}
function oh() {
  var t = kr;
  Wa = !0;
  try {
    var e = 0;
    for (vs(!0); on.length > 0; ) {
      var n = vn.ensure();
      if (e++ > 1e3) {
        var r, o;
        Am();
      }
      n.process(on), xr.clear();
    }
  } finally {
    Wa = !1, vs(t), ra = null;
  }
}
function Am() {
  try {
    ym();
  } catch (t) {
    wo(t, ra);
  }
}
let qn = null;
function tc(t) {
  var e = t.length;
  if (e !== 0) {
    for (var n = 0; n < e; ) {
      var r = t[n++];
      if ((r.f & (tr | Qt)) === 0 && yi(r) && (qn = /* @__PURE__ */ new Set(), ri(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? Sh(r) : r.fn = null), qn?.size > 0)) {
        xr.clear();
        for (const o of qn) {
          if ((o.f & (tr | Qt)) !== 0) continue;
          const i = [o];
          let s = o.parent;
          for (; s !== null; )
            qn.has(s) && (qn.delete(s), i.push(s)), s = s.parent;
          for (let a = i.length - 1; a >= 0; a--) {
            const l = i[a];
            (l.f & (tr | Qt)) === 0 && ri(l);
          }
        }
        qn.clear();
      }
    }
    qn = null;
  }
}
function ih(t, e, n, r) {
  if (!n.has(t) && (n.add(t), t.reactions !== null))
    for (const o of t.reactions) {
      const i = o.f;
      (i & Et) !== 0 ? ih(
        /** @type {Derived} */
        o,
        e,
        n,
        r
      ) : (i & (jl | ur)) !== 0 && (i & Xt) === 0 && sh(o, e, r) && (Vt(o, Xt), qr(
        /** @type {Effect} */
        o
      ));
    }
}
function sh(t, e, n) {
  const r = n.get(t);
  if (r !== void 0) return r;
  if (t.deps !== null)
    for (const o of t.deps) {
      if (e.includes(o))
        return !0;
      if ((o.f & Et) !== 0 && sh(
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
function qr(t) {
  for (var e = ra = t; e.parent !== null; ) {
    e = e.parent;
    var n = e.f;
    if (Wa && e === je && (n & ur) !== 0 && (n & Fl) === 0)
      return;
    if ((n & (Nr | cr)) !== 0) {
      if ((n & Dt) === 0) return;
      e.f ^= Dt;
    }
  }
  on.push(e);
}
function eo(t) {
  let e = 0, n = ir(0), r;
  return () => {
    ti() && (c(n), no(() => (e === 0 && (r = st(() => t(() => En(n)))), e += 1, () => {
      Er(() => {
        e -= 1, e === 0 && (r?.(), r = void 0, En(n));
      });
    })));
  };
}
var Dm = or | Qr | Qs;
function Vm(t, e, n) {
  new Hm(t, e, n);
}
class Hm {
  /** @type {Boundary | null} */
  parent;
  #e = !1;
  /** @type {TemplateNode} */
  #t;
  /** @type {TemplateNode | null} */
  #n = $e ? Me : null;
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
  #y = eo(() => (this.#p = ir(this.#d), () => {
    this.#p = null;
  }));
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(e, n, r) {
    this.#t = e, this.#r = n, this.#o = r, this.parent = /** @type {Effect} */
    je.b, this.#e = !!this.#r.pending, this.#i = zr(() => {
      if (je.b = this, $e) {
        const i = this.#n;
        bn(), /** @type {Comment} */
        i.nodeType === hr && /** @type {Comment} */
        i.data === Ys ? this.#w() : this.#v();
      } else {
        var o = this.#m();
        try {
          this.#a = Gt(() => r(o));
        } catch (i) {
          this.error(i);
        }
        this.#h > 0 ? this.#b() : this.#e = !1;
      }
      return () => {
        this.#c?.remove();
      };
    }, Dm), $e && (this.#t = Me);
  }
  #v() {
    try {
      this.#a = Gt(() => this.#o(this.#t));
    } catch (e) {
      this.error(e);
    }
    this.#e = !1;
  }
  #w() {
    const e = this.#r.pending;
    e && (this.#s = Gt(() => e(this.#t)), vn.enqueue(() => {
      var n = this.#m();
      this.#a = this.#g(() => (vn.ensure(), Gt(() => this.#o(n)))), this.#h > 0 ? this.#b() : (fo(
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
    return this.#e && (this.#c = Bt(), this.#t.before(this.#c), e = this.#c), e;
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
    var n = je, r = Ue, o = ot;
    ln(this.#i), Zt(this.#i), yo(this.#i.ctx);
    try {
      return e();
    } catch (i) {
      return rh(i), null;
    } finally {
      ln(n), Zt(r), yo(o);
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
    ), Oh(this.#a, this.#u)), this.#s === null && (this.#s = Gt(() => e(this.#t)));
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
    this.#h += e, this.#h === 0 && (this.#e = !1, this.#s && fo(this.#s, () => {
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
    this.#x(e), this.#d += e, this.#p && bo(this.#p, this.#d);
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
    ), Se(), ct(fs()));
    var o = !1, i = !1;
    const s = () => {
      if (o) {
        _m();
        return;
      }
      o = !0, i && $m(), vn.ensure(), this.#d = 0, this.#l !== null && fo(this.#l, () => {
        this.#l = null;
      }), this.#e = this.has_pending_snippet(), this.#a = this.#g(() => (this.#f = !1, Gt(() => this.#o(this.#t)))), this.#h > 0 ? this.#b() : this.#e = !1;
    };
    var a = Ue;
    try {
      Zt(null), i = !0, n?.(e, s), i = !1;
    } catch (l) {
      wo(l, this.#i && this.#i.parent);
    } finally {
      Zt(a);
    }
    r && Er(() => {
      this.#l = this.#g(() => {
        vn.ensure(), this.#f = !0;
        try {
          return Gt(() => {
            r(
              this.#t,
              () => e,
              () => s
            );
          });
        } catch (l) {
          return wo(
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
function Lm(t, e, n) {
  for (var r = [], o = e.length, i = 0; i < o; i++)
    Gl(e[i].e, r, !0);
  _h(r, () => {
    var s = r.length === 0 && n !== null;
    if (s) {
      var a = (
        /** @type {Element} */
        n
      ), l = (
        /** @type {Element} */
        a.parentNode
      );
      Ul(l), l.append(a), t.items.clear(), pn(t, e[0].prev, e[o - 1].next);
    }
    for (var u = 0; u < o; u++) {
      var d = e[u];
      s || (t.items.delete(d.k), pn(t, d.prev, d.next)), _t(d.e, !s);
    }
    t.first === e[0] && (t.first = e[0].prev);
  });
}
function kt(t, e, n, r, o, i = null) {
  var s = t, a = /* @__PURE__ */ new Map(), l = null, u = (e & Kd) !== 0, d = (e & Rd) !== 0, h = (e & Bd) !== 0;
  if (u) {
    var p = (
      /** @type {Element} */
      t
    );
    s = $e ? ct(
      /** @type {Comment | Text} */
      /* @__PURE__ */ mt(p)
    ) : p.appendChild(Bt());
  }
  $e && bn();
  var v = null, m = /* @__PURE__ */ Xl(() => {
    var C = n();
    return Us(C) ? C : C == null ? [] : Bl(C);
  }), y, w = !0;
  function b() {
    Im(P, y, s, e, r), v !== null && (y.length === 0 ? (v.fragment ? (s.before(v.fragment), v.fragment = null) : Jl(v.effect), k.first = v.effect) : fo(v.effect, () => {
      v = null;
    }));
  }
  var k = zr(() => {
    y = /** @type {V[]} */
    c(m);
    var C = y.length;
    let x = !1;
    if ($e) {
      var N = Jd(s) === Ys;
      N !== (C === 0) && (s = fs(), ct(s), It(!1), x = !0);
    }
    for (var V = /* @__PURE__ */ new Set(), H = (
      /** @type {Batch} */
      Qe
    ), I = null, A = vh(), D = 0; D < C; D += 1) {
      $e && Me.nodeType === hr && /** @type {Comment} */
      Me.data === Rl && (s = /** @type {Comment} */
      Me, x = !0, It(!1));
      var _ = y[D], T = r(_, D), S = w ? null : a.get(T);
      S ? (d && bo(S.v, _), h ? bo(
        /** @type {Value<number>} */
        S.i,
        D
      ) : S.i = D, A && H.skipped_effects.delete(S.e)) : (S = Rm(
        w ? s : null,
        I,
        _,
        T,
        D,
        o,
        e,
        n
      ), w && (S.o = !0, I === null ? l = S : I.next = S, I = S), a.set(T, S)), V.add(T);
    }
    if (C === 0 && i && !v)
      if (w)
        v = {
          fragment: null,
          effect: Gt(() => i(s))
        };
      else {
        var O = document.createDocumentFragment(), M = Bt();
        O.append(M), v = {
          fragment: O,
          effect: Gt(() => i(M))
        };
      }
    if ($e && C > 0 && ct(fs()), !w)
      if (A) {
        for (const [B, X] of a)
          V.has(B) || H.skipped_effects.add(X.e);
        H.oncommit(b), H.ondiscard(() => {
        });
      } else
        b();
    x && It(!0), c(m);
  }), P = { effect: k, items: a, first: l };
  w = !1, $e && (s = Me);
}
function Im(t, e, n, r, o) {
  var i = (r & Qv) !== 0, s = e.length, a = t.items, l = t.first, u, d = null, h, p = [], v = [], m, y, w, b;
  if (i)
    for (b = 0; b < s; b += 1)
      m = e[b], y = o(m, b), w = /** @type {EachItem} */
      a.get(y), w.o && (w.a?.measure(), (h ??= /* @__PURE__ */ new Set()).add(w));
  for (b = 0; b < s; b += 1) {
    if (m = e[b], y = o(m, b), w = /** @type {EachItem} */
    a.get(y), t.first ??= w, !w.o) {
      w.o = !0;
      var k = d ? d.next : l;
      pn(t, d, w), pn(t, w, k), Ca(w, k, n), d = w, p = [], v = [], l = d.next;
      continue;
    }
    if ((w.e.f & Qt) !== 0 && (Jl(w.e), i && (w.a?.unfix(), (h ??= /* @__PURE__ */ new Set()).delete(w))), w !== l) {
      if (u !== void 0 && u.has(w)) {
        if (p.length < v.length) {
          var P = v[0], C;
          d = P.prev;
          var x = p[0], N = p[p.length - 1];
          for (C = 0; C < p.length; C += 1)
            Ca(p[C], P, n);
          for (C = 0; C < v.length; C += 1)
            u.delete(v[C]);
          pn(t, x.prev, N.next), pn(t, d, x), pn(t, N, P), l = P, d = N, b -= 1, p = [], v = [];
        } else
          u.delete(w), Ca(w, l, n), pn(t, w.prev, w.next), pn(t, w, d === null ? t.first : d.next), pn(t, d, w), d = w;
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
    for (var H = u === void 0 ? [] : Bl(u); l !== null; )
      (l.e.f & Qt) === 0 && H.push(l), l = l.next;
    var I = H.length;
    if (V = a.size - I > s, I > 0) {
      var A = (r & Kd) !== 0 && s === 0 ? n : null;
      if (i) {
        for (b = 0; b < I; b += 1)
          H[b].a?.measure();
        for (b = 0; b < I; b += 1)
          H[b].a?.fix();
      }
      Lm(t, H, A);
    }
  }
  if (V)
    for (const D of a.values())
      D.o || (pn(t, d, D), d = D);
  t.effect.last = d && d.e, i && Er(() => {
    if (h !== void 0)
      for (w of h)
        w.a?.apply();
  });
}
function Rm(t, e, n, r, o, i, s, a) {
  var l = (s & Rd) !== 0, u = (s & em) === 0, d = l ? u ? /* @__PURE__ */ dh(n, !1, !1) : ir(n) : n, h = (s & Bd) === 0 ? o : ir(o), p = {
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
      v.append(t = Bt());
    }
    return p.e = Gt(() => i(
      /** @type {Node} */
      t,
      d,
      h,
      a
    )), e !== null && (e.next = p), p;
  } finally {
  }
}
function Ca(t, e, n) {
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
function pn(t, e, n) {
  e === null ? (t.first = n, t.effect.first = n && n.e) : (e.e.next && (e.e.next.prev = null), e.next = n, e.e.next = n && n.e), n !== null && (n.e.prev && (n.e.prev.next = null), n.prev = e, n.e.prev = e && e.e);
}
function ah(t, e, n, r) {
  const o = zo() ? mi : Xl;
  if (n.length === 0 && t.length === 0) {
    r(e.map(o));
    return;
  }
  var i = Qe, s = (
    /** @type {Effect} */
    je
  ), a = Bm();
  function l() {
    Promise.all(n.map((u) => /* @__PURE__ */ Km(u))).then((u) => {
      a();
      try {
        r([...e.map(o), ...u]);
      } catch (d) {
        (s.f & tr) === 0 && wo(d, s);
      }
      i?.deactivate(), gs();
    }).catch((u) => {
      wo(u, s);
    });
  }
  t.length > 0 ? Promise.all(t).then(() => {
    a();
    try {
      return l();
    } finally {
      i?.deactivate(), gs();
    }
  }) : l();
}
function Bm() {
  var t = je, e = Ue, n = ot, r = Qe;
  return function(o = !0) {
    ln(t), Zt(e), yo(n), o && r?.activate();
  };
}
function gs() {
  ln(null), Zt(null), yo(null);
}
// @__NO_SIDE_EFFECTS__
function mi(t) {
  var e = Et | Xt, n = Ue !== null && (Ue.f & Et) !== 0 ? (
    /** @type {Derived} */
    Ue
  ) : null;
  return je !== null && (je.f |= Qr), {
    ctx: ot,
    deps: null,
    effects: null,
    equals: Qd,
    f: e,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      Ot
    ),
    wv: 0,
    parent: n ?? je,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Km(t, e) {
  let n = (
    /** @type {Effect | null} */
    je
  );
  n === null && fm();
  var r = (
    /** @type {Boundary} */
    n.b
  ), o = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), i = ir(
    /** @type {V} */
    Ot
  ), s = !Ue, a = /* @__PURE__ */ new Map();
  return Um(() => {
    var l = Yd();
    o = l.promise;
    try {
      Promise.resolve(t()).then(l.resolve, l.reject).then(() => {
        u === Qe && u.committed && u.deactivate(), gs();
      });
    } catch (p) {
      l.reject(p), gs();
    }
    var u = (
      /** @type {Batch} */
      Qe
    );
    if (s) {
      var d = !r.is_pending();
      r.update_pending_count(1), u.increment(d), a.get(u)?.reject(ho), a.delete(u), a.set(u, l);
    }
    const h = (p, v = void 0) => {
      if (u.activate(), v)
        v !== ho && (i.f |= br, bo(i, v));
      else {
        (i.f & br) !== 0 && (i.f ^= br), bo(i, p);
        for (const [m, y] of a) {
          if (a.delete(m), m === u) break;
          y.reject(ho);
        }
      }
      s && (r.update_pending_count(-1), u.decrement(d));
    };
    l.promise.then(h, (p) => h(null, p || "unknown"));
  }), ia(() => {
    for (const l of a.values())
      l.reject(ho);
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
  const e = /* @__PURE__ */ mi(t);
  return Nh(e), e;
}
// @__NO_SIDE_EFFECTS__
function Xl(t) {
  const e = /* @__PURE__ */ mi(t);
  return e.equals = th, e;
}
function lh(t) {
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
function Fm(t) {
  for (var e = t.parent; e !== null; ) {
    if ((e.f & Et) === 0)
      return (e.f & tr) === 0 ? (
        /** @type {Effect} */
        e
      ) : null;
    e = e.parent;
  }
  return null;
}
function Yl(t) {
  var e, n = je;
  ln(Fm(t));
  try {
    t.f &= ~ei, lh(t), e = Th(t);
  } finally {
    ln(n);
  }
  return e;
}
function uh(t) {
  var e = Yl(t);
  if (t.equals(e) || (Qe?.is_fork || (t.v = e), t.wv = zh()), !ro)
    if (sn !== null)
      (ti() || Qe?.is_fork) && sn.set(t, e);
    else {
      var n = (t.f & wn) === 0 ? dr : Dt;
      Vt(t, n);
    }
}
let qa = /* @__PURE__ */ new Set();
const xr = /* @__PURE__ */ new Map();
let ch = !1;
function ir(t, e) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: Qd,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function me(t, e) {
  const n = ir(t);
  return Nh(n), n;
}
// @__NO_SIDE_EFFECTS__
function dh(t, e = !1, n = !0) {
  const r = ir(t);
  return e || (r.equals = th), Eo && n && ot !== null && ot.l !== null && (ot.l.s ??= []).push(r), r;
}
function F(t, e, n = !1) {
  Ue !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Mn || (Ue.f & ec) !== 0) && zo() && (Ue.f & (Et | ur | jl | ec)) !== 0 && !nr?.includes(t) && Cm();
  let r = n ? ht(e) : e;
  return bo(t, r);
}
function bo(t, e) {
  if (!t.equals(e)) {
    var n = t.v;
    ro ? xr.set(t, e) : xr.set(t, n), t.v = e;
    var r = vn.ensure();
    r.capture(t, n), (t.f & Et) !== 0 && ((t.f & Xt) !== 0 && Yl(
      /** @type {Derived} */
      t
    ), Vt(t, (t.f & wn) !== 0 ? Dt : dr)), t.wv = zh(), hh(t, Xt), zo() && je !== null && (je.f & Dt) !== 0 && (je.f & (cr | Nr)) === 0 && (rn === null ? Jm([t]) : rn.push(t)), !r.is_fork && qa.size > 0 && !ch && jm();
  }
  return e;
}
function jm() {
  ch = !1;
  var t = kr;
  vs(!0);
  const e = Array.from(qa);
  try {
    for (const n of e)
      (n.f & Dt) !== 0 && Vt(n, dr), yi(n) && ri(n);
  } finally {
    vs(t);
  }
  qa.clear();
}
function nc(t, e = 1) {
  var n = c(t), r = e === 1 ? n++ : n--;
  return F(t, n), r;
}
function En(t) {
  F(t, t.v + 1);
}
function hh(t, e) {
  var n = t.reactions;
  if (n !== null)
    for (var r = zo(), o = n.length, i = 0; i < o; i++) {
      var s = n[i], a = s.f;
      if (!(!r && s === je)) {
        var l = (a & Xt) === 0;
        if (l && Vt(s, e), (a & Et) !== 0) {
          var u = (
            /** @type {Derived} */
            s
          );
          sn?.delete(u), (a & ei) === 0 && (a & wn && (s.f |= ei), hh(u, dr));
        } else l && ((a & ur) !== 0 && qn !== null && qn.add(
          /** @type {Effect} */
          s
        ), qr(
          /** @type {Effect} */
          s
        ));
      }
    }
}
function ht(t) {
  if (typeof t != "object" || t === null || Dn in t)
    return t;
  const e = Gs(t);
  if (e !== Xd && e !== cm)
    return t;
  var n = /* @__PURE__ */ new Map(), r = Us(t), o = /* @__PURE__ */ me(0), i = rr, s = (a) => {
    if (rr === i)
      return a();
    var l = Ue, u = rr;
    Zt(null), sc(i);
    var d = a();
    return Zt(l), sc(u), d;
  };
  return r && n.set("length", /* @__PURE__ */ me(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(a, l, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && xm();
        var d = n.get(l);
        return d === void 0 ? d = s(() => {
          var h = /* @__PURE__ */ me(u.value);
          return n.set(l, h), h;
        }) : F(d, u.value, !0), !0;
      },
      deleteProperty(a, l) {
        var u = n.get(l);
        if (u === void 0) {
          if (l in a) {
            const d = s(() => /* @__PURE__ */ me(Ot));
            n.set(l, d), En(o);
          }
        } else
          F(u, Ot), En(o);
        return !0;
      },
      get(a, l, u) {
        if (l === Dn)
          return t;
        var d = n.get(l), h = l in a;
        if (d === void 0 && (!h || er(a, l)?.writable) && (d = s(() => {
          var v = ht(h ? a[l] : Ot), m = /* @__PURE__ */ me(v);
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
        if (l === Dn)
          return !0;
        var u = n.get(l), d = u !== void 0 && u.v !== Ot || Reflect.has(a, l);
        if (u !== void 0 || je !== null && (!d || er(a, l)?.writable)) {
          u === void 0 && (u = s(() => {
            var p = d ? ht(a[l]) : Ot, v = /* @__PURE__ */ me(p);
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
            m !== void 0 ? F(m, Ot) : v in a && (m = s(() => /* @__PURE__ */ me(Ot)), n.set(v + "", m));
          }
        if (h === void 0)
          (!p || er(a, l)?.writable) && (h = s(() => /* @__PURE__ */ me(void 0)), F(h, ht(u)), n.set(l, h));
        else {
          p = h.v !== Ot;
          var y = s(() => ht(u));
          F(h, y);
        }
        var w = Reflect.getOwnPropertyDescriptor(a, l);
        if (w?.set && w.set.call(d, u), !p) {
          if (r && typeof l == "string") {
            var b = (
              /** @type {Source<number>} */
              n.get("length")
            ), k = Number(l);
            Number.isInteger(k) && k >= b.v && F(b, k + 1);
          }
          En(o);
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
        km();
      }
    }
  );
}
function rc(t) {
  try {
    if (t !== null && typeof t == "object" && Dn in t)
      return t[Dn];
  } catch {
  }
  return t;
}
function Zm(t, e) {
  return Object.is(rc(t), rc(e));
}
var Ft, ph, fh, gh;
function Xa() {
  if (Ft === void 0) {
    Ft = window, ph = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype, n = Text.prototype;
    fh = er(e, "firstChild").get, gh = er(e, "nextSibling").get, Qu(t) && (t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__style = void 0, t.__e = void 0), Qu(n) && (n.__t = void 0);
  }
}
function Bt(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function mt(t) {
  return fh.call(t);
}
// @__NO_SIDE_EFFECTS__
function tn(t) {
  return gh.call(t);
}
function q(t, e) {
  if (!$e)
    return /* @__PURE__ */ mt(t);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ mt(Me)
  );
  if (n === null)
    n = Me.appendChild(Bt());
  else if (e && n.nodeType !== ta) {
    var r = Bt();
    return n?.before(r), ct(r), r;
  }
  return ct(n), n;
}
function Q(t, e = !1) {
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
  if (e && Me?.nodeType !== ta) {
    var r = Bt();
    return Me?.before(r), ct(r), r;
  }
  return Me;
}
function R(t, e = 1, n = !1) {
  let r = $e ? Me : t;
  for (var o; e--; )
    o = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ tn(r);
  if (!$e)
    return r;
  if (n && r?.nodeType !== ta) {
    var i = Bt();
    return r === null ? o?.after(i) : r.before(i), ct(i), i;
  }
  return ct(r), /** @type {TemplateNode} */
  r;
}
function Ul(t) {
  t.textContent = "";
}
function vh() {
  return !1;
}
function Wm(t, e) {
  if (e) {
    const n = document.body;
    t.autofocus = !0, Er(() => {
      document.activeElement === n && t.focus();
    });
  }
}
function qm(t) {
  $e && /* @__PURE__ */ mt(t) !== null && Ul(t);
}
let oc = !1;
function mh() {
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
function oa(t) {
  var e = Ue, n = je;
  Zt(null), ln(null);
  try {
    return t();
  } finally {
    Zt(e), ln(n);
  }
}
function yh(t, e, n, r = n) {
  t.addEventListener(e, () => oa(n));
  const o = t.__on_r;
  o ? t.__on_r = () => {
    o(), r(!0);
  } : t.__on_r = () => r(!0), mh();
}
function wh(t) {
  je === null && (Ue === null && mm(), vm()), ro && gm();
}
function Xm(t, e) {
  var n = e.last;
  n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t);
}
function un(t, e, n) {
  var r = je;
  r !== null && (r.f & Qt) !== 0 && (t |= Qt);
  var o = {
    ctx: ot,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: t | Xt | wn,
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
      ri(o), o.f |= ea;
    } catch (a) {
      throw _t(o), a;
    }
  else e !== null && qr(o);
  var i = o;
  if (n && i.deps === null && i.teardown === null && i.nodes_start === null && i.first === i.last && // either `null`, or a singular child
  (i.f & Qr) === 0 && (i = i.first, (t & ur) !== 0 && (t & or) !== 0 && i !== null && (i.f |= or)), i !== null && (i.parent = r, r !== null && Xm(i, r), Ue !== null && (Ue.f & Et) !== 0 && (t & Nr) === 0)) {
    var s = (
      /** @type {Derived} */
      Ue
    );
    (s.effects ??= []).push(i);
  }
  return o;
}
function ti() {
  return Ue !== null && !Mn;
}
function ia(t) {
  const e = un(Js, null, !1);
  return Vt(e, Dt), e.teardown = t, e;
}
function Ie(t) {
  wh();
  var e = (
    /** @type {Effect} */
    je.f
  ), n = !Ue && (e & cr) !== 0 && (e & ea) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      ot
    );
    (r.e ??= []).push(t);
  } else
    return bh(t);
}
function bh(t) {
  return un(Kl | Gd, t, !1);
}
function jt(t) {
  return wh(), un(Js | Gd, t, !0);
}
function to(t) {
  vn.ensure();
  const e = un(Nr | Qr, t, !0);
  return () => {
    _t(e);
  };
}
function Ym(t) {
  vn.ensure();
  const e = un(Nr | Qr, t, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? fo(e, () => {
      _t(e), r(void 0);
    }) : (_t(e), r(void 0));
  });
}
function Mo(t) {
  return un(Kl, t, !1);
}
function Um(t) {
  return un(jl | Qr, t, !0);
}
function no(t, e = 0) {
  return un(Js | e, t, !0);
}
function Ne(t, e = [], n = [], r = []) {
  ah(r, e, n, (o) => {
    un(Js, () => t(...o.map(c)), !0);
  });
}
function zr(t, e = 0) {
  var n = un(ur | e, t, !0);
  return n;
}
function xh(t, e = 0) {
  var n = un(Ud | e, t, !0);
  return n;
}
function Gt(t) {
  return un(cr | Qr, t, !0);
}
function kh(t) {
  var e = t.teardown;
  if (e !== null) {
    const n = ro, r = Ue;
    ic(!0), Zt(null);
    try {
      e.call(null);
    } finally {
      ic(n), Zt(r);
    }
  }
}
function Ch(t, e = !1) {
  var n = t.first;
  for (t.first = t.last = null; n !== null; ) {
    const o = n.ac;
    o !== null && oa(() => {
      o.abort(ho);
    });
    var r = n.next;
    (n.f & Nr) !== 0 ? n.parent = null : _t(n, e), n = r;
  }
}
function Gm(t) {
  for (var e = t.first; e !== null; ) {
    var n = e.next;
    (e.f & cr) === 0 && _t(e), e = n;
  }
}
function _t(t, e = !0) {
  var n = !1;
  (e || (t.f & Fl) !== 0) && t.nodes_start !== null && t.nodes_end !== null && ($h(
    t.nodes_start,
    /** @type {TemplateNode} */
    t.nodes_end
  ), n = !0), Ch(t, e && !n), ms(t, 0), Vt(t, tr);
  var r = t.transitions;
  if (r !== null)
    for (const i of r)
      i.stop();
  kh(t);
  var o = t.parent;
  o !== null && o.first !== null && Sh(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes_start = t.nodes_end = t.ac = null;
}
function $h(t, e) {
  for (; t !== null; ) {
    var n = t === e ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ tn(t)
    );
    t.remove(), t = n;
  }
}
function Sh(t) {
  var e = t.parent, n = t.prev, r = t.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), e !== null && (e.first === t && (e.first = r), e.last === t && (e.last = n));
}
function fo(t, e, n = !0) {
  var r = [];
  Gl(t, r, !0), _h(r, () => {
    n && _t(t), e && e();
  });
}
function _h(t, e) {
  var n = t.length;
  if (n > 0) {
    var r = () => --n || e();
    for (var o of t)
      o.out(r);
  } else
    e();
}
function Gl(t, e, n) {
  if ((t.f & Qt) === 0) {
    if (t.f ^= Qt, t.transitions !== null)
      for (const s of t.transitions)
        (s.is_global || n) && e.push(s);
    for (var r = t.first; r !== null; ) {
      var o = r.next, i = (r.f & or) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (r.f & cr) !== 0 && (t.f & ur) !== 0;
      Gl(r, e, i ? n : !1), r = o;
    }
  }
}
function Jl(t) {
  Ph(t, !0);
}
function Ph(t, e) {
  if ((t.f & Qt) !== 0) {
    t.f ^= Qt, (t.f & Dt) === 0 && (Vt(t, Xt), qr(t));
    for (var n = t.first; n !== null; ) {
      var r = n.next, o = (n.f & or) !== 0 || (n.f & cr) !== 0;
      Ph(n, o ? e : !1), n = r;
    }
    if (t.transitions !== null)
      for (const i of t.transitions)
        (i.is_global || e) && i.in();
  }
}
function Oh(t, e) {
  for (var n = t.nodes_start, r = t.nodes_end; n !== null; ) {
    var o = n === r ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ tn(n)
    );
    e.append(n), n = o;
  }
}
let kr = !1;
function vs(t) {
  kr = t;
}
let ro = !1;
function ic(t) {
  ro = t;
}
let Ue = null, Mn = !1;
function Zt(t) {
  Ue = t;
}
let je = null;
function ln(t) {
  je = t;
}
let nr = null;
function Nh(t) {
  Ue !== null && (nr === null ? nr = [t] : nr.push(t));
}
let Lt = null, Ut = 0, rn = null;
function Jm(t) {
  rn = t;
}
let Eh = 1, ni = 0, rr = ni;
function sc(t) {
  rr = t;
}
function zh() {
  return ++Eh;
}
function yi(t) {
  var e = t.f;
  if ((e & Xt) !== 0)
    return !0;
  if (e & Et && (t.f &= -32769), (e & dr) !== 0) {
    var n = t.deps;
    if (n !== null)
      for (var r = n.length, o = 0; o < r; o++) {
        var i = n[o];
        if (yi(
          /** @type {Derived} */
          i
        ) && uh(
          /** @type {Derived} */
          i
        ), i.wv > t.wv)
          return !0;
      }
    (e & wn) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    sn === null && Vt(t, Dt);
  }
  return !1;
}
function Mh(t, e, n = !0) {
  var r = t.reactions;
  if (r !== null && !nr?.includes(t))
    for (var o = 0; o < r.length; o++) {
      var i = r[o];
      (i.f & Et) !== 0 ? Mh(
        /** @type {Derived} */
        i,
        e,
        !1
      ) : e === i && (n ? Vt(i, Xt) : (i.f & Dt) !== 0 && Vt(i, dr), qr(
        /** @type {Effect} */
        i
      ));
    }
}
function Th(t) {
  var e = Lt, n = Ut, r = rn, o = Ue, i = nr, s = ot, a = Mn, l = rr, u = t.f;
  Lt = /** @type {null | Value[]} */
  null, Ut = 0, rn = null, Ue = (u & (cr | Nr)) === 0 ? t : null, nr = null, yo(t.ctx), Mn = !1, rr = ++ni, t.ac !== null && (oa(() => {
    t.ac.abort(ho);
  }), t.ac = null);
  try {
    t.f |= Za;
    var d = (
      /** @type {Function} */
      t.fn
    ), h = d(), p = t.deps;
    if (Lt !== null) {
      var v;
      if (ms(t, Ut), p !== null && Ut > 0)
        for (p.length = Ut + Lt.length, v = 0; v < Lt.length; v++)
          p[Ut + v] = Lt[v];
      else
        t.deps = p = Lt;
      if (kr && ti() && (t.f & wn) !== 0)
        for (v = Ut; v < p.length; v++)
          (p[v].reactions ??= []).push(t);
    } else p !== null && Ut < p.length && (ms(t, Ut), p.length = Ut);
    if (zo() && rn !== null && !Mn && p !== null && (t.f & (Et | dr | Xt)) === 0)
      for (v = 0; v < /** @type {Source[]} */
      rn.length; v++)
        Mh(
          rn[v],
          /** @type {Effect} */
          t
        );
    return o !== null && o !== t && (ni++, rn !== null && (r === null ? r = rn : r.push(.../** @type {Source[]} */
    rn))), (t.f & br) !== 0 && (t.f ^= br), h;
  } catch (m) {
    return rh(m);
  } finally {
    t.f ^= Za, Lt = e, Ut = n, rn = r, Ue = o, nr = i, yo(s), Mn = a, rr = l;
  }
}
function Qm(t, e) {
  let n = e.reactions;
  if (n !== null) {
    var r = um.call(n, t);
    if (r !== -1) {
      var o = n.length - 1;
      o === 0 ? n = e.reactions = null : (n[r] = n[o], n.pop());
    }
  }
  n === null && (e.f & Et) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Lt === null || !Lt.includes(e)) && (Vt(e, dr), (e.f & wn) !== 0 && (e.f ^= wn, e.f &= -32769), lh(
    /** @type {Derived} **/
    e
  ), ms(
    /** @type {Derived} **/
    e,
    0
  ));
}
function ms(t, e) {
  var n = t.deps;
  if (n !== null)
    for (var r = e; r < n.length; r++)
      Qm(t, n[r]);
}
function ri(t) {
  var e = t.f;
  if ((e & tr) === 0) {
    Vt(t, Dt);
    var n = je, r = kr;
    je = t, kr = !0;
    try {
      (e & (ur | Ud)) !== 0 ? Gm(t) : Ch(t), kh(t);
      var o = Th(t);
      t.teardown = typeof o == "function" ? o : null, t.wv = Eh;
      var i;
      lm && Pm && (t.f & Xt) !== 0 && t.deps;
    } finally {
      kr = r, je = n;
    }
  }
}
async function Ah() {
  await Promise.resolve(), f();
}
function c(t) {
  var e = t.f, n = (e & Et) !== 0;
  if (Ue !== null && !Mn) {
    var r = je !== null && (je.f & tr) !== 0;
    if (!r && !nr?.includes(t)) {
      var o = Ue.deps;
      if ((Ue.f & Za) !== 0)
        t.rv < ni && (t.rv = ni, Lt === null && o !== null && o[Ut] === t ? Ut++ : Lt === null ? Lt = [t] : Lt.includes(t) || Lt.push(t));
      else {
        (Ue.deps ??= []).push(t);
        var i = t.reactions;
        i === null ? t.reactions = [Ue] : i.includes(Ue) || i.push(Ue);
      }
    }
  }
  if (ro) {
    if (xr.has(t))
      return xr.get(t);
    if (n) {
      var s = (
        /** @type {Derived} */
        t
      ), a = s.v;
      return ((s.f & Dt) === 0 && s.reactions !== null || Vh(s)) && (a = Yl(s)), xr.set(s, a), a;
    }
  } else n && (!sn?.has(t) || Qe?.is_fork && !ti()) && (s = /** @type {Derived} */
  t, yi(s) && uh(s), kr && ti() && (s.f & wn) === 0 && Dh(s));
  if (sn?.has(t))
    return sn.get(t);
  if ((t.f & br) !== 0)
    throw t.v;
  return t.v;
}
function Dh(t) {
  if (t.deps !== null) {
    t.f ^= wn;
    for (const e of t.deps)
      (e.reactions ??= []).push(t), (e.f & Et) !== 0 && (e.f & wn) === 0 && Dh(
        /** @type {Derived} */
        e
      );
  }
}
function Vh(t) {
  if (t.v === Ot) return !0;
  if (t.deps === null) return !1;
  for (const e of t.deps)
    if (xr.has(e) || (e.f & Et) !== 0 && Vh(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function st(t) {
  var e = Mn;
  try {
    return Mn = !0, t();
  } finally {
    Mn = e;
  }
}
const e1 = -7169;
function Vt(t, e) {
  t.f = t.f & e1 | e;
}
function t1(t, e) {
  var n = {};
  for (var r in t)
    e.includes(r) || (n[r] = t[r]);
  for (var o of Object.getOwnPropertySymbols(t))
    Object.propertyIsEnumerable.call(t, o) && !e.includes(o) && (n[o] = t[o]);
  return n;
}
function Ql(t) {
  if (!(typeof t != "object" || !t || t instanceof EventTarget)) {
    if (Dn in t)
      Ya(t);
    else if (!Array.isArray(t))
      for (let e in t) {
        const n = t[e];
        typeof n == "object" && n && Dn in n && Ya(n);
      }
  }
}
function Ya(t, e = /* @__PURE__ */ new Set()) {
  if (typeof t == "object" && t !== null && // We don't want to traverse DOM elements
  !(t instanceof EventTarget) && !e.has(t)) {
    e.add(t), t instanceof Date && t.getTime();
    for (let r in t)
      try {
        Ya(t[r], e);
      } catch {
      }
    const n = Gs(t);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = qd(n);
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
const Hh = /* @__PURE__ */ new Set(), Ua = /* @__PURE__ */ new Set();
function eu(t, e, n, r = {}) {
  function o(i) {
    if (r.capture || Fo.call(e, i), !i.cancelBubble)
      return oa(() => n?.call(this, i));
  }
  return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? Er(() => {
    e.addEventListener(t, o, r);
  }) : e.addEventListener(t, o, r), o;
}
function pt(t, e, n, r = {}) {
  var o = eu(e, t, n, r);
  return () => {
    t.removeEventListener(e, o, r);
  };
}
function ys(t, e, n, r, o) {
  var i = { capture: r, passive: o }, s = eu(t, e, n, i);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && ia(() => {
    e.removeEventListener(t, s, i);
  });
}
function oo(t) {
  for (var e = 0; e < t.length; e++)
    Hh.add(t[e]);
  for (var n of Ua)
    n(t);
}
let ac = null;
function Fo(t) {
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
    ps(t, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    var d = Ue, h = je;
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
function tu(t) {
  var e = document.createElement("template");
  return e.innerHTML = t.replaceAll("<!>", "<!---->"), e.content;
}
function qt(t, e) {
  var n = (
    /** @type {Effect} */
    je
  );
  n.nodes_start === null && (n.nodes_start = t, n.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function ne(t, e) {
  var n = (e & jd) !== 0, r = (e & im) !== 0, o, i = !t.startsWith("<!>");
  return () => {
    if ($e)
      return qt(Me, null), Me;
    o === void 0 && (o = tu(i ? t : "<!>" + t), n || (o = /** @type {Node} */
    /* @__PURE__ */ mt(o)));
    var s = (
      /** @type {TemplateNode} */
      r || ph ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ mt(s)
      ), l = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      qt(a, l);
    } else
      qt(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function n1(t, e, n = "svg") {
  var r = !t.startsWith("<!>"), o = (e & jd) !== 0, i = `<${n}>${r ? t : "<!>" + t}</${n}>`, s;
  return () => {
    if ($e)
      return qt(Me, null), Me;
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        tu(i)
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
      qt(d, h);
    } else
      qt(u, u);
    return u;
  };
}
// @__NO_SIDE_EFFECTS__
function Ce(t, e) {
  return /* @__PURE__ */ n1(t, e, "svg");
}
function ze(t = "") {
  if (!$e) {
    var e = Bt(t + "");
    return qt(e, e), e;
  }
  var n = Me;
  return n.nodeType !== ta && (n.before(n = Bt()), ct(n)), qt(n, n), n;
}
function de() {
  if ($e)
    return qt(Me, null), Me;
  var t = document.createDocumentFragment(), e = document.createComment(""), n = Bt();
  return t.append(e, n), qt(e, n), t;
}
function z(t, e) {
  if ($e) {
    var n = (
      /** @type {Effect} */
      je
    );
    ((n.f & ea) === 0 || n.nodes_end === null) && (n.nodes_end = Me), bn();
    return;
  }
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
function wi() {
  if ($e && Me && Me.nodeType === hr && Me.textContent?.startsWith("$")) {
    const t = Me.textContent.substring(1);
    return bn(), t;
  }
  return (window.__svelte ??= {}).uid ??= 1, `c${window.__svelte.uid++}`;
}
function r1(t) {
  return t.endsWith("capture") && t !== "gotpointercapture" && t !== "lostpointercapture";
}
const o1 = [
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
function i1(t) {
  return o1.includes(t);
}
const s1 = {
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
function a1(t) {
  return t = t.toLowerCase(), s1[t] ?? t;
}
const l1 = ["touchstart", "touchmove"];
function u1(t) {
  return l1.includes(t);
}
const c1 = (
  /** @type {const} */
  ["textarea", "script", "style", "title"]
);
function d1(t) {
  return c1.includes(
    /** @type {typeof RAW_TEXT_ELEMENTS[number]} */
    t
  );
}
function nt(t, e) {
  var n = e == null ? "" : typeof e == "object" ? e + "" : e;
  n !== (t.__t ??= t.nodeValue) && (t.__t = n, t.nodeValue = n + "");
}
function nu(t, e) {
  return Lh(t, e);
}
function h1(t, e) {
  Xa(), e.intro = e.intro ?? !1;
  const n = e.target, r = $e, o = Me;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ mt(n)
    ); i && (i.nodeType !== hr || /** @type {Comment} */
    i.data !== Zd); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ tn(i);
    if (!i)
      throw Zr;
    It(!0), ct(
      /** @type {Comment} */
      i
    );
    const s = Lh(t, { ...e, anchor: i });
    return It(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s instanceof Error && s.message.split(`
`).some((a) => a.startsWith("https://svelte.dev/e/")))
      throw s;
    return s !== Zr && console.warn("Failed to hydrate: ", s), e.recover === !1 && wm(), Xa(), Ul(n), It(!1), nu(t, e);
  } finally {
    It(r), ct(o);
  }
}
const lo = /* @__PURE__ */ new Map();
function Lh(t, { target: e, anchor: n, props: r = {}, events: o, context: i, intro: s = !0 }) {
  Xa();
  var a = /* @__PURE__ */ new Set(), l = (h) => {
    for (var p = 0; p < h.length; p++) {
      var v = h[p];
      if (!a.has(v)) {
        a.add(v);
        var m = u1(v);
        e.addEventListener(v, Fo, { passive: m });
        var y = lo.get(v);
        y === void 0 ? (document.addEventListener(v, Fo, { passive: m }), lo.set(v, 1)) : lo.set(v, y + 1);
      }
    }
  };
  l(Bl(Hh)), Ua.add(l);
  var u = void 0, d = Ym(() => {
    var h = n ?? e.appendChild(Bt());
    return Vm(
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
        if (o && (r.$$events = o), $e && qt(
          /** @type {TemplateNode} */
          p,
          null
        ), u = t(p, r) || {}, $e && (je.nodes_end = Me, Me === null || Me.nodeType !== hr || /** @type {Comment} */
        Me.data !== Rl))
          throw vi(), Zr;
        i && le();
      }
    ), () => {
      for (var p of a) {
        e.removeEventListener(p, Fo);
        var v = (
          /** @type {number} */
          lo.get(p)
        );
        --v === 0 ? (document.removeEventListener(p, Fo), lo.delete(p)) : lo.set(p, v);
      }
      Ua.delete(l), h !== n && h.parentNode?.removeChild(h);
    };
  });
  return Ga.set(u, d), u;
}
let Ga = /* @__PURE__ */ new WeakMap();
function Ih(t, e) {
  const n = Ga.get(t);
  return n ? (Ga.delete(t), n(e)) : Promise.resolve();
}
class bi {
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
        Jl(r), this.#r.delete(n);
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
            Oh(s, l), l.append(Bt()), this.#n.set(i, { effect: s, fragment: l });
          } else
            _t(s);
          this.#r.delete(i), this.#t.delete(i);
        };
        this.#o || !r ? (this.#r.add(i), fo(s, a, !1)) : a();
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
    ), o = vh();
    n && !this.#t.has(e) && !this.#n.has(e) && this.#t.set(
      e,
      Gt(() => n(this.anchor))
    ), this.#e.set(r, e), o || ($e && (this.anchor = Me), this.#i());
  }
}
function Oe(t, e, ...n) {
  var r = new bi(t);
  zr(() => {
    const o = e() ?? null;
    r.ensure(o, o && ((i) => o(i, ...n)));
  }, or);
}
function $n(t) {
  ot === null && Wl(), Eo && ot.l !== null ? p1(ot).m.push(t) : Ie(() => {
    const e = st(t);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function xi(t) {
  ot === null && Wl(), $n(() => () => st(t));
}
function p1(t) {
  var e = (
    /** @type {ComponentContextLegacy} */
    t.l
  );
  return e.u ??= { a: [], b: [], m: [] };
}
function f1() {
  return Symbol(Wd);
}
function se(t, e, n = !1) {
  $e && bn();
  var r = new bi(t), o = n ? or : 0;
  function i(s, a) {
    if ($e) {
      const u = Jd(t) === Ys;
      if (s === u) {
        var l = fs();
        ct(l), r.anchor = l, It(!1), r.ensure(s, a), It(!0);
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
function g1(t, e, n) {
  $e && bn();
  var r = new bi(t), o = !zo();
  zr(() => {
    var i = e();
    o && i !== null && typeof i == "object" && (i = /** @type {V} */
    {}), r.ensure(i, n);
  });
}
function v1(t, e) {
  $e && ct(
    /** @type {TemplateNode} */
    /* @__PURE__ */ mt(t)
  ), no(() => {
    var n = e();
    for (var r in n) {
      var o = n[r];
      o ? t.style.setProperty(r, o) : t.style.removeProperty(r);
    }
  });
}
function sa(t, e, n = !1, r = !1, o = !1) {
  var i = t, s = "";
  Ne(() => {
    var a = (
      /** @type {Effect} */
      je
    );
    if (s === (s = e() ?? "")) {
      $e && bn();
      return;
    }
    if (a.nodes_start !== null && ($h(
      a.nodes_start,
      /** @type {TemplateNode} */
      a.nodes_end
    ), a.nodes_start = a.nodes_end = null), s !== "") {
      if ($e) {
        Me.data;
        for (var l = bn(), u = l; l !== null && (l.nodeType !== hr || /** @type {Comment} */
        l.data !== ""); )
          u = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ tn(l);
        if (l === null)
          throw vi(), Zr;
        qt(Me, u), i = ct(l);
        return;
      }
      var d = s + "";
      n ? d = `<svg>${d}</svg>` : r && (d = `<math>${d}</math>`);
      var h = tu(d);
      if ((n || r) && (h = /** @type {Element} */
      /* @__PURE__ */ mt(h)), qt(
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
  $e && bn();
  var r = new bi(t);
  zr(() => {
    var o = e() ?? null;
    r.ensure(o, o && ((i) => n(i, o)));
  }, or);
}
function Rh(t, e, n, r, o, i) {
  let s = $e;
  $e && bn();
  var a = null;
  $e && Me.nodeType === pm && (a = /** @type {Element} */
  Me, bn());
  var l = (
    /** @type {TemplateNode} */
    $e ? Me : t
  ), u = new bi(l, !1);
  zr(() => {
    const d = e() || null;
    var h = n || d === "svg" ? am : null;
    if (d === null) {
      u.ensure(null, null);
      return;
    }
    return u.ensure(d, (p) => {
      if (d) {
        if (a = $e ? (
          /** @type {Element} */
          a
        ) : h ? document.createElementNS(h, d) : document.createElement(d), qt(a, a), r) {
          $e && d1(d) && a.append(document.createComment(""));
          var v = (
            /** @type {TemplateNode} */
            $e ? /* @__PURE__ */ mt(a) : a.appendChild(Bt())
          );
          $e && (v === null ? It(!1) : ct(v)), r(a, v);
        }
        je.nodes_end = a, p.before(a);
      }
      $e && ct(p);
    }), () => {
    };
  }, or), ia(() => {
  }), s && (It(!0), ct(l));
}
function m1(t, e) {
  let n = null, r = $e;
  var o;
  if ($e) {
    n = Me;
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ mt(document.head)
    ); i !== null && (i.nodeType !== hr || /** @type {Comment} */
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
  $e || (o = document.head.appendChild(Bt()));
  try {
    zr(() => e(o), Fl);
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
function At(t, e, n) {
  Mo(() => {
    var r = st(() => e(t, n?.()) || {});
    if (n && r?.update) {
      var o = !1, i = (
        /** @type {any} */
        {}
      );
      no(() => {
        var s = n();
        Ql(s), o && eh(i, s) && (i = s, r.update(s));
      }), o = !0;
    }
    if (r?.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function y1(t, e) {
  var n = void 0, r;
  xh(() => {
    n !== (n = e()) && (r && (_t(r), r = null), n && (r = Gt(() => {
      Mo(() => (
        /** @type {(node: Element) => void} */
        n(t)
      ));
    })));
  });
}
function Bh(t) {
  var e, n, r = "";
  if (typeof t == "string" || typeof t == "number") r += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var o = t.length;
    for (e = 0; e < o; e++) t[e] && (n = Bh(t[e])) && (r && (r += " "), r += n);
  } else for (n in t) t[n] && (r && (r += " "), r += n);
  return r;
}
function Go() {
  for (var t, e, n = 0, r = "", o = arguments.length; n < o; n++) (t = arguments[n]) && (e = Bh(t)) && (r && (r += " "), r += e);
  return r;
}
function pr(t) {
  return typeof t == "object" ? Go(t) : t ?? "";
}
const lc = [...` 	
\r\f \v\uFEFF`];
function w1(t, e, n) {
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
function $a(t) {
  return t[0] !== "-" || t[1] !== "-" ? t.toLowerCase() : t;
}
function b1(t, e) {
  if (e) {
    var n = "", r, o;
    if (Array.isArray(e) ? (r = e[0], o = e[1]) : r = e, t) {
      t = String(t).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var i = !1, s = 0, a = !1, l = [];
      r && l.push(...Object.keys(r).map($a)), o && l.push(...Object.keys(o).map($a));
      var u = 0, d = -1;
      const y = t.length;
      for (var h = 0; h < y; h++) {
        var p = t[h];
        if (a ? p === "/" && t[h - 1] === "*" && (a = !1) : i ? i === p && (i = !1) : p === "/" && t[h + 1] === "*" ? a = !0 : p === '"' || p === "'" ? i = p : p === "(" ? s++ : p === ")" && s--, !a && i === !1 && s === 0) {
          if (p === ":" && d === -1)
            d = h;
          else if (p === ";" || h === y - 1) {
            if (d !== -1) {
              var v = $a(t.substring(u, d).trim());
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
    return r && (n += uc(r)), o && (n += uc(o, !0)), n = n.trim(), n === "" ? null : n;
  }
  return t == null ? null : String(t);
}
function Yt(t, e, n, r, o, i) {
  var s = t.__className;
  if ($e || s !== n || s === void 0) {
    var a = w1(n, r, i);
    (!$e || a !== t.getAttribute("class")) && (a == null ? t.removeAttribute("class") : e ? t.className = a : t.setAttribute("class", a)), t.__className = n;
  } else if (i && o !== i)
    for (var l in i) {
      var u = !!i[l];
      (o == null || u !== !!o[l]) && t.classList.toggle(l, u);
    }
  return i;
}
function Sa(t, e = {}, n, r) {
  for (var o in n) {
    var i = n[o];
    e[o] !== i && (n[o] == null ? t.style.removeProperty(o) : t.style.setProperty(o, i, r));
  }
}
function zt(t, e, n, r) {
  var o = t.__style;
  if ($e || o !== e) {
    var i = b1(e, r);
    (!$e || i !== t.getAttribute("style")) && (i == null ? t.removeAttribute("style") : t.style.cssText = i), t.__style = e;
  } else r && (Array.isArray(r) ? (Sa(t, n?.[0], r[0]), Sa(t, n?.[1], r[1], "important")) : Sa(t, n, r));
  return r;
}
function Ja(t, e, n = !1) {
  if (t.multiple) {
    if (e == null)
      return;
    if (!Us(e))
      return Sm();
    for (var r of t.options)
      r.selected = e.includes(cc(r));
    return;
  }
  for (r of t.options) {
    var o = cc(r);
    if (Zm(o, e)) {
      r.selected = !0;
      return;
    }
  }
  (!n || e !== void 0) && (t.selectedIndex = -1);
}
function x1(t) {
  var e = new MutationObserver(() => {
    Ja(t, t.__value);
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
  }), ia(() => {
    e.disconnect();
  });
}
function cc(t) {
  return "__value" in t ? t.__value : t.value;
}
const yr = Symbol("class"), zn = Symbol("style"), Kh = Symbol("is custom element"), Fh = Symbol("is html");
function Cr(t) {
  if ($e) {
    var e = !1, n = () => {
      if (!e) {
        if (e = !0, t.hasAttribute("value")) {
          var r = t.value;
          Pe(t, "value", null), t.value = r;
        }
        if (t.hasAttribute("checked")) {
          var o = t.checked;
          Pe(t, "checked", null), t.checked = o;
        }
      }
    };
    t.__on_r = n, Er(n), mh();
  }
}
function ts(t, e) {
  var n = aa(t);
  n.value === (n.value = // treat null and undefined the same for the initial value
  e ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  t.value === e && (e !== 0 || t.nodeName !== "PROGRESS") || (t.value = e ?? "");
}
function _a(t, e) {
  var n = aa(t);
  n.checked !== (n.checked = // treat null and undefined the same for the initial value
  e ?? void 0) && (t.checked = e);
}
function k1(t, e) {
  e ? t.hasAttribute("selected") || t.setAttribute("selected", "") : t.removeAttribute("selected");
}
function Pe(t, e, n, r) {
  var o = aa(t);
  $e && (o[e] = t.getAttribute(e), e === "src" || e === "srcset" || e === "href" && t.nodeName === "LINK") || o[e] !== (o[e] = n) && (e === "loading" && (t[hm] = n), n == null ? t.removeAttribute(e) : typeof n != "string" && jh(t).includes(e) ? t[e] = n : t.setAttribute(e, n));
}
function C1(t, e, n, r, o = !1, i = !1) {
  if ($e && o && t.tagName === "INPUT") {
    var s = (
      /** @type {HTMLInputElement} */
      t
    ), a = s.type === "checkbox" ? "defaultChecked" : "defaultValue";
    a in n || Cr(s);
  }
  var l = aa(t), u = l[Kh], d = !l[Fh];
  let h = $e && u;
  h && It(!1);
  var p = e || {}, v = t.tagName === "OPTION";
  for (var m in e)
    m in n || (n[m] = null);
  n.class ? n.class = pr(n.class) : (r || n[yr]) && (n.class = null), n[zn] && (n.style ??= null);
  var y = jh(t);
  for (const N in n) {
    let V = n[N];
    if (v && N === "value" && V == null) {
      t.value = t.__value = "", p[N] = V;
      continue;
    }
    if (N === "class") {
      var w = t.namespaceURI === "http://www.w3.org/1999/xhtml";
      Yt(t, w, V, r, e?.[yr], n[yr]), p[N] = V, p[yr] = n[yr];
      continue;
    }
    if (N === "style") {
      zt(t, V, e?.[zn], n[zn]), p[N] = V, p[zn] = n[zn];
      continue;
    }
    var b = p[N];
    if (!(V === b && !(V === void 0 && t.hasAttribute(N)))) {
      p[N] = V;
      var k = N[0] + N[1];
      if (k !== "$$")
        if (k === "on") {
          const H = {}, I = "$$" + N;
          let A = N.slice(2);
          var P = i1(A);
          if (r1(A) && (A = A.slice(0, -7), H.capture = !0), !P && b) {
            if (V != null) continue;
            t.removeEventListener(A, p[I], H), p[I] = null;
          }
          if (V != null)
            if (P)
              t[`__${A}`] = V, oo([A]);
            else {
              let D = function(_) {
                p[N].call(this, _);
              };
              p[I] = eu(A, t, D, H);
            }
          else P && (t[`__${A}`] = void 0);
        } else if (N === "style")
          Pe(t, N, V);
        else if (N === "autofocus")
          Wm(
            /** @type {HTMLElement} */
            t,
            !!V
          );
        else if (!u && (N === "__value" || N === "value" && V != null))
          t.value = t.__value = V;
        else if (N === "selected" && v)
          k1(
            /** @type {HTMLOptionElement} */
            t,
            V
          );
        else {
          var C = N;
          d || (C = a1(C));
          var x = C === "defaultValue" || C === "defaultChecked";
          if (V == null && !u && !x)
            if (l[N] = null, C === "value" || C === "checked") {
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
              t.removeAttribute(N);
          else x || y.includes(C) && (u || typeof V != "string") ? (t[C] = V, C in l && (l[C] = Ot)) : typeof V != "function" && Pe(t, C, V);
        }
    }
  }
  return h && It(!0), p;
}
function Ge(t, e, n = [], r = [], o = [], i, s = !1, a = !1) {
  ah(o, n, r, (l) => {
    var u = void 0, d = {}, h = t.nodeName === "SELECT", p = !1;
    if (xh(() => {
      var m = e(...l.map(c)), y = C1(
        t,
        u,
        m,
        i,
        s,
        a
      );
      p && h && "value" in m && Ja(
        /** @type {HTMLSelectElement} */
        t,
        m.value
      );
      for (let b of Object.getOwnPropertySymbols(d))
        m[b] || _t(d[b]);
      for (let b of Object.getOwnPropertySymbols(m)) {
        var w = m[b];
        b.description === Wd && (!u || w !== u[b]) && (d[b] && _t(d[b]), d[b] = Gt(() => y1(t, () => w))), y[b] = w;
      }
      u = y;
    }), h) {
      var v = (
        /** @type {HTMLSelectElement} */
        t
      );
      Mo(() => {
        Ja(
          v,
          /** @type {Record<string | symbol, any>} */
          u.value,
          !0
        ), x1(v);
      });
    }
    p = !0;
  });
}
function aa(t) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    t.__attributes ??= {
      [Kh]: t.nodeName.includes("-"),
      [Fh]: t.namespaceURI === sm
    }
  );
}
var dc = /* @__PURE__ */ new Map();
function jh(t) {
  var e = t.getAttribute("is") || t.nodeName, n = dc.get(e);
  if (n) return n;
  dc.set(e, n = []);
  for (var r, o = t, i = Element.prototype; i !== o; ) {
    r = qd(o);
    for (var s in r)
      r[s].set && n.push(s);
    o = Gs(o);
  }
  return n;
}
function ws(t, e, n = e) {
  var r = /* @__PURE__ */ new WeakSet();
  yh(t, "input", async (o) => {
    var i = o ? t.defaultValue : t.value;
    if (i = Pa(t) ? Oa(i) : i, n(i), Qe !== null && r.add(Qe), await Ah(), i !== (i = e())) {
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
  st(e) == null && t.value) && (n(Pa(t) ? Oa(t.value) : t.value), Qe !== null && r.add(Qe)), no(() => {
    var o = e();
    if (t === document.activeElement) {
      var i = (
        /** @type {Batch} */
        es ?? Qe
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
function $1(t, e, n = e) {
  yh(t, "change", () => {
    n(t.files);
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  $e && t.files && n(t.files), no(() => {
    t.files = e();
  });
}
class ru {
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
          ru.entries.set(n.target, n);
          for (var r of this.#e.get(n.target) || [])
            r(n);
        }
      }
    ));
  }
}
var S1 = /* @__PURE__ */ new ru({
  box: "border-box"
});
function hc(t, e, n) {
  var r = S1.observe(t, () => n(t[e]));
  Mo(() => (st(() => n(t[e])), r));
}
function pc(t, e) {
  return t === e || t?.[Dn] === e;
}
function Mt(t = {}, e, n, r) {
  return Mo(() => {
    var o, i;
    return no(() => {
      o = i, i = [], st(() => {
        t !== n(...i) && (e(t, ...i), o && pc(n(...o), t) && e(null, ...o));
      });
    }), () => {
      Er(() => {
        i && pc(n(...i), t) && e(null, ...i);
      });
    };
  }), t;
}
function ou(t = !1) {
  const e = (
    /** @type {ComponentContextLegacy} */
    ot
  ), n = e.l.u;
  if (!n) return;
  let r = () => Ql(e.s);
  if (t) {
    let o = 0, i = (
      /** @type {Record<string, any>} */
      {}
    );
    const s = /* @__PURE__ */ mi(() => {
      let a = !1;
      const l = e.s;
      for (const u in l)
        l[u] !== i[u] && (i[u] = l[u], a = !0);
      return a && o++, o;
    });
    r = () => c(s);
  }
  n.b.length && jt(() => {
    fc(e, r), ja(n.b);
  }), Ie(() => {
    const o = st(() => n.m.map(dm));
    return () => {
      for (const i of o)
        typeof i == "function" && i();
    };
  }), n.a.length && Ie(() => {
    fc(e, r), ja(n.a);
  });
}
function fc(t, e) {
  if (t.l.s)
    for (const n of t.l.s) c(n);
  e();
}
let Li = !1;
function _1(t) {
  var e = Li;
  try {
    return Li = !1, [t(), Li];
  } finally {
    Li = e;
  }
}
const P1 = {
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
function Ae(t, e, n) {
  return new Proxy(
    { props: t, exclude: e },
    P1
  );
}
const O1 = {
  get(t, e) {
    if (!t.exclude.includes(e))
      return c(t.version), e in t.special ? t.special[e]() : t.props[e];
  },
  set(t, e, n) {
    if (!(e in t.special)) {
      var r = je;
      try {
        ln(t.parent_effect), t.special[e] = g(
          {
            get [e]() {
              return t.props[e];
            }
          },
          /** @type {string} */
          e,
          Fd
        );
      } finally {
        ln(r);
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
      version: ir(0),
      // TODO this is only necessary because we need to track component
      // destruction inside `prop`, because of `bind:this`, but it
      // seems likely that we can simplify `bind:this` instead
      parent_effect: (
        /** @type {Effect} */
        je
      )
    },
    O1
  );
}
const N1 = {
  get(t, e) {
    let n = t.props.length;
    for (; n--; ) {
      let r = t.props[n];
      if (Ho(r) && (r = r()), typeof r == "object" && r !== null && e in r) return r[e];
    }
  },
  set(t, e, n) {
    let r = t.props.length;
    for (; r--; ) {
      let o = t.props[r];
      Ho(o) && (o = o());
      const i = er(o, e);
      if (i && i.set)
        return i.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(t, e) {
    let n = t.props.length;
    for (; n--; ) {
      let r = t.props[n];
      if (Ho(r) && (r = r()), typeof r == "object" && r !== null && e in r) {
        const o = er(r, e);
        return o && !o.configurable && (o.configurable = !0), o;
      }
    }
  },
  has(t, e) {
    if (e === Dn || e === Zl) return !1;
    for (let n of t.props)
      if (Ho(n) && (n = n()), n != null && e in n) return !0;
    return !1;
  },
  ownKeys(t) {
    const e = [];
    for (let n of t.props)
      if (Ho(n) && (n = n()), !!n) {
        for (const r in n)
          e.includes(r) || e.push(r);
        for (const r of Object.getOwnPropertySymbols(n))
          e.includes(r) || e.push(r);
      }
    return e;
  }
};
function Be(...t) {
  return new Proxy({ props: t }, N1);
}
function g(t, e, n, r) {
  var o = !Eo || (n & nm) !== 0, i = (n & rm) !== 0, s = (n & om) !== 0, a = (
    /** @type {V} */
    r
  ), l = !0, u = () => (l && (l = !1, a = s ? st(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), a), d;
  if (i) {
    var h = Dn in t || Zl in t;
    d = er(t, e)?.set ?? (h && e in t ? (P) => t[e] = P : void 0);
  }
  var p, v = !1;
  i ? [p, v] = _1(() => (
    /** @type {V} */
    t[e]
  )) : p = /** @type {V} */
  t[e], p === void 0 && r !== void 0 && (p = u(), d && (o && bm(), d(p)));
  var m;
  if (o ? m = () => {
    var P = (
      /** @type {V} */
      t[e]
    );
    return P === void 0 ? u() : (l = !0, P);
  } : m = () => {
    var P = (
      /** @type {V} */
      t[e]
    );
    return P !== void 0 && (a = /** @type {V} */
    void 0), P === void 0 ? a : P;
  }, o && (n & Fd) === 0)
    return m;
  if (d) {
    var y = t.$$legacy;
    return (
      /** @type {() => V} */
      function(P, C) {
        return arguments.length > 0 ? ((!o || !C || y || v) && d(C ? m() : P), P) : m();
      }
    );
  }
  var w = !1, b = ((n & tm) !== 0 ? mi : Xl)(() => (w = !1, m()));
  i && c(b);
  var k = (
    /** @type {Effect} */
    je
  );
  return (
    /** @type {() => V} */
    function(P, C) {
      if (arguments.length > 0) {
        const x = C ? c(b) : o && i ? ht(P) : P;
        return F(b, x), w = !0, a !== void 0 && (a = x), P;
      }
      return ro && w || (k.f & tr) !== 0 ? b.v : c(b);
    }
  );
}
function E1(t) {
  return new z1(t);
}
class z1 {
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
      var a = /* @__PURE__ */ dh(s, !1, !1);
      return n.set(i, a), a;
    };
    const o = new Proxy(
      { ...e.props || {}, $$events: {} },
      {
        get(i, s) {
          return c(n.get(s) ?? r(s, Reflect.get(i, s)));
        },
        has(i, s) {
          return s === Zl ? !0 : (c(n.get(s) ?? r(s, Reflect.get(i, s))), Reflect.has(i, s));
        },
        set(i, s, a) {
          return F(n.get(s) ?? r(s, a), a), Reflect.set(i, s, a);
        }
      }
    );
    this.#t = (e.hydrate ? h1 : nu)(e.component, {
      target: e.target,
      anchor: e.anchor,
      props: o,
      context: e.context,
      intro: e.intro ?? !1,
      recover: e.recover
    }), (!e?.props?.$$host || e.sync === !1) && f(), this.#e = o.$$events;
    for (const i of Object.keys(this.#t))
      i === "$set" || i === "$destroy" || i === "$on" || ps(this, i, {
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
      Ih(this.#t);
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
let Zh;
typeof HTMLElement == "function" && (Zh = class extends HTMLElement {
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
      const e = {}, n = M1(this);
      for (const r of this.$$s)
        r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = t(r), e.default = !0) : e[r] = t(r));
      for (const r of this.attributes) {
        const o = this.$$g_p(r.name);
        o in this.$$d || (this.$$d[o] = ns(o, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = E1({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: e,
          $$host: this
        }
      }), this.$$me = to(() => {
        no(() => {
          this.$$r = !0;
          for (const r of hs(this.$$c)) {
            if (!this.$$p_d[r]?.reflect) continue;
            this.$$d[r] = this.$$c[r];
            const o = ns(
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
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = ns(t, n, this.$$p_d, "toProp"), this.$$c?.$set({ [t]: this.$$d[t] }));
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
    return hs(this.$$p_d).find(
      (e) => this.$$p_d[e].attribute === t || !this.$$p_d[e].attribute && e.toLowerCase() === t
    ) || t;
  }
});
function ns(t, e, n, r) {
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
function M1(t) {
  const e = {};
  return t.childNodes.forEach((n) => {
    e[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), e;
}
function ie(t, e, n, r, o, i) {
  let s = class extends Zh {
    constructor() {
      super(t, n, o), this.$$p_d = e;
    }
    static get observedAttributes() {
      return hs(e).map(
        (a) => (e[a].attribute || a).toLowerCase()
      );
    }
  };
  return hs(e).forEach((a) => {
    ps(s.prototype, a, {
      get() {
        return this.$$c && a in this.$$c ? this.$$c[a] : this.$$d[a];
      },
      set(l) {
        l = ns(a, l, e), this.$$d[a] = l;
        var u = this.$$c;
        if (u) {
          var d = er(u, a)?.get;
          d ? u[a] = l : u.$set({ [a]: l });
        }
      }
    });
  }), r.forEach((a) => {
    ps(s.prototype, a, {
      get() {
        return this.$$c?.[a];
      }
    });
  }), t.element = /** @type {any} */
  s, s;
}
var T1 = { value: () => {
} };
function la() {
  for (var t = 0, e = arguments.length, n = {}, r; t < e; ++t) {
    if (!(r = arguments[t] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new rs(n);
}
function rs(t) {
  this._ = t;
}
function A1(t, e) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !e.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
rs.prototype = la.prototype = {
  constructor: rs,
  on: function(t, e) {
    var n = this._, r = A1(t + "", n), o, i = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++i < s; ) if ((o = (t = r[i]).type) && (o = D1(n[o], t.name))) return o;
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
    return new rs(t);
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
function D1(t, e) {
  for (var n = 0, r = t.length, o; n < r; ++n)
    if ((o = t[n]).name === e)
      return o.value;
}
function vc(t, e, n) {
  for (var r = 0, o = t.length; r < o; ++r)
    if (t[r].name === e) {
      t[r] = T1, t = t.slice(0, r).concat(t.slice(r + 1));
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
function ua(t) {
  var e = t += "", n = e.indexOf(":");
  return n >= 0 && (e = t.slice(0, n)) !== "xmlns" && (t = t.slice(n + 1)), mc.hasOwnProperty(e) ? { space: mc[e], local: t } : t;
}
function V1(t) {
  return function() {
    var e = this.ownerDocument, n = this.namespaceURI;
    return n === Qa && e.documentElement.namespaceURI === Qa ? e.createElement(t) : e.createElementNS(n, t);
  };
}
function H1(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function Wh(t) {
  var e = ua(t);
  return (e.local ? H1 : V1)(e);
}
function L1() {
}
function iu(t) {
  return t == null ? L1 : function() {
    return this.querySelector(t);
  };
}
function I1(t) {
  typeof t != "function" && (t = iu(t));
  for (var e = this._groups, n = e.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = e[o], s = i.length, a = r[o] = new Array(s), l, u, d = 0; d < s; ++d)
      (l = i[d]) && (u = t.call(l, l.__data__, d, i)) && ("__data__" in l && (u.__data__ = l.__data__), a[d] = u);
  return new nn(r, this._parents);
}
function R1(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function B1() {
  return [];
}
function qh(t) {
  return t == null ? B1 : function() {
    return this.querySelectorAll(t);
  };
}
function K1(t) {
  return function() {
    return R1(t.apply(this, arguments));
  };
}
function F1(t) {
  typeof t == "function" ? t = K1(t) : t = qh(t);
  for (var e = this._groups, n = e.length, r = [], o = [], i = 0; i < n; ++i)
    for (var s = e[i], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && (r.push(t.call(l, l.__data__, u, s)), o.push(l));
  return new nn(r, o);
}
function Xh(t) {
  return function() {
    return this.matches(t);
  };
}
function Yh(t) {
  return function(e) {
    return e.matches(t);
  };
}
var j1 = Array.prototype.find;
function Z1(t) {
  return function() {
    return j1.call(this.children, t);
  };
}
function W1() {
  return this.firstElementChild;
}
function q1(t) {
  return this.select(t == null ? W1 : Z1(typeof t == "function" ? t : Yh(t)));
}
var X1 = Array.prototype.filter;
function Y1() {
  return Array.from(this.children);
}
function U1(t) {
  return function() {
    return X1.call(this.children, t);
  };
}
function G1(t) {
  return this.selectAll(t == null ? Y1 : U1(typeof t == "function" ? t : Yh(t)));
}
function J1(t) {
  typeof t != "function" && (t = Xh(t));
  for (var e = this._groups, n = e.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = e[o], s = i.length, a = r[o] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && t.call(l, l.__data__, u, i) && a.push(l);
  return new nn(r, this._parents);
}
function Uh(t) {
  return new Array(t.length);
}
function Q1() {
  return new nn(this._enter || this._groups.map(Uh), this._parents);
}
function bs(t, e) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
}
bs.prototype = {
  constructor: bs,
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
function e0(t) {
  return function() {
    return t;
  };
}
function t0(t, e, n, r, o, i) {
  for (var s = 0, a, l = e.length, u = i.length; s < u; ++s)
    (a = e[s]) ? (a.__data__ = i[s], r[s] = a) : n[s] = new bs(t, i[s]);
  for (; s < l; ++s)
    (a = e[s]) && (o[s] = a);
}
function n0(t, e, n, r, o, i, s) {
  var a, l, u = /* @__PURE__ */ new Map(), d = e.length, h = i.length, p = new Array(d), v;
  for (a = 0; a < d; ++a)
    (l = e[a]) && (p[a] = v = s.call(l, l.__data__, a, e) + "", u.has(v) ? o[a] = l : u.set(v, l));
  for (a = 0; a < h; ++a)
    v = s.call(t, i[a], a, i) + "", (l = u.get(v)) ? (r[a] = l, l.__data__ = i[a], u.delete(v)) : n[a] = new bs(t, i[a]);
  for (a = 0; a < d; ++a)
    (l = e[a]) && u.get(p[a]) === l && (o[a] = l);
}
function r0(t) {
  return t.__data__;
}
function o0(t, e) {
  if (!arguments.length) return Array.from(this, r0);
  var n = e ? n0 : t0, r = this._parents, o = this._groups;
  typeof t != "function" && (t = e0(t));
  for (var i = o.length, s = new Array(i), a = new Array(i), l = new Array(i), u = 0; u < i; ++u) {
    var d = r[u], h = o[u], p = h.length, v = i0(t.call(d, d && d.__data__, u, r)), m = v.length, y = a[u] = new Array(m), w = s[u] = new Array(m), b = l[u] = new Array(p);
    n(d, h, y, w, b, v, e);
    for (var k = 0, P = 0, C, x; k < m; ++k)
      if (C = y[k]) {
        for (k >= P && (P = k + 1); !(x = w[P]) && ++P < m; ) ;
        C._next = x || null;
      }
  }
  return s = new nn(s, r), s._enter = a, s._exit = l, s;
}
function i0(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function s0() {
  return new nn(this._exit || this._groups.map(Uh), this._parents);
}
function a0(t, e, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), e != null && (o = e(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function l0(t) {
  for (var e = t.selection ? t.selection() : t, n = this._groups, r = e._groups, o = n.length, i = r.length, s = Math.min(o, i), a = new Array(o), l = 0; l < s; ++l)
    for (var u = n[l], d = r[l], h = u.length, p = a[l] = new Array(h), v, m = 0; m < h; ++m)
      (v = u[m] || d[m]) && (p[m] = v);
  for (; l < o; ++l)
    a[l] = n[l];
  return new nn(a, this._parents);
}
function u0() {
  for (var t = this._groups, e = -1, n = t.length; ++e < n; )
    for (var r = t[e], o = r.length - 1, i = r[o], s; --o >= 0; )
      (s = r[o]) && (i && s.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(s, i), i = s);
  return this;
}
function c0(t) {
  t || (t = d0);
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
function d0(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function h0() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function p0() {
  return Array.from(this);
}
function f0() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], o = 0, i = r.length; o < i; ++o) {
      var s = r[o];
      if (s) return s;
    }
  return null;
}
function g0() {
  let t = 0;
  for (const e of this) ++t;
  return t;
}
function v0() {
  return !this.node();
}
function m0(t) {
  for (var e = this._groups, n = 0, r = e.length; n < r; ++n)
    for (var o = e[n], i = 0, s = o.length, a; i < s; ++i)
      (a = o[i]) && t.call(a, a.__data__, i, o);
  return this;
}
function y0(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function w0(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function b0(t, e) {
  return function() {
    this.setAttribute(t, e);
  };
}
function x0(t, e) {
  return function() {
    this.setAttributeNS(t.space, t.local, e);
  };
}
function k0(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttribute(t) : this.setAttribute(t, n);
  };
}
function C0(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n);
  };
}
function $0(t, e) {
  var n = ua(t);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((e == null ? n.local ? w0 : y0 : typeof e == "function" ? n.local ? C0 : k0 : n.local ? x0 : b0)(n, e));
}
function Gh(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function S0(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function _0(t, e, n) {
  return function() {
    this.style.setProperty(t, e, n);
  };
}
function P0(t, e, n) {
  return function() {
    var r = e.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, n);
  };
}
function O0(t, e, n) {
  return arguments.length > 1 ? this.each((e == null ? S0 : typeof e == "function" ? P0 : _0)(t, e, n ?? "")) : xo(this.node(), t);
}
function xo(t, e) {
  return t.style.getPropertyValue(e) || Gh(t).getComputedStyle(t, null).getPropertyValue(e);
}
function N0(t) {
  return function() {
    delete this[t];
  };
}
function E0(t, e) {
  return function() {
    this[t] = e;
  };
}
function z0(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? delete this[t] : this[t] = n;
  };
}
function M0(t, e) {
  return arguments.length > 1 ? this.each((e == null ? N0 : typeof e == "function" ? z0 : E0)(t, e)) : this.node()[t];
}
function Jh(t) {
  return t.trim().split(/^|\s+/);
}
function su(t) {
  return t.classList || new Qh(t);
}
function Qh(t) {
  this._node = t, this._names = Jh(t.getAttribute("class") || "");
}
Qh.prototype = {
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
function ep(t, e) {
  for (var n = su(t), r = -1, o = e.length; ++r < o; ) n.add(e[r]);
}
function tp(t, e) {
  for (var n = su(t), r = -1, o = e.length; ++r < o; ) n.remove(e[r]);
}
function T0(t) {
  return function() {
    ep(this, t);
  };
}
function A0(t) {
  return function() {
    tp(this, t);
  };
}
function D0(t, e) {
  return function() {
    (e.apply(this, arguments) ? ep : tp)(this, t);
  };
}
function V0(t, e) {
  var n = Jh(t + "");
  if (arguments.length < 2) {
    for (var r = su(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof e == "function" ? D0 : e ? T0 : A0)(n, e));
}
function H0() {
  this.textContent = "";
}
function L0(t) {
  return function() {
    this.textContent = t;
  };
}
function I0(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
function R0(t) {
  return arguments.length ? this.each(t == null ? H0 : (typeof t == "function" ? I0 : L0)(t)) : this.node().textContent;
}
function B0() {
  this.innerHTML = "";
}
function K0(t) {
  return function() {
    this.innerHTML = t;
  };
}
function F0(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function j0(t) {
  return arguments.length ? this.each(t == null ? B0 : (typeof t == "function" ? F0 : K0)(t)) : this.node().innerHTML;
}
function Z0() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function W0() {
  return this.each(Z0);
}
function q0() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function X0() {
  return this.each(q0);
}
function Y0(t) {
  var e = typeof t == "function" ? t : Wh(t);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function U0() {
  return null;
}
function G0(t, e) {
  var n = typeof t == "function" ? t : Wh(t), r = e == null ? U0 : typeof e == "function" ? e : iu(e);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function J0() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function Q0() {
  return this.each(J0);
}
function ey() {
  var t = this.cloneNode(!1), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function ty() {
  var t = this.cloneNode(!0), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function ny(t) {
  return this.select(t ? ty : ey);
}
function ry(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function oy(t) {
  return function(e) {
    t.call(this, e, this.__data__);
  };
}
function iy(t) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var n = "", r = e.indexOf(".");
    return r >= 0 && (n = e.slice(r + 1), e = e.slice(0, r)), { type: e, name: n };
  });
}
function sy(t) {
  return function() {
    var e = this.__on;
    if (e) {
      for (var n = 0, r = -1, o = e.length, i; n < o; ++n)
        i = e[n], (!t.type || i.type === t.type) && i.name === t.name ? this.removeEventListener(i.type, i.listener, i.options) : e[++r] = i;
      ++r ? e.length = r : delete this.__on;
    }
  };
}
function ay(t, e, n) {
  return function() {
    var r = this.__on, o, i = oy(e);
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
function ly(t, e, n) {
  var r = iy(t + ""), o, i = r.length, s;
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
  for (a = e ? ay : sy, o = 0; o < i; ++o) this.each(a(r[o], e, n));
  return this;
}
function np(t, e, n) {
  var r = Gh(t), o = r.CustomEvent;
  typeof o == "function" ? o = new o(e, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(e, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(e, !1, !1)), t.dispatchEvent(o);
}
function uy(t, e) {
  return function() {
    return np(this, t, e);
  };
}
function cy(t, e) {
  return function() {
    return np(this, t, e.apply(this, arguments));
  };
}
function dy(t, e) {
  return this.each((typeof e == "function" ? cy : uy)(t, e));
}
function* hy() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], o = 0, i = r.length, s; o < i; ++o)
      (s = r[o]) && (yield s);
}
var rp = [null];
function nn(t, e) {
  this._groups = t, this._parents = e;
}
function ki() {
  return new nn([[document.documentElement]], rp);
}
function py() {
  return this;
}
nn.prototype = ki.prototype = {
  constructor: nn,
  select: I1,
  selectAll: F1,
  selectChild: q1,
  selectChildren: G1,
  filter: J1,
  data: o0,
  enter: Q1,
  exit: s0,
  join: a0,
  merge: l0,
  selection: py,
  order: u0,
  sort: c0,
  call: h0,
  nodes: p0,
  node: f0,
  size: g0,
  empty: v0,
  each: m0,
  attr: $0,
  style: O0,
  property: M0,
  classed: V0,
  text: R0,
  html: j0,
  raise: W0,
  lower: X0,
  append: Y0,
  insert: G0,
  remove: Q0,
  clone: ny,
  datum: ry,
  on: ly,
  dispatch: dy,
  [Symbol.iterator]: hy
};
function an(t) {
  return typeof t == "string" ? new nn([[document.querySelector(t)]], [document.documentElement]) : new nn([[t]], rp);
}
function fy(t) {
  let e;
  for (; e = t.sourceEvent; ) t = e;
  return t;
}
function fn(t, e) {
  if (t = fy(t), e === void 0 && (e = t.currentTarget), e) {
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
const gy = { passive: !1 }, oi = { capture: !0, passive: !1 };
function Na(t) {
  t.stopImmediatePropagation();
}
function go(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function op(t) {
  var e = t.document.documentElement, n = an(t).on("dragstart.drag", go, oi);
  "onselectstart" in e ? n.on("selectstart.drag", go, oi) : (e.__noselect = e.style.MozUserSelect, e.style.MozUserSelect = "none");
}
function ip(t, e) {
  var n = t.document.documentElement, r = an(t).on("dragstart.drag", null);
  e && (r.on("click.drag", go, oi), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const Ii = (t) => () => t;
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
function vy(t) {
  return !t.ctrlKey && !t.button;
}
function my() {
  return this.parentNode;
}
function yy(t, e) {
  return e ?? { x: t.x, y: t.y };
}
function wy() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function by() {
  var t = vy, e = my, n = yy, r = wy, o = {}, i = la("start", "drag", "end"), s = 0, a, l, u, d, h = 0;
  function p(C) {
    C.on("mousedown.drag", v).filter(r).on("touchstart.drag", w).on("touchmove.drag", b, gy).on("touchend.drag touchcancel.drag", k).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function v(C, x) {
    if (!(d || !t.call(this, C, x))) {
      var N = P(this, e.call(this, C, x), C, x, "mouse");
      N && (an(C.view).on("mousemove.drag", m, oi).on("mouseup.drag", y, oi), op(C.view), Na(C), u = !1, a = C.clientX, l = C.clientY, N("start", C));
    }
  }
  function m(C) {
    if (go(C), !u) {
      var x = C.clientX - a, N = C.clientY - l;
      u = x * x + N * N > h;
    }
    o.mouse("drag", C);
  }
  function y(C) {
    an(C.view).on("mousemove.drag mouseup.drag", null), ip(C.view, u), go(C), o.mouse("end", C);
  }
  function w(C, x) {
    if (t.call(this, C, x)) {
      var N = C.changedTouches, V = e.call(this, C, x), H = N.length, I, A;
      for (I = 0; I < H; ++I)
        (A = P(this, V, C, x, N[I].identifier, N[I])) && (Na(C), A("start", C, N[I]));
    }
  }
  function b(C) {
    var x = C.changedTouches, N = x.length, V, H;
    for (V = 0; V < N; ++V)
      (H = o[x[V].identifier]) && (go(C), H("drag", C, x[V]));
  }
  function k(C) {
    var x = C.changedTouches, N = x.length, V, H;
    for (d && clearTimeout(d), d = setTimeout(function() {
      d = null;
    }, 500), V = 0; V < N; ++V)
      (H = o[x[V].identifier]) && (Na(C), H("end", C, x[V]));
  }
  function P(C, x, N, V, H, I) {
    var A = i.copy(), D = fn(I || N, x), _, T, S;
    if ((S = n.call(C, new el("beforestart", {
      sourceEvent: N,
      target: p,
      identifier: H,
      active: s,
      x: D[0],
      y: D[1],
      dx: 0,
      dy: 0,
      dispatch: A
    }), V)) != null)
      return _ = S.x - D[0] || 0, T = S.y - D[1] || 0, function O(M, B, X) {
        var U = D, E;
        switch (M) {
          case "start":
            o[H] = O, E = s++;
            break;
          case "end":
            delete o[H], --s;
          // falls through
          case "drag":
            D = fn(X || B, x), E = s;
            break;
        }
        A.call(
          M,
          C,
          new el(M, {
            sourceEvent: B,
            subject: S,
            target: p,
            identifier: H,
            active: E,
            x: D[0] + _,
            y: D[1] + T,
            dx: D[0] - U[0],
            dy: D[1] - U[1],
            dispatch: A
          }),
          V
        );
      };
  }
  return p.filter = function(C) {
    return arguments.length ? (t = typeof C == "function" ? C : Ii(!!C), p) : t;
  }, p.container = function(C) {
    return arguments.length ? (e = typeof C == "function" ? C : Ii(C), p) : e;
  }, p.subject = function(C) {
    return arguments.length ? (n = typeof C == "function" ? C : Ii(C), p) : n;
  }, p.touchable = function(C) {
    return arguments.length ? (r = typeof C == "function" ? C : Ii(!!C), p) : r;
  }, p.on = function() {
    var C = i.on.apply(i, arguments);
    return C === i ? p : C;
  }, p.clickDistance = function(C) {
    return arguments.length ? (h = (C = +C) * C, p) : Math.sqrt(h);
  }, p;
}
function au(t, e, n) {
  t.prototype = e.prototype = n, n.constructor = t;
}
function sp(t, e) {
  var n = Object.create(t.prototype);
  for (var r in e) n[r] = e[r];
  return n;
}
function Ci() {
}
var ii = 0.7, xs = 1 / ii, vo = "\\s*([+-]?\\d+)\\s*", si = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Vn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", xy = /^#([0-9a-f]{3,8})$/, ky = new RegExp(`^rgb\\(${vo},${vo},${vo}\\)$`), Cy = new RegExp(`^rgb\\(${Vn},${Vn},${Vn}\\)$`), $y = new RegExp(`^rgba\\(${vo},${vo},${vo},${si}\\)$`), Sy = new RegExp(`^rgba\\(${Vn},${Vn},${Vn},${si}\\)$`), _y = new RegExp(`^hsl\\(${si},${Vn},${Vn}\\)$`), Py = new RegExp(`^hsla\\(${si},${Vn},${Vn},${si}\\)$`), yc = {
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
au(Ci, Yr, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: wc,
  // Deprecated! Use color.formatHex.
  formatHex: wc,
  formatHex8: Oy,
  formatHsl: Ny,
  formatRgb: bc,
  toString: bc
});
function wc() {
  return this.rgb().formatHex();
}
function Oy() {
  return this.rgb().formatHex8();
}
function Ny() {
  return ap(this).formatHsl();
}
function bc() {
  return this.rgb().formatRgb();
}
function Yr(t) {
  var e, n;
  return t = (t + "").trim().toLowerCase(), (e = xy.exec(t)) ? (n = e[1].length, e = parseInt(e[1], 16), n === 6 ? xc(e) : n === 3 ? new Wt(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : n === 8 ? Ri(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : n === 4 ? Ri(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = ky.exec(t)) ? new Wt(e[1], e[2], e[3], 1) : (e = Cy.exec(t)) ? new Wt(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = $y.exec(t)) ? Ri(e[1], e[2], e[3], e[4]) : (e = Sy.exec(t)) ? Ri(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = _y.exec(t)) ? $c(e[1], e[2] / 100, e[3] / 100, 1) : (e = Py.exec(t)) ? $c(e[1], e[2] / 100, e[3] / 100, e[4]) : yc.hasOwnProperty(t) ? xc(yc[t]) : t === "transparent" ? new Wt(NaN, NaN, NaN, 0) : null;
}
function xc(t) {
  return new Wt(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function Ri(t, e, n, r) {
  return r <= 0 && (t = e = n = NaN), new Wt(t, e, n, r);
}
function Ey(t) {
  return t instanceof Ci || (t = Yr(t)), t ? (t = t.rgb(), new Wt(t.r, t.g, t.b, t.opacity)) : new Wt();
}
function tl(t, e, n, r) {
  return arguments.length === 1 ? Ey(t) : new Wt(t, e, n, r ?? 1);
}
function Wt(t, e, n, r) {
  this.r = +t, this.g = +e, this.b = +n, this.opacity = +r;
}
au(Wt, tl, sp(Ci, {
  brighter(t) {
    return t = t == null ? xs : Math.pow(xs, t), new Wt(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? ii : Math.pow(ii, t), new Wt(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Wt(Fr(this.r), Fr(this.g), Fr(this.b), ks(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: kc,
  // Deprecated! Use color.formatHex.
  formatHex: kc,
  formatHex8: zy,
  formatRgb: Cc,
  toString: Cc
}));
function kc() {
  return `#${Ir(this.r)}${Ir(this.g)}${Ir(this.b)}`;
}
function zy() {
  return `#${Ir(this.r)}${Ir(this.g)}${Ir(this.b)}${Ir((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Cc() {
  const t = ks(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${Fr(this.r)}, ${Fr(this.g)}, ${Fr(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function ks(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function Fr(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function Ir(t) {
  return t = Fr(t), (t < 16 ? "0" : "") + t.toString(16);
}
function $c(t, e, n, r) {
  return r <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new gn(t, e, n, r);
}
function ap(t) {
  if (t instanceof gn) return new gn(t.h, t.s, t.l, t.opacity);
  if (t instanceof Ci || (t = Yr(t)), !t) return new gn();
  if (t instanceof gn) return t;
  t = t.rgb();
  var e = t.r / 255, n = t.g / 255, r = t.b / 255, o = Math.min(e, n, r), i = Math.max(e, n, r), s = NaN, a = i - o, l = (i + o) / 2;
  return a ? (e === i ? s = (n - r) / a + (n < r) * 6 : n === i ? s = (r - e) / a + 2 : s = (e - n) / a + 4, a /= l < 0.5 ? i + o : 2 - i - o, s *= 60) : a = l > 0 && l < 1 ? 0 : s, new gn(s, a, l, t.opacity);
}
function My(t, e, n, r) {
  return arguments.length === 1 ? ap(t) : new gn(t, e, n, r ?? 1);
}
function gn(t, e, n, r) {
  this.h = +t, this.s = +e, this.l = +n, this.opacity = +r;
}
au(gn, My, sp(Ci, {
  brighter(t) {
    return t = t == null ? xs : Math.pow(xs, t), new gn(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? ii : Math.pow(ii, t), new gn(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, e = isNaN(t) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * e, o = 2 * n - r;
    return new Wt(
      Ea(t >= 240 ? t - 240 : t + 120, o, r),
      Ea(t, o, r),
      Ea(t < 120 ? t + 240 : t - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new gn(Sc(this.h), Bi(this.s), Bi(this.l), ks(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = ks(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${Sc(this.h)}, ${Bi(this.s) * 100}%, ${Bi(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function Sc(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function Bi(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function Ea(t, e, n) {
  return (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e) * 255;
}
const lu = (t) => () => t;
function Ty(t, e) {
  return function(n) {
    return t + n * e;
  };
}
function Ay(t, e, n) {
  return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function(r) {
    return Math.pow(t + r * e, n);
  };
}
function Dy(t) {
  return (t = +t) == 1 ? lp : function(e, n) {
    return n - e ? Ay(e, n, t) : lu(isNaN(e) ? n : e);
  };
}
function lp(t, e) {
  var n = e - t;
  return n ? Ty(t, n) : lu(isNaN(t) ? e : t);
}
const Cs = function t(e) {
  var n = Dy(e);
  function r(o, i) {
    var s = n((o = tl(o)).r, (i = tl(i)).r), a = n(o.g, i.g), l = n(o.b, i.b), u = lp(o.opacity, i.opacity);
    return function(d) {
      return o.r = s(d), o.g = a(d), o.b = l(d), o.opacity = u(d), o + "";
    };
  }
  return r.gamma = t, r;
}(1);
function Vy(t, e) {
  e || (e = []);
  var n = t ? Math.min(e.length, t.length) : 0, r = e.slice(), o;
  return function(i) {
    for (o = 0; o < n; ++o) r[o] = t[o] * (1 - i) + e[o] * i;
    return r;
  };
}
function Hy(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function Ly(t, e) {
  var n = e ? e.length : 0, r = t ? Math.min(n, t.length) : 0, o = new Array(r), i = new Array(n), s;
  for (s = 0; s < r; ++s) o[s] = Jo(t[s], e[s]);
  for (; s < n; ++s) i[s] = e[s];
  return function(a) {
    for (s = 0; s < r; ++s) i[s] = o[s](a);
    return i;
  };
}
function Iy(t, e) {
  var n = /* @__PURE__ */ new Date();
  return t = +t, e = +e, function(r) {
    return n.setTime(t * (1 - r) + e * r), n;
  };
}
function Nn(t, e) {
  return t = +t, e = +e, function(n) {
    return t * (1 - n) + e * n;
  };
}
function Ry(t, e) {
  var n = {}, r = {}, o;
  (t === null || typeof t != "object") && (t = {}), (e === null || typeof e != "object") && (e = {});
  for (o in e)
    o in t ? n[o] = Jo(t[o], e[o]) : r[o] = e[o];
  return function(i) {
    for (o in n) r[o] = n[o](i);
    return r;
  };
}
var nl = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, za = new RegExp(nl.source, "g");
function By(t) {
  return function() {
    return t;
  };
}
function Ky(t) {
  return function(e) {
    return t(e) + "";
  };
}
function up(t, e) {
  var n = nl.lastIndex = za.lastIndex = 0, r, o, i, s = -1, a = [], l = [];
  for (t = t + "", e = e + ""; (r = nl.exec(t)) && (o = za.exec(e)); )
    (i = o.index) > n && (i = e.slice(n, i), a[s] ? a[s] += i : a[++s] = i), (r = r[0]) === (o = o[0]) ? a[s] ? a[s] += o : a[++s] = o : (a[++s] = null, l.push({ i: s, x: Nn(r, o) })), n = za.lastIndex;
  return n < e.length && (i = e.slice(n), a[s] ? a[s] += i : a[++s] = i), a.length < 2 ? l[0] ? Ky(l[0].x) : By(e) : (e = l.length, function(u) {
    for (var d = 0, h; d < e; ++d) a[(h = l[d]).i] = h.x(u);
    return a.join("");
  });
}
function Jo(t, e) {
  var n = typeof e, r;
  return e == null || n === "boolean" ? lu(e) : (n === "number" ? Nn : n === "string" ? (r = Yr(e)) ? (e = r, Cs) : up : e instanceof Yr ? Cs : e instanceof Date ? Iy : Hy(e) ? Vy : Array.isArray(e) ? Ly : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? Ry : Nn)(t, e);
}
var _c = 180 / Math.PI, cp = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function dp(t, e, n, r, o, i) {
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
var Ki;
function Fy(t) {
  const e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return e.isIdentity ? cp : dp(e.a, e.b, e.c, e.d, e.e, e.f);
}
function jy(t) {
  return t == null || (Ki || (Ki = document.createElementNS("http://www.w3.org/2000/svg", "g")), Ki.setAttribute("transform", t), !(t = Ki.transform.baseVal.consolidate())) ? cp : (t = t.matrix, dp(t.a, t.b, t.c, t.d, t.e, t.f));
}
function hp(t, e, n, r) {
  function o(u) {
    return u.length ? u.pop() + " " : "";
  }
  function i(u, d, h, p, v, m) {
    if (u !== h || d !== p) {
      var y = v.push("translate(", null, e, null, n);
      m.push({ i: y - 4, x: Nn(u, h) }, { i: y - 2, x: Nn(d, p) });
    } else (h || p) && v.push("translate(" + h + e + p + n);
  }
  function s(u, d, h, p) {
    u !== d ? (u - d > 180 ? d += 360 : d - u > 180 && (u += 360), p.push({ i: h.push(o(h) + "rotate(", null, r) - 2, x: Nn(u, d) })) : d && h.push(o(h) + "rotate(" + d + r);
  }
  function a(u, d, h, p) {
    u !== d ? p.push({ i: h.push(o(h) + "skewX(", null, r) - 2, x: Nn(u, d) }) : d && h.push(o(h) + "skewX(" + d + r);
  }
  function l(u, d, h, p, v, m) {
    if (u !== h || d !== p) {
      var y = v.push(o(v) + "scale(", null, ",", null, ")");
      m.push({ i: y - 4, x: Nn(u, h) }, { i: y - 2, x: Nn(d, p) });
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
var Zy = hp(Fy, "px, ", "px)", "deg)"), Wy = hp(jy, ", ", ")", ")"), qy = 1e-12;
function Pc(t) {
  return ((t = Math.exp(t)) + 1 / t) / 2;
}
function Xy(t) {
  return ((t = Math.exp(t)) - 1 / t) / 2;
}
function Yy(t) {
  return ((t = Math.exp(2 * t)) - 1) / (t + 1);
}
const os = function t(e, n, r) {
  function o(i, s) {
    var a = i[0], l = i[1], u = i[2], d = s[0], h = s[1], p = s[2], v = d - a, m = h - l, y = v * v + m * m, w, b;
    if (y < qy)
      b = Math.log(p / u) / e, w = function(V) {
        return [
          a + V * v,
          l + V * m,
          u * Math.exp(e * V * b)
        ];
      };
    else {
      var k = Math.sqrt(y), P = (p * p - u * u + r * y) / (2 * u * n * k), C = (p * p - u * u - r * y) / (2 * p * n * k), x = Math.log(Math.sqrt(P * P + 1) - P), N = Math.log(Math.sqrt(C * C + 1) - C);
      b = (N - x) / e, w = function(V) {
        var H = V * b, I = Pc(x), A = u / (n * k) * (I * Yy(e * H + x) - Xy(x));
        return [
          a + A * v,
          l + A * m,
          u * I / Pc(e * H + x)
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
var ko = 0, jo = 0, Lo = 0, pp = 1e3, $s, Zo, Ss = 0, Ur = 0, ca = 0, ai = typeof performance == "object" && performance.now ? performance : Date, fp = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function uu() {
  return Ur || (fp(Uy), Ur = ai.now() + ca);
}
function Uy() {
  Ur = 0;
}
function _s() {
  this._call = this._time = this._next = null;
}
_s.prototype = gp.prototype = {
  constructor: _s,
  restart: function(t, e, n) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    n = (n == null ? uu() : +n) + (e == null ? 0 : +e), !this._next && Zo !== this && (Zo ? Zo._next = this : $s = this, Zo = this), this._call = t, this._time = n, rl();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, rl());
  }
};
function gp(t, e, n) {
  var r = new _s();
  return r.restart(t, e, n), r;
}
function Gy() {
  uu(), ++ko;
  for (var t = $s, e; t; )
    (e = Ur - t._time) >= 0 && t._call.call(void 0, e), t = t._next;
  --ko;
}
function Oc() {
  Ur = (Ss = ai.now()) + ca, ko = jo = 0;
  try {
    Gy();
  } finally {
    ko = 0, Qy(), Ur = 0;
  }
}
function Jy() {
  var t = ai.now(), e = t - Ss;
  e > pp && (ca -= e, Ss = t);
}
function Qy() {
  for (var t, e = $s, n, r = 1 / 0; e; )
    e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : $s = n);
  Zo = t, rl(r);
}
function rl(t) {
  if (!ko) {
    jo && (jo = clearTimeout(jo));
    var e = t - Ur;
    e > 24 ? (t < 1 / 0 && (jo = setTimeout(Oc, t - ai.now() - ca)), Lo && (Lo = clearInterval(Lo))) : (Lo || (Ss = ai.now(), Lo = setInterval(Jy, pp)), ko = 1, fp(Oc));
  }
}
function Nc(t, e, n) {
  var r = new _s();
  return e = e == null ? 0 : +e, r.restart((o) => {
    r.stop(), t(o + e);
  }, e, n), r;
}
var ew = la("start", "end", "cancel", "interrupt"), tw = [], vp = 0, Ec = 1, ol = 2, is = 3, zc = 4, il = 5, ss = 6;
function da(t, e, n, r, o, i) {
  var s = t.__transition;
  if (!s) t.__transition = {};
  else if (n in s) return;
  nw(t, n, {
    name: e,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: ew,
    tween: tw,
    time: i.time,
    delay: i.delay,
    duration: i.duration,
    ease: i.ease,
    timer: null,
    state: vp
  });
}
function cu(t, e) {
  var n = Sn(t, e);
  if (n.state > vp) throw new Error("too late; already scheduled");
  return n;
}
function Fn(t, e) {
  var n = Sn(t, e);
  if (n.state > is) throw new Error("too late; already running");
  return n;
}
function Sn(t, e) {
  var n = t.__transition;
  if (!n || !(n = n[e])) throw new Error("transition not found");
  return n;
}
function nw(t, e, n) {
  var r = t.__transition, o;
  r[e] = n, n.timer = gp(i, 0, n.time);
  function i(u) {
    n.state = Ec, n.timer.restart(s, n.delay, n.time), n.delay <= u && s(u - n.delay);
  }
  function s(u) {
    var d, h, p, v;
    if (n.state !== Ec) return l();
    for (d in r)
      if (v = r[d], v.name === n.name) {
        if (v.state === is) return Nc(s);
        v.state === zc ? (v.state = ss, v.timer.stop(), v.on.call("interrupt", t, t.__data__, v.index, v.group), delete r[d]) : +d < e && (v.state = ss, v.timer.stop(), v.on.call("cancel", t, t.__data__, v.index, v.group), delete r[d]);
      }
    if (Nc(function() {
      n.state === is && (n.state = zc, n.timer.restart(a, n.delay, n.time), a(u));
    }), n.state = ol, n.on.call("start", t, t.__data__, n.index, n.group), n.state === ol) {
      for (n.state = is, o = new Array(p = n.tween.length), d = 0, h = -1; d < p; ++d)
        (v = n.tween[d].value.call(t, t.__data__, n.index, n.group)) && (o[++h] = v);
      o.length = h + 1;
    }
  }
  function a(u) {
    for (var d = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), n.state = il, 1), h = -1, p = o.length; ++h < p; )
      o[h].call(t, d);
    n.state === il && (n.on.call("end", t, t.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = ss, n.timer.stop(), delete r[e];
    for (var u in r) return;
    delete t.__transition;
  }
}
function as(t, e) {
  var n = t.__transition, r, o, i = !0, s;
  if (n) {
    e = e == null ? null : e + "";
    for (s in n) {
      if ((r = n[s]).name !== e) {
        i = !1;
        continue;
      }
      o = r.state > ol && r.state < il, r.state = ss, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete n[s];
    }
    i && delete t.__transition;
  }
}
function rw(t) {
  return this.each(function() {
    as(this, t);
  });
}
function ow(t, e) {
  var n, r;
  return function() {
    var o = Fn(this, t), i = o.tween;
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
function iw(t, e, n) {
  var r, o;
  if (typeof n != "function") throw new Error();
  return function() {
    var i = Fn(this, t), s = i.tween;
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
function sw(t, e) {
  var n = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = Sn(this.node(), n).tween, o = 0, i = r.length, s; o < i; ++o)
      if ((s = r[o]).name === t)
        return s.value;
    return null;
  }
  return this.each((e == null ? ow : iw)(n, t, e));
}
function du(t, e, n) {
  var r = t._id;
  return t.each(function() {
    var o = Fn(this, r);
    (o.value || (o.value = {}))[e] = n.apply(this, arguments);
  }), function(o) {
    return Sn(o, r).value[e];
  };
}
function mp(t, e) {
  var n;
  return (typeof e == "number" ? Nn : e instanceof Yr ? Cs : (n = Yr(e)) ? (e = n, Cs) : up)(t, e);
}
function aw(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function lw(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function uw(t, e, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttribute(t);
    return s === o ? null : s === r ? i : i = e(r = s, n);
  };
}
function cw(t, e, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttributeNS(t.space, t.local);
    return s === o ? null : s === r ? i : i = e(r = s, n);
  };
}
function dw(t, e, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttribute(t) : (s = this.getAttribute(t), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = e(r = s, a)));
  };
}
function hw(t, e, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttributeNS(t.space, t.local) : (s = this.getAttributeNS(t.space, t.local), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = e(r = s, a)));
  };
}
function pw(t, e) {
  var n = ua(t), r = n === "transform" ? Wy : mp;
  return this.attrTween(t, typeof e == "function" ? (n.local ? hw : dw)(n, r, du(this, "attr." + t, e)) : e == null ? (n.local ? lw : aw)(n) : (n.local ? cw : uw)(n, r, e));
}
function fw(t, e) {
  return function(n) {
    this.setAttribute(t, e.call(this, n));
  };
}
function gw(t, e) {
  return function(n) {
    this.setAttributeNS(t.space, t.local, e.call(this, n));
  };
}
function vw(t, e) {
  var n, r;
  function o() {
    var i = e.apply(this, arguments);
    return i !== r && (n = (r = i) && gw(t, i)), n;
  }
  return o._value = e, o;
}
function mw(t, e) {
  var n, r;
  function o() {
    var i = e.apply(this, arguments);
    return i !== r && (n = (r = i) && fw(t, i)), n;
  }
  return o._value = e, o;
}
function yw(t, e) {
  var n = "attr." + t;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (e == null) return this.tween(n, null);
  if (typeof e != "function") throw new Error();
  var r = ua(t);
  return this.tween(n, (r.local ? vw : mw)(r, e));
}
function ww(t, e) {
  return function() {
    cu(this, t).delay = +e.apply(this, arguments);
  };
}
function bw(t, e) {
  return e = +e, function() {
    cu(this, t).delay = e;
  };
}
function xw(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? ww : bw)(e, t)) : Sn(this.node(), e).delay;
}
function kw(t, e) {
  return function() {
    Fn(this, t).duration = +e.apply(this, arguments);
  };
}
function Cw(t, e) {
  return e = +e, function() {
    Fn(this, t).duration = e;
  };
}
function $w(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? kw : Cw)(e, t)) : Sn(this.node(), e).duration;
}
function Sw(t, e) {
  if (typeof e != "function") throw new Error();
  return function() {
    Fn(this, t).ease = e;
  };
}
function _w(t) {
  var e = this._id;
  return arguments.length ? this.each(Sw(e, t)) : Sn(this.node(), e).ease;
}
function Pw(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    Fn(this, t).ease = n;
  };
}
function Ow(t) {
  if (typeof t != "function") throw new Error();
  return this.each(Pw(this._id, t));
}
function Nw(t) {
  typeof t != "function" && (t = Xh(t));
  for (var e = this._groups, n = e.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = e[o], s = i.length, a = r[o] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && t.call(l, l.__data__, u, i) && a.push(l);
  return new sr(r, this._parents, this._name, this._id);
}
function Ew(t) {
  if (t._id !== this._id) throw new Error();
  for (var e = this._groups, n = t._groups, r = e.length, o = n.length, i = Math.min(r, o), s = new Array(r), a = 0; a < i; ++a)
    for (var l = e[a], u = n[a], d = l.length, h = s[a] = new Array(d), p, v = 0; v < d; ++v)
      (p = l[v] || u[v]) && (h[v] = p);
  for (; a < r; ++a)
    s[a] = e[a];
  return new sr(s, this._parents, this._name, this._id);
}
function zw(t) {
  return (t + "").trim().split(/^|\s+/).every(function(e) {
    var n = e.indexOf(".");
    return n >= 0 && (e = e.slice(0, n)), !e || e === "start";
  });
}
function Mw(t, e, n) {
  var r, o, i = zw(e) ? cu : Fn;
  return function() {
    var s = i(this, t), a = s.on;
    a !== r && (o = (r = a).copy()).on(e, n), s.on = o;
  };
}
function Tw(t, e) {
  var n = this._id;
  return arguments.length < 2 ? Sn(this.node(), n).on.on(t) : this.each(Mw(n, t, e));
}
function Aw(t) {
  return function() {
    var e = this.parentNode;
    for (var n in this.__transition) if (+n !== t) return;
    e && e.removeChild(this);
  };
}
function Dw() {
  return this.on("end.remove", Aw(this._id));
}
function Vw(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = iu(t));
  for (var r = this._groups, o = r.length, i = new Array(o), s = 0; s < o; ++s)
    for (var a = r[s], l = a.length, u = i[s] = new Array(l), d, h, p = 0; p < l; ++p)
      (d = a[p]) && (h = t.call(d, d.__data__, p, a)) && ("__data__" in d && (h.__data__ = d.__data__), u[p] = h, da(u[p], e, n, p, u, Sn(d, n)));
  return new sr(i, this._parents, e, n);
}
function Hw(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = qh(t));
  for (var r = this._groups, o = r.length, i = [], s = [], a = 0; a < o; ++a)
    for (var l = r[a], u = l.length, d, h = 0; h < u; ++h)
      if (d = l[h]) {
        for (var p = t.call(d, d.__data__, h, l), v, m = Sn(d, n), y = 0, w = p.length; y < w; ++y)
          (v = p[y]) && da(v, e, n, y, p, m);
        i.push(p), s.push(d);
      }
  return new sr(i, s, e, n);
}
var Lw = ki.prototype.constructor;
function Iw() {
  return new Lw(this._groups, this._parents);
}
function Rw(t, e) {
  var n, r, o;
  return function() {
    var i = xo(this, t), s = (this.style.removeProperty(t), xo(this, t));
    return i === s ? null : i === n && s === r ? o : o = e(n = i, r = s);
  };
}
function yp(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Bw(t, e, n) {
  var r, o = n + "", i;
  return function() {
    var s = xo(this, t);
    return s === o ? null : s === r ? i : i = e(r = s, n);
  };
}
function Kw(t, e, n) {
  var r, o, i;
  return function() {
    var s = xo(this, t), a = n(this), l = a + "";
    return a == null && (l = a = (this.style.removeProperty(t), xo(this, t))), s === l ? null : s === r && l === o ? i : (o = l, i = e(r = s, a));
  };
}
function Fw(t, e) {
  var n, r, o, i = "style." + e, s = "end." + i, a;
  return function() {
    var l = Fn(this, t), u = l.on, d = l.value[i] == null ? a || (a = yp(e)) : void 0;
    (u !== n || o !== d) && (r = (n = u).copy()).on(s, o = d), l.on = r;
  };
}
function jw(t, e, n) {
  var r = (t += "") == "transform" ? Zy : mp;
  return e == null ? this.styleTween(t, Rw(t, r)).on("end.style." + t, yp(t)) : typeof e == "function" ? this.styleTween(t, Kw(t, r, du(this, "style." + t, e))).each(Fw(this._id, t)) : this.styleTween(t, Bw(t, r, e), n).on("end.style." + t, null);
}
function Zw(t, e, n) {
  return function(r) {
    this.style.setProperty(t, e.call(this, r), n);
  };
}
function Ww(t, e, n) {
  var r, o;
  function i() {
    var s = e.apply(this, arguments);
    return s !== o && (r = (o = s) && Zw(t, s, n)), r;
  }
  return i._value = e, i;
}
function qw(t, e, n) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (e == null) return this.tween(r, null);
  if (typeof e != "function") throw new Error();
  return this.tween(r, Ww(t, e, n ?? ""));
}
function Xw(t) {
  return function() {
    this.textContent = t;
  };
}
function Yw(t) {
  return function() {
    var e = t(this);
    this.textContent = e ?? "";
  };
}
function Uw(t) {
  return this.tween("text", typeof t == "function" ? Yw(du(this, "text", t)) : Xw(t == null ? "" : t + ""));
}
function Gw(t) {
  return function(e) {
    this.textContent = t.call(this, e);
  };
}
function Jw(t) {
  var e, n;
  function r() {
    var o = t.apply(this, arguments);
    return o !== n && (e = (n = o) && Gw(o)), e;
  }
  return r._value = t, r;
}
function Qw(t) {
  var e = "text";
  if (arguments.length < 1) return (e = this.tween(e)) && e._value;
  if (t == null) return this.tween(e, null);
  if (typeof t != "function") throw new Error();
  return this.tween(e, Jw(t));
}
function eb() {
  for (var t = this._name, e = this._id, n = wp(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, u = 0; u < a; ++u)
      if (l = s[u]) {
        var d = Sn(l, e);
        da(l, t, n, u, s, {
          time: d.time + d.delay + d.duration,
          delay: 0,
          duration: d.duration,
          ease: d.ease
        });
      }
  return new sr(r, this._parents, t, n);
}
function tb() {
  var t, e, n = this, r = n._id, o = n.size();
  return new Promise(function(i, s) {
    var a = { value: s }, l = { value: function() {
      --o === 0 && i();
    } };
    n.each(function() {
      var u = Fn(this, r), d = u.on;
      d !== t && (e = (t = d).copy(), e._.cancel.push(a), e._.interrupt.push(a), e._.end.push(l)), u.on = e;
    }), o === 0 && i();
  });
}
var nb = 0;
function sr(t, e, n, r) {
  this._groups = t, this._parents = e, this._name = n, this._id = r;
}
function wp() {
  return ++nb;
}
var Zn = ki.prototype;
sr.prototype = {
  constructor: sr,
  select: Vw,
  selectAll: Hw,
  selectChild: Zn.selectChild,
  selectChildren: Zn.selectChildren,
  filter: Nw,
  merge: Ew,
  selection: Iw,
  transition: eb,
  call: Zn.call,
  nodes: Zn.nodes,
  node: Zn.node,
  size: Zn.size,
  empty: Zn.empty,
  each: Zn.each,
  on: Tw,
  attr: pw,
  attrTween: yw,
  style: jw,
  styleTween: qw,
  text: Uw,
  textTween: Qw,
  remove: Dw,
  tween: sw,
  delay: xw,
  duration: $w,
  ease: _w,
  easeVarying: Ow,
  end: tb,
  [Symbol.iterator]: Zn[Symbol.iterator]
};
function rb(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var ob = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: rb
};
function ib(t, e) {
  for (var n; !(n = t.__transition) || !(n = n[e]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${e} not found`);
  return n;
}
function sb(t) {
  var e, n;
  t instanceof sr ? (e = t._id, t = t._name) : (e = wp(), (n = ob).time = uu(), t = t == null ? null : t + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && da(l, t, e, u, s, n || ib(l, e));
  return new sr(r, this._parents, t, e);
}
ki.prototype.interrupt = rw;
ki.prototype.transition = sb;
const Fi = (t) => () => t;
function ab(t, {
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
function Un(t, e, n) {
  this.k = t, this.x = e, this.y = n;
}
Un.prototype = {
  constructor: Un,
  scale: function(t) {
    return t === 1 ? this : new Un(this.k * t, this.x, this.y);
  },
  translate: function(t, e) {
    return t === 0 & e === 0 ? this : new Un(this.k, this.x + this.k * t, this.y + this.k * e);
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
var ha = new Un(1, 0, 0);
bp.prototype = Un.prototype;
function bp(t) {
  for (; !t.__zoom; ) if (!(t = t.parentNode)) return ha;
  return t.__zoom;
}
function Ma(t) {
  t.stopImmediatePropagation();
}
function Io(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function lb(t) {
  return (!t.ctrlKey || t.type === "wheel") && !t.button;
}
function ub() {
  var t = this;
  return t instanceof SVGElement ? (t = t.ownerSVGElement || t, t.hasAttribute("viewBox") ? (t = t.viewBox.baseVal, [[t.x, t.y], [t.x + t.width, t.y + t.height]]) : [[0, 0], [t.width.baseVal.value, t.height.baseVal.value]]) : [[0, 0], [t.clientWidth, t.clientHeight]];
}
function Mc() {
  return this.__zoom || ha;
}
function cb(t) {
  return -t.deltaY * (t.deltaMode === 1 ? 0.05 : t.deltaMode ? 1 : 2e-3) * (t.ctrlKey ? 10 : 1);
}
function db() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function hb(t, e, n) {
  var r = t.invertX(e[0][0]) - n[0][0], o = t.invertX(e[1][0]) - n[1][0], i = t.invertY(e[0][1]) - n[0][1], s = t.invertY(e[1][1]) - n[1][1];
  return t.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    s > i ? (i + s) / 2 : Math.min(0, i) || Math.max(0, s)
  );
}
function xp() {
  var t = lb, e = ub, n = hb, r = cb, o = db, i = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], a = 250, l = os, u = la("start", "zoom", "end"), d, h, p, v = 500, m = 150, y = 0, w = 10;
  function b(S) {
    S.property("__zoom", Mc).on("wheel.zoom", H, { passive: !1 }).on("mousedown.zoom", I).on("dblclick.zoom", A).filter(o).on("touchstart.zoom", D).on("touchmove.zoom", _).on("touchend.zoom touchcancel.zoom", T).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  b.transform = function(S, O, M, B) {
    var X = S.selection ? S.selection() : S;
    X.property("__zoom", Mc), S !== X ? x(S, O, M, B) : X.interrupt().each(function() {
      N(this, arguments).event(B).start().zoom(null, typeof O == "function" ? O.apply(this, arguments) : O).end();
    });
  }, b.scaleBy = function(S, O, M, B) {
    b.scaleTo(S, function() {
      var X = this.__zoom.k, U = typeof O == "function" ? O.apply(this, arguments) : O;
      return X * U;
    }, M, B);
  }, b.scaleTo = function(S, O, M, B) {
    b.transform(S, function() {
      var X = e.apply(this, arguments), U = this.__zoom, E = M == null ? C(X) : typeof M == "function" ? M.apply(this, arguments) : M, Y = U.invert(E), ee = typeof O == "function" ? O.apply(this, arguments) : O;
      return n(P(k(U, ee), E, Y), X, s);
    }, M, B);
  }, b.translateBy = function(S, O, M, B) {
    b.transform(S, function() {
      return n(this.__zoom.translate(
        typeof O == "function" ? O.apply(this, arguments) : O,
        typeof M == "function" ? M.apply(this, arguments) : M
      ), e.apply(this, arguments), s);
    }, null, B);
  }, b.translateTo = function(S, O, M, B, X) {
    b.transform(S, function() {
      var U = e.apply(this, arguments), E = this.__zoom, Y = B == null ? C(U) : typeof B == "function" ? B.apply(this, arguments) : B;
      return n(ha.translate(Y[0], Y[1]).scale(E.k).translate(
        typeof O == "function" ? -O.apply(this, arguments) : -O,
        typeof M == "function" ? -M.apply(this, arguments) : -M
      ), U, s);
    }, B, X);
  };
  function k(S, O) {
    return O = Math.max(i[0], Math.min(i[1], O)), O === S.k ? S : new Un(O, S.x, S.y);
  }
  function P(S, O, M) {
    var B = O[0] - M[0] * S.k, X = O[1] - M[1] * S.k;
    return B === S.x && X === S.y ? S : new Un(S.k, B, X);
  }
  function C(S) {
    return [(+S[0][0] + +S[1][0]) / 2, (+S[0][1] + +S[1][1]) / 2];
  }
  function x(S, O, M, B) {
    S.on("start.zoom", function() {
      N(this, arguments).event(B).start();
    }).on("interrupt.zoom end.zoom", function() {
      N(this, arguments).event(B).end();
    }).tween("zoom", function() {
      var X = this, U = arguments, E = N(X, U).event(B), Y = e.apply(X, U), ee = M == null ? C(Y) : typeof M == "function" ? M.apply(X, U) : M, K = Math.max(Y[1][0] - Y[0][0], Y[1][1] - Y[0][1]), j = X.__zoom, W = typeof O == "function" ? O.apply(X, U) : O, J = l(j.invert(ee).concat(K / j.k), W.invert(ee).concat(K / W.k));
      return function(re) {
        if (re === 1) re = W;
        else {
          var L = J(re), te = K / L[2];
          re = new Un(te, ee[0] - L[0] * te, ee[1] - L[1] * te);
        }
        E.zoom(null, re);
      };
    });
  }
  function N(S, O, M) {
    return !M && S.__zooming || new V(S, O);
  }
  function V(S, O) {
    this.that = S, this.args = O, this.active = 0, this.sourceEvent = null, this.extent = e.apply(S, O), this.taps = 0;
  }
  V.prototype = {
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
      var O = an(this.that).datum();
      u.call(
        S,
        this.that,
        new ab(S, {
          sourceEvent: this.sourceEvent,
          target: b,
          transform: this.that.__zoom,
          dispatch: u
        }),
        O
      );
    }
  };
  function H(S, ...O) {
    if (!t.apply(this, arguments)) return;
    var M = N(this, O).event(S), B = this.__zoom, X = Math.max(i[0], Math.min(i[1], B.k * Math.pow(2, r.apply(this, arguments)))), U = fn(S);
    if (M.wheel)
      (M.mouse[0][0] !== U[0] || M.mouse[0][1] !== U[1]) && (M.mouse[1] = B.invert(M.mouse[0] = U)), clearTimeout(M.wheel);
    else {
      if (B.k === X) return;
      M.mouse = [U, B.invert(U)], as(this), M.start();
    }
    Io(S), M.wheel = setTimeout(E, m), M.zoom("mouse", n(P(k(B, X), M.mouse[0], M.mouse[1]), M.extent, s));
    function E() {
      M.wheel = null, M.end();
    }
  }
  function I(S, ...O) {
    if (p || !t.apply(this, arguments)) return;
    var M = S.currentTarget, B = N(this, O, !0).event(S), X = an(S.view).on("mousemove.zoom", ee, !0).on("mouseup.zoom", K, !0), U = fn(S, M), E = S.clientX, Y = S.clientY;
    op(S.view), Ma(S), B.mouse = [U, this.__zoom.invert(U)], as(this), B.start();
    function ee(j) {
      if (Io(j), !B.moved) {
        var W = j.clientX - E, J = j.clientY - Y;
        B.moved = W * W + J * J > y;
      }
      B.event(j).zoom("mouse", n(P(B.that.__zoom, B.mouse[0] = fn(j, M), B.mouse[1]), B.extent, s));
    }
    function K(j) {
      X.on("mousemove.zoom mouseup.zoom", null), ip(j.view, B.moved), Io(j), B.event(j).end();
    }
  }
  function A(S, ...O) {
    if (t.apply(this, arguments)) {
      var M = this.__zoom, B = fn(S.changedTouches ? S.changedTouches[0] : S, this), X = M.invert(B), U = M.k * (S.shiftKey ? 0.5 : 2), E = n(P(k(M, U), B, X), e.apply(this, O), s);
      Io(S), a > 0 ? an(this).transition().duration(a).call(x, E, B, S) : an(this).call(b.transform, E, B, S);
    }
  }
  function D(S, ...O) {
    if (t.apply(this, arguments)) {
      var M = S.touches, B = M.length, X = N(this, O, S.changedTouches.length === B).event(S), U, E, Y, ee;
      for (Ma(S), E = 0; E < B; ++E)
        Y = M[E], ee = fn(Y, this), ee = [ee, this.__zoom.invert(ee), Y.identifier], X.touch0 ? !X.touch1 && X.touch0[2] !== ee[2] && (X.touch1 = ee, X.taps = 0) : (X.touch0 = ee, U = !0, X.taps = 1 + !!d);
      d && (d = clearTimeout(d)), U && (X.taps < 2 && (h = ee[0], d = setTimeout(function() {
        d = null;
      }, v)), as(this), X.start());
    }
  }
  function _(S, ...O) {
    if (this.__zooming) {
      var M = N(this, O).event(S), B = S.changedTouches, X = B.length, U, E, Y, ee;
      for (Io(S), U = 0; U < X; ++U)
        E = B[U], Y = fn(E, this), M.touch0 && M.touch0[2] === E.identifier ? M.touch0[0] = Y : M.touch1 && M.touch1[2] === E.identifier && (M.touch1[0] = Y);
      if (E = M.that.__zoom, M.touch1) {
        var K = M.touch0[0], j = M.touch0[1], W = M.touch1[0], J = M.touch1[1], re = (re = W[0] - K[0]) * re + (re = W[1] - K[1]) * re, L = (L = J[0] - j[0]) * L + (L = J[1] - j[1]) * L;
        E = k(E, Math.sqrt(re / L)), Y = [(K[0] + W[0]) / 2, (K[1] + W[1]) / 2], ee = [(j[0] + J[0]) / 2, (j[1] + J[1]) / 2];
      } else if (M.touch0) Y = M.touch0[0], ee = M.touch0[1];
      else return;
      M.zoom("touch", n(P(E, Y, ee), M.extent, s));
    }
  }
  function T(S, ...O) {
    if (this.__zooming) {
      var M = N(this, O).event(S), B = S.changedTouches, X = B.length, U, E;
      for (Ma(S), p && clearTimeout(p), p = setTimeout(function() {
        p = null;
      }, v), U = 0; U < X; ++U)
        E = B[U], M.touch0 && M.touch0[2] === E.identifier ? delete M.touch0 : M.touch1 && M.touch1[2] === E.identifier && delete M.touch1;
      if (M.touch1 && !M.touch0 && (M.touch0 = M.touch1, delete M.touch1), M.touch0) M.touch0[1] = this.__zoom.invert(M.touch0[0]);
      else if (M.end(), M.taps === 2 && (E = fn(E, this), Math.hypot(h[0] - E[0], h[1] - E[1]) < w)) {
        var Y = an(this).on("dblclick.zoom");
        Y && Y.apply(this, arguments);
      }
    }
  }
  return b.wheelDelta = function(S) {
    return arguments.length ? (r = typeof S == "function" ? S : Fi(+S), b) : r;
  }, b.filter = function(S) {
    return arguments.length ? (t = typeof S == "function" ? S : Fi(!!S), b) : t;
  }, b.touchable = function(S) {
    return arguments.length ? (o = typeof S == "function" ? S : Fi(!!S), b) : o;
  }, b.extent = function(S) {
    return arguments.length ? (e = typeof S == "function" ? S : Fi([[+S[0][0], +S[0][1]], [+S[1][0], +S[1][1]]]), b) : e;
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
const li = {
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
], kp = ["Enter", " ", "Escape"], pb = {
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
var Co;
(function(t) {
  t.Strict = "strict", t.Loose = "loose";
})(Co || (Co = {}));
var jr;
(function(t) {
  t.Free = "free", t.Vertical = "vertical", t.Horizontal = "horizontal";
})(jr || (jr = {}));
var Ps;
(function(t) {
  t.Partial = "partial", t.Full = "full";
})(Ps || (Ps = {}));
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
var Yn;
(function(t) {
  t.Bezier = "default", t.Straight = "straight", t.Step = "step", t.SmoothStep = "smoothstep", t.SimpleBezier = "simplebezier";
})(Yn || (Yn = {}));
var ui;
(function(t) {
  t.Arrow = "arrow", t.ArrowClosed = "arrowclosed";
})(ui || (ui = {}));
var _e;
(function(t) {
  t.Left = "left", t.Top = "top", t.Right = "right", t.Bottom = "bottom";
})(_e || (_e = {}));
const Tc = {
  [_e.Left]: _e.Right,
  [_e.Right]: _e.Left,
  [_e.Top]: _e.Bottom,
  [_e.Bottom]: _e.Top
};
function fb(t, e) {
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
function Ac(t, e, n) {
  if (!n)
    return;
  const r = [];
  t.forEach((o, i) => {
    e?.has(i) || r.push(o);
  }), r.length && n(r);
}
function gb(t) {
  return t === null ? null : t ? "valid" : "invalid";
}
const Cp = (t) => "id" in t && "source" in t && "target" in t, vb = (t) => "id" in t && "position" in t && !("source" in t) && !("target" in t), hu = (t) => "id" in t && "internals" in t && !("source" in t) && !("target" in t), $i = (t, e = [0, 0]) => {
  const { width: n, height: r } = Mr(t), o = t.origin ?? e, i = n * o[0], s = r * o[1];
  return {
    x: t.position.x - i,
    y: t.position.y - s
  };
}, mb = (t, e = { nodeOrigin: [0, 0] }) => {
  if (t.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = t.reduce((r, o) => {
    const i = typeof o == "string";
    let s = !e.nodeLookup && !i ? o : void 0;
    e.nodeLookup && (s = i ? e.nodeLookup.get(o) : hu(o) ? o : e.nodeLookup.get(o.id));
    const a = s ? Os(s, e.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return pa(r, a);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return fa(n);
}, Si = (t, e = {}) => {
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 }, r = !1;
  return t.forEach((o) => {
    (e.filter === void 0 || e.filter(o)) && (n = pa(n, Os(o)), r = !0);
  }), r ? fa(n) : { x: 0, y: 0, width: 0, height: 0 };
}, pu = (t, e, [n, r, o] = [0, 0, 1], i = !1, s = !1) => {
  const a = {
    ...Pi(e, [n, r, o]),
    width: e.width / o,
    height: e.height / o
  }, l = [];
  for (const u of t.values()) {
    const { measured: d, selectable: h = !0, hidden: p = !1 } = u;
    if (s && !h || p)
      continue;
    const v = d.width ?? u.width ?? u.initialWidth ?? null, m = d.height ?? u.height ?? u.initialHeight ?? null, y = ci(a, So(u)), w = (v ?? 0) * (m ?? 0), b = i && y > 0;
    (!u.internals.handleBounds || b || y >= w || u.dragging) && l.push(u);
  }
  return l;
}, yb = (t, e) => {
  const n = /* @__PURE__ */ new Set();
  return t.forEach((r) => {
    n.add(r.id);
  }), e.filter((r) => n.has(r.source) || n.has(r.target));
};
function wb(t, e) {
  const n = /* @__PURE__ */ new Map(), r = e?.nodes ? new Set(e.nodes.map((o) => o.id)) : null;
  return t.forEach((o) => {
    o.measured.width && o.measured.height && (e?.includeHiddenNodes || !o.hidden) && (!r || r.has(o.id)) && n.set(o.id, o);
  }), n;
}
async function bb({ nodes: t, width: e, height: n, panZoom: r, minZoom: o, maxZoom: i }, s) {
  if (t.size === 0)
    return Promise.resolve(!0);
  const a = wb(t, s), l = Si(a), u = fu(l, e, n, s?.minZoom ?? o, s?.maxZoom ?? i, s?.padding ?? 0.1);
  return await r.setViewport(u, {
    duration: s?.duration,
    ease: s?.ease,
    interpolate: s?.interpolate
  }), Promise.resolve(!0);
}
function $p({ nodeId: t, nextPosition: e, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
  const s = n.get(t), a = s.parentId ? n.get(s.parentId) : void 0, { x: l, y: u } = a ? a.internals.positionAbsolute : { x: 0, y: 0 }, d = s.origin ?? r;
  let h = s.extent || o;
  if (s.extent === "parent" && !s.expandParent)
    if (!a)
      i?.("005", li.error005());
    else {
      const v = a.measured.width, m = a.measured.height;
      v && m && (h = [
        [l, u],
        [l + v, u + m]
      ]);
    }
  else a && _o(s.extent) && (h = [
    [s.extent[0][0] + l, s.extent[0][1] + u],
    [s.extent[1][0] + l, s.extent[1][1] + u]
  ]);
  const p = _o(h) ? Gr(e, h, s.measured) : e;
  return (s.measured.width === void 0 || s.measured.height === void 0) && i?.("015", li.error015()), {
    position: {
      x: p.x - l + (s.measured.width ?? 0) * d[0],
      y: p.y - u + (s.measured.height ?? 0) * d[1]
    },
    positionAbsolute: p
  };
}
async function xb({ nodesToRemove: t = [], edgesToRemove: e = [], nodes: n, edges: r, onBeforeDelete: o }) {
  const i = new Set(t.map((h) => h.id)), s = [];
  for (const h of n) {
    if (h.deletable === !1)
      continue;
    const p = i.has(h.id), v = !p && h.parentId && s.find((m) => m.id === h.parentId);
    (p || v) && s.push(h);
  }
  const a = new Set(e.map((h) => h.id)), l = r.filter((h) => h.deletable !== !1), u = yb(s, l);
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
const $o = (t, e = 0, n = 1) => Math.min(Math.max(t, e), n), Gr = (t = { x: 0, y: 0 }, e, n) => ({
  x: $o(t.x, e[0][0], e[1][0] - (n?.width ?? 0)),
  y: $o(t.y, e[0][1], e[1][1] - (n?.height ?? 0))
});
function Sp(t, e, n) {
  const { width: r, height: o } = Mr(n), { x: i, y: s } = n.internals.positionAbsolute;
  return Gr(t, [
    [i, s],
    [i + r, s + o]
  ], e);
}
const Dc = (t, e, n) => t < e ? $o(Math.abs(t - e), 1, e) / e : t > n ? -$o(Math.abs(t - n), 1, e) / e : 0, _p = (t, e, n = 15, r = 40) => {
  const o = Dc(t.x, r, e.width - r) * n, i = Dc(t.y, r, e.height - r) * n;
  return [o, i];
}, pa = (t, e) => ({
  x: Math.min(t.x, e.x),
  y: Math.min(t.y, e.y),
  x2: Math.max(t.x2, e.x2),
  y2: Math.max(t.y2, e.y2)
}), ll = ({ x: t, y: e, width: n, height: r }) => ({
  x: t,
  y: e,
  x2: t + n,
  y2: e + r
}), fa = ({ x: t, y: e, x2: n, y2: r }) => ({
  x: t,
  y: e,
  width: n - t,
  height: r - e
}), So = (t, e = [0, 0]) => {
  const { x: n, y: r } = hu(t) ? t.internals.positionAbsolute : $i(t, e);
  return {
    x: n,
    y: r,
    width: t.measured?.width ?? t.width ?? t.initialWidth ?? 0,
    height: t.measured?.height ?? t.height ?? t.initialHeight ?? 0
  };
}, Os = (t, e = [0, 0]) => {
  const { x: n, y: r } = hu(t) ? t.internals.positionAbsolute : $i(t, e);
  return {
    x: n,
    y: r,
    x2: n + (t.measured?.width ?? t.width ?? t.initialWidth ?? 0),
    y2: r + (t.measured?.height ?? t.height ?? t.initialHeight ?? 0)
  };
}, Pp = (t, e) => fa(pa(ll(t), ll(e))), ci = (t, e) => {
  const n = Math.max(0, Math.min(t.x + t.width, e.x + e.width) - Math.max(t.x, e.x)), r = Math.max(0, Math.min(t.y + t.height, e.y + e.height) - Math.max(t.y, e.y));
  return Math.ceil(n * r);
}, Vc = (t) => Gn(t.width) && Gn(t.height) && Gn(t.x) && Gn(t.y), Gn = (t) => !isNaN(t) && isFinite(t), kb = (t, e) => {
}, _i = (t, e = [1, 1]) => ({
  x: e[0] * Math.round(t.x / e[0]),
  y: e[1] * Math.round(t.y / e[1])
}), Pi = ({ x: t, y: e }, [n, r, o], i = !1, s = [1, 1]) => {
  const a = {
    x: (t - n) / o,
    y: (e - r) / o
  };
  return i ? _i(a, s) : a;
}, Ns = ({ x: t, y: e }, [n, r, o]) => ({
  x: t * o + n,
  y: e * o + r
});
function uo(t, e) {
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
function Cb(t, e, n) {
  if (typeof t == "string" || typeof t == "number") {
    const r = uo(t, n), o = uo(t, e);
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
    const r = uo(t.top ?? t.y ?? 0, n), o = uo(t.bottom ?? t.y ?? 0, n), i = uo(t.left ?? t.x ?? 0, e), s = uo(t.right ?? t.x ?? 0, e);
    return { top: r, right: s, bottom: o, left: i, x: i + s, y: r + o };
  }
  return { top: 0, right: 0, bottom: 0, left: 0, x: 0, y: 0 };
}
function $b(t, e, n, r, o, i) {
  const { x: s, y: a } = Ns(t, [e, n, r]), { x: l, y: u } = Ns({ x: t.x + t.width, y: t.y + t.height }, [e, n, r]), d = o - l, h = i - u;
  return {
    left: Math.floor(s),
    top: Math.floor(a),
    right: Math.floor(d),
    bottom: Math.floor(h)
  };
}
const fu = (t, e, n, r, o, i) => {
  const s = Cb(i, e, n), a = (e - s.x) / t.width, l = (n - s.y) / t.height, u = Math.min(a, l), d = $o(u, r, o), h = t.x + t.width / 2, p = t.y + t.height / 2, v = e / 2 - h * d, m = n / 2 - p * d, y = $b(t, v, m, d, e, n), w = {
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
}, Rr = () => typeof navigator < "u" && navigator?.userAgent?.indexOf("Mac") >= 0;
function _o(t) {
  return t != null && t !== "parent";
}
function Mr(t) {
  return {
    width: t.measured?.width ?? t.width ?? t.initialWidth ?? 0,
    height: t.measured?.height ?? t.height ?? t.initialHeight ?? 0
  };
}
function Op(t) {
  return (t.measured?.width ?? t.width ?? t.initialWidth) !== void 0 && (t.measured?.height ?? t.height ?? t.initialHeight) !== void 0;
}
function Sb(t, e = { width: 0, height: 0 }, n, r, o) {
  const i = { ...t }, s = r.get(n);
  if (s) {
    const a = s.origin || o;
    i.x += s.internals.positionAbsolute.x - (e.width ?? 0) * a[0], i.y += s.internals.positionAbsolute.y - (e.height ?? 0) * a[1];
  }
  return i;
}
function _b(t) {
  return { ...pb, ...t || {} };
}
function Ta(t, { snapGrid: e = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: i, y: s } = mn(t), a = Pi({ x: i - (o?.left ?? 0), y: s - (o?.top ?? 0) }, r), { x: l, y: u } = n ? _i(a, e) : a;
  return {
    xSnapped: l,
    ySnapped: u,
    ...a
  };
}
const Np = (t) => ({
  width: t.offsetWidth,
  height: t.offsetHeight
}), Ep = (t) => t?.getRootNode?.() || window?.document, Pb = ["INPUT", "SELECT", "TEXTAREA"];
function zp(t) {
  const e = t.composedPath?.()?.[0] || t.target;
  return e?.nodeType !== 1 ? !1 : Pb.includes(e.nodeName) || e.hasAttribute("contenteditable") || !!e.closest(".nokey");
}
const Mp = (t) => "clientX" in t, mn = (t, e) => {
  const n = Mp(t), r = n ? t.clientX : t.touches?.[0].clientX, o = n ? t.clientY : t.touches?.[0].clientY;
  return {
    x: r - (e?.left ?? 0),
    y: o - (e?.top ?? 0)
  };
}, Hc = (t, e, n, r, o) => {
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
      ...Np(s)
    };
  });
};
function Ob({ sourceX: t, sourceY: e, targetX: n, targetY: r, sourceControlX: o, sourceControlY: i, targetControlX: s, targetControlY: a }) {
  const l = t * 0.125 + o * 0.375 + s * 0.375 + n * 0.125, u = e * 0.125 + i * 0.375 + a * 0.375 + r * 0.125, d = Math.abs(l - t), h = Math.abs(u - e);
  return [l, u, d, h];
}
function ji(t, e) {
  return t >= 0 ? 0.5 * t : e * 25 * Math.sqrt(-t);
}
function Lc({ pos: t, x1: e, y1: n, x2: r, y2: o, c: i }) {
  switch (t) {
    case _e.Left:
      return [e - ji(e - r, i), n];
    case _e.Right:
      return [e + ji(r - e, i), n];
    case _e.Top:
      return [e, n - ji(n - o, i)];
    case _e.Bottom:
      return [e, n + ji(o - n, i)];
  }
}
function Tp({ sourceX: t, sourceY: e, sourcePosition: n = _e.Bottom, targetX: r, targetY: o, targetPosition: i = _e.Top, curvature: s = 0.25 }) {
  const [a, l] = Lc({
    pos: n,
    x1: t,
    y1: e,
    x2: r,
    y2: o,
    c: s
  }), [u, d] = Lc({
    pos: i,
    x1: r,
    y1: o,
    x2: t,
    y2: e,
    c: s
  }), [h, p, v, m] = Ob({
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
function Ap({ sourceX: t, sourceY: e, targetX: n, targetY: r }) {
  const o = Math.abs(n - t) / 2, i = n < t ? n + o : n - o, s = Math.abs(r - e) / 2, a = r < e ? r + s : r - s;
  return [i, a, o, s];
}
function Nb({ sourceNode: t, targetNode: e, selected: n = !1, zIndex: r, elevateOnSelect: o = !1 }) {
  if (r !== void 0)
    return r;
  const i = o && n ? 1e3 : 0, s = Math.max(t.parentId || o && t.selected ? t.internals.z : 0, e.parentId || o && e.selected ? e.internals.z : 0);
  return i + s;
}
function Eb({ sourceNode: t, targetNode: e, width: n, height: r, transform: o }) {
  const i = pa(Os(t), Os(e));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const s = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return ci(s, fa(i)) > 0;
}
const zb = ({ source: t, sourceHandle: e, target: n, targetHandle: r }) => `xy-edge__${t}${e || ""}-${n}${r || ""}`, Mb = (t, e) => e.some((n) => n.source === t.source && n.target === t.target && (n.sourceHandle === t.sourceHandle || !n.sourceHandle && !t.sourceHandle) && (n.targetHandle === t.targetHandle || !n.targetHandle && !t.targetHandle)), Tb = (t, e) => {
  if (!t.source || !t.target)
    return e;
  let n;
  return Cp(t) ? n = { ...t } : n = {
    ...t,
    id: zb(t)
  }, Mb(n, e) ? e : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, e.concat(n));
};
function Dp({ sourceX: t, sourceY: e, targetX: n, targetY: r }) {
  const [o, i, s, a] = Ap({
    sourceX: t,
    sourceY: e,
    targetX: n,
    targetY: r
  });
  return [`M ${t},${e}L ${n},${r}`, o, i, s, a];
}
const Ic = {
  [_e.Left]: { x: -1, y: 0 },
  [_e.Right]: { x: 1, y: 0 },
  [_e.Top]: { x: 0, y: -1 },
  [_e.Bottom]: { x: 0, y: 1 }
}, Ab = ({ source: t, sourcePosition: e = _e.Bottom, target: n }) => e === _e.Left || e === _e.Right ? t.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : t.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, Rc = (t, e) => Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
function Db({ source: t, sourcePosition: e = _e.Bottom, target: n, targetPosition: r = _e.Top, center: o, offset: i, stepPosition: s }) {
  const a = Ic[e], l = Ic[r], u = { x: t.x + a.x * i, y: t.y + a.y * i }, d = { x: n.x + l.x * i, y: n.y + l.y * i }, h = Ab({
    source: u,
    sourcePosition: e,
    target: d
  }), p = h.x !== 0 ? "x" : "y", v = h[p];
  let m = [], y, w;
  const b = { x: 0, y: 0 }, k = { x: 0, y: 0 }, [, , P, C] = Ap({
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
    ], N = [
      { x: u.x, y: w },
      { x: d.x, y: w }
    ];
    a[p] === v ? m = p === "x" ? x : N : m = p === "x" ? N : x;
  } else {
    const x = [{ x: u.x, y: d.y }], N = [{ x: d.x, y: u.y }];
    if (p === "x" ? m = a.x === v ? N : x : m = a.y === v ? x : N, e === r) {
      const D = Math.abs(t[p] - n[p]);
      if (D <= i) {
        const _ = Math.min(i - 1, i - D);
        a[p] === v ? b[p] = (u[p] > t[p] ? -1 : 1) * _ : k[p] = (d[p] > n[p] ? -1 : 1) * _;
      }
    }
    if (e !== r) {
      const D = p === "x" ? "y" : "x", _ = a[p] === l[D], T = u[D] > d[D], S = u[D] < d[D];
      (a[p] === 1 && (!_ && T || _ && S) || a[p] !== 1 && (!_ && S || _ && T)) && (m = p === "x" ? x : N);
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
  ], y, w, P, C];
}
function Vb(t, e, n, r) {
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
function gu({ sourceX: t, sourceY: e, sourcePosition: n = _e.Bottom, targetX: r, targetY: o, targetPosition: i = _e.Top, borderRadius: s = 5, centerX: a, centerY: l, offset: u = 20, stepPosition: d = 0.5 }) {
  const [h, p, v, m, y] = Db({
    source: { x: t, y: e },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: a, y: l },
    offset: u,
    stepPosition: d
  });
  return [h.reduce((w, b, k) => {
    let P = "";
    return k > 0 && k < h.length - 1 ? P = Vb(h[k - 1], b, h[k + 1], s) : P = `${k === 0 ? "M" : "L"}${b.x} ${b.y}`, w += P, w;
  }, ""), p, v, m, y];
}
function Bc(t) {
  return t && !!(t.internals.handleBounds || t.handles?.length) && !!(t.measured.width || t.width || t.initialWidth);
}
function Hb(t) {
  const { sourceNode: e, targetNode: n } = t;
  if (!Bc(e) || !Bc(n))
    return null;
  const r = e.internals.handleBounds || Kc(e.handles), o = n.internals.handleBounds || Kc(n.handles), i = Fc(r?.source ?? [], t.sourceHandle), s = Fc(
    // when connection type is loose we can define all handles as sources and connect source -> source
    t.connectionMode === Co.Strict ? o?.target ?? [] : (o?.target ?? []).concat(o?.source ?? []),
    t.targetHandle
  );
  if (!i || !s)
    return t.onError?.("008", li.error008(i ? "target" : "source", {
      id: t.id,
      sourceHandle: t.sourceHandle,
      targetHandle: t.targetHandle
    })), null;
  const a = i?.position || _e.Bottom, l = s?.position || _e.Top, u = di(e, i, a), d = di(n, s, l);
  return {
    sourceX: u.x,
    sourceY: u.y,
    targetX: d.x,
    targetY: d.y,
    sourcePosition: a,
    targetPosition: l
  };
}
function Kc(t) {
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
function di(t, e, n = _e.Left, r = !1) {
  const o = (e?.x ?? 0) + t.internals.positionAbsolute.x, i = (e?.y ?? 0) + t.internals.positionAbsolute.y, { width: s, height: a } = e ?? Mr(t);
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
function Fc(t, e) {
  return t && (e ? t.find((n) => n.id === e) : t[0]) || null;
}
function ul(t, e) {
  return t ? typeof t == "string" ? t : `${e ? `${e}__` : ""}${Object.keys(t).sort().map((n) => `${n}=${t[n]}`).join("&")}` : "";
}
function Lb(t, { id: e, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const i = /* @__PURE__ */ new Set();
  return t.reduce((s, a) => ([a.markerStart || r, a.markerEnd || o].forEach((l) => {
    if (l && typeof l == "object") {
      const u = ul(l, e);
      i.has(u) || (s.push({ id: u, color: l.color || n, ...l }), i.add(u));
    }
  }), s), []).sort((s, a) => s.id.localeCompare(a.id));
}
function Ib(t, e, n, r, o) {
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
const Vp = 1e3, Rb = 10, vu = {
  nodeOrigin: [0, 0],
  nodeExtent: sl,
  elevateNodesOnSelect: !0,
  defaults: {}
}, Bb = {
  ...vu,
  checkEquality: !0
};
function mu(t, e) {
  const n = { ...t };
  for (const r in e)
    e[r] !== void 0 && (n[r] = e[r]);
  return n;
}
function Kb(t, e, n) {
  const r = mu(vu, n);
  for (const o of t.values())
    if (o.parentId)
      yu(o, t, e, r);
    else {
      const i = $i(o, r.nodeOrigin), s = _o(o.extent) ? o.extent : r.nodeExtent, a = Gr(i, s, Mr(o));
      o.internals.positionAbsolute = a;
    }
}
function Fb(t, e) {
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
function jb(t, e, n, r) {
  const o = mu(Bb, r);
  let i = { i: -1 }, s = t.length > 0;
  const a = new Map(e), l = o?.elevateNodesOnSelect ? Vp : 0;
  e.clear(), n.clear();
  for (const u of t) {
    let d = a.get(u.id);
    if (o.checkEquality && u === d?.internals.userNode)
      e.set(u.id, d);
    else {
      const h = $i(u, o.nodeOrigin), p = _o(u.extent) ? u.extent : o.nodeExtent, v = Gr(h, p, Mr(u));
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
          handleBounds: Fb(u, d),
          z: Hp(u, l),
          userNode: u
        }
      }, e.set(u.id, d);
    }
    (d.measured === void 0 || d.measured.width === void 0 || d.measured.height === void 0) && !d.hidden && (s = !1), u.parentId && yu(d, e, n, r, i);
  }
  return s;
}
function Zb(t, e) {
  if (!t.parentId)
    return;
  const n = e.get(t.parentId);
  n ? n.set(t.id, t) : e.set(t.parentId, /* @__PURE__ */ new Map([[t.id, t]]));
}
function yu(t, e, n, r, o) {
  const { elevateNodesOnSelect: i, nodeOrigin: s, nodeExtent: a } = mu(vu, r), l = t.parentId, u = e.get(l);
  if (!u) {
    console.warn(`Parent node ${l} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  Zb(t, n), o && !u.parentId && u.internals.rootParentIndex === void 0 && (u.internals.rootParentIndex = ++o.i, u.internals.z = u.internals.z + o.i * Rb), o && u.internals.rootParentIndex !== void 0 && (o.i = u.internals.rootParentIndex);
  const d = i ? Vp : 0, { x: h, y: p, z: v } = Wb(t, u, s, a, d), { positionAbsolute: m } = t.internals, y = h !== m.x || p !== m.y;
  (y || v !== t.internals.z) && e.set(t.id, {
    ...t,
    internals: {
      ...t.internals,
      positionAbsolute: y ? { x: h, y: p } : m,
      z: v
    }
  });
}
function Hp(t, e) {
  return (Gn(t.zIndex) ? t.zIndex : 0) + (t.selected ? e : 0);
}
function Wb(t, e, n, r, o) {
  const { x: i, y: s } = e.internals.positionAbsolute, a = Mr(t), l = $i(t, n), u = _o(t.extent) ? Gr(l, t.extent, a) : l;
  let d = Gr({ x: i + u.x, y: s + u.y }, r, a);
  t.extent === "parent" && (d = Sp(d, a, e));
  const h = Hp(t, o), p = e.internals.z ?? 0;
  return {
    x: d.x,
    y: d.y,
    z: p >= h ? p + 1 : h
  };
}
function qb(t, e, n, r = [0, 0]) {
  const o = [], i = /* @__PURE__ */ new Map();
  for (const s of t) {
    const a = e.get(s.parentId);
    if (!a)
      continue;
    const l = i.get(s.parentId)?.expandedRect ?? So(a), u = Pp(l, s.rect);
    i.set(s.parentId, { expandedRect: u, parent: a });
  }
  return i.size > 0 && i.forEach(({ expandedRect: s, parent: a }, l) => {
    const u = a.internals.positionAbsolute, d = Mr(a), h = a.origin ?? r, p = s.x < u.x ? Math.round(Math.abs(u.x - s.x)) : 0, v = s.y < u.y ? Math.round(Math.abs(u.y - s.y)) : 0, m = Math.max(d.width, Math.round(s.width)), y = Math.max(d.height, Math.round(s.height)), w = (m - d.width) * h[0], b = (y - d.height) * h[1];
    (p > 0 || v > 0 || w || b) && (o.push({
      id: l,
      type: "position",
      position: {
        x: a.position.x - p + w,
        y: a.position.y - v + b
      }
    }), n.get(l)?.forEach((k) => {
      t.some((P) => P.id === k.id) || o.push({
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
function Xb(t, e, n, r, o, i) {
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
    const m = Np(p.nodeElement), y = v.measured.width !== m.width || v.measured.height !== m.height;
    if (m.width && m.height && (y || !v.internals.handleBounds || p.force)) {
      const w = p.nodeElement.getBoundingClientRect(), b = _o(v.extent) ? v.extent : i;
      let { positionAbsolute: k } = v.internals;
      v.parentId && v.extent === "parent" ? k = Sp(k, m, e.get(v.parentId)) : b && (k = Gr(k, b, m));
      const P = {
        ...v,
        measured: m,
        internals: {
          ...v.internals,
          positionAbsolute: k,
          handleBounds: {
            source: Hc("source", p.nodeElement, w, d, v.id),
            target: Hc("target", p.nodeElement, w, d, v.id)
          }
        }
      };
      e.set(v.id, P), v.parentId && yu(P, e, n, { nodeOrigin: o }), a = !0, y && (l.push({
        id: v.id,
        type: "dimensions",
        dimensions: m
      }), v.expandParent && v.parentId && h.push({
        id: v.id,
        parentId: v.parentId,
        rect: So(P, o)
      }));
    }
  }
  if (h.length > 0) {
    const p = qb(h, e, n, o);
    l.push(...p);
  }
  return { changes: l, updatedInternals: a };
}
async function Yb({ delta: t, panZoom: e, transform: n, translateExtent: r, width: o, height: i }) {
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
function jc(t, e, n, r, o, i) {
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
function Ub(t, e, n) {
  t.clear(), e.clear();
  for (const r of n) {
    const { source: o, target: i, sourceHandle: s = null, targetHandle: a = null } = r, l = { edgeId: r.id, source: o, target: i, sourceHandle: s, targetHandle: a }, u = `${o}-${s}--${i}-${a}`, d = `${i}-${a}--${o}-${s}`;
    jc("source", l, d, t, o, s), jc("target", l, u, t, i, a), e.set(r.id, r);
  }
}
function Gb(t, e) {
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
function Lp(t, e) {
  if (!t.parentId)
    return !1;
  const n = e.get(t.parentId);
  return n ? n.selected ? !0 : Lp(n, e) : !1;
}
function Zc(t, e, n) {
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
function Jb(t, e, n, r) {
  const o = /* @__PURE__ */ new Map();
  for (const [i, s] of t)
    if ((s.selected || s.id === r) && (!s.parentId || !Lp(s, t)) && (s.draggable || e && typeof s.draggable > "u")) {
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
function Aa({ nodeId: t, dragItems: e, nodeLookup: n, dragging: r = !0 }) {
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
function Qb({ dragItems: t, snapGrid: e, x: n, y: r }) {
  const o = t.values().next().value;
  if (!o)
    return null;
  const i = {
    x: n - o.distance.x,
    y: r - o.distance.y
  }, s = _i(i, e);
  return {
    x: s.x - i.x,
    y: s.y - i.y
  };
}
function e2({ onNodeMouseDown: t, getStoreItems: e, onDragStart: n, onDrag: r, onDragStop: o }) {
  let i = { x: null, y: null }, s = 0, a = /* @__PURE__ */ new Map(), l = !1, u = { x: 0, y: 0 }, d = null, h = !1, p = null, v = !1, m = !1, y = null;
  function w({ noDragClassName: k, handleSelector: P, domNode: C, isSelectable: x, nodeId: N, nodeClickDistance: V = 0 }) {
    p = an(C);
    function H({ x: _, y: T }) {
      const { nodeLookup: S, nodeExtent: O, snapGrid: M, snapToGrid: B, nodeOrigin: X, onNodeDrag: U, onSelectionDrag: E, onError: Y, updateNodePositions: ee } = e();
      i = { x: _, y: T };
      let K = !1;
      const j = a.size > 1, W = j && O ? ll(Si(a)) : null, J = j && B ? Qb({
        dragItems: a,
        snapGrid: M,
        x: _,
        y: T
      }) : null;
      for (const [re, L] of a) {
        if (!S.has(re))
          continue;
        let te = { x: _ - L.distance.x, y: T - L.distance.y };
        B && (te = J ? {
          x: Math.round(te.x + J.x),
          y: Math.round(te.y + J.y)
        } : _i(te, M));
        let fe = null;
        if (j && O && !L.extent && W) {
          const { positionAbsolute: ce } = L.internals, ve = ce.x - W.x + O[0][0], ke = ce.x + L.measured.width - W.x2 + O[1][0], we = ce.y - W.y + O[0][1], he = ce.y + L.measured.height - W.y2 + O[1][1];
          fe = [
            [ve, we],
            [ke, he]
          ];
        }
        const { position: ue, positionAbsolute: oe } = $p({
          nodeId: re,
          nextPosition: te,
          nodeLookup: S,
          nodeExtent: fe || O,
          nodeOrigin: X,
          onError: Y
        });
        K = K || L.position.x !== ue.x || L.position.y !== ue.y, L.position = ue, L.internals.positionAbsolute = oe;
      }
      if (m = m || K, !!K && (ee(a, !0), y && (r || U || !N && E))) {
        const [re, L] = Aa({
          nodeId: N,
          dragItems: a,
          nodeLookup: S
        });
        r?.(y, a, re, L), U?.(y, re, L), N || E?.(y, L);
      }
    }
    async function I() {
      if (!d)
        return;
      const { transform: _, panBy: T, autoPanSpeed: S, autoPanOnNodeDrag: O } = e();
      if (!O) {
        l = !1, cancelAnimationFrame(s);
        return;
      }
      const [M, B] = _p(u, d, S);
      (M !== 0 || B !== 0) && (i.x = (i.x ?? 0) - M / _[2], i.y = (i.y ?? 0) - B / _[2], await T({ x: M, y: B }) && H(i)), s = requestAnimationFrame(I);
    }
    function A(_) {
      const { nodeLookup: T, multiSelectionActive: S, nodesDraggable: O, transform: M, snapGrid: B, snapToGrid: X, selectNodesOnDrag: U, onNodeDragStart: E, onSelectionDragStart: Y, unselectNodesAndEdges: ee } = e();
      h = !0, (!U || !x) && !S && N && (T.get(N)?.selected || ee()), x && U && N && t?.(N);
      const K = Ta(_.sourceEvent, { transform: M, snapGrid: B, snapToGrid: X, containerBounds: d });
      if (i = K, a = Jb(T, O, K, N), a.size > 0 && (n || E || !N && Y)) {
        const [j, W] = Aa({
          nodeId: N,
          dragItems: a,
          nodeLookup: T
        });
        n?.(_.sourceEvent, a, j, W), E?.(_.sourceEvent, j, W), N || Y?.(_.sourceEvent, W);
      }
    }
    const D = by().clickDistance(V).on("start", (_) => {
      const { domNode: T, nodeDragThreshold: S, transform: O, snapGrid: M, snapToGrid: B } = e();
      d = T?.getBoundingClientRect() || null, v = !1, m = !1, y = _.sourceEvent, S === 0 && A(_), i = Ta(_.sourceEvent, { transform: O, snapGrid: M, snapToGrid: B, containerBounds: d }), u = mn(_.sourceEvent, d);
    }).on("drag", (_) => {
      const { autoPanOnNodeDrag: T, transform: S, snapGrid: O, snapToGrid: M, nodeDragThreshold: B, nodeLookup: X } = e(), U = Ta(_.sourceEvent, { transform: S, snapGrid: O, snapToGrid: M, containerBounds: d });
      if (y = _.sourceEvent, (_.sourceEvent.type === "touchmove" && _.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      N && !X.has(N)) && (v = !0), !v) {
        if (!l && T && h && (l = !0, I()), !h) {
          const E = mn(_.sourceEvent, d), Y = E.x - u.x, ee = E.y - u.y;
          Math.sqrt(Y * Y + ee * ee) > B && A(_);
        }
        (i.x !== U.xSnapped || i.y !== U.ySnapped) && a && h && (u = mn(_.sourceEvent, d), H(U));
      }
    }).on("end", (_) => {
      if (!(!h || v) && (l = !1, h = !1, cancelAnimationFrame(s), a.size > 0)) {
        const { nodeLookup: T, updateNodePositions: S, onNodeDragStop: O, onSelectionDragStop: M } = e();
        if (m && (S(a, !1), m = !1), o || O || !N && M) {
          const [B, X] = Aa({
            nodeId: N,
            dragItems: a,
            nodeLookup: T,
            dragging: !1
          });
          o?.(_.sourceEvent, a, B, X), O?.(_.sourceEvent, B, X), N || M?.(_.sourceEvent, X);
        }
      }
    }).filter((_) => {
      const T = _.target;
      return !_.button && (!k || !Zc(T, `.${k}`, C)) && (!P || Zc(T, P, C));
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
function t2(t, e, n) {
  const r = [], o = {
    x: t.x - n,
    y: t.y - n,
    width: n * 2,
    height: n * 2
  };
  for (const i of e.values())
    ci(o, So(i)) > 0 && r.push(i);
  return r;
}
const n2 = 250;
function r2(t, e, n, r) {
  let o = [], i = 1 / 0;
  const s = t2(t, n, e + n2);
  for (const a of s) {
    const l = [...a.internals.handleBounds?.source ?? [], ...a.internals.handleBounds?.target ?? []];
    for (const u of l) {
      if (r.nodeId === u.nodeId && r.type === u.type && r.id === u.id)
        continue;
      const { x: d, y: h } = di(a, u, u.position, !0), p = Math.sqrt(Math.pow(d - t.x, 2) + Math.pow(h - t.y, 2));
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
function Ip(t, e, n, r, o, i = !1) {
  const s = r.get(t);
  if (!s)
    return null;
  const a = o === "strict" ? s.internals.handleBounds?.[e] : [...s.internals.handleBounds?.source ?? [], ...s.internals.handleBounds?.target ?? []], l = (n ? a?.find((u) => u.id === n) : a?.[0]) ?? null;
  return l && i ? { ...l, ...di(s, l, l.position, !0) } : l;
}
function Rp(t, e) {
  return t || (e?.classList.contains("target") ? "target" : e?.classList.contains("source") ? "source" : null);
}
function o2(t, e) {
  let n = null;
  return e ? n = !0 : t && !e && (n = !1), n;
}
const Bp = () => !0;
function i2(t, { connectionMode: e, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: s, domNode: a, nodeLookup: l, lib: u, autoPanOnConnect: d, flowId: h, panBy: p, cancelConnection: v, onConnectStart: m, onConnect: y, onConnectEnd: w, isValidConnection: b = Bp, onReconnectEnd: k, updateConnection: P, getTransform: C, getFromHandle: x, autoPanSpeed: N, dragThreshold: V = 1, handleDomNode: H }) {
  const I = Ep(t.target);
  let A = 0, D;
  const { x: _, y: T } = mn(t), S = Rp(i, H), O = a?.getBoundingClientRect();
  let M = !1;
  if (!O || !S)
    return;
  const B = Ip(o, S, r, l, e);
  if (!B)
    return;
  let X = mn(t, O), U = !1, E = null, Y = !1, ee = null;
  function K() {
    if (!d || !O)
      return;
    const [fe, ue] = _p(X, O, N);
    p({ x: fe, y: ue }), A = requestAnimationFrame(K);
  }
  const j = {
    ...B,
    nodeId: o,
    type: S,
    position: B.position
  }, W = l.get(o);
  let J = {
    inProgress: !0,
    isValid: null,
    from: di(W, j, _e.Left, !0),
    fromHandle: j,
    fromPosition: j.position,
    fromNode: W,
    to: X,
    toHandle: null,
    toPosition: Tc[j.position],
    toNode: null,
    pointer: X
  };
  function re() {
    M = !0, P(J), m?.(t, { nodeId: o, handleId: r, handleType: S });
  }
  V === 0 && re();
  function L(fe) {
    if (!M) {
      const { x: ve, y: ke } = mn(fe), we = ve - _, he = ke - T;
      if (!(we * we + he * he > V * V))
        return;
      re();
    }
    if (!x() || !j) {
      te(fe);
      return;
    }
    const ue = C();
    X = mn(fe, O), D = r2(Pi(X, ue, !1, [1, 1]), n, l, j), U || (K(), U = !0);
    const oe = Kp(fe, {
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
    ee = oe.handleDomNode, E = oe.connection, Y = o2(!!D, oe.isValid);
    const ce = {
      // from stays the same
      ...J,
      isValid: Y,
      to: oe.toHandle && Y ? Ns({ x: oe.toHandle.x, y: oe.toHandle.y }, ue) : X,
      toHandle: oe.toHandle,
      toPosition: Y && oe.toHandle ? oe.toHandle.position : Tc[j.position],
      toNode: oe.toHandle ? l.get(oe.toHandle.nodeId) : null,
      pointer: X
    };
    P(ce), J = ce;
  }
  function te(fe) {
    if (!("touches" in fe && fe.touches.length > 0)) {
      if (M) {
        (D || ee) && E && Y && y?.(E);
        const { inProgress: ue, ...oe } = J, ce = {
          ...oe,
          toPosition: J.toHandle ? J.toPosition : null
        };
        w?.(fe, ce), i && k?.(fe, ce);
      }
      v(), cancelAnimationFrame(A), U = !1, Y = !1, E = null, ee = null, I.removeEventListener("mousemove", L), I.removeEventListener("mouseup", te), I.removeEventListener("touchmove", L), I.removeEventListener("touchend", te);
    }
  }
  I.addEventListener("mousemove", L), I.addEventListener("mouseup", te), I.addEventListener("touchmove", L), I.addEventListener("touchend", te);
}
function Kp(t, { handle: e, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: s, lib: a, flowId: l, isValidConnection: u = Bp, nodeLookup: d }) {
  const h = i === "target", p = e ? s.querySelector(`.${a}-flow__handle[data-id="${l}-${e?.nodeId}-${e?.id}-${e?.type}"]`) : null, { x: v, y: m } = mn(t), y = s.elementFromPoint(v, m), w = y?.classList.contains(`${a}-flow__handle`) ? y : p, b = {
    handleDomNode: w,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (w) {
    const k = Rp(void 0, w), P = w.getAttribute("data-nodeid"), C = w.getAttribute("data-handleid"), x = w.classList.contains("connectable"), N = w.classList.contains("connectableend");
    if (!P || !k)
      return b;
    const V = {
      source: h ? P : r,
      sourceHandle: h ? C : o,
      target: h ? r : P,
      targetHandle: h ? o : C
    };
    b.connection = V;
    const H = x && N && (n === Co.Strict ? h && k === "source" || !h && k === "target" : P !== r || C !== o);
    b.isValid = H && u(V), b.toHandle = Ip(P, k, C, d, n, !0);
  }
  return b;
}
const Wc = {
  onPointerDown: i2,
  isValid: Kp
};
function s2({ domNode: t, panZoom: e, getTransform: n, getViewScale: r }) {
  const o = an(t);
  function i({ translateExtent: a, width: l, height: u, zoomStep: d = 1, pannable: h = !0, zoomable: p = !0, inversePan: v = !1 }) {
    const m = (P) => {
      if (P.sourceEvent.type !== "wheel" || !e)
        return;
      const C = n(), x = P.sourceEvent.ctrlKey && Rr() ? 10 : 1, N = -P.sourceEvent.deltaY * (P.sourceEvent.deltaMode === 1 ? 0.05 : P.sourceEvent.deltaMode ? 1 : 2e-3) * d, V = C[2] * Math.pow(2, N * x);
      e.scaleTo(V);
    };
    let y = [0, 0];
    const w = (P) => {
      (P.sourceEvent.type === "mousedown" || P.sourceEvent.type === "touchstart") && (y = [
        P.sourceEvent.clientX ?? P.sourceEvent.touches[0].clientX,
        P.sourceEvent.clientY ?? P.sourceEvent.touches[0].clientY
      ]);
    }, b = (P) => {
      const C = n();
      if (P.sourceEvent.type !== "mousemove" && P.sourceEvent.type !== "touchmove" || !e)
        return;
      const x = [
        P.sourceEvent.clientX ?? P.sourceEvent.touches[0].clientX,
        P.sourceEvent.clientY ?? P.sourceEvent.touches[0].clientY
      ], N = [x[0] - y[0], x[1] - y[1]];
      y = x;
      const V = r() * Math.max(C[2], Math.log(C[2])) * (v ? -1 : 1), H = {
        x: C[0] - N[0] * V,
        y: C[1] - N[1] * V
      }, I = [
        [0, 0],
        [l, u]
      ];
      e.setViewportConstrained({
        x: H.x,
        y: H.y,
        zoom: C[2]
      }, I, a);
    }, k = xp().on("start", w).on("zoom", h ? b : null).on("zoom.wheel", p ? m : null);
    o.call(k, {});
  }
  function s() {
    o.on("zoom", null);
  }
  return {
    update: i,
    destroy: s,
    pointer: fn
  };
}
const ga = (t) => ({
  x: t.x,
  y: t.y,
  zoom: t.k
}), Da = ({ x: t, y: e, zoom: n }) => ha.translate(t, e).scale(n), po = (t, e) => t.target.closest(`.${e}`), Fp = (t, e) => e === 2 && Array.isArray(t) && t.includes(2), a2 = (t) => ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2, Va = (t, e = 0, n = a2, r = () => {
}) => {
  const o = typeof e == "number" && e > 0;
  return o || r(), o ? t.transition().duration(e).ease(n).on("end", r) : t;
}, jp = (t) => {
  const e = t.ctrlKey && Rr() ? 10 : 1;
  return -t.deltaY * (t.deltaMode === 1 ? 0.05 : t.deltaMode ? 1 : 2e-3) * e;
};
function l2({ zoomPanValues: t, noWheelClassName: e, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: s, onPanZoomStart: a, onPanZoom: l, onPanZoomEnd: u }) {
  return (d) => {
    if (po(d, e))
      return d.ctrlKey && d.preventDefault(), !1;
    d.preventDefault(), d.stopImmediatePropagation();
    const h = n.property("__zoom").k || 1;
    if (d.ctrlKey && s) {
      const w = fn(d), b = jp(d), k = h * Math.pow(2, b);
      r.scaleTo(n, k, w, d);
      return;
    }
    const p = d.deltaMode === 1 ? 20 : 1;
    let v = o === jr.Vertical ? 0 : d.deltaX * p, m = o === jr.Horizontal ? 0 : d.deltaY * p;
    !Rr() && d.shiftKey && o !== jr.Vertical && (v = d.deltaY * p, m = 0), r.translateBy(
      n,
      -(v / h) * i,
      -(m / h) * i,
      // @ts-ignore
      { internal: !0 }
    );
    const y = ga(n.property("__zoom"));
    clearTimeout(t.panScrollTimeout), t.isPanScrolling ? (l?.(d, y), t.panScrollTimeout = setTimeout(() => {
      u?.(d, y), t.isPanScrolling = !1;
    }, 150)) : (t.isPanScrolling = !0, a?.(d, y));
  };
}
function u2({ noWheelClassName: t, preventScrolling: e, d3ZoomHandler: n }) {
  return function(r, o) {
    const i = r.type === "wheel", s = !e && i && !r.ctrlKey, a = po(r, t);
    if (r.ctrlKey && i && a && r.preventDefault(), s || a)
      return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function c2({ zoomPanValues: t, onDraggingChange: e, onPanZoomStart: n }) {
  return (r) => {
    if (r.sourceEvent?.internal)
      return;
    const o = ga(r.transform);
    t.mouseButton = r.sourceEvent?.button || 0, t.isZoomingOrPanning = !0, t.prevViewport = o, r.sourceEvent?.type === "mousedown" && e(!0), n && n?.(r.sourceEvent, o);
  };
}
function d2({ zoomPanValues: t, panOnDrag: e, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (i) => {
    t.usedRightMouseButton = !!(n && Fp(e, t.mouseButton ?? 0)), i.sourceEvent?.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !i.sourceEvent?.internal && o?.(i.sourceEvent, ga(i.transform));
  };
}
function h2({ zoomPanValues: t, panOnDrag: e, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (s) => {
    if (!s.sourceEvent?.internal && (t.isZoomingOrPanning = !1, i && Fp(e, t.mouseButton ?? 0) && !t.usedRightMouseButton && s.sourceEvent && i(s.sourceEvent), t.usedRightMouseButton = !1, r(!1), o)) {
      const a = ga(s.transform);
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
function p2({ zoomActivationKeyPressed: t, zoomOnScroll: e, zoomOnPinch: n, panOnDrag: r, panOnScroll: o, zoomOnDoubleClick: i, userSelectionActive: s, noWheelClassName: a, noPanClassName: l, lib: u, connectionInProgress: d }) {
  return (h) => {
    const p = t || e, v = n && h.ctrlKey, m = h.type === "wheel";
    if (h.button === 1 && h.type === "mousedown" && (po(h, `${u}-flow__node`) || po(h, `${u}-flow__edge`)))
      return !0;
    if (!r && !p && !o && !i && !n || s || d && !m || po(h, a) && m || po(h, l) && (!m || o && m && !t) || !n && h.ctrlKey && m)
      return !1;
    if (!n && h.type === "touchstart" && h.touches?.length > 1)
      return h.preventDefault(), !1;
    if (!p && !o && !v && m || !r && (h.type === "mousedown" || h.type === "touchstart") || Array.isArray(r) && !r.includes(h.button) && h.type === "mousedown")
      return !1;
    const y = Array.isArray(r) && r.includes(h.button) || !h.button || h.button <= 1;
    return (!h.ctrlKey || m) && y;
  };
}
function f2({ domNode: t, minZoom: e, maxZoom: n, translateExtent: r, viewport: o, onPanZoom: i, onPanZoomStart: s, onPanZoomEnd: a, onDraggingChange: l }) {
  const u = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: {},
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, d = t.getBoundingClientRect(), h = xp().scaleExtent([e, n]).translateExtent(r), p = an(t).call(h);
  k({
    x: o.x,
    y: o.y,
    zoom: $o(o.zoom, e, n)
  }, [
    [0, 0],
    [d.width, d.height]
  ], r);
  const v = p.on("wheel.zoom"), m = p.on("dblclick.zoom");
  h.wheelDelta(jp);
  function y(D, _) {
    return p ? new Promise((T) => {
      h?.interpolate(_?.interpolate === "linear" ? Jo : os).transform(Va(p, _?.duration, _?.ease, () => T(!0)), D);
    }) : Promise.resolve(!1);
  }
  function w({ noWheelClassName: D, noPanClassName: _, onPaneContextMenu: T, userSelectionActive: S, panOnScroll: O, panOnDrag: M, panOnScrollMode: B, panOnScrollSpeed: X, preventScrolling: U, zoomOnPinch: E, zoomOnScroll: Y, zoomOnDoubleClick: ee, zoomActivationKeyPressed: K, lib: j, onTransformChange: W, connectionInProgress: J, paneClickDistance: re, selectionOnDrag: L }) {
    S && !u.isZoomingOrPanning && b();
    const te = O && !K && !S;
    h.clickDistance(L ? 1 / 0 : !Gn(re) || re < 0 ? 0 : re);
    const fe = te ? l2({
      zoomPanValues: u,
      noWheelClassName: D,
      d3Selection: p,
      d3Zoom: h,
      panOnScrollMode: B,
      panOnScrollSpeed: X,
      zoomOnPinch: E,
      onPanZoomStart: s,
      onPanZoom: i,
      onPanZoomEnd: a
    }) : u2({
      noWheelClassName: D,
      preventScrolling: U,
      d3ZoomHandler: v
    });
    if (p.on("wheel.zoom", fe, { passive: !1 }), !S) {
      const oe = c2({
        zoomPanValues: u,
        onDraggingChange: l,
        onPanZoomStart: s
      });
      h.on("start", oe);
      const ce = d2({
        zoomPanValues: u,
        panOnDrag: M,
        onPaneContextMenu: !!T,
        onPanZoom: i,
        onTransformChange: W
      });
      h.on("zoom", ce);
      const ve = h2({
        zoomPanValues: u,
        panOnDrag: M,
        panOnScroll: O,
        onPaneContextMenu: T,
        onPanZoomEnd: a,
        onDraggingChange: l
      });
      h.on("end", ve);
    }
    const ue = p2({
      zoomActivationKeyPressed: K,
      panOnDrag: M,
      zoomOnScroll: Y,
      panOnScroll: O,
      zoomOnDoubleClick: ee,
      zoomOnPinch: E,
      userSelectionActive: S,
      noPanClassName: _,
      noWheelClassName: D,
      lib: j,
      connectionInProgress: J
    });
    h.filter(ue), ee ? p.on("dblclick.zoom", m) : p.on("dblclick.zoom", null);
  }
  function b() {
    h.on("zoom", null);
  }
  async function k(D, _, T) {
    const S = Da(D), O = h?.constrain()(S, _, T);
    return O && await y(O), new Promise((M) => M(O));
  }
  async function P(D, _) {
    const T = Da(D);
    return await y(T, _), new Promise((S) => S(T));
  }
  function C(D) {
    if (p) {
      const _ = Da(D), T = p.property("__zoom");
      (T.k !== D.zoom || T.x !== D.x || T.y !== D.y) && h?.transform(p, _, null, { sync: !0 });
    }
  }
  function x() {
    const D = p ? bp(p.node()) : { x: 0, y: 0, k: 1 };
    return { x: D.x, y: D.y, zoom: D.k };
  }
  function N(D, _) {
    return p ? new Promise((T) => {
      h?.interpolate(_?.interpolate === "linear" ? Jo : os).scaleTo(Va(p, _?.duration, _?.ease, () => T(!0)), D);
    }) : Promise.resolve(!1);
  }
  function V(D, _) {
    return p ? new Promise((T) => {
      h?.interpolate(_?.interpolate === "linear" ? Jo : os).scaleBy(Va(p, _?.duration, _?.ease, () => T(!0)), D);
    }) : Promise.resolve(!1);
  }
  function H(D) {
    h?.scaleExtent(D);
  }
  function I(D) {
    h?.translateExtent(D);
  }
  function A(D) {
    const _ = !Gn(D) || D < 0 ? 0 : D;
    h?.clickDistance(_);
  }
  return {
    update: w,
    destroy: b,
    setViewport: P,
    setViewportConstrained: k,
    getViewport: x,
    scaleTo: N,
    scaleBy: V,
    setScaleExtent: H,
    setTranslateExtent: I,
    syncViewport: C,
    setClickDistance: A
  };
}
var qc;
(function(t) {
  t.Line = "line", t.Handle = "handle";
})(qc || (qc = {}));
var g2 = /* @__PURE__ */ ne("<div><!></div>");
function Sr(t, e) {
  ae(e, !0);
  let n = g(e, "id", 7, null), r = g(e, "type", 7, "source"), o = g(e, "position", 23, () => _e.Top), i = g(e, "style", 7), s = g(e, "class", 7), a = g(e, "isConnectable", 7), l = g(e, "isConnectableStart", 7, !0), u = g(e, "isConnectableEnd", 7, !0), d = g(e, "isValidConnection", 7), h = g(e, "onconnect", 7), p = g(e, "ondisconnect", 7), v = g(e, "children", 7), m = /* @__PURE__ */ Ae(e, [
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
  const y = xn("svelteflow__node_id"), w = xn("svelteflow__node_connectable");
  let b = /* @__PURE__ */ $(() => r() === "target"), k = /* @__PURE__ */ $(() => a() !== void 0 ? a() : w.value), P = _n(), C = /* @__PURE__ */ $(() => P.ariaLabelConfig), x = null;
  jt(() => {
    if (h() || p()) {
      P.edges;
      let E = P.connectionLookup.get(`${y}-${r()}${n() ? `-${n()}` : ""}`);
      if (x && !fb(E, x)) {
        const Y = E ?? /* @__PURE__ */ new Map();
        Ac(x, Y, p()), Ac(Y, x, h());
      }
      x = new Map(E);
    }
  });
  let N = /* @__PURE__ */ $(() => {
    if (!P.connection.inProgress)
      return [!1, !1, !1, !1, null];
    const { fromHandle: E, toHandle: Y, isValid: ee } = P.connection, K = E && E.nodeId === y && E.type === r() && E.id === n(), j = Y && Y.nodeId === y && Y.type === r() && Y.id === n(), W = P.connectionMode === Co.Strict ? E?.type !== r() : y !== E?.nodeId || n() !== E?.id;
    return [
      !0,
      K,
      j,
      W,
      j && ee
    ];
  }), V = /* @__PURE__ */ $(() => No(c(N), 5)), H = /* @__PURE__ */ $(() => c(V)[0]), I = /* @__PURE__ */ $(() => c(V)[1]), A = /* @__PURE__ */ $(() => c(V)[2]), D = /* @__PURE__ */ $(() => c(V)[3]), _ = /* @__PURE__ */ $(() => c(V)[4]);
  function T(E) {
    const Y = P.onbeforeconnect ? P.onbeforeconnect(E) : E;
    Y && (P.addEdge(Y), P.onconnect?.(E));
  }
  function S(E) {
    const Y = Mp(E);
    E.currentTarget && (Y && E.button === 0 || !Y) && Wc.onPointerDown(E, {
      handleId: n(),
      nodeId: y,
      isTarget: c(b),
      connectionRadius: P.connectionRadius,
      domNode: P.domNode,
      nodeLookup: P.nodeLookup,
      connectionMode: P.connectionMode,
      lib: "svelte",
      autoPanOnConnect: P.autoPanOnConnect,
      autoPanSpeed: P.autoPanSpeed,
      flowId: P.flowId,
      isValidConnection: d() ?? P.isValidConnection,
      updateConnection: P.updateConnection,
      cancelConnection: P.cancelConnection,
      panBy: P.panBy,
      onConnect: T,
      onConnectStart: (ee, K) => {
        P.onconnectstart?.(ee, {
          nodeId: K.nodeId,
          handleId: K.handleId,
          handleType: K.handleType
        });
      },
      onConnectEnd: (ee, K) => {
        P.onconnectend?.(ee, K);
      },
      getTransform: () => [P.viewport.x, P.viewport.y, P.viewport.zoom],
      getFromHandle: () => P.connection.fromHandle,
      dragThreshold: P.connectionDragThreshold,
      handleDomNode: E.currentTarget
    });
  }
  function O(E) {
    if (!y || !P.clickConnectStartHandle && !l())
      return;
    if (!P.clickConnectStartHandle) {
      P.onclickconnectstart?.(E, { nodeId: y, handleId: n(), handleType: r() }), P.clickConnectStartHandle = { nodeId: y, type: r(), id: n() };
      return;
    }
    const Y = Ep(E.target), ee = d() ?? P.isValidConnection, { connectionMode: K, clickConnectStartHandle: j, flowId: W, nodeLookup: J } = P, { connection: re, isValid: L } = Wc.isValid(E, {
      handle: { nodeId: y, id: n(), type: r() },
      connectionMode: K,
      fromNodeId: j.nodeId,
      fromHandleId: j.id ?? null,
      fromType: j.type,
      isValidConnection: ee,
      flowId: W,
      doc: Y,
      lib: "svelte",
      nodeLookup: J
    });
    L && re && T(re);
    const te = structuredClone(ql(P.connection));
    delete te.inProgress, te.toPosition = te.toHandle ? te.toHandle.position : null, P.onclickconnectend?.(E, te), P.clickConnectStartHandle = null;
  }
  var M = {
    get id() {
      return n();
    },
    set id(E = null) {
      n(E), f();
    },
    get type() {
      return r();
    },
    set type(E = "source") {
      r(E), f();
    },
    get position() {
      return o();
    },
    set position(E = _e.Top) {
      o(E), f();
    },
    get style() {
      return i();
    },
    set style(E) {
      i(E), f();
    },
    get class() {
      return s();
    },
    set class(E) {
      s(E), f();
    },
    get isConnectable() {
      return a();
    },
    set isConnectable(E) {
      a(E), f();
    },
    get isConnectableStart() {
      return l();
    },
    set isConnectableStart(E = !0) {
      l(E), f();
    },
    get isConnectableEnd() {
      return u();
    },
    set isConnectableEnd(E = !0) {
      u(E), f();
    },
    get isValidConnection() {
      return d();
    },
    set isValidConnection(E) {
      d(E), f();
    },
    get onconnect() {
      return h();
    },
    set onconnect(E) {
      h(E), f();
    },
    get ondisconnect() {
      return p();
    },
    set ondisconnect(E) {
      p(E), f();
    },
    get children() {
      return v();
    },
    set children(E) {
      v(E), f();
    }
  }, B = g2(), X = () => {
  };
  Ge(B, () => ({
    "data-handleid": n(),
    "data-nodeid": y,
    "data-handlepos": o(),
    "data-id": `${P.flowId ?? ""}-${y ?? ""}-${n() ?? "null" ?? ""}-${r() ?? ""}`,
    class: [
      "svelte-flow__handle",
      `svelte-flow__handle-${o()}`,
      P.noDragClass,
      P.noPanClass,
      o(),
      s()
    ],
    onmousedown: S,
    ontouchstart: S,
    onclick: P.clickConnect ? O : void 0,
    onkeypress: X,
    style: i(),
    role: "button",
    "aria-label": c(C)["handle.ariaLabel"],
    tabindex: "-1",
    ...m,
    [yr]: {
      valid: c(_),
      connectingto: c(A),
      connectingfrom: c(I),
      source: !c(b),
      target: c(b),
      connectablestart: l(),
      connectableend: u(),
      connectable: c(k),
      connectionindicator: c(k) && (!c(H) || c(D)) && (c(H) || P.clickConnectStartHandle ? u() : l())
    }
  }));
  var U = q(B);
  return Oe(U, () => v() ?? Ke), Z(B), z(t, B), le(M);
}
ie(
  Sr,
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
var v2 = /* @__PURE__ */ ne("<!> <!>", 1);
function wu(t, e) {
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
  }, s = v2(), a = Q(s);
  Sr(a, {
    type: "target",
    get position() {
      return r();
    }
  });
  var l = R(a), u = R(l);
  return Sr(u, {
    type: "source",
    get position() {
      return o();
    }
  }), Ne(() => nt(l, ` ${n()?.label ?? ""} `)), z(t, s), le(i);
}
ie(wu, { data: {}, targetPosition: {}, sourcePosition: {} }, [], [], !0);
var m2 = /* @__PURE__ */ ne(" <!>", 1);
function Zp(t, e) {
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
  var i = m2(), s = Q(i), a = R(s);
  return Sr(a, {
    type: "source",
    get position() {
      return r();
    }
  }), Ne(() => nt(s, `${n()?.label ?? ""} `)), z(t, i), le(o);
}
ie(Zp, { data: {}, sourcePosition: {} }, [], [], !0);
var y2 = /* @__PURE__ */ ne(" <!>", 1);
function Wp(t, e) {
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
  var i = y2(), s = Q(i), a = R(s);
  return Sr(a, {
    type: "target",
    get position() {
      return r();
    }
  }), Ne(() => nt(s, `${n()?.label ?? ""} `)), z(t, i), le(o);
}
ie(Wp, { data: {}, targetPosition: {} }, [], [], !0);
function qp(t, e) {
}
ie(qp, {}, [], [], !0);
function Ha(t, e, n) {
  if (!n || !e)
    return;
  const r = n === "root" ? e : e.querySelector(`.svelte-flow__${n}`);
  r && r.appendChild(t);
}
function Xp(t, e) {
  const n = /* @__PURE__ */ $(_n), r = /* @__PURE__ */ $(() => c(n).domNode);
  let o;
  return c(r) ? Ha(t, c(r), e) : o = to(() => {
    Ie(() => {
      Ha(t, c(r), e), o?.();
    });
  }), {
    async update(i) {
      Ha(t, c(r), i);
    },
    destroy() {
      t.parentNode && t.parentNode.removeChild(t), o?.();
    }
  };
}
function Yp() {
  let t = /* @__PURE__ */ me(typeof window > "u");
  if (c(t)) {
    const e = to(() => {
      Ie(() => {
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
const Xc = (t) => vb(t), w2 = (t) => Cp(t);
function In(t) {
  return t === void 0 ? void 0 : `${t}px`;
}
const Es = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
};
var b2 = /* @__PURE__ */ ne("<div><!></div>");
const x2 = {
  hash: "svelte-1ix3cbb",
  code: ".transparent.svelte-1ix3cbb {background:transparent;}"
};
function Up(t, e) {
  ae(e, !0), Je(t, x2);
  let n = g(e, "x", 7, 0), r = g(e, "y", 7, 0), o = g(e, "width", 7), i = g(e, "height", 7), s = g(e, "selectEdgeOnClick", 7, !1), a = g(e, "transparent", 7, !1), l = g(e, "class", 7), u = g(e, "children", 7), d = /* @__PURE__ */ Ae(e, [
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
  const h = _n(), p = xn("svelteflow__edge_id");
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
  }, y = b2(), w = () => {
    s() && h.handleEdgeSelection(p);
  };
  Ge(
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
      [zn]: k
    }),
    [
      () => ({
        display: Yp().value ? "none" : void 0,
        cursor: s() ? "pointer" : void 0,
        transform: `translate(-50%, -50%) translate(${n() ?? ""}px,${r() ?? ""}px)`,
        "pointer-events": "all",
        width: In(o()),
        height: In(i()),
        "z-index": c(v)
      })
    ],
    void 0,
    void 0,
    "svelte-1ix3cbb"
  );
  var b = q(y);
  return Oe(b, () => u() ?? Ke), Z(y), At(y, (k, P) => Xp?.(k, P), () => "edge-labels"), z(t, y), le(m);
}
ie(
  Up,
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
var k2 = /* @__PURE__ */ Ce("<path></path>"), C2 = /* @__PURE__ */ Ce('<path fill="none"></path><!><!>', 1);
function Oi(t, e) {
  ae(e, !0);
  let n = g(e, "id", 7), r = g(e, "path", 7), o = g(e, "label", 7), i = g(e, "labelX", 7), s = g(e, "labelY", 7), a = g(e, "labelStyle", 7), l = g(e, "markerStart", 7), u = g(e, "markerEnd", 7), d = g(e, "style", 7), h = g(e, "interactionWidth", 7, 20), p = g(e, "class", 7), v = /* @__PURE__ */ Ae(e, [
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
  }, y = C2(), w = Q(y), b = R(w);
  {
    var k = (x) => {
      var N = k2();
      Ge(N, () => ({
        d: r(),
        "stroke-opacity": 0,
        "stroke-width": h(),
        fill: "none",
        class: "svelte-flow__edge-interaction",
        ...v
      })), z(x, N);
    };
    se(b, (x) => {
      h() > 0 && x(k);
    });
  }
  var P = R(b);
  {
    var C = (x) => {
      Up(x, {
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
        children: (N, V) => {
          Se();
          var H = ze();
          Ne(() => nt(H, o())), z(N, H);
        },
        $$slots: { default: !0 }
      });
    };
    se(P, (x) => {
      o() && x(C);
    });
  }
  return Ne(() => {
    Pe(w, "id", n()), Pe(w, "d", r()), Yt(w, 0, pr(["svelte-flow__edge-path", p()])), Pe(w, "marker-start", l()), Pe(w, "marker-end", u()), zt(w, d());
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
function bu(t, e) {
  ae(e, !0);
  let n = g(e, "id", 7), r = g(e, "interactionWidth", 7), o = g(e, "label", 7), i = g(e, "labelStyle", 7), s = g(e, "markerEnd", 7), a = g(e, "markerStart", 7), l = g(e, "pathOptions", 7), u = g(e, "sourcePosition", 7), d = g(e, "sourceX", 7), h = g(e, "sourceY", 7), p = g(e, "style", 7), v = g(e, "targetPosition", 7), m = g(e, "targetX", 7), y = g(e, "targetY", 7), w = /* @__PURE__ */ $(() => Tp({
    sourceX: d(),
    sourceY: h(),
    targetX: m(),
    targetY: y(),
    sourcePosition: u(),
    targetPosition: v(),
    curvature: l()?.curvature
  })), b = /* @__PURE__ */ $(() => No(c(w), 3)), k = /* @__PURE__ */ $(() => c(b)[0]), P = /* @__PURE__ */ $(() => c(b)[1]), C = /* @__PURE__ */ $(() => c(b)[2]);
  var x = {
    get id() {
      return n();
    },
    set id(N) {
      n(N), f();
    },
    get interactionWidth() {
      return r();
    },
    set interactionWidth(N) {
      r(N), f();
    },
    get label() {
      return o();
    },
    set label(N) {
      o(N), f();
    },
    get labelStyle() {
      return i();
    },
    set labelStyle(N) {
      i(N), f();
    },
    get markerEnd() {
      return s();
    },
    set markerEnd(N) {
      s(N), f();
    },
    get markerStart() {
      return a();
    },
    set markerStart(N) {
      a(N), f();
    },
    get pathOptions() {
      return l();
    },
    set pathOptions(N) {
      l(N), f();
    },
    get sourcePosition() {
      return u();
    },
    set sourcePosition(N) {
      u(N), f();
    },
    get sourceX() {
      return d();
    },
    set sourceX(N) {
      d(N), f();
    },
    get sourceY() {
      return h();
    },
    set sourceY(N) {
      h(N), f();
    },
    get style() {
      return p();
    },
    set style(N) {
      p(N), f();
    },
    get targetPosition() {
      return v();
    },
    set targetPosition(N) {
      v(N), f();
    },
    get targetX() {
      return m();
    },
    set targetX(N) {
      m(N), f();
    },
    get targetY() {
      return y();
    },
    set targetY(N) {
      y(N), f();
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
      return c(P);
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
  bu,
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
function Gp(t, e) {
  ae(e, !0);
  let n = g(e, "interactionWidth", 7), r = g(e, "label", 7), o = g(e, "labelStyle", 7), i = g(e, "style", 7), s = g(e, "markerEnd", 7), a = g(e, "markerStart", 7), l = g(e, "sourcePosition", 7), u = g(e, "sourceX", 7), d = g(e, "sourceY", 7), h = g(e, "targetPosition", 7), p = g(e, "targetX", 7), v = g(e, "targetY", 7), m = /* @__PURE__ */ $(() => gu({
    sourceX: u(),
    sourceY: d(),
    targetX: p(),
    targetY: v(),
    sourcePosition: l(),
    targetPosition: h()
  })), y = /* @__PURE__ */ $(() => No(c(m), 3)), w = /* @__PURE__ */ $(() => c(y)[0]), b = /* @__PURE__ */ $(() => c(y)[1]), k = /* @__PURE__ */ $(() => c(y)[2]);
  var P = {
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
  }), le(P);
}
ie(
  Gp,
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
function Jp(t, e) {
  ae(e, !0);
  let n = g(e, "sourceX", 7), r = g(e, "sourceY", 7), o = g(e, "targetX", 7), i = g(e, "targetY", 7), s = g(e, "label", 7), a = g(e, "labelStyle", 7), l = g(e, "markerStart", 7), u = g(e, "markerEnd", 7), d = g(e, "interactionWidth", 7), h = g(e, "style", 7), p = /* @__PURE__ */ $(() => Dp({
    sourceX: n(),
    sourceY: r(),
    targetX: o(),
    targetY: i()
  })), v = /* @__PURE__ */ $(() => No(c(p), 3)), m = /* @__PURE__ */ $(() => c(v)[0]), y = /* @__PURE__ */ $(() => c(v)[1]), w = /* @__PURE__ */ $(() => c(v)[2]);
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
  Jp,
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
function Qp(t, e) {
  ae(e, !0);
  let n = g(e, "sourceX", 7), r = g(e, "sourceY", 7), o = g(e, "sourcePosition", 7), i = g(e, "targetX", 7), s = g(e, "targetY", 7), a = g(e, "targetPosition", 7), l = g(e, "label", 7), u = g(e, "labelStyle", 7), d = g(e, "markerStart", 7), h = g(e, "markerEnd", 7), p = g(e, "interactionWidth", 7), v = g(e, "style", 7), m = /* @__PURE__ */ $(() => gu({
    sourceX: n(),
    sourceY: r(),
    targetX: i(),
    targetY: s(),
    sourcePosition: o(),
    targetPosition: a(),
    borderRadius: 0
  })), y = /* @__PURE__ */ $(() => No(c(m), 3)), w = /* @__PURE__ */ $(() => c(y)[0]), b = /* @__PURE__ */ $(() => c(y)[1]), k = /* @__PURE__ */ $(() => c(y)[2]);
  var P = {
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
  }), le(P);
}
ie(
  Qp,
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
class $2 extends Map {
  /** @type {Map<K, Source<number>>} */
  #e = /* @__PURE__ */ new Map();
  #t = /* @__PURE__ */ me(0);
  #n = /* @__PURE__ */ me(0);
  #r = rr || -1;
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
    return rr === this.#r ? /* @__PURE__ */ me(e) : ir(e);
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
      o = this.#o(0), r.set(e, o), F(this.#n, super.size), En(a);
    else if (i !== n) {
      En(o);
      var l = a.reactions === null ? null : new Set(a.reactions), u = l === null || !o.reactions?.every(
        (d) => (
          /** @type {NonNullable<typeof v_reactions>} */
          l.has(d)
        )
      );
      u && En(a);
    }
    return s;
  }
  /** @param {K} key */
  delete(e) {
    var n = this.#e, r = n.get(e), o = super.delete(e);
    return r !== void 0 && (n.delete(e), F(this.#n, super.size), F(r, -1), En(this.#t)), o;
  }
  clear() {
    if (super.size !== 0) {
      super.clear();
      var e = this.#e;
      F(this.#n, 0);
      for (var n of e.values())
        F(n, -1);
      En(this.#t), e.clear();
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
class S2 {
  #e;
  #t;
  /**
   *
   * @param {() => T} fn
   * @param {(update: () => void) => void} onsubscribe
   */
  constructor(e, n) {
    this.#e = e, this.#t = eo(n);
  }
  get current() {
    return this.#t(), this.#e();
  }
}
const _2 = /\(.+\)/, P2 = /* @__PURE__ */ new Set(["all", "print", "screen", "and", "or", "not", "only"]);
class ef extends S2 {
  /**
   * @param {string} query A media query string
   * @param {boolean} [fallback] Fallback value for the server
   */
  constructor(e, n) {
    let r = _2.test(e) || // we need to use `some` here because technically this `window.matchMedia('random,screen')` still returns true
    e.split(/[\s,]+/).some((i) => P2.has(i.trim())) ? e : `(${e})`;
    const o = window.matchMedia(r);
    super(
      () => o.matches,
      (i) => pt(o, "change", i)
    );
  }
}
function O2(t, e, n, r) {
  const o = /* @__PURE__ */ new Map();
  return pu(t, { x: 0, y: 0, width: n, height: r }, e, !0).forEach((i) => {
    o.set(i.id, i);
  }), o;
}
function Yc(t) {
  const { edges: e, defaultEdgeOptions: n, nodeLookup: r, previousEdges: o, connectionMode: i, onerror: s, onlyRenderVisible: a, elevateEdgesOnSelect: l } = t, u = /* @__PURE__ */ new Map();
  for (const d of e) {
    const h = r.get(d.source), p = r.get(d.target);
    if (!h || !p)
      continue;
    if (a) {
      const { visibleNodes: y, transform: w, width: b, height: k } = t;
      if (Eb({
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
    const m = Hb({
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
      zIndex: Nb({
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
const tf = {
  input: Zp,
  output: Wp,
  default: wu,
  group: qp
}, nf = {
  straight: Jp,
  smoothstep: Gp,
  default: bu,
  step: Qp
};
function N2(t, e, n, r, o, i) {
  if (e && !n && r && o) {
    const s = Si(i, {
      filter: (a) => !!((a.width || a.initialWidth) && (a.height || a.initialHeight))
    });
    return fu(s, r, o, 0.5, 2, 0.1);
  } else
    return n ?? { x: 0, y: 0, zoom: 1 };
}
function E2(t) {
  class e {
    #e = /* @__PURE__ */ $(() => t.props.id ?? "1");
    get flowId() {
      return c(this.#e);
    }
    set flowId(r) {
      F(this.#e, r);
    }
    #t = /* @__PURE__ */ me(null);
    get domNode() {
      return c(this.#t);
    }
    set domNode(r) {
      F(this.#t, r);
    }
    #n = /* @__PURE__ */ me(null);
    get panZoom() {
      return c(this.#n);
    }
    set panZoom(r) {
      F(this.#n, r);
    }
    #r = /* @__PURE__ */ me(t.width ?? 0);
    get width() {
      return c(this.#r);
    }
    set width(r) {
      F(this.#r, r);
    }
    #o = /* @__PURE__ */ me(t.height ?? 0);
    get height() {
      return c(this.#o);
    }
    set height(r) {
      F(this.#o, r);
    }
    #i = /* @__PURE__ */ $(() => {
      const r = jb(t.nodes, this.nodeLookup, this.parentLookup, {
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
    #s = /* @__PURE__ */ $(() => (Ub(this.connectionLookup, this.edgeLookup, t.edges), t.edges));
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
        h = O2(s, b, y, w), p = Yc({
          ...v,
          onlyRenderVisible: !0,
          visibleNodes: h,
          transform: b,
          width: y,
          height: w
        });
      } else
        h = this.nodeLookup, p = Yc(v);
      return { nodes: h, edges: p };
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
    #f = /* @__PURE__ */ $(() => t.props.elementsSelectable ?? !0);
    get elementsSelectable() {
      return c(this.#f);
    }
    set elementsSelectable(r) {
      F(this.#f, r);
    }
    #p = /* @__PURE__ */ $(() => t.props.nodesFocusable ?? !0);
    get nodesFocusable() {
      return c(this.#p);
    }
    set nodesFocusable(r) {
      F(this.#p, r);
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
    #k = /* @__PURE__ */ $(() => t.props.defaultEdgeOptions ?? {});
    get defaultEdgeOptions() {
      return c(this.#k);
    }
    set defaultEdgeOptions(r) {
      F(this.#k, r);
    }
    #C = /* @__PURE__ */ $(() => t.props.nodeDragThreshold ?? 1);
    get nodeDragThreshold() {
      return c(this.#C);
    }
    set nodeDragThreshold(r) {
      F(this.#C, r);
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
    #P = /* @__PURE__ */ $(() => t.props.autoPanSpeed ?? 15);
    get autoPanSpeed() {
      return c(this.#P);
    }
    set autoPanSpeed(r) {
      F(this.#P, r);
    }
    #O = /* @__PURE__ */ $(() => t.props.connectionDragThreshold ?? 1);
    get connectionDragThreshold() {
      return c(this.#O);
    }
    set connectionDragThreshold(r) {
      F(this.#O, r);
    }
    fitViewQueued = t.props.fitView ?? !1;
    fitViewOptions = t.props.fitViewOptions;
    fitViewResolver = null;
    #N = /* @__PURE__ */ $(() => t.props.snapGrid ?? null);
    get snapGrid() {
      return c(this.#N);
    }
    set snapGrid(r) {
      F(this.#N, r);
    }
    #E = /* @__PURE__ */ me(!1);
    get dragging() {
      return c(this.#E);
    }
    set dragging(r) {
      F(this.#E, r);
    }
    #z = /* @__PURE__ */ me(null);
    get selectionRect() {
      return c(this.#z);
    }
    set selectionRect(r) {
      F(this.#z, r);
    }
    #M = /* @__PURE__ */ me(!1);
    get selectionKeyPressed() {
      return c(this.#M);
    }
    set selectionKeyPressed(r) {
      F(this.#M, r);
    }
    #T = /* @__PURE__ */ me(!1);
    get multiselectionKeyPressed() {
      return c(this.#T);
    }
    set multiselectionKeyPressed(r) {
      F(this.#T, r);
    }
    #A = /* @__PURE__ */ me(!1);
    get deleteKeyPressed() {
      return c(this.#A);
    }
    set deleteKeyPressed(r) {
      F(this.#A, r);
    }
    #D = /* @__PURE__ */ me(!1);
    get panActivationKeyPressed() {
      return c(this.#D);
    }
    set panActivationKeyPressed(r) {
      F(this.#D, r);
    }
    #V = /* @__PURE__ */ me(!1);
    get zoomActivationKeyPressed() {
      return c(this.#V);
    }
    set zoomActivationKeyPressed(r) {
      F(this.#V, r);
    }
    #H = /* @__PURE__ */ me(null);
    get selectionRectMode() {
      return c(this.#H);
    }
    set selectionRectMode(r) {
      F(this.#H, r);
    }
    #L = /* @__PURE__ */ me("");
    get ariaLiveMessage() {
      return c(this.#L);
    }
    set ariaLiveMessage(r) {
      F(this.#L, r);
    }
    #I = /* @__PURE__ */ $(() => t.props.selectionMode ?? Ps.Partial);
    get selectionMode() {
      return c(this.#I);
    }
    set selectionMode(r) {
      F(this.#I, r);
    }
    #R = /* @__PURE__ */ $(() => ({ ...tf, ...t.props.nodeTypes }));
    get nodeTypes() {
      return c(this.#R);
    }
    set nodeTypes(r) {
      F(this.#R, r);
    }
    #B = /* @__PURE__ */ $(() => ({ ...nf, ...t.props.edgeTypes }));
    get edgeTypes() {
      return c(this.#B);
    }
    set edgeTypes(r) {
      F(this.#B, r);
    }
    #K = /* @__PURE__ */ $(() => t.props.noPanClass ?? "nopan");
    get noPanClass() {
      return c(this.#K);
    }
    set noPanClass(r) {
      F(this.#K, r);
    }
    #F = /* @__PURE__ */ $(() => t.props.noDragClass ?? "nodrag");
    get noDragClass() {
      return c(this.#F);
    }
    set noDragClass(r) {
      F(this.#F, r);
    }
    #j = /* @__PURE__ */ $(() => t.props.noWheelClass ?? "nowheel");
    get noWheelClass() {
      return c(this.#j);
    }
    set noWheelClass(r) {
      F(this.#j, r);
    }
    #Z = /* @__PURE__ */ $(() => _b(t.props.ariaLabelConfig));
    get ariaLabelConfig() {
      return c(this.#Z);
    }
    set ariaLabelConfig(r) {
      F(this.#Z, r);
    }
    #W = /* @__PURE__ */ me(N2(this.nodesInitialized, t.props.fitView, t.props.initialViewport, this.width, this.height, this.nodeLookup));
    get _viewport() {
      return c(this.#W);
    }
    set _viewport(r) {
      F(this.#W, r);
    }
    get viewport() {
      return t.viewport ?? this._viewport;
    }
    set viewport(r) {
      t.viewport && (t.viewport = r), this._viewport = r;
    }
    #q = /* @__PURE__ */ me(
      // _connection is viewport independent and originating from XYHandle
      al
    );
    get _connection() {
      return c(this.#q);
    }
    set _connection(r) {
      F(this.#q, r);
    }
    #X = /* @__PURE__ */ $(() => this._connection.inProgress ? {
      ...this._connection,
      to: Pi(this._connection.to, [this.viewport.x, this.viewport.y, this.viewport.zoom])
    } : this._connection);
    get connection() {
      return c(this.#X);
    }
    set connection(r) {
      F(this.#X, r);
    }
    #Y = /* @__PURE__ */ $(() => t.props.connectionMode ?? Co.Strict);
    get connectionMode() {
      return c(this.#Y);
    }
    set connectionMode(r) {
      F(this.#Y, r);
    }
    #U = /* @__PURE__ */ $(() => t.props.connectionRadius ?? 20);
    get connectionRadius() {
      return c(this.#U);
    }
    set connectionRadius(r) {
      F(this.#U, r);
    }
    #G = /* @__PURE__ */ $(() => t.props.isValidConnection ?? (() => !0));
    get isValidConnection() {
      return c(this.#G);
    }
    set isValidConnection(r) {
      F(this.#G, r);
    }
    #J = /* @__PURE__ */ $(() => t.props.selectNodesOnDrag ?? !0);
    get selectNodesOnDrag() {
      return c(this.#J);
    }
    set selectNodesOnDrag(r) {
      F(this.#J, r);
    }
    #Q = /* @__PURE__ */ $(() => t.props.defaultMarkerColor === void 0 ? "#b1b1b7" : t.props.defaultMarkerColor);
    get defaultMarkerColor() {
      return c(this.#Q);
    }
    set defaultMarkerColor(r) {
      F(this.#Q, r);
    }
    #ee = /* @__PURE__ */ $(() => Lb(t.edges, {
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
    #ne = /* @__PURE__ */ $(() => t.props.onflowerror ?? kb);
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
    #pe = /* @__PURE__ */ $(() => t.props.clickConnect ?? !0);
    get clickConnect() {
      return c(this.#pe);
    }
    set clickConnect(r) {
      F(this.#pe, r);
    }
    #fe = /* @__PURE__ */ $(() => t.props.onclickconnectstart);
    get onclickconnectstart() {
      return c(this.#fe);
    }
    set onclickconnectstart(r) {
      F(this.#fe, r);
    }
    #ge = /* @__PURE__ */ $(() => t.props.onclickconnectend);
    get onclickconnectend() {
      return c(this.#ge);
    }
    set onclickconnectend(r) {
      F(this.#ge, r);
    }
    #ve = /* @__PURE__ */ me(null);
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
      this.panZoom && (await bb(
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
    _prefersDark = new ef("(prefers-color-scheme: dark)", t.props.colorModeSSR === "dark");
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
function _n() {
  const t = xn(zs);
  if (!t)
    throw new Error("To call useStore outside of <SvelteFlow /> you need to wrap your component in a <SvelteFlowProvider />");
  return t.getStore();
}
const zs = Symbol();
function rf(t) {
  const e = E2(t);
  function n(A) {
    e.nodeTypes = {
      ...tf,
      ...A
    };
  }
  function r(A) {
    e.edgeTypes = {
      ...nf,
      ...A
    };
  }
  function o(A) {
    e.edges = Tb(A, e.edges);
  }
  const i = (A, D = !1) => {
    e.nodes = e.nodes.map((_) => {
      const T = A.get(_.id);
      return T ? { ..._, position: T.position, dragging: D } : _;
    });
  };
  function s(A) {
    const { changes: D, updatedInternals: _ } = Xb(A, e.nodeLookup, e.parentLookup, e.domNode, e.nodeOrigin);
    if (!_)
      return;
    Kb(e.nodeLookup, e.parentLookup, {
      nodeOrigin: e.nodeOrigin,
      nodeExtent: e.nodeExtent
    }), e.fitViewQueued && e.resolveFitView();
    const T = /* @__PURE__ */ new Map();
    for (const S of D) {
      const O = e.nodeLookup.get(S.id)?.internals.userNode;
      if (!O)
        continue;
      const M = { ...O };
      switch (S.type) {
        case "dimensions": {
          const B = { ...M.measured, ...S.dimensions };
          S.setAttributes && (M.width = S.dimensions?.width ?? M.width, M.height = S.dimensions?.height ?? M.height), M.measured = B;
          break;
        }
        case "position":
          M.position = S.position ?? M.position;
          break;
      }
      T.set(S.id, M);
    }
    e.nodes = e.nodes.map((S) => T.get(S.id) ?? S);
  }
  function a(A) {
    const D = e.fitViewResolver ?? Promise.withResolvers();
    return e.fitViewQueued = !0, e.fitViewOptions = A, e.fitViewResolver = D, e.nodes = [...e.nodes], D.promise;
  }
  async function l(A, D, _) {
    const T = typeof _?.zoom < "u" ? _.zoom : e.maxZoom, S = e.panZoom;
    return S ? (await S.setViewport({
      x: e.width / 2 - A * T,
      y: e.height / 2 - D * T,
      zoom: T
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
    const T = A.map((S) => (!D || D.has(S.id)) && S.selected ? (_ = !0, { ...S, selected: !1 }) : S);
    return [_, T];
  }
  function w(A) {
    const D = A?.nodes ? new Set(A.nodes.map((B) => B.id)) : null, [_, T] = y(e.nodes, D);
    _ && (e.nodes = T);
    const S = A?.edges ? new Set(A.edges.map((B) => B.id)) : null, [O, M] = y(e.edges, S);
    O && (e.edges = M);
  }
  function b(A) {
    const D = e.multiselectionKeyPressed;
    e.nodes = e.nodes.map((_) => {
      const T = A.includes(_.id), S = D && _.selected || T;
      return !!_.selected !== S ? { ..._, selected: S } : _;
    }), D || w({ nodes: [] });
  }
  function k(A) {
    const D = e.multiselectionKeyPressed;
    e.edges = e.edges.map((_) => {
      const T = A.includes(_.id), S = D && _.selected || T;
      return !!_.selected !== S ? { ..._, selected: S } : _;
    }), D || w({ edges: [] });
  }
  function P(A, D, _) {
    const T = e.nodeLookup.get(A);
    if (!T) {
      console.warn("012", li.error012(A));
      return;
    }
    e.selectionRect = null, e.selectionRectMode = null, T.selected ? (D || T.selected && e.multiselectionKeyPressed) && (w({ nodes: [T], edges: [] }), requestAnimationFrame(() => _?.blur())) : b([A]);
  }
  function C(A) {
    const D = e.edgeLookup.get(A);
    if (!D) {
      console.warn("012", li.error012(A));
      return;
    }
    (D.selectable || e.elementsSelectable && typeof D.selectable > "u") && (e.selectionRect = null, e.selectionRectMode = null, D.selected ? D.selected && e.multiselectionKeyPressed && w({ nodes: [], edges: [D] }) : k([A]));
  }
  function x(A, D) {
    const { nodeExtent: _, snapGrid: T, nodeOrigin: S, nodeLookup: O, nodesDraggable: M, onerror: B } = e, X = /* @__PURE__ */ new Map(), U = T?.[0] ?? 5, E = T?.[1] ?? 5, Y = A.x * U * D, ee = A.y * E * D;
    for (const K of O.values()) {
      if (!(K.selected && (K.draggable || M && typeof K.draggable > "u")))
        continue;
      let j = {
        x: K.internals.positionAbsolute.x + Y,
        y: K.internals.positionAbsolute.y + ee
      };
      T && (j = _i(j, T));
      const { position: W, positionAbsolute: J } = $p({
        nodeId: K.id,
        nextPosition: j,
        nodeLookup: O,
        nodeExtent: _,
        nodeOrigin: S,
        onError: B
      });
      K.position = W, K.internals.positionAbsolute = J, X.set(K.id, K);
    }
    i(X);
  }
  function N(A) {
    return Yb({
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
    e._connection = al;
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
    handleNodeSelection: P,
    handleEdgeSelection: C,
    moveSelectedNodes: x,
    panBy: N,
    updateConnection: V,
    cancelConnection: H,
    reset: I
  });
}
function z2(t, e) {
  const { minZoom: n, maxZoom: r, initialViewport: o, onPanZoomStart: i, onPanZoom: s, onPanZoomEnd: a, translateExtent: l, setPanZoomInstance: u, onDraggingChange: d, onTransformChange: h } = e, p = f2({
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
var M2 = /* @__PURE__ */ ne('<div class="svelte-flow__zoom svelte-flow__container"><!></div>');
function of(t, e) {
  ae(e, !0);
  let n = g(e, "store", 15), r = g(e, "panOnScrollMode", 7), o = g(e, "preventScrolling", 7), i = g(e, "zoomOnScroll", 7), s = g(e, "zoomOnDoubleClick", 7), a = g(e, "zoomOnPinch", 7), l = g(e, "panOnDrag", 7), u = g(e, "panOnScroll", 7), d = g(e, "panOnScrollSpeed", 7), h = g(e, "paneClickDistance", 7), p = g(e, "selectionOnDrag", 7), v = g(e, "onmovestart", 7), m = g(e, "onmove", 7), y = g(e, "onmoveend", 7), w = g(e, "oninit", 7), b = g(e, "children", 7), k = /* @__PURE__ */ $(() => n().panActivationKeyPressed || l()), P = /* @__PURE__ */ $(() => n().panActivationKeyPressed || u());
  const { viewport: C } = n();
  let x = !1;
  Ie(() => {
    !x && n().viewportInitialized && (w()?.(), x = !0);
  });
  var N = {
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
  }, V = M2(), H = q(V);
  return Oe(H, b), Z(V), At(V, (I, A) => z2?.(I, A), () => ({
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
    panOnScroll: c(P),
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
  })), z(t, V), le(N);
}
ie(
  of,
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
function Gc(t) {
  return (e) => {
    const n = t.has(e.id);
    return !!e.selected !== n ? { ...e, selected: n } : e;
  };
}
function Jc(t, e) {
  if (t.size !== e.size)
    return !1;
  for (const n of t)
    if (!e.has(n))
      return !1;
  return !0;
}
var T2 = /* @__PURE__ */ ne("<div><!></div>");
function sf(t, e) {
  ae(e, !0);
  let n = g(e, "store", 15), r = g(e, "panOnDrag", 7, !0), o = g(e, "paneClickDistance", 7, 1), i = g(e, "selectionOnDrag", 7), s = g(e, "onpaneclick", 7), a = g(e, "onpanecontextmenu", 7), l = g(e, "onselectionstart", 7), u = g(e, "onselectionend", 7), d = g(e, "children", 7), h, p = null, v = /* @__PURE__ */ new Set(), m = /* @__PURE__ */ new Set(), y = /* @__PURE__ */ $(() => n().panActivationKeyPressed || r()), w = /* @__PURE__ */ $(() => n().selectionKeyPressed || !!n().selectionRect || i() && c(y) !== !0), b = /* @__PURE__ */ $(() => n().elementsSelectable && (c(w) || n().selectionRectMode === "user")), k = !1;
  function P(O) {
    if (p = h?.getBoundingClientRect(), !p) return;
    const M = O.target === h, B = !M && !!O.target.closest(".nokey"), X = i() && M || n().selectionKeyPressed;
    if (B || !c(w) || !X || O.button !== 0 || !O.isPrimary)
      return;
    O.target?.setPointerCapture?.(O.pointerId), k = !1;
    const { x: U, y: E } = mn(O, p);
    n(n().selectionRect = { width: 0, height: 0, startX: U, startY: E, x: U, y: E }, !0), M || (O.stopPropagation(), O.preventDefault());
  }
  function C(O) {
    if (!c(w) || !p || !n().selectionRect)
      return;
    const M = mn(O, p), { startX: B = 0, startY: X = 0 } = n().selectionRect;
    if (!k) {
      const K = n().selectionKeyPressed ? 0 : o();
      if (Math.hypot(M.x - B, M.y - X) <= K)
        return;
      n().unselectNodesAndEdges(), l()?.(O);
    }
    k = !0;
    const U = {
      ...n().selectionRect,
      x: M.x < B ? M.x : B,
      y: M.y < X ? M.y : X,
      width: Math.abs(M.x - B),
      height: Math.abs(M.y - X)
    }, E = v, Y = m;
    v = new Set(pu(
      n().nodeLookup,
      U,
      [
        n().viewport.x,
        n().viewport.y,
        n().viewport.zoom
      ],
      n().selectionMode === Ps.Partial,
      !0
    ).map((K) => K.id));
    const ee = n().defaultEdgeOptions.selectable ?? !0;
    m = /* @__PURE__ */ new Set();
    for (const K of v) {
      const j = n().connectionLookup.get(K);
      if (j)
        for (const { edgeId: W } of j.values()) {
          const J = n().edgeLookup.get(W);
          J && (J.selectable ?? ee) && m.add(W);
        }
    }
    Jc(E, v) || n(n().nodes = n().nodes.map(Gc(v)), !0), Jc(Y, m) || n(n().edges = n().edges.map(Gc(m)), !0), n(n().selectionRectMode = "user", !0), n(n().selectionRect = U, !0);
  }
  function x(O) {
    O.button === 0 && (O.target?.releasePointerCapture?.(O.pointerId), !k && O.target === h && H?.(O), n(n().selectionRect = null, !0), k && n(n().selectionRectMode = v.size > 0 ? "nodes" : null, !0), k && u()?.(O));
  }
  const N = (O) => {
    if (Array.isArray(c(y)) && c(y).includes(2)) {
      O.preventDefault();
      return;
    }
    a()?.({ event: O });
  }, V = (O) => {
    k && (O.stopPropagation(), k = !1);
  };
  function H(O) {
    if (k || n().connection.inProgress) {
      k = !1;
      return;
    }
    s()?.({ event: O }), n().unselectNodesAndEdges(), n(n().selectionRectMode = null, !0), n(n().selectionRect = null, !0);
  }
  var I = {
    get store() {
      return n();
    },
    set store(O) {
      n(O), f();
    },
    get panOnDrag() {
      return r();
    },
    set panOnDrag(O = !0) {
      r(O), f();
    },
    get paneClickDistance() {
      return o();
    },
    set paneClickDistance(O = 1) {
      o(O), f();
    },
    get selectionOnDrag() {
      return i();
    },
    set selectionOnDrag(O) {
      i(O), f();
    },
    get onpaneclick() {
      return s();
    },
    set onpaneclick(O) {
      s(O), f();
    },
    get onpanecontextmenu() {
      return a();
    },
    set onpanecontextmenu(O) {
      a(O), f();
    },
    get onselectionstart() {
      return l();
    },
    set onselectionstart(O) {
      l(O), f();
    },
    get onselectionend() {
      return u();
    },
    set onselectionend(O) {
      u(O), f();
    },
    get children() {
      return d();
    },
    set children(O) {
      d(O), f();
    }
  }, A = T2();
  let D;
  var _ = /* @__PURE__ */ $(() => c(b) ? void 0 : Uc(H, h));
  A.__click = function(...O) {
    c(_)?.apply(this, O);
  }, A.__pointermove = function(...O) {
    (c(b) ? C : void 0)?.apply(this, O);
  }, A.__pointerup = function(...O) {
    (c(b) ? x : void 0)?.apply(this, O);
  };
  var T = /* @__PURE__ */ $(() => Uc(N, h));
  A.__contextmenu = function(...O) {
    c(T)?.apply(this, O);
  };
  var S = q(A);
  return Oe(S, d), Z(A), Mt(A, (O) => h = O, () => h), Ne((O) => D = Yt(A, 1, "svelte-flow__pane svelte-flow__container", null, D, O), [
    () => ({
      draggable: r() === !0 || Array.isArray(r()) && r().includes(0),
      dragging: n().dragging,
      selection: c(w)
    })
  ]), ys(
    "pointerdown",
    A,
    function(...O) {
      (c(b) ? P : void 0)?.apply(this, O);
    },
    !0
  ), ys(
    "click",
    A,
    function(...O) {
      (c(b) ? V : void 0)?.apply(this, O);
    },
    !0
  ), z(t, A), le(I);
}
oo(["click", "pointermove", "pointerup", "contextmenu"]);
ie(
  sf,
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
var A2 = /* @__PURE__ */ ne('<div class="svelte-flow__viewport xyflow__viewport svelte-flow__container"><!></div>');
function af(t, e) {
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
  }, i = A2();
  let s;
  var a = q(i);
  return Oe(a, r), Z(i), Ne(() => s = zt(i, "", s, {
    transform: `translate(${n().viewport.x ?? ""}px, ${n().viewport.y ?? ""}px) scale(${n().viewport.zoom ?? ""})`
  })), z(t, i), le(o);
}
ie(af, { store: {}, children: {} }, [], [], !0);
function lf(t, e) {
  const { store: n, onDrag: r, onDragStart: o, onDragStop: i, onNodeMouseDown: s } = e, a = e2({
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
var D2 = /* @__PURE__ */ ne('<div aria-live="assertive" aria-atomic="true" class="a11y-live-msg svelte-1u4lacj"> </div>'), V2 = /* @__PURE__ */ ne('<div class="a11y-hidden svelte-1u4lacj"> </div> <div class="a11y-hidden svelte-1u4lacj"> </div> <!>', 1);
const H2 = {
  hash: "svelte-1u4lacj",
  code: ".a11y-hidden.svelte-1u4lacj {display:none;}.a11y-live-msg.svelte-1u4lacj {position:absolute;width:1px;height:1px;margin:-1px;border:0;padding:0;overflow:hidden;clip:rect(0px, 0px, 0px, 0px);clip-path:inset(100%);}"
};
function uf(t, e) {
  ae(e, !0), Je(t, H2);
  let n = g(e, "store", 7);
  var r = {
    get store() {
      return n();
    },
    set store(h) {
      n(h), f();
    }
  }, o = V2(), i = Q(o), s = q(i, !0);
  Z(i);
  var a = R(i, 2), l = q(a, !0);
  Z(a);
  var u = R(a, 2);
  {
    var d = (h) => {
      var p = D2(), v = q(p, !0);
      Z(p), Ne(() => {
        Pe(p, "id", `${L2}-${n().flowId}`), nt(v, n().ariaLiveMessage);
      }), z(h, p);
    };
    se(u, (h) => {
      n().disableKeyboardA11y || h(d);
    });
  }
  return Ne(() => {
    Pe(i, "id", `${cf}-${n().flowId}`), nt(s, n().disableKeyboardA11y ? n().ariaLabelConfig["node.a11yDescription.default"] : n().ariaLabelConfig["node.a11yDescription.keyboardDisabled"]), Pe(a, "id", `${df}-${n().flowId}`), nt(l, n().ariaLabelConfig["edge.a11yDescription.default"]);
  }), z(t, o), le(r);
}
ie(uf, { store: {} }, [], [], !0);
const cf = "svelte-flow__node-desc", df = "svelte-flow__edge-desc", L2 = "svelte-flow__aria-live";
var I2 = /* @__PURE__ */ ne("<div><!></div>");
function hf(t, e) {
  ae(e, !0);
  let n = g(e, "store", 15), r = g(e, "node", 7), o = g(e, "resizeObserver", 7), i = g(e, "nodeClickDistance", 7), s = g(e, "onnodeclick", 7), a = g(e, "onnodedrag", 7), l = g(e, "onnodedragstart", 7), u = g(e, "onnodedragstop", 7), d = g(e, "onnodepointerenter", 7), h = g(e, "onnodepointerleave", 7), p = g(e, "onnodepointermove", 7), v = g(e, "onnodecontextmenu", 7), m = /* @__PURE__ */ $(() => Ht(r().data, () => ({}), !0)), y = /* @__PURE__ */ $(() => Ht(r().selected, !1)), w = /* @__PURE__ */ $(() => r().draggable), b = /* @__PURE__ */ $(() => r().selectable), k = /* @__PURE__ */ $(() => Ht(r().deletable, !0)), P = /* @__PURE__ */ $(() => r().connectable), C = /* @__PURE__ */ $(() => r().focusable), x = /* @__PURE__ */ $(() => Ht(r().hidden, !1)), N = /* @__PURE__ */ $(() => Ht(r().dragging, !1)), V = /* @__PURE__ */ $(() => Ht(r().style, "")), H = /* @__PURE__ */ $(() => r().class), I = /* @__PURE__ */ $(() => Ht(r().type, "default")), A = /* @__PURE__ */ $(() => r().parentId), D = /* @__PURE__ */ $(() => r().sourcePosition), _ = /* @__PURE__ */ $(() => r().targetPosition), T = /* @__PURE__ */ $(() => Ht(r().measured, () => ({ width: 0, height: 0 }), !0).width), S = /* @__PURE__ */ $(() => Ht(r().measured, () => ({ width: 0, height: 0 }), !0).height), O = /* @__PURE__ */ $(() => r().initialWidth), M = /* @__PURE__ */ $(() => r().initialHeight), B = /* @__PURE__ */ $(() => r().width), X = /* @__PURE__ */ $(() => r().height), U = /* @__PURE__ */ $(() => r().dragHandle), E = /* @__PURE__ */ $(() => Ht(r().internals.z, 0)), Y = /* @__PURE__ */ $(() => r().internals.positionAbsolute.x), ee = /* @__PURE__ */ $(() => r().internals.positionAbsolute.y), K = /* @__PURE__ */ $(() => r().internals.userNode), { id: j } = r(), W = /* @__PURE__ */ $(() => c(w) ?? n().nodesDraggable), J = /* @__PURE__ */ $(() => c(b) ?? n().elementsSelectable), re = /* @__PURE__ */ $(() => c(P) ?? n().nodesConnectable), L = /* @__PURE__ */ $(() => Op(r())), te = /* @__PURE__ */ $(() => !!r().internals.handleBounds), fe = /* @__PURE__ */ $(() => c(L) && c(te)), ue = /* @__PURE__ */ $(() => c(C) ?? n().nodesFocusable);
  function oe(ge) {
    return n().parentLookup.has(ge);
  }
  let ce = /* @__PURE__ */ $(() => oe(j)), ve = /* @__PURE__ */ me(null), ke = null, we = c(I), he = c(D), xe = c(_), De = /* @__PURE__ */ $(() => n().nodeTypes[c(I)] ?? wu), G = /* @__PURE__ */ $(() => n().ariaLabelConfig);
  Wr("svelteflow__node_connectable", {
    get value() {
      return c(re);
    }
  }), Wr("svelteflow__node_id", j);
  let Te = /* @__PURE__ */ $(() => {
    const ge = c(T) === void 0 ? c(B) ?? c(O) : c(B), Ee = c(S) === void 0 ? c(X) ?? c(M) : c(X);
    if (!(ge === void 0 && Ee === void 0 && c(V) === void 0))
      return `${c(V)};${ge ? `width:${In(ge)};` : ""}${Ee ? `height:${In(Ee)};` : ""}`;
  });
  Ie(() => {
    (c(I) !== we || c(D) !== he || c(_) !== xe) && c(ve) !== null && requestAnimationFrame(() => {
      c(ve) !== null && n().updateNodeInternals(/* @__PURE__ */ new Map([[j, { id: j, nodeElement: c(ve), force: !0 }]]));
    }), we = c(I), he = c(D), xe = c(_);
  }), Ie(() => {
    o() && (!c(fe) || c(ve) !== ke) && (ke && o().unobserve(ke), c(ve) && o().observe(c(ve)), ke = c(ve));
  }), xi(() => {
    ke && o()?.unobserve(ke);
  });
  function Ve(ge) {
    c(J) && (!n().selectNodesOnDrag || !c(W) || n().nodeDragThreshold > 0) && n().handleNodeSelection(j), s()?.({ node: c(K), event: ge });
  }
  function Re(ge) {
    if (!(zp(ge) || n().disableKeyboardA11y))
      if (kp.includes(ge.key) && c(J)) {
        const Ee = ge.key === "Escape";
        n().handleNodeSelection(j, Ee, c(ve));
      } else c(W) && r().selected && Object.prototype.hasOwnProperty.call(Es, ge.key) && (ge.preventDefault(), n(
        n().ariaLiveMessage = c(G)["node.a11yDescription.ariaLiveMessage"]({
          direction: ge.key.replace("Arrow", "").toLowerCase(),
          x: ~~r().internals.positionAbsolute.x,
          y: ~~r().internals.positionAbsolute.y
        }),
        !0
      ), n().moveSelectedNodes(Es[ge.key], ge.shiftKey ? 4 : 1));
  }
  const He = () => {
    if (n().disableKeyboardA11y || !n().autoPanOnNodeFocus || !c(ve)?.matches(":focus-visible"))
      return;
    const { width: ge, height: Ee, viewport: at } = n();
    pu(/* @__PURE__ */ new Map([[j, r()]]), { x: 0, y: 0, width: ge, height: Ee }, [at.x, at.y, at.zoom], !0).length > 0 || n().setCenter(r().position.x + (r().measured.width ?? 0) / 2, r().position.y + (r().measured.height ?? 0) / 2, { zoom: at.zoom });
  };
  var qe = {
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
  }, gt = de(), Pt = Q(gt);
  {
    var tt = (ge) => {
      var Ee = I2();
      Ge(Ee, () => ({
        "data-id": j,
        class: [
          "svelte-flow__node",
          `svelte-flow__node-${c(I)}`,
          c(H)
        ],
        style: c(Te),
        onclick: Ve,
        onpointerenter: d() ? (Xe) => d()({ node: c(K), event: Xe }) : void 0,
        onpointerleave: h() ? (Xe) => h()({ node: c(K), event: Xe }) : void 0,
        onpointermove: p() ? (Xe) => p()({ node: c(K), event: Xe }) : void 0,
        oncontextmenu: v() ? (Xe) => v()({ node: c(K), event: Xe }) : void 0,
        onkeydown: c(ue) ? Re : void 0,
        onfocus: c(ue) ? He : void 0,
        tabIndex: c(ue) ? 0 : void 0,
        role: r().ariaRole ?? (c(ue) ? "group" : void 0),
        "aria-roledescription": "node",
        "aria-describedby": n().disableKeyboardA11y ? void 0 : `${cf}-${n().flowId}`,
        ...r().domAttributes,
        [yr]: {
          dragging: c(N),
          selected: c(y),
          draggable: c(W),
          connectable: c(re),
          selectable: c(J),
          nopan: c(W),
          parent: c(ce)
        },
        [zn]: {
          "z-index": c(E),
          transform: `translate(${c(Y) ?? ""}px, ${c(ee) ?? ""}px)`,
          visibility: c(L) ? "visible" : "hidden"
        }
      }));
      var at = q(Ee);
      St(at, () => c(De), (Xe, lt) => {
        lt(Xe, {
          get data() {
            return c(m);
          },
          get id() {
            return j;
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
            return c(D);
          },
          get targetPosition() {
            return c(_);
          },
          get zIndex() {
            return c(E);
          },
          get dragging() {
            return c(N);
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
            return c(X);
          }
        });
      }), Z(Ee), At(Ee, (Xe, lt) => lf?.(Xe, lt), () => ({
        nodeId: j,
        isSelectable: c(J),
        disabled: !c(W),
        handleSelector: c(U),
        noDragClass: n().noDragClass,
        nodeClickDistance: i(),
        onNodeMouseDown: n().handleNodeSelection,
        onDrag: (Xe, lt, bt, rt) => {
          a()?.({ event: Xe, targetNode: bt, nodes: rt });
        },
        onDragStart: (Xe, lt, bt, rt) => {
          l()?.({ event: Xe, targetNode: bt, nodes: rt });
        },
        onDragStop: (Xe, lt, bt, rt) => {
          u()?.({ event: Xe, targetNode: bt, nodes: rt });
        },
        store: n()
      })), Mt(Ee, (Xe) => F(ve, Xe), () => c(ve)), z(ge, Ee);
    };
    se(Pt, (ge) => {
      c(x) || ge(tt);
    });
  }
  return z(t, gt), le(qe);
}
ie(
  hf,
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
var R2 = /* @__PURE__ */ ne('<div class="svelte-flow__nodes"></div>');
function pf(t, e) {
  ae(e, !0);
  let n = g(e, "store", 15), r = g(e, "nodeClickDistance", 7), o = g(e, "onnodeclick", 7), i = g(e, "onnodecontextmenu", 7), s = g(e, "onnodepointerenter", 7), a = g(e, "onnodepointermove", 7), l = g(e, "onnodepointerleave", 7), u = g(e, "onnodedrag", 7), d = g(e, "onnodedragstart", 7), h = g(e, "onnodedragstop", 7);
  const p = typeof ResizeObserver > "u" ? null : new ResizeObserver((y) => {
    const w = /* @__PURE__ */ new Map();
    y.forEach((b) => {
      const k = b.target.getAttribute("data-id");
      w.set(k, { id: k, nodeElement: b.target, force: !0 });
    }), n().updateNodeInternals(w);
  });
  xi(() => {
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
  }, m = R2();
  return kt(m, 21, () => n().visible.nodes.values(), (y) => y.id, (y, w) => {
    hf(y, {
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
  pf,
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
var B2 = /* @__PURE__ */ Ce('<svg class="svelte-flow__edge-wrapper"><g><!></g></svg>');
function ff(t, e) {
  ae(e, !0);
  const n = g(e, "edge", 7), r = g(e, "store", 15), o = g(e, "onedgeclick", 7), i = g(e, "onedgecontextmenu", 7), s = g(e, "onedgepointerenter", 7), a = g(e, "onedgepointerleave", 7);
  let l = /* @__PURE__ */ $(() => n().source), u = /* @__PURE__ */ $(() => n().target), d = /* @__PURE__ */ $(() => n().sourceX), h = /* @__PURE__ */ $(() => n().sourceY), p = /* @__PURE__ */ $(() => n().targetX), v = /* @__PURE__ */ $(() => n().targetY), m = /* @__PURE__ */ $(() => n().sourcePosition), y = /* @__PURE__ */ $(() => n().targetPosition), w = /* @__PURE__ */ $(() => Ht(n().animated, !1)), b = /* @__PURE__ */ $(() => Ht(n().selected, !1)), k = /* @__PURE__ */ $(() => n().label), P = /* @__PURE__ */ $(() => n().labelStyle), C = /* @__PURE__ */ $(() => Ht(n().data, () => ({}), !0)), x = /* @__PURE__ */ $(() => n().style), N = /* @__PURE__ */ $(() => n().interactionWidth), V = /* @__PURE__ */ $(() => Ht(n().type, "default")), H = /* @__PURE__ */ $(() => n().sourceHandle), I = /* @__PURE__ */ $(() => n().targetHandle), A = /* @__PURE__ */ $(() => n().markerStart), D = /* @__PURE__ */ $(() => n().markerEnd), _ = /* @__PURE__ */ $(() => n().selectable), T = /* @__PURE__ */ $(() => n().focusable), S = /* @__PURE__ */ $(() => Ht(n().deletable, !0)), O = /* @__PURE__ */ $(() => n().hidden), M = /* @__PURE__ */ $(() => n().zIndex), B = /* @__PURE__ */ $(() => n().class), X = /* @__PURE__ */ $(() => n().ariaLabel), U = null;
  const { id: E } = n();
  Wr("svelteflow__edge_id", E);
  let Y = /* @__PURE__ */ $(() => c(_) ?? r().elementsSelectable), ee = /* @__PURE__ */ $(() => c(T) ?? r().edgesFocusable), K = /* @__PURE__ */ $(() => r().edgeTypes[c(V)] ?? bu), j = /* @__PURE__ */ $(() => c(A) ? `url('#${ul(c(A), r().flowId)}')` : void 0), W = /* @__PURE__ */ $(() => c(D) ? `url('#${ul(c(D), r().flowId)}')` : void 0);
  function J(ce) {
    const ve = r().edgeLookup.get(E);
    ve && (c(Y) && r().handleEdgeSelection(E), o()?.({ event: ce, edge: ve }));
  }
  function re(ce, ve) {
    const ke = r().edgeLookup.get(E);
    ke && ve({ event: ce, edge: ke });
  }
  function L(ce) {
    if (!r().disableKeyboardA11y && kp.includes(ce.key) && c(Y)) {
      const { unselectNodesAndEdges: ve, addSelectedEdges: ke } = r();
      ce.key === "Escape" ? (U?.blur(), ve({ edges: [n()] })) : ke([E]);
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
  }, fe = de(), ue = Q(fe);
  {
    var oe = (ce) => {
      var ve = B2();
      let ke;
      var we = q(ve);
      Ge(we, () => ({
        class: ["svelte-flow__edge", c(B)],
        "data-id": E,
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
        "aria-label": c(X) === null ? void 0 : c(X) ? c(X) : `Edge from ${c(l)} to ${c(u)}`,
        "aria-describedby": c(ee) ? `${df}-${r().flowId}` : void 0,
        role: n().ariaRole ?? (c(ee) ? "group" : "img"),
        "aria-roledescription": "edge",
        onkeydown: c(ee) ? L : void 0,
        tabindex: c(ee) ? 0 : void 0,
        ...n().domAttributes,
        [yr]: {
          animated: c(w),
          selected: c(b),
          selectable: c(Y)
        }
      }));
      var he = q(we);
      St(he, () => c(K), (xe, De) => {
        De(xe, {
          get id() {
            return E;
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
            return c(P);
          },
          get data() {
            return c(C);
          },
          get style() {
            return c(x);
          },
          get interactionWidth() {
            return c(N);
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
            return c(j);
          },
          get markerEnd() {
            return c(W);
          }
        });
      }), Z(we), Mt(we, (xe) => U = xe, () => U), Z(ve), Ne(() => ke = zt(ve, "", ke, { "z-index": c(M) })), z(ce, ve);
    };
    se(ue, (ce) => {
      c(O) || ce(oe);
    });
  }
  return z(t, fe), le(te);
}
ie(
  ff,
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
Om();
var K2 = /* @__PURE__ */ Ce("<defs></defs>");
function gf(t, e) {
  ae(e, !1);
  const n = _n();
  ou();
  var r = K2();
  kt(r, 5, () => n.markers, (o) => o.id, (o, i) => {
    vf(o, Be(() => c(i)));
  }), Z(r), z(t, r), le();
}
ie(gf, {}, [], [], !0);
var F2 = /* @__PURE__ */ Ce('<polyline class="arrow" fill="none" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4"></polyline>'), j2 = /* @__PURE__ */ Ce('<polyline class="arrowclosed" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), Z2 = /* @__PURE__ */ Ce('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function vf(t, e) {
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
  }, h = Z2(), p = q(h);
  {
    var v = (y) => {
      var w = F2();
      let b;
      Ne(() => {
        Pe(w, "stroke-width", u()), b = zt(w, "", b, { stroke: l() });
      }), z(y, w);
    }, m = (y) => {
      var w = de(), b = Q(w);
      {
        var k = (P) => {
          var C = j2();
          let x;
          Ne(() => {
            Pe(C, "stroke-width", u()), x = zt(C, "", x, { stroke: l(), fill: l() });
          }), z(P, C);
        };
        se(
          b,
          (P) => {
            r() === ui.ArrowClosed && P(k);
          },
          !0
        );
      }
      z(y, w);
    };
    se(p, (y) => {
      r() === ui.Arrow ? y(v) : y(m, !1);
    });
  }
  return Z(h), Ne(() => {
    Pe(h, "id", n()), Pe(h, "markerWidth", `${o()}`), Pe(h, "markerHeight", `${i()}`), Pe(h, "markerUnits", s()), Pe(h, "orient", a());
  }), z(t, h), le(d);
}
ie(
  vf,
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
var W2 = /* @__PURE__ */ ne('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!></div>');
function mf(t, e) {
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
  }, l = W2(), u = q(l), d = q(u);
  gf(d, {}), Z(u);
  var h = R(u, 2);
  return kt(h, 17, () => n().visible.edges.values(), (p) => p.id, (p, v) => {
    ff(p, {
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
  mf,
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
var q2 = /* @__PURE__ */ ne('<div class="svelte-flow__selection svelte-qtk83j"></div>');
const X2 = {
  hash: "svelte-qtk83j",
  code: ".svelte-flow__selection.svelte-qtk83j {position:absolute;top:0;left:0;}"
};
function xu(t, e) {
  ae(e, !0), Je(t, X2);
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
  }, l = de(), u = Q(l);
  {
    var d = (h) => {
      var p = q2();
      let v;
      Ne((m) => v = zt(p, "", v, m), [
        () => ({
          width: typeof o() == "string" ? o() : In(o()),
          height: typeof i() == "string" ? i() : In(i()),
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
ie(xu, { x: {}, y: {}, width: {}, height: {}, isVisible: {} }, [], [], !0);
var Y2 = /* @__PURE__ */ ne("<div><!></div>");
const U2 = {
  hash: "svelte-c7g5lf",
  code: `.svelte-flow__selection-wrapper.svelte-c7g5lf {position:absolute;top:0;left:0;z-index:2000;pointer-events:all;}.svelte-flow__selection-wrapper.svelte-c7g5lf:focus,
  .svelte-flow__selection-wrapper.svelte-c7g5lf:focus-visible {outline:none;}`
};
function yf(t, e) {
  ae(e, !0), Je(t, U2);
  let n = g(e, "store", 15), r = g(e, "onnodedrag", 7), o = g(e, "onnodedragstart", 7), i = g(e, "onnodedragstop", 7), s = g(e, "onselectionclick", 7), a = g(e, "onselectioncontextmenu", 7), l = /* @__PURE__ */ me(void 0);
  Ie(() => {
    n().disableKeyboardA11y || c(l)?.focus({ preventScroll: !0 });
  });
  let u = /* @__PURE__ */ $(() => {
    if (n().selectionRectMode === "nodes") {
      n().nodes;
      const b = Si(n().nodeLookup, { filter: (k) => !!k.selected });
      if (b.width > 0 && b.height > 0)
        return b;
    }
    return null;
  });
  function d(b) {
    const k = n().nodes.filter((P) => P.selected);
    a()?.({ nodes: k, event: b });
  }
  function h(b) {
    const k = n().nodes.filter((P) => P.selected);
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
  }, m = de(), y = Q(m);
  {
    var w = (b) => {
      var k = Y2();
      k.__contextmenu = d, k.__click = h, k.__keydown = function(...x) {
        (n().disableKeyboardA11y ? void 0 : p)?.apply(this, x);
      };
      let P;
      var C = q(k);
      xu(C, { width: "100%", height: "100%", x: 0, y: 0 }), Z(k), At(k, (x, N) => lf?.(x, N), () => ({
        disabled: !1,
        store: n(),
        onDrag: (x, N, V, H) => {
          r()?.({ event: x, targetNode: null, nodes: H });
        },
        onDragStart: (x, N, V, H) => {
          o()?.({ event: x, targetNode: null, nodes: H });
        },
        onDragStop: (x, N, V, H) => {
          i()?.({ event: x, targetNode: null, nodes: H });
        }
      })), Mt(k, (x) => F(l, x), () => c(l)), Ne(
        (x) => {
          Yt(k, 1, pr(["svelte-flow__selection-wrapper", n().noPanClass]), "svelte-c7g5lf"), Pe(k, "role", n().disableKeyboardA11y ? void 0 : "button"), Pe(k, "tabindex", n().disableKeyboardA11y ? void 0 : -1), P = zt(k, "", P, x);
        },
        [
          () => ({
            width: In(c(u).width),
            height: In(c(u).height),
            transform: `translate(${c(u).x ?? ""}px, ${c(u).y ?? ""}px)`
          })
        ]
      ), z(b, k);
    };
    se(y, (b) => {
      n().selectionRectMode === "nodes" && c(u) && Gn(c(u).x) && Gn(c(u).y) && b(w);
    });
  }
  return z(t, m), le(v);
}
oo(["contextmenu", "click", "keydown"]);
ie(
  yf,
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
function G2(t) {
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
function On(t, e) {
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
          let P = !1;
          for (const C of k)
            if ((Array.isArray(C) ? C : [C]).reduce(
              (x, N) => x | G2(N),
              0
            ) === u) {
              P = !0;
              break;
            }
          if (!P) continue;
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
  return n && (s = pt(t, o, i)), {
    update: (a) => {
      const { enabled: l = !0, type: u = "keydown" } = a;
      n && (!l || o !== u) ? s?.() : !n && l && (s = pt(t, u, i)), n = l, o = u, r = a.trigger;
    },
    destroy: () => {
      s?.();
    }
  };
}
function Ct() {
  const t = /* @__PURE__ */ $(_n), e = (i) => {
    const s = Xc(i) ? i : c(t).nodeLookup.get(i.id), a = s.parentId ? Sb(s.position, s.measured, s.parentId, c(t).nodeLookup, c(t).nodeOrigin) : s.position, l = {
      ...s,
      position: a,
      width: s.measured?.width ?? s.width,
      height: s.measured?.height ?? s.height
    };
    return So(l);
  };
  function n(i, s, a = { replace: !1 }) {
    c(t).nodes = st(() => c(t).nodes).map((l) => {
      if (l.id === i) {
        const u = typeof s == "function" ? s(l) : s;
        return a?.replace && Xc(u) ? u : { ...l, ...u };
      }
      return l;
    });
  }
  function r(i, s, a = { replace: !1 }) {
    c(t).edges = st(() => c(t).edges).map((l) => {
      if (l.id === i) {
        const u = typeof s == "function" ? s(l) : s;
        return a.replace && w2(u) ? u : { ...l, ...u };
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
    getViewport: () => ql(c(t).viewport),
    setCenter: async (i, s, a) => c(t).setCenter(i, s, a),
    fitView: (i) => c(t).fitView(i),
    fitBounds: async (i, s) => {
      if (!c(t).panZoom)
        return Promise.resolve(!1);
      const a = fu(i, c(t).width, c(t).height, c(t).minZoom, c(t).maxZoom, s?.padding ?? 0.1);
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
      const l = Vc(i), u = l ? i : e(i);
      return u ? (a || c(t).nodes).filter((d) => {
        const h = c(t).nodeLookup.get(d.id);
        if (!h || !l && d.id === i.id)
          return !1;
        const p = So(h), v = ci(p, u);
        return s && v > 0 || v >= p.width * p.height || v >= u.width * u.height;
      }) : [];
    },
    isNodeIntersecting: (i, s, a = !0) => {
      const l = Vc(i) ? i : e(i);
      if (!l)
        return !1;
      const u = ci(l, s);
      return a && u > 0 || u >= s.width * s.height || u >= l.width * l.height;
    },
    deleteElements: async ({ nodes: i = [], edges: s = [] }) => {
      const { nodes: a, edges: l } = await xb({
        nodesToRemove: i,
        edgesToRemove: s,
        nodes: c(t).nodes,
        edges: c(t).edges,
        onBeforeDelete: c(t).onbeforedelete
      });
      return a && (c(t).nodes = st(() => c(t).nodes).filter((u) => !a.some(({ id: d }) => d === u.id))), l && (c(t).edges = st(() => c(t).edges).filter((u) => !l.some(({ id: d }) => d === u.id))), (a.length > 0 || l.length > 0) && c(t).ondelete?.({ nodes: a, edges: l }), { deletedNodes: a, deletedEdges: l };
    },
    screenToFlowPosition: (i, s = { snapToGrid: !0 }) => {
      if (!c(t).domNode)
        return i;
      const a = s.snapToGrid ? c(t).snapGrid : !1, { x: l, y: u, zoom: d } = c(t).viewport, { x: h, y: p } = c(t).domNode.getBoundingClientRect(), v = { x: i.x - h, y: i.y - p };
      return Pi(v, [l, u, d], a !== null, a || [1, 1]);
    },
    /**
     *
     * @param position
     * @returns
     */
    flowToScreenPosition: (i) => {
      if (!c(t).domNode)
        return i;
      const { x: s, y: a, zoom: l } = c(t).viewport, { x: u, y: d } = c(t).domNode.getBoundingClientRect(), h = Ns(i, [s, a, l]);
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
    getNodesBounds: (i) => mb(i, {
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
function wf(t, e) {
  ae(e, !0);
  let n = g(e, "store", 15), r = g(e, "selectionKey", 7, "Shift"), o = g(e, "multiSelectionKey", 23, () => Rr() ? "Meta" : "Control"), i = g(e, "deleteKey", 7, "Backspace"), s = g(e, "panActivationKey", 7, " "), a = g(e, "zoomActivationKey", 23, () => Rr() ? "Meta" : "Control"), { deleteElements: l } = Ct();
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
      const P = h(k);
      return {
        key: P,
        modifier: d(k),
        enabled: P !== null,
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
    set multiSelectionKey(w = Rr() ? "Meta" : "Control") {
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
    set zoomActivationKey(w = Rr() ? "Meta" : "Control") {
      a(w), f();
    }
  };
  return ys("blur", Ft, v), ys("contextmenu", Ft, v), At(Ft, (w, b) => On?.(w, b), () => ({
    trigger: p(r(), () => n(n().selectionKeyPressed = !0, !0)),
    type: "keydown"
  })), At(Ft, (w, b) => On?.(w, b), () => ({
    trigger: p(r(), () => n(n().selectionKeyPressed = !1, !0)),
    type: "keyup"
  })), At(Ft, (w, b) => On?.(w, b), () => ({
    trigger: p(o(), () => {
      n(n().multiselectionKeyPressed = !0, !0);
    }),
    type: "keydown"
  })), At(Ft, (w, b) => On?.(w, b), () => ({
    trigger: p(o(), () => n(n().multiselectionKeyPressed = !1, !0)),
    type: "keyup"
  })), At(Ft, (w, b) => On?.(w, b), () => ({
    trigger: p(i(), (w) => {
      !(w.originalEvent.ctrlKey || w.originalEvent.metaKey || w.originalEvent.shiftKey) && !zp(w.originalEvent) && (n(n().deleteKeyPressed = !0, !0), m());
    }),
    type: "keydown"
  })), At(Ft, (w, b) => On?.(w, b), () => ({
    trigger: p(i(), () => n(n().deleteKeyPressed = !1, !0)),
    type: "keyup"
  })), At(Ft, (w, b) => On?.(w, b), () => ({
    trigger: p(s(), () => n(n().panActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), At(Ft, (w, b) => On?.(w, b), () => ({
    trigger: p(s(), () => n(n().panActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), At(Ft, (w, b) => On?.(w, b), () => ({
    trigger: p(a(), () => n(n().zoomActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), At(Ft, (w, b) => On?.(w, b), () => ({
    trigger: p(a(), () => n(n().zoomActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), le(y);
}
ie(
  wf,
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
var J2 = /* @__PURE__ */ Ce('<path fill="none" class="svelte-flow__connection-path"></path>'), Q2 = /* @__PURE__ */ Ce('<svg class="svelte-flow__connectionline"><g><!></g></svg>');
function bf(t, e) {
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
      case Yn.Bezier: {
        const [v] = Tp(p);
        return v;
      }
      case Yn.Straight: {
        const [v] = Dp(p);
        return v;
      }
      case Yn.Step:
      case Yn.SmoothStep: {
        const [v] = gu({
          ...p,
          borderRadius: r() === Yn.Step ? 0 : void 0
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
  }, u = de(), d = Q(u);
  {
    var h = (p) => {
      var v = Q2(), m = q(v), y = q(m);
      {
        var w = (k) => {
          var P = de(), C = Q(P);
          St(C, s, (x, N) => {
            N(x, {});
          }), z(k, P);
        }, b = (k) => {
          var P = J2();
          Ne(() => {
            Pe(P, "d", c(a)), zt(P, i());
          }), z(k, P);
        };
        se(y, (k) => {
          s() ? k(w) : k(b, !1);
        });
      }
      Z(m), Z(v), Ne(
        (k) => {
          Pe(v, "width", n().width), Pe(v, "height", n().height), zt(v, o()), Yt(m, 0, k);
        },
        [
          () => pr([
            "svelte-flow__connection",
            gb(n().connection.isValid)
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
  bf,
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
var ex = /* @__PURE__ */ ne("<div><!></div>");
function Ni(t, e) {
  ae(e, !0);
  let n = g(e, "position", 7, "top-right"), r = g(e, "style", 7), o = g(e, "class", 7), i = g(e, "children", 7), s = /* @__PURE__ */ Ae(e, [
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
  }, u = ex();
  Ge(u, (h) => ({ class: h, style: r(), ...s }), [
    () => ["svelte-flow__panel", o(), ...c(a)]
  ]);
  var d = q(u);
  return Oe(d, () => i() ?? Ke), Z(u), z(t, u), le(l);
}
ie(Ni, { position: {}, style: {}, class: {}, children: {} }, [], [], !0);
var tx = /* @__PURE__ */ ne('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function xf(t, e) {
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
  }, i = de(), s = Q(i);
  {
    var a = (l) => {
      Ni(l, {
        get position() {
          return r();
        },
        class: "svelte-flow__attribution",
        "data-message": "Feel free to remove the attribution or check out how you could support us: https://svelteflow.dev/support-us",
        children: (u, d) => {
          var h = tx();
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
ie(xf, { proOptions: {}, position: {} }, [], [], !0);
var nx = /* @__PURE__ */ ne("<div><!></div>");
const rx = {
  hash: "svelte-15m40wc",
  code: ".svelte-flow.svelte-15m40wc {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;background-color:var(--background-color, var(--background-color-default));}:root {--background-color-default: #fff;--background-pattern-color-default: #ddd;--minimap-mask-color-default: rgb(240, 240, 240, 0.6);--minimap-mask-stroke-color-default: none;--minimap-mask-stroke-width-default: 1;--controls-button-background-color-default: #fefefe;--controls-button-background-color-hover-default: #f4f4f4;--controls-button-color-default: inherit;--controls-button-color-hover-default: inherit;--controls-button-border-color-default: #eee;}"
};
function kf(t, e) {
  ae(e, !0), Je(t, rx);
  let n = g(e, "width", 7), r = g(e, "height", 7), o = g(e, "colorMode", 7), i = g(e, "domNode", 15), s = g(e, "clientWidth", 15), a = g(e, "clientHeight", 15), l = g(e, "children", 7), u = g(e, "rest", 7), d = /* @__PURE__ */ $(() => u().class), h = /* @__PURE__ */ $(() => t1(u(), [
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
  }, m = nx();
  Ge(
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
      [zn]: w
    }),
    [
      () => ({ width: In(n()), height: In(r()) })
    ],
    void 0,
    void 0,
    "svelte-15m40wc"
  );
  var y = q(m);
  return Oe(y, () => l() ?? Ke), Z(m), Mt(m, (w) => i(w), () => i()), hc(m, "clientHeight", a), hc(m, "clientWidth", s), z(t, m), le(v);
}
ie(
  kf,
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
var ox = /* @__PURE__ */ ne('<div class="svelte-flow__viewport-back svelte-flow__container"></div> <!> <div class="svelte-flow__edge-labels svelte-flow__container"></div> <!> <!> <!> <div class="svelte-flow__viewport-front svelte-flow__container"></div>', 1), ix = /* @__PURE__ */ ne("<!> <!>", 1), sx = /* @__PURE__ */ ne("<!> <!> <!> <!> <!>", 1);
function Cf(t, e) {
  ae(e, !0);
  let n = g(e, "width", 7), r = g(e, "height", 7), o = g(e, "proOptions", 7), i = g(e, "selectionKey", 7), s = g(e, "deleteKey", 7), a = g(e, "panActivationKey", 7), l = g(e, "multiSelectionKey", 7), u = g(e, "zoomActivationKey", 7), d = g(e, "paneClickDistance", 7, 1), h = g(e, "nodeClickDistance", 7, 1), p = g(e, "onmovestart", 7), v = g(e, "onmoveend", 7), m = g(e, "onmove", 7), y = g(e, "oninit", 7), w = g(e, "onnodeclick", 7), b = g(e, "onnodecontextmenu", 7), k = g(e, "onnodedrag", 7), P = g(e, "onnodedragstart", 7), C = g(e, "onnodedragstop", 7), x = g(e, "onnodepointerenter", 7), N = g(e, "onnodepointermove", 7), V = g(e, "onnodepointerleave", 7), H = g(e, "onselectionclick", 7), I = g(e, "onselectioncontextmenu", 7), A = g(e, "onselectionstart", 7), D = g(e, "onselectionend", 7), _ = g(e, "onedgeclick", 7), T = g(e, "onedgecontextmenu", 7), S = g(e, "onedgepointerenter", 7), O = g(e, "onedgepointerleave", 7), M = g(e, "onpaneclick", 7), B = g(e, "onpanecontextmenu", 7), X = g(e, "panOnScrollMode", 23, () => jr.Free), U = g(e, "preventScrolling", 7, !0), E = g(e, "zoomOnScroll", 7, !0), Y = g(e, "zoomOnDoubleClick", 7, !0), ee = g(e, "zoomOnPinch", 7, !0), K = g(e, "panOnScroll", 7, !1), j = g(e, "panOnScrollSpeed", 7, 0.5), W = g(e, "panOnDrag", 7, !0), J = g(e, "selectionOnDrag", 7, !1), re = g(e, "connectionLineComponent", 7), L = g(e, "connectionLineStyle", 7), te = g(e, "connectionLineContainerStyle", 7), fe = g(e, "connectionLineType", 23, () => Yn.Bezier), ue = g(e, "attributionPosition", 7), oe = g(e, "children", 7), ce = g(e, "nodes", 31, () => ht([])), ve = g(e, "edges", 31, () => ht([])), ke = g(e, "viewport", 31, () => {
  }), we = /* @__PURE__ */ Ae(e, [
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
  ]), he = rf({
    props: we,
    width: n(),
    height: r(),
    get nodes() {
      return ce();
    },
    set nodes(G) {
      ce(G);
    },
    get edges() {
      return ve();
    },
    set edges(G) {
      ve(G);
    },
    get viewport() {
      return ke();
    },
    set viewport(G) {
      ke(G);
    }
  });
  const xe = xn(zs);
  xe && xe.setStore && xe.setStore(he), Wr(zs, {
    provider: !1,
    getStore() {
      return he;
    }
  }), Ie(() => {
    const G = { nodes: he.selectedNodes, edges: he.selectedEdges };
    st(() => e.onselectionchange)?.(G);
    for (const Te of he.selectionChangeHandlers.values())
      Te(G);
  }), xi(() => {
    he.reset();
  });
  var De = {
    get width() {
      return n();
    },
    set width(G) {
      n(G), f();
    },
    get height() {
      return r();
    },
    set height(G) {
      r(G), f();
    },
    get proOptions() {
      return o();
    },
    set proOptions(G) {
      o(G), f();
    },
    get selectionKey() {
      return i();
    },
    set selectionKey(G) {
      i(G), f();
    },
    get deleteKey() {
      return s();
    },
    set deleteKey(G) {
      s(G), f();
    },
    get panActivationKey() {
      return a();
    },
    set panActivationKey(G) {
      a(G), f();
    },
    get multiSelectionKey() {
      return l();
    },
    set multiSelectionKey(G) {
      l(G), f();
    },
    get zoomActivationKey() {
      return u();
    },
    set zoomActivationKey(G) {
      u(G), f();
    },
    get paneClickDistance() {
      return d();
    },
    set paneClickDistance(G = 1) {
      d(G), f();
    },
    get nodeClickDistance() {
      return h();
    },
    set nodeClickDistance(G = 1) {
      h(G), f();
    },
    get onmovestart() {
      return p();
    },
    set onmovestart(G) {
      p(G), f();
    },
    get onmoveend() {
      return v();
    },
    set onmoveend(G) {
      v(G), f();
    },
    get onmove() {
      return m();
    },
    set onmove(G) {
      m(G), f();
    },
    get oninit() {
      return y();
    },
    set oninit(G) {
      y(G), f();
    },
    get onnodeclick() {
      return w();
    },
    set onnodeclick(G) {
      w(G), f();
    },
    get onnodecontextmenu() {
      return b();
    },
    set onnodecontextmenu(G) {
      b(G), f();
    },
    get onnodedrag() {
      return k();
    },
    set onnodedrag(G) {
      k(G), f();
    },
    get onnodedragstart() {
      return P();
    },
    set onnodedragstart(G) {
      P(G), f();
    },
    get onnodedragstop() {
      return C();
    },
    set onnodedragstop(G) {
      C(G), f();
    },
    get onnodepointerenter() {
      return x();
    },
    set onnodepointerenter(G) {
      x(G), f();
    },
    get onnodepointermove() {
      return N();
    },
    set onnodepointermove(G) {
      N(G), f();
    },
    get onnodepointerleave() {
      return V();
    },
    set onnodepointerleave(G) {
      V(G), f();
    },
    get onselectionclick() {
      return H();
    },
    set onselectionclick(G) {
      H(G), f();
    },
    get onselectioncontextmenu() {
      return I();
    },
    set onselectioncontextmenu(G) {
      I(G), f();
    },
    get onselectionstart() {
      return A();
    },
    set onselectionstart(G) {
      A(G), f();
    },
    get onselectionend() {
      return D();
    },
    set onselectionend(G) {
      D(G), f();
    },
    get onedgeclick() {
      return _();
    },
    set onedgeclick(G) {
      _(G), f();
    },
    get onedgecontextmenu() {
      return T();
    },
    set onedgecontextmenu(G) {
      T(G), f();
    },
    get onedgepointerenter() {
      return S();
    },
    set onedgepointerenter(G) {
      S(G), f();
    },
    get onedgepointerleave() {
      return O();
    },
    set onedgepointerleave(G) {
      O(G), f();
    },
    get onpaneclick() {
      return M();
    },
    set onpaneclick(G) {
      M(G), f();
    },
    get onpanecontextmenu() {
      return B();
    },
    set onpanecontextmenu(G) {
      B(G), f();
    },
    get panOnScrollMode() {
      return X();
    },
    set panOnScrollMode(G = jr.Free) {
      X(G), f();
    },
    get preventScrolling() {
      return U();
    },
    set preventScrolling(G = !0) {
      U(G), f();
    },
    get zoomOnScroll() {
      return E();
    },
    set zoomOnScroll(G = !0) {
      E(G), f();
    },
    get zoomOnDoubleClick() {
      return Y();
    },
    set zoomOnDoubleClick(G = !0) {
      Y(G), f();
    },
    get zoomOnPinch() {
      return ee();
    },
    set zoomOnPinch(G = !0) {
      ee(G), f();
    },
    get panOnScroll() {
      return K();
    },
    set panOnScroll(G = !1) {
      K(G), f();
    },
    get panOnScrollSpeed() {
      return j();
    },
    set panOnScrollSpeed(G = 0.5) {
      j(G), f();
    },
    get panOnDrag() {
      return W();
    },
    set panOnDrag(G = !0) {
      W(G), f();
    },
    get selectionOnDrag() {
      return J();
    },
    set selectionOnDrag(G = !1) {
      J(G), f();
    },
    get connectionLineComponent() {
      return re();
    },
    set connectionLineComponent(G) {
      re(G), f();
    },
    get connectionLineStyle() {
      return L();
    },
    set connectionLineStyle(G) {
      L(G), f();
    },
    get connectionLineContainerStyle() {
      return te();
    },
    set connectionLineContainerStyle(G) {
      te(G), f();
    },
    get connectionLineType() {
      return fe();
    },
    set connectionLineType(G = Yn.Bezier) {
      fe(G), f();
    },
    get attributionPosition() {
      return ue();
    },
    set attributionPosition(G) {
      ue(G), f();
    },
    get children() {
      return oe();
    },
    set children(G) {
      oe(G), f();
    },
    get nodes() {
      return ce();
    },
    set nodes(G = []) {
      ce(G), f();
    },
    get edges() {
      return ve();
    },
    set edges(G = []) {
      ve(G), f();
    },
    get viewport() {
      return ke();
    },
    set viewport(G = void 0) {
      ke(G), f();
    }
  };
  return kf(t, {
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
      return we;
    },
    get domNode() {
      return he.domNode;
    },
    set domNode(G) {
      he.domNode = G;
    },
    get clientWidth() {
      return he.width;
    },
    set clientWidth(G) {
      he.width = G;
    },
    get clientHeight() {
      return he.height;
    },
    set clientHeight(G) {
      he.height = G;
    },
    children: (G, Te) => {
      var Ve = sx(), Re = Q(Ve);
      wf(Re, {
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
        set store(tt) {
          he = tt;
        }
      });
      var He = R(Re, 2);
      of(He, {
        get panOnScrollMode() {
          return X();
        },
        get preventScrolling() {
          return U();
        },
        get zoomOnScroll() {
          return E();
        },
        get zoomOnDoubleClick() {
          return Y();
        },
        get zoomOnPinch() {
          return ee();
        },
        get panOnScroll() {
          return K();
        },
        get panOnScrollSpeed() {
          return j();
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
          return he;
        },
        set store(tt) {
          he = tt;
        },
        children: (tt, ge) => {
          sf(tt, {
            get onpaneclick() {
              return M();
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
              return J();
            },
            get store() {
              return he;
            },
            set store(Ee) {
              he = Ee;
            },
            children: (Ee, at) => {
              var Xe = ix(), lt = Q(Xe);
              af(lt, {
                get store() {
                  return he;
                },
                set store(rt) {
                  he = rt;
                },
                children: (rt, Tt) => {
                  var ut = ox(), it = R(Q(ut), 2);
                  mf(it, {
                    get onedgeclick() {
                      return _();
                    },
                    get onedgecontextmenu() {
                      return T();
                    },
                    get onedgepointerenter() {
                      return S();
                    },
                    get onedgepointerleave() {
                      return O();
                    },
                    get store() {
                      return he;
                    },
                    set store(dn) {
                      he = dn;
                    }
                  });
                  var $t = R(it, 4);
                  bf($t, {
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
                      return he;
                    },
                    set store(dn) {
                      he = dn;
                    }
                  });
                  var ao = R($t, 2);
                  pf(ao, {
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
                      return N();
                    },
                    get onnodepointerleave() {
                      return V();
                    },
                    get onnodedrag() {
                      return k();
                    },
                    get onnodedragstart() {
                      return P();
                    },
                    get onnodedragstop() {
                      return C();
                    },
                    get store() {
                      return he;
                    },
                    set store(dn) {
                      he = dn;
                    }
                  });
                  var Vo = R(ao, 2);
                  yf(Vo, {
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
                      return P();
                    },
                    get onnodedragstop() {
                      return C();
                    },
                    get store() {
                      return he;
                    },
                    set store(dn) {
                      he = dn;
                    }
                  }), Se(2), z(rt, ut);
                },
                $$slots: { default: !0 }
              });
              var bt = R(lt, 2);
              {
                let rt = /* @__PURE__ */ $(() => !!(he.selectionRect && he.selectionRectMode === "user")), Tt = /* @__PURE__ */ $(() => he.selectionRect?.width), ut = /* @__PURE__ */ $(() => he.selectionRect?.height), it = /* @__PURE__ */ $(() => he.selectionRect?.x), $t = /* @__PURE__ */ $(() => he.selectionRect?.y);
                xu(bt, {
                  get isVisible() {
                    return c(rt);
                  },
                  get width() {
                    return c(Tt);
                  },
                  get height() {
                    return c(ut);
                  },
                  get x() {
                    return c(it);
                  },
                  get y() {
                    return c($t);
                  }
                });
              }
              z(Ee, Xe);
            },
            $$slots: { default: !0 }
          });
        },
        $$slots: { default: !0 }
      });
      var qe = R(He, 2);
      xf(qe, {
        get proOptions() {
          return o();
        },
        get position() {
          return ue();
        }
      });
      var gt = R(qe, 2);
      uf(gt, {
        get store() {
          return he;
        }
      });
      var Pt = R(gt, 2);
      Oe(Pt, () => oe() ?? Ke), z(G, Ve);
    },
    $$slots: { default: !0 }
  }), le(De);
}
ie(
  Cf,
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
function $f(t, e) {
  ae(e, !0);
  let n = g(e, "children", 7), r = /* @__PURE__ */ me(rf({ props: {}, nodes: [], edges: [] }));
  Wr(zs, {
    provider: !0,
    getStore() {
      return c(r);
    },
    setStore: (a) => {
      F(r, a);
    }
  }), xi(() => {
    c(r).reset();
  });
  var o = {
    get children() {
      return n();
    },
    set children(a) {
      n(a), f();
    }
  }, i = de(), s = Q(i);
  return Oe(s, () => n() ?? Ke), z(t, i), le(o);
}
ie($f, { children: {} }, [], [], !0);
var ax = /* @__PURE__ */ ne("<button><!></button>");
function Wo(t, e) {
  ae(e, !0);
  let n = g(e, "class", 7), r = g(e, "bgColor", 7), o = g(e, "bgColorHover", 7), i = g(e, "color", 7), s = g(e, "colorHover", 7), a = g(e, "borderColor", 7), l = g(e, "onclick", 7), u = g(e, "children", 7), d = /* @__PURE__ */ Ae(e, [
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
  }, p = ax();
  Ge(p, () => ({
    type: "button",
    onclick: l(),
    class: ["svelte-flow__controls-button", n()],
    ...d,
    [zn]: {
      "--xy-controls-button-background-color-props": r(),
      "--xy-controls-button-background-color-hover-props": o(),
      "--xy-controls-button-color-props": i(),
      "--xy-controls-button-color-hover-props": s(),
      "--xy-controls-button-border-color-props": a()
    }
  }));
  var v = q(p);
  return Oe(v, () => u() ?? Ke), Z(p), z(t, p), le(h);
}
ie(
  Wo,
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
var lx = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function Sf(t) {
  var e = lx();
  z(t, e);
}
ie(Sf, {}, [], [], !0);
var ux = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function _f(t) {
  var e = ux();
  z(t, e);
}
ie(_f, {}, [], [], !0);
var cx = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function Pf(t) {
  var e = cx();
  z(t, e);
}
ie(Pf, {}, [], [], !0);
var dx = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function Of(t) {
  var e = dx();
  z(t, e);
}
ie(Of, {}, [], [], !0);
var hx = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function Nf(t) {
  var e = hx();
  z(t, e);
}
ie(Nf, {}, [], [], !0);
var px = /* @__PURE__ */ ne("<!> <!>", 1), fx = /* @__PURE__ */ ne("<!> <!> <!> <!> <!> <!>", 1);
function Ef(t, e) {
  ae(e, !0);
  let n = g(e, "position", 7, "bottom-left"), r = g(e, "orientation", 7, "vertical"), o = g(e, "showZoom", 7, !0), i = g(e, "showFitView", 7, !0), s = g(e, "showLock", 7, !0), a = g(e, "style", 7), l = g(e, "class", 7), u = g(e, "buttonBgColor", 7), d = g(e, "buttonBgColorHover", 7), h = g(e, "buttonColor", 7), p = g(e, "buttonColorHover", 7), v = g(e, "buttonBorderColor", 7), m = g(e, "fitViewOptions", 7), y = g(e, "children", 7), w = g(e, "before", 7), b = g(e, "after", 7), k = /* @__PURE__ */ Ae(e, [
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
  ]), P = /* @__PURE__ */ $(_n);
  const C = {
    bgColor: u(),
    bgColorHover: d(),
    color: h(),
    colorHover: p(),
    borderColor: v()
  };
  let x = /* @__PURE__ */ $(() => c(P).nodesDraggable || c(P).nodesConnectable || c(P).elementsSelectable), N = /* @__PURE__ */ $(() => c(P).viewport.zoom <= c(P).minZoom), V = /* @__PURE__ */ $(() => c(P).viewport.zoom >= c(P).maxZoom), H = /* @__PURE__ */ $(() => c(P).ariaLabelConfig), I = /* @__PURE__ */ $(() => r() === "horizontal" ? "horizontal" : "vertical");
  const A = () => {
    c(P).zoomIn();
  }, D = () => {
    c(P).zoomOut();
  }, _ = () => {
    c(P).fitView(m());
  }, T = () => {
    let O = !c(x);
    c(P).nodesDraggable = O, c(P).nodesConnectable = O, c(P).elementsSelectable = O;
  };
  var S = {
    get position() {
      return n();
    },
    set position(O = "bottom-left") {
      n(O), f();
    },
    get orientation() {
      return r();
    },
    set orientation(O = "vertical") {
      r(O), f();
    },
    get showZoom() {
      return o();
    },
    set showZoom(O = !0) {
      o(O), f();
    },
    get showFitView() {
      return i();
    },
    set showFitView(O = !0) {
      i(O), f();
    },
    get showLock() {
      return s();
    },
    set showLock(O = !0) {
      s(O), f();
    },
    get style() {
      return a();
    },
    set style(O) {
      a(O), f();
    },
    get class() {
      return l();
    },
    set class(O) {
      l(O), f();
    },
    get buttonBgColor() {
      return u();
    },
    set buttonBgColor(O) {
      u(O), f();
    },
    get buttonBgColorHover() {
      return d();
    },
    set buttonBgColorHover(O) {
      d(O), f();
    },
    get buttonColor() {
      return h();
    },
    set buttonColor(O) {
      h(O), f();
    },
    get buttonColorHover() {
      return p();
    },
    set buttonColorHover(O) {
      p(O), f();
    },
    get buttonBorderColor() {
      return v();
    },
    set buttonBorderColor(O) {
      v(O), f();
    },
    get fitViewOptions() {
      return m();
    },
    set fitViewOptions(O) {
      m(O), f();
    },
    get children() {
      return y();
    },
    set children(O) {
      y(O), f();
    },
    get before() {
      return w();
    },
    set before(O) {
      w(O), f();
    },
    get after() {
      return b();
    },
    set after(O) {
      b(O), f();
    }
  };
  {
    let O = /* @__PURE__ */ $(() => [
      "svelte-flow__controls",
      c(I),
      l()
    ]);
    Ni(t, Be(
      {
        get class() {
          return c(O);
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
        children: (M, B) => {
          var X = fx(), U = Q(X);
          {
            var E = (ue) => {
              var oe = de(), ce = Q(oe);
              Oe(ce, w), z(ue, oe);
            };
            se(U, (ue) => {
              w() && ue(E);
            });
          }
          var Y = R(U, 2);
          {
            var ee = (ue) => {
              var oe = px(), ce = Q(oe);
              Wo(ce, Be(
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
                  children: (ke, we) => {
                    Sf(ke);
                  },
                  $$slots: { default: !0 }
                }
              ));
              var ve = R(ce, 2);
              Wo(ve, Be(
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
                    return c(N);
                  }
                },
                () => C,
                {
                  children: (ke, we) => {
                    _f(ke);
                  },
                  $$slots: { default: !0 }
                }
              )), z(ue, oe);
            };
            se(Y, (ue) => {
              o() && ue(ee);
            });
          }
          var K = R(Y, 2);
          {
            var j = (ue) => {
              Wo(ue, Be(
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
                    Pf(oe);
                  },
                  $$slots: { default: !0 }
                }
              ));
            };
            se(K, (ue) => {
              i() && ue(j);
            });
          }
          var W = R(K, 2);
          {
            var J = (ue) => {
              Wo(ue, Be(
                {
                  class: "svelte-flow__controls-interactive",
                  onclick: T,
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
                    var ve = de(), ke = Q(ve);
                    {
                      var we = (xe) => {
                        Nf(xe);
                      }, he = (xe) => {
                        Of(xe);
                      };
                      se(ke, (xe) => {
                        c(x) ? xe(we) : xe(he, !1);
                      });
                    }
                    z(oe, ve);
                  },
                  $$slots: { default: !0 }
                }
              ));
            };
            se(W, (ue) => {
              s() && ue(J);
            });
          }
          var re = R(W, 2);
          {
            var L = (ue) => {
              var oe = de(), ce = Q(oe);
              Oe(ce, y), z(ue, oe);
            };
            se(re, (ue) => {
              y() && ue(L);
            });
          }
          var te = R(re, 2);
          {
            var fe = (ue) => {
              var oe = de(), ce = Q(oe);
              Oe(ce, b), z(ue, oe);
            };
            se(te, (ue) => {
              b() && ue(fe);
            });
          }
          z(M, X);
        },
        $$slots: { default: !0 }
      }
    ));
  }
  return le(S);
}
ie(
  Ef,
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
var Jn;
(function(t) {
  t.Lines = "lines", t.Dots = "dots", t.Cross = "cross";
})(Jn || (Jn = {}));
var gx = /* @__PURE__ */ Ce("<circle></circle>");
function zf(t, e) {
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
  }, i = gx();
  return Ne(() => {
    Pe(i, "cx", n()), Pe(i, "cy", n()), Pe(i, "r", n()), Yt(i, 0, pr(["svelte-flow__background-pattern", "dots", r()]));
  }), z(t, i), le(o);
}
ie(zf, { radius: {}, class: {} }, [], [], !0);
var vx = /* @__PURE__ */ Ce("<path></path>");
function Mf(t, e) {
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
  }, a = vx();
  return Ne(() => {
    Pe(a, "stroke-width", n()), Pe(a, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), Yt(a, 0, pr(["svelte-flow__background-pattern", o(), i()]));
  }), z(t, a), le(s);
}
ie(Mf, { lineWidth: {}, dimensions: {}, variant: {}, class: {} }, [], [], !0);
const mx = {
  [Jn.Dots]: 1,
  [Jn.Lines]: 1,
  [Jn.Cross]: 6
};
var yx = /* @__PURE__ */ Ce('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
function Tf(t, e) {
  ae(e, !0);
  let n = g(e, "id", 7), r = g(e, "variant", 23, () => Jn.Dots), o = g(e, "gap", 7, 20), i = g(e, "size", 7), s = g(e, "lineWidth", 7, 1), a = g(e, "bgColor", 7), l = g(e, "patternColor", 7), u = g(e, "patternClass", 7), d = g(e, "class", 7), h = /* @__PURE__ */ $(_n), p = /* @__PURE__ */ $(() => r() === Jn.Dots), v = /* @__PURE__ */ $(() => r() === Jn.Cross), m = /* @__PURE__ */ $(() => Array.isArray(o()) ? o() : [o(), o()]), y = /* @__PURE__ */ $(() => `background-pattern-${c(h).flowId}-${n() ?? ""}`), w = /* @__PURE__ */ $(() => [
    c(m)[0] * c(h).viewport.zoom || 1,
    c(m)[1] * c(h).viewport.zoom || 1
  ]), b = /* @__PURE__ */ $(() => (i() ?? mx[r()]) * c(h).viewport.zoom), k = /* @__PURE__ */ $(() => c(v) ? [c(b), c(b)] : c(w)), P = /* @__PURE__ */ $(() => c(p) ? [c(b) / 2, c(b) / 2] : [
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
    set variant(_ = Jn.Dots) {
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
  }, x = yx();
  let N;
  var V = q(x), H = q(V);
  {
    var I = (_) => {
      {
        let T = /* @__PURE__ */ $(() => c(b) / 2);
        zf(_, {
          get radius() {
            return c(T);
          },
          get class() {
            return u();
          }
        });
      }
    }, A = (_) => {
      Mf(_, {
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
    Yt(x, 0, pr([
      "svelte-flow__background",
      "svelte-flow__container",
      d()
    ])), N = zt(x, "", N, {
      "--xy-background-color-props": a(),
      "--xy-background-pattern-color-props": l()
    }), Pe(V, "id", c(y)), Pe(V, "x", c(h).viewport.x % c(w)[0]), Pe(V, "y", c(h).viewport.y % c(w)[1]), Pe(V, "width", c(w)[0]), Pe(V, "height", c(w)[1]), Pe(V, "patternTransform", `translate(-${c(P)[0]},-${c(P)[1]})`), Pe(D, "fill", `url(#${c(y)})`);
  }), z(t, x), le(C);
}
ie(
  Tf,
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
var wx = /* @__PURE__ */ Ce("<rect></rect>");
function Af(t, e) {
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
  }, w = de(), b = Q(w);
  {
    var k = (C) => {
      const x = /* @__PURE__ */ $(m);
      var N = de(), V = Q(N);
      St(V, () => c(x), (H, I) => {
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
      }), z(C, N);
    }, P = (C) => {
      var x = wx();
      let N, V;
      Ne(() => {
        N = Yt(x, 0, pr(["svelte-flow__minimap-node", v()]), null, N, { selected: p() }), Pe(x, "x", r()), Pe(x, "y", o()), Pe(x, "rx", a()), Pe(x, "ry", a()), Pe(x, "width", i()), Pe(x, "height", s()), Pe(x, "shape-rendering", u()), V = zt(x, "", V, {
          fill: l(),
          stroke: d(),
          "stroke-width": h()
        });
      }), z(C, x);
    };
    se(b, (C) => {
      m() ? C(k) : C(P, !1);
    });
  }
  return z(t, w), le(y);
}
ie(
  Af,
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
function bx(t, e) {
  const n = s2({
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
const La = (t) => t instanceof Function ? t : () => t;
var xx = /* @__PURE__ */ Ce("<title> </title>"), kx = /* @__PURE__ */ Ce('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>'), Cx = /* @__PURE__ */ ne('<svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>', 1);
function Df(t, e) {
  ae(e, !0);
  let n = g(e, "position", 7, "bottom-right"), r = g(e, "ariaLabel", 7), o = g(e, "nodeStrokeColor", 7, "transparent"), i = g(e, "nodeColor", 7), s = g(e, "nodeClass", 7, ""), a = g(e, "nodeBorderRadius", 7, 5), l = g(e, "nodeStrokeWidth", 7, 2), u = g(e, "nodeComponent", 7), d = g(e, "bgColor", 7), h = g(e, "maskColor", 7), p = g(e, "maskStrokeColor", 7), v = g(e, "maskStrokeWidth", 7), m = g(e, "width", 7, 200), y = g(e, "height", 7, 150), w = g(e, "pannable", 7, !0), b = g(e, "zoomable", 7, !0), k = g(e, "inversePan", 7), P = g(e, "zoomStep", 7), C = g(e, "class", 7), x = /* @__PURE__ */ Ae(e, [
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
  ]), N = /* @__PURE__ */ $(_n), V = /* @__PURE__ */ $(() => c(N).ariaLabelConfig);
  const H = i() === void 0 ? void 0 : La(i()), I = La(o()), A = La(s()), D = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  );
  let _ = /* @__PURE__ */ $(() => `svelte-flow__minimap-desc-${c(N).flowId}`), T = /* @__PURE__ */ $(() => ({
    x: -c(N).viewport.x / c(N).viewport.zoom,
    y: -c(N).viewport.y / c(N).viewport.zoom,
    width: c(N).width / c(N).viewport.zoom,
    height: c(N).height / c(N).viewport.zoom
  })), S = /* @__PURE__ */ $(() => Pp(Si(c(N).nodeLookup, { filter: (te) => !te.hidden }), c(T))), O = /* @__PURE__ */ $(() => c(S).width / m()), M = /* @__PURE__ */ $(() => c(S).height / y()), B = /* @__PURE__ */ $(() => Math.max(c(O), c(M))), X = /* @__PURE__ */ $(() => c(B) * m()), U = /* @__PURE__ */ $(() => c(B) * y()), E = /* @__PURE__ */ $(() => 5 * c(B)), Y = /* @__PURE__ */ $(() => c(S).x - (c(X) - c(S).width) / 2 - c(E)), ee = /* @__PURE__ */ $(() => c(S).y - (c(U) - c(S).height) / 2 - c(E)), K = /* @__PURE__ */ $(() => c(X) + c(E) * 2), j = /* @__PURE__ */ $(() => c(U) + c(E) * 2);
  const W = () => c(B);
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
      return P();
    },
    set zoomStep(te) {
      P(te), f();
    },
    get class() {
      return C();
    },
    set class(te) {
      C(te), f();
    }
  }, re = Cx(), L = Q(re);
  {
    let te = /* @__PURE__ */ $(() => ["svelte-flow__minimap", C()]);
    v1(L, () => ({ "--xy-minimap-background-color-props": d() })), Ni(L.lastChild, Be(
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
          var oe = de(), ce = Q(oe);
          {
            var ve = (ke) => {
              var we = kx();
              let he;
              var xe = q(we);
              {
                var De = (Ve) => {
                  var Re = xx(), He = q(Re, !0);
                  Z(Re), Ne(() => {
                    Pe(Re, "id", c(_)), nt(He, r() ?? c(V)["minimap.ariaLabel"]);
                  }), z(Ve, Re);
                };
                se(xe, (Ve) => {
                  (r() ?? c(V)["minimap.ariaLabel"]) && Ve(De);
                });
              }
              var G = R(xe);
              kt(G, 17, () => c(N).nodes, (Ve) => Ve.id, (Ve, Re) => {
                const He = /* @__PURE__ */ $(() => c(N).nodeLookup.get(c(Re).id));
                var qe = de(), gt = Q(qe);
                {
                  var Pt = (tt) => {
                    const ge = /* @__PURE__ */ $(() => Mr(c(He)));
                    {
                      let Ee = /* @__PURE__ */ $(() => H?.(c(He))), at = /* @__PURE__ */ $(() => I(c(He))), Xe = /* @__PURE__ */ $(() => A(c(He)));
                      Af(tt, Be(
                        {
                          get id() {
                            return c(He).id;
                          },
                          get x() {
                            return c(He).internals.positionAbsolute.x;
                          },
                          get y() {
                            return c(He).internals.positionAbsolute.y;
                          }
                        },
                        () => c(ge),
                        {
                          get selected() {
                            return c(He).selected;
                          },
                          get nodeComponent() {
                            return u();
                          },
                          get color() {
                            return c(Ee);
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
                            return D;
                          },
                          get class() {
                            return c(Xe);
                          }
                        }
                      ));
                    }
                  };
                  se(gt, (tt) => {
                    c(He) && Op(c(He)) && !c(He).hidden && tt(Pt);
                  });
                }
                z(Ve, qe);
              });
              var Te = R(G);
              Z(we), At(we, (Ve, Re) => bx?.(Ve, Re), () => ({
                store: c(N),
                panZoom: c(N).panZoom,
                getViewScale: W,
                translateExtent: c(N).translateExtent,
                width: c(N).width,
                height: c(N).height,
                inversePan: k(),
                zoomStep: P(),
                pannable: w(),
                zoomable: b()
              })), Ne(() => {
                Pe(we, "width", m()), Pe(we, "height", y()), Pe(we, "viewBox", `${c(Y) ?? ""} ${c(ee) ?? ""} ${c(K) ?? ""} ${c(j) ?? ""}`), Pe(we, "aria-labelledby", c(_)), he = zt(we, "", he, {
                  "--xy-minimap-mask-background-color-props": h(),
                  "--xy-minimap-mask-stroke-color-props": p(),
                  "--xy-minimap-mask-stroke-width-props": v() ? v() * c(B) : void 0
                }), Pe(Te, "d", `M${c(Y) - c(E)},${c(ee) - c(E)}h${c(K) + c(E) * 2}v${c(j) + c(E) * 2}h${-c(K) - c(E) * 2}z
      M${c(T).x ?? ""},${c(T).y ?? ""}h${c(T).width ?? ""}v${c(T).height ?? ""}h${-c(T).width}z`);
              }), z(ke, we);
            };
            se(ce, (ke) => {
              c(N).panZoom && ke(ve);
            });
          }
          z(fe, oe);
        },
        $$slots: { default: !0 }
      }
    )), Z(L);
  }
  return z(t, re), le(J);
}
ie(
  Df,
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
var $x = /* @__PURE__ */ ne("<div><!></div>");
function Vf(t, e) {
  ae(e, !0);
  let n = g(e, "nodeId", 7), r = g(e, "position", 23, () => _e.Top), o = g(e, "align", 7, "center"), i = g(e, "offset", 7, 10), s = g(e, "isVisible", 7), a = g(e, "children", 7), l = /* @__PURE__ */ Ae(e, [
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
  const u = _n(), { getNodesBounds: d } = Ct(), h = xn("svelteflow__node_id");
  let p = /* @__PURE__ */ $(() => (u.nodes, (Array.isArray(n()) ? n() : [n() ?? h]).reduce(
    (x, N) => {
      const V = u.nodeLookup.get(N);
      return V && x.push(V), x;
    },
    []
  ))), v = /* @__PURE__ */ $(() => {
    const x = d(c(p));
    return x ? Ib(x, u.viewport, r(), i(), o()) : "";
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
  }, k = de(), P = Q(k);
  {
    var C = (x) => {
      var N = $x();
      Ge(
        N,
        (H, I) => ({
          class: "svelte-flow__node-toolbar",
          "data-id": H,
          ...l,
          [zn]: I
        }),
        [
          () => c(p).reduce((H, I) => `${H}${I.id} `, "").trim(),
          () => ({
            display: Yp().value ? "none" : void 0,
            position: "absolute",
            transform: c(v),
            "z-index": c(m)
          })
        ]
      );
      var V = q(N);
      Oe(V, () => a() ?? Ke), Z(N), At(N, (H, I) => Xp?.(H, I), () => "root"), z(x, N);
    };
    se(P, (x) => {
      u.domNode && c(w) && c(p) && x(C);
    });
  }
  return z(t, k), le(b);
}
ie(
  Vf,
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
function fr(t) {
  const e = /* @__PURE__ */ $(_n), n = /* @__PURE__ */ $(() => c(e).nodes), r = /* @__PURE__ */ $(() => c(e).nodeLookup);
  let o = [], i = !0;
  const s = /* @__PURE__ */ $(() => {
    c(n);
    const a = [], l = Array.isArray(t), u = l ? t : [t];
    for (const d of u) {
      const h = c(r).get(d)?.internals.userNode;
      h && a.push({ id: h.id, type: h.type, data: h.data });
    }
    return (!Gb(a, o) || i) && (o = a, i = !1), l ? o : o[0] ?? null;
  });
  return {
    get current() {
      return c(s);
    }
  };
}
const ed = "tinyflow-component", Sx = [
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
], _x = [
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
], ku = [
  { label: "文字", value: "text" },
  { label: "图片", value: "image" },
  { label: "视频", value: "video" },
  { label: "音频", value: "audio" },
  { label: "文件", value: "file" },
  { label: "其他", value: "other" }
], Px = [
  { label: "单行输入框", value: "input" },
  { label: "多行输入框", value: "textarea" },
  { label: "下拉菜单", value: "select" },
  { label: "单选", value: "radio" },
  { label: "多选", value: "checkbox" }
], Ox = [
  { label: "单选", value: "radio" },
  { label: "多选", value: "checkbox" }
];
class Nx {
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
    const e = document.createElement(ed);
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
    const n = document.createElement(ed);
    n.style.display = "block", n.style.width = "100%", n.style.height = "100%", n.classList.add("tf-theme-light"), n.options = this.options, n.onInit = (r) => {
      this.svelteFlowInstance = r;
    }, this.destroy(), this.rootEl.appendChild(n);
  }
  destroy() {
    for (; this.rootEl.firstChild; )
      this.rootEl.removeChild(this.rootEl.firstChild);
  }
}
const Ex = () => {
  let t = /* @__PURE__ */ me([]), e = /* @__PURE__ */ me([]), n = /* @__PURE__ */ me({ x: 250, y: 100, zoom: 1 });
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
}, Ze = Ex(), zx = (t, e) => {
  const n = new Array(t.length + e.length);
  for (let r = 0; r < t.length; r++)
    n[r] = t[r];
  for (let r = 0; r < e.length; r++)
    n[t.length + r] = e[r];
  return n;
}, Mx = (t, e) => ({
  classGroupId: t,
  validator: e
}), Hf = (t = /* @__PURE__ */ new Map(), e = null, n) => ({
  nextPart: t,
  validators: e,
  classGroupId: n
}), Ms = "-", td = [], Tx = "arbitrary..", Ax = (t) => {
  const e = Vx(t), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = t;
  return {
    getClassGroupId: (o) => {
      if (o.startsWith("[") && o.endsWith("]"))
        return Dx(o);
      const i = o.split(Ms), s = i[0] === "" && i.length > 1 ? 1 : 0;
      return Lf(i, s, e);
    },
    getConflictingClassGroupIds: (o, i) => {
      if (i) {
        const s = r[o], a = n[o];
        return s ? a ? zx(a, s) : s : a || td;
      }
      return n[o] || td;
    }
  };
}, Lf = (t, e, n) => {
  if (t.length - e === 0)
    return n.classGroupId;
  const r = t[e], o = n.nextPart.get(r);
  if (o) {
    const l = Lf(t, e + 1, o);
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
}, Dx = (t) => t.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const e = t.slice(1, -1), n = e.indexOf(":"), r = e.slice(0, n);
  return r ? Tx + r : void 0;
})(), Vx = (t) => {
  const {
    theme: e,
    classGroups: n
  } = t;
  return Hx(n, e);
}, Hx = (t, e) => {
  const n = Hf();
  for (const r in t) {
    const o = t[r];
    Cu(o, n, r, e);
  }
  return n;
}, Cu = (t, e, n, r) => {
  const o = t.length;
  for (let i = 0; i < o; i++) {
    const s = t[i];
    Lx(s, e, n, r);
  }
}, Lx = (t, e, n, r) => {
  if (typeof t == "string") {
    Ix(t, e, n);
    return;
  }
  if (typeof t == "function") {
    Rx(t, e, n, r);
    return;
  }
  Bx(t, e, n, r);
}, Ix = (t, e, n) => {
  const r = t === "" ? e : If(e, t);
  r.classGroupId = n;
}, Rx = (t, e, n, r) => {
  if (Kx(t)) {
    Cu(t(r), e, n, r);
    return;
  }
  e.validators === null && (e.validators = []), e.validators.push(Mx(n, t));
}, Bx = (t, e, n, r) => {
  const o = Object.entries(t), i = o.length;
  for (let s = 0; s < i; s++) {
    const [a, l] = o[s];
    Cu(l, If(e, a), n, r);
  }
}, If = (t, e) => {
  let n = t;
  const r = e.split(Ms), o = r.length;
  for (let i = 0; i < o; i++) {
    const s = r[i];
    let a = n.nextPart.get(s);
    a || (a = Hf(), n.nextPart.set(s, a)), n = a;
  }
  return n;
}, Kx = (t) => "isThemeGetter" in t && t.isThemeGetter === !0, Fx = (t) => {
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
}, cl = "!", nd = ":", jx = [], rd = (t, e, n, r, o) => ({
  modifiers: t,
  hasImportantModifier: e,
  baseClassName: n,
  maybePostfixModifierPosition: r,
  isExternal: o
}), Zx = (t) => {
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
        if (w === nd) {
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
    h.endsWith(cl) ? (p = h.slice(0, -1), v = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      h.startsWith(cl) && (p = h.slice(1), v = !0)
    );
    const m = u && u > l ? u - l : void 0;
    return rd(i, v, p, m);
  };
  if (e) {
    const o = e + nd, i = r;
    r = (s) => s.startsWith(o) ? i(s.slice(o.length)) : rd(jx, !1, s, void 0, !0);
  }
  if (n) {
    const o = r;
    r = (i) => n({
      className: i,
      parseClassName: o
    });
  }
  return r;
}, Wx = (t) => {
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
}, qx = (t) => ({
  cache: Fx(t.cacheSize),
  parseClassName: Zx(t),
  sortModifiers: Wx(t),
  ...Ax(t)
}), Xx = /\s+/, Yx = (t, e) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o,
    sortModifiers: i
  } = e, s = [], a = t.trim().split(Xx);
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
    const k = p.length === 0 ? "" : p.length === 1 ? p[0] : i(p).join(":"), P = v ? k + cl : k, C = P + b;
    if (s.indexOf(C) > -1)
      continue;
    s.push(C);
    const x = o(b, w);
    for (let N = 0; N < x.length; ++N) {
      const V = x[N];
      s.push(P + V);
    }
    l = d + (l.length > 0 ? " " + l : l);
  }
  return l;
}, Ux = (...t) => {
  let e = 0, n, r, o = "";
  for (; e < t.length; )
    (n = t[e++]) && (r = Rf(n)) && (o && (o += " "), o += r);
  return o;
}, Rf = (t) => {
  if (typeof t == "string")
    return t;
  let e, n = "";
  for (let r = 0; r < t.length; r++)
    t[r] && (e = Rf(t[r])) && (n && (n += " "), n += e);
  return n;
}, dl = (t, ...e) => {
  let n, r, o, i;
  const s = (l) => {
    const u = e.reduce((d, h) => h(d), t());
    return n = qx(u), r = n.cache.get, o = n.cache.set, i = a, a(l);
  }, a = (l) => {
    const u = r(l);
    if (u)
      return u;
    const d = Yx(l, n);
    return o(l, d), d;
  };
  return i = s, (...l) => i(Ux(...l));
}, Gx = [], xt = (t) => {
  const e = (n) => n[t] || Gx;
  return e.isThemeGetter = !0, e;
}, Bf = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Kf = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Jx = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, Qx = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, e7 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, t7 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, n7 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, r7 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, vr = (t) => Jx.test(t), Le = (t) => !!t && !Number.isNaN(Number(t)), mr = (t) => !!t && Number.isInteger(Number(t)), Ia = (t) => t.endsWith("%") && Le(t.slice(0, -1)), Wn = (t) => Qx.test(t), Ff = () => !0, o7 = (t) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  e7.test(t) && !t7.test(t)
), $u = () => !1, i7 = (t) => n7.test(t), s7 = (t) => r7.test(t), a7 = (t) => !ye(t) && !be(t), l7 = (t) => Tr(t, Wf, $u), ye = (t) => Bf.test(t), Dr = (t) => Tr(t, qf, o7), od = (t) => Tr(t, v7, Le), u7 = (t) => Tr(t, Yf, Ff), c7 = (t) => Tr(t, Xf, $u), id = (t) => Tr(t, jf, $u), d7 = (t) => Tr(t, Zf, s7), Zi = (t) => Tr(t, Uf, i7), be = (t) => Kf.test(t), Ro = (t) => io(t, qf), h7 = (t) => io(t, Xf), sd = (t) => io(t, jf), p7 = (t) => io(t, Wf), f7 = (t) => io(t, Zf), Wi = (t) => io(t, Uf, !0), g7 = (t) => io(t, Yf, !0), Tr = (t, e, n) => {
  const r = Bf.exec(t);
  return r ? r[1] ? e(r[1]) : n(r[2]) : !1;
}, io = (t, e, n = !1) => {
  const r = Kf.exec(t);
  return r ? r[1] ? e(r[1]) : n : !1;
}, jf = (t) => t === "position" || t === "percentage", Zf = (t) => t === "image" || t === "url", Wf = (t) => t === "length" || t === "size" || t === "bg-size", qf = (t) => t === "length", v7 = (t) => t === "number", Xf = (t) => t === "family-name", Yf = (t) => t === "number" || t === "weight", Uf = (t) => t === "shadow", hl = () => {
  const t = xt("color"), e = xt("font"), n = xt("text"), r = xt("font-weight"), o = xt("tracking"), i = xt("leading"), s = xt("breakpoint"), a = xt("container"), l = xt("spacing"), u = xt("radius"), d = xt("shadow"), h = xt("inset-shadow"), p = xt("text-shadow"), v = xt("drop-shadow"), m = xt("blur"), y = xt("perspective"), w = xt("aspect"), b = xt("ease"), k = xt("animate"), P = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], C = () => [
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
  ], x = () => [...C(), be, ye], N = () => ["auto", "hidden", "clip", "visible", "scroll"], V = () => ["auto", "contain", "none"], H = () => [be, ye, l], I = () => [vr, "full", "auto", ...H()], A = () => [mr, "none", "subgrid", be, ye], D = () => ["auto", {
    span: ["full", mr, be, ye]
  }, mr, be, ye], _ = () => [mr, "auto", be, ye], T = () => ["auto", "min", "max", "fr", be, ye], S = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], O = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], M = () => ["auto", ...H()], B = () => [vr, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...H()], X = () => [vr, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...H()], U = () => [vr, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...H()], E = () => [t, be, ye], Y = () => [...C(), sd, id, {
    position: [be, ye]
  }], ee = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], K = () => ["auto", "cover", "contain", p7, l7, {
    size: [be, ye]
  }], j = () => [Ia, Ro, Dr], W = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    u,
    be,
    ye
  ], J = () => ["", Le, Ro, Dr], re = () => ["solid", "dashed", "dotted", "double"], L = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], te = () => [Le, Ia, sd, id], fe = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    m,
    be,
    ye
  ], ue = () => ["none", Le, be, ye], oe = () => ["none", Le, be, ye], ce = () => [Le, be, ye], ve = () => [vr, "full", ...H()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Wn],
      breakpoint: [Wn],
      color: [Ff],
      container: [Wn],
      "drop-shadow": [Wn],
      ease: ["in", "out", "in-out"],
      font: [a7],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [Wn],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [Wn],
      shadow: [Wn],
      spacing: ["px", Le],
      text: [Wn],
      "text-shadow": [Wn],
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
        aspect: ["auto", "square", vr, ye, be, w]
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
        columns: [Le, ye, be, a]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": P()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": P()
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
        overflow: N()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": N()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": N()
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
        z: [mr, "auto", be, ye]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [vr, "full", "auto", a, ...H()]
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
        flex: [Le, vr, "auto", "initial", "none", ye]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", Le, be, ye]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", Le, be, ye]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [mr, "first", "last", "none", be, ye]
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
        "justify-items": [...O(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...O()]
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
        items: [...O(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...O(), {
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
        "place-items": [...O(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...O()]
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
        inline: ["auto", ...X()]
      }],
      /**
       * Min-Inline Size
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-inline-size": [{
        "min-inline": ["auto", ...X()]
      }],
      /**
       * Max-Inline Size
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-inline-size": [{
        "max-inline": ["none", ...X()]
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
        text: ["base", n, Ro, Dr]
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
        font: [r, g7, u7]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Ia, ye]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [h7, c7, e]
      }],
      /**
       * Font Feature Settings
       * @see https://tailwindcss.com/docs/font-feature-settings
       */
      "font-features": [{
        "font-features": [ye]
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
        tracking: [o, be, ye]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [Le, "none", be, od]
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
        "list-image": ["none", be, ye]
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
        list: ["disc", "decimal", "none", be, ye]
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
        placeholder: E()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: E()
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
        decoration: [Le, "from-font", "auto", be, Dr]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: E()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [Le, "auto", be, ye]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", be, ye]
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
        content: ["none", be, ye]
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
        bg: K()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, mr, be, ye],
          radial: ["", be, ye],
          conic: [mr, be, ye]
        }, f7, d7]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: E()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: j()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: j()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: j()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: E()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: E()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: E()
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
        border: E()
      }],
      /**
       * Border Color Inline
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": E()
      }],
      /**
       * Border Color Block
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": E()
      }],
      /**
       * Border Color Inline Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": E()
      }],
      /**
       * Border Color Inline End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": E()
      }],
      /**
       * Border Color Block Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-bs": [{
        "border-bs": E()
      }],
      /**
       * Border Color Block End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-be": [{
        "border-be": E()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": E()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": E()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": E()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": E()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: E()
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
        "outline-offset": [Le, be, ye]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", Le, Ro, Dr]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: E()
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
          Wi,
          Zi
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: E()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", h, Wi, Zi]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": E()
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
        ring: E()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [Le, Dr]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": E()
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
        "inset-ring": E()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", p, Wi, Zi]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": E()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [Le, be, ye]
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
        "mask-linear": [Le]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": te()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": te()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": E()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": E()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": te()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": te()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": E()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": E()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": te()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": te()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": E()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": E()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": te()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": te()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": E()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": E()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": te()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": te()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": E()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": E()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": te()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": te()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": E()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": E()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": te()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": te()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": E()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": E()
      }],
      "mask-image-radial": [{
        "mask-radial": [be, ye]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": te()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": te()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": E()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": E()
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
        "mask-conic": [Le]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": te()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": te()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": E()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": E()
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
        mask: K()
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
        mask: ["none", be, ye]
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
          ye
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
        brightness: [Le, be, ye]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [Le, be, ye]
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
          Wi,
          Zi
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": E()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", Le, be, ye]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [Le, be, ye]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", Le, be, ye]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [Le, be, ye]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", Le, be, ye]
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
          ye
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
        "backdrop-brightness": [Le, be, ye]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [Le, be, ye]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", Le, be, ye]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [Le, be, ye]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", Le, be, ye]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [Le, be, ye]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [Le, be, ye]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", Le, be, ye]
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", be, ye]
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
        duration: [Le, "initial", be, ye]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", b, be, ye]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [Le, be, ye]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", k, be, ye]
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
        perspective: [y, be, ye]
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
        transform: [be, ye, "", "none", "gpu", "cpu"]
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
        accent: E()
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
        caret: E()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", be, ye]
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
        "will-change": ["auto", "scroll", "contents", "transform", be, ye]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...E()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [Le, Ro, Dr, od]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...E()]
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
}, m7 = (t, {
  cacheSize: e,
  prefix: n,
  experimentalParseClassName: r,
  extend: o = {},
  override: i = {}
}) => (qo(t, "cacheSize", e), qo(t, "prefix", n), qo(t, "experimentalParseClassName", r), qi(t.theme, i.theme), qi(t.classGroups, i.classGroups), qi(t.conflictingClassGroups, i.conflictingClassGroups), qi(t.conflictingClassGroupModifiers, i.conflictingClassGroupModifiers), qo(t, "orderSensitiveModifiers", i.orderSensitiveModifiers), Xi(t.theme, o.theme), Xi(t.classGroups, o.classGroups), Xi(t.conflictingClassGroups, o.conflictingClassGroups), Xi(t.conflictingClassGroupModifiers, o.conflictingClassGroupModifiers), Gf(t, o, "orderSensitiveModifiers"), t), qo = (t, e, n) => {
  n !== void 0 && (t[e] = n);
}, qi = (t, e) => {
  if (e)
    for (const n in e)
      qo(t, n, e[n]);
}, Xi = (t, e) => {
  if (e)
    for (const n in e)
      Gf(t, e, n);
}, Gf = (t, e, n) => {
  const r = e[n];
  r !== void 0 && (t[n] = t[n] ? t[n].concat(r) : r);
}, y7 = (t, ...e) => typeof t == "function" ? dl(hl, t, ...e) : dl(() => m7(hl(), t), ...e), Jf = /* @__PURE__ */ dl(hl);
function yn(...t) {
  return Jf(Go(t));
}
var w7 = /\s+/g, b7 = (t) => typeof t != "string" || !t ? t : t.replace(w7, " ").trim(), Ts = (...t) => {
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
  return e.length > 0 ? b7(e.join(" ")) : void 0;
}, ad = (t) => t === !1 ? "false" : t === !0 ? "true" : t === 0 ? "0" : t, Kt = (t) => {
  if (!t || typeof t != "object") return !0;
  for (const e in t) return !1;
  return !0;
}, x7 = (t, e) => {
  if (t === e) return !0;
  if (!t || !e) return !1;
  const n = Object.keys(t), r = Object.keys(e);
  if (n.length !== r.length) return !1;
  for (let o = 0; o < n.length; o++) {
    const i = n[o];
    if (!r.includes(i) || t[i] !== e[i]) return !1;
  }
  return !0;
}, k7 = (t, e) => {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      const r = e[n];
      n in t ? t[n] = Ts(t[n], r) : t[n] = r;
    }
  return t;
}, Qf = (t, e) => {
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    Array.isArray(r) ? Qf(r, e) : r && e.push(r);
  }
}, eg = (...t) => {
  const e = [];
  Qf(t, e);
  const n = [];
  for (let r = 0; r < e.length; r++)
    e[r] && n.push(e[r]);
  return n;
}, pl = (t, e) => {
  const n = {};
  for (const r in t) {
    const o = t[r];
    if (r in e) {
      const i = e[r];
      Array.isArray(o) || Array.isArray(i) ? n[r] = eg(i, o) : typeof o == "object" && typeof i == "object" && o && i ? n[r] = pl(o, i) : n[r] = i + " " + o;
    } else
      n[r] = o;
  }
  for (const r in e)
    r in t || (n[r] = e[r]);
  return n;
}, C7 = {
  twMerge: !0,
  twMergeConfig: {}
};
function $7() {
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
var Xn = $7(), S7 = (t) => {
  const e = (n, r) => {
    const {
      extend: o = null,
      slots: i = {},
      variants: s = {},
      compoundVariants: a = [],
      compoundSlots: l = [],
      defaultVariants: u = {}
    } = n, d = { ...C7, ...r }, h = o?.base ? Ts(o.base, n?.base) : n?.base, p = o?.variants && !Kt(o.variants) ? pl(s, o.variants) : s, v = o?.defaultVariants && !Kt(o.defaultVariants) ? { ...o.defaultVariants, ...u } : u;
    !Kt(d.twMergeConfig) && !x7(d.twMergeConfig, Xn.cachedTwMergeConfig) && (Xn.didTwMergeConfigChange = !0, Xn.cachedTwMergeConfig = d.twMergeConfig);
    const m = Kt(o?.slots), y = Kt(i) ? {} : {
      // add "base" to the slots object
      base: Ts(n?.base, m && o?.base),
      ...i
    }, w = m ? y : k7(
      { ...o?.slots },
      Kt(y) ? { base: n?.base } : y
    ), b = Kt(o?.compoundVariants) ? a : eg(o?.compoundVariants, a), k = (C) => {
      if (Kt(p) && Kt(i) && m)
        return t(h, C?.class, C?.className)(d);
      if (b && !Array.isArray(b))
        throw new TypeError(
          `The "compoundVariants" prop must be an array. Received: ${typeof b}`
        );
      if (l && !Array.isArray(l))
        throw new TypeError(
          `The "compoundSlots" prop must be an array. Received: ${typeof l}`
        );
      const x = (T, S = p, O = null, M = null) => {
        const B = S[T];
        if (!B || Kt(B))
          return null;
        const X = M?.[T] ?? C?.[T];
        if (X === null) return null;
        const U = ad(X);
        if (typeof U == "object")
          return null;
        const E = v?.[T], Y = U ?? ad(E);
        return B[Y || "false"];
      }, N = () => {
        if (!p) return null;
        const T = Object.keys(p), S = [];
        for (let O = 0; O < T.length; O++) {
          const M = x(T[O], p);
          M && S.push(M);
        }
        return S;
      }, V = (T, S) => {
        if (!p || typeof p != "object") return null;
        const O = [];
        for (const M in p) {
          const B = x(M, p, T, S), X = T === "base" && typeof B == "string" ? B : B && B[T];
          X && O.push(X);
        }
        return O;
      }, H = {};
      for (const T in C) {
        const S = C[T];
        S !== void 0 && (H[T] = S);
      }
      const I = (T, S) => {
        const O = typeof C?.[T] == "object" ? {
          [T]: C[T]?.initial
        } : {};
        return {
          ...v,
          ...H,
          ...O,
          ...S
        };
      }, A = (T = [], S) => {
        const O = [], M = T.length;
        for (let B = 0; B < M; B++) {
          const { class: X, className: U, ...E } = T[B];
          let Y = !0;
          const ee = I(null, S);
          for (const K in E) {
            const j = E[K], W = ee[K];
            if (Array.isArray(j)) {
              if (!j.includes(W)) {
                Y = !1;
                break;
              }
            } else {
              if ((j == null || j === !1) && (W == null || W === !1))
                continue;
              if (W !== j) {
                Y = !1;
                break;
              }
            }
          }
          Y && (X && O.push(X), U && O.push(U));
        }
        return O;
      }, D = (T) => {
        const S = A(b, T);
        if (!Array.isArray(S)) return S;
        const O = {}, M = t;
        for (let B = 0; B < S.length; B++) {
          const X = S[B];
          if (typeof X == "string")
            O.base = M(O.base, X)(d);
          else if (typeof X == "object")
            for (const U in X)
              O[U] = M(O[U], X[U])(d);
        }
        return O;
      }, _ = (T) => {
        if (l.length < 1) return null;
        const S = {}, O = I(null, T);
        for (let M = 0; M < l.length; M++) {
          const {
            slots: B = [],
            class: X,
            className: U,
            ...E
          } = l[M];
          if (!Kt(E)) {
            let Y = !0;
            for (const ee in E) {
              const K = O[ee], j = E[ee];
              if (K === void 0 || (Array.isArray(j) ? !j.includes(K) : j !== K)) {
                Y = !1;
                break;
              }
            }
            if (!Y) continue;
          }
          for (let Y = 0; Y < B.length; Y++) {
            const ee = B[Y];
            S[ee] || (S[ee] = []), S[ee].push([X, U]);
          }
        }
        return S;
      };
      if (!Kt(i) || !m) {
        const T = {};
        if (typeof w == "object" && !Kt(w)) {
          const S = t;
          for (const O in w)
            T[O] = (M) => {
              const B = D(M), X = _(M);
              return S(
                w[O],
                V(O, M),
                B ? B[O] : void 0,
                X ? X[O] : void 0,
                M?.class,
                M?.className
              )(d);
            };
        }
        return T;
      }
      return t(
        h,
        N(),
        A(b),
        C?.class,
        C?.className
      )(d);
    }, P = () => {
      if (!(!p || typeof p != "object"))
        return Object.keys(p);
    };
    return k.variantKeys = P(), k.extend = o, k.base = h, k.slots = w, k.variants = p, k.defaultVariants = v, k.compoundSlots = l, k.compoundVariants = b, k;
  };
  return {
    tv: e,
    createTV: (n) => (r, o) => e(r, o ? pl(n, o) : n)
  };
}, _7 = (t) => Kt(t) ? Jf : y7({
  ...t,
  extend: {
    theme: t.theme,
    classGroups: t.classGroups,
    conflictingClassGroupModifiers: t.conflictingClassGroupModifiers,
    conflictingClassGroups: t.conflictingClassGroups,
    ...t.extend
  }
}), P7 = (t, e) => {
  const n = Ts(t);
  return !n || !(e?.twMerge ?? !0) ? n : ((!Xn.cachedTwMerge || Xn.didTwMergeConfigChange) && (Xn.didTwMergeConfigChange = !1, Xn.cachedTwMerge = _7(Xn.cachedTwMergeConfig)), Xn.cachedTwMerge(n) || void 0);
}, O7 = (...t) => (e) => P7(t, e), { tv: N7 } = S7(O7);
const ld = N7({
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
var E7 = /* @__PURE__ */ ne("<a><!></a>"), z7 = /* @__PURE__ */ ne("<button><!></button>");
function We(t, e) {
  ae(e, !0);
  let n = g(e, "class", 7), r = g(e, "variant", 7, "outline"), o = g(e, "size", 7, "default"), i = g(e, "ref", 15, null), s = g(e, "href", 23, () => {
  }), a = g(e, "type", 7, "button"), l = g(e, "disabled", 7), u = g(e, "children", 7), d = g(e, "primary", 7), h = /* @__PURE__ */ Ae(e, [
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
  }, v = de(), m = Q(v);
  {
    var y = (b) => {
      var k = E7();
      Ge(
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
          () => yn(ld({ variant: r(), size: o() }), n())
        ]
      );
      var P = q(k);
      Oe(P, () => u() ?? Ke), Z(k), Mt(k, (C) => i(C), () => i()), z(b, k);
    }, w = (b) => {
      var k = z7();
      Ge(
        k,
        (C) => ({
          "data-slot": "button",
          class: C,
          type: a(),
          disabled: l(),
          ...h
        }),
        [
          () => yn(ld({ variant: r(), size: o() }), n())
        ]
      );
      var P = q(k);
      Oe(P, () => u() ?? Ke), Z(k), Mt(k, (C) => i(C), () => i()), z(b, k);
    };
    se(m, (b) => {
      s() ? b(y) : b(w, !1);
    });
  }
  return z(t, v), le(p);
}
ie(
  We,
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
function M7(t) {
  return typeof t == "function";
}
function Ei(t) {
  return t !== null && typeof t == "object";
}
const T7 = ["string", "number", "bigint", "boolean"];
function fl(t) {
  return t == null || T7.includes(typeof t) ? !0 : Array.isArray(t) ? t.every((e) => fl(e)) : typeof t == "object" ? Object.getPrototypeOf(t) === Object.prototype : !1;
}
const As = Symbol("box"), tg = Symbol("is-writable");
function pe(t, e) {
  const n = /* @__PURE__ */ $(t);
  return e ? {
    [As]: !0,
    [tg]: !0,
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
function ng(t) {
  return Ei(t) && As in t;
}
function A7(t) {
  return ng(t) ? t : M7(t) ? pe(t) : Tn(t);
}
function Tn(t) {
  let e = /* @__PURE__ */ me(ht(t));
  return {
    [As]: !0,
    [tg]: !0,
    get current() {
      return c(e);
    },
    set current(n) {
      F(e, n, !0);
    }
  };
}
function rg(...t) {
  return function(e) {
    for (const n of t)
      if (n) {
        if (e.defaultPrevented)
          return;
        typeof n == "function" ? n.call(this, e) : n.current?.call(this, e);
      }
  };
}
var ud = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, D7 = /\n/g, V7 = /^\s*/, H7 = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, L7 = /^:\s*/, I7 = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, R7 = /^[;\s]*/, B7 = /^\s+|\s+$/g, K7 = `
`, cd = "/", dd = "*", Hr = "", F7 = "comment", j7 = "declaration";
function Z7(t, e) {
  if (typeof t != "string")
    throw new TypeError("First argument must be a string");
  if (!t) return [];
  e = e || {};
  var n = 1, r = 1;
  function o(m) {
    var y = m.match(D7);
    y && (n += y.length);
    var w = m.lastIndexOf(K7);
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
    l(V7);
  }
  function d(m) {
    var y;
    for (m = m || []; y = h(); )
      y !== !1 && m.push(y);
    return m;
  }
  function h() {
    var m = i();
    if (!(cd != t.charAt(0) || dd != t.charAt(1))) {
      for (var y = 2; Hr != t.charAt(y) && (dd != t.charAt(y) || cd != t.charAt(y + 1)); )
        ++y;
      if (y += 2, Hr === t.charAt(y - 1))
        return a("End of comment missing");
      var w = t.slice(2, y - 2);
      return r += 2, o(w), t = t.slice(y), r += 2, m({
        type: F7,
        comment: w
      });
    }
  }
  function p() {
    var m = i(), y = l(H7);
    if (y) {
      if (h(), !l(L7)) return a("property missing ':'");
      var w = l(I7), b = m({
        type: j7,
        property: hd(y[0].replace(ud, Hr)),
        value: w ? hd(w[0].replace(ud, Hr)) : Hr
      });
      return l(R7), b;
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
function hd(t) {
  return t ? t.replace(B7, Hr) : Hr;
}
function W7(t, e) {
  let n = null;
  if (!t || typeof t != "string")
    return n;
  const r = Z7(t), o = typeof e == "function";
  return r.forEach((i) => {
    if (i.type !== "declaration")
      return;
    const { property: s, value: a } = i;
    o ? e(s, a, i) : a && (n = n || {}, n[s] = a);
  }), n;
}
const q7 = /\d/, X7 = ["-", "_", "/", "."];
function Y7(t = "") {
  if (!q7.test(t))
    return t !== t.toLowerCase();
}
function U7(t) {
  const e = [];
  let n = "", r, o;
  for (const i of t) {
    const s = X7.includes(i);
    if (s === !0) {
      e.push(n), n = "", r = void 0;
      continue;
    }
    const a = Y7(i);
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
function og(t) {
  return t ? U7(t).map((e) => J7(e)).join("") : "";
}
function G7(t) {
  return Q7(og(t || ""));
}
function J7(t) {
  return t ? t[0].toUpperCase() + t.slice(1) : "";
}
function Q7(t) {
  return t ? t[0].toLowerCase() + t.slice(1) : "";
}
function Xo(t) {
  if (!t)
    return {};
  const e = {};
  function n(r, o) {
    if (r.startsWith("-moz-") || r.startsWith("-webkit-") || r.startsWith("-ms-") || r.startsWith("-o-")) {
      e[og(r)] = o;
      return;
    }
    if (r.startsWith("--")) {
      e[r] = o;
      return;
    }
    e[G7(r)] = o;
  }
  return W7(t, n), e;
}
function Qo(...t) {
  return (...e) => {
    for (const n of t)
      typeof n == "function" && n(...e);
  };
}
function e5(t, e) {
  const n = RegExp(t, "g");
  return (r) => {
    if (typeof r != "string")
      throw new TypeError(`expected an argument of type string, but got ${typeof r}`);
    return r.match(n) ? r.replace(n, e) : r;
  };
}
const t5 = e5(/[A-Z]/, (t) => `-${t.toLowerCase()}`);
function n5(t) {
  if (!t || typeof t != "object" || Array.isArray(t))
    throw new TypeError(`expected an argument of type object, but got ${typeof t}`);
  return Object.keys(t).map((e) => `${t5(e)}: ${t[e]};`).join(`
`);
}
function Su(t = {}) {
  return n5(t).replace(`
`, " ");
}
const r5 = [
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
], o5 = new Set(r5);
function i5(t) {
  return o5.has(t);
}
function Hn(...t) {
  const e = { ...t[0] };
  for (let n = 1; n < t.length; n++) {
    const r = t[n];
    if (r) {
      for (const o of Object.keys(r)) {
        const i = e[o], s = r[o], a = typeof i == "function", l = typeof s == "function";
        if (a && i5(o)) {
          const u = i, d = s;
          e[o] = rg(u, d);
        } else if (a && l)
          e[o] = Qo(i, s);
        else if (o === "class") {
          const u = fl(i), d = fl(s);
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
  return typeof e.style == "object" && (e.style = Su(e.style).replaceAll(`
`, " ")), e.hidden === !1 && (e.hidden = void 0, delete e.hidden), e.disabled === !1 && (e.disabled = void 0, delete e.disabled), e;
}
const s5 = {
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
}, a5 = Su(s5), ig = typeof window < "u" ? window : void 0;
function l5(t) {
  let e = t.activeElement;
  for (; e?.shadowRoot; ) {
    const n = e.shadowRoot.activeElement;
    if (n === e)
      break;
    e = n;
  }
  return e;
}
let u5 = class {
  #e;
  #t;
  constructor(t = {}) {
    const { window: e = ig, document: n = e?.document } = t;
    e !== void 0 && (this.#e = n, this.#t = eo((r) => {
      const o = pt(e, "focusin", r), i = pt(e, "focusout", r);
      return () => {
        o(), i();
      };
    }));
  }
  get current() {
    return this.#t?.(), this.#e ? l5(this.#e) : null;
  }
};
new u5();
function c5(t) {
  return typeof t == "function";
}
class Ar {
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
    return Em(this.#t);
  }
  /**
   * Retrieves the context that belongs to the closest parent component.
   *
   * Must be called during component initialisation.
   *
   * @throws An error if the context does not exist.
   */
  get() {
    const e = xn(this.#t);
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
    const n = xn(this.#t);
    return n === void 0 ? e : n;
  }
  /**
   * Associates the given value with the current component and returns it.
   *
   * Must be called during component initialisation.
   */
  set(e) {
    return Wr(this.#t, e);
  }
}
function d5(t, e) {
  switch (t) {
    case "post":
      Ie(e);
      break;
    case "pre":
      jt(e);
      break;
  }
}
function sg(t, e, n, r = {}) {
  const { lazy: o = !1 } = r;
  let i = !o, s = Array.isArray(t) ? [] : void 0;
  d5(e, () => {
    const a = Array.isArray(t) ? t.map((u) => u()) : t();
    if (!i) {
      i = !0, s = a;
      return;
    }
    const l = st(() => n(a, s));
    return s = a, l;
  });
}
function wt(t, e, n) {
  sg(t, "post", e, n);
}
function h5(t, e, n) {
  sg(t, "pre", e, n);
}
wt.pre = h5;
function pd(t) {
  return c5(t) ? t() : t;
}
class p5 {
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
    const e = pd(this.#r);
    if (e)
      return eo((n) => {
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
    this.#o = n.window ?? ig, this.#n = n, this.#r = e, this.#e = { width: 0, height: 0 };
  }
  calculateSize() {
    const e = pd(this.#r);
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
class f5 {
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
function To(t) {
  Ie(() => () => {
    t();
  });
}
function g5(t) {
  Ie(() => st(() => t()));
}
function v5(t, e) {
  return setTimeout(e, t);
}
function zi(t) {
  Ah().then(t);
}
const m5 = 1, y5 = 9, w5 = 11;
function gl(t) {
  return Ei(t) && t.nodeType === m5 && typeof t.nodeName == "string";
}
function ag(t) {
  return Ei(t) && t.nodeType === y5;
}
function b5(t) {
  return Ei(t) && t.constructor?.name === "VisualViewport";
}
function x5(t) {
  return Ei(t) && t.nodeType !== void 0;
}
function lg(t) {
  return x5(t) && t.nodeType === w5 && "host" in t;
}
function k5(t, e) {
  if (!t || !e || !gl(t) || !gl(e))
    return !1;
  const n = e.getRootNode?.();
  if (t === e || t.contains(e))
    return !0;
  if (n && lg(n)) {
    let r = e;
    for (; r; ) {
      if (t === r)
        return !0;
      r = r.parentNode || r.host;
    }
  }
  return !1;
}
function C5(t) {
  return ag(t) ? t : b5(t) ? t.document : t?.ownerDocument ?? document;
}
function ug(t) {
  return lg(t) ? ug(t.host) : ag(t) ? t.defaultView ?? window : gl(t) ? t.ownerDocument?.defaultView ?? window : window;
}
function $5(t) {
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
  #e = /* @__PURE__ */ $(() => this.element.current ? this.element.current.getRootNode() ?? document : document);
  get root() {
    return c(this.#e);
  }
  set root(e) {
    F(this.#e, e);
  }
  constructor(e) {
    typeof e == "function" ? this.element = pe(e) : this.element = e;
  }
  getDocument = () => C5(this.root);
  getWindow = () => this.getDocument().defaultView ?? window;
  getActiveElement = () => $5(this.root);
  isActiveElement = (e) => e === this.getActiveElement();
  getElementById(e) {
    return this.root.getElementById(e);
  }
  querySelector = (e) => this.root ? this.root.querySelector(e) : null;
  querySelectorAll = (e) => this.root ? this.root.querySelectorAll(e) : [];
  setTimeout = (e, n) => this.getWindow().setTimeout(e, n);
  clearTimeout = (e) => this.getWindow().clearTimeout(e);
}
function $r(t, e) {
  return {
    [f1()]: (n) => ng(t) ? (t.current = n, st(() => e?.(n)), () => {
      "isConnected" in n && n.isConnected || (t.current = null, e?.(null));
    }) : (t(n), st(() => e?.(n)), () => {
      "isConnected" in n && n.isConnected || (t(null), e?.(null));
    })
  };
}
function vl(t) {
  return t ? "true" : "false";
}
function Ds(t) {
  return t ? "" : void 0;
}
function fd(t) {
  return t ? !0 : void 0;
}
function cg(t) {
  return t ? "open" : "closed";
}
function S5(t, e) {
  return e ? "mixed" : t ? "true" : "false";
}
class _5 {
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
function _u(t) {
  const e = new _5(t);
  return {
    ...e.attrs,
    selector: e.selector,
    getAttr: e.getAttr
  };
}
const Yo = "ArrowDown", co = "ArrowUp", dg = "End", ml = "Enter", P5 = "Escape", hg = "Home", pg = "PageDown", fg = "PageUp", ls = " ", gd = "Tab", gg = typeof document < "u", yl = O5();
function O5() {
  return gg && window?.navigator?.userAgent && (/iP(ad|hone|od)/.test(window.navigator.userAgent) || // The new iPad Pro Gen3 does not identify itself as iPad, but as Macintosh.
  window?.navigator?.maxTouchPoints > 2 && /iPad|Macintosh/.test(window?.navigator.userAgent));
}
function wl(t) {
  return t instanceof HTMLElement;
}
function N5(t) {
  return t instanceof Element || t instanceof SVGElement;
}
function E5(t) {
  return t !== null;
}
class z5 {
  #e;
  #t = null;
  constructor(e) {
    this.#e = e, To(() => this.#n());
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
    this.#e.afterTick ? zi(n) : n();
  }
}
class M5 {
  #e;
  #t;
  #n;
  #r = /* @__PURE__ */ me(!1);
  constructor(e) {
    this.#e = e, F(this.#r, e.open.current, !0), this.#t = e.enabled ?? !0, this.#n = new z5({ ref: this.#e.ref, afterTick: this.#e.open }), wt(() => this.#e.open.current, (n) => {
      n && F(this.#r, !0), this.#t && this.#n.run(() => {
        n === this.#e.open.current && (this.#e.open.current || F(this.#r, !1), this.#e.onComplete?.());
      });
    });
  }
  get shouldRender() {
    return c(this.#r);
  }
}
function Fe() {
}
function Rn(t, e) {
  return `bits-${t}`;
}
function vg(t, e) {
  ae(e, !0);
  const n = g(e, "children", 7);
  var r = {
    get children() {
      return n();
    },
    set children(s) {
      n(s), f();
    }
  }, o = de(), i = Q(o);
  return g1(i, n, (s) => {
    var a = de(), l = Q(a);
    Oe(l, () => n() ?? Ke), z(s, a);
  }), z(t, o), le(r);
}
ie(vg, { children: {} }, [], [], !0);
const T5 = new Ar("BitsConfig");
function A5() {
  const t = new D5(null, {});
  return T5.getOr(t).opts;
}
class D5 {
  opts;
  constructor(e, n) {
    const r = V5(e, n);
    this.opts = {
      defaultPortalTo: r((o) => o.defaultPortalTo),
      defaultLocale: r((o) => o.defaultLocale)
    };
  }
}
function V5(t, e) {
  return (n) => pe(() => {
    const r = n(e)?.current;
    if (r !== void 0)
      return r;
    if (t !== null)
      return n(t.opts)?.current;
  });
}
function H5(t, e) {
  return (n) => {
    const r = A5();
    return pe(() => {
      const o = n();
      if (o !== void 0)
        return o;
      const i = t(r).current;
      return i !== void 0 ? i : e;
    });
  };
}
const L5 = H5((t) => t.defaultPortalTo, "body");
function bl(t, e) {
  ae(e, !0);
  let n = g(e, "to", 7), r = g(e, "children", 7), o = g(e, "disabled", 7);
  const i = L5(() => n()), s = zm();
  let a = /* @__PURE__ */ $(l);
  function l() {
    if (!gg || o()) return null;
    let y = null;
    return typeof i.current == "string" ? y = document.querySelector(i.current) : y = i.current, y;
  }
  let u;
  function d() {
    u && (Ih(u), u = null);
  }
  wt([() => c(a), () => o()], ([y, w]) => {
    if (!y || w) {
      d();
      return;
    }
    return u = nu(vg, { target: y, props: { children: r() }, context: s }), () => {
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
  }, p = de(), v = Q(p);
  {
    var m = (y) => {
      var w = de(), b = Q(w);
      Oe(b, () => r() ?? Ke), z(y, w);
    };
    se(v, (y) => {
      o() && y(m);
    });
  }
  return z(t, p), le(h);
}
ie(bl, { to: {}, children: {}, disabled: {} }, [], [], !0);
function vd(t, e = 500) {
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
function mg(t, e) {
  return t === e || t.contains(e);
}
function yg(t) {
  return t?.ownerDocument ?? document;
}
function I5(t, e) {
  const { clientX: n, clientY: r } = t, o = e.getBoundingClientRect();
  return n < o.left || n > o.right || r < o.top || r > o.bottom;
}
var wg = ["input:not([inert]):not([inert] *)", "select:not([inert]):not([inert] *)", "textarea:not([inert]):not([inert] *)", "a[href]:not([inert]):not([inert] *)", "button:not([inert]):not([inert] *)", "[tabindex]:not(slot):not([inert]):not([inert] *)", "audio[controls]:not([inert]):not([inert] *)", "video[controls]:not([inert]):not([inert] *)", '[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)', "details>summary:first-of-type:not([inert]):not([inert] *)", "details:not([inert]):not([inert] *)"], xl = /* @__PURE__ */ wg.join(","), bg = typeof Element > "u", Po = bg ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, Vs = !bg && Element.prototype.getRootNode ? function(t) {
  var e;
  return t == null || (e = t.getRootNode) === null || e === void 0 ? void 0 : e.call(t);
} : function(t) {
  return t?.ownerDocument;
}, Hs = function(t, e) {
  var n;
  e === void 0 && (e = !0);
  var r = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "inert"), o = r === "" || r === "true", i = o || e && t && // closest does not exist on shadow roots, so we fall back to a manual
  // lookup upward, in case it is not defined.
  (typeof t.closest == "function" ? t.closest("[inert]") : Hs(t.parentNode));
  return i;
}, R5 = function(t) {
  var e, n = t == null || (e = t.getAttribute) === null || e === void 0 ? void 0 : e.call(t, "contenteditable");
  return n === "" || n === "true";
}, xg = function(t, e, n) {
  if (Hs(t))
    return [];
  var r = Array.prototype.slice.apply(t.querySelectorAll(xl));
  return e && Po.call(t, xl) && r.unshift(t), r = r.filter(n), r;
}, Ls = function(t, e, n) {
  for (var r = [], o = Array.from(t); o.length; ) {
    var i = o.shift();
    if (!Hs(i, !1))
      if (i.tagName === "SLOT") {
        var s = i.assignedElements(), a = s.length ? s : i.children, l = Ls(a, !0, n);
        n.flatten ? r.push.apply(r, l) : r.push({
          scopeParent: i,
          candidates: l
        });
      } else {
        var u = Po.call(i, xl);
        u && n.filter(i) && (e || !t.includes(i)) && r.push(i);
        var d = i.shadowRoot || // check for an undisclosed shadow
        typeof n.getShadowRoot == "function" && n.getShadowRoot(i), h = !Hs(d, !1) && (!n.shadowRootFilter || n.shadowRootFilter(i));
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
}, kg = function(t) {
  return !isNaN(parseInt(t.getAttribute("tabindex"), 10));
}, Cg = function(t) {
  if (!t)
    throw new Error("No node provided");
  return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || R5(t)) && !kg(t) ? 0 : t.tabIndex;
}, B5 = function(t, e) {
  var n = Cg(t);
  return n < 0 && e && !kg(t) ? 0 : n;
}, K5 = function(t, e) {
  return t.tabIndex === e.tabIndex ? t.documentOrder - e.documentOrder : t.tabIndex - e.tabIndex;
}, $g = function(t) {
  return t.tagName === "INPUT";
}, F5 = function(t) {
  return $g(t) && t.type === "hidden";
}, j5 = function(t) {
  var e = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(n) {
    return n.tagName === "SUMMARY";
  });
  return e;
}, Z5 = function(t, e) {
  for (var n = 0; n < t.length; n++)
    if (t[n].checked && t[n].form === e)
      return t[n];
}, W5 = function(t) {
  if (!t.name)
    return !0;
  var e = t.form || Vs(t), n = function(i) {
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
  var o = Z5(r, t.form);
  return !o || o === t;
}, q5 = function(t) {
  return $g(t) && t.type === "radio";
}, X5 = function(t) {
  return q5(t) && !W5(t);
}, Y5 = function(t) {
  var e, n = t && Vs(t), r = (e = n) === null || e === void 0 ? void 0 : e.host, o = !1;
  if (n && n !== t) {
    var i, s, a;
    for (o = !!((i = r) !== null && i !== void 0 && (s = i.ownerDocument) !== null && s !== void 0 && s.contains(r) || t != null && (a = t.ownerDocument) !== null && a !== void 0 && a.contains(t)); !o && r; ) {
      var l, u, d;
      n = Vs(r), r = (l = n) === null || l === void 0 ? void 0 : l.host, o = !!((u = r) !== null && u !== void 0 && (d = u.ownerDocument) !== null && d !== void 0 && d.contains(r));
    }
  }
  return o;
}, md = function(t) {
  var e = t.getBoundingClientRect(), n = e.width, r = e.height;
  return n === 0 && r === 0;
}, U5 = function(t, e) {
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
  var i = Po.call(t, "details>summary:first-of-type"), s = i ? t.parentElement : t;
  if (Po.call(s, "details:not([open]) *"))
    return !0;
  if (!n || n === "full" || // full-native can run this branch when it falls through in case
  // Element#checkVisibility is unsupported
  n === "full-native" || n === "legacy-full") {
    if (typeof r == "function") {
      for (var a = t; t; ) {
        var l = t.parentElement, u = Vs(t);
        if (l && !l.shadowRoot && r(l) === !0)
          return md(t);
        t.assignedSlot ? t = t.assignedSlot : !l && u !== t.ownerDocument ? t = u.host : t = l;
      }
      t = a;
    }
    if (Y5(t))
      return !t.getClientRects().length;
    if (n !== "legacy-full")
      return !0;
  } else if (n === "non-zero-area")
    return md(t);
  return !1;
}, G5 = function(t) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
    for (var e = t.parentElement; e; ) {
      if (e.tagName === "FIELDSET" && e.disabled) {
        for (var n = 0; n < e.children.length; n++) {
          var r = e.children.item(n);
          if (r.tagName === "LEGEND")
            return Po.call(e, "fieldset[disabled] *") ? !0 : !r.contains(t);
        }
        return !0;
      }
      e = e.parentElement;
    }
  return !1;
}, Is = function(t, e) {
  return !(e.disabled || F5(e) || U5(e, t) || // For a details element with a summary, the summary element gets the focus
  j5(e) || G5(e));
}, yd = function(t, e) {
  return !(X5(e) || Cg(e) < 0 || !Is(t, e));
}, J5 = function(t) {
  var e = parseInt(t.getAttribute("tabindex"), 10);
  return !!(isNaN(e) || e >= 0);
}, Sg = function(t) {
  var e = [], n = [];
  return t.forEach(function(r, o) {
    var i = !!r.scopeParent, s = i ? r.scopeParent : r, a = B5(s, i), l = i ? Sg(r.candidates) : s;
    a === 0 ? i ? e.push.apply(e, l) : e.push(s) : n.push({
      documentOrder: o,
      tabIndex: a,
      item: r,
      isScope: i,
      content: l
    });
  }), n.sort(K5).reduce(function(r, o) {
    return o.isScope ? r.push.apply(r, o.content) : r.push(o.content), r;
  }, []).concat(e);
}, Q5 = function(t, e) {
  e = e || {};
  var n;
  return e.getShadowRoot ? n = Ls([t], e.includeContainer, {
    filter: yd.bind(null, e),
    flatten: !1,
    getShadowRoot: e.getShadowRoot,
    shadowRootFilter: J5
  }) : n = xg(t, e.includeContainer, yd.bind(null, e)), Sg(n);
}, e3 = function(t, e) {
  e = e || {};
  var n;
  return e.getShadowRoot ? n = Ls([t], e.includeContainer, {
    filter: Is.bind(null, e),
    flatten: !0,
    getShadowRoot: e.getShadowRoot
  }) : n = xg(t, e.includeContainer, Is.bind(null, e)), n;
}, t3 = /* @__PURE__ */ wg.concat("iframe:not([inert]):not([inert] *)").join(","), n3 = function(t, e) {
  if (e = e || {}, !t)
    throw new Error("No node provided");
  return Po.call(t, t3) === !1 ? !1 : Is(e, t);
};
function r3(t, e, n = !0) {
  if (!(t.length === 0 || e < 0 || e >= t.length))
    return t.length === 1 && e === 0 ? t[0] : e === t.length - 1 ? n ? t[0] : void 0 : t[e + 1];
}
function o3(t, e, n = !0) {
  if (!(t.length === 0 || e < 0 || e >= t.length))
    return t.length === 1 && e === 0 ? t[0] : e === 0 ? n ? t[t.length - 1] : void 0 : t[e - 1];
}
function i3(t, e, n, r = !0) {
  if (t.length === 0 || e < 0 || e >= t.length)
    return;
  let o = e + n;
  return r ? o = (o % t.length + t.length) % t.length : o = Math.max(0, Math.min(o, t.length - 1)), t[o];
}
function s3(t, e, n, r = !0) {
  if (t.length === 0 || e < 0 || e >= t.length)
    return;
  let o = e - n;
  return r ? o = (o % t.length + t.length) % t.length : o = Math.max(0, Math.min(o, t.length - 1)), t[o];
}
function Pu(t, e, n) {
  const r = e.toLowerCase();
  if (r.endsWith(" ")) {
    const u = r.slice(0, -1);
    if (t.filter((p) => p.toLowerCase().startsWith(u)).length <= 1)
      return Pu(t, u, n);
    const d = n?.toLowerCase();
    if (d && d.startsWith(u) && d.charAt(u.length) === " " && e.trim() === u)
      return n;
    const h = t.filter((p) => p.toLowerCase().startsWith(r));
    if (h.length > 0) {
      const p = n ? t.indexOf(n) : -1;
      return wd(h, Math.max(p, 0)).find((v) => v !== n) || n;
    }
  }
  const o = e.length > 1 && Array.from(e).every((u) => u === e[0]) ? e[0] : e, i = o.toLowerCase(), s = n ? t.indexOf(n) : -1;
  let a = wd(t, Math.max(s, 0));
  o.length === 1 && (a = a.filter((u) => u !== n));
  const l = a.find((u) => u?.toLowerCase().startsWith(i));
  return l !== n ? l : void 0;
}
function wd(t, e) {
  return t.map((n, r) => t[(e + r) % t.length]);
}
const a3 = { afterMs: 1e4, onChange: Fe };
function _g(t, e) {
  const { afterMs: n, onChange: r, getWindow: o } = { ...a3, ...e };
  let i = null, s = /* @__PURE__ */ me(ht(t));
  function a() {
    return o().setTimeout(
      () => {
        F(s, t, !0), r?.(t);
      },
      n
    );
  }
  return Ie(() => () => {
    i && o().clearTimeout(i);
  }), pe(() => c(s), (l) => {
    F(s, l, !0), r?.(l), i && o().clearTimeout(i), i = a();
  });
}
class l3 {
  #e;
  #t;
  #n = /* @__PURE__ */ $(() => this.#e.onMatch ? this.#e.onMatch : (e) => e.focus());
  #r = /* @__PURE__ */ $(() => this.#e.getCurrentItem ? this.#e.getCurrentItem : this.#e.getActiveElement);
  constructor(e) {
    this.#e = e, this.#t = _g("", { afterMs: 1e3, getWindow: e.getWindow }), this.handleTypeaheadSearch = this.handleTypeaheadSearch.bind(this), this.resetTypeahead = this.resetTypeahead.bind(this);
  }
  handleTypeaheadSearch(e, n) {
    if (!n.length) return;
    this.#t.current = this.#t.current + e;
    const r = c(this.#r)(), o = n.find((l) => l === r)?.textContent?.trim() ?? "", i = n.map((l) => l.textContent?.trim() ?? ""), s = Pu(i, this.#t.current, o), a = n.find((l) => l.textContent?.trim() === s);
    return a && c(this.#n)(a), a;
  }
  resetTypeahead() {
    this.#t.current = "";
  }
  get search() {
    return this.#t.current;
  }
}
const u3 = "data-context-menu-trigger", c3 = "data-context-menu-content";
_u({
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
class Ou {
  static create(e) {
    return new Ou(e);
  }
  opts;
  #e;
  #t;
  #n = { pointerdown: !1 };
  #r = !1;
  #o = !1;
  #i = void 0;
  #a;
  #s = Fe;
  constructor(e) {
    this.opts = e, this.#t = e.interactOutsideBehavior, this.#e = e.onInteractOutside, this.#a = e.onFocusOutside, Ie(() => {
      this.#i = yg(this.opts.ref.current);
    });
    let n = Fe;
    const r = () => {
      this.#v(), globalThis.bitsDismissableLayers.delete(this), this.#d.destroy(), n();
    };
    wt([() => this.opts.enabled.current, () => this.opts.ref.current], () => {
      if (!(!this.opts.enabled.current || !this.opts.ref.current))
        return v5(1, () => {
          this.opts.ref.current && (globalThis.bitsDismissableLayers.set(this, this.#t), n(), n = this.#u());
        }), r;
    }), To(() => {
      this.#v.destroy(), globalThis.bitsDismissableLayers.delete(this), this.#d.destroy(), this.#s(), n();
    });
  }
  #l = (e) => {
    e.defaultPrevented || this.opts.ref.current && zi(() => {
      !this.opts.ref.current || this.#y(e.target) || e.target && !this.#o && this.#a.current?.(e);
    });
  };
  #u() {
    return Qo(
      /**
       * CAPTURE INTERACTION START
       * mark interaction-start event as intercepted.
       * mark responsible layer during interaction start
       * to avoid checking if is responsible layer during interaction end
       * when a new floating element may have been opened.
       */
      pt(this.#i, "pointerdown", Qo(this.#h, this.#p), { capture: !0 }),
      /**
       * BUBBLE INTERACTION START
       * Mark interaction-start event as non-intercepted. Debounce `onInteractOutsideStart`
       * to avoid prematurely checking if other events were intercepted.
       */
      pt(this.#i, "pointerdown", Qo(this.#f, this.#d)),
      /**
       * HANDLE FOCUS OUTSIDE
       */
      pt(this.#i, "focusin", this.#l)
    );
  }
  #c = (e) => {
    let n = e;
    n.defaultPrevented && (n = bd(e)), this.#e.current(e);
  };
  #d = vd(
    (e) => {
      if (!this.opts.ref.current) {
        this.#s();
        return;
      }
      const n = this.opts.isValidEvent.current(e, this.opts.ref.current) || p3(e, this.opts.ref.current);
      if (!this.#r || this.#w() || !n) {
        this.#s();
        return;
      }
      let r = e;
      if (r.defaultPrevented && (r = bd(r)), this.#t.current !== "close" && this.#t.current !== "defer-otherwise-close") {
        this.#s();
        return;
      }
      e.pointerType === "touch" ? (this.#s(), this.#s = pt(this.#i, "click", this.#c, { once: !0 })) : this.#e.current(r);
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
    this.opts.ref.current && (this.#r = h3(this.opts.ref.current));
  };
  #y = (e) => this.opts.ref.current ? mg(this.opts.ref.current, e) : !1;
  #v = vd(
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
function d3(t = [...globalThis.bitsDismissableLayers]) {
  return t.findLast(([e, { current: n }]) => n === "close" || n === "ignore");
}
function h3(t) {
  const e = [...globalThis.bitsDismissableLayers], n = d3(e);
  if (n) return n[0].opts.ref.current === t;
  const [r] = e[0];
  return r.opts.ref.current === t;
}
function p3(t, e) {
  const n = t.target;
  if (!N5(n)) return !1;
  const r = !!n.closest(`[${u3}]`);
  if ("button" in t && t.button > 0 && !r) return !1;
  if ("button" in t && t.button === 0 && r) return !0;
  const o = !!e.closest(`[${c3}]`);
  return r && o ? !1 : yg(n).documentElement.contains(n) && !mg(e, n) && I5(t, e);
}
function bd(t) {
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
function Pg(t, e) {
  ae(e, !0);
  let n = g(e, "interactOutsideBehavior", 7, "close"), r = g(e, "onInteractOutside", 7, Fe), o = g(e, "onFocusOutside", 7, Fe), i = g(e, "id", 7), s = g(e, "children", 7), a = g(e, "enabled", 7), l = g(e, "isValidEvent", 7, () => !1), u = g(e, "ref", 7);
  const d = Ou.create({
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
    set onInteractOutside(m = Fe) {
      r(m), f();
    },
    get onFocusOutside() {
      return o();
    },
    set onFocusOutside(m = Fe) {
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
  }, p = de(), v = Q(p);
  return Oe(v, () => s() ?? Ke, () => ({ props: d.props })), z(t, p), le(h);
}
ie(
  Pg,
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
class Nu {
  static create(e) {
    return new Nu(e);
  }
  opts;
  domContext;
  constructor(e) {
    this.opts = e, this.domContext = new Mi(this.opts.ref);
    let n = Fe;
    wt(() => e.enabled.current, (r) => (r && (globalThis.bitsEscapeLayers.set(this, e.escapeKeydownBehavior), n = this.#e()), () => {
      n(), globalThis.bitsEscapeLayers.delete(this);
    }));
  }
  #e = () => pt(this.domContext.getDocument(), "keydown", this.#t, { passive: !1 });
  #t = (e) => {
    if (e.key !== P5 || !f3(this)) return;
    const n = new KeyboardEvent(e.type, e);
    e.preventDefault();
    const r = this.opts.escapeKeydownBehavior.current;
    r !== "close" && r !== "defer-otherwise-close" || this.opts.onEscapeKeydown.current(n);
  };
}
function f3(t) {
  const e = [...globalThis.bitsEscapeLayers], n = e.findLast(([o, { current: i }]) => i === "close" || i === "ignore");
  if (n) return n[0] === t;
  const [r] = e[0];
  return r === t;
}
function Og(t, e) {
  ae(e, !0);
  let n = g(e, "escapeKeydownBehavior", 7, "close"), r = g(e, "onEscapeKeydown", 7, Fe), o = g(e, "children", 7), i = g(e, "enabled", 7), s = g(e, "ref", 7);
  Nu.create({
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
    set onEscapeKeydown(d = Fe) {
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
  }, l = de(), u = Q(l);
  return Oe(u, () => o() ?? Ke), z(t, l), le(a);
}
ie(
  Og,
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
class Eu {
  static instance;
  #e = Tn([]);
  #t = /* @__PURE__ */ new WeakMap();
  #n = /* @__PURE__ */ new WeakMap();
  static getInstance() {
    return this.instance || (this.instance = new Eu()), this.instance;
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
class zu {
  #e = !1;
  #t = null;
  #n = Eu.getInstance();
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
          if (l && e.contains(l) && n3(l))
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
    this.#r.push(pt(n, "focusin", r, { capture: !0 }), pt(e, "keydown", o));
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
    return this.#t ? Q5(this.#t, { includeContainer: !1, getShadowRoot: !0 }) : [];
  }
  #c() {
    return this.#u()[0] || null;
  }
  #d() {
    return this.#t ? e3(this.#t, { includeContainer: !1, getShadowRoot: !0 }) : [];
  }
  static use(e) {
    let n = null;
    return wt([() => e.ref.current, () => e.enabled.current], ([r, o]) => {
      r && o ? (n || (n = new zu(e)), n.mount(r)) : n && (n.unmount(), n = null);
    }), To(() => {
      n?.unmount();
    }), {
      get props() {
        return { tabindex: -1 };
      }
    };
  }
}
function Ng(t, e) {
  ae(e, !0);
  let n = g(e, "enabled", 7, !1), r = g(e, "trapFocus", 7, !1), o = g(e, "loop", 7, !1), i = g(e, "onCloseAutoFocus", 7, Fe), s = g(e, "onOpenAutoFocus", 7, Fe), a = g(e, "focusScope", 7), l = g(e, "ref", 7);
  const u = zu.use({
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
    set onCloseAutoFocus(v = Fe) {
      i(v), f();
    },
    get onOpenAutoFocus() {
      return s();
    },
    set onOpenAutoFocus(v = Fe) {
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
  }, h = de(), p = Q(h);
  return Oe(p, () => a() ?? Ke, () => ({ props: u.props })), z(t, h), le(d);
}
ie(
  Ng,
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
class Mu {
  static create(e) {
    return new Mu(e);
  }
  opts;
  domContext;
  #e = Fe;
  constructor(e) {
    this.opts = e, this.domContext = new Mi(e.ref);
    let n = Fe;
    wt(() => this.opts.enabled.current, (r) => (r && (globalThis.bitsTextSelectionLayers.set(this, this.opts.enabled), n(), n = this.#t()), () => {
      n(), this.#r(), globalThis.bitsTextSelectionLayers.delete(this);
    }));
  }
  #t() {
    return Qo(pt(this.domContext.getDocument(), "pointerdown", this.#n), pt(this.domContext.getDocument(), "pointerup", rg(this.#r, this.opts.onPointerUp.current)));
  }
  #n = (e) => {
    const n = this.opts.ref.current, r = e.target;
    !wl(n) || !wl(r) || !this.opts.enabled.current || !v3(this) || !k5(n, r) || (this.opts.onPointerDown.current(e), !e.defaultPrevented && (this.#e = g3(n, this.domContext.getDocument().body)));
  };
  #r = () => {
    this.#e(), this.#e = Fe;
  };
}
const xd = (t) => t.style.userSelect || t.style.webkitUserSelect;
function g3(t, e) {
  const n = xd(e), r = xd(t);
  return Yi(e, "none"), Yi(t, "text"), () => {
    Yi(e, n), Yi(t, r);
  };
}
function Yi(t, e) {
  t.style.userSelect = e, t.style.webkitUserSelect = e;
}
function v3(t) {
  const e = [...globalThis.bitsTextSelectionLayers];
  if (!e.length) return !1;
  const n = e.at(-1);
  return n ? n[0] === t : !1;
}
function Eg(t, e) {
  ae(e, !0);
  let n = g(e, "preventOverflowTextSelection", 7, !0), r = g(e, "onPointerDown", 7, Fe), o = g(e, "onPointerUp", 7, Fe), i = g(e, "id", 7), s = g(e, "children", 7), a = g(e, "enabled", 7), l = g(e, "ref", 7);
  Mu.create({
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
    set onPointerDown(p = Fe) {
      r(p), f();
    },
    get onPointerUp() {
      return o();
    },
    set onPointerUp(p = Fe) {
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
  }, d = de(), h = Q(d);
  return Oe(h, () => s() ?? Ke), z(t, d), le(u);
}
ie(
  Eg,
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
function Rs(t = "bits") {
  return globalThis.bitsIdCounter.current++, `${t}-${globalThis.bitsIdCounter.current}`;
}
class m3 {
  #e;
  #t = 0;
  #n = /* @__PURE__ */ me();
  #r;
  constructor(e) {
    this.#e = e;
  }
  #o() {
    this.#t -= 1, this.#r && this.#t <= 0 && (this.#r(), F(this.#n, void 0), this.#r = void 0);
  }
  get(...e) {
    return this.#t += 1, c(this.#n) === void 0 && (this.#r = to(() => {
      F(this.#n, this.#e(...e), !0);
    })), Ie(() => () => {
      this.#o();
    }), c(this.#n);
  }
}
const us = new $2();
let Ui = /* @__PURE__ */ me(null), Ra = null, Bo = null, Ko = !1;
const kd = pe(() => {
  for (const t of us.values())
    if (t) return !0;
  return !1;
});
let Ba = null;
const y3 = new m3(() => {
  function t() {
    document.body.setAttribute("style", c(Ui) ?? ""), document.body.style.removeProperty("--scrollbar-width"), yl && Ra?.(), F(Ui, null);
  }
  function e() {
    Bo !== null && (window.clearTimeout(Bo), Bo = null);
  }
  function n(o, i) {
    e(), Ko = !0, Ba = Date.now();
    const s = Ba, a = () => {
      Bo = null, Ba === s && (zg(us) ? Ko = !1 : (Ko = !1, i()));
    }, l = o === null ? 24 : o;
    Bo = window.setTimeout(a, l);
  }
  function r() {
    c(Ui) === null && us.size === 0 && !Ko && F(Ui, document.body.getAttribute("style"), !0);
  }
  return wt(() => kd.current, () => {
    if (!kd.current) return;
    r(), Ko = !1;
    const o = getComputedStyle(document.documentElement), i = getComputedStyle(document.body), s = o.scrollbarGutter?.includes("stable") || i.scrollbarGutter?.includes("stable"), a = window.innerWidth - document.documentElement.clientWidth, l = {
      padding: Number.parseInt(i.paddingRight ?? "0", 10) + a,
      margin: Number.parseInt(i.marginRight ?? "0", 10)
    };
    a > 0 && !s && (document.body.style.paddingRight = `${l.padding}px`, document.body.style.marginRight = `${l.margin}px`, document.body.style.setProperty("--scrollbar-width", `${a}px`)), document.body.style.overflow = "hidden", yl && (Ra = pt(
      document,
      "touchmove",
      (u) => {
        u.target === document.documentElement && (u.touches.length > 1 || u.preventDefault());
      },
      { passive: !1 }
    )), zi(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }), To(() => () => {
    Ra?.();
  }), {
    get lockMap() {
      return us;
    },
    resetBodyStyle: t,
    scheduleCleanupIfNoNewLocks: n,
    cancelPendingCleanup: e,
    ensureInitialStyleCaptured: r
  };
});
class w3 {
  #e = Rs();
  #t;
  #n = () => null;
  #r;
  locked;
  constructor(e, n = () => null) {
    this.#t = e, this.#n = n, this.#r = y3.get(), this.#r && (this.#r.cancelPendingCleanup(), this.#r.ensureInitialStyleCaptured(), this.#r.lockMap.set(this.#e, this.#t ?? !1), this.locked = pe(() => this.#r.lockMap.get(this.#e) ?? !1, (r) => this.#r.lockMap.set(this.#e, r)), To(() => {
      if (this.#r.lockMap.delete(this.#e), zg(this.#r.lockMap)) return;
      const r = this.#n();
      this.#r.scheduleCleanupIfNoNewLocks(r, () => {
        this.#r.resetBodyStyle();
      });
    }));
  }
}
function zg(t) {
  for (const [e, n] of t)
    if (n) return !0;
  return !1;
}
function kl(t, e) {
  ae(e, !0);
  let n = g(e, "preventScroll", 7, !0), r = g(e, "restoreScrollDelay", 7, null);
  n() && new w3(n(), () => r());
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
ie(kl, { preventScroll: {}, restoreScrollDelay: {} }, [], [], !0);
const b3 = _u({
  component: "checkbox",
  parts: ["root", "group", "group-label", "input"]
}), x3 = new Ar("Checkbox.Group"), Mg = new Ar("Checkbox.Root");
class Tu {
  static create(e, n = null) {
    return Mg.set(new Tu(e, n));
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
    this.opts = e, this.group = n, this.attachment = $r(this.opts.ref), this.onkeydown = this.onkeydown.bind(this), this.onclick = this.onclick.bind(this), wt.pre(
      [
        () => ql(this.group?.opts.value.current),
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
      if (e.key === ml) {
        e.preventDefault(), this.opts.type.current === "submit" && e.currentTarget.closest("form")?.requestSubmit();
        return;
      }
      e.key === ls && (e.preventDefault(), this.#o());
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
    "aria-checked": S5(this.opts.checked.current, this.opts.indeterminate.current),
    "aria-required": vl(this.trueRequired),
    "aria-readonly": vl(this.trueReadonly),
    "data-disabled": Ds(this.trueDisabled),
    "data-readonly": Ds(this.trueReadonly),
    "data-state": k3(this.opts.checked.current, this.opts.indeterminate.current),
    [b3.root]: "",
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
class Au {
  static create() {
    return new Au(Mg.get());
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
function k3(t, e) {
  return e ? "indeterminate" : t ? "checked" : "unchecked";
}
var C3 = /* @__PURE__ */ ne("<input/>"), $3 = /* @__PURE__ */ ne("<input/>");
function Du(t, e) {
  ae(e, !0);
  let n = g(e, "value", 15), r = /* @__PURE__ */ Ae(e, ["$$slots", "$$events", "$$legacy", "$$host", "value"]);
  const o = /* @__PURE__ */ $(() => Hn(r, {
    "aria-hidden": "true",
    tabindex: -1,
    style: a5
  }));
  var i = {
    get value() {
      return n();
    },
    set value(d) {
      n(d), f();
    }
  }, s = de(), a = Q(s);
  {
    var l = (d) => {
      var h = C3();
      Ge(h, () => ({ ...c(o), value: n() }), void 0, void 0, void 0, void 0, !0), z(d, h);
    }, u = (d) => {
      var h = $3();
      Ge(h, () => ({ ...c(o) }), void 0, void 0, void 0, void 0, !0), ws(h, n), z(d, h);
    };
    se(a, (d) => {
      c(o).type === "checkbox" ? d(l) : d(u, !1);
    });
  }
  return z(t, s), le(i);
}
ie(Du, { value: {} }, [], [], !0);
function Tg(t, e) {
  ae(e, !1);
  const n = Au.create();
  ou();
  var r = de(), o = Q(r);
  {
    var i = (s) => {
      Du(s, Be(() => n.props));
    };
    se(o, (s) => {
      n.shouldRender && s(i);
    });
  }
  z(t, r), le();
}
ie(Tg, {}, [], [], !0);
var S3 = /* @__PURE__ */ ne("<button><!></button>"), _3 = /* @__PURE__ */ ne("<!> <!>", 1);
function Ag(t, e) {
  const n = wi();
  ae(e, !0);
  let r = g(e, "checked", 15, !1), o = g(e, "ref", 15, null), i = g(e, "onCheckedChange", 7), s = g(e, "children", 7), a = g(e, "disabled", 7, !1), l = g(e, "required", 7, !1), u = g(e, "name", 23, () => {
  }), d = g(e, "value", 7, "on"), h = g(e, "id", 23, () => Rn(n)), p = g(e, "indeterminate", 15, !1), v = g(e, "onIndeterminateChange", 7), m = g(e, "child", 7), y = g(e, "type", 7, "button"), w = g(e, "readonly", 7), b = /* @__PURE__ */ Ae(e, [
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
  const k = x3.getOr(null);
  k && d() && (k.opts.value.current.includes(d()) ? r(!0) : r(!1)), wt.pre(() => d(), () => {
    k && d() && (k.opts.value.current.includes(d()) ? r(!0) : r(!1));
  });
  const P = Tu.create(
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
  ), C = /* @__PURE__ */ $(() => Hn({ ...b }, P.props));
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
    set id(D = Rn(n)) {
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
  }, N = _3(), V = Q(N);
  {
    var H = (D) => {
      var _ = de(), T = Q(_);
      {
        let S = /* @__PURE__ */ $(() => ({ props: c(C), ...P.snippetProps }));
        Oe(T, m, () => c(S));
      }
      z(D, _);
    }, I = (D) => {
      var _ = S3();
      Ge(_, () => ({ ...c(C) }));
      var T = q(_);
      Oe(T, () => s() ?? Ke, () => P.snippetProps), Z(_), z(D, _);
    };
    se(V, (D) => {
      m() ? D(H) : D(I, !1);
    });
  }
  var A = R(V, 2);
  return Tg(A, {}), z(t, N), le(x);
}
ie(
  Ag,
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
const P3 = ["top", "right", "bottom", "left"], _r = Math.min, Jt = Math.max, Bs = Math.round, Gi = Math.floor, Ln = (t) => ({
  x: t,
  y: t
}), O3 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, N3 = {
  start: "end",
  end: "start"
};
function Cl(t, e, n) {
  return Jt(t, _r(e, n));
}
function ar(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function lr(t) {
  return t.split("-")[0];
}
function Ao(t) {
  return t.split("-")[1];
}
function Vu(t) {
  return t === "x" ? "y" : "x";
}
function Hu(t) {
  return t === "y" ? "height" : "width";
}
const E3 = /* @__PURE__ */ new Set(["top", "bottom"]);
function An(t) {
  return E3.has(lr(t)) ? "y" : "x";
}
function Lu(t) {
  return Vu(An(t));
}
function z3(t, e, n) {
  n === void 0 && (n = !1);
  const r = Ao(t), o = Lu(t), i = Hu(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return e.reference[i] > e.floating[i] && (s = Ks(s)), [s, Ks(s)];
}
function M3(t) {
  const e = Ks(t);
  return [$l(t), e, $l(e)];
}
function $l(t) {
  return t.replace(/start|end/g, (e) => N3[e]);
}
const Cd = ["left", "right"], $d = ["right", "left"], T3 = ["top", "bottom"], A3 = ["bottom", "top"];
function D3(t, e, n) {
  switch (t) {
    case "top":
    case "bottom":
      return n ? e ? $d : Cd : e ? Cd : $d;
    case "left":
    case "right":
      return e ? T3 : A3;
    default:
      return [];
  }
}
function V3(t, e, n, r) {
  const o = Ao(t);
  let i = D3(lr(t), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), e && (i = i.concat(i.map($l)))), i;
}
function Ks(t) {
  return t.replace(/left|right|bottom|top/g, (e) => O3[e]);
}
function H3(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function Dg(t) {
  return typeof t != "number" ? H3(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function Fs(t) {
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
function Sd(t, e, n) {
  let {
    reference: r,
    floating: o
  } = t;
  const i = An(e), s = Lu(e), a = Hu(s), l = lr(e), u = i === "y", d = r.x + r.width / 2 - o.width / 2, h = r.y + r.height / 2 - o.height / 2, p = r[a] / 2 - o[a] / 2;
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
const L3 = async (t, e, n) => {
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
  } = Sd(u, r, l), p = r, v = {}, m = 0;
  for (let y = 0; y < a.length; y++) {
    const {
      name: w,
      fn: b
    } = a[y], {
      x: k,
      y: P,
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
    d = k ?? d, h = P ?? h, v = {
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
    } = Sd(u, p, l)), y = -1);
  }
  return {
    x: d,
    y: h,
    placement: p,
    strategy: o,
    middlewareData: v
  };
};
async function hi(t, e) {
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
  } = ar(e, t), m = Dg(v), y = a[p ? h === "floating" ? "reference" : "floating" : h], w = Fs(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(y))) == null || n ? y : y.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: u,
    rootBoundary: d,
    strategy: l
  })), b = h === "floating" ? {
    x: r,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, k = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)), P = await (i.isElement == null ? void 0 : i.isElement(k)) ? await (i.getScale == null ? void 0 : i.getScale(k)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, C = Fs(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: b,
    offsetParent: k,
    strategy: l
  }) : b);
  return {
    top: (w.top - C.top + m.top) / P.y,
    bottom: (C.bottom - w.bottom + m.bottom) / P.y,
    left: (w.left - C.left + m.left) / P.x,
    right: (C.right - w.right + m.right) / P.x
  };
}
const I3 = (t) => ({
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
    } = ar(t, e) || {};
    if (u == null)
      return {};
    const h = Dg(d), p = {
      x: n,
      y: r
    }, v = Lu(o), m = Hu(v), y = await s.getDimensions(u), w = v === "y", b = w ? "top" : "left", k = w ? "bottom" : "right", P = w ? "clientHeight" : "clientWidth", C = i.reference[m] + i.reference[v] - p[v] - i.floating[m], x = p[v] - i.reference[v], N = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
    let V = N ? N[P] : 0;
    (!V || !await (s.isElement == null ? void 0 : s.isElement(N))) && (V = a.floating[P] || i.floating[m]);
    const H = C / 2 - x / 2, I = V / 2 - y[m] / 2 - 1, A = _r(h[b], I), D = _r(h[k], I), _ = A, T = V - y[m] - D, S = V / 2 - y[m] / 2 + H, O = Cl(_, S, T), M = !l.arrow && Ao(o) != null && S !== O && i.reference[m] / 2 - (S < _ ? A : D) - y[m] / 2 < 0, B = M ? S < _ ? S - _ : S - T : 0;
    return {
      [v]: p[v] + B,
      data: {
        [v]: O,
        centerOffset: S - O - B,
        ...M && {
          alignmentOffset: B
        }
      },
      reset: M
    };
  }
}), R3 = function(t) {
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
      } = ar(t, e);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const b = lr(o), k = An(a), P = lr(a) === a, C = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), x = p || (P || !y ? [Ks(a)] : M3(a)), N = m !== "none";
      !p && N && x.push(...V3(a, y, m, C));
      const V = [a, ...x], H = await hi(e, w), I = [];
      let A = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (d && I.push(H[b]), h) {
        const S = z3(o, s, C);
        I.push(H[S[0]], H[S[1]]);
      }
      if (A = [...A, {
        placement: o,
        overflows: I
      }], !I.every((S) => S <= 0)) {
        var D, _;
        const S = (((D = i.flip) == null ? void 0 : D.index) || 0) + 1, O = V[S];
        if (O && (!(h === "alignment" && k !== An(O)) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        A.every((B) => An(B.placement) === k ? B.overflows[0] > 0 : !0)))
          return {
            data: {
              index: S,
              overflows: A
            },
            reset: {
              placement: O
            }
          };
        let M = (_ = A.filter((B) => B.overflows[0] <= 0).sort((B, X) => B.overflows[1] - X.overflows[1])[0]) == null ? void 0 : _.placement;
        if (!M)
          switch (v) {
            case "bestFit": {
              var T;
              const B = (T = A.filter((X) => {
                if (N) {
                  const U = An(X.placement);
                  return U === k || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  U === "y";
                }
                return !0;
              }).map((X) => [X.placement, X.overflows.filter((U) => U > 0).reduce((U, E) => U + E, 0)]).sort((X, U) => X[1] - U[1])[0]) == null ? void 0 : T[0];
              B && (M = B);
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
function _d(t, e) {
  return {
    top: t.top - e.height,
    right: t.right - e.width,
    bottom: t.bottom - e.height,
    left: t.left - e.width
  };
}
function Pd(t) {
  return P3.some((e) => t[e] >= 0);
}
const B3 = function(t) {
  return t === void 0 && (t = {}), {
    name: "hide",
    options: t,
    async fn(e) {
      const {
        rects: n
      } = e, {
        strategy: r = "referenceHidden",
        ...o
      } = ar(t, e);
      switch (r) {
        case "referenceHidden": {
          const i = await hi(e, {
            ...o,
            elementContext: "reference"
          }), s = _d(i, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: Pd(s)
            }
          };
        }
        case "escaped": {
          const i = await hi(e, {
            ...o,
            altBoundary: !0
          }), s = _d(i, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: Pd(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, Vg = /* @__PURE__ */ new Set(["left", "top"]);
async function K3(t, e) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = t, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = lr(n), a = Ao(n), l = An(n) === "y", u = Vg.has(s) ? -1 : 1, d = i && l ? -1 : 1, h = ar(e, t);
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
const F3 = function(t) {
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
      } = e, l = await K3(e, t);
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
}, j3 = function(t) {
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
      } = ar(t, e), u = {
        x: n,
        y: r
      }, d = await hi(e, l), h = An(lr(o)), p = Vu(h);
      let v = u[p], m = u[h];
      if (i) {
        const w = p === "y" ? "top" : "left", b = p === "y" ? "bottom" : "right", k = v + d[w], P = v - d[b];
        v = Cl(k, v, P);
      }
      if (s) {
        const w = h === "y" ? "top" : "left", b = h === "y" ? "bottom" : "right", k = m + d[w], P = m - d[b];
        m = Cl(k, m, P);
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
}, Z3 = function(t) {
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
      } = ar(t, e), d = {
        x: n,
        y: r
      }, h = An(o), p = Vu(h);
      let v = d[p], m = d[h];
      const y = ar(a, e), w = typeof y == "number" ? {
        mainAxis: y,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...y
      };
      if (l) {
        const P = p === "y" ? "height" : "width", C = i.reference[p] - i.floating[P] + w.mainAxis, x = i.reference[p] + i.reference[P] - w.mainAxis;
        v < C ? v = C : v > x && (v = x);
      }
      if (u) {
        var b, k;
        const P = p === "y" ? "width" : "height", C = Vg.has(lr(o)), x = i.reference[h] - i.floating[P] + (C && ((b = s.offset) == null ? void 0 : b[h]) || 0) + (C ? 0 : w.crossAxis), N = i.reference[h] + i.reference[P] + (C ? 0 : ((k = s.offset) == null ? void 0 : k[h]) || 0) - (C ? w.crossAxis : 0);
        m < x ? m = x : m > N && (m = N);
      }
      return {
        [p]: v,
        [h]: m
      };
    }
  };
}, W3 = function(t) {
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
      } = ar(t, e), d = await hi(e, u), h = lr(o), p = Ao(o), v = An(o) === "y", {
        width: m,
        height: y
      } = i.floating;
      let w, b;
      h === "top" || h === "bottom" ? (w = h, b = p === (await (s.isRTL == null ? void 0 : s.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (b = h, w = p === "end" ? "top" : "bottom");
      const k = y - d.top - d.bottom, P = m - d.left - d.right, C = _r(y - d[w], k), x = _r(m - d[b], P), N = !e.middlewareData.shift;
      let V = C, H = x;
      if ((n = e.middlewareData.shift) != null && n.enabled.x && (H = P), (r = e.middlewareData.shift) != null && r.enabled.y && (V = k), N && !p) {
        const A = Jt(d.left, 0), D = Jt(d.right, 0), _ = Jt(d.top, 0), T = Jt(d.bottom, 0);
        v ? H = m - 2 * (A !== 0 || D !== 0 ? A + D : Jt(d.left, d.right)) : V = y - 2 * (_ !== 0 || T !== 0 ? _ + T : Jt(d.top, d.bottom));
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
function va() {
  return typeof window < "u";
}
function Do(t) {
  return Hg(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function en(t) {
  var e;
  return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function jn(t) {
  var e;
  return (e = (Hg(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
}
function Hg(t) {
  return va() ? t instanceof Node || t instanceof en(t).Node : !1;
}
function kn(t) {
  return va() ? t instanceof Element || t instanceof en(t).Element : !1;
}
function Bn(t) {
  return va() ? t instanceof HTMLElement || t instanceof en(t).HTMLElement : !1;
}
function Od(t) {
  return !va() || typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof en(t).ShadowRoot;
}
const q3 = /* @__PURE__ */ new Set(["inline", "contents"]);
function Ti(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: r,
    display: o
  } = Cn(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + r + n) && !q3.has(o);
}
const X3 = /* @__PURE__ */ new Set(["table", "td", "th"]);
function Y3(t) {
  return X3.has(Do(t));
}
const U3 = [":popover-open", ":modal"];
function ma(t) {
  return U3.some((e) => {
    try {
      return t.matches(e);
    } catch {
      return !1;
    }
  });
}
const G3 = ["transform", "translate", "scale", "rotate", "perspective"], J3 = ["transform", "translate", "scale", "rotate", "perspective", "filter"], Q3 = ["paint", "layout", "strict", "content"];
function Iu(t) {
  const e = Ru(), n = kn(t) ? Cn(t) : t;
  return G3.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !e && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !e && (n.filter ? n.filter !== "none" : !1) || J3.some((r) => (n.willChange || "").includes(r)) || Q3.some((r) => (n.contain || "").includes(r));
}
function ek(t) {
  let e = Pr(t);
  for (; Bn(e) && !Oo(e); ) {
    if (Iu(e))
      return e;
    if (ma(e))
      return null;
    e = Pr(e);
  }
  return null;
}
function Ru() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const tk = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function Oo(t) {
  return tk.has(Do(t));
}
function Cn(t) {
  return en(t).getComputedStyle(t);
}
function ya(t) {
  return kn(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.scrollX,
    scrollTop: t.scrollY
  };
}
function Pr(t) {
  if (Do(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node.
    t.assignedSlot || // DOM Element detected.
    t.parentNode || // ShadowRoot detected.
    Od(t) && t.host || // Fallback.
    jn(t)
  );
  return Od(e) ? e.host : e;
}
function Lg(t) {
  const e = Pr(t);
  return Oo(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : Bn(e) && Ti(e) ? e : Lg(e);
}
function pi(t, e, n) {
  var r;
  e === void 0 && (e = []), n === void 0 && (n = !0);
  const o = Lg(t), i = o === ((r = t.ownerDocument) == null ? void 0 : r.body), s = en(o);
  if (i) {
    const a = Sl(s);
    return e.concat(s, s.visualViewport || [], Ti(o) ? o : [], a && n ? pi(a) : []);
  }
  return e.concat(o, pi(o, [], n));
}
function Sl(t) {
  return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null;
}
function Ig(t) {
  const e = Cn(t);
  let n = parseFloat(e.width) || 0, r = parseFloat(e.height) || 0;
  const o = Bn(t), i = o ? t.offsetWidth : n, s = o ? t.offsetHeight : r, a = Bs(n) !== i || Bs(r) !== s;
  return a && (n = i, r = s), {
    width: n,
    height: r,
    $: a
  };
}
function Bu(t) {
  return kn(t) ? t : t.contextElement;
}
function mo(t) {
  const e = Bu(t);
  if (!Bn(e))
    return Ln(1);
  const n = e.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = Ig(e);
  let s = (i ? Bs(n.width) : n.width) / r, a = (i ? Bs(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const nk = /* @__PURE__ */ Ln(0);
function Rg(t) {
  const e = en(t);
  return !Ru() || !e.visualViewport ? nk : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function rk(t, e, n) {
  return e === void 0 && (e = !1), !n || e && n !== en(t) ? !1 : e;
}
function Jr(t, e, n, r) {
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const o = t.getBoundingClientRect(), i = Bu(t);
  let s = Ln(1);
  e && (r ? kn(r) && (s = mo(r)) : s = mo(t));
  const a = rk(i, n, r) ? Rg(i) : Ln(0);
  let l = (o.left + a.x) / s.x, u = (o.top + a.y) / s.y, d = o.width / s.x, h = o.height / s.y;
  if (i) {
    const p = en(i), v = r && kn(r) ? en(r) : r;
    let m = p, y = Sl(m);
    for (; y && r && v !== m; ) {
      const w = mo(y), b = y.getBoundingClientRect(), k = Cn(y), P = b.left + (y.clientLeft + parseFloat(k.paddingLeft)) * w.x, C = b.top + (y.clientTop + parseFloat(k.paddingTop)) * w.y;
      l *= w.x, u *= w.y, d *= w.x, h *= w.y, l += P, u += C, m = en(y), y = Sl(m);
    }
  }
  return Fs({
    width: d,
    height: h,
    x: l,
    y: u
  });
}
function wa(t, e) {
  const n = ya(t).scrollLeft;
  return e ? e.left + n : Jr(jn(t)).left + n;
}
function Bg(t, e) {
  const n = t.getBoundingClientRect(), r = n.left + e.scrollLeft - wa(t, n), o = n.top + e.scrollTop;
  return {
    x: r,
    y: o
  };
}
function ok(t) {
  let {
    elements: e,
    rect: n,
    offsetParent: r,
    strategy: o
  } = t;
  const i = o === "fixed", s = jn(r), a = e ? ma(e.floating) : !1;
  if (r === s || a && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = Ln(1);
  const d = Ln(0), h = Bn(r);
  if ((h || !h && !i) && ((Do(r) !== "body" || Ti(s)) && (l = ya(r)), Bn(r))) {
    const v = Jr(r);
    u = mo(r), d.x = v.x + r.clientLeft, d.y = v.y + r.clientTop;
  }
  const p = s && !h && !i ? Bg(s, l) : Ln(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + d.x + p.x,
    y: n.y * u.y - l.scrollTop * u.y + d.y + p.y
  };
}
function ik(t) {
  return Array.from(t.getClientRects());
}
function sk(t) {
  const e = jn(t), n = ya(t), r = t.ownerDocument.body, o = Jt(e.scrollWidth, e.clientWidth, r.scrollWidth, r.clientWidth), i = Jt(e.scrollHeight, e.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + wa(t);
  const a = -n.scrollTop;
  return Cn(r).direction === "rtl" && (s += Jt(e.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
const Nd = 25;
function ak(t, e) {
  const n = en(t), r = jn(t), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, a = 0, l = 0;
  if (o) {
    i = o.width, s = o.height;
    const d = Ru();
    (!d || d && e === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  const u = wa(r);
  if (u <= 0) {
    const d = r.ownerDocument, h = d.body, p = getComputedStyle(h), v = d.compatMode === "CSS1Compat" && parseFloat(p.marginLeft) + parseFloat(p.marginRight) || 0, m = Math.abs(r.clientWidth - h.clientWidth - v);
    m <= Nd && (i -= m);
  } else u <= Nd && (i += u);
  return {
    width: i,
    height: s,
    x: a,
    y: l
  };
}
const lk = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function uk(t, e) {
  const n = Jr(t, !0, e === "fixed"), r = n.top + t.clientTop, o = n.left + t.clientLeft, i = Bn(t) ? mo(t) : Ln(1), s = t.clientWidth * i.x, a = t.clientHeight * i.y, l = o * i.x, u = r * i.y;
  return {
    width: s,
    height: a,
    x: l,
    y: u
  };
}
function Ed(t, e, n) {
  let r;
  if (e === "viewport")
    r = ak(t, n);
  else if (e === "document")
    r = sk(jn(t));
  else if (kn(e))
    r = uk(e, n);
  else {
    const o = Rg(t);
    r = {
      x: e.x - o.x,
      y: e.y - o.y,
      width: e.width,
      height: e.height
    };
  }
  return Fs(r);
}
function Kg(t, e) {
  const n = Pr(t);
  return n === e || !kn(n) || Oo(n) ? !1 : Cn(n).position === "fixed" || Kg(n, e);
}
function ck(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let r = pi(t, [], !1).filter((a) => kn(a) && Do(a) !== "body"), o = null;
  const i = Cn(t).position === "fixed";
  let s = i ? Pr(t) : t;
  for (; kn(s) && !Oo(s); ) {
    const a = Cn(s), l = Iu(s);
    !l && a.position === "fixed" && (o = null), (i ? !l && !o : !l && a.position === "static" && o && lk.has(o.position) || Ti(s) && !l && Kg(t, s)) ? r = r.filter((u) => u !== s) : o = a, s = Pr(s);
  }
  return e.set(t, r), r;
}
function dk(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = t;
  const i = [...n === "clippingAncestors" ? ma(e) ? [] : ck(e, this._c) : [].concat(n), r], s = i[0], a = i.reduce((l, u) => {
    const d = Ed(e, u, o);
    return l.top = Jt(d.top, l.top), l.right = _r(d.right, l.right), l.bottom = _r(d.bottom, l.bottom), l.left = Jt(d.left, l.left), l;
  }, Ed(e, s, o));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top
  };
}
function hk(t) {
  const {
    width: e,
    height: n
  } = Ig(t);
  return {
    width: e,
    height: n
  };
}
function pk(t, e, n) {
  const r = Bn(e), o = jn(e), i = n === "fixed", s = Jr(t, !0, i, e);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Ln(0);
  function u() {
    l.x = wa(o);
  }
  if (r || !r && !i)
    if ((Do(e) !== "body" || Ti(o)) && (a = ya(e)), r) {
      const v = Jr(e, !0, i, e);
      l.x = v.x + e.clientLeft, l.y = v.y + e.clientTop;
    } else o && u();
  i && !r && o && u();
  const d = o && !r && !i ? Bg(o, a) : Ln(0), h = s.left + a.scrollLeft - l.x - d.x, p = s.top + a.scrollTop - l.y - d.y;
  return {
    x: h,
    y: p,
    width: s.width,
    height: s.height
  };
}
function Ka(t) {
  return Cn(t).position === "static";
}
function zd(t, e) {
  if (!Bn(t) || Cn(t).position === "fixed")
    return null;
  if (e)
    return e(t);
  let n = t.offsetParent;
  return jn(t) === n && (n = n.ownerDocument.body), n;
}
function Fg(t, e) {
  const n = en(t);
  if (ma(t))
    return n;
  if (!Bn(t)) {
    let o = Pr(t);
    for (; o && !Oo(o); ) {
      if (kn(o) && !Ka(o))
        return o;
      o = Pr(o);
    }
    return n;
  }
  let r = zd(t, e);
  for (; r && Y3(r) && Ka(r); )
    r = zd(r, e);
  return r && Oo(r) && Ka(r) && !Iu(r) ? n : r || ek(t) || n;
}
const fk = async function(t) {
  const e = this.getOffsetParent || Fg, n = this.getDimensions, r = await n(t.floating);
  return {
    reference: pk(t.reference, await e(t.floating), t.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function gk(t) {
  return Cn(t).direction === "rtl";
}
const vk = {
  convertOffsetParentRelativeRectToViewportRelativeRect: ok,
  getDocumentElement: jn,
  getClippingRect: dk,
  getOffsetParent: Fg,
  getElementRects: fk,
  getClientRects: ik,
  getDimensions: hk,
  getScale: mo,
  isElement: kn,
  isRTL: gk
};
function jg(t, e) {
  return t.x === e.x && t.y === e.y && t.width === e.width && t.height === e.height;
}
function mk(t, e) {
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
      threshold: Jt(0, _r(1, l)) || 1
    };
    let P = !0;
    function C(x) {
      const N = x[0].intersectionRatio;
      if (N !== l) {
        if (!P)
          return s();
        N ? s(!1, N) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      N === 1 && !jg(u, t.getBoundingClientRect()) && s(), P = !1;
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
function yk(t, e, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, u = Bu(t), d = o || i ? [...u ? pi(u) : [], ...pi(e)] : [];
  d.forEach((b) => {
    o && b.addEventListener("scroll", n, {
      passive: !0
    }), i && b.addEventListener("resize", n);
  });
  const h = u && a ? mk(u, n) : null;
  let p = -1, v = null;
  s && (v = new ResizeObserver((b) => {
    let [k] = b;
    k && k.target === u && v && (v.unobserve(e), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var P;
      (P = v) == null || P.observe(e);
    })), n();
  }), u && !l && v.observe(u), v.observe(e));
  let m, y = l ? Jr(t) : null;
  l && w();
  function w() {
    const b = Jr(t);
    y && !jg(y, b) && n(), y = b, m = requestAnimationFrame(w);
  }
  return n(), () => {
    var b;
    d.forEach((k) => {
      o && k.removeEventListener("scroll", n), i && k.removeEventListener("resize", n);
    }), h?.(), (b = v) == null || b.disconnect(), v = null, l && cancelAnimationFrame(m);
  };
}
const Zg = F3, Wg = j3, qg = R3, wk = W3, bk = B3, Xg = I3, xk = Z3, Yg = (t, e, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: vk,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return L3(t, e, {
    ...o,
    platform: i
  });
};
function Vr(t) {
  return typeof t == "function" ? t() : t;
}
function Ug(t) {
  return typeof window > "u" ? 1 : (t.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Md(t, e) {
  const n = Ug(t);
  return Math.round(e * n) / n;
}
function kk(t) {
  return {
    [`--bits-${t}-content-transform-origin`]: "var(--bits-floating-transform-origin)",
    [`--bits-${t}-content-available-width`]: "var(--bits-floating-available-width)",
    [`--bits-${t}-content-available-height`]: "var(--bits-floating-available-height)",
    [`--bits-${t}-anchor-width`]: "var(--bits-floating-anchor-width)",
    [`--bits-${t}-anchor-height`]: "var(--bits-floating-anchor-height)"
  };
}
function Ck(t) {
  const e = t.whileElementsMounted, n = /* @__PURE__ */ $(() => Vr(t.open) ?? !0), r = /* @__PURE__ */ $(() => Vr(t.middleware)), o = /* @__PURE__ */ $(() => Vr(t.transform) ?? !0), i = /* @__PURE__ */ $(() => Vr(t.placement) ?? "bottom"), s = /* @__PURE__ */ $(() => Vr(t.strategy) ?? "absolute"), a = /* @__PURE__ */ $(() => Vr(t.sideOffset) ?? 0), l = /* @__PURE__ */ $(() => Vr(t.alignOffset) ?? 0), u = t.reference;
  let d = /* @__PURE__ */ me(0), h = /* @__PURE__ */ me(0);
  const p = Tn(null);
  let v = /* @__PURE__ */ me(ht(c(s))), m = /* @__PURE__ */ me(ht(c(i))), y = /* @__PURE__ */ me(ht({})), w = /* @__PURE__ */ me(!1), b = !1, k = 0;
  const P = /* @__PURE__ */ $(() => {
    const A = p.current ? Md(p.current, c(d)) : c(d), D = p.current ? Md(p.current, c(h)) : c(h);
    return c(o) ? {
      position: c(v),
      left: "0",
      top: "0",
      transform: `translate(${A}px, ${D}px)`,
      ...p.current && Ug(p.current) >= 1.5 && { willChange: "transform" }
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
    Yg(A, D, {
      middleware: c(r),
      placement: c(i),
      strategy: c(s)
    }).then((T) => {
      if (!(_ !== k || u.current !== A || p.current !== D)) {
        if ($k(A)) {
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
          const S = Math.max(Math.abs(c(a)), Math.abs(c(l)), 15);
          if (T.x <= S && T.y <= S) return;
        }
        F(d, T.x, !0), F(h, T.y, !0), F(v, T.strategy, !0), F(m, T.placement, !0), F(y, T.middlewareData, !0), F(w, !0);
      }
    });
  }
  function N() {
    typeof C == "function" && (C(), C = void 0), k++;
  }
  function V() {
    if (N(), e === void 0) {
      x();
      return;
    }
    c(n) && (u.current === null || p.current === null || (C = e(u.current, p.current, x)));
  }
  function H() {
    !c(n) && p.current === null && F(w, !1);
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
  }), Ie(H), Ie(() => N), {
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
      return c(P);
    },
    get update() {
      return x;
    }
  };
}
function $k(t) {
  return t instanceof Element ? !t.isConnected || t instanceof HTMLElement && t.hidden ? !0 : t.getClientRects().length === 0 : !1;
}
const Sk = { top: "bottom", right: "left", bottom: "top", left: "right" }, Ku = new Ar("Floating.Root"), Td = new Ar("Floating.Content"), Fu = new Ar("Floating.Root");
class js {
  static create(e = !1) {
    return e ? Fu.set(new js()) : Ku.set(new js());
  }
  anchorNode = Tn(null);
  customAnchorNode = Tn(null);
  triggerNode = Tn(null);
  constructor() {
    Ie(() => {
      this.customAnchorNode.current ? typeof this.customAnchorNode.current == "string" ? this.anchorNode.current = document.querySelector(this.customAnchorNode.current) : this.anchorNode.current = this.customAnchorNode.current : this.anchorNode.current = this.triggerNode.current;
    });
  }
}
class Zs {
  static create(e, n = !1) {
    return n ? Td.set(new Zs(e, Fu.get())) : Td.set(new Zs(e, Ku.get()));
  }
  opts;
  root;
  // nodes
  contentRef = Tn(null);
  wrapperRef = Tn(null);
  arrowRef = Tn(null);
  contentAttachment = $r(this.contentRef);
  wrapperAttachment = $r(this.wrapperRef);
  arrowAttachment = $r(this.arrowRef);
  // ids
  arrowId = Tn(Rs());
  #e = /* @__PURE__ */ $(() => {
    if (typeof this.opts.style == "string") return Xo(this.opts.style);
    if (!this.opts.style) return {};
  });
  #t = void 0;
  #n = new p5(() => this.arrowRef.current ?? void 0);
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
    boundary: c(this.#a).filter(E5),
    altBoundary: this.hasExplicitBoundaries
  }));
  get detectOverflowOptions() {
    return c(this.#l);
  }
  set detectOverflowOptions(e) {
    F(this.#l, e);
  }
  #u = /* @__PURE__ */ me(void 0);
  #c = /* @__PURE__ */ me(void 0);
  #d = /* @__PURE__ */ me(void 0);
  #h = /* @__PURE__ */ me(void 0);
  #f = /* @__PURE__ */ $(() => [
    Zg({
      mainAxis: this.opts.sideOffset.current + c(this.#o),
      alignmentAxis: this.opts.alignOffset.current
    }),
    this.opts.avoidCollisions.current && Wg({
      mainAxis: !0,
      crossAxis: !1,
      limiter: this.opts.sticky.current === "partial" ? xk() : void 0,
      ...this.detectOverflowOptions
    }),
    this.opts.avoidCollisions.current && qg({ ...this.detectOverflowOptions }),
    wk({
      ...this.detectOverflowOptions,
      apply: ({ rects: e, availableWidth: n, availableHeight: r }) => {
        const { width: o, height: i } = e.reference;
        F(this.#u, n, !0), F(this.#c, r, !0), F(this.#d, o, !0), F(this.#h, i, !0);
      }
    }),
    this.arrowRef.current && Xg({
      element: this.arrowRef.current,
      padding: this.opts.arrowPadding.current
    }),
    _k({
      arrowWidth: c(this.#r),
      arrowHeight: c(this.#o)
    }),
    this.opts.hideWhenDetached.current && bk({ strategy: "referenceHidden", ...this.detectOverflowOptions })
  ].filter(Boolean));
  get middleware() {
    return c(this.#f);
  }
  set middleware(e) {
    F(this.#f, e);
  }
  floating;
  #p = /* @__PURE__ */ $(() => Pk(this.floating.placement));
  get placedSide() {
    return c(this.#p);
  }
  set placedSide(e) {
    F(this.#p, e);
  }
  #y = /* @__PURE__ */ $(() => Ok(this.floating.placement));
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
  #g = /* @__PURE__ */ me();
  get contentZIndex() {
    return c(this.#g);
  }
  set contentZIndex(e) {
    F(this.#g, e, !0);
  }
  #b = /* @__PURE__ */ $(() => Sk[this.placedSide]);
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
  #k = /* @__PURE__ */ $(() => ({
    "data-side": this.placedSide,
    "data-align": this.placedAlign,
    style: Su({ ...c(this.#e) }),
    ...this.contentAttachment
  }));
  get props() {
    return c(this.#k);
  }
  set props(e) {
    F(this.#k, e);
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
    F(this.#C, e);
  }
  constructor(e, n) {
    this.opts = e, this.root = n, this.#t = e.updatePositionStrategy, e.customAnchor && (this.root.customAnchorNode.current = e.customAnchor.current), wt(() => e.customAnchor.current, (r) => {
      this.root.customAnchorNode.current = r;
    }), this.floating = Ck({
      strategy: () => this.opts.strategy.current,
      placement: () => c(this.#i),
      middleware: () => this.middleware,
      reference: this.root.anchorNode,
      whileElementsMounted: (...r) => yk(...r, {
        animationFrame: this.#t?.current === "always"
      }),
      open: () => this.opts.enabled.current,
      sideOffset: () => this.opts.sideOffset.current,
      alignOffset: () => this.opts.alignOffset.current
    }), Ie(() => {
      this.floating.isPositioned && this.opts.onPlaced?.current();
    }), wt(() => this.contentRef.current, (r) => {
      if (!r || !this.opts.enabled.current) return;
      const o = ug(r), i = o.requestAnimationFrame(() => {
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
class Ws {
  static create(e, n = !1) {
    return n ? new Ws(e, Fu.get()) : new Ws(e, Ku.get());
  }
  opts;
  root;
  constructor(e, n) {
    this.opts = e, this.root = n, e.virtualEl && e.virtualEl.current ? n.triggerNode = A7(e.virtualEl.current) : n.triggerNode = e.ref;
  }
}
function _k(t) {
  return {
    name: "transformOrigin",
    options: t,
    fn(e) {
      const { placement: n, rects: r, middlewareData: o } = e, i = o.arrow?.centerOffset !== 0, s = i ? 0 : t.arrowWidth, a = i ? 0 : t.arrowHeight, [l, u] = ju(n), d = { start: "0%", center: "50%", end: "100%" }[u], h = (o.arrow?.x ?? 0) + s / 2, p = (o.arrow?.y ?? 0) + a / 2;
      let v = "", m = "";
      return l === "bottom" ? (v = i ? d : `${h}px`, m = `${-a}px`) : l === "top" ? (v = i ? d : `${h}px`, m = `${r.floating.height + a}px`) : l === "right" ? (v = `${-a}px`, m = i ? d : `${p}px`) : l === "left" && (v = `${r.floating.width + a}px`, m = i ? d : `${p}px`), { data: { x: v, y: m } };
    }
  };
}
function ju(t) {
  const [e, n = "center"] = t.split("-");
  return [e, n];
}
function Pk(t) {
  return ju(t)[0];
}
function Ok(t) {
  return ju(t)[1];
}
function Gg(t, e) {
  ae(e, !0);
  let n = g(e, "children", 7), r = g(e, "tooltip", 7, !1);
  js.create(r());
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
  }, i = de(), s = Q(i);
  return Oe(s, () => n() ?? Ke), z(t, i), le(o);
}
ie(Gg, { children: {}, tooltip: {} }, [], [], !0);
class Nk {
  #e;
  #t = /* @__PURE__ */ $(() => this.#e.candidateValues());
  #n;
  constructor(e) {
    this.#e = e, this.#n = _g("", { afterMs: 1e3, getWindow: this.#e.getWindow }), this.handleTypeaheadSearch = this.handleTypeaheadSearch.bind(this), this.resetTypeahead = this.resetTypeahead.bind(this);
  }
  handleTypeaheadSearch(e) {
    if (!this.#e.enabled() || !c(this.#t).length) return;
    this.#n.current = this.#n.current + e;
    const n = this.#e.getCurrentItem(), r = c(this.#t).find((a) => a === n) ?? "", o = c(this.#t).map((a) => a ?? ""), i = Pu(o, this.#n.current, r), s = c(this.#t).find((a) => a === i);
    return s && this.#e.onMatch(s), s;
  }
  resetTypeahead() {
    this.#n.current = "";
  }
}
const Ek = [Yo, fg, hg], zk = [co, pg, dg], Mk = [...Ek, ...zk], Tk = _u({
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
}), Ai = new Ar("Select.Root | Combobox.Root"), Jg = new Ar("Select.Content | Combobox.Content");
class Qg {
  opts;
  #e = /* @__PURE__ */ me(!1);
  get touchedInput() {
    return c(this.#e);
  }
  set touchedInput(e) {
    F(this.#e, e, !0);
  }
  #t = /* @__PURE__ */ me(null);
  get inputNode() {
    return c(this.#t);
  }
  set inputNode(e) {
    F(this.#t, e, !0);
  }
  #n = /* @__PURE__ */ me(null);
  get contentNode() {
    return c(this.#n);
  }
  set contentNode(e) {
    F(this.#n, e, !0);
  }
  contentPresence;
  #r = /* @__PURE__ */ me(null);
  get viewportNode() {
    return c(this.#r);
  }
  set viewportNode(e) {
    F(this.#r, e, !0);
  }
  #o = /* @__PURE__ */ me(null);
  get triggerNode() {
    return c(this.#o);
  }
  set triggerNode(e) {
    F(this.#o, e, !0);
  }
  #i = /* @__PURE__ */ me("");
  get valueId() {
    return c(this.#i);
  }
  set valueId(e) {
    F(this.#i, e, !0);
  }
  #a = /* @__PURE__ */ me(null);
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
  #c = /* @__PURE__ */ me(!1);
  get contentIsPositioned() {
    return c(this.#c);
  }
  set contentIsPositioned(e) {
    F(this.#c, e, !0);
  }
  isUsingKeyboard = !1;
  isCombobox = !1;
  domContext = new Mi(() => null);
  constructor(e) {
    this.opts = e, this.isCombobox = e.isCombobox, this.contentPresence = new M5({
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
  getBitsAttr = (e) => Tk.getAttr(e, this.isCombobox ? "combobox" : void 0);
}
class Ak extends Qg {
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
    zi(() => {
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
class Dk extends Qg {
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
    zi(() => {
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
class Vk {
  static create(e) {
    const { type: n, ...r } = e, o = n === "single" ? new Ak(r) : new Dk(r);
    return Ai.set(o);
  }
}
class Zu {
  static create(e) {
    return new Zu(e, Ai.get());
  }
  opts;
  root;
  attachment;
  #e;
  #t;
  constructor(e, n) {
    this.opts = e, this.root = n, this.attachment = $r(e.ref, (r) => this.root.triggerNode = r), this.root.domContext = new Mi(e.ref), this.#e = new l3({
      getCurrentItem: () => this.root.highlightedNode,
      onMatch: (r) => {
        this.root.setHighlightedNode(r);
      },
      getActiveElement: () => this.root.domContext.getActiveElement(),
      getWindow: () => this.root.domContext.getWindow()
    }), this.#t = new Nk({
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
    if (this.root.isUsingKeyboard = !0, (e.key === co || e.key === Yo) && e.preventDefault(), !this.root.opts.open.current) {
      if (e.key === ml || e.key === ls || e.key === Yo || e.key === co)
        e.preventDefault(), this.root.handleOpen();
      else if (!this.root.isMulti && this.root.dataTypeaheadEnabled) {
        this.#t.handleTypeaheadSearch(e.key);
        return;
      }
      if (this.root.hasValue) return;
      const s = this.root.getCandidateNodes();
      if (!s.length) return;
      if (e.key === Yo) {
        const a = s[0];
        this.root.setHighlightedNode(a);
      } else if (e.key === co) {
        const a = s[s.length - 1];
        this.root.setHighlightedNode(a);
      }
      return;
    }
    if (e.key === gd) {
      this.root.handleClose();
      return;
    }
    if ((e.key === ml || // if we're currently "typing ahead", we don't want to select the item
    // just yet as the item the user is trying to get to may have a space in it,
    // so we defer handling the close for this case until further down
    e.key === ls && this.#e.search === "") && !e.isComposing && (e.preventDefault(), this.#o()))
      return;
    if (e.key === co && e.altKey && this.root.handleClose(), Mk.includes(e.key)) {
      e.preventDefault();
      const s = this.root.getCandidateNodes(), a = this.root.highlightedNode, l = a ? s.indexOf(a) : -1, u = this.root.opts.loop.current;
      let d;
      if (e.key === Yo ? d = r3(s, l, u) : e.key === co ? d = o3(s, l, u) : e.key === pg ? d = i3(s, l, 10, u) : e.key === fg ? d = s3(s, l, 10, u) : e.key === hg ? d = s[0] : e.key === dg && (d = s[s.length - 1]), !d) return;
      this.root.setHighlightedNode(d);
      return;
    }
    const n = e.ctrlKey || e.altKey || e.metaKey, r = e.key.length === 1, o = e.key === ls, i = this.root.getCandidateNodes();
    if (e.key !== gd) {
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
    "data-state": cg(this.root.opts.open.current),
    "data-disabled": Ds(this.root.opts.disabled.current),
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
class Wu {
  static create(e) {
    return Jg.set(new Wu(e, Ai.get()));
  }
  opts;
  root;
  attachment;
  #e = /* @__PURE__ */ me(!1);
  get isPositioned() {
    return c(this.#e);
  }
  set isPositioned(e) {
    F(this.#e, e, !0);
  }
  domContext;
  constructor(e, n) {
    this.opts = e, this.root = n, this.attachment = $r(e.ref, (r) => this.root.contentNode = r), this.domContext = new Mi(this.opts.ref), this.root.domContext === null && (this.root.domContext = this.domContext), To(() => {
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
  #t = /* @__PURE__ */ $(() => kk(this.root.isCombobox ? "combobox" : "select"));
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
    "data-state": cg(this.root.opts.open.current),
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
class qu {
  static create(e) {
    return new qu(e, Ai.get());
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
  prevHighlighted = new f5(() => this.isHighlighted);
  #n = /* @__PURE__ */ me(!1);
  get mounted() {
    return c(this.#n);
  }
  set mounted(e) {
    F(this.#n, e, !0);
  }
  constructor(e, n) {
    this.opts = e, this.root = n, this.attachment = $r(e.ref), wt([() => this.isHighlighted, () => this.prevHighlighted.current], () => {
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
        pt(
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
    "data-disabled": Ds(this.opts.disabled.current),
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
class Xu {
  static create(e) {
    return new Xu(e, Ai.get());
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
    disabled: fd(this.root.opts.disabled.current),
    required: fd(this.root.opts.required.current),
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
class Yu {
  static create(e) {
    return new Yu(e, Jg.get());
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
    F(this.#e, e, !0);
  }
  constructor(e, n) {
    this.opts = e, this.content = n, this.root = n.root, this.attachment = $r(e.ref, (r) => {
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
function cs(t, e) {
  ae(e, !0);
  let n = g(e, "value", 15), r = g(e, "autocomplete", 7);
  const o = Xu.create({ value: pe(() => n()) });
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
  }, s = de(), a = Q(s);
  {
    var l = (u) => {
      Du(u, Be(() => o.props, {
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
ie(cs, { value: {}, autocomplete: {} }, [], [], !0);
function ev(t, e) {
  ae(e, !0);
  let n = g(e, "id", 7), r = g(e, "children", 7), o = g(e, "virtualEl", 7), i = g(e, "ref", 7), s = g(e, "tooltip", 7, !1);
  Ws.create(
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
  }, l = de(), u = Q(l);
  return Oe(u, () => r() ?? Ke), z(t, l), le(a);
}
ie(ev, { id: {}, children: {}, virtualEl: {}, ref: {}, tooltip: {} }, [], [], !0);
function tv(t, e) {
  ae(e, !0);
  let n = g(e, "content", 7), r = g(e, "side", 7, "bottom"), o = g(e, "sideOffset", 7, 0), i = g(e, "align", 7, "center"), s = g(e, "alignOffset", 7, 0), a = g(e, "id", 7), l = g(e, "arrowPadding", 7, 0), u = g(e, "avoidCollisions", 7, !0), d = g(e, "collisionBoundary", 23, () => []), h = g(e, "collisionPadding", 7, 0), p = g(e, "hideWhenDetached", 7, !1), v = g(e, "onPlaced", 7, () => {
  }), m = g(e, "sticky", 7, "partial"), y = g(e, "updatePositionStrategy", 7, "optimized"), w = g(e, "strategy", 7, "fixed"), b = g(e, "dir", 7, "ltr"), k = g(e, "style", 23, () => ({})), P = g(e, "wrapperId", 23, Rs), C = g(e, "customAnchor", 7, null), x = g(e, "enabled", 7), N = g(e, "tooltip", 7, !1);
  const V = Zs.create(
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
      wrapperId: pe(() => P()),
      customAnchor: pe(() => C())
    },
    N()
  ), H = /* @__PURE__ */ $(() => Hn(V.wrapperProps, { style: { pointerEvents: "auto" } }));
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
      return P();
    },
    set wrapperId(_ = Rs()) {
      P(_), f();
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
      return N();
    },
    set tooltip(_ = !1) {
      N(_), f();
    }
  }, A = de(), D = Q(A);
  return Oe(D, () => n() ?? Ke, () => ({ props: V.props, wrapperProps: c(H) })), z(t, A), le(I);
}
ie(
  tv,
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
function nv(t, e) {
  ae(e, !0);
  let n = g(e, "content", 7), r = g(e, "onPlaced", 7);
  $n(() => {
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
  }, i = de(), s = Q(i);
  return Oe(s, () => n() ?? Ke, () => ({ props: {}, wrapperProps: {} })), z(t, i), le(o);
}
ie(nv, { content: {}, onPlaced: {} }, [], [], !0);
function rv(t, e) {
  ae(e, !0);
  let n = g(e, "content", 7), r = g(e, "isStatic", 7, !1), o = g(e, "onPlaced", 7), i = /* @__PURE__ */ Ae(e, [
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
  }, a = de(), l = Q(a);
  {
    var u = (h) => {
      nv(h, {
        get content() {
          return n();
        },
        get onPlaced() {
          return o();
        }
      });
    }, d = (h) => {
      tv(h, Be(
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
ie(rv, { content: {}, isStatic: {}, onPlaced: {} }, [], [], !0);
var Hk = /* @__PURE__ */ ne("<!> <!>", 1);
function Uu(t, e) {
  ae(e, !0);
  let n = g(e, "popper", 7), r = g(e, "onEscapeKeydown", 7), o = g(e, "escapeKeydownBehavior", 7), i = g(e, "preventOverflowTextSelection", 7), s = g(e, "id", 7), a = g(e, "onPointerDown", 7), l = g(e, "onPointerUp", 7), u = g(e, "side", 7), d = g(e, "sideOffset", 7), h = g(e, "align", 7), p = g(e, "alignOffset", 7), v = g(e, "arrowPadding", 7), m = g(e, "avoidCollisions", 7), y = g(e, "collisionBoundary", 7), w = g(e, "collisionPadding", 7), b = g(e, "sticky", 7), k = g(e, "hideWhenDetached", 7), P = g(e, "updatePositionStrategy", 7), C = g(e, "strategy", 7), x = g(e, "dir", 7), N = g(e, "preventScroll", 7), V = g(e, "wrapperId", 7), H = g(e, "style", 7), I = g(e, "onPlaced", 7), A = g(e, "onInteractOutside", 7), D = g(e, "onCloseAutoFocus", 7), _ = g(e, "onOpenAutoFocus", 7), T = g(e, "onFocusOutside", 7), S = g(e, "interactOutsideBehavior", 7, "close"), O = g(e, "loop", 7), M = g(e, "trapFocus", 7, !0), B = g(e, "isValidEvent", 7, () => !1), X = g(e, "customAnchor", 7, null), U = g(e, "isStatic", 7, !1), E = g(e, "enabled", 7), Y = g(e, "ref", 7), ee = g(e, "tooltip", 7, !1), K = g(e, "contentPointerEvents", 7, "auto"), j = /* @__PURE__ */ Ae(e, [
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
  const W = /* @__PURE__ */ $(() => N() ?? !0), J = /* @__PURE__ */ $(() => C() ?? (c(W) ? "fixed" : "absolute"));
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
      return P();
    },
    set updatePositionStrategy(L) {
      P(L), f();
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
      return N();
    },
    set preventScroll(L) {
      N(L), f();
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
      return T();
    },
    set onFocusOutside(L) {
      T(L), f();
    },
    get interactOutsideBehavior() {
      return S();
    },
    set interactOutsideBehavior(L = "close") {
      S(L), f();
    },
    get loop() {
      return O();
    },
    set loop(L) {
      O(L), f();
    },
    get trapFocus() {
      return M();
    },
    set trapFocus(L = !0) {
      M(L), f();
    },
    get isValidEvent() {
      return B();
    },
    set isValidEvent(L = () => !1) {
      B(L), f();
    },
    get customAnchor() {
      return X();
    },
    set customAnchor(L = null) {
      X(L), f();
    },
    get isStatic() {
      return U();
    },
    set isStatic(L = !1) {
      U(L), f();
    },
    get enabled() {
      return E();
    },
    set enabled(L) {
      E(L), f();
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
      return K();
    },
    set contentPointerEvents(L = "auto") {
      K(L), f();
    }
  };
  return rv(t, {
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
      return P();
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
      return H();
    },
    get onPlaced() {
      return I();
    },
    get customAnchor() {
      return X();
    },
    get enabled() {
      return E();
    },
    get tooltip() {
      return ee();
    },
    content: (L, te) => {
      let fe = () => te?.().props, ue = () => te?.().wrapperProps;
      var oe = Hk(), ce = Q(oe);
      {
        var ve = (he) => {
          kl(he, {
            get preventScroll() {
              return c(W);
            }
          });
        }, ke = (he) => {
          var xe = de(), De = Q(xe);
          {
            var G = (Te) => {
              kl(Te, {
                get preventScroll() {
                  return c(W);
                }
              });
            };
            se(
              De,
              (Te) => {
                e.forceMount || Te(G);
              },
              !0
            );
          }
          z(he, xe);
        };
        se(ce, (he) => {
          e.forceMount && E() ? he(ve) : he(ke, !1);
        });
      }
      var we = R(ce, 2);
      Ng(we, {
        get onOpenAutoFocus() {
          return _();
        },
        get onCloseAutoFocus() {
          return D();
        },
        get loop() {
          return O();
        },
        get enabled() {
          return E();
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
        focusScope: (he, xe) => {
          let De = () => xe?.().props;
          Og(he, {
            get onEscapeKeydown() {
              return r();
            },
            get escapeKeydownBehavior() {
              return o();
            },
            get enabled() {
              return E();
            },
            get ref() {
              return Y();
            },
            children: (G, Te) => {
              Pg(G, {
                get id() {
                  return s();
                },
                get onInteractOutside() {
                  return A();
                },
                get onFocusOutside() {
                  return T();
                },
                get interactOutsideBehavior() {
                  return S();
                },
                get isValidEvent() {
                  return B();
                },
                get enabled() {
                  return E();
                },
                get ref() {
                  return Y();
                },
                children: (Ve, Re) => {
                  let He = () => Re?.().props;
                  Eg(Ve, {
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
                      return E();
                    },
                    get ref() {
                      return Y();
                    },
                    children: (qe, gt) => {
                      var Pt = de(), tt = Q(Pt);
                      {
                        let ge = /* @__PURE__ */ $(() => ({
                          props: Hn(j, fe(), He(), De(), { style: { pointerEvents: K() } }),
                          wrapperProps: ue()
                        }));
                        Oe(tt, () => n() ?? Ke, () => c(ge));
                      }
                      z(qe, Pt);
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
      }), z(L, oe);
    },
    $$slots: { content: !0 }
  }), le(re);
}
ie(
  Uu,
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
function ov(t, e) {
  ae(e, !0);
  let n = g(e, "popper", 7), r = g(e, "open", 7), o = g(e, "onEscapeKeydown", 7), i = g(e, "escapeKeydownBehavior", 7), s = g(e, "preventOverflowTextSelection", 7), a = g(e, "id", 7), l = g(e, "onPointerDown", 7), u = g(e, "onPointerUp", 7), d = g(e, "side", 7), h = g(e, "sideOffset", 7), p = g(e, "align", 7), v = g(e, "alignOffset", 7), m = g(e, "arrowPadding", 7), y = g(e, "avoidCollisions", 7), w = g(e, "collisionBoundary", 7), b = g(e, "collisionPadding", 7), k = g(e, "sticky", 7), P = g(e, "hideWhenDetached", 7), C = g(e, "updatePositionStrategy", 7), x = g(e, "strategy", 7), N = g(e, "dir", 7), V = g(e, "preventScroll", 7), H = g(e, "wrapperId", 7), I = g(e, "style", 7), A = g(e, "onPlaced", 7), D = g(e, "onInteractOutside", 7), _ = g(e, "onCloseAutoFocus", 7), T = g(e, "onOpenAutoFocus", 7), S = g(e, "onFocusOutside", 7), O = g(e, "interactOutsideBehavior", 7, "close"), M = g(e, "loop", 7), B = g(e, "trapFocus", 7, !0), X = g(e, "isValidEvent", 7, () => !1), U = g(e, "customAnchor", 7, null), E = g(e, "isStatic", 7, !1), Y = g(e, "ref", 7), ee = g(e, "shouldRender", 7), K = /* @__PURE__ */ Ae(e, [
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
  var j = {
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
      return P();
    },
    set hideWhenDetached(L) {
      P(L), f();
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
      return N();
    },
    set dir(L) {
      N(L), f();
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
      return T();
    },
    set onOpenAutoFocus(L) {
      T(L), f();
    },
    get onFocusOutside() {
      return S();
    },
    set onFocusOutside(L) {
      S(L), f();
    },
    get interactOutsideBehavior() {
      return O();
    },
    set interactOutsideBehavior(L = "close") {
      O(L), f();
    },
    get loop() {
      return M();
    },
    set loop(L) {
      M(L), f();
    },
    get trapFocus() {
      return B();
    },
    set trapFocus(L = !0) {
      B(L), f();
    },
    get isValidEvent() {
      return X();
    },
    set isValidEvent(L = () => !1) {
      X(L), f();
    },
    get customAnchor() {
      return U();
    },
    set customAnchor(L = null) {
      U(L), f();
    },
    get isStatic() {
      return E();
    },
    set isStatic(L = !1) {
      E(L), f();
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
  }, W = de(), J = Q(W);
  {
    var re = (L) => {
      Uu(L, Be(
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
            return P();
          },
          get updatePositionStrategy() {
            return C();
          },
          get strategy() {
            return x();
          },
          get dir() {
            return N();
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
            return E();
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
            return T();
          },
          get interactOutsideBehavior() {
            return O();
          },
          get loop() {
            return M();
          },
          get trapFocus() {
            return B();
          },
          get isValidEvent() {
            return X();
          },
          get onFocusOutside() {
            return S();
          },
          forceMount: !1,
          get ref() {
            return Y();
          }
        },
        () => K
      ));
    };
    se(J, (L) => {
      ee() && L(re);
    });
  }
  return z(t, W), le(j);
}
ie(
  ov,
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
function iv(t, e) {
  ae(e, !0);
  let n = g(e, "popper", 7), r = g(e, "onEscapeKeydown", 7), o = g(e, "escapeKeydownBehavior", 7), i = g(e, "preventOverflowTextSelection", 7), s = g(e, "id", 7), a = g(e, "onPointerDown", 7), l = g(e, "onPointerUp", 7), u = g(e, "side", 7), d = g(e, "sideOffset", 7), h = g(e, "align", 7), p = g(e, "alignOffset", 7), v = g(e, "arrowPadding", 7), m = g(e, "avoidCollisions", 7), y = g(e, "collisionBoundary", 7), w = g(e, "collisionPadding", 7), b = g(e, "sticky", 7), k = g(e, "hideWhenDetached", 7), P = g(e, "updatePositionStrategy", 7), C = g(e, "strategy", 7), x = g(e, "dir", 7), N = g(e, "preventScroll", 7), V = g(e, "wrapperId", 7), H = g(e, "style", 7), I = g(e, "onPlaced", 7), A = g(e, "onInteractOutside", 7), D = g(e, "onCloseAutoFocus", 7), _ = g(e, "onOpenAutoFocus", 7), T = g(e, "onFocusOutside", 7), S = g(e, "interactOutsideBehavior", 7, "close"), O = g(e, "loop", 7), M = g(e, "trapFocus", 7, !0), B = g(e, "isValidEvent", 7, () => !1), X = g(e, "customAnchor", 7, null), U = g(e, "isStatic", 7, !1), E = g(e, "enabled", 7), Y = /* @__PURE__ */ Ae(e, [
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
    set popper(K) {
      n(K), f();
    },
    get onEscapeKeydown() {
      return r();
    },
    set onEscapeKeydown(K) {
      r(K), f();
    },
    get escapeKeydownBehavior() {
      return o();
    },
    set escapeKeydownBehavior(K) {
      o(K), f();
    },
    get preventOverflowTextSelection() {
      return i();
    },
    set preventOverflowTextSelection(K) {
      i(K), f();
    },
    get id() {
      return s();
    },
    set id(K) {
      s(K), f();
    },
    get onPointerDown() {
      return a();
    },
    set onPointerDown(K) {
      a(K), f();
    },
    get onPointerUp() {
      return l();
    },
    set onPointerUp(K) {
      l(K), f();
    },
    get side() {
      return u();
    },
    set side(K) {
      u(K), f();
    },
    get sideOffset() {
      return d();
    },
    set sideOffset(K) {
      d(K), f();
    },
    get align() {
      return h();
    },
    set align(K) {
      h(K), f();
    },
    get alignOffset() {
      return p();
    },
    set alignOffset(K) {
      p(K), f();
    },
    get arrowPadding() {
      return v();
    },
    set arrowPadding(K) {
      v(K), f();
    },
    get avoidCollisions() {
      return m();
    },
    set avoidCollisions(K) {
      m(K), f();
    },
    get collisionBoundary() {
      return y();
    },
    set collisionBoundary(K) {
      y(K), f();
    },
    get collisionPadding() {
      return w();
    },
    set collisionPadding(K) {
      w(K), f();
    },
    get sticky() {
      return b();
    },
    set sticky(K) {
      b(K), f();
    },
    get hideWhenDetached() {
      return k();
    },
    set hideWhenDetached(K) {
      k(K), f();
    },
    get updatePositionStrategy() {
      return P();
    },
    set updatePositionStrategy(K) {
      P(K), f();
    },
    get strategy() {
      return C();
    },
    set strategy(K) {
      C(K), f();
    },
    get dir() {
      return x();
    },
    set dir(K) {
      x(K), f();
    },
    get preventScroll() {
      return N();
    },
    set preventScroll(K) {
      N(K), f();
    },
    get wrapperId() {
      return V();
    },
    set wrapperId(K) {
      V(K), f();
    },
    get style() {
      return H();
    },
    set style(K) {
      H(K), f();
    },
    get onPlaced() {
      return I();
    },
    set onPlaced(K) {
      I(K), f();
    },
    get onInteractOutside() {
      return A();
    },
    set onInteractOutside(K) {
      A(K), f();
    },
    get onCloseAutoFocus() {
      return D();
    },
    set onCloseAutoFocus(K) {
      D(K), f();
    },
    get onOpenAutoFocus() {
      return _();
    },
    set onOpenAutoFocus(K) {
      _(K), f();
    },
    get onFocusOutside() {
      return T();
    },
    set onFocusOutside(K) {
      T(K), f();
    },
    get interactOutsideBehavior() {
      return S();
    },
    set interactOutsideBehavior(K = "close") {
      S(K), f();
    },
    get loop() {
      return O();
    },
    set loop(K) {
      O(K), f();
    },
    get trapFocus() {
      return M();
    },
    set trapFocus(K = !0) {
      M(K), f();
    },
    get isValidEvent() {
      return B();
    },
    set isValidEvent(K = () => !1) {
      B(K), f();
    },
    get customAnchor() {
      return X();
    },
    set customAnchor(K = null) {
      X(K), f();
    },
    get isStatic() {
      return U();
    },
    set isStatic(K = !1) {
      U(K), f();
    },
    get enabled() {
      return E();
    },
    set enabled(K) {
      E(K), f();
    }
  };
  return Uu(t, Be(
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
        return P();
      },
      get strategy() {
        return C();
      },
      get dir() {
        return x();
      },
      get preventScroll() {
        return N();
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
        return X();
      },
      get isStatic() {
        return U();
      },
      get enabled() {
        return E();
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
        return O();
      },
      get trapFocus() {
        return M();
      },
      get isValidEvent() {
        return B();
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
  iv,
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
var Lk = /* @__PURE__ */ ne("<div><div><!></div></div>"), Ik = /* @__PURE__ */ ne("<div><div><!></div></div>");
function _l(t, e) {
  const n = wi();
  ae(e, !0);
  let r = g(e, "id", 23, () => Rn(n)), o = g(e, "ref", 15, null), i = g(e, "forceMount", 7, !1), s = g(e, "side", 7, "bottom"), a = g(e, "onInteractOutside", 7, Fe), l = g(e, "onEscapeKeydown", 7, Fe), u = g(e, "children", 7), d = g(e, "child", 7), h = g(e, "preventScroll", 7, !1), p = g(e, "style", 7), v = /* @__PURE__ */ Ae(e, [
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
  const m = Wu.create({
    id: pe(() => r()),
    ref: pe(() => o(), (x) => o(x)),
    onInteractOutside: pe(() => a()),
    onEscapeKeydown: pe(() => l())
  }), y = /* @__PURE__ */ $(() => Hn(v, m.props));
  var w = {
    get id() {
      return r();
    },
    set id(x = Rn(n)) {
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
    set onInteractOutside(x = Fe) {
      a(x), f();
    },
    get onEscapeKeydown() {
      return l();
    },
    set onEscapeKeydown(x = Fe) {
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
  }, b = de(), k = Q(b);
  {
    var P = (x) => {
      iv(x, Be(() => c(y), () => m.popperProps, {
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
        popper: (N, V) => {
          let H = () => V?.().props, I = () => V?.().wrapperProps;
          const A = /* @__PURE__ */ $(() => Hn(H(), { style: m.props.style }, { style: p() }));
          var D = de(), _ = Q(D);
          {
            var T = (O) => {
              var M = de(), B = Q(M);
              {
                let X = /* @__PURE__ */ $(() => ({
                  props: c(A),
                  wrapperProps: I(),
                  ...m.snippetProps
                }));
                Oe(B, d, () => c(X));
              }
              z(O, M);
            }, S = (O) => {
              var M = Lk();
              Ge(M, () => ({ ...I() }));
              var B = q(M);
              Ge(B, () => ({ ...c(A) }));
              var X = q(B);
              Oe(X, () => u() ?? Ke), Z(B), Z(M), z(O, M);
            };
            se(_, (O) => {
              d() ? O(T) : O(S, !1);
            });
          }
          z(N, D);
        },
        $$slots: { popper: !0 }
      }));
    }, C = (x) => {
      var N = de(), V = Q(N);
      {
        var H = (I) => {
          ov(I, Be(() => c(y), () => m.popperProps, {
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
              let _ = () => D?.().props, T = () => D?.().wrapperProps;
              const S = /* @__PURE__ */ $(() => Hn(_(), { style: m.props.style }, { style: p() }));
              var O = de(), M = Q(O);
              {
                var B = (U) => {
                  var E = de(), Y = Q(E);
                  {
                    let ee = /* @__PURE__ */ $(() => ({
                      props: c(S),
                      wrapperProps: T(),
                      ...m.snippetProps
                    }));
                    Oe(Y, d, () => c(ee));
                  }
                  z(U, E);
                }, X = (U) => {
                  var E = Ik();
                  Ge(E, () => ({ ...T() }));
                  var Y = q(E);
                  Ge(Y, () => ({ ...c(S) }));
                  var ee = q(Y);
                  Oe(ee, () => u() ?? Ke), Z(Y), Z(E), z(U, E);
                };
                se(M, (U) => {
                  d() ? U(B) : U(X, !1);
                });
              }
              z(A, O);
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
      z(x, N);
    };
    se(k, (x) => {
      i() ? x(P) : x(C, !1);
    });
  }
  return z(t, b), le(w);
}
ie(
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
function sv(t, e) {
  ae(e, !0);
  let n = g(e, "mounted", 15, !1), r = g(e, "onMountedChange", 7, Fe);
  g5(() => (n(!0), r()(!0), () => {
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
    set onMountedChange(i = Fe) {
      r(i), f();
    }
  };
  return le(o);
}
ie(sv, { mounted: {}, onMountedChange: {} }, [], [], !0);
var Rk = /* @__PURE__ */ ne("<div><!></div>"), Bk = /* @__PURE__ */ ne("<!> <!>", 1);
function Pl(t, e) {
  const n = wi();
  ae(e, !0);
  let r = g(e, "id", 23, () => Rn(n)), o = g(e, "ref", 15, null), i = g(e, "value", 7), s = g(e, "label", 23, i), a = g(e, "disabled", 7, !1), l = g(e, "children", 7), u = g(e, "child", 7), d = g(e, "onHighlight", 7, Fe), h = g(e, "onUnhighlight", 7, Fe), p = /* @__PURE__ */ Ae(e, [
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
  const v = qu.create({
    id: pe(() => r()),
    ref: pe(() => o(), (x) => o(x)),
    value: pe(() => i()),
    disabled: pe(() => a()),
    label: pe(() => s()),
    onHighlight: pe(() => d()),
    onUnhighlight: pe(() => h())
  }), m = /* @__PURE__ */ $(() => Hn(p, v.props));
  var y = {
    get id() {
      return r();
    },
    set id(x = Rn(n)) {
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
    set onHighlight(x = Fe) {
      d(x), f();
    },
    get onUnhighlight() {
      return h();
    },
    set onUnhighlight(x = Fe) {
      h(x), f();
    }
  }, w = Bk(), b = Q(w);
  {
    var k = (x) => {
      var N = de(), V = Q(N);
      {
        let H = /* @__PURE__ */ $(() => ({ props: c(m), ...v.snippetProps }));
        Oe(V, u, () => c(H));
      }
      z(x, N);
    }, P = (x) => {
      var N = Rk();
      Ge(N, () => ({ ...c(m) }));
      var V = q(N);
      Oe(V, () => l() ?? Ke, () => v.snippetProps), Z(N), z(x, N);
    };
    se(b, (x) => {
      u() ? x(k) : x(P, !1);
    });
  }
  var C = R(b, 2);
  return sv(C, {
    get mounted() {
      return v.mounted;
    },
    set mounted(x) {
      v.mounted = x;
    }
  }), z(t, w), le(y);
}
ie(
  Pl,
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
var Kk = /* @__PURE__ */ ne("<div><!></div>");
const Fk = {
  hash: "svelte-z03me6",
  code: `
	/* Hide scrollbars cross browser and enable momentum scroll for touch devices */[data-select-viewport] {scrollbar-width:none !important;-ms-overflow-style:none !important;-webkit-overflow-scrolling:touch !important;}[data-combobox-viewport] {scrollbar-width:none !important;-ms-overflow-style:none !important;-webkit-overflow-scrolling:touch !important;}[data-combobox-viewport]::-webkit-scrollbar {display:none !important;}[data-select-viewport]::-webkit-scrollbar {display:none !important;}`
};
function Ol(t, e) {
  const n = wi();
  ae(e, !0), Je(t, Fk);
  let r = g(e, "id", 23, () => Rn(n)), o = g(e, "ref", 15, null), i = g(e, "children", 7), s = g(e, "child", 7), a = /* @__PURE__ */ Ae(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "id",
    "ref",
    "children",
    "child"
  ]);
  const l = Yu.create({
    id: pe(() => r()),
    ref: pe(() => o(), (y) => o(y))
  }), u = /* @__PURE__ */ $(() => Hn(a, l.props));
  var d = {
    get id() {
      return r();
    },
    set id(y = Rn(n)) {
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
  }, h = de(), p = Q(h);
  {
    var v = (y) => {
      var w = de(), b = Q(w);
      Oe(b, s, () => ({ props: c(u) })), z(y, w);
    }, m = (y) => {
      var w = Kk();
      Ge(w, () => ({ ...c(u) }));
      var b = q(w);
      Oe(b, () => i() ?? Ke), Z(w), z(y, w);
    };
    se(p, (y) => {
      s() ? y(v) : y(m, !1);
    });
  }
  return z(t, h), le(d);
}
ie(Ol, { id: {}, ref: {}, children: {}, child: {} }, [], [], !0);
var jk = /* @__PURE__ */ ne("<!> <!>", 1);
function Nl(t, e) {
  ae(e, !0);
  let n = g(e, "value", 15), r = g(e, "onValueChange", 7, Fe), o = g(e, "name", 7, ""), i = g(e, "disabled", 7, !1), s = g(e, "type", 7), a = g(e, "open", 15, !1), l = g(e, "onOpenChange", 7, Fe), u = g(e, "onOpenChangeComplete", 7, Fe), d = g(e, "loop", 7, !1), h = g(e, "scrollAlignment", 7, "nearest"), p = g(e, "required", 7, !1), v = g(e, "items", 23, () => []), m = g(e, "allowDeselect", 7, !1), y = g(e, "autocomplete", 7), w = g(e, "children", 7);
  function b() {
    n() === void 0 && n(s() === "single" ? "" : []);
  }
  b(), wt.pre(() => n(), () => {
    b();
  });
  let k = /* @__PURE__ */ me("");
  const P = Vk.create({
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
    inputValue: pe(() => c(k), (A) => F(k, A, !0)),
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
    set onValueChange(A = Fe) {
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
    set onOpenChange(A = Fe) {
      l(A), f();
    },
    get onOpenChangeComplete() {
      return u();
    },
    set onOpenChangeComplete(A = Fe) {
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
  }, x = jk(), N = Q(x);
  Gg(N, {
    children: (A, D) => {
      var _ = de(), T = Q(_);
      Oe(T, () => w() ?? Ke), z(A, _);
    },
    $$slots: { default: !0 }
  });
  var V = R(N, 2);
  {
    var H = (A) => {
      var D = de(), _ = Q(D);
      {
        var T = (O) => {
          cs(O, {
            get autocomplete() {
              return y();
            }
          });
        }, S = (O) => {
          var M = de(), B = Q(M);
          kt(B, 16, () => P.opts.value.current, (X) => X, (X, U) => {
            cs(X, {
              get value() {
                return U;
              },
              get autocomplete() {
                return y();
              }
            });
          }), z(O, M);
        };
        se(_, (O) => {
          P.opts.value.current.length === 0 ? O(T) : O(S, !1);
        });
      }
      z(A, D);
    }, I = (A) => {
      cs(A, {
        get autocomplete() {
          return y();
        },
        get value() {
          return P.opts.value.current;
        },
        set value(D) {
          P.opts.value.current = D;
        }
      });
    };
    se(V, (A) => {
      Array.isArray(P.opts.value.current) ? A(H) : A(I, !1);
    });
  }
  return z(t, x), le(C);
}
ie(
  Nl,
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
var Zk = /* @__PURE__ */ ne("<button><!></button>");
function El(t, e) {
  const n = wi();
  ae(e, !0);
  let r = g(e, "id", 23, () => Rn(n)), o = g(e, "ref", 15, null), i = g(e, "child", 7), s = g(e, "children", 7), a = g(e, "type", 7, "button"), l = /* @__PURE__ */ Ae(e, [
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
  const u = Zu.create({
    id: pe(() => r()),
    ref: pe(() => o(), (m) => o(m))
  }), d = /* @__PURE__ */ $(() => Hn(l, u.props, { type: a() }));
  var h = {
    get id() {
      return r();
    },
    set id(m = Rn(n)) {
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
  }, p = de(), v = Q(p);
  return St(v, () => ev, (m, y) => {
    y(m, {
      get id() {
        return r();
      },
      get ref() {
        return u.opts.ref;
      },
      children: (w, b) => {
        var k = de(), P = Q(k);
        {
          var C = (N) => {
            var V = de(), H = Q(V);
            Oe(H, i, () => ({ props: c(d) })), z(N, V);
          }, x = (N) => {
            var V = Zk();
            Ge(V, () => ({ ...c(d) }));
            var H = q(V);
            Oe(H, () => s() ?? Ke), Z(V), z(N, V);
          };
          se(P, (N) => {
            i() ? N(C) : N(x, !1);
          });
        }
        z(w, k);
      },
      $$slots: { default: !0 }
    });
  }), z(t, p), le(h);
}
ie(El, { id: {}, ref: {}, child: {}, children: {}, type: {} }, [], [], !0);
const Wk = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, qk = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
  return !1;
}, Xk = Symbol("lucide-context"), Yk = () => xn(Xk);
var Uk = /* @__PURE__ */ Ce("<svg><!><!></svg>");
function ba(t, e) {
  ae(e, !0);
  const n = Yk() ?? {}, r = g(e, "name", 7), o = g(e, "color", 23, () => n.color ?? "currentColor"), i = g(e, "size", 23, () => n.size ?? 24), s = g(e, "strokeWidth", 23, () => n.strokeWidth ?? 2), a = g(e, "absoluteStrokeWidth", 23, () => n.absoluteStrokeWidth ?? !1), l = g(e, "iconNode", 23, () => []), u = g(e, "children", 7), d = /* @__PURE__ */ Ae(e, [
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
  }, v = Uk();
  Ge(
    v,
    (w) => ({
      ...Wk,
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
      () => !u() && !qk(d) && { "aria-hidden": "true" }
    ]
  );
  var m = q(v);
  kt(m, 17, l, Xr, (w, b) => {
    var k = /* @__PURE__ */ $(() => No(c(b), 2));
    let P = () => c(k)[0], C = () => c(k)[1];
    var x = de(), N = Q(x);
    Rh(N, P, !0, (V, H) => {
      Ge(V, () => ({ ...C() }));
    }), z(w, x);
  });
  var y = R(m);
  return Oe(y, () => u() ?? Ke), Z(v), z(t, v), le(p);
}
ie(
  ba,
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
function av(t, e) {
  ae(e, !0);
  let n = /* @__PURE__ */ Ae(e, ["$$slots", "$$events", "$$legacy", "$$host"]);
  const r = [["path", { d: "M20 6 9 17l-5-5" }]];
  ba(t, Be({ name: "check" }, () => n, {
    get iconNode() {
      return r;
    },
    children: (o, i) => {
      var s = de(), a = Q(s);
      Oe(a, () => e.children ?? Ke), z(o, s);
    },
    $$slots: { default: !0 }
  })), le();
}
ie(av, {}, [], [], !0);
function lv(t, e) {
  ae(e, !0);
  let n = /* @__PURE__ */ Ae(e, ["$$slots", "$$events", "$$legacy", "$$host"]);
  const r = [["path", { d: "M5 12h14" }]];
  ba(t, Be({ name: "minus" }, () => n, {
    get iconNode() {
      return r;
    },
    children: (o, i) => {
      var s = de(), a = Q(s);
      Oe(a, () => e.children ?? Ke), z(o, s);
    },
    $$slots: { default: !0 }
  })), le();
}
ie(lv, {}, [], [], !0);
var Gk = /* @__PURE__ */ ne('<div data-slot="checkbox-indicator" class="[&amp;>svg]:size-3.5 grid place-content-center text-current transition-none"><!></div>');
function uv(t, e) {
  ae(e, !0);
  let n = g(e, "ref", 15, null), r = g(e, "checked", 15, !1), o = g(e, "indeterminate", 15, !1), i = g(e, "class", 7), s = /* @__PURE__ */ Ae(e, [
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
  }, l = de(), u = Q(l);
  {
    const d = (p, v) => {
      let m = () => v?.().checked, y = () => v?.().indeterminate;
      var w = Gk(), b = q(w);
      {
        var k = (C) => {
          av(C, {});
        }, P = (C) => {
          var x = de(), N = Q(x);
          {
            var V = (H) => {
              lv(H, {});
            };
            se(
              N,
              (H) => {
                y() && H(V);
              },
              !0
            );
          }
          z(C, x);
        };
        se(b, (C) => {
          m() ? C(k) : C(P, !1);
        });
      }
      Z(w), z(p, w);
    };
    let h = /* @__PURE__ */ $(() => yn("nopan nodrag border-input dark:bg-input/30 data-checked:bg-primary data-checked:text-primary-foreground dark:data-checked:bg-primary data-checked:border-primary aria-invalid:aria-checked:border-primary aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 flex size-4 items-center justify-center rounded-[4px] border shadow-xs transition-shadow group-has-disabled/field:opacity-50 focus-visible:ring-3 aria-invalid:ring-3 peer relative shrink-0 outline-none after:absolute after:-inset-x-3 after:-inset-y-2 disabled:cursor-not-allowed disabled:opacity-50", i()));
    St(u, () => Ag, (p, v) => {
      v(p, Be(
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
ie(uv, { ref: {}, checked: {}, indeterminate: {}, class: {} }, [], [], !0);
var Jk = /* @__PURE__ */ ne('<div><input type="hidden"/> <!> <!></div>');
const Qk = {
  hash: "svelte-1o3a23c",
  code: ".tf-chosen.svelte-1o3a23c {display:flex;flex-direction:row;align-items:center;justify-content:space-between;gap:5px;}"
};
function cv(t, e) {
  ae(e, !0), Je(t, Qk);
  const n = g(e, "placeholder", 7), r = g(e, "label", 7), o = g(e, "value", 7), i = g(e, "buttonText", 7, "选择..."), s = g(e, "onChosen", 7), a = /* @__PURE__ */ Ae(e, [
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
  }, u = Jk();
  Ge(
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
  var d = q(u);
  Cr(d);
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
  return We(p, {
    variant: "outline",
    onclick: (v) => {
      s()?.(o(), r(), v);
    },
    style: "padding: 3px",
    children: (v, m) => {
      Se();
      var y = ze();
      Ne(() => nt(y, i())), z(v, y);
    },
    $$slots: { default: !0 }
  }), Z(u), Ne(() => ts(d, o())), z(t, u), le(l);
}
ie(
  cv,
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
var e4 = /* @__PURE__ */ ne("<input/>"), t4 = /* @__PURE__ */ ne("<input/>");
function vt(t, e) {
  ae(e, !0);
  let n = g(e, "ref", 15, null), r = g(e, "value", 15), o = g(e, "type", 7), i = g(e, "files", 15), s = g(e, "class", 7), a = g(e, "data-slot", 7, "input"), l = /* @__PURE__ */ Ae(e, [
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
  }, d = de(), h = Q(d);
  {
    var p = (m) => {
      var y = e4();
      Ge(
        y,
        (w) => ({
          "data-slot": a(),
          class: w,
          type: "file",
          ...l
        }),
        [
          () => yn("nopan nodrag dark:bg-input/30 border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 h-9 rounded-md border bg-transparent px-2.5 py-1 text-base shadow-xs transition-[color,box-shadow] file:h-7 file:text-sm file:font-medium focus-visible:ring-3 aria-invalid:ring-3 md:text-sm file:text-foreground placeholder:text-muted-foreground w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50", s())
        ],
        void 0,
        void 0,
        void 0,
        !0
      ), Mt(y, (w) => n(w), () => n()), $1(y, i), ws(y, r), z(m, y);
    }, v = (m) => {
      var y = t4();
      Ge(
        y,
        (w) => ({
          "data-slot": a(),
          spellcheck: "false",
          class: w,
          type: o(),
          ...l
        }),
        [
          () => yn("nopan nodrag dark:bg-input/30 border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 h-9 rounded-md border bg-transparent px-2.5 py-1 text-base shadow-xs transition-[color,box-shadow] file:h-7 file:text-sm file:font-medium focus-visible:ring-3 aria-invalid:ring-3 md:text-sm file:text-foreground placeholder:text-muted-foreground w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50", s())
        ],
        void 0,
        void 0,
        void 0,
        !0
      ), Mt(y, (w) => n(w), () => n()), ws(y, r), z(m, y);
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
var n4 = /* @__PURE__ */ ne("<textarea></textarea>");
function et(t, e) {
  ae(e, !0);
  let n = g(e, "ref", 15, null), r = g(e, "value", 15), o = g(e, "class", 7), i = g(e, "data-slot", 7, "textarea"), s = g(e, "height", 7), a = g(e, "autoHeight", 7, !0), l = g(e, "maxHeight", 7), u = g(e, "onHeightChange", 7), d = /* @__PURE__ */ Ae(e, [
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
        const P = typeof s() == "number" ? `${s()}px` : s();
        h.style.height = P, h.style.overflowY = "hidden", u()?.(P);
        return;
      }
      h.style.height = "auto", h.style.overflowY = "hidden";
      let k = h.scrollHeight;
      if (!p) {
        const P = e.rows || 1, C = getComputedStyle(h);
        p = parseFloat(C.fontSize) * 1.2 * P + parseFloat(C.paddingTop) + parseFloat(C.paddingBottom) + parseFloat(C.borderTopWidth);
      }
      if (k < p && (k = p), l()) {
        const P = typeof l() == "number" ? `${l()}px` : l();
        k > parseInt(P) ? (h.style.height = P, h.style.overflowY = "auto") : h.style.height = `${k}px`;
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
  }, y = n4();
  qm(y);
  var w = (k) => {
    v(), e.oninput?.(k);
  }, b = (k) => {
    v(), e.onchange?.(k);
  };
  return Ge(
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
      () => yn("nodrag nowheel border-input dark:bg-input/30 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 rounded-md border bg-transparent px-2.5 py-2 text-base shadow-xs transition-[color,box-shadow] focus-visible:ring-3 aria-invalid:ring-3 md:text-sm placeholder:text-muted-foreground flex field-sizing-content min-h-16 w-full outline-none disabled:cursor-not-allowed disabled:opacity-50", o())
    ]
  ), Mt(y, (k) => h = k, () => h), ws(y, r), z(t, y), le(m);
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
var r4 = /* @__PURE__ */ ne('<div role="button"><!></div>'), o4 = /* @__PURE__ */ ne("<div></div>");
function dv(t, e) {
  const n = gc(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]), r = gc(n, ["items", "onChange", "activeIndex"]);
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
  ou();
  var u = o4();
  return Ge(u, () => ({
    ...r,
    class: `tf-tabs ${Ql(r), st(() => r.class) ?? ""}`
  })), kt(u, 5, o, Xr, (d, h, p) => {
    var v = r4();
    Pe(v, "tabindex", p), v.__click = () => a(c(h), p), v.__keydown = (b) => {
      (b.key === "Enter" || b.key === " ") && (b.preventDefault(), a(c(h), p));
    };
    var m = q(v);
    {
      var y = (b) => {
        var k = ze();
        Ne(() => nt(k, (c(h), st(() => c(h).label)))), z(b, k);
      }, w = (b) => {
        var k = de(), P = Q(k);
        Oe(P, () => (c(h), st(() => c(h).label) ?? Ke)), z(b, k);
      };
      se(m, (b) => {
        c(h), st(() => typeof c(h).label == "string") ? b(y) : b(w, !1);
      });
    }
    Z(v), Ne(() => Yt(v, 1, `tf-tabs-item ${p === s() ? "active" : ""}`)), z(d, v);
  }), Z(u), z(t, u), le(l);
}
oo(["click", "keydown"]);
ie(dv, { items: {}, onChange: {}, activeIndex: {} }, [], [], !0);
var i4 = /* @__PURE__ */ ne('<span class="tf-collapse-item-title-icon"><!></span>'), s4 = /* @__PURE__ */ ne('<div class="tf-collapse-item-description"><!></div>'), a4 = /* @__PURE__ */ ne('<div class="tf-collapse-item-content"><!></div>'), l4 = /* @__PURE__ */ ne('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><!> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), u4 = /* @__PURE__ */ ne("<div></div>");
const c4 = {
  hash: "svelte-ynwjxt",
  code: `
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-ynwjxt {transform:rotate(90deg);transition:transform 0.3s ease;}`
};
function hv(t, e) {
  ae(e, !0), Je(t, c4);
  let n = g(e, "items", 7), r = g(e, "onChange", 7), o = g(e, "activeKeys", 31, () => ht([]));
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
  }, a = u4();
  return kt(a, 21, n, Xr, (l, u, d) => {
    var h = l4(), p = q(h);
    Pe(p, "tabindex", d), p.__click = () => i(c(u)), p.__keydown = (x) => {
      (x.key === "Enter" || x.key === " ") && (x.preventDefault(), i(c(u)));
    };
    var v = q(p);
    {
      var m = (x) => {
        var N = i4(), V = q(N);
        Qn(V, {
          get target() {
            return c(u).icon;
          }
        }), Z(N), z(x, N);
      };
      se(v, (x) => {
        c(u).icon && x(m);
      });
    }
    var y = R(v, 2);
    Qn(y, {
      get target() {
        return c(u).title;
      }
    });
    var w = R(y, 2);
    Z(p);
    var b = R(p, 2);
    {
      var k = (x) => {
        var N = s4(), V = q(N);
        Qn(V, {
          get target() {
            return c(u).description;
          }
        }), Z(N), z(x, N);
      };
      se(b, (x) => {
        c(u).description && x(k);
      });
    }
    var P = R(b, 2);
    {
      var C = (x) => {
        var N = a4(), V = q(N);
        Qn(V, {
          get target() {
            return c(u).content;
          }
        }), Z(N), z(x, N);
      };
      se(P, (x) => {
        o().includes(c(u).key) && x(C);
      });
    }
    Z(h), Ne((x) => Yt(w, 1, `tf-collapse-item-title-arrow ${x ?? ""}`, "svelte-ynwjxt"), [
      () => o().includes(c(u).key) ? "rotate-90" : ""
    ]), z(l, h);
  }), Z(a), Ne(() => {
    zt(a, e.style), Yt(a, 1, `tf-collapse ${e.class ?? ""}`, "svelte-ynwjxt");
  }), z(t, a), le(s);
}
oo(["click", "keydown"]);
ie(hv, { items: {}, onChange: {}, activeKeys: {} }, [], [], !0);
function Qn(t, e) {
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
  }, o = de(), i = Q(o);
  {
    var s = (l) => {
      var u = de(), d = Q(u);
      Oe(d, () => n() ?? Ke), z(l, u);
    }, a = (l) => {
      var u = de(), d = Q(u);
      sa(d, n), z(l, u);
    };
    se(i, (l) => {
      typeof n() == "function" ? l(s) : l(a, !1);
    });
  }
  return z(t, o), le(r);
}
ie(Qn, { target: {} }, [], [], !0);
function zl(t, e) {
  ae(e, !0);
  let n = /* @__PURE__ */ Ae(e, ["$$slots", "$$events", "$$legacy", "$$host"]);
  const r = [["path", { d: "m6 9 6 6 6-6" }]];
  ba(t, Be({ name: "chevron-down" }, () => n, {
    get iconNode() {
      return r;
    },
    children: (o, i) => {
      var s = de(), a = Q(s);
      Oe(a, () => e.children ?? Ke), z(o, s);
    },
    $$slots: { default: !0 }
  })), le();
}
ie(zl, {}, [], [], !0);
var d4 = /* @__PURE__ */ ne('<span class="mx-1">,</span>'), h4 = /* @__PURE__ */ ne("<!> <!>", 1), p4 = /* @__PURE__ */ ne('<span class="text-muted-foreground"> </span>'), f4 = /* @__PURE__ */ ne('<span class="flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-left"><!></span> <!>', 1), g4 = /* @__PURE__ */ ne('<div class="py-6 text-center text-sm text-muted-foreground">暂无数据</div>'), v4 = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), m4 = /* @__PURE__ */ ne('<span class="size-4"></span>'), y4 = /* @__PURE__ */ ne('<span class="absolute right-2 flex size-3.5 items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path></svg></span>'), w4 = /* @__PURE__ */ ne('<span class="flex items-center gap-2 whitespace-nowrap"><!> <!></span> <!>', 1), b4 = /* @__PURE__ */ ne("<!> <!>", 1), x4 = /* @__PURE__ */ ne('<span class="text-muted-foreground"> </span>'), k4 = /* @__PURE__ */ ne('<span class="flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-left"><!></span> <!>', 1), C4 = /* @__PURE__ */ ne('<div class="py-6 text-center text-sm text-muted-foreground">暂无数据</div>'), $4 = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), S4 = /* @__PURE__ */ ne('<span class="size-4"></span>'), _4 = /* @__PURE__ */ ne('<span class="absolute right-2 flex size-3.5 items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path></svg></span>'), P4 = /* @__PURE__ */ ne('<span class="flex items-center gap-2 whitespace-nowrap"><!> <!></span> <!>', 1), O4 = /* @__PURE__ */ ne("<!> <!>", 1);
function Nt(t, e) {
  ae(e, !0);
  let n = g(e, "items", 7), r = g(e, "onSelect", 7), o = g(e, "value", 23, () => []), i = g(e, "defaultValue", 23, () => []), s = g(e, "expandAll", 7, !0), a = g(e, "multiple", 7, !1), l = g(e, "expandValue", 23, () => []), u = g(e, "placeholder", 7), d = g(e, "disabled", 7, !1), h = g(e, "class", 7), p = /* @__PURE__ */ Ae(e, [
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
  ]), v = /* @__PURE__ */ $(() => {
    const A = [], D = (_) => {
      for (const T of _)
        A.push(T), T.children?.length && D(T.children);
    };
    return D(n()), A;
  }), m = /* @__PURE__ */ $(() => {
    const A = [], D = o().length > 0 ? o() : i();
    for (const _ of D) {
      if (_ == null) continue;
      const T = c(v).find((S) => S.value === _);
      T && A.push(T);
    }
    return A;
  }), y = /* @__PURE__ */ $(() => !a() && c(m).length > 0 ? String(c(m)[0].value) : ""), w = /* @__PURE__ */ $(() => a() ? c(m).map((A) => String(A.value)) : []);
  function b(A, D) {
    A.stopPropagation(), r()?.(D);
  }
  function k(A, D = 0) {
    const _ = [];
    for (const T of A) {
      _.push({ item: T, level: D });
      const S = s() || l().includes(T.value);
      T.children?.length && S && _.push(...k(T.children, D + 1));
    }
    return _;
  }
  let P = /* @__PURE__ */ $(() => k(n()));
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
    get disabled() {
      return d();
    },
    set disabled(A = !1) {
      d(A), f();
    },
    get class() {
      return h();
    },
    set class(A) {
      h(A), f();
    }
  }, N = de(), V = Q(N);
  {
    var H = (A) => {
      var D = de(), _ = Q(D);
      St(_, () => Nl, (T, S) => {
        S(T, Be(
          {
            type: "multiple",
            get value() {
              return c(w);
            }
          },
          () => p,
          {
            children: (O, M) => {
              var B = b4(), X = Q(B);
              {
                let E = /* @__PURE__ */ $(() => yn("nopan nodrag border-input dark:bg-input/30 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 flex h-9 w-full items-center justify-between rounded-md border bg-transparent px-2.5 py-1 text-base shadow-xs transition-[color,box-shadow] focus-visible:ring-3 aria-invalid:ring-3 md:text-sm", d() && "cursor-not-allowed bg-muted/50 text-muted-foreground opacity-60", h()));
                St(X, () => El, (Y, ee) => {
                  ee(Y, {
                    get class() {
                      return c(E);
                    },
                    get disabled() {
                      return d();
                    },
                    children: (K, j) => {
                      var W = f4(), J = Q(W), re = q(J);
                      {
                        var L = (ue) => {
                          var oe = de(), ce = Q(oe);
                          kt(ce, 19, () => c(m), (ve) => ve.value, (ve, ke, we) => {
                            var he = h4(), xe = Q(he);
                            Qn(xe, {
                              get target() {
                                return c(ke).label;
                              }
                            });
                            var De = R(xe, 2);
                            {
                              var G = (Te) => {
                                var Ve = d4();
                                z(Te, Ve);
                              };
                              se(De, (Te) => {
                                c(we) < c(m).length - 1 && Te(G);
                              });
                            }
                            z(ve, he);
                          }), z(ue, oe);
                        }, te = (ue) => {
                          var oe = p4(), ce = q(oe, !0);
                          Z(oe), Ne(() => nt(ce, u() ?? "")), z(ue, oe);
                        };
                        se(re, (ue) => {
                          c(m).length > 0 ? ue(L) : ue(te, !1);
                        });
                      }
                      Z(J);
                      var fe = R(J, 2);
                      zl(fe, { class: "size-4 opacity-50" }), z(K, W);
                    },
                    $$slots: { default: !0 }
                  });
                });
              }
              var U = R(X, 2);
              St(U, () => bl, (E, Y) => {
                Y(E, {
                  children: (ee, K) => {
                    var j = de(), W = Q(j);
                    St(W, () => _l, (J, re) => {
                      re(J, {
                        class: "nopan nodrag nowheel data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-96 min-w-(--bits-select-anchor-width) overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md",
                        children: (L, te) => {
                          var fe = de(), ue = Q(fe);
                          St(ue, () => Ol, (oe, ce) => {
                            ce(oe, {
                              class: "p-1",
                              children: (ve, ke) => {
                                var we = de(), he = Q(we);
                                {
                                  var xe = (G) => {
                                    var Te = g4();
                                    z(G, Te);
                                  }, De = (G) => {
                                    var Te = de(), Ve = Q(Te);
                                    kt(Ve, 17, () => c(P), ({ item: Re, level: He }) => Re.value, (Re, He) => {
                                      let qe = () => c(He).item, gt = () => c(He).level;
                                      const Pt = /* @__PURE__ */ $(() => qe().children && qe().children.length > 0), tt = /* @__PURE__ */ $(() => C(qe()));
                                      var ge = de(), Ee = Q(ge);
                                      {
                                        const at = (bt, rt) => {
                                          let Tt = () => rt?.().selected;
                                          var ut = w4(), it = Q(ut), $t = q(it);
                                          {
                                            var ao = (dt) => {
                                              var hn = v4();
                                              z(dt, hn);
                                            }, Vo = (dt) => {
                                              var hn = m4();
                                              z(dt, hn);
                                            };
                                            se($t, (dt) => {
                                              c(Pt) ? dt(ao) : dt(Vo, !1);
                                            });
                                          }
                                          var dn = R($t, 2);
                                          Qn(dn, {
                                            get target() {
                                              return qe().label;
                                            }
                                          }), Z(it);
                                          var xa = R(it, 2);
                                          {
                                            var ka = (dt) => {
                                              var hn = y4();
                                              z(dt, hn);
                                            };
                                            se(xa, (dt) => {
                                              Tt() && dt(ka);
                                            });
                                          }
                                          z(bt, ut);
                                        };
                                        let Xe = /* @__PURE__ */ $(() => yn("relative flex w-full cursor-pointer select-none items-center rounded-sm py-1.5 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50")), lt = /* @__PURE__ */ $(() => gt() * 4);
                                        St(Ee, () => Pl, (bt, rt) => {
                                          rt(bt, {
                                            get value() {
                                              return c(tt).value;
                                            },
                                            get label() {
                                              return c(tt).label;
                                            },
                                            get class() {
                                              return c(Xe);
                                            },
                                            get style() {
                                              return `padding-left: ${c(lt) ?? ""}px`;
                                            },
                                            onclick: (Tt) => b(Tt, qe()),
                                            children: at,
                                            $$slots: { default: !0 }
                                          });
                                        });
                                      }
                                      z(Re, ge);
                                    }), z(G, Te);
                                  };
                                  se(he, (G) => {
                                    c(P).length === 0 ? G(xe) : G(De, !1);
                                  });
                                }
                                z(ve, we);
                              },
                              $$slots: { default: !0 }
                            });
                          }), z(L, fe);
                        },
                        $$slots: { default: !0 }
                      });
                    }), z(ee, j);
                  },
                  $$slots: { default: !0 }
                });
              }), z(O, B);
            },
            $$slots: { default: !0 }
          }
        ));
      }), z(A, D);
    }, I = (A) => {
      var D = de(), _ = Q(D);
      St(_, () => Nl, (T, S) => {
        S(T, Be(
          {
            type: "single",
            get value() {
              return c(y);
            }
          },
          () => p,
          {
            children: (O, M) => {
              var B = O4(), X = Q(B);
              {
                let E = /* @__PURE__ */ $(() => yn("nopan nodrag border-input dark:bg-input/30 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 flex h-9 w-full items-center justify-between rounded-md border bg-transparent px-2.5 py-1 text-base shadow-xs transition-[color,box-shadow] focus-visible:ring-3 aria-invalid:ring-3 md:text-sm", d() && "cursor-not-allowed bg-muted/50 text-muted-foreground opacity-60", h()));
                St(X, () => El, (Y, ee) => {
                  ee(Y, {
                    get class() {
                      return c(E);
                    },
                    get disabled() {
                      return d();
                    },
                    children: (K, j) => {
                      var W = k4(), J = Q(W), re = q(J);
                      {
                        var L = (ue) => {
                          Qn(ue, {
                            get target() {
                              return c(m)[0].label;
                            }
                          });
                        }, te = (ue) => {
                          var oe = x4(), ce = q(oe, !0);
                          Z(oe), Ne(() => nt(ce, u() ?? "")), z(ue, oe);
                        };
                        se(re, (ue) => {
                          c(m).length > 0 ? ue(L) : ue(te, !1);
                        });
                      }
                      Z(J);
                      var fe = R(J, 2);
                      zl(fe, { class: "size-4 opacity-50" }), z(K, W);
                    },
                    $$slots: { default: !0 }
                  });
                });
              }
              var U = R(X, 2);
              St(U, () => bl, (E, Y) => {
                Y(E, {
                  children: (ee, K) => {
                    var j = de(), W = Q(j);
                    St(W, () => _l, (J, re) => {
                      re(J, {
                        class: "nopan nodrag nowheel data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-96 min-w-(--bits-select-anchor-width) overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md",
                        children: (L, te) => {
                          var fe = de(), ue = Q(fe);
                          St(ue, () => Ol, (oe, ce) => {
                            ce(oe, {
                              class: "p-1",
                              children: (ve, ke) => {
                                var we = de(), he = Q(we);
                                {
                                  var xe = (G) => {
                                    var Te = C4();
                                    z(G, Te);
                                  }, De = (G) => {
                                    var Te = de(), Ve = Q(Te);
                                    kt(Ve, 17, () => c(P), ({ item: Re, level: He }) => Re.value, (Re, He) => {
                                      let qe = () => c(He).item, gt = () => c(He).level;
                                      const Pt = /* @__PURE__ */ $(() => qe().children && qe().children.length > 0), tt = /* @__PURE__ */ $(() => C(qe()));
                                      var ge = de(), Ee = Q(ge);
                                      {
                                        const at = (bt, rt) => {
                                          let Tt = () => rt?.().selected;
                                          var ut = P4(), it = Q(ut), $t = q(it);
                                          {
                                            var ao = (dt) => {
                                              var hn = $4();
                                              z(dt, hn);
                                            }, Vo = (dt) => {
                                              var hn = S4();
                                              z(dt, hn);
                                            };
                                            se($t, (dt) => {
                                              c(Pt) ? dt(ao) : dt(Vo, !1);
                                            });
                                          }
                                          var dn = R($t, 2);
                                          Qn(dn, {
                                            get target() {
                                              return qe().label;
                                            }
                                          }), Z(it);
                                          var xa = R(it, 2);
                                          {
                                            var ka = (dt) => {
                                              var hn = _4();
                                              z(dt, hn);
                                            };
                                            se(xa, (dt) => {
                                              Tt() && dt(ka);
                                            });
                                          }
                                          z(bt, ut);
                                        };
                                        let Xe = /* @__PURE__ */ $(() => yn("relative flex w-full cursor-pointer select-none items-center rounded-sm py-1.5 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50")), lt = /* @__PURE__ */ $(() => gt() * 4);
                                        St(Ee, () => Pl, (bt, rt) => {
                                          rt(bt, {
                                            get value() {
                                              return c(tt).value;
                                            },
                                            get label() {
                                              return c(tt).label;
                                            },
                                            get class() {
                                              return c(Xe);
                                            },
                                            get style() {
                                              return `padding-left: ${c(lt) ?? ""}px`;
                                            },
                                            onclick: (Tt) => b(Tt, qe()),
                                            children: at,
                                            $$slots: { default: !0 }
                                          });
                                        });
                                      }
                                      z(Re, ge);
                                    }), z(G, Te);
                                  };
                                  se(he, (G) => {
                                    c(P).length === 0 ? G(xe) : G(De, !1);
                                  });
                                }
                                z(ve, we);
                              },
                              $$slots: { default: !0 }
                            });
                          }), z(L, fe);
                        },
                        $$slots: { default: !0 }
                      });
                    }), z(ee, j);
                  },
                  $$slots: { default: !0 }
                });
              }), z(O, B);
            },
            $$slots: { default: !0 }
          }
        ));
      }), z(A, D);
    };
    se(V, (A) => {
      a() ? A(H) : A(I, !1);
    });
  }
  return z(t, N), le(x);
}
ie(
  Nt,
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
const N4 = ({
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
    Yg(t, u, {
      placement: r,
      middleware: [
        Zg(o),
        // 手动偏移配置
        qg(i),
        //自动翻转
        Wg(s),
        //自动偏移（使得浮动元素能够进入视野）
        ...l ? [Xg({ element: d })] : []
      ]
    }).then(({ x: b, y: k, placement: P, middlewareData: C }) => {
      if (Object.assign(u.style, {
        left: `${b}px`,
        top: `${k}px`
      }), l) {
        const { x, y: N } = C.arrow, V = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[P.split("-")[0]];
        Object.assign(d.style, {
          zIndex: -1,
          left: x != null ? `${x}px` : "",
          top: N != null ? `${N}px` : "",
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
var E4 = /* @__PURE__ */ ne('<div style="position: relative"><div><!></div> <div style="display: none; width: 100%;z-index: 9999"><!></div></div>');
function so(t, e) {
  ae(e, !0);
  const n = g(e, "children", 7), r = g(e, "floating", 7), o = g(e, "placement", 7, "bottom");
  let i, s, a;
  $n(() => (a = N4({
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
  }, d = E4(), h = q(d), p = q(h);
  Oe(p, n), Z(h), Mt(h, (y) => i = y, () => i);
  var v = R(h, 2), m = q(v);
  return Oe(m, r), Z(v), Mt(v, (y) => s = y, () => s), Z(d), z(t, d), le(u);
}
ie(so, { children: {}, floating: {}, placement: {} }, [], ["hide"], !0);
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
  }, a = de(), l = Q(a);
  return Rh(l, () => `h${r()}`, !1, (u, d) => {
    Ge(u, () => ({
      class: "tf-heading",
      style: `margin-top:${o() || "0"};margin-bottom:${i() || "0"}`
    }));
    var h = de(), p = Q(h);
    Oe(p, () => n() ?? Ke), z(d, h);
  }), z(t, a), le(s);
}
ie(Ye, { children: {}, level: {}, mt: {}, mb: {} }, [], [], !0);
var z4 = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1q3h954"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1q3h954"></path></svg>');
const M4 = {
  hash: "svelte-1q3h954",
  code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:var(--input);border:1px solid transparent;}}"
};
function Di(t, e) {
  ae(e, !0), Je(t, M4);
  const n = /* @__PURE__ */ Ae(e, ["$$slots", "$$events", "$$legacy", "$$host"]);
  {
    let r = /* @__PURE__ */ $(() => yn("input-btn-more", e.class));
    We(t, Be(
      {
        size: "icon-xs",
        get class() {
          return c(r);
        }
      },
      () => n,
      {
        children: (o, i) => {
          var s = z4();
          z(o, s);
        },
        $$slots: { default: !0 }
      }
    ));
  }
  le();
}
ie(Di, {}, [], [], !0);
const T4 = () => ({ deleteNode: (t) => {
  Ze.removeNode(t), Ze.updateEdges((e) => e.filter((n) => n.source !== t && n.target !== t));
} }), Kn = (t = 16) => {
  const e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = new Uint8Array(t);
  return crypto.getRandomValues(n), Array.from(n, (r) => e[r % e.length]).join("");
}, A4 = () => ({ copyNode: (t) => {
  const e = Ze.getNode(t);
  if (e) {
    const n = Kn(), r = {
      ...e,
      id: n,
      position: { x: e.position.x + 50, y: e.position.y + 50 }
    };
    Ze.updateNodes((o) => [...o.map((i) => ({ ...i, selected: !1 })), r]);
  }
} }), ft = () => xn("svelteflow__node_id"), Or = () => xn("tinyflow_options");
var D4 = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'), V4 = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'), H4 = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'), L4 = /* @__PURE__ */ ne('<div class="input-item svelte-ana6zl">执行条件： <!></div>'), I4 = /* @__PURE__ */ ne('<div class="input-item svelte-ana6zl">循环间隔时间（单位：毫秒）： <!></div> <div class="input-item svelte-ana6zl">最大循环次数（0 表示不限制）： <!></div> <div class="input-item svelte-ana6zl">退出条件： <!></div>', 1), R4 = /* @__PURE__ */ ne('<div class="input-item svelte-ana6zl">错误重试间隔时间（单位：毫秒）： <!></div> <div class="input-item svelte-ana6zl">最大重试次数： <!></div> <label class="input-item-inline svelte-ana6zl"><span>正常后重置重试次数记录：</span> <input type="checkbox"/></label>', 1), B4 = /* @__PURE__ */ ne('<div class="settings svelte-ana6zl"><div class="input-item svelte-ana6zl">节点名称： <!></div> <div class="input-item svelte-ana6zl">参数描述： <!></div> <!> <label class="input-item-inline svelte-ana6zl"><span>循环执行：</span> <input type="checkbox"/></label> <!> <label class="input-item-inline svelte-ana6zl"><span>错误重试：</span> <input type="checkbox"/></label> <!></div>'), K4 = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3.33946 17.0002C2.90721 16.2515 2.58277 15.4702 2.36133 14.6741C3.3338 14.1779 3.99972 13.1668 3.99972 12.0002C3.99972 10.8345 3.3348 9.824 2.36353 9.32741C2.81025 7.71651 3.65857 6.21627 4.86474 4.99001C5.7807 5.58416 6.98935 5.65534 7.99972 5.072C9.01009 4.48866 9.55277 3.40635 9.4962 2.31604C11.1613 1.8846 12.8847 1.90004 14.5031 2.31862C14.4475 3.40806 14.9901 4.48912 15.9997 5.072C17.0101 5.65532 18.2187 5.58416 19.1346 4.99007C19.7133 5.57986 20.2277 6.25151 20.66 7.00021C21.0922 7.7489 21.4167 8.53025 21.6381 9.32628C20.6656 9.82247 19.9997 10.8336 19.9997 12.0002C19.9997 13.166 20.6646 14.1764 21.6359 14.673C21.1892 16.2839 20.3409 17.7841 19.1347 19.0104C18.2187 18.4163 17.0101 18.3451 15.9997 18.9284C14.9893 19.5117 14.4467 20.5941 14.5032 21.6844C12.8382 22.1158 11.1148 22.1004 9.49633 21.6818C9.55191 20.5923 9.00929 19.5113 7.99972 18.9284C6.98938 18.3451 5.78079 18.4162 4.86484 19.0103C4.28617 18.4205 3.77172 17.7489 3.33946 17.0002ZM8.99972 17.1964C10.0911 17.8265 10.8749 18.8227 11.2503 19.9659C11.7486 20.0133 12.2502 20.014 12.7486 19.9675C13.1238 18.8237 13.9078 17.8268 14.9997 17.1964C16.0916 16.5659 17.347 16.3855 18.5252 16.6324C18.8146 16.224 19.0648 15.7892 19.2729 15.334C18.4706 14.4373 17.9997 13.2604 17.9997 12.0002C17.9997 10.74 18.4706 9.5632 19.2729 8.6665C19.1688 8.4405 19.0538 8.21822 18.9279 8.00021C18.802 7.78219 18.667 7.57148 18.5233 7.36842C17.3457 7.61476 16.0911 7.43414 14.9997 6.80405C13.9083 6.17395 13.1246 5.17768 12.7491 4.03455C12.2509 3.98714 11.7492 3.98646 11.2509 4.03292C10.8756 5.17671 10.0916 6.17364 8.99972 6.80405C7.9078 7.43447 6.65245 7.61494 5.47428 7.36803C5.18485 7.77641 4.93463 8.21117 4.72656 8.66637C5.52881 9.56311 5.99972 10.74 5.99972 12.0002C5.99972 13.2604 5.52883 14.4372 4.72656 15.3339C4.83067 15.5599 4.94564 15.7822 5.07152 16.0002C5.19739 16.2182 5.3324 16.4289 5.47612 16.632C6.65377 16.3857 7.90838 16.5663 8.99972 17.1964ZM11.9997 15.0002C10.3429 15.0002 8.99972 13.6571 8.99972 12.0002C8.99972 10.3434 10.3429 9.00021 11.9997 9.00021C13.6566 9.00021 14.9997 10.3434 14.9997 12.0002C14.9997 13.6571 13.6566 15.0002 11.9997 15.0002ZM11.9997 13.0002C12.552 13.0002 12.9997 12.5525 12.9997 12.0002C12.9997 11.4479 12.552 11.0002 11.9997 11.0002C11.4474 11.0002 10.9997 11.4479 10.9997 12.0002C10.9997 12.5525 11.4474 13.0002 11.9997 13.0002Z"></path></svg>'), F4 = /* @__PURE__ */ ne('<div class="tf-node-toolbar svelte-ana6zl"><!> <!> <!> <!></div>'), j4 = /* @__PURE__ */ ne('<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!> <!>', 1);
const Z4 = {
  hash: "svelte-ana6zl",
  code: ".tf-node-toolbar.svelte-ana6zl {display:flex;gap:5px;padding:5px;border-radius:5px;background:var(--background);border:1px solid var(--border);box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}.settings.svelte-ana6zl {display:flex;flex-direction:column;gap:10px;padding:10px;background:var(--background);border:1px solid var(--border);border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.settings.svelte-ana6zl .input-item:where(.svelte-ana6zl) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:var(--muted-foreground);}.settings.svelte-ana6zl .input-item-inline:where(.svelte-ana6zl) {display:flex;align-items:center;font-size:12px;color:var(--muted-foreground);}"
};
function cn(t, e) {
  ae(e, !0), Je(t, Z4);
  const n = g(e, "data", 7), r = g(e, "id", 7, ""), o = g(e, "icon", 7), i = g(e, "handle", 7), s = g(e, "children", 7), a = g(e, "allowExecute", 7, !0), l = g(e, "allowCopy", 7, !0), u = g(e, "allowDelete", 7, !0), d = g(e, "allowSetting", 7, !0), h = g(e, "allowSettingOfCondition", 7, !0), p = g(e, "showSourceHandle", 7, !0), v = g(e, "showTargetHandle", 7, !0), m = g(e, "onCollapse", 7);
  let y = n().expand ? ["key"] : [];
  const { updateNodeData: w, getNode: b } = Ct(), k = /* @__PURE__ */ $(() => [
    {
      key: "key",
      icon: o(),
      title: n().title,
      description: n().description,
      content: s()
    }
  ]), { deleteNode: P } = T4(), { copyNode: C } = A4(), x = Or(), N = () => {
    x.onNodeExecute?.(b(r()));
  };
  let V = ft();
  var H = {
    get data() {
      return n();
    },
    set data(E) {
      n(E), f();
    },
    get id() {
      return r();
    },
    set id(E = "") {
      r(E), f();
    },
    get icon() {
      return o();
    },
    set icon(E) {
      o(E), f();
    },
    get handle() {
      return i();
    },
    set handle(E) {
      i(E), f();
    },
    get children() {
      return s();
    },
    set children(E) {
      s(E), f();
    },
    get allowExecute() {
      return a();
    },
    set allowExecute(E = !0) {
      a(E), f();
    },
    get allowCopy() {
      return l();
    },
    set allowCopy(E = !0) {
      l(E), f();
    },
    get allowDelete() {
      return u();
    },
    set allowDelete(E = !0) {
      u(E), f();
    },
    get allowSetting() {
      return d();
    },
    set allowSetting(E = !0) {
      d(E), f();
    },
    get allowSettingOfCondition() {
      return h();
    },
    set allowSettingOfCondition(E = !0) {
      h(E), f();
    },
    get showSourceHandle() {
      return p();
    },
    set showSourceHandle(E = !0) {
      p(E), f();
    },
    get showTargetHandle() {
      return v();
    },
    set showTargetHandle(E = !0) {
      v(E), f();
    },
    get onCollapse() {
      return m();
    },
    set onCollapse(E) {
      m(E), f();
    }
  }, I = j4(), A = Q(I);
  {
    var D = (E) => {
      Vf(E, {
        get position() {
          return _e.Top;
        },
        align: "start",
        children: (Y, ee) => {
          var K = F4(), j = q(K);
          {
            var W = (oe) => {
              We(oe, {
                size: "icon",
                class: "tf-node-toolbar-item",
                onclick: () => {
                  P(r());
                },
                children: (ce, ve) => {
                  var ke = D4();
                  z(ce, ke);
                },
                $$slots: { default: !0 }
              });
            };
            se(j, (oe) => {
              u() && oe(W);
            });
          }
          var J = R(j, 2);
          {
            var re = (oe) => {
              We(oe, {
                size: "icon",
                class: "tf-node-toolbar-item",
                onclick: () => {
                  C(r());
                },
                children: (ce, ve) => {
                  var ke = V4();
                  z(ce, ke);
                },
                $$slots: { default: !0 }
              });
            };
            se(J, (oe) => {
              l() && oe(re);
            });
          }
          var L = R(J, 2);
          {
            var te = (oe) => {
              We(oe, {
                size: "icon",
                class: "tf-node-toolbar-item",
                onclick: N,
                children: (ce, ve) => {
                  var ke = H4();
                  z(ce, ke);
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
              so(oe, {
                placement: "bottom",
                floating: (ce) => {
                  var ve = B4(), ke = q(ve), we = R(q(ke));
                  vt(we, {
                    style: "width: 100%;",
                    onchange: (ge) => {
                      const Ee = ge.target.value;
                      w(V, { title: Ee });
                    },
                    get value() {
                      return n().title;
                    }
                  }), Z(ke);
                  var he = R(ke, 2), xe = R(q(he));
                  et(xe, {
                    rows: 3,
                    style: "width: 100%;",
                    onchange: (ge) => {
                      const Ee = ge.target.value;
                      w(V, { description: Ee });
                    },
                    get value() {
                      return n().description;
                    }
                  }), Z(he);
                  var De = R(he, 2);
                  {
                    var G = (ge) => {
                      var Ee = L4(), at = R(q(Ee));
                      et(at, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (Xe) => {
                          const lt = Xe.target.value;
                          w(V, { condition: lt });
                        },
                        get value() {
                          return n().condition;
                        }
                      }), Z(Ee), z(ge, Ee);
                    };
                    se(De, (ge) => {
                      h() && ge(G);
                    });
                  }
                  var Te = R(De, 2), Ve = R(q(Te), 2);
                  Cr(Ve), Ve.__change = (ge) => {
                    const Ee = ge.target.checked;
                    w(V, { loopEnable: Ee });
                  }, Z(Te);
                  var Re = R(Te, 2);
                  {
                    var He = (ge) => {
                      var Ee = I4(), at = Q(Ee), Xe = R(q(at));
                      {
                        let ut = /* @__PURE__ */ $(() => n().loopIntervalMs || "1000");
                        et(Xe, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (it) => {
                            const $t = it.target.value;
                            w(V, { loopIntervalMs: $t });
                          },
                          get value() {
                            return c(ut);
                          }
                        });
                      }
                      Z(at);
                      var lt = R(at, 2), bt = R(q(lt));
                      {
                        let ut = /* @__PURE__ */ $(() => n().maxLoopCount || "0");
                        et(bt, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (it) => {
                            const $t = it.target.value;
                            w(V, { maxLoopCount: $t });
                          },
                          get value() {
                            return c(ut);
                          }
                        });
                      }
                      Z(lt);
                      var rt = R(lt, 2), Tt = R(q(rt));
                      et(Tt, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (ut) => {
                          const it = ut.target.value;
                          w(V, { loopBreakCondition: it });
                        },
                        get value() {
                          return n().loopBreakCondition;
                        }
                      }), Z(rt), z(ge, Ee);
                    };
                    se(Re, (ge) => {
                      n().loopEnable && ge(He);
                    });
                  }
                  var qe = R(Re, 2), gt = R(q(qe), 2);
                  Cr(gt), gt.__change = (ge) => {
                    const Ee = ge.target.checked;
                    w(V, { retryEnable: Ee });
                  }, Z(qe);
                  var Pt = R(qe, 2);
                  {
                    var tt = (ge) => {
                      var Ee = R4(), at = Q(Ee), Xe = R(q(at));
                      {
                        let ut = /* @__PURE__ */ $(() => n().retryIntervalMs || "1000");
                        et(Xe, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (it) => {
                            const $t = it.target.value;
                            w(V, { retryIntervalMs: $t });
                          },
                          get value() {
                            return c(ut);
                          }
                        });
                      }
                      Z(at);
                      var lt = R(at, 2), bt = R(q(lt));
                      {
                        let ut = /* @__PURE__ */ $(() => n().maxRetryCount || "3");
                        et(bt, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (it) => {
                            const $t = it.target.value;
                            w(V, { maxRetryCount: $t });
                          },
                          get value() {
                            return c(ut);
                          }
                        });
                      }
                      Z(lt);
                      var rt = R(lt, 2), Tt = R(q(rt), 2);
                      Cr(Tt), Tt.__change = (ut) => {
                        const it = ut.target.checked;
                        w(V, { resetRetryCountAfterNormal: it });
                      }, Z(rt), Ne(() => _a(Tt, !!n().resetRetryCountAfterNormal)), z(ge, Ee);
                    };
                    se(Pt, (ge) => {
                      n().retryEnable && ge(tt);
                    });
                  }
                  Z(ve), Ne(() => {
                    _a(Ve, !!n().loopEnable), _a(gt, !!n().retryEnable);
                  }), z(ce, ve);
                },
                children: (ce, ve) => {
                  We(ce, {
                    size: "icon",
                    class: "tf-node-toolbar-item",
                    children: (ke, we) => {
                      var he = K4();
                      z(ke, he);
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
          Z(K), z(Y, K);
        },
        $$slots: { default: !0 }
      });
    };
    se(A, (E) => {
      (a() || l() || u()) && E(D);
    });
  }
  var _ = R(A, 2), T = R(q(_), 2), S = q(T);
  hv(S, {
    get items() {
      return c(k);
    },
    get activeKeys() {
      return y;
    },
    onChange: (E, Y) => {
      w(r(), { expand: Y?.includes("key") }), m()?.(Y?.includes("key") ? "key" : "");
    }
  }), Z(T), Z(_);
  var O = R(_, 2);
  {
    var M = (E) => {
      Sr(E, {
        type: "target",
        get position() {
          return _e.Left;
        },
        style: " left: -12px;top: 20px"
      });
    };
    se(O, (E) => {
      v() && E(M);
    });
  }
  var B = R(O, 2);
  {
    var X = (E) => {
      Sr(E, {
        type: "source",
        get position() {
          return _e.Right;
        },
        style: "right: -12px;top: 20px"
      });
    };
    se(B, (E) => {
      p() && E(X);
    });
  }
  var U = R(B, 2);
  return Oe(U, () => i() ?? Ke), z(t, I), le(H);
}
oo(["change"]);
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
var W4 = /* @__PURE__ */ ne('<div class="input-more-item svelte-n5iecj">数据选项： <!></div>'), q4 = /* @__PURE__ */ ne('<div class="input-more-setting svelte-n5iecj"><div class="input-more-item svelte-n5iecj">数据内容： <!></div> <div class="input-more-item svelte-n5iecj">输入方式： <!></div> <!> <div class="input-more-item svelte-n5iecj">数据标题： <!></div> <div class="input-more-item svelte-n5iecj">数据描述： <!></div> <div class="input-more-item svelte-n5iecj">占位符： <!></div> <div class="input-more-item svelte-n5iecj"><!></div></div>'), X4 = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>'), Y4 = /* @__PURE__ */ ne('<div class="input-item svelte-n5iecj"><!></div> <div class="input-item svelte-n5iecj"><!></div> <div class="input-item svelte-n5iecj"><!></div>', 1);
const U4 = {
  hash: "svelte-n5iecj",
  code: ".input-item.svelte-n5iecj {display:flex;align-items:center;}.input-more-setting.svelte-n5iecj {display:flex;flex-direction:column;gap:10px;padding:10px;background:var(--background);border:1px solid var(--border);border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-n5iecj .input-more-item:where(.svelte-n5iecj) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:var(--muted-foreground);}"
};
function pv(t, e) {
  ae(e, !0), Je(t, U4);
  const n = g(e, "parameter", 7), r = g(e, "index", 7);
  let o = ft(), i = fr(o), s = /* @__PURE__ */ $(() => ({ ...n(), ...i?.current?.data?.parameters[r()] }));
  const { updateNodeData: a } = Ct(), l = (H, I) => {
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
  }, b = Y4(), k = Q(b), P = q(k);
  vt(P, {
    style: "width: 100%;",
    get value() {
      return c(s).name;
    },
    placeholder: "请输入参数名称",
    oninput: d
  }), Z(k);
  var C = R(k, 2), x = q(C);
  uv(x, {
    get checked() {
      return c(s).required;
    },
    onCheckedChange: h
  }), Z(C);
  var N = R(C, 2), V = q(N);
  return Mt(
    so(V, {
      placement: "bottom",
      floating: (H) => {
        var I = q4(), A = q(I), D = R(q(A));
        {
          let j = /* @__PURE__ */ $(() => c(s).contentType ? [c(s).contentType] : []);
          Nt(D, {
            get items() {
              return ku;
            },
            style: "width: 100%",
            defaultValue: ["text"],
            get value() {
              return c(j);
            },
            onSelect: v
          });
        }
        Z(A);
        var _ = R(A, 2), T = R(q(_));
        {
          let j = /* @__PURE__ */ $(() => c(s).formType ? [c(s).formType] : []);
          Nt(T, {
            get items() {
              return Px;
            },
            style: "width: 100%",
            defaultValue: ["input"],
            get value() {
              return c(j);
            },
            onSelect: p
          });
        }
        Z(_);
        var S = R(_, 2);
        {
          var O = (j) => {
            var W = W4(), J = R(q(W));
            {
              let re = /* @__PURE__ */ $(() => c(s).enums?.join(`
`));
              et(J, {
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
            Z(W), z(j, W);
          };
          se(S, (j) => {
            (c(s).formType === "radio" || c(s).formType === "checkbox" || c(s).formType === "select") && j(O);
          });
        }
        var M = R(S, 2), B = R(q(M));
        et(B, {
          rows: 1,
          style: "width: 100%;",
          onchange: (j) => {
            u("formLabel", j);
          },
          get value() {
            return c(s).formLabel;
          }
        }), Z(M);
        var X = R(M, 2), U = R(q(X));
        et(U, {
          rows: 2,
          style: "width: 100%;",
          onchange: (j) => {
            u("formDescription", j);
          },
          get value() {
            return c(s).formDescription;
          }
        }), Z(X);
        var E = R(X, 2), Y = R(q(E));
        et(Y, {
          rows: 2,
          style: "width: 100%;",
          onchange: (j) => {
            u("formPlaceholder", j);
          },
          get value() {
            return c(s).formPlaceholder;
          }
        }), Z(E);
        var ee = R(E, 2), K = q(ee);
        We(K, {
          variant: "destructive",
          onclick: y,
          children: (j, W) => {
            Se();
            var J = ze("删除");
            z(j, J);
          },
          $$slots: { default: !0 }
        }), Z(ee), Z(I), z(H, I);
      },
      children: (H, I) => {
        We(H, {
          size: "icon-xs",
          class: "input-btn-more",
          children: (A, D) => {
            var _ = X4();
            z(A, _);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (H) => m = H,
    () => m
  ), Z(N), z(t, b), le(w);
}
ie(pv, { parameter: {}, index: {} }, [], [], !0);
var G4 = /* @__PURE__ */ ne('<div class="input-header svelte-1yp5n1k">参数名称</div> <div class="input-header svelte-1yp5n1k">必填</div> <div class="input-header svelte-1yp5n1k"></div>', 1), J4 = /* @__PURE__ */ ne('<div class="none-params svelte-1yp5n1k">无输入参数</div>'), Q4 = /* @__PURE__ */ ne('<div class="input-container svelte-1yp5n1k"><!> <!></div>');
const eC = {
  hash: "svelte-1yp5n1k",
  code: `.input-container.svelte-1yp5n1k {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1yp5n1k .none-params:where(.svelte-1yp5n1k) {font-size:12px;background:var(--secondary);height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1yp5n1k .input-header:where(.svelte-1yp5n1k) {font-size:12px;color:var(--muted-foreground);}`
};
function fv(t, e) {
  ae(e, !0), Je(t, eC);
  let n = ft(), r = fr(n), o = /* @__PURE__ */ $(() => [...r?.current?.data?.parameters || []]);
  var i = Q4(), s = q(i);
  {
    var a = (u) => {
      var d = G4();
      Se(4), z(u, d);
    };
    se(s, (u) => {
      c(o).length !== 0 && u(a);
    });
  }
  var l = R(s, 2);
  kt(
    l,
    19,
    () => c(o),
    (u) => u.id,
    (u, d, h) => {
      pv(u, {
        get parameter() {
          return c(d);
        },
        get index() {
          return c(h);
        }
      });
    },
    (u) => {
      var d = J4();
      z(u, d);
    }
  ), Z(i), z(t, i), le();
}
ie(fv, {}, [], [], !0);
const fi = (t) => (!t || t.length == 0 || t.forEach((e) => {
  e.id || (e.id = Kn()), fi(e.children);
}), t), Pn = () => {
  const { updateNodeData: t } = Ct();
  return {
    addParameter: (e, n = "parameters", r) => {
      Array.isArray(r) ? r.forEach((s) => fi(s?.children)) : fi(r?.children);
      function o(s) {
        return {
          name: "",
          dataType: "String",
          refType: "ref",
          ...s,
          id: Kn()
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
var tC = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), nC = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), rC = /* @__PURE__ */ ne('<div class="heading svelte-llt1qy"><!> <!></div> <!>', 1);
const oC = {
  hash: "svelte-llt1qy",
  code: ".heading.svelte-llt1qy {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:var(--muted);border:1px solid transparent;}"
};
function gv(t, e) {
  ae(e, !0), Je(t, oC);
  const n = g(e, "data", 7), r = /* @__PURE__ */ Ae(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = ft(), { addParameter: i } = Pn();
  var s = {
    get data() {
      return n();
    },
    set data(a) {
      n(a), f();
    }
  };
  return cn(t, Be(() => r, {
    get data() {
      return n();
    },
    allowExecute: !1,
    showTargetHandle: !1,
    allowSettingOfCondition: !1,
    icon: (a) => {
      var l = tC();
      z(a, l);
    },
    children: (a, l) => {
      var u = rC(), d = Q(u), h = q(d);
      Ye(h, {
        level: 3,
        children: (m, y) => {
          Se();
          var w = ze("输入参数");
          z(m, w);
        },
        $$slots: { default: !0 }
      });
      var p = R(h, 2);
      We(p, {
        size: "icon-xs",
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: () => {
          i(o, "parameters", { refType: "input", name: "newParam" });
        },
        children: (m, y) => {
          var w = nC();
          z(m, w);
        },
        $$slots: { default: !0 }
      }), Z(d);
      var v = R(d, 2);
      fv(v, {}), z(a, u);
    },
    $$slots: { icon: !0, default: !0 }
  })), le(s);
}
ie(gv, { data: {} }, [], [], !0);
const vv = (t, e, n) => {
  for (const r of n)
    r.target === e && r.source && (t.push(r.source), vv(t, r.source, n));
}, mv = (t, e, n) => !t || t.length === 0 ? [] : t.map((r) => ({
  label: r.name + (n ? ` (Array<${r.dataType || "String"}>)` : ` (${r.dataType || "String"})`),
  value: e + "." + r.name,
  children: mv(r.children, e + "." + r.name, n)
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
          children: mv(r, t.id, e)
        };
    }
  }
}, yv = (t = !1) => {
  const e = ft(), n = fr(e), r = /* @__PURE__ */ $(_n), o = /* @__PURE__ */ $(() => c(r).nodes), i = /* @__PURE__ */ $(() => c(r).edges), s = /* @__PURE__ */ $(() => c(r).nodeLookup);
  let a = /* @__PURE__ */ $(() => {
    const l = [];
    if (!n.current)
      return [];
    const u = c(s).get(e);
    if (t)
      for (const d of c(o)) {
        const h = d.parentId === n.current.id;
        if (h) {
          const p = Ad(d, h, u);
          p && l.push(p);
        }
      }
    else {
      const d = [];
      vv(d, e, c(i));
      for (const h of c(o))
        if (d.includes(h.id)) {
          const p = h.parentId === n.current.id, v = Ad(h, p, u);
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
var iC = /* @__PURE__ */ ne('<div class="input-more-item svelte-jmeys3">数据内容： <!></div>'), sC = /* @__PURE__ */ ne('<div class="input-more-setting svelte-jmeys3"><div class="input-more-item svelte-jmeys3">数据来源： <!></div> <!> <div class="input-more-item svelte-jmeys3">默认值： <!></div> <div class="input-more-item svelte-jmeys3">参数描述： <!></div> <div class="input-more-item svelte-jmeys3"><!></div></div>'), aC = /* @__PURE__ */ ne('<div class="input-item svelte-jmeys3"><!></div> <div class="input-item svelte-jmeys3"><!></div> <div class="input-item svelte-jmeys3"><!></div>', 1);
const lC = {
  hash: "svelte-jmeys3",
  code: ".input-item.svelte-jmeys3 {display:flex;align-items:center;}.input-more-setting.svelte-jmeys3 {display:flex;flex-direction:column;gap:10px;padding:10px;background:var(--background);border:1px solid var(--border);border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-jmeys3 .input-more-item:where(.svelte-jmeys3) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:var(--muted-foreground);}"
};
function wv(t, e) {
  ae(e, !0), Je(t, lC), $n(() => {
    c(u).refType || m({ value: "ref" });
  });
  const n = g(e, "parameter", 7), r = g(e, "index", 7), o = g(e, "dataKeyName", 7), i = g(e, "useChildrenOnly", 7), s = g(e, "showContentType", 7, !1);
  let a = ft(), l = fr(a), u = /* @__PURE__ */ $(() => ({
    ...n(),
    ...l?.current?.data?.[o()][r()]
  }));
  const { updateNodeData: d } = Ct(), h = (T, S) => {
    d(a, (O) => {
      let M = O.data?.[o()];
      return M[r()] = { ...M[r()], [T]: S }, { [o()]: M };
    });
  }, p = (T, S) => {
    const O = S.target.value;
    h(T, O);
  }, v = (T) => {
    const S = T.value;
    h("ref", S);
  }, m = (T) => {
    const S = T.value;
    h("refType", S);
  }, y = (T) => {
    const S = T.value;
    h("contentType", S);
  };
  let w;
  const b = () => {
    d(a, (T) => {
      let S = T.data?.[o()];
      return S.splice(r(), 1), { [o()]: [...S] };
    }), w?.hide();
  };
  let k = yv(i());
  var P = {
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
  }, C = aC(), x = Q(C), N = q(x);
  {
    let T = /* @__PURE__ */ $(() => c(u).nameDisabled === !0);
    vt(N, {
      style: "width: 100%;",
      get value() {
        return c(u).name;
      },
      placeholder: "请输入参数名称",
      get disabled() {
        return c(T);
      },
      oninput: (S) => p("name", S)
    });
  }
  Z(x);
  var V = R(x, 2), H = q(V);
  {
    var I = (T) => {
      vt(T, {
        get value() {
          return c(u).value;
        },
        placeholder: "请输入参数值",
        oninput: (S) => p("value", S)
      });
    }, A = (T) => {
      var S = de(), O = Q(S);
      {
        var M = (B) => {
          {
            let X = /* @__PURE__ */ $(() => [c(u).ref]);
            Nt(B, {
              get items() {
                return k.current;
              },
              style: "width: 100%",
              defaultValue: ["ref"],
              get value() {
                return c(X);
              },
              expandAll: !0,
              onSelect: v
            });
          }
        };
        se(
          O,
          (B) => {
            c(u).refType !== "input" && B(M);
          },
          !0
        );
      }
      z(T, S);
    };
    se(H, (T) => {
      c(u).refType === "fixed" ? T(I) : T(A, !1);
    });
  }
  Z(V);
  var D = R(V, 2), _ = q(D);
  return Mt(
    so(_, {
      placement: "bottom",
      floating: (T) => {
        var S = sC(), O = q(S), M = R(q(O));
        {
          let W = /* @__PURE__ */ $(() => c(u).refType ? [c(u).refType] : []);
          Nt(M, {
            get items() {
              return _x;
            },
            style: "width: 100%",
            defaultValue: ["ref"],
            get value() {
              return c(W);
            },
            onSelect: m
          });
        }
        Z(O);
        var B = R(O, 2);
        {
          var X = (W) => {
            var J = iC(), re = R(q(J));
            {
              let L = /* @__PURE__ */ $(() => c(u).contentType ? [c(u).contentType] : []);
              Nt(re, {
                get items() {
                  return ku;
                },
                style: "width: 100%",
                defaultValue: ["text"],
                get value() {
                  return c(L);
                },
                onSelect: y
              });
            }
            Z(J), z(W, J);
          };
          se(B, (W) => {
            s() && W(X);
          });
        }
        var U = R(B, 2), E = R(q(U));
        et(E, {
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
        var Y = R(U, 2), ee = R(q(Y));
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
        var K = R(Y, 2), j = q(K);
        We(j, {
          variant: "destructive",
          onclick: b,
          children: (W, J) => {
            Se();
            var re = ze("删除");
            z(W, re);
          },
          $$slots: { default: !0 }
        }), Z(K), Z(S), z(T, S);
      },
      children: (T, S) => {
        Di(T, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (T) => w = T,
    () => w
  ), Z(D), z(t, C), le(P);
}
ie(
  wv,
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
var uC = /* @__PURE__ */ ne('<div class="input-header svelte-32f1pk">参数名称</div> <div class="input-header svelte-32f1pk">参数值</div> <div class="input-header svelte-32f1pk"></div>', 1), cC = /* @__PURE__ */ ne('<div class="none-params svelte-32f1pk"> </div>'), dC = /* @__PURE__ */ ne('<div class="input-container svelte-32f1pk"><!> <!></div>');
const hC = {
  hash: "svelte-32f1pk",
  code: `.input-container.svelte-32f1pk {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-32f1pk .none-params:where(.svelte-32f1pk) {font-size:12px;background:var(--secondary);height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-32f1pk .input-header:where(.svelte-32f1pk) {font-size:12px;color:var(--muted-foreground);}`
};
function Rt(t, e) {
  ae(e, !0), Je(t, hC);
  const n = g(e, "noneParameterText", 7, "无输入参数"), r = g(e, "dataKeyName", 7, "parameters"), o = g(e, "useChildrenOnly", 7), i = g(e, "showContentType", 7, !1);
  let s = ft(), a = fr(s), l = /* @__PURE__ */ $(() => [...a?.current?.data?.[r()] || []]);
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
  }, d = dC(), h = q(d);
  {
    var p = (m) => {
      var y = uC();
      Se(4), z(m, y);
    };
    se(h, (m) => {
      c(l).length !== 0 && m(p);
    });
  }
  var v = R(h, 2);
  return kt(
    v,
    19,
    () => c(l),
    (m) => m.id,
    (m, y, w) => {
      wv(m, {
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
      var y = cC(), w = q(y, !0);
      Z(y), Ne(() => nt(w, n())), z(m, y);
    }
  ), Z(d), z(t, d), le(u);
}
ie(
  Rt,
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
var pC = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), fC = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), gC = /* @__PURE__ */ ne('<div class="heading svelte-1fiuxu3"><!> <!></div> <!>', 1);
const vC = {
  hash: "svelte-1fiuxu3",
  code: ".heading.svelte-1fiuxu3 {display:flex;margin-bottom:10px;}"
};
function bv(t, e) {
  ae(e, !0), Je(t, vC);
  const n = g(e, "data", 7), r = /* @__PURE__ */ Ae(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = ft(), { addParameter: i } = Pn();
  var s = {
    get data() {
      return n();
    },
    set data(a) {
      n(a), f();
    }
  };
  return cn(t, Be(
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
        var l = pC();
        z(a, l);
      },
      children: (a, l) => {
        var u = gC(), d = Q(u), h = q(d);
        Ye(h, {
          level: 3,
          children: (m, y) => {
            Se();
            var w = ze("输出参数");
            z(m, w);
          },
          $$slots: { default: !0 }
        });
        var p = R(h, 2);
        We(p, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs", { name: "output" });
          },
          children: (m, y) => {
            var w = fC();
            z(m, w);
          },
          $$slots: { default: !0 }
        }), Z(d);
        var v = R(d, 2);
        Rt(v, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs",
          showContentType: !0
        }), z(a, u);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), le(s);
}
ie(bv, { data: {} }, [], [], !0);
const Fa = (t) => JSON.parse(JSON.stringify(t));
var mC = /* @__PURE__ */ Ce('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), yC = /* @__PURE__ */ ne('<div class="input-more-item svelte-hwmib9"><!></div>'), wC = /* @__PURE__ */ ne('<div class="input-more-setting svelte-hwmib9"><div class="input-more-item svelte-hwmib9">默认值： <!></div> <div class="input-more-item svelte-hwmib9">参数描述： <!></div> <!></div>'), bC = /* @__PURE__ */ ne('<div class="input-item svelte-hwmib9"><!> <!></div> <div class="input-item svelte-hwmib9"><!> <!></div> <div class="input-item svelte-hwmib9"><!></div>', 1);
const xC = {
  hash: "svelte-hwmib9",
  code: ".input-item.svelte-hwmib9 {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-hwmib9 {display:flex;flex-direction:column;gap:10px;padding:10px;background:var(--background);border:1px solid var(--border);border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-hwmib9 .input-more-item:where(.svelte-hwmib9) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:var(--muted-foreground);}"
};
function xv(t, e) {
  ae(e, !0), Je(t, xC);
  const n = g(e, "parameter", 7), r = g(e, "position", 7), o = g(e, "dataKeyName", 7), i = g(e, "placeholder", 7, "请输入参数值");
  let s = ft(), a = fr(s), l = /* @__PURE__ */ $(() => {
    let _ = a?.current?.data?.[o()], T;
    if (_ && r().length > 0) {
      let S = _;
      for (let O = 0; O < r().length; O++) {
        const M = r()[O];
        O == r().length - 1 ? T = S[M] : S = S[M].children;
      }
    }
    return { ...n(), ...T };
  });
  const { updateNodeData: u } = Ct(), d = (_, T) => {
    u(s, (S) => {
      const O = S.data?.[o()];
      if (O && r().length > 0) {
        let M = O;
        for (let B = 0; B < r().length; B++) {
          const X = r()[B];
          B == r().length - 1 ? M[X] = { ...M[X], [_]: T } : M = M[X].children;
        }
      }
      return { [o()]: [...Fa(O)] };
    });
  }, h = (_, T) => {
    const S = T.target.value;
    d(_, S);
  }, p = (_) => {
    const T = _.value;
    d("dataType", T);
  };
  let v;
  const m = () => {
    u(s, (_) => {
      let T = _.data?.[o()];
      if (T && r().length > 0) {
        let S = T;
        for (let O = 0; O < r().length; O++) {
          const M = r()[O];
          O == r().length - 1 ? S.splice(M, 1) : S = S[M].children;
        }
      }
      return { [o()]: [...Fa(T)] };
    }), v?.hide();
  }, y = () => {
    u(s, (_) => {
      let T = _.data?.[o()];
      if (T && r().length > 0) {
        let S = T;
        for (let O = 0; O < r().length; O++) {
          const M = r()[O];
          O == r().length - 1 ? S[M].children ? S[M].children.push({ id: Kn(), name: "newParam", dataType: "String" }) : S[M].children = [{ id: Kn(), name: "newParam", dataType: "String" }] : S = S[M].children;
        }
      }
      return { [o()]: [...Fa(T)] };
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
  }, b = bC(), k = Q(b), P = q(k);
  {
    var C = (_) => {
      var T = de(), S = Q(T);
      kt(S, 17, r, Xr, (O, M) => {
        Se();
        var B = ze(" ");
        z(O, B);
      }), z(_, T);
    };
    se(P, (_) => {
      r().length > 1 && _(C);
    });
  }
  var x = R(P, 2);
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
      oninput: (T) => {
        h("name", T);
      },
      get disabled() {
        return c(_);
      }
    });
  }
  Z(k);
  var N = R(k, 2), V = q(N);
  {
    let _ = /* @__PURE__ */ $(() => c(l).dataTypeItems || Sx), T = /* @__PURE__ */ $(() => c(l).dataType ? [c(l).dataType] : []), S = /* @__PURE__ */ $(() => c(l).dataTypeDisabled === !0);
    Nt(V, {
      get items() {
        return c(_);
      },
      style: "width: 100%",
      defaultValue: ["String"],
      get value() {
        return c(T);
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
      We(_, {
        size: "icon-xs",
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: y,
        children: (T, S) => {
          var O = mC();
          z(T, O);
        },
        $$slots: { default: !0 }
      });
    };
    se(H, (_) => {
      (c(l).dataType === "Object" || c(l).dataType === "Array") && c(l).addChildDisabled !== !0 && _(I);
    });
  }
  Z(N);
  var A = R(N, 2), D = q(A);
  return Mt(
    so(D, {
      placement: "bottom",
      floating: (_) => {
        var T = wC(), S = q(T), O = R(q(S));
        {
          let E = /* @__PURE__ */ $(() => c(l).defaultValue || "");
          et(O, {
            rows: 1,
            style: "width: 100%;",
            get value() {
              return c(E);
            },
            onchange: (Y) => {
              h("defaultValue", Y);
            }
          });
        }
        Z(S);
        var M = R(S, 2), B = R(q(M));
        {
          let E = /* @__PURE__ */ $(() => c(l).description || "");
          et(B, {
            rows: 3,
            style: "width: 100%;",
            get value() {
              return c(E);
            },
            onchange: (Y) => {
              h("description", Y);
            }
          });
        }
        Z(M);
        var X = R(M, 2);
        {
          var U = (E) => {
            var Y = yC(), ee = q(Y);
            We(ee, {
              variant: "destructive",
              onclick: m,
              children: (K, j) => {
                Se();
                var W = ze("删除");
                z(K, W);
              },
              $$slots: { default: !0 }
            }), Z(Y), z(E, Y);
          };
          se(X, (E) => {
            c(l).deleteDisabled !== !0 && E(U);
          });
        }
        Z(T), z(_, T);
      },
      children: (_, T) => {
        Di(_, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (_) => v = _,
    () => v
  ), Z(A), z(t, b), le(w);
}
ie(
  xv,
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
var kC = /* @__PURE__ */ ne("<!> <!>", 1), CC = /* @__PURE__ */ ne('<div class="none-params svelte-1oz5kx0"> </div>'), $C = /* @__PURE__ */ ne('<div class="input-header svelte-1oz5kx0">参数名称</div> <div class="input-header svelte-1oz5kx0">参数类型</div> <div class="input-header svelte-1oz5kx0"></div>', 1), SC = /* @__PURE__ */ ne('<div class="input-container svelte-1oz5kx0"><!> <!></div>');
const _C = {
  hash: "svelte-1oz5kx0",
  code: `.input-container.svelte-1oz5kx0 {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1oz5kx0 .none-params:where(.svelte-1oz5kx0) {font-size:12px;background:var(--secondary);height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1oz5kx0 .input-header:where(.svelte-1oz5kx0) {font-size:12px;color:var(--muted-foreground);}`
};
function gr(t, e) {
  ae(e, !0), Je(t, _C);
  const n = (m, y = Ke, w = Ke) => {
    var b = de(), k = Q(b);
    kt(
      k,
      19,
      y,
      (P) => `${P.id}_${P.children ? P.children.length : 0}`,
      (P, C, x) => {
        var N = kC(), V = Q(N);
        {
          let A = /* @__PURE__ */ $(() => [...w(), c(x)]);
          xv(V, {
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
        z(P, N);
      },
      (P) => {
        var C = de(), x = Q(C);
        {
          var N = (V) => {
            var H = CC(), I = q(H, !0);
            Z(H), Ne(() => nt(I, r())), z(V, H);
          };
          se(x, (V) => {
            w().length === 0 && V(N);
          });
        }
        z(P, C);
      }
    ), z(m, b);
  }, r = g(e, "noneParameterText", 7, "无输出参数"), o = g(e, "dataKeyName", 7, "outputDefs"), i = g(e, "placeholder", 7, "请输入参数名称");
  let s = ft(), a = fr(s), l = /* @__PURE__ */ $(() => [...a?.current?.data?.[o()] || []]);
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
  }, d = SC(), h = q(d);
  {
    var p = (m) => {
      var y = $C();
      Se(4), z(m, y);
    };
    se(h, (m) => {
      c(l).length !== 0 && m(p);
    });
  }
  var v = R(h, 2);
  return n(v, () => c(l) || [], () => []), Z(d), z(t, d), le(u);
}
ie(gr, { noneParameterText: {}, dataKeyName: {}, placeholder: {} }, [], [], !0);
var PC = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), OC = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), NC = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), EC = /* @__PURE__ */ ne('<div class="llm-setting svelte-j81vcl"><div class="setting-title svelte-j81vcl">采样参数</div> <div class="setting-item svelte-j81vcl"><div class="slider-container svelte-j81vcl"><span class="svelte-j81vcl"> </span> <input class="nodrag svelte-j81vcl" type="range" min="0" max="1" step="0.1"/></div></div> <div class="setting-item svelte-j81vcl"><div class="slider-container svelte-j81vcl"><span class="svelte-j81vcl"> </span> <input class="nodrag svelte-j81vcl" type="range" min="0" max="1" step="0.1"/></div></div> <div class="setting-item svelte-j81vcl"><div class="slider-container svelte-j81vcl"><span class="svelte-j81vcl"> </span> <input class="nodrag svelte-j81vcl" type="range" min="0" max="100" step="1"/></div></div></div>'), zC = /* @__PURE__ */ ne('<div class="setting-title svelte-j81vcl">JSON Schema</div> <div class="setting-item svelte-j81vcl"><!></div>', 1), MC = /* @__PURE__ */ ne('<div class="heading svelte-j81vcl"><!> <!></div> <!> <div class="heading svelte-j81vcl" style="padding-top: 10px"><!> <!></div> <!> <!> <div class="setting-title svelte-j81vcl">模型</div> <div class="setting-item svelte-j81vcl"><!> <!></div> <div class="setting-title svelte-j81vcl">系统提示词</div> <div class="setting-item svelte-j81vcl"><!></div> <div class="setting-title svelte-j81vcl">用户提示词</div> <div class="setting-item svelte-j81vcl"><!></div> <!> <div class="heading svelte-j81vcl"><!> <!></div> <!>', 1);
const TC = {
  hash: "svelte-j81vcl",
  code: `.heading.svelte-j81vcl {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-j81vcl {font-size:12px;color:var(--secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-j81vcl {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-j81vcl {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-j81vcl span:where(.svelte-j81vcl) {font-size:12px;color:var(--muted-foreground);display:flex;justify-content:space-between;align-items:center;}.llm-setting.svelte-j81vcl {width:200px;background:var(--background);padding:10px;border-radius:5px;box-shadow:0 0 10px rgba(0, 0, 0, 0.1);border:1px solid var(--border);}input[type='range'].svelte-j81vcl {width:100%;height:4px;background:var(--muted);border-radius:2px;outline:none;-webkit-appearance:none;}input[type='range'].svelte-j81vcl::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:var(--primary);border-radius:50%;cursor:pointer;}`
};
function kv(t, e) {
  ae(e, !0), Je(t, TC);
  const n = g(e, "data", 7), r = /* @__PURE__ */ Ae(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = ft(), { addParameter: i } = Pn(), s = Or();
  let a = /* @__PURE__ */ me(ht([]));
  $n(async () => {
    const h = await s.provider?.llm?.();
    c(a).push(...h || []);
  });
  const { updateNodeData: l } = Ct(), u = (h) => {
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
  return cn(t, Be(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (h) => {
        var p = PC();
        z(h, p);
      },
      children: (h, p) => {
        var v = MC(), m = Q(v), y = q(m);
        Ye(y, {
          level: 3,
          children: (E, Y) => {
            Se();
            var ee = ze("输入参数");
            z(E, ee);
          },
          $$slots: { default: !0 }
        });
        var w = R(y, 2);
        We(w, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (E, Y) => {
            var ee = OC();
            z(E, ee);
          },
          $$slots: { default: !0 }
        }), Z(m);
        var b = R(m, 2);
        Rt(b, {});
        var k = R(b, 2), P = q(k);
        Ye(P, {
          level: 3,
          children: (E, Y) => {
            Se();
            var ee = ze("图片识别");
            z(E, ee);
          },
          $$slots: { default: !0 }
        });
        var C = R(P, 2);
        We(C, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "images");
          },
          children: (E, Y) => {
            var ee = NC();
            z(E, ee);
          },
          $$slots: { default: !0 }
        }), Z(k);
        var x = R(k, 2);
        Rt(x, { dataKeyName: "images", noneParameterText: "无图片参数" });
        var N = R(x, 2);
        Ye(N, {
          level: 3,
          mt: "10px",
          children: (E, Y) => {
            Se();
            var ee = ze("模型设置");
            z(E, ee);
          },
          $$slots: { default: !0 }
        });
        var V = R(N, 4), H = q(V);
        {
          let E = /* @__PURE__ */ $(() => n().llmId ? [n().llmId] : []);
          Nt(H, {
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
              return c(E);
            }
          });
        }
        var I = R(H, 2);
        so(I, {
          placement: "bottom",
          floating: (E) => {
            var Y = EC(), ee = R(q(Y), 2), K = q(ee), j = q(K), W = q(j);
            Z(j);
            var J = R(j, 2);
            Cr(J), J.__input = (he) => l(o, { temperature: parseFloat(he.target.value) }), Z(K), Z(ee);
            var re = R(ee, 2), L = q(re), te = q(L), fe = q(te);
            Z(te);
            var ue = R(te, 2);
            Cr(ue), ue.__input = (he) => l(o, { topP: parseFloat(he.target.value) }), Z(L), Z(re);
            var oe = R(re, 2), ce = q(oe), ve = q(ce), ke = q(ve);
            Z(ve);
            var we = R(ve, 2);
            Cr(we), we.__input = (he) => l(o, { topK: parseInt(he.target.value) }), Z(ce), Z(oe), Z(Y), Ne(() => {
              nt(W, `Temperature: ${n().temperature ?? 0.5 ?? ""}`), ts(J, n().temperature ?? 0.5), nt(fe, `Top P: ${n().topP ?? 0.9 ?? ""}`), ts(ue, n().topP ?? 0.9), nt(ke, `Top K: ${n().topK ?? 50 ?? ""}`), ts(we, n().topK ?? 50);
            }), z(E, Y);
          },
          children: (E, Y) => {
            Di(E, {});
          },
          $$slots: { floating: !0, default: !0 }
        }), Z(V);
        var A = R(V, 4), D = q(A);
        {
          let E = /* @__PURE__ */ $(() => n().systemPrompt || "");
          et(D, {
            rows: 5,
            placeholder: "请输入系统提示词",
            style: "width: 100%",
            get value() {
              return c(E);
            },
            oninput: (Y) => {
              l(o, { systemPrompt: Y.target.value });
            }
          });
        }
        Z(A);
        var _ = R(A, 4), T = q(_);
        {
          let E = /* @__PURE__ */ $(() => n().userPrompt || "");
          et(T, {
            rows: 5,
            placeholder: "请输入用户提示词",
            style: "width: 100%",
            get value() {
              return c(E);
            },
            oninput: (Y) => {
              l(o, { userPrompt: Y.target.value });
            }
          });
        }
        Z(_);
        var S = R(_, 2);
        {
          var O = (E) => {
            var Y = zC(), ee = R(Q(Y), 2), K = q(ee);
            {
              let j = /* @__PURE__ */ $(() => n().jsonSchema || "");
              et(K, {
                rows: 5,
                placeholder: "请输入 SON Schema",
                style: "width: 100%",
                get value() {
                  return c(j);
                },
                oninput: (W) => {
                  l(o, { jsonSchema: W.target.value });
                }
              });
            }
            Z(ee), z(E, Y);
          };
          se(S, (E) => {
            n().outType === "json" && E(O);
          });
        }
        var M = R(S, 2), B = q(M);
        Ye(B, {
          level: 3,
          children: (E, Y) => {
            Se();
            var ee = ze("输出参数");
            z(E, ee);
          },
          $$slots: { default: !0 }
        });
        var X = R(B, 2);
        {
          let E = /* @__PURE__ */ $(() => n().outType ? [n().outType] : []);
          Nt(X, {
            class: "w-25 ml-auto",
            items: [
              { label: "文本", value: "text" },
              { label: "JSON", value: "json" }
            ],
            onSelect: (Y) => {
              u(Y.value);
            },
            get value() {
              return c(E);
            }
          });
        }
        Z(M);
        var U = R(M, 2);
        gr(U, {}), z(h, v);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), le(d);
}
oo(["input"]);
ie(kv, { data: {} }, [], [], !0);
var AC = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), DC = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), VC = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), HC = /* @__PURE__ */ ne('<div class="heading svelte-1wcsayx"><!> <!></div> <!> <!> <div class="setting-title svelte-1wcsayx">执行引擎</div> <div class="setting-item svelte-1wcsayx"><!></div> <div class="setting-title svelte-1wcsayx">执行代码</div> <div class="setting-item svelte-1wcsayx"><!></div> <div class="heading svelte-1wcsayx"><!> <!></div> <!>', 1);
const LC = {
  hash: "svelte-1wcsayx",
  code: ".heading.svelte-1wcsayx {display:flex;margin-bottom:10px;}.setting-title.svelte-1wcsayx {font-size:12px;color:var(--secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-1wcsayx {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Cv(t, e) {
  ae(e, !0), Je(t, LC);
  const n = g(e, "data", 7), r = /* @__PURE__ */ Ae(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]);
  $n(() => {
    n().engine || s(o, () => ({ engine: "qlexpress" }));
  });
  const o = ft(), { addParameter: i } = Pn(), { updateNodeData: s } = Ct(), a = [
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
  return cn(t, Be(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var d = AC();
        z(u, d);
      },
      children: (u, d) => {
        var h = HC(), p = Q(h), v = q(p);
        Ye(v, {
          level: 3,
          children: (I, A) => {
            Se();
            var D = ze("输入参数");
            z(I, D);
          },
          $$slots: { default: !0 }
        });
        var m = R(v, 2);
        We(m, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (I, A) => {
            var D = DC();
            z(I, D);
          },
          $$slots: { default: !0 }
        }), Z(p);
        var y = R(p, 2);
        Rt(y, {});
        var w = R(y, 2);
        Ye(w, {
          level: 3,
          mt: "10px",
          children: (I, A) => {
            Se();
            var D = ze("代码");
            z(I, D);
          },
          $$slots: { default: !0 }
        });
        var b = R(w, 4), k = q(b);
        {
          let I = /* @__PURE__ */ $(() => n().engine ? [n().engine] : ["qlexpress"]);
          Nt(k, {
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
        var P = R(b, 4), C = q(P);
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
        Z(P);
        var x = R(P, 2), N = q(x);
        Ye(N, {
          level: 3,
          mt: "10px",
          children: (I, A) => {
            Se();
            var D = ze("输出参数");
            z(I, D);
          },
          $$slots: { default: !0 }
        });
        var V = R(N, 2);
        We(V, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (I, A) => {
            var D = VC();
            z(I, D);
          },
          $$slots: { default: !0 }
        }), Z(x);
        var H = R(x, 2);
        gr(H, {}), z(u, h);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), le(l);
}
ie(Cv, { data: {} }, [], [], !0);
var IC = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>'), RC = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), BC = /* @__PURE__ */ ne('<div class="heading svelte-1lcrzpc"><!> <!></div> <!> <!> <div class="setting-item svelte-1lcrzpc"><!></div> <div class="heading svelte-1lcrzpc"><!></div> <!>', 1);
const KC = {
  hash: "svelte-1lcrzpc",
  code: ".heading.svelte-1lcrzpc {display:flex;margin-bottom:10px;}.setting-item.svelte-1lcrzpc {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function $v(t, e) {
  ae(e, !0), Je(t, KC);
  const n = g(e, "data", 7), r = /* @__PURE__ */ Ae(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = ft(), { addParameter: i } = Pn(), { updateNodeData: s } = Ct();
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
  return cn(t, Be(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = IC();
        z(l, u);
      },
      children: (l, u) => {
        var d = BC(), h = Q(d), p = q(h);
        Ye(p, {
          level: 3,
          children: (x, N) => {
            Se();
            var V = ze("输入参数");
            z(x, V);
          },
          $$slots: { default: !0 }
        });
        var v = R(p, 2);
        We(v, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (x, N) => {
            var V = RC();
            z(x, V);
          },
          $$slots: { default: !0 }
        }), Z(h);
        var m = R(h, 2);
        Rt(m, {});
        var y = R(m, 2);
        Ye(y, {
          level: 3,
          mt: "10px",
          mb: "10px",
          children: (x, N) => {
            Se();
            var V = ze("模板内容");
            z(x, V);
          },
          $$slots: { default: !0 }
        });
        var w = R(y, 2), b = q(w);
        {
          let x = /* @__PURE__ */ $(() => n().template || "");
          et(b, {
            rows: 10,
            placeholder: "请输入模板内容",
            style: "width: 100%",
            onchange: (N) => {
              s(o, () => ({ template: N.target.value }));
            },
            get value() {
              return c(x);
            }
          });
        }
        Z(w);
        var k = R(w, 2), P = q(k);
        Ye(P, {
          level: 3,
          mt: "10px",
          children: (x, N) => {
            Se();
            var V = ze("输出参数");
            z(x, V);
          },
          $$slots: { default: !0 }
        }), Z(k);
        var C = R(k, 2);
        gr(C, {}), z(l, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), le(a);
}
ie($v, { data: {} }, [], [], !0);
var FC = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), jC = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), ZC = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), WC = /* @__PURE__ */ ne('<!> <div class="radio-group svelte-19uflw6"><label class="svelte-19uflw6"><!>none</label> <label class="svelte-19uflw6"><!>form-data</label> <label class="svelte-19uflw6"><!>x-www-form-urlencoded</label> <label class="svelte-19uflw6"><!>json</label> <label class="svelte-19uflw6"><!>raw</label></div>', 1), qC = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), XC = /* @__PURE__ */ ne('<div class="heading svelte-19uflw6" style="padding-top: 10px"><!> <!></div> <!>', 1), YC = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), UC = /* @__PURE__ */ ne('<div class="heading svelte-19uflw6" style="padding-top: 10px"><!> <!></div> <!>', 1), GC = /* @__PURE__ */ ne('<div style="width: 100%"><!></div>'), JC = /* @__PURE__ */ ne('<div style="width: 100%"><!></div>'), QC = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), e$ = /* @__PURE__ */ ne('<div class="heading svelte-19uflw6"><!> <!></div> <!> <!> <div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-19uflw6"><!> <!></div> <!> <!> <!> <!> <!> <!> <div class="heading svelte-19uflw6"><!> <!></div> <!>', 1);
const t$ = {
  hash: "svelte-19uflw6",
  code: ".heading.svelte-19uflw6 {display:flex;margin-bottom:10px;}.radio-group.svelte-19uflw6 {display:flex;margin:10px 0;flex-wrap:wrap;}.radio-group.svelte-19uflw6 label:where(.svelte-19uflw6) {display:flex;font-size:14px;box-sizing:border-box;}"
};
function Sv(t, e) {
  ae(e, !0), Je(t, t$);
  const n = g(e, "data", 7), r = /* @__PURE__ */ Ae(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]);
  $n(() => {
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
  ], i = ft(), { addParameter: s } = Pn(), { updateNodeData: a } = Ct();
  var l = {
    get data() {
      return n();
    },
    set data(u) {
      n(u), f();
    }
  };
  return cn(t, Be(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var d = FC();
        z(u, d);
      },
      children: (u, d) => {
        var h = e$(), p = Q(h), v = q(p);
        Ye(v, {
          level: 3,
          children: (j, W) => {
            Se();
            var J = ze("输入参数");
            z(j, J);
          },
          $$slots: { default: !0 }
        });
        var m = R(v, 2);
        We(m, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i);
          },
          children: (j, W) => {
            var J = jC();
            z(j, J);
          },
          $$slots: { default: !0 }
        }), Z(p);
        var y = R(p, 2);
        Rt(y, {});
        var w = R(y, 2);
        Ye(w, {
          level: 3,
          mt: "10px",
          children: (j, W) => {
            Se();
            var J = ze("URL 地址");
            z(j, J);
          },
          $$slots: { default: !0 }
        });
        var b = R(w, 2), k = q(b), P = q(k);
        {
          let j = /* @__PURE__ */ $(() => n().method ? [n().method] : ["get"]);
          Nt(P, {
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
              return c(j);
            }
          });
        }
        Z(k);
        var C = R(k, 2), x = q(C);
        {
          let j = /* @__PURE__ */ $(() => n().url || "");
          vt(x, {
            placeholder: "请输入url",
            style: "width: 100%",
            onchange: (W) => {
              a(i, () => ({ url: W.target.value }));
            },
            get value() {
              return c(j);
            }
          });
        }
        Z(C), Z(b);
        var N = R(b, 2), V = q(N);
        Ye(V, {
          level: 3,
          children: (j, W) => {
            Se();
            var J = ze("Http 头信息");
            z(j, J);
          },
          $$slots: { default: !0 }
        });
        var H = R(V, 2);
        We(H, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "headers");
          },
          children: (j, W) => {
            var J = ZC();
            z(j, J);
          },
          $$slots: { default: !0 }
        }), Z(N);
        var I = R(N, 2);
        Rt(I, { dataKeyName: "headers" });
        var A = R(I, 2);
        {
          var D = (j) => {
            var W = WC(), J = Q(W);
            Ye(J, {
              level: 3,
              mt: "10px",
              children: (xe, De) => {
                Se();
                var G = ze("Body");
                z(xe, G);
              },
              $$slots: { default: !0 }
            });
            var re = R(J, 2), L = q(re), te = q(L);
            {
              let xe = /* @__PURE__ */ $(() => !n().bodyType || n().bodyType === "");
              vt(te, {
                type: "radio",
                value: "",
                get checked() {
                  return c(xe);
                },
                onchange: (De) => {
                  De.target?.checked && a(i, { bodyType: "" });
                }
              });
            }
            Se(), Z(L);
            var fe = R(L, 2), ue = q(fe);
            {
              let xe = /* @__PURE__ */ $(() => n().bodyType === "form-data");
              vt(ue, {
                type: "radio",
                value: "form-data",
                get checked() {
                  return c(xe);
                },
                onchange: (De) => {
                  De.target?.checked && a(i, { bodyType: "form-data" });
                }
              });
            }
            Se(), Z(fe);
            var oe = R(fe, 2), ce = q(oe);
            {
              let xe = /* @__PURE__ */ $(() => n().bodyType === "x-www-form-urlencoded");
              vt(ce, {
                type: "radio",
                value: "x-www-form-urlencoded",
                get checked() {
                  return c(xe);
                },
                onchange: (De) => {
                  De.target?.checked && a(i, { bodyType: "x-www-form-urlencoded" });
                }
              });
            }
            Se(), Z(oe);
            var ve = R(oe, 2), ke = q(ve);
            {
              let xe = /* @__PURE__ */ $(() => n().bodyType === "json");
              vt(ke, {
                type: "radio",
                value: "json",
                get checked() {
                  return c(xe);
                },
                onchange: (De) => {
                  De.target?.checked && a(i, { bodyType: "json" });
                }
              });
            }
            Se(), Z(ve);
            var we = R(ve, 2), he = q(we);
            {
              let xe = /* @__PURE__ */ $(() => n().bodyType === "raw");
              vt(he, {
                type: "radio",
                value: "raw",
                get checked() {
                  return c(xe);
                },
                onchange: (De) => {
                  De.target?.checked && a(i, { bodyType: "raw" });
                }
              });
            }
            Se(), Z(we), Z(re), z(j, W);
          };
          se(A, (j) => {
            (n().method === "post" || n().method === "put" || n().method === "delete" || n().method === "patch") && j(D);
          });
        }
        var _ = R(A, 2);
        {
          var T = (j) => {
            var W = XC(), J = Q(W), re = q(J);
            Ye(re, {
              level: 3,
              children: (fe, ue) => {
                Se();
                var oe = ze("参数");
                z(fe, oe);
              },
              $$slots: { default: !0 }
            });
            var L = R(re, 2);
            We(L, {
              size: "icon-xs",
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formData");
              },
              children: (fe, ue) => {
                var oe = qC();
                z(fe, oe);
              },
              $$slots: { default: !0 }
            }), Z(J);
            var te = R(J, 2);
            Rt(te, { dataKeyName: "formData" }), z(j, W);
          };
          se(_, (j) => {
            n().bodyType === "form-data" && j(T);
          });
        }
        var S = R(_, 2);
        {
          var O = (j) => {
            var W = UC(), J = Q(W), re = q(J);
            Ye(re, {
              level: 3,
              children: (fe, ue) => {
                Se();
                var oe = ze("Body 参数");
                z(fe, oe);
              },
              $$slots: { default: !0 }
            });
            var L = R(re, 2);
            We(L, {
              size: "icon-xs",
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formUrlencoded");
              },
              children: (fe, ue) => {
                var oe = YC();
                z(fe, oe);
              },
              $$slots: { default: !0 }
            }), Z(J);
            var te = R(J, 2);
            Rt(te, { dataKeyName: "formUrlencoded" }), z(j, W);
          };
          se(S, (j) => {
            n().bodyType === "x-www-form-urlencoded" && j(O);
          });
        }
        var M = R(S, 2);
        {
          var B = (j) => {
            var W = GC(), J = q(W);
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
            }), Z(W), z(j, W);
          };
          se(M, (j) => {
            n().bodyType === "json" && j(B);
          });
        }
        var X = R(M, 2);
        {
          var U = (j) => {
            var W = JC(), J = q(W);
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
            }), Z(W), z(j, W);
          };
          se(X, (j) => {
            n().bodyType === "raw" && j(U);
          });
        }
        var E = R(X, 2), Y = q(E);
        Ye(Y, {
          level: 3,
          mt: "10px",
          children: (j, W) => {
            Se();
            var J = ze("输出参数");
            z(j, J);
          },
          $$slots: { default: !0 }
        });
        var ee = R(Y, 2);
        We(ee, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "outputDefs");
          },
          children: (j, W) => {
            var J = QC();
            z(j, J);
          },
          $$slots: { default: !0 }
        }), Z(E);
        var K = R(E, 2);
        gr(K, {}), z(u, h);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), le(l);
}
ie(Sv, { data: {} }, [], [], !0);
var n$ = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>'), r$ = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), o$ = /* @__PURE__ */ ne('<div class="heading svelte-ddi5i"><!> <!></div> <!> <!> <div class="setting-title svelte-ddi5i">知识库</div> <div class="setting-item svelte-ddi5i"><!></div> <div class="setting-title svelte-ddi5i">关键字</div> <div class="setting-item svelte-ddi5i"><!></div> <div class="setting-title svelte-ddi5i">获取数据量</div> <div class="setting-item svelte-ddi5i"><!></div> <div class="heading svelte-ddi5i"><!></div> <!>', 1);
const i$ = {
  hash: "svelte-ddi5i",
  code: ".heading.svelte-ddi5i {display:flex;margin-bottom:10px;}.setting-title.svelte-ddi5i {font-size:12px;color:var(--secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-ddi5i {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function _v(t, e) {
  ae(e, !0), Je(t, i$);
  const n = g(e, "data", 7), r = /* @__PURE__ */ Ae(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = ft(), { addParameter: i } = Pn(), s = Or();
  let a = /* @__PURE__ */ me(ht([]));
  $n(async () => {
    const d = await s.provider?.knowledge?.();
    c(a).push(...d || []);
  });
  const { updateNodeData: l } = Ct();
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
  return cn(t, Be(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (d) => {
        var h = n$();
        z(d, h);
      },
      children: (d, h) => {
        var p = o$(), v = Q(p), m = q(v);
        Ye(m, {
          level: 3,
          children: (D, _) => {
            Se();
            var T = ze("输入参数");
            z(D, T);
          },
          $$slots: { default: !0 }
        });
        var y = R(m, 2);
        We(y, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (D, _) => {
            var T = r$();
            z(D, T);
          },
          $$slots: { default: !0 }
        }), Z(v);
        var w = R(v, 2);
        Rt(w, {});
        var b = R(w, 2);
        Ye(b, {
          level: 3,
          mt: "10px",
          children: (D, _) => {
            Se();
            var T = ze("知识库设置");
            z(D, T);
          },
          $$slots: { default: !0 }
        });
        var k = R(b, 4), P = q(k);
        {
          let D = /* @__PURE__ */ $(() => n().knowledgeId ? [n().knowledgeId] : []);
          Nt(P, {
            get items() {
              return c(a);
            },
            style: "width: 100%",
            placeholder: "请选择知识库",
            onSelect: (_) => {
              const T = _.value;
              l(o, () => ({ knowledgeId: T }));
            },
            get value() {
              return c(D);
            }
          });
        }
        Z(k);
        var C = R(k, 4), x = q(C);
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
        var N = R(C, 4), V = q(N);
        {
          let D = /* @__PURE__ */ $(() => n().limit || "");
          vt(V, {
            placeholder: "搜索的数据条数",
            style: "width: 100%",
            onchange: (_) => {
              const T = _.target.value;
              l(o, () => ({ limit: T }));
            },
            get value() {
              return c(D);
            }
          });
        }
        Z(N);
        var H = R(N, 2), I = q(H);
        Ye(I, {
          level: 3,
          mt: "10px",
          children: (D, _) => {
            Se();
            var T = ze("输出参数");
            z(D, T);
          },
          $$slots: { default: !0 }
        }), Z(H);
        var A = R(H, 2);
        gr(A, {}), z(d, p);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), le(u);
}
ie(_v, { data: {} }, [], [], !0);
var s$ = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>'), a$ = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), l$ = /* @__PURE__ */ ne('<div class="heading svelte-1qblm04"><!> <!></div> <!> <!> <div class="setting-title svelte-1qblm04">搜索引擎</div> <div class="setting-item svelte-1qblm04"><!></div> <div class="setting-title svelte-1qblm04">关键字</div> <div class="setting-item svelte-1qblm04"><!></div> <div class="setting-title svelte-1qblm04">搜索数据量</div> <div class="setting-item svelte-1qblm04"><!></div> <div class="heading svelte-1qblm04"><!></div> <!>', 1);
const u$ = {
  hash: "svelte-1qblm04",
  code: ".heading.svelte-1qblm04 {display:flex;margin-bottom:10px;}.setting-title.svelte-1qblm04 {font-size:12px;color:var(--secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-1qblm04 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Pv(t, e) {
  ae(e, !0), Je(t, u$);
  const n = g(e, "data", 7), r = /* @__PURE__ */ Ae(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = ft(), { addParameter: i } = Pn(), s = Or();
  let a = /* @__PURE__ */ me(ht([]));
  $n(async () => {
    const d = await s.provider?.searchEngine?.();
    c(a).push(...d || []);
  });
  const { updateNodeData: l } = Ct();
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
  return cn(t, Be(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (d) => {
        var h = s$();
        z(d, h);
      },
      children: (d, h) => {
        var p = l$(), v = Q(p), m = q(v);
        Ye(m, {
          level: 3,
          children: (D, _) => {
            Se();
            var T = ze("输入参数");
            z(D, T);
          },
          $$slots: { default: !0 }
        });
        var y = R(m, 2);
        We(y, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (D, _) => {
            var T = a$();
            z(D, T);
          },
          $$slots: { default: !0 }
        }), Z(v);
        var w = R(v, 2);
        Rt(w, {});
        var b = R(w, 2);
        Ye(b, {
          level: 3,
          mt: "10px",
          children: (D, _) => {
            Se();
            var T = ze("搜索引擎设置");
            z(D, T);
          },
          $$slots: { default: !0 }
        });
        var k = R(b, 4), P = q(k);
        {
          let D = /* @__PURE__ */ $(() => n().engine ? [n().engine] : []);
          Nt(P, {
            get items() {
              return c(a);
            },
            style: "width: 100%",
            placeholder: "请选择搜索引擎",
            onSelect: (_) => {
              const T = _.value;
              l(o, () => ({ engine: T }));
            },
            get value() {
              return c(D);
            }
          });
        }
        Z(k);
        var C = R(k, 4), x = q(C);
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
        var N = R(C, 4), V = q(N);
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
        }), Z(N);
        var H = R(N, 2), I = q(H);
        Ye(I, {
          level: 3,
          mt: "10px",
          children: (D, _) => {
            Se();
            var T = ze("输出参数");
            z(D, T);
          },
          $$slots: { default: !0 }
        }), Z(H);
        var A = R(H, 2);
        gr(A, {}), z(d, p);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), le(u);
}
ie(Pv, { data: {} }, [], [], !0);
var c$ = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>'), d$ = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), h$ = /* @__PURE__ */ ne('<div class="heading svelte-1o34e8c"><!></div> <!> <div class="heading svelte-1o34e8c"><!> <!></div> <!>', 1);
const p$ = {
  hash: "svelte-1o34e8c",
  code: ".heading.svelte-1o34e8c {display:flex;margin:10px 0;align-items:center;}.loop_handle_wrapper::after {content:'循环体';width:100px;height:20px;background:var(--primary);color:var(--primary-foreground);display:flex;justify-content:center;align-items:center;}"
};
function Ov(t, e) {
  ae(e, !0), Je(t, p$);
  const n = g(e, "data", 7), r = /* @__PURE__ */ Ae(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = ft(), { addParameter: i } = Pn();
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
  return cn(t, Be(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (a) => {
        var l = c$();
        z(a, l);
      },
      handle: (a) => {
        Sr(a, {
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
        var u = h$(), d = Q(u), h = q(d);
        Ye(h, {
          level: 3,
          children: (b, k) => {
            Se();
            var P = ze("循环变量");
            z(b, P);
          },
          $$slots: { default: !0 }
        }), Z(d);
        var p = R(d, 2);
        Rt(p, { dataKeyName: "loopVars" });
        var v = R(p, 2), m = q(v);
        Ye(m, {
          level: 3,
          children: (b, k) => {
            Se();
            var P = ze("输出参数");
            z(b, P);
          },
          $$slots: { default: !0 }
        });
        var y = R(m, 2);
        We(y, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (b, k) => {
            var P = d$();
            z(b, P);
          },
          $$slots: { default: !0 }
        }), Z(v);
        var w = R(v, 2);
        Rt(w, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs",
          useChildrenOnly: !0
        }), z(a, u);
      },
      $$slots: { icon: !0, handle: !0, default: !0 }
    }
  )), le(s);
}
ie(Ov, { data: {} }, [], [], !0);
var f$ = /* @__PURE__ */ ne('<div class="input-more-setting svelte-5x0hls"><div class="input-more-item svelte-5x0hls">数据内容： <!></div> <div class="input-more-item svelte-5x0hls">确认方式： <!></div> <div class="input-more-item svelte-5x0hls">数据标题： <!></div> <div class="input-more-item svelte-5x0hls">数据描述： <!></div>   <div class="input-more-item svelte-5x0hls"><!></div></div>'), g$ = /* @__PURE__ */ ne('<div class="input-item svelte-5x0hls"><!></div> <div class="input-item svelte-5x0hls"><!></div> <div class="input-item svelte-5x0hls"><!></div>', 1);
const v$ = {
  hash: "svelte-5x0hls",
  code: ".input-item.svelte-5x0hls {display:flex;align-items:center;}.input-more-setting.svelte-5x0hls {display:flex;flex-direction:column;gap:10px;padding:10px;background:var(--background);border:1px solid var(--border);border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-5x0hls .input-more-item:where(.svelte-5x0hls) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:var(--muted-foreground);}"
};
function Nv(t, e) {
  ae(e, !0), Je(t, v$);
  const n = g(e, "parameter", 7), r = g(e, "index", 7), o = g(e, "dataKeyName", 7), i = g(e, "useChildrenOnly", 7);
  let s = ft(), a = fr(s), l = /* @__PURE__ */ $(() => ({
    ...n(),
    ...a?.current?.data?.[o()][r()]
  }));
  const { updateNodeData: u } = Ct(), d = (_, T) => {
    u(s, (S) => {
      let O = S.data?.[o()];
      return O[r()] = { ...O[r()], [_]: T }, { [o()]: O };
    });
  }, h = (_, T) => {
    const S = T.target.value;
    d(_, S);
  }, p = (_) => {
    const T = _.value;
    d("ref", T);
  }, v = (_) => {
    const T = _.value;
    d("formType", T);
  }, m = (_) => {
    const T = _.value;
    d("contentType", T);
  };
  let y;
  const w = () => {
    u(s, (_) => {
      let T = _.data?.[o()];
      return T.splice(r(), 1), { [o()]: [...T] };
    }), y?.hide();
  };
  let b = yv(i());
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
  }, P = g$(), C = Q(P), x = q(C);
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
      oninput: (T) => h("name", T)
    });
  }
  Z(C);
  var N = R(C, 2), V = q(N);
  {
    var H = (_) => {
      vt(_, {
        get value() {
          return c(l).value;
        },
        placeholder: "请输入参数值",
        oninput: (T) => h("value", T)
      });
    }, I = (_) => {
      var T = de(), S = Q(T);
      {
        var O = (M) => {
          {
            let B = /* @__PURE__ */ $(() => [c(l).ref]);
            Nt(M, {
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
          (M) => {
            c(l).refType !== "input" && M(O);
          },
          !0
        );
      }
      z(_, T);
    };
    se(V, (_) => {
      c(l).refType === "fixed" ? _(H) : _(I, !1);
    });
  }
  Z(N);
  var A = R(N, 2), D = q(A);
  return Mt(
    so(D, {
      placement: "bottom",
      floating: (_) => {
        var T = f$(), S = q(T), O = R(q(S));
        {
          let j = /* @__PURE__ */ $(() => c(l).contentType ? [c(l).contentType] : []);
          Nt(O, {
            get items() {
              return ku;
            },
            style: "width: 100%",
            defaultValue: ["text"],
            get value() {
              return c(j);
            },
            onSelect: m
          });
        }
        Z(S);
        var M = R(S, 2), B = R(q(M));
        {
          let j = /* @__PURE__ */ $(() => c(l).formType ? [c(l).formType] : []);
          Nt(B, {
            get items() {
              return Ox;
            },
            style: "width: 100%",
            defaultValue: ["single"],
            get value() {
              return c(j);
            },
            onSelect: v
          });
        }
        Z(M);
        var X = R(M, 2), U = R(q(X));
        et(U, {
          rows: 1,
          style: "width: 100%;",
          onchange: (j) => {
            h("formLabel", j);
          },
          get value() {
            return c(l).formLabel;
          }
        }), Z(X);
        var E = R(X, 2), Y = R(q(E));
        et(Y, {
          rows: 2,
          style: "width: 100%;",
          onchange: (j) => {
            h("formDescription", j);
          },
          get value() {
            return c(l).formDescription;
          }
        }), Z(E);
        var ee = R(E, 2), K = q(ee);
        We(K, {
          variant: "destructive",
          onclick: w,
          children: (j, W) => {
            Se();
            var J = ze("删除");
            z(j, J);
          },
          $$slots: { default: !0 }
        }), Z(ee), Z(T), z(_, T);
      },
      children: (_, T) => {
        Di(_, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (_) => y = _,
    () => y
  ), Z(A), z(t, P), le(k);
}
ie(
  Nv,
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
var m$ = /* @__PURE__ */ ne('<div class="input-header svelte-1fllp9b">参数名称</div> <div class="input-header svelte-1fllp9b">参数值</div> <div class="input-header svelte-1fllp9b"></div>', 1), y$ = /* @__PURE__ */ ne('<div class="none-params svelte-1fllp9b"> </div>'), w$ = /* @__PURE__ */ ne('<div class="input-container svelte-1fllp9b"><!> <!></div>');
const b$ = {
  hash: "svelte-1fllp9b",
  code: `.input-container.svelte-1fllp9b {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1fllp9b .none-params:where(.svelte-1fllp9b) {font-size:12px;background:var(--secondary);height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1fllp9b .input-header:where(.svelte-1fllp9b) {font-size:12px;color:var(--muted-foreground);}`
};
function Ev(t, e) {
  ae(e, !0), Je(t, b$);
  const n = g(e, "noneParameterText", 7, "无确认数据"), r = g(e, "dataKeyName", 7, "parameters"), o = g(e, "useChildrenOnly", 7);
  let i = ft(), s = fr(i), a = /* @__PURE__ */ $(() => [...s?.current?.data?.[r()] || []]);
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
  }, u = w$(), d = q(u);
  {
    var h = (v) => {
      var m = m$();
      Se(4), z(v, m);
    };
    se(d, (v) => {
      c(a).length !== 0 && v(h);
    });
  }
  var p = R(d, 2);
  return kt(
    p,
    19,
    () => c(a),
    (v) => v.id,
    (v, m, y) => {
      Nv(v, {
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
      var m = y$(), y = q(m, !0);
      Z(m), Ne(() => nt(y, n())), z(v, m);
    }
  ), Z(u), z(t, u), le(l);
}
ie(Ev, { noneParameterText: {}, dataKeyName: {}, useChildrenOnly: {} }, [], [], !0);
const Ml = (t, e) => {
  if (t === e) return !0;
  if (typeof t != "object" || t === null || typeof e != "object" || e === null)
    return !1;
  const n = Array.isArray(t), r = Array.isArray(e);
  if (n !== r) return !1;
  if (n && r) {
    if (t.length !== e.length) return !1;
    for (let o = 0; o < t.length; o++)
      if (!Ml(t[o], e[o])) return !1;
    return !0;
  } else {
    const o = Object.keys(t), i = Object.keys(e);
    if (o.length !== i.length) return !1;
    for (const s of o)
      if (!(s in e) || !Ml(t[s], e[s])) return !1;
    return !0;
  }
};
var x$ = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), k$ = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), C$ = /* @__PURE__ */ ne('<div class="heading svelte-8iukvu"><!> <!></div> <!> <!> <div class="setting-title svelte-8iukvu">消息内容</div> <div class="setting-item svelte-8iukvu"><!></div> <div class="heading svelte-8iukvu"><!></div> <!>', 1);
const $$ = {
  hash: "svelte-8iukvu",
  code: ".heading.svelte-8iukvu {display:flex;margin-bottom:10px;}.setting-title.svelte-8iukvu {font-size:12px;color:var(--secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-8iukvu {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function zv(t, e) {
  ae(e, !0), Je(t, $$);
  const n = g(e, "data", 7), r = /* @__PURE__ */ Ae(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = ft(), { addParameter: i } = Pn(), { updateNodeData: s } = Ct();
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
      Ml(l, n().outputDefs) || s(o, () => ({ outputDefs: l }));
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
  return cn(t, Be(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = x$();
        z(l, u);
      },
      children: (l, u) => {
        var d = C$(), h = Q(d), p = q(h);
        Ye(p, {
          level: 3,
          children: (x, N) => {
            Se();
            var V = ze("确认数据");
            z(x, V);
          },
          $$slots: { default: !0 }
        });
        var v = R(p, 2);
        We(v, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "confirms");
          },
          children: (x, N) => {
            var V = k$();
            z(x, V);
          },
          $$slots: { default: !0 }
        }), Z(h);
        var m = R(h, 2);
        Ev(m, { dataKeyName: "confirms", noneParameterText: "无确认数据" });
        var y = R(m, 2);
        Ye(y, {
          level: 3,
          mt: "10px",
          children: (x, N) => {
            Se();
            var V = ze("确认消息");
            z(x, V);
          },
          $$slots: { default: !0 }
        });
        var w = R(y, 4), b = q(w);
        {
          let x = /* @__PURE__ */ $(() => n().message || "");
          et(b, {
            rows: 5,
            placeholder: "请输入用户需要确认的消息内容",
            style: "width: 100%",
            onchange: (N) => {
              s(o, () => ({ message: N.target.value }));
            },
            get value() {
              return c(x);
            }
          });
        }
        Z(w);
        var k = R(w, 2), P = q(k);
        Ye(P, {
          level: 3,
          mt: "10px",
          children: (x, N) => {
            Se();
            var V = ze("输出参数");
            z(x, V);
          },
          $$slots: { default: !0 }
        }), Z(k);
        var C = R(k, 2);
        gr(C, { placeholder: "" }), z(l, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), le(a);
}
ie(zv, { data: {} }, [], [], !0);
const S$ = {
  startNode: gv,
  codeNode: Cv,
  confirmNode: zv,
  llmNode: kv,
  templateNode: $v,
  httpNode: Sv,
  knowledgeNode: _v,
  searchEngineNode: Pv,
  loopNode: Ov,
  endNode: bv
};
var _$ = /* @__PURE__ */ ne("<!> ", 1);
function Tl(t, e) {
  ae(e, !0);
  const n = g(e, "icon", 7), r = g(e, "title", 7), o = g(e, "type", 7), i = g(e, "description", 7), s = g(e, "extra", 7), a = Ct(), l = (h) => {
    if (!h.dataTransfer)
      return null;
    const p = {
      type: o(),
      data: { title: r(), description: i(), ...s() }
    };
    h.dataTransfer.setData("application/tinyflow", JSON.stringify(p)), h.dataTransfer.effectAllowed = "move";
  }, u = () => {
    const h = window.innerWidth, p = window.innerHeight, v = a.screenToFlowPosition({ x: h / 2, y: p / 2 }), m = {
      id: `node_${Kn()}`,
      type: o(),
      position: v,
      data: { title: r(), description: i(), ...s() }
    };
    Ze.addNode(m), Ze.selectNodeOnly(m.id);
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
  return We(t, {
    draggable: !0,
    ondragstart: l,
    onclick: u,
    get "data-node-type"() {
      return o();
    },
    children: (h, p) => {
      var v = _$(), m = Q(v);
      sa(m, n);
      var y = R(m);
      Ne(() => nt(y, ` ${r() ?? ""}`)), z(h, v);
    },
    $$slots: { default: !0 }
  }), le(d);
}
ie(Tl, { icon: {}, title: {}, type: {}, description: {}, extra: {} }, [], [], !0);
var P$ = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), O$ = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), N$ = /* @__PURE__ */ ne('<div><div class="tf-toolbar-container"><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"></div></div></div> <!></div>');
function Mv(t, e) {
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
  ], s = [], a = Or(), l = a.customNodes;
  if (l) {
    const b = Object.keys(l).sort((k, P) => (l[k].sortNo || 0) - (l[P].sortNo || 0));
    for (let k of b)
      l[k].group === "base" ? o.push({ type: k, ...l[k] }) : s.push({
        icon: l[k].icon,
        title: l[k].title,
        type: k
      });
    o.sort((k, P) => (k.sortNo || 0) - (P.sortNo || 0));
  }
  if (a.hiddenNodes) {
    const b = typeof a.hiddenNodes == "function" ? a.hiddenNodes() : a.hiddenNodes;
    if (Array.isArray(b)) {
      for (let k of b)
        for (let P = 0; P < o.length; P++)
          if (o[P].type === k) {
            o.splice(P, 1);
            break;
          }
    }
  }
  var u = N$(), d = q(u), h = q(d), p = q(h);
  dv(p, {
    style: "width: 100%",
    get items() {
      return i;
    },
    onChange: (b) => {
      F(n, b.value.toString(), !0);
    }
  }), Z(h);
  var v = R(h, 2), m = q(v);
  kt(m, 21, () => o, Xr, (b, k) => {
    Tl(b, Be(() => c(k)));
  }), Z(m);
  var y = R(m, 2);
  kt(y, 21, () => s, Xr, (b, k) => {
    Tl(b, Be(() => c(k)));
  }), Z(y), Z(v), Z(d);
  var w = R(d, 2);
  We(w, {
    size: "icon",
    variant: "outline",
    onclick: () => {
      F(r, c(r) ? "" : "show", !0);
    },
    children: (b, k) => {
      var P = de(), C = Q(P);
      {
        var x = (V) => {
          var H = P$();
          z(V, H);
        }, N = (V) => {
          var H = O$();
          z(V, H);
        };
        se(C, (V) => {
          c(r) === "show" ? V(x) : V(N, !1);
        });
      }
      z(b, P);
    },
    $$slots: { default: !0 }
  }), Z(u), Ne(() => {
    Yt(u, 1, `tf-toolbar ${c(r) ?? ""}`), zt(m, `display: ${c(n) === "base" ? "flex" : "none"}`), zt(y, `display: ${c(n) !== "base" ? "flex" : "none"}`);
  }), z(t, u), le();
}
ie(Mv, {}, [], [], !0);
const E$ = () => ({ getNode: (t) => Ze.getNode(t) }), z$ = () => ({ ensureParentInNodesBefore: (t, e) => {
  Ze.updateNodes((n) => {
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
} }), M$ = () => ({ getEdgesByTarget: (t) => Ze.getEdges().filter((e) => e.target === t) });
var T$ = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), A$ = /* @__PURE__ */ ne('<div class="heading svelte-qt4m0r"><!> <!></div> <!>', 1), D$ = /* @__PURE__ */ ne('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), V$ = /* @__PURE__ */ ne('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), H$ = /* @__PURE__ */ ne('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><div class="slider-container svelte-qt4m0r"><span class="svelte-qt4m0r"> </span> <input/></div></div>', 1), L$ = /* @__PURE__ */ ne('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), I$ = /* @__PURE__ */ ne('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), R$ = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), B$ = /* @__PURE__ */ ne('<div class="heading svelte-qt4m0r"><!> <!></div> <!>', 1), K$ = /* @__PURE__ */ ne("<!> <!> <div></div> <!>", 1);
const F$ = {
  hash: "svelte-qt4m0r",
  code: `.heading.svelte-qt4m0r {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-qt4m0r {font-size:12px;color:var(--secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-qt4m0r {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-qt4m0r {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-qt4m0r span:where(.svelte-qt4m0r) {font-size:12px;color:var(--muted-foreground);display:flex;justify-content:space-between;align-items:center;}input[type='range'].svelte-qt4m0r {width:100%;height:4px;background:var(--muted);border-radius:2px;outline:none;-webkit-appearance:none;}input[type='range'].svelte-qt4m0r::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:var(--primary);border-radius:50%;cursor:pointer;}`
};
function Tv(t, e) {
  ae(e, !0), Je(t, F$);
  const n = g(e, "data", 7), r = /* @__PURE__ */ Ae(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = ft(), { addParameter: i } = Pn(), s = Ct(), { updateNodeData: a } = s, l = (w) => {
    a(o, w);
  }, u = (w, b) => {
    l({ [w]: b.target?.value });
  }, d = { ...r, id: o, data: n() }, h = document.createElement("div"), p = Or().customNodes[e.type];
  p.render?.(h, d, s);
  const v = p.forms;
  let m;
  Ie(() => {
    n().expand && m && m.append(h);
  }), Ie(() => {
    n() && p.onUpdate?.(h, { ...d, data: n() });
  }), Ie(() => {
    !n().parameters && p.parameters && l({
      parameters: fi(JSON.parse(JSON.stringify(p.parameters)))
    });
  }), Ie(() => {
    !n().outputDefs && p.outputDefs && l({
      outputDefs: fi(JSON.parse(JSON.stringify(p.outputDefs)))
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
      var P = de(), C = Q(P);
      sa(C, () => p.icon), z(k, P);
    };
    let b = /* @__PURE__ */ $(() => ({ ...n(), description: p.description }));
    cn(t, Be(
      {
        get data() {
          return c(b);
        }
      },
      () => r,
      {
        icon: w,
        children: (k, P) => {
          var C = K$(), x = Q(C);
          {
            var N = (_) => {
              var T = A$(), S = Q(T), O = q(S);
              Ye(O, {
                level: 3,
                children: (U, E) => {
                  Se();
                  var Y = ze("输入参数");
                  z(U, Y);
                },
                $$slots: { default: !0 }
              });
              var M = R(O, 2);
              {
                var B = (U) => {
                  We(U, {
                    size: "icon-xs",
                    class: "input-btn-more",
                    style: "margin-left: auto",
                    onclick: () => {
                      i(o);
                    },
                    children: (E, Y) => {
                      var ee = T$();
                      z(E, ee);
                    },
                    $$slots: { default: !0 }
                  });
                };
                se(M, (U) => {
                  p.parametersAddEnable !== !1 && U(B);
                });
              }
              Z(S);
              var X = R(S, 2);
              Rt(X, {}), z(_, T);
            };
            se(x, (_) => {
              p.parametersEnable !== !1 && _(N);
            });
          }
          var V = R(x, 2);
          {
            var H = (_) => {
              var T = de(), S = Q(T);
              kt(S, 17, () => v, Xr, (O, M) => {
                var B = de(), X = Q(B);
                {
                  var U = (Y) => {
                    var ee = D$(), K = Q(ee), j = q(K, !0);
                    Z(K);
                    var W = R(K, 2), J = q(W);
                    {
                      let re = /* @__PURE__ */ $(() => n()[c(M).name] || c(M).defaultValue);
                      vt(J, Be(
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
                          onchange: (L) => {
                            u(c(M).name, L);
                          }
                        }
                      ));
                    }
                    Z(W), Ne(() => nt(j, c(M).label)), z(Y, ee);
                  }, E = (Y) => {
                    var ee = de(), K = Q(ee);
                    {
                      var j = (J) => {
                        var re = V$(), L = Q(re), te = q(L, !0);
                        Z(L);
                        var fe = R(L, 2), ue = q(fe);
                        {
                          let oe = /* @__PURE__ */ $(() => n()[c(M).name] || c(M).defaultValue);
                          et(ue, Be(
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
                              onchange: (ce) => {
                                u(c(M).name, ce);
                              }
                            }
                          ));
                        }
                        Z(fe), Ne(() => nt(te, c(M).label)), z(J, re);
                      }, W = (J) => {
                        var re = de(), L = Q(re);
                        {
                          var te = (ue) => {
                            var oe = H$(), ce = Q(oe), ve = q(ce, !0);
                            Z(ce);
                            var ke = R(ce, 2), we = q(ke), he = q(we), xe = q(he);
                            Z(he);
                            var De = R(he, 2), G = (Te) => l({ [c(M).name]: parseFloat(Te.target.value) });
                            Ge(
                              De,
                              () => ({
                                class: "nodrag",
                                type: "range",
                                ...c(M).attrs,
                                value: n()[c(M).name] ?? c(M).defaultValue,
                                oninput: G
                              }),
                              void 0,
                              void 0,
                              void 0,
                              "svelte-qt4m0r",
                              !0
                            ), Z(we), Z(ke), Ne(() => {
                              nt(ve, c(M).label), nt(xe, `${c(M).description ?? ""}: ${n()[c(M).name] ?? c(M).defaultValue ?? ""}`);
                            }), z(ue, oe);
                          }, fe = (ue) => {
                            var oe = de(), ce = Q(oe);
                            {
                              var ve = (we) => {
                                var he = L$(), xe = Q(he), De = q(xe, !0);
                                Z(xe);
                                var G = R(xe, 2), Te = q(G);
                                {
                                  let Ve = /* @__PURE__ */ $(() => c(M).options || []), Re = /* @__PURE__ */ $(() => n()[c(M).name] ? [n()[c(M).name]] : [c(M).defaultValue]);
                                  Nt(Te, {
                                    get items() {
                                      return c(Ve);
                                    },
                                    style: "width: 100%",
                                    get placeholder() {
                                      return c(M).placeholder;
                                    },
                                    onSelect: (He) => {
                                      const qe = He.value;
                                      l({ [c(M).name]: qe });
                                    },
                                    get value() {
                                      return c(Re);
                                    }
                                  });
                                }
                                Z(G), Ne(() => nt(De, c(M).label)), z(we, he);
                              }, ke = (we) => {
                                var he = de(), xe = Q(he);
                                {
                                  var De = (Te) => {
                                    var Ve = I$(), Re = Q(Ve), He = q(Re, !0);
                                    Z(Re);
                                    var qe = R(Re, 2), gt = q(qe);
                                    {
                                      let Pt = /* @__PURE__ */ $(() => c(M).chosen?.buttonText);
                                      cv(gt, {
                                        style: "width: 100%",
                                        get placeholder() {
                                          return c(M).placeholder;
                                        },
                                        get buttonText() {
                                          return c(Pt);
                                        },
                                        onChosen: (tt, ge, Ee) => {
                                          c(M).chosen?.onChosen?.(l, tt, ge, Ee);
                                        },
                                        get value() {
                                          return n()[c(M).chosen?.valueDataKey || ""];
                                        },
                                        get label() {
                                          return n()[c(M).chosen?.labelDataKey || ""];
                                        }
                                      });
                                    }
                                    Z(qe), Ne(() => nt(He, c(M).label)), z(Te, Ve);
                                  }, G = (Te) => {
                                    var Ve = de(), Re = Q(Ve);
                                    {
                                      var He = (qe) => {
                                        Ye(qe, Be({ level: 3, mt: "10px" }, () => c(M).attrs, {
                                          children: (gt, Pt) => {
                                            Se();
                                            var tt = ze();
                                            Ne(() => nt(tt, c(M).label)), z(gt, tt);
                                          },
                                          $$slots: { default: !0 }
                                        }));
                                      };
                                      se(
                                        Re,
                                        (qe) => {
                                          c(M).type === "heading" && qe(He);
                                        },
                                        !0
                                      );
                                    }
                                    z(Te, Ve);
                                  };
                                  se(
                                    xe,
                                    (Te) => {
                                      c(M).type === "chosen" ? Te(De) : Te(G, !1);
                                    },
                                    !0
                                  );
                                }
                                z(we, he);
                              };
                              se(
                                ce,
                                (we) => {
                                  c(M).type === "select" ? we(ve) : we(ke, !1);
                                },
                                !0
                              );
                            }
                            z(ue, oe);
                          };
                          se(
                            L,
                            (ue) => {
                              c(M).type === "slider" ? ue(te) : ue(fe, !1);
                            },
                            !0
                          );
                        }
                        z(J, re);
                      };
                      se(
                        K,
                        (J) => {
                          c(M).type === "textarea" ? J(j) : J(W, !1);
                        },
                        !0
                      );
                    }
                    z(Y, ee);
                  };
                  se(X, (Y) => {
                    c(M).type === "input" ? Y(U) : Y(E, !1);
                  });
                }
                z(O, B);
              }), z(_, T);
            };
            se(V, (_) => {
              v && _(H);
            });
          }
          var I = R(V, 2);
          Mt(I, (_) => m = _, () => m);
          var A = R(I, 2);
          {
            var D = (_) => {
              var T = B$(), S = Q(T), O = q(S);
              Ye(O, {
                level: 3,
                mt: "10px",
                children: (U, E) => {
                  Se();
                  var Y = ze("输出参数");
                  z(U, Y);
                },
                $$slots: { default: !0 }
              });
              var M = R(O, 2);
              {
                var B = (U) => {
                  We(U, {
                    size: "icon-xs",
                    class: "input-btn-more",
                    style: "margin-left: auto",
                    onclick: () => {
                      i(o, "outputDefs");
                    },
                    children: (E, Y) => {
                      var ee = R$();
                      z(E, ee);
                    },
                    $$slots: { default: !0 }
                  });
                };
                se(M, (U) => {
                  p.outputDefsAddEnable !== !1 && U(B);
                });
              }
              Z(S);
              var X = R(S, 2);
              gr(X, {}), z(_, T);
            };
            se(A, (_) => {
              p.outputDefsEnable !== !1 && _(D);
            });
          }
          Ne(() => {
            zt(I, p.rootStyle || ""), Yt(I, 1, pr(p.rootClass), "svelte-qt4m0r");
          }), z(k, C);
        },
        $$slots: { icon: !0, default: !0 }
      }
    ));
  }
  return le(y);
}
ie(Tv, { data: {} }, [], [], !0);
const j$ = () => ({ updateEdgeData: (t, e, n) => {
  const r = Ze.getEdge(t);
  if (!r)
    return;
  const o = typeof e == "function" ? e(r) : e;
  r.data = n?.replace ? o : { ...r.data, ...o }, Ze.updateEdges((i) => i.map((s) => s.id === t ? r : s));
} }), Z$ = () => ({ deleteEdge: (t) => {
  Ze.removeEdge(t);
} }), W$ = () => {
  const t = (e, n) => n.filter(
    // 排除循环节点的子节点，否则在多层循环嵌套时不正确
    (r) => r.source === e && r.sourceHandle !== "loop_handle"
  );
  return { getNodesFromSource: (e) => {
    const n = Ze.getEdges(), r = [];
    let o = t(e, n);
    for (; o.length > 0; ) {
      const i = [];
      o.forEach((s) => {
        r.push(Ze.getNode(s.target)), i.push(...t(s.target, n));
      }), o = i;
    }
    return r;
  } };
}, q$ = () => ({ getNodeRelativePosition: (t) => {
  let e = Ze.getNode(t);
  const n = { x: 0, y: 0 };
  for (; e; )
    n.x += e.position.x, n.y += e.position.y, e.parentId ? e = Ze.getNode(e.parentId) : e = void 0;
  return n;
} });
function X$(t) {
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
function Y$(t) {
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
function U$(t) {
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
function Al(t, e) {
  if (t == null)
    return t;
  if (Array.isArray(t))
    return t.map((n) => Al(n, e));
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
      Object.hasOwn(t, r) && (n[r] = Al(t[r], e));
    return n;
  }
  return t;
}
const G$ = () => (Ct(), { copyHandler: async (t) => {
  const e = Ze.getNodes().filter((s) => s.selected);
  if (e.length === 0) return;
  const n = Ze.getEdges().filter((s) => e.some((a) => a.id === s.source) && e.some((a) => a.id === s.target)), r = e.map(X$), o = n.map(U$), i = JSON.stringify({
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
  const r = Y$(n.tinyflowNodes), o = n.tinyflowEdges || [], i = /* @__PURE__ */ new Map(), s = [];
  for (const l of r) {
    const u = `node_${Kn()}`;
    i.set(l.id, u);
  }
  for (const l of r) {
    const u = i.get(l.id), d = l.parentId !== void 0 ? i.get(l.parentId) : void 0, h = Al(l.data, i);
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
      id: `edge_${Kn()}`,
      source: u,
      target: d
    });
  }
  Ze.updateNodes((l) => [...l.map((u) => ({ ...u, selected: !1 })), ...s]), Ze.updateEdges((l) => [...l.map((u) => ({ ...u, selected: !1 })), ...a]);
} }), Dd = () => {
  const t = document.activeElement;
  return !t || !(t instanceof HTMLElement) ? !1 : t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement || t.isContentEditable;
};
var J$ = /* @__PURE__ */ ne('<div class="panel-content svelte-woejl3"><div>边属性设置</div> <div class="setting-title svelte-woejl3">边条件设置</div> <div class="setting-item svelte-woejl3"><!></div> <div class="setting-item svelte-woejl3" style="padding: 8px 0"><!> <!></div></div>'), Q$ = /* @__PURE__ */ ne("<!> <!> <!> <!>", 1), e6 = /* @__PURE__ */ ne('<div style="position: relative; height: 100%; width: 100%;overflow: hidden"><!> <!></div>');
const t6 = {
  hash: "svelte-woejl3",
  code: ".panel-content.svelte-woejl3 {padding:10px;background-color:var(--background);border-radius:5px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);width:200px;border:1px solid var(--border);}.setting-title.svelte-woejl3 {margin:10px 0;font-size:12px;color:var(--muted-foreground);}.setting-item.svelte-woejl3 {display:flex;gap:5px;align-items:center;justify-content:end;}"
};
function Av(t, e) {
  ae(e, !0), Je(t, t6);
  const n = g(e, "onInit", 7), r = g(e, "colorMode", 7), o = /* @__PURE__ */ Ae(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "onInit",
    "colorMode"
  ]), i = Ct();
  console.log("props", o), n()(i);
  let s = /* @__PURE__ */ me(!1), a = /* @__PURE__ */ me(null);
  const { updateEdgeData: l } = j$(), u = (K) => {
    K.preventDefault(), K.dataTransfer && (K.dataTransfer.dropEffect = "move");
  }, d = (K) => {
    K.preventDefault();
    const j = i.screenToFlowPosition({ x: K.clientX - 250, y: K.clientY - 100 }), W = K.dataTransfer?.getData("application/tinyflow");
    if (!W)
      return;
    const J = JSON.parse(W), re = { id: `node_${Kn()}`, position: j, data: {}, ...J };
    Ze.addNode(re), Ze.selectNodeOnly(re.id);
  }, { getNode: h } = E$(), p = (K) => {
    const j = h(K.source), W = h(K.target);
    if (K.sourceHandle === "loop_handle" || j.parentId) {
      const J = i.getEdges();
      for (let re of J)
        if (re.target === K.target) {
          const L = h(re.source);
          if (K.sourceHandle === "loop_handle" && L.parentId !== j.id || j.parentId && L.parentId !== j.parentId)
            return !1;
        }
    }
    return !(!j.parentId && W.parentId && W.parentId !== j.id);
  }, { getNodesFromSource: v } = W$(), { getNodeRelativePosition: m } = q$(), { ensureParentInNodesBefore: y } = z$(), w = (K, j) => {
    if (!j.isValid)
      return;
    const W = j.toNode;
    if (W.parentId)
      return;
    const J = j.fromNode, re = j.fromHandle, L = { position: { ...W.position } };
    if (re.id === "loop_handle" ? L.parentId = J.id : J.parentId && (L.parentId = J.parentId), L.parentId) {
      const { x: te, y: fe } = m(L.parentId);
      L.position = { x: W.position.x - te, y: W.position.y - fe }, i.updateNode(W.id, L), v(W.id).forEach((ue) => {
        i.updateNode(ue.id, {
          parentId: L.parentId,
          position: { x: ue.position.x - te, y: ue.position.y - fe }
        });
      }), y(L.parentId, W.id);
    }
    setTimeout(() => {
      Ze.getEdges().forEach((te) => {
        te.target === W.id && te.source == J.id && (F(s, !0), F(a, te, !0));
      });
    });
  }, { getEdgesByTarget: b } = M$(), k = (K) => {
    K.edges.forEach((j) => {
      j.id === c(a)?.id && (F(a, null), F(s, !1));
      const W = h(j.target);
      if (W && W.parentId) {
        const J = b(j.target), { x: re, y: L } = m(W.parentId);
        if (J.length === 0)
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
          for (let fe = 0; fe < J.length; fe++) {
            const ue = J[fe], oe = h(ue.source);
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
  }, { deleteEdge: P } = Z$(), C = (K, j) => {
  }, x = (K) => {
  }, { copyHandler: N, pasteHandler: V } = G$(), H = (K) => {
    Dd() || ((K.ctrlKey || K.metaKey) && K.key === "c" && (K.preventDefault(), N(K)), (K.ctrlKey || K.metaKey) && K.key === "a" && (K.preventDefault(), Ze.updateNodes((j) => j.map((W) => ({ ...W, selected: !0 }))), Ze.updateEdges((j) => j.map((W) => ({ ...W, selected: !0 })))));
  }, I = async (K) => {
    Dd() || V(K);
  };
  $n(() => {
    window.addEventListener("keydown", H), window.addEventListener("paste", I);
  }), xi(() => {
    window.removeEventListener("keydown", H), window.removeEventListener("paste", I);
  });
  const A = {
    // ...nodeTypes
  }, D = Or().customNodes;
  if (D)
    for (let K of Object.keys(D))
      A[K] = Tv;
  const _ = Or().onDataChange;
  Ie(() => {
    _?.({
      nodes: Ze.getNodes(),
      edges: Ze.getEdges(),
      viewport: Ze.getViewport()
    });
  });
  var T = {
    get onInit() {
      return n();
    },
    set onInit(K) {
      n(K), f();
    },
    get colorMode() {
      return r();
    },
    set colorMode(K) {
      r(K), f();
    }
  }, S = e6(), O = q(S), M = Ze.getNodes, B = Ze.setNodes, X = Ze.getEdges, U = Ze.setEdges, E = Ze.getViewport, Y = Ze.setViewport;
  {
    let K = /* @__PURE__ */ $(() => ({ ...S$, ...A })), j = /* @__PURE__ */ $(() => ({
      markerEnd: { type: ui.ArrowClosed, width: 20, height: 20 }
    }));
    Cf(O, {
      get colorMode() {
        return r();
      },
      get nodeTypes() {
        return c(K);
      },
      get nodes() {
        return M();
      },
      set nodes(W) {
        B(W);
      },
      get edges() {
        return X();
      },
      set edges(W) {
        U(W);
      },
      get viewport() {
        return E();
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
        F(s, !0), F(a, W.edge, !0);
      },
      onbeforeconnect: (W) => ({ ...W, id: Kn() }),
      ondelete: k,
      onclick: (W) => {
        const J = W.target;
        J.classList.contains("svelte-flow__edge-interaction") || J.classList.contains("panel-content") || J.closest(".panel-content") || (F(s, !1), F(a, null));
      },
      get defaultEdgeOptions() {
        return c(j);
      },
      children: (W, J) => {
        var re = Q$(), L = Q(re);
        Tf(L, {});
        var te = R(L, 2);
        Ef(te, {});
        var fe = R(te, 2);
        Df(fe, {});
        var ue = R(fe, 2);
        {
          var oe = (ce) => {
            Ni(ce, {
              children: (ve, ke) => {
                var we = J$(), he = R(q(we), 4), xe = q(he);
                {
                  let Ve = /* @__PURE__ */ $(() => c(a)?.data?.condition);
                  et(xe, {
                    rows: 3,
                    placeholder: "请输入边条件",
                    style: "width: 100%",
                    get value() {
                      return c(Ve);
                    },
                    onchange: (Re) => {
                      c(a) && l(c(a).id, { condition: Re.target?.value });
                    }
                  });
                }
                Z(he);
                var De = R(he, 2), G = q(De);
                We(G, {
                  variant: "destructive",
                  onclick: () => {
                    P(c(a)?.id), F(s, !1);
                  },
                  children: (Ve, Re) => {
                    Se();
                    var He = ze("删除");
                    z(Ve, He);
                  },
                  $$slots: { default: !0 }
                });
                var Te = R(G, 2);
                We(Te, {
                  variant: "default",
                  onclick: () => {
                    F(s, !1);
                  },
                  children: (Ve, Re) => {
                    Se();
                    var He = ze("保存");
                    z(Ve, He);
                  },
                  $$slots: { default: !0 }
                }), Z(De), Z(we), z(ve, we);
              },
              $$slots: { default: !0 }
            });
          };
          se(ue, (ce) => {
            c(s) && ce(oe);
          });
        }
        z(W, re);
      },
      $$slots: { default: !0 }
    });
  }
  var ee = R(O, 2);
  return Mv(ee, {}), Z(S), z(t, S), le(T);
}
ie(Av, { onInit: {}, colorMode: {} }, [], [], !0);
const Dv = typeof window < "u" ? window : void 0;
function n6(t) {
  let e = t.activeElement;
  for (; e?.shadowRoot; ) {
    const n = e.shadowRoot.activeElement;
    if (n === e)
      break;
    e = n;
  }
  return e;
}
let r6 = class {
  #e;
  #t;
  constructor(t = {}) {
    const { window: e = Dv, document: n = e?.document } = t;
    e !== void 0 && (this.#e = n, this.#t = eo((r) => {
      const o = pt(e, "focusin", r), i = pt(e, "focusout", r);
      return () => {
        o(), i();
      };
    }));
  }
  get current() {
    return this.#t?.(), this.#e ? n6(this.#e) : null;
  }
};
new r6();
function o6(t, e) {
  switch (t) {
    case "post":
      Ie(e);
      break;
    case "pre":
      jt(e);
      break;
  }
}
function Vv(t, e, n, r = {}) {
  const { lazy: o = !1 } = r;
  let i = !o, s = Array.isArray(t) ? [] : void 0;
  o6(e, () => {
    const a = Array.isArray(t) ? t.map((u) => u()) : t();
    if (!i) {
      i = !0, s = a;
      return;
    }
    const l = st(() => n(a, s));
    return s = a, l;
  });
}
function Gu(t, e, n) {
  Vv(t, "post", e, n);
}
function i6(t, e, n) {
  Vv(t, "pre", e, n);
}
Gu.pre = i6;
function s6(t, e) {
  switch (t) {
    case "local":
      return e.localStorage;
    case "session":
      return e.sessionStorage;
  }
}
class Hv {
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
      window: a = Dv
    } = r;
    if (this.#e = n, this.#t = e, this.#n = i, a === void 0) return;
    const l = s6(o, a);
    this.#r = l;
    const u = l.getItem(e);
    u !== null ? this.#e = this.#s(u) : this.#l(n), s && o === "local" && (this.#o = eo(() => pt(a, "storage", this.#a)));
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
function Vd(t) {
  return t.filter((e) => e.length > 0);
}
const Lv = {
  getItem: (t) => null,
  setItem: (t, e) => {
  }
}, Vi = typeof document < "u";
function a6(t) {
  return typeof t == "function";
}
function l6(t) {
  return t !== null && typeof t == "object";
}
const gi = Symbol("box"), Ju = Symbol("is-writable");
function u6(t) {
  return l6(t) && gi in t;
}
function c6(t) {
  return yt.isBox(t) && Ju in t;
}
function yt(t) {
  let e = /* @__PURE__ */ me(ht(t));
  return {
    [gi]: !0,
    [Ju]: !0,
    get current() {
      return c(e);
    },
    set current(n) {
      F(e, n, !0);
    }
  };
}
function d6(t, e) {
  const n = /* @__PURE__ */ $(t);
  return e ? {
    [gi]: !0,
    [Ju]: !0,
    get current() {
      return c(n);
    },
    set current(r) {
      e(r);
    }
  } : {
    [gi]: !0,
    get current() {
      return t();
    }
  };
}
function h6(t) {
  return yt.isBox(t) ? t : a6(t) ? yt.with(t) : yt(t);
}
function p6(t) {
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
function f6(t) {
  return yt.isWritableBox(t) ? {
    [gi]: !0,
    get current() {
      return t.current;
    }
  } : t;
}
yt.from = h6;
yt.with = d6;
yt.flatten = p6;
yt.readonly = f6;
yt.isBox = u6;
yt.isWritableBox = c6;
function g6(t, e) {
  const n = RegExp(t, "g");
  return (r) => {
    if (typeof r != "string")
      throw new TypeError(`expected an argument of type string, but got ${typeof r}`);
    return r.match(n) ? r.replace(n, e) : r;
  };
}
const v6 = g6(/[A-Z]/, (t) => `-${t.toLowerCase()}`);
function m6(t) {
  if (!t || typeof t != "object" || Array.isArray(t))
    throw new TypeError(`expected an argument of type object, but got ${typeof t}`);
  return Object.keys(t).map((e) => `${v6(e)}: ${t[e]};`).join(`
`);
}
function y6(t = {}) {
  return m6(t).replace(`
`, " ");
}
const w6 = {
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
y6(w6);
const b6 = typeof window < "u" ? window : void 0;
function x6(t) {
  let e = t.activeElement;
  for (; e?.shadowRoot; ) {
    const n = e.shadowRoot.activeElement;
    if (n === e)
      break;
    e = n;
  }
  return e;
}
class k6 {
  #e;
  #t;
  constructor(e = {}) {
    const { window: n = b6, document: r = n?.document } = e;
    n !== void 0 && (this.#e = r, this.#t = eo((o) => {
      const i = pt(n, "focusin", o), s = pt(n, "focusout", o);
      return () => {
        i(), s();
      };
    }));
  }
  get current() {
    return this.#t?.(), this.#e ? x6(this.#e) : null;
  }
}
new k6();
const Br = yt("mode-watcher-mode"), Kr = yt("mode-watcher-theme"), C6 = ["dark", "light", "system"];
function Dl(t) {
  return typeof t != "string" ? !1 : C6.includes(t);
}
class $6 {
  #e = "system";
  #t = Vi ? localStorage : Lv;
  #n = this.#t.getItem(Br.current);
  #r = Dl(this.#n) ? this.#n : this.#e;
  #o = /* @__PURE__ */ me(ht(this.#i()));
  #i(e = this.#r) {
    return new Hv(Br.current, e, {
      serializer: {
        serialize: (n) => n,
        deserialize: (n) => Dl(n) ? n : this.#e
      }
    });
  }
  constructor() {
    to(() => Gu.pre(() => Br.current, (e, n) => {
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
class S6 {
  #e = void 0;
  #t = !0;
  #n = /* @__PURE__ */ me(ht(this.#e));
  #r = typeof window < "u" && typeof window.matchMedia == "function" ? new ef("prefers-color-scheme: light") : { current: !1 };
  query() {
    Vi && F(this.#n, this.#r.current ? "light" : "dark", !0);
  }
  tracking(e) {
    this.#t = e;
  }
  constructor() {
    to(() => {
      jt(() => {
        this.#t && this.query();
      });
    }), this.query = this.query.bind(this), this.tracking = this.tracking.bind(this);
  }
  get current() {
    return c(this.#n);
  }
}
const Vl = new $6(), Hl = new S6();
class _6 {
  #e = Vi ? localStorage : Lv;
  #t = this.#e.getItem(Kr.current);
  #n = this.#t === null || this.#t === void 0 ? "" : this.#t;
  #r = /* @__PURE__ */ me(ht(this.#o()));
  #o(e = this.#n) {
    return new Hv(Kr.current, e, {
      serializer: {
        serialize: (n) => typeof n != "string" ? "" : n,
        deserialize: (n) => n
      }
    });
  }
  constructor() {
    to(() => Gu.pre(() => Kr.current, (e, n) => {
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
const ds = new _6();
let Hd, Ld, Id = !1, Ji = null;
function P6() {
  return Ji || (Ji = document.createElement("style"), Ji.appendChild(document.createTextNode(`* {
		-webkit-transition: none !important;
		-moz-transition: none !important;
		-o-transition: none !important;
		-ms-transition: none !important;
		transition: none !important;
	}`)), Ji);
}
function Iv(t, e = !1) {
  if (typeof document > "u")
    return;
  if (!Id) {
    Id = !0, t();
    return;
  }
  if (typeof process < "u" && process.env?.NODE_ENV === "test" || typeof window < "u" && window.__vitest_worker__) {
    t();
    return;
  }
  clearTimeout(Hd), clearTimeout(Ld);
  const n = P6(), r = () => document.head.appendChild(n), o = () => {
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
  r(), Hd = window.setTimeout(() => {
    t(), Ld = window.setTimeout(o, 16);
  }, 16);
}
const wr = yt(void 0), qs = yt(!0), Xs = yt(!1), Ll = yt([]), Il = yt([]);
function O6() {
  const t = /* @__PURE__ */ $(() => {
    if (!Vi) return;
    const e = Vl.current === "system" ? Hl.current : Vl.current, n = Vd(Ll.current), r = Vd(Il.current);
    function o() {
      const i = document.documentElement, s = document.querySelector('meta[name="theme-color"]');
      e === "light" ? (n.length && i.classList.remove(...n), r.length && i.classList.add(...r), i.style.colorScheme = "light", s && wr.current && s.setAttribute("content", wr.current.light)) : (r.length && i.classList.remove(...r), n.length && i.classList.add(...n), i.style.colorScheme = "dark", s && wr.current && s.setAttribute("content", wr.current.dark));
    }
    return qs.current ? Iv(o, Xs.current) : o(), e;
  });
  return {
    get current() {
      return c(t);
    }
  };
}
function N6() {
  const t = /* @__PURE__ */ $(() => {
    if (ds.current, !Vi) return;
    function e() {
      document.documentElement.setAttribute("data-theme", ds.current);
    }
    return qs.current ? Iv(e, st(() => Xs.current)) : e(), ds.current;
  });
  return {
    get current() {
      return c(t);
    }
  };
}
const E6 = O6(), z6 = N6();
function Rv(t) {
  Vl.current = t;
}
function M6(t) {
  ds.current = t;
}
function T6({ defaultMode: t = "system", themeColors: e, darkClassNames: n = ["dark"], lightClassNames: r = [], defaultTheme: o = "", modeStorageKey: i = "mode-watcher-mode", themeStorageKey: s = "mode-watcher-theme" }) {
  const a = document.documentElement, l = localStorage.getItem(i) ?? t, u = localStorage.getItem(s) ?? o, d = l === "light" || l === "system" && window.matchMedia("(prefers-color-scheme: light)").matches;
  if (d ? (n.length && a.classList.remove(...n.filter(Boolean)), r.length && a.classList.add(...r.filter(Boolean))) : (r.length && a.classList.remove(...r.filter(Boolean)), n.length && a.classList.add(...n.filter(Boolean))), a.style.colorScheme = d ? "light" : "dark", e) {
    const h = document.querySelector('meta[name="theme-color"]');
    h && h.setAttribute("content", l === "light" ? e.light : e.dark);
  }
  u && (a.setAttribute("data-theme", u), localStorage.setItem(s, u)), localStorage.setItem(i, l);
}
var A6 = /* @__PURE__ */ ne('<meta name="theme-color"/>');
function Bv(t, e) {
  ae(e, !0);
  let n = g(e, "themeColors", 7);
  var r = {
    get themeColors() {
      return n();
    },
    set themeColors(a) {
      n(a), f();
    }
  }, o = de(), i = Q(o);
  {
    var s = (a) => {
      var l = A6();
      Ne(() => Pe(l, "content", n().dark)), z(a, l);
    };
    se(i, (a) => {
      n() && a(s);
    });
  }
  return z(t, o), le(r);
}
ie(Bv, { themeColors: {} }, [], [], !0);
var D6 = /* @__PURE__ */ ne('<meta name="theme-color"/>'), V6 = /* @__PURE__ */ ne("<!> <!>", 1);
function Kv(t, e) {
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
  return m1("1lz8xnp", (s) => {
    var a = V6(), l = Q(a);
    {
      var u = (h) => {
        var p = D6();
        Ne(() => Pe(p, "content", o().dark)), z(h, p);
      };
      se(l, (h) => {
        o() && h(u);
      });
    }
    var d = R(l, 2);
    sa(d, () => `<script${n() ? ` nonce=${n()}` : ""}>(` + T6.toString() + ")(" + JSON.stringify(r()) + ");<\/script>"), z(s, a);
  }), le(i);
}
ie(Kv, { trueNonce: {}, initConfig: {}, themeColors: {} }, [], [], !0);
function Fv(t, e) {
  ae(e, !0);
  let n = g(e, "track", 7, !0), r = g(e, "defaultMode", 7, "system"), o = g(e, "themeColors", 7), i = g(e, "disableTransitions", 7, !0), s = g(e, "darkClassNames", 23, () => ["dark"]), a = g(e, "lightClassNames", 23, () => []), l = g(e, "defaultTheme", 7, ""), u = g(e, "nonce", 7, ""), d = g(e, "themeStorageKey", 7, "mode-watcher-theme"), h = g(e, "modeStorageKey", 7, "mode-watcher-mode"), p = g(e, "disableHeadScriptInjection", 7, !1), v = g(e, "synchronousModeChanges", 7, !1);
  Br.current = h(), Kr.current = d(), Ll.current = s(), Il.current = a(), qs.current = i(), wr.current = o(), Xs.current = v(), jt(() => {
    Xs.current = v();
  }), jt(() => {
    qs.current = i();
  }), jt(() => {
    wr.current = o();
  }), jt(() => {
    Ll.current = s();
  }), jt(() => {
    Il.current = a();
  }), jt(() => {
    Br.current = h();
  }), jt(() => {
    Kr.current = d();
  }), jt(() => {
    E6.current, Br.current, Kr.current, z6.current;
  }), $n(() => {
    Hl.tracking(n()), Hl.query();
    const x = localStorage.getItem(Br.current);
    Rv(Dl(x) ? x : r());
    const N = localStorage.getItem(Kr.current);
    M6(N || l());
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
  }, b = de(), k = Q(b);
  {
    var P = (x) => {
      Bv(x, {
        get themeColors() {
          return wr.current;
        }
      });
    }, C = (x) => {
      Kv(x, {
        get trueNonce() {
          return c(y);
        },
        get initConfig() {
          return m;
        },
        get themeColors() {
          return wr.current;
        }
      });
    };
    se(k, (x) => {
      p() ? x(P) : x(C, !1);
    });
  }
  return z(t, b), le(w);
}
ie(
  Fv,
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
var H6 = /* @__PURE__ */ ne("<!> <!>", 1);
function L6(t, e) {
  ae(e, !0);
  const n = g(e, "options", 7), r = g(e, "onInit", 7);
  let { data: o, theme: i = "system" } = n();
  if (Rv(i), typeof o == "string")
    try {
      o = JSON.parse(o.trim());
    } catch {
      console.error("Invalid JSON data:", o);
    }
  Ze.init(o?.nodes || [], o?.edges || []), Wr("tinyflow_options", n());
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
  }, a = H6(), l = Q(a);
  Fv(l, {});
  var u = R(l, 2);
  return $f(u, {
    children: (d, h) => {
      Av(d, {
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
customElements.define("tinyflow-component", ie(L6, { options: {}, onInit: {} }, [], [], !1));
const R6 = /* @__PURE__ */ jv({
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
    const n = t, r = Zv(null);
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
    return Wv(() => {
      if (r.value) {
        const l = { ...n };
        "data" in l && l.data != null && (l.data = i(l.data)), o = new Nx({
          ...l,
          element: r.value
        });
      }
    }), qv(() => {
      o && (o.destroy(), o = null);
    }), e({
      getData: () => o ? o.getData() : (console.warn("Tinyflow instance is not initialized"), null),
      getInstance: () => o || (console.warn("Tinyflow instance is not initialized"), null)
    }), (l, u) => (Yv(), Xv("div", {
      ref_key: "divRef",
      ref: r,
      class: Gv(["tinyflow", l.className]),
      style: Uv(l.style)
    }, null, 6));
  }
});
export {
  R6 as Tinyflow
};
//# sourceMappingURL=index.js.map
