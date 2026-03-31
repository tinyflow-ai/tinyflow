import { defineComponent as $h, ref as _h, onMounted as Sh, onUnmounted as Eh, createElementBlock as Nh, openBlock as zh, normalizeStyle as Mh, normalizeClass as Ph } from "vue";
const Oh = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(Oh);
const ic = 1, sc = 2, ac = 4, Th = 8, Vh = 16, Ah = 1, Lh = 2, lc = 4, Dh = 8, Hh = 16, uc = 1, Ih = 2, cc = "[", as = "[!", Va = "]", zr = {}, gt = Symbol(), jh = "http://www.w3.org/1999/xhtml", Rh = "http://www.w3.org/2000/svg", dc = "@attach", Zh = !1;
var ls = Array.isArray, Kh = Array.prototype.indexOf, Aa = Array.from, Ti = Object.keys, Vi = Object.defineProperty, Dn = Object.getOwnPropertyDescriptor, fc = Object.getOwnPropertyDescriptors, pc = Object.prototype, Bh = Array.prototype, us = Object.getPrototypeOf, zl = Object.isExtensible;
function go(e) {
  return typeof e == "function";
}
const tt = () => {
};
function Wh(e) {
  return e();
}
function Us(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function hc() {
  var e, t, n = new Promise((r, o) => {
    e = r, t = o;
  });
  return { promise: n, resolve: e, reject: t };
}
function Et(e, t, n = !1) {
  return e === void 0 ? n ? (
    /** @type {() => V} */
    t()
  ) : (
    /** @type {V} */
    t
  ) : e;
}
function lo(e, t) {
  if (Array.isArray(e))
    return e;
  if (t === void 0 || !(Symbol.iterator in e))
    return Array.from(e);
  const n = [];
  for (const r of e)
    if (n.push(r), n.length === t) break;
  return n;
}
const mt = 2, La = 4, cs = 8, gc = 1 << 24, Kn = 16, Bn = 32, fr = 64, ds = 128, an = 512, Ct = 1024, Dt = 2048, Wn = 4096, Zt = 8192, Hn = 16384, fs = 32768, jn = 65536, Ml = 1 << 17, Da = 1 << 18, Hr = 1 << 19, vc = 1 << 20, No = 32768, Js = 1 << 21, Ha = 1 << 22, or = 1 << 23, bn = Symbol("$state"), Ia = Symbol("legacy props"), Xh = Symbol(""), Wr = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), Yh = 1, ps = 3, Xn = 8;
function ja(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function qh() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Fh(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Gh() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Uh(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Jh() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Qh() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function eg(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function tg() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function ng() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function rg() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function og() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function Bo(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function ig() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function sg() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let we = !1;
function zt(e) {
  we = e;
}
let ze;
function et(e) {
  if (e === null)
    throw Bo(), zr;
  return ze = e;
}
function Cn() {
  return et(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Bt(ze)
  );
}
function R(e) {
  if (we) {
    if (/* @__PURE__ */ Bt(ze) !== null)
      throw Bo(), zr;
    ze = e;
  }
}
function ye(e = 1) {
  if (we) {
    for (var t = e, n = ze; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ Bt(n);
    ze = n;
  }
}
function Ai(e = !0) {
  for (var t = 0, n = ze; ; ) {
    if (n.nodeType === Xn) {
      var r = (
        /** @type {Comment} */
        n.data
      );
      if (r === Va) {
        if (t === 0) return n;
        t -= 1;
      } else (r === cc || r === as) && (t += 1);
    }
    var o = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Bt(n)
    );
    e && n.remove(), n = o;
  }
}
function mc(e) {
  if (!e || e.nodeType !== Xn)
    throw Bo(), zr;
  return (
    /** @type {Comment} */
    e.data
  );
}
function yc(e) {
  return e === this.v;
}
function wc(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function bc(e) {
  return !wc(e, this.v);
}
let uo = !1, ag = !1;
function lg() {
  uo = !0;
}
const ug = [];
function Ra(e, t = !1, n = !1) {
  return Ci(e, /* @__PURE__ */ new Map(), "", ug, null, n);
}
function Ci(e, t, n, r, o = null, i = !1) {
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
    if (ls(e)) {
      var a = (
        /** @type {Snapshot<any>} */
        Array(e.length)
      );
      t.set(e, a), o !== null && t.set(o, a);
      for (var l = 0; l < e.length; l += 1) {
        var u = e[l];
        l in e && (a[l] = Ci(u, t, n, r, null, i));
      }
      return a;
    }
    if (us(e) === pc) {
      a = {}, t.set(e, a), o !== null && t.set(o, a);
      for (var d in e)
        a[d] = Ci(
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
      return Ci(
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
let Fe = null;
function Jr(e) {
  Fe = e;
}
function ln(e) {
  return (
    /** @type {T} */
    Za().get(e)
  );
}
function Mr(e, t) {
  return Za().set(e, t), t;
}
function cg(e) {
  return Za().has(e);
}
function le(e, t = !1, n) {
  Fe = {
    p: Fe,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    l: uo && !t ? { s: null, u: null, $: [] } : null
  };
}
function ue(e) {
  var t = (
    /** @type {ComponentContext} */
    Fe
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      Ic(r);
  }
  return e !== void 0 && (t.x = e), t.i = !0, Fe = t.p, e ?? /** @type {T} */
  {};
}
function Wo() {
  return !uo || Fe !== null && Fe.l === null;
}
function Za(e) {
  return Fe === null && ja(), Fe.c ??= new Map(dg(Fe) || void 0);
}
function dg(e) {
  let t = e.p;
  for (; t !== null; ) {
    const n = t.c;
    if (n !== null)
      return n;
    t = t.p;
  }
  return null;
}
let xr = [];
function xc() {
  var e = xr;
  xr = [], Us(e);
}
function pr(e) {
  if (xr.length === 0 && !$o) {
    var t = xr;
    queueMicrotask(() => {
      t === xr && xc();
    });
  }
  xr.push(e);
}
function fg() {
  for (; xr.length > 0; )
    xc();
}
function kc(e) {
  var t = Oe;
  if (t === null)
    return Le.f |= or, e;
  if ((t.f & fs) === 0) {
    if ((t.f & ds) === 0)
      throw e;
    t.b.error(e);
  } else
    Qr(e, t);
}
function Qr(e, t) {
  for (; t !== null; ) {
    if ((t.f & ds) !== 0)
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
const ui = /* @__PURE__ */ new Set();
let Ze = null, $i = null, Ft = null, qt = [], hs = null, Qs = !1, $o = !1;
class on {
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
  #t = /* @__PURE__ */ new Set();
  /**
   * If a fork is discarded, we need to destroy any effects that are no longer needed
   * @type {Set<(batch: Batch) => void>}
   */
  #e = /* @__PURE__ */ new Set();
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
  #i = null;
  /**
   * Deferred effects (which run after async work has completed) that are DIRTY
   * @type {Effect[]}
   */
  #o = [];
  /**
   * Deferred effects that are MAYBE_DIRTY
   * @type {Effect[]}
   */
  #s = [];
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
    qt = [], $i = null, this.apply();
    var n = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: [],
      block_effects: []
    };
    for (const r of t)
      this.#a(r, n);
    this.is_fork || this.#c(), this.is_deferred() ? (this.#l(n.effects), this.#l(n.render_effects), this.#l(n.block_effects)) : ($i = this, Ze = null, Pl(n.render_effects), Pl(n.effects), $i = null, this.#i?.resolve()), Ft = null;
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   * @param {EffectTarget} target
   */
  #a(t, n) {
    t.f ^= Ct;
    for (var r = t.first; r !== null; ) {
      var o = r.f, i = (o & (Bn | fr)) !== 0, s = i && (o & Ct) !== 0, a = s || (o & Zt) !== 0 || this.skipped_effects.has(r);
      if ((r.f & ds) !== 0 && r.b?.is_pending() && (n = {
        parent: n,
        effect: r,
        effects: [],
        render_effects: [],
        block_effects: []
      }), !a && r.fn !== null) {
        i ? r.f ^= Ct : (o & La) !== 0 ? n.effects.push(r) : Yo(r) && ((r.f & Kn) !== 0 && n.block_effects.push(r), Po(r));
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
  #l(t) {
    for (const n of t)
      ((n.f & Dt) !== 0 ? this.#o : this.#s).push(n), this.#u(n.deps), _t(n, Ct);
  }
  /**
   * @param {Value[] | null} deps
   */
  #u(t) {
    if (t !== null)
      for (const n of t)
        (n.f & mt) === 0 || (n.f & No) === 0 || (n.f ^= No, this.#u(
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
    this.previous.has(t) || this.previous.set(t, n), (t.f & or) === 0 && (this.current.set(t, t.v), Ft?.set(t, t.v));
  }
  activate() {
    Ze = this, this.apply();
  }
  deactivate() {
    Ze === this && (Ze = null, Ft = null);
  }
  flush() {
    if (this.activate(), qt.length > 0) {
      if (Cc(), Ze !== null && Ze !== this)
        return;
    } else this.#n === 0 && this.process([]);
    this.deactivate();
  }
  discard() {
    for (const t of this.#e) t(this);
    this.#e.clear();
  }
  #c() {
    if (this.#r === 0) {
      for (const t of this.#t) t();
      this.#t.clear();
    }
    this.#n === 0 && this.#d();
  }
  #d() {
    if (ui.size > 1) {
      this.previous.clear();
      var t = Ft, n = !0, r = {
        parent: null,
        effect: null,
        effects: [],
        render_effects: [],
        block_effects: []
      };
      for (const i of ui) {
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
          var o = qt;
          qt = [];
          const l = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map();
          for (const d of s)
            $c(d, a, l, u);
          if (qt.length > 0) {
            Ze = i, i.apply();
            for (const d of qt)
              i.#a(d, r);
            i.deactivate();
          }
          qt = o;
        }
      }
      Ze = null, Ft = t;
    }
    this.committed = !0, ui.delete(this);
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
    for (const t of this.#o)
      _t(t, Dt), Pr(t);
    for (const t of this.#s)
      _t(t, Wn), Pr(t);
    this.#o = [], this.#s = [], this.flush();
  }
  /** @param {() => void} fn */
  oncommit(t) {
    this.#t.add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    this.#e.add(t);
  }
  settled() {
    return (this.#i ??= hc()).promise;
  }
  static ensure() {
    if (Ze === null) {
      const t = Ze = new on();
      ui.add(Ze), $o || on.enqueue(() => {
        Ze === t && t.flush();
      });
    }
    return Ze;
  }
  /** @param {() => void} task */
  static enqueue(t) {
    pr(t);
  }
  apply() {
  }
}
function v(e) {
  var t = $o;
  $o = !0;
  try {
    for (var n; ; ) {
      if (fg(), qt.length === 0 && (Ze?.flush(), qt.length === 0))
        return hs = null, /** @type {T} */
        n;
      Cc();
    }
  } finally {
    $o = t;
  }
}
function Cc() {
  var e = sr;
  Qs = !0;
  try {
    var t = 0;
    for (Di(!0); qt.length > 0; ) {
      var n = on.ensure();
      if (t++ > 1e3) {
        var r, o;
        pg();
      }
      n.process(qt), ir.clear();
    }
  } finally {
    Qs = !1, Di(e), hs = null;
  }
}
function pg() {
  try {
    Jh();
  } catch (e) {
    Qr(e, hs);
  }
}
let Pn = null;
function Pl(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if ((r.f & (Hn | Zt)) === 0 && Yo(r) && (Pn = /* @__PURE__ */ new Set(), Po(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? Bc(r) : r.fn = null), Pn?.size > 0)) {
        ir.clear();
        for (const o of Pn) {
          if ((o.f & (Hn | Zt)) !== 0) continue;
          const i = [o];
          let s = o.parent;
          for (; s !== null; )
            Pn.has(s) && (Pn.delete(s), i.push(s)), s = s.parent;
          for (let a = i.length - 1; a >= 0; a--) {
            const l = i[a];
            (l.f & (Hn | Zt)) === 0 && Po(l);
          }
        }
        Pn.clear();
      }
    }
    Pn = null;
  }
}
function $c(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const o of e.reactions) {
      const i = o.f;
      (i & mt) !== 0 ? $c(
        /** @type {Derived} */
        o,
        t,
        n,
        r
      ) : (i & (Ha | Kn)) !== 0 && (i & Dt) === 0 && _c(o, t, r) && (_t(o, Dt), Pr(
        /** @type {Effect} */
        o
      ));
    }
}
function _c(e, t, n) {
  const r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null)
    for (const o of e.deps) {
      if (t.includes(o))
        return !0;
      if ((o.f & mt) !== 0 && _c(
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
function Pr(e) {
  for (var t = hs = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (Qs && t === Oe && (n & Kn) !== 0 && (n & Da) === 0)
      return;
    if ((n & (fr | Bn)) !== 0) {
      if ((n & Ct) === 0) return;
      t.f ^= Ct;
    }
  }
  qt.push(t);
}
function co(e) {
  let t = 0, n = lr(0), r;
  return () => {
    zo() && (c(n), Ir(() => (t === 0 && (r = Qe(() => e(() => _o(n)))), t += 1, () => {
      pr(() => {
        t -= 1, t === 0 && (r?.(), r = void 0, _o(n));
      });
    })));
  };
}
var hg = jn | Hr | ds;
function gg(e, t, n) {
  new vg(e, t, n);
}
class vg {
  /** @type {Boundary | null} */
  parent;
  #t = !1;
  /** @type {TemplateNode} */
  #e;
  /** @type {TemplateNode | null} */
  #n = we ? ze : null;
  /** @type {BoundaryProps} */
  #r;
  /** @type {((anchor: Node) => void)} */
  #i;
  /** @type {Effect} */
  #o;
  /** @type {Effect | null} */
  #s = null;
  /** @type {Effect | null} */
  #a = null;
  /** @type {Effect | null} */
  #l = null;
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
  #w = co(() => (this.#p = lr(this.#d), () => {
    this.#p = null;
  }));
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(t, n, r) {
    this.#e = t, this.#r = n, this.#i = r, this.parent = /** @type {Effect} */
    Oe.b, this.#t = !!this.#r.pending, this.#o = jr(() => {
      if (Oe.b = this, we) {
        const i = this.#n;
        Cn(), /** @type {Comment} */
        i.nodeType === Xn && /** @type {Comment} */
        i.data === as ? this.#x() : this.#b();
      } else {
        var o = this.#m();
        try {
          this.#s = Rt(() => r(o));
        } catch (i) {
          this.error(i);
        }
        this.#f > 0 ? this.#v() : this.#t = !1;
      }
      return () => {
        this.#c?.remove();
      };
    }, hg), we && (this.#e = ze);
  }
  #b() {
    try {
      this.#s = Rt(() => this.#i(this.#e));
    } catch (t) {
      this.error(t);
    }
    this.#t = !1;
  }
  #x() {
    const t = this.#r.pending;
    t && (this.#a = Rt(() => t(this.#e)), on.enqueue(() => {
      var n = this.#m();
      this.#s = this.#g(() => (on.ensure(), Rt(() => this.#i(n)))), this.#f > 0 ? this.#v() : (Yr(
        /** @type {Effect} */
        this.#a,
        () => {
          this.#a = null;
        }
      ), this.#t = !1);
    }));
  }
  #m() {
    var t = this.#e;
    return this.#t && (this.#c = Pt(), this.#e.before(this.#c), t = this.#c), t;
  }
  /**
   * Returns `true` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_pending() {
    return this.#t || !!this.parent && this.parent.is_pending();
  }
  has_pending_snippet() {
    return !!this.#r.pending;
  }
  /**
   * @param {() => Effect | null} fn
   */
  #g(t) {
    var n = Oe, r = Le, o = Fe;
    Ut(this.#o), Vt(this.#o), Jr(this.#o.ctx);
    try {
      return t();
    } catch (i) {
      return kc(i), null;
    } finally {
      Ut(n), Vt(r), Jr(o);
    }
  }
  #v() {
    const t = (
      /** @type {(anchor: Node) => void} */
      this.#r.pending
    );
    this.#s !== null && (this.#u = document.createDocumentFragment(), this.#u.append(
      /** @type {TemplateNode} */
      this.#c
    ), Yc(this.#s, this.#u)), this.#a === null && (this.#a = Rt(() => t(this.#e)));
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
    this.#f += t, this.#f === 0 && (this.#t = !1, this.#a && Yr(this.#a, () => {
      this.#a = null;
    }), this.#u && (this.#e.before(this.#u), this.#u = null));
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(t) {
    this.#y(t), this.#d += t, this.#p && eo(this.#p, this.#d);
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
    this.#s && (dt(this.#s), this.#s = null), this.#a && (dt(this.#a), this.#a = null), this.#l && (dt(this.#l), this.#l = null), we && (et(
      /** @type {TemplateNode} */
      this.#n
    ), ye(), et(Ai()));
    var o = !1, i = !1;
    const s = () => {
      if (o) {
        sg();
        return;
      }
      o = !0, i && og(), on.ensure(), this.#d = 0, this.#l !== null && Yr(this.#l, () => {
        this.#l = null;
      }), this.#t = this.has_pending_snippet(), this.#s = this.#g(() => (this.#h = !1, Rt(() => this.#i(this.#e)))), this.#f > 0 ? this.#v() : this.#t = !1;
    };
    var a = Le;
    try {
      Vt(null), i = !0, n?.(t, s), i = !1;
    } catch (l) {
      Qr(l, this.#o && this.#o.parent);
    } finally {
      Vt(a);
    }
    r && pr(() => {
      this.#l = this.#g(() => {
        on.ensure(), this.#h = !0;
        try {
          return Rt(() => {
            r(
              this.#e,
              () => t,
              () => s
            );
          });
        } catch (l) {
          return Qr(
            l,
            /** @type {Effect} */
            this.#o.parent
          ), null;
        } finally {
          this.#h = !1;
        }
      });
    });
  }
}
function Or(e, t) {
  return t;
}
function mg(e, t, n) {
  for (var r = [], o = t.length, i = 0; i < o; i++)
    Xa(t[i].e, r, !0);
  Wc(r, () => {
    var s = r.length === 0 && n !== null;
    if (s) {
      var a = (
        /** @type {Element} */
        n
      ), l = (
        /** @type {Element} */
        a.parentNode
      );
      Wa(l), l.append(a), e.items.clear(), tn(e, t[0].prev, t[o - 1].next);
    }
    for (var u = 0; u < o; u++) {
      var d = t[u];
      s || (e.items.delete(d.k), tn(e, d.prev, d.next)), dt(d.e, !s);
    }
    e.first === t[0] && (e.first = t[0].prev);
  });
}
function yt(e, t, n, r, o, i = null) {
  var s = e, a = /* @__PURE__ */ new Map(), l = null, u = (t & ac) !== 0, d = (t & ic) !== 0, f = (t & sc) !== 0;
  if (u) {
    var p = (
      /** @type {Element} */
      e
    );
    s = we ? et(
      /** @type {Comment | Text} */
      /* @__PURE__ */ it(p)
    ) : p.appendChild(Pt());
  }
  we && Cn();
  var h = null, g = /* @__PURE__ */ Ka(() => {
    var k = n();
    return ls(k) ? k : k == null ? [] : Aa(k);
  }), w, y = !0;
  function b() {
    yg(_, w, s, t, r), h !== null && (w.length === 0 ? (h.fragment ? (s.before(h.fragment), h.fragment = null) : Ya(h.effect), x.first = h.effect) : Yr(h.effect, () => {
      h = null;
    }));
  }
  var x = jr(() => {
    w = /** @type {V[]} */
    c(g);
    var k = w.length;
    let $ = !1;
    if (we) {
      var P = mc(s) === as;
      P !== (k === 0) && (s = Ai(), et(s), zt(!1), $ = !0);
    }
    for (var A = /* @__PURE__ */ new Set(), L = (
      /** @type {Batch} */
      Ze
    ), H = null, j = Ac(), V = 0; V < k; V += 1) {
      we && ze.nodeType === Xn && /** @type {Comment} */
      ze.data === Va && (s = /** @type {Comment} */
      ze, $ = !0, zt(!1));
      var z = w[V], O = r(z, V), C = y ? null : a.get(O);
      C ? (d && eo(C.v, z), f ? eo(
        /** @type {Value<number>} */
        C.i,
        V
      ) : C.i = V, j && L.skipped_effects.delete(C.e)) : (C = wg(
        y ? s : null,
        H,
        z,
        O,
        V,
        o,
        t,
        n
      ), y && (C.o = !0, H === null ? l = C : H.next = C, H = C), a.set(O, C)), A.add(O);
    }
    if (k === 0 && i && !h)
      if (y)
        h = {
          fragment: null,
          effect: Rt(() => i(s))
        };
      else {
        var S = document.createDocumentFragment(), E = Pt();
        S.append(E), h = {
          fragment: S,
          effect: Rt(() => i(E))
        };
      }
    if (we && k > 0 && et(Ai()), !y)
      if (j) {
        for (const [I, W] of a)
          A.has(I) || L.skipped_effects.add(W.e);
        L.oncommit(b), L.ondiscard(() => {
        });
      } else
        b();
    $ && zt(!0), c(g);
  }), _ = { effect: x, items: a, first: l };
  y = !1, we && (s = ze);
}
function yg(e, t, n, r, o) {
  var i = (r & Th) !== 0, s = t.length, a = e.items, l = e.first, u, d = null, f, p = [], h = [], g, w, y, b;
  if (i)
    for (b = 0; b < s; b += 1)
      g = t[b], w = o(g, b), y = /** @type {EachItem} */
      a.get(w), y.o && (y.a?.measure(), (f ??= /* @__PURE__ */ new Set()).add(y));
  for (b = 0; b < s; b += 1) {
    if (g = t[b], w = o(g, b), y = /** @type {EachItem} */
    a.get(w), e.first ??= y, !y.o) {
      y.o = !0;
      var x = d ? d.next : l;
      tn(e, d, y), tn(e, y, x), Os(y, x, n), d = y, p = [], h = [], l = d.next;
      continue;
    }
    if ((y.e.f & Zt) !== 0 && (Ya(y.e), i && (y.a?.unfix(), (f ??= /* @__PURE__ */ new Set()).delete(y))), y !== l) {
      if (u !== void 0 && u.has(y)) {
        if (p.length < h.length) {
          var _ = h[0], k;
          d = _.prev;
          var $ = p[0], P = p[p.length - 1];
          for (k = 0; k < p.length; k += 1)
            Os(p[k], _, n);
          for (k = 0; k < h.length; k += 1)
            u.delete(h[k]);
          tn(e, $.prev, P.next), tn(e, d, $), tn(e, P, _), l = _, d = P, b -= 1, p = [], h = [];
        } else
          u.delete(y), Os(y, l, n), tn(e, y.prev, y.next), tn(e, y, d === null ? e.first : d.next), tn(e, d, y), d = y;
        continue;
      }
      for (p = [], h = []; l !== null && l.k !== w; )
        (l.e.f & Zt) === 0 && (u ??= /* @__PURE__ */ new Set()).add(l), h.push(l), l = l.next;
      if (l === null)
        continue;
      y = l;
    }
    p.push(y), d = y, l = y.next;
  }
  let A = a.size > s;
  if (l !== null || u !== void 0) {
    for (var L = u === void 0 ? [] : Aa(u); l !== null; )
      (l.e.f & Zt) === 0 && L.push(l), l = l.next;
    var H = L.length;
    if (A = a.size - H > s, H > 0) {
      var j = (r & ac) !== 0 && s === 0 ? n : null;
      if (i) {
        for (b = 0; b < H; b += 1)
          L[b].a?.measure();
        for (b = 0; b < H; b += 1)
          L[b].a?.fix();
      }
      mg(e, L, j);
    }
  }
  if (A)
    for (const V of a.values())
      V.o || (tn(e, d, V), d = V);
  e.effect.last = d && d.e, i && pr(() => {
    if (f !== void 0)
      for (y of f)
        y.a?.apply();
  });
}
function wg(e, t, n, r, o, i, s, a) {
  var l = (s & ic) !== 0, u = (s & Vh) === 0, d = l ? u ? /* @__PURE__ */ Mc(n, !1, !1) : lr(n) : n, f = (s & sc) === 0 ? o : lr(o), p = {
    i: f,
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
    return p.e = Rt(() => i(
      /** @type {Node} */
      e,
      d,
      f,
      a
    )), t !== null && (t.next = p), p;
  } finally {
  }
}
function Os(e, t, n) {
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
      /* @__PURE__ */ Bt(i)
    );
    o.before(i), i = s;
  }
}
function tn(e, t, n) {
  t === null ? (e.first = n, e.effect.first = n && n.e) : (t.e.next && (t.e.next.prev = null), t.next = n, t.e.next = n && n.e), n !== null && (n.e.prev && (n.e.prev.next = null), n.prev = t, n.e.prev = t && t.e);
}
function Sc(e, t, n, r) {
  const o = Wo() ? Xo : Ka;
  if (n.length === 0 && e.length === 0) {
    r(t.map(o));
    return;
  }
  var i = Ze, s = (
    /** @type {Effect} */
    Oe
  ), a = bg();
  function l() {
    Promise.all(n.map((u) => /* @__PURE__ */ xg(u))).then((u) => {
      a();
      try {
        r([...t.map(o), ...u]);
      } catch (d) {
        (s.f & Hn) === 0 && Qr(d, s);
      }
      i?.deactivate(), Li();
    }).catch((u) => {
      Qr(u, s);
    });
  }
  e.length > 0 ? Promise.all(e).then(() => {
    a();
    try {
      return l();
    } finally {
      i?.deactivate(), Li();
    }
  }) : l();
}
function bg() {
  var e = Oe, t = Le, n = Fe, r = Ze;
  return function(o = !0) {
    Ut(e), Vt(t), Jr(n), o && r?.activate();
  };
}
function Li() {
  Ut(null), Vt(null), Jr(null);
}
// @__NO_SIDE_EFFECTS__
function Xo(e) {
  var t = mt | Dt, n = Le !== null && (Le.f & mt) !== 0 ? (
    /** @type {Derived} */
    Le
  ) : null;
  return Oe !== null && (Oe.f |= Hr), {
    ctx: Fe,
    deps: null,
    effects: null,
    equals: yc,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      gt
    ),
    wv: 0,
    parent: n ?? Oe,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function xg(e, t) {
  let n = (
    /** @type {Effect | null} */
    Oe
  );
  n === null && qh();
  var r = (
    /** @type {Boundary} */
    n.b
  ), o = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), i = lr(
    /** @type {V} */
    gt
  ), s = !Le, a = /* @__PURE__ */ new Map();
  return zg(() => {
    var l = hc();
    o = l.promise;
    try {
      Promise.resolve(e()).then(l.resolve, l.reject).then(() => {
        u === Ze && u.committed && u.deactivate(), Li();
      });
    } catch (p) {
      l.reject(p), Li();
    }
    var u = (
      /** @type {Batch} */
      Ze
    );
    if (s) {
      var d = !r.is_pending();
      r.update_pending_count(1), u.increment(d), a.get(u)?.reject(Wr), a.delete(u), a.set(u, l);
    }
    const f = (p, h = void 0) => {
      if (u.activate(), h)
        h !== Wr && (i.f |= or, eo(i, h));
      else {
        (i.f & or) !== 0 && (i.f ^= or), eo(i, p);
        for (const [g, w] of a) {
          if (a.delete(g), g === u) break;
          w.reject(Wr);
        }
      }
      s && (r.update_pending_count(-1), u.decrement(d));
    };
    l.promise.then(f, (p) => f(null, p || "unknown"));
  }), vs(() => {
    for (const l of a.values())
      l.reject(Wr);
  }), new Promise((l) => {
    function u(d) {
      function f() {
        d === o ? l(i) : u(o);
      }
      d.then(f, f);
    }
    u(o);
  });
}
// @__NO_SIDE_EFFECTS__
function N(e) {
  const t = /* @__PURE__ */ Xo(e);
  return qc(t), t;
}
// @__NO_SIDE_EFFECTS__
function Ka(e) {
  const t = /* @__PURE__ */ Xo(e);
  return t.equals = bc, t;
}
function Ec(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      dt(
        /** @type {Effect} */
        t[n]
      );
  }
}
function kg(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & mt) === 0)
      return (t.f & Hn) === 0 ? (
        /** @type {Effect} */
        t
      ) : null;
    t = t.parent;
  }
  return null;
}
function Ba(e) {
  var t, n = Oe;
  Ut(kg(e));
  try {
    e.f &= ~No, Ec(e), t = Jc(e);
  } finally {
    Ut(n);
  }
  return t;
}
function Nc(e) {
  var t = Ba(e);
  if (e.equals(t) || (Ze?.is_fork || (e.v = t), e.wv = Gc()), !Rr)
    if (Ft !== null)
      (zo() || Ze?.is_fork) && Ft.set(e, t);
    else {
      var n = (e.f & an) === 0 ? Wn : Ct;
      _t(e, n);
    }
}
let ea = /* @__PURE__ */ new Set();
const ir = /* @__PURE__ */ new Map();
let zc = !1;
function lr(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: yc,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function Ne(e, t) {
  const n = lr(e);
  return qc(n), n;
}
// @__NO_SIDE_EFFECTS__
function Mc(e, t = !1, n = !0) {
  const r = lr(e);
  return t || (r.equals = bc), uo && n && Fe !== null && Fe.l !== null && (Fe.l.s ??= []).push(r), r;
}
function U(e, t, n = !1) {
  Le !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!wn || (Le.f & Ml) !== 0) && Wo() && (Le.f & (mt | Kn | Ha | Ml)) !== 0 && !In?.includes(e) && rg();
  let r = n ? $t(t) : t;
  return eo(e, r);
}
function eo(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    Rr ? ir.set(e, t) : ir.set(e, n), e.v = t;
    var r = on.ensure();
    r.capture(e, n), (e.f & mt) !== 0 && ((e.f & Dt) !== 0 && Ba(
      /** @type {Derived} */
      e
    ), _t(e, (e.f & an) !== 0 ? Ct : Wn)), e.wv = Gc(), Pc(e, Dt), Wo() && Oe !== null && (Oe.f & Ct) !== 0 && (Oe.f & (Bn | fr)) === 0 && (Yt === null ? Pg([e]) : Yt.push(e)), !r.is_fork && ea.size > 0 && !zc && Cg();
  }
  return t;
}
function Cg() {
  zc = !1;
  var e = sr;
  Di(!0);
  const t = Array.from(ea);
  try {
    for (const n of t)
      (n.f & Ct) !== 0 && _t(n, Wn), Yo(n) && Po(n);
  } finally {
    Di(e);
  }
  ea.clear();
}
function Ol(e, t = 1) {
  var n = c(e), r = t === 1 ? n++ : n--;
  return U(e, n), r;
}
function _o(e) {
  U(e, e.v + 1);
}
function Pc(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = Wo(), o = n.length, i = 0; i < o; i++) {
      var s = n[i], a = s.f;
      if (!(!r && s === Oe)) {
        var l = (a & Dt) === 0;
        if (l && _t(s, t), (a & mt) !== 0) {
          var u = (
            /** @type {Derived} */
            s
          );
          Ft?.delete(u), (a & No) === 0 && (a & an && (s.f |= No), Pc(u, Wn));
        } else l && ((a & Kn) !== 0 && Pn !== null && Pn.add(
          /** @type {Effect} */
          s
        ), Pr(
          /** @type {Effect} */
          s
        ));
      }
    }
}
function $t(e) {
  if (typeof e != "object" || e === null || bn in e)
    return e;
  const t = us(e);
  if (t !== pc && t !== Bh)
    return e;
  var n = /* @__PURE__ */ new Map(), r = ls(e), o = /* @__PURE__ */ Ne(0), i = Sr, s = (a) => {
    if (Sr === i)
      return a();
    var l = Le, u = Sr;
    Vt(null), Ll(i);
    var d = a();
    return Vt(l), Ll(u), d;
  };
  return r && n.set("length", /* @__PURE__ */ Ne(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(a, l, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && tg();
        var d = n.get(l);
        return d === void 0 ? d = s(() => {
          var f = /* @__PURE__ */ Ne(u.value);
          return n.set(l, f), f;
        }) : U(d, u.value, !0), !0;
      },
      deleteProperty(a, l) {
        var u = n.get(l);
        if (u === void 0) {
          if (l in a) {
            const d = s(() => /* @__PURE__ */ Ne(gt));
            n.set(l, d), _o(o);
          }
        } else
          U(u, gt), _o(o);
        return !0;
      },
      get(a, l, u) {
        if (l === bn)
          return e;
        var d = n.get(l), f = l in a;
        if (d === void 0 && (!f || Dn(a, l)?.writable) && (d = s(() => {
          var h = $t(f ? a[l] : gt), g = /* @__PURE__ */ Ne(h);
          return g;
        }), n.set(l, d)), d !== void 0) {
          var p = c(d);
          return p === gt ? void 0 : p;
        }
        return Reflect.get(a, l, u);
      },
      getOwnPropertyDescriptor(a, l) {
        var u = Reflect.getOwnPropertyDescriptor(a, l);
        if (u && "value" in u) {
          var d = n.get(l);
          d && (u.value = c(d));
        } else if (u === void 0) {
          var f = n.get(l), p = f?.v;
          if (f !== void 0 && p !== gt)
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
        if (l === bn)
          return !0;
        var u = n.get(l), d = u !== void 0 && u.v !== gt || Reflect.has(a, l);
        if (u !== void 0 || Oe !== null && (!d || Dn(a, l)?.writable)) {
          u === void 0 && (u = s(() => {
            var p = d ? $t(a[l]) : gt, h = /* @__PURE__ */ Ne(p);
            return h;
          }), n.set(l, u));
          var f = c(u);
          if (f === gt)
            return !1;
        }
        return d;
      },
      set(a, l, u, d) {
        var f = n.get(l), p = l in a;
        if (r && l === "length")
          for (var h = u; h < /** @type {Source<number>} */
          f.v; h += 1) {
            var g = n.get(h + "");
            g !== void 0 ? U(g, gt) : h in a && (g = s(() => /* @__PURE__ */ Ne(gt)), n.set(h + "", g));
          }
        if (f === void 0)
          (!p || Dn(a, l)?.writable) && (f = s(() => /* @__PURE__ */ Ne(void 0)), U(f, $t(u)), n.set(l, f));
        else {
          p = f.v !== gt;
          var w = s(() => $t(u));
          U(f, w);
        }
        var y = Reflect.getOwnPropertyDescriptor(a, l);
        if (y?.set && y.set.call(d, u), !p) {
          if (r && typeof l == "string") {
            var b = (
              /** @type {Source<number>} */
              n.get("length")
            ), x = Number(l);
            Number.isInteger(x) && x >= b.v && U(b, x + 1);
          }
          _o(o);
        }
        return !0;
      },
      ownKeys(a) {
        c(o);
        var l = Reflect.ownKeys(a).filter((f) => {
          var p = n.get(f);
          return p === void 0 || p.v !== gt;
        });
        for (var [u, d] of n)
          d.v !== gt && !(u in a) && l.push(u);
        return l;
      },
      setPrototypeOf() {
        ng();
      }
    }
  );
}
function Tl(e) {
  try {
    if (e !== null && typeof e == "object" && bn in e)
      return e[bn];
  } catch {
  }
  return e;
}
function $g(e, t) {
  return Object.is(Tl(e), Tl(t));
}
var Tt, Oc, Tc, Vc;
function ta() {
  if (Tt === void 0) {
    Tt = window, Oc = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    Tc = Dn(t, "firstChild").get, Vc = Dn(t, "nextSibling").get, zl(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), zl(n) && (n.__t = void 0);
  }
}
function Pt(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function it(e) {
  return Tc.call(e);
}
// @__NO_SIDE_EFFECTS__
function Bt(e) {
  return Vc.call(e);
}
function K(e, t) {
  if (!we)
    return /* @__PURE__ */ it(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ it(ze)
  );
  if (n === null)
    n = ze.appendChild(Pt());
  else if (t && n.nodeType !== ps) {
    var r = Pt();
    return n?.before(r), et(r), r;
  }
  return et(n), n;
}
function te(e, t = !1) {
  if (!we) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ it(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Bt(n) : n;
  }
  if (t && ze?.nodeType !== ps) {
    var r = Pt();
    return ze?.before(r), et(r), r;
  }
  return ze;
}
function D(e, t = 1, n = !1) {
  let r = we ? ze : e;
  for (var o; t--; )
    o = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ Bt(r);
  if (!we)
    return r;
  if (n && r?.nodeType !== ps) {
    var i = Pt();
    return r === null ? o?.after(i) : r.before(i), et(i), i;
  }
  return et(r), /** @type {TemplateNode} */
  r;
}
function Wa(e) {
  e.textContent = "";
}
function Ac() {
  return !1;
}
function _g(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, pr(() => {
      document.activeElement === n && e.focus();
    });
  }
}
function Sg(e) {
  we && /* @__PURE__ */ it(e) !== null && Wa(e);
}
let Vl = !1;
function Lc() {
  Vl || (Vl = !0, document.addEventListener(
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
function gs(e) {
  var t = Le, n = Oe;
  Vt(null), Ut(null);
  try {
    return e();
  } finally {
    Vt(t), Ut(n);
  }
}
function Dc(e, t, n, r = n) {
  e.addEventListener(t, () => gs(n));
  const o = e.__on_r;
  o ? e.__on_r = () => {
    o(), r(!0);
  } : e.__on_r = () => r(!0), Lc();
}
function Hc(e) {
  Oe === null && (Le === null && Uh(), Gh()), Rr && Fh();
}
function Eg(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Jt(e, t, n) {
  var r = Oe;
  r !== null && (r.f & Zt) !== 0 && (e |= Zt);
  var o = {
    ctx: Fe,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Dt | an,
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
      Po(o), o.f |= fs;
    } catch (a) {
      throw dt(o), a;
    }
  else t !== null && Pr(o);
  var i = o;
  if (n && i.deps === null && i.teardown === null && i.nodes_start === null && i.first === i.last && // either `null`, or a singular child
  (i.f & Hr) === 0 && (i = i.first, (e & Kn) !== 0 && (e & jn) !== 0 && i !== null && (i.f |= jn)), i !== null && (i.parent = r, r !== null && Eg(i, r), Le !== null && (Le.f & mt) !== 0 && (e & fr) === 0)) {
    var s = (
      /** @type {Derived} */
      Le
    );
    (s.effects ??= []).push(i);
  }
  return o;
}
function zo() {
  return Le !== null && !wn;
}
function vs(e) {
  const t = Jt(cs, null, !1);
  return _t(t, Ct), t.teardown = e, t;
}
function Ue(e) {
  Hc();
  var t = (
    /** @type {Effect} */
    Oe.f
  ), n = !Le && (t & Bn) !== 0 && (t & fs) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      Fe
    );
    (r.e ??= []).push(e);
  } else
    return Ic(e);
}
function Ic(e) {
  return Jt(La | vc, e, !1);
}
function jt(e) {
  return Hc(), Jt(cs | vc, e, !0);
}
function fo(e) {
  on.ensure();
  const t = Jt(fr | Hr, e, !0);
  return () => {
    dt(t);
  };
}
function Ng(e) {
  on.ensure();
  const t = Jt(fr | Hr, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Yr(t, () => {
      dt(t), r(void 0);
    }) : (dt(t), r(void 0));
  });
}
function po(e) {
  return Jt(La, e, !1);
}
function zg(e) {
  return Jt(Ha | Hr, e, !0);
}
function Ir(e, t = 0) {
  return Jt(cs | t, e, !0);
}
function Se(e, t = [], n = [], r = []) {
  Sc(r, t, n, (o) => {
    Jt(cs, () => e(...o.map(c)), !0);
  });
}
function jr(e, t = 0) {
  var n = Jt(Kn | t, e, !0);
  return n;
}
function jc(e, t = 0) {
  var n = Jt(gc | t, e, !0);
  return n;
}
function Rt(e) {
  return Jt(Bn | Hr, e, !0);
}
function Rc(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Rr, r = Le;
    Al(!0), Vt(null);
    try {
      t.call(null);
    } finally {
      Al(n), Vt(r);
    }
  }
}
function Zc(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const o = n.ac;
    o !== null && gs(() => {
      o.abort(Wr);
    });
    var r = n.next;
    (n.f & fr) !== 0 ? n.parent = null : dt(n, t), n = r;
  }
}
function Mg(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & Bn) === 0 && dt(t), t = n;
  }
}
function dt(e, t = !0) {
  var n = !1;
  (t || (e.f & Da) !== 0) && e.nodes_start !== null && e.nodes_end !== null && (Kc(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), n = !0), Zc(e, t && !n), Hi(e, 0), _t(e, Hn);
  var r = e.transitions;
  if (r !== null)
    for (const i of r)
      i.stop();
  Rc(e);
  var o = e.parent;
  o !== null && o.first !== null && Bc(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = e.ac = null;
}
function Kc(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Bt(e)
    );
    e.remove(), e = n;
  }
}
function Bc(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function Yr(e, t, n = !0) {
  var r = [];
  Xa(e, r, !0), Wc(r, () => {
    n && dt(e), t && t();
  });
}
function Wc(e, t) {
  var n = e.length;
  if (n > 0) {
    var r = () => --n || t();
    for (var o of e)
      o.out(r);
  } else
    t();
}
function Xa(e, t, n) {
  if ((e.f & Zt) === 0) {
    if (e.f ^= Zt, e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || n) && t.push(s);
    for (var r = e.first; r !== null; ) {
      var o = r.next, i = (r.f & jn) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (r.f & Bn) !== 0 && (e.f & Kn) !== 0;
      Xa(r, t, i ? n : !1), r = o;
    }
  }
}
function Ya(e) {
  Xc(e, !0);
}
function Xc(e, t) {
  if ((e.f & Zt) !== 0) {
    e.f ^= Zt, (e.f & Ct) === 0 && (_t(e, Dt), Pr(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, o = (n.f & jn) !== 0 || (n.f & Bn) !== 0;
      Xc(n, o ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || t) && i.in();
  }
}
function Yc(e, t) {
  for (var n = e.nodes_start, r = e.nodes_end; n !== null; ) {
    var o = n === r ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Bt(n)
    );
    t.append(n), n = o;
  }
}
let sr = !1;
function Di(e) {
  sr = e;
}
let Rr = !1;
function Al(e) {
  Rr = e;
}
let Le = null, wn = !1;
function Vt(e) {
  Le = e;
}
let Oe = null;
function Ut(e) {
  Oe = e;
}
let In = null;
function qc(e) {
  Le !== null && (In === null ? In = [e] : In.push(e));
}
let Nt = null, It = 0, Yt = null;
function Pg(e) {
  Yt = e;
}
let Fc = 1, Mo = 0, Sr = Mo;
function Ll(e) {
  Sr = e;
}
function Gc() {
  return ++Fc;
}
function Yo(e) {
  var t = e.f;
  if ((t & Dt) !== 0)
    return !0;
  if (t & mt && (e.f &= -32769), (t & Wn) !== 0) {
    var n = e.deps;
    if (n !== null)
      for (var r = n.length, o = 0; o < r; o++) {
        var i = n[o];
        if (Yo(
          /** @type {Derived} */
          i
        ) && Nc(
          /** @type {Derived} */
          i
        ), i.wv > e.wv)
          return !0;
      }
    (t & an) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    Ft === null && _t(e, Ct);
  }
  return !1;
}
function Uc(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !In?.includes(e))
    for (var o = 0; o < r.length; o++) {
      var i = r[o];
      (i.f & mt) !== 0 ? Uc(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? _t(i, Dt) : (i.f & Ct) !== 0 && _t(i, Wn), Pr(
        /** @type {Effect} */
        i
      ));
    }
}
function Jc(e) {
  var t = Nt, n = It, r = Yt, o = Le, i = In, s = Fe, a = wn, l = Sr, u = e.f;
  Nt = /** @type {null | Value[]} */
  null, It = 0, Yt = null, Le = (u & (Bn | fr)) === 0 ? e : null, In = null, Jr(e.ctx), wn = !1, Sr = ++Mo, e.ac !== null && (gs(() => {
    e.ac.abort(Wr);
  }), e.ac = null);
  try {
    e.f |= Js;
    var d = (
      /** @type {Function} */
      e.fn
    ), f = d(), p = e.deps;
    if (Nt !== null) {
      var h;
      if (Hi(e, It), p !== null && It > 0)
        for (p.length = It + Nt.length, h = 0; h < Nt.length; h++)
          p[It + h] = Nt[h];
      else
        e.deps = p = Nt;
      if (sr && zo() && (e.f & an) !== 0)
        for (h = It; h < p.length; h++)
          (p[h].reactions ??= []).push(e);
    } else p !== null && It < p.length && (Hi(e, It), p.length = It);
    if (Wo() && Yt !== null && !wn && p !== null && (e.f & (mt | Wn | Dt)) === 0)
      for (h = 0; h < /** @type {Source[]} */
      Yt.length; h++)
        Uc(
          Yt[h],
          /** @type {Effect} */
          e
        );
    return o !== null && o !== e && (Mo++, Yt !== null && (r === null ? r = Yt : r.push(.../** @type {Source[]} */
    Yt))), (e.f & or) !== 0 && (e.f ^= or), f;
  } catch (g) {
    return kc(g);
  } finally {
    e.f ^= Js, Nt = t, It = n, Yt = r, Le = o, In = i, Jr(s), wn = a, Sr = l;
  }
}
function Og(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Kh.call(n, e);
    if (r !== -1) {
      var o = n.length - 1;
      o === 0 ? n = t.reactions = null : (n[r] = n[o], n.pop());
    }
  }
  n === null && (t.f & mt) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Nt === null || !Nt.includes(t)) && (_t(t, Wn), (t.f & an) !== 0 && (t.f ^= an, t.f &= -32769), Ec(
    /** @type {Derived} **/
    t
  ), Hi(
    /** @type {Derived} **/
    t,
    0
  ));
}
function Hi(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      Og(e, n[r]);
}
function Po(e) {
  var t = e.f;
  if ((t & Hn) === 0) {
    _t(e, Ct);
    var n = Oe, r = sr;
    Oe = e, sr = !0;
    try {
      (t & (Kn | gc)) !== 0 ? Mg(e) : Zc(e), Rc(e);
      var o = Jc(e);
      e.teardown = typeof o == "function" ? o : null, e.wv = Fc;
      var i;
      Zh && ag && (e.f & Dt) !== 0 && e.deps;
    } finally {
      sr = r, Oe = n;
    }
  }
}
async function Tg() {
  await Promise.resolve(), v();
}
function c(e) {
  var t = e.f, n = (t & mt) !== 0;
  if (Le !== null && !wn) {
    var r = Oe !== null && (Oe.f & Hn) !== 0;
    if (!r && !In?.includes(e)) {
      var o = Le.deps;
      if ((Le.f & Js) !== 0)
        e.rv < Mo && (e.rv = Mo, Nt === null && o !== null && o[It] === e ? It++ : Nt === null ? Nt = [e] : Nt.includes(e) || Nt.push(e));
      else {
        (Le.deps ??= []).push(e);
        var i = e.reactions;
        i === null ? e.reactions = [Le] : i.includes(Le) || i.push(Le);
      }
    }
  }
  if (Rr) {
    if (ir.has(e))
      return ir.get(e);
    if (n) {
      var s = (
        /** @type {Derived} */
        e
      ), a = s.v;
      return ((s.f & Ct) === 0 && s.reactions !== null || ed(s)) && (a = Ba(s)), ir.set(s, a), a;
    }
  } else n && (!Ft?.has(e) || Ze?.is_fork && !zo()) && (s = /** @type {Derived} */
  e, Yo(s) && Nc(s), sr && zo() && (s.f & an) === 0 && Qc(s));
  if (Ft?.has(e))
    return Ft.get(e);
  if ((e.f & or) !== 0)
    throw e.v;
  return e.v;
}
function Qc(e) {
  if (e.deps !== null) {
    e.f ^= an;
    for (const t of e.deps)
      (t.reactions ??= []).push(e), (t.f & mt) !== 0 && (t.f & an) === 0 && Qc(
        /** @type {Derived} */
        t
      );
  }
}
function ed(e) {
  if (e.v === gt) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (ir.has(t) || (t.f & mt) !== 0 && ed(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function Qe(e) {
  var t = wn;
  try {
    return wn = !0, e();
  } finally {
    wn = t;
  }
}
const Vg = -7169;
function _t(e, t) {
  e.f = e.f & Vg | t;
}
function Ag(e, t) {
  var n = {};
  for (var r in e)
    t.includes(r) || (n[r] = e[r]);
  for (var o of Object.getOwnPropertySymbols(e))
    Object.propertyIsEnumerable.call(e, o) && !t.includes(o) && (n[o] = e[o]);
  return n;
}
function qa(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (bn in e)
      na(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && bn in n && na(n);
      }
  }
}
function na(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e)
      try {
        na(e[r], t);
      } catch {
      }
    const n = us(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = fc(n);
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
const td = /* @__PURE__ */ new Set(), ra = /* @__PURE__ */ new Set();
function Fa(e, t, n, r = {}) {
  function o(i) {
    if (r.capture || wo.call(t, i), !i.cancelBubble)
      return gs(() => n?.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? pr(() => {
    t.addEventListener(e, o, r);
  }) : t.addEventListener(e, o, r), o;
}
function $n(e, t, n, r = {}) {
  var o = Fa(t, e, n, r);
  return () => {
    e.removeEventListener(t, o, r);
  };
}
function Ii(e, t, n, r, o) {
  var i = { capture: r, passive: o }, s = Fa(e, t, n, i);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && vs(() => {
    t.removeEventListener(e, s, i);
  });
}
function hr(e) {
  for (var t = 0; t < e.length; t++)
    td.add(e[t]);
  for (var n of ra)
    n(e);
}
let Dl = null;
function wo(e) {
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, o = e.composedPath?.() || [], i = (
    /** @type {null | Element} */
    o[0] || e.target
  );
  Dl = e;
  var s = 0, a = Dl === e && e.__root;
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
    Vi(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    var d = Le, f = Oe;
    Vt(null), Ut(null);
    try {
      for (var p, h = []; i !== null; ) {
        var g = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var w = i["__" + r];
          w != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i) && w.call(i, e);
        } catch (y) {
          p ? h.push(y) : p = y;
        }
        if (e.cancelBubble || g === t || g === null)
          break;
        i = g;
      }
      if (p) {
        for (let y of h)
          queueMicrotask(() => {
            throw y;
          });
        throw p;
      }
    } finally {
      e.__root = t, delete e.currentTarget, Vt(d), Ut(f);
    }
  }
}
function Ga(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
function Lt(e, t) {
  var n = (
    /** @type {Effect} */
    Oe
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function ee(e, t) {
  var n = (t & uc) !== 0, r = (t & Ih) !== 0, o, i = !e.startsWith("<!>");
  return () => {
    if (we)
      return Lt(ze, null), ze;
    o === void 0 && (o = Ga(i ? e : "<!>" + e), n || (o = /** @type {Node} */
    /* @__PURE__ */ it(o)));
    var s = (
      /** @type {TemplateNode} */
      r || Oc ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ it(s)
      ), l = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      Lt(a, l);
    } else
      Lt(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function Lg(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), o = (t & uc) !== 0, i = `<${n}>${r ? e : "<!>" + e}</${n}>`, s;
  return () => {
    if (we)
      return Lt(ze, null), ze;
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        Ga(i)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ it(a)
      );
      if (o)
        for (s = document.createDocumentFragment(); /* @__PURE__ */ it(l); )
          s.appendChild(
            /** @type {Node} */
            /* @__PURE__ */ it(l)
          );
      else
        s = /** @type {Element} */
        /* @__PURE__ */ it(l);
    }
    var u = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    if (o) {
      var d = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ it(u)
      ), f = (
        /** @type {TemplateNode} */
        u.lastChild
      );
      Lt(d, f);
    } else
      Lt(u, u);
    return u;
  };
}
// @__NO_SIDE_EFFECTS__
function me(e, t) {
  return /* @__PURE__ */ Lg(e, t, "svg");
}
function Ee(e = "") {
  if (!we) {
    var t = Pt(e + "");
    return Lt(t, t), t;
  }
  var n = ze;
  return n.nodeType !== ps && (n.before(n = Pt()), et(n)), Lt(n, n), n;
}
function Ce() {
  if (we)
    return Lt(ze, null), ze;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = Pt();
  return e.append(t, n), Lt(t, n), e;
}
function T(e, t) {
  if (we) {
    var n = (
      /** @type {Effect} */
      Oe
    );
    ((n.f & fs) === 0 || n.nodes_end === null) && (n.nodes_end = ze), Cn();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function Dg() {
  if (we && ze && ze.nodeType === Xn && ze.textContent?.startsWith("$")) {
    const e = ze.textContent.substring(1);
    return Cn(), e;
  }
  return (window.__svelte ??= {}).uid ??= 1, `c${window.__svelte.uid++}`;
}
function Hg(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const Ig = [
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
function jg(e) {
  return Ig.includes(e);
}
const Rg = {
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
function Zg(e) {
  return e = e.toLowerCase(), Rg[e] ?? e;
}
const Kg = ["touchstart", "touchmove"];
function Bg(e) {
  return Kg.includes(e);
}
const Wg = (
  /** @type {const} */
  ["textarea", "script", "style", "title"]
);
function Xg(e) {
  return Wg.includes(
    /** @type {typeof RAW_TEXT_ELEMENTS[number]} */
    e
  );
}
function qe(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = n + "");
}
function nd(e, t) {
  return rd(e, t);
}
function Yg(e, t) {
  ta(), t.intro = t.intro ?? !1;
  const n = t.target, r = we, o = ze;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ it(n)
    ); i && (i.nodeType !== Xn || /** @type {Comment} */
    i.data !== cc); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ Bt(i);
    if (!i)
      throw zr;
    zt(!0), et(
      /** @type {Comment} */
      i
    );
    const s = rd(e, { ...t, anchor: i });
    return zt(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s instanceof Error && s.message.split(`
`).some((a) => a.startsWith("https://svelte.dev/e/")))
      throw s;
    return s !== zr && console.warn("Failed to hydrate: ", s), t.recover === !1 && Qh(), ta(), Wa(n), zt(!1), nd(e, t);
  } finally {
    zt(r), et(o);
  }
}
const Kr = /* @__PURE__ */ new Map();
function rd(e, { target: t, anchor: n, props: r = {}, events: o, context: i, intro: s = !0 }) {
  ta();
  var a = /* @__PURE__ */ new Set(), l = (f) => {
    for (var p = 0; p < f.length; p++) {
      var h = f[p];
      if (!a.has(h)) {
        a.add(h);
        var g = Bg(h);
        t.addEventListener(h, wo, { passive: g });
        var w = Kr.get(h);
        w === void 0 ? (document.addEventListener(h, wo, { passive: g }), Kr.set(h, 1)) : Kr.set(h, w + 1);
      }
    }
  };
  l(Aa(td)), ra.add(l);
  var u = void 0, d = Ng(() => {
    var f = n ?? t.appendChild(Pt());
    return gg(
      /** @type {TemplateNode} */
      f,
      {
        pending: () => {
        }
      },
      (p) => {
        if (i) {
          le({});
          var h = (
            /** @type {ComponentContext} */
            Fe
          );
          h.c = i;
        }
        if (o && (r.$$events = o), we && Lt(
          /** @type {TemplateNode} */
          p,
          null
        ), u = e(p, r) || {}, we && (Oe.nodes_end = ze, ze === null || ze.nodeType !== Xn || /** @type {Comment} */
        ze.data !== Va))
          throw Bo(), zr;
        i && ue();
      }
    ), () => {
      for (var p of a) {
        t.removeEventListener(p, wo);
        var h = (
          /** @type {number} */
          Kr.get(p)
        );
        --h === 0 ? (document.removeEventListener(p, wo), Kr.delete(p)) : Kr.set(p, h);
      }
      ra.delete(l), f !== n && f.parentNode?.removeChild(f);
    };
  });
  return oa.set(u, d), u;
}
let oa = /* @__PURE__ */ new WeakMap();
function qg(e, t) {
  const n = oa.get(e);
  return n ? (oa.delete(e), n(t)) : Promise.resolve();
}
class ms {
  /** @type {TemplateNode} */
  anchor;
  /** @type {Map<Batch, Key>} */
  #t = /* @__PURE__ */ new Map();
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
  #e = /* @__PURE__ */ new Map();
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
  #i = !0;
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, n = !0) {
    this.anchor = t, this.#i = n;
  }
  #o = () => {
    var t = (
      /** @type {Batch} */
      Ze
    );
    if (this.#t.has(t)) {
      var n = (
        /** @type {Key} */
        this.#t.get(t)
      ), r = this.#e.get(n);
      if (r)
        Ya(r), this.#r.delete(n);
      else {
        var o = this.#n.get(n);
        o && (this.#e.set(n, o.effect), this.#n.delete(n), o.fragment.lastChild.remove(), this.anchor.before(o.fragment), r = o.effect);
      }
      for (const [i, s] of this.#t) {
        if (this.#t.delete(i), i === t)
          break;
        const a = this.#n.get(s);
        a && (dt(a.effect), this.#n.delete(s));
      }
      for (const [i, s] of this.#e) {
        if (i === n || this.#r.has(i)) continue;
        const a = () => {
          if (Array.from(this.#t.values()).includes(i)) {
            var l = document.createDocumentFragment();
            Yc(s, l), l.append(Pt()), this.#n.set(i, { effect: s, fragment: l });
          } else
            dt(s);
          this.#r.delete(i), this.#e.delete(i);
        };
        this.#i || !r ? (this.#r.add(i), Yr(s, a, !1)) : a();
      }
    }
  };
  /**
   * @param {Batch} batch
   */
  #s = (t) => {
    this.#t.delete(t);
    const n = Array.from(this.#t.values());
    for (const [r, o] of this.#n)
      n.includes(r) || (dt(o.effect), this.#n.delete(r));
  };
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, n) {
    var r = (
      /** @type {Batch} */
      Ze
    ), o = Ac();
    n && !this.#e.has(t) && !this.#n.has(t) && this.#e.set(
      t,
      Rt(() => n(this.anchor))
    ), this.#t.set(r, t), o || (we && (this.anchor = ze), this.#o());
  }
}
function Ye(e, t, ...n) {
  var r = new ms(e);
  jr(() => {
    const o = t() ?? null;
    r.ensure(o, o && ((i) => o(i, ...n)));
  }, jn);
}
function En(e) {
  Fe === null && ja(), uo && Fe.l !== null ? Fg(Fe).m.push(e) : Ue(() => {
    const t = Qe(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function qo(e) {
  Fe === null && ja(), En(() => () => Qe(e));
}
function Fg(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ??= { a: [], b: [], m: [] };
}
function Gg() {
  return Symbol(dc);
}
function ie(e, t, n = !1) {
  we && Cn();
  var r = new ms(e), o = n ? jn : 0;
  function i(s, a) {
    if (we) {
      const u = mc(e) === as;
      if (s === u) {
        var l = Ai();
        et(l), r.anchor = l, zt(!1), r.ensure(s, a), zt(!0);
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
function Ug(e, t) {
  we && et(
    /** @type {TemplateNode} */
    /* @__PURE__ */ it(e)
  ), Ir(() => {
    var n = t();
    for (var r in n) {
      var o = n[r];
      o ? e.style.setProperty(r, o) : e.style.removeProperty(r);
    }
  });
}
function ys(e, t, n = !1, r = !1, o = !1) {
  var i = e, s = "";
  Se(() => {
    var a = (
      /** @type {Effect} */
      Oe
    );
    if (s === (s = t() ?? "")) {
      we && Cn();
      return;
    }
    if (a.nodes_start !== null && (Kc(
      a.nodes_start,
      /** @type {TemplateNode} */
      a.nodes_end
    ), a.nodes_start = a.nodes_end = null), s !== "") {
      if (we) {
        ze.data;
        for (var l = Cn(), u = l; l !== null && (l.nodeType !== Xn || /** @type {Comment} */
        l.data !== ""); )
          u = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ Bt(l);
        if (l === null)
          throw Bo(), zr;
        Lt(ze, u), i = et(l);
        return;
      }
      var d = s + "";
      n ? d = `<svg>${d}</svg>` : r && (d = `<math>${d}</math>`);
      var f = Ga(d);
      if ((n || r) && (f = /** @type {Element} */
      /* @__PURE__ */ it(f)), Lt(
        /** @type {TemplateNode} */
        /* @__PURE__ */ it(f),
        /** @type {TemplateNode} */
        f.lastChild
      ), n || r)
        for (; /* @__PURE__ */ it(f); )
          i.before(
            /** @type {Node} */
            /* @__PURE__ */ it(f)
          );
      else
        i.before(f);
    }
  });
}
function Fo(e, t, n) {
  we && Cn();
  var r = new ms(e);
  jr(() => {
    var o = t() ?? null;
    r.ensure(o, o && ((i) => n(i, o)));
  }, jn);
}
function od(e, t, n, r, o, i) {
  let s = we;
  we && Cn();
  var a = null;
  we && ze.nodeType === Yh && (a = /** @type {Element} */
  ze, Cn());
  var l = (
    /** @type {TemplateNode} */
    we ? ze : e
  ), u = new ms(l, !1);
  jr(() => {
    const d = t() || null;
    var f = n || d === "svg" ? Rh : null;
    if (d === null) {
      u.ensure(null, null);
      return;
    }
    return u.ensure(d, (p) => {
      if (d) {
        if (a = we ? (
          /** @type {Element} */
          a
        ) : f ? document.createElementNS(f, d) : document.createElement(d), Lt(a, a), r) {
          we && Xg(d) && a.append(document.createComment(""));
          var h = (
            /** @type {TemplateNode} */
            we ? /* @__PURE__ */ it(a) : a.appendChild(Pt())
          );
          we && (h === null ? zt(!1) : et(h)), r(a, h);
        }
        Oe.nodes_end = a, p.before(a);
      }
      we && et(p);
    }), () => {
    };
  }, jn), vs(() => {
  }), s && (zt(!0), et(l));
}
function Jg(e, t) {
  let n = null, r = we;
  var o;
  if (we) {
    n = ze;
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ it(document.head)
    ); i !== null && (i.nodeType !== Xn || /** @type {Comment} */
    i.data !== e); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ Bt(i);
    if (i === null)
      zt(!1);
    else {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Bt(i)
      );
      i.remove(), et(s);
    }
  }
  we || (o = document.head.appendChild(Pt()));
  try {
    jr(() => t(o), Da);
  } finally {
    r && (zt(!0), et(
      /** @type {TemplateNode} */
      n
    ));
  }
}
function Be(e, t) {
  po(() => {
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
function kt(e, t, n) {
  po(() => {
    var r = Qe(() => t(e, n?.()) || {});
    if (n && r?.update) {
      var o = !1, i = (
        /** @type {any} */
        {}
      );
      Ir(() => {
        var s = n();
        qa(s), o && wc(i, s) && (i = s, r.update(s));
      }), o = !0;
    }
    if (r?.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function Qg(e, t) {
  var n = void 0, r;
  jc(() => {
    n !== (n = t()) && (r && (dt(r), r = null), n && (r = Rt(() => {
      po(() => (
        /** @type {(node: Element) => void} */
        n(e)
      ));
    })));
  });
}
function id(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = id(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function So() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = id(e)) && (r && (r += " "), r += t);
  return r;
}
function Yn(e) {
  return typeof e == "object" ? So(e) : e ?? "";
}
const Hl = [...` 	
\r\f \v\uFEFF`];
function ev(e, t, n) {
  var r = e == null ? "" : "" + e;
  if (t && (r = r ? r + " " + t : t), n) {
    for (var o in n)
      if (n[o])
        r = r ? r + " " + o : o;
      else if (r.length)
        for (var i = o.length, s = 0; (s = r.indexOf(o, s)) >= 0; ) {
          var a = s + i;
          (s === 0 || Hl.includes(r[s - 1])) && (a === r.length || Hl.includes(r[a])) ? r = (s === 0 ? "" : r.substring(0, s)) + r.substring(a + 1) : s = a;
        }
  }
  return r === "" ? null : r;
}
function Il(e, t = !1) {
  var n = t ? " !important;" : ";", r = "";
  for (var o in e) {
    var i = e[o];
    i != null && i !== "" && (r += " " + o + ": " + i + n);
  }
  return r;
}
function Ts(e) {
  return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function tv(e, t) {
  if (t) {
    var n = "", r, o;
    if (Array.isArray(t) ? (r = t[0], o = t[1]) : r = t, e) {
      e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var i = !1, s = 0, a = !1, l = [];
      r && l.push(...Object.keys(r).map(Ts)), o && l.push(...Object.keys(o).map(Ts));
      var u = 0, d = -1;
      const w = e.length;
      for (var f = 0; f < w; f++) {
        var p = e[f];
        if (a ? p === "/" && e[f - 1] === "*" && (a = !1) : i ? i === p && (i = !1) : p === "/" && e[f + 1] === "*" ? a = !0 : p === '"' || p === "'" ? i = p : p === "(" ? s++ : p === ")" && s--, !a && i === !1 && s === 0) {
          if (p === ":" && d === -1)
            d = f;
          else if (p === ";" || f === w - 1) {
            if (d !== -1) {
              var h = Ts(e.substring(u, d).trim());
              if (!l.includes(h)) {
                p !== ";" && f++;
                var g = e.substring(u, f).trim();
                n += " " + g + ";";
              }
            }
            u = f + 1, d = -1;
          }
        }
      }
    }
    return r && (n += Il(r)), o && (n += Il(o, !0)), n = n.trim(), n === "" ? null : n;
  }
  return e == null ? null : String(e);
}
function Ht(e, t, n, r, o, i) {
  var s = e.__className;
  if (we || s !== n || s === void 0) {
    var a = ev(n, r, i);
    (!we || a !== e.getAttribute("class")) && (a == null ? e.removeAttribute("class") : t ? e.className = a : e.setAttribute("class", a)), e.__className = n;
  } else if (i && o !== i)
    for (var l in i) {
      var u = !!i[l];
      (o == null || u !== !!o[l]) && e.classList.toggle(l, u);
    }
  return i;
}
function Vs(e, t = {}, n, r) {
  for (var o in n) {
    var i = n[o];
    t[o] !== i && (n[o] == null ? e.style.removeProperty(o) : e.style.setProperty(o, i, r));
  }
}
function wt(e, t, n, r) {
  var o = e.__style;
  if (we || o !== t) {
    var i = tv(t, r);
    (!we || i !== e.getAttribute("style")) && (i == null ? e.removeAttribute("style") : e.style.cssText = i), e.__style = t;
  } else r && (Array.isArray(r) ? (Vs(e, n?.[0], r[0]), Vs(e, n?.[1], r[1], "important")) : Vs(e, n, r));
  return r;
}
function ia(e, t, n = !1) {
  if (e.multiple) {
    if (t == null)
      return;
    if (!ls(t))
      return ig();
    for (var r of e.options)
      r.selected = t.includes(jl(r));
    return;
  }
  for (r of e.options) {
    var o = jl(r);
    if ($g(o, t)) {
      r.selected = !0;
      return;
    }
  }
  (!n || t !== void 0) && (e.selectedIndex = -1);
}
function nv(e) {
  var t = new MutationObserver(() => {
    ia(e, e.__value);
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
  }), vs(() => {
    t.disconnect();
  });
}
function jl(e) {
  return "__value" in e ? e.__value : e.value;
}
const er = Symbol("class"), yn = Symbol("style"), sd = Symbol("is custom element"), ad = Symbol("is html");
function ar(e) {
  if (we) {
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
    e.__on_r = n, pr(n), Lc();
  }
}
function _i(e, t) {
  var n = ws(e);
  n.value === (n.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function As(e, t) {
  var n = ws(e);
  n.checked !== (n.checked = // treat null and undefined the same for the initial value
  t ?? void 0) && (e.checked = t);
}
function rv(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function $e(e, t, n, r) {
  var o = ws(e);
  we && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = n) && (t === "loading" && (e[Xh] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && ld(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function ov(e, t, n, r, o = !1, i = !1) {
  if (we && o && e.tagName === "INPUT") {
    var s = (
      /** @type {HTMLInputElement} */
      e
    ), a = s.type === "checkbox" ? "defaultChecked" : "defaultValue";
    a in n || ar(s);
  }
  var l = ws(e), u = l[sd], d = !l[ad];
  let f = we && u;
  f && zt(!1);
  var p = t || {}, h = e.tagName === "OPTION";
  for (var g in t)
    g in n || (n[g] = null);
  n.class ? n.class = Yn(n.class) : (r || n[er]) && (n.class = null), n[yn] && (n.style ??= null);
  var w = ld(e);
  for (const P in n) {
    let A = n[P];
    if (h && P === "value" && A == null) {
      e.value = e.__value = "", p[P] = A;
      continue;
    }
    if (P === "class") {
      var y = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      Ht(e, y, A, r, t?.[er], n[er]), p[P] = A, p[er] = n[er];
      continue;
    }
    if (P === "style") {
      wt(e, A, t?.[yn], n[yn]), p[P] = A, p[yn] = n[yn];
      continue;
    }
    var b = p[P];
    if (!(A === b && !(A === void 0 && e.hasAttribute(P)))) {
      p[P] = A;
      var x = P[0] + P[1];
      if (x !== "$$")
        if (x === "on") {
          const L = {}, H = "$$" + P;
          let j = P.slice(2);
          var _ = jg(j);
          if (Hg(j) && (j = j.slice(0, -7), L.capture = !0), !_ && b) {
            if (A != null) continue;
            e.removeEventListener(j, p[H], L), p[H] = null;
          }
          if (A != null)
            if (_)
              e[`__${j}`] = A, hr([j]);
            else {
              let V = function(z) {
                p[P].call(this, z);
              };
              p[H] = Fa(j, e, V, L);
            }
          else _ && (e[`__${j}`] = void 0);
        } else if (P === "style")
          $e(e, P, A);
        else if (P === "autofocus")
          _g(
            /** @type {HTMLElement} */
            e,
            !!A
          );
        else if (!u && (P === "__value" || P === "value" && A != null))
          e.value = e.__value = A;
        else if (P === "selected" && h)
          rv(
            /** @type {HTMLOptionElement} */
            e,
            A
          );
        else {
          var k = P;
          d || (k = Zg(k));
          var $ = k === "defaultValue" || k === "defaultChecked";
          if (A == null && !u && !$)
            if (l[P] = null, k === "value" || k === "checked") {
              let L = (
                /** @type {HTMLInputElement} */
                e
              );
              const H = t === void 0;
              if (k === "value") {
                let j = L.defaultValue;
                L.removeAttribute(k), L.defaultValue = j, L.value = L.__value = H ? j : null;
              } else {
                let j = L.defaultChecked;
                L.removeAttribute(k), L.defaultChecked = j, L.checked = H ? j : !1;
              }
            } else
              e.removeAttribute(P);
          else $ || w.includes(k) && (u || typeof A != "string") ? (e[k] = A, k in l && (l[k] = gt)) : typeof A != "function" && $e(e, k, A);
        }
    }
  }
  return f && zt(!0), p;
}
function Ge(e, t, n = [], r = [], o = [], i, s = !1, a = !1) {
  Sc(o, n, r, (l) => {
    var u = void 0, d = {}, f = e.nodeName === "SELECT", p = !1;
    if (jc(() => {
      var g = t(...l.map(c)), w = ov(
        e,
        u,
        g,
        i,
        s,
        a
      );
      p && f && "value" in g && ia(
        /** @type {HTMLSelectElement} */
        e,
        g.value
      );
      for (let b of Object.getOwnPropertySymbols(d))
        g[b] || dt(d[b]);
      for (let b of Object.getOwnPropertySymbols(g)) {
        var y = g[b];
        b.description === dc && (!u || y !== u[b]) && (d[b] && dt(d[b]), d[b] = Rt(() => Qg(e, () => y))), w[b] = y;
      }
      u = w;
    }), f) {
      var h = (
        /** @type {HTMLSelectElement} */
        e
      );
      po(() => {
        ia(
          h,
          /** @type {Record<string | symbol, any>} */
          u.value,
          !0
        ), nv(h);
      });
    }
    p = !0;
  });
}
function ws(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ??= {
      [sd]: e.nodeName.includes("-"),
      [ad]: e.namespaceURI === jh
    }
  );
}
var Rl = /* @__PURE__ */ new Map();
function ld(e) {
  var t = e.getAttribute("is") || e.nodeName, n = Rl.get(t);
  if (n) return n;
  Rl.set(t, n = []);
  for (var r, o = e, i = Element.prototype; i !== o; ) {
    r = fc(o);
    for (var s in r)
      r[s].set && n.push(s);
    o = us(o);
  }
  return n;
}
function ji(e, t, n = t) {
  var r = /* @__PURE__ */ new WeakSet();
  Dc(e, "input", async (o) => {
    var i = o ? e.defaultValue : e.value;
    if (i = Ls(e) ? Ds(i) : i, n(i), Ze !== null && r.add(Ze), await Tg(), i !== (i = t())) {
      var s = e.selectionStart, a = e.selectionEnd, l = e.value.length;
      if (e.value = i ?? "", a !== null) {
        var u = e.value.length;
        s === a && a === l && u > l ? (e.selectionStart = u, e.selectionEnd = u) : (e.selectionStart = s, e.selectionEnd = Math.min(a, u));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  (we && e.defaultValue !== e.value || // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  Qe(t) == null && e.value) && (n(Ls(e) ? Ds(e.value) : e.value), Ze !== null && r.add(Ze)), Ir(() => {
    var o = t();
    if (e === document.activeElement) {
      var i = (
        /** @type {Batch} */
        $i ?? Ze
      );
      if (r.has(i))
        return;
    }
    Ls(e) && o === Ds(e.value) || e.type === "date" && !o && !e.value || o !== e.value && (e.value = o ?? "");
  });
}
function Ls(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function Ds(e) {
  return e === "" ? null : +e;
}
function iv(e, t, n = t) {
  Dc(e, "change", () => {
    n(e.files);
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  we && e.files && n(e.files), Ir(() => {
    e.files = t();
  });
}
class Ua {
  /** */
  #t = /* @__PURE__ */ new WeakMap();
  /** @type {ResizeObserver | undefined} */
  #e;
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
    var r = this.#t.get(t) || /* @__PURE__ */ new Set();
    return r.add(n), this.#t.set(t, r), this.#r().observe(t, this.#n), () => {
      var o = this.#t.get(t);
      o.delete(n), o.size === 0 && (this.#t.delete(t), this.#e.unobserve(t));
    };
  }
  #r() {
    return this.#e ?? (this.#e = new ResizeObserver(
      /** @param {any} entries */
      (t) => {
        for (var n of t) {
          Ua.entries.set(n.target, n);
          for (var r of this.#t.get(n.target) || [])
            r(n);
        }
      }
    ));
  }
}
var sv = /* @__PURE__ */ new Ua({
  box: "border-box"
});
function Zl(e, t, n) {
  var r = sv.observe(e, () => n(e[t]));
  po(() => (Qe(() => n(e[t])), r));
}
function Kl(e, t) {
  return e === t || e?.[bn] === t;
}
function ft(e = {}, t, n, r) {
  return po(() => {
    var o, i;
    return Ir(() => {
      o = i, i = [], Qe(() => {
        e !== n(...i) && (t(e, ...i), o && Kl(n(...o), e) && t(null, ...o));
      });
    }), () => {
      pr(() => {
        i && Kl(n(...i), e) && t(null, ...i);
      });
    };
  }), e;
}
function Ja(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    Fe
  ), n = t.l.u;
  if (!n) return;
  let r = () => qa(t.s);
  if (e) {
    let o = 0, i = (
      /** @type {Record<string, any>} */
      {}
    );
    const s = /* @__PURE__ */ Xo(() => {
      let a = !1;
      const l = t.s;
      for (const u in l)
        l[u] !== i[u] && (i[u] = l[u], a = !0);
      return a && o++, o;
    });
    r = () => c(s);
  }
  n.b.length && jt(() => {
    Bl(t, r), Us(n.b);
  }), Ue(() => {
    const o = Qe(() => n.m.map(Wh));
    return () => {
      for (const i of o)
        typeof i == "function" && i();
    };
  }), n.a.length && Ue(() => {
    Bl(t, r), Us(n.a);
  });
}
function Bl(e, t) {
  if (e.l.s)
    for (const n of e.l.s) c(n);
  t();
}
let ci = !1;
function av(e) {
  var t = ci;
  try {
    return ci = !1, [e(), ci];
  } finally {
    ci = t;
  }
}
const lv = {
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
function De(e, t, n) {
  return new Proxy(
    { props: e, exclude: t },
    lv
  );
}
const uv = {
  get(e, t) {
    if (!e.exclude.includes(t))
      return c(e.version), t in e.special ? e.special[t]() : e.props[t];
  },
  set(e, t, n) {
    if (!(t in e.special)) {
      var r = Oe;
      try {
        Ut(e.parent_effect), e.special[t] = m(
          {
            get [t]() {
              return e.props[t];
            }
          },
          /** @type {string} */
          t,
          lc
        );
      } finally {
        Ut(r);
      }
    }
    return e.special[t](n), Ol(e.version), !0;
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
    return e.exclude.includes(t) || (e.exclude.push(t), Ol(e.version)), !0;
  },
  has(e, t) {
    return e.exclude.includes(t) ? !1 : t in e.props;
  },
  ownKeys(e) {
    return Reflect.ownKeys(e.props).filter((t) => !e.exclude.includes(t));
  }
};
function Wl(e, t) {
  return new Proxy(
    {
      props: e,
      exclude: t,
      special: {},
      version: lr(0),
      // TODO this is only necessary because we need to track component
      // destruction inside `prop`, because of `bind:this`, but it
      // seems likely that we can simplify `bind:this` instead
      parent_effect: (
        /** @type {Effect} */
        Oe
      )
    },
    uv
  );
}
const cv = {
  get(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (go(r) && (r = r()), typeof r == "object" && r !== null && t in r) return r[t];
    }
  },
  set(e, t, n) {
    let r = e.props.length;
    for (; r--; ) {
      let o = e.props[r];
      go(o) && (o = o());
      const i = Dn(o, t);
      if (i && i.set)
        return i.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (go(r) && (r = r()), typeof r == "object" && r !== null && t in r) {
        const o = Dn(r, t);
        return o && !o.configurable && (o.configurable = !0), o;
      }
    }
  },
  has(e, t) {
    if (t === bn || t === Ia) return !1;
    for (let n of e.props)
      if (go(n) && (n = n()), n != null && t in n) return !0;
    return !1;
  },
  ownKeys(e) {
    const t = [];
    for (let n of e.props)
      if (go(n) && (n = n()), !!n) {
        for (const r in n)
          t.includes(r) || t.push(r);
        for (const r of Object.getOwnPropertySymbols(n))
          t.includes(r) || t.push(r);
      }
    return t;
  }
};
function Ke(...e) {
  return new Proxy({ props: e }, cv);
}
function m(e, t, n, r) {
  var o = !uo || (n & Lh) !== 0, i = (n & Dh) !== 0, s = (n & Hh) !== 0, a = (
    /** @type {V} */
    r
  ), l = !0, u = () => (l && (l = !1, a = s ? Qe(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), a), d;
  if (i) {
    var f = bn in e || Ia in e;
    d = Dn(e, t)?.set ?? (f && t in e ? (_) => e[t] = _ : void 0);
  }
  var p, h = !1;
  i ? [p, h] = av(() => (
    /** @type {V} */
    e[t]
  )) : p = /** @type {V} */
  e[t], p === void 0 && r !== void 0 && (p = u(), d && (o && eg(), d(p)));
  var g;
  if (o ? g = () => {
    var _ = (
      /** @type {V} */
      e[t]
    );
    return _ === void 0 ? u() : (l = !0, _);
  } : g = () => {
    var _ = (
      /** @type {V} */
      e[t]
    );
    return _ !== void 0 && (a = /** @type {V} */
    void 0), _ === void 0 ? a : _;
  }, o && (n & lc) === 0)
    return g;
  if (d) {
    var w = e.$$legacy;
    return (
      /** @type {() => V} */
      function(_, k) {
        return arguments.length > 0 ? ((!o || !k || w || h) && d(k ? g() : _), _) : g();
      }
    );
  }
  var y = !1, b = ((n & Ah) !== 0 ? Xo : Ka)(() => (y = !1, g()));
  i && c(b);
  var x = (
    /** @type {Effect} */
    Oe
  );
  return (
    /** @type {() => V} */
    function(_, k) {
      if (arguments.length > 0) {
        const $ = k ? c(b) : o && i ? $t(_) : _;
        return U(b, $), y = !0, a !== void 0 && (a = $), _;
      }
      return Rr && y || (x.f & Hn) !== 0 ? b.v : c(b);
    }
  );
}
function dv(e) {
  return new fv(e);
}
class fv {
  /** @type {any} */
  #t;
  /** @type {Record<string, any>} */
  #e;
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    var n = /* @__PURE__ */ new Map(), r = (i, s) => {
      var a = /* @__PURE__ */ Mc(s, !1, !1);
      return n.set(i, a), a;
    };
    const o = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(i, s) {
          return c(n.get(s) ?? r(s, Reflect.get(i, s)));
        },
        has(i, s) {
          return s === Ia ? !0 : (c(n.get(s) ?? r(s, Reflect.get(i, s))), Reflect.has(i, s));
        },
        set(i, s, a) {
          return U(n.get(s) ?? r(s, a), a), Reflect.set(i, s, a);
        }
      }
    );
    this.#e = (t.hydrate ? Yg : nd)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: o,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    }), (!t?.props?.$$host || t.sync === !1) && v(), this.#t = o.$$events;
    for (const i of Object.keys(this.#e))
      i === "$set" || i === "$destroy" || i === "$on" || Vi(this, i, {
        get() {
          return this.#e[i];
        },
        /** @param {any} value */
        set(s) {
          this.#e[i] = s;
        },
        enumerable: !0
      });
    this.#e.$set = /** @param {Record<string, any>} next */
    (i) => {
      Object.assign(o, i);
    }, this.#e.$destroy = () => {
      qg(this.#e);
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    this.#e.$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, n) {
    this.#t[t] = this.#t[t] || [];
    const r = (...o) => n.call(this, ...o);
    return this.#t[t].push(r), () => {
      this.#t[t] = this.#t[t].filter(
        /** @param {any} fn */
        (o) => o !== r
      );
    };
  }
  $destroy() {
    this.#e.$destroy();
  }
}
let ud;
typeof HTMLElement == "function" && (ud = class extends HTMLElement {
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
          r !== "default" && (i.name = r), T(o, i);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const t = {}, n = pv(this);
      for (const r of this.$$s)
        r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = e(r), t.default = !0) : t[r] = e(r));
      for (const r of this.attributes) {
        const o = this.$$g_p(r.name);
        o in this.$$d || (this.$$d[o] = Si(o, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = dv({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: t,
          $$host: this
        }
      }), this.$$me = fo(() => {
        Ir(() => {
          this.$$r = !0;
          for (const r of Ti(this.$$c)) {
            if (!this.$$p_d[r]?.reflect) continue;
            this.$$d[r] = this.$$c[r];
            const o = Si(
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
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = Si(e, n, this.$$p_d, "toProp"), this.$$c?.$set({ [e]: this.$$d[e] }));
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
    return Ti(this.$$p_d).find(
      (t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e
    ) || e;
  }
});
function Si(e, t, n, r) {
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
function pv(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function se(e, t, n, r, o, i) {
  let s = class extends ud {
    constructor() {
      super(e, n, o), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Ti(t).map(
        (a) => (t[a].attribute || a).toLowerCase()
      );
    }
  };
  return Ti(t).forEach((a) => {
    Vi(s.prototype, a, {
      get() {
        return this.$$c && a in this.$$c ? this.$$c[a] : this.$$d[a];
      },
      set(l) {
        l = Si(a, l, t), this.$$d[a] = l;
        var u = this.$$c;
        if (u) {
          var d = Dn(u, a)?.get;
          d ? u[a] = l : u.$set({ [a]: l });
        }
      }
    });
  }), r.forEach((a) => {
    Vi(s.prototype, a, {
      get() {
        return this.$$c?.[a];
      }
    });
  }), e.element = /** @type {any} */
  s, s;
}
var hv = { value: () => {
} };
function bs() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new Ei(n);
}
function Ei(e) {
  this._ = e;
}
function gv(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
Ei.prototype = bs.prototype = {
  constructor: Ei,
  on: function(e, t) {
    var n = this._, r = gv(e + "", n), o, i = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++i < s; ) if ((o = (e = r[i]).type) && (o = vv(n[o], e.name))) return o;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++i < s; )
      if (o = (e = r[i]).type) n[o] = Xl(n[o], e.name, t);
      else if (t == null) for (o in n) n[o] = Xl(n[o], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t) e[n] = t[n].slice();
    return new Ei(e);
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
function vv(e, t) {
  for (var n = 0, r = e.length, o; n < r; ++n)
    if ((o = e[n]).name === t)
      return o.value;
}
function Xl(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = hv, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var sa = "http://www.w3.org/1999/xhtml";
const Yl = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: sa,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function xs(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), Yl.hasOwnProperty(t) ? { space: Yl[t], local: e } : e;
}
function mv(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === sa && t.documentElement.namespaceURI === sa ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function yv(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function cd(e) {
  var t = xs(e);
  return (t.local ? yv : mv)(t);
}
function wv() {
}
function Qa(e) {
  return e == null ? wv : function() {
    return this.querySelector(e);
  };
}
function bv(e) {
  typeof e != "function" && (e = Qa(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = new Array(s), l, u, d = 0; d < s; ++d)
      (l = i[d]) && (u = e.call(l, l.__data__, d, i)) && ("__data__" in l && (u.__data__ = l.__data__), a[d] = u);
  return new Wt(r, this._parents);
}
function xv(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function kv() {
  return [];
}
function dd(e) {
  return e == null ? kv : function() {
    return this.querySelectorAll(e);
  };
}
function Cv(e) {
  return function() {
    return xv(e.apply(this, arguments));
  };
}
function $v(e) {
  typeof e == "function" ? e = Cv(e) : e = dd(e);
  for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
    for (var s = t[i], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && (r.push(e.call(l, l.__data__, u, s)), o.push(l));
  return new Wt(r, o);
}
function fd(e) {
  return function() {
    return this.matches(e);
  };
}
function pd(e) {
  return function(t) {
    return t.matches(e);
  };
}
var _v = Array.prototype.find;
function Sv(e) {
  return function() {
    return _v.call(this.children, e);
  };
}
function Ev() {
  return this.firstElementChild;
}
function Nv(e) {
  return this.select(e == null ? Ev : Sv(typeof e == "function" ? e : pd(e)));
}
var zv = Array.prototype.filter;
function Mv() {
  return Array.from(this.children);
}
function Pv(e) {
  return function() {
    return zv.call(this.children, e);
  };
}
function Ov(e) {
  return this.selectAll(e == null ? Mv : Pv(typeof e == "function" ? e : pd(e)));
}
function Tv(e) {
  typeof e != "function" && (e = fd(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && a.push(l);
  return new Wt(r, this._parents);
}
function hd(e) {
  return new Array(e.length);
}
function Vv() {
  return new Wt(this._enter || this._groups.map(hd), this._parents);
}
function Ri(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
Ri.prototype = {
  constructor: Ri,
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
function Av(e) {
  return function() {
    return e;
  };
}
function Lv(e, t, n, r, o, i) {
  for (var s = 0, a, l = t.length, u = i.length; s < u; ++s)
    (a = t[s]) ? (a.__data__ = i[s], r[s] = a) : n[s] = new Ri(e, i[s]);
  for (; s < l; ++s)
    (a = t[s]) && (o[s] = a);
}
function Dv(e, t, n, r, o, i, s) {
  var a, l, u = /* @__PURE__ */ new Map(), d = t.length, f = i.length, p = new Array(d), h;
  for (a = 0; a < d; ++a)
    (l = t[a]) && (p[a] = h = s.call(l, l.__data__, a, t) + "", u.has(h) ? o[a] = l : u.set(h, l));
  for (a = 0; a < f; ++a)
    h = s.call(e, i[a], a, i) + "", (l = u.get(h)) ? (r[a] = l, l.__data__ = i[a], u.delete(h)) : n[a] = new Ri(e, i[a]);
  for (a = 0; a < d; ++a)
    (l = t[a]) && u.get(p[a]) === l && (o[a] = l);
}
function Hv(e) {
  return e.__data__;
}
function Iv(e, t) {
  if (!arguments.length) return Array.from(this, Hv);
  var n = t ? Dv : Lv, r = this._parents, o = this._groups;
  typeof e != "function" && (e = Av(e));
  for (var i = o.length, s = new Array(i), a = new Array(i), l = new Array(i), u = 0; u < i; ++u) {
    var d = r[u], f = o[u], p = f.length, h = jv(e.call(d, d && d.__data__, u, r)), g = h.length, w = a[u] = new Array(g), y = s[u] = new Array(g), b = l[u] = new Array(p);
    n(d, f, w, y, b, h, t);
    for (var x = 0, _ = 0, k, $; x < g; ++x)
      if (k = w[x]) {
        for (x >= _ && (_ = x + 1); !($ = y[_]) && ++_ < g; ) ;
        k._next = $ || null;
      }
  }
  return s = new Wt(s, r), s._enter = a, s._exit = l, s;
}
function jv(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Rv() {
  return new Wt(this._exit || this._groups.map(hd), this._parents);
}
function Zv(e, t, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function Kv(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, i = r.length, s = Math.min(o, i), a = new Array(o), l = 0; l < s; ++l)
    for (var u = n[l], d = r[l], f = u.length, p = a[l] = new Array(f), h, g = 0; g < f; ++g)
      (h = u[g] || d[g]) && (p[g] = h);
  for (; l < o; ++l)
    a[l] = n[l];
  return new Wt(a, this._parents);
}
function Bv() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, i = r[o], s; --o >= 0; )
      (s = r[o]) && (i && s.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(s, i), i = s);
  return this;
}
function Wv(e) {
  e || (e = Xv);
  function t(f, p) {
    return f && p ? e(f.__data__, p.__data__) : !f - !p;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), i = 0; i < r; ++i) {
    for (var s = n[i], a = s.length, l = o[i] = new Array(a), u, d = 0; d < a; ++d)
      (u = s[d]) && (l[d] = u);
    l.sort(t);
  }
  return new Wt(o, this._parents).order();
}
function Xv(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Yv() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function qv() {
  return Array.from(this);
}
function Fv() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length; o < i; ++o) {
      var s = r[o];
      if (s) return s;
    }
  return null;
}
function Gv() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function Uv() {
  return !this.node();
}
function Jv(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], i = 0, s = o.length, a; i < s; ++i)
      (a = o[i]) && e.call(a, a.__data__, i, o);
  return this;
}
function Qv(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function e1(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function t1(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function n1(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function r1(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function o1(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function i1(e, t) {
  var n = xs(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? e1 : Qv : typeof t == "function" ? n.local ? o1 : r1 : n.local ? n1 : t1)(n, t));
}
function gd(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function s1(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function a1(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function l1(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function u1(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? s1 : typeof t == "function" ? l1 : a1)(e, t, n ?? "")) : to(this.node(), e);
}
function to(e, t) {
  return e.style.getPropertyValue(t) || gd(e).getComputedStyle(e, null).getPropertyValue(t);
}
function c1(e) {
  return function() {
    delete this[e];
  };
}
function d1(e, t) {
  return function() {
    this[e] = t;
  };
}
function f1(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function p1(e, t) {
  return arguments.length > 1 ? this.each((t == null ? c1 : typeof t == "function" ? f1 : d1)(e, t)) : this.node()[e];
}
function vd(e) {
  return e.trim().split(/^|\s+/);
}
function el(e) {
  return e.classList || new md(e);
}
function md(e) {
  this._node = e, this._names = vd(e.getAttribute("class") || "");
}
md.prototype = {
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
function yd(e, t) {
  for (var n = el(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function wd(e, t) {
  for (var n = el(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
}
function h1(e) {
  return function() {
    yd(this, e);
  };
}
function g1(e) {
  return function() {
    wd(this, e);
  };
}
function v1(e, t) {
  return function() {
    (t.apply(this, arguments) ? yd : wd)(this, e);
  };
}
function m1(e, t) {
  var n = vd(e + "");
  if (arguments.length < 2) {
    for (var r = el(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? v1 : t ? h1 : g1)(n, t));
}
function y1() {
  this.textContent = "";
}
function w1(e) {
  return function() {
    this.textContent = e;
  };
}
function b1(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function x1(e) {
  return arguments.length ? this.each(e == null ? y1 : (typeof e == "function" ? b1 : w1)(e)) : this.node().textContent;
}
function k1() {
  this.innerHTML = "";
}
function C1(e) {
  return function() {
    this.innerHTML = e;
  };
}
function $1(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function _1(e) {
  return arguments.length ? this.each(e == null ? k1 : (typeof e == "function" ? $1 : C1)(e)) : this.node().innerHTML;
}
function S1() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function E1() {
  return this.each(S1);
}
function N1() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function z1() {
  return this.each(N1);
}
function M1(e) {
  var t = typeof e == "function" ? e : cd(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function P1() {
  return null;
}
function O1(e, t) {
  var n = typeof e == "function" ? e : cd(e), r = t == null ? P1 : typeof t == "function" ? t : Qa(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function T1() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function V1() {
  return this.each(T1);
}
function A1() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function L1() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function D1(e) {
  return this.select(e ? L1 : A1);
}
function H1(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function I1(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function j1(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", r = t.indexOf(".");
    return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n };
  });
}
function R1(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, o = t.length, i; n < o; ++n)
        i = t[n], (!e.type || i.type === e.type) && i.name === e.name ? this.removeEventListener(i.type, i.listener, i.options) : t[++r] = i;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function Z1(e, t, n) {
  return function() {
    var r = this.__on, o, i = I1(t);
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
function K1(e, t, n) {
  var r = j1(e + ""), o, i = r.length, s;
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
  for (a = t ? Z1 : R1, o = 0; o < i; ++o) this.each(a(r[o], t, n));
  return this;
}
function bd(e, t, n) {
  var r = gd(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function B1(e, t) {
  return function() {
    return bd(this, e, t);
  };
}
function W1(e, t) {
  return function() {
    return bd(this, e, t.apply(this, arguments));
  };
}
function X1(e, t) {
  return this.each((typeof t == "function" ? W1 : B1)(e, t));
}
function* Y1() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length, s; o < i; ++o)
      (s = r[o]) && (yield s);
}
var xd = [null];
function Wt(e, t) {
  this._groups = e, this._parents = t;
}
function Go() {
  return new Wt([[document.documentElement]], xd);
}
function q1() {
  return this;
}
Wt.prototype = Go.prototype = {
  constructor: Wt,
  select: bv,
  selectAll: $v,
  selectChild: Nv,
  selectChildren: Ov,
  filter: Tv,
  data: Iv,
  enter: Vv,
  exit: Rv,
  join: Zv,
  merge: Kv,
  selection: q1,
  order: Bv,
  sort: Wv,
  call: Yv,
  nodes: qv,
  node: Fv,
  size: Gv,
  empty: Uv,
  each: Jv,
  attr: i1,
  style: u1,
  property: p1,
  classed: m1,
  text: x1,
  html: _1,
  raise: E1,
  lower: z1,
  append: M1,
  insert: O1,
  remove: V1,
  clone: D1,
  datum: H1,
  on: K1,
  dispatch: X1,
  [Symbol.iterator]: Y1
};
function Gt(e) {
  return typeof e == "string" ? new Wt([[document.querySelector(e)]], [document.documentElement]) : new Wt([[e]], xd);
}
function F1(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function nn(e, t) {
  if (e = F1(e), t === void 0 && (t = e.currentTarget), t) {
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
const G1 = { passive: !1 }, Oo = { capture: !0, passive: !1 };
function Hs(e) {
  e.stopImmediatePropagation();
}
function qr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function kd(e) {
  var t = e.document.documentElement, n = Gt(e).on("dragstart.drag", qr, Oo);
  "onselectstart" in t ? n.on("selectstart.drag", qr, Oo) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function Cd(e, t) {
  var n = e.document.documentElement, r = Gt(e).on("dragstart.drag", null);
  t && (r.on("click.drag", qr, Oo), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const di = (e) => () => e;
function aa(e, {
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
aa.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function U1(e) {
  return !e.ctrlKey && !e.button;
}
function J1() {
  return this.parentNode;
}
function Q1(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function em() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function tm() {
  var e = U1, t = J1, n = Q1, r = em, o = {}, i = bs("start", "drag", "end"), s = 0, a, l, u, d, f = 0;
  function p(k) {
    k.on("mousedown.drag", h).filter(r).on("touchstart.drag", y).on("touchmove.drag", b, G1).on("touchend.drag touchcancel.drag", x).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function h(k, $) {
    if (!(d || !e.call(this, k, $))) {
      var P = _(this, t.call(this, k, $), k, $, "mouse");
      P && (Gt(k.view).on("mousemove.drag", g, Oo).on("mouseup.drag", w, Oo), kd(k.view), Hs(k), u = !1, a = k.clientX, l = k.clientY, P("start", k));
    }
  }
  function g(k) {
    if (qr(k), !u) {
      var $ = k.clientX - a, P = k.clientY - l;
      u = $ * $ + P * P > f;
    }
    o.mouse("drag", k);
  }
  function w(k) {
    Gt(k.view).on("mousemove.drag mouseup.drag", null), Cd(k.view, u), qr(k), o.mouse("end", k);
  }
  function y(k, $) {
    if (e.call(this, k, $)) {
      var P = k.changedTouches, A = t.call(this, k, $), L = P.length, H, j;
      for (H = 0; H < L; ++H)
        (j = _(this, A, k, $, P[H].identifier, P[H])) && (Hs(k), j("start", k, P[H]));
    }
  }
  function b(k) {
    var $ = k.changedTouches, P = $.length, A, L;
    for (A = 0; A < P; ++A)
      (L = o[$[A].identifier]) && (qr(k), L("drag", k, $[A]));
  }
  function x(k) {
    var $ = k.changedTouches, P = $.length, A, L;
    for (d && clearTimeout(d), d = setTimeout(function() {
      d = null;
    }, 500), A = 0; A < P; ++A)
      (L = o[$[A].identifier]) && (Hs(k), L("end", k, $[A]));
  }
  function _(k, $, P, A, L, H) {
    var j = i.copy(), V = nn(H || P, $), z, O, C;
    if ((C = n.call(k, new aa("beforestart", {
      sourceEvent: P,
      target: p,
      identifier: L,
      active: s,
      x: V[0],
      y: V[1],
      dx: 0,
      dy: 0,
      dispatch: j
    }), A)) != null)
      return z = C.x - V[0] || 0, O = C.y - V[1] || 0, function S(E, I, W) {
        var q = V, M;
        switch (E) {
          case "start":
            o[L] = S, M = s++;
            break;
          case "end":
            delete o[L], --s;
          // falls through
          case "drag":
            V = nn(W || I, $), M = s;
            break;
        }
        j.call(
          E,
          k,
          new aa(E, {
            sourceEvent: I,
            subject: C,
            target: p,
            identifier: L,
            active: M,
            x: V[0] + z,
            y: V[1] + O,
            dx: V[0] - q[0],
            dy: V[1] - q[1],
            dispatch: j
          }),
          A
        );
      };
  }
  return p.filter = function(k) {
    return arguments.length ? (e = typeof k == "function" ? k : di(!!k), p) : e;
  }, p.container = function(k) {
    return arguments.length ? (t = typeof k == "function" ? k : di(k), p) : t;
  }, p.subject = function(k) {
    return arguments.length ? (n = typeof k == "function" ? k : di(k), p) : n;
  }, p.touchable = function(k) {
    return arguments.length ? (r = typeof k == "function" ? k : di(!!k), p) : r;
  }, p.on = function() {
    var k = i.on.apply(i, arguments);
    return k === i ? p : k;
  }, p.clickDistance = function(k) {
    return arguments.length ? (f = (k = +k) * k, p) : Math.sqrt(f);
  }, p;
}
function tl(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function $d(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function Uo() {
}
var To = 0.7, Zi = 1 / To, Fr = "\\s*([+-]?\\d+)\\s*", Vo = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", xn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", nm = /^#([0-9a-f]{3,8})$/, rm = new RegExp(`^rgb\\(${Fr},${Fr},${Fr}\\)$`), om = new RegExp(`^rgb\\(${xn},${xn},${xn}\\)$`), im = new RegExp(`^rgba\\(${Fr},${Fr},${Fr},${Vo}\\)$`), sm = new RegExp(`^rgba\\(${xn},${xn},${xn},${Vo}\\)$`), am = new RegExp(`^hsl\\(${Vo},${xn},${xn}\\)$`), lm = new RegExp(`^hsla\\(${Vo},${xn},${xn},${Vo}\\)$`), ql = {
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
tl(Uo, Tr, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Fl,
  // Deprecated! Use color.formatHex.
  formatHex: Fl,
  formatHex8: um,
  formatHsl: cm,
  formatRgb: Gl,
  toString: Gl
});
function Fl() {
  return this.rgb().formatHex();
}
function um() {
  return this.rgb().formatHex8();
}
function cm() {
  return _d(this).formatHsl();
}
function Gl() {
  return this.rgb().formatRgb();
}
function Tr(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = nm.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? Ul(t) : n === 3 ? new At(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? fi(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? fi(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = rm.exec(e)) ? new At(t[1], t[2], t[3], 1) : (t = om.exec(e)) ? new At(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = im.exec(e)) ? fi(t[1], t[2], t[3], t[4]) : (t = sm.exec(e)) ? fi(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = am.exec(e)) ? eu(t[1], t[2] / 100, t[3] / 100, 1) : (t = lm.exec(e)) ? eu(t[1], t[2] / 100, t[3] / 100, t[4]) : ql.hasOwnProperty(e) ? Ul(ql[e]) : e === "transparent" ? new At(NaN, NaN, NaN, 0) : null;
}
function Ul(e) {
  return new At(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function fi(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new At(e, t, n, r);
}
function dm(e) {
  return e instanceof Uo || (e = Tr(e)), e ? (e = e.rgb(), new At(e.r, e.g, e.b, e.opacity)) : new At();
}
function la(e, t, n, r) {
  return arguments.length === 1 ? dm(e) : new At(e, t, n, r ?? 1);
}
function At(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
tl(At, la, $d(Uo, {
  brighter(e) {
    return e = e == null ? Zi : Math.pow(Zi, e), new At(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? To : Math.pow(To, e), new At(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new At(Er(this.r), Er(this.g), Er(this.b), Ki(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Jl,
  // Deprecated! Use color.formatHex.
  formatHex: Jl,
  formatHex8: fm,
  formatRgb: Ql,
  toString: Ql
}));
function Jl() {
  return `#${kr(this.r)}${kr(this.g)}${kr(this.b)}`;
}
function fm() {
  return `#${kr(this.r)}${kr(this.g)}${kr(this.b)}${kr((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Ql() {
  const e = Ki(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Er(this.r)}, ${Er(this.g)}, ${Er(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Ki(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Er(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function kr(e) {
  return e = Er(e), (e < 16 ? "0" : "") + e.toString(16);
}
function eu(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new rn(e, t, n, r);
}
function _d(e) {
  if (e instanceof rn) return new rn(e.h, e.s, e.l, e.opacity);
  if (e instanceof Uo || (e = Tr(e)), !e) return new rn();
  if (e instanceof rn) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), s = NaN, a = i - o, l = (i + o) / 2;
  return a ? (t === i ? s = (n - r) / a + (n < r) * 6 : n === i ? s = (r - t) / a + 2 : s = (t - n) / a + 4, a /= l < 0.5 ? i + o : 2 - i - o, s *= 60) : a = l > 0 && l < 1 ? 0 : s, new rn(s, a, l, e.opacity);
}
function pm(e, t, n, r) {
  return arguments.length === 1 ? _d(e) : new rn(e, t, n, r ?? 1);
}
function rn(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
tl(rn, pm, $d(Uo, {
  brighter(e) {
    return e = e == null ? Zi : Math.pow(Zi, e), new rn(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? To : Math.pow(To, e), new rn(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new At(
      Is(e >= 240 ? e - 240 : e + 120, o, r),
      Is(e, o, r),
      Is(e < 120 ? e + 240 : e - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new rn(tu(this.h), pi(this.s), pi(this.l), Ki(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Ki(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${tu(this.h)}, ${pi(this.s) * 100}%, ${pi(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function tu(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function pi(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Is(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const nl = (e) => () => e;
function hm(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function gm(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function vm(e) {
  return (e = +e) == 1 ? Sd : function(t, n) {
    return n - t ? gm(t, n, e) : nl(isNaN(t) ? n : t);
  };
}
function Sd(e, t) {
  var n = t - e;
  return n ? hm(e, n) : nl(isNaN(e) ? t : e);
}
const Bi = function e(t) {
  var n = vm(t);
  function r(o, i) {
    var s = n((o = la(o)).r, (i = la(i)).r), a = n(o.g, i.g), l = n(o.b, i.b), u = Sd(o.opacity, i.opacity);
    return function(d) {
      return o.r = s(d), o.g = a(d), o.b = l(d), o.opacity = u(d), o + "";
    };
  }
  return r.gamma = e, r;
}(1);
function mm(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, r = t.slice(), o;
  return function(i) {
    for (o = 0; o < n; ++o) r[o] = e[o] * (1 - i) + t[o] * i;
    return r;
  };
}
function ym(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function wm(e, t) {
  var n = t ? t.length : 0, r = e ? Math.min(n, e.length) : 0, o = new Array(r), i = new Array(n), s;
  for (s = 0; s < r; ++s) o[s] = Eo(e[s], t[s]);
  for (; s < n; ++s) i[s] = t[s];
  return function(a) {
    for (s = 0; s < r; ++s) i[s] = o[s](a);
    return i;
  };
}
function bm(e, t) {
  var n = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(r) {
    return n.setTime(e * (1 - r) + t * r), n;
  };
}
function mn(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function xm(e, t) {
  var n = {}, r = {}, o;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (o in t)
    o in e ? n[o] = Eo(e[o], t[o]) : r[o] = t[o];
  return function(i) {
    for (o in n) r[o] = n[o](i);
    return r;
  };
}
var ua = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, js = new RegExp(ua.source, "g");
function km(e) {
  return function() {
    return e;
  };
}
function Cm(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Ed(e, t) {
  var n = ua.lastIndex = js.lastIndex = 0, r, o, i, s = -1, a = [], l = [];
  for (e = e + "", t = t + ""; (r = ua.exec(e)) && (o = js.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), a[s] ? a[s] += i : a[++s] = i), (r = r[0]) === (o = o[0]) ? a[s] ? a[s] += o : a[++s] = o : (a[++s] = null, l.push({ i: s, x: mn(r, o) })), n = js.lastIndex;
  return n < t.length && (i = t.slice(n), a[s] ? a[s] += i : a[++s] = i), a.length < 2 ? l[0] ? Cm(l[0].x) : km(t) : (t = l.length, function(u) {
    for (var d = 0, f; d < t; ++d) a[(f = l[d]).i] = f.x(u);
    return a.join("");
  });
}
function Eo(e, t) {
  var n = typeof t, r;
  return t == null || n === "boolean" ? nl(t) : (n === "number" ? mn : n === "string" ? (r = Tr(t)) ? (t = r, Bi) : Ed : t instanceof Tr ? Bi : t instanceof Date ? bm : ym(t) ? mm : Array.isArray(t) ? wm : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? xm : mn)(e, t);
}
var nu = 180 / Math.PI, Nd = {
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
    rotate: Math.atan2(t, e) * nu,
    skewX: Math.atan(l) * nu,
    scaleX: s,
    scaleY: a
  };
}
var hi;
function $m(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? Nd : zd(t.a, t.b, t.c, t.d, t.e, t.f);
}
function _m(e) {
  return e == null || (hi || (hi = document.createElementNS("http://www.w3.org/2000/svg", "g")), hi.setAttribute("transform", e), !(e = hi.transform.baseVal.consolidate())) ? Nd : (e = e.matrix, zd(e.a, e.b, e.c, e.d, e.e, e.f));
}
function Md(e, t, n, r) {
  function o(u) {
    return u.length ? u.pop() + " " : "";
  }
  function i(u, d, f, p, h, g) {
    if (u !== f || d !== p) {
      var w = h.push("translate(", null, t, null, n);
      g.push({ i: w - 4, x: mn(u, f) }, { i: w - 2, x: mn(d, p) });
    } else (f || p) && h.push("translate(" + f + t + p + n);
  }
  function s(u, d, f, p) {
    u !== d ? (u - d > 180 ? d += 360 : d - u > 180 && (u += 360), p.push({ i: f.push(o(f) + "rotate(", null, r) - 2, x: mn(u, d) })) : d && f.push(o(f) + "rotate(" + d + r);
  }
  function a(u, d, f, p) {
    u !== d ? p.push({ i: f.push(o(f) + "skewX(", null, r) - 2, x: mn(u, d) }) : d && f.push(o(f) + "skewX(" + d + r);
  }
  function l(u, d, f, p, h, g) {
    if (u !== f || d !== p) {
      var w = h.push(o(h) + "scale(", null, ",", null, ")");
      g.push({ i: w - 4, x: mn(u, f) }, { i: w - 2, x: mn(d, p) });
    } else (f !== 1 || p !== 1) && h.push(o(h) + "scale(" + f + "," + p + ")");
  }
  return function(u, d) {
    var f = [], p = [];
    return u = e(u), d = e(d), i(u.translateX, u.translateY, d.translateX, d.translateY, f, p), s(u.rotate, d.rotate, f, p), a(u.skewX, d.skewX, f, p), l(u.scaleX, u.scaleY, d.scaleX, d.scaleY, f, p), u = d = null, function(h) {
      for (var g = -1, w = p.length, y; ++g < w; ) f[(y = p[g]).i] = y.x(h);
      return f.join("");
    };
  };
}
var Sm = Md($m, "px, ", "px)", "deg)"), Em = Md(_m, ", ", ")", ")"), Nm = 1e-12;
function ru(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function zm(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function Mm(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const Ni = function e(t, n, r) {
  function o(i, s) {
    var a = i[0], l = i[1], u = i[2], d = s[0], f = s[1], p = s[2], h = d - a, g = f - l, w = h * h + g * g, y, b;
    if (w < Nm)
      b = Math.log(p / u) / t, y = function(A) {
        return [
          a + A * h,
          l + A * g,
          u * Math.exp(t * A * b)
        ];
      };
    else {
      var x = Math.sqrt(w), _ = (p * p - u * u + r * w) / (2 * u * n * x), k = (p * p - u * u - r * w) / (2 * p * n * x), $ = Math.log(Math.sqrt(_ * _ + 1) - _), P = Math.log(Math.sqrt(k * k + 1) - k);
      b = (P - $) / t, y = function(A) {
        var L = A * b, H = ru($), j = u / (n * x) * (H * Mm(t * L + $) - zm($));
        return [
          a + j * h,
          l + j * g,
          u * H / ru(t * L + $)
        ];
      };
    }
    return y.duration = b * 1e3 * t / Math.SQRT2, y;
  }
  return o.rho = function(i) {
    var s = Math.max(1e-3, +i), a = s * s, l = a * a;
    return e(s, a, l);
  }, o;
}(Math.SQRT2, 2, 4);
var no = 0, bo = 0, vo = 0, Pd = 1e3, Wi, xo, Xi = 0, Vr = 0, ks = 0, Ao = typeof performance == "object" && performance.now ? performance : Date, Od = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function rl() {
  return Vr || (Od(Pm), Vr = Ao.now() + ks);
}
function Pm() {
  Vr = 0;
}
function Yi() {
  this._call = this._time = this._next = null;
}
Yi.prototype = Td.prototype = {
  constructor: Yi,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? rl() : +n) + (t == null ? 0 : +t), !this._next && xo !== this && (xo ? xo._next = this : Wi = this, xo = this), this._call = e, this._time = n, ca();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, ca());
  }
};
function Td(e, t, n) {
  var r = new Yi();
  return r.restart(e, t, n), r;
}
function Om() {
  rl(), ++no;
  for (var e = Wi, t; e; )
    (t = Vr - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --no;
}
function ou() {
  Vr = (Xi = Ao.now()) + ks, no = bo = 0;
  try {
    Om();
  } finally {
    no = 0, Vm(), Vr = 0;
  }
}
function Tm() {
  var e = Ao.now(), t = e - Xi;
  t > Pd && (ks -= t, Xi = e);
}
function Vm() {
  for (var e, t = Wi, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : Wi = n);
  xo = e, ca(r);
}
function ca(e) {
  if (!no) {
    bo && (bo = clearTimeout(bo));
    var t = e - Vr;
    t > 24 ? (e < 1 / 0 && (bo = setTimeout(ou, e - Ao.now() - ks)), vo && (vo = clearInterval(vo))) : (vo || (Xi = Ao.now(), vo = setInterval(Tm, Pd)), no = 1, Od(ou));
  }
}
function iu(e, t, n) {
  var r = new Yi();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var Am = bs("start", "end", "cancel", "interrupt"), Lm = [], Vd = 0, su = 1, da = 2, zi = 3, au = 4, fa = 5, Mi = 6;
function Cs(e, t, n, r, o, i) {
  var s = e.__transition;
  if (!s) e.__transition = {};
  else if (n in s) return;
  Dm(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: Am,
    tween: Lm,
    time: i.time,
    delay: i.delay,
    duration: i.duration,
    ease: i.ease,
    timer: null,
    state: Vd
  });
}
function ol(e, t) {
  var n = dn(e, t);
  if (n.state > Vd) throw new Error("too late; already scheduled");
  return n;
}
function Nn(e, t) {
  var n = dn(e, t);
  if (n.state > zi) throw new Error("too late; already running");
  return n;
}
function dn(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function Dm(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = Td(i, 0, n.time);
  function i(u) {
    n.state = su, n.timer.restart(s, n.delay, n.time), n.delay <= u && s(u - n.delay);
  }
  function s(u) {
    var d, f, p, h;
    if (n.state !== su) return l();
    for (d in r)
      if (h = r[d], h.name === n.name) {
        if (h.state === zi) return iu(s);
        h.state === au ? (h.state = Mi, h.timer.stop(), h.on.call("interrupt", e, e.__data__, h.index, h.group), delete r[d]) : +d < t && (h.state = Mi, h.timer.stop(), h.on.call("cancel", e, e.__data__, h.index, h.group), delete r[d]);
      }
    if (iu(function() {
      n.state === zi && (n.state = au, n.timer.restart(a, n.delay, n.time), a(u));
    }), n.state = da, n.on.call("start", e, e.__data__, n.index, n.group), n.state === da) {
      for (n.state = zi, o = new Array(p = n.tween.length), d = 0, f = -1; d < p; ++d)
        (h = n.tween[d].value.call(e, e.__data__, n.index, n.group)) && (o[++f] = h);
      o.length = f + 1;
    }
  }
  function a(u) {
    for (var d = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), n.state = fa, 1), f = -1, p = o.length; ++f < p; )
      o[f].call(e, d);
    n.state === fa && (n.on.call("end", e, e.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = Mi, n.timer.stop(), delete r[t];
    for (var u in r) return;
    delete e.__transition;
  }
}
function Pi(e, t) {
  var n = e.__transition, r, o, i = !0, s;
  if (n) {
    t = t == null ? null : t + "";
    for (s in n) {
      if ((r = n[s]).name !== t) {
        i = !1;
        continue;
      }
      o = r.state > da && r.state < fa, r.state = Mi, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[s];
    }
    i && delete e.__transition;
  }
}
function Hm(e) {
  return this.each(function() {
    Pi(this, e);
  });
}
function Im(e, t) {
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
function jm(e, t, n) {
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
function Rm(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = dn(this.node(), n).tween, o = 0, i = r.length, s; o < i; ++o)
      if ((s = r[o]).name === e)
        return s.value;
    return null;
  }
  return this.each((t == null ? Im : jm)(n, e, t));
}
function il(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = Nn(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return dn(o, r).value[t];
  };
}
function Ad(e, t) {
  var n;
  return (typeof t == "number" ? mn : t instanceof Tr ? Bi : (n = Tr(t)) ? (t = n, Bi) : Ed)(e, t);
}
function Zm(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Km(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Bm(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttribute(e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function Wm(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttributeNS(e.space, e.local);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function Xm(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttribute(e) : (s = this.getAttribute(e), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a)));
  };
}
function Ym(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttributeNS(e.space, e.local) : (s = this.getAttributeNS(e.space, e.local), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a)));
  };
}
function qm(e, t) {
  var n = xs(e), r = n === "transform" ? Em : Ad;
  return this.attrTween(e, typeof t == "function" ? (n.local ? Ym : Xm)(n, r, il(this, "attr." + e, t)) : t == null ? (n.local ? Km : Zm)(n) : (n.local ? Wm : Bm)(n, r, t));
}
function Fm(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function Gm(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function Um(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && Gm(e, i)), n;
  }
  return o._value = t, o;
}
function Jm(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && Fm(e, i)), n;
  }
  return o._value = t, o;
}
function Qm(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = xs(e);
  return this.tween(n, (r.local ? Um : Jm)(r, t));
}
function e0(e, t) {
  return function() {
    ol(this, e).delay = +t.apply(this, arguments);
  };
}
function t0(e, t) {
  return t = +t, function() {
    ol(this, e).delay = t;
  };
}
function n0(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? e0 : t0)(t, e)) : dn(this.node(), t).delay;
}
function r0(e, t) {
  return function() {
    Nn(this, e).duration = +t.apply(this, arguments);
  };
}
function o0(e, t) {
  return t = +t, function() {
    Nn(this, e).duration = t;
  };
}
function i0(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? r0 : o0)(t, e)) : dn(this.node(), t).duration;
}
function s0(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    Nn(this, e).ease = t;
  };
}
function a0(e) {
  var t = this._id;
  return arguments.length ? this.each(s0(t, e)) : dn(this.node(), t).ease;
}
function l0(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    Nn(this, e).ease = n;
  };
}
function u0(e) {
  if (typeof e != "function") throw new Error();
  return this.each(l0(this._id, e));
}
function c0(e) {
  typeof e != "function" && (e = fd(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && a.push(l);
  return new Rn(r, this._parents, this._name, this._id);
}
function d0(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), s = new Array(r), a = 0; a < i; ++a)
    for (var l = t[a], u = n[a], d = l.length, f = s[a] = new Array(d), p, h = 0; h < d; ++h)
      (p = l[h] || u[h]) && (f[h] = p);
  for (; a < r; ++a)
    s[a] = t[a];
  return new Rn(s, this._parents, this._name, this._id);
}
function f0(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function p0(e, t, n) {
  var r, o, i = f0(t) ? ol : Nn;
  return function() {
    var s = i(this, e), a = s.on;
    a !== r && (o = (r = a).copy()).on(t, n), s.on = o;
  };
}
function h0(e, t) {
  var n = this._id;
  return arguments.length < 2 ? dn(this.node(), n).on.on(e) : this.each(p0(n, e, t));
}
function g0(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function v0() {
  return this.on("end.remove", g0(this._id));
}
function m0(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Qa(e));
  for (var r = this._groups, o = r.length, i = new Array(o), s = 0; s < o; ++s)
    for (var a = r[s], l = a.length, u = i[s] = new Array(l), d, f, p = 0; p < l; ++p)
      (d = a[p]) && (f = e.call(d, d.__data__, p, a)) && ("__data__" in d && (f.__data__ = d.__data__), u[p] = f, Cs(u[p], t, n, p, u, dn(d, n)));
  return new Rn(i, this._parents, t, n);
}
function y0(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = dd(e));
  for (var r = this._groups, o = r.length, i = [], s = [], a = 0; a < o; ++a)
    for (var l = r[a], u = l.length, d, f = 0; f < u; ++f)
      if (d = l[f]) {
        for (var p = e.call(d, d.__data__, f, l), h, g = dn(d, n), w = 0, y = p.length; w < y; ++w)
          (h = p[w]) && Cs(h, t, n, w, p, g);
        i.push(p), s.push(d);
      }
  return new Rn(i, s, t, n);
}
var w0 = Go.prototype.constructor;
function b0() {
  return new w0(this._groups, this._parents);
}
function x0(e, t) {
  var n, r, o;
  return function() {
    var i = to(this, e), s = (this.style.removeProperty(e), to(this, e));
    return i === s ? null : i === n && s === r ? o : o = t(n = i, r = s);
  };
}
function Ld(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function k0(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = to(this, e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function C0(e, t, n) {
  var r, o, i;
  return function() {
    var s = to(this, e), a = n(this), l = a + "";
    return a == null && (l = a = (this.style.removeProperty(e), to(this, e))), s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a));
  };
}
function $0(e, t) {
  var n, r, o, i = "style." + t, s = "end." + i, a;
  return function() {
    var l = Nn(this, e), u = l.on, d = l.value[i] == null ? a || (a = Ld(t)) : void 0;
    (u !== n || o !== d) && (r = (n = u).copy()).on(s, o = d), l.on = r;
  };
}
function _0(e, t, n) {
  var r = (e += "") == "transform" ? Sm : Ad;
  return t == null ? this.styleTween(e, x0(e, r)).on("end.style." + e, Ld(e)) : typeof t == "function" ? this.styleTween(e, C0(e, r, il(this, "style." + e, t))).each($0(this._id, e)) : this.styleTween(e, k0(e, r, t), n).on("end.style." + e, null);
}
function S0(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function E0(e, t, n) {
  var r, o;
  function i() {
    var s = t.apply(this, arguments);
    return s !== o && (r = (o = s) && S0(e, s, n)), r;
  }
  return i._value = t, i;
}
function N0(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  return this.tween(r, E0(e, t, n ?? ""));
}
function z0(e) {
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
function P0(e) {
  return this.tween("text", typeof e == "function" ? M0(il(this, "text", e)) : z0(e == null ? "" : e + ""));
}
function O0(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function T0(e) {
  var t, n;
  function r() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && O0(o)), t;
  }
  return r._value = e, r;
}
function V0(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, T0(e));
}
function A0() {
  for (var e = this._name, t = this._id, n = Dd(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, u = 0; u < a; ++u)
      if (l = s[u]) {
        var d = dn(l, t);
        Cs(l, e, n, u, s, {
          time: d.time + d.delay + d.duration,
          delay: 0,
          duration: d.duration,
          ease: d.ease
        });
      }
  return new Rn(r, this._parents, e, n);
}
function L0() {
  var e, t, n = this, r = n._id, o = n.size();
  return new Promise(function(i, s) {
    var a = { value: s }, l = { value: function() {
      --o === 0 && i();
    } };
    n.each(function() {
      var u = Nn(this, r), d = u.on;
      d !== e && (t = (e = d).copy(), t._.cancel.push(a), t._.interrupt.push(a), t._.end.push(l)), u.on = t;
    }), o === 0 && i();
  });
}
var D0 = 0;
function Rn(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function Dd() {
  return ++D0;
}
var zn = Go.prototype;
Rn.prototype = {
  constructor: Rn,
  select: m0,
  selectAll: y0,
  selectChild: zn.selectChild,
  selectChildren: zn.selectChildren,
  filter: c0,
  merge: d0,
  selection: b0,
  transition: A0,
  call: zn.call,
  nodes: zn.nodes,
  node: zn.node,
  size: zn.size,
  empty: zn.empty,
  each: zn.each,
  on: h0,
  attr: qm,
  attrTween: Qm,
  style: _0,
  styleTween: N0,
  text: P0,
  textTween: V0,
  remove: v0,
  tween: Rm,
  delay: n0,
  duration: i0,
  ease: a0,
  easeVarying: u0,
  end: L0,
  [Symbol.iterator]: zn[Symbol.iterator]
};
function H0(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var I0 = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: H0
};
function j0(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function R0(e) {
  var t, n;
  e instanceof Rn ? (t = e._id, e = e._name) : (t = Dd(), (n = I0).time = rl(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && Cs(l, e, t, u, s, n || j0(l, t));
  return new Rn(r, this._parents, e, t);
}
Go.prototype.interrupt = Hm;
Go.prototype.transition = R0;
const gi = (e) => () => e;
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
function Vn(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
Vn.prototype = {
  constructor: Vn,
  scale: function(e) {
    return e === 1 ? this : new Vn(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new Vn(this.k, this.x + this.k * e, this.y + this.k * t);
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
var $s = new Vn(1, 0, 0);
Hd.prototype = Vn.prototype;
function Hd(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return $s;
  return e.__zoom;
}
function Rs(e) {
  e.stopImmediatePropagation();
}
function mo(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function K0(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function B0() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function lu() {
  return this.__zoom || $s;
}
function W0(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function X0() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Y0(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0], o = e.invertX(t[1][0]) - n[1][0], i = e.invertY(t[0][1]) - n[0][1], s = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    s > i ? (i + s) / 2 : Math.min(0, i) || Math.max(0, s)
  );
}
function Id() {
  var e = K0, t = B0, n = Y0, r = W0, o = X0, i = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], a = 250, l = Ni, u = bs("start", "zoom", "end"), d, f, p, h = 500, g = 150, w = 0, y = 10;
  function b(C) {
    C.property("__zoom", lu).on("wheel.zoom", L, { passive: !1 }).on("mousedown.zoom", H).on("dblclick.zoom", j).filter(o).on("touchstart.zoom", V).on("touchmove.zoom", z).on("touchend.zoom touchcancel.zoom", O).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  b.transform = function(C, S, E, I) {
    var W = C.selection ? C.selection() : C;
    W.property("__zoom", lu), C !== W ? $(C, S, E, I) : W.interrupt().each(function() {
      P(this, arguments).event(I).start().zoom(null, typeof S == "function" ? S.apply(this, arguments) : S).end();
    });
  }, b.scaleBy = function(C, S, E, I) {
    b.scaleTo(C, function() {
      var W = this.__zoom.k, q = typeof S == "function" ? S.apply(this, arguments) : S;
      return W * q;
    }, E, I);
  }, b.scaleTo = function(C, S, E, I) {
    b.transform(C, function() {
      var W = t.apply(this, arguments), q = this.__zoom, M = E == null ? k(W) : typeof E == "function" ? E.apply(this, arguments) : E, X = q.invert(M), Q = typeof S == "function" ? S.apply(this, arguments) : S;
      return n(_(x(q, Q), M, X), W, s);
    }, E, I);
  }, b.translateBy = function(C, S, E, I) {
    b.transform(C, function() {
      return n(this.__zoom.translate(
        typeof S == "function" ? S.apply(this, arguments) : S,
        typeof E == "function" ? E.apply(this, arguments) : E
      ), t.apply(this, arguments), s);
    }, null, I);
  }, b.translateTo = function(C, S, E, I, W) {
    b.transform(C, function() {
      var q = t.apply(this, arguments), M = this.__zoom, X = I == null ? k(q) : typeof I == "function" ? I.apply(this, arguments) : I;
      return n($s.translate(X[0], X[1]).scale(M.k).translate(
        typeof S == "function" ? -S.apply(this, arguments) : -S,
        typeof E == "function" ? -E.apply(this, arguments) : -E
      ), q, s);
    }, I, W);
  };
  function x(C, S) {
    return S = Math.max(i[0], Math.min(i[1], S)), S === C.k ? C : new Vn(S, C.x, C.y);
  }
  function _(C, S, E) {
    var I = S[0] - E[0] * C.k, W = S[1] - E[1] * C.k;
    return I === C.x && W === C.y ? C : new Vn(C.k, I, W);
  }
  function k(C) {
    return [(+C[0][0] + +C[1][0]) / 2, (+C[0][1] + +C[1][1]) / 2];
  }
  function $(C, S, E, I) {
    C.on("start.zoom", function() {
      P(this, arguments).event(I).start();
    }).on("interrupt.zoom end.zoom", function() {
      P(this, arguments).event(I).end();
    }).tween("zoom", function() {
      var W = this, q = arguments, M = P(W, q).event(I), X = t.apply(W, q), Q = E == null ? k(X) : typeof E == "function" ? E.apply(W, q) : E, Y = Math.max(X[1][0] - X[0][0], X[1][1] - X[0][1]), Z = W.__zoom, B = typeof S == "function" ? S.apply(W, q) : S, F = l(Z.invert(Q).concat(Y / Z.k), B.invert(Q).concat(Y / B.k));
      return function(ne) {
        if (ne === 1) ne = B;
        else {
          var re = F(ne), J = Y / re[2];
          ne = new Vn(J, Q[0] - re[0] * J, Q[1] - re[1] * J);
        }
        M.zoom(null, ne);
      };
    });
  }
  function P(C, S, E) {
    return !E && C.__zooming || new A(C, S);
  }
  function A(C, S) {
    this.that = C, this.args = S, this.active = 0, this.sourceEvent = null, this.extent = t.apply(C, S), this.taps = 0;
  }
  A.prototype = {
    event: function(C) {
      return C && (this.sourceEvent = C), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(C, S) {
      return this.mouse && C !== "mouse" && (this.mouse[1] = S.invert(this.mouse[0])), this.touch0 && C !== "touch" && (this.touch0[1] = S.invert(this.touch0[0])), this.touch1 && C !== "touch" && (this.touch1[1] = S.invert(this.touch1[0])), this.that.__zoom = S, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(C) {
      var S = Gt(this.that).datum();
      u.call(
        C,
        this.that,
        new Z0(C, {
          sourceEvent: this.sourceEvent,
          target: b,
          transform: this.that.__zoom,
          dispatch: u
        }),
        S
      );
    }
  };
  function L(C, ...S) {
    if (!e.apply(this, arguments)) return;
    var E = P(this, S).event(C), I = this.__zoom, W = Math.max(i[0], Math.min(i[1], I.k * Math.pow(2, r.apply(this, arguments)))), q = nn(C);
    if (E.wheel)
      (E.mouse[0][0] !== q[0] || E.mouse[0][1] !== q[1]) && (E.mouse[1] = I.invert(E.mouse[0] = q)), clearTimeout(E.wheel);
    else {
      if (I.k === W) return;
      E.mouse = [q, I.invert(q)], Pi(this), E.start();
    }
    mo(C), E.wheel = setTimeout(M, g), E.zoom("mouse", n(_(x(I, W), E.mouse[0], E.mouse[1]), E.extent, s));
    function M() {
      E.wheel = null, E.end();
    }
  }
  function H(C, ...S) {
    if (p || !e.apply(this, arguments)) return;
    var E = C.currentTarget, I = P(this, S, !0).event(C), W = Gt(C.view).on("mousemove.zoom", Q, !0).on("mouseup.zoom", Y, !0), q = nn(C, E), M = C.clientX, X = C.clientY;
    kd(C.view), Rs(C), I.mouse = [q, this.__zoom.invert(q)], Pi(this), I.start();
    function Q(Z) {
      if (mo(Z), !I.moved) {
        var B = Z.clientX - M, F = Z.clientY - X;
        I.moved = B * B + F * F > w;
      }
      I.event(Z).zoom("mouse", n(_(I.that.__zoom, I.mouse[0] = nn(Z, E), I.mouse[1]), I.extent, s));
    }
    function Y(Z) {
      W.on("mousemove.zoom mouseup.zoom", null), Cd(Z.view, I.moved), mo(Z), I.event(Z).end();
    }
  }
  function j(C, ...S) {
    if (e.apply(this, arguments)) {
      var E = this.__zoom, I = nn(C.changedTouches ? C.changedTouches[0] : C, this), W = E.invert(I), q = E.k * (C.shiftKey ? 0.5 : 2), M = n(_(x(E, q), I, W), t.apply(this, S), s);
      mo(C), a > 0 ? Gt(this).transition().duration(a).call($, M, I, C) : Gt(this).call(b.transform, M, I, C);
    }
  }
  function V(C, ...S) {
    if (e.apply(this, arguments)) {
      var E = C.touches, I = E.length, W = P(this, S, C.changedTouches.length === I).event(C), q, M, X, Q;
      for (Rs(C), M = 0; M < I; ++M)
        X = E[M], Q = nn(X, this), Q = [Q, this.__zoom.invert(Q), X.identifier], W.touch0 ? !W.touch1 && W.touch0[2] !== Q[2] && (W.touch1 = Q, W.taps = 0) : (W.touch0 = Q, q = !0, W.taps = 1 + !!d);
      d && (d = clearTimeout(d)), q && (W.taps < 2 && (f = Q[0], d = setTimeout(function() {
        d = null;
      }, h)), Pi(this), W.start());
    }
  }
  function z(C, ...S) {
    if (this.__zooming) {
      var E = P(this, S).event(C), I = C.changedTouches, W = I.length, q, M, X, Q;
      for (mo(C), q = 0; q < W; ++q)
        M = I[q], X = nn(M, this), E.touch0 && E.touch0[2] === M.identifier ? E.touch0[0] = X : E.touch1 && E.touch1[2] === M.identifier && (E.touch1[0] = X);
      if (M = E.that.__zoom, E.touch1) {
        var Y = E.touch0[0], Z = E.touch0[1], B = E.touch1[0], F = E.touch1[1], ne = (ne = B[0] - Y[0]) * ne + (ne = B[1] - Y[1]) * ne, re = (re = F[0] - Z[0]) * re + (re = F[1] - Z[1]) * re;
        M = x(M, Math.sqrt(ne / re)), X = [(Y[0] + B[0]) / 2, (Y[1] + B[1]) / 2], Q = [(Z[0] + F[0]) / 2, (Z[1] + F[1]) / 2];
      } else if (E.touch0) X = E.touch0[0], Q = E.touch0[1];
      else return;
      E.zoom("touch", n(_(M, X, Q), E.extent, s));
    }
  }
  function O(C, ...S) {
    if (this.__zooming) {
      var E = P(this, S).event(C), I = C.changedTouches, W = I.length, q, M;
      for (Rs(C), p && clearTimeout(p), p = setTimeout(function() {
        p = null;
      }, h), q = 0; q < W; ++q)
        M = I[q], E.touch0 && E.touch0[2] === M.identifier ? delete E.touch0 : E.touch1 && E.touch1[2] === M.identifier && delete E.touch1;
      if (E.touch1 && !E.touch0 && (E.touch0 = E.touch1, delete E.touch1), E.touch0) E.touch0[1] = this.__zoom.invert(E.touch0[0]);
      else if (E.end(), E.taps === 2 && (M = nn(M, this), Math.hypot(f[0] - M[0], f[1] - M[1]) < y)) {
        var X = Gt(this).on("dblclick.zoom");
        X && X.apply(this, arguments);
      }
    }
  }
  return b.wheelDelta = function(C) {
    return arguments.length ? (r = typeof C == "function" ? C : gi(+C), b) : r;
  }, b.filter = function(C) {
    return arguments.length ? (e = typeof C == "function" ? C : gi(!!C), b) : e;
  }, b.touchable = function(C) {
    return arguments.length ? (o = typeof C == "function" ? C : gi(!!C), b) : o;
  }, b.extent = function(C) {
    return arguments.length ? (t = typeof C == "function" ? C : gi([[+C[0][0], +C[0][1]], [+C[1][0], +C[1][1]]]), b) : t;
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
    return arguments.length ? (y = +C, b) : y;
  }, b;
}
const Lo = {
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
}, pa = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
], jd = ["Enter", " ", "Escape"], q0 = {
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
var ro;
(function(e) {
  e.Strict = "strict", e.Loose = "loose";
})(ro || (ro = {}));
var Nr;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(Nr || (Nr = {}));
var qi;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(qi || (qi = {}));
const ha = {
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
var Tn;
(function(e) {
  e.Bezier = "default", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e.SimpleBezier = "simplebezier";
})(Tn || (Tn = {}));
var Do;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(Do || (Do = {}));
var xe;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(xe || (xe = {}));
const uu = {
  [xe.Left]: xe.Right,
  [xe.Right]: xe.Left,
  [xe.Top]: xe.Bottom,
  [xe.Bottom]: xe.Top
};
function F0(e, t) {
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
function cu(e, t, n) {
  if (!n)
    return;
  const r = [];
  e.forEach((o, i) => {
    t?.has(i) || r.push(o);
  }), r.length && n(r);
}
function G0(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const Rd = (e) => "id" in e && "source" in e && "target" in e, U0 = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), sl = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), Jo = (e, t = [0, 0]) => {
  const { width: n, height: r } = gr(e), o = e.origin ?? t, i = n * o[0], s = r * o[1];
  return {
    x: e.position.x - i,
    y: e.position.y - s
  };
}, J0 = (e, t = { nodeOrigin: [0, 0] }) => {
  if (e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = e.reduce((r, o) => {
    const i = typeof o == "string";
    let s = !t.nodeLookup && !i ? o : void 0;
    t.nodeLookup && (s = i ? t.nodeLookup.get(o) : sl(o) ? o : t.nodeLookup.get(o.id));
    const a = s ? Fi(s, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return _s(r, a);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return Ss(n);
}, Qo = (e, t = {}) => {
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 }, r = !1;
  return e.forEach((o) => {
    (t.filter === void 0 || t.filter(o)) && (n = _s(n, Fi(o)), r = !0);
  }), r ? Ss(n) : { x: 0, y: 0, width: 0, height: 0 };
}, al = (e, t, [n, r, o] = [0, 0, 1], i = !1, s = !1) => {
  const a = {
    ...ti(t, [n, r, o]),
    width: t.width / o,
    height: t.height / o
  }, l = [];
  for (const u of e.values()) {
    const { measured: d, selectable: f = !0, hidden: p = !1 } = u;
    if (s && !f || p)
      continue;
    const h = d.width ?? u.width ?? u.initialWidth ?? null, g = d.height ?? u.height ?? u.initialHeight ?? null, w = Ho(a, io(u)), y = (h ?? 0) * (g ?? 0), b = i && w > 0;
    (!u.internals.handleBounds || b || w >= y || u.dragging) && l.push(u);
  }
  return l;
}, Q0 = (e, t) => {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    n.add(r.id);
  }), t.filter((r) => n.has(r.source) || n.has(r.target));
};
function ey(e, t) {
  const n = /* @__PURE__ */ new Map(), r = t?.nodes ? new Set(t.nodes.map((o) => o.id)) : null;
  return e.forEach((o) => {
    o.measured.width && o.measured.height && (t?.includeHiddenNodes || !o.hidden) && (!r || r.has(o.id)) && n.set(o.id, o);
  }), n;
}
async function ty({ nodes: e, width: t, height: n, panZoom: r, minZoom: o, maxZoom: i }, s) {
  if (e.size === 0)
    return Promise.resolve(!0);
  const a = ey(e, s), l = Qo(a), u = ll(l, t, n, s?.minZoom ?? o, s?.maxZoom ?? i, s?.padding ?? 0.1);
  return await r.setViewport(u, {
    duration: s?.duration,
    ease: s?.ease,
    interpolate: s?.interpolate
  }), Promise.resolve(!0);
}
function Zd({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
  const s = n.get(e), a = s.parentId ? n.get(s.parentId) : void 0, { x: l, y: u } = a ? a.internals.positionAbsolute : { x: 0, y: 0 }, d = s.origin ?? r;
  let f = s.extent || o;
  if (s.extent === "parent" && !s.expandParent)
    if (!a)
      i?.("005", Lo.error005());
    else {
      const h = a.measured.width, g = a.measured.height;
      h && g && (f = [
        [l, u],
        [l + h, u + g]
      ]);
    }
  else a && so(s.extent) && (f = [
    [s.extent[0][0] + l, s.extent[0][1] + u],
    [s.extent[1][0] + l, s.extent[1][1] + u]
  ]);
  const p = so(f) ? Ar(t, f, s.measured) : t;
  return (s.measured.width === void 0 || s.measured.height === void 0) && i?.("015", Lo.error015()), {
    position: {
      x: p.x - l + (s.measured.width ?? 0) * d[0],
      y: p.y - u + (s.measured.height ?? 0) * d[1]
    },
    positionAbsolute: p
  };
}
async function ny({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: r, onBeforeDelete: o }) {
  const i = new Set(e.map((f) => f.id)), s = [];
  for (const f of n) {
    if (f.deletable === !1)
      continue;
    const p = i.has(f.id), h = !p && f.parentId && s.find((g) => g.id === f.parentId);
    (p || h) && s.push(f);
  }
  const a = new Set(t.map((f) => f.id)), l = r.filter((f) => f.deletable !== !1), u = Q0(s, l);
  for (const f of l)
    a.has(f.id) && !u.find((p) => p.id === f.id) && u.push(f);
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
const oo = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), Ar = (e = { x: 0, y: 0 }, t, n) => ({
  x: oo(e.x, t[0][0], t[1][0] - (n?.width ?? 0)),
  y: oo(e.y, t[0][1], t[1][1] - (n?.height ?? 0))
});
function Kd(e, t, n) {
  const { width: r, height: o } = gr(n), { x: i, y: s } = n.internals.positionAbsolute;
  return Ar(e, [
    [i, s],
    [i + r, s + o]
  ], t);
}
const du = (e, t, n) => e < t ? oo(Math.abs(e - t), 1, t) / t : e > n ? -oo(Math.abs(e - n), 1, t) / t : 0, Bd = (e, t, n = 15, r = 40) => {
  const o = du(e.x, r, t.width - r) * n, i = du(e.y, r, t.height - r) * n;
  return [o, i];
}, _s = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), ga = ({ x: e, y: t, width: n, height: r }) => ({
  x: e,
  y: t,
  x2: e + n,
  y2: t + r
}), Ss = ({ x: e, y: t, x2: n, y2: r }) => ({
  x: e,
  y: t,
  width: n - e,
  height: r - t
}), io = (e, t = [0, 0]) => {
  const { x: n, y: r } = sl(e) ? e.internals.positionAbsolute : Jo(e, t);
  return {
    x: n,
    y: r,
    width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
    height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
  };
}, Fi = (e, t = [0, 0]) => {
  const { x: n, y: r } = sl(e) ? e.internals.positionAbsolute : Jo(e, t);
  return {
    x: n,
    y: r,
    x2: n + (e.measured?.width ?? e.width ?? e.initialWidth ?? 0),
    y2: r + (e.measured?.height ?? e.height ?? e.initialHeight ?? 0)
  };
}, Wd = (e, t) => Ss(_s(ga(e), ga(t))), Ho = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, fu = (e) => An(e.width) && An(e.height) && An(e.x) && An(e.y), An = (e) => !isNaN(e) && isFinite(e), ry = (e, t) => {
}, ei = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), ti = ({ x: e, y: t }, [n, r, o], i = !1, s = [1, 1]) => {
  const a = {
    x: (e - n) / o,
    y: (t - r) / o
  };
  return i ? ei(a, s) : a;
}, Gi = ({ x: e, y: t }, [n, r, o]) => ({
  x: e * o + n,
  y: t * o + r
});
function Br(e, t) {
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
function oy(e, t, n) {
  if (typeof e == "string" || typeof e == "number") {
    const r = Br(e, n), o = Br(e, t);
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
    const r = Br(e.top ?? e.y ?? 0, n), o = Br(e.bottom ?? e.y ?? 0, n), i = Br(e.left ?? e.x ?? 0, t), s = Br(e.right ?? e.x ?? 0, t);
    return { top: r, right: s, bottom: o, left: i, x: i + s, y: r + o };
  }
  return { top: 0, right: 0, bottom: 0, left: 0, x: 0, y: 0 };
}
function iy(e, t, n, r, o, i) {
  const { x: s, y: a } = Gi(e, [t, n, r]), { x: l, y: u } = Gi({ x: e.x + e.width, y: e.y + e.height }, [t, n, r]), d = o - l, f = i - u;
  return {
    left: Math.floor(s),
    top: Math.floor(a),
    right: Math.floor(d),
    bottom: Math.floor(f)
  };
}
const ll = (e, t, n, r, o, i) => {
  const s = oy(i, t, n), a = (t - s.x) / e.width, l = (n - s.y) / e.height, u = Math.min(a, l), d = oo(u, r, o), f = e.x + e.width / 2, p = e.y + e.height / 2, h = t / 2 - f * d, g = n / 2 - p * d, w = iy(e, h, g, d, t, n), y = {
    left: Math.min(w.left - s.left, 0),
    top: Math.min(w.top - s.top, 0),
    right: Math.min(w.right - s.right, 0),
    bottom: Math.min(w.bottom - s.bottom, 0)
  };
  return {
    x: h - y.left + y.right,
    y: g - y.top + y.bottom,
    zoom: d
  };
}, Cr = () => typeof navigator < "u" && navigator?.userAgent?.indexOf("Mac") >= 0;
function so(e) {
  return e != null && e !== "parent";
}
function gr(e) {
  return {
    width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
    height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
  };
}
function Xd(e) {
  return (e.measured?.width ?? e.width ?? e.initialWidth) !== void 0 && (e.measured?.height ?? e.height ?? e.initialHeight) !== void 0;
}
function sy(e, t = { width: 0, height: 0 }, n, r, o) {
  const i = { ...e }, s = r.get(n);
  if (s) {
    const a = s.origin || o;
    i.x += s.internals.positionAbsolute.x - (t.width ?? 0) * a[0], i.y += s.internals.positionAbsolute.y - (t.height ?? 0) * a[1];
  }
  return i;
}
function ay(e) {
  return { ...q0, ...e || {} };
}
function Zs(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: i, y: s } = sn(e), a = ti({ x: i - (o?.left ?? 0), y: s - (o?.top ?? 0) }, r), { x: l, y: u } = n ? ei(a, t) : a;
  return {
    xSnapped: l,
    ySnapped: u,
    ...a
  };
}
const Yd = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), qd = (e) => e?.getRootNode?.() || window?.document, ly = ["INPUT", "SELECT", "TEXTAREA"];
function Fd(e) {
  const t = e.composedPath?.()?.[0] || e.target;
  return t?.nodeType !== 1 ? !1 : ly.includes(t.nodeName) || t.hasAttribute("contenteditable") || !!t.closest(".nokey");
}
const Gd = (e) => "clientX" in e, sn = (e, t) => {
  const n = Gd(e), r = n ? e.clientX : e.touches?.[0].clientX, o = n ? e.clientY : e.touches?.[0].clientY;
  return {
    x: r - (t?.left ?? 0),
    y: o - (t?.top ?? 0)
  };
}, pu = (e, t, n, r, o) => {
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
      ...Yd(s)
    };
  });
};
function uy({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: o, sourceControlY: i, targetControlX: s, targetControlY: a }) {
  const l = e * 0.125 + o * 0.375 + s * 0.375 + n * 0.125, u = t * 0.125 + i * 0.375 + a * 0.375 + r * 0.125, d = Math.abs(l - e), f = Math.abs(u - t);
  return [l, u, d, f];
}
function vi(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function hu({ pos: e, x1: t, y1: n, x2: r, y2: o, c: i }) {
  switch (e) {
    case xe.Left:
      return [t - vi(t - r, i), n];
    case xe.Right:
      return [t + vi(r - t, i), n];
    case xe.Top:
      return [t, n - vi(n - o, i)];
    case xe.Bottom:
      return [t, n + vi(o - n, i)];
  }
}
function Ud({ sourceX: e, sourceY: t, sourcePosition: n = xe.Bottom, targetX: r, targetY: o, targetPosition: i = xe.Top, curvature: s = 0.25 }) {
  const [a, l] = hu({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: o,
    c: s
  }), [u, d] = hu({
    pos: i,
    x1: r,
    y1: o,
    x2: e,
    y2: t,
    c: s
  }), [f, p, h, g] = uy({
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
    f,
    p,
    h,
    g
  ];
}
function Jd({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const o = Math.abs(n - e) / 2, i = n < e ? n + o : n - o, s = Math.abs(r - t) / 2, a = r < t ? r + s : r - s;
  return [i, a, o, s];
}
function cy({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r, elevateOnSelect: o = !1 }) {
  if (r !== void 0)
    return r;
  const i = o && n ? 1e3 : 0, s = Math.max(e.parentId || o && e.selected ? e.internals.z : 0, t.parentId || o && t.selected ? t.internals.z : 0);
  return i + s;
}
function dy({ sourceNode: e, targetNode: t, width: n, height: r, transform: o }) {
  const i = _s(Fi(e), Fi(t));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const s = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return Ho(s, Ss(i)) > 0;
}
const fy = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, py = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), hy = (e, t) => {
  if (!e.source || !e.target)
    return t;
  let n;
  return Rd(e) ? n = { ...e } : n = {
    ...e,
    id: fy(e)
  }, py(n, t) ? t : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, t.concat(n));
};
function Qd({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const [o, i, s, a] = Jd({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: r
  });
  return [`M ${e},${t}L ${n},${r}`, o, i, s, a];
}
const gu = {
  [xe.Left]: { x: -1, y: 0 },
  [xe.Right]: { x: 1, y: 0 },
  [xe.Top]: { x: 0, y: -1 },
  [xe.Bottom]: { x: 0, y: 1 }
}, gy = ({ source: e, sourcePosition: t = xe.Bottom, target: n }) => t === xe.Left || t === xe.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, vu = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function vy({ source: e, sourcePosition: t = xe.Bottom, target: n, targetPosition: r = xe.Top, center: o, offset: i, stepPosition: s }) {
  const a = gu[t], l = gu[r], u = { x: e.x + a.x * i, y: e.y + a.y * i }, d = { x: n.x + l.x * i, y: n.y + l.y * i }, f = gy({
    source: u,
    sourcePosition: t,
    target: d
  }), p = f.x !== 0 ? "x" : "y", h = f[p];
  let g = [], w, y;
  const b = { x: 0, y: 0 }, x = { x: 0, y: 0 }, [, , _, k] = Jd({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (a[p] * l[p] === -1) {
    p === "x" ? (w = o.x ?? u.x + (d.x - u.x) * s, y = o.y ?? (u.y + d.y) / 2) : (w = o.x ?? (u.x + d.x) / 2, y = o.y ?? u.y + (d.y - u.y) * s);
    const $ = [
      { x: w, y: u.y },
      { x: w, y: d.y }
    ], P = [
      { x: u.x, y },
      { x: d.x, y }
    ];
    a[p] === h ? g = p === "x" ? $ : P : g = p === "x" ? P : $;
  } else {
    const $ = [{ x: u.x, y: d.y }], P = [{ x: d.x, y: u.y }];
    if (p === "x" ? g = a.x === h ? P : $ : g = a.y === h ? $ : P, t === r) {
      const V = Math.abs(e[p] - n[p]);
      if (V <= i) {
        const z = Math.min(i - 1, i - V);
        a[p] === h ? b[p] = (u[p] > e[p] ? -1 : 1) * z : x[p] = (d[p] > n[p] ? -1 : 1) * z;
      }
    }
    if (t !== r) {
      const V = p === "x" ? "y" : "x", z = a[p] === l[V], O = u[V] > d[V], C = u[V] < d[V];
      (a[p] === 1 && (!z && O || z && C) || a[p] !== 1 && (!z && C || z && O)) && (g = p === "x" ? $ : P);
    }
    const A = { x: u.x + b.x, y: u.y + b.y }, L = { x: d.x + x.x, y: d.y + x.y }, H = Math.max(Math.abs(A.x - g[0].x), Math.abs(L.x - g[0].x)), j = Math.max(Math.abs(A.y - g[0].y), Math.abs(L.y - g[0].y));
    H >= j ? (w = (A.x + L.x) / 2, y = g[0].y) : (w = g[0].x, y = (A.y + L.y) / 2);
  }
  return [[
    e,
    { x: u.x + b.x, y: u.y + b.y },
    ...g,
    { x: d.x + x.x, y: d.y + x.y },
    n
  ], w, y, _, k];
}
function my(e, t, n, r) {
  const o = Math.min(vu(e, t) / 2, vu(t, n) / 2, r), { x: i, y: s } = t;
  if (e.x === i && i === n.x || e.y === s && s === n.y)
    return `L${i} ${s}`;
  if (e.y === s) {
    const u = e.x < n.x ? -1 : 1, d = e.y < n.y ? 1 : -1;
    return `L ${i + o * u},${s}Q ${i},${s} ${i},${s + o * d}`;
  }
  const a = e.x < n.x ? 1 : -1, l = e.y < n.y ? -1 : 1;
  return `L ${i},${s + o * l}Q ${i},${s} ${i + o * a},${s}`;
}
function ul({ sourceX: e, sourceY: t, sourcePosition: n = xe.Bottom, targetX: r, targetY: o, targetPosition: i = xe.Top, borderRadius: s = 5, centerX: a, centerY: l, offset: u = 20, stepPosition: d = 0.5 }) {
  const [f, p, h, g, w] = vy({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: a, y: l },
    offset: u,
    stepPosition: d
  });
  return [f.reduce((y, b, x) => {
    let _ = "";
    return x > 0 && x < f.length - 1 ? _ = my(f[x - 1], b, f[x + 1], s) : _ = `${x === 0 ? "M" : "L"}${b.x} ${b.y}`, y += _, y;
  }, ""), p, h, g, w];
}
function mu(e) {
  return e && !!(e.internals.handleBounds || e.handles?.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function yy(e) {
  const { sourceNode: t, targetNode: n } = e;
  if (!mu(t) || !mu(n))
    return null;
  const r = t.internals.handleBounds || yu(t.handles), o = n.internals.handleBounds || yu(n.handles), i = wu(r?.source ?? [], e.sourceHandle), s = wu(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === ro.Strict ? o?.target ?? [] : (o?.target ?? []).concat(o?.source ?? []),
    e.targetHandle
  );
  if (!i || !s)
    return e.onError?.("008", Lo.error008(i ? "target" : "source", {
      id: e.id,
      sourceHandle: e.sourceHandle,
      targetHandle: e.targetHandle
    })), null;
  const a = i?.position || xe.Bottom, l = s?.position || xe.Top, u = Io(t, i, a), d = Io(n, s, l);
  return {
    sourceX: u.x,
    sourceY: u.y,
    targetX: d.x,
    targetY: d.y,
    sourcePosition: a,
    targetPosition: l
  };
}
function yu(e) {
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
function Io(e, t, n = xe.Left, r = !1) {
  const o = (t?.x ?? 0) + e.internals.positionAbsolute.x, i = (t?.y ?? 0) + e.internals.positionAbsolute.y, { width: s, height: a } = t ?? gr(e);
  if (r)
    return { x: o + s / 2, y: i + a / 2 };
  switch (t?.position ?? n) {
    case xe.Top:
      return { x: o + s / 2, y: i };
    case xe.Right:
      return { x: o + s, y: i + a / 2 };
    case xe.Bottom:
      return { x: o + s / 2, y: i + a };
    case xe.Left:
      return { x: o, y: i + a / 2 };
  }
}
function wu(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function va(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((n) => `${n}=${e[n]}`).join("&")}` : "";
}
function wy(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const i = /* @__PURE__ */ new Set();
  return e.reduce((s, a) => ([a.markerStart || r, a.markerEnd || o].forEach((l) => {
    if (l && typeof l == "object") {
      const u = va(l, t);
      i.has(u) || (s.push({ id: u, color: l.color || n, ...l }), i.add(u));
    }
  }), s), []).sort((s, a) => s.id.localeCompare(a.id));
}
function by(e, t, n, r, o) {
  let i = 0.5;
  o === "start" ? i = 0 : o === "end" && (i = 1);
  let s = [
    (e.x + e.width * i) * t.zoom + t.x,
    e.y * t.zoom + t.y - r
  ], a = [-100 * i, -100];
  switch (n) {
    case xe.Right:
      s = [
        (e.x + e.width) * t.zoom + t.x + r,
        (e.y + e.height * i) * t.zoom + t.y
      ], a = [0, -100 * i];
      break;
    case xe.Bottom:
      s[1] = (e.y + e.height) * t.zoom + t.y + r, a[1] = 0;
      break;
    case xe.Left:
      s = [
        e.x * t.zoom + t.x - r,
        (e.y + e.height * i) * t.zoom + t.y
      ], a = [-100, -100 * i];
      break;
  }
  return `translate(${s[0]}px, ${s[1]}px) translate(${a[0]}%, ${a[1]}%)`;
}
const ef = 1e3, xy = 10, cl = {
  nodeOrigin: [0, 0],
  nodeExtent: pa,
  elevateNodesOnSelect: !0,
  defaults: {}
}, ky = {
  ...cl,
  checkEquality: !0
};
function dl(e, t) {
  const n = { ...e };
  for (const r in t)
    t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function Cy(e, t, n) {
  const r = dl(cl, n);
  for (const o of e.values())
    if (o.parentId)
      fl(o, e, t, r);
    else {
      const i = Jo(o, r.nodeOrigin), s = so(o.extent) ? o.extent : r.nodeExtent, a = Ar(i, s, gr(o));
      o.internals.positionAbsolute = a;
    }
}
function $y(e, t) {
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
function _y(e, t, n, r) {
  const o = dl(ky, r);
  let i = { i: -1 }, s = e.length > 0;
  const a = new Map(t), l = o?.elevateNodesOnSelect ? ef : 0;
  t.clear(), n.clear();
  for (const u of e) {
    let d = a.get(u.id);
    if (o.checkEquality && u === d?.internals.userNode)
      t.set(u.id, d);
    else {
      const f = Jo(u, o.nodeOrigin), p = so(u.extent) ? u.extent : o.nodeExtent, h = Ar(f, p, gr(u));
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
          handleBounds: $y(u, d),
          z: tf(u, l),
          userNode: u
        }
      }, t.set(u.id, d);
    }
    (d.measured === void 0 || d.measured.width === void 0 || d.measured.height === void 0) && !d.hidden && (s = !1), u.parentId && fl(d, t, n, r, i);
  }
  return s;
}
function Sy(e, t) {
  if (!e.parentId)
    return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function fl(e, t, n, r, o) {
  const { elevateNodesOnSelect: i, nodeOrigin: s, nodeExtent: a } = dl(cl, r), l = e.parentId, u = t.get(l);
  if (!u) {
    console.warn(`Parent node ${l} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  Sy(e, n), o && !u.parentId && u.internals.rootParentIndex === void 0 && (u.internals.rootParentIndex = ++o.i, u.internals.z = u.internals.z + o.i * xy), o && u.internals.rootParentIndex !== void 0 && (o.i = u.internals.rootParentIndex);
  const d = i ? ef : 0, { x: f, y: p, z: h } = Ey(e, u, s, a, d), { positionAbsolute: g } = e.internals, w = f !== g.x || p !== g.y;
  (w || h !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: w ? { x: f, y: p } : g,
      z: h
    }
  });
}
function tf(e, t) {
  return (An(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function Ey(e, t, n, r, o) {
  const { x: i, y: s } = t.internals.positionAbsolute, a = gr(e), l = Jo(e, n), u = so(e.extent) ? Ar(l, e.extent, a) : l;
  let d = Ar({ x: i + u.x, y: s + u.y }, r, a);
  e.extent === "parent" && (d = Kd(d, a, t));
  const f = tf(e, o), p = t.internals.z ?? 0;
  return {
    x: d.x,
    y: d.y,
    z: p >= f ? p + 1 : f
  };
}
function Ny(e, t, n, r = [0, 0]) {
  const o = [], i = /* @__PURE__ */ new Map();
  for (const s of e) {
    const a = t.get(s.parentId);
    if (!a)
      continue;
    const l = i.get(s.parentId)?.expandedRect ?? io(a), u = Wd(l, s.rect);
    i.set(s.parentId, { expandedRect: u, parent: a });
  }
  return i.size > 0 && i.forEach(({ expandedRect: s, parent: a }, l) => {
    const u = a.internals.positionAbsolute, d = gr(a), f = a.origin ?? r, p = s.x < u.x ? Math.round(Math.abs(u.x - s.x)) : 0, h = s.y < u.y ? Math.round(Math.abs(u.y - s.y)) : 0, g = Math.max(d.width, Math.round(s.width)), w = Math.max(d.height, Math.round(s.height)), y = (g - d.width) * f[0], b = (w - d.height) * f[1];
    (p > 0 || h > 0 || y || b) && (o.push({
      id: l,
      type: "position",
      position: {
        x: a.position.x - p + y,
        y: a.position.y - h + b
      }
    }), n.get(l)?.forEach((x) => {
      e.some((_) => _.id === x.id) || o.push({
        id: x.id,
        type: "position",
        position: {
          x: x.position.x + p,
          y: x.position.y + h
        }
      });
    })), (d.width < s.width || d.height < s.height || p || h) && o.push({
      id: l,
      type: "dimensions",
      setAttributes: !0,
      dimensions: {
        width: g + (p ? f[0] * p - y : 0),
        height: w + (h ? f[1] * h - b : 0)
      }
    });
  }), o;
}
function zy(e, t, n, r, o, i) {
  const s = r?.querySelector(".xyflow__viewport");
  let a = !1;
  if (!s)
    return { changes: [], updatedInternals: a };
  const l = [], u = window.getComputedStyle(s), { m22: d } = new window.DOMMatrixReadOnly(u.transform), f = [];
  for (const p of e.values()) {
    const h = t.get(p.id);
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
    const g = Yd(p.nodeElement), w = h.measured.width !== g.width || h.measured.height !== g.height;
    if (g.width && g.height && (w || !h.internals.handleBounds || p.force)) {
      const y = p.nodeElement.getBoundingClientRect(), b = so(h.extent) ? h.extent : i;
      let { positionAbsolute: x } = h.internals;
      h.parentId && h.extent === "parent" ? x = Kd(x, g, t.get(h.parentId)) : b && (x = Ar(x, b, g));
      const _ = {
        ...h,
        measured: g,
        internals: {
          ...h.internals,
          positionAbsolute: x,
          handleBounds: {
            source: pu("source", p.nodeElement, y, d, h.id),
            target: pu("target", p.nodeElement, y, d, h.id)
          }
        }
      };
      t.set(h.id, _), h.parentId && fl(_, t, n, { nodeOrigin: o }), a = !0, w && (l.push({
        id: h.id,
        type: "dimensions",
        dimensions: g
      }), h.expandParent && h.parentId && f.push({
        id: h.id,
        parentId: h.parentId,
        rect: io(_, o)
      }));
    }
  }
  if (f.length > 0) {
    const p = Ny(f, t, n, o);
    l.push(...p);
  }
  return { changes: l, updatedInternals: a };
}
async function My({ delta: e, panZoom: t, transform: n, translateExtent: r, width: o, height: i }) {
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
function bu(e, t, n, r, o, i) {
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
function Py(e, t, n) {
  e.clear(), t.clear();
  for (const r of n) {
    const { source: o, target: i, sourceHandle: s = null, targetHandle: a = null } = r, l = { edgeId: r.id, source: o, target: i, sourceHandle: s, targetHandle: a }, u = `${o}-${s}--${i}-${a}`, d = `${i}-${a}--${o}-${s}`;
    bu("source", l, d, e, o, s), bu("target", l, u, e, i, a), t.set(r.id, r);
  }
}
function Oy(e, t) {
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
function nf(e, t) {
  if (!e.parentId)
    return !1;
  const n = t.get(e.parentId);
  return n ? n.selected ? !0 : nf(n, t) : !1;
}
function xu(e, t, n) {
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
function Ty(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  for (const [i, s] of e)
    if ((s.selected || s.id === r) && (!s.parentId || !nf(s, e)) && (s.draggable || t && typeof s.draggable > "u")) {
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
function Ks({ nodeId: e, dragItems: t, nodeLookup: n, dragging: r = !0 }) {
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
function Vy({ dragItems: e, snapGrid: t, x: n, y: r }) {
  const o = e.values().next().value;
  if (!o)
    return null;
  const i = {
    x: n - o.distance.x,
    y: r - o.distance.y
  }, s = ei(i, t);
  return {
    x: s.x - i.x,
    y: s.y - i.y
  };
}
function Ay({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: o }) {
  let i = { x: null, y: null }, s = 0, a = /* @__PURE__ */ new Map(), l = !1, u = { x: 0, y: 0 }, d = null, f = !1, p = null, h = !1, g = !1, w = null;
  function y({ noDragClassName: x, handleSelector: _, domNode: k, isSelectable: $, nodeId: P, nodeClickDistance: A = 0 }) {
    p = Gt(k);
    function L({ x: z, y: O }) {
      const { nodeLookup: C, nodeExtent: S, snapGrid: E, snapToGrid: I, nodeOrigin: W, onNodeDrag: q, onSelectionDrag: M, onError: X, updateNodePositions: Q } = t();
      i = { x: z, y: O };
      let Y = !1;
      const Z = a.size > 1, B = Z && S ? ga(Qo(a)) : null, F = Z && I ? Vy({
        dragItems: a,
        snapGrid: E,
        x: z,
        y: O
      }) : null;
      for (const [ne, re] of a) {
        if (!C.has(ne))
          continue;
        let J = { x: z - re.distance.x, y: O - re.distance.y };
        I && (J = F ? {
          x: Math.round(J.x + F.x),
          y: Math.round(J.y + F.y)
        } : ei(J, E));
        let he = null;
        if (Z && S && !re.extent && B) {
          const { positionAbsolute: ae } = re.internals, pe = ae.x - B.x + S[0][0], be = ae.x + re.measured.width - B.x2 + S[1][0], ke = ae.y - B.y + S[0][1], de = ae.y + re.measured.height - B.y2 + S[1][1];
          he = [
            [pe, ke],
            [be, de]
          ];
        }
        const { position: ce, positionAbsolute: oe } = Zd({
          nodeId: ne,
          nextPosition: J,
          nodeLookup: C,
          nodeExtent: he || S,
          nodeOrigin: W,
          onError: X
        });
        Y = Y || re.position.x !== ce.x || re.position.y !== ce.y, re.position = ce, re.internals.positionAbsolute = oe;
      }
      if (g = g || Y, !!Y && (Q(a, !0), w && (r || q || !P && M))) {
        const [ne, re] = Ks({
          nodeId: P,
          dragItems: a,
          nodeLookup: C
        });
        r?.(w, a, ne, re), q?.(w, ne, re), P || M?.(w, re);
      }
    }
    async function H() {
      if (!d)
        return;
      const { transform: z, panBy: O, autoPanSpeed: C, autoPanOnNodeDrag: S } = t();
      if (!S) {
        l = !1, cancelAnimationFrame(s);
        return;
      }
      const [E, I] = Bd(u, d, C);
      (E !== 0 || I !== 0) && (i.x = (i.x ?? 0) - E / z[2], i.y = (i.y ?? 0) - I / z[2], await O({ x: E, y: I }) && L(i)), s = requestAnimationFrame(H);
    }
    function j(z) {
      const { nodeLookup: O, multiSelectionActive: C, nodesDraggable: S, transform: E, snapGrid: I, snapToGrid: W, selectNodesOnDrag: q, onNodeDragStart: M, onSelectionDragStart: X, unselectNodesAndEdges: Q } = t();
      f = !0, (!q || !$) && !C && P && (O.get(P)?.selected || Q()), $ && q && P && e?.(P);
      const Y = Zs(z.sourceEvent, { transform: E, snapGrid: I, snapToGrid: W, containerBounds: d });
      if (i = Y, a = Ty(O, S, Y, P), a.size > 0 && (n || M || !P && X)) {
        const [Z, B] = Ks({
          nodeId: P,
          dragItems: a,
          nodeLookup: O
        });
        n?.(z.sourceEvent, a, Z, B), M?.(z.sourceEvent, Z, B), P || X?.(z.sourceEvent, B);
      }
    }
    const V = tm().clickDistance(A).on("start", (z) => {
      const { domNode: O, nodeDragThreshold: C, transform: S, snapGrid: E, snapToGrid: I } = t();
      d = O?.getBoundingClientRect() || null, h = !1, g = !1, w = z.sourceEvent, C === 0 && j(z), i = Zs(z.sourceEvent, { transform: S, snapGrid: E, snapToGrid: I, containerBounds: d }), u = sn(z.sourceEvent, d);
    }).on("drag", (z) => {
      const { autoPanOnNodeDrag: O, transform: C, snapGrid: S, snapToGrid: E, nodeDragThreshold: I, nodeLookup: W } = t(), q = Zs(z.sourceEvent, { transform: C, snapGrid: S, snapToGrid: E, containerBounds: d });
      if (w = z.sourceEvent, (z.sourceEvent.type === "touchmove" && z.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      P && !W.has(P)) && (h = !0), !h) {
        if (!l && O && f && (l = !0, H()), !f) {
          const M = sn(z.sourceEvent, d), X = M.x - u.x, Q = M.y - u.y;
          Math.sqrt(X * X + Q * Q) > I && j(z);
        }
        (i.x !== q.xSnapped || i.y !== q.ySnapped) && a && f && (u = sn(z.sourceEvent, d), L(q));
      }
    }).on("end", (z) => {
      if (!(!f || h) && (l = !1, f = !1, cancelAnimationFrame(s), a.size > 0)) {
        const { nodeLookup: O, updateNodePositions: C, onNodeDragStop: S, onSelectionDragStop: E } = t();
        if (g && (C(a, !1), g = !1), o || S || !P && E) {
          const [I, W] = Ks({
            nodeId: P,
            dragItems: a,
            nodeLookup: O,
            dragging: !1
          });
          o?.(z.sourceEvent, a, I, W), S?.(z.sourceEvent, I, W), P || E?.(z.sourceEvent, W);
        }
      }
    }).filter((z) => {
      const O = z.target;
      return !z.button && (!x || !xu(O, `.${x}`, k)) && (!_ || xu(O, _, k));
    });
    p.call(V);
  }
  function b() {
    p?.on(".drag", null);
  }
  return {
    update: y,
    destroy: b
  };
}
function Ly(e, t, n) {
  const r = [], o = {
    x: e.x - n,
    y: e.y - n,
    width: n * 2,
    height: n * 2
  };
  for (const i of t.values())
    Ho(o, io(i)) > 0 && r.push(i);
  return r;
}
const Dy = 250;
function Hy(e, t, n, r) {
  let o = [], i = 1 / 0;
  const s = Ly(e, n, t + Dy);
  for (const a of s) {
    const l = [...a.internals.handleBounds?.source ?? [], ...a.internals.handleBounds?.target ?? []];
    for (const u of l) {
      if (r.nodeId === u.nodeId && r.type === u.type && r.id === u.id)
        continue;
      const { x: d, y: f } = Io(a, u, u.position, !0), p = Math.sqrt(Math.pow(d - e.x, 2) + Math.pow(f - e.y, 2));
      p > t || (p < i ? (o = [{ ...u, x: d, y: f }], i = p) : p === i && o.push({ ...u, x: d, y: f }));
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
function rf(e, t, n, r, o, i = !1) {
  const s = r.get(e);
  if (!s)
    return null;
  const a = o === "strict" ? s.internals.handleBounds?.[t] : [...s.internals.handleBounds?.source ?? [], ...s.internals.handleBounds?.target ?? []], l = (n ? a?.find((u) => u.id === n) : a?.[0]) ?? null;
  return l && i ? { ...l, ...Io(s, l, l.position, !0) } : l;
}
function of(e, t) {
  return e || (t?.classList.contains("target") ? "target" : t?.classList.contains("source") ? "source" : null);
}
function Iy(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const sf = () => !0;
function jy(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: s, domNode: a, nodeLookup: l, lib: u, autoPanOnConnect: d, flowId: f, panBy: p, cancelConnection: h, onConnectStart: g, onConnect: w, onConnectEnd: y, isValidConnection: b = sf, onReconnectEnd: x, updateConnection: _, getTransform: k, getFromHandle: $, autoPanSpeed: P, dragThreshold: A = 1, handleDomNode: L }) {
  const H = qd(e.target);
  let j = 0, V;
  const { x: z, y: O } = sn(e), C = of(i, L), S = a?.getBoundingClientRect();
  let E = !1;
  if (!S || !C)
    return;
  const I = rf(o, C, r, l, t);
  if (!I)
    return;
  let W = sn(e, S), q = !1, M = null, X = !1, Q = null;
  function Y() {
    if (!d || !S)
      return;
    const [he, ce] = Bd(W, S, P);
    p({ x: he, y: ce }), j = requestAnimationFrame(Y);
  }
  const Z = {
    ...I,
    nodeId: o,
    type: C,
    position: I.position
  }, B = l.get(o);
  let F = {
    inProgress: !0,
    isValid: null,
    from: Io(B, Z, xe.Left, !0),
    fromHandle: Z,
    fromPosition: Z.position,
    fromNode: B,
    to: W,
    toHandle: null,
    toPosition: uu[Z.position],
    toNode: null,
    pointer: W
  };
  function ne() {
    E = !0, _(F), g?.(e, { nodeId: o, handleId: r, handleType: C });
  }
  A === 0 && ne();
  function re(he) {
    if (!E) {
      const { x: pe, y: be } = sn(he), ke = pe - z, de = be - O;
      if (!(ke * ke + de * de > A * A))
        return;
      ne();
    }
    if (!$() || !Z) {
      J(he);
      return;
    }
    const ce = k();
    W = sn(he, S), V = Hy(ti(W, ce, !1, [1, 1]), n, l, Z), q || (Y(), q = !0);
    const oe = af(he, {
      handle: V,
      connectionMode: t,
      fromNodeId: o,
      fromHandleId: r,
      fromType: s ? "target" : "source",
      isValidConnection: b,
      doc: H,
      lib: u,
      flowId: f,
      nodeLookup: l
    });
    Q = oe.handleDomNode, M = oe.connection, X = Iy(!!V, oe.isValid);
    const ae = {
      // from stays the same
      ...F,
      isValid: X,
      to: oe.toHandle && X ? Gi({ x: oe.toHandle.x, y: oe.toHandle.y }, ce) : W,
      toHandle: oe.toHandle,
      toPosition: X && oe.toHandle ? oe.toHandle.position : uu[Z.position],
      toNode: oe.toHandle ? l.get(oe.toHandle.nodeId) : null,
      pointer: W
    };
    _(ae), F = ae;
  }
  function J(he) {
    if (!("touches" in he && he.touches.length > 0)) {
      if (E) {
        (V || Q) && M && X && w?.(M);
        const { inProgress: ce, ...oe } = F, ae = {
          ...oe,
          toPosition: F.toHandle ? F.toPosition : null
        };
        y?.(he, ae), i && x?.(he, ae);
      }
      h(), cancelAnimationFrame(j), q = !1, X = !1, M = null, Q = null, H.removeEventListener("mousemove", re), H.removeEventListener("mouseup", J), H.removeEventListener("touchmove", re), H.removeEventListener("touchend", J);
    }
  }
  H.addEventListener("mousemove", re), H.addEventListener("mouseup", J), H.addEventListener("touchmove", re), H.addEventListener("touchend", J);
}
function af(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: s, lib: a, flowId: l, isValidConnection: u = sf, nodeLookup: d }) {
  const f = i === "target", p = t ? s.querySelector(`.${a}-flow__handle[data-id="${l}-${t?.nodeId}-${t?.id}-${t?.type}"]`) : null, { x: h, y: g } = sn(e), w = s.elementFromPoint(h, g), y = w?.classList.contains(`${a}-flow__handle`) ? w : p, b = {
    handleDomNode: y,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (y) {
    const x = of(void 0, y), _ = y.getAttribute("data-nodeid"), k = y.getAttribute("data-handleid"), $ = y.classList.contains("connectable"), P = y.classList.contains("connectableend");
    if (!_ || !x)
      return b;
    const A = {
      source: f ? _ : r,
      sourceHandle: f ? k : o,
      target: f ? r : _,
      targetHandle: f ? o : k
    };
    b.connection = A;
    const L = $ && P && (n === ro.Strict ? f && x === "source" || !f && x === "target" : _ !== r || k !== o);
    b.isValid = L && u(A), b.toHandle = rf(_, x, k, d, n, !0);
  }
  return b;
}
const ku = {
  onPointerDown: jy,
  isValid: af
};
function Ry({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = Gt(e);
  function i({ translateExtent: a, width: l, height: u, zoomStep: d = 1, pannable: f = !0, zoomable: p = !0, inversePan: h = !1 }) {
    const g = (_) => {
      if (_.sourceEvent.type !== "wheel" || !t)
        return;
      const k = n(), $ = _.sourceEvent.ctrlKey && Cr() ? 10 : 1, P = -_.sourceEvent.deltaY * (_.sourceEvent.deltaMode === 1 ? 0.05 : _.sourceEvent.deltaMode ? 1 : 2e-3) * d, A = k[2] * Math.pow(2, P * $);
      t.scaleTo(A);
    };
    let w = [0, 0];
    const y = (_) => {
      (_.sourceEvent.type === "mousedown" || _.sourceEvent.type === "touchstart") && (w = [
        _.sourceEvent.clientX ?? _.sourceEvent.touches[0].clientX,
        _.sourceEvent.clientY ?? _.sourceEvent.touches[0].clientY
      ]);
    }, b = (_) => {
      const k = n();
      if (_.sourceEvent.type !== "mousemove" && _.sourceEvent.type !== "touchmove" || !t)
        return;
      const $ = [
        _.sourceEvent.clientX ?? _.sourceEvent.touches[0].clientX,
        _.sourceEvent.clientY ?? _.sourceEvent.touches[0].clientY
      ], P = [$[0] - w[0], $[1] - w[1]];
      w = $;
      const A = r() * Math.max(k[2], Math.log(k[2])) * (h ? -1 : 1), L = {
        x: k[0] - P[0] * A,
        y: k[1] - P[1] * A
      }, H = [
        [0, 0],
        [l, u]
      ];
      t.setViewportConstrained({
        x: L.x,
        y: L.y,
        zoom: k[2]
      }, H, a);
    }, x = Id().on("start", y).on("zoom", f ? b : null).on("zoom.wheel", p ? g : null);
    o.call(x, {});
  }
  function s() {
    o.on("zoom", null);
  }
  return {
    update: i,
    destroy: s,
    pointer: nn
  };
}
const Es = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), Bs = ({ x: e, y: t, zoom: n }) => $s.translate(e, t).scale(n), Xr = (e, t) => e.target.closest(`.${t}`), lf = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), Zy = (e) => ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2, Ws = (e, t = 0, n = Zy, r = () => {
}) => {
  const o = typeof t == "number" && t > 0;
  return o || r(), o ? e.transition().duration(t).ease(n).on("end", r) : e;
}, uf = (e) => {
  const t = e.ctrlKey && Cr() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function Ky({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: s, onPanZoomStart: a, onPanZoom: l, onPanZoomEnd: u }) {
  return (d) => {
    if (Xr(d, t))
      return d.ctrlKey && d.preventDefault(), !1;
    d.preventDefault(), d.stopImmediatePropagation();
    const f = n.property("__zoom").k || 1;
    if (d.ctrlKey && s) {
      const y = nn(d), b = uf(d), x = f * Math.pow(2, b);
      r.scaleTo(n, x, y, d);
      return;
    }
    const p = d.deltaMode === 1 ? 20 : 1;
    let h = o === Nr.Vertical ? 0 : d.deltaX * p, g = o === Nr.Horizontal ? 0 : d.deltaY * p;
    !Cr() && d.shiftKey && o !== Nr.Vertical && (h = d.deltaY * p, g = 0), r.translateBy(
      n,
      -(h / f) * i,
      -(g / f) * i,
      // @ts-ignore
      { internal: !0 }
    );
    const w = Es(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling ? (l?.(d, w), e.panScrollTimeout = setTimeout(() => {
      u?.(d, w), e.isPanScrolling = !1;
    }, 150)) : (e.isPanScrolling = !0, a?.(d, w));
  };
}
function By({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(r, o) {
    const i = r.type === "wheel", s = !t && i && !r.ctrlKey, a = Xr(r, e);
    if (r.ctrlKey && i && a && r.preventDefault(), s || a)
      return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function Wy({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (r) => {
    if (r.sourceEvent?.internal)
      return;
    const o = Es(r.transform);
    e.mouseButton = r.sourceEvent?.button || 0, e.isZoomingOrPanning = !0, e.prevViewport = o, r.sourceEvent?.type === "mousedown" && t(!0), n && n?.(r.sourceEvent, o);
  };
}
function Xy({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (i) => {
    e.usedRightMouseButton = !!(n && lf(t, e.mouseButton ?? 0)), i.sourceEvent?.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !i.sourceEvent?.internal && o?.(i.sourceEvent, Es(i.transform));
  };
}
function Yy({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (s) => {
    if (!s.sourceEvent?.internal && (e.isZoomingOrPanning = !1, i && lf(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && s.sourceEvent && i(s.sourceEvent), e.usedRightMouseButton = !1, r(!1), o)) {
      const a = Es(s.transform);
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
function qy({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: r, panOnScroll: o, zoomOnDoubleClick: i, userSelectionActive: s, noWheelClassName: a, noPanClassName: l, lib: u, connectionInProgress: d }) {
  return (f) => {
    const p = e || t, h = n && f.ctrlKey, g = f.type === "wheel";
    if (f.button === 1 && f.type === "mousedown" && (Xr(f, `${u}-flow__node`) || Xr(f, `${u}-flow__edge`)))
      return !0;
    if (!r && !p && !o && !i && !n || s || d && !g || Xr(f, a) && g || Xr(f, l) && (!g || o && g && !e) || !n && f.ctrlKey && g)
      return !1;
    if (!n && f.type === "touchstart" && f.touches?.length > 1)
      return f.preventDefault(), !1;
    if (!p && !o && !h && g || !r && (f.type === "mousedown" || f.type === "touchstart") || Array.isArray(r) && !r.includes(f.button) && f.type === "mousedown")
      return !1;
    const w = Array.isArray(r) && r.includes(f.button) || !f.button || f.button <= 1;
    return (!f.ctrlKey || g) && w;
  };
}
function Fy({ domNode: e, minZoom: t, maxZoom: n, translateExtent: r, viewport: o, onPanZoom: i, onPanZoomStart: s, onPanZoomEnd: a, onDraggingChange: l }) {
  const u = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: {},
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, d = e.getBoundingClientRect(), f = Id().scaleExtent([t, n]).translateExtent(r), p = Gt(e).call(f);
  x({
    x: o.x,
    y: o.y,
    zoom: oo(o.zoom, t, n)
  }, [
    [0, 0],
    [d.width, d.height]
  ], r);
  const h = p.on("wheel.zoom"), g = p.on("dblclick.zoom");
  f.wheelDelta(uf);
  function w(V, z) {
    return p ? new Promise((O) => {
      f?.interpolate(z?.interpolate === "linear" ? Eo : Ni).transform(Ws(p, z?.duration, z?.ease, () => O(!0)), V);
    }) : Promise.resolve(!1);
  }
  function y({ noWheelClassName: V, noPanClassName: z, onPaneContextMenu: O, userSelectionActive: C, panOnScroll: S, panOnDrag: E, panOnScrollMode: I, panOnScrollSpeed: W, preventScrolling: q, zoomOnPinch: M, zoomOnScroll: X, zoomOnDoubleClick: Q, zoomActivationKeyPressed: Y, lib: Z, onTransformChange: B, connectionInProgress: F, paneClickDistance: ne, selectionOnDrag: re }) {
    C && !u.isZoomingOrPanning && b();
    const J = S && !Y && !C;
    f.clickDistance(re ? 1 / 0 : !An(ne) || ne < 0 ? 0 : ne);
    const he = J ? Ky({
      zoomPanValues: u,
      noWheelClassName: V,
      d3Selection: p,
      d3Zoom: f,
      panOnScrollMode: I,
      panOnScrollSpeed: W,
      zoomOnPinch: M,
      onPanZoomStart: s,
      onPanZoom: i,
      onPanZoomEnd: a
    }) : By({
      noWheelClassName: V,
      preventScrolling: q,
      d3ZoomHandler: h
    });
    if (p.on("wheel.zoom", he, { passive: !1 }), !C) {
      const oe = Wy({
        zoomPanValues: u,
        onDraggingChange: l,
        onPanZoomStart: s
      });
      f.on("start", oe);
      const ae = Xy({
        zoomPanValues: u,
        panOnDrag: E,
        onPaneContextMenu: !!O,
        onPanZoom: i,
        onTransformChange: B
      });
      f.on("zoom", ae);
      const pe = Yy({
        zoomPanValues: u,
        panOnDrag: E,
        panOnScroll: S,
        onPaneContextMenu: O,
        onPanZoomEnd: a,
        onDraggingChange: l
      });
      f.on("end", pe);
    }
    const ce = qy({
      zoomActivationKeyPressed: Y,
      panOnDrag: E,
      zoomOnScroll: X,
      panOnScroll: S,
      zoomOnDoubleClick: Q,
      zoomOnPinch: M,
      userSelectionActive: C,
      noPanClassName: z,
      noWheelClassName: V,
      lib: Z,
      connectionInProgress: F
    });
    f.filter(ce), Q ? p.on("dblclick.zoom", g) : p.on("dblclick.zoom", null);
  }
  function b() {
    f.on("zoom", null);
  }
  async function x(V, z, O) {
    const C = Bs(V), S = f?.constrain()(C, z, O);
    return S && await w(S), new Promise((E) => E(S));
  }
  async function _(V, z) {
    const O = Bs(V);
    return await w(O, z), new Promise((C) => C(O));
  }
  function k(V) {
    if (p) {
      const z = Bs(V), O = p.property("__zoom");
      (O.k !== V.zoom || O.x !== V.x || O.y !== V.y) && f?.transform(p, z, null, { sync: !0 });
    }
  }
  function $() {
    const V = p ? Hd(p.node()) : { x: 0, y: 0, k: 1 };
    return { x: V.x, y: V.y, zoom: V.k };
  }
  function P(V, z) {
    return p ? new Promise((O) => {
      f?.interpolate(z?.interpolate === "linear" ? Eo : Ni).scaleTo(Ws(p, z?.duration, z?.ease, () => O(!0)), V);
    }) : Promise.resolve(!1);
  }
  function A(V, z) {
    return p ? new Promise((O) => {
      f?.interpolate(z?.interpolate === "linear" ? Eo : Ni).scaleBy(Ws(p, z?.duration, z?.ease, () => O(!0)), V);
    }) : Promise.resolve(!1);
  }
  function L(V) {
    f?.scaleExtent(V);
  }
  function H(V) {
    f?.translateExtent(V);
  }
  function j(V) {
    const z = !An(V) || V < 0 ? 0 : V;
    f?.clickDistance(z);
  }
  return {
    update: y,
    destroy: b,
    setViewport: _,
    setViewportConstrained: x,
    getViewport: $,
    scaleTo: P,
    scaleBy: A,
    setScaleExtent: L,
    setTranslateExtent: H,
    syncViewport: k,
    setClickDistance: j
  };
}
var Cu;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(Cu || (Cu = {}));
var Gy = /* @__PURE__ */ ee("<div><!></div>");
function ur(e, t) {
  le(t, !0);
  let n = m(t, "id", 7, null), r = m(t, "type", 7, "source"), o = m(t, "position", 23, () => xe.Top), i = m(t, "style", 7), s = m(t, "class", 7), a = m(t, "isConnectable", 7), l = m(t, "isConnectableStart", 7, !0), u = m(t, "isConnectableEnd", 7, !0), d = m(t, "isValidConnection", 7), f = m(t, "onconnect", 7), p = m(t, "ondisconnect", 7), h = m(t, "children", 7), g = /* @__PURE__ */ De(t, [
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
  const w = ln("svelteflow__node_id"), y = ln("svelteflow__node_connectable");
  let b = /* @__PURE__ */ N(() => r() === "target"), x = /* @__PURE__ */ N(() => a() !== void 0 ? a() : y.value), _ = fn(), k = /* @__PURE__ */ N(() => _.ariaLabelConfig), $ = null;
  jt(() => {
    if (f() || p()) {
      _.edges;
      let M = _.connectionLookup.get(`${w}-${r()}${n() ? `-${n()}` : ""}`);
      if ($ && !F0(M, $)) {
        const X = M ?? /* @__PURE__ */ new Map();
        cu($, X, p()), cu(X, $, f());
      }
      $ = new Map(M);
    }
  });
  let P = /* @__PURE__ */ N(() => {
    if (!_.connection.inProgress)
      return [!1, !1, !1, !1, null];
    const { fromHandle: M, toHandle: X, isValid: Q } = _.connection, Y = M && M.nodeId === w && M.type === r() && M.id === n(), Z = X && X.nodeId === w && X.type === r() && X.id === n(), B = _.connectionMode === ro.Strict ? M?.type !== r() : w !== M?.nodeId || n() !== M?.id;
    return [
      !0,
      Y,
      Z,
      B,
      Z && Q
    ];
  }), A = /* @__PURE__ */ N(() => lo(c(P), 5)), L = /* @__PURE__ */ N(() => c(A)[0]), H = /* @__PURE__ */ N(() => c(A)[1]), j = /* @__PURE__ */ N(() => c(A)[2]), V = /* @__PURE__ */ N(() => c(A)[3]), z = /* @__PURE__ */ N(() => c(A)[4]);
  function O(M) {
    const X = _.onbeforeconnect ? _.onbeforeconnect(M) : M;
    X && (_.addEdge(X), _.onconnect?.(M));
  }
  function C(M) {
    const X = Gd(M);
    M.currentTarget && (X && M.button === 0 || !X) && ku.onPointerDown(M, {
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
      onConnect: O,
      onConnectStart: (Q, Y) => {
        _.onconnectstart?.(Q, {
          nodeId: Y.nodeId,
          handleId: Y.handleId,
          handleType: Y.handleType
        });
      },
      onConnectEnd: (Q, Y) => {
        _.onconnectend?.(Q, Y);
      },
      getTransform: () => [_.viewport.x, _.viewport.y, _.viewport.zoom],
      getFromHandle: () => _.connection.fromHandle,
      dragThreshold: _.connectionDragThreshold,
      handleDomNode: M.currentTarget
    });
  }
  function S(M) {
    if (!w || !_.clickConnectStartHandle && !l())
      return;
    if (!_.clickConnectStartHandle) {
      _.onclickconnectstart?.(M, { nodeId: w, handleId: n(), handleType: r() }), _.clickConnectStartHandle = { nodeId: w, type: r(), id: n() };
      return;
    }
    const X = qd(M.target), Q = d() ?? _.isValidConnection, { connectionMode: Y, clickConnectStartHandle: Z, flowId: B, nodeLookup: F } = _, { connection: ne, isValid: re } = ku.isValid(M, {
      handle: { nodeId: w, id: n(), type: r() },
      connectionMode: Y,
      fromNodeId: Z.nodeId,
      fromHandleId: Z.id ?? null,
      fromType: Z.type,
      isValidConnection: Q,
      flowId: B,
      doc: X,
      lib: "svelte",
      nodeLookup: F
    });
    re && ne && O(ne);
    const J = structuredClone(Ra(_.connection));
    delete J.inProgress, J.toPosition = J.toHandle ? J.toHandle.position : null, _.onclickconnectend?.(M, J), _.clickConnectStartHandle = null;
  }
  var E = {
    get id() {
      return n();
    },
    set id(M = null) {
      n(M), v();
    },
    get type() {
      return r();
    },
    set type(M = "source") {
      r(M), v();
    },
    get position() {
      return o();
    },
    set position(M = xe.Top) {
      o(M), v();
    },
    get style() {
      return i();
    },
    set style(M) {
      i(M), v();
    },
    get class() {
      return s();
    },
    set class(M) {
      s(M), v();
    },
    get isConnectable() {
      return a();
    },
    set isConnectable(M) {
      a(M), v();
    },
    get isConnectableStart() {
      return l();
    },
    set isConnectableStart(M = !0) {
      l(M), v();
    },
    get isConnectableEnd() {
      return u();
    },
    set isConnectableEnd(M = !0) {
      u(M), v();
    },
    get isValidConnection() {
      return d();
    },
    set isValidConnection(M) {
      d(M), v();
    },
    get onconnect() {
      return f();
    },
    set onconnect(M) {
      f(M), v();
    },
    get ondisconnect() {
      return p();
    },
    set ondisconnect(M) {
      p(M), v();
    },
    get children() {
      return h();
    },
    set children(M) {
      h(M), v();
    }
  }, I = Gy(), W = () => {
  };
  Ge(I, () => ({
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
    onclick: _.clickConnect ? S : void 0,
    onkeypress: W,
    style: i(),
    role: "button",
    "aria-label": c(k)["handle.ariaLabel"],
    tabindex: "-1",
    ...g,
    [er]: {
      valid: c(z),
      connectingto: c(j),
      connectingfrom: c(H),
      source: !c(b),
      target: c(b),
      connectablestart: l(),
      connectableend: u(),
      connectable: c(x),
      connectionindicator: c(x) && (!c(L) || c(V)) && (c(L) || _.clickConnectStartHandle ? u() : l())
    }
  }));
  var q = K(I);
  return Ye(q, () => h() ?? tt), R(I), T(e, I), ue(E);
}
se(
  ur,
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
var Uy = /* @__PURE__ */ ee("<!> <!>", 1);
function pl(e, t) {
  le(t, !0);
  let n = m(t, "data", 7), r = m(t, "targetPosition", 23, () => xe.Top), o = m(t, "sourcePosition", 23, () => xe.Bottom);
  var i = {
    get data() {
      return n();
    },
    set data(d) {
      n(d), v();
    },
    get targetPosition() {
      return r();
    },
    set targetPosition(d = xe.Top) {
      r(d), v();
    },
    get sourcePosition() {
      return o();
    },
    set sourcePosition(d = xe.Bottom) {
      o(d), v();
    }
  }, s = Uy(), a = te(s);
  ur(a, {
    type: "target",
    get position() {
      return r();
    }
  });
  var l = D(a), u = D(l);
  return ur(u, {
    type: "source",
    get position() {
      return o();
    }
  }), Se(() => qe(l, ` ${n()?.label ?? ""} `)), T(e, s), ue(i);
}
se(pl, { data: {}, targetPosition: {}, sourcePosition: {} }, [], [], !0);
var Jy = /* @__PURE__ */ ee(" <!>", 1);
function cf(e, t) {
  le(t, !0);
  let n = m(t, "data", 23, () => ({ label: "Node" })), r = m(t, "sourcePosition", 23, () => xe.Bottom);
  var o = {
    get data() {
      return n();
    },
    set data(l = { label: "Node" }) {
      n(l), v();
    },
    get sourcePosition() {
      return r();
    },
    set sourcePosition(l = xe.Bottom) {
      r(l), v();
    }
  };
  ye();
  var i = Jy(), s = te(i), a = D(s);
  return ur(a, {
    type: "source",
    get position() {
      return r();
    }
  }), Se(() => qe(s, `${n()?.label ?? ""} `)), T(e, i), ue(o);
}
se(cf, { data: {}, sourcePosition: {} }, [], [], !0);
var Qy = /* @__PURE__ */ ee(" <!>", 1);
function df(e, t) {
  le(t, !0);
  let n = m(t, "data", 23, () => ({ label: "Node" })), r = m(t, "targetPosition", 23, () => xe.Top);
  var o = {
    get data() {
      return n();
    },
    set data(l = { label: "Node" }) {
      n(l), v();
    },
    get targetPosition() {
      return r();
    },
    set targetPosition(l = xe.Top) {
      r(l), v();
    }
  };
  ye();
  var i = Qy(), s = te(i), a = D(s);
  return ur(a, {
    type: "target",
    get position() {
      return r();
    }
  }), Se(() => qe(s, `${n()?.label ?? ""} `)), T(e, i), ue(o);
}
se(df, { data: {}, targetPosition: {} }, [], [], !0);
function ff(e, t) {
}
se(ff, {}, [], [], !0);
function Xs(e, t, n) {
  if (!n || !t)
    return;
  const r = n === "root" ? t : t.querySelector(`.svelte-flow__${n}`);
  r && r.appendChild(e);
}
function pf(e, t) {
  const n = /* @__PURE__ */ N(fn), r = /* @__PURE__ */ N(() => c(n).domNode);
  let o;
  return c(r) ? Xs(e, c(r), t) : o = fo(() => {
    Ue(() => {
      Xs(e, c(r), t), o?.();
    });
  }), {
    async update(i) {
      Xs(e, c(r), i);
    },
    destroy() {
      e.parentNode && e.parentNode.removeChild(e), o?.();
    }
  };
}
function hf() {
  let e = /* @__PURE__ */ Ne(typeof window > "u");
  if (c(e)) {
    const t = fo(() => {
      Ue(() => {
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
const $u = (e) => U0(e), e2 = (e) => Rd(e);
function _n(e) {
  return e === void 0 ? void 0 : `${e}px`;
}
const Ui = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
};
var t2 = /* @__PURE__ */ ee("<div><!></div>");
const n2 = {
  hash: "svelte-herprs",
  code: ".transparent.svelte-herprs {background:transparent;}"
};
function gf(e, t) {
  le(t, !0), Be(e, n2);
  let n = m(t, "x", 7, 0), r = m(t, "y", 7, 0), o = m(t, "width", 7), i = m(t, "height", 7), s = m(t, "selectEdgeOnClick", 7, !1), a = m(t, "transparent", 7, !1), l = m(t, "class", 7), u = m(t, "children", 7), d = /* @__PURE__ */ De(t, [
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
  const f = fn(), p = ln("svelteflow__edge_id");
  if (!p)
    throw new Error("EdgeLabel must be used within an edge");
  let h = /* @__PURE__ */ N(() => f.visible.edges.get(p)?.zIndex);
  var g = {
    get x() {
      return n();
    },
    set x(x = 0) {
      n(x), v();
    },
    get y() {
      return r();
    },
    set y(x = 0) {
      r(x), v();
    },
    get width() {
      return o();
    },
    set width(x) {
      o(x), v();
    },
    get height() {
      return i();
    },
    set height(x) {
      i(x), v();
    },
    get selectEdgeOnClick() {
      return s();
    },
    set selectEdgeOnClick(x = !1) {
      s(x), v();
    },
    get transparent() {
      return a();
    },
    set transparent(x = !1) {
      a(x), v();
    },
    get class() {
      return l();
    },
    set class(x) {
      l(x), v();
    },
    get children() {
      return u();
    },
    set children(x) {
      u(x), v();
    }
  }, w = t2(), y = () => {
    s() && f.handleEdgeSelection(p);
  };
  Ge(
    w,
    (x) => ({
      class: [
        "svelte-flow__edge-label",
        { transparent: a() },
        l()
      ],
      tabindex: "-1",
      onclick: y,
      ...d,
      [yn]: x
    }),
    [
      () => ({
        display: hf().value ? "none" : void 0,
        cursor: s() ? "pointer" : void 0,
        transform: `translate(-50%, -50%) translate(${n() ?? ""}px,${r() ?? ""}px)`,
        "pointer-events": "all",
        width: _n(o()),
        height: _n(i()),
        "z-index": c(h)
      })
    ],
    void 0,
    void 0,
    "svelte-herprs"
  );
  var b = K(w);
  return Ye(b, () => u() ?? tt), R(w), kt(w, (x, _) => pf?.(x, _), () => "edge-labels"), T(e, w), ue(g);
}
se(
  gf,
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
var r2 = /* @__PURE__ */ me("<path></path>"), o2 = /* @__PURE__ */ me('<path fill="none"></path><!><!>', 1);
function ni(e, t) {
  le(t, !0);
  let n = m(t, "id", 7), r = m(t, "path", 7), o = m(t, "label", 7), i = m(t, "labelX", 7), s = m(t, "labelY", 7), a = m(t, "labelStyle", 7), l = m(t, "markerStart", 7), u = m(t, "markerEnd", 7), d = m(t, "style", 7), f = m(t, "interactionWidth", 7, 20), p = m(t, "class", 7), h = /* @__PURE__ */ De(t, [
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
  var g = {
    get id() {
      return n();
    },
    set id($) {
      n($), v();
    },
    get path() {
      return r();
    },
    set path($) {
      r($), v();
    },
    get label() {
      return o();
    },
    set label($) {
      o($), v();
    },
    get labelX() {
      return i();
    },
    set labelX($) {
      i($), v();
    },
    get labelY() {
      return s();
    },
    set labelY($) {
      s($), v();
    },
    get labelStyle() {
      return a();
    },
    set labelStyle($) {
      a($), v();
    },
    get markerStart() {
      return l();
    },
    set markerStart($) {
      l($), v();
    },
    get markerEnd() {
      return u();
    },
    set markerEnd($) {
      u($), v();
    },
    get style() {
      return d();
    },
    set style($) {
      d($), v();
    },
    get interactionWidth() {
      return f();
    },
    set interactionWidth($ = 20) {
      f($), v();
    },
    get class() {
      return p();
    },
    set class($) {
      p($), v();
    }
  }, w = o2(), y = te(w), b = D(y);
  {
    var x = ($) => {
      var P = r2();
      Ge(P, () => ({
        d: r(),
        "stroke-opacity": 0,
        "stroke-width": f(),
        fill: "none",
        class: "svelte-flow__edge-interaction",
        ...h
      })), T($, P);
    };
    ie(b, ($) => {
      f() > 0 && $(x);
    });
  }
  var _ = D(b);
  {
    var k = ($) => {
      gf($, {
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
        children: (P, A) => {
          ye();
          var L = Ee();
          Se(() => qe(L, o())), T(P, L);
        },
        $$slots: { default: !0 }
      });
    };
    ie(_, ($) => {
      o() && $(k);
    });
  }
  return Se(() => {
    $e(y, "id", n()), $e(y, "d", r()), Ht(y, 0, Yn(["svelte-flow__edge-path", p()])), $e(y, "marker-start", l()), $e(y, "marker-end", u()), wt(y, d());
  }), T(e, w), ue(g);
}
se(
  ni,
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
function hl(e, t) {
  le(t, !0);
  let n = m(t, "id", 7), r = m(t, "interactionWidth", 7), o = m(t, "label", 7), i = m(t, "labelStyle", 7), s = m(t, "markerEnd", 7), a = m(t, "markerStart", 7), l = m(t, "pathOptions", 7), u = m(t, "sourcePosition", 7), d = m(t, "sourceX", 7), f = m(t, "sourceY", 7), p = m(t, "style", 7), h = m(t, "targetPosition", 7), g = m(t, "targetX", 7), w = m(t, "targetY", 7), y = /* @__PURE__ */ N(() => Ud({
    sourceX: d(),
    sourceY: f(),
    targetX: g(),
    targetY: w(),
    sourcePosition: u(),
    targetPosition: h(),
    curvature: l()?.curvature
  })), b = /* @__PURE__ */ N(() => lo(c(y), 3)), x = /* @__PURE__ */ N(() => c(b)[0]), _ = /* @__PURE__ */ N(() => c(b)[1]), k = /* @__PURE__ */ N(() => c(b)[2]);
  var $ = {
    get id() {
      return n();
    },
    set id(P) {
      n(P), v();
    },
    get interactionWidth() {
      return r();
    },
    set interactionWidth(P) {
      r(P), v();
    },
    get label() {
      return o();
    },
    set label(P) {
      o(P), v();
    },
    get labelStyle() {
      return i();
    },
    set labelStyle(P) {
      i(P), v();
    },
    get markerEnd() {
      return s();
    },
    set markerEnd(P) {
      s(P), v();
    },
    get markerStart() {
      return a();
    },
    set markerStart(P) {
      a(P), v();
    },
    get pathOptions() {
      return l();
    },
    set pathOptions(P) {
      l(P), v();
    },
    get sourcePosition() {
      return u();
    },
    set sourcePosition(P) {
      u(P), v();
    },
    get sourceX() {
      return d();
    },
    set sourceX(P) {
      d(P), v();
    },
    get sourceY() {
      return f();
    },
    set sourceY(P) {
      f(P), v();
    },
    get style() {
      return p();
    },
    set style(P) {
      p(P), v();
    },
    get targetPosition() {
      return h();
    },
    set targetPosition(P) {
      h(P), v();
    },
    get targetX() {
      return g();
    },
    set targetX(P) {
      g(P), v();
    },
    get targetY() {
      return w();
    },
    set targetY(P) {
      w(P), v();
    }
  };
  return ni(e, {
    get id() {
      return n();
    },
    get path() {
      return c(x);
    },
    get labelX() {
      return c(_);
    },
    get labelY() {
      return c(k);
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
  }), ue($);
}
se(
  hl,
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
function vf(e, t) {
  le(t, !0);
  let n = m(t, "interactionWidth", 7), r = m(t, "label", 7), o = m(t, "labelStyle", 7), i = m(t, "style", 7), s = m(t, "markerEnd", 7), a = m(t, "markerStart", 7), l = m(t, "sourcePosition", 7), u = m(t, "sourceX", 7), d = m(t, "sourceY", 7), f = m(t, "targetPosition", 7), p = m(t, "targetX", 7), h = m(t, "targetY", 7), g = /* @__PURE__ */ N(() => ul({
    sourceX: u(),
    sourceY: d(),
    targetX: p(),
    targetY: h(),
    sourcePosition: l(),
    targetPosition: f()
  })), w = /* @__PURE__ */ N(() => lo(c(g), 3)), y = /* @__PURE__ */ N(() => c(w)[0]), b = /* @__PURE__ */ N(() => c(w)[1]), x = /* @__PURE__ */ N(() => c(w)[2]);
  var _ = {
    get interactionWidth() {
      return n();
    },
    set interactionWidth(k) {
      n(k), v();
    },
    get label() {
      return r();
    },
    set label(k) {
      r(k), v();
    },
    get labelStyle() {
      return o();
    },
    set labelStyle(k) {
      o(k), v();
    },
    get style() {
      return i();
    },
    set style(k) {
      i(k), v();
    },
    get markerEnd() {
      return s();
    },
    set markerEnd(k) {
      s(k), v();
    },
    get markerStart() {
      return a();
    },
    set markerStart(k) {
      a(k), v();
    },
    get sourcePosition() {
      return l();
    },
    set sourcePosition(k) {
      l(k), v();
    },
    get sourceX() {
      return u();
    },
    set sourceX(k) {
      u(k), v();
    },
    get sourceY() {
      return d();
    },
    set sourceY(k) {
      d(k), v();
    },
    get targetPosition() {
      return f();
    },
    set targetPosition(k) {
      f(k), v();
    },
    get targetX() {
      return p();
    },
    set targetX(k) {
      p(k), v();
    },
    get targetY() {
      return h();
    },
    set targetY(k) {
      h(k), v();
    }
  };
  return ni(e, {
    get path() {
      return c(y);
    },
    get labelX() {
      return c(b);
    },
    get labelY() {
      return c(x);
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
  vf,
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
function mf(e, t) {
  le(t, !0);
  let n = m(t, "sourceX", 7), r = m(t, "sourceY", 7), o = m(t, "targetX", 7), i = m(t, "targetY", 7), s = m(t, "label", 7), a = m(t, "labelStyle", 7), l = m(t, "markerStart", 7), u = m(t, "markerEnd", 7), d = m(t, "interactionWidth", 7), f = m(t, "style", 7), p = /* @__PURE__ */ N(() => Qd({
    sourceX: n(),
    sourceY: r(),
    targetX: o(),
    targetY: i()
  })), h = /* @__PURE__ */ N(() => lo(c(p), 3)), g = /* @__PURE__ */ N(() => c(h)[0]), w = /* @__PURE__ */ N(() => c(h)[1]), y = /* @__PURE__ */ N(() => c(h)[2]);
  var b = {
    get sourceX() {
      return n();
    },
    set sourceX(x) {
      n(x), v();
    },
    get sourceY() {
      return r();
    },
    set sourceY(x) {
      r(x), v();
    },
    get targetX() {
      return o();
    },
    set targetX(x) {
      o(x), v();
    },
    get targetY() {
      return i();
    },
    set targetY(x) {
      i(x), v();
    },
    get label() {
      return s();
    },
    set label(x) {
      s(x), v();
    },
    get labelStyle() {
      return a();
    },
    set labelStyle(x) {
      a(x), v();
    },
    get markerStart() {
      return l();
    },
    set markerStart(x) {
      l(x), v();
    },
    get markerEnd() {
      return u();
    },
    set markerEnd(x) {
      u(x), v();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(x) {
      d(x), v();
    },
    get style() {
      return f();
    },
    set style(x) {
      f(x), v();
    }
  };
  return ni(e, {
    get path() {
      return c(g);
    },
    get labelX() {
      return c(w);
    },
    get labelY() {
      return c(y);
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
      return f();
    }
  }), ue(b);
}
se(
  mf,
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
function yf(e, t) {
  le(t, !0);
  let n = m(t, "sourceX", 7), r = m(t, "sourceY", 7), o = m(t, "sourcePosition", 7), i = m(t, "targetX", 7), s = m(t, "targetY", 7), a = m(t, "targetPosition", 7), l = m(t, "label", 7), u = m(t, "labelStyle", 7), d = m(t, "markerStart", 7), f = m(t, "markerEnd", 7), p = m(t, "interactionWidth", 7), h = m(t, "style", 7), g = /* @__PURE__ */ N(() => ul({
    sourceX: n(),
    sourceY: r(),
    targetX: i(),
    targetY: s(),
    sourcePosition: o(),
    targetPosition: a(),
    borderRadius: 0
  })), w = /* @__PURE__ */ N(() => lo(c(g), 3)), y = /* @__PURE__ */ N(() => c(w)[0]), b = /* @__PURE__ */ N(() => c(w)[1]), x = /* @__PURE__ */ N(() => c(w)[2]);
  var _ = {
    get sourceX() {
      return n();
    },
    set sourceX(k) {
      n(k), v();
    },
    get sourceY() {
      return r();
    },
    set sourceY(k) {
      r(k), v();
    },
    get sourcePosition() {
      return o();
    },
    set sourcePosition(k) {
      o(k), v();
    },
    get targetX() {
      return i();
    },
    set targetX(k) {
      i(k), v();
    },
    get targetY() {
      return s();
    },
    set targetY(k) {
      s(k), v();
    },
    get targetPosition() {
      return a();
    },
    set targetPosition(k) {
      a(k), v();
    },
    get label() {
      return l();
    },
    set label(k) {
      l(k), v();
    },
    get labelStyle() {
      return u();
    },
    set labelStyle(k) {
      u(k), v();
    },
    get markerStart() {
      return d();
    },
    set markerStart(k) {
      d(k), v();
    },
    get markerEnd() {
      return f();
    },
    set markerEnd(k) {
      f(k), v();
    },
    get interactionWidth() {
      return p();
    },
    set interactionWidth(k) {
      p(k), v();
    },
    get style() {
      return h();
    },
    set style(k) {
      h(k), v();
    }
  };
  return ni(e, {
    get path() {
      return c(y);
    },
    get labelX() {
      return c(b);
    },
    get labelY() {
      return c(x);
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
      return f();
    },
    get interactionWidth() {
      return p();
    },
    get style() {
      return h();
    }
  }), ue(_);
}
se(
  yf,
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
class i2 {
  #t;
  #e;
  /**
   *
   * @param {() => T} fn
   * @param {(update: () => void) => void} onsubscribe
   */
  constructor(t, n) {
    this.#t = t, this.#e = co(n);
  }
  get current() {
    return this.#e(), this.#t();
  }
}
const s2 = /\(.+\)/, a2 = /* @__PURE__ */ new Set(["all", "print", "screen", "and", "or", "not", "only"]);
class wf extends i2 {
  /**
   * @param {string} query A media query string
   * @param {boolean} [fallback] Fallback value for the server
   */
  constructor(t, n) {
    let r = s2.test(t) || // we need to use `some` here because technically this `window.matchMedia('random,screen')` still returns true
    t.split(/[\s,]+/).some((i) => a2.has(i.trim())) ? t : `(${t})`;
    const o = window.matchMedia(r);
    super(
      () => o.matches,
      (i) => $n(o, "change", i)
    );
  }
}
function l2(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  return al(e, { x: 0, y: 0, width: n, height: r }, t, !0).forEach((i) => {
    o.set(i.id, i);
  }), o;
}
function _u(e) {
  const { edges: t, defaultEdgeOptions: n, nodeLookup: r, previousEdges: o, connectionMode: i, onerror: s, onlyRenderVisible: a, elevateEdgesOnSelect: l } = e, u = /* @__PURE__ */ new Map();
  for (const d of t) {
    const f = r.get(d.source), p = r.get(d.target);
    if (!f || !p)
      continue;
    if (a) {
      const { visibleNodes: w, transform: y, width: b, height: x } = e;
      if (dy({
        sourceNode: f,
        targetNode: p,
        width: b,
        height: x,
        transform: y
      }))
        w.set(f.id, f), w.set(p.id, p);
      else
        continue;
    }
    const h = o.get(d.id);
    if (h && d === h.edge && f == h.sourceNode && p == h.targetNode) {
      u.set(d.id, h);
      continue;
    }
    const g = yy({
      id: d.id,
      sourceNode: f,
      targetNode: p,
      sourceHandle: d.sourceHandle || null,
      targetHandle: d.targetHandle || null,
      connectionMode: i,
      onError: s
    });
    g && u.set(d.id, {
      ...n,
      ...d,
      ...g,
      zIndex: cy({
        selected: d.selected,
        zIndex: d.zIndex ?? n.zIndex,
        sourceNode: f,
        targetNode: p,
        elevateOnSelect: l
      }),
      sourceNode: f,
      targetNode: p,
      edge: d
    });
  }
  return u;
}
const bf = {
  input: cf,
  output: df,
  default: pl,
  group: ff
}, xf = {
  straight: mf,
  smoothstep: vf,
  default: hl,
  step: yf
};
function u2(e, t, n, r, o, i) {
  if (t && !n && r && o) {
    const s = Qo(i, {
      filter: (a) => !!((a.width || a.initialWidth) && (a.height || a.initialHeight))
    });
    return ll(s, r, o, 0.5, 2, 0.1);
  } else
    return n ?? { x: 0, y: 0, zoom: 1 };
}
function c2(e) {
  class t {
    #t = /* @__PURE__ */ N(() => e.props.id ?? "1");
    get flowId() {
      return c(this.#t);
    }
    set flowId(r) {
      U(this.#t, r);
    }
    #e = /* @__PURE__ */ Ne(null);
    get domNode() {
      return c(this.#e);
    }
    set domNode(r) {
      U(this.#e, r);
    }
    #n = /* @__PURE__ */ Ne(null);
    get panZoom() {
      return c(this.#n);
    }
    set panZoom(r) {
      U(this.#n, r);
    }
    #r = /* @__PURE__ */ Ne(e.width ?? 0);
    get width() {
      return c(this.#r);
    }
    set width(r) {
      U(this.#r, r);
    }
    #i = /* @__PURE__ */ Ne(e.height ?? 0);
    get height() {
      return c(this.#i);
    }
    set height(r) {
      U(this.#i, r);
    }
    #o = /* @__PURE__ */ N(() => {
      const r = _y(e.nodes, this.nodeLookup, this.parentLookup, {
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
      return c(this.#o);
    }
    set nodesInitialized(r) {
      U(this.#o, r);
    }
    #s = /* @__PURE__ */ N(() => this.panZoom !== null);
    get viewportInitialized() {
      return c(this.#s);
    }
    set viewportInitialized(r) {
      U(this.#s, r);
    }
    #a = /* @__PURE__ */ N(() => (Py(this.connectionLookup, this.edgeLookup, e.edges), e.edges));
    get _edges() {
      return c(this.#a);
    }
    set _edges(r) {
      U(this.#a, r);
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
    #l = /* @__PURE__ */ N(() => {
      const r = this._prevSelectedNodeIds.size, o = /* @__PURE__ */ new Set(), i = this.nodes.filter((s) => (s.selected && (o.add(s.id), this._prevSelectedNodeIds.delete(s.id)), s.selected));
      return (r !== o.size || this._prevSelectedNodeIds.size > 0) && (this._prevSelectedNodes = i), this._prevSelectedNodeIds = o, this._prevSelectedNodes;
    });
    get selectedNodes() {
      return c(this.#l);
    }
    set selectedNodes(r) {
      U(this.#l, r);
    }
    _prevSelectedEdges = [];
    _prevSelectedEdgeIds = /* @__PURE__ */ new Set();
    #u = /* @__PURE__ */ N(() => {
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
    #c = /* @__PURE__ */ N(() => {
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
      let f, p;
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
        const { viewport: g, width: w, height: y } = this, b = [g.x, g.y, g.zoom];
        f = l2(s, b, w, y), p = _u({
          ...h,
          onlyRenderVisible: !0,
          visibleNodes: f,
          transform: b,
          width: w,
          height: y
        });
      } else
        f = this.nodeLookup, p = _u(h);
      return { nodes: f, edges: p };
    });
    get visible() {
      return c(this.#c);
    }
    set visible(r) {
      U(this.#c, r);
    }
    #d = /* @__PURE__ */ N(() => e.props.nodesDraggable ?? !0);
    get nodesDraggable() {
      return c(this.#d);
    }
    set nodesDraggable(r) {
      U(this.#d, r);
    }
    #f = /* @__PURE__ */ N(() => e.props.nodesConnectable ?? !0);
    get nodesConnectable() {
      return c(this.#f);
    }
    set nodesConnectable(r) {
      U(this.#f, r);
    }
    #h = /* @__PURE__ */ N(() => e.props.elementsSelectable ?? !0);
    get elementsSelectable() {
      return c(this.#h);
    }
    set elementsSelectable(r) {
      U(this.#h, r);
    }
    #p = /* @__PURE__ */ N(() => e.props.nodesFocusable ?? !0);
    get nodesFocusable() {
      return c(this.#p);
    }
    set nodesFocusable(r) {
      U(this.#p, r);
    }
    #w = /* @__PURE__ */ N(() => e.props.edgesFocusable ?? !0);
    get edgesFocusable() {
      return c(this.#w);
    }
    set edgesFocusable(r) {
      U(this.#w, r);
    }
    #b = /* @__PURE__ */ N(() => e.props.disableKeyboardA11y ?? !1);
    get disableKeyboardA11y() {
      return c(this.#b);
    }
    set disableKeyboardA11y(r) {
      U(this.#b, r);
    }
    #x = /* @__PURE__ */ N(() => e.props.minZoom ?? 0.5);
    get minZoom() {
      return c(this.#x);
    }
    set minZoom(r) {
      U(this.#x, r);
    }
    #m = /* @__PURE__ */ N(() => e.props.maxZoom ?? 2);
    get maxZoom() {
      return c(this.#m);
    }
    set maxZoom(r) {
      U(this.#m, r);
    }
    #g = /* @__PURE__ */ N(() => e.props.nodeOrigin ?? [0, 0]);
    get nodeOrigin() {
      return c(this.#g);
    }
    set nodeOrigin(r) {
      U(this.#g, r);
    }
    #v = /* @__PURE__ */ N(() => e.props.nodeExtent ?? pa);
    get nodeExtent() {
      return c(this.#v);
    }
    set nodeExtent(r) {
      U(this.#v, r);
    }
    #y = /* @__PURE__ */ N(() => e.props.translateExtent ?? pa);
    get translateExtent() {
      return c(this.#y);
    }
    set translateExtent(r) {
      U(this.#y, r);
    }
    #k = /* @__PURE__ */ N(() => e.props.defaultEdgeOptions ?? {});
    get defaultEdgeOptions() {
      return c(this.#k);
    }
    set defaultEdgeOptions(r) {
      U(this.#k, r);
    }
    #C = /* @__PURE__ */ N(() => e.props.nodeDragThreshold ?? 1);
    get nodeDragThreshold() {
      return c(this.#C);
    }
    set nodeDragThreshold(r) {
      U(this.#C, r);
    }
    #$ = /* @__PURE__ */ N(() => e.props.autoPanOnNodeDrag ?? !0);
    get autoPanOnNodeDrag() {
      return c(this.#$);
    }
    set autoPanOnNodeDrag(r) {
      U(this.#$, r);
    }
    #_ = /* @__PURE__ */ N(() => e.props.autoPanOnConnect ?? !0);
    get autoPanOnConnect() {
      return c(this.#_);
    }
    set autoPanOnConnect(r) {
      U(this.#_, r);
    }
    #S = /* @__PURE__ */ N(() => e.props.autoPanOnNodeFocus ?? !0);
    get autoPanOnNodeFocus() {
      return c(this.#S);
    }
    set autoPanOnNodeFocus(r) {
      U(this.#S, r);
    }
    #E = /* @__PURE__ */ N(() => e.props.autoPanSpeed ?? 15);
    get autoPanSpeed() {
      return c(this.#E);
    }
    set autoPanSpeed(r) {
      U(this.#E, r);
    }
    #N = /* @__PURE__ */ N(() => e.props.connectionDragThreshold ?? 1);
    get connectionDragThreshold() {
      return c(this.#N);
    }
    set connectionDragThreshold(r) {
      U(this.#N, r);
    }
    fitViewQueued = e.props.fitView ?? !1;
    fitViewOptions = e.props.fitViewOptions;
    fitViewResolver = null;
    #z = /* @__PURE__ */ N(() => e.props.snapGrid ?? null);
    get snapGrid() {
      return c(this.#z);
    }
    set snapGrid(r) {
      U(this.#z, r);
    }
    #M = /* @__PURE__ */ Ne(!1);
    get dragging() {
      return c(this.#M);
    }
    set dragging(r) {
      U(this.#M, r);
    }
    #P = /* @__PURE__ */ Ne(null);
    get selectionRect() {
      return c(this.#P);
    }
    set selectionRect(r) {
      U(this.#P, r);
    }
    #O = /* @__PURE__ */ Ne(!1);
    get selectionKeyPressed() {
      return c(this.#O);
    }
    set selectionKeyPressed(r) {
      U(this.#O, r);
    }
    #T = /* @__PURE__ */ Ne(!1);
    get multiselectionKeyPressed() {
      return c(this.#T);
    }
    set multiselectionKeyPressed(r) {
      U(this.#T, r);
    }
    #V = /* @__PURE__ */ Ne(!1);
    get deleteKeyPressed() {
      return c(this.#V);
    }
    set deleteKeyPressed(r) {
      U(this.#V, r);
    }
    #A = /* @__PURE__ */ Ne(!1);
    get panActivationKeyPressed() {
      return c(this.#A);
    }
    set panActivationKeyPressed(r) {
      U(this.#A, r);
    }
    #L = /* @__PURE__ */ Ne(!1);
    get zoomActivationKeyPressed() {
      return c(this.#L);
    }
    set zoomActivationKeyPressed(r) {
      U(this.#L, r);
    }
    #D = /* @__PURE__ */ Ne(null);
    get selectionRectMode() {
      return c(this.#D);
    }
    set selectionRectMode(r) {
      U(this.#D, r);
    }
    #H = /* @__PURE__ */ Ne("");
    get ariaLiveMessage() {
      return c(this.#H);
    }
    set ariaLiveMessage(r) {
      U(this.#H, r);
    }
    #I = /* @__PURE__ */ N(() => e.props.selectionMode ?? qi.Partial);
    get selectionMode() {
      return c(this.#I);
    }
    set selectionMode(r) {
      U(this.#I, r);
    }
    #j = /* @__PURE__ */ N(() => ({ ...bf, ...e.props.nodeTypes }));
    get nodeTypes() {
      return c(this.#j);
    }
    set nodeTypes(r) {
      U(this.#j, r);
    }
    #R = /* @__PURE__ */ N(() => ({ ...xf, ...e.props.edgeTypes }));
    get edgeTypes() {
      return c(this.#R);
    }
    set edgeTypes(r) {
      U(this.#R, r);
    }
    #Z = /* @__PURE__ */ N(() => e.props.noPanClass ?? "nopan");
    get noPanClass() {
      return c(this.#Z);
    }
    set noPanClass(r) {
      U(this.#Z, r);
    }
    #K = /* @__PURE__ */ N(() => e.props.noDragClass ?? "nodrag");
    get noDragClass() {
      return c(this.#K);
    }
    set noDragClass(r) {
      U(this.#K, r);
    }
    #B = /* @__PURE__ */ N(() => e.props.noWheelClass ?? "nowheel");
    get noWheelClass() {
      return c(this.#B);
    }
    set noWheelClass(r) {
      U(this.#B, r);
    }
    #W = /* @__PURE__ */ N(() => ay(e.props.ariaLabelConfig));
    get ariaLabelConfig() {
      return c(this.#W);
    }
    set ariaLabelConfig(r) {
      U(this.#W, r);
    }
    #X = /* @__PURE__ */ Ne(u2(this.nodesInitialized, e.props.fitView, e.props.initialViewport, this.width, this.height, this.nodeLookup));
    get _viewport() {
      return c(this.#X);
    }
    set _viewport(r) {
      U(this.#X, r);
    }
    get viewport() {
      return e.viewport ?? this._viewport;
    }
    set viewport(r) {
      e.viewport && (e.viewport = r), this._viewport = r;
    }
    #Y = /* @__PURE__ */ Ne(
      // _connection is viewport independent and originating from XYHandle
      ha
    );
    get _connection() {
      return c(this.#Y);
    }
    set _connection(r) {
      U(this.#Y, r);
    }
    #q = /* @__PURE__ */ N(() => this._connection.inProgress ? {
      ...this._connection,
      to: ti(this._connection.to, [this.viewport.x, this.viewport.y, this.viewport.zoom])
    } : this._connection);
    get connection() {
      return c(this.#q);
    }
    set connection(r) {
      U(this.#q, r);
    }
    #F = /* @__PURE__ */ N(() => e.props.connectionMode ?? ro.Strict);
    get connectionMode() {
      return c(this.#F);
    }
    set connectionMode(r) {
      U(this.#F, r);
    }
    #G = /* @__PURE__ */ N(() => e.props.connectionRadius ?? 20);
    get connectionRadius() {
      return c(this.#G);
    }
    set connectionRadius(r) {
      U(this.#G, r);
    }
    #U = /* @__PURE__ */ N(() => e.props.isValidConnection ?? (() => !0));
    get isValidConnection() {
      return c(this.#U);
    }
    set isValidConnection(r) {
      U(this.#U, r);
    }
    #J = /* @__PURE__ */ N(() => e.props.selectNodesOnDrag ?? !0);
    get selectNodesOnDrag() {
      return c(this.#J);
    }
    set selectNodesOnDrag(r) {
      U(this.#J, r);
    }
    #Q = /* @__PURE__ */ N(() => e.props.defaultMarkerColor === void 0 ? "#b1b1b7" : e.props.defaultMarkerColor);
    get defaultMarkerColor() {
      return c(this.#Q);
    }
    set defaultMarkerColor(r) {
      U(this.#Q, r);
    }
    #ee = /* @__PURE__ */ N(() => wy(e.edges, {
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
    #te = /* @__PURE__ */ N(() => e.props.onlyRenderVisibleElements ?? !1);
    get onlyRenderVisibleElements() {
      return c(this.#te);
    }
    set onlyRenderVisibleElements(r) {
      U(this.#te, r);
    }
    #ne = /* @__PURE__ */ N(() => e.props.onflowerror ?? ry);
    get onerror() {
      return c(this.#ne);
    }
    set onerror(r) {
      U(this.#ne, r);
    }
    #re = /* @__PURE__ */ N(() => e.props.ondelete);
    get ondelete() {
      return c(this.#re);
    }
    set ondelete(r) {
      U(this.#re, r);
    }
    #oe = /* @__PURE__ */ N(() => e.props.onbeforedelete);
    get onbeforedelete() {
      return c(this.#oe);
    }
    set onbeforedelete(r) {
      U(this.#oe, r);
    }
    #ie = /* @__PURE__ */ N(() => e.props.onbeforeconnect);
    get onbeforeconnect() {
      return c(this.#ie);
    }
    set onbeforeconnect(r) {
      U(this.#ie, r);
    }
    #se = /* @__PURE__ */ N(() => e.props.onconnect);
    get onconnect() {
      return c(this.#se);
    }
    set onconnect(r) {
      U(this.#se, r);
    }
    #ae = /* @__PURE__ */ N(() => e.props.onconnectstart);
    get onconnectstart() {
      return c(this.#ae);
    }
    set onconnectstart(r) {
      U(this.#ae, r);
    }
    #le = /* @__PURE__ */ N(() => e.props.onconnectend);
    get onconnectend() {
      return c(this.#le);
    }
    set onconnectend(r) {
      U(this.#le, r);
    }
    #ue = /* @__PURE__ */ N(() => e.props.onbeforereconnect);
    get onbeforereconnect() {
      return c(this.#ue);
    }
    set onbeforereconnect(r) {
      U(this.#ue, r);
    }
    #ce = /* @__PURE__ */ N(() => e.props.onreconnect);
    get onreconnect() {
      return c(this.#ce);
    }
    set onreconnect(r) {
      U(this.#ce, r);
    }
    #de = /* @__PURE__ */ N(() => e.props.onreconnectstart);
    get onreconnectstart() {
      return c(this.#de);
    }
    set onreconnectstart(r) {
      U(this.#de, r);
    }
    #fe = /* @__PURE__ */ N(() => e.props.onreconnectend);
    get onreconnectend() {
      return c(this.#fe);
    }
    set onreconnectend(r) {
      U(this.#fe, r);
    }
    #pe = /* @__PURE__ */ N(() => e.props.clickConnect ?? !0);
    get clickConnect() {
      return c(this.#pe);
    }
    set clickConnect(r) {
      U(this.#pe, r);
    }
    #he = /* @__PURE__ */ N(() => e.props.onclickconnectstart);
    get onclickconnectstart() {
      return c(this.#he);
    }
    set onclickconnectstart(r) {
      U(this.#he, r);
    }
    #ge = /* @__PURE__ */ N(() => e.props.onclickconnectend);
    get onclickconnectend() {
      return c(this.#ge);
    }
    set onclickconnectend(r) {
      U(this.#ge, r);
    }
    #ve = /* @__PURE__ */ Ne(null);
    get clickConnectStartHandle() {
      return c(this.#ve);
    }
    set clickConnectStartHandle(r) {
      U(this.#ve, r);
    }
    #me = /* @__PURE__ */ N(() => e.props.onselectiondrag);
    get onselectiondrag() {
      return c(this.#me);
    }
    set onselectiondrag(r) {
      U(this.#me, r);
    }
    #ye = /* @__PURE__ */ N(() => e.props.onselectiondragstart);
    get onselectiondragstart() {
      return c(this.#ye);
    }
    set onselectiondragstart(r) {
      U(this.#ye, r);
    }
    #we = /* @__PURE__ */ N(() => e.props.onselectiondragstop);
    get onselectiondragstop() {
      return c(this.#we);
    }
    set onselectiondragstop(r) {
      U(this.#we, r);
    }
    resolveFitView = async () => {
      this.panZoom && (await ty(
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
    _prefersDark = new wf("(prefers-color-scheme: dark)", e.props.colorModeSSR === "dark");
    #be = /* @__PURE__ */ N(() => e.props.colorMode === "system" ? this._prefersDark.current ? "dark" : "light" : e.props.colorMode ?? "light");
    get colorMode() {
      return c(this.#be);
    }
    set colorMode(r) {
      U(this.#be, r);
    }
    constructor() {
    }
    resetStoreValues() {
      this.dragging = !1, this.selectionRect = null, this.selectionRectMode = null, this.selectionKeyPressed = !1, this.multiselectionKeyPressed = !1, this.deleteKeyPressed = !1, this.panActivationKeyPressed = !1, this.zoomActivationKeyPressed = !1, this._connection = ha, this.clickConnectStartHandle = null, this.viewport = e.props.initialViewport ?? { x: 0, y: 0, zoom: 1 }, this.ariaLiveMessage = "";
    }
  }
  return new t();
}
function fn() {
  const e = ln(Ji);
  if (!e)
    throw new Error("To call useStore outside of <SvelteFlow /> you need to wrap your component in a <SvelteFlowProvider />");
  return e.getStore();
}
const Ji = Symbol();
function kf(e) {
  const t = c2(e);
  function n(j) {
    t.nodeTypes = {
      ...bf,
      ...j
    };
  }
  function r(j) {
    t.edgeTypes = {
      ...xf,
      ...j
    };
  }
  function o(j) {
    t.edges = hy(j, t.edges);
  }
  const i = (j, V = !1) => {
    t.nodes = t.nodes.map((z) => {
      const O = j.get(z.id);
      return O ? { ...z, position: O.position, dragging: V } : z;
    });
  };
  function s(j) {
    const { changes: V, updatedInternals: z } = zy(j, t.nodeLookup, t.parentLookup, t.domNode, t.nodeOrigin);
    if (!z)
      return;
    Cy(t.nodeLookup, t.parentLookup, {
      nodeOrigin: t.nodeOrigin,
      nodeExtent: t.nodeExtent
    }), t.fitViewQueued && t.resolveFitView();
    const O = /* @__PURE__ */ new Map();
    for (const C of V) {
      const S = t.nodeLookup.get(C.id)?.internals.userNode;
      if (!S)
        continue;
      const E = { ...S };
      switch (C.type) {
        case "dimensions": {
          const I = { ...E.measured, ...C.dimensions };
          C.setAttributes && (E.width = C.dimensions?.width ?? E.width, E.height = C.dimensions?.height ?? E.height), E.measured = I;
          break;
        }
        case "position":
          E.position = C.position ?? E.position;
          break;
      }
      O.set(C.id, E);
    }
    t.nodes = t.nodes.map((C) => O.get(C.id) ?? C);
  }
  function a(j) {
    const V = t.fitViewResolver ?? Promise.withResolvers();
    return t.fitViewQueued = !0, t.fitViewOptions = j, t.fitViewResolver = V, t.nodes = [...t.nodes], V.promise;
  }
  async function l(j, V, z) {
    const O = typeof z?.zoom < "u" ? z.zoom : t.maxZoom, C = t.panZoom;
    return C ? (await C.setViewport({
      x: t.width / 2 - j * O,
      y: t.height / 2 - V * O,
      zoom: O
    }, { duration: z?.duration, ease: z?.ease, interpolate: z?.interpolate }), Promise.resolve(!0)) : Promise.resolve(!1);
  }
  function u(j, V) {
    const z = t.panZoom;
    return z ? z.scaleBy(j, V) : Promise.resolve(!1);
  }
  function d(j) {
    return u(1.2, j);
  }
  function f(j) {
    return u(1 / 1.2, j);
  }
  function p(j) {
    const V = t.panZoom;
    V && (V.setScaleExtent([j, t.maxZoom]), t.minZoom = j);
  }
  function h(j) {
    const V = t.panZoom;
    V && (V.setScaleExtent([t.minZoom, j]), t.maxZoom = j);
  }
  function g(j) {
    const V = t.panZoom;
    V && (V.setTranslateExtent(j), t.translateExtent = j);
  }
  function w(j, V = null) {
    let z = !1;
    const O = j.map((C) => (!V || V.has(C.id)) && C.selected ? (z = !0, { ...C, selected: !1 }) : C);
    return [z, O];
  }
  function y(j) {
    const V = j?.nodes ? new Set(j.nodes.map((I) => I.id)) : null, [z, O] = w(t.nodes, V);
    z && (t.nodes = O);
    const C = j?.edges ? new Set(j.edges.map((I) => I.id)) : null, [S, E] = w(t.edges, C);
    S && (t.edges = E);
  }
  function b(j) {
    const V = t.multiselectionKeyPressed;
    t.nodes = t.nodes.map((z) => {
      const O = j.includes(z.id), C = V && z.selected || O;
      return !!z.selected !== C ? { ...z, selected: C } : z;
    }), V || y({ nodes: [] });
  }
  function x(j) {
    const V = t.multiselectionKeyPressed;
    t.edges = t.edges.map((z) => {
      const O = j.includes(z.id), C = V && z.selected || O;
      return !!z.selected !== C ? { ...z, selected: C } : z;
    }), V || y({ edges: [] });
  }
  function _(j, V, z) {
    const O = t.nodeLookup.get(j);
    if (!O) {
      console.warn("012", Lo.error012(j));
      return;
    }
    t.selectionRect = null, t.selectionRectMode = null, O.selected ? (V || O.selected && t.multiselectionKeyPressed) && (y({ nodes: [O], edges: [] }), requestAnimationFrame(() => z?.blur())) : b([j]);
  }
  function k(j) {
    const V = t.edgeLookup.get(j);
    if (!V) {
      console.warn("012", Lo.error012(j));
      return;
    }
    (V.selectable || t.elementsSelectable && typeof V.selectable > "u") && (t.selectionRect = null, t.selectionRectMode = null, V.selected ? V.selected && t.multiselectionKeyPressed && y({ nodes: [], edges: [V] }) : x([j]));
  }
  function $(j, V) {
    const { nodeExtent: z, snapGrid: O, nodeOrigin: C, nodeLookup: S, nodesDraggable: E, onerror: I } = t, W = /* @__PURE__ */ new Map(), q = O?.[0] ?? 5, M = O?.[1] ?? 5, X = j.x * q * V, Q = j.y * M * V;
    for (const Y of S.values()) {
      if (!(Y.selected && (Y.draggable || E && typeof Y.draggable > "u")))
        continue;
      let Z = {
        x: Y.internals.positionAbsolute.x + X,
        y: Y.internals.positionAbsolute.y + Q
      };
      O && (Z = ei(Z, O));
      const { position: B, positionAbsolute: F } = Zd({
        nodeId: Y.id,
        nextPosition: Z,
        nodeLookup: S,
        nodeExtent: z,
        nodeOrigin: C,
        onError: I
      });
      Y.position = B, Y.internals.positionAbsolute = F, W.set(Y.id, Y);
    }
    i(W);
  }
  function P(j) {
    return My({
      delta: j,
      panZoom: t.panZoom,
      transform: [t.viewport.x, t.viewport.y, t.viewport.zoom],
      translateExtent: t.translateExtent,
      width: t.width,
      height: t.height
    });
  }
  const A = (j) => {
    t._connection = { ...j };
  };
  function L() {
    t._connection = ha;
  }
  function H() {
    t.resetStoreValues(), y();
  }
  return Object.assign(t, {
    setNodeTypes: n,
    setEdgeTypes: r,
    addEdge: o,
    updateNodePositions: i,
    updateNodeInternals: s,
    zoomIn: d,
    zoomOut: f,
    fitView: a,
    setCenter: l,
    setMinZoom: p,
    setMaxZoom: h,
    setTranslateExtent: g,
    unselectNodesAndEdges: y,
    addSelectedNodes: b,
    addSelectedEdges: x,
    handleNodeSelection: _,
    handleEdgeSelection: k,
    moveSelectedNodes: $,
    panBy: P,
    updateConnection: A,
    cancelConnection: L,
    reset: H
  });
}
function d2(e, t) {
  const { minZoom: n, maxZoom: r, initialViewport: o, onPanZoomStart: i, onPanZoom: s, onPanZoomEnd: a, translateExtent: l, setPanZoomInstance: u, onDraggingChange: d, onTransformChange: f } = t, p = Fy({
    domNode: e,
    minZoom: n,
    maxZoom: r,
    translateExtent: l,
    viewport: o,
    onPanZoom: s,
    onPanZoomStart: i,
    onPanZoomEnd: a,
    onDraggingChange: d
  }), h = p.getViewport();
  return (o.x !== h.x || o.y !== h.y || o.zoom !== h.zoom) && f([h.x, h.y, h.zoom]), u(p), p.update(t), {
    update(g) {
      p.update(g);
    }
  };
}
var f2 = /* @__PURE__ */ ee('<div class="svelte-flow__zoom svelte-flow__container"><!></div>');
function Cf(e, t) {
  le(t, !0);
  let n = m(t, "store", 15), r = m(t, "panOnScrollMode", 7), o = m(t, "preventScrolling", 7), i = m(t, "zoomOnScroll", 7), s = m(t, "zoomOnDoubleClick", 7), a = m(t, "zoomOnPinch", 7), l = m(t, "panOnDrag", 7), u = m(t, "panOnScroll", 7), d = m(t, "panOnScrollSpeed", 7), f = m(t, "paneClickDistance", 7), p = m(t, "selectionOnDrag", 7), h = m(t, "onmovestart", 7), g = m(t, "onmove", 7), w = m(t, "onmoveend", 7), y = m(t, "oninit", 7), b = m(t, "children", 7), x = /* @__PURE__ */ N(() => n().panActivationKeyPressed || l()), _ = /* @__PURE__ */ N(() => n().panActivationKeyPressed || u());
  const { viewport: k } = n();
  let $ = !1;
  Ue(() => {
    !$ && n().viewportInitialized && (y()?.(), $ = !0);
  });
  var P = {
    get store() {
      return n();
    },
    set store(H) {
      n(H), v();
    },
    get panOnScrollMode() {
      return r();
    },
    set panOnScrollMode(H) {
      r(H), v();
    },
    get preventScrolling() {
      return o();
    },
    set preventScrolling(H) {
      o(H), v();
    },
    get zoomOnScroll() {
      return i();
    },
    set zoomOnScroll(H) {
      i(H), v();
    },
    get zoomOnDoubleClick() {
      return s();
    },
    set zoomOnDoubleClick(H) {
      s(H), v();
    },
    get zoomOnPinch() {
      return a();
    },
    set zoomOnPinch(H) {
      a(H), v();
    },
    get panOnDrag() {
      return l();
    },
    set panOnDrag(H) {
      l(H), v();
    },
    get panOnScroll() {
      return u();
    },
    set panOnScroll(H) {
      u(H), v();
    },
    get panOnScrollSpeed() {
      return d();
    },
    set panOnScrollSpeed(H) {
      d(H), v();
    },
    get paneClickDistance() {
      return f();
    },
    set paneClickDistance(H) {
      f(H), v();
    },
    get selectionOnDrag() {
      return p();
    },
    set selectionOnDrag(H) {
      p(H), v();
    },
    get onmovestart() {
      return h();
    },
    set onmovestart(H) {
      h(H), v();
    },
    get onmove() {
      return g();
    },
    set onmove(H) {
      g(H), v();
    },
    get onmoveend() {
      return w();
    },
    set onmoveend(H) {
      w(H), v();
    },
    get oninit() {
      return y();
    },
    set oninit(H) {
      y(H), v();
    },
    get children() {
      return b();
    },
    set children(H) {
      b(H), v();
    }
  }, A = f2(), L = K(A);
  return Ye(L, b), R(A), kt(A, (H, j) => d2?.(H, j), () => ({
    viewport: n().viewport,
    minZoom: n().minZoom,
    maxZoom: n().maxZoom,
    initialViewport: k,
    onDraggingChange: (H) => {
      n(n().dragging = H, !0);
    },
    setPanZoomInstance: (H) => {
      n(n().panZoom = H, !0);
    },
    onPanZoomStart: h(),
    onPanZoom: g(),
    onPanZoomEnd: w(),
    zoomOnScroll: i(),
    zoomOnDoubleClick: s(),
    zoomOnPinch: a(),
    panOnScroll: c(_),
    panOnDrag: c(x),
    panOnScrollSpeed: d(),
    panOnScrollMode: r(),
    zoomActivationKeyPressed: n().zoomActivationKeyPressed,
    preventScrolling: typeof o() == "boolean" ? o() : !0,
    noPanClassName: n().noPanClass,
    noWheelClassName: n().noWheelClass,
    userSelectionActive: !!n().selectionRect,
    translateExtent: n().translateExtent,
    lib: "svelte",
    paneClickDistance: f(),
    selectionOnDrag: p(),
    onTransformChange: (H) => {
      n(n().viewport = { x: H[0], y: H[1], zoom: H[2] }, !0);
    },
    connectionInProgress: n().connection.inProgress
  })), T(e, A), ue(P);
}
se(
  Cf,
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
function Su(e, t) {
  return (n) => {
    n.target === t && e?.(n);
  };
}
function Eu(e) {
  return (t) => {
    const n = e.has(t.id);
    return !!t.selected !== n ? { ...t, selected: n } : t;
  };
}
function Nu(e, t) {
  if (e.size !== t.size)
    return !1;
  for (const n of e)
    if (!t.has(n))
      return !1;
  return !0;
}
var p2 = /* @__PURE__ */ ee("<div><!></div>");
function $f(e, t) {
  le(t, !0);
  let n = m(t, "store", 15), r = m(t, "panOnDrag", 7, !0), o = m(t, "paneClickDistance", 7, 1), i = m(t, "selectionOnDrag", 7), s = m(t, "onpaneclick", 7), a = m(t, "onpanecontextmenu", 7), l = m(t, "onselectionstart", 7), u = m(t, "onselectionend", 7), d = m(t, "children", 7), f, p = null, h = /* @__PURE__ */ new Set(), g = /* @__PURE__ */ new Set(), w = /* @__PURE__ */ N(() => n().panActivationKeyPressed || r()), y = /* @__PURE__ */ N(() => n().selectionKeyPressed || !!n().selectionRect || i() && c(w) !== !0), b = /* @__PURE__ */ N(() => n().elementsSelectable && (c(y) || n().selectionRectMode === "user")), x = !1;
  function _(S) {
    if (p = f?.getBoundingClientRect(), !p) return;
    const E = S.target === f, I = !E && !!S.target.closest(".nokey"), W = i() && E || n().selectionKeyPressed;
    if (I || !c(y) || !W || S.button !== 0 || !S.isPrimary)
      return;
    S.target?.setPointerCapture?.(S.pointerId), x = !1;
    const { x: q, y: M } = sn(S, p);
    n(n().selectionRect = { width: 0, height: 0, startX: q, startY: M, x: q, y: M }, !0), E || (S.stopPropagation(), S.preventDefault());
  }
  function k(S) {
    if (!c(y) || !p || !n().selectionRect)
      return;
    const E = sn(S, p), { startX: I = 0, startY: W = 0 } = n().selectionRect;
    if (!x) {
      const Y = n().selectionKeyPressed ? 0 : o();
      if (Math.hypot(E.x - I, E.y - W) <= Y)
        return;
      n().unselectNodesAndEdges(), l()?.(S);
    }
    x = !0;
    const q = {
      ...n().selectionRect,
      x: E.x < I ? E.x : I,
      y: E.y < W ? E.y : W,
      width: Math.abs(E.x - I),
      height: Math.abs(E.y - W)
    }, M = h, X = g;
    h = new Set(al(
      n().nodeLookup,
      q,
      [
        n().viewport.x,
        n().viewport.y,
        n().viewport.zoom
      ],
      n().selectionMode === qi.Partial,
      !0
    ).map((Y) => Y.id));
    const Q = n().defaultEdgeOptions.selectable ?? !0;
    g = /* @__PURE__ */ new Set();
    for (const Y of h) {
      const Z = n().connectionLookup.get(Y);
      if (Z)
        for (const { edgeId: B } of Z.values()) {
          const F = n().edgeLookup.get(B);
          F && (F.selectable ?? Q) && g.add(B);
        }
    }
    Nu(M, h) || n(n().nodes = n().nodes.map(Eu(h)), !0), Nu(X, g) || n(n().edges = n().edges.map(Eu(g)), !0), n(n().selectionRectMode = "user", !0), n(n().selectionRect = q, !0);
  }
  function $(S) {
    S.button === 0 && (S.target?.releasePointerCapture?.(S.pointerId), !x && S.target === f && L?.(S), n(n().selectionRect = null, !0), x && n(n().selectionRectMode = h.size > 0 ? "nodes" : null, !0), x && u()?.(S));
  }
  const P = (S) => {
    if (Array.isArray(c(w)) && c(w).includes(2)) {
      S.preventDefault();
      return;
    }
    a()?.({ event: S });
  }, A = (S) => {
    x && (S.stopPropagation(), x = !1);
  };
  function L(S) {
    if (x || n().connection.inProgress) {
      x = !1;
      return;
    }
    s()?.({ event: S }), n().unselectNodesAndEdges(), n(n().selectionRectMode = null, !0), n(n().selectionRect = null, !0);
  }
  var H = {
    get store() {
      return n();
    },
    set store(S) {
      n(S), v();
    },
    get panOnDrag() {
      return r();
    },
    set panOnDrag(S = !0) {
      r(S), v();
    },
    get paneClickDistance() {
      return o();
    },
    set paneClickDistance(S = 1) {
      o(S), v();
    },
    get selectionOnDrag() {
      return i();
    },
    set selectionOnDrag(S) {
      i(S), v();
    },
    get onpaneclick() {
      return s();
    },
    set onpaneclick(S) {
      s(S), v();
    },
    get onpanecontextmenu() {
      return a();
    },
    set onpanecontextmenu(S) {
      a(S), v();
    },
    get onselectionstart() {
      return l();
    },
    set onselectionstart(S) {
      l(S), v();
    },
    get onselectionend() {
      return u();
    },
    set onselectionend(S) {
      u(S), v();
    },
    get children() {
      return d();
    },
    set children(S) {
      d(S), v();
    }
  }, j = p2();
  let V;
  var z = /* @__PURE__ */ N(() => c(b) ? void 0 : Su(L, f));
  j.__click = function(...S) {
    c(z)?.apply(this, S);
  }, j.__pointermove = function(...S) {
    (c(b) ? k : void 0)?.apply(this, S);
  }, j.__pointerup = function(...S) {
    (c(b) ? $ : void 0)?.apply(this, S);
  };
  var O = /* @__PURE__ */ N(() => Su(P, f));
  j.__contextmenu = function(...S) {
    c(O)?.apply(this, S);
  };
  var C = K(j);
  return Ye(C, d), R(j), ft(j, (S) => f = S, () => f), Se((S) => V = Ht(j, 1, "svelte-flow__pane svelte-flow__container", null, V, S), [
    () => ({
      draggable: r() === !0 || Array.isArray(r()) && r().includes(0),
      dragging: n().dragging,
      selection: c(y)
    })
  ]), Ii(
    "pointerdown",
    j,
    function(...S) {
      (c(b) ? _ : void 0)?.apply(this, S);
    },
    !0
  ), Ii(
    "click",
    j,
    function(...S) {
      (c(b) ? A : void 0)?.apply(this, S);
    },
    !0
  ), T(e, j), ue(H);
}
hr(["click", "pointermove", "pointerup", "contextmenu"]);
se(
  $f,
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
var h2 = /* @__PURE__ */ ee('<div class="svelte-flow__viewport xyflow__viewport svelte-flow__container"><!></div>');
function _f(e, t) {
  le(t, !0);
  let n = m(t, "store", 15), r = m(t, "children", 7);
  var o = {
    get store() {
      return n();
    },
    set store(l) {
      n(l), v();
    },
    get children() {
      return r();
    },
    set children(l) {
      r(l), v();
    }
  }, i = h2();
  let s;
  var a = K(i);
  return Ye(a, r), R(i), Se(() => s = wt(i, "", s, {
    transform: `translate(${n().viewport.x ?? ""}px, ${n().viewport.y ?? ""}px) scale(${n().viewport.zoom ?? ""})`
  })), T(e, i), ue(o);
}
se(_f, { store: {}, children: {} }, [], [], !0);
function Sf(e, t) {
  const { store: n, onDrag: r, onDragStart: o, onDragStop: i, onNodeMouseDown: s } = t, a = Ay({
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
var g2 = /* @__PURE__ */ ee('<div aria-live="assertive" aria-atomic="true" class="a11y-live-msg svelte-wlt670"> </div>'), v2 = /* @__PURE__ */ ee('<div class="a11y-hidden svelte-wlt670"> </div> <div class="a11y-hidden svelte-wlt670"> </div> <!>', 1);
const m2 = {
  hash: "svelte-wlt670",
  code: ".a11y-hidden.svelte-wlt670 {display:none;}.a11y-live-msg.svelte-wlt670 {position:absolute;width:1px;height:1px;margin:-1px;border:0;padding:0;overflow:hidden;clip:rect(0px, 0px, 0px, 0px);clip-path:inset(100%);}"
};
function Ef(e, t) {
  le(t, !0), Be(e, m2);
  let n = m(t, "store", 7);
  var r = {
    get store() {
      return n();
    },
    set store(f) {
      n(f), v();
    }
  }, o = v2(), i = te(o), s = K(i, !0);
  R(i);
  var a = D(i, 2), l = K(a, !0);
  R(a);
  var u = D(a, 2);
  {
    var d = (f) => {
      var p = g2(), h = K(p, !0);
      R(p), Se(() => {
        $e(p, "id", `${y2}-${n().flowId}`), qe(h, n().ariaLiveMessage);
      }), T(f, p);
    };
    ie(u, (f) => {
      n().disableKeyboardA11y || f(d);
    });
  }
  return Se(() => {
    $e(i, "id", `${Nf}-${n().flowId}`), qe(s, n().disableKeyboardA11y ? n().ariaLabelConfig["node.a11yDescription.default"] : n().ariaLabelConfig["node.a11yDescription.keyboardDisabled"]), $e(a, "id", `${zf}-${n().flowId}`), qe(l, n().ariaLabelConfig["edge.a11yDescription.default"]);
  }), T(e, o), ue(r);
}
se(Ef, { store: {} }, [], [], !0);
const Nf = "svelte-flow__node-desc", zf = "svelte-flow__edge-desc", y2 = "svelte-flow__aria-live";
var w2 = /* @__PURE__ */ ee("<div><!></div>");
function Mf(e, t) {
  le(t, !0);
  let n = m(t, "store", 15), r = m(t, "node", 7), o = m(t, "resizeObserver", 7), i = m(t, "nodeClickDistance", 7), s = m(t, "onnodeclick", 7), a = m(t, "onnodedrag", 7), l = m(t, "onnodedragstart", 7), u = m(t, "onnodedragstop", 7), d = m(t, "onnodepointerenter", 7), f = m(t, "onnodepointerleave", 7), p = m(t, "onnodepointermove", 7), h = m(t, "onnodecontextmenu", 7), g = /* @__PURE__ */ N(() => Et(r().data, () => ({}), !0)), w = /* @__PURE__ */ N(() => Et(r().selected, !1)), y = /* @__PURE__ */ N(() => r().draggable), b = /* @__PURE__ */ N(() => r().selectable), x = /* @__PURE__ */ N(() => Et(r().deletable, !0)), _ = /* @__PURE__ */ N(() => r().connectable), k = /* @__PURE__ */ N(() => r().focusable), $ = /* @__PURE__ */ N(() => Et(r().hidden, !1)), P = /* @__PURE__ */ N(() => Et(r().dragging, !1)), A = /* @__PURE__ */ N(() => Et(r().style, "")), L = /* @__PURE__ */ N(() => r().class), H = /* @__PURE__ */ N(() => Et(r().type, "default")), j = /* @__PURE__ */ N(() => r().parentId), V = /* @__PURE__ */ N(() => r().sourcePosition), z = /* @__PURE__ */ N(() => r().targetPosition), O = /* @__PURE__ */ N(() => Et(r().measured, () => ({ width: 0, height: 0 }), !0).width), C = /* @__PURE__ */ N(() => Et(r().measured, () => ({ width: 0, height: 0 }), !0).height), S = /* @__PURE__ */ N(() => r().initialWidth), E = /* @__PURE__ */ N(() => r().initialHeight), I = /* @__PURE__ */ N(() => r().width), W = /* @__PURE__ */ N(() => r().height), q = /* @__PURE__ */ N(() => r().dragHandle), M = /* @__PURE__ */ N(() => Et(r().internals.z, 0)), X = /* @__PURE__ */ N(() => r().internals.positionAbsolute.x), Q = /* @__PURE__ */ N(() => r().internals.positionAbsolute.y), Y = /* @__PURE__ */ N(() => r().internals.userNode), { id: Z } = r(), B = /* @__PURE__ */ N(() => c(y) ?? n().nodesDraggable), F = /* @__PURE__ */ N(() => c(b) ?? n().elementsSelectable), ne = /* @__PURE__ */ N(() => c(_) ?? n().nodesConnectable), re = /* @__PURE__ */ N(() => Xd(r())), J = /* @__PURE__ */ N(() => !!r().internals.handleBounds), he = /* @__PURE__ */ N(() => c(re) && c(J)), ce = /* @__PURE__ */ N(() => c(k) ?? n().nodesFocusable);
  function oe(fe) {
    return n().parentLookup.has(fe);
  }
  let ae = /* @__PURE__ */ N(() => oe(Z)), pe = /* @__PURE__ */ Ne(null), be = null, ke = c(H), de = c(V), _e = c(z), Ie = /* @__PURE__ */ N(() => n().nodeTypes[c(H)] ?? pl), G = /* @__PURE__ */ N(() => n().ariaLabelConfig);
  Mr("svelteflow__node_connectable", {
    get value() {
      return c(ne);
    }
  }), Mr("svelteflow__node_id", Z);
  let Je = /* @__PURE__ */ N(() => {
    const fe = c(O) === void 0 ? c(I) ?? c(S) : c(I), Me = c(C) === void 0 ? c(W) ?? c(E) : c(W);
    if (!(fe === void 0 && Me === void 0 && c(A) === void 0))
      return `${c(A)};${fe ? `width:${_n(fe)};` : ""}${Me ? `height:${_n(Me)};` : ""}`;
  });
  Ue(() => {
    (c(H) !== ke || c(V) !== de || c(z) !== _e) && c(pe) !== null && requestAnimationFrame(() => {
      c(pe) !== null && n().updateNodeInternals(/* @__PURE__ */ new Map([[Z, { id: Z, nodeElement: c(pe), force: !0 }]]));
    }), ke = c(H), de = c(V), _e = c(z);
  }), Ue(() => {
    o() && (!c(he) || c(pe) !== be) && (be && o().unobserve(be), c(pe) && o().observe(c(pe)), be = c(pe));
  }), qo(() => {
    be && o()?.unobserve(be);
  });
  function He(fe) {
    c(F) && (!n().selectNodesOnDrag || !c(B) || n().nodeDragThreshold > 0) && n().handleNodeSelection(Z), s()?.({ node: c(Y), event: fe });
  }
  function We(fe) {
    if (!(Fd(fe) || n().disableKeyboardA11y))
      if (jd.includes(fe.key) && c(F)) {
        const Me = fe.key === "Escape";
        n().handleNodeSelection(Z, Me, c(pe));
      } else c(B) && r().selected && Object.prototype.hasOwnProperty.call(Ui, fe.key) && (fe.preventDefault(), n(
        n().ariaLiveMessage = c(G)["node.a11yDescription.ariaLiveMessage"]({
          direction: fe.key.replace("Arrow", "").toLowerCase(),
          x: ~~r().internals.positionAbsolute.x,
          y: ~~r().internals.positionAbsolute.y
        }),
        !0
      ), n().moveSelectedNodes(Ui[fe.key], fe.shiftKey ? 4 : 1));
  }
  const je = () => {
    if (n().disableKeyboardA11y || !n().autoPanOnNodeFocus || !c(pe)?.matches(":focus-visible"))
      return;
    const { width: fe, height: Me, viewport: at } = n();
    al(/* @__PURE__ */ new Map([[Z, r()]]), { x: 0, y: 0, width: fe, height: Me }, [at.x, at.y, at.zoom], !0).length > 0 || n().setCenter(r().position.x + (r().measured.width ?? 0) / 2, r().position.y + (r().measured.height ?? 0) / 2, { zoom: at.zoom });
  };
  var rt = {
    get store() {
      return n();
    },
    set store(fe) {
      n(fe), v();
    },
    get node() {
      return r();
    },
    set node(fe) {
      r(fe), v();
    },
    get resizeObserver() {
      return o();
    },
    set resizeObserver(fe) {
      o(fe), v();
    },
    get nodeClickDistance() {
      return i();
    },
    set nodeClickDistance(fe) {
      i(fe), v();
    },
    get onnodeclick() {
      return s();
    },
    set onnodeclick(fe) {
      s(fe), v();
    },
    get onnodedrag() {
      return a();
    },
    set onnodedrag(fe) {
      a(fe), v();
    },
    get onnodedragstart() {
      return l();
    },
    set onnodedragstart(fe) {
      l(fe), v();
    },
    get onnodedragstop() {
      return u();
    },
    set onnodedragstop(fe) {
      u(fe), v();
    },
    get onnodepointerenter() {
      return d();
    },
    set onnodepointerenter(fe) {
      d(fe), v();
    },
    get onnodepointerleave() {
      return f();
    },
    set onnodepointerleave(fe) {
      f(fe), v();
    },
    get onnodepointermove() {
      return p();
    },
    set onnodepointermove(fe) {
      p(fe), v();
    },
    get onnodecontextmenu() {
      return h();
    },
    set onnodecontextmenu(fe) {
      h(fe), v();
    }
  }, St = Ce(), hn = te(St);
  {
    var ct = (fe) => {
      var Me = w2();
      Ge(Me, () => ({
        "data-id": Z,
        class: [
          "svelte-flow__node",
          `svelte-flow__node-${c(H)}`,
          c(L)
        ],
        style: c(Je),
        onclick: He,
        onpointerenter: d() ? (Re) => d()({ node: c(Y), event: Re }) : void 0,
        onpointerleave: f() ? (Re) => f()({ node: c(Y), event: Re }) : void 0,
        onpointermove: p() ? (Re) => p()({ node: c(Y), event: Re }) : void 0,
        oncontextmenu: h() ? (Re) => h()({ node: c(Y), event: Re }) : void 0,
        onkeydown: c(ce) ? We : void 0,
        onfocus: c(ce) ? je : void 0,
        tabIndex: c(ce) ? 0 : void 0,
        role: r().ariaRole ?? (c(ce) ? "group" : void 0),
        "aria-roledescription": "node",
        "aria-describedby": n().disableKeyboardA11y ? void 0 : `${Nf}-${n().flowId}`,
        ...r().domAttributes,
        [er]: {
          dragging: c(P),
          selected: c(w),
          draggable: c(B),
          connectable: c(ne),
          selectable: c(F),
          nopan: c(B),
          parent: c(ae)
        },
        [yn]: {
          "z-index": c(M),
          transform: `translate(${c(X) ?? ""}px, ${c(Q) ?? ""}px)`,
          visibility: c(re) ? "visible" : "hidden"
        }
      }));
      var at = K(Me);
      Fo(at, () => c(Ie), (Re, lt) => {
        lt(Re, {
          get data() {
            return c(g);
          },
          get id() {
            return Z;
          },
          get selected() {
            return c(w);
          },
          get selectable() {
            return c(F);
          },
          get deletable() {
            return c(x);
          },
          get sourcePosition() {
            return c(V);
          },
          get targetPosition() {
            return c(z);
          },
          get zIndex() {
            return c(M);
          },
          get dragging() {
            return c(P);
          },
          get draggable() {
            return c(B);
          },
          get dragHandle() {
            return c(q);
          },
          get parentId() {
            return c(j);
          },
          get type() {
            return c(H);
          },
          get isConnectable() {
            return c(ne);
          },
          get positionAbsoluteX() {
            return c(X);
          },
          get positionAbsoluteY() {
            return c(Q);
          },
          get width() {
            return c(I);
          },
          get height() {
            return c(W);
          }
        });
      }), R(Me), kt(Me, (Re, lt) => Sf?.(Re, lt), () => ({
        nodeId: Z,
        isSelectable: c(F),
        disabled: !c(B),
        handleSelector: c(q),
        noDragClass: n().noDragClass,
        nodeClickDistance: i(),
        onNodeMouseDown: n().handleNodeSelection,
        onDrag: (Re, lt, en, ht) => {
          a()?.({ event: Re, targetNode: en, nodes: ht });
        },
        onDragStart: (Re, lt, en, ht) => {
          l()?.({ event: Re, targetNode: en, nodes: ht });
        },
        onDragStop: (Re, lt, en, ht) => {
          u()?.({ event: Re, targetNode: en, nodes: ht });
        },
        store: n()
      })), ft(Me, (Re) => U(pe, Re), () => c(pe)), T(fe, Me);
    };
    ie(hn, (fe) => {
      c($) || fe(ct);
    });
  }
  return T(e, St), ue(rt);
}
se(
  Mf,
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
var b2 = /* @__PURE__ */ ee('<div class="svelte-flow__nodes"></div>');
function Pf(e, t) {
  le(t, !0);
  let n = m(t, "store", 15), r = m(t, "nodeClickDistance", 7), o = m(t, "onnodeclick", 7), i = m(t, "onnodecontextmenu", 7), s = m(t, "onnodepointerenter", 7), a = m(t, "onnodepointermove", 7), l = m(t, "onnodepointerleave", 7), u = m(t, "onnodedrag", 7), d = m(t, "onnodedragstart", 7), f = m(t, "onnodedragstop", 7);
  const p = typeof ResizeObserver > "u" ? null : new ResizeObserver((w) => {
    const y = /* @__PURE__ */ new Map();
    w.forEach((b) => {
      const x = b.target.getAttribute("data-id");
      y.set(x, { id: x, nodeElement: b.target, force: !0 });
    }), n().updateNodeInternals(y);
  });
  qo(() => {
    p?.disconnect();
  });
  var h = {
    get store() {
      return n();
    },
    set store(w) {
      n(w), v();
    },
    get nodeClickDistance() {
      return r();
    },
    set nodeClickDistance(w) {
      r(w), v();
    },
    get onnodeclick() {
      return o();
    },
    set onnodeclick(w) {
      o(w), v();
    },
    get onnodecontextmenu() {
      return i();
    },
    set onnodecontextmenu(w) {
      i(w), v();
    },
    get onnodepointerenter() {
      return s();
    },
    set onnodepointerenter(w) {
      s(w), v();
    },
    get onnodepointermove() {
      return a();
    },
    set onnodepointermove(w) {
      a(w), v();
    },
    get onnodepointerleave() {
      return l();
    },
    set onnodepointerleave(w) {
      l(w), v();
    },
    get onnodedrag() {
      return u();
    },
    set onnodedrag(w) {
      u(w), v();
    },
    get onnodedragstart() {
      return d();
    },
    set onnodedragstart(w) {
      d(w), v();
    },
    get onnodedragstop() {
      return f();
    },
    set onnodedragstop(w) {
      f(w), v();
    }
  }, g = b2();
  return yt(g, 21, () => n().visible.nodes.values(), (w) => w.id, (w, y) => {
    Mf(w, {
      get node() {
        return c(y);
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
        return f();
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
  }), R(g), T(e, g), ue(h);
}
se(
  Pf,
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
var x2 = /* @__PURE__ */ me('<svg class="svelte-flow__edge-wrapper"><g><!></g></svg>');
function Of(e, t) {
  le(t, !0);
  const n = m(t, "edge", 7), r = m(t, "store", 15), o = m(t, "onedgeclick", 7), i = m(t, "onedgecontextmenu", 7), s = m(t, "onedgepointerenter", 7), a = m(t, "onedgepointerleave", 7);
  let l = /* @__PURE__ */ N(() => n().source), u = /* @__PURE__ */ N(() => n().target), d = /* @__PURE__ */ N(() => n().sourceX), f = /* @__PURE__ */ N(() => n().sourceY), p = /* @__PURE__ */ N(() => n().targetX), h = /* @__PURE__ */ N(() => n().targetY), g = /* @__PURE__ */ N(() => n().sourcePosition), w = /* @__PURE__ */ N(() => n().targetPosition), y = /* @__PURE__ */ N(() => Et(n().animated, !1)), b = /* @__PURE__ */ N(() => Et(n().selected, !1)), x = /* @__PURE__ */ N(() => n().label), _ = /* @__PURE__ */ N(() => n().labelStyle), k = /* @__PURE__ */ N(() => Et(n().data, () => ({}), !0)), $ = /* @__PURE__ */ N(() => n().style), P = /* @__PURE__ */ N(() => n().interactionWidth), A = /* @__PURE__ */ N(() => Et(n().type, "default")), L = /* @__PURE__ */ N(() => n().sourceHandle), H = /* @__PURE__ */ N(() => n().targetHandle), j = /* @__PURE__ */ N(() => n().markerStart), V = /* @__PURE__ */ N(() => n().markerEnd), z = /* @__PURE__ */ N(() => n().selectable), O = /* @__PURE__ */ N(() => n().focusable), C = /* @__PURE__ */ N(() => Et(n().deletable, !0)), S = /* @__PURE__ */ N(() => n().hidden), E = /* @__PURE__ */ N(() => n().zIndex), I = /* @__PURE__ */ N(() => n().class), W = /* @__PURE__ */ N(() => n().ariaLabel), q = null;
  const { id: M } = n();
  Mr("svelteflow__edge_id", M);
  let X = /* @__PURE__ */ N(() => c(z) ?? r().elementsSelectable), Q = /* @__PURE__ */ N(() => c(O) ?? r().edgesFocusable), Y = /* @__PURE__ */ N(() => r().edgeTypes[c(A)] ?? hl), Z = /* @__PURE__ */ N(() => c(j) ? `url('#${va(c(j), r().flowId)}')` : void 0), B = /* @__PURE__ */ N(() => c(V) ? `url('#${va(c(V), r().flowId)}')` : void 0);
  function F(ae) {
    const pe = r().edgeLookup.get(M);
    pe && (c(X) && r().handleEdgeSelection(M), o()?.({ event: ae, edge: pe }));
  }
  function ne(ae, pe) {
    const be = r().edgeLookup.get(M);
    be && pe({ event: ae, edge: be });
  }
  function re(ae) {
    if (!r().disableKeyboardA11y && jd.includes(ae.key) && c(X)) {
      const { unselectNodesAndEdges: pe, addSelectedEdges: be } = r();
      ae.key === "Escape" ? (q?.blur(), pe({ edges: [n()] })) : be([M]);
    }
  }
  var J = {
    get edge() {
      return n();
    },
    set edge(ae) {
      n(ae), v();
    },
    get store() {
      return r();
    },
    set store(ae) {
      r(ae), v();
    },
    get onedgeclick() {
      return o();
    },
    set onedgeclick(ae) {
      o(ae), v();
    },
    get onedgecontextmenu() {
      return i();
    },
    set onedgecontextmenu(ae) {
      i(ae), v();
    },
    get onedgepointerenter() {
      return s();
    },
    set onedgepointerenter(ae) {
      s(ae), v();
    },
    get onedgepointerleave() {
      return a();
    },
    set onedgepointerleave(ae) {
      a(ae), v();
    }
  }, he = Ce(), ce = te(he);
  {
    var oe = (ae) => {
      var pe = x2();
      let be;
      var ke = K(pe);
      Ge(ke, () => ({
        class: ["svelte-flow__edge", c(I)],
        "data-id": M,
        onclick: F,
        oncontextmenu: i() ? (_e) => {
          ne(_e, i());
        } : void 0,
        onpointerenter: s() ? (_e) => {
          ne(_e, s());
        } : void 0,
        onpointerleave: a() ? (_e) => {
          ne(_e, a());
        } : void 0,
        "aria-label": c(W) === null ? void 0 : c(W) ? c(W) : `Edge from ${c(l)} to ${c(u)}`,
        "aria-describedby": c(Q) ? `${zf}-${r().flowId}` : void 0,
        role: n().ariaRole ?? (c(Q) ? "group" : "img"),
        "aria-roledescription": "edge",
        onkeydown: c(Q) ? re : void 0,
        tabindex: c(Q) ? 0 : void 0,
        ...n().domAttributes,
        [er]: {
          animated: c(y),
          selected: c(b),
          selectable: c(X)
        }
      }));
      var de = K(ke);
      Fo(de, () => c(Y), (_e, Ie) => {
        Ie(_e, {
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
            return c(f);
          },
          get targetX() {
            return c(p);
          },
          get targetY() {
            return c(h);
          },
          get sourcePosition() {
            return c(g);
          },
          get targetPosition() {
            return c(w);
          },
          get animated() {
            return c(y);
          },
          get selected() {
            return c(b);
          },
          get label() {
            return c(x);
          },
          get labelStyle() {
            return c(_);
          },
          get data() {
            return c(k);
          },
          get style() {
            return c($);
          },
          get interactionWidth() {
            return c(P);
          },
          get selectable() {
            return c(X);
          },
          get deletable() {
            return c(C);
          },
          get type() {
            return c(A);
          },
          get sourceHandleId() {
            return c(L);
          },
          get targetHandleId() {
            return c(H);
          },
          get markerStart() {
            return c(Z);
          },
          get markerEnd() {
            return c(B);
          }
        });
      }), R(ke), ft(ke, (_e) => q = _e, () => q), R(pe), Se(() => be = wt(pe, "", be, { "z-index": c(E) })), T(ae, pe);
    };
    ie(ce, (ae) => {
      c(S) || ae(oe);
    });
  }
  return T(e, he), ue(J);
}
se(
  Of,
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
lg();
var k2 = /* @__PURE__ */ me("<defs></defs>");
function Tf(e, t) {
  le(t, !1);
  const n = fn();
  Ja();
  var r = k2();
  yt(r, 5, () => n.markers, (o) => o.id, (o, i) => {
    Vf(o, Ke(() => c(i)));
  }), R(r), T(e, r), ue();
}
se(Tf, {}, [], [], !0);
var C2 = /* @__PURE__ */ me('<polyline class="arrow" fill="none" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4"></polyline>'), $2 = /* @__PURE__ */ me('<polyline class="arrowclosed" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), _2 = /* @__PURE__ */ me('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function Vf(e, t) {
  le(t, !0);
  let n = m(t, "id", 7), r = m(t, "type", 7), o = m(t, "width", 7, 12.5), i = m(t, "height", 7, 12.5), s = m(t, "markerUnits", 7, "strokeWidth"), a = m(t, "orient", 7, "auto-start-reverse"), l = m(t, "color", 7, "none"), u = m(t, "strokeWidth", 7);
  var d = {
    get id() {
      return n();
    },
    set id(w) {
      n(w), v();
    },
    get type() {
      return r();
    },
    set type(w) {
      r(w), v();
    },
    get width() {
      return o();
    },
    set width(w = 12.5) {
      o(w), v();
    },
    get height() {
      return i();
    },
    set height(w = 12.5) {
      i(w), v();
    },
    get markerUnits() {
      return s();
    },
    set markerUnits(w = "strokeWidth") {
      s(w), v();
    },
    get orient() {
      return a();
    },
    set orient(w = "auto-start-reverse") {
      a(w), v();
    },
    get color() {
      return l();
    },
    set color(w = "none") {
      l(w), v();
    },
    get strokeWidth() {
      return u();
    },
    set strokeWidth(w) {
      u(w), v();
    }
  }, f = _2(), p = K(f);
  {
    var h = (w) => {
      var y = C2();
      let b;
      Se(() => {
        $e(y, "stroke-width", u()), b = wt(y, "", b, { stroke: l() });
      }), T(w, y);
    }, g = (w) => {
      var y = Ce(), b = te(y);
      {
        var x = (_) => {
          var k = $2();
          let $;
          Se(() => {
            $e(k, "stroke-width", u()), $ = wt(k, "", $, { stroke: l(), fill: l() });
          }), T(_, k);
        };
        ie(
          b,
          (_) => {
            r() === Do.ArrowClosed && _(x);
          },
          !0
        );
      }
      T(w, y);
    };
    ie(p, (w) => {
      r() === Do.Arrow ? w(h) : w(g, !1);
    });
  }
  return R(f), Se(() => {
    $e(f, "id", n()), $e(f, "markerWidth", `${o()}`), $e(f, "markerHeight", `${i()}`), $e(f, "markerUnits", s()), $e(f, "orient", a());
  }), T(e, f), ue(d);
}
se(
  Vf,
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
var S2 = /* @__PURE__ */ ee('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!></div>');
function Af(e, t) {
  le(t, !0);
  let n = m(t, "store", 15), r = m(t, "onedgeclick", 7), o = m(t, "onedgecontextmenu", 7), i = m(t, "onedgepointerenter", 7), s = m(t, "onedgepointerleave", 7);
  var a = {
    get store() {
      return n();
    },
    set store(p) {
      n(p), v();
    },
    get onedgeclick() {
      return r();
    },
    set onedgeclick(p) {
      r(p), v();
    },
    get onedgecontextmenu() {
      return o();
    },
    set onedgecontextmenu(p) {
      o(p), v();
    },
    get onedgepointerenter() {
      return i();
    },
    set onedgepointerenter(p) {
      i(p), v();
    },
    get onedgepointerleave() {
      return s();
    },
    set onedgepointerleave(p) {
      s(p), v();
    }
  }, l = S2(), u = K(l), d = K(u);
  Tf(d, {}), R(u);
  var f = D(u, 2);
  return yt(f, 17, () => n().visible.edges.values(), (p) => p.id, (p, h) => {
    Of(p, {
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
      set store(g) {
        n(g);
      }
    });
  }), R(l), T(e, l), ue(a);
}
se(
  Af,
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
var E2 = /* @__PURE__ */ ee('<div class="svelte-flow__selection svelte-1rrpn9s"></div>');
const N2 = {
  hash: "svelte-1rrpn9s",
  code: ".svelte-flow__selection.svelte-1rrpn9s {position:absolute;top:0;left:0;}"
};
function gl(e, t) {
  le(t, !0), Be(e, N2);
  let n = m(t, "x", 7, 0), r = m(t, "y", 7, 0), o = m(t, "width", 7, 0), i = m(t, "height", 7, 0), s = m(t, "isVisible", 7, !0);
  var a = {
    get x() {
      return n();
    },
    set x(f = 0) {
      n(f), v();
    },
    get y() {
      return r();
    },
    set y(f = 0) {
      r(f), v();
    },
    get width() {
      return o();
    },
    set width(f = 0) {
      o(f), v();
    },
    get height() {
      return i();
    },
    set height(f = 0) {
      i(f), v();
    },
    get isVisible() {
      return s();
    },
    set isVisible(f = !0) {
      s(f), v();
    }
  }, l = Ce(), u = te(l);
  {
    var d = (f) => {
      var p = E2();
      let h;
      Se((g) => h = wt(p, "", h, g), [
        () => ({
          width: typeof o() == "string" ? o() : _n(o()),
          height: typeof i() == "string" ? i() : _n(i()),
          transform: `translate(${n()}px, ${r()}px)`
        })
      ]), T(f, p);
    };
    ie(u, (f) => {
      s() && f(d);
    });
  }
  return T(e, l), ue(a);
}
se(gl, { x: {}, y: {}, width: {}, height: {}, isVisible: {} }, [], [], !0);
var z2 = /* @__PURE__ */ ee("<div><!></div>");
const M2 = {
  hash: "svelte-ceq0zw",
  code: `.svelte-flow__selection-wrapper.svelte-ceq0zw {position:absolute;top:0;left:0;z-index:2000;pointer-events:all;}.svelte-flow__selection-wrapper.svelte-ceq0zw:focus,
  .svelte-flow__selection-wrapper.svelte-ceq0zw:focus-visible {outline:none;}`
};
function Lf(e, t) {
  le(t, !0), Be(e, M2);
  let n = m(t, "store", 15), r = m(t, "onnodedrag", 7), o = m(t, "onnodedragstart", 7), i = m(t, "onnodedragstop", 7), s = m(t, "onselectionclick", 7), a = m(t, "onselectioncontextmenu", 7), l = /* @__PURE__ */ Ne(void 0);
  Ue(() => {
    n().disableKeyboardA11y || c(l)?.focus({ preventScroll: !0 });
  });
  let u = /* @__PURE__ */ N(() => {
    if (n().selectionRectMode === "nodes") {
      n().nodes;
      const b = Qo(n().nodeLookup, { filter: (x) => !!x.selected });
      if (b.width > 0 && b.height > 0)
        return b;
    }
    return null;
  });
  function d(b) {
    const x = n().nodes.filter((_) => _.selected);
    a()?.({ nodes: x, event: b });
  }
  function f(b) {
    const x = n().nodes.filter((_) => _.selected);
    s()?.({ nodes: x, event: b });
  }
  function p(b) {
    Object.prototype.hasOwnProperty.call(Ui, b.key) && (b.preventDefault(), n().moveSelectedNodes(Ui[b.key], b.shiftKey ? 4 : 1));
  }
  var h = {
    get store() {
      return n();
    },
    set store(b) {
      n(b), v();
    },
    get onnodedrag() {
      return r();
    },
    set onnodedrag(b) {
      r(b), v();
    },
    get onnodedragstart() {
      return o();
    },
    set onnodedragstart(b) {
      o(b), v();
    },
    get onnodedragstop() {
      return i();
    },
    set onnodedragstop(b) {
      i(b), v();
    },
    get onselectionclick() {
      return s();
    },
    set onselectionclick(b) {
      s(b), v();
    },
    get onselectioncontextmenu() {
      return a();
    },
    set onselectioncontextmenu(b) {
      a(b), v();
    }
  }, g = Ce(), w = te(g);
  {
    var y = (b) => {
      var x = z2();
      x.__contextmenu = d, x.__click = f, x.__keydown = function(...$) {
        (n().disableKeyboardA11y ? void 0 : p)?.apply(this, $);
      };
      let _;
      var k = K(x);
      gl(k, { width: "100%", height: "100%", x: 0, y: 0 }), R(x), kt(x, ($, P) => Sf?.($, P), () => ({
        disabled: !1,
        store: n(),
        onDrag: ($, P, A, L) => {
          r()?.({ event: $, targetNode: null, nodes: L });
        },
        onDragStart: ($, P, A, L) => {
          o()?.({ event: $, targetNode: null, nodes: L });
        },
        onDragStop: ($, P, A, L) => {
          i()?.({ event: $, targetNode: null, nodes: L });
        }
      })), ft(x, ($) => U(l, $), () => c(l)), Se(
        ($) => {
          Ht(x, 1, Yn(["svelte-flow__selection-wrapper", n().noPanClass]), "svelte-ceq0zw"), $e(x, "role", n().disableKeyboardA11y ? void 0 : "button"), $e(x, "tabindex", n().disableKeyboardA11y ? void 0 : -1), _ = wt(x, "", _, $);
        },
        [
          () => ({
            width: _n(c(u).width),
            height: _n(c(u).height),
            transform: `translate(${c(u).x ?? ""}px, ${c(u).y ?? ""}px)`
          })
        ]
      ), T(b, x);
    };
    ie(w, (b) => {
      n().selectionRectMode === "nodes" && c(u) && An(c(u).x) && An(c(u).y) && b(y);
    });
  }
  return T(e, g), ue(h);
}
hr(["contextmenu", "click", "keydown"]);
se(
  Lf,
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
function P2(e) {
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
function gn(e, t) {
  let { enabled: n = !0, trigger: r, type: o = "keydown" } = t;
  function i(a) {
    const l = Array.isArray(r) ? r : [r], u = [a.metaKey, a.altKey, a.shiftKey, a.ctrlKey].reduce(
      (d, f, p) => f ? d | 1 << p : d,
      0
    );
    for (const d of l) {
      const f = {
        preventDefault: !1,
        enabled: !0,
        ...d
      }, { modifier: p, key: h, callback: g, preventDefault: w, enabled: y } = f;
      if (y) {
        if (a.key !== h) continue;
        if (p === null || p === !1) {
          if (u !== 0) continue;
        } else if (p !== void 0 && p?.[0]?.length > 0) {
          const x = Array.isArray(p) ? p : [p];
          let _ = !1;
          for (const k of x)
            if ((Array.isArray(k) ? k : [k]).reduce(
              ($, P) => $ | P2(P),
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
          trigger: f,
          originalEvent: a
        };
        e.dispatchEvent(new CustomEvent("shortcut", { detail: b })), g?.(b);
      }
    }
  }
  let s;
  return n && (s = $n(e, o, i)), {
    update: (a) => {
      const { enabled: l = !0, type: u = "keydown" } = a;
      n && (!l || o !== u) ? s?.() : !n && l && (s = $n(e, u, i)), n = l, o = u, r = a.trigger;
    },
    destroy: () => {
      s?.();
    }
  };
}
function pt() {
  const e = /* @__PURE__ */ N(fn), t = (i) => {
    const s = $u(i) ? i : c(e).nodeLookup.get(i.id), a = s.parentId ? sy(s.position, s.measured, s.parentId, c(e).nodeLookup, c(e).nodeOrigin) : s.position, l = {
      ...s,
      position: a,
      width: s.measured?.width ?? s.width,
      height: s.measured?.height ?? s.height
    };
    return io(l);
  };
  function n(i, s, a = { replace: !1 }) {
    c(e).nodes = Qe(() => c(e).nodes).map((l) => {
      if (l.id === i) {
        const u = typeof s == "function" ? s(l) : s;
        return a?.replace && $u(u) ? u : { ...l, ...u };
      }
      return l;
    });
  }
  function r(i, s, a = { replace: !1 }) {
    c(e).edges = Qe(() => c(e).edges).map((l) => {
      if (l.id === i) {
        const u = typeof s == "function" ? s(l) : s;
        return a.replace && e2(u) ? u : { ...l, ...u };
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
    getNodes: (i) => i === void 0 ? c(e).nodes : zu(c(e).nodeLookup, i),
    getEdge: (i) => c(e).edgeLookup.get(i),
    getEdges: (i) => i === void 0 ? c(e).edges : zu(c(e).edgeLookup, i),
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
    getViewport: () => Ra(c(e).viewport),
    setCenter: async (i, s, a) => c(e).setCenter(i, s, a),
    fitView: (i) => c(e).fitView(i),
    fitBounds: async (i, s) => {
      if (!c(e).panZoom)
        return Promise.resolve(!1);
      const a = ll(i, c(e).width, c(e).height, c(e).minZoom, c(e).maxZoom, s?.padding ?? 0.1);
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
      const l = fu(i), u = l ? i : t(i);
      return u ? (a || c(e).nodes).filter((d) => {
        const f = c(e).nodeLookup.get(d.id);
        if (!f || !l && d.id === i.id)
          return !1;
        const p = io(f), h = Ho(p, u);
        return s && h > 0 || h >= p.width * p.height || h >= u.width * u.height;
      }) : [];
    },
    isNodeIntersecting: (i, s, a = !0) => {
      const l = fu(i) ? i : t(i);
      if (!l)
        return !1;
      const u = Ho(l, s);
      return a && u > 0 || u >= s.width * s.height || u >= l.width * l.height;
    },
    deleteElements: async ({ nodes: i = [], edges: s = [] }) => {
      const { nodes: a, edges: l } = await ny({
        nodesToRemove: i,
        edgesToRemove: s,
        nodes: c(e).nodes,
        edges: c(e).edges,
        onBeforeDelete: c(e).onbeforedelete
      });
      return a && (c(e).nodes = Qe(() => c(e).nodes).filter((u) => !a.some(({ id: d }) => d === u.id))), l && (c(e).edges = Qe(() => c(e).edges).filter((u) => !l.some(({ id: d }) => d === u.id))), (a.length > 0 || l.length > 0) && c(e).ondelete?.({ nodes: a, edges: l }), { deletedNodes: a, deletedEdges: l };
    },
    screenToFlowPosition: (i, s = { snapToGrid: !0 }) => {
      if (!c(e).domNode)
        return i;
      const a = s.snapToGrid ? c(e).snapGrid : !1, { x: l, y: u, zoom: d } = c(e).viewport, { x: f, y: p } = c(e).domNode.getBoundingClientRect(), h = { x: i.x - f, y: i.y - p };
      return ti(h, [l, u, d], a !== null, a || [1, 1]);
    },
    /**
     *
     * @param position
     * @returns
     */
    flowToScreenPosition: (i) => {
      if (!c(e).domNode)
        return i;
      const { x: s, y: a, zoom: l } = c(e).viewport, { x: u, y: d } = c(e).domNode.getBoundingClientRect(), f = Gi(i, [s, a, l]);
      return { x: f.x + u, y: f.y + d };
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
    getNodesBounds: (i) => J0(i, {
      nodeLookup: c(e).nodeLookup,
      nodeOrigin: c(e).nodeOrigin
    }),
    getHandleConnections: ({ type: i, id: s, nodeId: a }) => Array.from(c(e).connectionLookup.get(`${a}-${i}-${s ?? null}`)?.values() ?? [])
  };
}
function zu(e, t) {
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
function Df(e, t) {
  le(t, !0);
  let n = m(t, "store", 15), r = m(t, "selectionKey", 7, "Shift"), o = m(t, "multiSelectionKey", 23, () => Cr() ? "Meta" : "Control"), i = m(t, "deleteKey", 7, "Backspace"), s = m(t, "panActivationKey", 7, " "), a = m(t, "zoomActivationKey", 23, () => Cr() ? "Meta" : "Control"), { deleteElements: l } = pt();
  function u(y) {
    return y !== null && typeof y == "object";
  }
  function d(y) {
    return u(y) ? y.modifier || [] : [];
  }
  function f(y) {
    return y == null ? "" : u(y) ? y.key : y;
  }
  function p(y, b) {
    return (Array.isArray(y) ? y : [y]).map((x) => {
      const _ = f(x);
      return {
        key: _,
        modifier: d(x),
        enabled: _ !== null,
        callback: b
      };
    });
  }
  function h() {
    n(n().selectionRect = null, !0), n(n().selectionKeyPressed = !1, !0), n(n().multiselectionKeyPressed = !1, !0), n(n().deleteKeyPressed = !1, !0), n(n().panActivationKeyPressed = !1, !0), n(n().zoomActivationKeyPressed = !1, !0);
  }
  function g() {
    const y = n().nodes.filter((x) => x.selected), b = n().edges.filter((x) => x.selected);
    l({ nodes: y, edges: b });
  }
  var w = {
    get store() {
      return n();
    },
    set store(y) {
      n(y), v();
    },
    get selectionKey() {
      return r();
    },
    set selectionKey(y = "Shift") {
      r(y), v();
    },
    get multiSelectionKey() {
      return o();
    },
    set multiSelectionKey(y = Cr() ? "Meta" : "Control") {
      o(y), v();
    },
    get deleteKey() {
      return i();
    },
    set deleteKey(y = "Backspace") {
      i(y), v();
    },
    get panActivationKey() {
      return s();
    },
    set panActivationKey(y = " ") {
      s(y), v();
    },
    get zoomActivationKey() {
      return a();
    },
    set zoomActivationKey(y = Cr() ? "Meta" : "Control") {
      a(y), v();
    }
  };
  return Ii("blur", Tt, h), Ii("contextmenu", Tt, h), kt(Tt, (y, b) => gn?.(y, b), () => ({
    trigger: p(r(), () => n(n().selectionKeyPressed = !0, !0)),
    type: "keydown"
  })), kt(Tt, (y, b) => gn?.(y, b), () => ({
    trigger: p(r(), () => n(n().selectionKeyPressed = !1, !0)),
    type: "keyup"
  })), kt(Tt, (y, b) => gn?.(y, b), () => ({
    trigger: p(o(), () => {
      n(n().multiselectionKeyPressed = !0, !0);
    }),
    type: "keydown"
  })), kt(Tt, (y, b) => gn?.(y, b), () => ({
    trigger: p(o(), () => n(n().multiselectionKeyPressed = !1, !0)),
    type: "keyup"
  })), kt(Tt, (y, b) => gn?.(y, b), () => ({
    trigger: p(i(), (y) => {
      !(y.originalEvent.ctrlKey || y.originalEvent.metaKey || y.originalEvent.shiftKey) && !Fd(y.originalEvent) && (n(n().deleteKeyPressed = !0, !0), g());
    }),
    type: "keydown"
  })), kt(Tt, (y, b) => gn?.(y, b), () => ({
    trigger: p(i(), () => n(n().deleteKeyPressed = !1, !0)),
    type: "keyup"
  })), kt(Tt, (y, b) => gn?.(y, b), () => ({
    trigger: p(s(), () => n(n().panActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), kt(Tt, (y, b) => gn?.(y, b), () => ({
    trigger: p(s(), () => n(n().panActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), kt(Tt, (y, b) => gn?.(y, b), () => ({
    trigger: p(a(), () => n(n().zoomActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), kt(Tt, (y, b) => gn?.(y, b), () => ({
    trigger: p(a(), () => n(n().zoomActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), ue(w);
}
se(
  Df,
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
var O2 = /* @__PURE__ */ me('<path fill="none" class="svelte-flow__connection-path"></path>'), T2 = /* @__PURE__ */ me('<svg class="svelte-flow__connectionline"><g><!></g></svg>');
function Hf(e, t) {
  le(t, !0);
  let n = m(t, "store", 15), r = m(t, "type", 7), o = m(t, "containerStyle", 7), i = m(t, "style", 7), s = m(t, "LineComponent", 7), a = /* @__PURE__ */ N(() => {
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
      case Tn.Bezier: {
        const [h] = Ud(p);
        return h;
      }
      case Tn.Straight: {
        const [h] = Qd(p);
        return h;
      }
      case Tn.Step:
      case Tn.SmoothStep: {
        const [h] = ul({
          ...p,
          borderRadius: r() === Tn.Step ? 0 : void 0
        });
        return h;
      }
    }
  });
  var l = {
    get store() {
      return n();
    },
    set store(p) {
      n(p), v();
    },
    get type() {
      return r();
    },
    set type(p) {
      r(p), v();
    },
    get containerStyle() {
      return o();
    },
    set containerStyle(p) {
      o(p), v();
    },
    get style() {
      return i();
    },
    set style(p) {
      i(p), v();
    },
    get LineComponent() {
      return s();
    },
    set LineComponent(p) {
      s(p), v();
    }
  }, u = Ce(), d = te(u);
  {
    var f = (p) => {
      var h = T2(), g = K(h), w = K(g);
      {
        var y = (x) => {
          var _ = Ce(), k = te(_);
          Fo(k, s, ($, P) => {
            P($, {});
          }), T(x, _);
        }, b = (x) => {
          var _ = O2();
          Se(() => {
            $e(_, "d", c(a)), wt(_, i());
          }), T(x, _);
        };
        ie(w, (x) => {
          s() ? x(y) : x(b, !1);
        });
      }
      R(g), R(h), Se(
        (x) => {
          $e(h, "width", n().width), $e(h, "height", n().height), wt(h, o()), Ht(g, 0, x);
        },
        [
          () => Yn([
            "svelte-flow__connection",
            G0(n().connection.isValid)
          ])
        ]
      ), T(p, h);
    };
    ie(d, (p) => {
      n().connection.inProgress && p(f);
    });
  }
  return T(e, u), ue(l);
}
se(
  Hf,
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
var V2 = /* @__PURE__ */ ee("<div><!></div>");
function ri(e, t) {
  le(t, !0);
  let n = m(t, "position", 7, "top-right"), r = m(t, "style", 7), o = m(t, "class", 7), i = m(t, "children", 7), s = /* @__PURE__ */ De(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "position",
    "style",
    "class",
    "children"
  ]), a = /* @__PURE__ */ N(() => `${n()}`.split("-"));
  var l = {
    get position() {
      return n();
    },
    set position(f = "top-right") {
      n(f), v();
    },
    get style() {
      return r();
    },
    set style(f) {
      r(f), v();
    },
    get class() {
      return o();
    },
    set class(f) {
      o(f), v();
    },
    get children() {
      return i();
    },
    set children(f) {
      i(f), v();
    }
  }, u = V2();
  Ge(u, (f) => ({ class: f, style: r(), ...s }), [
    () => ["svelte-flow__panel", o(), ...c(a)]
  ]);
  var d = K(u);
  return Ye(d, () => i() ?? tt), R(u), T(e, u), ue(l);
}
se(ri, { position: {}, style: {}, class: {}, children: {} }, [], [], !0);
var A2 = /* @__PURE__ */ ee('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function If(e, t) {
  le(t, !0);
  let n = m(t, "proOptions", 7), r = m(t, "position", 7, "bottom-right");
  var o = {
    get proOptions() {
      return n();
    },
    set proOptions(l) {
      n(l), v();
    },
    get position() {
      return r();
    },
    set position(l = "bottom-right") {
      r(l), v();
    }
  }, i = Ce(), s = te(i);
  {
    var a = (l) => {
      ri(l, {
        get position() {
          return r();
        },
        class: "svelte-flow__attribution",
        "data-message": "Feel free to remove the attribution or check out how you could support us: https://svelteflow.dev/support-us",
        children: (u, d) => {
          var f = A2();
          T(u, f);
        },
        $$slots: { default: !0 }
      });
    };
    ie(s, (l) => {
      n()?.hideAttribution || l(a);
    });
  }
  return T(e, i), ue(o);
}
se(If, { proOptions: {}, position: {} }, [], [], !0);
var L2 = /* @__PURE__ */ ee("<div><!></div>");
const D2 = {
  hash: "svelte-152mfj7",
  code: ".svelte-flow.svelte-152mfj7 {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;background-color:var(--background-color, var(--background-color-default));}:root {--background-color-default: #fff;--background-pattern-color-default: #ddd;--minimap-mask-color-default: rgb(240, 240, 240, 0.6);--minimap-mask-stroke-color-default: none;--minimap-mask-stroke-width-default: 1;--controls-button-background-color-default: #fefefe;--controls-button-background-color-hover-default: #f4f4f4;--controls-button-color-default: inherit;--controls-button-color-hover-default: inherit;--controls-button-border-color-default: #eee;}"
};
function jf(e, t) {
  le(t, !0), Be(e, D2);
  let n = m(t, "width", 7), r = m(t, "height", 7), o = m(t, "colorMode", 7), i = m(t, "domNode", 15), s = m(t, "clientWidth", 15), a = m(t, "clientHeight", 15), l = m(t, "children", 7), u = m(t, "rest", 7), d = /* @__PURE__ */ N(() => u().class), f = /* @__PURE__ */ N(() => Ag(u(), [
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
  function p(y) {
    y.currentTarget.scrollTo({ top: 0, left: 0, behavior: "auto" }), u().onscroll && u().onscroll(y);
  }
  var h = {
    get width() {
      return n();
    },
    set width(y) {
      n(y), v();
    },
    get height() {
      return r();
    },
    set height(y) {
      r(y), v();
    },
    get colorMode() {
      return o();
    },
    set colorMode(y) {
      o(y), v();
    },
    get domNode() {
      return i();
    },
    set domNode(y) {
      i(y), v();
    },
    get clientWidth() {
      return s();
    },
    set clientWidth(y) {
      s(y), v();
    },
    get clientHeight() {
      return a();
    },
    set clientHeight(y) {
      a(y), v();
    },
    get children() {
      return l();
    },
    set children(y) {
      l(y), v();
    },
    get rest() {
      return u();
    },
    set rest(y) {
      u(y), v();
    }
  }, g = L2();
  Ge(
    g,
    (y) => ({
      class: [
        "svelte-flow",
        "svelte-flow__container",
        c(d),
        o()
      ],
      "data-testid": "svelte-flow__wrapper",
      role: "application",
      onscroll: p,
      ...c(f),
      [yn]: y
    }),
    [
      () => ({ width: _n(n()), height: _n(r()) })
    ],
    void 0,
    void 0,
    "svelte-152mfj7"
  );
  var w = K(g);
  return Ye(w, () => l() ?? tt), R(g), ft(g, (y) => i(y), () => i()), Zl(g, "clientHeight", a), Zl(g, "clientWidth", s), T(e, g), ue(h);
}
se(
  jf,
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
var H2 = /* @__PURE__ */ ee('<div class="svelte-flow__viewport-back svelte-flow__container"></div> <!> <div class="svelte-flow__edge-labels svelte-flow__container"></div> <!> <!> <!> <div class="svelte-flow__viewport-front svelte-flow__container"></div>', 1), I2 = /* @__PURE__ */ ee("<!> <!>", 1), j2 = /* @__PURE__ */ ee("<!> <!> <!> <!> <!>", 1);
function Rf(e, t) {
  le(t, !0);
  let n = m(t, "width", 7), r = m(t, "height", 7), o = m(t, "proOptions", 7), i = m(t, "selectionKey", 7), s = m(t, "deleteKey", 7), a = m(t, "panActivationKey", 7), l = m(t, "multiSelectionKey", 7), u = m(t, "zoomActivationKey", 7), d = m(t, "paneClickDistance", 7, 1), f = m(t, "nodeClickDistance", 7, 1), p = m(t, "onmovestart", 7), h = m(t, "onmoveend", 7), g = m(t, "onmove", 7), w = m(t, "oninit", 7), y = m(t, "onnodeclick", 7), b = m(t, "onnodecontextmenu", 7), x = m(t, "onnodedrag", 7), _ = m(t, "onnodedragstart", 7), k = m(t, "onnodedragstop", 7), $ = m(t, "onnodepointerenter", 7), P = m(t, "onnodepointermove", 7), A = m(t, "onnodepointerleave", 7), L = m(t, "onselectionclick", 7), H = m(t, "onselectioncontextmenu", 7), j = m(t, "onselectionstart", 7), V = m(t, "onselectionend", 7), z = m(t, "onedgeclick", 7), O = m(t, "onedgecontextmenu", 7), C = m(t, "onedgepointerenter", 7), S = m(t, "onedgepointerleave", 7), E = m(t, "onpaneclick", 7), I = m(t, "onpanecontextmenu", 7), W = m(t, "panOnScrollMode", 23, () => Nr.Free), q = m(t, "preventScrolling", 7, !0), M = m(t, "zoomOnScroll", 7, !0), X = m(t, "zoomOnDoubleClick", 7, !0), Q = m(t, "zoomOnPinch", 7, !0), Y = m(t, "panOnScroll", 7, !1), Z = m(t, "panOnScrollSpeed", 7, 0.5), B = m(t, "panOnDrag", 7, !0), F = m(t, "selectionOnDrag", 7, !1), ne = m(t, "connectionLineComponent", 7), re = m(t, "connectionLineStyle", 7), J = m(t, "connectionLineContainerStyle", 7), he = m(t, "connectionLineType", 23, () => Tn.Bezier), ce = m(t, "attributionPosition", 7), oe = m(t, "children", 7), ae = m(t, "nodes", 31, () => $t([])), pe = m(t, "edges", 31, () => $t([])), be = m(t, "viewport", 31, () => {
  }), ke = /* @__PURE__ */ De(t, [
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
  ]), de = kf({
    props: ke,
    width: n(),
    height: r(),
    get nodes() {
      return ae();
    },
    set nodes(G) {
      ae(G);
    },
    get edges() {
      return pe();
    },
    set edges(G) {
      pe(G);
    },
    get viewport() {
      return be();
    },
    set viewport(G) {
      be(G);
    }
  });
  const _e = ln(Ji);
  _e && _e.setStore && _e.setStore(de), Mr(Ji, {
    provider: !1,
    getStore() {
      return de;
    }
  }), Ue(() => {
    const G = { nodes: de.selectedNodes, edges: de.selectedEdges };
    Qe(() => t.onselectionchange)?.(G);
    for (const Je of de.selectionChangeHandlers.values())
      Je(G);
  }), qo(() => {
    de.reset();
  });
  var Ie = {
    get width() {
      return n();
    },
    set width(G) {
      n(G), v();
    },
    get height() {
      return r();
    },
    set height(G) {
      r(G), v();
    },
    get proOptions() {
      return o();
    },
    set proOptions(G) {
      o(G), v();
    },
    get selectionKey() {
      return i();
    },
    set selectionKey(G) {
      i(G), v();
    },
    get deleteKey() {
      return s();
    },
    set deleteKey(G) {
      s(G), v();
    },
    get panActivationKey() {
      return a();
    },
    set panActivationKey(G) {
      a(G), v();
    },
    get multiSelectionKey() {
      return l();
    },
    set multiSelectionKey(G) {
      l(G), v();
    },
    get zoomActivationKey() {
      return u();
    },
    set zoomActivationKey(G) {
      u(G), v();
    },
    get paneClickDistance() {
      return d();
    },
    set paneClickDistance(G = 1) {
      d(G), v();
    },
    get nodeClickDistance() {
      return f();
    },
    set nodeClickDistance(G = 1) {
      f(G), v();
    },
    get onmovestart() {
      return p();
    },
    set onmovestart(G) {
      p(G), v();
    },
    get onmoveend() {
      return h();
    },
    set onmoveend(G) {
      h(G), v();
    },
    get onmove() {
      return g();
    },
    set onmove(G) {
      g(G), v();
    },
    get oninit() {
      return w();
    },
    set oninit(G) {
      w(G), v();
    },
    get onnodeclick() {
      return y();
    },
    set onnodeclick(G) {
      y(G), v();
    },
    get onnodecontextmenu() {
      return b();
    },
    set onnodecontextmenu(G) {
      b(G), v();
    },
    get onnodedrag() {
      return x();
    },
    set onnodedrag(G) {
      x(G), v();
    },
    get onnodedragstart() {
      return _();
    },
    set onnodedragstart(G) {
      _(G), v();
    },
    get onnodedragstop() {
      return k();
    },
    set onnodedragstop(G) {
      k(G), v();
    },
    get onnodepointerenter() {
      return $();
    },
    set onnodepointerenter(G) {
      $(G), v();
    },
    get onnodepointermove() {
      return P();
    },
    set onnodepointermove(G) {
      P(G), v();
    },
    get onnodepointerleave() {
      return A();
    },
    set onnodepointerleave(G) {
      A(G), v();
    },
    get onselectionclick() {
      return L();
    },
    set onselectionclick(G) {
      L(G), v();
    },
    get onselectioncontextmenu() {
      return H();
    },
    set onselectioncontextmenu(G) {
      H(G), v();
    },
    get onselectionstart() {
      return j();
    },
    set onselectionstart(G) {
      j(G), v();
    },
    get onselectionend() {
      return V();
    },
    set onselectionend(G) {
      V(G), v();
    },
    get onedgeclick() {
      return z();
    },
    set onedgeclick(G) {
      z(G), v();
    },
    get onedgecontextmenu() {
      return O();
    },
    set onedgecontextmenu(G) {
      O(G), v();
    },
    get onedgepointerenter() {
      return C();
    },
    set onedgepointerenter(G) {
      C(G), v();
    },
    get onedgepointerleave() {
      return S();
    },
    set onedgepointerleave(G) {
      S(G), v();
    },
    get onpaneclick() {
      return E();
    },
    set onpaneclick(G) {
      E(G), v();
    },
    get onpanecontextmenu() {
      return I();
    },
    set onpanecontextmenu(G) {
      I(G), v();
    },
    get panOnScrollMode() {
      return W();
    },
    set panOnScrollMode(G = Nr.Free) {
      W(G), v();
    },
    get preventScrolling() {
      return q();
    },
    set preventScrolling(G = !0) {
      q(G), v();
    },
    get zoomOnScroll() {
      return M();
    },
    set zoomOnScroll(G = !0) {
      M(G), v();
    },
    get zoomOnDoubleClick() {
      return X();
    },
    set zoomOnDoubleClick(G = !0) {
      X(G), v();
    },
    get zoomOnPinch() {
      return Q();
    },
    set zoomOnPinch(G = !0) {
      Q(G), v();
    },
    get panOnScroll() {
      return Y();
    },
    set panOnScroll(G = !1) {
      Y(G), v();
    },
    get panOnScrollSpeed() {
      return Z();
    },
    set panOnScrollSpeed(G = 0.5) {
      Z(G), v();
    },
    get panOnDrag() {
      return B();
    },
    set panOnDrag(G = !0) {
      B(G), v();
    },
    get selectionOnDrag() {
      return F();
    },
    set selectionOnDrag(G = !1) {
      F(G), v();
    },
    get connectionLineComponent() {
      return ne();
    },
    set connectionLineComponent(G) {
      ne(G), v();
    },
    get connectionLineStyle() {
      return re();
    },
    set connectionLineStyle(G) {
      re(G), v();
    },
    get connectionLineContainerStyle() {
      return J();
    },
    set connectionLineContainerStyle(G) {
      J(G), v();
    },
    get connectionLineType() {
      return he();
    },
    set connectionLineType(G = Tn.Bezier) {
      he(G), v();
    },
    get attributionPosition() {
      return ce();
    },
    set attributionPosition(G) {
      ce(G), v();
    },
    get children() {
      return oe();
    },
    set children(G) {
      oe(G), v();
    },
    get nodes() {
      return ae();
    },
    set nodes(G = []) {
      ae(G), v();
    },
    get edges() {
      return pe();
    },
    set edges(G = []) {
      pe(G), v();
    },
    get viewport() {
      return be();
    },
    set viewport(G = void 0) {
      be(G), v();
    }
  };
  return jf(e, {
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
      return ke;
    },
    get domNode() {
      return de.domNode;
    },
    set domNode(G) {
      de.domNode = G;
    },
    get clientWidth() {
      return de.width;
    },
    set clientWidth(G) {
      de.width = G;
    },
    get clientHeight() {
      return de.height;
    },
    set clientHeight(G) {
      de.height = G;
    },
    children: (G, Je) => {
      var He = j2(), We = te(He);
      Df(We, {
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
        set store(ct) {
          de = ct;
        }
      });
      var je = D(We, 2);
      Cf(je, {
        get panOnScrollMode() {
          return W();
        },
        get preventScrolling() {
          return q();
        },
        get zoomOnScroll() {
          return M();
        },
        get zoomOnDoubleClick() {
          return X();
        },
        get zoomOnPinch() {
          return Q();
        },
        get panOnScroll() {
          return Y();
        },
        get panOnScrollSpeed() {
          return Z();
        },
        get panOnDrag() {
          return B();
        },
        get paneClickDistance() {
          return d();
        },
        get selectionOnDrag() {
          return F();
        },
        get onmovestart() {
          return p();
        },
        get onmove() {
          return g();
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
        set store(ct) {
          de = ct;
        },
        children: (ct, fe) => {
          $f(ct, {
            get onpaneclick() {
              return E();
            },
            get onpanecontextmenu() {
              return I();
            },
            get onselectionstart() {
              return j();
            },
            get onselectionend() {
              return V();
            },
            get panOnDrag() {
              return B();
            },
            get paneClickDistance() {
              return d();
            },
            get selectionOnDrag() {
              return F();
            },
            get store() {
              return de;
            },
            set store(Me) {
              de = Me;
            },
            children: (Me, at) => {
              var Re = I2(), lt = te(Re);
              _f(lt, {
                get store() {
                  return de;
                },
                set store(ht) {
                  de = ht;
                },
                children: (ht, Un) => {
                  var bt = H2(), xt = D(te(bt), 2);
                  Af(xt, {
                    get onedgeclick() {
                      return z();
                    },
                    get onedgecontextmenu() {
                      return O();
                    },
                    get onedgepointerenter() {
                      return C();
                    },
                    get onedgepointerleave() {
                      return S();
                    },
                    get store() {
                      return de;
                    },
                    set store(yr) {
                      de = yr;
                    }
                  });
                  var Xt = D(xt, 4);
                  Hf(Xt, {
                    get type() {
                      return he();
                    },
                    get LineComponent() {
                      return ne();
                    },
                    get containerStyle() {
                      return J();
                    },
                    get style() {
                      return re();
                    },
                    get store() {
                      return de;
                    },
                    set store(yr) {
                      de = yr;
                    }
                  });
                  var Nl = D(Xt, 2);
                  Pf(Nl, {
                    get nodeClickDistance() {
                      return f();
                    },
                    get onnodeclick() {
                      return y();
                    },
                    get onnodecontextmenu() {
                      return b();
                    },
                    get onnodepointerenter() {
                      return $();
                    },
                    get onnodepointermove() {
                      return P();
                    },
                    get onnodepointerleave() {
                      return A();
                    },
                    get onnodedrag() {
                      return x();
                    },
                    get onnodedragstart() {
                      return _();
                    },
                    get onnodedragstop() {
                      return k();
                    },
                    get store() {
                      return de;
                    },
                    set store(yr) {
                      de = yr;
                    }
                  });
                  var Ch = D(Nl, 2);
                  Lf(Ch, {
                    get onselectionclick() {
                      return L();
                    },
                    get onselectioncontextmenu() {
                      return H();
                    },
                    get onnodedrag() {
                      return x();
                    },
                    get onnodedragstart() {
                      return _();
                    },
                    get onnodedragstop() {
                      return k();
                    },
                    get store() {
                      return de;
                    },
                    set store(yr) {
                      de = yr;
                    }
                  }), ye(2), T(ht, bt);
                },
                $$slots: { default: !0 }
              });
              var en = D(lt, 2);
              {
                let ht = /* @__PURE__ */ N(() => !!(de.selectionRect && de.selectionRectMode === "user")), Un = /* @__PURE__ */ N(() => de.selectionRect?.width), bt = /* @__PURE__ */ N(() => de.selectionRect?.height), xt = /* @__PURE__ */ N(() => de.selectionRect?.x), Xt = /* @__PURE__ */ N(() => de.selectionRect?.y);
                gl(en, {
                  get isVisible() {
                    return c(ht);
                  },
                  get width() {
                    return c(Un);
                  },
                  get height() {
                    return c(bt);
                  },
                  get x() {
                    return c(xt);
                  },
                  get y() {
                    return c(Xt);
                  }
                });
              }
              T(Me, Re);
            },
            $$slots: { default: !0 }
          });
        },
        $$slots: { default: !0 }
      });
      var rt = D(je, 2);
      If(rt, {
        get proOptions() {
          return o();
        },
        get position() {
          return ce();
        }
      });
      var St = D(rt, 2);
      Ef(St, {
        get store() {
          return de;
        }
      });
      var hn = D(St, 2);
      Ye(hn, () => oe() ?? tt), T(G, He);
    },
    $$slots: { default: !0 }
  }), ue(Ie);
}
se(
  Rf,
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
function Zf(e, t) {
  le(t, !0);
  let n = m(t, "children", 7), r = /* @__PURE__ */ Ne(kf({ props: {}, nodes: [], edges: [] }));
  Mr(Ji, {
    provider: !0,
    getStore() {
      return c(r);
    },
    setStore: (a) => {
      U(r, a);
    }
  }), qo(() => {
    c(r).reset();
  });
  var o = {
    get children() {
      return n();
    },
    set children(a) {
      n(a), v();
    }
  }, i = Ce(), s = te(i);
  return Ye(s, () => n() ?? tt), T(e, i), ue(o);
}
se(Zf, { children: {} }, [], [], !0);
var R2 = /* @__PURE__ */ ee("<button><!></button>");
function ko(e, t) {
  le(t, !0);
  let n = m(t, "class", 7), r = m(t, "bgColor", 7), o = m(t, "bgColorHover", 7), i = m(t, "color", 7), s = m(t, "colorHover", 7), a = m(t, "borderColor", 7), l = m(t, "onclick", 7), u = m(t, "children", 7), d = /* @__PURE__ */ De(t, [
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
  var f = {
    get class() {
      return n();
    },
    set class(g) {
      n(g), v();
    },
    get bgColor() {
      return r();
    },
    set bgColor(g) {
      r(g), v();
    },
    get bgColorHover() {
      return o();
    },
    set bgColorHover(g) {
      o(g), v();
    },
    get color() {
      return i();
    },
    set color(g) {
      i(g), v();
    },
    get colorHover() {
      return s();
    },
    set colorHover(g) {
      s(g), v();
    },
    get borderColor() {
      return a();
    },
    set borderColor(g) {
      a(g), v();
    },
    get onclick() {
      return l();
    },
    set onclick(g) {
      l(g), v();
    },
    get children() {
      return u();
    },
    set children(g) {
      u(g), v();
    }
  }, p = R2();
  Ge(p, () => ({
    type: "button",
    onclick: l(),
    class: ["svelte-flow__controls-button", n()],
    ...d,
    [yn]: {
      "--xy-controls-button-background-color-props": r(),
      "--xy-controls-button-background-color-hover-props": o(),
      "--xy-controls-button-color-props": i(),
      "--xy-controls-button-color-hover-props": s(),
      "--xy-controls-button-border-color-props": a()
    }
  }));
  var h = K(p);
  return Ye(h, () => u() ?? tt), R(p), T(e, p), ue(f);
}
se(
  ko,
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
var Z2 = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function Kf(e) {
  var t = Z2();
  T(e, t);
}
se(Kf, {}, [], [], !0);
var K2 = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function Bf(e) {
  var t = K2();
  T(e, t);
}
se(Bf, {}, [], [], !0);
var B2 = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function Wf(e) {
  var t = B2();
  T(e, t);
}
se(Wf, {}, [], [], !0);
var W2 = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function Xf(e) {
  var t = W2();
  T(e, t);
}
se(Xf, {}, [], [], !0);
var X2 = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function Yf(e) {
  var t = X2();
  T(e, t);
}
se(Yf, {}, [], [], !0);
var Y2 = /* @__PURE__ */ ee("<!> <!>", 1), q2 = /* @__PURE__ */ ee("<!> <!> <!> <!> <!> <!>", 1);
function qf(e, t) {
  le(t, !0);
  let n = m(t, "position", 7, "bottom-left"), r = m(t, "orientation", 7, "vertical"), o = m(t, "showZoom", 7, !0), i = m(t, "showFitView", 7, !0), s = m(t, "showLock", 7, !0), a = m(t, "style", 7), l = m(t, "class", 7), u = m(t, "buttonBgColor", 7), d = m(t, "buttonBgColorHover", 7), f = m(t, "buttonColor", 7), p = m(t, "buttonColorHover", 7), h = m(t, "buttonBorderColor", 7), g = m(t, "fitViewOptions", 7), w = m(t, "children", 7), y = m(t, "before", 7), b = m(t, "after", 7), x = /* @__PURE__ */ De(t, [
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
  ]), _ = /* @__PURE__ */ N(fn);
  const k = {
    bgColor: u(),
    bgColorHover: d(),
    color: f(),
    colorHover: p(),
    borderColor: h()
  };
  let $ = /* @__PURE__ */ N(() => c(_).nodesDraggable || c(_).nodesConnectable || c(_).elementsSelectable), P = /* @__PURE__ */ N(() => c(_).viewport.zoom <= c(_).minZoom), A = /* @__PURE__ */ N(() => c(_).viewport.zoom >= c(_).maxZoom), L = /* @__PURE__ */ N(() => c(_).ariaLabelConfig), H = /* @__PURE__ */ N(() => r() === "horizontal" ? "horizontal" : "vertical");
  const j = () => {
    c(_).zoomIn();
  }, V = () => {
    c(_).zoomOut();
  }, z = () => {
    c(_).fitView(g());
  }, O = () => {
    let S = !c($);
    c(_).nodesDraggable = S, c(_).nodesConnectable = S, c(_).elementsSelectable = S;
  };
  var C = {
    get position() {
      return n();
    },
    set position(S = "bottom-left") {
      n(S), v();
    },
    get orientation() {
      return r();
    },
    set orientation(S = "vertical") {
      r(S), v();
    },
    get showZoom() {
      return o();
    },
    set showZoom(S = !0) {
      o(S), v();
    },
    get showFitView() {
      return i();
    },
    set showFitView(S = !0) {
      i(S), v();
    },
    get showLock() {
      return s();
    },
    set showLock(S = !0) {
      s(S), v();
    },
    get style() {
      return a();
    },
    set style(S) {
      a(S), v();
    },
    get class() {
      return l();
    },
    set class(S) {
      l(S), v();
    },
    get buttonBgColor() {
      return u();
    },
    set buttonBgColor(S) {
      u(S), v();
    },
    get buttonBgColorHover() {
      return d();
    },
    set buttonBgColorHover(S) {
      d(S), v();
    },
    get buttonColor() {
      return f();
    },
    set buttonColor(S) {
      f(S), v();
    },
    get buttonColorHover() {
      return p();
    },
    set buttonColorHover(S) {
      p(S), v();
    },
    get buttonBorderColor() {
      return h();
    },
    set buttonBorderColor(S) {
      h(S), v();
    },
    get fitViewOptions() {
      return g();
    },
    set fitViewOptions(S) {
      g(S), v();
    },
    get children() {
      return w();
    },
    set children(S) {
      w(S), v();
    },
    get before() {
      return y();
    },
    set before(S) {
      y(S), v();
    },
    get after() {
      return b();
    },
    set after(S) {
      b(S), v();
    }
  };
  {
    let S = /* @__PURE__ */ N(() => [
      "svelte-flow__controls",
      c(H),
      l()
    ]);
    ri(e, Ke(
      {
        get class() {
          return c(S);
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
      () => x,
      {
        children: (E, I) => {
          var W = q2(), q = te(W);
          {
            var M = (ce) => {
              var oe = Ce(), ae = te(oe);
              Ye(ae, y), T(ce, oe);
            };
            ie(q, (ce) => {
              y() && ce(M);
            });
          }
          var X = D(q, 2);
          {
            var Q = (ce) => {
              var oe = Y2(), ae = te(oe);
              ko(ae, Ke(
                {
                  onclick: j,
                  class: "svelte-flow__controls-zoomin",
                  get title() {
                    return c(L)["controls.zoomIn.ariaLabel"];
                  },
                  get "aria-label"() {
                    return c(L)["controls.zoomIn.ariaLabel"];
                  },
                  get disabled() {
                    return c(A);
                  }
                },
                () => k,
                {
                  children: (be, ke) => {
                    Kf(be);
                  },
                  $$slots: { default: !0 }
                }
              ));
              var pe = D(ae, 2);
              ko(pe, Ke(
                {
                  onclick: V,
                  class: "svelte-flow__controls-zoomout",
                  get title() {
                    return c(L)["controls.zoomOut.ariaLabel"];
                  },
                  get "aria-label"() {
                    return c(L)["controls.zoomOut.ariaLabel"];
                  },
                  get disabled() {
                    return c(P);
                  }
                },
                () => k,
                {
                  children: (be, ke) => {
                    Bf(be);
                  },
                  $$slots: { default: !0 }
                }
              )), T(ce, oe);
            };
            ie(X, (ce) => {
              o() && ce(Q);
            });
          }
          var Y = D(X, 2);
          {
            var Z = (ce) => {
              ko(ce, Ke(
                {
                  class: "svelte-flow__controls-fitview",
                  onclick: z,
                  get title() {
                    return c(L)["controls.fitView.ariaLabel"];
                  },
                  get "aria-label"() {
                    return c(L)["controls.fitView.ariaLabel"];
                  }
                },
                () => k,
                {
                  children: (oe, ae) => {
                    Wf(oe);
                  },
                  $$slots: { default: !0 }
                }
              ));
            };
            ie(Y, (ce) => {
              i() && ce(Z);
            });
          }
          var B = D(Y, 2);
          {
            var F = (ce) => {
              ko(ce, Ke(
                {
                  class: "svelte-flow__controls-interactive",
                  onclick: O,
                  get title() {
                    return c(L)["controls.interactive.ariaLabel"];
                  },
                  get "aria-label"() {
                    return c(L)["controls.interactive.ariaLabel"];
                  }
                },
                () => k,
                {
                  children: (oe, ae) => {
                    var pe = Ce(), be = te(pe);
                    {
                      var ke = (_e) => {
                        Yf(_e);
                      }, de = (_e) => {
                        Xf(_e);
                      };
                      ie(be, (_e) => {
                        c($) ? _e(ke) : _e(de, !1);
                      });
                    }
                    T(oe, pe);
                  },
                  $$slots: { default: !0 }
                }
              ));
            };
            ie(B, (ce) => {
              s() && ce(F);
            });
          }
          var ne = D(B, 2);
          {
            var re = (ce) => {
              var oe = Ce(), ae = te(oe);
              Ye(ae, w), T(ce, oe);
            };
            ie(ne, (ce) => {
              w() && ce(re);
            });
          }
          var J = D(ne, 2);
          {
            var he = (ce) => {
              var oe = Ce(), ae = te(oe);
              Ye(ae, b), T(ce, oe);
            };
            ie(J, (ce) => {
              b() && ce(he);
            });
          }
          T(E, W);
        },
        $$slots: { default: !0 }
      }
    ));
  }
  return ue(C);
}
se(
  qf,
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
var Ln;
(function(e) {
  e.Lines = "lines", e.Dots = "dots", e.Cross = "cross";
})(Ln || (Ln = {}));
var F2 = /* @__PURE__ */ me("<circle></circle>");
function Ff(e, t) {
  le(t, !0);
  let n = m(t, "radius", 7), r = m(t, "class", 7);
  var o = {
    get radius() {
      return n();
    },
    set radius(s) {
      n(s), v();
    },
    get class() {
      return r();
    },
    set class(s) {
      r(s), v();
    }
  }, i = F2();
  return Se(() => {
    $e(i, "cx", n()), $e(i, "cy", n()), $e(i, "r", n()), Ht(i, 0, Yn(["svelte-flow__background-pattern", "dots", r()]));
  }), T(e, i), ue(o);
}
se(Ff, { radius: {}, class: {} }, [], [], !0);
var G2 = /* @__PURE__ */ me("<path></path>");
function Gf(e, t) {
  le(t, !0);
  let n = m(t, "lineWidth", 7), r = m(t, "dimensions", 7), o = m(t, "variant", 7), i = m(t, "class", 7);
  var s = {
    get lineWidth() {
      return n();
    },
    set lineWidth(l) {
      n(l), v();
    },
    get dimensions() {
      return r();
    },
    set dimensions(l) {
      r(l), v();
    },
    get variant() {
      return o();
    },
    set variant(l) {
      o(l), v();
    },
    get class() {
      return i();
    },
    set class(l) {
      i(l), v();
    }
  }, a = G2();
  return Se(() => {
    $e(a, "stroke-width", n()), $e(a, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), Ht(a, 0, Yn(["svelte-flow__background-pattern", o(), i()]));
  }), T(e, a), ue(s);
}
se(Gf, { lineWidth: {}, dimensions: {}, variant: {}, class: {} }, [], [], !0);
const U2 = {
  [Ln.Dots]: 1,
  [Ln.Lines]: 1,
  [Ln.Cross]: 6
};
var J2 = /* @__PURE__ */ me('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
function Uf(e, t) {
  le(t, !0);
  let n = m(t, "id", 7), r = m(t, "variant", 23, () => Ln.Dots), o = m(t, "gap", 7, 20), i = m(t, "size", 7), s = m(t, "lineWidth", 7, 1), a = m(t, "bgColor", 7), l = m(t, "patternColor", 7), u = m(t, "patternClass", 7), d = m(t, "class", 7), f = /* @__PURE__ */ N(fn), p = /* @__PURE__ */ N(() => r() === Ln.Dots), h = /* @__PURE__ */ N(() => r() === Ln.Cross), g = /* @__PURE__ */ N(() => Array.isArray(o()) ? o() : [o(), o()]), w = /* @__PURE__ */ N(() => `background-pattern-${c(f).flowId}-${n() ?? ""}`), y = /* @__PURE__ */ N(() => [
    c(g)[0] * c(f).viewport.zoom || 1,
    c(g)[1] * c(f).viewport.zoom || 1
  ]), b = /* @__PURE__ */ N(() => (i() ?? U2[r()]) * c(f).viewport.zoom), x = /* @__PURE__ */ N(() => c(h) ? [c(b), c(b)] : c(y)), _ = /* @__PURE__ */ N(() => c(p) ? [c(b) / 2, c(b) / 2] : [
    c(x)[0] / 2,
    c(x)[1] / 2
  ]);
  var k = {
    get id() {
      return n();
    },
    set id(z) {
      n(z), v();
    },
    get variant() {
      return r();
    },
    set variant(z = Ln.Dots) {
      r(z), v();
    },
    get gap() {
      return o();
    },
    set gap(z = 20) {
      o(z), v();
    },
    get size() {
      return i();
    },
    set size(z) {
      i(z), v();
    },
    get lineWidth() {
      return s();
    },
    set lineWidth(z = 1) {
      s(z), v();
    },
    get bgColor() {
      return a();
    },
    set bgColor(z) {
      a(z), v();
    },
    get patternColor() {
      return l();
    },
    set patternColor(z) {
      l(z), v();
    },
    get patternClass() {
      return u();
    },
    set patternClass(z) {
      u(z), v();
    },
    get class() {
      return d();
    },
    set class(z) {
      d(z), v();
    }
  }, $ = J2();
  let P;
  var A = K($), L = K(A);
  {
    var H = (z) => {
      {
        let O = /* @__PURE__ */ N(() => c(b) / 2);
        Ff(z, {
          get radius() {
            return c(O);
          },
          get class() {
            return u();
          }
        });
      }
    }, j = (z) => {
      Gf(z, {
        get dimensions() {
          return c(x);
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
    ie(L, (z) => {
      c(p) ? z(H) : z(j, !1);
    });
  }
  R(A);
  var V = D(A);
  return R($), Se(() => {
    Ht($, 0, Yn([
      "svelte-flow__background",
      "svelte-flow__container",
      d()
    ])), P = wt($, "", P, {
      "--xy-background-color-props": a(),
      "--xy-background-pattern-color-props": l()
    }), $e(A, "id", c(w)), $e(A, "x", c(f).viewport.x % c(y)[0]), $e(A, "y", c(f).viewport.y % c(y)[1]), $e(A, "width", c(y)[0]), $e(A, "height", c(y)[1]), $e(A, "patternTransform", `translate(-${c(_)[0]},-${c(_)[1]})`), $e(V, "fill", `url(#${c(w)})`);
  }), T(e, $), ue(k);
}
se(
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
var Q2 = /* @__PURE__ */ me("<rect></rect>");
function Jf(e, t) {
  le(t, !0);
  let n = m(t, "id", 7), r = m(t, "x", 7), o = m(t, "y", 7), i = m(t, "width", 7), s = m(t, "height", 7), a = m(t, "borderRadius", 7, 5), l = m(t, "color", 7), u = m(t, "shapeRendering", 7), d = m(t, "strokeColor", 7), f = m(t, "strokeWidth", 7, 2), p = m(t, "selected", 7), h = m(t, "class", 7), g = m(t, "nodeComponent", 7);
  var w = {
    get id() {
      return n();
    },
    set id(k) {
      n(k), v();
    },
    get x() {
      return r();
    },
    set x(k) {
      r(k), v();
    },
    get y() {
      return o();
    },
    set y(k) {
      o(k), v();
    },
    get width() {
      return i();
    },
    set width(k) {
      i(k), v();
    },
    get height() {
      return s();
    },
    set height(k) {
      s(k), v();
    },
    get borderRadius() {
      return a();
    },
    set borderRadius(k = 5) {
      a(k), v();
    },
    get color() {
      return l();
    },
    set color(k) {
      l(k), v();
    },
    get shapeRendering() {
      return u();
    },
    set shapeRendering(k) {
      u(k), v();
    },
    get strokeColor() {
      return d();
    },
    set strokeColor(k) {
      d(k), v();
    },
    get strokeWidth() {
      return f();
    },
    set strokeWidth(k = 2) {
      f(k), v();
    },
    get selected() {
      return p();
    },
    set selected(k) {
      p(k), v();
    },
    get class() {
      return h();
    },
    set class(k) {
      h(k), v();
    },
    get nodeComponent() {
      return g();
    },
    set nodeComponent(k) {
      g(k), v();
    }
  }, y = Ce(), b = te(y);
  {
    var x = (k) => {
      const $ = /* @__PURE__ */ N(g);
      var P = Ce(), A = te(P);
      Fo(A, () => c($), (L, H) => {
        H(L, {
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
            return f();
          },
          get selected() {
            return p();
          }
        });
      }), T(k, P);
    }, _ = (k) => {
      var $ = Q2();
      let P, A;
      Se(() => {
        P = Ht($, 0, Yn(["svelte-flow__minimap-node", h()]), null, P, { selected: p() }), $e($, "x", r()), $e($, "y", o()), $e($, "rx", a()), $e($, "ry", a()), $e($, "width", i()), $e($, "height", s()), $e($, "shape-rendering", u()), A = wt($, "", A, {
          fill: l(),
          stroke: d(),
          "stroke-width": f()
        });
      }), T(k, $);
    };
    ie(b, (k) => {
      g() ? k(x) : k(_, !1);
    });
  }
  return T(e, y), ue(w);
}
se(
  Jf,
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
function ew(e, t) {
  const n = Ry({
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
const Ys = (e) => e instanceof Function ? e : () => e;
var tw = /* @__PURE__ */ me("<title> </title>"), nw = /* @__PURE__ */ me('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>'), rw = /* @__PURE__ */ ee('<svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>', 1);
function Qf(e, t) {
  le(t, !0);
  let n = m(t, "position", 7, "bottom-right"), r = m(t, "ariaLabel", 7), o = m(t, "nodeStrokeColor", 7, "transparent"), i = m(t, "nodeColor", 7), s = m(t, "nodeClass", 7, ""), a = m(t, "nodeBorderRadius", 7, 5), l = m(t, "nodeStrokeWidth", 7, 2), u = m(t, "nodeComponent", 7), d = m(t, "bgColor", 7), f = m(t, "maskColor", 7), p = m(t, "maskStrokeColor", 7), h = m(t, "maskStrokeWidth", 7), g = m(t, "width", 7, 200), w = m(t, "height", 7, 150), y = m(t, "pannable", 7, !0), b = m(t, "zoomable", 7, !0), x = m(t, "inversePan", 7), _ = m(t, "zoomStep", 7), k = m(t, "class", 7), $ = /* @__PURE__ */ De(t, [
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
  ]), P = /* @__PURE__ */ N(fn), A = /* @__PURE__ */ N(() => c(P).ariaLabelConfig);
  const L = i() === void 0 ? void 0 : Ys(i()), H = Ys(o()), j = Ys(s()), V = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  );
  let z = /* @__PURE__ */ N(() => `svelte-flow__minimap-desc-${c(P).flowId}`), O = /* @__PURE__ */ N(() => ({
    x: -c(P).viewport.x / c(P).viewport.zoom,
    y: -c(P).viewport.y / c(P).viewport.zoom,
    width: c(P).width / c(P).viewport.zoom,
    height: c(P).height / c(P).viewport.zoom
  })), C = /* @__PURE__ */ N(() => Wd(Qo(c(P).nodeLookup, { filter: (J) => !J.hidden }), c(O))), S = /* @__PURE__ */ N(() => c(C).width / g()), E = /* @__PURE__ */ N(() => c(C).height / w()), I = /* @__PURE__ */ N(() => Math.max(c(S), c(E))), W = /* @__PURE__ */ N(() => c(I) * g()), q = /* @__PURE__ */ N(() => c(I) * w()), M = /* @__PURE__ */ N(() => 5 * c(I)), X = /* @__PURE__ */ N(() => c(C).x - (c(W) - c(C).width) / 2 - c(M)), Q = /* @__PURE__ */ N(() => c(C).y - (c(q) - c(C).height) / 2 - c(M)), Y = /* @__PURE__ */ N(() => c(W) + c(M) * 2), Z = /* @__PURE__ */ N(() => c(q) + c(M) * 2);
  const B = () => c(I);
  var F = {
    get position() {
      return n();
    },
    set position(J = "bottom-right") {
      n(J), v();
    },
    get ariaLabel() {
      return r();
    },
    set ariaLabel(J) {
      r(J), v();
    },
    get nodeStrokeColor() {
      return o();
    },
    set nodeStrokeColor(J = "transparent") {
      o(J), v();
    },
    get nodeColor() {
      return i();
    },
    set nodeColor(J) {
      i(J), v();
    },
    get nodeClass() {
      return s();
    },
    set nodeClass(J = "") {
      s(J), v();
    },
    get nodeBorderRadius() {
      return a();
    },
    set nodeBorderRadius(J = 5) {
      a(J), v();
    },
    get nodeStrokeWidth() {
      return l();
    },
    set nodeStrokeWidth(J = 2) {
      l(J), v();
    },
    get nodeComponent() {
      return u();
    },
    set nodeComponent(J) {
      u(J), v();
    },
    get bgColor() {
      return d();
    },
    set bgColor(J) {
      d(J), v();
    },
    get maskColor() {
      return f();
    },
    set maskColor(J) {
      f(J), v();
    },
    get maskStrokeColor() {
      return p();
    },
    set maskStrokeColor(J) {
      p(J), v();
    },
    get maskStrokeWidth() {
      return h();
    },
    set maskStrokeWidth(J) {
      h(J), v();
    },
    get width() {
      return g();
    },
    set width(J = 200) {
      g(J), v();
    },
    get height() {
      return w();
    },
    set height(J = 150) {
      w(J), v();
    },
    get pannable() {
      return y();
    },
    set pannable(J = !0) {
      y(J), v();
    },
    get zoomable() {
      return b();
    },
    set zoomable(J = !0) {
      b(J), v();
    },
    get inversePan() {
      return x();
    },
    set inversePan(J) {
      x(J), v();
    },
    get zoomStep() {
      return _();
    },
    set zoomStep(J) {
      _(J), v();
    },
    get class() {
      return k();
    },
    set class(J) {
      k(J), v();
    }
  }, ne = rw(), re = te(ne);
  {
    let J = /* @__PURE__ */ N(() => ["svelte-flow__minimap", k()]);
    Ug(re, () => ({ "--xy-minimap-background-color-props": d() })), ri(re.lastChild, Ke(
      {
        get position() {
          return n();
        },
        get class() {
          return c(J);
        },
        "data-testid": "svelte-flow__minimap"
      },
      () => $,
      {
        children: (he, ce) => {
          var oe = Ce(), ae = te(oe);
          {
            var pe = (be) => {
              var ke = nw();
              let de;
              var _e = K(ke);
              {
                var Ie = (He) => {
                  var We = tw(), je = K(We, !0);
                  R(We), Se(() => {
                    $e(We, "id", c(z)), qe(je, r() ?? c(A)["minimap.ariaLabel"]);
                  }), T(He, We);
                };
                ie(_e, (He) => {
                  (r() ?? c(A)["minimap.ariaLabel"]) && He(Ie);
                });
              }
              var G = D(_e);
              yt(G, 17, () => c(P).nodes, (He) => He.id, (He, We) => {
                const je = /* @__PURE__ */ N(() => c(P).nodeLookup.get(c(We).id));
                var rt = Ce(), St = te(rt);
                {
                  var hn = (ct) => {
                    const fe = /* @__PURE__ */ N(() => gr(c(je)));
                    {
                      let Me = /* @__PURE__ */ N(() => L?.(c(je))), at = /* @__PURE__ */ N(() => H(c(je))), Re = /* @__PURE__ */ N(() => j(c(je)));
                      Jf(ct, Ke(
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
                        () => c(fe),
                        {
                          get selected() {
                            return c(je).selected;
                          },
                          get nodeComponent() {
                            return u();
                          },
                          get color() {
                            return c(Me);
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
                            return V;
                          },
                          get class() {
                            return c(Re);
                          }
                        }
                      ));
                    }
                  };
                  ie(St, (ct) => {
                    c(je) && Xd(c(je)) && !c(je).hidden && ct(hn);
                  });
                }
                T(He, rt);
              });
              var Je = D(G);
              R(ke), kt(ke, (He, We) => ew?.(He, We), () => ({
                store: c(P),
                panZoom: c(P).panZoom,
                getViewScale: B,
                translateExtent: c(P).translateExtent,
                width: c(P).width,
                height: c(P).height,
                inversePan: x(),
                zoomStep: _(),
                pannable: y(),
                zoomable: b()
              })), Se(() => {
                $e(ke, "width", g()), $e(ke, "height", w()), $e(ke, "viewBox", `${c(X) ?? ""} ${c(Q) ?? ""} ${c(Y) ?? ""} ${c(Z) ?? ""}`), $e(ke, "aria-labelledby", c(z)), de = wt(ke, "", de, {
                  "--xy-minimap-mask-background-color-props": f(),
                  "--xy-minimap-mask-stroke-color-props": p(),
                  "--xy-minimap-mask-stroke-width-props": h() ? h() * c(I) : void 0
                }), $e(Je, "d", `M${c(X) - c(M)},${c(Q) - c(M)}h${c(Y) + c(M) * 2}v${c(Z) + c(M) * 2}h${-c(Y) - c(M) * 2}z
      M${c(O).x ?? ""},${c(O).y ?? ""}h${c(O).width ?? ""}v${c(O).height ?? ""}h${-c(O).width}z`);
              }), T(be, ke);
            };
            ie(ae, (be) => {
              c(P).panZoom && be(pe);
            });
          }
          T(he, oe);
        },
        $$slots: { default: !0 }
      }
    )), R(re);
  }
  return T(e, ne), ue(F);
}
se(
  Qf,
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
var ow = /* @__PURE__ */ ee("<div><!></div>");
function ep(e, t) {
  le(t, !0);
  let n = m(t, "nodeId", 7), r = m(t, "position", 23, () => xe.Top), o = m(t, "align", 7, "center"), i = m(t, "offset", 7, 10), s = m(t, "isVisible", 7), a = m(t, "children", 7), l = /* @__PURE__ */ De(t, [
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
  const u = fn(), { getNodesBounds: d } = pt(), f = ln("svelteflow__node_id");
  let p = /* @__PURE__ */ N(() => (u.nodes, (Array.isArray(n()) ? n() : [n() ?? f]).reduce(
    ($, P) => {
      const A = u.nodeLookup.get(P);
      return A && $.push(A), $;
    },
    []
  ))), h = /* @__PURE__ */ N(() => {
    const $ = d(c(p));
    return $ ? by($, u.viewport, r(), i(), o()) : "";
  }), g = /* @__PURE__ */ N(() => c(p).length === 0 ? 1 : Math.max(...c(p).map(($) => ($.internals.z || 5) + 1))), w = /* @__PURE__ */ N(() => u.nodes.filter(($) => $.selected).length), y = /* @__PURE__ */ N(() => typeof s() == "boolean" ? s() : c(p).length === 1 && c(p)[0].selected && c(w) === 1);
  var b = {
    get nodeId() {
      return n();
    },
    set nodeId($) {
      n($), v();
    },
    get position() {
      return r();
    },
    set position($ = xe.Top) {
      r($), v();
    },
    get align() {
      return o();
    },
    set align($ = "center") {
      o($), v();
    },
    get offset() {
      return i();
    },
    set offset($ = 10) {
      i($), v();
    },
    get isVisible() {
      return s();
    },
    set isVisible($) {
      s($), v();
    },
    get children() {
      return a();
    },
    set children($) {
      a($), v();
    }
  }, x = Ce(), _ = te(x);
  {
    var k = ($) => {
      var P = ow();
      Ge(
        P,
        (L, H) => ({
          class: "svelte-flow__node-toolbar",
          "data-id": L,
          ...l,
          [yn]: H
        }),
        [
          () => c(p).reduce((L, H) => `${L}${H.id} `, "").trim(),
          () => ({
            display: hf().value ? "none" : void 0,
            position: "absolute",
            transform: c(h),
            "z-index": c(g)
          })
        ]
      );
      var A = K(P);
      Ye(A, () => a() ?? tt), R(P), kt(P, (L, H) => pf?.(L, H), () => "root"), T($, P);
    };
    ie(_, ($) => {
      u.domNode && c(y) && c(p) && $(k);
    });
  }
  return T(e, x), ue(b);
}
se(
  ep,
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
function qn(e) {
  const t = /* @__PURE__ */ N(fn), n = /* @__PURE__ */ N(() => c(t).nodes), r = /* @__PURE__ */ N(() => c(t).nodeLookup);
  let o = [], i = !0;
  const s = /* @__PURE__ */ N(() => {
    c(n);
    const a = [], l = Array.isArray(e), u = l ? e : [e];
    for (const d of u) {
      const f = c(r).get(d)?.internals.userNode;
      f && a.push({ id: f.id, type: f.type, data: f.data });
    }
    return (!Oy(a, o) || i) && (o = a, i = !1), l ? o : o[0] ?? null;
  });
  return {
    get current() {
      return c(s);
    }
  };
}
const Mu = "tinyflow-component", iw = [
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
], sw = [
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
], vl = [
  { label: "文字", value: "text" },
  { label: "图片", value: "image" },
  { label: "视频", value: "video" },
  { label: "音频", value: "audio" },
  { label: "文件", value: "file" },
  { label: "其他", value: "other" }
], aw = [
  { label: "单行输入框", value: "input" },
  { label: "多行输入框", value: "textarea" },
  { label: "下拉菜单", value: "select" },
  { label: "单选", value: "radio" },
  { label: "多选", value: "checkbox" }
], lw = [
  { label: "单选", value: "radio" },
  { label: "多选", value: "checkbox" }
];
class uw {
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
    const t = document.createElement(Mu);
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
    const n = document.createElement(Mu);
    n.style.display = "block", n.style.width = "100%", n.style.height = "100%", n.classList.add("tf-theme-light"), n.options = this.options, n.onInit = (r) => {
      this.svelteFlowInstance = r;
    }, this.destroy(), this.rootEl.appendChild(n);
  }
  destroy() {
    for (; this.rootEl.firstChild; )
      this.rootEl.removeChild(this.rootEl.firstChild);
  }
}
const cw = () => {
  let e = /* @__PURE__ */ Ne([]), t = /* @__PURE__ */ Ne([]), n = /* @__PURE__ */ Ne({ x: 250, y: 100, zoom: 1 });
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
}, Ae = cw(), dw = (e, t) => {
  const n = new Array(e.length + t.length);
  for (let r = 0; r < e.length; r++)
    n[r] = e[r];
  for (let r = 0; r < t.length; r++)
    n[e.length + r] = t[r];
  return n;
}, fw = (e, t) => ({
  classGroupId: e,
  validator: t
}), tp = (e = /* @__PURE__ */ new Map(), t = null, n) => ({
  nextPart: e,
  validators: t,
  classGroupId: n
}), Qi = "-", Pu = [], pw = "arbitrary..", hw = (e) => {
  const t = vw(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (o) => {
      if (o.startsWith("[") && o.endsWith("]"))
        return gw(o);
      const i = o.split(Qi), s = i[0] === "" && i.length > 1 ? 1 : 0;
      return np(i, s, t);
    },
    getConflictingClassGroupIds: (o, i) => {
      if (i) {
        const s = r[o], a = n[o];
        return s ? a ? dw(a, s) : s : a || Pu;
      }
      return n[o] || Pu;
    }
  };
}, np = (e, t, n) => {
  if (e.length - t === 0)
    return n.classGroupId;
  const r = e[t], o = n.nextPart.get(r);
  if (o) {
    const l = np(e, t + 1, o);
    if (l) return l;
  }
  const i = n.validators;
  if (i === null)
    return;
  const s = t === 0 ? e.join(Qi) : e.slice(t).join(Qi), a = i.length;
  for (let l = 0; l < a; l++) {
    const u = i[l];
    if (u.validator(s))
      return u.classGroupId;
  }
}, gw = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const t = e.slice(1, -1), n = t.indexOf(":"), r = t.slice(0, n);
  return r ? pw + r : void 0;
})(), vw = (e) => {
  const {
    theme: t,
    classGroups: n
  } = e;
  return mw(n, t);
}, mw = (e, t) => {
  const n = tp();
  for (const r in e) {
    const o = e[r];
    ml(o, n, r, t);
  }
  return n;
}, ml = (e, t, n, r) => {
  const o = e.length;
  for (let i = 0; i < o; i++) {
    const s = e[i];
    yw(s, t, n, r);
  }
}, yw = (e, t, n, r) => {
  if (typeof e == "string") {
    ww(e, t, n);
    return;
  }
  if (typeof e == "function") {
    bw(e, t, n, r);
    return;
  }
  xw(e, t, n, r);
}, ww = (e, t, n) => {
  const r = e === "" ? t : rp(t, e);
  r.classGroupId = n;
}, bw = (e, t, n, r) => {
  if (kw(e)) {
    ml(e(r), t, n, r);
    return;
  }
  t.validators === null && (t.validators = []), t.validators.push(fw(n, e));
}, xw = (e, t, n, r) => {
  const o = Object.entries(e), i = o.length;
  for (let s = 0; s < i; s++) {
    const [a, l] = o[s];
    ml(l, rp(t, a), n, r);
  }
}, rp = (e, t) => {
  let n = e;
  const r = t.split(Qi), o = r.length;
  for (let i = 0; i < o; i++) {
    const s = r[i];
    let a = n.nextPart.get(s);
    a || (a = tp(), n.nextPart.set(s, a)), n = a;
  }
  return n;
}, kw = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, Cw = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ Object.create(null);
  const o = (i, s) => {
    n[i] = s, t++, t > e && (t = 0, r = n, n = /* @__PURE__ */ Object.create(null));
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
}, ma = "!", Ou = ":", $w = [], Tu = (e, t, n, r, o) => ({
  modifiers: e,
  hasImportantModifier: t,
  baseClassName: n,
  maybePostfixModifierPosition: r,
  isExternal: o
}), _w = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: n
  } = e;
  let r = (o) => {
    const i = [];
    let s = 0, a = 0, l = 0, u;
    const d = o.length;
    for (let w = 0; w < d; w++) {
      const y = o[w];
      if (s === 0 && a === 0) {
        if (y === Ou) {
          i.push(o.slice(l, w)), l = w + 1;
          continue;
        }
        if (y === "/") {
          u = w;
          continue;
        }
      }
      y === "[" ? s++ : y === "]" ? s-- : y === "(" ? a++ : y === ")" && a--;
    }
    const f = i.length === 0 ? o : o.slice(l);
    let p = f, h = !1;
    f.endsWith(ma) ? (p = f.slice(0, -1), h = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      f.startsWith(ma) && (p = f.slice(1), h = !0)
    );
    const g = u && u > l ? u - l : void 0;
    return Tu(i, h, p, g);
  };
  if (t) {
    const o = t + Ou, i = r;
    r = (s) => s.startsWith(o) ? i(s.slice(o.length)) : Tu($w, !1, s, void 0, !0);
  }
  if (n) {
    const o = r;
    r = (i) => n({
      className: i,
      parseClassName: o
    });
  }
  return r;
}, Sw = (e) => {
  const t = /* @__PURE__ */ new Map();
  return e.orderSensitiveModifiers.forEach((n, r) => {
    t.set(n, 1e6 + r);
  }), (n) => {
    const r = [];
    let o = [];
    for (let i = 0; i < n.length; i++) {
      const s = n[i], a = s[0] === "[", l = t.has(s);
      a || l ? (o.length > 0 && (o.sort(), r.push(...o), o = []), r.push(s)) : o.push(s);
    }
    return o.length > 0 && (o.sort(), r.push(...o)), r;
  };
}, Ew = (e) => ({
  cache: Cw(e.cacheSize),
  parseClassName: _w(e),
  sortModifiers: Sw(e),
  ...hw(e)
}), Nw = /\s+/, zw = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o,
    sortModifiers: i
  } = t, s = [], a = e.trim().split(Nw);
  let l = "";
  for (let u = a.length - 1; u >= 0; u -= 1) {
    const d = a[u], {
      isExternal: f,
      modifiers: p,
      hasImportantModifier: h,
      baseClassName: g,
      maybePostfixModifierPosition: w
    } = n(d);
    if (f) {
      l = d + (l.length > 0 ? " " + l : l);
      continue;
    }
    let y = !!w, b = r(y ? g.substring(0, w) : g);
    if (!b) {
      if (!y) {
        l = d + (l.length > 0 ? " " + l : l);
        continue;
      }
      if (b = r(g), !b) {
        l = d + (l.length > 0 ? " " + l : l);
        continue;
      }
      y = !1;
    }
    const x = p.length === 0 ? "" : p.length === 1 ? p[0] : i(p).join(":"), _ = h ? x + ma : x, k = _ + b;
    if (s.indexOf(k) > -1)
      continue;
    s.push(k);
    const $ = o(b, y);
    for (let P = 0; P < $.length; ++P) {
      const A = $[P];
      s.push(_ + A);
    }
    l = d + (l.length > 0 ? " " + l : l);
  }
  return l;
}, Mw = (...e) => {
  let t = 0, n, r, o = "";
  for (; t < e.length; )
    (n = e[t++]) && (r = op(n)) && (o && (o += " "), o += r);
  return o;
}, op = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = op(e[r])) && (n && (n += " "), n += t);
  return n;
}, ya = (e, ...t) => {
  let n, r, o, i;
  const s = (l) => {
    const u = t.reduce((d, f) => f(d), e());
    return n = Ew(u), r = n.cache.get, o = n.cache.set, i = a, a(l);
  }, a = (l) => {
    const u = r(l);
    if (u)
      return u;
    const d = zw(l, n);
    return o(l, d), d;
  };
  return i = s, (...l) => i(Mw(...l));
}, Pw = [], ut = (e) => {
  const t = (n) => n[e] || Pw;
  return t.isThemeGetter = !0, t;
}, ip = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, sp = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Ow = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, Tw = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Vw = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Aw = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Lw = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Dw = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Jn = (e) => Ow.test(e), Pe = (e) => !!e && !Number.isNaN(Number(e)), Qn = (e) => !!e && Number.isInteger(Number(e)), qs = (e) => e.endsWith("%") && Pe(e.slice(0, -1)), Mn = (e) => Tw.test(e), ap = () => !0, Hw = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Vw.test(e) && !Aw.test(e)
), yl = () => !1, Iw = (e) => Lw.test(e), jw = (e) => Dw.test(e), Rw = (e) => !ge(e) && !ve(e), Zw = (e) => vr(e, cp, yl), ge = (e) => ip.test(e), wr = (e) => vr(e, dp, Hw), Vu = (e) => vr(e, Gw, Pe), Kw = (e) => vr(e, pp, ap), Bw = (e) => vr(e, fp, yl), Au = (e) => vr(e, lp, yl), Ww = (e) => vr(e, up, jw), mi = (e) => vr(e, hp, Iw), ve = (e) => sp.test(e), yo = (e) => Zr(e, dp), Xw = (e) => Zr(e, fp), Lu = (e) => Zr(e, lp), Yw = (e) => Zr(e, cp), qw = (e) => Zr(e, up), yi = (e) => Zr(e, hp, !0), Fw = (e) => Zr(e, pp, !0), vr = (e, t, n) => {
  const r = ip.exec(e);
  return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, Zr = (e, t, n = !1) => {
  const r = sp.exec(e);
  return r ? r[1] ? t(r[1]) : n : !1;
}, lp = (e) => e === "position" || e === "percentage", up = (e) => e === "image" || e === "url", cp = (e) => e === "length" || e === "size" || e === "bg-size", dp = (e) => e === "length", Gw = (e) => e === "number", fp = (e) => e === "family-name", pp = (e) => e === "number" || e === "weight", hp = (e) => e === "shadow", wa = () => {
  const e = ut("color"), t = ut("font"), n = ut("text"), r = ut("font-weight"), o = ut("tracking"), i = ut("leading"), s = ut("breakpoint"), a = ut("container"), l = ut("spacing"), u = ut("radius"), d = ut("shadow"), f = ut("inset-shadow"), p = ut("text-shadow"), h = ut("drop-shadow"), g = ut("blur"), w = ut("perspective"), y = ut("aspect"), b = ut("ease"), x = ut("animate"), _ = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], k = () => [
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
  ], $ = () => [...k(), ve, ge], P = () => ["auto", "hidden", "clip", "visible", "scroll"], A = () => ["auto", "contain", "none"], L = () => [ve, ge, l], H = () => [Jn, "full", "auto", ...L()], j = () => [Qn, "none", "subgrid", ve, ge], V = () => ["auto", {
    span: ["full", Qn, ve, ge]
  }, Qn, ve, ge], z = () => [Qn, "auto", ve, ge], O = () => ["auto", "min", "max", "fr", ve, ge], C = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], S = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], E = () => ["auto", ...L()], I = () => [Jn, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...L()], W = () => [Jn, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...L()], q = () => [Jn, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...L()], M = () => [e, ve, ge], X = () => [...k(), Lu, Au, {
    position: [ve, ge]
  }], Q = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], Y = () => ["auto", "cover", "contain", Yw, Zw, {
    size: [ve, ge]
  }], Z = () => [qs, yo, wr], B = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    u,
    ve,
    ge
  ], F = () => ["", Pe, yo, wr], ne = () => ["solid", "dashed", "dotted", "double"], re = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], J = () => [Pe, qs, Lu, Au], he = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    g,
    ve,
    ge
  ], ce = () => ["none", Pe, ve, ge], oe = () => ["none", Pe, ve, ge], ae = () => [Pe, ve, ge], pe = () => [Jn, "full", ...L()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Mn],
      breakpoint: [Mn],
      color: [ap],
      container: [Mn],
      "drop-shadow": [Mn],
      ease: ["in", "out", "in-out"],
      font: [Rw],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [Mn],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [Mn],
      shadow: [Mn],
      spacing: ["px", Pe],
      text: [Mn],
      "text-shadow": [Mn],
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
        aspect: ["auto", "square", Jn, ge, ve, y]
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
        columns: [Pe, ge, ve, a]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": _()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": _()
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
        object: $()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: P()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": P()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": P()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: A()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": A()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": A()
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
        inset: H()
      }],
      /**
       * Inset Inline
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": H()
      }],
      /**
       * Inset Block
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": H()
      }],
      /**
       * Inset Inline Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-s` in next major release
       */
      start: [{
        "inset-s": H(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-s-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        start: H()
      }],
      /**
       * Inset Inline End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-e` in next major release
       */
      end: [{
        "inset-e": H(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-e-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        end: H()
      }],
      /**
       * Inset Block Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-bs": [{
        "inset-bs": H()
      }],
      /**
       * Inset Block End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-be": [{
        "inset-be": H()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: H()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: H()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: H()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: H()
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
        z: [Qn, "auto", ve, ge]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Jn, "full", "auto", a, ...L()]
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
        flex: [Pe, Jn, "auto", "initial", "none", ge]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", Pe, ve, ge]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", Pe, ve, ge]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [Qn, "first", "last", "none", ve, ge]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": j()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: V()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": z()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": z()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": j()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: V()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": z()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": z()
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
        "auto-cols": O()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": O()
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
        justify: [...C(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...S(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...S()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...C()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...S(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...S(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": C()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...S(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...S()]
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
        m: E()
      }],
      /**
       * Margin Inline
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: E()
      }],
      /**
       * Margin Block
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: E()
      }],
      /**
       * Margin Inline Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: E()
      }],
      /**
       * Margin Inline End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: E()
      }],
      /**
       * Margin Block Start
       * @see https://tailwindcss.com/docs/margin
       */
      mbs: [{
        mbs: E()
      }],
      /**
       * Margin Block End
       * @see https://tailwindcss.com/docs/margin
       */
      mbe: [{
        mbe: E()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: E()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: E()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: E()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: E()
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
        size: I()
      }],
      /**
       * Inline Size
       * @see https://tailwindcss.com/docs/width
       */
      "inline-size": [{
        inline: ["auto", ...W()]
      }],
      /**
       * Min-Inline Size
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-inline-size": [{
        "min-inline": ["auto", ...W()]
      }],
      /**
       * Max-Inline Size
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-inline-size": [{
        "max-inline": ["none", ...W()]
      }],
      /**
       * Block Size
       * @see https://tailwindcss.com/docs/height
       */
      "block-size": [{
        block: ["auto", ...q()]
      }],
      /**
       * Min-Block Size
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-block-size": [{
        "min-block": ["auto", ...q()]
      }],
      /**
       * Max-Block Size
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-block-size": [{
        "max-block": ["none", ...q()]
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [a, "screen", ...I()]
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
          ...I()
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
          ...I()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...I()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...I()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...I()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", n, yo, wr]
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
        font: [r, Fw, Kw]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", qs, ge]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Xw, Bw, t]
      }],
      /**
       * Font Feature Settings
       * @see https://tailwindcss.com/docs/font-feature-settings
       */
      "font-features": [{
        "font-features": [ge]
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
        tracking: [o, ve, ge]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [Pe, "none", ve, Vu]
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
        "list-image": ["none", ve, ge]
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
        list: ["disc", "decimal", "none", ve, ge]
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
        placeholder: M()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: M()
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
        decoration: [...ne(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [Pe, "from-font", "auto", ve, wr]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: M()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [Pe, "auto", ve, ge]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", ve, ge]
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
        content: ["none", ve, ge]
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
        bg: X()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: Q()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: Y()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, Qn, ve, ge],
          radial: ["", ve, ge],
          conic: [Qn, ve, ge]
        }, qw, Ww]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: M()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: Z()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: Z()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: Z()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: M()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: M()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: M()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: B()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": B()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": B()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": B()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": B()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": B()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": B()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": B()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": B()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": B()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": B()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": B()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": B()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": B()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": B()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: F()
      }],
      /**
       * Border Width Inline
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": F()
      }],
      /**
       * Border Width Block
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": F()
      }],
      /**
       * Border Width Inline Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": F()
      }],
      /**
       * Border Width Inline End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": F()
      }],
      /**
       * Border Width Block Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-bs": [{
        "border-bs": F()
      }],
      /**
       * Border Width Block End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-be": [{
        "border-be": F()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": F()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": F()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": F()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": F()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": F()
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
        "divide-y": F()
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
        border: [...ne(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...ne(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: M()
      }],
      /**
       * Border Color Inline
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": M()
      }],
      /**
       * Border Color Block
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": M()
      }],
      /**
       * Border Color Inline Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": M()
      }],
      /**
       * Border Color Inline End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": M()
      }],
      /**
       * Border Color Block Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-bs": [{
        "border-bs": M()
      }],
      /**
       * Border Color Block End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-be": [{
        "border-be": M()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": M()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": M()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": M()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": M()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: M()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...ne(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Pe, ve, ge]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", Pe, yo, wr]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: M()
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
          yi,
          mi
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: M()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", f, yi, mi]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": M()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: F()
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
        ring: M()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [Pe, wr]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": M()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": F()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": M()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", p, yi, mi]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": M()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [Pe, ve, ge]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...re(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": re()
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
        "mask-linear": [Pe]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": J()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": J()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": M()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": M()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": J()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": J()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": M()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": M()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": J()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": J()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": M()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": M()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": J()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": J()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": M()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": M()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": J()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": J()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": M()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": M()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": J()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": J()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": M()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": M()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": J()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": J()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": M()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": M()
      }],
      "mask-image-radial": [{
        "mask-radial": [ve, ge]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": J()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": J()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": M()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": M()
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
        "mask-radial-at": k()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [Pe]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": J()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": J()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": M()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": M()
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
        mask: X()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: Q()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: Y()
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
        mask: ["none", ve, ge]
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
          ve,
          ge
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: he()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [Pe, ve, ge]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [Pe, ve, ge]
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
          h,
          yi,
          mi
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": M()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", Pe, ve, ge]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [Pe, ve, ge]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", Pe, ve, ge]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [Pe, ve, ge]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", Pe, ve, ge]
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
          ve,
          ge
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": he()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [Pe, ve, ge]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [Pe, ve, ge]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", Pe, ve, ge]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [Pe, ve, ge]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", Pe, ve, ge]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [Pe, ve, ge]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [Pe, ve, ge]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", Pe, ve, ge]
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", ve, ge]
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
        duration: [Pe, "initial", ve, ge]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", b, ve, ge]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [Pe, ve, ge]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", x, ve, ge]
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
        perspective: [w, ve, ge]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": $()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: ce()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": ce()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": ce()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": ce()
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
        skew: ae()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": ae()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": ae()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [ve, ge, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: $()
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
        translate: pe()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": pe()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": pe()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": pe()
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
        accent: M()
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
        caret: M()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", ve, ge]
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
        "will-change": ["auto", "scroll", "contents", "transform", ve, ge]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...M()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [Pe, yo, wr, Vu]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...M()]
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
}, Uw = (e, {
  cacheSize: t,
  prefix: n,
  experimentalParseClassName: r,
  extend: o = {},
  override: i = {}
}) => (Co(e, "cacheSize", t), Co(e, "prefix", n), Co(e, "experimentalParseClassName", r), wi(e.theme, i.theme), wi(e.classGroups, i.classGroups), wi(e.conflictingClassGroups, i.conflictingClassGroups), wi(e.conflictingClassGroupModifiers, i.conflictingClassGroupModifiers), Co(e, "orderSensitiveModifiers", i.orderSensitiveModifiers), bi(e.theme, o.theme), bi(e.classGroups, o.classGroups), bi(e.conflictingClassGroups, o.conflictingClassGroups), bi(e.conflictingClassGroupModifiers, o.conflictingClassGroupModifiers), gp(e, o, "orderSensitiveModifiers"), e), Co = (e, t, n) => {
  n !== void 0 && (e[t] = n);
}, wi = (e, t) => {
  if (t)
    for (const n in t)
      Co(e, n, t[n]);
}, bi = (e, t) => {
  if (t)
    for (const n in t)
      gp(e, t, n);
}, gp = (e, t, n) => {
  const r = t[n];
  r !== void 0 && (e[n] = e[n] ? e[n].concat(r) : r);
}, Jw = (e, ...t) => typeof e == "function" ? ya(wa, e, ...t) : ya(() => Uw(wa(), e), ...t), vp = /* @__PURE__ */ ya(wa);
function Lr(...e) {
  return vp(So(e));
}
var Qw = /\s+/g, eb = (e) => typeof e != "string" || !e ? e : e.replace(Qw, " ").trim(), es = (...e) => {
  const t = [], n = (r) => {
    if (!r && r !== 0 && r !== 0n) return;
    if (Array.isArray(r)) {
      for (let i = 0, s = r.length; i < s; i++) n(r[i]);
      return;
    }
    const o = typeof r;
    if (o === "string" || o === "number" || o === "bigint") {
      if (o === "number" && r !== r) return;
      t.push(String(r));
    } else if (o === "object") {
      const i = Object.keys(r);
      for (let s = 0, a = i.length; s < a; s++) {
        const l = i[s];
        r[l] && t.push(l);
      }
    }
  };
  for (let r = 0, o = e.length; r < o; r++) {
    const i = e[r];
    i != null && n(i);
  }
  return t.length > 0 ? eb(t.join(" ")) : void 0;
}, Du = (e) => e === !1 ? "false" : e === !0 ? "true" : e === 0 ? "0" : e, Ot = (e) => {
  if (!e || typeof e != "object") return !0;
  for (const t in e) return !1;
  return !0;
}, tb = (e, t) => {
  if (e === t) return !0;
  if (!e || !t) return !1;
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (let o = 0; o < n.length; o++) {
    const i = n[o];
    if (!r.includes(i) || e[i] !== t[i]) return !1;
  }
  return !0;
}, nb = (e, t) => {
  for (const n in t)
    if (Object.prototype.hasOwnProperty.call(t, n)) {
      const r = t[n];
      n in e ? e[n] = es(e[n], r) : e[n] = r;
    }
  return e;
}, mp = (e, t) => {
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    Array.isArray(r) ? mp(r, t) : r && t.push(r);
  }
}, yp = (...e) => {
  const t = [];
  mp(e, t);
  const n = [];
  for (let r = 0; r < t.length; r++)
    t[r] && n.push(t[r]);
  return n;
}, ba = (e, t) => {
  const n = {};
  for (const r in e) {
    const o = e[r];
    if (r in t) {
      const i = t[r];
      Array.isArray(o) || Array.isArray(i) ? n[r] = yp(i, o) : typeof o == "object" && typeof i == "object" && o && i ? n[r] = ba(o, i) : n[r] = i + " " + o;
    } else
      n[r] = o;
  }
  for (const r in t)
    r in e || (n[r] = t[r]);
  return n;
}, rb = {
  twMerge: !0,
  twMergeConfig: {}
};
function ob() {
  let e = null, t = {}, n = !1;
  return {
    get cachedTwMerge() {
      return e;
    },
    set cachedTwMerge(r) {
      e = r;
    },
    get cachedTwMergeConfig() {
      return t;
    },
    set cachedTwMergeConfig(r) {
      t = r;
    },
    get didTwMergeConfigChange() {
      return n;
    },
    set didTwMergeConfigChange(r) {
      n = r;
    },
    reset() {
      e = null, t = {}, n = !1;
    }
  };
}
var On = ob(), ib = (e) => {
  const t = (n, r) => {
    const {
      extend: o = null,
      slots: i = {},
      variants: s = {},
      compoundVariants: a = [],
      compoundSlots: l = [],
      defaultVariants: u = {}
    } = n, d = { ...rb, ...r }, f = o?.base ? es(o.base, n?.base) : n?.base, p = o?.variants && !Ot(o.variants) ? ba(s, o.variants) : s, h = o?.defaultVariants && !Ot(o.defaultVariants) ? { ...o.defaultVariants, ...u } : u;
    !Ot(d.twMergeConfig) && !tb(d.twMergeConfig, On.cachedTwMergeConfig) && (On.didTwMergeConfigChange = !0, On.cachedTwMergeConfig = d.twMergeConfig);
    const g = Ot(o?.slots), w = Ot(i) ? {} : {
      // add "base" to the slots object
      base: es(n?.base, g && o?.base),
      ...i
    }, y = g ? w : nb(
      { ...o?.slots },
      Ot(w) ? { base: n?.base } : w
    ), b = Ot(o?.compoundVariants) ? a : yp(o?.compoundVariants, a), x = (k) => {
      if (Ot(p) && Ot(i) && g)
        return e(f, k?.class, k?.className)(d);
      if (b && !Array.isArray(b))
        throw new TypeError(
          `The "compoundVariants" prop must be an array. Received: ${typeof b}`
        );
      if (l && !Array.isArray(l))
        throw new TypeError(
          `The "compoundSlots" prop must be an array. Received: ${typeof l}`
        );
      const $ = (O, C = p, S = null, E = null) => {
        const I = C[O];
        if (!I || Ot(I))
          return null;
        const W = E?.[O] ?? k?.[O];
        if (W === null) return null;
        const q = Du(W);
        if (typeof q == "object")
          return null;
        const M = h?.[O], X = q ?? Du(M);
        return I[X || "false"];
      }, P = () => {
        if (!p) return null;
        const O = Object.keys(p), C = [];
        for (let S = 0; S < O.length; S++) {
          const E = $(O[S], p);
          E && C.push(E);
        }
        return C;
      }, A = (O, C) => {
        if (!p || typeof p != "object") return null;
        const S = [];
        for (const E in p) {
          const I = $(E, p, O, C), W = O === "base" && typeof I == "string" ? I : I && I[O];
          W && S.push(W);
        }
        return S;
      }, L = {};
      for (const O in k) {
        const C = k[O];
        C !== void 0 && (L[O] = C);
      }
      const H = (O, C) => {
        const S = typeof k?.[O] == "object" ? {
          [O]: k[O]?.initial
        } : {};
        return {
          ...h,
          ...L,
          ...S,
          ...C
        };
      }, j = (O = [], C) => {
        const S = [], E = O.length;
        for (let I = 0; I < E; I++) {
          const { class: W, className: q, ...M } = O[I];
          let X = !0;
          const Q = H(null, C);
          for (const Y in M) {
            const Z = M[Y], B = Q[Y];
            if (Array.isArray(Z)) {
              if (!Z.includes(B)) {
                X = !1;
                break;
              }
            } else {
              if ((Z == null || Z === !1) && (B == null || B === !1))
                continue;
              if (B !== Z) {
                X = !1;
                break;
              }
            }
          }
          X && (W && S.push(W), q && S.push(q));
        }
        return S;
      }, V = (O) => {
        const C = j(b, O);
        if (!Array.isArray(C)) return C;
        const S = {}, E = e;
        for (let I = 0; I < C.length; I++) {
          const W = C[I];
          if (typeof W == "string")
            S.base = E(S.base, W)(d);
          else if (typeof W == "object")
            for (const q in W)
              S[q] = E(S[q], W[q])(d);
        }
        return S;
      }, z = (O) => {
        if (l.length < 1) return null;
        const C = {}, S = H(null, O);
        for (let E = 0; E < l.length; E++) {
          const {
            slots: I = [],
            class: W,
            className: q,
            ...M
          } = l[E];
          if (!Ot(M)) {
            let X = !0;
            for (const Q in M) {
              const Y = S[Q], Z = M[Q];
              if (Y === void 0 || (Array.isArray(Z) ? !Z.includes(Y) : Z !== Y)) {
                X = !1;
                break;
              }
            }
            if (!X) continue;
          }
          for (let X = 0; X < I.length; X++) {
            const Q = I[X];
            C[Q] || (C[Q] = []), C[Q].push([W, q]);
          }
        }
        return C;
      };
      if (!Ot(i) || !g) {
        const O = {};
        if (typeof y == "object" && !Ot(y)) {
          const C = e;
          for (const S in y)
            O[S] = (E) => {
              const I = V(E), W = z(E);
              return C(
                y[S],
                A(S, E),
                I ? I[S] : void 0,
                W ? W[S] : void 0,
                E?.class,
                E?.className
              )(d);
            };
        }
        return O;
      }
      return e(
        f,
        P(),
        j(b),
        k?.class,
        k?.className
      )(d);
    }, _ = () => {
      if (!(!p || typeof p != "object"))
        return Object.keys(p);
    };
    return x.variantKeys = _(), x.extend = o, x.base = f, x.slots = y, x.variants = p, x.defaultVariants = h, x.compoundSlots = l, x.compoundVariants = b, x;
  };
  return {
    tv: t,
    createTV: (n) => (r, o) => t(r, o ? ba(n, o) : n)
  };
}, sb = (e) => Ot(e) ? vp : Jw({
  ...e,
  extend: {
    theme: e.theme,
    classGroups: e.classGroups,
    conflictingClassGroupModifiers: e.conflictingClassGroupModifiers,
    conflictingClassGroups: e.conflictingClassGroups,
    ...e.extend
  }
}), ab = (e, t) => {
  const n = es(e);
  return !n || !(t?.twMerge ?? !0) ? n : ((!On.cachedTwMerge || On.didTwMergeConfigChange) && (On.didTwMergeConfigChange = !1, On.cachedTwMerge = sb(On.cachedTwMergeConfig)), On.cachedTwMerge(n) || void 0);
}, lb = (...e) => (t) => ab(e, t), { tv: ub } = ib(lb);
const Hu = ub({
  base: "focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 rounded-sm border border-transparent bg-clip-padding text-sm font-medium focus-visible:ring-3 active:translate-y-px aria-invalid:ring-3 [&_svg:not([class*='size-'])]:size-4 group/button inline-flex shrink-0 items-center justify-center whitespace-nowrap transition-all outline-none select-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
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
var cb = /* @__PURE__ */ ee("<a><!></a>"), db = /* @__PURE__ */ ee("<button><!></button>");
function Te(e, t) {
  le(t, !0);
  let n = m(t, "class", 7), r = m(t, "variant", 7, "outline"), o = m(t, "size", 7, "default"), i = m(t, "ref", 15, null), s = m(t, "href", 23, () => {
  }), a = m(t, "type", 7, "button"), l = m(t, "disabled", 7), u = m(t, "children", 7), d = m(t, "primary", 7), f = /* @__PURE__ */ De(t, [
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
      n(b), v();
    },
    get variant() {
      return r();
    },
    set variant(b = "outline") {
      r(b), v();
    },
    get size() {
      return o();
    },
    set size(b = "default") {
      o(b), v();
    },
    get ref() {
      return i();
    },
    set ref(b = null) {
      i(b), v();
    },
    get href() {
      return s();
    },
    set href(b = void 0) {
      s(b), v();
    },
    get type() {
      return a();
    },
    set type(b = "button") {
      a(b), v();
    },
    get disabled() {
      return l();
    },
    set disabled(b) {
      l(b), v();
    },
    get children() {
      return u();
    },
    set children(b) {
      u(b), v();
    },
    get primary() {
      return d();
    },
    set primary(b) {
      d(b), v();
    }
  }, h = Ce(), g = te(h);
  {
    var w = (b) => {
      var x = cb();
      Ge(
        x,
        (k) => ({
          "data-slot": "button",
          class: k,
          href: l() ? void 0 : s(),
          "aria-disabled": l(),
          role: l() ? "link" : void 0,
          tabindex: l() ? -1 : void 0,
          ...f
        }),
        [
          () => Lr(Hu({ variant: r(), size: o() }), n())
        ]
      );
      var _ = K(x);
      Ye(_, () => u() ?? tt), R(x), ft(x, (k) => i(k), () => i()), T(b, x);
    }, y = (b) => {
      var x = db();
      Ge(
        x,
        (k) => ({
          "data-slot": "button",
          class: k,
          type: a(),
          disabled: l(),
          ...f
        }),
        [
          () => Lr(Hu({ variant: r(), size: o() }), n())
        ]
      );
      var _ = K(x);
      Ye(_, () => u() ?? tt), R(x), ft(x, (k) => i(k), () => i()), T(b, x);
    };
    ie(g, (b) => {
      s() ? b(w) : b(y, !1);
    });
  }
  return T(e, h), ue(p);
}
se(
  Te,
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
function fb(e) {
  return e !== null && typeof e == "object";
}
const pb = ["string", "number", "bigint", "boolean"];
function xa(e) {
  return e == null || pb.includes(typeof e) ? !0 : Array.isArray(e) ? e.every((t) => xa(t)) : typeof e == "object" ? Object.getPrototypeOf(e) === Object.prototype : !1;
}
const ka = Symbol("box"), hb = Symbol("is-writable");
function vn(e, t) {
  const n = /* @__PURE__ */ N(e);
  return t ? {
    [ka]: !0,
    [hb]: !0,
    get current() {
      return c(n);
    },
    set current(r) {
      t(r);
    }
  } : {
    [ka]: !0,
    get current() {
      return e();
    }
  };
}
function gb(e) {
  return fb(e) && ka in e;
}
function vb(...e) {
  return function(t) {
    for (const n of e)
      if (n) {
        if (t.defaultPrevented)
          return;
        typeof n == "function" ? n.call(this, t) : n.current?.call(this, t);
      }
  };
}
var Iu = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, mb = /\n/g, yb = /^\s*/, wb = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, bb = /^:\s*/, xb = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, kb = /^[;\s]*/, Cb = /^\s+|\s+$/g, $b = `
`, ju = "/", Ru = "*", br = "", _b = "comment", Sb = "declaration";
function Eb(e, t) {
  if (typeof e != "string")
    throw new TypeError("First argument must be a string");
  if (!e) return [];
  t = t || {};
  var n = 1, r = 1;
  function o(g) {
    var w = g.match(mb);
    w && (n += w.length);
    var y = g.lastIndexOf($b);
    r = ~y ? g.length - y : r + g.length;
  }
  function i() {
    var g = { line: n, column: r };
    return function(w) {
      return w.position = new s(g), u(), w;
    };
  }
  function s(g) {
    this.start = g, this.end = { line: n, column: r }, this.source = t.source;
  }
  s.prototype.content = e;
  function a(g) {
    var w = new Error(
      t.source + ":" + n + ":" + r + ": " + g
    );
    if (w.reason = g, w.filename = t.source, w.line = n, w.column = r, w.source = e, !t.silent) throw w;
  }
  function l(g) {
    var w = g.exec(e);
    if (w) {
      var y = w[0];
      return o(y), e = e.slice(y.length), w;
    }
  }
  function u() {
    l(yb);
  }
  function d(g) {
    var w;
    for (g = g || []; w = f(); )
      w !== !1 && g.push(w);
    return g;
  }
  function f() {
    var g = i();
    if (!(ju != e.charAt(0) || Ru != e.charAt(1))) {
      for (var w = 2; br != e.charAt(w) && (Ru != e.charAt(w) || ju != e.charAt(w + 1)); )
        ++w;
      if (w += 2, br === e.charAt(w - 1))
        return a("End of comment missing");
      var y = e.slice(2, w - 2);
      return r += 2, o(y), e = e.slice(w), r += 2, g({
        type: _b,
        comment: y
      });
    }
  }
  function p() {
    var g = i(), w = l(wb);
    if (w) {
      if (f(), !l(bb)) return a("property missing ':'");
      var y = l(xb), b = g({
        type: Sb,
        property: Zu(w[0].replace(Iu, br)),
        value: y ? Zu(y[0].replace(Iu, br)) : br
      });
      return l(kb), b;
    }
  }
  function h() {
    var g = [];
    d(g);
    for (var w; w = p(); )
      w !== !1 && (g.push(w), d(g));
    return g;
  }
  return u(), h();
}
function Zu(e) {
  return e ? e.replace(Cb, br) : br;
}
function Nb(e, t) {
  let n = null;
  if (!e || typeof e != "string")
    return n;
  const r = Eb(e), o = typeof t == "function";
  return r.forEach((i) => {
    if (i.type !== "declaration")
      return;
    const { property: s, value: a } = i;
    o ? t(s, a, i) : a && (n = n || {}, n[s] = a);
  }), n;
}
const zb = /\d/, Mb = ["-", "_", "/", "."];
function Pb(e = "") {
  if (!zb.test(e))
    return e !== e.toLowerCase();
}
function Ob(e) {
  const t = [];
  let n = "", r, o;
  for (const i of e) {
    const s = Mb.includes(i);
    if (s === !0) {
      t.push(n), n = "", r = void 0;
      continue;
    }
    const a = Pb(i);
    if (o === !1) {
      if (r === !1 && a === !0) {
        t.push(n), n = i, r = a;
        continue;
      }
      if (r === !0 && a === !1 && n.length > 1) {
        const l = n.at(-1);
        t.push(n.slice(0, Math.max(0, n.length - 1))), n = l + i, r = a;
        continue;
      }
    }
    n += i, r = a, o = s;
  }
  return t.push(n), t;
}
function wp(e) {
  return e ? Ob(e).map((t) => Vb(t)).join("") : "";
}
function Tb(e) {
  return Ab(wp(e || ""));
}
function Vb(e) {
  return e ? e[0].toUpperCase() + e.slice(1) : "";
}
function Ab(e) {
  return e ? e[0].toLowerCase() + e.slice(1) : "";
}
function xi(e) {
  if (!e)
    return {};
  const t = {};
  function n(r, o) {
    if (r.startsWith("-moz-") || r.startsWith("-webkit-") || r.startsWith("-ms-") || r.startsWith("-o-")) {
      t[wp(r)] = o;
      return;
    }
    if (r.startsWith("--")) {
      t[r] = o;
      return;
    }
    t[Tb(r)] = o;
  }
  return Nb(e, n), t;
}
function Lb(...e) {
  return (...t) => {
    for (const n of e)
      typeof n == "function" && n(...t);
  };
}
function Db(e, t) {
  const n = RegExp(e, "g");
  return (r) => {
    if (typeof r != "string")
      throw new TypeError(`expected an argument of type string, but got ${typeof r}`);
    return r.match(n) ? r.replace(n, t) : r;
  };
}
const Hb = Db(/[A-Z]/, (e) => `-${e.toLowerCase()}`);
function Ib(e) {
  if (!e || typeof e != "object" || Array.isArray(e))
    throw new TypeError(`expected an argument of type object, but got ${typeof e}`);
  return Object.keys(e).map((t) => `${Hb(t)}: ${e[t]};`).join(`
`);
}
function bp(e = {}) {
  return Ib(e).replace(`
`, " ");
}
const jb = [
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
], Rb = new Set(jb);
function Zb(e) {
  return Rb.has(e);
}
function xp(...e) {
  const t = { ...e[0] };
  for (let n = 1; n < e.length; n++) {
    const r = e[n];
    if (r) {
      for (const o of Object.keys(r)) {
        const i = t[o], s = r[o], a = typeof i == "function", l = typeof s == "function";
        if (a && Zb(o)) {
          const u = i, d = s;
          t[o] = vb(u, d);
        } else if (a && l)
          t[o] = Lb(i, s);
        else if (o === "class") {
          const u = xa(i), d = xa(s);
          u && d ? t[o] = So(i, s) : u ? t[o] = So(i) : d && (t[o] = So(s));
        } else if (o === "style") {
          const u = typeof i == "object", d = typeof s == "object", f = typeof i == "string", p = typeof s == "string";
          if (u && d)
            t[o] = { ...i, ...s };
          else if (u && p) {
            const h = xi(s);
            t[o] = { ...i, ...h };
          } else if (f && d) {
            const h = xi(i);
            t[o] = { ...h, ...s };
          } else if (f && p) {
            const h = xi(i), g = xi(s);
            t[o] = { ...h, ...g };
          } else u ? t[o] = i : d ? t[o] = s : f ? t[o] = i : p && (t[o] = s);
        } else
          t[o] = s !== void 0 ? s : i;
      }
      for (const o of Object.getOwnPropertySymbols(r)) {
        const i = t[o], s = r[o];
        t[o] = s !== void 0 ? s : i;
      }
    }
  }
  return typeof t.style == "object" && (t.style = bp(t.style).replaceAll(`
`, " ")), t.hidden === !1 && (t.hidden = void 0, delete t.hidden), t.disabled === !1 && (t.disabled = void 0, delete t.disabled), t;
}
const Kb = {
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
}, Bb = bp(Kb), Wb = typeof window < "u" ? window : void 0;
function Xb(e) {
  let t = e.activeElement;
  for (; t?.shadowRoot; ) {
    const n = t.shadowRoot.activeElement;
    if (n === t)
      break;
    t = n;
  }
  return t;
}
let Yb = class {
  #t;
  #e;
  constructor(e = {}) {
    const { window: t = Wb, document: n = t?.document } = e;
    t !== void 0 && (this.#t = n, this.#e = co((r) => {
      const o = $n(t, "focusin", r), i = $n(t, "focusout", r);
      return () => {
        o(), i();
      };
    }));
  }
  get current() {
    return this.#e?.(), this.#t ? Xb(this.#t) : null;
  }
};
new Yb();
class kp {
  #t;
  #e;
  /**
   * @param name The name of the context.
   * This is used for generating the context key and error messages.
   */
  constructor(t) {
    this.#t = t, this.#e = Symbol(t);
  }
  /**
   * The key used to get and set the context.
   *
   * It is not recommended to use this value directly.
   * Instead, use the methods provided by this class.
   */
  get key() {
    return this.#e;
  }
  /**
   * Checks whether this has been set in the context of a parent component.
   *
   * Must be called during component initialisation.
   */
  exists() {
    return cg(this.#e);
  }
  /**
   * Retrieves the context that belongs to the closest parent component.
   *
   * Must be called during component initialisation.
   *
   * @throws An error if the context does not exist.
   */
  get() {
    const t = ln(this.#e);
    if (t === void 0)
      throw new Error(`Context "${this.#t}" not found`);
    return t;
  }
  /**
   * Retrieves the context that belongs to the closest parent component,
   * or the given fallback value if the context does not exist.
   *
   * Must be called during component initialisation.
   */
  getOr(t) {
    const n = ln(this.#e);
    return n === void 0 ? t : n;
  }
  /**
   * Associates the given value with the current component and returns it.
   *
   * Must be called during component initialisation.
   */
  set(t) {
    return Mr(this.#e, t);
  }
}
function qb(e, t) {
  switch (e) {
    case "post":
      Ue(t);
      break;
    case "pre":
      jt(t);
      break;
  }
}
function Cp(e, t, n, r = {}) {
  const { lazy: o = !1 } = r;
  let i = !o, s = Array.isArray(e) ? [] : void 0;
  qb(t, () => {
    const a = Array.isArray(e) ? e.map((u) => u()) : e();
    if (!i) {
      i = !0, s = a;
      return;
    }
    const l = Qe(() => n(a, s));
    return s = a, l;
  });
}
function ts(e, t, n) {
  Cp(e, "post", t, n);
}
function Fb(e, t, n) {
  Cp(e, "pre", t, n);
}
ts.pre = Fb;
function Gb(e, t) {
  return {
    [Gg()]: (n) => gb(e) ? (e.current = n, Qe(() => t?.(n)), () => {
      "isConnected" in n && n.isConnected || (e.current = null);
    }) : (e(n), Qe(() => t?.(n)), () => {
      "isConnected" in n && n.isConnected || e(null);
    })
  };
}
function Ku(e) {
  return e ? "true" : "false";
}
function Bu(e) {
  return e ? "" : void 0;
}
function Ub(e, t) {
  return t ? "mixed" : e ? "true" : "false";
}
class Jb {
  #t;
  #e;
  attrs;
  constructor(t) {
    this.#t = t.getVariant ? t.getVariant() : null, this.#e = this.#t ? `data-${this.#t}-` : `data-${t.component}-`, this.getAttr = this.getAttr.bind(this), this.selector = this.selector.bind(this), this.attrs = Object.fromEntries(t.parts.map((n) => [n, this.getAttr(n)]));
  }
  getAttr(t, n) {
    return n ? `data-${n}-${t}` : `${this.#e}${t}`;
  }
  selector(t, n) {
    return `[${this.getAttr(t, n)}]`;
  }
}
function Qb(e) {
  const t = new Jb(e);
  return {
    ...t.attrs,
    selector: t.selector,
    getAttr: t.getAttr
  };
}
const ex = "Enter", tx = " ";
function nx(e) {
  return e instanceof HTMLElement;
}
function Wu(e, t) {
  return `bits-${e}`;
}
const rx = Qb({
  component: "checkbox",
  parts: ["root", "group", "group-label", "input"]
}), ox = new kp("Checkbox.Group"), $p = new kp("Checkbox.Root");
class wl {
  static create(t, n = null) {
    return $p.set(new wl(t, n));
  }
  opts;
  group;
  #t = /* @__PURE__ */ N(() => this.group && this.group.opts.name.current ? this.group.opts.name.current : this.opts.name.current);
  get trueName() {
    return c(this.#t);
  }
  set trueName(t) {
    U(this.#t, t);
  }
  #e = /* @__PURE__ */ N(() => this.group && this.group.opts.required.current ? !0 : this.opts.required.current);
  get trueRequired() {
    return c(this.#e);
  }
  set trueRequired(t) {
    U(this.#e, t);
  }
  #n = /* @__PURE__ */ N(() => this.group && this.group.opts.disabled.current ? !0 : this.opts.disabled.current);
  get trueDisabled() {
    return c(this.#n);
  }
  set trueDisabled(t) {
    U(this.#n, t);
  }
  #r = /* @__PURE__ */ N(() => this.group && this.group.opts.readonly.current ? !0 : this.opts.readonly.current);
  get trueReadonly() {
    return c(this.#r);
  }
  set trueReadonly(t) {
    U(this.#r, t);
  }
  attachment;
  constructor(t, n) {
    this.opts = t, this.group = n, this.attachment = Gb(this.opts.ref), this.onkeydown = this.onkeydown.bind(this), this.onclick = this.onclick.bind(this), ts.pre(
      [
        () => Ra(this.group?.opts.value.current),
        () => this.opts.value.current
      ],
      ([r, o]) => {
        !r || !o || (this.opts.checked.current = r.includes(o));
      }
    ), ts.pre(() => this.opts.checked.current, (r) => {
      this.group && (r ? this.group?.addValue(this.opts.value.current) : this.group?.removeValue(this.opts.value.current));
    });
  }
  onkeydown(t) {
    if (!(this.trueDisabled || this.trueReadonly)) {
      if (t.key === ex) {
        t.preventDefault(), this.opts.type.current === "submit" && t.currentTarget.closest("form")?.requestSubmit();
        return;
      }
      t.key === tx && (t.preventDefault(), this.#i());
    }
  }
  #i() {
    this.opts.indeterminate.current ? (this.opts.indeterminate.current = !1, this.opts.checked.current = !0) : this.opts.checked.current = !this.opts.checked.current;
  }
  onclick(t) {
    if (!(this.trueDisabled || this.trueReadonly)) {
      if (this.opts.type.current === "submit") {
        this.#i();
        return;
      }
      t.preventDefault(), this.#i();
    }
  }
  #o = /* @__PURE__ */ N(() => ({
    checked: this.opts.checked.current,
    indeterminate: this.opts.indeterminate.current
  }));
  get snippetProps() {
    return c(this.#o);
  }
  set snippetProps(t) {
    U(this.#o, t);
  }
  #s = /* @__PURE__ */ N(() => ({
    id: this.opts.id.current,
    role: "checkbox",
    type: this.opts.type.current,
    disabled: this.trueDisabled,
    "aria-checked": Ub(this.opts.checked.current, this.opts.indeterminate.current),
    "aria-required": Ku(this.trueRequired),
    "aria-readonly": Ku(this.trueReadonly),
    "data-disabled": Bu(this.trueDisabled),
    "data-readonly": Bu(this.trueReadonly),
    "data-state": ix(this.opts.checked.current, this.opts.indeterminate.current),
    [rx.root]: "",
    onclick: this.onclick,
    onkeydown: this.onkeydown,
    ...this.attachment
  }));
  get props() {
    return c(this.#s);
  }
  set props(t) {
    U(this.#s, t);
  }
}
class bl {
  static create() {
    return new bl($p.get());
  }
  root;
  #t = /* @__PURE__ */ N(() => this.root.group ? !!(this.root.opts.value.current !== void 0 && this.root.group.opts.value.current.includes(this.root.opts.value.current)) : this.root.opts.checked.current);
  get trueChecked() {
    return c(this.#t);
  }
  set trueChecked(t) {
    U(this.#t, t);
  }
  #e = /* @__PURE__ */ N(() => !!this.root.trueName);
  get shouldRender() {
    return c(this.#e);
  }
  set shouldRender(t) {
    U(this.#e, t);
  }
  constructor(t) {
    this.root = t, this.onfocus = this.onfocus.bind(this);
  }
  onfocus(t) {
    nx(this.root.opts.ref.current) && this.root.opts.ref.current.focus();
  }
  #n = /* @__PURE__ */ N(() => ({
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
  set props(t) {
    U(this.#n, t);
  }
}
function ix(e, t) {
  return t ? "indeterminate" : e ? "checked" : "unchecked";
}
var sx = /* @__PURE__ */ ee("<input/>"), ax = /* @__PURE__ */ ee("<input/>");
function _p(e, t) {
  le(t, !0);
  let n = m(t, "value", 15), r = /* @__PURE__ */ De(t, ["$$slots", "$$events", "$$legacy", "$$host", "value"]);
  const o = /* @__PURE__ */ N(() => xp(r, {
    "aria-hidden": "true",
    tabindex: -1,
    style: Bb
  }));
  var i = {
    get value() {
      return n();
    },
    set value(d) {
      n(d), v();
    }
  }, s = Ce(), a = te(s);
  {
    var l = (d) => {
      var f = sx();
      Ge(f, () => ({ ...c(o), value: n() }), void 0, void 0, void 0, void 0, !0), T(d, f);
    }, u = (d) => {
      var f = ax();
      Ge(f, () => ({ ...c(o) }), void 0, void 0, void 0, void 0, !0), ji(f, n), T(d, f);
    };
    ie(a, (d) => {
      c(o).type === "checkbox" ? d(l) : d(u, !1);
    });
  }
  return T(e, s), ue(i);
}
se(_p, { value: {} }, [], [], !0);
function Sp(e, t) {
  le(t, !1);
  const n = bl.create();
  Ja();
  var r = Ce(), o = te(r);
  {
    var i = (s) => {
      _p(s, Ke(() => n.props));
    };
    ie(o, (s) => {
      n.shouldRender && s(i);
    });
  }
  T(e, r), ue();
}
se(Sp, {}, [], [], !0);
var lx = /* @__PURE__ */ ee("<button><!></button>"), ux = /* @__PURE__ */ ee("<!> <!>", 1);
function Ep(e, t) {
  const n = Dg();
  le(t, !0);
  let r = m(t, "checked", 15, !1), o = m(t, "ref", 15, null), i = m(t, "onCheckedChange", 7), s = m(t, "children", 7), a = m(t, "disabled", 7, !1), l = m(t, "required", 7, !1), u = m(t, "name", 23, () => {
  }), d = m(t, "value", 7, "on"), f = m(t, "id", 23, () => Wu(n)), p = m(t, "indeterminate", 15, !1), h = m(t, "onIndeterminateChange", 7), g = m(t, "child", 7), w = m(t, "type", 7, "button"), y = m(t, "readonly", 7), b = /* @__PURE__ */ De(t, [
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
  const x = ox.getOr(null);
  x && d() && (x.opts.value.current.includes(d()) ? r(!0) : r(!1)), ts.pre(() => d(), () => {
    x && d() && (x.opts.value.current.includes(d()) ? r(!0) : r(!1));
  });
  const _ = wl.create(
    {
      checked: vn(() => r(), (V) => {
        r(V), i()?.(V);
      }),
      disabled: vn(() => a() ?? !1),
      required: vn(() => l()),
      name: vn(() => u()),
      value: vn(() => d()),
      id: vn(() => f()),
      ref: vn(() => o(), (V) => o(V)),
      indeterminate: vn(() => p(), (V) => {
        p(V), h()?.(V);
      }),
      type: vn(() => w()),
      readonly: vn(() => !!y())
    },
    x
  ), k = /* @__PURE__ */ N(() => xp({ ...b }, _.props));
  var $ = {
    get checked() {
      return r();
    },
    set checked(V = !1) {
      r(V), v();
    },
    get ref() {
      return o();
    },
    set ref(V = null) {
      o(V), v();
    },
    get onCheckedChange() {
      return i();
    },
    set onCheckedChange(V) {
      i(V), v();
    },
    get children() {
      return s();
    },
    set children(V) {
      s(V), v();
    },
    get disabled() {
      return a();
    },
    set disabled(V = !1) {
      a(V), v();
    },
    get required() {
      return l();
    },
    set required(V = !1) {
      l(V), v();
    },
    get name() {
      return u();
    },
    set name(V = void 0) {
      u(V), v();
    },
    get value() {
      return d();
    },
    set value(V = "on") {
      d(V), v();
    },
    get id() {
      return f();
    },
    set id(V = Wu(n)) {
      f(V), v();
    },
    get indeterminate() {
      return p();
    },
    set indeterminate(V = !1) {
      p(V), v();
    },
    get onIndeterminateChange() {
      return h();
    },
    set onIndeterminateChange(V) {
      h(V), v();
    },
    get child() {
      return g();
    },
    set child(V) {
      g(V), v();
    },
    get type() {
      return w();
    },
    set type(V = "button") {
      w(V), v();
    },
    get readonly() {
      return y();
    },
    set readonly(V) {
      y(V), v();
    }
  }, P = ux(), A = te(P);
  {
    var L = (V) => {
      var z = Ce(), O = te(z);
      {
        let C = /* @__PURE__ */ N(() => ({ props: c(k), ..._.snippetProps }));
        Ye(O, g, () => c(C));
      }
      T(V, z);
    }, H = (V) => {
      var z = lx();
      Ge(z, () => ({ ...c(k) }));
      var O = K(z);
      Ye(O, () => s() ?? tt, () => _.snippetProps), R(z), T(V, z);
    };
    ie(A, (V) => {
      g() ? V(L) : V(H, !1);
    });
  }
  var j = D(A, 2);
  return Sp(j, {}), T(e, P), ue($);
}
se(
  Ep,
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
const jo = Math.min, Gr = Math.max, ns = Math.round, kn = (e) => ({
  x: e,
  y: e
}), cx = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, dx = {
  start: "end",
  end: "start"
};
function Ca(e, t, n) {
  return Gr(e, jo(t, n));
}
function oi(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Dr(e) {
  return e.split("-")[0];
}
function ii(e) {
  return e.split("-")[1];
}
function Np(e) {
  return e === "x" ? "y" : "x";
}
function xl(e) {
  return e === "y" ? "height" : "width";
}
const fx = /* @__PURE__ */ new Set(["top", "bottom"]);
function tr(e) {
  return fx.has(Dr(e)) ? "y" : "x";
}
function kl(e) {
  return Np(tr(e));
}
function px(e, t, n) {
  n === void 0 && (n = !1);
  const r = ii(e), o = kl(e), i = xl(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = rs(s)), [s, rs(s)];
}
function hx(e) {
  const t = rs(e);
  return [$a(e), t, $a(t)];
}
function $a(e) {
  return e.replace(/start|end/g, (t) => dx[t]);
}
const Xu = ["left", "right"], Yu = ["right", "left"], gx = ["top", "bottom"], vx = ["bottom", "top"];
function mx(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Yu : Xu : t ? Xu : Yu;
    case "left":
    case "right":
      return t ? gx : vx;
    default:
      return [];
  }
}
function yx(e, t, n, r) {
  const o = ii(e);
  let i = mx(Dr(e), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map($a)))), i;
}
function rs(e) {
  return e.replace(/left|right|bottom|top/g, (t) => cx[t]);
}
function wx(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function zp(e) {
  return typeof e != "number" ? wx(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function os(e) {
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
function qu(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = tr(t), s = kl(t), a = xl(s), l = Dr(t), u = i === "y", d = r.x + r.width / 2 - o.width / 2, f = r.y + r.height / 2 - o.height / 2, p = r[a] / 2 - o[a] / 2;
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
        y: f
      };
      break;
    case "left":
      h = {
        x: r.x - o.width,
        y: f
      };
      break;
    default:
      h = {
        x: r.x,
        y: r.y
      };
  }
  switch (ii(t)) {
    case "start":
      h[s] -= p * (n && u ? -1 : 1);
      break;
    case "end":
      h[s] += p * (n && u ? -1 : 1);
      break;
  }
  return h;
}
const bx = async (e, t, n) => {
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
    y: f
  } = qu(u, r, l), p = r, h = {}, g = 0;
  for (let w = 0; w < a.length; w++) {
    const {
      name: y,
      fn: b
    } = a[w], {
      x,
      y: _,
      data: k,
      reset: $
    } = await b({
      x: d,
      y: f,
      initialPlacement: r,
      placement: p,
      strategy: o,
      middlewareData: h,
      rects: u,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    d = x ?? d, f = _ ?? f, h = {
      ...h,
      [y]: {
        ...h[y],
        ...k
      }
    }, $ && g <= 50 && (g++, typeof $ == "object" && ($.placement && (p = $.placement), $.rects && (u = $.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : $.rects), {
      x: d,
      y: f
    } = qu(u, p, l)), w = -1);
  }
  return {
    x: d,
    y: f,
    placement: p,
    strategy: o,
    middlewareData: h
  };
};
async function Mp(e, t) {
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
    elementContext: f = "floating",
    altBoundary: p = !1,
    padding: h = 0
  } = oi(t, e), g = zp(h), w = a[p ? f === "floating" ? "reference" : "floating" : f], y = os(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(w))) == null || n ? w : w.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: u,
    rootBoundary: d,
    strategy: l
  })), b = f === "floating" ? {
    x: r,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, x = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)), _ = await (i.isElement == null ? void 0 : i.isElement(x)) ? await (i.getScale == null ? void 0 : i.getScale(x)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, k = os(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: b,
    offsetParent: x,
    strategy: l
  }) : b);
  return {
    top: (y.top - k.top + g.top) / _.y,
    bottom: (k.bottom - y.bottom + g.bottom) / _.y,
    left: (y.left - k.left + g.left) / _.x,
    right: (k.right - y.right + g.right) / _.x
  };
}
const xx = (e) => ({
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
    } = oi(e, t) || {};
    if (u == null)
      return {};
    const f = zp(d), p = {
      x: n,
      y: r
    }, h = kl(o), g = xl(h), w = await s.getDimensions(u), y = h === "y", b = y ? "top" : "left", x = y ? "bottom" : "right", _ = y ? "clientHeight" : "clientWidth", k = i.reference[g] + i.reference[h] - p[h] - i.floating[g], $ = p[h] - i.reference[h], P = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
    let A = P ? P[_] : 0;
    (!A || !await (s.isElement == null ? void 0 : s.isElement(P))) && (A = a.floating[_] || i.floating[g]);
    const L = k / 2 - $ / 2, H = A / 2 - w[g] / 2 - 1, j = jo(f[b], H), V = jo(f[x], H), z = j, O = A - w[g] - V, C = A / 2 - w[g] / 2 + L, S = Ca(z, C, O), E = !l.arrow && ii(o) != null && C !== S && i.reference[g] / 2 - (C < z ? j : V) - w[g] / 2 < 0, I = E ? C < z ? C - z : C - O : 0;
    return {
      [h]: p[h] + I,
      data: {
        [h]: S,
        centerOffset: C - S - I,
        ...E && {
          alignmentOffset: I
        }
      },
      reset: E
    };
  }
}), kx = function(e) {
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
        crossAxis: f = !0,
        fallbackPlacements: p,
        fallbackStrategy: h = "bestFit",
        fallbackAxisSideDirection: g = "none",
        flipAlignment: w = !0,
        ...y
      } = oi(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const b = Dr(o), x = tr(a), _ = Dr(a) === a, k = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), $ = p || (_ || !w ? [rs(a)] : hx(a)), P = g !== "none";
      !p && P && $.push(...yx(a, w, g, k));
      const A = [a, ...$], L = await Mp(t, y), H = [];
      let j = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (d && H.push(L[b]), f) {
        const C = px(o, s, k);
        H.push(L[C[0]], L[C[1]]);
      }
      if (j = [...j, {
        placement: o,
        overflows: H
      }], !H.every((C) => C <= 0)) {
        var V, z;
        const C = (((V = i.flip) == null ? void 0 : V.index) || 0) + 1, S = A[C];
        if (S && (!(f === "alignment" && x !== tr(S)) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        j.every((I) => tr(I.placement) === x ? I.overflows[0] > 0 : !0)))
          return {
            data: {
              index: C,
              overflows: j
            },
            reset: {
              placement: S
            }
          };
        let E = (z = j.filter((I) => I.overflows[0] <= 0).sort((I, W) => I.overflows[1] - W.overflows[1])[0]) == null ? void 0 : z.placement;
        if (!E)
          switch (h) {
            case "bestFit": {
              var O;
              const I = (O = j.filter((W) => {
                if (P) {
                  const q = tr(W.placement);
                  return q === x || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  q === "y";
                }
                return !0;
              }).map((W) => [W.placement, W.overflows.filter((q) => q > 0).reduce((q, M) => q + M, 0)]).sort((W, q) => W[1] - q[1])[0]) == null ? void 0 : O[0];
              I && (E = I);
              break;
            }
            case "initialPlacement":
              E = a;
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
}, Cx = /* @__PURE__ */ new Set(["left", "top"]);
async function $x(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = Dr(n), a = ii(n), l = tr(n) === "y", u = Cx.has(s) ? -1 : 1, d = i && l ? -1 : 1, f = oi(t, e);
  let {
    mainAxis: p,
    crossAxis: h,
    alignmentAxis: g
  } = typeof f == "number" ? {
    mainAxis: f,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: f.mainAxis || 0,
    crossAxis: f.crossAxis || 0,
    alignmentAxis: f.alignmentAxis
  };
  return a && typeof g == "number" && (h = a === "end" ? g * -1 : g), l ? {
    x: h * d,
    y: p * u
  } : {
    x: p * u,
    y: h * d
  };
}
const _x = function(e) {
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
      } = t, l = await $x(t, e);
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
}, Sx = function(e) {
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
          fn: (y) => {
            let {
              x: b,
              y: x
            } = y;
            return {
              x: b,
              y: x
            };
          }
        },
        ...l
      } = oi(e, t), u = {
        x: n,
        y: r
      }, d = await Mp(t, l), f = tr(Dr(o)), p = Np(f);
      let h = u[p], g = u[f];
      if (i) {
        const y = p === "y" ? "top" : "left", b = p === "y" ? "bottom" : "right", x = h + d[y], _ = h - d[b];
        h = Ca(x, h, _);
      }
      if (s) {
        const y = f === "y" ? "top" : "left", b = f === "y" ? "bottom" : "right", x = g + d[y], _ = g - d[b];
        g = Ca(x, g, _);
      }
      const w = a.fn({
        ...t,
        [p]: h,
        [f]: g
      });
      return {
        ...w,
        data: {
          x: w.x - n,
          y: w.y - r,
          enabled: {
            [p]: i,
            [f]: s
          }
        }
      };
    }
  };
};
function Ns() {
  return typeof window < "u";
}
function ho(e) {
  return Pp(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Kt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Fn(e) {
  var t;
  return (t = (Pp(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Pp(e) {
  return Ns() ? e instanceof Node || e instanceof Kt(e).Node : !1;
}
function un(e) {
  return Ns() ? e instanceof Element || e instanceof Kt(e).Element : !1;
}
function Sn(e) {
  return Ns() ? e instanceof HTMLElement || e instanceof Kt(e).HTMLElement : !1;
}
function Fu(e) {
  return !Ns() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Kt(e).ShadowRoot;
}
const Ex = /* @__PURE__ */ new Set(["inline", "contents"]);
function si(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = cn(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !Ex.has(o);
}
const Nx = /* @__PURE__ */ new Set(["table", "td", "th"]);
function zx(e) {
  return Nx.has(ho(e));
}
const Mx = [":popover-open", ":modal"];
function zs(e) {
  return Mx.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const Px = ["transform", "translate", "scale", "rotate", "perspective"], Ox = ["transform", "translate", "scale", "rotate", "perspective", "filter"], Tx = ["paint", "layout", "strict", "content"];
function Cl(e) {
  const t = $l(), n = un(e) ? cn(e) : e;
  return Px.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || Ox.some((r) => (n.willChange || "").includes(r)) || Tx.some((r) => (n.contain || "").includes(r));
}
function Vx(e) {
  let t = cr(e);
  for (; Sn(t) && !ao(t); ) {
    if (Cl(t))
      return t;
    if (zs(t))
      return null;
    t = cr(t);
  }
  return null;
}
function $l() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const Ax = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function ao(e) {
  return Ax.has(ho(e));
}
function cn(e) {
  return Kt(e).getComputedStyle(e);
}
function Ms(e) {
  return un(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function cr(e) {
  if (ho(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Fu(e) && e.host || // Fallback.
    Fn(e)
  );
  return Fu(t) ? t.host : t;
}
function Op(e) {
  const t = cr(e);
  return ao(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Sn(t) && si(t) ? t : Op(t);
}
function Tp(e, t, n) {
  var r;
  t === void 0 && (t = []);
  const o = Op(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = Kt(o);
  return i ? (_a(s), t.concat(s, s.visualViewport || [], si(o) ? o : [], [])) : t.concat(o, Tp(o, []));
}
function _a(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Vp(e) {
  const t = cn(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = Sn(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, a = ns(n) !== i || ns(r) !== s;
  return a && (n = i, r = s), {
    width: n,
    height: r,
    $: a
  };
}
function Ap(e) {
  return un(e) ? e : e.contextElement;
}
function Ur(e) {
  const t = Ap(e);
  if (!Sn(t))
    return kn(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = Vp(t);
  let s = (i ? ns(n.width) : n.width) / r, a = (i ? ns(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const Lx = /* @__PURE__ */ kn(0);
function Lp(e) {
  const t = Kt(e);
  return !$l() || !t.visualViewport ? Lx : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Dx(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Kt(e) ? !1 : t;
}
function Ro(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = Ap(e);
  let s = kn(1);
  t && (r ? un(r) && (s = Ur(r)) : s = Ur(e));
  const a = Dx(i, n, r) ? Lp(i) : kn(0);
  let l = (o.left + a.x) / s.x, u = (o.top + a.y) / s.y, d = o.width / s.x, f = o.height / s.y;
  if (i) {
    const p = Kt(i), h = r && un(r) ? Kt(r) : r;
    let g = p, w = _a(g);
    for (; w && r && h !== g; ) {
      const y = Ur(w), b = w.getBoundingClientRect(), x = cn(w), _ = b.left + (w.clientLeft + parseFloat(x.paddingLeft)) * y.x, k = b.top + (w.clientTop + parseFloat(x.paddingTop)) * y.y;
      l *= y.x, u *= y.y, d *= y.x, f *= y.y, l += _, u += k, g = Kt(w), w = _a(g);
    }
  }
  return os({
    width: d,
    height: f,
    x: l,
    y: u
  });
}
function Ps(e, t) {
  const n = Ms(e).scrollLeft;
  return t ? t.left + n : Ro(Fn(e)).left + n;
}
function Dp(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - Ps(e, n), o = n.top + t.scrollTop;
  return {
    x: r,
    y: o
  };
}
function Hx(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", s = Fn(r), a = t ? zs(t.floating) : !1;
  if (r === s || a && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = kn(1);
  const d = kn(0), f = Sn(r);
  if ((f || !f && !i) && ((ho(r) !== "body" || si(s)) && (l = Ms(r)), Sn(r))) {
    const h = Ro(r);
    u = Ur(r), d.x = h.x + r.clientLeft, d.y = h.y + r.clientTop;
  }
  const p = s && !f && !i ? Dp(s, l) : kn(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + d.x + p.x,
    y: n.y * u.y - l.scrollTop * u.y + d.y + p.y
  };
}
function Ix(e) {
  return Array.from(e.getClientRects());
}
function jx(e) {
  const t = Fn(e), n = Ms(e), r = e.ownerDocument.body, o = Gr(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = Gr(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + Ps(e);
  const a = -n.scrollTop;
  return cn(r).direction === "rtl" && (s += Gr(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
const Gu = 25;
function Rx(e, t) {
  const n = Kt(e), r = Fn(e), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, a = 0, l = 0;
  if (o) {
    i = o.width, s = o.height;
    const d = $l();
    (!d || d && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  const u = Ps(r);
  if (u <= 0) {
    const d = r.ownerDocument, f = d.body, p = getComputedStyle(f), h = d.compatMode === "CSS1Compat" && parseFloat(p.marginLeft) + parseFloat(p.marginRight) || 0, g = Math.abs(r.clientWidth - f.clientWidth - h);
    g <= Gu && (i -= g);
  } else u <= Gu && (i += u);
  return {
    width: i,
    height: s,
    x: a,
    y: l
  };
}
const Zx = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function Kx(e, t) {
  const n = Ro(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = Sn(e) ? Ur(e) : kn(1), s = e.clientWidth * i.x, a = e.clientHeight * i.y, l = o * i.x, u = r * i.y;
  return {
    width: s,
    height: a,
    x: l,
    y: u
  };
}
function Uu(e, t, n) {
  let r;
  if (t === "viewport")
    r = Rx(e, n);
  else if (t === "document")
    r = jx(Fn(e));
  else if (un(t))
    r = Kx(t, n);
  else {
    const o = Lp(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return os(r);
}
function Hp(e, t) {
  const n = cr(e);
  return n === t || !un(n) || ao(n) ? !1 : cn(n).position === "fixed" || Hp(n, t);
}
function Bx(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Tp(e, []).filter((a) => un(a) && ho(a) !== "body"), o = null;
  const i = cn(e).position === "fixed";
  let s = i ? cr(e) : e;
  for (; un(s) && !ao(s); ) {
    const a = cn(s), l = Cl(s);
    !l && a.position === "fixed" && (o = null), (i ? !l && !o : !l && a.position === "static" && o && Zx.has(o.position) || si(s) && !l && Hp(e, s)) ? r = r.filter((u) => u !== s) : o = a, s = cr(s);
  }
  return t.set(e, r), r;
}
function Wx(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const i = [...n === "clippingAncestors" ? zs(t) ? [] : Bx(t, this._c) : [].concat(n), r], s = i[0], a = i.reduce((l, u) => {
    const d = Uu(t, u, o);
    return l.top = Gr(d.top, l.top), l.right = jo(d.right, l.right), l.bottom = jo(d.bottom, l.bottom), l.left = Gr(d.left, l.left), l;
  }, Uu(t, s, o));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top
  };
}
function Xx(e) {
  const {
    width: t,
    height: n
  } = Vp(e);
  return {
    width: t,
    height: n
  };
}
function Yx(e, t, n) {
  const r = Sn(t), o = Fn(t), i = n === "fixed", s = Ro(e, !0, i, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = kn(0);
  function u() {
    l.x = Ps(o);
  }
  if (r || !r && !i)
    if ((ho(t) !== "body" || si(o)) && (a = Ms(t)), r) {
      const h = Ro(t, !0, i, t);
      l.x = h.x + t.clientLeft, l.y = h.y + t.clientTop;
    } else o && u();
  i && !r && o && u();
  const d = o && !r && !i ? Dp(o, a) : kn(0), f = s.left + a.scrollLeft - l.x - d.x, p = s.top + a.scrollTop - l.y - d.y;
  return {
    x: f,
    y: p,
    width: s.width,
    height: s.height
  };
}
function Fs(e) {
  return cn(e).position === "static";
}
function Ju(e, t) {
  if (!Sn(e) || cn(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Fn(e) === n && (n = n.ownerDocument.body), n;
}
function Ip(e, t) {
  const n = Kt(e);
  if (zs(e))
    return n;
  if (!Sn(e)) {
    let o = cr(e);
    for (; o && !ao(o); ) {
      if (un(o) && !Fs(o))
        return o;
      o = cr(o);
    }
    return n;
  }
  let r = Ju(e, t);
  for (; r && zx(r) && Fs(r); )
    r = Ju(r, t);
  return r && ao(r) && Fs(r) && !Cl(r) ? n : r || Vx(e) || n;
}
const qx = async function(e) {
  const t = this.getOffsetParent || Ip, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: Yx(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function Fx(e) {
  return cn(e).direction === "rtl";
}
const Gx = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Hx,
  getDocumentElement: Fn,
  getClippingRect: Wx,
  getOffsetParent: Ip,
  getElementRects: qx,
  getClientRects: Ix,
  getDimensions: Xx,
  getScale: Ur,
  isElement: un,
  isRTL: Fx
}, Ux = _x, Jx = Sx, Qx = kx, e7 = xx, t7 = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: Gx,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return bx(e, t, {
    ...o,
    platform: i
  });
}, n7 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, r7 = (e) => {
  for (const t in e)
    if (t.startsWith("aria-") || t === "role" || t === "title")
      return !0;
  return !1;
}, o7 = Symbol("lucide-context"), i7 = () => ln(o7);
var s7 = /* @__PURE__ */ me("<svg><!><!></svg>");
function _l(e, t) {
  le(t, !0);
  const n = i7() ?? {}, r = m(t, "name", 7), o = m(t, "color", 23, () => n.color ?? "currentColor"), i = m(t, "size", 23, () => n.size ?? 24), s = m(t, "strokeWidth", 23, () => n.strokeWidth ?? 2), a = m(t, "absoluteStrokeWidth", 23, () => n.absoluteStrokeWidth ?? !1), l = m(t, "iconNode", 23, () => []), u = m(t, "children", 7), d = /* @__PURE__ */ De(t, [
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
  ]), f = /* @__PURE__ */ N(() => a() ? Number(s()) * 24 / Number(i()) : s());
  var p = {
    get name() {
      return r();
    },
    set name(y) {
      r(y), v();
    },
    get color() {
      return o();
    },
    set color(y = n.color ?? "currentColor") {
      o(y), v();
    },
    get size() {
      return i();
    },
    set size(y = n.size ?? 24) {
      i(y), v();
    },
    get strokeWidth() {
      return s();
    },
    set strokeWidth(y = n.strokeWidth ?? 2) {
      s(y), v();
    },
    get absoluteStrokeWidth() {
      return a();
    },
    set absoluteStrokeWidth(y = n.absoluteStrokeWidth ?? !1) {
      a(y), v();
    },
    get iconNode() {
      return l();
    },
    set iconNode(y = []) {
      l(y), v();
    },
    get children() {
      return u();
    },
    set children(y) {
      u(y), v();
    }
  }, h = s7();
  Ge(
    h,
    (y) => ({
      ...n7,
      ...y,
      ...d,
      width: i(),
      height: i(),
      stroke: o(),
      "stroke-width": c(f),
      class: [
        "lucide-icon lucide",
        n.class,
        r() && `lucide-${r()}`,
        t.class
      ]
    }),
    [
      () => !u() && !r7(d) && { "aria-hidden": "true" }
    ]
  );
  var g = K(h);
  yt(g, 17, l, Or, (y, b) => {
    var x = /* @__PURE__ */ N(() => lo(c(b), 2));
    let _ = () => c(x)[0], k = () => c(x)[1];
    var $ = Ce(), P = te($);
    od(P, _, !0, (A, L) => {
      Ge(A, () => ({ ...k() }));
    }), T(y, $);
  });
  var w = D(g);
  return Ye(w, () => u() ?? tt), R(h), T(e, h), ue(p);
}
se(
  _l,
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
function jp(e, t) {
  le(t, !0);
  let n = /* @__PURE__ */ De(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  const r = [["path", { d: "M20 6 9 17l-5-5" }]];
  _l(e, Ke({ name: "check" }, () => n, {
    get iconNode() {
      return r;
    },
    children: (o, i) => {
      var s = Ce(), a = te(s);
      Ye(a, () => t.children ?? tt), T(o, s);
    },
    $$slots: { default: !0 }
  })), ue();
}
se(jp, {}, [], [], !0);
function Rp(e, t) {
  le(t, !0);
  let n = /* @__PURE__ */ De(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  const r = [["path", { d: "M5 12h14" }]];
  _l(e, Ke({ name: "minus" }, () => n, {
    get iconNode() {
      return r;
    },
    children: (o, i) => {
      var s = Ce(), a = te(s);
      Ye(a, () => t.children ?? tt), T(o, s);
    },
    $$slots: { default: !0 }
  })), ue();
}
se(Rp, {}, [], [], !0);
var a7 = /* @__PURE__ */ ee('<div data-slot="checkbox-indicator" class="[&amp;>svg]:size-3.5 grid place-content-center text-current transition-none"><!></div>');
function Zp(e, t) {
  le(t, !0);
  let n = m(t, "ref", 15, null), r = m(t, "checked", 15, !1), o = m(t, "indeterminate", 15, !1), i = m(t, "class", 7), s = /* @__PURE__ */ De(t, [
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
      n(d), v();
    },
    get checked() {
      return r();
    },
    set checked(d = !1) {
      r(d), v();
    },
    get indeterminate() {
      return o();
    },
    set indeterminate(d = !1) {
      o(d), v();
    },
    get class() {
      return i();
    },
    set class(d) {
      i(d), v();
    }
  }, l = Ce(), u = te(l);
  {
    const d = (p, h) => {
      let g = () => h?.().checked, w = () => h?.().indeterminate;
      var y = a7(), b = K(y);
      {
        var x = (k) => {
          jp(k, {});
        }, _ = (k) => {
          var $ = Ce(), P = te($);
          {
            var A = (L) => {
              Rp(L, {});
            };
            ie(
              P,
              (L) => {
                w() && L(A);
              },
              !0
            );
          }
          T(k, $);
        };
        ie(b, (k) => {
          g() ? k(x) : k(_, !1);
        });
      }
      R(y), T(p, y);
    };
    let f = /* @__PURE__ */ N(() => Lr("border-input dark:bg-input/30 data-checked:bg-primary data-checked:text-primary-foreground dark:data-checked:bg-primary data-checked:border-primary aria-invalid:aria-checked:border-primary aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 flex size-4 items-center justify-center rounded-[4px] border shadow-xs transition-shadow group-has-disabled/field:opacity-50 focus-visible:ring-3 aria-invalid:ring-3 peer relative shrink-0 outline-none after:absolute after:-inset-x-3 after:-inset-y-2 disabled:cursor-not-allowed disabled:opacity-50", i()));
    Fo(u, () => Ep, (p, h) => {
      h(p, Ke(
        {
          "data-slot": "checkbox",
          get class() {
            return c(f);
          }
        },
        () => s,
        {
          get ref() {
            return n();
          },
          set ref(g) {
            n(g);
          },
          get checked() {
            return r();
          },
          set checked(g) {
            r(g);
          },
          get indeterminate() {
            return o();
          },
          set indeterminate(g) {
            o(g);
          },
          children: d,
          $$slots: { default: !0 }
        }
      ));
    });
  }
  return T(e, l), ue(a);
}
se(Zp, { ref: {}, checked: {}, indeterminate: {}, class: {} }, [], [], !0);
var l7 = /* @__PURE__ */ ee('<div><input type="hidden"/> <!> <!></div>');
const u7 = {
  hash: "svelte-1o3a23c",
  code: ".tf-chosen.svelte-1o3a23c {display:flex;flex-direction:row;align-items:center;justify-content:space-between;gap:5px;}"
};
function Kp(e, t) {
  le(t, !0), Be(e, u7);
  const n = m(t, "placeholder", 7), r = m(t, "label", 7), o = m(t, "value", 7), i = m(t, "buttonText", 7, "选择..."), s = m(t, "onChosen", 7), a = /* @__PURE__ */ De(t, [
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
      n(h), v();
    },
    get label() {
      return r();
    },
    set label(h) {
      r(h), v();
    },
    get value() {
      return o();
    },
    set value(h) {
      o(h), v();
    },
    get buttonText() {
      return i();
    },
    set buttonText(h = "选择...") {
      i(h), v();
    },
    get onChosen() {
      return s();
    },
    set onChosen(h) {
      s(h), v();
    }
  }, u = l7();
  Ge(
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
  var d = K(u);
  ar(d);
  var f = D(d, 2);
  ot(f, {
    get value() {
      return r();
    },
    get placeholder() {
      return n();
    },
    style: "flex-grow: 1;",
    disabled: !0
  });
  var p = D(f, 2);
  return Te(p, {
    variant: "outline",
    onclick: (h) => {
      s()?.(o(), r(), h);
    },
    style: "padding: 3px",
    children: (h, g) => {
      ye();
      var w = Ee();
      Se(() => qe(w, i())), T(h, w);
    },
    $$slots: { default: !0 }
  }), R(u), Se(() => _i(d, o())), T(e, u), ue(l);
}
se(
  Kp,
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
var c7 = /* @__PURE__ */ ee("<input/>"), d7 = /* @__PURE__ */ ee("<input/>");
function ot(e, t) {
  le(t, !0);
  let n = m(t, "ref", 15, null), r = m(t, "value", 15), o = m(t, "type", 7), i = m(t, "files", 15), s = m(t, "class", 7), a = m(t, "data-slot", 7, "input"), l = /* @__PURE__ */ De(t, [
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
    set ref(g = null) {
      n(g), v();
    },
    get value() {
      return r();
    },
    set value(g) {
      r(g), v();
    },
    get type() {
      return o();
    },
    set type(g) {
      o(g), v();
    },
    get files() {
      return i();
    },
    set files(g) {
      i(g), v();
    },
    get class() {
      return s();
    },
    set class(g) {
      s(g), v();
    },
    get "data-slot"() {
      return a();
    },
    set "data-slot"(g = "input") {
      a(g), v();
    }
  }, d = Ce(), f = te(d);
  {
    var p = (g) => {
      var w = c7();
      Ge(
        w,
        (y) => ({
          "data-slot": a(),
          class: y,
          type: "file",
          ...l
        }),
        [
          () => Lr("dark:bg-input/30 border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 h-9 rounded-md border bg-transparent px-2.5 py-1 text-base shadow-xs transition-[color,box-shadow] file:h-7 file:text-sm file:font-medium focus-visible:ring-3 aria-invalid:ring-3 md:text-sm file:text-foreground placeholder:text-muted-foreground w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50", s())
        ],
        void 0,
        void 0,
        void 0,
        !0
      ), ft(w, (y) => n(y), () => n()), iv(w, i), ji(w, r), T(g, w);
    }, h = (g) => {
      var w = d7();
      Ge(
        w,
        (y) => ({
          "data-slot": a(),
          spellcheck: "false",
          class: y,
          type: o(),
          ...l
        }),
        [
          () => Lr("dark:bg-input/30 border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 h-9 rounded-md border bg-transparent px-2.5 py-1 text-base shadow-xs transition-[color,box-shadow] file:h-7 file:text-sm file:font-medium focus-visible:ring-3 aria-invalid:ring-3 md:text-sm file:text-foreground placeholder:text-muted-foreground w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50", s())
        ],
        void 0,
        void 0,
        void 0,
        !0
      ), ft(w, (y) => n(y), () => n()), ji(w, r), T(g, w);
    };
    ie(f, (g) => {
      o() === "file" ? g(p) : g(h, !1);
    });
  }
  return T(e, d), ue(u);
}
se(
  ot,
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
var f7 = /* @__PURE__ */ ee("<textarea></textarea>");
function Xe(e, t) {
  le(t, !0);
  let n = m(t, "ref", 15, null), r = m(t, "value", 15), o = m(t, "class", 7), i = m(t, "data-slot", 7, "textarea"), s = m(t, "height", 7), a = m(t, "autoHeight", 7, !0), l = m(t, "maxHeight", 7), u = m(t, "onHeightChange", 7), d = /* @__PURE__ */ De(t, [
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
  ]), f, p;
  function h() {
    if (f && a()) {
      if (s() !== void 0) {
        const _ = typeof s() == "number" ? `${s()}px` : s();
        f.style.height = _, f.style.overflowY = "hidden", u()?.(_);
        return;
      }
      f.style.height = "auto", f.style.overflowY = "hidden";
      let x = f.scrollHeight;
      if (!p) {
        const _ = t.rows || 1, k = getComputedStyle(f);
        p = parseFloat(k.fontSize) * 1.2 * _ + parseFloat(k.paddingTop) + parseFloat(k.paddingBottom) + parseFloat(k.borderTopWidth);
      }
      if (x < p && (x = p), l()) {
        const _ = typeof l() == "number" ? `${l()}px` : l();
        x > parseInt(_) ? (f.style.height = _, f.style.overflowY = "auto") : f.style.height = `${x}px`;
      } else
        f.style.height = `${x}px`;
      u()?.(f.style.height);
    }
  }
  Ue(() => {
    h();
  });
  var g = {
    get ref() {
      return n();
    },
    set ref(x = null) {
      n(x), v();
    },
    get value() {
      return r();
    },
    set value(x) {
      r(x), v();
    },
    get class() {
      return o();
    },
    set class(x) {
      o(x), v();
    },
    get "data-slot"() {
      return i();
    },
    set "data-slot"(x = "textarea") {
      i(x), v();
    },
    get height() {
      return s();
    },
    set height(x) {
      s(x), v();
    },
    get autoHeight() {
      return a();
    },
    set autoHeight(x = !0) {
      a(x), v();
    },
    get maxHeight() {
      return l();
    },
    set maxHeight(x) {
      l(x), v();
    },
    get onHeightChange() {
      return u();
    },
    set onHeightChange(x) {
      u(x), v();
    }
  }, w = f7();
  Sg(w);
  var y = (x) => {
    h(), t.oninput?.(x);
  }, b = (x) => {
    h(), t.onchange?.(x);
  };
  return Ge(
    w,
    (x) => ({
      spellcheck: "false",
      "data-slot": i(),
      oninput: y,
      onchange: b,
      class: x,
      ...d
    }),
    [
      () => Lr("border-input dark:bg-input/30 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 rounded-md border bg-transparent px-2.5 py-2 text-base shadow-xs transition-[color,box-shadow] focus-visible:ring-3 aria-invalid:ring-3 md:text-sm placeholder:text-muted-foreground flex field-sizing-content min-h-16 w-full outline-none disabled:cursor-not-allowed disabled:opacity-50", o())
    ]
  ), ft(w, (x) => f = x, () => f), ji(w, r), T(e, w), ue(g);
}
se(
  Xe,
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
var p7 = /* @__PURE__ */ ee('<div role="button"><!></div>'), h7 = /* @__PURE__ */ ee("<div></div>");
function Bp(e, t) {
  const n = Wl(t, ["children", "$$slots", "$$events", "$$legacy", "$$host"]), r = Wl(n, ["items", "onChange", "activeIndex"]);
  le(t, !1);
  let o = m(t, "items", 28, () => []), i = m(t, "onChange", 12, () => {
  }), s = m(t, "activeIndex", 12, 0);
  function a(d, f) {
    s(f), i()?.(d, f);
  }
  var l = {
    get items() {
      return o();
    },
    set items(d) {
      o(d), v();
    },
    get onChange() {
      return i();
    },
    set onChange(d) {
      i(d), v();
    },
    get activeIndex() {
      return s();
    },
    set activeIndex(d) {
      s(d), v();
    }
  };
  Ja();
  var u = h7();
  return Ge(u, () => ({
    ...r,
    class: `tf-tabs ${qa(r), Qe(() => r.class) ?? ""}`
  })), yt(u, 5, o, Or, (d, f, p) => {
    var h = p7();
    $e(h, "tabindex", p), h.__click = () => a(c(f), p), h.__keydown = (b) => {
      (b.key === "Enter" || b.key === " ") && (b.preventDefault(), a(c(f), p));
    };
    var g = K(h);
    {
      var w = (b) => {
        var x = Ee();
        Se(() => qe(x, (c(f), Qe(() => c(f).label)))), T(b, x);
      }, y = (b) => {
        var x = Ce(), _ = te(x);
        Ye(_, () => (c(f), Qe(() => c(f).label) ?? tt)), T(b, x);
      };
      ie(g, (b) => {
        c(f), Qe(() => typeof c(f).label == "string") ? b(w) : b(y, !1);
      });
    }
    R(h), Se(() => Ht(h, 1, `tf-tabs-item ${p === s() ? "active" : ""}`)), T(d, h);
  }), R(u), T(e, u), ue(l);
}
hr(["click", "keydown"]);
se(Bp, { items: {}, onChange: {}, activeIndex: {} }, [], [], !0);
var g7 = /* @__PURE__ */ ee('<span class="tf-collapse-item-title-icon"><!></span>'), v7 = /* @__PURE__ */ ee('<div class="tf-collapse-item-description"><!></div>'), m7 = /* @__PURE__ */ ee('<div class="tf-collapse-item-content"><!></div>'), y7 = /* @__PURE__ */ ee('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><!> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), w7 = /* @__PURE__ */ ee("<div></div>");
const b7 = {
  hash: "svelte-ynwjxt",
  code: `\r
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-ynwjxt {transform:rotate(90deg);transition:transform 0.3s ease;}`
};
function Wp(e, t) {
  le(t, !0), Be(e, b7);
  let n = m(t, "items", 7), r = m(t, "onChange", 7), o = m(t, "activeKeys", 31, () => $t([]));
  function i(l) {
    o().includes(l.key) ? o(o().filter((u) => u !== l.key)) : (o().push(l.key), o(o())), r()?.(l, o());
  }
  var s = {
    get items() {
      return n();
    },
    set items(l) {
      n(l), v();
    },
    get onChange() {
      return r();
    },
    set onChange(l) {
      r(l), v();
    },
    get activeKeys() {
      return o();
    },
    set activeKeys(l = []) {
      o(l), v();
    }
  }, a = w7();
  return yt(a, 21, n, Or, (l, u, d) => {
    var f = y7(), p = K(f);
    $e(p, "tabindex", d), p.__click = () => i(c(u)), p.__keydown = ($) => {
      ($.key === "Enter" || $.key === " ") && ($.preventDefault(), i(c(u)));
    };
    var h = K(p);
    {
      var g = ($) => {
        var P = g7(), A = K(P);
        nr(A, {
          get target() {
            return c(u).icon;
          }
        }), R(P), T($, P);
      };
      ie(h, ($) => {
        c(u).icon && $(g);
      });
    }
    var w = D(h, 2);
    nr(w, {
      get target() {
        return c(u).title;
      }
    });
    var y = D(w, 2);
    R(p);
    var b = D(p, 2);
    {
      var x = ($) => {
        var P = v7(), A = K(P);
        nr(A, {
          get target() {
            return c(u).description;
          }
        }), R(P), T($, P);
      };
      ie(b, ($) => {
        c(u).description && $(x);
      });
    }
    var _ = D(b, 2);
    {
      var k = ($) => {
        var P = m7(), A = K(P);
        nr(A, {
          get target() {
            return c(u).content;
          }
        }), R(P), T($, P);
      };
      ie(_, ($) => {
        o().includes(c(u).key) && $(k);
      });
    }
    R(f), Se(($) => Ht(y, 1, `tf-collapse-item-title-arrow ${$ ?? ""}`, "svelte-ynwjxt"), [
      () => o().includes(c(u).key) ? "rotate-90" : ""
    ]), T(l, f);
  }), R(a), Se(() => {
    wt(a, t.style), Ht(a, 1, `tf-collapse ${t.class ?? ""}`, "svelte-ynwjxt");
  }), T(e, a), ue(s);
}
hr(["click", "keydown"]);
se(Wp, { items: {}, onChange: {}, activeKeys: {} }, [], [], !0);
function nr(e, t) {
  le(t, !0);
  let n = m(t, "target", 7);
  typeof n() > "u" && n("undefined");
  var r = {
    get target() {
      return n();
    },
    set target(l) {
      n(l), v();
    }
  }, o = Ce(), i = te(o);
  {
    var s = (l) => {
      var u = Ce(), d = te(u);
      Ye(d, () => n() ?? tt), T(l, u);
    }, a = (l) => {
      var u = Ce(), d = te(u);
      ys(d, n), T(l, u);
    };
    ie(i, (l) => {
      typeof n() == "function" ? l(s) : l(a, !1);
    });
  }
  return T(e, o), ue(r);
}
se(nr, { target: {} }, [], [], !0);
var x7 = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), k7 = /* @__PURE__ */ ee('<div class="tf-select-content-children"><!></div>'), C7 = /* @__PURE__ */ ee('<button class="tf-select-content-item"><span><!></span> <!></button> <!>', 1), $7 = /* @__PURE__ */ ee('<div class="tf-select-content nopan nodrag nowheel "><!></div>'), _7 = /* @__PURE__ */ ee("<!> <!>", 1), S7 = /* @__PURE__ */ ee('<div class="tf-select-input-placeholder"> </div>'), E7 = /* @__PURE__ */ ee('<button><div class="tf-select-input-value"></div> <div class="tf-select-input-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></div></button>'), N7 = /* @__PURE__ */ ee("<div><!></div>");
function vt(e, t) {
  le(t, !0);
  const n = (x, _ = tt) => {
    var k = Ce(), $ = te(k);
    yt($, 19, _, (P, A) => `${A}_${P.value}`, (P, A) => {
      var L = C7(), H = te(L);
      H.__click = () => g(c(A));
      var j = K(H), V = K(j);
      {
        var z = (E) => {
          var I = x7();
          T(E, I);
        };
        ie(V, (E) => {
          c(A).children && c(A).children.length > 0 && E(z);
        });
      }
      R(j);
      var O = D(j, 2);
      nr(O, {
        get target() {
          return c(A).label;
        }
      }), R(H);
      var C = D(H, 2);
      {
        var S = (E) => {
          var I = k7(), W = K(I);
          n(W, () => c(A).children), R(I), T(E, I);
        };
        ie(C, (E) => {
          c(A).children && c(A).children.length > 0 && (a() || u().includes(c(A).value)) && E(S);
        });
      }
      T(P, L);
    }), T(x, k);
  };
  let r = m(t, "items", 7), o = m(t, "onSelect", 7), i = m(t, "value", 23, () => []), s = m(t, "defaultValue", 23, () => []), a = m(t, "expandAll", 7, !0), l = m(t, "multiple", 7, !1), u = m(t, "expandValue", 23, () => []), d = m(t, "placeholder", 7), f = /* @__PURE__ */ De(t, [
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
  ]), p = /* @__PURE__ */ N(() => {
    const x = [], _ = (k) => {
      for (let $ of k)
        i().length > 0 ? i().includes($.value) && x.push($) : s().includes($.value) && x.push($), $.children && $.children.length > 0 && _($.children);
    };
    return _(r()), x;
  }), h;
  function g(x) {
    h?.hide(), o()?.(x);
  }
  var w = {
    get items() {
      return r();
    },
    set items(x) {
      r(x), v();
    },
    get onSelect() {
      return o();
    },
    set onSelect(x) {
      o(x), v();
    },
    get value() {
      return i();
    },
    set value(x = []) {
      i(x), v();
    },
    get defaultValue() {
      return s();
    },
    set defaultValue(x = []) {
      s(x), v();
    },
    get expandAll() {
      return a();
    },
    set expandAll(x = !0) {
      a(x), v();
    },
    get multiple() {
      return l();
    },
    set multiple(x = !1) {
      l(x), v();
    },
    get expandValue() {
      return u();
    },
    set expandValue(x = []) {
      u(x), v();
    },
    get placeholder() {
      return d();
    },
    set placeholder(x) {
      d(x), v();
    }
  }, y = N7();
  Ge(y, () => ({ ...f, class: `tf-select ${f.class ?? ""}` }));
  var b = K(y);
  return ft(
    mr(b, {
      floating: (x) => {
        var _ = $7(), k = K(_);
        n(k, r), R(_), T(x, _);
      },
      children: (x, _) => {
        var k = E7();
        Ge(k, () => ({ class: "tf-select-input nopan nodrag", ...f }));
        var $ = K(k);
        yt(
          $,
          23,
          () => c(p),
          (P, A) => `${A}_${P.value}`,
          (P, A, L) => {
            var H = Ce(), j = te(H);
            {
              var V = (O) => {
                var C = Ce(), S = te(C);
                {
                  var E = (I) => {
                    nr(I, {
                      get target() {
                        return c(A).label;
                      }
                    });
                  };
                  ie(S, (I) => {
                    c(L) === 0 && I(E);
                  });
                }
                T(O, C);
              }, z = (O) => {
                var C = _7(), S = te(C);
                nr(S, {
                  get target() {
                    return c(A).label;
                  }
                });
                var E = D(S, 2);
                {
                  var I = (W) => {
                    var q = Ee(",");
                    T(W, q);
                  };
                  ie(E, (W) => {
                    c(L) < c(p).length - 1 && W(I);
                  });
                }
                T(O, C);
              };
              ie(j, (O) => {
                l() ? O(z, !1) : O(V);
              });
            }
            T(P, H);
          },
          (P) => {
            var A = S7(), L = K(A, !0);
            R(A), Se(() => qe(L, d())), T(P, A);
          }
        ), R($), ye(2), R(k), T(x, k);
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (x) => h = x,
    () => h
  ), R(y), T(e, y), ue(w);
}
hr(["click"]);
se(
  vt,
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
const z7 = ({
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
  function f() {
    t7(e, u, {
      placement: r,
      middleware: [
        Ux(o),
        // 手动偏移配置
        Qx(i),
        //自动翻转
        Jx(s),
        //自动偏移（使得浮动元素能够进入视野）
        ...l ? [e7({ element: d })] : []
      ]
    }).then(({ x: b, y: x, placement: _, middlewareData: k }) => {
      if (Object.assign(u.style, {
        left: `${b}px`,
        top: `${x}px`
      }), l) {
        const { x: $, y: P } = k.arrow, A = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[_.split("-")[0]];
        Object.assign(d.style, {
          zIndex: -1,
          left: $ != null ? `${$}px` : "",
          top: P != null ? `${P}px` : "",
          right: "",
          bottom: "",
          [A]: "2px"
        });
      }
    });
  }
  let p = !1;
  function h() {
    u.style.display = "block", u.style.visibility = "block", u.style.position = "absolute", l && (d.style.display = "block"), p = !0, f();
  }
  function g() {
    u.style.display = "none", l && (d.style.display = "none"), p = !1;
  }
  function w(b) {
    b.stopPropagation(), p ? g() : h();
  }
  function y(b) {
    u.contains(b.target) || g();
  }
  return (!t || t.length == 0) && (t = ["click"]), t.forEach((b) => {
    e.addEventListener(b, w);
  }), document.addEventListener("click", y), {
    destroy() {
      t.forEach((b) => {
        e.removeEventListener(b, w);
      }), document.removeEventListener("click", y);
    },
    hide() {
      g();
    },
    isVisible() {
      return p;
    }
  };
};
var M7 = /* @__PURE__ */ ee('<div style="position: relative"><div><!></div> <div style="display: none; width: 100%;z-index: 9999"><!></div></div>');
function mr(e, t) {
  le(t, !0);
  const n = m(t, "children", 7), r = m(t, "floating", 7), o = m(t, "placement", 7, "bottom");
  let i, s, a;
  En(() => (a = z7({
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
      n(w), v();
    },
    get floating() {
      return r();
    },
    set floating(w) {
      r(w), v();
    },
    get placement() {
      return o();
    },
    set placement(w = "bottom") {
      o(w), v();
    }
  }, d = M7(), f = K(d), p = K(f);
  Ye(p, n), R(f), ft(f, (w) => i = w, () => i);
  var h = D(f, 2), g = K(h);
  return Ye(g, r), R(h), ft(h, (w) => s = w, () => s), R(d), T(e, d), ue(u);
}
se(mr, { children: {}, floating: {}, placement: {} }, [], ["hide"], !0);
function Ve(e, t) {
  le(t, !0);
  const n = m(t, "children", 7), r = m(t, "level", 7, 1), o = m(t, "mt", 7), i = m(t, "mb", 7);
  var s = {
    get children() {
      return n();
    },
    set children(u) {
      n(u), v();
    },
    get level() {
      return r();
    },
    set level(u = 1) {
      r(u), v();
    },
    get mt() {
      return o();
    },
    set mt(u) {
      o(u), v();
    },
    get mb() {
      return i();
    },
    set mb(u) {
      i(u), v();
    }
  }, a = Ce(), l = te(a);
  return od(l, () => `h${r()}`, !1, (u, d) => {
    Ge(u, () => ({
      class: "tf-heading",
      style: `margin-top:${o() || "0"};margin-bottom:${i() || "0"}`
    }));
    var f = Ce(), p = te(f);
    Ye(p, () => n() ?? tt), T(d, f);
  }), T(e, a), ue(s);
}
se(Ve, { children: {}, level: {}, mt: {}, mb: {} }, [], [], !0);
var P7 = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1q3h954"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1q3h954"></path></svg>');
const O7 = {
  hash: "svelte-1q3h954",
  code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:var(--input);border:1px solid transparent;}}"
};
function ai(e, t) {
  le(t, !0), Be(e, O7);
  const n = /* @__PURE__ */ De(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  {
    let r = /* @__PURE__ */ N(() => Lr("input-btn-more", t.class));
    Te(e, Ke(
      {
        size: "icon-xs",
        get class() {
          return c(r);
        }
      },
      () => n,
      {
        children: (o, i) => {
          var s = P7();
          T(o, s);
        },
        $$slots: { default: !0 }
      }
    ));
  }
  ue();
}
se(ai, {}, [], [], !0);
const T7 = () => ({ deleteNode: (e) => {
  Ae.removeNode(e), Ae.updateEdges((t) => t.filter((n) => n.source !== e && n.target !== e));
} }), Zn = (e = 16) => {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = new Uint8Array(e);
  return crypto.getRandomValues(n), Array.from(n, (r) => t[r % t.length]).join("");
}, V7 = () => ({ copyNode: (e) => {
  const t = Ae.getNode(e);
  if (t) {
    const n = Zn(), r = {
      ...t,
      id: n,
      position: { x: t.position.x + 50, y: t.position.y + 50 }
    };
    Ae.updateNodes((o) => [...o.map((i) => ({ ...i, selected: !1 })), r]);
  }
} }), nt = () => ln("svelteflow__node_id"), dr = () => ln("tinyflow_options");
var A7 = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'), L7 = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'), D7 = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'), H7 = /* @__PURE__ */ ee('<div class="input-item svelte-ana6zl">执行条件： <!></div>'), I7 = /* @__PURE__ */ ee('<div class="input-item svelte-ana6zl">循环间隔时间（单位：毫秒）： <!></div> <div class="input-item svelte-ana6zl">最大循环次数（0 表示不限制）： <!></div> <div class="input-item svelte-ana6zl">退出条件： <!></div>', 1), j7 = /* @__PURE__ */ ee('<div class="input-item svelte-ana6zl">错误重试间隔时间（单位：毫秒）： <!></div> <div class="input-item svelte-ana6zl">最大重试次数： <!></div> <label class="input-item-inline svelte-ana6zl"><span>正常后重置重试次数记录：</span> <input type="checkbox"/></label>', 1), R7 = /* @__PURE__ */ ee('<div class="settings svelte-ana6zl"><div class="input-item svelte-ana6zl">节点名称： <!></div> <div class="input-item svelte-ana6zl">参数描述： <!></div> <!> <label class="input-item-inline svelte-ana6zl"><span>循环执行：</span> <input type="checkbox"/></label> <!> <label class="input-item-inline svelte-ana6zl"><span>错误重试：</span> <input type="checkbox"/></label> <!></div>'), Z7 = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3.33946 17.0002C2.90721 16.2515 2.58277 15.4702 2.36133 14.6741C3.3338 14.1779 3.99972 13.1668 3.99972 12.0002C3.99972 10.8345 3.3348 9.824 2.36353 9.32741C2.81025 7.71651 3.65857 6.21627 4.86474 4.99001C5.7807 5.58416 6.98935 5.65534 7.99972 5.072C9.01009 4.48866 9.55277 3.40635 9.4962 2.31604C11.1613 1.8846 12.8847 1.90004 14.5031 2.31862C14.4475 3.40806 14.9901 4.48912 15.9997 5.072C17.0101 5.65532 18.2187 5.58416 19.1346 4.99007C19.7133 5.57986 20.2277 6.25151 20.66 7.00021C21.0922 7.7489 21.4167 8.53025 21.6381 9.32628C20.6656 9.82247 19.9997 10.8336 19.9997 12.0002C19.9997 13.166 20.6646 14.1764 21.6359 14.673C21.1892 16.2839 20.3409 17.7841 19.1347 19.0104C18.2187 18.4163 17.0101 18.3451 15.9997 18.9284C14.9893 19.5117 14.4467 20.5941 14.5032 21.6844C12.8382 22.1158 11.1148 22.1004 9.49633 21.6818C9.55191 20.5923 9.00929 19.5113 7.99972 18.9284C6.98938 18.3451 5.78079 18.4162 4.86484 19.0103C4.28617 18.4205 3.77172 17.7489 3.33946 17.0002ZM8.99972 17.1964C10.0911 17.8265 10.8749 18.8227 11.2503 19.9659C11.7486 20.0133 12.2502 20.014 12.7486 19.9675C13.1238 18.8237 13.9078 17.8268 14.9997 17.1964C16.0916 16.5659 17.347 16.3855 18.5252 16.6324C18.8146 16.224 19.0648 15.7892 19.2729 15.334C18.4706 14.4373 17.9997 13.2604 17.9997 12.0002C17.9997 10.74 18.4706 9.5632 19.2729 8.6665C19.1688 8.4405 19.0538 8.21822 18.9279 8.00021C18.802 7.78219 18.667 7.57148 18.5233 7.36842C17.3457 7.61476 16.0911 7.43414 14.9997 6.80405C13.9083 6.17395 13.1246 5.17768 12.7491 4.03455C12.2509 3.98714 11.7492 3.98646 11.2509 4.03292C10.8756 5.17671 10.0916 6.17364 8.99972 6.80405C7.9078 7.43447 6.65245 7.61494 5.47428 7.36803C5.18485 7.77641 4.93463 8.21117 4.72656 8.66637C5.52881 9.56311 5.99972 10.74 5.99972 12.0002C5.99972 13.2604 5.52883 14.4372 4.72656 15.3339C4.83067 15.5599 4.94564 15.7822 5.07152 16.0002C5.19739 16.2182 5.3324 16.4289 5.47612 16.632C6.65377 16.3857 7.90838 16.5663 8.99972 17.1964ZM11.9997 15.0002C10.3429 15.0002 8.99972 13.6571 8.99972 12.0002C8.99972 10.3434 10.3429 9.00021 11.9997 9.00021C13.6566 9.00021 14.9997 10.3434 14.9997 12.0002C14.9997 13.6571 13.6566 15.0002 11.9997 15.0002ZM11.9997 13.0002C12.552 13.0002 12.9997 12.5525 12.9997 12.0002C12.9997 11.4479 12.552 11.0002 11.9997 11.0002C11.4474 11.0002 10.9997 11.4479 10.9997 12.0002C10.9997 12.5525 11.4474 13.0002 11.9997 13.0002Z"></path></svg>'), K7 = /* @__PURE__ */ ee('<div class="tf-node-toolbar svelte-ana6zl"><!> <!> <!> <!></div>'), B7 = /* @__PURE__ */ ee('<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!> <!>', 1);
const W7 = {
  hash: "svelte-ana6zl",
  code: ".tf-node-toolbar.svelte-ana6zl {display:flex;gap:5px;padding:5px;border-radius:5px;background:var(--background);border:1px solid var(--border);box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}.settings.svelte-ana6zl {display:flex;flex-direction:column;gap:10px;padding:10px;background:var(--background);border:1px solid var(--border);border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.settings.svelte-ana6zl .input-item:where(.svelte-ana6zl) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:var(--muted-foreground);}.settings.svelte-ana6zl .input-item-inline:where(.svelte-ana6zl) {display:flex;align-items:center;font-size:12px;color:var(--muted-foreground);}"
};
function Qt(e, t) {
  le(t, !0), Be(e, W7);
  const n = m(t, "data", 7), r = m(t, "id", 7, ""), o = m(t, "icon", 7), i = m(t, "handle", 7), s = m(t, "children", 7), a = m(t, "allowExecute", 7, !0), l = m(t, "allowCopy", 7, !0), u = m(t, "allowDelete", 7, !0), d = m(t, "allowSetting", 7, !0), f = m(t, "allowSettingOfCondition", 7, !0), p = m(t, "showSourceHandle", 7, !0), h = m(t, "showTargetHandle", 7, !0), g = m(t, "onCollapse", 7);
  let w = n().expand ? ["key"] : [];
  const { updateNodeData: y, getNode: b } = pt(), x = /* @__PURE__ */ N(() => [
    {
      key: "key",
      icon: o(),
      title: n().title,
      description: n().description,
      content: s()
    }
  ]), { deleteNode: _ } = T7(), { copyNode: k } = V7(), $ = dr(), P = () => {
    $.onNodeExecute?.(b(r()));
  };
  let A = nt();
  var L = {
    get data() {
      return n();
    },
    set data(M) {
      n(M), v();
    },
    get id() {
      return r();
    },
    set id(M = "") {
      r(M), v();
    },
    get icon() {
      return o();
    },
    set icon(M) {
      o(M), v();
    },
    get handle() {
      return i();
    },
    set handle(M) {
      i(M), v();
    },
    get children() {
      return s();
    },
    set children(M) {
      s(M), v();
    },
    get allowExecute() {
      return a();
    },
    set allowExecute(M = !0) {
      a(M), v();
    },
    get allowCopy() {
      return l();
    },
    set allowCopy(M = !0) {
      l(M), v();
    },
    get allowDelete() {
      return u();
    },
    set allowDelete(M = !0) {
      u(M), v();
    },
    get allowSetting() {
      return d();
    },
    set allowSetting(M = !0) {
      d(M), v();
    },
    get allowSettingOfCondition() {
      return f();
    },
    set allowSettingOfCondition(M = !0) {
      f(M), v();
    },
    get showSourceHandle() {
      return p();
    },
    set showSourceHandle(M = !0) {
      p(M), v();
    },
    get showTargetHandle() {
      return h();
    },
    set showTargetHandle(M = !0) {
      h(M), v();
    },
    get onCollapse() {
      return g();
    },
    set onCollapse(M) {
      g(M), v();
    }
  }, H = B7(), j = te(H);
  {
    var V = (M) => {
      ep(M, {
        get position() {
          return xe.Top;
        },
        align: "start",
        children: (X, Q) => {
          var Y = K7(), Z = K(Y);
          {
            var B = (oe) => {
              Te(oe, {
                size: "icon",
                class: "tf-node-toolbar-item",
                onclick: () => {
                  _(r());
                },
                children: (ae, pe) => {
                  var be = A7();
                  T(ae, be);
                },
                $$slots: { default: !0 }
              });
            };
            ie(Z, (oe) => {
              u() && oe(B);
            });
          }
          var F = D(Z, 2);
          {
            var ne = (oe) => {
              Te(oe, {
                size: "icon",
                class: "tf-node-toolbar-item",
                onclick: () => {
                  k(r());
                },
                children: (ae, pe) => {
                  var be = L7();
                  T(ae, be);
                },
                $$slots: { default: !0 }
              });
            };
            ie(F, (oe) => {
              l() && oe(ne);
            });
          }
          var re = D(F, 2);
          {
            var J = (oe) => {
              Te(oe, {
                size: "icon",
                class: "tf-node-toolbar-item",
                onclick: P,
                children: (ae, pe) => {
                  var be = D7();
                  T(ae, be);
                },
                $$slots: { default: !0 }
              });
            };
            ie(re, (oe) => {
              a() && oe(J);
            });
          }
          var he = D(re, 2);
          {
            var ce = (oe) => {
              mr(oe, {
                placement: "bottom",
                floating: (ae) => {
                  var pe = R7(), be = K(pe), ke = D(K(be));
                  ot(ke, {
                    style: "width: 100%;",
                    onchange: (fe) => {
                      const Me = fe.target.value;
                      y(A, { title: Me });
                    },
                    get value() {
                      return n().title;
                    }
                  }), R(be);
                  var de = D(be, 2), _e = D(K(de));
                  Xe(_e, {
                    rows: 3,
                    style: "width: 100%;",
                    onchange: (fe) => {
                      const Me = fe.target.value;
                      y(A, { description: Me });
                    },
                    get value() {
                      return n().description;
                    }
                  }), R(de);
                  var Ie = D(de, 2);
                  {
                    var G = (fe) => {
                      var Me = H7(), at = D(K(Me));
                      Xe(at, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (Re) => {
                          const lt = Re.target.value;
                          y(A, { condition: lt });
                        },
                        get value() {
                          return n().condition;
                        }
                      }), R(Me), T(fe, Me);
                    };
                    ie(Ie, (fe) => {
                      f() && fe(G);
                    });
                  }
                  var Je = D(Ie, 2), He = D(K(Je), 2);
                  ar(He), He.__change = (fe) => {
                    const Me = fe.target.checked;
                    y(A, { loopEnable: Me });
                  }, R(Je);
                  var We = D(Je, 2);
                  {
                    var je = (fe) => {
                      var Me = I7(), at = te(Me), Re = D(K(at));
                      {
                        let bt = /* @__PURE__ */ N(() => n().loopIntervalMs || "1000");
                        Xe(Re, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (xt) => {
                            const Xt = xt.target.value;
                            y(A, { loopIntervalMs: Xt });
                          },
                          get value() {
                            return c(bt);
                          }
                        });
                      }
                      R(at);
                      var lt = D(at, 2), en = D(K(lt));
                      {
                        let bt = /* @__PURE__ */ N(() => n().maxLoopCount || "0");
                        Xe(en, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (xt) => {
                            const Xt = xt.target.value;
                            y(A, { maxLoopCount: Xt });
                          },
                          get value() {
                            return c(bt);
                          }
                        });
                      }
                      R(lt);
                      var ht = D(lt, 2), Un = D(K(ht));
                      Xe(Un, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (bt) => {
                          const xt = bt.target.value;
                          y(A, { loopBreakCondition: xt });
                        },
                        get value() {
                          return n().loopBreakCondition;
                        }
                      }), R(ht), T(fe, Me);
                    };
                    ie(We, (fe) => {
                      n().loopEnable && fe(je);
                    });
                  }
                  var rt = D(We, 2), St = D(K(rt), 2);
                  ar(St), St.__change = (fe) => {
                    const Me = fe.target.checked;
                    y(A, { retryEnable: Me });
                  }, R(rt);
                  var hn = D(rt, 2);
                  {
                    var ct = (fe) => {
                      var Me = j7(), at = te(Me), Re = D(K(at));
                      {
                        let bt = /* @__PURE__ */ N(() => n().retryIntervalMs || "1000");
                        Xe(Re, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (xt) => {
                            const Xt = xt.target.value;
                            y(A, { retryIntervalMs: Xt });
                          },
                          get value() {
                            return c(bt);
                          }
                        });
                      }
                      R(at);
                      var lt = D(at, 2), en = D(K(lt));
                      {
                        let bt = /* @__PURE__ */ N(() => n().maxRetryCount || "3");
                        Xe(en, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (xt) => {
                            const Xt = xt.target.value;
                            y(A, { maxRetryCount: Xt });
                          },
                          get value() {
                            return c(bt);
                          }
                        });
                      }
                      R(lt);
                      var ht = D(lt, 2), Un = D(K(ht), 2);
                      ar(Un), Un.__change = (bt) => {
                        const xt = bt.target.checked;
                        y(A, { resetRetryCountAfterNormal: xt });
                      }, R(ht), Se(() => As(Un, !!n().resetRetryCountAfterNormal)), T(fe, Me);
                    };
                    ie(hn, (fe) => {
                      n().retryEnable && fe(ct);
                    });
                  }
                  R(pe), Se(() => {
                    As(He, !!n().loopEnable), As(St, !!n().retryEnable);
                  }), T(ae, pe);
                },
                children: (ae, pe) => {
                  Te(ae, {
                    size: "icon",
                    class: "tf-node-toolbar-item",
                    children: (be, ke) => {
                      var de = Z7();
                      T(be, de);
                    },
                    $$slots: { default: !0 }
                  });
                },
                $$slots: { floating: !0, default: !0 }
              });
            };
            ie(he, (oe) => {
              d() && oe(ce);
            });
          }
          R(Y), T(X, Y);
        },
        $$slots: { default: !0 }
      });
    };
    ie(j, (M) => {
      (a() || l() || u()) && M(V);
    });
  }
  var z = D(j, 2), O = D(K(z), 2), C = K(O);
  Wp(C, {
    get items() {
      return c(x);
    },
    get activeKeys() {
      return w;
    },
    onChange: (M, X) => {
      y(r(), { expand: X?.includes("key") }), g()?.(X?.includes("key") ? "key" : "");
    }
  }), R(O), R(z);
  var S = D(z, 2);
  {
    var E = (M) => {
      ur(M, {
        type: "target",
        get position() {
          return xe.Left;
        },
        style: " left: -12px;top: 20px"
      });
    };
    ie(S, (M) => {
      h() && M(E);
    });
  }
  var I = D(S, 2);
  {
    var W = (M) => {
      ur(M, {
        type: "source",
        get position() {
          return xe.Right;
        },
        style: "right: -12px;top: 20px"
      });
    };
    ie(I, (M) => {
      p() && M(W);
    });
  }
  var q = D(I, 2);
  return Ye(q, () => i() ?? tt), T(e, H), ue(L);
}
hr(["change"]);
se(
  Qt,
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
var X7 = /* @__PURE__ */ ee('<div class="input-more-item svelte-n5iecj">数据选项： <!></div>'), Y7 = /* @__PURE__ */ ee('<div class="input-more-setting svelte-n5iecj"><div class="input-more-item svelte-n5iecj">数据内容： <!></div> <div class="input-more-item svelte-n5iecj">输入方式： <!></div> <!> <div class="input-more-item svelte-n5iecj">数据标题： <!></div> <div class="input-more-item svelte-n5iecj">数据描述： <!></div> <div class="input-more-item svelte-n5iecj">占位符： <!></div> <div class="input-more-item svelte-n5iecj"><!></div></div>'), q7 = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>'), F7 = /* @__PURE__ */ ee('<div class="input-item svelte-n5iecj"><!></div> <div class="input-item svelte-n5iecj"><!></div> <div class="input-item svelte-n5iecj"><!></div>', 1);
const G7 = {
  hash: "svelte-n5iecj",
  code: ".input-item.svelte-n5iecj {display:flex;align-items:center;}.input-more-setting.svelte-n5iecj {display:flex;flex-direction:column;gap:10px;padding:10px;background:var(--background);border:1px solid var(--border);border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-n5iecj .input-more-item:where(.svelte-n5iecj) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:var(--muted-foreground);}"
};
function Xp(e, t) {
  le(t, !0), Be(e, G7);
  const n = m(t, "parameter", 7), r = m(t, "index", 7);
  let o = nt(), i = qn(o), s = /* @__PURE__ */ N(() => ({ ...n(), ...i?.current?.data?.parameters[r()] }));
  const { updateNodeData: a } = pt(), l = (L, H) => {
    a(o, (j) => {
      let V = j.data.parameters;
      return V[r()][L] = H, { parameters: V };
    });
  }, u = (L, H) => {
    const j = H.target.value;
    l(L, j);
  }, d = (L) => {
    const H = L.target.value;
    l("name", H);
  }, f = (L) => {
    l("required", L);
  }, p = (L) => {
    const H = L.value;
    l("formType", H);
  }, h = (L) => {
    const H = L.value;
    l("contentType", H);
  };
  let g;
  const w = () => {
    a(o, (L) => {
      let H = L.data.parameters;
      return H.splice(r(), 1), { parameters: [...H] };
    }), g?.hide();
  };
  var y = {
    get parameter() {
      return n();
    },
    set parameter(L) {
      n(L), v();
    },
    get index() {
      return r();
    },
    set index(L) {
      r(L), v();
    }
  }, b = F7(), x = te(b), _ = K(x);
  ot(_, {
    style: "width: 100%;",
    get value() {
      return c(s).name;
    },
    placeholder: "请输入参数名称",
    oninput: d
  }), R(x);
  var k = D(x, 2), $ = K(k);
  Zp($, {
    get checked() {
      return c(s).required;
    },
    onCheckedChange: f
  }), R(k);
  var P = D(k, 2), A = K(P);
  return ft(
    mr(A, {
      placement: "bottom",
      floating: (L) => {
        var H = Y7(), j = K(H), V = D(K(j));
        {
          let Z = /* @__PURE__ */ N(() => c(s).contentType ? [c(s).contentType] : []);
          vt(V, {
            get items() {
              return vl;
            },
            style: "width: 100%",
            defaultValue: ["text"],
            get value() {
              return c(Z);
            },
            onSelect: h
          });
        }
        R(j);
        var z = D(j, 2), O = D(K(z));
        {
          let Z = /* @__PURE__ */ N(() => c(s).formType ? [c(s).formType] : []);
          vt(O, {
            get items() {
              return aw;
            },
            style: "width: 100%",
            defaultValue: ["input"],
            get value() {
              return c(Z);
            },
            onSelect: p
          });
        }
        R(z);
        var C = D(z, 2);
        {
          var S = (Z) => {
            var B = X7(), F = D(K(B));
            {
              let ne = /* @__PURE__ */ N(() => c(s).enums?.join(`
`));
              Xe(F, {
                rows: 3,
                style: "width: 100%;",
                onchange: (re) => {
                  l("enums", re.target?.value.trim().split(`
`));
                },
                get value() {
                  return c(ne);
                },
                placeholder: "一行一个选项"
              });
            }
            R(B), T(Z, B);
          };
          ie(C, (Z) => {
            (c(s).formType === "radio" || c(s).formType === "checkbox" || c(s).formType === "select") && Z(S);
          });
        }
        var E = D(C, 2), I = D(K(E));
        Xe(I, {
          rows: 1,
          style: "width: 100%;",
          onchange: (Z) => {
            u("formLabel", Z);
          },
          get value() {
            return c(s).formLabel;
          }
        }), R(E);
        var W = D(E, 2), q = D(K(W));
        Xe(q, {
          rows: 2,
          style: "width: 100%;",
          onchange: (Z) => {
            u("formDescription", Z);
          },
          get value() {
            return c(s).formDescription;
          }
        }), R(W);
        var M = D(W, 2), X = D(K(M));
        Xe(X, {
          rows: 2,
          style: "width: 100%;",
          onchange: (Z) => {
            u("formPlaceholder", Z);
          },
          get value() {
            return c(s).formPlaceholder;
          }
        }), R(M);
        var Q = D(M, 2), Y = K(Q);
        Te(Y, {
          variant: "destructive",
          onclick: w,
          children: (Z, B) => {
            ye();
            var F = Ee("删除");
            T(Z, F);
          },
          $$slots: { default: !0 }
        }), R(Q), R(H), T(L, H);
      },
      children: (L, H) => {
        Te(L, {
          size: "icon-xs",
          class: "input-btn-more",
          children: (j, V) => {
            var z = q7();
            T(j, z);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (L) => g = L,
    () => g
  ), R(P), T(e, b), ue(y);
}
se(Xp, { parameter: {}, index: {} }, [], [], !0);
var U7 = /* @__PURE__ */ ee('<div class="input-header svelte-1yp5n1k">参数名称</div> <div class="input-header svelte-1yp5n1k">必填</div> <div class="input-header svelte-1yp5n1k"></div>', 1), J7 = /* @__PURE__ */ ee('<div class="none-params svelte-1yp5n1k">无输入参数</div>'), Q7 = /* @__PURE__ */ ee('<div class="input-container svelte-1yp5n1k"><!> <!></div>');
const e5 = {
  hash: "svelte-1yp5n1k",
  code: `.input-container.svelte-1yp5n1k {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1yp5n1k .none-params:where(.svelte-1yp5n1k) {font-size:12px;background:var(--secondary);height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1yp5n1k .input-header:where(.svelte-1yp5n1k) {font-size:12px;color:var(--muted-foreground);}`
};
function Yp(e, t) {
  le(t, !0), Be(e, e5);
  let n = nt(), r = qn(n), o = /* @__PURE__ */ N(() => [...r?.current?.data?.parameters || []]);
  var i = Q7(), s = K(i);
  {
    var a = (u) => {
      var d = U7();
      ye(4), T(u, d);
    };
    ie(s, (u) => {
      c(o).length !== 0 && u(a);
    });
  }
  var l = D(s, 2);
  yt(
    l,
    19,
    () => c(o),
    (u) => u.id,
    (u, d, f) => {
      Xp(u, {
        get parameter() {
          return c(d);
        },
        get index() {
          return c(f);
        }
      });
    },
    (u) => {
      var d = J7();
      T(u, d);
    }
  ), R(i), T(e, i), ue();
}
se(Yp, {}, [], [], !0);
const Zo = (e) => (!e || e.length == 0 || e.forEach((t) => {
  t.id || (t.id = Zn()), Zo(t.children);
}), e), pn = () => {
  const { updateNodeData: e } = pt();
  return {
    addParameter: (t, n = "parameters", r) => {
      Array.isArray(r) ? r.forEach((s) => Zo(s?.children)) : Zo(r?.children);
      function o(s) {
        return {
          name: "",
          dataType: "String",
          refType: "ref",
          ...s,
          id: Zn()
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
var t5 = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), n5 = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), r5 = /* @__PURE__ */ ee('<div class="heading svelte-llt1qy"><!> <!></div> <!>', 1);
const o5 = {
  hash: "svelte-llt1qy",
  code: ".heading.svelte-llt1qy {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:var(--muted);border:1px solid transparent;}"
};
function qp(e, t) {
  le(t, !0), Be(e, o5);
  const n = m(t, "data", 7), r = /* @__PURE__ */ De(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = nt(), { addParameter: i } = pn();
  var s = {
    get data() {
      return n();
    },
    set data(a) {
      n(a), v();
    }
  };
  return Qt(e, Ke(() => r, {
    get data() {
      return n();
    },
    allowExecute: !1,
    showTargetHandle: !1,
    allowSettingOfCondition: !1,
    icon: (a) => {
      var l = t5();
      T(a, l);
    },
    children: (a, l) => {
      var u = r5(), d = te(u), f = K(d);
      Ve(f, {
        level: 3,
        children: (g, w) => {
          ye();
          var y = Ee("输入参数");
          T(g, y);
        },
        $$slots: { default: !0 }
      });
      var p = D(f, 2);
      Te(p, {
        size: "icon-xs",
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: () => {
          i(o, "parameters", { refType: "input", name: "newParam" });
        },
        children: (g, w) => {
          var y = n5();
          T(g, y);
        },
        $$slots: { default: !0 }
      }), R(d);
      var h = D(d, 2);
      Yp(h, {}), T(a, u);
    },
    $$slots: { icon: !0, default: !0 }
  })), ue(s);
}
se(qp, { data: {} }, [], [], !0);
const Fp = (e, t, n) => {
  for (const r of n)
    r.target === t && r.source && (e.push(r.source), Fp(e, r.source, n));
}, Gp = (e, t, n) => !e || e.length === 0 ? [] : e.map((r) => ({
  label: r.name + (n ? ` (Array<${r.dataType || "String"}>)` : ` (${r.dataType || "String"})`),
  value: t + "." + r.name,
  children: Gp(r.children, t + "." + r.name, n)
})), Qu = (e, t, n) => {
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
          children: Gp(r, e.id, t)
        };
    }
  }
}, Up = (e = !1) => {
  const t = nt(), n = qn(t), r = /* @__PURE__ */ N(fn), o = /* @__PURE__ */ N(() => c(r).nodes), i = /* @__PURE__ */ N(() => c(r).edges), s = /* @__PURE__ */ N(() => c(r).nodeLookup);
  let a = /* @__PURE__ */ N(() => {
    const l = [];
    if (!n.current)
      return [];
    const u = c(s).get(t);
    if (e)
      for (const d of c(o)) {
        const f = d.parentId === n.current.id;
        if (f) {
          const p = Qu(d, f, u);
          p && l.push(p);
        }
      }
    else {
      const d = [];
      Fp(d, t, c(i));
      for (const f of c(o))
        if (d.includes(f.id)) {
          const p = f.parentId === n.current.id, h = Qu(f, p, u);
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
var i5 = /* @__PURE__ */ ee('<div class="input-more-item svelte-jmeys3">数据内容： <!></div>'), s5 = /* @__PURE__ */ ee('<div class="input-more-setting svelte-jmeys3"><div class="input-more-item svelte-jmeys3">数据来源： <!></div> <!> <div class="input-more-item svelte-jmeys3">默认值： <!></div> <div class="input-more-item svelte-jmeys3">参数描述： <!></div> <div class="input-more-item svelte-jmeys3"><!></div></div>'), a5 = /* @__PURE__ */ ee('<div class="input-item svelte-jmeys3"><!></div> <div class="input-item svelte-jmeys3"><!></div> <div class="input-item svelte-jmeys3"><!></div>', 1);
const l5 = {
  hash: "svelte-jmeys3",
  code: ".input-item.svelte-jmeys3 {display:flex;align-items:center;}.input-more-setting.svelte-jmeys3 {display:flex;flex-direction:column;gap:10px;padding:10px;background:var(--background);border:1px solid var(--border);border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-jmeys3 .input-more-item:where(.svelte-jmeys3) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:var(--muted-foreground);}"
};
function Jp(e, t) {
  le(t, !0), Be(e, l5), En(() => {
    c(u).refType || g({ value: "ref" });
  });
  const n = m(t, "parameter", 7), r = m(t, "index", 7), o = m(t, "dataKeyName", 7), i = m(t, "useChildrenOnly", 7), s = m(t, "showContentType", 7, !1);
  let a = nt(), l = qn(a), u = /* @__PURE__ */ N(() => ({
    ...n(),
    ...l?.current?.data?.[o()][r()]
  }));
  const { updateNodeData: d } = pt(), f = (O, C) => {
    d(a, (S) => {
      let E = S.data?.[o()];
      return E[r()] = { ...E[r()], [O]: C }, { [o()]: E };
    });
  }, p = (O, C) => {
    const S = C.target.value;
    f(O, S);
  }, h = (O) => {
    const C = O.value;
    f("ref", C);
  }, g = (O) => {
    const C = O.value;
    f("refType", C);
  }, w = (O) => {
    const C = O.value;
    f("contentType", C);
  };
  let y;
  const b = () => {
    d(a, (O) => {
      let C = O.data?.[o()];
      return C.splice(r(), 1), { [o()]: [...C] };
    }), y?.hide();
  };
  let x = Up(i());
  var _ = {
    get parameter() {
      return n();
    },
    set parameter(O) {
      n(O), v();
    },
    get index() {
      return r();
    },
    set index(O) {
      r(O), v();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(O) {
      o(O), v();
    },
    get useChildrenOnly() {
      return i();
    },
    set useChildrenOnly(O) {
      i(O), v();
    },
    get showContentType() {
      return s();
    },
    set showContentType(O = !1) {
      s(O), v();
    }
  }, k = a5(), $ = te(k), P = K($);
  {
    let O = /* @__PURE__ */ N(() => c(u).nameDisabled === !0);
    ot(P, {
      style: "width: 100%;",
      get value() {
        return c(u).name;
      },
      placeholder: "请输入参数名称",
      get disabled() {
        return c(O);
      },
      oninput: (C) => p("name", C)
    });
  }
  R($);
  var A = D($, 2), L = K(A);
  {
    var H = (O) => {
      ot(O, {
        get value() {
          return c(u).value;
        },
        placeholder: "请输入参数值",
        oninput: (C) => p("value", C)
      });
    }, j = (O) => {
      var C = Ce(), S = te(C);
      {
        var E = (I) => {
          {
            let W = /* @__PURE__ */ N(() => [c(u).ref]);
            vt(I, {
              get items() {
                return x.current;
              },
              style: "width: 100%",
              defaultValue: ["ref"],
              get value() {
                return c(W);
              },
              expandAll: !0,
              onSelect: h
            });
          }
        };
        ie(
          S,
          (I) => {
            c(u).refType !== "input" && I(E);
          },
          !0
        );
      }
      T(O, C);
    };
    ie(L, (O) => {
      c(u).refType === "fixed" ? O(H) : O(j, !1);
    });
  }
  R(A);
  var V = D(A, 2), z = K(V);
  return ft(
    mr(z, {
      placement: "bottom",
      floating: (O) => {
        var C = s5(), S = K(C), E = D(K(S));
        {
          let B = /* @__PURE__ */ N(() => c(u).refType ? [c(u).refType] : []);
          vt(E, {
            get items() {
              return sw;
            },
            style: "width: 100%",
            defaultValue: ["ref"],
            get value() {
              return c(B);
            },
            onSelect: g
          });
        }
        R(S);
        var I = D(S, 2);
        {
          var W = (B) => {
            var F = i5(), ne = D(K(F));
            {
              let re = /* @__PURE__ */ N(() => c(u).contentType ? [c(u).contentType] : []);
              vt(ne, {
                get items() {
                  return vl;
                },
                style: "width: 100%",
                defaultValue: ["text"],
                get value() {
                  return c(re);
                },
                onSelect: w
              });
            }
            R(F), T(B, F);
          };
          ie(I, (B) => {
            s() && B(W);
          });
        }
        var q = D(I, 2), M = D(K(q));
        Xe(M, {
          rows: 1,
          style: "width: 100%;",
          onchange: (B) => {
            p("defaultValue", B);
          },
          get value() {
            return c(u).defaultValue;
          },
          placeholder: "请输入参数默认值"
        }), R(q);
        var X = D(q, 2), Q = D(K(X));
        Xe(Q, {
          rows: 3,
          style: "width: 100%;",
          onchange: (B) => {
            p("description", B);
          },
          get value() {
            return c(u).description;
          },
          placeholder: "请输入参数描述"
        }), R(X);
        var Y = D(X, 2), Z = K(Y);
        Te(Z, {
          variant: "destructive",
          onclick: b,
          children: (B, F) => {
            ye();
            var ne = Ee("删除");
            T(B, ne);
          },
          $$slots: { default: !0 }
        }), R(Y), R(C), T(O, C);
      },
      children: (O, C) => {
        ai(O, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (O) => y = O,
    () => y
  ), R(V), T(e, k), ue(_);
}
se(
  Jp,
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
var u5 = /* @__PURE__ */ ee('<div class="input-header svelte-32f1pk">参数名称</div> <div class="input-header svelte-32f1pk">参数值</div> <div class="input-header svelte-32f1pk"></div>', 1), c5 = /* @__PURE__ */ ee('<div class="none-params svelte-32f1pk"> </div>'), d5 = /* @__PURE__ */ ee('<div class="input-container svelte-32f1pk"><!> <!></div>');
const f5 = {
  hash: "svelte-32f1pk",
  code: `.input-container.svelte-32f1pk {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-32f1pk .none-params:where(.svelte-32f1pk) {font-size:12px;background:var(--secondary);height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-32f1pk .input-header:where(.svelte-32f1pk) {font-size:12px;color:var(--muted-foreground);}`
};
function Mt(e, t) {
  le(t, !0), Be(e, f5);
  const n = m(t, "noneParameterText", 7, "无输入参数"), r = m(t, "dataKeyName", 7, "parameters"), o = m(t, "useChildrenOnly", 7), i = m(t, "showContentType", 7, !1);
  let s = nt(), a = qn(s), l = /* @__PURE__ */ N(() => [...a?.current?.data?.[r()] || []]);
  var u = {
    get noneParameterText() {
      return n();
    },
    set noneParameterText(g = "无输入参数") {
      n(g), v();
    },
    get dataKeyName() {
      return r();
    },
    set dataKeyName(g = "parameters") {
      r(g), v();
    },
    get useChildrenOnly() {
      return o();
    },
    set useChildrenOnly(g) {
      o(g), v();
    },
    get showContentType() {
      return i();
    },
    set showContentType(g = !1) {
      i(g), v();
    }
  }, d = d5(), f = K(d);
  {
    var p = (g) => {
      var w = u5();
      ye(4), T(g, w);
    };
    ie(f, (g) => {
      c(l).length !== 0 && g(p);
    });
  }
  var h = D(f, 2);
  return yt(
    h,
    19,
    () => c(l),
    (g) => g.id,
    (g, w, y) => {
      Jp(g, {
        get parameter() {
          return c(w);
        },
        get index() {
          return c(y);
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
    (g) => {
      var w = c5(), y = K(w, !0);
      R(w), Se(() => qe(y, n())), T(g, w);
    }
  ), R(d), T(e, d), ue(u);
}
se(
  Mt,
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
var p5 = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), h5 = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), g5 = /* @__PURE__ */ ee('<div class="heading svelte-1fiuxu3"><!> <!></div> <!>', 1);
const v5 = {
  hash: "svelte-1fiuxu3",
  code: ".heading.svelte-1fiuxu3 {display:flex;margin-bottom:10px;}"
};
function Qp(e, t) {
  le(t, !0), Be(e, v5);
  const n = m(t, "data", 7), r = /* @__PURE__ */ De(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = nt(), { addParameter: i } = pn();
  var s = {
    get data() {
      return n();
    },
    set data(a) {
      n(a), v();
    }
  };
  return Qt(e, Ke(
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
        var l = p5();
        T(a, l);
      },
      children: (a, l) => {
        var u = g5(), d = te(u), f = K(d);
        Ve(f, {
          level: 3,
          children: (g, w) => {
            ye();
            var y = Ee("输出参数");
            T(g, y);
          },
          $$slots: { default: !0 }
        });
        var p = D(f, 2);
        Te(p, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs", { name: "output" });
          },
          children: (g, w) => {
            var y = h5();
            T(g, y);
          },
          $$slots: { default: !0 }
        }), R(d);
        var h = D(d, 2);
        Mt(h, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs",
          showContentType: !0
        }), T(a, u);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(s);
}
se(Qp, { data: {} }, [], [], !0);
const Gs = (e) => JSON.parse(JSON.stringify(e));
var m5 = /* @__PURE__ */ me('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), y5 = /* @__PURE__ */ ee('<div class="input-more-item svelte-hwmib9"><!></div>'), w5 = /* @__PURE__ */ ee('<div class="input-more-setting svelte-hwmib9"><div class="input-more-item svelte-hwmib9">默认值： <!></div> <div class="input-more-item svelte-hwmib9">参数描述： <!></div> <!></div>'), b5 = /* @__PURE__ */ ee('<div class="input-item svelte-hwmib9"><!> <!></div> <div class="input-item svelte-hwmib9"><!> <!></div> <div class="input-item svelte-hwmib9"><!></div>', 1);
const x5 = {
  hash: "svelte-hwmib9",
  code: ".input-item.svelte-hwmib9 {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-hwmib9 {display:flex;flex-direction:column;gap:10px;padding:10px;background:var(--background);border:1px solid var(--border);border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-hwmib9 .input-more-item:where(.svelte-hwmib9) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:var(--muted-foreground);}"
};
function eh(e, t) {
  le(t, !0), Be(e, x5);
  const n = m(t, "parameter", 7), r = m(t, "position", 7), o = m(t, "dataKeyName", 7), i = m(t, "placeholder", 7, "请输入参数值");
  let s = nt(), a = qn(s), l = /* @__PURE__ */ N(() => {
    let z = a?.current?.data?.[o()], O;
    if (z && r().length > 0) {
      let C = z;
      for (let S = 0; S < r().length; S++) {
        const E = r()[S];
        S == r().length - 1 ? O = C[E] : C = C[E].children;
      }
    }
    return { ...n(), ...O };
  });
  const { updateNodeData: u } = pt(), d = (z, O) => {
    u(s, (C) => {
      const S = C.data?.[o()];
      if (S && r().length > 0) {
        let E = S;
        for (let I = 0; I < r().length; I++) {
          const W = r()[I];
          I == r().length - 1 ? E[W] = { ...E[W], [z]: O } : E = E[W].children;
        }
      }
      return { [o()]: [...Gs(S)] };
    });
  }, f = (z, O) => {
    const C = O.target.value;
    d(z, C);
  }, p = (z) => {
    const O = z.value;
    d("dataType", O);
  };
  let h;
  const g = () => {
    u(s, (z) => {
      let O = z.data?.[o()];
      if (O && r().length > 0) {
        let C = O;
        for (let S = 0; S < r().length; S++) {
          const E = r()[S];
          S == r().length - 1 ? C.splice(E, 1) : C = C[E].children;
        }
      }
      return { [o()]: [...Gs(O)] };
    }), h?.hide();
  }, w = () => {
    u(s, (z) => {
      let O = z.data?.[o()];
      if (O && r().length > 0) {
        let C = O;
        for (let S = 0; S < r().length; S++) {
          const E = r()[S];
          S == r().length - 1 ? C[E].children ? C[E].children.push({ id: Zn(), name: "newParam", dataType: "String" }) : C[E].children = [{ id: Zn(), name: "newParam", dataType: "String" }] : C = C[E].children;
        }
      }
      return { [o()]: [...Gs(O)] };
    });
  };
  var y = {
    get parameter() {
      return n();
    },
    set parameter(z) {
      n(z), v();
    },
    get position() {
      return r();
    },
    set position(z) {
      r(z), v();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(z) {
      o(z), v();
    },
    get placeholder() {
      return i();
    },
    set placeholder(z = "请输入参数值") {
      i(z), v();
    }
  }, b = b5(), x = te(b), _ = K(x);
  {
    var k = (z) => {
      var O = Ce(), C = te(O);
      yt(C, 17, r, Or, (S, E) => {
        ye();
        var I = Ee(" ");
        T(S, I);
      }), T(z, O);
    };
    ie(_, (z) => {
      r().length > 1 && z(k);
    });
  }
  var $ = D(_, 2);
  {
    let z = /* @__PURE__ */ N(() => c(l).nameDisabled === !0);
    ot($, {
      style: "width: 100%;",
      get value() {
        return c(l).name;
      },
      get placeholder() {
        return i();
      },
      oninput: (O) => {
        f("name", O);
      },
      get disabled() {
        return c(z);
      }
    });
  }
  R(x);
  var P = D(x, 2), A = K(P);
  {
    let z = /* @__PURE__ */ N(() => c(l).dataTypeItems || iw), O = /* @__PURE__ */ N(() => c(l).dataType ? [c(l).dataType] : []), C = /* @__PURE__ */ N(() => c(l).dataTypeDisabled === !0);
    vt(A, {
      get items() {
        return c(z);
      },
      style: "width: 100%",
      defaultValue: ["String"],
      get value() {
        return c(O);
      },
      get disabled() {
        return c(C);
      },
      onSelect: p
    });
  }
  var L = D(A, 2);
  {
    var H = (z) => {
      Te(z, {
        size: "icon-xs",
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: w,
        children: (O, C) => {
          var S = m5();
          T(O, S);
        },
        $$slots: { default: !0 }
      });
    };
    ie(L, (z) => {
      (c(l).dataType === "Object" || c(l).dataType === "Array") && c(l).addChildDisabled !== !0 && z(H);
    });
  }
  R(P);
  var j = D(P, 2), V = K(j);
  return ft(
    mr(V, {
      placement: "bottom",
      floating: (z) => {
        var O = w5(), C = K(O), S = D(K(C));
        {
          let M = /* @__PURE__ */ N(() => c(l).defaultValue || "");
          Xe(S, {
            rows: 1,
            style: "width: 100%;",
            get value() {
              return c(M);
            },
            onchange: (X) => {
              f("defaultValue", X);
            }
          });
        }
        R(C);
        var E = D(C, 2), I = D(K(E));
        {
          let M = /* @__PURE__ */ N(() => c(l).description || "");
          Xe(I, {
            rows: 3,
            style: "width: 100%;",
            get value() {
              return c(M);
            },
            onchange: (X) => {
              f("description", X);
            }
          });
        }
        R(E);
        var W = D(E, 2);
        {
          var q = (M) => {
            var X = y5(), Q = K(X);
            Te(Q, {
              variant: "destructive",
              onclick: g,
              children: (Y, Z) => {
                ye();
                var B = Ee("删除");
                T(Y, B);
              },
              $$slots: { default: !0 }
            }), R(X), T(M, X);
          };
          ie(W, (M) => {
            c(l).deleteDisabled !== !0 && M(q);
          });
        }
        R(O), T(z, O);
      },
      children: (z, O) => {
        ai(z, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (z) => h = z,
    () => h
  ), R(j), T(e, b), ue(y);
}
se(
  eh,
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
var k5 = /* @__PURE__ */ ee("<!> <!>", 1), C5 = /* @__PURE__ */ ee('<div class="none-params svelte-1oz5kx0"> </div>'), $5 = /* @__PURE__ */ ee('<div class="input-header svelte-1oz5kx0">参数名称</div> <div class="input-header svelte-1oz5kx0">参数类型</div> <div class="input-header svelte-1oz5kx0"></div>', 1), _5 = /* @__PURE__ */ ee('<div class="input-container svelte-1oz5kx0"><!> <!></div>');
const S5 = {
  hash: "svelte-1oz5kx0",
  code: `.input-container.svelte-1oz5kx0 {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1oz5kx0 .none-params:where(.svelte-1oz5kx0) {font-size:12px;background:var(--secondary);height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1oz5kx0 .input-header:where(.svelte-1oz5kx0) {font-size:12px;color:var(--muted-foreground);}`
};
function Gn(e, t) {
  le(t, !0), Be(e, S5);
  const n = (g, w = tt, y = tt) => {
    var b = Ce(), x = te(b);
    yt(
      x,
      19,
      w,
      (_) => `${_.id}_${_.children ? _.children.length : 0}`,
      (_, k, $) => {
        var P = k5(), A = te(P);
        {
          let j = /* @__PURE__ */ N(() => [...y(), c($)]);
          eh(A, {
            get parameter() {
              return c(k);
            },
            get position() {
              return c(j);
            },
            get dataKeyName() {
              return o();
            },
            get placeholder() {
              return i();
            }
          });
        }
        var L = D(A, 2);
        {
          var H = (j) => {
            {
              let V = /* @__PURE__ */ N(() => [...y(), c($)]);
              n(j, () => c(k).children, () => c(V));
            }
          };
          ie(L, (j) => {
            c(k).children && j(H);
          });
        }
        T(_, P);
      },
      (_) => {
        var k = Ce(), $ = te(k);
        {
          var P = (A) => {
            var L = C5(), H = K(L, !0);
            R(L), Se(() => qe(H, r())), T(A, L);
          };
          ie($, (A) => {
            y().length === 0 && A(P);
          });
        }
        T(_, k);
      }
    ), T(g, b);
  }, r = m(t, "noneParameterText", 7, "无输出参数"), o = m(t, "dataKeyName", 7, "outputDefs"), i = m(t, "placeholder", 7, "请输入参数名称");
  let s = nt(), a = qn(s), l = /* @__PURE__ */ N(() => [...a?.current?.data?.[o()] || []]);
  var u = {
    get noneParameterText() {
      return r();
    },
    set noneParameterText(g = "无输出参数") {
      r(g), v();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(g = "outputDefs") {
      o(g), v();
    },
    get placeholder() {
      return i();
    },
    set placeholder(g = "请输入参数名称") {
      i(g), v();
    }
  }, d = _5(), f = K(d);
  {
    var p = (g) => {
      var w = $5();
      ye(4), T(g, w);
    };
    ie(f, (g) => {
      c(l).length !== 0 && g(p);
    });
  }
  var h = D(f, 2);
  return n(h, () => c(l) || [], () => []), R(d), T(e, d), ue(u);
}
se(Gn, { noneParameterText: {}, dataKeyName: {}, placeholder: {} }, [], [], !0);
var E5 = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), N5 = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), z5 = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), M5 = /* @__PURE__ */ ee('<div class="llm-setting svelte-j81vcl"><div class="setting-title svelte-j81vcl">采样参数</div> <div class="setting-item svelte-j81vcl"><div class="slider-container svelte-j81vcl"><span class="svelte-j81vcl"> </span> <input class="nodrag svelte-j81vcl" type="range" min="0" max="1" step="0.1"/></div></div> <div class="setting-item svelte-j81vcl"><div class="slider-container svelte-j81vcl"><span class="svelte-j81vcl"> </span> <input class="nodrag svelte-j81vcl" type="range" min="0" max="1" step="0.1"/></div></div> <div class="setting-item svelte-j81vcl"><div class="slider-container svelte-j81vcl"><span class="svelte-j81vcl"> </span> <input class="nodrag svelte-j81vcl" type="range" min="0" max="100" step="1"/></div></div></div>'), P5 = /* @__PURE__ */ ee('<div class="setting-title svelte-j81vcl">JSON Schema</div> <div class="setting-item svelte-j81vcl"><!></div>', 1), O5 = /* @__PURE__ */ ee('<div class="heading svelte-j81vcl"><!> <!></div> <!> <div class="heading svelte-j81vcl" style="padding-top: 10px"><!> <!></div> <!> <!> <div class="setting-title svelte-j81vcl">模型</div> <div class="setting-item svelte-j81vcl"><!> <!></div> <div class="setting-title svelte-j81vcl">系统提示词</div> <div class="setting-item svelte-j81vcl"><!></div> <div class="setting-title svelte-j81vcl">用户提示词</div> <div class="setting-item svelte-j81vcl"><!></div> <!> <div class="heading svelte-j81vcl"><!> <!></div> <!>', 1);
const T5 = {
  hash: "svelte-j81vcl",
  code: `.heading.svelte-j81vcl {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-j81vcl {font-size:12px;color:var(--secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-j81vcl {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}\r
\r
    /* 新增样式 */.slider-container.svelte-j81vcl {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-j81vcl span:where(.svelte-j81vcl) {font-size:12px;color:var(--muted-foreground);display:flex;justify-content:space-between;align-items:center;}.llm-setting.svelte-j81vcl {width:200px;background:var(--background);padding:10px;border-radius:5px;box-shadow:0 0 10px rgba(0, 0, 0, 0.1);border:1px solid var(--border);}input[type='range'].svelte-j81vcl {width:100%;height:4px;background:var(--muted);border-radius:2px;outline:none;-webkit-appearance:none;}input[type='range'].svelte-j81vcl::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:var(--primary);border-radius:50%;cursor:pointer;}`
};
function th(e, t) {
  le(t, !0), Be(e, T5);
  const n = m(t, "data", 7), r = /* @__PURE__ */ De(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = nt(), { addParameter: i } = pn(), s = dr();
  let a = /* @__PURE__ */ Ne($t([]));
  En(async () => {
    const f = await s.provider?.llm?.();
    c(a).push(...f || []);
  });
  const { updateNodeData: l } = pt(), u = (f) => {
    l(o, () => ({ outType: f })), f === "text" ? l(o, {
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
  Ue(() => {
    n().outType || u("text");
  });
  var d = {
    get data() {
      return n();
    },
    set data(f) {
      n(f), v();
    }
  };
  return Qt(e, Ke(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (f) => {
        var p = E5();
        T(f, p);
      },
      children: (f, p) => {
        var h = O5(), g = te(h), w = K(g);
        Ve(w, {
          level: 3,
          children: (M, X) => {
            ye();
            var Q = Ee("输入参数");
            T(M, Q);
          },
          $$slots: { default: !0 }
        });
        var y = D(w, 2);
        Te(y, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (M, X) => {
            var Q = N5();
            T(M, Q);
          },
          $$slots: { default: !0 }
        }), R(g);
        var b = D(g, 2);
        Mt(b, {});
        var x = D(b, 2), _ = K(x);
        Ve(_, {
          level: 3,
          children: (M, X) => {
            ye();
            var Q = Ee("图片识别");
            T(M, Q);
          },
          $$slots: { default: !0 }
        });
        var k = D(_, 2);
        Te(k, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "images");
          },
          children: (M, X) => {
            var Q = z5();
            T(M, Q);
          },
          $$slots: { default: !0 }
        }), R(x);
        var $ = D(x, 2);
        Mt($, { dataKeyName: "images", noneParameterText: "无图片参数" });
        var P = D($, 2);
        Ve(P, {
          level: 3,
          mt: "10px",
          children: (M, X) => {
            ye();
            var Q = Ee("模型设置");
            T(M, Q);
          },
          $$slots: { default: !0 }
        });
        var A = D(P, 4), L = K(A);
        {
          let M = /* @__PURE__ */ N(() => n().llmId ? [n().llmId] : []);
          vt(L, {
            get items() {
              return c(a);
            },
            style: "width: 100%",
            placeholder: "请选择模型",
            onSelect: (X) => {
              const Q = X.value;
              l(o, () => ({ llmId: Q }));
            },
            get value() {
              return c(M);
            }
          });
        }
        var H = D(L, 2);
        mr(H, {
          placement: "bottom",
          floating: (M) => {
            var X = M5(), Q = D(K(X), 2), Y = K(Q), Z = K(Y), B = K(Z);
            R(Z);
            var F = D(Z, 2);
            ar(F), F.__input = (de) => l(o, { temperature: parseFloat(de.target.value) }), R(Y), R(Q);
            var ne = D(Q, 2), re = K(ne), J = K(re), he = K(J);
            R(J);
            var ce = D(J, 2);
            ar(ce), ce.__input = (de) => l(o, { topP: parseFloat(de.target.value) }), R(re), R(ne);
            var oe = D(ne, 2), ae = K(oe), pe = K(ae), be = K(pe);
            R(pe);
            var ke = D(pe, 2);
            ar(ke), ke.__input = (de) => l(o, { topK: parseInt(de.target.value) }), R(ae), R(oe), R(X), Se(() => {
              qe(B, `Temperature: ${n().temperature ?? 0.5 ?? ""}`), _i(F, n().temperature ?? 0.5), qe(he, `Top P: ${n().topP ?? 0.9 ?? ""}`), _i(ce, n().topP ?? 0.9), qe(be, `Top K: ${n().topK ?? 50 ?? ""}`), _i(ke, n().topK ?? 50);
            }), T(M, X);
          },
          children: (M, X) => {
            ai(M, {});
          },
          $$slots: { floating: !0, default: !0 }
        }), R(A);
        var j = D(A, 4), V = K(j);
        {
          let M = /* @__PURE__ */ N(() => n().systemPrompt || "");
          Xe(V, {
            rows: 5,
            placeholder: "请输入系统提示词",
            style: "width: 100%",
            get value() {
              return c(M);
            },
            oninput: (X) => {
              l(o, { systemPrompt: X.target.value });
            }
          });
        }
        R(j);
        var z = D(j, 4), O = K(z);
        {
          let M = /* @__PURE__ */ N(() => n().userPrompt || "");
          Xe(O, {
            rows: 5,
            placeholder: "请输入用户提示词",
            style: "width: 100%",
            get value() {
              return c(M);
            },
            oninput: (X) => {
              l(o, { userPrompt: X.target.value });
            }
          });
        }
        R(z);
        var C = D(z, 2);
        {
          var S = (M) => {
            var X = P5(), Q = D(te(X), 2), Y = K(Q);
            {
              let Z = /* @__PURE__ */ N(() => n().jsonSchema || "");
              Xe(Y, {
                rows: 5,
                placeholder: "请输入 SON Schema",
                style: "width: 100%",
                get value() {
                  return c(Z);
                },
                oninput: (B) => {
                  l(o, { jsonSchema: B.target.value });
                }
              });
            }
            R(Q), T(M, X);
          };
          ie(C, (M) => {
            n().outType === "json" && M(S);
          });
        }
        var E = D(C, 2), I = K(E);
        Ve(I, {
          level: 3,
          children: (M, X) => {
            ye();
            var Q = Ee("输出参数");
            T(M, Q);
          },
          $$slots: { default: !0 }
        });
        var W = D(I, 2);
        {
          let M = /* @__PURE__ */ N(() => n().outType ? [n().outType] : []);
          vt(W, {
            items: [
              { label: "文本", value: "text" },
              { label: "JSON", value: "json" }
            ],
            style: "width: 100px;margin-left: auto",
            onSelect: (X) => {
              u(X.value);
            },
            get value() {
              return c(M);
            }
          });
        }
        R(E);
        var q = D(E, 2);
        Gn(q, {}), T(f, h);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(d);
}
hr(["input"]);
se(th, { data: {} }, [], [], !0);
var V5 = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), A5 = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), L5 = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), D5 = /* @__PURE__ */ ee('<div class="heading svelte-1wcsayx"><!> <!></div> <!> <!> <div class="setting-title svelte-1wcsayx">执行引擎</div> <div class="setting-item svelte-1wcsayx"><!></div> <div class="setting-title svelte-1wcsayx">执行代码</div> <div class="setting-item svelte-1wcsayx"><!></div> <div class="heading svelte-1wcsayx"><!> <!></div> <!>', 1);
const H5 = {
  hash: "svelte-1wcsayx",
  code: ".heading.svelte-1wcsayx {display:flex;margin-bottom:10px;}.setting-title.svelte-1wcsayx {font-size:12px;color:var(--secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-1wcsayx {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function nh(e, t) {
  le(t, !0), Be(e, H5);
  const n = m(t, "data", 7), r = /* @__PURE__ */ De(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]);
  En(() => {
    n().engine || s(o, () => ({ engine: "qlexpress" }));
  });
  const o = nt(), { addParameter: i } = pn(), { updateNodeData: s } = pt(), a = [
    { label: "JavaScript", value: "js" },
    { label: "Groovy", value: "groovy" },
    { label: "QLExpress", value: "qlexpress" }
  ];
  var l = {
    get data() {
      return n();
    },
    set data(u) {
      n(u), v();
    }
  };
  return Qt(e, Ke(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var d = V5();
        T(u, d);
      },
      children: (u, d) => {
        var f = D5(), p = te(f), h = K(p);
        Ve(h, {
          level: 3,
          children: (H, j) => {
            ye();
            var V = Ee("输入参数");
            T(H, V);
          },
          $$slots: { default: !0 }
        });
        var g = D(h, 2);
        Te(g, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (H, j) => {
            var V = A5();
            T(H, V);
          },
          $$slots: { default: !0 }
        }), R(p);
        var w = D(p, 2);
        Mt(w, {});
        var y = D(w, 2);
        Ve(y, {
          level: 3,
          mt: "10px",
          children: (H, j) => {
            ye();
            var V = Ee("代码");
            T(H, V);
          },
          $$slots: { default: !0 }
        });
        var b = D(y, 4), x = K(b);
        {
          let H = /* @__PURE__ */ N(() => n().engine ? [n().engine] : ["qlexpress"]);
          vt(x, {
            get items() {
              return a;
            },
            style: "width: 100%",
            placeholder: "请选择执行引擎",
            onSelect: (j) => {
              const V = j.value;
              s(o, () => ({ engine: V }));
            },
            get value() {
              return c(H);
            }
          });
        }
        R(b);
        var _ = D(b, 4), k = K(_);
        {
          let H = /* @__PURE__ */ N(() => n().code || "");
          Xe(k, {
            rows: 10,
            placeholder: "请输入执行代码，注：输出内容需添加到_result中，如：_result['key'] = value 或者 _result.key = value",
            style: "width: 100%",
            onchange: (j) => {
              s(o, () => ({ code: j.target.value }));
            },
            get value() {
              return c(H);
            }
          });
        }
        R(_);
        var $ = D(_, 2), P = K($);
        Ve(P, {
          level: 3,
          mt: "10px",
          children: (H, j) => {
            ye();
            var V = Ee("输出参数");
            T(H, V);
          },
          $$slots: { default: !0 }
        });
        var A = D(P, 2);
        Te(A, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (H, j) => {
            var V = L5();
            T(H, V);
          },
          $$slots: { default: !0 }
        }), R($);
        var L = D($, 2);
        Gn(L, {}), T(u, f);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(l);
}
se(nh, { data: {} }, [], [], !0);
var I5 = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>'), j5 = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), R5 = /* @__PURE__ */ ee('<div class="heading svelte-1lcrzpc"><!> <!></div> <!> <!> <div class="setting-item svelte-1lcrzpc"><!></div> <div class="heading svelte-1lcrzpc"><!></div> <!>', 1);
const Z5 = {
  hash: "svelte-1lcrzpc",
  code: ".heading.svelte-1lcrzpc {display:flex;margin-bottom:10px;}.setting-item.svelte-1lcrzpc {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function rh(e, t) {
  le(t, !0), Be(e, Z5);
  const n = m(t, "data", 7), r = /* @__PURE__ */ De(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = nt(), { addParameter: i } = pn(), { updateNodeData: s } = pt();
  Ue(() => {
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
      n(l), v();
    }
  };
  return Qt(e, Ke(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = I5();
        T(l, u);
      },
      children: (l, u) => {
        var d = R5(), f = te(d), p = K(f);
        Ve(p, {
          level: 3,
          children: ($, P) => {
            ye();
            var A = Ee("输入参数");
            T($, A);
          },
          $$slots: { default: !0 }
        });
        var h = D(p, 2);
        Te(h, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: ($, P) => {
            var A = j5();
            T($, A);
          },
          $$slots: { default: !0 }
        }), R(f);
        var g = D(f, 2);
        Mt(g, {});
        var w = D(g, 2);
        Ve(w, {
          level: 3,
          mt: "10px",
          mb: "10px",
          children: ($, P) => {
            ye();
            var A = Ee("模板内容");
            T($, A);
          },
          $$slots: { default: !0 }
        });
        var y = D(w, 2), b = K(y);
        {
          let $ = /* @__PURE__ */ N(() => n().template || "");
          Xe(b, {
            rows: 10,
            placeholder: "请输入模板内容",
            style: "width: 100%",
            onchange: (P) => {
              s(o, () => ({ template: P.target.value }));
            },
            get value() {
              return c($);
            }
          });
        }
        R(y);
        var x = D(y, 2), _ = K(x);
        Ve(_, {
          level: 3,
          mt: "10px",
          children: ($, P) => {
            ye();
            var A = Ee("输出参数");
            T($, A);
          },
          $$slots: { default: !0 }
        }), R(x);
        var k = D(x, 2);
        Gn(k, {}), T(l, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(a);
}
se(rh, { data: {} }, [], [], !0);
var K5 = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), B5 = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), W5 = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), X5 = /* @__PURE__ */ ee('<!> <div class="radio-group svelte-19uflw6"><label class="svelte-19uflw6"><!>none</label> <label class="svelte-19uflw6"><!>form-data</label> <label class="svelte-19uflw6"><!>x-www-form-urlencoded</label> <label class="svelte-19uflw6"><!>json</label> <label class="svelte-19uflw6"><!>raw</label></div>', 1), Y5 = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), q5 = /* @__PURE__ */ ee('<div class="heading svelte-19uflw6" style="padding-top: 10px"><!> <!></div> <!>', 1), F5 = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), G5 = /* @__PURE__ */ ee('<div class="heading svelte-19uflw6" style="padding-top: 10px"><!> <!></div> <!>', 1), U5 = /* @__PURE__ */ ee('<div style="width: 100%"><!></div>'), J5 = /* @__PURE__ */ ee('<div style="width: 100%"><!></div>'), Q5 = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), e3 = /* @__PURE__ */ ee('<div class="heading svelte-19uflw6"><!> <!></div> <!> <!> <div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-19uflw6"><!> <!></div> <!> <!> <!> <!> <!> <!> <div class="heading svelte-19uflw6"><!> <!></div> <!>', 1);
const t3 = {
  hash: "svelte-19uflw6",
  code: ".heading.svelte-19uflw6 {display:flex;margin-bottom:10px;}.radio-group.svelte-19uflw6 {display:flex;margin:10px 0;flex-wrap:wrap;}.radio-group.svelte-19uflw6 label:where(.svelte-19uflw6) {display:flex;font-size:14px;box-sizing:border-box;}"
};
function oh(e, t) {
  le(t, !0), Be(e, t3);
  const n = m(t, "data", 7), r = /* @__PURE__ */ De(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]);
  En(() => {
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
  ], i = nt(), { addParameter: s } = pn(), { updateNodeData: a } = pt();
  var l = {
    get data() {
      return n();
    },
    set data(u) {
      n(u), v();
    }
  };
  return Qt(e, Ke(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var d = K5();
        T(u, d);
      },
      children: (u, d) => {
        var f = e3(), p = te(f), h = K(p);
        Ve(h, {
          level: 3,
          children: (Z, B) => {
            ye();
            var F = Ee("输入参数");
            T(Z, F);
          },
          $$slots: { default: !0 }
        });
        var g = D(h, 2);
        Te(g, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i);
          },
          children: (Z, B) => {
            var F = B5();
            T(Z, F);
          },
          $$slots: { default: !0 }
        }), R(p);
        var w = D(p, 2);
        Mt(w, {});
        var y = D(w, 2);
        Ve(y, {
          level: 3,
          mt: "10px",
          children: (Z, B) => {
            ye();
            var F = Ee("URL 地址");
            T(Z, F);
          },
          $$slots: { default: !0 }
        });
        var b = D(y, 2), x = K(b), _ = K(x);
        {
          let Z = /* @__PURE__ */ N(() => n().method ? [n().method] : ["get"]);
          vt(_, {
            get items() {
              return o;
            },
            style: "width: 100%",
            placeholder: "请选择请求方式",
            onSelect: (B) => {
              const F = B.value;
              a(i, () => ({ method: F }));
            },
            get value() {
              return c(Z);
            }
          });
        }
        R(x);
        var k = D(x, 2), $ = K(k);
        {
          let Z = /* @__PURE__ */ N(() => n().url || "");
          ot($, {
            placeholder: "请输入url",
            style: "width: 100%",
            onchange: (B) => {
              a(i, () => ({ url: B.target.value }));
            },
            get value() {
              return c(Z);
            }
          });
        }
        R(k), R(b);
        var P = D(b, 2), A = K(P);
        Ve(A, {
          level: 3,
          children: (Z, B) => {
            ye();
            var F = Ee("Http 头信息");
            T(Z, F);
          },
          $$slots: { default: !0 }
        });
        var L = D(A, 2);
        Te(L, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "headers");
          },
          children: (Z, B) => {
            var F = W5();
            T(Z, F);
          },
          $$slots: { default: !0 }
        }), R(P);
        var H = D(P, 2);
        Mt(H, { dataKeyName: "headers" });
        var j = D(H, 2);
        {
          var V = (Z) => {
            var B = X5(), F = te(B);
            Ve(F, {
              level: 3,
              mt: "10px",
              children: (_e, Ie) => {
                ye();
                var G = Ee("Body");
                T(_e, G);
              },
              $$slots: { default: !0 }
            });
            var ne = D(F, 2), re = K(ne), J = K(re);
            {
              let _e = /* @__PURE__ */ N(() => !n().bodyType || n().bodyType === "");
              ot(J, {
                type: "radio",
                value: "",
                get checked() {
                  return c(_e);
                },
                onchange: (Ie) => {
                  Ie.target?.checked && a(i, { bodyType: "" });
                }
              });
            }
            ye(), R(re);
            var he = D(re, 2), ce = K(he);
            {
              let _e = /* @__PURE__ */ N(() => n().bodyType === "form-data");
              ot(ce, {
                type: "radio",
                value: "form-data",
                get checked() {
                  return c(_e);
                },
                onchange: (Ie) => {
                  Ie.target?.checked && a(i, { bodyType: "form-data" });
                }
              });
            }
            ye(), R(he);
            var oe = D(he, 2), ae = K(oe);
            {
              let _e = /* @__PURE__ */ N(() => n().bodyType === "x-www-form-urlencoded");
              ot(ae, {
                type: "radio",
                value: "x-www-form-urlencoded",
                get checked() {
                  return c(_e);
                },
                onchange: (Ie) => {
                  Ie.target?.checked && a(i, { bodyType: "x-www-form-urlencoded" });
                }
              });
            }
            ye(), R(oe);
            var pe = D(oe, 2), be = K(pe);
            {
              let _e = /* @__PURE__ */ N(() => n().bodyType === "json");
              ot(be, {
                type: "radio",
                value: "json",
                get checked() {
                  return c(_e);
                },
                onchange: (Ie) => {
                  Ie.target?.checked && a(i, { bodyType: "json" });
                }
              });
            }
            ye(), R(pe);
            var ke = D(pe, 2), de = K(ke);
            {
              let _e = /* @__PURE__ */ N(() => n().bodyType === "raw");
              ot(de, {
                type: "radio",
                value: "raw",
                get checked() {
                  return c(_e);
                },
                onchange: (Ie) => {
                  Ie.target?.checked && a(i, { bodyType: "raw" });
                }
              });
            }
            ye(), R(ke), R(ne), T(Z, B);
          };
          ie(j, (Z) => {
            (n().method === "post" || n().method === "put" || n().method === "delete" || n().method === "patch") && Z(V);
          });
        }
        var z = D(j, 2);
        {
          var O = (Z) => {
            var B = q5(), F = te(B), ne = K(F);
            Ve(ne, {
              level: 3,
              children: (he, ce) => {
                ye();
                var oe = Ee("参数");
                T(he, oe);
              },
              $$slots: { default: !0 }
            });
            var re = D(ne, 2);
            Te(re, {
              size: "icon-xs",
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formData");
              },
              children: (he, ce) => {
                var oe = Y5();
                T(he, oe);
              },
              $$slots: { default: !0 }
            }), R(F);
            var J = D(F, 2);
            Mt(J, { dataKeyName: "formData" }), T(Z, B);
          };
          ie(z, (Z) => {
            n().bodyType === "form-data" && Z(O);
          });
        }
        var C = D(z, 2);
        {
          var S = (Z) => {
            var B = G5(), F = te(B), ne = K(F);
            Ve(ne, {
              level: 3,
              children: (he, ce) => {
                ye();
                var oe = Ee("Body 参数");
                T(he, oe);
              },
              $$slots: { default: !0 }
            });
            var re = D(ne, 2);
            Te(re, {
              size: "icon-xs",
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formUrlencoded");
              },
              children: (he, ce) => {
                var oe = F5();
                T(he, oe);
              },
              $$slots: { default: !0 }
            }), R(F);
            var J = D(F, 2);
            Mt(J, { dataKeyName: "formUrlencoded" }), T(Z, B);
          };
          ie(C, (Z) => {
            n().bodyType === "x-www-form-urlencoded" && Z(S);
          });
        }
        var E = D(C, 2);
        {
          var I = (Z) => {
            var B = U5(), F = K(B);
            Xe(F, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入 json 信息",
              get value() {
                return n().bodyJson;
              },
              oninput: (ne) => {
                a(i, { bodyJson: ne.target.value });
              }
            }), R(B), T(Z, B);
          };
          ie(E, (Z) => {
            n().bodyType === "json" && Z(I);
          });
        }
        var W = D(E, 2);
        {
          var q = (Z) => {
            var B = J5(), F = K(B);
            Xe(F, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入请求信息",
              get value() {
                return n().bodyRaw;
              },
              oninput: (ne) => {
                a(i, { bodyRaw: ne.target.value });
              }
            }), R(B), T(Z, B);
          };
          ie(W, (Z) => {
            n().bodyType === "raw" && Z(q);
          });
        }
        var M = D(W, 2), X = K(M);
        Ve(X, {
          level: 3,
          mt: "10px",
          children: (Z, B) => {
            ye();
            var F = Ee("输出参数");
            T(Z, F);
          },
          $$slots: { default: !0 }
        });
        var Q = D(X, 2);
        Te(Q, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "outputDefs");
          },
          children: (Z, B) => {
            var F = Q5();
            T(Z, F);
          },
          $$slots: { default: !0 }
        }), R(M);
        var Y = D(M, 2);
        Gn(Y, {}), T(u, f);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(l);
}
se(oh, { data: {} }, [], [], !0);
var n3 = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>'), r3 = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), o3 = /* @__PURE__ */ ee('<div class="heading svelte-ddi5i"><!> <!></div> <!> <!> <div class="setting-title svelte-ddi5i">知识库</div> <div class="setting-item svelte-ddi5i"><!></div> <div class="setting-title svelte-ddi5i">关键字</div> <div class="setting-item svelte-ddi5i"><!></div> <div class="setting-title svelte-ddi5i">获取数据量</div> <div class="setting-item svelte-ddi5i"><!></div> <div class="heading svelte-ddi5i"><!></div> <!>', 1);
const i3 = {
  hash: "svelte-ddi5i",
  code: ".heading.svelte-ddi5i {display:flex;margin-bottom:10px;}.setting-title.svelte-ddi5i {font-size:12px;color:var(--secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-ddi5i {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function ih(e, t) {
  le(t, !0), Be(e, i3);
  const n = m(t, "data", 7), r = /* @__PURE__ */ De(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = nt(), { addParameter: i } = pn(), s = dr();
  let a = /* @__PURE__ */ Ne($t([]));
  En(async () => {
    const d = await s.provider?.knowledge?.();
    c(a).push(...d || []);
  });
  const { updateNodeData: l } = pt();
  Ue(() => {
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
      n(d), v();
    }
  };
  return Qt(e, Ke(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (d) => {
        var f = n3();
        T(d, f);
      },
      children: (d, f) => {
        var p = o3(), h = te(p), g = K(h);
        Ve(g, {
          level: 3,
          children: (V, z) => {
            ye();
            var O = Ee("输入参数");
            T(V, O);
          },
          $$slots: { default: !0 }
        });
        var w = D(g, 2);
        Te(w, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (V, z) => {
            var O = r3();
            T(V, O);
          },
          $$slots: { default: !0 }
        }), R(h);
        var y = D(h, 2);
        Mt(y, {});
        var b = D(y, 2);
        Ve(b, {
          level: 3,
          mt: "10px",
          children: (V, z) => {
            ye();
            var O = Ee("知识库设置");
            T(V, O);
          },
          $$slots: { default: !0 }
        });
        var x = D(b, 4), _ = K(x);
        {
          let V = /* @__PURE__ */ N(() => n().knowledgeId ? [n().knowledgeId] : []);
          vt(_, {
            get items() {
              return c(a);
            },
            style: "width: 100%",
            placeholder: "请选择知识库",
            onSelect: (z) => {
              const O = z.value;
              l(o, () => ({ knowledgeId: O }));
            },
            get value() {
              return c(V);
            }
          });
        }
        R(x);
        var k = D(x, 4), $ = K(k);
        ot($, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (V) => {
            const z = V.target.value;
            l(o, () => ({ keyword: z }));
          }
        }), R(k);
        var P = D(k, 4), A = K(P);
        {
          let V = /* @__PURE__ */ N(() => n().limit || "");
          ot(A, {
            placeholder: "搜索的数据条数",
            style: "width: 100%",
            onchange: (z) => {
              const O = z.target.value;
              l(o, () => ({ limit: O }));
            },
            get value() {
              return c(V);
            }
          });
        }
        R(P);
        var L = D(P, 2), H = K(L);
        Ve(H, {
          level: 3,
          mt: "10px",
          children: (V, z) => {
            ye();
            var O = Ee("输出参数");
            T(V, O);
          },
          $$slots: { default: !0 }
        }), R(L);
        var j = D(L, 2);
        Gn(j, {}), T(d, p);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(u);
}
se(ih, { data: {} }, [], [], !0);
var s3 = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>'), a3 = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), l3 = /* @__PURE__ */ ee('<div class="heading svelte-1qblm04"><!> <!></div> <!> <!> <div class="setting-title svelte-1qblm04">搜索引擎</div> <div class="setting-item svelte-1qblm04"><!></div> <div class="setting-title svelte-1qblm04">关键字</div> <div class="setting-item svelte-1qblm04"><!></div> <div class="setting-title svelte-1qblm04">搜索数据量</div> <div class="setting-item svelte-1qblm04"><!></div> <div class="heading svelte-1qblm04"><!></div> <!>', 1);
const u3 = {
  hash: "svelte-1qblm04",
  code: ".heading.svelte-1qblm04 {display:flex;margin-bottom:10px;}.setting-title.svelte-1qblm04 {font-size:12px;color:var(--secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-1qblm04 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function sh(e, t) {
  le(t, !0), Be(e, u3);
  const n = m(t, "data", 7), r = /* @__PURE__ */ De(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = nt(), { addParameter: i } = pn(), s = dr();
  let a = /* @__PURE__ */ Ne($t([]));
  En(async () => {
    const d = await s.provider?.searchEngine?.();
    c(a).push(...d || []);
  });
  const { updateNodeData: l } = pt();
  Ue(() => {
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
      n(d), v();
    }
  };
  return Qt(e, Ke(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (d) => {
        var f = s3();
        T(d, f);
      },
      children: (d, f) => {
        var p = l3(), h = te(p), g = K(h);
        Ve(g, {
          level: 3,
          children: (V, z) => {
            ye();
            var O = Ee("输入参数");
            T(V, O);
          },
          $$slots: { default: !0 }
        });
        var w = D(g, 2);
        Te(w, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (V, z) => {
            var O = a3();
            T(V, O);
          },
          $$slots: { default: !0 }
        }), R(h);
        var y = D(h, 2);
        Mt(y, {});
        var b = D(y, 2);
        Ve(b, {
          level: 3,
          mt: "10px",
          children: (V, z) => {
            ye();
            var O = Ee("搜索引擎设置");
            T(V, O);
          },
          $$slots: { default: !0 }
        });
        var x = D(b, 4), _ = K(x);
        {
          let V = /* @__PURE__ */ N(() => n().engine ? [n().engine] : []);
          vt(_, {
            get items() {
              return c(a);
            },
            style: "width: 100%",
            placeholder: "请选择搜索引擎",
            onSelect: (z) => {
              const O = z.value;
              l(o, () => ({ engine: O }));
            },
            get value() {
              return c(V);
            }
          });
        }
        R(x);
        var k = D(x, 4), $ = K(k);
        ot($, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (V) => {
            const z = V.target.value;
            l(o, () => ({ keyword: z }));
          }
        }), R(k);
        var P = D(k, 4), A = K(P);
        ot(A, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          get value() {
            return n().limit;
          },
          onchange: (V) => {
            const z = V.target.value;
            l(o, () => ({ limit: z }));
          }
        }), R(P);
        var L = D(P, 2), H = K(L);
        Ve(H, {
          level: 3,
          mt: "10px",
          children: (V, z) => {
            ye();
            var O = Ee("输出参数");
            T(V, O);
          },
          $$slots: { default: !0 }
        }), R(L);
        var j = D(L, 2);
        Gn(j, {}), T(d, p);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(u);
}
se(sh, { data: {} }, [], [], !0);
var c3 = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>'), d3 = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), f3 = /* @__PURE__ */ ee('<div class="heading svelte-1o34e8c"><!></div> <!> <div class="heading svelte-1o34e8c"><!> <!></div> <!>', 1);
const p3 = {
  hash: "svelte-1o34e8c",
  code: ".heading.svelte-1o34e8c {display:flex;margin:10px 0;align-items:center;}.loop_handle_wrapper::after {content:'循环体';width:100px;height:20px;background:var(--primary);color:var(--primary-foreground);display:flex;justify-content:center;align-items:center;}"
};
function ah(e, t) {
  le(t, !0), Be(e, p3);
  const n = m(t, "data", 7), r = /* @__PURE__ */ De(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = nt(), { addParameter: i } = pn();
  Ue(() => {
    (!n().loopVars || n().loopVars.length === 0) && i(o, "loopVars", { name: "loopVar", nameDisabled: !0, deleteDisabled: !0 });
  });
  var s = {
    get data() {
      return n();
    },
    set data(a) {
      n(a), v();
    }
  };
  return Qt(e, Ke(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (a) => {
        var l = c3();
        T(a, l);
      },
      handle: (a) => {
        ur(a, {
          type: "source",
          get position() {
            return xe.Bottom;
          },
          id: "loop_handle",
          style: "bottom: -12px;width: 100px",
          class: "loop_handle_wrapper"
        });
      },
      children: (a, l) => {
        var u = f3(), d = te(u), f = K(d);
        Ve(f, {
          level: 3,
          children: (b, x) => {
            ye();
            var _ = Ee("循环变量");
            T(b, _);
          },
          $$slots: { default: !0 }
        }), R(d);
        var p = D(d, 2);
        Mt(p, { dataKeyName: "loopVars" });
        var h = D(p, 2), g = K(h);
        Ve(g, {
          level: 3,
          children: (b, x) => {
            ye();
            var _ = Ee("输出参数");
            T(b, _);
          },
          $$slots: { default: !0 }
        });
        var w = D(g, 2);
        Te(w, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (b, x) => {
            var _ = d3();
            T(b, _);
          },
          $$slots: { default: !0 }
        }), R(h);
        var y = D(h, 2);
        Mt(y, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs",
          useChildrenOnly: !0
        }), T(a, u);
      },
      $$slots: { icon: !0, handle: !0, default: !0 }
    }
  )), ue(s);
}
se(ah, { data: {} }, [], [], !0);
var h3 = /* @__PURE__ */ ee('<div class="input-more-setting svelte-5x0hls"><div class="input-more-item svelte-5x0hls">数据内容： <!></div> <div class="input-more-item svelte-5x0hls">确认方式： <!></div> <div class="input-more-item svelte-5x0hls">数据标题： <!></div> <div class="input-more-item svelte-5x0hls">数据描述： <!></div>   <div class="input-more-item svelte-5x0hls"><!></div></div>'), g3 = /* @__PURE__ */ ee('<div class="input-item svelte-5x0hls"><!></div> <div class="input-item svelte-5x0hls"><!></div> <div class="input-item svelte-5x0hls"><!></div>', 1);
const v3 = {
  hash: "svelte-5x0hls",
  code: ".input-item.svelte-5x0hls {display:flex;align-items:center;}.input-more-setting.svelte-5x0hls {display:flex;flex-direction:column;gap:10px;padding:10px;background:var(--background);border:1px solid var(--border);border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-5x0hls .input-more-item:where(.svelte-5x0hls) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:var(--muted-foreground);}"
};
function lh(e, t) {
  le(t, !0), Be(e, v3);
  const n = m(t, "parameter", 7), r = m(t, "index", 7), o = m(t, "dataKeyName", 7), i = m(t, "useChildrenOnly", 7);
  let s = nt(), a = qn(s), l = /* @__PURE__ */ N(() => ({
    ...n(),
    ...a?.current?.data?.[o()][r()]
  }));
  const { updateNodeData: u } = pt(), d = (z, O) => {
    u(s, (C) => {
      let S = C.data?.[o()];
      return S[r()] = { ...S[r()], [z]: O }, { [o()]: S };
    });
  }, f = (z, O) => {
    const C = O.target.value;
    d(z, C);
  }, p = (z) => {
    const O = z.value;
    d("ref", O);
  }, h = (z) => {
    const O = z.value;
    d("formType", O);
  }, g = (z) => {
    const O = z.value;
    d("contentType", O);
  };
  let w;
  const y = () => {
    u(s, (z) => {
      let O = z.data?.[o()];
      return O.splice(r(), 1), { [o()]: [...O] };
    }), w?.hide();
  };
  let b = Up(i());
  var x = {
    get parameter() {
      return n();
    },
    set parameter(z) {
      n(z), v();
    },
    get index() {
      return r();
    },
    set index(z) {
      r(z), v();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(z) {
      o(z), v();
    },
    get useChildrenOnly() {
      return i();
    },
    set useChildrenOnly(z) {
      i(z), v();
    }
  }, _ = g3(), k = te(_), $ = K(k);
  {
    let z = /* @__PURE__ */ N(() => c(l).nameDisabled === !0);
    ot($, {
      style: "width: 100%;",
      get value() {
        return c(l).name;
      },
      placeholder: "请输入参数名称",
      get disabled() {
        return c(z);
      },
      oninput: (O) => f("name", O)
    });
  }
  R(k);
  var P = D(k, 2), A = K(P);
  {
    var L = (z) => {
      ot(z, {
        get value() {
          return c(l).value;
        },
        placeholder: "请输入参数值",
        oninput: (O) => f("value", O)
      });
    }, H = (z) => {
      var O = Ce(), C = te(O);
      {
        var S = (E) => {
          {
            let I = /* @__PURE__ */ N(() => [c(l).ref]);
            vt(E, {
              get items() {
                return b.current;
              },
              style: "width: 100%",
              defaultValue: ["ref"],
              get value() {
                return c(I);
              },
              expandAll: !0,
              onSelect: p
            });
          }
        };
        ie(
          C,
          (E) => {
            c(l).refType !== "input" && E(S);
          },
          !0
        );
      }
      T(z, O);
    };
    ie(A, (z) => {
      c(l).refType === "fixed" ? z(L) : z(H, !1);
    });
  }
  R(P);
  var j = D(P, 2), V = K(j);
  return ft(
    mr(V, {
      placement: "bottom",
      floating: (z) => {
        var O = h3(), C = K(O), S = D(K(C));
        {
          let Z = /* @__PURE__ */ N(() => c(l).contentType ? [c(l).contentType] : []);
          vt(S, {
            get items() {
              return vl;
            },
            style: "width: 100%",
            defaultValue: ["text"],
            get value() {
              return c(Z);
            },
            onSelect: g
          });
        }
        R(C);
        var E = D(C, 2), I = D(K(E));
        {
          let Z = /* @__PURE__ */ N(() => c(l).formType ? [c(l).formType] : []);
          vt(I, {
            get items() {
              return lw;
            },
            style: "width: 100%",
            defaultValue: ["single"],
            get value() {
              return c(Z);
            },
            onSelect: h
          });
        }
        R(E);
        var W = D(E, 2), q = D(K(W));
        Xe(q, {
          rows: 1,
          style: "width: 100%;",
          onchange: (Z) => {
            f("formLabel", Z);
          },
          get value() {
            return c(l).formLabel;
          }
        }), R(W);
        var M = D(W, 2), X = D(K(M));
        Xe(X, {
          rows: 2,
          style: "width: 100%;",
          onchange: (Z) => {
            f("formDescription", Z);
          },
          get value() {
            return c(l).formDescription;
          }
        }), R(M);
        var Q = D(M, 2), Y = K(Q);
        Te(Y, {
          variant: "destructive",
          onclick: y,
          children: (Z, B) => {
            ye();
            var F = Ee("删除");
            T(Z, F);
          },
          $$slots: { default: !0 }
        }), R(Q), R(O), T(z, O);
      },
      children: (z, O) => {
        ai(z, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (z) => w = z,
    () => w
  ), R(j), T(e, _), ue(x);
}
se(
  lh,
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
var m3 = /* @__PURE__ */ ee('<div class="input-header svelte-1fllp9b">参数名称</div> <div class="input-header svelte-1fllp9b">参数值</div> <div class="input-header svelte-1fllp9b"></div>', 1), y3 = /* @__PURE__ */ ee('<div class="none-params svelte-1fllp9b"> </div>'), w3 = /* @__PURE__ */ ee('<div class="input-container svelte-1fllp9b"><!> <!></div>');
const b3 = {
  hash: "svelte-1fllp9b",
  code: `.input-container.svelte-1fllp9b {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1fllp9b .none-params:where(.svelte-1fllp9b) {font-size:12px;background:var(--secondary);height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1fllp9b .input-header:where(.svelte-1fllp9b) {font-size:12px;color:var(--muted-foreground);}`
};
function uh(e, t) {
  le(t, !0), Be(e, b3);
  const n = m(t, "noneParameterText", 7, "无确认数据"), r = m(t, "dataKeyName", 7, "parameters"), o = m(t, "useChildrenOnly", 7);
  let i = nt(), s = qn(i), a = /* @__PURE__ */ N(() => [...s?.current?.data?.[r()] || []]);
  var l = {
    get noneParameterText() {
      return n();
    },
    set noneParameterText(h = "无确认数据") {
      n(h), v();
    },
    get dataKeyName() {
      return r();
    },
    set dataKeyName(h = "parameters") {
      r(h), v();
    },
    get useChildrenOnly() {
      return o();
    },
    set useChildrenOnly(h) {
      o(h), v();
    }
  }, u = w3(), d = K(u);
  {
    var f = (h) => {
      var g = m3();
      ye(4), T(h, g);
    };
    ie(d, (h) => {
      c(a).length !== 0 && h(f);
    });
  }
  var p = D(d, 2);
  return yt(
    p,
    19,
    () => c(a),
    (h) => h.id,
    (h, g, w) => {
      lh(h, {
        get parameter() {
          return c(g);
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
      var g = y3(), w = K(g, !0);
      R(g), Se(() => qe(w, n())), T(h, g);
    }
  ), R(u), T(e, u), ue(l);
}
se(uh, { noneParameterText: {}, dataKeyName: {}, useChildrenOnly: {} }, [], [], !0);
const Sa = (e, t) => {
  if (e === t) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const n = Array.isArray(e), r = Array.isArray(t);
  if (n !== r) return !1;
  if (n && r) {
    if (e.length !== t.length) return !1;
    for (let o = 0; o < e.length; o++)
      if (!Sa(e[o], t[o])) return !1;
    return !0;
  } else {
    const o = Object.keys(e), i = Object.keys(t);
    if (o.length !== i.length) return !1;
    for (const s of o)
      if (!(s in t) || !Sa(e[s], t[s])) return !1;
    return !0;
  }
};
var x3 = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), k3 = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), C3 = /* @__PURE__ */ ee('<div class="heading svelte-8iukvu"><!> <!></div> <!> <!> <div class="setting-title svelte-8iukvu">消息内容</div> <div class="setting-item svelte-8iukvu"><!></div> <div class="heading svelte-8iukvu"><!></div> <!>', 1);
const $3 = {
  hash: "svelte-8iukvu",
  code: ".heading.svelte-8iukvu {display:flex;margin-bottom:10px;}.setting-title.svelte-8iukvu {font-size:12px;color:var(--secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-8iukvu {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function ch(e, t) {
  le(t, !0), Be(e, $3);
  const n = m(t, "data", 7), r = /* @__PURE__ */ De(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = nt(), { addParameter: i } = pn(), { updateNodeData: s } = pt();
  Ue(() => {
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
      Sa(l, n().outputDefs) || s(o, () => ({ outputDefs: l }));
    }
  });
  var a = {
    get data() {
      return n();
    },
    set data(l) {
      n(l), v();
    }
  };
  return Qt(e, Ke(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = x3();
        T(l, u);
      },
      children: (l, u) => {
        var d = C3(), f = te(d), p = K(f);
        Ve(p, {
          level: 3,
          children: ($, P) => {
            ye();
            var A = Ee("确认数据");
            T($, A);
          },
          $$slots: { default: !0 }
        });
        var h = D(p, 2);
        Te(h, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "confirms");
          },
          children: ($, P) => {
            var A = k3();
            T($, A);
          },
          $$slots: { default: !0 }
        }), R(f);
        var g = D(f, 2);
        uh(g, { dataKeyName: "confirms", noneParameterText: "无确认数据" });
        var w = D(g, 2);
        Ve(w, {
          level: 3,
          mt: "10px",
          children: ($, P) => {
            ye();
            var A = Ee("确认消息");
            T($, A);
          },
          $$slots: { default: !0 }
        });
        var y = D(w, 4), b = K(y);
        {
          let $ = /* @__PURE__ */ N(() => n().message || "");
          Xe(b, {
            rows: 5,
            placeholder: "请输入用户需要确认的消息内容",
            style: "width: 100%",
            onchange: (P) => {
              s(o, () => ({ message: P.target.value }));
            },
            get value() {
              return c($);
            }
          });
        }
        R(y);
        var x = D(y, 2), _ = K(x);
        Ve(_, {
          level: 3,
          mt: "10px",
          children: ($, P) => {
            ye();
            var A = Ee("输出参数");
            T($, A);
          },
          $$slots: { default: !0 }
        }), R(x);
        var k = D(x, 2);
        Gn(k, { placeholder: "" }), T(l, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(a);
}
se(ch, { data: {} }, [], [], !0);
const _3 = {
  startNode: qp,
  codeNode: nh,
  confirmNode: ch,
  llmNode: th,
  templateNode: rh,
  httpNode: oh,
  knowledgeNode: ih,
  searchEngineNode: sh,
  loopNode: ah,
  endNode: Qp
};
var S3 = /* @__PURE__ */ ee("<!> ", 1);
function Ea(e, t) {
  le(t, !0);
  const n = m(t, "icon", 7), r = m(t, "title", 7), o = m(t, "type", 7), i = m(t, "description", 7), s = m(t, "extra", 7), a = (u) => {
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
      n(u), v();
    },
    get title() {
      return r();
    },
    set title(u) {
      r(u), v();
    },
    get type() {
      return o();
    },
    set type(u) {
      o(u), v();
    },
    get description() {
      return i();
    },
    set description(u) {
      i(u), v();
    },
    get extra() {
      return s();
    },
    set extra(u) {
      s(u), v();
    }
  };
  return Te(e, {
    draggable: !0,
    ondragstart: a,
    get "data-node-type"() {
      return o();
    },
    children: (u, d) => {
      var f = S3(), p = te(f);
      ys(p, n);
      var h = D(p);
      Se(() => qe(h, ` ${r() ?? ""}`)), T(u, f);
    },
    $$slots: { default: !0 }
  }), ue(l);
}
se(Ea, { icon: {}, title: {}, type: {}, description: {}, extra: {} }, [], [], !0);
var E3 = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), N3 = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), z3 = /* @__PURE__ */ ee('<div><div class="tf-toolbar-container"><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"></div></div></div> <!></div>');
function dh(e, t) {
  le(t, !0);
  let n = /* @__PURE__ */ Ne("base"), r = /* @__PURE__ */ Ne("show");
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
  ], s = [], a = dr(), l = a.customNodes;
  if (l) {
    const b = Object.keys(l).sort((x, _) => (l[x].sortNo || 0) - (l[_].sortNo || 0));
    for (let x of b)
      l[x].group === "base" ? o.push({ type: x, ...l[x] }) : s.push({
        icon: l[x].icon,
        title: l[x].title,
        type: x
      });
    o.sort((x, _) => (x.sortNo || 0) - (_.sortNo || 0));
  }
  if (a.hiddenNodes) {
    const b = typeof a.hiddenNodes == "function" ? a.hiddenNodes() : a.hiddenNodes;
    if (Array.isArray(b)) {
      for (let x of b)
        for (let _ = 0; _ < o.length; _++)
          if (o[_].type === x) {
            o.splice(_, 1);
            break;
          }
    }
  }
  var u = z3(), d = K(u), f = K(d), p = K(f);
  Bp(p, {
    style: "width: 100%",
    get items() {
      return i;
    },
    onChange: (b) => {
      U(n, b.value.toString(), !0);
    }
  }), R(f);
  var h = D(f, 2), g = K(h);
  yt(g, 21, () => o, Or, (b, x) => {
    Ea(b, Ke(() => c(x)));
  }), R(g);
  var w = D(g, 2);
  yt(w, 21, () => s, Or, (b, x) => {
    Ea(b, Ke(() => c(x)));
  }), R(w), R(h), R(d);
  var y = D(d, 2);
  Te(y, {
    size: "icon",
    variant: "outline",
    onclick: () => {
      U(r, c(r) ? "" : "show", !0);
    },
    children: (b, x) => {
      var _ = Ce(), k = te(_);
      {
        var $ = (A) => {
          var L = E3();
          T(A, L);
        }, P = (A) => {
          var L = N3();
          T(A, L);
        };
        ie(k, (A) => {
          c(r) === "show" ? A($) : A(P, !1);
        });
      }
      T(b, _);
    },
    $$slots: { default: !0 }
  }), R(u), Se(() => {
    Ht(u, 1, `tf-toolbar ${c(r) ?? ""}`), wt(g, `display: ${c(n) === "base" ? "flex" : "none"}`), wt(w, `display: ${c(n) !== "base" ? "flex" : "none"}`);
  }), T(e, u), ue();
}
se(dh, {}, [], [], !0);
const M3 = () => ({ getNode: (e) => Ae.getNode(e) }), P3 = () => ({ ensureParentInNodesBefore: (e, t) => {
  Ae.updateNodes((n) => {
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
} }), O3 = () => ({ getEdgesByTarget: (e) => Ae.getEdges().filter((t) => t.target === e) });
var T3 = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), V3 = /* @__PURE__ */ ee('<div class="heading svelte-qt4m0r"><!> <!></div> <!>', 1), A3 = /* @__PURE__ */ ee('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), L3 = /* @__PURE__ */ ee('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), D3 = /* @__PURE__ */ ee('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><div class="slider-container svelte-qt4m0r"><span class="svelte-qt4m0r"> </span> <input/></div></div>', 1), H3 = /* @__PURE__ */ ee('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), I3 = /* @__PURE__ */ ee('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), j3 = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), R3 = /* @__PURE__ */ ee('<div class="heading svelte-qt4m0r"><!> <!></div> <!>', 1), Z3 = /* @__PURE__ */ ee("<!> <!> <div></div> <!>", 1);
const K3 = {
  hash: "svelte-qt4m0r",
  code: `.heading.svelte-qt4m0r {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-qt4m0r {font-size:12px;color:var(--secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-qt4m0r {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}\r
\r
    /* 新增样式 */.slider-container.svelte-qt4m0r {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-qt4m0r span:where(.svelte-qt4m0r) {font-size:12px;color:var(--muted-foreground);display:flex;justify-content:space-between;align-items:center;}input[type='range'].svelte-qt4m0r {width:100%;height:4px;background:var(--muted);border-radius:2px;outline:none;-webkit-appearance:none;}input[type='range'].svelte-qt4m0r::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:var(--primary);border-radius:50%;cursor:pointer;}`
};
function fh(e, t) {
  le(t, !0), Be(e, K3);
  const n = m(t, "data", 7), r = /* @__PURE__ */ De(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = nt(), { addParameter: i } = pn(), s = pt(), { updateNodeData: a } = s, l = (y) => {
    a(o, y);
  }, u = (y, b) => {
    l({ [y]: b.target?.value });
  }, d = { ...r, id: o, data: n() }, f = document.createElement("div"), p = dr().customNodes[t.type];
  p.render?.(f, d, s);
  const h = p.forms;
  let g;
  Ue(() => {
    n().expand && g && g.append(f);
  }), Ue(() => {
    n() && p.onUpdate?.(f, { ...d, data: n() });
  }), Ue(() => {
    !n().parameters && p.parameters && l({
      parameters: Zo(JSON.parse(JSON.stringify(p.parameters)))
    });
  }), Ue(() => {
    !n().outputDefs && p.outputDefs && l({
      outputDefs: Zo(JSON.parse(JSON.stringify(p.outputDefs)))
    });
  });
  var w = {
    get data() {
      return n();
    },
    set data(y) {
      n(y), v();
    }
  };
  {
    const y = (x) => {
      var _ = Ce(), k = te(_);
      ys(k, () => p.icon), T(x, _);
    };
    let b = /* @__PURE__ */ N(() => ({ ...n(), description: p.description }));
    Qt(e, Ke(
      {
        get data() {
          return c(b);
        }
      },
      () => r,
      {
        icon: y,
        children: (x, _) => {
          var k = Z3(), $ = te(k);
          {
            var P = (z) => {
              var O = V3(), C = te(O), S = K(C);
              Ve(S, {
                level: 3,
                children: (q, M) => {
                  ye();
                  var X = Ee("输入参数");
                  T(q, X);
                },
                $$slots: { default: !0 }
              });
              var E = D(S, 2);
              {
                var I = (q) => {
                  Te(q, {
                    size: "icon-xs",
                    class: "input-btn-more",
                    style: "margin-left: auto",
                    onclick: () => {
                      i(o);
                    },
                    children: (M, X) => {
                      var Q = T3();
                      T(M, Q);
                    },
                    $$slots: { default: !0 }
                  });
                };
                ie(E, (q) => {
                  p.parametersAddEnable !== !1 && q(I);
                });
              }
              R(C);
              var W = D(C, 2);
              Mt(W, {}), T(z, O);
            };
            ie($, (z) => {
              p.parametersEnable !== !1 && z(P);
            });
          }
          var A = D($, 2);
          {
            var L = (z) => {
              var O = Ce(), C = te(O);
              yt(C, 17, () => h, Or, (S, E) => {
                var I = Ce(), W = te(I);
                {
                  var q = (X) => {
                    var Q = A3(), Y = te(Q), Z = K(Y, !0);
                    R(Y);
                    var B = D(Y, 2), F = K(B);
                    {
                      let ne = /* @__PURE__ */ N(() => n()[c(E).name] || c(E).defaultValue);
                      ot(F, Ke(
                        {
                          get placeholder() {
                            return c(E).placeholder;
                          },
                          style: "width: 100%",
                          get value() {
                            return c(ne);
                          }
                        },
                        () => c(E).attrs,
                        {
                          onchange: (re) => {
                            u(c(E).name, re);
                          }
                        }
                      ));
                    }
                    R(B), Se(() => qe(Z, c(E).label)), T(X, Q);
                  }, M = (X) => {
                    var Q = Ce(), Y = te(Q);
                    {
                      var Z = (F) => {
                        var ne = L3(), re = te(ne), J = K(re, !0);
                        R(re);
                        var he = D(re, 2), ce = K(he);
                        {
                          let oe = /* @__PURE__ */ N(() => n()[c(E).name] || c(E).defaultValue);
                          Xe(ce, Ke(
                            {
                              rows: 3,
                              get placeholder() {
                                return c(E).placeholder;
                              },
                              style: "width: 100%",
                              get value() {
                                return c(oe);
                              }
                            },
                            () => c(E).attrs,
                            {
                              onchange: (ae) => {
                                u(c(E).name, ae);
                              }
                            }
                          ));
                        }
                        R(he), Se(() => qe(J, c(E).label)), T(F, ne);
                      }, B = (F) => {
                        var ne = Ce(), re = te(ne);
                        {
                          var J = (ce) => {
                            var oe = D3(), ae = te(oe), pe = K(ae, !0);
                            R(ae);
                            var be = D(ae, 2), ke = K(be), de = K(ke), _e = K(de);
                            R(de);
                            var Ie = D(de, 2), G = (Je) => l({ [c(E).name]: parseFloat(Je.target.value) });
                            Ge(
                              Ie,
                              () => ({
                                class: "nodrag",
                                type: "range",
                                ...c(E).attrs,
                                value: n()[c(E).name] ?? c(E).defaultValue,
                                oninput: G
                              }),
                              void 0,
                              void 0,
                              void 0,
                              "svelte-qt4m0r",
                              !0
                            ), R(ke), R(be), Se(() => {
                              qe(pe, c(E).label), qe(_e, `${c(E).description ?? ""}: ${n()[c(E).name] ?? c(E).defaultValue ?? ""}`);
                            }), T(ce, oe);
                          }, he = (ce) => {
                            var oe = Ce(), ae = te(oe);
                            {
                              var pe = (ke) => {
                                var de = H3(), _e = te(de), Ie = K(_e, !0);
                                R(_e);
                                var G = D(_e, 2), Je = K(G);
                                {
                                  let He = /* @__PURE__ */ N(() => c(E).options || []), We = /* @__PURE__ */ N(() => n()[c(E).name] ? [n()[c(E).name]] : [c(E).defaultValue]);
                                  vt(Je, {
                                    get items() {
                                      return c(He);
                                    },
                                    style: "width: 100%",
                                    get placeholder() {
                                      return c(E).placeholder;
                                    },
                                    onSelect: (je) => {
                                      const rt = je.value;
                                      l({ [c(E).name]: rt });
                                    },
                                    get value() {
                                      return c(We);
                                    }
                                  });
                                }
                                R(G), Se(() => qe(Ie, c(E).label)), T(ke, de);
                              }, be = (ke) => {
                                var de = Ce(), _e = te(de);
                                {
                                  var Ie = (Je) => {
                                    var He = I3(), We = te(He), je = K(We, !0);
                                    R(We);
                                    var rt = D(We, 2), St = K(rt);
                                    {
                                      let hn = /* @__PURE__ */ N(() => c(E).chosen?.buttonText);
                                      Kp(St, {
                                        style: "width: 100%",
                                        get placeholder() {
                                          return c(E).placeholder;
                                        },
                                        get buttonText() {
                                          return c(hn);
                                        },
                                        onChosen: (ct, fe, Me) => {
                                          c(E).chosen?.onChosen?.(l, ct, fe, Me);
                                        },
                                        get value() {
                                          return n()[c(E).chosen?.valueDataKey || ""];
                                        },
                                        get label() {
                                          return n()[c(E).chosen?.labelDataKey || ""];
                                        }
                                      });
                                    }
                                    R(rt), Se(() => qe(je, c(E).label)), T(Je, He);
                                  }, G = (Je) => {
                                    var He = Ce(), We = te(He);
                                    {
                                      var je = (rt) => {
                                        Ve(rt, Ke({ level: 3, mt: "10px" }, () => c(E).attrs, {
                                          children: (St, hn) => {
                                            ye();
                                            var ct = Ee();
                                            Se(() => qe(ct, c(E).label)), T(St, ct);
                                          },
                                          $$slots: { default: !0 }
                                        }));
                                      };
                                      ie(
                                        We,
                                        (rt) => {
                                          c(E).type === "heading" && rt(je);
                                        },
                                        !0
                                      );
                                    }
                                    T(Je, He);
                                  };
                                  ie(
                                    _e,
                                    (Je) => {
                                      c(E).type === "chosen" ? Je(Ie) : Je(G, !1);
                                    },
                                    !0
                                  );
                                }
                                T(ke, de);
                              };
                              ie(
                                ae,
                                (ke) => {
                                  c(E).type === "select" ? ke(pe) : ke(be, !1);
                                },
                                !0
                              );
                            }
                            T(ce, oe);
                          };
                          ie(
                            re,
                            (ce) => {
                              c(E).type === "slider" ? ce(J) : ce(he, !1);
                            },
                            !0
                          );
                        }
                        T(F, ne);
                      };
                      ie(
                        Y,
                        (F) => {
                          c(E).type === "textarea" ? F(Z) : F(B, !1);
                        },
                        !0
                      );
                    }
                    T(X, Q);
                  };
                  ie(W, (X) => {
                    c(E).type === "input" ? X(q) : X(M, !1);
                  });
                }
                T(S, I);
              }), T(z, O);
            };
            ie(A, (z) => {
              h && z(L);
            });
          }
          var H = D(A, 2);
          ft(H, (z) => g = z, () => g);
          var j = D(H, 2);
          {
            var V = (z) => {
              var O = R3(), C = te(O), S = K(C);
              Ve(S, {
                level: 3,
                mt: "10px",
                children: (q, M) => {
                  ye();
                  var X = Ee("输出参数");
                  T(q, X);
                },
                $$slots: { default: !0 }
              });
              var E = D(S, 2);
              {
                var I = (q) => {
                  Te(q, {
                    size: "icon-xs",
                    class: "input-btn-more",
                    style: "margin-left: auto",
                    onclick: () => {
                      i(o, "outputDefs");
                    },
                    children: (M, X) => {
                      var Q = j3();
                      T(M, Q);
                    },
                    $$slots: { default: !0 }
                  });
                };
                ie(E, (q) => {
                  p.outputDefsAddEnable !== !1 && q(I);
                });
              }
              R(C);
              var W = D(C, 2);
              Gn(W, {}), T(z, O);
            };
            ie(j, (z) => {
              p.outputDefsEnable !== !1 && z(V);
            });
          }
          Se(() => {
            wt(H, p.rootStyle || ""), Ht(H, 1, Yn(p.rootClass), "svelte-qt4m0r");
          }), T(x, k);
        },
        $$slots: { icon: !0, default: !0 }
      }
    ));
  }
  return ue(w);
}
se(fh, { data: {} }, [], [], !0);
const B3 = () => ({ updateEdgeData: (e, t, n) => {
  const r = Ae.getEdge(e);
  if (!r)
    return;
  const o = typeof t == "function" ? t(r) : t;
  r.data = n?.replace ? o : { ...r.data, ...o }, Ae.updateEdges((i) => i.map((s) => s.id === e ? r : s));
} }), W3 = () => ({ deleteEdge: (e) => {
  Ae.removeEdge(e);
} }), X3 = () => {
  const e = (t, n) => n.filter(
    // 排除循环节点的子节点，否则在多层循环嵌套时不正确
    (r) => r.source === t && r.sourceHandle !== "loop_handle"
  );
  return { getNodesFromSource: (t) => {
    const n = Ae.getEdges(), r = [];
    let o = e(t, n);
    for (; o.length > 0; ) {
      const i = [];
      o.forEach((s) => {
        r.push(Ae.getNode(s.target)), i.push(...e(s.target, n));
      }), o = i;
    }
    return r;
  } };
}, Y3 = () => ({ getNodeRelativePosition: (e) => {
  let t = Ae.getNode(e);
  const n = { x: 0, y: 0 };
  for (; t; )
    n.x += t.position.x, n.y += t.position.y, t.parentId ? t = Ae.getNode(t.parentId) : t = void 0;
  return n;
} });
function q3(e) {
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
function F3(e) {
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
function G3(e) {
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
function Na(e, t) {
  if (e == null)
    return e;
  if (Array.isArray(e))
    return e.map((n) => Na(n, t));
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
      Object.hasOwn(e, r) && (n[r] = Na(e[r], t));
    return n;
  }
  return e;
}
const U3 = () => (pt(), { copyHandler: async (e) => {
  const t = Ae.getNodes().filter((s) => s.selected);
  if (t.length === 0) return;
  const n = Ae.getEdges().filter((s) => t.some((a) => a.id === s.source) && t.some((a) => a.id === s.target)), r = t.map(q3), o = n.map(G3), i = JSON.stringify({
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
  const r = F3(n.tinyflowNodes), o = n.tinyflowEdges || [], i = /* @__PURE__ */ new Map(), s = [];
  for (const l of r) {
    const u = `node_${Zn()}`;
    i.set(l.id, u);
  }
  for (const l of r) {
    const u = i.get(l.id), d = l.parentId !== void 0 ? i.get(l.parentId) : void 0, f = Na(l.data, i);
    s.push({
      ...l,
      id: u,
      parentId: d,
      data: f,
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
      id: `edge_${Zn()}`,
      source: u,
      target: d
    });
  }
  Ae.updateNodes((l) => [...l.map((u) => ({ ...u, selected: !1 })), ...s]), Ae.updateEdges((l) => [...l.map((u) => ({ ...u, selected: !1 })), ...a]);
} }), ec = () => {
  const e = document.activeElement;
  return !e || !(e instanceof HTMLElement) ? !1 : e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement || e.isContentEditable;
};
var J3 = /* @__PURE__ */ ee('<div class="panel-content svelte-woejl3"><div>边属性设置</div> <div class="setting-title svelte-woejl3">边条件设置</div> <div class="setting-item svelte-woejl3"><!></div> <div class="setting-item svelte-woejl3" style="padding: 8px 0"><!> <!></div></div>'), Q3 = /* @__PURE__ */ ee("<!> <!> <!> <!>", 1), e4 = /* @__PURE__ */ ee('<div style="position: relative; height: 100%; width: 100%;overflow: hidden"><!> <!></div>');
const t4 = {
  hash: "svelte-woejl3",
  code: ".panel-content.svelte-woejl3 {padding:10px;background-color:var(--background);border-radius:5px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);width:200px;border:1px solid var(--border);}.setting-title.svelte-woejl3 {margin:10px 0;font-size:12px;color:var(--muted-foreground);}.setting-item.svelte-woejl3 {display:flex;gap:5px;align-items:center;justify-content:end;}"
};
function ph(e, t) {
  le(t, !0), Be(e, t4);
  const n = m(t, "onInit", 7), r = m(t, "colorMode", 7), o = /* @__PURE__ */ De(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "onInit",
    "colorMode"
  ]), i = pt();
  console.log("props", o), n()(i);
  let s = /* @__PURE__ */ Ne(!1), a = /* @__PURE__ */ Ne(null);
  const { updateEdgeData: l } = B3(), u = (Y) => {
    Y.preventDefault(), Y.dataTransfer && (Y.dataTransfer.dropEffect = "move");
  }, d = (Y) => {
    Y.preventDefault();
    const Z = i.screenToFlowPosition({ x: Y.clientX - 250, y: Y.clientY - 100 }), B = Y.dataTransfer?.getData("application/tinyflow");
    if (!B)
      return;
    const F = JSON.parse(B), ne = { id: `node_${Zn()}`, position: Z, data: {}, ...F };
    Ae.addNode(ne), Ae.selectNodeOnly(ne.id);
  }, { getNode: f } = M3(), p = (Y) => {
    const Z = f(Y.source), B = f(Y.target);
    if (Y.sourceHandle === "loop_handle" || Z.parentId) {
      const F = i.getEdges();
      for (let ne of F)
        if (ne.target === Y.target) {
          const re = f(ne.source);
          if (Y.sourceHandle === "loop_handle" && re.parentId !== Z.id || Z.parentId && re.parentId !== Z.parentId)
            return !1;
        }
    }
    return !(!Z.parentId && B.parentId && B.parentId !== Z.id);
  }, { getNodesFromSource: h } = X3(), { getNodeRelativePosition: g } = Y3(), { ensureParentInNodesBefore: w } = P3(), y = (Y, Z) => {
    if (!Z.isValid)
      return;
    const B = Z.toNode;
    if (B.parentId)
      return;
    const F = Z.fromNode, ne = Z.fromHandle, re = { position: { ...B.position } };
    if (ne.id === "loop_handle" ? re.parentId = F.id : F.parentId && (re.parentId = F.parentId), re.parentId) {
      const { x: J, y: he } = g(re.parentId);
      re.position = { x: B.position.x - J, y: B.position.y - he }, i.updateNode(B.id, re), h(B.id).forEach((ce) => {
        i.updateNode(ce.id, {
          parentId: re.parentId,
          position: { x: ce.position.x - J, y: ce.position.y - he }
        });
      }), w(re.parentId, B.id);
    }
    setTimeout(() => {
      Ae.getEdges().forEach((J) => {
        J.target === B.id && J.source == F.id && (U(s, !0), U(a, J, !0));
      });
    });
  }, { getEdgesByTarget: b } = O3(), x = (Y) => {
    Y.edges.forEach((Z) => {
      Z.id === c(a)?.id && (U(a, null), U(s, !1));
      const B = f(Z.target);
      if (B && B.parentId) {
        const F = b(Z.target), { x: ne, y: re } = g(B.parentId);
        if (F.length === 0)
          i.updateNode(B.id, {
            parentId: void 0,
            position: { x: B.position.x + ne, y: B.position.y + re }
          }), h(B.id).forEach((J) => {
            i.updateNode(J.id, {
              parentId: void 0,
              position: { x: J.position.x + ne, y: J.position.y + re }
            });
          });
        else {
          let J = !1;
          for (let he = 0; he < F.length; he++) {
            const ce = F[he], oe = f(ce.source);
            if (oe.parentId || oe.type === "loopNode") {
              J = !0;
              break;
            }
          }
          J || (i.updateNode(B.id, {
            parentId: void 0,
            position: { x: B.position.x + ne, y: B.position.y + re }
          }), h(B.id).forEach((he) => {
            i.updateNode(he.id, {
              parentId: void 0,
              position: { x: he.position.x + ne, y: he.position.y + re }
            });
          }));
        }
      }
    });
  }, { deleteEdge: _ } = W3(), k = (Y, Z) => {
  }, $ = (Y) => {
  }, { copyHandler: P, pasteHandler: A } = U3(), L = (Y) => {
    ec() || ((Y.ctrlKey || Y.metaKey) && Y.key === "c" && (Y.preventDefault(), P(Y)), (Y.ctrlKey || Y.metaKey) && Y.key === "a" && (Y.preventDefault(), Ae.updateNodes((Z) => Z.map((B) => ({ ...B, selected: !0 }))), Ae.updateEdges((Z) => Z.map((B) => ({ ...B, selected: !0 })))));
  }, H = async (Y) => {
    ec() || A(Y);
  };
  En(() => {
    window.addEventListener("keydown", L), window.addEventListener("paste", H);
  }), qo(() => {
    window.removeEventListener("keydown", L), window.removeEventListener("paste", H);
  });
  const j = {
    // ...nodeTypes
  }, V = dr().customNodes;
  if (V)
    for (let Y of Object.keys(V))
      j[Y] = fh;
  const z = dr().onDataChange;
  Ue(() => {
    z?.({
      nodes: Ae.getNodes(),
      edges: Ae.getEdges(),
      viewport: Ae.getViewport()
    });
  });
  var O = {
    get onInit() {
      return n();
    },
    set onInit(Y) {
      n(Y), v();
    },
    get colorMode() {
      return r();
    },
    set colorMode(Y) {
      r(Y), v();
    }
  }, C = e4(), S = K(C), E = Ae.getNodes, I = Ae.setNodes, W = Ae.getEdges, q = Ae.setEdges, M = Ae.getViewport, X = Ae.setViewport;
  {
    let Y = /* @__PURE__ */ N(() => ({ ..._3, ...j })), Z = /* @__PURE__ */ N(() => ({
      markerEnd: { type: Do.ArrowClosed, width: 20, height: 20 }
    }));
    Rf(S, {
      get colorMode() {
        return r();
      },
      get nodeTypes() {
        return c(Y);
      },
      get nodes() {
        return E();
      },
      set nodes(B) {
        I(B);
      },
      get edges() {
        return W();
      },
      set edges(B) {
        q(B);
      },
      get viewport() {
        return M();
      },
      set viewport(B) {
        X(B);
      },
      class: "tinyflow-logo",
      ondrop: d,
      ondragover: u,
      isValidConnection: p,
      onconnectend: y,
      onconnectstart: k,
      onconnect: $,
      connectionRadius: 50,
      onedgeclick: (B) => {
        U(s, !0), U(a, B.edge, !0);
      },
      onbeforeconnect: (B) => ({ ...B, id: Zn() }),
      ondelete: x,
      onclick: (B) => {
        const F = B.target;
        F.classList.contains("svelte-flow__edge-interaction") || F.classList.contains("panel-content") || F.closest(".panel-content") || (U(s, !1), U(a, null));
      },
      get defaultEdgeOptions() {
        return c(Z);
      },
      children: (B, F) => {
        var ne = Q3(), re = te(ne);
        Uf(re, {});
        var J = D(re, 2);
        qf(J, {});
        var he = D(J, 2);
        Qf(he, {});
        var ce = D(he, 2);
        {
          var oe = (ae) => {
            ri(ae, {
              children: (pe, be) => {
                var ke = J3(), de = D(K(ke), 4), _e = K(de);
                {
                  let He = /* @__PURE__ */ N(() => c(a)?.data?.condition);
                  Xe(_e, {
                    rows: 3,
                    placeholder: "请输入边条件",
                    style: "width: 100%",
                    get value() {
                      return c(He);
                    },
                    onchange: (We) => {
                      c(a) && l(c(a).id, { condition: We.target?.value });
                    }
                  });
                }
                R(de);
                var Ie = D(de, 2), G = K(Ie);
                Te(G, {
                  variant: "destructive",
                  onclick: () => {
                    _(c(a)?.id), U(s, !1);
                  },
                  children: (He, We) => {
                    ye();
                    var je = Ee("删除");
                    T(He, je);
                  },
                  $$slots: { default: !0 }
                });
                var Je = D(G, 2);
                Te(Je, {
                  variant: "default",
                  onclick: () => {
                    U(s, !1);
                  },
                  children: (He, We) => {
                    ye();
                    var je = Ee("保存");
                    T(He, je);
                  },
                  $$slots: { default: !0 }
                }), R(Ie), R(ke), T(pe, ke);
              },
              $$slots: { default: !0 }
            });
          };
          ie(ce, (ae) => {
            c(s) && ae(oe);
          });
        }
        T(B, ne);
      },
      $$slots: { default: !0 }
    });
  }
  var Q = D(S, 2);
  return dh(Q, {}), R(C), T(e, C), ue(O);
}
se(ph, { onInit: {}, colorMode: {} }, [], [], !0);
const hh = typeof window < "u" ? window : void 0;
function n4(e) {
  let t = e.activeElement;
  for (; t?.shadowRoot; ) {
    const n = t.shadowRoot.activeElement;
    if (n === t)
      break;
    t = n;
  }
  return t;
}
let r4 = class {
  #t;
  #e;
  constructor(e = {}) {
    const { window: t = hh, document: n = t?.document } = e;
    t !== void 0 && (this.#t = n, this.#e = co((r) => {
      const o = $n(t, "focusin", r), i = $n(t, "focusout", r);
      return () => {
        o(), i();
      };
    }));
  }
  get current() {
    return this.#e?.(), this.#t ? n4(this.#t) : null;
  }
};
new r4();
function o4(e, t) {
  switch (e) {
    case "post":
      Ue(t);
      break;
    case "pre":
      jt(t);
      break;
  }
}
function gh(e, t, n, r = {}) {
  const { lazy: o = !1 } = r;
  let i = !o, s = Array.isArray(e) ? [] : void 0;
  o4(t, () => {
    const a = Array.isArray(e) ? e.map((u) => u()) : e();
    if (!i) {
      i = !0, s = a;
      return;
    }
    const l = Qe(() => n(a, s));
    return s = a, l;
  });
}
function Sl(e, t, n) {
  gh(e, "post", t, n);
}
function i4(e, t, n) {
  gh(e, "pre", t, n);
}
Sl.pre = i4;
function s4(e, t) {
  switch (e) {
    case "local":
      return t.localStorage;
    case "session":
      return t.sessionStorage;
  }
}
class vh {
  #t;
  #e;
  #n;
  #r;
  #i;
  #o = /* @__PURE__ */ Ne(0);
  constructor(t, n, r = {}) {
    const {
      storage: o = "local",
      serializer: i = { serialize: JSON.stringify, deserialize: JSON.parse },
      syncTabs: s = !0,
      window: a = hh
    } = r;
    if (this.#t = n, this.#e = t, this.#n = i, a === void 0) return;
    const l = s4(o, a);
    this.#r = l;
    const u = l.getItem(t);
    u !== null ? this.#t = this.#a(u) : this.#l(n), s && o === "local" && (this.#i = co(() => $n(a, "storage", this.#s)));
  }
  get current() {
    this.#i?.(), c(this.#o);
    const t = this.#a(this.#r?.getItem(this.#e)) ?? this.#t, n = /* @__PURE__ */ new WeakMap(), r = (o) => {
      if (o === null || o?.constructor.name === "Date" || typeof o != "object")
        return o;
      let i = n.get(o);
      return i || (i = new Proxy(o, {
        get: (s, a) => (c(this.#o), r(Reflect.get(s, a))),
        set: (s, a, l) => (U(this.#o, c(this.#o) + 1), Reflect.set(s, a, l), this.#l(t), !0)
      }), n.set(o, i)), i;
    };
    return r(t);
  }
  set current(t) {
    this.#l(t), U(this.#o, c(this.#o) + 1);
  }
  #s = (t) => {
    t.key !== this.#e || t.newValue === null || (this.#t = this.#a(t.newValue), U(this.#o, c(this.#o) + 1));
  };
  #a(t) {
    try {
      return this.#n.deserialize(t);
    } catch (n) {
      console.error(`Error when parsing "${t}" from persisted store "${this.#e}"`, n);
      return;
    }
  }
  #l(t) {
    try {
      t != null && this.#r?.setItem(this.#e, this.#n.serialize(t));
    } catch (n) {
      console.error(`Error when writing value from persisted store "${this.#e}" to ${this.#r}`, n);
    }
  }
}
function tc(e) {
  return e.filter((t) => t.length > 0);
}
const mh = {
  getItem: (e) => null,
  setItem: (e, t) => {
  }
}, li = typeof document < "u";
function a4(e) {
  return typeof e == "function";
}
function l4(e) {
  return e !== null && typeof e == "object";
}
const Ko = Symbol("box"), El = Symbol("is-writable");
function u4(e) {
  return l4(e) && Ko in e;
}
function c4(e) {
  return st.isBox(e) && El in e;
}
function st(e) {
  let t = /* @__PURE__ */ Ne($t(e));
  return {
    [Ko]: !0,
    [El]: !0,
    get current() {
      return c(t);
    },
    set current(n) {
      U(t, n, !0);
    }
  };
}
function d4(e, t) {
  const n = /* @__PURE__ */ N(e);
  return t ? {
    [Ko]: !0,
    [El]: !0,
    get current() {
      return c(n);
    },
    set current(r) {
      t(r);
    }
  } : {
    [Ko]: !0,
    get current() {
      return e();
    }
  };
}
function f4(e) {
  return st.isBox(e) ? e : a4(e) ? st.with(e) : st(e);
}
function p4(e) {
  return Object.entries(e).reduce(
    (t, [n, r]) => st.isBox(r) ? (st.isWritableBox(r) ? Object.defineProperty(t, n, {
      get() {
        return r.current;
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      set(o) {
        r.current = o;
      }
    }) : Object.defineProperty(t, n, {
      get() {
        return r.current;
      }
    }), t) : Object.assign(t, { [n]: r }),
    {}
  );
}
function h4(e) {
  return st.isWritableBox(e) ? {
    [Ko]: !0,
    get current() {
      return e.current;
    }
  } : e;
}
st.from = f4;
st.with = d4;
st.flatten = p4;
st.readonly = h4;
st.isBox = u4;
st.isWritableBox = c4;
function g4(e, t) {
  const n = RegExp(e, "g");
  return (r) => {
    if (typeof r != "string")
      throw new TypeError(`expected an argument of type string, but got ${typeof r}`);
    return r.match(n) ? r.replace(n, t) : r;
  };
}
const v4 = g4(/[A-Z]/, (e) => `-${e.toLowerCase()}`);
function m4(e) {
  if (!e || typeof e != "object" || Array.isArray(e))
    throw new TypeError(`expected an argument of type object, but got ${typeof e}`);
  return Object.keys(e).map((t) => `${v4(t)}: ${e[t]};`).join(`
`);
}
function y4(e = {}) {
  return m4(e).replace(`
`, " ");
}
const w4 = {
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
y4(w4);
const b4 = typeof window < "u" ? window : void 0;
function x4(e) {
  let t = e.activeElement;
  for (; t?.shadowRoot; ) {
    const n = t.shadowRoot.activeElement;
    if (n === t)
      break;
    t = n;
  }
  return t;
}
class k4 {
  #t;
  #e;
  constructor(t = {}) {
    const { window: n = b4, document: r = n?.document } = t;
    n !== void 0 && (this.#t = r, this.#e = co((o) => {
      const i = $n(n, "focusin", o), s = $n(n, "focusout", o);
      return () => {
        i(), s();
      };
    }));
  }
  get current() {
    return this.#e?.(), this.#t ? x4(this.#t) : null;
  }
}
new k4();
const $r = st("mode-watcher-mode"), _r = st("mode-watcher-theme"), C4 = ["dark", "light", "system"];
function za(e) {
  return typeof e != "string" ? !1 : C4.includes(e);
}
class $4 {
  #t = "system";
  #e = li ? localStorage : mh;
  #n = this.#e.getItem($r.current);
  #r = za(this.#n) ? this.#n : this.#t;
  #i = /* @__PURE__ */ Ne($t(this.#o()));
  #o(t = this.#r) {
    return new vh($r.current, t, {
      serializer: {
        serialize: (n) => n,
        deserialize: (n) => za(n) ? n : this.#t
      }
    });
  }
  constructor() {
    fo(() => Sl.pre(() => $r.current, (t, n) => {
      const r = c(this.#i).current;
      U(this.#i, this.#o(r), !0), n && localStorage.removeItem(n);
    }));
  }
  get current() {
    return c(this.#i).current;
  }
  set current(t) {
    c(this.#i).current = t;
  }
}
class _4 {
  #t = void 0;
  #e = !0;
  #n = /* @__PURE__ */ Ne($t(this.#t));
  #r = typeof window < "u" && typeof window.matchMedia == "function" ? new wf("prefers-color-scheme: light") : { current: !1 };
  query() {
    li && U(this.#n, this.#r.current ? "light" : "dark", !0);
  }
  tracking(t) {
    this.#e = t;
  }
  constructor() {
    fo(() => {
      jt(() => {
        this.#e && this.query();
      });
    }), this.query = this.query.bind(this), this.tracking = this.tracking.bind(this);
  }
  get current() {
    return c(this.#n);
  }
}
const Ma = new $4(), Pa = new _4();
class S4 {
  #t = li ? localStorage : mh;
  #e = this.#t.getItem(_r.current);
  #n = this.#e === null || this.#e === void 0 ? "" : this.#e;
  #r = /* @__PURE__ */ Ne($t(this.#i()));
  #i(t = this.#n) {
    return new vh(_r.current, t, {
      serializer: {
        serialize: (n) => typeof n != "string" ? "" : n,
        deserialize: (n) => n
      }
    });
  }
  constructor() {
    fo(() => Sl.pre(() => _r.current, (t, n) => {
      const r = c(this.#r).current;
      U(this.#r, this.#i(r), !0), n && localStorage.removeItem(n);
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
  set current(t) {
    c(this.#r).current = t;
  }
}
const Oi = new S4();
let nc, rc, oc = !1, ki = null;
function E4() {
  return ki || (ki = document.createElement("style"), ki.appendChild(document.createTextNode(`* {
		-webkit-transition: none !important;
		-moz-transition: none !important;
		-o-transition: none !important;
		-ms-transition: none !important;
		transition: none !important;
	}`)), ki);
}
function yh(e, t = !1) {
  if (typeof document > "u")
    return;
  if (!oc) {
    oc = !0, e();
    return;
  }
  if (typeof process < "u" && process.env?.NODE_ENV === "test" || typeof window < "u" && window.__vitest_worker__) {
    e();
    return;
  }
  clearTimeout(nc), clearTimeout(rc);
  const n = E4(), r = () => document.head.appendChild(n), o = () => {
    n.parentNode && document.head.removeChild(n);
  };
  function i() {
    e(), window.requestAnimationFrame(o);
  }
  if (typeof window.requestAnimationFrame < "u") {
    r(), t ? i() : window.requestAnimationFrame(() => {
      i();
    });
    return;
  }
  r(), nc = window.setTimeout(() => {
    e(), rc = window.setTimeout(o, 16);
  }, 16);
}
const rr = st(void 0), is = st(!0), ss = st(!1), Oa = st([]), Ta = st([]);
function N4() {
  const e = /* @__PURE__ */ N(() => {
    if (!li) return;
    const t = Ma.current === "system" ? Pa.current : Ma.current, n = tc(Oa.current), r = tc(Ta.current);
    function o() {
      const i = document.documentElement, s = document.querySelector('meta[name="theme-color"]');
      t === "light" ? (n.length && i.classList.remove(...n), r.length && i.classList.add(...r), i.style.colorScheme = "light", s && rr.current && s.setAttribute("content", rr.current.light)) : (r.length && i.classList.remove(...r), n.length && i.classList.add(...n), i.style.colorScheme = "dark", s && rr.current && s.setAttribute("content", rr.current.dark));
    }
    return is.current ? yh(o, ss.current) : o(), t;
  });
  return {
    get current() {
      return c(e);
    }
  };
}
function z4() {
  const e = /* @__PURE__ */ N(() => {
    if (Oi.current, !li) return;
    function t() {
      document.documentElement.setAttribute("data-theme", Oi.current);
    }
    return is.current ? yh(t, Qe(() => ss.current)) : t(), Oi.current;
  });
  return {
    get current() {
      return c(e);
    }
  };
}
const M4 = N4(), P4 = z4();
function wh(e) {
  Ma.current = e;
}
function O4(e) {
  Oi.current = e;
}
function T4({ defaultMode: e = "system", themeColors: t, darkClassNames: n = ["dark"], lightClassNames: r = [], defaultTheme: o = "", modeStorageKey: i = "mode-watcher-mode", themeStorageKey: s = "mode-watcher-theme" }) {
  const a = document.documentElement, l = localStorage.getItem(i) ?? e, u = localStorage.getItem(s) ?? o, d = l === "light" || l === "system" && window.matchMedia("(prefers-color-scheme: light)").matches;
  if (d ? (n.length && a.classList.remove(...n.filter(Boolean)), r.length && a.classList.add(...r.filter(Boolean))) : (r.length && a.classList.remove(...r.filter(Boolean)), n.length && a.classList.add(...n.filter(Boolean))), a.style.colorScheme = d ? "light" : "dark", t) {
    const f = document.querySelector('meta[name="theme-color"]');
    f && f.setAttribute("content", l === "light" ? t.light : t.dark);
  }
  u && (a.setAttribute("data-theme", u), localStorage.setItem(s, u)), localStorage.setItem(i, l);
}
var V4 = /* @__PURE__ */ ee('<meta name="theme-color"/>');
function bh(e, t) {
  le(t, !0);
  let n = m(t, "themeColors", 7);
  var r = {
    get themeColors() {
      return n();
    },
    set themeColors(a) {
      n(a), v();
    }
  }, o = Ce(), i = te(o);
  {
    var s = (a) => {
      var l = V4();
      Se(() => $e(l, "content", n().dark)), T(a, l);
    };
    ie(i, (a) => {
      n() && a(s);
    });
  }
  return T(e, o), ue(r);
}
se(bh, { themeColors: {} }, [], [], !0);
var A4 = /* @__PURE__ */ ee('<meta name="theme-color"/>'), L4 = /* @__PURE__ */ ee("<!> <!>", 1);
function xh(e, t) {
  le(t, !0);
  let n = m(t, "trueNonce", 7, ""), r = m(t, "initConfig", 7), o = m(t, "themeColors", 7);
  var i = {
    get trueNonce() {
      return n();
    },
    set trueNonce(s = "") {
      n(s), v();
    },
    get initConfig() {
      return r();
    },
    set initConfig(s) {
      r(s), v();
    },
    get themeColors() {
      return o();
    },
    set themeColors(s) {
      o(s), v();
    }
  };
  return Jg("171tvz2", (s) => {
    var a = L4(), l = te(a);
    {
      var u = (f) => {
        var p = A4();
        Se(() => $e(p, "content", o().dark)), T(f, p);
      };
      ie(l, (f) => {
        o() && f(u);
      });
    }
    var d = D(l, 2);
    ys(d, () => `<script${n() ? ` nonce=${n()}` : ""}>(` + T4.toString() + ")(" + JSON.stringify(r()) + ");<\/script>"), T(s, a);
  }), ue(i);
}
se(xh, { trueNonce: {}, initConfig: {}, themeColors: {} }, [], [], !0);
function kh(e, t) {
  le(t, !0);
  let n = m(t, "track", 7, !0), r = m(t, "defaultMode", 7, "system"), o = m(t, "themeColors", 7), i = m(t, "disableTransitions", 7, !0), s = m(t, "darkClassNames", 23, () => ["dark"]), a = m(t, "lightClassNames", 23, () => []), l = m(t, "defaultTheme", 7, ""), u = m(t, "nonce", 7, ""), d = m(t, "themeStorageKey", 7, "mode-watcher-theme"), f = m(t, "modeStorageKey", 7, "mode-watcher-mode"), p = m(t, "disableHeadScriptInjection", 7, !1), h = m(t, "synchronousModeChanges", 7, !1);
  $r.current = f(), _r.current = d(), Oa.current = s(), Ta.current = a(), is.current = i(), rr.current = o(), ss.current = h(), jt(() => {
    ss.current = h();
  }), jt(() => {
    is.current = i();
  }), jt(() => {
    rr.current = o();
  }), jt(() => {
    Oa.current = s();
  }), jt(() => {
    Ta.current = a();
  }), jt(() => {
    $r.current = f();
  }), jt(() => {
    _r.current = d();
  }), jt(() => {
    M4.current, $r.current, _r.current, P4.current;
  }), En(() => {
    Pa.tracking(n()), Pa.query();
    const $ = localStorage.getItem($r.current);
    wh(za($) ? $ : r());
    const P = localStorage.getItem(_r.current);
    O4(P || l());
  });
  const g = {
    defaultMode: r(),
    themeColors: o(),
    darkClassNames: s(),
    lightClassNames: a(),
    defaultTheme: l(),
    modeStorageKey: f(),
    themeStorageKey: d()
  }, w = /* @__PURE__ */ N(() => typeof window > "u" ? u() : "");
  var y = {
    get track() {
      return n();
    },
    set track($ = !0) {
      n($), v();
    },
    get defaultMode() {
      return r();
    },
    set defaultMode($ = "system") {
      r($), v();
    },
    get themeColors() {
      return o();
    },
    set themeColors($) {
      o($), v();
    },
    get disableTransitions() {
      return i();
    },
    set disableTransitions($ = !0) {
      i($), v();
    },
    get darkClassNames() {
      return s();
    },
    set darkClassNames($ = ["dark"]) {
      s($), v();
    },
    get lightClassNames() {
      return a();
    },
    set lightClassNames($ = []) {
      a($), v();
    },
    get defaultTheme() {
      return l();
    },
    set defaultTheme($ = "") {
      l($), v();
    },
    get nonce() {
      return u();
    },
    set nonce($ = "") {
      u($), v();
    },
    get themeStorageKey() {
      return d();
    },
    set themeStorageKey($ = "mode-watcher-theme") {
      d($), v();
    },
    get modeStorageKey() {
      return f();
    },
    set modeStorageKey($ = "mode-watcher-mode") {
      f($), v();
    },
    get disableHeadScriptInjection() {
      return p();
    },
    set disableHeadScriptInjection($ = !1) {
      p($), v();
    },
    get synchronousModeChanges() {
      return h();
    },
    set synchronousModeChanges($ = !1) {
      h($), v();
    }
  }, b = Ce(), x = te(b);
  {
    var _ = ($) => {
      bh($, {
        get themeColors() {
          return rr.current;
        }
      });
    }, k = ($) => {
      xh($, {
        get trueNonce() {
          return c(w);
        },
        get initConfig() {
          return g;
        },
        get themeColors() {
          return rr.current;
        }
      });
    };
    ie(x, ($) => {
      p() ? $(_) : $(k, !1);
    });
  }
  return T(e, b), ue(y);
}
se(
  kh,
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
var D4 = /* @__PURE__ */ ee("<!> <!>", 1);
function H4(e, t) {
  le(t, !0);
  const n = m(t, "options", 7), r = m(t, "onInit", 7);
  let { data: o, theme: i = "system" } = n();
  if (wh(i), typeof o == "string")
    try {
      o = JSON.parse(o.trim());
    } catch {
      console.error("Invalid JSON data:", o);
    }
  Ae.init(o?.nodes || [], o?.edges || []), Mr("tinyflow_options", n());
  var s = {
    get options() {
      return n();
    },
    set options(d) {
      n(d), v();
    },
    get onInit() {
      return r();
    },
    set onInit(d) {
      r(d), v();
    }
  }, a = D4(), l = te(a);
  kh(l, {});
  var u = D(l, 2);
  return Zf(u, {
    children: (d, f) => {
      ph(d, {
        get onInit() {
          return r();
        },
        get colorMode() {
          return i;
        }
      });
    },
    $$slots: { default: !0 }
  }), T(e, a), ue(s);
}
customElements.define("tinyflow-component", se(H4, { options: {}, onInit: {} }, [], [], !1));
const j4 = /* @__PURE__ */ $h({
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
  setup(e, { expose: t }) {
    const n = e, r = _h(null);
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
    return Sh(() => {
      if (r.value) {
        const l = { ...n };
        "data" in l && l.data != null && (l.data = i(l.data)), o = new uw({
          ...l,
          element: r.value
        });
      }
    }), Eh(() => {
      o && (o.destroy(), o = null);
    }), t({
      getData: () => o ? o.getData() : (console.warn("Tinyflow instance is not initialized"), null),
      getInstance: () => o || (console.warn("Tinyflow instance is not initialized"), null)
    }), (l, u) => (zh(), Nh("div", {
      ref_key: "divRef",
      ref: r,
      class: Ph(["tinyflow", l.className]),
      style: Mh(l.style)
    }, null, 6));
  }
});
export {
  j4 as Tinyflow
};
//# sourceMappingURL=index.js.map
