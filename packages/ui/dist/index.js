const Sg = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(Sg);
const au = 1, lu = 2, cu = 4, Eg = 8, Ng = 16, Pg = 1, Tg = 2, uu = 4, Ag = 8, $g = 16, du = 1, Mg = 2, fu = "[", as = "[!", Ia = "]", Ar = {}, ht = Symbol(), Dg = "http://www.w3.org/1999/xhtml", Og = "http://www.w3.org/2000/svg", hu = "@attach", Us = !1;
var ls = Array.isArray, zg = Array.prototype.indexOf, La = Array.from, Oi = Object.keys, zi = Object.defineProperty, Hn = Object.getOwnPropertyDescriptor, gu = Object.getOwnPropertyDescriptors, vu = Object.prototype, Vg = Array.prototype, cs = Object.getPrototypeOf, $l = Object.isExtensible;
function mo(e) {
  return typeof e == "function";
}
const tt = () => {
};
function Ig(e) {
  return e();
}
function Js(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function pu() {
  var e, t, n = new Promise((r, o) => {
    e = r, t = o;
  });
  return { promise: n, resolve: e, reject: t };
}
function Pt(e, t, n = !1) {
  return e === void 0 ? n ? (
    /** @type {() => V} */
    t()
  ) : (
    /** @type {V} */
    t
  ) : e;
}
function uo(e, t) {
  if (Array.isArray(e))
    return e;
  if (t === void 0 || !(Symbol.iterator in e))
    return Array.from(e);
  const n = [];
  for (const r of e)
    if (n.push(r), n.length === t) break;
  return n;
}
const vt = 2, Ha = 4, us = 8, mu = 1 << 24, Zn = 16, Yn = 32, hr = 64, ds = 128, ln = 512, _t = 1024, Rt = 2048, jn = 4096, Wt = 8192, Rn = 16384, fs = 32768, Fn = 65536, Ml = 1 << 17, Ra = 1 << 18, Hr = 1 << 19, yu = 1 << 20, $r = 32768, Qs = 1 << 21, Ba = 1 << 22, ir = 1 << 23, _n = Symbol("$state"), Fa = Symbol("legacy props"), Lg = Symbol(""), Yr = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), Hg = 1, hs = 3, Xn = 8;
function Ka(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Rg() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Bg(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Fg() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Kg(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Wg() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Zg() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Yg(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function jg() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Xg() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function qg() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Gg() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function Yo(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function Ug() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function Jg() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let we = !1;
function At(e) {
  we = e;
}
let Te;
function Qe(e) {
  if (e === null)
    throw Yo(), Ar;
  return Te = e;
}
function Sn() {
  return Qe(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Yt(Te)
  );
}
function B(e) {
  if (we) {
    if (/* @__PURE__ */ Yt(Te) !== null)
      throw Yo(), Ar;
    Te = e;
  }
}
function ye(e = 1) {
  if (we) {
    for (var t = e, n = Te; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ Yt(n);
    Te = n;
  }
}
function Vi(e = !0) {
  for (var t = 0, n = Te; ; ) {
    if (n.nodeType === Xn) {
      var r = (
        /** @type {Comment} */
        n.data
      );
      if (r === Ia) {
        if (t === 0) return n;
        t -= 1;
      } else (r === fu || r === as) && (t += 1);
    }
    var o = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Yt(n)
    );
    e && n.remove(), n = o;
  }
}
function wu(e) {
  if (!e || e.nodeType !== Xn)
    throw Yo(), Ar;
  return (
    /** @type {Comment} */
    e.data
  );
}
function bu(e) {
  return e === this.v;
}
function xu(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function _u(e) {
  return !xu(e, this.v);
}
let fo = !1, Qg = !1;
function ev() {
  fo = !0;
}
const tv = [];
function Wa(e, t = !1, n = !1) {
  return ki(e, /* @__PURE__ */ new Map(), "", tv, null, n);
}
function ki(e, t, n, r, o = null, i = !1) {
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
        var c = e[l];
        l in e && (a[l] = ki(c, t, n, r, null, i));
      }
      return a;
    }
    if (cs(e) === vu) {
      a = {}, t.set(e, a), o !== null && t.set(o, a);
      for (var d in e)
        a[d] = ki(
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
      return ki(
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
let qe = null;
function Qr(e) {
  qe = e;
}
function cn(e) {
  return (
    /** @type {T} */
    Za().get(e)
  );
}
function Mr(e, t) {
  return Za().set(e, t), t;
}
function nv(e) {
  return Za().has(e);
}
function ce(e, t = !1, n) {
  qe = {
    p: qe,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    l: fo && !t ? { s: null, u: null, $: [] } : null
  };
}
function ue(e) {
  var t = (
    /** @type {ComponentContext} */
    qe
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      Bu(r);
  }
  return e !== void 0 && (t.x = e), t.i = !0, qe = t.p, e ?? /** @type {T} */
  {};
}
function jo() {
  return !fo || qe !== null && qe.l === null;
}
function Za(e) {
  return qe === null && Ka(), qe.c ??= new Map(rv(qe) || void 0);
}
function rv(e) {
  let t = e.p;
  for (; t !== null; ) {
    const n = t.c;
    if (n !== null)
      return n;
    t = t.p;
  }
  return null;
}
let _r = [];
function Cu() {
  var e = _r;
  _r = [], Js(e);
}
function gr(e) {
  if (_r.length === 0 && !No) {
    var t = _r;
    queueMicrotask(() => {
      t === _r && Cu();
    });
  }
  _r.push(e);
}
function ov() {
  for (; _r.length > 0; )
    Cu();
}
function ku(e) {
  var t = De;
  if (t === null)
    return He.f |= ir, e;
  if ((t.f & fs) === 0) {
    if ((t.f & ds) === 0)
      throw e;
    t.b.error(e);
  } else
    eo(e, t);
}
function eo(e, t) {
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
const di = /* @__PURE__ */ new Set();
let Ke = null, Si = null, Gt = null, qt = [], gs = null, ea = !1, No = !1;
class sn {
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
    qt = [], Si = null, this.apply();
    var n = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: [],
      block_effects: []
    };
    for (const r of t)
      this.#a(r, n);
    this.is_fork || this.#u(), this.is_deferred() ? (this.#l(n.effects), this.#l(n.render_effects), this.#l(n.block_effects)) : (Si = this, Ke = null, Dl(n.render_effects), Dl(n.effects), Si = null, this.#i?.resolve()), Gt = null;
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   * @param {EffectTarget} target
   */
  #a(t, n) {
    t.f ^= _t;
    for (var r = t.first; r !== null; ) {
      var o = r.f, i = (o & (Yn | hr)) !== 0, s = i && (o & _t) !== 0, a = s || (o & Wt) !== 0 || this.skipped_effects.has(r);
      if ((r.f & ds) !== 0 && r.b?.is_pending() && (n = {
        parent: n,
        effect: r,
        effects: [],
        render_effects: [],
        block_effects: []
      }), !a && r.fn !== null) {
        i ? r.f ^= _t : (o & Ha) !== 0 ? n.effects.push(r) : qo(r) && ((r.f & Zn) !== 0 && n.block_effects.push(r), Do(r));
        var l = r.first;
        if (l !== null) {
          r = l;
          continue;
        }
      }
      var c = r.parent;
      for (r = r.next; r === null && c !== null; )
        c === n.effect && (this.#l(n.effects), this.#l(n.render_effects), this.#l(n.block_effects), n = /** @type {EffectTarget} */
        n.parent), r = c.next, c = c.parent;
    }
  }
  /**
   * @param {Effect[]} effects
   */
  #l(t) {
    for (const n of t)
      ((n.f & Rt) !== 0 ? this.#o : this.#s).push(n), this.#c(n.deps), kt(n, _t);
  }
  /**
   * @param {Value[] | null} deps
   */
  #c(t) {
    if (t !== null)
      for (const n of t)
        (n.f & vt) === 0 || (n.f & $r) === 0 || (n.f ^= $r, this.#c(
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
    this.previous.has(t) || this.previous.set(t, n), (t.f & ir) === 0 && (this.current.set(t, t.v), Gt?.set(t, t.v));
  }
  activate() {
    Ke = this, this.apply();
  }
  deactivate() {
    Ke === this && (Ke = null, Gt = null);
  }
  flush() {
    if (this.activate(), qt.length > 0) {
      if (Su(), Ke !== null && Ke !== this)
        return;
    } else this.#n === 0 && this.process([]);
    this.deactivate();
  }
  discard() {
    for (const t of this.#e) t(this);
    this.#e.clear();
  }
  #u() {
    if (this.#r === 0) {
      for (const t of this.#t) t();
      this.#t.clear();
    }
    this.#n === 0 && this.#d();
  }
  #d() {
    if (di.size > 1) {
      this.previous.clear();
      var t = Gt, n = !0, r = {
        parent: null,
        effect: null,
        effects: [],
        render_effects: [],
        block_effects: []
      };
      for (const i of di) {
        if (i === this) {
          n = !1;
          continue;
        }
        const s = [];
        for (const [l, c] of this.current) {
          if (i.current.has(l))
            if (n && c !== i.current.get(l))
              i.current.set(l, c);
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
          const l = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Map();
          for (const d of s)
            Eu(d, a, l, c);
          if (qt.length > 0) {
            Ke = i, i.apply();
            for (const d of qt)
              i.#a(d, r);
            i.deactivate();
          }
          qt = o;
        }
      }
      Ke = null, Gt = t;
    }
    this.committed = !0, di.delete(this);
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
      kt(t, Rt), Dr(t);
    for (const t of this.#s)
      kt(t, jn), Dr(t);
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
    return (this.#i ??= pu()).promise;
  }
  static ensure() {
    if (Ke === null) {
      const t = Ke = new sn();
      di.add(Ke), No || sn.enqueue(() => {
        Ke === t && t.flush();
      });
    }
    return Ke;
  }
  /** @param {() => void} task */
  static enqueue(t) {
    gr(t);
  }
  apply() {
  }
}
function m(e) {
  var t = No;
  No = !0;
  try {
    for (var n; ; ) {
      if (ov(), qt.length === 0 && (Ke?.flush(), qt.length === 0))
        return gs = null, /** @type {T} */
        n;
      Su();
    }
  } finally {
    No = t;
  }
}
function Su() {
  var e = ar;
  ea = !0;
  var t = null;
  try {
    var n = 0;
    for (Li(!0); qt.length > 0; ) {
      var r = sn.ensure();
      if (n++ > 1e3) {
        var o, i;
        iv();
      }
      r.process(qt), sr.clear();
    }
  } finally {
    ea = !1, Li(e), gs = null;
  }
}
function iv() {
  try {
    Wg();
  } catch (e) {
    eo(e, gs);
  }
}
let Dn = null;
function Dl(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if ((r.f & (Rn | Wt)) === 0 && qo(r) && (Dn = /* @__PURE__ */ new Set(), Do(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? Yu(r) : r.fn = null), Dn?.size > 0)) {
        sr.clear();
        for (const o of Dn) {
          if ((o.f & (Rn | Wt)) !== 0) continue;
          const i = [o];
          let s = o.parent;
          for (; s !== null; )
            Dn.has(s) && (Dn.delete(s), i.push(s)), s = s.parent;
          for (let a = i.length - 1; a >= 0; a--) {
            const l = i[a];
            (l.f & (Rn | Wt)) === 0 && Do(l);
          }
        }
        Dn.clear();
      }
    }
    Dn = null;
  }
}
function Eu(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const o of e.reactions) {
      const i = o.f;
      (i & vt) !== 0 ? Eu(
        /** @type {Derived} */
        o,
        t,
        n,
        r
      ) : (i & (Ba | Zn)) !== 0 && (i & Rt) === 0 && Nu(o, t, r) && (kt(o, Rt), Dr(
        /** @type {Effect} */
        o
      ));
    }
}
function Nu(e, t, n) {
  const r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null)
    for (const o of e.deps) {
      if (t.includes(o))
        return !0;
      if ((o.f & vt) !== 0 && Nu(
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
function Dr(e) {
  for (var t = gs = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (ea && t === De && (n & Zn) !== 0 && (n & Ra) === 0)
      return;
    if ((n & (hr | Yn)) !== 0) {
      if ((n & _t) === 0) return;
      t.f ^= _t;
    }
  }
  qt.push(t);
}
function ho(e) {
  let t = 0, n = cr(0), r;
  return () => {
    $o() && (u(n), Rr(() => (t === 0 && (r = Je(() => e(() => Po(n)))), t += 1, () => {
      gr(() => {
        t -= 1, t === 0 && (r?.(), r = void 0, Po(n));
      });
    })));
  };
}
var sv = Fn | Hr | ds;
function av(e, t, n) {
  new lv(e, t, n);
}
class lv {
  /** @type {Boundary | null} */
  parent;
  #t = !1;
  /** @type {TemplateNode} */
  #e;
  /** @type {TemplateNode | null} */
  #n = we ? Te : null;
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
  #c = null;
  /** @type {TemplateNode | null} */
  #u = null;
  #d = 0;
  #f = 0;
  #g = !1;
  /**
   * A source containing the number of pending async deriveds/expressions.
   * Only created if `$effect.pending()` is used inside the boundary,
   * otherwise updating the source results in needless `Batch.ensure()`
   * calls followed by no-op flushes
   * @type {Source<number> | null}
   */
  #h = null;
  #w = ho(() => (this.#h = cr(this.#d), () => {
    this.#h = null;
  }));
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(t, n, r) {
    this.#e = t, this.#r = n, this.#i = r, this.parent = /** @type {Effect} */
    De.b, this.#t = !!this.#r.pending, this.#o = Br(() => {
      if (De.b = this, we) {
        const i = this.#n;
        Sn(), /** @type {Comment} */
        i.nodeType === Xn && /** @type {Comment} */
        i.data === as ? this.#x() : this.#b();
      } else {
        var o = this.#m();
        try {
          this.#s = Vt(() => r(o));
        } catch (i) {
          this.error(i);
        }
        this.#f > 0 ? this.#p() : this.#t = !1;
      }
      return () => {
        this.#u?.remove();
      };
    }, sv), we && (this.#e = Te);
  }
  #b() {
    try {
      this.#s = Vt(() => this.#i(this.#e));
    } catch (t) {
      this.error(t);
    }
    this.#t = !1;
  }
  #x() {
    const t = this.#r.pending;
    t && (this.#a = Vt(() => t(this.#e)), sn.enqueue(() => {
      var n = this.#m();
      this.#s = this.#v(() => (sn.ensure(), Vt(() => this.#i(n)))), this.#f > 0 ? this.#p() : (Xr(
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
    return this.#t && (this.#u = St(), this.#e.before(this.#u), t = this.#u), t;
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
  #v(t) {
    var n = De, r = He, o = qe;
    Jt(this.#o), It(this.#o), Qr(this.#o.ctx);
    try {
      return t();
    } catch (i) {
      return ku(i), null;
    } finally {
      Jt(n), It(r), Qr(o);
    }
  }
  #p() {
    const t = (
      /** @type {(anchor: Node) => void} */
      this.#r.pending
    );
    this.#s !== null && (this.#c = document.createDocumentFragment(), this.#c.append(
      /** @type {TemplateNode} */
      this.#u
    ), qu(this.#s, this.#c)), this.#a === null && (this.#a = Vt(() => t(this.#e)));
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
    this.#f += t, this.#f === 0 && (this.#t = !1, this.#a && Xr(this.#a, () => {
      this.#a = null;
    }), this.#c && (this.#e.before(this.#c), this.#c = null));
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(t) {
    this.#y(t), this.#d += t, this.#h && to(this.#h, this.#d);
  }
  get_effect_pending() {
    return this.#w(), u(
      /** @type {Source<number>} */
      this.#h
    );
  }
  /** @param {unknown} error */
  error(t) {
    var n = this.#r.onerror;
    let r = this.#r.failed;
    if (this.#g || !n && !r)
      throw t;
    this.#s && (ut(this.#s), this.#s = null), this.#a && (ut(this.#a), this.#a = null), this.#l && (ut(this.#l), this.#l = null), we && (Qe(
      /** @type {TemplateNode} */
      this.#n
    ), ye(), Qe(Vi()));
    var o = !1, i = !1;
    const s = () => {
      if (o) {
        Jg();
        return;
      }
      o = !0, i && Gg(), sn.ensure(), this.#d = 0, this.#l !== null && Xr(this.#l, () => {
        this.#l = null;
      }), this.#t = this.has_pending_snippet(), this.#s = this.#v(() => (this.#g = !1, Vt(() => this.#i(this.#e)))), this.#f > 0 ? this.#p() : this.#t = !1;
    };
    var a = He;
    try {
      It(null), i = !0, n?.(t, s), i = !1;
    } catch (l) {
      eo(l, this.#o && this.#o.parent);
    } finally {
      It(a);
    }
    r && gr(() => {
      this.#l = this.#v(() => {
        sn.ensure(), this.#g = !0;
        try {
          return Vt(() => {
            r(
              this.#e,
              () => t,
              () => s
            );
          });
        } catch (l) {
          return eo(
            l,
            /** @type {Effect} */
            this.#o.parent
          ), null;
        } finally {
          this.#g = !1;
        }
      });
    });
  }
}
function Or(e, t) {
  return t;
}
function cv(e, t, n) {
  for (var r = [], o = t.length, i = 0; i < o; i++)
    qa(t[i].e, r, !0);
  ju(r, () => {
    var s = r.length === 0 && n !== null;
    if (s) {
      var a = (
        /** @type {Element} */
        n
      ), l = (
        /** @type {Element} */
        a.parentNode
      );
      Xa(l), l.append(a), e.items.clear(), nn(e, t[0].prev, t[o - 1].next);
    }
    for (var c = 0; c < o; c++) {
      var d = t[c];
      s || (e.items.delete(d.k), nn(e, d.prev, d.next)), ut(d.e, !s);
    }
    e.first === t[0] && (e.first = t[0].prev);
  });
}
function pt(e, t, n, r, o, i = null) {
  var s = e, a = /* @__PURE__ */ new Map(), l = null, c = (t & cu) !== 0, d = (t & au) !== 0, f = (t & lu) !== 0;
  if (c) {
    var h = (
      /** @type {Element} */
      e
    );
    s = we ? Qe(
      /** @type {Comment | Text} */
      /* @__PURE__ */ ot(h)
    ) : h.appendChild(St());
  }
  we && Sn();
  var g = null, v = /* @__PURE__ */ Ya(() => {
    var _ = n();
    return ls(_) ? _ : _ == null ? [] : La(_);
  }), p, w = !0;
  function b() {
    uv(E, p, s, t, r), g !== null && (p.length === 0 ? (g.fragment ? (s.before(g.fragment), g.fragment = null) : Ga(g.effect), k.first = g.effect) : Xr(g.effect, () => {
      g = null;
    }));
  }
  var k = Br(() => {
    p = /** @type {V[]} */
    u(v);
    var _ = p.length;
    let S = !1;
    if (we) {
      var T = wu(s) === as;
      T !== (_ === 0) && (s = Vi(), Qe(s), At(!1), S = !0);
    }
    for (var V = /* @__PURE__ */ new Set(), O = (
      /** @type {Batch} */
      Ke
    ), H = null, Z = Iu(), I = 0; I < _; I += 1) {
      we && Te.nodeType === Xn && /** @type {Comment} */
      Te.data === Ia && (s = /** @type {Comment} */
      Te, S = !0, At(!1));
      var P = p[I], A = r(P, I), x = w ? null : a.get(A);
      x ? (d && to(x.v, P), f ? to(
        /** @type {Value<number>} */
        x.i,
        I
      ) : x.i = I, Z && O.skipped_effects.delete(x.e)) : (x = dv(
        w ? s : null,
        H,
        P,
        A,
        I,
        o,
        t,
        n
      ), w && (x.o = !0, H === null ? l = x : H.next = x, H = x), a.set(A, x)), V.add(A);
    }
    if (_ === 0 && i && !g)
      if (w)
        g = {
          fragment: null,
          effect: Vt(() => i(s))
        };
      else {
        var C = document.createDocumentFragment(), M = St();
        C.append(M), g = {
          fragment: C,
          effect: Vt(() => i(M))
        };
      }
    if (we && _ > 0 && Qe(Vi()), !w)
      if (Z) {
        for (const [z, K] of a)
          V.has(z) || O.skipped_effects.add(K.e);
        O.oncommit(b), O.ondiscard(() => {
        });
      } else
        b();
    S && At(!0), u(v);
  }), E = { effect: k, items: a, first: l };
  w = !1, we && (s = Te);
}
function uv(e, t, n, r, o) {
  var i = (r & Eg) !== 0, s = t.length, a = e.items, l = e.first, c, d = null, f, h = [], g = [], v, p, w, b;
  if (i)
    for (b = 0; b < s; b += 1)
      v = t[b], p = o(v, b), w = /** @type {EachItem} */
      a.get(p), w.o && (w.a?.measure(), (f ??= /* @__PURE__ */ new Set()).add(w));
  for (b = 0; b < s; b += 1) {
    if (v = t[b], p = o(v, b), w = /** @type {EachItem} */
    a.get(p), e.first ??= w, !w.o) {
      w.o = !0;
      var k = d ? d.next : l;
      nn(e, d, w), nn(e, w, k), Ms(w, k, n), d = w, h = [], g = [], l = d.next;
      continue;
    }
    if ((w.e.f & Wt) !== 0 && (Ga(w.e), i && (w.a?.unfix(), (f ??= /* @__PURE__ */ new Set()).delete(w))), w !== l) {
      if (c !== void 0 && c.has(w)) {
        if (h.length < g.length) {
          var E = g[0], _;
          d = E.prev;
          var S = h[0], T = h[h.length - 1];
          for (_ = 0; _ < h.length; _ += 1)
            Ms(h[_], E, n);
          for (_ = 0; _ < g.length; _ += 1)
            c.delete(g[_]);
          nn(e, S.prev, T.next), nn(e, d, S), nn(e, T, E), l = E, d = T, b -= 1, h = [], g = [];
        } else
          c.delete(w), Ms(w, l, n), nn(e, w.prev, w.next), nn(e, w, d === null ? e.first : d.next), nn(e, d, w), d = w;
        continue;
      }
      for (h = [], g = []; l !== null && l.k !== p; )
        (l.e.f & Wt) === 0 && (c ??= /* @__PURE__ */ new Set()).add(l), g.push(l), l = l.next;
      if (l === null)
        continue;
      w = l;
    }
    h.push(w), d = w, l = w.next;
  }
  let V = a.size > s;
  if (l !== null || c !== void 0) {
    for (var O = c === void 0 ? [] : La(c); l !== null; )
      (l.e.f & Wt) === 0 && O.push(l), l = l.next;
    var H = O.length;
    if (V = a.size - H > s, H > 0) {
      var Z = (r & cu) !== 0 && s === 0 ? n : null;
      if (i) {
        for (b = 0; b < H; b += 1)
          O[b].a?.measure();
        for (b = 0; b < H; b += 1)
          O[b].a?.fix();
      }
      cv(e, O, Z);
    }
  }
  if (V)
    for (const I of a.values())
      I.o || (nn(e, d, I), d = I);
  e.effect.last = d && d.e, i && gr(() => {
    if (f !== void 0)
      for (w of f)
        w.a?.apply();
  });
}
function dv(e, t, n, r, o, i, s, a) {
  var l = (s & au) !== 0, c = (s & Ng) === 0, d = l ? c ? /* @__PURE__ */ Mu(n, !1, !1) : cr(n) : n, f = (s & lu) === 0 ? o : cr(o), h = {
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
      var g = document.createDocumentFragment();
      g.append(e = St());
    }
    return h.e = Vt(() => i(
      /** @type {Node} */
      e,
      d,
      f,
      a
    )), t !== null && (t.next = h), h;
  } finally {
  }
}
function Ms(e, t, n) {
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
      /* @__PURE__ */ Yt(i)
    );
    o.before(i), i = s;
  }
}
function nn(e, t, n) {
  t === null ? (e.first = n, e.effect.first = n && n.e) : (t.e.next && (t.e.next.prev = null), t.next = n, t.e.next = n && n.e), n !== null && (n.e.prev && (n.e.prev.next = null), n.prev = t, n.e.prev = t && t.e);
}
function Pu(e, t, n, r) {
  const o = jo() ? Xo : Ya;
  if (n.length === 0 && e.length === 0) {
    r(t.map(o));
    return;
  }
  var i = Ke, s = (
    /** @type {Effect} */
    De
  ), a = fv();
  function l() {
    Promise.all(n.map((c) => /* @__PURE__ */ hv(c))).then((c) => {
      a();
      try {
        r([...t.map(o), ...c]);
      } catch (d) {
        (s.f & Rn) === 0 && eo(d, s);
      }
      i?.deactivate(), Ii();
    }).catch((c) => {
      eo(c, s);
    });
  }
  e.length > 0 ? Promise.all(e).then(() => {
    a();
    try {
      return l();
    } finally {
      i?.deactivate(), Ii();
    }
  }) : l();
}
function fv() {
  var e = De, t = He, n = qe, r = Ke;
  return function(i = !0) {
    Jt(e), It(t), Qr(n), i && r?.activate();
  };
}
function Ii() {
  Jt(null), It(null), Qr(null);
}
// @__NO_SIDE_EFFECTS__
function Xo(e) {
  var t = vt | Rt, n = He !== null && (He.f & vt) !== 0 ? (
    /** @type {Derived} */
    He
  ) : null;
  return De !== null && (De.f |= Hr), {
    ctx: qe,
    deps: null,
    effects: null,
    equals: bu,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      ht
    ),
    wv: 0,
    parent: n ?? De,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function hv(e, t) {
  let n = (
    /** @type {Effect | null} */
    De
  );
  n === null && Rg();
  var r = (
    /** @type {Boundary} */
    n.b
  ), o = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), i = cr(
    /** @type {V} */
    ht
  ), s = !He, a = /* @__PURE__ */ new Map();
  return xv(() => {
    var l = pu();
    o = l.promise;
    try {
      Promise.resolve(e()).then(l.resolve, l.reject).then(() => {
        c === Ke && c.committed && c.deactivate(), Ii();
      });
    } catch (h) {
      l.reject(h), Ii();
    }
    var c = (
      /** @type {Batch} */
      Ke
    );
    if (s) {
      var d = !r.is_pending();
      r.update_pending_count(1), c.increment(d), a.get(c)?.reject(Yr), a.delete(c), a.set(c, l);
    }
    const f = (h, g = void 0) => {
      if (c.activate(), g)
        g !== Yr && (i.f |= ir, to(i, g));
      else {
        (i.f & ir) !== 0 && (i.f ^= ir), to(i, h);
        for (const [v, p] of a) {
          if (a.delete(v), v === c) break;
          p.reject(Yr);
        }
      }
      s && (r.update_pending_count(-1), c.decrement(d));
    };
    l.promise.then(f, (h) => f(null, h || "unknown"));
  }), ps(() => {
    for (const l of a.values())
      l.reject(Yr);
  }), new Promise((l) => {
    function c(d) {
      function f() {
        d === o ? l(i) : c(o);
      }
      d.then(f, f);
    }
    c(o);
  });
}
// @__NO_SIDE_EFFECTS__
function N(e) {
  const t = /* @__PURE__ */ Xo(e);
  return Gu(t), t;
}
// @__NO_SIDE_EFFECTS__
function Ya(e) {
  const t = /* @__PURE__ */ Xo(e);
  return t.equals = _u, t;
}
function Tu(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      ut(
        /** @type {Effect} */
        t[n]
      );
  }
}
function gv(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & vt) === 0)
      return (t.f & Rn) === 0 ? (
        /** @type {Effect} */
        t
      ) : null;
    t = t.parent;
  }
  return null;
}
function ja(e) {
  var t, n = De;
  Jt(gv(e));
  try {
    e.f &= ~$r, Tu(e), t = ed(e);
  } finally {
    Jt(n);
  }
  return t;
}
function Au(e) {
  var t = ja(e);
  if (e.equals(t) || (Ke?.is_fork || (e.v = t), e.wv = Ju()), !Fr)
    if (Gt !== null)
      ($o() || Ke?.is_fork) && Gt.set(e, t);
    else {
      var n = (e.f & ln) === 0 ? jn : _t;
      kt(e, n);
    }
}
let ta = /* @__PURE__ */ new Set();
const sr = /* @__PURE__ */ new Map();
let $u = !1;
function cr(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: bu,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function Pe(e, t) {
  const n = cr(e);
  return Gu(n), n;
}
// @__NO_SIDE_EFFECTS__
function Mu(e, t = !1, n = !0) {
  const r = cr(e);
  return t || (r.equals = _u), fo && n && qe !== null && qe.l !== null && (qe.l.s ??= []).push(r), r;
}
function Q(e, t, n = !1) {
  He !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!xn || (He.f & Ml) !== 0) && jo() && (He.f & (vt | Zn | Ba | Ml)) !== 0 && !Bn?.includes(e) && qg();
  let r = n ? Ct(t) : t;
  return to(e, r);
}
function to(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    Fr ? sr.set(e, t) : sr.set(e, n), e.v = t;
    var r = sn.ensure();
    r.capture(e, n), (e.f & vt) !== 0 && ((e.f & Rt) !== 0 && ja(
      /** @type {Derived} */
      e
    ), kt(e, (e.f & ln) !== 0 ? _t : jn)), e.wv = Ju(), Du(e, Rt), jo() && De !== null && (De.f & _t) !== 0 && (De.f & (Yn | hr)) === 0 && (Xt === null ? Cv([e]) : Xt.push(e)), !r.is_fork && ta.size > 0 && !$u && vv();
  }
  return t;
}
function vv() {
  $u = !1;
  var e = ar;
  Li(!0);
  const t = Array.from(ta);
  try {
    for (const n of t)
      (n.f & _t) !== 0 && kt(n, jn), qo(n) && Do(n);
  } finally {
    Li(e);
  }
  ta.clear();
}
function Ol(e, t = 1) {
  var n = u(e), r = t === 1 ? n++ : n--;
  return Q(e, n), r;
}
function Po(e) {
  Q(e, e.v + 1);
}
function Du(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = jo(), o = n.length, i = 0; i < o; i++) {
      var s = n[i], a = s.f;
      if (!(!r && s === De)) {
        var l = (a & Rt) === 0;
        if (l && kt(s, t), (a & vt) !== 0) {
          var c = (
            /** @type {Derived} */
            s
          );
          Gt?.delete(c), (a & $r) === 0 && (a & ln && (s.f |= $r), Du(c, jn));
        } else l && ((a & Zn) !== 0 && Dn !== null && Dn.add(
          /** @type {Effect} */
          s
        ), Dr(
          /** @type {Effect} */
          s
        ));
      }
    }
}
function Ct(e) {
  if (typeof e != "object" || e === null || _n in e)
    return e;
  const t = cs(e);
  if (t !== vu && t !== Vg)
    return e;
  var n = /* @__PURE__ */ new Map(), r = ls(e), o = /* @__PURE__ */ Pe(0), i = Nr, s = (a) => {
    if (Nr === i)
      return a();
    var l = He, c = Nr;
    It(null), Ll(i);
    var d = a();
    return It(l), Ll(c), d;
  };
  return r && n.set("length", /* @__PURE__ */ Pe(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(a, l, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && jg();
        var d = n.get(l);
        return d === void 0 ? d = s(() => {
          var f = /* @__PURE__ */ Pe(c.value);
          return n.set(l, f), f;
        }) : Q(d, c.value, !0), !0;
      },
      deleteProperty(a, l) {
        var c = n.get(l);
        if (c === void 0) {
          if (l in a) {
            const d = s(() => /* @__PURE__ */ Pe(ht));
            n.set(l, d), Po(o);
          }
        } else
          Q(c, ht), Po(o);
        return !0;
      },
      get(a, l, c) {
        if (l === _n)
          return e;
        var d = n.get(l), f = l in a;
        if (d === void 0 && (!f || Hn(a, l)?.writable) && (d = s(() => {
          var g = Ct(f ? a[l] : ht), v = /* @__PURE__ */ Pe(g);
          return v;
        }), n.set(l, d)), d !== void 0) {
          var h = u(d);
          return h === ht ? void 0 : h;
        }
        return Reflect.get(a, l, c);
      },
      getOwnPropertyDescriptor(a, l) {
        var c = Reflect.getOwnPropertyDescriptor(a, l);
        if (c && "value" in c) {
          var d = n.get(l);
          d && (c.value = u(d));
        } else if (c === void 0) {
          var f = n.get(l), h = f?.v;
          if (f !== void 0 && h !== ht)
            return {
              enumerable: !0,
              configurable: !0,
              value: h,
              writable: !0
            };
        }
        return c;
      },
      has(a, l) {
        if (l === _n)
          return !0;
        var c = n.get(l), d = c !== void 0 && c.v !== ht || Reflect.has(a, l);
        if (c !== void 0 || De !== null && (!d || Hn(a, l)?.writable)) {
          c === void 0 && (c = s(() => {
            var h = d ? Ct(a[l]) : ht, g = /* @__PURE__ */ Pe(h);
            return g;
          }), n.set(l, c));
          var f = u(c);
          if (f === ht)
            return !1;
        }
        return d;
      },
      set(a, l, c, d) {
        var f = n.get(l), h = l in a;
        if (r && l === "length")
          for (var g = c; g < /** @type {Source<number>} */
          f.v; g += 1) {
            var v = n.get(g + "");
            v !== void 0 ? Q(v, ht) : g in a && (v = s(() => /* @__PURE__ */ Pe(ht)), n.set(g + "", v));
          }
        if (f === void 0)
          (!h || Hn(a, l)?.writable) && (f = s(() => /* @__PURE__ */ Pe(void 0)), Q(f, Ct(c)), n.set(l, f));
        else {
          h = f.v !== ht;
          var p = s(() => Ct(c));
          Q(f, p);
        }
        var w = Reflect.getOwnPropertyDescriptor(a, l);
        if (w?.set && w.set.call(d, c), !h) {
          if (r && typeof l == "string") {
            var b = (
              /** @type {Source<number>} */
              n.get("length")
            ), k = Number(l);
            Number.isInteger(k) && k >= b.v && Q(b, k + 1);
          }
          Po(o);
        }
        return !0;
      },
      ownKeys(a) {
        u(o);
        var l = Reflect.ownKeys(a).filter((f) => {
          var h = n.get(f);
          return h === void 0 || h.v !== ht;
        });
        for (var [c, d] of n)
          d.v !== ht && !(c in a) && l.push(c);
        return l;
      },
      setPrototypeOf() {
        Xg();
      }
    }
  );
}
function zl(e) {
  try {
    if (e !== null && typeof e == "object" && _n in e)
      return e[_n];
  } catch {
  }
  return e;
}
function pv(e, t) {
  return Object.is(zl(e), zl(t));
}
var zt, Ou, zu, Vu;
function na() {
  if (zt === void 0) {
    zt = window, Ou = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    zu = Hn(t, "firstChild").get, Vu = Hn(t, "nextSibling").get, $l(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), $l(n) && (n.__t = void 0);
  }
}
function St(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function ot(e) {
  return zu.call(e);
}
// @__NO_SIDE_EFFECTS__
function Yt(e) {
  return Vu.call(e);
}
function F(e, t) {
  if (!we)
    return /* @__PURE__ */ ot(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ ot(Te)
  );
  if (n === null)
    n = Te.appendChild(St());
  else if (t && n.nodeType !== hs) {
    var r = St();
    return n?.before(r), Qe(r), r;
  }
  return Qe(n), n;
}
function oe(e, t = !1) {
  if (!we) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ ot(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Yt(n) : n;
  }
  if (t && Te?.nodeType !== hs) {
    var r = St();
    return Te?.before(r), Qe(r), r;
  }
  return Te;
}
function L(e, t = 1, n = !1) {
  let r = we ? Te : e;
  for (var o; t--; )
    o = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ Yt(r);
  if (!we)
    return r;
  if (n && r?.nodeType !== hs) {
    var i = St();
    return r === null ? o?.after(i) : r.before(i), Qe(i), i;
  }
  return Qe(r), /** @type {TemplateNode} */
  r;
}
function Xa(e) {
  e.textContent = "";
}
function Iu() {
  return !1;
}
function mv(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, gr(() => {
      document.activeElement === n && e.focus();
    });
  }
}
function yv(e) {
  we && /* @__PURE__ */ ot(e) !== null && Xa(e);
}
let Vl = !1;
function Lu() {
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
function vs(e) {
  var t = He, n = De;
  It(null), Jt(null);
  try {
    return e();
  } finally {
    It(t), Jt(n);
  }
}
function Hu(e, t, n, r = n) {
  e.addEventListener(t, () => vs(n));
  const o = e.__on_r;
  o ? e.__on_r = () => {
    o(), r(!0);
  } : e.__on_r = () => r(!0), Lu();
}
function Ru(e) {
  De === null && (He === null && Kg(), Fg()), Fr && Bg();
}
function wv(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Qt(e, t, n) {
  var r = De;
  r !== null && (r.f & Wt) !== 0 && (e |= Wt);
  var o = {
    ctx: qe,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Rt | ln,
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
      Do(o), o.f |= fs;
    } catch (a) {
      throw ut(o), a;
    }
  else t !== null && Dr(o);
  var i = o;
  if (n && i.deps === null && i.teardown === null && i.nodes_start === null && i.first === i.last && // either `null`, or a singular child
  (i.f & Hr) === 0 && (i = i.first, (e & Zn) !== 0 && (e & Fn) !== 0 && i !== null && (i.f |= Fn)), i !== null && (i.parent = r, r !== null && wv(i, r), He !== null && (He.f & vt) !== 0 && (e & hr) === 0)) {
    var s = (
      /** @type {Derived} */
      He
    );
    (s.effects ??= []).push(i);
  }
  return o;
}
function $o() {
  return He !== null && !xn;
}
function ps(e) {
  const t = Qt(us, null, !1);
  return kt(t, _t), t.teardown = e, t;
}
function Ue(e) {
  Ru();
  var t = (
    /** @type {Effect} */
    De.f
  ), n = !He && (t & Yn) !== 0 && (t & fs) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      qe
    );
    (r.e ??= []).push(e);
  } else
    return Bu(e);
}
function Bu(e) {
  return Qt(Ha | yu, e, !1);
}
function Kt(e) {
  return Ru(), Qt(us | yu, e, !0);
}
function go(e) {
  sn.ensure();
  const t = Qt(hr | Hr, e, !0);
  return () => {
    ut(t);
  };
}
function bv(e) {
  sn.ensure();
  const t = Qt(hr | Hr, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Xr(t, () => {
      ut(t), r(void 0);
    }) : (ut(t), r(void 0));
  });
}
function vo(e) {
  return Qt(Ha, e, !1);
}
function xv(e) {
  return Qt(Ba | Hr, e, !0);
}
function Rr(e, t = 0) {
  return Qt(us | t, e, !0);
}
function Ee(e, t = [], n = [], r = []) {
  Pu(r, t, n, (o) => {
    Qt(us, () => e(...o.map(u)), !0);
  });
}
function Br(e, t = 0) {
  var n = Qt(Zn | t, e, !0);
  return n;
}
function Fu(e, t = 0) {
  var n = Qt(mu | t, e, !0);
  return n;
}
function Vt(e) {
  return Qt(Yn | Hr, e, !0);
}
function Ku(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Fr, r = He;
    Il(!0), It(null);
    try {
      t.call(null);
    } finally {
      Il(n), It(r);
    }
  }
}
function Wu(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const o = n.ac;
    o !== null && vs(() => {
      o.abort(Yr);
    });
    var r = n.next;
    (n.f & hr) !== 0 ? n.parent = null : ut(n, t), n = r;
  }
}
function _v(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & Yn) === 0 && ut(t), t = n;
  }
}
function ut(e, t = !0) {
  var n = !1;
  (t || (e.f & Ra) !== 0) && e.nodes_start !== null && e.nodes_end !== null && (Zu(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), n = !0), Wu(e, t && !n), Hi(e, 0), kt(e, Rn);
  var r = e.transitions;
  if (r !== null)
    for (const i of r)
      i.stop();
  Ku(e);
  var o = e.parent;
  o !== null && o.first !== null && Yu(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = e.ac = null;
}
function Zu(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Yt(e)
    );
    e.remove(), e = n;
  }
}
function Yu(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function Xr(e, t, n = !0) {
  var r = [];
  qa(e, r, !0), ju(r, () => {
    n && ut(e), t && t();
  });
}
function ju(e, t) {
  var n = e.length;
  if (n > 0) {
    var r = () => --n || t();
    for (var o of e)
      o.out(r);
  } else
    t();
}
function qa(e, t, n) {
  if ((e.f & Wt) === 0) {
    if (e.f ^= Wt, e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || n) && t.push(s);
    for (var r = e.first; r !== null; ) {
      var o = r.next, i = (r.f & Fn) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (r.f & Yn) !== 0 && (e.f & Zn) !== 0;
      qa(r, t, i ? n : !1), r = o;
    }
  }
}
function Ga(e) {
  Xu(e, !0);
}
function Xu(e, t) {
  if ((e.f & Wt) !== 0) {
    e.f ^= Wt, (e.f & _t) === 0 && (kt(e, Rt), Dr(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, o = (n.f & Fn) !== 0 || (n.f & Yn) !== 0;
      Xu(n, o ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || t) && i.in();
  }
}
function qu(e, t) {
  for (var n = e.nodes_start, r = e.nodes_end; n !== null; ) {
    var o = n === r ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Yt(n)
    );
    t.append(n), n = o;
  }
}
let ar = !1;
function Li(e) {
  ar = e;
}
let Fr = !1;
function Il(e) {
  Fr = e;
}
let He = null, xn = !1;
function It(e) {
  He = e;
}
let De = null;
function Jt(e) {
  De = e;
}
let Bn = null;
function Gu(e) {
  He !== null && (Bn === null ? Bn = [e] : Bn.push(e));
}
let Tt = null, Ft = 0, Xt = null;
function Cv(e) {
  Xt = e;
}
let Uu = 1, Mo = 0, Nr = Mo;
function Ll(e) {
  Nr = e;
}
function Ju() {
  return ++Uu;
}
function qo(e) {
  var t = e.f;
  if ((t & Rt) !== 0)
    return !0;
  if (t & vt && (e.f &= ~$r), (t & jn) !== 0) {
    var n = e.deps;
    if (n !== null)
      for (var r = n.length, o = 0; o < r; o++) {
        var i = n[o];
        if (qo(
          /** @type {Derived} */
          i
        ) && Au(
          /** @type {Derived} */
          i
        ), i.wv > e.wv)
          return !0;
      }
    (t & ln) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    Gt === null && kt(e, _t);
  }
  return !1;
}
function Qu(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !Bn?.includes(e))
    for (var o = 0; o < r.length; o++) {
      var i = r[o];
      (i.f & vt) !== 0 ? Qu(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? kt(i, Rt) : (i.f & _t) !== 0 && kt(i, jn), Dr(
        /** @type {Effect} */
        i
      ));
    }
}
function ed(e) {
  var t = Tt, n = Ft, r = Xt, o = He, i = Bn, s = qe, a = xn, l = Nr, c = e.f;
  Tt = /** @type {null | Value[]} */
  null, Ft = 0, Xt = null, He = (c & (Yn | hr)) === 0 ? e : null, Bn = null, Qr(e.ctx), xn = !1, Nr = ++Mo, e.ac !== null && (vs(() => {
    e.ac.abort(Yr);
  }), e.ac = null);
  try {
    e.f |= Qs;
    var d = (
      /** @type {Function} */
      e.fn
    ), f = d(), h = e.deps;
    if (Tt !== null) {
      var g;
      if (Hi(e, Ft), h !== null && Ft > 0)
        for (h.length = Ft + Tt.length, g = 0; g < Tt.length; g++)
          h[Ft + g] = Tt[g];
      else
        e.deps = h = Tt;
      if (ar && $o() && (e.f & ln) !== 0)
        for (g = Ft; g < h.length; g++)
          (h[g].reactions ??= []).push(e);
    } else h !== null && Ft < h.length && (Hi(e, Ft), h.length = Ft);
    if (jo() && Xt !== null && !xn && h !== null && (e.f & (vt | jn | Rt)) === 0)
      for (g = 0; g < /** @type {Source[]} */
      Xt.length; g++)
        Qu(
          Xt[g],
          /** @type {Effect} */
          e
        );
    return o !== null && o !== e && (Mo++, Xt !== null && (r === null ? r = Xt : r.push(.../** @type {Source[]} */
    Xt))), (e.f & ir) !== 0 && (e.f ^= ir), f;
  } catch (v) {
    return ku(v);
  } finally {
    e.f ^= Qs, Tt = t, Ft = n, Xt = r, He = o, Bn = i, Qr(s), xn = a, Nr = l;
  }
}
function kv(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = zg.call(n, e);
    if (r !== -1) {
      var o = n.length - 1;
      o === 0 ? n = t.reactions = null : (n[r] = n[o], n.pop());
    }
  }
  n === null && (t.f & vt) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Tt === null || !Tt.includes(t)) && (kt(t, jn), (t.f & ln) !== 0 && (t.f ^= ln, t.f &= ~$r), Tu(
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
      kv(e, n[r]);
}
function Do(e) {
  var t = e.f;
  if ((t & Rn) === 0) {
    kt(e, _t);
    var n = De, r = ar;
    De = e, ar = !0;
    try {
      (t & (Zn | mu)) !== 0 ? _v(e) : Wu(e), Ku(e);
      var o = ed(e);
      e.teardown = typeof o == "function" ? o : null, e.wv = Uu;
      var i;
      Us && Qg && (e.f & Rt) !== 0 && e.deps;
    } finally {
      ar = r, De = n;
    }
  }
}
async function Sv() {
  await Promise.resolve(), m();
}
function u(e) {
  var t = e.f, n = (t & vt) !== 0;
  if (He !== null && !xn) {
    var r = De !== null && (De.f & Rn) !== 0;
    if (!r && !Bn?.includes(e)) {
      var o = He.deps;
      if ((He.f & Qs) !== 0)
        e.rv < Mo && (e.rv = Mo, Tt === null && o !== null && o[Ft] === e ? Ft++ : Tt === null ? Tt = [e] : Tt.includes(e) || Tt.push(e));
      else {
        (He.deps ??= []).push(e);
        var i = e.reactions;
        i === null ? e.reactions = [He] : i.includes(He) || i.push(He);
      }
    }
  }
  if (Fr) {
    if (sr.has(e))
      return sr.get(e);
    if (n) {
      var s = (
        /** @type {Derived} */
        e
      ), a = s.v;
      return ((s.f & _t) === 0 && s.reactions !== null || nd(s)) && (a = ja(s)), sr.set(s, a), a;
    }
  } else n && (!Gt?.has(e) || Ke?.is_fork && !$o()) && (s = /** @type {Derived} */
  e, qo(s) && Au(s), ar && $o() && (s.f & ln) === 0 && td(s));
  if (Gt?.has(e))
    return Gt.get(e);
  if ((e.f & ir) !== 0)
    throw e.v;
  return e.v;
}
function td(e) {
  if (e.deps !== null) {
    e.f ^= ln;
    for (const t of e.deps)
      (t.reactions ??= []).push(e), (t.f & vt) !== 0 && (t.f & ln) === 0 && td(
        /** @type {Derived} */
        t
      );
  }
}
function nd(e) {
  if (e.v === ht) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (sr.has(t) || (t.f & vt) !== 0 && nd(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function Je(e) {
  var t = xn;
  try {
    return xn = !0, e();
  } finally {
    xn = t;
  }
}
const Ev = -7169;
function kt(e, t) {
  e.f = e.f & Ev | t;
}
function Nv(e, t) {
  var n = {};
  for (var r in e)
    t.includes(r) || (n[r] = e[r]);
  for (var o of Object.getOwnPropertySymbols(e))
    Object.propertyIsEnumerable.call(e, o) && !t.includes(o) && (n[o] = e[o]);
  return n;
}
function Ua(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (_n in e)
      ra(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && _n in n && ra(n);
      }
  }
}
function ra(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e)
      try {
        ra(e[r], t);
      } catch {
      }
    const n = cs(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = gu(n);
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
const rd = /* @__PURE__ */ new Set(), oa = /* @__PURE__ */ new Set();
function Ja(e, t, n, r = {}) {
  function o(i) {
    if (r.capture || _o.call(t, i), !i.cancelBubble)
      return vs(() => n?.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? gr(() => {
    t.addEventListener(e, o, r);
  }) : t.addEventListener(e, o, r), o;
}
function En(e, t, n, r = {}) {
  var o = Ja(t, e, n, r);
  return () => {
    e.removeEventListener(t, o, r);
  };
}
function Ri(e, t, n, r, o) {
  var i = { capture: r, passive: o }, s = Ja(e, t, n, i);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && ps(() => {
    t.removeEventListener(e, s, i);
  });
}
function vr(e) {
  for (var t = 0; t < e.length; t++)
    rd.add(e[t]);
  for (var n of oa)
    n(e);
}
let Hl = null;
function _o(e) {
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, o = e.composedPath?.() || [], i = (
    /** @type {null | Element} */
    o[0] || e.target
  );
  Hl = e;
  var s = 0, a = Hl === e && e.__root;
  if (a) {
    var l = o.indexOf(a);
    if (l !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var c = o.indexOf(t);
    if (c === -1)
      return;
    l <= c && (s = l);
  }
  if (i = /** @type {Element} */
  o[s] || e.target, i !== t) {
    zi(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    var d = He, f = De;
    It(null), Jt(null);
    try {
      for (var h, g = []; i !== null; ) {
        var v = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var p = i["__" + r];
          p != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i) && p.call(i, e);
        } catch (w) {
          h ? g.push(w) : h = w;
        }
        if (e.cancelBubble || v === t || v === null)
          break;
        i = v;
      }
      if (h) {
        for (let w of g)
          queueMicrotask(() => {
            throw w;
          });
        throw h;
      }
    } finally {
      e.__root = t, delete e.currentTarget, It(d), Jt(f);
    }
  }
}
function Qa(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
function Ht(e, t) {
  var n = (
    /** @type {Effect} */
    De
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function te(e, t) {
  var n = (t & du) !== 0, r = (t & Mg) !== 0, o, i = !e.startsWith("<!>");
  return () => {
    if (we)
      return Ht(Te, null), Te;
    o === void 0 && (o = Qa(i ? e : "<!>" + e), n || (o = /** @type {Node} */
    /* @__PURE__ */ ot(o)));
    var s = (
      /** @type {TemplateNode} */
      r || Ou ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ ot(s)
      ), l = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      Ht(a, l);
    } else
      Ht(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function Pv(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), o = (t & du) !== 0, i = `<${n}>${r ? e : "<!>" + e}</${n}>`, s;
  return () => {
    if (we)
      return Ht(Te, null), Te;
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        Qa(i)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ ot(a)
      );
      if (o)
        for (s = document.createDocumentFragment(); /* @__PURE__ */ ot(l); )
          s.appendChild(
            /** @type {Node} */
            /* @__PURE__ */ ot(l)
          );
      else
        s = /** @type {Element} */
        /* @__PURE__ */ ot(l);
    }
    var c = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    if (o) {
      var d = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ ot(c)
      ), f = (
        /** @type {TemplateNode} */
        c.lastChild
      );
      Ht(d, f);
    } else
      Ht(c, c);
    return c;
  };
}
// @__NO_SIDE_EFFECTS__
function pe(e, t) {
  return /* @__PURE__ */ Pv(e, t, "svg");
}
function Ne(e = "") {
  if (!we) {
    var t = St(e + "");
    return Ht(t, t), t;
  }
  var n = Te;
  return n.nodeType !== hs && (n.before(n = St()), Qe(n)), Ht(n, n), n;
}
function _e() {
  if (we)
    return Ht(Te, null), Te;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = St();
  return e.append(t, n), Ht(t, n), e;
}
function D(e, t) {
  if (we) {
    var n = (
      /** @type {Effect} */
      De
    );
    ((n.f & fs) === 0 || n.nodes_end === null) && (n.nodes_end = Te), Sn();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function Tv() {
  if (we && Te && Te.nodeType === Xn && Te.textContent?.startsWith("$")) {
    const e = Te.textContent.substring(1);
    return Sn(), e;
  }
  return (window.__svelte ??= {}).uid ??= 1, `c${window.__svelte.uid++}`;
}
function Av(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const $v = [
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
function Mv(e) {
  return $v.includes(e);
}
const Dv = {
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
function Ov(e) {
  return e = e.toLowerCase(), Dv[e] ?? e;
}
const zv = ["touchstart", "touchmove"];
function Vv(e) {
  return zv.includes(e);
}
const Iv = (
  /** @type {const} */
  ["textarea", "script", "style", "title"]
);
function Lv(e) {
  return Iv.includes(
    /** @type {typeof RAW_TEXT_ELEMENTS[number]} */
    e
  );
}
function Xe(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = n + "");
}
function od(e, t) {
  return id(e, t);
}
function Hv(e, t) {
  na(), t.intro = t.intro ?? !1;
  const n = t.target, r = we, o = Te;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ ot(n)
    ); i && (i.nodeType !== Xn || /** @type {Comment} */
    i.data !== fu); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ Yt(i);
    if (!i)
      throw Ar;
    At(!0), Qe(
      /** @type {Comment} */
      i
    );
    const s = id(e, { ...t, anchor: i });
    return At(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s instanceof Error && s.message.split(`
`).some((a) => a.startsWith("https://svelte.dev/e/")))
      throw s;
    return s !== Ar && console.warn("Failed to hydrate: ", s), t.recover === !1 && Zg(), na(), Xa(n), At(!1), od(e, t);
  } finally {
    At(r), Qe(o);
  }
}
const Wr = /* @__PURE__ */ new Map();
function id(e, { target: t, anchor: n, props: r = {}, events: o, context: i, intro: s = !0 }) {
  na();
  var a = /* @__PURE__ */ new Set(), l = (f) => {
    for (var h = 0; h < f.length; h++) {
      var g = f[h];
      if (!a.has(g)) {
        a.add(g);
        var v = Vv(g);
        t.addEventListener(g, _o, { passive: v });
        var p = Wr.get(g);
        p === void 0 ? (document.addEventListener(g, _o, { passive: v }), Wr.set(g, 1)) : Wr.set(g, p + 1);
      }
    }
  };
  l(La(rd)), oa.add(l);
  var c = void 0, d = bv(() => {
    var f = n ?? t.appendChild(St());
    return av(
      /** @type {TemplateNode} */
      f,
      {
        pending: () => {
        }
      },
      (h) => {
        if (i) {
          ce({});
          var g = (
            /** @type {ComponentContext} */
            qe
          );
          g.c = i;
        }
        if (o && (r.$$events = o), we && Ht(
          /** @type {TemplateNode} */
          h,
          null
        ), c = e(h, r) || {}, we && (De.nodes_end = Te, Te === null || Te.nodeType !== Xn || /** @type {Comment} */
        Te.data !== Ia))
          throw Yo(), Ar;
        i && ue();
      }
    ), () => {
      for (var h of a) {
        t.removeEventListener(h, _o);
        var g = (
          /** @type {number} */
          Wr.get(h)
        );
        --g === 0 ? (document.removeEventListener(h, _o), Wr.delete(h)) : Wr.set(h, g);
      }
      oa.delete(l), f !== n && f.parentNode?.removeChild(f);
    };
  });
  return ia.set(c, d), c;
}
let ia = /* @__PURE__ */ new WeakMap();
function Rv(e, t) {
  const n = ia.get(e);
  return n ? (ia.delete(e), n(t)) : Promise.resolve();
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
      Ke
    );
    if (this.#t.has(t)) {
      var n = (
        /** @type {Key} */
        this.#t.get(t)
      ), r = this.#e.get(n);
      if (r)
        Ga(r), this.#r.delete(n);
      else {
        var o = this.#n.get(n);
        o && (this.#e.set(n, o.effect), this.#n.delete(n), o.fragment.lastChild.remove(), this.anchor.before(o.fragment), r = o.effect);
      }
      for (const [i, s] of this.#t) {
        if (this.#t.delete(i), i === t)
          break;
        const a = this.#n.get(s);
        a && (ut(a.effect), this.#n.delete(s));
      }
      for (const [i, s] of this.#e) {
        if (i === n || this.#r.has(i)) continue;
        const a = () => {
          if (Array.from(this.#t.values()).includes(i)) {
            var c = document.createDocumentFragment();
            qu(s, c), c.append(St()), this.#n.set(i, { effect: s, fragment: c });
          } else
            ut(s);
          this.#r.delete(i), this.#e.delete(i);
        };
        this.#i || !r ? (this.#r.add(i), Xr(s, a, !1)) : a();
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
      n.includes(r) || (ut(o.effect), this.#n.delete(r));
  };
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, n) {
    var r = (
      /** @type {Batch} */
      Ke
    ), o = Iu();
    if (n && !this.#e.has(t) && !this.#n.has(t))
      if (o) {
        var i = document.createDocumentFragment(), s = St();
        i.append(s), this.#n.set(t, {
          effect: Vt(() => n(s)),
          fragment: i
        });
      } else
        this.#e.set(
          t,
          Vt(() => n(this.anchor))
        );
    if (this.#t.set(r, t), o) {
      for (const [a, l] of this.#e)
        a === t ? r.skipped_effects.delete(l) : r.skipped_effects.add(l);
      for (const [a, l] of this.#n)
        a === t ? r.skipped_effects.delete(l.effect) : r.skipped_effects.add(l.effect);
      r.oncommit(this.#o), r.ondiscard(this.#s);
    } else
      we && (this.anchor = Te), this.#o();
  }
}
function je(e, t, ...n) {
  var r = new ms(e);
  Br(() => {
    const o = t() ?? null;
    r.ensure(o, o && ((i) => o(i, ...n)));
  }, Fn);
}
function Tn(e) {
  qe === null && Ka(), fo && qe.l !== null ? Bv(qe).m.push(e) : Ue(() => {
    const t = Je(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Go(e) {
  qe === null && Ka(), Tn(() => () => Je(e));
}
function Bv(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ??= { a: [], b: [], m: [] };
}
function Fv() {
  return Symbol(hu);
}
function se(e, t, n = !1) {
  we && Sn();
  var r = new ms(e), o = n ? Fn : 0;
  function i(s, a) {
    if (we) {
      const c = wu(e) === as;
      if (s === c) {
        var l = Vi();
        Qe(l), r.anchor = l, At(!1), r.ensure(s, a), At(!0);
        return;
      }
    }
    r.ensure(s, a);
  }
  Br(() => {
    var s = !1;
    t((a, l = !0) => {
      s = !0, i(l, a);
    }), s || i(!1, null);
  }, o);
}
function Kv(e, t) {
  we && Qe(
    /** @type {TemplateNode} */
    /* @__PURE__ */ ot(e)
  ), Rr(() => {
    var n = t();
    for (var r in n) {
      var o = n[r];
      o ? e.style.setProperty(r, o) : e.style.removeProperty(r);
    }
  });
}
function ys(e, t, n = !1, r = !1, o = !1) {
  var i = e, s = "";
  Ee(() => {
    var a = (
      /** @type {Effect} */
      De
    );
    if (s === (s = t() ?? "")) {
      we && Sn();
      return;
    }
    if (a.nodes_start !== null && (Zu(
      a.nodes_start,
      /** @type {TemplateNode} */
      a.nodes_end
    ), a.nodes_start = a.nodes_end = null), s !== "") {
      if (we) {
        Te.data;
        for (var l = Sn(), c = l; l !== null && (l.nodeType !== Xn || /** @type {Comment} */
        l.data !== ""); )
          c = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ Yt(l);
        if (l === null)
          throw Yo(), Ar;
        Ht(Te, c), i = Qe(l);
        return;
      }
      var d = s + "";
      n ? d = `<svg>${d}</svg>` : r && (d = `<math>${d}</math>`);
      var f = Qa(d);
      if ((n || r) && (f = /** @type {Element} */
      /* @__PURE__ */ ot(f)), Ht(
        /** @type {TemplateNode} */
        /* @__PURE__ */ ot(f),
        /** @type {TemplateNode} */
        f.lastChild
      ), n || r)
        for (; /* @__PURE__ */ ot(f); )
          i.before(
            /** @type {Node} */
            /* @__PURE__ */ ot(f)
          );
      else
        i.before(f);
    }
  });
}
function Uo(e, t, n) {
  we && Sn();
  var r = new ms(e);
  Br(() => {
    var o = t() ?? null;
    r.ensure(o, o && ((i) => n(i, o)));
  }, Fn);
}
function sd(e, t, n, r, o, i) {
  let s = we;
  we && Sn();
  var a = null;
  we && Te.nodeType === Hg && (a = /** @type {Element} */
  Te, Sn());
  var l = (
    /** @type {TemplateNode} */
    we ? Te : e
  ), c = new ms(l, !1);
  Br(() => {
    const d = t() || null;
    var f = n || d === "svg" ? Og : null;
    if (d === null) {
      c.ensure(null, null);
      return;
    }
    return c.ensure(d, (h) => {
      if (d) {
        if (a = we ? (
          /** @type {Element} */
          a
        ) : f ? document.createElementNS(f, d) : document.createElement(d), Ht(a, a), r) {
          we && Lv(d) && a.append(document.createComment(""));
          var g = (
            /** @type {TemplateNode} */
            we ? /* @__PURE__ */ ot(a) : a.appendChild(St())
          );
          we && (g === null ? At(!1) : Qe(g)), r(a, g);
        }
        De.nodes_end = a, h.before(a);
      }
      we && Qe(h);
    }), () => {
    };
  }, Fn), ps(() => {
  }), s && (At(!0), Qe(l));
}
function Wv(e, t) {
  let n = null, r = we;
  var o;
  if (we) {
    n = Te;
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ ot(document.head)
    ); i !== null && (i.nodeType !== Xn || /** @type {Comment} */
    i.data !== e); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ Yt(i);
    if (i === null)
      At(!1);
    else {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Yt(i)
      );
      i.remove(), Qe(s);
    }
  }
  we || (o = document.head.appendChild(St()));
  try {
    Br(() => t(o), Ra);
  } finally {
    r && (At(!0), Qe(
      /** @type {TemplateNode} */
      n
    ));
  }
}
function Ze(e, t) {
  vo(() => {
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
function xt(e, t, n) {
  vo(() => {
    var r = Je(() => t(e, n?.()) || {});
    if (n && r?.update) {
      var o = !1, i = (
        /** @type {any} */
        {}
      );
      Rr(() => {
        var s = n();
        Ua(s), o && xu(i, s) && (i = s, r.update(s));
      }), o = !0;
    }
    if (r?.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function Zv(e, t) {
  var n = void 0, r;
  Fu(() => {
    n !== (n = t()) && (r && (ut(r), r = null), n && (r = Vt(() => {
      vo(() => (
        /** @type {(node: Element) => void} */
        n(e)
      ));
    })));
  });
}
function ad(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = ad(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function To() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = ad(e)) && (r && (r += " "), r += t);
  return r;
}
function qn(e) {
  return typeof e == "object" ? To(e) : e ?? "";
}
const Rl = [...` 	
\r\f \v\uFEFF`];
function Yv(e, t, n) {
  var r = e == null ? "" : "" + e;
  if (t && (r = r ? r + " " + t : t), n) {
    for (var o in n)
      if (n[o])
        r = r ? r + " " + o : o;
      else if (r.length)
        for (var i = o.length, s = 0; (s = r.indexOf(o, s)) >= 0; ) {
          var a = s + i;
          (s === 0 || Rl.includes(r[s - 1])) && (a === r.length || Rl.includes(r[a])) ? r = (s === 0 ? "" : r.substring(0, s)) + r.substring(a + 1) : s = a;
        }
  }
  return r === "" ? null : r;
}
function Bl(e, t = !1) {
  var n = t ? " !important;" : ";", r = "";
  for (var o in e) {
    var i = e[o];
    i != null && i !== "" && (r += " " + o + ": " + i + n);
  }
  return r;
}
function Ds(e) {
  return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function jv(e, t) {
  if (t) {
    var n = "", r, o;
    if (Array.isArray(t) ? (r = t[0], o = t[1]) : r = t, e) {
      e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var i = !1, s = 0, a = !1, l = [];
      r && l.push(...Object.keys(r).map(Ds)), o && l.push(...Object.keys(o).map(Ds));
      var c = 0, d = -1;
      const p = e.length;
      for (var f = 0; f < p; f++) {
        var h = e[f];
        if (a ? h === "/" && e[f - 1] === "*" && (a = !1) : i ? i === h && (i = !1) : h === "/" && e[f + 1] === "*" ? a = !0 : h === '"' || h === "'" ? i = h : h === "(" ? s++ : h === ")" && s--, !a && i === !1 && s === 0) {
          if (h === ":" && d === -1)
            d = f;
          else if (h === ";" || f === p - 1) {
            if (d !== -1) {
              var g = Ds(e.substring(c, d).trim());
              if (!l.includes(g)) {
                h !== ";" && f++;
                var v = e.substring(c, f).trim();
                n += " " + v + ";";
              }
            }
            c = f + 1, d = -1;
          }
        }
      }
    }
    return r && (n += Bl(r)), o && (n += Bl(o, !0)), n = n.trim(), n === "" ? null : n;
  }
  return e == null ? null : String(e);
}
function Bt(e, t, n, r, o, i) {
  var s = e.__className;
  if (we || s !== n || s === void 0) {
    var a = Yv(n, r, i);
    (!we || a !== e.getAttribute("class")) && (a == null ? e.removeAttribute("class") : t ? e.className = a : e.setAttribute("class", a)), e.__className = n;
  } else if (i && o !== i)
    for (var l in i) {
      var c = !!i[l];
      (o == null || c !== !!o[l]) && e.classList.toggle(l, c);
    }
  return i;
}
function Os(e, t = {}, n, r) {
  for (var o in n) {
    var i = n[o];
    t[o] !== i && (n[o] == null ? e.style.removeProperty(o) : e.style.setProperty(o, i, r));
  }
}
function mt(e, t, n, r) {
  var o = e.__style;
  if (we || o !== t) {
    var i = jv(t, r);
    (!we || i !== e.getAttribute("style")) && (i == null ? e.removeAttribute("style") : e.style.cssText = i), e.__style = t;
  } else r && (Array.isArray(r) ? (Os(e, n?.[0], r[0]), Os(e, n?.[1], r[1], "important")) : Os(e, n, r));
  return r;
}
function sa(e, t, n = !1) {
  if (e.multiple) {
    if (t == null)
      return;
    if (!ls(t))
      return Ug();
    for (var r of e.options)
      r.selected = t.includes(Fl(r));
    return;
  }
  for (r of e.options) {
    var o = Fl(r);
    if (pv(o, t)) {
      r.selected = !0;
      return;
    }
  }
  (!n || t !== void 0) && (e.selectedIndex = -1);
}
function Xv(e) {
  var t = new MutationObserver(() => {
    sa(e, e.__value);
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
  }), ps(() => {
    t.disconnect();
  });
}
function Fl(e) {
  return "__value" in e ? e.__value : e.value;
}
const tr = Symbol("class"), bn = Symbol("style"), ld = Symbol("is custom element"), cd = Symbol("is html");
function lr(e) {
  if (we) {
    var t = !1, n = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var r = e.value;
          ke(e, "value", null), e.value = r;
        }
        if (e.hasAttribute("checked")) {
          var o = e.checked;
          ke(e, "checked", null), e.checked = o;
        }
      }
    };
    e.__on_r = n, gr(n), Lu();
  }
}
function Ei(e, t) {
  var n = ws(e);
  n.value === (n.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function zs(e, t) {
  var n = ws(e);
  n.checked !== (n.checked = // treat null and undefined the same for the initial value
  t ?? void 0) && (e.checked = t);
}
function qv(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function ke(e, t, n, r) {
  var o = ws(e);
  we && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = n) && (t === "loading" && (e[Lg] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && ud(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function Gv(e, t, n, r, o = !1, i = !1) {
  if (we && o && e.tagName === "INPUT") {
    var s = (
      /** @type {HTMLInputElement} */
      e
    ), a = s.type === "checkbox" ? "defaultChecked" : "defaultValue";
    a in n || lr(s);
  }
  var l = ws(e), c = l[ld], d = !l[cd];
  let f = we && c;
  f && At(!1);
  var h = t || {}, g = e.tagName === "OPTION";
  for (var v in t)
    v in n || (n[v] = null);
  n.class ? n.class = qn(n.class) : (r || n[tr]) && (n.class = null), n[bn] && (n.style ??= null);
  var p = ud(e);
  for (const T in n) {
    let V = n[T];
    if (g && T === "value" && V == null) {
      e.value = e.__value = "", h[T] = V;
      continue;
    }
    if (T === "class") {
      var w = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      Bt(e, w, V, r, t?.[tr], n[tr]), h[T] = V, h[tr] = n[tr];
      continue;
    }
    if (T === "style") {
      mt(e, V, t?.[bn], n[bn]), h[T] = V, h[bn] = n[bn];
      continue;
    }
    var b = h[T];
    if (!(V === b && !(V === void 0 && e.hasAttribute(T)))) {
      h[T] = V;
      var k = T[0] + T[1];
      if (k !== "$$")
        if (k === "on") {
          const O = {}, H = "$$" + T;
          let Z = T.slice(2);
          var E = Mv(Z);
          if (Av(Z) && (Z = Z.slice(0, -7), O.capture = !0), !E && b) {
            if (V != null) continue;
            e.removeEventListener(Z, h[H], O), h[H] = null;
          }
          if (V != null)
            if (E)
              e[`__${Z}`] = V, vr([Z]);
            else {
              let I = function(P) {
                h[T].call(this, P);
              };
              h[H] = Ja(Z, e, I, O);
            }
          else E && (e[`__${Z}`] = void 0);
        } else if (T === "style")
          ke(e, T, V);
        else if (T === "autofocus")
          mv(
            /** @type {HTMLElement} */
            e,
            !!V
          );
        else if (!c && (T === "__value" || T === "value" && V != null))
          e.value = e.__value = V;
        else if (T === "selected" && g)
          qv(
            /** @type {HTMLOptionElement} */
            e,
            V
          );
        else {
          var _ = T;
          d || (_ = Ov(_));
          var S = _ === "defaultValue" || _ === "defaultChecked";
          if (V == null && !c && !S)
            if (l[T] = null, _ === "value" || _ === "checked") {
              let O = (
                /** @type {HTMLInputElement} */
                e
              );
              const H = t === void 0;
              if (_ === "value") {
                let Z = O.defaultValue;
                O.removeAttribute(_), O.defaultValue = Z, O.value = O.__value = H ? Z : null;
              } else {
                let Z = O.defaultChecked;
                O.removeAttribute(_), O.defaultChecked = Z, O.checked = H ? Z : !1;
              }
            } else
              e.removeAttribute(T);
          else S || p.includes(_) && (c || typeof V != "string") ? (e[_] = V, _ in l && (l[_] = ht)) : typeof V != "function" && ke(e, _, V);
        }
    }
  }
  return f && At(!0), h;
}
function Ge(e, t, n = [], r = [], o = [], i, s = !1, a = !1) {
  Pu(o, n, r, (l) => {
    var c = void 0, d = {}, f = e.nodeName === "SELECT", h = !1;
    if (Fu(() => {
      var v = t(...l.map(u)), p = Gv(
        e,
        c,
        v,
        i,
        s,
        a
      );
      h && f && "value" in v && sa(
        /** @type {HTMLSelectElement} */
        e,
        v.value
      );
      for (let b of Object.getOwnPropertySymbols(d))
        v[b] || ut(d[b]);
      for (let b of Object.getOwnPropertySymbols(v)) {
        var w = v[b];
        b.description === hu && (!c || w !== c[b]) && (d[b] && ut(d[b]), d[b] = Vt(() => Zv(e, () => w))), p[b] = w;
      }
      c = p;
    }), f) {
      var g = (
        /** @type {HTMLSelectElement} */
        e
      );
      vo(() => {
        sa(
          g,
          /** @type {Record<string | symbol, any>} */
          c.value,
          !0
        ), Xv(g);
      });
    }
    h = !0;
  });
}
function ws(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ??= {
      [ld]: e.nodeName.includes("-"),
      [cd]: e.namespaceURI === Dg
    }
  );
}
var Kl = /* @__PURE__ */ new Map();
function ud(e) {
  var t = e.getAttribute("is") || e.nodeName, n = Kl.get(t);
  if (n) return n;
  Kl.set(t, n = []);
  for (var r, o = e, i = Element.prototype; i !== o; ) {
    r = gu(o);
    for (var s in r)
      r[s].set && n.push(s);
    o = cs(o);
  }
  return n;
}
function aa(e, t, n = t) {
  var r = /* @__PURE__ */ new WeakSet();
  Hu(e, "input", async (o) => {
    var i = o ? e.defaultValue : e.value;
    if (i = Vs(e) ? Is(i) : i, n(i), Ke !== null && r.add(Ke), await Sv(), i !== (i = t())) {
      var s = e.selectionStart, a = e.selectionEnd, l = e.value.length;
      if (e.value = i ?? "", a !== null) {
        var c = e.value.length;
        s === a && a === l && c > l ? (e.selectionStart = c, e.selectionEnd = c) : (e.selectionStart = s, e.selectionEnd = Math.min(a, c));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  (we && e.defaultValue !== e.value || // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  Je(t) == null && e.value) && (n(Vs(e) ? Is(e.value) : e.value), Ke !== null && r.add(Ke)), Rr(() => {
    var o = t();
    if (e === document.activeElement) {
      var i = (
        /** @type {Batch} */
        Si ?? Ke
      );
      if (r.has(i))
        return;
    }
    Vs(e) && o === Is(e.value) || e.type === "date" && !o && !e.value || o !== e.value && (e.value = o ?? "");
  });
}
function Vs(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function Is(e) {
  return e === "" ? null : +e;
}
function Uv(e, t, n = t) {
  Hu(e, "change", () => {
    n(e.files);
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  we && e.files && n(e.files), Rr(() => {
    e.files = t();
  });
}
class el {
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
          el.entries.set(n.target, n);
          for (var r of this.#t.get(n.target) || [])
            r(n);
        }
      }
    ));
  }
}
var Jv = /* @__PURE__ */ new el({
  box: "border-box"
});
function Wl(e, t, n) {
  var r = Jv.observe(e, () => n(e[t]));
  vo(() => (Je(() => n(e[t])), r));
}
function Zl(e, t) {
  return e === t || e?.[_n] === t;
}
function dt(e = {}, t, n, r) {
  return vo(() => {
    var o, i;
    return Rr(() => {
      o = i, i = [], Je(() => {
        e !== n(...i) && (t(e, ...i), o && Zl(n(...o), e) && t(null, ...o));
      });
    }), () => {
      gr(() => {
        i && Zl(n(...i), e) && t(null, ...i);
      });
    };
  }), e;
}
function tl(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    qe
  ), n = t.l.u;
  if (!n) return;
  let r = () => Ua(t.s);
  if (e) {
    let o = 0, i = (
      /** @type {Record<string, any>} */
      {}
    );
    const s = /* @__PURE__ */ Xo(() => {
      let a = !1;
      const l = t.s;
      for (const c in l)
        l[c] !== i[c] && (i[c] = l[c], a = !0);
      return a && o++, o;
    });
    r = () => u(s);
  }
  n.b.length && Kt(() => {
    Yl(t, r), Js(n.b);
  }), Ue(() => {
    const o = Je(() => n.m.map(Ig));
    return () => {
      for (const i of o)
        typeof i == "function" && i();
    };
  }), n.a.length && Ue(() => {
    Yl(t, r), Js(n.a);
  });
}
function Yl(e, t) {
  if (e.l.s)
    for (const n of e.l.s) u(n);
  t();
}
let fi = !1;
function Qv(e) {
  var t = fi;
  try {
    return fi = !1, [e(), fi];
  } finally {
    fi = t;
  }
}
const ep = {
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
function Re(e, t, n) {
  return new Proxy(
    { props: e, exclude: t },
    ep
  );
}
const tp = {
  get(e, t) {
    if (!e.exclude.includes(t))
      return u(e.version), t in e.special ? e.special[t]() : e.props[t];
  },
  set(e, t, n) {
    if (!(t in e.special)) {
      var r = De;
      try {
        Jt(e.parent_effect), e.special[t] = y(
          {
            get [t]() {
              return e.props[t];
            }
          },
          /** @type {string} */
          t,
          uu
        );
      } finally {
        Jt(r);
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
function jl(e, t) {
  return new Proxy(
    {
      props: e,
      exclude: t,
      special: {},
      version: cr(0),
      // TODO this is only necessary because we need to track component
      // destruction inside `prop`, because of `bind:this`, but it
      // seems likely that we can simplify `bind:this` instead
      parent_effect: (
        /** @type {Effect} */
        De
      )
    },
    tp
  );
}
const np = {
  get(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (mo(r) && (r = r()), typeof r == "object" && r !== null && t in r) return r[t];
    }
  },
  set(e, t, n) {
    let r = e.props.length;
    for (; r--; ) {
      let o = e.props[r];
      mo(o) && (o = o());
      const i = Hn(o, t);
      if (i && i.set)
        return i.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (mo(r) && (r = r()), typeof r == "object" && r !== null && t in r) {
        const o = Hn(r, t);
        return o && !o.configurable && (o.configurable = !0), o;
      }
    }
  },
  has(e, t) {
    if (t === _n || t === Fa) return !1;
    for (let n of e.props)
      if (mo(n) && (n = n()), n != null && t in n) return !0;
    return !1;
  },
  ownKeys(e) {
    const t = [];
    for (let n of e.props)
      if (mo(n) && (n = n()), !!n) {
        for (const r in n)
          t.includes(r) || t.push(r);
        for (const r of Object.getOwnPropertySymbols(n))
          t.includes(r) || t.push(r);
      }
    return t;
  }
};
function We(...e) {
  return new Proxy({ props: e }, np);
}
function y(e, t, n, r) {
  var o = !fo || (n & Tg) !== 0, i = (n & Ag) !== 0, s = (n & $g) !== 0, a = (
    /** @type {V} */
    r
  ), l = !0, c = () => (l && (l = !1, a = s ? Je(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), a), d;
  if (i) {
    var f = _n in e || Fa in e;
    d = Hn(e, t)?.set ?? (f && t in e ? (E) => e[t] = E : void 0);
  }
  var h, g = !1;
  i ? [h, g] = Qv(() => (
    /** @type {V} */
    e[t]
  )) : h = /** @type {V} */
  e[t], h === void 0 && r !== void 0 && (h = c(), d && (o && Yg(), d(h)));
  var v;
  if (o ? v = () => {
    var E = (
      /** @type {V} */
      e[t]
    );
    return E === void 0 ? c() : (l = !0, E);
  } : v = () => {
    var E = (
      /** @type {V} */
      e[t]
    );
    return E !== void 0 && (a = /** @type {V} */
    void 0), E === void 0 ? a : E;
  }, o && (n & uu) === 0)
    return v;
  if (d) {
    var p = e.$$legacy;
    return (
      /** @type {() => V} */
      function(E, _) {
        return arguments.length > 0 ? ((!o || !_ || p || g) && d(_ ? v() : E), E) : v();
      }
    );
  }
  var w = !1, b = ((n & Pg) !== 0 ? Xo : Ya)(() => (w = !1, v()));
  i && u(b);
  var k = (
    /** @type {Effect} */
    De
  );
  return (
    /** @type {() => V} */
    function(E, _) {
      if (arguments.length > 0) {
        const S = _ ? u(b) : o && i ? Ct(E) : E;
        return Q(b, S), w = !0, a !== void 0 && (a = S), E;
      }
      return Fr && w || (k.f & Rn) !== 0 ? b.v : u(b);
    }
  );
}
function rp(e) {
  return new op(e);
}
class op {
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
      var a = /* @__PURE__ */ Mu(s, !1, !1);
      return n.set(i, a), a;
    };
    const o = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(i, s) {
          return u(n.get(s) ?? r(s, Reflect.get(i, s)));
        },
        has(i, s) {
          return s === Fa ? !0 : (u(n.get(s) ?? r(s, Reflect.get(i, s))), Reflect.has(i, s));
        },
        set(i, s, a) {
          return Q(n.get(s) ?? r(s, a), a), Reflect.set(i, s, a);
        }
      }
    );
    this.#e = (t.hydrate ? Hv : od)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: o,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    }), (!t?.props?.$$host || t.sync === !1) && m(), this.#t = o.$$events;
    for (const i of Object.keys(this.#e))
      i === "$set" || i === "$destroy" || i === "$on" || zi(this, i, {
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
      Rv(this.#e);
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
let dd;
typeof HTMLElement == "function" && (dd = class extends HTMLElement {
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
          r !== "default" && (i.name = r), D(o, i);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const t = {}, n = ip(this);
      for (const r of this.$$s)
        r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = e(r), t.default = !0) : t[r] = e(r));
      for (const r of this.attributes) {
        const o = this.$$g_p(r.name);
        o in this.$$d || (this.$$d[o] = Ni(o, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = rp({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: t,
          $$host: this
        }
      }), this.$$me = go(() => {
        Rr(() => {
          this.$$r = !0;
          for (const r of Oi(this.$$c)) {
            if (!this.$$p_d[r]?.reflect) continue;
            this.$$d[r] = this.$$c[r];
            const o = Ni(
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
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = Ni(e, n, this.$$p_d, "toProp"), this.$$c?.$set({ [e]: this.$$d[e] }));
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
    return Oi(this.$$p_d).find(
      (t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e
    ) || e;
  }
});
function Ni(e, t, n, r) {
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
function ip(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function ae(e, t, n, r, o, i) {
  let s = class extends dd {
    constructor() {
      super(e, n, o), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Oi(t).map(
        (a) => (t[a].attribute || a).toLowerCase()
      );
    }
  };
  return Oi(t).forEach((a) => {
    zi(s.prototype, a, {
      get() {
        return this.$$c && a in this.$$c ? this.$$c[a] : this.$$d[a];
      },
      set(l) {
        l = Ni(a, l, t), this.$$d[a] = l;
        var c = this.$$c;
        if (c) {
          var d = Hn(c, a)?.get;
          d ? c[a] = l : c.$set({ [a]: l });
        }
      }
    });
  }), r.forEach((a) => {
    zi(s.prototype, a, {
      get() {
        return this.$$c?.[a];
      }
    });
  }), e.element = /** @type {any} */
  s, s;
}
var sp = { value: () => {
} };
function bs() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new Pi(n);
}
function Pi(e) {
  this._ = e;
}
function ap(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
Pi.prototype = bs.prototype = {
  constructor: Pi,
  on: function(e, t) {
    var n = this._, r = ap(e + "", n), o, i = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++i < s; ) if ((o = (e = r[i]).type) && (o = lp(n[o], e.name))) return o;
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
    return new Pi(e);
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
function lp(e, t) {
  for (var n = 0, r = e.length, o; n < r; ++n)
    if ((o = e[n]).name === t)
      return o.value;
}
function Xl(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = sp, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var la = "http://www.w3.org/1999/xhtml";
const ql = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: la,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function xs(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), ql.hasOwnProperty(t) ? { space: ql[t], local: e } : e;
}
function cp(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === la && t.documentElement.namespaceURI === la ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function up(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function fd(e) {
  var t = xs(e);
  return (t.local ? up : cp)(t);
}
function dp() {
}
function nl(e) {
  return e == null ? dp : function() {
    return this.querySelector(e);
  };
}
function fp(e) {
  typeof e != "function" && (e = nl(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = new Array(s), l, c, d = 0; d < s; ++d)
      (l = i[d]) && (c = e.call(l, l.__data__, d, i)) && ("__data__" in l && (c.__data__ = l.__data__), a[d] = c);
  return new jt(r, this._parents);
}
function hp(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function gp() {
  return [];
}
function hd(e) {
  return e == null ? gp : function() {
    return this.querySelectorAll(e);
  };
}
function vp(e) {
  return function() {
    return hp(e.apply(this, arguments));
  };
}
function pp(e) {
  typeof e == "function" ? e = vp(e) : e = hd(e);
  for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
    for (var s = t[i], a = s.length, l, c = 0; c < a; ++c)
      (l = s[c]) && (r.push(e.call(l, l.__data__, c, s)), o.push(l));
  return new jt(r, o);
}
function gd(e) {
  return function() {
    return this.matches(e);
  };
}
function vd(e) {
  return function(t) {
    return t.matches(e);
  };
}
var mp = Array.prototype.find;
function yp(e) {
  return function() {
    return mp.call(this.children, e);
  };
}
function wp() {
  return this.firstElementChild;
}
function bp(e) {
  return this.select(e == null ? wp : yp(typeof e == "function" ? e : vd(e)));
}
var xp = Array.prototype.filter;
function _p() {
  return Array.from(this.children);
}
function Cp(e) {
  return function() {
    return xp.call(this.children, e);
  };
}
function kp(e) {
  return this.selectAll(e == null ? _p : Cp(typeof e == "function" ? e : vd(e)));
}
function Sp(e) {
  typeof e != "function" && (e = gd(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, c = 0; c < s; ++c)
      (l = i[c]) && e.call(l, l.__data__, c, i) && a.push(l);
  return new jt(r, this._parents);
}
function pd(e) {
  return new Array(e.length);
}
function Ep() {
  return new jt(this._enter || this._groups.map(pd), this._parents);
}
function Bi(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
Bi.prototype = {
  constructor: Bi,
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
function Np(e) {
  return function() {
    return e;
  };
}
function Pp(e, t, n, r, o, i) {
  for (var s = 0, a, l = t.length, c = i.length; s < c; ++s)
    (a = t[s]) ? (a.__data__ = i[s], r[s] = a) : n[s] = new Bi(e, i[s]);
  for (; s < l; ++s)
    (a = t[s]) && (o[s] = a);
}
function Tp(e, t, n, r, o, i, s) {
  var a, l, c = /* @__PURE__ */ new Map(), d = t.length, f = i.length, h = new Array(d), g;
  for (a = 0; a < d; ++a)
    (l = t[a]) && (h[a] = g = s.call(l, l.__data__, a, t) + "", c.has(g) ? o[a] = l : c.set(g, l));
  for (a = 0; a < f; ++a)
    g = s.call(e, i[a], a, i) + "", (l = c.get(g)) ? (r[a] = l, l.__data__ = i[a], c.delete(g)) : n[a] = new Bi(e, i[a]);
  for (a = 0; a < d; ++a)
    (l = t[a]) && c.get(h[a]) === l && (o[a] = l);
}
function Ap(e) {
  return e.__data__;
}
function $p(e, t) {
  if (!arguments.length) return Array.from(this, Ap);
  var n = t ? Tp : Pp, r = this._parents, o = this._groups;
  typeof e != "function" && (e = Np(e));
  for (var i = o.length, s = new Array(i), a = new Array(i), l = new Array(i), c = 0; c < i; ++c) {
    var d = r[c], f = o[c], h = f.length, g = Mp(e.call(d, d && d.__data__, c, r)), v = g.length, p = a[c] = new Array(v), w = s[c] = new Array(v), b = l[c] = new Array(h);
    n(d, f, p, w, b, g, t);
    for (var k = 0, E = 0, _, S; k < v; ++k)
      if (_ = p[k]) {
        for (k >= E && (E = k + 1); !(S = w[E]) && ++E < v; ) ;
        _._next = S || null;
      }
  }
  return s = new jt(s, r), s._enter = a, s._exit = l, s;
}
function Mp(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Dp() {
  return new jt(this._exit || this._groups.map(pd), this._parents);
}
function Op(e, t, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function zp(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, i = r.length, s = Math.min(o, i), a = new Array(o), l = 0; l < s; ++l)
    for (var c = n[l], d = r[l], f = c.length, h = a[l] = new Array(f), g, v = 0; v < f; ++v)
      (g = c[v] || d[v]) && (h[v] = g);
  for (; l < o; ++l)
    a[l] = n[l];
  return new jt(a, this._parents);
}
function Vp() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, i = r[o], s; --o >= 0; )
      (s = r[o]) && (i && s.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(s, i), i = s);
  return this;
}
function Ip(e) {
  e || (e = Lp);
  function t(f, h) {
    return f && h ? e(f.__data__, h.__data__) : !f - !h;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), i = 0; i < r; ++i) {
    for (var s = n[i], a = s.length, l = o[i] = new Array(a), c, d = 0; d < a; ++d)
      (c = s[d]) && (l[d] = c);
    l.sort(t);
  }
  return new jt(o, this._parents).order();
}
function Lp(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Hp() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function Rp() {
  return Array.from(this);
}
function Bp() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length; o < i; ++o) {
      var s = r[o];
      if (s) return s;
    }
  return null;
}
function Fp() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function Kp() {
  return !this.node();
}
function Wp(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], i = 0, s = o.length, a; i < s; ++i)
      (a = o[i]) && e.call(a, a.__data__, i, o);
  return this;
}
function Zp(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Yp(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function jp(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function Xp(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function qp(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function Gp(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function Up(e, t) {
  var n = xs(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? Yp : Zp : typeof t == "function" ? n.local ? Gp : qp : n.local ? Xp : jp)(n, t));
}
function md(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function Jp(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Qp(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function e1(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function t1(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? Jp : typeof t == "function" ? e1 : Qp)(e, t, n ?? "")) : no(this.node(), e);
}
function no(e, t) {
  return e.style.getPropertyValue(t) || md(e).getComputedStyle(e, null).getPropertyValue(t);
}
function n1(e) {
  return function() {
    delete this[e];
  };
}
function r1(e, t) {
  return function() {
    this[e] = t;
  };
}
function o1(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function i1(e, t) {
  return arguments.length > 1 ? this.each((t == null ? n1 : typeof t == "function" ? o1 : r1)(e, t)) : this.node()[e];
}
function yd(e) {
  return e.trim().split(/^|\s+/);
}
function rl(e) {
  return e.classList || new wd(e);
}
function wd(e) {
  this._node = e, this._names = yd(e.getAttribute("class") || "");
}
wd.prototype = {
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
function bd(e, t) {
  for (var n = rl(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function xd(e, t) {
  for (var n = rl(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
}
function s1(e) {
  return function() {
    bd(this, e);
  };
}
function a1(e) {
  return function() {
    xd(this, e);
  };
}
function l1(e, t) {
  return function() {
    (t.apply(this, arguments) ? bd : xd)(this, e);
  };
}
function c1(e, t) {
  var n = yd(e + "");
  if (arguments.length < 2) {
    for (var r = rl(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? l1 : t ? s1 : a1)(n, t));
}
function u1() {
  this.textContent = "";
}
function d1(e) {
  return function() {
    this.textContent = e;
  };
}
function f1(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function h1(e) {
  return arguments.length ? this.each(e == null ? u1 : (typeof e == "function" ? f1 : d1)(e)) : this.node().textContent;
}
function g1() {
  this.innerHTML = "";
}
function v1(e) {
  return function() {
    this.innerHTML = e;
  };
}
function p1(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function m1(e) {
  return arguments.length ? this.each(e == null ? g1 : (typeof e == "function" ? p1 : v1)(e)) : this.node().innerHTML;
}
function y1() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function w1() {
  return this.each(y1);
}
function b1() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function x1() {
  return this.each(b1);
}
function _1(e) {
  var t = typeof e == "function" ? e : fd(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function C1() {
  return null;
}
function k1(e, t) {
  var n = typeof e == "function" ? e : fd(e), r = t == null ? C1 : typeof t == "function" ? t : nl(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function S1() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function E1() {
  return this.each(S1);
}
function N1() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function P1() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function T1(e) {
  return this.select(e ? P1 : N1);
}
function A1(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function $1(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function M1(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", r = t.indexOf(".");
    return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n };
  });
}
function D1(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, o = t.length, i; n < o; ++n)
        i = t[n], (!e.type || i.type === e.type) && i.name === e.name ? this.removeEventListener(i.type, i.listener, i.options) : t[++r] = i;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function O1(e, t, n) {
  return function() {
    var r = this.__on, o, i = $1(t);
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
function z1(e, t, n) {
  var r = M1(e + ""), o, i = r.length, s;
  if (arguments.length < 2) {
    var a = this.node().__on;
    if (a) {
      for (var l = 0, c = a.length, d; l < c; ++l)
        for (o = 0, d = a[l]; o < i; ++o)
          if ((s = r[o]).type === d.type && s.name === d.name)
            return d.value;
    }
    return;
  }
  for (a = t ? O1 : D1, o = 0; o < i; ++o) this.each(a(r[o], t, n));
  return this;
}
function _d(e, t, n) {
  var r = md(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function V1(e, t) {
  return function() {
    return _d(this, e, t);
  };
}
function I1(e, t) {
  return function() {
    return _d(this, e, t.apply(this, arguments));
  };
}
function L1(e, t) {
  return this.each((typeof t == "function" ? I1 : V1)(e, t));
}
function* H1() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length, s; o < i; ++o)
      (s = r[o]) && (yield s);
}
var Cd = [null];
function jt(e, t) {
  this._groups = e, this._parents = t;
}
function Jo() {
  return new jt([[document.documentElement]], Cd);
}
function R1() {
  return this;
}
jt.prototype = Jo.prototype = {
  constructor: jt,
  select: fp,
  selectAll: pp,
  selectChild: bp,
  selectChildren: kp,
  filter: Sp,
  data: $p,
  enter: Ep,
  exit: Dp,
  join: Op,
  merge: zp,
  selection: R1,
  order: Vp,
  sort: Ip,
  call: Hp,
  nodes: Rp,
  node: Bp,
  size: Fp,
  empty: Kp,
  each: Wp,
  attr: Up,
  style: t1,
  property: i1,
  classed: c1,
  text: h1,
  html: m1,
  raise: w1,
  lower: x1,
  append: _1,
  insert: k1,
  remove: E1,
  clone: T1,
  datum: A1,
  on: z1,
  dispatch: L1,
  [Symbol.iterator]: H1
};
function Ut(e) {
  return typeof e == "string" ? new jt([[document.querySelector(e)]], [document.documentElement]) : new jt([[e]], Cd);
}
function B1(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function rn(e, t) {
  if (e = B1(e), t === void 0 && (t = e.currentTarget), t) {
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
const F1 = { passive: !1 }, Oo = { capture: !0, passive: !1 };
function Ls(e) {
  e.stopImmediatePropagation();
}
function qr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function kd(e) {
  var t = e.document.documentElement, n = Ut(e).on("dragstart.drag", qr, Oo);
  "onselectstart" in t ? n.on("selectstart.drag", qr, Oo) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function Sd(e, t) {
  var n = e.document.documentElement, r = Ut(e).on("dragstart.drag", null);
  t && (r.on("click.drag", qr, Oo), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const hi = (e) => () => e;
function ca(e, {
  sourceEvent: t,
  subject: n,
  target: r,
  identifier: o,
  active: i,
  x: s,
  y: a,
  dx: l,
  dy: c,
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
    dy: { value: c, enumerable: !0, configurable: !0 },
    _: { value: d }
  });
}
ca.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function K1(e) {
  return !e.ctrlKey && !e.button;
}
function W1() {
  return this.parentNode;
}
function Z1(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function Y1() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function j1() {
  var e = K1, t = W1, n = Z1, r = Y1, o = {}, i = bs("start", "drag", "end"), s = 0, a, l, c, d, f = 0;
  function h(_) {
    _.on("mousedown.drag", g).filter(r).on("touchstart.drag", w).on("touchmove.drag", b, F1).on("touchend.drag touchcancel.drag", k).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function g(_, S) {
    if (!(d || !e.call(this, _, S))) {
      var T = E(this, t.call(this, _, S), _, S, "mouse");
      T && (Ut(_.view).on("mousemove.drag", v, Oo).on("mouseup.drag", p, Oo), kd(_.view), Ls(_), c = !1, a = _.clientX, l = _.clientY, T("start", _));
    }
  }
  function v(_) {
    if (qr(_), !c) {
      var S = _.clientX - a, T = _.clientY - l;
      c = S * S + T * T > f;
    }
    o.mouse("drag", _);
  }
  function p(_) {
    Ut(_.view).on("mousemove.drag mouseup.drag", null), Sd(_.view, c), qr(_), o.mouse("end", _);
  }
  function w(_, S) {
    if (e.call(this, _, S)) {
      var T = _.changedTouches, V = t.call(this, _, S), O = T.length, H, Z;
      for (H = 0; H < O; ++H)
        (Z = E(this, V, _, S, T[H].identifier, T[H])) && (Ls(_), Z("start", _, T[H]));
    }
  }
  function b(_) {
    var S = _.changedTouches, T = S.length, V, O;
    for (V = 0; V < T; ++V)
      (O = o[S[V].identifier]) && (qr(_), O("drag", _, S[V]));
  }
  function k(_) {
    var S = _.changedTouches, T = S.length, V, O;
    for (d && clearTimeout(d), d = setTimeout(function() {
      d = null;
    }, 500), V = 0; V < T; ++V)
      (O = o[S[V].identifier]) && (Ls(_), O("end", _, S[V]));
  }
  function E(_, S, T, V, O, H) {
    var Z = i.copy(), I = rn(H || T, S), P, A, x;
    if ((x = n.call(_, new ca("beforestart", {
      sourceEvent: T,
      target: h,
      identifier: O,
      active: s,
      x: I[0],
      y: I[1],
      dx: 0,
      dy: 0,
      dispatch: Z
    }), V)) != null)
      return P = x.x - I[0] || 0, A = x.y - I[1] || 0, function C(M, z, K) {
        var X = I, $;
        switch (M) {
          case "start":
            o[O] = C, $ = s++;
            break;
          case "end":
            delete o[O], --s;
          // falls through
          case "drag":
            I = rn(K || z, S), $ = s;
            break;
        }
        Z.call(
          M,
          _,
          new ca(M, {
            sourceEvent: z,
            subject: x,
            target: h,
            identifier: O,
            active: $,
            x: I[0] + P,
            y: I[1] + A,
            dx: I[0] - X[0],
            dy: I[1] - X[1],
            dispatch: Z
          }),
          V
        );
      };
  }
  return h.filter = function(_) {
    return arguments.length ? (e = typeof _ == "function" ? _ : hi(!!_), h) : e;
  }, h.container = function(_) {
    return arguments.length ? (t = typeof _ == "function" ? _ : hi(_), h) : t;
  }, h.subject = function(_) {
    return arguments.length ? (n = typeof _ == "function" ? _ : hi(_), h) : n;
  }, h.touchable = function(_) {
    return arguments.length ? (r = typeof _ == "function" ? _ : hi(!!_), h) : r;
  }, h.on = function() {
    var _ = i.on.apply(i, arguments);
    return _ === i ? h : _;
  }, h.clickDistance = function(_) {
    return arguments.length ? (f = (_ = +_) * _, h) : Math.sqrt(f);
  }, h;
}
function ol(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function Ed(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function Qo() {
}
var zo = 0.7, Fi = 1 / zo, Gr = "\\s*([+-]?\\d+)\\s*", Vo = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Cn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", X1 = /^#([0-9a-f]{3,8})$/, q1 = new RegExp(`^rgb\\(${Gr},${Gr},${Gr}\\)$`), G1 = new RegExp(`^rgb\\(${Cn},${Cn},${Cn}\\)$`), U1 = new RegExp(`^rgba\\(${Gr},${Gr},${Gr},${Vo}\\)$`), J1 = new RegExp(`^rgba\\(${Cn},${Cn},${Cn},${Vo}\\)$`), Q1 = new RegExp(`^hsl\\(${Vo},${Cn},${Cn}\\)$`), em = new RegExp(`^hsla\\(${Vo},${Cn},${Cn},${Vo}\\)$`), Gl = {
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
ol(Qo, zr, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Ul,
  // Deprecated! Use color.formatHex.
  formatHex: Ul,
  formatHex8: tm,
  formatHsl: nm,
  formatRgb: Jl,
  toString: Jl
});
function Ul() {
  return this.rgb().formatHex();
}
function tm() {
  return this.rgb().formatHex8();
}
function nm() {
  return Nd(this).formatHsl();
}
function Jl() {
  return this.rgb().formatRgb();
}
function zr(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = X1.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? Ql(t) : n === 3 ? new Lt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? gi(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? gi(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = q1.exec(e)) ? new Lt(t[1], t[2], t[3], 1) : (t = G1.exec(e)) ? new Lt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = U1.exec(e)) ? gi(t[1], t[2], t[3], t[4]) : (t = J1.exec(e)) ? gi(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Q1.exec(e)) ? nc(t[1], t[2] / 100, t[3] / 100, 1) : (t = em.exec(e)) ? nc(t[1], t[2] / 100, t[3] / 100, t[4]) : Gl.hasOwnProperty(e) ? Ql(Gl[e]) : e === "transparent" ? new Lt(NaN, NaN, NaN, 0) : null;
}
function Ql(e) {
  return new Lt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function gi(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new Lt(e, t, n, r);
}
function rm(e) {
  return e instanceof Qo || (e = zr(e)), e ? (e = e.rgb(), new Lt(e.r, e.g, e.b, e.opacity)) : new Lt();
}
function ua(e, t, n, r) {
  return arguments.length === 1 ? rm(e) : new Lt(e, t, n, r ?? 1);
}
function Lt(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
ol(Lt, ua, Ed(Qo, {
  brighter(e) {
    return e = e == null ? Fi : Math.pow(Fi, e), new Lt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? zo : Math.pow(zo, e), new Lt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Lt(Pr(this.r), Pr(this.g), Pr(this.b), Ki(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: ec,
  // Deprecated! Use color.formatHex.
  formatHex: ec,
  formatHex8: om,
  formatRgb: tc,
  toString: tc
}));
function ec() {
  return `#${Cr(this.r)}${Cr(this.g)}${Cr(this.b)}`;
}
function om() {
  return `#${Cr(this.r)}${Cr(this.g)}${Cr(this.b)}${Cr((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function tc() {
  const e = Ki(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Pr(this.r)}, ${Pr(this.g)}, ${Pr(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Ki(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Pr(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Cr(e) {
  return e = Pr(e), (e < 16 ? "0" : "") + e.toString(16);
}
function nc(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new on(e, t, n, r);
}
function Nd(e) {
  if (e instanceof on) return new on(e.h, e.s, e.l, e.opacity);
  if (e instanceof Qo || (e = zr(e)), !e) return new on();
  if (e instanceof on) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), s = NaN, a = i - o, l = (i + o) / 2;
  return a ? (t === i ? s = (n - r) / a + (n < r) * 6 : n === i ? s = (r - t) / a + 2 : s = (t - n) / a + 4, a /= l < 0.5 ? i + o : 2 - i - o, s *= 60) : a = l > 0 && l < 1 ? 0 : s, new on(s, a, l, e.opacity);
}
function im(e, t, n, r) {
  return arguments.length === 1 ? Nd(e) : new on(e, t, n, r ?? 1);
}
function on(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
ol(on, im, Ed(Qo, {
  brighter(e) {
    return e = e == null ? Fi : Math.pow(Fi, e), new on(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? zo : Math.pow(zo, e), new on(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new Lt(
      Hs(e >= 240 ? e - 240 : e + 120, o, r),
      Hs(e, o, r),
      Hs(e < 120 ? e + 240 : e - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new on(rc(this.h), vi(this.s), vi(this.l), Ki(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Ki(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${rc(this.h)}, ${vi(this.s) * 100}%, ${vi(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function rc(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function vi(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Hs(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const il = (e) => () => e;
function sm(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function am(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function lm(e) {
  return (e = +e) == 1 ? Pd : function(t, n) {
    return n - t ? am(t, n, e) : il(isNaN(t) ? n : t);
  };
}
function Pd(e, t) {
  var n = t - e;
  return n ? sm(e, n) : il(isNaN(e) ? t : e);
}
const Wi = function e(t) {
  var n = lm(t);
  function r(o, i) {
    var s = n((o = ua(o)).r, (i = ua(i)).r), a = n(o.g, i.g), l = n(o.b, i.b), c = Pd(o.opacity, i.opacity);
    return function(d) {
      return o.r = s(d), o.g = a(d), o.b = l(d), o.opacity = c(d), o + "";
    };
  }
  return r.gamma = e, r;
}(1);
function cm(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, r = t.slice(), o;
  return function(i) {
    for (o = 0; o < n; ++o) r[o] = e[o] * (1 - i) + t[o] * i;
    return r;
  };
}
function um(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function dm(e, t) {
  var n = t ? t.length : 0, r = e ? Math.min(n, e.length) : 0, o = new Array(r), i = new Array(n), s;
  for (s = 0; s < r; ++s) o[s] = Ao(e[s], t[s]);
  for (; s < n; ++s) i[s] = t[s];
  return function(a) {
    for (s = 0; s < r; ++s) i[s] = o[s](a);
    return i;
  };
}
function fm(e, t) {
  var n = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(r) {
    return n.setTime(e * (1 - r) + t * r), n;
  };
}
function wn(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function hm(e, t) {
  var n = {}, r = {}, o;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (o in t)
    o in e ? n[o] = Ao(e[o], t[o]) : r[o] = t[o];
  return function(i) {
    for (o in n) r[o] = n[o](i);
    return r;
  };
}
var da = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Rs = new RegExp(da.source, "g");
function gm(e) {
  return function() {
    return e;
  };
}
function vm(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Td(e, t) {
  var n = da.lastIndex = Rs.lastIndex = 0, r, o, i, s = -1, a = [], l = [];
  for (e = e + "", t = t + ""; (r = da.exec(e)) && (o = Rs.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), a[s] ? a[s] += i : a[++s] = i), (r = r[0]) === (o = o[0]) ? a[s] ? a[s] += o : a[++s] = o : (a[++s] = null, l.push({ i: s, x: wn(r, o) })), n = Rs.lastIndex;
  return n < t.length && (i = t.slice(n), a[s] ? a[s] += i : a[++s] = i), a.length < 2 ? l[0] ? vm(l[0].x) : gm(t) : (t = l.length, function(c) {
    for (var d = 0, f; d < t; ++d) a[(f = l[d]).i] = f.x(c);
    return a.join("");
  });
}
function Ao(e, t) {
  var n = typeof t, r;
  return t == null || n === "boolean" ? il(t) : (n === "number" ? wn : n === "string" ? (r = zr(t)) ? (t = r, Wi) : Td : t instanceof zr ? Wi : t instanceof Date ? fm : um(t) ? cm : Array.isArray(t) ? dm : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? hm : wn)(e, t);
}
var oc = 180 / Math.PI, fa = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Ad(e, t, n, r, o, i) {
  var s, a, l;
  return (s = Math.sqrt(e * e + t * t)) && (e /= s, t /= s), (l = e * n + t * r) && (n -= e * l, r -= t * l), (a = Math.sqrt(n * n + r * r)) && (n /= a, r /= a, l /= a), e * r < t * n && (e = -e, t = -t, l = -l, s = -s), {
    translateX: o,
    translateY: i,
    rotate: Math.atan2(t, e) * oc,
    skewX: Math.atan(l) * oc,
    scaleX: s,
    scaleY: a
  };
}
var pi;
function pm(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? fa : Ad(t.a, t.b, t.c, t.d, t.e, t.f);
}
function mm(e) {
  return e == null || (pi || (pi = document.createElementNS("http://www.w3.org/2000/svg", "g")), pi.setAttribute("transform", e), !(e = pi.transform.baseVal.consolidate())) ? fa : (e = e.matrix, Ad(e.a, e.b, e.c, e.d, e.e, e.f));
}
function $d(e, t, n, r) {
  function o(c) {
    return c.length ? c.pop() + " " : "";
  }
  function i(c, d, f, h, g, v) {
    if (c !== f || d !== h) {
      var p = g.push("translate(", null, t, null, n);
      v.push({ i: p - 4, x: wn(c, f) }, { i: p - 2, x: wn(d, h) });
    } else (f || h) && g.push("translate(" + f + t + h + n);
  }
  function s(c, d, f, h) {
    c !== d ? (c - d > 180 ? d += 360 : d - c > 180 && (c += 360), h.push({ i: f.push(o(f) + "rotate(", null, r) - 2, x: wn(c, d) })) : d && f.push(o(f) + "rotate(" + d + r);
  }
  function a(c, d, f, h) {
    c !== d ? h.push({ i: f.push(o(f) + "skewX(", null, r) - 2, x: wn(c, d) }) : d && f.push(o(f) + "skewX(" + d + r);
  }
  function l(c, d, f, h, g, v) {
    if (c !== f || d !== h) {
      var p = g.push(o(g) + "scale(", null, ",", null, ")");
      v.push({ i: p - 4, x: wn(c, f) }, { i: p - 2, x: wn(d, h) });
    } else (f !== 1 || h !== 1) && g.push(o(g) + "scale(" + f + "," + h + ")");
  }
  return function(c, d) {
    var f = [], h = [];
    return c = e(c), d = e(d), i(c.translateX, c.translateY, d.translateX, d.translateY, f, h), s(c.rotate, d.rotate, f, h), a(c.skewX, d.skewX, f, h), l(c.scaleX, c.scaleY, d.scaleX, d.scaleY, f, h), c = d = null, function(g) {
      for (var v = -1, p = h.length, w; ++v < p; ) f[(w = h[v]).i] = w.x(g);
      return f.join("");
    };
  };
}
var ym = $d(pm, "px, ", "px)", "deg)"), wm = $d(mm, ", ", ")", ")"), bm = 1e-12;
function ic(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function xm(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function _m(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const Ti = function e(t, n, r) {
  function o(i, s) {
    var a = i[0], l = i[1], c = i[2], d = s[0], f = s[1], h = s[2], g = d - a, v = f - l, p = g * g + v * v, w, b;
    if (p < bm)
      b = Math.log(h / c) / t, w = function(V) {
        return [
          a + V * g,
          l + V * v,
          c * Math.exp(t * V * b)
        ];
      };
    else {
      var k = Math.sqrt(p), E = (h * h - c * c + r * p) / (2 * c * n * k), _ = (h * h - c * c - r * p) / (2 * h * n * k), S = Math.log(Math.sqrt(E * E + 1) - E), T = Math.log(Math.sqrt(_ * _ + 1) - _);
      b = (T - S) / t, w = function(V) {
        var O = V * b, H = ic(S), Z = c / (n * k) * (H * _m(t * O + S) - xm(S));
        return [
          a + Z * g,
          l + Z * v,
          c * H / ic(t * O + S)
        ];
      };
    }
    return w.duration = b * 1e3 * t / Math.SQRT2, w;
  }
  return o.rho = function(i) {
    var s = Math.max(1e-3, +i), a = s * s, l = a * a;
    return e(s, a, l);
  }, o;
}(Math.SQRT2, 2, 4);
var ro = 0, Co = 0, yo = 0, Md = 1e3, Zi, ko, Yi = 0, Vr = 0, _s = 0, Io = typeof performance == "object" && performance.now ? performance : Date, Dd = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function sl() {
  return Vr || (Dd(Cm), Vr = Io.now() + _s);
}
function Cm() {
  Vr = 0;
}
function ji() {
  this._call = this._time = this._next = null;
}
ji.prototype = Od.prototype = {
  constructor: ji,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? sl() : +n) + (t == null ? 0 : +t), !this._next && ko !== this && (ko ? ko._next = this : Zi = this, ko = this), this._call = e, this._time = n, ha();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, ha());
  }
};
function Od(e, t, n) {
  var r = new ji();
  return r.restart(e, t, n), r;
}
function km() {
  sl(), ++ro;
  for (var e = Zi, t; e; )
    (t = Vr - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --ro;
}
function sc() {
  Vr = (Yi = Io.now()) + _s, ro = Co = 0;
  try {
    km();
  } finally {
    ro = 0, Em(), Vr = 0;
  }
}
function Sm() {
  var e = Io.now(), t = e - Yi;
  t > Md && (_s -= t, Yi = e);
}
function Em() {
  for (var e, t = Zi, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : Zi = n);
  ko = e, ha(r);
}
function ha(e) {
  if (!ro) {
    Co && (Co = clearTimeout(Co));
    var t = e - Vr;
    t > 24 ? (e < 1 / 0 && (Co = setTimeout(sc, e - Io.now() - _s)), yo && (yo = clearInterval(yo))) : (yo || (Yi = Io.now(), yo = setInterval(Sm, Md)), ro = 1, Dd(sc));
  }
}
function ac(e, t, n) {
  var r = new ji();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var Nm = bs("start", "end", "cancel", "interrupt"), Pm = [], zd = 0, lc = 1, ga = 2, Ai = 3, cc = 4, va = 5, $i = 6;
function Cs(e, t, n, r, o, i) {
  var s = e.__transition;
  if (!s) e.__transition = {};
  else if (n in s) return;
  Tm(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: Nm,
    tween: Pm,
    time: i.time,
    delay: i.delay,
    duration: i.duration,
    ease: i.ease,
    timer: null,
    state: zd
  });
}
function al(e, t) {
  var n = fn(e, t);
  if (n.state > zd) throw new Error("too late; already scheduled");
  return n;
}
function An(e, t) {
  var n = fn(e, t);
  if (n.state > Ai) throw new Error("too late; already running");
  return n;
}
function fn(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function Tm(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = Od(i, 0, n.time);
  function i(c) {
    n.state = lc, n.timer.restart(s, n.delay, n.time), n.delay <= c && s(c - n.delay);
  }
  function s(c) {
    var d, f, h, g;
    if (n.state !== lc) return l();
    for (d in r)
      if (g = r[d], g.name === n.name) {
        if (g.state === Ai) return ac(s);
        g.state === cc ? (g.state = $i, g.timer.stop(), g.on.call("interrupt", e, e.__data__, g.index, g.group), delete r[d]) : +d < t && (g.state = $i, g.timer.stop(), g.on.call("cancel", e, e.__data__, g.index, g.group), delete r[d]);
      }
    if (ac(function() {
      n.state === Ai && (n.state = cc, n.timer.restart(a, n.delay, n.time), a(c));
    }), n.state = ga, n.on.call("start", e, e.__data__, n.index, n.group), n.state === ga) {
      for (n.state = Ai, o = new Array(h = n.tween.length), d = 0, f = -1; d < h; ++d)
        (g = n.tween[d].value.call(e, e.__data__, n.index, n.group)) && (o[++f] = g);
      o.length = f + 1;
    }
  }
  function a(c) {
    for (var d = c < n.duration ? n.ease.call(null, c / n.duration) : (n.timer.restart(l), n.state = va, 1), f = -1, h = o.length; ++f < h; )
      o[f].call(e, d);
    n.state === va && (n.on.call("end", e, e.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = $i, n.timer.stop(), delete r[t];
    for (var c in r) return;
    delete e.__transition;
  }
}
function Mi(e, t) {
  var n = e.__transition, r, o, i = !0, s;
  if (n) {
    t = t == null ? null : t + "";
    for (s in n) {
      if ((r = n[s]).name !== t) {
        i = !1;
        continue;
      }
      o = r.state > ga && r.state < va, r.state = $i, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[s];
    }
    i && delete e.__transition;
  }
}
function Am(e) {
  return this.each(function() {
    Mi(this, e);
  });
}
function $m(e, t) {
  var n, r;
  return function() {
    var o = An(this, e), i = o.tween;
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
function Mm(e, t, n) {
  var r, o;
  if (typeof n != "function") throw new Error();
  return function() {
    var i = An(this, e), s = i.tween;
    if (s !== r) {
      o = (r = s).slice();
      for (var a = { name: t, value: n }, l = 0, c = o.length; l < c; ++l)
        if (o[l].name === t) {
          o[l] = a;
          break;
        }
      l === c && o.push(a);
    }
    i.tween = o;
  };
}
function Dm(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = fn(this.node(), n).tween, o = 0, i = r.length, s; o < i; ++o)
      if ((s = r[o]).name === e)
        return s.value;
    return null;
  }
  return this.each((t == null ? $m : Mm)(n, e, t));
}
function ll(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = An(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return fn(o, r).value[t];
  };
}
function Vd(e, t) {
  var n;
  return (typeof t == "number" ? wn : t instanceof zr ? Wi : (n = zr(t)) ? (t = n, Wi) : Td)(e, t);
}
function Om(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function zm(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Vm(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttribute(e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function Im(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttributeNS(e.space, e.local);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function Lm(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttribute(e) : (s = this.getAttribute(e), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a)));
  };
}
function Hm(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttributeNS(e.space, e.local) : (s = this.getAttributeNS(e.space, e.local), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a)));
  };
}
function Rm(e, t) {
  var n = xs(e), r = n === "transform" ? wm : Vd;
  return this.attrTween(e, typeof t == "function" ? (n.local ? Hm : Lm)(n, r, ll(this, "attr." + e, t)) : t == null ? (n.local ? zm : Om)(n) : (n.local ? Im : Vm)(n, r, t));
}
function Bm(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function Fm(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function Km(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && Fm(e, i)), n;
  }
  return o._value = t, o;
}
function Wm(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && Bm(e, i)), n;
  }
  return o._value = t, o;
}
function Zm(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = xs(e);
  return this.tween(n, (r.local ? Km : Wm)(r, t));
}
function Ym(e, t) {
  return function() {
    al(this, e).delay = +t.apply(this, arguments);
  };
}
function jm(e, t) {
  return t = +t, function() {
    al(this, e).delay = t;
  };
}
function Xm(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Ym : jm)(t, e)) : fn(this.node(), t).delay;
}
function qm(e, t) {
  return function() {
    An(this, e).duration = +t.apply(this, arguments);
  };
}
function Gm(e, t) {
  return t = +t, function() {
    An(this, e).duration = t;
  };
}
function Um(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? qm : Gm)(t, e)) : fn(this.node(), t).duration;
}
function Jm(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    An(this, e).ease = t;
  };
}
function Qm(e) {
  var t = this._id;
  return arguments.length ? this.each(Jm(t, e)) : fn(this.node(), t).ease;
}
function e0(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    An(this, e).ease = n;
  };
}
function t0(e) {
  if (typeof e != "function") throw new Error();
  return this.each(e0(this._id, e));
}
function n0(e) {
  typeof e != "function" && (e = gd(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, c = 0; c < s; ++c)
      (l = i[c]) && e.call(l, l.__data__, c, i) && a.push(l);
  return new Kn(r, this._parents, this._name, this._id);
}
function r0(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), s = new Array(r), a = 0; a < i; ++a)
    for (var l = t[a], c = n[a], d = l.length, f = s[a] = new Array(d), h, g = 0; g < d; ++g)
      (h = l[g] || c[g]) && (f[g] = h);
  for (; a < r; ++a)
    s[a] = t[a];
  return new Kn(s, this._parents, this._name, this._id);
}
function o0(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function i0(e, t, n) {
  var r, o, i = o0(t) ? al : An;
  return function() {
    var s = i(this, e), a = s.on;
    a !== r && (o = (r = a).copy()).on(t, n), s.on = o;
  };
}
function s0(e, t) {
  var n = this._id;
  return arguments.length < 2 ? fn(this.node(), n).on.on(e) : this.each(i0(n, e, t));
}
function a0(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function l0() {
  return this.on("end.remove", a0(this._id));
}
function c0(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = nl(e));
  for (var r = this._groups, o = r.length, i = new Array(o), s = 0; s < o; ++s)
    for (var a = r[s], l = a.length, c = i[s] = new Array(l), d, f, h = 0; h < l; ++h)
      (d = a[h]) && (f = e.call(d, d.__data__, h, a)) && ("__data__" in d && (f.__data__ = d.__data__), c[h] = f, Cs(c[h], t, n, h, c, fn(d, n)));
  return new Kn(i, this._parents, t, n);
}
function u0(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = hd(e));
  for (var r = this._groups, o = r.length, i = [], s = [], a = 0; a < o; ++a)
    for (var l = r[a], c = l.length, d, f = 0; f < c; ++f)
      if (d = l[f]) {
        for (var h = e.call(d, d.__data__, f, l), g, v = fn(d, n), p = 0, w = h.length; p < w; ++p)
          (g = h[p]) && Cs(g, t, n, p, h, v);
        i.push(h), s.push(d);
      }
  return new Kn(i, s, t, n);
}
var d0 = Jo.prototype.constructor;
function f0() {
  return new d0(this._groups, this._parents);
}
function h0(e, t) {
  var n, r, o;
  return function() {
    var i = no(this, e), s = (this.style.removeProperty(e), no(this, e));
    return i === s ? null : i === n && s === r ? o : o = t(n = i, r = s);
  };
}
function Id(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function g0(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = no(this, e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function v0(e, t, n) {
  var r, o, i;
  return function() {
    var s = no(this, e), a = n(this), l = a + "";
    return a == null && (l = a = (this.style.removeProperty(e), no(this, e))), s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a));
  };
}
function p0(e, t) {
  var n, r, o, i = "style." + t, s = "end." + i, a;
  return function() {
    var l = An(this, e), c = l.on, d = l.value[i] == null ? a || (a = Id(t)) : void 0;
    (c !== n || o !== d) && (r = (n = c).copy()).on(s, o = d), l.on = r;
  };
}
function m0(e, t, n) {
  var r = (e += "") == "transform" ? ym : Vd;
  return t == null ? this.styleTween(e, h0(e, r)).on("end.style." + e, Id(e)) : typeof t == "function" ? this.styleTween(e, v0(e, r, ll(this, "style." + e, t))).each(p0(this._id, e)) : this.styleTween(e, g0(e, r, t), n).on("end.style." + e, null);
}
function y0(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function w0(e, t, n) {
  var r, o;
  function i() {
    var s = t.apply(this, arguments);
    return s !== o && (r = (o = s) && y0(e, s, n)), r;
  }
  return i._value = t, i;
}
function b0(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  return this.tween(r, w0(e, t, n ?? ""));
}
function x0(e) {
  return function() {
    this.textContent = e;
  };
}
function _0(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function C0(e) {
  return this.tween("text", typeof e == "function" ? _0(ll(this, "text", e)) : x0(e == null ? "" : e + ""));
}
function k0(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function S0(e) {
  var t, n;
  function r() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && k0(o)), t;
  }
  return r._value = e, r;
}
function E0(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, S0(e));
}
function N0() {
  for (var e = this._name, t = this._id, n = Ld(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, c = 0; c < a; ++c)
      if (l = s[c]) {
        var d = fn(l, t);
        Cs(l, e, n, c, s, {
          time: d.time + d.delay + d.duration,
          delay: 0,
          duration: d.duration,
          ease: d.ease
        });
      }
  return new Kn(r, this._parents, e, n);
}
function P0() {
  var e, t, n = this, r = n._id, o = n.size();
  return new Promise(function(i, s) {
    var a = { value: s }, l = { value: function() {
      --o === 0 && i();
    } };
    n.each(function() {
      var c = An(this, r), d = c.on;
      d !== e && (t = (e = d).copy(), t._.cancel.push(a), t._.interrupt.push(a), t._.end.push(l)), c.on = t;
    }), o === 0 && i();
  });
}
var T0 = 0;
function Kn(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function Ld() {
  return ++T0;
}
var $n = Jo.prototype;
Kn.prototype = {
  constructor: Kn,
  select: c0,
  selectAll: u0,
  selectChild: $n.selectChild,
  selectChildren: $n.selectChildren,
  filter: n0,
  merge: r0,
  selection: f0,
  transition: N0,
  call: $n.call,
  nodes: $n.nodes,
  node: $n.node,
  size: $n.size,
  empty: $n.empty,
  each: $n.each,
  on: s0,
  attr: Rm,
  attrTween: Zm,
  style: m0,
  styleTween: b0,
  text: C0,
  textTween: E0,
  remove: l0,
  tween: Dm,
  delay: Xm,
  duration: Um,
  ease: Qm,
  easeVarying: t0,
  end: P0,
  [Symbol.iterator]: $n[Symbol.iterator]
};
function A0(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var $0 = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: A0
};
function M0(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function D0(e) {
  var t, n;
  e instanceof Kn ? (t = e._id, e = e._name) : (t = Ld(), (n = $0).time = sl(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, c = 0; c < a; ++c)
      (l = s[c]) && Cs(l, e, t, c, s, n || M0(l, t));
  return new Kn(r, this._parents, e, t);
}
Jo.prototype.interrupt = Am;
Jo.prototype.transition = D0;
const mi = (e) => () => e;
function O0(e, {
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
var ks = new Vn(1, 0, 0);
Hd.prototype = Vn.prototype;
function Hd(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return ks;
  return e.__zoom;
}
function Bs(e) {
  e.stopImmediatePropagation();
}
function wo(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function z0(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function V0() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function uc() {
  return this.__zoom || ks;
}
function I0(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function L0() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function H0(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0], o = e.invertX(t[1][0]) - n[1][0], i = e.invertY(t[0][1]) - n[0][1], s = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    s > i ? (i + s) / 2 : Math.min(0, i) || Math.max(0, s)
  );
}
function Rd() {
  var e = z0, t = V0, n = H0, r = I0, o = L0, i = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], a = 250, l = Ti, c = bs("start", "zoom", "end"), d, f, h, g = 500, v = 150, p = 0, w = 10;
  function b(x) {
    x.property("__zoom", uc).on("wheel.zoom", O, { passive: !1 }).on("mousedown.zoom", H).on("dblclick.zoom", Z).filter(o).on("touchstart.zoom", I).on("touchmove.zoom", P).on("touchend.zoom touchcancel.zoom", A).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  b.transform = function(x, C, M, z) {
    var K = x.selection ? x.selection() : x;
    K.property("__zoom", uc), x !== K ? S(x, C, M, z) : K.interrupt().each(function() {
      T(this, arguments).event(z).start().zoom(null, typeof C == "function" ? C.apply(this, arguments) : C).end();
    });
  }, b.scaleBy = function(x, C, M, z) {
    b.scaleTo(x, function() {
      var K = this.__zoom.k, X = typeof C == "function" ? C.apply(this, arguments) : C;
      return K * X;
    }, M, z);
  }, b.scaleTo = function(x, C, M, z) {
    b.transform(x, function() {
      var K = t.apply(this, arguments), X = this.__zoom, $ = M == null ? _(K) : typeof M == "function" ? M.apply(this, arguments) : M, Y = X.invert($), U = typeof C == "function" ? C.apply(this, arguments) : C;
      return n(E(k(X, U), $, Y), K, s);
    }, M, z);
  }, b.translateBy = function(x, C, M, z) {
    b.transform(x, function() {
      return n(this.__zoom.translate(
        typeof C == "function" ? C.apply(this, arguments) : C,
        typeof M == "function" ? M.apply(this, arguments) : M
      ), t.apply(this, arguments), s);
    }, null, z);
  }, b.translateTo = function(x, C, M, z, K) {
    b.transform(x, function() {
      var X = t.apply(this, arguments), $ = this.__zoom, Y = z == null ? _(X) : typeof z == "function" ? z.apply(this, arguments) : z;
      return n(ks.translate(Y[0], Y[1]).scale($.k).translate(
        typeof C == "function" ? -C.apply(this, arguments) : -C,
        typeof M == "function" ? -M.apply(this, arguments) : -M
      ), X, s);
    }, z, K);
  };
  function k(x, C) {
    return C = Math.max(i[0], Math.min(i[1], C)), C === x.k ? x : new Vn(C, x.x, x.y);
  }
  function E(x, C, M) {
    var z = C[0] - M[0] * x.k, K = C[1] - M[1] * x.k;
    return z === x.x && K === x.y ? x : new Vn(x.k, z, K);
  }
  function _(x) {
    return [(+x[0][0] + +x[1][0]) / 2, (+x[0][1] + +x[1][1]) / 2];
  }
  function S(x, C, M, z) {
    x.on("start.zoom", function() {
      T(this, arguments).event(z).start();
    }).on("interrupt.zoom end.zoom", function() {
      T(this, arguments).event(z).end();
    }).tween("zoom", function() {
      var K = this, X = arguments, $ = T(K, X).event(z), Y = t.apply(K, X), U = M == null ? _(Y) : typeof M == "function" ? M.apply(K, X) : M, W = Math.max(Y[1][0] - Y[0][0], Y[1][1] - Y[0][1]), G = K.__zoom, R = typeof C == "function" ? C.apply(K, X) : C, j = l(G.invert(U).concat(W / G.k), R.invert(U).concat(W / R.k));
      return function(ee) {
        if (ee === 1) ee = R;
        else {
          var ne = j(ee), J = W / ne[2];
          ee = new Vn(J, U[0] - ne[0] * J, U[1] - ne[1] * J);
        }
        $.zoom(null, ee);
      };
    });
  }
  function T(x, C, M) {
    return !M && x.__zooming || new V(x, C);
  }
  function V(x, C) {
    this.that = x, this.args = C, this.active = 0, this.sourceEvent = null, this.extent = t.apply(x, C), this.taps = 0;
  }
  V.prototype = {
    event: function(x) {
      return x && (this.sourceEvent = x), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(x, C) {
      return this.mouse && x !== "mouse" && (this.mouse[1] = C.invert(this.mouse[0])), this.touch0 && x !== "touch" && (this.touch0[1] = C.invert(this.touch0[0])), this.touch1 && x !== "touch" && (this.touch1[1] = C.invert(this.touch1[0])), this.that.__zoom = C, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(x) {
      var C = Ut(this.that).datum();
      c.call(
        x,
        this.that,
        new O0(x, {
          sourceEvent: this.sourceEvent,
          target: b,
          transform: this.that.__zoom,
          dispatch: c
        }),
        C
      );
    }
  };
  function O(x, ...C) {
    if (!e.apply(this, arguments)) return;
    var M = T(this, C).event(x), z = this.__zoom, K = Math.max(i[0], Math.min(i[1], z.k * Math.pow(2, r.apply(this, arguments)))), X = rn(x);
    if (M.wheel)
      (M.mouse[0][0] !== X[0] || M.mouse[0][1] !== X[1]) && (M.mouse[1] = z.invert(M.mouse[0] = X)), clearTimeout(M.wheel);
    else {
      if (z.k === K) return;
      M.mouse = [X, z.invert(X)], Mi(this), M.start();
    }
    wo(x), M.wheel = setTimeout($, v), M.zoom("mouse", n(E(k(z, K), M.mouse[0], M.mouse[1]), M.extent, s));
    function $() {
      M.wheel = null, M.end();
    }
  }
  function H(x, ...C) {
    if (h || !e.apply(this, arguments)) return;
    var M = x.currentTarget, z = T(this, C, !0).event(x), K = Ut(x.view).on("mousemove.zoom", U, !0).on("mouseup.zoom", W, !0), X = rn(x, M), $ = x.clientX, Y = x.clientY;
    kd(x.view), Bs(x), z.mouse = [X, this.__zoom.invert(X)], Mi(this), z.start();
    function U(G) {
      if (wo(G), !z.moved) {
        var R = G.clientX - $, j = G.clientY - Y;
        z.moved = R * R + j * j > p;
      }
      z.event(G).zoom("mouse", n(E(z.that.__zoom, z.mouse[0] = rn(G, M), z.mouse[1]), z.extent, s));
    }
    function W(G) {
      K.on("mousemove.zoom mouseup.zoom", null), Sd(G.view, z.moved), wo(G), z.event(G).end();
    }
  }
  function Z(x, ...C) {
    if (e.apply(this, arguments)) {
      var M = this.__zoom, z = rn(x.changedTouches ? x.changedTouches[0] : x, this), K = M.invert(z), X = M.k * (x.shiftKey ? 0.5 : 2), $ = n(E(k(M, X), z, K), t.apply(this, C), s);
      wo(x), a > 0 ? Ut(this).transition().duration(a).call(S, $, z, x) : Ut(this).call(b.transform, $, z, x);
    }
  }
  function I(x, ...C) {
    if (e.apply(this, arguments)) {
      var M = x.touches, z = M.length, K = T(this, C, x.changedTouches.length === z).event(x), X, $, Y, U;
      for (Bs(x), $ = 0; $ < z; ++$)
        Y = M[$], U = rn(Y, this), U = [U, this.__zoom.invert(U), Y.identifier], K.touch0 ? !K.touch1 && K.touch0[2] !== U[2] && (K.touch1 = U, K.taps = 0) : (K.touch0 = U, X = !0, K.taps = 1 + !!d);
      d && (d = clearTimeout(d)), X && (K.taps < 2 && (f = U[0], d = setTimeout(function() {
        d = null;
      }, g)), Mi(this), K.start());
    }
  }
  function P(x, ...C) {
    if (this.__zooming) {
      var M = T(this, C).event(x), z = x.changedTouches, K = z.length, X, $, Y, U;
      for (wo(x), X = 0; X < K; ++X)
        $ = z[X], Y = rn($, this), M.touch0 && M.touch0[2] === $.identifier ? M.touch0[0] = Y : M.touch1 && M.touch1[2] === $.identifier && (M.touch1[0] = Y);
      if ($ = M.that.__zoom, M.touch1) {
        var W = M.touch0[0], G = M.touch0[1], R = M.touch1[0], j = M.touch1[1], ee = (ee = R[0] - W[0]) * ee + (ee = R[1] - W[1]) * ee, ne = (ne = j[0] - G[0]) * ne + (ne = j[1] - G[1]) * ne;
        $ = k($, Math.sqrt(ee / ne)), Y = [(W[0] + R[0]) / 2, (W[1] + R[1]) / 2], U = [(G[0] + j[0]) / 2, (G[1] + j[1]) / 2];
      } else if (M.touch0) Y = M.touch0[0], U = M.touch0[1];
      else return;
      M.zoom("touch", n(E($, Y, U), M.extent, s));
    }
  }
  function A(x, ...C) {
    if (this.__zooming) {
      var M = T(this, C).event(x), z = x.changedTouches, K = z.length, X, $;
      for (Bs(x), h && clearTimeout(h), h = setTimeout(function() {
        h = null;
      }, g), X = 0; X < K; ++X)
        $ = z[X], M.touch0 && M.touch0[2] === $.identifier ? delete M.touch0 : M.touch1 && M.touch1[2] === $.identifier && delete M.touch1;
      if (M.touch1 && !M.touch0 && (M.touch0 = M.touch1, delete M.touch1), M.touch0) M.touch0[1] = this.__zoom.invert(M.touch0[0]);
      else if (M.end(), M.taps === 2 && ($ = rn($, this), Math.hypot(f[0] - $[0], f[1] - $[1]) < w)) {
        var Y = Ut(this).on("dblclick.zoom");
        Y && Y.apply(this, arguments);
      }
    }
  }
  return b.wheelDelta = function(x) {
    return arguments.length ? (r = typeof x == "function" ? x : mi(+x), b) : r;
  }, b.filter = function(x) {
    return arguments.length ? (e = typeof x == "function" ? x : mi(!!x), b) : e;
  }, b.touchable = function(x) {
    return arguments.length ? (o = typeof x == "function" ? x : mi(!!x), b) : o;
  }, b.extent = function(x) {
    return arguments.length ? (t = typeof x == "function" ? x : mi([[+x[0][0], +x[0][1]], [+x[1][0], +x[1][1]]]), b) : t;
  }, b.scaleExtent = function(x) {
    return arguments.length ? (i[0] = +x[0], i[1] = +x[1], b) : [i[0], i[1]];
  }, b.translateExtent = function(x) {
    return arguments.length ? (s[0][0] = +x[0][0], s[1][0] = +x[1][0], s[0][1] = +x[0][1], s[1][1] = +x[1][1], b) : [[s[0][0], s[0][1]], [s[1][0], s[1][1]]];
  }, b.constrain = function(x) {
    return arguments.length ? (n = x, b) : n;
  }, b.duration = function(x) {
    return arguments.length ? (a = +x, b) : a;
  }, b.interpolate = function(x) {
    return arguments.length ? (l = x, b) : l;
  }, b.on = function() {
    var x = c.on.apply(c, arguments);
    return x === c ? b : x;
  }, b.clickDistance = function(x) {
    return arguments.length ? (p = (x = +x) * x, b) : Math.sqrt(p);
  }, b.tapDistance = function(x) {
    return arguments.length ? (w = +x, b) : w;
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
], Bd = ["Enter", " ", "Escape"], R0 = {
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
var oo;
(function(e) {
  e.Strict = "strict", e.Loose = "loose";
})(oo || (oo = {}));
var Tr;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(Tr || (Tr = {}));
var Xi;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(Xi || (Xi = {}));
const ma = {
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
var zn;
(function(e) {
  e.Bezier = "default", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e.SimpleBezier = "simplebezier";
})(zn || (zn = {}));
var Ho;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(Ho || (Ho = {}));
var be;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(be || (be = {}));
const dc = {
  [be.Left]: be.Right,
  [be.Right]: be.Left,
  [be.Top]: be.Bottom,
  [be.Bottom]: be.Top
};
function B0(e, t) {
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
function fc(e, t, n) {
  if (!n)
    return;
  const r = [];
  e.forEach((o, i) => {
    t?.has(i) || r.push(o);
  }), r.length && n(r);
}
function F0(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const Fd = (e) => "id" in e && "source" in e && "target" in e, K0 = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), cl = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), ei = (e, t = [0, 0]) => {
  const { width: n, height: r } = pr(e), o = e.origin ?? t, i = n * o[0], s = r * o[1];
  return {
    x: e.position.x - i,
    y: e.position.y - s
  };
}, W0 = (e, t = { nodeOrigin: [0, 0] }) => {
  if (e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = e.reduce((r, o) => {
    const i = typeof o == "string";
    let s = !t.nodeLookup && !i ? o : void 0;
    t.nodeLookup && (s = i ? t.nodeLookup.get(o) : cl(o) ? o : t.nodeLookup.get(o.id));
    const a = s ? qi(s, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return Ss(r, a);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return Es(n);
}, ti = (e, t = {}) => {
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 }, r = !1;
  return e.forEach((o) => {
    (t.filter === void 0 || t.filter(o)) && (n = Ss(n, qi(o)), r = !0);
  }), r ? Es(n) : { x: 0, y: 0, width: 0, height: 0 };
}, ul = (e, t, [n, r, o] = [0, 0, 1], i = !1, s = !1) => {
  const a = {
    ...ri(t, [n, r, o]),
    width: t.width / o,
    height: t.height / o
  }, l = [];
  for (const c of e.values()) {
    const { measured: d, selectable: f = !0, hidden: h = !1 } = c;
    if (s && !f || h)
      continue;
    const g = d.width ?? c.width ?? c.initialWidth ?? null, v = d.height ?? c.height ?? c.initialHeight ?? null, p = Ro(a, so(c)), w = (g ?? 0) * (v ?? 0), b = i && p > 0;
    (!c.internals.handleBounds || b || p >= w || c.dragging) && l.push(c);
  }
  return l;
}, Z0 = (e, t) => {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    n.add(r.id);
  }), t.filter((r) => n.has(r.source) || n.has(r.target));
};
function Y0(e, t) {
  const n = /* @__PURE__ */ new Map(), r = t?.nodes ? new Set(t.nodes.map((o) => o.id)) : null;
  return e.forEach((o) => {
    o.measured.width && o.measured.height && (t?.includeHiddenNodes || !o.hidden) && (!r || r.has(o.id)) && n.set(o.id, o);
  }), n;
}
async function j0({ nodes: e, width: t, height: n, panZoom: r, minZoom: o, maxZoom: i }, s) {
  if (e.size === 0)
    return Promise.resolve(!0);
  const a = Y0(e, s), l = ti(a), c = dl(l, t, n, s?.minZoom ?? o, s?.maxZoom ?? i, s?.padding ?? 0.1);
  return await r.setViewport(c, {
    duration: s?.duration,
    ease: s?.ease,
    interpolate: s?.interpolate
  }), Promise.resolve(!0);
}
function Kd({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
  const s = n.get(e), a = s.parentId ? n.get(s.parentId) : void 0, { x: l, y: c } = a ? a.internals.positionAbsolute : { x: 0, y: 0 }, d = s.origin ?? r;
  let f = s.extent || o;
  if (s.extent === "parent" && !s.expandParent)
    if (!a)
      i?.("005", Lo.error005());
    else {
      const g = a.measured.width, v = a.measured.height;
      g && v && (f = [
        [l, c],
        [l + g, c + v]
      ]);
    }
  else a && ao(s.extent) && (f = [
    [s.extent[0][0] + l, s.extent[0][1] + c],
    [s.extent[1][0] + l, s.extent[1][1] + c]
  ]);
  const h = ao(f) ? Ir(t, f, s.measured) : t;
  return (s.measured.width === void 0 || s.measured.height === void 0) && i?.("015", Lo.error015()), {
    position: {
      x: h.x - l + (s.measured.width ?? 0) * d[0],
      y: h.y - c + (s.measured.height ?? 0) * d[1]
    },
    positionAbsolute: h
  };
}
async function X0({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: r, onBeforeDelete: o }) {
  const i = new Set(e.map((h) => h.id)), s = [];
  for (const h of n) {
    if (h.deletable === !1)
      continue;
    const g = i.has(h.id), v = !g && h.parentId && s.find((p) => p.id === h.parentId);
    (g || v) && s.push(h);
  }
  const a = new Set(t.map((h) => h.id)), l = r.filter((h) => h.deletable !== !1), d = Z0(s, l);
  for (const h of l)
    a.has(h.id) && !d.find((v) => v.id === h.id) && d.push(h);
  if (!o)
    return {
      edges: d,
      nodes: s
    };
  const f = await o({
    nodes: s,
    edges: d
  });
  return typeof f == "boolean" ? f ? { edges: d, nodes: s } : { edges: [], nodes: [] } : f;
}
const io = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), Ir = (e = { x: 0, y: 0 }, t, n) => ({
  x: io(e.x, t[0][0], t[1][0] - (n?.width ?? 0)),
  y: io(e.y, t[0][1], t[1][1] - (n?.height ?? 0))
});
function Wd(e, t, n) {
  const { width: r, height: o } = pr(n), { x: i, y: s } = n.internals.positionAbsolute;
  return Ir(e, [
    [i, s],
    [i + r, s + o]
  ], t);
}
const hc = (e, t, n) => e < t ? io(Math.abs(e - t), 1, t) / t : e > n ? -io(Math.abs(e - n), 1, t) / t : 0, Zd = (e, t, n = 15, r = 40) => {
  const o = hc(e.x, r, t.width - r) * n, i = hc(e.y, r, t.height - r) * n;
  return [o, i];
}, Ss = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), ya = ({ x: e, y: t, width: n, height: r }) => ({
  x: e,
  y: t,
  x2: e + n,
  y2: t + r
}), Es = ({ x: e, y: t, x2: n, y2: r }) => ({
  x: e,
  y: t,
  width: n - e,
  height: r - t
}), so = (e, t = [0, 0]) => {
  const { x: n, y: r } = cl(e) ? e.internals.positionAbsolute : ei(e, t);
  return {
    x: n,
    y: r,
    width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
    height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
  };
}, qi = (e, t = [0, 0]) => {
  const { x: n, y: r } = cl(e) ? e.internals.positionAbsolute : ei(e, t);
  return {
    x: n,
    y: r,
    x2: n + (e.measured?.width ?? e.width ?? e.initialWidth ?? 0),
    y2: r + (e.measured?.height ?? e.height ?? e.initialHeight ?? 0)
  };
}, Yd = (e, t) => Es(Ss(ya(e), ya(t))), Ro = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, gc = (e) => In(e.width) && In(e.height) && In(e.x) && In(e.y), In = (e) => !isNaN(e) && isFinite(e), q0 = (e, t) => {
}, ni = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), ri = ({ x: e, y: t }, [n, r, o], i = !1, s = [1, 1]) => {
  const a = {
    x: (e - n) / o,
    y: (t - r) / o
  };
  return i ? ni(a, s) : a;
}, Gi = ({ x: e, y: t }, [n, r, o]) => ({
  x: e * o + n,
  y: t * o + r
});
function Zr(e, t) {
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
function G0(e, t, n) {
  if (typeof e == "string" || typeof e == "number") {
    const r = Zr(e, n), o = Zr(e, t);
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
    const r = Zr(e.top ?? e.y ?? 0, n), o = Zr(e.bottom ?? e.y ?? 0, n), i = Zr(e.left ?? e.x ?? 0, t), s = Zr(e.right ?? e.x ?? 0, t);
    return { top: r, right: s, bottom: o, left: i, x: i + s, y: r + o };
  }
  return { top: 0, right: 0, bottom: 0, left: 0, x: 0, y: 0 };
}
function U0(e, t, n, r, o, i) {
  const { x: s, y: a } = Gi(e, [t, n, r]), { x: l, y: c } = Gi({ x: e.x + e.width, y: e.y + e.height }, [t, n, r]), d = o - l, f = i - c;
  return {
    left: Math.floor(s),
    top: Math.floor(a),
    right: Math.floor(d),
    bottom: Math.floor(f)
  };
}
const dl = (e, t, n, r, o, i) => {
  const s = G0(i, t, n), a = (t - s.x) / e.width, l = (n - s.y) / e.height, c = Math.min(a, l), d = io(c, r, o), f = e.x + e.width / 2, h = e.y + e.height / 2, g = t / 2 - f * d, v = n / 2 - h * d, p = U0(e, g, v, d, t, n), w = {
    left: Math.min(p.left - s.left, 0),
    top: Math.min(p.top - s.top, 0),
    right: Math.min(p.right - s.right, 0),
    bottom: Math.min(p.bottom - s.bottom, 0)
  };
  return {
    x: g - w.left + w.right,
    y: v - w.top + w.bottom,
    zoom: d
  };
}, kr = () => typeof navigator < "u" && navigator?.userAgent?.indexOf("Mac") >= 0;
function ao(e) {
  return e != null && e !== "parent";
}
function pr(e) {
  return {
    width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
    height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
  };
}
function jd(e) {
  return (e.measured?.width ?? e.width ?? e.initialWidth) !== void 0 && (e.measured?.height ?? e.height ?? e.initialHeight) !== void 0;
}
function J0(e, t = { width: 0, height: 0 }, n, r, o) {
  const i = { ...e }, s = r.get(n);
  if (s) {
    const a = s.origin || o;
    i.x += s.internals.positionAbsolute.x - (t.width ?? 0) * a[0], i.y += s.internals.positionAbsolute.y - (t.height ?? 0) * a[1];
  }
  return i;
}
function Q0(e) {
  return { ...R0, ...e || {} };
}
function Fs(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: i, y: s } = an(e), a = ri({ x: i - (o?.left ?? 0), y: s - (o?.top ?? 0) }, r), { x: l, y: c } = n ? ni(a, t) : a;
  return {
    xSnapped: l,
    ySnapped: c,
    ...a
  };
}
const Xd = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), qd = (e) => e?.getRootNode?.() || window?.document, ey = ["INPUT", "SELECT", "TEXTAREA"];
function Gd(e) {
  const t = e.composedPath?.()?.[0] || e.target;
  return t?.nodeType !== 1 ? !1 : ey.includes(t.nodeName) || t.hasAttribute("contenteditable") || !!t.closest(".nokey");
}
const Ud = (e) => "clientX" in e, an = (e, t) => {
  const n = Ud(e), r = n ? e.clientX : e.touches?.[0].clientX, o = n ? e.clientY : e.touches?.[0].clientY;
  return {
    x: r - (t?.left ?? 0),
    y: o - (t?.top ?? 0)
  };
}, vc = (e, t, n, r, o) => {
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
      ...Xd(s)
    };
  });
};
function ty({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: o, sourceControlY: i, targetControlX: s, targetControlY: a }) {
  const l = e * 0.125 + o * 0.375 + s * 0.375 + n * 0.125, c = t * 0.125 + i * 0.375 + a * 0.375 + r * 0.125, d = Math.abs(l - e), f = Math.abs(c - t);
  return [l, c, d, f];
}
function yi(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function pc({ pos: e, x1: t, y1: n, x2: r, y2: o, c: i }) {
  switch (e) {
    case be.Left:
      return [t - yi(t - r, i), n];
    case be.Right:
      return [t + yi(r - t, i), n];
    case be.Top:
      return [t, n - yi(n - o, i)];
    case be.Bottom:
      return [t, n + yi(o - n, i)];
  }
}
function Jd({ sourceX: e, sourceY: t, sourcePosition: n = be.Bottom, targetX: r, targetY: o, targetPosition: i = be.Top, curvature: s = 0.25 }) {
  const [a, l] = pc({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: o,
    c: s
  }), [c, d] = pc({
    pos: i,
    x1: r,
    y1: o,
    x2: e,
    y2: t,
    c: s
  }), [f, h, g, v] = ty({
    sourceX: e,
    sourceY: t,
    targetX: r,
    targetY: o,
    sourceControlX: a,
    sourceControlY: l,
    targetControlX: c,
    targetControlY: d
  });
  return [
    `M${e},${t} C${a},${l} ${c},${d} ${r},${o}`,
    f,
    h,
    g,
    v
  ];
}
function Qd({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const o = Math.abs(n - e) / 2, i = n < e ? n + o : n - o, s = Math.abs(r - t) / 2, a = r < t ? r + s : r - s;
  return [i, a, o, s];
}
function ny({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r, elevateOnSelect: o = !1 }) {
  if (r !== void 0)
    return r;
  const i = o && n ? 1e3 : 0, s = Math.max(e.parentId || o && e.selected ? e.internals.z : 0, t.parentId || o && t.selected ? t.internals.z : 0);
  return i + s;
}
function ry({ sourceNode: e, targetNode: t, width: n, height: r, transform: o }) {
  const i = Ss(qi(e), qi(t));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const s = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return Ro(s, Es(i)) > 0;
}
const oy = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, iy = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), sy = (e, t) => {
  if (!e.source || !e.target)
    return t;
  let n;
  return Fd(e) ? n = { ...e } : n = {
    ...e,
    id: oy(e)
  }, iy(n, t) ? t : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, t.concat(n));
};
function ef({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const [o, i, s, a] = Qd({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: r
  });
  return [`M ${e},${t}L ${n},${r}`, o, i, s, a];
}
const mc = {
  [be.Left]: { x: -1, y: 0 },
  [be.Right]: { x: 1, y: 0 },
  [be.Top]: { x: 0, y: -1 },
  [be.Bottom]: { x: 0, y: 1 }
}, ay = ({ source: e, sourcePosition: t = be.Bottom, target: n }) => t === be.Left || t === be.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, yc = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function ly({ source: e, sourcePosition: t = be.Bottom, target: n, targetPosition: r = be.Top, center: o, offset: i, stepPosition: s }) {
  const a = mc[t], l = mc[r], c = { x: e.x + a.x * i, y: e.y + a.y * i }, d = { x: n.x + l.x * i, y: n.y + l.y * i }, f = ay({
    source: c,
    sourcePosition: t,
    target: d
  }), h = f.x !== 0 ? "x" : "y", g = f[h];
  let v = [], p, w;
  const b = { x: 0, y: 0 }, k = { x: 0, y: 0 }, [, , E, _] = Qd({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (a[h] * l[h] === -1) {
    h === "x" ? (p = o.x ?? c.x + (d.x - c.x) * s, w = o.y ?? (c.y + d.y) / 2) : (p = o.x ?? (c.x + d.x) / 2, w = o.y ?? c.y + (d.y - c.y) * s);
    const T = [
      { x: p, y: c.y },
      { x: p, y: d.y }
    ], V = [
      { x: c.x, y: w },
      { x: d.x, y: w }
    ];
    a[h] === g ? v = h === "x" ? T : V : v = h === "x" ? V : T;
  } else {
    const T = [{ x: c.x, y: d.y }], V = [{ x: d.x, y: c.y }];
    if (h === "x" ? v = a.x === g ? V : T : v = a.y === g ? T : V, t === r) {
      const P = Math.abs(e[h] - n[h]);
      if (P <= i) {
        const A = Math.min(i - 1, i - P);
        a[h] === g ? b[h] = (c[h] > e[h] ? -1 : 1) * A : k[h] = (d[h] > n[h] ? -1 : 1) * A;
      }
    }
    if (t !== r) {
      const P = h === "x" ? "y" : "x", A = a[h] === l[P], x = c[P] > d[P], C = c[P] < d[P];
      (a[h] === 1 && (!A && x || A && C) || a[h] !== 1 && (!A && C || A && x)) && (v = h === "x" ? T : V);
    }
    const O = { x: c.x + b.x, y: c.y + b.y }, H = { x: d.x + k.x, y: d.y + k.y }, Z = Math.max(Math.abs(O.x - v[0].x), Math.abs(H.x - v[0].x)), I = Math.max(Math.abs(O.y - v[0].y), Math.abs(H.y - v[0].y));
    Z >= I ? (p = (O.x + H.x) / 2, w = v[0].y) : (p = v[0].x, w = (O.y + H.y) / 2);
  }
  return [[
    e,
    { x: c.x + b.x, y: c.y + b.y },
    ...v,
    { x: d.x + k.x, y: d.y + k.y },
    n
  ], p, w, E, _];
}
function cy(e, t, n, r) {
  const o = Math.min(yc(e, t) / 2, yc(t, n) / 2, r), { x: i, y: s } = t;
  if (e.x === i && i === n.x || e.y === s && s === n.y)
    return `L${i} ${s}`;
  if (e.y === s) {
    const c = e.x < n.x ? -1 : 1, d = e.y < n.y ? 1 : -1;
    return `L ${i + o * c},${s}Q ${i},${s} ${i},${s + o * d}`;
  }
  const a = e.x < n.x ? 1 : -1, l = e.y < n.y ? -1 : 1;
  return `L ${i},${s + o * l}Q ${i},${s} ${i + o * a},${s}`;
}
function fl({ sourceX: e, sourceY: t, sourcePosition: n = be.Bottom, targetX: r, targetY: o, targetPosition: i = be.Top, borderRadius: s = 5, centerX: a, centerY: l, offset: c = 20, stepPosition: d = 0.5 }) {
  const [f, h, g, v, p] = ly({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: a, y: l },
    offset: c,
    stepPosition: d
  });
  return [f.reduce((b, k, E) => {
    let _ = "";
    return E > 0 && E < f.length - 1 ? _ = cy(f[E - 1], k, f[E + 1], s) : _ = `${E === 0 ? "M" : "L"}${k.x} ${k.y}`, b += _, b;
  }, ""), h, g, v, p];
}
function wc(e) {
  return e && !!(e.internals.handleBounds || e.handles?.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function uy(e) {
  const { sourceNode: t, targetNode: n } = e;
  if (!wc(t) || !wc(n))
    return null;
  const r = t.internals.handleBounds || bc(t.handles), o = n.internals.handleBounds || bc(n.handles), i = xc(r?.source ?? [], e.sourceHandle), s = xc(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === oo.Strict ? o?.target ?? [] : (o?.target ?? []).concat(o?.source ?? []),
    e.targetHandle
  );
  if (!i || !s)
    return e.onError?.("008", Lo.error008(i ? "target" : "source", {
      id: e.id,
      sourceHandle: e.sourceHandle,
      targetHandle: e.targetHandle
    })), null;
  const a = i?.position || be.Bottom, l = s?.position || be.Top, c = Bo(t, i, a), d = Bo(n, s, l);
  return {
    sourceX: c.x,
    sourceY: c.y,
    targetX: d.x,
    targetY: d.y,
    sourcePosition: a,
    targetPosition: l
  };
}
function bc(e) {
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
function Bo(e, t, n = be.Left, r = !1) {
  const o = (t?.x ?? 0) + e.internals.positionAbsolute.x, i = (t?.y ?? 0) + e.internals.positionAbsolute.y, { width: s, height: a } = t ?? pr(e);
  if (r)
    return { x: o + s / 2, y: i + a / 2 };
  switch (t?.position ?? n) {
    case be.Top:
      return { x: o + s / 2, y: i };
    case be.Right:
      return { x: o + s, y: i + a / 2 };
    case be.Bottom:
      return { x: o + s / 2, y: i + a };
    case be.Left:
      return { x: o, y: i + a / 2 };
  }
}
function xc(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function wa(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((r) => `${r}=${e[r]}`).join("&")}` : "";
}
function dy(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const i = /* @__PURE__ */ new Set();
  return e.reduce((s, a) => ([a.markerStart || r, a.markerEnd || o].forEach((l) => {
    if (l && typeof l == "object") {
      const c = wa(l, t);
      i.has(c) || (s.push({ id: c, color: l.color || n, ...l }), i.add(c));
    }
  }), s), []).sort((s, a) => s.id.localeCompare(a.id));
}
function fy(e, t, n, r, o) {
  let i = 0.5;
  o === "start" ? i = 0 : o === "end" && (i = 1);
  let s = [
    (e.x + e.width * i) * t.zoom + t.x,
    e.y * t.zoom + t.y - r
  ], a = [-100 * i, -100];
  switch (n) {
    case be.Right:
      s = [
        (e.x + e.width) * t.zoom + t.x + r,
        (e.y + e.height * i) * t.zoom + t.y
      ], a = [0, -100 * i];
      break;
    case be.Bottom:
      s[1] = (e.y + e.height) * t.zoom + t.y + r, a[1] = 0;
      break;
    case be.Left:
      s = [
        e.x * t.zoom + t.x - r,
        (e.y + e.height * i) * t.zoom + t.y
      ], a = [-100, -100 * i];
      break;
  }
  return `translate(${s[0]}px, ${s[1]}px) translate(${a[0]}%, ${a[1]}%)`;
}
const tf = 1e3, hy = 10, hl = {
  nodeOrigin: [0, 0],
  nodeExtent: pa,
  elevateNodesOnSelect: !0,
  defaults: {}
}, gy = {
  ...hl,
  checkEquality: !0
};
function gl(e, t) {
  const n = { ...e };
  for (const r in t)
    t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function vy(e, t, n) {
  const r = gl(hl, n);
  for (const o of e.values())
    if (o.parentId)
      vl(o, e, t, r);
    else {
      const i = ei(o, r.nodeOrigin), s = ao(o.extent) ? o.extent : r.nodeExtent, a = Ir(i, s, pr(o));
      o.internals.positionAbsolute = a;
    }
}
function py(e, t) {
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
function my(e, t, n, r) {
  const o = gl(gy, r);
  let i = { i: -1 }, s = e.length > 0;
  const a = new Map(t), l = o?.elevateNodesOnSelect ? tf : 0;
  t.clear(), n.clear();
  for (const c of e) {
    let d = a.get(c.id);
    if (o.checkEquality && c === d?.internals.userNode)
      t.set(c.id, d);
    else {
      const f = ei(c, o.nodeOrigin), h = ao(c.extent) ? c.extent : o.nodeExtent, g = Ir(f, h, pr(c));
      d = {
        ...o.defaults,
        ...c,
        measured: {
          width: c.measured?.width,
          height: c.measured?.height
        },
        internals: {
          positionAbsolute: g,
          // if user re-initializes the node or removes `measured` for whatever reason, we reset the handleBounds so that the node gets re-measured
          handleBounds: py(c, d),
          z: nf(c, l),
          userNode: c
        }
      }, t.set(c.id, d);
    }
    (d.measured === void 0 || d.measured.width === void 0 || d.measured.height === void 0) && !d.hidden && (s = !1), c.parentId && vl(d, t, n, r, i);
  }
  return s;
}
function yy(e, t) {
  if (!e.parentId)
    return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function vl(e, t, n, r, o) {
  const { elevateNodesOnSelect: i, nodeOrigin: s, nodeExtent: a } = gl(hl, r), l = e.parentId, c = t.get(l);
  if (!c) {
    console.warn(`Parent node ${l} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  yy(e, n), o && !c.parentId && c.internals.rootParentIndex === void 0 && (c.internals.rootParentIndex = ++o.i, c.internals.z = c.internals.z + o.i * hy), o && c.internals.rootParentIndex !== void 0 && (o.i = c.internals.rootParentIndex);
  const d = i ? tf : 0, { x: f, y: h, z: g } = wy(e, c, s, a, d), { positionAbsolute: v } = e.internals, p = f !== v.x || h !== v.y;
  (p || g !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: p ? { x: f, y: h } : v,
      z: g
    }
  });
}
function nf(e, t) {
  return (In(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function wy(e, t, n, r, o) {
  const { x: i, y: s } = t.internals.positionAbsolute, a = pr(e), l = ei(e, n), c = ao(e.extent) ? Ir(l, e.extent, a) : l;
  let d = Ir({ x: i + c.x, y: s + c.y }, r, a);
  e.extent === "parent" && (d = Wd(d, a, t));
  const f = nf(e, o), h = t.internals.z ?? 0;
  return {
    x: d.x,
    y: d.y,
    z: h >= f ? h + 1 : f
  };
}
function by(e, t, n, r = [0, 0]) {
  const o = [], i = /* @__PURE__ */ new Map();
  for (const s of e) {
    const a = t.get(s.parentId);
    if (!a)
      continue;
    const l = i.get(s.parentId)?.expandedRect ?? so(a), c = Yd(l, s.rect);
    i.set(s.parentId, { expandedRect: c, parent: a });
  }
  return i.size > 0 && i.forEach(({ expandedRect: s, parent: a }, l) => {
    const c = a.internals.positionAbsolute, d = pr(a), f = a.origin ?? r, h = s.x < c.x ? Math.round(Math.abs(c.x - s.x)) : 0, g = s.y < c.y ? Math.round(Math.abs(c.y - s.y)) : 0, v = Math.max(d.width, Math.round(s.width)), p = Math.max(d.height, Math.round(s.height)), w = (v - d.width) * f[0], b = (p - d.height) * f[1];
    (h > 0 || g > 0 || w || b) && (o.push({
      id: l,
      type: "position",
      position: {
        x: a.position.x - h + w,
        y: a.position.y - g + b
      }
    }), n.get(l)?.forEach((k) => {
      e.some((E) => E.id === k.id) || o.push({
        id: k.id,
        type: "position",
        position: {
          x: k.position.x + h,
          y: k.position.y + g
        }
      });
    })), (d.width < s.width || d.height < s.height || h || g) && o.push({
      id: l,
      type: "dimensions",
      setAttributes: !0,
      dimensions: {
        width: v + (h ? f[0] * h - w : 0),
        height: p + (g ? f[1] * g - b : 0)
      }
    });
  }), o;
}
function xy(e, t, n, r, o, i) {
  const s = r?.querySelector(".xyflow__viewport");
  let a = !1;
  if (!s)
    return { changes: [], updatedInternals: a };
  const l = [], c = window.getComputedStyle(s), { m22: d } = new window.DOMMatrixReadOnly(c.transform), f = [];
  for (const h of e.values()) {
    const g = t.get(h.id);
    if (!g)
      continue;
    if (g.hidden) {
      t.set(g.id, {
        ...g,
        internals: {
          ...g.internals,
          handleBounds: void 0
        }
      }), a = !0;
      continue;
    }
    const v = Xd(h.nodeElement), p = g.measured.width !== v.width || g.measured.height !== v.height;
    if (!!(v.width && v.height && (p || !g.internals.handleBounds || h.force))) {
      const b = h.nodeElement.getBoundingClientRect(), k = ao(g.extent) ? g.extent : i;
      let { positionAbsolute: E } = g.internals;
      g.parentId && g.extent === "parent" ? E = Wd(E, v, t.get(g.parentId)) : k && (E = Ir(E, k, v));
      const _ = {
        ...g,
        measured: v,
        internals: {
          ...g.internals,
          positionAbsolute: E,
          handleBounds: {
            source: vc("source", h.nodeElement, b, d, g.id),
            target: vc("target", h.nodeElement, b, d, g.id)
          }
        }
      };
      t.set(g.id, _), g.parentId && vl(_, t, n, { nodeOrigin: o }), a = !0, p && (l.push({
        id: g.id,
        type: "dimensions",
        dimensions: v
      }), g.expandParent && g.parentId && f.push({
        id: g.id,
        parentId: g.parentId,
        rect: so(_, o)
      }));
    }
  }
  if (f.length > 0) {
    const h = by(f, t, n, o);
    l.push(...h);
  }
  return { changes: l, updatedInternals: a };
}
async function _y({ delta: e, panZoom: t, transform: n, translateExtent: r, width: o, height: i }) {
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
function _c(e, t, n, r, o, i) {
  let s = o;
  const a = r.get(s) || /* @__PURE__ */ new Map();
  r.set(s, a.set(n, t)), s = `${o}-${e}`;
  const l = r.get(s) || /* @__PURE__ */ new Map();
  if (r.set(s, l.set(n, t)), i) {
    s = `${o}-${e}-${i}`;
    const c = r.get(s) || /* @__PURE__ */ new Map();
    r.set(s, c.set(n, t));
  }
}
function Cy(e, t, n) {
  e.clear(), t.clear();
  for (const r of n) {
    const { source: o, target: i, sourceHandle: s = null, targetHandle: a = null } = r, l = { edgeId: r.id, source: o, target: i, sourceHandle: s, targetHandle: a }, c = `${o}-${s}--${i}-${a}`, d = `${i}-${a}--${o}-${s}`;
    _c("source", l, d, e, o, s), _c("target", l, c, e, i, a), t.set(r.id, r);
  }
}
function ky(e, t) {
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
function rf(e, t) {
  if (!e.parentId)
    return !1;
  const n = t.get(e.parentId);
  return n ? n.selected ? !0 : rf(n, t) : !1;
}
function Cc(e, t, n) {
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
function Sy(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  for (const [i, s] of e)
    if ((s.selected || s.id === r) && (!s.parentId || !rf(s, e)) && (s.draggable || t && typeof s.draggable > "u")) {
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
function Ey({ dragItems: e, snapGrid: t, x: n, y: r }) {
  const o = e.values().next().value;
  if (!o)
    return null;
  const i = {
    x: n - o.distance.x,
    y: r - o.distance.y
  }, s = ni(i, t);
  return {
    x: s.x - i.x,
    y: s.y - i.y
  };
}
function Ny({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: o }) {
  let i = { x: null, y: null }, s = 0, a = /* @__PURE__ */ new Map(), l = !1, c = { x: 0, y: 0 }, d = null, f = !1, h = null, g = !1, v = !1, p = null;
  function w({ noDragClassName: k, handleSelector: E, domNode: _, isSelectable: S, nodeId: T, nodeClickDistance: V = 0 }) {
    h = Ut(_);
    function O({ x: P, y: A }) {
      const { nodeLookup: x, nodeExtent: C, snapGrid: M, snapToGrid: z, nodeOrigin: K, onNodeDrag: X, onSelectionDrag: $, onError: Y, updateNodePositions: U } = t();
      i = { x: P, y: A };
      let W = !1;
      const G = a.size > 1, R = G && C ? ya(ti(a)) : null, j = G && z ? Ey({
        dragItems: a,
        snapGrid: M,
        x: P,
        y: A
      }) : null;
      for (const [ee, ne] of a) {
        if (!x.has(ee))
          continue;
        let J = { x: P - ne.distance.x, y: A - ne.distance.y };
        z && (J = j ? {
          x: Math.round(J.x + j.x),
          y: Math.round(J.y + j.y)
        } : ni(J, M));
        let Ce = null;
        if (G && C && !ne.extent && R) {
          const { positionAbsolute: re } = ne.internals, he = re.x - R.x + C[0][0], me = re.x + ne.measured.width - R.x2 + C[1][0], Se = re.y - R.y + C[0][1], fe = re.y + ne.measured.height - R.y2 + C[1][1];
          Ce = [
            [he, Se],
            [me, fe]
          ];
        }
        const { position: ie, positionAbsolute: le } = Kd({
          nodeId: ee,
          nextPosition: J,
          nodeLookup: x,
          nodeExtent: Ce || C,
          nodeOrigin: K,
          onError: Y
        });
        W = W || ne.position.x !== ie.x || ne.position.y !== ie.y, ne.position = ie, ne.internals.positionAbsolute = le;
      }
      if (v = v || W, !!W && (U(a, !0), p && (r || X || !T && $))) {
        const [ee, ne] = Ks({
          nodeId: T,
          dragItems: a,
          nodeLookup: x
        });
        r?.(p, a, ee, ne), X?.(p, ee, ne), T || $?.(p, ne);
      }
    }
    async function H() {
      if (!d)
        return;
      const { transform: P, panBy: A, autoPanSpeed: x, autoPanOnNodeDrag: C } = t();
      if (!C) {
        l = !1, cancelAnimationFrame(s);
        return;
      }
      const [M, z] = Zd(c, d, x);
      (M !== 0 || z !== 0) && (i.x = (i.x ?? 0) - M / P[2], i.y = (i.y ?? 0) - z / P[2], await A({ x: M, y: z }) && O(i)), s = requestAnimationFrame(H);
    }
    function Z(P) {
      const { nodeLookup: A, multiSelectionActive: x, nodesDraggable: C, transform: M, snapGrid: z, snapToGrid: K, selectNodesOnDrag: X, onNodeDragStart: $, onSelectionDragStart: Y, unselectNodesAndEdges: U } = t();
      f = !0, (!X || !S) && !x && T && (A.get(T)?.selected || U()), S && X && T && e?.(T);
      const W = Fs(P.sourceEvent, { transform: M, snapGrid: z, snapToGrid: K, containerBounds: d });
      if (i = W, a = Sy(A, C, W, T), a.size > 0 && (n || $ || !T && Y)) {
        const [G, R] = Ks({
          nodeId: T,
          dragItems: a,
          nodeLookup: A
        });
        n?.(P.sourceEvent, a, G, R), $?.(P.sourceEvent, G, R), T || Y?.(P.sourceEvent, R);
      }
    }
    const I = j1().clickDistance(V).on("start", (P) => {
      const { domNode: A, nodeDragThreshold: x, transform: C, snapGrid: M, snapToGrid: z } = t();
      d = A?.getBoundingClientRect() || null, g = !1, v = !1, p = P.sourceEvent, x === 0 && Z(P), i = Fs(P.sourceEvent, { transform: C, snapGrid: M, snapToGrid: z, containerBounds: d }), c = an(P.sourceEvent, d);
    }).on("drag", (P) => {
      const { autoPanOnNodeDrag: A, transform: x, snapGrid: C, snapToGrid: M, nodeDragThreshold: z, nodeLookup: K } = t(), X = Fs(P.sourceEvent, { transform: x, snapGrid: C, snapToGrid: M, containerBounds: d });
      if (p = P.sourceEvent, (P.sourceEvent.type === "touchmove" && P.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      T && !K.has(T)) && (g = !0), !g) {
        if (!l && A && f && (l = !0, H()), !f) {
          const $ = an(P.sourceEvent, d), Y = $.x - c.x, U = $.y - c.y;
          Math.sqrt(Y * Y + U * U) > z && Z(P);
        }
        (i.x !== X.xSnapped || i.y !== X.ySnapped) && a && f && (c = an(P.sourceEvent, d), O(X));
      }
    }).on("end", (P) => {
      if (!(!f || g) && (l = !1, f = !1, cancelAnimationFrame(s), a.size > 0)) {
        const { nodeLookup: A, updateNodePositions: x, onNodeDragStop: C, onSelectionDragStop: M } = t();
        if (v && (x(a, !1), v = !1), o || C || !T && M) {
          const [z, K] = Ks({
            nodeId: T,
            dragItems: a,
            nodeLookup: A,
            dragging: !1
          });
          o?.(P.sourceEvent, a, z, K), C?.(P.sourceEvent, z, K), T || M?.(P.sourceEvent, K);
        }
      }
    }).filter((P) => {
      const A = P.target;
      return !P.button && (!k || !Cc(A, `.${k}`, _)) && (!E || Cc(A, E, _));
    });
    h.call(I);
  }
  function b() {
    h?.on(".drag", null);
  }
  return {
    update: w,
    destroy: b
  };
}
function Py(e, t, n) {
  const r = [], o = {
    x: e.x - n,
    y: e.y - n,
    width: n * 2,
    height: n * 2
  };
  for (const i of t.values())
    Ro(o, so(i)) > 0 && r.push(i);
  return r;
}
const Ty = 250;
function Ay(e, t, n, r) {
  let o = [], i = 1 / 0;
  const s = Py(e, n, t + Ty);
  for (const a of s) {
    const l = [...a.internals.handleBounds?.source ?? [], ...a.internals.handleBounds?.target ?? []];
    for (const c of l) {
      if (r.nodeId === c.nodeId && r.type === c.type && r.id === c.id)
        continue;
      const { x: d, y: f } = Bo(a, c, c.position, !0), h = Math.sqrt(Math.pow(d - e.x, 2) + Math.pow(f - e.y, 2));
      h > t || (h < i ? (o = [{ ...c, x: d, y: f }], i = h) : h === i && o.push({ ...c, x: d, y: f }));
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
function of(e, t, n, r, o, i = !1) {
  const s = r.get(e);
  if (!s)
    return null;
  const a = o === "strict" ? s.internals.handleBounds?.[t] : [...s.internals.handleBounds?.source ?? [], ...s.internals.handleBounds?.target ?? []], l = (n ? a?.find((c) => c.id === n) : a?.[0]) ?? null;
  return l && i ? { ...l, ...Bo(s, l, l.position, !0) } : l;
}
function sf(e, t) {
  return e || (t?.classList.contains("target") ? "target" : t?.classList.contains("source") ? "source" : null);
}
function $y(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const af = () => !0;
function My(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: s, domNode: a, nodeLookup: l, lib: c, autoPanOnConnect: d, flowId: f, panBy: h, cancelConnection: g, onConnectStart: v, onConnect: p, onConnectEnd: w, isValidConnection: b = af, onReconnectEnd: k, updateConnection: E, getTransform: _, getFromHandle: S, autoPanSpeed: T, dragThreshold: V = 1, handleDomNode: O }) {
  const H = qd(e.target);
  let Z = 0, I;
  const { x: P, y: A } = an(e), x = sf(i, O), C = a?.getBoundingClientRect();
  let M = !1;
  if (!C || !x)
    return;
  const z = of(o, x, r, l, t);
  if (!z)
    return;
  let K = an(e, C), X = !1, $ = null, Y = !1, U = null;
  function W() {
    if (!d || !C)
      return;
    const [ie, le] = Zd(K, C, T);
    h({ x: ie, y: le }), Z = requestAnimationFrame(W);
  }
  const G = {
    ...z,
    nodeId: o,
    type: x,
    position: z.position
  }, R = l.get(o);
  let ee = {
    inProgress: !0,
    isValid: null,
    from: Bo(R, G, be.Left, !0),
    fromHandle: G,
    fromPosition: G.position,
    fromNode: R,
    to: K,
    toHandle: null,
    toPosition: dc[G.position],
    toNode: null,
    pointer: K
  };
  function ne() {
    M = !0, E(ee), v?.(e, { nodeId: o, handleId: r, handleType: x });
  }
  V === 0 && ne();
  function J(ie) {
    if (!M) {
      const { x: me, y: Se } = an(ie), fe = me - P, xe = Se - A;
      if (!(fe * fe + xe * xe > V * V))
        return;
      ne();
    }
    if (!S() || !G) {
      Ce(ie);
      return;
    }
    const le = _();
    K = an(ie, C), I = Ay(ri(K, le, !1, [1, 1]), n, l, G), X || (W(), X = !0);
    const re = lf(ie, {
      handle: I,
      connectionMode: t,
      fromNodeId: o,
      fromHandleId: r,
      fromType: s ? "target" : "source",
      isValidConnection: b,
      doc: H,
      lib: c,
      flowId: f,
      nodeLookup: l
    });
    U = re.handleDomNode, $ = re.connection, Y = $y(!!I, re.isValid);
    const he = {
      // from stays the same
      ...ee,
      isValid: Y,
      to: re.toHandle && Y ? Gi({ x: re.toHandle.x, y: re.toHandle.y }, le) : K,
      toHandle: re.toHandle,
      toPosition: Y && re.toHandle ? re.toHandle.position : dc[G.position],
      toNode: re.toHandle ? l.get(re.toHandle.nodeId) : null,
      pointer: K
    };
    E(he), ee = he;
  }
  function Ce(ie) {
    if (!("touches" in ie && ie.touches.length > 0)) {
      if (M) {
        (I || U) && $ && Y && p?.($);
        const { inProgress: le, ...re } = ee, he = {
          ...re,
          toPosition: ee.toHandle ? ee.toPosition : null
        };
        w?.(ie, he), i && k?.(ie, he);
      }
      g(), cancelAnimationFrame(Z), X = !1, Y = !1, $ = null, U = null, H.removeEventListener("mousemove", J), H.removeEventListener("mouseup", Ce), H.removeEventListener("touchmove", J), H.removeEventListener("touchend", Ce);
    }
  }
  H.addEventListener("mousemove", J), H.addEventListener("mouseup", Ce), H.addEventListener("touchmove", J), H.addEventListener("touchend", Ce);
}
function lf(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: s, lib: a, flowId: l, isValidConnection: c = af, nodeLookup: d }) {
  const f = i === "target", h = t ? s.querySelector(`.${a}-flow__handle[data-id="${l}-${t?.nodeId}-${t?.id}-${t?.type}"]`) : null, { x: g, y: v } = an(e), p = s.elementFromPoint(g, v), w = p?.classList.contains(`${a}-flow__handle`) ? p : h, b = {
    handleDomNode: w,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (w) {
    const k = sf(void 0, w), E = w.getAttribute("data-nodeid"), _ = w.getAttribute("data-handleid"), S = w.classList.contains("connectable"), T = w.classList.contains("connectableend");
    if (!E || !k)
      return b;
    const V = {
      source: f ? E : r,
      sourceHandle: f ? _ : o,
      target: f ? r : E,
      targetHandle: f ? o : _
    };
    b.connection = V;
    const H = S && T && (n === oo.Strict ? f && k === "source" || !f && k === "target" : E !== r || _ !== o);
    b.isValid = H && c(V), b.toHandle = of(E, k, _, d, n, !0);
  }
  return b;
}
const kc = {
  onPointerDown: My,
  isValid: lf
};
function Dy({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = Ut(e);
  function i({ translateExtent: a, width: l, height: c, zoomStep: d = 1, pannable: f = !0, zoomable: h = !0, inversePan: g = !1 }) {
    const v = (E) => {
      if (E.sourceEvent.type !== "wheel" || !t)
        return;
      const _ = n(), S = E.sourceEvent.ctrlKey && kr() ? 10 : 1, T = -E.sourceEvent.deltaY * (E.sourceEvent.deltaMode === 1 ? 0.05 : E.sourceEvent.deltaMode ? 1 : 2e-3) * d, V = _[2] * Math.pow(2, T * S);
      t.scaleTo(V);
    };
    let p = [0, 0];
    const w = (E) => {
      (E.sourceEvent.type === "mousedown" || E.sourceEvent.type === "touchstart") && (p = [
        E.sourceEvent.clientX ?? E.sourceEvent.touches[0].clientX,
        E.sourceEvent.clientY ?? E.sourceEvent.touches[0].clientY
      ]);
    }, b = (E) => {
      const _ = n();
      if (E.sourceEvent.type !== "mousemove" && E.sourceEvent.type !== "touchmove" || !t)
        return;
      const S = [
        E.sourceEvent.clientX ?? E.sourceEvent.touches[0].clientX,
        E.sourceEvent.clientY ?? E.sourceEvent.touches[0].clientY
      ], T = [S[0] - p[0], S[1] - p[1]];
      p = S;
      const V = r() * Math.max(_[2], Math.log(_[2])) * (g ? -1 : 1), O = {
        x: _[0] - T[0] * V,
        y: _[1] - T[1] * V
      }, H = [
        [0, 0],
        [l, c]
      ];
      t.setViewportConstrained({
        x: O.x,
        y: O.y,
        zoom: _[2]
      }, H, a);
    }, k = Rd().on("start", w).on("zoom", f ? b : null).on("zoom.wheel", h ? v : null);
    o.call(k, {});
  }
  function s() {
    o.on("zoom", null);
  }
  return {
    update: i,
    destroy: s,
    pointer: rn
  };
}
const Ns = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), Ws = ({ x: e, y: t, zoom: n }) => ks.translate(e, t).scale(n), jr = (e, t) => e.target.closest(`.${t}`), cf = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), Oy = (e) => ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2, Zs = (e, t = 0, n = Oy, r = () => {
}) => {
  const o = typeof t == "number" && t > 0;
  return o || r(), o ? e.transition().duration(t).ease(n).on("end", r) : e;
}, uf = (e) => {
  const t = e.ctrlKey && kr() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function zy({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: s, onPanZoomStart: a, onPanZoom: l, onPanZoomEnd: c }) {
  return (d) => {
    if (jr(d, t))
      return d.ctrlKey && d.preventDefault(), !1;
    d.preventDefault(), d.stopImmediatePropagation();
    const f = n.property("__zoom").k || 1;
    if (d.ctrlKey && s) {
      const w = rn(d), b = uf(d), k = f * Math.pow(2, b);
      r.scaleTo(n, k, w, d);
      return;
    }
    const h = d.deltaMode === 1 ? 20 : 1;
    let g = o === Tr.Vertical ? 0 : d.deltaX * h, v = o === Tr.Horizontal ? 0 : d.deltaY * h;
    !kr() && d.shiftKey && o !== Tr.Vertical && (g = d.deltaY * h, v = 0), r.translateBy(
      n,
      -(g / f) * i,
      -(v / f) * i,
      // @ts-ignore
      { internal: !0 }
    );
    const p = Ns(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling ? (l?.(d, p), e.panScrollTimeout = setTimeout(() => {
      c?.(d, p), e.isPanScrolling = !1;
    }, 150)) : (e.isPanScrolling = !0, a?.(d, p));
  };
}
function Vy({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(r, o) {
    const i = r.type === "wheel", s = !t && i && !r.ctrlKey, a = jr(r, e);
    if (r.ctrlKey && i && a && r.preventDefault(), s || a)
      return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function Iy({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (r) => {
    if (r.sourceEvent?.internal)
      return;
    const o = Ns(r.transform);
    e.mouseButton = r.sourceEvent?.button || 0, e.isZoomingOrPanning = !0, e.prevViewport = o, r.sourceEvent?.type === "mousedown" && t(!0), n && n?.(r.sourceEvent, o);
  };
}
function Ly({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (i) => {
    e.usedRightMouseButton = !!(n && cf(t, e.mouseButton ?? 0)), i.sourceEvent?.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !i.sourceEvent?.internal && o?.(i.sourceEvent, Ns(i.transform));
  };
}
function Hy({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (s) => {
    if (!s.sourceEvent?.internal && (e.isZoomingOrPanning = !1, i && cf(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && s.sourceEvent && i(s.sourceEvent), e.usedRightMouseButton = !1, r(!1), o)) {
      const a = Ns(s.transform);
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
function Ry({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: r, panOnScroll: o, zoomOnDoubleClick: i, userSelectionActive: s, noWheelClassName: a, noPanClassName: l, lib: c, connectionInProgress: d }) {
  return (f) => {
    const h = e || t, g = n && f.ctrlKey, v = f.type === "wheel";
    if (f.button === 1 && f.type === "mousedown" && (jr(f, `${c}-flow__node`) || jr(f, `${c}-flow__edge`)))
      return !0;
    if (!r && !h && !o && !i && !n || s || d && !v || jr(f, a) && v || jr(f, l) && (!v || o && v && !e) || !n && f.ctrlKey && v)
      return !1;
    if (!n && f.type === "touchstart" && f.touches?.length > 1)
      return f.preventDefault(), !1;
    if (!h && !o && !g && v || !r && (f.type === "mousedown" || f.type === "touchstart") || Array.isArray(r) && !r.includes(f.button) && f.type === "mousedown")
      return !1;
    const p = Array.isArray(r) && r.includes(f.button) || !f.button || f.button <= 1;
    return (!f.ctrlKey || v) && p;
  };
}
function By({ domNode: e, minZoom: t, maxZoom: n, translateExtent: r, viewport: o, onPanZoom: i, onPanZoomStart: s, onPanZoomEnd: a, onDraggingChange: l }) {
  const c = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: {},
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, d = e.getBoundingClientRect(), f = Rd().scaleExtent([t, n]).translateExtent(r), h = Ut(e).call(f);
  k({
    x: o.x,
    y: o.y,
    zoom: io(o.zoom, t, n)
  }, [
    [0, 0],
    [d.width, d.height]
  ], r);
  const g = h.on("wheel.zoom"), v = h.on("dblclick.zoom");
  f.wheelDelta(uf);
  function p(I, P) {
    return h ? new Promise((A) => {
      f?.interpolate(P?.interpolate === "linear" ? Ao : Ti).transform(Zs(h, P?.duration, P?.ease, () => A(!0)), I);
    }) : Promise.resolve(!1);
  }
  function w({ noWheelClassName: I, noPanClassName: P, onPaneContextMenu: A, userSelectionActive: x, panOnScroll: C, panOnDrag: M, panOnScrollMode: z, panOnScrollSpeed: K, preventScrolling: X, zoomOnPinch: $, zoomOnScroll: Y, zoomOnDoubleClick: U, zoomActivationKeyPressed: W, lib: G, onTransformChange: R, connectionInProgress: j, paneClickDistance: ee, selectionOnDrag: ne }) {
    x && !c.isZoomingOrPanning && b();
    const J = C && !W && !x;
    f.clickDistance(ne ? 1 / 0 : !In(ee) || ee < 0 ? 0 : ee);
    const Ce = J ? zy({
      zoomPanValues: c,
      noWheelClassName: I,
      d3Selection: h,
      d3Zoom: f,
      panOnScrollMode: z,
      panOnScrollSpeed: K,
      zoomOnPinch: $,
      onPanZoomStart: s,
      onPanZoom: i,
      onPanZoomEnd: a
    }) : Vy({
      noWheelClassName: I,
      preventScrolling: X,
      d3ZoomHandler: g
    });
    if (h.on("wheel.zoom", Ce, { passive: !1 }), !x) {
      const le = Iy({
        zoomPanValues: c,
        onDraggingChange: l,
        onPanZoomStart: s
      });
      f.on("start", le);
      const re = Ly({
        zoomPanValues: c,
        panOnDrag: M,
        onPaneContextMenu: !!A,
        onPanZoom: i,
        onTransformChange: R
      });
      f.on("zoom", re);
      const he = Hy({
        zoomPanValues: c,
        panOnDrag: M,
        panOnScroll: C,
        onPaneContextMenu: A,
        onPanZoomEnd: a,
        onDraggingChange: l
      });
      f.on("end", he);
    }
    const ie = Ry({
      zoomActivationKeyPressed: W,
      panOnDrag: M,
      zoomOnScroll: Y,
      panOnScroll: C,
      zoomOnDoubleClick: U,
      zoomOnPinch: $,
      userSelectionActive: x,
      noPanClassName: P,
      noWheelClassName: I,
      lib: G,
      connectionInProgress: j
    });
    f.filter(ie), U ? h.on("dblclick.zoom", v) : h.on("dblclick.zoom", null);
  }
  function b() {
    f.on("zoom", null);
  }
  async function k(I, P, A) {
    const x = Ws(I), C = f?.constrain()(x, P, A);
    return C && await p(C), new Promise((M) => M(C));
  }
  async function E(I, P) {
    const A = Ws(I);
    return await p(A, P), new Promise((x) => x(A));
  }
  function _(I) {
    if (h) {
      const P = Ws(I), A = h.property("__zoom");
      (A.k !== I.zoom || A.x !== I.x || A.y !== I.y) && f?.transform(h, P, null, { sync: !0 });
    }
  }
  function S() {
    const I = h ? Hd(h.node()) : { x: 0, y: 0, k: 1 };
    return { x: I.x, y: I.y, zoom: I.k };
  }
  function T(I, P) {
    return h ? new Promise((A) => {
      f?.interpolate(P?.interpolate === "linear" ? Ao : Ti).scaleTo(Zs(h, P?.duration, P?.ease, () => A(!0)), I);
    }) : Promise.resolve(!1);
  }
  function V(I, P) {
    return h ? new Promise((A) => {
      f?.interpolate(P?.interpolate === "linear" ? Ao : Ti).scaleBy(Zs(h, P?.duration, P?.ease, () => A(!0)), I);
    }) : Promise.resolve(!1);
  }
  function O(I) {
    f?.scaleExtent(I);
  }
  function H(I) {
    f?.translateExtent(I);
  }
  function Z(I) {
    const P = !In(I) || I < 0 ? 0 : I;
    f?.clickDistance(P);
  }
  return {
    update: w,
    destroy: b,
    setViewport: E,
    setViewportConstrained: k,
    getViewport: S,
    scaleTo: T,
    scaleBy: V,
    setScaleExtent: O,
    setTranslateExtent: H,
    syncViewport: _,
    setClickDistance: Z
  };
}
var Sc;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(Sc || (Sc = {}));
var Fy = /* @__PURE__ */ te("<div><!></div>");
function ur(e, t) {
  ce(t, !0);
  let n = y(t, "id", 7, null), r = y(t, "type", 7, "source"), o = y(t, "position", 23, () => be.Top), i = y(t, "style", 7), s = y(t, "class", 7), a = y(t, "isConnectable", 7), l = y(t, "isConnectableStart", 7, !0), c = y(t, "isConnectableEnd", 7, !0), d = y(t, "isValidConnection", 7), f = y(t, "onconnect", 7), h = y(t, "ondisconnect", 7), g = y(t, "children", 7), v = /* @__PURE__ */ Re(t, [
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
  const p = cn("svelteflow__node_id"), w = cn("svelteflow__node_connectable");
  let b = /* @__PURE__ */ N(() => r() === "target"), k = /* @__PURE__ */ N(() => a() !== void 0 ? a() : w.value), E = hn(), _ = /* @__PURE__ */ N(() => E.ariaLabelConfig), S = null;
  Kt(() => {
    if (f() || h()) {
      E.edges;
      let $ = E.connectionLookup.get(`${p}-${r()}${n() ? `-${n()}` : ""}`);
      if (S && !B0($, S)) {
        const Y = $ ?? /* @__PURE__ */ new Map();
        fc(S, Y, h()), fc(Y, S, f());
      }
      S = new Map($);
    }
  });
  let T = /* @__PURE__ */ N(() => {
    if (!E.connection.inProgress)
      return [!1, !1, !1, !1, null];
    const { fromHandle: $, toHandle: Y, isValid: U } = E.connection, W = $ && $.nodeId === p && $.type === r() && $.id === n(), G = Y && Y.nodeId === p && Y.type === r() && Y.id === n(), R = E.connectionMode === oo.Strict ? $?.type !== r() : p !== $?.nodeId || n() !== $?.id;
    return [
      !0,
      W,
      G,
      R,
      G && U
    ];
  }), V = /* @__PURE__ */ N(() => uo(u(T), 5)), O = /* @__PURE__ */ N(() => u(V)[0]), H = /* @__PURE__ */ N(() => u(V)[1]), Z = /* @__PURE__ */ N(() => u(V)[2]), I = /* @__PURE__ */ N(() => u(V)[3]), P = /* @__PURE__ */ N(() => u(V)[4]);
  function A($) {
    const Y = E.onbeforeconnect ? E.onbeforeconnect($) : $;
    Y && (E.addEdge(Y), E.onconnect?.($));
  }
  function x($) {
    const Y = Ud($);
    $.currentTarget && (Y && $.button === 0 || !Y) && kc.onPointerDown($, {
      handleId: n(),
      nodeId: p,
      isTarget: u(b),
      connectionRadius: E.connectionRadius,
      domNode: E.domNode,
      nodeLookup: E.nodeLookup,
      connectionMode: E.connectionMode,
      lib: "svelte",
      autoPanOnConnect: E.autoPanOnConnect,
      autoPanSpeed: E.autoPanSpeed,
      flowId: E.flowId,
      isValidConnection: d() ?? E.isValidConnection,
      updateConnection: E.updateConnection,
      cancelConnection: E.cancelConnection,
      panBy: E.panBy,
      onConnect: A,
      onConnectStart: (U, W) => {
        E.onconnectstart?.(U, {
          nodeId: W.nodeId,
          handleId: W.handleId,
          handleType: W.handleType
        });
      },
      onConnectEnd: (U, W) => {
        E.onconnectend?.(U, W);
      },
      getTransform: () => [E.viewport.x, E.viewport.y, E.viewport.zoom],
      getFromHandle: () => E.connection.fromHandle,
      dragThreshold: E.connectionDragThreshold,
      handleDomNode: $.currentTarget
    });
  }
  function C($) {
    if (!p || !E.clickConnectStartHandle && !l())
      return;
    if (!E.clickConnectStartHandle) {
      E.onclickconnectstart?.($, { nodeId: p, handleId: n(), handleType: r() }), E.clickConnectStartHandle = { nodeId: p, type: r(), id: n() };
      return;
    }
    const Y = qd($.target), U = d() ?? E.isValidConnection, { connectionMode: W, clickConnectStartHandle: G, flowId: R, nodeLookup: j } = E, { connection: ee, isValid: ne } = kc.isValid($, {
      handle: { nodeId: p, id: n(), type: r() },
      connectionMode: W,
      fromNodeId: G.nodeId,
      fromHandleId: G.id ?? null,
      fromType: G.type,
      isValidConnection: U,
      flowId: R,
      doc: Y,
      lib: "svelte",
      nodeLookup: j
    });
    ne && ee && A(ee);
    const J = structuredClone(Wa(E.connection));
    delete J.inProgress, J.toPosition = J.toHandle ? J.toHandle.position : null, E.onclickconnectend?.($, J), E.clickConnectStartHandle = null;
  }
  var M = {
    get id() {
      return n();
    },
    set id($ = null) {
      n($), m();
    },
    get type() {
      return r();
    },
    set type($ = "source") {
      r($), m();
    },
    get position() {
      return o();
    },
    set position($ = be.Top) {
      o($), m();
    },
    get style() {
      return i();
    },
    set style($) {
      i($), m();
    },
    get class() {
      return s();
    },
    set class($) {
      s($), m();
    },
    get isConnectable() {
      return a();
    },
    set isConnectable($) {
      a($), m();
    },
    get isConnectableStart() {
      return l();
    },
    set isConnectableStart($ = !0) {
      l($), m();
    },
    get isConnectableEnd() {
      return c();
    },
    set isConnectableEnd($ = !0) {
      c($), m();
    },
    get isValidConnection() {
      return d();
    },
    set isValidConnection($) {
      d($), m();
    },
    get onconnect() {
      return f();
    },
    set onconnect($) {
      f($), m();
    },
    get ondisconnect() {
      return h();
    },
    set ondisconnect($) {
      h($), m();
    },
    get children() {
      return g();
    },
    set children($) {
      g($), m();
    }
  }, z = Fy(), K = () => {
  };
  Ge(z, () => ({
    "data-handleid": n(),
    "data-nodeid": p,
    "data-handlepos": o(),
    "data-id": `${E.flowId ?? ""}-${p ?? ""}-${n() ?? "null" ?? ""}-${r() ?? ""}`,
    class: [
      "svelte-flow__handle",
      `svelte-flow__handle-${o()}`,
      E.noDragClass,
      E.noPanClass,
      o(),
      s()
    ],
    onmousedown: x,
    ontouchstart: x,
    onclick: E.clickConnect ? C : void 0,
    onkeypress: K,
    style: i(),
    role: "button",
    "aria-label": u(_)["handle.ariaLabel"],
    tabindex: "-1",
    ...v,
    [tr]: {
      valid: u(P),
      connectingto: u(Z),
      connectingfrom: u(H),
      source: !u(b),
      target: u(b),
      connectablestart: l(),
      connectableend: c(),
      connectable: u(k),
      connectionindicator: u(k) && (!u(O) || u(I)) && (u(O) || E.clickConnectStartHandle ? c() : l())
    }
  }));
  var X = F(z);
  return je(X, () => g() ?? tt), B(z), D(e, z), ue(M);
}
ae(
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
var Ky = /* @__PURE__ */ te("<!> <!>", 1);
function pl(e, t) {
  ce(t, !0);
  let n = y(t, "data", 7), r = y(t, "targetPosition", 23, () => be.Top), o = y(t, "sourcePosition", 23, () => be.Bottom);
  var i = {
    get data() {
      return n();
    },
    set data(d) {
      n(d), m();
    },
    get targetPosition() {
      return r();
    },
    set targetPosition(d = be.Top) {
      r(d), m();
    },
    get sourcePosition() {
      return o();
    },
    set sourcePosition(d = be.Bottom) {
      o(d), m();
    }
  }, s = Ky(), a = oe(s);
  ur(a, {
    type: "target",
    get position() {
      return r();
    }
  });
  var l = L(a), c = L(l);
  return ur(c, {
    type: "source",
    get position() {
      return o();
    }
  }), Ee(() => Xe(l, ` ${n()?.label ?? ""} `)), D(e, s), ue(i);
}
ae(pl, { data: {}, targetPosition: {}, sourcePosition: {} }, [], [], !0);
var Wy = /* @__PURE__ */ te(" <!>", 1);
function df(e, t) {
  ce(t, !0);
  let n = y(t, "data", 23, () => ({ label: "Node" })), r = y(t, "sourcePosition", 23, () => be.Bottom);
  var o = {
    get data() {
      return n();
    },
    set data(l = { label: "Node" }) {
      n(l), m();
    },
    get sourcePosition() {
      return r();
    },
    set sourcePosition(l = be.Bottom) {
      r(l), m();
    }
  };
  ye();
  var i = Wy(), s = oe(i), a = L(s);
  return ur(a, {
    type: "source",
    get position() {
      return r();
    }
  }), Ee(() => Xe(s, `${n()?.label ?? ""} `)), D(e, i), ue(o);
}
ae(df, { data: {}, sourcePosition: {} }, [], [], !0);
var Zy = /* @__PURE__ */ te(" <!>", 1);
function ff(e, t) {
  ce(t, !0);
  let n = y(t, "data", 23, () => ({ label: "Node" })), r = y(t, "targetPosition", 23, () => be.Top);
  var o = {
    get data() {
      return n();
    },
    set data(l = { label: "Node" }) {
      n(l), m();
    },
    get targetPosition() {
      return r();
    },
    set targetPosition(l = be.Top) {
      r(l), m();
    }
  };
  ye();
  var i = Zy(), s = oe(i), a = L(s);
  return ur(a, {
    type: "target",
    get position() {
      return r();
    }
  }), Ee(() => Xe(s, `${n()?.label ?? ""} `)), D(e, i), ue(o);
}
ae(ff, { data: {}, targetPosition: {} }, [], [], !0);
function hf(e, t) {
}
ae(hf, {}, [], [], !0);
function Ys(e, t, n) {
  if (!n || !t)
    return;
  const r = n === "root" ? t : t.querySelector(`.svelte-flow__${n}`);
  r && r.appendChild(e);
}
function gf(e, t) {
  const n = /* @__PURE__ */ N(hn), r = /* @__PURE__ */ N(() => u(n).domNode);
  let o;
  return u(r) ? Ys(e, u(r), t) : o = go(() => {
    Ue(() => {
      Ys(e, u(r), t), o?.();
    });
  }), {
    async update(i) {
      Ys(e, u(r), i);
    },
    destroy() {
      e.parentNode && e.parentNode.removeChild(e), o?.();
    }
  };
}
function vf() {
  let e = /* @__PURE__ */ Pe(typeof window > "u");
  if (u(e)) {
    const t = go(() => {
      Ue(() => {
        Q(e, !1), t?.();
      });
    });
  }
  return {
    get value() {
      return u(e);
    }
  };
}
const Ec = (e) => K0(e), Yy = (e) => Fd(e);
function Nn(e) {
  return e === void 0 ? void 0 : `${e}px`;
}
const Ui = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
};
var jy = /* @__PURE__ */ te("<div><!></div>");
const Xy = {
  hash: "svelte-herprs",
  code: ".transparent.svelte-herprs {background:transparent;}"
};
function pf(e, t) {
  ce(t, !0), Ze(e, Xy);
  let n = y(t, "x", 7, 0), r = y(t, "y", 7, 0), o = y(t, "width", 7), i = y(t, "height", 7), s = y(t, "selectEdgeOnClick", 7, !1), a = y(t, "transparent", 7, !1), l = y(t, "class", 7), c = y(t, "children", 7), d = /* @__PURE__ */ Re(t, [
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
  const f = hn(), h = cn("svelteflow__edge_id");
  if (!h)
    throw new Error("EdgeLabel must be used within an edge");
  let g = /* @__PURE__ */ N(() => f.visible.edges.get(h)?.zIndex);
  var v = {
    get x() {
      return n();
    },
    set x(k = 0) {
      n(k), m();
    },
    get y() {
      return r();
    },
    set y(k = 0) {
      r(k), m();
    },
    get width() {
      return o();
    },
    set width(k) {
      o(k), m();
    },
    get height() {
      return i();
    },
    set height(k) {
      i(k), m();
    },
    get selectEdgeOnClick() {
      return s();
    },
    set selectEdgeOnClick(k = !1) {
      s(k), m();
    },
    get transparent() {
      return a();
    },
    set transparent(k = !1) {
      a(k), m();
    },
    get class() {
      return l();
    },
    set class(k) {
      l(k), m();
    },
    get children() {
      return c();
    },
    set children(k) {
      c(k), m();
    }
  }, p = jy(), w = () => {
    s() && f.handleEdgeSelection(h);
  };
  Ge(
    p,
    (k) => ({
      class: [
        "svelte-flow__edge-label",
        { transparent: a() },
        l()
      ],
      tabindex: "-1",
      onclick: w,
      ...d,
      [bn]: k
    }),
    [
      () => ({
        display: vf().value ? "none" : void 0,
        cursor: s() ? "pointer" : void 0,
        transform: `translate(-50%, -50%) translate(${n() ?? ""}px,${r() ?? ""}px)`,
        "pointer-events": "all",
        width: Nn(o()),
        height: Nn(i()),
        "z-index": u(g)
      })
    ],
    void 0,
    void 0,
    "svelte-herprs"
  );
  var b = F(p);
  return je(b, () => c() ?? tt), B(p), xt(p, (k, E) => gf?.(k, E), () => "edge-labels"), D(e, p), ue(v);
}
ae(
  pf,
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
var qy = /* @__PURE__ */ pe("<path></path>"), Gy = /* @__PURE__ */ pe('<path fill="none"></path><!><!>', 1);
function oi(e, t) {
  ce(t, !0);
  let n = y(t, "id", 7), r = y(t, "path", 7), o = y(t, "label", 7), i = y(t, "labelX", 7), s = y(t, "labelY", 7), a = y(t, "labelStyle", 7), l = y(t, "markerStart", 7), c = y(t, "markerEnd", 7), d = y(t, "style", 7), f = y(t, "interactionWidth", 7, 20), h = y(t, "class", 7), g = /* @__PURE__ */ Re(t, [
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
  var v = {
    get id() {
      return n();
    },
    set id(S) {
      n(S), m();
    },
    get path() {
      return r();
    },
    set path(S) {
      r(S), m();
    },
    get label() {
      return o();
    },
    set label(S) {
      o(S), m();
    },
    get labelX() {
      return i();
    },
    set labelX(S) {
      i(S), m();
    },
    get labelY() {
      return s();
    },
    set labelY(S) {
      s(S), m();
    },
    get labelStyle() {
      return a();
    },
    set labelStyle(S) {
      a(S), m();
    },
    get markerStart() {
      return l();
    },
    set markerStart(S) {
      l(S), m();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(S) {
      c(S), m();
    },
    get style() {
      return d();
    },
    set style(S) {
      d(S), m();
    },
    get interactionWidth() {
      return f();
    },
    set interactionWidth(S = 20) {
      f(S), m();
    },
    get class() {
      return h();
    },
    set class(S) {
      h(S), m();
    }
  }, p = Gy(), w = oe(p), b = L(w);
  {
    var k = (S) => {
      var T = qy();
      Ge(T, () => ({
        d: r(),
        "stroke-opacity": 0,
        "stroke-width": f(),
        fill: "none",
        class: "svelte-flow__edge-interaction",
        ...g
      })), D(S, T);
    };
    se(b, (S) => {
      f() > 0 && S(k);
    });
  }
  var E = L(b);
  {
    var _ = (S) => {
      pf(S, {
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
        children: (T, V) => {
          ye();
          var O = Ne();
          Ee(() => Xe(O, o())), D(T, O);
        },
        $$slots: { default: !0 }
      });
    };
    se(E, (S) => {
      o() && S(_);
    });
  }
  return Ee(() => {
    ke(w, "id", n()), ke(w, "d", r()), Bt(w, 0, qn(["svelte-flow__edge-path", h()])), ke(w, "marker-start", l()), ke(w, "marker-end", c()), mt(w, d());
  }), D(e, p), ue(v);
}
ae(
  oi,
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
function ml(e, t) {
  ce(t, !0);
  let n = y(t, "id", 7), r = y(t, "interactionWidth", 7), o = y(t, "label", 7), i = y(t, "labelStyle", 7), s = y(t, "markerEnd", 7), a = y(t, "markerStart", 7), l = y(t, "pathOptions", 7), c = y(t, "sourcePosition", 7), d = y(t, "sourceX", 7), f = y(t, "sourceY", 7), h = y(t, "style", 7), g = y(t, "targetPosition", 7), v = y(t, "targetX", 7), p = y(t, "targetY", 7), w = /* @__PURE__ */ N(() => Jd({
    sourceX: d(),
    sourceY: f(),
    targetX: v(),
    targetY: p(),
    sourcePosition: c(),
    targetPosition: g(),
    curvature: l()?.curvature
  })), b = /* @__PURE__ */ N(() => uo(u(w), 3)), k = /* @__PURE__ */ N(() => u(b)[0]), E = /* @__PURE__ */ N(() => u(b)[1]), _ = /* @__PURE__ */ N(() => u(b)[2]);
  var S = {
    get id() {
      return n();
    },
    set id(T) {
      n(T), m();
    },
    get interactionWidth() {
      return r();
    },
    set interactionWidth(T) {
      r(T), m();
    },
    get label() {
      return o();
    },
    set label(T) {
      o(T), m();
    },
    get labelStyle() {
      return i();
    },
    set labelStyle(T) {
      i(T), m();
    },
    get markerEnd() {
      return s();
    },
    set markerEnd(T) {
      s(T), m();
    },
    get markerStart() {
      return a();
    },
    set markerStart(T) {
      a(T), m();
    },
    get pathOptions() {
      return l();
    },
    set pathOptions(T) {
      l(T), m();
    },
    get sourcePosition() {
      return c();
    },
    set sourcePosition(T) {
      c(T), m();
    },
    get sourceX() {
      return d();
    },
    set sourceX(T) {
      d(T), m();
    },
    get sourceY() {
      return f();
    },
    set sourceY(T) {
      f(T), m();
    },
    get style() {
      return h();
    },
    set style(T) {
      h(T), m();
    },
    get targetPosition() {
      return g();
    },
    set targetPosition(T) {
      g(T), m();
    },
    get targetX() {
      return v();
    },
    set targetX(T) {
      v(T), m();
    },
    get targetY() {
      return p();
    },
    set targetY(T) {
      p(T), m();
    }
  };
  return oi(e, {
    get id() {
      return n();
    },
    get path() {
      return u(k);
    },
    get labelX() {
      return u(E);
    },
    get labelY() {
      return u(_);
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
      return h();
    }
  }), ue(S);
}
ae(
  ml,
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
function mf(e, t) {
  ce(t, !0);
  let n = y(t, "interactionWidth", 7), r = y(t, "label", 7), o = y(t, "labelStyle", 7), i = y(t, "style", 7), s = y(t, "markerEnd", 7), a = y(t, "markerStart", 7), l = y(t, "sourcePosition", 7), c = y(t, "sourceX", 7), d = y(t, "sourceY", 7), f = y(t, "targetPosition", 7), h = y(t, "targetX", 7), g = y(t, "targetY", 7), v = /* @__PURE__ */ N(() => fl({
    sourceX: c(),
    sourceY: d(),
    targetX: h(),
    targetY: g(),
    sourcePosition: l(),
    targetPosition: f()
  })), p = /* @__PURE__ */ N(() => uo(u(v), 3)), w = /* @__PURE__ */ N(() => u(p)[0]), b = /* @__PURE__ */ N(() => u(p)[1]), k = /* @__PURE__ */ N(() => u(p)[2]);
  var E = {
    get interactionWidth() {
      return n();
    },
    set interactionWidth(_) {
      n(_), m();
    },
    get label() {
      return r();
    },
    set label(_) {
      r(_), m();
    },
    get labelStyle() {
      return o();
    },
    set labelStyle(_) {
      o(_), m();
    },
    get style() {
      return i();
    },
    set style(_) {
      i(_), m();
    },
    get markerEnd() {
      return s();
    },
    set markerEnd(_) {
      s(_), m();
    },
    get markerStart() {
      return a();
    },
    set markerStart(_) {
      a(_), m();
    },
    get sourcePosition() {
      return l();
    },
    set sourcePosition(_) {
      l(_), m();
    },
    get sourceX() {
      return c();
    },
    set sourceX(_) {
      c(_), m();
    },
    get sourceY() {
      return d();
    },
    set sourceY(_) {
      d(_), m();
    },
    get targetPosition() {
      return f();
    },
    set targetPosition(_) {
      f(_), m();
    },
    get targetX() {
      return h();
    },
    set targetX(_) {
      h(_), m();
    },
    get targetY() {
      return g();
    },
    set targetY(_) {
      g(_), m();
    }
  };
  return oi(e, {
    get path() {
      return u(w);
    },
    get labelX() {
      return u(b);
    },
    get labelY() {
      return u(k);
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
  }), ue(E);
}
ae(
  mf,
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
function yf(e, t) {
  ce(t, !0);
  let n = y(t, "sourceX", 7), r = y(t, "sourceY", 7), o = y(t, "targetX", 7), i = y(t, "targetY", 7), s = y(t, "label", 7), a = y(t, "labelStyle", 7), l = y(t, "markerStart", 7), c = y(t, "markerEnd", 7), d = y(t, "interactionWidth", 7), f = y(t, "style", 7), h = /* @__PURE__ */ N(() => ef({
    sourceX: n(),
    sourceY: r(),
    targetX: o(),
    targetY: i()
  })), g = /* @__PURE__ */ N(() => uo(u(h), 3)), v = /* @__PURE__ */ N(() => u(g)[0]), p = /* @__PURE__ */ N(() => u(g)[1]), w = /* @__PURE__ */ N(() => u(g)[2]);
  var b = {
    get sourceX() {
      return n();
    },
    set sourceX(k) {
      n(k), m();
    },
    get sourceY() {
      return r();
    },
    set sourceY(k) {
      r(k), m();
    },
    get targetX() {
      return o();
    },
    set targetX(k) {
      o(k), m();
    },
    get targetY() {
      return i();
    },
    set targetY(k) {
      i(k), m();
    },
    get label() {
      return s();
    },
    set label(k) {
      s(k), m();
    },
    get labelStyle() {
      return a();
    },
    set labelStyle(k) {
      a(k), m();
    },
    get markerStart() {
      return l();
    },
    set markerStart(k) {
      l(k), m();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(k) {
      c(k), m();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(k) {
      d(k), m();
    },
    get style() {
      return f();
    },
    set style(k) {
      f(k), m();
    }
  };
  return oi(e, {
    get path() {
      return u(v);
    },
    get labelX() {
      return u(p);
    },
    get labelY() {
      return u(w);
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
      return c();
    },
    get interactionWidth() {
      return d();
    },
    get style() {
      return f();
    }
  }), ue(b);
}
ae(
  yf,
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
function wf(e, t) {
  ce(t, !0);
  let n = y(t, "sourceX", 7), r = y(t, "sourceY", 7), o = y(t, "sourcePosition", 7), i = y(t, "targetX", 7), s = y(t, "targetY", 7), a = y(t, "targetPosition", 7), l = y(t, "label", 7), c = y(t, "labelStyle", 7), d = y(t, "markerStart", 7), f = y(t, "markerEnd", 7), h = y(t, "interactionWidth", 7), g = y(t, "style", 7), v = /* @__PURE__ */ N(() => fl({
    sourceX: n(),
    sourceY: r(),
    targetX: i(),
    targetY: s(),
    sourcePosition: o(),
    targetPosition: a(),
    borderRadius: 0
  })), p = /* @__PURE__ */ N(() => uo(u(v), 3)), w = /* @__PURE__ */ N(() => u(p)[0]), b = /* @__PURE__ */ N(() => u(p)[1]), k = /* @__PURE__ */ N(() => u(p)[2]);
  var E = {
    get sourceX() {
      return n();
    },
    set sourceX(_) {
      n(_), m();
    },
    get sourceY() {
      return r();
    },
    set sourceY(_) {
      r(_), m();
    },
    get sourcePosition() {
      return o();
    },
    set sourcePosition(_) {
      o(_), m();
    },
    get targetX() {
      return i();
    },
    set targetX(_) {
      i(_), m();
    },
    get targetY() {
      return s();
    },
    set targetY(_) {
      s(_), m();
    },
    get targetPosition() {
      return a();
    },
    set targetPosition(_) {
      a(_), m();
    },
    get label() {
      return l();
    },
    set label(_) {
      l(_), m();
    },
    get labelStyle() {
      return c();
    },
    set labelStyle(_) {
      c(_), m();
    },
    get markerStart() {
      return d();
    },
    set markerStart(_) {
      d(_), m();
    },
    get markerEnd() {
      return f();
    },
    set markerEnd(_) {
      f(_), m();
    },
    get interactionWidth() {
      return h();
    },
    set interactionWidth(_) {
      h(_), m();
    },
    get style() {
      return g();
    },
    set style(_) {
      g(_), m();
    }
  };
  return oi(e, {
    get path() {
      return u(w);
    },
    get labelX() {
      return u(b);
    },
    get labelY() {
      return u(k);
    },
    get label() {
      return l();
    },
    get labelStyle() {
      return c();
    },
    get markerStart() {
      return d();
    },
    get markerEnd() {
      return f();
    },
    get interactionWidth() {
      return h();
    },
    get style() {
      return g();
    }
  }), ue(E);
}
ae(
  wf,
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
class Uy {
  #t;
  #e;
  /**
   *
   * @param {() => T} fn
   * @param {(update: () => void) => void} onsubscribe
   */
  constructor(t, n) {
    this.#t = t, this.#e = ho(n);
  }
  get current() {
    return this.#e(), this.#t();
  }
}
const Jy = /\(.+\)/, Qy = /* @__PURE__ */ new Set(["all", "print", "screen", "and", "or", "not", "only"]);
class bf extends Uy {
  /**
   * @param {string} query A media query string
   * @param {boolean} [fallback] Fallback value for the server
   */
  constructor(t, n) {
    let r = Jy.test(t) || // we need to use `some` here because technically this `window.matchMedia('random,screen')` still returns true
    t.split(/[\s,]+/).some((i) => Qy.has(i.trim())) ? t : `(${t})`;
    const o = window.matchMedia(r);
    super(
      () => o.matches,
      (i) => En(o, "change", i)
    );
  }
}
function e2(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  return ul(e, { x: 0, y: 0, width: n, height: r }, t, !0).forEach((i) => {
    o.set(i.id, i);
  }), o;
}
function Nc(e) {
  const { edges: t, defaultEdgeOptions: n, nodeLookup: r, previousEdges: o, connectionMode: i, onerror: s, onlyRenderVisible: a, elevateEdgesOnSelect: l } = e, c = /* @__PURE__ */ new Map();
  for (const d of t) {
    const f = r.get(d.source), h = r.get(d.target);
    if (!f || !h)
      continue;
    if (a) {
      const { visibleNodes: p, transform: w, width: b, height: k } = e;
      if (ry({
        sourceNode: f,
        targetNode: h,
        width: b,
        height: k,
        transform: w
      }))
        p.set(f.id, f), p.set(h.id, h);
      else
        continue;
    }
    const g = o.get(d.id);
    if (g && d === g.edge && f == g.sourceNode && h == g.targetNode) {
      c.set(d.id, g);
      continue;
    }
    const v = uy({
      id: d.id,
      sourceNode: f,
      targetNode: h,
      sourceHandle: d.sourceHandle || null,
      targetHandle: d.targetHandle || null,
      connectionMode: i,
      onError: s
    });
    v && c.set(d.id, {
      ...n,
      ...d,
      ...v,
      zIndex: ny({
        selected: d.selected,
        zIndex: d.zIndex ?? n.zIndex,
        sourceNode: f,
        targetNode: h,
        elevateOnSelect: l
      }),
      sourceNode: f,
      targetNode: h,
      edge: d
    });
  }
  return c;
}
const xf = {
  input: df,
  output: ff,
  default: pl,
  group: hf
}, _f = {
  straight: yf,
  smoothstep: mf,
  default: ml,
  step: wf
};
function t2(e, t, n, r, o, i) {
  if (t && !n && r && o) {
    const s = ti(i, {
      filter: (a) => !!((a.width || a.initialWidth) && (a.height || a.initialHeight))
    });
    return dl(s, r, o, 0.5, 2, 0.1);
  } else
    return n ?? { x: 0, y: 0, zoom: 1 };
}
function n2(e) {
  class t {
    #t = /* @__PURE__ */ N(() => e.props.id ?? "1");
    get flowId() {
      return u(this.#t);
    }
    set flowId(r) {
      Q(this.#t, r);
    }
    #e = /* @__PURE__ */ Pe(null);
    get domNode() {
      return u(this.#e);
    }
    set domNode(r) {
      Q(this.#e, r);
    }
    #n = /* @__PURE__ */ Pe(null);
    get panZoom() {
      return u(this.#n);
    }
    set panZoom(r) {
      Q(this.#n, r);
    }
    #r = /* @__PURE__ */ Pe(e.width ?? 0);
    get width() {
      return u(this.#r);
    }
    set width(r) {
      Q(this.#r, r);
    }
    #i = /* @__PURE__ */ Pe(e.height ?? 0);
    get height() {
      return u(this.#i);
    }
    set height(r) {
      Q(this.#i, r);
    }
    #o = /* @__PURE__ */ N(() => {
      const r = my(e.nodes, this.nodeLookup, this.parentLookup, {
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
      return u(this.#o);
    }
    set nodesInitialized(r) {
      Q(this.#o, r);
    }
    #s = /* @__PURE__ */ N(() => this.panZoom !== null);
    get viewportInitialized() {
      return u(this.#s);
    }
    set viewportInitialized(r) {
      Q(this.#s, r);
    }
    #a = /* @__PURE__ */ N(() => (Cy(this.connectionLookup, this.edgeLookup, e.edges), e.edges));
    get _edges() {
      return u(this.#a);
    }
    set _edges(r) {
      Q(this.#a, r);
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
      return u(this.#l);
    }
    set selectedNodes(r) {
      Q(this.#l, r);
    }
    _prevSelectedEdges = [];
    _prevSelectedEdgeIds = /* @__PURE__ */ new Set();
    #c = /* @__PURE__ */ N(() => {
      const r = this._prevSelectedEdgeIds.size, o = /* @__PURE__ */ new Set(), i = this.edges.filter((s) => (s.selected && (o.add(s.id), this._prevSelectedEdgeIds.delete(s.id)), s.selected));
      return (r !== o.size || this._prevSelectedEdgeIds.size > 0) && (this._prevSelectedEdges = i), this._prevSelectedEdgeIds = o, this._prevSelectedEdges;
    });
    get selectedEdges() {
      return u(this.#c);
    }
    set selectedEdges(r) {
      Q(this.#c, r);
    }
    selectionChangeHandlers = /* @__PURE__ */ new Map();
    nodeLookup = /* @__PURE__ */ new Map();
    parentLookup = /* @__PURE__ */ new Map();
    connectionLookup = /* @__PURE__ */ new Map();
    edgeLookup = /* @__PURE__ */ new Map();
    _prevVisibleEdges = /* @__PURE__ */ new Map();
    #u = /* @__PURE__ */ N(() => {
      const {
        // We need to access this._nodes to trigger on changes
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        nodes: r,
        _edges: o,
        _prevVisibleEdges: i,
        nodeLookup: s,
        connectionMode: a,
        onerror: l,
        onlyRenderVisibleElements: c,
        defaultEdgeOptions: d
      } = this;
      let f, h;
      const g = {
        edges: o,
        defaultEdgeOptions: d,
        previousEdges: i,
        nodeLookup: s,
        connectionMode: a,
        elevateEdgesOnSelect: e.props.elevateEdgesOnSelect ?? !0,
        onerror: l
      };
      if (c) {
        const { viewport: v, width: p, height: w } = this, b = [v.x, v.y, v.zoom];
        f = e2(s, b, p, w), h = Nc({
          ...g,
          onlyRenderVisible: !0,
          visibleNodes: f,
          transform: b,
          width: p,
          height: w
        });
      } else
        f = this.nodeLookup, h = Nc(g);
      return { nodes: f, edges: h };
    });
    get visible() {
      return u(this.#u);
    }
    set visible(r) {
      Q(this.#u, r);
    }
    #d = /* @__PURE__ */ N(() => e.props.nodesDraggable ?? !0);
    get nodesDraggable() {
      return u(this.#d);
    }
    set nodesDraggable(r) {
      Q(this.#d, r);
    }
    #f = /* @__PURE__ */ N(() => e.props.nodesConnectable ?? !0);
    get nodesConnectable() {
      return u(this.#f);
    }
    set nodesConnectable(r) {
      Q(this.#f, r);
    }
    #g = /* @__PURE__ */ N(() => e.props.elementsSelectable ?? !0);
    get elementsSelectable() {
      return u(this.#g);
    }
    set elementsSelectable(r) {
      Q(this.#g, r);
    }
    #h = /* @__PURE__ */ N(() => e.props.nodesFocusable ?? !0);
    get nodesFocusable() {
      return u(this.#h);
    }
    set nodesFocusable(r) {
      Q(this.#h, r);
    }
    #w = /* @__PURE__ */ N(() => e.props.edgesFocusable ?? !0);
    get edgesFocusable() {
      return u(this.#w);
    }
    set edgesFocusable(r) {
      Q(this.#w, r);
    }
    #b = /* @__PURE__ */ N(() => e.props.disableKeyboardA11y ?? !1);
    get disableKeyboardA11y() {
      return u(this.#b);
    }
    set disableKeyboardA11y(r) {
      Q(this.#b, r);
    }
    #x = /* @__PURE__ */ N(() => e.props.minZoom ?? 0.5);
    get minZoom() {
      return u(this.#x);
    }
    set minZoom(r) {
      Q(this.#x, r);
    }
    #m = /* @__PURE__ */ N(() => e.props.maxZoom ?? 2);
    get maxZoom() {
      return u(this.#m);
    }
    set maxZoom(r) {
      Q(this.#m, r);
    }
    #v = /* @__PURE__ */ N(() => e.props.nodeOrigin ?? [0, 0]);
    get nodeOrigin() {
      return u(this.#v);
    }
    set nodeOrigin(r) {
      Q(this.#v, r);
    }
    #p = /* @__PURE__ */ N(() => e.props.nodeExtent ?? pa);
    get nodeExtent() {
      return u(this.#p);
    }
    set nodeExtent(r) {
      Q(this.#p, r);
    }
    #y = /* @__PURE__ */ N(() => e.props.translateExtent ?? pa);
    get translateExtent() {
      return u(this.#y);
    }
    set translateExtent(r) {
      Q(this.#y, r);
    }
    #_ = /* @__PURE__ */ N(() => e.props.defaultEdgeOptions ?? {});
    get defaultEdgeOptions() {
      return u(this.#_);
    }
    set defaultEdgeOptions(r) {
      Q(this.#_, r);
    }
    #C = /* @__PURE__ */ N(() => e.props.nodeDragThreshold ?? 1);
    get nodeDragThreshold() {
      return u(this.#C);
    }
    set nodeDragThreshold(r) {
      Q(this.#C, r);
    }
    #k = /* @__PURE__ */ N(() => e.props.autoPanOnNodeDrag ?? !0);
    get autoPanOnNodeDrag() {
      return u(this.#k);
    }
    set autoPanOnNodeDrag(r) {
      Q(this.#k, r);
    }
    #S = /* @__PURE__ */ N(() => e.props.autoPanOnConnect ?? !0);
    get autoPanOnConnect() {
      return u(this.#S);
    }
    set autoPanOnConnect(r) {
      Q(this.#S, r);
    }
    #E = /* @__PURE__ */ N(() => e.props.autoPanOnNodeFocus ?? !0);
    get autoPanOnNodeFocus() {
      return u(this.#E);
    }
    set autoPanOnNodeFocus(r) {
      Q(this.#E, r);
    }
    #N = /* @__PURE__ */ N(() => e.props.autoPanSpeed ?? 15);
    get autoPanSpeed() {
      return u(this.#N);
    }
    set autoPanSpeed(r) {
      Q(this.#N, r);
    }
    #P = /* @__PURE__ */ N(() => e.props.connectionDragThreshold ?? 1);
    get connectionDragThreshold() {
      return u(this.#P);
    }
    set connectionDragThreshold(r) {
      Q(this.#P, r);
    }
    fitViewQueued = e.props.fitView ?? !1;
    fitViewOptions = e.props.fitViewOptions;
    fitViewResolver = null;
    #T = /* @__PURE__ */ N(() => e.props.snapGrid ?? null);
    get snapGrid() {
      return u(this.#T);
    }
    set snapGrid(r) {
      Q(this.#T, r);
    }
    #A = /* @__PURE__ */ Pe(!1);
    get dragging() {
      return u(this.#A);
    }
    set dragging(r) {
      Q(this.#A, r);
    }
    #$ = /* @__PURE__ */ Pe(null);
    get selectionRect() {
      return u(this.#$);
    }
    set selectionRect(r) {
      Q(this.#$, r);
    }
    #M = /* @__PURE__ */ Pe(!1);
    get selectionKeyPressed() {
      return u(this.#M);
    }
    set selectionKeyPressed(r) {
      Q(this.#M, r);
    }
    #D = /* @__PURE__ */ Pe(!1);
    get multiselectionKeyPressed() {
      return u(this.#D);
    }
    set multiselectionKeyPressed(r) {
      Q(this.#D, r);
    }
    #O = /* @__PURE__ */ Pe(!1);
    get deleteKeyPressed() {
      return u(this.#O);
    }
    set deleteKeyPressed(r) {
      Q(this.#O, r);
    }
    #z = /* @__PURE__ */ Pe(!1);
    get panActivationKeyPressed() {
      return u(this.#z);
    }
    set panActivationKeyPressed(r) {
      Q(this.#z, r);
    }
    #V = /* @__PURE__ */ Pe(!1);
    get zoomActivationKeyPressed() {
      return u(this.#V);
    }
    set zoomActivationKeyPressed(r) {
      Q(this.#V, r);
    }
    #I = /* @__PURE__ */ Pe(null);
    get selectionRectMode() {
      return u(this.#I);
    }
    set selectionRectMode(r) {
      Q(this.#I, r);
    }
    #L = /* @__PURE__ */ Pe("");
    get ariaLiveMessage() {
      return u(this.#L);
    }
    set ariaLiveMessage(r) {
      Q(this.#L, r);
    }
    #H = /* @__PURE__ */ N(() => e.props.selectionMode ?? Xi.Partial);
    get selectionMode() {
      return u(this.#H);
    }
    set selectionMode(r) {
      Q(this.#H, r);
    }
    #R = /* @__PURE__ */ N(() => ({ ...xf, ...e.props.nodeTypes }));
    get nodeTypes() {
      return u(this.#R);
    }
    set nodeTypes(r) {
      Q(this.#R, r);
    }
    #B = /* @__PURE__ */ N(() => ({ ..._f, ...e.props.edgeTypes }));
    get edgeTypes() {
      return u(this.#B);
    }
    set edgeTypes(r) {
      Q(this.#B, r);
    }
    #F = /* @__PURE__ */ N(() => e.props.noPanClass ?? "nopan");
    get noPanClass() {
      return u(this.#F);
    }
    set noPanClass(r) {
      Q(this.#F, r);
    }
    #K = /* @__PURE__ */ N(() => e.props.noDragClass ?? "nodrag");
    get noDragClass() {
      return u(this.#K);
    }
    set noDragClass(r) {
      Q(this.#K, r);
    }
    #W = /* @__PURE__ */ N(() => e.props.noWheelClass ?? "nowheel");
    get noWheelClass() {
      return u(this.#W);
    }
    set noWheelClass(r) {
      Q(this.#W, r);
    }
    #Z = /* @__PURE__ */ N(() => Q0(e.props.ariaLabelConfig));
    get ariaLabelConfig() {
      return u(this.#Z);
    }
    set ariaLabelConfig(r) {
      Q(this.#Z, r);
    }
    #Y = /* @__PURE__ */ Pe(t2(this.nodesInitialized, e.props.fitView, e.props.initialViewport, this.width, this.height, this.nodeLookup));
    get _viewport() {
      return u(this.#Y);
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
    #j = /* @__PURE__ */ Pe(
      // _connection is viewport independent and originating from XYHandle
      ma
    );
    get _connection() {
      return u(this.#j);
    }
    set _connection(r) {
      Q(this.#j, r);
    }
    #X = /* @__PURE__ */ N(() => this._connection.inProgress ? {
      ...this._connection,
      to: ri(this._connection.to, [this.viewport.x, this.viewport.y, this.viewport.zoom])
    } : this._connection);
    get connection() {
      return u(this.#X);
    }
    set connection(r) {
      Q(this.#X, r);
    }
    #q = /* @__PURE__ */ N(() => e.props.connectionMode ?? oo.Strict);
    get connectionMode() {
      return u(this.#q);
    }
    set connectionMode(r) {
      Q(this.#q, r);
    }
    #G = /* @__PURE__ */ N(() => e.props.connectionRadius ?? 20);
    get connectionRadius() {
      return u(this.#G);
    }
    set connectionRadius(r) {
      Q(this.#G, r);
    }
    #U = /* @__PURE__ */ N(() => e.props.isValidConnection ?? (() => !0));
    get isValidConnection() {
      return u(this.#U);
    }
    set isValidConnection(r) {
      Q(this.#U, r);
    }
    #J = /* @__PURE__ */ N(() => e.props.selectNodesOnDrag ?? !0);
    get selectNodesOnDrag() {
      return u(this.#J);
    }
    set selectNodesOnDrag(r) {
      Q(this.#J, r);
    }
    #Q = /* @__PURE__ */ N(() => e.props.defaultMarkerColor === void 0 ? "#b1b1b7" : e.props.defaultMarkerColor);
    get defaultMarkerColor() {
      return u(this.#Q);
    }
    set defaultMarkerColor(r) {
      Q(this.#Q, r);
    }
    #ee = /* @__PURE__ */ N(() => dy(e.edges, {
      defaultColor: this.defaultMarkerColor,
      id: this.flowId,
      defaultMarkerStart: this.defaultEdgeOptions.markerStart,
      defaultMarkerEnd: this.defaultEdgeOptions.markerEnd
    }));
    get markers() {
      return u(this.#ee);
    }
    set markers(r) {
      Q(this.#ee, r);
    }
    #te = /* @__PURE__ */ N(() => e.props.onlyRenderVisibleElements ?? !1);
    get onlyRenderVisibleElements() {
      return u(this.#te);
    }
    set onlyRenderVisibleElements(r) {
      Q(this.#te, r);
    }
    #ne = /* @__PURE__ */ N(() => e.props.onflowerror ?? q0);
    get onerror() {
      return u(this.#ne);
    }
    set onerror(r) {
      Q(this.#ne, r);
    }
    #re = /* @__PURE__ */ N(() => e.props.ondelete);
    get ondelete() {
      return u(this.#re);
    }
    set ondelete(r) {
      Q(this.#re, r);
    }
    #oe = /* @__PURE__ */ N(() => e.props.onbeforedelete);
    get onbeforedelete() {
      return u(this.#oe);
    }
    set onbeforedelete(r) {
      Q(this.#oe, r);
    }
    #ie = /* @__PURE__ */ N(() => e.props.onbeforeconnect);
    get onbeforeconnect() {
      return u(this.#ie);
    }
    set onbeforeconnect(r) {
      Q(this.#ie, r);
    }
    #se = /* @__PURE__ */ N(() => e.props.onconnect);
    get onconnect() {
      return u(this.#se);
    }
    set onconnect(r) {
      Q(this.#se, r);
    }
    #ae = /* @__PURE__ */ N(() => e.props.onconnectstart);
    get onconnectstart() {
      return u(this.#ae);
    }
    set onconnectstart(r) {
      Q(this.#ae, r);
    }
    #le = /* @__PURE__ */ N(() => e.props.onconnectend);
    get onconnectend() {
      return u(this.#le);
    }
    set onconnectend(r) {
      Q(this.#le, r);
    }
    #ce = /* @__PURE__ */ N(() => e.props.onbeforereconnect);
    get onbeforereconnect() {
      return u(this.#ce);
    }
    set onbeforereconnect(r) {
      Q(this.#ce, r);
    }
    #ue = /* @__PURE__ */ N(() => e.props.onreconnect);
    get onreconnect() {
      return u(this.#ue);
    }
    set onreconnect(r) {
      Q(this.#ue, r);
    }
    #de = /* @__PURE__ */ N(() => e.props.onreconnectstart);
    get onreconnectstart() {
      return u(this.#de);
    }
    set onreconnectstart(r) {
      Q(this.#de, r);
    }
    #fe = /* @__PURE__ */ N(() => e.props.onreconnectend);
    get onreconnectend() {
      return u(this.#fe);
    }
    set onreconnectend(r) {
      Q(this.#fe, r);
    }
    #he = /* @__PURE__ */ N(() => e.props.clickConnect ?? !0);
    get clickConnect() {
      return u(this.#he);
    }
    set clickConnect(r) {
      Q(this.#he, r);
    }
    #ge = /* @__PURE__ */ N(() => e.props.onclickconnectstart);
    get onclickconnectstart() {
      return u(this.#ge);
    }
    set onclickconnectstart(r) {
      Q(this.#ge, r);
    }
    #ve = /* @__PURE__ */ N(() => e.props.onclickconnectend);
    get onclickconnectend() {
      return u(this.#ve);
    }
    set onclickconnectend(r) {
      Q(this.#ve, r);
    }
    #pe = /* @__PURE__ */ Pe(null);
    get clickConnectStartHandle() {
      return u(this.#pe);
    }
    set clickConnectStartHandle(r) {
      Q(this.#pe, r);
    }
    #me = /* @__PURE__ */ N(() => e.props.onselectiondrag);
    get onselectiondrag() {
      return u(this.#me);
    }
    set onselectiondrag(r) {
      Q(this.#me, r);
    }
    #ye = /* @__PURE__ */ N(() => e.props.onselectiondragstart);
    get onselectiondragstart() {
      return u(this.#ye);
    }
    set onselectiondragstart(r) {
      Q(this.#ye, r);
    }
    #we = /* @__PURE__ */ N(() => e.props.onselectiondragstop);
    get onselectiondragstop() {
      return u(this.#we);
    }
    set onselectiondragstop(r) {
      Q(this.#we, r);
    }
    resolveFitView = async () => {
      this.panZoom && (await j0(
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
    _prefersDark = new bf("(prefers-color-scheme: dark)", e.props.colorModeSSR === "dark");
    #be = /* @__PURE__ */ N(() => e.props.colorMode === "system" ? this._prefersDark.current ? "dark" : "light" : e.props.colorMode ?? "light");
    get colorMode() {
      return u(this.#be);
    }
    set colorMode(r) {
      Q(this.#be, r);
    }
    constructor() {
    }
    resetStoreValues() {
      this.dragging = !1, this.selectionRect = null, this.selectionRectMode = null, this.selectionKeyPressed = !1, this.multiselectionKeyPressed = !1, this.deleteKeyPressed = !1, this.panActivationKeyPressed = !1, this.zoomActivationKeyPressed = !1, this._connection = ma, this.clickConnectStartHandle = null, this.viewport = e.props.initialViewport ?? { x: 0, y: 0, zoom: 1 }, this.ariaLiveMessage = "";
    }
  }
  return new t();
}
function hn() {
  const e = cn(Ji);
  if (!e)
    throw new Error("To call useStore outside of <SvelteFlow /> you need to wrap your component in a <SvelteFlowProvider />");
  return e.getStore();
}
const Ji = Symbol();
function Cf(e) {
  const t = n2(e);
  function n(I) {
    t.nodeTypes = {
      ...xf,
      ...I
    };
  }
  function r(I) {
    t.edgeTypes = {
      ..._f,
      ...I
    };
  }
  function o(I) {
    t.edges = sy(I, t.edges);
  }
  const i = (I, P = !1) => {
    t.nodes = t.nodes.map((A) => {
      const x = I.get(A.id);
      return x ? { ...A, position: x.position, dragging: P } : A;
    });
  };
  function s(I) {
    const { changes: P, updatedInternals: A } = xy(I, t.nodeLookup, t.parentLookup, t.domNode, t.nodeOrigin);
    if (!A)
      return;
    vy(t.nodeLookup, t.parentLookup, {
      nodeOrigin: t.nodeOrigin,
      nodeExtent: t.nodeExtent
    }), t.fitViewQueued && t.resolveFitView();
    const x = /* @__PURE__ */ new Map();
    for (const C of P) {
      const M = t.nodeLookup.get(C.id)?.internals.userNode;
      if (!M)
        continue;
      const z = { ...M };
      switch (C.type) {
        case "dimensions": {
          const K = { ...z.measured, ...C.dimensions };
          C.setAttributes && (z.width = C.dimensions?.width ?? z.width, z.height = C.dimensions?.height ?? z.height), z.measured = K;
          break;
        }
        case "position":
          z.position = C.position ?? z.position;
          break;
      }
      x.set(C.id, z);
    }
    t.nodes = t.nodes.map((C) => x.get(C.id) ?? C);
  }
  function a(I) {
    const P = t.fitViewResolver ?? Promise.withResolvers();
    return t.fitViewQueued = !0, t.fitViewOptions = I, t.fitViewResolver = P, t.nodes = [...t.nodes], P.promise;
  }
  async function l(I, P, A) {
    const x = typeof A?.zoom < "u" ? A.zoom : t.maxZoom, C = t.panZoom;
    return C ? (await C.setViewport({
      x: t.width / 2 - I * x,
      y: t.height / 2 - P * x,
      zoom: x
    }, { duration: A?.duration, ease: A?.ease, interpolate: A?.interpolate }), Promise.resolve(!0)) : Promise.resolve(!1);
  }
  function c(I, P) {
    const A = t.panZoom;
    return A ? A.scaleBy(I, P) : Promise.resolve(!1);
  }
  function d(I) {
    return c(1.2, I);
  }
  function f(I) {
    return c(1 / 1.2, I);
  }
  function h(I) {
    const P = t.panZoom;
    P && (P.setScaleExtent([I, t.maxZoom]), t.minZoom = I);
  }
  function g(I) {
    const P = t.panZoom;
    P && (P.setScaleExtent([t.minZoom, I]), t.maxZoom = I);
  }
  function v(I) {
    const P = t.panZoom;
    P && (P.setTranslateExtent(I), t.translateExtent = I);
  }
  function p(I, P = null) {
    let A = !1;
    const x = I.map((C) => (P ? P.has(C.id) : !0) && C.selected ? (A = !0, { ...C, selected: !1 }) : C);
    return [A, x];
  }
  function w(I) {
    const P = I?.nodes ? new Set(I.nodes.map((K) => K.id)) : null, [A, x] = p(t.nodes, P);
    A && (t.nodes = x);
    const C = I?.edges ? new Set(I.edges.map((K) => K.id)) : null, [M, z] = p(t.edges, C);
    M && (t.edges = z);
  }
  function b(I) {
    const P = t.multiselectionKeyPressed;
    t.nodes = t.nodes.map((A) => {
      const x = I.includes(A.id), C = P && A.selected || x;
      return !!A.selected !== C ? { ...A, selected: C } : A;
    }), P || w({ nodes: [] });
  }
  function k(I) {
    const P = t.multiselectionKeyPressed;
    t.edges = t.edges.map((A) => {
      const x = I.includes(A.id), C = P && A.selected || x;
      return !!A.selected !== C ? { ...A, selected: C } : A;
    }), P || w({ edges: [] });
  }
  function E(I, P, A) {
    const x = t.nodeLookup.get(I);
    if (!x) {
      console.warn("012", Lo.error012(I));
      return;
    }
    t.selectionRect = null, t.selectionRectMode = null, x.selected ? (P || x.selected && t.multiselectionKeyPressed) && (w({ nodes: [x], edges: [] }), requestAnimationFrame(() => A?.blur())) : b([I]);
  }
  function _(I) {
    const P = t.edgeLookup.get(I);
    if (!P) {
      console.warn("012", Lo.error012(I));
      return;
    }
    (P.selectable || t.elementsSelectable && typeof P.selectable > "u") && (t.selectionRect = null, t.selectionRectMode = null, P.selected ? P.selected && t.multiselectionKeyPressed && w({ nodes: [], edges: [P] }) : k([I]));
  }
  function S(I, P) {
    const { nodeExtent: A, snapGrid: x, nodeOrigin: C, nodeLookup: M, nodesDraggable: z, onerror: K } = t, X = /* @__PURE__ */ new Map(), $ = x?.[0] ?? 5, Y = x?.[1] ?? 5, U = I.x * $ * P, W = I.y * Y * P;
    for (const G of M.values()) {
      if (!(G.selected && (G.draggable || z && typeof G.draggable > "u")))
        continue;
      let j = {
        x: G.internals.positionAbsolute.x + U,
        y: G.internals.positionAbsolute.y + W
      };
      x && (j = ni(j, x));
      const { position: ee, positionAbsolute: ne } = Kd({
        nodeId: G.id,
        nextPosition: j,
        nodeLookup: M,
        nodeExtent: A,
        nodeOrigin: C,
        onError: K
      });
      G.position = ee, G.internals.positionAbsolute = ne, X.set(G.id, G);
    }
    i(X);
  }
  function T(I) {
    return _y({
      delta: I,
      panZoom: t.panZoom,
      transform: [t.viewport.x, t.viewport.y, t.viewport.zoom],
      translateExtent: t.translateExtent,
      width: t.width,
      height: t.height
    });
  }
  const V = (I) => {
    t._connection = { ...I };
  };
  function O() {
    t._connection = ma;
  }
  function H() {
    t.resetStoreValues(), w();
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
    setMinZoom: h,
    setMaxZoom: g,
    setTranslateExtent: v,
    unselectNodesAndEdges: w,
    addSelectedNodes: b,
    addSelectedEdges: k,
    handleNodeSelection: E,
    handleEdgeSelection: _,
    moveSelectedNodes: S,
    panBy: T,
    updateConnection: V,
    cancelConnection: O,
    reset: H
  });
}
function r2(e, t) {
  const { minZoom: n, maxZoom: r, initialViewport: o, onPanZoomStart: i, onPanZoom: s, onPanZoomEnd: a, translateExtent: l, setPanZoomInstance: c, onDraggingChange: d, onTransformChange: f } = t, h = By({
    domNode: e,
    minZoom: n,
    maxZoom: r,
    translateExtent: l,
    viewport: o,
    onPanZoom: s,
    onPanZoomStart: i,
    onPanZoomEnd: a,
    onDraggingChange: d
  }), g = h.getViewport();
  return (o.x !== g.x || o.y !== g.y || o.zoom !== g.zoom) && f([g.x, g.y, g.zoom]), c(h), h.update(t), {
    update(v) {
      h.update(v);
    }
  };
}
var o2 = /* @__PURE__ */ te('<div class="svelte-flow__zoom svelte-flow__container"><!></div>');
function kf(e, t) {
  ce(t, !0);
  let n = y(t, "store", 15), r = y(t, "panOnScrollMode", 7), o = y(t, "preventScrolling", 7), i = y(t, "zoomOnScroll", 7), s = y(t, "zoomOnDoubleClick", 7), a = y(t, "zoomOnPinch", 7), l = y(t, "panOnDrag", 7), c = y(t, "panOnScroll", 7), d = y(t, "panOnScrollSpeed", 7), f = y(t, "paneClickDistance", 7), h = y(t, "selectionOnDrag", 7), g = y(t, "onmovestart", 7), v = y(t, "onmove", 7), p = y(t, "onmoveend", 7), w = y(t, "oninit", 7), b = y(t, "children", 7), k = /* @__PURE__ */ N(() => n().panActivationKeyPressed || l()), E = /* @__PURE__ */ N(() => n().panActivationKeyPressed || c());
  const { viewport: _ } = n();
  let S = !1;
  Ue(() => {
    !S && n().viewportInitialized && (w()?.(), S = !0);
  });
  var T = {
    get store() {
      return n();
    },
    set store(H) {
      n(H), m();
    },
    get panOnScrollMode() {
      return r();
    },
    set panOnScrollMode(H) {
      r(H), m();
    },
    get preventScrolling() {
      return o();
    },
    set preventScrolling(H) {
      o(H), m();
    },
    get zoomOnScroll() {
      return i();
    },
    set zoomOnScroll(H) {
      i(H), m();
    },
    get zoomOnDoubleClick() {
      return s();
    },
    set zoomOnDoubleClick(H) {
      s(H), m();
    },
    get zoomOnPinch() {
      return a();
    },
    set zoomOnPinch(H) {
      a(H), m();
    },
    get panOnDrag() {
      return l();
    },
    set panOnDrag(H) {
      l(H), m();
    },
    get panOnScroll() {
      return c();
    },
    set panOnScroll(H) {
      c(H), m();
    },
    get panOnScrollSpeed() {
      return d();
    },
    set panOnScrollSpeed(H) {
      d(H), m();
    },
    get paneClickDistance() {
      return f();
    },
    set paneClickDistance(H) {
      f(H), m();
    },
    get selectionOnDrag() {
      return h();
    },
    set selectionOnDrag(H) {
      h(H), m();
    },
    get onmovestart() {
      return g();
    },
    set onmovestart(H) {
      g(H), m();
    },
    get onmove() {
      return v();
    },
    set onmove(H) {
      v(H), m();
    },
    get onmoveend() {
      return p();
    },
    set onmoveend(H) {
      p(H), m();
    },
    get oninit() {
      return w();
    },
    set oninit(H) {
      w(H), m();
    },
    get children() {
      return b();
    },
    set children(H) {
      b(H), m();
    }
  }, V = o2(), O = F(V);
  return je(O, b), B(V), xt(V, (H, Z) => r2?.(H, Z), () => ({
    viewport: n().viewport,
    minZoom: n().minZoom,
    maxZoom: n().maxZoom,
    initialViewport: _,
    onDraggingChange: (H) => {
      n(n().dragging = H, !0);
    },
    setPanZoomInstance: (H) => {
      n(n().panZoom = H, !0);
    },
    onPanZoomStart: g(),
    onPanZoom: v(),
    onPanZoomEnd: p(),
    zoomOnScroll: i(),
    zoomOnDoubleClick: s(),
    zoomOnPinch: a(),
    panOnScroll: u(E),
    panOnDrag: u(k),
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
    selectionOnDrag: h(),
    onTransformChange: (H) => {
      n(n().viewport = { x: H[0], y: H[1], zoom: H[2] }, !0);
    },
    connectionInProgress: n().connection.inProgress
  })), D(e, V), ue(T);
}
ae(
  kf,
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
function Pc(e, t) {
  return (n) => {
    n.target === t && e?.(n);
  };
}
function Tc(e) {
  return (t) => {
    const n = e.has(t.id);
    return !!t.selected !== n ? { ...t, selected: n } : t;
  };
}
function Ac(e, t) {
  if (e.size !== t.size)
    return !1;
  for (const n of e)
    if (!t.has(n))
      return !1;
  return !0;
}
var i2 = /* @__PURE__ */ te("<div><!></div>");
function Sf(e, t) {
  ce(t, !0);
  let n = y(t, "store", 15), r = y(t, "panOnDrag", 7, !0), o = y(t, "paneClickDistance", 7, 1), i = y(t, "selectionOnDrag", 7), s = y(t, "onpaneclick", 7), a = y(t, "onpanecontextmenu", 7), l = y(t, "onselectionstart", 7), c = y(t, "onselectionend", 7), d = y(t, "children", 7), f, h = null, g = /* @__PURE__ */ new Set(), v = /* @__PURE__ */ new Set(), p = /* @__PURE__ */ N(() => n().panActivationKeyPressed || r()), w = /* @__PURE__ */ N(() => n().selectionKeyPressed || !!n().selectionRect || i() && u(p) !== !0), b = /* @__PURE__ */ N(() => n().elementsSelectable && (u(w) || n().selectionRectMode === "user")), k = !1;
  function E(C) {
    if (h = f?.getBoundingClientRect(), !h) return;
    const M = C.target === f, z = !M && !!C.target.closest(".nokey"), K = i() && M || n().selectionKeyPressed;
    if (z || !u(w) || !K || C.button !== 0 || !C.isPrimary)
      return;
    C.target?.setPointerCapture?.(C.pointerId), k = !1;
    const { x: X, y: $ } = an(C, h);
    n(n().selectionRect = { width: 0, height: 0, startX: X, startY: $, x: X, y: $ }, !0), M || (C.stopPropagation(), C.preventDefault());
  }
  function _(C) {
    if (!u(w) || !h || !n().selectionRect)
      return;
    const M = an(C, h), { startX: z = 0, startY: K = 0 } = n().selectionRect;
    if (!k) {
      const W = n().selectionKeyPressed ? 0 : o();
      if (Math.hypot(M.x - z, M.y - K) <= W)
        return;
      n().unselectNodesAndEdges(), l()?.(C);
    }
    k = !0;
    const X = {
      ...n().selectionRect,
      x: M.x < z ? M.x : z,
      y: M.y < K ? M.y : K,
      width: Math.abs(M.x - z),
      height: Math.abs(M.y - K)
    }, $ = g, Y = v;
    g = new Set(ul(
      n().nodeLookup,
      X,
      [
        n().viewport.x,
        n().viewport.y,
        n().viewport.zoom
      ],
      n().selectionMode === Xi.Partial,
      !0
    ).map((W) => W.id));
    const U = n().defaultEdgeOptions.selectable ?? !0;
    v = /* @__PURE__ */ new Set();
    for (const W of g) {
      const G = n().connectionLookup.get(W);
      if (G)
        for (const { edgeId: R } of G.values()) {
          const j = n().edgeLookup.get(R);
          j && (j.selectable ?? U) && v.add(R);
        }
    }
    Ac($, g) || n(n().nodes = n().nodes.map(Tc(g)), !0), Ac(Y, v) || n(n().edges = n().edges.map(Tc(v)), !0), n(n().selectionRectMode = "user", !0), n(n().selectionRect = X, !0);
  }
  function S(C) {
    C.button === 0 && (C.target?.releasePointerCapture?.(C.pointerId), !k && C.target === f && O?.(C), n(n().selectionRect = null, !0), k && n(n().selectionRectMode = g.size > 0 ? "nodes" : null, !0), k && c()?.(C));
  }
  const T = (C) => {
    if (Array.isArray(u(p)) && u(p).includes(2)) {
      C.preventDefault();
      return;
    }
    a()?.({ event: C });
  }, V = (C) => {
    k && (C.stopPropagation(), k = !1);
  };
  function O(C) {
    if (k || n().connection.inProgress) {
      k = !1;
      return;
    }
    s()?.({ event: C }), n().unselectNodesAndEdges(), n(n().selectionRectMode = null, !0), n(n().selectionRect = null, !0);
  }
  var H = {
    get store() {
      return n();
    },
    set store(C) {
      n(C), m();
    },
    get panOnDrag() {
      return r();
    },
    set panOnDrag(C = !0) {
      r(C), m();
    },
    get paneClickDistance() {
      return o();
    },
    set paneClickDistance(C = 1) {
      o(C), m();
    },
    get selectionOnDrag() {
      return i();
    },
    set selectionOnDrag(C) {
      i(C), m();
    },
    get onpaneclick() {
      return s();
    },
    set onpaneclick(C) {
      s(C), m();
    },
    get onpanecontextmenu() {
      return a();
    },
    set onpanecontextmenu(C) {
      a(C), m();
    },
    get onselectionstart() {
      return l();
    },
    set onselectionstart(C) {
      l(C), m();
    },
    get onselectionend() {
      return c();
    },
    set onselectionend(C) {
      c(C), m();
    },
    get children() {
      return d();
    },
    set children(C) {
      d(C), m();
    }
  }, Z = i2();
  let I;
  var P = /* @__PURE__ */ N(() => u(b) ? void 0 : Pc(O, f));
  Z.__click = function(...C) {
    u(P)?.apply(this, C);
  }, Z.__pointermove = function(...C) {
    (u(b) ? _ : void 0)?.apply(this, C);
  }, Z.__pointerup = function(...C) {
    (u(b) ? S : void 0)?.apply(this, C);
  };
  var A = /* @__PURE__ */ N(() => Pc(T, f));
  Z.__contextmenu = function(...C) {
    u(A)?.apply(this, C);
  };
  var x = F(Z);
  return je(x, d), B(Z), dt(Z, (C) => f = C, () => f), Ee((C) => I = Bt(Z, 1, "svelte-flow__pane svelte-flow__container", null, I, C), [
    () => ({
      draggable: r() === !0 || Array.isArray(r()) && r().includes(0),
      dragging: n().dragging,
      selection: u(w)
    })
  ]), Ri(
    "pointerdown",
    Z,
    function(...C) {
      (u(b) ? E : void 0)?.apply(this, C);
    },
    !0
  ), Ri(
    "click",
    Z,
    function(...C) {
      (u(b) ? V : void 0)?.apply(this, C);
    },
    !0
  ), D(e, Z), ue(H);
}
vr(["click", "pointermove", "pointerup", "contextmenu"]);
ae(
  Sf,
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
var s2 = /* @__PURE__ */ te('<div class="svelte-flow__viewport xyflow__viewport svelte-flow__container"><!></div>');
function Ef(e, t) {
  ce(t, !0);
  let n = y(t, "store", 15), r = y(t, "children", 7);
  var o = {
    get store() {
      return n();
    },
    set store(l) {
      n(l), m();
    },
    get children() {
      return r();
    },
    set children(l) {
      r(l), m();
    }
  }, i = s2();
  let s;
  var a = F(i);
  return je(a, r), B(i), Ee(() => s = mt(i, "", s, {
    transform: `translate(${n().viewport.x ?? ""}px, ${n().viewport.y ?? ""}px) scale(${n().viewport.zoom ?? ""})`
  })), D(e, i), ue(o);
}
ae(Ef, { store: {}, children: {} }, [], [], !0);
function Nf(e, t) {
  const { store: n, onDrag: r, onDragStart: o, onDragStop: i, onNodeMouseDown: s } = t, a = Ny({
    onDrag: r,
    onDragStart: o,
    onDragStop: i,
    onNodeMouseDown: s,
    getStoreItems: () => {
      const { snapGrid: c, viewport: d } = n;
      return {
        nodes: n.nodes,
        nodeLookup: n.nodeLookup,
        edges: n.edges,
        nodeExtent: n.nodeExtent,
        snapGrid: c || [0, 0],
        snapToGrid: !!c,
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
  function l(c, d) {
    if (d.disabled) {
      a.destroy();
      return;
    }
    a.update({
      domNode: c,
      noDragClassName: d.noDragClass,
      handleSelector: d.handleSelector,
      nodeId: d.nodeId,
      isSelectable: d.isSelectable,
      nodeClickDistance: d.nodeClickDistance
    });
  }
  return l(e, t), {
    update(c) {
      l(e, c);
    },
    destroy() {
      a.destroy();
    }
  };
}
var a2 = /* @__PURE__ */ te('<div aria-live="assertive" aria-atomic="true" class="a11y-live-msg svelte-wlt670"> </div>'), l2 = /* @__PURE__ */ te('<div class="a11y-hidden svelte-wlt670"> </div> <div class="a11y-hidden svelte-wlt670"> </div> <!>', 1);
const c2 = {
  hash: "svelte-wlt670",
  code: ".a11y-hidden.svelte-wlt670 {display:none;}.a11y-live-msg.svelte-wlt670 {position:absolute;width:1px;height:1px;margin:-1px;border:0;padding:0;overflow:hidden;clip:rect(0px, 0px, 0px, 0px);clip-path:inset(100%);}"
};
function Pf(e, t) {
  ce(t, !0), Ze(e, c2);
  let n = y(t, "store", 7);
  var r = {
    get store() {
      return n();
    },
    set store(f) {
      n(f), m();
    }
  }, o = l2(), i = oe(o), s = F(i, !0);
  B(i);
  var a = L(i, 2), l = F(a, !0);
  B(a);
  var c = L(a, 2);
  {
    var d = (f) => {
      var h = a2(), g = F(h, !0);
      B(h), Ee(() => {
        ke(h, "id", `${u2}-${n().flowId}`), Xe(g, n().ariaLiveMessage);
      }), D(f, h);
    };
    se(c, (f) => {
      n().disableKeyboardA11y || f(d);
    });
  }
  return Ee(() => {
    ke(i, "id", `${Tf}-${n().flowId}`), Xe(s, n().disableKeyboardA11y ? n().ariaLabelConfig["node.a11yDescription.default"] : n().ariaLabelConfig["node.a11yDescription.keyboardDisabled"]), ke(a, "id", `${Af}-${n().flowId}`), Xe(l, n().ariaLabelConfig["edge.a11yDescription.default"]);
  }), D(e, o), ue(r);
}
ae(Pf, { store: {} }, [], [], !0);
const Tf = "svelte-flow__node-desc", Af = "svelte-flow__edge-desc", u2 = "svelte-flow__aria-live";
var d2 = /* @__PURE__ */ te("<div><!></div>");
function $f(e, t) {
  ce(t, !0);
  let n = y(t, "store", 15), r = y(t, "node", 7), o = y(t, "resizeObserver", 7), i = y(t, "nodeClickDistance", 7), s = y(t, "onnodeclick", 7), a = y(t, "onnodedrag", 7), l = y(t, "onnodedragstart", 7), c = y(t, "onnodedragstop", 7), d = y(t, "onnodepointerenter", 7), f = y(t, "onnodepointerleave", 7), h = y(t, "onnodepointermove", 7), g = y(t, "onnodecontextmenu", 7), v = /* @__PURE__ */ N(() => Pt(r().data, () => ({}), !0)), p = /* @__PURE__ */ N(() => Pt(r().selected, !1)), w = /* @__PURE__ */ N(() => r().draggable), b = /* @__PURE__ */ N(() => r().selectable), k = /* @__PURE__ */ N(() => Pt(r().deletable, !0)), E = /* @__PURE__ */ N(() => r().connectable), _ = /* @__PURE__ */ N(() => r().focusable), S = /* @__PURE__ */ N(() => Pt(r().hidden, !1)), T = /* @__PURE__ */ N(() => Pt(r().dragging, !1)), V = /* @__PURE__ */ N(() => Pt(r().style, "")), O = /* @__PURE__ */ N(() => r().class), H = /* @__PURE__ */ N(() => Pt(r().type, "default")), Z = /* @__PURE__ */ N(() => r().parentId), I = /* @__PURE__ */ N(() => r().sourcePosition), P = /* @__PURE__ */ N(() => r().targetPosition), A = /* @__PURE__ */ N(() => Pt(r().measured, () => ({ width: 0, height: 0 }), !0).width), x = /* @__PURE__ */ N(() => Pt(r().measured, () => ({ width: 0, height: 0 }), !0).height), C = /* @__PURE__ */ N(() => r().initialWidth), M = /* @__PURE__ */ N(() => r().initialHeight), z = /* @__PURE__ */ N(() => r().width), K = /* @__PURE__ */ N(() => r().height), X = /* @__PURE__ */ N(() => r().dragHandle), $ = /* @__PURE__ */ N(() => Pt(r().internals.z, 0)), Y = /* @__PURE__ */ N(() => r().internals.positionAbsolute.x), U = /* @__PURE__ */ N(() => r().internals.positionAbsolute.y), W = /* @__PURE__ */ N(() => r().internals.userNode), { id: G } = r(), R = /* @__PURE__ */ N(() => u(w) ?? n().nodesDraggable), j = /* @__PURE__ */ N(() => u(b) ?? n().elementsSelectable), ee = /* @__PURE__ */ N(() => u(E) ?? n().nodesConnectable), ne = /* @__PURE__ */ N(() => jd(r())), J = /* @__PURE__ */ N(() => !!r().internals.handleBounds), Ce = /* @__PURE__ */ N(() => u(ne) && u(J)), ie = /* @__PURE__ */ N(() => u(_) ?? n().nodesFocusable);
  function le(de) {
    return n().parentLookup.has(de);
  }
  let re = /* @__PURE__ */ N(() => le(G)), he = /* @__PURE__ */ Pe(null), me = null, Se = u(H), fe = u(I), xe = u(P), Ae = /* @__PURE__ */ N(() => n().nodeTypes[u(H)] ?? pl), q = /* @__PURE__ */ N(() => n().ariaLabelConfig);
  Mr("svelteflow__node_connectable", {
    get value() {
      return u(ee);
    }
  }), Mr("svelteflow__node_id", G);
  let Oe = /* @__PURE__ */ N(() => {
    const de = u(A) === void 0 ? u(z) ?? u(C) : u(z), Me = u(x) === void 0 ? u(K) ?? u(M) : u(K);
    if (!(de === void 0 && Me === void 0 && u(V) === void 0))
      return `${u(V)};${de ? `width:${Nn(de)};` : ""}${Me ? `height:${Nn(Me)};` : ""}`;
  });
  Ue(() => {
    (u(H) !== Se || u(I) !== fe || u(P) !== xe) && u(he) !== null && requestAnimationFrame(() => {
      u(he) !== null && n().updateNodeInternals(/* @__PURE__ */ new Map([[G, { id: G, nodeElement: u(he), force: !0 }]]));
    }), Se = u(H), fe = u(I), xe = u(P);
  }), Ue(() => {
    o() && (!u(Ce) || u(he) !== me) && (me && o().unobserve(me), u(he) && o().observe(u(he)), me = u(he));
  }), Go(() => {
    me && o()?.unobserve(me);
  });
  function Be(de) {
    u(j) && (!n().selectNodesOnDrag || !u(R) || n().nodeDragThreshold > 0) && n().handleNodeSelection(G), s()?.({ node: u(W), event: de });
  }
  function Ie(de) {
    if (!(Gd(de) || n().disableKeyboardA11y))
      if (Bd.includes(de.key) && u(j)) {
        const Me = de.key === "Escape";
        n().handleNodeSelection(G, Me, u(he));
      } else u(R) && r().selected && Object.prototype.hasOwnProperty.call(Ui, de.key) && (de.preventDefault(), n(
        n().ariaLiveMessage = u(q)["node.a11yDescription.ariaLiveMessage"]({
          direction: de.key.replace("Arrow", "").toLowerCase(),
          x: ~~r().internals.positionAbsolute.x,
          y: ~~r().internals.positionAbsolute.y
        }),
        !0
      ), n().moveSelectedNodes(Ui[de.key], de.shiftKey ? 4 : 1));
  }
  const Et = () => {
    if (n().disableKeyboardA11y || !n().autoPanOnNodeFocus || !u(he)?.matches(":focus-visible"))
      return;
    const { width: de, height: Me, viewport: et } = n();
    ul(/* @__PURE__ */ new Map([[G, r()]]), { x: 0, y: 0, width: de, height: Me }, [et.x, et.y, et.zoom], !0).length > 0 || n().setCenter(r().position.x + (r().measured.width ?? 0) / 2, r().position.y + (r().measured.height ?? 0) / 2, { zoom: et.zoom });
  };
  var st = {
    get store() {
      return n();
    },
    set store(de) {
      n(de), m();
    },
    get node() {
      return r();
    },
    set node(de) {
      r(de), m();
    },
    get resizeObserver() {
      return o();
    },
    set resizeObserver(de) {
      o(de), m();
    },
    get nodeClickDistance() {
      return i();
    },
    set nodeClickDistance(de) {
      i(de), m();
    },
    get onnodeclick() {
      return s();
    },
    set onnodeclick(de) {
      s(de), m();
    },
    get onnodedrag() {
      return a();
    },
    set onnodedrag(de) {
      a(de), m();
    },
    get onnodedragstart() {
      return l();
    },
    set onnodedragstart(de) {
      l(de), m();
    },
    get onnodedragstop() {
      return c();
    },
    set onnodedragstop(de) {
      c(de), m();
    },
    get onnodepointerenter() {
      return d();
    },
    set onnodepointerenter(de) {
      d(de), m();
    },
    get onnodepointerleave() {
      return f();
    },
    set onnodepointerleave(de) {
      f(de), m();
    },
    get onnodepointermove() {
      return h();
    },
    set onnodepointermove(de) {
      h(de), m();
    },
    get onnodecontextmenu() {
      return g();
    },
    set onnodecontextmenu(de) {
      g(de), m();
    }
  }, Mt = _e(), yt = oe(Mt);
  {
    var tn = (de) => {
      var Me = d2();
      Ge(Me, () => ({
        "data-id": G,
        class: [
          "svelte-flow__node",
          `svelte-flow__node-${u(H)}`,
          u(O)
        ],
        style: u(Oe),
        onclick: Be,
        onpointerenter: d() ? (Fe) => d()({ node: u(W), event: Fe }) : void 0,
        onpointerleave: f() ? (Fe) => f()({ node: u(W), event: Fe }) : void 0,
        onpointermove: h() ? (Fe) => h()({ node: u(W), event: Fe }) : void 0,
        oncontextmenu: g() ? (Fe) => g()({ node: u(W), event: Fe }) : void 0,
        onkeydown: u(ie) ? Ie : void 0,
        onfocus: u(ie) ? Et : void 0,
        tabIndex: u(ie) ? 0 : void 0,
        role: r().ariaRole ?? (u(ie) ? "group" : void 0),
        "aria-roledescription": "node",
        "aria-describedby": n().disableKeyboardA11y ? void 0 : `${Tf}-${n().flowId}`,
        ...r().domAttributes,
        [tr]: {
          dragging: u(T),
          selected: u(p),
          draggable: u(R),
          connectable: u(ee),
          selectable: u(j),
          nopan: u(R),
          parent: u(re)
        },
        [bn]: {
          "z-index": u($),
          transform: `translate(${u(Y) ?? ""}px, ${u(U) ?? ""}px)`,
          visibility: u(ne) ? "visible" : "hidden"
        }
      }));
      var et = F(Me);
      Uo(et, () => u(Ae), (Fe, ct) => {
        ct(Fe, {
          get data() {
            return u(v);
          },
          get id() {
            return G;
          },
          get selected() {
            return u(p);
          },
          get selectable() {
            return u(j);
          },
          get deletable() {
            return u(k);
          },
          get sourcePosition() {
            return u(I);
          },
          get targetPosition() {
            return u(P);
          },
          get zIndex() {
            return u($);
          },
          get dragging() {
            return u(T);
          },
          get draggable() {
            return u(R);
          },
          get dragHandle() {
            return u(X);
          },
          get parentId() {
            return u(Z);
          },
          get type() {
            return u(H);
          },
          get isConnectable() {
            return u(ee);
          },
          get positionAbsoluteX() {
            return u(Y);
          },
          get positionAbsoluteY() {
            return u(U);
          },
          get width() {
            return u(z);
          },
          get height() {
            return u(K);
          }
        });
      }), B(Me), xt(Me, (Fe, ct) => Nf?.(Fe, ct), () => ({
        nodeId: G,
        isSelectable: u(j),
        disabled: !u(R),
        handleSelector: u(X),
        noDragClass: n().noDragClass,
        nodeClickDistance: i(),
        onNodeMouseDown: n().handleNodeSelection,
        onDrag: (Fe, ct, Nt, Dt) => {
          a()?.({ event: Fe, targetNode: Nt, nodes: Dt });
        },
        onDragStart: (Fe, ct, Nt, Dt) => {
          l()?.({ event: Fe, targetNode: Nt, nodes: Dt });
        },
        onDragStop: (Fe, ct, Nt, Dt) => {
          c()?.({ event: Fe, targetNode: Nt, nodes: Dt });
        },
        store: n()
      })), dt(Me, (Fe) => Q(he, Fe), () => u(he)), D(de, Me);
    };
    se(yt, (de) => {
      u(S) || de(tn);
    });
  }
  return D(e, Mt), ue(st);
}
ae(
  $f,
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
var f2 = /* @__PURE__ */ te('<div class="svelte-flow__nodes"></div>');
function Mf(e, t) {
  ce(t, !0);
  let n = y(t, "store", 15), r = y(t, "nodeClickDistance", 7), o = y(t, "onnodeclick", 7), i = y(t, "onnodecontextmenu", 7), s = y(t, "onnodepointerenter", 7), a = y(t, "onnodepointermove", 7), l = y(t, "onnodepointerleave", 7), c = y(t, "onnodedrag", 7), d = y(t, "onnodedragstart", 7), f = y(t, "onnodedragstop", 7);
  const h = typeof ResizeObserver > "u" ? null : new ResizeObserver((p) => {
    const w = /* @__PURE__ */ new Map();
    p.forEach((b) => {
      const k = b.target.getAttribute("data-id");
      w.set(k, { id: k, nodeElement: b.target, force: !0 });
    }), n().updateNodeInternals(w);
  });
  Go(() => {
    h?.disconnect();
  });
  var g = {
    get store() {
      return n();
    },
    set store(p) {
      n(p), m();
    },
    get nodeClickDistance() {
      return r();
    },
    set nodeClickDistance(p) {
      r(p), m();
    },
    get onnodeclick() {
      return o();
    },
    set onnodeclick(p) {
      o(p), m();
    },
    get onnodecontextmenu() {
      return i();
    },
    set onnodecontextmenu(p) {
      i(p), m();
    },
    get onnodepointerenter() {
      return s();
    },
    set onnodepointerenter(p) {
      s(p), m();
    },
    get onnodepointermove() {
      return a();
    },
    set onnodepointermove(p) {
      a(p), m();
    },
    get onnodepointerleave() {
      return l();
    },
    set onnodepointerleave(p) {
      l(p), m();
    },
    get onnodedrag() {
      return c();
    },
    set onnodedrag(p) {
      c(p), m();
    },
    get onnodedragstart() {
      return d();
    },
    set onnodedragstart(p) {
      d(p), m();
    },
    get onnodedragstop() {
      return f();
    },
    set onnodedragstop(p) {
      f(p), m();
    }
  }, v = f2();
  return pt(v, 21, () => n().visible.nodes.values(), (p) => p.id, (p, w) => {
    $f(p, {
      get node() {
        return u(w);
      },
      get resizeObserver() {
        return h;
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
        return c();
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
  }), B(v), D(e, v), ue(g);
}
ae(
  Mf,
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
var h2 = /* @__PURE__ */ pe('<svg class="svelte-flow__edge-wrapper"><g><!></g></svg>');
function Df(e, t) {
  ce(t, !0);
  const n = y(t, "edge", 7), r = y(t, "store", 15), o = y(t, "onedgeclick", 7), i = y(t, "onedgecontextmenu", 7), s = y(t, "onedgepointerenter", 7), a = y(t, "onedgepointerleave", 7);
  let l = /* @__PURE__ */ N(() => n().source), c = /* @__PURE__ */ N(() => n().target), d = /* @__PURE__ */ N(() => n().sourceX), f = /* @__PURE__ */ N(() => n().sourceY), h = /* @__PURE__ */ N(() => n().targetX), g = /* @__PURE__ */ N(() => n().targetY), v = /* @__PURE__ */ N(() => n().sourcePosition), p = /* @__PURE__ */ N(() => n().targetPosition), w = /* @__PURE__ */ N(() => Pt(n().animated, !1)), b = /* @__PURE__ */ N(() => Pt(n().selected, !1)), k = /* @__PURE__ */ N(() => n().label), E = /* @__PURE__ */ N(() => n().labelStyle), _ = /* @__PURE__ */ N(() => Pt(n().data, () => ({}), !0)), S = /* @__PURE__ */ N(() => n().style), T = /* @__PURE__ */ N(() => n().interactionWidth), V = /* @__PURE__ */ N(() => Pt(n().type, "default")), O = /* @__PURE__ */ N(() => n().sourceHandle), H = /* @__PURE__ */ N(() => n().targetHandle), Z = /* @__PURE__ */ N(() => n().markerStart), I = /* @__PURE__ */ N(() => n().markerEnd), P = /* @__PURE__ */ N(() => n().selectable), A = /* @__PURE__ */ N(() => n().focusable), x = /* @__PURE__ */ N(() => Pt(n().deletable, !0)), C = /* @__PURE__ */ N(() => n().hidden), M = /* @__PURE__ */ N(() => n().zIndex), z = /* @__PURE__ */ N(() => n().class), K = /* @__PURE__ */ N(() => n().ariaLabel), X = null;
  const { id: $ } = n();
  Mr("svelteflow__edge_id", $);
  let Y = /* @__PURE__ */ N(() => u(P) ?? r().elementsSelectable), U = /* @__PURE__ */ N(() => u(A) ?? r().edgesFocusable), W = /* @__PURE__ */ N(() => r().edgeTypes[u(V)] ?? ml), G = /* @__PURE__ */ N(() => u(Z) ? `url('#${wa(u(Z), r().flowId)}')` : void 0), R = /* @__PURE__ */ N(() => u(I) ? `url('#${wa(u(I), r().flowId)}')` : void 0);
  function j(re) {
    const he = r().edgeLookup.get($);
    he && (u(Y) && r().handleEdgeSelection($), o()?.({ event: re, edge: he }));
  }
  function ee(re, he) {
    const me = r().edgeLookup.get($);
    me && he({ event: re, edge: me });
  }
  function ne(re) {
    if (!r().disableKeyboardA11y && Bd.includes(re.key) && u(Y)) {
      const { unselectNodesAndEdges: he, addSelectedEdges: me } = r();
      re.key === "Escape" ? (X?.blur(), he({ edges: [n()] })) : me([$]);
    }
  }
  var J = {
    get edge() {
      return n();
    },
    set edge(re) {
      n(re), m();
    },
    get store() {
      return r();
    },
    set store(re) {
      r(re), m();
    },
    get onedgeclick() {
      return o();
    },
    set onedgeclick(re) {
      o(re), m();
    },
    get onedgecontextmenu() {
      return i();
    },
    set onedgecontextmenu(re) {
      i(re), m();
    },
    get onedgepointerenter() {
      return s();
    },
    set onedgepointerenter(re) {
      s(re), m();
    },
    get onedgepointerleave() {
      return a();
    },
    set onedgepointerleave(re) {
      a(re), m();
    }
  }, Ce = _e(), ie = oe(Ce);
  {
    var le = (re) => {
      var he = h2();
      let me;
      var Se = F(he);
      Ge(Se, () => ({
        class: ["svelte-flow__edge", u(z)],
        "data-id": $,
        onclick: j,
        oncontextmenu: i() ? (xe) => {
          ee(xe, i());
        } : void 0,
        onpointerenter: s() ? (xe) => {
          ee(xe, s());
        } : void 0,
        onpointerleave: a() ? (xe) => {
          ee(xe, a());
        } : void 0,
        "aria-label": u(K) === null ? void 0 : u(K) ? u(K) : `Edge from ${u(l)} to ${u(c)}`,
        "aria-describedby": u(U) ? `${Af}-${r().flowId}` : void 0,
        role: n().ariaRole ?? (u(U) ? "group" : "img"),
        "aria-roledescription": "edge",
        onkeydown: u(U) ? ne : void 0,
        tabindex: u(U) ? 0 : void 0,
        ...n().domAttributes,
        [tr]: {
          animated: u(w),
          selected: u(b),
          selectable: u(Y)
        }
      }));
      var fe = F(Se);
      Uo(fe, () => u(W), (xe, Ae) => {
        Ae(xe, {
          get id() {
            return $;
          },
          get source() {
            return u(l);
          },
          get target() {
            return u(c);
          },
          get sourceX() {
            return u(d);
          },
          get sourceY() {
            return u(f);
          },
          get targetX() {
            return u(h);
          },
          get targetY() {
            return u(g);
          },
          get sourcePosition() {
            return u(v);
          },
          get targetPosition() {
            return u(p);
          },
          get animated() {
            return u(w);
          },
          get selected() {
            return u(b);
          },
          get label() {
            return u(k);
          },
          get labelStyle() {
            return u(E);
          },
          get data() {
            return u(_);
          },
          get style() {
            return u(S);
          },
          get interactionWidth() {
            return u(T);
          },
          get selectable() {
            return u(Y);
          },
          get deletable() {
            return u(x);
          },
          get type() {
            return u(V);
          },
          get sourceHandleId() {
            return u(O);
          },
          get targetHandleId() {
            return u(H);
          },
          get markerStart() {
            return u(G);
          },
          get markerEnd() {
            return u(R);
          }
        });
      }), B(Se), dt(Se, (xe) => X = xe, () => X), B(he), Ee(() => me = mt(he, "", me, { "z-index": u(M) })), D(re, he);
    };
    se(ie, (re) => {
      u(C) || re(le);
    });
  }
  return D(e, Ce), ue(J);
}
ae(
  Df,
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
ev();
var g2 = /* @__PURE__ */ pe("<defs></defs>");
function Of(e, t) {
  ce(t, !1);
  const n = hn();
  tl();
  var r = g2();
  pt(r, 5, () => n.markers, (o) => o.id, (o, i) => {
    zf(o, We(() => u(i)));
  }), B(r), D(e, r), ue();
}
ae(Of, {}, [], [], !0);
var v2 = /* @__PURE__ */ pe('<polyline class="arrow" fill="none" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4"></polyline>'), p2 = /* @__PURE__ */ pe('<polyline class="arrowclosed" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), m2 = /* @__PURE__ */ pe('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function zf(e, t) {
  ce(t, !0);
  let n = y(t, "id", 7), r = y(t, "type", 7), o = y(t, "width", 7, 12.5), i = y(t, "height", 7, 12.5), s = y(t, "markerUnits", 7, "strokeWidth"), a = y(t, "orient", 7, "auto-start-reverse"), l = y(t, "color", 7, "none"), c = y(t, "strokeWidth", 7);
  var d = {
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
    set width(p = 12.5) {
      o(p), m();
    },
    get height() {
      return i();
    },
    set height(p = 12.5) {
      i(p), m();
    },
    get markerUnits() {
      return s();
    },
    set markerUnits(p = "strokeWidth") {
      s(p), m();
    },
    get orient() {
      return a();
    },
    set orient(p = "auto-start-reverse") {
      a(p), m();
    },
    get color() {
      return l();
    },
    set color(p = "none") {
      l(p), m();
    },
    get strokeWidth() {
      return c();
    },
    set strokeWidth(p) {
      c(p), m();
    }
  }, f = m2(), h = F(f);
  {
    var g = (p) => {
      var w = v2();
      let b;
      Ee(() => {
        ke(w, "stroke-width", c()), b = mt(w, "", b, { stroke: l() });
      }), D(p, w);
    }, v = (p) => {
      var w = _e(), b = oe(w);
      {
        var k = (E) => {
          var _ = p2();
          let S;
          Ee(() => {
            ke(_, "stroke-width", c()), S = mt(_, "", S, { stroke: l(), fill: l() });
          }), D(E, _);
        };
        se(
          b,
          (E) => {
            r() === Ho.ArrowClosed && E(k);
          },
          !0
        );
      }
      D(p, w);
    };
    se(h, (p) => {
      r() === Ho.Arrow ? p(g) : p(v, !1);
    });
  }
  return B(f), Ee(() => {
    ke(f, "id", n()), ke(f, "markerWidth", `${o()}`), ke(f, "markerHeight", `${i()}`), ke(f, "markerUnits", s()), ke(f, "orient", a());
  }), D(e, f), ue(d);
}
ae(
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
var y2 = /* @__PURE__ */ te('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!></div>');
function Vf(e, t) {
  ce(t, !0);
  let n = y(t, "store", 15), r = y(t, "onedgeclick", 7), o = y(t, "onedgecontextmenu", 7), i = y(t, "onedgepointerenter", 7), s = y(t, "onedgepointerleave", 7);
  var a = {
    get store() {
      return n();
    },
    set store(h) {
      n(h), m();
    },
    get onedgeclick() {
      return r();
    },
    set onedgeclick(h) {
      r(h), m();
    },
    get onedgecontextmenu() {
      return o();
    },
    set onedgecontextmenu(h) {
      o(h), m();
    },
    get onedgepointerenter() {
      return i();
    },
    set onedgepointerenter(h) {
      i(h), m();
    },
    get onedgepointerleave() {
      return s();
    },
    set onedgepointerleave(h) {
      s(h), m();
    }
  }, l = y2(), c = F(l), d = F(c);
  Of(d, {}), B(c);
  var f = L(c, 2);
  return pt(f, 17, () => n().visible.edges.values(), (h) => h.id, (h, g) => {
    Df(h, {
      get edge() {
        return u(g);
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
      set store(v) {
        n(v);
      }
    });
  }), B(l), D(e, l), ue(a);
}
ae(
  Vf,
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
var w2 = /* @__PURE__ */ te('<div class="svelte-flow__selection svelte-1rrpn9s"></div>');
const b2 = {
  hash: "svelte-1rrpn9s",
  code: ".svelte-flow__selection.svelte-1rrpn9s {position:absolute;top:0;left:0;}"
};
function yl(e, t) {
  ce(t, !0), Ze(e, b2);
  let n = y(t, "x", 7, 0), r = y(t, "y", 7, 0), o = y(t, "width", 7, 0), i = y(t, "height", 7, 0), s = y(t, "isVisible", 7, !0);
  var a = {
    get x() {
      return n();
    },
    set x(f = 0) {
      n(f), m();
    },
    get y() {
      return r();
    },
    set y(f = 0) {
      r(f), m();
    },
    get width() {
      return o();
    },
    set width(f = 0) {
      o(f), m();
    },
    get height() {
      return i();
    },
    set height(f = 0) {
      i(f), m();
    },
    get isVisible() {
      return s();
    },
    set isVisible(f = !0) {
      s(f), m();
    }
  }, l = _e(), c = oe(l);
  {
    var d = (f) => {
      var h = w2();
      let g;
      Ee((v) => g = mt(h, "", g, v), [
        () => ({
          width: typeof o() == "string" ? o() : Nn(o()),
          height: typeof i() == "string" ? i() : Nn(i()),
          transform: `translate(${n()}px, ${r()}px)`
        })
      ]), D(f, h);
    };
    se(c, (f) => {
      s() && f(d);
    });
  }
  return D(e, l), ue(a);
}
ae(yl, { x: {}, y: {}, width: {}, height: {}, isVisible: {} }, [], [], !0);
var x2 = /* @__PURE__ */ te("<div><!></div>");
const _2 = {
  hash: "svelte-ceq0zw",
  code: `.svelte-flow__selection-wrapper.svelte-ceq0zw {position:absolute;top:0;left:0;z-index:2000;pointer-events:all;}.svelte-flow__selection-wrapper.svelte-ceq0zw:focus,
  .svelte-flow__selection-wrapper.svelte-ceq0zw:focus-visible {outline:none;}`
};
function If(e, t) {
  ce(t, !0), Ze(e, _2);
  let n = y(t, "store", 15), r = y(t, "onnodedrag", 7), o = y(t, "onnodedragstart", 7), i = y(t, "onnodedragstop", 7), s = y(t, "onselectionclick", 7), a = y(t, "onselectioncontextmenu", 7), l = /* @__PURE__ */ Pe(void 0);
  Ue(() => {
    n().disableKeyboardA11y || u(l)?.focus({ preventScroll: !0 });
  });
  let c = /* @__PURE__ */ N(() => {
    if (n().selectionRectMode === "nodes") {
      n().nodes;
      const b = ti(n().nodeLookup, { filter: (k) => !!k.selected });
      if (b.width > 0 && b.height > 0)
        return b;
    }
    return null;
  });
  function d(b) {
    const k = n().nodes.filter((E) => E.selected);
    a()?.({ nodes: k, event: b });
  }
  function f(b) {
    const k = n().nodes.filter((E) => E.selected);
    s()?.({ nodes: k, event: b });
  }
  function h(b) {
    Object.prototype.hasOwnProperty.call(Ui, b.key) && (b.preventDefault(), n().moveSelectedNodes(Ui[b.key], b.shiftKey ? 4 : 1));
  }
  var g = {
    get store() {
      return n();
    },
    set store(b) {
      n(b), m();
    },
    get onnodedrag() {
      return r();
    },
    set onnodedrag(b) {
      r(b), m();
    },
    get onnodedragstart() {
      return o();
    },
    set onnodedragstart(b) {
      o(b), m();
    },
    get onnodedragstop() {
      return i();
    },
    set onnodedragstop(b) {
      i(b), m();
    },
    get onselectionclick() {
      return s();
    },
    set onselectionclick(b) {
      s(b), m();
    },
    get onselectioncontextmenu() {
      return a();
    },
    set onselectioncontextmenu(b) {
      a(b), m();
    }
  }, v = _e(), p = oe(v);
  {
    var w = (b) => {
      var k = x2();
      k.__contextmenu = d, k.__click = f, k.__keydown = function(...S) {
        (n().disableKeyboardA11y ? void 0 : h)?.apply(this, S);
      };
      let E;
      var _ = F(k);
      yl(_, { width: "100%", height: "100%", x: 0, y: 0 }), B(k), xt(k, (S, T) => Nf?.(S, T), () => ({
        disabled: !1,
        store: n(),
        onDrag: (S, T, V, O) => {
          r()?.({ event: S, targetNode: null, nodes: O });
        },
        onDragStart: (S, T, V, O) => {
          o()?.({ event: S, targetNode: null, nodes: O });
        },
        onDragStop: (S, T, V, O) => {
          i()?.({ event: S, targetNode: null, nodes: O });
        }
      })), dt(k, (S) => Q(l, S), () => u(l)), Ee(
        (S) => {
          Bt(k, 1, qn(["svelte-flow__selection-wrapper", n().noPanClass]), "svelte-ceq0zw"), ke(k, "role", n().disableKeyboardA11y ? void 0 : "button"), ke(k, "tabindex", n().disableKeyboardA11y ? void 0 : -1), E = mt(k, "", E, S);
        },
        [
          () => ({
            width: Nn(u(c).width),
            height: Nn(u(c).height),
            transform: `translate(${u(c).x ?? ""}px, ${u(c).y ?? ""}px)`
          })
        ]
      ), D(b, k);
    };
    se(p, (b) => {
      n().selectionRectMode === "nodes" && u(c) && In(u(c).x) && In(u(c).y) && b(w);
    });
  }
  return D(e, v), ue(g);
}
vr(["contextmenu", "click", "keydown"]);
ae(
  If,
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
function C2(e) {
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
function mn(e, t) {
  let { enabled: n = !0, trigger: r, type: o = "keydown" } = t;
  function i(a) {
    const l = Array.isArray(r) ? r : [r], c = [a.metaKey, a.altKey, a.shiftKey, a.ctrlKey].reduce(
      (d, f, h) => f ? d | 1 << h : d,
      0
    );
    for (const d of l) {
      const f = {
        preventDefault: !1,
        enabled: !0,
        ...d
      }, { modifier: h, key: g, callback: v, preventDefault: p, enabled: w } = f;
      if (w) {
        if (a.key !== g) continue;
        if (h === null || h === !1) {
          if (c !== 0) continue;
        } else if (h !== void 0 && h?.[0]?.length > 0) {
          const k = Array.isArray(h) ? h : [h];
          let E = !1;
          for (const _ of k)
            if ((Array.isArray(_) ? _ : [_]).reduce(
              (T, V) => T | C2(V),
              0
            ) === c) {
              E = !0;
              break;
            }
          if (!E) continue;
        }
        p && a.preventDefault();
        const b = {
          node: e,
          trigger: f,
          originalEvent: a
        };
        e.dispatchEvent(new CustomEvent("shortcut", { detail: b })), v?.(b);
      }
    }
  }
  let s;
  return n && (s = En(e, o, i)), {
    update: (a) => {
      const { enabled: l = !0, type: c = "keydown" } = a;
      n && (!l || o !== c) ? s?.() : !n && l && (s = En(e, c, i)), n = l, o = c, r = a.trigger;
    },
    destroy: () => {
      s?.();
    }
  };
}
function ft() {
  const e = /* @__PURE__ */ N(hn), t = (i) => {
    const s = Ec(i) ? i : u(e).nodeLookup.get(i.id), a = s.parentId ? J0(s.position, s.measured, s.parentId, u(e).nodeLookup, u(e).nodeOrigin) : s.position, l = {
      ...s,
      position: a,
      width: s.measured?.width ?? s.width,
      height: s.measured?.height ?? s.height
    };
    return so(l);
  };
  function n(i, s, a = { replace: !1 }) {
    u(e).nodes = Je(() => u(e).nodes).map((l) => {
      if (l.id === i) {
        const c = typeof s == "function" ? s(l) : s;
        return a?.replace && Ec(c) ? c : { ...l, ...c };
      }
      return l;
    });
  }
  function r(i, s, a = { replace: !1 }) {
    u(e).edges = Je(() => u(e).edges).map((l) => {
      if (l.id === i) {
        const c = typeof s == "function" ? s(l) : s;
        return a.replace && Yy(c) ? c : { ...l, ...c };
      }
      return l;
    });
  }
  const o = (i) => u(e).nodeLookup.get(i);
  return {
    zoomIn: u(e).zoomIn,
    zoomOut: u(e).zoomOut,
    getInternalNode: o,
    getNode: (i) => o(i)?.internals.userNode,
    getNodes: (i) => i === void 0 ? u(e).nodes : $c(u(e).nodeLookup, i),
    getEdge: (i) => u(e).edgeLookup.get(i),
    getEdges: (i) => i === void 0 ? u(e).edges : $c(u(e).edgeLookup, i),
    setZoom: (i, s) => {
      const a = u(e).panZoom;
      return a ? a.scaleTo(i, { duration: s?.duration }) : Promise.resolve(!1);
    },
    getZoom: () => u(e).viewport.zoom,
    setViewport: async (i, s) => {
      const a = u(e).viewport;
      return u(e).panZoom ? (await u(e).panZoom.setViewport(
        {
          x: i.x ?? a.x,
          y: i.y ?? a.y,
          zoom: i.zoom ?? a.zoom
        },
        s
      ), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    getViewport: () => Wa(u(e).viewport),
    setCenter: async (i, s, a) => u(e).setCenter(i, s, a),
    fitView: (i) => u(e).fitView(i),
    fitBounds: async (i, s) => {
      if (!u(e).panZoom)
        return Promise.resolve(!1);
      const a = dl(i, u(e).width, u(e).height, u(e).minZoom, u(e).maxZoom, s?.padding ?? 0.1);
      return await u(e).panZoom.setViewport(a, {
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
      const l = gc(i), c = l ? i : t(i);
      return c ? (a || u(e).nodes).filter((d) => {
        const f = u(e).nodeLookup.get(d.id);
        if (!f || !l && d.id === i.id)
          return !1;
        const h = so(f), g = Ro(h, c);
        return s && g > 0 || g >= h.width * h.height || g >= c.width * c.height;
      }) : [];
    },
    isNodeIntersecting: (i, s, a = !0) => {
      const c = gc(i) ? i : t(i);
      if (!c)
        return !1;
      const d = Ro(c, s);
      return a && d > 0 || d >= s.width * s.height || d >= c.width * c.height;
    },
    deleteElements: async ({ nodes: i = [], edges: s = [] }) => {
      const { nodes: a, edges: l } = await X0({
        nodesToRemove: i,
        edgesToRemove: s,
        nodes: u(e).nodes,
        edges: u(e).edges,
        onBeforeDelete: u(e).onbeforedelete
      });
      return a && (u(e).nodes = Je(() => u(e).nodes).filter((c) => !a.some(({ id: d }) => d === c.id))), l && (u(e).edges = Je(() => u(e).edges).filter((c) => !l.some(({ id: d }) => d === c.id))), (a.length > 0 || l.length > 0) && u(e).ondelete?.({ nodes: a, edges: l }), { deletedNodes: a, deletedEdges: l };
    },
    screenToFlowPosition: (i, s = { snapToGrid: !0 }) => {
      if (!u(e).domNode)
        return i;
      const a = s.snapToGrid ? u(e).snapGrid : !1, { x: l, y: c, zoom: d } = u(e).viewport, { x: f, y: h } = u(e).domNode.getBoundingClientRect(), g = { x: i.x - f, y: i.y - h };
      return ri(g, [l, c, d], a !== null, a || [1, 1]);
    },
    /**
     *
     * @param position
     * @returns
     */
    flowToScreenPosition: (i) => {
      if (!u(e).domNode)
        return i;
      const { x: s, y: a, zoom: l } = u(e).viewport, { x: c, y: d } = u(e).domNode.getBoundingClientRect(), f = Gi(i, [s, a, l]);
      return { x: f.x + c, y: f.y + d };
    },
    toObject: () => structuredClone({
      nodes: [...u(e).nodes],
      edges: [...u(e).edges],
      viewport: { ...u(e).viewport }
    }),
    updateNode: n,
    updateNodeData: (i, s, a) => {
      const l = u(e).nodeLookup.get(i)?.internals.userNode;
      if (!l)
        return;
      const c = typeof s == "function" ? s(l) : s;
      n(i, (d) => ({
        ...d,
        data: a?.replace ? c : { ...d.data, ...c }
      }));
    },
    updateEdge: r,
    getNodesBounds: (i) => W0(i, {
      nodeLookup: u(e).nodeLookup,
      nodeOrigin: u(e).nodeOrigin
    }),
    getHandleConnections: ({ type: i, id: s, nodeId: a }) => Array.from(u(e).connectionLookup.get(`${a}-${i}-${s ?? null}`)?.values() ?? [])
  };
}
function $c(e, t) {
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
function Lf(e, t) {
  ce(t, !0);
  let n = y(t, "store", 15), r = y(t, "selectionKey", 7, "Shift"), o = y(t, "multiSelectionKey", 23, () => kr() ? "Meta" : "Control"), i = y(t, "deleteKey", 7, "Backspace"), s = y(t, "panActivationKey", 7, " "), a = y(t, "zoomActivationKey", 23, () => kr() ? "Meta" : "Control"), { deleteElements: l } = ft();
  function c(w) {
    return w !== null && typeof w == "object";
  }
  function d(w) {
    return c(w) ? w.modifier || [] : [];
  }
  function f(w) {
    return w == null ? "" : c(w) ? w.key : w;
  }
  function h(w, b) {
    return (Array.isArray(w) ? w : [w]).map((E) => {
      const _ = f(E);
      return {
        key: _,
        modifier: d(E),
        enabled: _ !== null,
        callback: b
      };
    });
  }
  function g() {
    n(n().selectionRect = null, !0), n(n().selectionKeyPressed = !1, !0), n(n().multiselectionKeyPressed = !1, !0), n(n().deleteKeyPressed = !1, !0), n(n().panActivationKeyPressed = !1, !0), n(n().zoomActivationKeyPressed = !1, !0);
  }
  function v() {
    const w = n().nodes.filter((k) => k.selected), b = n().edges.filter((k) => k.selected);
    l({ nodes: w, edges: b });
  }
  var p = {
    get store() {
      return n();
    },
    set store(w) {
      n(w), m();
    },
    get selectionKey() {
      return r();
    },
    set selectionKey(w = "Shift") {
      r(w), m();
    },
    get multiSelectionKey() {
      return o();
    },
    set multiSelectionKey(w = kr() ? "Meta" : "Control") {
      o(w), m();
    },
    get deleteKey() {
      return i();
    },
    set deleteKey(w = "Backspace") {
      i(w), m();
    },
    get panActivationKey() {
      return s();
    },
    set panActivationKey(w = " ") {
      s(w), m();
    },
    get zoomActivationKey() {
      return a();
    },
    set zoomActivationKey(w = kr() ? "Meta" : "Control") {
      a(w), m();
    }
  };
  return Ri("blur", zt, g), Ri("contextmenu", zt, g), xt(zt, (w, b) => mn?.(w, b), () => ({
    trigger: h(r(), () => n(n().selectionKeyPressed = !0, !0)),
    type: "keydown"
  })), xt(zt, (w, b) => mn?.(w, b), () => ({
    trigger: h(r(), () => n(n().selectionKeyPressed = !1, !0)),
    type: "keyup"
  })), xt(zt, (w, b) => mn?.(w, b), () => ({
    trigger: h(o(), () => {
      n(n().multiselectionKeyPressed = !0, !0);
    }),
    type: "keydown"
  })), xt(zt, (w, b) => mn?.(w, b), () => ({
    trigger: h(o(), () => n(n().multiselectionKeyPressed = !1, !0)),
    type: "keyup"
  })), xt(zt, (w, b) => mn?.(w, b), () => ({
    trigger: h(i(), (w) => {
      !(w.originalEvent.ctrlKey || w.originalEvent.metaKey || w.originalEvent.shiftKey) && !Gd(w.originalEvent) && (n(n().deleteKeyPressed = !0, !0), v());
    }),
    type: "keydown"
  })), xt(zt, (w, b) => mn?.(w, b), () => ({
    trigger: h(i(), () => n(n().deleteKeyPressed = !1, !0)),
    type: "keyup"
  })), xt(zt, (w, b) => mn?.(w, b), () => ({
    trigger: h(s(), () => n(n().panActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), xt(zt, (w, b) => mn?.(w, b), () => ({
    trigger: h(s(), () => n(n().panActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), xt(zt, (w, b) => mn?.(w, b), () => ({
    trigger: h(a(), () => n(n().zoomActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), xt(zt, (w, b) => mn?.(w, b), () => ({
    trigger: h(a(), () => n(n().zoomActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), ue(p);
}
ae(
  Lf,
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
var k2 = /* @__PURE__ */ pe('<path fill="none" class="svelte-flow__connection-path"></path>'), S2 = /* @__PURE__ */ pe('<svg class="svelte-flow__connectionline"><g><!></g></svg>');
function Hf(e, t) {
  ce(t, !0);
  let n = y(t, "store", 15), r = y(t, "type", 7), o = y(t, "containerStyle", 7), i = y(t, "style", 7), s = y(t, "LineComponent", 7), a = /* @__PURE__ */ N(() => {
    if (!n().connection.inProgress)
      return "";
    const h = {
      sourceX: n().connection.from.x,
      sourceY: n().connection.from.y,
      sourcePosition: n().connection.fromPosition,
      targetX: n().connection.to.x,
      targetY: n().connection.to.y,
      targetPosition: n().connection.toPosition
    };
    switch (r()) {
      case zn.Bezier: {
        const [g] = Jd(h);
        return g;
      }
      case zn.Straight: {
        const [g] = ef(h);
        return g;
      }
      case zn.Step:
      case zn.SmoothStep: {
        const [g] = fl({
          ...h,
          borderRadius: r() === zn.Step ? 0 : void 0
        });
        return g;
      }
    }
  });
  var l = {
    get store() {
      return n();
    },
    set store(h) {
      n(h), m();
    },
    get type() {
      return r();
    },
    set type(h) {
      r(h), m();
    },
    get containerStyle() {
      return o();
    },
    set containerStyle(h) {
      o(h), m();
    },
    get style() {
      return i();
    },
    set style(h) {
      i(h), m();
    },
    get LineComponent() {
      return s();
    },
    set LineComponent(h) {
      s(h), m();
    }
  }, c = _e(), d = oe(c);
  {
    var f = (h) => {
      var g = S2(), v = F(g), p = F(v);
      {
        var w = (k) => {
          var E = _e(), _ = oe(E);
          Uo(_, s, (S, T) => {
            T(S, {});
          }), D(k, E);
        }, b = (k) => {
          var E = k2();
          Ee(() => {
            ke(E, "d", u(a)), mt(E, i());
          }), D(k, E);
        };
        se(p, (k) => {
          s() ? k(w) : k(b, !1);
        });
      }
      B(v), B(g), Ee(
        (k) => {
          ke(g, "width", n().width), ke(g, "height", n().height), mt(g, o()), Bt(v, 0, k);
        },
        [
          () => qn([
            "svelte-flow__connection",
            F0(n().connection.isValid)
          ])
        ]
      ), D(h, g);
    };
    se(d, (h) => {
      n().connection.inProgress && h(f);
    });
  }
  return D(e, c), ue(l);
}
ae(
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
var E2 = /* @__PURE__ */ te("<div><!></div>");
function ii(e, t) {
  ce(t, !0);
  let n = y(t, "position", 7, "top-right"), r = y(t, "style", 7), o = y(t, "class", 7), i = y(t, "children", 7), s = /* @__PURE__ */ Re(t, [
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
      n(f), m();
    },
    get style() {
      return r();
    },
    set style(f) {
      r(f), m();
    },
    get class() {
      return o();
    },
    set class(f) {
      o(f), m();
    },
    get children() {
      return i();
    },
    set children(f) {
      i(f), m();
    }
  }, c = E2();
  Ge(c, (f) => ({ class: f, style: r(), ...s }), [
    () => ["svelte-flow__panel", o(), ...u(a)]
  ]);
  var d = F(c);
  return je(d, () => i() ?? tt), B(c), D(e, c), ue(l);
}
ae(ii, { position: {}, style: {}, class: {}, children: {} }, [], [], !0);
var N2 = /* @__PURE__ */ te('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function Rf(e, t) {
  ce(t, !0);
  let n = y(t, "proOptions", 7), r = y(t, "position", 7, "bottom-right");
  var o = {
    get proOptions() {
      return n();
    },
    set proOptions(l) {
      n(l), m();
    },
    get position() {
      return r();
    },
    set position(l = "bottom-right") {
      r(l), m();
    }
  }, i = _e(), s = oe(i);
  {
    var a = (l) => {
      ii(l, {
        get position() {
          return r();
        },
        class: "svelte-flow__attribution",
        "data-message": "Feel free to remove the attribution or check out how you could support us: https://svelteflow.dev/support-us",
        children: (c, d) => {
          var f = N2();
          D(c, f);
        },
        $$slots: { default: !0 }
      });
    };
    se(s, (l) => {
      n()?.hideAttribution || l(a);
    });
  }
  return D(e, i), ue(o);
}
ae(Rf, { proOptions: {}, position: {} }, [], [], !0);
var P2 = /* @__PURE__ */ te("<div><!></div>");
const T2 = {
  hash: "svelte-152mfj7",
  code: ".svelte-flow.svelte-152mfj7 {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;background-color:var(--background-color, var(--background-color-default));}:root {--background-color-default: #fff;--background-pattern-color-default: #ddd;--minimap-mask-color-default: rgb(240, 240, 240, 0.6);--minimap-mask-stroke-color-default: none;--minimap-mask-stroke-width-default: 1;--controls-button-background-color-default: #fefefe;--controls-button-background-color-hover-default: #f4f4f4;--controls-button-color-default: inherit;--controls-button-color-hover-default: inherit;--controls-button-border-color-default: #eee;}"
};
function Bf(e, t) {
  ce(t, !0), Ze(e, T2);
  let n = y(t, "width", 7), r = y(t, "height", 7), o = y(t, "colorMode", 7), i = y(t, "domNode", 15), s = y(t, "clientWidth", 15), a = y(t, "clientHeight", 15), l = y(t, "children", 7), c = y(t, "rest", 7), d = /* @__PURE__ */ N(() => c().class), f = /* @__PURE__ */ N(() => Nv(c(), [
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
  function h(w) {
    w.currentTarget.scrollTo({ top: 0, left: 0, behavior: "auto" }), c().onscroll && c().onscroll(w);
  }
  var g = {
    get width() {
      return n();
    },
    set width(w) {
      n(w), m();
    },
    get height() {
      return r();
    },
    set height(w) {
      r(w), m();
    },
    get colorMode() {
      return o();
    },
    set colorMode(w) {
      o(w), m();
    },
    get domNode() {
      return i();
    },
    set domNode(w) {
      i(w), m();
    },
    get clientWidth() {
      return s();
    },
    set clientWidth(w) {
      s(w), m();
    },
    get clientHeight() {
      return a();
    },
    set clientHeight(w) {
      a(w), m();
    },
    get children() {
      return l();
    },
    set children(w) {
      l(w), m();
    },
    get rest() {
      return c();
    },
    set rest(w) {
      c(w), m();
    }
  }, v = P2();
  Ge(
    v,
    (w) => ({
      class: [
        "svelte-flow",
        "svelte-flow__container",
        u(d),
        o()
      ],
      "data-testid": "svelte-flow__wrapper",
      role: "application",
      onscroll: h,
      ...u(f),
      [bn]: w
    }),
    [
      () => ({ width: Nn(n()), height: Nn(r()) })
    ],
    void 0,
    void 0,
    "svelte-152mfj7"
  );
  var p = F(v);
  return je(p, () => l() ?? tt), B(v), dt(v, (w) => i(w), () => i()), Wl(v, "clientHeight", a), Wl(v, "clientWidth", s), D(e, v), ue(g);
}
ae(
  Bf,
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
var A2 = /* @__PURE__ */ te('<div class="svelte-flow__viewport-back svelte-flow__container"></div> <!> <div class="svelte-flow__edge-labels svelte-flow__container"></div> <!> <!> <!> <div class="svelte-flow__viewport-front svelte-flow__container"></div>', 1), $2 = /* @__PURE__ */ te("<!> <!>", 1), M2 = /* @__PURE__ */ te("<!> <!> <!> <!> <!>", 1);
function Ff(e, t) {
  ce(t, !0);
  let n = y(t, "width", 7), r = y(t, "height", 7), o = y(t, "proOptions", 7), i = y(t, "selectionKey", 7), s = y(t, "deleteKey", 7), a = y(t, "panActivationKey", 7), l = y(t, "multiSelectionKey", 7), c = y(t, "zoomActivationKey", 7), d = y(t, "paneClickDistance", 7, 1), f = y(t, "nodeClickDistance", 7, 1), h = y(t, "onmovestart", 7), g = y(t, "onmoveend", 7), v = y(t, "onmove", 7), p = y(t, "oninit", 7), w = y(t, "onnodeclick", 7), b = y(t, "onnodecontextmenu", 7), k = y(t, "onnodedrag", 7), E = y(t, "onnodedragstart", 7), _ = y(t, "onnodedragstop", 7), S = y(t, "onnodepointerenter", 7), T = y(t, "onnodepointermove", 7), V = y(t, "onnodepointerleave", 7), O = y(t, "onselectionclick", 7), H = y(t, "onselectioncontextmenu", 7), Z = y(t, "onselectionstart", 7), I = y(t, "onselectionend", 7), P = y(t, "onedgeclick", 7), A = y(t, "onedgecontextmenu", 7), x = y(t, "onedgepointerenter", 7), C = y(t, "onedgepointerleave", 7), M = y(t, "onpaneclick", 7), z = y(t, "onpanecontextmenu", 7), K = y(t, "panOnScrollMode", 23, () => Tr.Free), X = y(t, "preventScrolling", 7, !0), $ = y(t, "zoomOnScroll", 7, !0), Y = y(t, "zoomOnDoubleClick", 7, !0), U = y(t, "zoomOnPinch", 7, !0), W = y(t, "panOnScroll", 7, !1), G = y(t, "panOnScrollSpeed", 7, 0.5), R = y(t, "panOnDrag", 7, !0), j = y(t, "selectionOnDrag", 7, !1), ee = y(t, "connectionLineComponent", 7), ne = y(t, "connectionLineStyle", 7), J = y(t, "connectionLineContainerStyle", 7), Ce = y(t, "connectionLineType", 23, () => zn.Bezier), ie = y(t, "attributionPosition", 7), le = y(t, "children", 7), re = y(t, "nodes", 31, () => Ct([])), he = y(t, "edges", 31, () => Ct([])), me = y(t, "viewport", 31, () => {
  }), Se = /* @__PURE__ */ Re(t, [
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
  ]), fe = Cf({
    props: Se,
    width: n(),
    height: r(),
    get nodes() {
      return re();
    },
    set nodes(q) {
      re(q);
    },
    get edges() {
      return he();
    },
    set edges(q) {
      he(q);
    },
    get viewport() {
      return me();
    },
    set viewport(q) {
      me(q);
    }
  });
  const xe = cn(Ji);
  xe && xe.setStore && xe.setStore(fe), Mr(Ji, {
    provider: !1,
    getStore() {
      return fe;
    }
  }), Ue(() => {
    const q = { nodes: fe.selectedNodes, edges: fe.selectedEdges };
    Je(() => t.onselectionchange)?.(q);
    for (const lt of fe.selectionChangeHandlers.values())
      lt(q);
  }), Go(() => {
    fe.reset();
  });
  var Ae = {
    get width() {
      return n();
    },
    set width(q) {
      n(q), m();
    },
    get height() {
      return r();
    },
    set height(q) {
      r(q), m();
    },
    get proOptions() {
      return o();
    },
    set proOptions(q) {
      o(q), m();
    },
    get selectionKey() {
      return i();
    },
    set selectionKey(q) {
      i(q), m();
    },
    get deleteKey() {
      return s();
    },
    set deleteKey(q) {
      s(q), m();
    },
    get panActivationKey() {
      return a();
    },
    set panActivationKey(q) {
      a(q), m();
    },
    get multiSelectionKey() {
      return l();
    },
    set multiSelectionKey(q) {
      l(q), m();
    },
    get zoomActivationKey() {
      return c();
    },
    set zoomActivationKey(q) {
      c(q), m();
    },
    get paneClickDistance() {
      return d();
    },
    set paneClickDistance(q = 1) {
      d(q), m();
    },
    get nodeClickDistance() {
      return f();
    },
    set nodeClickDistance(q = 1) {
      f(q), m();
    },
    get onmovestart() {
      return h();
    },
    set onmovestart(q) {
      h(q), m();
    },
    get onmoveend() {
      return g();
    },
    set onmoveend(q) {
      g(q), m();
    },
    get onmove() {
      return v();
    },
    set onmove(q) {
      v(q), m();
    },
    get oninit() {
      return p();
    },
    set oninit(q) {
      p(q), m();
    },
    get onnodeclick() {
      return w();
    },
    set onnodeclick(q) {
      w(q), m();
    },
    get onnodecontextmenu() {
      return b();
    },
    set onnodecontextmenu(q) {
      b(q), m();
    },
    get onnodedrag() {
      return k();
    },
    set onnodedrag(q) {
      k(q), m();
    },
    get onnodedragstart() {
      return E();
    },
    set onnodedragstart(q) {
      E(q), m();
    },
    get onnodedragstop() {
      return _();
    },
    set onnodedragstop(q) {
      _(q), m();
    },
    get onnodepointerenter() {
      return S();
    },
    set onnodepointerenter(q) {
      S(q), m();
    },
    get onnodepointermove() {
      return T();
    },
    set onnodepointermove(q) {
      T(q), m();
    },
    get onnodepointerleave() {
      return V();
    },
    set onnodepointerleave(q) {
      V(q), m();
    },
    get onselectionclick() {
      return O();
    },
    set onselectionclick(q) {
      O(q), m();
    },
    get onselectioncontextmenu() {
      return H();
    },
    set onselectioncontextmenu(q) {
      H(q), m();
    },
    get onselectionstart() {
      return Z();
    },
    set onselectionstart(q) {
      Z(q), m();
    },
    get onselectionend() {
      return I();
    },
    set onselectionend(q) {
      I(q), m();
    },
    get onedgeclick() {
      return P();
    },
    set onedgeclick(q) {
      P(q), m();
    },
    get onedgecontextmenu() {
      return A();
    },
    set onedgecontextmenu(q) {
      A(q), m();
    },
    get onedgepointerenter() {
      return x();
    },
    set onedgepointerenter(q) {
      x(q), m();
    },
    get onedgepointerleave() {
      return C();
    },
    set onedgepointerleave(q) {
      C(q), m();
    },
    get onpaneclick() {
      return M();
    },
    set onpaneclick(q) {
      M(q), m();
    },
    get onpanecontextmenu() {
      return z();
    },
    set onpanecontextmenu(q) {
      z(q), m();
    },
    get panOnScrollMode() {
      return K();
    },
    set panOnScrollMode(q = Tr.Free) {
      K(q), m();
    },
    get preventScrolling() {
      return X();
    },
    set preventScrolling(q = !0) {
      X(q), m();
    },
    get zoomOnScroll() {
      return $();
    },
    set zoomOnScroll(q = !0) {
      $(q), m();
    },
    get zoomOnDoubleClick() {
      return Y();
    },
    set zoomOnDoubleClick(q = !0) {
      Y(q), m();
    },
    get zoomOnPinch() {
      return U();
    },
    set zoomOnPinch(q = !0) {
      U(q), m();
    },
    get panOnScroll() {
      return W();
    },
    set panOnScroll(q = !1) {
      W(q), m();
    },
    get panOnScrollSpeed() {
      return G();
    },
    set panOnScrollSpeed(q = 0.5) {
      G(q), m();
    },
    get panOnDrag() {
      return R();
    },
    set panOnDrag(q = !0) {
      R(q), m();
    },
    get selectionOnDrag() {
      return j();
    },
    set selectionOnDrag(q = !1) {
      j(q), m();
    },
    get connectionLineComponent() {
      return ee();
    },
    set connectionLineComponent(q) {
      ee(q), m();
    },
    get connectionLineStyle() {
      return ne();
    },
    set connectionLineStyle(q) {
      ne(q), m();
    },
    get connectionLineContainerStyle() {
      return J();
    },
    set connectionLineContainerStyle(q) {
      J(q), m();
    },
    get connectionLineType() {
      return Ce();
    },
    set connectionLineType(q = zn.Bezier) {
      Ce(q), m();
    },
    get attributionPosition() {
      return ie();
    },
    set attributionPosition(q) {
      ie(q), m();
    },
    get children() {
      return le();
    },
    set children(q) {
      le(q), m();
    },
    get nodes() {
      return re();
    },
    set nodes(q = []) {
      re(q), m();
    },
    get edges() {
      return he();
    },
    set edges(q = []) {
      he(q), m();
    },
    get viewport() {
      return me();
    },
    set viewport(q = void 0) {
      me(q), m();
    }
  };
  return Bf(e, {
    get colorMode() {
      return fe.colorMode;
    },
    get width() {
      return n();
    },
    get height() {
      return r();
    },
    get rest() {
      return Se;
    },
    get domNode() {
      return fe.domNode;
    },
    set domNode(q) {
      fe.domNode = q;
    },
    get clientWidth() {
      return fe.width;
    },
    set clientWidth(q) {
      fe.width = q;
    },
    get clientHeight() {
      return fe.height;
    },
    set clientHeight(q) {
      fe.height = q;
    },
    children: (q, lt) => {
      var Oe = M2(), Be = oe(Oe);
      Lf(Be, {
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
          return c();
        },
        get store() {
          return fe;
        },
        set store(yt) {
          fe = yt;
        }
      });
      var Ie = L(Be, 2);
      kf(Ie, {
        get panOnScrollMode() {
          return K();
        },
        get preventScrolling() {
          return X();
        },
        get zoomOnScroll() {
          return $();
        },
        get zoomOnDoubleClick() {
          return Y();
        },
        get zoomOnPinch() {
          return U();
        },
        get panOnScroll() {
          return W();
        },
        get panOnScrollSpeed() {
          return G();
        },
        get panOnDrag() {
          return R();
        },
        get paneClickDistance() {
          return d();
        },
        get selectionOnDrag() {
          return j();
        },
        get onmovestart() {
          return h();
        },
        get onmove() {
          return v();
        },
        get onmoveend() {
          return g();
        },
        get oninit() {
          return p();
        },
        get store() {
          return fe;
        },
        set store(yt) {
          fe = yt;
        },
        children: (yt, tn) => {
          Sf(yt, {
            get onpaneclick() {
              return M();
            },
            get onpanecontextmenu() {
              return z();
            },
            get onselectionstart() {
              return Z();
            },
            get onselectionend() {
              return I();
            },
            get panOnDrag() {
              return R();
            },
            get paneClickDistance() {
              return d();
            },
            get selectionOnDrag() {
              return j();
            },
            get store() {
              return fe;
            },
            set store(de) {
              fe = de;
            },
            children: (de, Me) => {
              var et = $2(), Fe = oe(et);
              Ef(Fe, {
                get store() {
                  return fe;
                },
                set store(Nt) {
                  fe = Nt;
                },
                children: (Nt, Dt) => {
                  var vn = A2(), wt = L(oe(vn), 2);
                  Vf(wt, {
                    get onedgeclick() {
                      return P();
                    },
                    get onedgecontextmenu() {
                      return A();
                    },
                    get onedgepointerenter() {
                      return x();
                    },
                    get onedgepointerleave() {
                      return C();
                    },
                    get store() {
                      return fe;
                    },
                    set store(wr) {
                      fe = wr;
                    }
                  });
                  var bt = L(wt, 4);
                  Hf(bt, {
                    get type() {
                      return Ce();
                    },
                    get LineComponent() {
                      return ee();
                    },
                    get containerStyle() {
                      return J();
                    },
                    get style() {
                      return ne();
                    },
                    get store() {
                      return fe;
                    },
                    set store(wr) {
                      fe = wr;
                    }
                  });
                  var pn = L(bt, 2);
                  Mf(pn, {
                    get nodeClickDistance() {
                      return f();
                    },
                    get onnodeclick() {
                      return w();
                    },
                    get onnodecontextmenu() {
                      return b();
                    },
                    get onnodepointerenter() {
                      return S();
                    },
                    get onnodepointermove() {
                      return T();
                    },
                    get onnodepointerleave() {
                      return V();
                    },
                    get onnodedrag() {
                      return k();
                    },
                    get onnodedragstart() {
                      return E();
                    },
                    get onnodedragstop() {
                      return _();
                    },
                    get store() {
                      return fe;
                    },
                    set store(wr) {
                      fe = wr;
                    }
                  });
                  var kg = L(pn, 2);
                  If(kg, {
                    get onselectionclick() {
                      return O();
                    },
                    get onselectioncontextmenu() {
                      return H();
                    },
                    get onnodedrag() {
                      return k();
                    },
                    get onnodedragstart() {
                      return E();
                    },
                    get onnodedragstop() {
                      return _();
                    },
                    get store() {
                      return fe;
                    },
                    set store(wr) {
                      fe = wr;
                    }
                  }), ye(2), D(Nt, vn);
                },
                $$slots: { default: !0 }
              });
              var ct = L(Fe, 2);
              {
                let Nt = /* @__PURE__ */ N(() => !!(fe.selectionRect && fe.selectionRectMode === "user")), Dt = /* @__PURE__ */ N(() => fe.selectionRect?.width), vn = /* @__PURE__ */ N(() => fe.selectionRect?.height), wt = /* @__PURE__ */ N(() => fe.selectionRect?.x), bt = /* @__PURE__ */ N(() => fe.selectionRect?.y);
                yl(ct, {
                  get isVisible() {
                    return u(Nt);
                  },
                  get width() {
                    return u(Dt);
                  },
                  get height() {
                    return u(vn);
                  },
                  get x() {
                    return u(wt);
                  },
                  get y() {
                    return u(bt);
                  }
                });
              }
              D(de, et);
            },
            $$slots: { default: !0 }
          });
        },
        $$slots: { default: !0 }
      });
      var Et = L(Ie, 2);
      Rf(Et, {
        get proOptions() {
          return o();
        },
        get position() {
          return ie();
        }
      });
      var st = L(Et, 2);
      Pf(st, {
        get store() {
          return fe;
        }
      });
      var Mt = L(st, 2);
      je(Mt, () => le() ?? tt), D(q, Oe);
    },
    $$slots: { default: !0 }
  }), ue(Ae);
}
ae(
  Ff,
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
function Kf(e, t) {
  ce(t, !0);
  let n = y(t, "children", 7), r = /* @__PURE__ */ Pe(Cf({ props: {}, nodes: [], edges: [] }));
  Mr(Ji, {
    provider: !0,
    getStore() {
      return u(r);
    },
    setStore: (a) => {
      Q(r, a);
    }
  }), Go(() => {
    u(r).reset();
  });
  var o = {
    get children() {
      return n();
    },
    set children(a) {
      n(a), m();
    }
  }, i = _e(), s = oe(i);
  return je(s, () => n() ?? tt), D(e, i), ue(o);
}
ae(Kf, { children: {} }, [], [], !0);
var D2 = /* @__PURE__ */ te("<button><!></button>");
function So(e, t) {
  ce(t, !0);
  let n = y(t, "class", 7), r = y(t, "bgColor", 7), o = y(t, "bgColorHover", 7), i = y(t, "color", 7), s = y(t, "colorHover", 7), a = y(t, "borderColor", 7), l = y(t, "onclick", 7), c = y(t, "children", 7), d = /* @__PURE__ */ Re(t, [
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
    set class(v) {
      n(v), m();
    },
    get bgColor() {
      return r();
    },
    set bgColor(v) {
      r(v), m();
    },
    get bgColorHover() {
      return o();
    },
    set bgColorHover(v) {
      o(v), m();
    },
    get color() {
      return i();
    },
    set color(v) {
      i(v), m();
    },
    get colorHover() {
      return s();
    },
    set colorHover(v) {
      s(v), m();
    },
    get borderColor() {
      return a();
    },
    set borderColor(v) {
      a(v), m();
    },
    get onclick() {
      return l();
    },
    set onclick(v) {
      l(v), m();
    },
    get children() {
      return c();
    },
    set children(v) {
      c(v), m();
    }
  }, h = D2();
  Ge(h, () => ({
    type: "button",
    onclick: l(),
    class: ["svelte-flow__controls-button", n()],
    ...d,
    [bn]: {
      "--xy-controls-button-background-color-props": r(),
      "--xy-controls-button-background-color-hover-props": o(),
      "--xy-controls-button-color-props": i(),
      "--xy-controls-button-color-hover-props": s(),
      "--xy-controls-button-border-color-props": a()
    }
  }));
  var g = F(h);
  return je(g, () => c() ?? tt), B(h), D(e, h), ue(f);
}
ae(
  So,
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
var O2 = /* @__PURE__ */ pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function Wf(e) {
  var t = O2();
  D(e, t);
}
ae(Wf, {}, [], [], !0);
var z2 = /* @__PURE__ */ pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function Zf(e) {
  var t = z2();
  D(e, t);
}
ae(Zf, {}, [], [], !0);
var V2 = /* @__PURE__ */ pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function Yf(e) {
  var t = V2();
  D(e, t);
}
ae(Yf, {}, [], [], !0);
var I2 = /* @__PURE__ */ pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function jf(e) {
  var t = I2();
  D(e, t);
}
ae(jf, {}, [], [], !0);
var L2 = /* @__PURE__ */ pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function Xf(e) {
  var t = L2();
  D(e, t);
}
ae(Xf, {}, [], [], !0);
var H2 = /* @__PURE__ */ te("<!> <!>", 1), R2 = /* @__PURE__ */ te("<!> <!> <!> <!> <!> <!>", 1);
function qf(e, t) {
  ce(t, !0);
  let n = y(t, "position", 7, "bottom-left"), r = y(t, "orientation", 7, "vertical"), o = y(t, "showZoom", 7, !0), i = y(t, "showFitView", 7, !0), s = y(t, "showLock", 7, !0), a = y(t, "style", 7), l = y(t, "class", 7), c = y(t, "buttonBgColor", 7), d = y(t, "buttonBgColorHover", 7), f = y(t, "buttonColor", 7), h = y(t, "buttonColorHover", 7), g = y(t, "buttonBorderColor", 7), v = y(t, "fitViewOptions", 7), p = y(t, "children", 7), w = y(t, "before", 7), b = y(t, "after", 7), k = /* @__PURE__ */ Re(t, [
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
  ]), E = /* @__PURE__ */ N(hn);
  const _ = {
    bgColor: c(),
    bgColorHover: d(),
    color: f(),
    colorHover: h(),
    borderColor: g()
  };
  let S = /* @__PURE__ */ N(() => u(E).nodesDraggable || u(E).nodesConnectable || u(E).elementsSelectable), T = /* @__PURE__ */ N(() => u(E).viewport.zoom <= u(E).minZoom), V = /* @__PURE__ */ N(() => u(E).viewport.zoom >= u(E).maxZoom), O = /* @__PURE__ */ N(() => u(E).ariaLabelConfig), H = /* @__PURE__ */ N(() => r() === "horizontal" ? "horizontal" : "vertical");
  const Z = () => {
    u(E).zoomIn();
  }, I = () => {
    u(E).zoomOut();
  }, P = () => {
    u(E).fitView(v());
  }, A = () => {
    let C = !u(S);
    u(E).nodesDraggable = C, u(E).nodesConnectable = C, u(E).elementsSelectable = C;
  };
  var x = {
    get position() {
      return n();
    },
    set position(C = "bottom-left") {
      n(C), m();
    },
    get orientation() {
      return r();
    },
    set orientation(C = "vertical") {
      r(C), m();
    },
    get showZoom() {
      return o();
    },
    set showZoom(C = !0) {
      o(C), m();
    },
    get showFitView() {
      return i();
    },
    set showFitView(C = !0) {
      i(C), m();
    },
    get showLock() {
      return s();
    },
    set showLock(C = !0) {
      s(C), m();
    },
    get style() {
      return a();
    },
    set style(C) {
      a(C), m();
    },
    get class() {
      return l();
    },
    set class(C) {
      l(C), m();
    },
    get buttonBgColor() {
      return c();
    },
    set buttonBgColor(C) {
      c(C), m();
    },
    get buttonBgColorHover() {
      return d();
    },
    set buttonBgColorHover(C) {
      d(C), m();
    },
    get buttonColor() {
      return f();
    },
    set buttonColor(C) {
      f(C), m();
    },
    get buttonColorHover() {
      return h();
    },
    set buttonColorHover(C) {
      h(C), m();
    },
    get buttonBorderColor() {
      return g();
    },
    set buttonBorderColor(C) {
      g(C), m();
    },
    get fitViewOptions() {
      return v();
    },
    set fitViewOptions(C) {
      v(C), m();
    },
    get children() {
      return p();
    },
    set children(C) {
      p(C), m();
    },
    get before() {
      return w();
    },
    set before(C) {
      w(C), m();
    },
    get after() {
      return b();
    },
    set after(C) {
      b(C), m();
    }
  };
  {
    let C = /* @__PURE__ */ N(() => [
      "svelte-flow__controls",
      u(H),
      l()
    ]);
    ii(e, We(
      {
        get class() {
          return u(C);
        },
        get position() {
          return n();
        },
        "data-testid": "svelte-flow__controls",
        get "aria-label"() {
          return u(O)["controls.ariaLabel"];
        },
        get style() {
          return a();
        }
      },
      () => k,
      {
        children: (M, z) => {
          var K = R2(), X = oe(K);
          {
            var $ = (ie) => {
              var le = _e(), re = oe(le);
              je(re, w), D(ie, le);
            };
            se(X, (ie) => {
              w() && ie($);
            });
          }
          var Y = L(X, 2);
          {
            var U = (ie) => {
              var le = H2(), re = oe(le);
              So(re, We(
                {
                  onclick: Z,
                  class: "svelte-flow__controls-zoomin",
                  get title() {
                    return u(O)["controls.zoomIn.ariaLabel"];
                  },
                  get "aria-label"() {
                    return u(O)["controls.zoomIn.ariaLabel"];
                  },
                  get disabled() {
                    return u(V);
                  }
                },
                () => _,
                {
                  children: (me, Se) => {
                    Wf(me);
                  },
                  $$slots: { default: !0 }
                }
              ));
              var he = L(re, 2);
              So(he, We(
                {
                  onclick: I,
                  class: "svelte-flow__controls-zoomout",
                  get title() {
                    return u(O)["controls.zoomOut.ariaLabel"];
                  },
                  get "aria-label"() {
                    return u(O)["controls.zoomOut.ariaLabel"];
                  },
                  get disabled() {
                    return u(T);
                  }
                },
                () => _,
                {
                  children: (me, Se) => {
                    Zf(me);
                  },
                  $$slots: { default: !0 }
                }
              )), D(ie, le);
            };
            se(Y, (ie) => {
              o() && ie(U);
            });
          }
          var W = L(Y, 2);
          {
            var G = (ie) => {
              So(ie, We(
                {
                  class: "svelte-flow__controls-fitview",
                  onclick: P,
                  get title() {
                    return u(O)["controls.fitView.ariaLabel"];
                  },
                  get "aria-label"() {
                    return u(O)["controls.fitView.ariaLabel"];
                  }
                },
                () => _,
                {
                  children: (le, re) => {
                    Yf(le);
                  },
                  $$slots: { default: !0 }
                }
              ));
            };
            se(W, (ie) => {
              i() && ie(G);
            });
          }
          var R = L(W, 2);
          {
            var j = (ie) => {
              So(ie, We(
                {
                  class: "svelte-flow__controls-interactive",
                  onclick: A,
                  get title() {
                    return u(O)["controls.interactive.ariaLabel"];
                  },
                  get "aria-label"() {
                    return u(O)["controls.interactive.ariaLabel"];
                  }
                },
                () => _,
                {
                  children: (le, re) => {
                    var he = _e(), me = oe(he);
                    {
                      var Se = (xe) => {
                        Xf(xe);
                      }, fe = (xe) => {
                        jf(xe);
                      };
                      se(me, (xe) => {
                        u(S) ? xe(Se) : xe(fe, !1);
                      });
                    }
                    D(le, he);
                  },
                  $$slots: { default: !0 }
                }
              ));
            };
            se(R, (ie) => {
              s() && ie(j);
            });
          }
          var ee = L(R, 2);
          {
            var ne = (ie) => {
              var le = _e(), re = oe(le);
              je(re, p), D(ie, le);
            };
            se(ee, (ie) => {
              p() && ie(ne);
            });
          }
          var J = L(ee, 2);
          {
            var Ce = (ie) => {
              var le = _e(), re = oe(le);
              je(re, b), D(ie, le);
            };
            se(J, (ie) => {
              b() && ie(Ce);
            });
          }
          D(M, K);
        },
        $$slots: { default: !0 }
      }
    ));
  }
  return ue(x);
}
ae(
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
var B2 = /* @__PURE__ */ pe("<circle></circle>");
function Gf(e, t) {
  ce(t, !0);
  let n = y(t, "radius", 7), r = y(t, "class", 7);
  var o = {
    get radius() {
      return n();
    },
    set radius(s) {
      n(s), m();
    },
    get class() {
      return r();
    },
    set class(s) {
      r(s), m();
    }
  }, i = B2();
  return Ee(() => {
    ke(i, "cx", n()), ke(i, "cy", n()), ke(i, "r", n()), Bt(i, 0, qn(["svelte-flow__background-pattern", "dots", r()]));
  }), D(e, i), ue(o);
}
ae(Gf, { radius: {}, class: {} }, [], [], !0);
var F2 = /* @__PURE__ */ pe("<path></path>");
function Uf(e, t) {
  ce(t, !0);
  let n = y(t, "lineWidth", 7), r = y(t, "dimensions", 7), o = y(t, "variant", 7), i = y(t, "class", 7);
  var s = {
    get lineWidth() {
      return n();
    },
    set lineWidth(l) {
      n(l), m();
    },
    get dimensions() {
      return r();
    },
    set dimensions(l) {
      r(l), m();
    },
    get variant() {
      return o();
    },
    set variant(l) {
      o(l), m();
    },
    get class() {
      return i();
    },
    set class(l) {
      i(l), m();
    }
  }, a = F2();
  return Ee(() => {
    ke(a, "stroke-width", n()), ke(a, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), Bt(a, 0, qn(["svelte-flow__background-pattern", o(), i()]));
  }), D(e, a), ue(s);
}
ae(Uf, { lineWidth: {}, dimensions: {}, variant: {}, class: {} }, [], [], !0);
const K2 = {
  [Ln.Dots]: 1,
  [Ln.Lines]: 1,
  [Ln.Cross]: 6
};
var W2 = /* @__PURE__ */ pe('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
function Jf(e, t) {
  ce(t, !0);
  let n = y(t, "id", 7), r = y(t, "variant", 23, () => Ln.Dots), o = y(t, "gap", 7, 20), i = y(t, "size", 7), s = y(t, "lineWidth", 7, 1), a = y(t, "bgColor", 7), l = y(t, "patternColor", 7), c = y(t, "patternClass", 7), d = y(t, "class", 7), f = /* @__PURE__ */ N(hn), h = /* @__PURE__ */ N(() => r() === Ln.Dots), g = /* @__PURE__ */ N(() => r() === Ln.Cross), v = /* @__PURE__ */ N(() => Array.isArray(o()) ? o() : [o(), o()]), p = /* @__PURE__ */ N(() => `background-pattern-${u(f).flowId}-${n() ?? ""}`), w = /* @__PURE__ */ N(() => [
    u(v)[0] * u(f).viewport.zoom || 1,
    u(v)[1] * u(f).viewport.zoom || 1
  ]), b = /* @__PURE__ */ N(() => (i() ?? K2[r()]) * u(f).viewport.zoom), k = /* @__PURE__ */ N(() => u(g) ? [u(b), u(b)] : u(w)), E = /* @__PURE__ */ N(() => u(h) ? [u(b) / 2, u(b) / 2] : [
    u(k)[0] / 2,
    u(k)[1] / 2
  ]);
  var _ = {
    get id() {
      return n();
    },
    set id(P) {
      n(P), m();
    },
    get variant() {
      return r();
    },
    set variant(P = Ln.Dots) {
      r(P), m();
    },
    get gap() {
      return o();
    },
    set gap(P = 20) {
      o(P), m();
    },
    get size() {
      return i();
    },
    set size(P) {
      i(P), m();
    },
    get lineWidth() {
      return s();
    },
    set lineWidth(P = 1) {
      s(P), m();
    },
    get bgColor() {
      return a();
    },
    set bgColor(P) {
      a(P), m();
    },
    get patternColor() {
      return l();
    },
    set patternColor(P) {
      l(P), m();
    },
    get patternClass() {
      return c();
    },
    set patternClass(P) {
      c(P), m();
    },
    get class() {
      return d();
    },
    set class(P) {
      d(P), m();
    }
  }, S = W2();
  let T;
  var V = F(S), O = F(V);
  {
    var H = (P) => {
      {
        let A = /* @__PURE__ */ N(() => u(b) / 2);
        Gf(P, {
          get radius() {
            return u(A);
          },
          get class() {
            return c();
          }
        });
      }
    }, Z = (P) => {
      Uf(P, {
        get dimensions() {
          return u(k);
        },
        get variant() {
          return r();
        },
        get lineWidth() {
          return s();
        },
        get class() {
          return c();
        }
      });
    };
    se(O, (P) => {
      u(h) ? P(H) : P(Z, !1);
    });
  }
  B(V);
  var I = L(V);
  return B(S), Ee(() => {
    Bt(S, 0, qn([
      "svelte-flow__background",
      "svelte-flow__container",
      d()
    ])), T = mt(S, "", T, {
      "--xy-background-color-props": a(),
      "--xy-background-pattern-color-props": l()
    }), ke(V, "id", u(p)), ke(V, "x", u(f).viewport.x % u(w)[0]), ke(V, "y", u(f).viewport.y % u(w)[1]), ke(V, "width", u(w)[0]), ke(V, "height", u(w)[1]), ke(V, "patternTransform", `translate(-${u(E)[0]},-${u(E)[1]})`), ke(I, "fill", `url(#${u(p)})`);
  }), D(e, S), ue(_);
}
ae(
  Jf,
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
var Z2 = /* @__PURE__ */ pe("<rect></rect>");
function Qf(e, t) {
  ce(t, !0);
  let n = y(t, "id", 7), r = y(t, "x", 7), o = y(t, "y", 7), i = y(t, "width", 7), s = y(t, "height", 7), a = y(t, "borderRadius", 7, 5), l = y(t, "color", 7), c = y(t, "shapeRendering", 7), d = y(t, "strokeColor", 7), f = y(t, "strokeWidth", 7, 2), h = y(t, "selected", 7), g = y(t, "class", 7), v = y(t, "nodeComponent", 7);
  var p = {
    get id() {
      return n();
    },
    set id(_) {
      n(_), m();
    },
    get x() {
      return r();
    },
    set x(_) {
      r(_), m();
    },
    get y() {
      return o();
    },
    set y(_) {
      o(_), m();
    },
    get width() {
      return i();
    },
    set width(_) {
      i(_), m();
    },
    get height() {
      return s();
    },
    set height(_) {
      s(_), m();
    },
    get borderRadius() {
      return a();
    },
    set borderRadius(_ = 5) {
      a(_), m();
    },
    get color() {
      return l();
    },
    set color(_) {
      l(_), m();
    },
    get shapeRendering() {
      return c();
    },
    set shapeRendering(_) {
      c(_), m();
    },
    get strokeColor() {
      return d();
    },
    set strokeColor(_) {
      d(_), m();
    },
    get strokeWidth() {
      return f();
    },
    set strokeWidth(_ = 2) {
      f(_), m();
    },
    get selected() {
      return h();
    },
    set selected(_) {
      h(_), m();
    },
    get class() {
      return g();
    },
    set class(_) {
      g(_), m();
    },
    get nodeComponent() {
      return v();
    },
    set nodeComponent(_) {
      v(_), m();
    }
  }, w = _e(), b = oe(w);
  {
    var k = (_) => {
      const S = /* @__PURE__ */ N(v);
      var T = _e(), V = oe(T);
      Uo(V, () => u(S), (O, H) => {
        H(O, {
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
            return g();
          },
          get color() {
            return l();
          },
          get shapeRendering() {
            return c();
          },
          get strokeColor() {
            return d();
          },
          get strokeWidth() {
            return f();
          },
          get selected() {
            return h();
          }
        });
      }), D(_, T);
    }, E = (_) => {
      var S = Z2();
      let T, V;
      Ee(() => {
        T = Bt(S, 0, qn(["svelte-flow__minimap-node", g()]), null, T, { selected: h() }), ke(S, "x", r()), ke(S, "y", o()), ke(S, "rx", a()), ke(S, "ry", a()), ke(S, "width", i()), ke(S, "height", s()), ke(S, "shape-rendering", c()), V = mt(S, "", V, {
          fill: l(),
          stroke: d(),
          "stroke-width": f()
        });
      }), D(_, S);
    };
    se(b, (_) => {
      v() ? _(k) : _(E, !1);
    });
  }
  return D(e, w), ue(p);
}
ae(
  Qf,
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
function Y2(e, t) {
  const n = Dy({
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
const js = (e) => e instanceof Function ? e : () => e;
var j2 = /* @__PURE__ */ pe("<title> </title>"), X2 = /* @__PURE__ */ pe('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>'), q2 = /* @__PURE__ */ te('<svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>', 1);
function eh(e, t) {
  ce(t, !0);
  let n = y(t, "position", 7, "bottom-right"), r = y(t, "ariaLabel", 7), o = y(t, "nodeStrokeColor", 7, "transparent"), i = y(t, "nodeColor", 7), s = y(t, "nodeClass", 7, ""), a = y(t, "nodeBorderRadius", 7, 5), l = y(t, "nodeStrokeWidth", 7, 2), c = y(t, "nodeComponent", 7), d = y(t, "bgColor", 7), f = y(t, "maskColor", 7), h = y(t, "maskStrokeColor", 7), g = y(t, "maskStrokeWidth", 7), v = y(t, "width", 7, 200), p = y(t, "height", 7, 150), w = y(t, "pannable", 7, !0), b = y(t, "zoomable", 7, !0), k = y(t, "inversePan", 7), E = y(t, "zoomStep", 7), _ = y(t, "class", 7), S = /* @__PURE__ */ Re(t, [
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
  ]), T = /* @__PURE__ */ N(hn), V = /* @__PURE__ */ N(() => u(T).ariaLabelConfig);
  const O = i() === void 0 ? void 0 : js(i()), H = js(o()), Z = js(s()), I = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  );
  let P = /* @__PURE__ */ N(() => `svelte-flow__minimap-desc-${u(T).flowId}`), A = /* @__PURE__ */ N(() => ({
    x: -u(T).viewport.x / u(T).viewport.zoom,
    y: -u(T).viewport.y / u(T).viewport.zoom,
    width: u(T).width / u(T).viewport.zoom,
    height: u(T).height / u(T).viewport.zoom
  })), x = /* @__PURE__ */ N(() => Yd(ti(u(T).nodeLookup, { filter: (J) => !J.hidden }), u(A))), C = /* @__PURE__ */ N(() => u(x).width / v()), M = /* @__PURE__ */ N(() => u(x).height / p()), z = /* @__PURE__ */ N(() => Math.max(u(C), u(M))), K = /* @__PURE__ */ N(() => u(z) * v()), X = /* @__PURE__ */ N(() => u(z) * p()), $ = /* @__PURE__ */ N(() => 5 * u(z)), Y = /* @__PURE__ */ N(() => u(x).x - (u(K) - u(x).width) / 2 - u($)), U = /* @__PURE__ */ N(() => u(x).y - (u(X) - u(x).height) / 2 - u($)), W = /* @__PURE__ */ N(() => u(K) + u($) * 2), G = /* @__PURE__ */ N(() => u(X) + u($) * 2);
  const R = () => u(z);
  var j = {
    get position() {
      return n();
    },
    set position(J = "bottom-right") {
      n(J), m();
    },
    get ariaLabel() {
      return r();
    },
    set ariaLabel(J) {
      r(J), m();
    },
    get nodeStrokeColor() {
      return o();
    },
    set nodeStrokeColor(J = "transparent") {
      o(J), m();
    },
    get nodeColor() {
      return i();
    },
    set nodeColor(J) {
      i(J), m();
    },
    get nodeClass() {
      return s();
    },
    set nodeClass(J = "") {
      s(J), m();
    },
    get nodeBorderRadius() {
      return a();
    },
    set nodeBorderRadius(J = 5) {
      a(J), m();
    },
    get nodeStrokeWidth() {
      return l();
    },
    set nodeStrokeWidth(J = 2) {
      l(J), m();
    },
    get nodeComponent() {
      return c();
    },
    set nodeComponent(J) {
      c(J), m();
    },
    get bgColor() {
      return d();
    },
    set bgColor(J) {
      d(J), m();
    },
    get maskColor() {
      return f();
    },
    set maskColor(J) {
      f(J), m();
    },
    get maskStrokeColor() {
      return h();
    },
    set maskStrokeColor(J) {
      h(J), m();
    },
    get maskStrokeWidth() {
      return g();
    },
    set maskStrokeWidth(J) {
      g(J), m();
    },
    get width() {
      return v();
    },
    set width(J = 200) {
      v(J), m();
    },
    get height() {
      return p();
    },
    set height(J = 150) {
      p(J), m();
    },
    get pannable() {
      return w();
    },
    set pannable(J = !0) {
      w(J), m();
    },
    get zoomable() {
      return b();
    },
    set zoomable(J = !0) {
      b(J), m();
    },
    get inversePan() {
      return k();
    },
    set inversePan(J) {
      k(J), m();
    },
    get zoomStep() {
      return E();
    },
    set zoomStep(J) {
      E(J), m();
    },
    get class() {
      return _();
    },
    set class(J) {
      _(J), m();
    }
  }, ee = q2(), ne = oe(ee);
  {
    let J = /* @__PURE__ */ N(() => ["svelte-flow__minimap", _()]);
    Kv(ne, () => ({ "--xy-minimap-background-color-props": d() })), ii(ne.lastChild, We(
      {
        get position() {
          return n();
        },
        get class() {
          return u(J);
        },
        "data-testid": "svelte-flow__minimap"
      },
      () => S,
      {
        children: (Ce, ie) => {
          var le = _e(), re = oe(le);
          {
            var he = (me) => {
              var Se = X2();
              let fe;
              var xe = F(Se);
              {
                var Ae = (Oe) => {
                  var Be = j2(), Ie = F(Be, !0);
                  B(Be), Ee(() => {
                    ke(Be, "id", u(P)), Xe(Ie, r() ?? u(V)["minimap.ariaLabel"]);
                  }), D(Oe, Be);
                };
                se(xe, (Oe) => {
                  (r() ?? u(V)["minimap.ariaLabel"]) && Oe(Ae);
                });
              }
              var q = L(xe);
              pt(q, 17, () => u(T).nodes, (Oe) => Oe.id, (Oe, Be) => {
                const Ie = /* @__PURE__ */ N(() => u(T).nodeLookup.get(u(Be).id));
                var Et = _e(), st = oe(Et);
                {
                  var Mt = (yt) => {
                    const tn = /* @__PURE__ */ N(() => pr(u(Ie)));
                    {
                      let de = /* @__PURE__ */ N(() => O?.(u(Ie))), Me = /* @__PURE__ */ N(() => H(u(Ie))), et = /* @__PURE__ */ N(() => Z(u(Ie)));
                      Qf(yt, We(
                        {
                          get id() {
                            return u(Ie).id;
                          },
                          get x() {
                            return u(Ie).internals.positionAbsolute.x;
                          },
                          get y() {
                            return u(Ie).internals.positionAbsolute.y;
                          }
                        },
                        () => u(tn),
                        {
                          get selected() {
                            return u(Ie).selected;
                          },
                          get nodeComponent() {
                            return c();
                          },
                          get color() {
                            return u(de);
                          },
                          get borderRadius() {
                            return a();
                          },
                          get strokeColor() {
                            return u(Me);
                          },
                          get strokeWidth() {
                            return l();
                          },
                          get shapeRendering() {
                            return I;
                          },
                          get class() {
                            return u(et);
                          }
                        }
                      ));
                    }
                  };
                  se(st, (yt) => {
                    u(Ie) && jd(u(Ie)) && !u(Ie).hidden && yt(Mt);
                  });
                }
                D(Oe, Et);
              });
              var lt = L(q);
              B(Se), xt(Se, (Oe, Be) => Y2?.(Oe, Be), () => ({
                store: u(T),
                panZoom: u(T).panZoom,
                getViewScale: R,
                translateExtent: u(T).translateExtent,
                width: u(T).width,
                height: u(T).height,
                inversePan: k(),
                zoomStep: E(),
                pannable: w(),
                zoomable: b()
              })), Ee(() => {
                ke(Se, "width", v()), ke(Se, "height", p()), ke(Se, "viewBox", `${u(Y) ?? ""} ${u(U) ?? ""} ${u(W) ?? ""} ${u(G) ?? ""}`), ke(Se, "aria-labelledby", u(P)), fe = mt(Se, "", fe, {
                  "--xy-minimap-mask-background-color-props": f(),
                  "--xy-minimap-mask-stroke-color-props": h(),
                  "--xy-minimap-mask-stroke-width-props": g() ? g() * u(z) : void 0
                }), ke(lt, "d", `M${u(Y) - u($)},${u(U) - u($)}h${u(W) + u($) * 2}v${u(G) + u($) * 2}h${-u(W) - u($) * 2}z
      M${u(A).x ?? ""},${u(A).y ?? ""}h${u(A).width ?? ""}v${u(A).height ?? ""}h${-u(A).width}z`);
              }), D(me, Se);
            };
            se(re, (me) => {
              u(T).panZoom && me(he);
            });
          }
          D(Ce, le);
        },
        $$slots: { default: !0 }
      }
    )), B(ne);
  }
  return D(e, ee), ue(j);
}
ae(
  eh,
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
var G2 = /* @__PURE__ */ te("<div><!></div>");
function th(e, t) {
  ce(t, !0);
  let n = y(t, "nodeId", 7), r = y(t, "position", 23, () => be.Top), o = y(t, "align", 7, "center"), i = y(t, "offset", 7, 10), s = y(t, "isVisible", 7), a = y(t, "children", 7), l = /* @__PURE__ */ Re(t, [
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
  const c = hn(), { getNodesBounds: d } = ft(), f = cn("svelteflow__node_id");
  let h = /* @__PURE__ */ N(() => (c.nodes, (Array.isArray(n()) ? n() : [n() ?? f]).reduce(
    (T, V) => {
      const O = c.nodeLookup.get(V);
      return O && T.push(O), T;
    },
    []
  ))), g = /* @__PURE__ */ N(() => {
    const S = d(u(h));
    return S ? fy(S, c.viewport, r(), i(), o()) : "";
  }), v = /* @__PURE__ */ N(() => u(h).length === 0 ? 1 : Math.max(...u(h).map((S) => (S.internals.z || 5) + 1))), p = /* @__PURE__ */ N(() => c.nodes.filter((S) => S.selected).length), w = /* @__PURE__ */ N(() => typeof s() == "boolean" ? s() : u(h).length === 1 && u(h)[0].selected && u(p) === 1);
  var b = {
    get nodeId() {
      return n();
    },
    set nodeId(S) {
      n(S), m();
    },
    get position() {
      return r();
    },
    set position(S = be.Top) {
      r(S), m();
    },
    get align() {
      return o();
    },
    set align(S = "center") {
      o(S), m();
    },
    get offset() {
      return i();
    },
    set offset(S = 10) {
      i(S), m();
    },
    get isVisible() {
      return s();
    },
    set isVisible(S) {
      s(S), m();
    },
    get children() {
      return a();
    },
    set children(S) {
      a(S), m();
    }
  }, k = _e(), E = oe(k);
  {
    var _ = (S) => {
      var T = G2();
      Ge(
        T,
        (O, H) => ({
          class: "svelte-flow__node-toolbar",
          "data-id": O,
          ...l,
          [bn]: H
        }),
        [
          () => u(h).reduce((O, H) => `${O}${H.id} `, "").trim(),
          () => ({
            display: vf().value ? "none" : void 0,
            position: "absolute",
            transform: u(g),
            "z-index": u(v)
          })
        ]
      );
      var V = F(T);
      je(V, () => a() ?? tt), B(T), xt(T, (O, H) => gf?.(O, H), () => "root"), D(S, T);
    };
    se(E, (S) => {
      c.domNode && u(w) && u(h) && S(_);
    });
  }
  return D(e, k), ue(b);
}
ae(
  th,
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
function Gn(e) {
  const t = /* @__PURE__ */ N(hn), n = /* @__PURE__ */ N(() => u(t).nodes), r = /* @__PURE__ */ N(() => u(t).nodeLookup);
  let o = [], i = !0;
  const s = /* @__PURE__ */ N(() => {
    u(n);
    const a = [], l = Array.isArray(e), c = l ? e : [e];
    for (const d of c) {
      const f = u(r).get(d)?.internals.userNode;
      f && a.push({ id: f.id, type: f.type, data: f.data });
    }
    return (!ky(a, o) || i) && (o = a, i = !1), l ? o : o[0] ?? null;
  });
  return {
    get current() {
      return u(s);
    }
  };
}
const Mc = "tinyflow-component", U2 = [
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
], J2 = [
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
], wl = [
  { label: "文字", value: "text" },
  { label: "图片", value: "image" },
  { label: "视频", value: "video" },
  { label: "音频", value: "audio" },
  { label: "文件", value: "file" },
  { label: "其他", value: "other" }
], Q2 = [
  { label: "单行输入框", value: "input" },
  { label: "多行输入框", value: "textarea" },
  { label: "下拉菜单", value: "select" },
  { label: "单选", value: "radio" },
  { label: "多选", value: "checkbox" }
], ew = [
  { label: "单选", value: "radio" },
  { label: "多选", value: "checkbox" }
];
class $3 {
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
    const t = document.createElement(Mc);
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
    const n = document.createElement(Mc);
    n.style.display = "block", n.style.width = "100%", n.style.height = "100%", n.classList.add("tf-theme-light"), n.options = this.options, n.onInit = (r) => {
      this.svelteFlowInstance = r;
    }, this.destroy(), this.rootEl.appendChild(n);
  }
  destroy() {
    for (; this.rootEl.firstChild; )
      this.rootEl.removeChild(this.rootEl.firstChild);
  }
}
const tw = () => {
  let e = /* @__PURE__ */ Pe([]), t = /* @__PURE__ */ Pe([]), n = /* @__PURE__ */ Pe({ x: 250, y: 100, zoom: 1 });
  return {
    // nodes: nodesInternal,
    // edges: edgesInternal,
    // viewport,
    init: (r, o) => {
      Q(e, r), Q(t, o);
    },
    getNodes: () => u(e),
    setNodes: (r) => {
      Q(e, r);
    },
    getEdges: () => u(t),
    setEdges: (r) => {
      Q(t, r);
    },
    getViewport: () => u(n),
    setViewport: (r) => {
      Q(n, r);
    },
    getNode: (r) => u(e).find((o) => o.id === r),
    addNode: (r) => {
      Q(e, [...u(e), r]);
    },
    removeNode: (r) => {
      Q(e, u(e).filter((o) => o.id !== r));
    },
    updateNode: (r, o) => {
      Q(e, u(e).map((i) => i.id === r ? { ...i, ...o } : i));
    },
    updateNodes: (r) => {
      Q(e, r(u(e)));
    },
    updateNodeData: (r, o) => {
      Q(e, u(e).map((i) => i.id === r ? { ...i, data: { ...i.data, ...o } } : i));
    },
    selectNodeOnly: (r) => {
      Q(e, u(e).map((o) => o.id === r ? { ...o, selected: !0 } : { ...o, selected: !1 }));
    },
    getEdge: (r) => u(t).find((o) => o.id === r),
    addEdge: (r) => {
      Q(t, [...u(t), r]);
    },
    removeEdge: (r) => {
      Q(t, u(t).filter((o) => o.id !== r));
    },
    updateEdge: (r, o) => {
      Q(t, u(t).map((i) => i.id === r ? { ...i, ...o } : i));
    },
    updateEdges: (r) => {
      Q(t, r(u(t)));
    },
    updateEdgeData: (r, o) => {
      Q(t, u(t).map((i) => i.id === r ? { ...i, data: { ...i.data, ...o } } : i));
    }
  };
}, Le = tw(), nw = (e, t) => {
  const n = new Array(e.length + t.length);
  for (let r = 0; r < e.length; r++)
    n[r] = e[r];
  for (let r = 0; r < t.length; r++)
    n[e.length + r] = t[r];
  return n;
}, rw = (e, t) => ({
  classGroupId: e,
  validator: t
}), nh = (e = /* @__PURE__ */ new Map(), t = null, n) => ({
  nextPart: e,
  validators: t,
  classGroupId: n
}), Qi = "-", Dc = [], ow = "arbitrary..", iw = (e) => {
  const t = aw(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (s) => {
      if (s.startsWith("[") && s.endsWith("]"))
        return sw(s);
      const a = s.split(Qi), l = a[0] === "" && a.length > 1 ? 1 : 0;
      return rh(a, l, t);
    },
    getConflictingClassGroupIds: (s, a) => {
      if (a) {
        const l = r[s], c = n[s];
        return l ? c ? nw(c, l) : l : c || Dc;
      }
      return n[s] || Dc;
    }
  };
}, rh = (e, t, n) => {
  if (e.length - t === 0)
    return n.classGroupId;
  const o = e[t], i = n.nextPart.get(o);
  if (i) {
    const c = rh(e, t + 1, i);
    if (c) return c;
  }
  const s = n.validators;
  if (s === null)
    return;
  const a = t === 0 ? e.join(Qi) : e.slice(t).join(Qi), l = s.length;
  for (let c = 0; c < l; c++) {
    const d = s[c];
    if (d.validator(a))
      return d.classGroupId;
  }
}, sw = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const t = e.slice(1, -1), n = t.indexOf(":"), r = t.slice(0, n);
  return r ? ow + r : void 0;
})(), aw = (e) => {
  const {
    theme: t,
    classGroups: n
  } = e;
  return lw(n, t);
}, lw = (e, t) => {
  const n = nh();
  for (const r in e) {
    const o = e[r];
    bl(o, n, r, t);
  }
  return n;
}, bl = (e, t, n, r) => {
  const o = e.length;
  for (let i = 0; i < o; i++) {
    const s = e[i];
    cw(s, t, n, r);
  }
}, cw = (e, t, n, r) => {
  if (typeof e == "string") {
    uw(e, t, n);
    return;
  }
  if (typeof e == "function") {
    dw(e, t, n, r);
    return;
  }
  fw(e, t, n, r);
}, uw = (e, t, n) => {
  const r = e === "" ? t : oh(t, e);
  r.classGroupId = n;
}, dw = (e, t, n, r) => {
  if (hw(e)) {
    bl(e(r), t, n, r);
    return;
  }
  t.validators === null && (t.validators = []), t.validators.push(rw(n, e));
}, fw = (e, t, n, r) => {
  const o = Object.entries(e), i = o.length;
  for (let s = 0; s < i; s++) {
    const [a, l] = o[s];
    bl(l, oh(t, a), n, r);
  }
}, oh = (e, t) => {
  let n = e;
  const r = t.split(Qi), o = r.length;
  for (let i = 0; i < o; i++) {
    const s = r[i];
    let a = n.nextPart.get(s);
    a || (a = nh(), n.nextPart.set(s, a)), n = a;
  }
  return n;
}, hw = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, gw = (e) => {
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
}, ba = "!", Oc = ":", vw = [], zc = (e, t, n, r, o) => ({
  modifiers: e,
  hasImportantModifier: t,
  baseClassName: n,
  maybePostfixModifierPosition: r,
  isExternal: o
}), pw = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: n
  } = e;
  let r = (o) => {
    const i = [];
    let s = 0, a = 0, l = 0, c;
    const d = o.length;
    for (let p = 0; p < d; p++) {
      const w = o[p];
      if (s === 0 && a === 0) {
        if (w === Oc) {
          i.push(o.slice(l, p)), l = p + 1;
          continue;
        }
        if (w === "/") {
          c = p;
          continue;
        }
      }
      w === "[" ? s++ : w === "]" ? s-- : w === "(" ? a++ : w === ")" && a--;
    }
    const f = i.length === 0 ? o : o.slice(l);
    let h = f, g = !1;
    f.endsWith(ba) ? (h = f.slice(0, -1), g = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      f.startsWith(ba) && (h = f.slice(1), g = !0)
    );
    const v = c && c > l ? c - l : void 0;
    return zc(i, g, h, v);
  };
  if (t) {
    const o = t + Oc, i = r;
    r = (s) => s.startsWith(o) ? i(s.slice(o.length)) : zc(vw, !1, s, void 0, !0);
  }
  if (n) {
    const o = r;
    r = (i) => n({
      className: i,
      parseClassName: o
    });
  }
  return r;
}, mw = (e) => {
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
}, yw = (e) => ({
  cache: gw(e.cacheSize),
  parseClassName: pw(e),
  sortModifiers: mw(e),
  ...iw(e)
}), ww = /\s+/, bw = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o,
    sortModifiers: i
  } = t, s = [], a = e.trim().split(ww);
  let l = "";
  for (let c = a.length - 1; c >= 0; c -= 1) {
    const d = a[c], {
      isExternal: f,
      modifiers: h,
      hasImportantModifier: g,
      baseClassName: v,
      maybePostfixModifierPosition: p
    } = n(d);
    if (f) {
      l = d + (l.length > 0 ? " " + l : l);
      continue;
    }
    let w = !!p, b = r(w ? v.substring(0, p) : v);
    if (!b) {
      if (!w) {
        l = d + (l.length > 0 ? " " + l : l);
        continue;
      }
      if (b = r(v), !b) {
        l = d + (l.length > 0 ? " " + l : l);
        continue;
      }
      w = !1;
    }
    const k = h.length === 0 ? "" : h.length === 1 ? h[0] : i(h).join(":"), E = g ? k + ba : k, _ = E + b;
    if (s.indexOf(_) > -1)
      continue;
    s.push(_);
    const S = o(b, w);
    for (let T = 0; T < S.length; ++T) {
      const V = S[T];
      s.push(E + V);
    }
    l = d + (l.length > 0 ? " " + l : l);
  }
  return l;
}, xw = (...e) => {
  let t = 0, n, r, o = "";
  for (; t < e.length; )
    (n = e[t++]) && (r = ih(n)) && (o && (o += " "), o += r);
  return o;
}, ih = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = ih(e[r])) && (n && (n += " "), n += t);
  return n;
}, xa = (e, ...t) => {
  let n, r, o, i;
  const s = (l) => {
    const c = t.reduce((d, f) => f(d), e());
    return n = yw(c), r = n.cache.get, o = n.cache.set, i = a, a(l);
  }, a = (l) => {
    const c = r(l);
    if (c)
      return c;
    const d = bw(l, n);
    return o(l, d), d;
  };
  return i = s, (...l) => i(xw(...l));
}, _w = [], at = (e) => {
  const t = (n) => n[e] || _w;
  return t.isThemeGetter = !0, t;
}, sh = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, ah = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Cw = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, kw = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Sw = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Ew = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Nw = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Pw = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Qn = (e) => Cw.test(e), $e = (e) => !!e && !Number.isNaN(Number(e)), er = (e) => !!e && Number.isInteger(Number(e)), Xs = (e) => e.endsWith("%") && $e(e.slice(0, -1)), Mn = (e) => kw.test(e), lh = () => !0, Tw = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Sw.test(e) && !Ew.test(e)
), xl = () => !1, Aw = (e) => Nw.test(e), $w = (e) => Pw.test(e), Mw = (e) => !ge(e) && !ve(e), Dw = (e) => mr(e, dh, xl), ge = (e) => sh.test(e), br = (e) => mr(e, fh, Tw), Vc = (e) => mr(e, Bw, $e), Ow = (e) => mr(e, gh, lh), zw = (e) => mr(e, hh, xl), Ic = (e) => mr(e, ch, xl), Vw = (e) => mr(e, uh, $w), wi = (e) => mr(e, vh, Aw), ve = (e) => ah.test(e), bo = (e) => Kr(e, fh), Iw = (e) => Kr(e, hh), Lc = (e) => Kr(e, ch), Lw = (e) => Kr(e, dh), Hw = (e) => Kr(e, uh), bi = (e) => Kr(e, vh, !0), Rw = (e) => Kr(e, gh, !0), mr = (e, t, n) => {
  const r = sh.exec(e);
  return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, Kr = (e, t, n = !1) => {
  const r = ah.exec(e);
  return r ? r[1] ? t(r[1]) : n : !1;
}, ch = (e) => e === "position" || e === "percentage", uh = (e) => e === "image" || e === "url", dh = (e) => e === "length" || e === "size" || e === "bg-size", fh = (e) => e === "length", Bw = (e) => e === "number", hh = (e) => e === "family-name", gh = (e) => e === "number" || e === "weight", vh = (e) => e === "shadow", _a = () => {
  const e = at("color"), t = at("font"), n = at("text"), r = at("font-weight"), o = at("tracking"), i = at("leading"), s = at("breakpoint"), a = at("container"), l = at("spacing"), c = at("radius"), d = at("shadow"), f = at("inset-shadow"), h = at("text-shadow"), g = at("drop-shadow"), v = at("blur"), p = at("perspective"), w = at("aspect"), b = at("ease"), k = at("animate"), E = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], _ = () => [
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
  ], S = () => [..._(), ve, ge], T = () => ["auto", "hidden", "clip", "visible", "scroll"], V = () => ["auto", "contain", "none"], O = () => [ve, ge, l], H = () => [Qn, "full", "auto", ...O()], Z = () => [er, "none", "subgrid", ve, ge], I = () => ["auto", {
    span: ["full", er, ve, ge]
  }, er, ve, ge], P = () => [er, "auto", ve, ge], A = () => ["auto", "min", "max", "fr", ve, ge], x = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], C = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], M = () => ["auto", ...O()], z = () => [Qn, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...O()], K = () => [Qn, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...O()], X = () => [Qn, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...O()], $ = () => [e, ve, ge], Y = () => [..._(), Lc, Ic, {
    position: [ve, ge]
  }], U = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], W = () => ["auto", "cover", "contain", Lw, Dw, {
    size: [ve, ge]
  }], G = () => [Xs, bo, br], R = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    c,
    ve,
    ge
  ], j = () => ["", $e, bo, br], ee = () => ["solid", "dashed", "dotted", "double"], ne = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], J = () => [$e, Xs, Lc, Ic], Ce = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    v,
    ve,
    ge
  ], ie = () => ["none", $e, ve, ge], le = () => ["none", $e, ve, ge], re = () => [$e, ve, ge], he = () => [Qn, "full", ...O()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Mn],
      breakpoint: [Mn],
      color: [lh],
      container: [Mn],
      "drop-shadow": [Mn],
      ease: ["in", "out", "in-out"],
      font: [Mw],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [Mn],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [Mn],
      shadow: [Mn],
      spacing: ["px", $e],
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
        aspect: ["auto", "square", Qn, ge, ve, w]
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
        columns: [$e, ge, ve, a]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": E()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": E()
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
        object: S()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: T()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": T()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": T()
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
        z: [er, "auto", ve, ge]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Qn, "full", "auto", a, ...O()]
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
        flex: [$e, Qn, "auto", "initial", "none", ge]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", $e, ve, ge]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", $e, ve, ge]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [er, "first", "last", "none", ve, ge]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": Z()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: I()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": P()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": P()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": Z()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: I()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": P()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": P()
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
        "auto-cols": A()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": A()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: O()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": O()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": O()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...x(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...C(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...C()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...x()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...C(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...C(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": x()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...C(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...C()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: O()
      }],
      /**
       * Padding Inline
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: O()
      }],
      /**
       * Padding Block
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: O()
      }],
      /**
       * Padding Inline Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: O()
      }],
      /**
       * Padding Inline End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: O()
      }],
      /**
       * Padding Block Start
       * @see https://tailwindcss.com/docs/padding
       */
      pbs: [{
        pbs: O()
      }],
      /**
       * Padding Block End
       * @see https://tailwindcss.com/docs/padding
       */
      pbe: [{
        pbe: O()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: O()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: O()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: O()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: O()
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
        "space-x": O()
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
        "space-y": O()
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
        size: z()
      }],
      /**
       * Inline Size
       * @see https://tailwindcss.com/docs/width
       */
      "inline-size": [{
        inline: ["auto", ...K()]
      }],
      /**
       * Min-Inline Size
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-inline-size": [{
        "min-inline": ["auto", ...K()]
      }],
      /**
       * Max-Inline Size
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-inline-size": [{
        "max-inline": ["none", ...K()]
      }],
      /**
       * Block Size
       * @see https://tailwindcss.com/docs/height
       */
      "block-size": [{
        block: ["auto", ...X()]
      }],
      /**
       * Min-Block Size
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-block-size": [{
        "min-block": ["auto", ...X()]
      }],
      /**
       * Max-Block Size
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-block-size": [{
        "max-block": ["none", ...X()]
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [a, "screen", ...z()]
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
          ...z()
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
          ...z()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...z()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...z()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...z()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", n, bo, br]
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
        font: [r, Rw, Ow]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Xs, ge]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Iw, zw, t]
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
        "line-clamp": [$e, "none", ve, Vc]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          i,
          ...O()
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
        placeholder: $()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: $()
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
        decoration: [...ee(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [$e, "from-font", "auto", ve, br]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: $()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [$e, "auto", ve, ge]
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
        indent: O()
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
        bg: Y()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: U()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: W()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, er, ve, ge],
          radial: ["", ve, ge],
          conic: [er, ve, ge]
        }, Hw, Vw]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: $()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: G()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: G()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: G()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: $()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: $()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: $()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: R()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": R()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": R()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": R()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": R()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": R()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": R()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": R()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": R()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": R()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": R()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": R()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": R()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": R()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": R()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: j()
      }],
      /**
       * Border Width Inline
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": j()
      }],
      /**
       * Border Width Block
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": j()
      }],
      /**
       * Border Width Inline Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": j()
      }],
      /**
       * Border Width Inline End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": j()
      }],
      /**
       * Border Width Block Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-bs": [{
        "border-bs": j()
      }],
      /**
       * Border Width Block End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-be": [{
        "border-be": j()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": j()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": j()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": j()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": j()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": j()
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
        "divide-y": j()
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
        border: [...ee(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...ee(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: $()
      }],
      /**
       * Border Color Inline
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": $()
      }],
      /**
       * Border Color Block
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": $()
      }],
      /**
       * Border Color Inline Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": $()
      }],
      /**
       * Border Color Inline End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": $()
      }],
      /**
       * Border Color Block Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-bs": [{
        "border-bs": $()
      }],
      /**
       * Border Color Block End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-be": [{
        "border-be": $()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": $()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": $()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": $()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": $()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: $()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...ee(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [$e, ve, ge]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", $e, bo, br]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: $()
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
          bi,
          wi
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: $()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", f, bi, wi]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": $()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: j()
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
        ring: $()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [$e, br]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": $()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": j()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": $()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", h, bi, wi]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": $()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [$e, ve, ge]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...ne(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": ne()
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
        "mask-linear": [$e]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": J()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": J()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": $()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": $()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": J()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": J()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": $()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": $()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": J()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": J()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": $()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": $()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": J()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": J()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": $()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": $()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": J()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": J()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": $()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": $()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": J()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": J()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": $()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": $()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": J()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": J()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": $()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": $()
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
        "mask-radial-from": $()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": $()
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
        "mask-radial-at": _()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [$e]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": J()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": J()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": $()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": $()
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
        mask: U()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: W()
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
        blur: Ce()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [$e, ve, ge]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [$e, ve, ge]
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
          g,
          bi,
          wi
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": $()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", $e, ve, ge]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [$e, ve, ge]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", $e, ve, ge]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [$e, ve, ge]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", $e, ve, ge]
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
        "backdrop-blur": Ce()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [$e, ve, ge]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [$e, ve, ge]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", $e, ve, ge]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [$e, ve, ge]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", $e, ve, ge]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [$e, ve, ge]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [$e, ve, ge]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", $e, ve, ge]
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
        "border-spacing": O()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": O()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": O()
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
        duration: [$e, "initial", ve, ge]
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
        delay: [$e, ve, ge]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", k, ve, ge]
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
        perspective: [p, ve, ge]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": S()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: ie()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": ie()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": ie()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": ie()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: le()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": le()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": le()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": le()
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
        skew: re()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": re()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": re()
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
        origin: S()
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
        translate: he()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": he()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": he()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": he()
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
        accent: $()
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
        caret: $()
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
        "scroll-m": O()
      }],
      /**
       * Scroll Margin Inline
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": O()
      }],
      /**
       * Scroll Margin Block
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": O()
      }],
      /**
       * Scroll Margin Inline Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": O()
      }],
      /**
       * Scroll Margin Inline End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": O()
      }],
      /**
       * Scroll Margin Block Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mbs": [{
        "scroll-mbs": O()
      }],
      /**
       * Scroll Margin Block End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mbe": [{
        "scroll-mbe": O()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": O()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": O()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": O()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": O()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": O()
      }],
      /**
       * Scroll Padding Inline
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": O()
      }],
      /**
       * Scroll Padding Block
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": O()
      }],
      /**
       * Scroll Padding Inline Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": O()
      }],
      /**
       * Scroll Padding Inline End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": O()
      }],
      /**
       * Scroll Padding Block Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pbs": [{
        "scroll-pbs": O()
      }],
      /**
       * Scroll Padding Block End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pbe": [{
        "scroll-pbe": O()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": O()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": O()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": O()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": O()
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
        fill: ["none", ...$()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [$e, bo, br, Vc]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...$()]
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
}, Fw = (e, {
  cacheSize: t,
  prefix: n,
  experimentalParseClassName: r,
  extend: o = {},
  override: i = {}
}) => (Eo(e, "cacheSize", t), Eo(e, "prefix", n), Eo(e, "experimentalParseClassName", r), xi(e.theme, i.theme), xi(e.classGroups, i.classGroups), xi(e.conflictingClassGroups, i.conflictingClassGroups), xi(e.conflictingClassGroupModifiers, i.conflictingClassGroupModifiers), Eo(e, "orderSensitiveModifiers", i.orderSensitiveModifiers), _i(e.theme, o.theme), _i(e.classGroups, o.classGroups), _i(e.conflictingClassGroups, o.conflictingClassGroups), _i(e.conflictingClassGroupModifiers, o.conflictingClassGroupModifiers), ph(e, o, "orderSensitiveModifiers"), e), Eo = (e, t, n) => {
  n !== void 0 && (e[t] = n);
}, xi = (e, t) => {
  if (t)
    for (const n in t)
      Eo(e, n, t[n]);
}, _i = (e, t) => {
  if (t)
    for (const n in t)
      ph(e, t, n);
}, ph = (e, t, n) => {
  const r = t[n];
  r !== void 0 && (e[n] = e[n] ? e[n].concat(r) : r);
}, Kw = (e, ...t) => typeof e == "function" ? xa(_a, e, ...t) : xa(() => Fw(_a(), e), ...t), mh = /* @__PURE__ */ xa(_a);
function lo(...e) {
  return mh(To(e));
}
var Ww = /\s+/g, Zw = (e) => typeof e != "string" || !e ? e : e.replace(Ww, " ").trim(), es = (...e) => {
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
  return t.length > 0 ? Zw(t.join(" ")) : void 0;
}, Hc = (e) => e === !1 ? "false" : e === !0 ? "true" : e === 0 ? "0" : e, Ot = (e) => {
  if (!e || typeof e != "object") return !0;
  for (const t in e) return !1;
  return !0;
}, Yw = (e, t) => {
  if (e === t) return !0;
  if (!e || !t) return !1;
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (let o = 0; o < n.length; o++) {
    const i = n[o];
    if (!r.includes(i) || e[i] !== t[i]) return !1;
  }
  return !0;
}, jw = (e, t) => {
  for (const n in t)
    if (Object.prototype.hasOwnProperty.call(t, n)) {
      const r = t[n];
      n in e ? e[n] = es(e[n], r) : e[n] = r;
    }
  return e;
}, yh = (e, t) => {
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    Array.isArray(r) ? yh(r, t) : r && t.push(r);
  }
}, wh = (...e) => {
  const t = [];
  yh(e, t);
  const n = [];
  for (let r = 0; r < t.length; r++)
    t[r] && n.push(t[r]);
  return n;
}, Ca = (e, t) => {
  const n = {};
  for (const r in e) {
    const o = e[r];
    if (r in t) {
      const i = t[r];
      Array.isArray(o) || Array.isArray(i) ? n[r] = wh(i, o) : typeof o == "object" && typeof i == "object" && o && i ? n[r] = Ca(o, i) : n[r] = i + " " + o;
    } else
      n[r] = o;
  }
  for (const r in t)
    r in e || (n[r] = t[r]);
  return n;
}, Xw = {
  twMerge: !0,
  twMergeConfig: {}
};
function qw() {
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
var On = qw(), Gw = (e) => {
  const t = (r, o) => {
    const {
      extend: i = null,
      slots: s = {},
      variants: a = {},
      compoundVariants: l = [],
      compoundSlots: c = [],
      defaultVariants: d = {}
    } = r, f = { ...Xw, ...o }, h = i?.base ? es(i.base, r?.base) : r?.base, g = i?.variants && !Ot(i.variants) ? Ca(a, i.variants) : a, v = i?.defaultVariants && !Ot(i.defaultVariants) ? { ...i.defaultVariants, ...d } : d;
    !Ot(f.twMergeConfig) && !Yw(f.twMergeConfig, On.cachedTwMergeConfig) && (On.didTwMergeConfigChange = !0, On.cachedTwMergeConfig = f.twMergeConfig);
    const p = Ot(i?.slots), w = Ot(s) ? {} : {
      // add "base" to the slots object
      base: es(r?.base, p && i?.base),
      ...s
    }, b = p ? w : jw(
      { ...i?.slots },
      Ot(w) ? { base: r?.base } : w
    ), k = Ot(i?.compoundVariants) ? l : wh(i?.compoundVariants, l), E = (S) => {
      if (Ot(g) && Ot(s) && p)
        return e(h, S?.class, S?.className)(f);
      if (k && !Array.isArray(k))
        throw new TypeError(
          `The "compoundVariants" prop must be an array. Received: ${typeof k}`
        );
      if (c && !Array.isArray(c))
        throw new TypeError(
          `The "compoundSlots" prop must be an array. Received: ${typeof c}`
        );
      const T = (x, C = g, M = null, z = null) => {
        const K = C[x];
        if (!K || Ot(K))
          return null;
        const X = z?.[x] ?? S?.[x];
        if (X === null) return null;
        const $ = Hc(X);
        if (typeof $ == "object")
          return null;
        const Y = v?.[x], U = $ ?? Hc(Y);
        return K[U || "false"];
      }, V = () => {
        if (!g) return null;
        const x = Object.keys(g), C = [];
        for (let M = 0; M < x.length; M++) {
          const z = T(x[M], g);
          z && C.push(z);
        }
        return C;
      }, O = (x, C) => {
        if (!g || typeof g != "object") return null;
        const M = [];
        for (const z in g) {
          const K = T(z, g, x, C), X = x === "base" && typeof K == "string" ? K : K && K[x];
          X && M.push(X);
        }
        return M;
      }, H = {};
      for (const x in S) {
        const C = S[x];
        C !== void 0 && (H[x] = C);
      }
      const Z = (x, C) => {
        const M = typeof S?.[x] == "object" ? {
          [x]: S[x]?.initial
        } : {};
        return {
          ...v,
          ...H,
          ...M,
          ...C
        };
      }, I = (x = [], C) => {
        const M = [], z = x.length;
        for (let K = 0; K < z; K++) {
          const { class: X, className: $, ...Y } = x[K];
          let U = !0;
          const W = Z(null, C);
          for (const G in Y) {
            const R = Y[G], j = W[G];
            if (Array.isArray(R)) {
              if (!R.includes(j)) {
                U = !1;
                break;
              }
            } else {
              if ((R == null || R === !1) && (j == null || j === !1))
                continue;
              if (j !== R) {
                U = !1;
                break;
              }
            }
          }
          U && (X && M.push(X), $ && M.push($));
        }
        return M;
      }, P = (x) => {
        const C = I(k, x);
        if (!Array.isArray(C)) return C;
        const M = {}, z = e;
        for (let K = 0; K < C.length; K++) {
          const X = C[K];
          if (typeof X == "string")
            M.base = z(M.base, X)(f);
          else if (typeof X == "object")
            for (const $ in X)
              M[$] = z(M[$], X[$])(f);
        }
        return M;
      }, A = (x) => {
        if (c.length < 1) return null;
        const C = {}, M = Z(null, x);
        for (let z = 0; z < c.length; z++) {
          const {
            slots: K = [],
            class: X,
            className: $,
            ...Y
          } = c[z];
          if (!Ot(Y)) {
            let U = !0;
            for (const W in Y) {
              const G = M[W], R = Y[W];
              if (G === void 0 || (Array.isArray(R) ? !R.includes(G) : R !== G)) {
                U = !1;
                break;
              }
            }
            if (!U) continue;
          }
          for (let U = 0; U < K.length; U++) {
            const W = K[U];
            C[W] || (C[W] = []), C[W].push([X, $]);
          }
        }
        return C;
      };
      if (!Ot(s) || !p) {
        const x = {};
        if (typeof b == "object" && !Ot(b)) {
          const C = e;
          for (const M in b)
            x[M] = (z) => {
              const K = P(z), X = A(z);
              return C(
                b[M],
                O(M, z),
                K ? K[M] : void 0,
                X ? X[M] : void 0,
                z?.class,
                z?.className
              )(f);
            };
        }
        return x;
      }
      return e(
        h,
        V(),
        I(k),
        S?.class,
        S?.className
      )(f);
    }, _ = () => {
      if (!(!g || typeof g != "object"))
        return Object.keys(g);
    };
    return E.variantKeys = _(), E.extend = i, E.base = h, E.slots = b, E.variants = g, E.defaultVariants = v, E.compoundSlots = c, E.compoundVariants = k, E;
  };
  return {
    tv: t,
    createTV: (r) => (o, i) => t(o, i ? Ca(r, i) : r)
  };
}, Uw = (e) => Ot(e) ? mh : Kw({
  ...e,
  extend: {
    theme: e.theme,
    classGroups: e.classGroups,
    conflictingClassGroupModifiers: e.conflictingClassGroupModifiers,
    conflictingClassGroups: e.conflictingClassGroups,
    ...e.extend
  }
}), Jw = (e, t) => {
  const n = es(e);
  return !n || !(t?.twMerge ?? !0) ? n : ((!On.cachedTwMerge || On.didTwMergeConfigChange) && (On.didTwMergeConfigChange = !1, On.cachedTwMerge = Uw(On.cachedTwMergeConfig)), On.cachedTwMerge(n) || void 0);
}, Qw = (...e) => (t) => Jw(e, t), { tv: eb } = Gw(Qw);
const Rc = eb({
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
var tb = /* @__PURE__ */ te("<a><!></a>"), nb = /* @__PURE__ */ te("<button><!></button>");
function ze(e, t) {
  ce(t, !0);
  let n = y(t, "class", 7), r = y(t, "variant", 7, "outline"), o = y(t, "size", 7, "default"), i = y(t, "ref", 15, null), s = y(t, "href", 23, () => {
  }), a = y(t, "type", 7, "button"), l = y(t, "disabled", 7), c = y(t, "children", 7), d = y(t, "primary", 7), f = /* @__PURE__ */ Re(t, [
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
  var h = {
    get class() {
      return n();
    },
    set class(b) {
      n(b), m();
    },
    get variant() {
      return r();
    },
    set variant(b = "outline") {
      r(b), m();
    },
    get size() {
      return o();
    },
    set size(b = "default") {
      o(b), m();
    },
    get ref() {
      return i();
    },
    set ref(b = null) {
      i(b), m();
    },
    get href() {
      return s();
    },
    set href(b = void 0) {
      s(b), m();
    },
    get type() {
      return a();
    },
    set type(b = "button") {
      a(b), m();
    },
    get disabled() {
      return l();
    },
    set disabled(b) {
      l(b), m();
    },
    get children() {
      return c();
    },
    set children(b) {
      c(b), m();
    },
    get primary() {
      return d();
    },
    set primary(b) {
      d(b), m();
    }
  }, g = _e(), v = oe(g);
  {
    var p = (b) => {
      var k = tb();
      Ge(
        k,
        (_) => ({
          "data-slot": "button",
          class: _,
          href: l() ? void 0 : s(),
          "aria-disabled": l(),
          role: l() ? "link" : void 0,
          tabindex: l() ? -1 : void 0,
          ...f
        }),
        [
          () => lo(Rc({ variant: r(), size: o() }), n())
        ]
      );
      var E = F(k);
      je(E, () => c() ?? tt), B(k), dt(k, (_) => i(_), () => i()), D(b, k);
    }, w = (b) => {
      var k = nb();
      Ge(
        k,
        (_) => ({
          "data-slot": "button",
          class: _,
          type: a(),
          disabled: l(),
          ...f
        }),
        [
          () => lo(Rc({ variant: r(), size: o() }), n())
        ]
      );
      var E = F(k);
      je(E, () => c() ?? tt), B(k), dt(k, (_) => i(_), () => i()), D(b, k);
    };
    se(v, (b) => {
      s() ? b(p) : b(w, !1);
    });
  }
  return D(e, g), ue(h);
}
ae(
  ze,
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
function rb(e) {
  return e !== null && typeof e == "object";
}
const ob = ["string", "number", "bigint", "boolean"];
function ka(e) {
  return e == null || ob.includes(typeof e) ? !0 : Array.isArray(e) ? e.every((t) => ka(t)) : typeof e == "object" ? Object.getPrototypeOf(e) === Object.prototype : !1;
}
const Sa = Symbol("box"), ib = Symbol("is-writable");
function yn(e, t) {
  const n = /* @__PURE__ */ N(e);
  return t ? {
    [Sa]: !0,
    [ib]: !0,
    get current() {
      return u(n);
    },
    set current(r) {
      t(r);
    }
  } : {
    [Sa]: !0,
    get current() {
      return e();
    }
  };
}
function sb(e) {
  return rb(e) && Sa in e;
}
function ab(...e) {
  return function(t) {
    for (const n of e)
      if (n) {
        if (t.defaultPrevented)
          return;
        typeof n == "function" ? n.call(this, t) : n.current?.call(this, t);
      }
  };
}
var Bc = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, lb = /\n/g, cb = /^\s*/, ub = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, db = /^:\s*/, fb = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, hb = /^[;\s]*/, gb = /^\s+|\s+$/g, vb = `
`, Fc = "/", Kc = "*", xr = "", pb = "comment", mb = "declaration";
function yb(e, t) {
  if (typeof e != "string")
    throw new TypeError("First argument must be a string");
  if (!e) return [];
  t = t || {};
  var n = 1, r = 1;
  function o(v) {
    var p = v.match(lb);
    p && (n += p.length);
    var w = v.lastIndexOf(vb);
    r = ~w ? v.length - w : r + v.length;
  }
  function i() {
    var v = { line: n, column: r };
    return function(p) {
      return p.position = new s(v), c(), p;
    };
  }
  function s(v) {
    this.start = v, this.end = { line: n, column: r }, this.source = t.source;
  }
  s.prototype.content = e;
  function a(v) {
    var p = new Error(
      t.source + ":" + n + ":" + r + ": " + v
    );
    if (p.reason = v, p.filename = t.source, p.line = n, p.column = r, p.source = e, !t.silent) throw p;
  }
  function l(v) {
    var p = v.exec(e);
    if (p) {
      var w = p[0];
      return o(w), e = e.slice(w.length), p;
    }
  }
  function c() {
    l(cb);
  }
  function d(v) {
    var p;
    for (v = v || []; p = f(); )
      p !== !1 && v.push(p);
    return v;
  }
  function f() {
    var v = i();
    if (!(Fc != e.charAt(0) || Kc != e.charAt(1))) {
      for (var p = 2; xr != e.charAt(p) && (Kc != e.charAt(p) || Fc != e.charAt(p + 1)); )
        ++p;
      if (p += 2, xr === e.charAt(p - 1))
        return a("End of comment missing");
      var w = e.slice(2, p - 2);
      return r += 2, o(w), e = e.slice(p), r += 2, v({
        type: pb,
        comment: w
      });
    }
  }
  function h() {
    var v = i(), p = l(ub);
    if (p) {
      if (f(), !l(db)) return a("property missing ':'");
      var w = l(fb), b = v({
        type: mb,
        property: Wc(p[0].replace(Bc, xr)),
        value: w ? Wc(w[0].replace(Bc, xr)) : xr
      });
      return l(hb), b;
    }
  }
  function g() {
    var v = [];
    d(v);
    for (var p; p = h(); )
      p !== !1 && (v.push(p), d(v));
    return v;
  }
  return c(), g();
}
function Wc(e) {
  return e ? e.replace(gb, xr) : xr;
}
function wb(e, t) {
  let n = null;
  if (!e || typeof e != "string")
    return n;
  const r = yb(e), o = typeof t == "function";
  return r.forEach((i) => {
    if (i.type !== "declaration")
      return;
    const { property: s, value: a } = i;
    o ? t(s, a, i) : a && (n = n || {}, n[s] = a);
  }), n;
}
const bb = /\d/, xb = ["-", "_", "/", "."];
function _b(e = "") {
  if (!bb.test(e))
    return e !== e.toLowerCase();
}
function Cb(e) {
  const t = [];
  let n = "", r, o;
  for (const i of e) {
    const s = xb.includes(i);
    if (s === !0) {
      t.push(n), n = "", r = void 0;
      continue;
    }
    const a = _b(i);
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
function bh(e) {
  return e ? Cb(e).map((t) => Sb(t)).join("") : "";
}
function kb(e) {
  return Eb(bh(e || ""));
}
function Sb(e) {
  return e ? e[0].toUpperCase() + e.slice(1) : "";
}
function Eb(e) {
  return e ? e[0].toLowerCase() + e.slice(1) : "";
}
function Ci(e) {
  if (!e)
    return {};
  const t = {};
  function n(r, o) {
    if (r.startsWith("-moz-") || r.startsWith("-webkit-") || r.startsWith("-ms-") || r.startsWith("-o-")) {
      t[bh(r)] = o;
      return;
    }
    if (r.startsWith("--")) {
      t[r] = o;
      return;
    }
    t[kb(r)] = o;
  }
  return wb(e, n), t;
}
function Nb(...e) {
  return (...t) => {
    for (const n of e)
      typeof n == "function" && n(...t);
  };
}
function Pb(e, t) {
  const n = RegExp(e, "g");
  return (r) => {
    if (typeof r != "string")
      throw new TypeError(`expected an argument of type string, but got ${typeof r}`);
    return r.match(n) ? r.replace(n, t) : r;
  };
}
const Tb = Pb(/[A-Z]/, (e) => `-${e.toLowerCase()}`);
function Ab(e) {
  if (!e || typeof e != "object" || Array.isArray(e))
    throw new TypeError(`expected an argument of type object, but got ${typeof e}`);
  return Object.keys(e).map((t) => `${Tb(t)}: ${e[t]};`).join(`
`);
}
function xh(e = {}) {
  return Ab(e).replace(`
`, " ");
}
const $b = [
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
], Mb = new Set($b);
function Db(e) {
  return Mb.has(e);
}
function _h(...e) {
  const t = { ...e[0] };
  for (let n = 1; n < e.length; n++) {
    const r = e[n];
    if (r) {
      for (const o of Object.keys(r)) {
        const i = t[o], s = r[o], a = typeof i == "function", l = typeof s == "function";
        if (a && Db(o)) {
          const c = i, d = s;
          t[o] = ab(c, d);
        } else if (a && l)
          t[o] = Nb(i, s);
        else if (o === "class") {
          const c = ka(i), d = ka(s);
          c && d ? t[o] = To(i, s) : c ? t[o] = To(i) : d && (t[o] = To(s));
        } else if (o === "style") {
          const c = typeof i == "object", d = typeof s == "object", f = typeof i == "string", h = typeof s == "string";
          if (c && d)
            t[o] = { ...i, ...s };
          else if (c && h) {
            const g = Ci(s);
            t[o] = { ...i, ...g };
          } else if (f && d) {
            const g = Ci(i);
            t[o] = { ...g, ...s };
          } else if (f && h) {
            const g = Ci(i), v = Ci(s);
            t[o] = { ...g, ...v };
          } else c ? t[o] = i : d ? t[o] = s : f ? t[o] = i : h && (t[o] = s);
        } else
          t[o] = s !== void 0 ? s : i;
      }
      for (const o of Object.getOwnPropertySymbols(r)) {
        const i = t[o], s = r[o];
        t[o] = s !== void 0 ? s : i;
      }
    }
  }
  return typeof t.style == "object" && (t.style = xh(t.style).replaceAll(`
`, " ")), t.hidden === !1 && (t.hidden = void 0, delete t.hidden), t.disabled === !1 && (t.disabled = void 0, delete t.disabled), t;
}
const Ob = {
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
}, zb = xh(Ob), Vb = typeof window < "u" ? window : void 0;
function Ib(e) {
  let t = e.activeElement;
  for (; t?.shadowRoot; ) {
    const n = t.shadowRoot.activeElement;
    if (n === t)
      break;
    t = n;
  }
  return t;
}
let Lb = class {
  #t;
  #e;
  constructor(t = {}) {
    const { window: n = Vb, document: r = n?.document } = t;
    n !== void 0 && (this.#t = r, this.#e = ho((o) => {
      const i = En(n, "focusin", o), s = En(n, "focusout", o);
      return () => {
        i(), s();
      };
    }));
  }
  get current() {
    return this.#e?.(), this.#t ? Ib(this.#t) : null;
  }
};
new Lb();
class Ch {
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
    return nv(this.#e);
  }
  /**
   * Retrieves the context that belongs to the closest parent component.
   *
   * Must be called during component initialisation.
   *
   * @throws An error if the context does not exist.
   */
  get() {
    const t = cn(this.#e);
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
    const n = cn(this.#e);
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
function Hb(e, t) {
  switch (e) {
    case "post":
      Ue(t);
      break;
    case "pre":
      Kt(t);
      break;
  }
}
function kh(e, t, n, r = {}) {
  const { lazy: o = !1 } = r;
  let i = !o, s = Array.isArray(e) ? [] : void 0;
  Hb(t, () => {
    const a = Array.isArray(e) ? e.map((c) => c()) : e();
    if (!i) {
      i = !0, s = a;
      return;
    }
    const l = Je(() => n(a, s));
    return s = a, l;
  });
}
function ts(e, t, n) {
  kh(e, "post", t, n);
}
function Rb(e, t, n) {
  kh(e, "pre", t, n);
}
ts.pre = Rb;
function Bb(e, t) {
  return {
    [Fv()]: (n) => sb(e) ? (e.current = n, Je(() => t?.(n)), () => {
      "isConnected" in n && n.isConnected || (e.current = null);
    }) : (e(n), Je(() => t?.(n)), () => {
      "isConnected" in n && n.isConnected || e(null);
    })
  };
}
function Zc(e) {
  return e ? "true" : "false";
}
function Yc(e) {
  return e ? "" : void 0;
}
function Fb(e, t) {
  return t ? "mixed" : e ? "true" : "false";
}
class Kb {
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
function Wb(e) {
  const t = new Kb(e);
  return {
    ...t.attrs,
    selector: t.selector,
    getAttr: t.getAttr
  };
}
const Zb = "Enter", Yb = " ";
function jb(e) {
  return e instanceof HTMLElement;
}
function jc(e, t) {
  return `bits-${e}`;
}
const Xb = Wb({
  component: "checkbox",
  parts: ["root", "group", "group-label", "input"]
}), qb = new Ch("Checkbox.Group"), Sh = new Ch("Checkbox.Root");
class _l {
  static create(t, n = null) {
    return Sh.set(new _l(t, n));
  }
  opts;
  group;
  #t = /* @__PURE__ */ N(() => this.group && this.group.opts.name.current ? this.group.opts.name.current : this.opts.name.current);
  get trueName() {
    return u(this.#t);
  }
  set trueName(t) {
    Q(this.#t, t);
  }
  #e = /* @__PURE__ */ N(() => this.group && this.group.opts.required.current ? !0 : this.opts.required.current);
  get trueRequired() {
    return u(this.#e);
  }
  set trueRequired(t) {
    Q(this.#e, t);
  }
  #n = /* @__PURE__ */ N(() => this.group && this.group.opts.disabled.current ? !0 : this.opts.disabled.current);
  get trueDisabled() {
    return u(this.#n);
  }
  set trueDisabled(t) {
    Q(this.#n, t);
  }
  #r = /* @__PURE__ */ N(() => this.group && this.group.opts.readonly.current ? !0 : this.opts.readonly.current);
  get trueReadonly() {
    return u(this.#r);
  }
  set trueReadonly(t) {
    Q(this.#r, t);
  }
  attachment;
  constructor(t, n) {
    this.opts = t, this.group = n, this.attachment = Bb(this.opts.ref), this.onkeydown = this.onkeydown.bind(this), this.onclick = this.onclick.bind(this), ts.pre(
      [
        () => Wa(this.group?.opts.value.current),
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
      if (t.key === Zb) {
        t.preventDefault(), this.opts.type.current === "submit" && t.currentTarget.closest("form")?.requestSubmit();
        return;
      }
      t.key === Yb && (t.preventDefault(), this.#i());
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
    return u(this.#o);
  }
  set snippetProps(t) {
    Q(this.#o, t);
  }
  #s = /* @__PURE__ */ N(() => ({
    id: this.opts.id.current,
    role: "checkbox",
    type: this.opts.type.current,
    disabled: this.trueDisabled,
    "aria-checked": Fb(this.opts.checked.current, this.opts.indeterminate.current),
    "aria-required": Zc(this.trueRequired),
    "aria-readonly": Zc(this.trueReadonly),
    "data-disabled": Yc(this.trueDisabled),
    "data-readonly": Yc(this.trueReadonly),
    "data-state": Gb(this.opts.checked.current, this.opts.indeterminate.current),
    [Xb.root]: "",
    onclick: this.onclick,
    onkeydown: this.onkeydown,
    ...this.attachment
  }));
  get props() {
    return u(this.#s);
  }
  set props(t) {
    Q(this.#s, t);
  }
}
class Cl {
  static create() {
    return new Cl(Sh.get());
  }
  root;
  #t = /* @__PURE__ */ N(() => this.root.group ? !!(this.root.opts.value.current !== void 0 && this.root.group.opts.value.current.includes(this.root.opts.value.current)) : this.root.opts.checked.current);
  get trueChecked() {
    return u(this.#t);
  }
  set trueChecked(t) {
    Q(this.#t, t);
  }
  #e = /* @__PURE__ */ N(() => !!this.root.trueName);
  get shouldRender() {
    return u(this.#e);
  }
  set shouldRender(t) {
    Q(this.#e, t);
  }
  constructor(t) {
    this.root = t, this.onfocus = this.onfocus.bind(this);
  }
  onfocus(t) {
    jb(this.root.opts.ref.current) && this.root.opts.ref.current.focus();
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
    return u(this.#n);
  }
  set props(t) {
    Q(this.#n, t);
  }
}
function Gb(e, t) {
  return t ? "indeterminate" : e ? "checked" : "unchecked";
}
var Ub = /* @__PURE__ */ te("<input/>"), Jb = /* @__PURE__ */ te("<input/>");
function Eh(e, t) {
  ce(t, !0);
  let n = y(t, "value", 15), r = /* @__PURE__ */ Re(t, ["$$slots", "$$events", "$$legacy", "$$host", "value"]);
  const o = /* @__PURE__ */ N(() => _h(r, {
    "aria-hidden": "true",
    tabindex: -1,
    style: zb
  }));
  var i = {
    get value() {
      return n();
    },
    set value(d) {
      n(d), m();
    }
  }, s = _e(), a = oe(s);
  {
    var l = (d) => {
      var f = Ub();
      Ge(f, () => ({ ...u(o), value: n() }), void 0, void 0, void 0, void 0, !0), D(d, f);
    }, c = (d) => {
      var f = Jb();
      Ge(f, () => ({ ...u(o) }), void 0, void 0, void 0, void 0, !0), aa(f, n), D(d, f);
    };
    se(a, (d) => {
      u(o).type === "checkbox" ? d(l) : d(c, !1);
    });
  }
  return D(e, s), ue(i);
}
ae(Eh, { value: {} }, [], [], !0);
function Nh(e, t) {
  ce(t, !1);
  const n = Cl.create();
  tl();
  var r = _e(), o = oe(r);
  {
    var i = (s) => {
      Eh(s, We(() => n.props));
    };
    se(o, (s) => {
      n.shouldRender && s(i);
    });
  }
  D(e, r), ue();
}
ae(Nh, {}, [], [], !0);
var Qb = /* @__PURE__ */ te("<button><!></button>"), ex = /* @__PURE__ */ te("<!> <!>", 1);
function Ph(e, t) {
  const n = Tv();
  ce(t, !0);
  let r = y(t, "checked", 15, !1), o = y(t, "ref", 15, null), i = y(t, "onCheckedChange", 7), s = y(t, "children", 7), a = y(t, "disabled", 7, !1), l = y(t, "required", 7, !1), c = y(t, "name", 23, () => {
  }), d = y(t, "value", 7, "on"), f = y(t, "id", 23, () => jc(n)), h = y(t, "indeterminate", 15, !1), g = y(t, "onIndeterminateChange", 7), v = y(t, "child", 7), p = y(t, "type", 7, "button"), w = y(t, "readonly", 7), b = /* @__PURE__ */ Re(t, [
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
  const k = qb.getOr(null);
  k && d() && (k.opts.value.current.includes(d()) ? r(!0) : r(!1)), ts.pre(() => d(), () => {
    k && d() && (k.opts.value.current.includes(d()) ? r(!0) : r(!1));
  });
  const E = _l.create(
    {
      checked: yn(() => r(), (I) => {
        r(I), i()?.(I);
      }),
      disabled: yn(() => a() ?? !1),
      required: yn(() => l()),
      name: yn(() => c()),
      value: yn(() => d()),
      id: yn(() => f()),
      ref: yn(() => o(), (I) => o(I)),
      indeterminate: yn(() => h(), (I) => {
        h(I), g()?.(I);
      }),
      type: yn(() => p()),
      readonly: yn(() => !!w())
    },
    k
  ), _ = /* @__PURE__ */ N(() => _h({ ...b }, E.props));
  var S = {
    get checked() {
      return r();
    },
    set checked(I = !1) {
      r(I), m();
    },
    get ref() {
      return o();
    },
    set ref(I = null) {
      o(I), m();
    },
    get onCheckedChange() {
      return i();
    },
    set onCheckedChange(I) {
      i(I), m();
    },
    get children() {
      return s();
    },
    set children(I) {
      s(I), m();
    },
    get disabled() {
      return a();
    },
    set disabled(I = !1) {
      a(I), m();
    },
    get required() {
      return l();
    },
    set required(I = !1) {
      l(I), m();
    },
    get name() {
      return c();
    },
    set name(I = void 0) {
      c(I), m();
    },
    get value() {
      return d();
    },
    set value(I = "on") {
      d(I), m();
    },
    get id() {
      return f();
    },
    set id(I = jc(n)) {
      f(I), m();
    },
    get indeterminate() {
      return h();
    },
    set indeterminate(I = !1) {
      h(I), m();
    },
    get onIndeterminateChange() {
      return g();
    },
    set onIndeterminateChange(I) {
      g(I), m();
    },
    get child() {
      return v();
    },
    set child(I) {
      v(I), m();
    },
    get type() {
      return p();
    },
    set type(I = "button") {
      p(I), m();
    },
    get readonly() {
      return w();
    },
    set readonly(I) {
      w(I), m();
    }
  }, T = ex(), V = oe(T);
  {
    var O = (I) => {
      var P = _e(), A = oe(P);
      {
        let x = /* @__PURE__ */ N(() => ({ props: u(_), ...E.snippetProps }));
        je(A, v, () => u(x));
      }
      D(I, P);
    }, H = (I) => {
      var P = Qb();
      Ge(P, () => ({ ...u(_) }));
      var A = F(P);
      je(A, () => s() ?? tt, () => E.snippetProps), B(P), D(I, P);
    };
    se(V, (I) => {
      v() ? I(O) : I(H, !1);
    });
  }
  var Z = L(V, 2);
  return Nh(Z, {}), D(e, T), ue(S);
}
ae(
  Ph,
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
const Fo = Math.min, Ur = Math.max, ns = Math.round, kn = (e) => ({
  x: e,
  y: e
}), tx = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, nx = {
  start: "end",
  end: "start"
};
function Ea(e, t, n) {
  return Ur(e, Fo(t, n));
}
function si(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Lr(e) {
  return e.split("-")[0];
}
function ai(e) {
  return e.split("-")[1];
}
function Th(e) {
  return e === "x" ? "y" : "x";
}
function kl(e) {
  return e === "y" ? "height" : "width";
}
const rx = /* @__PURE__ */ new Set(["top", "bottom"]);
function nr(e) {
  return rx.has(Lr(e)) ? "y" : "x";
}
function Sl(e) {
  return Th(nr(e));
}
function ox(e, t, n) {
  n === void 0 && (n = !1);
  const r = ai(e), o = Sl(e), i = kl(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = rs(s)), [s, rs(s)];
}
function ix(e) {
  const t = rs(e);
  return [Na(e), t, Na(t)];
}
function Na(e) {
  return e.replace(/start|end/g, (t) => nx[t]);
}
const Xc = ["left", "right"], qc = ["right", "left"], sx = ["top", "bottom"], ax = ["bottom", "top"];
function lx(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? qc : Xc : t ? Xc : qc;
    case "left":
    case "right":
      return t ? sx : ax;
    default:
      return [];
  }
}
function cx(e, t, n, r) {
  const o = ai(e);
  let i = lx(Lr(e), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map(Na)))), i;
}
function rs(e) {
  return e.replace(/left|right|bottom|top/g, (t) => tx[t]);
}
function ux(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Ah(e) {
  return typeof e != "number" ? ux(e) : {
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
function Gc(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = nr(t), s = Sl(t), a = kl(s), l = Lr(t), c = i === "y", d = r.x + r.width / 2 - o.width / 2, f = r.y + r.height / 2 - o.height / 2, h = r[a] / 2 - o[a] / 2;
  let g;
  switch (l) {
    case "top":
      g = {
        x: d,
        y: r.y - o.height
      };
      break;
    case "bottom":
      g = {
        x: d,
        y: r.y + r.height
      };
      break;
    case "right":
      g = {
        x: r.x + r.width,
        y: f
      };
      break;
    case "left":
      g = {
        x: r.x - o.width,
        y: f
      };
      break;
    default:
      g = {
        x: r.x,
        y: r.y
      };
  }
  switch (ai(t)) {
    case "start":
      g[s] -= h * (n && c ? -1 : 1);
      break;
    case "end":
      g[s] += h * (n && c ? -1 : 1);
      break;
  }
  return g;
}
const dx = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: i = [],
    platform: s
  } = n, a = i.filter(Boolean), l = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let c = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: d,
    y: f
  } = Gc(c, r, l), h = r, g = {}, v = 0;
  for (let p = 0; p < a.length; p++) {
    const {
      name: w,
      fn: b
    } = a[p], {
      x: k,
      y: E,
      data: _,
      reset: S
    } = await b({
      x: d,
      y: f,
      initialPlacement: r,
      placement: h,
      strategy: o,
      middlewareData: g,
      rects: c,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    d = k ?? d, f = E ?? f, g = {
      ...g,
      [w]: {
        ...g[w],
        ..._
      }
    }, S && v <= 50 && (v++, typeof S == "object" && (S.placement && (h = S.placement), S.rects && (c = S.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : S.rects), {
      x: d,
      y: f
    } = Gc(c, h, l)), p = -1);
  }
  return {
    x: d,
    y: f,
    placement: h,
    strategy: o,
    middlewareData: g
  };
};
async function $h(e, t) {
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
    boundary: c = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: f = "floating",
    altBoundary: h = !1,
    padding: g = 0
  } = si(t, e), v = Ah(g), w = a[h ? f === "floating" ? "reference" : "floating" : f], b = os(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(w))) == null || n ? w : w.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: c,
    rootBoundary: d,
    strategy: l
  })), k = f === "floating" ? {
    x: r,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, E = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)), _ = await (i.isElement == null ? void 0 : i.isElement(E)) ? await (i.getScale == null ? void 0 : i.getScale(E)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, S = os(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: k,
    offsetParent: E,
    strategy: l
  }) : k);
  return {
    top: (b.top - S.top + v.top) / _.y,
    bottom: (S.bottom - b.bottom + v.bottom) / _.y,
    left: (b.left - S.left + v.left) / _.x,
    right: (S.right - b.right + v.right) / _.x
  };
}
const fx = (e) => ({
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
      element: c,
      padding: d = 0
    } = si(e, t) || {};
    if (c == null)
      return {};
    const f = Ah(d), h = {
      x: n,
      y: r
    }, g = Sl(o), v = kl(g), p = await s.getDimensions(c), w = g === "y", b = w ? "top" : "left", k = w ? "bottom" : "right", E = w ? "clientHeight" : "clientWidth", _ = i.reference[v] + i.reference[g] - h[g] - i.floating[v], S = h[g] - i.reference[g], T = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c));
    let V = T ? T[E] : 0;
    (!V || !await (s.isElement == null ? void 0 : s.isElement(T))) && (V = a.floating[E] || i.floating[v]);
    const O = _ / 2 - S / 2, H = V / 2 - p[v] / 2 - 1, Z = Fo(f[b], H), I = Fo(f[k], H), P = Z, A = V - p[v] - I, x = V / 2 - p[v] / 2 + O, C = Ea(P, x, A), M = !l.arrow && ai(o) != null && x !== C && i.reference[v] / 2 - (x < P ? Z : I) - p[v] / 2 < 0, z = M ? x < P ? x - P : x - A : 0;
    return {
      [g]: h[g] + z,
      data: {
        [g]: C,
        centerOffset: x - C - z,
        ...M && {
          alignmentOffset: z
        }
      },
      reset: M
    };
  }
}), hx = function(e) {
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
        elements: c
      } = t, {
        mainAxis: d = !0,
        crossAxis: f = !0,
        fallbackPlacements: h,
        fallbackStrategy: g = "bestFit",
        fallbackAxisSideDirection: v = "none",
        flipAlignment: p = !0,
        ...w
      } = si(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const b = Lr(o), k = nr(a), E = Lr(a) === a, _ = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), S = h || (E || !p ? [rs(a)] : ix(a)), T = v !== "none";
      !h && T && S.push(...cx(a, p, v, _));
      const V = [a, ...S], O = await $h(t, w), H = [];
      let Z = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (d && H.push(O[b]), f) {
        const x = ox(o, s, _);
        H.push(O[x[0]], O[x[1]]);
      }
      if (Z = [...Z, {
        placement: o,
        overflows: H
      }], !H.every((x) => x <= 0)) {
        var I, P;
        const x = (((I = i.flip) == null ? void 0 : I.index) || 0) + 1, C = V[x];
        if (C && (!(f === "alignment" ? k !== nr(C) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        Z.every((K) => nr(K.placement) === k ? K.overflows[0] > 0 : !0)))
          return {
            data: {
              index: x,
              overflows: Z
            },
            reset: {
              placement: C
            }
          };
        let M = (P = Z.filter((z) => z.overflows[0] <= 0).sort((z, K) => z.overflows[1] - K.overflows[1])[0]) == null ? void 0 : P.placement;
        if (!M)
          switch (g) {
            case "bestFit": {
              var A;
              const z = (A = Z.filter((K) => {
                if (T) {
                  const X = nr(K.placement);
                  return X === k || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  X === "y";
                }
                return !0;
              }).map((K) => [K.placement, K.overflows.filter((X) => X > 0).reduce((X, $) => X + $, 0)]).sort((K, X) => K[1] - X[1])[0]) == null ? void 0 : A[0];
              z && (M = z);
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
}, gx = /* @__PURE__ */ new Set(["left", "top"]);
async function vx(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = Lr(n), a = ai(n), l = nr(n) === "y", c = gx.has(s) ? -1 : 1, d = i && l ? -1 : 1, f = si(t, e);
  let {
    mainAxis: h,
    crossAxis: g,
    alignmentAxis: v
  } = typeof f == "number" ? {
    mainAxis: f,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: f.mainAxis || 0,
    crossAxis: f.crossAxis || 0,
    alignmentAxis: f.alignmentAxis
  };
  return a && typeof v == "number" && (g = a === "end" ? v * -1 : v), l ? {
    x: g * d,
    y: h * c
  } : {
    x: h * c,
    y: g * d
  };
}
const px = function(e) {
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
      } = t, l = await vx(t, e);
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
}, mx = function(e) {
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
      } = si(e, t), c = {
        x: n,
        y: r
      }, d = await $h(t, l), f = nr(Lr(o)), h = Th(f);
      let g = c[h], v = c[f];
      if (i) {
        const w = h === "y" ? "top" : "left", b = h === "y" ? "bottom" : "right", k = g + d[w], E = g - d[b];
        g = Ea(k, g, E);
      }
      if (s) {
        const w = f === "y" ? "top" : "left", b = f === "y" ? "bottom" : "right", k = v + d[w], E = v - d[b];
        v = Ea(k, v, E);
      }
      const p = a.fn({
        ...t,
        [h]: g,
        [f]: v
      });
      return {
        ...p,
        data: {
          x: p.x - n,
          y: p.y - r,
          enabled: {
            [h]: i,
            [f]: s
          }
        }
      };
    }
  };
};
function Ps() {
  return typeof window < "u";
}
function po(e) {
  return Mh(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Zt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Un(e) {
  var t;
  return (t = (Mh(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Mh(e) {
  return Ps() ? e instanceof Node || e instanceof Zt(e).Node : !1;
}
function un(e) {
  return Ps() ? e instanceof Element || e instanceof Zt(e).Element : !1;
}
function Pn(e) {
  return Ps() ? e instanceof HTMLElement || e instanceof Zt(e).HTMLElement : !1;
}
function Uc(e) {
  return !Ps() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Zt(e).ShadowRoot;
}
const yx = /* @__PURE__ */ new Set(["inline", "contents"]);
function li(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = dn(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !yx.has(o);
}
const wx = /* @__PURE__ */ new Set(["table", "td", "th"]);
function bx(e) {
  return wx.has(po(e));
}
const xx = [":popover-open", ":modal"];
function Ts(e) {
  return xx.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const _x = ["transform", "translate", "scale", "rotate", "perspective"], Cx = ["transform", "translate", "scale", "rotate", "perspective", "filter"], kx = ["paint", "layout", "strict", "content"];
function El(e) {
  const t = Nl(), n = un(e) ? dn(e) : e;
  return _x.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || Cx.some((r) => (n.willChange || "").includes(r)) || kx.some((r) => (n.contain || "").includes(r));
}
function Sx(e) {
  let t = dr(e);
  for (; Pn(t) && !co(t); ) {
    if (El(t))
      return t;
    if (Ts(t))
      return null;
    t = dr(t);
  }
  return null;
}
function Nl() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const Ex = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function co(e) {
  return Ex.has(po(e));
}
function dn(e) {
  return Zt(e).getComputedStyle(e);
}
function As(e) {
  return un(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function dr(e) {
  if (po(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Uc(e) && e.host || // Fallback.
    Un(e)
  );
  return Uc(t) ? t.host : t;
}
function Dh(e) {
  const t = dr(e);
  return co(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Pn(t) && li(t) ? t : Dh(t);
}
function Oh(e, t, n) {
  var r;
  t === void 0 && (t = []);
  const o = Dh(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = Zt(o);
  return i ? (Pa(s), t.concat(s, s.visualViewport || [], li(o) ? o : [], [])) : t.concat(o, Oh(o, []));
}
function Pa(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function zh(e) {
  const t = dn(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = Pn(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, a = ns(n) !== i || ns(r) !== s;
  return a && (n = i, r = s), {
    width: n,
    height: r,
    $: a
  };
}
function Vh(e) {
  return un(e) ? e : e.contextElement;
}
function Jr(e) {
  const t = Vh(e);
  if (!Pn(t))
    return kn(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = zh(t);
  let s = (i ? ns(n.width) : n.width) / r, a = (i ? ns(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const Nx = /* @__PURE__ */ kn(0);
function Ih(e) {
  const t = Zt(e);
  return !Nl() || !t.visualViewport ? Nx : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Px(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Zt(e) ? !1 : t;
}
function Ko(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = Vh(e);
  let s = kn(1);
  t && (r ? un(r) && (s = Jr(r)) : s = Jr(e));
  const a = Px(i, n, r) ? Ih(i) : kn(0);
  let l = (o.left + a.x) / s.x, c = (o.top + a.y) / s.y, d = o.width / s.x, f = o.height / s.y;
  if (i) {
    const h = Zt(i), g = r && un(r) ? Zt(r) : r;
    let v = h, p = Pa(v);
    for (; p && r && g !== v; ) {
      const w = Jr(p), b = p.getBoundingClientRect(), k = dn(p), E = b.left + (p.clientLeft + parseFloat(k.paddingLeft)) * w.x, _ = b.top + (p.clientTop + parseFloat(k.paddingTop)) * w.y;
      l *= w.x, c *= w.y, d *= w.x, f *= w.y, l += E, c += _, v = Zt(p), p = Pa(v);
    }
  }
  return os({
    width: d,
    height: f,
    x: l,
    y: c
  });
}
function $s(e, t) {
  const n = As(e).scrollLeft;
  return t ? t.left + n : Ko(Un(e)).left + n;
}
function Lh(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - $s(e, n), o = n.top + t.scrollTop;
  return {
    x: r,
    y: o
  };
}
function Tx(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", s = Un(r), a = t ? Ts(t.floating) : !1;
  if (r === s || a && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = kn(1);
  const d = kn(0), f = Pn(r);
  if ((f || !f && !i) && ((po(r) !== "body" || li(s)) && (l = As(r)), Pn(r))) {
    const g = Ko(r);
    c = Jr(r), d.x = g.x + r.clientLeft, d.y = g.y + r.clientTop;
  }
  const h = s && !f && !i ? Lh(s, l) : kn(0);
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - l.scrollLeft * c.x + d.x + h.x,
    y: n.y * c.y - l.scrollTop * c.y + d.y + h.y
  };
}
function Ax(e) {
  return Array.from(e.getClientRects());
}
function $x(e) {
  const t = Un(e), n = As(e), r = e.ownerDocument.body, o = Ur(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = Ur(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + $s(e);
  const a = -n.scrollTop;
  return dn(r).direction === "rtl" && (s += Ur(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
const Jc = 25;
function Mx(e, t) {
  const n = Zt(e), r = Un(e), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, a = 0, l = 0;
  if (o) {
    i = o.width, s = o.height;
    const d = Nl();
    (!d || d && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  const c = $s(r);
  if (c <= 0) {
    const d = r.ownerDocument, f = d.body, h = getComputedStyle(f), g = d.compatMode === "CSS1Compat" && parseFloat(h.marginLeft) + parseFloat(h.marginRight) || 0, v = Math.abs(r.clientWidth - f.clientWidth - g);
    v <= Jc && (i -= v);
  } else c <= Jc && (i += c);
  return {
    width: i,
    height: s,
    x: a,
    y: l
  };
}
const Dx = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function Ox(e, t) {
  const n = Ko(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = Pn(e) ? Jr(e) : kn(1), s = e.clientWidth * i.x, a = e.clientHeight * i.y, l = o * i.x, c = r * i.y;
  return {
    width: s,
    height: a,
    x: l,
    y: c
  };
}
function Qc(e, t, n) {
  let r;
  if (t === "viewport")
    r = Mx(e, n);
  else if (t === "document")
    r = $x(Un(e));
  else if (un(t))
    r = Ox(t, n);
  else {
    const o = Ih(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return os(r);
}
function Hh(e, t) {
  const n = dr(e);
  return n === t || !un(n) || co(n) ? !1 : dn(n).position === "fixed" || Hh(n, t);
}
function zx(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Oh(e, []).filter((a) => un(a) && po(a) !== "body"), o = null;
  const i = dn(e).position === "fixed";
  let s = i ? dr(e) : e;
  for (; un(s) && !co(s); ) {
    const a = dn(s), l = El(s);
    !l && a.position === "fixed" && (o = null), (i ? !l && !o : !l && a.position === "static" && !!o && Dx.has(o.position) || li(s) && !l && Hh(e, s)) ? r = r.filter((d) => d !== s) : o = a, s = dr(s);
  }
  return t.set(e, r), r;
}
function Vx(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? Ts(t) ? [] : zx(t, this._c) : [].concat(n), r], a = s[0], l = s.reduce((c, d) => {
    const f = Qc(t, d, o);
    return c.top = Ur(f.top, c.top), c.right = Fo(f.right, c.right), c.bottom = Fo(f.bottom, c.bottom), c.left = Ur(f.left, c.left), c;
  }, Qc(t, a, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function Ix(e) {
  const {
    width: t,
    height: n
  } = zh(e);
  return {
    width: t,
    height: n
  };
}
function Lx(e, t, n) {
  const r = Pn(t), o = Un(t), i = n === "fixed", s = Ko(e, !0, i, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = kn(0);
  function c() {
    l.x = $s(o);
  }
  if (r || !r && !i)
    if ((po(t) !== "body" || li(o)) && (a = As(t)), r) {
      const g = Ko(t, !0, i, t);
      l.x = g.x + t.clientLeft, l.y = g.y + t.clientTop;
    } else o && c();
  i && !r && o && c();
  const d = o && !r && !i ? Lh(o, a) : kn(0), f = s.left + a.scrollLeft - l.x - d.x, h = s.top + a.scrollTop - l.y - d.y;
  return {
    x: f,
    y: h,
    width: s.width,
    height: s.height
  };
}
function qs(e) {
  return dn(e).position === "static";
}
function eu(e, t) {
  if (!Pn(e) || dn(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Un(e) === n && (n = n.ownerDocument.body), n;
}
function Rh(e, t) {
  const n = Zt(e);
  if (Ts(e))
    return n;
  if (!Pn(e)) {
    let o = dr(e);
    for (; o && !co(o); ) {
      if (un(o) && !qs(o))
        return o;
      o = dr(o);
    }
    return n;
  }
  let r = eu(e, t);
  for (; r && bx(r) && qs(r); )
    r = eu(r, t);
  return r && co(r) && qs(r) && !El(r) ? n : r || Sx(e) || n;
}
const Hx = async function(e) {
  const t = this.getOffsetParent || Rh, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: Lx(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function Rx(e) {
  return dn(e).direction === "rtl";
}
const Bx = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Tx,
  getDocumentElement: Un,
  getClippingRect: Vx,
  getOffsetParent: Rh,
  getElementRects: Hx,
  getClientRects: Ax,
  getDimensions: Ix,
  getScale: Jr,
  isElement: un,
  isRTL: Rx
}, Fx = px, Kx = mx, Wx = hx, Zx = fx, Yx = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: Bx,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return dx(e, t, {
    ...o,
    platform: i
  });
};
const jx = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
const Xx = (e) => {
  for (const t in e)
    if (t.startsWith("aria-") || t === "role" || t === "title")
      return !0;
  return !1;
};
const qx = Symbol("lucide-context"), Gx = () => cn(qx);
var Ux = /* @__PURE__ */ pe("<svg><!><!></svg>");
function Pl(e, t) {
  ce(t, !0);
  const n = Gx() ?? {}, r = y(t, "name", 7), o = y(t, "color", 23, () => n.color ?? "currentColor"), i = y(t, "size", 23, () => n.size ?? 24), s = y(t, "strokeWidth", 23, () => n.strokeWidth ?? 2), a = y(t, "absoluteStrokeWidth", 23, () => n.absoluteStrokeWidth ?? !1), l = y(t, "iconNode", 23, () => []), c = y(t, "children", 7), d = /* @__PURE__ */ Re(t, [
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
  var h = {
    get name() {
      return r();
    },
    set name(w) {
      r(w), m();
    },
    get color() {
      return o();
    },
    set color(w = n.color ?? "currentColor") {
      o(w), m();
    },
    get size() {
      return i();
    },
    set size(w = n.size ?? 24) {
      i(w), m();
    },
    get strokeWidth() {
      return s();
    },
    set strokeWidth(w = n.strokeWidth ?? 2) {
      s(w), m();
    },
    get absoluteStrokeWidth() {
      return a();
    },
    set absoluteStrokeWidth(w = n.absoluteStrokeWidth ?? !1) {
      a(w), m();
    },
    get iconNode() {
      return l();
    },
    set iconNode(w = []) {
      l(w), m();
    },
    get children() {
      return c();
    },
    set children(w) {
      c(w), m();
    }
  }, g = Ux();
  Ge(
    g,
    (w) => ({
      ...jx,
      ...w,
      ...d,
      width: i(),
      height: i(),
      stroke: o(),
      "stroke-width": u(f),
      class: [
        "lucide-icon lucide",
        n.class,
        r() && `lucide-${r()}`,
        t.class
      ]
    }),
    [
      () => !c() && !Xx(d) && { "aria-hidden": "true" }
    ]
  );
  var v = F(g);
  pt(v, 17, l, Or, (w, b) => {
    var k = /* @__PURE__ */ N(() => uo(u(b), 2));
    let E = () => u(k)[0], _ = () => u(k)[1];
    var S = _e(), T = oe(S);
    sd(T, E, !0, (V, O) => {
      Ge(V, () => ({ ..._() }));
    }), D(w, S);
  });
  var p = L(v);
  return je(p, () => c() ?? tt), B(g), D(e, g), ue(h);
}
ae(
  Pl,
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
function Bh(e, t) {
  ce(t, !0);
  let n = /* @__PURE__ */ Re(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  const r = [["path", { d: "M20 6 9 17l-5-5" }]];
  Pl(e, We({ name: "check" }, () => n, {
    get iconNode() {
      return r;
    },
    children: (o, i) => {
      var s = _e(), a = oe(s);
      je(a, () => t.children ?? tt), D(o, s);
    },
    $$slots: { default: !0 }
  })), ue();
}
ae(Bh, {}, [], [], !0);
function Fh(e, t) {
  ce(t, !0);
  let n = /* @__PURE__ */ Re(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  const r = [["path", { d: "M5 12h14" }]];
  Pl(e, We({ name: "minus" }, () => n, {
    get iconNode() {
      return r;
    },
    children: (o, i) => {
      var s = _e(), a = oe(s);
      je(a, () => t.children ?? tt), D(o, s);
    },
    $$slots: { default: !0 }
  })), ue();
}
ae(Fh, {}, [], [], !0);
var Jx = /* @__PURE__ */ te('<div data-slot="checkbox-indicator" class="[&amp;>svg]:size-3.5 grid place-content-center text-current transition-none"><!></div>');
function Kh(e, t) {
  ce(t, !0);
  let n = y(t, "ref", 15, null), r = y(t, "checked", 15, !1), o = y(t, "indeterminate", 15, !1), i = y(t, "class", 7), s = /* @__PURE__ */ Re(t, [
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
      n(d), m();
    },
    get checked() {
      return r();
    },
    set checked(d = !1) {
      r(d), m();
    },
    get indeterminate() {
      return o();
    },
    set indeterminate(d = !1) {
      o(d), m();
    },
    get class() {
      return i();
    },
    set class(d) {
      i(d), m();
    }
  }, l = _e(), c = oe(l);
  {
    const d = (h, g) => {
      let v = () => g?.().checked, p = () => g?.().indeterminate;
      var w = Jx(), b = F(w);
      {
        var k = (_) => {
          Bh(_, {});
        }, E = (_) => {
          var S = _e(), T = oe(S);
          {
            var V = (O) => {
              Fh(O, {});
            };
            se(
              T,
              (O) => {
                p() && O(V);
              },
              !0
            );
          }
          D(_, S);
        };
        se(b, (_) => {
          v() ? _(k) : _(E, !1);
        });
      }
      B(w), D(h, w);
    };
    let f = /* @__PURE__ */ N(() => lo("border-input dark:bg-input/30 data-checked:bg-primary data-checked:text-primary-foreground dark:data-checked:bg-primary data-checked:border-primary aria-invalid:aria-checked:border-primary aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 flex size-4 items-center justify-center rounded-[4px] border shadow-xs transition-shadow group-has-disabled/field:opacity-50 focus-visible:ring-3 aria-invalid:ring-3 peer relative shrink-0 outline-none after:absolute after:-inset-x-3 after:-inset-y-2 disabled:cursor-not-allowed disabled:opacity-50", i()));
    Uo(c, () => Ph, (h, g) => {
      g(h, We(
        {
          "data-slot": "checkbox",
          get class() {
            return u(f);
          }
        },
        () => s,
        {
          get ref() {
            return n();
          },
          set ref(v) {
            n(v);
          },
          get checked() {
            return r();
          },
          set checked(v) {
            r(v);
          },
          get indeterminate() {
            return o();
          },
          set indeterminate(v) {
            o(v);
          },
          children: d,
          $$slots: { default: !0 }
        }
      ));
    });
  }
  return D(e, l), ue(a);
}
ae(Kh, { ref: {}, checked: {}, indeterminate: {}, class: {} }, [], [], !0);
var Qx = /* @__PURE__ */ te('<div><input type="hidden"/> <!> <!></div>');
const e_ = {
  hash: "svelte-1o3a23c",
  code: ".tf-chosen.svelte-1o3a23c {display:flex;flex-direction:row;align-items:center;justify-content:space-between;gap:5px;}"
};
function Wh(e, t) {
  ce(t, !0), Ze(e, e_);
  const n = y(t, "placeholder", 7), r = y(t, "label", 7), o = y(t, "value", 7), i = y(t, "buttonText", 7, "选择..."), s = y(t, "onChosen", 7), a = /* @__PURE__ */ Re(t, [
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
    set placeholder(g) {
      n(g), m();
    },
    get label() {
      return r();
    },
    set label(g) {
      r(g), m();
    },
    get value() {
      return o();
    },
    set value(g) {
      o(g), m();
    },
    get buttonText() {
      return i();
    },
    set buttonText(g = "选择...") {
      i(g), m();
    },
    get onChosen() {
      return s();
    },
    set onChosen(g) {
      s(g), m();
    }
  }, c = Qx();
  Ge(
    c,
    () => ({
      ...a,
      class: `tf-chosen nopan nodrag ${t.class ?? ""}`
    }),
    void 0,
    void 0,
    void 0,
    "svelte-1o3a23c"
  );
  var d = F(c);
  lr(d);
  var f = L(d, 2);
  rt(f, {
    get value() {
      return r();
    },
    get placeholder() {
      return n();
    },
    style: "flex-grow: 1;",
    disabled: !0
  });
  var h = L(f, 2);
  return ze(h, {
    variant: "outline",
    onclick: (g) => {
      s()?.(o(), r(), g);
    },
    style: "padding: 3px",
    children: (g, v) => {
      ye();
      var p = Ne();
      Ee(() => Xe(p, i())), D(g, p);
    },
    $$slots: { default: !0 }
  }), B(c), Ee(() => Ei(d, o())), D(e, c), ue(l);
}
ae(
  Wh,
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
var t_ = /* @__PURE__ */ te("<input/>"), n_ = /* @__PURE__ */ te("<input/>");
function rt(e, t) {
  ce(t, !0);
  let n = y(t, "ref", 15, null), r = y(t, "value", 15), o = y(t, "type", 7), i = y(t, "files", 15), s = y(t, "class", 7), a = y(t, "data-slot", 7, "input"), l = /* @__PURE__ */ Re(t, [
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
  var c = {
    get ref() {
      return n();
    },
    set ref(v = null) {
      n(v), m();
    },
    get value() {
      return r();
    },
    set value(v) {
      r(v), m();
    },
    get type() {
      return o();
    },
    set type(v) {
      o(v), m();
    },
    get files() {
      return i();
    },
    set files(v) {
      i(v), m();
    },
    get class() {
      return s();
    },
    set class(v) {
      s(v), m();
    },
    get "data-slot"() {
      return a();
    },
    set "data-slot"(v = "input") {
      a(v), m();
    }
  }, d = _e(), f = oe(d);
  {
    var h = (v) => {
      var p = t_();
      Ge(
        p,
        (w) => ({
          "data-slot": a(),
          class: w,
          type: "file",
          ...l
        }),
        [
          () => lo("dark:bg-input/30 border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 h-9 rounded-md border bg-transparent px-2.5 py-1 text-base shadow-xs transition-[color,box-shadow] file:h-7 file:text-sm file:font-medium focus-visible:ring-3 aria-invalid:ring-3 md:text-sm file:text-foreground placeholder:text-muted-foreground w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50", s())
        ],
        void 0,
        void 0,
        void 0,
        !0
      ), dt(p, (w) => n(w), () => n()), Uv(p, i), aa(p, r), D(v, p);
    }, g = (v) => {
      var p = n_();
      Ge(
        p,
        (w) => ({
          "data-slot": a(),
          spellcheck: "false",
          class: w,
          type: o(),
          ...l
        }),
        [
          () => lo("dark:bg-input/30 border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 h-9 rounded-md border bg-transparent px-2.5 py-1 text-base shadow-xs transition-[color,box-shadow] file:h-7 file:text-sm file:font-medium focus-visible:ring-3 aria-invalid:ring-3 md:text-sm file:text-foreground placeholder:text-muted-foreground w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50", s())
        ],
        void 0,
        void 0,
        void 0,
        !0
      ), dt(p, (w) => n(w), () => n()), aa(p, r), D(v, p);
    };
    se(f, (v) => {
      o() === "file" ? v(h) : v(g, !1);
    });
  }
  return D(e, d), ue(c);
}
ae(
  rt,
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
var r_ = /* @__PURE__ */ te("<textarea></textarea>");
function Ye(e, t) {
  ce(t, !0);
  const n = y(t, "value", 7), r = y(t, "height", 7), o = y(t, "autoHeight", 7, !0), i = y(t, "maxHeight", 7), s = y(t, "onHeightChange", 7), a = /* @__PURE__ */ Re(t, [
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
  let l, c;
  function d() {
    if (l && o()) {
      if (r() !== void 0) {
        const w = typeof r() == "number" ? `${r()}px` : r();
        l.style.height = w, l.style.overflowY = "hidden", s()?.(w);
        return;
      }
      l.style.height = "auto", l.style.overflowY = "hidden";
      let p = l.scrollHeight;
      if (!c) {
        const w = t.rows || 1, b = getComputedStyle(l);
        c = parseFloat(b.fontSize) * 1.2 * w + parseFloat(b.paddingTop) + parseFloat(b.paddingBottom) + parseFloat(b.borderTopWidth);
      }
      if (p < c && (p = c), i()) {
        const w = typeof i() == "number" ? `${i()}px` : i();
        p > parseInt(w) ? (l.style.height = w, l.style.overflowY = "auto") : l.style.height = `${p}px`;
      } else
        l.style.height = `${p}px`;
      s()?.(l.style.height);
    }
  }
  Ue(() => {
    d();
  });
  var f = {
    get value() {
      return n();
    },
    set value(p) {
      n(p), m();
    },
    get height() {
      return r();
    },
    set height(p) {
      r(p), m();
    },
    get autoHeight() {
      return o();
    },
    set autoHeight(p = !0) {
      o(p), m();
    },
    get maxHeight() {
      return i();
    },
    set maxHeight(p) {
      i(p), m();
    },
    get onHeightChange() {
      return s();
    },
    set onHeightChange(p) {
      s(p), m();
    }
  }, h = r_();
  yv(h);
  var g = (p) => {
    d(), t.oninput?.(p);
  }, v = (p) => {
    d(), t.onchange?.(p);
  };
  return Ge(h, () => ({
    spellcheck: "false",
    ...a,
    oninput: g,
    onchange: v,
    class: `tf-textarea nodrag nowheel ${t.class ?? ""}`,
    value: n() || ""
  })), dt(h, (p) => l = p, () => l), D(e, h), ue(f);
}
ae(
  Ye,
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
var o_ = /* @__PURE__ */ te('<div role="button"><!></div>'), i_ = /* @__PURE__ */ te("<div></div>");
function Zh(e, t) {
  const n = jl(t, ["children", "$$slots", "$$events", "$$legacy", "$$host"]), r = jl(n, ["items", "onChange", "activeIndex"]);
  ce(t, !1);
  let o = y(t, "items", 28, () => []), i = y(t, "onChange", 12, () => {
  }), s = y(t, "activeIndex", 12, 0);
  function a(d, f) {
    s(f), i()?.(d, f);
  }
  var l = {
    get items() {
      return o();
    },
    set items(d) {
      o(d), m();
    },
    get onChange() {
      return i();
    },
    set onChange(d) {
      i(d), m();
    },
    get activeIndex() {
      return s();
    },
    set activeIndex(d) {
      s(d), m();
    }
  };
  tl();
  var c = i_();
  return Ge(c, () => ({
    ...r,
    class: `tf-tabs ${Ua(r), Je(() => r.class) ?? ""}`
  })), pt(c, 5, o, Or, (d, f, h) => {
    var g = o_();
    ke(g, "tabindex", h), g.__click = () => a(u(f), h), g.__keydown = (b) => {
      (b.key === "Enter" || b.key === " ") && (b.preventDefault(), a(u(f), h));
    };
    var v = F(g);
    {
      var p = (b) => {
        var k = Ne();
        Ee(() => Xe(k, (u(f), Je(() => u(f).label)))), D(b, k);
      }, w = (b) => {
        var k = _e(), E = oe(k);
        je(E, () => (u(f), Je(() => u(f).label) ?? tt)), D(b, k);
      };
      se(v, (b) => {
        u(f), Je(() => typeof u(f).label == "string") ? b(p) : b(w, !1);
      });
    }
    B(g), Ee(() => Bt(g, 1, `tf-tabs-item ${h === s() ? "active" : ""}`)), D(d, g);
  }), B(c), D(e, c), ue(l);
}
vr(["click", "keydown"]);
ae(Zh, { items: {}, onChange: {}, activeIndex: {} }, [], [], !0);
var s_ = /* @__PURE__ */ te('<span class="tf-collapse-item-title-icon"><!></span>'), a_ = /* @__PURE__ */ te('<div class="tf-collapse-item-description"><!></div>'), l_ = /* @__PURE__ */ te('<div class="tf-collapse-item-content"><!></div>'), c_ = /* @__PURE__ */ te('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><!> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), u_ = /* @__PURE__ */ te("<div></div>");
const d_ = {
  hash: "svelte-ynwjxt",
  code: `\r
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-ynwjxt {transform:rotate(90deg);transition:transform 0.3s ease;}`
};
function Yh(e, t) {
  ce(t, !0), Ze(e, d_);
  let n = y(t, "items", 7), r = y(t, "onChange", 7), o = y(t, "activeKeys", 31, () => Ct([]));
  function i(l) {
    o().includes(l.key) ? o(o().filter((c) => c !== l.key)) : (o().push(l.key), o(o())), r()?.(l, o());
  }
  var s = {
    get items() {
      return n();
    },
    set items(l) {
      n(l), m();
    },
    get onChange() {
      return r();
    },
    set onChange(l) {
      r(l), m();
    },
    get activeKeys() {
      return o();
    },
    set activeKeys(l = []) {
      o(l), m();
    }
  }, a = u_();
  return pt(a, 21, n, Or, (l, c, d) => {
    var f = c_(), h = F(f);
    ke(h, "tabindex", d), h.__click = () => i(u(c)), h.__keydown = (S) => {
      (S.key === "Enter" || S.key === " ") && (S.preventDefault(), i(u(c)));
    };
    var g = F(h);
    {
      var v = (S) => {
        var T = s_(), V = F(T);
        rr(V, {
          get target() {
            return u(c).icon;
          }
        }), B(T), D(S, T);
      };
      se(g, (S) => {
        u(c).icon && S(v);
      });
    }
    var p = L(g, 2);
    rr(p, {
      get target() {
        return u(c).title;
      }
    });
    var w = L(p, 2);
    B(h);
    var b = L(h, 2);
    {
      var k = (S) => {
        var T = a_(), V = F(T);
        rr(V, {
          get target() {
            return u(c).description;
          }
        }), B(T), D(S, T);
      };
      se(b, (S) => {
        u(c).description && S(k);
      });
    }
    var E = L(b, 2);
    {
      var _ = (S) => {
        var T = l_(), V = F(T);
        rr(V, {
          get target() {
            return u(c).content;
          }
        }), B(T), D(S, T);
      };
      se(E, (S) => {
        o().includes(u(c).key) && S(_);
      });
    }
    B(f), Ee((S) => Bt(w, 1, `tf-collapse-item-title-arrow ${S ?? ""}`, "svelte-ynwjxt"), [
      () => o().includes(u(c).key) ? "rotate-90" : ""
    ]), D(l, f);
  }), B(a), Ee(() => {
    mt(a, t.style), Bt(a, 1, `tf-collapse ${t.class ?? ""}`, "svelte-ynwjxt");
  }), D(e, a), ue(s);
}
vr(["click", "keydown"]);
ae(Yh, { items: {}, onChange: {}, activeKeys: {} }, [], [], !0);
function rr(e, t) {
  ce(t, !0);
  let n = y(t, "target", 7);
  typeof n() > "u" && n("undefined");
  var r = {
    get target() {
      return n();
    },
    set target(l) {
      n(l), m();
    }
  }, o = _e(), i = oe(o);
  {
    var s = (l) => {
      var c = _e(), d = oe(c);
      je(d, () => n() ?? tt), D(l, c);
    }, a = (l) => {
      var c = _e(), d = oe(c);
      ys(d, n), D(l, c);
    };
    se(i, (l) => {
      typeof n() == "function" ? l(s) : l(a, !1);
    });
  }
  return D(e, o), ue(r);
}
ae(rr, { target: {} }, [], [], !0);
var f_ = /* @__PURE__ */ pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), h_ = /* @__PURE__ */ te('<div class="tf-select-content-children"><!></div>'), g_ = /* @__PURE__ */ te('<button class="tf-select-content-item"><span><!></span> <!></button> <!>', 1), v_ = /* @__PURE__ */ te('<div class="tf-select-content nopan nodrag nowheel "><!></div>'), p_ = /* @__PURE__ */ te("<!> <!>", 1), m_ = /* @__PURE__ */ te('<div class="tf-select-input-placeholder"> </div>'), y_ = /* @__PURE__ */ te('<button><div class="tf-select-input-value"></div> <div class="tf-select-input-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></div></button>'), w_ = /* @__PURE__ */ te("<div><!></div>");
function gt(e, t) {
  ce(t, !0);
  const n = (k, E = tt) => {
    var _ = _e(), S = oe(_);
    pt(S, 19, E, (T, V) => `${V}_${T.value}`, (T, V) => {
      var O = g_(), H = oe(O);
      H.__click = () => v(u(V));
      var Z = F(H), I = F(Z);
      {
        var P = (M) => {
          var z = f_();
          D(M, z);
        };
        se(I, (M) => {
          u(V).children && u(V).children.length > 0 && M(P);
        });
      }
      B(Z);
      var A = L(Z, 2);
      rr(A, {
        get target() {
          return u(V).label;
        }
      }), B(H);
      var x = L(H, 2);
      {
        var C = (M) => {
          var z = h_(), K = F(z);
          n(K, () => u(V).children), B(z), D(M, z);
        };
        se(x, (M) => {
          u(V).children && u(V).children.length > 0 && (a() || c().includes(u(V).value)) && M(C);
        });
      }
      D(T, O);
    }), D(k, _);
  };
  let r = y(t, "items", 7), o = y(t, "onSelect", 7), i = y(t, "value", 23, () => []), s = y(t, "defaultValue", 23, () => []), a = y(t, "expandAll", 7, !0), l = y(t, "multiple", 7, !1), c = y(t, "expandValue", 23, () => []), d = y(t, "placeholder", 7), f = /* @__PURE__ */ Re(t, [
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
  ]), h = /* @__PURE__ */ N(() => {
    const k = [], E = (_) => {
      for (let S of _)
        i().length > 0 ? i().includes(S.value) && k.push(S) : s().includes(S.value) && k.push(S), S.children && S.children.length > 0 && E(S.children);
    };
    return E(r()), k;
  }), g;
  function v(k) {
    g?.hide(), o()?.(k);
  }
  var p = {
    get items() {
      return r();
    },
    set items(k) {
      r(k), m();
    },
    get onSelect() {
      return o();
    },
    set onSelect(k) {
      o(k), m();
    },
    get value() {
      return i();
    },
    set value(k = []) {
      i(k), m();
    },
    get defaultValue() {
      return s();
    },
    set defaultValue(k = []) {
      s(k), m();
    },
    get expandAll() {
      return a();
    },
    set expandAll(k = !0) {
      a(k), m();
    },
    get multiple() {
      return l();
    },
    set multiple(k = !1) {
      l(k), m();
    },
    get expandValue() {
      return c();
    },
    set expandValue(k = []) {
      c(k), m();
    },
    get placeholder() {
      return d();
    },
    set placeholder(k) {
      d(k), m();
    }
  }, w = w_();
  Ge(w, () => ({ ...f, class: `tf-select ${f.class ?? ""}` }));
  var b = F(w);
  return dt(
    yr(b, {
      floating: (E) => {
        var _ = v_(), S = F(_);
        n(S, r), B(_), D(E, _);
      },
      children: (E, _) => {
        var S = y_();
        Ge(S, () => ({ class: "tf-select-input nopan nodrag", ...f }));
        var T = F(S);
        pt(
          T,
          23,
          () => u(h),
          (V, O) => `${O}_${V.value}`,
          (V, O, H) => {
            var Z = _e(), I = oe(Z);
            {
              var P = (x) => {
                var C = _e(), M = oe(C);
                {
                  var z = (K) => {
                    rr(K, {
                      get target() {
                        return u(O).label;
                      }
                    });
                  };
                  se(M, (K) => {
                    u(H) === 0 && K(z);
                  });
                }
                D(x, C);
              }, A = (x) => {
                var C = p_(), M = oe(C);
                rr(M, {
                  get target() {
                    return u(O).label;
                  }
                });
                var z = L(M, 2);
                {
                  var K = (X) => {
                    var $ = Ne(",");
                    D(X, $);
                  };
                  se(z, (X) => {
                    u(H) < u(h).length - 1 && X(K);
                  });
                }
                D(x, C);
              };
              se(I, (x) => {
                l() ? x(A, !1) : x(P);
              });
            }
            D(V, Z);
          },
          (V) => {
            var O = m_(), H = F(O, !0);
            B(O), Ee(() => Xe(H, d())), D(V, O);
          }
        ), B(T), ye(2), B(S), D(E, S);
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (E) => g = E,
    () => g
  ), B(w), D(e, w), ue(p);
}
vr(["click"]);
ae(
  gt,
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
const b_ = ({
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
  let c;
  if (typeof n == "string") {
    const b = document.querySelector(n);
    if (b)
      c = b;
    else
      throw new Error("element not found by document.querySelector('" + n + "')");
  } else
    c = n;
  let d;
  l && (d = document.createElement("div"), d.style.position = "absolute", d.style.backgroundColor = "#222", d.style.width = "8px", d.style.height = "8px", d.style.transform = "rotate(45deg)", d.style.display = "none", c.firstElementChild.before(d));
  function f() {
    Yx(e, c, {
      placement: r,
      middleware: [
        Fx(o),
        // 手动偏移配置
        Wx(i),
        //自动翻转
        Kx(s),
        //自动偏移（使得浮动元素能够进入视野）
        ...l ? [Zx({ element: d })] : []
      ]
    }).then(({ x: b, y: k, placement: E, middlewareData: _ }) => {
      if (Object.assign(c.style, {
        left: `${b}px`,
        top: `${k}px`
      }), l) {
        const { x: S, y: T } = _.arrow, V = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[E.split("-")[0]];
        Object.assign(d.style, {
          zIndex: -1,
          left: S != null ? `${S}px` : "",
          top: T != null ? `${T}px` : "",
          right: "",
          bottom: "",
          [V]: "2px"
        });
      }
    });
  }
  let h = !1;
  function g() {
    c.style.display = "block", c.style.visibility = "block", c.style.position = "absolute", l && (d.style.display = "block"), h = !0, f();
  }
  function v() {
    c.style.display = "none", l && (d.style.display = "none"), h = !1;
  }
  function p(b) {
    b.stopPropagation(), h ? v() : g();
  }
  function w(b) {
    c.contains(b.target) || v();
  }
  return (!t || t.length == 0) && (t = ["click"]), t.forEach((b) => {
    e.addEventListener(b, p);
  }), document.addEventListener("click", w), {
    destroy() {
      t.forEach((b) => {
        e.removeEventListener(b, p);
      }), document.removeEventListener("click", w);
    },
    hide() {
      v();
    },
    isVisible() {
      return h;
    }
  };
};
var x_ = /* @__PURE__ */ te('<div style="position: relative"><div><!></div> <div style="display: none; width: 100%;z-index: 9999"><!></div></div>');
function yr(e, t) {
  ce(t, !0);
  const n = y(t, "children", 7), r = y(t, "floating", 7), o = y(t, "placement", 7, "bottom");
  let i, s, a;
  Tn(() => (a = b_({
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
  var c = {
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
  }, d = x_(), f = F(d), h = F(f);
  je(h, n), B(f), dt(f, (p) => i = p, () => i);
  var g = L(f, 2), v = F(g);
  return je(v, r), B(g), dt(g, (p) => s = p, () => s), B(d), D(e, d), ue(c);
}
ae(yr, { children: {}, floating: {}, placement: {} }, [], ["hide"], !0);
function Ve(e, t) {
  ce(t, !0);
  const n = y(t, "children", 7), r = y(t, "level", 7, 1), o = y(t, "mt", 7), i = y(t, "mb", 7);
  var s = {
    get children() {
      return n();
    },
    set children(c) {
      n(c), m();
    },
    get level() {
      return r();
    },
    set level(c = 1) {
      r(c), m();
    },
    get mt() {
      return o();
    },
    set mt(c) {
      o(c), m();
    },
    get mb() {
      return i();
    },
    set mb(c) {
      i(c), m();
    }
  }, a = _e(), l = oe(a);
  return sd(l, () => `h${r()}`, !1, (c, d) => {
    Ge(c, () => ({
      class: "tf-heading",
      style: `margin-top:${o() || "0"};margin-bottom:${i() || "0"}`
    }));
    var f = _e(), h = oe(f);
    je(h, () => n() ?? tt), D(d, f);
  }), D(e, a), ue(s);
}
ae(Ve, { children: {}, level: {}, mt: {}, mb: {} }, [], [], !0);
var __ = /* @__PURE__ */ pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1q3h954"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1q3h954"></path></svg>');
const C_ = {
  hash: "svelte-1q3h954",
  code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:var(--input);border:1px solid transparent;}}"
};
function ci(e, t) {
  ce(t, !0), Ze(e, C_);
  const n = /* @__PURE__ */ Re(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  {
    let r = /* @__PURE__ */ N(() => lo("input-btn-more", t.class));
    ze(e, We(
      {
        size: "icon-xs",
        get class() {
          return u(r);
        }
      },
      () => n,
      {
        children: (o, i) => {
          var s = __();
          D(o, s);
        },
        $$slots: { default: !0 }
      }
    ));
  }
  ue();
}
ae(ci, {}, [], [], !0);
const k_ = () => ({ deleteNode: (t) => {
  Le.removeNode(t), Le.updateEdges((n) => n.filter((r) => r.source !== t && r.target !== t));
} }), Wn = (e = 16) => {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = new Uint8Array(e);
  return crypto.getRandomValues(n), Array.from(n, (r) => t[r % t.length]).join("");
}, S_ = () => ({ copyNode: (t) => {
  const n = Le.getNode(t);
  if (n) {
    const r = Wn(), o = {
      ...n,
      id: r,
      position: { x: n.position.x + 50, y: n.position.y + 50 }
    };
    Le.updateNodes((i) => [...i.map((a) => ({ ...a, selected: !1 })), o]);
  }
} }), nt = () => cn("svelteflow__node_id"), fr = () => cn("tinyflow_options");
var E_ = /* @__PURE__ */ pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'), N_ = /* @__PURE__ */ pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'), P_ = /* @__PURE__ */ pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'), T_ = /* @__PURE__ */ te('<div class="input-item svelte-ana6zl">执行条件： <!></div>'), A_ = /* @__PURE__ */ te('<div class="input-item svelte-ana6zl">循环间隔时间（单位：毫秒）： <!></div> <div class="input-item svelte-ana6zl">最大循环次数（0 表示不限制）： <!></div> <div class="input-item svelte-ana6zl">退出条件： <!></div>', 1), $_ = /* @__PURE__ */ te('<div class="input-item svelte-ana6zl">错误重试间隔时间（单位：毫秒）： <!></div> <div class="input-item svelte-ana6zl">最大重试次数： <!></div> <label class="input-item-inline svelte-ana6zl"><span>正常后重置重试次数记录：</span> <input type="checkbox"/></label>', 1), M_ = /* @__PURE__ */ te('<div class="settings svelte-ana6zl"><div class="input-item svelte-ana6zl">节点名称： <!></div> <div class="input-item svelte-ana6zl">参数描述： <!></div> <!> <label class="input-item-inline svelte-ana6zl"><span>循环执行：</span> <input type="checkbox"/></label> <!> <label class="input-item-inline svelte-ana6zl"><span>错误重试：</span> <input type="checkbox"/></label> <!></div>'), D_ = /* @__PURE__ */ pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3.33946 17.0002C2.90721 16.2515 2.58277 15.4702 2.36133 14.6741C3.3338 14.1779 3.99972 13.1668 3.99972 12.0002C3.99972 10.8345 3.3348 9.824 2.36353 9.32741C2.81025 7.71651 3.65857 6.21627 4.86474 4.99001C5.7807 5.58416 6.98935 5.65534 7.99972 5.072C9.01009 4.48866 9.55277 3.40635 9.4962 2.31604C11.1613 1.8846 12.8847 1.90004 14.5031 2.31862C14.4475 3.40806 14.9901 4.48912 15.9997 5.072C17.0101 5.65532 18.2187 5.58416 19.1346 4.99007C19.7133 5.57986 20.2277 6.25151 20.66 7.00021C21.0922 7.7489 21.4167 8.53025 21.6381 9.32628C20.6656 9.82247 19.9997 10.8336 19.9997 12.0002C19.9997 13.166 20.6646 14.1764 21.6359 14.673C21.1892 16.2839 20.3409 17.7841 19.1347 19.0104C18.2187 18.4163 17.0101 18.3451 15.9997 18.9284C14.9893 19.5117 14.4467 20.5941 14.5032 21.6844C12.8382 22.1158 11.1148 22.1004 9.49633 21.6818C9.55191 20.5923 9.00929 19.5113 7.99972 18.9284C6.98938 18.3451 5.78079 18.4162 4.86484 19.0103C4.28617 18.4205 3.77172 17.7489 3.33946 17.0002ZM8.99972 17.1964C10.0911 17.8265 10.8749 18.8227 11.2503 19.9659C11.7486 20.0133 12.2502 20.014 12.7486 19.9675C13.1238 18.8237 13.9078 17.8268 14.9997 17.1964C16.0916 16.5659 17.347 16.3855 18.5252 16.6324C18.8146 16.224 19.0648 15.7892 19.2729 15.334C18.4706 14.4373 17.9997 13.2604 17.9997 12.0002C17.9997 10.74 18.4706 9.5632 19.2729 8.6665C19.1688 8.4405 19.0538 8.21822 18.9279 8.00021C18.802 7.78219 18.667 7.57148 18.5233 7.36842C17.3457 7.61476 16.0911 7.43414 14.9997 6.80405C13.9083 6.17395 13.1246 5.17768 12.7491 4.03455C12.2509 3.98714 11.7492 3.98646 11.2509 4.03292C10.8756 5.17671 10.0916 6.17364 8.99972 6.80405C7.9078 7.43447 6.65245 7.61494 5.47428 7.36803C5.18485 7.77641 4.93463 8.21117 4.72656 8.66637C5.52881 9.56311 5.99972 10.74 5.99972 12.0002C5.99972 13.2604 5.52883 14.4372 4.72656 15.3339C4.83067 15.5599 4.94564 15.7822 5.07152 16.0002C5.19739 16.2182 5.3324 16.4289 5.47612 16.632C6.65377 16.3857 7.90838 16.5663 8.99972 17.1964ZM11.9997 15.0002C10.3429 15.0002 8.99972 13.6571 8.99972 12.0002C8.99972 10.3434 10.3429 9.00021 11.9997 9.00021C13.6566 9.00021 14.9997 10.3434 14.9997 12.0002C14.9997 13.6571 13.6566 15.0002 11.9997 15.0002ZM11.9997 13.0002C12.552 13.0002 12.9997 12.5525 12.9997 12.0002C12.9997 11.4479 12.552 11.0002 11.9997 11.0002C11.4474 11.0002 10.9997 11.4479 10.9997 12.0002C10.9997 12.5525 11.4474 13.0002 11.9997 13.0002Z"></path></svg>'), O_ = /* @__PURE__ */ te('<div class="tf-node-toolbar svelte-ana6zl"><!> <!> <!> <!></div>'), z_ = /* @__PURE__ */ te('<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!> <!>', 1);
const V_ = {
  hash: "svelte-ana6zl",
  code: ".tf-node-toolbar.svelte-ana6zl {display:flex;gap:5px;padding:5px;border-radius:5px;background:var(--background);border:1px solid var(--border);box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}.settings.svelte-ana6zl {display:flex;flex-direction:column;gap:10px;padding:10px;background:var(--background);border:1px solid var(--border);border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.settings.svelte-ana6zl .input-item:where(.svelte-ana6zl) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:var(--muted-foreground);}.settings.svelte-ana6zl .input-item-inline:where(.svelte-ana6zl) {display:flex;align-items:center;font-size:12px;color:var(--muted-foreground);}"
};
function en(e, t) {
  ce(t, !0), Ze(e, V_);
  const n = y(t, "data", 7), r = y(t, "id", 7, ""), o = y(t, "icon", 7), i = y(t, "handle", 7), s = y(t, "children", 7), a = y(t, "allowExecute", 7, !0), l = y(t, "allowCopy", 7, !0), c = y(t, "allowDelete", 7, !0), d = y(t, "allowSetting", 7, !0), f = y(t, "allowSettingOfCondition", 7, !0), h = y(t, "showSourceHandle", 7, !0), g = y(t, "showTargetHandle", 7, !0), v = y(t, "onCollapse", 7);
  let p = n().expand ? ["key"] : [];
  const { updateNodeData: w, getNode: b } = ft(), k = /* @__PURE__ */ N(() => [
    {
      key: "key",
      icon: o(),
      title: n().title,
      description: n().description,
      content: s()
    }
  ]), { deleteNode: E } = k_(), { copyNode: _ } = S_(), S = fr(), T = () => {
    S.onNodeExecute?.(b(r()));
  };
  let V = nt();
  var O = {
    get data() {
      return n();
    },
    set data($) {
      n($), m();
    },
    get id() {
      return r();
    },
    set id($ = "") {
      r($), m();
    },
    get icon() {
      return o();
    },
    set icon($) {
      o($), m();
    },
    get handle() {
      return i();
    },
    set handle($) {
      i($), m();
    },
    get children() {
      return s();
    },
    set children($) {
      s($), m();
    },
    get allowExecute() {
      return a();
    },
    set allowExecute($ = !0) {
      a($), m();
    },
    get allowCopy() {
      return l();
    },
    set allowCopy($ = !0) {
      l($), m();
    },
    get allowDelete() {
      return c();
    },
    set allowDelete($ = !0) {
      c($), m();
    },
    get allowSetting() {
      return d();
    },
    set allowSetting($ = !0) {
      d($), m();
    },
    get allowSettingOfCondition() {
      return f();
    },
    set allowSettingOfCondition($ = !0) {
      f($), m();
    },
    get showSourceHandle() {
      return h();
    },
    set showSourceHandle($ = !0) {
      h($), m();
    },
    get showTargetHandle() {
      return g();
    },
    set showTargetHandle($ = !0) {
      g($), m();
    },
    get onCollapse() {
      return v();
    },
    set onCollapse($) {
      v($), m();
    }
  }, H = z_(), Z = oe(H);
  {
    var I = ($) => {
      th($, {
        get position() {
          return be.Top;
        },
        align: "start",
        children: (Y, U) => {
          var W = O_(), G = F(W);
          {
            var R = (le) => {
              ze(le, {
                size: "icon",
                class: "tf-node-toolbar-item",
                onclick: () => {
                  E(r());
                },
                children: (re, he) => {
                  var me = E_();
                  D(re, me);
                },
                $$slots: { default: !0 }
              });
            };
            se(G, (le) => {
              c() && le(R);
            });
          }
          var j = L(G, 2);
          {
            var ee = (le) => {
              ze(le, {
                size: "icon",
                class: "tf-node-toolbar-item",
                onclick: () => {
                  _(r());
                },
                children: (re, he) => {
                  var me = N_();
                  D(re, me);
                },
                $$slots: { default: !0 }
              });
            };
            se(j, (le) => {
              l() && le(ee);
            });
          }
          var ne = L(j, 2);
          {
            var J = (le) => {
              ze(le, {
                size: "icon",
                class: "tf-node-toolbar-item",
                onclick: T,
                children: (re, he) => {
                  var me = P_();
                  D(re, me);
                },
                $$slots: { default: !0 }
              });
            };
            se(ne, (le) => {
              a() && le(J);
            });
          }
          var Ce = L(ne, 2);
          {
            var ie = (le) => {
              yr(le, {
                placement: "bottom",
                floating: (he) => {
                  var me = M_(), Se = F(me), fe = L(F(Se));
                  rt(fe, {
                    style: "width: 100%;",
                    onchange: (de) => {
                      const Me = de.target.value;
                      w(V, { title: Me });
                    },
                    get value() {
                      return n().title;
                    }
                  }), B(Se);
                  var xe = L(Se, 2), Ae = L(F(xe));
                  Ye(Ae, {
                    rows: 3,
                    style: "width: 100%;",
                    onchange: (de) => {
                      const Me = de.target.value;
                      w(V, { description: Me });
                    },
                    get value() {
                      return n().description;
                    }
                  }), B(xe);
                  var q = L(xe, 2);
                  {
                    var lt = (de) => {
                      var Me = T_(), et = L(F(Me));
                      Ye(et, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (Fe) => {
                          const ct = Fe.target.value;
                          w(V, { condition: ct });
                        },
                        get value() {
                          return n().condition;
                        }
                      }), B(Me), D(de, Me);
                    };
                    se(q, (de) => {
                      f() && de(lt);
                    });
                  }
                  var Oe = L(q, 2), Be = L(F(Oe), 2);
                  lr(Be), Be.__change = (de) => {
                    const Me = de.target.checked;
                    w(V, { loopEnable: Me });
                  }, B(Oe);
                  var Ie = L(Oe, 2);
                  {
                    var Et = (de) => {
                      var Me = A_(), et = oe(Me), Fe = L(F(et));
                      {
                        let wt = /* @__PURE__ */ N(() => n().loopIntervalMs || "1000");
                        Ye(Fe, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (bt) => {
                            const pn = bt.target.value;
                            w(V, { loopIntervalMs: pn });
                          },
                          get value() {
                            return u(wt);
                          }
                        });
                      }
                      B(et);
                      var ct = L(et, 2), Nt = L(F(ct));
                      {
                        let wt = /* @__PURE__ */ N(() => n().maxLoopCount || "0");
                        Ye(Nt, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (bt) => {
                            const pn = bt.target.value;
                            w(V, { maxLoopCount: pn });
                          },
                          get value() {
                            return u(wt);
                          }
                        });
                      }
                      B(ct);
                      var Dt = L(ct, 2), vn = L(F(Dt));
                      Ye(vn, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (wt) => {
                          const bt = wt.target.value;
                          w(V, { loopBreakCondition: bt });
                        },
                        get value() {
                          return n().loopBreakCondition;
                        }
                      }), B(Dt), D(de, Me);
                    };
                    se(Ie, (de) => {
                      n().loopEnable && de(Et);
                    });
                  }
                  var st = L(Ie, 2), Mt = L(F(st), 2);
                  lr(Mt), Mt.__change = (de) => {
                    const Me = de.target.checked;
                    w(V, { retryEnable: Me });
                  }, B(st);
                  var yt = L(st, 2);
                  {
                    var tn = (de) => {
                      var Me = $_(), et = oe(Me), Fe = L(F(et));
                      {
                        let wt = /* @__PURE__ */ N(() => n().retryIntervalMs || "1000");
                        Ye(Fe, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (bt) => {
                            const pn = bt.target.value;
                            w(V, { retryIntervalMs: pn });
                          },
                          get value() {
                            return u(wt);
                          }
                        });
                      }
                      B(et);
                      var ct = L(et, 2), Nt = L(F(ct));
                      {
                        let wt = /* @__PURE__ */ N(() => n().maxRetryCount || "3");
                        Ye(Nt, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (bt) => {
                            const pn = bt.target.value;
                            w(V, { maxRetryCount: pn });
                          },
                          get value() {
                            return u(wt);
                          }
                        });
                      }
                      B(ct);
                      var Dt = L(ct, 2), vn = L(F(Dt), 2);
                      lr(vn), vn.__change = (wt) => {
                        const bt = wt.target.checked;
                        w(V, { resetRetryCountAfterNormal: bt });
                      }, B(Dt), Ee(() => zs(vn, !!n().resetRetryCountAfterNormal)), D(de, Me);
                    };
                    se(yt, (de) => {
                      n().retryEnable && de(tn);
                    });
                  }
                  B(me), Ee(() => {
                    zs(Be, !!n().loopEnable), zs(Mt, !!n().retryEnable);
                  }), D(he, me);
                },
                children: (he, me) => {
                  ze(he, {
                    size: "icon",
                    class: "tf-node-toolbar-item",
                    children: (Se, fe) => {
                      var xe = D_();
                      D(Se, xe);
                    },
                    $$slots: { default: !0 }
                  });
                },
                $$slots: { floating: !0, default: !0 }
              });
            };
            se(Ce, (le) => {
              d() && le(ie);
            });
          }
          B(W), D(Y, W);
        },
        $$slots: { default: !0 }
      });
    };
    se(Z, ($) => {
      (a() || l() || c()) && $(I);
    });
  }
  var P = L(Z, 2), A = L(F(P), 2), x = F(A);
  Yh(x, {
    get items() {
      return u(k);
    },
    get activeKeys() {
      return p;
    },
    onChange: ($, Y) => {
      w(r(), { expand: Y?.includes("key") }), v()?.(Y?.includes("key") ? "key" : "");
    }
  }), B(A), B(P);
  var C = L(P, 2);
  {
    var M = ($) => {
      ur($, {
        type: "target",
        get position() {
          return be.Left;
        },
        style: " left: -12px;top: 20px"
      });
    };
    se(C, ($) => {
      g() && $(M);
    });
  }
  var z = L(C, 2);
  {
    var K = ($) => {
      ur($, {
        type: "source",
        get position() {
          return be.Right;
        },
        style: "right: -12px;top: 20px"
      });
    };
    se(z, ($) => {
      h() && $(K);
    });
  }
  var X = L(z, 2);
  return je(X, () => i() ?? tt), D(e, H), ue(O);
}
vr(["change"]);
ae(
  en,
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
var I_ = /* @__PURE__ */ te('<div class="input-more-item svelte-n5iecj">数据选项： <!></div>'), L_ = /* @__PURE__ */ te('<div class="input-more-setting svelte-n5iecj"><div class="input-more-item svelte-n5iecj">数据内容： <!></div> <div class="input-more-item svelte-n5iecj">输入方式： <!></div> <!> <div class="input-more-item svelte-n5iecj">数据标题： <!></div> <div class="input-more-item svelte-n5iecj">数据描述： <!></div> <div class="input-more-item svelte-n5iecj">占位符： <!></div> <div class="input-more-item svelte-n5iecj"><!></div></div>'), H_ = /* @__PURE__ */ pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>'), R_ = /* @__PURE__ */ te('<div class="input-item svelte-n5iecj"><!></div> <div class="input-item svelte-n5iecj"><!></div> <div class="input-item svelte-n5iecj"><!></div>', 1);
const B_ = {
  hash: "svelte-n5iecj",
  code: ".input-item.svelte-n5iecj {display:flex;align-items:center;}.input-more-setting.svelte-n5iecj {display:flex;flex-direction:column;gap:10px;padding:10px;background:var(--background);border:1px solid var(--border);border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-n5iecj .input-more-item:where(.svelte-n5iecj) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:var(--muted-foreground);}"
};
function jh(e, t) {
  ce(t, !0), Ze(e, B_);
  const n = y(t, "parameter", 7), r = y(t, "index", 7);
  let o = nt(), i = Gn(o), s = /* @__PURE__ */ N(() => ({ ...n(), ...i?.current?.data?.parameters[r()] }));
  const { updateNodeData: a } = ft(), l = (O, H) => {
    a(o, (Z) => {
      let I = Z.data.parameters;
      return I[r()][O] = H, { parameters: I };
    });
  }, c = (O, H) => {
    const Z = H.target.value;
    l(O, Z);
  }, d = (O) => {
    const H = O.target.value;
    l("name", H);
  }, f = (O) => {
    l("required", O);
  }, h = (O) => {
    const H = O.value;
    l("formType", H);
  }, g = (O) => {
    const H = O.value;
    l("contentType", H);
  };
  let v;
  const p = () => {
    a(o, (O) => {
      let H = O.data.parameters;
      return H.splice(r(), 1), { parameters: [...H] };
    }), v?.hide();
  };
  var w = {
    get parameter() {
      return n();
    },
    set parameter(O) {
      n(O), m();
    },
    get index() {
      return r();
    },
    set index(O) {
      r(O), m();
    }
  }, b = R_(), k = oe(b), E = F(k);
  rt(E, {
    style: "width: 100%;",
    get value() {
      return u(s).name;
    },
    placeholder: "请输入参数名称",
    oninput: d
  }), B(k);
  var _ = L(k, 2), S = F(_);
  Kh(S, {
    get checked() {
      return u(s).required;
    },
    onCheckedChange: f
  }), B(_);
  var T = L(_, 2), V = F(T);
  return dt(
    yr(V, {
      placement: "bottom",
      floating: (H) => {
        var Z = L_(), I = F(Z), P = L(F(I));
        {
          let R = /* @__PURE__ */ N(() => u(s).contentType ? [u(s).contentType] : []);
          gt(P, {
            get items() {
              return wl;
            },
            style: "width: 100%",
            defaultValue: ["text"],
            get value() {
              return u(R);
            },
            onSelect: g
          });
        }
        B(I);
        var A = L(I, 2), x = L(F(A));
        {
          let R = /* @__PURE__ */ N(() => u(s).formType ? [u(s).formType] : []);
          gt(x, {
            get items() {
              return Q2;
            },
            style: "width: 100%",
            defaultValue: ["input"],
            get value() {
              return u(R);
            },
            onSelect: h
          });
        }
        B(A);
        var C = L(A, 2);
        {
          var M = (R) => {
            var j = I_(), ee = L(F(j));
            {
              let ne = /* @__PURE__ */ N(() => u(s).enums?.join(`
`));
              Ye(ee, {
                rows: 3,
                style: "width: 100%;",
                onchange: (J) => {
                  l("enums", J.target?.value.trim().split(`
`));
                },
                get value() {
                  return u(ne);
                },
                placeholder: "一行一个选项"
              });
            }
            B(j), D(R, j);
          };
          se(C, (R) => {
            (u(s).formType === "radio" || u(s).formType === "checkbox" || u(s).formType === "select") && R(M);
          });
        }
        var z = L(C, 2), K = L(F(z));
        Ye(K, {
          rows: 1,
          style: "width: 100%;",
          onchange: (R) => {
            c("formLabel", R);
          },
          get value() {
            return u(s).formLabel;
          }
        }), B(z);
        var X = L(z, 2), $ = L(F(X));
        Ye($, {
          rows: 2,
          style: "width: 100%;",
          onchange: (R) => {
            c("formDescription", R);
          },
          get value() {
            return u(s).formDescription;
          }
        }), B(X);
        var Y = L(X, 2), U = L(F(Y));
        Ye(U, {
          rows: 2,
          style: "width: 100%;",
          onchange: (R) => {
            c("formPlaceholder", R);
          },
          get value() {
            return u(s).formPlaceholder;
          }
        }), B(Y);
        var W = L(Y, 2), G = F(W);
        ze(G, {
          variant: "destructive",
          onclick: p,
          children: (R, j) => {
            ye();
            var ee = Ne("删除");
            D(R, ee);
          },
          $$slots: { default: !0 }
        }), B(W), B(Z), D(H, Z);
      },
      children: (H, Z) => {
        ze(H, {
          size: "icon-xs",
          class: "input-btn-more",
          children: (I, P) => {
            var A = H_();
            D(I, A);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (H) => v = H,
    () => v
  ), B(T), D(e, b), ue(w);
}
ae(jh, { parameter: {}, index: {} }, [], [], !0);
var F_ = /* @__PURE__ */ te('<div class="input-header svelte-1yp5n1k">参数名称</div> <div class="input-header svelte-1yp5n1k">必填</div> <div class="input-header svelte-1yp5n1k"></div>', 1), K_ = /* @__PURE__ */ te('<div class="none-params svelte-1yp5n1k">无输入参数</div>'), W_ = /* @__PURE__ */ te('<div class="input-container svelte-1yp5n1k"><!> <!></div>');
const Z_ = {
  hash: "svelte-1yp5n1k",
  code: `.input-container.svelte-1yp5n1k {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1yp5n1k .none-params:where(.svelte-1yp5n1k) {font-size:12px;background:var(--secondary);height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1yp5n1k .input-header:where(.svelte-1yp5n1k) {font-size:12px;color:var(--muted-foreground);}`
};
function Xh(e, t) {
  ce(t, !0), Ze(e, Z_);
  let n = nt(), r = Gn(n), o = /* @__PURE__ */ N(() => [...r?.current?.data?.parameters || []]);
  var i = W_(), s = F(i);
  {
    var a = (c) => {
      var d = F_();
      ye(4), D(c, d);
    };
    se(s, (c) => {
      u(o).length !== 0 && c(a);
    });
  }
  var l = L(s, 2);
  pt(
    l,
    19,
    () => u(o),
    (c) => c.id,
    (c, d, f) => {
      jh(c, {
        get parameter() {
          return u(d);
        },
        get index() {
          return u(f);
        }
      });
    },
    (c) => {
      var d = K_();
      D(c, d);
    }
  ), B(i), D(e, i), ue();
}
ae(Xh, {}, [], [], !0);
const Wo = (e) => (!e || e.length == 0 || e.forEach((t) => {
  t.id || (t.id = Wn()), Wo(t.children);
}), e), gn = () => {
  const { updateNodeData: e } = ft();
  return {
    addParameter: (t, n = "parameters", r) => {
      Array.isArray(r) ? r.forEach((s) => Wo(s?.children)) : Wo(r?.children);
      function o(s) {
        return {
          name: "",
          dataType: "String",
          refType: "ref",
          ...s,
          id: Wn()
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
var Y_ = /* @__PURE__ */ pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), j_ = /* @__PURE__ */ pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), X_ = /* @__PURE__ */ te('<div class="heading svelte-llt1qy"><!> <!></div> <!>', 1);
const q_ = {
  hash: "svelte-llt1qy",
  code: ".heading.svelte-llt1qy {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:var(--muted);border:1px solid transparent;}"
};
function qh(e, t) {
  ce(t, !0), Ze(e, q_);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Re(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = nt(), { addParameter: i } = gn();
  var s = {
    get data() {
      return n();
    },
    set data(a) {
      n(a), m();
    }
  };
  return en(e, We(() => r, {
    get data() {
      return n();
    },
    allowExecute: !1,
    showTargetHandle: !1,
    allowSettingOfCondition: !1,
    icon: (l) => {
      var c = Y_();
      D(l, c);
    },
    children: (l, c) => {
      var d = X_(), f = oe(d), h = F(f);
      Ve(h, {
        level: 3,
        children: (p, w) => {
          ye();
          var b = Ne("输入参数");
          D(p, b);
        },
        $$slots: { default: !0 }
      });
      var g = L(h, 2);
      ze(g, {
        size: "icon-xs",
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: () => {
          i(o, "parameters", { refType: "input", name: "newParam" });
        },
        children: (p, w) => {
          var b = j_();
          D(p, b);
        },
        $$slots: { default: !0 }
      }), B(f);
      var v = L(f, 2);
      Xh(v, {}), D(l, d);
    },
    $$slots: { icon: !0, default: !0 }
  })), ue(s);
}
ae(qh, { data: {} }, [], [], !0);
const Gh = (e, t, n) => {
  for (const r of n)
    r.target === t && r.source && (e.push(r.source), Gh(e, r.source, n));
}, Uh = (e, t, n) => !e || e.length === 0 ? [] : e.map((r) => ({
  label: r.name + (n ? ` (Array<${r.dataType || "String"}>)` : ` (${r.dataType || "String"})`),
  value: t + "." + r.name,
  children: Uh(r.children, t + "." + r.name, n)
})), tu = (e, t, n) => {
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
          children: Uh(r, e.id, t)
        };
    }
  }
}, Jh = (e = !1) => {
  const t = nt(), n = Gn(t), r = /* @__PURE__ */ N(hn), o = /* @__PURE__ */ N(() => u(r).nodes), i = /* @__PURE__ */ N(() => u(r).edges), s = /* @__PURE__ */ N(() => u(r).nodeLookup);
  let a = /* @__PURE__ */ N(() => {
    const l = [];
    if (!n.current)
      return [];
    const c = u(s).get(t);
    if (e)
      for (const d of u(o)) {
        const f = d.parentId === n.current.id;
        if (f) {
          const h = tu(d, f, c);
          h && l.push(h);
        }
      }
    else {
      const d = [];
      Gh(d, t, u(i));
      for (const f of u(o))
        if (d.includes(f.id)) {
          const h = f.parentId === n.current.id, g = tu(f, h, c);
          g && l.push(g);
        }
    }
    return l;
  });
  return {
    get current() {
      return u(a);
    }
  };
};
var G_ = /* @__PURE__ */ te('<div class="input-more-item svelte-jmeys3">数据内容： <!></div>'), U_ = /* @__PURE__ */ te('<div class="input-more-setting svelte-jmeys3"><div class="input-more-item svelte-jmeys3">数据来源： <!></div> <!> <div class="input-more-item svelte-jmeys3">默认值： <!></div> <div class="input-more-item svelte-jmeys3">参数描述： <!></div> <div class="input-more-item svelte-jmeys3"><!></div></div>'), J_ = /* @__PURE__ */ te('<div class="input-item svelte-jmeys3"><!></div> <div class="input-item svelte-jmeys3"><!></div> <div class="input-item svelte-jmeys3"><!></div>', 1);
const Q_ = {
  hash: "svelte-jmeys3",
  code: ".input-item.svelte-jmeys3 {display:flex;align-items:center;}.input-more-setting.svelte-jmeys3 {display:flex;flex-direction:column;gap:10px;padding:10px;background:var(--background);border:1px solid var(--border);border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-jmeys3 .input-more-item:where(.svelte-jmeys3) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:var(--muted-foreground);}"
};
function Qh(e, t) {
  ce(t, !0), Ze(e, Q_), Tn(() => {
    u(c).refType || v({ value: "ref" });
  });
  const n = y(t, "parameter", 7), r = y(t, "index", 7), o = y(t, "dataKeyName", 7), i = y(t, "useChildrenOnly", 7), s = y(t, "showContentType", 7, !1);
  let a = nt(), l = Gn(a), c = /* @__PURE__ */ N(() => ({
    ...n(),
    ...l?.current?.data?.[o()][r()]
  }));
  const { updateNodeData: d } = ft(), f = (A, x) => {
    d(a, (C) => {
      let M = C.data?.[o()];
      return M[r()] = { ...M[r()], [A]: x }, { [o()]: M };
    });
  }, h = (A, x) => {
    const C = x.target.value;
    f(A, C);
  }, g = (A) => {
    const x = A.value;
    f("ref", x);
  }, v = (A) => {
    const x = A.value;
    f("refType", x);
  }, p = (A) => {
    const x = A.value;
    f("contentType", x);
  };
  let w;
  const b = () => {
    d(a, (A) => {
      let x = A.data?.[o()];
      return x.splice(r(), 1), { [o()]: [...x] };
    }), w?.hide();
  };
  let k = Jh(i());
  var E = {
    get parameter() {
      return n();
    },
    set parameter(A) {
      n(A), m();
    },
    get index() {
      return r();
    },
    set index(A) {
      r(A), m();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(A) {
      o(A), m();
    },
    get useChildrenOnly() {
      return i();
    },
    set useChildrenOnly(A) {
      i(A), m();
    },
    get showContentType() {
      return s();
    },
    set showContentType(A = !1) {
      s(A), m();
    }
  }, _ = J_(), S = oe(_), T = F(S);
  {
    let A = /* @__PURE__ */ N(() => u(c).nameDisabled === !0);
    rt(T, {
      style: "width: 100%;",
      get value() {
        return u(c).name;
      },
      placeholder: "请输入参数名称",
      get disabled() {
        return u(A);
      },
      oninput: (x) => h("name", x)
    });
  }
  B(S);
  var V = L(S, 2), O = F(V);
  {
    var H = (A) => {
      rt(A, {
        get value() {
          return u(c).value;
        },
        placeholder: "请输入参数值",
        oninput: (x) => h("value", x)
      });
    }, Z = (A) => {
      var x = _e(), C = oe(x);
      {
        var M = (z) => {
          {
            let K = /* @__PURE__ */ N(() => [u(c).ref]);
            gt(z, {
              get items() {
                return k.current;
              },
              style: "width: 100%",
              defaultValue: ["ref"],
              get value() {
                return u(K);
              },
              expandAll: !0,
              onSelect: g
            });
          }
        };
        se(
          C,
          (z) => {
            u(c).refType !== "input" && z(M);
          },
          !0
        );
      }
      D(A, x);
    };
    se(O, (A) => {
      u(c).refType === "fixed" ? A(H) : A(Z, !1);
    });
  }
  B(V);
  var I = L(V, 2), P = F(I);
  return dt(
    yr(P, {
      placement: "bottom",
      floating: (x) => {
        var C = U_(), M = F(C), z = L(F(M));
        {
          let j = /* @__PURE__ */ N(() => u(c).refType ? [u(c).refType] : []);
          gt(z, {
            get items() {
              return J2;
            },
            style: "width: 100%",
            defaultValue: ["ref"],
            get value() {
              return u(j);
            },
            onSelect: v
          });
        }
        B(M);
        var K = L(M, 2);
        {
          var X = (j) => {
            var ee = G_(), ne = L(F(ee));
            {
              let J = /* @__PURE__ */ N(() => u(c).contentType ? [u(c).contentType] : []);
              gt(ne, {
                get items() {
                  return wl;
                },
                style: "width: 100%",
                defaultValue: ["text"],
                get value() {
                  return u(J);
                },
                onSelect: p
              });
            }
            B(ee), D(j, ee);
          };
          se(K, (j) => {
            s() && j(X);
          });
        }
        var $ = L(K, 2), Y = L(F($));
        Ye(Y, {
          rows: 1,
          style: "width: 100%;",
          onchange: (j) => {
            h("defaultValue", j);
          },
          get value() {
            return u(c).defaultValue;
          },
          placeholder: "请输入参数默认值"
        }), B($);
        var U = L($, 2), W = L(F(U));
        Ye(W, {
          rows: 3,
          style: "width: 100%;",
          onchange: (j) => {
            h("description", j);
          },
          get value() {
            return u(c).description;
          },
          placeholder: "请输入参数描述"
        }), B(U);
        var G = L(U, 2), R = F(G);
        ze(R, {
          variant: "destructive",
          onclick: b,
          children: (j, ee) => {
            ye();
            var ne = Ne("删除");
            D(j, ne);
          },
          $$slots: { default: !0 }
        }), B(G), B(C), D(x, C);
      },
      children: (x, C) => {
        ci(x, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (x) => w = x,
    () => w
  ), B(I), D(e, _), ue(E);
}
ae(
  Qh,
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
var e5 = /* @__PURE__ */ te('<div class="input-header svelte-32f1pk">参数名称</div> <div class="input-header svelte-32f1pk">参数值</div> <div class="input-header svelte-32f1pk"></div>', 1), t5 = /* @__PURE__ */ te('<div class="none-params svelte-32f1pk"> </div>'), n5 = /* @__PURE__ */ te('<div class="input-container svelte-32f1pk"><!> <!></div>');
const r5 = {
  hash: "svelte-32f1pk",
  code: `.input-container.svelte-32f1pk {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-32f1pk .none-params:where(.svelte-32f1pk) {font-size:12px;background:var(--secondary);height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-32f1pk .input-header:where(.svelte-32f1pk) {font-size:12px;color:var(--muted-foreground);}`
};
function $t(e, t) {
  ce(t, !0), Ze(e, r5);
  const n = y(t, "noneParameterText", 7, "无输入参数"), r = y(t, "dataKeyName", 7, "parameters"), o = y(t, "useChildrenOnly", 7), i = y(t, "showContentType", 7, !1);
  let s = nt(), a = Gn(s), l = /* @__PURE__ */ N(() => [...a?.current?.data?.[r()] || []]);
  var c = {
    get noneParameterText() {
      return n();
    },
    set noneParameterText(v = "无输入参数") {
      n(v), m();
    },
    get dataKeyName() {
      return r();
    },
    set dataKeyName(v = "parameters") {
      r(v), m();
    },
    get useChildrenOnly() {
      return o();
    },
    set useChildrenOnly(v) {
      o(v), m();
    },
    get showContentType() {
      return i();
    },
    set showContentType(v = !1) {
      i(v), m();
    }
  }, d = n5(), f = F(d);
  {
    var h = (v) => {
      var p = e5();
      ye(4), D(v, p);
    };
    se(f, (v) => {
      u(l).length !== 0 && v(h);
    });
  }
  var g = L(f, 2);
  return pt(
    g,
    19,
    () => u(l),
    (v) => v.id,
    (v, p, w) => {
      Qh(v, {
        get parameter() {
          return u(p);
        },
        get index() {
          return u(w);
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
    (v) => {
      var p = t5(), w = F(p, !0);
      B(p), Ee(() => Xe(w, n())), D(v, p);
    }
  ), B(d), D(e, d), ue(c);
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
var o5 = /* @__PURE__ */ pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), i5 = /* @__PURE__ */ pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), s5 = /* @__PURE__ */ te('<div class="heading svelte-1fiuxu3"><!> <!></div> <!>', 1);
const a5 = {
  hash: "svelte-1fiuxu3",
  code: ".heading.svelte-1fiuxu3 {display:flex;margin-bottom:10px;}"
};
function eg(e, t) {
  ce(t, !0), Ze(e, a5);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Re(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = nt(), { addParameter: i } = gn();
  var s = {
    get data() {
      return n();
    },
    set data(a) {
      n(a), m();
    }
  };
  return en(e, We(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      allowExecute: !1,
      showSourceHandle: !1,
      icon: (l) => {
        var c = o5();
        D(l, c);
      },
      children: (l, c) => {
        var d = s5(), f = oe(d), h = F(f);
        Ve(h, {
          level: 3,
          children: (p, w) => {
            ye();
            var b = Ne("输出参数");
            D(p, b);
          },
          $$slots: { default: !0 }
        });
        var g = L(h, 2);
        ze(g, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs", { name: "output" });
          },
          children: (p, w) => {
            var b = i5();
            D(p, b);
          },
          $$slots: { default: !0 }
        }), B(f);
        var v = L(f, 2);
        $t(v, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs",
          showContentType: !0
        }), D(l, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(s);
}
ae(eg, { data: {} }, [], [], !0);
const Gs = (e) => JSON.parse(JSON.stringify(e));
var l5 = /* @__PURE__ */ pe('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), c5 = /* @__PURE__ */ te('<div class="input-more-item svelte-hwmib9"><!></div>'), u5 = /* @__PURE__ */ te('<div class="input-more-setting svelte-hwmib9"><div class="input-more-item svelte-hwmib9">默认值： <!></div> <div class="input-more-item svelte-hwmib9">参数描述： <!></div> <!></div>'), d5 = /* @__PURE__ */ te('<div class="input-item svelte-hwmib9"><!> <!></div> <div class="input-item svelte-hwmib9"><!> <!></div> <div class="input-item svelte-hwmib9"><!></div>', 1);
const f5 = {
  hash: "svelte-hwmib9",
  code: ".input-item.svelte-hwmib9 {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-hwmib9 {display:flex;flex-direction:column;gap:10px;padding:10px;background:var(--background);border:1px solid var(--border);border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-hwmib9 .input-more-item:where(.svelte-hwmib9) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:var(--muted-foreground);}"
};
function tg(e, t) {
  ce(t, !0), Ze(e, f5);
  const n = y(t, "parameter", 7), r = y(t, "position", 7), o = y(t, "dataKeyName", 7), i = y(t, "placeholder", 7, "请输入参数值");
  let s = nt(), a = Gn(s), l = /* @__PURE__ */ N(() => {
    let P = a?.current?.data?.[o()], A;
    if (P && r().length > 0) {
      let x = P;
      for (let C = 0; C < r().length; C++) {
        const M = r()[C];
        C == r().length - 1 ? A = x[M] : x = x[M].children;
      }
    }
    return { ...n(), ...A };
  });
  const { updateNodeData: c } = ft(), d = (P, A) => {
    c(s, (x) => {
      const C = x.data?.[o()];
      if (C && r().length > 0) {
        let M = C;
        for (let z = 0; z < r().length; z++) {
          const K = r()[z];
          z == r().length - 1 ? M[K] = { ...M[K], [P]: A } : M = M[K].children;
        }
      }
      return { [o()]: [...Gs(C)] };
    });
  }, f = (P, A) => {
    const x = A.target.value;
    d(P, x);
  }, h = (P) => {
    const A = P.value;
    d("dataType", A);
  };
  let g;
  const v = () => {
    c(s, (P) => {
      let A = P.data?.[o()];
      if (A && r().length > 0) {
        let x = A;
        for (let C = 0; C < r().length; C++) {
          const M = r()[C];
          C == r().length - 1 ? x.splice(M, 1) : x = x[M].children;
        }
      }
      return { [o()]: [...Gs(A)] };
    }), g?.hide();
  }, p = () => {
    c(s, (P) => {
      let A = P.data?.[o()];
      if (A && r().length > 0) {
        let x = A;
        for (let C = 0; C < r().length; C++) {
          const M = r()[C];
          C == r().length - 1 ? x[M].children ? x[M].children.push({ id: Wn(), name: "newParam", dataType: "String" }) : x[M].children = [{ id: Wn(), name: "newParam", dataType: "String" }] : x = x[M].children;
        }
      }
      return { [o()]: [...Gs(A)] };
    });
  };
  var w = {
    get parameter() {
      return n();
    },
    set parameter(P) {
      n(P), m();
    },
    get position() {
      return r();
    },
    set position(P) {
      r(P), m();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(P) {
      o(P), m();
    },
    get placeholder() {
      return i();
    },
    set placeholder(P = "请输入参数值") {
      i(P), m();
    }
  }, b = d5(), k = oe(b), E = F(k);
  {
    var _ = (P) => {
      var A = _e(), x = oe(A);
      pt(x, 17, r, Or, (C, M) => {
        ye();
        var z = Ne(" ");
        D(C, z);
      }), D(P, A);
    };
    se(E, (P) => {
      r().length > 1 && P(_);
    });
  }
  var S = L(E, 2);
  {
    let P = /* @__PURE__ */ N(() => u(l).nameDisabled === !0);
    rt(S, {
      style: "width: 100%;",
      get value() {
        return u(l).name;
      },
      get placeholder() {
        return i();
      },
      oninput: (A) => {
        f("name", A);
      },
      get disabled() {
        return u(P);
      }
    });
  }
  B(k);
  var T = L(k, 2), V = F(T);
  {
    let P = /* @__PURE__ */ N(() => u(l).dataTypeItems || U2), A = /* @__PURE__ */ N(() => u(l).dataType ? [u(l).dataType] : []), x = /* @__PURE__ */ N(() => u(l).dataTypeDisabled === !0);
    gt(V, {
      get items() {
        return u(P);
      },
      style: "width: 100%",
      defaultValue: ["String"],
      get value() {
        return u(A);
      },
      get disabled() {
        return u(x);
      },
      onSelect: h
    });
  }
  var O = L(V, 2);
  {
    var H = (P) => {
      ze(P, {
        size: "icon-xs",
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: p,
        children: (A, x) => {
          var C = l5();
          D(A, C);
        },
        $$slots: { default: !0 }
      });
    };
    se(O, (P) => {
      (u(l).dataType === "Object" || u(l).dataType === "Array") && u(l).addChildDisabled !== !0 && P(H);
    });
  }
  B(T);
  var Z = L(T, 2), I = F(Z);
  return dt(
    yr(I, {
      placement: "bottom",
      floating: (A) => {
        var x = u5(), C = F(x), M = L(F(C));
        {
          let Y = /* @__PURE__ */ N(() => u(l).defaultValue || "");
          Ye(M, {
            rows: 1,
            style: "width: 100%;",
            get value() {
              return u(Y);
            },
            onchange: (U) => {
              f("defaultValue", U);
            }
          });
        }
        B(C);
        var z = L(C, 2), K = L(F(z));
        {
          let Y = /* @__PURE__ */ N(() => u(l).description || "");
          Ye(K, {
            rows: 3,
            style: "width: 100%;",
            get value() {
              return u(Y);
            },
            onchange: (U) => {
              f("description", U);
            }
          });
        }
        B(z);
        var X = L(z, 2);
        {
          var $ = (Y) => {
            var U = c5(), W = F(U);
            ze(W, {
              variant: "destructive",
              onclick: v,
              children: (G, R) => {
                ye();
                var j = Ne("删除");
                D(G, j);
              },
              $$slots: { default: !0 }
            }), B(U), D(Y, U);
          };
          se(X, (Y) => {
            u(l).deleteDisabled !== !0 && Y($);
          });
        }
        B(x), D(A, x);
      },
      children: (A, x) => {
        ci(A, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (A) => g = A,
    () => g
  ), B(Z), D(e, b), ue(w);
}
ae(
  tg,
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
var h5 = /* @__PURE__ */ te("<!> <!>", 1), g5 = /* @__PURE__ */ te('<div class="none-params svelte-1oz5kx0"> </div>'), v5 = /* @__PURE__ */ te('<div class="input-header svelte-1oz5kx0">参数名称</div> <div class="input-header svelte-1oz5kx0">参数类型</div> <div class="input-header svelte-1oz5kx0"></div>', 1), p5 = /* @__PURE__ */ te('<div class="input-container svelte-1oz5kx0"><!> <!></div>');
const m5 = {
  hash: "svelte-1oz5kx0",
  code: `.input-container.svelte-1oz5kx0 {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1oz5kx0 .none-params:where(.svelte-1oz5kx0) {font-size:12px;background:var(--secondary);height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1oz5kx0 .input-header:where(.svelte-1oz5kx0) {font-size:12px;color:var(--muted-foreground);}`
};
function Jn(e, t) {
  ce(t, !0), Ze(e, m5);
  const n = (v, p = tt, w = tt) => {
    var b = _e(), k = oe(b);
    pt(
      k,
      19,
      p,
      (E) => `${E.id}_${E.children ? E.children.length : 0}`,
      (E, _, S) => {
        var T = h5(), V = oe(T);
        {
          let Z = /* @__PURE__ */ N(() => [...w(), u(S)]);
          tg(V, {
            get parameter() {
              return u(_);
            },
            get position() {
              return u(Z);
            },
            get dataKeyName() {
              return o();
            },
            get placeholder() {
              return i();
            }
          });
        }
        var O = L(V, 2);
        {
          var H = (Z) => {
            {
              let I = /* @__PURE__ */ N(() => [...w(), u(S)]);
              n(Z, () => u(_).children, () => u(I));
            }
          };
          se(O, (Z) => {
            u(_).children && Z(H);
          });
        }
        D(E, T);
      },
      (E) => {
        var _ = _e(), S = oe(_);
        {
          var T = (V) => {
            var O = g5(), H = F(O, !0);
            B(O), Ee(() => Xe(H, r())), D(V, O);
          };
          se(S, (V) => {
            w().length === 0 && V(T);
          });
        }
        D(E, _);
      }
    ), D(v, b);
  }, r = y(t, "noneParameterText", 7, "无输出参数"), o = y(t, "dataKeyName", 7, "outputDefs"), i = y(t, "placeholder", 7, "请输入参数名称");
  let s = nt(), a = Gn(s), l = /* @__PURE__ */ N(() => [...a?.current?.data?.[o()] || []]);
  var c = {
    get noneParameterText() {
      return r();
    },
    set noneParameterText(v = "无输出参数") {
      r(v), m();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(v = "outputDefs") {
      o(v), m();
    },
    get placeholder() {
      return i();
    },
    set placeholder(v = "请输入参数名称") {
      i(v), m();
    }
  }, d = p5(), f = F(d);
  {
    var h = (v) => {
      var p = v5();
      ye(4), D(v, p);
    };
    se(f, (v) => {
      u(l).length !== 0 && v(h);
    });
  }
  var g = L(f, 2);
  return n(g, () => u(l) || [], () => []), B(d), D(e, d), ue(c);
}
ae(Jn, { noneParameterText: {}, dataKeyName: {}, placeholder: {} }, [], [], !0);
var y5 = /* @__PURE__ */ pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), w5 = /* @__PURE__ */ pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), b5 = /* @__PURE__ */ pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), x5 = /* @__PURE__ */ te('<div class="llm-setting svelte-j81vcl"><div class="setting-title svelte-j81vcl">采样参数</div> <div class="setting-item svelte-j81vcl"><div class="slider-container svelte-j81vcl"><span class="svelte-j81vcl"> </span> <input class="nodrag svelte-j81vcl" type="range" min="0" max="1" step="0.1"/></div></div> <div class="setting-item svelte-j81vcl"><div class="slider-container svelte-j81vcl"><span class="svelte-j81vcl"> </span> <input class="nodrag svelte-j81vcl" type="range" min="0" max="1" step="0.1"/></div></div> <div class="setting-item svelte-j81vcl"><div class="slider-container svelte-j81vcl"><span class="svelte-j81vcl"> </span> <input class="nodrag svelte-j81vcl" type="range" min="0" max="100" step="1"/></div></div></div>'), _5 = /* @__PURE__ */ te('<div class="setting-title svelte-j81vcl">JSON Schema</div> <div class="setting-item svelte-j81vcl"><!></div>', 1), C5 = /* @__PURE__ */ te('<div class="heading svelte-j81vcl"><!> <!></div> <!> <div class="heading svelte-j81vcl" style="padding-top: 10px"><!> <!></div> <!> <!> <div class="setting-title svelte-j81vcl">模型</div> <div class="setting-item svelte-j81vcl"><!> <!></div> <div class="setting-title svelte-j81vcl">系统提示词</div> <div class="setting-item svelte-j81vcl"><!></div> <div class="setting-title svelte-j81vcl">用户提示词</div> <div class="setting-item svelte-j81vcl"><!></div> <!> <div class="heading svelte-j81vcl"><!> <!></div> <!>', 1);
const k5 = {
  hash: "svelte-j81vcl",
  code: `.heading.svelte-j81vcl {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-j81vcl {font-size:12px;color:var(--secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-j81vcl {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}\r
\r
    /* 新增样式 */.slider-container.svelte-j81vcl {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-j81vcl span:where(.svelte-j81vcl) {font-size:12px;color:var(--muted-foreground);display:flex;justify-content:space-between;align-items:center;}.llm-setting.svelte-j81vcl {width:200px;background:var(--background);padding:10px;border-radius:5px;box-shadow:0 0 10px rgba(0, 0, 0, 0.1);border:1px solid var(--border);}input[type='range'].svelte-j81vcl {width:100%;height:4px;background:var(--muted);border-radius:2px;outline:none;-webkit-appearance:none;}input[type='range'].svelte-j81vcl::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:var(--primary);border-radius:50%;cursor:pointer;}`
};
function ng(e, t) {
  ce(t, !0), Ze(e, k5);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Re(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = nt(), { addParameter: i } = gn(), s = fr();
  let a = /* @__PURE__ */ Pe(Ct([]));
  Tn(async () => {
    const f = await s.provider?.llm?.();
    u(a).push(...f || []);
  });
  const { updateNodeData: l } = ft(), c = (f) => {
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
    n().outType || c("text");
  });
  var d = {
    get data() {
      return n();
    },
    set data(f) {
      n(f), m();
    }
  };
  return en(e, We(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (h) => {
        var g = y5();
        D(h, g);
      },
      children: (h, g) => {
        var v = C5(), p = oe(v), w = F(p);
        Ve(w, {
          level: 3,
          children: (Y, U) => {
            ye();
            var W = Ne("输入参数");
            D(Y, W);
          },
          $$slots: { default: !0 }
        });
        var b = L(w, 2);
        ze(b, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (Y, U) => {
            var W = w5();
            D(Y, W);
          },
          $$slots: { default: !0 }
        }), B(p);
        var k = L(p, 2);
        $t(k, {});
        var E = L(k, 2), _ = F(E);
        Ve(_, {
          level: 3,
          children: (Y, U) => {
            ye();
            var W = Ne("图片识别");
            D(Y, W);
          },
          $$slots: { default: !0 }
        });
        var S = L(_, 2);
        ze(S, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "images");
          },
          children: (Y, U) => {
            var W = b5();
            D(Y, W);
          },
          $$slots: { default: !0 }
        }), B(E);
        var T = L(E, 2);
        $t(T, { dataKeyName: "images", noneParameterText: "无图片参数" });
        var V = L(T, 2);
        Ve(V, {
          level: 3,
          mt: "10px",
          children: (Y, U) => {
            ye();
            var W = Ne("模型设置");
            D(Y, W);
          },
          $$slots: { default: !0 }
        });
        var O = L(V, 4), H = F(O);
        {
          let Y = /* @__PURE__ */ N(() => n().llmId ? [n().llmId] : []);
          gt(H, {
            get items() {
              return u(a);
            },
            style: "width: 100%",
            placeholder: "请选择模型",
            onSelect: (U) => {
              const W = U.value;
              l(o, () => ({ llmId: W }));
            },
            get value() {
              return u(Y);
            }
          });
        }
        var Z = L(H, 2);
        yr(Z, {
          placement: "bottom",
          floating: (U) => {
            var W = x5(), G = L(F(W), 2), R = F(G), j = F(R), ee = F(j);
            B(j);
            var ne = L(j, 2);
            lr(ne), ne.__input = (Ae) => l(o, { temperature: parseFloat(Ae.target.value) }), B(R), B(G);
            var J = L(G, 2), Ce = F(J), ie = F(Ce), le = F(ie);
            B(ie);
            var re = L(ie, 2);
            lr(re), re.__input = (Ae) => l(o, { topP: parseFloat(Ae.target.value) }), B(Ce), B(J);
            var he = L(J, 2), me = F(he), Se = F(me), fe = F(Se);
            B(Se);
            var xe = L(Se, 2);
            lr(xe), xe.__input = (Ae) => l(o, { topK: parseInt(Ae.target.value) }), B(me), B(he), B(W), Ee(() => {
              Xe(ee, `Temperature: ${n().temperature ?? 0.5 ?? ""}`), Ei(ne, n().temperature ?? 0.5), Xe(le, `Top P: ${n().topP ?? 0.9 ?? ""}`), Ei(re, n().topP ?? 0.9), Xe(fe, `Top K: ${n().topK ?? 50 ?? ""}`), Ei(xe, n().topK ?? 50);
            }), D(U, W);
          },
          children: (U, W) => {
            ci(U, {});
          },
          $$slots: { floating: !0, default: !0 }
        }), B(O);
        var I = L(O, 4), P = F(I);
        {
          let Y = /* @__PURE__ */ N(() => n().systemPrompt || "");
          Ye(P, {
            rows: 5,
            placeholder: "请输入系统提示词",
            style: "width: 100%",
            get value() {
              return u(Y);
            },
            oninput: (U) => {
              l(o, { systemPrompt: U.target.value });
            }
          });
        }
        B(I);
        var A = L(I, 4), x = F(A);
        {
          let Y = /* @__PURE__ */ N(() => n().userPrompt || "");
          Ye(x, {
            rows: 5,
            placeholder: "请输入用户提示词",
            style: "width: 100%",
            get value() {
              return u(Y);
            },
            oninput: (U) => {
              l(o, { userPrompt: U.target.value });
            }
          });
        }
        B(A);
        var C = L(A, 2);
        {
          var M = (Y) => {
            var U = _5(), W = L(oe(U), 2), G = F(W);
            {
              let R = /* @__PURE__ */ N(() => n().jsonSchema || "");
              Ye(G, {
                rows: 5,
                placeholder: "请输入 SON Schema",
                style: "width: 100%",
                get value() {
                  return u(R);
                },
                oninput: (j) => {
                  l(o, { jsonSchema: j.target.value });
                }
              });
            }
            B(W), D(Y, U);
          };
          se(C, (Y) => {
            n().outType === "json" && Y(M);
          });
        }
        var z = L(C, 2), K = F(z);
        Ve(K, {
          level: 3,
          children: (Y, U) => {
            ye();
            var W = Ne("输出参数");
            D(Y, W);
          },
          $$slots: { default: !0 }
        });
        var X = L(K, 2);
        {
          let Y = /* @__PURE__ */ N(() => n().outType ? [n().outType] : []);
          gt(X, {
            items: [
              { label: "文本", value: "text" },
              { label: "JSON", value: "json" }
            ],
            style: "width: 100px;margin-left: auto",
            onSelect: (U) => {
              c(U.value);
            },
            get value() {
              return u(Y);
            }
          });
        }
        B(z);
        var $ = L(z, 2);
        Jn($, {}), D(h, v);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(d);
}
vr(["input"]);
ae(ng, { data: {} }, [], [], !0);
var S5 = /* @__PURE__ */ pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), E5 = /* @__PURE__ */ pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), N5 = /* @__PURE__ */ pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), P5 = /* @__PURE__ */ te('<div class="heading svelte-1wcsayx"><!> <!></div> <!> <!> <div class="setting-title svelte-1wcsayx">执行引擎</div> <div class="setting-item svelte-1wcsayx"><!></div> <div class="setting-title svelte-1wcsayx">执行代码</div> <div class="setting-item svelte-1wcsayx"><!></div> <div class="heading svelte-1wcsayx"><!> <!></div> <!>', 1);
const T5 = {
  hash: "svelte-1wcsayx",
  code: ".heading.svelte-1wcsayx {display:flex;margin-bottom:10px;}.setting-title.svelte-1wcsayx {font-size:12px;color:var(--secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-1wcsayx {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function rg(e, t) {
  ce(t, !0), Ze(e, T5);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Re(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]);
  Tn(() => {
    n().engine || s(o, () => ({ engine: "qlexpress" }));
  });
  const o = nt(), { addParameter: i } = gn(), { updateNodeData: s } = ft(), a = [
    { label: "JavaScript", value: "js" },
    { label: "Groovy", value: "groovy" },
    { label: "QLExpress", value: "qlexpress" }
  ];
  var l = {
    get data() {
      return n();
    },
    set data(c) {
      n(c), m();
    }
  };
  return en(e, We(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (d) => {
        var f = S5();
        D(d, f);
      },
      children: (d, f) => {
        var h = P5(), g = oe(h), v = F(g);
        Ve(v, {
          level: 3,
          children: (Z, I) => {
            ye();
            var P = Ne("输入参数");
            D(Z, P);
          },
          $$slots: { default: !0 }
        });
        var p = L(v, 2);
        ze(p, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (Z, I) => {
            var P = E5();
            D(Z, P);
          },
          $$slots: { default: !0 }
        }), B(g);
        var w = L(g, 2);
        $t(w, {});
        var b = L(w, 2);
        Ve(b, {
          level: 3,
          mt: "10px",
          children: (Z, I) => {
            ye();
            var P = Ne("代码");
            D(Z, P);
          },
          $$slots: { default: !0 }
        });
        var k = L(b, 4), E = F(k);
        {
          let Z = /* @__PURE__ */ N(() => n().engine ? [n().engine] : ["qlexpress"]);
          gt(E, {
            get items() {
              return a;
            },
            style: "width: 100%",
            placeholder: "请选择执行引擎",
            onSelect: (I) => {
              const P = I.value;
              s(o, () => ({ engine: P }));
            },
            get value() {
              return u(Z);
            }
          });
        }
        B(k);
        var _ = L(k, 4), S = F(_);
        {
          let Z = /* @__PURE__ */ N(() => n().code || "");
          Ye(S, {
            rows: 10,
            placeholder: "请输入执行代码，注：输出内容需添加到_result中，如：_result['key'] = value 或者 _result.key = value",
            style: "width: 100%",
            onchange: (I) => {
              s(o, () => ({ code: I.target.value }));
            },
            get value() {
              return u(Z);
            }
          });
        }
        B(_);
        var T = L(_, 2), V = F(T);
        Ve(V, {
          level: 3,
          mt: "10px",
          children: (Z, I) => {
            ye();
            var P = Ne("输出参数");
            D(Z, P);
          },
          $$slots: { default: !0 }
        });
        var O = L(V, 2);
        ze(O, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (Z, I) => {
            var P = N5();
            D(Z, P);
          },
          $$slots: { default: !0 }
        }), B(T);
        var H = L(T, 2);
        Jn(H, {}), D(d, h);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(l);
}
ae(rg, { data: {} }, [], [], !0);
var A5 = /* @__PURE__ */ pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>'), $5 = /* @__PURE__ */ pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), M5 = /* @__PURE__ */ te('<div class="heading svelte-1lcrzpc"><!> <!></div> <!> <!> <div class="setting-item svelte-1lcrzpc"><!></div> <div class="heading svelte-1lcrzpc"><!></div> <!>', 1);
const D5 = {
  hash: "svelte-1lcrzpc",
  code: ".heading.svelte-1lcrzpc {display:flex;margin-bottom:10px;}.setting-item.svelte-1lcrzpc {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function og(e, t) {
  ce(t, !0), Ze(e, D5);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Re(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = nt(), { addParameter: i } = gn(), { updateNodeData: s } = ft();
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
      n(l), m();
    }
  };
  return en(e, We(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (c) => {
        var d = A5();
        D(c, d);
      },
      children: (c, d) => {
        var f = M5(), h = oe(f), g = F(h);
        Ve(g, {
          level: 3,
          children: (T, V) => {
            ye();
            var O = Ne("输入参数");
            D(T, O);
          },
          $$slots: { default: !0 }
        });
        var v = L(g, 2);
        ze(v, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (T, V) => {
            var O = $5();
            D(T, O);
          },
          $$slots: { default: !0 }
        }), B(h);
        var p = L(h, 2);
        $t(p, {});
        var w = L(p, 2);
        Ve(w, {
          level: 3,
          mt: "10px",
          mb: "10px",
          children: (T, V) => {
            ye();
            var O = Ne("模板内容");
            D(T, O);
          },
          $$slots: { default: !0 }
        });
        var b = L(w, 2), k = F(b);
        {
          let T = /* @__PURE__ */ N(() => n().template || "");
          Ye(k, {
            rows: 10,
            placeholder: "请输入模板内容",
            style: "width: 100%",
            onchange: (V) => {
              s(o, () => ({ template: V.target.value }));
            },
            get value() {
              return u(T);
            }
          });
        }
        B(b);
        var E = L(b, 2), _ = F(E);
        Ve(_, {
          level: 3,
          mt: "10px",
          children: (T, V) => {
            ye();
            var O = Ne("输出参数");
            D(T, O);
          },
          $$slots: { default: !0 }
        }), B(E);
        var S = L(E, 2);
        Jn(S, {}), D(c, f);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(a);
}
ae(og, { data: {} }, [], [], !0);
var O5 = /* @__PURE__ */ pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), z5 = /* @__PURE__ */ pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), V5 = /* @__PURE__ */ pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), I5 = /* @__PURE__ */ te('<!> <div class="radio-group svelte-19uflw6"><label class="svelte-19uflw6"><!>none</label> <label class="svelte-19uflw6"><!>form-data</label> <label class="svelte-19uflw6"><!>x-www-form-urlencoded</label> <label class="svelte-19uflw6"><!>json</label> <label class="svelte-19uflw6"><!>raw</label></div>', 1), L5 = /* @__PURE__ */ pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), H5 = /* @__PURE__ */ te('<div class="heading svelte-19uflw6" style="padding-top: 10px"><!> <!></div> <!>', 1), R5 = /* @__PURE__ */ pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), B5 = /* @__PURE__ */ te('<div class="heading svelte-19uflw6" style="padding-top: 10px"><!> <!></div> <!>', 1), F5 = /* @__PURE__ */ te('<div style="width: 100%"><!></div>'), K5 = /* @__PURE__ */ te('<div style="width: 100%"><!></div>'), W5 = /* @__PURE__ */ pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Z5 = /* @__PURE__ */ te('<div class="heading svelte-19uflw6"><!> <!></div> <!> <!> <div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-19uflw6"><!> <!></div> <!> <!> <!> <!> <!> <!> <div class="heading svelte-19uflw6"><!> <!></div> <!>', 1);
const Y5 = {
  hash: "svelte-19uflw6",
  code: ".heading.svelte-19uflw6 {display:flex;margin-bottom:10px;}.radio-group.svelte-19uflw6 {display:flex;margin:10px 0;flex-wrap:wrap;}.radio-group.svelte-19uflw6 label:where(.svelte-19uflw6) {display:flex;font-size:14px;box-sizing:border-box;}"
};
function ig(e, t) {
  ce(t, !0), Ze(e, Y5);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Re(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]);
  Tn(() => {
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
  ], i = nt(), { addParameter: s } = gn(), { updateNodeData: a } = ft();
  var l = {
    get data() {
      return n();
    },
    set data(c) {
      n(c), m();
    }
  };
  return en(e, We(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (d) => {
        var f = O5();
        D(d, f);
      },
      children: (d, f) => {
        var h = Z5(), g = oe(h), v = F(g);
        Ve(v, {
          level: 3,
          children: (R, j) => {
            ye();
            var ee = Ne("输入参数");
            D(R, ee);
          },
          $$slots: { default: !0 }
        });
        var p = L(v, 2);
        ze(p, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i);
          },
          children: (R, j) => {
            var ee = z5();
            D(R, ee);
          },
          $$slots: { default: !0 }
        }), B(g);
        var w = L(g, 2);
        $t(w, {});
        var b = L(w, 2);
        Ve(b, {
          level: 3,
          mt: "10px",
          children: (R, j) => {
            ye();
            var ee = Ne("URL 地址");
            D(R, ee);
          },
          $$slots: { default: !0 }
        });
        var k = L(b, 2), E = F(k), _ = F(E);
        {
          let R = /* @__PURE__ */ N(() => n().method ? [n().method] : ["get"]);
          gt(_, {
            get items() {
              return o;
            },
            style: "width: 100%",
            placeholder: "请选择请求方式",
            onSelect: (j) => {
              const ee = j.value;
              a(i, () => ({ method: ee }));
            },
            get value() {
              return u(R);
            }
          });
        }
        B(E);
        var S = L(E, 2), T = F(S);
        {
          let R = /* @__PURE__ */ N(() => n().url || "");
          rt(T, {
            placeholder: "请输入url",
            style: "width: 100%",
            onchange: (j) => {
              a(i, () => ({ url: j.target.value }));
            },
            get value() {
              return u(R);
            }
          });
        }
        B(S), B(k);
        var V = L(k, 2), O = F(V);
        Ve(O, {
          level: 3,
          children: (R, j) => {
            ye();
            var ee = Ne("Http 头信息");
            D(R, ee);
          },
          $$slots: { default: !0 }
        });
        var H = L(O, 2);
        ze(H, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "headers");
          },
          children: (R, j) => {
            var ee = V5();
            D(R, ee);
          },
          $$slots: { default: !0 }
        }), B(V);
        var Z = L(V, 2);
        $t(Z, { dataKeyName: "headers" });
        var I = L(Z, 2);
        {
          var P = (R) => {
            var j = I5(), ee = oe(j);
            Ve(ee, {
              level: 3,
              mt: "10px",
              children: (Ae, q) => {
                ye();
                var lt = Ne("Body");
                D(Ae, lt);
              },
              $$slots: { default: !0 }
            });
            var ne = L(ee, 2), J = F(ne), Ce = F(J);
            {
              let Ae = /* @__PURE__ */ N(() => !n().bodyType || n().bodyType === "");
              rt(Ce, {
                type: "radio",
                value: "",
                get checked() {
                  return u(Ae);
                },
                onchange: (q) => {
                  q.target?.checked && a(i, { bodyType: "" });
                }
              });
            }
            ye(), B(J);
            var ie = L(J, 2), le = F(ie);
            {
              let Ae = /* @__PURE__ */ N(() => n().bodyType === "form-data");
              rt(le, {
                type: "radio",
                value: "form-data",
                get checked() {
                  return u(Ae);
                },
                onchange: (q) => {
                  q.target?.checked && a(i, { bodyType: "form-data" });
                }
              });
            }
            ye(), B(ie);
            var re = L(ie, 2), he = F(re);
            {
              let Ae = /* @__PURE__ */ N(() => n().bodyType === "x-www-form-urlencoded");
              rt(he, {
                type: "radio",
                value: "x-www-form-urlencoded",
                get checked() {
                  return u(Ae);
                },
                onchange: (q) => {
                  q.target?.checked && a(i, { bodyType: "x-www-form-urlencoded" });
                }
              });
            }
            ye(), B(re);
            var me = L(re, 2), Se = F(me);
            {
              let Ae = /* @__PURE__ */ N(() => n().bodyType === "json");
              rt(Se, {
                type: "radio",
                value: "json",
                get checked() {
                  return u(Ae);
                },
                onchange: (q) => {
                  q.target?.checked && a(i, { bodyType: "json" });
                }
              });
            }
            ye(), B(me);
            var fe = L(me, 2), xe = F(fe);
            {
              let Ae = /* @__PURE__ */ N(() => n().bodyType === "raw");
              rt(xe, {
                type: "radio",
                value: "raw",
                get checked() {
                  return u(Ae);
                },
                onchange: (q) => {
                  q.target?.checked && a(i, { bodyType: "raw" });
                }
              });
            }
            ye(), B(fe), B(ne), D(R, j);
          };
          se(I, (R) => {
            (n().method === "post" || n().method === "put" || n().method === "delete" || n().method === "patch") && R(P);
          });
        }
        var A = L(I, 2);
        {
          var x = (R) => {
            var j = H5(), ee = oe(j), ne = F(ee);
            Ve(ne, {
              level: 3,
              children: (ie, le) => {
                ye();
                var re = Ne("参数");
                D(ie, re);
              },
              $$slots: { default: !0 }
            });
            var J = L(ne, 2);
            ze(J, {
              size: "icon-xs",
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formData");
              },
              children: (ie, le) => {
                var re = L5();
                D(ie, re);
              },
              $$slots: { default: !0 }
            }), B(ee);
            var Ce = L(ee, 2);
            $t(Ce, { dataKeyName: "formData" }), D(R, j);
          };
          se(A, (R) => {
            n().bodyType === "form-data" && R(x);
          });
        }
        var C = L(A, 2);
        {
          var M = (R) => {
            var j = B5(), ee = oe(j), ne = F(ee);
            Ve(ne, {
              level: 3,
              children: (ie, le) => {
                ye();
                var re = Ne("Body 参数");
                D(ie, re);
              },
              $$slots: { default: !0 }
            });
            var J = L(ne, 2);
            ze(J, {
              size: "icon-xs",
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formUrlencoded");
              },
              children: (ie, le) => {
                var re = R5();
                D(ie, re);
              },
              $$slots: { default: !0 }
            }), B(ee);
            var Ce = L(ee, 2);
            $t(Ce, { dataKeyName: "formUrlencoded" }), D(R, j);
          };
          se(C, (R) => {
            n().bodyType === "x-www-form-urlencoded" && R(M);
          });
        }
        var z = L(C, 2);
        {
          var K = (R) => {
            var j = F5(), ee = F(j);
            Ye(ee, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入 json 信息",
              get value() {
                return n().bodyJson;
              },
              oninput: (ne) => {
                a(i, { bodyJson: ne.target.value });
              }
            }), B(j), D(R, j);
          };
          se(z, (R) => {
            n().bodyType === "json" && R(K);
          });
        }
        var X = L(z, 2);
        {
          var $ = (R) => {
            var j = K5(), ee = F(j);
            Ye(ee, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入请求信息",
              get value() {
                return n().bodyRaw;
              },
              oninput: (ne) => {
                a(i, { bodyRaw: ne.target.value });
              }
            }), B(j), D(R, j);
          };
          se(X, (R) => {
            n().bodyType === "raw" && R($);
          });
        }
        var Y = L(X, 2), U = F(Y);
        Ve(U, {
          level: 3,
          mt: "10px",
          children: (R, j) => {
            ye();
            var ee = Ne("输出参数");
            D(R, ee);
          },
          $$slots: { default: !0 }
        });
        var W = L(U, 2);
        ze(W, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "outputDefs");
          },
          children: (R, j) => {
            var ee = W5();
            D(R, ee);
          },
          $$slots: { default: !0 }
        }), B(Y);
        var G = L(Y, 2);
        Jn(G, {}), D(d, h);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(l);
}
ae(ig, { data: {} }, [], [], !0);
var j5 = /* @__PURE__ */ pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>'), X5 = /* @__PURE__ */ pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), q5 = /* @__PURE__ */ te('<div class="heading svelte-ddi5i"><!> <!></div> <!> <!> <div class="setting-title svelte-ddi5i">知识库</div> <div class="setting-item svelte-ddi5i"><!></div> <div class="setting-title svelte-ddi5i">关键字</div> <div class="setting-item svelte-ddi5i"><!></div> <div class="setting-title svelte-ddi5i">获取数据量</div> <div class="setting-item svelte-ddi5i"><!></div> <div class="heading svelte-ddi5i"><!></div> <!>', 1);
const G5 = {
  hash: "svelte-ddi5i",
  code: ".heading.svelte-ddi5i {display:flex;margin-bottom:10px;}.setting-title.svelte-ddi5i {font-size:12px;color:var(--secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-ddi5i {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function sg(e, t) {
  ce(t, !0), Ze(e, G5);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Re(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = nt(), { addParameter: i } = gn(), s = fr();
  let a = /* @__PURE__ */ Pe(Ct([]));
  Tn(async () => {
    const d = await s.provider?.knowledge?.();
    u(a).push(...d || []);
  });
  const { updateNodeData: l } = ft();
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
  var c = {
    get data() {
      return n();
    },
    set data(d) {
      n(d), m();
    }
  };
  return en(e, We(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (f) => {
        var h = j5();
        D(f, h);
      },
      children: (f, h) => {
        var g = q5(), v = oe(g), p = F(v);
        Ve(p, {
          level: 3,
          children: (P, A) => {
            ye();
            var x = Ne("输入参数");
            D(P, x);
          },
          $$slots: { default: !0 }
        });
        var w = L(p, 2);
        ze(w, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (P, A) => {
            var x = X5();
            D(P, x);
          },
          $$slots: { default: !0 }
        }), B(v);
        var b = L(v, 2);
        $t(b, {});
        var k = L(b, 2);
        Ve(k, {
          level: 3,
          mt: "10px",
          children: (P, A) => {
            ye();
            var x = Ne("知识库设置");
            D(P, x);
          },
          $$slots: { default: !0 }
        });
        var E = L(k, 4), _ = F(E);
        {
          let P = /* @__PURE__ */ N(() => n().knowledgeId ? [n().knowledgeId] : []);
          gt(_, {
            get items() {
              return u(a);
            },
            style: "width: 100%",
            placeholder: "请选择知识库",
            onSelect: (A) => {
              const x = A.value;
              l(o, () => ({ knowledgeId: x }));
            },
            get value() {
              return u(P);
            }
          });
        }
        B(E);
        var S = L(E, 4), T = F(S);
        rt(T, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (P) => {
            const A = P.target.value;
            l(o, () => ({ keyword: A }));
          }
        }), B(S);
        var V = L(S, 4), O = F(V);
        {
          let P = /* @__PURE__ */ N(() => n().limit || "");
          rt(O, {
            placeholder: "搜索的数据条数",
            style: "width: 100%",
            onchange: (A) => {
              const x = A.target.value;
              l(o, () => ({ limit: x }));
            },
            get value() {
              return u(P);
            }
          });
        }
        B(V);
        var H = L(V, 2), Z = F(H);
        Ve(Z, {
          level: 3,
          mt: "10px",
          children: (P, A) => {
            ye();
            var x = Ne("输出参数");
            D(P, x);
          },
          $$slots: { default: !0 }
        }), B(H);
        var I = L(H, 2);
        Jn(I, {}), D(f, g);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(c);
}
ae(sg, { data: {} }, [], [], !0);
var U5 = /* @__PURE__ */ pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>'), J5 = /* @__PURE__ */ pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Q5 = /* @__PURE__ */ te('<div class="heading svelte-1qblm04"><!> <!></div> <!> <!> <div class="setting-title svelte-1qblm04">搜索引擎</div> <div class="setting-item svelte-1qblm04"><!></div> <div class="setting-title svelte-1qblm04">关键字</div> <div class="setting-item svelte-1qblm04"><!></div> <div class="setting-title svelte-1qblm04">搜索数据量</div> <div class="setting-item svelte-1qblm04"><!></div> <div class="heading svelte-1qblm04"><!></div> <!>', 1);
const e7 = {
  hash: "svelte-1qblm04",
  code: ".heading.svelte-1qblm04 {display:flex;margin-bottom:10px;}.setting-title.svelte-1qblm04 {font-size:12px;color:var(--secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-1qblm04 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function ag(e, t) {
  ce(t, !0), Ze(e, e7);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Re(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = nt(), { addParameter: i } = gn(), s = fr();
  let a = /* @__PURE__ */ Pe(Ct([]));
  Tn(async () => {
    const d = await s.provider?.searchEngine?.();
    u(a).push(...d || []);
  });
  const { updateNodeData: l } = ft();
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
  var c = {
    get data() {
      return n();
    },
    set data(d) {
      n(d), m();
    }
  };
  return en(e, We(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (f) => {
        var h = U5();
        D(f, h);
      },
      children: (f, h) => {
        var g = Q5(), v = oe(g), p = F(v);
        Ve(p, {
          level: 3,
          children: (P, A) => {
            ye();
            var x = Ne("输入参数");
            D(P, x);
          },
          $$slots: { default: !0 }
        });
        var w = L(p, 2);
        ze(w, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (P, A) => {
            var x = J5();
            D(P, x);
          },
          $$slots: { default: !0 }
        }), B(v);
        var b = L(v, 2);
        $t(b, {});
        var k = L(b, 2);
        Ve(k, {
          level: 3,
          mt: "10px",
          children: (P, A) => {
            ye();
            var x = Ne("搜索引擎设置");
            D(P, x);
          },
          $$slots: { default: !0 }
        });
        var E = L(k, 4), _ = F(E);
        {
          let P = /* @__PURE__ */ N(() => n().engine ? [n().engine] : []);
          gt(_, {
            get items() {
              return u(a);
            },
            style: "width: 100%",
            placeholder: "请选择搜索引擎",
            onSelect: (A) => {
              const x = A.value;
              l(o, () => ({ engine: x }));
            },
            get value() {
              return u(P);
            }
          });
        }
        B(E);
        var S = L(E, 4), T = F(S);
        rt(T, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (P) => {
            const A = P.target.value;
            l(o, () => ({ keyword: A }));
          }
        }), B(S);
        var V = L(S, 4), O = F(V);
        rt(O, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          get value() {
            return n().limit;
          },
          onchange: (P) => {
            const A = P.target.value;
            l(o, () => ({ limit: A }));
          }
        }), B(V);
        var H = L(V, 2), Z = F(H);
        Ve(Z, {
          level: 3,
          mt: "10px",
          children: (P, A) => {
            ye();
            var x = Ne("输出参数");
            D(P, x);
          },
          $$slots: { default: !0 }
        }), B(H);
        var I = L(H, 2);
        Jn(I, {}), D(f, g);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(c);
}
ae(ag, { data: {} }, [], [], !0);
var t7 = /* @__PURE__ */ pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>'), n7 = /* @__PURE__ */ pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), r7 = /* @__PURE__ */ te('<div class="heading svelte-1o34e8c"><!></div> <!> <div class="heading svelte-1o34e8c"><!> <!></div> <!>', 1);
const o7 = {
  hash: "svelte-1o34e8c",
  code: ".heading.svelte-1o34e8c {display:flex;margin:10px 0;align-items:center;}.loop_handle_wrapper::after {content:'循环体';width:100px;height:20px;background:var(--primary);color:var(--primary-foreground);display:flex;justify-content:center;align-items:center;}"
};
function lg(e, t) {
  ce(t, !0), Ze(e, o7);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Re(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = nt(), { addParameter: i } = gn();
  Ue(() => {
    (!n().loopVars || n().loopVars.length === 0) && i(o, "loopVars", { name: "loopVar", nameDisabled: !0, deleteDisabled: !0 });
  });
  var s = {
    get data() {
      return n();
    },
    set data(a) {
      n(a), m();
    }
  };
  return en(e, We(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (c) => {
        var d = t7();
        D(c, d);
      },
      handle: (c) => {
        ur(c, {
          type: "source",
          get position() {
            return be.Bottom;
          },
          id: "loop_handle",
          style: "bottom: -12px;width: 100px",
          class: "loop_handle_wrapper"
        });
      },
      children: (c, d) => {
        var f = r7(), h = oe(f), g = F(h);
        Ve(g, {
          level: 3,
          children: (E, _) => {
            ye();
            var S = Ne("循环变量");
            D(E, S);
          },
          $$slots: { default: !0 }
        }), B(h);
        var v = L(h, 2);
        $t(v, { dataKeyName: "loopVars" });
        var p = L(v, 2), w = F(p);
        Ve(w, {
          level: 3,
          children: (E, _) => {
            ye();
            var S = Ne("输出参数");
            D(E, S);
          },
          $$slots: { default: !0 }
        });
        var b = L(w, 2);
        ze(b, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (E, _) => {
            var S = n7();
            D(E, S);
          },
          $$slots: { default: !0 }
        }), B(p);
        var k = L(p, 2);
        $t(k, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs",
          useChildrenOnly: !0
        }), D(c, f);
      },
      $$slots: { icon: !0, handle: !0, default: !0 }
    }
  )), ue(s);
}
ae(lg, { data: {} }, [], [], !0);
var i7 = /* @__PURE__ */ te('<div class="input-more-setting svelte-5x0hls"><div class="input-more-item svelte-5x0hls">数据内容： <!></div> <div class="input-more-item svelte-5x0hls">确认方式： <!></div> <div class="input-more-item svelte-5x0hls">数据标题： <!></div> <div class="input-more-item svelte-5x0hls">数据描述： <!></div>   <div class="input-more-item svelte-5x0hls"><!></div></div>'), s7 = /* @__PURE__ */ te('<div class="input-item svelte-5x0hls"><!></div> <div class="input-item svelte-5x0hls"><!></div> <div class="input-item svelte-5x0hls"><!></div>', 1);
const a7 = {
  hash: "svelte-5x0hls",
  code: ".input-item.svelte-5x0hls {display:flex;align-items:center;}.input-more-setting.svelte-5x0hls {display:flex;flex-direction:column;gap:10px;padding:10px;background:var(--background);border:1px solid var(--border);border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-5x0hls .input-more-item:where(.svelte-5x0hls) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:var(--muted-foreground);}"
};
function cg(e, t) {
  ce(t, !0), Ze(e, a7);
  const n = y(t, "parameter", 7), r = y(t, "index", 7), o = y(t, "dataKeyName", 7), i = y(t, "useChildrenOnly", 7);
  let s = nt(), a = Gn(s), l = /* @__PURE__ */ N(() => ({
    ...n(),
    ...a?.current?.data?.[o()][r()]
  }));
  const { updateNodeData: c } = ft(), d = (P, A) => {
    c(s, (x) => {
      let C = x.data?.[o()];
      return C[r()] = { ...C[r()], [P]: A }, { [o()]: C };
    });
  }, f = (P, A) => {
    const x = A.target.value;
    d(P, x);
  }, h = (P) => {
    const A = P.value;
    d("ref", A);
  }, g = (P) => {
    const A = P.value;
    d("formType", A);
  }, v = (P) => {
    const A = P.value;
    d("contentType", A);
  };
  let p;
  const w = () => {
    c(s, (P) => {
      let A = P.data?.[o()];
      return A.splice(r(), 1), { [o()]: [...A] };
    }), p?.hide();
  };
  let b = Jh(i());
  var k = {
    get parameter() {
      return n();
    },
    set parameter(P) {
      n(P), m();
    },
    get index() {
      return r();
    },
    set index(P) {
      r(P), m();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(P) {
      o(P), m();
    },
    get useChildrenOnly() {
      return i();
    },
    set useChildrenOnly(P) {
      i(P), m();
    }
  }, E = s7(), _ = oe(E), S = F(_);
  {
    let P = /* @__PURE__ */ N(() => u(l).nameDisabled === !0);
    rt(S, {
      style: "width: 100%;",
      get value() {
        return u(l).name;
      },
      placeholder: "请输入参数名称",
      get disabled() {
        return u(P);
      },
      oninput: (A) => f("name", A)
    });
  }
  B(_);
  var T = L(_, 2), V = F(T);
  {
    var O = (P) => {
      rt(P, {
        get value() {
          return u(l).value;
        },
        placeholder: "请输入参数值",
        oninput: (A) => f("value", A)
      });
    }, H = (P) => {
      var A = _e(), x = oe(A);
      {
        var C = (M) => {
          {
            let z = /* @__PURE__ */ N(() => [u(l).ref]);
            gt(M, {
              get items() {
                return b.current;
              },
              style: "width: 100%",
              defaultValue: ["ref"],
              get value() {
                return u(z);
              },
              expandAll: !0,
              onSelect: h
            });
          }
        };
        se(
          x,
          (M) => {
            u(l).refType !== "input" && M(C);
          },
          !0
        );
      }
      D(P, A);
    };
    se(V, (P) => {
      u(l).refType === "fixed" ? P(O) : P(H, !1);
    });
  }
  B(T);
  var Z = L(T, 2), I = F(Z);
  return dt(
    yr(I, {
      placement: "bottom",
      floating: (A) => {
        var x = i7(), C = F(x), M = L(F(C));
        {
          let R = /* @__PURE__ */ N(() => u(l).contentType ? [u(l).contentType] : []);
          gt(M, {
            get items() {
              return wl;
            },
            style: "width: 100%",
            defaultValue: ["text"],
            get value() {
              return u(R);
            },
            onSelect: v
          });
        }
        B(C);
        var z = L(C, 2), K = L(F(z));
        {
          let R = /* @__PURE__ */ N(() => u(l).formType ? [u(l).formType] : []);
          gt(K, {
            get items() {
              return ew;
            },
            style: "width: 100%",
            defaultValue: ["single"],
            get value() {
              return u(R);
            },
            onSelect: g
          });
        }
        B(z);
        var X = L(z, 2), $ = L(F(X));
        Ye($, {
          rows: 1,
          style: "width: 100%;",
          onchange: (R) => {
            f("formLabel", R);
          },
          get value() {
            return u(l).formLabel;
          }
        }), B(X);
        var Y = L(X, 2), U = L(F(Y));
        Ye(U, {
          rows: 2,
          style: "width: 100%;",
          onchange: (R) => {
            f("formDescription", R);
          },
          get value() {
            return u(l).formDescription;
          }
        }), B(Y);
        var W = L(Y, 2), G = F(W);
        ze(G, {
          variant: "destructive",
          onclick: w,
          children: (R, j) => {
            ye();
            var ee = Ne("删除");
            D(R, ee);
          },
          $$slots: { default: !0 }
        }), B(W), B(x), D(A, x);
      },
      children: (A, x) => {
        ci(A, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (A) => p = A,
    () => p
  ), B(Z), D(e, E), ue(k);
}
ae(
  cg,
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
var l7 = /* @__PURE__ */ te('<div class="input-header svelte-1fllp9b">参数名称</div> <div class="input-header svelte-1fllp9b">参数值</div> <div class="input-header svelte-1fllp9b"></div>', 1), c7 = /* @__PURE__ */ te('<div class="none-params svelte-1fllp9b"> </div>'), u7 = /* @__PURE__ */ te('<div class="input-container svelte-1fllp9b"><!> <!></div>');
const d7 = {
  hash: "svelte-1fllp9b",
  code: `.input-container.svelte-1fllp9b {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1fllp9b .none-params:where(.svelte-1fllp9b) {font-size:12px;background:var(--secondary);height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1fllp9b .input-header:where(.svelte-1fllp9b) {font-size:12px;color:var(--muted-foreground);}`
};
function ug(e, t) {
  ce(t, !0), Ze(e, d7);
  const n = y(t, "noneParameterText", 7, "无确认数据"), r = y(t, "dataKeyName", 7, "parameters"), o = y(t, "useChildrenOnly", 7);
  let i = nt(), s = Gn(i), a = /* @__PURE__ */ N(() => [...s?.current?.data?.[r()] || []]);
  var l = {
    get noneParameterText() {
      return n();
    },
    set noneParameterText(g = "无确认数据") {
      n(g), m();
    },
    get dataKeyName() {
      return r();
    },
    set dataKeyName(g = "parameters") {
      r(g), m();
    },
    get useChildrenOnly() {
      return o();
    },
    set useChildrenOnly(g) {
      o(g), m();
    }
  }, c = u7(), d = F(c);
  {
    var f = (g) => {
      var v = l7();
      ye(4), D(g, v);
    };
    se(d, (g) => {
      u(a).length !== 0 && g(f);
    });
  }
  var h = L(d, 2);
  return pt(
    h,
    19,
    () => u(a),
    (g) => g.id,
    (g, v, p) => {
      cg(g, {
        get parameter() {
          return u(v);
        },
        get index() {
          return u(p);
        },
        get dataKeyName() {
          return r();
        },
        get useChildrenOnly() {
          return o();
        }
      });
    },
    (g) => {
      var v = c7(), p = F(v, !0);
      B(v), Ee(() => Xe(p, n())), D(g, v);
    }
  ), B(c), D(e, c), ue(l);
}
ae(ug, { noneParameterText: {}, dataKeyName: {}, useChildrenOnly: {} }, [], [], !0);
const Ta = (e, t) => {
  if (e === t) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const n = Array.isArray(e), r = Array.isArray(t);
  if (n !== r) return !1;
  if (n && r) {
    if (e.length !== t.length) return !1;
    for (let o = 0; o < e.length; o++)
      if (!Ta(e[o], t[o])) return !1;
    return !0;
  } else {
    const o = Object.keys(e), i = Object.keys(t);
    if (o.length !== i.length) return !1;
    for (const s of o)
      if (!(s in t) || !Ta(e[s], t[s])) return !1;
    return !0;
  }
};
var f7 = /* @__PURE__ */ pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), h7 = /* @__PURE__ */ pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), g7 = /* @__PURE__ */ te('<div class="heading svelte-8iukvu"><!> <!></div> <!> <!> <div class="setting-title svelte-8iukvu">消息内容</div> <div class="setting-item svelte-8iukvu"><!></div> <div class="heading svelte-8iukvu"><!></div> <!>', 1);
const v7 = {
  hash: "svelte-8iukvu",
  code: ".heading.svelte-8iukvu {display:flex;margin-bottom:10px;}.setting-title.svelte-8iukvu {font-size:12px;color:var(--secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-8iukvu {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function dg(e, t) {
  ce(t, !0), Ze(e, v7);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Re(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = nt(), { addParameter: i } = gn(), { updateNodeData: s } = ft();
  Ue(() => {
    if (n().confirms) {
      const l = n().confirms.map((c) => ({
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
        ...c,
        nameDisabled: !0,
        dataTypeDisabled: !0,
        dataType: c.formType === "checkbox" || c.formType === "select" ? "Array" : "String",
        addChildDisabled: !0
      }));
      Ta(l, n().outputDefs) || s(o, () => ({ outputDefs: l }));
    }
  });
  var a = {
    get data() {
      return n();
    },
    set data(l) {
      n(l), m();
    }
  };
  return en(e, We(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (c) => {
        var d = f7();
        D(c, d);
      },
      children: (c, d) => {
        var f = g7(), h = oe(f), g = F(h);
        Ve(g, {
          level: 3,
          children: (T, V) => {
            ye();
            var O = Ne("确认数据");
            D(T, O);
          },
          $$slots: { default: !0 }
        });
        var v = L(g, 2);
        ze(v, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "confirms");
          },
          children: (T, V) => {
            var O = h7();
            D(T, O);
          },
          $$slots: { default: !0 }
        }), B(h);
        var p = L(h, 2);
        ug(p, { dataKeyName: "confirms", noneParameterText: "无确认数据" });
        var w = L(p, 2);
        Ve(w, {
          level: 3,
          mt: "10px",
          children: (T, V) => {
            ye();
            var O = Ne("确认消息");
            D(T, O);
          },
          $$slots: { default: !0 }
        });
        var b = L(w, 4), k = F(b);
        {
          let T = /* @__PURE__ */ N(() => n().message || "");
          Ye(k, {
            rows: 5,
            placeholder: "请输入用户需要确认的消息内容",
            style: "width: 100%",
            onchange: (V) => {
              s(o, () => ({ message: V.target.value }));
            },
            get value() {
              return u(T);
            }
          });
        }
        B(b);
        var E = L(b, 2), _ = F(E);
        Ve(_, {
          level: 3,
          mt: "10px",
          children: (T, V) => {
            ye();
            var O = Ne("输出参数");
            D(T, O);
          },
          $$slots: { default: !0 }
        }), B(E);
        var S = L(E, 2);
        Jn(S, { placeholder: "" }), D(c, f);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(a);
}
ae(dg, { data: {} }, [], [], !0);
const p7 = {
  startNode: qh,
  codeNode: rg,
  confirmNode: dg,
  llmNode: ng,
  templateNode: og,
  httpNode: ig,
  knowledgeNode: sg,
  searchEngineNode: ag,
  loopNode: lg,
  endNode: eg
};
var m7 = /* @__PURE__ */ te("<!> ", 1);
function Aa(e, t) {
  ce(t, !0);
  const n = y(t, "icon", 7), r = y(t, "title", 7), o = y(t, "type", 7), i = y(t, "description", 7), s = y(t, "extra", 7), a = (c) => {
    if (!c.dataTransfer)
      return null;
    const d = {
      type: o(),
      data: { title: r(), description: i(), ...s() }
    };
    c.dataTransfer.setData("application/tinyflow", JSON.stringify(d)), c.dataTransfer.effectAllowed = "move";
  };
  var l = {
    get icon() {
      return n();
    },
    set icon(c) {
      n(c), m();
    },
    get title() {
      return r();
    },
    set title(c) {
      r(c), m();
    },
    get type() {
      return o();
    },
    set type(c) {
      o(c), m();
    },
    get description() {
      return i();
    },
    set description(c) {
      i(c), m();
    },
    get extra() {
      return s();
    },
    set extra(c) {
      s(c), m();
    }
  };
  return ze(e, {
    draggable: !0,
    ondragstart: a,
    get "data-node-type"() {
      return o();
    },
    children: (c, d) => {
      var f = m7(), h = oe(f);
      ys(h, n);
      var g = L(h);
      Ee(() => Xe(g, ` ${r() ?? ""}`)), D(c, f);
    },
    $$slots: { default: !0 }
  }), ue(l);
}
ae(Aa, { icon: {}, title: {}, type: {}, description: {}, extra: {} }, [], [], !0);
var y7 = /* @__PURE__ */ pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), w7 = /* @__PURE__ */ pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), b7 = /* @__PURE__ */ te('<div><div class="tf-toolbar-container"><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"></div></div></div> <!></div>');
function fg(e, t) {
  ce(t, !0);
  let n = /* @__PURE__ */ Pe("base"), r = /* @__PURE__ */ Pe("show");
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
  ], s = [], a = fr(), l = a.customNodes;
  if (l) {
    const b = Object.keys(l).sort((k, E) => (l[k].sortNo || 0) - (l[E].sortNo || 0));
    for (let k of b)
      l[k].group === "base" ? o.push({ type: k, ...l[k] }) : s.push({
        icon: l[k].icon,
        title: l[k].title,
        type: k
      });
    o.sort((k, E) => (k.sortNo || 0) - (E.sortNo || 0));
  }
  if (a.hiddenNodes) {
    const b = typeof a.hiddenNodes == "function" ? a.hiddenNodes() : a.hiddenNodes;
    if (Array.isArray(b)) {
      for (let k of b)
        for (let E = 0; E < o.length; E++)
          if (o[E].type === k) {
            o.splice(E, 1);
            break;
          }
    }
  }
  var c = b7(), d = F(c), f = F(d), h = F(f);
  Zh(h, {
    style: "width: 100%",
    get items() {
      return i;
    },
    onChange: (b) => {
      Q(n, b.value.toString(), !0);
    }
  }), B(f);
  var g = L(f, 2), v = F(g);
  pt(v, 21, () => o, Or, (b, k) => {
    Aa(b, We(() => u(k)));
  }), B(v);
  var p = L(v, 2);
  pt(p, 21, () => s, Or, (b, k) => {
    Aa(b, We(() => u(k)));
  }), B(p), B(g), B(d);
  var w = L(d, 2);
  ze(w, {
    size: "icon",
    variant: "outline",
    onclick: () => {
      Q(r, u(r) ? "" : "show", !0);
    },
    children: (b, k) => {
      var E = _e(), _ = oe(E);
      {
        var S = (V) => {
          var O = y7();
          D(V, O);
        }, T = (V) => {
          var O = w7();
          D(V, O);
        };
        se(_, (V) => {
          u(r) === "show" ? V(S) : V(T, !1);
        });
      }
      D(b, E);
    },
    $$slots: { default: !0 }
  }), B(c), Ee(() => {
    Bt(c, 1, `tf-toolbar ${u(r) ?? ""}`), mt(v, `display: ${u(n) === "base" ? "flex" : "none"}`), mt(p, `display: ${u(n) !== "base" ? "flex" : "none"}`);
  }), D(e, c), ue();
}
ae(fg, {}, [], [], !0);
const x7 = () => ({ getNode: (t) => Le.getNode(t) }), _7 = () => ({ ensureParentInNodesBefore: (t, n) => {
  Le.updateNodes((r) => {
    let o = -1;
    for (let a = 0; a < r.length; a++)
      if (r[a].id === t) {
        o = a;
        break;
      }
    if (o <= 0)
      return r;
    let i = -1;
    for (let a = 0; a < o; a++)
      if (r[a].parentId === t || r[a].id === n) {
        i = a;
        break;
      }
    if (i == -1)
      return r;
    const s = r[o];
    for (let a = o; a > i; a--)
      r[a] = r[a - 1];
    return r[i] = s, r;
  });
} }), C7 = () => ({ getEdgesByTarget: (t) => Le.getEdges().filter((r) => r.target === t) });
var k7 = /* @__PURE__ */ pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), S7 = /* @__PURE__ */ te('<div class="heading svelte-qt4m0r"><!> <!></div> <!>', 1), E7 = /* @__PURE__ */ te('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), N7 = /* @__PURE__ */ te('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), P7 = /* @__PURE__ */ te('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><div class="slider-container svelte-qt4m0r"><span class="svelte-qt4m0r"> </span> <input/></div></div>', 1), T7 = /* @__PURE__ */ te('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), A7 = /* @__PURE__ */ te('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), $7 = /* @__PURE__ */ pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), M7 = /* @__PURE__ */ te('<div class="heading svelte-qt4m0r"><!> <!></div> <!>', 1), D7 = /* @__PURE__ */ te("<!> <!> <div></div> <!>", 1);
const O7 = {
  hash: "svelte-qt4m0r",
  code: `.heading.svelte-qt4m0r {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-qt4m0r {font-size:12px;color:var(--secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-qt4m0r {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}\r
\r
    /* 新增样式 */.slider-container.svelte-qt4m0r {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-qt4m0r span:where(.svelte-qt4m0r) {font-size:12px;color:var(--muted-foreground);display:flex;justify-content:space-between;align-items:center;}input[type='range'].svelte-qt4m0r {width:100%;height:4px;background:var(--muted);border-radius:2px;outline:none;-webkit-appearance:none;}input[type='range'].svelte-qt4m0r::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:var(--primary);border-radius:50%;cursor:pointer;}`
};
function hg(e, t) {
  ce(t, !0), Ze(e, O7);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Re(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = nt(), { addParameter: i } = gn(), s = ft(), { updateNodeData: a } = s, l = (b) => {
    a(o, b);
  }, c = (b, k) => {
    l({ [b]: k.target?.value });
  }, d = { ...r, id: o, data: n() }, f = document.createElement("div"), g = fr().customNodes[t.type];
  g.render?.(f, d, s);
  const v = g.forms;
  let p;
  Ue(() => {
    n().expand && p && p.append(f);
  }), Ue(() => {
    n() && g.onUpdate?.(f, { ...d, data: n() });
  }), Ue(() => {
    !n().parameters && g.parameters && l({
      parameters: Wo(JSON.parse(JSON.stringify(g.parameters)))
    });
  }), Ue(() => {
    !n().outputDefs && g.outputDefs && l({
      outputDefs: Wo(JSON.parse(JSON.stringify(g.outputDefs)))
    });
  });
  var w = {
    get data() {
      return n();
    },
    set data(b) {
      n(b), m();
    }
  };
  {
    const b = (E) => {
      var _ = _e(), S = oe(_);
      ys(S, () => g.icon), D(E, _);
    };
    let k = /* @__PURE__ */ N(() => ({ ...n(), description: g.description }));
    en(e, We(
      {
        get data() {
          return u(k);
        }
      },
      () => r,
      {
        icon: b,
        children: (E, _) => {
          var S = D7(), T = oe(S);
          {
            var V = (A) => {
              var x = S7(), C = oe(x), M = F(C);
              Ve(M, {
                level: 3,
                children: ($, Y) => {
                  ye();
                  var U = Ne("输入参数");
                  D($, U);
                },
                $$slots: { default: !0 }
              });
              var z = L(M, 2);
              {
                var K = ($) => {
                  ze($, {
                    size: "icon-xs",
                    class: "input-btn-more",
                    style: "margin-left: auto",
                    onclick: () => {
                      i(o);
                    },
                    children: (Y, U) => {
                      var W = k7();
                      D(Y, W);
                    },
                    $$slots: { default: !0 }
                  });
                };
                se(z, ($) => {
                  g.parametersAddEnable !== !1 && $(K);
                });
              }
              B(C);
              var X = L(C, 2);
              $t(X, {}), D(A, x);
            };
            se(T, (A) => {
              g.parametersEnable !== !1 && A(V);
            });
          }
          var O = L(T, 2);
          {
            var H = (A) => {
              var x = _e(), C = oe(x);
              pt(C, 17, () => v, Or, (M, z) => {
                var K = _e(), X = oe(K);
                {
                  var $ = (U) => {
                    var W = E7(), G = oe(W), R = F(G, !0);
                    B(G);
                    var j = L(G, 2), ee = F(j);
                    {
                      let ne = /* @__PURE__ */ N(() => n()[u(z).name] || u(z).defaultValue);
                      rt(ee, We(
                        {
                          get placeholder() {
                            return u(z).placeholder;
                          },
                          style: "width: 100%",
                          get value() {
                            return u(ne);
                          }
                        },
                        () => u(z).attrs,
                        {
                          onchange: (J) => {
                            c(u(z).name, J);
                          }
                        }
                      ));
                    }
                    B(j), Ee(() => Xe(R, u(z).label)), D(U, W);
                  }, Y = (U) => {
                    var W = _e(), G = oe(W);
                    {
                      var R = (ee) => {
                        var ne = N7(), J = oe(ne), Ce = F(J, !0);
                        B(J);
                        var ie = L(J, 2), le = F(ie);
                        {
                          let re = /* @__PURE__ */ N(() => n()[u(z).name] || u(z).defaultValue);
                          Ye(le, We(
                            {
                              rows: 3,
                              get placeholder() {
                                return u(z).placeholder;
                              },
                              style: "width: 100%",
                              get value() {
                                return u(re);
                              }
                            },
                            () => u(z).attrs,
                            {
                              onchange: (he) => {
                                c(u(z).name, he);
                              }
                            }
                          ));
                        }
                        B(ie), Ee(() => Xe(Ce, u(z).label)), D(ee, ne);
                      }, j = (ee) => {
                        var ne = _e(), J = oe(ne);
                        {
                          var Ce = (le) => {
                            var re = P7(), he = oe(re), me = F(he, !0);
                            B(he);
                            var Se = L(he, 2), fe = F(Se), xe = F(fe), Ae = F(xe);
                            B(xe);
                            var q = L(xe, 2), lt = (Oe) => l({ [u(z).name]: parseFloat(Oe.target.value) });
                            Ge(
                              q,
                              () => ({
                                class: "nodrag",
                                type: "range",
                                ...u(z).attrs,
                                value: n()[u(z).name] ?? u(z).defaultValue,
                                oninput: lt
                              }),
                              void 0,
                              void 0,
                              void 0,
                              "svelte-qt4m0r",
                              !0
                            ), B(fe), B(Se), Ee(() => {
                              Xe(me, u(z).label), Xe(Ae, `${u(z).description ?? ""}: ${n()[u(z).name] ?? u(z).defaultValue ?? ""}`);
                            }), D(le, re);
                          }, ie = (le) => {
                            var re = _e(), he = oe(re);
                            {
                              var me = (fe) => {
                                var xe = T7(), Ae = oe(xe), q = F(Ae, !0);
                                B(Ae);
                                var lt = L(Ae, 2), Oe = F(lt);
                                {
                                  let Be = /* @__PURE__ */ N(() => u(z).options || []), Ie = /* @__PURE__ */ N(() => n()[u(z).name] ? [n()[u(z).name]] : [u(z).defaultValue]);
                                  gt(Oe, {
                                    get items() {
                                      return u(Be);
                                    },
                                    style: "width: 100%",
                                    get placeholder() {
                                      return u(z).placeholder;
                                    },
                                    onSelect: (Et) => {
                                      const st = Et.value;
                                      l({ [u(z).name]: st });
                                    },
                                    get value() {
                                      return u(Ie);
                                    }
                                  });
                                }
                                B(lt), Ee(() => Xe(q, u(z).label)), D(fe, xe);
                              }, Se = (fe) => {
                                var xe = _e(), Ae = oe(xe);
                                {
                                  var q = (Oe) => {
                                    var Be = A7(), Ie = oe(Be), Et = F(Ie, !0);
                                    B(Ie);
                                    var st = L(Ie, 2), Mt = F(st);
                                    {
                                      let yt = /* @__PURE__ */ N(() => u(z).chosen?.buttonText);
                                      Wh(Mt, {
                                        style: "width: 100%",
                                        get placeholder() {
                                          return u(z).placeholder;
                                        },
                                        get buttonText() {
                                          return u(yt);
                                        },
                                        onChosen: (tn, de, Me) => {
                                          u(z).chosen?.onChosen?.(l, tn, de, Me);
                                        },
                                        get value() {
                                          return n()[u(z).chosen?.valueDataKey || ""];
                                        },
                                        get label() {
                                          return n()[u(z).chosen?.labelDataKey || ""];
                                        }
                                      });
                                    }
                                    B(st), Ee(() => Xe(Et, u(z).label)), D(Oe, Be);
                                  }, lt = (Oe) => {
                                    var Be = _e(), Ie = oe(Be);
                                    {
                                      var Et = (st) => {
                                        Ve(st, We({ level: 3, mt: "10px" }, () => u(z).attrs, {
                                          children: (Mt, yt) => {
                                            ye();
                                            var tn = Ne();
                                            Ee(() => Xe(tn, u(z).label)), D(Mt, tn);
                                          },
                                          $$slots: { default: !0 }
                                        }));
                                      };
                                      se(
                                        Ie,
                                        (st) => {
                                          u(z).type === "heading" && st(Et);
                                        },
                                        !0
                                      );
                                    }
                                    D(Oe, Be);
                                  };
                                  se(
                                    Ae,
                                    (Oe) => {
                                      u(z).type === "chosen" ? Oe(q) : Oe(lt, !1);
                                    },
                                    !0
                                  );
                                }
                                D(fe, xe);
                              };
                              se(
                                he,
                                (fe) => {
                                  u(z).type === "select" ? fe(me) : fe(Se, !1);
                                },
                                !0
                              );
                            }
                            D(le, re);
                          };
                          se(
                            J,
                            (le) => {
                              u(z).type === "slider" ? le(Ce) : le(ie, !1);
                            },
                            !0
                          );
                        }
                        D(ee, ne);
                      };
                      se(
                        G,
                        (ee) => {
                          u(z).type === "textarea" ? ee(R) : ee(j, !1);
                        },
                        !0
                      );
                    }
                    D(U, W);
                  };
                  se(X, (U) => {
                    u(z).type === "input" ? U($) : U(Y, !1);
                  });
                }
                D(M, K);
              }), D(A, x);
            };
            se(O, (A) => {
              v && A(H);
            });
          }
          var Z = L(O, 2);
          dt(Z, (A) => p = A, () => p);
          var I = L(Z, 2);
          {
            var P = (A) => {
              var x = M7(), C = oe(x), M = F(C);
              Ve(M, {
                level: 3,
                mt: "10px",
                children: ($, Y) => {
                  ye();
                  var U = Ne("输出参数");
                  D($, U);
                },
                $$slots: { default: !0 }
              });
              var z = L(M, 2);
              {
                var K = ($) => {
                  ze($, {
                    size: "icon-xs",
                    class: "input-btn-more",
                    style: "margin-left: auto",
                    onclick: () => {
                      i(o, "outputDefs");
                    },
                    children: (Y, U) => {
                      var W = $7();
                      D(Y, W);
                    },
                    $$slots: { default: !0 }
                  });
                };
                se(z, ($) => {
                  g.outputDefsAddEnable !== !1 && $(K);
                });
              }
              B(C);
              var X = L(C, 2);
              Jn(X, {}), D(A, x);
            };
            se(I, (A) => {
              g.outputDefsEnable !== !1 && A(P);
            });
          }
          Ee(() => {
            mt(Z, g.rootStyle || ""), Bt(Z, 1, qn(g.rootClass), "svelte-qt4m0r");
          }), D(E, S);
        },
        $$slots: { icon: !0, default: !0 }
      }
    ));
  }
  return ue(w);
}
ae(hg, { data: {} }, [], [], !0);
const z7 = () => ({ updateEdgeData: (t, n, r) => {
  const o = Le.getEdge(t);
  if (!o)
    return;
  const i = typeof n == "function" ? n(o) : n;
  o.data = r?.replace ? i : { ...o.data, ...i }, Le.updateEdges((s) => s.map((a) => a.id === t ? o : a));
} }), V7 = () => ({ deleteEdge: (t) => {
  Le.removeEdge(t);
} }), I7 = () => {
  const e = (n, r) => r.filter(
    // 排除循环节点的子节点，否则在多层循环嵌套时不正确
    (o) => o.source === n && o.sourceHandle !== "loop_handle"
  );
  return { getNodesFromSource: (n) => {
    const r = Le.getEdges(), o = [];
    let i = e(n, r);
    for (; i.length > 0; ) {
      const s = [];
      i.forEach((a) => {
        o.push(Le.getNode(a.target)), s.push(...e(a.target, r));
      }), i = s;
    }
    return o;
  } };
}, L7 = () => ({ getNodeRelativePosition: (t) => {
  let n = Le.getNode(t);
  const r = { x: 0, y: 0 };
  for (; n; )
    r.x += n.position.x, r.y += n.position.y, n.parentId ? n = Le.getNode(n.parentId) : n = void 0;
  return r;
} });
function H7(e) {
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
function R7(e) {
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
    for (const c of l)
      s.has(c) || o.push(t.get(c));
  }
  for (const a of e)
    s.has(a.id) || i.push(a);
  return i;
}
function B7(e) {
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
function $a(e, t) {
  if (e == null)
    return e;
  if (Array.isArray(e))
    return e.map((n) => $a(n, t));
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
      Object.hasOwn(e, r) && (n[r] = $a(e[r], t));
    return n;
  }
  return e;
}
const F7 = () => (ft(), { copyHandler: async (n) => {
  const r = Le.getNodes().filter((d) => d.selected);
  if (r.length === 0) return;
  const i = Le.getEdges().filter((d) => r.some((f) => f.id === d.source) && r.some((f) => f.id === d.target)), s = r.map(H7), a = i.map(B7), c = JSON.stringify({
    tinyflowNodes: s,
    tinyflowEdges: a,
    version: "1.0"
  }, null, 0);
  try {
    "clipboardData" in n && n.clipboardData ? (n.clipboardData.setData("text/plain", c), n instanceof ClipboardEvent && n.preventDefault()) : await navigator.clipboard.writeText(c), console.log("Copied nodes and edges to clipboard");
  } catch (d) {
    console.error("Failed to copy:", d);
    try {
      sessionStorage.setItem("tinyflow_clipboard", c);
    } catch {
    }
  }
}, pasteHandler: (n) => {
  const r = n.clipboardData?.getData("text/plain");
  if (!r) return;
  let o = null;
  try {
    o = JSON.parse(r);
  } catch {
    return;
  }
  if (!o?.tinyflowNodes || !Array.isArray(o.tinyflowNodes))
    return;
  n.preventDefault();
  const i = R7(o.tinyflowNodes), s = o.tinyflowEdges || [], a = /* @__PURE__ */ new Map(), l = [];
  for (const d of i) {
    const f = `node_${Wn()}`;
    a.set(d.id, f);
  }
  for (const d of i) {
    const f = a.get(d.id), h = d.parentId !== void 0 ? a.get(d.parentId) : void 0, g = $a(d.data, a);
    l.push({
      ...d,
      id: f,
      parentId: h,
      data: g,
      position: {
        x: (d.position?.x ?? 0) + 50,
        y: (d.position?.y ?? 0) + 50
      },
      selected: !0
    });
  }
  const c = [];
  for (const d of s) {
    const f = a.get(d.source), h = a.get(d.target);
    f && h && c.push({
      ...d,
      id: `edge_${Wn()}`,
      source: f,
      target: h
    });
  }
  Le.updateNodes((d) => [...d.map((h) => ({ ...h, selected: !1 })), ...l]), Le.updateEdges((d) => [...d.map((h) => ({ ...h, selected: !1 })), ...c]);
} }), nu = () => {
  const e = document.activeElement;
  return !e || !(e instanceof HTMLElement) ? !1 : e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement || e.isContentEditable;
};
var K7 = /* @__PURE__ */ te('<div class="panel-content svelte-woejl3"><div>边属性设置</div> <div class="setting-title svelte-woejl3">边条件设置</div> <div class="setting-item svelte-woejl3"><!></div> <div class="setting-item svelte-woejl3" style="padding: 8px 0"><!> <!></div></div>'), W7 = /* @__PURE__ */ te("<!> <!> <!> <!>", 1), Z7 = /* @__PURE__ */ te('<div style="position: relative; height: 100%; width: 100%;overflow: hidden"><!> <!></div>');
const Y7 = {
  hash: "svelte-woejl3",
  code: ".panel-content.svelte-woejl3 {padding:10px;background-color:var(--background);border-radius:5px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);width:200px;border:1px solid var(--border);}.setting-title.svelte-woejl3 {margin:10px 0;font-size:12px;color:var(--muted-foreground);}.setting-item.svelte-woejl3 {display:flex;gap:5px;align-items:center;justify-content:end;}"
};
function gg(e, t) {
  ce(t, !0), Ze(e, Y7);
  const n = y(t, "onInit", 7), r = y(t, "colorMode", 7), o = /* @__PURE__ */ Re(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "onInit",
    "colorMode"
  ]), i = ft();
  console.log("props", o), n()(i);
  let s = /* @__PURE__ */ Pe(!1), a = /* @__PURE__ */ Pe(null);
  const { updateEdgeData: l } = z7(), c = (W) => {
    W.preventDefault(), W.dataTransfer && (W.dataTransfer.dropEffect = "move");
  }, d = (W) => {
    W.preventDefault();
    const G = i.screenToFlowPosition({ x: W.clientX - 250, y: W.clientY - 100 }), R = W.dataTransfer?.getData("application/tinyflow");
    if (!R)
      return;
    const j = JSON.parse(R), ee = { id: `node_${Wn()}`, position: G, data: {}, ...j };
    Le.addNode(ee), Le.selectNodeOnly(ee.id);
  }, { getNode: f } = x7(), h = (W) => {
    const G = f(W.source), R = f(W.target);
    if (W.sourceHandle === "loop_handle" || G.parentId) {
      const j = i.getEdges();
      for (let ee of j)
        if (ee.target === W.target) {
          const ne = f(ee.source);
          if (W.sourceHandle === "loop_handle" && ne.parentId !== G.id || G.parentId && ne.parentId !== G.parentId)
            return !1;
        }
    }
    return !(!G.parentId && R.parentId && R.parentId !== G.id);
  }, { getNodesFromSource: g } = I7(), { getNodeRelativePosition: v } = L7(), { ensureParentInNodesBefore: p } = _7(), w = (W, G) => {
    if (!G.isValid)
      return;
    const R = G.toNode;
    if (R.parentId)
      return;
    const j = G.fromNode, ee = G.fromHandle, ne = { position: { ...R.position } };
    if (ee.id === "loop_handle" ? ne.parentId = j.id : j.parentId && (ne.parentId = j.parentId), ne.parentId) {
      const { x: J, y: Ce } = v(ne.parentId);
      ne.position = { x: R.position.x - J, y: R.position.y - Ce }, i.updateNode(R.id, ne), g(R.id).forEach((le) => {
        i.updateNode(le.id, {
          parentId: ne.parentId,
          position: { x: le.position.x - J, y: le.position.y - Ce }
        });
      }), p(ne.parentId, R.id);
    }
    setTimeout(() => {
      Le.getEdges().forEach((J) => {
        J.target === R.id && J.source == j.id && (Q(s, !0), Q(a, J, !0));
      });
    });
  }, { getEdgesByTarget: b } = C7(), k = (W) => {
    W.edges.forEach((R) => {
      R.id === u(a)?.id && (Q(a, null), Q(s, !1));
      const j = f(R.target);
      if (j && j.parentId) {
        const ee = b(R.target), { x: ne, y: J } = v(j.parentId);
        if (ee.length === 0)
          i.updateNode(j.id, {
            parentId: void 0,
            position: { x: j.position.x + ne, y: j.position.y + J }
          }), g(j.id).forEach((ie) => {
            i.updateNode(ie.id, {
              parentId: void 0,
              position: { x: ie.position.x + ne, y: ie.position.y + J }
            });
          });
        else {
          let Ce = !1;
          for (let ie = 0; ie < ee.length; ie++) {
            const le = ee[ie], re = f(le.source);
            if (re.parentId || re.type === "loopNode") {
              Ce = !0;
              break;
            }
          }
          Ce || (i.updateNode(j.id, {
            parentId: void 0,
            position: { x: j.position.x + ne, y: j.position.y + J }
          }), g(j.id).forEach((le) => {
            i.updateNode(le.id, {
              parentId: void 0,
              position: { x: le.position.x + ne, y: le.position.y + J }
            });
          }));
        }
      }
    });
  }, { deleteEdge: E } = V7(), _ = (W, G) => {
  }, S = (W) => {
  }, { copyHandler: T, pasteHandler: V } = F7(), O = (W) => {
    nu() || ((W.ctrlKey || W.metaKey) && W.key === "c" && (W.preventDefault(), T(W)), (W.ctrlKey || W.metaKey) && W.key === "a" && (W.preventDefault(), Le.updateNodes((G) => G.map((R) => ({ ...R, selected: !0 }))), Le.updateEdges((G) => G.map((R) => ({ ...R, selected: !0 })))));
  }, H = async (W) => {
    nu() || V(W);
  };
  Tn(() => {
    window.addEventListener("keydown", O), window.addEventListener("paste", H);
  }), Go(() => {
    window.removeEventListener("keydown", O), window.removeEventListener("paste", H);
  });
  const Z = {
    // ...nodeTypes
  }, I = fr().customNodes;
  if (I)
    for (let W of Object.keys(I))
      Z[W] = hg;
  const P = fr().onDataChange;
  Ue(() => {
    P?.({
      nodes: Le.getNodes(),
      edges: Le.getEdges(),
      viewport: Le.getViewport()
    });
  });
  var A = {
    get onInit() {
      return n();
    },
    set onInit(W) {
      n(W), m();
    },
    get colorMode() {
      return r();
    },
    set colorMode(W) {
      r(W), m();
    }
  }, x = Z7(), C = F(x), M = Le.getNodes, z = Le.setNodes, K = Le.getEdges, X = Le.setEdges, $ = Le.getViewport, Y = Le.setViewport;
  {
    let W = /* @__PURE__ */ N(() => ({ ...p7, ...Z })), G = /* @__PURE__ */ N(() => ({
      markerEnd: { type: Ho.ArrowClosed, width: 20, height: 20 }
    }));
    Ff(C, {
      get colorMode() {
        return r();
      },
      get nodeTypes() {
        return u(W);
      },
      get nodes() {
        return M();
      },
      set nodes(R) {
        z(R);
      },
      get edges() {
        return K();
      },
      set edges(R) {
        X(R);
      },
      get viewport() {
        return $();
      },
      set viewport(R) {
        Y(R);
      },
      class: "tinyflow-logo",
      ondrop: d,
      ondragover: c,
      isValidConnection: h,
      onconnectend: w,
      onconnectstart: _,
      onconnect: S,
      connectionRadius: 50,
      onedgeclick: (R) => {
        Q(s, !0), Q(a, R.edge, !0);
      },
      onbeforeconnect: (R) => ({ ...R, id: Wn() }),
      ondelete: k,
      onclick: (R) => {
        const j = R.target;
        j.classList.contains("svelte-flow__edge-interaction") || j.classList.contains("panel-content") || j.closest(".panel-content") || (Q(s, !1), Q(a, null));
      },
      get defaultEdgeOptions() {
        return u(G);
      },
      children: (R, j) => {
        var ee = W7(), ne = oe(ee);
        Jf(ne, {});
        var J = L(ne, 2);
        qf(J, {});
        var Ce = L(J, 2);
        eh(Ce, {});
        var ie = L(Ce, 2);
        {
          var le = (re) => {
            ii(re, {
              children: (he, me) => {
                var Se = K7(), fe = L(F(Se), 4), xe = F(fe);
                {
                  let Oe = /* @__PURE__ */ N(() => u(a)?.data?.condition);
                  Ye(xe, {
                    rows: 3,
                    placeholder: "请输入边条件",
                    style: "width: 100%",
                    get value() {
                      return u(Oe);
                    },
                    onchange: (Be) => {
                      u(a) && l(u(a).id, { condition: Be.target?.value });
                    }
                  });
                }
                B(fe);
                var Ae = L(fe, 2), q = F(Ae);
                ze(q, {
                  variant: "destructive",
                  onclick: () => {
                    E(u(a)?.id), Q(s, !1);
                  },
                  children: (Oe, Be) => {
                    ye();
                    var Ie = Ne("删除");
                    D(Oe, Ie);
                  },
                  $$slots: { default: !0 }
                });
                var lt = L(q, 2);
                ze(lt, {
                  variant: "default",
                  onclick: () => {
                    Q(s, !1);
                  },
                  children: (Oe, Be) => {
                    ye();
                    var Ie = Ne("保存");
                    D(Oe, Ie);
                  },
                  $$slots: { default: !0 }
                }), B(Ae), B(Se), D(he, Se);
              },
              $$slots: { default: !0 }
            });
          };
          se(ie, (re) => {
            u(s) && re(le);
          });
        }
        D(R, ee);
      },
      $$slots: { default: !0 }
    });
  }
  var U = L(C, 2);
  return fg(U, {}), B(x), D(e, x), ue(A);
}
ae(gg, { onInit: {}, colorMode: {} }, [], [], !0);
const vg = typeof window < "u" ? window : void 0;
function j7(e) {
  let t = e.activeElement;
  for (; t?.shadowRoot; ) {
    const n = t.shadowRoot.activeElement;
    if (n === t)
      break;
    t = n;
  }
  return t;
}
let X7 = class {
  #t;
  #e;
  constructor(t = {}) {
    const { window: n = vg, document: r = n?.document } = t;
    n !== void 0 && (this.#t = r, this.#e = ho((o) => {
      const i = En(n, "focusin", o), s = En(n, "focusout", o);
      return () => {
        i(), s();
      };
    }));
  }
  get current() {
    return this.#e?.(), this.#t ? j7(this.#t) : null;
  }
};
new X7();
function q7(e, t) {
  switch (e) {
    case "post":
      Ue(t);
      break;
    case "pre":
      Kt(t);
      break;
  }
}
function pg(e, t, n, r = {}) {
  const { lazy: o = !1 } = r;
  let i = !o, s = Array.isArray(e) ? [] : void 0;
  q7(t, () => {
    const a = Array.isArray(e) ? e.map((c) => c()) : e();
    if (!i) {
      i = !0, s = a;
      return;
    }
    const l = Je(() => n(a, s));
    return s = a, l;
  });
}
function Tl(e, t, n) {
  pg(e, "post", t, n);
}
function G7(e, t, n) {
  pg(e, "pre", t, n);
}
Tl.pre = G7;
function U7(e, t) {
  switch (e) {
    case "local":
      return t.localStorage;
    case "session":
      return t.sessionStorage;
  }
}
class mg {
  #t;
  #e;
  #n;
  #r;
  #i;
  #o = /* @__PURE__ */ Pe(0);
  constructor(t, n, r = {}) {
    const {
      storage: o = "local",
      serializer: i = { serialize: JSON.stringify, deserialize: JSON.parse },
      syncTabs: s = !0,
      window: a = vg
    } = r;
    if (this.#t = n, this.#e = t, this.#n = i, a === void 0) return;
    const l = U7(o, a);
    this.#r = l;
    const c = l.getItem(t);
    c !== null ? this.#t = this.#a(c) : this.#l(n), s && o === "local" && (this.#i = ho(() => En(a, "storage", this.#s)));
  }
  get current() {
    this.#i?.(), u(this.#o);
    const t = this.#a(this.#r?.getItem(this.#e)) ?? this.#t, n = /* @__PURE__ */ new WeakMap(), r = (o) => {
      if (o === null || o?.constructor.name === "Date" || typeof o != "object")
        return o;
      let i = n.get(o);
      return i || (i = new Proxy(o, {
        get: (s, a) => (u(this.#o), r(Reflect.get(s, a))),
        set: (s, a, l) => (Q(this.#o, u(this.#o) + 1), Reflect.set(s, a, l), this.#l(t), !0)
      }), n.set(o, i)), i;
    };
    return r(t);
  }
  set current(t) {
    this.#l(t), Q(this.#o, u(this.#o) + 1);
  }
  #s = (t) => {
    t.key !== this.#e || t.newValue === null || (this.#t = this.#a(t.newValue), Q(this.#o, u(this.#o) + 1));
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
function ru(e) {
  return e.filter((t) => t.length > 0);
}
const yg = {
  getItem: (e) => null,
  setItem: (e, t) => {
  }
}, ui = typeof document < "u";
function J7(e) {
  return typeof e == "function";
}
function Q7(e) {
  return e !== null && typeof e == "object";
}
const Zo = Symbol("box"), Al = Symbol("is-writable");
function e3(e) {
  return Q7(e) && Zo in e;
}
function t3(e) {
  return it.isBox(e) && Al in e;
}
function it(e) {
  let t = /* @__PURE__ */ Pe(Ct(e));
  return {
    [Zo]: !0,
    [Al]: !0,
    get current() {
      return u(t);
    },
    set current(n) {
      Q(t, n, !0);
    }
  };
}
function n3(e, t) {
  const n = /* @__PURE__ */ N(e);
  return t ? {
    [Zo]: !0,
    [Al]: !0,
    get current() {
      return u(n);
    },
    set current(r) {
      t(r);
    }
  } : {
    [Zo]: !0,
    get current() {
      return e();
    }
  };
}
function r3(e) {
  return it.isBox(e) ? e : J7(e) ? it.with(e) : it(e);
}
function o3(e) {
  return Object.entries(e).reduce(
    (t, [n, r]) => it.isBox(r) ? (it.isWritableBox(r) ? Object.defineProperty(t, n, {
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
function i3(e) {
  return it.isWritableBox(e) ? {
    [Zo]: !0,
    get current() {
      return e.current;
    }
  } : e;
}
it.from = r3;
it.with = n3;
it.flatten = o3;
it.readonly = i3;
it.isBox = e3;
it.isWritableBox = t3;
function s3(e, t) {
  const n = RegExp(e, "g");
  return (r) => {
    if (typeof r != "string")
      throw new TypeError(`expected an argument of type string, but got ${typeof r}`);
    return r.match(n) ? r.replace(n, t) : r;
  };
}
const a3 = s3(/[A-Z]/, (e) => `-${e.toLowerCase()}`);
function l3(e) {
  if (!e || typeof e != "object" || Array.isArray(e))
    throw new TypeError(`expected an argument of type object, but got ${typeof e}`);
  return Object.keys(e).map((t) => `${a3(t)}: ${e[t]};`).join(`
`);
}
function c3(e = {}) {
  return l3(e).replace(`
`, " ");
}
const u3 = {
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
c3(u3);
const d3 = typeof window < "u" ? window : void 0;
function f3(e) {
  let t = e.activeElement;
  for (; t?.shadowRoot; ) {
    const n = t.shadowRoot.activeElement;
    if (n === t)
      break;
    t = n;
  }
  return t;
}
class h3 {
  #t;
  #e;
  constructor(t = {}) {
    const { window: n = d3, document: r = n?.document } = t;
    n !== void 0 && (this.#t = r, this.#e = ho((o) => {
      const i = En(n, "focusin", o), s = En(n, "focusout", o);
      return () => {
        i(), s();
      };
    }));
  }
  get current() {
    return this.#e?.(), this.#t ? f3(this.#t) : null;
  }
}
new h3();
const Sr = it("mode-watcher-mode"), Er = it("mode-watcher-theme"), g3 = ["dark", "light", "system"];
function Ma(e) {
  return typeof e != "string" ? !1 : g3.includes(e);
}
class v3 {
  #t = "system";
  #e = ui ? localStorage : yg;
  #n = this.#e.getItem(Sr.current);
  #r = Ma(this.#n) ? this.#n : this.#t;
  #i = /* @__PURE__ */ Pe(Ct(this.#o()));
  #o(t = this.#r) {
    return new mg(Sr.current, t, {
      serializer: {
        serialize: (n) => n,
        deserialize: (n) => Ma(n) ? n : this.#t
      }
    });
  }
  constructor() {
    go(() => Tl.pre(() => Sr.current, (t, n) => {
      const r = u(this.#i).current;
      Q(this.#i, this.#o(r), !0), n && localStorage.removeItem(n);
    }));
  }
  get current() {
    return u(this.#i).current;
  }
  set current(t) {
    u(this.#i).current = t;
  }
}
class p3 {
  #t = void 0;
  #e = !0;
  #n = /* @__PURE__ */ Pe(Ct(this.#t));
  #r = typeof window < "u" && typeof window.matchMedia == "function" ? new bf("prefers-color-scheme: light") : { current: !1 };
  query() {
    ui && Q(this.#n, this.#r.current ? "light" : "dark", !0);
  }
  tracking(t) {
    this.#e = t;
  }
  constructor() {
    go(() => {
      Kt(() => {
        this.#e && this.query();
      });
    }), this.query = this.query.bind(this), this.tracking = this.tracking.bind(this);
  }
  get current() {
    return u(this.#n);
  }
}
const Da = new v3(), Oa = new p3();
class m3 {
  #t = ui ? localStorage : yg;
  #e = this.#t.getItem(Er.current);
  #n = this.#e === null || this.#e === void 0 ? "" : this.#e;
  #r = /* @__PURE__ */ Pe(Ct(this.#i()));
  #i(t = this.#n) {
    return new mg(Er.current, t, {
      serializer: {
        serialize: (n) => typeof n != "string" ? "" : n,
        deserialize: (n) => n
      }
    });
  }
  constructor() {
    go(() => Tl.pre(() => Er.current, (t, n) => {
      const r = u(this.#r).current;
      Q(this.#r, this.#i(r), !0), n && localStorage.removeItem(n);
    }));
  }
  /**
   * The current theme.
   * @returns The current theme.
   */
  get current() {
    return u(this.#r).current;
  }
  /**
   * Set the current theme.
   * @param newValue The new theme to set.
   */
  set current(t) {
    u(this.#r).current = t;
  }
}
const Di = new m3();
let ou, iu, su = !1, xo = null;
function y3() {
  return xo || (xo = document.createElement("style"), xo.appendChild(document.createTextNode(`* {
		-webkit-transition: none !important;
		-moz-transition: none !important;
		-o-transition: none !important;
		-ms-transition: none !important;
		transition: none !important;
	}`)), xo);
}
function wg(e, t = !1) {
  if (typeof document > "u")
    return;
  if (!su) {
    su = !0, e();
    return;
  }
  if (typeof process < "u" && process.env?.NODE_ENV === "test" || typeof window < "u" && window.__vitest_worker__) {
    e();
    return;
  }
  clearTimeout(ou), clearTimeout(iu);
  const r = y3(), o = () => document.head.appendChild(r), i = () => {
    r.parentNode && document.head.removeChild(r);
  };
  function s() {
    e(), window.requestAnimationFrame(i);
  }
  if (typeof window.requestAnimationFrame < "u") {
    o(), t ? s() : window.requestAnimationFrame(() => {
      s();
    });
    return;
  }
  o(), ou = window.setTimeout(() => {
    e(), iu = window.setTimeout(i, 16);
  }, 16);
}
const or = it(void 0), is = it(!0), ss = it(!1), za = it([]), Va = it([]);
function w3() {
  const e = /* @__PURE__ */ N(() => {
    if (!ui) return;
    const t = Da.current === "system" ? Oa.current : Da.current, n = ru(za.current), r = ru(Va.current);
    function o() {
      const i = document.documentElement, s = document.querySelector('meta[name="theme-color"]');
      t === "light" ? (n.length && i.classList.remove(...n), r.length && i.classList.add(...r), i.style.colorScheme = "light", s && or.current && s.setAttribute("content", or.current.light)) : (r.length && i.classList.remove(...r), n.length && i.classList.add(...n), i.style.colorScheme = "dark", s && or.current && s.setAttribute("content", or.current.dark));
    }
    return is.current ? wg(o, ss.current) : o(), t;
  });
  return {
    get current() {
      return u(e);
    }
  };
}
function b3() {
  const e = /* @__PURE__ */ N(() => {
    if (Di.current, !ui) return;
    function t() {
      document.documentElement.setAttribute("data-theme", Di.current);
    }
    return is.current ? wg(t, Je(() => ss.current)) : t(), Di.current;
  });
  return {
    get current() {
      return u(e);
    }
  };
}
const x3 = w3(), _3 = b3();
function bg(e) {
  Da.current = e;
}
function C3(e) {
  Di.current = e;
}
function k3({ defaultMode: e = "system", themeColors: t, darkClassNames: n = ["dark"], lightClassNames: r = [], defaultTheme: o = "", modeStorageKey: i = "mode-watcher-mode", themeStorageKey: s = "mode-watcher-theme" }) {
  const a = document.documentElement, l = localStorage.getItem(i) ?? e, c = localStorage.getItem(s) ?? o, d = l === "light" || l === "system" && window.matchMedia("(prefers-color-scheme: light)").matches;
  if (d ? (n.length && a.classList.remove(...n.filter(Boolean)), r.length && a.classList.add(...r.filter(Boolean))) : (r.length && a.classList.remove(...r.filter(Boolean)), n.length && a.classList.add(...n.filter(Boolean))), a.style.colorScheme = d ? "light" : "dark", t) {
    const f = document.querySelector('meta[name="theme-color"]');
    f && f.setAttribute("content", l === "light" ? t.light : t.dark);
  }
  c && (a.setAttribute("data-theme", c), localStorage.setItem(s, c)), localStorage.setItem(i, l);
}
var S3 = /* @__PURE__ */ te('<meta name="theme-color"/>');
function xg(e, t) {
  ce(t, !0);
  let n = y(t, "themeColors", 7);
  var r = {
    get themeColors() {
      return n();
    },
    set themeColors(a) {
      n(a), m();
    }
  }, o = _e(), i = oe(o);
  {
    var s = (a) => {
      var l = S3();
      Ee(() => ke(l, "content", n().dark)), D(a, l);
    };
    se(i, (a) => {
      n() && a(s);
    });
  }
  return D(e, o), ue(r);
}
ae(xg, { themeColors: {} }, [], [], !0);
var E3 = /* @__PURE__ */ te('<meta name="theme-color"/>'), N3 = /* @__PURE__ */ te("<!> <!>", 1);
function _g(e, t) {
  ce(t, !0);
  let n = y(t, "trueNonce", 7, ""), r = y(t, "initConfig", 7), o = y(t, "themeColors", 7);
  var i = {
    get trueNonce() {
      return n();
    },
    set trueNonce(s = "") {
      n(s), m();
    },
    get initConfig() {
      return r();
    },
    set initConfig(s) {
      r(s), m();
    },
    get themeColors() {
      return o();
    },
    set themeColors(s) {
      o(s), m();
    }
  };
  return Wv("171tvz2", (s) => {
    var a = N3(), l = oe(a);
    {
      var c = (f) => {
        var h = E3();
        Ee(() => ke(h, "content", o().dark)), D(f, h);
      };
      se(l, (f) => {
        o() && f(c);
      });
    }
    var d = L(l, 2);
    ys(d, () => `<script${n() ? ` nonce=${n()}` : ""}>(` + k3.toString() + ")(" + JSON.stringify(r()) + ");<\/script>"), D(s, a);
  }), ue(i);
}
ae(_g, { trueNonce: {}, initConfig: {}, themeColors: {} }, [], [], !0);
function Cg(e, t) {
  ce(t, !0);
  let n = y(t, "track", 7, !0), r = y(t, "defaultMode", 7, "system"), o = y(t, "themeColors", 7), i = y(t, "disableTransitions", 7, !0), s = y(t, "darkClassNames", 23, () => ["dark"]), a = y(t, "lightClassNames", 23, () => []), l = y(t, "defaultTheme", 7, ""), c = y(t, "nonce", 7, ""), d = y(t, "themeStorageKey", 7, "mode-watcher-theme"), f = y(t, "modeStorageKey", 7, "mode-watcher-mode"), h = y(t, "disableHeadScriptInjection", 7, !1), g = y(t, "synchronousModeChanges", 7, !1);
  Sr.current = f(), Er.current = d(), za.current = s(), Va.current = a(), is.current = i(), or.current = o(), ss.current = g(), Kt(() => {
    ss.current = g();
  }), Kt(() => {
    is.current = i();
  }), Kt(() => {
    or.current = o();
  }), Kt(() => {
    za.current = s();
  }), Kt(() => {
    Va.current = a();
  }), Kt(() => {
    Sr.current = f();
  }), Kt(() => {
    Er.current = d();
  }), Kt(() => {
    x3.current, Sr.current, Er.current, _3.current;
  }), Tn(() => {
    Oa.tracking(n()), Oa.query();
    const S = localStorage.getItem(Sr.current);
    bg(Ma(S) ? S : r());
    const T = localStorage.getItem(Er.current);
    C3(T || l());
  });
  const v = {
    defaultMode: r(),
    themeColors: o(),
    darkClassNames: s(),
    lightClassNames: a(),
    defaultTheme: l(),
    modeStorageKey: f(),
    themeStorageKey: d()
  }, p = /* @__PURE__ */ N(() => typeof window > "u" ? c() : "");
  var w = {
    get track() {
      return n();
    },
    set track(S = !0) {
      n(S), m();
    },
    get defaultMode() {
      return r();
    },
    set defaultMode(S = "system") {
      r(S), m();
    },
    get themeColors() {
      return o();
    },
    set themeColors(S) {
      o(S), m();
    },
    get disableTransitions() {
      return i();
    },
    set disableTransitions(S = !0) {
      i(S), m();
    },
    get darkClassNames() {
      return s();
    },
    set darkClassNames(S = ["dark"]) {
      s(S), m();
    },
    get lightClassNames() {
      return a();
    },
    set lightClassNames(S = []) {
      a(S), m();
    },
    get defaultTheme() {
      return l();
    },
    set defaultTheme(S = "") {
      l(S), m();
    },
    get nonce() {
      return c();
    },
    set nonce(S = "") {
      c(S), m();
    },
    get themeStorageKey() {
      return d();
    },
    set themeStorageKey(S = "mode-watcher-theme") {
      d(S), m();
    },
    get modeStorageKey() {
      return f();
    },
    set modeStorageKey(S = "mode-watcher-mode") {
      f(S), m();
    },
    get disableHeadScriptInjection() {
      return h();
    },
    set disableHeadScriptInjection(S = !1) {
      h(S), m();
    },
    get synchronousModeChanges() {
      return g();
    },
    set synchronousModeChanges(S = !1) {
      g(S), m();
    }
  }, b = _e(), k = oe(b);
  {
    var E = (S) => {
      xg(S, {
        get themeColors() {
          return or.current;
        }
      });
    }, _ = (S) => {
      _g(S, {
        get trueNonce() {
          return u(p);
        },
        get initConfig() {
          return v;
        },
        get themeColors() {
          return or.current;
        }
      });
    };
    se(k, (S) => {
      h() ? S(E) : S(_, !1);
    });
  }
  return D(e, b), ue(w);
}
ae(
  Cg,
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
var P3 = /* @__PURE__ */ te("<!> <!>", 1);
function T3(e, t) {
  ce(t, !0);
  const n = y(t, "options", 7), r = y(t, "onInit", 7);
  let { data: o, theme: i = "system" } = n();
  if (bg(i), typeof o == "string")
    try {
      o = JSON.parse(o.trim());
    } catch {
      console.error("Invalid JSON data:", o);
    }
  Le.init(o?.nodes || [], o?.edges || []), Mr("tinyflow_options", n());
  var s = {
    get options() {
      return n();
    },
    set options(d) {
      n(d), m();
    },
    get onInit() {
      return r();
    },
    set onInit(d) {
      r(d), m();
    }
  }, a = P3(), l = oe(a);
  Cg(l, {});
  var c = L(l, 2);
  return Kf(c, {
    children: (d, f) => {
      gg(d, {
        get onInit() {
          return r();
        },
        get colorMode() {
          return i;
        }
      });
    },
    $$slots: { default: !0 }
  }), D(e, a), ue(s);
}
customElements.define("tinyflow-component", ae(T3, { options: {}, onInit: {} }, [], [], !1));
export {
  $3 as Tinyflow
};
//# sourceMappingURL=index.js.map
