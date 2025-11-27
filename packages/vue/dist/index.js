import { defineComponent as df, ref as ff, onMounted as pf, onUnmounted as hf, createElementBlock as gf, openBlock as vf, normalizeStyle as mf, normalizeClass as yf } from "vue";
const wf = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(wf);
const Ml = 1, Tl = 2, Ll = 4, bf = 8, xf = 16, Cf = 1, $f = 2, Vl = 4, _f = 8, kf = 16, Dl = 1, Sf = 2, Ol = "[", xi = "[!", Vs = "]", cr = {}, at = Symbol(), Ef = "http://www.w3.org/1999/xhtml", Pf = "http://www.w3.org/2000/svg", Nf = "@attach", Mf = !1;
var Ci = Array.isArray, Tf = Array.prototype.indexOf, Ds = Array.from, Jo = Object.keys, ei = Object.defineProperty, Sn = Object.getOwnPropertyDescriptor, zl = Object.getOwnPropertyDescriptors, Al = Object.prototype, Lf = Array.prototype, $i = Object.getPrototypeOf, wa = Object.isExtensible;
function Wr(e) {
  return typeof e == "function";
}
const vt = () => {
};
function Vf(e) {
  return e();
}
function ss(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Hl() {
  var e, t, n = new Promise((r, o) => {
    e = r, t = o;
  });
  return { promise: n, resolve: e, reject: t };
}
function yt(e, t, n = !1) {
  return e === void 0 ? n ? (
    /** @type {() => V} */
    t()
  ) : (
    /** @type {V} */
    t
  ) : e;
}
function mo(e, t) {
  if (Array.isArray(e))
    return e;
  if (t === void 0 || !(Symbol.iterator in e))
    return Array.from(e);
  const n = [];
  for (const r of e)
    if (n.push(r), n.length === t) break;
  return n;
}
const ct = 2, Os = 4, _i = 8, Il = 1 << 24, Vn = 16, Dn = 32, Qn = 64, ki = 128, Qt = 512, ht = 1024, St = 2048, On = 4096, Ot = 8192, En = 16384, Si = 32768, Nn = 65536, ba = 1 << 17, Zl = 1 << 18, vr = 1 << 19, jl = 1 << 20, to = 32768, as = 1 << 21, zs = 1 << 22, Bn = 1 << 23, fn = Symbol("$state"), As = Symbol("legacy props"), Df = Symbol(""), Cr = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), Of = 1, Ei = 3, mr = 8;
function Hs(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function zf() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Af(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Hf() {
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
function Wf() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Yf() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function yo(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function Ff() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function qf() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let be = !1;
function Dt(e) {
  be = e;
}
let Pe;
function et(e) {
  if (e === null)
    throw yo(), cr;
  return Pe = e;
}
function Mn() {
  return et(
    /** @type {TemplateNode} */
    /* @__PURE__ */ tn(Pe)
  );
}
function Z(e) {
  if (be) {
    if (/* @__PURE__ */ tn(Pe) !== null)
      throw yo(), cr;
    Pe = e;
  }
}
function ve(e = 1) {
  if (be) {
    for (var t = e, n = Pe; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ tn(n);
    Pe = n;
  }
}
function ti(e = !0) {
  for (var t = 0, n = Pe; ; ) {
    if (n.nodeType === mr) {
      var r = (
        /** @type {Comment} */
        n.data
      );
      if (r === Vs) {
        if (t === 0) return n;
        t -= 1;
      } else (r === Ol || r === xi) && (t += 1);
    }
    var o = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ tn(n)
    );
    e && n.remove(), n = o;
  }
}
function Kl(e) {
  if (!e || e.nodeType !== mr)
    throw yo(), cr;
  return (
    /** @type {Comment} */
    e.data
  );
}
function Rl(e) {
  return e === this.v;
}
function Bl(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Wl(e) {
  return !Bl(e, this.v);
}
let jr = !1, Xf = !1;
function Gf() {
  jr = !0;
}
const Uf = [];
function Yl(e, t = !1, n = !1) {
  return Wo(e, /* @__PURE__ */ new Map(), "", Uf, null, n);
}
function Wo(e, t, n, r, o = null, i = !1) {
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
    if (Ci(e)) {
      var a = (
        /** @type {Snapshot<any>} */
        Array(e.length)
      );
      t.set(e, a), o !== null && t.set(o, a);
      for (var l = 0; l < e.length; l += 1) {
        var u = e[l];
        l in e && (a[l] = Wo(u, t, n, r, null, i));
      }
      return a;
    }
    if ($i(e) === Al) {
      a = {}, t.set(e, a), o !== null && t.set(o, a);
      for (var d in e)
        a[d] = Wo(
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
      return Wo(
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
let We = null;
function Nr(e) {
  We = e;
}
function Fn(e) {
  return (
    /** @type {T} */
    Fl().get(e)
  );
}
function Mr(e, t) {
  return Fl().set(e, t), t;
}
function le(e, t = !1, n) {
  We = {
    p: We,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    l: jr && !t ? { s: null, u: null, $: [] } : null
  };
}
function ue(e) {
  var t = (
    /** @type {ComponentContext} */
    We
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      du(r);
  }
  return e !== void 0 && (t.x = e), t.i = !0, We = t.p, e ?? /** @type {T} */
  {};
}
function wo() {
  return !jr || We !== null && We.l === null;
}
function Fl(e) {
  return We === null && Hs(), We.c ??= new Map(Qf(We) || void 0);
}
function Qf(e) {
  let t = e.p;
  for (; t !== null; ) {
    const n = t.c;
    if (n !== null)
      return n;
    t = t.p;
  }
  return null;
}
let or = [];
function ql() {
  var e = or;
  or = [], ss(e);
}
function Jn(e) {
  if (or.length === 0 && !Qr) {
    var t = or;
    queueMicrotask(() => {
      t === or && ql();
    });
  }
  or.push(e);
}
function Jf() {
  for (; or.length > 0; )
    ql();
}
function Xl(e) {
  var t = Ne;
  if (t === null)
    return Ve.f |= Bn, e;
  if ((t.f & Si) === 0) {
    if ((t.f & ki) === 0)
      throw e;
    t.b.error(e);
  } else
    Tr(e, t);
}
function Tr(e, t) {
  for (; t !== null; ) {
    if ((t.f & ki) !== 0)
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
const zo = /* @__PURE__ */ new Set();
let Fe = null, jt = null, Zt = [], Pi = null, ls = !1, Qr = !1;
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
    Zt = [], this.apply();
    var n = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: [],
      block_effects: []
    };
    for (const r of t)
      this.#i(r, n);
    this.is_fork || this.#c(), this.is_deferred() ? (this.#s(n.effects), this.#s(n.render_effects), this.#s(n.block_effects)) : (Fe = null, xa(n.render_effects), xa(n.effects), this.#l?.resolve()), jt = null;
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   * @param {EffectTarget} target
   */
  #i(t, n) {
    t.f ^= ht;
    for (var r = t.first; r !== null; ) {
      var o = r.f, i = (o & (Dn | Qn)) !== 0, s = i && (o & ht) !== 0, a = s || (o & Ot) !== 0 || this.skipped_effects.has(r);
      if ((r.f & ki) !== 0 && r.b?.is_pending() && (n = {
        parent: n,
        effect: r,
        effects: [],
        render_effects: [],
        block_effects: []
      }), !a && r.fn !== null) {
        i ? r.f ^= ht : (o & Os) !== 0 ? n.effects.push(r) : Co(r) && ((r.f & Vn) !== 0 && n.block_effects.push(r), oo(r));
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
      ((n.f & St) !== 0 ? this.#a : this.#o).push(n), this.#u(n.deps), gt(n, ht);
  }
  /**
   * @param {Value[] | null} deps
   */
  #u(t) {
    if (t !== null)
      for (const n of t)
        (n.f & ct) === 0 || (n.f & to) === 0 || (n.f ^= to, this.#u(
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
    this.previous.has(t) || this.previous.set(t, n), (t.f & Bn) === 0 && (this.current.set(t, t.v), jt?.set(t, t.v));
  }
  activate() {
    Fe = this, this.apply();
  }
  deactivate() {
    Fe === this && (Fe = null, jt = null);
  }
  flush() {
    if (this.activate(), Zt.length > 0) {
      if (Gl(), Fe !== null && Fe !== this)
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
    if (zo.size > 1) {
      this.previous.clear();
      var t = jt, n = !0, r = {
        parent: null,
        effect: null,
        effects: [],
        render_effects: [],
        block_effects: []
      };
      for (const i of zo) {
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
          var o = Zt;
          Zt = [];
          const l = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map();
          for (const d of s)
            Ul(d, a, l, u);
          if (Zt.length > 0) {
            Fe = i, i.apply();
            for (const d of Zt)
              i.#i(d, r);
            i.deactivate();
          }
          Zt = o;
        }
      }
      Fe = null, jt = t;
    }
    this.committed = !0, zo.delete(this);
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
      gt(t, St), dr(t);
    for (const t of this.#o)
      gt(t, On), dr(t);
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
    if (Fe === null) {
      const t = Fe = new Gt();
      zo.add(Fe), Qr || Gt.enqueue(() => {
        Fe === t && t.flush();
      });
    }
    return Fe;
  }
  /** @param {() => void} task */
  static enqueue(t) {
    Jn(t);
  }
  apply() {
  }
}
function g(e) {
  var t = Qr;
  Qr = !0;
  try {
    for (var n; ; ) {
      if (Jf(), Zt.length === 0 && (Fe?.flush(), Zt.length === 0))
        return Pi = null, /** @type {T} */
        n;
      Gl();
    }
  } finally {
    Qr = t;
  }
}
function Gl() {
  var e = Yn;
  ls = !0;
  try {
    var t = 0;
    for (ri(!0); Zt.length > 0; ) {
      var n = Gt.ensure();
      if (t++ > 1e3) {
        var r, o;
        ep();
      }
      n.process(Zt), Wn.clear();
    }
  } finally {
    ls = !1, ri(e), Pi = null;
  }
}
function ep() {
  try {
    Zf();
  } catch (e) {
    Tr(e, Pi);
  }
}
let bn = null;
function xa(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if ((r.f & (En | Ot)) === 0 && Co(r) && (bn = /* @__PURE__ */ new Set(), oo(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? mu(r) : r.fn = null), bn?.size > 0)) {
        Wn.clear();
        for (const o of bn) {
          if ((o.f & (En | Ot)) !== 0) continue;
          const i = [o];
          let s = o.parent;
          for (; s !== null; )
            bn.has(s) && (bn.delete(s), i.push(s)), s = s.parent;
          for (let a = i.length - 1; a >= 0; a--) {
            const l = i[a];
            (l.f & (En | Ot)) === 0 && oo(l);
          }
        }
        bn.clear();
      }
    }
    bn = null;
  }
}
function Ul(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const o of e.reactions) {
      const i = o.f;
      (i & ct) !== 0 ? Ul(
        /** @type {Derived} */
        o,
        t,
        n,
        r
      ) : (i & (zs | Vn)) !== 0 && (i & St) === 0 && Ql(o, t, r) && (gt(o, St), dr(
        /** @type {Effect} */
        o
      ));
    }
}
function Ql(e, t, n) {
  const r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null)
    for (const o of e.deps) {
      if (t.includes(o))
        return !0;
      if ((o.f & ct) !== 0 && Ql(
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
function dr(e) {
  for (var t = Pi = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (ls && t === Ne && (n & Vn) !== 0 && (n & Zl) === 0)
      return;
    if ((n & (Qn | Dn)) !== 0) {
      if ((n & ht) === 0) return;
      t.f ^= ht;
    }
  }
  Zt.push(t);
}
function Jl(e) {
  let t = 0, n = qn(0), r;
  return () => {
    no() && (c(n), xo(() => (t === 0 && (r = lt(() => e(() => Jr(n)))), t += 1, () => {
      Jn(() => {
        t -= 1, t === 0 && (r?.(), r = void 0, Jr(n));
      });
    })));
  };
}
var tp = Nn | vr | ki;
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
  #n = be ? Pe : null;
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
  #w = Jl(() => (this.#p = qn(this.#d), () => {
    this.#p = null;
  }));
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(t, n, r) {
    this.#t = t, this.#r = n, this.#l = r, this.parent = /** @type {Effect} */
    Ne.b, this.#e = !!this.#r.pending, this.#a = Rr(() => {
      if (Ne.b = this, be) {
        const i = this.#n;
        Mn(), /** @type {Comment} */
        i.nodeType === mr && /** @type {Comment} */
        i.data === xi ? this.#x() : this.#b();
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
    }, tp), be && (this.#t = Pe);
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
      this.#o = this.#g(() => (Gt.ensure(), Vt(() => this.#l(n)))), this.#f > 0 ? this.#v() : (_r(
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
    return this.#e && (this.#c = Et(), this.#t.before(this.#c), t = this.#c), t;
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
    var n = Ne, r = Ve, o = We;
    Bt(this.#a), $t(this.#a), Nr(this.#a.ctx);
    try {
      return t();
    } catch (i) {
      return Xl(i), null;
    } finally {
      Bt(n), $t(r), Nr(o);
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
    ), bu(this.#o, this.#u)), this.#i === null && (this.#i = Vt(() => t(this.#t)));
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
    this.#f += t, this.#f === 0 && (this.#e = !1, this.#i && _r(this.#i, () => {
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
    this.#y(t), this.#d += t, this.#p && Vr(this.#p, this.#d);
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
    this.#o && (it(this.#o), this.#o = null), this.#i && (it(this.#i), this.#i = null), this.#s && (it(this.#s), this.#s = null), be && (et(
      /** @type {TemplateNode} */
      this.#n
    ), ve(), et(ti()));
    var o = !1, i = !1;
    const s = () => {
      if (o) {
        qf();
        return;
      }
      o = !0, i && Yf(), Gt.ensure(), this.#d = 0, this.#s !== null && _r(this.#s, () => {
        this.#s = null;
      }), this.#e = this.has_pending_snippet(), this.#o = this.#g(() => (this.#h = !1, Vt(() => this.#l(this.#t)))), this.#f > 0 ? this.#v() : this.#e = !1;
    };
    var a = Ve;
    try {
      $t(null), i = !0, n?.(t, s), i = !1;
    } catch (l) {
      Tr(l, this.#a && this.#a.parent);
    } finally {
      $t(a);
    }
    r && Jn(() => {
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
          return Tr(
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
    Bs(t[i].e, r, !0);
  yu(r, () => {
    var s = r.length === 0 && n !== null;
    if (s) {
      var a = (
        /** @type {Element} */
        n
      ), l = (
        /** @type {Element} */
        a.parentNode
      );
      js(l), l.append(a), e.items.clear(), Ft(e, t[0].prev, t[o - 1].next);
    }
    for (var u = 0; u < o; u++) {
      var d = t[u];
      s || (e.items.delete(d.k), Ft(e, d.prev, d.next)), it(d.e, !s);
    }
    e.first === t[0] && (e.first = t[0].prev);
  });
}
function mt(e, t, n, r, o, i = null) {
  var s = e, a = /* @__PURE__ */ new Map(), l = null, u = (t & Ll) !== 0, d = (t & Ml) !== 0, p = (t & Tl) !== 0;
  if (u) {
    var f = (
      /** @type {Element} */
      e
    );
    s = be ? et(
      /** @type {Comment | Text} */
      /* @__PURE__ */ rt(f)
    ) : f.appendChild(Et());
  }
  be && Mn();
  var h = null, y = /* @__PURE__ */ Is(() => {
    var x = n();
    return Ci(x) ? x : x == null ? [] : Ds(x);
  }), w, m = !0;
  function b() {
    ip(_, w, s, t, r), h !== null && (w.length === 0 ? (h.fragment ? (s.before(h.fragment), h.fragment = null) : Ws(h.effect), $.first = h.effect) : _r(h.effect, () => {
      h = null;
    }));
  }
  var $ = Rr(() => {
    w = /** @type {V[]} */
    c(y);
    var x = w.length;
    let k = !1;
    if (be) {
      var N = Kl(s) === xi;
      N !== (x === 0) && (s = ti(), et(s), Dt(!1), k = !0);
    }
    for (var V = /* @__PURE__ */ new Set(), j = (
      /** @type {Batch} */
      Fe
    ), A = null, H = uu(), z = 0; z < x; z += 1) {
      be && Pe.nodeType === mr && /** @type {Comment} */
      Pe.data === Vs && (s = /** @type {Comment} */
      Pe, k = !0, Dt(!1));
      var S = w[z], T = r(S, z), C = m ? null : a.get(T);
      C ? (d && Vr(C.v, S), p ? Vr(
        /** @type {Value<number>} */
        C.i,
        z
      ) : C.i = z, H && j.skipped_effects.delete(C.e)) : (C = sp(
        m ? s : null,
        A,
        S,
        T,
        z,
        o,
        t,
        n
      ), m && (C.o = !0, A === null ? l = C : A.next = C, A = C), a.set(T, C)), V.add(T);
    }
    if (x === 0 && i && !h)
      if (m)
        h = {
          fragment: null,
          effect: Vt(() => i(s))
        };
      else {
        var P = document.createDocumentFragment(), M = Et();
        P.append(M), h = {
          fragment: P,
          effect: Vt(() => i(M))
        };
      }
    if (be && x > 0 && et(ti()), !m)
      if (H) {
        for (const [K, B] of a)
          V.has(K) || j.skipped_effects.add(B.e);
        j.oncommit(b), j.ondiscard(() => {
        });
      } else
        b();
    k && Dt(!0), c(y);
  }), _ = { effect: $, items: a, first: l };
  m = !1, be && (s = Pe);
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
      Ft(e, d, m), Ft(e, m, $), Wi(m, $, n), d = m, f = [], h = [], l = d.next;
      continue;
    }
    if ((m.e.f & Ot) !== 0 && (Ws(m.e), i && (m.a?.unfix(), (p ??= /* @__PURE__ */ new Set()).delete(m))), m !== l) {
      if (u !== void 0 && u.has(m)) {
        if (f.length < h.length) {
          var _ = h[0], x;
          d = _.prev;
          var k = f[0], N = f[f.length - 1];
          for (x = 0; x < f.length; x += 1)
            Wi(f[x], _, n);
          for (x = 0; x < h.length; x += 1)
            u.delete(h[x]);
          Ft(e, k.prev, N.next), Ft(e, d, k), Ft(e, N, _), l = _, d = N, b -= 1, f = [], h = [];
        } else
          u.delete(m), Wi(m, l, n), Ft(e, m.prev, m.next), Ft(e, m, d === null ? e.first : d.next), Ft(e, d, m), d = m;
        continue;
      }
      for (f = [], h = []; l !== null && l.k !== w; )
        (l.e.f & Ot) === 0 && (u ??= /* @__PURE__ */ new Set()).add(l), h.push(l), l = l.next;
      if (l === null)
        continue;
      m = l;
    }
    f.push(m), d = m, l = m.next;
  }
  let V = a.size > s;
  if (l !== null || u !== void 0) {
    for (var j = u === void 0 ? [] : Ds(u); l !== null; )
      (l.e.f & Ot) === 0 && j.push(l), l = l.next;
    var A = j.length;
    if (V = a.size - A > s, A > 0) {
      var H = (r & Ll) !== 0 && s === 0 ? n : null;
      if (i) {
        for (b = 0; b < A; b += 1)
          j[b].a?.measure();
        for (b = 0; b < A; b += 1)
          j[b].a?.fix();
      }
      op(e, j, H);
    }
  }
  if (V)
    for (const z of a.values())
      z.o || (Ft(e, d, z), d = z);
  e.effect.last = d && d.e, i && Jn(() => {
    if (p !== void 0)
      for (m of p)
        m.a?.apply();
  });
}
function sp(e, t, n, r, o, i, s, a) {
  var l = (s & Ml) !== 0, u = (s & xf) === 0, d = l ? u ? /* @__PURE__ */ ou(n, !1, !1) : qn(n) : n, p = (s & Tl) === 0 ? o : qn(o), f = {
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
      h.append(e = Et());
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
function Wi(e, t, n) {
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
function Ft(e, t, n) {
  t === null ? (e.first = n, e.effect.first = n && n.e) : (t.e.next && (t.e.next.prev = null), t.next = n, t.e.next = n && n.e), n !== null && (n.e.prev && (n.e.prev.next = null), n.prev = t, n.e.prev = t && t.e);
}
function eu(e, t, n, r) {
  const o = wo() ? bo : Is;
  if (n.length === 0 && e.length === 0) {
    r(t.map(o));
    return;
  }
  var i = Fe, s = (
    /** @type {Effect} */
    Ne
  ), a = ap();
  function l() {
    Promise.all(n.map((u) => /* @__PURE__ */ lp(u))).then((u) => {
      a();
      try {
        r([...t.map(o), ...u]);
      } catch (d) {
        (s.f & En) === 0 && Tr(d, s);
      }
      i?.deactivate(), ni();
    }).catch((u) => {
      Tr(u, s);
    });
  }
  e.length > 0 ? Promise.all(e).then(() => {
    a();
    try {
      return l();
    } finally {
      i?.deactivate(), ni();
    }
  }) : l();
}
function ap() {
  var e = Ne, t = Ve, n = We, r = Fe;
  return function(o = !0) {
    Bt(e), $t(t), Nr(n), o && r?.activate();
  };
}
function ni() {
  Bt(null), $t(null), Nr(null);
}
// @__NO_SIDE_EFFECTS__
function bo(e) {
  var t = ct | St, n = Ve !== null && (Ve.f & ct) !== 0 ? (
    /** @type {Derived} */
    Ve
  ) : null;
  return Ne !== null && (Ne.f |= vr), {
    ctx: We,
    deps: null,
    effects: null,
    equals: Rl,
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
  ), s = !Ve, a = /* @__PURE__ */ new Map();
  return mp(() => {
    var l = Hl();
    o = l.promise;
    try {
      Promise.resolve(e()).then(l.resolve, l.reject).then(() => {
        u === Fe && u.committed && u.deactivate(), ni();
      });
    } catch (f) {
      l.reject(f), ni();
    }
    var u = (
      /** @type {Batch} */
      Fe
    );
    if (s) {
      var d = !r.is_pending();
      r.update_pending_count(1), u.increment(d), a.get(u)?.reject(Cr), a.delete(u), a.set(u, l);
    }
    const p = (f, h = void 0) => {
      if (u.activate(), h)
        h !== Cr && (i.f |= Bn, Vr(i, h));
      else {
        (i.f & Bn) !== 0 && (i.f ^= Bn), Vr(i, f);
        for (const [y, w] of a) {
          if (a.delete(y), y === u) break;
          w.reject(Cr);
        }
      }
      s && (r.update_pending_count(-1), u.decrement(d));
    };
    l.promise.then(p, (f) => p(null, f || "unknown"));
  }), Ni(() => {
    for (const l of a.values())
      l.reject(Cr);
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
  const t = /* @__PURE__ */ bo(e);
  return xu(t), t;
}
// @__NO_SIDE_EFFECTS__
function Is(e) {
  const t = /* @__PURE__ */ bo(e);
  return t.equals = Wl, t;
}
function tu(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      it(
        /** @type {Effect} */
        t[n]
      );
  }
}
function up(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & ct) === 0)
      return (t.f & En) === 0 ? (
        /** @type {Effect} */
        t
      ) : null;
    t = t.parent;
  }
  return null;
}
function Zs(e) {
  var t, n = Ne;
  Bt(up(e));
  try {
    e.f &= ~to, tu(e), t = ku(e);
  } finally {
    Bt(n);
  }
  return t;
}
function nu(e) {
  var t = Zs(e);
  if (e.equals(t) || (Fe?.is_fork || (e.v = t), e.wv = $u()), !yr)
    if (jt !== null)
      (no() || Fe?.is_fork) && jt.set(e, t);
    else {
      var n = (e.f & Qt) === 0 ? On : ht;
      gt(e, n);
    }
}
let us = /* @__PURE__ */ new Set();
const Wn = /* @__PURE__ */ new Map();
let ru = !1;
function qn(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Rl,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function Ee(e, t) {
  const n = qn(e);
  return xu(n), n;
}
// @__NO_SIDE_EFFECTS__
function ou(e, t = !1, n = !0) {
  const r = qn(e);
  return t || (r.equals = Wl), jr && n && We !== null && We.l !== null && (We.l.s ??= []).push(r), r;
}
function Q(e, t, n = !1) {
  Ve !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!dn || (Ve.f & ba) !== 0) && wo() && (Ve.f & (ct | Vn | zs | ba)) !== 0 && !Pn?.includes(e) && Wf();
  let r = n ? Rt(t) : t;
  return Vr(e, r);
}
function Vr(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    yr ? Wn.set(e, t) : Wn.set(e, n), e.v = t;
    var r = Gt.ensure();
    r.capture(e, n), (e.f & ct) !== 0 && ((e.f & St) !== 0 && Zs(
      /** @type {Derived} */
      e
    ), gt(e, (e.f & Qt) !== 0 ? ht : On)), e.wv = $u(), iu(e, St), wo() && Ne !== null && (Ne.f & ht) !== 0 && (Ne.f & (Dn | Qn)) === 0 && (It === null ? wp([e]) : It.push(e)), !r.is_fork && us.size > 0 && !ru && cp();
  }
  return t;
}
function cp() {
  ru = !1;
  var e = Yn;
  ri(!0);
  const t = Array.from(us);
  try {
    for (const n of t)
      (n.f & ht) !== 0 && gt(n, On), Co(n) && oo(n);
  } finally {
    ri(e);
  }
  us.clear();
}
function Ca(e, t = 1) {
  var n = c(e), r = t === 1 ? n++ : n--;
  return Q(e, n), r;
}
function Jr(e) {
  Q(e, e.v + 1);
}
function iu(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = wo(), o = n.length, i = 0; i < o; i++) {
      var s = n[i], a = s.f;
      if (!(!r && s === Ne)) {
        var l = (a & St) === 0;
        if (l && gt(s, t), (a & ct) !== 0) {
          var u = (
            /** @type {Derived} */
            s
          );
          jt?.delete(u), (a & to) === 0 && (a & Qt && (s.f |= to), iu(u, On));
        } else l && ((a & Vn) !== 0 && bn !== null && bn.add(
          /** @type {Effect} */
          s
        ), dr(
          /** @type {Effect} */
          s
        ));
      }
    }
}
function Rt(e) {
  if (typeof e != "object" || e === null || fn in e)
    return e;
  const t = $i(e);
  if (t !== Al && t !== Lf)
    return e;
  var n = /* @__PURE__ */ new Map(), r = Ci(e), o = /* @__PURE__ */ Ee(0), i = ar, s = (a) => {
    if (ar === i)
      return a();
    var l = Ve, u = ar;
    $t(null), Sa(i);
    var d = a();
    return $t(l), Sa(u), d;
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
        }) : Q(d, u.value, !0), !0;
      },
      deleteProperty(a, l) {
        var u = n.get(l);
        if (u === void 0) {
          if (l in a) {
            const d = s(() => /* @__PURE__ */ Ee(at));
            n.set(l, d), Jr(o);
          }
        } else
          Q(u, at), Jr(o);
        return !0;
      },
      get(a, l, u) {
        if (l === fn)
          return e;
        var d = n.get(l), p = l in a;
        if (d === void 0 && (!p || Sn(a, l)?.writable) && (d = s(() => {
          var h = Rt(p ? a[l] : at), y = /* @__PURE__ */ Ee(h);
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
        if (l === fn)
          return !0;
        var u = n.get(l), d = u !== void 0 && u.v !== at || Reflect.has(a, l);
        if (u !== void 0 || Ne !== null && (!d || Sn(a, l)?.writable)) {
          u === void 0 && (u = s(() => {
            var f = d ? Rt(a[l]) : at, h = /* @__PURE__ */ Ee(f);
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
            y !== void 0 ? Q(y, at) : h in a && (y = s(() => /* @__PURE__ */ Ee(at)), n.set(h + "", y));
          }
        if (p === void 0)
          (!f || Sn(a, l)?.writable) && (p = s(() => /* @__PURE__ */ Ee(void 0)), Q(p, Rt(u)), n.set(l, p));
        else {
          f = p.v !== at;
          var w = s(() => Rt(u));
          Q(p, w);
        }
        var m = Reflect.getOwnPropertyDescriptor(a, l);
        if (m?.set && m.set.call(d, u), !f) {
          if (r && typeof l == "string") {
            var b = (
              /** @type {Source<number>} */
              n.get("length")
            ), $ = Number(l);
            Number.isInteger($) && $ >= b.v && Q(b, $ + 1);
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
    if (e !== null && typeof e == "object" && fn in e)
      return e[fn];
  } catch {
  }
  return e;
}
function dp(e, t) {
  return Object.is($a(e), $a(t));
}
var Ct, su, au, lu;
function cs() {
  if (Ct === void 0) {
    Ct = window, su = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    au = Sn(t, "firstChild").get, lu = Sn(t, "nextSibling").get, wa(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), wa(n) && (n.__t = void 0);
  }
}
function Et(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function rt(e) {
  return au.call(e);
}
// @__NO_SIDE_EFFECTS__
function tn(e) {
  return lu.call(e);
}
function R(e, t) {
  if (!be)
    return /* @__PURE__ */ rt(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ rt(Pe)
  );
  if (n === null)
    n = Pe.appendChild(Et());
  else if (t && n.nodeType !== Ei) {
    var r = Et();
    return n?.before(r), et(r), r;
  }
  return et(n), n;
}
function oe(e, t = !1) {
  if (!be) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ rt(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ tn(n) : n;
  }
  if (t && Pe?.nodeType !== Ei) {
    var r = Et();
    return Pe?.before(r), et(r), r;
  }
  return Pe;
}
function O(e, t = 1, n = !1) {
  let r = be ? Pe : e;
  for (var o; t--; )
    o = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ tn(r);
  if (!be)
    return r;
  if (n && r?.nodeType !== Ei) {
    var i = Et();
    return r === null ? o?.after(i) : r.before(i), et(i), i;
  }
  return et(r), /** @type {TemplateNode} */
  r;
}
function js(e) {
  e.textContent = "";
}
function uu() {
  return !1;
}
function fp(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, Jn(() => {
      document.activeElement === n && e.focus();
    });
  }
}
function pp(e) {
  be && /* @__PURE__ */ rt(e) !== null && js(e);
}
let _a = !1;
function hp() {
  _a || (_a = !0, document.addEventListener(
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
function Ks(e) {
  var t = Ve, n = Ne;
  $t(null), Bt(null);
  try {
    return e();
  } finally {
    $t(t), Bt(n);
  }
}
function cu(e) {
  Ne === null && (Ve === null && If(), Hf()), yr && Af();
}
function gp(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Wt(e, t, n) {
  var r = Ne;
  r !== null && (r.f & Ot) !== 0 && (e |= Ot);
  var o = {
    ctx: We,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | St | Qt,
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
      oo(o), o.f |= Si;
    } catch (a) {
      throw it(o), a;
    }
  else t !== null && dr(o);
  var i = o;
  if (n && i.deps === null && i.teardown === null && i.nodes_start === null && i.first === i.last && // either `null`, or a singular child
  (i.f & vr) === 0 && (i = i.first, (e & Vn) !== 0 && (e & Nn) !== 0 && i !== null && (i.f |= Nn)), i !== null && (i.parent = r, r !== null && gp(i, r), Ve !== null && (Ve.f & ct) !== 0 && (e & Qn) === 0)) {
    var s = (
      /** @type {Derived} */
      Ve
    );
    (s.effects ??= []).push(i);
  }
  return o;
}
function no() {
  return Ve !== null && !dn;
}
function Ni(e) {
  const t = Wt(_i, null, !1);
  return gt(t, ht), t.teardown = e, t;
}
function qe(e) {
  cu();
  var t = (
    /** @type {Effect} */
    Ne.f
  ), n = !Ve && (t & Dn) !== 0 && (t & Si) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      We
    );
    (r.e ??= []).push(e);
  } else
    return du(e);
}
function du(e) {
  return Wt(Os | jl, e, !1);
}
function fu(e) {
  return cu(), Wt(_i | jl, e, !0);
}
function Rs(e) {
  Gt.ensure();
  const t = Wt(Qn | vr, e, !0);
  return () => {
    it(t);
  };
}
function vp(e) {
  Gt.ensure();
  const t = Wt(Qn | vr, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? _r(t, () => {
      it(t), r(void 0);
    }) : (it(t), r(void 0));
  });
}
function Kr(e) {
  return Wt(Os, e, !1);
}
function mp(e) {
  return Wt(zs | vr, e, !0);
}
function xo(e, t = 0) {
  return Wt(_i | t, e, !0);
}
function $e(e, t = [], n = [], r = []) {
  eu(r, t, n, (o) => {
    Wt(_i, () => e(...o.map(c)), !0);
  });
}
function Rr(e, t = 0) {
  var n = Wt(Vn | t, e, !0);
  return n;
}
function pu(e, t = 0) {
  var n = Wt(Il | t, e, !0);
  return n;
}
function Vt(e) {
  return Wt(Dn | vr, e, !0);
}
function hu(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = yr, r = Ve;
    ka(!0), $t(null);
    try {
      t.call(null);
    } finally {
      ka(n), $t(r);
    }
  }
}
function gu(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const o = n.ac;
    o !== null && Ks(() => {
      o.abort(Cr);
    });
    var r = n.next;
    (n.f & Qn) !== 0 ? n.parent = null : it(n, t), n = r;
  }
}
function yp(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & Dn) === 0 && it(t), t = n;
  }
}
function it(e, t = !0) {
  var n = !1;
  (t || (e.f & Zl) !== 0) && e.nodes_start !== null && e.nodes_end !== null && (vu(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), n = !0), gu(e, t && !n), oi(e, 0), gt(e, En);
  var r = e.transitions;
  if (r !== null)
    for (const i of r)
      i.stop();
  hu(e);
  var o = e.parent;
  o !== null && o.first !== null && mu(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = e.ac = null;
}
function vu(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ tn(e)
    );
    e.remove(), e = n;
  }
}
function mu(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function _r(e, t, n = !0) {
  var r = [];
  Bs(e, r, !0), yu(r, () => {
    n && it(e), t && t();
  });
}
function yu(e, t) {
  var n = e.length;
  if (n > 0) {
    var r = () => --n || t();
    for (var o of e)
      o.out(r);
  } else
    t();
}
function Bs(e, t, n) {
  if ((e.f & Ot) === 0) {
    if (e.f ^= Ot, e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || n) && t.push(s);
    for (var r = e.first; r !== null; ) {
      var o = r.next, i = (r.f & Nn) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (r.f & Dn) !== 0 && (e.f & Vn) !== 0;
      Bs(r, t, i ? n : !1), r = o;
    }
  }
}
function Ws(e) {
  wu(e, !0);
}
function wu(e, t) {
  if ((e.f & Ot) !== 0) {
    e.f ^= Ot, (e.f & ht) === 0 && (gt(e, St), dr(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, o = (n.f & Nn) !== 0 || (n.f & Dn) !== 0;
      wu(n, o ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || t) && i.in();
  }
}
function bu(e, t) {
  for (var n = e.nodes_start, r = e.nodes_end; n !== null; ) {
    var o = n === r ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ tn(n)
    );
    t.append(n), n = o;
  }
}
let Yn = !1;
function ri(e) {
  Yn = e;
}
let yr = !1;
function ka(e) {
  yr = e;
}
let Ve = null, dn = !1;
function $t(e) {
  Ve = e;
}
let Ne = null;
function Bt(e) {
  Ne = e;
}
let Pn = null;
function xu(e) {
  Ve !== null && (Pn === null ? Pn = [e] : Pn.push(e));
}
let wt = null, Lt = 0, It = null;
function wp(e) {
  It = e;
}
let Cu = 1, ro = 0, ar = ro;
function Sa(e) {
  ar = e;
}
function $u() {
  return ++Cu;
}
function Co(e) {
  var t = e.f;
  if ((t & St) !== 0)
    return !0;
  if (t & ct && (e.f &= -32769), (t & On) !== 0) {
    var n = e.deps;
    if (n !== null)
      for (var r = n.length, o = 0; o < r; o++) {
        var i = n[o];
        if (Co(
          /** @type {Derived} */
          i
        ) && nu(
          /** @type {Derived} */
          i
        ), i.wv > e.wv)
          return !0;
      }
    (t & Qt) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    jt === null && gt(e, ht);
  }
  return !1;
}
function _u(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !Pn?.includes(e))
    for (var o = 0; o < r.length; o++) {
      var i = r[o];
      (i.f & ct) !== 0 ? _u(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? gt(i, St) : (i.f & ht) !== 0 && gt(i, On), dr(
        /** @type {Effect} */
        i
      ));
    }
}
function ku(e) {
  var t = wt, n = Lt, r = It, o = Ve, i = Pn, s = We, a = dn, l = ar, u = e.f;
  wt = /** @type {null | Value[]} */
  null, Lt = 0, It = null, Ve = (u & (Dn | Qn)) === 0 ? e : null, Pn = null, Nr(e.ctx), dn = !1, ar = ++ro, e.ac !== null && (Ks(() => {
    e.ac.abort(Cr);
  }), e.ac = null);
  try {
    e.f |= as;
    var d = (
      /** @type {Function} */
      e.fn
    ), p = d(), f = e.deps;
    if (wt !== null) {
      var h;
      if (oi(e, Lt), f !== null && Lt > 0)
        for (f.length = Lt + wt.length, h = 0; h < wt.length; h++)
          f[Lt + h] = wt[h];
      else
        e.deps = f = wt;
      if (Yn && no() && (e.f & Qt) !== 0)
        for (h = Lt; h < f.length; h++)
          (f[h].reactions ??= []).push(e);
    } else f !== null && Lt < f.length && (oi(e, Lt), f.length = Lt);
    if (wo() && It !== null && !dn && f !== null && (e.f & (ct | On | St)) === 0)
      for (h = 0; h < /** @type {Source[]} */
      It.length; h++)
        _u(
          It[h],
          /** @type {Effect} */
          e
        );
    return o !== null && o !== e && (ro++, It !== null && (r === null ? r = It : r.push(.../** @type {Source[]} */
    It))), (e.f & Bn) !== 0 && (e.f ^= Bn), p;
  } catch (y) {
    return Xl(y);
  } finally {
    e.f ^= as, wt = t, Lt = n, It = r, Ve = o, Pn = i, Nr(s), dn = a, ar = l;
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
  (wt === null || !wt.includes(t)) && (gt(t, On), (t.f & Qt) !== 0 && (t.f ^= Qt, t.f &= -32769), tu(
    /** @type {Derived} **/
    t
  ), oi(
    /** @type {Derived} **/
    t,
    0
  ));
}
function oi(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      bp(e, n[r]);
}
function oo(e) {
  var t = e.f;
  if ((t & En) === 0) {
    gt(e, ht);
    var n = Ne, r = Yn;
    Ne = e, Yn = !0;
    try {
      (t & (Vn | Il)) !== 0 ? yp(e) : gu(e), hu(e);
      var o = ku(e);
      e.teardown = typeof o == "function" ? o : null, e.wv = Cu;
      var i;
      Mf && Xf && (e.f & St) !== 0 && e.deps;
    } finally {
      Yn = r, Ne = n;
    }
  }
}
function c(e) {
  var t = e.f, n = (t & ct) !== 0;
  if (Ve !== null && !dn) {
    var r = Ne !== null && (Ne.f & En) !== 0;
    if (!r && !Pn?.includes(e)) {
      var o = Ve.deps;
      if ((Ve.f & as) !== 0)
        e.rv < ro && (e.rv = ro, wt === null && o !== null && o[Lt] === e ? Lt++ : wt === null ? wt = [e] : wt.includes(e) || wt.push(e));
      else {
        (Ve.deps ??= []).push(e);
        var i = e.reactions;
        i === null ? e.reactions = [Ve] : i.includes(Ve) || i.push(Ve);
      }
    }
  }
  if (yr) {
    if (Wn.has(e))
      return Wn.get(e);
    if (n) {
      var s = (
        /** @type {Derived} */
        e
      ), a = s.v;
      return ((s.f & ht) === 0 && s.reactions !== null || Eu(s)) && (a = Zs(s)), Wn.set(s, a), a;
    }
  } else n && (!jt?.has(e) || Fe?.is_fork && !no()) && (s = /** @type {Derived} */
  e, Co(s) && nu(s), Yn && no() && (s.f & Qt) === 0 && Su(s));
  if (jt?.has(e))
    return jt.get(e);
  if ((e.f & Bn) !== 0)
    throw e.v;
  return e.v;
}
function Su(e) {
  if (e.deps !== null) {
    e.f ^= Qt;
    for (const t of e.deps)
      (t.reactions ??= []).push(e), (t.f & ct) !== 0 && (t.f & Qt) === 0 && Su(
        /** @type {Derived} */
        t
      );
  }
}
function Eu(e) {
  if (e.v === at) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Wn.has(t) || (t.f & ct) !== 0 && Eu(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function lt(e) {
  var t = dn;
  try {
    return dn = !0, e();
  } finally {
    dn = t;
  }
}
const xp = -7169;
function gt(e, t) {
  e.f = e.f & xp | t;
}
function Cp(e, t) {
  var n = {};
  for (var r in e)
    t.includes(r) || (n[r] = e[r]);
  for (var o of Object.getOwnPropertySymbols(e))
    Object.propertyIsEnumerable.call(e, o) && !t.includes(o) && (n[o] = e[o]);
  return n;
}
function Ys(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (fn in e)
      ds(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && fn in n && ds(n);
      }
  }
}
function ds(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e)
      try {
        ds(e[r], t);
      } catch {
      }
    const n = $i(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = zl(n);
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
const Pu = /* @__PURE__ */ new Set(), fs = /* @__PURE__ */ new Set();
function Fs(e, t, n, r = {}) {
  function o(i) {
    if (r.capture || qr.call(t, i), !i.cancelBubble)
      return Ks(() => n?.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Jn(() => {
    t.addEventListener(e, o, r);
  }) : t.addEventListener(e, o, r), o;
}
function ps(e, t, n, r = {}) {
  var o = Fs(t, e, n, r);
  return () => {
    e.removeEventListener(t, o, r);
  };
}
function ii(e, t, n, r, o) {
  var i = { capture: r, passive: o }, s = Fs(e, t, n, i);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && Ni(() => {
    t.removeEventListener(e, s, i);
  });
}
function er(e) {
  for (var t = 0; t < e.length; t++)
    Pu.add(e[t]);
  for (var n of fs)
    n(e);
}
let Ea = null;
function qr(e) {
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, o = e.composedPath?.() || [], i = (
    /** @type {null | Element} */
    o[0] || e.target
  );
  Ea = e;
  var s = 0, a = Ea === e && e.__root;
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
    ei(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    var d = Ve, p = Ne;
    $t(null), Bt(null);
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
      e.__root = t, delete e.currentTarget, $t(d), Bt(p);
    }
  }
}
function qs(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
function kt(e, t) {
  var n = (
    /** @type {Effect} */
    Ne
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function ee(e, t) {
  var n = (t & Dl) !== 0, r = (t & Sf) !== 0, o, i = !e.startsWith("<!>");
  return () => {
    if (be)
      return kt(Pe, null), Pe;
    o === void 0 && (o = qs(i ? e : "<!>" + e), n || (o = /** @type {Node} */
    /* @__PURE__ */ rt(o)));
    var s = (
      /** @type {TemplateNode} */
      r || su ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ rt(s)
      ), l = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      kt(a, l);
    } else
      kt(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function $p(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), o = (t & Dl) !== 0, i = `<${n}>${r ? e : "<!>" + e}</${n}>`, s;
  return () => {
    if (be)
      return kt(Pe, null), Pe;
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        qs(i)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ rt(a)
      );
      if (o)
        for (s = document.createDocumentFragment(); /* @__PURE__ */ rt(l); )
          s.appendChild(
            /** @type {Node} */
            /* @__PURE__ */ rt(l)
          );
      else
        s = /** @type {Element} */
        /* @__PURE__ */ rt(l);
    }
    var u = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    if (o) {
      var d = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ rt(u)
      ), p = (
        /** @type {TemplateNode} */
        u.lastChild
      );
      kt(d, p);
    } else
      kt(u, u);
    return u;
  };
}
// @__NO_SIDE_EFFECTS__
function ge(e, t) {
  return /* @__PURE__ */ $p(e, t, "svg");
}
function ke(e = "") {
  if (!be) {
    var t = Et(e + "");
    return kt(t, t), t;
  }
  var n = Pe;
  return n.nodeType !== Ei && (n.before(n = Et()), et(n)), kt(n, n), n;
}
function Se() {
  if (be)
    return kt(Pe, null), Pe;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = Et();
  return e.append(t, n), kt(t, n), e;
}
function L(e, t) {
  if (be) {
    var n = (
      /** @type {Effect} */
      Ne
    );
    ((n.f & Si) === 0 || n.nodes_end === null) && (n.nodes_end = Pe), Mn();
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
function Mp(e) {
  return Np.includes(e);
}
const Tp = (
  /** @type {const} */
  ["textarea", "script", "style", "title"]
);
function Lp(e) {
  return Tp.includes(
    /** @type {typeof RAW_TEXT_ELEMENTS[number]} */
    e
  );
}
function Re(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = n + "");
}
function Nu(e, t) {
  return Mu(e, t);
}
function Vp(e, t) {
  cs(), t.intro = t.intro ?? !1;
  const n = t.target, r = be, o = Pe;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ rt(n)
    ); i && (i.nodeType !== mr || /** @type {Comment} */
    i.data !== Ol); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ tn(i);
    if (!i)
      throw cr;
    Dt(!0), et(
      /** @type {Comment} */
      i
    );
    const s = Mu(e, { ...t, anchor: i });
    return Dt(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s instanceof Error && s.message.split(`
`).some((a) => a.startsWith("https://svelte.dev/e/")))
      throw s;
    return s !== cr && console.warn("Failed to hydrate: ", s), t.recover === !1 && jf(), cs(), js(n), Dt(!1), Nu(e, t);
  } finally {
    Dt(r), et(o);
  }
}
const br = /* @__PURE__ */ new Map();
function Mu(e, { target: t, anchor: n, props: r = {}, events: o, context: i, intro: s = !0 }) {
  cs();
  var a = /* @__PURE__ */ new Set(), l = (p) => {
    for (var f = 0; f < p.length; f++) {
      var h = p[f];
      if (!a.has(h)) {
        a.add(h);
        var y = Mp(h);
        t.addEventListener(h, qr, { passive: y });
        var w = br.get(h);
        w === void 0 ? (document.addEventListener(h, qr, { passive: y }), br.set(h, 1)) : br.set(h, w + 1);
      }
    }
  };
  l(Ds(Pu)), fs.add(l);
  var u = void 0, d = vp(() => {
    var p = n ?? t.appendChild(Et());
    return np(
      /** @type {TemplateNode} */
      p,
      {
        pending: () => {
        }
      },
      (f) => {
        if (i) {
          le({});
          var h = (
            /** @type {ComponentContext} */
            We
          );
          h.c = i;
        }
        if (o && (r.$$events = o), be && kt(
          /** @type {TemplateNode} */
          f,
          null
        ), u = e(f, r) || {}, be && (Ne.nodes_end = Pe, Pe === null || Pe.nodeType !== mr || /** @type {Comment} */
        Pe.data !== Vs))
          throw yo(), cr;
        i && ue();
      }
    ), () => {
      for (var f of a) {
        t.removeEventListener(f, qr);
        var h = (
          /** @type {number} */
          br.get(f)
        );
        --h === 0 ? (document.removeEventListener(f, qr), br.delete(f)) : br.set(f, h);
      }
      fs.delete(l), p !== n && p.parentNode?.removeChild(p);
    };
  });
  return hs.set(u, d), u;
}
let hs = /* @__PURE__ */ new WeakMap();
function Dp(e, t) {
  const n = hs.get(e);
  return n ? (hs.delete(e), n(t)) : Promise.resolve();
}
class Mi {
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
      Fe
    );
    if (this.#e.has(t)) {
      var n = (
        /** @type {Key} */
        this.#e.get(t)
      ), r = this.#t.get(n);
      if (r)
        Ws(r), this.#r.delete(n);
      else {
        var o = this.#n.get(n);
        o && (this.#t.set(n, o.effect), this.#n.delete(n), o.fragment.lastChild.remove(), this.anchor.before(o.fragment), r = o.effect);
      }
      for (const [i, s] of this.#e) {
        if (this.#e.delete(i), i === t)
          break;
        const a = this.#n.get(s);
        a && (it(a.effect), this.#n.delete(s));
      }
      for (const [i, s] of this.#t) {
        if (i === n || this.#r.has(i)) continue;
        const a = () => {
          if (Array.from(this.#e.values()).includes(i)) {
            var l = document.createDocumentFragment();
            bu(s, l), l.append(Et()), this.#n.set(i, { effect: s, fragment: l });
          } else
            it(s);
          this.#r.delete(i), this.#t.delete(i);
        };
        this.#l || !r ? (this.#r.add(i), _r(s, a, !1)) : a();
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
      n.includes(r) || (it(o.effect), this.#n.delete(r));
  };
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, n) {
    var r = (
      /** @type {Batch} */
      Fe
    ), o = uu();
    n && !this.#t.has(t) && !this.#n.has(t) && this.#t.set(
      t,
      Vt(() => n(this.anchor))
    ), this.#e.set(r, t), o || (be && (this.anchor = Pe), this.#a());
  }
}
function Ge(e, t, ...n) {
  var r = new Mi(e);
  Rr(() => {
    const o = t() ?? null;
    r.ensure(o, o && ((i) => o(i, ...n)));
  }, Nn);
}
function zn(e) {
  We === null && Hs(), jr && We.l !== null ? Op(We).m.push(e) : qe(() => {
    const t = lt(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function $o(e) {
  We === null && Hs(), zn(() => () => lt(e));
}
function Op(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ??= { a: [], b: [], m: [] };
}
function ae(e, t, n = !1) {
  be && Mn();
  var r = new Mi(e), o = n ? Nn : 0;
  function i(s, a) {
    if (be) {
      const u = Kl(e) === xi;
      if (s === u) {
        var l = ti();
        et(l), r.anchor = l, Dt(!1), r.ensure(s, a), Dt(!0);
        return;
      }
    }
    r.ensure(s, a);
  }
  Rr(() => {
    var s = !1;
    t((a, l = !0) => {
      s = !0, i(l, a);
    }), s || i(!1, null);
  }, o);
}
function zp(e, t) {
  be && et(
    /** @type {TemplateNode} */
    /* @__PURE__ */ rt(e)
  ), xo(() => {
    var n = t();
    for (var r in n) {
      var o = n[r];
      o ? e.style.setProperty(r, o) : e.style.removeProperty(r);
    }
  });
}
function Xs(e, t, n = !1, r = !1, o = !1) {
  var i = e, s = "";
  $e(() => {
    var a = (
      /** @type {Effect} */
      Ne
    );
    if (s === (s = t() ?? "")) {
      be && Mn();
      return;
    }
    if (a.nodes_start !== null && (vu(
      a.nodes_start,
      /** @type {TemplateNode} */
      a.nodes_end
    ), a.nodes_start = a.nodes_end = null), s !== "") {
      if (be) {
        Pe.data;
        for (var l = Mn(), u = l; l !== null && (l.nodeType !== mr || /** @type {Comment} */
        l.data !== ""); )
          u = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ tn(l);
        if (l === null)
          throw yo(), cr;
        kt(Pe, u), i = et(l);
        return;
      }
      var d = s + "";
      n ? d = `<svg>${d}</svg>` : r && (d = `<math>${d}</math>`);
      var p = qs(d);
      if ((n || r) && (p = /** @type {Element} */
      /* @__PURE__ */ rt(p)), kt(
        /** @type {TemplateNode} */
        /* @__PURE__ */ rt(p),
        /** @type {TemplateNode} */
        p.lastChild
      ), n || r)
        for (; /* @__PURE__ */ rt(p); )
          i.before(
            /** @type {Node} */
            /* @__PURE__ */ rt(p)
          );
      else
        i.before(p);
    }
  });
}
function Ti(e, t, n) {
  be && Mn();
  var r = new Mi(e);
  Rr(() => {
    var o = t() ?? null;
    r.ensure(o, o && ((i) => n(i, o)));
  }, Nn);
}
function Ap(e, t, n, r, o, i) {
  let s = be;
  be && Mn();
  var a = null;
  be && Pe.nodeType === Of && (a = /** @type {Element} */
  Pe, Mn());
  var l = (
    /** @type {TemplateNode} */
    be ? Pe : e
  ), u = new Mi(l, !1);
  Rr(() => {
    const d = t() || null;
    var p = d === "svg" ? Pf : null;
    if (d === null) {
      u.ensure(null, null);
      return;
    }
    return u.ensure(d, (f) => {
      if (d) {
        if (a = be ? (
          /** @type {Element} */
          a
        ) : p ? document.createElementNS(p, d) : document.createElement(d), kt(a, a), r) {
          be && Lp(d) && a.append(document.createComment(""));
          var h = (
            /** @type {TemplateNode} */
            be ? /* @__PURE__ */ rt(a) : a.appendChild(Et())
          );
          be && (h === null ? Dt(!1) : et(h)), r(a, h);
        }
        Ne.nodes_end = a, f.before(a);
      }
      be && et(f);
    }), () => {
    };
  }, Nn), Ni(() => {
  }), s && (Dt(!0), et(l));
}
function He(e, t) {
  Kr(() => {
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
  Kr(() => {
    var r = lt(() => t(e, n?.()) || {});
    if (n && r?.update) {
      var o = !1, i = (
        /** @type {any} */
        {}
      );
      xo(() => {
        var s = n();
        Ys(s), o && Bl(i, s) && (i = s, r.update(s));
      }), o = !0;
    }
    if (r?.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function Hp(e, t) {
  var n = void 0, r;
  pu(() => {
    n !== (n = t()) && (r && (it(r), r = null), n && (r = Vt(() => {
      Kr(() => (
        /** @type {(node: Element) => void} */
        n(e)
      ));
    })));
  });
}
function Tu(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Tu(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Ip() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Tu(e)) && (r && (r += " "), r += t);
  return r;
}
function An(e) {
  return typeof e == "object" ? Ip(e) : e ?? "";
}
const Pa = [...` 	
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
          (s === 0 || Pa.includes(r[s - 1])) && (a === r.length || Pa.includes(r[a])) ? r = (s === 0 ? "" : r.substring(0, s)) + r.substring(a + 1) : s = a;
        }
  }
  return r === "" ? null : r;
}
function Na(e, t = !1) {
  var n = t ? " !important;" : ";", r = "";
  for (var o in e) {
    var i = e[o];
    i != null && i !== "" && (r += " " + o + ": " + i + n);
  }
  return r;
}
function Yi(e) {
  return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function jp(e, t) {
  if (t) {
    var n = "", r, o;
    if (Array.isArray(t) ? (r = t[0], o = t[1]) : r = t, e) {
      e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var i = !1, s = 0, a = !1, l = [];
      r && l.push(...Object.keys(r).map(Yi)), o && l.push(...Object.keys(o).map(Yi));
      var u = 0, d = -1;
      const w = e.length;
      for (var p = 0; p < w; p++) {
        var f = e[p];
        if (a ? f === "/" && e[p - 1] === "*" && (a = !1) : i ? i === f && (i = !1) : f === "/" && e[p + 1] === "*" ? a = !0 : f === '"' || f === "'" ? i = f : f === "(" ? s++ : f === ")" && s--, !a && i === !1 && s === 0) {
          if (f === ":" && d === -1)
            d = p;
          else if (f === ";" || p === w - 1) {
            if (d !== -1) {
              var h = Yi(e.substring(u, d).trim());
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
    return r && (n += Na(r)), o && (n += Na(o, !0)), n = n.trim(), n === "" ? null : n;
  }
  return e == null ? null : String(e);
}
function Pt(e, t, n, r, o, i) {
  var s = e.__className;
  if (be || s !== n || s === void 0) {
    var a = Zp(n, r, i);
    (!be || a !== e.getAttribute("class")) && (a == null ? e.removeAttribute("class") : t ? e.className = a : e.setAttribute("class", a)), e.__className = n;
  } else if (i && o !== i)
    for (var l in i) {
      var u = !!i[l];
      (o == null || u !== !!o[l]) && e.classList.toggle(l, u);
    }
  return i;
}
function Fi(e, t = {}, n, r) {
  for (var o in n) {
    var i = n[o];
    t[o] !== i && (n[o] == null ? e.style.removeProperty(o) : e.style.setProperty(o, i, r));
  }
}
function dt(e, t, n, r) {
  var o = e.__style;
  if (be || o !== t) {
    var i = jp(t, r);
    (!be || i !== e.getAttribute("style")) && (i == null ? e.removeAttribute("style") : e.style.cssText = i), e.__style = t;
  } else r && (Array.isArray(r) ? (Fi(e, n?.[0], r[0]), Fi(e, n?.[1], r[1], "important")) : Fi(e, n, r));
  return r;
}
function gs(e, t, n = !1) {
  if (e.multiple) {
    if (t == null)
      return;
    if (!Ci(t))
      return Ff();
    for (var r of e.options)
      r.selected = t.includes(Ma(r));
    return;
  }
  for (r of e.options) {
    var o = Ma(r);
    if (dp(o, t)) {
      r.selected = !0;
      return;
    }
  }
  (!n || t !== void 0) && (e.selectedIndex = -1);
}
function Kp(e) {
  var t = new MutationObserver(() => {
    gs(e, e.__value);
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
  }), Ni(() => {
    t.disconnect();
  });
}
function Ma(e) {
  return "__value" in e ? e.__value : e.value;
}
const jn = Symbol("class"), cn = Symbol("style"), Lu = Symbol("is custom element"), Vu = Symbol("is html");
function Cn(e) {
  if (be) {
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
    e.__on_r = n, Jn(n), hp();
  }
}
function Yo(e, t) {
  var n = Li(e);
  n.value === (n.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function Ao(e, t) {
  var n = Li(e);
  n.checked !== (n.checked = // treat null and undefined the same for the initial value
  t ?? void 0) && (e.checked = t);
}
function Rp(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function xe(e, t, n, r) {
  var o = Li(e);
  be && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = n) && (t === "loading" && (e[Df] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Du(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function Bp(e, t, n, r, o = !1, i = !1) {
  if (be && o && e.tagName === "INPUT") {
    var s = (
      /** @type {HTMLInputElement} */
      e
    ), a = s.type === "checkbox" ? "defaultChecked" : "defaultValue";
    a in n || Cn(s);
  }
  var l = Li(e), u = l[Lu], d = !l[Vu];
  let p = be && u;
  p && Dt(!1);
  var f = t || {}, h = e.tagName === "OPTION";
  for (var y in t)
    y in n || (n[y] = null);
  n.class ? n.class = An(n.class) : (r || n[jn]) && (n.class = null), n[cn] && (n.style ??= null);
  var w = Du(e);
  for (const N in n) {
    let V = n[N];
    if (h && N === "value" && V == null) {
      e.value = e.__value = "", f[N] = V;
      continue;
    }
    if (N === "class") {
      var m = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      Pt(e, m, V, r, t?.[jn], n[jn]), f[N] = V, f[jn] = n[jn];
      continue;
    }
    if (N === "style") {
      dt(e, V, t?.[cn], n[cn]), f[N] = V, f[cn] = n[cn];
      continue;
    }
    var b = f[N];
    if (!(V === b && !(V === void 0 && e.hasAttribute(N)))) {
      f[N] = V;
      var $ = N[0] + N[1];
      if ($ !== "$$")
        if ($ === "on") {
          const j = {}, A = "$$" + N;
          let H = N.slice(2);
          var _ = Sp(H);
          if (_p(H) && (H = H.slice(0, -7), j.capture = !0), !_ && b) {
            if (V != null) continue;
            e.removeEventListener(H, f[A], j), f[A] = null;
          }
          if (V != null)
            if (_)
              e[`__${H}`] = V, er([H]);
            else {
              let z = function(S) {
                f[N].call(this, S);
              };
              f[A] = Fs(H, e, z, j);
            }
          else _ && (e[`__${H}`] = void 0);
        } else if (N === "style")
          xe(e, N, V);
        else if (N === "autofocus")
          fp(
            /** @type {HTMLElement} */
            e,
            !!V
          );
        else if (!u && (N === "__value" || N === "value" && V != null))
          e.value = e.__value = V;
        else if (N === "selected" && h)
          Rp(
            /** @type {HTMLOptionElement} */
            e,
            V
          );
        else {
          var x = N;
          d || (x = Pp(x));
          var k = x === "defaultValue" || x === "defaultChecked";
          if (V == null && !u && !k)
            if (l[N] = null, x === "value" || x === "checked") {
              let j = (
                /** @type {HTMLInputElement} */
                e
              );
              const A = t === void 0;
              if (x === "value") {
                let H = j.defaultValue;
                j.removeAttribute(x), j.defaultValue = H, j.value = j.__value = A ? H : null;
              } else {
                let H = j.defaultChecked;
                j.removeAttribute(x), j.defaultChecked = H, j.checked = A ? H : !1;
              }
            } else
              e.removeAttribute(N);
          else k || w.includes(x) && (u || typeof V != "string") ? (e[x] = V, x in l && (l[x] = at)) : typeof V != "function" && xe(e, x, V);
        }
    }
  }
  return p && Dt(!0), f;
}
function ot(e, t, n = [], r = [], o = [], i, s = !1, a = !1) {
  eu(o, n, r, (l) => {
    var u = void 0, d = {}, p = e.nodeName === "SELECT", f = !1;
    if (pu(() => {
      var y = t(...l.map(c)), w = Bp(
        e,
        u,
        y,
        i,
        s,
        a
      );
      f && p && "value" in y && gs(
        /** @type {HTMLSelectElement} */
        e,
        y.value
      );
      for (let b of Object.getOwnPropertySymbols(d))
        y[b] || it(d[b]);
      for (let b of Object.getOwnPropertySymbols(y)) {
        var m = y[b];
        b.description === Nf && (!u || m !== u[b]) && (d[b] && it(d[b]), d[b] = Vt(() => Hp(e, () => m))), w[b] = m;
      }
      u = w;
    }), p) {
      var h = (
        /** @type {HTMLSelectElement} */
        e
      );
      Kr(() => {
        gs(
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
function Li(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ??= {
      [Lu]: e.nodeName.includes("-"),
      [Vu]: e.namespaceURI === Ef
    }
  );
}
var Ta = /* @__PURE__ */ new Map();
function Du(e) {
  var t = e.getAttribute("is") || e.nodeName, n = Ta.get(t);
  if (n) return n;
  Ta.set(t, n = []);
  for (var r, o = e, i = Element.prototype; i !== o; ) {
    r = zl(o);
    for (var s in r)
      r[s].set && n.push(s);
    o = $i(o);
  }
  return n;
}
class Gs {
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
          Gs.entries.set(n.target, n);
          for (var r of this.#e.get(n.target) || [])
            r(n);
        }
      }
    ));
  }
}
var Wp = /* @__PURE__ */ new Gs({
  box: "border-box"
});
function La(e, t, n) {
  var r = Wp.observe(e, () => n(e[t]));
  Kr(() => (lt(() => n(e[t])), r));
}
function Va(e, t) {
  return e === t || e?.[fn] === t;
}
function Nt(e = {}, t, n, r) {
  return Kr(() => {
    var o, i;
    return xo(() => {
      o = i, i = [], lt(() => {
        e !== n(...i) && (t(e, ...i), o && Va(n(...o), e) && t(null, ...o));
      });
    }), () => {
      Jn(() => {
        i && Va(n(...i), e) && t(null, ...i);
      });
    };
  }), e;
}
function Ou(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    We
  ), n = t.l.u;
  if (!n) return;
  let r = () => Ys(t.s);
  if (e) {
    let o = 0, i = (
      /** @type {Record<string, any>} */
      {}
    );
    const s = /* @__PURE__ */ bo(() => {
      let a = !1;
      const l = t.s;
      for (const u in l)
        l[u] !== i[u] && (i[u] = l[u], a = !0);
      return a && o++, o;
    });
    r = () => c(s);
  }
  n.b.length && fu(() => {
    Da(t, r), ss(n.b);
  }), qe(() => {
    const o = lt(() => n.m.map(Vf));
    return () => {
      for (const i of o)
        typeof i == "function" && i();
    };
  }), n.a.length && qe(() => {
    Da(t, r), ss(n.a);
  });
}
function Da(e, t) {
  if (e.l.s)
    for (const n of e.l.s) c(n);
  t();
}
let Ho = !1;
function Yp(e) {
  var t = Ho;
  try {
    return Ho = !1, [e(), Ho];
  } finally {
    Ho = t;
  }
}
const Fp = {
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
    Fp
  );
}
const qp = {
  get(e, t) {
    if (!e.exclude.includes(t))
      return c(e.version), t in e.special ? e.special[t]() : e.props[t];
  },
  set(e, t, n) {
    if (!(t in e.special)) {
      var r = Ne;
      try {
        Bt(e.parent_effect), e.special[t] = v(
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
        Bt(r);
      }
    }
    return e.special[t](n), Ca(e.version), !0;
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
    return e.exclude.includes(t) || (e.exclude.push(t), Ca(e.version)), !0;
  },
  has(e, t) {
    return e.exclude.includes(t) ? !1 : t in e.props;
  },
  ownKeys(e) {
    return Reflect.ownKeys(e.props).filter((t) => !e.exclude.includes(t));
  }
};
function Oa(e, t) {
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
    qp
  );
}
const Xp = {
  get(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (Wr(r) && (r = r()), typeof r == "object" && r !== null && t in r) return r[t];
    }
  },
  set(e, t, n) {
    let r = e.props.length;
    for (; r--; ) {
      let o = e.props[r];
      Wr(o) && (o = o());
      const i = Sn(o, t);
      if (i && i.set)
        return i.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (Wr(r) && (r = r()), typeof r == "object" && r !== null && t in r) {
        const o = Sn(r, t);
        return o && !o.configurable && (o.configurable = !0), o;
      }
    }
  },
  has(e, t) {
    if (t === fn || t === As) return !1;
    for (let n of e.props)
      if (Wr(n) && (n = n()), n != null && t in n) return !0;
    return !1;
  },
  ownKeys(e) {
    const t = [];
    for (let n of e.props)
      if (Wr(n) && (n = n()), !!n) {
        for (const r in n)
          t.includes(r) || t.push(r);
        for (const r of Object.getOwnPropertySymbols(n))
          t.includes(r) || t.push(r);
      }
    return t;
  }
};
function Be(...e) {
  return new Proxy({ props: e }, Xp);
}
function v(e, t, n, r) {
  var o = !jr || (n & $f) !== 0, i = (n & _f) !== 0, s = (n & kf) !== 0, a = (
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
    var p = fn in e || As in e;
    d = Sn(e, t)?.set ?? (p && t in e ? (_) => e[t] = _ : void 0);
  }
  var f, h = !1;
  i ? [f, h] = Yp(() => (
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
  var m = !1, b = ((n & Cf) !== 0 ? bo : Is)(() => (m = !1, y()));
  i && c(b);
  var $ = (
    /** @type {Effect} */
    Ne
  );
  return (
    /** @type {() => V} */
    function(_, x) {
      if (arguments.length > 0) {
        const k = x ? c(b) : o && i ? Rt(_) : _;
        return Q(b, k), m = !0, a !== void 0 && (a = k), _;
      }
      return yr && m || ($.f & En) !== 0 ? b.v : c(b);
    }
  );
}
function Gp(e) {
  return new Up(e);
}
class Up {
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
      var a = /* @__PURE__ */ ou(s, !1, !1);
      return n.set(i, a), a;
    };
    const o = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(i, s) {
          return c(n.get(s) ?? r(s, Reflect.get(i, s)));
        },
        has(i, s) {
          return s === As ? !0 : (c(n.get(s) ?? r(s, Reflect.get(i, s))), Reflect.has(i, s));
        },
        set(i, s, a) {
          return Q(n.get(s) ?? r(s, a), a), Reflect.set(i, s, a);
        }
      }
    );
    this.#t = (t.hydrate ? Vp : Nu)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: o,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    }), (!t?.props?.$$host || t.sync === !1) && g(), this.#e = o.$$events;
    for (const i of Object.keys(this.#t))
      i === "$set" || i === "$destroy" || i === "$on" || ei(this, i, {
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
let zu;
typeof HTMLElement == "function" && (zu = class extends HTMLElement {
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
          r !== "default" && (i.name = r), L(o, i);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const t = {}, n = Qp(this);
      for (const r of this.$$s)
        r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = e(r), t.default = !0) : t[r] = e(r));
      for (const r of this.attributes) {
        const o = this.$$g_p(r.name);
        o in this.$$d || (this.$$d[o] = Fo(o, r.value, this.$$p_d, "toProp"));
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
      }), this.$$me = Rs(() => {
        xo(() => {
          this.$$r = !0;
          for (const r of Jo(this.$$c)) {
            if (!this.$$p_d[r]?.reflect) continue;
            this.$$d[r] = this.$$c[r];
            const o = Fo(
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
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = Fo(e, n, this.$$p_d, "toProp"), this.$$c?.$set({ [e]: this.$$d[e] }));
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
    return Jo(this.$$p_d).find(
      (t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e
    ) || e;
  }
});
function Fo(e, t, n, r) {
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
function Qp(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function se(e, t, n, r, o, i) {
  let s = class extends zu {
    constructor() {
      super(e, n, o), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Jo(t).map(
        (a) => (t[a].attribute || a).toLowerCase()
      );
    }
  };
  return Jo(t).forEach((a) => {
    ei(s.prototype, a, {
      get() {
        return this.$$c && a in this.$$c ? this.$$c[a] : this.$$d[a];
      },
      set(l) {
        l = Fo(a, l, t), this.$$d[a] = l;
        var u = this.$$c;
        if (u) {
          var d = Sn(u, a)?.get;
          d ? u[a] = l : u.$set({ [a]: l });
        }
      }
    });
  }), r.forEach((a) => {
    ei(s.prototype, a, {
      get() {
        return this.$$c?.[a];
      }
    });
  }), e.element = /** @type {any} */
  s, s;
}
var Jp = { value: () => {
} };
function Vi() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new qo(n);
}
function qo(e) {
  this._ = e;
}
function eh(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
qo.prototype = Vi.prototype = {
  constructor: qo,
  on: function(e, t) {
    var n = this._, r = eh(e + "", n), o, i = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++i < s; ) if ((o = (e = r[i]).type) && (o = th(n[o], e.name))) return o;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++i < s; )
      if (o = (e = r[i]).type) n[o] = za(n[o], e.name, t);
      else if (t == null) for (o in n) n[o] = za(n[o], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t) e[n] = t[n].slice();
    return new qo(e);
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
function za(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = Jp, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var vs = "http://www.w3.org/1999/xhtml";
const Aa = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: vs,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Di(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), Aa.hasOwnProperty(t) ? { space: Aa[t], local: e } : e;
}
function nh(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === vs && t.documentElement.namespaceURI === vs ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function rh(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function Au(e) {
  var t = Di(e);
  return (t.local ? rh : nh)(t);
}
function oh() {
}
function Us(e) {
  return e == null ? oh : function() {
    return this.querySelector(e);
  };
}
function ih(e) {
  typeof e != "function" && (e = Us(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = new Array(s), l, u, d = 0; d < s; ++d)
      (l = i[d]) && (u = e.call(l, l.__data__, d, i)) && ("__data__" in l && (u.__data__ = l.__data__), a[d] = u);
  return new At(r, this._parents);
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
  return new At(r, o);
}
function Iu(e) {
  return function() {
    return this.matches(e);
  };
}
function Zu(e) {
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
  return this.select(e == null ? fh : dh(typeof e == "function" ? e : Zu(e)));
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
  return this.selectAll(e == null ? gh : vh(typeof e == "function" ? e : Zu(e)));
}
function yh(e) {
  typeof e != "function" && (e = Iu(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && a.push(l);
  return new At(r, this._parents);
}
function ju(e) {
  return new Array(e.length);
}
function wh() {
  return new At(this._enter || this._groups.map(ju), this._parents);
}
function si(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
si.prototype = {
  constructor: si,
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
    (a = t[s]) ? (a.__data__ = i[s], r[s] = a) : n[s] = new si(e, i[s]);
  for (; s < l; ++s)
    (a = t[s]) && (o[s] = a);
}
function Ch(e, t, n, r, o, i, s) {
  var a, l, u = /* @__PURE__ */ new Map(), d = t.length, p = i.length, f = new Array(d), h;
  for (a = 0; a < d; ++a)
    (l = t[a]) && (f[a] = h = s.call(l, l.__data__, a, t) + "", u.has(h) ? o[a] = l : u.set(h, l));
  for (a = 0; a < p; ++a)
    h = s.call(e, i[a], a, i) + "", (l = u.get(h)) ? (r[a] = l, l.__data__ = i[a], u.delete(h)) : n[a] = new si(e, i[a]);
  for (a = 0; a < d; ++a)
    (l = t[a]) && u.get(f[a]) === l && (o[a] = l);
}
function $h(e) {
  return e.__data__;
}
function _h(e, t) {
  if (!arguments.length) return Array.from(this, $h);
  var n = t ? Ch : xh, r = this._parents, o = this._groups;
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
  return s = new At(s, r), s._enter = a, s._exit = l, s;
}
function kh(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Sh() {
  return new At(this._exit || this._groups.map(ju), this._parents);
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
  return new At(a, this._parents);
}
function Nh() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, i = r[o], s; --o >= 0; )
      (s = r[o]) && (i && s.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(s, i), i = s);
  return this;
}
function Mh(e) {
  e || (e = Th);
  function t(p, f) {
    return p && f ? e(p.__data__, f.__data__) : !p - !f;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), i = 0; i < r; ++i) {
    for (var s = n[i], a = s.length, l = o[i] = new Array(a), u, d = 0; d < a; ++d)
      (u = s[d]) && (l[d] = u);
    l.sort(t);
  }
  return new At(o, this._parents).order();
}
function Th(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Lh() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function Vh() {
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
function Ah(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], i = 0, s = o.length, a; i < s; ++i)
      (a = o[i]) && e.call(a, a.__data__, i, o);
  return this;
}
function Hh(e) {
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
  var n = Di(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? Ih : Hh : typeof t == "function" ? n.local ? Rh : Kh : n.local ? jh : Zh)(n, t));
}
function Ku(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function Wh(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Yh(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function Fh(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function qh(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? Wh : typeof t == "function" ? Fh : Yh)(e, t, n ?? "")) : Dr(this.node(), e);
}
function Dr(e, t) {
  return e.style.getPropertyValue(t) || Ku(e).getComputedStyle(e, null).getPropertyValue(t);
}
function Xh(e) {
  return function() {
    delete this[e];
  };
}
function Gh(e, t) {
  return function() {
    this[e] = t;
  };
}
function Uh(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function Qh(e, t) {
  return arguments.length > 1 ? this.each((t == null ? Xh : typeof t == "function" ? Uh : Gh)(e, t)) : this.node()[e];
}
function Ru(e) {
  return e.trim().split(/^|\s+/);
}
function Qs(e) {
  return e.classList || new Bu(e);
}
function Bu(e) {
  this._node = e, this._names = Ru(e.getAttribute("class") || "");
}
Bu.prototype = {
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
function Wu(e, t) {
  for (var n = Qs(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function Yu(e, t) {
  for (var n = Qs(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
}
function Jh(e) {
  return function() {
    Wu(this, e);
  };
}
function eg(e) {
  return function() {
    Yu(this, e);
  };
}
function tg(e, t) {
  return function() {
    (t.apply(this, arguments) ? Wu : Yu)(this, e);
  };
}
function ng(e, t) {
  var n = Ru(e + "");
  if (arguments.length < 2) {
    for (var r = Qs(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? tg : t ? Jh : eg)(n, t));
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
  var t = typeof e == "function" ? e : Au(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function vg() {
  return null;
}
function mg(e, t) {
  var n = typeof e == "function" ? e : Au(e), r = t == null ? vg : typeof t == "function" ? t : Us(t);
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
function Cg(e) {
  return this.select(e ? xg : bg);
}
function $g(e) {
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
function Fu(e, t, n) {
  var r = Ku(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function Ng(e, t) {
  return function() {
    return Fu(this, e, t);
  };
}
function Mg(e, t) {
  return function() {
    return Fu(this, e, t.apply(this, arguments));
  };
}
function Tg(e, t) {
  return this.each((typeof t == "function" ? Mg : Ng)(e, t));
}
function* Lg() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length, s; o < i; ++o)
      (s = r[o]) && (yield s);
}
var qu = [null];
function At(e, t) {
  this._groups = e, this._parents = t;
}
function _o() {
  return new At([[document.documentElement]], qu);
}
function Vg() {
  return this;
}
At.prototype = _o.prototype = {
  constructor: At,
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
  selection: Vg,
  order: Nh,
  sort: Mh,
  call: Lh,
  nodes: Vh,
  node: Dh,
  size: Oh,
  empty: zh,
  each: Ah,
  attr: Bh,
  style: qh,
  property: Qh,
  classed: ng,
  text: sg,
  html: cg,
  raise: fg,
  lower: hg,
  append: gg,
  insert: mg,
  remove: wg,
  clone: Cg,
  datum: $g,
  on: Pg,
  dispatch: Tg,
  [Symbol.iterator]: Lg
};
function Kt(e) {
  return typeof e == "string" ? new At([[document.querySelector(e)]], [document.documentElement]) : new At([[e]], qu);
}
function Dg(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function qt(e, t) {
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
const Og = { passive: !1 }, io = { capture: !0, passive: !1 };
function qi(e) {
  e.stopImmediatePropagation();
}
function kr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Xu(e) {
  var t = e.document.documentElement, n = Kt(e).on("dragstart.drag", kr, io);
  "onselectstart" in t ? n.on("selectstart.drag", kr, io) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function Gu(e, t) {
  var n = e.document.documentElement, r = Kt(e).on("dragstart.drag", null);
  t && (r.on("click.drag", kr, io), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const Io = (e) => () => e;
function ms(e, {
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
ms.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function zg(e) {
  return !e.ctrlKey && !e.button;
}
function Ag() {
  return this.parentNode;
}
function Hg(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function Ig() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Zg() {
  var e = zg, t = Ag, n = Hg, r = Ig, o = {}, i = Vi("start", "drag", "end"), s = 0, a, l, u, d, p = 0;
  function f(x) {
    x.on("mousedown.drag", h).filter(r).on("touchstart.drag", m).on("touchmove.drag", b, Og).on("touchend.drag touchcancel.drag", $).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function h(x, k) {
    if (!(d || !e.call(this, x, k))) {
      var N = _(this, t.call(this, x, k), x, k, "mouse");
      N && (Kt(x.view).on("mousemove.drag", y, io).on("mouseup.drag", w, io), Xu(x.view), qi(x), u = !1, a = x.clientX, l = x.clientY, N("start", x));
    }
  }
  function y(x) {
    if (kr(x), !u) {
      var k = x.clientX - a, N = x.clientY - l;
      u = k * k + N * N > p;
    }
    o.mouse("drag", x);
  }
  function w(x) {
    Kt(x.view).on("mousemove.drag mouseup.drag", null), Gu(x.view, u), kr(x), o.mouse("end", x);
  }
  function m(x, k) {
    if (e.call(this, x, k)) {
      var N = x.changedTouches, V = t.call(this, x, k), j = N.length, A, H;
      for (A = 0; A < j; ++A)
        (H = _(this, V, x, k, N[A].identifier, N[A])) && (qi(x), H("start", x, N[A]));
    }
  }
  function b(x) {
    var k = x.changedTouches, N = k.length, V, j;
    for (V = 0; V < N; ++V)
      (j = o[k[V].identifier]) && (kr(x), j("drag", x, k[V]));
  }
  function $(x) {
    var k = x.changedTouches, N = k.length, V, j;
    for (d && clearTimeout(d), d = setTimeout(function() {
      d = null;
    }, 500), V = 0; V < N; ++V)
      (j = o[k[V].identifier]) && (qi(x), j("end", x, k[V]));
  }
  function _(x, k, N, V, j, A) {
    var H = i.copy(), z = qt(A || N, k), S, T, C;
    if ((C = n.call(x, new ms("beforestart", {
      sourceEvent: N,
      target: f,
      identifier: j,
      active: s,
      x: z[0],
      y: z[1],
      dx: 0,
      dy: 0,
      dispatch: H
    }), V)) != null)
      return S = C.x - z[0] || 0, T = C.y - z[1] || 0, function P(M, K, B) {
        var W = z, D;
        switch (M) {
          case "start":
            o[j] = P, D = s++;
            break;
          case "end":
            delete o[j], --s;
          // falls through
          case "drag":
            z = qt(B || K, k), D = s;
            break;
        }
        H.call(
          M,
          x,
          new ms(M, {
            sourceEvent: K,
            subject: C,
            target: f,
            identifier: j,
            active: D,
            x: z[0] + S,
            y: z[1] + T,
            dx: z[0] - W[0],
            dy: z[1] - W[1],
            dispatch: H
          }),
          V
        );
      };
  }
  return f.filter = function(x) {
    return arguments.length ? (e = typeof x == "function" ? x : Io(!!x), f) : e;
  }, f.container = function(x) {
    return arguments.length ? (t = typeof x == "function" ? x : Io(x), f) : t;
  }, f.subject = function(x) {
    return arguments.length ? (n = typeof x == "function" ? x : Io(x), f) : n;
  }, f.touchable = function(x) {
    return arguments.length ? (r = typeof x == "function" ? x : Io(!!x), f) : r;
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
function Uu(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function ko() {
}
var so = 0.7, ai = 1 / so, Sr = "\\s*([+-]?\\d+)\\s*", ao = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", pn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", jg = /^#([0-9a-f]{3,8})$/, Kg = new RegExp(`^rgb\\(${Sr},${Sr},${Sr}\\)$`), Rg = new RegExp(`^rgb\\(${pn},${pn},${pn}\\)$`), Bg = new RegExp(`^rgba\\(${Sr},${Sr},${Sr},${ao}\\)$`), Wg = new RegExp(`^rgba\\(${pn},${pn},${pn},${ao}\\)$`), Yg = new RegExp(`^hsl\\(${ao},${pn},${pn}\\)$`), Fg = new RegExp(`^hsla\\(${ao},${pn},${pn},${ao}\\)$`), Ha = {
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
Js(ko, fr, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Ia,
  // Deprecated! Use color.formatHex.
  formatHex: Ia,
  formatHex8: qg,
  formatHsl: Xg,
  formatRgb: Za,
  toString: Za
});
function Ia() {
  return this.rgb().formatHex();
}
function qg() {
  return this.rgb().formatHex8();
}
function Xg() {
  return Qu(this).formatHsl();
}
function Za() {
  return this.rgb().formatRgb();
}
function fr(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = jg.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? ja(t) : n === 3 ? new _t(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Zo(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Zo(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Kg.exec(e)) ? new _t(t[1], t[2], t[3], 1) : (t = Rg.exec(e)) ? new _t(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Bg.exec(e)) ? Zo(t[1], t[2], t[3], t[4]) : (t = Wg.exec(e)) ? Zo(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Yg.exec(e)) ? Ba(t[1], t[2] / 100, t[3] / 100, 1) : (t = Fg.exec(e)) ? Ba(t[1], t[2] / 100, t[3] / 100, t[4]) : Ha.hasOwnProperty(e) ? ja(Ha[e]) : e === "transparent" ? new _t(NaN, NaN, NaN, 0) : null;
}
function ja(e) {
  return new _t(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Zo(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new _t(e, t, n, r);
}
function Gg(e) {
  return e instanceof ko || (e = fr(e)), e ? (e = e.rgb(), new _t(e.r, e.g, e.b, e.opacity)) : new _t();
}
function ys(e, t, n, r) {
  return arguments.length === 1 ? Gg(e) : new _t(e, t, n, r ?? 1);
}
function _t(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
Js(_t, ys, Uu(ko, {
  brighter(e) {
    return e = e == null ? ai : Math.pow(ai, e), new _t(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? so : Math.pow(so, e), new _t(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new _t(lr(this.r), lr(this.g), lr(this.b), li(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Ka,
  // Deprecated! Use color.formatHex.
  formatHex: Ka,
  formatHex8: Ug,
  formatRgb: Ra,
  toString: Ra
}));
function Ka() {
  return `#${ir(this.r)}${ir(this.g)}${ir(this.b)}`;
}
function Ug() {
  return `#${ir(this.r)}${ir(this.g)}${ir(this.b)}${ir((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Ra() {
  const e = li(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${lr(this.r)}, ${lr(this.g)}, ${lr(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function li(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function lr(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function ir(e) {
  return e = lr(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Ba(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Xt(e, t, n, r);
}
function Qu(e) {
  if (e instanceof Xt) return new Xt(e.h, e.s, e.l, e.opacity);
  if (e instanceof ko || (e = fr(e)), !e) return new Xt();
  if (e instanceof Xt) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), s = NaN, a = i - o, l = (i + o) / 2;
  return a ? (t === i ? s = (n - r) / a + (n < r) * 6 : n === i ? s = (r - t) / a + 2 : s = (t - n) / a + 4, a /= l < 0.5 ? i + o : 2 - i - o, s *= 60) : a = l > 0 && l < 1 ? 0 : s, new Xt(s, a, l, e.opacity);
}
function Qg(e, t, n, r) {
  return arguments.length === 1 ? Qu(e) : new Xt(e, t, n, r ?? 1);
}
function Xt(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
Js(Xt, Qg, Uu(ko, {
  brighter(e) {
    return e = e == null ? ai : Math.pow(ai, e), new Xt(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? so : Math.pow(so, e), new Xt(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new _t(
      Xi(e >= 240 ? e - 240 : e + 120, o, r),
      Xi(e, o, r),
      Xi(e < 120 ? e + 240 : e - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new Xt(Wa(this.h), jo(this.s), jo(this.l), li(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = li(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Wa(this.h)}, ${jo(this.s) * 100}%, ${jo(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Wa(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function jo(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Xi(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const ea = (e) => () => e;
function Jg(e, t) {
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
  return (e = +e) == 1 ? Ju : function(t, n) {
    return n - t ? e1(t, n, e) : ea(isNaN(t) ? n : t);
  };
}
function Ju(e, t) {
  var n = t - e;
  return n ? Jg(e, n) : ea(isNaN(e) ? t : e);
}
const ui = function e(t) {
  var n = t1(t);
  function r(o, i) {
    var s = n((o = ys(o)).r, (i = ys(i)).r), a = n(o.g, i.g), l = n(o.b, i.b), u = Ju(o.opacity, i.opacity);
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
  for (s = 0; s < r; ++s) o[s] = eo(e[s], t[s]);
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
function un(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function s1(e, t) {
  var n = {}, r = {}, o;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (o in t)
    o in e ? n[o] = eo(e[o], t[o]) : r[o] = t[o];
  return function(i) {
    for (o in n) r[o] = n[o](i);
    return r;
  };
}
var ws = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Gi = new RegExp(ws.source, "g");
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
function ec(e, t) {
  var n = ws.lastIndex = Gi.lastIndex = 0, r, o, i, s = -1, a = [], l = [];
  for (e = e + "", t = t + ""; (r = ws.exec(e)) && (o = Gi.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), a[s] ? a[s] += i : a[++s] = i), (r = r[0]) === (o = o[0]) ? a[s] ? a[s] += o : a[++s] = o : (a[++s] = null, l.push({ i: s, x: un(r, o) })), n = Gi.lastIndex;
  return n < t.length && (i = t.slice(n), a[s] ? a[s] += i : a[++s] = i), a.length < 2 ? l[0] ? l1(l[0].x) : a1(t) : (t = l.length, function(u) {
    for (var d = 0, p; d < t; ++d) a[(p = l[d]).i] = p.x(u);
    return a.join("");
  });
}
function eo(e, t) {
  var n = typeof t, r;
  return t == null || n === "boolean" ? ea(t) : (n === "number" ? un : n === "string" ? (r = fr(t)) ? (t = r, ui) : ec : t instanceof fr ? ui : t instanceof Date ? i1 : r1(t) ? n1 : Array.isArray(t) ? o1 : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? s1 : un)(e, t);
}
var Ya = 180 / Math.PI, tc = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function nc(e, t, n, r, o, i) {
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
var Ko;
function u1(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? tc : nc(t.a, t.b, t.c, t.d, t.e, t.f);
}
function c1(e) {
  return e == null || (Ko || (Ko = document.createElementNS("http://www.w3.org/2000/svg", "g")), Ko.setAttribute("transform", e), !(e = Ko.transform.baseVal.consolidate())) ? tc : (e = e.matrix, nc(e.a, e.b, e.c, e.d, e.e, e.f));
}
function rc(e, t, n, r) {
  function o(u) {
    return u.length ? u.pop() + " " : "";
  }
  function i(u, d, p, f, h, y) {
    if (u !== p || d !== f) {
      var w = h.push("translate(", null, t, null, n);
      y.push({ i: w - 4, x: un(u, p) }, { i: w - 2, x: un(d, f) });
    } else (p || f) && h.push("translate(" + p + t + f + n);
  }
  function s(u, d, p, f) {
    u !== d ? (u - d > 180 ? d += 360 : d - u > 180 && (u += 360), f.push({ i: p.push(o(p) + "rotate(", null, r) - 2, x: un(u, d) })) : d && p.push(o(p) + "rotate(" + d + r);
  }
  function a(u, d, p, f) {
    u !== d ? f.push({ i: p.push(o(p) + "skewX(", null, r) - 2, x: un(u, d) }) : d && p.push(o(p) + "skewX(" + d + r);
  }
  function l(u, d, p, f, h, y) {
    if (u !== p || d !== f) {
      var w = h.push(o(h) + "scale(", null, ",", null, ")");
      y.push({ i: w - 4, x: un(u, p) }, { i: w - 2, x: un(d, f) });
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
var d1 = rc(u1, "px, ", "px)", "deg)"), f1 = rc(c1, ", ", ")", ")"), p1 = 1e-12;
function Fa(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function h1(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function g1(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const Xo = function e(t, n, r) {
  function o(i, s) {
    var a = i[0], l = i[1], u = i[2], d = s[0], p = s[1], f = s[2], h = d - a, y = p - l, w = h * h + y * y, m, b;
    if (w < p1)
      b = Math.log(f / u) / t, m = function(V) {
        return [
          a + V * h,
          l + V * y,
          u * Math.exp(t * V * b)
        ];
      };
    else {
      var $ = Math.sqrt(w), _ = (f * f - u * u + r * w) / (2 * u * n * $), x = (f * f - u * u - r * w) / (2 * f * n * $), k = Math.log(Math.sqrt(_ * _ + 1) - _), N = Math.log(Math.sqrt(x * x + 1) - x);
      b = (N - k) / t, m = function(V) {
        var j = V * b, A = Fa(k), H = u / (n * $) * (A * g1(t * j + k) - h1(k));
        return [
          a + H * h,
          l + H * y,
          u * A / Fa(t * j + k)
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
var Or = 0, Xr = 0, Yr = 0, oc = 1e3, ci, Gr, di = 0, pr = 0, Oi = 0, lo = typeof performance == "object" && performance.now ? performance : Date, ic = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function ta() {
  return pr || (ic(v1), pr = lo.now() + Oi);
}
function v1() {
  pr = 0;
}
function fi() {
  this._call = this._time = this._next = null;
}
fi.prototype = sc.prototype = {
  constructor: fi,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? ta() : +n) + (t == null ? 0 : +t), !this._next && Gr !== this && (Gr ? Gr._next = this : ci = this, Gr = this), this._call = e, this._time = n, bs();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, bs());
  }
};
function sc(e, t, n) {
  var r = new fi();
  return r.restart(e, t, n), r;
}
function m1() {
  ta(), ++Or;
  for (var e = ci, t; e; )
    (t = pr - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --Or;
}
function qa() {
  pr = (di = lo.now()) + Oi, Or = Xr = 0;
  try {
    m1();
  } finally {
    Or = 0, w1(), pr = 0;
  }
}
function y1() {
  var e = lo.now(), t = e - di;
  t > oc && (Oi -= t, di = e);
}
function w1() {
  for (var e, t = ci, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : ci = n);
  Gr = e, bs(r);
}
function bs(e) {
  if (!Or) {
    Xr && (Xr = clearTimeout(Xr));
    var t = e - pr;
    t > 24 ? (e < 1 / 0 && (Xr = setTimeout(qa, e - lo.now() - Oi)), Yr && (Yr = clearInterval(Yr))) : (Yr || (di = lo.now(), Yr = setInterval(y1, oc)), Or = 1, ic(qa));
  }
}
function Xa(e, t, n) {
  var r = new fi();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var b1 = Vi("start", "end", "cancel", "interrupt"), x1 = [], ac = 0, Ga = 1, xs = 2, Go = 3, Ua = 4, Cs = 5, Uo = 6;
function zi(e, t, n, r, o, i) {
  var s = e.__transition;
  if (!s) e.__transition = {};
  else if (n in s) return;
  C1(e, n, {
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
    state: ac
  });
}
function na(e, t) {
  var n = nn(e, t);
  if (n.state > ac) throw new Error("too late; already scheduled");
  return n;
}
function mn(e, t) {
  var n = nn(e, t);
  if (n.state > Go) throw new Error("too late; already running");
  return n;
}
function nn(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function C1(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = sc(i, 0, n.time);
  function i(u) {
    n.state = Ga, n.timer.restart(s, n.delay, n.time), n.delay <= u && s(u - n.delay);
  }
  function s(u) {
    var d, p, f, h;
    if (n.state !== Ga) return l();
    for (d in r)
      if (h = r[d], h.name === n.name) {
        if (h.state === Go) return Xa(s);
        h.state === Ua ? (h.state = Uo, h.timer.stop(), h.on.call("interrupt", e, e.__data__, h.index, h.group), delete r[d]) : +d < t && (h.state = Uo, h.timer.stop(), h.on.call("cancel", e, e.__data__, h.index, h.group), delete r[d]);
      }
    if (Xa(function() {
      n.state === Go && (n.state = Ua, n.timer.restart(a, n.delay, n.time), a(u));
    }), n.state = xs, n.on.call("start", e, e.__data__, n.index, n.group), n.state === xs) {
      for (n.state = Go, o = new Array(f = n.tween.length), d = 0, p = -1; d < f; ++d)
        (h = n.tween[d].value.call(e, e.__data__, n.index, n.group)) && (o[++p] = h);
      o.length = p + 1;
    }
  }
  function a(u) {
    for (var d = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), n.state = Cs, 1), p = -1, f = o.length; ++p < f; )
      o[p].call(e, d);
    n.state === Cs && (n.on.call("end", e, e.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = Uo, n.timer.stop(), delete r[t];
    for (var u in r) return;
    delete e.__transition;
  }
}
function Qo(e, t) {
  var n = e.__transition, r, o, i = !0, s;
  if (n) {
    t = t == null ? null : t + "";
    for (s in n) {
      if ((r = n[s]).name !== t) {
        i = !1;
        continue;
      }
      o = r.state > xs && r.state < Cs, r.state = Uo, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[s];
    }
    i && delete e.__transition;
  }
}
function $1(e) {
  return this.each(function() {
    Qo(this, e);
  });
}
function _1(e, t) {
  var n, r;
  return function() {
    var o = mn(this, e), i = o.tween;
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
    var i = mn(this, e), s = i.tween;
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
function ra(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = mn(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return nn(o, r).value[t];
  };
}
function lc(e, t) {
  var n;
  return (typeof t == "number" ? un : t instanceof fr ? ui : (n = fr(t)) ? (t = n, ui) : ec)(e, t);
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
function M1(e, t, n) {
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
function L1(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttributeNS(e.space, e.local) : (s = this.getAttributeNS(e.space, e.local), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a)));
  };
}
function V1(e, t) {
  var n = Di(e), r = n === "transform" ? f1 : lc;
  return this.attrTween(e, typeof t == "function" ? (n.local ? L1 : T1)(n, r, ra(this, "attr." + e, t)) : t == null ? (n.local ? P1 : E1)(n) : (n.local ? M1 : N1)(n, r, t));
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
function A1(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && D1(e, i)), n;
  }
  return o._value = t, o;
}
function H1(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = Di(e);
  return this.tween(n, (r.local ? z1 : A1)(r, t));
}
function I1(e, t) {
  return function() {
    na(this, e).delay = +t.apply(this, arguments);
  };
}
function Z1(e, t) {
  return t = +t, function() {
    na(this, e).delay = t;
  };
}
function j1(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? I1 : Z1)(t, e)) : nn(this.node(), t).delay;
}
function K1(e, t) {
  return function() {
    mn(this, e).duration = +t.apply(this, arguments);
  };
}
function R1(e, t) {
  return t = +t, function() {
    mn(this, e).duration = t;
  };
}
function B1(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? K1 : R1)(t, e)) : nn(this.node(), t).duration;
}
function W1(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    mn(this, e).ease = t;
  };
}
function Y1(e) {
  var t = this._id;
  return arguments.length ? this.each(W1(t, e)) : nn(this.node(), t).ease;
}
function F1(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    mn(this, e).ease = n;
  };
}
function q1(e) {
  if (typeof e != "function") throw new Error();
  return this.each(F1(this._id, e));
}
function X1(e) {
  typeof e != "function" && (e = Iu(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && a.push(l);
  return new Tn(r, this._parents, this._name, this._id);
}
function G1(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), s = new Array(r), a = 0; a < i; ++a)
    for (var l = t[a], u = n[a], d = l.length, p = s[a] = new Array(d), f, h = 0; h < d; ++h)
      (f = l[h] || u[h]) && (p[h] = f);
  for (; a < r; ++a)
    s[a] = t[a];
  return new Tn(s, this._parents, this._name, this._id);
}
function U1(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function Q1(e, t, n) {
  var r, o, i = U1(t) ? na : mn;
  return function() {
    var s = i(this, e), a = s.on;
    a !== r && (o = (r = a).copy()).on(t, n), s.on = o;
  };
}
function J1(e, t) {
  var n = this._id;
  return arguments.length < 2 ? nn(this.node(), n).on.on(e) : this.each(Q1(n, e, t));
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
  typeof e != "function" && (e = Us(e));
  for (var r = this._groups, o = r.length, i = new Array(o), s = 0; s < o; ++s)
    for (var a = r[s], l = a.length, u = i[s] = new Array(l), d, p, f = 0; f < l; ++f)
      (d = a[f]) && (p = e.call(d, d.__data__, f, a)) && ("__data__" in d && (p.__data__ = d.__data__), u[f] = p, zi(u[f], t, n, f, u, nn(d, n)));
  return new Tn(i, this._parents, t, n);
}
function rv(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Hu(e));
  for (var r = this._groups, o = r.length, i = [], s = [], a = 0; a < o; ++a)
    for (var l = r[a], u = l.length, d, p = 0; p < u; ++p)
      if (d = l[p]) {
        for (var f = e.call(d, d.__data__, p, l), h, y = nn(d, n), w = 0, m = f.length; w < m; ++w)
          (h = f[w]) && zi(h, t, n, w, f, y);
        i.push(f), s.push(d);
      }
  return new Tn(i, s, t, n);
}
var ov = _o.prototype.constructor;
function iv() {
  return new ov(this._groups, this._parents);
}
function sv(e, t) {
  var n, r, o;
  return function() {
    var i = Dr(this, e), s = (this.style.removeProperty(e), Dr(this, e));
    return i === s ? null : i === n && s === r ? o : o = t(n = i, r = s);
  };
}
function uc(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function av(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = Dr(this, e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function lv(e, t, n) {
  var r, o, i;
  return function() {
    var s = Dr(this, e), a = n(this), l = a + "";
    return a == null && (l = a = (this.style.removeProperty(e), Dr(this, e))), s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a));
  };
}
function uv(e, t) {
  var n, r, o, i = "style." + t, s = "end." + i, a;
  return function() {
    var l = mn(this, e), u = l.on, d = l.value[i] == null ? a || (a = uc(t)) : void 0;
    (u !== n || o !== d) && (r = (n = u).copy()).on(s, o = d), l.on = r;
  };
}
function cv(e, t, n) {
  var r = (e += "") == "transform" ? d1 : lc;
  return t == null ? this.styleTween(e, sv(e, r)).on("end.style." + e, uc(e)) : typeof t == "function" ? this.styleTween(e, lv(e, r, ra(this, "style." + e, t))).each(uv(this._id, e)) : this.styleTween(e, av(e, r, t), n).on("end.style." + e, null);
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
  return this.tween("text", typeof e == "function" ? gv(ra(this, "text", e)) : hv(e == null ? "" : e + ""));
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
  for (var e = this._name, t = this._id, n = cc(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, u = 0; u < a; ++u)
      if (l = s[u]) {
        var d = nn(l, t);
        zi(l, e, n, u, s, {
          time: d.time + d.delay + d.duration,
          delay: 0,
          duration: d.duration,
          ease: d.ease
        });
      }
  return new Tn(r, this._parents, e, n);
}
function xv() {
  var e, t, n = this, r = n._id, o = n.size();
  return new Promise(function(i, s) {
    var a = { value: s }, l = { value: function() {
      --o === 0 && i();
    } };
    n.each(function() {
      var u = mn(this, r), d = u.on;
      d !== e && (t = (e = d).copy(), t._.cancel.push(a), t._.interrupt.push(a), t._.end.push(l)), u.on = t;
    }), o === 0 && i();
  });
}
var Cv = 0;
function Tn(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function cc() {
  return ++Cv;
}
var wn = _o.prototype;
Tn.prototype = {
  constructor: Tn,
  select: nv,
  selectAll: rv,
  selectChild: wn.selectChild,
  selectChildren: wn.selectChildren,
  filter: X1,
  merge: G1,
  selection: iv,
  transition: bv,
  call: wn.call,
  nodes: wn.nodes,
  node: wn.node,
  size: wn.size,
  empty: wn.empty,
  each: wn.each,
  on: J1,
  attr: V1,
  attrTween: H1,
  style: cv,
  styleTween: pv,
  text: vv,
  textTween: wv,
  remove: tv,
  tween: S1,
  delay: j1,
  duration: B1,
  ease: Y1,
  easeVarying: q1,
  end: xv,
  [Symbol.iterator]: wn[Symbol.iterator]
};
function $v(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var _v = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: $v
};
function kv(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function Sv(e) {
  var t, n;
  e instanceof Tn ? (t = e._id, e = e._name) : (t = cc(), (n = _v).time = ta(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && zi(l, e, t, u, s, n || kv(l, t));
  return new Tn(r, this._parents, e, t);
}
_o.prototype.interrupt = $1;
_o.prototype.transition = Sv;
const Ro = (e) => () => e;
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
function $n(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
$n.prototype = {
  constructor: $n,
  scale: function(e) {
    return e === 1 ? this : new $n(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new $n(this.k, this.x + this.k * e, this.y + this.k * t);
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
var Ai = new $n(1, 0, 0);
dc.prototype = $n.prototype;
function dc(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return Ai;
  return e.__zoom;
}
function Ui(e) {
  e.stopImmediatePropagation();
}
function Fr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Pv(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function Nv() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function Qa() {
  return this.__zoom || Ai;
}
function Mv(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function Tv() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Lv(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0], o = e.invertX(t[1][0]) - n[1][0], i = e.invertY(t[0][1]) - n[0][1], s = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    s > i ? (i + s) / 2 : Math.min(0, i) || Math.max(0, s)
  );
}
function fc() {
  var e = Pv, t = Nv, n = Lv, r = Mv, o = Tv, i = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], a = 250, l = Xo, u = Vi("start", "zoom", "end"), d, p, f, h = 500, y = 150, w = 0, m = 10;
  function b(C) {
    C.property("__zoom", Qa).on("wheel.zoom", j, { passive: !1 }).on("mousedown.zoom", A).on("dblclick.zoom", H).filter(o).on("touchstart.zoom", z).on("touchmove.zoom", S).on("touchend.zoom touchcancel.zoom", T).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  b.transform = function(C, P, M, K) {
    var B = C.selection ? C.selection() : C;
    B.property("__zoom", Qa), C !== B ? k(C, P, M, K) : B.interrupt().each(function() {
      N(this, arguments).event(K).start().zoom(null, typeof P == "function" ? P.apply(this, arguments) : P).end();
    });
  }, b.scaleBy = function(C, P, M, K) {
    b.scaleTo(C, function() {
      var B = this.__zoom.k, W = typeof P == "function" ? P.apply(this, arguments) : P;
      return B * W;
    }, M, K);
  }, b.scaleTo = function(C, P, M, K) {
    b.transform(C, function() {
      var B = t.apply(this, arguments), W = this.__zoom, D = M == null ? x(B) : typeof M == "function" ? M.apply(this, arguments) : M, X = W.invert(D), q = typeof P == "function" ? P.apply(this, arguments) : P;
      return n(_($(W, q), D, X), B, s);
    }, M, K);
  }, b.translateBy = function(C, P, M, K) {
    b.transform(C, function() {
      return n(this.__zoom.translate(
        typeof P == "function" ? P.apply(this, arguments) : P,
        typeof M == "function" ? M.apply(this, arguments) : M
      ), t.apply(this, arguments), s);
    }, null, K);
  }, b.translateTo = function(C, P, M, K, B) {
    b.transform(C, function() {
      var W = t.apply(this, arguments), D = this.__zoom, X = K == null ? x(W) : typeof K == "function" ? K.apply(this, arguments) : K;
      return n(Ai.translate(X[0], X[1]).scale(D.k).translate(
        typeof P == "function" ? -P.apply(this, arguments) : -P,
        typeof M == "function" ? -M.apply(this, arguments) : -M
      ), W, s);
    }, K, B);
  };
  function $(C, P) {
    return P = Math.max(i[0], Math.min(i[1], P)), P === C.k ? C : new $n(P, C.x, C.y);
  }
  function _(C, P, M) {
    var K = P[0] - M[0] * C.k, B = P[1] - M[1] * C.k;
    return K === C.x && B === C.y ? C : new $n(C.k, K, B);
  }
  function x(C) {
    return [(+C[0][0] + +C[1][0]) / 2, (+C[0][1] + +C[1][1]) / 2];
  }
  function k(C, P, M, K) {
    C.on("start.zoom", function() {
      N(this, arguments).event(K).start();
    }).on("interrupt.zoom end.zoom", function() {
      N(this, arguments).event(K).end();
    }).tween("zoom", function() {
      var B = this, W = arguments, D = N(B, W).event(K), X = t.apply(B, W), q = M == null ? x(X) : typeof M == "function" ? M.apply(B, W) : M, U = Math.max(X[1][0] - X[0][0], X[1][1] - X[0][1]), I = B.__zoom, F = typeof P == "function" ? P.apply(B, W) : P, G = l(I.invert(q).concat(U / I.k), F.invert(q).concat(U / F.k));
      return function(te) {
        if (te === 1) te = F;
        else {
          var ne = G(te), J = U / ne[2];
          te = new $n(J, q[0] - ne[0] * J, q[1] - ne[1] * J);
        }
        D.zoom(null, te);
      };
    });
  }
  function N(C, P, M) {
    return !M && C.__zooming || new V(C, P);
  }
  function V(C, P) {
    this.that = C, this.args = P, this.active = 0, this.sourceEvent = null, this.extent = t.apply(C, P), this.taps = 0;
  }
  V.prototype = {
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
      var P = Kt(this.that).datum();
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
    var M = N(this, P).event(C), K = this.__zoom, B = Math.max(i[0], Math.min(i[1], K.k * Math.pow(2, r.apply(this, arguments)))), W = qt(C);
    if (M.wheel)
      (M.mouse[0][0] !== W[0] || M.mouse[0][1] !== W[1]) && (M.mouse[1] = K.invert(M.mouse[0] = W)), clearTimeout(M.wheel);
    else {
      if (K.k === B) return;
      M.mouse = [W, K.invert(W)], Qo(this), M.start();
    }
    Fr(C), M.wheel = setTimeout(D, y), M.zoom("mouse", n(_($(K, B), M.mouse[0], M.mouse[1]), M.extent, s));
    function D() {
      M.wheel = null, M.end();
    }
  }
  function A(C, ...P) {
    if (f || !e.apply(this, arguments)) return;
    var M = C.currentTarget, K = N(this, P, !0).event(C), B = Kt(C.view).on("mousemove.zoom", q, !0).on("mouseup.zoom", U, !0), W = qt(C, M), D = C.clientX, X = C.clientY;
    Xu(C.view), Ui(C), K.mouse = [W, this.__zoom.invert(W)], Qo(this), K.start();
    function q(I) {
      if (Fr(I), !K.moved) {
        var F = I.clientX - D, G = I.clientY - X;
        K.moved = F * F + G * G > w;
      }
      K.event(I).zoom("mouse", n(_(K.that.__zoom, K.mouse[0] = qt(I, M), K.mouse[1]), K.extent, s));
    }
    function U(I) {
      B.on("mousemove.zoom mouseup.zoom", null), Gu(I.view, K.moved), Fr(I), K.event(I).end();
    }
  }
  function H(C, ...P) {
    if (e.apply(this, arguments)) {
      var M = this.__zoom, K = qt(C.changedTouches ? C.changedTouches[0] : C, this), B = M.invert(K), W = M.k * (C.shiftKey ? 0.5 : 2), D = n(_($(M, W), K, B), t.apply(this, P), s);
      Fr(C), a > 0 ? Kt(this).transition().duration(a).call(k, D, K, C) : Kt(this).call(b.transform, D, K, C);
    }
  }
  function z(C, ...P) {
    if (e.apply(this, arguments)) {
      var M = C.touches, K = M.length, B = N(this, P, C.changedTouches.length === K).event(C), W, D, X, q;
      for (Ui(C), D = 0; D < K; ++D)
        X = M[D], q = qt(X, this), q = [q, this.__zoom.invert(q), X.identifier], B.touch0 ? !B.touch1 && B.touch0[2] !== q[2] && (B.touch1 = q, B.taps = 0) : (B.touch0 = q, W = !0, B.taps = 1 + !!d);
      d && (d = clearTimeout(d)), W && (B.taps < 2 && (p = q[0], d = setTimeout(function() {
        d = null;
      }, h)), Qo(this), B.start());
    }
  }
  function S(C, ...P) {
    if (this.__zooming) {
      var M = N(this, P).event(C), K = C.changedTouches, B = K.length, W, D, X, q;
      for (Fr(C), W = 0; W < B; ++W)
        D = K[W], X = qt(D, this), M.touch0 && M.touch0[2] === D.identifier ? M.touch0[0] = X : M.touch1 && M.touch1[2] === D.identifier && (M.touch1[0] = X);
      if (D = M.that.__zoom, M.touch1) {
        var U = M.touch0[0], I = M.touch0[1], F = M.touch1[0], G = M.touch1[1], te = (te = F[0] - U[0]) * te + (te = F[1] - U[1]) * te, ne = (ne = G[0] - I[0]) * ne + (ne = G[1] - I[1]) * ne;
        D = $(D, Math.sqrt(te / ne)), X = [(U[0] + F[0]) / 2, (U[1] + F[1]) / 2], q = [(I[0] + G[0]) / 2, (I[1] + G[1]) / 2];
      } else if (M.touch0) X = M.touch0[0], q = M.touch0[1];
      else return;
      M.zoom("touch", n(_(D, X, q), M.extent, s));
    }
  }
  function T(C, ...P) {
    if (this.__zooming) {
      var M = N(this, P).event(C), K = C.changedTouches, B = K.length, W, D;
      for (Ui(C), f && clearTimeout(f), f = setTimeout(function() {
        f = null;
      }, h), W = 0; W < B; ++W)
        D = K[W], M.touch0 && M.touch0[2] === D.identifier ? delete M.touch0 : M.touch1 && M.touch1[2] === D.identifier && delete M.touch1;
      if (M.touch1 && !M.touch0 && (M.touch0 = M.touch1, delete M.touch1), M.touch0) M.touch0[1] = this.__zoom.invert(M.touch0[0]);
      else if (M.end(), M.taps === 2 && (D = qt(D, this), Math.hypot(p[0] - D[0], p[1] - D[1]) < m)) {
        var X = Kt(this).on("dblclick.zoom");
        X && X.apply(this, arguments);
      }
    }
  }
  return b.wheelDelta = function(C) {
    return arguments.length ? (r = typeof C == "function" ? C : Ro(+C), b) : r;
  }, b.filter = function(C) {
    return arguments.length ? (e = typeof C == "function" ? C : Ro(!!C), b) : e;
  }, b.touchable = function(C) {
    return arguments.length ? (o = typeof C == "function" ? C : Ro(!!C), b) : o;
  }, b.extent = function(C) {
    return arguments.length ? (t = typeof C == "function" ? C : Ro([[+C[0][0], +C[0][1]], [+C[1][0], +C[1][1]]]), b) : t;
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
const uo = {
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
}, $s = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
], pc = ["Enter", " ", "Escape"], Vv = {
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
var zr;
(function(e) {
  e.Strict = "strict", e.Loose = "loose";
})(zr || (zr = {}));
var ur;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(ur || (ur = {}));
var pi;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(pi || (pi = {}));
const _s = {
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
var xn;
(function(e) {
  e.Bezier = "default", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e.SimpleBezier = "simplebezier";
})(xn || (xn = {}));
var co;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(co || (co = {}));
var me;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(me || (me = {}));
const Ja = {
  [me.Left]: me.Right,
  [me.Right]: me.Left,
  [me.Top]: me.Bottom,
  [me.Bottom]: me.Top
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
function el(e, t, n) {
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
const hc = (e) => "id" in e && "source" in e && "target" in e, zv = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), oa = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), So = (e, t = [0, 0]) => {
  const { width: n, height: r } = tr(e), o = e.origin ?? t, i = n * o[0], s = r * o[1];
  return {
    x: e.position.x - i,
    y: e.position.y - s
  };
}, Av = (e, t = { nodeOrigin: [0, 0] }) => {
  if (e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = e.reduce((r, o) => {
    const i = typeof o == "string";
    let s = !t.nodeLookup && !i ? o : void 0;
    t.nodeLookup && (s = i ? t.nodeLookup.get(o) : oa(o) ? o : t.nodeLookup.get(o.id));
    const a = s ? hi(s, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return Hi(r, a);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return Ii(n);
}, Eo = (e, t = {}) => {
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 }, r = !1;
  return e.forEach((o) => {
    (t.filter === void 0 || t.filter(o)) && (n = Hi(n, hi(o)), r = !0);
  }), r ? Ii(n) : { x: 0, y: 0, width: 0, height: 0 };
}, ia = (e, t, [n, r, o] = [0, 0, 1], i = !1, s = !1) => {
  const a = {
    ...No(t, [n, r, o]),
    width: t.width / o,
    height: t.height / o
  }, l = [];
  for (const u of e.values()) {
    const { measured: d, selectable: p = !0, hidden: f = !1 } = u;
    if (s && !p || f)
      continue;
    const h = d.width ?? u.width ?? u.initialWidth ?? null, y = d.height ?? u.height ?? u.initialHeight ?? null, w = fo(a, Hr(u)), m = (h ?? 0) * (y ?? 0), b = i && w > 0;
    (!u.internals.handleBounds || b || w >= m || u.dragging) && l.push(u);
  }
  return l;
}, Hv = (e, t) => {
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
  const a = Iv(e, s), l = Eo(a), u = sa(l, t, n, s?.minZoom ?? o, s?.maxZoom ?? i, s?.padding ?? 0.1);
  return await r.setViewport(u, {
    duration: s?.duration,
    ease: s?.ease,
    interpolate: s?.interpolate
  }), Promise.resolve(!0);
}
function gc({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
  const s = n.get(e), a = s.parentId ? n.get(s.parentId) : void 0, { x: l, y: u } = a ? a.internals.positionAbsolute : { x: 0, y: 0 }, d = s.origin ?? r;
  let p = s.extent || o;
  if (s.extent === "parent" && !s.expandParent)
    if (!a)
      i?.("005", uo.error005());
    else {
      const h = a.measured.width, y = a.measured.height;
      h && y && (p = [
        [l, u],
        [l + h, u + y]
      ]);
    }
  else a && Ir(s.extent) && (p = [
    [s.extent[0][0] + l, s.extent[0][1] + u],
    [s.extent[1][0] + l, s.extent[1][1] + u]
  ]);
  const f = Ir(p) ? hr(t, p, s.measured) : t;
  return (s.measured.width === void 0 || s.measured.height === void 0) && i?.("015", uo.error015()), {
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
  const a = new Set(t.map((p) => p.id)), l = r.filter((p) => p.deletable !== !1), u = Hv(s, l);
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
const Ar = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), hr = (e = { x: 0, y: 0 }, t, n) => ({
  x: Ar(e.x, t[0][0], t[1][0] - (n?.width ?? 0)),
  y: Ar(e.y, t[0][1], t[1][1] - (n?.height ?? 0))
});
function vc(e, t, n) {
  const { width: r, height: o } = tr(n), { x: i, y: s } = n.internals.positionAbsolute;
  return hr(e, [
    [i, s],
    [i + r, s + o]
  ], t);
}
const tl = (e, t, n) => e < t ? Ar(Math.abs(e - t), 1, t) / t : e > n ? -Ar(Math.abs(e - n), 1, t) / t : 0, mc = (e, t, n = 15, r = 40) => {
  const o = tl(e.x, r, t.width - r) * n, i = tl(e.y, r, t.height - r) * n;
  return [o, i];
}, Hi = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), ks = ({ x: e, y: t, width: n, height: r }) => ({
  x: e,
  y: t,
  x2: e + n,
  y2: t + r
}), Ii = ({ x: e, y: t, x2: n, y2: r }) => ({
  x: e,
  y: t,
  width: n - e,
  height: r - t
}), Hr = (e, t = [0, 0]) => {
  const { x: n, y: r } = oa(e) ? e.internals.positionAbsolute : So(e, t);
  return {
    x: n,
    y: r,
    width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
    height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
  };
}, hi = (e, t = [0, 0]) => {
  const { x: n, y: r } = oa(e) ? e.internals.positionAbsolute : So(e, t);
  return {
    x: n,
    y: r,
    x2: n + (e.measured?.width ?? e.width ?? e.initialWidth ?? 0),
    y2: r + (e.measured?.height ?? e.height ?? e.initialHeight ?? 0)
  };
}, yc = (e, t) => Ii(Hi(ks(e), ks(t))), fo = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, nl = (e) => _n(e.width) && _n(e.height) && _n(e.x) && _n(e.y), _n = (e) => !isNaN(e) && isFinite(e), Kv = (e, t) => {
}, Po = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), No = ({ x: e, y: t }, [n, r, o], i = !1, s = [1, 1]) => {
  const a = {
    x: (e - n) / o,
    y: (t - r) / o
  };
  return i ? Po(a, s) : a;
}, gi = ({ x: e, y: t }, [n, r, o]) => ({
  x: e * o + n,
  y: t * o + r
});
function xr(e, t) {
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
    const r = xr(e, n), o = xr(e, t);
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
    const r = xr(e.top ?? e.y ?? 0, n), o = xr(e.bottom ?? e.y ?? 0, n), i = xr(e.left ?? e.x ?? 0, t), s = xr(e.right ?? e.x ?? 0, t);
    return { top: r, right: s, bottom: o, left: i, x: i + s, y: r + o };
  }
  return { top: 0, right: 0, bottom: 0, left: 0, x: 0, y: 0 };
}
function Bv(e, t, n, r, o, i) {
  const { x: s, y: a } = gi(e, [t, n, r]), { x: l, y: u } = gi({ x: e.x + e.width, y: e.y + e.height }, [t, n, r]), d = o - l, p = i - u;
  return {
    left: Math.floor(s),
    top: Math.floor(a),
    right: Math.floor(d),
    bottom: Math.floor(p)
  };
}
const sa = (e, t, n, r, o, i) => {
  const s = Rv(i, t, n), a = (t - s.x) / e.width, l = (n - s.y) / e.height, u = Math.min(a, l), d = Ar(u, r, o), p = e.x + e.width / 2, f = e.y + e.height / 2, h = t / 2 - p * d, y = n / 2 - f * d, w = Bv(e, h, y, d, t, n), m = {
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
}, sr = () => typeof navigator < "u" && navigator?.userAgent?.indexOf("Mac") >= 0;
function Ir(e) {
  return e != null && e !== "parent";
}
function tr(e) {
  return {
    width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
    height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
  };
}
function wc(e) {
  return (e.measured?.width ?? e.width ?? e.initialWidth) !== void 0 && (e.measured?.height ?? e.height ?? e.initialHeight) !== void 0;
}
function Wv(e, t = { width: 0, height: 0 }, n, r, o) {
  const i = { ...e }, s = r.get(n);
  if (s) {
    const a = s.origin || o;
    i.x += s.internals.positionAbsolute.x - (t.width ?? 0) * a[0], i.y += s.internals.positionAbsolute.y - (t.height ?? 0) * a[1];
  }
  return i;
}
function Yv(e) {
  return { ...Vv, ...e || {} };
}
function Qi(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: i, y: s } = Ut(e), a = No({ x: i - (o?.left ?? 0), y: s - (o?.top ?? 0) }, r), { x: l, y: u } = n ? Po(a, t) : a;
  return {
    xSnapped: l,
    ySnapped: u,
    ...a
  };
}
const bc = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), xc = (e) => e?.getRootNode?.() || window?.document, Fv = ["INPUT", "SELECT", "TEXTAREA"];
function Cc(e) {
  const t = e.composedPath?.()?.[0] || e.target;
  return t?.nodeType !== 1 ? !1 : Fv.includes(t.nodeName) || t.hasAttribute("contenteditable") || !!t.closest(".nokey");
}
const $c = (e) => "clientX" in e, Ut = (e, t) => {
  const n = $c(e), r = n ? e.clientX : e.touches?.[0].clientX, o = n ? e.clientY : e.touches?.[0].clientY;
  return {
    x: r - (t?.left ?? 0),
    y: o - (t?.top ?? 0)
  };
}, rl = (e, t, n, r, o) => {
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
      ...bc(s)
    };
  });
};
function qv({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: o, sourceControlY: i, targetControlX: s, targetControlY: a }) {
  const l = e * 0.125 + o * 0.375 + s * 0.375 + n * 0.125, u = t * 0.125 + i * 0.375 + a * 0.375 + r * 0.125, d = Math.abs(l - e), p = Math.abs(u - t);
  return [l, u, d, p];
}
function Bo(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function ol({ pos: e, x1: t, y1: n, x2: r, y2: o, c: i }) {
  switch (e) {
    case me.Left:
      return [t - Bo(t - r, i), n];
    case me.Right:
      return [t + Bo(r - t, i), n];
    case me.Top:
      return [t, n - Bo(n - o, i)];
    case me.Bottom:
      return [t, n + Bo(o - n, i)];
  }
}
function _c({ sourceX: e, sourceY: t, sourcePosition: n = me.Bottom, targetX: r, targetY: o, targetPosition: i = me.Top, curvature: s = 0.25 }) {
  const [a, l] = ol({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: o,
    c: s
  }), [u, d] = ol({
    pos: i,
    x1: r,
    y1: o,
    x2: e,
    y2: t,
    c: s
  }), [p, f, h, y] = qv({
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
function kc({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const o = Math.abs(n - e) / 2, i = n < e ? n + o : n - o, s = Math.abs(r - t) / 2, a = r < t ? r + s : r - s;
  return [i, a, o, s];
}
function Xv({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r, elevateOnSelect: o = !1 }) {
  if (r !== void 0)
    return r;
  const i = o && n ? 1e3 : 0, s = Math.max(e.parentId || o && e.selected ? e.internals.z : 0, t.parentId || o && t.selected ? t.internals.z : 0);
  return i + s;
}
function Gv({ sourceNode: e, targetNode: t, width: n, height: r, transform: o }) {
  const i = Hi(hi(e), hi(t));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const s = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return fo(s, Ii(i)) > 0;
}
const Uv = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, Qv = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), Jv = (e, t) => {
  if (!e.source || !e.target)
    return t;
  let n;
  return hc(e) ? n = { ...e } : n = {
    ...e,
    id: Uv(e)
  }, Qv(n, t) ? t : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, t.concat(n));
};
function Sc({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const [o, i, s, a] = kc({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: r
  });
  return [`M ${e},${t}L ${n},${r}`, o, i, s, a];
}
const il = {
  [me.Left]: { x: -1, y: 0 },
  [me.Right]: { x: 1, y: 0 },
  [me.Top]: { x: 0, y: -1 },
  [me.Bottom]: { x: 0, y: 1 }
}, e0 = ({ source: e, sourcePosition: t = me.Bottom, target: n }) => t === me.Left || t === me.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, sl = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function t0({ source: e, sourcePosition: t = me.Bottom, target: n, targetPosition: r = me.Top, center: o, offset: i, stepPosition: s }) {
  const a = il[t], l = il[r], u = { x: e.x + a.x * i, y: e.y + a.y * i }, d = { x: n.x + l.x * i, y: n.y + l.y * i }, p = e0({
    source: u,
    sourcePosition: t,
    target: d
  }), f = p.x !== 0 ? "x" : "y", h = p[f];
  let y = [], w, m;
  const b = { x: 0, y: 0 }, $ = { x: 0, y: 0 }, [, , _, x] = kc({
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
    ], N = [
      { x: u.x, y: m },
      { x: d.x, y: m }
    ];
    a[f] === h ? y = f === "x" ? k : N : y = f === "x" ? N : k;
  } else {
    const k = [{ x: u.x, y: d.y }], N = [{ x: d.x, y: u.y }];
    if (f === "x" ? y = a.x === h ? N : k : y = a.y === h ? k : N, t === r) {
      const z = Math.abs(e[f] - n[f]);
      if (z <= i) {
        const S = Math.min(i - 1, i - z);
        a[f] === h ? b[f] = (u[f] > e[f] ? -1 : 1) * S : $[f] = (d[f] > n[f] ? -1 : 1) * S;
      }
    }
    if (t !== r) {
      const z = f === "x" ? "y" : "x", S = a[f] === l[z], T = u[z] > d[z], C = u[z] < d[z];
      (a[f] === 1 && (!S && T || S && C) || a[f] !== 1 && (!S && C || S && T)) && (y = f === "x" ? k : N);
    }
    const V = { x: u.x + b.x, y: u.y + b.y }, j = { x: d.x + $.x, y: d.y + $.y }, A = Math.max(Math.abs(V.x - y[0].x), Math.abs(j.x - y[0].x)), H = Math.max(Math.abs(V.y - y[0].y), Math.abs(j.y - y[0].y));
    A >= H ? (w = (V.x + j.x) / 2, m = y[0].y) : (w = y[0].x, m = (V.y + j.y) / 2);
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
  const o = Math.min(sl(e, t) / 2, sl(t, n) / 2, r), { x: i, y: s } = t;
  if (e.x === i && i === n.x || e.y === s && s === n.y)
    return `L${i} ${s}`;
  if (e.y === s) {
    const u = e.x < n.x ? -1 : 1, d = e.y < n.y ? 1 : -1;
    return `L ${i + o * u},${s}Q ${i},${s} ${i},${s + o * d}`;
  }
  const a = e.x < n.x ? 1 : -1, l = e.y < n.y ? -1 : 1;
  return `L ${i},${s + o * l}Q ${i},${s} ${i + o * a},${s}`;
}
function aa({ sourceX: e, sourceY: t, sourcePosition: n = me.Bottom, targetX: r, targetY: o, targetPosition: i = me.Top, borderRadius: s = 5, centerX: a, centerY: l, offset: u = 20, stepPosition: d = 0.5 }) {
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
function al(e) {
  return e && !!(e.internals.handleBounds || e.handles?.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function r0(e) {
  const { sourceNode: t, targetNode: n } = e;
  if (!al(t) || !al(n))
    return null;
  const r = t.internals.handleBounds || ll(t.handles), o = n.internals.handleBounds || ll(n.handles), i = ul(r?.source ?? [], e.sourceHandle), s = ul(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === zr.Strict ? o?.target ?? [] : (o?.target ?? []).concat(o?.source ?? []),
    e.targetHandle
  );
  if (!i || !s)
    return e.onError?.("008", uo.error008(i ? "target" : "source", {
      id: e.id,
      sourceHandle: e.sourceHandle,
      targetHandle: e.targetHandle
    })), null;
  const a = i?.position || me.Bottom, l = s?.position || me.Top, u = po(t, i, a), d = po(n, s, l);
  return {
    sourceX: u.x,
    sourceY: u.y,
    targetX: d.x,
    targetY: d.y,
    sourcePosition: a,
    targetPosition: l
  };
}
function ll(e) {
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
function po(e, t, n = me.Left, r = !1) {
  const o = (t?.x ?? 0) + e.internals.positionAbsolute.x, i = (t?.y ?? 0) + e.internals.positionAbsolute.y, { width: s, height: a } = t ?? tr(e);
  if (r)
    return { x: o + s / 2, y: i + a / 2 };
  switch (t?.position ?? n) {
    case me.Top:
      return { x: o + s / 2, y: i };
    case me.Right:
      return { x: o + s, y: i + a / 2 };
    case me.Bottom:
      return { x: o + s / 2, y: i + a };
    case me.Left:
      return { x: o, y: i + a / 2 };
  }
}
function ul(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function Ss(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((n) => `${n}=${e[n]}`).join("&")}` : "";
}
function o0(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const i = /* @__PURE__ */ new Set();
  return e.reduce((s, a) => ([a.markerStart || r, a.markerEnd || o].forEach((l) => {
    if (l && typeof l == "object") {
      const u = Ss(l, t);
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
    case me.Right:
      s = [
        (e.x + e.width) * t.zoom + t.x + r,
        (e.y + e.height * i) * t.zoom + t.y
      ], a = [0, -100 * i];
      break;
    case me.Bottom:
      s[1] = (e.y + e.height) * t.zoom + t.y + r, a[1] = 0;
      break;
    case me.Left:
      s = [
        e.x * t.zoom + t.x - r,
        (e.y + e.height * i) * t.zoom + t.y
      ], a = [-100, -100 * i];
      break;
  }
  return `translate(${s[0]}px, ${s[1]}px) translate(${a[0]}%, ${a[1]}%)`;
}
const Ec = 1e3, s0 = 10, la = {
  nodeOrigin: [0, 0],
  nodeExtent: $s,
  elevateNodesOnSelect: !0,
  defaults: {}
}, a0 = {
  ...la,
  checkEquality: !0
};
function ua(e, t) {
  const n = { ...e };
  for (const r in t)
    t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function l0(e, t, n) {
  const r = ua(la, n);
  for (const o of e.values())
    if (o.parentId)
      ca(o, e, t, r);
    else {
      const i = So(o, r.nodeOrigin), s = Ir(o.extent) ? o.extent : r.nodeExtent, a = hr(i, s, tr(o));
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
  const o = ua(a0, r);
  let i = { i: -1 }, s = e.length > 0;
  const a = new Map(t), l = o?.elevateNodesOnSelect ? Ec : 0;
  t.clear(), n.clear();
  for (const u of e) {
    let d = a.get(u.id);
    if (o.checkEquality && u === d?.internals.userNode)
      t.set(u.id, d);
    else {
      const p = So(u, o.nodeOrigin), f = Ir(u.extent) ? u.extent : o.nodeExtent, h = hr(p, f, tr(u));
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
          z: Pc(u, l),
          userNode: u
        }
      }, t.set(u.id, d);
    }
    (d.measured === void 0 || d.measured.width === void 0 || d.measured.height === void 0) && !d.hidden && (s = !1), u.parentId && ca(d, t, n, r, i);
  }
  return s;
}
function d0(e, t) {
  if (!e.parentId)
    return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function ca(e, t, n, r, o) {
  const { elevateNodesOnSelect: i, nodeOrigin: s, nodeExtent: a } = ua(la, r), l = e.parentId, u = t.get(l);
  if (!u) {
    console.warn(`Parent node ${l} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  d0(e, n), o && !u.parentId && u.internals.rootParentIndex === void 0 && (u.internals.rootParentIndex = ++o.i, u.internals.z = u.internals.z + o.i * s0), o && u.internals.rootParentIndex !== void 0 && (o.i = u.internals.rootParentIndex);
  const d = i ? Ec : 0, { x: p, y: f, z: h } = f0(e, u, s, a, d), { positionAbsolute: y } = e.internals, w = p !== y.x || f !== y.y;
  (w || h !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: w ? { x: p, y: f } : y,
      z: h
    }
  });
}
function Pc(e, t) {
  return (_n(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function f0(e, t, n, r, o) {
  const { x: i, y: s } = t.internals.positionAbsolute, a = tr(e), l = So(e, n), u = Ir(e.extent) ? hr(l, e.extent, a) : l;
  let d = hr({ x: i + u.x, y: s + u.y }, r, a);
  e.extent === "parent" && (d = vc(d, a, t));
  const p = Pc(e, o), f = t.internals.z ?? 0;
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
    const l = i.get(s.parentId)?.expandedRect ?? Hr(a), u = yc(l, s.rect);
    i.set(s.parentId, { expandedRect: u, parent: a });
  }
  return i.size > 0 && i.forEach(({ expandedRect: s, parent: a }, l) => {
    const u = a.internals.positionAbsolute, d = tr(a), p = a.origin ?? r, f = s.x < u.x ? Math.round(Math.abs(u.x - s.x)) : 0, h = s.y < u.y ? Math.round(Math.abs(u.y - s.y)) : 0, y = Math.max(d.width, Math.round(s.width)), w = Math.max(d.height, Math.round(s.height)), m = (y - d.width) * p[0], b = (w - d.height) * p[1];
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
    const y = bc(f.nodeElement), w = h.measured.width !== y.width || h.measured.height !== y.height;
    if (y.width && y.height && (w || !h.internals.handleBounds || f.force)) {
      const m = f.nodeElement.getBoundingClientRect(), b = Ir(h.extent) ? h.extent : i;
      let { positionAbsolute: $ } = h.internals;
      h.parentId && h.extent === "parent" ? $ = vc($, y, t.get(h.parentId)) : b && ($ = hr($, b, y));
      const _ = {
        ...h,
        measured: y,
        internals: {
          ...h.internals,
          positionAbsolute: $,
          handleBounds: {
            source: rl("source", f.nodeElement, m, d, h.id),
            target: rl("target", f.nodeElement, m, d, h.id)
          }
        }
      };
      t.set(h.id, _), h.parentId && ca(_, t, n, { nodeOrigin: o }), a = !0, w && (l.push({
        id: h.id,
        type: "dimensions",
        dimensions: y
      }), h.expandParent && h.parentId && p.push({
        id: h.id,
        parentId: h.parentId,
        rect: Hr(_, o)
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
function cl(e, t, n, r, o, i) {
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
    cl("source", l, d, e, o, s), cl("target", l, u, e, i, a), t.set(r.id, r);
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
function Nc(e, t) {
  if (!e.parentId)
    return !1;
  const n = t.get(e.parentId);
  return n ? n.selected ? !0 : Nc(n, t) : !1;
}
function dl(e, t, n) {
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
    if ((s.selected || s.id === r) && (!s.parentId || !Nc(s, e)) && (s.draggable || t && typeof s.draggable > "u")) {
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
  }, s = Po(i, t);
  return {
    x: s.x - i.x,
    y: s.y - i.y
  };
}
function b0({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: o }) {
  let i = { x: null, y: null }, s = 0, a = /* @__PURE__ */ new Map(), l = !1, u = { x: 0, y: 0 }, d = null, p = !1, f = null, h = !1, y = !1, w = null;
  function m({ noDragClassName: $, handleSelector: _, domNode: x, isSelectable: k, nodeId: N, nodeClickDistance: V = 0 }) {
    f = Kt(x);
    function j({ x: S, y: T }) {
      const { nodeLookup: C, nodeExtent: P, snapGrid: M, snapToGrid: K, nodeOrigin: B, onNodeDrag: W, onSelectionDrag: D, onError: X, updateNodePositions: q } = t();
      i = { x: S, y: T };
      let U = !1;
      const I = a.size > 1, F = I && P ? ks(Eo(a)) : null, G = I && K ? w0({
        dragItems: a,
        snapGrid: M,
        x: S,
        y: T
      }) : null;
      for (const [te, ne] of a) {
        if (!C.has(te))
          continue;
        let J = { x: S - ne.distance.x, y: T - ne.distance.y };
        K && (J = G ? {
          x: Math.round(J.x + G.x),
          y: Math.round(J.y + G.y)
        } : Po(J, M));
        let he = null;
        if (I && P && !ne.extent && F) {
          const { positionAbsolute: ie } = ne.internals, fe = ie.x - F.x + P[0][0], pe = ie.x + ne.measured.width - F.x2 + P[1][0], Ce = ie.y - F.y + P[0][1], de = ie.y + ne.measured.height - F.y2 + P[1][1];
          he = [
            [fe, Ce],
            [pe, de]
          ];
        }
        const { position: ce, positionAbsolute: re } = gc({
          nodeId: te,
          nextPosition: J,
          nodeLookup: C,
          nodeExtent: he || P,
          nodeOrigin: B,
          onError: X
        });
        U = U || ne.position.x !== ce.x || ne.position.y !== ce.y, ne.position = ce, ne.internals.positionAbsolute = re;
      }
      if (y = y || U, !!U && (q(a, !0), w && (r || W || !N && D))) {
        const [te, ne] = Ji({
          nodeId: N,
          dragItems: a,
          nodeLookup: C
        });
        r?.(w, a, te, ne), W?.(w, te, ne), N || D?.(w, ne);
      }
    }
    async function A() {
      if (!d)
        return;
      const { transform: S, panBy: T, autoPanSpeed: C, autoPanOnNodeDrag: P } = t();
      if (!P) {
        l = !1, cancelAnimationFrame(s);
        return;
      }
      const [M, K] = mc(u, d, C);
      (M !== 0 || K !== 0) && (i.x = (i.x ?? 0) - M / S[2], i.y = (i.y ?? 0) - K / S[2], await T({ x: M, y: K }) && j(i)), s = requestAnimationFrame(A);
    }
    function H(S) {
      const { nodeLookup: T, multiSelectionActive: C, nodesDraggable: P, transform: M, snapGrid: K, snapToGrid: B, selectNodesOnDrag: W, onNodeDragStart: D, onSelectionDragStart: X, unselectNodesAndEdges: q } = t();
      p = !0, (!W || !k) && !C && N && (T.get(N)?.selected || q()), k && W && N && e?.(N);
      const U = Qi(S.sourceEvent, { transform: M, snapGrid: K, snapToGrid: B, containerBounds: d });
      if (i = U, a = y0(T, P, U, N), a.size > 0 && (n || D || !N && X)) {
        const [I, F] = Ji({
          nodeId: N,
          dragItems: a,
          nodeLookup: T
        });
        n?.(S.sourceEvent, a, I, F), D?.(S.sourceEvent, I, F), N || X?.(S.sourceEvent, F);
      }
    }
    const z = Zg().clickDistance(V).on("start", (S) => {
      const { domNode: T, nodeDragThreshold: C, transform: P, snapGrid: M, snapToGrid: K } = t();
      d = T?.getBoundingClientRect() || null, h = !1, y = !1, w = S.sourceEvent, C === 0 && H(S), i = Qi(S.sourceEvent, { transform: P, snapGrid: M, snapToGrid: K, containerBounds: d }), u = Ut(S.sourceEvent, d);
    }).on("drag", (S) => {
      const { autoPanOnNodeDrag: T, transform: C, snapGrid: P, snapToGrid: M, nodeDragThreshold: K, nodeLookup: B } = t(), W = Qi(S.sourceEvent, { transform: C, snapGrid: P, snapToGrid: M, containerBounds: d });
      if (w = S.sourceEvent, (S.sourceEvent.type === "touchmove" && S.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      N && !B.has(N)) && (h = !0), !h) {
        if (!l && T && p && (l = !0, A()), !p) {
          const D = Ut(S.sourceEvent, d), X = D.x - u.x, q = D.y - u.y;
          Math.sqrt(X * X + q * q) > K && H(S);
        }
        (i.x !== W.xSnapped || i.y !== W.ySnapped) && a && p && (u = Ut(S.sourceEvent, d), j(W));
      }
    }).on("end", (S) => {
      if (!(!p || h) && (l = !1, p = !1, cancelAnimationFrame(s), a.size > 0)) {
        const { nodeLookup: T, updateNodePositions: C, onNodeDragStop: P, onSelectionDragStop: M } = t();
        if (y && (C(a, !1), y = !1), o || P || !N && M) {
          const [K, B] = Ji({
            nodeId: N,
            dragItems: a,
            nodeLookup: T,
            dragging: !1
          });
          o?.(S.sourceEvent, a, K, B), P?.(S.sourceEvent, K, B), N || M?.(S.sourceEvent, B);
        }
      }
    }).filter((S) => {
      const T = S.target;
      return !S.button && (!$ || !dl(T, `.${$}`, x)) && (!_ || dl(T, _, x));
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
    fo(o, Hr(i)) > 0 && r.push(i);
  return r;
}
const C0 = 250;
function $0(e, t, n, r) {
  let o = [], i = 1 / 0;
  const s = x0(e, n, t + C0);
  for (const a of s) {
    const l = [...a.internals.handleBounds?.source ?? [], ...a.internals.handleBounds?.target ?? []];
    for (const u of l) {
      if (r.nodeId === u.nodeId && r.type === u.type && r.id === u.id)
        continue;
      const { x: d, y: p } = po(a, u, u.position, !0), f = Math.sqrt(Math.pow(d - e.x, 2) + Math.pow(p - e.y, 2));
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
function Mc(e, t, n, r, o, i = !1) {
  const s = r.get(e);
  if (!s)
    return null;
  const a = o === "strict" ? s.internals.handleBounds?.[t] : [...s.internals.handleBounds?.source ?? [], ...s.internals.handleBounds?.target ?? []], l = (n ? a?.find((u) => u.id === n) : a?.[0]) ?? null;
  return l && i ? { ...l, ...po(s, l, l.position, !0) } : l;
}
function Tc(e, t) {
  return e || (t?.classList.contains("target") ? "target" : t?.classList.contains("source") ? "source" : null);
}
function _0(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const Lc = () => !0;
function k0(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: s, domNode: a, nodeLookup: l, lib: u, autoPanOnConnect: d, flowId: p, panBy: f, cancelConnection: h, onConnectStart: y, onConnect: w, onConnectEnd: m, isValidConnection: b = Lc, onReconnectEnd: $, updateConnection: _, getTransform: x, getFromHandle: k, autoPanSpeed: N, dragThreshold: V = 1, handleDomNode: j }) {
  const A = xc(e.target);
  let H = 0, z;
  const { x: S, y: T } = Ut(e), C = Tc(i, j), P = a?.getBoundingClientRect();
  let M = !1;
  if (!P || !C)
    return;
  const K = Mc(o, C, r, l, t);
  if (!K)
    return;
  let B = Ut(e, P), W = !1, D = null, X = !1, q = null;
  function U() {
    if (!d || !P)
      return;
    const [he, ce] = mc(B, P, N);
    f({ x: he, y: ce }), H = requestAnimationFrame(U);
  }
  const I = {
    ...K,
    nodeId: o,
    type: C,
    position: K.position
  }, F = l.get(o);
  let G = {
    inProgress: !0,
    isValid: null,
    from: po(F, I, me.Left, !0),
    fromHandle: I,
    fromPosition: I.position,
    fromNode: F,
    to: B,
    toHandle: null,
    toPosition: Ja[I.position],
    toNode: null,
    pointer: B
  };
  function te() {
    M = !0, _(G), y?.(e, { nodeId: o, handleId: r, handleType: C });
  }
  V === 0 && te();
  function ne(he) {
    if (!M) {
      const { x: fe, y: pe } = Ut(he), Ce = fe - S, de = pe - T;
      if (!(Ce * Ce + de * de > V * V))
        return;
      te();
    }
    if (!k() || !I) {
      J(he);
      return;
    }
    const ce = x();
    B = Ut(he, P), z = $0(No(B, ce, !1, [1, 1]), n, l, I), W || (U(), W = !0);
    const re = Vc(he, {
      handle: z,
      connectionMode: t,
      fromNodeId: o,
      fromHandleId: r,
      fromType: s ? "target" : "source",
      isValidConnection: b,
      doc: A,
      lib: u,
      flowId: p,
      nodeLookup: l
    });
    q = re.handleDomNode, D = re.connection, X = _0(!!z, re.isValid);
    const ie = {
      // from stays the same
      ...G,
      isValid: X,
      to: re.toHandle && X ? gi({ x: re.toHandle.x, y: re.toHandle.y }, ce) : B,
      toHandle: re.toHandle,
      toPosition: X && re.toHandle ? re.toHandle.position : Ja[I.position],
      toNode: re.toHandle ? l.get(re.toHandle.nodeId) : null,
      pointer: B
    };
    _(ie), G = ie;
  }
  function J(he) {
    if (!("touches" in he && he.touches.length > 0)) {
      if (M) {
        (z || q) && D && X && w?.(D);
        const { inProgress: ce, ...re } = G, ie = {
          ...re,
          toPosition: G.toHandle ? G.toPosition : null
        };
        m?.(he, ie), i && $?.(he, ie);
      }
      h(), cancelAnimationFrame(H), W = !1, X = !1, D = null, q = null, A.removeEventListener("mousemove", ne), A.removeEventListener("mouseup", J), A.removeEventListener("touchmove", ne), A.removeEventListener("touchend", J);
    }
  }
  A.addEventListener("mousemove", ne), A.addEventListener("mouseup", J), A.addEventListener("touchmove", ne), A.addEventListener("touchend", J);
}
function Vc(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: s, lib: a, flowId: l, isValidConnection: u = Lc, nodeLookup: d }) {
  const p = i === "target", f = t ? s.querySelector(`.${a}-flow__handle[data-id="${l}-${t?.nodeId}-${t?.id}-${t?.type}"]`) : null, { x: h, y } = Ut(e), w = s.elementFromPoint(h, y), m = w?.classList.contains(`${a}-flow__handle`) ? w : f, b = {
    handleDomNode: m,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (m) {
    const $ = Tc(void 0, m), _ = m.getAttribute("data-nodeid"), x = m.getAttribute("data-handleid"), k = m.classList.contains("connectable"), N = m.classList.contains("connectableend");
    if (!_ || !$)
      return b;
    const V = {
      source: p ? _ : r,
      sourceHandle: p ? x : o,
      target: p ? r : _,
      targetHandle: p ? o : x
    };
    b.connection = V;
    const j = k && N && (n === zr.Strict ? p && $ === "source" || !p && $ === "target" : _ !== r || x !== o);
    b.isValid = j && u(V), b.toHandle = Mc(_, $, x, d, n, !0);
  }
  return b;
}
const fl = {
  onPointerDown: k0,
  isValid: Vc
};
function S0({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = Kt(e);
  function i({ translateExtent: a, width: l, height: u, zoomStep: d = 1, pannable: p = !0, zoomable: f = !0, inversePan: h = !1 }) {
    const y = (_) => {
      if (_.sourceEvent.type !== "wheel" || !t)
        return;
      const x = n(), k = _.sourceEvent.ctrlKey && sr() ? 10 : 1, N = -_.sourceEvent.deltaY * (_.sourceEvent.deltaMode === 1 ? 0.05 : _.sourceEvent.deltaMode ? 1 : 2e-3) * d, V = x[2] * Math.pow(2, N * k);
      t.scaleTo(V);
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
      ], N = [k[0] - w[0], k[1] - w[1]];
      w = k;
      const V = r() * Math.max(x[2], Math.log(x[2])) * (h ? -1 : 1), j = {
        x: x[0] - N[0] * V,
        y: x[1] - N[1] * V
      }, A = [
        [0, 0],
        [l, u]
      ];
      t.setViewportConstrained({
        x: j.x,
        y: j.y,
        zoom: x[2]
      }, A, a);
    }, $ = fc().on("start", m).on("zoom", p ? b : null).on("zoom.wheel", f ? y : null);
    o.call($, {});
  }
  function s() {
    o.on("zoom", null);
  }
  return {
    update: i,
    destroy: s,
    pointer: qt
  };
}
const Zi = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), es = ({ x: e, y: t, zoom: n }) => Ai.translate(e, t).scale(n), $r = (e, t) => e.target.closest(`.${t}`), Dc = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), E0 = (e) => ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2, ts = (e, t = 0, n = E0, r = () => {
}) => {
  const o = typeof t == "number" && t > 0;
  return o || r(), o ? e.transition().duration(t).ease(n).on("end", r) : e;
}, Oc = (e) => {
  const t = e.ctrlKey && sr() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function P0({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: s, onPanZoomStart: a, onPanZoom: l, onPanZoomEnd: u }) {
  return (d) => {
    if ($r(d, t))
      return d.ctrlKey && d.preventDefault(), !1;
    d.preventDefault(), d.stopImmediatePropagation();
    const p = n.property("__zoom").k || 1;
    if (d.ctrlKey && s) {
      const m = qt(d), b = Oc(d), $ = p * Math.pow(2, b);
      r.scaleTo(n, $, m, d);
      return;
    }
    const f = d.deltaMode === 1 ? 20 : 1;
    let h = o === ur.Vertical ? 0 : d.deltaX * f, y = o === ur.Horizontal ? 0 : d.deltaY * f;
    !sr() && d.shiftKey && o !== ur.Vertical && (h = d.deltaY * f, y = 0), r.translateBy(
      n,
      -(h / p) * i,
      -(y / p) * i,
      // @ts-ignore
      { internal: !0 }
    );
    const w = Zi(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling ? (l?.(d, w), e.panScrollTimeout = setTimeout(() => {
      u?.(d, w), e.isPanScrolling = !1;
    }, 150)) : (e.isPanScrolling = !0, a?.(d, w));
  };
}
function N0({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(r, o) {
    const i = r.type === "wheel", s = !t && i && !r.ctrlKey, a = $r(r, e);
    if (r.ctrlKey && i && a && r.preventDefault(), s || a)
      return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function M0({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (r) => {
    if (r.sourceEvent?.internal)
      return;
    const o = Zi(r.transform);
    e.mouseButton = r.sourceEvent?.button || 0, e.isZoomingOrPanning = !0, e.prevViewport = o, r.sourceEvent?.type === "mousedown" && t(!0), n && n?.(r.sourceEvent, o);
  };
}
function T0({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (i) => {
    e.usedRightMouseButton = !!(n && Dc(t, e.mouseButton ?? 0)), i.sourceEvent?.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !i.sourceEvent?.internal && o?.(i.sourceEvent, Zi(i.transform));
  };
}
function L0({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (s) => {
    if (!s.sourceEvent?.internal && (e.isZoomingOrPanning = !1, i && Dc(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && s.sourceEvent && i(s.sourceEvent), e.usedRightMouseButton = !1, r(!1), o)) {
      const a = Zi(s.transform);
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
function V0({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: r, panOnScroll: o, zoomOnDoubleClick: i, userSelectionActive: s, noWheelClassName: a, noPanClassName: l, lib: u, connectionInProgress: d }) {
  return (p) => {
    const f = e || t, h = n && p.ctrlKey, y = p.type === "wheel";
    if (p.button === 1 && p.type === "mousedown" && ($r(p, `${u}-flow__node`) || $r(p, `${u}-flow__edge`)))
      return !0;
    if (!r && !f && !o && !i && !n || s || d && !y || $r(p, a) && y || $r(p, l) && (!y || o && y && !e) || !n && p.ctrlKey && y)
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
  }, d = e.getBoundingClientRect(), p = fc().scaleExtent([t, n]).translateExtent(r), f = Kt(e).call(p);
  $({
    x: o.x,
    y: o.y,
    zoom: Ar(o.zoom, t, n)
  }, [
    [0, 0],
    [d.width, d.height]
  ], r);
  const h = f.on("wheel.zoom"), y = f.on("dblclick.zoom");
  p.wheelDelta(Oc);
  function w(z, S) {
    return f ? new Promise((T) => {
      p?.interpolate(S?.interpolate === "linear" ? eo : Xo).transform(ts(f, S?.duration, S?.ease, () => T(!0)), z);
    }) : Promise.resolve(!1);
  }
  function m({ noWheelClassName: z, noPanClassName: S, onPaneContextMenu: T, userSelectionActive: C, panOnScroll: P, panOnDrag: M, panOnScrollMode: K, panOnScrollSpeed: B, preventScrolling: W, zoomOnPinch: D, zoomOnScroll: X, zoomOnDoubleClick: q, zoomActivationKeyPressed: U, lib: I, onTransformChange: F, connectionInProgress: G, paneClickDistance: te, selectionOnDrag: ne }) {
    C && !u.isZoomingOrPanning && b();
    const J = P && !U && !C;
    p.clickDistance(ne ? 1 / 0 : !_n(te) || te < 0 ? 0 : te);
    const he = J ? P0({
      zoomPanValues: u,
      noWheelClassName: z,
      d3Selection: f,
      d3Zoom: p,
      panOnScrollMode: K,
      panOnScrollSpeed: B,
      zoomOnPinch: D,
      onPanZoomStart: s,
      onPanZoom: i,
      onPanZoomEnd: a
    }) : N0({
      noWheelClassName: z,
      preventScrolling: W,
      d3ZoomHandler: h
    });
    if (f.on("wheel.zoom", he, { passive: !1 }), !C) {
      const re = M0({
        zoomPanValues: u,
        onDraggingChange: l,
        onPanZoomStart: s
      });
      p.on("start", re);
      const ie = T0({
        zoomPanValues: u,
        panOnDrag: M,
        onPaneContextMenu: !!T,
        onPanZoom: i,
        onTransformChange: F
      });
      p.on("zoom", ie);
      const fe = L0({
        zoomPanValues: u,
        panOnDrag: M,
        panOnScroll: P,
        onPaneContextMenu: T,
        onPanZoomEnd: a,
        onDraggingChange: l
      });
      p.on("end", fe);
    }
    const ce = V0({
      zoomActivationKeyPressed: U,
      panOnDrag: M,
      zoomOnScroll: X,
      panOnScroll: P,
      zoomOnDoubleClick: q,
      zoomOnPinch: D,
      userSelectionActive: C,
      noPanClassName: S,
      noWheelClassName: z,
      lib: I,
      connectionInProgress: G
    });
    p.filter(ce), q ? f.on("dblclick.zoom", y) : f.on("dblclick.zoom", null);
  }
  function b() {
    p.on("zoom", null);
  }
  async function $(z, S, T) {
    const C = es(z), P = p?.constrain()(C, S, T);
    return P && await w(P), new Promise((M) => M(P));
  }
  async function _(z, S) {
    const T = es(z);
    return await w(T, S), new Promise((C) => C(T));
  }
  function x(z) {
    if (f) {
      const S = es(z), T = f.property("__zoom");
      (T.k !== z.zoom || T.x !== z.x || T.y !== z.y) && p?.transform(f, S, null, { sync: !0 });
    }
  }
  function k() {
    const z = f ? dc(f.node()) : { x: 0, y: 0, k: 1 };
    return { x: z.x, y: z.y, zoom: z.k };
  }
  function N(z, S) {
    return f ? new Promise((T) => {
      p?.interpolate(S?.interpolate === "linear" ? eo : Xo).scaleTo(ts(f, S?.duration, S?.ease, () => T(!0)), z);
    }) : Promise.resolve(!1);
  }
  function V(z, S) {
    return f ? new Promise((T) => {
      p?.interpolate(S?.interpolate === "linear" ? eo : Xo).scaleBy(ts(f, S?.duration, S?.ease, () => T(!0)), z);
    }) : Promise.resolve(!1);
  }
  function j(z) {
    p?.scaleExtent(z);
  }
  function A(z) {
    p?.translateExtent(z);
  }
  function H(z) {
    const S = !_n(z) || z < 0 ? 0 : z;
    p?.clickDistance(S);
  }
  return {
    update: m,
    destroy: b,
    setViewport: _,
    setViewportConstrained: $,
    getViewport: k,
    scaleTo: N,
    scaleBy: V,
    setScaleExtent: j,
    setTranslateExtent: A,
    syncViewport: x,
    setClickDistance: H
  };
}
var pl;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(pl || (pl = {}));
var O0 = /* @__PURE__ */ ee("<div><!></div>");
function Xn(e, t) {
  le(t, !0);
  let n = v(t, "id", 7, null), r = v(t, "type", 7, "source"), o = v(t, "position", 23, () => me.Top), i = v(t, "style", 7), s = v(t, "class", 7), a = v(t, "isConnectable", 7), l = v(t, "isConnectableStart", 7, !0), u = v(t, "isConnectableEnd", 7, !0), d = v(t, "isValidConnection", 7), p = v(t, "onconnect", 7), f = v(t, "ondisconnect", 7), h = v(t, "children", 7), y = /* @__PURE__ */ Ze(t, [
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
  const w = Fn("svelteflow__node_id"), m = Fn("svelteflow__node_connectable");
  let b = /* @__PURE__ */ E(() => r() === "target"), $ = /* @__PURE__ */ E(() => a() !== void 0 ? a() : m.value), _ = rn(), x = /* @__PURE__ */ E(() => _.ariaLabelConfig), k = null;
  fu(() => {
    if (p() || f()) {
      _.edges;
      let D = _.connectionLookup.get(`${w}-${r()}${n() ? `-${n()}` : ""}`);
      if (k && !Dv(D, k)) {
        const X = D ?? /* @__PURE__ */ new Map();
        el(k, X, f()), el(X, k, p());
      }
      k = new Map(D);
    }
  });
  let N = /* @__PURE__ */ E(() => {
    if (!_.connection.inProgress)
      return [!1, !1, !1, !1, null];
    const { fromHandle: D, toHandle: X, isValid: q } = _.connection, U = D && D.nodeId === w && D.type === r() && D.id === n(), I = X && X.nodeId === w && X.type === r() && X.id === n(), F = _.connectionMode === zr.Strict ? D?.type !== r() : w !== D?.nodeId || n() !== D?.id;
    return [
      !0,
      U,
      I,
      F,
      I && q
    ];
  }), V = /* @__PURE__ */ E(() => mo(c(N), 5)), j = /* @__PURE__ */ E(() => c(V)[0]), A = /* @__PURE__ */ E(() => c(V)[1]), H = /* @__PURE__ */ E(() => c(V)[2]), z = /* @__PURE__ */ E(() => c(V)[3]), S = /* @__PURE__ */ E(() => c(V)[4]);
  function T(D) {
    const X = _.onbeforeconnect ? _.onbeforeconnect(D) : D;
    X && (_.addEdge(X), _.onconnect?.(D));
  }
  function C(D) {
    const X = $c(D);
    D.currentTarget && (X && D.button === 0 || !X) && fl.onPointerDown(D, {
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
      onConnectStart: (q, U) => {
        _.onconnectstart?.(q, {
          nodeId: U.nodeId,
          handleId: U.handleId,
          handleType: U.handleType
        });
      },
      onConnectEnd: (q, U) => {
        _.onconnectend?.(q, U);
      },
      getTransform: () => [_.viewport.x, _.viewport.y, _.viewport.zoom],
      getFromHandle: () => _.connection.fromHandle,
      dragThreshold: _.connectionDragThreshold,
      handleDomNode: D.currentTarget
    });
  }
  function P(D) {
    if (!w || !_.clickConnectStartHandle && !l())
      return;
    if (!_.clickConnectStartHandle) {
      _.onclickconnectstart?.(D, { nodeId: w, handleId: n(), handleType: r() }), _.clickConnectStartHandle = { nodeId: w, type: r(), id: n() };
      return;
    }
    const X = xc(D.target), q = d() ?? _.isValidConnection, { connectionMode: U, clickConnectStartHandle: I, flowId: F, nodeLookup: G } = _, { connection: te, isValid: ne } = fl.isValid(D, {
      handle: { nodeId: w, id: n(), type: r() },
      connectionMode: U,
      fromNodeId: I.nodeId,
      fromHandleId: I.id ?? null,
      fromType: I.type,
      isValidConnection: q,
      flowId: F,
      doc: X,
      lib: "svelte",
      nodeLookup: G
    });
    ne && te && T(te);
    const J = structuredClone(Yl(_.connection));
    delete J.inProgress, J.toPosition = J.toHandle ? J.toHandle.position : null, _.onclickconnectend?.(D, J), _.clickConnectStartHandle = null;
  }
  var M = {
    get id() {
      return n();
    },
    set id(D = null) {
      n(D), g();
    },
    get type() {
      return r();
    },
    set type(D = "source") {
      r(D), g();
    },
    get position() {
      return o();
    },
    set position(D = me.Top) {
      o(D), g();
    },
    get style() {
      return i();
    },
    set style(D) {
      i(D), g();
    },
    get class() {
      return s();
    },
    set class(D) {
      s(D), g();
    },
    get isConnectable() {
      return a();
    },
    set isConnectable(D) {
      a(D), g();
    },
    get isConnectableStart() {
      return l();
    },
    set isConnectableStart(D = !0) {
      l(D), g();
    },
    get isConnectableEnd() {
      return u();
    },
    set isConnectableEnd(D = !0) {
      u(D), g();
    },
    get isValidConnection() {
      return d();
    },
    set isValidConnection(D) {
      d(D), g();
    },
    get onconnect() {
      return p();
    },
    set onconnect(D) {
      p(D), g();
    },
    get ondisconnect() {
      return f();
    },
    set ondisconnect(D) {
      f(D), g();
    },
    get children() {
      return h();
    },
    set children(D) {
      h(D), g();
    }
  }, K = O0(), B = () => {
  };
  ot(K, () => ({
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
    onkeypress: B,
    style: i(),
    role: "button",
    "aria-label": c(x)["handle.ariaLabel"],
    tabindex: "-1",
    ...y,
    [jn]: {
      valid: c(S),
      connectingto: c(H),
      connectingfrom: c(A),
      source: !c(b),
      target: c(b),
      connectablestart: l(),
      connectableend: u(),
      connectable: c($),
      connectionindicator: c($) && (!c(j) || c(z)) && (c(j) || _.clickConnectStartHandle ? u() : l())
    }
  }));
  var W = R(K);
  return Ge(W, () => h() ?? vt), Z(K), L(e, K), ue(M);
}
se(
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
var z0 = /* @__PURE__ */ ee("<!> <!>", 1);
function da(e, t) {
  le(t, !0);
  let n = v(t, "data", 7), r = v(t, "targetPosition", 23, () => me.Top), o = v(t, "sourcePosition", 23, () => me.Bottom);
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
    set targetPosition(d = me.Top) {
      r(d), g();
    },
    get sourcePosition() {
      return o();
    },
    set sourcePosition(d = me.Bottom) {
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
  }), $e(() => Re(l, ` ${n()?.label ?? ""} `)), L(e, s), ue(i);
}
se(da, { data: {}, targetPosition: {}, sourcePosition: {} }, [], [], !0);
var A0 = /* @__PURE__ */ ee(" <!>", 1);
function zc(e, t) {
  le(t, !0);
  let n = v(t, "data", 23, () => ({ label: "Node" })), r = v(t, "sourcePosition", 23, () => me.Bottom);
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
    set sourcePosition(l = me.Bottom) {
      r(l), g();
    }
  };
  ve();
  var i = A0(), s = oe(i), a = O(s);
  return Xn(a, {
    type: "source",
    get position() {
      return r();
    }
  }), $e(() => Re(s, `${n()?.label ?? ""} `)), L(e, i), ue(o);
}
se(zc, { data: {}, sourcePosition: {} }, [], [], !0);
var H0 = /* @__PURE__ */ ee(" <!>", 1);
function Ac(e, t) {
  le(t, !0);
  let n = v(t, "data", 23, () => ({ label: "Node" })), r = v(t, "targetPosition", 23, () => me.Top);
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
    set targetPosition(l = me.Top) {
      r(l), g();
    }
  };
  ve();
  var i = H0(), s = oe(i), a = O(s);
  return Xn(a, {
    type: "target",
    get position() {
      return r();
    }
  }), $e(() => Re(s, `${n()?.label ?? ""} `)), L(e, i), ue(o);
}
se(Ac, { data: {}, targetPosition: {} }, [], [], !0);
function Hc(e, t) {
}
se(Hc, {}, [], [], !0);
function ns(e, t, n) {
  if (!n || !t)
    return;
  const r = n === "root" ? t : t.querySelector(`.svelte-flow__${n}`);
  r && r.appendChild(e);
}
function Ic(e, t) {
  const n = /* @__PURE__ */ E(rn), r = /* @__PURE__ */ E(() => c(n).domNode);
  let o;
  return c(r) ? ns(e, c(r), t) : o = Rs(() => {
    qe(() => {
      ns(e, c(r), t), o?.();
    });
  }), {
    async update(i) {
      ns(e, c(r), i);
    },
    destroy() {
      e.parentNode && e.parentNode.removeChild(e), o?.();
    }
  };
}
function Zc() {
  let e = /* @__PURE__ */ Ee(typeof window > "u");
  if (c(e)) {
    const t = Rs(() => {
      qe(() => {
        Q(e, !1), t?.();
      });
    });
  }
  return {
    get value() {
      return c(e);
    }
  };
}
const hl = (e) => zv(e), I0 = (e) => hc(e);
function gn(e) {
  return e === void 0 ? void 0 : `${e}px`;
}
const vi = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
};
var Z0 = /* @__PURE__ */ ee("<div><!></div>");
const j0 = {
  hash: "svelte-1ix3cbb",
  code: ".transparent.svelte-1ix3cbb {background:transparent;}"
};
function jc(e, t) {
  le(t, !0), He(e, j0);
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
  const p = rn(), f = Fn("svelteflow__edge_id");
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
  ot(
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
      [cn]: $
    }),
    [
      () => ({
        display: Zc().value ? "none" : void 0,
        cursor: s() ? "pointer" : void 0,
        transform: `translate(-50%, -50%) translate(${n() ?? ""}px,${r() ?? ""}px)`,
        "pointer-events": "all",
        width: gn(o()),
        height: gn(i()),
        "z-index": c(h)
      })
    ],
    void 0,
    void 0,
    "svelte-1ix3cbb"
  );
  var b = R(w);
  return Ge(b, () => u() ?? vt), Z(w), pt(w, ($, _) => Ic?.($, _), () => "edge-labels"), L(e, w), ue(y);
}
se(
  jc,
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
var K0 = /* @__PURE__ */ ge("<path></path>"), R0 = /* @__PURE__ */ ge('<path fill="none"></path><!><!>', 1);
function Mo(e, t) {
  le(t, !0);
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
      var N = K0();
      ot(N, () => ({
        d: r(),
        "stroke-opacity": 0,
        "stroke-width": p(),
        fill: "none",
        class: "svelte-flow__edge-interaction",
        ...h
      })), L(k, N);
    };
    ae(b, (k) => {
      p() > 0 && k($);
    });
  }
  var _ = O(b);
  {
    var x = (k) => {
      jc(k, {
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
          ve();
          var j = ke();
          $e(() => Re(j, o())), L(N, j);
        },
        $$slots: { default: !0 }
      });
    };
    ae(_, (k) => {
      o() && k(x);
    });
  }
  return $e(() => {
    xe(m, "id", n()), xe(m, "d", r()), Pt(m, 0, An(["svelte-flow__edge-path", f()])), xe(m, "marker-start", l()), xe(m, "marker-end", u()), dt(m, d());
  }), L(e, w), ue(y);
}
se(
  Mo,
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
function fa(e, t) {
  le(t, !0);
  let n = v(t, "id", 7), r = v(t, "interactionWidth", 7), o = v(t, "label", 7), i = v(t, "labelStyle", 7), s = v(t, "markerEnd", 7), a = v(t, "markerStart", 7), l = v(t, "pathOptions", 7), u = v(t, "sourcePosition", 7), d = v(t, "sourceX", 7), p = v(t, "sourceY", 7), f = v(t, "style", 7), h = v(t, "targetPosition", 7), y = v(t, "targetX", 7), w = v(t, "targetY", 7), m = /* @__PURE__ */ E(() => _c({
    sourceX: d(),
    sourceY: p(),
    targetX: y(),
    targetY: w(),
    sourcePosition: u(),
    targetPosition: h(),
    curvature: l()?.curvature
  })), b = /* @__PURE__ */ E(() => mo(c(m), 3)), $ = /* @__PURE__ */ E(() => c(b)[0]), _ = /* @__PURE__ */ E(() => c(b)[1]), x = /* @__PURE__ */ E(() => c(b)[2]);
  var k = {
    get id() {
      return n();
    },
    set id(N) {
      n(N), g();
    },
    get interactionWidth() {
      return r();
    },
    set interactionWidth(N) {
      r(N), g();
    },
    get label() {
      return o();
    },
    set label(N) {
      o(N), g();
    },
    get labelStyle() {
      return i();
    },
    set labelStyle(N) {
      i(N), g();
    },
    get markerEnd() {
      return s();
    },
    set markerEnd(N) {
      s(N), g();
    },
    get markerStart() {
      return a();
    },
    set markerStart(N) {
      a(N), g();
    },
    get pathOptions() {
      return l();
    },
    set pathOptions(N) {
      l(N), g();
    },
    get sourcePosition() {
      return u();
    },
    set sourcePosition(N) {
      u(N), g();
    },
    get sourceX() {
      return d();
    },
    set sourceX(N) {
      d(N), g();
    },
    get sourceY() {
      return p();
    },
    set sourceY(N) {
      p(N), g();
    },
    get style() {
      return f();
    },
    set style(N) {
      f(N), g();
    },
    get targetPosition() {
      return h();
    },
    set targetPosition(N) {
      h(N), g();
    },
    get targetX() {
      return y();
    },
    set targetX(N) {
      y(N), g();
    },
    get targetY() {
      return w();
    },
    set targetY(N) {
      w(N), g();
    }
  };
  return Mo(e, {
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
  }), ue(k);
}
se(
  fa,
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
function Kc(e, t) {
  le(t, !0);
  let n = v(t, "interactionWidth", 7), r = v(t, "label", 7), o = v(t, "labelStyle", 7), i = v(t, "style", 7), s = v(t, "markerEnd", 7), a = v(t, "markerStart", 7), l = v(t, "sourcePosition", 7), u = v(t, "sourceX", 7), d = v(t, "sourceY", 7), p = v(t, "targetPosition", 7), f = v(t, "targetX", 7), h = v(t, "targetY", 7), y = /* @__PURE__ */ E(() => aa({
    sourceX: u(),
    sourceY: d(),
    targetX: f(),
    targetY: h(),
    sourcePosition: l(),
    targetPosition: p()
  })), w = /* @__PURE__ */ E(() => mo(c(y), 3)), m = /* @__PURE__ */ E(() => c(w)[0]), b = /* @__PURE__ */ E(() => c(w)[1]), $ = /* @__PURE__ */ E(() => c(w)[2]);
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
  return Mo(e, {
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
  }), ue(_);
}
se(
  Kc,
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
function Rc(e, t) {
  le(t, !0);
  let n = v(t, "sourceX", 7), r = v(t, "sourceY", 7), o = v(t, "targetX", 7), i = v(t, "targetY", 7), s = v(t, "label", 7), a = v(t, "labelStyle", 7), l = v(t, "markerStart", 7), u = v(t, "markerEnd", 7), d = v(t, "interactionWidth", 7), p = v(t, "style", 7), f = /* @__PURE__ */ E(() => Sc({
    sourceX: n(),
    sourceY: r(),
    targetX: o(),
    targetY: i()
  })), h = /* @__PURE__ */ E(() => mo(c(f), 3)), y = /* @__PURE__ */ E(() => c(h)[0]), w = /* @__PURE__ */ E(() => c(h)[1]), m = /* @__PURE__ */ E(() => c(h)[2]);
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
  return Mo(e, {
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
  }), ue(b);
}
se(
  Rc,
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
function Bc(e, t) {
  le(t, !0);
  let n = v(t, "sourceX", 7), r = v(t, "sourceY", 7), o = v(t, "sourcePosition", 7), i = v(t, "targetX", 7), s = v(t, "targetY", 7), a = v(t, "targetPosition", 7), l = v(t, "label", 7), u = v(t, "labelStyle", 7), d = v(t, "markerStart", 7), p = v(t, "markerEnd", 7), f = v(t, "interactionWidth", 7), h = v(t, "style", 7), y = /* @__PURE__ */ E(() => aa({
    sourceX: n(),
    sourceY: r(),
    targetX: i(),
    targetY: s(),
    sourcePosition: o(),
    targetPosition: a(),
    borderRadius: 0
  })), w = /* @__PURE__ */ E(() => mo(c(y), 3)), m = /* @__PURE__ */ E(() => c(w)[0]), b = /* @__PURE__ */ E(() => c(w)[1]), $ = /* @__PURE__ */ E(() => c(w)[2]);
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
  return Mo(e, {
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
  }), ue(_);
}
se(
  Bc,
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
    this.#e = t, this.#t = Jl(n);
  }
  get current() {
    return this.#t(), this.#e();
  }
}
const W0 = /\(.+\)/, Y0 = /* @__PURE__ */ new Set(["all", "print", "screen", "and", "or", "not", "only"]);
class F0 extends B0 {
  /**
   * @param {string} query A media query string
   * @param {boolean} [fallback] Fallback value for the server
   */
  constructor(t, n) {
    let r = W0.test(t) || // we need to use `some` here because technically this `window.matchMedia('random,screen')` still returns true
    t.split(/[\s,]+/).some((i) => Y0.has(i.trim())) ? t : `(${t})`;
    const o = window.matchMedia(r);
    super(
      () => o.matches,
      (i) => ps(o, "change", i)
    );
  }
}
function q0(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  return ia(e, { x: 0, y: 0, width: n, height: r }, t, !0).forEach((i) => {
    o.set(i.id, i);
  }), o;
}
function gl(e) {
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
      zIndex: Xv({
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
const Wc = {
  input: zc,
  output: Ac,
  default: da,
  group: Hc
}, Yc = {
  straight: Rc,
  smoothstep: Kc,
  default: fa,
  step: Bc
};
function X0(e, t, n, r, o, i) {
  if (t && !n && r && o) {
    const s = Eo(i, {
      filter: (a) => !!((a.width || a.initialWidth) && (a.height || a.initialHeight))
    });
    return sa(s, r, o, 0.5, 2, 0.1);
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
      Q(this.#e, r);
    }
    #t = /* @__PURE__ */ Ee(null);
    get domNode() {
      return c(this.#t);
    }
    set domNode(r) {
      Q(this.#t, r);
    }
    #n = /* @__PURE__ */ Ee(null);
    get panZoom() {
      return c(this.#n);
    }
    set panZoom(r) {
      Q(this.#n, r);
    }
    #r = /* @__PURE__ */ Ee(e.width ?? 0);
    get width() {
      return c(this.#r);
    }
    set width(r) {
      Q(this.#r, r);
    }
    #l = /* @__PURE__ */ Ee(e.height ?? 0);
    get height() {
      return c(this.#l);
    }
    set height(r) {
      Q(this.#l, r);
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
      Q(this.#a, r);
    }
    #o = /* @__PURE__ */ E(() => this.panZoom !== null);
    get viewportInitialized() {
      return c(this.#o);
    }
    set viewportInitialized(r) {
      Q(this.#o, r);
    }
    #i = /* @__PURE__ */ E(() => (v0(this.connectionLookup, this.edgeLookup, e.edges), e.edges));
    get _edges() {
      return c(this.#i);
    }
    set _edges(r) {
      Q(this.#i, r);
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
      Q(this.#s, r);
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
      Q(this.#u, r);
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
        p = q0(s, b, w, m), f = gl({
          ...h,
          onlyRenderVisible: !0,
          visibleNodes: p,
          transform: b,
          width: w,
          height: m
        });
      } else
        p = this.nodeLookup, f = gl(h);
      return { nodes: p, edges: f };
    });
    get visible() {
      return c(this.#c);
    }
    set visible(r) {
      Q(this.#c, r);
    }
    #d = /* @__PURE__ */ E(() => e.props.nodesDraggable ?? !0);
    get nodesDraggable() {
      return c(this.#d);
    }
    set nodesDraggable(r) {
      Q(this.#d, r);
    }
    #f = /* @__PURE__ */ E(() => e.props.nodesConnectable ?? !0);
    get nodesConnectable() {
      return c(this.#f);
    }
    set nodesConnectable(r) {
      Q(this.#f, r);
    }
    #h = /* @__PURE__ */ E(() => e.props.elementsSelectable ?? !0);
    get elementsSelectable() {
      return c(this.#h);
    }
    set elementsSelectable(r) {
      Q(this.#h, r);
    }
    #p = /* @__PURE__ */ E(() => e.props.nodesFocusable ?? !0);
    get nodesFocusable() {
      return c(this.#p);
    }
    set nodesFocusable(r) {
      Q(this.#p, r);
    }
    #w = /* @__PURE__ */ E(() => e.props.edgesFocusable ?? !0);
    get edgesFocusable() {
      return c(this.#w);
    }
    set edgesFocusable(r) {
      Q(this.#w, r);
    }
    #b = /* @__PURE__ */ E(() => e.props.disableKeyboardA11y ?? !1);
    get disableKeyboardA11y() {
      return c(this.#b);
    }
    set disableKeyboardA11y(r) {
      Q(this.#b, r);
    }
    #x = /* @__PURE__ */ E(() => e.props.minZoom ?? 0.5);
    get minZoom() {
      return c(this.#x);
    }
    set minZoom(r) {
      Q(this.#x, r);
    }
    #m = /* @__PURE__ */ E(() => e.props.maxZoom ?? 2);
    get maxZoom() {
      return c(this.#m);
    }
    set maxZoom(r) {
      Q(this.#m, r);
    }
    #g = /* @__PURE__ */ E(() => e.props.nodeOrigin ?? [0, 0]);
    get nodeOrigin() {
      return c(this.#g);
    }
    set nodeOrigin(r) {
      Q(this.#g, r);
    }
    #v = /* @__PURE__ */ E(() => e.props.nodeExtent ?? $s);
    get nodeExtent() {
      return c(this.#v);
    }
    set nodeExtent(r) {
      Q(this.#v, r);
    }
    #y = /* @__PURE__ */ E(() => e.props.translateExtent ?? $s);
    get translateExtent() {
      return c(this.#y);
    }
    set translateExtent(r) {
      Q(this.#y, r);
    }
    #C = /* @__PURE__ */ E(() => e.props.defaultEdgeOptions ?? {});
    get defaultEdgeOptions() {
      return c(this.#C);
    }
    set defaultEdgeOptions(r) {
      Q(this.#C, r);
    }
    #$ = /* @__PURE__ */ E(() => e.props.nodeDragThreshold ?? 1);
    get nodeDragThreshold() {
      return c(this.#$);
    }
    set nodeDragThreshold(r) {
      Q(this.#$, r);
    }
    #_ = /* @__PURE__ */ E(() => e.props.autoPanOnNodeDrag ?? !0);
    get autoPanOnNodeDrag() {
      return c(this.#_);
    }
    set autoPanOnNodeDrag(r) {
      Q(this.#_, r);
    }
    #k = /* @__PURE__ */ E(() => e.props.autoPanOnConnect ?? !0);
    get autoPanOnConnect() {
      return c(this.#k);
    }
    set autoPanOnConnect(r) {
      Q(this.#k, r);
    }
    #S = /* @__PURE__ */ E(() => e.props.autoPanOnNodeFocus ?? !0);
    get autoPanOnNodeFocus() {
      return c(this.#S);
    }
    set autoPanOnNodeFocus(r) {
      Q(this.#S, r);
    }
    #E = /* @__PURE__ */ E(() => e.props.autoPanSpeed ?? 15);
    get autoPanSpeed() {
      return c(this.#E);
    }
    set autoPanSpeed(r) {
      Q(this.#E, r);
    }
    #P = /* @__PURE__ */ E(() => e.props.connectionDragThreshold ?? 1);
    get connectionDragThreshold() {
      return c(this.#P);
    }
    set connectionDragThreshold(r) {
      Q(this.#P, r);
    }
    fitViewQueued = e.props.fitView ?? !1;
    fitViewOptions = e.props.fitViewOptions;
    fitViewResolver = null;
    #N = /* @__PURE__ */ E(() => e.props.snapGrid ?? null);
    get snapGrid() {
      return c(this.#N);
    }
    set snapGrid(r) {
      Q(this.#N, r);
    }
    #M = /* @__PURE__ */ Ee(!1);
    get dragging() {
      return c(this.#M);
    }
    set dragging(r) {
      Q(this.#M, r);
    }
    #T = /* @__PURE__ */ Ee(null);
    get selectionRect() {
      return c(this.#T);
    }
    set selectionRect(r) {
      Q(this.#T, r);
    }
    #L = /* @__PURE__ */ Ee(!1);
    get selectionKeyPressed() {
      return c(this.#L);
    }
    set selectionKeyPressed(r) {
      Q(this.#L, r);
    }
    #V = /* @__PURE__ */ Ee(!1);
    get multiselectionKeyPressed() {
      return c(this.#V);
    }
    set multiselectionKeyPressed(r) {
      Q(this.#V, r);
    }
    #D = /* @__PURE__ */ Ee(!1);
    get deleteKeyPressed() {
      return c(this.#D);
    }
    set deleteKeyPressed(r) {
      Q(this.#D, r);
    }
    #O = /* @__PURE__ */ Ee(!1);
    get panActivationKeyPressed() {
      return c(this.#O);
    }
    set panActivationKeyPressed(r) {
      Q(this.#O, r);
    }
    #z = /* @__PURE__ */ Ee(!1);
    get zoomActivationKeyPressed() {
      return c(this.#z);
    }
    set zoomActivationKeyPressed(r) {
      Q(this.#z, r);
    }
    #A = /* @__PURE__ */ Ee(null);
    get selectionRectMode() {
      return c(this.#A);
    }
    set selectionRectMode(r) {
      Q(this.#A, r);
    }
    #H = /* @__PURE__ */ Ee("");
    get ariaLiveMessage() {
      return c(this.#H);
    }
    set ariaLiveMessage(r) {
      Q(this.#H, r);
    }
    #I = /* @__PURE__ */ E(() => e.props.selectionMode ?? pi.Partial);
    get selectionMode() {
      return c(this.#I);
    }
    set selectionMode(r) {
      Q(this.#I, r);
    }
    #Z = /* @__PURE__ */ E(() => ({ ...Wc, ...e.props.nodeTypes }));
    get nodeTypes() {
      return c(this.#Z);
    }
    set nodeTypes(r) {
      Q(this.#Z, r);
    }
    #j = /* @__PURE__ */ E(() => ({ ...Yc, ...e.props.edgeTypes }));
    get edgeTypes() {
      return c(this.#j);
    }
    set edgeTypes(r) {
      Q(this.#j, r);
    }
    #K = /* @__PURE__ */ E(() => e.props.noPanClass ?? "nopan");
    get noPanClass() {
      return c(this.#K);
    }
    set noPanClass(r) {
      Q(this.#K, r);
    }
    #R = /* @__PURE__ */ E(() => e.props.noDragClass ?? "nodrag");
    get noDragClass() {
      return c(this.#R);
    }
    set noDragClass(r) {
      Q(this.#R, r);
    }
    #B = /* @__PURE__ */ E(() => e.props.noWheelClass ?? "nowheel");
    get noWheelClass() {
      return c(this.#B);
    }
    set noWheelClass(r) {
      Q(this.#B, r);
    }
    #W = /* @__PURE__ */ E(() => Yv(e.props.ariaLabelConfig));
    get ariaLabelConfig() {
      return c(this.#W);
    }
    set ariaLabelConfig(r) {
      Q(this.#W, r);
    }
    #Y = /* @__PURE__ */ Ee(X0(this.nodesInitialized, e.props.fitView, e.props.initialViewport, this.width, this.height, this.nodeLookup));
    get _viewport() {
      return c(this.#Y);
    }
    set _viewport(r) {
      Q(this.#Y, r);
    }
    get viewport() {
      return e.viewport ?? this._viewport;
    }
    set viewport(r) {
      e.viewport && (e.viewport = r), this._viewport = r;
    }
    #F = /* @__PURE__ */ Ee(
      // _connection is viewport independent and originating from XYHandle
      _s
    );
    get _connection() {
      return c(this.#F);
    }
    set _connection(r) {
      Q(this.#F, r);
    }
    #q = /* @__PURE__ */ E(() => this._connection.inProgress ? {
      ...this._connection,
      to: No(this._connection.to, [this.viewport.x, this.viewport.y, this.viewport.zoom])
    } : this._connection);
    get connection() {
      return c(this.#q);
    }
    set connection(r) {
      Q(this.#q, r);
    }
    #X = /* @__PURE__ */ E(() => e.props.connectionMode ?? zr.Strict);
    get connectionMode() {
      return c(this.#X);
    }
    set connectionMode(r) {
      Q(this.#X, r);
    }
    #G = /* @__PURE__ */ E(() => e.props.connectionRadius ?? 20);
    get connectionRadius() {
      return c(this.#G);
    }
    set connectionRadius(r) {
      Q(this.#G, r);
    }
    #U = /* @__PURE__ */ E(() => e.props.isValidConnection ?? (() => !0));
    get isValidConnection() {
      return c(this.#U);
    }
    set isValidConnection(r) {
      Q(this.#U, r);
    }
    #Q = /* @__PURE__ */ E(() => e.props.selectNodesOnDrag ?? !0);
    get selectNodesOnDrag() {
      return c(this.#Q);
    }
    set selectNodesOnDrag(r) {
      Q(this.#Q, r);
    }
    #J = /* @__PURE__ */ E(() => e.props.defaultMarkerColor === void 0 ? "#b1b1b7" : e.props.defaultMarkerColor);
    get defaultMarkerColor() {
      return c(this.#J);
    }
    set defaultMarkerColor(r) {
      Q(this.#J, r);
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
      Q(this.#ee, r);
    }
    #te = /* @__PURE__ */ E(() => e.props.onlyRenderVisibleElements ?? !1);
    get onlyRenderVisibleElements() {
      return c(this.#te);
    }
    set onlyRenderVisibleElements(r) {
      Q(this.#te, r);
    }
    #ne = /* @__PURE__ */ E(() => e.props.onflowerror ?? Kv);
    get onerror() {
      return c(this.#ne);
    }
    set onerror(r) {
      Q(this.#ne, r);
    }
    #re = /* @__PURE__ */ E(() => e.props.ondelete);
    get ondelete() {
      return c(this.#re);
    }
    set ondelete(r) {
      Q(this.#re, r);
    }
    #oe = /* @__PURE__ */ E(() => e.props.onbeforedelete);
    get onbeforedelete() {
      return c(this.#oe);
    }
    set onbeforedelete(r) {
      Q(this.#oe, r);
    }
    #ie = /* @__PURE__ */ E(() => e.props.onbeforeconnect);
    get onbeforeconnect() {
      return c(this.#ie);
    }
    set onbeforeconnect(r) {
      Q(this.#ie, r);
    }
    #se = /* @__PURE__ */ E(() => e.props.onconnect);
    get onconnect() {
      return c(this.#se);
    }
    set onconnect(r) {
      Q(this.#se, r);
    }
    #ae = /* @__PURE__ */ E(() => e.props.onconnectstart);
    get onconnectstart() {
      return c(this.#ae);
    }
    set onconnectstart(r) {
      Q(this.#ae, r);
    }
    #le = /* @__PURE__ */ E(() => e.props.onconnectend);
    get onconnectend() {
      return c(this.#le);
    }
    set onconnectend(r) {
      Q(this.#le, r);
    }
    #ue = /* @__PURE__ */ E(() => e.props.onbeforereconnect);
    get onbeforereconnect() {
      return c(this.#ue);
    }
    set onbeforereconnect(r) {
      Q(this.#ue, r);
    }
    #ce = /* @__PURE__ */ E(() => e.props.onreconnect);
    get onreconnect() {
      return c(this.#ce);
    }
    set onreconnect(r) {
      Q(this.#ce, r);
    }
    #de = /* @__PURE__ */ E(() => e.props.onreconnectstart);
    get onreconnectstart() {
      return c(this.#de);
    }
    set onreconnectstart(r) {
      Q(this.#de, r);
    }
    #fe = /* @__PURE__ */ E(() => e.props.onreconnectend);
    get onreconnectend() {
      return c(this.#fe);
    }
    set onreconnectend(r) {
      Q(this.#fe, r);
    }
    #pe = /* @__PURE__ */ E(() => e.props.clickConnect ?? !0);
    get clickConnect() {
      return c(this.#pe);
    }
    set clickConnect(r) {
      Q(this.#pe, r);
    }
    #he = /* @__PURE__ */ E(() => e.props.onclickconnectstart);
    get onclickconnectstart() {
      return c(this.#he);
    }
    set onclickconnectstart(r) {
      Q(this.#he, r);
    }
    #ge = /* @__PURE__ */ E(() => e.props.onclickconnectend);
    get onclickconnectend() {
      return c(this.#ge);
    }
    set onclickconnectend(r) {
      Q(this.#ge, r);
    }
    #ve = /* @__PURE__ */ Ee(null);
    get clickConnectStartHandle() {
      return c(this.#ve);
    }
    set clickConnectStartHandle(r) {
      Q(this.#ve, r);
    }
    #me = /* @__PURE__ */ E(() => e.props.onselectiondrag);
    get onselectiondrag() {
      return c(this.#me);
    }
    set onselectiondrag(r) {
      Q(this.#me, r);
    }
    #ye = /* @__PURE__ */ E(() => e.props.onselectiondragstart);
    get onselectiondragstart() {
      return c(this.#ye);
    }
    set onselectiondragstart(r) {
      Q(this.#ye, r);
    }
    #we = /* @__PURE__ */ E(() => e.props.onselectiondragstop);
    get onselectiondragstop() {
      return c(this.#we);
    }
    set onselectiondragstop(r) {
      Q(this.#we, r);
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
    _prefersDark = new F0("(prefers-color-scheme: dark)", e.props.colorModeSSR === "dark");
    #be = /* @__PURE__ */ E(() => e.props.colorMode === "system" ? this._prefersDark.current ? "dark" : "light" : e.props.colorMode ?? "light");
    get colorMode() {
      return c(this.#be);
    }
    set colorMode(r) {
      Q(this.#be, r);
    }
    constructor() {
    }
    resetStoreValues() {
      this.dragging = !1, this.selectionRect = null, this.selectionRectMode = null, this.selectionKeyPressed = !1, this.multiselectionKeyPressed = !1, this.deleteKeyPressed = !1, this.panActivationKeyPressed = !1, this.zoomActivationKeyPressed = !1, this._connection = _s, this.clickConnectStartHandle = null, this.viewport = e.props.initialViewport ?? { x: 0, y: 0, zoom: 1 }, this.ariaLiveMessage = "";
    }
  }
  return new t();
}
function rn() {
  const e = Fn(mi);
  if (!e)
    throw new Error("To call useStore outside of <SvelteFlow /> you need to wrap your component in a <SvelteFlowProvider />");
  return e.getStore();
}
const mi = Symbol();
function Fc(e) {
  const t = G0(e);
  function n(H) {
    t.nodeTypes = {
      ...Wc,
      ...H
    };
  }
  function r(H) {
    t.edgeTypes = {
      ...Yc,
      ...H
    };
  }
  function o(H) {
    t.edges = Jv(H, t.edges);
  }
  const i = (H, z = !1) => {
    t.nodes = t.nodes.map((S) => {
      const T = H.get(S.id);
      return T ? { ...S, position: T.position, dragging: z } : S;
    });
  };
  function s(H) {
    const { changes: z, updatedInternals: S } = h0(H, t.nodeLookup, t.parentLookup, t.domNode, t.nodeOrigin);
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
      const M = { ...P };
      switch (C.type) {
        case "dimensions": {
          const K = { ...M.measured, ...C.dimensions };
          C.setAttributes && (M.width = C.dimensions?.width ?? M.width, M.height = C.dimensions?.height ?? M.height), M.measured = K;
          break;
        }
        case "position":
          M.position = C.position ?? M.position;
          break;
      }
      T.set(C.id, M);
    }
    t.nodes = t.nodes.map((C) => T.get(C.id) ?? C);
  }
  function a(H) {
    const z = t.fitViewResolver ?? Promise.withResolvers();
    return t.fitViewQueued = !0, t.fitViewOptions = H, t.fitViewResolver = z, t.nodes = [...t.nodes], z.promise;
  }
  async function l(H, z, S) {
    const T = typeof S?.zoom < "u" ? S.zoom : t.maxZoom, C = t.panZoom;
    return C ? (await C.setViewport({
      x: t.width / 2 - H * T,
      y: t.height / 2 - z * T,
      zoom: T
    }, { duration: S?.duration, ease: S?.ease, interpolate: S?.interpolate }), Promise.resolve(!0)) : Promise.resolve(!1);
  }
  function u(H, z) {
    const S = t.panZoom;
    return S ? S.scaleBy(H, z) : Promise.resolve(!1);
  }
  function d(H) {
    return u(1.2, H);
  }
  function p(H) {
    return u(1 / 1.2, H);
  }
  function f(H) {
    const z = t.panZoom;
    z && (z.setScaleExtent([H, t.maxZoom]), t.minZoom = H);
  }
  function h(H) {
    const z = t.panZoom;
    z && (z.setScaleExtent([t.minZoom, H]), t.maxZoom = H);
  }
  function y(H) {
    const z = t.panZoom;
    z && (z.setTranslateExtent(H), t.translateExtent = H);
  }
  function w(H, z = null) {
    let S = !1;
    const T = H.map((C) => (!z || z.has(C.id)) && C.selected ? (S = !0, { ...C, selected: !1 }) : C);
    return [S, T];
  }
  function m(H) {
    const z = H?.nodes ? new Set(H.nodes.map((K) => K.id)) : null, [S, T] = w(t.nodes, z);
    S && (t.nodes = T);
    const C = H?.edges ? new Set(H.edges.map((K) => K.id)) : null, [P, M] = w(t.edges, C);
    P && (t.edges = M);
  }
  function b(H) {
    const z = t.multiselectionKeyPressed;
    t.nodes = t.nodes.map((S) => {
      const T = H.includes(S.id), C = z && S.selected || T;
      return !!S.selected !== C ? { ...S, selected: C } : S;
    }), z || m({ nodes: [] });
  }
  function $(H) {
    const z = t.multiselectionKeyPressed;
    t.edges = t.edges.map((S) => {
      const T = H.includes(S.id), C = z && S.selected || T;
      return !!S.selected !== C ? { ...S, selected: C } : S;
    }), z || m({ edges: [] });
  }
  function _(H, z, S) {
    const T = t.nodeLookup.get(H);
    if (!T) {
      console.warn("012", uo.error012(H));
      return;
    }
    t.selectionRect = null, t.selectionRectMode = null, T.selected ? (z || T.selected && t.multiselectionKeyPressed) && (m({ nodes: [T], edges: [] }), requestAnimationFrame(() => S?.blur())) : b([H]);
  }
  function x(H) {
    const z = t.edgeLookup.get(H);
    if (!z) {
      console.warn("012", uo.error012(H));
      return;
    }
    (z.selectable || t.elementsSelectable && typeof z.selectable > "u") && (t.selectionRect = null, t.selectionRectMode = null, z.selected ? z.selected && t.multiselectionKeyPressed && m({ nodes: [], edges: [z] }) : $([H]));
  }
  function k(H, z) {
    const { nodeExtent: S, snapGrid: T, nodeOrigin: C, nodeLookup: P, nodesDraggable: M, onerror: K } = t, B = /* @__PURE__ */ new Map(), W = T?.[0] ?? 5, D = T?.[1] ?? 5, X = H.x * W * z, q = H.y * D * z;
    for (const U of P.values()) {
      if (!(U.selected && (U.draggable || M && typeof U.draggable > "u")))
        continue;
      let I = {
        x: U.internals.positionAbsolute.x + X,
        y: U.internals.positionAbsolute.y + q
      };
      T && (I = Po(I, T));
      const { position: F, positionAbsolute: G } = gc({
        nodeId: U.id,
        nextPosition: I,
        nodeLookup: P,
        nodeExtent: S,
        nodeOrigin: C,
        onError: K
      });
      U.position = F, U.internals.positionAbsolute = G, B.set(U.id, U);
    }
    i(B);
  }
  function N(H) {
    return g0({
      delta: H,
      panZoom: t.panZoom,
      transform: [t.viewport.x, t.viewport.y, t.viewport.zoom],
      translateExtent: t.translateExtent,
      width: t.width,
      height: t.height
    });
  }
  const V = (H) => {
    t._connection = { ...H };
  };
  function j() {
    t._connection = _s;
  }
  function A() {
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
    panBy: N,
    updateConnection: V,
    cancelConnection: j,
    reset: A
  });
}
function U0(e, t) {
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
var Q0 = /* @__PURE__ */ ee('<div class="svelte-flow__zoom svelte-flow__container"><!></div>');
function qc(e, t) {
  le(t, !0);
  let n = v(t, "store", 15), r = v(t, "panOnScrollMode", 7), o = v(t, "preventScrolling", 7), i = v(t, "zoomOnScroll", 7), s = v(t, "zoomOnDoubleClick", 7), a = v(t, "zoomOnPinch", 7), l = v(t, "panOnDrag", 7), u = v(t, "panOnScroll", 7), d = v(t, "panOnScrollSpeed", 7), p = v(t, "paneClickDistance", 7), f = v(t, "selectionOnDrag", 7), h = v(t, "onmovestart", 7), y = v(t, "onmove", 7), w = v(t, "onmoveend", 7), m = v(t, "oninit", 7), b = v(t, "children", 7), $ = /* @__PURE__ */ E(() => n().panActivationKeyPressed || l()), _ = /* @__PURE__ */ E(() => n().panActivationKeyPressed || u());
  const { viewport: x } = n();
  let k = !1;
  qe(() => {
    !k && n().viewportInitialized && (m()?.(), k = !0);
  });
  var N = {
    get store() {
      return n();
    },
    set store(A) {
      n(A), g();
    },
    get panOnScrollMode() {
      return r();
    },
    set panOnScrollMode(A) {
      r(A), g();
    },
    get preventScrolling() {
      return o();
    },
    set preventScrolling(A) {
      o(A), g();
    },
    get zoomOnScroll() {
      return i();
    },
    set zoomOnScroll(A) {
      i(A), g();
    },
    get zoomOnDoubleClick() {
      return s();
    },
    set zoomOnDoubleClick(A) {
      s(A), g();
    },
    get zoomOnPinch() {
      return a();
    },
    set zoomOnPinch(A) {
      a(A), g();
    },
    get panOnDrag() {
      return l();
    },
    set panOnDrag(A) {
      l(A), g();
    },
    get panOnScroll() {
      return u();
    },
    set panOnScroll(A) {
      u(A), g();
    },
    get panOnScrollSpeed() {
      return d();
    },
    set panOnScrollSpeed(A) {
      d(A), g();
    },
    get paneClickDistance() {
      return p();
    },
    set paneClickDistance(A) {
      p(A), g();
    },
    get selectionOnDrag() {
      return f();
    },
    set selectionOnDrag(A) {
      f(A), g();
    },
    get onmovestart() {
      return h();
    },
    set onmovestart(A) {
      h(A), g();
    },
    get onmove() {
      return y();
    },
    set onmove(A) {
      y(A), g();
    },
    get onmoveend() {
      return w();
    },
    set onmoveend(A) {
      w(A), g();
    },
    get oninit() {
      return m();
    },
    set oninit(A) {
      m(A), g();
    },
    get children() {
      return b();
    },
    set children(A) {
      b(A), g();
    }
  }, V = Q0(), j = R(V);
  return Ge(j, b), Z(V), pt(V, (A, H) => U0?.(A, H), () => ({
    viewport: n().viewport,
    minZoom: n().minZoom,
    maxZoom: n().maxZoom,
    initialViewport: x,
    onDraggingChange: (A) => {
      n(n().dragging = A, !0);
    },
    setPanZoomInstance: (A) => {
      n(n().panZoom = A, !0);
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
    onTransformChange: (A) => {
      n(n().viewport = { x: A[0], y: A[1], zoom: A[2] }, !0);
    },
    connectionInProgress: n().connection.inProgress
  })), L(e, V), ue(N);
}
se(
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
function vl(e, t) {
  return (n) => {
    n.target === t && e?.(n);
  };
}
function ml(e) {
  return (t) => {
    const n = e.has(t.id);
    return !!t.selected !== n ? { ...t, selected: n } : t;
  };
}
function yl(e, t) {
  if (e.size !== t.size)
    return !1;
  for (const n of e)
    if (!t.has(n))
      return !1;
  return !0;
}
var J0 = /* @__PURE__ */ ee("<div><!></div>");
function Xc(e, t) {
  le(t, !0);
  let n = v(t, "store", 15), r = v(t, "panOnDrag", 7, !0), o = v(t, "paneClickDistance", 7, 1), i = v(t, "selectionOnDrag", 7), s = v(t, "onpaneclick", 7), a = v(t, "onpanecontextmenu", 7), l = v(t, "onselectionstart", 7), u = v(t, "onselectionend", 7), d = v(t, "children", 7), p, f = null, h = /* @__PURE__ */ new Set(), y = /* @__PURE__ */ new Set(), w = /* @__PURE__ */ E(() => n().panActivationKeyPressed || r()), m = /* @__PURE__ */ E(() => n().selectionKeyPressed || !!n().selectionRect || i() && c(w) !== !0), b = /* @__PURE__ */ E(() => n().elementsSelectable && (c(m) || n().selectionRectMode === "user")), $ = !1;
  function _(P) {
    if (f = p?.getBoundingClientRect(), !f) return;
    const M = P.target === p, K = !M && !!P.target.closest(".nokey"), B = i() && M || n().selectionKeyPressed;
    if (K || !c(m) || !B || P.button !== 0 || !P.isPrimary)
      return;
    P.target?.setPointerCapture?.(P.pointerId), $ = !1;
    const { x: W, y: D } = Ut(P, f);
    n(n().selectionRect = { width: 0, height: 0, startX: W, startY: D, x: W, y: D }, !0), M || (P.stopPropagation(), P.preventDefault());
  }
  function x(P) {
    if (!c(m) || !f || !n().selectionRect)
      return;
    const M = Ut(P, f), { startX: K = 0, startY: B = 0 } = n().selectionRect;
    if (!$) {
      const U = n().selectionKeyPressed ? 0 : o();
      if (Math.hypot(M.x - K, M.y - B) <= U)
        return;
      n().unselectNodesAndEdges(), l()?.(P);
    }
    $ = !0;
    const W = {
      ...n().selectionRect,
      x: M.x < K ? M.x : K,
      y: M.y < B ? M.y : B,
      width: Math.abs(M.x - K),
      height: Math.abs(M.y - B)
    }, D = h, X = y;
    h = new Set(ia(
      n().nodeLookup,
      W,
      [
        n().viewport.x,
        n().viewport.y,
        n().viewport.zoom
      ],
      n().selectionMode === pi.Partial,
      !0
    ).map((U) => U.id));
    const q = n().defaultEdgeOptions.selectable ?? !0;
    y = /* @__PURE__ */ new Set();
    for (const U of h) {
      const I = n().connectionLookup.get(U);
      if (I)
        for (const { edgeId: F } of I.values()) {
          const G = n().edgeLookup.get(F);
          G && (G.selectable ?? q) && y.add(F);
        }
    }
    yl(D, h) || n(n().nodes = n().nodes.map(ml(h)), !0), yl(X, y) || n(n().edges = n().edges.map(ml(y)), !0), n(n().selectionRectMode = "user", !0), n(n().selectionRect = W, !0);
  }
  function k(P) {
    P.button === 0 && (P.target?.releasePointerCapture?.(P.pointerId), !$ && P.target === p && j?.(P), n(n().selectionRect = null, !0), $ && n(n().selectionRectMode = h.size > 0 ? "nodes" : null, !0), $ && u()?.(P));
  }
  const N = (P) => {
    if (Array.isArray(c(w)) && c(w).includes(2)) {
      P.preventDefault();
      return;
    }
    a()?.({ event: P });
  }, V = (P) => {
    $ && (P.stopPropagation(), $ = !1);
  };
  function j(P) {
    if ($ || n().connection.inProgress) {
      $ = !1;
      return;
    }
    s()?.({ event: P }), n().unselectNodesAndEdges(), n(n().selectionRectMode = null, !0), n(n().selectionRect = null, !0);
  }
  var A = {
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
  }, H = J0();
  let z;
  var S = /* @__PURE__ */ E(() => c(b) ? void 0 : vl(j, p));
  H.__click = function(...P) {
    c(S)?.apply(this, P);
  }, H.__pointermove = function(...P) {
    (c(b) ? x : void 0)?.apply(this, P);
  }, H.__pointerup = function(...P) {
    (c(b) ? k : void 0)?.apply(this, P);
  };
  var T = /* @__PURE__ */ E(() => vl(N, p));
  H.__contextmenu = function(...P) {
    c(T)?.apply(this, P);
  };
  var C = R(H);
  return Ge(C, d), Z(H), Nt(H, (P) => p = P, () => p), $e((P) => z = Pt(H, 1, "svelte-flow__pane svelte-flow__container", null, z, P), [
    () => ({
      draggable: r() === !0 || Array.isArray(r()) && r().includes(0),
      dragging: n().dragging,
      selection: c(m)
    })
  ]), ii(
    "pointerdown",
    H,
    function(...P) {
      (c(b) ? _ : void 0)?.apply(this, P);
    },
    !0
  ), ii(
    "click",
    H,
    function(...P) {
      (c(b) ? V : void 0)?.apply(this, P);
    },
    !0
  ), L(e, H), ue(A);
}
er(["click", "pointermove", "pointerup", "contextmenu"]);
se(
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
var em = /* @__PURE__ */ ee('<div class="svelte-flow__viewport xyflow__viewport svelte-flow__container"><!></div>');
function Gc(e, t) {
  le(t, !0);
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
  return Ge(a, r), Z(i), $e(() => s = dt(i, "", s, {
    transform: `translate(${n().viewport.x ?? ""}px, ${n().viewport.y ?? ""}px) scale(${n().viewport.zoom ?? ""})`
  })), L(e, i), ue(o);
}
se(Gc, { store: {}, children: {} }, [], [], !0);
function Uc(e, t) {
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
var tm = /* @__PURE__ */ ee('<div aria-live="assertive" aria-atomic="true" class="a11y-live-msg svelte-1u4lacj"> </div>'), nm = /* @__PURE__ */ ee('<div class="a11y-hidden svelte-1u4lacj"> </div> <div class="a11y-hidden svelte-1u4lacj"> </div> <!>', 1);
const rm = {
  hash: "svelte-1u4lacj",
  code: ".a11y-hidden.svelte-1u4lacj {display:none;}.a11y-live-msg.svelte-1u4lacj {position:absolute;width:1px;height:1px;margin:-1px;border:0;padding:0;overflow:hidden;clip:rect(0px, 0px, 0px, 0px);clip-path:inset(100%);}"
};
function Qc(e, t) {
  le(t, !0), He(e, rm);
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
      Z(f), $e(() => {
        xe(f, "id", `${om}-${n().flowId}`), Re(h, n().ariaLiveMessage);
      }), L(p, f);
    };
    ae(u, (p) => {
      n().disableKeyboardA11y || p(d);
    });
  }
  return $e(() => {
    xe(i, "id", `${Jc}-${n().flowId}`), Re(s, n().disableKeyboardA11y ? n().ariaLabelConfig["node.a11yDescription.default"] : n().ariaLabelConfig["node.a11yDescription.keyboardDisabled"]), xe(a, "id", `${ed}-${n().flowId}`), Re(l, n().ariaLabelConfig["edge.a11yDescription.default"]);
  }), L(e, o), ue(r);
}
se(Qc, { store: {} }, [], [], !0);
const Jc = "svelte-flow__node-desc", ed = "svelte-flow__edge-desc", om = "svelte-flow__aria-live";
var im = /* @__PURE__ */ ee("<div><!></div>");
function td(e, t) {
  le(t, !0);
  let n = v(t, "store", 15), r = v(t, "node", 7), o = v(t, "resizeObserver", 7), i = v(t, "nodeClickDistance", 7), s = v(t, "onnodeclick", 7), a = v(t, "onnodedrag", 7), l = v(t, "onnodedragstart", 7), u = v(t, "onnodedragstop", 7), d = v(t, "onnodepointerenter", 7), p = v(t, "onnodepointerleave", 7), f = v(t, "onnodepointermove", 7), h = v(t, "onnodecontextmenu", 7), y = /* @__PURE__ */ E(() => yt(r().data, () => ({}), !0)), w = /* @__PURE__ */ E(() => yt(r().selected, !1)), m = /* @__PURE__ */ E(() => r().draggable), b = /* @__PURE__ */ E(() => r().selectable), $ = /* @__PURE__ */ E(() => yt(r().deletable, !0)), _ = /* @__PURE__ */ E(() => r().connectable), x = /* @__PURE__ */ E(() => r().focusable), k = /* @__PURE__ */ E(() => yt(r().hidden, !1)), N = /* @__PURE__ */ E(() => yt(r().dragging, !1)), V = /* @__PURE__ */ E(() => yt(r().style, "")), j = /* @__PURE__ */ E(() => r().class), A = /* @__PURE__ */ E(() => yt(r().type, "default")), H = /* @__PURE__ */ E(() => r().parentId), z = /* @__PURE__ */ E(() => r().sourcePosition), S = /* @__PURE__ */ E(() => r().targetPosition), T = /* @__PURE__ */ E(() => yt(r().measured, () => ({ width: 0, height: 0 }), !0).width), C = /* @__PURE__ */ E(() => yt(r().measured, () => ({ width: 0, height: 0 }), !0).height), P = /* @__PURE__ */ E(() => r().initialWidth), M = /* @__PURE__ */ E(() => r().initialHeight), K = /* @__PURE__ */ E(() => r().width), B = /* @__PURE__ */ E(() => r().height), W = /* @__PURE__ */ E(() => r().dragHandle), D = /* @__PURE__ */ E(() => yt(r().internals.z, 0)), X = /* @__PURE__ */ E(() => r().internals.positionAbsolute.x), q = /* @__PURE__ */ E(() => r().internals.positionAbsolute.y), U = /* @__PURE__ */ E(() => r().internals.userNode), { id: I } = r(), F = /* @__PURE__ */ E(() => c(m) ?? n().nodesDraggable), G = /* @__PURE__ */ E(() => c(b) ?? n().elementsSelectable), te = /* @__PURE__ */ E(() => c(_) ?? n().nodesConnectable), ne = /* @__PURE__ */ E(() => wc(r())), J = /* @__PURE__ */ E(() => !!r().internals.handleBounds), he = /* @__PURE__ */ E(() => c(ne) && c(J)), ce = /* @__PURE__ */ E(() => c(x) ?? n().nodesFocusable);
  function re(ye) {
    return n().parentLookup.has(ye);
  }
  let ie = /* @__PURE__ */ E(() => re(I)), fe = /* @__PURE__ */ Ee(null), pe = null, Ce = c(A), de = c(z), we = c(S), Oe = /* @__PURE__ */ E(() => n().nodeTypes[c(A)] ?? da), Y = /* @__PURE__ */ E(() => n().ariaLabelConfig);
  Mr("svelteflow__node_connectable", {
    get value() {
      return c(te);
    }
  }), Mr("svelteflow__node_id", I);
  let je = /* @__PURE__ */ E(() => {
    const ye = c(T) === void 0 ? c(K) ?? c(P) : c(K), Ye = c(C) === void 0 ? c(B) ?? c(M) : c(B);
    if (!(ye === void 0 && Ye === void 0 && c(V) === void 0))
      return `${c(V)};${ye ? `width:${gn(ye)};` : ""}${Ye ? `height:${gn(Ye)};` : ""}`;
  });
  qe(() => {
    (c(A) !== Ce || c(z) !== de || c(S) !== we) && c(fe) !== null && requestAnimationFrame(() => {
      c(fe) !== null && n().updateNodeInternals(/* @__PURE__ */ new Map([[I, { id: I, nodeElement: c(fe), force: !0 }]]));
    }), Ce = c(A), de = c(z), we = c(S);
  }), qe(() => {
    o() && (!c(he) || c(fe) !== pe) && (pe && o().unobserve(pe), c(fe) && o().observe(c(fe)), pe = c(fe));
  }), $o(() => {
    pe && o()?.unobserve(pe);
  });
  function ze(ye) {
    c(G) && (!n().selectNodesOnDrag || !c(F) || n().nodeDragThreshold > 0) && n().handleNodeSelection(I), s()?.({ node: c(U), event: ye });
  }
  function Ae(ye) {
    if (!(Cc(ye) || n().disableKeyboardA11y))
      if (pc.includes(ye.key) && c(G)) {
        const Ye = ye.key === "Escape";
        n().handleNodeSelection(I, Ye, c(fe));
      } else c(F) && r().selected && Object.prototype.hasOwnProperty.call(vi, ye.key) && (ye.preventDefault(), n(
        n().ariaLiveMessage = c(Y)["node.a11yDescription.ariaLiveMessage"]({
          direction: ye.key.replace("Arrow", "").toLowerCase(),
          x: ~~r().internals.positionAbsolute.x,
          y: ~~r().internals.positionAbsolute.y
        }),
        !0
      ), n().moveSelectedNodes(vi[ye.key], ye.shiftKey ? 4 : 1));
  }
  const Ie = () => {
    if (n().disableKeyboardA11y || !n().autoPanOnNodeFocus || !c(fe)?.matches(":focus-visible"))
      return;
    const { width: ye, height: Ye, viewport: De } = n();
    ia(/* @__PURE__ */ new Map([[I, r()]]), { x: 0, y: 0, width: ye, height: Ye }, [De.x, De.y, De.zoom], !0).length > 0 || n().setCenter(r().position.x + (r().measured.width ?? 0) / 2, r().position.y + (r().measured.height ?? 0) / 2, { zoom: De.zoom });
  };
  var tt = {
    get store() {
      return n();
    },
    set store(ye) {
      n(ye), g();
    },
    get node() {
      return r();
    },
    set node(ye) {
      r(ye), g();
    },
    get resizeObserver() {
      return o();
    },
    set resizeObserver(ye) {
      o(ye), g();
    },
    get nodeClickDistance() {
      return i();
    },
    set nodeClickDistance(ye) {
      i(ye), g();
    },
    get onnodeclick() {
      return s();
    },
    set onnodeclick(ye) {
      s(ye), g();
    },
    get onnodedrag() {
      return a();
    },
    set onnodedrag(ye) {
      a(ye), g();
    },
    get onnodedragstart() {
      return l();
    },
    set onnodedragstart(ye) {
      l(ye), g();
    },
    get onnodedragstop() {
      return u();
    },
    set onnodedragstop(ye) {
      u(ye), g();
    },
    get onnodepointerenter() {
      return d();
    },
    set onnodepointerenter(ye) {
      d(ye), g();
    },
    get onnodepointerleave() {
      return p();
    },
    set onnodepointerleave(ye) {
      p(ye), g();
    },
    get onnodepointermove() {
      return f();
    },
    set onnodepointermove(ye) {
      f(ye), g();
    },
    get onnodecontextmenu() {
      return h();
    },
    set onnodecontextmenu(ye) {
      h(ye), g();
    }
  }, Mt = Se(), Ht = oe(Mt);
  {
    var Qe = (ye) => {
      var Ye = im();
      ot(Ye, () => ({
        "data-id": I,
        class: [
          "svelte-flow__node",
          `svelte-flow__node-${c(A)}`,
          c(j)
        ],
        style: c(je),
        onclick: ze,
        onpointerenter: d() ? (_e) => d()({ node: c(U), event: _e }) : void 0,
        onpointerleave: p() ? (_e) => p()({ node: c(U), event: _e }) : void 0,
        onpointermove: f() ? (_e) => f()({ node: c(U), event: _e }) : void 0,
        oncontextmenu: h() ? (_e) => h()({ node: c(U), event: _e }) : void 0,
        onkeydown: c(ce) ? Ae : void 0,
        onfocus: c(ce) ? Ie : void 0,
        tabIndex: c(ce) ? 0 : void 0,
        role: r().ariaRole ?? (c(ce) ? "group" : void 0),
        "aria-roledescription": "node",
        "aria-describedby": n().disableKeyboardA11y ? void 0 : `${Jc}-${n().flowId}`,
        ...r().domAttributes,
        [jn]: {
          dragging: c(N),
          selected: c(w),
          draggable: c(F),
          connectable: c(te),
          selectable: c(G),
          nopan: c(F),
          parent: c(ie)
        },
        [cn]: {
          "z-index": c(D),
          transform: `translate(${c(X) ?? ""}px, ${c(q) ?? ""}px)`,
          visibility: c(ne) ? "visible" : "hidden"
        }
      }));
      var De = R(Ye);
      Ti(De, () => c(Oe), (_e, nt) => {
        nt(_e, {
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
            return c(G);
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
            return c(D);
          },
          get dragging() {
            return c(N);
          },
          get draggable() {
            return c(F);
          },
          get dragHandle() {
            return c(W);
          },
          get parentId() {
            return c(H);
          },
          get type() {
            return c(A);
          },
          get isConnectable() {
            return c(te);
          },
          get positionAbsoluteX() {
            return c(X);
          },
          get positionAbsoluteY() {
            return c(q);
          },
          get width() {
            return c(K);
          },
          get height() {
            return c(B);
          }
        });
      }), Z(Ye), pt(Ye, (_e, nt) => Uc?.(_e, nt), () => ({
        nodeId: I,
        isSelectable: c(G),
        disabled: !c(F),
        handleSelector: c(W),
        noDragClass: n().noDragClass,
        nodeClickDistance: i(),
        onNodeMouseDown: n().handleNodeSelection,
        onDrag: (_e, nt, Tt, Xe) => {
          a()?.({ event: _e, targetNode: Tt, nodes: Xe });
        },
        onDragStart: (_e, nt, Tt, Xe) => {
          l()?.({ event: _e, targetNode: Tt, nodes: Xe });
        },
        onDragStop: (_e, nt, Tt, Xe) => {
          u()?.({ event: _e, targetNode: Tt, nodes: Xe });
        },
        store: n()
      })), Nt(Ye, (_e) => Q(fe, _e), () => c(fe)), L(ye, Ye);
    };
    ae(Ht, (ye) => {
      c(k) || ye(Qe);
    });
  }
  return L(e, Mt), ue(tt);
}
se(
  td,
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
var sm = /* @__PURE__ */ ee('<div class="svelte-flow__nodes"></div>');
function nd(e, t) {
  le(t, !0);
  let n = v(t, "store", 15), r = v(t, "nodeClickDistance", 7), o = v(t, "onnodeclick", 7), i = v(t, "onnodecontextmenu", 7), s = v(t, "onnodepointerenter", 7), a = v(t, "onnodepointermove", 7), l = v(t, "onnodepointerleave", 7), u = v(t, "onnodedrag", 7), d = v(t, "onnodedragstart", 7), p = v(t, "onnodedragstop", 7);
  const f = typeof ResizeObserver > "u" ? null : new ResizeObserver((w) => {
    const m = /* @__PURE__ */ new Map();
    w.forEach((b) => {
      const $ = b.target.getAttribute("data-id");
      m.set($, { id: $, nodeElement: b.target, force: !0 });
    }), n().updateNodeInternals(m);
  });
  $o(() => {
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
  return mt(y, 21, () => n().visible.nodes.values(), (w) => w.id, (w, m) => {
    td(w, {
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
  }), Z(y), L(e, y), ue(h);
}
se(
  nd,
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
var am = /* @__PURE__ */ ge('<svg class="svelte-flow__edge-wrapper"><g><!></g></svg>');
function rd(e, t) {
  le(t, !0);
  const n = v(t, "edge", 7), r = v(t, "store", 15), o = v(t, "onedgeclick", 7), i = v(t, "onedgecontextmenu", 7), s = v(t, "onedgepointerenter", 7), a = v(t, "onedgepointerleave", 7);
  let l = /* @__PURE__ */ E(() => n().source), u = /* @__PURE__ */ E(() => n().target), d = /* @__PURE__ */ E(() => n().sourceX), p = /* @__PURE__ */ E(() => n().sourceY), f = /* @__PURE__ */ E(() => n().targetX), h = /* @__PURE__ */ E(() => n().targetY), y = /* @__PURE__ */ E(() => n().sourcePosition), w = /* @__PURE__ */ E(() => n().targetPosition), m = /* @__PURE__ */ E(() => yt(n().animated, !1)), b = /* @__PURE__ */ E(() => yt(n().selected, !1)), $ = /* @__PURE__ */ E(() => n().label), _ = /* @__PURE__ */ E(() => n().labelStyle), x = /* @__PURE__ */ E(() => yt(n().data, () => ({}), !0)), k = /* @__PURE__ */ E(() => n().style), N = /* @__PURE__ */ E(() => n().interactionWidth), V = /* @__PURE__ */ E(() => yt(n().type, "default")), j = /* @__PURE__ */ E(() => n().sourceHandle), A = /* @__PURE__ */ E(() => n().targetHandle), H = /* @__PURE__ */ E(() => n().markerStart), z = /* @__PURE__ */ E(() => n().markerEnd), S = /* @__PURE__ */ E(() => n().selectable), T = /* @__PURE__ */ E(() => n().focusable), C = /* @__PURE__ */ E(() => yt(n().deletable, !0)), P = /* @__PURE__ */ E(() => n().hidden), M = /* @__PURE__ */ E(() => n().zIndex), K = /* @__PURE__ */ E(() => n().class), B = /* @__PURE__ */ E(() => n().ariaLabel), W = null;
  const { id: D } = n();
  Mr("svelteflow__edge_id", D);
  let X = /* @__PURE__ */ E(() => c(S) ?? r().elementsSelectable), q = /* @__PURE__ */ E(() => c(T) ?? r().edgesFocusable), U = /* @__PURE__ */ E(() => r().edgeTypes[c(V)] ?? fa), I = /* @__PURE__ */ E(() => c(H) ? `url('#${Ss(c(H), r().flowId)}')` : void 0), F = /* @__PURE__ */ E(() => c(z) ? `url('#${Ss(c(z), r().flowId)}')` : void 0);
  function G(ie) {
    const fe = r().edgeLookup.get(D);
    fe && (c(X) && r().handleEdgeSelection(D), o()?.({ event: ie, edge: fe }));
  }
  function te(ie, fe) {
    const pe = r().edgeLookup.get(D);
    pe && fe({ event: ie, edge: pe });
  }
  function ne(ie) {
    if (!r().disableKeyboardA11y && pc.includes(ie.key) && c(X)) {
      const { unselectNodesAndEdges: fe, addSelectedEdges: pe } = r();
      ie.key === "Escape" ? (W?.blur(), fe({ edges: [n()] })) : pe([D]);
    }
  }
  var J = {
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
  }, he = Se(), ce = oe(he);
  {
    var re = (ie) => {
      var fe = am();
      let pe;
      var Ce = R(fe);
      ot(Ce, () => ({
        class: ["svelte-flow__edge", c(K)],
        "data-id": D,
        onclick: G,
        oncontextmenu: i() ? (we) => {
          te(we, i());
        } : void 0,
        onpointerenter: s() ? (we) => {
          te(we, s());
        } : void 0,
        onpointerleave: a() ? (we) => {
          te(we, a());
        } : void 0,
        "aria-label": c(B) === null ? void 0 : c(B) ? c(B) : `Edge from ${c(l)} to ${c(u)}`,
        "aria-describedby": c(q) ? `${ed}-${r().flowId}` : void 0,
        role: n().ariaRole ?? (c(q) ? "group" : "img"),
        "aria-roledescription": "edge",
        onkeydown: c(q) ? ne : void 0,
        tabindex: c(q) ? 0 : void 0,
        ...n().domAttributes,
        [jn]: {
          animated: c(m),
          selected: c(b),
          selectable: c(X)
        }
      }));
      var de = R(Ce);
      Ti(de, () => c(U), (we, Oe) => {
        Oe(we, {
          get id() {
            return D;
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
            return c(N);
          },
          get selectable() {
            return c(X);
          },
          get deletable() {
            return c(C);
          },
          get type() {
            return c(V);
          },
          get sourceHandleId() {
            return c(j);
          },
          get targetHandleId() {
            return c(A);
          },
          get markerStart() {
            return c(I);
          },
          get markerEnd() {
            return c(F);
          }
        });
      }), Z(Ce), Nt(Ce, (we) => W = we, () => W), Z(fe), $e(() => pe = dt(fe, "", pe, { "z-index": c(M) })), L(ie, fe);
    };
    ae(ce, (ie) => {
      c(P) || ie(re);
    });
  }
  return L(e, he), ue(J);
}
se(
  rd,
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
var lm = /* @__PURE__ */ ge("<defs></defs>");
function od(e, t) {
  le(t, !1);
  const n = rn();
  Ou();
  var r = lm();
  mt(r, 5, () => n.markers, (o) => o.id, (o, i) => {
    id(o, Be(() => c(i)));
  }), Z(r), L(e, r), ue();
}
se(od, {}, [], [], !0);
var um = /* @__PURE__ */ ge('<polyline class="arrow" fill="none" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4"></polyline>'), cm = /* @__PURE__ */ ge('<polyline class="arrowclosed" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), dm = /* @__PURE__ */ ge('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function id(e, t) {
  le(t, !0);
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
      $e(() => {
        xe(m, "stroke-width", u()), b = dt(m, "", b, { stroke: l() });
      }), L(w, m);
    }, y = (w) => {
      var m = Se(), b = oe(m);
      {
        var $ = (_) => {
          var x = cm();
          let k;
          $e(() => {
            xe(x, "stroke-width", u()), k = dt(x, "", k, { stroke: l(), fill: l() });
          }), L(_, x);
        };
        ae(
          b,
          (_) => {
            r() === co.ArrowClosed && _($);
          },
          !0
        );
      }
      L(w, m);
    };
    ae(f, (w) => {
      r() === co.Arrow ? w(h) : w(y, !1);
    });
  }
  return Z(p), $e(() => {
    xe(p, "id", n()), xe(p, "markerWidth", `${o()}`), xe(p, "markerHeight", `${i()}`), xe(p, "markerUnits", s()), xe(p, "orient", a());
  }), L(e, p), ue(d);
}
se(
  id,
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
var fm = /* @__PURE__ */ ee('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!></div>');
function sd(e, t) {
  le(t, !0);
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
  od(d, {}), Z(u);
  var p = O(u, 2);
  return mt(p, 17, () => n().visible.edges.values(), (f) => f.id, (f, h) => {
    rd(f, {
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
  }), Z(l), L(e, l), ue(a);
}
se(
  sd,
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
var pm = /* @__PURE__ */ ee('<div class="svelte-flow__selection svelte-qtk83j"></div>');
const hm = {
  hash: "svelte-qtk83j",
  code: ".svelte-flow__selection.svelte-qtk83j {position:absolute;top:0;left:0;}"
};
function pa(e, t) {
  le(t, !0), He(e, hm);
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
  }, l = Se(), u = oe(l);
  {
    var d = (p) => {
      var f = pm();
      let h;
      $e((y) => h = dt(f, "", h, y), [
        () => ({
          width: typeof o() == "string" ? o() : gn(o()),
          height: typeof i() == "string" ? i() : gn(i()),
          transform: `translate(${n()}px, ${r()}px)`
        })
      ]), L(p, f);
    };
    ae(u, (p) => {
      s() && p(d);
    });
  }
  return L(e, l), ue(a);
}
se(pa, { x: {}, y: {}, width: {}, height: {}, isVisible: {} }, [], [], !0);
var gm = /* @__PURE__ */ ee("<div><!></div>");
const vm = {
  hash: "svelte-c7g5lf",
  code: `.svelte-flow__selection-wrapper.svelte-c7g5lf {position:absolute;top:0;left:0;z-index:2000;pointer-events:all;}.svelte-flow__selection-wrapper.svelte-c7g5lf:focus,
  .svelte-flow__selection-wrapper.svelte-c7g5lf:focus-visible {outline:none;}`
};
function ad(e, t) {
  le(t, !0), He(e, vm);
  let n = v(t, "store", 15), r = v(t, "onnodedrag", 7), o = v(t, "onnodedragstart", 7), i = v(t, "onnodedragstop", 7), s = v(t, "onselectionclick", 7), a = v(t, "onselectioncontextmenu", 7), l = /* @__PURE__ */ Ee(void 0);
  qe(() => {
    n().disableKeyboardA11y || c(l)?.focus({ preventScroll: !0 });
  });
  let u = /* @__PURE__ */ E(() => {
    if (n().selectionRectMode === "nodes") {
      n().nodes;
      const b = Eo(n().nodeLookup, { filter: ($) => !!$.selected });
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
    Object.prototype.hasOwnProperty.call(vi, b.key) && (b.preventDefault(), n().moveSelectedNodes(vi[b.key], b.shiftKey ? 4 : 1));
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
  }, y = Se(), w = oe(y);
  {
    var m = (b) => {
      var $ = gm();
      $.__contextmenu = d, $.__click = p, $.__keydown = function(...k) {
        (n().disableKeyboardA11y ? void 0 : f)?.apply(this, k);
      };
      let _;
      var x = R($);
      pa(x, { width: "100%", height: "100%", x: 0, y: 0 }), Z($), pt($, (k, N) => Uc?.(k, N), () => ({
        disabled: !1,
        store: n(),
        onDrag: (k, N, V, j) => {
          r()?.({ event: k, targetNode: null, nodes: j });
        },
        onDragStart: (k, N, V, j) => {
          o()?.({ event: k, targetNode: null, nodes: j });
        },
        onDragStop: (k, N, V, j) => {
          i()?.({ event: k, targetNode: null, nodes: j });
        }
      })), Nt($, (k) => Q(l, k), () => c(l)), $e(
        (k) => {
          Pt($, 1, An(["svelte-flow__selection-wrapper", n().noPanClass]), "svelte-c7g5lf"), xe($, "role", n().disableKeyboardA11y ? void 0 : "button"), xe($, "tabindex", n().disableKeyboardA11y ? void 0 : -1), _ = dt($, "", _, k);
        },
        [
          () => ({
            width: gn(c(u).width),
            height: gn(c(u).height),
            transform: `translate(${c(u).x ?? ""}px, ${c(u).y ?? ""}px)`
          })
        ]
      ), L(b, $);
    };
    ae(w, (b) => {
      n().selectionRectMode === "nodes" && c(u) && _n(c(u).x) && _n(c(u).y) && b(m);
    });
  }
  return L(e, y), ue(h);
}
er(["contextmenu", "click", "keydown"]);
se(
  ad,
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
function ln(e, t) {
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
              (k, N) => k | mm(N),
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
  return n && (s = ps(e, o, i)), {
    update: (a) => {
      const { enabled: l = !0, type: u = "keydown" } = a;
      n && (!l || o !== u) ? s?.() : !n && l && (s = ps(e, u, i)), n = l, o = u, r = a.trigger;
    },
    destroy: () => {
      s?.();
    }
  };
}
function st() {
  const e = /* @__PURE__ */ E(rn), t = (i) => {
    const s = hl(i) ? i : c(e).nodeLookup.get(i.id), a = s.parentId ? Wv(s.position, s.measured, s.parentId, c(e).nodeLookup, c(e).nodeOrigin) : s.position, l = {
      ...s,
      position: a,
      width: s.measured?.width ?? s.width,
      height: s.measured?.height ?? s.height
    };
    return Hr(l);
  };
  function n(i, s, a = { replace: !1 }) {
    c(e).nodes = lt(() => c(e).nodes).map((l) => {
      if (l.id === i) {
        const u = typeof s == "function" ? s(l) : s;
        return a?.replace && hl(u) ? u : { ...l, ...u };
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
    getNodes: (i) => i === void 0 ? c(e).nodes : wl(c(e).nodeLookup, i),
    getEdge: (i) => c(e).edgeLookup.get(i),
    getEdges: (i) => i === void 0 ? c(e).edges : wl(c(e).edgeLookup, i),
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
      const a = sa(i, c(e).width, c(e).height, c(e).minZoom, c(e).maxZoom, s?.padding ?? 0.1);
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
      const l = nl(i), u = l ? i : t(i);
      return u ? (a || c(e).nodes).filter((d) => {
        const p = c(e).nodeLookup.get(d.id);
        if (!p || !l && d.id === i.id)
          return !1;
        const f = Hr(p), h = fo(f, u);
        return s && h > 0 || h >= f.width * f.height || h >= u.width * u.height;
      }) : [];
    },
    isNodeIntersecting: (i, s, a = !0) => {
      const l = nl(i) ? i : t(i);
      if (!l)
        return !1;
      const u = fo(l, s);
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
      return No(h, [l, u, d], a !== null, a || [1, 1]);
    },
    /**
     *
     * @param position
     * @returns
     */
    flowToScreenPosition: (i) => {
      if (!c(e).domNode)
        return i;
      const { x: s, y: a, zoom: l } = c(e).viewport, { x: u, y: d } = c(e).domNode.getBoundingClientRect(), p = gi(i, [s, a, l]);
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
    getNodesBounds: (i) => Av(i, {
      nodeLookup: c(e).nodeLookup,
      nodeOrigin: c(e).nodeOrigin
    }),
    getHandleConnections: ({ type: i, id: s, nodeId: a }) => Array.from(c(e).connectionLookup.get(`${a}-${i}-${s ?? null}`)?.values() ?? [])
  };
}
function wl(e, t) {
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
function ld(e, t) {
  le(t, !0);
  let n = v(t, "store", 15), r = v(t, "selectionKey", 7, "Shift"), o = v(t, "multiSelectionKey", 23, () => sr() ? "Meta" : "Control"), i = v(t, "deleteKey", 7, "Backspace"), s = v(t, "panActivationKey", 7, " "), a = v(t, "zoomActivationKey", 23, () => sr() ? "Meta" : "Control"), { deleteElements: l } = st();
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
    set multiSelectionKey(m = sr() ? "Meta" : "Control") {
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
    set zoomActivationKey(m = sr() ? "Meta" : "Control") {
      a(m), g();
    }
  };
  return ii("blur", Ct, h), ii("contextmenu", Ct, h), pt(Ct, (m, b) => ln?.(m, b), () => ({
    trigger: f(r(), () => n(n().selectionKeyPressed = !0, !0)),
    type: "keydown"
  })), pt(Ct, (m, b) => ln?.(m, b), () => ({
    trigger: f(r(), () => n(n().selectionKeyPressed = !1, !0)),
    type: "keyup"
  })), pt(Ct, (m, b) => ln?.(m, b), () => ({
    trigger: f(o(), () => {
      n(n().multiselectionKeyPressed = !0, !0);
    }),
    type: "keydown"
  })), pt(Ct, (m, b) => ln?.(m, b), () => ({
    trigger: f(o(), () => n(n().multiselectionKeyPressed = !1, !0)),
    type: "keyup"
  })), pt(Ct, (m, b) => ln?.(m, b), () => ({
    trigger: f(i(), (m) => {
      !(m.originalEvent.ctrlKey || m.originalEvent.metaKey || m.originalEvent.shiftKey) && !Cc(m.originalEvent) && (n(n().deleteKeyPressed = !0, !0), y());
    }),
    type: "keydown"
  })), pt(Ct, (m, b) => ln?.(m, b), () => ({
    trigger: f(i(), () => n(n().deleteKeyPressed = !1, !0)),
    type: "keyup"
  })), pt(Ct, (m, b) => ln?.(m, b), () => ({
    trigger: f(s(), () => n(n().panActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), pt(Ct, (m, b) => ln?.(m, b), () => ({
    trigger: f(s(), () => n(n().panActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), pt(Ct, (m, b) => ln?.(m, b), () => ({
    trigger: f(a(), () => n(n().zoomActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), pt(Ct, (m, b) => ln?.(m, b), () => ({
    trigger: f(a(), () => n(n().zoomActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), ue(w);
}
se(
  ld,
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
var ym = /* @__PURE__ */ ge('<path fill="none" class="svelte-flow__connection-path"></path>'), wm = /* @__PURE__ */ ge('<svg class="svelte-flow__connectionline"><g><!></g></svg>');
function ud(e, t) {
  le(t, !0);
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
      case xn.Bezier: {
        const [h] = _c(f);
        return h;
      }
      case xn.Straight: {
        const [h] = Sc(f);
        return h;
      }
      case xn.Step:
      case xn.SmoothStep: {
        const [h] = aa({
          ...f,
          borderRadius: r() === xn.Step ? 0 : void 0
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
  }, u = Se(), d = oe(u);
  {
    var p = (f) => {
      var h = wm(), y = R(h), w = R(y);
      {
        var m = ($) => {
          var _ = Se(), x = oe(_);
          Ti(x, s, (k, N) => {
            N(k, {});
          }), L($, _);
        }, b = ($) => {
          var _ = ym();
          $e(() => {
            xe(_, "d", c(a)), dt(_, i());
          }), L($, _);
        };
        ae(w, ($) => {
          s() ? $(m) : $(b, !1);
        });
      }
      Z(y), Z(h), $e(
        ($) => {
          xe(h, "width", n().width), xe(h, "height", n().height), dt(h, o()), Pt(y, 0, $);
        },
        [
          () => An([
            "svelte-flow__connection",
            Ov(n().connection.isValid)
          ])
        ]
      ), L(f, h);
    };
    ae(d, (f) => {
      n().connection.inProgress && f(p);
    });
  }
  return L(e, u), ue(l);
}
se(
  ud,
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
var bm = /* @__PURE__ */ ee("<div><!></div>");
function To(e, t) {
  le(t, !0);
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
  ot(u, (p) => ({ class: p, style: r(), ...s }), [
    () => ["svelte-flow__panel", o(), ...c(a)]
  ]);
  var d = R(u);
  return Ge(d, () => i() ?? vt), Z(u), L(e, u), ue(l);
}
se(To, { position: {}, style: {}, class: {}, children: {} }, [], [], !0);
var xm = /* @__PURE__ */ ee('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function cd(e, t) {
  le(t, !0);
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
  }, i = Se(), s = oe(i);
  {
    var a = (l) => {
      To(l, {
        get position() {
          return r();
        },
        class: "svelte-flow__attribution",
        "data-message": "Feel free to remove the attribution or check out how you could support us: https://svelteflow.dev/support-us",
        children: (u, d) => {
          var p = xm();
          L(u, p);
        },
        $$slots: { default: !0 }
      });
    };
    ae(s, (l) => {
      n()?.hideAttribution || l(a);
    });
  }
  return L(e, i), ue(o);
}
se(cd, { proOptions: {}, position: {} }, [], [], !0);
var Cm = /* @__PURE__ */ ee("<div><!></div>");
const $m = {
  hash: "svelte-15m40wc",
  code: ".svelte-flow.svelte-15m40wc {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;background-color:var(--background-color, var(--background-color-default));}:root {--background-color-default: #fff;--background-pattern-color-default: #ddd;--minimap-mask-color-default: rgb(240, 240, 240, 0.6);--minimap-mask-stroke-color-default: none;--minimap-mask-stroke-width-default: 1;--controls-button-background-color-default: #fefefe;--controls-button-background-color-hover-default: #f4f4f4;--controls-button-color-default: inherit;--controls-button-color-hover-default: inherit;--controls-button-border-color-default: #eee;}"
};
function dd(e, t) {
  le(t, !0), He(e, $m);
  let n = v(t, "width", 7), r = v(t, "height", 7), o = v(t, "colorMode", 7), i = v(t, "domNode", 15), s = v(t, "clientWidth", 15), a = v(t, "clientHeight", 15), l = v(t, "children", 7), u = v(t, "rest", 7), d = /* @__PURE__ */ E(() => u().class), p = /* @__PURE__ */ E(() => Cp(u(), [
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
  }, y = Cm();
  ot(
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
      [cn]: m
    }),
    [
      () => ({ width: gn(n()), height: gn(r()) })
    ],
    void 0,
    void 0,
    "svelte-15m40wc"
  );
  var w = R(y);
  return Ge(w, () => l() ?? vt), Z(y), Nt(y, (m) => i(m), () => i()), La(y, "clientHeight", a), La(y, "clientWidth", s), L(e, y), ue(h);
}
se(
  dd,
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
var _m = /* @__PURE__ */ ee('<div class="svelte-flow__viewport-back svelte-flow__container"></div> <!> <div class="svelte-flow__edge-labels svelte-flow__container"></div> <!> <!> <!> <div class="svelte-flow__viewport-front svelte-flow__container"></div>', 1), km = /* @__PURE__ */ ee("<!> <!>", 1), Sm = /* @__PURE__ */ ee("<!> <!> <!> <!> <!>", 1);
function fd(e, t) {
  le(t, !0);
  let n = v(t, "width", 7), r = v(t, "height", 7), o = v(t, "proOptions", 7), i = v(t, "selectionKey", 7), s = v(t, "deleteKey", 7), a = v(t, "panActivationKey", 7), l = v(t, "multiSelectionKey", 7), u = v(t, "zoomActivationKey", 7), d = v(t, "paneClickDistance", 7, 1), p = v(t, "nodeClickDistance", 7, 1), f = v(t, "onmovestart", 7), h = v(t, "onmoveend", 7), y = v(t, "onmove", 7), w = v(t, "oninit", 7), m = v(t, "onnodeclick", 7), b = v(t, "onnodecontextmenu", 7), $ = v(t, "onnodedrag", 7), _ = v(t, "onnodedragstart", 7), x = v(t, "onnodedragstop", 7), k = v(t, "onnodepointerenter", 7), N = v(t, "onnodepointermove", 7), V = v(t, "onnodepointerleave", 7), j = v(t, "onselectionclick", 7), A = v(t, "onselectioncontextmenu", 7), H = v(t, "onselectionstart", 7), z = v(t, "onselectionend", 7), S = v(t, "onedgeclick", 7), T = v(t, "onedgecontextmenu", 7), C = v(t, "onedgepointerenter", 7), P = v(t, "onedgepointerleave", 7), M = v(t, "onpaneclick", 7), K = v(t, "onpanecontextmenu", 7), B = v(t, "panOnScrollMode", 23, () => ur.Free), W = v(t, "preventScrolling", 7, !0), D = v(t, "zoomOnScroll", 7, !0), X = v(t, "zoomOnDoubleClick", 7, !0), q = v(t, "zoomOnPinch", 7, !0), U = v(t, "panOnScroll", 7, !1), I = v(t, "panOnScrollSpeed", 7, 0.5), F = v(t, "panOnDrag", 7, !0), G = v(t, "selectionOnDrag", 7, !1), te = v(t, "connectionLineComponent", 7), ne = v(t, "connectionLineStyle", 7), J = v(t, "connectionLineContainerStyle", 7), he = v(t, "connectionLineType", 23, () => xn.Bezier), ce = v(t, "attributionPosition", 7), re = v(t, "children", 7), ie = v(t, "nodes", 31, () => Rt([])), fe = v(t, "edges", 31, () => Rt([])), pe = v(t, "viewport", 31, () => {
  }), Ce = /* @__PURE__ */ Ze(t, [
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
  ]), de = Fc({
    props: Ce,
    width: n(),
    height: r(),
    get nodes() {
      return ie();
    },
    set nodes(Y) {
      ie(Y);
    },
    get edges() {
      return fe();
    },
    set edges(Y) {
      fe(Y);
    },
    get viewport() {
      return pe();
    },
    set viewport(Y) {
      pe(Y);
    }
  });
  const we = Fn(mi);
  we && we.setStore && we.setStore(de), Mr(mi, {
    provider: !1,
    getStore() {
      return de;
    }
  }), qe(() => {
    const Y = { nodes: de.selectedNodes, edges: de.selectedEdges };
    lt(() => t.onselectionchange)?.(Y);
    for (const je of de.selectionChangeHandlers.values())
      je(Y);
  }), $o(() => {
    de.reset();
  });
  var Oe = {
    get width() {
      return n();
    },
    set width(Y) {
      n(Y), g();
    },
    get height() {
      return r();
    },
    set height(Y) {
      r(Y), g();
    },
    get proOptions() {
      return o();
    },
    set proOptions(Y) {
      o(Y), g();
    },
    get selectionKey() {
      return i();
    },
    set selectionKey(Y) {
      i(Y), g();
    },
    get deleteKey() {
      return s();
    },
    set deleteKey(Y) {
      s(Y), g();
    },
    get panActivationKey() {
      return a();
    },
    set panActivationKey(Y) {
      a(Y), g();
    },
    get multiSelectionKey() {
      return l();
    },
    set multiSelectionKey(Y) {
      l(Y), g();
    },
    get zoomActivationKey() {
      return u();
    },
    set zoomActivationKey(Y) {
      u(Y), g();
    },
    get paneClickDistance() {
      return d();
    },
    set paneClickDistance(Y = 1) {
      d(Y), g();
    },
    get nodeClickDistance() {
      return p();
    },
    set nodeClickDistance(Y = 1) {
      p(Y), g();
    },
    get onmovestart() {
      return f();
    },
    set onmovestart(Y) {
      f(Y), g();
    },
    get onmoveend() {
      return h();
    },
    set onmoveend(Y) {
      h(Y), g();
    },
    get onmove() {
      return y();
    },
    set onmove(Y) {
      y(Y), g();
    },
    get oninit() {
      return w();
    },
    set oninit(Y) {
      w(Y), g();
    },
    get onnodeclick() {
      return m();
    },
    set onnodeclick(Y) {
      m(Y), g();
    },
    get onnodecontextmenu() {
      return b();
    },
    set onnodecontextmenu(Y) {
      b(Y), g();
    },
    get onnodedrag() {
      return $();
    },
    set onnodedrag(Y) {
      $(Y), g();
    },
    get onnodedragstart() {
      return _();
    },
    set onnodedragstart(Y) {
      _(Y), g();
    },
    get onnodedragstop() {
      return x();
    },
    set onnodedragstop(Y) {
      x(Y), g();
    },
    get onnodepointerenter() {
      return k();
    },
    set onnodepointerenter(Y) {
      k(Y), g();
    },
    get onnodepointermove() {
      return N();
    },
    set onnodepointermove(Y) {
      N(Y), g();
    },
    get onnodepointerleave() {
      return V();
    },
    set onnodepointerleave(Y) {
      V(Y), g();
    },
    get onselectionclick() {
      return j();
    },
    set onselectionclick(Y) {
      j(Y), g();
    },
    get onselectioncontextmenu() {
      return A();
    },
    set onselectioncontextmenu(Y) {
      A(Y), g();
    },
    get onselectionstart() {
      return H();
    },
    set onselectionstart(Y) {
      H(Y), g();
    },
    get onselectionend() {
      return z();
    },
    set onselectionend(Y) {
      z(Y), g();
    },
    get onedgeclick() {
      return S();
    },
    set onedgeclick(Y) {
      S(Y), g();
    },
    get onedgecontextmenu() {
      return T();
    },
    set onedgecontextmenu(Y) {
      T(Y), g();
    },
    get onedgepointerenter() {
      return C();
    },
    set onedgepointerenter(Y) {
      C(Y), g();
    },
    get onedgepointerleave() {
      return P();
    },
    set onedgepointerleave(Y) {
      P(Y), g();
    },
    get onpaneclick() {
      return M();
    },
    set onpaneclick(Y) {
      M(Y), g();
    },
    get onpanecontextmenu() {
      return K();
    },
    set onpanecontextmenu(Y) {
      K(Y), g();
    },
    get panOnScrollMode() {
      return B();
    },
    set panOnScrollMode(Y = ur.Free) {
      B(Y), g();
    },
    get preventScrolling() {
      return W();
    },
    set preventScrolling(Y = !0) {
      W(Y), g();
    },
    get zoomOnScroll() {
      return D();
    },
    set zoomOnScroll(Y = !0) {
      D(Y), g();
    },
    get zoomOnDoubleClick() {
      return X();
    },
    set zoomOnDoubleClick(Y = !0) {
      X(Y), g();
    },
    get zoomOnPinch() {
      return q();
    },
    set zoomOnPinch(Y = !0) {
      q(Y), g();
    },
    get panOnScroll() {
      return U();
    },
    set panOnScroll(Y = !1) {
      U(Y), g();
    },
    get panOnScrollSpeed() {
      return I();
    },
    set panOnScrollSpeed(Y = 0.5) {
      I(Y), g();
    },
    get panOnDrag() {
      return F();
    },
    set panOnDrag(Y = !0) {
      F(Y), g();
    },
    get selectionOnDrag() {
      return G();
    },
    set selectionOnDrag(Y = !1) {
      G(Y), g();
    },
    get connectionLineComponent() {
      return te();
    },
    set connectionLineComponent(Y) {
      te(Y), g();
    },
    get connectionLineStyle() {
      return ne();
    },
    set connectionLineStyle(Y) {
      ne(Y), g();
    },
    get connectionLineContainerStyle() {
      return J();
    },
    set connectionLineContainerStyle(Y) {
      J(Y), g();
    },
    get connectionLineType() {
      return he();
    },
    set connectionLineType(Y = xn.Bezier) {
      he(Y), g();
    },
    get attributionPosition() {
      return ce();
    },
    set attributionPosition(Y) {
      ce(Y), g();
    },
    get children() {
      return re();
    },
    set children(Y) {
      re(Y), g();
    },
    get nodes() {
      return ie();
    },
    set nodes(Y = []) {
      ie(Y), g();
    },
    get edges() {
      return fe();
    },
    set edges(Y = []) {
      fe(Y), g();
    },
    get viewport() {
      return pe();
    },
    set viewport(Y = void 0) {
      pe(Y), g();
    }
  };
  return dd(e, {
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
    set domNode(Y) {
      de.domNode = Y;
    },
    get clientWidth() {
      return de.width;
    },
    set clientWidth(Y) {
      de.width = Y;
    },
    get clientHeight() {
      return de.height;
    },
    set clientHeight(Y) {
      de.height = Y;
    },
    children: (Y, je) => {
      var ze = Sm(), Ae = oe(ze);
      ld(Ae, {
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
      var Ie = O(Ae, 2);
      qc(Ie, {
        get panOnScrollMode() {
          return B();
        },
        get preventScrolling() {
          return W();
        },
        get zoomOnScroll() {
          return D();
        },
        get zoomOnDoubleClick() {
          return X();
        },
        get zoomOnPinch() {
          return q();
        },
        get panOnScroll() {
          return U();
        },
        get panOnScrollSpeed() {
          return I();
        },
        get panOnDrag() {
          return F();
        },
        get paneClickDistance() {
          return d();
        },
        get selectionOnDrag() {
          return G();
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
          return de;
        },
        set store(Qe) {
          de = Qe;
        },
        children: (Qe, ye) => {
          Xc(Qe, {
            get onpaneclick() {
              return M();
            },
            get onpanecontextmenu() {
              return K();
            },
            get onselectionstart() {
              return H();
            },
            get onselectionend() {
              return z();
            },
            get panOnDrag() {
              return F();
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
            set store(Ye) {
              de = Ye;
            },
            children: (Ye, De) => {
              var _e = km(), nt = oe(_e);
              Gc(nt, {
                get store() {
                  return de;
                },
                set store(Xe) {
                  de = Xe;
                },
                children: (Xe, wr) => {
                  var sn = _m(), an = O(oe(sn), 2);
                  sd(an, {
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
                      return de;
                    },
                    set store(rr) {
                      de = rr;
                    }
                  });
                  var ft = O(an, 4);
                  ud(ft, {
                    get type() {
                      return he();
                    },
                    get LineComponent() {
                      return te();
                    },
                    get containerStyle() {
                      return J();
                    },
                    get style() {
                      return ne();
                    },
                    get store() {
                      return de;
                    },
                    set store(rr) {
                      de = rr;
                    }
                  });
                  var xt = O(ft, 2);
                  nd(xt, {
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
                      return N();
                    },
                    get onnodepointerleave() {
                      return V();
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
                      return de;
                    },
                    set store(rr) {
                      de = rr;
                    }
                  });
                  var yn = O(xt, 2);
                  ad(yn, {
                    get onselectionclick() {
                      return j();
                    },
                    get onselectioncontextmenu() {
                      return A();
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
                      return de;
                    },
                    set store(rr) {
                      de = rr;
                    }
                  }), ve(2), L(Xe, sn);
                },
                $$slots: { default: !0 }
              });
              var Tt = O(nt, 2);
              {
                let Xe = /* @__PURE__ */ E(() => !!(de.selectionRect && de.selectionRectMode === "user")), wr = /* @__PURE__ */ E(() => de.selectionRect?.width), sn = /* @__PURE__ */ E(() => de.selectionRect?.height), an = /* @__PURE__ */ E(() => de.selectionRect?.x), ft = /* @__PURE__ */ E(() => de.selectionRect?.y);
                pa(Tt, {
                  get isVisible() {
                    return c(Xe);
                  },
                  get width() {
                    return c(wr);
                  },
                  get height() {
                    return c(sn);
                  },
                  get x() {
                    return c(an);
                  },
                  get y() {
                    return c(ft);
                  }
                });
              }
              L(Ye, _e);
            },
            $$slots: { default: !0 }
          });
        },
        $$slots: { default: !0 }
      });
      var tt = O(Ie, 2);
      cd(tt, {
        get proOptions() {
          return o();
        },
        get position() {
          return ce();
        }
      });
      var Mt = O(tt, 2);
      Qc(Mt, {
        get store() {
          return de;
        }
      });
      var Ht = O(Mt, 2);
      Ge(Ht, () => re() ?? vt), L(Y, ze);
    },
    $$slots: { default: !0 }
  }), ue(Oe);
}
se(
  fd,
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
function pd(e, t) {
  le(t, !0);
  let n = v(t, "children", 7), r = /* @__PURE__ */ Ee(Fc({ props: {}, nodes: [], edges: [] }));
  Mr(mi, {
    provider: !0,
    getStore() {
      return c(r);
    },
    setStore: (a) => {
      Q(r, a);
    }
  }), $o(() => {
    c(r).reset();
  });
  var o = {
    get children() {
      return n();
    },
    set children(a) {
      n(a), g();
    }
  }, i = Se(), s = oe(i);
  return Ge(s, () => n() ?? vt), L(e, i), ue(o);
}
se(pd, { children: {} }, [], [], !0);
var Em = /* @__PURE__ */ ee("<button><!></button>");
function Ur(e, t) {
  le(t, !0);
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
  ot(f, () => ({
    type: "button",
    onclick: l(),
    class: ["svelte-flow__controls-button", n()],
    ...d,
    [cn]: {
      "--xy-controls-button-background-color-props": r(),
      "--xy-controls-button-background-color-hover-props": o(),
      "--xy-controls-button-color-props": i(),
      "--xy-controls-button-color-hover-props": s(),
      "--xy-controls-button-border-color-props": a()
    }
  }));
  var h = R(f);
  return Ge(h, () => u() ?? vt), Z(f), L(e, f), ue(p);
}
se(
  Ur,
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
var Pm = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function hd(e) {
  var t = Pm();
  L(e, t);
}
se(hd, {}, [], [], !0);
var Nm = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function gd(e) {
  var t = Nm();
  L(e, t);
}
se(gd, {}, [], [], !0);
var Mm = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function vd(e) {
  var t = Mm();
  L(e, t);
}
se(vd, {}, [], [], !0);
var Tm = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function md(e) {
  var t = Tm();
  L(e, t);
}
se(md, {}, [], [], !0);
var Lm = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function yd(e) {
  var t = Lm();
  L(e, t);
}
se(yd, {}, [], [], !0);
var Vm = /* @__PURE__ */ ee("<!> <!>", 1), Dm = /* @__PURE__ */ ee("<!> <!> <!> <!> <!> <!>", 1);
function wd(e, t) {
  le(t, !0);
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
  let k = /* @__PURE__ */ E(() => c(_).nodesDraggable || c(_).nodesConnectable || c(_).elementsSelectable), N = /* @__PURE__ */ E(() => c(_).viewport.zoom <= c(_).minZoom), V = /* @__PURE__ */ E(() => c(_).viewport.zoom >= c(_).maxZoom), j = /* @__PURE__ */ E(() => c(_).ariaLabelConfig), A = /* @__PURE__ */ E(() => r() === "horizontal" ? "horizontal" : "vertical");
  const H = () => {
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
      c(A),
      l()
    ]);
    To(e, Be(
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
        children: (M, K) => {
          var B = Dm(), W = oe(B);
          {
            var D = (ce) => {
              var re = Se(), ie = oe(re);
              Ge(ie, m), L(ce, re);
            };
            ae(W, (ce) => {
              m() && ce(D);
            });
          }
          var X = O(W, 2);
          {
            var q = (ce) => {
              var re = Vm(), ie = oe(re);
              Ur(ie, Be(
                {
                  onclick: H,
                  class: "svelte-flow__controls-zoomin",
                  get title() {
                    return c(j)["controls.zoomIn.ariaLabel"];
                  },
                  get "aria-label"() {
                    return c(j)["controls.zoomIn.ariaLabel"];
                  },
                  get disabled() {
                    return c(V);
                  }
                },
                () => x,
                {
                  children: (pe, Ce) => {
                    hd(pe);
                  },
                  $$slots: { default: !0 }
                }
              ));
              var fe = O(ie, 2);
              Ur(fe, Be(
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
                    return c(N);
                  }
                },
                () => x,
                {
                  children: (pe, Ce) => {
                    gd(pe);
                  },
                  $$slots: { default: !0 }
                }
              )), L(ce, re);
            };
            ae(X, (ce) => {
              o() && ce(q);
            });
          }
          var U = O(X, 2);
          {
            var I = (ce) => {
              Ur(ce, Be(
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
                    vd(re);
                  },
                  $$slots: { default: !0 }
                }
              ));
            };
            ae(U, (ce) => {
              i() && ce(I);
            });
          }
          var F = O(U, 2);
          {
            var G = (ce) => {
              Ur(ce, Be(
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
                    var fe = Se(), pe = oe(fe);
                    {
                      var Ce = (we) => {
                        yd(we);
                      }, de = (we) => {
                        md(we);
                      };
                      ae(pe, (we) => {
                        c(k) ? we(Ce) : we(de, !1);
                      });
                    }
                    L(re, fe);
                  },
                  $$slots: { default: !0 }
                }
              ));
            };
            ae(F, (ce) => {
              s() && ce(G);
            });
          }
          var te = O(F, 2);
          {
            var ne = (ce) => {
              var re = Se(), ie = oe(re);
              Ge(ie, w), L(ce, re);
            };
            ae(te, (ce) => {
              w() && ce(ne);
            });
          }
          var J = O(te, 2);
          {
            var he = (ce) => {
              var re = Se(), ie = oe(re);
              Ge(ie, b), L(ce, re);
            };
            ae(J, (ce) => {
              b() && ce(he);
            });
          }
          L(M, B);
        },
        $$slots: { default: !0 }
      }
    ));
  }
  return ue(C);
}
se(
  wd,
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
var kn;
(function(e) {
  e.Lines = "lines", e.Dots = "dots", e.Cross = "cross";
})(kn || (kn = {}));
var Om = /* @__PURE__ */ ge("<circle></circle>");
function bd(e, t) {
  le(t, !0);
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
  return $e(() => {
    xe(i, "cx", n()), xe(i, "cy", n()), xe(i, "r", n()), Pt(i, 0, An(["svelte-flow__background-pattern", "dots", r()]));
  }), L(e, i), ue(o);
}
se(bd, { radius: {}, class: {} }, [], [], !0);
var zm = /* @__PURE__ */ ge("<path></path>");
function xd(e, t) {
  le(t, !0);
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
  return $e(() => {
    xe(a, "stroke-width", n()), xe(a, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), Pt(a, 0, An(["svelte-flow__background-pattern", o(), i()]));
  }), L(e, a), ue(s);
}
se(xd, { lineWidth: {}, dimensions: {}, variant: {}, class: {} }, [], [], !0);
const Am = {
  [kn.Dots]: 1,
  [kn.Lines]: 1,
  [kn.Cross]: 6
};
var Hm = /* @__PURE__ */ ge('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
function Cd(e, t) {
  le(t, !0);
  let n = v(t, "id", 7), r = v(t, "variant", 23, () => kn.Dots), o = v(t, "gap", 7, 20), i = v(t, "size", 7), s = v(t, "lineWidth", 7, 1), a = v(t, "bgColor", 7), l = v(t, "patternColor", 7), u = v(t, "patternClass", 7), d = v(t, "class", 7), p = /* @__PURE__ */ E(rn), f = /* @__PURE__ */ E(() => r() === kn.Dots), h = /* @__PURE__ */ E(() => r() === kn.Cross), y = /* @__PURE__ */ E(() => Array.isArray(o()) ? o() : [o(), o()]), w = /* @__PURE__ */ E(() => `background-pattern-${c(p).flowId}-${n() ?? ""}`), m = /* @__PURE__ */ E(() => [
    c(y)[0] * c(p).viewport.zoom || 1,
    c(y)[1] * c(p).viewport.zoom || 1
  ]), b = /* @__PURE__ */ E(() => (i() ?? Am[r()]) * c(p).viewport.zoom), $ = /* @__PURE__ */ E(() => c(h) ? [c(b), c(b)] : c(m)), _ = /* @__PURE__ */ E(() => c(f) ? [c(b) / 2, c(b) / 2] : [
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
    set variant(S = kn.Dots) {
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
  }, k = Hm();
  let N;
  var V = R(k), j = R(V);
  {
    var A = (S) => {
      {
        let T = /* @__PURE__ */ E(() => c(b) / 2);
        bd(S, {
          get radius() {
            return c(T);
          },
          get class() {
            return u();
          }
        });
      }
    }, H = (S) => {
      xd(S, {
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
    ae(j, (S) => {
      c(f) ? S(A) : S(H, !1);
    });
  }
  Z(V);
  var z = O(V);
  return Z(k), $e(() => {
    Pt(k, 0, An([
      "svelte-flow__background",
      "svelte-flow__container",
      d()
    ])), N = dt(k, "", N, {
      "--xy-background-color-props": a(),
      "--xy-background-pattern-color-props": l()
    }), xe(V, "id", c(w)), xe(V, "x", c(p).viewport.x % c(m)[0]), xe(V, "y", c(p).viewport.y % c(m)[1]), xe(V, "width", c(m)[0]), xe(V, "height", c(m)[1]), xe(V, "patternTransform", `translate(-${c(_)[0]},-${c(_)[1]})`), xe(z, "fill", `url(#${c(w)})`);
  }), L(e, k), ue(x);
}
se(
  Cd,
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
var Im = /* @__PURE__ */ ge("<rect></rect>");
function $d(e, t) {
  le(t, !0);
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
  }, m = Se(), b = oe(m);
  {
    var $ = (x) => {
      const k = /* @__PURE__ */ E(y);
      var N = Se(), V = oe(N);
      Ti(V, () => c(k), (j, A) => {
        A(j, {
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
      }), L(x, N);
    }, _ = (x) => {
      var k = Im();
      let N, V;
      $e(() => {
        N = Pt(k, 0, An(["svelte-flow__minimap-node", h()]), null, N, { selected: f() }), xe(k, "x", r()), xe(k, "y", o()), xe(k, "rx", a()), xe(k, "ry", a()), xe(k, "width", i()), xe(k, "height", s()), xe(k, "shape-rendering", u()), V = dt(k, "", V, {
          fill: l(),
          stroke: d(),
          "stroke-width": p()
        });
      }), L(x, k);
    };
    ae(b, (x) => {
      y() ? x($) : x(_, !1);
    });
  }
  return L(e, m), ue(w);
}
se(
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
const rs = (e) => e instanceof Function ? e : () => e;
var jm = /* @__PURE__ */ ge("<title> </title>"), Km = /* @__PURE__ */ ge('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>'), Rm = /* @__PURE__ */ ee('<svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>', 1);
function _d(e, t) {
  le(t, !0);
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
  ]), N = /* @__PURE__ */ E(rn), V = /* @__PURE__ */ E(() => c(N).ariaLabelConfig);
  const j = i() === void 0 ? void 0 : rs(i()), A = rs(o()), H = rs(s()), z = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  );
  let S = /* @__PURE__ */ E(() => `svelte-flow__minimap-desc-${c(N).flowId}`), T = /* @__PURE__ */ E(() => ({
    x: -c(N).viewport.x / c(N).viewport.zoom,
    y: -c(N).viewport.y / c(N).viewport.zoom,
    width: c(N).width / c(N).viewport.zoom,
    height: c(N).height / c(N).viewport.zoom
  })), C = /* @__PURE__ */ E(() => yc(Eo(c(N).nodeLookup, { filter: (J) => !J.hidden }), c(T))), P = /* @__PURE__ */ E(() => c(C).width / y()), M = /* @__PURE__ */ E(() => c(C).height / w()), K = /* @__PURE__ */ E(() => Math.max(c(P), c(M))), B = /* @__PURE__ */ E(() => c(K) * y()), W = /* @__PURE__ */ E(() => c(K) * w()), D = /* @__PURE__ */ E(() => 5 * c(K)), X = /* @__PURE__ */ E(() => c(C).x - (c(B) - c(C).width) / 2 - c(D)), q = /* @__PURE__ */ E(() => c(C).y - (c(W) - c(C).height) / 2 - c(D)), U = /* @__PURE__ */ E(() => c(B) + c(D) * 2), I = /* @__PURE__ */ E(() => c(W) + c(D) * 2);
  const F = () => c(K);
  var G = {
    get position() {
      return n();
    },
    set position(J = "bottom-right") {
      n(J), g();
    },
    get ariaLabel() {
      return r();
    },
    set ariaLabel(J) {
      r(J), g();
    },
    get nodeStrokeColor() {
      return o();
    },
    set nodeStrokeColor(J = "transparent") {
      o(J), g();
    },
    get nodeColor() {
      return i();
    },
    set nodeColor(J) {
      i(J), g();
    },
    get nodeClass() {
      return s();
    },
    set nodeClass(J = "") {
      s(J), g();
    },
    get nodeBorderRadius() {
      return a();
    },
    set nodeBorderRadius(J = 5) {
      a(J), g();
    },
    get nodeStrokeWidth() {
      return l();
    },
    set nodeStrokeWidth(J = 2) {
      l(J), g();
    },
    get nodeComponent() {
      return u();
    },
    set nodeComponent(J) {
      u(J), g();
    },
    get bgColor() {
      return d();
    },
    set bgColor(J) {
      d(J), g();
    },
    get maskColor() {
      return p();
    },
    set maskColor(J) {
      p(J), g();
    },
    get maskStrokeColor() {
      return f();
    },
    set maskStrokeColor(J) {
      f(J), g();
    },
    get maskStrokeWidth() {
      return h();
    },
    set maskStrokeWidth(J) {
      h(J), g();
    },
    get width() {
      return y();
    },
    set width(J = 200) {
      y(J), g();
    },
    get height() {
      return w();
    },
    set height(J = 150) {
      w(J), g();
    },
    get pannable() {
      return m();
    },
    set pannable(J = !0) {
      m(J), g();
    },
    get zoomable() {
      return b();
    },
    set zoomable(J = !0) {
      b(J), g();
    },
    get inversePan() {
      return $();
    },
    set inversePan(J) {
      $(J), g();
    },
    get zoomStep() {
      return _();
    },
    set zoomStep(J) {
      _(J), g();
    },
    get class() {
      return x();
    },
    set class(J) {
      x(J), g();
    }
  }, te = Rm(), ne = oe(te);
  {
    let J = /* @__PURE__ */ E(() => ["svelte-flow__minimap", x()]);
    zp(ne, () => ({ "--xy-minimap-background-color-props": d() })), To(ne.lastChild, Be(
      {
        get position() {
          return n();
        },
        get class() {
          return c(J);
        },
        "data-testid": "svelte-flow__minimap"
      },
      () => k,
      {
        children: (he, ce) => {
          var re = Se(), ie = oe(re);
          {
            var fe = (pe) => {
              var Ce = Km();
              let de;
              var we = R(Ce);
              {
                var Oe = (ze) => {
                  var Ae = jm(), Ie = R(Ae, !0);
                  Z(Ae), $e(() => {
                    xe(Ae, "id", c(S)), Re(Ie, r() ?? c(V)["minimap.ariaLabel"]);
                  }), L(ze, Ae);
                };
                ae(we, (ze) => {
                  (r() ?? c(V)["minimap.ariaLabel"]) && ze(Oe);
                });
              }
              var Y = O(we);
              mt(Y, 17, () => c(N).nodes, (ze) => ze.id, (ze, Ae) => {
                const Ie = /* @__PURE__ */ E(() => c(N).nodeLookup.get(c(Ae).id));
                var tt = Se(), Mt = oe(tt);
                {
                  var Ht = (Qe) => {
                    const ye = /* @__PURE__ */ E(() => tr(c(Ie)));
                    {
                      let Ye = /* @__PURE__ */ E(() => j?.(c(Ie))), De = /* @__PURE__ */ E(() => A(c(Ie))), _e = /* @__PURE__ */ E(() => H(c(Ie)));
                      $d(Qe, Be(
                        {
                          get id() {
                            return c(Ie).id;
                          },
                          get x() {
                            return c(Ie).internals.positionAbsolute.x;
                          },
                          get y() {
                            return c(Ie).internals.positionAbsolute.y;
                          }
                        },
                        () => c(ye),
                        {
                          get selected() {
                            return c(Ie).selected;
                          },
                          get nodeComponent() {
                            return u();
                          },
                          get color() {
                            return c(Ye);
                          },
                          get borderRadius() {
                            return a();
                          },
                          get strokeColor() {
                            return c(De);
                          },
                          get strokeWidth() {
                            return l();
                          },
                          get shapeRendering() {
                            return z;
                          },
                          get class() {
                            return c(_e);
                          }
                        }
                      ));
                    }
                  };
                  ae(Mt, (Qe) => {
                    c(Ie) && wc(c(Ie)) && !c(Ie).hidden && Qe(Ht);
                  });
                }
                L(ze, tt);
              });
              var je = O(Y);
              Z(Ce), pt(Ce, (ze, Ae) => Zm?.(ze, Ae), () => ({
                store: c(N),
                panZoom: c(N).panZoom,
                getViewScale: F,
                translateExtent: c(N).translateExtent,
                width: c(N).width,
                height: c(N).height,
                inversePan: $(),
                zoomStep: _(),
                pannable: m(),
                zoomable: b()
              })), $e(() => {
                xe(Ce, "width", y()), xe(Ce, "height", w()), xe(Ce, "viewBox", `${c(X) ?? ""} ${c(q) ?? ""} ${c(U) ?? ""} ${c(I) ?? ""}`), xe(Ce, "aria-labelledby", c(S)), de = dt(Ce, "", de, {
                  "--xy-minimap-mask-background-color-props": p(),
                  "--xy-minimap-mask-stroke-color-props": f(),
                  "--xy-minimap-mask-stroke-width-props": h() ? h() * c(K) : void 0
                }), xe(je, "d", `M${c(X) - c(D)},${c(q) - c(D)}h${c(U) + c(D) * 2}v${c(I) + c(D) * 2}h${-c(U) - c(D) * 2}z
      M${c(T).x ?? ""},${c(T).y ?? ""}h${c(T).width ?? ""}v${c(T).height ?? ""}h${-c(T).width}z`);
              }), L(pe, Ce);
            };
            ae(ie, (pe) => {
              c(N).panZoom && pe(fe);
            });
          }
          L(he, re);
        },
        $$slots: { default: !0 }
      }
    )), Z(ne);
  }
  return L(e, te), ue(G);
}
se(
  _d,
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
var Bm = /* @__PURE__ */ ee("<div><!></div>");
function kd(e, t) {
  le(t, !0);
  let n = v(t, "nodeId", 7), r = v(t, "position", 23, () => me.Top), o = v(t, "align", 7, "center"), i = v(t, "offset", 7, 10), s = v(t, "isVisible", 7), a = v(t, "children", 7), l = /* @__PURE__ */ Ze(t, [
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
  const u = rn(), { getNodesBounds: d } = st(), p = Fn("svelteflow__node_id");
  let f = /* @__PURE__ */ E(() => (u.nodes, (Array.isArray(n()) ? n() : [n() ?? p]).reduce(
    (k, N) => {
      const V = u.nodeLookup.get(N);
      return V && k.push(V), k;
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
    set position(k = me.Top) {
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
  }, $ = Se(), _ = oe($);
  {
    var x = (k) => {
      var N = Bm();
      ot(
        N,
        (j, A) => ({
          class: "svelte-flow__node-toolbar",
          "data-id": j,
          ...l,
          [cn]: A
        }),
        [
          () => c(f).reduce((j, A) => `${j}${A.id} `, "").trim(),
          () => ({
            display: Zc().value ? "none" : void 0,
            position: "absolute",
            transform: c(h),
            "z-index": c(y)
          })
        ]
      );
      var V = R(N);
      Ge(V, () => a() ?? vt), Z(N), pt(N, (j, A) => Ic?.(j, A), () => "root"), L(k, N);
    };
    ae(_, (k) => {
      u.domNode && c(m) && c(f) && k(x);
    });
  }
  return L(e, $), ue(b);
}
se(
  kd,
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
function Hn(e) {
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
const bl = "tinyflow-component", Wm = [
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
], Ym = [
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
], ha = [
  { label: "文字", value: "text" },
  { label: "图片", value: "image" },
  { label: "视频", value: "video" },
  { label: "音频", value: "audio" },
  { label: "文件", value: "file" },
  { label: "其他", value: "other" }
], Fm = [
  { label: "单行输入框", value: "input" },
  { label: "多行输入框", value: "textarea" },
  { label: "下拉菜单", value: "select" },
  { label: "单选", value: "radio" },
  { label: "多选", value: "checkbox" }
], qm = [
  { label: "单选", value: "radio" },
  { label: "多选", value: "checkbox" }
];
class Xm {
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
    const t = document.createElement(bl);
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
    const n = document.createElement(bl);
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
      Q(e, r), Q(t, o);
    },
    getNodes: () => c(e),
    setNodes: (r) => {
      Q(e, r);
    },
    getEdges: () => c(t),
    setEdges: (r) => {
      Q(t, r);
    },
    getViewport: () => c(n),
    setViewport: (r) => {
      Q(n, r);
    },
    getNode: (r) => c(e).find((o) => o.id === r),
    addNode: (r) => {
      Q(e, [...c(e), r]);
    },
    removeNode: (r) => {
      Q(e, c(e).filter((o) => o.id !== r));
    },
    updateNode: (r, o) => {
      Q(e, c(e).map((i) => i.id === r ? { ...i, ...o } : i));
    },
    updateNodes: (r) => {
      Q(e, r(c(e)));
    },
    updateNodeData: (r, o) => {
      Q(e, c(e).map((i) => i.id === r ? { ...i, data: { ...i.data, ...o } } : i));
    },
    selectNodeOnly: (r) => {
      Q(e, c(e).map((o) => o.id === r ? { ...o, selected: !0 } : { ...o, selected: !1 }));
    },
    getEdge: (r) => c(t).find((o) => o.id === r),
    addEdge: (r) => {
      Q(t, [...c(t), r]);
    },
    removeEdge: (r) => {
      Q(t, c(t).filter((o) => o.id !== r));
    },
    updateEdge: (r, o) => {
      Q(t, c(t).map((i) => i.id === r ? { ...i, ...o } : i));
    },
    updateEdges: (r) => {
      Q(t, r(c(t)));
    },
    updateEdgeData: (r, o) => {
      Q(t, c(t).map((i) => i.id === r ? { ...i, data: { ...i.data, ...o } } : i));
    }
  };
}, Le = Gm();
var Um = /* @__PURE__ */ ee("<button><!></button>");
function Me(e, t) {
  le(t, !0);
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
  }, s = Um();
  ot(s, () => ({
    type: "button",
    ...o,
    class: `tf-btn ${r() ? "tf-btn-primary" : ""} nopan nodrag ${t.class ?? ""}`
  }));
  var a = R(s);
  return Ge(a, () => n() ?? vt), Z(s), L(e, s), ue(i);
}
se(Me, { children: {}, primary: {} }, [], [], !0);
var Qm = /* @__PURE__ */ ee("<input/>");
function Sd(e, t) {
  le(t, !0);
  const n = /* @__PURE__ */ Ze(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = Qm();
  ot(
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
  ), L(e, r), ue();
}
se(Sd, {}, [], [], !0);
var Jm = /* @__PURE__ */ ee('<div><input type="hidden"/> <!> <!></div>');
const ey = {
  hash: "svelte-1o3a23c",
  code: ".tf-chosen.svelte-1o3a23c {display:flex;flex-direction:row;align-items:center;justify-content:space-between;gap:5px;}"
};
function Ed(e, t) {
  le(t, !0), He(e, ey);
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
  }, u = Jm();
  ot(
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
  Cn(d);
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
  return Me(f, {
    onclick: (h) => {
      s()?.(o(), r(), h);
    },
    style: "padding: 3px",
    children: (h, y) => {
      ve();
      var w = ke();
      $e(() => Re(w, i())), L(h, w);
    },
    $$slots: { default: !0 }
  }), Z(u), $e(() => Yo(d, o())), L(e, u), ue(l);
}
se(
  Ed,
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
var ty = /* @__PURE__ */ ee("<input/>");
function Je(e, t) {
  le(t, !0);
  const n = /* @__PURE__ */ Ze(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = ty();
  ot(
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
  ), L(e, r), ue();
}
se(Je, {}, [], [], !0);
var ny = /* @__PURE__ */ ee("<textarea></textarea>");
function Ke(e, t) {
  le(t, !0);
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
  return ot(f, () => ({
    spellcheck: "false",
    ...a,
    oninput: h,
    onchange: y,
    class: `tf-textarea nodrag nowheel ${t.class ?? ""}`,
    value: n() || ""
  })), Nt(f, (w) => l = w, () => l), L(e, f), ue(p);
}
se(
  Ke,
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
var ry = /* @__PURE__ */ ee('<div role="button"><!></div>'), oy = /* @__PURE__ */ ee("<div></div>");
function Pd(e, t) {
  const n = Oa(t, ["children", "$$slots", "$$events", "$$legacy", "$$host"]), r = Oa(n, ["items", "onChange", "activeIndex"]);
  le(t, !1);
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
  Ou();
  var u = oy();
  return ot(u, () => ({
    ...r,
    class: `tf-tabs ${Ys(r), lt(() => r.class) ?? ""}`
  })), mt(u, 5, o, Lr, (d, p, f) => {
    var h = ry();
    xe(h, "tabindex", f), h.__click = () => a(c(p), f), h.__keydown = (b) => {
      (b.key === "Enter" || b.key === " ") && (b.preventDefault(), a(c(p), f));
    };
    var y = R(h);
    {
      var w = (b) => {
        var $ = ke();
        $e(() => Re($, (c(p), lt(() => c(p).label)))), L(b, $);
      }, m = (b) => {
        var $ = Se(), _ = oe($);
        Ge(_, () => (c(p), lt(() => c(p).label) ?? vt)), L(b, $);
      };
      ae(y, (b) => {
        c(p), lt(() => typeof c(p).label == "string") ? b(w) : b(m, !1);
      });
    }
    Z(h), $e(() => Pt(h, 1, `tf-tabs-item ${f === s() ? "active" : ""}`)), L(d, h);
  }), Z(u), L(e, u), ue(l);
}
er(["click", "keydown"]);
se(Pd, { items: {}, onChange: {}, activeIndex: {} }, [], [], !0);
var iy = /* @__PURE__ */ ee('<span class="tf-collapse-item-title-icon"><!></span>'), sy = /* @__PURE__ */ ee('<div class="tf-collapse-item-description"><!></div>'), ay = /* @__PURE__ */ ee('<div class="tf-collapse-item-content"><!></div>'), ly = /* @__PURE__ */ ee('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><!> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), uy = /* @__PURE__ */ ee("<div></div>");
const cy = {
  hash: "svelte-ynwjxt",
  code: `
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-ynwjxt {transform:rotate(90deg);transition:transform 0.3s ease;}`
};
function Nd(e, t) {
  le(t, !0), He(e, cy);
  let n = v(t, "items", 7), r = v(t, "onChange", 7), o = v(t, "activeKeys", 31, () => Rt([]));
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
  return mt(a, 21, n, Lr, (l, u, d) => {
    var p = ly(), f = R(p);
    xe(f, "tabindex", d), f.__click = () => i(c(u)), f.__keydown = (k) => {
      (k.key === "Enter" || k.key === " ") && (k.preventDefault(), i(c(u)));
    };
    var h = R(f);
    {
      var y = (k) => {
        var N = iy(), V = R(N);
        Kn(V, {
          get target() {
            return c(u).icon;
          }
        }), Z(N), L(k, N);
      };
      ae(h, (k) => {
        c(u).icon && k(y);
      });
    }
    var w = O(h, 2);
    Kn(w, {
      get target() {
        return c(u).title;
      }
    });
    var m = O(w, 2);
    Z(f);
    var b = O(f, 2);
    {
      var $ = (k) => {
        var N = sy(), V = R(N);
        Kn(V, {
          get target() {
            return c(u).description;
          }
        }), Z(N), L(k, N);
      };
      ae(b, (k) => {
        c(u).description && k($);
      });
    }
    var _ = O(b, 2);
    {
      var x = (k) => {
        var N = ay(), V = R(N);
        Kn(V, {
          get target() {
            return c(u).content;
          }
        }), Z(N), L(k, N);
      };
      ae(_, (k) => {
        o().includes(c(u).key) && k(x);
      });
    }
    Z(p), $e((k) => Pt(m, 1, `tf-collapse-item-title-arrow ${k ?? ""}`, "svelte-ynwjxt"), [
      () => o().includes(c(u).key) ? "rotate-90" : ""
    ]), L(l, p);
  }), Z(a), $e(() => {
    dt(a, t.style), Pt(a, 1, `tf-collapse ${t.class ?? ""}`, "svelte-ynwjxt");
  }), L(e, a), ue(s);
}
er(["click", "keydown"]);
se(Nd, { items: {}, onChange: {}, activeKeys: {} }, [], [], !0);
function Kn(e, t) {
  le(t, !0);
  let n = v(t, "target", 7);
  typeof n() > "u" && n("undefined");
  var r = {
    get target() {
      return n();
    },
    set target(l) {
      n(l), g();
    }
  }, o = Se(), i = oe(o);
  {
    var s = (l) => {
      var u = Se(), d = oe(u);
      Ge(d, () => n() ?? vt), L(l, u);
    }, a = (l) => {
      var u = Se(), d = oe(u);
      Xs(d, n), L(l, u);
    };
    ae(i, (l) => {
      typeof n() == "function" ? l(s) : l(a, !1);
    });
  }
  return L(e, o), ue(r);
}
se(Kn, { target: {} }, [], [], !0);
var dy = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), fy = /* @__PURE__ */ ee('<div class="tf-select-content-children"><!></div>'), py = /* @__PURE__ */ ee('<button class="tf-select-content-item"><span><!></span> <!></button> <!>', 1), hy = /* @__PURE__ */ ee('<div class="tf-select-content nopan nodrag nowheel "><!></div>'), gy = /* @__PURE__ */ ee("<!> <!>", 1), vy = /* @__PURE__ */ ee('<div class="tf-select-input-placeholder"> </div>'), my = /* @__PURE__ */ ee('<button><div class="tf-select-input-value"></div> <div class="tf-select-input-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></div></button>'), yy = /* @__PURE__ */ ee("<div><!></div>");
function ut(e, t) {
  le(t, !0);
  const n = ($, _ = vt) => {
    var x = Se(), k = oe(x);
    mt(k, 19, _, (N, V) => `${V}_${N.value}`, (N, V) => {
      var j = py(), A = oe(j);
      A.__click = () => y(c(V));
      var H = R(A), z = R(H);
      {
        var S = (M) => {
          var K = dy();
          L(M, K);
        };
        ae(z, (M) => {
          c(V).children && c(V).children.length > 0 && M(S);
        });
      }
      Z(H);
      var T = O(H, 2);
      Kn(T, {
        get target() {
          return c(V).label;
        }
      }), Z(A);
      var C = O(A, 2);
      {
        var P = (M) => {
          var K = fy(), B = R(K);
          n(B, () => c(V).children), Z(K), L(M, K);
        };
        ae(C, (M) => {
          c(V).children && c(V).children.length > 0 && (a() || u().includes(c(V).value)) && M(P);
        });
      }
      L(N, j);
    }), L($, x);
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
  ot(m, () => ({ ...p, class: `tf-select ${p.class ?? ""}` }));
  var b = R(m);
  return Nt(
    nr(b, {
      floating: ($) => {
        var _ = hy(), x = R(_);
        n(x, r), Z(_), L($, _);
      },
      children: ($, _) => {
        var x = my();
        ot(x, () => ({ class: "tf-select-input nopan nodrag", ...p }));
        var k = R(x);
        mt(
          k,
          23,
          () => c(f),
          (N, V) => `${V}_${N.value}`,
          (N, V, j) => {
            var A = Se(), H = oe(A);
            {
              var z = (T) => {
                var C = Se(), P = oe(C);
                {
                  var M = (K) => {
                    Kn(K, {
                      get target() {
                        return c(V).label;
                      }
                    });
                  };
                  ae(P, (K) => {
                    c(j) === 0 && K(M);
                  });
                }
                L(T, C);
              }, S = (T) => {
                var C = gy(), P = oe(C);
                Kn(P, {
                  get target() {
                    return c(V).label;
                  }
                });
                var M = O(P, 2);
                {
                  var K = (B) => {
                    var W = ke(",");
                    L(B, W);
                  };
                  ae(M, (B) => {
                    c(j) < c(f).length - 1 && B(K);
                  });
                }
                L(T, C);
              };
              ae(H, (T) => {
                l() ? T(S, !1) : T(z);
              });
            }
            L(N, A);
          },
          (N) => {
            var V = vy(), j = R(V, !0);
            Z(V), $e(() => Re(j, d())), L(N, V);
          }
        ), Z(k), ve(2), Z(x), L($, x);
      },
      $$slots: { floating: !0, default: !0 }
    }),
    ($) => h = $,
    () => h
  ), Z(m), L(e, m), ue(w);
}
er(["click"]);
se(
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
const ho = Math.min, Er = Math.max, yi = Math.round, hn = (e) => ({
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
function Es(e, t, n) {
  return Er(e, ho(t, n));
}
function Lo(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function gr(e) {
  return e.split("-")[0];
}
function Vo(e) {
  return e.split("-")[1];
}
function Md(e) {
  return e === "x" ? "y" : "x";
}
function ga(e) {
  return e === "y" ? "height" : "width";
}
const xy = /* @__PURE__ */ new Set(["top", "bottom"]);
function Rn(e) {
  return xy.has(gr(e)) ? "y" : "x";
}
function va(e) {
  return Md(Rn(e));
}
function Cy(e, t, n) {
  n === void 0 && (n = !1);
  const r = Vo(e), o = va(e), i = ga(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = wi(s)), [s, wi(s)];
}
function $y(e) {
  const t = wi(e);
  return [Ps(e), t, Ps(t)];
}
function Ps(e) {
  return e.replace(/start|end/g, (t) => by[t]);
}
const xl = ["left", "right"], Cl = ["right", "left"], _y = ["top", "bottom"], ky = ["bottom", "top"];
function Sy(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Cl : xl : t ? xl : Cl;
    case "left":
    case "right":
      return t ? _y : ky;
    default:
      return [];
  }
}
function Ey(e, t, n, r) {
  const o = Vo(e);
  let i = Sy(gr(e), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map(Ps)))), i;
}
function wi(e) {
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
function Td(e) {
  return typeof e != "number" ? Py(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function bi(e) {
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
  const i = Rn(t), s = va(t), a = ga(s), l = gr(t), u = i === "y", d = r.x + r.width / 2 - o.width / 2, p = r.y + r.height / 2 - o.height / 2, f = r[a] / 2 - o[a] / 2;
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
  switch (Vo(t)) {
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
async function Ld(e, t) {
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
  } = Lo(t, e), y = Td(h), w = a[f ? p === "floating" ? "reference" : "floating" : p], m = bi(await i.getClippingRect({
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
  }, x = bi(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
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
const My = (e) => ({
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
    const p = Td(d), f = {
      x: n,
      y: r
    }, h = va(o), y = ga(h), w = await s.getDimensions(u), m = h === "y", b = m ? "top" : "left", $ = m ? "bottom" : "right", _ = m ? "clientHeight" : "clientWidth", x = i.reference[y] + i.reference[h] - f[h] - i.floating[y], k = f[h] - i.reference[h], N = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
    let V = N ? N[_] : 0;
    (!V || !await (s.isElement == null ? void 0 : s.isElement(N))) && (V = a.floating[_] || i.floating[y]);
    const j = x / 2 - k / 2, A = V / 2 - w[y] / 2 - 1, H = ho(p[b], A), z = ho(p[$], A), S = H, T = V - w[y] - z, C = V / 2 - w[y] / 2 + j, P = Es(S, C, T), M = !l.arrow && Vo(o) != null && C !== P && i.reference[y] / 2 - (C < S ? H : z) - w[y] / 2 < 0, K = M ? C < S ? C - S : C - T : 0;
    return {
      [h]: f[h] + K,
      data: {
        [h]: P,
        centerOffset: C - P - K,
        ...M && {
          alignmentOffset: K
        }
      },
      reset: M
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
      const b = gr(o), $ = Rn(a), _ = gr(a) === a, x = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), k = f || (_ || !w ? [wi(a)] : $y(a)), N = y !== "none";
      !f && N && k.push(...Ey(a, w, y, x));
      const V = [a, ...k], j = await Ld(t, m), A = [];
      let H = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (d && A.push(j[b]), p) {
        const C = Cy(o, s, x);
        A.push(j[C[0]], j[C[1]]);
      }
      if (H = [...H, {
        placement: o,
        overflows: A
      }], !A.every((C) => C <= 0)) {
        var z, S;
        const C = (((z = i.flip) == null ? void 0 : z.index) || 0) + 1, P = V[C];
        if (P && (!(p === "alignment" && $ !== Rn(P)) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        H.every((K) => Rn(K.placement) === $ ? K.overflows[0] > 0 : !0)))
          return {
            data: {
              index: C,
              overflows: H
            },
            reset: {
              placement: P
            }
          };
        let M = (S = H.filter((K) => K.overflows[0] <= 0).sort((K, B) => K.overflows[1] - B.overflows[1])[0]) == null ? void 0 : S.placement;
        if (!M)
          switch (h) {
            case "bestFit": {
              var T;
              const K = (T = H.filter((B) => {
                if (N) {
                  const W = Rn(B.placement);
                  return W === $ || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  W === "y";
                }
                return !0;
              }).map((B) => [B.placement, B.overflows.filter((W) => W > 0).reduce((W, D) => W + D, 0)]).sort((B, W) => B[1] - W[1])[0]) == null ? void 0 : T[0];
              K && (M = K);
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
}, Ly = /* @__PURE__ */ new Set(["left", "top"]);
async function Vy(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = gr(n), a = Vo(n), l = Rn(n) === "y", u = Ly.has(s) ? -1 : 1, d = i && l ? -1 : 1, p = Lo(t, e);
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
      } = t, l = await Vy(t, e);
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
      }, d = await Ld(t, l), p = Rn(gr(o)), f = Md(p);
      let h = u[f], y = u[p];
      if (i) {
        const m = f === "y" ? "top" : "left", b = f === "y" ? "bottom" : "right", $ = h + d[m], _ = h - d[b];
        h = Es($, h, _);
      }
      if (s) {
        const m = p === "y" ? "top" : "left", b = p === "y" ? "bottom" : "right", $ = y + d[m], _ = y - d[b];
        y = Es($, y, _);
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
function ji() {
  return typeof window < "u";
}
function Br(e) {
  return Vd(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function zt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function In(e) {
  var t;
  return (t = (Vd(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Vd(e) {
  return ji() ? e instanceof Node || e instanceof zt(e).Node : !1;
}
function Jt(e) {
  return ji() ? e instanceof Element || e instanceof zt(e).Element : !1;
}
function vn(e) {
  return ji() ? e instanceof HTMLElement || e instanceof zt(e).HTMLElement : !1;
}
function _l(e) {
  return !ji() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof zt(e).ShadowRoot;
}
const zy = /* @__PURE__ */ new Set(["inline", "contents"]);
function Do(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = en(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !zy.has(o);
}
const Ay = /* @__PURE__ */ new Set(["table", "td", "th"]);
function Hy(e) {
  return Ay.has(Br(e));
}
const Iy = [":popover-open", ":modal"];
function Ki(e) {
  return Iy.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const Zy = ["transform", "translate", "scale", "rotate", "perspective"], jy = ["transform", "translate", "scale", "rotate", "perspective", "filter"], Ky = ["paint", "layout", "strict", "content"];
function ma(e) {
  const t = ya(), n = Jt(e) ? en(e) : e;
  return Zy.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || jy.some((r) => (n.willChange || "").includes(r)) || Ky.some((r) => (n.contain || "").includes(r));
}
function Ry(e) {
  let t = Gn(e);
  for (; vn(t) && !Zr(t); ) {
    if (ma(t))
      return t;
    if (Ki(t))
      return null;
    t = Gn(t);
  }
  return null;
}
function ya() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const By = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function Zr(e) {
  return By.has(Br(e));
}
function en(e) {
  return zt(e).getComputedStyle(e);
}
function Ri(e) {
  return Jt(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Gn(e) {
  if (Br(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    _l(e) && e.host || // Fallback.
    In(e)
  );
  return _l(t) ? t.host : t;
}
function Dd(e) {
  const t = Gn(e);
  return Zr(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : vn(t) && Do(t) ? t : Dd(t);
}
function Od(e, t, n) {
  var r;
  t === void 0 && (t = []);
  const o = Dd(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = zt(o);
  return i ? (Ns(s), t.concat(s, s.visualViewport || [], Do(o) ? o : [], [])) : t.concat(o, Od(o, []));
}
function Ns(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function zd(e) {
  const t = en(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = vn(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, a = yi(n) !== i || yi(r) !== s;
  return a && (n = i, r = s), {
    width: n,
    height: r,
    $: a
  };
}
function Ad(e) {
  return Jt(e) ? e : e.contextElement;
}
function Pr(e) {
  const t = Ad(e);
  if (!vn(t))
    return hn(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = zd(t);
  let s = (i ? yi(n.width) : n.width) / r, a = (i ? yi(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const Wy = /* @__PURE__ */ hn(0);
function Hd(e) {
  const t = zt(e);
  return !ya() || !t.visualViewport ? Wy : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Yy(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== zt(e) ? !1 : t;
}
function go(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = Ad(e);
  let s = hn(1);
  t && (r ? Jt(r) && (s = Pr(r)) : s = Pr(e));
  const a = Yy(i, n, r) ? Hd(i) : hn(0);
  let l = (o.left + a.x) / s.x, u = (o.top + a.y) / s.y, d = o.width / s.x, p = o.height / s.y;
  if (i) {
    const f = zt(i), h = r && Jt(r) ? zt(r) : r;
    let y = f, w = Ns(y);
    for (; w && r && h !== y; ) {
      const m = Pr(w), b = w.getBoundingClientRect(), $ = en(w), _ = b.left + (w.clientLeft + parseFloat($.paddingLeft)) * m.x, x = b.top + (w.clientTop + parseFloat($.paddingTop)) * m.y;
      l *= m.x, u *= m.y, d *= m.x, p *= m.y, l += _, u += x, y = zt(w), w = Ns(y);
    }
  }
  return bi({
    width: d,
    height: p,
    x: l,
    y: u
  });
}
function Bi(e, t) {
  const n = Ri(e).scrollLeft;
  return t ? t.left + n : go(In(e)).left + n;
}
function Id(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - Bi(e, n), o = n.top + t.scrollTop;
  return {
    x: r,
    y: o
  };
}
function Fy(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", s = In(r), a = t ? Ki(t.floating) : !1;
  if (r === s || a && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = hn(1);
  const d = hn(0), p = vn(r);
  if ((p || !p && !i) && ((Br(r) !== "body" || Do(s)) && (l = Ri(r)), vn(r))) {
    const h = go(r);
    u = Pr(r), d.x = h.x + r.clientLeft, d.y = h.y + r.clientTop;
  }
  const f = s && !p && !i ? Id(s, l) : hn(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + d.x + f.x,
    y: n.y * u.y - l.scrollTop * u.y + d.y + f.y
  };
}
function qy(e) {
  return Array.from(e.getClientRects());
}
function Xy(e) {
  const t = In(e), n = Ri(e), r = e.ownerDocument.body, o = Er(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = Er(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + Bi(e);
  const a = -n.scrollTop;
  return en(r).direction === "rtl" && (s += Er(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
const kl = 25;
function Gy(e, t) {
  const n = zt(e), r = In(e), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, a = 0, l = 0;
  if (o) {
    i = o.width, s = o.height;
    const d = ya();
    (!d || d && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  const u = Bi(r);
  if (u <= 0) {
    const d = r.ownerDocument, p = d.body, f = getComputedStyle(p), h = d.compatMode === "CSS1Compat" && parseFloat(f.marginLeft) + parseFloat(f.marginRight) || 0, y = Math.abs(r.clientWidth - p.clientWidth - h);
    y <= kl && (i -= y);
  } else u <= kl && (i += u);
  return {
    width: i,
    height: s,
    x: a,
    y: l
  };
}
const Uy = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function Qy(e, t) {
  const n = go(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = vn(e) ? Pr(e) : hn(1), s = e.clientWidth * i.x, a = e.clientHeight * i.y, l = o * i.x, u = r * i.y;
  return {
    width: s,
    height: a,
    x: l,
    y: u
  };
}
function Sl(e, t, n) {
  let r;
  if (t === "viewport")
    r = Gy(e, n);
  else if (t === "document")
    r = Xy(In(e));
  else if (Jt(t))
    r = Qy(t, n);
  else {
    const o = Hd(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return bi(r);
}
function Zd(e, t) {
  const n = Gn(e);
  return n === t || !Jt(n) || Zr(n) ? !1 : en(n).position === "fixed" || Zd(n, t);
}
function Jy(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Od(e, []).filter((a) => Jt(a) && Br(a) !== "body"), o = null;
  const i = en(e).position === "fixed";
  let s = i ? Gn(e) : e;
  for (; Jt(s) && !Zr(s); ) {
    const a = en(s), l = ma(s);
    !l && a.position === "fixed" && (o = null), (i ? !l && !o : !l && a.position === "static" && o && Uy.has(o.position) || Do(s) && !l && Zd(e, s)) ? r = r.filter((u) => u !== s) : o = a, s = Gn(s);
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
  const i = [...n === "clippingAncestors" ? Ki(t) ? [] : Jy(t, this._c) : [].concat(n), r], s = i[0], a = i.reduce((l, u) => {
    const d = Sl(t, u, o);
    return l.top = Er(d.top, l.top), l.right = ho(d.right, l.right), l.bottom = ho(d.bottom, l.bottom), l.left = Er(d.left, l.left), l;
  }, Sl(t, s, o));
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
  } = zd(e);
  return {
    width: t,
    height: n
  };
}
function n2(e, t, n) {
  const r = vn(t), o = In(t), i = n === "fixed", s = go(e, !0, i, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = hn(0);
  function u() {
    l.x = Bi(o);
  }
  if (r || !r && !i)
    if ((Br(t) !== "body" || Do(o)) && (a = Ri(t)), r) {
      const h = go(t, !0, i, t);
      l.x = h.x + t.clientLeft, l.y = h.y + t.clientTop;
    } else o && u();
  i && !r && o && u();
  const d = o && !r && !i ? Id(o, a) : hn(0), p = s.left + a.scrollLeft - l.x - d.x, f = s.top + a.scrollTop - l.y - d.y;
  return {
    x: p,
    y: f,
    width: s.width,
    height: s.height
  };
}
function os(e) {
  return en(e).position === "static";
}
function El(e, t) {
  if (!vn(e) || en(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return In(e) === n && (n = n.ownerDocument.body), n;
}
function jd(e, t) {
  const n = zt(e);
  if (Ki(e))
    return n;
  if (!vn(e)) {
    let o = Gn(e);
    for (; o && !Zr(o); ) {
      if (Jt(o) && !os(o))
        return o;
      o = Gn(o);
    }
    return n;
  }
  let r = El(e, t);
  for (; r && Hy(r) && os(r); )
    r = El(r, t);
  return r && Zr(r) && os(r) && !ma(r) ? n : r || Ry(e) || n;
}
const r2 = async function(e) {
  const t = this.getOffsetParent || jd, n = this.getDimensions, r = await n(e.floating);
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
  convertOffsetParentRelativeRectToViewportRelativeRect: Fy,
  getDocumentElement: In,
  getClippingRect: e2,
  getOffsetParent: jd,
  getElementRects: r2,
  getClientRects: qy,
  getDimensions: t2,
  getScale: Pr,
  isElement: Jt,
  isRTL: o2
}, s2 = Dy, a2 = Oy, l2 = Ty, u2 = My, c2 = (e, t, n) => {
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
        const { x: k, y: N } = x.arrow, V = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[_.split("-")[0]];
        Object.assign(d.style, {
          zIndex: -1,
          left: k != null ? `${k}px` : "",
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
var f2 = /* @__PURE__ */ ee('<div style="position: relative"><div><!></div> <div style="display: none; width: 100%;z-index: 9999"><!></div></div>');
function nr(e, t) {
  le(t, !0);
  const n = v(t, "children", 7), r = v(t, "floating", 7), o = v(t, "placement", 7, "bottom");
  let i, s, a;
  zn(() => (a = d2({
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
  Ge(f, n), Z(p), Nt(p, (w) => i = w, () => i);
  var h = O(p, 2), y = R(h);
  return Ge(y, r), Z(h), Nt(h, (w) => s = w, () => s), Z(d), L(e, d), ue(u);
}
se(nr, { children: {}, floating: {}, placement: {} }, [], ["hide"], !0);
function Te(e, t) {
  le(t, !0);
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
  }, a = Se(), l = oe(a);
  return Ap(l, () => `h${r()}`, !1, (u, d) => {
    ot(u, () => ({
      class: "tf-heading",
      style: `margin-top:${o() || "0"};margin-bottom:${i() || "0"}`
    }));
    var p = Se(), f = oe(p);
    Ge(f, () => n() ?? vt), L(d, p);
  }), L(e, a), ue(s);
}
se(Te, { children: {}, level: {}, mt: {}, mb: {} }, [], [], !0);
var p2 = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1q3h954"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1q3h954"></path></svg>');
const h2 = {
  hash: "svelte-1q3h954",
  code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:#eee;border:1px solid transparent;}}"
};
function Oo(e, t) {
  le(t, !0), He(e, h2);
  const n = /* @__PURE__ */ Ze(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  Me(e, Be(() => n, {
    get class() {
      return `input-btn-more ${t.class ?? ""}`;
    },
    children: (r, o) => {
      var i = p2();
      L(r, i);
    },
    $$slots: { default: !0 }
  })), ue();
}
se(Oo, {}, [], [], !0);
const g2 = () => ({ deleteNode: (e) => {
  Le.removeNode(e), Le.updateEdges((t) => t.filter((n) => n.source !== e && n.target !== e));
} }), Ln = (e = 16) => {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = new Uint8Array(e);
  return crypto.getRandomValues(n), Array.from(n, (r) => t[r % t.length]).join("");
}, v2 = () => ({ copyNode: (e) => {
  const t = Le.getNode(e);
  if (t) {
    const n = Ln(), r = {
      ...t,
      id: n,
      position: { x: t.position.x + 50, y: t.position.y + 50 }
    };
    Le.updateNodes((o) => [...o.map((i) => ({ ...i, selected: !1 })), r]);
  }
} }), Ue = () => Fn("svelteflow__node_id"), Un = () => Fn("tinyflow_options");
var m2 = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'), y2 = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'), w2 = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'), b2 = /* @__PURE__ */ ee('<div class="input-item svelte-ana6zl">执行条件： <!></div>'), x2 = /* @__PURE__ */ ee('<div class="input-item svelte-ana6zl">循环间隔时间（单位：毫秒）： <!></div> <div class="input-item svelte-ana6zl">最大循环次数（0 表示不限制）： <!></div> <div class="input-item svelte-ana6zl">退出条件： <!></div>', 1), C2 = /* @__PURE__ */ ee('<div class="input-item svelte-ana6zl">错误重试间隔时间（单位：毫秒）： <!></div> <div class="input-item svelte-ana6zl">最大重试次数： <!></div> <label class="input-item-inline svelte-ana6zl"><span>正常后重置重试次数记录：</span> <input type="checkbox"/></label>', 1), $2 = /* @__PURE__ */ ee('<div class="settings svelte-ana6zl"><div class="input-item svelte-ana6zl">节点名称： <!></div> <div class="input-item svelte-ana6zl">参数描述： <!></div> <!> <label class="input-item-inline svelte-ana6zl"><span>异步执行：</span> <input type="checkbox"/></label> <label class="input-item-inline svelte-ana6zl"><span>循环执行：</span> <input type="checkbox"/></label> <!> <label class="input-item-inline svelte-ana6zl"><span>错误重试：</span> <input type="checkbox"/></label> <!></div>'), _2 = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3.33946 17.0002C2.90721 16.2515 2.58277 15.4702 2.36133 14.6741C3.3338 14.1779 3.99972 13.1668 3.99972 12.0002C3.99972 10.8345 3.3348 9.824 2.36353 9.32741C2.81025 7.71651 3.65857 6.21627 4.86474 4.99001C5.7807 5.58416 6.98935 5.65534 7.99972 5.072C9.01009 4.48866 9.55277 3.40635 9.4962 2.31604C11.1613 1.8846 12.8847 1.90004 14.5031 2.31862C14.4475 3.40806 14.9901 4.48912 15.9997 5.072C17.0101 5.65532 18.2187 5.58416 19.1346 4.99007C19.7133 5.57986 20.2277 6.25151 20.66 7.00021C21.0922 7.7489 21.4167 8.53025 21.6381 9.32628C20.6656 9.82247 19.9997 10.8336 19.9997 12.0002C19.9997 13.166 20.6646 14.1764 21.6359 14.673C21.1892 16.2839 20.3409 17.7841 19.1347 19.0104C18.2187 18.4163 17.0101 18.3451 15.9997 18.9284C14.9893 19.5117 14.4467 20.5941 14.5032 21.6844C12.8382 22.1158 11.1148 22.1004 9.49633 21.6818C9.55191 20.5923 9.00929 19.5113 7.99972 18.9284C6.98938 18.3451 5.78079 18.4162 4.86484 19.0103C4.28617 18.4205 3.77172 17.7489 3.33946 17.0002ZM8.99972 17.1964C10.0911 17.8265 10.8749 18.8227 11.2503 19.9659C11.7486 20.0133 12.2502 20.014 12.7486 19.9675C13.1238 18.8237 13.9078 17.8268 14.9997 17.1964C16.0916 16.5659 17.347 16.3855 18.5252 16.6324C18.8146 16.224 19.0648 15.7892 19.2729 15.334C18.4706 14.4373 17.9997 13.2604 17.9997 12.0002C17.9997 10.74 18.4706 9.5632 19.2729 8.6665C19.1688 8.4405 19.0538 8.21822 18.9279 8.00021C18.802 7.78219 18.667 7.57148 18.5233 7.36842C17.3457 7.61476 16.0911 7.43414 14.9997 6.80405C13.9083 6.17395 13.1246 5.17768 12.7491 4.03455C12.2509 3.98714 11.7492 3.98646 11.2509 4.03292C10.8756 5.17671 10.0916 6.17364 8.99972 6.80405C7.9078 7.43447 6.65245 7.61494 5.47428 7.36803C5.18485 7.77641 4.93463 8.21117 4.72656 8.66637C5.52881 9.56311 5.99972 10.74 5.99972 12.0002C5.99972 13.2604 5.52883 14.4372 4.72656 15.3339C4.83067 15.5599 4.94564 15.7822 5.07152 16.0002C5.19739 16.2182 5.3324 16.4289 5.47612 16.632C6.65377 16.3857 7.90838 16.5663 8.99972 17.1964ZM11.9997 15.0002C10.3429 15.0002 8.99972 13.6571 8.99972 12.0002C8.99972 10.3434 10.3429 9.00021 11.9997 9.00021C13.6566 9.00021 14.9997 10.3434 14.9997 12.0002C14.9997 13.6571 13.6566 15.0002 11.9997 15.0002ZM11.9997 13.0002C12.552 13.0002 12.9997 12.5525 12.9997 12.0002C12.9997 11.4479 12.552 11.0002 11.9997 11.0002C11.4474 11.0002 10.9997 11.4479 10.9997 12.0002C10.9997 12.5525 11.4474 13.0002 11.9997 13.0002Z"></path></svg>'), k2 = /* @__PURE__ */ ee('<div class="tf-node-toolbar svelte-ana6zl"><!> <!> <!> <!></div>'), S2 = /* @__PURE__ */ ee('<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!> <!>', 1);
const E2 = {
  hash: "svelte-ana6zl",
  code: ".tf-node-toolbar.svelte-ana6zl {display:flex;gap:5px;padding:5px;border-radius:5px;background:#fff;border:1px solid #eee;box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}.settings.svelte-ana6zl {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.settings.svelte-ana6zl .input-item:where(.svelte-ana6zl) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}.settings.svelte-ana6zl .input-item-inline:where(.svelte-ana6zl) {display:flex;align-items:center;font-size:12px;color:#666;}"
};
function Yt(e, t) {
  le(t, !0), He(e, E2);
  const n = v(t, "data", 7), r = v(t, "id", 7, ""), o = v(t, "icon", 7), i = v(t, "handle", 7), s = v(t, "children", 7), a = v(t, "allowExecute", 7, !0), l = v(t, "allowCopy", 7, !0), u = v(t, "allowDelete", 7, !0), d = v(t, "allowSetting", 7, !0), p = v(t, "allowSettingOfCondition", 7, !0), f = v(t, "showSourceHandle", 7, !0), h = v(t, "showTargetHandle", 7, !0), y = v(t, "onCollapse", 7);
  let w = n().expand ? ["key"] : [];
  const { updateNodeData: m, getNode: b } = st(), $ = /* @__PURE__ */ E(() => [
    {
      key: "key",
      icon: o(),
      title: n().title,
      description: n().description,
      content: s()
    }
  ]), { deleteNode: _ } = g2(), { copyNode: x } = v2(), k = Un(), N = () => {
    k.onNodeExecute?.(b(r()));
  };
  let V = Ue();
  var j = {
    get data() {
      return n();
    },
    set data(D) {
      n(D), g();
    },
    get id() {
      return r();
    },
    set id(D = "") {
      r(D), g();
    },
    get icon() {
      return o();
    },
    set icon(D) {
      o(D), g();
    },
    get handle() {
      return i();
    },
    set handle(D) {
      i(D), g();
    },
    get children() {
      return s();
    },
    set children(D) {
      s(D), g();
    },
    get allowExecute() {
      return a();
    },
    set allowExecute(D = !0) {
      a(D), g();
    },
    get allowCopy() {
      return l();
    },
    set allowCopy(D = !0) {
      l(D), g();
    },
    get allowDelete() {
      return u();
    },
    set allowDelete(D = !0) {
      u(D), g();
    },
    get allowSetting() {
      return d();
    },
    set allowSetting(D = !0) {
      d(D), g();
    },
    get allowSettingOfCondition() {
      return p();
    },
    set allowSettingOfCondition(D = !0) {
      p(D), g();
    },
    get showSourceHandle() {
      return f();
    },
    set showSourceHandle(D = !0) {
      f(D), g();
    },
    get showTargetHandle() {
      return h();
    },
    set showTargetHandle(D = !0) {
      h(D), g();
    },
    get onCollapse() {
      return y();
    },
    set onCollapse(D) {
      y(D), g();
    }
  }, A = S2(), H = oe(A);
  {
    var z = (D) => {
      kd(D, {
        get position() {
          return me.Top;
        },
        align: "start",
        children: (X, q) => {
          var U = k2(), I = R(U);
          {
            var F = (re) => {
              Me(re, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  _(r());
                },
                children: (ie, fe) => {
                  var pe = m2();
                  L(ie, pe);
                },
                $$slots: { default: !0 }
              });
            };
            ae(I, (re) => {
              u() && re(F);
            });
          }
          var G = O(I, 2);
          {
            var te = (re) => {
              Me(re, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  x(r());
                },
                children: (ie, fe) => {
                  var pe = y2();
                  L(ie, pe);
                },
                $$slots: { default: !0 }
              });
            };
            ae(G, (re) => {
              l() && re(te);
            });
          }
          var ne = O(G, 2);
          {
            var J = (re) => {
              Me(re, {
                class: "tf-node-toolbar-item",
                onclick: N,
                children: (ie, fe) => {
                  var pe = w2();
                  L(ie, pe);
                },
                $$slots: { default: !0 }
              });
            };
            ae(ne, (re) => {
              a() && re(J);
            });
          }
          var he = O(ne, 2);
          {
            var ce = (re) => {
              nr(re, {
                placement: "bottom",
                floating: (ie) => {
                  var fe = $2(), pe = R(fe), Ce = O(R(pe));
                  Je(Ce, {
                    style: "width: 100%;",
                    onchange: (De) => {
                      const _e = De.target.value;
                      m(V, { title: _e });
                    },
                    get value() {
                      return n().title;
                    }
                  }), Z(pe);
                  var de = O(pe, 2), we = O(R(de));
                  Ke(we, {
                    rows: 3,
                    style: "width: 100%;",
                    onchange: (De) => {
                      const _e = De.target.value;
                      m(V, { description: _e });
                    },
                    get value() {
                      return n().description;
                    }
                  }), Z(de);
                  var Oe = O(de, 2);
                  {
                    var Y = (De) => {
                      var _e = b2(), nt = O(R(_e));
                      Ke(nt, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (Tt) => {
                          const Xe = Tt.target.value;
                          m(V, { condition: Xe });
                        },
                        get value() {
                          return n().condition;
                        }
                      }), Z(_e), L(De, _e);
                    };
                    ae(Oe, (De) => {
                      p() && De(Y);
                    });
                  }
                  var je = O(Oe, 2), ze = O(R(je), 2);
                  Cn(ze), ze.__change = (De) => {
                    const _e = De.target.checked;
                    m(V, { async: _e });
                  }, Z(je);
                  var Ae = O(je, 2), Ie = O(R(Ae), 2);
                  Cn(Ie), Ie.__change = (De) => {
                    const _e = De.target.checked;
                    m(V, { loopEnable: _e });
                  }, Z(Ae);
                  var tt = O(Ae, 2);
                  {
                    var Mt = (De) => {
                      var _e = x2(), nt = oe(_e), Tt = O(R(nt));
                      {
                        let ft = /* @__PURE__ */ E(() => n().loopIntervalMs || "1000");
                        Ke(Tt, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (xt) => {
                            const yn = xt.target.value;
                            m(V, { loopIntervalMs: yn });
                          },
                          get value() {
                            return c(ft);
                          }
                        });
                      }
                      Z(nt);
                      var Xe = O(nt, 2), wr = O(R(Xe));
                      {
                        let ft = /* @__PURE__ */ E(() => n().maxLoopCount || "0");
                        Ke(wr, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (xt) => {
                            const yn = xt.target.value;
                            m(V, { maxLoopCount: yn });
                          },
                          get value() {
                            return c(ft);
                          }
                        });
                      }
                      Z(Xe);
                      var sn = O(Xe, 2), an = O(R(sn));
                      Ke(an, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (ft) => {
                          const xt = ft.target.value;
                          m(V, { loopBreakCondition: xt });
                        },
                        get value() {
                          return n().loopBreakCondition;
                        }
                      }), Z(sn), L(De, _e);
                    };
                    ae(tt, (De) => {
                      n().loopEnable && De(Mt);
                    });
                  }
                  var Ht = O(tt, 2), Qe = O(R(Ht), 2);
                  Cn(Qe), Qe.__change = (De) => {
                    const _e = De.target.checked;
                    m(V, { retryEnable: _e });
                  }, Z(Ht);
                  var ye = O(Ht, 2);
                  {
                    var Ye = (De) => {
                      var _e = C2(), nt = oe(_e), Tt = O(R(nt));
                      {
                        let ft = /* @__PURE__ */ E(() => n().retryIntervalMs || "1000");
                        Ke(Tt, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (xt) => {
                            const yn = xt.target.value;
                            m(V, { retryIntervalMs: yn });
                          },
                          get value() {
                            return c(ft);
                          }
                        });
                      }
                      Z(nt);
                      var Xe = O(nt, 2), wr = O(R(Xe));
                      {
                        let ft = /* @__PURE__ */ E(() => n().maxRetryCount || "3");
                        Ke(wr, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (xt) => {
                            const yn = xt.target.value;
                            m(V, { maxRetryCount: yn });
                          },
                          get value() {
                            return c(ft);
                          }
                        });
                      }
                      Z(Xe);
                      var sn = O(Xe, 2), an = O(R(sn), 2);
                      Cn(an), an.__change = (ft) => {
                        const xt = ft.target.checked;
                        m(V, { resetRetryCountAfterNormal: xt });
                      }, Z(sn), $e(() => Ao(an, !!n().resetRetryCountAfterNormal)), L(De, _e);
                    };
                    ae(ye, (De) => {
                      n().retryEnable && De(Ye);
                    });
                  }
                  Z(fe), $e(() => {
                    Ao(ze, !!n().async), Ao(Ie, !!n().loopEnable), Ao(Qe, !!n().retryEnable);
                  }), L(ie, fe);
                },
                children: (ie, fe) => {
                  Me(ie, {
                    class: "tf-node-toolbar-item",
                    children: (pe, Ce) => {
                      var de = _2();
                      L(pe, de);
                    },
                    $$slots: { default: !0 }
                  });
                },
                $$slots: { floating: !0, default: !0 }
              });
            };
            ae(he, (re) => {
              d() && re(ce);
            });
          }
          Z(U), L(X, U);
        },
        $$slots: { default: !0 }
      });
    };
    ae(H, (D) => {
      (a() || l() || u()) && D(z);
    });
  }
  var S = O(H, 2), T = O(R(S), 2), C = R(T);
  Nd(C, {
    get items() {
      return c($);
    },
    get activeKeys() {
      return w;
    },
    onChange: (D, X) => {
      m(r(), { expand: X?.includes("key") }), y()?.(X?.includes("key") ? "key" : "");
    }
  }), Z(T), Z(S);
  var P = O(S, 2);
  {
    var M = (D) => {
      Xn(D, {
        type: "target",
        get position() {
          return me.Left;
        },
        style: " left: -12px;top: 20px"
      });
    };
    ae(P, (D) => {
      h() && D(M);
    });
  }
  var K = O(P, 2);
  {
    var B = (D) => {
      Xn(D, {
        type: "source",
        get position() {
          return me.Right;
        },
        style: "right: -12px;top: 20px"
      });
    };
    ae(K, (D) => {
      f() && D(B);
    });
  }
  var W = O(K, 2);
  return Ge(W, () => i() ?? vt), L(e, A), ue(j);
}
er(["change"]);
se(
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
var P2 = /* @__PURE__ */ ee('<div class="input-more-item svelte-n5iecj">数据选项： <!></div>'), N2 = /* @__PURE__ */ ee('<div class="input-more-setting svelte-n5iecj"><div class="input-more-item svelte-n5iecj">数据内容： <!></div> <div class="input-more-item svelte-n5iecj">输入方式： <!></div> <!> <div class="input-more-item svelte-n5iecj">数据标题： <!></div> <div class="input-more-item svelte-n5iecj">数据描述： <!></div> <div class="input-more-item svelte-n5iecj">占位符： <!></div> <div class="input-more-item svelte-n5iecj"><!></div></div>'), M2 = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>'), T2 = /* @__PURE__ */ ee('<div class="input-item svelte-n5iecj"><!></div> <div class="input-item svelte-n5iecj"><!></div> <div class="input-item svelte-n5iecj"><!></div>', 1);
const L2 = {
  hash: "svelte-n5iecj",
  code: ".input-item.svelte-n5iecj {display:flex;align-items:center;}.input-more-setting.svelte-n5iecj {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-n5iecj .input-more-item:where(.svelte-n5iecj) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Kd(e, t) {
  le(t, !0), He(e, L2);
  const n = v(t, "parameter", 7), r = v(t, "index", 7);
  let o = Ue(), i = Hn(o), s = /* @__PURE__ */ E(() => ({ ...n(), ...i?.current?.data?.parameters[r()] }));
  const { updateNodeData: a } = st(), l = (j, A) => {
    a(o, (H) => {
      let z = H.data.parameters;
      return z[r()][j] = A, { parameters: z };
    });
  }, u = (j, A) => {
    const H = A.target.value;
    l(j, H);
  }, d = (j) => {
    const A = j.target.value;
    l("name", A);
  }, p = (j) => {
    const A = j.target.checked;
    l("required", A);
  }, f = (j) => {
    const A = j.value;
    l("formType", A);
  }, h = (j) => {
    const A = j.value;
    l("contentType", A);
  };
  let y;
  const w = () => {
    a(o, (j) => {
      let A = j.data.parameters;
      return A.splice(r(), 1), { parameters: [...A] };
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
  Sd(k, {
    get checked() {
      return c(s).required;
    },
    onchange: p
  }), Z(x);
  var N = O(x, 2), V = R(N);
  return Nt(
    nr(V, {
      placement: "bottom",
      floating: (j) => {
        var A = N2(), H = R(A), z = O(R(H));
        {
          let I = /* @__PURE__ */ E(() => c(s).contentType ? [c(s).contentType] : []);
          ut(z, {
            get items() {
              return ha;
            },
            style: "width: 100%",
            defaultValue: ["text"],
            get value() {
              return c(I);
            },
            onSelect: h
          });
        }
        Z(H);
        var S = O(H, 2), T = O(R(S));
        {
          let I = /* @__PURE__ */ E(() => c(s).formType ? [c(s).formType] : []);
          ut(T, {
            get items() {
              return Fm;
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
            var F = P2(), G = O(R(F));
            {
              let te = /* @__PURE__ */ E(() => c(s).enums?.join(`
`));
              Ke(G, {
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
            Z(F), L(I, F);
          };
          ae(C, (I) => {
            (c(s).formType === "radio" || c(s).formType === "checkbox" || c(s).formType === "select") && I(P);
          });
        }
        var M = O(C, 2), K = O(R(M));
        Ke(K, {
          rows: 1,
          style: "width: 100%;",
          onchange: (I) => {
            u("formLabel", I);
          },
          get value() {
            return c(s).formLabel;
          }
        }), Z(M);
        var B = O(M, 2), W = O(R(B));
        Ke(W, {
          rows: 2,
          style: "width: 100%;",
          onchange: (I) => {
            u("formDescription", I);
          },
          get value() {
            return c(s).formDescription;
          }
        }), Z(B);
        var D = O(B, 2), X = O(R(D));
        Ke(X, {
          rows: 2,
          style: "width: 100%;",
          onchange: (I) => {
            u("formPlaceholder", I);
          },
          get value() {
            return c(s).formPlaceholder;
          }
        }), Z(D);
        var q = O(D, 2), U = R(q);
        Me(U, {
          onclick: w,
          children: (I, F) => {
            ve();
            var G = ke("删除");
            L(I, G);
          },
          $$slots: { default: !0 }
        }), Z(q), Z(A), L(j, A);
      },
      children: (j, A) => {
        Me(j, {
          class: "input-btn-more",
          children: (H, z) => {
            var S = M2();
            L(H, S);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (j) => y = j,
    () => y
  ), Z(N), L(e, b), ue(m);
}
se(Kd, { parameter: {}, index: {} }, [], [], !0);
var V2 = /* @__PURE__ */ ee('<div class="input-header svelte-1yp5n1k">参数名称</div> <div class="input-header svelte-1yp5n1k">必填</div> <div class="input-header svelte-1yp5n1k"></div>', 1), D2 = /* @__PURE__ */ ee('<div class="none-params svelte-1yp5n1k">无输入参数</div>'), O2 = /* @__PURE__ */ ee('<div class="input-container svelte-1yp5n1k"><!> <!></div>');
const z2 = {
  hash: "svelte-1yp5n1k",
  code: `.input-container.svelte-1yp5n1k {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1yp5n1k .none-params:where(.svelte-1yp5n1k) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1yp5n1k .input-header:where(.svelte-1yp5n1k) {font-size:12px;color:#666;}`
};
function Rd(e, t) {
  le(t, !0), He(e, z2);
  let n = Ue(), r = Hn(n), o = /* @__PURE__ */ E(() => [...r?.current?.data?.parameters || []]);
  var i = O2(), s = R(i);
  {
    var a = (u) => {
      var d = V2();
      ve(4), L(u, d);
    };
    ae(s, (u) => {
      c(o).length !== 0 && u(a);
    });
  }
  var l = O(s, 2);
  mt(
    l,
    19,
    () => c(o),
    (u) => u.id,
    (u, d, p) => {
      Kd(u, {
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
      L(u, d);
    }
  ), Z(i), L(e, i), ue();
}
se(Rd, {}, [], [], !0);
const vo = (e) => (!e || e.length == 0 || e.forEach((t) => {
  t.id || (t.id = Ln()), vo(t.children);
}), e), on = () => {
  const { updateNodeData: e } = st();
  return {
    addParameter: (t, n = "parameters", r) => {
      Array.isArray(r) ? r.forEach((s) => vo(s?.children)) : vo(r?.children);
      function o(s) {
        return {
          name: "",
          dataType: "String",
          refType: "ref",
          ...s,
          id: Ln()
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
var A2 = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), H2 = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), I2 = /* @__PURE__ */ ee('<div class="heading svelte-llt1qy"><!> <!></div> <!>', 1);
const Z2 = {
  hash: "svelte-llt1qy",
  code: ".heading.svelte-llt1qy {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:#eee;border:1px solid transparent;}"
};
function Bd(e, t) {
  le(t, !0), He(e, Z2);
  const n = v(t, "data", 7), r = /* @__PURE__ */ Ze(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Ue(), { addParameter: i } = on();
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
      var l = A2();
      L(a, l);
    },
    children: (a, l) => {
      var u = I2(), d = oe(u), p = R(d);
      Te(p, {
        level: 3,
        children: (y, w) => {
          ve();
          var m = ke("输入参数");
          L(y, m);
        },
        $$slots: { default: !0 }
      });
      var f = O(p, 2);
      Me(f, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: () => {
          i(o, "parameters", { refType: "input", name: "newParam" });
        },
        children: (y, w) => {
          var m = H2();
          L(y, m);
        },
        $$slots: { default: !0 }
      }), Z(d);
      var h = O(d, 2);
      Rd(h, {}), L(a, u);
    },
    $$slots: { icon: !0, default: !0 }
  })), ue(s);
}
se(Bd, { data: {} }, [], [], !0);
const Wd = (e, t, n) => {
  for (const r of n)
    r.target === t && r.source && (e.push(r.source), Wd(e, r.source, n));
}, Yd = (e, t, n) => !e || e.length === 0 ? [] : e.map((r) => ({
  label: r.name + (n ? ` (Array<${r.dataType || "String"}>)` : ` (${r.dataType || "String"})`),
  value: t + "." + r.name,
  children: Yd(r.children, t + "." + r.name, n)
})), Pl = (e, t, n) => {
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
}, Fd = (e = !1) => {
  const t = Ue(), n = Hn(t), r = /* @__PURE__ */ E(rn), o = /* @__PURE__ */ E(() => c(r).nodes), i = /* @__PURE__ */ E(() => c(r).edges), s = /* @__PURE__ */ E(() => c(r).nodeLookup);
  let a = /* @__PURE__ */ E(() => {
    const l = [];
    if (!n.current)
      return [];
    const u = c(s).get(t);
    if (e)
      for (const d of c(o)) {
        const p = d.parentId === n.current.id;
        if (p) {
          const f = Pl(d, p, u);
          f && l.push(f);
        }
      }
    else {
      const d = [];
      Wd(d, t, c(i));
      for (const p of c(o))
        if (d.includes(p.id)) {
          const f = p.parentId === n.current.id, h = Pl(p, f, u);
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
var j2 = /* @__PURE__ */ ee('<div class="input-more-item svelte-jmeys3">数据内容： <!></div>'), K2 = /* @__PURE__ */ ee('<div class="input-more-setting svelte-jmeys3"><div class="input-more-item svelte-jmeys3">数据来源： <!></div> <!> <div class="input-more-item svelte-jmeys3">默认值： <!></div> <div class="input-more-item svelte-jmeys3">参数描述： <!></div> <div class="input-more-item svelte-jmeys3"><!></div></div>'), R2 = /* @__PURE__ */ ee('<div class="input-item svelte-jmeys3"><!></div> <div class="input-item svelte-jmeys3"><!></div> <div class="input-item svelte-jmeys3"><!></div>', 1);
const B2 = {
  hash: "svelte-jmeys3",
  code: ".input-item.svelte-jmeys3 {display:flex;align-items:center;}.input-more-setting.svelte-jmeys3 {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-jmeys3 .input-more-item:where(.svelte-jmeys3) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function qd(e, t) {
  le(t, !0), He(e, B2), zn(() => {
    c(u).refType || y({ value: "ref" });
  });
  const n = v(t, "parameter", 7), r = v(t, "index", 7), o = v(t, "dataKeyName", 7), i = v(t, "useChildrenOnly", 7), s = v(t, "showContentType", 7, !1);
  let a = Ue(), l = Hn(a), u = /* @__PURE__ */ E(() => ({
    ...n(),
    ...l?.current?.data?.[o()][r()]
  }));
  const { updateNodeData: d } = st(), p = (T, C) => {
    d(a, (P) => {
      let M = P.data?.[o()];
      return M[r()] = { ...M[r()], [T]: C }, { [o()]: M };
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
  let $ = Fd(i());
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
  }, x = R2(), k = oe(x), N = R(k);
  {
    let T = /* @__PURE__ */ E(() => c(u).nameDisabled === !0);
    Je(N, {
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
  var V = O(k, 2), j = R(V);
  {
    var A = (T) => {
      Je(T, {
        get value() {
          return c(u).value;
        },
        placeholder: "请输入参数值",
        oninput: (C) => f("value", C)
      });
    }, H = (T) => {
      var C = Se(), P = oe(C);
      {
        var M = (K) => {
          {
            let B = /* @__PURE__ */ E(() => [c(u).ref]);
            ut(K, {
              get items() {
                return $.current;
              },
              style: "width: 100%",
              defaultValue: ["ref"],
              get value() {
                return c(B);
              },
              expandAll: !0,
              onSelect: h
            });
          }
        };
        ae(
          P,
          (K) => {
            c(u).refType !== "input" && K(M);
          },
          !0
        );
      }
      L(T, C);
    };
    ae(j, (T) => {
      c(u).refType === "fixed" ? T(A) : T(H, !1);
    });
  }
  Z(V);
  var z = O(V, 2), S = R(z);
  return Nt(
    nr(S, {
      placement: "bottom",
      floating: (T) => {
        var C = K2(), P = R(C), M = O(R(P));
        {
          let F = /* @__PURE__ */ E(() => c(u).refType ? [c(u).refType] : []);
          ut(M, {
            get items() {
              return Ym;
            },
            style: "width: 100%",
            defaultValue: ["ref"],
            get value() {
              return c(F);
            },
            onSelect: y
          });
        }
        Z(P);
        var K = O(P, 2);
        {
          var B = (F) => {
            var G = j2(), te = O(R(G));
            {
              let ne = /* @__PURE__ */ E(() => c(u).contentType ? [c(u).contentType] : []);
              ut(te, {
                get items() {
                  return ha;
                },
                style: "width: 100%",
                defaultValue: ["text"],
                get value() {
                  return c(ne);
                },
                onSelect: w
              });
            }
            Z(G), L(F, G);
          };
          ae(K, (F) => {
            s() && F(B);
          });
        }
        var W = O(K, 2), D = O(R(W));
        Ke(D, {
          rows: 1,
          style: "width: 100%;",
          onchange: (F) => {
            f("defaultValue", F);
          },
          get value() {
            return c(u).defaultValue;
          },
          placeholder: "请输入参数默认值"
        }), Z(W);
        var X = O(W, 2), q = O(R(X));
        Ke(q, {
          rows: 3,
          style: "width: 100%;",
          onchange: (F) => {
            f("description", F);
          },
          get value() {
            return c(u).description;
          },
          placeholder: "请输入参数描述"
        }), Z(X);
        var U = O(X, 2), I = R(U);
        Me(I, {
          onclick: b,
          children: (F, G) => {
            ve();
            var te = ke("删除");
            L(F, te);
          },
          $$slots: { default: !0 }
        }), Z(U), Z(C), L(T, C);
      },
      children: (T, C) => {
        Oo(T, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (T) => m = T,
    () => m
  ), Z(z), L(e, x), ue(_);
}
se(
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
var W2 = /* @__PURE__ */ ee('<div class="input-header svelte-32f1pk">参数名称</div> <div class="input-header svelte-32f1pk">参数值</div> <div class="input-header svelte-32f1pk"></div>', 1), Y2 = /* @__PURE__ */ ee('<div class="none-params svelte-32f1pk"> </div>'), F2 = /* @__PURE__ */ ee('<div class="input-container svelte-32f1pk"><!> <!></div>');
const q2 = {
  hash: "svelte-32f1pk",
  code: `.input-container.svelte-32f1pk {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-32f1pk .none-params:where(.svelte-32f1pk) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-32f1pk .input-header:where(.svelte-32f1pk) {font-size:12px;color:#666;}`
};
function bt(e, t) {
  le(t, !0), He(e, q2);
  const n = v(t, "noneParameterText", 7, "无输入参数"), r = v(t, "dataKeyName", 7, "parameters"), o = v(t, "useChildrenOnly", 7), i = v(t, "showContentType", 7, !1);
  let s = Ue(), a = Hn(s), l = /* @__PURE__ */ E(() => [...a?.current?.data?.[r()] || []]);
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
  }, d = F2(), p = R(d);
  {
    var f = (y) => {
      var w = W2();
      ve(4), L(y, w);
    };
    ae(p, (y) => {
      c(l).length !== 0 && y(f);
    });
  }
  var h = O(p, 2);
  return mt(
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
      var w = Y2(), m = R(w, !0);
      Z(w), $e(() => Re(m, n())), L(y, w);
    }
  ), Z(d), L(e, d), ue(u);
}
se(
  bt,
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
var X2 = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), G2 = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), U2 = /* @__PURE__ */ ee('<div class="heading svelte-1fiuxu3"><!> <!></div> <!>', 1);
const Q2 = {
  hash: "svelte-1fiuxu3",
  code: ".heading.svelte-1fiuxu3 {display:flex;margin-bottom:10px;}"
};
function Xd(e, t) {
  le(t, !0), He(e, Q2);
  const n = v(t, "data", 7), r = /* @__PURE__ */ Ze(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Ue(), { addParameter: i } = on();
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
        var l = X2();
        L(a, l);
      },
      children: (a, l) => {
        var u = U2(), d = oe(u), p = R(d);
        Te(p, {
          level: 3,
          children: (y, w) => {
            ve();
            var m = ke("输出参数");
            L(y, m);
          },
          $$slots: { default: !0 }
        });
        var f = O(p, 2);
        Me(f, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs", { name: "output" });
          },
          children: (y, w) => {
            var m = G2();
            L(y, m);
          },
          $$slots: { default: !0 }
        }), Z(d);
        var h = O(d, 2);
        bt(h, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs",
          showContentType: !0
        }), L(a, u);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(s);
}
se(Xd, { data: {} }, [], [], !0);
const is = (e) => JSON.parse(JSON.stringify(e));
var J2 = /* @__PURE__ */ ge('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), ew = /* @__PURE__ */ ee('<div class="input-more-item svelte-hwmib9"><!></div>'), tw = /* @__PURE__ */ ee('<div class="input-more-setting svelte-hwmib9"><div class="input-more-item svelte-hwmib9">默认值： <!></div> <div class="input-more-item svelte-hwmib9">参数描述： <!></div> <!></div>'), nw = /* @__PURE__ */ ee('<div class="input-item svelte-hwmib9"><!> <!></div> <div class="input-item svelte-hwmib9"><!> <!></div> <div class="input-item svelte-hwmib9"><!></div>', 1);
const rw = {
  hash: "svelte-hwmib9",
  code: ".input-item.svelte-hwmib9 {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-hwmib9 {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-hwmib9 .input-more-item:where(.svelte-hwmib9) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Gd(e, t) {
  le(t, !0), He(e, rw);
  const n = v(t, "parameter", 7), r = v(t, "position", 7), o = v(t, "dataKeyName", 7), i = v(t, "placeholder", 7, "请输入参数值");
  let s = Ue(), a = Hn(s), l = /* @__PURE__ */ E(() => {
    let S = a?.current?.data?.[o()], T;
    if (S && r().length > 0) {
      let C = S;
      for (let P = 0; P < r().length; P++) {
        const M = r()[P];
        P == r().length - 1 ? T = C[M] : C = C[M].children;
      }
    }
    return { ...n(), ...T };
  });
  const { updateNodeData: u } = st(), d = (S, T) => {
    u(s, (C) => {
      const P = C.data?.[o()];
      if (P && r().length > 0) {
        let M = P;
        for (let K = 0; K < r().length; K++) {
          const B = r()[K];
          K == r().length - 1 ? M[B] = { ...M[B], [S]: T } : M = M[B].children;
        }
      }
      return { [o()]: [...is(P)] };
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
          const M = r()[P];
          P == r().length - 1 ? C.splice(M, 1) : C = C[M].children;
        }
      }
      return { [o()]: [...is(T)] };
    }), h?.hide();
  }, w = () => {
    u(s, (S) => {
      let T = S.data?.[o()];
      if (T && r().length > 0) {
        let C = T;
        for (let P = 0; P < r().length; P++) {
          const M = r()[P];
          P == r().length - 1 ? C[M].children ? C[M].children.push({ id: Ln(), name: "newParam", dataType: "String" }) : C[M].children = [{ id: Ln(), name: "newParam", dataType: "String" }] : C = C[M].children;
        }
      }
      return { [o()]: [...is(T)] };
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
      var T = Se(), C = oe(T);
      mt(C, 17, r, Lr, (P, M) => {
        ve();
        var K = ke(" ");
        L(P, K);
      }), L(S, T);
    };
    ae(_, (S) => {
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
  var N = O($, 2), V = R(N);
  {
    let S = /* @__PURE__ */ E(() => c(l).dataTypeItems || Wm), T = /* @__PURE__ */ E(() => c(l).dataType ? [c(l).dataType] : []), C = /* @__PURE__ */ E(() => c(l).dataTypeDisabled === !0);
    ut(V, {
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
  var j = O(V, 2);
  {
    var A = (S) => {
      Me(S, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: w,
        children: (T, C) => {
          var P = J2();
          L(T, P);
        },
        $$slots: { default: !0 }
      });
    };
    ae(j, (S) => {
      (c(l).dataType === "Object" || c(l).dataType === "Array") && c(l).addChildDisabled !== !0 && S(A);
    });
  }
  Z(N);
  var H = O(N, 2), z = R(H);
  return Nt(
    nr(z, {
      placement: "bottom",
      floating: (S) => {
        var T = tw(), C = R(T), P = O(R(C));
        {
          let D = /* @__PURE__ */ E(() => c(l).defaultValue || "");
          Ke(P, {
            rows: 1,
            style: "width: 100%;",
            get value() {
              return c(D);
            },
            onchange: (X) => {
              p("defaultValue", X);
            }
          });
        }
        Z(C);
        var M = O(C, 2), K = O(R(M));
        {
          let D = /* @__PURE__ */ E(() => c(l).description || "");
          Ke(K, {
            rows: 3,
            style: "width: 100%;",
            get value() {
              return c(D);
            },
            onchange: (X) => {
              p("description", X);
            }
          });
        }
        Z(M);
        var B = O(M, 2);
        {
          var W = (D) => {
            var X = ew(), q = R(X);
            Me(q, {
              onclick: y,
              children: (U, I) => {
                ve();
                var F = ke("删除");
                L(U, F);
              },
              $$slots: { default: !0 }
            }), Z(X), L(D, X);
          };
          ae(B, (D) => {
            c(l).deleteDisabled !== !0 && D(W);
          });
        }
        Z(T), L(S, T);
      },
      children: (S, T) => {
        Oo(S, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (S) => h = S,
    () => h
  ), Z(H), L(e, b), ue(m);
}
se(
  Gd,
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
var ow = /* @__PURE__ */ ee("<!> <!>", 1), iw = /* @__PURE__ */ ee('<div class="none-params svelte-1oz5kx0"> </div>'), sw = /* @__PURE__ */ ee('<div class="input-header svelte-1oz5kx0">参数名称</div> <div class="input-header svelte-1oz5kx0">参数类型</div> <div class="input-header svelte-1oz5kx0"></div>', 1), aw = /* @__PURE__ */ ee('<div class="input-container svelte-1oz5kx0"><!> <!></div>');
const lw = {
  hash: "svelte-1oz5kx0",
  code: `.input-container.svelte-1oz5kx0 {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1oz5kx0 .none-params:where(.svelte-1oz5kx0) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1oz5kx0 .input-header:where(.svelte-1oz5kx0) {font-size:12px;color:#666;}`
};
function Zn(e, t) {
  le(t, !0), He(e, lw);
  const n = (y, w = vt, m = vt) => {
    var b = Se(), $ = oe(b);
    mt(
      $,
      19,
      w,
      (_) => `${_.id}_${_.children ? _.children.length : 0}`,
      (_, x, k) => {
        var N = ow(), V = oe(N);
        {
          let H = /* @__PURE__ */ E(() => [...m(), c(k)]);
          Gd(V, {
            get parameter() {
              return c(x);
            },
            get position() {
              return c(H);
            },
            get dataKeyName() {
              return o();
            },
            get placeholder() {
              return i();
            }
          });
        }
        var j = O(V, 2);
        {
          var A = (H) => {
            {
              let z = /* @__PURE__ */ E(() => [...m(), c(k)]);
              n(H, () => c(x).children, () => c(z));
            }
          };
          ae(j, (H) => {
            c(x).children && H(A);
          });
        }
        L(_, N);
      },
      (_) => {
        var x = Se(), k = oe(x);
        {
          var N = (V) => {
            var j = iw(), A = R(j, !0);
            Z(j), $e(() => Re(A, r())), L(V, j);
          };
          ae(k, (V) => {
            m().length === 0 && V(N);
          });
        }
        L(_, x);
      }
    ), L(y, b);
  }, r = v(t, "noneParameterText", 7, "无输出参数"), o = v(t, "dataKeyName", 7, "outputDefs"), i = v(t, "placeholder", 7, "请输入参数名称");
  let s = Ue(), a = Hn(s), l = /* @__PURE__ */ E(() => [...a?.current?.data?.[o()] || []]);
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
      ve(4), L(y, w);
    };
    ae(p, (y) => {
      c(l).length !== 0 && y(f);
    });
  }
  var h = O(p, 2);
  return n(h, () => c(l) || [], () => []), Z(d), L(e, d), ue(u);
}
se(Zn, { noneParameterText: {}, dataKeyName: {}, placeholder: {} }, [], [], !0);
var uw = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), cw = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), dw = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), fw = /* @__PURE__ */ ee('<div class="llm-setting svelte-j81vcl"><div class="setting-title svelte-j81vcl">采样参数</div> <div class="setting-item svelte-j81vcl"><div class="slider-container svelte-j81vcl"><span class="svelte-j81vcl"> </span> <input class="nodrag svelte-j81vcl" type="range" min="0" max="1" step="0.1"/></div></div> <div class="setting-item svelte-j81vcl"><div class="slider-container svelte-j81vcl"><span class="svelte-j81vcl"> </span> <input class="nodrag svelte-j81vcl" type="range" min="0" max="1" step="0.1"/></div></div> <div class="setting-item svelte-j81vcl"><div class="slider-container svelte-j81vcl"><span class="svelte-j81vcl"> </span> <input class="nodrag svelte-j81vcl" type="range" min="0" max="100" step="1"/></div></div></div>'), pw = /* @__PURE__ */ ee('<div class="heading svelte-j81vcl"><!> <!></div> <!> <div class="heading svelte-j81vcl" style="padding-top: 10px"><!> <!></div> <!> <!> <div class="setting-title svelte-j81vcl">模型</div> <div class="setting-item svelte-j81vcl"><!> <!></div> <div class="setting-title svelte-j81vcl">系统提示词</div> <div class="setting-item svelte-j81vcl"><!></div> <div class="setting-title svelte-j81vcl">用户提示词</div> <div class="setting-item svelte-j81vcl"><!></div> <div class="heading svelte-j81vcl"><!> <!></div> <!>', 1);
const hw = {
  hash: "svelte-j81vcl",
  code: `.heading.svelte-j81vcl {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-j81vcl {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-j81vcl {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-j81vcl {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-j81vcl span:where(.svelte-j81vcl) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}.llm-setting.svelte-j81vcl {width:200px;background:#fff;padding:10px;border-radius:5px;box-shadow:0 0 10px rgba(0, 0, 0, 0.1);border:1px solid #ddd;}input[type="range"].svelte-j81vcl {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-j81vcl::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function Ud(e, t) {
  le(t, !0), He(e, hw);
  const n = v(t, "data", 7), r = /* @__PURE__ */ Ze(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Ue(), { addParameter: i } = on(), s = Un();
  let a = /* @__PURE__ */ Ee(Rt([]));
  zn(async () => {
    const p = await s.provider?.llm?.();
    c(a).push(...p || []);
  });
  const { updateNodeData: l } = st(), u = (p) => {
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
        L(p, f);
      },
      children: (p, f) => {
        var h = pw(), y = oe(h), w = R(y);
        Te(w, {
          level: 3,
          children: (B, W) => {
            ve();
            var D = ke("输入参数");
            L(B, D);
          },
          $$slots: { default: !0 }
        });
        var m = O(w, 2);
        Me(m, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (B, W) => {
            var D = cw();
            L(B, D);
          },
          $$slots: { default: !0 }
        }), Z(y);
        var b = O(y, 2);
        bt(b, {});
        var $ = O(b, 2), _ = R($);
        Te(_, {
          level: 3,
          children: (B, W) => {
            ve();
            var D = ke("图片识别");
            L(B, D);
          },
          $$slots: { default: !0 }
        });
        var x = O(_, 2);
        Me(x, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "images");
          },
          children: (B, W) => {
            var D = dw();
            L(B, D);
          },
          $$slots: { default: !0 }
        }), Z($);
        var k = O($, 2);
        bt(k, { dataKeyName: "images", noneParameterText: "无图片参数" });
        var N = O(k, 2);
        Te(N, {
          level: 3,
          mt: "10px",
          children: (B, W) => {
            ve();
            var D = ke("模型设置");
            L(B, D);
          },
          $$slots: { default: !0 }
        });
        var V = O(N, 4), j = R(V);
        {
          let B = /* @__PURE__ */ E(() => n().llmId ? [n().llmId] : []);
          ut(j, {
            get items() {
              return c(a);
            },
            style: "width: 100%",
            placeholder: "请选择模型",
            onSelect: (W) => {
              const D = W.value;
              l(o, () => ({ llmId: D }));
            },
            get value() {
              return c(B);
            }
          });
        }
        var A = O(j, 2);
        nr(A, {
          placement: "bottom",
          floating: (B) => {
            var W = fw(), D = O(R(W), 2), X = R(D), q = R(X), U = R(q);
            Z(q);
            var I = O(q, 2);
            Cn(I), I.__input = (pe) => l(o, { temperature: parseFloat(pe.target.value) }), Z(X), Z(D);
            var F = O(D, 2), G = R(F), te = R(G), ne = R(te);
            Z(te);
            var J = O(te, 2);
            Cn(J), J.__input = (pe) => l(o, { topP: parseFloat(pe.target.value) }), Z(G), Z(F);
            var he = O(F, 2), ce = R(he), re = R(ce), ie = R(re);
            Z(re);
            var fe = O(re, 2);
            Cn(fe), fe.__input = (pe) => l(o, { topK: parseInt(pe.target.value) }), Z(ce), Z(he), Z(W), $e(() => {
              Re(U, `Temperature: ${n().temperature ?? 0.7 ?? ""}`), Yo(I, n().temperature ?? 0.7), Re(ne, `Top P: ${n().topP ?? 0.9 ?? ""}`), Yo(J, n().topP ?? 0.9), Re(ie, `Top K: ${n().topK ?? 50 ?? ""}`), Yo(fe, n().topK ?? 50);
            }), L(B, W);
          },
          children: (B, W) => {
            Oo(B, {});
          },
          $$slots: { floating: !0, default: !0 }
        }), Z(V);
        var H = O(V, 4), z = R(H);
        {
          let B = /* @__PURE__ */ E(() => n().systemPrompt || "");
          Ke(z, {
            rows: 5,
            placeholder: "请输入系统提示词",
            style: "width: 100%",
            get value() {
              return c(B);
            },
            oninput: (W) => {
              l(o, { systemPrompt: W.target.value });
            }
          });
        }
        Z(H);
        var S = O(H, 4), T = R(S);
        {
          let B = /* @__PURE__ */ E(() => n().userPrompt || "");
          Ke(T, {
            rows: 5,
            placeholder: "请输入用户提示词",
            style: "width: 100%",
            get value() {
              return c(B);
            },
            oninput: (W) => {
              l(o, { userPrompt: W.target.value });
            }
          });
        }
        Z(S);
        var C = O(S, 2), P = R(C);
        Te(P, {
          level: 3,
          children: (B, W) => {
            ve();
            var D = ke("输出参数");
            L(B, D);
          },
          $$slots: { default: !0 }
        });
        var M = O(P, 2);
        {
          let B = /* @__PURE__ */ E(() => n().outType ? [n().outType] : []);
          ut(M, {
            items: [
              { label: "文本", value: "text" },
              { label: "JSON", value: "json" }
            ],
            style: "width: 100px;margin-left: auto",
            onSelect: (W) => {
              u(W.value);
            },
            get value() {
              return c(B);
            }
          });
        }
        Z(C);
        var K = O(C, 2);
        Zn(K, {}), L(p, h);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(d);
}
er(["input"]);
se(Ud, { data: {} }, [], [], !0);
var gw = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), vw = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), mw = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), yw = /* @__PURE__ */ ee('<div class="heading svelte-1wcsayx"><!> <!></div> <!> <!> <div class="setting-title svelte-1wcsayx">执行引擎</div> <div class="setting-item svelte-1wcsayx"><!></div> <div class="setting-title svelte-1wcsayx">执行代码</div> <div class="setting-item svelte-1wcsayx"><!></div> <div class="heading svelte-1wcsayx"><!> <!></div> <!>', 1);
const ww = {
  hash: "svelte-1wcsayx",
  code: ".heading.svelte-1wcsayx {display:flex;margin-bottom:10px;}.setting-title.svelte-1wcsayx {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-1wcsayx {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Qd(e, t) {
  le(t, !0), He(e, ww);
  const n = v(t, "data", 7), r = /* @__PURE__ */ Ze(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]);
  zn(() => {
    n().engine || s(o, () => ({ engine: "qlexpress" }));
  });
  const o = Ue(), { addParameter: i } = on(), { updateNodeData: s } = st(), a = [
    { label: "QLExpress", value: "qlexpress" },
    { label: "Groovy", value: "groovy" },
    { label: "JavaScript", value: "js" }
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
        var d = gw();
        L(u, d);
      },
      children: (u, d) => {
        var p = yw(), f = oe(p), h = R(f);
        Te(h, {
          level: 3,
          children: (A, H) => {
            ve();
            var z = ke("输入参数");
            L(A, z);
          },
          $$slots: { default: !0 }
        });
        var y = O(h, 2);
        Me(y, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (A, H) => {
            var z = vw();
            L(A, z);
          },
          $$slots: { default: !0 }
        }), Z(f);
        var w = O(f, 2);
        bt(w, {});
        var m = O(w, 2);
        Te(m, {
          level: 3,
          mt: "10px",
          children: (A, H) => {
            ve();
            var z = ke("代码");
            L(A, z);
          },
          $$slots: { default: !0 }
        });
        var b = O(m, 4), $ = R(b);
        {
          let A = /* @__PURE__ */ E(() => n().engine ? [n().engine] : ["qlexpress"]);
          ut($, {
            get items() {
              return a;
            },
            style: "width: 100%",
            placeholder: "请选择执行引擎",
            onSelect: (H) => {
              const z = H.value;
              s(o, () => ({ engine: z }));
            },
            get value() {
              return c(A);
            }
          });
        }
        Z(b);
        var _ = O(b, 4), x = R(_);
        {
          let A = /* @__PURE__ */ E(() => n().code || "");
          Ke(x, {
            rows: 10,
            placeholder: "请输入执行代码，注：输出内容需添加到_result中，如：_result['key'] = value 或者 _result.key = value",
            style: "width: 100%",
            onchange: (H) => {
              s(o, () => ({ code: H.target.value }));
            },
            get value() {
              return c(A);
            }
          });
        }
        Z(_);
        var k = O(_, 2), N = R(k);
        Te(N, {
          level: 3,
          mt: "10px",
          children: (A, H) => {
            ve();
            var z = ke("输出参数");
            L(A, z);
          },
          $$slots: { default: !0 }
        });
        var V = O(N, 2);
        Me(V, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (A, H) => {
            var z = mw();
            L(A, z);
          },
          $$slots: { default: !0 }
        }), Z(k);
        var j = O(k, 2);
        Zn(j, {}), L(u, p);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(l);
}
se(Qd, { data: {} }, [], [], !0);
var bw = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>'), xw = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Cw = /* @__PURE__ */ ee('<div class="heading svelte-1lcrzpc"><!> <!></div> <!> <!> <div class="setting-item svelte-1lcrzpc"><!></div> <div class="heading svelte-1lcrzpc"><!></div> <!>', 1);
const $w = {
  hash: "svelte-1lcrzpc",
  code: ".heading.svelte-1lcrzpc {display:flex;margin-bottom:10px;}.setting-item.svelte-1lcrzpc {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Jd(e, t) {
  le(t, !0), He(e, $w);
  const n = v(t, "data", 7), r = /* @__PURE__ */ Ze(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Ue(), { addParameter: i } = on(), { updateNodeData: s } = st();
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
        var u = bw();
        L(l, u);
      },
      children: (l, u) => {
        var d = Cw(), p = oe(d), f = R(p);
        Te(f, {
          level: 3,
          children: (k, N) => {
            ve();
            var V = ke("输入参数");
            L(k, V);
          },
          $$slots: { default: !0 }
        });
        var h = O(f, 2);
        Me(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (k, N) => {
            var V = xw();
            L(k, V);
          },
          $$slots: { default: !0 }
        }), Z(p);
        var y = O(p, 2);
        bt(y, {});
        var w = O(y, 2);
        Te(w, {
          level: 3,
          mt: "10px",
          mb: "10px",
          children: (k, N) => {
            ve();
            var V = ke("模板内容");
            L(k, V);
          },
          $$slots: { default: !0 }
        });
        var m = O(w, 2), b = R(m);
        {
          let k = /* @__PURE__ */ E(() => n().template || "");
          Ke(b, {
            rows: 10,
            placeholder: "请输入模板内容",
            style: "width: 100%",
            onchange: (N) => {
              s(o, () => ({ template: N.target.value }));
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
          children: (k, N) => {
            ve();
            var V = ke("输出参数");
            L(k, V);
          },
          $$slots: { default: !0 }
        }), Z($);
        var x = O($, 2);
        Zn(x, {}), L(l, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(a);
}
se(Jd, { data: {} }, [], [], !0);
var _w = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), kw = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Sw = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ew = /* @__PURE__ */ ee('<!> <div class="radio-group svelte-19uflw6"><label class="svelte-19uflw6"><!>none</label> <label class="svelte-19uflw6"><!>form-data</label> <label class="svelte-19uflw6"><!>x-www-form-urlencoded</label> <label class="svelte-19uflw6"><!>json</label> <label class="svelte-19uflw6"><!>raw</label></div>', 1), Pw = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Nw = /* @__PURE__ */ ee('<div class="heading svelte-19uflw6" style="padding-top: 10px"><!> <!></div> <!>', 1), Mw = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Tw = /* @__PURE__ */ ee('<div class="heading svelte-19uflw6" style="padding-top: 10px"><!> <!></div> <!>', 1), Lw = /* @__PURE__ */ ee('<div style="width: 100%"><!></div>'), Vw = /* @__PURE__ */ ee('<div style="width: 100%"><!></div>'), Dw = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ow = /* @__PURE__ */ ee('<div class="heading svelte-19uflw6"><!> <!></div> <!> <!> <div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-19uflw6"><!> <!></div> <!> <!> <!> <!> <!> <!> <div class="heading svelte-19uflw6"><!> <!></div> <!>', 1);
const zw = {
  hash: "svelte-19uflw6",
  code: ".heading.svelte-19uflw6 {display:flex;margin-bottom:10px;}.radio-group.svelte-19uflw6 {display:flex;margin:10px 0;flex-wrap:wrap;}.radio-group.svelte-19uflw6 label:where(.svelte-19uflw6) {display:flex;font-size:14px;box-sizing:border-box;}"
};
function ef(e, t) {
  le(t, !0), He(e, zw);
  const n = v(t, "data", 7), r = /* @__PURE__ */ Ze(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]);
  zn(() => {
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
  ], i = Ue(), { addParameter: s } = on(), { updateNodeData: a } = st();
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
        var d = _w();
        L(u, d);
      },
      children: (u, d) => {
        var p = Ow(), f = oe(p), h = R(f);
        Te(h, {
          level: 3,
          children: (I, F) => {
            ve();
            var G = ke("输入参数");
            L(I, G);
          },
          $$slots: { default: !0 }
        });
        var y = O(h, 2);
        Me(y, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i);
          },
          children: (I, F) => {
            var G = kw();
            L(I, G);
          },
          $$slots: { default: !0 }
        }), Z(f);
        var w = O(f, 2);
        bt(w, {});
        var m = O(w, 2);
        Te(m, {
          level: 3,
          mt: "10px",
          children: (I, F) => {
            ve();
            var G = ke("URL 地址");
            L(I, G);
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
            onSelect: (F) => {
              const G = F.value;
              a(i, () => ({ method: G }));
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
            onchange: (F) => {
              a(i, () => ({ url: F.target.value }));
            },
            get value() {
              return c(I);
            }
          });
        }
        Z(x), Z(b);
        var N = O(b, 2), V = R(N);
        Te(V, {
          level: 3,
          children: (I, F) => {
            ve();
            var G = ke("Http 头信息");
            L(I, G);
          },
          $$slots: { default: !0 }
        });
        var j = O(V, 2);
        Me(j, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "headers");
          },
          children: (I, F) => {
            var G = Sw();
            L(I, G);
          },
          $$slots: { default: !0 }
        }), Z(N);
        var A = O(N, 2);
        bt(A, { dataKeyName: "headers" });
        var H = O(A, 2);
        {
          var z = (I) => {
            var F = Ew(), G = oe(F);
            Te(G, {
              level: 3,
              mt: "10px",
              children: (we, Oe) => {
                ve();
                var Y = ke("Body");
                L(we, Y);
              },
              $$slots: { default: !0 }
            });
            var te = O(G, 2), ne = R(te), J = R(ne);
            {
              let we = /* @__PURE__ */ E(() => !n().bodyType || n().bodyType === "");
              Je(J, {
                type: "radio",
                value: "",
                get checked() {
                  return c(we);
                },
                onchange: (Oe) => {
                  Oe.target?.checked && a(i, { bodyType: "" });
                }
              });
            }
            ve(), Z(ne);
            var he = O(ne, 2), ce = R(he);
            {
              let we = /* @__PURE__ */ E(() => n().bodyType === "form-data");
              Je(ce, {
                type: "radio",
                value: "form-data",
                get checked() {
                  return c(we);
                },
                onchange: (Oe) => {
                  Oe.target?.checked && a(i, { bodyType: "form-data" });
                }
              });
            }
            ve(), Z(he);
            var re = O(he, 2), ie = R(re);
            {
              let we = /* @__PURE__ */ E(() => n().bodyType === "x-www-form-urlencoded");
              Je(ie, {
                type: "radio",
                value: "x-www-form-urlencoded",
                get checked() {
                  return c(we);
                },
                onchange: (Oe) => {
                  Oe.target?.checked && a(i, { bodyType: "x-www-form-urlencoded" });
                }
              });
            }
            ve(), Z(re);
            var fe = O(re, 2), pe = R(fe);
            {
              let we = /* @__PURE__ */ E(() => n().bodyType === "json");
              Je(pe, {
                type: "radio",
                value: "json",
                get checked() {
                  return c(we);
                },
                onchange: (Oe) => {
                  Oe.target?.checked && a(i, { bodyType: "json" });
                }
              });
            }
            ve(), Z(fe);
            var Ce = O(fe, 2), de = R(Ce);
            {
              let we = /* @__PURE__ */ E(() => n().bodyType === "raw");
              Je(de, {
                type: "radio",
                value: "raw",
                get checked() {
                  return c(we);
                },
                onchange: (Oe) => {
                  Oe.target?.checked && a(i, { bodyType: "raw" });
                }
              });
            }
            ve(), Z(Ce), Z(te), L(I, F);
          };
          ae(H, (I) => {
            (n().method === "post" || n().method === "put" || n().method === "delete" || n().method === "patch") && I(z);
          });
        }
        var S = O(H, 2);
        {
          var T = (I) => {
            var F = Nw(), G = oe(F), te = R(G);
            Te(te, {
              level: 3,
              children: (he, ce) => {
                ve();
                var re = ke("参数");
                L(he, re);
              },
              $$slots: { default: !0 }
            });
            var ne = O(te, 2);
            Me(ne, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formData");
              },
              children: (he, ce) => {
                var re = Pw();
                L(he, re);
              },
              $$slots: { default: !0 }
            }), Z(G);
            var J = O(G, 2);
            bt(J, { dataKeyName: "formData" }), L(I, F);
          };
          ae(S, (I) => {
            n().bodyType === "form-data" && I(T);
          });
        }
        var C = O(S, 2);
        {
          var P = (I) => {
            var F = Tw(), G = oe(F), te = R(G);
            Te(te, {
              level: 3,
              children: (he, ce) => {
                ve();
                var re = ke("Body 参数");
                L(he, re);
              },
              $$slots: { default: !0 }
            });
            var ne = O(te, 2);
            Me(ne, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formUrlencoded");
              },
              children: (he, ce) => {
                var re = Mw();
                L(he, re);
              },
              $$slots: { default: !0 }
            }), Z(G);
            var J = O(G, 2);
            bt(J, { dataKeyName: "formUrlencoded" }), L(I, F);
          };
          ae(C, (I) => {
            n().bodyType === "x-www-form-urlencoded" && I(P);
          });
        }
        var M = O(C, 2);
        {
          var K = (I) => {
            var F = Lw(), G = R(F);
            Ke(G, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入 json 信息",
              get value() {
                return n().bodyJson;
              },
              oninput: (te) => {
                a(i, { bodyJson: te.target.value });
              }
            }), Z(F), L(I, F);
          };
          ae(M, (I) => {
            n().bodyType === "json" && I(K);
          });
        }
        var B = O(M, 2);
        {
          var W = (I) => {
            var F = Vw(), G = R(F);
            Ke(G, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入请求信息",
              get value() {
                return n().bodyRaw;
              },
              oninput: (te) => {
                a(i, { bodyRaw: te.target.value });
              }
            }), Z(F), L(I, F);
          };
          ae(B, (I) => {
            n().bodyType === "raw" && I(W);
          });
        }
        var D = O(B, 2), X = R(D);
        Te(X, {
          level: 3,
          mt: "10px",
          children: (I, F) => {
            ve();
            var G = ke("输出参数");
            L(I, G);
          },
          $$slots: { default: !0 }
        });
        var q = O(X, 2);
        Me(q, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "outputDefs");
          },
          children: (I, F) => {
            var G = Dw();
            L(I, G);
          },
          $$slots: { default: !0 }
        }), Z(D);
        var U = O(D, 2);
        Zn(U, {}), L(u, p);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(l);
}
se(ef, { data: {} }, [], [], !0);
var Aw = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>'), Hw = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Iw = /* @__PURE__ */ ee('<div class="heading svelte-ddi5i"><!> <!></div> <!> <!> <div class="setting-title svelte-ddi5i">知识库</div> <div class="setting-item svelte-ddi5i"><!></div> <div class="setting-title svelte-ddi5i">关键字</div> <div class="setting-item svelte-ddi5i"><!></div> <div class="setting-title svelte-ddi5i">获取数据量</div> <div class="setting-item svelte-ddi5i"><!></div> <div class="heading svelte-ddi5i"><!></div> <!>', 1);
const Zw = {
  hash: "svelte-ddi5i",
  code: ".heading.svelte-ddi5i {display:flex;margin-bottom:10px;}.setting-title.svelte-ddi5i {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-ddi5i {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function tf(e, t) {
  le(t, !0), He(e, Zw);
  const n = v(t, "data", 7), r = /* @__PURE__ */ Ze(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Ue(), { addParameter: i } = on(), s = Un();
  let a = /* @__PURE__ */ Ee(Rt([]));
  zn(async () => {
    const d = await s.provider?.knowledge?.();
    c(a).push(...d || []);
  });
  const { updateNodeData: l } = st();
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
        L(d, p);
      },
      children: (d, p) => {
        var f = Iw(), h = oe(f), y = R(h);
        Te(y, {
          level: 3,
          children: (z, S) => {
            ve();
            var T = ke("输入参数");
            L(z, T);
          },
          $$slots: { default: !0 }
        });
        var w = O(y, 2);
        Me(w, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (z, S) => {
            var T = Hw();
            L(z, T);
          },
          $$slots: { default: !0 }
        }), Z(h);
        var m = O(h, 2);
        bt(m, {});
        var b = O(m, 2);
        Te(b, {
          level: 3,
          mt: "10px",
          children: (z, S) => {
            ve();
            var T = ke("知识库设置");
            L(z, T);
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
        var N = O(x, 4), V = R(N);
        {
          let z = /* @__PURE__ */ E(() => n().limit || "");
          Je(V, {
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
        Z(N);
        var j = O(N, 2), A = R(j);
        Te(A, {
          level: 3,
          mt: "10px",
          children: (z, S) => {
            ve();
            var T = ke("输出参数");
            L(z, T);
          },
          $$slots: { default: !0 }
        }), Z(j);
        var H = O(j, 2);
        Zn(H, {}), L(d, f);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(u);
}
se(tf, { data: {} }, [], [], !0);
var jw = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>'), Kw = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Rw = /* @__PURE__ */ ee('<div class="heading svelte-1qblm04"><!> <!></div> <!> <!> <div class="setting-title svelte-1qblm04">搜索引擎</div> <div class="setting-item svelte-1qblm04"><!></div> <div class="setting-title svelte-1qblm04">关键字</div> <div class="setting-item svelte-1qblm04"><!></div> <div class="setting-title svelte-1qblm04">搜索数据量</div> <div class="setting-item svelte-1qblm04"><!></div> <div class="heading svelte-1qblm04"><!></div> <!>', 1);
const Bw = {
  hash: "svelte-1qblm04",
  code: ".heading.svelte-1qblm04 {display:flex;margin-bottom:10px;}.setting-title.svelte-1qblm04 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-1qblm04 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function nf(e, t) {
  le(t, !0), He(e, Bw);
  const n = v(t, "data", 7), r = /* @__PURE__ */ Ze(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Ue(), { addParameter: i } = on(), s = Un();
  let a = /* @__PURE__ */ Ee(Rt([]));
  zn(async () => {
    const d = await s.provider?.searchEngine?.();
    c(a).push(...d || []);
  });
  const { updateNodeData: l } = st();
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
        var p = jw();
        L(d, p);
      },
      children: (d, p) => {
        var f = Rw(), h = oe(f), y = R(h);
        Te(y, {
          level: 3,
          children: (z, S) => {
            ve();
            var T = ke("输入参数");
            L(z, T);
          },
          $$slots: { default: !0 }
        });
        var w = O(y, 2);
        Me(w, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (z, S) => {
            var T = Kw();
            L(z, T);
          },
          $$slots: { default: !0 }
        }), Z(h);
        var m = O(h, 2);
        bt(m, {});
        var b = O(m, 2);
        Te(b, {
          level: 3,
          mt: "10px",
          children: (z, S) => {
            ve();
            var T = ke("搜索引擎设置");
            L(z, T);
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
        var N = O(x, 4), V = R(N);
        Je(V, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          get value() {
            return n().limit;
          },
          onchange: (z) => {
            const S = z.target.value;
            l(o, () => ({ limit: S }));
          }
        }), Z(N);
        var j = O(N, 2), A = R(j);
        Te(A, {
          level: 3,
          mt: "10px",
          children: (z, S) => {
            ve();
            var T = ke("输出参数");
            L(z, T);
          },
          $$slots: { default: !0 }
        }), Z(j);
        var H = O(j, 2);
        Zn(H, {}), L(d, f);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(u);
}
se(nf, { data: {} }, [], [], !0);
var Ww = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>'), Yw = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Fw = /* @__PURE__ */ ee('<div class="heading svelte-1o34e8c"><!></div> <!> <div class="heading svelte-1o34e8c"><!> <!></div> <!>', 1);
const qw = {
  hash: "svelte-1o34e8c",
  code: ".heading.svelte-1o34e8c {display:flex;margin:10px 0;align-items:center;}.loop_handle_wrapper ::after {content:'循环体';width:100px;height:20px;background:#000;color:#fff;display:flex;justify-content:center;align-items:center;}"
};
function rf(e, t) {
  le(t, !0), He(e, qw);
  const n = v(t, "data", 7), r = /* @__PURE__ */ Ze(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Ue(), { addParameter: i } = on();
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
        L(a, l);
      },
      handle: (a) => {
        Xn(a, {
          type: "source",
          get position() {
            return me.Bottom;
          },
          id: "loop_handle",
          style: "bottom: -12px;width: 100px",
          class: "loop_handle_wrapper"
        });
      },
      children: (a, l) => {
        var u = Fw(), d = oe(u), p = R(d);
        Te(p, {
          level: 3,
          children: (b, $) => {
            ve();
            var _ = ke("循环变量");
            L(b, _);
          },
          $$slots: { default: !0 }
        }), Z(d);
        var f = O(d, 2);
        bt(f, { dataKeyName: "loopVars" });
        var h = O(f, 2), y = R(h);
        Te(y, {
          level: 3,
          children: (b, $) => {
            ve();
            var _ = ke("输出参数");
            L(b, _);
          },
          $$slots: { default: !0 }
        });
        var w = O(y, 2);
        Me(w, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (b, $) => {
            var _ = Yw();
            L(b, _);
          },
          $$slots: { default: !0 }
        }), Z(h);
        var m = O(h, 2);
        bt(m, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs",
          useChildrenOnly: !0
        }), L(a, u);
      },
      $$slots: { icon: !0, handle: !0, default: !0 }
    }
  )), ue(s);
}
se(rf, { data: {} }, [], [], !0);
var Xw = /* @__PURE__ */ ee('<div class="input-more-setting svelte-5x0hls"><div class="input-more-item svelte-5x0hls">数据内容： <!></div> <div class="input-more-item svelte-5x0hls">确认方式： <!></div> <div class="input-more-item svelte-5x0hls">数据标题： <!></div> <div class="input-more-item svelte-5x0hls">数据描述： <!></div>   <div class="input-more-item svelte-5x0hls"><!></div></div>'), Gw = /* @__PURE__ */ ee('<div class="input-item svelte-5x0hls"><!></div> <div class="input-item svelte-5x0hls"><!></div> <div class="input-item svelte-5x0hls"><!></div>', 1);
const Uw = {
  hash: "svelte-5x0hls",
  code: ".input-item.svelte-5x0hls {display:flex;align-items:center;}.input-more-setting.svelte-5x0hls {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-5x0hls .input-more-item:where(.svelte-5x0hls) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function of(e, t) {
  le(t, !0), He(e, Uw);
  const n = v(t, "parameter", 7), r = v(t, "index", 7), o = v(t, "dataKeyName", 7), i = v(t, "useChildrenOnly", 7);
  let s = Ue(), a = Hn(s), l = /* @__PURE__ */ E(() => ({
    ...n(),
    ...a?.current?.data?.[o()][r()]
  }));
  const { updateNodeData: u } = st(), d = (S, T) => {
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
  let b = Fd(i());
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
  }, _ = Gw(), x = oe(_), k = R(x);
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
  var N = O(x, 2), V = R(N);
  {
    var j = (S) => {
      Je(S, {
        get value() {
          return c(l).value;
        },
        placeholder: "请输入参数值",
        oninput: (T) => p("value", T)
      });
    }, A = (S) => {
      var T = Se(), C = oe(T);
      {
        var P = (M) => {
          {
            let K = /* @__PURE__ */ E(() => [c(l).ref]);
            ut(M, {
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
        ae(
          C,
          (M) => {
            c(l).refType !== "input" && M(P);
          },
          !0
        );
      }
      L(S, T);
    };
    ae(V, (S) => {
      c(l).refType === "fixed" ? S(j) : S(A, !1);
    });
  }
  Z(N);
  var H = O(N, 2), z = R(H);
  return Nt(
    nr(z, {
      placement: "bottom",
      floating: (S) => {
        var T = Xw(), C = R(T), P = O(R(C));
        {
          let I = /* @__PURE__ */ E(() => c(l).contentType ? [c(l).contentType] : []);
          ut(P, {
            get items() {
              return ha;
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
        var M = O(C, 2), K = O(R(M));
        {
          let I = /* @__PURE__ */ E(() => c(l).formType ? [c(l).formType] : []);
          ut(K, {
            get items() {
              return qm;
            },
            style: "width: 100%",
            defaultValue: ["single"],
            get value() {
              return c(I);
            },
            onSelect: h
          });
        }
        Z(M);
        var B = O(M, 2), W = O(R(B));
        Ke(W, {
          rows: 1,
          style: "width: 100%;",
          onchange: (I) => {
            p("formLabel", I);
          },
          get value() {
            return c(l).formLabel;
          }
        }), Z(B);
        var D = O(B, 2), X = O(R(D));
        Ke(X, {
          rows: 2,
          style: "width: 100%;",
          onchange: (I) => {
            p("formDescription", I);
          },
          get value() {
            return c(l).formDescription;
          }
        }), Z(D);
        var q = O(D, 2), U = R(q);
        Me(U, {
          onclick: m,
          children: (I, F) => {
            ve();
            var G = ke("删除");
            L(I, G);
          },
          $$slots: { default: !0 }
        }), Z(q), Z(T), L(S, T);
      },
      children: (S, T) => {
        Oo(S, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (S) => w = S,
    () => w
  ), Z(H), L(e, _), ue($);
}
se(
  of,
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
var Qw = /* @__PURE__ */ ee('<div class="input-header svelte-1fllp9b">参数名称</div> <div class="input-header svelte-1fllp9b">参数值</div> <div class="input-header svelte-1fllp9b"></div>', 1), Jw = /* @__PURE__ */ ee('<div class="none-params svelte-1fllp9b"> </div>'), eb = /* @__PURE__ */ ee('<div class="input-container svelte-1fllp9b"><!> <!></div>');
const tb = {
  hash: "svelte-1fllp9b",
  code: `.input-container.svelte-1fllp9b {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1fllp9b .none-params:where(.svelte-1fllp9b) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1fllp9b .input-header:where(.svelte-1fllp9b) {font-size:12px;color:#666;}`
};
function sf(e, t) {
  le(t, !0), He(e, tb);
  const n = v(t, "noneParameterText", 7, "无确认数据"), r = v(t, "dataKeyName", 7, "parameters"), o = v(t, "useChildrenOnly", 7);
  let i = Ue(), s = Hn(i), a = /* @__PURE__ */ E(() => [...s?.current?.data?.[r()] || []]);
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
  }, u = eb(), d = R(u);
  {
    var p = (h) => {
      var y = Qw();
      ve(4), L(h, y);
    };
    ae(d, (h) => {
      c(a).length !== 0 && h(p);
    });
  }
  var f = O(d, 2);
  return mt(
    f,
    19,
    () => c(a),
    (h) => h.id,
    (h, y, w) => {
      of(h, {
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
      var y = Jw(), w = R(y, !0);
      Z(y), $e(() => Re(w, n())), L(h, y);
    }
  ), Z(u), L(e, u), ue(l);
}
se(sf, { noneParameterText: {}, dataKeyName: {}, useChildrenOnly: {} }, [], [], !0);
const Ms = (e, t) => {
  if (e === t) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const n = Array.isArray(e), r = Array.isArray(t);
  if (n !== r) return !1;
  if (n && r) {
    if (e.length !== t.length) return !1;
    for (let o = 0; o < e.length; o++)
      if (!Ms(e[o], t[o])) return !1;
    return !0;
  } else {
    const o = Object.keys(e), i = Object.keys(t);
    if (o.length !== i.length) return !1;
    for (const s of o)
      if (!(s in t) || !Ms(e[s], t[s])) return !1;
    return !0;
  }
};
var nb = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), rb = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), ob = /* @__PURE__ */ ee('<div class="heading svelte-8iukvu"><!> <!></div> <!> <!> <div class="setting-title svelte-8iukvu">消息内容</div> <div class="setting-item svelte-8iukvu"><!></div> <div class="heading svelte-8iukvu"><!></div> <!>', 1);
const ib = {
  hash: "svelte-8iukvu",
  code: ".heading.svelte-8iukvu {display:flex;margin-bottom:10px;}.setting-title.svelte-8iukvu {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-8iukvu {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function af(e, t) {
  le(t, !0), He(e, ib);
  const n = v(t, "data", 7), r = /* @__PURE__ */ Ze(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Ue(), { addParameter: i } = on(), { updateNodeData: s } = st();
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
      Ms(l, n().outputDefs) || s(o, () => ({ outputDefs: l }));
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
        var u = nb();
        L(l, u);
      },
      children: (l, u) => {
        var d = ob(), p = oe(d), f = R(p);
        Te(f, {
          level: 3,
          children: (k, N) => {
            ve();
            var V = ke("确认数据");
            L(k, V);
          },
          $$slots: { default: !0 }
        });
        var h = O(f, 2);
        Me(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "confirms");
          },
          children: (k, N) => {
            var V = rb();
            L(k, V);
          },
          $$slots: { default: !0 }
        }), Z(p);
        var y = O(p, 2);
        sf(y, { dataKeyName: "confirms", noneParameterText: "无确认数据" });
        var w = O(y, 2);
        Te(w, {
          level: 3,
          mt: "10px",
          children: (k, N) => {
            ve();
            var V = ke("确认消息");
            L(k, V);
          },
          $$slots: { default: !0 }
        });
        var m = O(w, 4), b = R(m);
        {
          let k = /* @__PURE__ */ E(() => n().message || "");
          Ke(b, {
            rows: 5,
            placeholder: "请输入用户需要确认的消息内容",
            style: "width: 100%",
            onchange: (N) => {
              s(o, () => ({ message: N.target.value }));
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
          children: (k, N) => {
            ve();
            var V = ke("输出参数");
            L(k, V);
          },
          $$slots: { default: !0 }
        }), Z($);
        var x = O($, 2);
        Zn(x, { placeholder: "" }), L(l, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(a);
}
se(af, { data: {} }, [], [], !0);
const sb = {
  startNode: Bd,
  codeNode: Qd,
  confirmNode: af,
  llmNode: Ud,
  templateNode: Jd,
  httpNode: ef,
  knowledgeNode: tf,
  searchEngineNode: nf,
  loopNode: rf,
  endNode: Xd
};
var ab = /* @__PURE__ */ ee("<!> ", 1);
function Ts(e, t) {
  le(t, !0);
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
  return Me(e, {
    draggable: !0,
    ondragstart: a,
    get "data-node-type"() {
      return o();
    },
    children: (u, d) => {
      var p = ab(), f = oe(p);
      Xs(f, n);
      var h = O(f);
      $e(() => Re(h, ` ${r() ?? ""}`)), L(u, p);
    },
    $$slots: { default: !0 }
  }), ue(l);
}
se(Ts, { icon: {}, title: {}, type: {}, description: {}, extra: {} }, [], [], !0);
var lb = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), ub = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), cb = /* @__PURE__ */ ee('<div><div class="tf-toolbar-container "><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"></div></div></div> <!></div>');
function lf(e, t) {
  le(t, !0);
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
  ], s = [], a = Un(), l = a.customNodes;
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
  var u = cb(), d = R(u), p = R(d), f = R(p);
  Pd(f, {
    style: "width: 100%",
    get items() {
      return i;
    },
    onChange: (b) => {
      Q(n, b.value.toString(), !0);
    }
  }), Z(p);
  var h = O(p, 2), y = R(h);
  mt(y, 21, () => o, Lr, (b, $) => {
    Ts(b, Be(() => c($)));
  }), Z(y);
  var w = O(y, 2);
  mt(w, 21, () => s, Lr, (b, $) => {
    Ts(b, Be(() => c($)));
  }), Z(w), Z(h), Z(d);
  var m = O(d, 2);
  Me(m, {
    onclick: () => {
      Q(r, c(r) ? "" : "show", !0);
    },
    children: (b, $) => {
      var _ = Se(), x = oe(_);
      {
        var k = (V) => {
          var j = lb();
          L(V, j);
        }, N = (V) => {
          var j = ub();
          L(V, j);
        };
        ae(x, (V) => {
          c(r) === "show" ? V(k) : V(N, !1);
        });
      }
      L(b, _);
    },
    $$slots: { default: !0 }
  }), Z(u), $e(() => {
    Pt(u, 1, `tf-toolbar ${c(r) ?? ""}`), dt(y, `display: ${c(n) === "base" ? "flex" : "none"}`), dt(w, `display: ${c(n) !== "base" ? "flex" : "none"}`);
  }), L(e, u), ue();
}
se(lf, {}, [], [], !0);
const db = () => ({ getNode: (e) => Le.getNode(e) }), fb = () => ({ ensureParentInNodesBefore: (e, t) => {
  Le.updateNodes((n) => {
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
} }), pb = () => ({ getEdgesByTarget: (e) => Le.getEdges().filter((t) => t.target === e) });
var hb = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), gb = /* @__PURE__ */ ee('<div class="heading svelte-qt4m0r"><!> <!></div> <!>', 1), vb = /* @__PURE__ */ ee('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), mb = /* @__PURE__ */ ee('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), yb = /* @__PURE__ */ ee('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><div class="slider-container svelte-qt4m0r"><span class="svelte-qt4m0r"> </span> <input/></div></div>', 1), wb = /* @__PURE__ */ ee('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), bb = /* @__PURE__ */ ee('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), xb = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Cb = /* @__PURE__ */ ee('<div class="heading svelte-qt4m0r"><!> <!></div> <!>', 1), $b = /* @__PURE__ */ ee("<!> <!> <div></div> <!>", 1);
const _b = {
  hash: "svelte-qt4m0r",
  code: `.heading.svelte-qt4m0r {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-qt4m0r {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-qt4m0r {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-qt4m0r {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-qt4m0r span:where(.svelte-qt4m0r) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-qt4m0r {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-qt4m0r::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function uf(e, t) {
  le(t, !0), He(e, _b);
  const n = v(t, "data", 7), r = /* @__PURE__ */ Ze(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Ue(), { addParameter: i } = on(), s = st(), { updateNodeData: a } = s, l = (m) => {
    a(o, m);
  }, u = (m, b) => {
    l({ [m]: b.target?.value });
  }, d = { ...r, id: o, data: n() }, p = document.createElement("div"), f = Un().customNodes[t.type];
  f.render?.(p, d, s);
  const h = f.forms;
  let y;
  qe(() => {
    n().expand && y && y.append(p);
  }), qe(() => {
    n() && f.onUpdate?.(p, { ...d, data: n() });
  }), qe(() => {
    !n().parameters && f.parameters && l({
      parameters: vo(JSON.parse(JSON.stringify(f.parameters)))
    });
  }), qe(() => {
    !n().outputDefs && f.outputDefs && l({
      outputDefs: vo(JSON.parse(JSON.stringify(f.outputDefs)))
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
      var _ = Se(), x = oe(_);
      Xs(x, () => f.icon), L($, _);
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
          var x = $b(), k = oe(x);
          {
            var N = (S) => {
              var T = gb(), C = oe(T), P = R(C);
              Te(P, {
                level: 3,
                children: (W, D) => {
                  ve();
                  var X = ke("输入参数");
                  L(W, X);
                },
                $$slots: { default: !0 }
              });
              var M = O(P, 2);
              {
                var K = (W) => {
                  Me(W, {
                    class: "input-btn-more",
                    style: "margin-left: auto",
                    onclick: () => {
                      i(o);
                    },
                    children: (D, X) => {
                      var q = hb();
                      L(D, q);
                    },
                    $$slots: { default: !0 }
                  });
                };
                ae(M, (W) => {
                  f.parametersAddEnable !== !1 && W(K);
                });
              }
              Z(C);
              var B = O(C, 2);
              bt(B, {}), L(S, T);
            };
            ae(k, (S) => {
              f.parametersEnable !== !1 && S(N);
            });
          }
          var V = O(k, 2);
          {
            var j = (S) => {
              var T = Se(), C = oe(T);
              mt(C, 17, () => h, Lr, (P, M) => {
                var K = Se(), B = oe(K);
                {
                  var W = (X) => {
                    var q = vb(), U = oe(q), I = R(U, !0);
                    Z(U);
                    var F = O(U, 2), G = R(F);
                    {
                      let te = /* @__PURE__ */ E(() => n()[c(M).name] || c(M).defaultValue);
                      Je(G, Be(
                        {
                          get placeholder() {
                            return c(M).placeholder;
                          },
                          style: "width: 100%",
                          get value() {
                            return c(te);
                          }
                        },
                        () => c(M).attrs,
                        {
                          onchange: (ne) => {
                            u(c(M).name, ne);
                          }
                        }
                      ));
                    }
                    Z(F), $e(() => Re(I, c(M).label)), L(X, q);
                  }, D = (X) => {
                    var q = Se(), U = oe(q);
                    {
                      var I = (G) => {
                        var te = mb(), ne = oe(te), J = R(ne, !0);
                        Z(ne);
                        var he = O(ne, 2), ce = R(he);
                        {
                          let re = /* @__PURE__ */ E(() => n()[c(M).name] || c(M).defaultValue);
                          Ke(ce, Be(
                            {
                              rows: 3,
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
                              onchange: (ie) => {
                                u(c(M).name, ie);
                              }
                            }
                          ));
                        }
                        Z(he), $e(() => Re(J, c(M).label)), L(G, te);
                      }, F = (G) => {
                        var te = Se(), ne = oe(te);
                        {
                          var J = (ce) => {
                            var re = yb(), ie = oe(re), fe = R(ie, !0);
                            Z(ie);
                            var pe = O(ie, 2), Ce = R(pe), de = R(Ce), we = R(de);
                            Z(de);
                            var Oe = O(de, 2), Y = (je) => l({ [c(M).name]: parseFloat(je.target.value) });
                            ot(
                              Oe,
                              () => ({
                                class: "nodrag",
                                type: "range",
                                ...c(M).attrs,
                                value: n()[c(M).name] ?? c(M).defaultValue,
                                oninput: Y
                              }),
                              void 0,
                              void 0,
                              void 0,
                              "svelte-qt4m0r",
                              !0
                            ), Z(Ce), Z(pe), $e(() => {
                              Re(fe, c(M).label), Re(we, `${c(M).description ?? ""}: ${n()[c(M).name] ?? c(M).defaultValue ?? ""}`);
                            }), L(ce, re);
                          }, he = (ce) => {
                            var re = Se(), ie = oe(re);
                            {
                              var fe = (Ce) => {
                                var de = wb(), we = oe(de), Oe = R(we, !0);
                                Z(we);
                                var Y = O(we, 2), je = R(Y);
                                {
                                  let ze = /* @__PURE__ */ E(() => c(M).options || []), Ae = /* @__PURE__ */ E(() => n()[c(M).name] ? [n()[c(M).name]] : [c(M).defaultValue]);
                                  ut(je, {
                                    get items() {
                                      return c(ze);
                                    },
                                    style: "width: 100%",
                                    get placeholder() {
                                      return c(M).placeholder;
                                    },
                                    onSelect: (Ie) => {
                                      const tt = Ie.value;
                                      l({ [c(M).name]: tt });
                                    },
                                    get value() {
                                      return c(Ae);
                                    }
                                  });
                                }
                                Z(Y), $e(() => Re(Oe, c(M).label)), L(Ce, de);
                              }, pe = (Ce) => {
                                var de = Se(), we = oe(de);
                                {
                                  var Oe = (je) => {
                                    var ze = bb(), Ae = oe(ze), Ie = R(Ae, !0);
                                    Z(Ae);
                                    var tt = O(Ae, 2), Mt = R(tt);
                                    {
                                      let Ht = /* @__PURE__ */ E(() => c(M).chosen?.buttonText);
                                      Ed(Mt, {
                                        style: "width: 100%",
                                        get placeholder() {
                                          return c(M).placeholder;
                                        },
                                        get buttonText() {
                                          return c(Ht);
                                        },
                                        onChosen: (Qe, ye, Ye) => {
                                          c(M).chosen?.onChosen?.(l, Qe, ye, Ye);
                                        },
                                        get value() {
                                          return n()[c(M).chosen?.valueDataKey || ""];
                                        },
                                        get label() {
                                          return n()[c(M).chosen?.labelDataKey || ""];
                                        }
                                      });
                                    }
                                    Z(tt), $e(() => Re(Ie, c(M).label)), L(je, ze);
                                  }, Y = (je) => {
                                    var ze = Se(), Ae = oe(ze);
                                    {
                                      var Ie = (tt) => {
                                        Te(tt, Be({ level: 3, mt: "10px" }, () => c(M).attrs, {
                                          children: (Mt, Ht) => {
                                            ve();
                                            var Qe = ke();
                                            $e(() => Re(Qe, c(M).label)), L(Mt, Qe);
                                          },
                                          $$slots: { default: !0 }
                                        }));
                                      };
                                      ae(
                                        Ae,
                                        (tt) => {
                                          c(M).type === "heading" && tt(Ie);
                                        },
                                        !0
                                      );
                                    }
                                    L(je, ze);
                                  };
                                  ae(
                                    we,
                                    (je) => {
                                      c(M).type === "chosen" ? je(Oe) : je(Y, !1);
                                    },
                                    !0
                                  );
                                }
                                L(Ce, de);
                              };
                              ae(
                                ie,
                                (Ce) => {
                                  c(M).type === "select" ? Ce(fe) : Ce(pe, !1);
                                },
                                !0
                              );
                            }
                            L(ce, re);
                          };
                          ae(
                            ne,
                            (ce) => {
                              c(M).type === "slider" ? ce(J) : ce(he, !1);
                            },
                            !0
                          );
                        }
                        L(G, te);
                      };
                      ae(
                        U,
                        (G) => {
                          c(M).type === "textarea" ? G(I) : G(F, !1);
                        },
                        !0
                      );
                    }
                    L(X, q);
                  };
                  ae(B, (X) => {
                    c(M).type === "input" ? X(W) : X(D, !1);
                  });
                }
                L(P, K);
              }), L(S, T);
            };
            ae(V, (S) => {
              h && S(j);
            });
          }
          var A = O(V, 2);
          Nt(A, (S) => y = S, () => y);
          var H = O(A, 2);
          {
            var z = (S) => {
              var T = Cb(), C = oe(T), P = R(C);
              Te(P, {
                level: 3,
                mt: "10px",
                children: (W, D) => {
                  ve();
                  var X = ke("输出参数");
                  L(W, X);
                },
                $$slots: { default: !0 }
              });
              var M = O(P, 2);
              {
                var K = (W) => {
                  Me(W, {
                    class: "input-btn-more",
                    style: "margin-left: auto",
                    onclick: () => {
                      i(o, "outputDefs");
                    },
                    children: (D, X) => {
                      var q = xb();
                      L(D, q);
                    },
                    $$slots: { default: !0 }
                  });
                };
                ae(M, (W) => {
                  f.outputDefsAddEnable !== !1 && W(K);
                });
              }
              Z(C);
              var B = O(C, 2);
              Zn(B, {}), L(S, T);
            };
            ae(H, (S) => {
              f.outputDefsEnable !== !1 && S(z);
            });
          }
          $e(() => {
            dt(A, f.rootStyle || ""), Pt(A, 1, An(f.rootClass), "svelte-qt4m0r");
          }), L($, x);
        },
        $$slots: { icon: !0, default: !0 }
      }
    ));
  }
  return ue(w);
}
se(uf, { data: {} }, [], [], !0);
const kb = () => ({ updateEdgeData: (e, t, n) => {
  const r = Le.getEdge(e);
  if (!r)
    return;
  const o = typeof t == "function" ? t(r) : t;
  r.data = n?.replace ? o : { ...r.data, ...o }, Le.updateEdges((i) => i.map((s) => s.id === e ? r : s));
} }), Sb = () => ({ deleteEdge: (e) => {
  Le.removeEdge(e);
} }), Eb = () => {
  const e = (t, n) => n.filter(
    // 排除循环节点的子节点，否则在多层循环嵌套时不正确
    (r) => r.source === t && r.sourceHandle !== "loop_handle"
  );
  return { getNodesFromSource: (t) => {
    const n = Le.getEdges(), r = [];
    let o = e(t, n);
    for (; o.length > 0; ) {
      const i = [];
      o.forEach((s) => {
        r.push(Le.getNode(s.target)), i.push(...e(s.target, n));
      }), o = i;
    }
    return r;
  } };
}, Pb = () => ({ getNodeRelativePosition: (e) => {
  let t = Le.getNode(e);
  const n = { x: 0, y: 0 };
  for (; t; )
    n.x += t.position.x, n.y += t.position.y, t.parentId ? t = Le.getNode(t.parentId) : t = void 0;
  return n;
} });
function Nb(e) {
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
function Mb(e) {
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
function Tb(e) {
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
const Lb = () => (st(), { copyHandler: async (e) => {
  const t = Le.getNodes().filter((s) => s.selected);
  if (t.length === 0) return;
  const n = Le.getEdges().filter((s) => t.some((a) => a.id === s.source) && t.some((a) => a.id === s.target)), r = t.map(Nb), o = n.map(Tb), i = JSON.stringify({
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
  const r = Mb(n.tinyflowNodes), o = n.tinyflowEdges || [], i = /* @__PURE__ */ new Map(), s = [];
  for (const l of r) {
    const u = `node_${Ln()}`;
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
      id: `edge_${Ln()}`,
      source: u,
      target: d
    });
  }
  Le.updateNodes((l) => [...l.map((u) => ({ ...u, selected: !1 })), ...s]), Le.updateEdges((l) => [...l.map((u) => ({ ...u, selected: !1 })), ...a]);
} }), Nl = () => {
  const e = document.activeElement;
  return !e || !(e instanceof HTMLElement) ? !1 : e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement || e.isContentEditable;
};
var Vb = /* @__PURE__ */ ee('<div class="panel-content svelte-woejl3"><div>边属性设置</div> <div class="setting-title svelte-woejl3">边条件设置</div> <div class="setting-item svelte-woejl3"><!></div> <div class="setting-item svelte-woejl3" style="padding: 8px 0"><!> <!></div></div>'), Db = /* @__PURE__ */ ee("<!> <!> <!> <!>", 1), Ob = /* @__PURE__ */ ee('<div style="position: relative; height: 100%; width: 100%;overflow: hidden"><!> <!></div>');
const zb = {
  hash: "svelte-woejl3",
  code: ".panel-content.svelte-woejl3 {padding:10px;background-color:#fff;border-radius:5px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);width:200px;border:1px solid #efefef;}.setting-title.svelte-woejl3 {margin:10px 0;font-size:12px;color:#999;}.setting-item.svelte-woejl3 {display:flex;gap:5px;align-items:center;justify-content:end;}"
};
function cf(e, t) {
  le(t, !0), He(e, zb);
  const n = v(t, "onInit", 7), r = /* @__PURE__ */ Ze(t, ["$$slots", "$$events", "$$legacy", "$$host", "onInit"]), o = st();
  console.log("props", r), n()(o);
  let i = /* @__PURE__ */ Ee(!1), s = /* @__PURE__ */ Ee(null);
  const { updateEdgeData: a } = kb(), l = (q) => {
    q.preventDefault(), q.dataTransfer && (q.dataTransfer.dropEffect = "move");
  }, u = (q) => {
    q.preventDefault();
    const U = o.screenToFlowPosition({ x: q.clientX - 250, y: q.clientY - 100 }), I = q.dataTransfer?.getData("application/tinyflow");
    if (!I)
      return;
    const F = JSON.parse(I), G = { id: `node_${Ln()}`, position: U, data: {}, ...F };
    Le.addNode(G), Le.selectNodeOnly(G.id);
  }, { getNode: d } = db(), p = (q) => {
    const U = d(q.source), I = d(q.target);
    if (q.sourceHandle === "loop_handle" || U.parentId) {
      const F = o.getEdges();
      for (let G of F)
        if (G.target === q.target) {
          const te = d(G.source);
          if (q.sourceHandle === "loop_handle" && te.parentId !== U.id || U.parentId && te.parentId !== U.parentId)
            return !1;
        }
    }
    return !(!U.parentId && I.parentId && I.parentId !== U.id);
  }, { getNodesFromSource: f } = Eb(), { getNodeRelativePosition: h } = Pb(), { ensureParentInNodesBefore: y } = fb(), w = (q, U) => {
    if (!U.isValid)
      return;
    const I = U.toNode;
    if (I.parentId)
      return;
    const F = U.fromNode, G = U.fromHandle, te = { position: { ...I.position } };
    if (G.id === "loop_handle" ? te.parentId = F.id : F.parentId && (te.parentId = F.parentId), te.parentId) {
      const { x: ne, y: J } = h(te.parentId);
      te.position = { x: I.position.x - ne, y: I.position.y - J }, o.updateNode(I.id, te), f(I.id).forEach((he) => {
        o.updateNode(he.id, {
          parentId: te.parentId,
          position: { x: he.position.x - ne, y: he.position.y - J }
        });
      }), y(te.parentId, I.id);
    }
    setTimeout(() => {
      Le.getEdges().forEach((ne) => {
        ne.target === I.id && ne.source == F.id && (Q(i, !0), Q(s, ne, !0));
      });
    });
  }, { getEdgesByTarget: m } = pb(), b = (q) => {
    q.edges.forEach((U) => {
      U.id === c(s)?.id && (Q(s, null), Q(i, !1));
      const I = d(U.target);
      if (I && I.parentId) {
        const F = m(U.target), { x: G, y: te } = h(I.parentId);
        if (F.length === 0)
          o.updateNode(I.id, {
            parentId: void 0,
            position: { x: I.position.x + G, y: I.position.y + te }
          }), f(I.id).forEach((ne) => {
            o.updateNode(ne.id, {
              parentId: void 0,
              position: { x: ne.position.x + G, y: ne.position.y + te }
            });
          });
        else {
          let ne = !1;
          for (let J = 0; J < F.length; J++) {
            const he = F[J], ce = d(he.source);
            if (ce.parentId || ce.type === "loopNode") {
              ne = !0;
              break;
            }
          }
          ne || (o.updateNode(I.id, {
            parentId: void 0,
            position: { x: I.position.x + G, y: I.position.y + te }
          }), f(I.id).forEach((J) => {
            o.updateNode(J.id, {
              parentId: void 0,
              position: { x: J.position.x + G, y: J.position.y + te }
            });
          }));
        }
      }
    });
  }, { deleteEdge: $ } = Sb(), _ = (q, U) => {
  }, x = (q) => {
  }, { copyHandler: k, pasteHandler: N } = Lb(), V = (q) => {
    Nl() || ((q.ctrlKey || q.metaKey) && q.key === "c" && (q.preventDefault(), k(q)), (q.ctrlKey || q.metaKey) && q.key === "a" && (q.preventDefault(), Le.updateNodes((U) => U.map((I) => ({ ...I, selected: !0 }))), Le.updateEdges((U) => U.map((I) => ({ ...I, selected: !0 })))));
  }, j = async (q) => {
    Nl() || N(q);
  };
  zn(() => {
    window.addEventListener("keydown", V), window.addEventListener("paste", j);
  }), $o(() => {
    window.removeEventListener("keydown", V), window.removeEventListener("paste", j);
  });
  const A = {
    // ...nodeTypes
  }, H = Un().customNodes;
  if (H)
    for (let q of Object.keys(H))
      A[q] = uf;
  const z = Un().onDataChange;
  qe(() => {
    z?.({
      nodes: Le.getNodes(),
      edges: Le.getEdges(),
      viewport: Le.getViewport()
    });
  });
  var S = {
    get onInit() {
      return n();
    },
    set onInit(q) {
      n(q), g();
    }
  }, T = Ob(), C = R(T), P = Le.getNodes, M = Le.setNodes, K = Le.getEdges, B = Le.setEdges, W = Le.getViewport, D = Le.setViewport;
  {
    let q = /* @__PURE__ */ E(() => ({ ...sb, ...A })), U = /* @__PURE__ */ E(() => ({
      markerEnd: { type: co.ArrowClosed, width: 20, height: 20 }
    }));
    fd(C, {
      get nodeTypes() {
        return c(q);
      },
      get nodes() {
        return P();
      },
      set nodes(I) {
        M(I);
      },
      get edges() {
        return K();
      },
      set edges(I) {
        B(I);
      },
      get viewport() {
        return W();
      },
      set viewport(I) {
        D(I);
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
        Q(i, !0), Q(s, I.edge, !0);
      },
      onbeforeconnect: (I) => ({ ...I, id: Ln() }),
      ondelete: b,
      onclick: (I) => {
        const F = I.target;
        F.classList.contains("svelte-flow__edge-interaction") || F.classList.contains("panel-content") || F.closest(".panel-content") || (Q(i, !1), Q(s, null));
      },
      get defaultEdgeOptions() {
        return c(U);
      },
      children: (I, F) => {
        var G = Db(), te = oe(G);
        Cd(te, {});
        var ne = O(te, 2);
        wd(ne, {});
        var J = O(ne, 2);
        _d(J, {});
        var he = O(J, 2);
        {
          var ce = (re) => {
            To(re, {
              children: (ie, fe) => {
                var pe = Vb(), Ce = O(R(pe), 4), de = R(Ce);
                {
                  let je = /* @__PURE__ */ E(() => c(s)?.data?.condition);
                  Ke(de, {
                    rows: 3,
                    placeholder: "请输入边条件",
                    style: "width: 100%",
                    get value() {
                      return c(je);
                    },
                    onchange: (ze) => {
                      c(s) && a(c(s).id, { condition: ze.target?.value });
                    }
                  });
                }
                Z(Ce);
                var we = O(Ce, 2), Oe = R(we);
                Me(Oe, {
                  onclick: () => {
                    $(c(s)?.id), Q(i, !1);
                  },
                  children: (je, ze) => {
                    ve();
                    var Ae = ke("删除");
                    L(je, Ae);
                  },
                  $$slots: { default: !0 }
                });
                var Y = O(Oe, 2);
                Me(Y, {
                  primary: !0,
                  onclick: () => {
                    Q(i, !1);
                  },
                  children: (je, ze) => {
                    ve();
                    var Ae = ke("保存");
                    L(je, Ae);
                  },
                  $$slots: { default: !0 }
                }), Z(we), Z(pe), L(ie, pe);
              },
              $$slots: { default: !0 }
            });
          };
          ae(he, (re) => {
            c(i) && re(ce);
          });
        }
        L(I, G);
      },
      $$slots: { default: !0 }
    });
  }
  var X = O(C, 2);
  return lf(X, {}), Z(T), L(e, T), ue(S);
}
se(cf, { onInit: {} }, [], [], !0);
function Ab(e, t) {
  le(t, !0);
  const n = v(t, "options", 7), r = v(t, "onInit", 7);
  let { data: o } = n();
  if (typeof o == "string")
    try {
      o = JSON.parse(o.trim());
    } catch {
      console.error("Invalid JSON data:", o);
    }
  Le.init(o?.nodes || [], o?.edges || []), Mr("tinyflow_options", n());
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
  return pd(e, {
    children: (s, a) => {
      cf(s, {
        get onInit() {
          return r();
        }
      });
    },
    $$slots: { default: !0 }
  }), ue(i);
}
customElements.define("tinyflow-component", se(Ab, { options: {}, onInit: {} }, [], [], !1));
const Ib = /* @__PURE__ */ df({
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
    function i(a) {
      if (a === null || typeof a != "object") return a;
      try {
        return structuredClone(a);
      } catch {
        try {
          return JSON.parse(JSON.stringify(a));
        } catch {
          return console.warn("Failed to clone object, returning original (may cause issues)", a), a;
        }
      }
    }
    return pf(() => {
      if (r.value) {
        const a = { ...n };
        "data" in a && a.data != null && (a.data = i(a.data)), o = new Xm({
          ...a,
          element: r.value
        });
      }
    }), hf(() => {
      o && (o.destroy(), o = null);
    }), t({
      getData: () => o ? o.getData() : (console.warn("Tinyflow instance is not initialized"), null)
    }), (a, l) => (vf(), gf("div", {
      ref_key: "divRef",
      ref: r,
      class: yf(["tinyflow", a.className]),
      style: mf(a.style)
    }, null, 6));
  }
});
export {
  Ib as Tinyflow
};
//# sourceMappingURL=index.js.map
