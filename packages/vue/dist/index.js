import { defineComponent as df, ref as ff, onMounted as pf, onUnmounted as hf, createElementBlock as gf, openBlock as vf, normalizeStyle as mf, normalizeClass as yf } from "vue";
const wf = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(wf);
const Nl = 1, Ll = 2, Tl = 4, bf = 8, xf = 16, $f = 1, Cf = 2, Vl = 4, _f = 8, kf = 16, Ml = 1, Sf = 2, Dl = "[", yi = "[!", Ts = "]", ur = {}, at = Symbol(), Ef = "http://www.w3.org/1999/xhtml", Pf = "http://www.w3.org/2000/svg", Nf = "@attach", Lf = !1;
var wi = Array.isArray, Tf = Array.prototype.indexOf, Vs = Array.from, Go = Object.keys, Jo = Object.defineProperty, Cn = Object.getOwnPropertyDescriptor, Ol = Object.getOwnPropertyDescriptors, zl = Object.prototype, Vf = Array.prototype, bi = Object.getPrototypeOf, ya = Object.isExtensible;
function Rr(e) {
  return typeof e == "function";
}
const mt = () => {
};
function Mf(e) {
  return e();
}
function os(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Hl() {
  var e, t, n = new Promise((r, o) => {
    e = r, t = o;
  });
  return { promise: n, resolve: e, reject: t };
}
function bt(e, t, n = !1) {
  return e === void 0 ? n ? (
    /** @type {() => V} */
    t()
  ) : (
    /** @type {V} */
    t
  ) : e;
}
function go(e, t) {
  if (Array.isArray(e))
    return e;
  if (t === void 0 || !(Symbol.iterator in e))
    return Array.from(e);
  const n = [];
  for (const r of e)
    if (n.push(r), n.length === t) break;
  return n;
}
const ct = 2, Ms = 4, xi = 8, Al = 1 << 24, Ln = 16, Tn = 32, Jn = 64, $i = 128, Ut = 512, gt = 1024, Et = 2048, Vn = 4096, Dt = 8192, _n = 16384, Ci = 32768, Sn = 65536, wa = 1 << 17, Il = 1 << 18, gr = 1 << 19, Zl = 1 << 20, Qr = 32768, is = 1 << 21, Ds = 1 << 22, Kn = 1 << 23, dn = Symbol("$state"), Os = Symbol("legacy props"), Df = Symbol(""), br = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), Of = 1, _i = 3, vr = 8;
function zs(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function zf() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Hf(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Af() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function If(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Zf() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function jf() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Kf(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Rf() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Bf() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Yf() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Wf() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function vo(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function qf() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function Xf() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let xe = !1;
function Mt(e) {
  xe = e;
}
let Pe;
function Ue(e) {
  if (e === null)
    throw vo(), ur;
  return Pe = e;
}
function En() {
  return Ue(
    /** @type {TemplateNode} */
    /* @__PURE__ */ tn(Pe)
  );
}
function Z(e) {
  if (xe) {
    if (/* @__PURE__ */ tn(Pe) !== null)
      throw vo(), ur;
    Pe = e;
  }
}
function me(e = 1) {
  if (xe) {
    for (var t = e, n = Pe; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ tn(n);
    Pe = n;
  }
}
function Uo(e = !0) {
  for (var t = 0, n = Pe; ; ) {
    if (n.nodeType === vr) {
      var r = (
        /** @type {Comment} */
        n.data
      );
      if (r === Ts) {
        if (t === 0) return n;
        t -= 1;
      } else (r === Dl || r === yi) && (t += 1);
    }
    var o = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ tn(n)
    );
    e && n.remove(), n = o;
  }
}
function jl(e) {
  if (!e || e.nodeType !== vr)
    throw vo(), ur;
  return (
    /** @type {Comment} */
    e.data
  );
}
function Kl(e) {
  return e === this.v;
}
function Rl(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Bl(e) {
  return !Rl(e, this.v);
}
let Ir = !1, Ff = !1;
function Gf() {
  Ir = !0;
}
const Jf = [];
function Yl(e, t = !1, n = !1) {
  return Ko(e, /* @__PURE__ */ new Map(), "", Jf, null, n);
}
function Ko(e, t, n, r, o = null, i = !1) {
  if (typeof e == "object" && e !== null) {
    var s = t.get(e);
    if (s !== void 0) return s;
    if (e instanceof Map) return (
      /** @type {Snapshot<T>} */
      new Map(e)
    );
    if (e instanceof Set) return (
      /** @type {Snapshot<T>} */
      new Set(e)
    );
    if (wi(e)) {
      var a = (
        /** @type {Snapshot<any>} */
        Array(e.length)
      );
      t.set(e, a), o !== null && t.set(o, a);
      for (var l = 0; l < e.length; l += 1) {
        var u = e[l];
        l in e && (a[l] = Ko(u, t, n, r, null, i));
      }
      return a;
    }
    if (bi(e) === zl) {
      a = {}, t.set(e, a), o !== null && t.set(o, a);
      for (var d in e)
        a[d] = Ko(
          // @ts-expect-error
          e[d],
          t,
          n,
          r,
          null,
          i
        );
      return a;
    }
    if (e instanceof Date)
      return (
        /** @type {Snapshot<T>} */
        structuredClone(e)
      );
    if (typeof /** @type {T & { toJSON?: any } } */
    e.toJSON == "function" && !i)
      return Ko(
        /** @type {T & { toJSON(): any } } */
        e.toJSON(),
        t,
        n,
        r,
        // Associate the instance with the toJSON clone
        e
      );
  }
  if (e instanceof EventTarget)
    return (
      /** @type {Snapshot<T>} */
      e
    );
  try {
    return (
      /** @type {Snapshot<T>} */
      structuredClone(e)
    );
  } catch {
    return (
      /** @type {Snapshot<T>} */
      e
    );
  }
}
let Ye = null;
function Er(e) {
  Ye = e;
}
function Wn(e) {
  return (
    /** @type {T} */
    Wl().get(e)
  );
}
function Pr(e, t) {
  return Wl().set(e, t), t;
}
function ue(e, t = !1, n) {
  Ye = {
    p: Ye,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    l: Ir && !t ? { s: null, u: null, $: [] } : null
  };
}
function ce(e) {
  var t = (
    /** @type {ComponentContext} */
    Ye
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      cu(r);
  }
  return e !== void 0 && (t.x = e), t.i = !0, Ye = t.p, e ?? /** @type {T} */
  {};
}
function mo() {
  return !Ir || Ye !== null && Ye.l === null;
}
function Wl(e) {
  return Ye === null && zs(), Ye.c ??= new Map(Uf(Ye) || void 0);
}
function Uf(e) {
  let t = e.p;
  for (; t !== null; ) {
    const n = t.c;
    if (n !== null)
      return n;
    t = t.p;
  }
  return null;
}
let rr = [];
function ql() {
  var e = rr;
  rr = [], os(e);
}
function Un(e) {
  if (rr.length === 0 && !Gr) {
    var t = rr;
    queueMicrotask(() => {
      t === rr && ql();
    });
  }
  rr.push(e);
}
function Qf() {
  for (; rr.length > 0; )
    ql();
}
function Xl(e) {
  var t = Ne;
  if (t === null)
    return Me.f |= Kn, e;
  if ((t.f & Ci) === 0) {
    if ((t.f & $i) === 0)
      throw e;
    t.b.error(e);
  } else
    Nr(e, t);
}
function Nr(e, t) {
  for (; t !== null; ) {
    if ((t.f & $i) !== 0)
      try {
        t.b.error(e);
        return;
      } catch (n) {
        e = n;
      }
    t = t.parent;
  }
  throw e;
}
const Do = /* @__PURE__ */ new Set();
let We = null, Zt = null, It = [], ki = null, ss = !1, Gr = !1;
class Gt {
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
  #l = null;
  /**
   * Deferred effects (which run after async work has completed) that are DIRTY
   * @type {Effect[]}
   */
  #a = [];
  /**
   * Deferred effects that are MAYBE_DIRTY
   * @type {Effect[]}
   */
  #o = [];
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
  process(t) {
    It = [], this.apply();
    var n = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: [],
      block_effects: []
    };
    for (const r of t)
      this.#i(r, n);
    this.is_fork || this.#c(), this.is_deferred() ? (this.#s(n.effects), this.#s(n.render_effects), this.#s(n.block_effects)) : (We = null, ba(n.render_effects), ba(n.effects), this.#l?.resolve()), Zt = null;
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   * @param {EffectTarget} target
   */
  #i(t, n) {
    t.f ^= gt;
    for (var r = t.first; r !== null; ) {
      var o = r.f, i = (o & (Tn | Jn)) !== 0, s = i && (o & gt) !== 0, a = s || (o & Dt) !== 0 || this.skipped_effects.has(r);
      if ((r.f & $i) !== 0 && r.b?.is_pending() && (n = {
        parent: n,
        effect: r,
        effects: [],
        render_effects: [],
        block_effects: []
      }), !a && r.fn !== null) {
        i ? r.f ^= gt : (o & Ms) !== 0 ? n.effects.push(r) : bo(r) && ((r.f & Ln) !== 0 && n.block_effects.push(r), no(r));
        var l = r.first;
        if (l !== null) {
          r = l;
          continue;
        }
      }
      var u = r.parent;
      for (r = r.next; r === null && u !== null; )
        u === n.effect && (this.#s(n.effects), this.#s(n.render_effects), this.#s(n.block_effects), n = /** @type {EffectTarget} */
        n.parent), r = u.next, u = u.parent;
    }
  }
  /**
   * @param {Effect[]} effects
   */
  #s(t) {
    for (const n of t)
      ((n.f & Et) !== 0 ? this.#a : this.#o).push(n), this.#u(n.deps), vt(n, gt);
  }
  /**
   * @param {Value[] | null} deps
   */
  #u(t) {
    if (t !== null)
      for (const n of t)
        (n.f & ct) === 0 || (n.f & Qr) === 0 || (n.f ^= Qr, this.#u(
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
  capture(t, n) {
    this.previous.has(t) || this.previous.set(t, n), (t.f & Kn) === 0 && (this.current.set(t, t.v), Zt?.set(t, t.v));
  }
  activate() {
    We = this, this.apply();
  }
  deactivate() {
    We === this && (We = null, Zt = null);
  }
  flush() {
    if (this.activate(), It.length > 0) {
      if (Fl(), We !== null && We !== this)
        return;
    } else this.#n === 0 && this.process([]);
    this.deactivate();
  }
  discard() {
    for (const t of this.#t) t(this);
    this.#t.clear();
  }
  #c() {
    if (this.#r === 0) {
      for (const t of this.#e) t();
      this.#e.clear();
    }
    this.#n === 0 && this.#d();
  }
  #d() {
    if (Do.size > 1) {
      this.previous.clear();
      var t = Zt, n = !0, r = {
        parent: null,
        effect: null,
        effects: [],
        render_effects: [],
        block_effects: []
      };
      for (const i of Do) {
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
          var o = It;
          It = [];
          const l = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map();
          for (const d of s)
            Gl(d, a, l, u);
          if (It.length > 0) {
            We = i, i.apply();
            for (const d of It)
              i.#i(d, r);
            i.deactivate();
          }
          It = o;
        }
      }
      We = null, Zt = t;
    }
    this.committed = !0, Do.delete(this);
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(t) {
    this.#n += 1, t && (this.#r += 1);
  }
  /**
   *
   * @param {boolean} blocking
   */
  decrement(t) {
    this.#n -= 1, t && (this.#r -= 1), this.revive();
  }
  revive() {
    for (const t of this.#a)
      vt(t, Et), cr(t);
    for (const t of this.#o)
      vt(t, Vn), cr(t);
    this.#a = [], this.#o = [], this.flush();
  }
  /** @param {() => void} fn */
  oncommit(t) {
    this.#e.add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    this.#t.add(t);
  }
  settled() {
    return (this.#l ??= Hl()).promise;
  }
  static ensure() {
    if (We === null) {
      const t = We = new Gt();
      Do.add(We), Gr || Gt.enqueue(() => {
        We === t && t.flush();
      });
    }
    return We;
  }
  /** @param {() => void} task */
  static enqueue(t) {
    Un(t);
  }
  apply() {
  }
}
function g(e) {
  var t = Gr;
  Gr = !0;
  try {
    for (var n; ; ) {
      if (Qf(), It.length === 0 && (We?.flush(), It.length === 0))
        return ki = null, /** @type {T} */
        n;
      Fl();
    }
  } finally {
    Gr = t;
  }
}
function Fl() {
  var e = Bn;
  ss = !0;
  try {
    var t = 0;
    for (ei(!0); It.length > 0; ) {
      var n = Gt.ensure();
      if (t++ > 1e3) {
        var r, o;
        ep();
      }
      n.process(It), Rn.clear();
    }
  } finally {
    ss = !1, ei(e), ki = null;
  }
}
function ep() {
  try {
    Zf();
  } catch (e) {
    Nr(e, ki);
  }
}
let yn = null;
function ba(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if ((r.f & (_n | Dt)) === 0 && bo(r) && (yn = /* @__PURE__ */ new Set(), no(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? vu(r) : r.fn = null), yn?.size > 0)) {
        Rn.clear();
        for (const o of yn) {
          if ((o.f & (_n | Dt)) !== 0) continue;
          const i = [o];
          let s = o.parent;
          for (; s !== null; )
            yn.has(s) && (yn.delete(s), i.push(s)), s = s.parent;
          for (let a = i.length - 1; a >= 0; a--) {
            const l = i[a];
            (l.f & (_n | Dt)) === 0 && no(l);
          }
        }
        yn.clear();
      }
    }
    yn = null;
  }
}
function Gl(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const o of e.reactions) {
      const i = o.f;
      (i & ct) !== 0 ? Gl(
        /** @type {Derived} */
        o,
        t,
        n,
        r
      ) : (i & (Ds | Ln)) !== 0 && (i & Et) === 0 && Jl(o, t, r) && (vt(o, Et), cr(
        /** @type {Effect} */
        o
      ));
    }
}
function Jl(e, t, n) {
  const r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null)
    for (const o of e.deps) {
      if (t.includes(o))
        return !0;
      if ((o.f & ct) !== 0 && Jl(
        /** @type {Derived} */
        o,
        t,
        n
      ))
        return n.set(
          /** @type {Derived} */
          o,
          !0
        ), !0;
    }
  return n.set(e, !1), !1;
}
function cr(e) {
  for (var t = ki = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (ss && t === Ne && (n & Ln) !== 0 && (n & Il) === 0)
      return;
    if ((n & (Jn | Tn)) !== 0) {
      if ((n & gt) === 0) return;
      t.f ^= gt;
    }
  }
  It.push(t);
}
function Ul(e) {
  let t = 0, n = qn(0), r;
  return () => {
    eo() && (c(n), wo(() => (t === 0 && (r = lt(() => e(() => Jr(n)))), t += 1, () => {
      Un(() => {
        t -= 1, t === 0 && (r?.(), r = void 0, Jr(n));
      });
    })));
  };
}
var tp = Sn | gr | $i;
function np(e, t, n) {
  new rp(e, t, n);
}
class rp {
  /** @type {Boundary | null} */
  parent;
  #e = !1;
  /** @type {TemplateNode} */
  #t;
  /** @type {TemplateNode | null} */
  #n = xe ? Pe : null;
  /** @type {BoundaryProps} */
  #r;
  /** @type {((anchor: Node) => void)} */
  #l;
  /** @type {Effect} */
  #a;
  /** @type {Effect | null} */
  #o = null;
  /** @type {Effect | null} */
  #i = null;
  /** @type {Effect | null} */
  #s = null;
  /** @type {DocumentFragment | null} */
  #u = null;
  /** @type {TemplateNode | null} */
  #c = null;
  #d = 0;
  #f = 0;
  #h = !1;
  /**
   * A source containing the number of pending async deriveds/expressions.
   * Only created if `$effect.pending()` is used inside the boundary,
   * otherwise updating the source results in needless `Batch.ensure()`
   * calls followed by no-op flushes
   * @type {Source<number> | null}
   */
  #p = null;
  #w = Ul(() => (this.#p = qn(this.#d), () => {
    this.#p = null;
  }));
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(t, n, r) {
    this.#t = t, this.#r = n, this.#l = r, this.parent = /** @type {Effect} */
    Ne.b, this.#e = !!this.#r.pending, this.#a = jr(() => {
      if (Ne.b = this, xe) {
        const i = this.#n;
        En(), /** @type {Comment} */
        i.nodeType === vr && /** @type {Comment} */
        i.data === yi ? this.#x() : this.#b();
      } else {
        var o = this.#m();
        try {
          this.#o = Vt(() => r(o));
        } catch (i) {
          this.error(i);
        }
        this.#f > 0 ? this.#v() : this.#e = !1;
      }
      return () => {
        this.#c?.remove();
      };
    }, tp), xe && (this.#t = Pe);
  }
  #b() {
    try {
      this.#o = Vt(() => this.#l(this.#t));
    } catch (t) {
      this.error(t);
    }
    this.#e = !1;
  }
  #x() {
    const t = this.#r.pending;
    t && (this.#i = Vt(() => t(this.#t)), Gt.enqueue(() => {
      var n = this.#m();
      this.#o = this.#g(() => (Gt.ensure(), Vt(() => this.#l(n)))), this.#f > 0 ? this.#v() : ($r(
        /** @type {Effect} */
        this.#i,
        () => {
          this.#i = null;
        }
      ), this.#e = !1);
    }));
  }
  #m() {
    var t = this.#t;
    return this.#e && (this.#c = Pt(), this.#t.before(this.#c), t = this.#c), t;
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
  #g(t) {
    var n = Ne, r = Me, o = Ye;
    Rt(this.#a), _t(this.#a), Er(this.#a.ctx);
    try {
      return t();
    } catch (i) {
      return Xl(i), null;
    } finally {
      Rt(n), _t(r), Er(o);
    }
  }
  #v() {
    const t = (
      /** @type {(anchor: Node) => void} */
      this.#r.pending
    );
    this.#o !== null && (this.#u = document.createDocumentFragment(), this.#u.append(
      /** @type {TemplateNode} */
      this.#c
    ), wu(this.#o, this.#u)), this.#i === null && (this.#i = Vt(() => t(this.#t)));
  }
  /**
   * Updates the pending count associated with the currently visible pending snippet,
   * if any, such that we can replace the snippet with content once work is done
   * @param {1 | -1} d
   */
  #y(t) {
    if (!this.has_pending_snippet()) {
      this.parent && this.parent.#y(t);
      return;
    }
    this.#f += t, this.#f === 0 && (this.#e = !1, this.#i && $r(this.#i, () => {
      this.#i = null;
    }), this.#u && (this.#t.before(this.#u), this.#u = null));
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(t) {
    this.#y(t), this.#d += t, this.#p && Tr(this.#p, this.#d);
  }
  get_effect_pending() {
    return this.#w(), c(
      /** @type {Source<number>} */
      this.#p
    );
  }
  /** @param {unknown} error */
  error(t) {
    var n = this.#r.onerror;
    let r = this.#r.failed;
    if (this.#h || !n && !r)
      throw t;
    this.#o && (ot(this.#o), this.#o = null), this.#i && (ot(this.#i), this.#i = null), this.#s && (ot(this.#s), this.#s = null), xe && (Ue(
      /** @type {TemplateNode} */
      this.#n
    ), me(), Ue(Uo()));
    var o = !1, i = !1;
    const s = () => {
      if (o) {
        Xf();
        return;
      }
      o = !0, i && Wf(), Gt.ensure(), this.#d = 0, this.#s !== null && $r(this.#s, () => {
        this.#s = null;
      }), this.#e = this.has_pending_snippet(), this.#o = this.#g(() => (this.#h = !1, Vt(() => this.#l(this.#t)))), this.#f > 0 ? this.#v() : this.#e = !1;
    };
    var a = Me;
    try {
      _t(null), i = !0, n?.(t, s), i = !1;
    } catch (l) {
      Nr(l, this.#a && this.#a.parent);
    } finally {
      _t(a);
    }
    r && Un(() => {
      this.#s = this.#g(() => {
        Gt.ensure(), this.#h = !0;
        try {
          return Vt(() => {
            r(
              this.#t,
              () => t,
              () => s
            );
          });
        } catch (l) {
          return Nr(
            l,
            /** @type {Effect} */
            this.#a.parent
          ), null;
        } finally {
          this.#h = !1;
        }
      });
    });
  }
}
function Lr(e, t) {
  return t;
}
function op(e, t, n) {
  for (var r = [], o = t.length, i = 0; i < o; i++)
    Ks(t[i].e, r, !0);
  mu(r, () => {
    var s = r.length === 0 && n !== null;
    if (s) {
      var a = (
        /** @type {Element} */
        n
      ), l = (
        /** @type {Element} */
        a.parentNode
      );
      Is(l), l.append(a), e.items.clear(), qt(e, t[0].prev, t[o - 1].next);
    }
    for (var u = 0; u < o; u++) {
      var d = t[u];
      s || (e.items.delete(d.k), qt(e, d.prev, d.next)), ot(d.e, !s);
    }
    e.first === t[0] && (e.first = t[0].prev);
  });
}
function yt(e, t, n, r, o, i = null) {
  var s = e, a = /* @__PURE__ */ new Map(), l = null, u = (t & Tl) !== 0, d = (t & Nl) !== 0, p = (t & Ll) !== 0;
  if (u) {
    var f = (
      /** @type {Element} */
      e
    );
    s = xe ? Ue(
      /** @type {Comment | Text} */
      /* @__PURE__ */ tt(f)
    ) : f.appendChild(Pt());
  }
  xe && En();
  var h = null, y = /* @__PURE__ */ Hs(() => {
    var x = n();
    return wi(x) ? x : x == null ? [] : Vs(x);
  }), w, m = !0;
  function b() {
    ip(_, w, s, t, r), h !== null && (w.length === 0 ? (h.fragment ? (s.before(h.fragment), h.fragment = null) : Rs(h.effect), $.first = h.effect) : $r(h.effect, () => {
      h = null;
    }));
  }
  var $ = jr(() => {
    w = /** @type {V[]} */
    c(y);
    var x = w.length;
    let k = !1;
    if (xe) {
      var L = jl(s) === yi;
      L !== (x === 0) && (s = Uo(), Ue(s), Mt(!1), k = !0);
    }
    for (var D = /* @__PURE__ */ new Set(), j = (
      /** @type {Batch} */
      We
    ), H = null, A = lu(), z = 0; z < x; z += 1) {
      xe && Pe.nodeType === vr && /** @type {Comment} */
      Pe.data === Ts && (s = /** @type {Comment} */
      Pe, k = !0, Mt(!1));
      var S = w[z], T = r(S, z), C = m ? null : a.get(T);
      C ? (d && Tr(C.v, S), p ? Tr(
        /** @type {Value<number>} */
        C.i,
        z
      ) : C.i = z, A && j.skipped_effects.delete(C.e)) : (C = sp(
        m ? s : null,
        H,
        S,
        T,
        z,
        o,
        t,
        n
      ), m && (C.o = !0, H === null ? l = C : H.next = C, H = C), a.set(T, C)), D.add(T);
    }
    if (x === 0 && i && !h)
      if (m)
        h = {
          fragment: null,
          effect: Vt(() => i(s))
        };
      else {
        var P = document.createDocumentFragment(), N = Pt();
        P.append(N), h = {
          fragment: P,
          effect: Vt(() => i(N))
        };
      }
    if (xe && x > 0 && Ue(Uo()), !m)
      if (A) {
        for (const [K, Y] of a)
          D.has(K) || j.skipped_effects.add(Y.e);
        j.oncommit(b), j.ondiscard(() => {
        });
      } else
        b();
    k && Mt(!0), c(y);
  }), _ = { effect: $, items: a, first: l };
  m = !1, xe && (s = Pe);
}
function ip(e, t, n, r, o) {
  var i = (r & bf) !== 0, s = t.length, a = e.items, l = e.first, u, d = null, p, f = [], h = [], y, w, m, b;
  if (i)
    for (b = 0; b < s; b += 1)
      y = t[b], w = o(y, b), m = /** @type {EachItem} */
      a.get(w), m.o && (m.a?.measure(), (p ??= /* @__PURE__ */ new Set()).add(m));
  for (b = 0; b < s; b += 1) {
    if (y = t[b], w = o(y, b), m = /** @type {EachItem} */
    a.get(w), e.first ??= m, !m.o) {
      m.o = !0;
      var $ = d ? d.next : l;
      qt(e, d, m), qt(e, m, $), Ki(m, $, n), d = m, f = [], h = [], l = d.next;
      continue;
    }
    if ((m.e.f & Dt) !== 0 && (Rs(m.e), i && (m.a?.unfix(), (p ??= /* @__PURE__ */ new Set()).delete(m))), m !== l) {
      if (u !== void 0 && u.has(m)) {
        if (f.length < h.length) {
          var _ = h[0], x;
          d = _.prev;
          var k = f[0], L = f[f.length - 1];
          for (x = 0; x < f.length; x += 1)
            Ki(f[x], _, n);
          for (x = 0; x < h.length; x += 1)
            u.delete(h[x]);
          qt(e, k.prev, L.next), qt(e, d, k), qt(e, L, _), l = _, d = L, b -= 1, f = [], h = [];
        } else
          u.delete(m), Ki(m, l, n), qt(e, m.prev, m.next), qt(e, m, d === null ? e.first : d.next), qt(e, d, m), d = m;
        continue;
      }
      for (f = [], h = []; l !== null && l.k !== w; )
        (l.e.f & Dt) === 0 && (u ??= /* @__PURE__ */ new Set()).add(l), h.push(l), l = l.next;
      if (l === null)
        continue;
      m = l;
    }
    f.push(m), d = m, l = m.next;
  }
  let D = a.size > s;
  if (l !== null || u !== void 0) {
    for (var j = u === void 0 ? [] : Vs(u); l !== null; )
      (l.e.f & Dt) === 0 && j.push(l), l = l.next;
    var H = j.length;
    if (D = a.size - H > s, H > 0) {
      var A = (r & Tl) !== 0 && s === 0 ? n : null;
      if (i) {
        for (b = 0; b < H; b += 1)
          j[b].a?.measure();
        for (b = 0; b < H; b += 1)
          j[b].a?.fix();
      }
      op(e, j, A);
    }
  }
  if (D)
    for (const z of a.values())
      z.o || (qt(e, d, z), d = z);
  e.effect.last = d && d.e, i && Un(() => {
    if (p !== void 0)
      for (m of p)
        m.a?.apply();
  });
}
function sp(e, t, n, r, o, i, s, a) {
  var l = (s & Nl) !== 0, u = (s & xf) === 0, d = l ? u ? /* @__PURE__ */ ru(n, !1, !1) : qn(n) : n, p = (s & Ll) === 0 ? o : qn(o), f = {
    i: p,
    v: d,
    k: r,
    a: null,
    // @ts-expect-error
    e: null,
    o: !1,
    prev: t,
    next: null
  };
  try {
    if (e === null) {
      var h = document.createDocumentFragment();
      h.append(e = Pt());
    }
    return f.e = Vt(() => i(
      /** @type {Node} */
      e,
      d,
      p,
      a
    )), t !== null && (t.next = f), f;
  } finally {
  }
}
function Ki(e, t, n) {
  for (var r = e.next ? (
    /** @type {TemplateNode} */
    e.next.e.nodes_start
  ) : n, o = t ? (
    /** @type {TemplateNode} */
    t.e.nodes_start
  ) : n, i = (
    /** @type {TemplateNode} */
    e.e.nodes_start
  ); i !== null && i !== r; ) {
    var s = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ tn(i)
    );
    o.before(i), i = s;
  }
}
function qt(e, t, n) {
  t === null ? (e.first = n, e.effect.first = n && n.e) : (t.e.next && (t.e.next.prev = null), t.next = n, t.e.next = n && n.e), n !== null && (n.e.prev && (n.e.prev.next = null), n.prev = t, n.e.prev = t && t.e);
}
function Ql(e, t, n, r) {
  const o = mo() ? yo : Hs;
  if (n.length === 0 && e.length === 0) {
    r(t.map(o));
    return;
  }
  var i = We, s = (
    /** @type {Effect} */
    Ne
  ), a = ap();
  function l() {
    Promise.all(n.map((u) => /* @__PURE__ */ lp(u))).then((u) => {
      a();
      try {
        r([...t.map(o), ...u]);
      } catch (d) {
        (s.f & _n) === 0 && Nr(d, s);
      }
      i?.deactivate(), Qo();
    }).catch((u) => {
      Nr(u, s);
    });
  }
  e.length > 0 ? Promise.all(e).then(() => {
    a();
    try {
      return l();
    } finally {
      i?.deactivate(), Qo();
    }
  }) : l();
}
function ap() {
  var e = Ne, t = Me, n = Ye, r = We;
  return function(o = !0) {
    Rt(e), _t(t), Er(n), o && r?.activate();
  };
}
function Qo() {
  Rt(null), _t(null), Er(null);
}
// @__NO_SIDE_EFFECTS__
function yo(e) {
  var t = ct | Et, n = Me !== null && (Me.f & ct) !== 0 ? (
    /** @type {Derived} */
    Me
  ) : null;
  return Ne !== null && (Ne.f |= gr), {
    ctx: Ye,
    deps: null,
    effects: null,
    equals: Kl,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      at
    ),
    wv: 0,
    parent: n ?? Ne,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function lp(e, t) {
  let n = (
    /** @type {Effect | null} */
    Ne
  );
  n === null && zf();
  var r = (
    /** @type {Boundary} */
    n.b
  ), o = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), i = qn(
    /** @type {V} */
    at
  ), s = !Me, a = /* @__PURE__ */ new Map();
  return mp(() => {
    var l = Hl();
    o = l.promise;
    try {
      Promise.resolve(e()).then(l.resolve, l.reject).then(() => {
        u === We && u.committed && u.deactivate(), Qo();
      });
    } catch (f) {
      l.reject(f), Qo();
    }
    var u = (
      /** @type {Batch} */
      We
    );
    if (s) {
      var d = !r.is_pending();
      r.update_pending_count(1), u.increment(d), a.get(u)?.reject(br), a.delete(u), a.set(u, l);
    }
    const p = (f, h = void 0) => {
      if (u.activate(), h)
        h !== br && (i.f |= Kn, Tr(i, h));
      else {
        (i.f & Kn) !== 0 && (i.f ^= Kn), Tr(i, f);
        for (const [y, w] of a) {
          if (a.delete(y), y === u) break;
          w.reject(br);
        }
      }
      s && (r.update_pending_count(-1), u.decrement(d));
    };
    l.promise.then(p, (f) => p(null, f || "unknown"));
  }), Si(() => {
    for (const l of a.values())
      l.reject(br);
  }), new Promise((l) => {
    function u(d) {
      function p() {
        d === o ? l(i) : u(o);
      }
      d.then(p, p);
    }
    u(o);
  });
}
// @__NO_SIDE_EFFECTS__
function E(e) {
  const t = /* @__PURE__ */ yo(e);
  return bu(t), t;
}
// @__NO_SIDE_EFFECTS__
function Hs(e) {
  const t = /* @__PURE__ */ yo(e);
  return t.equals = Bl, t;
}
function eu(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      ot(
        /** @type {Effect} */
        t[n]
      );
  }
}
function up(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & ct) === 0)
      return (t.f & _n) === 0 ? (
        /** @type {Effect} */
        t
      ) : null;
    t = t.parent;
  }
  return null;
}
function As(e) {
  var t, n = Ne;
  Rt(up(e));
  try {
    e.f &= ~Qr, eu(e), t = _u(e);
  } finally {
    Rt(n);
  }
  return t;
}
function tu(e) {
  var t = As(e);
  if (e.equals(t) || (We?.is_fork || (e.v = t), e.wv = $u()), !mr)
    if (Zt !== null)
      (eo() || We?.is_fork) && Zt.set(e, t);
    else {
      var n = (e.f & Ut) === 0 ? Vn : gt;
      vt(e, n);
    }
}
let as = /* @__PURE__ */ new Set();
const Rn = /* @__PURE__ */ new Map();
let nu = !1;
function qn(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Kl,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function Ee(e, t) {
  const n = qn(e);
  return bu(n), n;
}
// @__NO_SIDE_EFFECTS__
function ru(e, t = !1, n = !0) {
  const r = qn(e);
  return t || (r.equals = Bl), Ir && n && Ye !== null && Ye.l !== null && (Ye.l.s ??= []).push(r), r;
}
function U(e, t, n = !1) {
  Me !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!cn || (Me.f & wa) !== 0) && mo() && (Me.f & (ct | Ln | Ds | wa)) !== 0 && !kn?.includes(e) && Yf();
  let r = n ? Kt(t) : t;
  return Tr(e, r);
}
function Tr(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    mr ? Rn.set(e, t) : Rn.set(e, n), e.v = t;
    var r = Gt.ensure();
    r.capture(e, n), (e.f & ct) !== 0 && ((e.f & Et) !== 0 && As(
      /** @type {Derived} */
      e
    ), vt(e, (e.f & Ut) !== 0 ? gt : Vn)), e.wv = $u(), ou(e, Et), mo() && Ne !== null && (Ne.f & gt) !== 0 && (Ne.f & (Tn | Jn)) === 0 && (At === null ? wp([e]) : At.push(e)), !r.is_fork && as.size > 0 && !nu && cp();
  }
  return t;
}
function cp() {
  nu = !1;
  var e = Bn;
  ei(!0);
  const t = Array.from(as);
  try {
    for (const n of t)
      (n.f & gt) !== 0 && vt(n, Vn), bo(n) && no(n);
  } finally {
    ei(e);
  }
  as.clear();
}
function xa(e, t = 1) {
  var n = c(e), r = t === 1 ? n++ : n--;
  return U(e, n), r;
}
function Jr(e) {
  U(e, e.v + 1);
}
function ou(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = mo(), o = n.length, i = 0; i < o; i++) {
      var s = n[i], a = s.f;
      if (!(!r && s === Ne)) {
        var l = (a & Et) === 0;
        if (l && vt(s, t), (a & ct) !== 0) {
          var u = (
            /** @type {Derived} */
            s
          );
          Zt?.delete(u), (a & Qr) === 0 && (a & Ut && (s.f |= Qr), ou(u, Vn));
        } else l && ((a & Ln) !== 0 && yn !== null && yn.add(
          /** @type {Effect} */
          s
        ), cr(
          /** @type {Effect} */
          s
        ));
      }
    }
}
function Kt(e) {
  if (typeof e != "object" || e === null || dn in e)
    return e;
  const t = bi(e);
  if (t !== zl && t !== Vf)
    return e;
  var n = /* @__PURE__ */ new Map(), r = wi(e), o = /* @__PURE__ */ Ee(0), i = sr, s = (a) => {
    if (sr === i)
      return a();
    var l = Me, u = sr;
    _t(null), ka(i);
    var d = a();
    return _t(l), ka(u), d;
  };
  return r && n.set("length", /* @__PURE__ */ Ee(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(a, l, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && Rf();
        var d = n.get(l);
        return d === void 0 ? d = s(() => {
          var p = /* @__PURE__ */ Ee(u.value);
          return n.set(l, p), p;
        }) : U(d, u.value, !0), !0;
      },
      deleteProperty(a, l) {
        var u = n.get(l);
        if (u === void 0) {
          if (l in a) {
            const d = s(() => /* @__PURE__ */ Ee(at));
            n.set(l, d), Jr(o);
          }
        } else
          U(u, at), Jr(o);
        return !0;
      },
      get(a, l, u) {
        if (l === dn)
          return e;
        var d = n.get(l), p = l in a;
        if (d === void 0 && (!p || Cn(a, l)?.writable) && (d = s(() => {
          var h = Kt(p ? a[l] : at), y = /* @__PURE__ */ Ee(h);
          return y;
        }), n.set(l, d)), d !== void 0) {
          var f = c(d);
          return f === at ? void 0 : f;
        }
        return Reflect.get(a, l, u);
      },
      getOwnPropertyDescriptor(a, l) {
        var u = Reflect.getOwnPropertyDescriptor(a, l);
        if (u && "value" in u) {
          var d = n.get(l);
          d && (u.value = c(d));
        } else if (u === void 0) {
          var p = n.get(l), f = p?.v;
          if (p !== void 0 && f !== at)
            return {
              enumerable: !0,
              configurable: !0,
              value: f,
              writable: !0
            };
        }
        return u;
      },
      has(a, l) {
        if (l === dn)
          return !0;
        var u = n.get(l), d = u !== void 0 && u.v !== at || Reflect.has(a, l);
        if (u !== void 0 || Ne !== null && (!d || Cn(a, l)?.writable)) {
          u === void 0 && (u = s(() => {
            var f = d ? Kt(a[l]) : at, h = /* @__PURE__ */ Ee(f);
            return h;
          }), n.set(l, u));
          var p = c(u);
          if (p === at)
            return !1;
        }
        return d;
      },
      set(a, l, u, d) {
        var p = n.get(l), f = l in a;
        if (r && l === "length")
          for (var h = u; h < /** @type {Source<number>} */
          p.v; h += 1) {
            var y = n.get(h + "");
            y !== void 0 ? U(y, at) : h in a && (y = s(() => /* @__PURE__ */ Ee(at)), n.set(h + "", y));
          }
        if (p === void 0)
          (!f || Cn(a, l)?.writable) && (p = s(() => /* @__PURE__ */ Ee(void 0)), U(p, Kt(u)), n.set(l, p));
        else {
          f = p.v !== at;
          var w = s(() => Kt(u));
          U(p, w);
        }
        var m = Reflect.getOwnPropertyDescriptor(a, l);
        if (m?.set && m.set.call(d, u), !f) {
          if (r && typeof l == "string") {
            var b = (
              /** @type {Source<number>} */
              n.get("length")
            ), $ = Number(l);
            Number.isInteger($) && $ >= b.v && U(b, $ + 1);
          }
          Jr(o);
        }
        return !0;
      },
      ownKeys(a) {
        c(o);
        var l = Reflect.ownKeys(a).filter((p) => {
          var f = n.get(p);
          return f === void 0 || f.v !== at;
        });
        for (var [u, d] of n)
          d.v !== at && !(u in a) && l.push(u);
        return l;
      },
      setPrototypeOf() {
        Bf();
      }
    }
  );
}
function $a(e) {
  try {
    if (e !== null && typeof e == "object" && dn in e)
      return e[dn];
  } catch {
  }
  return e;
}
function dp(e, t) {
  return Object.is($a(e), $a(t));
}
var Ct, iu, su, au;
function ls() {
  if (Ct === void 0) {
    Ct = window, iu = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    su = Cn(t, "firstChild").get, au = Cn(t, "nextSibling").get, ya(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), ya(n) && (n.__t = void 0);
  }
}
function Pt(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function tt(e) {
  return su.call(e);
}
// @__NO_SIDE_EFFECTS__
function tn(e) {
  return au.call(e);
}
function R(e, t) {
  if (!xe)
    return /* @__PURE__ */ tt(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ tt(Pe)
  );
  if (n === null)
    n = Pe.appendChild(Pt());
  else if (t && n.nodeType !== _i) {
    var r = Pt();
    return n?.before(r), Ue(r), r;
  }
  return Ue(n), n;
}
function oe(e, t = !1) {
  if (!xe) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ tt(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ tn(n) : n;
  }
  if (t && Pe?.nodeType !== _i) {
    var r = Pt();
    return Pe?.before(r), Ue(r), r;
  }
  return Pe;
}
function O(e, t = 1, n = !1) {
  let r = xe ? Pe : e;
  for (var o; t--; )
    o = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ tn(r);
  if (!xe)
    return r;
  if (n && r?.nodeType !== _i) {
    var i = Pt();
    return r === null ? o?.after(i) : r.before(i), Ue(i), i;
  }
  return Ue(r), /** @type {TemplateNode} */
  r;
}
function Is(e) {
  e.textContent = "";
}
function lu() {
  return !1;
}
function fp(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, Un(() => {
      document.activeElement === n && e.focus();
    });
  }
}
function pp(e) {
  xe && /* @__PURE__ */ tt(e) !== null && Is(e);
}
let Ca = !1;
function hp() {
  Ca || (Ca = !0, document.addEventListener(
    "reset",
    (e) => {
      Promise.resolve().then(() => {
        if (!e.defaultPrevented)
          for (
            const t of
            /**@type {HTMLFormElement} */
            e.target.elements
          )
            t.__on_r?.();
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possibility of stopPropagation)
    { capture: !0 }
  ));
}
function Zs(e) {
  var t = Me, n = Ne;
  _t(null), Rt(null);
  try {
    return e();
  } finally {
    _t(t), Rt(n);
  }
}
function uu(e) {
  Ne === null && (Me === null && If(), Af()), mr && Hf();
}
function gp(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Bt(e, t, n) {
  var r = Ne;
  r !== null && (r.f & Dt) !== 0 && (e |= Dt);
  var o = {
    ctx: Ye,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Et | Ut,
    first: null,
    fn: t,
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
      no(o), o.f |= Ci;
    } catch (a) {
      throw ot(o), a;
    }
  else t !== null && cr(o);
  var i = o;
  if (n && i.deps === null && i.teardown === null && i.nodes_start === null && i.first === i.last && // either `null`, or a singular child
  (i.f & gr) === 0 && (i = i.first, (e & Ln) !== 0 && (e & Sn) !== 0 && i !== null && (i.f |= Sn)), i !== null && (i.parent = r, r !== null && gp(i, r), Me !== null && (Me.f & ct) !== 0 && (e & Jn) === 0)) {
    var s = (
      /** @type {Derived} */
      Me
    );
    (s.effects ??= []).push(i);
  }
  return o;
}
function eo() {
  return Me !== null && !cn;
}
function Si(e) {
  const t = Bt(xi, null, !1);
  return vt(t, gt), t.teardown = e, t;
}
function qe(e) {
  uu();
  var t = (
    /** @type {Effect} */
    Ne.f
  ), n = !Me && (t & Tn) !== 0 && (t & Ci) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      Ye
    );
    (r.e ??= []).push(e);
  } else
    return cu(e);
}
function cu(e) {
  return Bt(Ms | Zl, e, !1);
}
function du(e) {
  return uu(), Bt(xi | Zl, e, !0);
}
function js(e) {
  Gt.ensure();
  const t = Bt(Jn | gr, e, !0);
  return () => {
    ot(t);
  };
}
function vp(e) {
  Gt.ensure();
  const t = Bt(Jn | gr, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? $r(t, () => {
      ot(t), r(void 0);
    }) : (ot(t), r(void 0));
  });
}
function Zr(e) {
  return Bt(Ms, e, !1);
}
function mp(e) {
  return Bt(Ds | gr, e, !0);
}
function wo(e, t = 0) {
  return Bt(xi | t, e, !0);
}
function Ce(e, t = [], n = [], r = []) {
  Ql(r, t, n, (o) => {
    Bt(xi, () => e(...o.map(c)), !0);
  });
}
function jr(e, t = 0) {
  var n = Bt(Ln | t, e, !0);
  return n;
}
function fu(e, t = 0) {
  var n = Bt(Al | t, e, !0);
  return n;
}
function Vt(e) {
  return Bt(Tn | gr, e, !0);
}
function pu(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = mr, r = Me;
    _a(!0), _t(null);
    try {
      t.call(null);
    } finally {
      _a(n), _t(r);
    }
  }
}
function hu(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const o = n.ac;
    o !== null && Zs(() => {
      o.abort(br);
    });
    var r = n.next;
    (n.f & Jn) !== 0 ? n.parent = null : ot(n, t), n = r;
  }
}
function yp(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & Tn) === 0 && ot(t), t = n;
  }
}
function ot(e, t = !0) {
  var n = !1;
  (t || (e.f & Il) !== 0) && e.nodes_start !== null && e.nodes_end !== null && (gu(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), n = !0), hu(e, t && !n), ti(e, 0), vt(e, _n);
  var r = e.transitions;
  if (r !== null)
    for (const i of r)
      i.stop();
  pu(e);
  var o = e.parent;
  o !== null && o.first !== null && vu(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = e.ac = null;
}
function gu(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ tn(e)
    );
    e.remove(), e = n;
  }
}
function vu(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function $r(e, t, n = !0) {
  var r = [];
  Ks(e, r, !0), mu(r, () => {
    n && ot(e), t && t();
  });
}
function mu(e, t) {
  var n = e.length;
  if (n > 0) {
    var r = () => --n || t();
    for (var o of e)
      o.out(r);
  } else
    t();
}
function Ks(e, t, n) {
  if ((e.f & Dt) === 0) {
    if (e.f ^= Dt, e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || n) && t.push(s);
    for (var r = e.first; r !== null; ) {
      var o = r.next, i = (r.f & Sn) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (r.f & Tn) !== 0 && (e.f & Ln) !== 0;
      Ks(r, t, i ? n : !1), r = o;
    }
  }
}
function Rs(e) {
  yu(e, !0);
}
function yu(e, t) {
  if ((e.f & Dt) !== 0) {
    e.f ^= Dt, (e.f & gt) === 0 && (vt(e, Et), cr(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, o = (n.f & Sn) !== 0 || (n.f & Tn) !== 0;
      yu(n, o ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || t) && i.in();
  }
}
function wu(e, t) {
  for (var n = e.nodes_start, r = e.nodes_end; n !== null; ) {
    var o = n === r ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ tn(n)
    );
    t.append(n), n = o;
  }
}
let Bn = !1;
function ei(e) {
  Bn = e;
}
let mr = !1;
function _a(e) {
  mr = e;
}
let Me = null, cn = !1;
function _t(e) {
  Me = e;
}
let Ne = null;
function Rt(e) {
  Ne = e;
}
let kn = null;
function bu(e) {
  Me !== null && (kn === null ? kn = [e] : kn.push(e));
}
let xt = null, Tt = 0, At = null;
function wp(e) {
  At = e;
}
let xu = 1, to = 0, sr = to;
function ka(e) {
  sr = e;
}
function $u() {
  return ++xu;
}
function bo(e) {
  var t = e.f;
  if ((t & Et) !== 0)
    return !0;
  if (t & ct && (e.f &= -32769), (t & Vn) !== 0) {
    var n = e.deps;
    if (n !== null)
      for (var r = n.length, o = 0; o < r; o++) {
        var i = n[o];
        if (bo(
          /** @type {Derived} */
          i
        ) && tu(
          /** @type {Derived} */
          i
        ), i.wv > e.wv)
          return !0;
      }
    (t & Ut) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    Zt === null && vt(e, gt);
  }
  return !1;
}
function Cu(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !kn?.includes(e))
    for (var o = 0; o < r.length; o++) {
      var i = r[o];
      (i.f & ct) !== 0 ? Cu(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? vt(i, Et) : (i.f & gt) !== 0 && vt(i, Vn), cr(
        /** @type {Effect} */
        i
      ));
    }
}
function _u(e) {
  var t = xt, n = Tt, r = At, o = Me, i = kn, s = Ye, a = cn, l = sr, u = e.f;
  xt = /** @type {null | Value[]} */
  null, Tt = 0, At = null, Me = (u & (Tn | Jn)) === 0 ? e : null, kn = null, Er(e.ctx), cn = !1, sr = ++to, e.ac !== null && (Zs(() => {
    e.ac.abort(br);
  }), e.ac = null);
  try {
    e.f |= is;
    var d = (
      /** @type {Function} */
      e.fn
    ), p = d(), f = e.deps;
    if (xt !== null) {
      var h;
      if (ti(e, Tt), f !== null && Tt > 0)
        for (f.length = Tt + xt.length, h = 0; h < xt.length; h++)
          f[Tt + h] = xt[h];
      else
        e.deps = f = xt;
      if (Bn && eo() && (e.f & Ut) !== 0)
        for (h = Tt; h < f.length; h++)
          (f[h].reactions ??= []).push(e);
    } else f !== null && Tt < f.length && (ti(e, Tt), f.length = Tt);
    if (mo() && At !== null && !cn && f !== null && (e.f & (ct | Vn | Et)) === 0)
      for (h = 0; h < /** @type {Source[]} */
      At.length; h++)
        Cu(
          At[h],
          /** @type {Effect} */
          e
        );
    return o !== null && o !== e && (to++, At !== null && (r === null ? r = At : r.push(.../** @type {Source[]} */
    At))), (e.f & Kn) !== 0 && (e.f ^= Kn), p;
  } catch (y) {
    return Xl(y);
  } finally {
    e.f ^= is, xt = t, Tt = n, At = r, Me = o, kn = i, Er(s), cn = a, sr = l;
  }
}
function bp(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Tf.call(n, e);
    if (r !== -1) {
      var o = n.length - 1;
      o === 0 ? n = t.reactions = null : (n[r] = n[o], n.pop());
    }
  }
  n === null && (t.f & ct) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (xt === null || !xt.includes(t)) && (vt(t, Vn), (t.f & Ut) !== 0 && (t.f ^= Ut, t.f &= -32769), eu(
    /** @type {Derived} **/
    t
  ), ti(
    /** @type {Derived} **/
    t,
    0
  ));
}
function ti(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      bp(e, n[r]);
}
function no(e) {
  var t = e.f;
  if ((t & _n) === 0) {
    vt(e, gt);
    var n = Ne, r = Bn;
    Ne = e, Bn = !0;
    try {
      (t & (Ln | Al)) !== 0 ? yp(e) : hu(e), pu(e);
      var o = _u(e);
      e.teardown = typeof o == "function" ? o : null, e.wv = xu;
      var i;
      Lf && Ff && (e.f & Et) !== 0 && e.deps;
    } finally {
      Bn = r, Ne = n;
    }
  }
}
function c(e) {
  var t = e.f, n = (t & ct) !== 0;
  if (Me !== null && !cn) {
    var r = Ne !== null && (Ne.f & _n) !== 0;
    if (!r && !kn?.includes(e)) {
      var o = Me.deps;
      if ((Me.f & is) !== 0)
        e.rv < to && (e.rv = to, xt === null && o !== null && o[Tt] === e ? Tt++ : xt === null ? xt = [e] : xt.includes(e) || xt.push(e));
      else {
        (Me.deps ??= []).push(e);
        var i = e.reactions;
        i === null ? e.reactions = [Me] : i.includes(Me) || i.push(Me);
      }
    }
  }
  if (mr) {
    if (Rn.has(e))
      return Rn.get(e);
    if (n) {
      var s = (
        /** @type {Derived} */
        e
      ), a = s.v;
      return ((s.f & gt) === 0 && s.reactions !== null || Su(s)) && (a = As(s)), Rn.set(s, a), a;
    }
  } else n && (!Zt?.has(e) || We?.is_fork && !eo()) && (s = /** @type {Derived} */
  e, bo(s) && tu(s), Bn && eo() && (s.f & Ut) === 0 && ku(s));
  if (Zt?.has(e))
    return Zt.get(e);
  if ((e.f & Kn) !== 0)
    throw e.v;
  return e.v;
}
function ku(e) {
  if (e.deps !== null) {
    e.f ^= Ut;
    for (const t of e.deps)
      (t.reactions ??= []).push(e), (t.f & ct) !== 0 && (t.f & Ut) === 0 && ku(
        /** @type {Derived} */
        t
      );
  }
}
function Su(e) {
  if (e.v === at) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Rn.has(t) || (t.f & ct) !== 0 && Su(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function lt(e) {
  var t = cn;
  try {
    return cn = !0, e();
  } finally {
    cn = t;
  }
}
const xp = -7169;
function vt(e, t) {
  e.f = e.f & xp | t;
}
function $p(e, t) {
  var n = {};
  for (var r in e)
    t.includes(r) || (n[r] = e[r]);
  for (var o of Object.getOwnPropertySymbols(e))
    Object.propertyIsEnumerable.call(e, o) && !t.includes(o) && (n[o] = e[o]);
  return n;
}
function Bs(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (dn in e)
      us(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && dn in n && us(n);
      }
  }
}
function us(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e)
      try {
        us(e[r], t);
      } catch {
      }
    const n = bi(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = Ol(n);
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
const Eu = /* @__PURE__ */ new Set(), cs = /* @__PURE__ */ new Set();
function Ys(e, t, n, r = {}) {
  function o(i) {
    if (r.capture || Wr.call(t, i), !i.cancelBubble)
      return Zs(() => n?.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Un(() => {
    t.addEventListener(e, o, r);
  }) : t.addEventListener(e, o, r), o;
}
function ds(e, t, n, r = {}) {
  var o = Ys(t, e, n, r);
  return () => {
    e.removeEventListener(t, o, r);
  };
}
function ni(e, t, n, r, o) {
  var i = { capture: r, passive: o }, s = Ys(e, t, n, i);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && Si(() => {
    t.removeEventListener(e, s, i);
  });
}
function Qn(e) {
  for (var t = 0; t < e.length; t++)
    Eu.add(e[t]);
  for (var n of cs)
    n(e);
}
let Sa = null;
function Wr(e) {
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, o = e.composedPath?.() || [], i = (
    /** @type {null | Element} */
    o[0] || e.target
  );
  Sa = e;
  var s = 0, a = Sa === e && e.__root;
  if (a) {
    var l = o.indexOf(a);
    if (l !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var u = o.indexOf(t);
    if (u === -1)
      return;
    l <= u && (s = l);
  }
  if (i = /** @type {Element} */
  o[s] || e.target, i !== t) {
    Jo(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    var d = Me, p = Ne;
    _t(null), Rt(null);
    try {
      for (var f, h = []; i !== null; ) {
        var y = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var w = i["__" + r];
          w != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i) && w.call(i, e);
        } catch (m) {
          f ? h.push(m) : f = m;
        }
        if (e.cancelBubble || y === t || y === null)
          break;
        i = y;
      }
      if (f) {
        for (let m of h)
          queueMicrotask(() => {
            throw m;
          });
        throw f;
      }
    } finally {
      e.__root = t, delete e.currentTarget, _t(d), Rt(p);
    }
  }
}
function Ws(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
function St(e, t) {
  var n = (
    /** @type {Effect} */
    Ne
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function Q(e, t) {
  var n = (t & Ml) !== 0, r = (t & Sf) !== 0, o, i = !e.startsWith("<!>");
  return () => {
    if (xe)
      return St(Pe, null), Pe;
    o === void 0 && (o = Ws(i ? e : "<!>" + e), n || (o = /** @type {Node} */
    /* @__PURE__ */ tt(o)));
    var s = (
      /** @type {TemplateNode} */
      r || iu ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ tt(s)
      ), l = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      St(a, l);
    } else
      St(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function Cp(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), o = (t & Ml) !== 0, i = `<${n}>${r ? e : "<!>" + e}</${n}>`, s;
  return () => {
    if (xe)
      return St(Pe, null), Pe;
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        Ws(i)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ tt(a)
      );
      if (o)
        for (s = document.createDocumentFragment(); /* @__PURE__ */ tt(l); )
          s.appendChild(
            /** @type {Node} */
            /* @__PURE__ */ tt(l)
          );
      else
        s = /** @type {Element} */
        /* @__PURE__ */ tt(l);
    }
    var u = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    if (o) {
      var d = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ tt(u)
      ), p = (
        /** @type {TemplateNode} */
        u.lastChild
      );
      St(d, p);
    } else
      St(u, u);
    return u;
  };
}
// @__NO_SIDE_EFFECTS__
function ve(e, t) {
  return /* @__PURE__ */ Cp(e, t, "svg");
}
function _e(e = "") {
  if (!xe) {
    var t = Pt(e + "");
    return St(t, t), t;
  }
  var n = Pe;
  return n.nodeType !== _i && (n.before(n = Pt()), Ue(n)), St(n, n), n;
}
function ke() {
  if (xe)
    return St(Pe, null), Pe;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = Pt();
  return e.append(t, n), St(t, n), e;
}
function V(e, t) {
  if (xe) {
    var n = (
      /** @type {Effect} */
      Ne
    );
    ((n.f & Ci) === 0 || n.nodes_end === null) && (n.nodes_end = Pe), En();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function _p(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const kp = [
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
function Sp(e) {
  return kp.includes(e);
}
const Ep = {
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
function Pp(e) {
  return e = e.toLowerCase(), Ep[e] ?? e;
}
const Np = ["touchstart", "touchmove"];
function Lp(e) {
  return Np.includes(e);
}
const Tp = (
  /** @type {const} */
  ["textarea", "script", "style", "title"]
);
function Vp(e) {
  return Tp.includes(
    /** @type {typeof RAW_TEXT_ELEMENTS[number]} */
    e
  );
}
function Re(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = n + "");
}
function Pu(e, t) {
  return Nu(e, t);
}
function Mp(e, t) {
  ls(), t.intro = t.intro ?? !1;
  const n = t.target, r = xe, o = Pe;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ tt(n)
    ); i && (i.nodeType !== vr || /** @type {Comment} */
    i.data !== Dl); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ tn(i);
    if (!i)
      throw ur;
    Mt(!0), Ue(
      /** @type {Comment} */
      i
    );
    const s = Nu(e, { ...t, anchor: i });
    return Mt(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s instanceof Error && s.message.split(`
`).some((a) => a.startsWith("https://svelte.dev/e/")))
      throw s;
    return s !== ur && console.warn("Failed to hydrate: ", s), t.recover === !1 && jf(), ls(), Is(n), Mt(!1), Pu(e, t);
  } finally {
    Mt(r), Ue(o);
  }
}
const yr = /* @__PURE__ */ new Map();
function Nu(e, { target: t, anchor: n, props: r = {}, events: o, context: i, intro: s = !0 }) {
  ls();
  var a = /* @__PURE__ */ new Set(), l = (p) => {
    for (var f = 0; f < p.length; f++) {
      var h = p[f];
      if (!a.has(h)) {
        a.add(h);
        var y = Lp(h);
        t.addEventListener(h, Wr, { passive: y });
        var w = yr.get(h);
        w === void 0 ? (document.addEventListener(h, Wr, { passive: y }), yr.set(h, 1)) : yr.set(h, w + 1);
      }
    }
  };
  l(Vs(Eu)), cs.add(l);
  var u = void 0, d = vp(() => {
    var p = n ?? t.appendChild(Pt());
    return np(
      /** @type {TemplateNode} */
      p,
      {
        pending: () => {
        }
      },
      (f) => {
        if (i) {
          ue({});
          var h = (
            /** @type {ComponentContext} */
            Ye
          );
          h.c = i;
        }
        if (o && (r.$$events = o), xe && St(
          /** @type {TemplateNode} */
          f,
          null
        ), u = e(f, r) || {}, xe && (Ne.nodes_end = Pe, Pe === null || Pe.nodeType !== vr || /** @type {Comment} */
        Pe.data !== Ts))
          throw vo(), ur;
        i && ce();
      }
    ), () => {
      for (var f of a) {
        t.removeEventListener(f, Wr);
        var h = (
          /** @type {number} */
          yr.get(f)
        );
        --h === 0 ? (document.removeEventListener(f, Wr), yr.delete(f)) : yr.set(f, h);
      }
      cs.delete(l), p !== n && p.parentNode?.removeChild(p);
    };
  });
  return fs.set(u, d), u;
}
let fs = /* @__PURE__ */ new WeakMap();
function Dp(e, t) {
  const n = fs.get(e);
  return n ? (fs.delete(e), n(t)) : Promise.resolve();
}
class Ei {
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
  #l = !0;
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, n = !0) {
    this.anchor = t, this.#l = n;
  }
  #a = () => {
    var t = (
      /** @type {Batch} */
      We
    );
    if (this.#e.has(t)) {
      var n = (
        /** @type {Key} */
        this.#e.get(t)
      ), r = this.#t.get(n);
      if (r)
        Rs(r), this.#r.delete(n);
      else {
        var o = this.#n.get(n);
        o && (this.#t.set(n, o.effect), this.#n.delete(n), o.fragment.lastChild.remove(), this.anchor.before(o.fragment), r = o.effect);
      }
      for (const [i, s] of this.#e) {
        if (this.#e.delete(i), i === t)
          break;
        const a = this.#n.get(s);
        a && (ot(a.effect), this.#n.delete(s));
      }
      for (const [i, s] of this.#t) {
        if (i === n || this.#r.has(i)) continue;
        const a = () => {
          if (Array.from(this.#e.values()).includes(i)) {
            var l = document.createDocumentFragment();
            wu(s, l), l.append(Pt()), this.#n.set(i, { effect: s, fragment: l });
          } else
            ot(s);
          this.#r.delete(i), this.#t.delete(i);
        };
        this.#l || !r ? (this.#r.add(i), $r(s, a, !1)) : a();
      }
    }
  };
  /**
   * @param {Batch} batch
   */
  #o = (t) => {
    this.#e.delete(t);
    const n = Array.from(this.#e.values());
    for (const [r, o] of this.#n)
      n.includes(r) || (ot(o.effect), this.#n.delete(r));
  };
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, n) {
    var r = (
      /** @type {Batch} */
      We
    ), o = lu();
    n && !this.#t.has(t) && !this.#n.has(t) && this.#t.set(
      t,
      Vt(() => n(this.anchor))
    ), this.#e.set(r, t), o || (xe && (this.anchor = Pe), this.#a());
  }
}
function Xe(e, t, ...n) {
  var r = new Ei(e);
  jr(() => {
    const o = t() ?? null;
    r.ensure(o, o && ((i) => o(i, ...n)));
  }, Sn);
}
function Mn(e) {
  Ye === null && zs(), Ir && Ye.l !== null ? Op(Ye).m.push(e) : qe(() => {
    const t = lt(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function xo(e) {
  Ye === null && zs(), Mn(() => () => lt(e));
}
function Op(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ??= { a: [], b: [], m: [] };
}
function se(e, t, n = !1) {
  xe && En();
  var r = new Ei(e), o = n ? Sn : 0;
  function i(s, a) {
    if (xe) {
      const u = jl(e) === yi;
      if (s === u) {
        var l = Uo();
        Ue(l), r.anchor = l, Mt(!1), r.ensure(s, a), Mt(!0);
        return;
      }
    }
    r.ensure(s, a);
  }
  jr(() => {
    var s = !1;
    t((a, l = !0) => {
      s = !0, i(l, a);
    }), s || i(!1, null);
  }, o);
}
function zp(e, t) {
  xe && Ue(
    /** @type {TemplateNode} */
    /* @__PURE__ */ tt(e)
  ), wo(() => {
    var n = t();
    for (var r in n) {
      var o = n[r];
      o ? e.style.setProperty(r, o) : e.style.removeProperty(r);
    }
  });
}
function qs(e, t, n = !1, r = !1, o = !1) {
  var i = e, s = "";
  Ce(() => {
    var a = (
      /** @type {Effect} */
      Ne
    );
    if (s === (s = t() ?? "")) {
      xe && En();
      return;
    }
    if (a.nodes_start !== null && (gu(
      a.nodes_start,
      /** @type {TemplateNode} */
      a.nodes_end
    ), a.nodes_start = a.nodes_end = null), s !== "") {
      if (xe) {
        Pe.data;
        for (var l = En(), u = l; l !== null && (l.nodeType !== vr || /** @type {Comment} */
        l.data !== ""); )
          u = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ tn(l);
        if (l === null)
          throw vo(), ur;
        St(Pe, u), i = Ue(l);
        return;
      }
      var d = s + "";
      n ? d = `<svg>${d}</svg>` : r && (d = `<math>${d}</math>`);
      var p = Ws(d);
      if ((n || r) && (p = /** @type {Element} */
      /* @__PURE__ */ tt(p)), St(
        /** @type {TemplateNode} */
        /* @__PURE__ */ tt(p),
        /** @type {TemplateNode} */
        p.lastChild
      ), n || r)
        for (; /* @__PURE__ */ tt(p); )
          i.before(
            /** @type {Node} */
            /* @__PURE__ */ tt(p)
          );
      else
        i.before(p);
    }
  });
}
function Pi(e, t, n) {
  xe && En();
  var r = new Ei(e);
  jr(() => {
    var o = t() ?? null;
    r.ensure(o, o && ((i) => n(i, o)));
  }, Sn);
}
function Hp(e, t, n, r, o, i) {
  let s = xe;
  xe && En();
  var a = null;
  xe && Pe.nodeType === Of && (a = /** @type {Element} */
  Pe, En());
  var l = (
    /** @type {TemplateNode} */
    xe ? Pe : e
  ), u = new Ei(l, !1);
  jr(() => {
    const d = t() || null;
    var p = d === "svg" ? Pf : null;
    if (d === null) {
      u.ensure(null, null);
      return;
    }
    return u.ensure(d, (f) => {
      if (d) {
        if (a = xe ? (
          /** @type {Element} */
          a
        ) : p ? document.createElementNS(p, d) : document.createElement(d), St(a, a), r) {
          xe && Vp(d) && a.append(document.createComment(""));
          var h = (
            /** @type {TemplateNode} */
            xe ? /* @__PURE__ */ tt(a) : a.appendChild(Pt())
          );
          xe && (h === null ? Mt(!1) : Ue(h)), r(a, h);
        }
        Ne.nodes_end = a, f.before(a);
      }
      xe && Ue(f);
    }), () => {
    };
  }, Sn), Si(() => {
  }), s && (Mt(!0), Ue(l));
}
function He(e, t) {
  Zr(() => {
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
function ht(e, t, n) {
  Zr(() => {
    var r = lt(() => t(e, n?.()) || {});
    if (n && r?.update) {
      var o = !1, i = (
        /** @type {any} */
        {}
      );
      wo(() => {
        var s = n();
        Bs(s), o && Rl(i, s) && (i = s, r.update(s));
      }), o = !0;
    }
    if (r?.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function Ap(e, t) {
  var n = void 0, r;
  fu(() => {
    n !== (n = t()) && (r && (ot(r), r = null), n && (r = Vt(() => {
      Zr(() => (
        /** @type {(node: Element) => void} */
        n(e)
      ));
    })));
  });
}
function Lu(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Lu(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Ip() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Lu(e)) && (r && (r += " "), r += t);
  return r;
}
function Dn(e) {
  return typeof e == "object" ? Ip(e) : e ?? "";
}
const Ea = [...` 	
\r\f \v\uFEFF`];
function Zp(e, t, n) {
  var r = e == null ? "" : "" + e;
  if (t && (r = r ? r + " " + t : t), n) {
    for (var o in n)
      if (n[o])
        r = r ? r + " " + o : o;
      else if (r.length)
        for (var i = o.length, s = 0; (s = r.indexOf(o, s)) >= 0; ) {
          var a = s + i;
          (s === 0 || Ea.includes(r[s - 1])) && (a === r.length || Ea.includes(r[a])) ? r = (s === 0 ? "" : r.substring(0, s)) + r.substring(a + 1) : s = a;
        }
  }
  return r === "" ? null : r;
}
function Pa(e, t = !1) {
  var n = t ? " !important;" : ";", r = "";
  for (var o in e) {
    var i = e[o];
    i != null && i !== "" && (r += " " + o + ": " + i + n);
  }
  return r;
}
function Ri(e) {
  return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function jp(e, t) {
  if (t) {
    var n = "", r, o;
    if (Array.isArray(t) ? (r = t[0], o = t[1]) : r = t, e) {
      e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var i = !1, s = 0, a = !1, l = [];
      r && l.push(...Object.keys(r).map(Ri)), o && l.push(...Object.keys(o).map(Ri));
      var u = 0, d = -1;
      const w = e.length;
      for (var p = 0; p < w; p++) {
        var f = e[p];
        if (a ? f === "/" && e[p - 1] === "*" && (a = !1) : i ? i === f && (i = !1) : f === "/" && e[p + 1] === "*" ? a = !0 : f === '"' || f === "'" ? i = f : f === "(" ? s++ : f === ")" && s--, !a && i === !1 && s === 0) {
          if (f === ":" && d === -1)
            d = p;
          else if (f === ";" || p === w - 1) {
            if (d !== -1) {
              var h = Ri(e.substring(u, d).trim());
              if (!l.includes(h)) {
                f !== ";" && p++;
                var y = e.substring(u, p).trim();
                n += " " + y + ";";
              }
            }
            u = p + 1, d = -1;
          }
        }
      }
    }
    return r && (n += Pa(r)), o && (n += Pa(o, !0)), n = n.trim(), n === "" ? null : n;
  }
  return e == null ? null : String(e);
}
function Nt(e, t, n, r, o, i) {
  var s = e.__className;
  if (xe || s !== n || s === void 0) {
    var a = Zp(n, r, i);
    (!xe || a !== e.getAttribute("class")) && (a == null ? e.removeAttribute("class") : t ? e.className = a : e.setAttribute("class", a)), e.__className = n;
  } else if (i && o !== i)
    for (var l in i) {
      var u = !!i[l];
      (o == null || u !== !!o[l]) && e.classList.toggle(l, u);
    }
  return i;
}
function Bi(e, t = {}, n, r) {
  for (var o in n) {
    var i = n[o];
    t[o] !== i && (n[o] == null ? e.style.removeProperty(o) : e.style.setProperty(o, i, r));
  }
}
function dt(e, t, n, r) {
  var o = e.__style;
  if (xe || o !== t) {
    var i = jp(t, r);
    (!xe || i !== e.getAttribute("style")) && (i == null ? e.removeAttribute("style") : e.style.cssText = i), e.__style = t;
  } else r && (Array.isArray(r) ? (Bi(e, n?.[0], r[0]), Bi(e, n?.[1], r[1], "important")) : Bi(e, n, r));
  return r;
}
function ps(e, t, n = !1) {
  if (e.multiple) {
    if (t == null)
      return;
    if (!wi(t))
      return qf();
    for (var r of e.options)
      r.selected = t.includes(Na(r));
    return;
  }
  for (r of e.options) {
    var o = Na(r);
    if (dp(o, t)) {
      r.selected = !0;
      return;
    }
  }
  (!n || t !== void 0) && (e.selectedIndex = -1);
}
function Kp(e) {
  var t = new MutationObserver(() => {
    ps(e, e.__value);
  });
  t.observe(e, {
    // Listen to option element changes
    childList: !0,
    subtree: !0,
    // because of <optgroup>
    // Listen to option element value attribute changes
    // (doesn't get notified of select value changes,
    // because that property is not reflected as an attribute)
    attributes: !0,
    attributeFilter: ["value"]
  }), Si(() => {
    t.disconnect();
  });
}
function Na(e) {
  return "__value" in e ? e.__value : e.value;
}
const In = Symbol("class"), un = Symbol("style"), Tu = Symbol("is custom element"), Vu = Symbol("is html");
function Yn(e) {
  if (xe) {
    var t = !1, n = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var r = e.value;
          $e(e, "value", null), e.value = r;
        }
        if (e.hasAttribute("checked")) {
          var o = e.checked;
          $e(e, "checked", null), e.checked = o;
        }
      }
    };
    e.__on_r = n, Un(n), hp();
  }
}
function Ro(e, t) {
  var n = Ni(e);
  n.value === (n.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function Yi(e, t) {
  var n = Ni(e);
  n.checked !== (n.checked = // treat null and undefined the same for the initial value
  t ?? void 0) && (e.checked = t);
}
function Rp(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function $e(e, t, n, r) {
  var o = Ni(e);
  xe && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = n) && (t === "loading" && (e[Df] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Mu(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function Bp(e, t, n, r, o = !1, i = !1) {
  if (xe && o && e.tagName === "INPUT") {
    var s = (
      /** @type {HTMLInputElement} */
      e
    ), a = s.type === "checkbox" ? "defaultChecked" : "defaultValue";
    a in n || Yn(s);
  }
  var l = Ni(e), u = l[Tu], d = !l[Vu];
  let p = xe && u;
  p && Mt(!1);
  var f = t || {}, h = e.tagName === "OPTION";
  for (var y in t)
    y in n || (n[y] = null);
  n.class ? n.class = Dn(n.class) : (r || n[In]) && (n.class = null), n[un] && (n.style ??= null);
  var w = Mu(e);
  for (const L in n) {
    let D = n[L];
    if (h && L === "value" && D == null) {
      e.value = e.__value = "", f[L] = D;
      continue;
    }
    if (L === "class") {
      var m = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      Nt(e, m, D, r, t?.[In], n[In]), f[L] = D, f[In] = n[In];
      continue;
    }
    if (L === "style") {
      dt(e, D, t?.[un], n[un]), f[L] = D, f[un] = n[un];
      continue;
    }
    var b = f[L];
    if (!(D === b && !(D === void 0 && e.hasAttribute(L)))) {
      f[L] = D;
      var $ = L[0] + L[1];
      if ($ !== "$$")
        if ($ === "on") {
          const j = {}, H = "$$" + L;
          let A = L.slice(2);
          var _ = Sp(A);
          if (_p(A) && (A = A.slice(0, -7), j.capture = !0), !_ && b) {
            if (D != null) continue;
            e.removeEventListener(A, f[H], j), f[H] = null;
          }
          if (D != null)
            if (_)
              e[`__${A}`] = D, Qn([A]);
            else {
              let z = function(S) {
                f[L].call(this, S);
              };
              f[H] = Ys(A, e, z, j);
            }
          else _ && (e[`__${A}`] = void 0);
        } else if (L === "style")
          $e(e, L, D);
        else if (L === "autofocus")
          fp(
            /** @type {HTMLElement} */
            e,
            !!D
          );
        else if (!u && (L === "__value" || L === "value" && D != null))
          e.value = e.__value = D;
        else if (L === "selected" && h)
          Rp(
            /** @type {HTMLOptionElement} */
            e,
            D
          );
        else {
          var x = L;
          d || (x = Pp(x));
          var k = x === "defaultValue" || x === "defaultChecked";
          if (D == null && !u && !k)
            if (l[L] = null, x === "value" || x === "checked") {
              let j = (
                /** @type {HTMLInputElement} */
                e
              );
              const H = t === void 0;
              if (x === "value") {
                let A = j.defaultValue;
                j.removeAttribute(x), j.defaultValue = A, j.value = j.__value = H ? A : null;
              } else {
                let A = j.defaultChecked;
                j.removeAttribute(x), j.defaultChecked = A, j.checked = H ? A : !1;
              }
            } else
              e.removeAttribute(L);
          else k || w.includes(x) && (u || typeof D != "string") ? (e[x] = D, x in l && (l[x] = at)) : typeof D != "function" && $e(e, x, D);
        }
    }
  }
  return p && Mt(!0), f;
}
function nt(e, t, n = [], r = [], o = [], i, s = !1, a = !1) {
  Ql(o, n, r, (l) => {
    var u = void 0, d = {}, p = e.nodeName === "SELECT", f = !1;
    if (fu(() => {
      var y = t(...l.map(c)), w = Bp(
        e,
        u,
        y,
        i,
        s,
        a
      );
      f && p && "value" in y && ps(
        /** @type {HTMLSelectElement} */
        e,
        y.value
      );
      for (let b of Object.getOwnPropertySymbols(d))
        y[b] || ot(d[b]);
      for (let b of Object.getOwnPropertySymbols(y)) {
        var m = y[b];
        b.description === Nf && (!u || m !== u[b]) && (d[b] && ot(d[b]), d[b] = Vt(() => Ap(e, () => m))), w[b] = m;
      }
      u = w;
    }), p) {
      var h = (
        /** @type {HTMLSelectElement} */
        e
      );
      Zr(() => {
        ps(
          h,
          /** @type {Record<string | symbol, any>} */
          u.value,
          !0
        ), Kp(h);
      });
    }
    f = !0;
  });
}
function Ni(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ??= {
      [Tu]: e.nodeName.includes("-"),
      [Vu]: e.namespaceURI === Ef
    }
  );
}
var La = /* @__PURE__ */ new Map();
function Mu(e) {
  var t = e.getAttribute("is") || e.nodeName, n = La.get(t);
  if (n) return n;
  La.set(t, n = []);
  for (var r, o = e, i = Element.prototype; i !== o; ) {
    r = Ol(o);
    for (var s in r)
      r[s].set && n.push(s);
    o = bi(o);
  }
  return n;
}
class Xs {
  /** */
  #e = /* @__PURE__ */ new WeakMap();
  /** @type {ResizeObserver | undefined} */
  #t;
  /** @type {ResizeObserverOptions} */
  #n;
  /** @static */
  static entries = /* @__PURE__ */ new WeakMap();
  /** @param {ResizeObserverOptions} options */
  constructor(t) {
    this.#n = t;
  }
  /**
   * @param {Element} element
   * @param {(entry: ResizeObserverEntry) => any} listener
   */
  observe(t, n) {
    var r = this.#e.get(t) || /* @__PURE__ */ new Set();
    return r.add(n), this.#e.set(t, r), this.#r().observe(t, this.#n), () => {
      var o = this.#e.get(t);
      o.delete(n), o.size === 0 && (this.#e.delete(t), this.#t.unobserve(t));
    };
  }
  #r() {
    return this.#t ?? (this.#t = new ResizeObserver(
      /** @param {any} entries */
      (t) => {
        for (var n of t) {
          Xs.entries.set(n.target, n);
          for (var r of this.#e.get(n.target) || [])
            r(n);
        }
      }
    ));
  }
}
var Yp = /* @__PURE__ */ new Xs({
  box: "border-box"
});
function Ta(e, t, n) {
  var r = Yp.observe(e, () => n(e[t]));
  Zr(() => (lt(() => n(e[t])), r));
}
function Va(e, t) {
  return e === t || e?.[dn] === t;
}
function Lt(e = {}, t, n, r) {
  return Zr(() => {
    var o, i;
    return wo(() => {
      o = i, i = [], lt(() => {
        e !== n(...i) && (t(e, ...i), o && Va(n(...o), e) && t(null, ...o));
      });
    }), () => {
      Un(() => {
        i && Va(n(...i), e) && t(null, ...i);
      });
    };
  }), e;
}
function Du(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    Ye
  ), n = t.l.u;
  if (!n) return;
  let r = () => Bs(t.s);
  if (e) {
    let o = 0, i = (
      /** @type {Record<string, any>} */
      {}
    );
    const s = /* @__PURE__ */ yo(() => {
      let a = !1;
      const l = t.s;
      for (const u in l)
        l[u] !== i[u] && (i[u] = l[u], a = !0);
      return a && o++, o;
    });
    r = () => c(s);
  }
  n.b.length && du(() => {
    Ma(t, r), os(n.b);
  }), qe(() => {
    const o = lt(() => n.m.map(Mf));
    return () => {
      for (const i of o)
        typeof i == "function" && i();
    };
  }), n.a.length && qe(() => {
    Ma(t, r), os(n.a);
  });
}
function Ma(e, t) {
  if (e.l.s)
    for (const n of e.l.s) c(n);
  t();
}
let Oo = !1;
function Wp(e) {
  var t = Oo;
  try {
    return Oo = !1, [e(), Oo];
  } finally {
    Oo = t;
  }
}
const qp = {
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
function Ze(e, t, n) {
  return new Proxy(
    { props: e, exclude: t },
    qp
  );
}
const Xp = {
  get(e, t) {
    if (!e.exclude.includes(t))
      return c(e.version), t in e.special ? e.special[t]() : e.props[t];
  },
  set(e, t, n) {
    if (!(t in e.special)) {
      var r = Ne;
      try {
        Rt(e.parent_effect), e.special[t] = v(
          {
            get [t]() {
              return e.props[t];
            }
          },
          /** @type {string} */
          t,
          Vl
        );
      } finally {
        Rt(r);
      }
    }
    return e.special[t](n), xa(e.version), !0;
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
    return e.exclude.includes(t) || (e.exclude.push(t), xa(e.version)), !0;
  },
  has(e, t) {
    return e.exclude.includes(t) ? !1 : t in e.props;
  },
  ownKeys(e) {
    return Reflect.ownKeys(e.props).filter((t) => !e.exclude.includes(t));
  }
};
function Da(e, t) {
  return new Proxy(
    {
      props: e,
      exclude: t,
      special: {},
      version: qn(0),
      // TODO this is only necessary because we need to track component
      // destruction inside `prop`, because of `bind:this`, but it
      // seems likely that we can simplify `bind:this` instead
      parent_effect: (
        /** @type {Effect} */
        Ne
      )
    },
    Xp
  );
}
const Fp = {
  get(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (Rr(r) && (r = r()), typeof r == "object" && r !== null && t in r) return r[t];
    }
  },
  set(e, t, n) {
    let r = e.props.length;
    for (; r--; ) {
      let o = e.props[r];
      Rr(o) && (o = o());
      const i = Cn(o, t);
      if (i && i.set)
        return i.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (Rr(r) && (r = r()), typeof r == "object" && r !== null && t in r) {
        const o = Cn(r, t);
        return o && !o.configurable && (o.configurable = !0), o;
      }
    }
  },
  has(e, t) {
    if (t === dn || t === Os) return !1;
    for (let n of e.props)
      if (Rr(n) && (n = n()), n != null && t in n) return !0;
    return !1;
  },
  ownKeys(e) {
    const t = [];
    for (let n of e.props)
      if (Rr(n) && (n = n()), !!n) {
        for (const r in n)
          t.includes(r) || t.push(r);
        for (const r of Object.getOwnPropertySymbols(n))
          t.includes(r) || t.push(r);
      }
    return t;
  }
};
function Be(...e) {
  return new Proxy({ props: e }, Fp);
}
function v(e, t, n, r) {
  var o = !Ir || (n & Cf) !== 0, i = (n & _f) !== 0, s = (n & kf) !== 0, a = (
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
    var p = dn in e || Os in e;
    d = Cn(e, t)?.set ?? (p && t in e ? (_) => e[t] = _ : void 0);
  }
  var f, h = !1;
  i ? [f, h] = Wp(() => (
    /** @type {V} */
    e[t]
  )) : f = /** @type {V} */
  e[t], f === void 0 && r !== void 0 && (f = u(), d && (o && Kf(), d(f)));
  var y;
  if (o ? y = () => {
    var _ = (
      /** @type {V} */
      e[t]
    );
    return _ === void 0 ? u() : (l = !0, _);
  } : y = () => {
    var _ = (
      /** @type {V} */
      e[t]
    );
    return _ !== void 0 && (a = /** @type {V} */
    void 0), _ === void 0 ? a : _;
  }, o && (n & Vl) === 0)
    return y;
  if (d) {
    var w = e.$$legacy;
    return (
      /** @type {() => V} */
      function(_, x) {
        return arguments.length > 0 ? ((!o || !x || w || h) && d(x ? y() : _), _) : y();
      }
    );
  }
  var m = !1, b = ((n & $f) !== 0 ? yo : Hs)(() => (m = !1, y()));
  i && c(b);
  var $ = (
    /** @type {Effect} */
    Ne
  );
  return (
    /** @type {() => V} */
    function(_, x) {
      if (arguments.length > 0) {
        const k = x ? c(b) : o && i ? Kt(_) : _;
        return U(b, k), m = !0, a !== void 0 && (a = k), _;
      }
      return mr && m || ($.f & _n) !== 0 ? b.v : c(b);
    }
  );
}
function Gp(e) {
  return new Jp(e);
}
class Jp {
  /** @type {any} */
  #e;
  /** @type {Record<string, any>} */
  #t;
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    var n = /* @__PURE__ */ new Map(), r = (i, s) => {
      var a = /* @__PURE__ */ ru(s, !1, !1);
      return n.set(i, a), a;
    };
    const o = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(i, s) {
          return c(n.get(s) ?? r(s, Reflect.get(i, s)));
        },
        has(i, s) {
          return s === Os ? !0 : (c(n.get(s) ?? r(s, Reflect.get(i, s))), Reflect.has(i, s));
        },
        set(i, s, a) {
          return U(n.get(s) ?? r(s, a), a), Reflect.set(i, s, a);
        }
      }
    );
    this.#t = (t.hydrate ? Mp : Pu)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: o,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    }), (!t?.props?.$$host || t.sync === !1) && g(), this.#e = o.$$events;
    for (const i of Object.keys(this.#t))
      i === "$set" || i === "$destroy" || i === "$on" || Jo(this, i, {
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
      Dp(this.#t);
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    this.#t.$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, n) {
    this.#e[t] = this.#e[t] || [];
    const r = (...o) => n.call(this, ...o);
    return this.#e[t].push(r), () => {
      this.#e[t] = this.#e[t].filter(
        /** @param {any} fn */
        (o) => o !== r
      );
    };
  }
  $destroy() {
    this.#t.$destroy();
  }
}
let Ou;
typeof HTMLElement == "function" && (Ou = class extends HTMLElement {
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
  constructor(e, t, n) {
    super(), this.$$ctor = e, this.$$s = t, n && this.attachShadow({ mode: "open" });
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
          r !== "default" && (i.name = r), V(o, i);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const t = {}, n = Up(this);
      for (const r of this.$$s)
        r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = e(r), t.default = !0) : t[r] = e(r));
      for (const r of this.attributes) {
        const o = this.$$g_p(r.name);
        o in this.$$d || (this.$$d[o] = Bo(o, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = Gp({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: t,
          $$host: this
        }
      }), this.$$me = js(() => {
        wo(() => {
          this.$$r = !0;
          for (const r of Go(this.$$c)) {
            if (!this.$$p_d[r]?.reflect) continue;
            this.$$d[r] = this.$$c[r];
            const o = Bo(
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
  attributeChangedCallback(e, t, n) {
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = Bo(e, n, this.$$p_d, "toProp"), this.$$c?.$set({ [e]: this.$$d[e] }));
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
    return Go(this.$$p_d).find(
      (t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e
    ) || e;
  }
});
function Bo(e, t, n, r) {
  const o = n[e]?.type;
  if (t = o === "Boolean" && typeof t != "boolean" ? t != null : t, !r || !n[e])
    return t;
  if (r === "toAttribute")
    switch (o) {
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
    switch (o) {
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
function Up(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function ae(e, t, n, r, o, i) {
  let s = class extends Ou {
    constructor() {
      super(e, n, o), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Go(t).map(
        (a) => (t[a].attribute || a).toLowerCase()
      );
    }
  };
  return Go(t).forEach((a) => {
    Jo(s.prototype, a, {
      get() {
        return this.$$c && a in this.$$c ? this.$$c[a] : this.$$d[a];
      },
      set(l) {
        l = Bo(a, l, t), this.$$d[a] = l;
        var u = this.$$c;
        if (u) {
          var d = Cn(u, a)?.get;
          d ? u[a] = l : u.$set({ [a]: l });
        }
      }
    });
  }), r.forEach((a) => {
    Jo(s.prototype, a, {
      get() {
        return this.$$c?.[a];
      }
    });
  }), e.element = /** @type {any} */
  s, s;
}
var Qp = { value: () => {
} };
function Li() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new Yo(n);
}
function Yo(e) {
  this._ = e;
}
function eh(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
Yo.prototype = Li.prototype = {
  constructor: Yo,
  on: function(e, t) {
    var n = this._, r = eh(e + "", n), o, i = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++i < s; ) if ((o = (e = r[i]).type) && (o = th(n[o], e.name))) return o;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++i < s; )
      if (o = (e = r[i]).type) n[o] = Oa(n[o], e.name, t);
      else if (t == null) for (o in n) n[o] = Oa(n[o], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t) e[n] = t[n].slice();
    return new Yo(e);
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
function th(e, t) {
  for (var n = 0, r = e.length, o; n < r; ++n)
    if ((o = e[n]).name === t)
      return o.value;
}
function Oa(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = Qp, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var hs = "http://www.w3.org/1999/xhtml";
const za = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: hs,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Ti(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), za.hasOwnProperty(t) ? { space: za[t], local: e } : e;
}
function nh(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === hs && t.documentElement.namespaceURI === hs ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function rh(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function zu(e) {
  var t = Ti(e);
  return (t.local ? rh : nh)(t);
}
function oh() {
}
function Fs(e) {
  return e == null ? oh : function() {
    return this.querySelector(e);
  };
}
function ih(e) {
  typeof e != "function" && (e = Fs(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = new Array(s), l, u, d = 0; d < s; ++d)
      (l = i[d]) && (u = e.call(l, l.__data__, d, i)) && ("__data__" in l && (u.__data__ = l.__data__), a[d] = u);
  return new zt(r, this._parents);
}
function sh(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function ah() {
  return [];
}
function Hu(e) {
  return e == null ? ah : function() {
    return this.querySelectorAll(e);
  };
}
function lh(e) {
  return function() {
    return sh(e.apply(this, arguments));
  };
}
function uh(e) {
  typeof e == "function" ? e = lh(e) : e = Hu(e);
  for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
    for (var s = t[i], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && (r.push(e.call(l, l.__data__, u, s)), o.push(l));
  return new zt(r, o);
}
function Au(e) {
  return function() {
    return this.matches(e);
  };
}
function Iu(e) {
  return function(t) {
    return t.matches(e);
  };
}
var ch = Array.prototype.find;
function dh(e) {
  return function() {
    return ch.call(this.children, e);
  };
}
function fh() {
  return this.firstElementChild;
}
function ph(e) {
  return this.select(e == null ? fh : dh(typeof e == "function" ? e : Iu(e)));
}
var hh = Array.prototype.filter;
function gh() {
  return Array.from(this.children);
}
function vh(e) {
  return function() {
    return hh.call(this.children, e);
  };
}
function mh(e) {
  return this.selectAll(e == null ? gh : vh(typeof e == "function" ? e : Iu(e)));
}
function yh(e) {
  typeof e != "function" && (e = Au(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && a.push(l);
  return new zt(r, this._parents);
}
function Zu(e) {
  return new Array(e.length);
}
function wh() {
  return new zt(this._enter || this._groups.map(Zu), this._parents);
}
function ri(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
ri.prototype = {
  constructor: ri,
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
function bh(e) {
  return function() {
    return e;
  };
}
function xh(e, t, n, r, o, i) {
  for (var s = 0, a, l = t.length, u = i.length; s < u; ++s)
    (a = t[s]) ? (a.__data__ = i[s], r[s] = a) : n[s] = new ri(e, i[s]);
  for (; s < l; ++s)
    (a = t[s]) && (o[s] = a);
}
function $h(e, t, n, r, o, i, s) {
  var a, l, u = /* @__PURE__ */ new Map(), d = t.length, p = i.length, f = new Array(d), h;
  for (a = 0; a < d; ++a)
    (l = t[a]) && (f[a] = h = s.call(l, l.__data__, a, t) + "", u.has(h) ? o[a] = l : u.set(h, l));
  for (a = 0; a < p; ++a)
    h = s.call(e, i[a], a, i) + "", (l = u.get(h)) ? (r[a] = l, l.__data__ = i[a], u.delete(h)) : n[a] = new ri(e, i[a]);
  for (a = 0; a < d; ++a)
    (l = t[a]) && u.get(f[a]) === l && (o[a] = l);
}
function Ch(e) {
  return e.__data__;
}
function _h(e, t) {
  if (!arguments.length) return Array.from(this, Ch);
  var n = t ? $h : xh, r = this._parents, o = this._groups;
  typeof e != "function" && (e = bh(e));
  for (var i = o.length, s = new Array(i), a = new Array(i), l = new Array(i), u = 0; u < i; ++u) {
    var d = r[u], p = o[u], f = p.length, h = kh(e.call(d, d && d.__data__, u, r)), y = h.length, w = a[u] = new Array(y), m = s[u] = new Array(y), b = l[u] = new Array(f);
    n(d, p, w, m, b, h, t);
    for (var $ = 0, _ = 0, x, k; $ < y; ++$)
      if (x = w[$]) {
        for ($ >= _ && (_ = $ + 1); !(k = m[_]) && ++_ < y; ) ;
        x._next = k || null;
      }
  }
  return s = new zt(s, r), s._enter = a, s._exit = l, s;
}
function kh(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Sh() {
  return new zt(this._exit || this._groups.map(Zu), this._parents);
}
function Eh(e, t, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function Ph(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, i = r.length, s = Math.min(o, i), a = new Array(o), l = 0; l < s; ++l)
    for (var u = n[l], d = r[l], p = u.length, f = a[l] = new Array(p), h, y = 0; y < p; ++y)
      (h = u[y] || d[y]) && (f[y] = h);
  for (; l < o; ++l)
    a[l] = n[l];
  return new zt(a, this._parents);
}
function Nh() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, i = r[o], s; --o >= 0; )
      (s = r[o]) && (i && s.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(s, i), i = s);
  return this;
}
function Lh(e) {
  e || (e = Th);
  function t(p, f) {
    return p && f ? e(p.__data__, f.__data__) : !p - !f;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), i = 0; i < r; ++i) {
    for (var s = n[i], a = s.length, l = o[i] = new Array(a), u, d = 0; d < a; ++d)
      (u = s[d]) && (l[d] = u);
    l.sort(t);
  }
  return new zt(o, this._parents).order();
}
function Th(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Vh() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function Mh() {
  return Array.from(this);
}
function Dh() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length; o < i; ++o) {
      var s = r[o];
      if (s) return s;
    }
  return null;
}
function Oh() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function zh() {
  return !this.node();
}
function Hh(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], i = 0, s = o.length, a; i < s; ++i)
      (a = o[i]) && e.call(a, a.__data__, i, o);
  return this;
}
function Ah(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Ih(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Zh(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function jh(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function Kh(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function Rh(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function Bh(e, t) {
  var n = Ti(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? Ih : Ah : typeof t == "function" ? n.local ? Rh : Kh : n.local ? jh : Zh)(n, t));
}
function ju(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function Yh(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Wh(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function qh(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function Xh(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? Yh : typeof t == "function" ? qh : Wh)(e, t, n ?? "")) : Vr(this.node(), e);
}
function Vr(e, t) {
  return e.style.getPropertyValue(t) || ju(e).getComputedStyle(e, null).getPropertyValue(t);
}
function Fh(e) {
  return function() {
    delete this[e];
  };
}
function Gh(e, t) {
  return function() {
    this[e] = t;
  };
}
function Jh(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function Uh(e, t) {
  return arguments.length > 1 ? this.each((t == null ? Fh : typeof t == "function" ? Jh : Gh)(e, t)) : this.node()[e];
}
function Ku(e) {
  return e.trim().split(/^|\s+/);
}
function Gs(e) {
  return e.classList || new Ru(e);
}
function Ru(e) {
  this._node = e, this._names = Ku(e.getAttribute("class") || "");
}
Ru.prototype = {
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
function Bu(e, t) {
  for (var n = Gs(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function Yu(e, t) {
  for (var n = Gs(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
}
function Qh(e) {
  return function() {
    Bu(this, e);
  };
}
function eg(e) {
  return function() {
    Yu(this, e);
  };
}
function tg(e, t) {
  return function() {
    (t.apply(this, arguments) ? Bu : Yu)(this, e);
  };
}
function ng(e, t) {
  var n = Ku(e + "");
  if (arguments.length < 2) {
    for (var r = Gs(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? tg : t ? Qh : eg)(n, t));
}
function rg() {
  this.textContent = "";
}
function og(e) {
  return function() {
    this.textContent = e;
  };
}
function ig(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function sg(e) {
  return arguments.length ? this.each(e == null ? rg : (typeof e == "function" ? ig : og)(e)) : this.node().textContent;
}
function ag() {
  this.innerHTML = "";
}
function lg(e) {
  return function() {
    this.innerHTML = e;
  };
}
function ug(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function cg(e) {
  return arguments.length ? this.each(e == null ? ag : (typeof e == "function" ? ug : lg)(e)) : this.node().innerHTML;
}
function dg() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function fg() {
  return this.each(dg);
}
function pg() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function hg() {
  return this.each(pg);
}
function gg(e) {
  var t = typeof e == "function" ? e : zu(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function vg() {
  return null;
}
function mg(e, t) {
  var n = typeof e == "function" ? e : zu(e), r = t == null ? vg : typeof t == "function" ? t : Fs(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function yg() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function wg() {
  return this.each(yg);
}
function bg() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function xg() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function $g(e) {
  return this.select(e ? xg : bg);
}
function Cg(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function _g(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function kg(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", r = t.indexOf(".");
    return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n };
  });
}
function Sg(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, o = t.length, i; n < o; ++n)
        i = t[n], (!e.type || i.type === e.type) && i.name === e.name ? this.removeEventListener(i.type, i.listener, i.options) : t[++r] = i;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function Eg(e, t, n) {
  return function() {
    var r = this.__on, o, i = _g(t);
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
function Pg(e, t, n) {
  var r = kg(e + ""), o, i = r.length, s;
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
  for (a = t ? Eg : Sg, o = 0; o < i; ++o) this.each(a(r[o], t, n));
  return this;
}
function Wu(e, t, n) {
  var r = ju(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function Ng(e, t) {
  return function() {
    return Wu(this, e, t);
  };
}
function Lg(e, t) {
  return function() {
    return Wu(this, e, t.apply(this, arguments));
  };
}
function Tg(e, t) {
  return this.each((typeof t == "function" ? Lg : Ng)(e, t));
}
function* Vg() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length, s; o < i; ++o)
      (s = r[o]) && (yield s);
}
var qu = [null];
function zt(e, t) {
  this._groups = e, this._parents = t;
}
function $o() {
  return new zt([[document.documentElement]], qu);
}
function Mg() {
  return this;
}
zt.prototype = $o.prototype = {
  constructor: zt,
  select: ih,
  selectAll: uh,
  selectChild: ph,
  selectChildren: mh,
  filter: yh,
  data: _h,
  enter: wh,
  exit: Sh,
  join: Eh,
  merge: Ph,
  selection: Mg,
  order: Nh,
  sort: Lh,
  call: Vh,
  nodes: Mh,
  node: Dh,
  size: Oh,
  empty: zh,
  each: Hh,
  attr: Bh,
  style: Xh,
  property: Uh,
  classed: ng,
  text: sg,
  html: cg,
  raise: fg,
  lower: hg,
  append: gg,
  insert: mg,
  remove: wg,
  clone: $g,
  datum: Cg,
  on: Pg,
  dispatch: Tg,
  [Symbol.iterator]: Vg
};
function jt(e) {
  return typeof e == "string" ? new zt([[document.querySelector(e)]], [document.documentElement]) : new zt([[e]], qu);
}
function Dg(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function Xt(e, t) {
  if (e = Dg(e), t === void 0 && (t = e.currentTarget), t) {
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
const Og = { passive: !1 }, ro = { capture: !0, passive: !1 };
function Wi(e) {
  e.stopImmediatePropagation();
}
function Cr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Xu(e) {
  var t = e.document.documentElement, n = jt(e).on("dragstart.drag", Cr, ro);
  "onselectstart" in t ? n.on("selectstart.drag", Cr, ro) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function Fu(e, t) {
  var n = e.document.documentElement, r = jt(e).on("dragstart.drag", null);
  t && (r.on("click.drag", Cr, ro), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const zo = (e) => () => e;
function gs(e, {
  sourceEvent: t,
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
    _: { value: d }
  });
}
gs.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function zg(e) {
  return !e.ctrlKey && !e.button;
}
function Hg() {
  return this.parentNode;
}
function Ag(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function Ig() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Zg() {
  var e = zg, t = Hg, n = Ag, r = Ig, o = {}, i = Li("start", "drag", "end"), s = 0, a, l, u, d, p = 0;
  function f(x) {
    x.on("mousedown.drag", h).filter(r).on("touchstart.drag", m).on("touchmove.drag", b, Og).on("touchend.drag touchcancel.drag", $).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function h(x, k) {
    if (!(d || !e.call(this, x, k))) {
      var L = _(this, t.call(this, x, k), x, k, "mouse");
      L && (jt(x.view).on("mousemove.drag", y, ro).on("mouseup.drag", w, ro), Xu(x.view), Wi(x), u = !1, a = x.clientX, l = x.clientY, L("start", x));
    }
  }
  function y(x) {
    if (Cr(x), !u) {
      var k = x.clientX - a, L = x.clientY - l;
      u = k * k + L * L > p;
    }
    o.mouse("drag", x);
  }
  function w(x) {
    jt(x.view).on("mousemove.drag mouseup.drag", null), Fu(x.view, u), Cr(x), o.mouse("end", x);
  }
  function m(x, k) {
    if (e.call(this, x, k)) {
      var L = x.changedTouches, D = t.call(this, x, k), j = L.length, H, A;
      for (H = 0; H < j; ++H)
        (A = _(this, D, x, k, L[H].identifier, L[H])) && (Wi(x), A("start", x, L[H]));
    }
  }
  function b(x) {
    var k = x.changedTouches, L = k.length, D, j;
    for (D = 0; D < L; ++D)
      (j = o[k[D].identifier]) && (Cr(x), j("drag", x, k[D]));
  }
  function $(x) {
    var k = x.changedTouches, L = k.length, D, j;
    for (d && clearTimeout(d), d = setTimeout(function() {
      d = null;
    }, 500), D = 0; D < L; ++D)
      (j = o[k[D].identifier]) && (Wi(x), j("end", x, k[D]));
  }
  function _(x, k, L, D, j, H) {
    var A = i.copy(), z = Xt(H || L, k), S, T, C;
    if ((C = n.call(x, new gs("beforestart", {
      sourceEvent: L,
      target: f,
      identifier: j,
      active: s,
      x: z[0],
      y: z[1],
      dx: 0,
      dy: 0,
      dispatch: A
    }), D)) != null)
      return S = C.x - z[0] || 0, T = C.y - z[1] || 0, function P(N, K, Y) {
        var F = z, M;
        switch (N) {
          case "start":
            o[j] = P, M = s++;
            break;
          case "end":
            delete o[j], --s;
          // falls through
          case "drag":
            z = Xt(Y || K, k), M = s;
            break;
        }
        A.call(
          N,
          x,
          new gs(N, {
            sourceEvent: K,
            subject: C,
            target: f,
            identifier: j,
            active: M,
            x: z[0] + S,
            y: z[1] + T,
            dx: z[0] - F[0],
            dy: z[1] - F[1],
            dispatch: A
          }),
          D
        );
      };
  }
  return f.filter = function(x) {
    return arguments.length ? (e = typeof x == "function" ? x : zo(!!x), f) : e;
  }, f.container = function(x) {
    return arguments.length ? (t = typeof x == "function" ? x : zo(x), f) : t;
  }, f.subject = function(x) {
    return arguments.length ? (n = typeof x == "function" ? x : zo(x), f) : n;
  }, f.touchable = function(x) {
    return arguments.length ? (r = typeof x == "function" ? x : zo(!!x), f) : r;
  }, f.on = function() {
    var x = i.on.apply(i, arguments);
    return x === i ? f : x;
  }, f.clickDistance = function(x) {
    return arguments.length ? (p = (x = +x) * x, f) : Math.sqrt(p);
  }, f;
}
function Js(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function Gu(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function Co() {
}
var oo = 0.7, oi = 1 / oo, _r = "\\s*([+-]?\\d+)\\s*", io = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", fn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", jg = /^#([0-9a-f]{3,8})$/, Kg = new RegExp(`^rgb\\(${_r},${_r},${_r}\\)$`), Rg = new RegExp(`^rgb\\(${fn},${fn},${fn}\\)$`), Bg = new RegExp(`^rgba\\(${_r},${_r},${_r},${io}\\)$`), Yg = new RegExp(`^rgba\\(${fn},${fn},${fn},${io}\\)$`), Wg = new RegExp(`^hsl\\(${io},${fn},${fn}\\)$`), qg = new RegExp(`^hsla\\(${io},${fn},${fn},${io}\\)$`), Ha = {
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
Js(Co, dr, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Aa,
  // Deprecated! Use color.formatHex.
  formatHex: Aa,
  formatHex8: Xg,
  formatHsl: Fg,
  formatRgb: Ia,
  toString: Ia
});
function Aa() {
  return this.rgb().formatHex();
}
function Xg() {
  return this.rgb().formatHex8();
}
function Fg() {
  return Ju(this).formatHsl();
}
function Ia() {
  return this.rgb().formatRgb();
}
function dr(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = jg.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? Za(t) : n === 3 ? new kt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Ho(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Ho(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Kg.exec(e)) ? new kt(t[1], t[2], t[3], 1) : (t = Rg.exec(e)) ? new kt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Bg.exec(e)) ? Ho(t[1], t[2], t[3], t[4]) : (t = Yg.exec(e)) ? Ho(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Wg.exec(e)) ? Ra(t[1], t[2] / 100, t[3] / 100, 1) : (t = qg.exec(e)) ? Ra(t[1], t[2] / 100, t[3] / 100, t[4]) : Ha.hasOwnProperty(e) ? Za(Ha[e]) : e === "transparent" ? new kt(NaN, NaN, NaN, 0) : null;
}
function Za(e) {
  return new kt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Ho(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new kt(e, t, n, r);
}
function Gg(e) {
  return e instanceof Co || (e = dr(e)), e ? (e = e.rgb(), new kt(e.r, e.g, e.b, e.opacity)) : new kt();
}
function vs(e, t, n, r) {
  return arguments.length === 1 ? Gg(e) : new kt(e, t, n, r ?? 1);
}
function kt(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
Js(kt, vs, Gu(Co, {
  brighter(e) {
    return e = e == null ? oi : Math.pow(oi, e), new kt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? oo : Math.pow(oo, e), new kt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new kt(ar(this.r), ar(this.g), ar(this.b), ii(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: ja,
  // Deprecated! Use color.formatHex.
  formatHex: ja,
  formatHex8: Jg,
  formatRgb: Ka,
  toString: Ka
}));
function ja() {
  return `#${or(this.r)}${or(this.g)}${or(this.b)}`;
}
function Jg() {
  return `#${or(this.r)}${or(this.g)}${or(this.b)}${or((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Ka() {
  const e = ii(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${ar(this.r)}, ${ar(this.g)}, ${ar(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function ii(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function ar(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function or(e) {
  return e = ar(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Ra(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Ft(e, t, n, r);
}
function Ju(e) {
  if (e instanceof Ft) return new Ft(e.h, e.s, e.l, e.opacity);
  if (e instanceof Co || (e = dr(e)), !e) return new Ft();
  if (e instanceof Ft) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), s = NaN, a = i - o, l = (i + o) / 2;
  return a ? (t === i ? s = (n - r) / a + (n < r) * 6 : n === i ? s = (r - t) / a + 2 : s = (t - n) / a + 4, a /= l < 0.5 ? i + o : 2 - i - o, s *= 60) : a = l > 0 && l < 1 ? 0 : s, new Ft(s, a, l, e.opacity);
}
function Ug(e, t, n, r) {
  return arguments.length === 1 ? Ju(e) : new Ft(e, t, n, r ?? 1);
}
function Ft(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
Js(Ft, Ug, Gu(Co, {
  brighter(e) {
    return e = e == null ? oi : Math.pow(oi, e), new Ft(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? oo : Math.pow(oo, e), new Ft(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new kt(
      qi(e >= 240 ? e - 240 : e + 120, o, r),
      qi(e, o, r),
      qi(e < 120 ? e + 240 : e - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new Ft(Ba(this.h), Ao(this.s), Ao(this.l), ii(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = ii(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Ba(this.h)}, ${Ao(this.s) * 100}%, ${Ao(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Ba(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Ao(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function qi(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const Us = (e) => () => e;
function Qg(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function e1(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function t1(e) {
  return (e = +e) == 1 ? Uu : function(t, n) {
    return n - t ? e1(t, n, e) : Us(isNaN(t) ? n : t);
  };
}
function Uu(e, t) {
  var n = t - e;
  return n ? Qg(e, n) : Us(isNaN(e) ? t : e);
}
const si = function e(t) {
  var n = t1(t);
  function r(o, i) {
    var s = n((o = vs(o)).r, (i = vs(i)).r), a = n(o.g, i.g), l = n(o.b, i.b), u = Uu(o.opacity, i.opacity);
    return function(d) {
      return o.r = s(d), o.g = a(d), o.b = l(d), o.opacity = u(d), o + "";
    };
  }
  return r.gamma = e, r;
}(1);
function n1(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, r = t.slice(), o;
  return function(i) {
    for (o = 0; o < n; ++o) r[o] = e[o] * (1 - i) + t[o] * i;
    return r;
  };
}
function r1(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function o1(e, t) {
  var n = t ? t.length : 0, r = e ? Math.min(n, e.length) : 0, o = new Array(r), i = new Array(n), s;
  for (s = 0; s < r; ++s) o[s] = Ur(e[s], t[s]);
  for (; s < n; ++s) i[s] = t[s];
  return function(a) {
    for (s = 0; s < r; ++s) i[s] = o[s](a);
    return i;
  };
}
function i1(e, t) {
  var n = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(r) {
    return n.setTime(e * (1 - r) + t * r), n;
  };
}
function ln(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function s1(e, t) {
  var n = {}, r = {}, o;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (o in t)
    o in e ? n[o] = Ur(e[o], t[o]) : r[o] = t[o];
  return function(i) {
    for (o in n) r[o] = n[o](i);
    return r;
  };
}
var ms = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Xi = new RegExp(ms.source, "g");
function a1(e) {
  return function() {
    return e;
  };
}
function l1(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Qu(e, t) {
  var n = ms.lastIndex = Xi.lastIndex = 0, r, o, i, s = -1, a = [], l = [];
  for (e = e + "", t = t + ""; (r = ms.exec(e)) && (o = Xi.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), a[s] ? a[s] += i : a[++s] = i), (r = r[0]) === (o = o[0]) ? a[s] ? a[s] += o : a[++s] = o : (a[++s] = null, l.push({ i: s, x: ln(r, o) })), n = Xi.lastIndex;
  return n < t.length && (i = t.slice(n), a[s] ? a[s] += i : a[++s] = i), a.length < 2 ? l[0] ? l1(l[0].x) : a1(t) : (t = l.length, function(u) {
    for (var d = 0, p; d < t; ++d) a[(p = l[d]).i] = p.x(u);
    return a.join("");
  });
}
function Ur(e, t) {
  var n = typeof t, r;
  return t == null || n === "boolean" ? Us(t) : (n === "number" ? ln : n === "string" ? (r = dr(t)) ? (t = r, si) : Qu : t instanceof dr ? si : t instanceof Date ? i1 : r1(t) ? n1 : Array.isArray(t) ? o1 : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? s1 : ln)(e, t);
}
var Ya = 180 / Math.PI, ec = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function tc(e, t, n, r, o, i) {
  var s, a, l;
  return (s = Math.sqrt(e * e + t * t)) && (e /= s, t /= s), (l = e * n + t * r) && (n -= e * l, r -= t * l), (a = Math.sqrt(n * n + r * r)) && (n /= a, r /= a, l /= a), e * r < t * n && (e = -e, t = -t, l = -l, s = -s), {
    translateX: o,
    translateY: i,
    rotate: Math.atan2(t, e) * Ya,
    skewX: Math.atan(l) * Ya,
    scaleX: s,
    scaleY: a
  };
}
var Io;
function u1(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? ec : tc(t.a, t.b, t.c, t.d, t.e, t.f);
}
function c1(e) {
  return e == null || (Io || (Io = document.createElementNS("http://www.w3.org/2000/svg", "g")), Io.setAttribute("transform", e), !(e = Io.transform.baseVal.consolidate())) ? ec : (e = e.matrix, tc(e.a, e.b, e.c, e.d, e.e, e.f));
}
function nc(e, t, n, r) {
  function o(u) {
    return u.length ? u.pop() + " " : "";
  }
  function i(u, d, p, f, h, y) {
    if (u !== p || d !== f) {
      var w = h.push("translate(", null, t, null, n);
      y.push({ i: w - 4, x: ln(u, p) }, { i: w - 2, x: ln(d, f) });
    } else (p || f) && h.push("translate(" + p + t + f + n);
  }
  function s(u, d, p, f) {
    u !== d ? (u - d > 180 ? d += 360 : d - u > 180 && (u += 360), f.push({ i: p.push(o(p) + "rotate(", null, r) - 2, x: ln(u, d) })) : d && p.push(o(p) + "rotate(" + d + r);
  }
  function a(u, d, p, f) {
    u !== d ? f.push({ i: p.push(o(p) + "skewX(", null, r) - 2, x: ln(u, d) }) : d && p.push(o(p) + "skewX(" + d + r);
  }
  function l(u, d, p, f, h, y) {
    if (u !== p || d !== f) {
      var w = h.push(o(h) + "scale(", null, ",", null, ")");
      y.push({ i: w - 4, x: ln(u, p) }, { i: w - 2, x: ln(d, f) });
    } else (p !== 1 || f !== 1) && h.push(o(h) + "scale(" + p + "," + f + ")");
  }
  return function(u, d) {
    var p = [], f = [];
    return u = e(u), d = e(d), i(u.translateX, u.translateY, d.translateX, d.translateY, p, f), s(u.rotate, d.rotate, p, f), a(u.skewX, d.skewX, p, f), l(u.scaleX, u.scaleY, d.scaleX, d.scaleY, p, f), u = d = null, function(h) {
      for (var y = -1, w = f.length, m; ++y < w; ) p[(m = f[y]).i] = m.x(h);
      return p.join("");
    };
  };
}
var d1 = nc(u1, "px, ", "px)", "deg)"), f1 = nc(c1, ", ", ")", ")"), p1 = 1e-12;
function Wa(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function h1(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function g1(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const Wo = function e(t, n, r) {
  function o(i, s) {
    var a = i[0], l = i[1], u = i[2], d = s[0], p = s[1], f = s[2], h = d - a, y = p - l, w = h * h + y * y, m, b;
    if (w < p1)
      b = Math.log(f / u) / t, m = function(D) {
        return [
          a + D * h,
          l + D * y,
          u * Math.exp(t * D * b)
        ];
      };
    else {
      var $ = Math.sqrt(w), _ = (f * f - u * u + r * w) / (2 * u * n * $), x = (f * f - u * u - r * w) / (2 * f * n * $), k = Math.log(Math.sqrt(_ * _ + 1) - _), L = Math.log(Math.sqrt(x * x + 1) - x);
      b = (L - k) / t, m = function(D) {
        var j = D * b, H = Wa(k), A = u / (n * $) * (H * g1(t * j + k) - h1(k));
        return [
          a + A * h,
          l + A * y,
          u * H / Wa(t * j + k)
        ];
      };
    }
    return m.duration = b * 1e3 * t / Math.SQRT2, m;
  }
  return o.rho = function(i) {
    var s = Math.max(1e-3, +i), a = s * s, l = a * a;
    return e(s, a, l);
  }, o;
}(Math.SQRT2, 2, 4);
var Mr = 0, qr = 0, Br = 0, rc = 1e3, ai, Xr, li = 0, fr = 0, Vi = 0, so = typeof performance == "object" && performance.now ? performance : Date, oc = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function Qs() {
  return fr || (oc(v1), fr = so.now() + Vi);
}
function v1() {
  fr = 0;
}
function ui() {
  this._call = this._time = this._next = null;
}
ui.prototype = ic.prototype = {
  constructor: ui,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? Qs() : +n) + (t == null ? 0 : +t), !this._next && Xr !== this && (Xr ? Xr._next = this : ai = this, Xr = this), this._call = e, this._time = n, ys();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, ys());
  }
};
function ic(e, t, n) {
  var r = new ui();
  return r.restart(e, t, n), r;
}
function m1() {
  Qs(), ++Mr;
  for (var e = ai, t; e; )
    (t = fr - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --Mr;
}
function qa() {
  fr = (li = so.now()) + Vi, Mr = qr = 0;
  try {
    m1();
  } finally {
    Mr = 0, w1(), fr = 0;
  }
}
function y1() {
  var e = so.now(), t = e - li;
  t > rc && (Vi -= t, li = e);
}
function w1() {
  for (var e, t = ai, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : ai = n);
  Xr = e, ys(r);
}
function ys(e) {
  if (!Mr) {
    qr && (qr = clearTimeout(qr));
    var t = e - fr;
    t > 24 ? (e < 1 / 0 && (qr = setTimeout(qa, e - so.now() - Vi)), Br && (Br = clearInterval(Br))) : (Br || (li = so.now(), Br = setInterval(y1, rc)), Mr = 1, oc(qa));
  }
}
function Xa(e, t, n) {
  var r = new ui();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var b1 = Li("start", "end", "cancel", "interrupt"), x1 = [], sc = 0, Fa = 1, ws = 2, qo = 3, Ga = 4, bs = 5, Xo = 6;
function Mi(e, t, n, r, o, i) {
  var s = e.__transition;
  if (!s) e.__transition = {};
  else if (n in s) return;
  $1(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: b1,
    tween: x1,
    time: i.time,
    delay: i.delay,
    duration: i.duration,
    ease: i.ease,
    timer: null,
    state: sc
  });
}
function ea(e, t) {
  var n = nn(e, t);
  if (n.state > sc) throw new Error("too late; already scheduled");
  return n;
}
function vn(e, t) {
  var n = nn(e, t);
  if (n.state > qo) throw new Error("too late; already running");
  return n;
}
function nn(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function $1(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = ic(i, 0, n.time);
  function i(u) {
    n.state = Fa, n.timer.restart(s, n.delay, n.time), n.delay <= u && s(u - n.delay);
  }
  function s(u) {
    var d, p, f, h;
    if (n.state !== Fa) return l();
    for (d in r)
      if (h = r[d], h.name === n.name) {
        if (h.state === qo) return Xa(s);
        h.state === Ga ? (h.state = Xo, h.timer.stop(), h.on.call("interrupt", e, e.__data__, h.index, h.group), delete r[d]) : +d < t && (h.state = Xo, h.timer.stop(), h.on.call("cancel", e, e.__data__, h.index, h.group), delete r[d]);
      }
    if (Xa(function() {
      n.state === qo && (n.state = Ga, n.timer.restart(a, n.delay, n.time), a(u));
    }), n.state = ws, n.on.call("start", e, e.__data__, n.index, n.group), n.state === ws) {
      for (n.state = qo, o = new Array(f = n.tween.length), d = 0, p = -1; d < f; ++d)
        (h = n.tween[d].value.call(e, e.__data__, n.index, n.group)) && (o[++p] = h);
      o.length = p + 1;
    }
  }
  function a(u) {
    for (var d = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), n.state = bs, 1), p = -1, f = o.length; ++p < f; )
      o[p].call(e, d);
    n.state === bs && (n.on.call("end", e, e.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = Xo, n.timer.stop(), delete r[t];
    for (var u in r) return;
    delete e.__transition;
  }
}
function Fo(e, t) {
  var n = e.__transition, r, o, i = !0, s;
  if (n) {
    t = t == null ? null : t + "";
    for (s in n) {
      if ((r = n[s]).name !== t) {
        i = !1;
        continue;
      }
      o = r.state > ws && r.state < bs, r.state = Xo, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[s];
    }
    i && delete e.__transition;
  }
}
function C1(e) {
  return this.each(function() {
    Fo(this, e);
  });
}
function _1(e, t) {
  var n, r;
  return function() {
    var o = vn(this, e), i = o.tween;
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
function k1(e, t, n) {
  var r, o;
  if (typeof n != "function") throw new Error();
  return function() {
    var i = vn(this, e), s = i.tween;
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
function S1(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = nn(this.node(), n).tween, o = 0, i = r.length, s; o < i; ++o)
      if ((s = r[o]).name === e)
        return s.value;
    return null;
  }
  return this.each((t == null ? _1 : k1)(n, e, t));
}
function ta(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = vn(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return nn(o, r).value[t];
  };
}
function ac(e, t) {
  var n;
  return (typeof t == "number" ? ln : t instanceof dr ? si : (n = dr(t)) ? (t = n, si) : Qu)(e, t);
}
function E1(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function P1(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function N1(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttribute(e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function L1(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttributeNS(e.space, e.local);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function T1(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttribute(e) : (s = this.getAttribute(e), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a)));
  };
}
function V1(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttributeNS(e.space, e.local) : (s = this.getAttributeNS(e.space, e.local), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a)));
  };
}
function M1(e, t) {
  var n = Ti(e), r = n === "transform" ? f1 : ac;
  return this.attrTween(e, typeof t == "function" ? (n.local ? V1 : T1)(n, r, ta(this, "attr." + e, t)) : t == null ? (n.local ? P1 : E1)(n) : (n.local ? L1 : N1)(n, r, t));
}
function D1(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function O1(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function z1(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && O1(e, i)), n;
  }
  return o._value = t, o;
}
function H1(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && D1(e, i)), n;
  }
  return o._value = t, o;
}
function A1(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = Ti(e);
  return this.tween(n, (r.local ? z1 : H1)(r, t));
}
function I1(e, t) {
  return function() {
    ea(this, e).delay = +t.apply(this, arguments);
  };
}
function Z1(e, t) {
  return t = +t, function() {
    ea(this, e).delay = t;
  };
}
function j1(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? I1 : Z1)(t, e)) : nn(this.node(), t).delay;
}
function K1(e, t) {
  return function() {
    vn(this, e).duration = +t.apply(this, arguments);
  };
}
function R1(e, t) {
  return t = +t, function() {
    vn(this, e).duration = t;
  };
}
function B1(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? K1 : R1)(t, e)) : nn(this.node(), t).duration;
}
function Y1(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    vn(this, e).ease = t;
  };
}
function W1(e) {
  var t = this._id;
  return arguments.length ? this.each(Y1(t, e)) : nn(this.node(), t).ease;
}
function q1(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    vn(this, e).ease = n;
  };
}
function X1(e) {
  if (typeof e != "function") throw new Error();
  return this.each(q1(this._id, e));
}
function F1(e) {
  typeof e != "function" && (e = Au(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && a.push(l);
  return new Pn(r, this._parents, this._name, this._id);
}
function G1(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), s = new Array(r), a = 0; a < i; ++a)
    for (var l = t[a], u = n[a], d = l.length, p = s[a] = new Array(d), f, h = 0; h < d; ++h)
      (f = l[h] || u[h]) && (p[h] = f);
  for (; a < r; ++a)
    s[a] = t[a];
  return new Pn(s, this._parents, this._name, this._id);
}
function J1(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function U1(e, t, n) {
  var r, o, i = J1(t) ? ea : vn;
  return function() {
    var s = i(this, e), a = s.on;
    a !== r && (o = (r = a).copy()).on(t, n), s.on = o;
  };
}
function Q1(e, t) {
  var n = this._id;
  return arguments.length < 2 ? nn(this.node(), n).on.on(e) : this.each(U1(n, e, t));
}
function ev(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function tv() {
  return this.on("end.remove", ev(this._id));
}
function nv(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Fs(e));
  for (var r = this._groups, o = r.length, i = new Array(o), s = 0; s < o; ++s)
    for (var a = r[s], l = a.length, u = i[s] = new Array(l), d, p, f = 0; f < l; ++f)
      (d = a[f]) && (p = e.call(d, d.__data__, f, a)) && ("__data__" in d && (p.__data__ = d.__data__), u[f] = p, Mi(u[f], t, n, f, u, nn(d, n)));
  return new Pn(i, this._parents, t, n);
}
function rv(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Hu(e));
  for (var r = this._groups, o = r.length, i = [], s = [], a = 0; a < o; ++a)
    for (var l = r[a], u = l.length, d, p = 0; p < u; ++p)
      if (d = l[p]) {
        for (var f = e.call(d, d.__data__, p, l), h, y = nn(d, n), w = 0, m = f.length; w < m; ++w)
          (h = f[w]) && Mi(h, t, n, w, f, y);
        i.push(f), s.push(d);
      }
  return new Pn(i, s, t, n);
}
var ov = $o.prototype.constructor;
function iv() {
  return new ov(this._groups, this._parents);
}
function sv(e, t) {
  var n, r, o;
  return function() {
    var i = Vr(this, e), s = (this.style.removeProperty(e), Vr(this, e));
    return i === s ? null : i === n && s === r ? o : o = t(n = i, r = s);
  };
}
function lc(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function av(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = Vr(this, e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function lv(e, t, n) {
  var r, o, i;
  return function() {
    var s = Vr(this, e), a = n(this), l = a + "";
    return a == null && (l = a = (this.style.removeProperty(e), Vr(this, e))), s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a));
  };
}
function uv(e, t) {
  var n, r, o, i = "style." + t, s = "end." + i, a;
  return function() {
    var l = vn(this, e), u = l.on, d = l.value[i] == null ? a || (a = lc(t)) : void 0;
    (u !== n || o !== d) && (r = (n = u).copy()).on(s, o = d), l.on = r;
  };
}
function cv(e, t, n) {
  var r = (e += "") == "transform" ? d1 : ac;
  return t == null ? this.styleTween(e, sv(e, r)).on("end.style." + e, lc(e)) : typeof t == "function" ? this.styleTween(e, lv(e, r, ta(this, "style." + e, t))).each(uv(this._id, e)) : this.styleTween(e, av(e, r, t), n).on("end.style." + e, null);
}
function dv(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function fv(e, t, n) {
  var r, o;
  function i() {
    var s = t.apply(this, arguments);
    return s !== o && (r = (o = s) && dv(e, s, n)), r;
  }
  return i._value = t, i;
}
function pv(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  return this.tween(r, fv(e, t, n ?? ""));
}
function hv(e) {
  return function() {
    this.textContent = e;
  };
}
function gv(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function vv(e) {
  return this.tween("text", typeof e == "function" ? gv(ta(this, "text", e)) : hv(e == null ? "" : e + ""));
}
function mv(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function yv(e) {
  var t, n;
  function r() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && mv(o)), t;
  }
  return r._value = e, r;
}
function wv(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, yv(e));
}
function bv() {
  for (var e = this._name, t = this._id, n = uc(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, u = 0; u < a; ++u)
      if (l = s[u]) {
        var d = nn(l, t);
        Mi(l, e, n, u, s, {
          time: d.time + d.delay + d.duration,
          delay: 0,
          duration: d.duration,
          ease: d.ease
        });
      }
  return new Pn(r, this._parents, e, n);
}
function xv() {
  var e, t, n = this, r = n._id, o = n.size();
  return new Promise(function(i, s) {
    var a = { value: s }, l = { value: function() {
      --o === 0 && i();
    } };
    n.each(function() {
      var u = vn(this, r), d = u.on;
      d !== e && (t = (e = d).copy(), t._.cancel.push(a), t._.interrupt.push(a), t._.end.push(l)), u.on = t;
    }), o === 0 && i();
  });
}
var $v = 0;
function Pn(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function uc() {
  return ++$v;
}
var mn = $o.prototype;
Pn.prototype = {
  constructor: Pn,
  select: nv,
  selectAll: rv,
  selectChild: mn.selectChild,
  selectChildren: mn.selectChildren,
  filter: F1,
  merge: G1,
  selection: iv,
  transition: bv,
  call: mn.call,
  nodes: mn.nodes,
  node: mn.node,
  size: mn.size,
  empty: mn.empty,
  each: mn.each,
  on: Q1,
  attr: M1,
  attrTween: A1,
  style: cv,
  styleTween: pv,
  text: vv,
  textTween: wv,
  remove: tv,
  tween: S1,
  delay: j1,
  duration: B1,
  ease: W1,
  easeVarying: X1,
  end: xv,
  [Symbol.iterator]: mn[Symbol.iterator]
};
function Cv(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var _v = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Cv
};
function kv(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function Sv(e) {
  var t, n;
  e instanceof Pn ? (t = e._id, e = e._name) : (t = uc(), (n = _v).time = Qs(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && Mi(l, e, t, u, s, n || kv(l, t));
  return new Pn(r, this._parents, e, t);
}
$o.prototype.interrupt = C1;
$o.prototype.transition = Sv;
const Zo = (e) => () => e;
function Ev(e, {
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
function bn(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
bn.prototype = {
  constructor: bn,
  scale: function(e) {
    return e === 1 ? this : new bn(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new bn(this.k, this.x + this.k * e, this.y + this.k * t);
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
var Di = new bn(1, 0, 0);
cc.prototype = bn.prototype;
function cc(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return Di;
  return e.__zoom;
}
function Fi(e) {
  e.stopImmediatePropagation();
}
function Yr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Pv(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function Nv() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function Ja() {
  return this.__zoom || Di;
}
function Lv(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function Tv() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Vv(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0], o = e.invertX(t[1][0]) - n[1][0], i = e.invertY(t[0][1]) - n[0][1], s = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    s > i ? (i + s) / 2 : Math.min(0, i) || Math.max(0, s)
  );
}
function dc() {
  var e = Pv, t = Nv, n = Vv, r = Lv, o = Tv, i = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], a = 250, l = Wo, u = Li("start", "zoom", "end"), d, p, f, h = 500, y = 150, w = 0, m = 10;
  function b(C) {
    C.property("__zoom", Ja).on("wheel.zoom", j, { passive: !1 }).on("mousedown.zoom", H).on("dblclick.zoom", A).filter(o).on("touchstart.zoom", z).on("touchmove.zoom", S).on("touchend.zoom touchcancel.zoom", T).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  b.transform = function(C, P, N, K) {
    var Y = C.selection ? C.selection() : C;
    Y.property("__zoom", Ja), C !== Y ? k(C, P, N, K) : Y.interrupt().each(function() {
      L(this, arguments).event(K).start().zoom(null, typeof P == "function" ? P.apply(this, arguments) : P).end();
    });
  }, b.scaleBy = function(C, P, N, K) {
    b.scaleTo(C, function() {
      var Y = this.__zoom.k, F = typeof P == "function" ? P.apply(this, arguments) : P;
      return Y * F;
    }, N, K);
  }, b.scaleTo = function(C, P, N, K) {
    b.transform(C, function() {
      var Y = t.apply(this, arguments), F = this.__zoom, M = N == null ? x(Y) : typeof N == "function" ? N.apply(this, arguments) : N, W = F.invert(M), B = typeof P == "function" ? P.apply(this, arguments) : P;
      return n(_($(F, B), M, W), Y, s);
    }, N, K);
  }, b.translateBy = function(C, P, N, K) {
    b.transform(C, function() {
      return n(this.__zoom.translate(
        typeof P == "function" ? P.apply(this, arguments) : P,
        typeof N == "function" ? N.apply(this, arguments) : N
      ), t.apply(this, arguments), s);
    }, null, K);
  }, b.translateTo = function(C, P, N, K, Y) {
    b.transform(C, function() {
      var F = t.apply(this, arguments), M = this.__zoom, W = K == null ? x(F) : typeof K == "function" ? K.apply(this, arguments) : K;
      return n(Di.translate(W[0], W[1]).scale(M.k).translate(
        typeof P == "function" ? -P.apply(this, arguments) : -P,
        typeof N == "function" ? -N.apply(this, arguments) : -N
      ), F, s);
    }, K, Y);
  };
  function $(C, P) {
    return P = Math.max(i[0], Math.min(i[1], P)), P === C.k ? C : new bn(P, C.x, C.y);
  }
  function _(C, P, N) {
    var K = P[0] - N[0] * C.k, Y = P[1] - N[1] * C.k;
    return K === C.x && Y === C.y ? C : new bn(C.k, K, Y);
  }
  function x(C) {
    return [(+C[0][0] + +C[1][0]) / 2, (+C[0][1] + +C[1][1]) / 2];
  }
  function k(C, P, N, K) {
    C.on("start.zoom", function() {
      L(this, arguments).event(K).start();
    }).on("interrupt.zoom end.zoom", function() {
      L(this, arguments).event(K).end();
    }).tween("zoom", function() {
      var Y = this, F = arguments, M = L(Y, F).event(K), W = t.apply(Y, F), B = N == null ? x(W) : typeof N == "function" ? N.apply(Y, F) : N, G = Math.max(W[1][0] - W[0][0], W[1][1] - W[0][1]), I = Y.__zoom, X = typeof P == "function" ? P.apply(Y, F) : P, J = l(I.invert(B).concat(G / I.k), X.invert(B).concat(G / X.k));
      return function(te) {
        if (te === 1) te = X;
        else {
          var ne = J(te), ee = G / ne[2];
          te = new bn(ee, B[0] - ne[0] * ee, B[1] - ne[1] * ee);
        }
        M.zoom(null, te);
      };
    });
  }
  function L(C, P, N) {
    return !N && C.__zooming || new D(C, P);
  }
  function D(C, P) {
    this.that = C, this.args = P, this.active = 0, this.sourceEvent = null, this.extent = t.apply(C, P), this.taps = 0;
  }
  D.prototype = {
    event: function(C) {
      return C && (this.sourceEvent = C), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(C, P) {
      return this.mouse && C !== "mouse" && (this.mouse[1] = P.invert(this.mouse[0])), this.touch0 && C !== "touch" && (this.touch0[1] = P.invert(this.touch0[0])), this.touch1 && C !== "touch" && (this.touch1[1] = P.invert(this.touch1[0])), this.that.__zoom = P, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(C) {
      var P = jt(this.that).datum();
      u.call(
        C,
        this.that,
        new Ev(C, {
          sourceEvent: this.sourceEvent,
          target: b,
          transform: this.that.__zoom,
          dispatch: u
        }),
        P
      );
    }
  };
  function j(C, ...P) {
    if (!e.apply(this, arguments)) return;
    var N = L(this, P).event(C), K = this.__zoom, Y = Math.max(i[0], Math.min(i[1], K.k * Math.pow(2, r.apply(this, arguments)))), F = Xt(C);
    if (N.wheel)
      (N.mouse[0][0] !== F[0] || N.mouse[0][1] !== F[1]) && (N.mouse[1] = K.invert(N.mouse[0] = F)), clearTimeout(N.wheel);
    else {
      if (K.k === Y) return;
      N.mouse = [F, K.invert(F)], Fo(this), N.start();
    }
    Yr(C), N.wheel = setTimeout(M, y), N.zoom("mouse", n(_($(K, Y), N.mouse[0], N.mouse[1]), N.extent, s));
    function M() {
      N.wheel = null, N.end();
    }
  }
  function H(C, ...P) {
    if (f || !e.apply(this, arguments)) return;
    var N = C.currentTarget, K = L(this, P, !0).event(C), Y = jt(C.view).on("mousemove.zoom", B, !0).on("mouseup.zoom", G, !0), F = Xt(C, N), M = C.clientX, W = C.clientY;
    Xu(C.view), Fi(C), K.mouse = [F, this.__zoom.invert(F)], Fo(this), K.start();
    function B(I) {
      if (Yr(I), !K.moved) {
        var X = I.clientX - M, J = I.clientY - W;
        K.moved = X * X + J * J > w;
      }
      K.event(I).zoom("mouse", n(_(K.that.__zoom, K.mouse[0] = Xt(I, N), K.mouse[1]), K.extent, s));
    }
    function G(I) {
      Y.on("mousemove.zoom mouseup.zoom", null), Fu(I.view, K.moved), Yr(I), K.event(I).end();
    }
  }
  function A(C, ...P) {
    if (e.apply(this, arguments)) {
      var N = this.__zoom, K = Xt(C.changedTouches ? C.changedTouches[0] : C, this), Y = N.invert(K), F = N.k * (C.shiftKey ? 0.5 : 2), M = n(_($(N, F), K, Y), t.apply(this, P), s);
      Yr(C), a > 0 ? jt(this).transition().duration(a).call(k, M, K, C) : jt(this).call(b.transform, M, K, C);
    }
  }
  function z(C, ...P) {
    if (e.apply(this, arguments)) {
      var N = C.touches, K = N.length, Y = L(this, P, C.changedTouches.length === K).event(C), F, M, W, B;
      for (Fi(C), M = 0; M < K; ++M)
        W = N[M], B = Xt(W, this), B = [B, this.__zoom.invert(B), W.identifier], Y.touch0 ? !Y.touch1 && Y.touch0[2] !== B[2] && (Y.touch1 = B, Y.taps = 0) : (Y.touch0 = B, F = !0, Y.taps = 1 + !!d);
      d && (d = clearTimeout(d)), F && (Y.taps < 2 && (p = B[0], d = setTimeout(function() {
        d = null;
      }, h)), Fo(this), Y.start());
    }
  }
  function S(C, ...P) {
    if (this.__zooming) {
      var N = L(this, P).event(C), K = C.changedTouches, Y = K.length, F, M, W, B;
      for (Yr(C), F = 0; F < Y; ++F)
        M = K[F], W = Xt(M, this), N.touch0 && N.touch0[2] === M.identifier ? N.touch0[0] = W : N.touch1 && N.touch1[2] === M.identifier && (N.touch1[0] = W);
      if (M = N.that.__zoom, N.touch1) {
        var G = N.touch0[0], I = N.touch0[1], X = N.touch1[0], J = N.touch1[1], te = (te = X[0] - G[0]) * te + (te = X[1] - G[1]) * te, ne = (ne = J[0] - I[0]) * ne + (ne = J[1] - I[1]) * ne;
        M = $(M, Math.sqrt(te / ne)), W = [(G[0] + X[0]) / 2, (G[1] + X[1]) / 2], B = [(I[0] + J[0]) / 2, (I[1] + J[1]) / 2];
      } else if (N.touch0) W = N.touch0[0], B = N.touch0[1];
      else return;
      N.zoom("touch", n(_(M, W, B), N.extent, s));
    }
  }
  function T(C, ...P) {
    if (this.__zooming) {
      var N = L(this, P).event(C), K = C.changedTouches, Y = K.length, F, M;
      for (Fi(C), f && clearTimeout(f), f = setTimeout(function() {
        f = null;
      }, h), F = 0; F < Y; ++F)
        M = K[F], N.touch0 && N.touch0[2] === M.identifier ? delete N.touch0 : N.touch1 && N.touch1[2] === M.identifier && delete N.touch1;
      if (N.touch1 && !N.touch0 && (N.touch0 = N.touch1, delete N.touch1), N.touch0) N.touch0[1] = this.__zoom.invert(N.touch0[0]);
      else if (N.end(), N.taps === 2 && (M = Xt(M, this), Math.hypot(p[0] - M[0], p[1] - M[1]) < m)) {
        var W = jt(this).on("dblclick.zoom");
        W && W.apply(this, arguments);
      }
    }
  }
  return b.wheelDelta = function(C) {
    return arguments.length ? (r = typeof C == "function" ? C : Zo(+C), b) : r;
  }, b.filter = function(C) {
    return arguments.length ? (e = typeof C == "function" ? C : Zo(!!C), b) : e;
  }, b.touchable = function(C) {
    return arguments.length ? (o = typeof C == "function" ? C : Zo(!!C), b) : o;
  }, b.extent = function(C) {
    return arguments.length ? (t = typeof C == "function" ? C : Zo([[+C[0][0], +C[0][1]], [+C[1][0], +C[1][1]]]), b) : t;
  }, b.scaleExtent = function(C) {
    return arguments.length ? (i[0] = +C[0], i[1] = +C[1], b) : [i[0], i[1]];
  }, b.translateExtent = function(C) {
    return arguments.length ? (s[0][0] = +C[0][0], s[1][0] = +C[1][0], s[0][1] = +C[0][1], s[1][1] = +C[1][1], b) : [[s[0][0], s[0][1]], [s[1][0], s[1][1]]];
  }, b.constrain = function(C) {
    return arguments.length ? (n = C, b) : n;
  }, b.duration = function(C) {
    return arguments.length ? (a = +C, b) : a;
  }, b.interpolate = function(C) {
    return arguments.length ? (l = C, b) : l;
  }, b.on = function() {
    var C = u.on.apply(u, arguments);
    return C === u ? b : C;
  }, b.clickDistance = function(C) {
    return arguments.length ? (w = (C = +C) * C, b) : Math.sqrt(w);
  }, b.tapDistance = function(C) {
    return arguments.length ? (m = +C, b) : m;
  }, b;
}
const ao = {
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
}, xs = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
], fc = ["Enter", " ", "Escape"], Mv = {
  "node.a11yDescription.default": "Press enter or space to select a node. Press delete to remove it and escape to cancel.",
  "node.a11yDescription.keyboardDisabled": "Press enter or space to select a node. You can then use the arrow keys to move the node around. Press delete to remove it and escape to cancel.",
  "node.a11yDescription.ariaLiveMessage": ({ direction: e, x: t, y: n }) => `Moved selected node ${e}. New position, x: ${t}, y: ${n}`,
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
var Dr;
(function(e) {
  e.Strict = "strict", e.Loose = "loose";
})(Dr || (Dr = {}));
var lr;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(lr || (lr = {}));
var ci;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(ci || (ci = {}));
const $s = {
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
var wn;
(function(e) {
  e.Bezier = "default", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e.SimpleBezier = "simplebezier";
})(wn || (wn = {}));
var lo;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(lo || (lo = {}));
var ye;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(ye || (ye = {}));
const Ua = {
  [ye.Left]: ye.Right,
  [ye.Right]: ye.Left,
  [ye.Top]: ye.Bottom,
  [ye.Bottom]: ye.Top
};
function Dv(e, t) {
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
function Qa(e, t, n) {
  if (!n)
    return;
  const r = [];
  e.forEach((o, i) => {
    t?.has(i) || r.push(o);
  }), r.length && n(r);
}
function Ov(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const pc = (e) => "id" in e && "source" in e && "target" in e, zv = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), na = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), _o = (e, t = [0, 0]) => {
  const { width: n, height: r } = er(e), o = e.origin ?? t, i = n * o[0], s = r * o[1];
  return {
    x: e.position.x - i,
    y: e.position.y - s
  };
}, Hv = (e, t = { nodeOrigin: [0, 0] }) => {
  if (e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = e.reduce((r, o) => {
    const i = typeof o == "string";
    let s = !t.nodeLookup && !i ? o : void 0;
    t.nodeLookup && (s = i ? t.nodeLookup.get(o) : na(o) ? o : t.nodeLookup.get(o.id));
    const a = s ? di(s, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return Oi(r, a);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return zi(n);
}, ko = (e, t = {}) => {
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 }, r = !1;
  return e.forEach((o) => {
    (t.filter === void 0 || t.filter(o)) && (n = Oi(n, di(o)), r = !0);
  }), r ? zi(n) : { x: 0, y: 0, width: 0, height: 0 };
}, ra = (e, t, [n, r, o] = [0, 0, 1], i = !1, s = !1) => {
  const a = {
    ...Eo(t, [n, r, o]),
    width: t.width / o,
    height: t.height / o
  }, l = [];
  for (const u of e.values()) {
    const { measured: d, selectable: p = !0, hidden: f = !1 } = u;
    if (s && !p || f)
      continue;
    const h = d.width ?? u.width ?? u.initialWidth ?? null, y = d.height ?? u.height ?? u.initialHeight ?? null, w = uo(a, zr(u)), m = (h ?? 0) * (y ?? 0), b = i && w > 0;
    (!u.internals.handleBounds || b || w >= m || u.dragging) && l.push(u);
  }
  return l;
}, Av = (e, t) => {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    n.add(r.id);
  }), t.filter((r) => n.has(r.source) || n.has(r.target));
};
function Iv(e, t) {
  const n = /* @__PURE__ */ new Map(), r = t?.nodes ? new Set(t.nodes.map((o) => o.id)) : null;
  return e.forEach((o) => {
    o.measured.width && o.measured.height && (t?.includeHiddenNodes || !o.hidden) && (!r || r.has(o.id)) && n.set(o.id, o);
  }), n;
}
async function Zv({ nodes: e, width: t, height: n, panZoom: r, minZoom: o, maxZoom: i }, s) {
  if (e.size === 0)
    return Promise.resolve(!0);
  const a = Iv(e, s), l = ko(a), u = oa(l, t, n, s?.minZoom ?? o, s?.maxZoom ?? i, s?.padding ?? 0.1);
  return await r.setViewport(u, {
    duration: s?.duration,
    ease: s?.ease,
    interpolate: s?.interpolate
  }), Promise.resolve(!0);
}
function hc({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
  const s = n.get(e), a = s.parentId ? n.get(s.parentId) : void 0, { x: l, y: u } = a ? a.internals.positionAbsolute : { x: 0, y: 0 }, d = s.origin ?? r;
  let p = s.extent || o;
  if (s.extent === "parent" && !s.expandParent)
    if (!a)
      i?.("005", ao.error005());
    else {
      const h = a.measured.width, y = a.measured.height;
      h && y && (p = [
        [l, u],
        [l + h, u + y]
      ]);
    }
  else a && Hr(s.extent) && (p = [
    [s.extent[0][0] + l, s.extent[0][1] + u],
    [s.extent[1][0] + l, s.extent[1][1] + u]
  ]);
  const f = Hr(p) ? pr(t, p, s.measured) : t;
  return (s.measured.width === void 0 || s.measured.height === void 0) && i?.("015", ao.error015()), {
    position: {
      x: f.x - l + (s.measured.width ?? 0) * d[0],
      y: f.y - u + (s.measured.height ?? 0) * d[1]
    },
    positionAbsolute: f
  };
}
async function jv({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: r, onBeforeDelete: o }) {
  const i = new Set(e.map((p) => p.id)), s = [];
  for (const p of n) {
    if (p.deletable === !1)
      continue;
    const f = i.has(p.id), h = !f && p.parentId && s.find((y) => y.id === p.parentId);
    (f || h) && s.push(p);
  }
  const a = new Set(t.map((p) => p.id)), l = r.filter((p) => p.deletable !== !1), u = Av(s, l);
  for (const p of l)
    a.has(p.id) && !u.find((f) => f.id === p.id) && u.push(p);
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
const Or = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), pr = (e = { x: 0, y: 0 }, t, n) => ({
  x: Or(e.x, t[0][0], t[1][0] - (n?.width ?? 0)),
  y: Or(e.y, t[0][1], t[1][1] - (n?.height ?? 0))
});
function gc(e, t, n) {
  const { width: r, height: o } = er(n), { x: i, y: s } = n.internals.positionAbsolute;
  return pr(e, [
    [i, s],
    [i + r, s + o]
  ], t);
}
const el = (e, t, n) => e < t ? Or(Math.abs(e - t), 1, t) / t : e > n ? -Or(Math.abs(e - n), 1, t) / t : 0, vc = (e, t, n = 15, r = 40) => {
  const o = el(e.x, r, t.width - r) * n, i = el(e.y, r, t.height - r) * n;
  return [o, i];
}, Oi = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), Cs = ({ x: e, y: t, width: n, height: r }) => ({
  x: e,
  y: t,
  x2: e + n,
  y2: t + r
}), zi = ({ x: e, y: t, x2: n, y2: r }) => ({
  x: e,
  y: t,
  width: n - e,
  height: r - t
}), zr = (e, t = [0, 0]) => {
  const { x: n, y: r } = na(e) ? e.internals.positionAbsolute : _o(e, t);
  return {
    x: n,
    y: r,
    width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
    height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
  };
}, di = (e, t = [0, 0]) => {
  const { x: n, y: r } = na(e) ? e.internals.positionAbsolute : _o(e, t);
  return {
    x: n,
    y: r,
    x2: n + (e.measured?.width ?? e.width ?? e.initialWidth ?? 0),
    y2: r + (e.measured?.height ?? e.height ?? e.initialHeight ?? 0)
  };
}, mc = (e, t) => zi(Oi(Cs(e), Cs(t))), uo = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, tl = (e) => xn(e.width) && xn(e.height) && xn(e.x) && xn(e.y), xn = (e) => !isNaN(e) && isFinite(e), Kv = (e, t) => {
}, So = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), Eo = ({ x: e, y: t }, [n, r, o], i = !1, s = [1, 1]) => {
  const a = {
    x: (e - n) / o,
    y: (t - r) / o
  };
  return i ? So(a, s) : a;
}, fi = ({ x: e, y: t }, [n, r, o]) => ({
  x: e * o + n,
  y: t * o + r
});
function wr(e, t) {
  if (typeof e == "number")
    return Math.floor((t - t / (1 + e)) * 0.5);
  if (typeof e == "string" && e.endsWith("px")) {
    const n = parseFloat(e);
    if (!Number.isNaN(n))
      return Math.floor(n);
  }
  if (typeof e == "string" && e.endsWith("%")) {
    const n = parseFloat(e);
    if (!Number.isNaN(n))
      return Math.floor(t * n * 0.01);
  }
  return console.error(`[React Flow] The padding value "${e}" is invalid. Please provide a number or a string with a valid unit (px or %).`), 0;
}
function Rv(e, t, n) {
  if (typeof e == "string" || typeof e == "number") {
    const r = wr(e, n), o = wr(e, t);
    return {
      top: r,
      right: o,
      bottom: r,
      left: o,
      x: o * 2,
      y: r * 2
    };
  }
  if (typeof e == "object") {
    const r = wr(e.top ?? e.y ?? 0, n), o = wr(e.bottom ?? e.y ?? 0, n), i = wr(e.left ?? e.x ?? 0, t), s = wr(e.right ?? e.x ?? 0, t);
    return { top: r, right: s, bottom: o, left: i, x: i + s, y: r + o };
  }
  return { top: 0, right: 0, bottom: 0, left: 0, x: 0, y: 0 };
}
function Bv(e, t, n, r, o, i) {
  const { x: s, y: a } = fi(e, [t, n, r]), { x: l, y: u } = fi({ x: e.x + e.width, y: e.y + e.height }, [t, n, r]), d = o - l, p = i - u;
  return {
    left: Math.floor(s),
    top: Math.floor(a),
    right: Math.floor(d),
    bottom: Math.floor(p)
  };
}
const oa = (e, t, n, r, o, i) => {
  const s = Rv(i, t, n), a = (t - s.x) / e.width, l = (n - s.y) / e.height, u = Math.min(a, l), d = Or(u, r, o), p = e.x + e.width / 2, f = e.y + e.height / 2, h = t / 2 - p * d, y = n / 2 - f * d, w = Bv(e, h, y, d, t, n), m = {
    left: Math.min(w.left - s.left, 0),
    top: Math.min(w.top - s.top, 0),
    right: Math.min(w.right - s.right, 0),
    bottom: Math.min(w.bottom - s.bottom, 0)
  };
  return {
    x: h - m.left + m.right,
    y: y - m.top + m.bottom,
    zoom: d
  };
}, ir = () => typeof navigator < "u" && navigator?.userAgent?.indexOf("Mac") >= 0;
function Hr(e) {
  return e != null && e !== "parent";
}
function er(e) {
  return {
    width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
    height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
  };
}
function yc(e) {
  return (e.measured?.width ?? e.width ?? e.initialWidth) !== void 0 && (e.measured?.height ?? e.height ?? e.initialHeight) !== void 0;
}
function Yv(e, t = { width: 0, height: 0 }, n, r, o) {
  const i = { ...e }, s = r.get(n);
  if (s) {
    const a = s.origin || o;
    i.x += s.internals.positionAbsolute.x - (t.width ?? 0) * a[0], i.y += s.internals.positionAbsolute.y - (t.height ?? 0) * a[1];
  }
  return i;
}
function Wv(e) {
  return { ...Mv, ...e || {} };
}
function Gi(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: i, y: s } = Jt(e), a = Eo({ x: i - (o?.left ?? 0), y: s - (o?.top ?? 0) }, r), { x: l, y: u } = n ? So(a, t) : a;
  return {
    xSnapped: l,
    ySnapped: u,
    ...a
  };
}
const wc = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), bc = (e) => e?.getRootNode?.() || window?.document, qv = ["INPUT", "SELECT", "TEXTAREA"];
function xc(e) {
  const t = e.composedPath?.()?.[0] || e.target;
  return t?.nodeType !== 1 ? !1 : qv.includes(t.nodeName) || t.hasAttribute("contenteditable") || !!t.closest(".nokey");
}
const $c = (e) => "clientX" in e, Jt = (e, t) => {
  const n = $c(e), r = n ? e.clientX : e.touches?.[0].clientX, o = n ? e.clientY : e.touches?.[0].clientY;
  return {
    x: r - (t?.left ?? 0),
    y: o - (t?.top ?? 0)
  };
}, nl = (e, t, n, r, o) => {
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
      ...wc(s)
    };
  });
};
function Xv({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: o, sourceControlY: i, targetControlX: s, targetControlY: a }) {
  const l = e * 0.125 + o * 0.375 + s * 0.375 + n * 0.125, u = t * 0.125 + i * 0.375 + a * 0.375 + r * 0.125, d = Math.abs(l - e), p = Math.abs(u - t);
  return [l, u, d, p];
}
function jo(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function rl({ pos: e, x1: t, y1: n, x2: r, y2: o, c: i }) {
  switch (e) {
    case ye.Left:
      return [t - jo(t - r, i), n];
    case ye.Right:
      return [t + jo(r - t, i), n];
    case ye.Top:
      return [t, n - jo(n - o, i)];
    case ye.Bottom:
      return [t, n + jo(o - n, i)];
  }
}
function Cc({ sourceX: e, sourceY: t, sourcePosition: n = ye.Bottom, targetX: r, targetY: o, targetPosition: i = ye.Top, curvature: s = 0.25 }) {
  const [a, l] = rl({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: o,
    c: s
  }), [u, d] = rl({
    pos: i,
    x1: r,
    y1: o,
    x2: e,
    y2: t,
    c: s
  }), [p, f, h, y] = Xv({
    sourceX: e,
    sourceY: t,
    targetX: r,
    targetY: o,
    sourceControlX: a,
    sourceControlY: l,
    targetControlX: u,
    targetControlY: d
  });
  return [
    `M${e},${t} C${a},${l} ${u},${d} ${r},${o}`,
    p,
    f,
    h,
    y
  ];
}
function _c({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const o = Math.abs(n - e) / 2, i = n < e ? n + o : n - o, s = Math.abs(r - t) / 2, a = r < t ? r + s : r - s;
  return [i, a, o, s];
}
function Fv({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r, elevateOnSelect: o = !1 }) {
  if (r !== void 0)
    return r;
  const i = o && n ? 1e3 : 0, s = Math.max(e.parentId || o && e.selected ? e.internals.z : 0, t.parentId || o && t.selected ? t.internals.z : 0);
  return i + s;
}
function Gv({ sourceNode: e, targetNode: t, width: n, height: r, transform: o }) {
  const i = Oi(di(e), di(t));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const s = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return uo(s, zi(i)) > 0;
}
const Jv = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, Uv = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), Qv = (e, t) => {
  if (!e.source || !e.target)
    return t;
  let n;
  return pc(e) ? n = { ...e } : n = {
    ...e,
    id: Jv(e)
  }, Uv(n, t) ? t : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, t.concat(n));
};
function kc({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const [o, i, s, a] = _c({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: r
  });
  return [`M ${e},${t}L ${n},${r}`, o, i, s, a];
}
const ol = {
  [ye.Left]: { x: -1, y: 0 },
  [ye.Right]: { x: 1, y: 0 },
  [ye.Top]: { x: 0, y: -1 },
  [ye.Bottom]: { x: 0, y: 1 }
}, e0 = ({ source: e, sourcePosition: t = ye.Bottom, target: n }) => t === ye.Left || t === ye.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, il = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function t0({ source: e, sourcePosition: t = ye.Bottom, target: n, targetPosition: r = ye.Top, center: o, offset: i, stepPosition: s }) {
  const a = ol[t], l = ol[r], u = { x: e.x + a.x * i, y: e.y + a.y * i }, d = { x: n.x + l.x * i, y: n.y + l.y * i }, p = e0({
    source: u,
    sourcePosition: t,
    target: d
  }), f = p.x !== 0 ? "x" : "y", h = p[f];
  let y = [], w, m;
  const b = { x: 0, y: 0 }, $ = { x: 0, y: 0 }, [, , _, x] = _c({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (a[f] * l[f] === -1) {
    f === "x" ? (w = o.x ?? u.x + (d.x - u.x) * s, m = o.y ?? (u.y + d.y) / 2) : (w = o.x ?? (u.x + d.x) / 2, m = o.y ?? u.y + (d.y - u.y) * s);
    const k = [
      { x: w, y: u.y },
      { x: w, y: d.y }
    ], L = [
      { x: u.x, y: m },
      { x: d.x, y: m }
    ];
    a[f] === h ? y = f === "x" ? k : L : y = f === "x" ? L : k;
  } else {
    const k = [{ x: u.x, y: d.y }], L = [{ x: d.x, y: u.y }];
    if (f === "x" ? y = a.x === h ? L : k : y = a.y === h ? k : L, t === r) {
      const z = Math.abs(e[f] - n[f]);
      if (z <= i) {
        const S = Math.min(i - 1, i - z);
        a[f] === h ? b[f] = (u[f] > e[f] ? -1 : 1) * S : $[f] = (d[f] > n[f] ? -1 : 1) * S;
      }
    }
    if (t !== r) {
      const z = f === "x" ? "y" : "x", S = a[f] === l[z], T = u[z] > d[z], C = u[z] < d[z];
      (a[f] === 1 && (!S && T || S && C) || a[f] !== 1 && (!S && C || S && T)) && (y = f === "x" ? k : L);
    }
    const D = { x: u.x + b.x, y: u.y + b.y }, j = { x: d.x + $.x, y: d.y + $.y }, H = Math.max(Math.abs(D.x - y[0].x), Math.abs(j.x - y[0].x)), A = Math.max(Math.abs(D.y - y[0].y), Math.abs(j.y - y[0].y));
    H >= A ? (w = (D.x + j.x) / 2, m = y[0].y) : (w = y[0].x, m = (D.y + j.y) / 2);
  }
  return [[
    e,
    { x: u.x + b.x, y: u.y + b.y },
    ...y,
    { x: d.x + $.x, y: d.y + $.y },
    n
  ], w, m, _, x];
}
function n0(e, t, n, r) {
  const o = Math.min(il(e, t) / 2, il(t, n) / 2, r), { x: i, y: s } = t;
  if (e.x === i && i === n.x || e.y === s && s === n.y)
    return `L${i} ${s}`;
  if (e.y === s) {
    const u = e.x < n.x ? -1 : 1, d = e.y < n.y ? 1 : -1;
    return `L ${i + o * u},${s}Q ${i},${s} ${i},${s + o * d}`;
  }
  const a = e.x < n.x ? 1 : -1, l = e.y < n.y ? -1 : 1;
  return `L ${i},${s + o * l}Q ${i},${s} ${i + o * a},${s}`;
}
function ia({ sourceX: e, sourceY: t, sourcePosition: n = ye.Bottom, targetX: r, targetY: o, targetPosition: i = ye.Top, borderRadius: s = 5, centerX: a, centerY: l, offset: u = 20, stepPosition: d = 0.5 }) {
  const [p, f, h, y, w] = t0({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: a, y: l },
    offset: u,
    stepPosition: d
  });
  return [p.reduce((m, b, $) => {
    let _ = "";
    return $ > 0 && $ < p.length - 1 ? _ = n0(p[$ - 1], b, p[$ + 1], s) : _ = `${$ === 0 ? "M" : "L"}${b.x} ${b.y}`, m += _, m;
  }, ""), f, h, y, w];
}
function sl(e) {
  return e && !!(e.internals.handleBounds || e.handles?.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function r0(e) {
  const { sourceNode: t, targetNode: n } = e;
  if (!sl(t) || !sl(n))
    return null;
  const r = t.internals.handleBounds || al(t.handles), o = n.internals.handleBounds || al(n.handles), i = ll(r?.source ?? [], e.sourceHandle), s = ll(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === Dr.Strict ? o?.target ?? [] : (o?.target ?? []).concat(o?.source ?? []),
    e.targetHandle
  );
  if (!i || !s)
    return e.onError?.("008", ao.error008(i ? "target" : "source", {
      id: e.id,
      sourceHandle: e.sourceHandle,
      targetHandle: e.targetHandle
    })), null;
  const a = i?.position || ye.Bottom, l = s?.position || ye.Top, u = co(t, i, a), d = co(n, s, l);
  return {
    sourceX: u.x,
    sourceY: u.y,
    targetX: d.x,
    targetY: d.y,
    sourcePosition: a,
    targetPosition: l
  };
}
function al(e) {
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
function co(e, t, n = ye.Left, r = !1) {
  const o = (t?.x ?? 0) + e.internals.positionAbsolute.x, i = (t?.y ?? 0) + e.internals.positionAbsolute.y, { width: s, height: a } = t ?? er(e);
  if (r)
    return { x: o + s / 2, y: i + a / 2 };
  switch (t?.position ?? n) {
    case ye.Top:
      return { x: o + s / 2, y: i };
    case ye.Right:
      return { x: o + s, y: i + a / 2 };
    case ye.Bottom:
      return { x: o + s / 2, y: i + a };
    case ye.Left:
      return { x: o, y: i + a / 2 };
  }
}
function ll(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function _s(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((n) => `${n}=${e[n]}`).join("&")}` : "";
}
function o0(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const i = /* @__PURE__ */ new Set();
  return e.reduce((s, a) => ([a.markerStart || r, a.markerEnd || o].forEach((l) => {
    if (l && typeof l == "object") {
      const u = _s(l, t);
      i.has(u) || (s.push({ id: u, color: l.color || n, ...l }), i.add(u));
    }
  }), s), []).sort((s, a) => s.id.localeCompare(a.id));
}
function i0(e, t, n, r, o) {
  let i = 0.5;
  o === "start" ? i = 0 : o === "end" && (i = 1);
  let s = [
    (e.x + e.width * i) * t.zoom + t.x,
    e.y * t.zoom + t.y - r
  ], a = [-100 * i, -100];
  switch (n) {
    case ye.Right:
      s = [
        (e.x + e.width) * t.zoom + t.x + r,
        (e.y + e.height * i) * t.zoom + t.y
      ], a = [0, -100 * i];
      break;
    case ye.Bottom:
      s[1] = (e.y + e.height) * t.zoom + t.y + r, a[1] = 0;
      break;
    case ye.Left:
      s = [
        e.x * t.zoom + t.x - r,
        (e.y + e.height * i) * t.zoom + t.y
      ], a = [-100, -100 * i];
      break;
  }
  return `translate(${s[0]}px, ${s[1]}px) translate(${a[0]}%, ${a[1]}%)`;
}
const Sc = 1e3, s0 = 10, sa = {
  nodeOrigin: [0, 0],
  nodeExtent: xs,
  elevateNodesOnSelect: !0,
  defaults: {}
}, a0 = {
  ...sa,
  checkEquality: !0
};
function aa(e, t) {
  const n = { ...e };
  for (const r in t)
    t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function l0(e, t, n) {
  const r = aa(sa, n);
  for (const o of e.values())
    if (o.parentId)
      la(o, e, t, r);
    else {
      const i = _o(o, r.nodeOrigin), s = Hr(o.extent) ? o.extent : r.nodeExtent, a = pr(i, s, er(o));
      o.internals.positionAbsolute = a;
    }
}
function u0(e, t) {
  if (!e.handles)
    return e.measured ? t?.internals.handleBounds : void 0;
  const n = [], r = [];
  for (const o of e.handles) {
    const i = {
      id: o.id,
      width: o.width ?? 1,
      height: o.height ?? 1,
      nodeId: e.id,
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
function c0(e, t, n, r) {
  const o = aa(a0, r);
  let i = { i: -1 }, s = e.length > 0;
  const a = new Map(t), l = o?.elevateNodesOnSelect ? Sc : 0;
  t.clear(), n.clear();
  for (const u of e) {
    let d = a.get(u.id);
    if (o.checkEquality && u === d?.internals.userNode)
      t.set(u.id, d);
    else {
      const p = _o(u, o.nodeOrigin), f = Hr(u.extent) ? u.extent : o.nodeExtent, h = pr(p, f, er(u));
      d = {
        ...o.defaults,
        ...u,
        measured: {
          width: u.measured?.width,
          height: u.measured?.height
        },
        internals: {
          positionAbsolute: h,
          // if user re-initializes the node or removes `measured` for whatever reason, we reset the handleBounds so that the node gets re-measured
          handleBounds: u0(u, d),
          z: Ec(u, l),
          userNode: u
        }
      }, t.set(u.id, d);
    }
    (d.measured === void 0 || d.measured.width === void 0 || d.measured.height === void 0) && !d.hidden && (s = !1), u.parentId && la(d, t, n, r, i);
  }
  return s;
}
function d0(e, t) {
  if (!e.parentId)
    return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function la(e, t, n, r, o) {
  const { elevateNodesOnSelect: i, nodeOrigin: s, nodeExtent: a } = aa(sa, r), l = e.parentId, u = t.get(l);
  if (!u) {
    console.warn(`Parent node ${l} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  d0(e, n), o && !u.parentId && u.internals.rootParentIndex === void 0 && (u.internals.rootParentIndex = ++o.i, u.internals.z = u.internals.z + o.i * s0), o && u.internals.rootParentIndex !== void 0 && (o.i = u.internals.rootParentIndex);
  const d = i ? Sc : 0, { x: p, y: f, z: h } = f0(e, u, s, a, d), { positionAbsolute: y } = e.internals, w = p !== y.x || f !== y.y;
  (w || h !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: w ? { x: p, y: f } : y,
      z: h
    }
  });
}
function Ec(e, t) {
  return (xn(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function f0(e, t, n, r, o) {
  const { x: i, y: s } = t.internals.positionAbsolute, a = er(e), l = _o(e, n), u = Hr(e.extent) ? pr(l, e.extent, a) : l;
  let d = pr({ x: i + u.x, y: s + u.y }, r, a);
  e.extent === "parent" && (d = gc(d, a, t));
  const p = Ec(e, o), f = t.internals.z ?? 0;
  return {
    x: d.x,
    y: d.y,
    z: f >= p ? f + 1 : p
  };
}
function p0(e, t, n, r = [0, 0]) {
  const o = [], i = /* @__PURE__ */ new Map();
  for (const s of e) {
    const a = t.get(s.parentId);
    if (!a)
      continue;
    const l = i.get(s.parentId)?.expandedRect ?? zr(a), u = mc(l, s.rect);
    i.set(s.parentId, { expandedRect: u, parent: a });
  }
  return i.size > 0 && i.forEach(({ expandedRect: s, parent: a }, l) => {
    const u = a.internals.positionAbsolute, d = er(a), p = a.origin ?? r, f = s.x < u.x ? Math.round(Math.abs(u.x - s.x)) : 0, h = s.y < u.y ? Math.round(Math.abs(u.y - s.y)) : 0, y = Math.max(d.width, Math.round(s.width)), w = Math.max(d.height, Math.round(s.height)), m = (y - d.width) * p[0], b = (w - d.height) * p[1];
    (f > 0 || h > 0 || m || b) && (o.push({
      id: l,
      type: "position",
      position: {
        x: a.position.x - f + m,
        y: a.position.y - h + b
      }
    }), n.get(l)?.forEach(($) => {
      e.some((_) => _.id === $.id) || o.push({
        id: $.id,
        type: "position",
        position: {
          x: $.position.x + f,
          y: $.position.y + h
        }
      });
    })), (d.width < s.width || d.height < s.height || f || h) && o.push({
      id: l,
      type: "dimensions",
      setAttributes: !0,
      dimensions: {
        width: y + (f ? p[0] * f - m : 0),
        height: w + (h ? p[1] * h - b : 0)
      }
    });
  }), o;
}
function h0(e, t, n, r, o, i) {
  const s = r?.querySelector(".xyflow__viewport");
  let a = !1;
  if (!s)
    return { changes: [], updatedInternals: a };
  const l = [], u = window.getComputedStyle(s), { m22: d } = new window.DOMMatrixReadOnly(u.transform), p = [];
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
    const y = wc(f.nodeElement), w = h.measured.width !== y.width || h.measured.height !== y.height;
    if (y.width && y.height && (w || !h.internals.handleBounds || f.force)) {
      const m = f.nodeElement.getBoundingClientRect(), b = Hr(h.extent) ? h.extent : i;
      let { positionAbsolute: $ } = h.internals;
      h.parentId && h.extent === "parent" ? $ = gc($, y, t.get(h.parentId)) : b && ($ = pr($, b, y));
      const _ = {
        ...h,
        measured: y,
        internals: {
          ...h.internals,
          positionAbsolute: $,
          handleBounds: {
            source: nl("source", f.nodeElement, m, d, h.id),
            target: nl("target", f.nodeElement, m, d, h.id)
          }
        }
      };
      t.set(h.id, _), h.parentId && la(_, t, n, { nodeOrigin: o }), a = !0, w && (l.push({
        id: h.id,
        type: "dimensions",
        dimensions: y
      }), h.expandParent && h.parentId && p.push({
        id: h.id,
        parentId: h.parentId,
        rect: zr(_, o)
      }));
    }
  }
  if (p.length > 0) {
    const f = p0(p, t, n, o);
    l.push(...f);
  }
  return { changes: l, updatedInternals: a };
}
async function g0({ delta: e, panZoom: t, transform: n, translateExtent: r, width: o, height: i }) {
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
function ul(e, t, n, r, o, i) {
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
function v0(e, t, n) {
  e.clear(), t.clear();
  for (const r of n) {
    const { source: o, target: i, sourceHandle: s = null, targetHandle: a = null } = r, l = { edgeId: r.id, source: o, target: i, sourceHandle: s, targetHandle: a }, u = `${o}-${s}--${i}-${a}`, d = `${i}-${a}--${o}-${s}`;
    ul("source", l, d, e, o, s), ul("target", l, u, e, i, a), t.set(r.id, r);
  }
}
function m0(e, t) {
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
function Pc(e, t) {
  if (!e.parentId)
    return !1;
  const n = t.get(e.parentId);
  return n ? n.selected ? !0 : Pc(n, t) : !1;
}
function cl(e, t, n) {
  let r = e;
  do {
    if (r?.matches?.(t))
      return !0;
    if (r === n)
      return !1;
    r = r?.parentElement;
  } while (r);
  return !1;
}
function y0(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  for (const [i, s] of e)
    if ((s.selected || s.id === r) && (!s.parentId || !Pc(s, e)) && (s.draggable || t && typeof s.draggable > "u")) {
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
function Ji({ nodeId: e, dragItems: t, nodeLookup: n, dragging: r = !0 }) {
  const o = [];
  for (const [s, a] of t) {
    const l = n.get(s)?.internals.userNode;
    l && o.push({
      ...l,
      position: a.position,
      dragging: r
    });
  }
  if (!e)
    return [o[0], o];
  const i = n.get(e)?.internals.userNode;
  return [
    i ? {
      ...i,
      position: t.get(e)?.position || i.position,
      dragging: r
    } : o[0],
    o
  ];
}
function w0({ dragItems: e, snapGrid: t, x: n, y: r }) {
  const o = e.values().next().value;
  if (!o)
    return null;
  const i = {
    x: n - o.distance.x,
    y: r - o.distance.y
  }, s = So(i, t);
  return {
    x: s.x - i.x,
    y: s.y - i.y
  };
}
function b0({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: o }) {
  let i = { x: null, y: null }, s = 0, a = /* @__PURE__ */ new Map(), l = !1, u = { x: 0, y: 0 }, d = null, p = !1, f = null, h = !1, y = !1, w = null;
  function m({ noDragClassName: $, handleSelector: _, domNode: x, isSelectable: k, nodeId: L, nodeClickDistance: D = 0 }) {
    f = jt(x);
    function j({ x: S, y: T }) {
      const { nodeLookup: C, nodeExtent: P, snapGrid: N, snapToGrid: K, nodeOrigin: Y, onNodeDrag: F, onSelectionDrag: M, onError: W, updateNodePositions: B } = t();
      i = { x: S, y: T };
      let G = !1;
      const I = a.size > 1, X = I && P ? Cs(ko(a)) : null, J = I && K ? w0({
        dragItems: a,
        snapGrid: N,
        x: S,
        y: T
      }) : null;
      for (const [te, ne] of a) {
        if (!C.has(te))
          continue;
        let ee = { x: S - ne.distance.x, y: T - ne.distance.y };
        K && (ee = J ? {
          x: Math.round(ee.x + J.x),
          y: Math.round(ee.y + J.y)
        } : So(ee, N));
        let he = null;
        if (I && P && !ne.extent && X) {
          const { positionAbsolute: ie } = ne.internals, pe = ie.x - X.x + P[0][0], ge = ie.x + ne.measured.width - X.x2 + P[1][0], we = ie.y - X.y + P[0][1], le = ie.y + ne.measured.height - X.y2 + P[1][1];
          he = [
            [pe, we],
            [ge, le]
          ];
        }
        const { position: de, positionAbsolute: re } = hc({
          nodeId: te,
          nextPosition: ee,
          nodeLookup: C,
          nodeExtent: he || P,
          nodeOrigin: Y,
          onError: W
        });
        G = G || ne.position.x !== de.x || ne.position.y !== de.y, ne.position = de, ne.internals.positionAbsolute = re;
      }
      if (y = y || G, !!G && (B(a, !0), w && (r || F || !L && M))) {
        const [te, ne] = Ji({
          nodeId: L,
          dragItems: a,
          nodeLookup: C
        });
        r?.(w, a, te, ne), F?.(w, te, ne), L || M?.(w, ne);
      }
    }
    async function H() {
      if (!d)
        return;
      const { transform: S, panBy: T, autoPanSpeed: C, autoPanOnNodeDrag: P } = t();
      if (!P) {
        l = !1, cancelAnimationFrame(s);
        return;
      }
      const [N, K] = vc(u, d, C);
      (N !== 0 || K !== 0) && (i.x = (i.x ?? 0) - N / S[2], i.y = (i.y ?? 0) - K / S[2], await T({ x: N, y: K }) && j(i)), s = requestAnimationFrame(H);
    }
    function A(S) {
      const { nodeLookup: T, multiSelectionActive: C, nodesDraggable: P, transform: N, snapGrid: K, snapToGrid: Y, selectNodesOnDrag: F, onNodeDragStart: M, onSelectionDragStart: W, unselectNodesAndEdges: B } = t();
      p = !0, (!F || !k) && !C && L && (T.get(L)?.selected || B()), k && F && L && e?.(L);
      const G = Gi(S.sourceEvent, { transform: N, snapGrid: K, snapToGrid: Y, containerBounds: d });
      if (i = G, a = y0(T, P, G, L), a.size > 0 && (n || M || !L && W)) {
        const [I, X] = Ji({
          nodeId: L,
          dragItems: a,
          nodeLookup: T
        });
        n?.(S.sourceEvent, a, I, X), M?.(S.sourceEvent, I, X), L || W?.(S.sourceEvent, X);
      }
    }
    const z = Zg().clickDistance(D).on("start", (S) => {
      const { domNode: T, nodeDragThreshold: C, transform: P, snapGrid: N, snapToGrid: K } = t();
      d = T?.getBoundingClientRect() || null, h = !1, y = !1, w = S.sourceEvent, C === 0 && A(S), i = Gi(S.sourceEvent, { transform: P, snapGrid: N, snapToGrid: K, containerBounds: d }), u = Jt(S.sourceEvent, d);
    }).on("drag", (S) => {
      const { autoPanOnNodeDrag: T, transform: C, snapGrid: P, snapToGrid: N, nodeDragThreshold: K, nodeLookup: Y } = t(), F = Gi(S.sourceEvent, { transform: C, snapGrid: P, snapToGrid: N, containerBounds: d });
      if (w = S.sourceEvent, (S.sourceEvent.type === "touchmove" && S.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      L && !Y.has(L)) && (h = !0), !h) {
        if (!l && T && p && (l = !0, H()), !p) {
          const M = Jt(S.sourceEvent, d), W = M.x - u.x, B = M.y - u.y;
          Math.sqrt(W * W + B * B) > K && A(S);
        }
        (i.x !== F.xSnapped || i.y !== F.ySnapped) && a && p && (u = Jt(S.sourceEvent, d), j(F));
      }
    }).on("end", (S) => {
      if (!(!p || h) && (l = !1, p = !1, cancelAnimationFrame(s), a.size > 0)) {
        const { nodeLookup: T, updateNodePositions: C, onNodeDragStop: P, onSelectionDragStop: N } = t();
        if (y && (C(a, !1), y = !1), o || P || !L && N) {
          const [K, Y] = Ji({
            nodeId: L,
            dragItems: a,
            nodeLookup: T,
            dragging: !1
          });
          o?.(S.sourceEvent, a, K, Y), P?.(S.sourceEvent, K, Y), L || N?.(S.sourceEvent, Y);
        }
      }
    }).filter((S) => {
      const T = S.target;
      return !S.button && (!$ || !cl(T, `.${$}`, x)) && (!_ || cl(T, _, x));
    });
    f.call(z);
  }
  function b() {
    f?.on(".drag", null);
  }
  return {
    update: m,
    destroy: b
  };
}
function x0(e, t, n) {
  const r = [], o = {
    x: e.x - n,
    y: e.y - n,
    width: n * 2,
    height: n * 2
  };
  for (const i of t.values())
    uo(o, zr(i)) > 0 && r.push(i);
  return r;
}
const $0 = 250;
function C0(e, t, n, r) {
  let o = [], i = 1 / 0;
  const s = x0(e, n, t + $0);
  for (const a of s) {
    const l = [...a.internals.handleBounds?.source ?? [], ...a.internals.handleBounds?.target ?? []];
    for (const u of l) {
      if (r.nodeId === u.nodeId && r.type === u.type && r.id === u.id)
        continue;
      const { x: d, y: p } = co(a, u, u.position, !0), f = Math.sqrt(Math.pow(d - e.x, 2) + Math.pow(p - e.y, 2));
      f > t || (f < i ? (o = [{ ...u, x: d, y: p }], i = f) : f === i && o.push({ ...u, x: d, y: p }));
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
function Nc(e, t, n, r, o, i = !1) {
  const s = r.get(e);
  if (!s)
    return null;
  const a = o === "strict" ? s.internals.handleBounds?.[t] : [...s.internals.handleBounds?.source ?? [], ...s.internals.handleBounds?.target ?? []], l = (n ? a?.find((u) => u.id === n) : a?.[0]) ?? null;
  return l && i ? { ...l, ...co(s, l, l.position, !0) } : l;
}
function Lc(e, t) {
  return e || (t?.classList.contains("target") ? "target" : t?.classList.contains("source") ? "source" : null);
}
function _0(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const Tc = () => !0;
function k0(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: s, domNode: a, nodeLookup: l, lib: u, autoPanOnConnect: d, flowId: p, panBy: f, cancelConnection: h, onConnectStart: y, onConnect: w, onConnectEnd: m, isValidConnection: b = Tc, onReconnectEnd: $, updateConnection: _, getTransform: x, getFromHandle: k, autoPanSpeed: L, dragThreshold: D = 1, handleDomNode: j }) {
  const H = bc(e.target);
  let A = 0, z;
  const { x: S, y: T } = Jt(e), C = Lc(i, j), P = a?.getBoundingClientRect();
  let N = !1;
  if (!P || !C)
    return;
  const K = Nc(o, C, r, l, t);
  if (!K)
    return;
  let Y = Jt(e, P), F = !1, M = null, W = !1, B = null;
  function G() {
    if (!d || !P)
      return;
    const [he, de] = vc(Y, P, L);
    f({ x: he, y: de }), A = requestAnimationFrame(G);
  }
  const I = {
    ...K,
    nodeId: o,
    type: C,
    position: K.position
  }, X = l.get(o);
  let J = {
    inProgress: !0,
    isValid: null,
    from: co(X, I, ye.Left, !0),
    fromHandle: I,
    fromPosition: I.position,
    fromNode: X,
    to: Y,
    toHandle: null,
    toPosition: Ua[I.position],
    toNode: null,
    pointer: Y
  };
  function te() {
    N = !0, _(J), y?.(e, { nodeId: o, handleId: r, handleType: C });
  }
  D === 0 && te();
  function ne(he) {
    if (!N) {
      const { x: pe, y: ge } = Jt(he), we = pe - S, le = ge - T;
      if (!(we * we + le * le > D * D))
        return;
      te();
    }
    if (!k() || !I) {
      ee(he);
      return;
    }
    const de = x();
    Y = Jt(he, P), z = C0(Eo(Y, de, !1, [1, 1]), n, l, I), F || (G(), F = !0);
    const re = Vc(he, {
      handle: z,
      connectionMode: t,
      fromNodeId: o,
      fromHandleId: r,
      fromType: s ? "target" : "source",
      isValidConnection: b,
      doc: H,
      lib: u,
      flowId: p,
      nodeLookup: l
    });
    B = re.handleDomNode, M = re.connection, W = _0(!!z, re.isValid);
    const ie = {
      // from stays the same
      ...J,
      isValid: W,
      to: re.toHandle && W ? fi({ x: re.toHandle.x, y: re.toHandle.y }, de) : Y,
      toHandle: re.toHandle,
      toPosition: W && re.toHandle ? re.toHandle.position : Ua[I.position],
      toNode: re.toHandle ? l.get(re.toHandle.nodeId) : null,
      pointer: Y
    };
    _(ie), J = ie;
  }
  function ee(he) {
    if (!("touches" in he && he.touches.length > 0)) {
      if (N) {
        (z || B) && M && W && w?.(M);
        const { inProgress: de, ...re } = J, ie = {
          ...re,
          toPosition: J.toHandle ? J.toPosition : null
        };
        m?.(he, ie), i && $?.(he, ie);
      }
      h(), cancelAnimationFrame(A), F = !1, W = !1, M = null, B = null, H.removeEventListener("mousemove", ne), H.removeEventListener("mouseup", ee), H.removeEventListener("touchmove", ne), H.removeEventListener("touchend", ee);
    }
  }
  H.addEventListener("mousemove", ne), H.addEventListener("mouseup", ee), H.addEventListener("touchmove", ne), H.addEventListener("touchend", ee);
}
function Vc(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: s, lib: a, flowId: l, isValidConnection: u = Tc, nodeLookup: d }) {
  const p = i === "target", f = t ? s.querySelector(`.${a}-flow__handle[data-id="${l}-${t?.nodeId}-${t?.id}-${t?.type}"]`) : null, { x: h, y } = Jt(e), w = s.elementFromPoint(h, y), m = w?.classList.contains(`${a}-flow__handle`) ? w : f, b = {
    handleDomNode: m,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (m) {
    const $ = Lc(void 0, m), _ = m.getAttribute("data-nodeid"), x = m.getAttribute("data-handleid"), k = m.classList.contains("connectable"), L = m.classList.contains("connectableend");
    if (!_ || !$)
      return b;
    const D = {
      source: p ? _ : r,
      sourceHandle: p ? x : o,
      target: p ? r : _,
      targetHandle: p ? o : x
    };
    b.connection = D;
    const j = k && L && (n === Dr.Strict ? p && $ === "source" || !p && $ === "target" : _ !== r || x !== o);
    b.isValid = j && u(D), b.toHandle = Nc(_, $, x, d, n, !0);
  }
  return b;
}
const dl = {
  onPointerDown: k0,
  isValid: Vc
};
function S0({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = jt(e);
  function i({ translateExtent: a, width: l, height: u, zoomStep: d = 1, pannable: p = !0, zoomable: f = !0, inversePan: h = !1 }) {
    const y = (_) => {
      if (_.sourceEvent.type !== "wheel" || !t)
        return;
      const x = n(), k = _.sourceEvent.ctrlKey && ir() ? 10 : 1, L = -_.sourceEvent.deltaY * (_.sourceEvent.deltaMode === 1 ? 0.05 : _.sourceEvent.deltaMode ? 1 : 2e-3) * d, D = x[2] * Math.pow(2, L * k);
      t.scaleTo(D);
    };
    let w = [0, 0];
    const m = (_) => {
      (_.sourceEvent.type === "mousedown" || _.sourceEvent.type === "touchstart") && (w = [
        _.sourceEvent.clientX ?? _.sourceEvent.touches[0].clientX,
        _.sourceEvent.clientY ?? _.sourceEvent.touches[0].clientY
      ]);
    }, b = (_) => {
      const x = n();
      if (_.sourceEvent.type !== "mousemove" && _.sourceEvent.type !== "touchmove" || !t)
        return;
      const k = [
        _.sourceEvent.clientX ?? _.sourceEvent.touches[0].clientX,
        _.sourceEvent.clientY ?? _.sourceEvent.touches[0].clientY
      ], L = [k[0] - w[0], k[1] - w[1]];
      w = k;
      const D = r() * Math.max(x[2], Math.log(x[2])) * (h ? -1 : 1), j = {
        x: x[0] - L[0] * D,
        y: x[1] - L[1] * D
      }, H = [
        [0, 0],
        [l, u]
      ];
      t.setViewportConstrained({
        x: j.x,
        y: j.y,
        zoom: x[2]
      }, H, a);
    }, $ = dc().on("start", m).on("zoom", p ? b : null).on("zoom.wheel", f ? y : null);
    o.call($, {});
  }
  function s() {
    o.on("zoom", null);
  }
  return {
    update: i,
    destroy: s,
    pointer: Xt
  };
}
const Hi = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), Ui = ({ x: e, y: t, zoom: n }) => Di.translate(e, t).scale(n), xr = (e, t) => e.target.closest(`.${t}`), Mc = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), E0 = (e) => ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2, Qi = (e, t = 0, n = E0, r = () => {
}) => {
  const o = typeof t == "number" && t > 0;
  return o || r(), o ? e.transition().duration(t).ease(n).on("end", r) : e;
}, Dc = (e) => {
  const t = e.ctrlKey && ir() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function P0({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: s, onPanZoomStart: a, onPanZoom: l, onPanZoomEnd: u }) {
  return (d) => {
    if (xr(d, t))
      return d.ctrlKey && d.preventDefault(), !1;
    d.preventDefault(), d.stopImmediatePropagation();
    const p = n.property("__zoom").k || 1;
    if (d.ctrlKey && s) {
      const m = Xt(d), b = Dc(d), $ = p * Math.pow(2, b);
      r.scaleTo(n, $, m, d);
      return;
    }
    const f = d.deltaMode === 1 ? 20 : 1;
    let h = o === lr.Vertical ? 0 : d.deltaX * f, y = o === lr.Horizontal ? 0 : d.deltaY * f;
    !ir() && d.shiftKey && o !== lr.Vertical && (h = d.deltaY * f, y = 0), r.translateBy(
      n,
      -(h / p) * i,
      -(y / p) * i,
      // @ts-ignore
      { internal: !0 }
    );
    const w = Hi(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling ? (l?.(d, w), e.panScrollTimeout = setTimeout(() => {
      u?.(d, w), e.isPanScrolling = !1;
    }, 150)) : (e.isPanScrolling = !0, a?.(d, w));
  };
}
function N0({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(r, o) {
    const i = r.type === "wheel", s = !t && i && !r.ctrlKey, a = xr(r, e);
    if (r.ctrlKey && i && a && r.preventDefault(), s || a)
      return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function L0({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (r) => {
    if (r.sourceEvent?.internal)
      return;
    const o = Hi(r.transform);
    e.mouseButton = r.sourceEvent?.button || 0, e.isZoomingOrPanning = !0, e.prevViewport = o, r.sourceEvent?.type === "mousedown" && t(!0), n && n?.(r.sourceEvent, o);
  };
}
function T0({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (i) => {
    e.usedRightMouseButton = !!(n && Mc(t, e.mouseButton ?? 0)), i.sourceEvent?.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !i.sourceEvent?.internal && o?.(i.sourceEvent, Hi(i.transform));
  };
}
function V0({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (s) => {
    if (!s.sourceEvent?.internal && (e.isZoomingOrPanning = !1, i && Mc(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && s.sourceEvent && i(s.sourceEvent), e.usedRightMouseButton = !1, r(!1), o)) {
      const a = Hi(s.transform);
      e.prevViewport = a, clearTimeout(e.timerId), e.timerId = setTimeout(
        () => {
          o?.(s.sourceEvent, a);
        },
        // we need a setTimeout for panOnScroll to supress multiple end events fired during scroll
        n ? 150 : 0
      );
    }
  };
}
function M0({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: r, panOnScroll: o, zoomOnDoubleClick: i, userSelectionActive: s, noWheelClassName: a, noPanClassName: l, lib: u, connectionInProgress: d }) {
  return (p) => {
    const f = e || t, h = n && p.ctrlKey, y = p.type === "wheel";
    if (p.button === 1 && p.type === "mousedown" && (xr(p, `${u}-flow__node`) || xr(p, `${u}-flow__edge`)))
      return !0;
    if (!r && !f && !o && !i && !n || s || d && !y || xr(p, a) && y || xr(p, l) && (!y || o && y && !e) || !n && p.ctrlKey && y)
      return !1;
    if (!n && p.type === "touchstart" && p.touches?.length > 1)
      return p.preventDefault(), !1;
    if (!f && !o && !h && y || !r && (p.type === "mousedown" || p.type === "touchstart") || Array.isArray(r) && !r.includes(p.button) && p.type === "mousedown")
      return !1;
    const w = Array.isArray(r) && r.includes(p.button) || !p.button || p.button <= 1;
    return (!p.ctrlKey || y) && w;
  };
}
function D0({ domNode: e, minZoom: t, maxZoom: n, translateExtent: r, viewport: o, onPanZoom: i, onPanZoomStart: s, onPanZoomEnd: a, onDraggingChange: l }) {
  const u = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: {},
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, d = e.getBoundingClientRect(), p = dc().scaleExtent([t, n]).translateExtent(r), f = jt(e).call(p);
  $({
    x: o.x,
    y: o.y,
    zoom: Or(o.zoom, t, n)
  }, [
    [0, 0],
    [d.width, d.height]
  ], r);
  const h = f.on("wheel.zoom"), y = f.on("dblclick.zoom");
  p.wheelDelta(Dc);
  function w(z, S) {
    return f ? new Promise((T) => {
      p?.interpolate(S?.interpolate === "linear" ? Ur : Wo).transform(Qi(f, S?.duration, S?.ease, () => T(!0)), z);
    }) : Promise.resolve(!1);
  }
  function m({ noWheelClassName: z, noPanClassName: S, onPaneContextMenu: T, userSelectionActive: C, panOnScroll: P, panOnDrag: N, panOnScrollMode: K, panOnScrollSpeed: Y, preventScrolling: F, zoomOnPinch: M, zoomOnScroll: W, zoomOnDoubleClick: B, zoomActivationKeyPressed: G, lib: I, onTransformChange: X, connectionInProgress: J, paneClickDistance: te, selectionOnDrag: ne }) {
    C && !u.isZoomingOrPanning && b();
    const ee = P && !G && !C;
    p.clickDistance(ne ? 1 / 0 : !xn(te) || te < 0 ? 0 : te);
    const he = ee ? P0({
      zoomPanValues: u,
      noWheelClassName: z,
      d3Selection: f,
      d3Zoom: p,
      panOnScrollMode: K,
      panOnScrollSpeed: Y,
      zoomOnPinch: M,
      onPanZoomStart: s,
      onPanZoom: i,
      onPanZoomEnd: a
    }) : N0({
      noWheelClassName: z,
      preventScrolling: F,
      d3ZoomHandler: h
    });
    if (f.on("wheel.zoom", he, { passive: !1 }), !C) {
      const re = L0({
        zoomPanValues: u,
        onDraggingChange: l,
        onPanZoomStart: s
      });
      p.on("start", re);
      const ie = T0({
        zoomPanValues: u,
        panOnDrag: N,
        onPaneContextMenu: !!T,
        onPanZoom: i,
        onTransformChange: X
      });
      p.on("zoom", ie);
      const pe = V0({
        zoomPanValues: u,
        panOnDrag: N,
        panOnScroll: P,
        onPaneContextMenu: T,
        onPanZoomEnd: a,
        onDraggingChange: l
      });
      p.on("end", pe);
    }
    const de = M0({
      zoomActivationKeyPressed: G,
      panOnDrag: N,
      zoomOnScroll: W,
      panOnScroll: P,
      zoomOnDoubleClick: B,
      zoomOnPinch: M,
      userSelectionActive: C,
      noPanClassName: S,
      noWheelClassName: z,
      lib: I,
      connectionInProgress: J
    });
    p.filter(de), B ? f.on("dblclick.zoom", y) : f.on("dblclick.zoom", null);
  }
  function b() {
    p.on("zoom", null);
  }
  async function $(z, S, T) {
    const C = Ui(z), P = p?.constrain()(C, S, T);
    return P && await w(P), new Promise((N) => N(P));
  }
  async function _(z, S) {
    const T = Ui(z);
    return await w(T, S), new Promise((C) => C(T));
  }
  function x(z) {
    if (f) {
      const S = Ui(z), T = f.property("__zoom");
      (T.k !== z.zoom || T.x !== z.x || T.y !== z.y) && p?.transform(f, S, null, { sync: !0 });
    }
  }
  function k() {
    const z = f ? cc(f.node()) : { x: 0, y: 0, k: 1 };
    return { x: z.x, y: z.y, zoom: z.k };
  }
  function L(z, S) {
    return f ? new Promise((T) => {
      p?.interpolate(S?.interpolate === "linear" ? Ur : Wo).scaleTo(Qi(f, S?.duration, S?.ease, () => T(!0)), z);
    }) : Promise.resolve(!1);
  }
  function D(z, S) {
    return f ? new Promise((T) => {
      p?.interpolate(S?.interpolate === "linear" ? Ur : Wo).scaleBy(Qi(f, S?.duration, S?.ease, () => T(!0)), z);
    }) : Promise.resolve(!1);
  }
  function j(z) {
    p?.scaleExtent(z);
  }
  function H(z) {
    p?.translateExtent(z);
  }
  function A(z) {
    const S = !xn(z) || z < 0 ? 0 : z;
    p?.clickDistance(S);
  }
  return {
    update: m,
    destroy: b,
    setViewport: _,
    setViewportConstrained: $,
    getViewport: k,
    scaleTo: L,
    scaleBy: D,
    setScaleExtent: j,
    setTranslateExtent: H,
    syncViewport: x,
    setClickDistance: A
  };
}
var fl;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(fl || (fl = {}));
var O0 = /* @__PURE__ */ Q("<div><!></div>");
function Xn(e, t) {
  ue(t, !0);
  let n = v(t, "id", 7, null), r = v(t, "type", 7, "source"), o = v(t, "position", 23, () => ye.Top), i = v(t, "style", 7), s = v(t, "class", 7), a = v(t, "isConnectable", 7), l = v(t, "isConnectableStart", 7, !0), u = v(t, "isConnectableEnd", 7, !0), d = v(t, "isValidConnection", 7), p = v(t, "onconnect", 7), f = v(t, "ondisconnect", 7), h = v(t, "children", 7), y = /* @__PURE__ */ Ze(t, [
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
  const w = Wn("svelteflow__node_id"), m = Wn("svelteflow__node_connectable");
  let b = /* @__PURE__ */ E(() => r() === "target"), $ = /* @__PURE__ */ E(() => a() !== void 0 ? a() : m.value), _ = rn(), x = /* @__PURE__ */ E(() => _.ariaLabelConfig), k = null;
  du(() => {
    if (p() || f()) {
      _.edges;
      let M = _.connectionLookup.get(`${w}-${r()}${n() ? `-${n()}` : ""}`);
      if (k && !Dv(M, k)) {
        const W = M ?? /* @__PURE__ */ new Map();
        Qa(k, W, f()), Qa(W, k, p());
      }
      k = new Map(M);
    }
  });
  let L = /* @__PURE__ */ E(() => {
    if (!_.connection.inProgress)
      return [!1, !1, !1, !1, null];
    const { fromHandle: M, toHandle: W, isValid: B } = _.connection, G = M && M.nodeId === w && M.type === r() && M.id === n(), I = W && W.nodeId === w && W.type === r() && W.id === n(), X = _.connectionMode === Dr.Strict ? M?.type !== r() : w !== M?.nodeId || n() !== M?.id;
    return [
      !0,
      G,
      I,
      X,
      I && B
    ];
  }), D = /* @__PURE__ */ E(() => go(c(L), 5)), j = /* @__PURE__ */ E(() => c(D)[0]), H = /* @__PURE__ */ E(() => c(D)[1]), A = /* @__PURE__ */ E(() => c(D)[2]), z = /* @__PURE__ */ E(() => c(D)[3]), S = /* @__PURE__ */ E(() => c(D)[4]);
  function T(M) {
    const W = _.onbeforeconnect ? _.onbeforeconnect(M) : M;
    W && (_.addEdge(W), _.onconnect?.(M));
  }
  function C(M) {
    const W = $c(M);
    M.currentTarget && (W && M.button === 0 || !W) && dl.onPointerDown(M, {
      handleId: n(),
      nodeId: w,
      isTarget: c(b),
      connectionRadius: _.connectionRadius,
      domNode: _.domNode,
      nodeLookup: _.nodeLookup,
      connectionMode: _.connectionMode,
      lib: "svelte",
      autoPanOnConnect: _.autoPanOnConnect,
      autoPanSpeed: _.autoPanSpeed,
      flowId: _.flowId,
      isValidConnection: d() ?? _.isValidConnection,
      updateConnection: _.updateConnection,
      cancelConnection: _.cancelConnection,
      panBy: _.panBy,
      onConnect: T,
      onConnectStart: (B, G) => {
        _.onconnectstart?.(B, {
          nodeId: G.nodeId,
          handleId: G.handleId,
          handleType: G.handleType
        });
      },
      onConnectEnd: (B, G) => {
        _.onconnectend?.(B, G);
      },
      getTransform: () => [_.viewport.x, _.viewport.y, _.viewport.zoom],
      getFromHandle: () => _.connection.fromHandle,
      dragThreshold: _.connectionDragThreshold,
      handleDomNode: M.currentTarget
    });
  }
  function P(M) {
    if (!w || !_.clickConnectStartHandle && !l())
      return;
    if (!_.clickConnectStartHandle) {
      _.onclickconnectstart?.(M, { nodeId: w, handleId: n(), handleType: r() }), _.clickConnectStartHandle = { nodeId: w, type: r(), id: n() };
      return;
    }
    const W = bc(M.target), B = d() ?? _.isValidConnection, { connectionMode: G, clickConnectStartHandle: I, flowId: X, nodeLookup: J } = _, { connection: te, isValid: ne } = dl.isValid(M, {
      handle: { nodeId: w, id: n(), type: r() },
      connectionMode: G,
      fromNodeId: I.nodeId,
      fromHandleId: I.id ?? null,
      fromType: I.type,
      isValidConnection: B,
      flowId: X,
      doc: W,
      lib: "svelte",
      nodeLookup: J
    });
    ne && te && T(te);
    const ee = structuredClone(Yl(_.connection));
    delete ee.inProgress, ee.toPosition = ee.toHandle ? ee.toHandle.position : null, _.onclickconnectend?.(M, ee), _.clickConnectStartHandle = null;
  }
  var N = {
    get id() {
      return n();
    },
    set id(M = null) {
      n(M), g();
    },
    get type() {
      return r();
    },
    set type(M = "source") {
      r(M), g();
    },
    get position() {
      return o();
    },
    set position(M = ye.Top) {
      o(M), g();
    },
    get style() {
      return i();
    },
    set style(M) {
      i(M), g();
    },
    get class() {
      return s();
    },
    set class(M) {
      s(M), g();
    },
    get isConnectable() {
      return a();
    },
    set isConnectable(M) {
      a(M), g();
    },
    get isConnectableStart() {
      return l();
    },
    set isConnectableStart(M = !0) {
      l(M), g();
    },
    get isConnectableEnd() {
      return u();
    },
    set isConnectableEnd(M = !0) {
      u(M), g();
    },
    get isValidConnection() {
      return d();
    },
    set isValidConnection(M) {
      d(M), g();
    },
    get onconnect() {
      return p();
    },
    set onconnect(M) {
      p(M), g();
    },
    get ondisconnect() {
      return f();
    },
    set ondisconnect(M) {
      f(M), g();
    },
    get children() {
      return h();
    },
    set children(M) {
      h(M), g();
    }
  }, K = O0(), Y = () => {
  };
  nt(K, () => ({
    "data-handleid": n(),
    "data-nodeid": w,
    "data-handlepos": o(),
    "data-id": `${_.flowId ?? ""}-${w ?? ""}-${n() ?? "null" ?? ""}-${r() ?? ""}`,
    class: [
      "svelte-flow__handle",
      `svelte-flow__handle-${o()}`,
      _.noDragClass,
      _.noPanClass,
      o(),
      s()
    ],
    onmousedown: C,
    ontouchstart: C,
    onclick: _.clickConnect ? P : void 0,
    onkeypress: Y,
    style: i(),
    role: "button",
    "aria-label": c(x)["handle.ariaLabel"],
    tabindex: "-1",
    ...y,
    [In]: {
      valid: c(S),
      connectingto: c(A),
      connectingfrom: c(H),
      source: !c(b),
      target: c(b),
      connectablestart: l(),
      connectableend: u(),
      connectable: c($),
      connectionindicator: c($) && (!c(j) || c(z)) && (c(j) || _.clickConnectStartHandle ? u() : l())
    }
  }));
  var F = R(K);
  return Xe(F, () => h() ?? mt), Z(K), V(e, K), ce(N);
}
ae(
  Xn,
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
var z0 = /* @__PURE__ */ Q("<!> <!>", 1);
function ua(e, t) {
  ue(t, !0);
  let n = v(t, "data", 7), r = v(t, "targetPosition", 23, () => ye.Top), o = v(t, "sourcePosition", 23, () => ye.Bottom);
  var i = {
    get data() {
      return n();
    },
    set data(d) {
      n(d), g();
    },
    get targetPosition() {
      return r();
    },
    set targetPosition(d = ye.Top) {
      r(d), g();
    },
    get sourcePosition() {
      return o();
    },
    set sourcePosition(d = ye.Bottom) {
      o(d), g();
    }
  }, s = z0(), a = oe(s);
  Xn(a, {
    type: "target",
    get position() {
      return r();
    }
  });
  var l = O(a), u = O(l);
  return Xn(u, {
    type: "source",
    get position() {
      return o();
    }
  }), Ce(() => Re(l, ` ${n()?.label ?? ""} `)), V(e, s), ce(i);
}
ae(ua, { data: {}, targetPosition: {}, sourcePosition: {} }, [], [], !0);
var H0 = /* @__PURE__ */ Q(" <!>", 1);
function Oc(e, t) {
  ue(t, !0);
  let n = v(t, "data", 23, () => ({ label: "Node" })), r = v(t, "sourcePosition", 23, () => ye.Bottom);
  var o = {
    get data() {
      return n();
    },
    set data(l = { label: "Node" }) {
      n(l), g();
    },
    get sourcePosition() {
      return r();
    },
    set sourcePosition(l = ye.Bottom) {
      r(l), g();
    }
  };
  me();
  var i = H0(), s = oe(i), a = O(s);
  return Xn(a, {
    type: "source",
    get position() {
      return r();
    }
  }), Ce(() => Re(s, `${n()?.label ?? ""} `)), V(e, i), ce(o);
}
ae(Oc, { data: {}, sourcePosition: {} }, [], [], !0);
var A0 = /* @__PURE__ */ Q(" <!>", 1);
function zc(e, t) {
  ue(t, !0);
  let n = v(t, "data", 23, () => ({ label: "Node" })), r = v(t, "targetPosition", 23, () => ye.Top);
  var o = {
    get data() {
      return n();
    },
    set data(l = { label: "Node" }) {
      n(l), g();
    },
    get targetPosition() {
      return r();
    },
    set targetPosition(l = ye.Top) {
      r(l), g();
    }
  };
  me();
  var i = A0(), s = oe(i), a = O(s);
  return Xn(a, {
    type: "target",
    get position() {
      return r();
    }
  }), Ce(() => Re(s, `${n()?.label ?? ""} `)), V(e, i), ce(o);
}
ae(zc, { data: {}, targetPosition: {} }, [], [], !0);
function Hc(e, t) {
}
ae(Hc, {}, [], [], !0);
function es(e, t, n) {
  if (!n || !t)
    return;
  const r = n === "root" ? t : t.querySelector(`.svelte-flow__${n}`);
  r && r.appendChild(e);
}
function Ac(e, t) {
  const n = /* @__PURE__ */ E(rn), r = /* @__PURE__ */ E(() => c(n).domNode);
  let o;
  return c(r) ? es(e, c(r), t) : o = js(() => {
    qe(() => {
      es(e, c(r), t), o?.();
    });
  }), {
    async update(i) {
      es(e, c(r), i);
    },
    destroy() {
      e.parentNode && e.parentNode.removeChild(e), o?.();
    }
  };
}
function Ic() {
  let e = /* @__PURE__ */ Ee(typeof window > "u");
  if (c(e)) {
    const t = js(() => {
      qe(() => {
        U(e, !1), t?.();
      });
    });
  }
  return {
    get value() {
      return c(e);
    }
  };
}
const pl = (e) => zv(e), I0 = (e) => pc(e);
function hn(e) {
  return e === void 0 ? void 0 : `${e}px`;
}
const pi = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
};
var Z0 = /* @__PURE__ */ Q("<div><!></div>");
const j0 = {
  hash: "svelte-1ix3cbb",
  code: ".transparent.svelte-1ix3cbb {background:transparent;}"
};
function Zc(e, t) {
  ue(t, !0), He(e, j0);
  let n = v(t, "x", 7, 0), r = v(t, "y", 7, 0), o = v(t, "width", 7), i = v(t, "height", 7), s = v(t, "selectEdgeOnClick", 7, !1), a = v(t, "transparent", 7, !1), l = v(t, "class", 7), u = v(t, "children", 7), d = /* @__PURE__ */ Ze(t, [
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
  const p = rn(), f = Wn("svelteflow__edge_id");
  if (!f)
    throw new Error("EdgeLabel must be used within an edge");
  let h = /* @__PURE__ */ E(() => p.visible.edges.get(f)?.zIndex);
  var y = {
    get x() {
      return n();
    },
    set x($ = 0) {
      n($), g();
    },
    get y() {
      return r();
    },
    set y($ = 0) {
      r($), g();
    },
    get width() {
      return o();
    },
    set width($) {
      o($), g();
    },
    get height() {
      return i();
    },
    set height($) {
      i($), g();
    },
    get selectEdgeOnClick() {
      return s();
    },
    set selectEdgeOnClick($ = !1) {
      s($), g();
    },
    get transparent() {
      return a();
    },
    set transparent($ = !1) {
      a($), g();
    },
    get class() {
      return l();
    },
    set class($) {
      l($), g();
    },
    get children() {
      return u();
    },
    set children($) {
      u($), g();
    }
  }, w = Z0(), m = () => {
    s() && p.handleEdgeSelection(f);
  };
  nt(
    w,
    ($) => ({
      class: [
        "svelte-flow__edge-label",
        { transparent: a() },
        l()
      ],
      tabindex: "-1",
      onclick: m,
      ...d,
      [un]: $
    }),
    [
      () => ({
        display: Ic().value ? "none" : void 0,
        cursor: s() ? "pointer" : void 0,
        transform: `translate(-50%, -50%) translate(${n() ?? ""}px,${r() ?? ""}px)`,
        "pointer-events": "all",
        width: hn(o()),
        height: hn(i()),
        "z-index": c(h)
      })
    ],
    void 0,
    void 0,
    "svelte-1ix3cbb"
  );
  var b = R(w);
  return Xe(b, () => u() ?? mt), Z(w), ht(w, ($, _) => Ac?.($, _), () => "edge-labels"), V(e, w), ce(y);
}
ae(
  Zc,
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
var K0 = /* @__PURE__ */ ve("<path></path>"), R0 = /* @__PURE__ */ ve('<path fill="none"></path><!><!>', 1);
function Po(e, t) {
  ue(t, !0);
  let n = v(t, "id", 7), r = v(t, "path", 7), o = v(t, "label", 7), i = v(t, "labelX", 7), s = v(t, "labelY", 7), a = v(t, "labelStyle", 7), l = v(t, "markerStart", 7), u = v(t, "markerEnd", 7), d = v(t, "style", 7), p = v(t, "interactionWidth", 7, 20), f = v(t, "class", 7), h = /* @__PURE__ */ Ze(t, [
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
  var y = {
    get id() {
      return n();
    },
    set id(k) {
      n(k), g();
    },
    get path() {
      return r();
    },
    set path(k) {
      r(k), g();
    },
    get label() {
      return o();
    },
    set label(k) {
      o(k), g();
    },
    get labelX() {
      return i();
    },
    set labelX(k) {
      i(k), g();
    },
    get labelY() {
      return s();
    },
    set labelY(k) {
      s(k), g();
    },
    get labelStyle() {
      return a();
    },
    set labelStyle(k) {
      a(k), g();
    },
    get markerStart() {
      return l();
    },
    set markerStart(k) {
      l(k), g();
    },
    get markerEnd() {
      return u();
    },
    set markerEnd(k) {
      u(k), g();
    },
    get style() {
      return d();
    },
    set style(k) {
      d(k), g();
    },
    get interactionWidth() {
      return p();
    },
    set interactionWidth(k = 20) {
      p(k), g();
    },
    get class() {
      return f();
    },
    set class(k) {
      f(k), g();
    }
  }, w = R0(), m = oe(w), b = O(m);
  {
    var $ = (k) => {
      var L = K0();
      nt(L, () => ({
        d: r(),
        "stroke-opacity": 0,
        "stroke-width": p(),
        fill: "none",
        class: "svelte-flow__edge-interaction",
        ...h
      })), V(k, L);
    };
    se(b, (k) => {
      p() > 0 && k($);
    });
  }
  var _ = O(b);
  {
    var x = (k) => {
      Zc(k, {
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
        children: (L, D) => {
          me();
          var j = _e();
          Ce(() => Re(j, o())), V(L, j);
        },
        $$slots: { default: !0 }
      });
    };
    se(_, (k) => {
      o() && k(x);
    });
  }
  return Ce(() => {
    $e(m, "id", n()), $e(m, "d", r()), Nt(m, 0, Dn(["svelte-flow__edge-path", f()])), $e(m, "marker-start", l()), $e(m, "marker-end", u()), dt(m, d());
  }), V(e, w), ce(y);
}
ae(
  Po,
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
function ca(e, t) {
  ue(t, !0);
  let n = v(t, "id", 7), r = v(t, "interactionWidth", 7), o = v(t, "label", 7), i = v(t, "labelStyle", 7), s = v(t, "markerEnd", 7), a = v(t, "markerStart", 7), l = v(t, "pathOptions", 7), u = v(t, "sourcePosition", 7), d = v(t, "sourceX", 7), p = v(t, "sourceY", 7), f = v(t, "style", 7), h = v(t, "targetPosition", 7), y = v(t, "targetX", 7), w = v(t, "targetY", 7), m = /* @__PURE__ */ E(() => Cc({
    sourceX: d(),
    sourceY: p(),
    targetX: y(),
    targetY: w(),
    sourcePosition: u(),
    targetPosition: h(),
    curvature: l()?.curvature
  })), b = /* @__PURE__ */ E(() => go(c(m), 3)), $ = /* @__PURE__ */ E(() => c(b)[0]), _ = /* @__PURE__ */ E(() => c(b)[1]), x = /* @__PURE__ */ E(() => c(b)[2]);
  var k = {
    get id() {
      return n();
    },
    set id(L) {
      n(L), g();
    },
    get interactionWidth() {
      return r();
    },
    set interactionWidth(L) {
      r(L), g();
    },
    get label() {
      return o();
    },
    set label(L) {
      o(L), g();
    },
    get labelStyle() {
      return i();
    },
    set labelStyle(L) {
      i(L), g();
    },
    get markerEnd() {
      return s();
    },
    set markerEnd(L) {
      s(L), g();
    },
    get markerStart() {
      return a();
    },
    set markerStart(L) {
      a(L), g();
    },
    get pathOptions() {
      return l();
    },
    set pathOptions(L) {
      l(L), g();
    },
    get sourcePosition() {
      return u();
    },
    set sourcePosition(L) {
      u(L), g();
    },
    get sourceX() {
      return d();
    },
    set sourceX(L) {
      d(L), g();
    },
    get sourceY() {
      return p();
    },
    set sourceY(L) {
      p(L), g();
    },
    get style() {
      return f();
    },
    set style(L) {
      f(L), g();
    },
    get targetPosition() {
      return h();
    },
    set targetPosition(L) {
      h(L), g();
    },
    get targetX() {
      return y();
    },
    set targetX(L) {
      y(L), g();
    },
    get targetY() {
      return w();
    },
    set targetY(L) {
      w(L), g();
    }
  };
  return Po(e, {
    get id() {
      return n();
    },
    get path() {
      return c($);
    },
    get labelX() {
      return c(_);
    },
    get labelY() {
      return c(x);
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
      return f();
    }
  }), ce(k);
}
ae(
  ca,
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
function jc(e, t) {
  ue(t, !0);
  let n = v(t, "interactionWidth", 7), r = v(t, "label", 7), o = v(t, "labelStyle", 7), i = v(t, "style", 7), s = v(t, "markerEnd", 7), a = v(t, "markerStart", 7), l = v(t, "sourcePosition", 7), u = v(t, "sourceX", 7), d = v(t, "sourceY", 7), p = v(t, "targetPosition", 7), f = v(t, "targetX", 7), h = v(t, "targetY", 7), y = /* @__PURE__ */ E(() => ia({
    sourceX: u(),
    sourceY: d(),
    targetX: f(),
    targetY: h(),
    sourcePosition: l(),
    targetPosition: p()
  })), w = /* @__PURE__ */ E(() => go(c(y), 3)), m = /* @__PURE__ */ E(() => c(w)[0]), b = /* @__PURE__ */ E(() => c(w)[1]), $ = /* @__PURE__ */ E(() => c(w)[2]);
  var _ = {
    get interactionWidth() {
      return n();
    },
    set interactionWidth(x) {
      n(x), g();
    },
    get label() {
      return r();
    },
    set label(x) {
      r(x), g();
    },
    get labelStyle() {
      return o();
    },
    set labelStyle(x) {
      o(x), g();
    },
    get style() {
      return i();
    },
    set style(x) {
      i(x), g();
    },
    get markerEnd() {
      return s();
    },
    set markerEnd(x) {
      s(x), g();
    },
    get markerStart() {
      return a();
    },
    set markerStart(x) {
      a(x), g();
    },
    get sourcePosition() {
      return l();
    },
    set sourcePosition(x) {
      l(x), g();
    },
    get sourceX() {
      return u();
    },
    set sourceX(x) {
      u(x), g();
    },
    get sourceY() {
      return d();
    },
    set sourceY(x) {
      d(x), g();
    },
    get targetPosition() {
      return p();
    },
    set targetPosition(x) {
      p(x), g();
    },
    get targetX() {
      return f();
    },
    set targetX(x) {
      f(x), g();
    },
    get targetY() {
      return h();
    },
    set targetY(x) {
      h(x), g();
    }
  };
  return Po(e, {
    get path() {
      return c(m);
    },
    get labelX() {
      return c(b);
    },
    get labelY() {
      return c($);
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
  }), ce(_);
}
ae(
  jc,
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
function Kc(e, t) {
  ue(t, !0);
  let n = v(t, "sourceX", 7), r = v(t, "sourceY", 7), o = v(t, "targetX", 7), i = v(t, "targetY", 7), s = v(t, "label", 7), a = v(t, "labelStyle", 7), l = v(t, "markerStart", 7), u = v(t, "markerEnd", 7), d = v(t, "interactionWidth", 7), p = v(t, "style", 7), f = /* @__PURE__ */ E(() => kc({
    sourceX: n(),
    sourceY: r(),
    targetX: o(),
    targetY: i()
  })), h = /* @__PURE__ */ E(() => go(c(f), 3)), y = /* @__PURE__ */ E(() => c(h)[0]), w = /* @__PURE__ */ E(() => c(h)[1]), m = /* @__PURE__ */ E(() => c(h)[2]);
  var b = {
    get sourceX() {
      return n();
    },
    set sourceX($) {
      n($), g();
    },
    get sourceY() {
      return r();
    },
    set sourceY($) {
      r($), g();
    },
    get targetX() {
      return o();
    },
    set targetX($) {
      o($), g();
    },
    get targetY() {
      return i();
    },
    set targetY($) {
      i($), g();
    },
    get label() {
      return s();
    },
    set label($) {
      s($), g();
    },
    get labelStyle() {
      return a();
    },
    set labelStyle($) {
      a($), g();
    },
    get markerStart() {
      return l();
    },
    set markerStart($) {
      l($), g();
    },
    get markerEnd() {
      return u();
    },
    set markerEnd($) {
      u($), g();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth($) {
      d($), g();
    },
    get style() {
      return p();
    },
    set style($) {
      p($), g();
    }
  };
  return Po(e, {
    get path() {
      return c(y);
    },
    get labelX() {
      return c(w);
    },
    get labelY() {
      return c(m);
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
      return p();
    }
  }), ce(b);
}
ae(
  Kc,
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
function Rc(e, t) {
  ue(t, !0);
  let n = v(t, "sourceX", 7), r = v(t, "sourceY", 7), o = v(t, "sourcePosition", 7), i = v(t, "targetX", 7), s = v(t, "targetY", 7), a = v(t, "targetPosition", 7), l = v(t, "label", 7), u = v(t, "labelStyle", 7), d = v(t, "markerStart", 7), p = v(t, "markerEnd", 7), f = v(t, "interactionWidth", 7), h = v(t, "style", 7), y = /* @__PURE__ */ E(() => ia({
    sourceX: n(),
    sourceY: r(),
    targetX: i(),
    targetY: s(),
    sourcePosition: o(),
    targetPosition: a(),
    borderRadius: 0
  })), w = /* @__PURE__ */ E(() => go(c(y), 3)), m = /* @__PURE__ */ E(() => c(w)[0]), b = /* @__PURE__ */ E(() => c(w)[1]), $ = /* @__PURE__ */ E(() => c(w)[2]);
  var _ = {
    get sourceX() {
      return n();
    },
    set sourceX(x) {
      n(x), g();
    },
    get sourceY() {
      return r();
    },
    set sourceY(x) {
      r(x), g();
    },
    get sourcePosition() {
      return o();
    },
    set sourcePosition(x) {
      o(x), g();
    },
    get targetX() {
      return i();
    },
    set targetX(x) {
      i(x), g();
    },
    get targetY() {
      return s();
    },
    set targetY(x) {
      s(x), g();
    },
    get targetPosition() {
      return a();
    },
    set targetPosition(x) {
      a(x), g();
    },
    get label() {
      return l();
    },
    set label(x) {
      l(x), g();
    },
    get labelStyle() {
      return u();
    },
    set labelStyle(x) {
      u(x), g();
    },
    get markerStart() {
      return d();
    },
    set markerStart(x) {
      d(x), g();
    },
    get markerEnd() {
      return p();
    },
    set markerEnd(x) {
      p(x), g();
    },
    get interactionWidth() {
      return f();
    },
    set interactionWidth(x) {
      f(x), g();
    },
    get style() {
      return h();
    },
    set style(x) {
      h(x), g();
    }
  };
  return Po(e, {
    get path() {
      return c(m);
    },
    get labelX() {
      return c(b);
    },
    get labelY() {
      return c($);
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
      return p();
    },
    get interactionWidth() {
      return f();
    },
    get style() {
      return h();
    }
  }), ce(_);
}
ae(
  Rc,
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
class B0 {
  #e;
  #t;
  /**
   *
   * @param {() => T} fn
   * @param {(update: () => void) => void} onsubscribe
   */
  constructor(t, n) {
    this.#e = t, this.#t = Ul(n);
  }
  get current() {
    return this.#t(), this.#e();
  }
}
const Y0 = /\(.+\)/, W0 = /* @__PURE__ */ new Set(["all", "print", "screen", "and", "or", "not", "only"]);
class q0 extends B0 {
  /**
   * @param {string} query A media query string
   * @param {boolean} [fallback] Fallback value for the server
   */
  constructor(t, n) {
    let r = Y0.test(t) || // we need to use `some` here because technically this `window.matchMedia('random,screen')` still returns true
    t.split(/[\s,]+/).some((i) => W0.has(i.trim())) ? t : `(${t})`;
    const o = window.matchMedia(r);
    super(
      () => o.matches,
      (i) => ds(o, "change", i)
    );
  }
}
function X0(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  return ra(e, { x: 0, y: 0, width: n, height: r }, t, !0).forEach((i) => {
    o.set(i.id, i);
  }), o;
}
function hl(e) {
  const { edges: t, defaultEdgeOptions: n, nodeLookup: r, previousEdges: o, connectionMode: i, onerror: s, onlyRenderVisible: a, elevateEdgesOnSelect: l } = e, u = /* @__PURE__ */ new Map();
  for (const d of t) {
    const p = r.get(d.source), f = r.get(d.target);
    if (!p || !f)
      continue;
    if (a) {
      const { visibleNodes: w, transform: m, width: b, height: $ } = e;
      if (Gv({
        sourceNode: p,
        targetNode: f,
        width: b,
        height: $,
        transform: m
      }))
        w.set(p.id, p), w.set(f.id, f);
      else
        continue;
    }
    const h = o.get(d.id);
    if (h && d === h.edge && p == h.sourceNode && f == h.targetNode) {
      u.set(d.id, h);
      continue;
    }
    const y = r0({
      id: d.id,
      sourceNode: p,
      targetNode: f,
      sourceHandle: d.sourceHandle || null,
      targetHandle: d.targetHandle || null,
      connectionMode: i,
      onError: s
    });
    y && u.set(d.id, {
      ...n,
      ...d,
      ...y,
      zIndex: Fv({
        selected: d.selected,
        zIndex: d.zIndex ?? n.zIndex,
        sourceNode: p,
        targetNode: f,
        elevateOnSelect: l
      }),
      sourceNode: p,
      targetNode: f,
      edge: d
    });
  }
  return u;
}
const Bc = {
  input: Oc,
  output: zc,
  default: ua,
  group: Hc
}, Yc = {
  straight: Kc,
  smoothstep: jc,
  default: ca,
  step: Rc
};
function F0(e, t, n, r, o, i) {
  if (t && !n && r && o) {
    const s = ko(i, {
      filter: (a) => !!((a.width || a.initialWidth) && (a.height || a.initialHeight))
    });
    return oa(s, r, o, 0.5, 2, 0.1);
  } else
    return n ?? { x: 0, y: 0, zoom: 1 };
}
function G0(e) {
  class t {
    #e = /* @__PURE__ */ E(() => e.props.id ?? "1");
    get flowId() {
      return c(this.#e);
    }
    set flowId(r) {
      U(this.#e, r);
    }
    #t = /* @__PURE__ */ Ee(null);
    get domNode() {
      return c(this.#t);
    }
    set domNode(r) {
      U(this.#t, r);
    }
    #n = /* @__PURE__ */ Ee(null);
    get panZoom() {
      return c(this.#n);
    }
    set panZoom(r) {
      U(this.#n, r);
    }
    #r = /* @__PURE__ */ Ee(e.width ?? 0);
    get width() {
      return c(this.#r);
    }
    set width(r) {
      U(this.#r, r);
    }
    #l = /* @__PURE__ */ Ee(e.height ?? 0);
    get height() {
      return c(this.#l);
    }
    set height(r) {
      U(this.#l, r);
    }
    #a = /* @__PURE__ */ E(() => {
      const r = c0(e.nodes, this.nodeLookup, this.parentLookup, {
        nodeExtent: this.nodeExtent,
        nodeOrigin: this.nodeOrigin,
        elevateNodesOnSelect: e.props.elevateNodesOnSelect ?? !0,
        checkEquality: !0
      });
      return this.fitViewQueued && r && (this.fitViewOptions?.duration ? this.resolveFitView() : queueMicrotask(() => {
        this.resolveFitView();
      })), r;
    });
    get nodesInitialized() {
      return c(this.#a);
    }
    set nodesInitialized(r) {
      U(this.#a, r);
    }
    #o = /* @__PURE__ */ E(() => this.panZoom !== null);
    get viewportInitialized() {
      return c(this.#o);
    }
    set viewportInitialized(r) {
      U(this.#o, r);
    }
    #i = /* @__PURE__ */ E(() => (v0(this.connectionLookup, this.edgeLookup, e.edges), e.edges));
    get _edges() {
      return c(this.#i);
    }
    set _edges(r) {
      U(this.#i, r);
    }
    get nodes() {
      return this.nodesInitialized, e.nodes;
    }
    set nodes(r) {
      e.nodes = r;
    }
    get edges() {
      return this._edges;
    }
    set edges(r) {
      e.edges = r;
    }
    _prevSelectedNodes = [];
    _prevSelectedNodeIds = /* @__PURE__ */ new Set();
    #s = /* @__PURE__ */ E(() => {
      const r = this._prevSelectedNodeIds.size, o = /* @__PURE__ */ new Set(), i = this.nodes.filter((s) => (s.selected && (o.add(s.id), this._prevSelectedNodeIds.delete(s.id)), s.selected));
      return (r !== o.size || this._prevSelectedNodeIds.size > 0) && (this._prevSelectedNodes = i), this._prevSelectedNodeIds = o, this._prevSelectedNodes;
    });
    get selectedNodes() {
      return c(this.#s);
    }
    set selectedNodes(r) {
      U(this.#s, r);
    }
    _prevSelectedEdges = [];
    _prevSelectedEdgeIds = /* @__PURE__ */ new Set();
    #u = /* @__PURE__ */ E(() => {
      const r = this._prevSelectedEdgeIds.size, o = /* @__PURE__ */ new Set(), i = this.edges.filter((s) => (s.selected && (o.add(s.id), this._prevSelectedEdgeIds.delete(s.id)), s.selected));
      return (r !== o.size || this._prevSelectedEdgeIds.size > 0) && (this._prevSelectedEdges = i), this._prevSelectedEdgeIds = o, this._prevSelectedEdges;
    });
    get selectedEdges() {
      return c(this.#u);
    }
    set selectedEdges(r) {
      U(this.#u, r);
    }
    selectionChangeHandlers = /* @__PURE__ */ new Map();
    nodeLookup = /* @__PURE__ */ new Map();
    parentLookup = /* @__PURE__ */ new Map();
    connectionLookup = /* @__PURE__ */ new Map();
    edgeLookup = /* @__PURE__ */ new Map();
    _prevVisibleEdges = /* @__PURE__ */ new Map();
    #c = /* @__PURE__ */ E(() => {
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
      let p, f;
      const h = {
        edges: o,
        defaultEdgeOptions: d,
        previousEdges: i,
        nodeLookup: s,
        connectionMode: a,
        elevateEdgesOnSelect: e.props.elevateEdgesOnSelect ?? !0,
        onerror: l
      };
      if (u) {
        const { viewport: y, width: w, height: m } = this, b = [y.x, y.y, y.zoom];
        p = X0(s, b, w, m), f = hl({
          ...h,
          onlyRenderVisible: !0,
          visibleNodes: p,
          transform: b,
          width: w,
          height: m
        });
      } else
        p = this.nodeLookup, f = hl(h);
      return { nodes: p, edges: f };
    });
    get visible() {
      return c(this.#c);
    }
    set visible(r) {
      U(this.#c, r);
    }
    #d = /* @__PURE__ */ E(() => e.props.nodesDraggable ?? !0);
    get nodesDraggable() {
      return c(this.#d);
    }
    set nodesDraggable(r) {
      U(this.#d, r);
    }
    #f = /* @__PURE__ */ E(() => e.props.nodesConnectable ?? !0);
    get nodesConnectable() {
      return c(this.#f);
    }
    set nodesConnectable(r) {
      U(this.#f, r);
    }
    #h = /* @__PURE__ */ E(() => e.props.elementsSelectable ?? !0);
    get elementsSelectable() {
      return c(this.#h);
    }
    set elementsSelectable(r) {
      U(this.#h, r);
    }
    #p = /* @__PURE__ */ E(() => e.props.nodesFocusable ?? !0);
    get nodesFocusable() {
      return c(this.#p);
    }
    set nodesFocusable(r) {
      U(this.#p, r);
    }
    #w = /* @__PURE__ */ E(() => e.props.edgesFocusable ?? !0);
    get edgesFocusable() {
      return c(this.#w);
    }
    set edgesFocusable(r) {
      U(this.#w, r);
    }
    #b = /* @__PURE__ */ E(() => e.props.disableKeyboardA11y ?? !1);
    get disableKeyboardA11y() {
      return c(this.#b);
    }
    set disableKeyboardA11y(r) {
      U(this.#b, r);
    }
    #x = /* @__PURE__ */ E(() => e.props.minZoom ?? 0.5);
    get minZoom() {
      return c(this.#x);
    }
    set minZoom(r) {
      U(this.#x, r);
    }
    #m = /* @__PURE__ */ E(() => e.props.maxZoom ?? 2);
    get maxZoom() {
      return c(this.#m);
    }
    set maxZoom(r) {
      U(this.#m, r);
    }
    #g = /* @__PURE__ */ E(() => e.props.nodeOrigin ?? [0, 0]);
    get nodeOrigin() {
      return c(this.#g);
    }
    set nodeOrigin(r) {
      U(this.#g, r);
    }
    #v = /* @__PURE__ */ E(() => e.props.nodeExtent ?? xs);
    get nodeExtent() {
      return c(this.#v);
    }
    set nodeExtent(r) {
      U(this.#v, r);
    }
    #y = /* @__PURE__ */ E(() => e.props.translateExtent ?? xs);
    get translateExtent() {
      return c(this.#y);
    }
    set translateExtent(r) {
      U(this.#y, r);
    }
    #$ = /* @__PURE__ */ E(() => e.props.defaultEdgeOptions ?? {});
    get defaultEdgeOptions() {
      return c(this.#$);
    }
    set defaultEdgeOptions(r) {
      U(this.#$, r);
    }
    #C = /* @__PURE__ */ E(() => e.props.nodeDragThreshold ?? 1);
    get nodeDragThreshold() {
      return c(this.#C);
    }
    set nodeDragThreshold(r) {
      U(this.#C, r);
    }
    #_ = /* @__PURE__ */ E(() => e.props.autoPanOnNodeDrag ?? !0);
    get autoPanOnNodeDrag() {
      return c(this.#_);
    }
    set autoPanOnNodeDrag(r) {
      U(this.#_, r);
    }
    #k = /* @__PURE__ */ E(() => e.props.autoPanOnConnect ?? !0);
    get autoPanOnConnect() {
      return c(this.#k);
    }
    set autoPanOnConnect(r) {
      U(this.#k, r);
    }
    #S = /* @__PURE__ */ E(() => e.props.autoPanOnNodeFocus ?? !0);
    get autoPanOnNodeFocus() {
      return c(this.#S);
    }
    set autoPanOnNodeFocus(r) {
      U(this.#S, r);
    }
    #E = /* @__PURE__ */ E(() => e.props.autoPanSpeed ?? 15);
    get autoPanSpeed() {
      return c(this.#E);
    }
    set autoPanSpeed(r) {
      U(this.#E, r);
    }
    #P = /* @__PURE__ */ E(() => e.props.connectionDragThreshold ?? 1);
    get connectionDragThreshold() {
      return c(this.#P);
    }
    set connectionDragThreshold(r) {
      U(this.#P, r);
    }
    fitViewQueued = e.props.fitView ?? !1;
    fitViewOptions = e.props.fitViewOptions;
    fitViewResolver = null;
    #N = /* @__PURE__ */ E(() => e.props.snapGrid ?? null);
    get snapGrid() {
      return c(this.#N);
    }
    set snapGrid(r) {
      U(this.#N, r);
    }
    #L = /* @__PURE__ */ Ee(!1);
    get dragging() {
      return c(this.#L);
    }
    set dragging(r) {
      U(this.#L, r);
    }
    #T = /* @__PURE__ */ Ee(null);
    get selectionRect() {
      return c(this.#T);
    }
    set selectionRect(r) {
      U(this.#T, r);
    }
    #V = /* @__PURE__ */ Ee(!1);
    get selectionKeyPressed() {
      return c(this.#V);
    }
    set selectionKeyPressed(r) {
      U(this.#V, r);
    }
    #M = /* @__PURE__ */ Ee(!1);
    get multiselectionKeyPressed() {
      return c(this.#M);
    }
    set multiselectionKeyPressed(r) {
      U(this.#M, r);
    }
    #D = /* @__PURE__ */ Ee(!1);
    get deleteKeyPressed() {
      return c(this.#D);
    }
    set deleteKeyPressed(r) {
      U(this.#D, r);
    }
    #O = /* @__PURE__ */ Ee(!1);
    get panActivationKeyPressed() {
      return c(this.#O);
    }
    set panActivationKeyPressed(r) {
      U(this.#O, r);
    }
    #z = /* @__PURE__ */ Ee(!1);
    get zoomActivationKeyPressed() {
      return c(this.#z);
    }
    set zoomActivationKeyPressed(r) {
      U(this.#z, r);
    }
    #H = /* @__PURE__ */ Ee(null);
    get selectionRectMode() {
      return c(this.#H);
    }
    set selectionRectMode(r) {
      U(this.#H, r);
    }
    #A = /* @__PURE__ */ Ee("");
    get ariaLiveMessage() {
      return c(this.#A);
    }
    set ariaLiveMessage(r) {
      U(this.#A, r);
    }
    #I = /* @__PURE__ */ E(() => e.props.selectionMode ?? ci.Partial);
    get selectionMode() {
      return c(this.#I);
    }
    set selectionMode(r) {
      U(this.#I, r);
    }
    #Z = /* @__PURE__ */ E(() => ({ ...Bc, ...e.props.nodeTypes }));
    get nodeTypes() {
      return c(this.#Z);
    }
    set nodeTypes(r) {
      U(this.#Z, r);
    }
    #j = /* @__PURE__ */ E(() => ({ ...Yc, ...e.props.edgeTypes }));
    get edgeTypes() {
      return c(this.#j);
    }
    set edgeTypes(r) {
      U(this.#j, r);
    }
    #K = /* @__PURE__ */ E(() => e.props.noPanClass ?? "nopan");
    get noPanClass() {
      return c(this.#K);
    }
    set noPanClass(r) {
      U(this.#K, r);
    }
    #R = /* @__PURE__ */ E(() => e.props.noDragClass ?? "nodrag");
    get noDragClass() {
      return c(this.#R);
    }
    set noDragClass(r) {
      U(this.#R, r);
    }
    #B = /* @__PURE__ */ E(() => e.props.noWheelClass ?? "nowheel");
    get noWheelClass() {
      return c(this.#B);
    }
    set noWheelClass(r) {
      U(this.#B, r);
    }
    #Y = /* @__PURE__ */ E(() => Wv(e.props.ariaLabelConfig));
    get ariaLabelConfig() {
      return c(this.#Y);
    }
    set ariaLabelConfig(r) {
      U(this.#Y, r);
    }
    #W = /* @__PURE__ */ Ee(F0(this.nodesInitialized, e.props.fitView, e.props.initialViewport, this.width, this.height, this.nodeLookup));
    get _viewport() {
      return c(this.#W);
    }
    set _viewport(r) {
      U(this.#W, r);
    }
    get viewport() {
      return e.viewport ?? this._viewport;
    }
    set viewport(r) {
      e.viewport && (e.viewport = r), this._viewport = r;
    }
    #q = /* @__PURE__ */ Ee(
      // _connection is viewport independent and originating from XYHandle
      $s
    );
    get _connection() {
      return c(this.#q);
    }
    set _connection(r) {
      U(this.#q, r);
    }
    #X = /* @__PURE__ */ E(() => this._connection.inProgress ? {
      ...this._connection,
      to: Eo(this._connection.to, [this.viewport.x, this.viewport.y, this.viewport.zoom])
    } : this._connection);
    get connection() {
      return c(this.#X);
    }
    set connection(r) {
      U(this.#X, r);
    }
    #F = /* @__PURE__ */ E(() => e.props.connectionMode ?? Dr.Strict);
    get connectionMode() {
      return c(this.#F);
    }
    set connectionMode(r) {
      U(this.#F, r);
    }
    #G = /* @__PURE__ */ E(() => e.props.connectionRadius ?? 20);
    get connectionRadius() {
      return c(this.#G);
    }
    set connectionRadius(r) {
      U(this.#G, r);
    }
    #J = /* @__PURE__ */ E(() => e.props.isValidConnection ?? (() => !0));
    get isValidConnection() {
      return c(this.#J);
    }
    set isValidConnection(r) {
      U(this.#J, r);
    }
    #U = /* @__PURE__ */ E(() => e.props.selectNodesOnDrag ?? !0);
    get selectNodesOnDrag() {
      return c(this.#U);
    }
    set selectNodesOnDrag(r) {
      U(this.#U, r);
    }
    #Q = /* @__PURE__ */ E(() => e.props.defaultMarkerColor === void 0 ? "#b1b1b7" : e.props.defaultMarkerColor);
    get defaultMarkerColor() {
      return c(this.#Q);
    }
    set defaultMarkerColor(r) {
      U(this.#Q, r);
    }
    #ee = /* @__PURE__ */ E(() => o0(e.edges, {
      defaultColor: this.defaultMarkerColor,
      id: this.flowId,
      defaultMarkerStart: this.defaultEdgeOptions.markerStart,
      defaultMarkerEnd: this.defaultEdgeOptions.markerEnd
    }));
    get markers() {
      return c(this.#ee);
    }
    set markers(r) {
      U(this.#ee, r);
    }
    #te = /* @__PURE__ */ E(() => e.props.onlyRenderVisibleElements ?? !1);
    get onlyRenderVisibleElements() {
      return c(this.#te);
    }
    set onlyRenderVisibleElements(r) {
      U(this.#te, r);
    }
    #ne = /* @__PURE__ */ E(() => e.props.onflowerror ?? Kv);
    get onerror() {
      return c(this.#ne);
    }
    set onerror(r) {
      U(this.#ne, r);
    }
    #re = /* @__PURE__ */ E(() => e.props.ondelete);
    get ondelete() {
      return c(this.#re);
    }
    set ondelete(r) {
      U(this.#re, r);
    }
    #oe = /* @__PURE__ */ E(() => e.props.onbeforedelete);
    get onbeforedelete() {
      return c(this.#oe);
    }
    set onbeforedelete(r) {
      U(this.#oe, r);
    }
    #ie = /* @__PURE__ */ E(() => e.props.onbeforeconnect);
    get onbeforeconnect() {
      return c(this.#ie);
    }
    set onbeforeconnect(r) {
      U(this.#ie, r);
    }
    #se = /* @__PURE__ */ E(() => e.props.onconnect);
    get onconnect() {
      return c(this.#se);
    }
    set onconnect(r) {
      U(this.#se, r);
    }
    #ae = /* @__PURE__ */ E(() => e.props.onconnectstart);
    get onconnectstart() {
      return c(this.#ae);
    }
    set onconnectstart(r) {
      U(this.#ae, r);
    }
    #le = /* @__PURE__ */ E(() => e.props.onconnectend);
    get onconnectend() {
      return c(this.#le);
    }
    set onconnectend(r) {
      U(this.#le, r);
    }
    #ue = /* @__PURE__ */ E(() => e.props.onbeforereconnect);
    get onbeforereconnect() {
      return c(this.#ue);
    }
    set onbeforereconnect(r) {
      U(this.#ue, r);
    }
    #ce = /* @__PURE__ */ E(() => e.props.onreconnect);
    get onreconnect() {
      return c(this.#ce);
    }
    set onreconnect(r) {
      U(this.#ce, r);
    }
    #de = /* @__PURE__ */ E(() => e.props.onreconnectstart);
    get onreconnectstart() {
      return c(this.#de);
    }
    set onreconnectstart(r) {
      U(this.#de, r);
    }
    #fe = /* @__PURE__ */ E(() => e.props.onreconnectend);
    get onreconnectend() {
      return c(this.#fe);
    }
    set onreconnectend(r) {
      U(this.#fe, r);
    }
    #pe = /* @__PURE__ */ E(() => e.props.clickConnect ?? !0);
    get clickConnect() {
      return c(this.#pe);
    }
    set clickConnect(r) {
      U(this.#pe, r);
    }
    #he = /* @__PURE__ */ E(() => e.props.onclickconnectstart);
    get onclickconnectstart() {
      return c(this.#he);
    }
    set onclickconnectstart(r) {
      U(this.#he, r);
    }
    #ge = /* @__PURE__ */ E(() => e.props.onclickconnectend);
    get onclickconnectend() {
      return c(this.#ge);
    }
    set onclickconnectend(r) {
      U(this.#ge, r);
    }
    #ve = /* @__PURE__ */ Ee(null);
    get clickConnectStartHandle() {
      return c(this.#ve);
    }
    set clickConnectStartHandle(r) {
      U(this.#ve, r);
    }
    #me = /* @__PURE__ */ E(() => e.props.onselectiondrag);
    get onselectiondrag() {
      return c(this.#me);
    }
    set onselectiondrag(r) {
      U(this.#me, r);
    }
    #ye = /* @__PURE__ */ E(() => e.props.onselectiondragstart);
    get onselectiondragstart() {
      return c(this.#ye);
    }
    set onselectiondragstart(r) {
      U(this.#ye, r);
    }
    #we = /* @__PURE__ */ E(() => e.props.onselectiondragstop);
    get onselectiondragstop() {
      return c(this.#we);
    }
    set onselectiondragstop(r) {
      U(this.#we, r);
    }
    resolveFitView = async () => {
      this.panZoom && (await Zv(
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
    _prefersDark = new q0("(prefers-color-scheme: dark)", e.props.colorModeSSR === "dark");
    #be = /* @__PURE__ */ E(() => e.props.colorMode === "system" ? this._prefersDark.current ? "dark" : "light" : e.props.colorMode ?? "light");
    get colorMode() {
      return c(this.#be);
    }
    set colorMode(r) {
      U(this.#be, r);
    }
    constructor() {
    }
    resetStoreValues() {
      this.dragging = !1, this.selectionRect = null, this.selectionRectMode = null, this.selectionKeyPressed = !1, this.multiselectionKeyPressed = !1, this.deleteKeyPressed = !1, this.panActivationKeyPressed = !1, this.zoomActivationKeyPressed = !1, this._connection = $s, this.clickConnectStartHandle = null, this.viewport = e.props.initialViewport ?? { x: 0, y: 0, zoom: 1 }, this.ariaLiveMessage = "";
    }
  }
  return new t();
}
function rn() {
  const e = Wn(hi);
  if (!e)
    throw new Error("To call useStore outside of <SvelteFlow /> you need to wrap your component in a <SvelteFlowProvider />");
  return e.getStore();
}
const hi = Symbol();
function Wc(e) {
  const t = G0(e);
  function n(A) {
    t.nodeTypes = {
      ...Bc,
      ...A
    };
  }
  function r(A) {
    t.edgeTypes = {
      ...Yc,
      ...A
    };
  }
  function o(A) {
    t.edges = Qv(A, t.edges);
  }
  const i = (A, z = !1) => {
    t.nodes = t.nodes.map((S) => {
      const T = A.get(S.id);
      return T ? { ...S, position: T.position, dragging: z } : S;
    });
  };
  function s(A) {
    const { changes: z, updatedInternals: S } = h0(A, t.nodeLookup, t.parentLookup, t.domNode, t.nodeOrigin);
    if (!S)
      return;
    l0(t.nodeLookup, t.parentLookup, {
      nodeOrigin: t.nodeOrigin,
      nodeExtent: t.nodeExtent
    }), t.fitViewQueued && t.resolveFitView();
    const T = /* @__PURE__ */ new Map();
    for (const C of z) {
      const P = t.nodeLookup.get(C.id)?.internals.userNode;
      if (!P)
        continue;
      const N = { ...P };
      switch (C.type) {
        case "dimensions": {
          const K = { ...N.measured, ...C.dimensions };
          C.setAttributes && (N.width = C.dimensions?.width ?? N.width, N.height = C.dimensions?.height ?? N.height), N.measured = K;
          break;
        }
        case "position":
          N.position = C.position ?? N.position;
          break;
      }
      T.set(C.id, N);
    }
    t.nodes = t.nodes.map((C) => T.get(C.id) ?? C);
  }
  function a(A) {
    const z = t.fitViewResolver ?? Promise.withResolvers();
    return t.fitViewQueued = !0, t.fitViewOptions = A, t.fitViewResolver = z, t.nodes = [...t.nodes], z.promise;
  }
  async function l(A, z, S) {
    const T = typeof S?.zoom < "u" ? S.zoom : t.maxZoom, C = t.panZoom;
    return C ? (await C.setViewport({
      x: t.width / 2 - A * T,
      y: t.height / 2 - z * T,
      zoom: T
    }, { duration: S?.duration, ease: S?.ease, interpolate: S?.interpolate }), Promise.resolve(!0)) : Promise.resolve(!1);
  }
  function u(A, z) {
    const S = t.panZoom;
    return S ? S.scaleBy(A, z) : Promise.resolve(!1);
  }
  function d(A) {
    return u(1.2, A);
  }
  function p(A) {
    return u(1 / 1.2, A);
  }
  function f(A) {
    const z = t.panZoom;
    z && (z.setScaleExtent([A, t.maxZoom]), t.minZoom = A);
  }
  function h(A) {
    const z = t.panZoom;
    z && (z.setScaleExtent([t.minZoom, A]), t.maxZoom = A);
  }
  function y(A) {
    const z = t.panZoom;
    z && (z.setTranslateExtent(A), t.translateExtent = A);
  }
  function w(A, z = null) {
    let S = !1;
    const T = A.map((C) => (!z || z.has(C.id)) && C.selected ? (S = !0, { ...C, selected: !1 }) : C);
    return [S, T];
  }
  function m(A) {
    const z = A?.nodes ? new Set(A.nodes.map((K) => K.id)) : null, [S, T] = w(t.nodes, z);
    S && (t.nodes = T);
    const C = A?.edges ? new Set(A.edges.map((K) => K.id)) : null, [P, N] = w(t.edges, C);
    P && (t.edges = N);
  }
  function b(A) {
    const z = t.multiselectionKeyPressed;
    t.nodes = t.nodes.map((S) => {
      const T = A.includes(S.id), C = z && S.selected || T;
      return !!S.selected !== C ? { ...S, selected: C } : S;
    }), z || m({ nodes: [] });
  }
  function $(A) {
    const z = t.multiselectionKeyPressed;
    t.edges = t.edges.map((S) => {
      const T = A.includes(S.id), C = z && S.selected || T;
      return !!S.selected !== C ? { ...S, selected: C } : S;
    }), z || m({ edges: [] });
  }
  function _(A, z, S) {
    const T = t.nodeLookup.get(A);
    if (!T) {
      console.warn("012", ao.error012(A));
      return;
    }
    t.selectionRect = null, t.selectionRectMode = null, T.selected ? (z || T.selected && t.multiselectionKeyPressed) && (m({ nodes: [T], edges: [] }), requestAnimationFrame(() => S?.blur())) : b([A]);
  }
  function x(A) {
    const z = t.edgeLookup.get(A);
    if (!z) {
      console.warn("012", ao.error012(A));
      return;
    }
    (z.selectable || t.elementsSelectable && typeof z.selectable > "u") && (t.selectionRect = null, t.selectionRectMode = null, z.selected ? z.selected && t.multiselectionKeyPressed && m({ nodes: [], edges: [z] }) : $([A]));
  }
  function k(A, z) {
    const { nodeExtent: S, snapGrid: T, nodeOrigin: C, nodeLookup: P, nodesDraggable: N, onerror: K } = t, Y = /* @__PURE__ */ new Map(), F = T?.[0] ?? 5, M = T?.[1] ?? 5, W = A.x * F * z, B = A.y * M * z;
    for (const G of P.values()) {
      if (!(G.selected && (G.draggable || N && typeof G.draggable > "u")))
        continue;
      let I = {
        x: G.internals.positionAbsolute.x + W,
        y: G.internals.positionAbsolute.y + B
      };
      T && (I = So(I, T));
      const { position: X, positionAbsolute: J } = hc({
        nodeId: G.id,
        nextPosition: I,
        nodeLookup: P,
        nodeExtent: S,
        nodeOrigin: C,
        onError: K
      });
      G.position = X, G.internals.positionAbsolute = J, Y.set(G.id, G);
    }
    i(Y);
  }
  function L(A) {
    return g0({
      delta: A,
      panZoom: t.panZoom,
      transform: [t.viewport.x, t.viewport.y, t.viewport.zoom],
      translateExtent: t.translateExtent,
      width: t.width,
      height: t.height
    });
  }
  const D = (A) => {
    t._connection = { ...A };
  };
  function j() {
    t._connection = $s;
  }
  function H() {
    t.resetStoreValues(), m();
  }
  return Object.assign(t, {
    setNodeTypes: n,
    setEdgeTypes: r,
    addEdge: o,
    updateNodePositions: i,
    updateNodeInternals: s,
    zoomIn: d,
    zoomOut: p,
    fitView: a,
    setCenter: l,
    setMinZoom: f,
    setMaxZoom: h,
    setTranslateExtent: y,
    unselectNodesAndEdges: m,
    addSelectedNodes: b,
    addSelectedEdges: $,
    handleNodeSelection: _,
    handleEdgeSelection: x,
    moveSelectedNodes: k,
    panBy: L,
    updateConnection: D,
    cancelConnection: j,
    reset: H
  });
}
function J0(e, t) {
  const { minZoom: n, maxZoom: r, initialViewport: o, onPanZoomStart: i, onPanZoom: s, onPanZoomEnd: a, translateExtent: l, setPanZoomInstance: u, onDraggingChange: d, onTransformChange: p } = t, f = D0({
    domNode: e,
    minZoom: n,
    maxZoom: r,
    translateExtent: l,
    viewport: o,
    onPanZoom: s,
    onPanZoomStart: i,
    onPanZoomEnd: a,
    onDraggingChange: d
  }), h = f.getViewport();
  return (o.x !== h.x || o.y !== h.y || o.zoom !== h.zoom) && p([h.x, h.y, h.zoom]), u(f), f.update(t), {
    update(y) {
      f.update(y);
    }
  };
}
var U0 = /* @__PURE__ */ Q('<div class="svelte-flow__zoom svelte-flow__container"><!></div>');
function qc(e, t) {
  ue(t, !0);
  let n = v(t, "store", 15), r = v(t, "panOnScrollMode", 7), o = v(t, "preventScrolling", 7), i = v(t, "zoomOnScroll", 7), s = v(t, "zoomOnDoubleClick", 7), a = v(t, "zoomOnPinch", 7), l = v(t, "panOnDrag", 7), u = v(t, "panOnScroll", 7), d = v(t, "panOnScrollSpeed", 7), p = v(t, "paneClickDistance", 7), f = v(t, "selectionOnDrag", 7), h = v(t, "onmovestart", 7), y = v(t, "onmove", 7), w = v(t, "onmoveend", 7), m = v(t, "oninit", 7), b = v(t, "children", 7), $ = /* @__PURE__ */ E(() => n().panActivationKeyPressed || l()), _ = /* @__PURE__ */ E(() => n().panActivationKeyPressed || u());
  const { viewport: x } = n();
  let k = !1;
  qe(() => {
    !k && n().viewportInitialized && (m()?.(), k = !0);
  });
  var L = {
    get store() {
      return n();
    },
    set store(H) {
      n(H), g();
    },
    get panOnScrollMode() {
      return r();
    },
    set panOnScrollMode(H) {
      r(H), g();
    },
    get preventScrolling() {
      return o();
    },
    set preventScrolling(H) {
      o(H), g();
    },
    get zoomOnScroll() {
      return i();
    },
    set zoomOnScroll(H) {
      i(H), g();
    },
    get zoomOnDoubleClick() {
      return s();
    },
    set zoomOnDoubleClick(H) {
      s(H), g();
    },
    get zoomOnPinch() {
      return a();
    },
    set zoomOnPinch(H) {
      a(H), g();
    },
    get panOnDrag() {
      return l();
    },
    set panOnDrag(H) {
      l(H), g();
    },
    get panOnScroll() {
      return u();
    },
    set panOnScroll(H) {
      u(H), g();
    },
    get panOnScrollSpeed() {
      return d();
    },
    set panOnScrollSpeed(H) {
      d(H), g();
    },
    get paneClickDistance() {
      return p();
    },
    set paneClickDistance(H) {
      p(H), g();
    },
    get selectionOnDrag() {
      return f();
    },
    set selectionOnDrag(H) {
      f(H), g();
    },
    get onmovestart() {
      return h();
    },
    set onmovestart(H) {
      h(H), g();
    },
    get onmove() {
      return y();
    },
    set onmove(H) {
      y(H), g();
    },
    get onmoveend() {
      return w();
    },
    set onmoveend(H) {
      w(H), g();
    },
    get oninit() {
      return m();
    },
    set oninit(H) {
      m(H), g();
    },
    get children() {
      return b();
    },
    set children(H) {
      b(H), g();
    }
  }, D = U0(), j = R(D);
  return Xe(j, b), Z(D), ht(D, (H, A) => J0?.(H, A), () => ({
    viewport: n().viewport,
    minZoom: n().minZoom,
    maxZoom: n().maxZoom,
    initialViewport: x,
    onDraggingChange: (H) => {
      n(n().dragging = H, !0);
    },
    setPanZoomInstance: (H) => {
      n(n().panZoom = H, !0);
    },
    onPanZoomStart: h(),
    onPanZoom: y(),
    onPanZoomEnd: w(),
    zoomOnScroll: i(),
    zoomOnDoubleClick: s(),
    zoomOnPinch: a(),
    panOnScroll: c(_),
    panOnDrag: c($),
    panOnScrollSpeed: d(),
    panOnScrollMode: r(),
    zoomActivationKeyPressed: n().zoomActivationKeyPressed,
    preventScrolling: typeof o() == "boolean" ? o() : !0,
    noPanClassName: n().noPanClass,
    noWheelClassName: n().noWheelClass,
    userSelectionActive: !!n().selectionRect,
    translateExtent: n().translateExtent,
    lib: "svelte",
    paneClickDistance: p(),
    selectionOnDrag: f(),
    onTransformChange: (H) => {
      n(n().viewport = { x: H[0], y: H[1], zoom: H[2] }, !0);
    },
    connectionInProgress: n().connection.inProgress
  })), V(e, D), ce(L);
}
ae(
  qc,
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
function gl(e, t) {
  return (n) => {
    n.target === t && e?.(n);
  };
}
function vl(e) {
  return (t) => {
    const n = e.has(t.id);
    return !!t.selected !== n ? { ...t, selected: n } : t;
  };
}
function ml(e, t) {
  if (e.size !== t.size)
    return !1;
  for (const n of e)
    if (!t.has(n))
      return !1;
  return !0;
}
var Q0 = /* @__PURE__ */ Q("<div><!></div>");
function Xc(e, t) {
  ue(t, !0);
  let n = v(t, "store", 15), r = v(t, "panOnDrag", 7, !0), o = v(t, "paneClickDistance", 7, 1), i = v(t, "selectionOnDrag", 7), s = v(t, "onpaneclick", 7), a = v(t, "onpanecontextmenu", 7), l = v(t, "onselectionstart", 7), u = v(t, "onselectionend", 7), d = v(t, "children", 7), p, f = null, h = /* @__PURE__ */ new Set(), y = /* @__PURE__ */ new Set(), w = /* @__PURE__ */ E(() => n().panActivationKeyPressed || r()), m = /* @__PURE__ */ E(() => n().selectionKeyPressed || !!n().selectionRect || i() && c(w) !== !0), b = /* @__PURE__ */ E(() => n().elementsSelectable && (c(m) || n().selectionRectMode === "user")), $ = !1;
  function _(P) {
    if (f = p?.getBoundingClientRect(), !f) return;
    const N = P.target === p, K = !N && !!P.target.closest(".nokey"), Y = i() && N || n().selectionKeyPressed;
    if (K || !c(m) || !Y || P.button !== 0 || !P.isPrimary)
      return;
    P.target?.setPointerCapture?.(P.pointerId), $ = !1;
    const { x: F, y: M } = Jt(P, f);
    n(n().selectionRect = { width: 0, height: 0, startX: F, startY: M, x: F, y: M }, !0), N || (P.stopPropagation(), P.preventDefault());
  }
  function x(P) {
    if (!c(m) || !f || !n().selectionRect)
      return;
    const N = Jt(P, f), { startX: K = 0, startY: Y = 0 } = n().selectionRect;
    if (!$) {
      const G = n().selectionKeyPressed ? 0 : o();
      if (Math.hypot(N.x - K, N.y - Y) <= G)
        return;
      n().unselectNodesAndEdges(), l()?.(P);
    }
    $ = !0;
    const F = {
      ...n().selectionRect,
      x: N.x < K ? N.x : K,
      y: N.y < Y ? N.y : Y,
      width: Math.abs(N.x - K),
      height: Math.abs(N.y - Y)
    }, M = h, W = y;
    h = new Set(ra(
      n().nodeLookup,
      F,
      [
        n().viewport.x,
        n().viewport.y,
        n().viewport.zoom
      ],
      n().selectionMode === ci.Partial,
      !0
    ).map((G) => G.id));
    const B = n().defaultEdgeOptions.selectable ?? !0;
    y = /* @__PURE__ */ new Set();
    for (const G of h) {
      const I = n().connectionLookup.get(G);
      if (I)
        for (const { edgeId: X } of I.values()) {
          const J = n().edgeLookup.get(X);
          J && (J.selectable ?? B) && y.add(X);
        }
    }
    ml(M, h) || n(n().nodes = n().nodes.map(vl(h)), !0), ml(W, y) || n(n().edges = n().edges.map(vl(y)), !0), n(n().selectionRectMode = "user", !0), n(n().selectionRect = F, !0);
  }
  function k(P) {
    P.button === 0 && (P.target?.releasePointerCapture?.(P.pointerId), !$ && P.target === p && j?.(P), n(n().selectionRect = null, !0), $ && n(n().selectionRectMode = h.size > 0 ? "nodes" : null, !0), $ && u()?.(P));
  }
  const L = (P) => {
    if (Array.isArray(c(w)) && c(w).includes(2)) {
      P.preventDefault();
      return;
    }
    a()?.({ event: P });
  }, D = (P) => {
    $ && (P.stopPropagation(), $ = !1);
  };
  function j(P) {
    if ($ || n().connection.inProgress) {
      $ = !1;
      return;
    }
    s()?.({ event: P }), n().unselectNodesAndEdges(), n(n().selectionRectMode = null, !0), n(n().selectionRect = null, !0);
  }
  var H = {
    get store() {
      return n();
    },
    set store(P) {
      n(P), g();
    },
    get panOnDrag() {
      return r();
    },
    set panOnDrag(P = !0) {
      r(P), g();
    },
    get paneClickDistance() {
      return o();
    },
    set paneClickDistance(P = 1) {
      o(P), g();
    },
    get selectionOnDrag() {
      return i();
    },
    set selectionOnDrag(P) {
      i(P), g();
    },
    get onpaneclick() {
      return s();
    },
    set onpaneclick(P) {
      s(P), g();
    },
    get onpanecontextmenu() {
      return a();
    },
    set onpanecontextmenu(P) {
      a(P), g();
    },
    get onselectionstart() {
      return l();
    },
    set onselectionstart(P) {
      l(P), g();
    },
    get onselectionend() {
      return u();
    },
    set onselectionend(P) {
      u(P), g();
    },
    get children() {
      return d();
    },
    set children(P) {
      d(P), g();
    }
  }, A = Q0();
  let z;
  var S = /* @__PURE__ */ E(() => c(b) ? void 0 : gl(j, p));
  A.__click = function(...P) {
    c(S)?.apply(this, P);
  }, A.__pointermove = function(...P) {
    (c(b) ? x : void 0)?.apply(this, P);
  }, A.__pointerup = function(...P) {
    (c(b) ? k : void 0)?.apply(this, P);
  };
  var T = /* @__PURE__ */ E(() => gl(L, p));
  A.__contextmenu = function(...P) {
    c(T)?.apply(this, P);
  };
  var C = R(A);
  return Xe(C, d), Z(A), Lt(A, (P) => p = P, () => p), Ce((P) => z = Nt(A, 1, "svelte-flow__pane svelte-flow__container", null, z, P), [
    () => ({
      draggable: r() === !0 || Array.isArray(r()) && r().includes(0),
      dragging: n().dragging,
      selection: c(m)
    })
  ]), ni(
    "pointerdown",
    A,
    function(...P) {
      (c(b) ? _ : void 0)?.apply(this, P);
    },
    !0
  ), ni(
    "click",
    A,
    function(...P) {
      (c(b) ? D : void 0)?.apply(this, P);
    },
    !0
  ), V(e, A), ce(H);
}
Qn(["click", "pointermove", "pointerup", "contextmenu"]);
ae(
  Xc,
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
var em = /* @__PURE__ */ Q('<div class="svelte-flow__viewport xyflow__viewport svelte-flow__container"><!></div>');
function Fc(e, t) {
  ue(t, !0);
  let n = v(t, "store", 15), r = v(t, "children", 7);
  var o = {
    get store() {
      return n();
    },
    set store(l) {
      n(l), g();
    },
    get children() {
      return r();
    },
    set children(l) {
      r(l), g();
    }
  }, i = em();
  let s;
  var a = R(i);
  return Xe(a, r), Z(i), Ce(() => s = dt(i, "", s, {
    transform: `translate(${n().viewport.x ?? ""}px, ${n().viewport.y ?? ""}px) scale(${n().viewport.zoom ?? ""})`
  })), V(e, i), ce(o);
}
ae(Fc, { store: {}, children: {} }, [], [], !0);
function Gc(e, t) {
  const { store: n, onDrag: r, onDragStart: o, onDragStop: i, onNodeMouseDown: s } = t, a = b0({
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
  return l(e, t), {
    update(u) {
      l(e, u);
    },
    destroy() {
      a.destroy();
    }
  };
}
var tm = /* @__PURE__ */ Q('<div aria-live="assertive" aria-atomic="true" class="a11y-live-msg svelte-1u4lacj"> </div>'), nm = /* @__PURE__ */ Q('<div class="a11y-hidden svelte-1u4lacj"> </div> <div class="a11y-hidden svelte-1u4lacj"> </div> <!>', 1);
const rm = {
  hash: "svelte-1u4lacj",
  code: ".a11y-hidden.svelte-1u4lacj {display:none;}.a11y-live-msg.svelte-1u4lacj {position:absolute;width:1px;height:1px;margin:-1px;border:0;padding:0;overflow:hidden;clip:rect(0px, 0px, 0px, 0px);clip-path:inset(100%);}"
};
function Jc(e, t) {
  ue(t, !0), He(e, rm);
  let n = v(t, "store", 7);
  var r = {
    get store() {
      return n();
    },
    set store(p) {
      n(p), g();
    }
  }, o = nm(), i = oe(o), s = R(i, !0);
  Z(i);
  var a = O(i, 2), l = R(a, !0);
  Z(a);
  var u = O(a, 2);
  {
    var d = (p) => {
      var f = tm(), h = R(f, !0);
      Z(f), Ce(() => {
        $e(f, "id", `${om}-${n().flowId}`), Re(h, n().ariaLiveMessage);
      }), V(p, f);
    };
    se(u, (p) => {
      n().disableKeyboardA11y || p(d);
    });
  }
  return Ce(() => {
    $e(i, "id", `${Uc}-${n().flowId}`), Re(s, n().disableKeyboardA11y ? n().ariaLabelConfig["node.a11yDescription.default"] : n().ariaLabelConfig["node.a11yDescription.keyboardDisabled"]), $e(a, "id", `${Qc}-${n().flowId}`), Re(l, n().ariaLabelConfig["edge.a11yDescription.default"]);
  }), V(e, o), ce(r);
}
ae(Jc, { store: {} }, [], [], !0);
const Uc = "svelte-flow__node-desc", Qc = "svelte-flow__edge-desc", om = "svelte-flow__aria-live";
var im = /* @__PURE__ */ Q("<div><!></div>");
function ed(e, t) {
  ue(t, !0);
  let n = v(t, "store", 15), r = v(t, "node", 7), o = v(t, "resizeObserver", 7), i = v(t, "nodeClickDistance", 7), s = v(t, "onnodeclick", 7), a = v(t, "onnodedrag", 7), l = v(t, "onnodedragstart", 7), u = v(t, "onnodedragstop", 7), d = v(t, "onnodepointerenter", 7), p = v(t, "onnodepointerleave", 7), f = v(t, "onnodepointermove", 7), h = v(t, "onnodecontextmenu", 7), y = /* @__PURE__ */ E(() => bt(r().data, () => ({}), !0)), w = /* @__PURE__ */ E(() => bt(r().selected, !1)), m = /* @__PURE__ */ E(() => r().draggable), b = /* @__PURE__ */ E(() => r().selectable), $ = /* @__PURE__ */ E(() => bt(r().deletable, !0)), _ = /* @__PURE__ */ E(() => r().connectable), x = /* @__PURE__ */ E(() => r().focusable), k = /* @__PURE__ */ E(() => bt(r().hidden, !1)), L = /* @__PURE__ */ E(() => bt(r().dragging, !1)), D = /* @__PURE__ */ E(() => bt(r().style, "")), j = /* @__PURE__ */ E(() => r().class), H = /* @__PURE__ */ E(() => bt(r().type, "default")), A = /* @__PURE__ */ E(() => r().parentId), z = /* @__PURE__ */ E(() => r().sourcePosition), S = /* @__PURE__ */ E(() => r().targetPosition), T = /* @__PURE__ */ E(() => bt(r().measured, () => ({ width: 0, height: 0 }), !0).width), C = /* @__PURE__ */ E(() => bt(r().measured, () => ({ width: 0, height: 0 }), !0).height), P = /* @__PURE__ */ E(() => r().initialWidth), N = /* @__PURE__ */ E(() => r().initialHeight), K = /* @__PURE__ */ E(() => r().width), Y = /* @__PURE__ */ E(() => r().height), F = /* @__PURE__ */ E(() => r().dragHandle), M = /* @__PURE__ */ E(() => bt(r().internals.z, 0)), W = /* @__PURE__ */ E(() => r().internals.positionAbsolute.x), B = /* @__PURE__ */ E(() => r().internals.positionAbsolute.y), G = /* @__PURE__ */ E(() => r().internals.userNode), { id: I } = r(), X = /* @__PURE__ */ E(() => c(m) ?? n().nodesDraggable), J = /* @__PURE__ */ E(() => c(b) ?? n().elementsSelectable), te = /* @__PURE__ */ E(() => c(_) ?? n().nodesConnectable), ne = /* @__PURE__ */ E(() => yc(r())), ee = /* @__PURE__ */ E(() => !!r().internals.handleBounds), he = /* @__PURE__ */ E(() => c(ne) && c(ee)), de = /* @__PURE__ */ E(() => c(x) ?? n().nodesFocusable);
  function re(fe) {
    return n().parentLookup.has(fe);
  }
  let ie = /* @__PURE__ */ E(() => re(I)), pe = /* @__PURE__ */ Ee(null), ge = null, we = c(H), le = c(z), be = c(S), De = /* @__PURE__ */ E(() => n().nodeTypes[c(H)] ?? ua), q = /* @__PURE__ */ E(() => n().ariaLabelConfig);
  Pr("svelteflow__node_connectable", {
    get value() {
      return c(te);
    }
  }), Pr("svelteflow__node_id", I);
  let je = /* @__PURE__ */ E(() => {
    const fe = c(T) === void 0 ? c(K) ?? c(P) : c(K), Se = c(C) === void 0 ? c(Y) ?? c(N) : c(Y);
    if (!(fe === void 0 && Se === void 0 && c(D) === void 0))
      return `${c(D)};${fe ? `width:${hn(fe)};` : ""}${Se ? `height:${hn(Se)};` : ""}`;
  });
  qe(() => {
    (c(H) !== we || c(z) !== le || c(S) !== be) && c(pe) !== null && requestAnimationFrame(() => {
      c(pe) !== null && n().updateNodeInternals(/* @__PURE__ */ new Map([[I, { id: I, nodeElement: c(pe), force: !0 }]]));
    }), we = c(H), le = c(z), be = c(S);
  }), qe(() => {
    o() && (!c(he) || c(pe) !== ge) && (ge && o().unobserve(ge), c(pe) && o().observe(c(pe)), ge = c(pe));
  }), xo(() => {
    ge && o()?.unobserve(ge);
  });
  function Oe(fe) {
    c(J) && (!n().selectNodesOnDrag || !c(X) || n().nodeDragThreshold > 0) && n().handleNodeSelection(I), s()?.({ node: c(G), event: fe });
  }
  function Ae(fe) {
    if (!(xc(fe) || n().disableKeyboardA11y))
      if (fc.includes(fe.key) && c(J)) {
        const Se = fe.key === "Escape";
        n().handleNodeSelection(I, Se, c(pe));
      } else c(X) && r().selected && Object.prototype.hasOwnProperty.call(pi, fe.key) && (fe.preventDefault(), n(
        n().ariaLiveMessage = c(q)["node.a11yDescription.ariaLiveMessage"]({
          direction: fe.key.replace("Arrow", "").toLowerCase(),
          x: ~~r().internals.positionAbsolute.x,
          y: ~~r().internals.positionAbsolute.y
        }),
        !0
      ), n().moveSelectedNodes(pi[fe.key], fe.shiftKey ? 4 : 1));
  }
  const Ke = () => {
    if (n().disableKeyboardA11y || !n().autoPanOnNodeFocus || !c(pe)?.matches(":focus-visible"))
      return;
    const { width: fe, height: Se, viewport: Qe } = n();
    ra(/* @__PURE__ */ new Map([[I, r()]]), { x: 0, y: 0, width: fe, height: Se }, [Qe.x, Qe.y, Qe.zoom], !0).length > 0 || n().setCenter(r().position.x + (r().measured.width ?? 0) / 2, r().position.y + (r().measured.height ?? 0) / 2, { zoom: Qe.zoom });
  };
  var Ge = {
    get store() {
      return n();
    },
    set store(fe) {
      n(fe), g();
    },
    get node() {
      return r();
    },
    set node(fe) {
      r(fe), g();
    },
    get resizeObserver() {
      return o();
    },
    set resizeObserver(fe) {
      o(fe), g();
    },
    get nodeClickDistance() {
      return i();
    },
    set nodeClickDistance(fe) {
      i(fe), g();
    },
    get onnodeclick() {
      return s();
    },
    set onnodeclick(fe) {
      s(fe), g();
    },
    get onnodedrag() {
      return a();
    },
    set onnodedrag(fe) {
      a(fe), g();
    },
    get onnodedragstart() {
      return l();
    },
    set onnodedragstart(fe) {
      l(fe), g();
    },
    get onnodedragstop() {
      return u();
    },
    set onnodedragstop(fe) {
      u(fe), g();
    },
    get onnodepointerenter() {
      return d();
    },
    set onnodepointerenter(fe) {
      d(fe), g();
    },
    get onnodepointerleave() {
      return p();
    },
    set onnodepointerleave(fe) {
      p(fe), g();
    },
    get onnodepointermove() {
      return f();
    },
    set onnodepointermove(fe) {
      f(fe), g();
    },
    get onnodecontextmenu() {
      return h();
    },
    set onnodecontextmenu(fe) {
      h(fe), g();
    }
  }, wt = ke(), sn = oe(wt);
  {
    var rt = (fe) => {
      var Se = im();
      nt(Se, () => ({
        "data-id": I,
        class: [
          "svelte-flow__node",
          `svelte-flow__node-${c(H)}`,
          c(j)
        ],
        style: c(je),
        onclick: Oe,
        onpointerenter: d() ? (ze) => d()({ node: c(G), event: ze }) : void 0,
        onpointerleave: p() ? (ze) => p()({ node: c(G), event: ze }) : void 0,
        onpointermove: f() ? (ze) => f()({ node: c(G), event: ze }) : void 0,
        oncontextmenu: h() ? (ze) => h()({ node: c(G), event: ze }) : void 0,
        onkeydown: c(de) ? Ae : void 0,
        onfocus: c(de) ? Ke : void 0,
        tabIndex: c(de) ? 0 : void 0,
        role: r().ariaRole ?? (c(de) ? "group" : void 0),
        "aria-roledescription": "node",
        "aria-describedby": n().disableKeyboardA11y ? void 0 : `${Uc}-${n().flowId}`,
        ...r().domAttributes,
        [In]: {
          dragging: c(L),
          selected: c(w),
          draggable: c(X),
          connectable: c(te),
          selectable: c(J),
          nopan: c(X),
          parent: c(ie)
        },
        [un]: {
          "z-index": c(M),
          transform: `translate(${c(W) ?? ""}px, ${c(B) ?? ""}px)`,
          visibility: c(ne) ? "visible" : "hidden"
        }
      }));
      var Qe = R(Se);
      Pi(Qe, () => c(De), (ze, et) => {
        et(ze, {
          get data() {
            return c(y);
          },
          get id() {
            return I;
          },
          get selected() {
            return c(w);
          },
          get selectable() {
            return c(J);
          },
          get deletable() {
            return c($);
          },
          get sourcePosition() {
            return c(z);
          },
          get targetPosition() {
            return c(S);
          },
          get zIndex() {
            return c(M);
          },
          get dragging() {
            return c(L);
          },
          get draggable() {
            return c(X);
          },
          get dragHandle() {
            return c(F);
          },
          get parentId() {
            return c(A);
          },
          get type() {
            return c(H);
          },
          get isConnectable() {
            return c(te);
          },
          get positionAbsoluteX() {
            return c(W);
          },
          get positionAbsoluteY() {
            return c(B);
          },
          get width() {
            return c(K);
          },
          get height() {
            return c(Y);
          }
        });
      }), Z(Se), ht(Se, (ze, et) => Gc?.(ze, et), () => ({
        nodeId: I,
        isSelectable: c(J),
        disabled: !c(X),
        handleSelector: c(F),
        noDragClass: n().noDragClass,
        nodeClickDistance: i(),
        onNodeMouseDown: n().handleNodeSelection,
        onDrag: (ze, et, Wt, st) => {
          a()?.({ event: ze, targetNode: Wt, nodes: st });
        },
        onDragStart: (ze, et, Wt, st) => {
          l()?.({ event: ze, targetNode: Wt, nodes: st });
        },
        onDragStop: (ze, et, Wt, st) => {
          u()?.({ event: ze, targetNode: Wt, nodes: st });
        },
        store: n()
      })), Lt(Se, (ze) => U(pe, ze), () => c(pe)), V(fe, Se);
    };
    se(sn, (fe) => {
      c(k) || fe(rt);
    });
  }
  return V(e, wt), ce(Ge);
}
ae(
  ed,
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
var sm = /* @__PURE__ */ Q('<div class="svelte-flow__nodes"></div>');
function td(e, t) {
  ue(t, !0);
  let n = v(t, "store", 15), r = v(t, "nodeClickDistance", 7), o = v(t, "onnodeclick", 7), i = v(t, "onnodecontextmenu", 7), s = v(t, "onnodepointerenter", 7), a = v(t, "onnodepointermove", 7), l = v(t, "onnodepointerleave", 7), u = v(t, "onnodedrag", 7), d = v(t, "onnodedragstart", 7), p = v(t, "onnodedragstop", 7);
  const f = typeof ResizeObserver > "u" ? null : new ResizeObserver((w) => {
    const m = /* @__PURE__ */ new Map();
    w.forEach((b) => {
      const $ = b.target.getAttribute("data-id");
      m.set($, { id: $, nodeElement: b.target, force: !0 });
    }), n().updateNodeInternals(m);
  });
  xo(() => {
    f?.disconnect();
  });
  var h = {
    get store() {
      return n();
    },
    set store(w) {
      n(w), g();
    },
    get nodeClickDistance() {
      return r();
    },
    set nodeClickDistance(w) {
      r(w), g();
    },
    get onnodeclick() {
      return o();
    },
    set onnodeclick(w) {
      o(w), g();
    },
    get onnodecontextmenu() {
      return i();
    },
    set onnodecontextmenu(w) {
      i(w), g();
    },
    get onnodepointerenter() {
      return s();
    },
    set onnodepointerenter(w) {
      s(w), g();
    },
    get onnodepointermove() {
      return a();
    },
    set onnodepointermove(w) {
      a(w), g();
    },
    get onnodepointerleave() {
      return l();
    },
    set onnodepointerleave(w) {
      l(w), g();
    },
    get onnodedrag() {
      return u();
    },
    set onnodedrag(w) {
      u(w), g();
    },
    get onnodedragstart() {
      return d();
    },
    set onnodedragstart(w) {
      d(w), g();
    },
    get onnodedragstop() {
      return p();
    },
    set onnodedragstop(w) {
      p(w), g();
    }
  }, y = sm();
  return yt(y, 21, () => n().visible.nodes.values(), (w) => w.id, (w, m) => {
    ed(w, {
      get node() {
        return c(m);
      },
      get resizeObserver() {
        return f;
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
        return p();
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
  }), Z(y), V(e, y), ce(h);
}
ae(
  td,
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
var am = /* @__PURE__ */ ve('<svg class="svelte-flow__edge-wrapper"><g><!></g></svg>');
function nd(e, t) {
  ue(t, !0);
  const n = v(t, "edge", 7), r = v(t, "store", 15), o = v(t, "onedgeclick", 7), i = v(t, "onedgecontextmenu", 7), s = v(t, "onedgepointerenter", 7), a = v(t, "onedgepointerleave", 7);
  let l = /* @__PURE__ */ E(() => n().source), u = /* @__PURE__ */ E(() => n().target), d = /* @__PURE__ */ E(() => n().sourceX), p = /* @__PURE__ */ E(() => n().sourceY), f = /* @__PURE__ */ E(() => n().targetX), h = /* @__PURE__ */ E(() => n().targetY), y = /* @__PURE__ */ E(() => n().sourcePosition), w = /* @__PURE__ */ E(() => n().targetPosition), m = /* @__PURE__ */ E(() => bt(n().animated, !1)), b = /* @__PURE__ */ E(() => bt(n().selected, !1)), $ = /* @__PURE__ */ E(() => n().label), _ = /* @__PURE__ */ E(() => n().labelStyle), x = /* @__PURE__ */ E(() => bt(n().data, () => ({}), !0)), k = /* @__PURE__ */ E(() => n().style), L = /* @__PURE__ */ E(() => n().interactionWidth), D = /* @__PURE__ */ E(() => bt(n().type, "default")), j = /* @__PURE__ */ E(() => n().sourceHandle), H = /* @__PURE__ */ E(() => n().targetHandle), A = /* @__PURE__ */ E(() => n().markerStart), z = /* @__PURE__ */ E(() => n().markerEnd), S = /* @__PURE__ */ E(() => n().selectable), T = /* @__PURE__ */ E(() => n().focusable), C = /* @__PURE__ */ E(() => bt(n().deletable, !0)), P = /* @__PURE__ */ E(() => n().hidden), N = /* @__PURE__ */ E(() => n().zIndex), K = /* @__PURE__ */ E(() => n().class), Y = /* @__PURE__ */ E(() => n().ariaLabel), F = null;
  const { id: M } = n();
  Pr("svelteflow__edge_id", M);
  let W = /* @__PURE__ */ E(() => c(S) ?? r().elementsSelectable), B = /* @__PURE__ */ E(() => c(T) ?? r().edgesFocusable), G = /* @__PURE__ */ E(() => r().edgeTypes[c(D)] ?? ca), I = /* @__PURE__ */ E(() => c(A) ? `url('#${_s(c(A), r().flowId)}')` : void 0), X = /* @__PURE__ */ E(() => c(z) ? `url('#${_s(c(z), r().flowId)}')` : void 0);
  function J(ie) {
    const pe = r().edgeLookup.get(M);
    pe && (c(W) && r().handleEdgeSelection(M), o()?.({ event: ie, edge: pe }));
  }
  function te(ie, pe) {
    const ge = r().edgeLookup.get(M);
    ge && pe({ event: ie, edge: ge });
  }
  function ne(ie) {
    if (!r().disableKeyboardA11y && fc.includes(ie.key) && c(W)) {
      const { unselectNodesAndEdges: pe, addSelectedEdges: ge } = r();
      ie.key === "Escape" ? (F?.blur(), pe({ edges: [n()] })) : ge([M]);
    }
  }
  var ee = {
    get edge() {
      return n();
    },
    set edge(ie) {
      n(ie), g();
    },
    get store() {
      return r();
    },
    set store(ie) {
      r(ie), g();
    },
    get onedgeclick() {
      return o();
    },
    set onedgeclick(ie) {
      o(ie), g();
    },
    get onedgecontextmenu() {
      return i();
    },
    set onedgecontextmenu(ie) {
      i(ie), g();
    },
    get onedgepointerenter() {
      return s();
    },
    set onedgepointerenter(ie) {
      s(ie), g();
    },
    get onedgepointerleave() {
      return a();
    },
    set onedgepointerleave(ie) {
      a(ie), g();
    }
  }, he = ke(), de = oe(he);
  {
    var re = (ie) => {
      var pe = am();
      let ge;
      var we = R(pe);
      nt(we, () => ({
        class: ["svelte-flow__edge", c(K)],
        "data-id": M,
        onclick: J,
        oncontextmenu: i() ? (be) => {
          te(be, i());
        } : void 0,
        onpointerenter: s() ? (be) => {
          te(be, s());
        } : void 0,
        onpointerleave: a() ? (be) => {
          te(be, a());
        } : void 0,
        "aria-label": c(Y) === null ? void 0 : c(Y) ? c(Y) : `Edge from ${c(l)} to ${c(u)}`,
        "aria-describedby": c(B) ? `${Qc}-${r().flowId}` : void 0,
        role: n().ariaRole ?? (c(B) ? "group" : "img"),
        "aria-roledescription": "edge",
        onkeydown: c(B) ? ne : void 0,
        tabindex: c(B) ? 0 : void 0,
        ...n().domAttributes,
        [In]: {
          animated: c(m),
          selected: c(b),
          selectable: c(W)
        }
      }));
      var le = R(we);
      Pi(le, () => c(G), (be, De) => {
        De(be, {
          get id() {
            return M;
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
            return c(p);
          },
          get targetX() {
            return c(f);
          },
          get targetY() {
            return c(h);
          },
          get sourcePosition() {
            return c(y);
          },
          get targetPosition() {
            return c(w);
          },
          get animated() {
            return c(m);
          },
          get selected() {
            return c(b);
          },
          get label() {
            return c($);
          },
          get labelStyle() {
            return c(_);
          },
          get data() {
            return c(x);
          },
          get style() {
            return c(k);
          },
          get interactionWidth() {
            return c(L);
          },
          get selectable() {
            return c(W);
          },
          get deletable() {
            return c(C);
          },
          get type() {
            return c(D);
          },
          get sourceHandleId() {
            return c(j);
          },
          get targetHandleId() {
            return c(H);
          },
          get markerStart() {
            return c(I);
          },
          get markerEnd() {
            return c(X);
          }
        });
      }), Z(we), Lt(we, (be) => F = be, () => F), Z(pe), Ce(() => ge = dt(pe, "", ge, { "z-index": c(N) })), V(ie, pe);
    };
    se(de, (ie) => {
      c(P) || ie(re);
    });
  }
  return V(e, he), ce(ee);
}
ae(
  nd,
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
Gf();
var lm = /* @__PURE__ */ ve("<defs></defs>");
function rd(e, t) {
  ue(t, !1);
  const n = rn();
  Du();
  var r = lm();
  yt(r, 5, () => n.markers, (o) => o.id, (o, i) => {
    od(o, Be(() => c(i)));
  }), Z(r), V(e, r), ce();
}
ae(rd, {}, [], [], !0);
var um = /* @__PURE__ */ ve('<polyline class="arrow" fill="none" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4"></polyline>'), cm = /* @__PURE__ */ ve('<polyline class="arrowclosed" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), dm = /* @__PURE__ */ ve('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function od(e, t) {
  ue(t, !0);
  let n = v(t, "id", 7), r = v(t, "type", 7), o = v(t, "width", 7, 12.5), i = v(t, "height", 7, 12.5), s = v(t, "markerUnits", 7, "strokeWidth"), a = v(t, "orient", 7, "auto-start-reverse"), l = v(t, "color", 7, "none"), u = v(t, "strokeWidth", 7);
  var d = {
    get id() {
      return n();
    },
    set id(w) {
      n(w), g();
    },
    get type() {
      return r();
    },
    set type(w) {
      r(w), g();
    },
    get width() {
      return o();
    },
    set width(w = 12.5) {
      o(w), g();
    },
    get height() {
      return i();
    },
    set height(w = 12.5) {
      i(w), g();
    },
    get markerUnits() {
      return s();
    },
    set markerUnits(w = "strokeWidth") {
      s(w), g();
    },
    get orient() {
      return a();
    },
    set orient(w = "auto-start-reverse") {
      a(w), g();
    },
    get color() {
      return l();
    },
    set color(w = "none") {
      l(w), g();
    },
    get strokeWidth() {
      return u();
    },
    set strokeWidth(w) {
      u(w), g();
    }
  }, p = dm(), f = R(p);
  {
    var h = (w) => {
      var m = um();
      let b;
      Ce(() => {
        $e(m, "stroke-width", u()), b = dt(m, "", b, { stroke: l() });
      }), V(w, m);
    }, y = (w) => {
      var m = ke(), b = oe(m);
      {
        var $ = (_) => {
          var x = cm();
          let k;
          Ce(() => {
            $e(x, "stroke-width", u()), k = dt(x, "", k, { stroke: l(), fill: l() });
          }), V(_, x);
        };
        se(
          b,
          (_) => {
            r() === lo.ArrowClosed && _($);
          },
          !0
        );
      }
      V(w, m);
    };
    se(f, (w) => {
      r() === lo.Arrow ? w(h) : w(y, !1);
    });
  }
  return Z(p), Ce(() => {
    $e(p, "id", n()), $e(p, "markerWidth", `${o()}`), $e(p, "markerHeight", `${i()}`), $e(p, "markerUnits", s()), $e(p, "orient", a());
  }), V(e, p), ce(d);
}
ae(
  od,
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
var fm = /* @__PURE__ */ Q('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!></div>');
function id(e, t) {
  ue(t, !0);
  let n = v(t, "store", 15), r = v(t, "onedgeclick", 7), o = v(t, "onedgecontextmenu", 7), i = v(t, "onedgepointerenter", 7), s = v(t, "onedgepointerleave", 7);
  var a = {
    get store() {
      return n();
    },
    set store(f) {
      n(f), g();
    },
    get onedgeclick() {
      return r();
    },
    set onedgeclick(f) {
      r(f), g();
    },
    get onedgecontextmenu() {
      return o();
    },
    set onedgecontextmenu(f) {
      o(f), g();
    },
    get onedgepointerenter() {
      return i();
    },
    set onedgepointerenter(f) {
      i(f), g();
    },
    get onedgepointerleave() {
      return s();
    },
    set onedgepointerleave(f) {
      s(f), g();
    }
  }, l = fm(), u = R(l), d = R(u);
  rd(d, {}), Z(u);
  var p = O(u, 2);
  return yt(p, 17, () => n().visible.edges.values(), (f) => f.id, (f, h) => {
    nd(f, {
      get edge() {
        return c(h);
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
      set store(y) {
        n(y);
      }
    });
  }), Z(l), V(e, l), ce(a);
}
ae(
  id,
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
var pm = /* @__PURE__ */ Q('<div class="svelte-flow__selection svelte-qtk83j"></div>');
const hm = {
  hash: "svelte-qtk83j",
  code: ".svelte-flow__selection.svelte-qtk83j {position:absolute;top:0;left:0;}"
};
function da(e, t) {
  ue(t, !0), He(e, hm);
  let n = v(t, "x", 7, 0), r = v(t, "y", 7, 0), o = v(t, "width", 7, 0), i = v(t, "height", 7, 0), s = v(t, "isVisible", 7, !0);
  var a = {
    get x() {
      return n();
    },
    set x(p = 0) {
      n(p), g();
    },
    get y() {
      return r();
    },
    set y(p = 0) {
      r(p), g();
    },
    get width() {
      return o();
    },
    set width(p = 0) {
      o(p), g();
    },
    get height() {
      return i();
    },
    set height(p = 0) {
      i(p), g();
    },
    get isVisible() {
      return s();
    },
    set isVisible(p = !0) {
      s(p), g();
    }
  }, l = ke(), u = oe(l);
  {
    var d = (p) => {
      var f = pm();
      let h;
      Ce((y) => h = dt(f, "", h, y), [
        () => ({
          width: typeof o() == "string" ? o() : hn(o()),
          height: typeof i() == "string" ? i() : hn(i()),
          transform: `translate(${n()}px, ${r()}px)`
        })
      ]), V(p, f);
    };
    se(u, (p) => {
      s() && p(d);
    });
  }
  return V(e, l), ce(a);
}
ae(da, { x: {}, y: {}, width: {}, height: {}, isVisible: {} }, [], [], !0);
var gm = /* @__PURE__ */ Q("<div><!></div>");
const vm = {
  hash: "svelte-c7g5lf",
  code: `.svelte-flow__selection-wrapper.svelte-c7g5lf {position:absolute;top:0;left:0;z-index:2000;pointer-events:all;}.svelte-flow__selection-wrapper.svelte-c7g5lf:focus,
  .svelte-flow__selection-wrapper.svelte-c7g5lf:focus-visible {outline:none;}`
};
function sd(e, t) {
  ue(t, !0), He(e, vm);
  let n = v(t, "store", 15), r = v(t, "onnodedrag", 7), o = v(t, "onnodedragstart", 7), i = v(t, "onnodedragstop", 7), s = v(t, "onselectionclick", 7), a = v(t, "onselectioncontextmenu", 7), l = /* @__PURE__ */ Ee(void 0);
  qe(() => {
    n().disableKeyboardA11y || c(l)?.focus({ preventScroll: !0 });
  });
  let u = /* @__PURE__ */ E(() => {
    if (n().selectionRectMode === "nodes") {
      n().nodes;
      const b = ko(n().nodeLookup, { filter: ($) => !!$.selected });
      if (b.width > 0 && b.height > 0)
        return b;
    }
    return null;
  });
  function d(b) {
    const $ = n().nodes.filter((_) => _.selected);
    a()?.({ nodes: $, event: b });
  }
  function p(b) {
    const $ = n().nodes.filter((_) => _.selected);
    s()?.({ nodes: $, event: b });
  }
  function f(b) {
    Object.prototype.hasOwnProperty.call(pi, b.key) && (b.preventDefault(), n().moveSelectedNodes(pi[b.key], b.shiftKey ? 4 : 1));
  }
  var h = {
    get store() {
      return n();
    },
    set store(b) {
      n(b), g();
    },
    get onnodedrag() {
      return r();
    },
    set onnodedrag(b) {
      r(b), g();
    },
    get onnodedragstart() {
      return o();
    },
    set onnodedragstart(b) {
      o(b), g();
    },
    get onnodedragstop() {
      return i();
    },
    set onnodedragstop(b) {
      i(b), g();
    },
    get onselectionclick() {
      return s();
    },
    set onselectionclick(b) {
      s(b), g();
    },
    get onselectioncontextmenu() {
      return a();
    },
    set onselectioncontextmenu(b) {
      a(b), g();
    }
  }, y = ke(), w = oe(y);
  {
    var m = (b) => {
      var $ = gm();
      $.__contextmenu = d, $.__click = p, $.__keydown = function(...k) {
        (n().disableKeyboardA11y ? void 0 : f)?.apply(this, k);
      };
      let _;
      var x = R($);
      da(x, { width: "100%", height: "100%", x: 0, y: 0 }), Z($), ht($, (k, L) => Gc?.(k, L), () => ({
        disabled: !1,
        store: n(),
        onDrag: (k, L, D, j) => {
          r()?.({ event: k, targetNode: null, nodes: j });
        },
        onDragStart: (k, L, D, j) => {
          o()?.({ event: k, targetNode: null, nodes: j });
        },
        onDragStop: (k, L, D, j) => {
          i()?.({ event: k, targetNode: null, nodes: j });
        }
      })), Lt($, (k) => U(l, k), () => c(l)), Ce(
        (k) => {
          Nt($, 1, Dn(["svelte-flow__selection-wrapper", n().noPanClass]), "svelte-c7g5lf"), $e($, "role", n().disableKeyboardA11y ? void 0 : "button"), $e($, "tabindex", n().disableKeyboardA11y ? void 0 : -1), _ = dt($, "", _, k);
        },
        [
          () => ({
            width: hn(c(u).width),
            height: hn(c(u).height),
            transform: `translate(${c(u).x ?? ""}px, ${c(u).y ?? ""}px)`
          })
        ]
      ), V(b, $);
    };
    se(w, (b) => {
      n().selectionRectMode === "nodes" && c(u) && xn(c(u).x) && xn(c(u).y) && b(m);
    });
  }
  return V(e, y), ce(h);
}
Qn(["contextmenu", "click", "keydown"]);
ae(
  sd,
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
function mm(e) {
  switch (e) {
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
function an(e, t) {
  let { enabled: n = !0, trigger: r, type: o = "keydown" } = t;
  function i(a) {
    const l = Array.isArray(r) ? r : [r], u = [a.metaKey, a.altKey, a.shiftKey, a.ctrlKey].reduce(
      (d, p, f) => p ? d | 1 << f : d,
      0
    );
    for (const d of l) {
      const p = {
        preventDefault: !1,
        enabled: !0,
        ...d
      }, { modifier: f, key: h, callback: y, preventDefault: w, enabled: m } = p;
      if (m) {
        if (a.key !== h) continue;
        if (f === null || f === !1) {
          if (u !== 0) continue;
        } else if (f !== void 0 && f?.[0]?.length > 0) {
          const $ = Array.isArray(f) ? f : [f];
          let _ = !1;
          for (const x of $)
            if ((Array.isArray(x) ? x : [x]).reduce(
              (k, L) => k | mm(L),
              0
            ) === u) {
              _ = !0;
              break;
            }
          if (!_) continue;
        }
        w && a.preventDefault();
        const b = {
          node: e,
          trigger: p,
          originalEvent: a
        };
        e.dispatchEvent(new CustomEvent("shortcut", { detail: b })), y?.(b);
      }
    }
  }
  let s;
  return n && (s = ds(e, o, i)), {
    update: (a) => {
      const { enabled: l = !0, type: u = "keydown" } = a;
      n && (!l || o !== u) ? s?.() : !n && l && (s = ds(e, u, i)), n = l, o = u, r = a.trigger;
    },
    destroy: () => {
      s?.();
    }
  };
}
function it() {
  const e = /* @__PURE__ */ E(rn), t = (i) => {
    const s = pl(i) ? i : c(e).nodeLookup.get(i.id), a = s.parentId ? Yv(s.position, s.measured, s.parentId, c(e).nodeLookup, c(e).nodeOrigin) : s.position, l = {
      ...s,
      position: a,
      width: s.measured?.width ?? s.width,
      height: s.measured?.height ?? s.height
    };
    return zr(l);
  };
  function n(i, s, a = { replace: !1 }) {
    c(e).nodes = lt(() => c(e).nodes).map((l) => {
      if (l.id === i) {
        const u = typeof s == "function" ? s(l) : s;
        return a?.replace && pl(u) ? u : { ...l, ...u };
      }
      return l;
    });
  }
  function r(i, s, a = { replace: !1 }) {
    c(e).edges = lt(() => c(e).edges).map((l) => {
      if (l.id === i) {
        const u = typeof s == "function" ? s(l) : s;
        return a.replace && I0(u) ? u : { ...l, ...u };
      }
      return l;
    });
  }
  const o = (i) => c(e).nodeLookup.get(i);
  return {
    zoomIn: c(e).zoomIn,
    zoomOut: c(e).zoomOut,
    getInternalNode: o,
    getNode: (i) => o(i)?.internals.userNode,
    getNodes: (i) => i === void 0 ? c(e).nodes : yl(c(e).nodeLookup, i),
    getEdge: (i) => c(e).edgeLookup.get(i),
    getEdges: (i) => i === void 0 ? c(e).edges : yl(c(e).edgeLookup, i),
    setZoom: (i, s) => {
      const a = c(e).panZoom;
      return a ? a.scaleTo(i, { duration: s?.duration }) : Promise.resolve(!1);
    },
    getZoom: () => c(e).viewport.zoom,
    setViewport: async (i, s) => {
      const a = c(e).viewport;
      return c(e).panZoom ? (await c(e).panZoom.setViewport(
        {
          x: i.x ?? a.x,
          y: i.y ?? a.y,
          zoom: i.zoom ?? a.zoom
        },
        s
      ), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    getViewport: () => Yl(c(e).viewport),
    setCenter: async (i, s, a) => c(e).setCenter(i, s, a),
    fitView: (i) => c(e).fitView(i),
    fitBounds: async (i, s) => {
      if (!c(e).panZoom)
        return Promise.resolve(!1);
      const a = oa(i, c(e).width, c(e).height, c(e).minZoom, c(e).maxZoom, s?.padding ?? 0.1);
      return await c(e).panZoom.setViewport(a, {
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
      const l = tl(i), u = l ? i : t(i);
      return u ? (a || c(e).nodes).filter((d) => {
        const p = c(e).nodeLookup.get(d.id);
        if (!p || !l && d.id === i.id)
          return !1;
        const f = zr(p), h = uo(f, u);
        return s && h > 0 || h >= f.width * f.height || h >= u.width * u.height;
      }) : [];
    },
    isNodeIntersecting: (i, s, a = !0) => {
      const l = tl(i) ? i : t(i);
      if (!l)
        return !1;
      const u = uo(l, s);
      return a && u > 0 || u >= s.width * s.height || u >= l.width * l.height;
    },
    deleteElements: async ({ nodes: i = [], edges: s = [] }) => {
      const { nodes: a, edges: l } = await jv({
        nodesToRemove: i,
        edgesToRemove: s,
        nodes: c(e).nodes,
        edges: c(e).edges,
        onBeforeDelete: c(e).onbeforedelete
      });
      return a && (c(e).nodes = lt(() => c(e).nodes).filter((u) => !a.some(({ id: d }) => d === u.id))), l && (c(e).edges = lt(() => c(e).edges).filter((u) => !l.some(({ id: d }) => d === u.id))), (a.length > 0 || l.length > 0) && c(e).ondelete?.({ nodes: a, edges: l }), { deletedNodes: a, deletedEdges: l };
    },
    screenToFlowPosition: (i, s = { snapToGrid: !0 }) => {
      if (!c(e).domNode)
        return i;
      const a = s.snapToGrid ? c(e).snapGrid : !1, { x: l, y: u, zoom: d } = c(e).viewport, { x: p, y: f } = c(e).domNode.getBoundingClientRect(), h = { x: i.x - p, y: i.y - f };
      return Eo(h, [l, u, d], a !== null, a || [1, 1]);
    },
    /**
     *
     * @param position
     * @returns
     */
    flowToScreenPosition: (i) => {
      if (!c(e).domNode)
        return i;
      const { x: s, y: a, zoom: l } = c(e).viewport, { x: u, y: d } = c(e).domNode.getBoundingClientRect(), p = fi(i, [s, a, l]);
      return { x: p.x + u, y: p.y + d };
    },
    toObject: () => structuredClone({
      nodes: [...c(e).nodes],
      edges: [...c(e).edges],
      viewport: { ...c(e).viewport }
    }),
    updateNode: n,
    updateNodeData: (i, s, a) => {
      const l = c(e).nodeLookup.get(i)?.internals.userNode;
      if (!l)
        return;
      const u = typeof s == "function" ? s(l) : s;
      n(i, (d) => ({
        ...d,
        data: a?.replace ? u : { ...d.data, ...u }
      }));
    },
    updateEdge: r,
    getNodesBounds: (i) => Hv(i, {
      nodeLookup: c(e).nodeLookup,
      nodeOrigin: c(e).nodeOrigin
    }),
    getHandleConnections: ({ type: i, id: s, nodeId: a }) => Array.from(c(e).connectionLookup.get(`${a}-${i}-${s ?? null}`)?.values() ?? [])
  };
}
function yl(e, t) {
  const n = [];
  for (const r of t) {
    const o = e.get(r);
    if (o) {
      const i = "internals" in o ? o.internals?.userNode : o;
      n.push(i);
    }
  }
  return n;
}
function ad(e, t) {
  ue(t, !0);
  let n = v(t, "store", 15), r = v(t, "selectionKey", 7, "Shift"), o = v(t, "multiSelectionKey", 23, () => ir() ? "Meta" : "Control"), i = v(t, "deleteKey", 7, "Backspace"), s = v(t, "panActivationKey", 7, " "), a = v(t, "zoomActivationKey", 23, () => ir() ? "Meta" : "Control"), { deleteElements: l } = it();
  function u(m) {
    return m !== null && typeof m == "object";
  }
  function d(m) {
    return u(m) ? m.modifier || [] : [];
  }
  function p(m) {
    return m == null ? "" : u(m) ? m.key : m;
  }
  function f(m, b) {
    return (Array.isArray(m) ? m : [m]).map(($) => {
      const _ = p($);
      return {
        key: _,
        modifier: d($),
        enabled: _ !== null,
        callback: b
      };
    });
  }
  function h() {
    n(n().selectionRect = null, !0), n(n().selectionKeyPressed = !1, !0), n(n().multiselectionKeyPressed = !1, !0), n(n().deleteKeyPressed = !1, !0), n(n().panActivationKeyPressed = !1, !0), n(n().zoomActivationKeyPressed = !1, !0);
  }
  function y() {
    const m = n().nodes.filter(($) => $.selected), b = n().edges.filter(($) => $.selected);
    l({ nodes: m, edges: b });
  }
  var w = {
    get store() {
      return n();
    },
    set store(m) {
      n(m), g();
    },
    get selectionKey() {
      return r();
    },
    set selectionKey(m = "Shift") {
      r(m), g();
    },
    get multiSelectionKey() {
      return o();
    },
    set multiSelectionKey(m = ir() ? "Meta" : "Control") {
      o(m), g();
    },
    get deleteKey() {
      return i();
    },
    set deleteKey(m = "Backspace") {
      i(m), g();
    },
    get panActivationKey() {
      return s();
    },
    set panActivationKey(m = " ") {
      s(m), g();
    },
    get zoomActivationKey() {
      return a();
    },
    set zoomActivationKey(m = ir() ? "Meta" : "Control") {
      a(m), g();
    }
  };
  return ni("blur", Ct, h), ni("contextmenu", Ct, h), ht(Ct, (m, b) => an?.(m, b), () => ({
    trigger: f(r(), () => n(n().selectionKeyPressed = !0, !0)),
    type: "keydown"
  })), ht(Ct, (m, b) => an?.(m, b), () => ({
    trigger: f(r(), () => n(n().selectionKeyPressed = !1, !0)),
    type: "keyup"
  })), ht(Ct, (m, b) => an?.(m, b), () => ({
    trigger: f(o(), () => {
      n(n().multiselectionKeyPressed = !0, !0);
    }),
    type: "keydown"
  })), ht(Ct, (m, b) => an?.(m, b), () => ({
    trigger: f(o(), () => n(n().multiselectionKeyPressed = !1, !0)),
    type: "keyup"
  })), ht(Ct, (m, b) => an?.(m, b), () => ({
    trigger: f(i(), (m) => {
      !(m.originalEvent.ctrlKey || m.originalEvent.metaKey || m.originalEvent.shiftKey) && !xc(m.originalEvent) && (n(n().deleteKeyPressed = !0, !0), y());
    }),
    type: "keydown"
  })), ht(Ct, (m, b) => an?.(m, b), () => ({
    trigger: f(i(), () => n(n().deleteKeyPressed = !1, !0)),
    type: "keyup"
  })), ht(Ct, (m, b) => an?.(m, b), () => ({
    trigger: f(s(), () => n(n().panActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), ht(Ct, (m, b) => an?.(m, b), () => ({
    trigger: f(s(), () => n(n().panActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), ht(Ct, (m, b) => an?.(m, b), () => ({
    trigger: f(a(), () => n(n().zoomActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), ht(Ct, (m, b) => an?.(m, b), () => ({
    trigger: f(a(), () => n(n().zoomActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), ce(w);
}
ae(
  ad,
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
var ym = /* @__PURE__ */ ve('<path fill="none" class="svelte-flow__connection-path"></path>'), wm = /* @__PURE__ */ ve('<svg class="svelte-flow__connectionline"><g><!></g></svg>');
function ld(e, t) {
  ue(t, !0);
  let n = v(t, "store", 15), r = v(t, "type", 7), o = v(t, "containerStyle", 7), i = v(t, "style", 7), s = v(t, "LineComponent", 7), a = /* @__PURE__ */ E(() => {
    if (!n().connection.inProgress)
      return "";
    const f = {
      sourceX: n().connection.from.x,
      sourceY: n().connection.from.y,
      sourcePosition: n().connection.fromPosition,
      targetX: n().connection.to.x,
      targetY: n().connection.to.y,
      targetPosition: n().connection.toPosition
    };
    switch (r()) {
      case wn.Bezier: {
        const [h] = Cc(f);
        return h;
      }
      case wn.Straight: {
        const [h] = kc(f);
        return h;
      }
      case wn.Step:
      case wn.SmoothStep: {
        const [h] = ia({
          ...f,
          borderRadius: r() === wn.Step ? 0 : void 0
        });
        return h;
      }
    }
  });
  var l = {
    get store() {
      return n();
    },
    set store(f) {
      n(f), g();
    },
    get type() {
      return r();
    },
    set type(f) {
      r(f), g();
    },
    get containerStyle() {
      return o();
    },
    set containerStyle(f) {
      o(f), g();
    },
    get style() {
      return i();
    },
    set style(f) {
      i(f), g();
    },
    get LineComponent() {
      return s();
    },
    set LineComponent(f) {
      s(f), g();
    }
  }, u = ke(), d = oe(u);
  {
    var p = (f) => {
      var h = wm(), y = R(h), w = R(y);
      {
        var m = ($) => {
          var _ = ke(), x = oe(_);
          Pi(x, s, (k, L) => {
            L(k, {});
          }), V($, _);
        }, b = ($) => {
          var _ = ym();
          Ce(() => {
            $e(_, "d", c(a)), dt(_, i());
          }), V($, _);
        };
        se(w, ($) => {
          s() ? $(m) : $(b, !1);
        });
      }
      Z(y), Z(h), Ce(
        ($) => {
          $e(h, "width", n().width), $e(h, "height", n().height), dt(h, o()), Nt(y, 0, $);
        },
        [
          () => Dn([
            "svelte-flow__connection",
            Ov(n().connection.isValid)
          ])
        ]
      ), V(f, h);
    };
    se(d, (f) => {
      n().connection.inProgress && f(p);
    });
  }
  return V(e, u), ce(l);
}
ae(
  ld,
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
var bm = /* @__PURE__ */ Q("<div><!></div>");
function No(e, t) {
  ue(t, !0);
  let n = v(t, "position", 7, "top-right"), r = v(t, "style", 7), o = v(t, "class", 7), i = v(t, "children", 7), s = /* @__PURE__ */ Ze(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "position",
    "style",
    "class",
    "children"
  ]), a = /* @__PURE__ */ E(() => `${n()}`.split("-"));
  var l = {
    get position() {
      return n();
    },
    set position(p = "top-right") {
      n(p), g();
    },
    get style() {
      return r();
    },
    set style(p) {
      r(p), g();
    },
    get class() {
      return o();
    },
    set class(p) {
      o(p), g();
    },
    get children() {
      return i();
    },
    set children(p) {
      i(p), g();
    }
  }, u = bm();
  nt(u, (p) => ({ class: p, style: r(), ...s }), [
    () => ["svelte-flow__panel", o(), ...c(a)]
  ]);
  var d = R(u);
  return Xe(d, () => i() ?? mt), Z(u), V(e, u), ce(l);
}
ae(No, { position: {}, style: {}, class: {}, children: {} }, [], [], !0);
var xm = /* @__PURE__ */ Q('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function ud(e, t) {
  ue(t, !0);
  let n = v(t, "proOptions", 7), r = v(t, "position", 7, "bottom-right");
  var o = {
    get proOptions() {
      return n();
    },
    set proOptions(l) {
      n(l), g();
    },
    get position() {
      return r();
    },
    set position(l = "bottom-right") {
      r(l), g();
    }
  }, i = ke(), s = oe(i);
  {
    var a = (l) => {
      No(l, {
        get position() {
          return r();
        },
        class: "svelte-flow__attribution",
        "data-message": "Feel free to remove the attribution or check out how you could support us: https://svelteflow.dev/support-us",
        children: (u, d) => {
          var p = xm();
          V(u, p);
        },
        $$slots: { default: !0 }
      });
    };
    se(s, (l) => {
      n()?.hideAttribution || l(a);
    });
  }
  return V(e, i), ce(o);
}
ae(ud, { proOptions: {}, position: {} }, [], [], !0);
var $m = /* @__PURE__ */ Q("<div><!></div>");
const Cm = {
  hash: "svelte-15m40wc",
  code: ".svelte-flow.svelte-15m40wc {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;background-color:var(--background-color, var(--background-color-default));}:root {--background-color-default: #fff;--background-pattern-color-default: #ddd;--minimap-mask-color-default: rgb(240, 240, 240, 0.6);--minimap-mask-stroke-color-default: none;--minimap-mask-stroke-width-default: 1;--controls-button-background-color-default: #fefefe;--controls-button-background-color-hover-default: #f4f4f4;--controls-button-color-default: inherit;--controls-button-color-hover-default: inherit;--controls-button-border-color-default: #eee;}"
};
function cd(e, t) {
  ue(t, !0), He(e, Cm);
  let n = v(t, "width", 7), r = v(t, "height", 7), o = v(t, "colorMode", 7), i = v(t, "domNode", 15), s = v(t, "clientWidth", 15), a = v(t, "clientHeight", 15), l = v(t, "children", 7), u = v(t, "rest", 7), d = /* @__PURE__ */ E(() => u().class), p = /* @__PURE__ */ E(() => $p(u(), [
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
  function f(m) {
    m.currentTarget.scrollTo({ top: 0, left: 0, behavior: "auto" }), u().onscroll && u().onscroll(m);
  }
  var h = {
    get width() {
      return n();
    },
    set width(m) {
      n(m), g();
    },
    get height() {
      return r();
    },
    set height(m) {
      r(m), g();
    },
    get colorMode() {
      return o();
    },
    set colorMode(m) {
      o(m), g();
    },
    get domNode() {
      return i();
    },
    set domNode(m) {
      i(m), g();
    },
    get clientWidth() {
      return s();
    },
    set clientWidth(m) {
      s(m), g();
    },
    get clientHeight() {
      return a();
    },
    set clientHeight(m) {
      a(m), g();
    },
    get children() {
      return l();
    },
    set children(m) {
      l(m), g();
    },
    get rest() {
      return u();
    },
    set rest(m) {
      u(m), g();
    }
  }, y = $m();
  nt(
    y,
    (m) => ({
      class: [
        "svelte-flow",
        "svelte-flow__container",
        c(d),
        o()
      ],
      "data-testid": "svelte-flow__wrapper",
      role: "application",
      onscroll: f,
      ...c(p),
      [un]: m
    }),
    [
      () => ({ width: hn(n()), height: hn(r()) })
    ],
    void 0,
    void 0,
    "svelte-15m40wc"
  );
  var w = R(y);
  return Xe(w, () => l() ?? mt), Z(y), Lt(y, (m) => i(m), () => i()), Ta(y, "clientHeight", a), Ta(y, "clientWidth", s), V(e, y), ce(h);
}
ae(
  cd,
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
var _m = /* @__PURE__ */ Q('<div class="svelte-flow__viewport-back svelte-flow__container"></div> <!> <div class="svelte-flow__edge-labels svelte-flow__container"></div> <!> <!> <!> <div class="svelte-flow__viewport-front svelte-flow__container"></div>', 1), km = /* @__PURE__ */ Q("<!> <!>", 1), Sm = /* @__PURE__ */ Q("<!> <!> <!> <!> <!>", 1);
function dd(e, t) {
  ue(t, !0);
  let n = v(t, "width", 7), r = v(t, "height", 7), o = v(t, "proOptions", 7), i = v(t, "selectionKey", 7), s = v(t, "deleteKey", 7), a = v(t, "panActivationKey", 7), l = v(t, "multiSelectionKey", 7), u = v(t, "zoomActivationKey", 7), d = v(t, "paneClickDistance", 7, 1), p = v(t, "nodeClickDistance", 7, 1), f = v(t, "onmovestart", 7), h = v(t, "onmoveend", 7), y = v(t, "onmove", 7), w = v(t, "oninit", 7), m = v(t, "onnodeclick", 7), b = v(t, "onnodecontextmenu", 7), $ = v(t, "onnodedrag", 7), _ = v(t, "onnodedragstart", 7), x = v(t, "onnodedragstop", 7), k = v(t, "onnodepointerenter", 7), L = v(t, "onnodepointermove", 7), D = v(t, "onnodepointerleave", 7), j = v(t, "onselectionclick", 7), H = v(t, "onselectioncontextmenu", 7), A = v(t, "onselectionstart", 7), z = v(t, "onselectionend", 7), S = v(t, "onedgeclick", 7), T = v(t, "onedgecontextmenu", 7), C = v(t, "onedgepointerenter", 7), P = v(t, "onedgepointerleave", 7), N = v(t, "onpaneclick", 7), K = v(t, "onpanecontextmenu", 7), Y = v(t, "panOnScrollMode", 23, () => lr.Free), F = v(t, "preventScrolling", 7, !0), M = v(t, "zoomOnScroll", 7, !0), W = v(t, "zoomOnDoubleClick", 7, !0), B = v(t, "zoomOnPinch", 7, !0), G = v(t, "panOnScroll", 7, !1), I = v(t, "panOnScrollSpeed", 7, 0.5), X = v(t, "panOnDrag", 7, !0), J = v(t, "selectionOnDrag", 7, !1), te = v(t, "connectionLineComponent", 7), ne = v(t, "connectionLineStyle", 7), ee = v(t, "connectionLineContainerStyle", 7), he = v(t, "connectionLineType", 23, () => wn.Bezier), de = v(t, "attributionPosition", 7), re = v(t, "children", 7), ie = v(t, "nodes", 31, () => Kt([])), pe = v(t, "edges", 31, () => Kt([])), ge = v(t, "viewport", 31, () => {
  }), we = /* @__PURE__ */ Ze(t, [
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
  ]), le = Wc({
    props: we,
    width: n(),
    height: r(),
    get nodes() {
      return ie();
    },
    set nodes(q) {
      ie(q);
    },
    get edges() {
      return pe();
    },
    set edges(q) {
      pe(q);
    },
    get viewport() {
      return ge();
    },
    set viewport(q) {
      ge(q);
    }
  });
  const be = Wn(hi);
  be && be.setStore && be.setStore(le), Pr(hi, {
    provider: !1,
    getStore() {
      return le;
    }
  }), qe(() => {
    const q = { nodes: le.selectedNodes, edges: le.selectedEdges };
    lt(() => t.onselectionchange)?.(q);
    for (const je of le.selectionChangeHandlers.values())
      je(q);
  }), xo(() => {
    le.reset();
  });
  var De = {
    get width() {
      return n();
    },
    set width(q) {
      n(q), g();
    },
    get height() {
      return r();
    },
    set height(q) {
      r(q), g();
    },
    get proOptions() {
      return o();
    },
    set proOptions(q) {
      o(q), g();
    },
    get selectionKey() {
      return i();
    },
    set selectionKey(q) {
      i(q), g();
    },
    get deleteKey() {
      return s();
    },
    set deleteKey(q) {
      s(q), g();
    },
    get panActivationKey() {
      return a();
    },
    set panActivationKey(q) {
      a(q), g();
    },
    get multiSelectionKey() {
      return l();
    },
    set multiSelectionKey(q) {
      l(q), g();
    },
    get zoomActivationKey() {
      return u();
    },
    set zoomActivationKey(q) {
      u(q), g();
    },
    get paneClickDistance() {
      return d();
    },
    set paneClickDistance(q = 1) {
      d(q), g();
    },
    get nodeClickDistance() {
      return p();
    },
    set nodeClickDistance(q = 1) {
      p(q), g();
    },
    get onmovestart() {
      return f();
    },
    set onmovestart(q) {
      f(q), g();
    },
    get onmoveend() {
      return h();
    },
    set onmoveend(q) {
      h(q), g();
    },
    get onmove() {
      return y();
    },
    set onmove(q) {
      y(q), g();
    },
    get oninit() {
      return w();
    },
    set oninit(q) {
      w(q), g();
    },
    get onnodeclick() {
      return m();
    },
    set onnodeclick(q) {
      m(q), g();
    },
    get onnodecontextmenu() {
      return b();
    },
    set onnodecontextmenu(q) {
      b(q), g();
    },
    get onnodedrag() {
      return $();
    },
    set onnodedrag(q) {
      $(q), g();
    },
    get onnodedragstart() {
      return _();
    },
    set onnodedragstart(q) {
      _(q), g();
    },
    get onnodedragstop() {
      return x();
    },
    set onnodedragstop(q) {
      x(q), g();
    },
    get onnodepointerenter() {
      return k();
    },
    set onnodepointerenter(q) {
      k(q), g();
    },
    get onnodepointermove() {
      return L();
    },
    set onnodepointermove(q) {
      L(q), g();
    },
    get onnodepointerleave() {
      return D();
    },
    set onnodepointerleave(q) {
      D(q), g();
    },
    get onselectionclick() {
      return j();
    },
    set onselectionclick(q) {
      j(q), g();
    },
    get onselectioncontextmenu() {
      return H();
    },
    set onselectioncontextmenu(q) {
      H(q), g();
    },
    get onselectionstart() {
      return A();
    },
    set onselectionstart(q) {
      A(q), g();
    },
    get onselectionend() {
      return z();
    },
    set onselectionend(q) {
      z(q), g();
    },
    get onedgeclick() {
      return S();
    },
    set onedgeclick(q) {
      S(q), g();
    },
    get onedgecontextmenu() {
      return T();
    },
    set onedgecontextmenu(q) {
      T(q), g();
    },
    get onedgepointerenter() {
      return C();
    },
    set onedgepointerenter(q) {
      C(q), g();
    },
    get onedgepointerleave() {
      return P();
    },
    set onedgepointerleave(q) {
      P(q), g();
    },
    get onpaneclick() {
      return N();
    },
    set onpaneclick(q) {
      N(q), g();
    },
    get onpanecontextmenu() {
      return K();
    },
    set onpanecontextmenu(q) {
      K(q), g();
    },
    get panOnScrollMode() {
      return Y();
    },
    set panOnScrollMode(q = lr.Free) {
      Y(q), g();
    },
    get preventScrolling() {
      return F();
    },
    set preventScrolling(q = !0) {
      F(q), g();
    },
    get zoomOnScroll() {
      return M();
    },
    set zoomOnScroll(q = !0) {
      M(q), g();
    },
    get zoomOnDoubleClick() {
      return W();
    },
    set zoomOnDoubleClick(q = !0) {
      W(q), g();
    },
    get zoomOnPinch() {
      return B();
    },
    set zoomOnPinch(q = !0) {
      B(q), g();
    },
    get panOnScroll() {
      return G();
    },
    set panOnScroll(q = !1) {
      G(q), g();
    },
    get panOnScrollSpeed() {
      return I();
    },
    set panOnScrollSpeed(q = 0.5) {
      I(q), g();
    },
    get panOnDrag() {
      return X();
    },
    set panOnDrag(q = !0) {
      X(q), g();
    },
    get selectionOnDrag() {
      return J();
    },
    set selectionOnDrag(q = !1) {
      J(q), g();
    },
    get connectionLineComponent() {
      return te();
    },
    set connectionLineComponent(q) {
      te(q), g();
    },
    get connectionLineStyle() {
      return ne();
    },
    set connectionLineStyle(q) {
      ne(q), g();
    },
    get connectionLineContainerStyle() {
      return ee();
    },
    set connectionLineContainerStyle(q) {
      ee(q), g();
    },
    get connectionLineType() {
      return he();
    },
    set connectionLineType(q = wn.Bezier) {
      he(q), g();
    },
    get attributionPosition() {
      return de();
    },
    set attributionPosition(q) {
      de(q), g();
    },
    get children() {
      return re();
    },
    set children(q) {
      re(q), g();
    },
    get nodes() {
      return ie();
    },
    set nodes(q = []) {
      ie(q), g();
    },
    get edges() {
      return pe();
    },
    set edges(q = []) {
      pe(q), g();
    },
    get viewport() {
      return ge();
    },
    set viewport(q = void 0) {
      ge(q), g();
    }
  };
  return cd(e, {
    get colorMode() {
      return le.colorMode;
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
      return le.domNode;
    },
    set domNode(q) {
      le.domNode = q;
    },
    get clientWidth() {
      return le.width;
    },
    set clientWidth(q) {
      le.width = q;
    },
    get clientHeight() {
      return le.height;
    },
    set clientHeight(q) {
      le.height = q;
    },
    children: (q, je) => {
      var Oe = Sm(), Ae = oe(Oe);
      ad(Ae, {
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
          return le;
        },
        set store(rt) {
          le = rt;
        }
      });
      var Ke = O(Ae, 2);
      qc(Ke, {
        get panOnScrollMode() {
          return Y();
        },
        get preventScrolling() {
          return F();
        },
        get zoomOnScroll() {
          return M();
        },
        get zoomOnDoubleClick() {
          return W();
        },
        get zoomOnPinch() {
          return B();
        },
        get panOnScroll() {
          return G();
        },
        get panOnScrollSpeed() {
          return I();
        },
        get panOnDrag() {
          return X();
        },
        get paneClickDistance() {
          return d();
        },
        get selectionOnDrag() {
          return J();
        },
        get onmovestart() {
          return f();
        },
        get onmove() {
          return y();
        },
        get onmoveend() {
          return h();
        },
        get oninit() {
          return w();
        },
        get store() {
          return le;
        },
        set store(rt) {
          le = rt;
        },
        children: (rt, fe) => {
          Xc(rt, {
            get onpaneclick() {
              return N();
            },
            get onpanecontextmenu() {
              return K();
            },
            get onselectionstart() {
              return A();
            },
            get onselectionend() {
              return z();
            },
            get panOnDrag() {
              return X();
            },
            get paneClickDistance() {
              return d();
            },
            get selectionOnDrag() {
              return J();
            },
            get store() {
              return le;
            },
            set store(Se) {
              le = Se;
            },
            children: (Se, Qe) => {
              var ze = km(), et = oe(ze);
              Fc(et, {
                get store() {
                  return le;
                },
                set store(st) {
                  le = st;
                },
                children: (st, An) => {
                  var ft = _m(), pt = O(oe(ft), 2);
                  id(pt, {
                    get onedgeclick() {
                      return S();
                    },
                    get onedgecontextmenu() {
                      return T();
                    },
                    get onedgepointerenter() {
                      return C();
                    },
                    get onedgepointerleave() {
                      return P();
                    },
                    get store() {
                      return le;
                    },
                    set store(nr) {
                      le = nr;
                    }
                  });
                  var Ht = O(pt, 4);
                  ld(Ht, {
                    get type() {
                      return he();
                    },
                    get LineComponent() {
                      return te();
                    },
                    get containerStyle() {
                      return ee();
                    },
                    get style() {
                      return ne();
                    },
                    get store() {
                      return le;
                    },
                    set store(nr) {
                      le = nr;
                    }
                  });
                  var ma = O(Ht, 2);
                  td(ma, {
                    get nodeClickDistance() {
                      return p();
                    },
                    get onnodeclick() {
                      return m();
                    },
                    get onnodecontextmenu() {
                      return b();
                    },
                    get onnodepointerenter() {
                      return k();
                    },
                    get onnodepointermove() {
                      return L();
                    },
                    get onnodepointerleave() {
                      return D();
                    },
                    get onnodedrag() {
                      return $();
                    },
                    get onnodedragstart() {
                      return _();
                    },
                    get onnodedragstop() {
                      return x();
                    },
                    get store() {
                      return le;
                    },
                    set store(nr) {
                      le = nr;
                    }
                  });
                  var cf = O(ma, 2);
                  sd(cf, {
                    get onselectionclick() {
                      return j();
                    },
                    get onselectioncontextmenu() {
                      return H();
                    },
                    get onnodedrag() {
                      return $();
                    },
                    get onnodedragstart() {
                      return _();
                    },
                    get onnodedragstop() {
                      return x();
                    },
                    get store() {
                      return le;
                    },
                    set store(nr) {
                      le = nr;
                    }
                  }), me(2), V(st, ft);
                },
                $$slots: { default: !0 }
              });
              var Wt = O(et, 2);
              {
                let st = /* @__PURE__ */ E(() => !!(le.selectionRect && le.selectionRectMode === "user")), An = /* @__PURE__ */ E(() => le.selectionRect?.width), ft = /* @__PURE__ */ E(() => le.selectionRect?.height), pt = /* @__PURE__ */ E(() => le.selectionRect?.x), Ht = /* @__PURE__ */ E(() => le.selectionRect?.y);
                da(Wt, {
                  get isVisible() {
                    return c(st);
                  },
                  get width() {
                    return c(An);
                  },
                  get height() {
                    return c(ft);
                  },
                  get x() {
                    return c(pt);
                  },
                  get y() {
                    return c(Ht);
                  }
                });
              }
              V(Se, ze);
            },
            $$slots: { default: !0 }
          });
        },
        $$slots: { default: !0 }
      });
      var Ge = O(Ke, 2);
      ud(Ge, {
        get proOptions() {
          return o();
        },
        get position() {
          return de();
        }
      });
      var wt = O(Ge, 2);
      Jc(wt, {
        get store() {
          return le;
        }
      });
      var sn = O(wt, 2);
      Xe(sn, () => re() ?? mt), V(q, Oe);
    },
    $$slots: { default: !0 }
  }), ce(De);
}
ae(
  dd,
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
function fd(e, t) {
  ue(t, !0);
  let n = v(t, "children", 7), r = /* @__PURE__ */ Ee(Wc({ props: {}, nodes: [], edges: [] }));
  Pr(hi, {
    provider: !0,
    getStore() {
      return c(r);
    },
    setStore: (a) => {
      U(r, a);
    }
  }), xo(() => {
    c(r).reset();
  });
  var o = {
    get children() {
      return n();
    },
    set children(a) {
      n(a), g();
    }
  }, i = ke(), s = oe(i);
  return Xe(s, () => n() ?? mt), V(e, i), ce(o);
}
ae(fd, { children: {} }, [], [], !0);
var Em = /* @__PURE__ */ Q("<button><!></button>");
function Fr(e, t) {
  ue(t, !0);
  let n = v(t, "class", 7), r = v(t, "bgColor", 7), o = v(t, "bgColorHover", 7), i = v(t, "color", 7), s = v(t, "colorHover", 7), a = v(t, "borderColor", 7), l = v(t, "onclick", 7), u = v(t, "children", 7), d = /* @__PURE__ */ Ze(t, [
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
  var p = {
    get class() {
      return n();
    },
    set class(y) {
      n(y), g();
    },
    get bgColor() {
      return r();
    },
    set bgColor(y) {
      r(y), g();
    },
    get bgColorHover() {
      return o();
    },
    set bgColorHover(y) {
      o(y), g();
    },
    get color() {
      return i();
    },
    set color(y) {
      i(y), g();
    },
    get colorHover() {
      return s();
    },
    set colorHover(y) {
      s(y), g();
    },
    get borderColor() {
      return a();
    },
    set borderColor(y) {
      a(y), g();
    },
    get onclick() {
      return l();
    },
    set onclick(y) {
      l(y), g();
    },
    get children() {
      return u();
    },
    set children(y) {
      u(y), g();
    }
  }, f = Em();
  nt(f, () => ({
    type: "button",
    onclick: l(),
    class: ["svelte-flow__controls-button", n()],
    ...d,
    [un]: {
      "--xy-controls-button-background-color-props": r(),
      "--xy-controls-button-background-color-hover-props": o(),
      "--xy-controls-button-color-props": i(),
      "--xy-controls-button-color-hover-props": s(),
      "--xy-controls-button-border-color-props": a()
    }
  }));
  var h = R(f);
  return Xe(h, () => u() ?? mt), Z(f), V(e, f), ce(p);
}
ae(
  Fr,
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
var Pm = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function pd(e) {
  var t = Pm();
  V(e, t);
}
ae(pd, {}, [], [], !0);
var Nm = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function hd(e) {
  var t = Nm();
  V(e, t);
}
ae(hd, {}, [], [], !0);
var Lm = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function gd(e) {
  var t = Lm();
  V(e, t);
}
ae(gd, {}, [], [], !0);
var Tm = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function vd(e) {
  var t = Tm();
  V(e, t);
}
ae(vd, {}, [], [], !0);
var Vm = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function md(e) {
  var t = Vm();
  V(e, t);
}
ae(md, {}, [], [], !0);
var Mm = /* @__PURE__ */ Q("<!> <!>", 1), Dm = /* @__PURE__ */ Q("<!> <!> <!> <!> <!> <!>", 1);
function yd(e, t) {
  ue(t, !0);
  let n = v(t, "position", 7, "bottom-left"), r = v(t, "orientation", 7, "vertical"), o = v(t, "showZoom", 7, !0), i = v(t, "showFitView", 7, !0), s = v(t, "showLock", 7, !0), a = v(t, "style", 7), l = v(t, "class", 7), u = v(t, "buttonBgColor", 7), d = v(t, "buttonBgColorHover", 7), p = v(t, "buttonColor", 7), f = v(t, "buttonColorHover", 7), h = v(t, "buttonBorderColor", 7), y = v(t, "fitViewOptions", 7), w = v(t, "children", 7), m = v(t, "before", 7), b = v(t, "after", 7), $ = /* @__PURE__ */ Ze(t, [
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
  ]), _ = /* @__PURE__ */ E(rn);
  const x = {
    bgColor: u(),
    bgColorHover: d(),
    color: p(),
    colorHover: f(),
    borderColor: h()
  };
  let k = /* @__PURE__ */ E(() => c(_).nodesDraggable || c(_).nodesConnectable || c(_).elementsSelectable), L = /* @__PURE__ */ E(() => c(_).viewport.zoom <= c(_).minZoom), D = /* @__PURE__ */ E(() => c(_).viewport.zoom >= c(_).maxZoom), j = /* @__PURE__ */ E(() => c(_).ariaLabelConfig), H = /* @__PURE__ */ E(() => r() === "horizontal" ? "horizontal" : "vertical");
  const A = () => {
    c(_).zoomIn();
  }, z = () => {
    c(_).zoomOut();
  }, S = () => {
    c(_).fitView(y());
  }, T = () => {
    let P = !c(k);
    c(_).nodesDraggable = P, c(_).nodesConnectable = P, c(_).elementsSelectable = P;
  };
  var C = {
    get position() {
      return n();
    },
    set position(P = "bottom-left") {
      n(P), g();
    },
    get orientation() {
      return r();
    },
    set orientation(P = "vertical") {
      r(P), g();
    },
    get showZoom() {
      return o();
    },
    set showZoom(P = !0) {
      o(P), g();
    },
    get showFitView() {
      return i();
    },
    set showFitView(P = !0) {
      i(P), g();
    },
    get showLock() {
      return s();
    },
    set showLock(P = !0) {
      s(P), g();
    },
    get style() {
      return a();
    },
    set style(P) {
      a(P), g();
    },
    get class() {
      return l();
    },
    set class(P) {
      l(P), g();
    },
    get buttonBgColor() {
      return u();
    },
    set buttonBgColor(P) {
      u(P), g();
    },
    get buttonBgColorHover() {
      return d();
    },
    set buttonBgColorHover(P) {
      d(P), g();
    },
    get buttonColor() {
      return p();
    },
    set buttonColor(P) {
      p(P), g();
    },
    get buttonColorHover() {
      return f();
    },
    set buttonColorHover(P) {
      f(P), g();
    },
    get buttonBorderColor() {
      return h();
    },
    set buttonBorderColor(P) {
      h(P), g();
    },
    get fitViewOptions() {
      return y();
    },
    set fitViewOptions(P) {
      y(P), g();
    },
    get children() {
      return w();
    },
    set children(P) {
      w(P), g();
    },
    get before() {
      return m();
    },
    set before(P) {
      m(P), g();
    },
    get after() {
      return b();
    },
    set after(P) {
      b(P), g();
    }
  };
  {
    let P = /* @__PURE__ */ E(() => [
      "svelte-flow__controls",
      c(H),
      l()
    ]);
    No(e, Be(
      {
        get class() {
          return c(P);
        },
        get position() {
          return n();
        },
        "data-testid": "svelte-flow__controls",
        get "aria-label"() {
          return c(j)["controls.ariaLabel"];
        },
        get style() {
          return a();
        }
      },
      () => $,
      {
        children: (N, K) => {
          var Y = Dm(), F = oe(Y);
          {
            var M = (de) => {
              var re = ke(), ie = oe(re);
              Xe(ie, m), V(de, re);
            };
            se(F, (de) => {
              m() && de(M);
            });
          }
          var W = O(F, 2);
          {
            var B = (de) => {
              var re = Mm(), ie = oe(re);
              Fr(ie, Be(
                {
                  onclick: A,
                  class: "svelte-flow__controls-zoomin",
                  get title() {
                    return c(j)["controls.zoomIn.ariaLabel"];
                  },
                  get "aria-label"() {
                    return c(j)["controls.zoomIn.ariaLabel"];
                  },
                  get disabled() {
                    return c(D);
                  }
                },
                () => x,
                {
                  children: (ge, we) => {
                    pd(ge);
                  },
                  $$slots: { default: !0 }
                }
              ));
              var pe = O(ie, 2);
              Fr(pe, Be(
                {
                  onclick: z,
                  class: "svelte-flow__controls-zoomout",
                  get title() {
                    return c(j)["controls.zoomOut.ariaLabel"];
                  },
                  get "aria-label"() {
                    return c(j)["controls.zoomOut.ariaLabel"];
                  },
                  get disabled() {
                    return c(L);
                  }
                },
                () => x,
                {
                  children: (ge, we) => {
                    hd(ge);
                  },
                  $$slots: { default: !0 }
                }
              )), V(de, re);
            };
            se(W, (de) => {
              o() && de(B);
            });
          }
          var G = O(W, 2);
          {
            var I = (de) => {
              Fr(de, Be(
                {
                  class: "svelte-flow__controls-fitview",
                  onclick: S,
                  get title() {
                    return c(j)["controls.fitView.ariaLabel"];
                  },
                  get "aria-label"() {
                    return c(j)["controls.fitView.ariaLabel"];
                  }
                },
                () => x,
                {
                  children: (re, ie) => {
                    gd(re);
                  },
                  $$slots: { default: !0 }
                }
              ));
            };
            se(G, (de) => {
              i() && de(I);
            });
          }
          var X = O(G, 2);
          {
            var J = (de) => {
              Fr(de, Be(
                {
                  class: "svelte-flow__controls-interactive",
                  onclick: T,
                  get title() {
                    return c(j)["controls.interactive.ariaLabel"];
                  },
                  get "aria-label"() {
                    return c(j)["controls.interactive.ariaLabel"];
                  }
                },
                () => x,
                {
                  children: (re, ie) => {
                    var pe = ke(), ge = oe(pe);
                    {
                      var we = (be) => {
                        md(be);
                      }, le = (be) => {
                        vd(be);
                      };
                      se(ge, (be) => {
                        c(k) ? be(we) : be(le, !1);
                      });
                    }
                    V(re, pe);
                  },
                  $$slots: { default: !0 }
                }
              ));
            };
            se(X, (de) => {
              s() && de(J);
            });
          }
          var te = O(X, 2);
          {
            var ne = (de) => {
              var re = ke(), ie = oe(re);
              Xe(ie, w), V(de, re);
            };
            se(te, (de) => {
              w() && de(ne);
            });
          }
          var ee = O(te, 2);
          {
            var he = (de) => {
              var re = ke(), ie = oe(re);
              Xe(ie, b), V(de, re);
            };
            se(ee, (de) => {
              b() && de(he);
            });
          }
          V(N, Y);
        },
        $$slots: { default: !0 }
      }
    ));
  }
  return ce(C);
}
ae(
  yd,
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
var $n;
(function(e) {
  e.Lines = "lines", e.Dots = "dots", e.Cross = "cross";
})($n || ($n = {}));
var Om = /* @__PURE__ */ ve("<circle></circle>");
function wd(e, t) {
  ue(t, !0);
  let n = v(t, "radius", 7), r = v(t, "class", 7);
  var o = {
    get radius() {
      return n();
    },
    set radius(s) {
      n(s), g();
    },
    get class() {
      return r();
    },
    set class(s) {
      r(s), g();
    }
  }, i = Om();
  return Ce(() => {
    $e(i, "cx", n()), $e(i, "cy", n()), $e(i, "r", n()), Nt(i, 0, Dn(["svelte-flow__background-pattern", "dots", r()]));
  }), V(e, i), ce(o);
}
ae(wd, { radius: {}, class: {} }, [], [], !0);
var zm = /* @__PURE__ */ ve("<path></path>");
function bd(e, t) {
  ue(t, !0);
  let n = v(t, "lineWidth", 7), r = v(t, "dimensions", 7), o = v(t, "variant", 7), i = v(t, "class", 7);
  var s = {
    get lineWidth() {
      return n();
    },
    set lineWidth(l) {
      n(l), g();
    },
    get dimensions() {
      return r();
    },
    set dimensions(l) {
      r(l), g();
    },
    get variant() {
      return o();
    },
    set variant(l) {
      o(l), g();
    },
    get class() {
      return i();
    },
    set class(l) {
      i(l), g();
    }
  }, a = zm();
  return Ce(() => {
    $e(a, "stroke-width", n()), $e(a, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), Nt(a, 0, Dn(["svelte-flow__background-pattern", o(), i()]));
  }), V(e, a), ce(s);
}
ae(bd, { lineWidth: {}, dimensions: {}, variant: {}, class: {} }, [], [], !0);
const Hm = {
  [$n.Dots]: 1,
  [$n.Lines]: 1,
  [$n.Cross]: 6
};
var Am = /* @__PURE__ */ ve('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
function xd(e, t) {
  ue(t, !0);
  let n = v(t, "id", 7), r = v(t, "variant", 23, () => $n.Dots), o = v(t, "gap", 7, 20), i = v(t, "size", 7), s = v(t, "lineWidth", 7, 1), a = v(t, "bgColor", 7), l = v(t, "patternColor", 7), u = v(t, "patternClass", 7), d = v(t, "class", 7), p = /* @__PURE__ */ E(rn), f = /* @__PURE__ */ E(() => r() === $n.Dots), h = /* @__PURE__ */ E(() => r() === $n.Cross), y = /* @__PURE__ */ E(() => Array.isArray(o()) ? o() : [o(), o()]), w = /* @__PURE__ */ E(() => `background-pattern-${c(p).flowId}-${n() ?? ""}`), m = /* @__PURE__ */ E(() => [
    c(y)[0] * c(p).viewport.zoom || 1,
    c(y)[1] * c(p).viewport.zoom || 1
  ]), b = /* @__PURE__ */ E(() => (i() ?? Hm[r()]) * c(p).viewport.zoom), $ = /* @__PURE__ */ E(() => c(h) ? [c(b), c(b)] : c(m)), _ = /* @__PURE__ */ E(() => c(f) ? [c(b) / 2, c(b) / 2] : [
    c($)[0] / 2,
    c($)[1] / 2
  ]);
  var x = {
    get id() {
      return n();
    },
    set id(S) {
      n(S), g();
    },
    get variant() {
      return r();
    },
    set variant(S = $n.Dots) {
      r(S), g();
    },
    get gap() {
      return o();
    },
    set gap(S = 20) {
      o(S), g();
    },
    get size() {
      return i();
    },
    set size(S) {
      i(S), g();
    },
    get lineWidth() {
      return s();
    },
    set lineWidth(S = 1) {
      s(S), g();
    },
    get bgColor() {
      return a();
    },
    set bgColor(S) {
      a(S), g();
    },
    get patternColor() {
      return l();
    },
    set patternColor(S) {
      l(S), g();
    },
    get patternClass() {
      return u();
    },
    set patternClass(S) {
      u(S), g();
    },
    get class() {
      return d();
    },
    set class(S) {
      d(S), g();
    }
  }, k = Am();
  let L;
  var D = R(k), j = R(D);
  {
    var H = (S) => {
      {
        let T = /* @__PURE__ */ E(() => c(b) / 2);
        wd(S, {
          get radius() {
            return c(T);
          },
          get class() {
            return u();
          }
        });
      }
    }, A = (S) => {
      bd(S, {
        get dimensions() {
          return c($);
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
    se(j, (S) => {
      c(f) ? S(H) : S(A, !1);
    });
  }
  Z(D);
  var z = O(D);
  return Z(k), Ce(() => {
    Nt(k, 0, Dn([
      "svelte-flow__background",
      "svelte-flow__container",
      d()
    ])), L = dt(k, "", L, {
      "--xy-background-color-props": a(),
      "--xy-background-pattern-color-props": l()
    }), $e(D, "id", c(w)), $e(D, "x", c(p).viewport.x % c(m)[0]), $e(D, "y", c(p).viewport.y % c(m)[1]), $e(D, "width", c(m)[0]), $e(D, "height", c(m)[1]), $e(D, "patternTransform", `translate(-${c(_)[0]},-${c(_)[1]})`), $e(z, "fill", `url(#${c(w)})`);
  }), V(e, k), ce(x);
}
ae(
  xd,
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
var Im = /* @__PURE__ */ ve("<rect></rect>");
function $d(e, t) {
  ue(t, !0);
  let n = v(t, "id", 7), r = v(t, "x", 7), o = v(t, "y", 7), i = v(t, "width", 7), s = v(t, "height", 7), a = v(t, "borderRadius", 7, 5), l = v(t, "color", 7), u = v(t, "shapeRendering", 7), d = v(t, "strokeColor", 7), p = v(t, "strokeWidth", 7, 2), f = v(t, "selected", 7), h = v(t, "class", 7), y = v(t, "nodeComponent", 7);
  var w = {
    get id() {
      return n();
    },
    set id(x) {
      n(x), g();
    },
    get x() {
      return r();
    },
    set x(x) {
      r(x), g();
    },
    get y() {
      return o();
    },
    set y(x) {
      o(x), g();
    },
    get width() {
      return i();
    },
    set width(x) {
      i(x), g();
    },
    get height() {
      return s();
    },
    set height(x) {
      s(x), g();
    },
    get borderRadius() {
      return a();
    },
    set borderRadius(x = 5) {
      a(x), g();
    },
    get color() {
      return l();
    },
    set color(x) {
      l(x), g();
    },
    get shapeRendering() {
      return u();
    },
    set shapeRendering(x) {
      u(x), g();
    },
    get strokeColor() {
      return d();
    },
    set strokeColor(x) {
      d(x), g();
    },
    get strokeWidth() {
      return p();
    },
    set strokeWidth(x = 2) {
      p(x), g();
    },
    get selected() {
      return f();
    },
    set selected(x) {
      f(x), g();
    },
    get class() {
      return h();
    },
    set class(x) {
      h(x), g();
    },
    get nodeComponent() {
      return y();
    },
    set nodeComponent(x) {
      y(x), g();
    }
  }, m = ke(), b = oe(m);
  {
    var $ = (x) => {
      const k = /* @__PURE__ */ E(y);
      var L = ke(), D = oe(L);
      Pi(D, () => c(k), (j, H) => {
        H(j, {
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
            return h();
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
            return p();
          },
          get selected() {
            return f();
          }
        });
      }), V(x, L);
    }, _ = (x) => {
      var k = Im();
      let L, D;
      Ce(() => {
        L = Nt(k, 0, Dn(["svelte-flow__minimap-node", h()]), null, L, { selected: f() }), $e(k, "x", r()), $e(k, "y", o()), $e(k, "rx", a()), $e(k, "ry", a()), $e(k, "width", i()), $e(k, "height", s()), $e(k, "shape-rendering", u()), D = dt(k, "", D, {
          fill: l(),
          stroke: d(),
          "stroke-width": p()
        });
      }), V(x, k);
    };
    se(b, (x) => {
      y() ? x($) : x(_, !1);
    });
  }
  return V(e, m), ce(w);
}
ae(
  $d,
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
function Zm(e, t) {
  const n = S0({
    domNode: e,
    panZoom: t.panZoom,
    getTransform: () => {
      const { viewport: o } = t.store;
      return [o.x, o.y, o.zoom];
    },
    getViewScale: t.getViewScale
  });
  n.update({
    translateExtent: t.translateExtent,
    width: t.width,
    height: t.height,
    inversePan: t.inversePan,
    zoomStep: t.zoomStep,
    pannable: t.pannable,
    zoomable: t.zoomable
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
const ts = (e) => e instanceof Function ? e : () => e;
var jm = /* @__PURE__ */ ve("<title> </title>"), Km = /* @__PURE__ */ ve('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>'), Rm = /* @__PURE__ */ Q('<svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>', 1);
function Cd(e, t) {
  ue(t, !0);
  let n = v(t, "position", 7, "bottom-right"), r = v(t, "ariaLabel", 7), o = v(t, "nodeStrokeColor", 7, "transparent"), i = v(t, "nodeColor", 7), s = v(t, "nodeClass", 7, ""), a = v(t, "nodeBorderRadius", 7, 5), l = v(t, "nodeStrokeWidth", 7, 2), u = v(t, "nodeComponent", 7), d = v(t, "bgColor", 7), p = v(t, "maskColor", 7), f = v(t, "maskStrokeColor", 7), h = v(t, "maskStrokeWidth", 7), y = v(t, "width", 7, 200), w = v(t, "height", 7, 150), m = v(t, "pannable", 7, !0), b = v(t, "zoomable", 7, !0), $ = v(t, "inversePan", 7), _ = v(t, "zoomStep", 7), x = v(t, "class", 7), k = /* @__PURE__ */ Ze(t, [
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
  ]), L = /* @__PURE__ */ E(rn), D = /* @__PURE__ */ E(() => c(L).ariaLabelConfig);
  const j = i() === void 0 ? void 0 : ts(i()), H = ts(o()), A = ts(s()), z = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  );
  let S = /* @__PURE__ */ E(() => `svelte-flow__minimap-desc-${c(L).flowId}`), T = /* @__PURE__ */ E(() => ({
    x: -c(L).viewport.x / c(L).viewport.zoom,
    y: -c(L).viewport.y / c(L).viewport.zoom,
    width: c(L).width / c(L).viewport.zoom,
    height: c(L).height / c(L).viewport.zoom
  })), C = /* @__PURE__ */ E(() => mc(ko(c(L).nodeLookup, { filter: (ee) => !ee.hidden }), c(T))), P = /* @__PURE__ */ E(() => c(C).width / y()), N = /* @__PURE__ */ E(() => c(C).height / w()), K = /* @__PURE__ */ E(() => Math.max(c(P), c(N))), Y = /* @__PURE__ */ E(() => c(K) * y()), F = /* @__PURE__ */ E(() => c(K) * w()), M = /* @__PURE__ */ E(() => 5 * c(K)), W = /* @__PURE__ */ E(() => c(C).x - (c(Y) - c(C).width) / 2 - c(M)), B = /* @__PURE__ */ E(() => c(C).y - (c(F) - c(C).height) / 2 - c(M)), G = /* @__PURE__ */ E(() => c(Y) + c(M) * 2), I = /* @__PURE__ */ E(() => c(F) + c(M) * 2);
  const X = () => c(K);
  var J = {
    get position() {
      return n();
    },
    set position(ee = "bottom-right") {
      n(ee), g();
    },
    get ariaLabel() {
      return r();
    },
    set ariaLabel(ee) {
      r(ee), g();
    },
    get nodeStrokeColor() {
      return o();
    },
    set nodeStrokeColor(ee = "transparent") {
      o(ee), g();
    },
    get nodeColor() {
      return i();
    },
    set nodeColor(ee) {
      i(ee), g();
    },
    get nodeClass() {
      return s();
    },
    set nodeClass(ee = "") {
      s(ee), g();
    },
    get nodeBorderRadius() {
      return a();
    },
    set nodeBorderRadius(ee = 5) {
      a(ee), g();
    },
    get nodeStrokeWidth() {
      return l();
    },
    set nodeStrokeWidth(ee = 2) {
      l(ee), g();
    },
    get nodeComponent() {
      return u();
    },
    set nodeComponent(ee) {
      u(ee), g();
    },
    get bgColor() {
      return d();
    },
    set bgColor(ee) {
      d(ee), g();
    },
    get maskColor() {
      return p();
    },
    set maskColor(ee) {
      p(ee), g();
    },
    get maskStrokeColor() {
      return f();
    },
    set maskStrokeColor(ee) {
      f(ee), g();
    },
    get maskStrokeWidth() {
      return h();
    },
    set maskStrokeWidth(ee) {
      h(ee), g();
    },
    get width() {
      return y();
    },
    set width(ee = 200) {
      y(ee), g();
    },
    get height() {
      return w();
    },
    set height(ee = 150) {
      w(ee), g();
    },
    get pannable() {
      return m();
    },
    set pannable(ee = !0) {
      m(ee), g();
    },
    get zoomable() {
      return b();
    },
    set zoomable(ee = !0) {
      b(ee), g();
    },
    get inversePan() {
      return $();
    },
    set inversePan(ee) {
      $(ee), g();
    },
    get zoomStep() {
      return _();
    },
    set zoomStep(ee) {
      _(ee), g();
    },
    get class() {
      return x();
    },
    set class(ee) {
      x(ee), g();
    }
  }, te = Rm(), ne = oe(te);
  {
    let ee = /* @__PURE__ */ E(() => ["svelte-flow__minimap", x()]);
    zp(ne, () => ({ "--xy-minimap-background-color-props": d() })), No(ne.lastChild, Be(
      {
        get position() {
          return n();
        },
        get class() {
          return c(ee);
        },
        "data-testid": "svelte-flow__minimap"
      },
      () => k,
      {
        children: (he, de) => {
          var re = ke(), ie = oe(re);
          {
            var pe = (ge) => {
              var we = Km();
              let le;
              var be = R(we);
              {
                var De = (Oe) => {
                  var Ae = jm(), Ke = R(Ae, !0);
                  Z(Ae), Ce(() => {
                    $e(Ae, "id", c(S)), Re(Ke, r() ?? c(D)["minimap.ariaLabel"]);
                  }), V(Oe, Ae);
                };
                se(be, (Oe) => {
                  (r() ?? c(D)["minimap.ariaLabel"]) && Oe(De);
                });
              }
              var q = O(be);
              yt(q, 17, () => c(L).nodes, (Oe) => Oe.id, (Oe, Ae) => {
                const Ke = /* @__PURE__ */ E(() => c(L).nodeLookup.get(c(Ae).id));
                var Ge = ke(), wt = oe(Ge);
                {
                  var sn = (rt) => {
                    const fe = /* @__PURE__ */ E(() => er(c(Ke)));
                    {
                      let Se = /* @__PURE__ */ E(() => j?.(c(Ke))), Qe = /* @__PURE__ */ E(() => H(c(Ke))), ze = /* @__PURE__ */ E(() => A(c(Ke)));
                      $d(rt, Be(
                        {
                          get id() {
                            return c(Ke).id;
                          },
                          get x() {
                            return c(Ke).internals.positionAbsolute.x;
                          },
                          get y() {
                            return c(Ke).internals.positionAbsolute.y;
                          }
                        },
                        () => c(fe),
                        {
                          get selected() {
                            return c(Ke).selected;
                          },
                          get nodeComponent() {
                            return u();
                          },
                          get color() {
                            return c(Se);
                          },
                          get borderRadius() {
                            return a();
                          },
                          get strokeColor() {
                            return c(Qe);
                          },
                          get strokeWidth() {
                            return l();
                          },
                          get shapeRendering() {
                            return z;
                          },
                          get class() {
                            return c(ze);
                          }
                        }
                      ));
                    }
                  };
                  se(wt, (rt) => {
                    c(Ke) && yc(c(Ke)) && !c(Ke).hidden && rt(sn);
                  });
                }
                V(Oe, Ge);
              });
              var je = O(q);
              Z(we), ht(we, (Oe, Ae) => Zm?.(Oe, Ae), () => ({
                store: c(L),
                panZoom: c(L).panZoom,
                getViewScale: X,
                translateExtent: c(L).translateExtent,
                width: c(L).width,
                height: c(L).height,
                inversePan: $(),
                zoomStep: _(),
                pannable: m(),
                zoomable: b()
              })), Ce(() => {
                $e(we, "width", y()), $e(we, "height", w()), $e(we, "viewBox", `${c(W) ?? ""} ${c(B) ?? ""} ${c(G) ?? ""} ${c(I) ?? ""}`), $e(we, "aria-labelledby", c(S)), le = dt(we, "", le, {
                  "--xy-minimap-mask-background-color-props": p(),
                  "--xy-minimap-mask-stroke-color-props": f(),
                  "--xy-minimap-mask-stroke-width-props": h() ? h() * c(K) : void 0
                }), $e(je, "d", `M${c(W) - c(M)},${c(B) - c(M)}h${c(G) + c(M) * 2}v${c(I) + c(M) * 2}h${-c(G) - c(M) * 2}z
      M${c(T).x ?? ""},${c(T).y ?? ""}h${c(T).width ?? ""}v${c(T).height ?? ""}h${-c(T).width}z`);
              }), V(ge, we);
            };
            se(ie, (ge) => {
              c(L).panZoom && ge(pe);
            });
          }
          V(he, re);
        },
        $$slots: { default: !0 }
      }
    )), Z(ne);
  }
  return V(e, te), ce(J);
}
ae(
  Cd,
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
var Bm = /* @__PURE__ */ Q("<div><!></div>");
function _d(e, t) {
  ue(t, !0);
  let n = v(t, "nodeId", 7), r = v(t, "position", 23, () => ye.Top), o = v(t, "align", 7, "center"), i = v(t, "offset", 7, 10), s = v(t, "isVisible", 7), a = v(t, "children", 7), l = /* @__PURE__ */ Ze(t, [
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
  const u = rn(), { getNodesBounds: d } = it(), p = Wn("svelteflow__node_id");
  let f = /* @__PURE__ */ E(() => (u.nodes, (Array.isArray(n()) ? n() : [n() ?? p]).reduce(
    (k, L) => {
      const D = u.nodeLookup.get(L);
      return D && k.push(D), k;
    },
    []
  ))), h = /* @__PURE__ */ E(() => {
    const k = d(c(f));
    return k ? i0(k, u.viewport, r(), i(), o()) : "";
  }), y = /* @__PURE__ */ E(() => c(f).length === 0 ? 1 : Math.max(...c(f).map((k) => (k.internals.z || 5) + 1))), w = /* @__PURE__ */ E(() => u.nodes.filter((k) => k.selected).length), m = /* @__PURE__ */ E(() => typeof s() == "boolean" ? s() : c(f).length === 1 && c(f)[0].selected && c(w) === 1);
  var b = {
    get nodeId() {
      return n();
    },
    set nodeId(k) {
      n(k), g();
    },
    get position() {
      return r();
    },
    set position(k = ye.Top) {
      r(k), g();
    },
    get align() {
      return o();
    },
    set align(k = "center") {
      o(k), g();
    },
    get offset() {
      return i();
    },
    set offset(k = 10) {
      i(k), g();
    },
    get isVisible() {
      return s();
    },
    set isVisible(k) {
      s(k), g();
    },
    get children() {
      return a();
    },
    set children(k) {
      a(k), g();
    }
  }, $ = ke(), _ = oe($);
  {
    var x = (k) => {
      var L = Bm();
      nt(
        L,
        (j, H) => ({
          class: "svelte-flow__node-toolbar",
          "data-id": j,
          ...l,
          [un]: H
        }),
        [
          () => c(f).reduce((j, H) => `${j}${H.id} `, "").trim(),
          () => ({
            display: Ic().value ? "none" : void 0,
            position: "absolute",
            transform: c(h),
            "z-index": c(y)
          })
        ]
      );
      var D = R(L);
      Xe(D, () => a() ?? mt), Z(L), ht(L, (j, H) => Ac?.(j, H), () => "root"), V(k, L);
    };
    se(_, (k) => {
      u.domNode && c(m) && c(f) && k(x);
    });
  }
  return V(e, $), ce(b);
}
ae(
  _d,
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
function On(e) {
  const t = /* @__PURE__ */ E(rn), n = /* @__PURE__ */ E(() => c(t).nodes), r = /* @__PURE__ */ E(() => c(t).nodeLookup);
  let o = [], i = !0;
  const s = /* @__PURE__ */ E(() => {
    c(n);
    const a = [], l = Array.isArray(e), u = l ? e : [e];
    for (const d of u) {
      const p = c(r).get(d)?.internals.userNode;
      p && a.push({ id: p.id, type: p.type, data: p.data });
    }
    return (!m0(a, o) || i) && (o = a, i = !1), l ? o : o[0] ?? null;
  });
  return {
    get current() {
      return c(s);
    }
  };
}
const wl = "tinyflow-component", Ym = [
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
], Wm = [
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
], fa = [
  { label: "文字", value: "text" },
  { label: "图片", value: "image" },
  { label: "视频", value: "video" },
  { label: "音频", value: "audio" },
  { label: "文件", value: "file" },
  { label: "其他", value: "other" }
], qm = [
  { label: "单行输入框", value: "input" },
  { label: "多行输入框", value: "textarea" },
  { label: "下拉菜单", value: "select" },
  { label: "单选", value: "radio" },
  { label: "多选", value: "checkbox" }
], Xm = [
  { label: "单选", value: "radio" },
  { label: "多选", value: "checkbox" }
];
class Fm {
  options;
  rootEl;
  svelteFlowInstance;
  constructor(t) {
    if (typeof t.element != "string" && !(t.element instanceof Element))
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
    const t = document.createElement(wl);
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
    const n = document.createElement(wl);
    n.style.display = "block", n.style.width = "100%", n.style.height = "100%", n.classList.add("tf-theme-light"), n.options = this.options, n.onInit = (r) => {
      this.svelteFlowInstance = r;
    }, this.destroy(), this.rootEl.appendChild(n);
  }
  destroy() {
    for (; this.rootEl.firstChild; )
      this.rootEl.removeChild(this.rootEl.firstChild);
  }
}
const Gm = () => {
  let e = /* @__PURE__ */ Ee([]), t = /* @__PURE__ */ Ee([]), n = /* @__PURE__ */ Ee({ x: 250, y: 100, zoom: 1 });
  return {
    // nodes: nodesInternal,
    // edges: edgesInternal,
    // viewport,
    init: (r, o) => {
      U(e, r), U(t, o);
    },
    getNodes: () => c(e),
    setNodes: (r) => {
      U(e, r);
    },
    getEdges: () => c(t),
    setEdges: (r) => {
      U(t, r);
    },
    getViewport: () => c(n),
    setViewport: (r) => {
      U(n, r);
    },
    getNode: (r) => c(e).find((o) => o.id === r),
    addNode: (r) => {
      U(e, [...c(e), r]);
    },
    removeNode: (r) => {
      U(e, c(e).filter((o) => o.id !== r));
    },
    updateNode: (r, o) => {
      U(e, c(e).map((i) => i.id === r ? { ...i, ...o } : i));
    },
    updateNodes: (r) => {
      U(e, r(c(e)));
    },
    updateNodeData: (r, o) => {
      U(e, c(e).map((i) => i.id === r ? { ...i, data: { ...i.data, ...o } } : i));
    },
    selectNodeOnly: (r) => {
      U(e, c(e).map((o) => o.id === r ? { ...o, selected: !0 } : { ...o, selected: !1 }));
    },
    getEdge: (r) => c(t).find((o) => o.id === r),
    addEdge: (r) => {
      U(t, [...c(t), r]);
    },
    removeEdge: (r) => {
      U(t, c(t).filter((o) => o.id !== r));
    },
    updateEdge: (r, o) => {
      U(t, c(t).map((i) => i.id === r ? { ...i, ...o } : i));
    },
    updateEdges: (r) => {
      U(t, r(c(t)));
    },
    updateEdgeData: (r, o) => {
      U(t, c(t).map((i) => i.id === r ? { ...i, data: { ...i.data, ...o } } : i));
    }
  };
}, Ve = Gm();
var Jm = /* @__PURE__ */ Q("<button><!></button>");
function Le(e, t) {
  ue(t, !0);
  const n = v(t, "children", 7), r = v(t, "primary", 7), o = /* @__PURE__ */ Ze(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "children",
    "primary"
  ]);
  var i = {
    get children() {
      return n();
    },
    set children(l) {
      n(l), g();
    },
    get primary() {
      return r();
    },
    set primary(l) {
      r(l), g();
    }
  }, s = Jm();
  nt(s, () => ({
    type: "button",
    ...o,
    class: `tf-btn ${r() ? "tf-btn-primary" : ""} nopan nodrag ${t.class ?? ""}`
  }));
  var a = R(s);
  return Xe(a, () => n() ?? mt), Z(s), V(e, s), ce(i);
}
ae(Le, { children: {}, primary: {} }, [], [], !0);
var Um = /* @__PURE__ */ Q("<input/>");
function kd(e, t) {
  ue(t, !0);
  const n = /* @__PURE__ */ Ze(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = Um();
  nt(
    r,
    () => ({
      type: "checkbox",
      ...n,
      class: `tf-checkbox nopan nodrag ${t.class ?? ""}`
    }),
    void 0,
    void 0,
    void 0,
    void 0,
    !0
  ), V(e, r), ce();
}
ae(kd, {}, [], [], !0);
var Qm = /* @__PURE__ */ Q('<div><input type="hidden"/> <!> <!></div>');
const ey = {
  hash: "svelte-1o3a23c",
  code: ".tf-chosen.svelte-1o3a23c {display:flex;flex-direction:row;align-items:center;justify-content:space-between;gap:5px;}"
};
function Sd(e, t) {
  ue(t, !0), He(e, ey);
  const n = v(t, "placeholder", 7), r = v(t, "label", 7), o = v(t, "value", 7), i = v(t, "buttonText", 7, "选择..."), s = v(t, "onChosen", 7), a = /* @__PURE__ */ Ze(t, [
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
    set placeholder(h) {
      n(h), g();
    },
    get label() {
      return r();
    },
    set label(h) {
      r(h), g();
    },
    get value() {
      return o();
    },
    set value(h) {
      o(h), g();
    },
    get buttonText() {
      return i();
    },
    set buttonText(h = "选择...") {
      i(h), g();
    },
    get onChosen() {
      return s();
    },
    set onChosen(h) {
      s(h), g();
    }
  }, u = Qm();
  nt(
    u,
    () => ({
      ...a,
      class: `tf-chosen nopan nodrag ${t.class ?? ""}`
    }),
    void 0,
    void 0,
    void 0,
    "svelte-1o3a23c"
  );
  var d = R(u);
  Yn(d);
  var p = O(d, 2);
  Je(p, {
    get value() {
      return r();
    },
    get placeholder() {
      return n();
    },
    style: "flex-grow: 1;",
    disabled: !0
  });
  var f = O(p, 2);
  return Le(f, {
    onclick: (h) => {
      s()?.(o(), r(), h);
    },
    style: "padding: 3px",
    children: (h, y) => {
      me();
      var w = _e();
      Ce(() => Re(w, i())), V(h, w);
    },
    $$slots: { default: !0 }
  }), Z(u), Ce(() => Ro(d, o())), V(e, u), ce(l);
}
ae(
  Sd,
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
var ty = /* @__PURE__ */ Q("<input/>");
function Je(e, t) {
  ue(t, !0);
  const n = /* @__PURE__ */ Ze(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = ty();
  nt(
    r,
    () => ({
      type: "text",
      spellcheck: "false",
      ...n,
      class: `tf-input  nopan nodrag ${t.class ?? ""}`
    }),
    void 0,
    void 0,
    void 0,
    void 0,
    !0
  ), V(e, r), ce();
}
ae(Je, {}, [], [], !0);
var ny = /* @__PURE__ */ Q("<textarea></textarea>");
function Ie(e, t) {
  ue(t, !0);
  const n = v(t, "value", 7), r = v(t, "height", 7), o = v(t, "autoHeight", 7, !0), i = v(t, "maxHeight", 7), s = v(t, "onHeightChange", 7), a = /* @__PURE__ */ Ze(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "value",
    "height",
    "autoHeight",
    "maxHeight",
    "onHeightChange"
  ]);
  let l, u;
  function d() {
    if (l && o()) {
      if (r() !== void 0) {
        const m = typeof r() == "number" ? `${r()}px` : r();
        l.style.height = m, l.style.overflowY = "hidden", s()?.(m);
        return;
      }
      l.style.height = "auto", l.style.overflowY = "hidden";
      let w = l.scrollHeight;
      if (!u) {
        const m = t.rows || 1, b = getComputedStyle(l);
        u = parseFloat(b.fontSize) * 1.2 * m + parseFloat(b.paddingTop) + parseFloat(b.paddingBottom) + parseFloat(b.borderTopWidth);
      }
      if (w < u && (w = u), i()) {
        const m = typeof i() == "number" ? `${i()}px` : i();
        w > parseInt(m) ? (l.style.height = m, l.style.overflowY = "auto") : l.style.height = `${w}px`;
      } else
        l.style.height = `${w}px`;
      s()?.(l.style.height);
    }
  }
  qe(() => {
    d();
  });
  var p = {
    get value() {
      return n();
    },
    set value(w) {
      n(w), g();
    },
    get height() {
      return r();
    },
    set height(w) {
      r(w), g();
    },
    get autoHeight() {
      return o();
    },
    set autoHeight(w = !0) {
      o(w), g();
    },
    get maxHeight() {
      return i();
    },
    set maxHeight(w) {
      i(w), g();
    },
    get onHeightChange() {
      return s();
    },
    set onHeightChange(w) {
      s(w), g();
    }
  }, f = ny();
  pp(f);
  var h = (w) => {
    d(), t.oninput?.(w);
  }, y = (w) => {
    d(), t.onchange?.(w);
  };
  return nt(f, () => ({
    spellcheck: "false",
    ...a,
    oninput: h,
    onchange: y,
    class: `tf-textarea nodrag nowheel ${t.class ?? ""}`,
    value: n() || ""
  })), Lt(f, (w) => l = w, () => l), V(e, f), ce(p);
}
ae(
  Ie,
  {
    value: {},
    height: {},
    autoHeight: {},
    maxHeight: {},
    onHeightChange: {}
  },
  [],
  [],
  !0
);
var ry = /* @__PURE__ */ Q('<div role="button"><!></div>'), oy = /* @__PURE__ */ Q("<div></div>");
function Ed(e, t) {
  const n = Da(t, ["children", "$$slots", "$$events", "$$legacy", "$$host"]), r = Da(n, ["items", "onChange", "activeIndex"]);
  ue(t, !1);
  let o = v(t, "items", 28, () => []), i = v(t, "onChange", 12, () => {
  }), s = v(t, "activeIndex", 12, 0);
  function a(d, p) {
    s(p), i()?.(d, p);
  }
  var l = {
    get items() {
      return o();
    },
    set items(d) {
      o(d), g();
    },
    get onChange() {
      return i();
    },
    set onChange(d) {
      i(d), g();
    },
    get activeIndex() {
      return s();
    },
    set activeIndex(d) {
      s(d), g();
    }
  };
  Du();
  var u = oy();
  return nt(u, () => ({
    ...r,
    class: `tf-tabs ${Bs(r), lt(() => r.class) ?? ""}`
  })), yt(u, 5, o, Lr, (d, p, f) => {
    var h = ry();
    $e(h, "tabindex", f), h.__click = () => a(c(p), f), h.__keydown = (b) => {
      (b.key === "Enter" || b.key === " ") && (b.preventDefault(), a(c(p), f));
    };
    var y = R(h);
    {
      var w = (b) => {
        var $ = _e();
        Ce(() => Re($, (c(p), lt(() => c(p).label)))), V(b, $);
      }, m = (b) => {
        var $ = ke(), _ = oe($);
        Xe(_, () => (c(p), lt(() => c(p).label) ?? mt)), V(b, $);
      };
      se(y, (b) => {
        c(p), lt(() => typeof c(p).label == "string") ? b(w) : b(m, !1);
      });
    }
    Z(h), Ce(() => Nt(h, 1, `tf-tabs-item ${f === s() ? "active" : ""}`)), V(d, h);
  }), Z(u), V(e, u), ce(l);
}
Qn(["click", "keydown"]);
ae(Ed, { items: {}, onChange: {}, activeIndex: {} }, [], [], !0);
var iy = /* @__PURE__ */ Q('<span class="tf-collapse-item-title-icon"><!></span>'), sy = /* @__PURE__ */ Q('<div class="tf-collapse-item-description"><!></div>'), ay = /* @__PURE__ */ Q('<div class="tf-collapse-item-content"><!></div>'), ly = /* @__PURE__ */ Q('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><!> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), uy = /* @__PURE__ */ Q("<div></div>");
const cy = {
  hash: "svelte-ynwjxt",
  code: `
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-ynwjxt {transform:rotate(90deg);transition:transform 0.3s ease;}`
};
function Pd(e, t) {
  ue(t, !0), He(e, cy);
  let n = v(t, "items", 7), r = v(t, "onChange", 7), o = v(t, "activeKeys", 31, () => Kt([]));
  function i(l) {
    o().includes(l.key) ? o(o().filter((u) => u !== l.key)) : (o().push(l.key), o(o())), r()?.(l, o());
  }
  var s = {
    get items() {
      return n();
    },
    set items(l) {
      n(l), g();
    },
    get onChange() {
      return r();
    },
    set onChange(l) {
      r(l), g();
    },
    get activeKeys() {
      return o();
    },
    set activeKeys(l = []) {
      o(l), g();
    }
  }, a = uy();
  return yt(a, 21, n, Lr, (l, u, d) => {
    var p = ly(), f = R(p);
    $e(f, "tabindex", d), f.__click = () => i(c(u)), f.__keydown = (k) => {
      (k.key === "Enter" || k.key === " ") && (k.preventDefault(), i(c(u)));
    };
    var h = R(f);
    {
      var y = (k) => {
        var L = iy(), D = R(L);
        Zn(D, {
          get target() {
            return c(u).icon;
          }
        }), Z(L), V(k, L);
      };
      se(h, (k) => {
        c(u).icon && k(y);
      });
    }
    var w = O(h, 2);
    Zn(w, {
      get target() {
        return c(u).title;
      }
    });
    var m = O(w, 2);
    Z(f);
    var b = O(f, 2);
    {
      var $ = (k) => {
        var L = sy(), D = R(L);
        Zn(D, {
          get target() {
            return c(u).description;
          }
        }), Z(L), V(k, L);
      };
      se(b, (k) => {
        c(u).description && k($);
      });
    }
    var _ = O(b, 2);
    {
      var x = (k) => {
        var L = ay(), D = R(L);
        Zn(D, {
          get target() {
            return c(u).content;
          }
        }), Z(L), V(k, L);
      };
      se(_, (k) => {
        o().includes(c(u).key) && k(x);
      });
    }
    Z(p), Ce((k) => Nt(m, 1, `tf-collapse-item-title-arrow ${k ?? ""}`, "svelte-ynwjxt"), [
      () => o().includes(c(u).key) ? "rotate-90" : ""
    ]), V(l, p);
  }), Z(a), Ce(() => {
    dt(a, t.style), Nt(a, 1, `tf-collapse ${t.class ?? ""}`, "svelte-ynwjxt");
  }), V(e, a), ce(s);
}
Qn(["click", "keydown"]);
ae(Pd, { items: {}, onChange: {}, activeKeys: {} }, [], [], !0);
function Zn(e, t) {
  ue(t, !0);
  let n = v(t, "target", 7);
  typeof n() > "u" && n("undefined");
  var r = {
    get target() {
      return n();
    },
    set target(l) {
      n(l), g();
    }
  }, o = ke(), i = oe(o);
  {
    var s = (l) => {
      var u = ke(), d = oe(u);
      Xe(d, () => n() ?? mt), V(l, u);
    }, a = (l) => {
      var u = ke(), d = oe(u);
      qs(d, n), V(l, u);
    };
    se(i, (l) => {
      typeof n() == "function" ? l(s) : l(a, !1);
    });
  }
  return V(e, o), ce(r);
}
ae(Zn, { target: {} }, [], [], !0);
var dy = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), fy = /* @__PURE__ */ Q('<div class="tf-select-content-children"><!></div>'), py = /* @__PURE__ */ Q('<button class="tf-select-content-item"><span><!></span> <!></button> <!>', 1), hy = /* @__PURE__ */ Q('<div class="tf-select-content nopan nodrag nowheel "><!></div>'), gy = /* @__PURE__ */ Q("<!> <!>", 1), vy = /* @__PURE__ */ Q('<div class="tf-select-input-placeholder"> </div>'), my = /* @__PURE__ */ Q('<button><div class="tf-select-input-value"></div> <div class="tf-select-input-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></div></button>'), yy = /* @__PURE__ */ Q("<div><!></div>");
function ut(e, t) {
  ue(t, !0);
  const n = ($, _ = mt) => {
    var x = ke(), k = oe(x);
    yt(k, 19, _, (L, D) => `${D}_${L.value}`, (L, D) => {
      var j = py(), H = oe(j);
      H.__click = () => y(c(D));
      var A = R(H), z = R(A);
      {
        var S = (N) => {
          var K = dy();
          V(N, K);
        };
        se(z, (N) => {
          c(D).children && c(D).children.length > 0 && N(S);
        });
      }
      Z(A);
      var T = O(A, 2);
      Zn(T, {
        get target() {
          return c(D).label;
        }
      }), Z(H);
      var C = O(H, 2);
      {
        var P = (N) => {
          var K = fy(), Y = R(K);
          n(Y, () => c(D).children), Z(K), V(N, K);
        };
        se(C, (N) => {
          c(D).children && c(D).children.length > 0 && (a() || u().includes(c(D).value)) && N(P);
        });
      }
      V(L, j);
    }), V($, x);
  };
  let r = v(t, "items", 7), o = v(t, "onSelect", 7), i = v(t, "value", 23, () => []), s = v(t, "defaultValue", 23, () => []), a = v(t, "expandAll", 7, !0), l = v(t, "multiple", 7, !1), u = v(t, "expandValue", 23, () => []), d = v(t, "placeholder", 7), p = /* @__PURE__ */ Ze(t, [
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
    "placeholder"
  ]), f = /* @__PURE__ */ E(() => {
    const $ = [], _ = (x) => {
      for (let k of x)
        i().length > 0 ? i().includes(k.value) && $.push(k) : s().includes(k.value) && $.push(k), k.children && k.children.length > 0 && _(k.children);
    };
    return _(r()), $;
  }), h;
  function y($) {
    h?.hide(), o()?.($);
  }
  var w = {
    get items() {
      return r();
    },
    set items($) {
      r($), g();
    },
    get onSelect() {
      return o();
    },
    set onSelect($) {
      o($), g();
    },
    get value() {
      return i();
    },
    set value($ = []) {
      i($), g();
    },
    get defaultValue() {
      return s();
    },
    set defaultValue($ = []) {
      s($), g();
    },
    get expandAll() {
      return a();
    },
    set expandAll($ = !0) {
      a($), g();
    },
    get multiple() {
      return l();
    },
    set multiple($ = !1) {
      l($), g();
    },
    get expandValue() {
      return u();
    },
    set expandValue($ = []) {
      u($), g();
    },
    get placeholder() {
      return d();
    },
    set placeholder($) {
      d($), g();
    }
  }, m = yy();
  nt(m, () => ({ ...p, class: `tf-select ${p.class ?? ""}` }));
  var b = R(m);
  return Lt(
    tr(b, {
      floating: ($) => {
        var _ = hy(), x = R(_);
        n(x, r), Z(_), V($, _);
      },
      children: ($, _) => {
        var x = my();
        nt(x, () => ({ class: "tf-select-input nopan nodrag", ...p }));
        var k = R(x);
        yt(
          k,
          23,
          () => c(f),
          (L, D) => `${D}_${L.value}`,
          (L, D, j) => {
            var H = ke(), A = oe(H);
            {
              var z = (T) => {
                var C = ke(), P = oe(C);
                {
                  var N = (K) => {
                    Zn(K, {
                      get target() {
                        return c(D).label;
                      }
                    });
                  };
                  se(P, (K) => {
                    c(j) === 0 && K(N);
                  });
                }
                V(T, C);
              }, S = (T) => {
                var C = gy(), P = oe(C);
                Zn(P, {
                  get target() {
                    return c(D).label;
                  }
                });
                var N = O(P, 2);
                {
                  var K = (Y) => {
                    var F = _e(",");
                    V(Y, F);
                  };
                  se(N, (Y) => {
                    c(j) < c(f).length - 1 && Y(K);
                  });
                }
                V(T, C);
              };
              se(A, (T) => {
                l() ? T(S, !1) : T(z);
              });
            }
            V(L, H);
          },
          (L) => {
            var D = vy(), j = R(D, !0);
            Z(D), Ce(() => Re(j, d())), V(L, D);
          }
        ), Z(k), me(2), Z(x), V($, x);
      },
      $$slots: { floating: !0, default: !0 }
    }),
    ($) => h = $,
    () => h
  ), Z(m), V(e, m), ce(w);
}
Qn(["click"]);
ae(
  ut,
  {
    items: {},
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
const fo = Math.min, kr = Math.max, gi = Math.round, pn = (e) => ({
  x: e,
  y: e
}), wy = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, by = {
  start: "end",
  end: "start"
};
function ks(e, t, n) {
  return kr(e, fo(t, n));
}
function Lo(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function hr(e) {
  return e.split("-")[0];
}
function To(e) {
  return e.split("-")[1];
}
function Nd(e) {
  return e === "x" ? "y" : "x";
}
function pa(e) {
  return e === "y" ? "height" : "width";
}
const xy = /* @__PURE__ */ new Set(["top", "bottom"]);
function jn(e) {
  return xy.has(hr(e)) ? "y" : "x";
}
function ha(e) {
  return Nd(jn(e));
}
function $y(e, t, n) {
  n === void 0 && (n = !1);
  const r = To(e), o = ha(e), i = pa(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = vi(s)), [s, vi(s)];
}
function Cy(e) {
  const t = vi(e);
  return [Ss(e), t, Ss(t)];
}
function Ss(e) {
  return e.replace(/start|end/g, (t) => by[t]);
}
const bl = ["left", "right"], xl = ["right", "left"], _y = ["top", "bottom"], ky = ["bottom", "top"];
function Sy(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? xl : bl : t ? bl : xl;
    case "left":
    case "right":
      return t ? _y : ky;
    default:
      return [];
  }
}
function Ey(e, t, n, r) {
  const o = To(e);
  let i = Sy(hr(e), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map(Ss)))), i;
}
function vi(e) {
  return e.replace(/left|right|bottom|top/g, (t) => wy[t]);
}
function Py(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Ld(e) {
  return typeof e != "number" ? Py(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function mi(e) {
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
function $l(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = jn(t), s = ha(t), a = pa(s), l = hr(t), u = i === "y", d = r.x + r.width / 2 - o.width / 2, p = r.y + r.height / 2 - o.height / 2, f = r[a] / 2 - o[a] / 2;
  let h;
  switch (l) {
    case "top":
      h = {
        x: d,
        y: r.y - o.height
      };
      break;
    case "bottom":
      h = {
        x: d,
        y: r.y + r.height
      };
      break;
    case "right":
      h = {
        x: r.x + r.width,
        y: p
      };
      break;
    case "left":
      h = {
        x: r.x - o.width,
        y: p
      };
      break;
    default:
      h = {
        x: r.x,
        y: r.y
      };
  }
  switch (To(t)) {
    case "start":
      h[s] -= f * (n && u ? -1 : 1);
      break;
    case "end":
      h[s] += f * (n && u ? -1 : 1);
      break;
  }
  return h;
}
const Ny = async (e, t, n) => {
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
    x: d,
    y: p
  } = $l(u, r, l), f = r, h = {}, y = 0;
  for (let w = 0; w < a.length; w++) {
    const {
      name: m,
      fn: b
    } = a[w], {
      x: $,
      y: _,
      data: x,
      reset: k
    } = await b({
      x: d,
      y: p,
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
    d = $ ?? d, p = _ ?? p, h = {
      ...h,
      [m]: {
        ...h[m],
        ...x
      }
    }, k && y <= 50 && (y++, typeof k == "object" && (k.placement && (f = k.placement), k.rects && (u = k.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : k.rects), {
      x: d,
      y: p
    } = $l(u, f, l)), w = -1);
  }
  return {
    x: d,
    y: p,
    placement: f,
    strategy: o,
    middlewareData: h
  };
};
async function Td(e, t) {
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
    rootBoundary: d = "viewport",
    elementContext: p = "floating",
    altBoundary: f = !1,
    padding: h = 0
  } = Lo(t, e), y = Ld(h), w = a[f ? p === "floating" ? "reference" : "floating" : p], m = mi(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(w))) == null || n ? w : w.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: u,
    rootBoundary: d,
    strategy: l
  })), b = p === "floating" ? {
    x: r,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, $ = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)), _ = await (i.isElement == null ? void 0 : i.isElement($)) ? await (i.getScale == null ? void 0 : i.getScale($)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, x = mi(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: b,
    offsetParent: $,
    strategy: l
  }) : b);
  return {
    top: (m.top - x.top + y.top) / _.y,
    bottom: (x.bottom - m.bottom + y.bottom) / _.y,
    left: (m.left - x.left + y.left) / _.x,
    right: (x.right - m.right + y.right) / _.x
  };
}
const Ly = (e) => ({
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
      padding: d = 0
    } = Lo(e, t) || {};
    if (u == null)
      return {};
    const p = Ld(d), f = {
      x: n,
      y: r
    }, h = ha(o), y = pa(h), w = await s.getDimensions(u), m = h === "y", b = m ? "top" : "left", $ = m ? "bottom" : "right", _ = m ? "clientHeight" : "clientWidth", x = i.reference[y] + i.reference[h] - f[h] - i.floating[y], k = f[h] - i.reference[h], L = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
    let D = L ? L[_] : 0;
    (!D || !await (s.isElement == null ? void 0 : s.isElement(L))) && (D = a.floating[_] || i.floating[y]);
    const j = x / 2 - k / 2, H = D / 2 - w[y] / 2 - 1, A = fo(p[b], H), z = fo(p[$], H), S = A, T = D - w[y] - z, C = D / 2 - w[y] / 2 + j, P = ks(S, C, T), N = !l.arrow && To(o) != null && C !== P && i.reference[y] / 2 - (C < S ? A : z) - w[y] / 2 < 0, K = N ? C < S ? C - S : C - T : 0;
    return {
      [h]: f[h] + K,
      data: {
        [h]: P,
        centerOffset: C - P - K,
        ...N && {
          alignmentOffset: K
        }
      },
      reset: N
    };
  }
}), Ty = function(e) {
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
        mainAxis: d = !0,
        crossAxis: p = !0,
        fallbackPlacements: f,
        fallbackStrategy: h = "bestFit",
        fallbackAxisSideDirection: y = "none",
        flipAlignment: w = !0,
        ...m
      } = Lo(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const b = hr(o), $ = jn(a), _ = hr(a) === a, x = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), k = f || (_ || !w ? [vi(a)] : Cy(a)), L = y !== "none";
      !f && L && k.push(...Ey(a, w, y, x));
      const D = [a, ...k], j = await Td(t, m), H = [];
      let A = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (d && H.push(j[b]), p) {
        const C = $y(o, s, x);
        H.push(j[C[0]], j[C[1]]);
      }
      if (A = [...A, {
        placement: o,
        overflows: H
      }], !H.every((C) => C <= 0)) {
        var z, S;
        const C = (((z = i.flip) == null ? void 0 : z.index) || 0) + 1, P = D[C];
        if (P && (!(p === "alignment" && $ !== jn(P)) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        A.every((K) => jn(K.placement) === $ ? K.overflows[0] > 0 : !0)))
          return {
            data: {
              index: C,
              overflows: A
            },
            reset: {
              placement: P
            }
          };
        let N = (S = A.filter((K) => K.overflows[0] <= 0).sort((K, Y) => K.overflows[1] - Y.overflows[1])[0]) == null ? void 0 : S.placement;
        if (!N)
          switch (h) {
            case "bestFit": {
              var T;
              const K = (T = A.filter((Y) => {
                if (L) {
                  const F = jn(Y.placement);
                  return F === $ || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  F === "y";
                }
                return !0;
              }).map((Y) => [Y.placement, Y.overflows.filter((F) => F > 0).reduce((F, M) => F + M, 0)]).sort((Y, F) => Y[1] - F[1])[0]) == null ? void 0 : T[0];
              K && (N = K);
              break;
            }
            case "initialPlacement":
              N = a;
              break;
          }
        if (o !== N)
          return {
            reset: {
              placement: N
            }
          };
      }
      return {};
    }
  };
}, Vy = /* @__PURE__ */ new Set(["left", "top"]);
async function My(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = hr(n), a = To(n), l = jn(n) === "y", u = Vy.has(s) ? -1 : 1, d = i && l ? -1 : 1, p = Lo(t, e);
  let {
    mainAxis: f,
    crossAxis: h,
    alignmentAxis: y
  } = typeof p == "number" ? {
    mainAxis: p,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: p.mainAxis || 0,
    crossAxis: p.crossAxis || 0,
    alignmentAxis: p.alignmentAxis
  };
  return a && typeof y == "number" && (h = a === "end" ? y * -1 : y), l ? {
    x: h * d,
    y: f * u
  } : {
    x: f * u,
    y: h * d
  };
}
const Dy = function(e) {
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
      } = t, l = await My(t, e);
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
}, Oy = function(e) {
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
          fn: (m) => {
            let {
              x: b,
              y: $
            } = m;
            return {
              x: b,
              y: $
            };
          }
        },
        ...l
      } = Lo(e, t), u = {
        x: n,
        y: r
      }, d = await Td(t, l), p = jn(hr(o)), f = Nd(p);
      let h = u[f], y = u[p];
      if (i) {
        const m = f === "y" ? "top" : "left", b = f === "y" ? "bottom" : "right", $ = h + d[m], _ = h - d[b];
        h = ks($, h, _);
      }
      if (s) {
        const m = p === "y" ? "top" : "left", b = p === "y" ? "bottom" : "right", $ = y + d[m], _ = y - d[b];
        y = ks($, y, _);
      }
      const w = a.fn({
        ...t,
        [f]: h,
        [p]: y
      });
      return {
        ...w,
        data: {
          x: w.x - n,
          y: w.y - r,
          enabled: {
            [f]: i,
            [p]: s
          }
        }
      };
    }
  };
};
function Ai() {
  return typeof window < "u";
}
function Kr(e) {
  return Vd(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ot(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function zn(e) {
  var t;
  return (t = (Vd(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Vd(e) {
  return Ai() ? e instanceof Node || e instanceof Ot(e).Node : !1;
}
function Qt(e) {
  return Ai() ? e instanceof Element || e instanceof Ot(e).Element : !1;
}
function gn(e) {
  return Ai() ? e instanceof HTMLElement || e instanceof Ot(e).HTMLElement : !1;
}
function Cl(e) {
  return !Ai() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ot(e).ShadowRoot;
}
const zy = /* @__PURE__ */ new Set(["inline", "contents"]);
function Vo(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = en(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !zy.has(o);
}
const Hy = /* @__PURE__ */ new Set(["table", "td", "th"]);
function Ay(e) {
  return Hy.has(Kr(e));
}
const Iy = [":popover-open", ":modal"];
function Ii(e) {
  return Iy.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const Zy = ["transform", "translate", "scale", "rotate", "perspective"], jy = ["transform", "translate", "scale", "rotate", "perspective", "filter"], Ky = ["paint", "layout", "strict", "content"];
function ga(e) {
  const t = va(), n = Qt(e) ? en(e) : e;
  return Zy.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || jy.some((r) => (n.willChange || "").includes(r)) || Ky.some((r) => (n.contain || "").includes(r));
}
function Ry(e) {
  let t = Fn(e);
  for (; gn(t) && !Ar(t); ) {
    if (ga(t))
      return t;
    if (Ii(t))
      return null;
    t = Fn(t);
  }
  return null;
}
function va() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const By = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function Ar(e) {
  return By.has(Kr(e));
}
function en(e) {
  return Ot(e).getComputedStyle(e);
}
function Zi(e) {
  return Qt(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Fn(e) {
  if (Kr(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Cl(e) && e.host || // Fallback.
    zn(e)
  );
  return Cl(t) ? t.host : t;
}
function Md(e) {
  const t = Fn(e);
  return Ar(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : gn(t) && Vo(t) ? t : Md(t);
}
function Dd(e, t, n) {
  var r;
  t === void 0 && (t = []);
  const o = Md(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = Ot(o);
  return i ? (Es(s), t.concat(s, s.visualViewport || [], Vo(o) ? o : [], [])) : t.concat(o, Dd(o, []));
}
function Es(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Od(e) {
  const t = en(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = gn(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, a = gi(n) !== i || gi(r) !== s;
  return a && (n = i, r = s), {
    width: n,
    height: r,
    $: a
  };
}
function zd(e) {
  return Qt(e) ? e : e.contextElement;
}
function Sr(e) {
  const t = zd(e);
  if (!gn(t))
    return pn(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = Od(t);
  let s = (i ? gi(n.width) : n.width) / r, a = (i ? gi(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const Yy = /* @__PURE__ */ pn(0);
function Hd(e) {
  const t = Ot(e);
  return !va() || !t.visualViewport ? Yy : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Wy(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Ot(e) ? !1 : t;
}
function po(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = zd(e);
  let s = pn(1);
  t && (r ? Qt(r) && (s = Sr(r)) : s = Sr(e));
  const a = Wy(i, n, r) ? Hd(i) : pn(0);
  let l = (o.left + a.x) / s.x, u = (o.top + a.y) / s.y, d = o.width / s.x, p = o.height / s.y;
  if (i) {
    const f = Ot(i), h = r && Qt(r) ? Ot(r) : r;
    let y = f, w = Es(y);
    for (; w && r && h !== y; ) {
      const m = Sr(w), b = w.getBoundingClientRect(), $ = en(w), _ = b.left + (w.clientLeft + parseFloat($.paddingLeft)) * m.x, x = b.top + (w.clientTop + parseFloat($.paddingTop)) * m.y;
      l *= m.x, u *= m.y, d *= m.x, p *= m.y, l += _, u += x, y = Ot(w), w = Es(y);
    }
  }
  return mi({
    width: d,
    height: p,
    x: l,
    y: u
  });
}
function ji(e, t) {
  const n = Zi(e).scrollLeft;
  return t ? t.left + n : po(zn(e)).left + n;
}
function Ad(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - ji(e, n), o = n.top + t.scrollTop;
  return {
    x: r,
    y: o
  };
}
function qy(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", s = zn(r), a = t ? Ii(t.floating) : !1;
  if (r === s || a && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = pn(1);
  const d = pn(0), p = gn(r);
  if ((p || !p && !i) && ((Kr(r) !== "body" || Vo(s)) && (l = Zi(r)), gn(r))) {
    const h = po(r);
    u = Sr(r), d.x = h.x + r.clientLeft, d.y = h.y + r.clientTop;
  }
  const f = s && !p && !i ? Ad(s, l) : pn(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + d.x + f.x,
    y: n.y * u.y - l.scrollTop * u.y + d.y + f.y
  };
}
function Xy(e) {
  return Array.from(e.getClientRects());
}
function Fy(e) {
  const t = zn(e), n = Zi(e), r = e.ownerDocument.body, o = kr(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = kr(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + ji(e);
  const a = -n.scrollTop;
  return en(r).direction === "rtl" && (s += kr(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
const _l = 25;
function Gy(e, t) {
  const n = Ot(e), r = zn(e), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, a = 0, l = 0;
  if (o) {
    i = o.width, s = o.height;
    const d = va();
    (!d || d && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  const u = ji(r);
  if (u <= 0) {
    const d = r.ownerDocument, p = d.body, f = getComputedStyle(p), h = d.compatMode === "CSS1Compat" && parseFloat(f.marginLeft) + parseFloat(f.marginRight) || 0, y = Math.abs(r.clientWidth - p.clientWidth - h);
    y <= _l && (i -= y);
  } else u <= _l && (i += u);
  return {
    width: i,
    height: s,
    x: a,
    y: l
  };
}
const Jy = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function Uy(e, t) {
  const n = po(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = gn(e) ? Sr(e) : pn(1), s = e.clientWidth * i.x, a = e.clientHeight * i.y, l = o * i.x, u = r * i.y;
  return {
    width: s,
    height: a,
    x: l,
    y: u
  };
}
function kl(e, t, n) {
  let r;
  if (t === "viewport")
    r = Gy(e, n);
  else if (t === "document")
    r = Fy(zn(e));
  else if (Qt(t))
    r = Uy(t, n);
  else {
    const o = Hd(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return mi(r);
}
function Id(e, t) {
  const n = Fn(e);
  return n === t || !Qt(n) || Ar(n) ? !1 : en(n).position === "fixed" || Id(n, t);
}
function Qy(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Dd(e, []).filter((a) => Qt(a) && Kr(a) !== "body"), o = null;
  const i = en(e).position === "fixed";
  let s = i ? Fn(e) : e;
  for (; Qt(s) && !Ar(s); ) {
    const a = en(s), l = ga(s);
    !l && a.position === "fixed" && (o = null), (i ? !l && !o : !l && a.position === "static" && o && Jy.has(o.position) || Vo(s) && !l && Id(e, s)) ? r = r.filter((u) => u !== s) : o = a, s = Fn(s);
  }
  return t.set(e, r), r;
}
function e2(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const i = [...n === "clippingAncestors" ? Ii(t) ? [] : Qy(t, this._c) : [].concat(n), r], s = i[0], a = i.reduce((l, u) => {
    const d = kl(t, u, o);
    return l.top = kr(d.top, l.top), l.right = fo(d.right, l.right), l.bottom = fo(d.bottom, l.bottom), l.left = kr(d.left, l.left), l;
  }, kl(t, s, o));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top
  };
}
function t2(e) {
  const {
    width: t,
    height: n
  } = Od(e);
  return {
    width: t,
    height: n
  };
}
function n2(e, t, n) {
  const r = gn(t), o = zn(t), i = n === "fixed", s = po(e, !0, i, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = pn(0);
  function u() {
    l.x = ji(o);
  }
  if (r || !r && !i)
    if ((Kr(t) !== "body" || Vo(o)) && (a = Zi(t)), r) {
      const h = po(t, !0, i, t);
      l.x = h.x + t.clientLeft, l.y = h.y + t.clientTop;
    } else o && u();
  i && !r && o && u();
  const d = o && !r && !i ? Ad(o, a) : pn(0), p = s.left + a.scrollLeft - l.x - d.x, f = s.top + a.scrollTop - l.y - d.y;
  return {
    x: p,
    y: f,
    width: s.width,
    height: s.height
  };
}
function ns(e) {
  return en(e).position === "static";
}
function Sl(e, t) {
  if (!gn(e) || en(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return zn(e) === n && (n = n.ownerDocument.body), n;
}
function Zd(e, t) {
  const n = Ot(e);
  if (Ii(e))
    return n;
  if (!gn(e)) {
    let o = Fn(e);
    for (; o && !Ar(o); ) {
      if (Qt(o) && !ns(o))
        return o;
      o = Fn(o);
    }
    return n;
  }
  let r = Sl(e, t);
  for (; r && Ay(r) && ns(r); )
    r = Sl(r, t);
  return r && Ar(r) && ns(r) && !ga(r) ? n : r || Ry(e) || n;
}
const r2 = async function(e) {
  const t = this.getOffsetParent || Zd, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: n2(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function o2(e) {
  return en(e).direction === "rtl";
}
const i2 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: qy,
  getDocumentElement: zn,
  getClippingRect: e2,
  getOffsetParent: Zd,
  getElementRects: r2,
  getClientRects: Xy,
  getDimensions: t2,
  getScale: Sr,
  isElement: Qt,
  isRTL: o2
}, s2 = Dy, a2 = Oy, l2 = Ty, u2 = Ly, c2 = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: i2,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return Ny(e, t, {
    ...o,
    platform: i
  });
}, d2 = ({
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
    const b = document.querySelector(e);
    if (b)
      e = b;
    else
      throw new Error("element not found by document.querySelector('" + e + "')");
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
  function p() {
    c2(e, u, {
      placement: r,
      middleware: [
        s2(o),
        // 手动偏移配置
        l2(i),
        //自动翻转
        a2(s),
        //自动偏移（使得浮动元素能够进入视野）
        ...l ? [u2({ element: d })] : []
      ]
    }).then(({ x: b, y: $, placement: _, middlewareData: x }) => {
      if (Object.assign(u.style, {
        left: `${b}px`,
        top: `${$}px`
      }), l) {
        const { x: k, y: L } = x.arrow, D = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[_.split("-")[0]];
        Object.assign(d.style, {
          zIndex: -1,
          left: k != null ? `${k}px` : "",
          top: L != null ? `${L}px` : "",
          right: "",
          bottom: "",
          [D]: "2px"
        });
      }
    });
  }
  let f = !1;
  function h() {
    u.style.display = "block", u.style.visibility = "block", u.style.position = "absolute", l && (d.style.display = "block"), f = !0, p();
  }
  function y() {
    u.style.display = "none", l && (d.style.display = "none"), f = !1;
  }
  function w(b) {
    b.stopPropagation(), f ? y() : h();
  }
  function m(b) {
    u.contains(b.target) || y();
  }
  return (!t || t.length == 0) && (t = ["click"]), t.forEach((b) => {
    e.addEventListener(b, w);
  }), document.addEventListener("click", m), {
    destroy() {
      t.forEach((b) => {
        e.removeEventListener(b, w);
      }), document.removeEventListener("click", m);
    },
    hide() {
      y();
    },
    isVisible() {
      return f;
    }
  };
};
var f2 = /* @__PURE__ */ Q('<div style="position: relative"><div><!></div> <div style="display: none; width: 100%;z-index: 9999"><!></div></div>');
function tr(e, t) {
  ue(t, !0);
  const n = v(t, "children", 7), r = v(t, "floating", 7), o = v(t, "placement", 7, "bottom");
  let i, s, a;
  Mn(() => (a = d2({
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
    set children(w) {
      n(w), g();
    },
    get floating() {
      return r();
    },
    set floating(w) {
      r(w), g();
    },
    get placement() {
      return o();
    },
    set placement(w = "bottom") {
      o(w), g();
    }
  }, d = f2(), p = R(d), f = R(p);
  Xe(f, n), Z(p), Lt(p, (w) => i = w, () => i);
  var h = O(p, 2), y = R(h);
  return Xe(y, r), Z(h), Lt(h, (w) => s = w, () => s), Z(d), V(e, d), ce(u);
}
ae(tr, { children: {}, floating: {}, placement: {} }, [], ["hide"], !0);
function Te(e, t) {
  ue(t, !0);
  const n = v(t, "children", 7), r = v(t, "level", 7, 1), o = v(t, "mt", 7), i = v(t, "mb", 7);
  var s = {
    get children() {
      return n();
    },
    set children(u) {
      n(u), g();
    },
    get level() {
      return r();
    },
    set level(u = 1) {
      r(u), g();
    },
    get mt() {
      return o();
    },
    set mt(u) {
      o(u), g();
    },
    get mb() {
      return i();
    },
    set mb(u) {
      i(u), g();
    }
  }, a = ke(), l = oe(a);
  return Hp(l, () => `h${r()}`, !1, (u, d) => {
    nt(u, () => ({
      class: "tf-heading",
      style: `margin-top:${o() || "0"};margin-bottom:${i() || "0"}`
    }));
    var p = ke(), f = oe(p);
    Xe(f, () => n() ?? mt), V(d, p);
  }), V(e, a), ce(s);
}
ae(Te, { children: {}, level: {}, mt: {}, mb: {} }, [], [], !0);
var p2 = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1q3h954"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1q3h954"></path></svg>');
const h2 = {
  hash: "svelte-1q3h954",
  code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:#eee;border:1px solid transparent;}}"
};
function Mo(e, t) {
  ue(t, !0), He(e, h2);
  const n = /* @__PURE__ */ Ze(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  Le(e, Be(() => n, {
    get class() {
      return `input-btn-more ${t.class ?? ""}`;
    },
    children: (r, o) => {
      var i = p2();
      V(r, i);
    },
    $$slots: { default: !0 }
  })), ce();
}
ae(Mo, {}, [], [], !0);
const g2 = () => ({ deleteNode: (e) => {
  Ve.removeNode(e), Ve.updateEdges((t) => t.filter((n) => n.source !== e && n.target !== e));
} }), Nn = (e = 16) => {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = new Uint8Array(e);
  return crypto.getRandomValues(n), Array.from(n, (r) => t[r % t.length]).join("");
}, v2 = () => ({ copyNode: (e) => {
  const t = Ve.getNode(e);
  if (t) {
    const n = Nn(), r = {
      ...t,
      id: n,
      position: { x: t.position.x + 50, y: t.position.y + 50 }
    };
    Ve.updateNodes((o) => [...o.map((i) => ({ ...i, selected: !1 })), r]);
  }
} }), Fe = () => Wn("svelteflow__node_id"), Gn = () => Wn("tinyflow_options");
var m2 = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'), y2 = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'), w2 = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'), b2 = /* @__PURE__ */ Q('<div class="input-item svelte-ana6zl">执行条件： <!></div>'), x2 = /* @__PURE__ */ Q('<div class="input-item svelte-ana6zl">循环间隔时间（单位：毫秒）： <!></div> <div class="input-item svelte-ana6zl">最大循环次数（0 表示不限制）： <!></div> <div class="input-item svelte-ana6zl">退出条件： <!></div>', 1), $2 = /* @__PURE__ */ Q('<div class="input-item svelte-ana6zl">错误重试间隔时间（单位：毫秒）： <!></div> <div class="input-item svelte-ana6zl">最大重试次数： <!></div> <label class="input-item-inline svelte-ana6zl"><span>正常后重置重试次数记录：</span> <input type="checkbox"/></label>', 1), C2 = /* @__PURE__ */ Q('<div class="settings svelte-ana6zl"><div class="input-item svelte-ana6zl">节点名称： <!></div> <div class="input-item svelte-ana6zl">参数描述： <!></div> <!> <label class="input-item-inline svelte-ana6zl"><span>循环执行：</span> <input type="checkbox"/></label> <!> <label class="input-item-inline svelte-ana6zl"><span>错误重试：</span> <input type="checkbox"/></label> <!></div>'), _2 = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3.33946 17.0002C2.90721 16.2515 2.58277 15.4702 2.36133 14.6741C3.3338 14.1779 3.99972 13.1668 3.99972 12.0002C3.99972 10.8345 3.3348 9.824 2.36353 9.32741C2.81025 7.71651 3.65857 6.21627 4.86474 4.99001C5.7807 5.58416 6.98935 5.65534 7.99972 5.072C9.01009 4.48866 9.55277 3.40635 9.4962 2.31604C11.1613 1.8846 12.8847 1.90004 14.5031 2.31862C14.4475 3.40806 14.9901 4.48912 15.9997 5.072C17.0101 5.65532 18.2187 5.58416 19.1346 4.99007C19.7133 5.57986 20.2277 6.25151 20.66 7.00021C21.0922 7.7489 21.4167 8.53025 21.6381 9.32628C20.6656 9.82247 19.9997 10.8336 19.9997 12.0002C19.9997 13.166 20.6646 14.1764 21.6359 14.673C21.1892 16.2839 20.3409 17.7841 19.1347 19.0104C18.2187 18.4163 17.0101 18.3451 15.9997 18.9284C14.9893 19.5117 14.4467 20.5941 14.5032 21.6844C12.8382 22.1158 11.1148 22.1004 9.49633 21.6818C9.55191 20.5923 9.00929 19.5113 7.99972 18.9284C6.98938 18.3451 5.78079 18.4162 4.86484 19.0103C4.28617 18.4205 3.77172 17.7489 3.33946 17.0002ZM8.99972 17.1964C10.0911 17.8265 10.8749 18.8227 11.2503 19.9659C11.7486 20.0133 12.2502 20.014 12.7486 19.9675C13.1238 18.8237 13.9078 17.8268 14.9997 17.1964C16.0916 16.5659 17.347 16.3855 18.5252 16.6324C18.8146 16.224 19.0648 15.7892 19.2729 15.334C18.4706 14.4373 17.9997 13.2604 17.9997 12.0002C17.9997 10.74 18.4706 9.5632 19.2729 8.6665C19.1688 8.4405 19.0538 8.21822 18.9279 8.00021C18.802 7.78219 18.667 7.57148 18.5233 7.36842C17.3457 7.61476 16.0911 7.43414 14.9997 6.80405C13.9083 6.17395 13.1246 5.17768 12.7491 4.03455C12.2509 3.98714 11.7492 3.98646 11.2509 4.03292C10.8756 5.17671 10.0916 6.17364 8.99972 6.80405C7.9078 7.43447 6.65245 7.61494 5.47428 7.36803C5.18485 7.77641 4.93463 8.21117 4.72656 8.66637C5.52881 9.56311 5.99972 10.74 5.99972 12.0002C5.99972 13.2604 5.52883 14.4372 4.72656 15.3339C4.83067 15.5599 4.94564 15.7822 5.07152 16.0002C5.19739 16.2182 5.3324 16.4289 5.47612 16.632C6.65377 16.3857 7.90838 16.5663 8.99972 17.1964ZM11.9997 15.0002C10.3429 15.0002 8.99972 13.6571 8.99972 12.0002C8.99972 10.3434 10.3429 9.00021 11.9997 9.00021C13.6566 9.00021 14.9997 10.3434 14.9997 12.0002C14.9997 13.6571 13.6566 15.0002 11.9997 15.0002ZM11.9997 13.0002C12.552 13.0002 12.9997 12.5525 12.9997 12.0002C12.9997 11.4479 12.552 11.0002 11.9997 11.0002C11.4474 11.0002 10.9997 11.4479 10.9997 12.0002C10.9997 12.5525 11.4474 13.0002 11.9997 13.0002Z"></path></svg>'), k2 = /* @__PURE__ */ Q('<div class="tf-node-toolbar svelte-ana6zl"><!> <!> <!> <!></div>'), S2 = /* @__PURE__ */ Q('<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!> <!>', 1);
const E2 = {
  hash: "svelte-ana6zl",
  code: ".tf-node-toolbar.svelte-ana6zl {display:flex;gap:5px;padding:5px;border-radius:5px;background:#fff;border:1px solid #eee;box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}.settings.svelte-ana6zl {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.settings.svelte-ana6zl .input-item:where(.svelte-ana6zl) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}.settings.svelte-ana6zl .input-item-inline:where(.svelte-ana6zl) {display:flex;align-items:center;font-size:12px;color:#666;}"
};
function Yt(e, t) {
  ue(t, !0), He(e, E2);
  const n = v(t, "data", 7), r = v(t, "id", 7, ""), o = v(t, "icon", 7), i = v(t, "handle", 7), s = v(t, "children", 7), a = v(t, "allowExecute", 7, !0), l = v(t, "allowCopy", 7, !0), u = v(t, "allowDelete", 7, !0), d = v(t, "allowSetting", 7, !0), p = v(t, "allowSettingOfCondition", 7, !0), f = v(t, "showSourceHandle", 7, !0), h = v(t, "showTargetHandle", 7, !0), y = v(t, "onCollapse", 7);
  let w = n().expand ? ["key"] : [];
  const { updateNodeData: m, getNode: b } = it(), $ = /* @__PURE__ */ E(() => [
    {
      key: "key",
      icon: o(),
      title: n().title,
      description: n().description,
      content: s()
    }
  ]), { deleteNode: _ } = g2(), { copyNode: x } = v2(), k = Gn(), L = () => {
    k.onNodeExecute?.(b(r()));
  };
  let D = Fe();
  var j = {
    get data() {
      return n();
    },
    set data(M) {
      n(M), g();
    },
    get id() {
      return r();
    },
    set id(M = "") {
      r(M), g();
    },
    get icon() {
      return o();
    },
    set icon(M) {
      o(M), g();
    },
    get handle() {
      return i();
    },
    set handle(M) {
      i(M), g();
    },
    get children() {
      return s();
    },
    set children(M) {
      s(M), g();
    },
    get allowExecute() {
      return a();
    },
    set allowExecute(M = !0) {
      a(M), g();
    },
    get allowCopy() {
      return l();
    },
    set allowCopy(M = !0) {
      l(M), g();
    },
    get allowDelete() {
      return u();
    },
    set allowDelete(M = !0) {
      u(M), g();
    },
    get allowSetting() {
      return d();
    },
    set allowSetting(M = !0) {
      d(M), g();
    },
    get allowSettingOfCondition() {
      return p();
    },
    set allowSettingOfCondition(M = !0) {
      p(M), g();
    },
    get showSourceHandle() {
      return f();
    },
    set showSourceHandle(M = !0) {
      f(M), g();
    },
    get showTargetHandle() {
      return h();
    },
    set showTargetHandle(M = !0) {
      h(M), g();
    },
    get onCollapse() {
      return y();
    },
    set onCollapse(M) {
      y(M), g();
    }
  }, H = S2(), A = oe(H);
  {
    var z = (M) => {
      _d(M, {
        get position() {
          return ye.Top;
        },
        align: "start",
        children: (W, B) => {
          var G = k2(), I = R(G);
          {
            var X = (re) => {
              Le(re, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  _(r());
                },
                children: (ie, pe) => {
                  var ge = m2();
                  V(ie, ge);
                },
                $$slots: { default: !0 }
              });
            };
            se(I, (re) => {
              u() && re(X);
            });
          }
          var J = O(I, 2);
          {
            var te = (re) => {
              Le(re, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  x(r());
                },
                children: (ie, pe) => {
                  var ge = y2();
                  V(ie, ge);
                },
                $$slots: { default: !0 }
              });
            };
            se(J, (re) => {
              l() && re(te);
            });
          }
          var ne = O(J, 2);
          {
            var ee = (re) => {
              Le(re, {
                class: "tf-node-toolbar-item",
                onclick: L,
                children: (ie, pe) => {
                  var ge = w2();
                  V(ie, ge);
                },
                $$slots: { default: !0 }
              });
            };
            se(ne, (re) => {
              a() && re(ee);
            });
          }
          var he = O(ne, 2);
          {
            var de = (re) => {
              tr(re, {
                placement: "bottom",
                floating: (ie) => {
                  var pe = C2(), ge = R(pe), we = O(R(ge));
                  Je(we, {
                    style: "width: 100%;",
                    onchange: (fe) => {
                      const Se = fe.target.value;
                      m(D, { title: Se });
                    },
                    get value() {
                      return n().title;
                    }
                  }), Z(ge);
                  var le = O(ge, 2), be = O(R(le));
                  Ie(be, {
                    rows: 3,
                    style: "width: 100%;",
                    onchange: (fe) => {
                      const Se = fe.target.value;
                      m(D, { description: Se });
                    },
                    get value() {
                      return n().description;
                    }
                  }), Z(le);
                  var De = O(le, 2);
                  {
                    var q = (fe) => {
                      var Se = b2(), Qe = O(R(Se));
                      Ie(Qe, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (ze) => {
                          const et = ze.target.value;
                          m(D, { condition: et });
                        },
                        get value() {
                          return n().condition;
                        }
                      }), Z(Se), V(fe, Se);
                    };
                    se(De, (fe) => {
                      p() && fe(q);
                    });
                  }
                  var je = O(De, 2), Oe = O(R(je), 2);
                  Yn(Oe), Oe.__change = (fe) => {
                    const Se = fe.target.checked;
                    m(D, { loopEnable: Se });
                  }, Z(je);
                  var Ae = O(je, 2);
                  {
                    var Ke = (fe) => {
                      var Se = x2(), Qe = oe(Se), ze = O(R(Qe));
                      {
                        let ft = /* @__PURE__ */ E(() => n().loopIntervalMs || "1000");
                        Ie(ze, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (pt) => {
                            const Ht = pt.target.value;
                            m(D, { loopIntervalMs: Ht });
                          },
                          get value() {
                            return c(ft);
                          }
                        });
                      }
                      Z(Qe);
                      var et = O(Qe, 2), Wt = O(R(et));
                      {
                        let ft = /* @__PURE__ */ E(() => n().maxLoopCount || "0");
                        Ie(Wt, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (pt) => {
                            const Ht = pt.target.value;
                            m(D, { maxLoopCount: Ht });
                          },
                          get value() {
                            return c(ft);
                          }
                        });
                      }
                      Z(et);
                      var st = O(et, 2), An = O(R(st));
                      Ie(An, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (ft) => {
                          const pt = ft.target.value;
                          m(D, { loopBreakCondition: pt });
                        },
                        get value() {
                          return n().loopBreakCondition;
                        }
                      }), Z(st), V(fe, Se);
                    };
                    se(Ae, (fe) => {
                      n().loopEnable && fe(Ke);
                    });
                  }
                  var Ge = O(Ae, 2), wt = O(R(Ge), 2);
                  Yn(wt), wt.__change = (fe) => {
                    const Se = fe.target.checked;
                    m(D, { retryEnable: Se });
                  }, Z(Ge);
                  var sn = O(Ge, 2);
                  {
                    var rt = (fe) => {
                      var Se = $2(), Qe = oe(Se), ze = O(R(Qe));
                      {
                        let ft = /* @__PURE__ */ E(() => n().retryIntervalMs || "1000");
                        Ie(ze, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (pt) => {
                            const Ht = pt.target.value;
                            m(D, { retryIntervalMs: Ht });
                          },
                          get value() {
                            return c(ft);
                          }
                        });
                      }
                      Z(Qe);
                      var et = O(Qe, 2), Wt = O(R(et));
                      {
                        let ft = /* @__PURE__ */ E(() => n().maxRetryCount || "3");
                        Ie(Wt, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (pt) => {
                            const Ht = pt.target.value;
                            m(D, { maxRetryCount: Ht });
                          },
                          get value() {
                            return c(ft);
                          }
                        });
                      }
                      Z(et);
                      var st = O(et, 2), An = O(R(st), 2);
                      Yn(An), An.__change = (ft) => {
                        const pt = ft.target.checked;
                        m(D, { resetRetryCountAfterNormal: pt });
                      }, Z(st), Ce(() => Yi(An, !!n().resetRetryCountAfterNormal)), V(fe, Se);
                    };
                    se(sn, (fe) => {
                      n().retryEnable && fe(rt);
                    });
                  }
                  Z(pe), Ce(() => {
                    Yi(Oe, !!n().loopEnable), Yi(wt, !!n().retryEnable);
                  }), V(ie, pe);
                },
                children: (ie, pe) => {
                  Le(ie, {
                    class: "tf-node-toolbar-item",
                    children: (ge, we) => {
                      var le = _2();
                      V(ge, le);
                    },
                    $$slots: { default: !0 }
                  });
                },
                $$slots: { floating: !0, default: !0 }
              });
            };
            se(he, (re) => {
              d() && re(de);
            });
          }
          Z(G), V(W, G);
        },
        $$slots: { default: !0 }
      });
    };
    se(A, (M) => {
      (a() || l() || u()) && M(z);
    });
  }
  var S = O(A, 2), T = O(R(S), 2), C = R(T);
  Pd(C, {
    get items() {
      return c($);
    },
    get activeKeys() {
      return w;
    },
    onChange: (M, W) => {
      m(r(), { expand: W?.includes("key") }), y()?.(W?.includes("key") ? "key" : "");
    }
  }), Z(T), Z(S);
  var P = O(S, 2);
  {
    var N = (M) => {
      Xn(M, {
        type: "target",
        get position() {
          return ye.Left;
        },
        style: " left: -12px;top: 20px"
      });
    };
    se(P, (M) => {
      h() && M(N);
    });
  }
  var K = O(P, 2);
  {
    var Y = (M) => {
      Xn(M, {
        type: "source",
        get position() {
          return ye.Right;
        },
        style: "right: -12px;top: 20px"
      });
    };
    se(K, (M) => {
      f() && M(Y);
    });
  }
  var F = O(K, 2);
  return Xe(F, () => i() ?? mt), V(e, H), ce(j);
}
Qn(["change"]);
ae(
  Yt,
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
var P2 = /* @__PURE__ */ Q('<div class="input-more-item svelte-n5iecj">数据选项： <!></div>'), N2 = /* @__PURE__ */ Q('<div class="input-more-setting svelte-n5iecj"><div class="input-more-item svelte-n5iecj">数据内容： <!></div> <div class="input-more-item svelte-n5iecj">输入方式： <!></div> <!> <div class="input-more-item svelte-n5iecj">数据标题： <!></div> <div class="input-more-item svelte-n5iecj">数据描述： <!></div> <div class="input-more-item svelte-n5iecj">占位符： <!></div> <div class="input-more-item svelte-n5iecj"><!></div></div>'), L2 = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>'), T2 = /* @__PURE__ */ Q('<div class="input-item svelte-n5iecj"><!></div> <div class="input-item svelte-n5iecj"><!></div> <div class="input-item svelte-n5iecj"><!></div>', 1);
const V2 = {
  hash: "svelte-n5iecj",
  code: ".input-item.svelte-n5iecj {display:flex;align-items:center;}.input-more-setting.svelte-n5iecj {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-n5iecj .input-more-item:where(.svelte-n5iecj) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function jd(e, t) {
  ue(t, !0), He(e, V2);
  const n = v(t, "parameter", 7), r = v(t, "index", 7);
  let o = Fe(), i = On(o), s = /* @__PURE__ */ E(() => ({ ...n(), ...i?.current?.data?.parameters[r()] }));
  const { updateNodeData: a } = it(), l = (j, H) => {
    a(o, (A) => {
      let z = A.data.parameters;
      return z[r()][j] = H, { parameters: z };
    });
  }, u = (j, H) => {
    const A = H.target.value;
    l(j, A);
  }, d = (j) => {
    const H = j.target.value;
    l("name", H);
  }, p = (j) => {
    const H = j.target.checked;
    l("required", H);
  }, f = (j) => {
    const H = j.value;
    l("formType", H);
  }, h = (j) => {
    const H = j.value;
    l("contentType", H);
  };
  let y;
  const w = () => {
    a(o, (j) => {
      let H = j.data.parameters;
      return H.splice(r(), 1), { parameters: [...H] };
    }), y?.hide();
  };
  var m = {
    get parameter() {
      return n();
    },
    set parameter(j) {
      n(j), g();
    },
    get index() {
      return r();
    },
    set index(j) {
      r(j), g();
    }
  }, b = T2(), $ = oe(b), _ = R($);
  Je(_, {
    style: "width: 100%;",
    get value() {
      return c(s).name;
    },
    placeholder: "请输入参数名称",
    oninput: d
  }), Z($);
  var x = O($, 2), k = R(x);
  kd(k, {
    get checked() {
      return c(s).required;
    },
    onchange: p
  }), Z(x);
  var L = O(x, 2), D = R(L);
  return Lt(
    tr(D, {
      placement: "bottom",
      floating: (j) => {
        var H = N2(), A = R(H), z = O(R(A));
        {
          let I = /* @__PURE__ */ E(() => c(s).contentType ? [c(s).contentType] : []);
          ut(z, {
            get items() {
              return fa;
            },
            style: "width: 100%",
            defaultValue: ["text"],
            get value() {
              return c(I);
            },
            onSelect: h
          });
        }
        Z(A);
        var S = O(A, 2), T = O(R(S));
        {
          let I = /* @__PURE__ */ E(() => c(s).formType ? [c(s).formType] : []);
          ut(T, {
            get items() {
              return qm;
            },
            style: "width: 100%",
            defaultValue: ["input"],
            get value() {
              return c(I);
            },
            onSelect: f
          });
        }
        Z(S);
        var C = O(S, 2);
        {
          var P = (I) => {
            var X = P2(), J = O(R(X));
            {
              let te = /* @__PURE__ */ E(() => c(s).enums?.join(`
`));
              Ie(J, {
                rows: 3,
                style: "width: 100%;",
                onchange: (ne) => {
                  l("enums", ne.target?.value.trim().split(`
`));
                },
                get value() {
                  return c(te);
                },
                placeholder: "一行一个选项"
              });
            }
            Z(X), V(I, X);
          };
          se(C, (I) => {
            (c(s).formType === "radio" || c(s).formType === "checkbox" || c(s).formType === "select") && I(P);
          });
        }
        var N = O(C, 2), K = O(R(N));
        Ie(K, {
          rows: 1,
          style: "width: 100%;",
          onchange: (I) => {
            u("formLabel", I);
          },
          get value() {
            return c(s).formLabel;
          }
        }), Z(N);
        var Y = O(N, 2), F = O(R(Y));
        Ie(F, {
          rows: 2,
          style: "width: 100%;",
          onchange: (I) => {
            u("formDescription", I);
          },
          get value() {
            return c(s).formDescription;
          }
        }), Z(Y);
        var M = O(Y, 2), W = O(R(M));
        Ie(W, {
          rows: 2,
          style: "width: 100%;",
          onchange: (I) => {
            u("formPlaceholder", I);
          },
          get value() {
            return c(s).formPlaceholder;
          }
        }), Z(M);
        var B = O(M, 2), G = R(B);
        Le(G, {
          onclick: w,
          children: (I, X) => {
            me();
            var J = _e("删除");
            V(I, J);
          },
          $$slots: { default: !0 }
        }), Z(B), Z(H), V(j, H);
      },
      children: (j, H) => {
        Le(j, {
          class: "input-btn-more",
          children: (A, z) => {
            var S = L2();
            V(A, S);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (j) => y = j,
    () => y
  ), Z(L), V(e, b), ce(m);
}
ae(jd, { parameter: {}, index: {} }, [], [], !0);
var M2 = /* @__PURE__ */ Q('<div class="input-header svelte-1yp5n1k">参数名称</div> <div class="input-header svelte-1yp5n1k">必填</div> <div class="input-header svelte-1yp5n1k"></div>', 1), D2 = /* @__PURE__ */ Q('<div class="none-params svelte-1yp5n1k">无输入参数</div>'), O2 = /* @__PURE__ */ Q('<div class="input-container svelte-1yp5n1k"><!> <!></div>');
const z2 = {
  hash: "svelte-1yp5n1k",
  code: `.input-container.svelte-1yp5n1k {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1yp5n1k .none-params:where(.svelte-1yp5n1k) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1yp5n1k .input-header:where(.svelte-1yp5n1k) {font-size:12px;color:#666;}`
};
function Kd(e, t) {
  ue(t, !0), He(e, z2);
  let n = Fe(), r = On(n), o = /* @__PURE__ */ E(() => [...r?.current?.data?.parameters || []]);
  var i = O2(), s = R(i);
  {
    var a = (u) => {
      var d = M2();
      me(4), V(u, d);
    };
    se(s, (u) => {
      c(o).length !== 0 && u(a);
    });
  }
  var l = O(s, 2);
  yt(
    l,
    19,
    () => c(o),
    (u) => u.id,
    (u, d, p) => {
      jd(u, {
        get parameter() {
          return c(d);
        },
        get index() {
          return c(p);
        }
      });
    },
    (u) => {
      var d = D2();
      V(u, d);
    }
  ), Z(i), V(e, i), ce();
}
ae(Kd, {}, [], [], !0);
const ho = (e) => (!e || e.length == 0 || e.forEach((t) => {
  t.id || (t.id = Nn()), ho(t.children);
}), e), on = () => {
  const { updateNodeData: e } = it();
  return {
    addParameter: (t, n = "parameters", r) => {
      Array.isArray(r) ? r.forEach((s) => ho(s?.children)) : ho(r?.children);
      function o(s) {
        return {
          name: "",
          dataType: "String",
          refType: "ref",
          ...s,
          id: Nn()
        };
      }
      const i = [];
      Array.isArray(r) ? i.push(...r.map(o)) : i.push(o(r)), e(t, (s) => {
        let a = s.data[n];
        return a ? a.push(...i) : a = [...i], { [n]: [...a] };
      });
    }
  };
};
var H2 = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), A2 = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), I2 = /* @__PURE__ */ Q('<div class="heading svelte-llt1qy"><!> <!></div> <!>', 1);
const Z2 = {
  hash: "svelte-llt1qy",
  code: ".heading.svelte-llt1qy {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:#eee;border:1px solid transparent;}"
};
function Rd(e, t) {
  ue(t, !0), He(e, Z2);
  const n = v(t, "data", 7), r = /* @__PURE__ */ Ze(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Fe(), { addParameter: i } = on();
  var s = {
    get data() {
      return n();
    },
    set data(a) {
      n(a), g();
    }
  };
  return Yt(e, Be(() => r, {
    get data() {
      return n();
    },
    allowExecute: !1,
    showTargetHandle: !1,
    allowSettingOfCondition: !1,
    icon: (a) => {
      var l = H2();
      V(a, l);
    },
    children: (a, l) => {
      var u = I2(), d = oe(u), p = R(d);
      Te(p, {
        level: 3,
        children: (y, w) => {
          me();
          var m = _e("输入参数");
          V(y, m);
        },
        $$slots: { default: !0 }
      });
      var f = O(p, 2);
      Le(f, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: () => {
          i(o, "parameters", { refType: "input", name: "newParam" });
        },
        children: (y, w) => {
          var m = A2();
          V(y, m);
        },
        $$slots: { default: !0 }
      }), Z(d);
      var h = O(d, 2);
      Kd(h, {}), V(a, u);
    },
    $$slots: { icon: !0, default: !0 }
  })), ce(s);
}
ae(Rd, { data: {} }, [], [], !0);
const Bd = (e, t, n) => {
  for (const r of n)
    r.target === t && r.source && (e.push(r.source), Bd(e, r.source, n));
}, Yd = (e, t, n) => !e || e.length === 0 ? [] : e.map((r) => ({
  label: r.name + (n ? ` (Array<${r.dataType || "String"}>)` : ` (${r.dataType || "String"})`),
  value: t + "." + r.name,
  children: Yd(r.children, t + "." + r.name, n)
})), El = (e, t, n) => {
  if (e.type === "startNode") {
    const r = e.data.parameters, o = [];
    if (r) for (const i of r)
      o.push({
        label: i.name + (t ? ` (Array<${i.dataType || "String"}>)` : ` (${i.dataType || "String"})`),
        value: e.id + "." + i.name
      });
    return { label: e.data.title, value: e.id, children: o };
  } else {
    if (e.type === "loopNode" && n.parentId)
      return {
        label: e.data.title,
        value: e.id,
        children: [
          { label: "loopItem", value: e.id + ".loopItem" },
          { label: "index (Number)", value: e.id + ".index" }
        ]
      };
    {
      const r = e.data.outputDefs;
      if (r)
        return {
          label: e.data.title,
          value: e.id,
          children: Yd(r, e.id, t)
        };
    }
  }
}, Wd = (e = !1) => {
  const t = Fe(), n = On(t), r = /* @__PURE__ */ E(rn), o = /* @__PURE__ */ E(() => c(r).nodes), i = /* @__PURE__ */ E(() => c(r).edges), s = /* @__PURE__ */ E(() => c(r).nodeLookup);
  let a = /* @__PURE__ */ E(() => {
    const l = [];
    if (!n.current)
      return [];
    const u = c(s).get(t);
    if (e)
      for (const d of c(o)) {
        const p = d.parentId === n.current.id;
        if (p) {
          const f = El(d, p, u);
          f && l.push(f);
        }
      }
    else {
      const d = [];
      Bd(d, t, c(i));
      for (const p of c(o))
        if (d.includes(p.id)) {
          const f = p.parentId === n.current.id, h = El(p, f, u);
          h && l.push(h);
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
var j2 = /* @__PURE__ */ Q('<div class="input-more-item svelte-jmeys3">数据内容： <!></div>'), K2 = /* @__PURE__ */ Q('<div class="input-more-setting svelte-jmeys3"><div class="input-more-item svelte-jmeys3">数据来源： <!></div> <!> <div class="input-more-item svelte-jmeys3">默认值： <!></div> <div class="input-more-item svelte-jmeys3">参数描述： <!></div> <div class="input-more-item svelte-jmeys3"><!></div></div>'), R2 = /* @__PURE__ */ Q('<div class="input-item svelte-jmeys3"><!></div> <div class="input-item svelte-jmeys3"><!></div> <div class="input-item svelte-jmeys3"><!></div>', 1);
const B2 = {
  hash: "svelte-jmeys3",
  code: ".input-item.svelte-jmeys3 {display:flex;align-items:center;}.input-more-setting.svelte-jmeys3 {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-jmeys3 .input-more-item:where(.svelte-jmeys3) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function qd(e, t) {
  ue(t, !0), He(e, B2), Mn(() => {
    c(u).refType || y({ value: "ref" });
  });
  const n = v(t, "parameter", 7), r = v(t, "index", 7), o = v(t, "dataKeyName", 7), i = v(t, "useChildrenOnly", 7), s = v(t, "showContentType", 7, !1);
  let a = Fe(), l = On(a), u = /* @__PURE__ */ E(() => ({
    ...n(),
    ...l?.current?.data?.[o()][r()]
  }));
  const { updateNodeData: d } = it(), p = (T, C) => {
    d(a, (P) => {
      let N = P.data?.[o()];
      return N[r()] = { ...N[r()], [T]: C }, { [o()]: N };
    });
  }, f = (T, C) => {
    const P = C.target.value;
    p(T, P);
  }, h = (T) => {
    const C = T.value;
    p("ref", C);
  }, y = (T) => {
    const C = T.value;
    p("refType", C);
  }, w = (T) => {
    const C = T.value;
    p("contentType", C);
  };
  let m;
  const b = () => {
    d(a, (T) => {
      let C = T.data?.[o()];
      return C.splice(r(), 1), { [o()]: [...C] };
    }), m?.hide();
  };
  let $ = Wd(i());
  var _ = {
    get parameter() {
      return n();
    },
    set parameter(T) {
      n(T), g();
    },
    get index() {
      return r();
    },
    set index(T) {
      r(T), g();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(T) {
      o(T), g();
    },
    get useChildrenOnly() {
      return i();
    },
    set useChildrenOnly(T) {
      i(T), g();
    },
    get showContentType() {
      return s();
    },
    set showContentType(T = !1) {
      s(T), g();
    }
  }, x = R2(), k = oe(x), L = R(k);
  {
    let T = /* @__PURE__ */ E(() => c(u).nameDisabled === !0);
    Je(L, {
      style: "width: 100%;",
      get value() {
        return c(u).name;
      },
      placeholder: "请输入参数名称",
      get disabled() {
        return c(T);
      },
      oninput: (C) => f("name", C)
    });
  }
  Z(k);
  var D = O(k, 2), j = R(D);
  {
    var H = (T) => {
      Je(T, {
        get value() {
          return c(u).value;
        },
        placeholder: "请输入参数值",
        oninput: (C) => f("value", C)
      });
    }, A = (T) => {
      var C = ke(), P = oe(C);
      {
        var N = (K) => {
          {
            let Y = /* @__PURE__ */ E(() => [c(u).ref]);
            ut(K, {
              get items() {
                return $.current;
              },
              style: "width: 100%",
              defaultValue: ["ref"],
              get value() {
                return c(Y);
              },
              expandAll: !0,
              onSelect: h
            });
          }
        };
        se(
          P,
          (K) => {
            c(u).refType !== "input" && K(N);
          },
          !0
        );
      }
      V(T, C);
    };
    se(j, (T) => {
      c(u).refType === "fixed" ? T(H) : T(A, !1);
    });
  }
  Z(D);
  var z = O(D, 2), S = R(z);
  return Lt(
    tr(S, {
      placement: "bottom",
      floating: (T) => {
        var C = K2(), P = R(C), N = O(R(P));
        {
          let X = /* @__PURE__ */ E(() => c(u).refType ? [c(u).refType] : []);
          ut(N, {
            get items() {
              return Wm;
            },
            style: "width: 100%",
            defaultValue: ["ref"],
            get value() {
              return c(X);
            },
            onSelect: y
          });
        }
        Z(P);
        var K = O(P, 2);
        {
          var Y = (X) => {
            var J = j2(), te = O(R(J));
            {
              let ne = /* @__PURE__ */ E(() => c(u).contentType ? [c(u).contentType] : []);
              ut(te, {
                get items() {
                  return fa;
                },
                style: "width: 100%",
                defaultValue: ["text"],
                get value() {
                  return c(ne);
                },
                onSelect: w
              });
            }
            Z(J), V(X, J);
          };
          se(K, (X) => {
            s() && X(Y);
          });
        }
        var F = O(K, 2), M = O(R(F));
        Ie(M, {
          rows: 1,
          style: "width: 100%;",
          onchange: (X) => {
            f("defaultValue", X);
          },
          get value() {
            return c(u).defaultValue;
          },
          placeholder: "请输入参数默认值"
        }), Z(F);
        var W = O(F, 2), B = O(R(W));
        Ie(B, {
          rows: 3,
          style: "width: 100%;",
          onchange: (X) => {
            f("description", X);
          },
          get value() {
            return c(u).description;
          },
          placeholder: "请输入参数描述"
        }), Z(W);
        var G = O(W, 2), I = R(G);
        Le(I, {
          onclick: b,
          children: (X, J) => {
            me();
            var te = _e("删除");
            V(X, te);
          },
          $$slots: { default: !0 }
        }), Z(G), Z(C), V(T, C);
      },
      children: (T, C) => {
        Mo(T, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (T) => m = T,
    () => m
  ), Z(z), V(e, x), ce(_);
}
ae(
  qd,
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
var Y2 = /* @__PURE__ */ Q('<div class="input-header svelte-32f1pk">参数名称</div> <div class="input-header svelte-32f1pk">参数值</div> <div class="input-header svelte-32f1pk"></div>', 1), W2 = /* @__PURE__ */ Q('<div class="none-params svelte-32f1pk"> </div>'), q2 = /* @__PURE__ */ Q('<div class="input-container svelte-32f1pk"><!> <!></div>');
const X2 = {
  hash: "svelte-32f1pk",
  code: `.input-container.svelte-32f1pk {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-32f1pk .none-params:where(.svelte-32f1pk) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-32f1pk .input-header:where(.svelte-32f1pk) {font-size:12px;color:#666;}`
};
function $t(e, t) {
  ue(t, !0), He(e, X2);
  const n = v(t, "noneParameterText", 7, "无输入参数"), r = v(t, "dataKeyName", 7, "parameters"), o = v(t, "useChildrenOnly", 7), i = v(t, "showContentType", 7, !1);
  let s = Fe(), a = On(s), l = /* @__PURE__ */ E(() => [...a?.current?.data?.[r()] || []]);
  var u = {
    get noneParameterText() {
      return n();
    },
    set noneParameterText(y = "无输入参数") {
      n(y), g();
    },
    get dataKeyName() {
      return r();
    },
    set dataKeyName(y = "parameters") {
      r(y), g();
    },
    get useChildrenOnly() {
      return o();
    },
    set useChildrenOnly(y) {
      o(y), g();
    },
    get showContentType() {
      return i();
    },
    set showContentType(y = !1) {
      i(y), g();
    }
  }, d = q2(), p = R(d);
  {
    var f = (y) => {
      var w = Y2();
      me(4), V(y, w);
    };
    se(p, (y) => {
      c(l).length !== 0 && y(f);
    });
  }
  var h = O(p, 2);
  return yt(
    h,
    19,
    () => c(l),
    (y) => y.id,
    (y, w, m) => {
      qd(y, {
        get parameter() {
          return c(w);
        },
        get index() {
          return c(m);
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
    (y) => {
      var w = W2(), m = R(w, !0);
      Z(w), Ce(() => Re(m, n())), V(y, w);
    }
  ), Z(d), V(e, d), ce(u);
}
ae(
  $t,
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
var F2 = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), G2 = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), J2 = /* @__PURE__ */ Q('<div class="heading svelte-1fiuxu3"><!> <!></div> <!>', 1);
const U2 = {
  hash: "svelte-1fiuxu3",
  code: ".heading.svelte-1fiuxu3 {display:flex;margin-bottom:10px;}"
};
function Xd(e, t) {
  ue(t, !0), He(e, U2);
  const n = v(t, "data", 7), r = /* @__PURE__ */ Ze(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Fe(), { addParameter: i } = on();
  var s = {
    get data() {
      return n();
    },
    set data(a) {
      n(a), g();
    }
  };
  return Yt(e, Be(
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
        var l = F2();
        V(a, l);
      },
      children: (a, l) => {
        var u = J2(), d = oe(u), p = R(d);
        Te(p, {
          level: 3,
          children: (y, w) => {
            me();
            var m = _e("输出参数");
            V(y, m);
          },
          $$slots: { default: !0 }
        });
        var f = O(p, 2);
        Le(f, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs", { name: "output" });
          },
          children: (y, w) => {
            var m = G2();
            V(y, m);
          },
          $$slots: { default: !0 }
        }), Z(d);
        var h = O(d, 2);
        $t(h, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs",
          showContentType: !0
        }), V(a, u);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ce(s);
}
ae(Xd, { data: {} }, [], [], !0);
const rs = (e) => JSON.parse(JSON.stringify(e));
var Q2 = /* @__PURE__ */ ve('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), ew = /* @__PURE__ */ Q('<div class="input-more-item svelte-hwmib9"><!></div>'), tw = /* @__PURE__ */ Q('<div class="input-more-setting svelte-hwmib9"><div class="input-more-item svelte-hwmib9">默认值： <!></div> <div class="input-more-item svelte-hwmib9">参数描述： <!></div> <!></div>'), nw = /* @__PURE__ */ Q('<div class="input-item svelte-hwmib9"><!> <!></div> <div class="input-item svelte-hwmib9"><!> <!></div> <div class="input-item svelte-hwmib9"><!></div>', 1);
const rw = {
  hash: "svelte-hwmib9",
  code: ".input-item.svelte-hwmib9 {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-hwmib9 {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-hwmib9 .input-more-item:where(.svelte-hwmib9) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Fd(e, t) {
  ue(t, !0), He(e, rw);
  const n = v(t, "parameter", 7), r = v(t, "position", 7), o = v(t, "dataKeyName", 7), i = v(t, "placeholder", 7, "请输入参数值");
  let s = Fe(), a = On(s), l = /* @__PURE__ */ E(() => {
    let S = a?.current?.data?.[o()], T;
    if (S && r().length > 0) {
      let C = S;
      for (let P = 0; P < r().length; P++) {
        const N = r()[P];
        P == r().length - 1 ? T = C[N] : C = C[N].children;
      }
    }
    return { ...n(), ...T };
  });
  const { updateNodeData: u } = it(), d = (S, T) => {
    u(s, (C) => {
      const P = C.data?.[o()];
      if (P && r().length > 0) {
        let N = P;
        for (let K = 0; K < r().length; K++) {
          const Y = r()[K];
          K == r().length - 1 ? N[Y] = { ...N[Y], [S]: T } : N = N[Y].children;
        }
      }
      return { [o()]: [...rs(P)] };
    });
  }, p = (S, T) => {
    const C = T.target.value;
    d(S, C);
  }, f = (S) => {
    const T = S.value;
    d("dataType", T);
  };
  let h;
  const y = () => {
    u(s, (S) => {
      let T = S.data?.[o()];
      if (T && r().length > 0) {
        let C = T;
        for (let P = 0; P < r().length; P++) {
          const N = r()[P];
          P == r().length - 1 ? C.splice(N, 1) : C = C[N].children;
        }
      }
      return { [o()]: [...rs(T)] };
    }), h?.hide();
  }, w = () => {
    u(s, (S) => {
      let T = S.data?.[o()];
      if (T && r().length > 0) {
        let C = T;
        for (let P = 0; P < r().length; P++) {
          const N = r()[P];
          P == r().length - 1 ? C[N].children ? C[N].children.push({ id: Nn(), name: "newParam", dataType: "String" }) : C[N].children = [{ id: Nn(), name: "newParam", dataType: "String" }] : C = C[N].children;
        }
      }
      return { [o()]: [...rs(T)] };
    });
  };
  var m = {
    get parameter() {
      return n();
    },
    set parameter(S) {
      n(S), g();
    },
    get position() {
      return r();
    },
    set position(S) {
      r(S), g();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(S) {
      o(S), g();
    },
    get placeholder() {
      return i();
    },
    set placeholder(S = "请输入参数值") {
      i(S), g();
    }
  }, b = nw(), $ = oe(b), _ = R($);
  {
    var x = (S) => {
      var T = ke(), C = oe(T);
      yt(C, 17, r, Lr, (P, N) => {
        me();
        var K = _e(" ");
        V(P, K);
      }), V(S, T);
    };
    se(_, (S) => {
      r().length > 1 && S(x);
    });
  }
  var k = O(_, 2);
  {
    let S = /* @__PURE__ */ E(() => c(l).nameDisabled === !0);
    Je(k, {
      style: "width: 100%;",
      get value() {
        return c(l).name;
      },
      get placeholder() {
        return i();
      },
      oninput: (T) => {
        p("name", T);
      },
      get disabled() {
        return c(S);
      }
    });
  }
  Z($);
  var L = O($, 2), D = R(L);
  {
    let S = /* @__PURE__ */ E(() => c(l).dataTypeItems || Ym), T = /* @__PURE__ */ E(() => c(l).dataType ? [c(l).dataType] : []), C = /* @__PURE__ */ E(() => c(l).dataTypeDisabled === !0);
    ut(D, {
      get items() {
        return c(S);
      },
      style: "width: 100%",
      defaultValue: ["String"],
      get value() {
        return c(T);
      },
      get disabled() {
        return c(C);
      },
      onSelect: f
    });
  }
  var j = O(D, 2);
  {
    var H = (S) => {
      Le(S, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: w,
        children: (T, C) => {
          var P = Q2();
          V(T, P);
        },
        $$slots: { default: !0 }
      });
    };
    se(j, (S) => {
      (c(l).dataType === "Object" || c(l).dataType === "Array") && c(l).addChildDisabled !== !0 && S(H);
    });
  }
  Z(L);
  var A = O(L, 2), z = R(A);
  return Lt(
    tr(z, {
      placement: "bottom",
      floating: (S) => {
        var T = tw(), C = R(T), P = O(R(C));
        {
          let M = /* @__PURE__ */ E(() => c(l).defaultValue || "");
          Ie(P, {
            rows: 1,
            style: "width: 100%;",
            get value() {
              return c(M);
            },
            onchange: (W) => {
              p("defaultValue", W);
            }
          });
        }
        Z(C);
        var N = O(C, 2), K = O(R(N));
        {
          let M = /* @__PURE__ */ E(() => c(l).description || "");
          Ie(K, {
            rows: 3,
            style: "width: 100%;",
            get value() {
              return c(M);
            },
            onchange: (W) => {
              p("description", W);
            }
          });
        }
        Z(N);
        var Y = O(N, 2);
        {
          var F = (M) => {
            var W = ew(), B = R(W);
            Le(B, {
              onclick: y,
              children: (G, I) => {
                me();
                var X = _e("删除");
                V(G, X);
              },
              $$slots: { default: !0 }
            }), Z(W), V(M, W);
          };
          se(Y, (M) => {
            c(l).deleteDisabled !== !0 && M(F);
          });
        }
        Z(T), V(S, T);
      },
      children: (S, T) => {
        Mo(S, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (S) => h = S,
    () => h
  ), Z(A), V(e, b), ce(m);
}
ae(
  Fd,
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
var ow = /* @__PURE__ */ Q("<!> <!>", 1), iw = /* @__PURE__ */ Q('<div class="none-params svelte-1oz5kx0"> </div>'), sw = /* @__PURE__ */ Q('<div class="input-header svelte-1oz5kx0">参数名称</div> <div class="input-header svelte-1oz5kx0">参数类型</div> <div class="input-header svelte-1oz5kx0"></div>', 1), aw = /* @__PURE__ */ Q('<div class="input-container svelte-1oz5kx0"><!> <!></div>');
const lw = {
  hash: "svelte-1oz5kx0",
  code: `.input-container.svelte-1oz5kx0 {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1oz5kx0 .none-params:where(.svelte-1oz5kx0) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1oz5kx0 .input-header:where(.svelte-1oz5kx0) {font-size:12px;color:#666;}`
};
function Hn(e, t) {
  ue(t, !0), He(e, lw);
  const n = (y, w = mt, m = mt) => {
    var b = ke(), $ = oe(b);
    yt(
      $,
      19,
      w,
      (_) => `${_.id}_${_.children ? _.children.length : 0}`,
      (_, x, k) => {
        var L = ow(), D = oe(L);
        {
          let A = /* @__PURE__ */ E(() => [...m(), c(k)]);
          Fd(D, {
            get parameter() {
              return c(x);
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
        var j = O(D, 2);
        {
          var H = (A) => {
            {
              let z = /* @__PURE__ */ E(() => [...m(), c(k)]);
              n(A, () => c(x).children, () => c(z));
            }
          };
          se(j, (A) => {
            c(x).children && A(H);
          });
        }
        V(_, L);
      },
      (_) => {
        var x = ke(), k = oe(x);
        {
          var L = (D) => {
            var j = iw(), H = R(j, !0);
            Z(j), Ce(() => Re(H, r())), V(D, j);
          };
          se(k, (D) => {
            m().length === 0 && D(L);
          });
        }
        V(_, x);
      }
    ), V(y, b);
  }, r = v(t, "noneParameterText", 7, "无输出参数"), o = v(t, "dataKeyName", 7, "outputDefs"), i = v(t, "placeholder", 7, "请输入参数名称");
  let s = Fe(), a = On(s), l = /* @__PURE__ */ E(() => [...a?.current?.data?.[o()] || []]);
  var u = {
    get noneParameterText() {
      return r();
    },
    set noneParameterText(y = "无输出参数") {
      r(y), g();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(y = "outputDefs") {
      o(y), g();
    },
    get placeholder() {
      return i();
    },
    set placeholder(y = "请输入参数名称") {
      i(y), g();
    }
  }, d = aw(), p = R(d);
  {
    var f = (y) => {
      var w = sw();
      me(4), V(y, w);
    };
    se(p, (y) => {
      c(l).length !== 0 && y(f);
    });
  }
  var h = O(p, 2);
  return n(h, () => c(l) || [], () => []), Z(d), V(e, d), ce(u);
}
ae(Hn, { noneParameterText: {}, dataKeyName: {}, placeholder: {} }, [], [], !0);
var uw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), cw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), dw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), fw = /* @__PURE__ */ Q('<div class="llm-setting svelte-j81vcl"><div class="setting-title svelte-j81vcl">采样参数</div> <div class="setting-item svelte-j81vcl"><div class="slider-container svelte-j81vcl"><span class="svelte-j81vcl"> </span> <input class="nodrag svelte-j81vcl" type="range" min="0" max="1" step="0.1"/></div></div> <div class="setting-item svelte-j81vcl"><div class="slider-container svelte-j81vcl"><span class="svelte-j81vcl"> </span> <input class="nodrag svelte-j81vcl" type="range" min="0" max="1" step="0.1"/></div></div> <div class="setting-item svelte-j81vcl"><div class="slider-container svelte-j81vcl"><span class="svelte-j81vcl"> </span> <input class="nodrag svelte-j81vcl" type="range" min="0" max="100" step="1"/></div></div></div>'), pw = /* @__PURE__ */ Q('<div class="setting-title svelte-j81vcl">JSON Schema</div> <div class="setting-item svelte-j81vcl"><!></div>', 1), hw = /* @__PURE__ */ Q('<div class="heading svelte-j81vcl"><!> <!></div> <!> <div class="heading svelte-j81vcl" style="padding-top: 10px"><!> <!></div> <!> <!> <div class="setting-title svelte-j81vcl">模型</div> <div class="setting-item svelte-j81vcl"><!> <!></div> <div class="setting-title svelte-j81vcl">系统提示词</div> <div class="setting-item svelte-j81vcl"><!></div> <div class="setting-title svelte-j81vcl">用户提示词</div> <div class="setting-item svelte-j81vcl"><!></div> <!> <div class="heading svelte-j81vcl"><!> <!></div> <!>', 1);
const gw = {
  hash: "svelte-j81vcl",
  code: `.heading.svelte-j81vcl {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-j81vcl {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-j81vcl {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-j81vcl {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-j81vcl span:where(.svelte-j81vcl) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}.llm-setting.svelte-j81vcl {width:200px;background:#fff;padding:10px;border-radius:5px;box-shadow:0 0 10px rgba(0, 0, 0, 0.1);border:1px solid #ddd;}input[type="range"].svelte-j81vcl {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-j81vcl::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function Gd(e, t) {
  ue(t, !0), He(e, gw);
  const n = v(t, "data", 7), r = /* @__PURE__ */ Ze(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Fe(), { addParameter: i } = on(), s = Gn();
  let a = /* @__PURE__ */ Ee(Kt([]));
  Mn(async () => {
    const p = await s.provider?.llm?.();
    c(a).push(...p || []);
  });
  const { updateNodeData: l } = it(), u = (p) => {
    l(o, () => ({ outType: p })), p === "text" ? l(o, {
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
  qe(() => {
    n().outType || u("text");
  });
  var d = {
    get data() {
      return n();
    },
    set data(p) {
      n(p), g();
    }
  };
  return Yt(e, Be(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (p) => {
        var f = uw();
        V(p, f);
      },
      children: (p, f) => {
        var h = hw(), y = oe(h), w = R(y);
        Te(w, {
          level: 3,
          children: (M, W) => {
            me();
            var B = _e("输入参数");
            V(M, B);
          },
          $$slots: { default: !0 }
        });
        var m = O(w, 2);
        Le(m, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (M, W) => {
            var B = cw();
            V(M, B);
          },
          $$slots: { default: !0 }
        }), Z(y);
        var b = O(y, 2);
        $t(b, {});
        var $ = O(b, 2), _ = R($);
        Te(_, {
          level: 3,
          children: (M, W) => {
            me();
            var B = _e("图片识别");
            V(M, B);
          },
          $$slots: { default: !0 }
        });
        var x = O(_, 2);
        Le(x, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "images");
          },
          children: (M, W) => {
            var B = dw();
            V(M, B);
          },
          $$slots: { default: !0 }
        }), Z($);
        var k = O($, 2);
        $t(k, { dataKeyName: "images", noneParameterText: "无图片参数" });
        var L = O(k, 2);
        Te(L, {
          level: 3,
          mt: "10px",
          children: (M, W) => {
            me();
            var B = _e("模型设置");
            V(M, B);
          },
          $$slots: { default: !0 }
        });
        var D = O(L, 4), j = R(D);
        {
          let M = /* @__PURE__ */ E(() => n().llmId ? [n().llmId] : []);
          ut(j, {
            get items() {
              return c(a);
            },
            style: "width: 100%",
            placeholder: "请选择模型",
            onSelect: (W) => {
              const B = W.value;
              l(o, () => ({ llmId: B }));
            },
            get value() {
              return c(M);
            }
          });
        }
        var H = O(j, 2);
        tr(H, {
          placement: "bottom",
          floating: (M) => {
            var W = fw(), B = O(R(W), 2), G = R(B), I = R(G), X = R(I);
            Z(I);
            var J = O(I, 2);
            Yn(J), J.__input = (le) => l(o, { temperature: parseFloat(le.target.value) }), Z(G), Z(B);
            var te = O(B, 2), ne = R(te), ee = R(ne), he = R(ee);
            Z(ee);
            var de = O(ee, 2);
            Yn(de), de.__input = (le) => l(o, { topP: parseFloat(le.target.value) }), Z(ne), Z(te);
            var re = O(te, 2), ie = R(re), pe = R(ie), ge = R(pe);
            Z(pe);
            var we = O(pe, 2);
            Yn(we), we.__input = (le) => l(o, { topK: parseInt(le.target.value) }), Z(ie), Z(re), Z(W), Ce(() => {
              Re(X, `Temperature: ${n().temperature ?? 0.5 ?? ""}`), Ro(J, n().temperature ?? 0.5), Re(he, `Top P: ${n().topP ?? 0.9 ?? ""}`), Ro(de, n().topP ?? 0.9), Re(ge, `Top K: ${n().topK ?? 50 ?? ""}`), Ro(we, n().topK ?? 50);
            }), V(M, W);
          },
          children: (M, W) => {
            Mo(M, {});
          },
          $$slots: { floating: !0, default: !0 }
        }), Z(D);
        var A = O(D, 4), z = R(A);
        {
          let M = /* @__PURE__ */ E(() => n().systemPrompt || "");
          Ie(z, {
            rows: 5,
            placeholder: "请输入系统提示词",
            style: "width: 100%",
            get value() {
              return c(M);
            },
            oninput: (W) => {
              l(o, { systemPrompt: W.target.value });
            }
          });
        }
        Z(A);
        var S = O(A, 4), T = R(S);
        {
          let M = /* @__PURE__ */ E(() => n().userPrompt || "");
          Ie(T, {
            rows: 5,
            placeholder: "请输入用户提示词",
            style: "width: 100%",
            get value() {
              return c(M);
            },
            oninput: (W) => {
              l(o, { userPrompt: W.target.value });
            }
          });
        }
        Z(S);
        var C = O(S, 2);
        {
          var P = (M) => {
            var W = pw(), B = O(oe(W), 2), G = R(B);
            {
              let I = /* @__PURE__ */ E(() => n().jsonSchema || "");
              Ie(G, {
                rows: 5,
                placeholder: "请输入 SON Schema",
                style: "width: 100%",
                get value() {
                  return c(I);
                },
                oninput: (X) => {
                  l(o, { jsonSchema: X.target.value });
                }
              });
            }
            Z(B), V(M, W);
          };
          se(C, (M) => {
            n().outType === "json" && M(P);
          });
        }
        var N = O(C, 2), K = R(N);
        Te(K, {
          level: 3,
          children: (M, W) => {
            me();
            var B = _e("输出参数");
            V(M, B);
          },
          $$slots: { default: !0 }
        });
        var Y = O(K, 2);
        {
          let M = /* @__PURE__ */ E(() => n().outType ? [n().outType] : []);
          ut(Y, {
            items: [
              { label: "文本", value: "text" },
              { label: "JSON", value: "json" }
            ],
            style: "width: 100px;margin-left: auto",
            onSelect: (W) => {
              u(W.value);
            },
            get value() {
              return c(M);
            }
          });
        }
        Z(N);
        var F = O(N, 2);
        Hn(F, {}), V(p, h);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ce(d);
}
Qn(["input"]);
ae(Gd, { data: {} }, [], [], !0);
var vw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), mw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), yw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), ww = /* @__PURE__ */ Q('<div class="heading svelte-1wcsayx"><!> <!></div> <!> <!> <div class="setting-title svelte-1wcsayx">执行引擎</div> <div class="setting-item svelte-1wcsayx"><!></div> <div class="setting-title svelte-1wcsayx">执行代码</div> <div class="setting-item svelte-1wcsayx"><!></div> <div class="heading svelte-1wcsayx"><!> <!></div> <!>', 1);
const bw = {
  hash: "svelte-1wcsayx",
  code: ".heading.svelte-1wcsayx {display:flex;margin-bottom:10px;}.setting-title.svelte-1wcsayx {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-1wcsayx {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Jd(e, t) {
  ue(t, !0), He(e, bw);
  const n = v(t, "data", 7), r = /* @__PURE__ */ Ze(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]);
  Mn(() => {
    n().engine || s(o, () => ({ engine: "qlexpress" }));
  });
  const o = Fe(), { addParameter: i } = on(), { updateNodeData: s } = it(), a = [
    { label: "JavaScript", value: "js" },
    { label: "Groovy", value: "groovy" },
    { label: "QLExpress", value: "qlexpress" }
  ];
  var l = {
    get data() {
      return n();
    },
    set data(u) {
      n(u), g();
    }
  };
  return Yt(e, Be(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var d = vw();
        V(u, d);
      },
      children: (u, d) => {
        var p = ww(), f = oe(p), h = R(f);
        Te(h, {
          level: 3,
          children: (H, A) => {
            me();
            var z = _e("输入参数");
            V(H, z);
          },
          $$slots: { default: !0 }
        });
        var y = O(h, 2);
        Le(y, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (H, A) => {
            var z = mw();
            V(H, z);
          },
          $$slots: { default: !0 }
        }), Z(f);
        var w = O(f, 2);
        $t(w, {});
        var m = O(w, 2);
        Te(m, {
          level: 3,
          mt: "10px",
          children: (H, A) => {
            me();
            var z = _e("代码");
            V(H, z);
          },
          $$slots: { default: !0 }
        });
        var b = O(m, 4), $ = R(b);
        {
          let H = /* @__PURE__ */ E(() => n().engine ? [n().engine] : ["qlexpress"]);
          ut($, {
            get items() {
              return a;
            },
            style: "width: 100%",
            placeholder: "请选择执行引擎",
            onSelect: (A) => {
              const z = A.value;
              s(o, () => ({ engine: z }));
            },
            get value() {
              return c(H);
            }
          });
        }
        Z(b);
        var _ = O(b, 4), x = R(_);
        {
          let H = /* @__PURE__ */ E(() => n().code || "");
          Ie(x, {
            rows: 10,
            placeholder: "请输入执行代码，注：输出内容需添加到_result中，如：_result['key'] = value 或者 _result.key = value",
            style: "width: 100%",
            onchange: (A) => {
              s(o, () => ({ code: A.target.value }));
            },
            get value() {
              return c(H);
            }
          });
        }
        Z(_);
        var k = O(_, 2), L = R(k);
        Te(L, {
          level: 3,
          mt: "10px",
          children: (H, A) => {
            me();
            var z = _e("输出参数");
            V(H, z);
          },
          $$slots: { default: !0 }
        });
        var D = O(L, 2);
        Le(D, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (H, A) => {
            var z = yw();
            V(H, z);
          },
          $$slots: { default: !0 }
        }), Z(k);
        var j = O(k, 2);
        Hn(j, {}), V(u, p);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ce(l);
}
ae(Jd, { data: {} }, [], [], !0);
var xw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>'), $w = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Cw = /* @__PURE__ */ Q('<div class="heading svelte-1lcrzpc"><!> <!></div> <!> <!> <div class="setting-item svelte-1lcrzpc"><!></div> <div class="heading svelte-1lcrzpc"><!></div> <!>', 1);
const _w = {
  hash: "svelte-1lcrzpc",
  code: ".heading.svelte-1lcrzpc {display:flex;margin-bottom:10px;}.setting-item.svelte-1lcrzpc {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Ud(e, t) {
  ue(t, !0), He(e, _w);
  const n = v(t, "data", 7), r = /* @__PURE__ */ Ze(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Fe(), { addParameter: i } = on(), { updateNodeData: s } = it();
  qe(() => {
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
      n(l), g();
    }
  };
  return Yt(e, Be(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = xw();
        V(l, u);
      },
      children: (l, u) => {
        var d = Cw(), p = oe(d), f = R(p);
        Te(f, {
          level: 3,
          children: (k, L) => {
            me();
            var D = _e("输入参数");
            V(k, D);
          },
          $$slots: { default: !0 }
        });
        var h = O(f, 2);
        Le(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (k, L) => {
            var D = $w();
            V(k, D);
          },
          $$slots: { default: !0 }
        }), Z(p);
        var y = O(p, 2);
        $t(y, {});
        var w = O(y, 2);
        Te(w, {
          level: 3,
          mt: "10px",
          mb: "10px",
          children: (k, L) => {
            me();
            var D = _e("模板内容");
            V(k, D);
          },
          $$slots: { default: !0 }
        });
        var m = O(w, 2), b = R(m);
        {
          let k = /* @__PURE__ */ E(() => n().template || "");
          Ie(b, {
            rows: 10,
            placeholder: "请输入模板内容",
            style: "width: 100%",
            onchange: (L) => {
              s(o, () => ({ template: L.target.value }));
            },
            get value() {
              return c(k);
            }
          });
        }
        Z(m);
        var $ = O(m, 2), _ = R($);
        Te(_, {
          level: 3,
          mt: "10px",
          children: (k, L) => {
            me();
            var D = _e("输出参数");
            V(k, D);
          },
          $$slots: { default: !0 }
        }), Z($);
        var x = O($, 2);
        Hn(x, {}), V(l, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ce(a);
}
ae(Ud, { data: {} }, [], [], !0);
var kw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), Sw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ew = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Pw = /* @__PURE__ */ Q('<!> <div class="radio-group svelte-19uflw6"><label class="svelte-19uflw6"><!>none</label> <label class="svelte-19uflw6"><!>form-data</label> <label class="svelte-19uflw6"><!>x-www-form-urlencoded</label> <label class="svelte-19uflw6"><!>json</label> <label class="svelte-19uflw6"><!>raw</label></div>', 1), Nw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Lw = /* @__PURE__ */ Q('<div class="heading svelte-19uflw6" style="padding-top: 10px"><!> <!></div> <!>', 1), Tw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Vw = /* @__PURE__ */ Q('<div class="heading svelte-19uflw6" style="padding-top: 10px"><!> <!></div> <!>', 1), Mw = /* @__PURE__ */ Q('<div style="width: 100%"><!></div>'), Dw = /* @__PURE__ */ Q('<div style="width: 100%"><!></div>'), Ow = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), zw = /* @__PURE__ */ Q('<div class="heading svelte-19uflw6"><!> <!></div> <!> <!> <div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-19uflw6"><!> <!></div> <!> <!> <!> <!> <!> <!> <div class="heading svelte-19uflw6"><!> <!></div> <!>', 1);
const Hw = {
  hash: "svelte-19uflw6",
  code: ".heading.svelte-19uflw6 {display:flex;margin-bottom:10px;}.radio-group.svelte-19uflw6 {display:flex;margin:10px 0;flex-wrap:wrap;}.radio-group.svelte-19uflw6 label:where(.svelte-19uflw6) {display:flex;font-size:14px;box-sizing:border-box;}"
};
function Qd(e, t) {
  ue(t, !0), He(e, Hw);
  const n = v(t, "data", 7), r = /* @__PURE__ */ Ze(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]);
  Mn(() => {
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
  ], i = Fe(), { addParameter: s } = on(), { updateNodeData: a } = it();
  var l = {
    get data() {
      return n();
    },
    set data(u) {
      n(u), g();
    }
  };
  return Yt(e, Be(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var d = kw();
        V(u, d);
      },
      children: (u, d) => {
        var p = zw(), f = oe(p), h = R(f);
        Te(h, {
          level: 3,
          children: (I, X) => {
            me();
            var J = _e("输入参数");
            V(I, J);
          },
          $$slots: { default: !0 }
        });
        var y = O(h, 2);
        Le(y, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i);
          },
          children: (I, X) => {
            var J = Sw();
            V(I, J);
          },
          $$slots: { default: !0 }
        }), Z(f);
        var w = O(f, 2);
        $t(w, {});
        var m = O(w, 2);
        Te(m, {
          level: 3,
          mt: "10px",
          children: (I, X) => {
            me();
            var J = _e("URL 地址");
            V(I, J);
          },
          $$slots: { default: !0 }
        });
        var b = O(m, 2), $ = R(b), _ = R($);
        {
          let I = /* @__PURE__ */ E(() => n().method ? [n().method] : ["get"]);
          ut(_, {
            get items() {
              return o;
            },
            style: "width: 100%",
            placeholder: "请选择请求方式",
            onSelect: (X) => {
              const J = X.value;
              a(i, () => ({ method: J }));
            },
            get value() {
              return c(I);
            }
          });
        }
        Z($);
        var x = O($, 2), k = R(x);
        {
          let I = /* @__PURE__ */ E(() => n().url || "");
          Je(k, {
            placeholder: "请输入url",
            style: "width: 100%",
            onchange: (X) => {
              a(i, () => ({ url: X.target.value }));
            },
            get value() {
              return c(I);
            }
          });
        }
        Z(x), Z(b);
        var L = O(b, 2), D = R(L);
        Te(D, {
          level: 3,
          children: (I, X) => {
            me();
            var J = _e("Http 头信息");
            V(I, J);
          },
          $$slots: { default: !0 }
        });
        var j = O(D, 2);
        Le(j, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "headers");
          },
          children: (I, X) => {
            var J = Ew();
            V(I, J);
          },
          $$slots: { default: !0 }
        }), Z(L);
        var H = O(L, 2);
        $t(H, { dataKeyName: "headers" });
        var A = O(H, 2);
        {
          var z = (I) => {
            var X = Pw(), J = oe(X);
            Te(J, {
              level: 3,
              mt: "10px",
              children: (be, De) => {
                me();
                var q = _e("Body");
                V(be, q);
              },
              $$slots: { default: !0 }
            });
            var te = O(J, 2), ne = R(te), ee = R(ne);
            {
              let be = /* @__PURE__ */ E(() => !n().bodyType || n().bodyType === "");
              Je(ee, {
                type: "radio",
                value: "",
                get checked() {
                  return c(be);
                },
                onchange: (De) => {
                  De.target?.checked && a(i, { bodyType: "" });
                }
              });
            }
            me(), Z(ne);
            var he = O(ne, 2), de = R(he);
            {
              let be = /* @__PURE__ */ E(() => n().bodyType === "form-data");
              Je(de, {
                type: "radio",
                value: "form-data",
                get checked() {
                  return c(be);
                },
                onchange: (De) => {
                  De.target?.checked && a(i, { bodyType: "form-data" });
                }
              });
            }
            me(), Z(he);
            var re = O(he, 2), ie = R(re);
            {
              let be = /* @__PURE__ */ E(() => n().bodyType === "x-www-form-urlencoded");
              Je(ie, {
                type: "radio",
                value: "x-www-form-urlencoded",
                get checked() {
                  return c(be);
                },
                onchange: (De) => {
                  De.target?.checked && a(i, { bodyType: "x-www-form-urlencoded" });
                }
              });
            }
            me(), Z(re);
            var pe = O(re, 2), ge = R(pe);
            {
              let be = /* @__PURE__ */ E(() => n().bodyType === "json");
              Je(ge, {
                type: "radio",
                value: "json",
                get checked() {
                  return c(be);
                },
                onchange: (De) => {
                  De.target?.checked && a(i, { bodyType: "json" });
                }
              });
            }
            me(), Z(pe);
            var we = O(pe, 2), le = R(we);
            {
              let be = /* @__PURE__ */ E(() => n().bodyType === "raw");
              Je(le, {
                type: "radio",
                value: "raw",
                get checked() {
                  return c(be);
                },
                onchange: (De) => {
                  De.target?.checked && a(i, { bodyType: "raw" });
                }
              });
            }
            me(), Z(we), Z(te), V(I, X);
          };
          se(A, (I) => {
            (n().method === "post" || n().method === "put" || n().method === "delete" || n().method === "patch") && I(z);
          });
        }
        var S = O(A, 2);
        {
          var T = (I) => {
            var X = Lw(), J = oe(X), te = R(J);
            Te(te, {
              level: 3,
              children: (he, de) => {
                me();
                var re = _e("参数");
                V(he, re);
              },
              $$slots: { default: !0 }
            });
            var ne = O(te, 2);
            Le(ne, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formData");
              },
              children: (he, de) => {
                var re = Nw();
                V(he, re);
              },
              $$slots: { default: !0 }
            }), Z(J);
            var ee = O(J, 2);
            $t(ee, { dataKeyName: "formData" }), V(I, X);
          };
          se(S, (I) => {
            n().bodyType === "form-data" && I(T);
          });
        }
        var C = O(S, 2);
        {
          var P = (I) => {
            var X = Vw(), J = oe(X), te = R(J);
            Te(te, {
              level: 3,
              children: (he, de) => {
                me();
                var re = _e("Body 参数");
                V(he, re);
              },
              $$slots: { default: !0 }
            });
            var ne = O(te, 2);
            Le(ne, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formUrlencoded");
              },
              children: (he, de) => {
                var re = Tw();
                V(he, re);
              },
              $$slots: { default: !0 }
            }), Z(J);
            var ee = O(J, 2);
            $t(ee, { dataKeyName: "formUrlencoded" }), V(I, X);
          };
          se(C, (I) => {
            n().bodyType === "x-www-form-urlencoded" && I(P);
          });
        }
        var N = O(C, 2);
        {
          var K = (I) => {
            var X = Mw(), J = R(X);
            Ie(J, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入 json 信息",
              get value() {
                return n().bodyJson;
              },
              oninput: (te) => {
                a(i, { bodyJson: te.target.value });
              }
            }), Z(X), V(I, X);
          };
          se(N, (I) => {
            n().bodyType === "json" && I(K);
          });
        }
        var Y = O(N, 2);
        {
          var F = (I) => {
            var X = Dw(), J = R(X);
            Ie(J, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入请求信息",
              get value() {
                return n().bodyRaw;
              },
              oninput: (te) => {
                a(i, { bodyRaw: te.target.value });
              }
            }), Z(X), V(I, X);
          };
          se(Y, (I) => {
            n().bodyType === "raw" && I(F);
          });
        }
        var M = O(Y, 2), W = R(M);
        Te(W, {
          level: 3,
          mt: "10px",
          children: (I, X) => {
            me();
            var J = _e("输出参数");
            V(I, J);
          },
          $$slots: { default: !0 }
        });
        var B = O(W, 2);
        Le(B, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "outputDefs");
          },
          children: (I, X) => {
            var J = Ow();
            V(I, J);
          },
          $$slots: { default: !0 }
        }), Z(M);
        var G = O(M, 2);
        Hn(G, {}), V(u, p);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ce(l);
}
ae(Qd, { data: {} }, [], [], !0);
var Aw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>'), Iw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Zw = /* @__PURE__ */ Q('<div class="heading svelte-ddi5i"><!> <!></div> <!> <!> <div class="setting-title svelte-ddi5i">知识库</div> <div class="setting-item svelte-ddi5i"><!></div> <div class="setting-title svelte-ddi5i">关键字</div> <div class="setting-item svelte-ddi5i"><!></div> <div class="setting-title svelte-ddi5i">获取数据量</div> <div class="setting-item svelte-ddi5i"><!></div> <div class="heading svelte-ddi5i"><!></div> <!>', 1);
const jw = {
  hash: "svelte-ddi5i",
  code: ".heading.svelte-ddi5i {display:flex;margin-bottom:10px;}.setting-title.svelte-ddi5i {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-ddi5i {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function ef(e, t) {
  ue(t, !0), He(e, jw);
  const n = v(t, "data", 7), r = /* @__PURE__ */ Ze(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Fe(), { addParameter: i } = on(), s = Gn();
  let a = /* @__PURE__ */ Ee(Kt([]));
  Mn(async () => {
    const d = await s.provider?.knowledge?.();
    c(a).push(...d || []);
  });
  const { updateNodeData: l } = it();
  qe(() => {
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
      n(d), g();
    }
  };
  return Yt(e, Be(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (d) => {
        var p = Aw();
        V(d, p);
      },
      children: (d, p) => {
        var f = Zw(), h = oe(f), y = R(h);
        Te(y, {
          level: 3,
          children: (z, S) => {
            me();
            var T = _e("输入参数");
            V(z, T);
          },
          $$slots: { default: !0 }
        });
        var w = O(y, 2);
        Le(w, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (z, S) => {
            var T = Iw();
            V(z, T);
          },
          $$slots: { default: !0 }
        }), Z(h);
        var m = O(h, 2);
        $t(m, {});
        var b = O(m, 2);
        Te(b, {
          level: 3,
          mt: "10px",
          children: (z, S) => {
            me();
            var T = _e("知识库设置");
            V(z, T);
          },
          $$slots: { default: !0 }
        });
        var $ = O(b, 4), _ = R($);
        {
          let z = /* @__PURE__ */ E(() => n().knowledgeId ? [n().knowledgeId] : []);
          ut(_, {
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
              return c(z);
            }
          });
        }
        Z($);
        var x = O($, 4), k = R(x);
        Je(k, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (z) => {
            const S = z.target.value;
            l(o, () => ({ keyword: S }));
          }
        }), Z(x);
        var L = O(x, 4), D = R(L);
        {
          let z = /* @__PURE__ */ E(() => n().limit || "");
          Je(D, {
            placeholder: "搜索的数据条数",
            style: "width: 100%",
            onchange: (S) => {
              const T = S.target.value;
              l(o, () => ({ limit: T }));
            },
            get value() {
              return c(z);
            }
          });
        }
        Z(L);
        var j = O(L, 2), H = R(j);
        Te(H, {
          level: 3,
          mt: "10px",
          children: (z, S) => {
            me();
            var T = _e("输出参数");
            V(z, T);
          },
          $$slots: { default: !0 }
        }), Z(j);
        var A = O(j, 2);
        Hn(A, {}), V(d, f);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ce(u);
}
ae(ef, { data: {} }, [], [], !0);
var Kw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>'), Rw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Bw = /* @__PURE__ */ Q('<div class="heading svelte-1qblm04"><!> <!></div> <!> <!> <div class="setting-title svelte-1qblm04">搜索引擎</div> <div class="setting-item svelte-1qblm04"><!></div> <div class="setting-title svelte-1qblm04">关键字</div> <div class="setting-item svelte-1qblm04"><!></div> <div class="setting-title svelte-1qblm04">搜索数据量</div> <div class="setting-item svelte-1qblm04"><!></div> <div class="heading svelte-1qblm04"><!></div> <!>', 1);
const Yw = {
  hash: "svelte-1qblm04",
  code: ".heading.svelte-1qblm04 {display:flex;margin-bottom:10px;}.setting-title.svelte-1qblm04 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-1qblm04 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function tf(e, t) {
  ue(t, !0), He(e, Yw);
  const n = v(t, "data", 7), r = /* @__PURE__ */ Ze(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Fe(), { addParameter: i } = on(), s = Gn();
  let a = /* @__PURE__ */ Ee(Kt([]));
  Mn(async () => {
    const d = await s.provider?.searchEngine?.();
    c(a).push(...d || []);
  });
  const { updateNodeData: l } = it();
  qe(() => {
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
      n(d), g();
    }
  };
  return Yt(e, Be(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (d) => {
        var p = Kw();
        V(d, p);
      },
      children: (d, p) => {
        var f = Bw(), h = oe(f), y = R(h);
        Te(y, {
          level: 3,
          children: (z, S) => {
            me();
            var T = _e("输入参数");
            V(z, T);
          },
          $$slots: { default: !0 }
        });
        var w = O(y, 2);
        Le(w, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (z, S) => {
            var T = Rw();
            V(z, T);
          },
          $$slots: { default: !0 }
        }), Z(h);
        var m = O(h, 2);
        $t(m, {});
        var b = O(m, 2);
        Te(b, {
          level: 3,
          mt: "10px",
          children: (z, S) => {
            me();
            var T = _e("搜索引擎设置");
            V(z, T);
          },
          $$slots: { default: !0 }
        });
        var $ = O(b, 4), _ = R($);
        {
          let z = /* @__PURE__ */ E(() => n().engine ? [n().engine] : []);
          ut(_, {
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
              return c(z);
            }
          });
        }
        Z($);
        var x = O($, 4), k = R(x);
        Je(k, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (z) => {
            const S = z.target.value;
            l(o, () => ({ keyword: S }));
          }
        }), Z(x);
        var L = O(x, 4), D = R(L);
        Je(D, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          get value() {
            return n().limit;
          },
          onchange: (z) => {
            const S = z.target.value;
            l(o, () => ({ limit: S }));
          }
        }), Z(L);
        var j = O(L, 2), H = R(j);
        Te(H, {
          level: 3,
          mt: "10px",
          children: (z, S) => {
            me();
            var T = _e("输出参数");
            V(z, T);
          },
          $$slots: { default: !0 }
        }), Z(j);
        var A = O(j, 2);
        Hn(A, {}), V(d, f);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ce(u);
}
ae(tf, { data: {} }, [], [], !0);
var Ww = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>'), qw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Xw = /* @__PURE__ */ Q('<div class="heading svelte-1o34e8c"><!></div> <!> <div class="heading svelte-1o34e8c"><!> <!></div> <!>', 1);
const Fw = {
  hash: "svelte-1o34e8c",
  code: ".heading.svelte-1o34e8c {display:flex;margin:10px 0;align-items:center;}.loop_handle_wrapper ::after {content:'循环体';width:100px;height:20px;background:#000;color:#fff;display:flex;justify-content:center;align-items:center;}"
};
function nf(e, t) {
  ue(t, !0), He(e, Fw);
  const n = v(t, "data", 7), r = /* @__PURE__ */ Ze(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Fe(), { addParameter: i } = on();
  qe(() => {
    (!n().loopVars || n().loopVars.length === 0) && i(o, "loopVars", { name: "loopVar", nameDisabled: !0, deleteDisabled: !0 });
  });
  var s = {
    get data() {
      return n();
    },
    set data(a) {
      n(a), g();
    }
  };
  return Yt(e, Be(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (a) => {
        var l = Ww();
        V(a, l);
      },
      handle: (a) => {
        Xn(a, {
          type: "source",
          get position() {
            return ye.Bottom;
          },
          id: "loop_handle",
          style: "bottom: -12px;width: 100px",
          class: "loop_handle_wrapper"
        });
      },
      children: (a, l) => {
        var u = Xw(), d = oe(u), p = R(d);
        Te(p, {
          level: 3,
          children: (b, $) => {
            me();
            var _ = _e("循环变量");
            V(b, _);
          },
          $$slots: { default: !0 }
        }), Z(d);
        var f = O(d, 2);
        $t(f, { dataKeyName: "loopVars" });
        var h = O(f, 2), y = R(h);
        Te(y, {
          level: 3,
          children: (b, $) => {
            me();
            var _ = _e("输出参数");
            V(b, _);
          },
          $$slots: { default: !0 }
        });
        var w = O(y, 2);
        Le(w, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (b, $) => {
            var _ = qw();
            V(b, _);
          },
          $$slots: { default: !0 }
        }), Z(h);
        var m = O(h, 2);
        $t(m, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs",
          useChildrenOnly: !0
        }), V(a, u);
      },
      $$slots: { icon: !0, handle: !0, default: !0 }
    }
  )), ce(s);
}
ae(nf, { data: {} }, [], [], !0);
var Gw = /* @__PURE__ */ Q('<div class="input-more-setting svelte-5x0hls"><div class="input-more-item svelte-5x0hls">数据内容： <!></div> <div class="input-more-item svelte-5x0hls">确认方式： <!></div> <div class="input-more-item svelte-5x0hls">数据标题： <!></div> <div class="input-more-item svelte-5x0hls">数据描述： <!></div>   <div class="input-more-item svelte-5x0hls"><!></div></div>'), Jw = /* @__PURE__ */ Q('<div class="input-item svelte-5x0hls"><!></div> <div class="input-item svelte-5x0hls"><!></div> <div class="input-item svelte-5x0hls"><!></div>', 1);
const Uw = {
  hash: "svelte-5x0hls",
  code: ".input-item.svelte-5x0hls {display:flex;align-items:center;}.input-more-setting.svelte-5x0hls {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-5x0hls .input-more-item:where(.svelte-5x0hls) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function rf(e, t) {
  ue(t, !0), He(e, Uw);
  const n = v(t, "parameter", 7), r = v(t, "index", 7), o = v(t, "dataKeyName", 7), i = v(t, "useChildrenOnly", 7);
  let s = Fe(), a = On(s), l = /* @__PURE__ */ E(() => ({
    ...n(),
    ...a?.current?.data?.[o()][r()]
  }));
  const { updateNodeData: u } = it(), d = (S, T) => {
    u(s, (C) => {
      let P = C.data?.[o()];
      return P[r()] = { ...P[r()], [S]: T }, { [o()]: P };
    });
  }, p = (S, T) => {
    const C = T.target.value;
    d(S, C);
  }, f = (S) => {
    const T = S.value;
    d("ref", T);
  }, h = (S) => {
    const T = S.value;
    d("formType", T);
  }, y = (S) => {
    const T = S.value;
    d("contentType", T);
  };
  let w;
  const m = () => {
    u(s, (S) => {
      let T = S.data?.[o()];
      return T.splice(r(), 1), { [o()]: [...T] };
    }), w?.hide();
  };
  let b = Wd(i());
  var $ = {
    get parameter() {
      return n();
    },
    set parameter(S) {
      n(S), g();
    },
    get index() {
      return r();
    },
    set index(S) {
      r(S), g();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(S) {
      o(S), g();
    },
    get useChildrenOnly() {
      return i();
    },
    set useChildrenOnly(S) {
      i(S), g();
    }
  }, _ = Jw(), x = oe(_), k = R(x);
  {
    let S = /* @__PURE__ */ E(() => c(l).nameDisabled === !0);
    Je(k, {
      style: "width: 100%;",
      get value() {
        return c(l).name;
      },
      placeholder: "请输入参数名称",
      get disabled() {
        return c(S);
      },
      oninput: (T) => p("name", T)
    });
  }
  Z(x);
  var L = O(x, 2), D = R(L);
  {
    var j = (S) => {
      Je(S, {
        get value() {
          return c(l).value;
        },
        placeholder: "请输入参数值",
        oninput: (T) => p("value", T)
      });
    }, H = (S) => {
      var T = ke(), C = oe(T);
      {
        var P = (N) => {
          {
            let K = /* @__PURE__ */ E(() => [c(l).ref]);
            ut(N, {
              get items() {
                return b.current;
              },
              style: "width: 100%",
              defaultValue: ["ref"],
              get value() {
                return c(K);
              },
              expandAll: !0,
              onSelect: f
            });
          }
        };
        se(
          C,
          (N) => {
            c(l).refType !== "input" && N(P);
          },
          !0
        );
      }
      V(S, T);
    };
    se(D, (S) => {
      c(l).refType === "fixed" ? S(j) : S(H, !1);
    });
  }
  Z(L);
  var A = O(L, 2), z = R(A);
  return Lt(
    tr(z, {
      placement: "bottom",
      floating: (S) => {
        var T = Gw(), C = R(T), P = O(R(C));
        {
          let I = /* @__PURE__ */ E(() => c(l).contentType ? [c(l).contentType] : []);
          ut(P, {
            get items() {
              return fa;
            },
            style: "width: 100%",
            defaultValue: ["text"],
            get value() {
              return c(I);
            },
            onSelect: y
          });
        }
        Z(C);
        var N = O(C, 2), K = O(R(N));
        {
          let I = /* @__PURE__ */ E(() => c(l).formType ? [c(l).formType] : []);
          ut(K, {
            get items() {
              return Xm;
            },
            style: "width: 100%",
            defaultValue: ["single"],
            get value() {
              return c(I);
            },
            onSelect: h
          });
        }
        Z(N);
        var Y = O(N, 2), F = O(R(Y));
        Ie(F, {
          rows: 1,
          style: "width: 100%;",
          onchange: (I) => {
            p("formLabel", I);
          },
          get value() {
            return c(l).formLabel;
          }
        }), Z(Y);
        var M = O(Y, 2), W = O(R(M));
        Ie(W, {
          rows: 2,
          style: "width: 100%;",
          onchange: (I) => {
            p("formDescription", I);
          },
          get value() {
            return c(l).formDescription;
          }
        }), Z(M);
        var B = O(M, 2), G = R(B);
        Le(G, {
          onclick: m,
          children: (I, X) => {
            me();
            var J = _e("删除");
            V(I, J);
          },
          $$slots: { default: !0 }
        }), Z(B), Z(T), V(S, T);
      },
      children: (S, T) => {
        Mo(S, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (S) => w = S,
    () => w
  ), Z(A), V(e, _), ce($);
}
ae(
  rf,
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
var Qw = /* @__PURE__ */ Q('<div class="input-header svelte-1fllp9b">参数名称</div> <div class="input-header svelte-1fllp9b">参数值</div> <div class="input-header svelte-1fllp9b"></div>', 1), eb = /* @__PURE__ */ Q('<div class="none-params svelte-1fllp9b"> </div>'), tb = /* @__PURE__ */ Q('<div class="input-container svelte-1fllp9b"><!> <!></div>');
const nb = {
  hash: "svelte-1fllp9b",
  code: `.input-container.svelte-1fllp9b {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1fllp9b .none-params:where(.svelte-1fllp9b) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1fllp9b .input-header:where(.svelte-1fllp9b) {font-size:12px;color:#666;}`
};
function of(e, t) {
  ue(t, !0), He(e, nb);
  const n = v(t, "noneParameterText", 7, "无确认数据"), r = v(t, "dataKeyName", 7, "parameters"), o = v(t, "useChildrenOnly", 7);
  let i = Fe(), s = On(i), a = /* @__PURE__ */ E(() => [...s?.current?.data?.[r()] || []]);
  var l = {
    get noneParameterText() {
      return n();
    },
    set noneParameterText(h = "无确认数据") {
      n(h), g();
    },
    get dataKeyName() {
      return r();
    },
    set dataKeyName(h = "parameters") {
      r(h), g();
    },
    get useChildrenOnly() {
      return o();
    },
    set useChildrenOnly(h) {
      o(h), g();
    }
  }, u = tb(), d = R(u);
  {
    var p = (h) => {
      var y = Qw();
      me(4), V(h, y);
    };
    se(d, (h) => {
      c(a).length !== 0 && h(p);
    });
  }
  var f = O(d, 2);
  return yt(
    f,
    19,
    () => c(a),
    (h) => h.id,
    (h, y, w) => {
      rf(h, {
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
        }
      });
    },
    (h) => {
      var y = eb(), w = R(y, !0);
      Z(y), Ce(() => Re(w, n())), V(h, y);
    }
  ), Z(u), V(e, u), ce(l);
}
ae(of, { noneParameterText: {}, dataKeyName: {}, useChildrenOnly: {} }, [], [], !0);
const Ps = (e, t) => {
  if (e === t) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const n = Array.isArray(e), r = Array.isArray(t);
  if (n !== r) return !1;
  if (n && r) {
    if (e.length !== t.length) return !1;
    for (let o = 0; o < e.length; o++)
      if (!Ps(e[o], t[o])) return !1;
    return !0;
  } else {
    const o = Object.keys(e), i = Object.keys(t);
    if (o.length !== i.length) return !1;
    for (const s of o)
      if (!(s in t) || !Ps(e[s], t[s])) return !1;
    return !0;
  }
};
var rb = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), ob = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), ib = /* @__PURE__ */ Q('<div class="heading svelte-8iukvu"><!> <!></div> <!> <!> <div class="setting-title svelte-8iukvu">消息内容</div> <div class="setting-item svelte-8iukvu"><!></div> <div class="heading svelte-8iukvu"><!></div> <!>', 1);
const sb = {
  hash: "svelte-8iukvu",
  code: ".heading.svelte-8iukvu {display:flex;margin-bottom:10px;}.setting-title.svelte-8iukvu {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-8iukvu {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function sf(e, t) {
  ue(t, !0), He(e, sb);
  const n = v(t, "data", 7), r = /* @__PURE__ */ Ze(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Fe(), { addParameter: i } = on(), { updateNodeData: s } = it();
  qe(() => {
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
      Ps(l, n().outputDefs) || s(o, () => ({ outputDefs: l }));
    }
  });
  var a = {
    get data() {
      return n();
    },
    set data(l) {
      n(l), g();
    }
  };
  return Yt(e, Be(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = rb();
        V(l, u);
      },
      children: (l, u) => {
        var d = ib(), p = oe(d), f = R(p);
        Te(f, {
          level: 3,
          children: (k, L) => {
            me();
            var D = _e("确认数据");
            V(k, D);
          },
          $$slots: { default: !0 }
        });
        var h = O(f, 2);
        Le(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "confirms");
          },
          children: (k, L) => {
            var D = ob();
            V(k, D);
          },
          $$slots: { default: !0 }
        }), Z(p);
        var y = O(p, 2);
        of(y, { dataKeyName: "confirms", noneParameterText: "无确认数据" });
        var w = O(y, 2);
        Te(w, {
          level: 3,
          mt: "10px",
          children: (k, L) => {
            me();
            var D = _e("确认消息");
            V(k, D);
          },
          $$slots: { default: !0 }
        });
        var m = O(w, 4), b = R(m);
        {
          let k = /* @__PURE__ */ E(() => n().message || "");
          Ie(b, {
            rows: 5,
            placeholder: "请输入用户需要确认的消息内容",
            style: "width: 100%",
            onchange: (L) => {
              s(o, () => ({ message: L.target.value }));
            },
            get value() {
              return c(k);
            }
          });
        }
        Z(m);
        var $ = O(m, 2), _ = R($);
        Te(_, {
          level: 3,
          mt: "10px",
          children: (k, L) => {
            me();
            var D = _e("输出参数");
            V(k, D);
          },
          $$slots: { default: !0 }
        }), Z($);
        var x = O($, 2);
        Hn(x, { placeholder: "" }), V(l, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ce(a);
}
ae(sf, { data: {} }, [], [], !0);
const ab = {
  startNode: Rd,
  codeNode: Jd,
  confirmNode: sf,
  llmNode: Gd,
  templateNode: Ud,
  httpNode: Qd,
  knowledgeNode: ef,
  searchEngineNode: tf,
  loopNode: nf,
  endNode: Xd
};
var lb = /* @__PURE__ */ Q("<!> ", 1);
function Ns(e, t) {
  ue(t, !0);
  const n = v(t, "icon", 7), r = v(t, "title", 7), o = v(t, "type", 7), i = v(t, "description", 7), s = v(t, "extra", 7), a = (u) => {
    if (!u.dataTransfer)
      return null;
    const d = {
      type: o(),
      data: { title: r(), description: i(), ...s() }
    };
    u.dataTransfer.setData("application/tinyflow", JSON.stringify(d)), u.dataTransfer.effectAllowed = "move";
  };
  var l = {
    get icon() {
      return n();
    },
    set icon(u) {
      n(u), g();
    },
    get title() {
      return r();
    },
    set title(u) {
      r(u), g();
    },
    get type() {
      return o();
    },
    set type(u) {
      o(u), g();
    },
    get description() {
      return i();
    },
    set description(u) {
      i(u), g();
    },
    get extra() {
      return s();
    },
    set extra(u) {
      s(u), g();
    }
  };
  return Le(e, {
    draggable: !0,
    ondragstart: a,
    get "data-node-type"() {
      return o();
    },
    children: (u, d) => {
      var p = lb(), f = oe(p);
      qs(f, n);
      var h = O(f);
      Ce(() => Re(h, ` ${r() ?? ""}`)), V(u, p);
    },
    $$slots: { default: !0 }
  }), ce(l);
}
ae(Ns, { icon: {}, title: {}, type: {}, description: {}, extra: {} }, [], [], !0);
var ub = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), cb = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), db = /* @__PURE__ */ Q('<div><div class="tf-toolbar-container "><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"></div></div></div> <!></div>');
function af(e, t) {
  ue(t, !0);
  let n = /* @__PURE__ */ Ee("base"), r = /* @__PURE__ */ Ee("show");
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
  ], s = [], a = Gn(), l = a.customNodes;
  if (l) {
    const b = Object.keys(l).sort(($, _) => (l[$].sortNo || 0) - (l[_].sortNo || 0));
    for (let $ of b)
      l[$].group === "base" ? o.push({ type: $, ...l[$] }) : s.push({
        icon: l[$].icon,
        title: l[$].title,
        type: $
      });
    o.sort(($, _) => ($.sortNo || 0) - (_.sortNo || 0));
  }
  if (a.hiddenNodes) {
    const b = typeof a.hiddenNodes == "function" ? a.hiddenNodes() : a.hiddenNodes;
    if (Array.isArray(b)) {
      for (let $ of b)
        for (let _ = 0; _ < o.length; _++)
          if (o[_].type === $) {
            o.splice(_, 1);
            break;
          }
    }
  }
  var u = db(), d = R(u), p = R(d), f = R(p);
  Ed(f, {
    style: "width: 100%",
    get items() {
      return i;
    },
    onChange: (b) => {
      U(n, b.value.toString(), !0);
    }
  }), Z(p);
  var h = O(p, 2), y = R(h);
  yt(y, 21, () => o, Lr, (b, $) => {
    Ns(b, Be(() => c($)));
  }), Z(y);
  var w = O(y, 2);
  yt(w, 21, () => s, Lr, (b, $) => {
    Ns(b, Be(() => c($)));
  }), Z(w), Z(h), Z(d);
  var m = O(d, 2);
  Le(m, {
    onclick: () => {
      U(r, c(r) ? "" : "show", !0);
    },
    children: (b, $) => {
      var _ = ke(), x = oe(_);
      {
        var k = (D) => {
          var j = ub();
          V(D, j);
        }, L = (D) => {
          var j = cb();
          V(D, j);
        };
        se(x, (D) => {
          c(r) === "show" ? D(k) : D(L, !1);
        });
      }
      V(b, _);
    },
    $$slots: { default: !0 }
  }), Z(u), Ce(() => {
    Nt(u, 1, `tf-toolbar ${c(r) ?? ""}`), dt(y, `display: ${c(n) === "base" ? "flex" : "none"}`), dt(w, `display: ${c(n) !== "base" ? "flex" : "none"}`);
  }), V(e, u), ce();
}
ae(af, {}, [], [], !0);
const fb = () => ({ getNode: (e) => Ve.getNode(e) }), pb = () => ({ ensureParentInNodesBefore: (e, t) => {
  Ve.updateNodes((n) => {
    let r = -1;
    for (let s = 0; s < n.length; s++)
      if (n[s].id === e) {
        r = s;
        break;
      }
    if (r <= 0)
      return n;
    let o = -1;
    for (let s = 0; s < r; s++)
      if (n[s].parentId === e || n[s].id === t) {
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
} }), hb = () => ({ getEdgesByTarget: (e) => Ve.getEdges().filter((t) => t.target === e) });
var gb = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), vb = /* @__PURE__ */ Q('<div class="heading svelte-qt4m0r"><!> <!></div> <!>', 1), mb = /* @__PURE__ */ Q('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), yb = /* @__PURE__ */ Q('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), wb = /* @__PURE__ */ Q('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><div class="slider-container svelte-qt4m0r"><span class="svelte-qt4m0r"> </span> <input/></div></div>', 1), bb = /* @__PURE__ */ Q('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), xb = /* @__PURE__ */ Q('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), $b = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Cb = /* @__PURE__ */ Q('<div class="heading svelte-qt4m0r"><!> <!></div> <!>', 1), _b = /* @__PURE__ */ Q("<!> <!> <div></div> <!>", 1);
const kb = {
  hash: "svelte-qt4m0r",
  code: `.heading.svelte-qt4m0r {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-qt4m0r {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-qt4m0r {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-qt4m0r {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-qt4m0r span:where(.svelte-qt4m0r) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-qt4m0r {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-qt4m0r::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function lf(e, t) {
  ue(t, !0), He(e, kb);
  const n = v(t, "data", 7), r = /* @__PURE__ */ Ze(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Fe(), { addParameter: i } = on(), s = it(), { updateNodeData: a } = s, l = (m) => {
    a(o, m);
  }, u = (m, b) => {
    l({ [m]: b.target?.value });
  }, d = { ...r, id: o, data: n() }, p = document.createElement("div"), f = Gn().customNodes[t.type];
  f.render?.(p, d, s);
  const h = f.forms;
  let y;
  qe(() => {
    n().expand && y && y.append(p);
  }), qe(() => {
    n() && f.onUpdate?.(p, { ...d, data: n() });
  }), qe(() => {
    !n().parameters && f.parameters && l({
      parameters: ho(JSON.parse(JSON.stringify(f.parameters)))
    });
  }), qe(() => {
    !n().outputDefs && f.outputDefs && l({
      outputDefs: ho(JSON.parse(JSON.stringify(f.outputDefs)))
    });
  });
  var w = {
    get data() {
      return n();
    },
    set data(m) {
      n(m), g();
    }
  };
  {
    const m = ($) => {
      var _ = ke(), x = oe(_);
      qs(x, () => f.icon), V($, _);
    };
    let b = /* @__PURE__ */ E(() => ({ ...n(), description: f.description }));
    Yt(e, Be(
      {
        get data() {
          return c(b);
        }
      },
      () => r,
      {
        icon: m,
        children: ($, _) => {
          var x = _b(), k = oe(x);
          {
            var L = (S) => {
              var T = vb(), C = oe(T), P = R(C);
              Te(P, {
                level: 3,
                children: (F, M) => {
                  me();
                  var W = _e("输入参数");
                  V(F, W);
                },
                $$slots: { default: !0 }
              });
              var N = O(P, 2);
              {
                var K = (F) => {
                  Le(F, {
                    class: "input-btn-more",
                    style: "margin-left: auto",
                    onclick: () => {
                      i(o);
                    },
                    children: (M, W) => {
                      var B = gb();
                      V(M, B);
                    },
                    $$slots: { default: !0 }
                  });
                };
                se(N, (F) => {
                  f.parametersAddEnable !== !1 && F(K);
                });
              }
              Z(C);
              var Y = O(C, 2);
              $t(Y, {}), V(S, T);
            };
            se(k, (S) => {
              f.parametersEnable !== !1 && S(L);
            });
          }
          var D = O(k, 2);
          {
            var j = (S) => {
              var T = ke(), C = oe(T);
              yt(C, 17, () => h, Lr, (P, N) => {
                var K = ke(), Y = oe(K);
                {
                  var F = (W) => {
                    var B = mb(), G = oe(B), I = R(G, !0);
                    Z(G);
                    var X = O(G, 2), J = R(X);
                    {
                      let te = /* @__PURE__ */ E(() => n()[c(N).name] || c(N).defaultValue);
                      Je(J, Be(
                        {
                          get placeholder() {
                            return c(N).placeholder;
                          },
                          style: "width: 100%",
                          get value() {
                            return c(te);
                          }
                        },
                        () => c(N).attrs,
                        {
                          onchange: (ne) => {
                            u(c(N).name, ne);
                          }
                        }
                      ));
                    }
                    Z(X), Ce(() => Re(I, c(N).label)), V(W, B);
                  }, M = (W) => {
                    var B = ke(), G = oe(B);
                    {
                      var I = (J) => {
                        var te = yb(), ne = oe(te), ee = R(ne, !0);
                        Z(ne);
                        var he = O(ne, 2), de = R(he);
                        {
                          let re = /* @__PURE__ */ E(() => n()[c(N).name] || c(N).defaultValue);
                          Ie(de, Be(
                            {
                              rows: 3,
                              get placeholder() {
                                return c(N).placeholder;
                              },
                              style: "width: 100%",
                              get value() {
                                return c(re);
                              }
                            },
                            () => c(N).attrs,
                            {
                              onchange: (ie) => {
                                u(c(N).name, ie);
                              }
                            }
                          ));
                        }
                        Z(he), Ce(() => Re(ee, c(N).label)), V(J, te);
                      }, X = (J) => {
                        var te = ke(), ne = oe(te);
                        {
                          var ee = (de) => {
                            var re = wb(), ie = oe(re), pe = R(ie, !0);
                            Z(ie);
                            var ge = O(ie, 2), we = R(ge), le = R(we), be = R(le);
                            Z(le);
                            var De = O(le, 2), q = (je) => l({ [c(N).name]: parseFloat(je.target.value) });
                            nt(
                              De,
                              () => ({
                                class: "nodrag",
                                type: "range",
                                ...c(N).attrs,
                                value: n()[c(N).name] ?? c(N).defaultValue,
                                oninput: q
                              }),
                              void 0,
                              void 0,
                              void 0,
                              "svelte-qt4m0r",
                              !0
                            ), Z(we), Z(ge), Ce(() => {
                              Re(pe, c(N).label), Re(be, `${c(N).description ?? ""}: ${n()[c(N).name] ?? c(N).defaultValue ?? ""}`);
                            }), V(de, re);
                          }, he = (de) => {
                            var re = ke(), ie = oe(re);
                            {
                              var pe = (we) => {
                                var le = bb(), be = oe(le), De = R(be, !0);
                                Z(be);
                                var q = O(be, 2), je = R(q);
                                {
                                  let Oe = /* @__PURE__ */ E(() => c(N).options || []), Ae = /* @__PURE__ */ E(() => n()[c(N).name] ? [n()[c(N).name]] : [c(N).defaultValue]);
                                  ut(je, {
                                    get items() {
                                      return c(Oe);
                                    },
                                    style: "width: 100%",
                                    get placeholder() {
                                      return c(N).placeholder;
                                    },
                                    onSelect: (Ke) => {
                                      const Ge = Ke.value;
                                      l({ [c(N).name]: Ge });
                                    },
                                    get value() {
                                      return c(Ae);
                                    }
                                  });
                                }
                                Z(q), Ce(() => Re(De, c(N).label)), V(we, le);
                              }, ge = (we) => {
                                var le = ke(), be = oe(le);
                                {
                                  var De = (je) => {
                                    var Oe = xb(), Ae = oe(Oe), Ke = R(Ae, !0);
                                    Z(Ae);
                                    var Ge = O(Ae, 2), wt = R(Ge);
                                    {
                                      let sn = /* @__PURE__ */ E(() => c(N).chosen?.buttonText);
                                      Sd(wt, {
                                        style: "width: 100%",
                                        get placeholder() {
                                          return c(N).placeholder;
                                        },
                                        get buttonText() {
                                          return c(sn);
                                        },
                                        onChosen: (rt, fe, Se) => {
                                          c(N).chosen?.onChosen?.(l, rt, fe, Se);
                                        },
                                        get value() {
                                          return n()[c(N).chosen?.valueDataKey || ""];
                                        },
                                        get label() {
                                          return n()[c(N).chosen?.labelDataKey || ""];
                                        }
                                      });
                                    }
                                    Z(Ge), Ce(() => Re(Ke, c(N).label)), V(je, Oe);
                                  }, q = (je) => {
                                    var Oe = ke(), Ae = oe(Oe);
                                    {
                                      var Ke = (Ge) => {
                                        Te(Ge, Be({ level: 3, mt: "10px" }, () => c(N).attrs, {
                                          children: (wt, sn) => {
                                            me();
                                            var rt = _e();
                                            Ce(() => Re(rt, c(N).label)), V(wt, rt);
                                          },
                                          $$slots: { default: !0 }
                                        }));
                                      };
                                      se(
                                        Ae,
                                        (Ge) => {
                                          c(N).type === "heading" && Ge(Ke);
                                        },
                                        !0
                                      );
                                    }
                                    V(je, Oe);
                                  };
                                  se(
                                    be,
                                    (je) => {
                                      c(N).type === "chosen" ? je(De) : je(q, !1);
                                    },
                                    !0
                                  );
                                }
                                V(we, le);
                              };
                              se(
                                ie,
                                (we) => {
                                  c(N).type === "select" ? we(pe) : we(ge, !1);
                                },
                                !0
                              );
                            }
                            V(de, re);
                          };
                          se(
                            ne,
                            (de) => {
                              c(N).type === "slider" ? de(ee) : de(he, !1);
                            },
                            !0
                          );
                        }
                        V(J, te);
                      };
                      se(
                        G,
                        (J) => {
                          c(N).type === "textarea" ? J(I) : J(X, !1);
                        },
                        !0
                      );
                    }
                    V(W, B);
                  };
                  se(Y, (W) => {
                    c(N).type === "input" ? W(F) : W(M, !1);
                  });
                }
                V(P, K);
              }), V(S, T);
            };
            se(D, (S) => {
              h && S(j);
            });
          }
          var H = O(D, 2);
          Lt(H, (S) => y = S, () => y);
          var A = O(H, 2);
          {
            var z = (S) => {
              var T = Cb(), C = oe(T), P = R(C);
              Te(P, {
                level: 3,
                mt: "10px",
                children: (F, M) => {
                  me();
                  var W = _e("输出参数");
                  V(F, W);
                },
                $$slots: { default: !0 }
              });
              var N = O(P, 2);
              {
                var K = (F) => {
                  Le(F, {
                    class: "input-btn-more",
                    style: "margin-left: auto",
                    onclick: () => {
                      i(o, "outputDefs");
                    },
                    children: (M, W) => {
                      var B = $b();
                      V(M, B);
                    },
                    $$slots: { default: !0 }
                  });
                };
                se(N, (F) => {
                  f.outputDefsAddEnable !== !1 && F(K);
                });
              }
              Z(C);
              var Y = O(C, 2);
              Hn(Y, {}), V(S, T);
            };
            se(A, (S) => {
              f.outputDefsEnable !== !1 && S(z);
            });
          }
          Ce(() => {
            dt(H, f.rootStyle || ""), Nt(H, 1, Dn(f.rootClass), "svelte-qt4m0r");
          }), V($, x);
        },
        $$slots: { icon: !0, default: !0 }
      }
    ));
  }
  return ce(w);
}
ae(lf, { data: {} }, [], [], !0);
const Sb = () => ({ updateEdgeData: (e, t, n) => {
  const r = Ve.getEdge(e);
  if (!r)
    return;
  const o = typeof t == "function" ? t(r) : t;
  r.data = n?.replace ? o : { ...r.data, ...o }, Ve.updateEdges((i) => i.map((s) => s.id === e ? r : s));
} }), Eb = () => ({ deleteEdge: (e) => {
  Ve.removeEdge(e);
} }), Pb = () => {
  const e = (t, n) => n.filter(
    // 排除循环节点的子节点，否则在多层循环嵌套时不正确
    (r) => r.source === t && r.sourceHandle !== "loop_handle"
  );
  return { getNodesFromSource: (t) => {
    const n = Ve.getEdges(), r = [];
    let o = e(t, n);
    for (; o.length > 0; ) {
      const i = [];
      o.forEach((s) => {
        r.push(Ve.getNode(s.target)), i.push(...e(s.target, n));
      }), o = i;
    }
    return r;
  } };
}, Nb = () => ({ getNodeRelativePosition: (e) => {
  let t = Ve.getNode(e);
  const n = { x: 0, y: 0 };
  for (; t; )
    n.x += t.position.x, n.y += t.position.y, t.parentId ? t = Ve.getNode(t.parentId) : t = void 0;
  return n;
} });
function Lb(e) {
  const { id: t, type: n, position: r, data: o, parentId: i } = e;
  return {
    id: t,
    type: n,
    position: { x: r.x, y: r.y },
    parentId: i || void 0,
    data: o ? JSON.parse(JSON.stringify(o)) : {},
    ...i !== void 0 && { parentId: i }
  };
}
function Tb(e) {
  const t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  for (const a of e)
    t.set(a.id, a), n.set(a.id, 0), a.parentId && (n.set(a.id, 1), r.has(a.parentId) || r.set(a.parentId, []), r.get(a.parentId).push(a.id));
  const o = [];
  for (const a of e)
    (!a.parentId || !t.has(a.parentId)) && o.push(a);
  const i = [], s = /* @__PURE__ */ new Set();
  for (; o.length > 0; ) {
    const a = o.shift();
    if (s.has(a.id)) continue;
    s.add(a.id), i.push(a);
    const l = r.get(a.id) || [];
    for (const u of l)
      s.has(u) || o.push(t.get(u));
  }
  for (const a of e)
    s.has(a.id) || i.push(a);
  return i;
}
function Vb(e) {
  const { id: t, source: n, target: r, sourceHandle: o, targetHandle: i, type: s, data: a } = e;
  return {
    id: t,
    source: n,
    target: r,
    ...o !== void 0 && { sourceHandle: o },
    ...i !== void 0 && { targetHandle: i },
    ...s !== void 0 && { type: s },
    data: a ? JSON.parse(JSON.stringify(a)) : {}
  };
}
function Ls(e, t) {
  if (e == null)
    return e;
  if (Array.isArray(e))
    return e.map((n) => Ls(n, t));
  if (typeof e == "object") {
    if (e.refType === "ref" && typeof e.ref == "string") {
      const r = e.ref.match(/^([^.\s]+)\.(.+)$/);
      if (r) {
        const [o, i, s] = r, a = t.get(i);
        if (a !== void 0)
          return { ...e, ref: `${a}.${s}` };
      }
    }
    const n = {};
    for (const r in e)
      Object.hasOwn(e, r) && (n[r] = Ls(e[r], t));
    return n;
  }
  return e;
}
const Mb = () => (it(), { copyHandler: async (e) => {
  const t = Ve.getNodes().filter((s) => s.selected);
  if (t.length === 0) return;
  const n = Ve.getEdges().filter((s) => t.some((a) => a.id === s.source) && t.some((a) => a.id === s.target)), r = t.map(Lb), o = n.map(Vb), i = JSON.stringify({
    tinyflowNodes: r,
    tinyflowEdges: o,
    version: "1.0"
  }, null, 0);
  try {
    "clipboardData" in e && e.clipboardData ? (e.clipboardData.setData("text/plain", i), e instanceof ClipboardEvent && e.preventDefault()) : await navigator.clipboard.writeText(i), console.log("Copied nodes and edges to clipboard");
  } catch (s) {
    console.error("Failed to copy:", s);
    try {
      sessionStorage.setItem("tinyflow_clipboard", i);
    } catch {
    }
  }
}, pasteHandler: (e) => {
  const t = e.clipboardData?.getData("text/plain");
  if (!t) return;
  let n = null;
  try {
    n = JSON.parse(t);
  } catch {
    return;
  }
  if (!n?.tinyflowNodes || !Array.isArray(n.tinyflowNodes))
    return;
  e.preventDefault();
  const r = Tb(n.tinyflowNodes), o = n.tinyflowEdges || [], i = /* @__PURE__ */ new Map(), s = [];
  for (const l of r) {
    const u = `node_${Nn()}`;
    i.set(l.id, u);
  }
  for (const l of r) {
    const u = i.get(l.id), d = l.parentId !== void 0 ? i.get(l.parentId) : void 0, p = Ls(l.data, i);
    s.push({
      ...l,
      id: u,
      parentId: d,
      data: p,
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
      id: `edge_${Nn()}`,
      source: u,
      target: d
    });
  }
  Ve.updateNodes((l) => [...l.map((u) => ({ ...u, selected: !1 })), ...s]), Ve.updateEdges((l) => [...l.map((u) => ({ ...u, selected: !1 })), ...a]);
} }), Pl = () => {
  const e = document.activeElement;
  return !e || !(e instanceof HTMLElement) ? !1 : e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement || e.isContentEditable;
};
var Db = /* @__PURE__ */ Q('<div class="panel-content svelte-woejl3"><div>边属性设置</div> <div class="setting-title svelte-woejl3">边条件设置</div> <div class="setting-item svelte-woejl3"><!></div> <div class="setting-item svelte-woejl3" style="padding: 8px 0"><!> <!></div></div>'), Ob = /* @__PURE__ */ Q("<!> <!> <!> <!>", 1), zb = /* @__PURE__ */ Q('<div style="position: relative; height: 100%; width: 100%;overflow: hidden"><!> <!></div>');
const Hb = {
  hash: "svelte-woejl3",
  code: ".panel-content.svelte-woejl3 {padding:10px;background-color:#fff;border-radius:5px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);width:200px;border:1px solid #efefef;}.setting-title.svelte-woejl3 {margin:10px 0;font-size:12px;color:#999;}.setting-item.svelte-woejl3 {display:flex;gap:5px;align-items:center;justify-content:end;}"
};
function uf(e, t) {
  ue(t, !0), He(e, Hb);
  const n = v(t, "onInit", 7), r = /* @__PURE__ */ Ze(t, ["$$slots", "$$events", "$$legacy", "$$host", "onInit"]), o = it();
  console.log("props", r), n()(o);
  let i = /* @__PURE__ */ Ee(!1), s = /* @__PURE__ */ Ee(null);
  const { updateEdgeData: a } = Sb(), l = (B) => {
    B.preventDefault(), B.dataTransfer && (B.dataTransfer.dropEffect = "move");
  }, u = (B) => {
    B.preventDefault();
    const G = o.screenToFlowPosition({ x: B.clientX - 250, y: B.clientY - 100 }), I = B.dataTransfer?.getData("application/tinyflow");
    if (!I)
      return;
    const X = JSON.parse(I), J = { id: `node_${Nn()}`, position: G, data: {}, ...X };
    Ve.addNode(J), Ve.selectNodeOnly(J.id);
  }, { getNode: d } = fb(), p = (B) => {
    const G = d(B.source), I = d(B.target);
    if (B.sourceHandle === "loop_handle" || G.parentId) {
      const X = o.getEdges();
      for (let J of X)
        if (J.target === B.target) {
          const te = d(J.source);
          if (B.sourceHandle === "loop_handle" && te.parentId !== G.id || G.parentId && te.parentId !== G.parentId)
            return !1;
        }
    }
    return !(!G.parentId && I.parentId && I.parentId !== G.id);
  }, { getNodesFromSource: f } = Pb(), { getNodeRelativePosition: h } = Nb(), { ensureParentInNodesBefore: y } = pb(), w = (B, G) => {
    if (!G.isValid)
      return;
    const I = G.toNode;
    if (I.parentId)
      return;
    const X = G.fromNode, J = G.fromHandle, te = { position: { ...I.position } };
    if (J.id === "loop_handle" ? te.parentId = X.id : X.parentId && (te.parentId = X.parentId), te.parentId) {
      const { x: ne, y: ee } = h(te.parentId);
      te.position = { x: I.position.x - ne, y: I.position.y - ee }, o.updateNode(I.id, te), f(I.id).forEach((he) => {
        o.updateNode(he.id, {
          parentId: te.parentId,
          position: { x: he.position.x - ne, y: he.position.y - ee }
        });
      }), y(te.parentId, I.id);
    }
    setTimeout(() => {
      Ve.getEdges().forEach((ne) => {
        ne.target === I.id && ne.source == X.id && (U(i, !0), U(s, ne, !0));
      });
    });
  }, { getEdgesByTarget: m } = hb(), b = (B) => {
    B.edges.forEach((G) => {
      G.id === c(s)?.id && (U(s, null), U(i, !1));
      const I = d(G.target);
      if (I && I.parentId) {
        const X = m(G.target), { x: J, y: te } = h(I.parentId);
        if (X.length === 0)
          o.updateNode(I.id, {
            parentId: void 0,
            position: { x: I.position.x + J, y: I.position.y + te }
          }), f(I.id).forEach((ne) => {
            o.updateNode(ne.id, {
              parentId: void 0,
              position: { x: ne.position.x + J, y: ne.position.y + te }
            });
          });
        else {
          let ne = !1;
          for (let ee = 0; ee < X.length; ee++) {
            const he = X[ee], de = d(he.source);
            if (de.parentId || de.type === "loopNode") {
              ne = !0;
              break;
            }
          }
          ne || (o.updateNode(I.id, {
            parentId: void 0,
            position: { x: I.position.x + J, y: I.position.y + te }
          }), f(I.id).forEach((ee) => {
            o.updateNode(ee.id, {
              parentId: void 0,
              position: { x: ee.position.x + J, y: ee.position.y + te }
            });
          }));
        }
      }
    });
  }, { deleteEdge: $ } = Eb(), _ = (B, G) => {
  }, x = (B) => {
  }, { copyHandler: k, pasteHandler: L } = Mb(), D = (B) => {
    Pl() || ((B.ctrlKey || B.metaKey) && B.key === "c" && (B.preventDefault(), k(B)), (B.ctrlKey || B.metaKey) && B.key === "a" && (B.preventDefault(), Ve.updateNodes((G) => G.map((I) => ({ ...I, selected: !0 }))), Ve.updateEdges((G) => G.map((I) => ({ ...I, selected: !0 })))));
  }, j = async (B) => {
    Pl() || L(B);
  };
  Mn(() => {
    window.addEventListener("keydown", D), window.addEventListener("paste", j);
  }), xo(() => {
    window.removeEventListener("keydown", D), window.removeEventListener("paste", j);
  });
  const H = {
    // ...nodeTypes
  }, A = Gn().customNodes;
  if (A)
    for (let B of Object.keys(A))
      H[B] = lf;
  const z = Gn().onDataChange;
  qe(() => {
    z?.({
      nodes: Ve.getNodes(),
      edges: Ve.getEdges(),
      viewport: Ve.getViewport()
    });
  });
  var S = {
    get onInit() {
      return n();
    },
    set onInit(B) {
      n(B), g();
    }
  }, T = zb(), C = R(T), P = Ve.getNodes, N = Ve.setNodes, K = Ve.getEdges, Y = Ve.setEdges, F = Ve.getViewport, M = Ve.setViewport;
  {
    let B = /* @__PURE__ */ E(() => ({ ...ab, ...H })), G = /* @__PURE__ */ E(() => ({
      markerEnd: { type: lo.ArrowClosed, width: 20, height: 20 }
    }));
    dd(C, {
      get nodeTypes() {
        return c(B);
      },
      get nodes() {
        return P();
      },
      set nodes(I) {
        N(I);
      },
      get edges() {
        return K();
      },
      set edges(I) {
        Y(I);
      },
      get viewport() {
        return F();
      },
      set viewport(I) {
        M(I);
      },
      class: "tinyflow-logo",
      ondrop: u,
      ondragover: l,
      isValidConnection: p,
      onconnectend: w,
      onconnectstart: _,
      onconnect: x,
      connectionRadius: 50,
      onedgeclick: (I) => {
        U(i, !0), U(s, I.edge, !0);
      },
      onbeforeconnect: (I) => ({ ...I, id: Nn() }),
      ondelete: b,
      onclick: (I) => {
        const X = I.target;
        X.classList.contains("svelte-flow__edge-interaction") || X.classList.contains("panel-content") || X.closest(".panel-content") || (U(i, !1), U(s, null));
      },
      get defaultEdgeOptions() {
        return c(G);
      },
      children: (I, X) => {
        var J = Ob(), te = oe(J);
        xd(te, {});
        var ne = O(te, 2);
        yd(ne, {});
        var ee = O(ne, 2);
        Cd(ee, {});
        var he = O(ee, 2);
        {
          var de = (re) => {
            No(re, {
              children: (ie, pe) => {
                var ge = Db(), we = O(R(ge), 4), le = R(we);
                {
                  let je = /* @__PURE__ */ E(() => c(s)?.data?.condition);
                  Ie(le, {
                    rows: 3,
                    placeholder: "请输入边条件",
                    style: "width: 100%",
                    get value() {
                      return c(je);
                    },
                    onchange: (Oe) => {
                      c(s) && a(c(s).id, { condition: Oe.target?.value });
                    }
                  });
                }
                Z(we);
                var be = O(we, 2), De = R(be);
                Le(De, {
                  onclick: () => {
                    $(c(s)?.id), U(i, !1);
                  },
                  children: (je, Oe) => {
                    me();
                    var Ae = _e("删除");
                    V(je, Ae);
                  },
                  $$slots: { default: !0 }
                });
                var q = O(De, 2);
                Le(q, {
                  primary: !0,
                  onclick: () => {
                    U(i, !1);
                  },
                  children: (je, Oe) => {
                    me();
                    var Ae = _e("保存");
                    V(je, Ae);
                  },
                  $$slots: { default: !0 }
                }), Z(be), Z(ge), V(ie, ge);
              },
              $$slots: { default: !0 }
            });
          };
          se(he, (re) => {
            c(i) && re(de);
          });
        }
        V(I, J);
      },
      $$slots: { default: !0 }
    });
  }
  var W = O(C, 2);
  return af(W, {}), Z(T), V(e, T), ce(S);
}
ae(uf, { onInit: {} }, [], [], !0);
function Ab(e, t) {
  ue(t, !0);
  const n = v(t, "options", 7), r = v(t, "onInit", 7);
  let { data: o } = n();
  if (typeof o == "string")
    try {
      o = JSON.parse(o.trim());
    } catch {
      console.error("Invalid JSON data:", o);
    }
  Ve.init(o?.nodes || [], o?.edges || []), Pr("tinyflow_options", n());
  var i = {
    get options() {
      return n();
    },
    set options(s) {
      n(s), g();
    },
    get onInit() {
      return r();
    },
    set onInit(s) {
      r(s), g();
    }
  };
  return fd(e, {
    children: (s, a) => {
      uf(s, {
        get onInit() {
          return r();
        }
      });
    },
    $$slots: { default: !0 }
  }), ce(i);
}
customElements.define("tinyflow-component", ae(Ab, { options: {}, onInit: {} }, [], [], !1));
const Zb = /* @__PURE__ */ df({
  __name: "Tinyflow",
  props: {
    className: {},
    style: {},
    data: {},
    provider: {},
    customNodes: {},
    onNodeExecute: { type: Function },
    hiddenNodes: { type: [Array, Function] },
    onDataChange: { type: Function }
  },
  setup(e, { expose: t }) {
    const n = e, r = ff(null);
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
    return pf(() => {
      if (r.value) {
        const l = { ...n };
        "data" in l && l.data != null && (l.data = i(l.data)), o = new Fm({
          ...l,
          element: r.value
        });
      }
    }), hf(() => {
      o && (o.destroy(), o = null);
    }), t({
      getData: () => o ? o.getData() : (console.warn("Tinyflow instance is not initialized"), null),
      getInstance: () => o || (console.warn("Tinyflow instance is not initialized"), null)
    }), (l, u) => (vf(), gf("div", {
      ref_key: "divRef",
      ref: r,
      class: yf(["tinyflow", l.className]),
      style: mf(l.style)
    }, null, 6));
  }
});
export {
  Zb as Tinyflow
};
//# sourceMappingURL=index.js.map
