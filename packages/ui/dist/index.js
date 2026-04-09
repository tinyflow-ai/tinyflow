const $v = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add($v);
const Rd = 1, Fd = 2, Bd = 4, Kv = 8, Wv = 16, Zv = 1, Yv = 2, $d = 4, qv = 8, jv = 16, Kd = 1, Xv = 2, Wd = "[", js = "[!", Rl = "]", Zr = {}, Pt = Symbol(), Uv = "http://www.w3.org/1999/xhtml", Gv = "http://www.w3.org/2000/svg", Zd = "@attach", Ba = !1;
var Xs = Array.isArray, Jv = Array.prototype.indexOf, Fl = Array.from, ds = Object.keys, fs = Object.defineProperty, Qn = Object.getOwnPropertyDescriptor, Yd = Object.getOwnPropertyDescriptors, qd = Object.prototype, Qv = Array.prototype, Us = Object.getPrototypeOf, Jc = Object.isExtensible;
function Lo(t) {
  return typeof t == "function";
}
const Be = () => {
};
function em(t) {
  return t();
}
function $a(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
function jd() {
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
function Oo(t, e) {
  if (Array.isArray(t))
    return t;
  if (e === void 0 || !(Symbol.iterator in t))
    return Array.from(t);
  const n = [];
  for (const r of t)
    if (n.push(r), n.length === e) break;
  return n;
}
const Ot = 2, Bl = 4, Gs = 8, Xd = 1 << 24, lr = 16, cr = 32, Nr = 64, Js = 128, yn = 512, Vt = 1024, Ut = 2048, ur = 4096, en = 8192, er = 16384, Qs = 32768, rr = 65536, Qc = 1 << 17, $l = 1 << 18, eo = 1 << 19, Ud = 1 << 20, Yr = 32768, Ka = 1 << 21, Kl = 1 << 22, wr = 1 << 23, In = Symbol("$state"), Wl = Symbol("legacy props"), tm = Symbol(""), fo = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), nm = 1, ea = 3, dr = 8;
function Zl(t) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function rm() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function om(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function im() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function sm(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function am() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function lm() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function cm(t) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function um() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function dm() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function fm() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function hm() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function vi(t) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function gm() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function pm() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let Ce = !1;
function Ft(t) {
  Ce = t;
}
let Ie;
function dt(t) {
  if (t === null)
    throw vi(), Zr;
  return Ie = t;
}
function wn() {
  return dt(
    /** @type {TemplateNode} */
    /* @__PURE__ */ nn(Ie)
  );
}
function Y(t) {
  if (Ce) {
    if (/* @__PURE__ */ nn(Ie) !== null)
      throw vi(), Zr;
    Ie = t;
  }
}
function Ee(t = 1) {
  if (Ce) {
    for (var e = t, n = Ie; e--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ nn(n);
    Ie = n;
  }
}
function hs(t = !0) {
  for (var e = 0, n = Ie; ; ) {
    if (n.nodeType === dr) {
      var r = (
        /** @type {Comment} */
        n.data
      );
      if (r === Rl) {
        if (e === 0) return n;
        e -= 1;
      } else (r === Wd || r === js) && (e += 1);
    }
    var o = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ nn(n)
    );
    t && n.remove(), n = o;
  }
}
function Gd(t) {
  if (!t || t.nodeType !== dr)
    throw vi(), Zr;
  return (
    /** @type {Comment} */
    t.data
  );
}
function Jd(t) {
  return t === this.v;
}
function Qd(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function ef(t) {
  return !Qd(t, this.v);
}
let Ao = !1, vm = !1;
function mm() {
  Ao = !0;
}
const ym = [];
function Yl(t, e = !1, n = !1) {
  return Ji(t, /* @__PURE__ */ new Map(), "", ym, null, n);
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
    if (Xs(t)) {
      var a = (
        /** @type {Snapshot<any>} */
        Array(t.length)
      );
      e.set(t, a), o !== null && e.set(o, a);
      for (var l = 0; l < t.length; l += 1) {
        var c = t[l];
        l in t && (a[l] = Ji(c, e, n, r, null, i));
      }
      return a;
    }
    if (Us(t) === qd) {
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
let it = null;
function yo(t) {
  it = t;
}
function bn(t) {
  return (
    /** @type {T} */
    ta().get(t)
  );
}
function qr(t, e) {
  return ta().set(t, e), e;
}
function wm(t) {
  return ta().has(t);
}
function bm() {
  return ta();
}
function le(t, e = !1, n) {
  it = {
    p: it,
    i: !1,
    c: null,
    e: null,
    s: t,
    x: null,
    l: Ao && !e ? { s: null, u: null, $: [] } : null
  };
}
function ce(t) {
  var e = (
    /** @type {ComponentContext} */
    it
  ), n = e.e;
  if (n !== null) {
    e.e = null;
    for (var r of n)
      bf(r);
  }
  return t !== void 0 && (e.x = t), e.i = !0, it = e.p, t ?? /** @type {T} */
  {};
}
function To() {
  return !Ao || it !== null && it.l === null;
}
function ta(t) {
  return it === null && Zl(), it.c ??= new Map(xm(it) || void 0);
}
function xm(t) {
  let e = t.p;
  for (; e !== null; ) {
    const n = e.c;
    if (n !== null)
      return n;
    e = e.p;
  }
  return null;
}
let Hr = [];
function tf() {
  var t = Hr;
  Hr = [], $a(t);
}
function Or(t) {
  if (Hr.length === 0 && !Go) {
    var e = Hr;
    queueMicrotask(() => {
      e === Hr && tf();
    });
  }
  Hr.push(t);
}
function _m() {
  for (; Hr.length > 0; )
    tf();
}
function nf(t) {
  var e = Ze;
  if (e === null)
    return Xe.f |= wr, t;
  if ((e.f & Qs) === 0) {
    if ((e.f & Js) === 0)
      throw t;
    e.b.error(t);
  } else
    wo(t, e);
}
function wo(t, e) {
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
const Li = /* @__PURE__ */ new Set();
let et = null, Qi = null, an = null, sn = [], na = null, Wa = !1, Go = !1;
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
    sn = [], Qi = null, this.apply();
    var n = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: [],
      block_effects: []
    };
    for (const r of e)
      this.#s(r, n);
    this.is_fork || this.#u(), this.is_deferred() ? (this.#l(n.effects), this.#l(n.render_effects), this.#l(n.block_effects)) : (Qi = this, et = null, eu(n.render_effects), eu(n.effects), Qi = null, this.#o?.resolve()), an = null;
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   * @param {EffectTarget} target
   */
  #s(e, n) {
    e.f ^= Vt;
    for (var r = e.first; r !== null; ) {
      var o = r.f, i = (o & (cr | Nr)) !== 0, s = i && (o & Vt) !== 0, a = s || (o & en) !== 0 || this.skipped_effects.has(r);
      if ((r.f & Js) !== 0 && r.b?.is_pending() && (n = {
        parent: n,
        effect: r,
        effects: [],
        render_effects: [],
        block_effects: []
      }), !a && r.fn !== null) {
        i ? r.f ^= Vt : (o & Bl) !== 0 ? n.effects.push(r) : yi(r) && ((r.f & lr) !== 0 && n.block_effects.push(r), ri(r));
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
  #l(e) {
    for (const n of e)
      ((n.f & Ut) !== 0 ? this.#i : this.#a).push(n), this.#c(n.deps), zt(n, Vt);
  }
  /**
   * @param {Value[] | null} deps
   */
  #c(e) {
    if (e !== null)
      for (const n of e)
        (n.f & Ot) === 0 || (n.f & Yr) === 0 || (n.f ^= Yr, this.#c(
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
    this.previous.has(e) || this.previous.set(e, n), (e.f & wr) === 0 && (this.current.set(e, e.v), an?.set(e, e.v));
  }
  activate() {
    et = this, this.apply();
  }
  deactivate() {
    et === this && (et = null, an = null);
  }
  flush() {
    if (this.activate(), sn.length > 0) {
      if (rf(), et !== null && et !== this)
        return;
    } else this.#n === 0 && this.process([]);
    this.deactivate();
  }
  discard() {
    for (const e of this.#t) e(this);
    this.#t.clear();
  }
  #u() {
    if (this.#r === 0) {
      for (const e of this.#e) e();
      this.#e.clear();
    }
    this.#n === 0 && this.#d();
  }
  #d() {
    if (Li.size > 1) {
      this.previous.clear();
      var e = an, n = !0, r = {
        parent: null,
        effect: null,
        effects: [],
        render_effects: [],
        block_effects: []
      };
      for (const i of Li) {
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
          var o = sn;
          sn = [];
          const l = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Map();
          for (const d of s)
            of(d, a, l, c);
          if (sn.length > 0) {
            et = i, i.apply();
            for (const d of sn)
              i.#s(d, r);
            i.deactivate();
          }
          sn = o;
        }
      }
      et = null, an = e;
    }
    this.committed = !0, Li.delete(this);
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
      zt(e, Ut), jr(e);
    for (const e of this.#a)
      zt(e, ur), jr(e);
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
    return (this.#o ??= jd()).promise;
  }
  static ensure() {
    if (et === null) {
      const e = et = new pn();
      Li.add(et), Go || pn.enqueue(() => {
        et === e && e.flush();
      });
    }
    return et;
  }
  /** @param {() => void} task */
  static enqueue(e) {
    Or(e);
  }
  apply() {
  }
}
function g(t) {
  var e = Go;
  Go = !0;
  try {
    for (var n; ; ) {
      if (_m(), sn.length === 0 && (et?.flush(), sn.length === 0))
        return na = null, /** @type {T} */
        n;
      rf();
    }
  } finally {
    Go = e;
  }
}
function rf() {
  var t = xr;
  Wa = !0;
  var e = null;
  try {
    var n = 0;
    for (ps(!0); sn.length > 0; ) {
      var r = pn.ensure();
      if (n++ > 1e3) {
        var o, i;
        Cm();
      }
      r.process(sn), br.clear();
    }
  } finally {
    Wa = !1, ps(t), na = null;
  }
}
function Cm() {
  try {
    am();
  } catch (t) {
    wo(t, na);
  }
}
let Yn = null;
function eu(t) {
  var e = t.length;
  if (e !== 0) {
    for (var n = 0; n < e; ) {
      var r = t[n++];
      if ((r.f & (er | en)) === 0 && yi(r) && (Yn = /* @__PURE__ */ new Set(), ri(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? Sf(r) : r.fn = null), Yn?.size > 0)) {
        br.clear();
        for (const o of Yn) {
          if ((o.f & (er | en)) !== 0) continue;
          const i = [o];
          let s = o.parent;
          for (; s !== null; )
            Yn.has(s) && (Yn.delete(s), i.push(s)), s = s.parent;
          for (let a = i.length - 1; a >= 0; a--) {
            const l = i[a];
            (l.f & (er | en)) === 0 && ri(l);
          }
        }
        Yn.clear();
      }
    }
    Yn = null;
  }
}
function of(t, e, n, r) {
  if (!n.has(t) && (n.add(t), t.reactions !== null))
    for (const o of t.reactions) {
      const i = o.f;
      (i & Ot) !== 0 ? of(
        /** @type {Derived} */
        o,
        e,
        n,
        r
      ) : (i & (Kl | lr)) !== 0 && (i & Ut) === 0 && sf(o, e, r) && (zt(o, Ut), jr(
        /** @type {Effect} */
        o
      ));
    }
}
function sf(t, e, n) {
  const r = n.get(t);
  if (r !== void 0) return r;
  if (t.deps !== null)
    for (const o of t.deps) {
      if (e.includes(o))
        return !0;
      if ((o.f & Ot) !== 0 && sf(
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
function jr(t) {
  for (var e = na = t; e.parent !== null; ) {
    e = e.parent;
    var n = e.f;
    if (Wa && e === Ze && (n & lr) !== 0 && (n & $l) === 0)
      return;
    if ((n & (Nr | cr)) !== 0) {
      if ((n & Vt) === 0) return;
      e.f ^= Vt;
    }
  }
  sn.push(e);
}
function to(t) {
  let e = 0, n = or(0), r;
  return () => {
    ti() && (u(n), ro(() => (e === 0 && (r = at(() => t(() => On(n)))), e += 1, () => {
      Or(() => {
        e -= 1, e === 0 && (r?.(), r = void 0, On(n));
      });
    })));
  };
}
var km = rr | eo | Js;
function Sm(t, e, n) {
  new Em(t, e, n);
}
class Em {
  /** @type {Boundary | null} */
  parent;
  #e = !1;
  /** @type {TemplateNode} */
  #t;
  /** @type {TemplateNode | null} */
  #n = Ce ? Ie : null;
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
  #y = to(() => (this.#h = or(this.#d), () => {
    this.#h = null;
  }));
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(e, n, r) {
    this.#t = e, this.#r = n, this.#o = r, this.parent = /** @type {Effect} */
    Ze.b, this.#e = !!this.#r.pending, this.#i = Ar(() => {
      if (Ze.b = this, Ce) {
        const i = this.#n;
        wn(), /** @type {Comment} */
        i.nodeType === dr && /** @type {Comment} */
        i.data === js ? this.#w() : this.#v();
      } else {
        var o = this.#m();
        try {
          this.#a = Yt(() => r(o));
        } catch (i) {
          this.error(i);
        }
        this.#f > 0 ? this.#b() : this.#e = !1;
      }
      return () => {
        this.#u?.remove();
      };
    }, km), Ce && (this.#t = Ie);
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
      this.#a = this.#p(() => (pn.ensure(), Yt(() => this.#o(n)))), this.#f > 0 ? this.#b() : (go(
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
    return this.#e && (this.#u = Lt(), this.#t.before(this.#u), e = this.#u), e;
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
  #p(e) {
    var n = Ze, r = Xe, o = it;
    cn(this.#i), qt(this.#i), yo(this.#i.ctx);
    try {
      return e();
    } catch (i) {
      return nf(i), null;
    } finally {
      cn(n), qt(r), yo(o);
    }
  }
  #b() {
    const e = (
      /** @type {(anchor: Node) => void} */
      this.#r.pending
    );
    this.#a !== null && (this.#c = document.createDocumentFragment(), this.#c.append(
      /** @type {TemplateNode} */
      this.#u
    ), Nf(this.#a, this.#c)), this.#s === null && (this.#s = Yt(() => e(this.#t)));
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
    this.#f += e, this.#f === 0 && (this.#e = !1, this.#s && go(this.#s, () => {
      this.#s = null;
    }), this.#c && (this.#t.before(this.#c), this.#c = null));
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(e) {
    this.#x(e), this.#d += e, this.#h && bo(this.#h, this.#d);
  }
  get_effect_pending() {
    return this.#y(), u(
      /** @type {Source<number>} */
      this.#h
    );
  }
  /** @param {unknown} error */
  error(e) {
    var n = this.#r.onerror;
    let r = this.#r.failed;
    if (this.#g || !n && !r)
      throw e;
    this.#a && (Et(this.#a), this.#a = null), this.#s && (Et(this.#s), this.#s = null), this.#l && (Et(this.#l), this.#l = null), Ce && (dt(
      /** @type {TemplateNode} */
      this.#n
    ), Ee(), dt(hs()));
    var o = !1, i = !1;
    const s = () => {
      if (o) {
        pm();
        return;
      }
      o = !0, i && hm(), pn.ensure(), this.#d = 0, this.#l !== null && go(this.#l, () => {
        this.#l = null;
      }), this.#e = this.has_pending_snippet(), this.#a = this.#p(() => (this.#g = !1, Yt(() => this.#o(this.#t)))), this.#f > 0 ? this.#b() : this.#e = !1;
    };
    var a = Xe;
    try {
      qt(null), i = !0, n?.(e, s), i = !1;
    } catch (l) {
      wo(l, this.#i && this.#i.parent);
    } finally {
      qt(a);
    }
    r && Or(() => {
      this.#l = this.#p(() => {
        pn.ensure(), this.#g = !0;
        try {
          return Yt(() => {
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
          this.#g = !1;
        }
      });
    });
  }
}
function Xr(t, e) {
  return e;
}
function Pm(t, e, n) {
  for (var r = [], o = e.length, i = 0; i < o; i++)
    Ul(e[i].e, r, !0);
  Ef(r, () => {
    var s = r.length === 0 && n !== null;
    if (s) {
      var a = (
        /** @type {Element} */
        n
      ), l = (
        /** @type {Element} */
        a.parentNode
      );
      Xl(l), l.append(a), t.items.clear(), fn(t, e[0].prev, e[o - 1].next);
    }
    for (var c = 0; c < o; c++) {
      var d = e[c];
      s || (t.items.delete(d.k), fn(t, d.prev, d.next)), Et(d.e, !s);
    }
    t.first === e[0] && (t.first = e[0].prev);
  });
}
function Ct(t, e, n, r, o, i = null) {
  var s = t, a = /* @__PURE__ */ new Map(), l = null, c = (e & Bd) !== 0, d = (e & Rd) !== 0, f = (e & Fd) !== 0;
  if (c) {
    var h = (
      /** @type {Element} */
      t
    );
    s = Ce ? dt(
      /** @type {Comment | Text} */
      /* @__PURE__ */ wt(h)
    ) : h.appendChild(Lt());
  }
  Ce && wn();
  var v = null, m = /* @__PURE__ */ ql(() => {
    var _ = n();
    return Xs(_) ? _ : _ == null ? [] : Fl(_);
  }), y, w = !0;
  function b() {
    Nm(S, y, s, e, r), v !== null && (y.length === 0 ? (v.fragment ? (s.before(v.fragment), v.fragment = null) : Gl(v.effect), k.first = v.effect) : go(v.effect, () => {
      v = null;
    }));
  }
  var k = Ar(() => {
    y = /** @type {V[]} */
    u(m);
    var _ = y.length;
    let x = !1;
    if (Ce) {
      var O = Gd(s) === js;
      O !== (_ === 0) && (s = hs(), dt(s), Ft(!1), x = !0);
    }
    for (var z = /* @__PURE__ */ new Set(), V = (
      /** @type {Batch} */
      et
    ), B = null, $ = vf(), T = 0; T < _; T += 1) {
      Ce && Ie.nodeType === dr && /** @type {Comment} */
      Ie.data === Rl && (s = /** @type {Comment} */
      Ie, x = !0, Ft(!1));
      var E = y[T], M = r(E, T), C = w ? null : a.get(M);
      C ? (d && bo(C.v, E), f ? bo(
        /** @type {Value<number>} */
        C.i,
        T
      ) : C.i = T, $ && V.skipped_effects.delete(C.e)) : (C = Om(
        w ? s : null,
        B,
        E,
        M,
        T,
        o,
        e,
        n
      ), w && (C.o = !0, B === null ? l = C : B.next = C, B = C), a.set(M, C)), z.add(M);
    }
    if (_ === 0 && i && !v)
      if (w)
        v = {
          fragment: null,
          effect: Yt(() => i(s))
        };
      else {
        var N = document.createDocumentFragment(), I = Lt();
        N.append(I), v = {
          fragment: N,
          effect: Yt(() => i(I))
        };
      }
    if (Ce && _ > 0 && dt(hs()), !w)
      if ($) {
        for (const [L, Z] of a)
          z.has(L) || V.skipped_effects.add(Z.e);
        V.oncommit(b), V.ondiscard(() => {
        });
      } else
        b();
    x && Ft(!0), u(m);
  }), S = { effect: k, items: a, first: l };
  w = !1, Ce && (s = Ie);
}
function Nm(t, e, n, r, o) {
  var i = (r & Kv) !== 0, s = e.length, a = t.items, l = t.first, c, d = null, f, h = [], v = [], m, y, w, b;
  if (i)
    for (b = 0; b < s; b += 1)
      m = e[b], y = o(m, b), w = /** @type {EachItem} */
      a.get(y), w.o && (w.a?.measure(), (f ??= /* @__PURE__ */ new Set()).add(w));
  for (b = 0; b < s; b += 1) {
    if (m = e[b], y = o(m, b), w = /** @type {EachItem} */
    a.get(y), t.first ??= w, !w.o) {
      w.o = !0;
      var k = d ? d.next : l;
      fn(t, d, w), fn(t, w, k), ba(w, k, n), d = w, h = [], v = [], l = d.next;
      continue;
    }
    if ((w.e.f & en) !== 0 && (Gl(w.e), i && (w.a?.unfix(), (f ??= /* @__PURE__ */ new Set()).delete(w))), w !== l) {
      if (c !== void 0 && c.has(w)) {
        if (h.length < v.length) {
          var S = v[0], _;
          d = S.prev;
          var x = h[0], O = h[h.length - 1];
          for (_ = 0; _ < h.length; _ += 1)
            ba(h[_], S, n);
          for (_ = 0; _ < v.length; _ += 1)
            c.delete(v[_]);
          fn(t, x.prev, O.next), fn(t, d, x), fn(t, O, S), l = S, d = O, b -= 1, h = [], v = [];
        } else
          c.delete(w), ba(w, l, n), fn(t, w.prev, w.next), fn(t, w, d === null ? t.first : d.next), fn(t, d, w), d = w;
        continue;
      }
      for (h = [], v = []; l !== null && l.k !== y; )
        (l.e.f & en) === 0 && (c ??= /* @__PURE__ */ new Set()).add(l), v.push(l), l = l.next;
      if (l === null)
        continue;
      w = l;
    }
    h.push(w), d = w, l = w.next;
  }
  let z = a.size > s;
  if (l !== null || c !== void 0) {
    for (var V = c === void 0 ? [] : Fl(c); l !== null; )
      (l.e.f & en) === 0 && V.push(l), l = l.next;
    var B = V.length;
    if (z = a.size - B > s, B > 0) {
      var $ = (r & Bd) !== 0 && s === 0 ? n : null;
      if (i) {
        for (b = 0; b < B; b += 1)
          V[b].a?.measure();
        for (b = 0; b < B; b += 1)
          V[b].a?.fix();
      }
      Pm(t, V, $);
    }
  }
  if (z)
    for (const T of a.values())
      T.o || (fn(t, d, T), d = T);
  t.effect.last = d && d.e, i && Or(() => {
    if (f !== void 0)
      for (w of f)
        w.a?.apply();
  });
}
function Om(t, e, n, r, o, i, s, a) {
  var l = (s & Rd) !== 0, c = (s & Wv) === 0, d = l ? c ? /* @__PURE__ */ df(n, !1, !1) : or(n) : n, f = (s & Fd) === 0 ? o : or(o), h = {
    i: f,
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
      v.append(t = Lt());
    }
    return h.e = Yt(() => i(
      /** @type {Node} */
      t,
      d,
      f,
      a
    )), e !== null && (e.next = h), h;
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
      /* @__PURE__ */ nn(i)
    );
    o.before(i), i = s;
  }
}
function fn(t, e, n) {
  e === null ? (t.first = n, t.effect.first = n && n.e) : (e.e.next && (e.e.next.prev = null), e.next = n, e.e.next = n && n.e), n !== null && (n.e.prev && (n.e.prev.next = null), n.prev = e, n.e.prev = e && e.e);
}
function af(t, e, n, r) {
  const o = To() ? mi : ql;
  if (n.length === 0 && t.length === 0) {
    r(e.map(o));
    return;
  }
  var i = et, s = (
    /** @type {Effect} */
    Ze
  ), a = Am();
  function l() {
    Promise.all(n.map((c) => /* @__PURE__ */ Tm(c))).then((c) => {
      a();
      try {
        r([...e.map(o), ...c]);
      } catch (d) {
        (s.f & er) === 0 && wo(d, s);
      }
      i?.deactivate(), gs();
    }).catch((c) => {
      wo(c, s);
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
function Am() {
  var t = Ze, e = Xe, n = it, r = et;
  return function(i = !0) {
    cn(t), qt(e), yo(n), i && r?.activate();
  };
}
function gs() {
  cn(null), qt(null), yo(null);
}
// @__NO_SIDE_EFFECTS__
function mi(t) {
  var e = Ot | Ut, n = Xe !== null && (Xe.f & Ot) !== 0 ? (
    /** @type {Derived} */
    Xe
  ) : null;
  return Ze !== null && (Ze.f |= eo), {
    ctx: it,
    deps: null,
    effects: null,
    equals: Jd,
    f: e,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      Pt
    ),
    wv: 0,
    parent: n ?? Ze,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Tm(t, e) {
  let n = (
    /** @type {Effect | null} */
    Ze
  );
  n === null && rm();
  var r = (
    /** @type {Boundary} */
    n.b
  ), o = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), i = or(
    /** @type {V} */
    Pt
  ), s = !Xe, a = /* @__PURE__ */ new Map();
  return Rm(() => {
    var l = jd();
    o = l.promise;
    try {
      Promise.resolve(t()).then(l.resolve, l.reject).then(() => {
        c === et && c.committed && c.deactivate(), gs();
      });
    } catch (h) {
      l.reject(h), gs();
    }
    var c = (
      /** @type {Batch} */
      et
    );
    if (s) {
      var d = !r.is_pending();
      r.update_pending_count(1), c.increment(d), a.get(c)?.reject(fo), a.delete(c), a.set(c, l);
    }
    const f = (h, v = void 0) => {
      if (c.activate(), v)
        v !== fo && (i.f |= wr, bo(i, v));
      else {
        (i.f & wr) !== 0 && (i.f ^= wr), bo(i, h);
        for (const [m, y] of a) {
          if (a.delete(m), m === c) break;
          y.reject(fo);
        }
      }
      s && (r.update_pending_count(-1), c.decrement(d));
    };
    l.promise.then(f, (h) => f(null, h || "unknown"));
  }), oa(() => {
    for (const l of a.values())
      l.reject(fo);
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
function P(t) {
  const e = /* @__PURE__ */ mi(t);
  return Of(e), e;
}
// @__NO_SIDE_EFFECTS__
function ql(t) {
  const e = /* @__PURE__ */ mi(t);
  return e.equals = ef, e;
}
function lf(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var n = 0; n < e.length; n += 1)
      Et(
        /** @type {Effect} */
        e[n]
      );
  }
}
function Mm(t) {
  for (var e = t.parent; e !== null; ) {
    if ((e.f & Ot) === 0)
      return (e.f & er) === 0 ? (
        /** @type {Effect} */
        e
      ) : null;
    e = e.parent;
  }
  return null;
}
function jl(t) {
  var e, n = Ze;
  cn(Mm(t));
  try {
    t.f &= ~Yr, lf(t), e = Df(t);
  } finally {
    cn(n);
  }
  return e;
}
function cf(t) {
  var e = jl(t);
  if (t.equals(e) || (et?.is_fork || (t.v = e), t.wv = Tf()), !oo)
    if (an !== null)
      (ti() || et?.is_fork) && an.set(t, e);
    else {
      var n = (t.f & yn) === 0 ? ur : Vt;
      zt(t, n);
    }
}
let Za = /* @__PURE__ */ new Set();
const br = /* @__PURE__ */ new Map();
let uf = !1;
function or(t, e) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: Jd,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function ve(t, e) {
  const n = or(t);
  return Of(n), n;
}
// @__NO_SIDE_EFFECTS__
function df(t, e = !1, n = !0) {
  const r = or(t);
  return e || (r.equals = ef), Ao && n && it !== null && it.l !== null && (it.l.s ??= []).push(r), r;
}
function W(t, e, n = !1) {
  Xe !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Tn || (Xe.f & Qc) !== 0) && To() && (Xe.f & (Ot | lr | Kl | Qc)) !== 0 && !tr?.includes(t) && fm();
  let r = n ? ht(e) : e;
  return bo(t, r);
}
function bo(t, e) {
  if (!t.equals(e)) {
    var n = t.v;
    oo ? br.set(t, e) : br.set(t, n), t.v = e;
    var r = pn.ensure();
    r.capture(t, n), (t.f & Ot) !== 0 && ((t.f & Ut) !== 0 && jl(
      /** @type {Derived} */
      t
    ), zt(t, (t.f & yn) !== 0 ? Vt : ur)), t.wv = Tf(), ff(t, Ut), To() && Ze !== null && (Ze.f & Vt) !== 0 && (Ze.f & (cr | Nr)) === 0 && (on === null ? Bm([t]) : on.push(t)), !r.is_fork && Za.size > 0 && !uf && Dm();
  }
  return e;
}
function Dm() {
  uf = !1;
  var t = xr;
  ps(!0);
  const e = Array.from(Za);
  try {
    for (const n of e)
      (n.f & Vt) !== 0 && zt(n, ur), yi(n) && ri(n);
  } finally {
    ps(t);
  }
  Za.clear();
}
function tu(t, e = 1) {
  var n = u(t), r = e === 1 ? n++ : n--;
  return W(t, n), r;
}
function On(t) {
  W(t, t.v + 1);
}
function ff(t, e) {
  var n = t.reactions;
  if (n !== null)
    for (var r = To(), o = n.length, i = 0; i < o; i++) {
      var s = n[i], a = s.f;
      if (!(!r && s === Ze)) {
        var l = (a & Ut) === 0;
        if (l && zt(s, e), (a & Ot) !== 0) {
          var c = (
            /** @type {Derived} */
            s
          );
          an?.delete(c), (a & Yr) === 0 && (a & yn && (s.f |= Yr), ff(c, ur));
        } else l && ((a & lr) !== 0 && Yn !== null && Yn.add(
          /** @type {Effect} */
          s
        ), jr(
          /** @type {Effect} */
          s
        ));
      }
    }
}
function ht(t) {
  if (typeof t != "object" || t === null || In in t)
    return t;
  const e = Us(t);
  if (e !== qd && e !== Qv)
    return t;
  var n = /* @__PURE__ */ new Map(), r = Xs(t), o = /* @__PURE__ */ ve(0), i = nr, s = (a) => {
    if (nr === i)
      return a();
    var l = Xe, c = nr;
    qt(null), iu(i);
    var d = a();
    return qt(l), iu(c), d;
  };
  return r && n.set("length", /* @__PURE__ */ ve(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(a, l, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && um();
        var d = n.get(l);
        return d === void 0 ? d = s(() => {
          var f = /* @__PURE__ */ ve(c.value);
          return n.set(l, f), f;
        }) : W(d, c.value, !0), !0;
      },
      deleteProperty(a, l) {
        var c = n.get(l);
        if (c === void 0) {
          if (l in a) {
            const d = s(() => /* @__PURE__ */ ve(Pt));
            n.set(l, d), On(o);
          }
        } else
          W(c, Pt), On(o);
        return !0;
      },
      get(a, l, c) {
        if (l === In)
          return t;
        var d = n.get(l), f = l in a;
        if (d === void 0 && (!f || Qn(a, l)?.writable) && (d = s(() => {
          var v = ht(f ? a[l] : Pt), m = /* @__PURE__ */ ve(v);
          return m;
        }), n.set(l, d)), d !== void 0) {
          var h = u(d);
          return h === Pt ? void 0 : h;
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
      has(a, l) {
        if (l === In)
          return !0;
        var c = n.get(l), d = c !== void 0 && c.v !== Pt || Reflect.has(a, l);
        if (c !== void 0 || Ze !== null && (!d || Qn(a, l)?.writable)) {
          c === void 0 && (c = s(() => {
            var h = d ? ht(a[l]) : Pt, v = /* @__PURE__ */ ve(h);
            return v;
          }), n.set(l, c));
          var f = u(c);
          if (f === Pt)
            return !1;
        }
        return d;
      },
      set(a, l, c, d) {
        var f = n.get(l), h = l in a;
        if (r && l === "length")
          for (var v = c; v < /** @type {Source<number>} */
          f.v; v += 1) {
            var m = n.get(v + "");
            m !== void 0 ? W(m, Pt) : v in a && (m = s(() => /* @__PURE__ */ ve(Pt)), n.set(v + "", m));
          }
        if (f === void 0)
          (!h || Qn(a, l)?.writable) && (f = s(() => /* @__PURE__ */ ve(void 0)), W(f, ht(c)), n.set(l, f));
        else {
          h = f.v !== Pt;
          var y = s(() => ht(c));
          W(f, y);
        }
        var w = Reflect.getOwnPropertyDescriptor(a, l);
        if (w?.set && w.set.call(d, c), !h) {
          if (r && typeof l == "string") {
            var b = (
              /** @type {Source<number>} */
              n.get("length")
            ), k = Number(l);
            Number.isInteger(k) && k >= b.v && W(b, k + 1);
          }
          On(o);
        }
        return !0;
      },
      ownKeys(a) {
        u(o);
        var l = Reflect.ownKeys(a).filter((f) => {
          var h = n.get(f);
          return h === void 0 || h.v !== Pt;
        });
        for (var [c, d] of n)
          d.v !== Pt && !(c in a) && l.push(c);
        return l;
      },
      setPrototypeOf() {
        dm();
      }
    }
  );
}
function nu(t) {
  try {
    if (t !== null && typeof t == "object" && In in t)
      return t[In];
  } catch {
  }
  return t;
}
function Im(t, e) {
  return Object.is(nu(t), nu(e));
}
var Wt, hf, gf, pf;
function Ya() {
  if (Wt === void 0) {
    Wt = window, hf = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype, n = Text.prototype;
    gf = Qn(e, "firstChild").get, pf = Qn(e, "nextSibling").get, Jc(t) && (t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__style = void 0, t.__e = void 0), Jc(n) && (n.__t = void 0);
  }
}
function Lt(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function wt(t) {
  return gf.call(t);
}
// @__NO_SIDE_EFFECTS__
function nn(t) {
  return pf.call(t);
}
function q(t, e) {
  if (!Ce)
    return /* @__PURE__ */ wt(t);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ wt(Ie)
  );
  if (n === null)
    n = Ie.appendChild(Lt());
  else if (e && n.nodeType !== ea) {
    var r = Lt();
    return n?.before(r), dt(r), r;
  }
  return dt(n), n;
}
function Q(t, e = !1) {
  if (!Ce) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ wt(
        /** @type {Node} */
        t
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ nn(n) : n;
  }
  if (e && Ie?.nodeType !== ea) {
    var r = Lt();
    return Ie?.before(r), dt(r), r;
  }
  return Ie;
}
function F(t, e = 1, n = !1) {
  let r = Ce ? Ie : t;
  for (var o; e--; )
    o = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ nn(r);
  if (!Ce)
    return r;
  if (n && r?.nodeType !== ea) {
    var i = Lt();
    return r === null ? o?.after(i) : r.before(i), dt(i), i;
  }
  return dt(r), /** @type {TemplateNode} */
  r;
}
function Xl(t) {
  t.textContent = "";
}
function vf() {
  return !1;
}
function Vm(t, e) {
  if (e) {
    const n = document.body;
    t.autofocus = !0, Or(() => {
      document.activeElement === n && t.focus();
    });
  }
}
function zm(t) {
  Ce && /* @__PURE__ */ wt(t) !== null && Xl(t);
}
let ru = !1;
function mf() {
  ru || (ru = !0, document.addEventListener(
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
  var e = Xe, n = Ze;
  qt(null), cn(null);
  try {
    return t();
  } finally {
    qt(e), cn(n);
  }
}
function yf(t, e, n, r = n) {
  t.addEventListener(e, () => ra(n));
  const o = t.__on_r;
  o ? t.__on_r = () => {
    o(), r(!0);
  } : t.__on_r = () => r(!0), mf();
}
function wf(t) {
  Ze === null && (Xe === null && sm(), im()), oo && om();
}
function Lm(t, e) {
  var n = e.last;
  n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t);
}
function un(t, e, n) {
  var r = Ze;
  r !== null && (r.f & en) !== 0 && (t |= en);
  var o = {
    ctx: it,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: t | Ut | yn,
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
      ri(o), o.f |= Qs;
    } catch (a) {
      throw Et(o), a;
    }
  else e !== null && jr(o);
  var i = o;
  if (n && i.deps === null && i.teardown === null && i.nodes_start === null && i.first === i.last && // either `null`, or a singular child
  (i.f & eo) === 0 && (i = i.first, (t & lr) !== 0 && (t & rr) !== 0 && i !== null && (i.f |= rr)), i !== null && (i.parent = r, r !== null && Lm(i, r), Xe !== null && (Xe.f & Ot) !== 0 && (t & Nr) === 0)) {
    var s = (
      /** @type {Derived} */
      Xe
    );
    (s.effects ??= []).push(i);
  }
  return o;
}
function ti() {
  return Xe !== null && !Tn;
}
function oa(t) {
  const e = un(Gs, null, !1);
  return zt(e, Vt), e.teardown = t, e;
}
function He(t) {
  wf();
  var e = (
    /** @type {Effect} */
    Ze.f
  ), n = !Xe && (e & cr) !== 0 && (e & Qs) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      it
    );
    (r.e ??= []).push(t);
  } else
    return bf(t);
}
function bf(t) {
  return un(Bl | Ud, t, !1);
}
function Zt(t) {
  return wf(), un(Gs | Ud, t, !0);
}
function no(t) {
  pn.ensure();
  const e = un(Nr | eo, t, !0);
  return () => {
    Et(e);
  };
}
function Hm(t) {
  pn.ensure();
  const e = un(Nr | eo, t, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? go(e, () => {
      Et(e), r(void 0);
    }) : (Et(e), r(void 0));
  });
}
function Mo(t) {
  return un(Bl, t, !1);
}
function Rm(t) {
  return un(Kl | eo, t, !0);
}
function ro(t, e = 0) {
  return un(Gs | e, t, !0);
}
function Te(t, e = [], n = [], r = []) {
  af(r, e, n, (o) => {
    un(Gs, () => t(...o.map(u)), !0);
  });
}
function Ar(t, e = 0) {
  var n = un(lr | e, t, !0);
  return n;
}
function xf(t, e = 0) {
  var n = un(Xd | e, t, !0);
  return n;
}
function Yt(t) {
  return un(cr | eo, t, !0);
}
function _f(t) {
  var e = t.teardown;
  if (e !== null) {
    const n = oo, r = Xe;
    ou(!0), qt(null);
    try {
      e.call(null);
    } finally {
      ou(n), qt(r);
    }
  }
}
function Cf(t, e = !1) {
  var n = t.first;
  for (t.first = t.last = null; n !== null; ) {
    const o = n.ac;
    o !== null && ra(() => {
      o.abort(fo);
    });
    var r = n.next;
    (n.f & Nr) !== 0 ? n.parent = null : Et(n, e), n = r;
  }
}
function Fm(t) {
  for (var e = t.first; e !== null; ) {
    var n = e.next;
    (e.f & cr) === 0 && Et(e), e = n;
  }
}
function Et(t, e = !0) {
  var n = !1;
  (e || (t.f & $l) !== 0) && t.nodes_start !== null && t.nodes_end !== null && (kf(
    t.nodes_start,
    /** @type {TemplateNode} */
    t.nodes_end
  ), n = !0), Cf(t, e && !n), vs(t, 0), zt(t, er);
  var r = t.transitions;
  if (r !== null)
    for (const i of r)
      i.stop();
  _f(t);
  var o = t.parent;
  o !== null && o.first !== null && Sf(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes_start = t.nodes_end = t.ac = null;
}
function kf(t, e) {
  for (; t !== null; ) {
    var n = t === e ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ nn(t)
    );
    t.remove(), t = n;
  }
}
function Sf(t) {
  var e = t.parent, n = t.prev, r = t.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), e !== null && (e.first === t && (e.first = r), e.last === t && (e.last = n));
}
function go(t, e, n = !0) {
  var r = [];
  Ul(t, r, !0), Ef(r, () => {
    n && Et(t), e && e();
  });
}
function Ef(t, e) {
  var n = t.length;
  if (n > 0) {
    var r = () => --n || e();
    for (var o of t)
      o.out(r);
  } else
    e();
}
function Ul(t, e, n) {
  if ((t.f & en) === 0) {
    if (t.f ^= en, t.transitions !== null)
      for (const s of t.transitions)
        (s.is_global || n) && e.push(s);
    for (var r = t.first; r !== null; ) {
      var o = r.next, i = (r.f & rr) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (r.f & cr) !== 0 && (t.f & lr) !== 0;
      Ul(r, e, i ? n : !1), r = o;
    }
  }
}
function Gl(t) {
  Pf(t, !0);
}
function Pf(t, e) {
  if ((t.f & en) !== 0) {
    t.f ^= en, (t.f & Vt) === 0 && (zt(t, Ut), jr(t));
    for (var n = t.first; n !== null; ) {
      var r = n.next, o = (n.f & rr) !== 0 || (n.f & cr) !== 0;
      Pf(n, o ? e : !1), n = r;
    }
    if (t.transitions !== null)
      for (const i of t.transitions)
        (i.is_global || e) && i.in();
  }
}
function Nf(t, e) {
  for (var n = t.nodes_start, r = t.nodes_end; n !== null; ) {
    var o = n === r ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ nn(n)
    );
    e.append(n), n = o;
  }
}
let xr = !1;
function ps(t) {
  xr = t;
}
let oo = !1;
function ou(t) {
  oo = t;
}
let Xe = null, Tn = !1;
function qt(t) {
  Xe = t;
}
let Ze = null;
function cn(t) {
  Ze = t;
}
let tr = null;
function Of(t) {
  Xe !== null && (tr === null ? tr = [t] : tr.push(t));
}
let Rt = null, Jt = 0, on = null;
function Bm(t) {
  on = t;
}
let Af = 1, ni = 0, nr = ni;
function iu(t) {
  nr = t;
}
function Tf() {
  return ++Af;
}
function yi(t) {
  var e = t.f;
  if ((e & Ut) !== 0)
    return !0;
  if (e & Ot && (t.f &= ~Yr), (e & ur) !== 0) {
    var n = t.deps;
    if (n !== null)
      for (var r = n.length, o = 0; o < r; o++) {
        var i = n[o];
        if (yi(
          /** @type {Derived} */
          i
        ) && cf(
          /** @type {Derived} */
          i
        ), i.wv > t.wv)
          return !0;
      }
    (e & yn) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    an === null && zt(t, Vt);
  }
  return !1;
}
function Mf(t, e, n = !0) {
  var r = t.reactions;
  if (r !== null && !tr?.includes(t))
    for (var o = 0; o < r.length; o++) {
      var i = r[o];
      (i.f & Ot) !== 0 ? Mf(
        /** @type {Derived} */
        i,
        e,
        !1
      ) : e === i && (n ? zt(i, Ut) : (i.f & Vt) !== 0 && zt(i, ur), jr(
        /** @type {Effect} */
        i
      ));
    }
}
function Df(t) {
  var e = Rt, n = Jt, r = on, o = Xe, i = tr, s = it, a = Tn, l = nr, c = t.f;
  Rt = /** @type {null | Value[]} */
  null, Jt = 0, on = null, Xe = (c & (cr | Nr)) === 0 ? t : null, tr = null, yo(t.ctx), Tn = !1, nr = ++ni, t.ac !== null && (ra(() => {
    t.ac.abort(fo);
  }), t.ac = null);
  try {
    t.f |= Ka;
    var d = (
      /** @type {Function} */
      t.fn
    ), f = d(), h = t.deps;
    if (Rt !== null) {
      var v;
      if (vs(t, Jt), h !== null && Jt > 0)
        for (h.length = Jt + Rt.length, v = 0; v < Rt.length; v++)
          h[Jt + v] = Rt[v];
      else
        t.deps = h = Rt;
      if (xr && ti() && (t.f & yn) !== 0)
        for (v = Jt; v < h.length; v++)
          (h[v].reactions ??= []).push(t);
    } else h !== null && Jt < h.length && (vs(t, Jt), h.length = Jt);
    if (To() && on !== null && !Tn && h !== null && (t.f & (Ot | ur | Ut)) === 0)
      for (v = 0; v < /** @type {Source[]} */
      on.length; v++)
        Mf(
          on[v],
          /** @type {Effect} */
          t
        );
    return o !== null && o !== t && (ni++, on !== null && (r === null ? r = on : r.push(.../** @type {Source[]} */
    on))), (t.f & wr) !== 0 && (t.f ^= wr), f;
  } catch (m) {
    return nf(m);
  } finally {
    t.f ^= Ka, Rt = e, Jt = n, on = r, Xe = o, tr = i, yo(s), Tn = a, nr = l;
  }
}
function $m(t, e) {
  let n = e.reactions;
  if (n !== null) {
    var r = Jv.call(n, t);
    if (r !== -1) {
      var o = n.length - 1;
      o === 0 ? n = e.reactions = null : (n[r] = n[o], n.pop());
    }
  }
  n === null && (e.f & Ot) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Rt === null || !Rt.includes(e)) && (zt(e, ur), (e.f & yn) !== 0 && (e.f ^= yn, e.f &= ~Yr), lf(
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
      $m(t, n[r]);
}
function ri(t) {
  var e = t.f;
  if ((e & er) === 0) {
    zt(t, Vt);
    var n = Ze, r = xr;
    Ze = t, xr = !0;
    try {
      (e & (lr | Xd)) !== 0 ? Fm(t) : Cf(t), _f(t);
      var o = Df(t);
      t.teardown = typeof o == "function" ? o : null, t.wv = Af;
      var i;
      Ba && vm && (t.f & Ut) !== 0 && t.deps;
    } finally {
      xr = r, Ze = n;
    }
  }
}
async function If() {
  await Promise.resolve(), g();
}
function u(t) {
  var e = t.f, n = (e & Ot) !== 0;
  if (Xe !== null && !Tn) {
    var r = Ze !== null && (Ze.f & er) !== 0;
    if (!r && !tr?.includes(t)) {
      var o = Xe.deps;
      if ((Xe.f & Ka) !== 0)
        t.rv < ni && (t.rv = ni, Rt === null && o !== null && o[Jt] === t ? Jt++ : Rt === null ? Rt = [t] : Rt.includes(t) || Rt.push(t));
      else {
        (Xe.deps ??= []).push(t);
        var i = t.reactions;
        i === null ? t.reactions = [Xe] : i.includes(Xe) || i.push(Xe);
      }
    }
  }
  if (oo) {
    if (br.has(t))
      return br.get(t);
    if (n) {
      var s = (
        /** @type {Derived} */
        t
      ), a = s.v;
      return ((s.f & Vt) === 0 && s.reactions !== null || zf(s)) && (a = jl(s)), br.set(s, a), a;
    }
  } else n && (!an?.has(t) || et?.is_fork && !ti()) && (s = /** @type {Derived} */
  t, yi(s) && cf(s), xr && ti() && (s.f & yn) === 0 && Vf(s));
  if (an?.has(t))
    return an.get(t);
  if ((t.f & wr) !== 0)
    throw t.v;
  return t.v;
}
function Vf(t) {
  if (t.deps !== null) {
    t.f ^= yn;
    for (const e of t.deps)
      (e.reactions ??= []).push(t), (e.f & Ot) !== 0 && (e.f & yn) === 0 && Vf(
        /** @type {Derived} */
        e
      );
  }
}
function zf(t) {
  if (t.v === Pt) return !0;
  if (t.deps === null) return !1;
  for (const e of t.deps)
    if (br.has(e) || (e.f & Ot) !== 0 && zf(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function at(t) {
  var e = Tn;
  try {
    return Tn = !0, t();
  } finally {
    Tn = e;
  }
}
const Km = -7169;
function zt(t, e) {
  t.f = t.f & Km | e;
}
function Wm(t, e) {
  var n = {};
  for (var r in t)
    e.includes(r) || (n[r] = t[r]);
  for (var o of Object.getOwnPropertySymbols(t))
    Object.propertyIsEnumerable.call(t, o) && !e.includes(o) && (n[o] = t[o]);
  return n;
}
function Jl(t) {
  if (!(typeof t != "object" || !t || t instanceof EventTarget)) {
    if (In in t)
      qa(t);
    else if (!Array.isArray(t))
      for (let e in t) {
        const n = t[e];
        typeof n == "object" && n && In in n && qa(n);
      }
  }
}
function qa(t, e = /* @__PURE__ */ new Set()) {
  if (typeof t == "object" && t !== null && // We don't want to traverse DOM elements
  !(t instanceof EventTarget) && !e.has(t)) {
    e.add(t), t instanceof Date && t.getTime();
    for (let r in t)
      try {
        qa(t[r], e);
      } catch {
      }
    const n = Us(t);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = Yd(n);
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
const Lf = /* @__PURE__ */ new Set(), ja = /* @__PURE__ */ new Set();
function Ql(t, e, n, r = {}) {
  function o(i) {
    if (r.capture || Wo.call(e, i), !i.cancelBubble)
      return ra(() => n?.call(this, i));
  }
  return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? Or(() => {
    e.addEventListener(t, o, r);
  }) : e.addEventListener(t, o, r), o;
}
function gt(t, e, n, r = {}) {
  var o = Ql(e, t, n, r);
  return () => {
    t.removeEventListener(e, o, r);
  };
}
function ms(t, e, n, r, o) {
  var i = { capture: r, passive: o }, s = Ql(t, e, n, i);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && oa(() => {
    e.removeEventListener(t, s, i);
  });
}
function io(t) {
  for (var e = 0; e < t.length; e++)
    Lf.add(t[e]);
  for (var n of ja)
    n(t);
}
let su = null;
function Wo(t) {
  var e = this, n = (
    /** @type {Node} */
    e.ownerDocument
  ), r = t.type, o = t.composedPath?.() || [], i = (
    /** @type {null | Element} */
    o[0] || t.target
  );
  su = t;
  var s = 0, a = su === t && t.__root;
  if (a) {
    var l = o.indexOf(a);
    if (l !== -1 && (e === document || e === /** @type {any} */
    window)) {
      t.__root = e;
      return;
    }
    var c = o.indexOf(e);
    if (c === -1)
      return;
    l <= c && (s = l);
  }
  if (i = /** @type {Element} */
  o[s] || t.target, i !== e) {
    fs(t, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    var d = Xe, f = Ze;
    qt(null), cn(null);
    try {
      for (var h, v = []; i !== null; ) {
        var m = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var y = i["__" + r];
          y != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          t.target === i) && y.call(i, t);
        } catch (w) {
          h ? v.push(w) : h = w;
        }
        if (t.cancelBubble || m === e || m === null)
          break;
        i = m;
      }
      if (h) {
        for (let w of v)
          queueMicrotask(() => {
            throw w;
          });
        throw h;
      }
    } finally {
      t.__root = e, delete t.currentTarget, qt(d), cn(f);
    }
  }
}
function ec(t) {
  var e = document.createElement("template");
  return e.innerHTML = t.replaceAll("<!>", "<!---->"), e.content;
}
function Xt(t, e) {
  var n = (
    /** @type {Effect} */
    Ze
  );
  n.nodes_start === null && (n.nodes_start = t, n.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function re(t, e) {
  var n = (e & Kd) !== 0, r = (e & Xv) !== 0, o, i = !t.startsWith("<!>");
  return () => {
    if (Ce)
      return Xt(Ie, null), Ie;
    o === void 0 && (o = ec(i ? t : "<!>" + t), n || (o = /** @type {Node} */
    /* @__PURE__ */ wt(o)));
    var s = (
      /** @type {TemplateNode} */
      r || hf ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ wt(s)
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
function Zm(t, e, n = "svg") {
  var r = !t.startsWith("<!>"), o = (e & Kd) !== 0, i = `<${n}>${r ? t : "<!>" + t}</${n}>`, s;
  return () => {
    if (Ce)
      return Xt(Ie, null), Ie;
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        ec(i)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ wt(a)
      );
      if (o)
        for (s = document.createDocumentFragment(); /* @__PURE__ */ wt(l); )
          s.appendChild(
            /** @type {Node} */
            /* @__PURE__ */ wt(l)
          );
      else
        s = /** @type {Element} */
        /* @__PURE__ */ wt(l);
    }
    var c = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    if (o) {
      var d = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ wt(c)
      ), f = (
        /** @type {TemplateNode} */
        c.lastChild
      );
      Xt(d, f);
    } else
      Xt(c, c);
    return c;
  };
}
// @__NO_SIDE_EFFECTS__
function _e(t, e) {
  return /* @__PURE__ */ Zm(t, e, "svg");
}
function De(t = "") {
  if (!Ce) {
    var e = Lt(t + "");
    return Xt(e, e), e;
  }
  var n = Ie;
  return n.nodeType !== ea && (n.before(n = Lt()), dt(n)), Xt(n, n), n;
}
function de() {
  if (Ce)
    return Xt(Ie, null), Ie;
  var t = document.createDocumentFragment(), e = document.createComment(""), n = Lt();
  return t.append(e, n), Xt(e, n), t;
}
function A(t, e) {
  if (Ce) {
    var n = (
      /** @type {Effect} */
      Ze
    );
    ((n.f & Qs) === 0 || n.nodes_end === null) && (n.nodes_end = Ie), wn();
    return;
  }
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
function wi() {
  if (Ce && Ie && Ie.nodeType === dr && Ie.textContent?.startsWith("$")) {
    const t = Ie.textContent.substring(1);
    return wn(), t;
  }
  return (window.__svelte ??= {}).uid ??= 1, `c${window.__svelte.uid++}`;
}
function Ym(t) {
  return t.endsWith("capture") && t !== "gotpointercapture" && t !== "lostpointercapture";
}
const qm = [
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
function jm(t) {
  return qm.includes(t);
}
const Xm = {
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
function Um(t) {
  return t = t.toLowerCase(), Xm[t] ?? t;
}
const Gm = ["touchstart", "touchmove"];
function Jm(t) {
  return Gm.includes(t);
}
const Qm = (
  /** @type {const} */
  ["textarea", "script", "style", "title"]
);
function e1(t) {
  return Qm.includes(
    /** @type {typeof RAW_TEXT_ELEMENTS[number]} */
    t
  );
}
function rt(t, e) {
  var n = e == null ? "" : typeof e == "object" ? e + "" : e;
  n !== (t.__t ??= t.nodeValue) && (t.__t = n, t.nodeValue = n + "");
}
function tc(t, e) {
  return Hf(t, e);
}
function t1(t, e) {
  Ya(), e.intro = e.intro ?? !1;
  const n = e.target, r = Ce, o = Ie;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ wt(n)
    ); i && (i.nodeType !== dr || /** @type {Comment} */
    i.data !== Wd); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ nn(i);
    if (!i)
      throw Zr;
    Ft(!0), dt(
      /** @type {Comment} */
      i
    );
    const s = Hf(t, { ...e, anchor: i });
    return Ft(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s instanceof Error && s.message.split(`
`).some((a) => a.startsWith("https://svelte.dev/e/")))
      throw s;
    return s !== Zr && console.warn("Failed to hydrate: ", s), e.recover === !1 && lm(), Ya(), Xl(n), Ft(!1), tc(t, e);
  } finally {
    Ft(r), dt(o);
  }
}
const lo = /* @__PURE__ */ new Map();
function Hf(t, { target: e, anchor: n, props: r = {}, events: o, context: i, intro: s = !0 }) {
  Ya();
  var a = /* @__PURE__ */ new Set(), l = (f) => {
    for (var h = 0; h < f.length; h++) {
      var v = f[h];
      if (!a.has(v)) {
        a.add(v);
        var m = Jm(v);
        e.addEventListener(v, Wo, { passive: m });
        var y = lo.get(v);
        y === void 0 ? (document.addEventListener(v, Wo, { passive: m }), lo.set(v, 1)) : lo.set(v, y + 1);
      }
    }
  };
  l(Fl(Lf)), ja.add(l);
  var c = void 0, d = Hm(() => {
    var f = n ?? e.appendChild(Lt());
    return Sm(
      /** @type {TemplateNode} */
      f,
      {
        pending: () => {
        }
      },
      (h) => {
        if (i) {
          le({});
          var v = (
            /** @type {ComponentContext} */
            it
          );
          v.c = i;
        }
        if (o && (r.$$events = o), Ce && Xt(
          /** @type {TemplateNode} */
          h,
          null
        ), c = t(h, r) || {}, Ce && (Ze.nodes_end = Ie, Ie === null || Ie.nodeType !== dr || /** @type {Comment} */
        Ie.data !== Rl))
          throw vi(), Zr;
        i && ce();
      }
    ), () => {
      for (var h of a) {
        e.removeEventListener(h, Wo);
        var v = (
          /** @type {number} */
          lo.get(h)
        );
        --v === 0 ? (document.removeEventListener(h, Wo), lo.delete(h)) : lo.set(h, v);
      }
      ja.delete(l), f !== n && f.parentNode?.removeChild(f);
    };
  });
  return Xa.set(c, d), c;
}
let Xa = /* @__PURE__ */ new WeakMap();
function Rf(t, e) {
  const n = Xa.get(t);
  return n ? (Xa.delete(t), n(e)) : Promise.resolve();
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
      et
    );
    if (this.#e.has(e)) {
      var n = (
        /** @type {Key} */
        this.#e.get(e)
      ), r = this.#t.get(n);
      if (r)
        Gl(r), this.#r.delete(n);
      else {
        var o = this.#n.get(n);
        o && (this.#t.set(n, o.effect), this.#n.delete(n), o.fragment.lastChild.remove(), this.anchor.before(o.fragment), r = o.effect);
      }
      for (const [i, s] of this.#e) {
        if (this.#e.delete(i), i === e)
          break;
        const a = this.#n.get(s);
        a && (Et(a.effect), this.#n.delete(s));
      }
      for (const [i, s] of this.#t) {
        if (i === n || this.#r.has(i)) continue;
        const a = () => {
          if (Array.from(this.#e.values()).includes(i)) {
            var c = document.createDocumentFragment();
            Nf(s, c), c.append(Lt()), this.#n.set(i, { effect: s, fragment: c });
          } else
            Et(s);
          this.#r.delete(i), this.#t.delete(i);
        };
        this.#o || !r ? (this.#r.add(i), go(s, a, !1)) : a();
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
      n.includes(r) || (Et(o.effect), this.#n.delete(r));
  };
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(e, n) {
    var r = (
      /** @type {Batch} */
      et
    ), o = vf();
    if (n && !this.#t.has(e) && !this.#n.has(e))
      if (o) {
        var i = document.createDocumentFragment(), s = Lt();
        i.append(s), this.#n.set(e, {
          effect: Yt(() => n(s)),
          fragment: i
        });
      } else
        this.#t.set(
          e,
          Yt(() => n(this.anchor))
        );
    if (this.#e.set(r, e), o) {
      for (const [a, l] of this.#t)
        a === e ? r.skipped_effects.delete(l) : r.skipped_effects.add(l);
      for (const [a, l] of this.#n)
        a === e ? r.skipped_effects.delete(l.effect) : r.skipped_effects.add(l.effect);
      r.oncommit(this.#i), r.ondiscard(this.#a);
    } else
      Ce && (this.anchor = Ie), this.#i();
  }
}
function Ae(t, e, ...n) {
  var r = new bi(t);
  Ar(() => {
    const o = e() ?? null;
    r.ensure(o, o && ((i) => o(i, ...n)));
  }, rr);
}
function Cn(t) {
  it === null && Zl(), Ao && it.l !== null ? n1(it).m.push(t) : He(() => {
    const e = at(t);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function xi(t) {
  it === null && Zl(), Cn(() => () => at(t));
}
function n1(t) {
  var e = (
    /** @type {ComponentContextLegacy} */
    t.l
  );
  return e.u ??= { a: [], b: [], m: [] };
}
function r1() {
  return Symbol(Zd);
}
function se(t, e, n = !1) {
  Ce && wn();
  var r = new bi(t), o = n ? rr : 0;
  function i(s, a) {
    if (Ce) {
      const c = Gd(t) === js;
      if (s === c) {
        var l = hs();
        dt(l), r.anchor = l, Ft(!1), r.ensure(s, a), Ft(!0);
        return;
      }
    }
    r.ensure(s, a);
  }
  Ar(() => {
    var s = !1;
    e((a, l = !0) => {
      s = !0, i(l, a);
    }), s || i(!1, null);
  }, o);
}
function o1(t, e, n) {
  Ce && wn();
  var r = new bi(t), o = !To();
  Ar(() => {
    var i = e();
    o && i !== null && typeof i == "object" && (i = /** @type {V} */
    {}), r.ensure(i, n);
  });
}
function i1(t, e) {
  Ce && dt(
    /** @type {TemplateNode} */
    /* @__PURE__ */ wt(t)
  ), ro(() => {
    var n = e();
    for (var r in n) {
      var o = n[r];
      o ? t.style.setProperty(r, o) : t.style.removeProperty(r);
    }
  });
}
function ia(t, e, n = !1, r = !1, o = !1) {
  var i = t, s = "";
  Te(() => {
    var a = (
      /** @type {Effect} */
      Ze
    );
    if (s === (s = e() ?? "")) {
      Ce && wn();
      return;
    }
    if (a.nodes_start !== null && (kf(
      a.nodes_start,
      /** @type {TemplateNode} */
      a.nodes_end
    ), a.nodes_start = a.nodes_end = null), s !== "") {
      if (Ce) {
        Ie.data;
        for (var l = wn(), c = l; l !== null && (l.nodeType !== dr || /** @type {Comment} */
        l.data !== ""); )
          c = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ nn(l);
        if (l === null)
          throw vi(), Zr;
        Xt(Ie, c), i = dt(l);
        return;
      }
      var d = s + "";
      n ? d = `<svg>${d}</svg>` : r && (d = `<math>${d}</math>`);
      var f = ec(d);
      if ((n || r) && (f = /** @type {Element} */
      /* @__PURE__ */ wt(f)), Xt(
        /** @type {TemplateNode} */
        /* @__PURE__ */ wt(f),
        /** @type {TemplateNode} */
        f.lastChild
      ), n || r)
        for (; /* @__PURE__ */ wt(f); )
          i.before(
            /** @type {Node} */
            /* @__PURE__ */ wt(f)
          );
      else
        i.before(f);
    }
  });
}
function St(t, e, n) {
  Ce && wn();
  var r = new bi(t);
  Ar(() => {
    var o = e() ?? null;
    r.ensure(o, o && ((i) => n(i, o)));
  }, rr);
}
function Ff(t, e, n, r, o, i) {
  let s = Ce;
  Ce && wn();
  var a = null;
  Ce && Ie.nodeType === nm && (a = /** @type {Element} */
  Ie, wn());
  var l = (
    /** @type {TemplateNode} */
    Ce ? Ie : t
  ), c = new bi(l, !1);
  Ar(() => {
    const d = e() || null;
    var f = n || d === "svg" ? Gv : null;
    if (d === null) {
      c.ensure(null, null);
      return;
    }
    return c.ensure(d, (h) => {
      if (d) {
        if (a = Ce ? (
          /** @type {Element} */
          a
        ) : f ? document.createElementNS(f, d) : document.createElement(d), Xt(a, a), r) {
          Ce && e1(d) && a.append(document.createComment(""));
          var v = (
            /** @type {TemplateNode} */
            Ce ? /* @__PURE__ */ wt(a) : a.appendChild(Lt())
          );
          Ce && (v === null ? Ft(!1) : dt(v)), r(a, v);
        }
        Ze.nodes_end = a, h.before(a);
      }
      Ce && dt(h);
    }), () => {
    };
  }, rr), oa(() => {
  }), s && (Ft(!0), dt(l));
}
function s1(t, e) {
  let n = null, r = Ce;
  var o;
  if (Ce) {
    n = Ie;
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ wt(document.head)
    ); i !== null && (i.nodeType !== dr || /** @type {Comment} */
    i.data !== t); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ nn(i);
    if (i === null)
      Ft(!1);
    else {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ nn(i)
      );
      i.remove(), dt(s);
    }
  }
  Ce || (o = document.head.appendChild(Lt()));
  try {
    Ar(() => e(o), $l);
  } finally {
    r && (Ft(!0), dt(
      /** @type {TemplateNode} */
      n
    ));
  }
}
function Qe(t, e) {
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
function It(t, e, n) {
  Mo(() => {
    var r = at(() => e(t, n?.()) || {});
    if (n && r?.update) {
      var o = !1, i = (
        /** @type {any} */
        {}
      );
      ro(() => {
        var s = n();
        Jl(s), o && Qd(i, s) && (i = s, r.update(s));
      }), o = !0;
    }
    if (r?.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function a1(t, e) {
  var n = void 0, r;
  xf(() => {
    n !== (n = e()) && (r && (Et(r), r = null), n && (r = Yt(() => {
      Mo(() => (
        /** @type {(node: Element) => void} */
        n(t)
      ));
    })));
  });
}
function Bf(t) {
  var e, n, r = "";
  if (typeof t == "string" || typeof t == "number") r += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var o = t.length;
    for (e = 0; e < o; e++) t[e] && (n = Bf(t[e])) && (r && (r += " "), r += n);
  } else for (n in t) t[n] && (r && (r += " "), r += n);
  return r;
}
function Jo() {
  for (var t, e, n = 0, r = "", o = arguments.length; n < o; n++) (t = arguments[n]) && (e = Bf(t)) && (r && (r += " "), r += e);
  return r;
}
function fr(t) {
  return typeof t == "object" ? Jo(t) : t ?? "";
}
const au = [...` 	
\r\f \v\uFEFF`];
function l1(t, e, n) {
  var r = t == null ? "" : "" + t;
  if (e && (r = r ? r + " " + e : e), n) {
    for (var o in n)
      if (n[o])
        r = r ? r + " " + o : o;
      else if (r.length)
        for (var i = o.length, s = 0; (s = r.indexOf(o, s)) >= 0; ) {
          var a = s + i;
          (s === 0 || au.includes(r[s - 1])) && (a === r.length || au.includes(r[a])) ? r = (s === 0 ? "" : r.substring(0, s)) + r.substring(a + 1) : s = a;
        }
  }
  return r === "" ? null : r;
}
function lu(t, e = !1) {
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
function c1(t, e) {
  if (e) {
    var n = "", r, o;
    if (Array.isArray(e) ? (r = e[0], o = e[1]) : r = e, t) {
      t = String(t).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var i = !1, s = 0, a = !1, l = [];
      r && l.push(...Object.keys(r).map(xa)), o && l.push(...Object.keys(o).map(xa));
      var c = 0, d = -1;
      const y = t.length;
      for (var f = 0; f < y; f++) {
        var h = t[f];
        if (a ? h === "/" && t[f - 1] === "*" && (a = !1) : i ? i === h && (i = !1) : h === "/" && t[f + 1] === "*" ? a = !0 : h === '"' || h === "'" ? i = h : h === "(" ? s++ : h === ")" && s--, !a && i === !1 && s === 0) {
          if (h === ":" && d === -1)
            d = f;
          else if (h === ";" || f === y - 1) {
            if (d !== -1) {
              var v = xa(t.substring(c, d).trim());
              if (!l.includes(v)) {
                h !== ";" && f++;
                var m = t.substring(c, f).trim();
                n += " " + m + ";";
              }
            }
            c = f + 1, d = -1;
          }
        }
      }
    }
    return r && (n += lu(r)), o && (n += lu(o, !0)), n = n.trim(), n === "" ? null : n;
  }
  return t == null ? null : String(t);
}
function Gt(t, e, n, r, o, i) {
  var s = t.__className;
  if (Ce || s !== n || s === void 0) {
    var a = l1(n, r, i);
    (!Ce || a !== t.getAttribute("class")) && (a == null ? t.removeAttribute("class") : e ? t.className = a : t.setAttribute("class", a)), t.__className = n;
  } else if (i && o !== i)
    for (var l in i) {
      var c = !!i[l];
      (o == null || c !== !!o[l]) && t.classList.toggle(l, c);
    }
  return i;
}
function _a(t, e = {}, n, r) {
  for (var o in n) {
    var i = n[o];
    e[o] !== i && (n[o] == null ? t.style.removeProperty(o) : t.style.setProperty(o, i, r));
  }
}
function At(t, e, n, r) {
  var o = t.__style;
  if (Ce || o !== e) {
    var i = c1(e, r);
    (!Ce || i !== t.getAttribute("style")) && (i == null ? t.removeAttribute("style") : t.style.cssText = i), t.__style = e;
  } else r && (Array.isArray(r) ? (_a(t, n?.[0], r[0]), _a(t, n?.[1], r[1], "important")) : _a(t, n, r));
  return r;
}
function Ua(t, e, n = !1) {
  if (t.multiple) {
    if (e == null)
      return;
    if (!Xs(e))
      return gm();
    for (var r of t.options)
      r.selected = e.includes(cu(r));
    return;
  }
  for (r of t.options) {
    var o = cu(r);
    if (Im(o, e)) {
      r.selected = !0;
      return;
    }
  }
  (!n || e !== void 0) && (t.selectedIndex = -1);
}
function u1(t) {
  var e = new MutationObserver(() => {
    Ua(t, t.__value);
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
function cu(t) {
  return "__value" in t ? t.__value : t.value;
}
const mr = Symbol("class"), An = Symbol("style"), $f = Symbol("is custom element"), Kf = Symbol("is html");
function _r(t) {
  if (Ce) {
    var e = !1, n = () => {
      if (!e) {
        if (e = !0, t.hasAttribute("value")) {
          var r = t.value;
          Ne(t, "value", null), t.value = r;
        }
        if (t.hasAttribute("checked")) {
          var o = t.checked;
          Ne(t, "checked", null), t.checked = o;
        }
      }
    };
    t.__on_r = n, Or(n), mf();
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
function d1(t, e) {
  e ? t.hasAttribute("selected") || t.setAttribute("selected", "") : t.removeAttribute("selected");
}
function Ne(t, e, n, r) {
  var o = sa(t);
  Ce && (o[e] = t.getAttribute(e), e === "src" || e === "srcset" || e === "href" && t.nodeName === "LINK") || o[e] !== (o[e] = n) && (e === "loading" && (t[tm] = n), n == null ? t.removeAttribute(e) : typeof n != "string" && Wf(t).includes(e) ? t[e] = n : t.setAttribute(e, n));
}
function f1(t, e, n, r, o = !1, i = !1) {
  if (Ce && o && t.tagName === "INPUT") {
    var s = (
      /** @type {HTMLInputElement} */
      t
    ), a = s.type === "checkbox" ? "defaultChecked" : "defaultValue";
    a in n || _r(s);
  }
  var l = sa(t), c = l[$f], d = !l[Kf];
  let f = Ce && c;
  f && Ft(!1);
  var h = e || {}, v = t.tagName === "OPTION";
  for (var m in e)
    m in n || (n[m] = null);
  n.class ? n.class = fr(n.class) : (r || n[mr]) && (n.class = null), n[An] && (n.style ??= null);
  var y = Wf(t);
  for (const O in n) {
    let z = n[O];
    if (v && O === "value" && z == null) {
      t.value = t.__value = "", h[O] = z;
      continue;
    }
    if (O === "class") {
      var w = t.namespaceURI === "http://www.w3.org/1999/xhtml";
      Gt(t, w, z, r, e?.[mr], n[mr]), h[O] = z, h[mr] = n[mr];
      continue;
    }
    if (O === "style") {
      At(t, z, e?.[An], n[An]), h[O] = z, h[An] = n[An];
      continue;
    }
    var b = h[O];
    if (!(z === b && !(z === void 0 && t.hasAttribute(O)))) {
      h[O] = z;
      var k = O[0] + O[1];
      if (k !== "$$")
        if (k === "on") {
          const V = {}, B = "$$" + O;
          let $ = O.slice(2);
          var S = jm($);
          if (Ym($) && ($ = $.slice(0, -7), V.capture = !0), !S && b) {
            if (z != null) continue;
            t.removeEventListener($, h[B], V), h[B] = null;
          }
          if (z != null)
            if (S)
              t[`__${$}`] = z, io([$]);
            else {
              let T = function(E) {
                h[O].call(this, E);
              };
              h[B] = Ql($, t, T, V);
            }
          else S && (t[`__${$}`] = void 0);
        } else if (O === "style")
          Ne(t, O, z);
        else if (O === "autofocus")
          Vm(
            /** @type {HTMLElement} */
            t,
            !!z
          );
        else if (!c && (O === "__value" || O === "value" && z != null))
          t.value = t.__value = z;
        else if (O === "selected" && v)
          d1(
            /** @type {HTMLOptionElement} */
            t,
            z
          );
        else {
          var _ = O;
          d || (_ = Um(_));
          var x = _ === "defaultValue" || _ === "defaultChecked";
          if (z == null && !c && !x)
            if (l[O] = null, _ === "value" || _ === "checked") {
              let V = (
                /** @type {HTMLInputElement} */
                t
              );
              const B = e === void 0;
              if (_ === "value") {
                let $ = V.defaultValue;
                V.removeAttribute(_), V.defaultValue = $, V.value = V.__value = B ? $ : null;
              } else {
                let $ = V.defaultChecked;
                V.removeAttribute(_), V.defaultChecked = $, V.checked = B ? $ : !1;
              }
            } else
              t.removeAttribute(O);
          else x || y.includes(_) && (c || typeof z != "string") ? (t[_] = z, _ in l && (l[_] = Pt)) : typeof z != "function" && Ne(t, _, z);
        }
    }
  }
  return f && Ft(!0), h;
}
function Je(t, e, n = [], r = [], o = [], i, s = !1, a = !1) {
  af(o, n, r, (l) => {
    var c = void 0, d = {}, f = t.nodeName === "SELECT", h = !1;
    if (xf(() => {
      var m = e(...l.map(u)), y = f1(
        t,
        c,
        m,
        i,
        s,
        a
      );
      h && f && "value" in m && Ua(
        /** @type {HTMLSelectElement} */
        t,
        m.value
      );
      for (let b of Object.getOwnPropertySymbols(d))
        m[b] || Et(d[b]);
      for (let b of Object.getOwnPropertySymbols(m)) {
        var w = m[b];
        b.description === Zd && (!c || w !== c[b]) && (d[b] && Et(d[b]), d[b] = Yt(() => a1(t, () => w))), y[b] = w;
      }
      c = y;
    }), f) {
      var v = (
        /** @type {HTMLSelectElement} */
        t
      );
      Mo(() => {
        Ua(
          v,
          /** @type {Record<string | symbol, any>} */
          c.value,
          !0
        ), u1(v);
      });
    }
    h = !0;
  });
}
function sa(t) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    t.__attributes ??= {
      [$f]: t.nodeName.includes("-"),
      [Kf]: t.namespaceURI === Uv
    }
  );
}
var uu = /* @__PURE__ */ new Map();
function Wf(t) {
  var e = t.getAttribute("is") || t.nodeName, n = uu.get(e);
  if (n) return n;
  uu.set(e, n = []);
  for (var r, o = t, i = Element.prototype; i !== o; ) {
    r = Yd(o);
    for (var s in r)
      r[s].set && n.push(s);
    o = Us(o);
  }
  return n;
}
function ys(t, e, n = e) {
  var r = /* @__PURE__ */ new WeakSet();
  yf(t, "input", async (o) => {
    var i = o ? t.defaultValue : t.value;
    if (i = ka(t) ? Sa(i) : i, n(i), et !== null && r.add(et), await If(), i !== (i = e())) {
      var s = t.selectionStart, a = t.selectionEnd, l = t.value.length;
      if (t.value = i ?? "", a !== null) {
        var c = t.value.length;
        s === a && a === l && c > l ? (t.selectionStart = c, t.selectionEnd = c) : (t.selectionStart = s, t.selectionEnd = Math.min(a, c));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  (Ce && t.defaultValue !== t.value || // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  at(e) == null && t.value) && (n(ka(t) ? Sa(t.value) : t.value), et !== null && r.add(et)), ro(() => {
    var o = e();
    if (t === document.activeElement) {
      var i = (
        /** @type {Batch} */
        Qi ?? et
      );
      if (r.has(i))
        return;
    }
    ka(t) && o === Sa(t.value) || t.type === "date" && !o && !t.value || o !== t.value && (t.value = o ?? "");
  });
}
function ka(t) {
  var e = t.type;
  return e === "number" || e === "range";
}
function Sa(t) {
  return t === "" ? null : +t;
}
function h1(t, e, n = e) {
  yf(t, "change", () => {
    n(t.files);
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  Ce && t.files && n(t.files), ro(() => {
    t.files = e();
  });
}
class nc {
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
          nc.entries.set(n.target, n);
          for (var r of this.#e.get(n.target) || [])
            r(n);
        }
      }
    ));
  }
}
var g1 = /* @__PURE__ */ new nc({
  box: "border-box"
});
function du(t, e, n) {
  var r = g1.observe(t, () => n(t[e]));
  Mo(() => (at(() => n(t[e])), r));
}
function fu(t, e) {
  return t === e || t?.[In] === e;
}
function Tt(t = {}, e, n, r) {
  return Mo(() => {
    var o, i;
    return ro(() => {
      o = i, i = [], at(() => {
        t !== n(...i) && (e(t, ...i), o && fu(n(...o), t) && e(null, ...o));
      });
    }), () => {
      Or(() => {
        i && fu(n(...i), t) && e(null, ...i);
      });
    };
  }), t;
}
function rc(t = !1) {
  const e = (
    /** @type {ComponentContextLegacy} */
    it
  ), n = e.l.u;
  if (!n) return;
  let r = () => Jl(e.s);
  if (t) {
    let o = 0, i = (
      /** @type {Record<string, any>} */
      {}
    );
    const s = /* @__PURE__ */ mi(() => {
      let a = !1;
      const l = e.s;
      for (const c in l)
        l[c] !== i[c] && (i[c] = l[c], a = !0);
      return a && o++, o;
    });
    r = () => u(s);
  }
  n.b.length && Zt(() => {
    hu(e, r), $a(n.b);
  }), He(() => {
    const o = at(() => n.m.map(em));
    return () => {
      for (const i of o)
        typeof i == "function" && i();
    };
  }), n.a.length && He(() => {
    hu(e, r), $a(n.a);
  });
}
function hu(t, e) {
  if (t.l.s)
    for (const n of t.l.s) u(n);
  e();
}
let Hi = !1;
function p1(t) {
  var e = Hi;
  try {
    return Hi = !1, [t(), Hi];
  } finally {
    Hi = e;
  }
}
const v1 = {
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
function ze(t, e, n) {
  return new Proxy(
    { props: t, exclude: e },
    v1
  );
}
const m1 = {
  get(t, e) {
    if (!t.exclude.includes(e))
      return u(t.version), e in t.special ? t.special[e]() : t.props[e];
  },
  set(t, e, n) {
    if (!(e in t.special)) {
      var r = Ze;
      try {
        cn(t.parent_effect), t.special[e] = p(
          {
            get [e]() {
              return t.props[e];
            }
          },
          /** @type {string} */
          e,
          $d
        );
      } finally {
        cn(r);
      }
    }
    return t.special[e](n), tu(t.version), !0;
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
    return t.exclude.includes(e) || (t.exclude.push(e), tu(t.version)), !0;
  },
  has(t, e) {
    return t.exclude.includes(e) ? !1 : e in t.props;
  },
  ownKeys(t) {
    return Reflect.ownKeys(t.props).filter((e) => !t.exclude.includes(e));
  }
};
function gu(t, e) {
  return new Proxy(
    {
      props: t,
      exclude: e,
      special: {},
      version: or(0),
      // TODO this is only necessary because we need to track component
      // destruction inside `prop`, because of `bind:this`, but it
      // seems likely that we can simplify `bind:this` instead
      parent_effect: (
        /** @type {Effect} */
        Ze
      )
    },
    m1
  );
}
const y1 = {
  get(t, e) {
    let n = t.props.length;
    for (; n--; ) {
      let r = t.props[n];
      if (Lo(r) && (r = r()), typeof r == "object" && r !== null && e in r) return r[e];
    }
  },
  set(t, e, n) {
    let r = t.props.length;
    for (; r--; ) {
      let o = t.props[r];
      Lo(o) && (o = o());
      const i = Qn(o, e);
      if (i && i.set)
        return i.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(t, e) {
    let n = t.props.length;
    for (; n--; ) {
      let r = t.props[n];
      if (Lo(r) && (r = r()), typeof r == "object" && r !== null && e in r) {
        const o = Qn(r, e);
        return o && !o.configurable && (o.configurable = !0), o;
      }
    }
  },
  has(t, e) {
    if (e === In || e === Wl) return !1;
    for (let n of t.props)
      if (Lo(n) && (n = n()), n != null && e in n) return !0;
    return !1;
  },
  ownKeys(t) {
    const e = [];
    for (let n of t.props)
      if (Lo(n) && (n = n()), !!n) {
        for (const r in n)
          e.includes(r) || e.push(r);
        for (const r of Object.getOwnPropertySymbols(n))
          e.includes(r) || e.push(r);
      }
    return e;
  }
};
function Fe(...t) {
  return new Proxy({ props: t }, y1);
}
function p(t, e, n, r) {
  var o = !Ao || (n & Yv) !== 0, i = (n & qv) !== 0, s = (n & jv) !== 0, a = (
    /** @type {V} */
    r
  ), l = !0, c = () => (l && (l = !1, a = s ? at(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), a), d;
  if (i) {
    var f = In in t || Wl in t;
    d = Qn(t, e)?.set ?? (f && e in t ? (S) => t[e] = S : void 0);
  }
  var h, v = !1;
  i ? [h, v] = p1(() => (
    /** @type {V} */
    t[e]
  )) : h = /** @type {V} */
  t[e], h === void 0 && r !== void 0 && (h = c(), d && (o && cm(), d(h)));
  var m;
  if (o ? m = () => {
    var S = (
      /** @type {V} */
      t[e]
    );
    return S === void 0 ? c() : (l = !0, S);
  } : m = () => {
    var S = (
      /** @type {V} */
      t[e]
    );
    return S !== void 0 && (a = /** @type {V} */
    void 0), S === void 0 ? a : S;
  }, o && (n & $d) === 0)
    return m;
  if (d) {
    var y = t.$$legacy;
    return (
      /** @type {() => V} */
      function(S, _) {
        return arguments.length > 0 ? ((!o || !_ || y || v) && d(_ ? m() : S), S) : m();
      }
    );
  }
  var w = !1, b = ((n & Zv) !== 0 ? mi : ql)(() => (w = !1, m()));
  i && u(b);
  var k = (
    /** @type {Effect} */
    Ze
  );
  return (
    /** @type {() => V} */
    function(S, _) {
      if (arguments.length > 0) {
        const x = _ ? u(b) : o && i ? ht(S) : S;
        return W(b, x), w = !0, a !== void 0 && (a = x), S;
      }
      return oo && w || (k.f & er) !== 0 ? b.v : u(b);
    }
  );
}
function w1(t) {
  return new b1(t);
}
class b1 {
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
      var a = /* @__PURE__ */ df(s, !1, !1);
      return n.set(i, a), a;
    };
    const o = new Proxy(
      { ...e.props || {}, $$events: {} },
      {
        get(i, s) {
          return u(n.get(s) ?? r(s, Reflect.get(i, s)));
        },
        has(i, s) {
          return s === Wl ? !0 : (u(n.get(s) ?? r(s, Reflect.get(i, s))), Reflect.has(i, s));
        },
        set(i, s, a) {
          return W(n.get(s) ?? r(s, a), a), Reflect.set(i, s, a);
        }
      }
    );
    this.#t = (e.hydrate ? t1 : tc)(e.component, {
      target: e.target,
      anchor: e.anchor,
      props: o,
      context: e.context,
      intro: e.intro ?? !1,
      recover: e.recover
    }), (!e?.props?.$$host || e.sync === !1) && g(), this.#e = o.$$events;
    for (const i of Object.keys(this.#t))
      i === "$set" || i === "$destroy" || i === "$on" || fs(this, i, {
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
      Rf(this.#t);
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
let Zf;
typeof HTMLElement == "function" && (Zf = class extends HTMLElement {
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
          r !== "default" && (i.name = r), A(o, i);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const e = {}, n = x1(this);
      for (const r of this.$$s)
        r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = t(r), e.default = !0) : e[r] = t(r));
      for (const r of this.attributes) {
        const o = this.$$g_p(r.name);
        o in this.$$d || (this.$$d[o] = ts(o, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = w1({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: e,
          $$host: this
        }
      }), this.$$me = no(() => {
        ro(() => {
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
function x1(t) {
  const e = {};
  return t.childNodes.forEach((n) => {
    e[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), e;
}
function ie(t, e, n, r, o, i) {
  let s = class extends Zf {
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
    fs(s.prototype, a, {
      get() {
        return this.$$c && a in this.$$c ? this.$$c[a] : this.$$d[a];
      },
      set(l) {
        l = ts(a, l, e), this.$$d[a] = l;
        var c = this.$$c;
        if (c) {
          var d = Qn(c, a)?.get;
          d ? c[a] = l : c.$set({ [a]: l });
        }
      }
    });
  }), r.forEach((a) => {
    fs(s.prototype, a, {
      get() {
        return this.$$c?.[a];
      }
    });
  }), t.element = /** @type {any} */
  s, s;
}
var _1 = { value: () => {
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
function C1(t, e) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !e.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
ns.prototype = aa.prototype = {
  constructor: ns,
  on: function(t, e) {
    var n = this._, r = C1(t + "", n), o, i = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++i < s; ) if ((o = (t = r[i]).type) && (o = k1(n[o], t.name))) return o;
      return;
    }
    if (e != null && typeof e != "function") throw new Error("invalid callback: " + e);
    for (; ++i < s; )
      if (o = (t = r[i]).type) n[o] = pu(n[o], t.name, e);
      else if (e == null) for (o in n) n[o] = pu(n[o], t.name, null);
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
function k1(t, e) {
  for (var n = 0, r = t.length, o; n < r; ++n)
    if ((o = t[n]).name === e)
      return o.value;
}
function pu(t, e, n) {
  for (var r = 0, o = t.length; r < o; ++r)
    if (t[r].name === e) {
      t[r] = _1, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return n != null && t.push({ name: e, value: n }), t;
}
var Ga = "http://www.w3.org/1999/xhtml";
const vu = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Ga,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function la(t) {
  var e = t += "", n = e.indexOf(":");
  return n >= 0 && (e = t.slice(0, n)) !== "xmlns" && (t = t.slice(n + 1)), vu.hasOwnProperty(e) ? { space: vu[e], local: t } : t;
}
function S1(t) {
  return function() {
    var e = this.ownerDocument, n = this.namespaceURI;
    return n === Ga && e.documentElement.namespaceURI === Ga ? e.createElement(t) : e.createElementNS(n, t);
  };
}
function E1(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function Yf(t) {
  var e = la(t);
  return (e.local ? E1 : S1)(e);
}
function P1() {
}
function oc(t) {
  return t == null ? P1 : function() {
    return this.querySelector(t);
  };
}
function N1(t) {
  typeof t != "function" && (t = oc(t));
  for (var e = this._groups, n = e.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = e[o], s = i.length, a = r[o] = new Array(s), l, c, d = 0; d < s; ++d)
      (l = i[d]) && (c = t.call(l, l.__data__, d, i)) && ("__data__" in l && (c.__data__ = l.__data__), a[d] = c);
  return new rn(r, this._parents);
}
function O1(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function A1() {
  return [];
}
function qf(t) {
  return t == null ? A1 : function() {
    return this.querySelectorAll(t);
  };
}
function T1(t) {
  return function() {
    return O1(t.apply(this, arguments));
  };
}
function M1(t) {
  typeof t == "function" ? t = T1(t) : t = qf(t);
  for (var e = this._groups, n = e.length, r = [], o = [], i = 0; i < n; ++i)
    for (var s = e[i], a = s.length, l, c = 0; c < a; ++c)
      (l = s[c]) && (r.push(t.call(l, l.__data__, c, s)), o.push(l));
  return new rn(r, o);
}
function jf(t) {
  return function() {
    return this.matches(t);
  };
}
function Xf(t) {
  return function(e) {
    return e.matches(t);
  };
}
var D1 = Array.prototype.find;
function I1(t) {
  return function() {
    return D1.call(this.children, t);
  };
}
function V1() {
  return this.firstElementChild;
}
function z1(t) {
  return this.select(t == null ? V1 : I1(typeof t == "function" ? t : Xf(t)));
}
var L1 = Array.prototype.filter;
function H1() {
  return Array.from(this.children);
}
function R1(t) {
  return function() {
    return L1.call(this.children, t);
  };
}
function F1(t) {
  return this.selectAll(t == null ? H1 : R1(typeof t == "function" ? t : Xf(t)));
}
function B1(t) {
  typeof t != "function" && (t = jf(t));
  for (var e = this._groups, n = e.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = e[o], s = i.length, a = r[o] = [], l, c = 0; c < s; ++c)
      (l = i[c]) && t.call(l, l.__data__, c, i) && a.push(l);
  return new rn(r, this._parents);
}
function Uf(t) {
  return new Array(t.length);
}
function $1() {
  return new rn(this._enter || this._groups.map(Uf), this._parents);
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
function K1(t) {
  return function() {
    return t;
  };
}
function W1(t, e, n, r, o, i) {
  for (var s = 0, a, l = e.length, c = i.length; s < c; ++s)
    (a = e[s]) ? (a.__data__ = i[s], r[s] = a) : n[s] = new ws(t, i[s]);
  for (; s < l; ++s)
    (a = e[s]) && (o[s] = a);
}
function Z1(t, e, n, r, o, i, s) {
  var a, l, c = /* @__PURE__ */ new Map(), d = e.length, f = i.length, h = new Array(d), v;
  for (a = 0; a < d; ++a)
    (l = e[a]) && (h[a] = v = s.call(l, l.__data__, a, e) + "", c.has(v) ? o[a] = l : c.set(v, l));
  for (a = 0; a < f; ++a)
    v = s.call(t, i[a], a, i) + "", (l = c.get(v)) ? (r[a] = l, l.__data__ = i[a], c.delete(v)) : n[a] = new ws(t, i[a]);
  for (a = 0; a < d; ++a)
    (l = e[a]) && c.get(h[a]) === l && (o[a] = l);
}
function Y1(t) {
  return t.__data__;
}
function q1(t, e) {
  if (!arguments.length) return Array.from(this, Y1);
  var n = e ? Z1 : W1, r = this._parents, o = this._groups;
  typeof t != "function" && (t = K1(t));
  for (var i = o.length, s = new Array(i), a = new Array(i), l = new Array(i), c = 0; c < i; ++c) {
    var d = r[c], f = o[c], h = f.length, v = j1(t.call(d, d && d.__data__, c, r)), m = v.length, y = a[c] = new Array(m), w = s[c] = new Array(m), b = l[c] = new Array(h);
    n(d, f, y, w, b, v, e);
    for (var k = 0, S = 0, _, x; k < m; ++k)
      if (_ = y[k]) {
        for (k >= S && (S = k + 1); !(x = w[S]) && ++S < m; ) ;
        _._next = x || null;
      }
  }
  return s = new rn(s, r), s._enter = a, s._exit = l, s;
}
function j1(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function X1() {
  return new rn(this._exit || this._groups.map(Uf), this._parents);
}
function U1(t, e, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), e != null && (o = e(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function G1(t) {
  for (var e = t.selection ? t.selection() : t, n = this._groups, r = e._groups, o = n.length, i = r.length, s = Math.min(o, i), a = new Array(o), l = 0; l < s; ++l)
    for (var c = n[l], d = r[l], f = c.length, h = a[l] = new Array(f), v, m = 0; m < f; ++m)
      (v = c[m] || d[m]) && (h[m] = v);
  for (; l < o; ++l)
    a[l] = n[l];
  return new rn(a, this._parents);
}
function J1() {
  for (var t = this._groups, e = -1, n = t.length; ++e < n; )
    for (var r = t[e], o = r.length - 1, i = r[o], s; --o >= 0; )
      (s = r[o]) && (i && s.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(s, i), i = s);
  return this;
}
function Q1(t) {
  t || (t = e0);
  function e(f, h) {
    return f && h ? t(f.__data__, h.__data__) : !f - !h;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), i = 0; i < r; ++i) {
    for (var s = n[i], a = s.length, l = o[i] = new Array(a), c, d = 0; d < a; ++d)
      (c = s[d]) && (l[d] = c);
    l.sort(e);
  }
  return new rn(o, this._parents).order();
}
function e0(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function t0() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function n0() {
  return Array.from(this);
}
function r0() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], o = 0, i = r.length; o < i; ++o) {
      var s = r[o];
      if (s) return s;
    }
  return null;
}
function o0() {
  let t = 0;
  for (const e of this) ++t;
  return t;
}
function i0() {
  return !this.node();
}
function s0(t) {
  for (var e = this._groups, n = 0, r = e.length; n < r; ++n)
    for (var o = e[n], i = 0, s = o.length, a; i < s; ++i)
      (a = o[i]) && t.call(a, a.__data__, i, o);
  return this;
}
function a0(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function l0(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function c0(t, e) {
  return function() {
    this.setAttribute(t, e);
  };
}
function u0(t, e) {
  return function() {
    this.setAttributeNS(t.space, t.local, e);
  };
}
function d0(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttribute(t) : this.setAttribute(t, n);
  };
}
function f0(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n);
  };
}
function h0(t, e) {
  var n = la(t);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((e == null ? n.local ? l0 : a0 : typeof e == "function" ? n.local ? f0 : d0 : n.local ? u0 : c0)(n, e));
}
function Gf(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function g0(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function p0(t, e, n) {
  return function() {
    this.style.setProperty(t, e, n);
  };
}
function v0(t, e, n) {
  return function() {
    var r = e.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, n);
  };
}
function m0(t, e, n) {
  return arguments.length > 1 ? this.each((e == null ? g0 : typeof e == "function" ? v0 : p0)(t, e, n ?? "")) : xo(this.node(), t);
}
function xo(t, e) {
  return t.style.getPropertyValue(e) || Gf(t).getComputedStyle(t, null).getPropertyValue(e);
}
function y0(t) {
  return function() {
    delete this[t];
  };
}
function w0(t, e) {
  return function() {
    this[t] = e;
  };
}
function b0(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? delete this[t] : this[t] = n;
  };
}
function x0(t, e) {
  return arguments.length > 1 ? this.each((e == null ? y0 : typeof e == "function" ? b0 : w0)(t, e)) : this.node()[t];
}
function Jf(t) {
  return t.trim().split(/^|\s+/);
}
function ic(t) {
  return t.classList || new Qf(t);
}
function Qf(t) {
  this._node = t, this._names = Jf(t.getAttribute("class") || "");
}
Qf.prototype = {
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
function eh(t, e) {
  for (var n = ic(t), r = -1, o = e.length; ++r < o; ) n.add(e[r]);
}
function th(t, e) {
  for (var n = ic(t), r = -1, o = e.length; ++r < o; ) n.remove(e[r]);
}
function _0(t) {
  return function() {
    eh(this, t);
  };
}
function C0(t) {
  return function() {
    th(this, t);
  };
}
function k0(t, e) {
  return function() {
    (e.apply(this, arguments) ? eh : th)(this, t);
  };
}
function S0(t, e) {
  var n = Jf(t + "");
  if (arguments.length < 2) {
    for (var r = ic(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof e == "function" ? k0 : e ? _0 : C0)(n, e));
}
function E0() {
  this.textContent = "";
}
function P0(t) {
  return function() {
    this.textContent = t;
  };
}
function N0(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
function O0(t) {
  return arguments.length ? this.each(t == null ? E0 : (typeof t == "function" ? N0 : P0)(t)) : this.node().textContent;
}
function A0() {
  this.innerHTML = "";
}
function T0(t) {
  return function() {
    this.innerHTML = t;
  };
}
function M0(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function D0(t) {
  return arguments.length ? this.each(t == null ? A0 : (typeof t == "function" ? M0 : T0)(t)) : this.node().innerHTML;
}
function I0() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function V0() {
  return this.each(I0);
}
function z0() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function L0() {
  return this.each(z0);
}
function H0(t) {
  var e = typeof t == "function" ? t : Yf(t);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function R0() {
  return null;
}
function F0(t, e) {
  var n = typeof t == "function" ? t : Yf(t), r = e == null ? R0 : typeof e == "function" ? e : oc(e);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function B0() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function $0() {
  return this.each(B0);
}
function K0() {
  var t = this.cloneNode(!1), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function W0() {
  var t = this.cloneNode(!0), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function Z0(t) {
  return this.select(t ? W0 : K0);
}
function Y0(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function q0(t) {
  return function(e) {
    t.call(this, e, this.__data__);
  };
}
function j0(t) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var n = "", r = e.indexOf(".");
    return r >= 0 && (n = e.slice(r + 1), e = e.slice(0, r)), { type: e, name: n };
  });
}
function X0(t) {
  return function() {
    var e = this.__on;
    if (e) {
      for (var n = 0, r = -1, o = e.length, i; n < o; ++n)
        i = e[n], (!t.type || i.type === t.type) && i.name === t.name ? this.removeEventListener(i.type, i.listener, i.options) : e[++r] = i;
      ++r ? e.length = r : delete this.__on;
    }
  };
}
function U0(t, e, n) {
  return function() {
    var r = this.__on, o, i = q0(e);
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
function G0(t, e, n) {
  var r = j0(t + ""), o, i = r.length, s;
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
  for (a = e ? U0 : X0, o = 0; o < i; ++o) this.each(a(r[o], e, n));
  return this;
}
function nh(t, e, n) {
  var r = Gf(t), o = r.CustomEvent;
  typeof o == "function" ? o = new o(e, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(e, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(e, !1, !1)), t.dispatchEvent(o);
}
function J0(t, e) {
  return function() {
    return nh(this, t, e);
  };
}
function Q0(t, e) {
  return function() {
    return nh(this, t, e.apply(this, arguments));
  };
}
function ey(t, e) {
  return this.each((typeof e == "function" ? Q0 : J0)(t, e));
}
function* ty() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], o = 0, i = r.length, s; o < i; ++o)
      (s = r[o]) && (yield s);
}
var rh = [null];
function rn(t, e) {
  this._groups = t, this._parents = e;
}
function _i() {
  return new rn([[document.documentElement]], rh);
}
function ny() {
  return this;
}
rn.prototype = _i.prototype = {
  constructor: rn,
  select: N1,
  selectAll: M1,
  selectChild: z1,
  selectChildren: F1,
  filter: B1,
  data: q1,
  enter: $1,
  exit: X1,
  join: U1,
  merge: G1,
  selection: ny,
  order: J1,
  sort: Q1,
  call: t0,
  nodes: n0,
  node: r0,
  size: o0,
  empty: i0,
  each: s0,
  attr: h0,
  style: m0,
  property: x0,
  classed: S0,
  text: O0,
  html: D0,
  raise: V0,
  lower: L0,
  append: H0,
  insert: F0,
  remove: $0,
  clone: Z0,
  datum: Y0,
  on: G0,
  dispatch: ey,
  [Symbol.iterator]: ty
};
function ln(t) {
  return typeof t == "string" ? new rn([[document.querySelector(t)]], [document.documentElement]) : new rn([[t]], rh);
}
function ry(t) {
  let e;
  for (; e = t.sourceEvent; ) t = e;
  return t;
}
function hn(t, e) {
  if (t = ry(t), e === void 0 && (e = t.currentTarget), e) {
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
const oy = { passive: !1 }, oi = { capture: !0, passive: !1 };
function Ea(t) {
  t.stopImmediatePropagation();
}
function po(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function oh(t) {
  var e = t.document.documentElement, n = ln(t).on("dragstart.drag", po, oi);
  "onselectstart" in e ? n.on("selectstart.drag", po, oi) : (e.__noselect = e.style.MozUserSelect, e.style.MozUserSelect = "none");
}
function ih(t, e) {
  var n = t.document.documentElement, r = ln(t).on("dragstart.drag", null);
  e && (r.on("click.drag", po, oi), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const Ri = (t) => () => t;
function Ja(t, {
  sourceEvent: e,
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
    type: { value: t, enumerable: !0, configurable: !0 },
    sourceEvent: { value: e, enumerable: !0, configurable: !0 },
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
Ja.prototype.on = function() {
  var t = this._.on.apply(this._, arguments);
  return t === this._ ? this : t;
};
function iy(t) {
  return !t.ctrlKey && !t.button;
}
function sy() {
  return this.parentNode;
}
function ay(t, e) {
  return e ?? { x: t.x, y: t.y };
}
function ly() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function cy() {
  var t = iy, e = sy, n = ay, r = ly, o = {}, i = aa("start", "drag", "end"), s = 0, a, l, c, d, f = 0;
  function h(_) {
    _.on("mousedown.drag", v).filter(r).on("touchstart.drag", w).on("touchmove.drag", b, oy).on("touchend.drag touchcancel.drag", k).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function v(_, x) {
    if (!(d || !t.call(this, _, x))) {
      var O = S(this, e.call(this, _, x), _, x, "mouse");
      O && (ln(_.view).on("mousemove.drag", m, oi).on("mouseup.drag", y, oi), oh(_.view), Ea(_), c = !1, a = _.clientX, l = _.clientY, O("start", _));
    }
  }
  function m(_) {
    if (po(_), !c) {
      var x = _.clientX - a, O = _.clientY - l;
      c = x * x + O * O > f;
    }
    o.mouse("drag", _);
  }
  function y(_) {
    ln(_.view).on("mousemove.drag mouseup.drag", null), ih(_.view, c), po(_), o.mouse("end", _);
  }
  function w(_, x) {
    if (t.call(this, _, x)) {
      var O = _.changedTouches, z = e.call(this, _, x), V = O.length, B, $;
      for (B = 0; B < V; ++B)
        ($ = S(this, z, _, x, O[B].identifier, O[B])) && (Ea(_), $("start", _, O[B]));
    }
  }
  function b(_) {
    var x = _.changedTouches, O = x.length, z, V;
    for (z = 0; z < O; ++z)
      (V = o[x[z].identifier]) && (po(_), V("drag", _, x[z]));
  }
  function k(_) {
    var x = _.changedTouches, O = x.length, z, V;
    for (d && clearTimeout(d), d = setTimeout(function() {
      d = null;
    }, 500), z = 0; z < O; ++z)
      (V = o[x[z].identifier]) && (Ea(_), V("end", _, x[z]));
  }
  function S(_, x, O, z, V, B) {
    var $ = i.copy(), T = hn(B || O, x), E, M, C;
    if ((C = n.call(_, new Ja("beforestart", {
      sourceEvent: O,
      target: h,
      identifier: V,
      active: s,
      x: T[0],
      y: T[1],
      dx: 0,
      dy: 0,
      dispatch: $
    }), z)) != null)
      return E = C.x - T[0] || 0, M = C.y - T[1] || 0, function N(I, L, Z) {
        var X = T, D;
        switch (I) {
          case "start":
            o[V] = N, D = s++;
            break;
          case "end":
            delete o[V], --s;
          // falls through
          case "drag":
            T = hn(Z || L, x), D = s;
            break;
        }
        $.call(
          I,
          _,
          new Ja(I, {
            sourceEvent: L,
            subject: C,
            target: h,
            identifier: V,
            active: D,
            x: T[0] + E,
            y: T[1] + M,
            dx: T[0] - X[0],
            dy: T[1] - X[1],
            dispatch: $
          }),
          z
        );
      };
  }
  return h.filter = function(_) {
    return arguments.length ? (t = typeof _ == "function" ? _ : Ri(!!_), h) : t;
  }, h.container = function(_) {
    return arguments.length ? (e = typeof _ == "function" ? _ : Ri(_), h) : e;
  }, h.subject = function(_) {
    return arguments.length ? (n = typeof _ == "function" ? _ : Ri(_), h) : n;
  }, h.touchable = function(_) {
    return arguments.length ? (r = typeof _ == "function" ? _ : Ri(!!_), h) : r;
  }, h.on = function() {
    var _ = i.on.apply(i, arguments);
    return _ === i ? h : _;
  }, h.clickDistance = function(_) {
    return arguments.length ? (f = (_ = +_) * _, h) : Math.sqrt(f);
  }, h;
}
function sc(t, e, n) {
  t.prototype = e.prototype = n, n.constructor = t;
}
function sh(t, e) {
  var n = Object.create(t.prototype);
  for (var r in e) n[r] = e[r];
  return n;
}
function Ci() {
}
var ii = 0.7, bs = 1 / ii, vo = "\\s*([+-]?\\d+)\\s*", si = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Vn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", uy = /^#([0-9a-f]{3,8})$/, dy = new RegExp(`^rgb\\(${vo},${vo},${vo}\\)$`), fy = new RegExp(`^rgb\\(${Vn},${Vn},${Vn}\\)$`), hy = new RegExp(`^rgba\\(${vo},${vo},${vo},${si}\\)$`), gy = new RegExp(`^rgba\\(${Vn},${Vn},${Vn},${si}\\)$`), py = new RegExp(`^hsl\\(${si},${Vn},${Vn}\\)$`), vy = new RegExp(`^hsla\\(${si},${Vn},${Vn},${si}\\)$`), mu = {
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
sc(Ci, Ur, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: yu,
  // Deprecated! Use color.formatHex.
  formatHex: yu,
  formatHex8: my,
  formatHsl: yy,
  formatRgb: wu,
  toString: wu
});
function yu() {
  return this.rgb().formatHex();
}
function my() {
  return this.rgb().formatHex8();
}
function yy() {
  return ah(this).formatHsl();
}
function wu() {
  return this.rgb().formatRgb();
}
function Ur(t) {
  var e, n;
  return t = (t + "").trim().toLowerCase(), (e = uy.exec(t)) ? (n = e[1].length, e = parseInt(e[1], 16), n === 6 ? bu(e) : n === 3 ? new jt(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : n === 8 ? Fi(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : n === 4 ? Fi(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = dy.exec(t)) ? new jt(e[1], e[2], e[3], 1) : (e = fy.exec(t)) ? new jt(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = hy.exec(t)) ? Fi(e[1], e[2], e[3], e[4]) : (e = gy.exec(t)) ? Fi(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = py.exec(t)) ? Cu(e[1], e[2] / 100, e[3] / 100, 1) : (e = vy.exec(t)) ? Cu(e[1], e[2] / 100, e[3] / 100, e[4]) : mu.hasOwnProperty(t) ? bu(mu[t]) : t === "transparent" ? new jt(NaN, NaN, NaN, 0) : null;
}
function bu(t) {
  return new jt(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function Fi(t, e, n, r) {
  return r <= 0 && (t = e = n = NaN), new jt(t, e, n, r);
}
function wy(t) {
  return t instanceof Ci || (t = Ur(t)), t ? (t = t.rgb(), new jt(t.r, t.g, t.b, t.opacity)) : new jt();
}
function Qa(t, e, n, r) {
  return arguments.length === 1 ? wy(t) : new jt(t, e, n, r ?? 1);
}
function jt(t, e, n, r) {
  this.r = +t, this.g = +e, this.b = +n, this.opacity = +r;
}
sc(jt, Qa, sh(Ci, {
  brighter(t) {
    return t = t == null ? bs : Math.pow(bs, t), new jt(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? ii : Math.pow(ii, t), new jt(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new jt(Kr(this.r), Kr(this.g), Kr(this.b), xs(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: xu,
  // Deprecated! Use color.formatHex.
  formatHex: xu,
  formatHex8: by,
  formatRgb: _u,
  toString: _u
}));
function xu() {
  return `#${Rr(this.r)}${Rr(this.g)}${Rr(this.b)}`;
}
function by() {
  return `#${Rr(this.r)}${Rr(this.g)}${Rr(this.b)}${Rr((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function _u() {
  const t = xs(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${Kr(this.r)}, ${Kr(this.g)}, ${Kr(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function xs(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function Kr(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function Rr(t) {
  return t = Kr(t), (t < 16 ? "0" : "") + t.toString(16);
}
function Cu(t, e, n, r) {
  return r <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new gn(t, e, n, r);
}
function ah(t) {
  if (t instanceof gn) return new gn(t.h, t.s, t.l, t.opacity);
  if (t instanceof Ci || (t = Ur(t)), !t) return new gn();
  if (t instanceof gn) return t;
  t = t.rgb();
  var e = t.r / 255, n = t.g / 255, r = t.b / 255, o = Math.min(e, n, r), i = Math.max(e, n, r), s = NaN, a = i - o, l = (i + o) / 2;
  return a ? (e === i ? s = (n - r) / a + (n < r) * 6 : n === i ? s = (r - e) / a + 2 : s = (e - n) / a + 4, a /= l < 0.5 ? i + o : 2 - i - o, s *= 60) : a = l > 0 && l < 1 ? 0 : s, new gn(s, a, l, t.opacity);
}
function xy(t, e, n, r) {
  return arguments.length === 1 ? ah(t) : new gn(t, e, n, r ?? 1);
}
function gn(t, e, n, r) {
  this.h = +t, this.s = +e, this.l = +n, this.opacity = +r;
}
sc(gn, xy, sh(Ci, {
  brighter(t) {
    return t = t == null ? bs : Math.pow(bs, t), new gn(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? ii : Math.pow(ii, t), new gn(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, e = isNaN(t) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * e, o = 2 * n - r;
    return new jt(
      Pa(t >= 240 ? t - 240 : t + 120, o, r),
      Pa(t, o, r),
      Pa(t < 120 ? t + 240 : t - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new gn(ku(this.h), Bi(this.s), Bi(this.l), xs(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = xs(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${ku(this.h)}, ${Bi(this.s) * 100}%, ${Bi(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function ku(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function Bi(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function Pa(t, e, n) {
  return (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e) * 255;
}
const ac = (t) => () => t;
function _y(t, e) {
  return function(n) {
    return t + n * e;
  };
}
function Cy(t, e, n) {
  return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function(r) {
    return Math.pow(t + r * e, n);
  };
}
function ky(t) {
  return (t = +t) == 1 ? lh : function(e, n) {
    return n - e ? Cy(e, n, t) : ac(isNaN(e) ? n : e);
  };
}
function lh(t, e) {
  var n = e - t;
  return n ? _y(t, n) : ac(isNaN(t) ? e : t);
}
const _s = function t(e) {
  var n = ky(e);
  function r(o, i) {
    var s = n((o = Qa(o)).r, (i = Qa(i)).r), a = n(o.g, i.g), l = n(o.b, i.b), c = lh(o.opacity, i.opacity);
    return function(d) {
      return o.r = s(d), o.g = a(d), o.b = l(d), o.opacity = c(d), o + "";
    };
  }
  return r.gamma = t, r;
}(1);
function Sy(t, e) {
  e || (e = []);
  var n = t ? Math.min(e.length, t.length) : 0, r = e.slice(), o;
  return function(i) {
    for (o = 0; o < n; ++o) r[o] = t[o] * (1 - i) + e[o] * i;
    return r;
  };
}
function Ey(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function Py(t, e) {
  var n = e ? e.length : 0, r = t ? Math.min(n, t.length) : 0, o = new Array(r), i = new Array(n), s;
  for (s = 0; s < r; ++s) o[s] = Qo(t[s], e[s]);
  for (; s < n; ++s) i[s] = e[s];
  return function(a) {
    for (s = 0; s < r; ++s) i[s] = o[s](a);
    return i;
  };
}
function Ny(t, e) {
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
function Oy(t, e) {
  var n = {}, r = {}, o;
  (t === null || typeof t != "object") && (t = {}), (e === null || typeof e != "object") && (e = {});
  for (o in e)
    o in t ? n[o] = Qo(t[o], e[o]) : r[o] = e[o];
  return function(i) {
    for (o in n) r[o] = n[o](i);
    return r;
  };
}
var el = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Na = new RegExp(el.source, "g");
function Ay(t) {
  return function() {
    return t;
  };
}
function Ty(t) {
  return function(e) {
    return t(e) + "";
  };
}
function ch(t, e) {
  var n = el.lastIndex = Na.lastIndex = 0, r, o, i, s = -1, a = [], l = [];
  for (t = t + "", e = e + ""; (r = el.exec(t)) && (o = Na.exec(e)); )
    (i = o.index) > n && (i = e.slice(n, i), a[s] ? a[s] += i : a[++s] = i), (r = r[0]) === (o = o[0]) ? a[s] ? a[s] += o : a[++s] = o : (a[++s] = null, l.push({ i: s, x: Nn(r, o) })), n = Na.lastIndex;
  return n < e.length && (i = e.slice(n), a[s] ? a[s] += i : a[++s] = i), a.length < 2 ? l[0] ? Ty(l[0].x) : Ay(e) : (e = l.length, function(c) {
    for (var d = 0, f; d < e; ++d) a[(f = l[d]).i] = f.x(c);
    return a.join("");
  });
}
function Qo(t, e) {
  var n = typeof e, r;
  return e == null || n === "boolean" ? ac(e) : (n === "number" ? Nn : n === "string" ? (r = Ur(e)) ? (e = r, _s) : ch : e instanceof Ur ? _s : e instanceof Date ? Ny : Ey(e) ? Sy : Array.isArray(e) ? Py : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? Oy : Nn)(t, e);
}
var Su = 180 / Math.PI, tl = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function uh(t, e, n, r, o, i) {
  var s, a, l;
  return (s = Math.sqrt(t * t + e * e)) && (t /= s, e /= s), (l = t * n + e * r) && (n -= t * l, r -= e * l), (a = Math.sqrt(n * n + r * r)) && (n /= a, r /= a, l /= a), t * r < e * n && (t = -t, e = -e, l = -l, s = -s), {
    translateX: o,
    translateY: i,
    rotate: Math.atan2(e, t) * Su,
    skewX: Math.atan(l) * Su,
    scaleX: s,
    scaleY: a
  };
}
var $i;
function My(t) {
  const e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return e.isIdentity ? tl : uh(e.a, e.b, e.c, e.d, e.e, e.f);
}
function Dy(t) {
  return t == null || ($i || ($i = document.createElementNS("http://www.w3.org/2000/svg", "g")), $i.setAttribute("transform", t), !(t = $i.transform.baseVal.consolidate())) ? tl : (t = t.matrix, uh(t.a, t.b, t.c, t.d, t.e, t.f));
}
function dh(t, e, n, r) {
  function o(c) {
    return c.length ? c.pop() + " " : "";
  }
  function i(c, d, f, h, v, m) {
    if (c !== f || d !== h) {
      var y = v.push("translate(", null, e, null, n);
      m.push({ i: y - 4, x: Nn(c, f) }, { i: y - 2, x: Nn(d, h) });
    } else (f || h) && v.push("translate(" + f + e + h + n);
  }
  function s(c, d, f, h) {
    c !== d ? (c - d > 180 ? d += 360 : d - c > 180 && (c += 360), h.push({ i: f.push(o(f) + "rotate(", null, r) - 2, x: Nn(c, d) })) : d && f.push(o(f) + "rotate(" + d + r);
  }
  function a(c, d, f, h) {
    c !== d ? h.push({ i: f.push(o(f) + "skewX(", null, r) - 2, x: Nn(c, d) }) : d && f.push(o(f) + "skewX(" + d + r);
  }
  function l(c, d, f, h, v, m) {
    if (c !== f || d !== h) {
      var y = v.push(o(v) + "scale(", null, ",", null, ")");
      m.push({ i: y - 4, x: Nn(c, f) }, { i: y - 2, x: Nn(d, h) });
    } else (f !== 1 || h !== 1) && v.push(o(v) + "scale(" + f + "," + h + ")");
  }
  return function(c, d) {
    var f = [], h = [];
    return c = t(c), d = t(d), i(c.translateX, c.translateY, d.translateX, d.translateY, f, h), s(c.rotate, d.rotate, f, h), a(c.skewX, d.skewX, f, h), l(c.scaleX, c.scaleY, d.scaleX, d.scaleY, f, h), c = d = null, function(v) {
      for (var m = -1, y = h.length, w; ++m < y; ) f[(w = h[m]).i] = w.x(v);
      return f.join("");
    };
  };
}
var Iy = dh(My, "px, ", "px)", "deg)"), Vy = dh(Dy, ", ", ")", ")"), zy = 1e-12;
function Eu(t) {
  return ((t = Math.exp(t)) + 1 / t) / 2;
}
function Ly(t) {
  return ((t = Math.exp(t)) - 1 / t) / 2;
}
function Hy(t) {
  return ((t = Math.exp(2 * t)) - 1) / (t + 1);
}
const rs = function t(e, n, r) {
  function o(i, s) {
    var a = i[0], l = i[1], c = i[2], d = s[0], f = s[1], h = s[2], v = d - a, m = f - l, y = v * v + m * m, w, b;
    if (y < zy)
      b = Math.log(h / c) / e, w = function(z) {
        return [
          a + z * v,
          l + z * m,
          c * Math.exp(e * z * b)
        ];
      };
    else {
      var k = Math.sqrt(y), S = (h * h - c * c + r * y) / (2 * c * n * k), _ = (h * h - c * c - r * y) / (2 * h * n * k), x = Math.log(Math.sqrt(S * S + 1) - S), O = Math.log(Math.sqrt(_ * _ + 1) - _);
      b = (O - x) / e, w = function(z) {
        var V = z * b, B = Eu(x), $ = c / (n * k) * (B * Hy(e * V + x) - Ly(x));
        return [
          a + $ * v,
          l + $ * m,
          c * B / Eu(e * V + x)
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
var _o = 0, Zo = 0, Ho = 0, fh = 1e3, Cs, Yo, ks = 0, Gr = 0, ca = 0, ai = typeof performance == "object" && performance.now ? performance : Date, hh = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function lc() {
  return Gr || (hh(Ry), Gr = ai.now() + ca);
}
function Ry() {
  Gr = 0;
}
function Ss() {
  this._call = this._time = this._next = null;
}
Ss.prototype = gh.prototype = {
  constructor: Ss,
  restart: function(t, e, n) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    n = (n == null ? lc() : +n) + (e == null ? 0 : +e), !this._next && Yo !== this && (Yo ? Yo._next = this : Cs = this, Yo = this), this._call = t, this._time = n, nl();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, nl());
  }
};
function gh(t, e, n) {
  var r = new Ss();
  return r.restart(t, e, n), r;
}
function Fy() {
  lc(), ++_o;
  for (var t = Cs, e; t; )
    (e = Gr - t._time) >= 0 && t._call.call(void 0, e), t = t._next;
  --_o;
}
function Pu() {
  Gr = (ks = ai.now()) + ca, _o = Zo = 0;
  try {
    Fy();
  } finally {
    _o = 0, $y(), Gr = 0;
  }
}
function By() {
  var t = ai.now(), e = t - ks;
  e > fh && (ca -= e, ks = t);
}
function $y() {
  for (var t, e = Cs, n, r = 1 / 0; e; )
    e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : Cs = n);
  Yo = t, nl(r);
}
function nl(t) {
  if (!_o) {
    Zo && (Zo = clearTimeout(Zo));
    var e = t - Gr;
    e > 24 ? (t < 1 / 0 && (Zo = setTimeout(Pu, t - ai.now() - ca)), Ho && (Ho = clearInterval(Ho))) : (Ho || (ks = ai.now(), Ho = setInterval(By, fh)), _o = 1, hh(Pu));
  }
}
function Nu(t, e, n) {
  var r = new Ss();
  return e = e == null ? 0 : +e, r.restart((o) => {
    r.stop(), t(o + e);
  }, e, n), r;
}
var Ky = aa("start", "end", "cancel", "interrupt"), Wy = [], ph = 0, Ou = 1, rl = 2, os = 3, Au = 4, ol = 5, is = 6;
function ua(t, e, n, r, o, i) {
  var s = t.__transition;
  if (!s) t.__transition = {};
  else if (n in s) return;
  Zy(t, n, {
    name: e,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: Ky,
    tween: Wy,
    time: i.time,
    delay: i.delay,
    duration: i.duration,
    ease: i.ease,
    timer: null,
    state: ph
  });
}
function cc(t, e) {
  var n = kn(t, e);
  if (n.state > ph) throw new Error("too late; already scheduled");
  return n;
}
function $n(t, e) {
  var n = kn(t, e);
  if (n.state > os) throw new Error("too late; already running");
  return n;
}
function kn(t, e) {
  var n = t.__transition;
  if (!n || !(n = n[e])) throw new Error("transition not found");
  return n;
}
function Zy(t, e, n) {
  var r = t.__transition, o;
  r[e] = n, n.timer = gh(i, 0, n.time);
  function i(c) {
    n.state = Ou, n.timer.restart(s, n.delay, n.time), n.delay <= c && s(c - n.delay);
  }
  function s(c) {
    var d, f, h, v;
    if (n.state !== Ou) return l();
    for (d in r)
      if (v = r[d], v.name === n.name) {
        if (v.state === os) return Nu(s);
        v.state === Au ? (v.state = is, v.timer.stop(), v.on.call("interrupt", t, t.__data__, v.index, v.group), delete r[d]) : +d < e && (v.state = is, v.timer.stop(), v.on.call("cancel", t, t.__data__, v.index, v.group), delete r[d]);
      }
    if (Nu(function() {
      n.state === os && (n.state = Au, n.timer.restart(a, n.delay, n.time), a(c));
    }), n.state = rl, n.on.call("start", t, t.__data__, n.index, n.group), n.state === rl) {
      for (n.state = os, o = new Array(h = n.tween.length), d = 0, f = -1; d < h; ++d)
        (v = n.tween[d].value.call(t, t.__data__, n.index, n.group)) && (o[++f] = v);
      o.length = f + 1;
    }
  }
  function a(c) {
    for (var d = c < n.duration ? n.ease.call(null, c / n.duration) : (n.timer.restart(l), n.state = ol, 1), f = -1, h = o.length; ++f < h; )
      o[f].call(t, d);
    n.state === ol && (n.on.call("end", t, t.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = is, n.timer.stop(), delete r[e];
    for (var c in r) return;
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
      o = r.state > rl && r.state < ol, r.state = is, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete n[s];
    }
    i && delete t.__transition;
  }
}
function Yy(t) {
  return this.each(function() {
    ss(this, t);
  });
}
function qy(t, e) {
  var n, r;
  return function() {
    var o = $n(this, t), i = o.tween;
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
function jy(t, e, n) {
  var r, o;
  if (typeof n != "function") throw new Error();
  return function() {
    var i = $n(this, t), s = i.tween;
    if (s !== r) {
      o = (r = s).slice();
      for (var a = { name: e, value: n }, l = 0, c = o.length; l < c; ++l)
        if (o[l].name === e) {
          o[l] = a;
          break;
        }
      l === c && o.push(a);
    }
    i.tween = o;
  };
}
function Xy(t, e) {
  var n = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = kn(this.node(), n).tween, o = 0, i = r.length, s; o < i; ++o)
      if ((s = r[o]).name === t)
        return s.value;
    return null;
  }
  return this.each((e == null ? qy : jy)(n, t, e));
}
function uc(t, e, n) {
  var r = t._id;
  return t.each(function() {
    var o = $n(this, r);
    (o.value || (o.value = {}))[e] = n.apply(this, arguments);
  }), function(o) {
    return kn(o, r).value[e];
  };
}
function vh(t, e) {
  var n;
  return (typeof e == "number" ? Nn : e instanceof Ur ? _s : (n = Ur(e)) ? (e = n, _s) : ch)(t, e);
}
function Uy(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Gy(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Jy(t, e, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttribute(t);
    return s === o ? null : s === r ? i : i = e(r = s, n);
  };
}
function Qy(t, e, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttributeNS(t.space, t.local);
    return s === o ? null : s === r ? i : i = e(r = s, n);
  };
}
function ew(t, e, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttribute(t) : (s = this.getAttribute(t), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = e(r = s, a)));
  };
}
function tw(t, e, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttributeNS(t.space, t.local) : (s = this.getAttributeNS(t.space, t.local), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = e(r = s, a)));
  };
}
function nw(t, e) {
  var n = la(t), r = n === "transform" ? Vy : vh;
  return this.attrTween(t, typeof e == "function" ? (n.local ? tw : ew)(n, r, uc(this, "attr." + t, e)) : e == null ? (n.local ? Gy : Uy)(n) : (n.local ? Qy : Jy)(n, r, e));
}
function rw(t, e) {
  return function(n) {
    this.setAttribute(t, e.call(this, n));
  };
}
function ow(t, e) {
  return function(n) {
    this.setAttributeNS(t.space, t.local, e.call(this, n));
  };
}
function iw(t, e) {
  var n, r;
  function o() {
    var i = e.apply(this, arguments);
    return i !== r && (n = (r = i) && ow(t, i)), n;
  }
  return o._value = e, o;
}
function sw(t, e) {
  var n, r;
  function o() {
    var i = e.apply(this, arguments);
    return i !== r && (n = (r = i) && rw(t, i)), n;
  }
  return o._value = e, o;
}
function aw(t, e) {
  var n = "attr." + t;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (e == null) return this.tween(n, null);
  if (typeof e != "function") throw new Error();
  var r = la(t);
  return this.tween(n, (r.local ? iw : sw)(r, e));
}
function lw(t, e) {
  return function() {
    cc(this, t).delay = +e.apply(this, arguments);
  };
}
function cw(t, e) {
  return e = +e, function() {
    cc(this, t).delay = e;
  };
}
function uw(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? lw : cw)(e, t)) : kn(this.node(), e).delay;
}
function dw(t, e) {
  return function() {
    $n(this, t).duration = +e.apply(this, arguments);
  };
}
function fw(t, e) {
  return e = +e, function() {
    $n(this, t).duration = e;
  };
}
function hw(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? dw : fw)(e, t)) : kn(this.node(), e).duration;
}
function gw(t, e) {
  if (typeof e != "function") throw new Error();
  return function() {
    $n(this, t).ease = e;
  };
}
function pw(t) {
  var e = this._id;
  return arguments.length ? this.each(gw(e, t)) : kn(this.node(), e).ease;
}
function vw(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    $n(this, t).ease = n;
  };
}
function mw(t) {
  if (typeof t != "function") throw new Error();
  return this.each(vw(this._id, t));
}
function yw(t) {
  typeof t != "function" && (t = jf(t));
  for (var e = this._groups, n = e.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = e[o], s = i.length, a = r[o] = [], l, c = 0; c < s; ++c)
      (l = i[c]) && t.call(l, l.__data__, c, i) && a.push(l);
  return new ir(r, this._parents, this._name, this._id);
}
function ww(t) {
  if (t._id !== this._id) throw new Error();
  for (var e = this._groups, n = t._groups, r = e.length, o = n.length, i = Math.min(r, o), s = new Array(r), a = 0; a < i; ++a)
    for (var l = e[a], c = n[a], d = l.length, f = s[a] = new Array(d), h, v = 0; v < d; ++v)
      (h = l[v] || c[v]) && (f[v] = h);
  for (; a < r; ++a)
    s[a] = e[a];
  return new ir(s, this._parents, this._name, this._id);
}
function bw(t) {
  return (t + "").trim().split(/^|\s+/).every(function(e) {
    var n = e.indexOf(".");
    return n >= 0 && (e = e.slice(0, n)), !e || e === "start";
  });
}
function xw(t, e, n) {
  var r, o, i = bw(e) ? cc : $n;
  return function() {
    var s = i(this, t), a = s.on;
    a !== r && (o = (r = a).copy()).on(e, n), s.on = o;
  };
}
function _w(t, e) {
  var n = this._id;
  return arguments.length < 2 ? kn(this.node(), n).on.on(t) : this.each(xw(n, t, e));
}
function Cw(t) {
  return function() {
    var e = this.parentNode;
    for (var n in this.__transition) if (+n !== t) return;
    e && e.removeChild(this);
  };
}
function kw() {
  return this.on("end.remove", Cw(this._id));
}
function Sw(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = oc(t));
  for (var r = this._groups, o = r.length, i = new Array(o), s = 0; s < o; ++s)
    for (var a = r[s], l = a.length, c = i[s] = new Array(l), d, f, h = 0; h < l; ++h)
      (d = a[h]) && (f = t.call(d, d.__data__, h, a)) && ("__data__" in d && (f.__data__ = d.__data__), c[h] = f, ua(c[h], e, n, h, c, kn(d, n)));
  return new ir(i, this._parents, e, n);
}
function Ew(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = qf(t));
  for (var r = this._groups, o = r.length, i = [], s = [], a = 0; a < o; ++a)
    for (var l = r[a], c = l.length, d, f = 0; f < c; ++f)
      if (d = l[f]) {
        for (var h = t.call(d, d.__data__, f, l), v, m = kn(d, n), y = 0, w = h.length; y < w; ++y)
          (v = h[y]) && ua(v, e, n, y, h, m);
        i.push(h), s.push(d);
      }
  return new ir(i, s, e, n);
}
var Pw = _i.prototype.constructor;
function Nw() {
  return new Pw(this._groups, this._parents);
}
function Ow(t, e) {
  var n, r, o;
  return function() {
    var i = xo(this, t), s = (this.style.removeProperty(t), xo(this, t));
    return i === s ? null : i === n && s === r ? o : o = e(n = i, r = s);
  };
}
function mh(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Aw(t, e, n) {
  var r, o = n + "", i;
  return function() {
    var s = xo(this, t);
    return s === o ? null : s === r ? i : i = e(r = s, n);
  };
}
function Tw(t, e, n) {
  var r, o, i;
  return function() {
    var s = xo(this, t), a = n(this), l = a + "";
    return a == null && (l = a = (this.style.removeProperty(t), xo(this, t))), s === l ? null : s === r && l === o ? i : (o = l, i = e(r = s, a));
  };
}
function Mw(t, e) {
  var n, r, o, i = "style." + e, s = "end." + i, a;
  return function() {
    var l = $n(this, t), c = l.on, d = l.value[i] == null ? a || (a = mh(e)) : void 0;
    (c !== n || o !== d) && (r = (n = c).copy()).on(s, o = d), l.on = r;
  };
}
function Dw(t, e, n) {
  var r = (t += "") == "transform" ? Iy : vh;
  return e == null ? this.styleTween(t, Ow(t, r)).on("end.style." + t, mh(t)) : typeof e == "function" ? this.styleTween(t, Tw(t, r, uc(this, "style." + t, e))).each(Mw(this._id, t)) : this.styleTween(t, Aw(t, r, e), n).on("end.style." + t, null);
}
function Iw(t, e, n) {
  return function(r) {
    this.style.setProperty(t, e.call(this, r), n);
  };
}
function Vw(t, e, n) {
  var r, o;
  function i() {
    var s = e.apply(this, arguments);
    return s !== o && (r = (o = s) && Iw(t, s, n)), r;
  }
  return i._value = e, i;
}
function zw(t, e, n) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (e == null) return this.tween(r, null);
  if (typeof e != "function") throw new Error();
  return this.tween(r, Vw(t, e, n ?? ""));
}
function Lw(t) {
  return function() {
    this.textContent = t;
  };
}
function Hw(t) {
  return function() {
    var e = t(this);
    this.textContent = e ?? "";
  };
}
function Rw(t) {
  return this.tween("text", typeof t == "function" ? Hw(uc(this, "text", t)) : Lw(t == null ? "" : t + ""));
}
function Fw(t) {
  return function(e) {
    this.textContent = t.call(this, e);
  };
}
function Bw(t) {
  var e, n;
  function r() {
    var o = t.apply(this, arguments);
    return o !== n && (e = (n = o) && Fw(o)), e;
  }
  return r._value = t, r;
}
function $w(t) {
  var e = "text";
  if (arguments.length < 1) return (e = this.tween(e)) && e._value;
  if (t == null) return this.tween(e, null);
  if (typeof t != "function") throw new Error();
  return this.tween(e, Bw(t));
}
function Kw() {
  for (var t = this._name, e = this._id, n = yh(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, c = 0; c < a; ++c)
      if (l = s[c]) {
        var d = kn(l, e);
        ua(l, t, n, c, s, {
          time: d.time + d.delay + d.duration,
          delay: 0,
          duration: d.duration,
          ease: d.ease
        });
      }
  return new ir(r, this._parents, t, n);
}
function Ww() {
  var t, e, n = this, r = n._id, o = n.size();
  return new Promise(function(i, s) {
    var a = { value: s }, l = { value: function() {
      --o === 0 && i();
    } };
    n.each(function() {
      var c = $n(this, r), d = c.on;
      d !== t && (e = (t = d).copy(), e._.cancel.push(a), e._.interrupt.push(a), e._.end.push(l)), c.on = e;
    }), o === 0 && i();
  });
}
var Zw = 0;
function ir(t, e, n, r) {
  this._groups = t, this._parents = e, this._name = n, this._id = r;
}
function yh() {
  return ++Zw;
}
var Wn = _i.prototype;
ir.prototype = {
  constructor: ir,
  select: Sw,
  selectAll: Ew,
  selectChild: Wn.selectChild,
  selectChildren: Wn.selectChildren,
  filter: yw,
  merge: ww,
  selection: Nw,
  transition: Kw,
  call: Wn.call,
  nodes: Wn.nodes,
  node: Wn.node,
  size: Wn.size,
  empty: Wn.empty,
  each: Wn.each,
  on: _w,
  attr: nw,
  attrTween: aw,
  style: Dw,
  styleTween: zw,
  text: Rw,
  textTween: $w,
  remove: kw,
  tween: Xy,
  delay: uw,
  duration: hw,
  ease: pw,
  easeVarying: mw,
  end: Ww,
  [Symbol.iterator]: Wn[Symbol.iterator]
};
function Yw(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var qw = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Yw
};
function jw(t, e) {
  for (var n; !(n = t.__transition) || !(n = n[e]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${e} not found`);
  return n;
}
function Xw(t) {
  var e, n;
  t instanceof ir ? (e = t._id, t = t._name) : (e = yh(), (n = qw).time = lc(), t = t == null ? null : t + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, c = 0; c < a; ++c)
      (l = s[c]) && ua(l, t, e, c, s, n || jw(l, e));
  return new ir(r, this._parents, t, e);
}
_i.prototype.interrupt = Yy;
_i.prototype.transition = Xw;
const Ki = (t) => () => t;
function Uw(t, {
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
var da = new Xn(1, 0, 0);
wh.prototype = Xn.prototype;
function wh(t) {
  for (; !t.__zoom; ) if (!(t = t.parentNode)) return da;
  return t.__zoom;
}
function Oa(t) {
  t.stopImmediatePropagation();
}
function Ro(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function Gw(t) {
  return (!t.ctrlKey || t.type === "wheel") && !t.button;
}
function Jw() {
  var t = this;
  return t instanceof SVGElement ? (t = t.ownerSVGElement || t, t.hasAttribute("viewBox") ? (t = t.viewBox.baseVal, [[t.x, t.y], [t.x + t.width, t.y + t.height]]) : [[0, 0], [t.width.baseVal.value, t.height.baseVal.value]]) : [[0, 0], [t.clientWidth, t.clientHeight]];
}
function Tu() {
  return this.__zoom || da;
}
function Qw(t) {
  return -t.deltaY * (t.deltaMode === 1 ? 0.05 : t.deltaMode ? 1 : 2e-3) * (t.ctrlKey ? 10 : 1);
}
function eb() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function tb(t, e, n) {
  var r = t.invertX(e[0][0]) - n[0][0], o = t.invertX(e[1][0]) - n[1][0], i = t.invertY(e[0][1]) - n[0][1], s = t.invertY(e[1][1]) - n[1][1];
  return t.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    s > i ? (i + s) / 2 : Math.min(0, i) || Math.max(0, s)
  );
}
function bh() {
  var t = Gw, e = Jw, n = tb, r = Qw, o = eb, i = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], a = 250, l = rs, c = aa("start", "zoom", "end"), d, f, h, v = 500, m = 150, y = 0, w = 10;
  function b(C) {
    C.property("__zoom", Tu).on("wheel.zoom", V, { passive: !1 }).on("mousedown.zoom", B).on("dblclick.zoom", $).filter(o).on("touchstart.zoom", T).on("touchmove.zoom", E).on("touchend.zoom touchcancel.zoom", M).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  b.transform = function(C, N, I, L) {
    var Z = C.selection ? C.selection() : C;
    Z.property("__zoom", Tu), C !== Z ? x(C, N, I, L) : Z.interrupt().each(function() {
      O(this, arguments).event(L).start().zoom(null, typeof N == "function" ? N.apply(this, arguments) : N).end();
    });
  }, b.scaleBy = function(C, N, I, L) {
    b.scaleTo(C, function() {
      var Z = this.__zoom.k, X = typeof N == "function" ? N.apply(this, arguments) : N;
      return Z * X;
    }, I, L);
  }, b.scaleTo = function(C, N, I, L) {
    b.transform(C, function() {
      var Z = e.apply(this, arguments), X = this.__zoom, D = I == null ? _(Z) : typeof I == "function" ? I.apply(this, arguments) : I, j = X.invert(D), G = typeof N == "function" ? N.apply(this, arguments) : N;
      return n(S(k(X, G), D, j), Z, s);
    }, I, L);
  }, b.translateBy = function(C, N, I, L) {
    b.transform(C, function() {
      return n(this.__zoom.translate(
        typeof N == "function" ? N.apply(this, arguments) : N,
        typeof I == "function" ? I.apply(this, arguments) : I
      ), e.apply(this, arguments), s);
    }, null, L);
  }, b.translateTo = function(C, N, I, L, Z) {
    b.transform(C, function() {
      var X = e.apply(this, arguments), D = this.__zoom, j = L == null ? _(X) : typeof L == "function" ? L.apply(this, arguments) : L;
      return n(da.translate(j[0], j[1]).scale(D.k).translate(
        typeof N == "function" ? -N.apply(this, arguments) : -N,
        typeof I == "function" ? -I.apply(this, arguments) : -I
      ), X, s);
    }, L, Z);
  };
  function k(C, N) {
    return N = Math.max(i[0], Math.min(i[1], N)), N === C.k ? C : new Xn(N, C.x, C.y);
  }
  function S(C, N, I) {
    var L = N[0] - I[0] * C.k, Z = N[1] - I[1] * C.k;
    return L === C.x && Z === C.y ? C : new Xn(C.k, L, Z);
  }
  function _(C) {
    return [(+C[0][0] + +C[1][0]) / 2, (+C[0][1] + +C[1][1]) / 2];
  }
  function x(C, N, I, L) {
    C.on("start.zoom", function() {
      O(this, arguments).event(L).start();
    }).on("interrupt.zoom end.zoom", function() {
      O(this, arguments).event(L).end();
    }).tween("zoom", function() {
      var Z = this, X = arguments, D = O(Z, X).event(L), j = e.apply(Z, X), G = I == null ? _(j) : typeof I == "function" ? I.apply(Z, X) : I, R = Math.max(j[1][0] - j[0][0], j[1][1] - j[0][1]), ee = Z.__zoom, K = typeof N == "function" ? N.apply(Z, X) : N, U = l(ee.invert(G).concat(R / ee.k), K.invert(G).concat(R / K.k));
      return function(ne) {
        if (ne === 1) ne = K;
        else {
          var H = U(ne), te = R / H[2];
          ne = new Xn(te, G[0] - H[0] * te, G[1] - H[1] * te);
        }
        D.zoom(null, ne);
      };
    });
  }
  function O(C, N, I) {
    return !I && C.__zooming || new z(C, N);
  }
  function z(C, N) {
    this.that = C, this.args = N, this.active = 0, this.sourceEvent = null, this.extent = e.apply(C, N), this.taps = 0;
  }
  z.prototype = {
    event: function(C) {
      return C && (this.sourceEvent = C), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(C, N) {
      return this.mouse && C !== "mouse" && (this.mouse[1] = N.invert(this.mouse[0])), this.touch0 && C !== "touch" && (this.touch0[1] = N.invert(this.touch0[0])), this.touch1 && C !== "touch" && (this.touch1[1] = N.invert(this.touch1[0])), this.that.__zoom = N, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(C) {
      var N = ln(this.that).datum();
      c.call(
        C,
        this.that,
        new Uw(C, {
          sourceEvent: this.sourceEvent,
          target: b,
          transform: this.that.__zoom,
          dispatch: c
        }),
        N
      );
    }
  };
  function V(C, ...N) {
    if (!t.apply(this, arguments)) return;
    var I = O(this, N).event(C), L = this.__zoom, Z = Math.max(i[0], Math.min(i[1], L.k * Math.pow(2, r.apply(this, arguments)))), X = hn(C);
    if (I.wheel)
      (I.mouse[0][0] !== X[0] || I.mouse[0][1] !== X[1]) && (I.mouse[1] = L.invert(I.mouse[0] = X)), clearTimeout(I.wheel);
    else {
      if (L.k === Z) return;
      I.mouse = [X, L.invert(X)], ss(this), I.start();
    }
    Ro(C), I.wheel = setTimeout(D, m), I.zoom("mouse", n(S(k(L, Z), I.mouse[0], I.mouse[1]), I.extent, s));
    function D() {
      I.wheel = null, I.end();
    }
  }
  function B(C, ...N) {
    if (h || !t.apply(this, arguments)) return;
    var I = C.currentTarget, L = O(this, N, !0).event(C), Z = ln(C.view).on("mousemove.zoom", G, !0).on("mouseup.zoom", R, !0), X = hn(C, I), D = C.clientX, j = C.clientY;
    oh(C.view), Oa(C), L.mouse = [X, this.__zoom.invert(X)], ss(this), L.start();
    function G(ee) {
      if (Ro(ee), !L.moved) {
        var K = ee.clientX - D, U = ee.clientY - j;
        L.moved = K * K + U * U > y;
      }
      L.event(ee).zoom("mouse", n(S(L.that.__zoom, L.mouse[0] = hn(ee, I), L.mouse[1]), L.extent, s));
    }
    function R(ee) {
      Z.on("mousemove.zoom mouseup.zoom", null), ih(ee.view, L.moved), Ro(ee), L.event(ee).end();
    }
  }
  function $(C, ...N) {
    if (t.apply(this, arguments)) {
      var I = this.__zoom, L = hn(C.changedTouches ? C.changedTouches[0] : C, this), Z = I.invert(L), X = I.k * (C.shiftKey ? 0.5 : 2), D = n(S(k(I, X), L, Z), e.apply(this, N), s);
      Ro(C), a > 0 ? ln(this).transition().duration(a).call(x, D, L, C) : ln(this).call(b.transform, D, L, C);
    }
  }
  function T(C, ...N) {
    if (t.apply(this, arguments)) {
      var I = C.touches, L = I.length, Z = O(this, N, C.changedTouches.length === L).event(C), X, D, j, G;
      for (Oa(C), D = 0; D < L; ++D)
        j = I[D], G = hn(j, this), G = [G, this.__zoom.invert(G), j.identifier], Z.touch0 ? !Z.touch1 && Z.touch0[2] !== G[2] && (Z.touch1 = G, Z.taps = 0) : (Z.touch0 = G, X = !0, Z.taps = 1 + !!d);
      d && (d = clearTimeout(d)), X && (Z.taps < 2 && (f = G[0], d = setTimeout(function() {
        d = null;
      }, v)), ss(this), Z.start());
    }
  }
  function E(C, ...N) {
    if (this.__zooming) {
      var I = O(this, N).event(C), L = C.changedTouches, Z = L.length, X, D, j, G;
      for (Ro(C), X = 0; X < Z; ++X)
        D = L[X], j = hn(D, this), I.touch0 && I.touch0[2] === D.identifier ? I.touch0[0] = j : I.touch1 && I.touch1[2] === D.identifier && (I.touch1[0] = j);
      if (D = I.that.__zoom, I.touch1) {
        var R = I.touch0[0], ee = I.touch0[1], K = I.touch1[0], U = I.touch1[1], ne = (ne = K[0] - R[0]) * ne + (ne = K[1] - R[1]) * ne, H = (H = U[0] - ee[0]) * H + (H = U[1] - ee[1]) * H;
        D = k(D, Math.sqrt(ne / H)), j = [(R[0] + K[0]) / 2, (R[1] + K[1]) / 2], G = [(ee[0] + U[0]) / 2, (ee[1] + U[1]) / 2];
      } else if (I.touch0) j = I.touch0[0], G = I.touch0[1];
      else return;
      I.zoom("touch", n(S(D, j, G), I.extent, s));
    }
  }
  function M(C, ...N) {
    if (this.__zooming) {
      var I = O(this, N).event(C), L = C.changedTouches, Z = L.length, X, D;
      for (Oa(C), h && clearTimeout(h), h = setTimeout(function() {
        h = null;
      }, v), X = 0; X < Z; ++X)
        D = L[X], I.touch0 && I.touch0[2] === D.identifier ? delete I.touch0 : I.touch1 && I.touch1[2] === D.identifier && delete I.touch1;
      if (I.touch1 && !I.touch0 && (I.touch0 = I.touch1, delete I.touch1), I.touch0) I.touch0[1] = this.__zoom.invert(I.touch0[0]);
      else if (I.end(), I.taps === 2 && (D = hn(D, this), Math.hypot(f[0] - D[0], f[1] - D[1]) < w)) {
        var j = ln(this).on("dblclick.zoom");
        j && j.apply(this, arguments);
      }
    }
  }
  return b.wheelDelta = function(C) {
    return arguments.length ? (r = typeof C == "function" ? C : Ki(+C), b) : r;
  }, b.filter = function(C) {
    return arguments.length ? (t = typeof C == "function" ? C : Ki(!!C), b) : t;
  }, b.touchable = function(C) {
    return arguments.length ? (o = typeof C == "function" ? C : Ki(!!C), b) : o;
  }, b.extent = function(C) {
    return arguments.length ? (e = typeof C == "function" ? C : Ki([[+C[0][0], +C[0][1]], [+C[1][0], +C[1][1]]]), b) : e;
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
    var C = c.on.apply(c, arguments);
    return C === c ? b : C;
  }, b.clickDistance = function(C) {
    return arguments.length ? (y = (C = +C) * C, b) : Math.sqrt(y);
  }, b.tapDistance = function(C) {
    return arguments.length ? (w = +C, b) : w;
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
}, il = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
], xh = ["Enter", " ", "Escape"], nb = {
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
var Wr;
(function(t) {
  t.Free = "free", t.Vertical = "vertical", t.Horizontal = "horizontal";
})(Wr || (Wr = {}));
var Es;
(function(t) {
  t.Partial = "partial", t.Full = "full";
})(Es || (Es = {}));
const sl = {
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
var jn;
(function(t) {
  t.Bezier = "default", t.Straight = "straight", t.Step = "step", t.SmoothStep = "smoothstep", t.SimpleBezier = "simplebezier";
})(jn || (jn = {}));
var ci;
(function(t) {
  t.Arrow = "arrow", t.ArrowClosed = "arrowclosed";
})(ci || (ci = {}));
var Pe;
(function(t) {
  t.Left = "left", t.Top = "top", t.Right = "right", t.Bottom = "bottom";
})(Pe || (Pe = {}));
const Mu = {
  [Pe.Left]: Pe.Right,
  [Pe.Right]: Pe.Left,
  [Pe.Top]: Pe.Bottom,
  [Pe.Bottom]: Pe.Top
};
function rb(t, e) {
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
function Du(t, e, n) {
  if (!n)
    return;
  const r = [];
  t.forEach((o, i) => {
    e?.has(i) || r.push(o);
  }), r.length && n(r);
}
function ob(t) {
  return t === null ? null : t ? "valid" : "invalid";
}
const _h = (t) => "id" in t && "source" in t && "target" in t, ib = (t) => "id" in t && "position" in t && !("source" in t) && !("target" in t), dc = (t) => "id" in t && "internals" in t && !("source" in t) && !("target" in t), ki = (t, e = [0, 0]) => {
  const { width: n, height: r } = Tr(t), o = t.origin ?? e, i = n * o[0], s = r * o[1];
  return {
    x: t.position.x - i,
    y: t.position.y - s
  };
}, sb = (t, e = { nodeOrigin: [0, 0] }) => {
  if (t.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = t.reduce((r, o) => {
    const i = typeof o == "string";
    let s = !e.nodeLookup && !i ? o : void 0;
    e.nodeLookup && (s = i ? e.nodeLookup.get(o) : dc(o) ? o : e.nodeLookup.get(o.id));
    const a = s ? Ps(s, e.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return fa(r, a);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return ha(n);
}, Si = (t, e = {}) => {
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 }, r = !1;
  return t.forEach((o) => {
    (e.filter === void 0 || e.filter(o)) && (n = fa(n, Ps(o)), r = !0);
  }), r ? ha(n) : { x: 0, y: 0, width: 0, height: 0 };
}, fc = (t, e, [n, r, o] = [0, 0, 1], i = !1, s = !1) => {
  const a = {
    ...Pi(e, [n, r, o]),
    width: e.width / o,
    height: e.height / o
  }, l = [];
  for (const c of t.values()) {
    const { measured: d, selectable: f = !0, hidden: h = !1 } = c;
    if (s && !f || h)
      continue;
    const v = d.width ?? c.width ?? c.initialWidth ?? null, m = d.height ?? c.height ?? c.initialHeight ?? null, y = ui(a, So(c)), w = (v ?? 0) * (m ?? 0), b = i && y > 0;
    (!c.internals.handleBounds || b || y >= w || c.dragging) && l.push(c);
  }
  return l;
}, ab = (t, e) => {
  const n = /* @__PURE__ */ new Set();
  return t.forEach((r) => {
    n.add(r.id);
  }), e.filter((r) => n.has(r.source) || n.has(r.target));
};
function lb(t, e) {
  const n = /* @__PURE__ */ new Map(), r = e?.nodes ? new Set(e.nodes.map((o) => o.id)) : null;
  return t.forEach((o) => {
    o.measured.width && o.measured.height && (e?.includeHiddenNodes || !o.hidden) && (!r || r.has(o.id)) && n.set(o.id, o);
  }), n;
}
async function cb({ nodes: t, width: e, height: n, panZoom: r, minZoom: o, maxZoom: i }, s) {
  if (t.size === 0)
    return Promise.resolve(!0);
  const a = lb(t, s), l = Si(a), c = hc(l, e, n, s?.minZoom ?? o, s?.maxZoom ?? i, s?.padding ?? 0.1);
  return await r.setViewport(c, {
    duration: s?.duration,
    ease: s?.ease,
    interpolate: s?.interpolate
  }), Promise.resolve(!0);
}
function Ch({ nodeId: t, nextPosition: e, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
  const s = n.get(t), a = s.parentId ? n.get(s.parentId) : void 0, { x: l, y: c } = a ? a.internals.positionAbsolute : { x: 0, y: 0 }, d = s.origin ?? r;
  let f = s.extent || o;
  if (s.extent === "parent" && !s.expandParent)
    if (!a)
      i?.("005", li.error005());
    else {
      const v = a.measured.width, m = a.measured.height;
      v && m && (f = [
        [l, c],
        [l + v, c + m]
      ]);
    }
  else a && Eo(s.extent) && (f = [
    [s.extent[0][0] + l, s.extent[0][1] + c],
    [s.extent[1][0] + l, s.extent[1][1] + c]
  ]);
  const h = Eo(f) ? Jr(e, f, s.measured) : e;
  return (s.measured.width === void 0 || s.measured.height === void 0) && i?.("015", li.error015()), {
    position: {
      x: h.x - l + (s.measured.width ?? 0) * d[0],
      y: h.y - c + (s.measured.height ?? 0) * d[1]
    },
    positionAbsolute: h
  };
}
async function ub({ nodesToRemove: t = [], edgesToRemove: e = [], nodes: n, edges: r, onBeforeDelete: o }) {
  const i = new Set(t.map((h) => h.id)), s = [];
  for (const h of n) {
    if (h.deletable === !1)
      continue;
    const v = i.has(h.id), m = !v && h.parentId && s.find((y) => y.id === h.parentId);
    (v || m) && s.push(h);
  }
  const a = new Set(e.map((h) => h.id)), l = r.filter((h) => h.deletable !== !1), d = ab(s, l);
  for (const h of l)
    a.has(h.id) && !d.find((m) => m.id === h.id) && d.push(h);
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
const ko = (t, e = 0, n = 1) => Math.min(Math.max(t, e), n), Jr = (t = { x: 0, y: 0 }, e, n) => ({
  x: ko(t.x, e[0][0], e[1][0] - (n?.width ?? 0)),
  y: ko(t.y, e[0][1], e[1][1] - (n?.height ?? 0))
});
function kh(t, e, n) {
  const { width: r, height: o } = Tr(n), { x: i, y: s } = n.internals.positionAbsolute;
  return Jr(t, [
    [i, s],
    [i + r, s + o]
  ], e);
}
const Iu = (t, e, n) => t < e ? ko(Math.abs(t - e), 1, e) / e : t > n ? -ko(Math.abs(t - n), 1, e) / e : 0, Sh = (t, e, n = 15, r = 40) => {
  const o = Iu(t.x, r, e.width - r) * n, i = Iu(t.y, r, e.height - r) * n;
  return [o, i];
}, fa = (t, e) => ({
  x: Math.min(t.x, e.x),
  y: Math.min(t.y, e.y),
  x2: Math.max(t.x2, e.x2),
  y2: Math.max(t.y2, e.y2)
}), al = ({ x: t, y: e, width: n, height: r }) => ({
  x: t,
  y: e,
  x2: t + n,
  y2: e + r
}), ha = ({ x: t, y: e, x2: n, y2: r }) => ({
  x: t,
  y: e,
  width: n - t,
  height: r - e
}), So = (t, e = [0, 0]) => {
  const { x: n, y: r } = dc(t) ? t.internals.positionAbsolute : ki(t, e);
  return {
    x: n,
    y: r,
    width: t.measured?.width ?? t.width ?? t.initialWidth ?? 0,
    height: t.measured?.height ?? t.height ?? t.initialHeight ?? 0
  };
}, Ps = (t, e = [0, 0]) => {
  const { x: n, y: r } = dc(t) ? t.internals.positionAbsolute : ki(t, e);
  return {
    x: n,
    y: r,
    x2: n + (t.measured?.width ?? t.width ?? t.initialWidth ?? 0),
    y2: r + (t.measured?.height ?? t.height ?? t.initialHeight ?? 0)
  };
}, Eh = (t, e) => ha(fa(al(t), al(e))), ui = (t, e) => {
  const n = Math.max(0, Math.min(t.x + t.width, e.x + e.width) - Math.max(t.x, e.x)), r = Math.max(0, Math.min(t.y + t.height, e.y + e.height) - Math.max(t.y, e.y));
  return Math.ceil(n * r);
}, Vu = (t) => Un(t.width) && Un(t.height) && Un(t.x) && Un(t.y), Un = (t) => !isNaN(t) && isFinite(t), db = (t, e) => {
}, Ei = (t, e = [1, 1]) => ({
  x: e[0] * Math.round(t.x / e[0]),
  y: e[1] * Math.round(t.y / e[1])
}), Pi = ({ x: t, y: e }, [n, r, o], i = !1, s = [1, 1]) => {
  const a = {
    x: (t - n) / o,
    y: (e - r) / o
  };
  return i ? Ei(a, s) : a;
}, Ns = ({ x: t, y: e }, [n, r, o]) => ({
  x: t * o + n,
  y: e * o + r
});
function co(t, e) {
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
function fb(t, e, n) {
  if (typeof t == "string" || typeof t == "number") {
    const r = co(t, n), o = co(t, e);
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
    const r = co(t.top ?? t.y ?? 0, n), o = co(t.bottom ?? t.y ?? 0, n), i = co(t.left ?? t.x ?? 0, e), s = co(t.right ?? t.x ?? 0, e);
    return { top: r, right: s, bottom: o, left: i, x: i + s, y: r + o };
  }
  return { top: 0, right: 0, bottom: 0, left: 0, x: 0, y: 0 };
}
function hb(t, e, n, r, o, i) {
  const { x: s, y: a } = Ns(t, [e, n, r]), { x: l, y: c } = Ns({ x: t.x + t.width, y: t.y + t.height }, [e, n, r]), d = o - l, f = i - c;
  return {
    left: Math.floor(s),
    top: Math.floor(a),
    right: Math.floor(d),
    bottom: Math.floor(f)
  };
}
const hc = (t, e, n, r, o, i) => {
  const s = fb(i, e, n), a = (e - s.x) / t.width, l = (n - s.y) / t.height, c = Math.min(a, l), d = ko(c, r, o), f = t.x + t.width / 2, h = t.y + t.height / 2, v = e / 2 - f * d, m = n / 2 - h * d, y = hb(t, v, m, d, e, n), w = {
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
}, Fr = () => typeof navigator < "u" && navigator?.userAgent?.indexOf("Mac") >= 0;
function Eo(t) {
  return t != null && t !== "parent";
}
function Tr(t) {
  return {
    width: t.measured?.width ?? t.width ?? t.initialWidth ?? 0,
    height: t.measured?.height ?? t.height ?? t.initialHeight ?? 0
  };
}
function Ph(t) {
  return (t.measured?.width ?? t.width ?? t.initialWidth) !== void 0 && (t.measured?.height ?? t.height ?? t.initialHeight) !== void 0;
}
function gb(t, e = { width: 0, height: 0 }, n, r, o) {
  const i = { ...t }, s = r.get(n);
  if (s) {
    const a = s.origin || o;
    i.x += s.internals.positionAbsolute.x - (e.width ?? 0) * a[0], i.y += s.internals.positionAbsolute.y - (e.height ?? 0) * a[1];
  }
  return i;
}
function pb(t) {
  return { ...nb, ...t || {} };
}
function Aa(t, { snapGrid: e = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: i, y: s } = vn(t), a = Pi({ x: i - (o?.left ?? 0), y: s - (o?.top ?? 0) }, r), { x: l, y: c } = n ? Ei(a, e) : a;
  return {
    xSnapped: l,
    ySnapped: c,
    ...a
  };
}
const Nh = (t) => ({
  width: t.offsetWidth,
  height: t.offsetHeight
}), Oh = (t) => t?.getRootNode?.() || window?.document, vb = ["INPUT", "SELECT", "TEXTAREA"];
function Ah(t) {
  const e = t.composedPath?.()?.[0] || t.target;
  return e?.nodeType !== 1 ? !1 : vb.includes(e.nodeName) || e.hasAttribute("contenteditable") || !!e.closest(".nokey");
}
const Th = (t) => "clientX" in t, vn = (t, e) => {
  const n = Th(t), r = n ? t.clientX : t.touches?.[0].clientX, o = n ? t.clientY : t.touches?.[0].clientY;
  return {
    x: r - (e?.left ?? 0),
    y: o - (e?.top ?? 0)
  };
}, zu = (t, e, n, r, o) => {
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
      ...Nh(s)
    };
  });
};
function mb({ sourceX: t, sourceY: e, targetX: n, targetY: r, sourceControlX: o, sourceControlY: i, targetControlX: s, targetControlY: a }) {
  const l = t * 0.125 + o * 0.375 + s * 0.375 + n * 0.125, c = e * 0.125 + i * 0.375 + a * 0.375 + r * 0.125, d = Math.abs(l - t), f = Math.abs(c - e);
  return [l, c, d, f];
}
function Wi(t, e) {
  return t >= 0 ? 0.5 * t : e * 25 * Math.sqrt(-t);
}
function Lu({ pos: t, x1: e, y1: n, x2: r, y2: o, c: i }) {
  switch (t) {
    case Pe.Left:
      return [e - Wi(e - r, i), n];
    case Pe.Right:
      return [e + Wi(r - e, i), n];
    case Pe.Top:
      return [e, n - Wi(n - o, i)];
    case Pe.Bottom:
      return [e, n + Wi(o - n, i)];
  }
}
function Mh({ sourceX: t, sourceY: e, sourcePosition: n = Pe.Bottom, targetX: r, targetY: o, targetPosition: i = Pe.Top, curvature: s = 0.25 }) {
  const [a, l] = Lu({
    pos: n,
    x1: t,
    y1: e,
    x2: r,
    y2: o,
    c: s
  }), [c, d] = Lu({
    pos: i,
    x1: r,
    y1: o,
    x2: t,
    y2: e,
    c: s
  }), [f, h, v, m] = mb({
    sourceX: t,
    sourceY: e,
    targetX: r,
    targetY: o,
    sourceControlX: a,
    sourceControlY: l,
    targetControlX: c,
    targetControlY: d
  });
  return [
    `M${t},${e} C${a},${l} ${c},${d} ${r},${o}`,
    f,
    h,
    v,
    m
  ];
}
function Dh({ sourceX: t, sourceY: e, targetX: n, targetY: r }) {
  const o = Math.abs(n - t) / 2, i = n < t ? n + o : n - o, s = Math.abs(r - e) / 2, a = r < e ? r + s : r - s;
  return [i, a, o, s];
}
function yb({ sourceNode: t, targetNode: e, selected: n = !1, zIndex: r, elevateOnSelect: o = !1 }) {
  if (r !== void 0)
    return r;
  const i = o && n ? 1e3 : 0, s = Math.max(t.parentId || o && t.selected ? t.internals.z : 0, e.parentId || o && e.selected ? e.internals.z : 0);
  return i + s;
}
function wb({ sourceNode: t, targetNode: e, width: n, height: r, transform: o }) {
  const i = fa(Ps(t), Ps(e));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const s = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return ui(s, ha(i)) > 0;
}
const bb = ({ source: t, sourceHandle: e, target: n, targetHandle: r }) => `xy-edge__${t}${e || ""}-${n}${r || ""}`, xb = (t, e) => e.some((n) => n.source === t.source && n.target === t.target && (n.sourceHandle === t.sourceHandle || !n.sourceHandle && !t.sourceHandle) && (n.targetHandle === t.targetHandle || !n.targetHandle && !t.targetHandle)), _b = (t, e) => {
  if (!t.source || !t.target)
    return e;
  let n;
  return _h(t) ? n = { ...t } : n = {
    ...t,
    id: bb(t)
  }, xb(n, e) ? e : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, e.concat(n));
};
function Ih({ sourceX: t, sourceY: e, targetX: n, targetY: r }) {
  const [o, i, s, a] = Dh({
    sourceX: t,
    sourceY: e,
    targetX: n,
    targetY: r
  });
  return [`M ${t},${e}L ${n},${r}`, o, i, s, a];
}
const Hu = {
  [Pe.Left]: { x: -1, y: 0 },
  [Pe.Right]: { x: 1, y: 0 },
  [Pe.Top]: { x: 0, y: -1 },
  [Pe.Bottom]: { x: 0, y: 1 }
}, Cb = ({ source: t, sourcePosition: e = Pe.Bottom, target: n }) => e === Pe.Left || e === Pe.Right ? t.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : t.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, Ru = (t, e) => Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
function kb({ source: t, sourcePosition: e = Pe.Bottom, target: n, targetPosition: r = Pe.Top, center: o, offset: i, stepPosition: s }) {
  const a = Hu[e], l = Hu[r], c = { x: t.x + a.x * i, y: t.y + a.y * i }, d = { x: n.x + l.x * i, y: n.y + l.y * i }, f = Cb({
    source: c,
    sourcePosition: e,
    target: d
  }), h = f.x !== 0 ? "x" : "y", v = f[h];
  let m = [], y, w;
  const b = { x: 0, y: 0 }, k = { x: 0, y: 0 }, [, , S, _] = Dh({
    sourceX: t.x,
    sourceY: t.y,
    targetX: n.x,
    targetY: n.y
  });
  if (a[h] * l[h] === -1) {
    h === "x" ? (y = o.x ?? c.x + (d.x - c.x) * s, w = o.y ?? (c.y + d.y) / 2) : (y = o.x ?? (c.x + d.x) / 2, w = o.y ?? c.y + (d.y - c.y) * s);
    const O = [
      { x: y, y: c.y },
      { x: y, y: d.y }
    ], z = [
      { x: c.x, y: w },
      { x: d.x, y: w }
    ];
    a[h] === v ? m = h === "x" ? O : z : m = h === "x" ? z : O;
  } else {
    const O = [{ x: c.x, y: d.y }], z = [{ x: d.x, y: c.y }];
    if (h === "x" ? m = a.x === v ? z : O : m = a.y === v ? O : z, e === r) {
      const E = Math.abs(t[h] - n[h]);
      if (E <= i) {
        const M = Math.min(i - 1, i - E);
        a[h] === v ? b[h] = (c[h] > t[h] ? -1 : 1) * M : k[h] = (d[h] > n[h] ? -1 : 1) * M;
      }
    }
    if (e !== r) {
      const E = h === "x" ? "y" : "x", M = a[h] === l[E], C = c[E] > d[E], N = c[E] < d[E];
      (a[h] === 1 && (!M && C || M && N) || a[h] !== 1 && (!M && N || M && C)) && (m = h === "x" ? O : z);
    }
    const V = { x: c.x + b.x, y: c.y + b.y }, B = { x: d.x + k.x, y: d.y + k.y }, $ = Math.max(Math.abs(V.x - m[0].x), Math.abs(B.x - m[0].x)), T = Math.max(Math.abs(V.y - m[0].y), Math.abs(B.y - m[0].y));
    $ >= T ? (y = (V.x + B.x) / 2, w = m[0].y) : (y = m[0].x, w = (V.y + B.y) / 2);
  }
  return [[
    t,
    { x: c.x + b.x, y: c.y + b.y },
    ...m,
    { x: d.x + k.x, y: d.y + k.y },
    n
  ], y, w, S, _];
}
function Sb(t, e, n, r) {
  const o = Math.min(Ru(t, e) / 2, Ru(e, n) / 2, r), { x: i, y: s } = e;
  if (t.x === i && i === n.x || t.y === s && s === n.y)
    return `L${i} ${s}`;
  if (t.y === s) {
    const c = t.x < n.x ? -1 : 1, d = t.y < n.y ? 1 : -1;
    return `L ${i + o * c},${s}Q ${i},${s} ${i},${s + o * d}`;
  }
  const a = t.x < n.x ? 1 : -1, l = t.y < n.y ? -1 : 1;
  return `L ${i},${s + o * l}Q ${i},${s} ${i + o * a},${s}`;
}
function gc({ sourceX: t, sourceY: e, sourcePosition: n = Pe.Bottom, targetX: r, targetY: o, targetPosition: i = Pe.Top, borderRadius: s = 5, centerX: a, centerY: l, offset: c = 20, stepPosition: d = 0.5 }) {
  const [f, h, v, m, y] = kb({
    source: { x: t, y: e },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: a, y: l },
    offset: c,
    stepPosition: d
  });
  return [f.reduce((b, k, S) => {
    let _ = "";
    return S > 0 && S < f.length - 1 ? _ = Sb(f[S - 1], k, f[S + 1], s) : _ = `${S === 0 ? "M" : "L"}${k.x} ${k.y}`, b += _, b;
  }, ""), h, v, m, y];
}
function Fu(t) {
  return t && !!(t.internals.handleBounds || t.handles?.length) && !!(t.measured.width || t.width || t.initialWidth);
}
function Eb(t) {
  const { sourceNode: e, targetNode: n } = t;
  if (!Fu(e) || !Fu(n))
    return null;
  const r = e.internals.handleBounds || Bu(e.handles), o = n.internals.handleBounds || Bu(n.handles), i = $u(r?.source ?? [], t.sourceHandle), s = $u(
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
  const a = i?.position || Pe.Bottom, l = s?.position || Pe.Top, c = di(e, i, a), d = di(n, s, l);
  return {
    sourceX: c.x,
    sourceY: c.y,
    targetX: d.x,
    targetY: d.y,
    sourcePosition: a,
    targetPosition: l
  };
}
function Bu(t) {
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
function di(t, e, n = Pe.Left, r = !1) {
  const o = (e?.x ?? 0) + t.internals.positionAbsolute.x, i = (e?.y ?? 0) + t.internals.positionAbsolute.y, { width: s, height: a } = e ?? Tr(t);
  if (r)
    return { x: o + s / 2, y: i + a / 2 };
  switch (e?.position ?? n) {
    case Pe.Top:
      return { x: o + s / 2, y: i };
    case Pe.Right:
      return { x: o + s, y: i + a / 2 };
    case Pe.Bottom:
      return { x: o + s / 2, y: i + a };
    case Pe.Left:
      return { x: o, y: i + a / 2 };
  }
}
function $u(t, e) {
  return t && (e ? t.find((n) => n.id === e) : t[0]) || null;
}
function ll(t, e) {
  return t ? typeof t == "string" ? t : `${e ? `${e}__` : ""}${Object.keys(t).sort().map((r) => `${r}=${t[r]}`).join("&")}` : "";
}
function Pb(t, { id: e, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const i = /* @__PURE__ */ new Set();
  return t.reduce((s, a) => ([a.markerStart || r, a.markerEnd || o].forEach((l) => {
    if (l && typeof l == "object") {
      const c = ll(l, e);
      i.has(c) || (s.push({ id: c, color: l.color || n, ...l }), i.add(c));
    }
  }), s), []).sort((s, a) => s.id.localeCompare(a.id));
}
function Nb(t, e, n, r, o) {
  let i = 0.5;
  o === "start" ? i = 0 : o === "end" && (i = 1);
  let s = [
    (t.x + t.width * i) * e.zoom + e.x,
    t.y * e.zoom + e.y - r
  ], a = [-100 * i, -100];
  switch (n) {
    case Pe.Right:
      s = [
        (t.x + t.width) * e.zoom + e.x + r,
        (t.y + t.height * i) * e.zoom + e.y
      ], a = [0, -100 * i];
      break;
    case Pe.Bottom:
      s[1] = (t.y + t.height) * e.zoom + e.y + r, a[1] = 0;
      break;
    case Pe.Left:
      s = [
        t.x * e.zoom + e.x - r,
        (t.y + t.height * i) * e.zoom + e.y
      ], a = [-100, -100 * i];
      break;
  }
  return `translate(${s[0]}px, ${s[1]}px) translate(${a[0]}%, ${a[1]}%)`;
}
const Vh = 1e3, Ob = 10, pc = {
  nodeOrigin: [0, 0],
  nodeExtent: il,
  elevateNodesOnSelect: !0,
  defaults: {}
}, Ab = {
  ...pc,
  checkEquality: !0
};
function vc(t, e) {
  const n = { ...t };
  for (const r in e)
    e[r] !== void 0 && (n[r] = e[r]);
  return n;
}
function Tb(t, e, n) {
  const r = vc(pc, n);
  for (const o of t.values())
    if (o.parentId)
      mc(o, t, e, r);
    else {
      const i = ki(o, r.nodeOrigin), s = Eo(o.extent) ? o.extent : r.nodeExtent, a = Jr(i, s, Tr(o));
      o.internals.positionAbsolute = a;
    }
}
function Mb(t, e) {
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
function Db(t, e, n, r) {
  const o = vc(Ab, r);
  let i = { i: -1 }, s = t.length > 0;
  const a = new Map(e), l = o?.elevateNodesOnSelect ? Vh : 0;
  e.clear(), n.clear();
  for (const c of t) {
    let d = a.get(c.id);
    if (o.checkEquality && c === d?.internals.userNode)
      e.set(c.id, d);
    else {
      const f = ki(c, o.nodeOrigin), h = Eo(c.extent) ? c.extent : o.nodeExtent, v = Jr(f, h, Tr(c));
      d = {
        ...o.defaults,
        ...c,
        measured: {
          width: c.measured?.width,
          height: c.measured?.height
        },
        internals: {
          positionAbsolute: v,
          // if user re-initializes the node or removes `measured` for whatever reason, we reset the handleBounds so that the node gets re-measured
          handleBounds: Mb(c, d),
          z: zh(c, l),
          userNode: c
        }
      }, e.set(c.id, d);
    }
    (d.measured === void 0 || d.measured.width === void 0 || d.measured.height === void 0) && !d.hidden && (s = !1), c.parentId && mc(d, e, n, r, i);
  }
  return s;
}
function Ib(t, e) {
  if (!t.parentId)
    return;
  const n = e.get(t.parentId);
  n ? n.set(t.id, t) : e.set(t.parentId, /* @__PURE__ */ new Map([[t.id, t]]));
}
function mc(t, e, n, r, o) {
  const { elevateNodesOnSelect: i, nodeOrigin: s, nodeExtent: a } = vc(pc, r), l = t.parentId, c = e.get(l);
  if (!c) {
    console.warn(`Parent node ${l} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  Ib(t, n), o && !c.parentId && c.internals.rootParentIndex === void 0 && (c.internals.rootParentIndex = ++o.i, c.internals.z = c.internals.z + o.i * Ob), o && c.internals.rootParentIndex !== void 0 && (o.i = c.internals.rootParentIndex);
  const d = i ? Vh : 0, { x: f, y: h, z: v } = Vb(t, c, s, a, d), { positionAbsolute: m } = t.internals, y = f !== m.x || h !== m.y;
  (y || v !== t.internals.z) && e.set(t.id, {
    ...t,
    internals: {
      ...t.internals,
      positionAbsolute: y ? { x: f, y: h } : m,
      z: v
    }
  });
}
function zh(t, e) {
  return (Un(t.zIndex) ? t.zIndex : 0) + (t.selected ? e : 0);
}
function Vb(t, e, n, r, o) {
  const { x: i, y: s } = e.internals.positionAbsolute, a = Tr(t), l = ki(t, n), c = Eo(t.extent) ? Jr(l, t.extent, a) : l;
  let d = Jr({ x: i + c.x, y: s + c.y }, r, a);
  t.extent === "parent" && (d = kh(d, a, e));
  const f = zh(t, o), h = e.internals.z ?? 0;
  return {
    x: d.x,
    y: d.y,
    z: h >= f ? h + 1 : f
  };
}
function zb(t, e, n, r = [0, 0]) {
  const o = [], i = /* @__PURE__ */ new Map();
  for (const s of t) {
    const a = e.get(s.parentId);
    if (!a)
      continue;
    const l = i.get(s.parentId)?.expandedRect ?? So(a), c = Eh(l, s.rect);
    i.set(s.parentId, { expandedRect: c, parent: a });
  }
  return i.size > 0 && i.forEach(({ expandedRect: s, parent: a }, l) => {
    const c = a.internals.positionAbsolute, d = Tr(a), f = a.origin ?? r, h = s.x < c.x ? Math.round(Math.abs(c.x - s.x)) : 0, v = s.y < c.y ? Math.round(Math.abs(c.y - s.y)) : 0, m = Math.max(d.width, Math.round(s.width)), y = Math.max(d.height, Math.round(s.height)), w = (m - d.width) * f[0], b = (y - d.height) * f[1];
    (h > 0 || v > 0 || w || b) && (o.push({
      id: l,
      type: "position",
      position: {
        x: a.position.x - h + w,
        y: a.position.y - v + b
      }
    }), n.get(l)?.forEach((k) => {
      t.some((S) => S.id === k.id) || o.push({
        id: k.id,
        type: "position",
        position: {
          x: k.position.x + h,
          y: k.position.y + v
        }
      });
    })), (d.width < s.width || d.height < s.height || h || v) && o.push({
      id: l,
      type: "dimensions",
      setAttributes: !0,
      dimensions: {
        width: m + (h ? f[0] * h - w : 0),
        height: y + (v ? f[1] * v - b : 0)
      }
    });
  }), o;
}
function Lb(t, e, n, r, o, i) {
  const s = r?.querySelector(".xyflow__viewport");
  let a = !1;
  if (!s)
    return { changes: [], updatedInternals: a };
  const l = [], c = window.getComputedStyle(s), { m22: d } = new window.DOMMatrixReadOnly(c.transform), f = [];
  for (const h of t.values()) {
    const v = e.get(h.id);
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
    const m = Nh(h.nodeElement), y = v.measured.width !== m.width || v.measured.height !== m.height;
    if (!!(m.width && m.height && (y || !v.internals.handleBounds || h.force))) {
      const b = h.nodeElement.getBoundingClientRect(), k = Eo(v.extent) ? v.extent : i;
      let { positionAbsolute: S } = v.internals;
      v.parentId && v.extent === "parent" ? S = kh(S, m, e.get(v.parentId)) : k && (S = Jr(S, k, m));
      const _ = {
        ...v,
        measured: m,
        internals: {
          ...v.internals,
          positionAbsolute: S,
          handleBounds: {
            source: zu("source", h.nodeElement, b, d, v.id),
            target: zu("target", h.nodeElement, b, d, v.id)
          }
        }
      };
      e.set(v.id, _), v.parentId && mc(_, e, n, { nodeOrigin: o }), a = !0, y && (l.push({
        id: v.id,
        type: "dimensions",
        dimensions: m
      }), v.expandParent && v.parentId && f.push({
        id: v.id,
        parentId: v.parentId,
        rect: So(_, o)
      }));
    }
  }
  if (f.length > 0) {
    const h = zb(f, e, n, o);
    l.push(...h);
  }
  return { changes: l, updatedInternals: a };
}
async function Hb({ delta: t, panZoom: e, transform: n, translateExtent: r, width: o, height: i }) {
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
function Ku(t, e, n, r, o, i) {
  let s = o;
  const a = r.get(s) || /* @__PURE__ */ new Map();
  r.set(s, a.set(n, e)), s = `${o}-${t}`;
  const l = r.get(s) || /* @__PURE__ */ new Map();
  if (r.set(s, l.set(n, e)), i) {
    s = `${o}-${t}-${i}`;
    const c = r.get(s) || /* @__PURE__ */ new Map();
    r.set(s, c.set(n, e));
  }
}
function Rb(t, e, n) {
  t.clear(), e.clear();
  for (const r of n) {
    const { source: o, target: i, sourceHandle: s = null, targetHandle: a = null } = r, l = { edgeId: r.id, source: o, target: i, sourceHandle: s, targetHandle: a }, c = `${o}-${s}--${i}-${a}`, d = `${i}-${a}--${o}-${s}`;
    Ku("source", l, d, t, o, s), Ku("target", l, c, t, i, a), e.set(r.id, r);
  }
}
function Fb(t, e) {
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
function Lh(t, e) {
  if (!t.parentId)
    return !1;
  const n = e.get(t.parentId);
  return n ? n.selected ? !0 : Lh(n, e) : !1;
}
function Wu(t, e, n) {
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
function Bb(t, e, n, r) {
  const o = /* @__PURE__ */ new Map();
  for (const [i, s] of t)
    if ((s.selected || s.id === r) && (!s.parentId || !Lh(s, t)) && (s.draggable || e && typeof s.draggable > "u")) {
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
function Ta({ nodeId: t, dragItems: e, nodeLookup: n, dragging: r = !0 }) {
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
function $b({ dragItems: t, snapGrid: e, x: n, y: r }) {
  const o = t.values().next().value;
  if (!o)
    return null;
  const i = {
    x: n - o.distance.x,
    y: r - o.distance.y
  }, s = Ei(i, e);
  return {
    x: s.x - i.x,
    y: s.y - i.y
  };
}
function Kb({ onNodeMouseDown: t, getStoreItems: e, onDragStart: n, onDrag: r, onDragStop: o }) {
  let i = { x: null, y: null }, s = 0, a = /* @__PURE__ */ new Map(), l = !1, c = { x: 0, y: 0 }, d = null, f = !1, h = null, v = !1, m = !1, y = null;
  function w({ noDragClassName: k, handleSelector: S, domNode: _, isSelectable: x, nodeId: O, nodeClickDistance: z = 0 }) {
    h = ln(_);
    function V({ x: E, y: M }) {
      const { nodeLookup: C, nodeExtent: N, snapGrid: I, snapToGrid: L, nodeOrigin: Z, onNodeDrag: X, onSelectionDrag: D, onError: j, updateNodePositions: G } = e();
      i = { x: E, y: M };
      let R = !1;
      const ee = a.size > 1, K = ee && N ? al(Si(a)) : null, U = ee && L ? $b({
        dragItems: a,
        snapGrid: I,
        x: E,
        y: M
      }) : null;
      for (const [ne, H] of a) {
        if (!C.has(ne))
          continue;
        let te = { x: E - H.distance.x, y: M - H.distance.y };
        L && (te = U ? {
          x: Math.round(te.x + U.x),
          y: Math.round(te.y + U.y)
        } : Ei(te, I));
        let xe = null;
        if (ee && N && !H.extent && K) {
          const { positionAbsolute: oe } = H.internals, fe = oe.x - K.x + N[0][0], ye = oe.x + H.measured.width - K.x2 + N[1][0], ke = oe.y - K.y + N[0][1], he = oe.y + H.measured.height - K.y2 + N[1][1];
          xe = [
            [fe, ke],
            [ye, he]
          ];
        }
        const { position: ue, positionAbsolute: ae } = Ch({
          nodeId: ne,
          nextPosition: te,
          nodeLookup: C,
          nodeExtent: xe || N,
          nodeOrigin: Z,
          onError: j
        });
        R = R || H.position.x !== ue.x || H.position.y !== ue.y, H.position = ue, H.internals.positionAbsolute = ae;
      }
      if (m = m || R, !!R && (G(a, !0), y && (r || X || !O && D))) {
        const [ne, H] = Ta({
          nodeId: O,
          dragItems: a,
          nodeLookup: C
        });
        r?.(y, a, ne, H), X?.(y, ne, H), O || D?.(y, H);
      }
    }
    async function B() {
      if (!d)
        return;
      const { transform: E, panBy: M, autoPanSpeed: C, autoPanOnNodeDrag: N } = e();
      if (!N) {
        l = !1, cancelAnimationFrame(s);
        return;
      }
      const [I, L] = Sh(c, d, C);
      (I !== 0 || L !== 0) && (i.x = (i.x ?? 0) - I / E[2], i.y = (i.y ?? 0) - L / E[2], await M({ x: I, y: L }) && V(i)), s = requestAnimationFrame(B);
    }
    function $(E) {
      const { nodeLookup: M, multiSelectionActive: C, nodesDraggable: N, transform: I, snapGrid: L, snapToGrid: Z, selectNodesOnDrag: X, onNodeDragStart: D, onSelectionDragStart: j, unselectNodesAndEdges: G } = e();
      f = !0, (!X || !x) && !C && O && (M.get(O)?.selected || G()), x && X && O && t?.(O);
      const R = Aa(E.sourceEvent, { transform: I, snapGrid: L, snapToGrid: Z, containerBounds: d });
      if (i = R, a = Bb(M, N, R, O), a.size > 0 && (n || D || !O && j)) {
        const [ee, K] = Ta({
          nodeId: O,
          dragItems: a,
          nodeLookup: M
        });
        n?.(E.sourceEvent, a, ee, K), D?.(E.sourceEvent, ee, K), O || j?.(E.sourceEvent, K);
      }
    }
    const T = cy().clickDistance(z).on("start", (E) => {
      const { domNode: M, nodeDragThreshold: C, transform: N, snapGrid: I, snapToGrid: L } = e();
      d = M?.getBoundingClientRect() || null, v = !1, m = !1, y = E.sourceEvent, C === 0 && $(E), i = Aa(E.sourceEvent, { transform: N, snapGrid: I, snapToGrid: L, containerBounds: d }), c = vn(E.sourceEvent, d);
    }).on("drag", (E) => {
      const { autoPanOnNodeDrag: M, transform: C, snapGrid: N, snapToGrid: I, nodeDragThreshold: L, nodeLookup: Z } = e(), X = Aa(E.sourceEvent, { transform: C, snapGrid: N, snapToGrid: I, containerBounds: d });
      if (y = E.sourceEvent, (E.sourceEvent.type === "touchmove" && E.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      O && !Z.has(O)) && (v = !0), !v) {
        if (!l && M && f && (l = !0, B()), !f) {
          const D = vn(E.sourceEvent, d), j = D.x - c.x, G = D.y - c.y;
          Math.sqrt(j * j + G * G) > L && $(E);
        }
        (i.x !== X.xSnapped || i.y !== X.ySnapped) && a && f && (c = vn(E.sourceEvent, d), V(X));
      }
    }).on("end", (E) => {
      if (!(!f || v) && (l = !1, f = !1, cancelAnimationFrame(s), a.size > 0)) {
        const { nodeLookup: M, updateNodePositions: C, onNodeDragStop: N, onSelectionDragStop: I } = e();
        if (m && (C(a, !1), m = !1), o || N || !O && I) {
          const [L, Z] = Ta({
            nodeId: O,
            dragItems: a,
            nodeLookup: M,
            dragging: !1
          });
          o?.(E.sourceEvent, a, L, Z), N?.(E.sourceEvent, L, Z), O || I?.(E.sourceEvent, Z);
        }
      }
    }).filter((E) => {
      const M = E.target;
      return !E.button && (!k || !Wu(M, `.${k}`, _)) && (!S || Wu(M, S, _));
    });
    h.call(T);
  }
  function b() {
    h?.on(".drag", null);
  }
  return {
    update: w,
    destroy: b
  };
}
function Wb(t, e, n) {
  const r = [], o = {
    x: t.x - n,
    y: t.y - n,
    width: n * 2,
    height: n * 2
  };
  for (const i of e.values())
    ui(o, So(i)) > 0 && r.push(i);
  return r;
}
const Zb = 250;
function Yb(t, e, n, r) {
  let o = [], i = 1 / 0;
  const s = Wb(t, n, e + Zb);
  for (const a of s) {
    const l = [...a.internals.handleBounds?.source ?? [], ...a.internals.handleBounds?.target ?? []];
    for (const c of l) {
      if (r.nodeId === c.nodeId && r.type === c.type && r.id === c.id)
        continue;
      const { x: d, y: f } = di(a, c, c.position, !0), h = Math.sqrt(Math.pow(d - t.x, 2) + Math.pow(f - t.y, 2));
      h > e || (h < i ? (o = [{ ...c, x: d, y: f }], i = h) : h === i && o.push({ ...c, x: d, y: f }));
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
function Hh(t, e, n, r, o, i = !1) {
  const s = r.get(t);
  if (!s)
    return null;
  const a = o === "strict" ? s.internals.handleBounds?.[e] : [...s.internals.handleBounds?.source ?? [], ...s.internals.handleBounds?.target ?? []], l = (n ? a?.find((c) => c.id === n) : a?.[0]) ?? null;
  return l && i ? { ...l, ...di(s, l, l.position, !0) } : l;
}
function Rh(t, e) {
  return t || (e?.classList.contains("target") ? "target" : e?.classList.contains("source") ? "source" : null);
}
function qb(t, e) {
  let n = null;
  return e ? n = !0 : t && !e && (n = !1), n;
}
const Fh = () => !0;
function jb(t, { connectionMode: e, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: s, domNode: a, nodeLookup: l, lib: c, autoPanOnConnect: d, flowId: f, panBy: h, cancelConnection: v, onConnectStart: m, onConnect: y, onConnectEnd: w, isValidConnection: b = Fh, onReconnectEnd: k, updateConnection: S, getTransform: _, getFromHandle: x, autoPanSpeed: O, dragThreshold: z = 1, handleDomNode: V }) {
  const B = Oh(t.target);
  let $ = 0, T;
  const { x: E, y: M } = vn(t), C = Rh(i, V), N = a?.getBoundingClientRect();
  let I = !1;
  if (!N || !C)
    return;
  const L = Hh(o, C, r, l, e);
  if (!L)
    return;
  let Z = vn(t, N), X = !1, D = null, j = !1, G = null;
  function R() {
    if (!d || !N)
      return;
    const [ue, ae] = Sh(Z, N, O);
    h({ x: ue, y: ae }), $ = requestAnimationFrame(R);
  }
  const ee = {
    ...L,
    nodeId: o,
    type: C,
    position: L.position
  }, K = l.get(o);
  let ne = {
    inProgress: !0,
    isValid: null,
    from: di(K, ee, Pe.Left, !0),
    fromHandle: ee,
    fromPosition: ee.position,
    fromNode: K,
    to: Z,
    toHandle: null,
    toPosition: Mu[ee.position],
    toNode: null,
    pointer: Z
  };
  function H() {
    I = !0, S(ne), m?.(t, { nodeId: o, handleId: r, handleType: C });
  }
  z === 0 && H();
  function te(ue) {
    if (!I) {
      const { x: ye, y: ke } = vn(ue), he = ye - E, me = ke - M;
      if (!(he * he + me * me > z * z))
        return;
      H();
    }
    if (!x() || !ee) {
      xe(ue);
      return;
    }
    const ae = _();
    Z = vn(ue, N), T = Yb(Pi(Z, ae, !1, [1, 1]), n, l, ee), X || (R(), X = !0);
    const oe = Bh(ue, {
      handle: T,
      connectionMode: e,
      fromNodeId: o,
      fromHandleId: r,
      fromType: s ? "target" : "source",
      isValidConnection: b,
      doc: B,
      lib: c,
      flowId: f,
      nodeLookup: l
    });
    G = oe.handleDomNode, D = oe.connection, j = qb(!!T, oe.isValid);
    const fe = {
      // from stays the same
      ...ne,
      isValid: j,
      to: oe.toHandle && j ? Ns({ x: oe.toHandle.x, y: oe.toHandle.y }, ae) : Z,
      toHandle: oe.toHandle,
      toPosition: j && oe.toHandle ? oe.toHandle.position : Mu[ee.position],
      toNode: oe.toHandle ? l.get(oe.toHandle.nodeId) : null,
      pointer: Z
    };
    S(fe), ne = fe;
  }
  function xe(ue) {
    if (!("touches" in ue && ue.touches.length > 0)) {
      if (I) {
        (T || G) && D && j && y?.(D);
        const { inProgress: ae, ...oe } = ne, fe = {
          ...oe,
          toPosition: ne.toHandle ? ne.toPosition : null
        };
        w?.(ue, fe), i && k?.(ue, fe);
      }
      v(), cancelAnimationFrame($), X = !1, j = !1, D = null, G = null, B.removeEventListener("mousemove", te), B.removeEventListener("mouseup", xe), B.removeEventListener("touchmove", te), B.removeEventListener("touchend", xe);
    }
  }
  B.addEventListener("mousemove", te), B.addEventListener("mouseup", xe), B.addEventListener("touchmove", te), B.addEventListener("touchend", xe);
}
function Bh(t, { handle: e, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: s, lib: a, flowId: l, isValidConnection: c = Fh, nodeLookup: d }) {
  const f = i === "target", h = e ? s.querySelector(`.${a}-flow__handle[data-id="${l}-${e?.nodeId}-${e?.id}-${e?.type}"]`) : null, { x: v, y: m } = vn(t), y = s.elementFromPoint(v, m), w = y?.classList.contains(`${a}-flow__handle`) ? y : h, b = {
    handleDomNode: w,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (w) {
    const k = Rh(void 0, w), S = w.getAttribute("data-nodeid"), _ = w.getAttribute("data-handleid"), x = w.classList.contains("connectable"), O = w.classList.contains("connectableend");
    if (!S || !k)
      return b;
    const z = {
      source: f ? S : r,
      sourceHandle: f ? _ : o,
      target: f ? r : S,
      targetHandle: f ? o : _
    };
    b.connection = z;
    const B = x && O && (n === Co.Strict ? f && k === "source" || !f && k === "target" : S !== r || _ !== o);
    b.isValid = B && c(z), b.toHandle = Hh(S, k, _, d, n, !0);
  }
  return b;
}
const Zu = {
  onPointerDown: jb,
  isValid: Bh
};
function Xb({ domNode: t, panZoom: e, getTransform: n, getViewScale: r }) {
  const o = ln(t);
  function i({ translateExtent: a, width: l, height: c, zoomStep: d = 1, pannable: f = !0, zoomable: h = !0, inversePan: v = !1 }) {
    const m = (S) => {
      if (S.sourceEvent.type !== "wheel" || !e)
        return;
      const _ = n(), x = S.sourceEvent.ctrlKey && Fr() ? 10 : 1, O = -S.sourceEvent.deltaY * (S.sourceEvent.deltaMode === 1 ? 0.05 : S.sourceEvent.deltaMode ? 1 : 2e-3) * d, z = _[2] * Math.pow(2, O * x);
      e.scaleTo(z);
    };
    let y = [0, 0];
    const w = (S) => {
      (S.sourceEvent.type === "mousedown" || S.sourceEvent.type === "touchstart") && (y = [
        S.sourceEvent.clientX ?? S.sourceEvent.touches[0].clientX,
        S.sourceEvent.clientY ?? S.sourceEvent.touches[0].clientY
      ]);
    }, b = (S) => {
      const _ = n();
      if (S.sourceEvent.type !== "mousemove" && S.sourceEvent.type !== "touchmove" || !e)
        return;
      const x = [
        S.sourceEvent.clientX ?? S.sourceEvent.touches[0].clientX,
        S.sourceEvent.clientY ?? S.sourceEvent.touches[0].clientY
      ], O = [x[0] - y[0], x[1] - y[1]];
      y = x;
      const z = r() * Math.max(_[2], Math.log(_[2])) * (v ? -1 : 1), V = {
        x: _[0] - O[0] * z,
        y: _[1] - O[1] * z
      }, B = [
        [0, 0],
        [l, c]
      ];
      e.setViewportConstrained({
        x: V.x,
        y: V.y,
        zoom: _[2]
      }, B, a);
    }, k = bh().on("start", w).on("zoom", f ? b : null).on("zoom.wheel", h ? m : null);
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
const ga = (t) => ({
  x: t.x,
  y: t.y,
  zoom: t.k
}), Ma = ({ x: t, y: e, zoom: n }) => da.translate(t, e).scale(n), ho = (t, e) => t.target.closest(`.${e}`), $h = (t, e) => e === 2 && Array.isArray(t) && t.includes(2), Ub = (t) => ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2, Da = (t, e = 0, n = Ub, r = () => {
}) => {
  const o = typeof e == "number" && e > 0;
  return o || r(), o ? t.transition().duration(e).ease(n).on("end", r) : t;
}, Kh = (t) => {
  const e = t.ctrlKey && Fr() ? 10 : 1;
  return -t.deltaY * (t.deltaMode === 1 ? 0.05 : t.deltaMode ? 1 : 2e-3) * e;
};
function Gb({ zoomPanValues: t, noWheelClassName: e, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: s, onPanZoomStart: a, onPanZoom: l, onPanZoomEnd: c }) {
  return (d) => {
    if (ho(d, e))
      return d.ctrlKey && d.preventDefault(), !1;
    d.preventDefault(), d.stopImmediatePropagation();
    const f = n.property("__zoom").k || 1;
    if (d.ctrlKey && s) {
      const w = hn(d), b = Kh(d), k = f * Math.pow(2, b);
      r.scaleTo(n, k, w, d);
      return;
    }
    const h = d.deltaMode === 1 ? 20 : 1;
    let v = o === Wr.Vertical ? 0 : d.deltaX * h, m = o === Wr.Horizontal ? 0 : d.deltaY * h;
    !Fr() && d.shiftKey && o !== Wr.Vertical && (v = d.deltaY * h, m = 0), r.translateBy(
      n,
      -(v / f) * i,
      -(m / f) * i,
      // @ts-ignore
      { internal: !0 }
    );
    const y = ga(n.property("__zoom"));
    clearTimeout(t.panScrollTimeout), t.isPanScrolling ? (l?.(d, y), t.panScrollTimeout = setTimeout(() => {
      c?.(d, y), t.isPanScrolling = !1;
    }, 150)) : (t.isPanScrolling = !0, a?.(d, y));
  };
}
function Jb({ noWheelClassName: t, preventScrolling: e, d3ZoomHandler: n }) {
  return function(r, o) {
    const i = r.type === "wheel", s = !e && i && !r.ctrlKey, a = ho(r, t);
    if (r.ctrlKey && i && a && r.preventDefault(), s || a)
      return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function Qb({ zoomPanValues: t, onDraggingChange: e, onPanZoomStart: n }) {
  return (r) => {
    if (r.sourceEvent?.internal)
      return;
    const o = ga(r.transform);
    t.mouseButton = r.sourceEvent?.button || 0, t.isZoomingOrPanning = !0, t.prevViewport = o, r.sourceEvent?.type === "mousedown" && e(!0), n && n?.(r.sourceEvent, o);
  };
}
function e2({ zoomPanValues: t, panOnDrag: e, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (i) => {
    t.usedRightMouseButton = !!(n && $h(e, t.mouseButton ?? 0)), i.sourceEvent?.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !i.sourceEvent?.internal && o?.(i.sourceEvent, ga(i.transform));
  };
}
function t2({ zoomPanValues: t, panOnDrag: e, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (s) => {
    if (!s.sourceEvent?.internal && (t.isZoomingOrPanning = !1, i && $h(e, t.mouseButton ?? 0) && !t.usedRightMouseButton && s.sourceEvent && i(s.sourceEvent), t.usedRightMouseButton = !1, r(!1), o)) {
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
function n2({ zoomActivationKeyPressed: t, zoomOnScroll: e, zoomOnPinch: n, panOnDrag: r, panOnScroll: o, zoomOnDoubleClick: i, userSelectionActive: s, noWheelClassName: a, noPanClassName: l, lib: c, connectionInProgress: d }) {
  return (f) => {
    const h = t || e, v = n && f.ctrlKey, m = f.type === "wheel";
    if (f.button === 1 && f.type === "mousedown" && (ho(f, `${c}-flow__node`) || ho(f, `${c}-flow__edge`)))
      return !0;
    if (!r && !h && !o && !i && !n || s || d && !m || ho(f, a) && m || ho(f, l) && (!m || o && m && !t) || !n && f.ctrlKey && m)
      return !1;
    if (!n && f.type === "touchstart" && f.touches?.length > 1)
      return f.preventDefault(), !1;
    if (!h && !o && !v && m || !r && (f.type === "mousedown" || f.type === "touchstart") || Array.isArray(r) && !r.includes(f.button) && f.type === "mousedown")
      return !1;
    const y = Array.isArray(r) && r.includes(f.button) || !f.button || f.button <= 1;
    return (!f.ctrlKey || m) && y;
  };
}
function r2({ domNode: t, minZoom: e, maxZoom: n, translateExtent: r, viewport: o, onPanZoom: i, onPanZoomStart: s, onPanZoomEnd: a, onDraggingChange: l }) {
  const c = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: {},
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, d = t.getBoundingClientRect(), f = bh().scaleExtent([e, n]).translateExtent(r), h = ln(t).call(f);
  k({
    x: o.x,
    y: o.y,
    zoom: ko(o.zoom, e, n)
  }, [
    [0, 0],
    [d.width, d.height]
  ], r);
  const v = h.on("wheel.zoom"), m = h.on("dblclick.zoom");
  f.wheelDelta(Kh);
  function y(T, E) {
    return h ? new Promise((M) => {
      f?.interpolate(E?.interpolate === "linear" ? Qo : rs).transform(Da(h, E?.duration, E?.ease, () => M(!0)), T);
    }) : Promise.resolve(!1);
  }
  function w({ noWheelClassName: T, noPanClassName: E, onPaneContextMenu: M, userSelectionActive: C, panOnScroll: N, panOnDrag: I, panOnScrollMode: L, panOnScrollSpeed: Z, preventScrolling: X, zoomOnPinch: D, zoomOnScroll: j, zoomOnDoubleClick: G, zoomActivationKeyPressed: R, lib: ee, onTransformChange: K, connectionInProgress: U, paneClickDistance: ne, selectionOnDrag: H }) {
    C && !c.isZoomingOrPanning && b();
    const te = N && !R && !C;
    f.clickDistance(H ? 1 / 0 : !Un(ne) || ne < 0 ? 0 : ne);
    const xe = te ? Gb({
      zoomPanValues: c,
      noWheelClassName: T,
      d3Selection: h,
      d3Zoom: f,
      panOnScrollMode: L,
      panOnScrollSpeed: Z,
      zoomOnPinch: D,
      onPanZoomStart: s,
      onPanZoom: i,
      onPanZoomEnd: a
    }) : Jb({
      noWheelClassName: T,
      preventScrolling: X,
      d3ZoomHandler: v
    });
    if (h.on("wheel.zoom", xe, { passive: !1 }), !C) {
      const ae = Qb({
        zoomPanValues: c,
        onDraggingChange: l,
        onPanZoomStart: s
      });
      f.on("start", ae);
      const oe = e2({
        zoomPanValues: c,
        panOnDrag: I,
        onPaneContextMenu: !!M,
        onPanZoom: i,
        onTransformChange: K
      });
      f.on("zoom", oe);
      const fe = t2({
        zoomPanValues: c,
        panOnDrag: I,
        panOnScroll: N,
        onPaneContextMenu: M,
        onPanZoomEnd: a,
        onDraggingChange: l
      });
      f.on("end", fe);
    }
    const ue = n2({
      zoomActivationKeyPressed: R,
      panOnDrag: I,
      zoomOnScroll: j,
      panOnScroll: N,
      zoomOnDoubleClick: G,
      zoomOnPinch: D,
      userSelectionActive: C,
      noPanClassName: E,
      noWheelClassName: T,
      lib: ee,
      connectionInProgress: U
    });
    f.filter(ue), G ? h.on("dblclick.zoom", m) : h.on("dblclick.zoom", null);
  }
  function b() {
    f.on("zoom", null);
  }
  async function k(T, E, M) {
    const C = Ma(T), N = f?.constrain()(C, E, M);
    return N && await y(N), new Promise((I) => I(N));
  }
  async function S(T, E) {
    const M = Ma(T);
    return await y(M, E), new Promise((C) => C(M));
  }
  function _(T) {
    if (h) {
      const E = Ma(T), M = h.property("__zoom");
      (M.k !== T.zoom || M.x !== T.x || M.y !== T.y) && f?.transform(h, E, null, { sync: !0 });
    }
  }
  function x() {
    const T = h ? wh(h.node()) : { x: 0, y: 0, k: 1 };
    return { x: T.x, y: T.y, zoom: T.k };
  }
  function O(T, E) {
    return h ? new Promise((M) => {
      f?.interpolate(E?.interpolate === "linear" ? Qo : rs).scaleTo(Da(h, E?.duration, E?.ease, () => M(!0)), T);
    }) : Promise.resolve(!1);
  }
  function z(T, E) {
    return h ? new Promise((M) => {
      f?.interpolate(E?.interpolate === "linear" ? Qo : rs).scaleBy(Da(h, E?.duration, E?.ease, () => M(!0)), T);
    }) : Promise.resolve(!1);
  }
  function V(T) {
    f?.scaleExtent(T);
  }
  function B(T) {
    f?.translateExtent(T);
  }
  function $(T) {
    const E = !Un(T) || T < 0 ? 0 : T;
    f?.clickDistance(E);
  }
  return {
    update: w,
    destroy: b,
    setViewport: S,
    setViewportConstrained: k,
    getViewport: x,
    scaleTo: O,
    scaleBy: z,
    setScaleExtent: V,
    setTranslateExtent: B,
    syncViewport: _,
    setClickDistance: $
  };
}
var Yu;
(function(t) {
  t.Line = "line", t.Handle = "handle";
})(Yu || (Yu = {}));
var o2 = /* @__PURE__ */ re("<div><!></div>");
function kr(t, e) {
  le(e, !0);
  let n = p(e, "id", 7, null), r = p(e, "type", 7, "source"), o = p(e, "position", 23, () => Pe.Top), i = p(e, "style", 7), s = p(e, "class", 7), a = p(e, "isConnectable", 7), l = p(e, "isConnectableStart", 7, !0), c = p(e, "isConnectableEnd", 7, !0), d = p(e, "isValidConnection", 7), f = p(e, "onconnect", 7), h = p(e, "ondisconnect", 7), v = p(e, "children", 7), m = /* @__PURE__ */ ze(e, [
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
  const y = bn("svelteflow__node_id"), w = bn("svelteflow__node_connectable");
  let b = /* @__PURE__ */ P(() => r() === "target"), k = /* @__PURE__ */ P(() => a() !== void 0 ? a() : w.value), S = Sn(), _ = /* @__PURE__ */ P(() => S.ariaLabelConfig), x = null;
  Zt(() => {
    if (f() || h()) {
      S.edges;
      let D = S.connectionLookup.get(`${y}-${r()}${n() ? `-${n()}` : ""}`);
      if (x && !rb(D, x)) {
        const j = D ?? /* @__PURE__ */ new Map();
        Du(x, j, h()), Du(j, x, f());
      }
      x = new Map(D);
    }
  });
  let O = /* @__PURE__ */ P(() => {
    if (!S.connection.inProgress)
      return [!1, !1, !1, !1, null];
    const { fromHandle: D, toHandle: j, isValid: G } = S.connection, R = D && D.nodeId === y && D.type === r() && D.id === n(), ee = j && j.nodeId === y && j.type === r() && j.id === n(), K = S.connectionMode === Co.Strict ? D?.type !== r() : y !== D?.nodeId || n() !== D?.id;
    return [
      !0,
      R,
      ee,
      K,
      ee && G
    ];
  }), z = /* @__PURE__ */ P(() => Oo(u(O), 5)), V = /* @__PURE__ */ P(() => u(z)[0]), B = /* @__PURE__ */ P(() => u(z)[1]), $ = /* @__PURE__ */ P(() => u(z)[2]), T = /* @__PURE__ */ P(() => u(z)[3]), E = /* @__PURE__ */ P(() => u(z)[4]);
  function M(D) {
    const j = S.onbeforeconnect ? S.onbeforeconnect(D) : D;
    j && (S.addEdge(j), S.onconnect?.(D));
  }
  function C(D) {
    const j = Th(D);
    D.currentTarget && (j && D.button === 0 || !j) && Zu.onPointerDown(D, {
      handleId: n(),
      nodeId: y,
      isTarget: u(b),
      connectionRadius: S.connectionRadius,
      domNode: S.domNode,
      nodeLookup: S.nodeLookup,
      connectionMode: S.connectionMode,
      lib: "svelte",
      autoPanOnConnect: S.autoPanOnConnect,
      autoPanSpeed: S.autoPanSpeed,
      flowId: S.flowId,
      isValidConnection: d() ?? S.isValidConnection,
      updateConnection: S.updateConnection,
      cancelConnection: S.cancelConnection,
      panBy: S.panBy,
      onConnect: M,
      onConnectStart: (G, R) => {
        S.onconnectstart?.(G, {
          nodeId: R.nodeId,
          handleId: R.handleId,
          handleType: R.handleType
        });
      },
      onConnectEnd: (G, R) => {
        S.onconnectend?.(G, R);
      },
      getTransform: () => [S.viewport.x, S.viewport.y, S.viewport.zoom],
      getFromHandle: () => S.connection.fromHandle,
      dragThreshold: S.connectionDragThreshold,
      handleDomNode: D.currentTarget
    });
  }
  function N(D) {
    if (!y || !S.clickConnectStartHandle && !l())
      return;
    if (!S.clickConnectStartHandle) {
      S.onclickconnectstart?.(D, { nodeId: y, handleId: n(), handleType: r() }), S.clickConnectStartHandle = { nodeId: y, type: r(), id: n() };
      return;
    }
    const j = Oh(D.target), G = d() ?? S.isValidConnection, { connectionMode: R, clickConnectStartHandle: ee, flowId: K, nodeLookup: U } = S, { connection: ne, isValid: H } = Zu.isValid(D, {
      handle: { nodeId: y, id: n(), type: r() },
      connectionMode: R,
      fromNodeId: ee.nodeId,
      fromHandleId: ee.id ?? null,
      fromType: ee.type,
      isValidConnection: G,
      flowId: K,
      doc: j,
      lib: "svelte",
      nodeLookup: U
    });
    H && ne && M(ne);
    const te = structuredClone(Yl(S.connection));
    delete te.inProgress, te.toPosition = te.toHandle ? te.toHandle.position : null, S.onclickconnectend?.(D, te), S.clickConnectStartHandle = null;
  }
  var I = {
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
    set position(D = Pe.Top) {
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
      return c();
    },
    set isConnectableEnd(D = !0) {
      c(D), g();
    },
    get isValidConnection() {
      return d();
    },
    set isValidConnection(D) {
      d(D), g();
    },
    get onconnect() {
      return f();
    },
    set onconnect(D) {
      f(D), g();
    },
    get ondisconnect() {
      return h();
    },
    set ondisconnect(D) {
      h(D), g();
    },
    get children() {
      return v();
    },
    set children(D) {
      v(D), g();
    }
  }, L = o2(), Z = () => {
  };
  Je(L, () => ({
    "data-handleid": n(),
    "data-nodeid": y,
    "data-handlepos": o(),
    "data-id": `${S.flowId ?? ""}-${y ?? ""}-${n() ?? "null" ?? ""}-${r() ?? ""}`,
    class: [
      "svelte-flow__handle",
      `svelte-flow__handle-${o()}`,
      S.noDragClass,
      S.noPanClass,
      o(),
      s()
    ],
    onmousedown: C,
    ontouchstart: C,
    onclick: S.clickConnect ? N : void 0,
    onkeypress: Z,
    style: i(),
    role: "button",
    "aria-label": u(_)["handle.ariaLabel"],
    tabindex: "-1",
    ...m,
    [mr]: {
      valid: u(E),
      connectingto: u($),
      connectingfrom: u(B),
      source: !u(b),
      target: u(b),
      connectablestart: l(),
      connectableend: c(),
      connectable: u(k),
      connectionindicator: u(k) && (!u(V) || u(T)) && (u(V) || S.clickConnectStartHandle ? c() : l())
    }
  }));
  var X = q(L);
  return Ae(X, () => v() ?? Be), Y(L), A(t, L), ce(I);
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
var i2 = /* @__PURE__ */ re("<!> <!>", 1);
function yc(t, e) {
  le(e, !0);
  let n = p(e, "data", 7), r = p(e, "targetPosition", 23, () => Pe.Top), o = p(e, "sourcePosition", 23, () => Pe.Bottom);
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
    set targetPosition(d = Pe.Top) {
      r(d), g();
    },
    get sourcePosition() {
      return o();
    },
    set sourcePosition(d = Pe.Bottom) {
      o(d), g();
    }
  }, s = i2(), a = Q(s);
  kr(a, {
    type: "target",
    get position() {
      return r();
    }
  });
  var l = F(a), c = F(l);
  return kr(c, {
    type: "source",
    get position() {
      return o();
    }
  }), Te(() => rt(l, ` ${n()?.label ?? ""} `)), A(t, s), ce(i);
}
ie(yc, { data: {}, targetPosition: {}, sourcePosition: {} }, [], [], !0);
var s2 = /* @__PURE__ */ re(" <!>", 1);
function Wh(t, e) {
  le(e, !0);
  let n = p(e, "data", 23, () => ({ label: "Node" })), r = p(e, "sourcePosition", 23, () => Pe.Bottom);
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
    set sourcePosition(l = Pe.Bottom) {
      r(l), g();
    }
  };
  Ee();
  var i = s2(), s = Q(i), a = F(s);
  return kr(a, {
    type: "source",
    get position() {
      return r();
    }
  }), Te(() => rt(s, `${n()?.label ?? ""} `)), A(t, i), ce(o);
}
ie(Wh, { data: {}, sourcePosition: {} }, [], [], !0);
var a2 = /* @__PURE__ */ re(" <!>", 1);
function Zh(t, e) {
  le(e, !0);
  let n = p(e, "data", 23, () => ({ label: "Node" })), r = p(e, "targetPosition", 23, () => Pe.Top);
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
    set targetPosition(l = Pe.Top) {
      r(l), g();
    }
  };
  Ee();
  var i = a2(), s = Q(i), a = F(s);
  return kr(a, {
    type: "target",
    get position() {
      return r();
    }
  }), Te(() => rt(s, `${n()?.label ?? ""} `)), A(t, i), ce(o);
}
ie(Zh, { data: {}, targetPosition: {} }, [], [], !0);
function Yh(t, e) {
}
ie(Yh, {}, [], [], !0);
function Ia(t, e, n) {
  if (!n || !e)
    return;
  const r = n === "root" ? e : e.querySelector(`.svelte-flow__${n}`);
  r && r.appendChild(t);
}
function qh(t, e) {
  const n = /* @__PURE__ */ P(Sn), r = /* @__PURE__ */ P(() => u(n).domNode);
  let o;
  return u(r) ? Ia(t, u(r), e) : o = no(() => {
    He(() => {
      Ia(t, u(r), e), o?.();
    });
  }), {
    async update(i) {
      Ia(t, u(r), i);
    },
    destroy() {
      t.parentNode && t.parentNode.removeChild(t), o?.();
    }
  };
}
function jh() {
  let t = /* @__PURE__ */ ve(typeof window > "u");
  if (u(t)) {
    const e = no(() => {
      He(() => {
        W(t, !1), e?.();
      });
    });
  }
  return {
    get value() {
      return u(t);
    }
  };
}
const qu = (t) => ib(t), l2 = (t) => _h(t);
function Hn(t) {
  return t === void 0 ? void 0 : `${t}px`;
}
const Os = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
};
var c2 = /* @__PURE__ */ re("<div><!></div>");
const u2 = {
  hash: "svelte-herprs",
  code: ".transparent.svelte-herprs {background:transparent;}"
};
function Xh(t, e) {
  le(e, !0), Qe(t, u2);
  let n = p(e, "x", 7, 0), r = p(e, "y", 7, 0), o = p(e, "width", 7), i = p(e, "height", 7), s = p(e, "selectEdgeOnClick", 7, !1), a = p(e, "transparent", 7, !1), l = p(e, "class", 7), c = p(e, "children", 7), d = /* @__PURE__ */ ze(e, [
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
  const f = Sn(), h = bn("svelteflow__edge_id");
  if (!h)
    throw new Error("EdgeLabel must be used within an edge");
  let v = /* @__PURE__ */ P(() => f.visible.edges.get(h)?.zIndex);
  var m = {
    get x() {
      return n();
    },
    set x(k = 0) {
      n(k), g();
    },
    get y() {
      return r();
    },
    set y(k = 0) {
      r(k), g();
    },
    get width() {
      return o();
    },
    set width(k) {
      o(k), g();
    },
    get height() {
      return i();
    },
    set height(k) {
      i(k), g();
    },
    get selectEdgeOnClick() {
      return s();
    },
    set selectEdgeOnClick(k = !1) {
      s(k), g();
    },
    get transparent() {
      return a();
    },
    set transparent(k = !1) {
      a(k), g();
    },
    get class() {
      return l();
    },
    set class(k) {
      l(k), g();
    },
    get children() {
      return c();
    },
    set children(k) {
      c(k), g();
    }
  }, y = c2(), w = () => {
    s() && f.handleEdgeSelection(h);
  };
  Je(
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
      [An]: k
    }),
    [
      () => ({
        display: jh().value ? "none" : void 0,
        cursor: s() ? "pointer" : void 0,
        transform: `translate(-50%, -50%) translate(${n() ?? ""}px,${r() ?? ""}px)`,
        "pointer-events": "all",
        width: Hn(o()),
        height: Hn(i()),
        "z-index": u(v)
      })
    ],
    void 0,
    void 0,
    "svelte-herprs"
  );
  var b = q(y);
  return Ae(b, () => c() ?? Be), Y(y), It(y, (k, S) => qh?.(k, S), () => "edge-labels"), A(t, y), ce(m);
}
ie(
  Xh,
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
var d2 = /* @__PURE__ */ _e("<path></path>"), f2 = /* @__PURE__ */ _e('<path fill="none"></path><!><!>', 1);
function Ni(t, e) {
  le(e, !0);
  let n = p(e, "id", 7), r = p(e, "path", 7), o = p(e, "label", 7), i = p(e, "labelX", 7), s = p(e, "labelY", 7), a = p(e, "labelStyle", 7), l = p(e, "markerStart", 7), c = p(e, "markerEnd", 7), d = p(e, "style", 7), f = p(e, "interactionWidth", 7, 20), h = p(e, "class", 7), v = /* @__PURE__ */ ze(e, [
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
      n(x), g();
    },
    get path() {
      return r();
    },
    set path(x) {
      r(x), g();
    },
    get label() {
      return o();
    },
    set label(x) {
      o(x), g();
    },
    get labelX() {
      return i();
    },
    set labelX(x) {
      i(x), g();
    },
    get labelY() {
      return s();
    },
    set labelY(x) {
      s(x), g();
    },
    get labelStyle() {
      return a();
    },
    set labelStyle(x) {
      a(x), g();
    },
    get markerStart() {
      return l();
    },
    set markerStart(x) {
      l(x), g();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(x) {
      c(x), g();
    },
    get style() {
      return d();
    },
    set style(x) {
      d(x), g();
    },
    get interactionWidth() {
      return f();
    },
    set interactionWidth(x = 20) {
      f(x), g();
    },
    get class() {
      return h();
    },
    set class(x) {
      h(x), g();
    }
  }, y = f2(), w = Q(y), b = F(w);
  {
    var k = (x) => {
      var O = d2();
      Je(O, () => ({
        d: r(),
        "stroke-opacity": 0,
        "stroke-width": f(),
        fill: "none",
        class: "svelte-flow__edge-interaction",
        ...v
      })), A(x, O);
    };
    se(b, (x) => {
      f() > 0 && x(k);
    });
  }
  var S = F(b);
  {
    var _ = (x) => {
      Xh(x, {
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
        children: (O, z) => {
          Ee();
          var V = De();
          Te(() => rt(V, o())), A(O, V);
        },
        $$slots: { default: !0 }
      });
    };
    se(S, (x) => {
      o() && x(_);
    });
  }
  return Te(() => {
    Ne(w, "id", n()), Ne(w, "d", r()), Gt(w, 0, fr(["svelte-flow__edge-path", h()])), Ne(w, "marker-start", l()), Ne(w, "marker-end", c()), At(w, d());
  }), A(t, y), ce(m);
}
ie(
  Ni,
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
function wc(t, e) {
  le(e, !0);
  let n = p(e, "id", 7), r = p(e, "interactionWidth", 7), o = p(e, "label", 7), i = p(e, "labelStyle", 7), s = p(e, "markerEnd", 7), a = p(e, "markerStart", 7), l = p(e, "pathOptions", 7), c = p(e, "sourcePosition", 7), d = p(e, "sourceX", 7), f = p(e, "sourceY", 7), h = p(e, "style", 7), v = p(e, "targetPosition", 7), m = p(e, "targetX", 7), y = p(e, "targetY", 7), w = /* @__PURE__ */ P(() => Mh({
    sourceX: d(),
    sourceY: f(),
    targetX: m(),
    targetY: y(),
    sourcePosition: c(),
    targetPosition: v(),
    curvature: l()?.curvature
  })), b = /* @__PURE__ */ P(() => Oo(u(w), 3)), k = /* @__PURE__ */ P(() => u(b)[0]), S = /* @__PURE__ */ P(() => u(b)[1]), _ = /* @__PURE__ */ P(() => u(b)[2]);
  var x = {
    get id() {
      return n();
    },
    set id(O) {
      n(O), g();
    },
    get interactionWidth() {
      return r();
    },
    set interactionWidth(O) {
      r(O), g();
    },
    get label() {
      return o();
    },
    set label(O) {
      o(O), g();
    },
    get labelStyle() {
      return i();
    },
    set labelStyle(O) {
      i(O), g();
    },
    get markerEnd() {
      return s();
    },
    set markerEnd(O) {
      s(O), g();
    },
    get markerStart() {
      return a();
    },
    set markerStart(O) {
      a(O), g();
    },
    get pathOptions() {
      return l();
    },
    set pathOptions(O) {
      l(O), g();
    },
    get sourcePosition() {
      return c();
    },
    set sourcePosition(O) {
      c(O), g();
    },
    get sourceX() {
      return d();
    },
    set sourceX(O) {
      d(O), g();
    },
    get sourceY() {
      return f();
    },
    set sourceY(O) {
      f(O), g();
    },
    get style() {
      return h();
    },
    set style(O) {
      h(O), g();
    },
    get targetPosition() {
      return v();
    },
    set targetPosition(O) {
      v(O), g();
    },
    get targetX() {
      return m();
    },
    set targetX(O) {
      m(O), g();
    },
    get targetY() {
      return y();
    },
    set targetY(O) {
      y(O), g();
    }
  };
  return Ni(t, {
    get id() {
      return n();
    },
    get path() {
      return u(k);
    },
    get labelX() {
      return u(S);
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
  }), ce(x);
}
ie(
  wc,
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
function Uh(t, e) {
  le(e, !0);
  let n = p(e, "interactionWidth", 7), r = p(e, "label", 7), o = p(e, "labelStyle", 7), i = p(e, "style", 7), s = p(e, "markerEnd", 7), a = p(e, "markerStart", 7), l = p(e, "sourcePosition", 7), c = p(e, "sourceX", 7), d = p(e, "sourceY", 7), f = p(e, "targetPosition", 7), h = p(e, "targetX", 7), v = p(e, "targetY", 7), m = /* @__PURE__ */ P(() => gc({
    sourceX: c(),
    sourceY: d(),
    targetX: h(),
    targetY: v(),
    sourcePosition: l(),
    targetPosition: f()
  })), y = /* @__PURE__ */ P(() => Oo(u(m), 3)), w = /* @__PURE__ */ P(() => u(y)[0]), b = /* @__PURE__ */ P(() => u(y)[1]), k = /* @__PURE__ */ P(() => u(y)[2]);
  var S = {
    get interactionWidth() {
      return n();
    },
    set interactionWidth(_) {
      n(_), g();
    },
    get label() {
      return r();
    },
    set label(_) {
      r(_), g();
    },
    get labelStyle() {
      return o();
    },
    set labelStyle(_) {
      o(_), g();
    },
    get style() {
      return i();
    },
    set style(_) {
      i(_), g();
    },
    get markerEnd() {
      return s();
    },
    set markerEnd(_) {
      s(_), g();
    },
    get markerStart() {
      return a();
    },
    set markerStart(_) {
      a(_), g();
    },
    get sourcePosition() {
      return l();
    },
    set sourcePosition(_) {
      l(_), g();
    },
    get sourceX() {
      return c();
    },
    set sourceX(_) {
      c(_), g();
    },
    get sourceY() {
      return d();
    },
    set sourceY(_) {
      d(_), g();
    },
    get targetPosition() {
      return f();
    },
    set targetPosition(_) {
      f(_), g();
    },
    get targetX() {
      return h();
    },
    set targetX(_) {
      h(_), g();
    },
    get targetY() {
      return v();
    },
    set targetY(_) {
      v(_), g();
    }
  };
  return Ni(t, {
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
  }), ce(S);
}
ie(
  Uh,
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
function Gh(t, e) {
  le(e, !0);
  let n = p(e, "sourceX", 7), r = p(e, "sourceY", 7), o = p(e, "targetX", 7), i = p(e, "targetY", 7), s = p(e, "label", 7), a = p(e, "labelStyle", 7), l = p(e, "markerStart", 7), c = p(e, "markerEnd", 7), d = p(e, "interactionWidth", 7), f = p(e, "style", 7), h = /* @__PURE__ */ P(() => Ih({
    sourceX: n(),
    sourceY: r(),
    targetX: o(),
    targetY: i()
  })), v = /* @__PURE__ */ P(() => Oo(u(h), 3)), m = /* @__PURE__ */ P(() => u(v)[0]), y = /* @__PURE__ */ P(() => u(v)[1]), w = /* @__PURE__ */ P(() => u(v)[2]);
  var b = {
    get sourceX() {
      return n();
    },
    set sourceX(k) {
      n(k), g();
    },
    get sourceY() {
      return r();
    },
    set sourceY(k) {
      r(k), g();
    },
    get targetX() {
      return o();
    },
    set targetX(k) {
      o(k), g();
    },
    get targetY() {
      return i();
    },
    set targetY(k) {
      i(k), g();
    },
    get label() {
      return s();
    },
    set label(k) {
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
      return c();
    },
    set markerEnd(k) {
      c(k), g();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(k) {
      d(k), g();
    },
    get style() {
      return f();
    },
    set style(k) {
      f(k), g();
    }
  };
  return Ni(t, {
    get path() {
      return u(m);
    },
    get labelX() {
      return u(y);
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
  }), ce(b);
}
ie(
  Gh,
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
function Jh(t, e) {
  le(e, !0);
  let n = p(e, "sourceX", 7), r = p(e, "sourceY", 7), o = p(e, "sourcePosition", 7), i = p(e, "targetX", 7), s = p(e, "targetY", 7), a = p(e, "targetPosition", 7), l = p(e, "label", 7), c = p(e, "labelStyle", 7), d = p(e, "markerStart", 7), f = p(e, "markerEnd", 7), h = p(e, "interactionWidth", 7), v = p(e, "style", 7), m = /* @__PURE__ */ P(() => gc({
    sourceX: n(),
    sourceY: r(),
    targetX: i(),
    targetY: s(),
    sourcePosition: o(),
    targetPosition: a(),
    borderRadius: 0
  })), y = /* @__PURE__ */ P(() => Oo(u(m), 3)), w = /* @__PURE__ */ P(() => u(y)[0]), b = /* @__PURE__ */ P(() => u(y)[1]), k = /* @__PURE__ */ P(() => u(y)[2]);
  var S = {
    get sourceX() {
      return n();
    },
    set sourceX(_) {
      n(_), g();
    },
    get sourceY() {
      return r();
    },
    set sourceY(_) {
      r(_), g();
    },
    get sourcePosition() {
      return o();
    },
    set sourcePosition(_) {
      o(_), g();
    },
    get targetX() {
      return i();
    },
    set targetX(_) {
      i(_), g();
    },
    get targetY() {
      return s();
    },
    set targetY(_) {
      s(_), g();
    },
    get targetPosition() {
      return a();
    },
    set targetPosition(_) {
      a(_), g();
    },
    get label() {
      return l();
    },
    set label(_) {
      l(_), g();
    },
    get labelStyle() {
      return c();
    },
    set labelStyle(_) {
      c(_), g();
    },
    get markerStart() {
      return d();
    },
    set markerStart(_) {
      d(_), g();
    },
    get markerEnd() {
      return f();
    },
    set markerEnd(_) {
      f(_), g();
    },
    get interactionWidth() {
      return h();
    },
    set interactionWidth(_) {
      h(_), g();
    },
    get style() {
      return v();
    },
    set style(_) {
      v(_), g();
    }
  };
  return Ni(t, {
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
      return v();
    }
  }), ce(S);
}
ie(
  Jh,
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
class h2 extends Map {
  /** @type {Map<K, Source<number>>} */
  #e = /* @__PURE__ */ new Map();
  #t = /* @__PURE__ */ ve(0);
  #n = /* @__PURE__ */ ve(0);
  #r = nr || -1;
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
    return nr === this.#r ? /* @__PURE__ */ ve(e) : or(e);
  }
  /** @param {K} key */
  has(e) {
    var n = this.#e, r = n.get(e);
    if (r === void 0) {
      var o = super.get(e);
      if (o !== void 0)
        r = this.#o(0), n.set(e, r);
      else
        return u(this.#t), !1;
    }
    return u(r), !0;
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
        u(this.#t);
        return;
      }
    }
    return u(r), super.get(e);
  }
  /**
   * @param {K} key
   * @param {V} value
   * */
  set(e, n) {
    var r = this.#e, o = r.get(e), i = super.get(e), s = super.set(e, n), a = this.#t;
    if (o === void 0)
      o = this.#o(0), r.set(e, o), W(this.#n, super.size), On(a);
    else if (i !== n) {
      On(o);
      var l = a.reactions === null ? null : new Set(a.reactions), c = l === null || !o.reactions?.every(
        (d) => (
          /** @type {NonNullable<typeof v_reactions>} */
          l.has(d)
        )
      );
      c && On(a);
    }
    return s;
  }
  /** @param {K} key */
  delete(e) {
    var n = this.#e, r = n.get(e), o = super.delete(e);
    return r !== void 0 && (n.delete(e), W(this.#n, super.size), W(r, -1), On(this.#t)), o;
  }
  clear() {
    if (super.size !== 0) {
      super.clear();
      var e = this.#e;
      W(this.#n, 0);
      for (var n of e.values())
        W(n, -1);
      On(this.#t), e.clear();
    }
  }
  #i() {
    u(this.#t);
    var e = this.#e;
    if (this.#n.v !== e.size) {
      for (var n of super.keys())
        if (!e.has(n)) {
          var r = this.#o(0);
          e.set(n, r);
        }
    }
    for ([, r] of this.#e)
      u(r);
  }
  keys() {
    return u(this.#t), super.keys();
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
    return u(this.#n), super.size;
  }
}
class g2 {
  #e;
  #t;
  /**
   *
   * @param {() => T} fn
   * @param {(update: () => void) => void} onsubscribe
   */
  constructor(e, n) {
    this.#e = e, this.#t = to(n);
  }
  get current() {
    return this.#t(), this.#e();
  }
}
const p2 = /\(.+\)/, v2 = /* @__PURE__ */ new Set(["all", "print", "screen", "and", "or", "not", "only"]);
class Qh extends g2 {
  /**
   * @param {string} query A media query string
   * @param {boolean} [fallback] Fallback value for the server
   */
  constructor(e, n) {
    let r = p2.test(e) || // we need to use `some` here because technically this `window.matchMedia('random,screen')` still returns true
    e.split(/[\s,]+/).some((i) => v2.has(i.trim())) ? e : `(${e})`;
    const o = window.matchMedia(r);
    super(
      () => o.matches,
      (i) => gt(o, "change", i)
    );
  }
}
function m2(t, e, n, r) {
  const o = /* @__PURE__ */ new Map();
  return fc(t, { x: 0, y: 0, width: n, height: r }, e, !0).forEach((i) => {
    o.set(i.id, i);
  }), o;
}
function ju(t) {
  const { edges: e, defaultEdgeOptions: n, nodeLookup: r, previousEdges: o, connectionMode: i, onerror: s, onlyRenderVisible: a, elevateEdgesOnSelect: l } = t, c = /* @__PURE__ */ new Map();
  for (const d of e) {
    const f = r.get(d.source), h = r.get(d.target);
    if (!f || !h)
      continue;
    if (a) {
      const { visibleNodes: y, transform: w, width: b, height: k } = t;
      if (wb({
        sourceNode: f,
        targetNode: h,
        width: b,
        height: k,
        transform: w
      }))
        y.set(f.id, f), y.set(h.id, h);
      else
        continue;
    }
    const v = o.get(d.id);
    if (v && d === v.edge && f == v.sourceNode && h == v.targetNode) {
      c.set(d.id, v);
      continue;
    }
    const m = Eb({
      id: d.id,
      sourceNode: f,
      targetNode: h,
      sourceHandle: d.sourceHandle || null,
      targetHandle: d.targetHandle || null,
      connectionMode: i,
      onError: s
    });
    m && c.set(d.id, {
      ...n,
      ...d,
      ...m,
      zIndex: yb({
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
const eg = {
  input: Wh,
  output: Zh,
  default: yc,
  group: Yh
}, tg = {
  straight: Gh,
  smoothstep: Uh,
  default: wc,
  step: Jh
};
function y2(t, e, n, r, o, i) {
  if (e && !n && r && o) {
    const s = Si(i, {
      filter: (a) => !!((a.width || a.initialWidth) && (a.height || a.initialHeight))
    });
    return hc(s, r, o, 0.5, 2, 0.1);
  } else
    return n ?? { x: 0, y: 0, zoom: 1 };
}
function w2(t) {
  class e {
    #e = /* @__PURE__ */ P(() => t.props.id ?? "1");
    get flowId() {
      return u(this.#e);
    }
    set flowId(r) {
      W(this.#e, r);
    }
    #t = /* @__PURE__ */ ve(null);
    get domNode() {
      return u(this.#t);
    }
    set domNode(r) {
      W(this.#t, r);
    }
    #n = /* @__PURE__ */ ve(null);
    get panZoom() {
      return u(this.#n);
    }
    set panZoom(r) {
      W(this.#n, r);
    }
    #r = /* @__PURE__ */ ve(t.width ?? 0);
    get width() {
      return u(this.#r);
    }
    set width(r) {
      W(this.#r, r);
    }
    #o = /* @__PURE__ */ ve(t.height ?? 0);
    get height() {
      return u(this.#o);
    }
    set height(r) {
      W(this.#o, r);
    }
    #i = /* @__PURE__ */ P(() => {
      const r = Db(t.nodes, this.nodeLookup, this.parentLookup, {
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
      return u(this.#i);
    }
    set nodesInitialized(r) {
      W(this.#i, r);
    }
    #a = /* @__PURE__ */ P(() => this.panZoom !== null);
    get viewportInitialized() {
      return u(this.#a);
    }
    set viewportInitialized(r) {
      W(this.#a, r);
    }
    #s = /* @__PURE__ */ P(() => (Rb(this.connectionLookup, this.edgeLookup, t.edges), t.edges));
    get _edges() {
      return u(this.#s);
    }
    set _edges(r) {
      W(this.#s, r);
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
    #l = /* @__PURE__ */ P(() => {
      const r = this._prevSelectedNodeIds.size, o = /* @__PURE__ */ new Set(), i = this.nodes.filter((s) => (s.selected && (o.add(s.id), this._prevSelectedNodeIds.delete(s.id)), s.selected));
      return (r !== o.size || this._prevSelectedNodeIds.size > 0) && (this._prevSelectedNodes = i), this._prevSelectedNodeIds = o, this._prevSelectedNodes;
    });
    get selectedNodes() {
      return u(this.#l);
    }
    set selectedNodes(r) {
      W(this.#l, r);
    }
    _prevSelectedEdges = [];
    _prevSelectedEdgeIds = /* @__PURE__ */ new Set();
    #c = /* @__PURE__ */ P(() => {
      const r = this._prevSelectedEdgeIds.size, o = /* @__PURE__ */ new Set(), i = this.edges.filter((s) => (s.selected && (o.add(s.id), this._prevSelectedEdgeIds.delete(s.id)), s.selected));
      return (r !== o.size || this._prevSelectedEdgeIds.size > 0) && (this._prevSelectedEdges = i), this._prevSelectedEdgeIds = o, this._prevSelectedEdges;
    });
    get selectedEdges() {
      return u(this.#c);
    }
    set selectedEdges(r) {
      W(this.#c, r);
    }
    selectionChangeHandlers = /* @__PURE__ */ new Map();
    nodeLookup = /* @__PURE__ */ new Map();
    parentLookup = /* @__PURE__ */ new Map();
    connectionLookup = /* @__PURE__ */ new Map();
    edgeLookup = /* @__PURE__ */ new Map();
    _prevVisibleEdges = /* @__PURE__ */ new Map();
    #u = /* @__PURE__ */ P(() => {
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
      const v = {
        edges: o,
        defaultEdgeOptions: d,
        previousEdges: i,
        nodeLookup: s,
        connectionMode: a,
        elevateEdgesOnSelect: t.props.elevateEdgesOnSelect ?? !0,
        onerror: l
      };
      if (c) {
        const { viewport: m, width: y, height: w } = this, b = [m.x, m.y, m.zoom];
        f = m2(s, b, y, w), h = ju({
          ...v,
          onlyRenderVisible: !0,
          visibleNodes: f,
          transform: b,
          width: y,
          height: w
        });
      } else
        f = this.nodeLookup, h = ju(v);
      return { nodes: f, edges: h };
    });
    get visible() {
      return u(this.#u);
    }
    set visible(r) {
      W(this.#u, r);
    }
    #d = /* @__PURE__ */ P(() => t.props.nodesDraggable ?? !0);
    get nodesDraggable() {
      return u(this.#d);
    }
    set nodesDraggable(r) {
      W(this.#d, r);
    }
    #f = /* @__PURE__ */ P(() => t.props.nodesConnectable ?? !0);
    get nodesConnectable() {
      return u(this.#f);
    }
    set nodesConnectable(r) {
      W(this.#f, r);
    }
    #g = /* @__PURE__ */ P(() => t.props.elementsSelectable ?? !0);
    get elementsSelectable() {
      return u(this.#g);
    }
    set elementsSelectable(r) {
      W(this.#g, r);
    }
    #h = /* @__PURE__ */ P(() => t.props.nodesFocusable ?? !0);
    get nodesFocusable() {
      return u(this.#h);
    }
    set nodesFocusable(r) {
      W(this.#h, r);
    }
    #y = /* @__PURE__ */ P(() => t.props.edgesFocusable ?? !0);
    get edgesFocusable() {
      return u(this.#y);
    }
    set edgesFocusable(r) {
      W(this.#y, r);
    }
    #v = /* @__PURE__ */ P(() => t.props.disableKeyboardA11y ?? !1);
    get disableKeyboardA11y() {
      return u(this.#v);
    }
    set disableKeyboardA11y(r) {
      W(this.#v, r);
    }
    #w = /* @__PURE__ */ P(() => t.props.minZoom ?? 0.5);
    get minZoom() {
      return u(this.#w);
    }
    set minZoom(r) {
      W(this.#w, r);
    }
    #m = /* @__PURE__ */ P(() => t.props.maxZoom ?? 2);
    get maxZoom() {
      return u(this.#m);
    }
    set maxZoom(r) {
      W(this.#m, r);
    }
    #p = /* @__PURE__ */ P(() => t.props.nodeOrigin ?? [0, 0]);
    get nodeOrigin() {
      return u(this.#p);
    }
    set nodeOrigin(r) {
      W(this.#p, r);
    }
    #b = /* @__PURE__ */ P(() => t.props.nodeExtent ?? il);
    get nodeExtent() {
      return u(this.#b);
    }
    set nodeExtent(r) {
      W(this.#b, r);
    }
    #x = /* @__PURE__ */ P(() => t.props.translateExtent ?? il);
    get translateExtent() {
      return u(this.#x);
    }
    set translateExtent(r) {
      W(this.#x, r);
    }
    #_ = /* @__PURE__ */ P(() => t.props.defaultEdgeOptions ?? {});
    get defaultEdgeOptions() {
      return u(this.#_);
    }
    set defaultEdgeOptions(r) {
      W(this.#_, r);
    }
    #C = /* @__PURE__ */ P(() => t.props.nodeDragThreshold ?? 1);
    get nodeDragThreshold() {
      return u(this.#C);
    }
    set nodeDragThreshold(r) {
      W(this.#C, r);
    }
    #k = /* @__PURE__ */ P(() => t.props.autoPanOnNodeDrag ?? !0);
    get autoPanOnNodeDrag() {
      return u(this.#k);
    }
    set autoPanOnNodeDrag(r) {
      W(this.#k, r);
    }
    #S = /* @__PURE__ */ P(() => t.props.autoPanOnConnect ?? !0);
    get autoPanOnConnect() {
      return u(this.#S);
    }
    set autoPanOnConnect(r) {
      W(this.#S, r);
    }
    #E = /* @__PURE__ */ P(() => t.props.autoPanOnNodeFocus ?? !0);
    get autoPanOnNodeFocus() {
      return u(this.#E);
    }
    set autoPanOnNodeFocus(r) {
      W(this.#E, r);
    }
    #P = /* @__PURE__ */ P(() => t.props.autoPanSpeed ?? 15);
    get autoPanSpeed() {
      return u(this.#P);
    }
    set autoPanSpeed(r) {
      W(this.#P, r);
    }
    #N = /* @__PURE__ */ P(() => t.props.connectionDragThreshold ?? 1);
    get connectionDragThreshold() {
      return u(this.#N);
    }
    set connectionDragThreshold(r) {
      W(this.#N, r);
    }
    fitViewQueued = t.props.fitView ?? !1;
    fitViewOptions = t.props.fitViewOptions;
    fitViewResolver = null;
    #O = /* @__PURE__ */ P(() => t.props.snapGrid ?? null);
    get snapGrid() {
      return u(this.#O);
    }
    set snapGrid(r) {
      W(this.#O, r);
    }
    #A = /* @__PURE__ */ ve(!1);
    get dragging() {
      return u(this.#A);
    }
    set dragging(r) {
      W(this.#A, r);
    }
    #T = /* @__PURE__ */ ve(null);
    get selectionRect() {
      return u(this.#T);
    }
    set selectionRect(r) {
      W(this.#T, r);
    }
    #M = /* @__PURE__ */ ve(!1);
    get selectionKeyPressed() {
      return u(this.#M);
    }
    set selectionKeyPressed(r) {
      W(this.#M, r);
    }
    #D = /* @__PURE__ */ ve(!1);
    get multiselectionKeyPressed() {
      return u(this.#D);
    }
    set multiselectionKeyPressed(r) {
      W(this.#D, r);
    }
    #I = /* @__PURE__ */ ve(!1);
    get deleteKeyPressed() {
      return u(this.#I);
    }
    set deleteKeyPressed(r) {
      W(this.#I, r);
    }
    #V = /* @__PURE__ */ ve(!1);
    get panActivationKeyPressed() {
      return u(this.#V);
    }
    set panActivationKeyPressed(r) {
      W(this.#V, r);
    }
    #z = /* @__PURE__ */ ve(!1);
    get zoomActivationKeyPressed() {
      return u(this.#z);
    }
    set zoomActivationKeyPressed(r) {
      W(this.#z, r);
    }
    #L = /* @__PURE__ */ ve(null);
    get selectionRectMode() {
      return u(this.#L);
    }
    set selectionRectMode(r) {
      W(this.#L, r);
    }
    #H = /* @__PURE__ */ ve("");
    get ariaLiveMessage() {
      return u(this.#H);
    }
    set ariaLiveMessage(r) {
      W(this.#H, r);
    }
    #R = /* @__PURE__ */ P(() => t.props.selectionMode ?? Es.Partial);
    get selectionMode() {
      return u(this.#R);
    }
    set selectionMode(r) {
      W(this.#R, r);
    }
    #F = /* @__PURE__ */ P(() => ({ ...eg, ...t.props.nodeTypes }));
    get nodeTypes() {
      return u(this.#F);
    }
    set nodeTypes(r) {
      W(this.#F, r);
    }
    #B = /* @__PURE__ */ P(() => ({ ...tg, ...t.props.edgeTypes }));
    get edgeTypes() {
      return u(this.#B);
    }
    set edgeTypes(r) {
      W(this.#B, r);
    }
    #$ = /* @__PURE__ */ P(() => t.props.noPanClass ?? "nopan");
    get noPanClass() {
      return u(this.#$);
    }
    set noPanClass(r) {
      W(this.#$, r);
    }
    #K = /* @__PURE__ */ P(() => t.props.noDragClass ?? "nodrag");
    get noDragClass() {
      return u(this.#K);
    }
    set noDragClass(r) {
      W(this.#K, r);
    }
    #W = /* @__PURE__ */ P(() => t.props.noWheelClass ?? "nowheel");
    get noWheelClass() {
      return u(this.#W);
    }
    set noWheelClass(r) {
      W(this.#W, r);
    }
    #Z = /* @__PURE__ */ P(() => pb(t.props.ariaLabelConfig));
    get ariaLabelConfig() {
      return u(this.#Z);
    }
    set ariaLabelConfig(r) {
      W(this.#Z, r);
    }
    #Y = /* @__PURE__ */ ve(y2(this.nodesInitialized, t.props.fitView, t.props.initialViewport, this.width, this.height, this.nodeLookup));
    get _viewport() {
      return u(this.#Y);
    }
    set _viewport(r) {
      W(this.#Y, r);
    }
    get viewport() {
      return t.viewport ?? this._viewport;
    }
    set viewport(r) {
      t.viewport && (t.viewport = r), this._viewport = r;
    }
    #q = /* @__PURE__ */ ve(
      // _connection is viewport independent and originating from XYHandle
      sl
    );
    get _connection() {
      return u(this.#q);
    }
    set _connection(r) {
      W(this.#q, r);
    }
    #j = /* @__PURE__ */ P(() => this._connection.inProgress ? {
      ...this._connection,
      to: Pi(this._connection.to, [this.viewport.x, this.viewport.y, this.viewport.zoom])
    } : this._connection);
    get connection() {
      return u(this.#j);
    }
    set connection(r) {
      W(this.#j, r);
    }
    #X = /* @__PURE__ */ P(() => t.props.connectionMode ?? Co.Strict);
    get connectionMode() {
      return u(this.#X);
    }
    set connectionMode(r) {
      W(this.#X, r);
    }
    #U = /* @__PURE__ */ P(() => t.props.connectionRadius ?? 20);
    get connectionRadius() {
      return u(this.#U);
    }
    set connectionRadius(r) {
      W(this.#U, r);
    }
    #G = /* @__PURE__ */ P(() => t.props.isValidConnection ?? (() => !0));
    get isValidConnection() {
      return u(this.#G);
    }
    set isValidConnection(r) {
      W(this.#G, r);
    }
    #J = /* @__PURE__ */ P(() => t.props.selectNodesOnDrag ?? !0);
    get selectNodesOnDrag() {
      return u(this.#J);
    }
    set selectNodesOnDrag(r) {
      W(this.#J, r);
    }
    #Q = /* @__PURE__ */ P(() => t.props.defaultMarkerColor === void 0 ? "#b1b1b7" : t.props.defaultMarkerColor);
    get defaultMarkerColor() {
      return u(this.#Q);
    }
    set defaultMarkerColor(r) {
      W(this.#Q, r);
    }
    #ee = /* @__PURE__ */ P(() => Pb(t.edges, {
      defaultColor: this.defaultMarkerColor,
      id: this.flowId,
      defaultMarkerStart: this.defaultEdgeOptions.markerStart,
      defaultMarkerEnd: this.defaultEdgeOptions.markerEnd
    }));
    get markers() {
      return u(this.#ee);
    }
    set markers(r) {
      W(this.#ee, r);
    }
    #te = /* @__PURE__ */ P(() => t.props.onlyRenderVisibleElements ?? !1);
    get onlyRenderVisibleElements() {
      return u(this.#te);
    }
    set onlyRenderVisibleElements(r) {
      W(this.#te, r);
    }
    #ne = /* @__PURE__ */ P(() => t.props.onflowerror ?? db);
    get onerror() {
      return u(this.#ne);
    }
    set onerror(r) {
      W(this.#ne, r);
    }
    #re = /* @__PURE__ */ P(() => t.props.ondelete);
    get ondelete() {
      return u(this.#re);
    }
    set ondelete(r) {
      W(this.#re, r);
    }
    #oe = /* @__PURE__ */ P(() => t.props.onbeforedelete);
    get onbeforedelete() {
      return u(this.#oe);
    }
    set onbeforedelete(r) {
      W(this.#oe, r);
    }
    #ie = /* @__PURE__ */ P(() => t.props.onbeforeconnect);
    get onbeforeconnect() {
      return u(this.#ie);
    }
    set onbeforeconnect(r) {
      W(this.#ie, r);
    }
    #se = /* @__PURE__ */ P(() => t.props.onconnect);
    get onconnect() {
      return u(this.#se);
    }
    set onconnect(r) {
      W(this.#se, r);
    }
    #ae = /* @__PURE__ */ P(() => t.props.onconnectstart);
    get onconnectstart() {
      return u(this.#ae);
    }
    set onconnectstart(r) {
      W(this.#ae, r);
    }
    #le = /* @__PURE__ */ P(() => t.props.onconnectend);
    get onconnectend() {
      return u(this.#le);
    }
    set onconnectend(r) {
      W(this.#le, r);
    }
    #ce = /* @__PURE__ */ P(() => t.props.onbeforereconnect);
    get onbeforereconnect() {
      return u(this.#ce);
    }
    set onbeforereconnect(r) {
      W(this.#ce, r);
    }
    #ue = /* @__PURE__ */ P(() => t.props.onreconnect);
    get onreconnect() {
      return u(this.#ue);
    }
    set onreconnect(r) {
      W(this.#ue, r);
    }
    #de = /* @__PURE__ */ P(() => t.props.onreconnectstart);
    get onreconnectstart() {
      return u(this.#de);
    }
    set onreconnectstart(r) {
      W(this.#de, r);
    }
    #fe = /* @__PURE__ */ P(() => t.props.onreconnectend);
    get onreconnectend() {
      return u(this.#fe);
    }
    set onreconnectend(r) {
      W(this.#fe, r);
    }
    #he = /* @__PURE__ */ P(() => t.props.clickConnect ?? !0);
    get clickConnect() {
      return u(this.#he);
    }
    set clickConnect(r) {
      W(this.#he, r);
    }
    #ge = /* @__PURE__ */ P(() => t.props.onclickconnectstart);
    get onclickconnectstart() {
      return u(this.#ge);
    }
    set onclickconnectstart(r) {
      W(this.#ge, r);
    }
    #pe = /* @__PURE__ */ P(() => t.props.onclickconnectend);
    get onclickconnectend() {
      return u(this.#pe);
    }
    set onclickconnectend(r) {
      W(this.#pe, r);
    }
    #ve = /* @__PURE__ */ ve(null);
    get clickConnectStartHandle() {
      return u(this.#ve);
    }
    set clickConnectStartHandle(r) {
      W(this.#ve, r);
    }
    #me = /* @__PURE__ */ P(() => t.props.onselectiondrag);
    get onselectiondrag() {
      return u(this.#me);
    }
    set onselectiondrag(r) {
      W(this.#me, r);
    }
    #ye = /* @__PURE__ */ P(() => t.props.onselectiondragstart);
    get onselectiondragstart() {
      return u(this.#ye);
    }
    set onselectiondragstart(r) {
      W(this.#ye, r);
    }
    #we = /* @__PURE__ */ P(() => t.props.onselectiondragstop);
    get onselectiondragstop() {
      return u(this.#we);
    }
    set onselectiondragstop(r) {
      W(this.#we, r);
    }
    resolveFitView = async () => {
      this.panZoom && (await cb(
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
    _prefersDark = new Qh("(prefers-color-scheme: dark)", t.props.colorModeSSR === "dark");
    #be = /* @__PURE__ */ P(() => t.props.colorMode === "system" ? this._prefersDark.current ? "dark" : "light" : t.props.colorMode ?? "light");
    get colorMode() {
      return u(this.#be);
    }
    set colorMode(r) {
      W(this.#be, r);
    }
    constructor() {
    }
    resetStoreValues() {
      this.dragging = !1, this.selectionRect = null, this.selectionRectMode = null, this.selectionKeyPressed = !1, this.multiselectionKeyPressed = !1, this.deleteKeyPressed = !1, this.panActivationKeyPressed = !1, this.zoomActivationKeyPressed = !1, this._connection = sl, this.clickConnectStartHandle = null, this.viewport = t.props.initialViewport ?? { x: 0, y: 0, zoom: 1 }, this.ariaLiveMessage = "";
    }
  }
  return new e();
}
function Sn() {
  const t = bn(As);
  if (!t)
    throw new Error("To call useStore outside of <SvelteFlow /> you need to wrap your component in a <SvelteFlowProvider />");
  return t.getStore();
}
const As = Symbol();
function ng(t) {
  const e = w2(t);
  function n(T) {
    e.nodeTypes = {
      ...eg,
      ...T
    };
  }
  function r(T) {
    e.edgeTypes = {
      ...tg,
      ...T
    };
  }
  function o(T) {
    e.edges = _b(T, e.edges);
  }
  const i = (T, E = !1) => {
    e.nodes = e.nodes.map((M) => {
      const C = T.get(M.id);
      return C ? { ...M, position: C.position, dragging: E } : M;
    });
  };
  function s(T) {
    const { changes: E, updatedInternals: M } = Lb(T, e.nodeLookup, e.parentLookup, e.domNode, e.nodeOrigin);
    if (!M)
      return;
    Tb(e.nodeLookup, e.parentLookup, {
      nodeOrigin: e.nodeOrigin,
      nodeExtent: e.nodeExtent
    }), e.fitViewQueued && e.resolveFitView();
    const C = /* @__PURE__ */ new Map();
    for (const N of E) {
      const I = e.nodeLookup.get(N.id)?.internals.userNode;
      if (!I)
        continue;
      const L = { ...I };
      switch (N.type) {
        case "dimensions": {
          const Z = { ...L.measured, ...N.dimensions };
          N.setAttributes && (L.width = N.dimensions?.width ?? L.width, L.height = N.dimensions?.height ?? L.height), L.measured = Z;
          break;
        }
        case "position":
          L.position = N.position ?? L.position;
          break;
      }
      C.set(N.id, L);
    }
    e.nodes = e.nodes.map((N) => C.get(N.id) ?? N);
  }
  function a(T) {
    const E = e.fitViewResolver ?? Promise.withResolvers();
    return e.fitViewQueued = !0, e.fitViewOptions = T, e.fitViewResolver = E, e.nodes = [...e.nodes], E.promise;
  }
  async function l(T, E, M) {
    const C = typeof M?.zoom < "u" ? M.zoom : e.maxZoom, N = e.panZoom;
    return N ? (await N.setViewport({
      x: e.width / 2 - T * C,
      y: e.height / 2 - E * C,
      zoom: C
    }, { duration: M?.duration, ease: M?.ease, interpolate: M?.interpolate }), Promise.resolve(!0)) : Promise.resolve(!1);
  }
  function c(T, E) {
    const M = e.panZoom;
    return M ? M.scaleBy(T, E) : Promise.resolve(!1);
  }
  function d(T) {
    return c(1.2, T);
  }
  function f(T) {
    return c(1 / 1.2, T);
  }
  function h(T) {
    const E = e.panZoom;
    E && (E.setScaleExtent([T, e.maxZoom]), e.minZoom = T);
  }
  function v(T) {
    const E = e.panZoom;
    E && (E.setScaleExtent([e.minZoom, T]), e.maxZoom = T);
  }
  function m(T) {
    const E = e.panZoom;
    E && (E.setTranslateExtent(T), e.translateExtent = T);
  }
  function y(T, E = null) {
    let M = !1;
    const C = T.map((N) => (E ? E.has(N.id) : !0) && N.selected ? (M = !0, { ...N, selected: !1 }) : N);
    return [M, C];
  }
  function w(T) {
    const E = T?.nodes ? new Set(T.nodes.map((Z) => Z.id)) : null, [M, C] = y(e.nodes, E);
    M && (e.nodes = C);
    const N = T?.edges ? new Set(T.edges.map((Z) => Z.id)) : null, [I, L] = y(e.edges, N);
    I && (e.edges = L);
  }
  function b(T) {
    const E = e.multiselectionKeyPressed;
    e.nodes = e.nodes.map((M) => {
      const C = T.includes(M.id), N = E && M.selected || C;
      return !!M.selected !== N ? { ...M, selected: N } : M;
    }), E || w({ nodes: [] });
  }
  function k(T) {
    const E = e.multiselectionKeyPressed;
    e.edges = e.edges.map((M) => {
      const C = T.includes(M.id), N = E && M.selected || C;
      return !!M.selected !== N ? { ...M, selected: N } : M;
    }), E || w({ edges: [] });
  }
  function S(T, E, M) {
    const C = e.nodeLookup.get(T);
    if (!C) {
      console.warn("012", li.error012(T));
      return;
    }
    e.selectionRect = null, e.selectionRectMode = null, C.selected ? (E || C.selected && e.multiselectionKeyPressed) && (w({ nodes: [C], edges: [] }), requestAnimationFrame(() => M?.blur())) : b([T]);
  }
  function _(T) {
    const E = e.edgeLookup.get(T);
    if (!E) {
      console.warn("012", li.error012(T));
      return;
    }
    (E.selectable || e.elementsSelectable && typeof E.selectable > "u") && (e.selectionRect = null, e.selectionRectMode = null, E.selected ? E.selected && e.multiselectionKeyPressed && w({ nodes: [], edges: [E] }) : k([T]));
  }
  function x(T, E) {
    const { nodeExtent: M, snapGrid: C, nodeOrigin: N, nodeLookup: I, nodesDraggable: L, onerror: Z } = e, X = /* @__PURE__ */ new Map(), D = C?.[0] ?? 5, j = C?.[1] ?? 5, G = T.x * D * E, R = T.y * j * E;
    for (const ee of I.values()) {
      if (!(ee.selected && (ee.draggable || L && typeof ee.draggable > "u")))
        continue;
      let U = {
        x: ee.internals.positionAbsolute.x + G,
        y: ee.internals.positionAbsolute.y + R
      };
      C && (U = Ei(U, C));
      const { position: ne, positionAbsolute: H } = Ch({
        nodeId: ee.id,
        nextPosition: U,
        nodeLookup: I,
        nodeExtent: M,
        nodeOrigin: N,
        onError: Z
      });
      ee.position = ne, ee.internals.positionAbsolute = H, X.set(ee.id, ee);
    }
    i(X);
  }
  function O(T) {
    return Hb({
      delta: T,
      panZoom: e.panZoom,
      transform: [e.viewport.x, e.viewport.y, e.viewport.zoom],
      translateExtent: e.translateExtent,
      width: e.width,
      height: e.height
    });
  }
  const z = (T) => {
    e._connection = { ...T };
  };
  function V() {
    e._connection = sl;
  }
  function B() {
    e.resetStoreValues(), w();
  }
  return Object.assign(e, {
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
    setMaxZoom: v,
    setTranslateExtent: m,
    unselectNodesAndEdges: w,
    addSelectedNodes: b,
    addSelectedEdges: k,
    handleNodeSelection: S,
    handleEdgeSelection: _,
    moveSelectedNodes: x,
    panBy: O,
    updateConnection: z,
    cancelConnection: V,
    reset: B
  });
}
function b2(t, e) {
  const { minZoom: n, maxZoom: r, initialViewport: o, onPanZoomStart: i, onPanZoom: s, onPanZoomEnd: a, translateExtent: l, setPanZoomInstance: c, onDraggingChange: d, onTransformChange: f } = e, h = r2({
    domNode: t,
    minZoom: n,
    maxZoom: r,
    translateExtent: l,
    viewport: o,
    onPanZoom: s,
    onPanZoomStart: i,
    onPanZoomEnd: a,
    onDraggingChange: d
  }), v = h.getViewport();
  return (o.x !== v.x || o.y !== v.y || o.zoom !== v.zoom) && f([v.x, v.y, v.zoom]), c(h), h.update(e), {
    update(m) {
      h.update(m);
    }
  };
}
var x2 = /* @__PURE__ */ re('<div class="svelte-flow__zoom svelte-flow__container"><!></div>');
function rg(t, e) {
  le(e, !0);
  let n = p(e, "store", 15), r = p(e, "panOnScrollMode", 7), o = p(e, "preventScrolling", 7), i = p(e, "zoomOnScroll", 7), s = p(e, "zoomOnDoubleClick", 7), a = p(e, "zoomOnPinch", 7), l = p(e, "panOnDrag", 7), c = p(e, "panOnScroll", 7), d = p(e, "panOnScrollSpeed", 7), f = p(e, "paneClickDistance", 7), h = p(e, "selectionOnDrag", 7), v = p(e, "onmovestart", 7), m = p(e, "onmove", 7), y = p(e, "onmoveend", 7), w = p(e, "oninit", 7), b = p(e, "children", 7), k = /* @__PURE__ */ P(() => n().panActivationKeyPressed || l()), S = /* @__PURE__ */ P(() => n().panActivationKeyPressed || c());
  const { viewport: _ } = n();
  let x = !1;
  He(() => {
    !x && n().viewportInitialized && (w()?.(), x = !0);
  });
  var O = {
    get store() {
      return n();
    },
    set store(B) {
      n(B), g();
    },
    get panOnScrollMode() {
      return r();
    },
    set panOnScrollMode(B) {
      r(B), g();
    },
    get preventScrolling() {
      return o();
    },
    set preventScrolling(B) {
      o(B), g();
    },
    get zoomOnScroll() {
      return i();
    },
    set zoomOnScroll(B) {
      i(B), g();
    },
    get zoomOnDoubleClick() {
      return s();
    },
    set zoomOnDoubleClick(B) {
      s(B), g();
    },
    get zoomOnPinch() {
      return a();
    },
    set zoomOnPinch(B) {
      a(B), g();
    },
    get panOnDrag() {
      return l();
    },
    set panOnDrag(B) {
      l(B), g();
    },
    get panOnScroll() {
      return c();
    },
    set panOnScroll(B) {
      c(B), g();
    },
    get panOnScrollSpeed() {
      return d();
    },
    set panOnScrollSpeed(B) {
      d(B), g();
    },
    get paneClickDistance() {
      return f();
    },
    set paneClickDistance(B) {
      f(B), g();
    },
    get selectionOnDrag() {
      return h();
    },
    set selectionOnDrag(B) {
      h(B), g();
    },
    get onmovestart() {
      return v();
    },
    set onmovestart(B) {
      v(B), g();
    },
    get onmove() {
      return m();
    },
    set onmove(B) {
      m(B), g();
    },
    get onmoveend() {
      return y();
    },
    set onmoveend(B) {
      y(B), g();
    },
    get oninit() {
      return w();
    },
    set oninit(B) {
      w(B), g();
    },
    get children() {
      return b();
    },
    set children(B) {
      b(B), g();
    }
  }, z = x2(), V = q(z);
  return Ae(V, b), Y(z), It(z, (B, $) => b2?.(B, $), () => ({
    viewport: n().viewport,
    minZoom: n().minZoom,
    maxZoom: n().maxZoom,
    initialViewport: _,
    onDraggingChange: (B) => {
      n(n().dragging = B, !0);
    },
    setPanZoomInstance: (B) => {
      n(n().panZoom = B, !0);
    },
    onPanZoomStart: v(),
    onPanZoom: m(),
    onPanZoomEnd: y(),
    zoomOnScroll: i(),
    zoomOnDoubleClick: s(),
    zoomOnPinch: a(),
    panOnScroll: u(S),
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
    onTransformChange: (B) => {
      n(n().viewport = { x: B[0], y: B[1], zoom: B[2] }, !0);
    },
    connectionInProgress: n().connection.inProgress
  })), A(t, z), ce(O);
}
ie(
  rg,
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
function Xu(t, e) {
  return (n) => {
    n.target === e && t?.(n);
  };
}
function Uu(t) {
  return (e) => {
    const n = t.has(e.id);
    return !!e.selected !== n ? { ...e, selected: n } : e;
  };
}
function Gu(t, e) {
  if (t.size !== e.size)
    return !1;
  for (const n of t)
    if (!e.has(n))
      return !1;
  return !0;
}
var _2 = /* @__PURE__ */ re("<div><!></div>");
function og(t, e) {
  le(e, !0);
  let n = p(e, "store", 15), r = p(e, "panOnDrag", 7, !0), o = p(e, "paneClickDistance", 7, 1), i = p(e, "selectionOnDrag", 7), s = p(e, "onpaneclick", 7), a = p(e, "onpanecontextmenu", 7), l = p(e, "onselectionstart", 7), c = p(e, "onselectionend", 7), d = p(e, "children", 7), f, h = null, v = /* @__PURE__ */ new Set(), m = /* @__PURE__ */ new Set(), y = /* @__PURE__ */ P(() => n().panActivationKeyPressed || r()), w = /* @__PURE__ */ P(() => n().selectionKeyPressed || !!n().selectionRect || i() && u(y) !== !0), b = /* @__PURE__ */ P(() => n().elementsSelectable && (u(w) || n().selectionRectMode === "user")), k = !1;
  function S(N) {
    if (h = f?.getBoundingClientRect(), !h) return;
    const I = N.target === f, L = !I && !!N.target.closest(".nokey"), Z = i() && I || n().selectionKeyPressed;
    if (L || !u(w) || !Z || N.button !== 0 || !N.isPrimary)
      return;
    N.target?.setPointerCapture?.(N.pointerId), k = !1;
    const { x: X, y: D } = vn(N, h);
    n(n().selectionRect = { width: 0, height: 0, startX: X, startY: D, x: X, y: D }, !0), I || (N.stopPropagation(), N.preventDefault());
  }
  function _(N) {
    if (!u(w) || !h || !n().selectionRect)
      return;
    const I = vn(N, h), { startX: L = 0, startY: Z = 0 } = n().selectionRect;
    if (!k) {
      const R = n().selectionKeyPressed ? 0 : o();
      if (Math.hypot(I.x - L, I.y - Z) <= R)
        return;
      n().unselectNodesAndEdges(), l()?.(N);
    }
    k = !0;
    const X = {
      ...n().selectionRect,
      x: I.x < L ? I.x : L,
      y: I.y < Z ? I.y : Z,
      width: Math.abs(I.x - L),
      height: Math.abs(I.y - Z)
    }, D = v, j = m;
    v = new Set(fc(
      n().nodeLookup,
      X,
      [
        n().viewport.x,
        n().viewport.y,
        n().viewport.zoom
      ],
      n().selectionMode === Es.Partial,
      !0
    ).map((R) => R.id));
    const G = n().defaultEdgeOptions.selectable ?? !0;
    m = /* @__PURE__ */ new Set();
    for (const R of v) {
      const ee = n().connectionLookup.get(R);
      if (ee)
        for (const { edgeId: K } of ee.values()) {
          const U = n().edgeLookup.get(K);
          U && (U.selectable ?? G) && m.add(K);
        }
    }
    Gu(D, v) || n(n().nodes = n().nodes.map(Uu(v)), !0), Gu(j, m) || n(n().edges = n().edges.map(Uu(m)), !0), n(n().selectionRectMode = "user", !0), n(n().selectionRect = X, !0);
  }
  function x(N) {
    N.button === 0 && (N.target?.releasePointerCapture?.(N.pointerId), !k && N.target === f && V?.(N), n(n().selectionRect = null, !0), k && n(n().selectionRectMode = v.size > 0 ? "nodes" : null, !0), k && c()?.(N));
  }
  const O = (N) => {
    if (Array.isArray(u(y)) && u(y).includes(2)) {
      N.preventDefault();
      return;
    }
    a()?.({ event: N });
  }, z = (N) => {
    k && (N.stopPropagation(), k = !1);
  };
  function V(N) {
    if (k || n().connection.inProgress) {
      k = !1;
      return;
    }
    s()?.({ event: N }), n().unselectNodesAndEdges(), n(n().selectionRectMode = null, !0), n(n().selectionRect = null, !0);
  }
  var B = {
    get store() {
      return n();
    },
    set store(N) {
      n(N), g();
    },
    get panOnDrag() {
      return r();
    },
    set panOnDrag(N = !0) {
      r(N), g();
    },
    get paneClickDistance() {
      return o();
    },
    set paneClickDistance(N = 1) {
      o(N), g();
    },
    get selectionOnDrag() {
      return i();
    },
    set selectionOnDrag(N) {
      i(N), g();
    },
    get onpaneclick() {
      return s();
    },
    set onpaneclick(N) {
      s(N), g();
    },
    get onpanecontextmenu() {
      return a();
    },
    set onpanecontextmenu(N) {
      a(N), g();
    },
    get onselectionstart() {
      return l();
    },
    set onselectionstart(N) {
      l(N), g();
    },
    get onselectionend() {
      return c();
    },
    set onselectionend(N) {
      c(N), g();
    },
    get children() {
      return d();
    },
    set children(N) {
      d(N), g();
    }
  }, $ = _2();
  let T;
  var E = /* @__PURE__ */ P(() => u(b) ? void 0 : Xu(V, f));
  $.__click = function(...N) {
    u(E)?.apply(this, N);
  }, $.__pointermove = function(...N) {
    (u(b) ? _ : void 0)?.apply(this, N);
  }, $.__pointerup = function(...N) {
    (u(b) ? x : void 0)?.apply(this, N);
  };
  var M = /* @__PURE__ */ P(() => Xu(O, f));
  $.__contextmenu = function(...N) {
    u(M)?.apply(this, N);
  };
  var C = q($);
  return Ae(C, d), Y($), Tt($, (N) => f = N, () => f), Te((N) => T = Gt($, 1, "svelte-flow__pane svelte-flow__container", null, T, N), [
    () => ({
      draggable: r() === !0 || Array.isArray(r()) && r().includes(0),
      dragging: n().dragging,
      selection: u(w)
    })
  ]), ms(
    "pointerdown",
    $,
    function(...N) {
      (u(b) ? S : void 0)?.apply(this, N);
    },
    !0
  ), ms(
    "click",
    $,
    function(...N) {
      (u(b) ? z : void 0)?.apply(this, N);
    },
    !0
  ), A(t, $), ce(B);
}
io(["click", "pointermove", "pointerup", "contextmenu"]);
ie(
  og,
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
var C2 = /* @__PURE__ */ re('<div class="svelte-flow__viewport xyflow__viewport svelte-flow__container"><!></div>');
function ig(t, e) {
  le(e, !0);
  let n = p(e, "store", 15), r = p(e, "children", 7);
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
  }, i = C2();
  let s;
  var a = q(i);
  return Ae(a, r), Y(i), Te(() => s = At(i, "", s, {
    transform: `translate(${n().viewport.x ?? ""}px, ${n().viewport.y ?? ""}px) scale(${n().viewport.zoom ?? ""})`
  })), A(t, i), ce(o);
}
ie(ig, { store: {}, children: {} }, [], [], !0);
function sg(t, e) {
  const { store: n, onDrag: r, onDragStart: o, onDragStop: i, onNodeMouseDown: s } = e, a = Kb({
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
  return l(t, e), {
    update(c) {
      l(t, c);
    },
    destroy() {
      a.destroy();
    }
  };
}
var k2 = /* @__PURE__ */ re('<div aria-live="assertive" aria-atomic="true" class="a11y-live-msg svelte-wlt670"> </div>'), S2 = /* @__PURE__ */ re('<div class="a11y-hidden svelte-wlt670"> </div> <div class="a11y-hidden svelte-wlt670"> </div> <!>', 1);
const E2 = {
  hash: "svelte-wlt670",
  code: ".a11y-hidden.svelte-wlt670 {display:none;}.a11y-live-msg.svelte-wlt670 {position:absolute;width:1px;height:1px;margin:-1px;border:0;padding:0;overflow:hidden;clip:rect(0px, 0px, 0px, 0px);clip-path:inset(100%);}"
};
function ag(t, e) {
  le(e, !0), Qe(t, E2);
  let n = p(e, "store", 7);
  var r = {
    get store() {
      return n();
    },
    set store(f) {
      n(f), g();
    }
  }, o = S2(), i = Q(o), s = q(i, !0);
  Y(i);
  var a = F(i, 2), l = q(a, !0);
  Y(a);
  var c = F(a, 2);
  {
    var d = (f) => {
      var h = k2(), v = q(h, !0);
      Y(h), Te(() => {
        Ne(h, "id", `${P2}-${n().flowId}`), rt(v, n().ariaLiveMessage);
      }), A(f, h);
    };
    se(c, (f) => {
      n().disableKeyboardA11y || f(d);
    });
  }
  return Te(() => {
    Ne(i, "id", `${lg}-${n().flowId}`), rt(s, n().disableKeyboardA11y ? n().ariaLabelConfig["node.a11yDescription.default"] : n().ariaLabelConfig["node.a11yDescription.keyboardDisabled"]), Ne(a, "id", `${cg}-${n().flowId}`), rt(l, n().ariaLabelConfig["edge.a11yDescription.default"]);
  }), A(t, o), ce(r);
}
ie(ag, { store: {} }, [], [], !0);
const lg = "svelte-flow__node-desc", cg = "svelte-flow__edge-desc", P2 = "svelte-flow__aria-live";
var N2 = /* @__PURE__ */ re("<div><!></div>");
function ug(t, e) {
  le(e, !0);
  let n = p(e, "store", 15), r = p(e, "node", 7), o = p(e, "resizeObserver", 7), i = p(e, "nodeClickDistance", 7), s = p(e, "onnodeclick", 7), a = p(e, "onnodedrag", 7), l = p(e, "onnodedragstart", 7), c = p(e, "onnodedragstop", 7), d = p(e, "onnodepointerenter", 7), f = p(e, "onnodepointerleave", 7), h = p(e, "onnodepointermove", 7), v = p(e, "onnodecontextmenu", 7), m = /* @__PURE__ */ P(() => Ht(r().data, () => ({}), !0)), y = /* @__PURE__ */ P(() => Ht(r().selected, !1)), w = /* @__PURE__ */ P(() => r().draggable), b = /* @__PURE__ */ P(() => r().selectable), k = /* @__PURE__ */ P(() => Ht(r().deletable, !0)), S = /* @__PURE__ */ P(() => r().connectable), _ = /* @__PURE__ */ P(() => r().focusable), x = /* @__PURE__ */ P(() => Ht(r().hidden, !1)), O = /* @__PURE__ */ P(() => Ht(r().dragging, !1)), z = /* @__PURE__ */ P(() => Ht(r().style, "")), V = /* @__PURE__ */ P(() => r().class), B = /* @__PURE__ */ P(() => Ht(r().type, "default")), $ = /* @__PURE__ */ P(() => r().parentId), T = /* @__PURE__ */ P(() => r().sourcePosition), E = /* @__PURE__ */ P(() => r().targetPosition), M = /* @__PURE__ */ P(() => Ht(r().measured, () => ({ width: 0, height: 0 }), !0).width), C = /* @__PURE__ */ P(() => Ht(r().measured, () => ({ width: 0, height: 0 }), !0).height), N = /* @__PURE__ */ P(() => r().initialWidth), I = /* @__PURE__ */ P(() => r().initialHeight), L = /* @__PURE__ */ P(() => r().width), Z = /* @__PURE__ */ P(() => r().height), X = /* @__PURE__ */ P(() => r().dragHandle), D = /* @__PURE__ */ P(() => Ht(r().internals.z, 0)), j = /* @__PURE__ */ P(() => r().internals.positionAbsolute.x), G = /* @__PURE__ */ P(() => r().internals.positionAbsolute.y), R = /* @__PURE__ */ P(() => r().internals.userNode), { id: ee } = r(), K = /* @__PURE__ */ P(() => u(w) ?? n().nodesDraggable), U = /* @__PURE__ */ P(() => u(b) ?? n().elementsSelectable), ne = /* @__PURE__ */ P(() => u(S) ?? n().nodesConnectable), H = /* @__PURE__ */ P(() => Ph(r())), te = /* @__PURE__ */ P(() => !!r().internals.handleBounds), xe = /* @__PURE__ */ P(() => u(H) && u(te)), ue = /* @__PURE__ */ P(() => u(_) ?? n().nodesFocusable);
  function ae(pe) {
    return n().parentLookup.has(pe);
  }
  let oe = /* @__PURE__ */ P(() => ae(ee)), fe = /* @__PURE__ */ ve(null), ye = null, ke = u(B), he = u(T), me = u(E), Oe = /* @__PURE__ */ P(() => n().nodeTypes[u(B)] ?? yc), J = /* @__PURE__ */ P(() => n().ariaLabelConfig);
  qr("svelteflow__node_connectable", {
    get value() {
      return u(ne);
    }
  }), qr("svelteflow__node_id", ee);
  let Se = /* @__PURE__ */ P(() => {
    const pe = u(M) === void 0 ? u(L) ?? u(N) : u(L), Me = u(C) === void 0 ? u(Z) ?? u(I) : u(Z);
    if (!(pe === void 0 && Me === void 0 && u(z) === void 0))
      return `${u(z)};${pe ? `width:${Hn(pe)};` : ""}${Me ? `height:${Hn(Me)};` : ""}`;
  });
  He(() => {
    (u(B) !== ke || u(T) !== he || u(E) !== me) && u(fe) !== null && requestAnimationFrame(() => {
      u(fe) !== null && n().updateNodeInternals(/* @__PURE__ */ new Map([[ee, { id: ee, nodeElement: u(fe), force: !0 }]]));
    }), ke = u(B), he = u(T), me = u(E);
  }), He(() => {
    o() && (!u(xe) || u(fe) !== ye) && (ye && o().unobserve(ye), u(fe) && o().observe(u(fe)), ye = u(fe));
  }), xi(() => {
    ye && o()?.unobserve(ye);
  });
  function We(pe) {
    u(U) && (!n().selectNodesOnDrag || !u(K) || n().nodeDragThreshold > 0) && n().handleNodeSelection(ee), s()?.({ node: u(R), event: pe });
  }
  function Ve(pe) {
    if (!(Ah(pe) || n().disableKeyboardA11y))
      if (xh.includes(pe.key) && u(U)) {
        const Me = pe.key === "Escape";
        n().handleNodeSelection(ee, Me, u(fe));
      } else u(K) && r().selected && Object.prototype.hasOwnProperty.call(Os, pe.key) && (pe.preventDefault(), n(
        n().ariaLiveMessage = u(J)["node.a11yDescription.ariaLiveMessage"]({
          direction: pe.key.replace("Arrow", "").toLowerCase(),
          x: ~~r().internals.positionAbsolute.x,
          y: ~~r().internals.positionAbsolute.y
        }),
        !0
      ), n().moveSelectedNodes(Os[pe.key], pe.shiftKey ? 4 : 1));
  }
  const Ue = () => {
    if (n().disableKeyboardA11y || !n().autoPanOnNodeFocus || !u(fe)?.matches(":focus-visible"))
      return;
    const { width: pe, height: Me, viewport: Ge } = n();
    fc(/* @__PURE__ */ new Map([[ee, r()]]), { x: 0, y: 0, width: pe, height: Me }, [Ge.x, Ge.y, Ge.zoom], !0).length > 0 || n().setCenter(r().position.x + (r().measured.width ?? 0) / 2, r().position.y + (r().measured.height ?? 0) / 2, { zoom: Ge.zoom });
  };
  var ot = {
    get store() {
      return n();
    },
    set store(pe) {
      n(pe), g();
    },
    get node() {
      return r();
    },
    set node(pe) {
      r(pe), g();
    },
    get resizeObserver() {
      return o();
    },
    set resizeObserver(pe) {
      o(pe), g();
    },
    get nodeClickDistance() {
      return i();
    },
    set nodeClickDistance(pe) {
      i(pe), g();
    },
    get onnodeclick() {
      return s();
    },
    set onnodeclick(pe) {
      s(pe), g();
    },
    get onnodedrag() {
      return a();
    },
    set onnodedrag(pe) {
      a(pe), g();
    },
    get onnodedragstart() {
      return l();
    },
    set onnodedragstart(pe) {
      l(pe), g();
    },
    get onnodedragstop() {
      return c();
    },
    set onnodedragstop(pe) {
      c(pe), g();
    },
    get onnodepointerenter() {
      return d();
    },
    set onnodepointerenter(pe) {
      d(pe), g();
    },
    get onnodepointerleave() {
      return f();
    },
    set onnodepointerleave(pe) {
      f(pe), g();
    },
    get onnodepointermove() {
      return h();
    },
    set onnodepointermove(pe) {
      h(pe), g();
    },
    get onnodecontextmenu() {
      return v();
    },
    set onnodecontextmenu(pe) {
      v(pe), g();
    }
  }, ct = de(), st = Q(ct);
  {
    var Mt = (pe) => {
      var Me = N2();
      Je(Me, () => ({
        "data-id": ee,
        class: [
          "svelte-flow__node",
          `svelte-flow__node-${u(B)}`,
          u(V)
        ],
        style: u(Se),
        onclick: We,
        onpointerenter: d() ? ($e) => d()({ node: u(R), event: $e }) : void 0,
        onpointerleave: f() ? ($e) => f()({ node: u(R), event: $e }) : void 0,
        onpointermove: h() ? ($e) => h()({ node: u(R), event: $e }) : void 0,
        oncontextmenu: v() ? ($e) => v()({ node: u(R), event: $e }) : void 0,
        onkeydown: u(ue) ? Ve : void 0,
        onfocus: u(ue) ? Ue : void 0,
        tabIndex: u(ue) ? 0 : void 0,
        role: r().ariaRole ?? (u(ue) ? "group" : void 0),
        "aria-roledescription": "node",
        "aria-describedby": n().disableKeyboardA11y ? void 0 : `${lg}-${n().flowId}`,
        ...r().domAttributes,
        [mr]: {
          dragging: u(O),
          selected: u(y),
          draggable: u(K),
          connectable: u(ne),
          selectable: u(U),
          nopan: u(K),
          parent: u(oe)
        },
        [An]: {
          "z-index": u(D),
          transform: `translate(${u(j) ?? ""}px, ${u(G) ?? ""}px)`,
          visibility: u(H) ? "visible" : "hidden"
        }
      }));
      var Ge = q(Me);
      St(Ge, () => u(Oe), ($e, nt) => {
        nt($e, {
          get data() {
            return u(m);
          },
          get id() {
            return ee;
          },
          get selected() {
            return u(y);
          },
          get selectable() {
            return u(U);
          },
          get deletable() {
            return u(k);
          },
          get sourcePosition() {
            return u(T);
          },
          get targetPosition() {
            return u(E);
          },
          get zIndex() {
            return u(D);
          },
          get dragging() {
            return u(O);
          },
          get draggable() {
            return u(K);
          },
          get dragHandle() {
            return u(X);
          },
          get parentId() {
            return u($);
          },
          get type() {
            return u(B);
          },
          get isConnectable() {
            return u(ne);
          },
          get positionAbsoluteX() {
            return u(j);
          },
          get positionAbsoluteY() {
            return u(G);
          },
          get width() {
            return u(L);
          },
          get height() {
            return u(Z);
          }
        });
      }), Y(Me), It(Me, ($e, nt) => sg?.($e, nt), () => ({
        nodeId: ee,
        isSelectable: u(U),
        disabled: !u(K),
        handleSelector: u(X),
        noDragClass: n().noDragClass,
        nodeClickDistance: i(),
        onNodeMouseDown: n().handleNodeSelection,
        onDrag: ($e, nt, ft, ut) => {
          a()?.({ event: $e, targetNode: ft, nodes: ut });
        },
        onDragStart: ($e, nt, ft, ut) => {
          l()?.({ event: $e, targetNode: ft, nodes: ut });
        },
        onDragStop: ($e, nt, ft, ut) => {
          c()?.({ event: $e, targetNode: ft, nodes: ut });
        },
        store: n()
      })), Tt(Me, ($e) => W(fe, $e), () => u(fe)), A(pe, Me);
    };
    se(st, (pe) => {
      u(x) || pe(Mt);
    });
  }
  return A(t, ct), ce(ot);
}
ie(
  ug,
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
var O2 = /* @__PURE__ */ re('<div class="svelte-flow__nodes"></div>');
function dg(t, e) {
  le(e, !0);
  let n = p(e, "store", 15), r = p(e, "nodeClickDistance", 7), o = p(e, "onnodeclick", 7), i = p(e, "onnodecontextmenu", 7), s = p(e, "onnodepointerenter", 7), a = p(e, "onnodepointermove", 7), l = p(e, "onnodepointerleave", 7), c = p(e, "onnodedrag", 7), d = p(e, "onnodedragstart", 7), f = p(e, "onnodedragstop", 7);
  const h = typeof ResizeObserver > "u" ? null : new ResizeObserver((y) => {
    const w = /* @__PURE__ */ new Map();
    y.forEach((b) => {
      const k = b.target.getAttribute("data-id");
      w.set(k, { id: k, nodeElement: b.target, force: !0 });
    }), n().updateNodeInternals(w);
  });
  xi(() => {
    h?.disconnect();
  });
  var v = {
    get store() {
      return n();
    },
    set store(y) {
      n(y), g();
    },
    get nodeClickDistance() {
      return r();
    },
    set nodeClickDistance(y) {
      r(y), g();
    },
    get onnodeclick() {
      return o();
    },
    set onnodeclick(y) {
      o(y), g();
    },
    get onnodecontextmenu() {
      return i();
    },
    set onnodecontextmenu(y) {
      i(y), g();
    },
    get onnodepointerenter() {
      return s();
    },
    set onnodepointerenter(y) {
      s(y), g();
    },
    get onnodepointermove() {
      return a();
    },
    set onnodepointermove(y) {
      a(y), g();
    },
    get onnodepointerleave() {
      return l();
    },
    set onnodepointerleave(y) {
      l(y), g();
    },
    get onnodedrag() {
      return c();
    },
    set onnodedrag(y) {
      c(y), g();
    },
    get onnodedragstart() {
      return d();
    },
    set onnodedragstart(y) {
      d(y), g();
    },
    get onnodedragstop() {
      return f();
    },
    set onnodedragstop(y) {
      f(y), g();
    }
  }, m = O2();
  return Ct(m, 21, () => n().visible.nodes.values(), (y) => y.id, (y, w) => {
    ug(y, {
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
  }), Y(m), A(t, m), ce(v);
}
ie(
  dg,
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
var A2 = /* @__PURE__ */ _e('<svg class="svelte-flow__edge-wrapper"><g><!></g></svg>');
function fg(t, e) {
  le(e, !0);
  const n = p(e, "edge", 7), r = p(e, "store", 15), o = p(e, "onedgeclick", 7), i = p(e, "onedgecontextmenu", 7), s = p(e, "onedgepointerenter", 7), a = p(e, "onedgepointerleave", 7);
  let l = /* @__PURE__ */ P(() => n().source), c = /* @__PURE__ */ P(() => n().target), d = /* @__PURE__ */ P(() => n().sourceX), f = /* @__PURE__ */ P(() => n().sourceY), h = /* @__PURE__ */ P(() => n().targetX), v = /* @__PURE__ */ P(() => n().targetY), m = /* @__PURE__ */ P(() => n().sourcePosition), y = /* @__PURE__ */ P(() => n().targetPosition), w = /* @__PURE__ */ P(() => Ht(n().animated, !1)), b = /* @__PURE__ */ P(() => Ht(n().selected, !1)), k = /* @__PURE__ */ P(() => n().label), S = /* @__PURE__ */ P(() => n().labelStyle), _ = /* @__PURE__ */ P(() => Ht(n().data, () => ({}), !0)), x = /* @__PURE__ */ P(() => n().style), O = /* @__PURE__ */ P(() => n().interactionWidth), z = /* @__PURE__ */ P(() => Ht(n().type, "default")), V = /* @__PURE__ */ P(() => n().sourceHandle), B = /* @__PURE__ */ P(() => n().targetHandle), $ = /* @__PURE__ */ P(() => n().markerStart), T = /* @__PURE__ */ P(() => n().markerEnd), E = /* @__PURE__ */ P(() => n().selectable), M = /* @__PURE__ */ P(() => n().focusable), C = /* @__PURE__ */ P(() => Ht(n().deletable, !0)), N = /* @__PURE__ */ P(() => n().hidden), I = /* @__PURE__ */ P(() => n().zIndex), L = /* @__PURE__ */ P(() => n().class), Z = /* @__PURE__ */ P(() => n().ariaLabel), X = null;
  const { id: D } = n();
  qr("svelteflow__edge_id", D);
  let j = /* @__PURE__ */ P(() => u(E) ?? r().elementsSelectable), G = /* @__PURE__ */ P(() => u(M) ?? r().edgesFocusable), R = /* @__PURE__ */ P(() => r().edgeTypes[u(z)] ?? wc), ee = /* @__PURE__ */ P(() => u($) ? `url('#${ll(u($), r().flowId)}')` : void 0), K = /* @__PURE__ */ P(() => u(T) ? `url('#${ll(u(T), r().flowId)}')` : void 0);
  function U(oe) {
    const fe = r().edgeLookup.get(D);
    fe && (u(j) && r().handleEdgeSelection(D), o()?.({ event: oe, edge: fe }));
  }
  function ne(oe, fe) {
    const ye = r().edgeLookup.get(D);
    ye && fe({ event: oe, edge: ye });
  }
  function H(oe) {
    if (!r().disableKeyboardA11y && xh.includes(oe.key) && u(j)) {
      const { unselectNodesAndEdges: fe, addSelectedEdges: ye } = r();
      oe.key === "Escape" ? (X?.blur(), fe({ edges: [n()] })) : ye([D]);
    }
  }
  var te = {
    get edge() {
      return n();
    },
    set edge(oe) {
      n(oe), g();
    },
    get store() {
      return r();
    },
    set store(oe) {
      r(oe), g();
    },
    get onedgeclick() {
      return o();
    },
    set onedgeclick(oe) {
      o(oe), g();
    },
    get onedgecontextmenu() {
      return i();
    },
    set onedgecontextmenu(oe) {
      i(oe), g();
    },
    get onedgepointerenter() {
      return s();
    },
    set onedgepointerenter(oe) {
      s(oe), g();
    },
    get onedgepointerleave() {
      return a();
    },
    set onedgepointerleave(oe) {
      a(oe), g();
    }
  }, xe = de(), ue = Q(xe);
  {
    var ae = (oe) => {
      var fe = A2();
      let ye;
      var ke = q(fe);
      Je(ke, () => ({
        class: ["svelte-flow__edge", u(L)],
        "data-id": D,
        onclick: U,
        oncontextmenu: i() ? (me) => {
          ne(me, i());
        } : void 0,
        onpointerenter: s() ? (me) => {
          ne(me, s());
        } : void 0,
        onpointerleave: a() ? (me) => {
          ne(me, a());
        } : void 0,
        "aria-label": u(Z) === null ? void 0 : u(Z) ? u(Z) : `Edge from ${u(l)} to ${u(c)}`,
        "aria-describedby": u(G) ? `${cg}-${r().flowId}` : void 0,
        role: n().ariaRole ?? (u(G) ? "group" : "img"),
        "aria-roledescription": "edge",
        onkeydown: u(G) ? H : void 0,
        tabindex: u(G) ? 0 : void 0,
        ...n().domAttributes,
        [mr]: {
          animated: u(w),
          selected: u(b),
          selectable: u(j)
        }
      }));
      var he = q(ke);
      St(he, () => u(R), (me, Oe) => {
        Oe(me, {
          get id() {
            return D;
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
            return u(v);
          },
          get sourcePosition() {
            return u(m);
          },
          get targetPosition() {
            return u(y);
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
            return u(S);
          },
          get data() {
            return u(_);
          },
          get style() {
            return u(x);
          },
          get interactionWidth() {
            return u(O);
          },
          get selectable() {
            return u(j);
          },
          get deletable() {
            return u(C);
          },
          get type() {
            return u(z);
          },
          get sourceHandleId() {
            return u(V);
          },
          get targetHandleId() {
            return u(B);
          },
          get markerStart() {
            return u(ee);
          },
          get markerEnd() {
            return u(K);
          }
        });
      }), Y(ke), Tt(ke, (me) => X = me, () => X), Y(fe), Te(() => ye = At(fe, "", ye, { "z-index": u(I) })), A(oe, fe);
    };
    se(ue, (oe) => {
      u(N) || oe(ae);
    });
  }
  return A(t, xe), ce(te);
}
ie(
  fg,
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
mm();
var T2 = /* @__PURE__ */ _e("<defs></defs>");
function hg(t, e) {
  le(e, !1);
  const n = Sn();
  rc();
  var r = T2();
  Ct(r, 5, () => n.markers, (o) => o.id, (o, i) => {
    gg(o, Fe(() => u(i)));
  }), Y(r), A(t, r), ce();
}
ie(hg, {}, [], [], !0);
var M2 = /* @__PURE__ */ _e('<polyline class="arrow" fill="none" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4"></polyline>'), D2 = /* @__PURE__ */ _e('<polyline class="arrowclosed" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), I2 = /* @__PURE__ */ _e('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function gg(t, e) {
  le(e, !0);
  let n = p(e, "id", 7), r = p(e, "type", 7), o = p(e, "width", 7, 12.5), i = p(e, "height", 7, 12.5), s = p(e, "markerUnits", 7, "strokeWidth"), a = p(e, "orient", 7, "auto-start-reverse"), l = p(e, "color", 7, "none"), c = p(e, "strokeWidth", 7);
  var d = {
    get id() {
      return n();
    },
    set id(y) {
      n(y), g();
    },
    get type() {
      return r();
    },
    set type(y) {
      r(y), g();
    },
    get width() {
      return o();
    },
    set width(y = 12.5) {
      o(y), g();
    },
    get height() {
      return i();
    },
    set height(y = 12.5) {
      i(y), g();
    },
    get markerUnits() {
      return s();
    },
    set markerUnits(y = "strokeWidth") {
      s(y), g();
    },
    get orient() {
      return a();
    },
    set orient(y = "auto-start-reverse") {
      a(y), g();
    },
    get color() {
      return l();
    },
    set color(y = "none") {
      l(y), g();
    },
    get strokeWidth() {
      return c();
    },
    set strokeWidth(y) {
      c(y), g();
    }
  }, f = I2(), h = q(f);
  {
    var v = (y) => {
      var w = M2();
      let b;
      Te(() => {
        Ne(w, "stroke-width", c()), b = At(w, "", b, { stroke: l() });
      }), A(y, w);
    }, m = (y) => {
      var w = de(), b = Q(w);
      {
        var k = (S) => {
          var _ = D2();
          let x;
          Te(() => {
            Ne(_, "stroke-width", c()), x = At(_, "", x, { stroke: l(), fill: l() });
          }), A(S, _);
        };
        se(
          b,
          (S) => {
            r() === ci.ArrowClosed && S(k);
          },
          !0
        );
      }
      A(y, w);
    };
    se(h, (y) => {
      r() === ci.Arrow ? y(v) : y(m, !1);
    });
  }
  return Y(f), Te(() => {
    Ne(f, "id", n()), Ne(f, "markerWidth", `${o()}`), Ne(f, "markerHeight", `${i()}`), Ne(f, "markerUnits", s()), Ne(f, "orient", a());
  }), A(t, f), ce(d);
}
ie(
  gg,
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
var V2 = /* @__PURE__ */ re('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!></div>');
function pg(t, e) {
  le(e, !0);
  let n = p(e, "store", 15), r = p(e, "onedgeclick", 7), o = p(e, "onedgecontextmenu", 7), i = p(e, "onedgepointerenter", 7), s = p(e, "onedgepointerleave", 7);
  var a = {
    get store() {
      return n();
    },
    set store(h) {
      n(h), g();
    },
    get onedgeclick() {
      return r();
    },
    set onedgeclick(h) {
      r(h), g();
    },
    get onedgecontextmenu() {
      return o();
    },
    set onedgecontextmenu(h) {
      o(h), g();
    },
    get onedgepointerenter() {
      return i();
    },
    set onedgepointerenter(h) {
      i(h), g();
    },
    get onedgepointerleave() {
      return s();
    },
    set onedgepointerleave(h) {
      s(h), g();
    }
  }, l = V2(), c = q(l), d = q(c);
  hg(d, {}), Y(c);
  var f = F(c, 2);
  return Ct(f, 17, () => n().visible.edges.values(), (h) => h.id, (h, v) => {
    fg(h, {
      get edge() {
        return u(v);
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
  }), Y(l), A(t, l), ce(a);
}
ie(
  pg,
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
var z2 = /* @__PURE__ */ re('<div class="svelte-flow__selection svelte-1rrpn9s"></div>');
const L2 = {
  hash: "svelte-1rrpn9s",
  code: ".svelte-flow__selection.svelte-1rrpn9s {position:absolute;top:0;left:0;}"
};
function bc(t, e) {
  le(e, !0), Qe(t, L2);
  let n = p(e, "x", 7, 0), r = p(e, "y", 7, 0), o = p(e, "width", 7, 0), i = p(e, "height", 7, 0), s = p(e, "isVisible", 7, !0);
  var a = {
    get x() {
      return n();
    },
    set x(f = 0) {
      n(f), g();
    },
    get y() {
      return r();
    },
    set y(f = 0) {
      r(f), g();
    },
    get width() {
      return o();
    },
    set width(f = 0) {
      o(f), g();
    },
    get height() {
      return i();
    },
    set height(f = 0) {
      i(f), g();
    },
    get isVisible() {
      return s();
    },
    set isVisible(f = !0) {
      s(f), g();
    }
  }, l = de(), c = Q(l);
  {
    var d = (f) => {
      var h = z2();
      let v;
      Te((m) => v = At(h, "", v, m), [
        () => ({
          width: typeof o() == "string" ? o() : Hn(o()),
          height: typeof i() == "string" ? i() : Hn(i()),
          transform: `translate(${n()}px, ${r()}px)`
        })
      ]), A(f, h);
    };
    se(c, (f) => {
      s() && f(d);
    });
  }
  return A(t, l), ce(a);
}
ie(bc, { x: {}, y: {}, width: {}, height: {}, isVisible: {} }, [], [], !0);
var H2 = /* @__PURE__ */ re("<div><!></div>");
const R2 = {
  hash: "svelte-ceq0zw",
  code: `.svelte-flow__selection-wrapper.svelte-ceq0zw {position:absolute;top:0;left:0;z-index:2000;pointer-events:all;}.svelte-flow__selection-wrapper.svelte-ceq0zw:focus,
  .svelte-flow__selection-wrapper.svelte-ceq0zw:focus-visible {outline:none;}`
};
function vg(t, e) {
  le(e, !0), Qe(t, R2);
  let n = p(e, "store", 15), r = p(e, "onnodedrag", 7), o = p(e, "onnodedragstart", 7), i = p(e, "onnodedragstop", 7), s = p(e, "onselectionclick", 7), a = p(e, "onselectioncontextmenu", 7), l = /* @__PURE__ */ ve(void 0);
  He(() => {
    n().disableKeyboardA11y || u(l)?.focus({ preventScroll: !0 });
  });
  let c = /* @__PURE__ */ P(() => {
    if (n().selectionRectMode === "nodes") {
      n().nodes;
      const b = Si(n().nodeLookup, { filter: (k) => !!k.selected });
      if (b.width > 0 && b.height > 0)
        return b;
    }
    return null;
  });
  function d(b) {
    const k = n().nodes.filter((S) => S.selected);
    a()?.({ nodes: k, event: b });
  }
  function f(b) {
    const k = n().nodes.filter((S) => S.selected);
    s()?.({ nodes: k, event: b });
  }
  function h(b) {
    Object.prototype.hasOwnProperty.call(Os, b.key) && (b.preventDefault(), n().moveSelectedNodes(Os[b.key], b.shiftKey ? 4 : 1));
  }
  var v = {
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
  }, m = de(), y = Q(m);
  {
    var w = (b) => {
      var k = H2();
      k.__contextmenu = d, k.__click = f, k.__keydown = function(...x) {
        (n().disableKeyboardA11y ? void 0 : h)?.apply(this, x);
      };
      let S;
      var _ = q(k);
      bc(_, { width: "100%", height: "100%", x: 0, y: 0 }), Y(k), It(k, (x, O) => sg?.(x, O), () => ({
        disabled: !1,
        store: n(),
        onDrag: (x, O, z, V) => {
          r()?.({ event: x, targetNode: null, nodes: V });
        },
        onDragStart: (x, O, z, V) => {
          o()?.({ event: x, targetNode: null, nodes: V });
        },
        onDragStop: (x, O, z, V) => {
          i()?.({ event: x, targetNode: null, nodes: V });
        }
      })), Tt(k, (x) => W(l, x), () => u(l)), Te(
        (x) => {
          Gt(k, 1, fr(["svelte-flow__selection-wrapper", n().noPanClass]), "svelte-ceq0zw"), Ne(k, "role", n().disableKeyboardA11y ? void 0 : "button"), Ne(k, "tabindex", n().disableKeyboardA11y ? void 0 : -1), S = At(k, "", S, x);
        },
        [
          () => ({
            width: Hn(u(c).width),
            height: Hn(u(c).height),
            transform: `translate(${u(c).x ?? ""}px, ${u(c).y ?? ""}px)`
          })
        ]
      ), A(b, k);
    };
    se(y, (b) => {
      n().selectionRectMode === "nodes" && u(c) && Un(u(c).x) && Un(u(c).y) && b(w);
    });
  }
  return A(t, m), ce(v);
}
io(["contextmenu", "click", "keydown"]);
ie(
  vg,
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
function F2(t) {
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
function Pn(t, e) {
  let { enabled: n = !0, trigger: r, type: o = "keydown" } = e;
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
      }, { modifier: h, key: v, callback: m, preventDefault: y, enabled: w } = f;
      if (w) {
        if (a.key !== v) continue;
        if (h === null || h === !1) {
          if (c !== 0) continue;
        } else if (h !== void 0 && h?.[0]?.length > 0) {
          const k = Array.isArray(h) ? h : [h];
          let S = !1;
          for (const _ of k)
            if ((Array.isArray(_) ? _ : [_]).reduce(
              (O, z) => O | F2(z),
              0
            ) === c) {
              S = !0;
              break;
            }
          if (!S) continue;
        }
        y && a.preventDefault();
        const b = {
          node: t,
          trigger: f,
          originalEvent: a
        };
        t.dispatchEvent(new CustomEvent("shortcut", { detail: b })), m?.(b);
      }
    }
  }
  let s;
  return n && (s = gt(t, o, i)), {
    update: (a) => {
      const { enabled: l = !0, type: c = "keydown" } = a;
      n && (!l || o !== c) ? s?.() : !n && l && (s = gt(t, c, i)), n = l, o = c, r = a.trigger;
    },
    destroy: () => {
      s?.();
    }
  };
}
function kt() {
  const t = /* @__PURE__ */ P(Sn), e = (i) => {
    const s = qu(i) ? i : u(t).nodeLookup.get(i.id), a = s.parentId ? gb(s.position, s.measured, s.parentId, u(t).nodeLookup, u(t).nodeOrigin) : s.position, l = {
      ...s,
      position: a,
      width: s.measured?.width ?? s.width,
      height: s.measured?.height ?? s.height
    };
    return So(l);
  };
  function n(i, s, a = { replace: !1 }) {
    u(t).nodes = at(() => u(t).nodes).map((l) => {
      if (l.id === i) {
        const c = typeof s == "function" ? s(l) : s;
        return a?.replace && qu(c) ? c : { ...l, ...c };
      }
      return l;
    });
  }
  function r(i, s, a = { replace: !1 }) {
    u(t).edges = at(() => u(t).edges).map((l) => {
      if (l.id === i) {
        const c = typeof s == "function" ? s(l) : s;
        return a.replace && l2(c) ? c : { ...l, ...c };
      }
      return l;
    });
  }
  const o = (i) => u(t).nodeLookup.get(i);
  return {
    zoomIn: u(t).zoomIn,
    zoomOut: u(t).zoomOut,
    getInternalNode: o,
    getNode: (i) => o(i)?.internals.userNode,
    getNodes: (i) => i === void 0 ? u(t).nodes : Ju(u(t).nodeLookup, i),
    getEdge: (i) => u(t).edgeLookup.get(i),
    getEdges: (i) => i === void 0 ? u(t).edges : Ju(u(t).edgeLookup, i),
    setZoom: (i, s) => {
      const a = u(t).panZoom;
      return a ? a.scaleTo(i, { duration: s?.duration }) : Promise.resolve(!1);
    },
    getZoom: () => u(t).viewport.zoom,
    setViewport: async (i, s) => {
      const a = u(t).viewport;
      return u(t).panZoom ? (await u(t).panZoom.setViewport(
        {
          x: i.x ?? a.x,
          y: i.y ?? a.y,
          zoom: i.zoom ?? a.zoom
        },
        s
      ), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    getViewport: () => Yl(u(t).viewport),
    setCenter: async (i, s, a) => u(t).setCenter(i, s, a),
    fitView: (i) => u(t).fitView(i),
    fitBounds: async (i, s) => {
      if (!u(t).panZoom)
        return Promise.resolve(!1);
      const a = hc(i, u(t).width, u(t).height, u(t).minZoom, u(t).maxZoom, s?.padding ?? 0.1);
      return await u(t).panZoom.setViewport(a, {
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
      const l = Vu(i), c = l ? i : e(i);
      return c ? (a || u(t).nodes).filter((d) => {
        const f = u(t).nodeLookup.get(d.id);
        if (!f || !l && d.id === i.id)
          return !1;
        const h = So(f), v = ui(h, c);
        return s && v > 0 || v >= h.width * h.height || v >= c.width * c.height;
      }) : [];
    },
    isNodeIntersecting: (i, s, a = !0) => {
      const c = Vu(i) ? i : e(i);
      if (!c)
        return !1;
      const d = ui(c, s);
      return a && d > 0 || d >= s.width * s.height || d >= c.width * c.height;
    },
    deleteElements: async ({ nodes: i = [], edges: s = [] }) => {
      const { nodes: a, edges: l } = await ub({
        nodesToRemove: i,
        edgesToRemove: s,
        nodes: u(t).nodes,
        edges: u(t).edges,
        onBeforeDelete: u(t).onbeforedelete
      });
      return a && (u(t).nodes = at(() => u(t).nodes).filter((c) => !a.some(({ id: d }) => d === c.id))), l && (u(t).edges = at(() => u(t).edges).filter((c) => !l.some(({ id: d }) => d === c.id))), (a.length > 0 || l.length > 0) && u(t).ondelete?.({ nodes: a, edges: l }), { deletedNodes: a, deletedEdges: l };
    },
    screenToFlowPosition: (i, s = { snapToGrid: !0 }) => {
      if (!u(t).domNode)
        return i;
      const a = s.snapToGrid ? u(t).snapGrid : !1, { x: l, y: c, zoom: d } = u(t).viewport, { x: f, y: h } = u(t).domNode.getBoundingClientRect(), v = { x: i.x - f, y: i.y - h };
      return Pi(v, [l, c, d], a !== null, a || [1, 1]);
    },
    /**
     *
     * @param position
     * @returns
     */
    flowToScreenPosition: (i) => {
      if (!u(t).domNode)
        return i;
      const { x: s, y: a, zoom: l } = u(t).viewport, { x: c, y: d } = u(t).domNode.getBoundingClientRect(), f = Ns(i, [s, a, l]);
      return { x: f.x + c, y: f.y + d };
    },
    toObject: () => structuredClone({
      nodes: [...u(t).nodes],
      edges: [...u(t).edges],
      viewport: { ...u(t).viewport }
    }),
    updateNode: n,
    updateNodeData: (i, s, a) => {
      const l = u(t).nodeLookup.get(i)?.internals.userNode;
      if (!l)
        return;
      const c = typeof s == "function" ? s(l) : s;
      n(i, (d) => ({
        ...d,
        data: a?.replace ? c : { ...d.data, ...c }
      }));
    },
    updateEdge: r,
    getNodesBounds: (i) => sb(i, {
      nodeLookup: u(t).nodeLookup,
      nodeOrigin: u(t).nodeOrigin
    }),
    getHandleConnections: ({ type: i, id: s, nodeId: a }) => Array.from(u(t).connectionLookup.get(`${a}-${i}-${s ?? null}`)?.values() ?? [])
  };
}
function Ju(t, e) {
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
function mg(t, e) {
  le(e, !0);
  let n = p(e, "store", 15), r = p(e, "selectionKey", 7, "Shift"), o = p(e, "multiSelectionKey", 23, () => Fr() ? "Meta" : "Control"), i = p(e, "deleteKey", 7, "Backspace"), s = p(e, "panActivationKey", 7, " "), a = p(e, "zoomActivationKey", 23, () => Fr() ? "Meta" : "Control"), { deleteElements: l } = kt();
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
    return (Array.isArray(w) ? w : [w]).map((S) => {
      const _ = f(S);
      return {
        key: _,
        modifier: d(S),
        enabled: _ !== null,
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
      n(w), g();
    },
    get selectionKey() {
      return r();
    },
    set selectionKey(w = "Shift") {
      r(w), g();
    },
    get multiSelectionKey() {
      return o();
    },
    set multiSelectionKey(w = Fr() ? "Meta" : "Control") {
      o(w), g();
    },
    get deleteKey() {
      return i();
    },
    set deleteKey(w = "Backspace") {
      i(w), g();
    },
    get panActivationKey() {
      return s();
    },
    set panActivationKey(w = " ") {
      s(w), g();
    },
    get zoomActivationKey() {
      return a();
    },
    set zoomActivationKey(w = Fr() ? "Meta" : "Control") {
      a(w), g();
    }
  };
  return ms("blur", Wt, v), ms("contextmenu", Wt, v), It(Wt, (w, b) => Pn?.(w, b), () => ({
    trigger: h(r(), () => n(n().selectionKeyPressed = !0, !0)),
    type: "keydown"
  })), It(Wt, (w, b) => Pn?.(w, b), () => ({
    trigger: h(r(), () => n(n().selectionKeyPressed = !1, !0)),
    type: "keyup"
  })), It(Wt, (w, b) => Pn?.(w, b), () => ({
    trigger: h(o(), () => {
      n(n().multiselectionKeyPressed = !0, !0);
    }),
    type: "keydown"
  })), It(Wt, (w, b) => Pn?.(w, b), () => ({
    trigger: h(o(), () => n(n().multiselectionKeyPressed = !1, !0)),
    type: "keyup"
  })), It(Wt, (w, b) => Pn?.(w, b), () => ({
    trigger: h(i(), (w) => {
      !(w.originalEvent.ctrlKey || w.originalEvent.metaKey || w.originalEvent.shiftKey) && !Ah(w.originalEvent) && (n(n().deleteKeyPressed = !0, !0), m());
    }),
    type: "keydown"
  })), It(Wt, (w, b) => Pn?.(w, b), () => ({
    trigger: h(i(), () => n(n().deleteKeyPressed = !1, !0)),
    type: "keyup"
  })), It(Wt, (w, b) => Pn?.(w, b), () => ({
    trigger: h(s(), () => n(n().panActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), It(Wt, (w, b) => Pn?.(w, b), () => ({
    trigger: h(s(), () => n(n().panActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), It(Wt, (w, b) => Pn?.(w, b), () => ({
    trigger: h(a(), () => n(n().zoomActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), It(Wt, (w, b) => Pn?.(w, b), () => ({
    trigger: h(a(), () => n(n().zoomActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), ce(y);
}
ie(
  mg,
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
var B2 = /* @__PURE__ */ _e('<path fill="none" class="svelte-flow__connection-path"></path>'), $2 = /* @__PURE__ */ _e('<svg class="svelte-flow__connectionline"><g><!></g></svg>');
function yg(t, e) {
  le(e, !0);
  let n = p(e, "store", 15), r = p(e, "type", 7), o = p(e, "containerStyle", 7), i = p(e, "style", 7), s = p(e, "LineComponent", 7), a = /* @__PURE__ */ P(() => {
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
      case jn.Bezier: {
        const [v] = Mh(h);
        return v;
      }
      case jn.Straight: {
        const [v] = Ih(h);
        return v;
      }
      case jn.Step:
      case jn.SmoothStep: {
        const [v] = gc({
          ...h,
          borderRadius: r() === jn.Step ? 0 : void 0
        });
        return v;
      }
    }
  });
  var l = {
    get store() {
      return n();
    },
    set store(h) {
      n(h), g();
    },
    get type() {
      return r();
    },
    set type(h) {
      r(h), g();
    },
    get containerStyle() {
      return o();
    },
    set containerStyle(h) {
      o(h), g();
    },
    get style() {
      return i();
    },
    set style(h) {
      i(h), g();
    },
    get LineComponent() {
      return s();
    },
    set LineComponent(h) {
      s(h), g();
    }
  }, c = de(), d = Q(c);
  {
    var f = (h) => {
      var v = $2(), m = q(v), y = q(m);
      {
        var w = (k) => {
          var S = de(), _ = Q(S);
          St(_, s, (x, O) => {
            O(x, {});
          }), A(k, S);
        }, b = (k) => {
          var S = B2();
          Te(() => {
            Ne(S, "d", u(a)), At(S, i());
          }), A(k, S);
        };
        se(y, (k) => {
          s() ? k(w) : k(b, !1);
        });
      }
      Y(m), Y(v), Te(
        (k) => {
          Ne(v, "width", n().width), Ne(v, "height", n().height), At(v, o()), Gt(m, 0, k);
        },
        [
          () => fr([
            "svelte-flow__connection",
            ob(n().connection.isValid)
          ])
        ]
      ), A(h, v);
    };
    se(d, (h) => {
      n().connection.inProgress && h(f);
    });
  }
  return A(t, c), ce(l);
}
ie(
  yg,
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
var K2 = /* @__PURE__ */ re("<div><!></div>");
function Oi(t, e) {
  le(e, !0);
  let n = p(e, "position", 7, "top-right"), r = p(e, "style", 7), o = p(e, "class", 7), i = p(e, "children", 7), s = /* @__PURE__ */ ze(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "position",
    "style",
    "class",
    "children"
  ]), a = /* @__PURE__ */ P(() => `${n()}`.split("-"));
  var l = {
    get position() {
      return n();
    },
    set position(f = "top-right") {
      n(f), g();
    },
    get style() {
      return r();
    },
    set style(f) {
      r(f), g();
    },
    get class() {
      return o();
    },
    set class(f) {
      o(f), g();
    },
    get children() {
      return i();
    },
    set children(f) {
      i(f), g();
    }
  }, c = K2();
  Je(c, (f) => ({ class: f, style: r(), ...s }), [
    () => ["svelte-flow__panel", o(), ...u(a)]
  ]);
  var d = q(c);
  return Ae(d, () => i() ?? Be), Y(c), A(t, c), ce(l);
}
ie(Oi, { position: {}, style: {}, class: {}, children: {} }, [], [], !0);
var W2 = /* @__PURE__ */ re('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function wg(t, e) {
  le(e, !0);
  let n = p(e, "proOptions", 7), r = p(e, "position", 7, "bottom-right");
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
  }, i = de(), s = Q(i);
  {
    var a = (l) => {
      Oi(l, {
        get position() {
          return r();
        },
        class: "svelte-flow__attribution",
        "data-message": "Feel free to remove the attribution or check out how you could support us: https://svelteflow.dev/support-us",
        children: (c, d) => {
          var f = W2();
          A(c, f);
        },
        $$slots: { default: !0 }
      });
    };
    se(s, (l) => {
      n()?.hideAttribution || l(a);
    });
  }
  return A(t, i), ce(o);
}
ie(wg, { proOptions: {}, position: {} }, [], [], !0);
var Z2 = /* @__PURE__ */ re("<div><!></div>");
const Y2 = {
  hash: "svelte-152mfj7",
  code: ".svelte-flow.svelte-152mfj7 {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;background-color:var(--background-color, var(--background-color-default));}:root {--background-color-default: #fff;--background-pattern-color-default: #ddd;--minimap-mask-color-default: rgb(240, 240, 240, 0.6);--minimap-mask-stroke-color-default: none;--minimap-mask-stroke-width-default: 1;--controls-button-background-color-default: #fefefe;--controls-button-background-color-hover-default: #f4f4f4;--controls-button-color-default: inherit;--controls-button-color-hover-default: inherit;--controls-button-border-color-default: #eee;}"
};
function bg(t, e) {
  le(e, !0), Qe(t, Y2);
  let n = p(e, "width", 7), r = p(e, "height", 7), o = p(e, "colorMode", 7), i = p(e, "domNode", 15), s = p(e, "clientWidth", 15), a = p(e, "clientHeight", 15), l = p(e, "children", 7), c = p(e, "rest", 7), d = /* @__PURE__ */ P(() => c().class), f = /* @__PURE__ */ P(() => Wm(c(), [
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
  var v = {
    get width() {
      return n();
    },
    set width(w) {
      n(w), g();
    },
    get height() {
      return r();
    },
    set height(w) {
      r(w), g();
    },
    get colorMode() {
      return o();
    },
    set colorMode(w) {
      o(w), g();
    },
    get domNode() {
      return i();
    },
    set domNode(w) {
      i(w), g();
    },
    get clientWidth() {
      return s();
    },
    set clientWidth(w) {
      s(w), g();
    },
    get clientHeight() {
      return a();
    },
    set clientHeight(w) {
      a(w), g();
    },
    get children() {
      return l();
    },
    set children(w) {
      l(w), g();
    },
    get rest() {
      return c();
    },
    set rest(w) {
      c(w), g();
    }
  }, m = Z2();
  Je(
    m,
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
      [An]: w
    }),
    [
      () => ({ width: Hn(n()), height: Hn(r()) })
    ],
    void 0,
    void 0,
    "svelte-152mfj7"
  );
  var y = q(m);
  return Ae(y, () => l() ?? Be), Y(m), Tt(m, (w) => i(w), () => i()), du(m, "clientHeight", a), du(m, "clientWidth", s), A(t, m), ce(v);
}
ie(
  bg,
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
var q2 = /* @__PURE__ */ re('<div class="svelte-flow__viewport-back svelte-flow__container"></div> <!> <div class="svelte-flow__edge-labels svelte-flow__container"></div> <!> <!> <!> <div class="svelte-flow__viewport-front svelte-flow__container"></div>', 1), j2 = /* @__PURE__ */ re("<!> <!>", 1), X2 = /* @__PURE__ */ re("<!> <!> <!> <!> <!>", 1);
function xg(t, e) {
  le(e, !0);
  let n = p(e, "width", 7), r = p(e, "height", 7), o = p(e, "proOptions", 7), i = p(e, "selectionKey", 7), s = p(e, "deleteKey", 7), a = p(e, "panActivationKey", 7), l = p(e, "multiSelectionKey", 7), c = p(e, "zoomActivationKey", 7), d = p(e, "paneClickDistance", 7, 1), f = p(e, "nodeClickDistance", 7, 1), h = p(e, "onmovestart", 7), v = p(e, "onmoveend", 7), m = p(e, "onmove", 7), y = p(e, "oninit", 7), w = p(e, "onnodeclick", 7), b = p(e, "onnodecontextmenu", 7), k = p(e, "onnodedrag", 7), S = p(e, "onnodedragstart", 7), _ = p(e, "onnodedragstop", 7), x = p(e, "onnodepointerenter", 7), O = p(e, "onnodepointermove", 7), z = p(e, "onnodepointerleave", 7), V = p(e, "onselectionclick", 7), B = p(e, "onselectioncontextmenu", 7), $ = p(e, "onselectionstart", 7), T = p(e, "onselectionend", 7), E = p(e, "onedgeclick", 7), M = p(e, "onedgecontextmenu", 7), C = p(e, "onedgepointerenter", 7), N = p(e, "onedgepointerleave", 7), I = p(e, "onpaneclick", 7), L = p(e, "onpanecontextmenu", 7), Z = p(e, "panOnScrollMode", 23, () => Wr.Free), X = p(e, "preventScrolling", 7, !0), D = p(e, "zoomOnScroll", 7, !0), j = p(e, "zoomOnDoubleClick", 7, !0), G = p(e, "zoomOnPinch", 7, !0), R = p(e, "panOnScroll", 7, !1), ee = p(e, "panOnScrollSpeed", 7, 0.5), K = p(e, "panOnDrag", 7, !0), U = p(e, "selectionOnDrag", 7, !1), ne = p(e, "connectionLineComponent", 7), H = p(e, "connectionLineStyle", 7), te = p(e, "connectionLineContainerStyle", 7), xe = p(e, "connectionLineType", 23, () => jn.Bezier), ue = p(e, "attributionPosition", 7), ae = p(e, "children", 7), oe = p(e, "nodes", 31, () => ht([])), fe = p(e, "edges", 31, () => ht([])), ye = p(e, "viewport", 31, () => {
  }), ke = /* @__PURE__ */ ze(e, [
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
  ]), he = ng({
    props: ke,
    width: n(),
    height: r(),
    get nodes() {
      return oe();
    },
    set nodes(J) {
      oe(J);
    },
    get edges() {
      return fe();
    },
    set edges(J) {
      fe(J);
    },
    get viewport() {
      return ye();
    },
    set viewport(J) {
      ye(J);
    }
  });
  const me = bn(As);
  me && me.setStore && me.setStore(he), qr(As, {
    provider: !1,
    getStore() {
      return he;
    }
  }), He(() => {
    const J = { nodes: he.selectedNodes, edges: he.selectedEdges };
    at(() => e.onselectionchange)?.(J);
    for (const Re of he.selectionChangeHandlers.values())
      Re(J);
  }), xi(() => {
    he.reset();
  });
  var Oe = {
    get width() {
      return n();
    },
    set width(J) {
      n(J), g();
    },
    get height() {
      return r();
    },
    set height(J) {
      r(J), g();
    },
    get proOptions() {
      return o();
    },
    set proOptions(J) {
      o(J), g();
    },
    get selectionKey() {
      return i();
    },
    set selectionKey(J) {
      i(J), g();
    },
    get deleteKey() {
      return s();
    },
    set deleteKey(J) {
      s(J), g();
    },
    get panActivationKey() {
      return a();
    },
    set panActivationKey(J) {
      a(J), g();
    },
    get multiSelectionKey() {
      return l();
    },
    set multiSelectionKey(J) {
      l(J), g();
    },
    get zoomActivationKey() {
      return c();
    },
    set zoomActivationKey(J) {
      c(J), g();
    },
    get paneClickDistance() {
      return d();
    },
    set paneClickDistance(J = 1) {
      d(J), g();
    },
    get nodeClickDistance() {
      return f();
    },
    set nodeClickDistance(J = 1) {
      f(J), g();
    },
    get onmovestart() {
      return h();
    },
    set onmovestart(J) {
      h(J), g();
    },
    get onmoveend() {
      return v();
    },
    set onmoveend(J) {
      v(J), g();
    },
    get onmove() {
      return m();
    },
    set onmove(J) {
      m(J), g();
    },
    get oninit() {
      return y();
    },
    set oninit(J) {
      y(J), g();
    },
    get onnodeclick() {
      return w();
    },
    set onnodeclick(J) {
      w(J), g();
    },
    get onnodecontextmenu() {
      return b();
    },
    set onnodecontextmenu(J) {
      b(J), g();
    },
    get onnodedrag() {
      return k();
    },
    set onnodedrag(J) {
      k(J), g();
    },
    get onnodedragstart() {
      return S();
    },
    set onnodedragstart(J) {
      S(J), g();
    },
    get onnodedragstop() {
      return _();
    },
    set onnodedragstop(J) {
      _(J), g();
    },
    get onnodepointerenter() {
      return x();
    },
    set onnodepointerenter(J) {
      x(J), g();
    },
    get onnodepointermove() {
      return O();
    },
    set onnodepointermove(J) {
      O(J), g();
    },
    get onnodepointerleave() {
      return z();
    },
    set onnodepointerleave(J) {
      z(J), g();
    },
    get onselectionclick() {
      return V();
    },
    set onselectionclick(J) {
      V(J), g();
    },
    get onselectioncontextmenu() {
      return B();
    },
    set onselectioncontextmenu(J) {
      B(J), g();
    },
    get onselectionstart() {
      return $();
    },
    set onselectionstart(J) {
      $(J), g();
    },
    get onselectionend() {
      return T();
    },
    set onselectionend(J) {
      T(J), g();
    },
    get onedgeclick() {
      return E();
    },
    set onedgeclick(J) {
      E(J), g();
    },
    get onedgecontextmenu() {
      return M();
    },
    set onedgecontextmenu(J) {
      M(J), g();
    },
    get onedgepointerenter() {
      return C();
    },
    set onedgepointerenter(J) {
      C(J), g();
    },
    get onedgepointerleave() {
      return N();
    },
    set onedgepointerleave(J) {
      N(J), g();
    },
    get onpaneclick() {
      return I();
    },
    set onpaneclick(J) {
      I(J), g();
    },
    get onpanecontextmenu() {
      return L();
    },
    set onpanecontextmenu(J) {
      L(J), g();
    },
    get panOnScrollMode() {
      return Z();
    },
    set panOnScrollMode(J = Wr.Free) {
      Z(J), g();
    },
    get preventScrolling() {
      return X();
    },
    set preventScrolling(J = !0) {
      X(J), g();
    },
    get zoomOnScroll() {
      return D();
    },
    set zoomOnScroll(J = !0) {
      D(J), g();
    },
    get zoomOnDoubleClick() {
      return j();
    },
    set zoomOnDoubleClick(J = !0) {
      j(J), g();
    },
    get zoomOnPinch() {
      return G();
    },
    set zoomOnPinch(J = !0) {
      G(J), g();
    },
    get panOnScroll() {
      return R();
    },
    set panOnScroll(J = !1) {
      R(J), g();
    },
    get panOnScrollSpeed() {
      return ee();
    },
    set panOnScrollSpeed(J = 0.5) {
      ee(J), g();
    },
    get panOnDrag() {
      return K();
    },
    set panOnDrag(J = !0) {
      K(J), g();
    },
    get selectionOnDrag() {
      return U();
    },
    set selectionOnDrag(J = !1) {
      U(J), g();
    },
    get connectionLineComponent() {
      return ne();
    },
    set connectionLineComponent(J) {
      ne(J), g();
    },
    get connectionLineStyle() {
      return H();
    },
    set connectionLineStyle(J) {
      H(J), g();
    },
    get connectionLineContainerStyle() {
      return te();
    },
    set connectionLineContainerStyle(J) {
      te(J), g();
    },
    get connectionLineType() {
      return xe();
    },
    set connectionLineType(J = jn.Bezier) {
      xe(J), g();
    },
    get attributionPosition() {
      return ue();
    },
    set attributionPosition(J) {
      ue(J), g();
    },
    get children() {
      return ae();
    },
    set children(J) {
      ae(J), g();
    },
    get nodes() {
      return oe();
    },
    set nodes(J = []) {
      oe(J), g();
    },
    get edges() {
      return fe();
    },
    set edges(J = []) {
      fe(J), g();
    },
    get viewport() {
      return ye();
    },
    set viewport(J = void 0) {
      ye(J), g();
    }
  };
  return bg(t, {
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
      return ke;
    },
    get domNode() {
      return he.domNode;
    },
    set domNode(J) {
      he.domNode = J;
    },
    get clientWidth() {
      return he.width;
    },
    set clientWidth(J) {
      he.width = J;
    },
    get clientHeight() {
      return he.height;
    },
    set clientHeight(J) {
      he.height = J;
    },
    children: (J, Re) => {
      var Se = X2(), We = Q(Se);
      mg(We, {
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
          return he;
        },
        set store(st) {
          he = st;
        }
      });
      var Ve = F(We, 2);
      rg(Ve, {
        get panOnScrollMode() {
          return Z();
        },
        get preventScrolling() {
          return X();
        },
        get zoomOnScroll() {
          return D();
        },
        get zoomOnDoubleClick() {
          return j();
        },
        get zoomOnPinch() {
          return G();
        },
        get panOnScroll() {
          return R();
        },
        get panOnScrollSpeed() {
          return ee();
        },
        get panOnDrag() {
          return K();
        },
        get paneClickDistance() {
          return d();
        },
        get selectionOnDrag() {
          return U();
        },
        get onmovestart() {
          return h();
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
        set store(st) {
          he = st;
        },
        children: (st, Mt) => {
          og(st, {
            get onpaneclick() {
              return I();
            },
            get onpanecontextmenu() {
              return L();
            },
            get onselectionstart() {
              return $();
            },
            get onselectionend() {
              return T();
            },
            get panOnDrag() {
              return K();
            },
            get paneClickDistance() {
              return d();
            },
            get selectionOnDrag() {
              return U();
            },
            get store() {
              return he;
            },
            set store(pe) {
              he = pe;
            },
            children: (pe, Me) => {
              var Ge = j2(), $e = Q(Ge);
              ig($e, {
                get store() {
                  return he;
                },
                set store(ft) {
                  he = ft;
                },
                children: (ft, ut) => {
                  var Dt = q2(), vt = F(Q(Dt), 2);
                  pg(vt, {
                    get onedgeclick() {
                      return E();
                    },
                    get onedgecontextmenu() {
                      return M();
                    },
                    get onedgepointerenter() {
                      return C();
                    },
                    get onedgepointerleave() {
                      return N();
                    },
                    get store() {
                      return he;
                    },
                    set store(lt) {
                      he = lt;
                    }
                  });
                  var mt = F(vt, 4);
                  yg(mt, {
                    get type() {
                      return xe();
                    },
                    get LineComponent() {
                      return ne();
                    },
                    get containerStyle() {
                      return te();
                    },
                    get style() {
                      return H();
                    },
                    get store() {
                      return he;
                    },
                    set store(lt) {
                      he = lt;
                    }
                  });
                  var $t = F(mt, 2);
                  dg($t, {
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
                      return x();
                    },
                    get onnodepointermove() {
                      return O();
                    },
                    get onnodepointerleave() {
                      return z();
                    },
                    get onnodedrag() {
                      return k();
                    },
                    get onnodedragstart() {
                      return S();
                    },
                    get onnodedragstop() {
                      return _();
                    },
                    get store() {
                      return he;
                    },
                    set store(lt) {
                      he = lt;
                    }
                  });
                  var zo = F($t, 2);
                  vg(zo, {
                    get onselectionclick() {
                      return V();
                    },
                    get onselectioncontextmenu() {
                      return B();
                    },
                    get onnodedrag() {
                      return k();
                    },
                    get onnodedragstart() {
                      return S();
                    },
                    get onnodedragstop() {
                      return _();
                    },
                    get store() {
                      return he;
                    },
                    set store(lt) {
                      he = lt;
                    }
                  }), Ee(2), A(ft, Dt);
                },
                $$slots: { default: !0 }
              });
              var nt = F($e, 2);
              {
                let ft = /* @__PURE__ */ P(() => !!(he.selectionRect && he.selectionRectMode === "user")), ut = /* @__PURE__ */ P(() => he.selectionRect?.width), Dt = /* @__PURE__ */ P(() => he.selectionRect?.height), vt = /* @__PURE__ */ P(() => he.selectionRect?.x), mt = /* @__PURE__ */ P(() => he.selectionRect?.y);
                bc(nt, {
                  get isVisible() {
                    return u(ft);
                  },
                  get width() {
                    return u(ut);
                  },
                  get height() {
                    return u(Dt);
                  },
                  get x() {
                    return u(vt);
                  },
                  get y() {
                    return u(mt);
                  }
                });
              }
              A(pe, Ge);
            },
            $$slots: { default: !0 }
          });
        },
        $$slots: { default: !0 }
      });
      var Ue = F(Ve, 2);
      wg(Ue, {
        get proOptions() {
          return o();
        },
        get position() {
          return ue();
        }
      });
      var ot = F(Ue, 2);
      ag(ot, {
        get store() {
          return he;
        }
      });
      var ct = F(ot, 2);
      Ae(ct, () => ae() ?? Be), A(J, Se);
    },
    $$slots: { default: !0 }
  }), ce(Oe);
}
ie(
  xg,
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
function _g(t, e) {
  le(e, !0);
  let n = p(e, "children", 7), r = /* @__PURE__ */ ve(ng({ props: {}, nodes: [], edges: [] }));
  qr(As, {
    provider: !0,
    getStore() {
      return u(r);
    },
    setStore: (a) => {
      W(r, a);
    }
  }), xi(() => {
    u(r).reset();
  });
  var o = {
    get children() {
      return n();
    },
    set children(a) {
      n(a), g();
    }
  }, i = de(), s = Q(i);
  return Ae(s, () => n() ?? Be), A(t, i), ce(o);
}
ie(_g, { children: {} }, [], [], !0);
var U2 = /* @__PURE__ */ re("<button><!></button>");
function qo(t, e) {
  le(e, !0);
  let n = p(e, "class", 7), r = p(e, "bgColor", 7), o = p(e, "bgColorHover", 7), i = p(e, "color", 7), s = p(e, "colorHover", 7), a = p(e, "borderColor", 7), l = p(e, "onclick", 7), c = p(e, "children", 7), d = /* @__PURE__ */ ze(e, [
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
    set class(m) {
      n(m), g();
    },
    get bgColor() {
      return r();
    },
    set bgColor(m) {
      r(m), g();
    },
    get bgColorHover() {
      return o();
    },
    set bgColorHover(m) {
      o(m), g();
    },
    get color() {
      return i();
    },
    set color(m) {
      i(m), g();
    },
    get colorHover() {
      return s();
    },
    set colorHover(m) {
      s(m), g();
    },
    get borderColor() {
      return a();
    },
    set borderColor(m) {
      a(m), g();
    },
    get onclick() {
      return l();
    },
    set onclick(m) {
      l(m), g();
    },
    get children() {
      return c();
    },
    set children(m) {
      c(m), g();
    }
  }, h = U2();
  Je(h, () => ({
    type: "button",
    onclick: l(),
    class: ["svelte-flow__controls-button", n()],
    ...d,
    [An]: {
      "--xy-controls-button-background-color-props": r(),
      "--xy-controls-button-background-color-hover-props": o(),
      "--xy-controls-button-color-props": i(),
      "--xy-controls-button-color-hover-props": s(),
      "--xy-controls-button-border-color-props": a()
    }
  }));
  var v = q(h);
  return Ae(v, () => c() ?? Be), Y(h), A(t, h), ce(f);
}
ie(
  qo,
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
var G2 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function Cg(t) {
  var e = G2();
  A(t, e);
}
ie(Cg, {}, [], [], !0);
var J2 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function kg(t) {
  var e = J2();
  A(t, e);
}
ie(kg, {}, [], [], !0);
var Q2 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function Sg(t) {
  var e = Q2();
  A(t, e);
}
ie(Sg, {}, [], [], !0);
var ex = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function Eg(t) {
  var e = ex();
  A(t, e);
}
ie(Eg, {}, [], [], !0);
var tx = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function Pg(t) {
  var e = tx();
  A(t, e);
}
ie(Pg, {}, [], [], !0);
var nx = /* @__PURE__ */ re("<!> <!>", 1), rx = /* @__PURE__ */ re("<!> <!> <!> <!> <!> <!>", 1);
function Ng(t, e) {
  le(e, !0);
  let n = p(e, "position", 7, "bottom-left"), r = p(e, "orientation", 7, "vertical"), o = p(e, "showZoom", 7, !0), i = p(e, "showFitView", 7, !0), s = p(e, "showLock", 7, !0), a = p(e, "style", 7), l = p(e, "class", 7), c = p(e, "buttonBgColor", 7), d = p(e, "buttonBgColorHover", 7), f = p(e, "buttonColor", 7), h = p(e, "buttonColorHover", 7), v = p(e, "buttonBorderColor", 7), m = p(e, "fitViewOptions", 7), y = p(e, "children", 7), w = p(e, "before", 7), b = p(e, "after", 7), k = /* @__PURE__ */ ze(e, [
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
  ]), S = /* @__PURE__ */ P(Sn);
  const _ = {
    bgColor: c(),
    bgColorHover: d(),
    color: f(),
    colorHover: h(),
    borderColor: v()
  };
  let x = /* @__PURE__ */ P(() => u(S).nodesDraggable || u(S).nodesConnectable || u(S).elementsSelectable), O = /* @__PURE__ */ P(() => u(S).viewport.zoom <= u(S).minZoom), z = /* @__PURE__ */ P(() => u(S).viewport.zoom >= u(S).maxZoom), V = /* @__PURE__ */ P(() => u(S).ariaLabelConfig), B = /* @__PURE__ */ P(() => r() === "horizontal" ? "horizontal" : "vertical");
  const $ = () => {
    u(S).zoomIn();
  }, T = () => {
    u(S).zoomOut();
  }, E = () => {
    u(S).fitView(m());
  }, M = () => {
    let N = !u(x);
    u(S).nodesDraggable = N, u(S).nodesConnectable = N, u(S).elementsSelectable = N;
  };
  var C = {
    get position() {
      return n();
    },
    set position(N = "bottom-left") {
      n(N), g();
    },
    get orientation() {
      return r();
    },
    set orientation(N = "vertical") {
      r(N), g();
    },
    get showZoom() {
      return o();
    },
    set showZoom(N = !0) {
      o(N), g();
    },
    get showFitView() {
      return i();
    },
    set showFitView(N = !0) {
      i(N), g();
    },
    get showLock() {
      return s();
    },
    set showLock(N = !0) {
      s(N), g();
    },
    get style() {
      return a();
    },
    set style(N) {
      a(N), g();
    },
    get class() {
      return l();
    },
    set class(N) {
      l(N), g();
    },
    get buttonBgColor() {
      return c();
    },
    set buttonBgColor(N) {
      c(N), g();
    },
    get buttonBgColorHover() {
      return d();
    },
    set buttonBgColorHover(N) {
      d(N), g();
    },
    get buttonColor() {
      return f();
    },
    set buttonColor(N) {
      f(N), g();
    },
    get buttonColorHover() {
      return h();
    },
    set buttonColorHover(N) {
      h(N), g();
    },
    get buttonBorderColor() {
      return v();
    },
    set buttonBorderColor(N) {
      v(N), g();
    },
    get fitViewOptions() {
      return m();
    },
    set fitViewOptions(N) {
      m(N), g();
    },
    get children() {
      return y();
    },
    set children(N) {
      y(N), g();
    },
    get before() {
      return w();
    },
    set before(N) {
      w(N), g();
    },
    get after() {
      return b();
    },
    set after(N) {
      b(N), g();
    }
  };
  {
    let N = /* @__PURE__ */ P(() => [
      "svelte-flow__controls",
      u(B),
      l()
    ]);
    Oi(t, Fe(
      {
        get class() {
          return u(N);
        },
        get position() {
          return n();
        },
        "data-testid": "svelte-flow__controls",
        get "aria-label"() {
          return u(V)["controls.ariaLabel"];
        },
        get style() {
          return a();
        }
      },
      () => k,
      {
        children: (I, L) => {
          var Z = rx(), X = Q(Z);
          {
            var D = (ue) => {
              var ae = de(), oe = Q(ae);
              Ae(oe, w), A(ue, ae);
            };
            se(X, (ue) => {
              w() && ue(D);
            });
          }
          var j = F(X, 2);
          {
            var G = (ue) => {
              var ae = nx(), oe = Q(ae);
              qo(oe, Fe(
                {
                  onclick: $,
                  class: "svelte-flow__controls-zoomin",
                  get title() {
                    return u(V)["controls.zoomIn.ariaLabel"];
                  },
                  get "aria-label"() {
                    return u(V)["controls.zoomIn.ariaLabel"];
                  },
                  get disabled() {
                    return u(z);
                  }
                },
                () => _,
                {
                  children: (ye, ke) => {
                    Cg(ye);
                  },
                  $$slots: { default: !0 }
                }
              ));
              var fe = F(oe, 2);
              qo(fe, Fe(
                {
                  onclick: T,
                  class: "svelte-flow__controls-zoomout",
                  get title() {
                    return u(V)["controls.zoomOut.ariaLabel"];
                  },
                  get "aria-label"() {
                    return u(V)["controls.zoomOut.ariaLabel"];
                  },
                  get disabled() {
                    return u(O);
                  }
                },
                () => _,
                {
                  children: (ye, ke) => {
                    kg(ye);
                  },
                  $$slots: { default: !0 }
                }
              )), A(ue, ae);
            };
            se(j, (ue) => {
              o() && ue(G);
            });
          }
          var R = F(j, 2);
          {
            var ee = (ue) => {
              qo(ue, Fe(
                {
                  class: "svelte-flow__controls-fitview",
                  onclick: E,
                  get title() {
                    return u(V)["controls.fitView.ariaLabel"];
                  },
                  get "aria-label"() {
                    return u(V)["controls.fitView.ariaLabel"];
                  }
                },
                () => _,
                {
                  children: (ae, oe) => {
                    Sg(ae);
                  },
                  $$slots: { default: !0 }
                }
              ));
            };
            se(R, (ue) => {
              i() && ue(ee);
            });
          }
          var K = F(R, 2);
          {
            var U = (ue) => {
              qo(ue, Fe(
                {
                  class: "svelte-flow__controls-interactive",
                  onclick: M,
                  get title() {
                    return u(V)["controls.interactive.ariaLabel"];
                  },
                  get "aria-label"() {
                    return u(V)["controls.interactive.ariaLabel"];
                  }
                },
                () => _,
                {
                  children: (ae, oe) => {
                    var fe = de(), ye = Q(fe);
                    {
                      var ke = (me) => {
                        Pg(me);
                      }, he = (me) => {
                        Eg(me);
                      };
                      se(ye, (me) => {
                        u(x) ? me(ke) : me(he, !1);
                      });
                    }
                    A(ae, fe);
                  },
                  $$slots: { default: !0 }
                }
              ));
            };
            se(K, (ue) => {
              s() && ue(U);
            });
          }
          var ne = F(K, 2);
          {
            var H = (ue) => {
              var ae = de(), oe = Q(ae);
              Ae(oe, y), A(ue, ae);
            };
            se(ne, (ue) => {
              y() && ue(H);
            });
          }
          var te = F(ne, 2);
          {
            var xe = (ue) => {
              var ae = de(), oe = Q(ae);
              Ae(oe, b), A(ue, ae);
            };
            se(te, (ue) => {
              b() && ue(xe);
            });
          }
          A(I, Z);
        },
        $$slots: { default: !0 }
      }
    ));
  }
  return ce(C);
}
ie(
  Ng,
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
var ox = /* @__PURE__ */ _e("<circle></circle>");
function Og(t, e) {
  le(e, !0);
  let n = p(e, "radius", 7), r = p(e, "class", 7);
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
  }, i = ox();
  return Te(() => {
    Ne(i, "cx", n()), Ne(i, "cy", n()), Ne(i, "r", n()), Gt(i, 0, fr(["svelte-flow__background-pattern", "dots", r()]));
  }), A(t, i), ce(o);
}
ie(Og, { radius: {}, class: {} }, [], [], !0);
var ix = /* @__PURE__ */ _e("<path></path>");
function Ag(t, e) {
  le(e, !0);
  let n = p(e, "lineWidth", 7), r = p(e, "dimensions", 7), o = p(e, "variant", 7), i = p(e, "class", 7);
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
  }, a = ix();
  return Te(() => {
    Ne(a, "stroke-width", n()), Ne(a, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), Gt(a, 0, fr(["svelte-flow__background-pattern", o(), i()]));
  }), A(t, a), ce(s);
}
ie(Ag, { lineWidth: {}, dimensions: {}, variant: {}, class: {} }, [], [], !0);
const sx = {
  [Gn.Dots]: 1,
  [Gn.Lines]: 1,
  [Gn.Cross]: 6
};
var ax = /* @__PURE__ */ _e('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
function Tg(t, e) {
  le(e, !0);
  let n = p(e, "id", 7), r = p(e, "variant", 23, () => Gn.Dots), o = p(e, "gap", 7, 20), i = p(e, "size", 7), s = p(e, "lineWidth", 7, 1), a = p(e, "bgColor", 7), l = p(e, "patternColor", 7), c = p(e, "patternClass", 7), d = p(e, "class", 7), f = /* @__PURE__ */ P(Sn), h = /* @__PURE__ */ P(() => r() === Gn.Dots), v = /* @__PURE__ */ P(() => r() === Gn.Cross), m = /* @__PURE__ */ P(() => Array.isArray(o()) ? o() : [o(), o()]), y = /* @__PURE__ */ P(() => `background-pattern-${u(f).flowId}-${n() ?? ""}`), w = /* @__PURE__ */ P(() => [
    u(m)[0] * u(f).viewport.zoom || 1,
    u(m)[1] * u(f).viewport.zoom || 1
  ]), b = /* @__PURE__ */ P(() => (i() ?? sx[r()]) * u(f).viewport.zoom), k = /* @__PURE__ */ P(() => u(v) ? [u(b), u(b)] : u(w)), S = /* @__PURE__ */ P(() => u(h) ? [u(b) / 2, u(b) / 2] : [
    u(k)[0] / 2,
    u(k)[1] / 2
  ]);
  var _ = {
    get id() {
      return n();
    },
    set id(E) {
      n(E), g();
    },
    get variant() {
      return r();
    },
    set variant(E = Gn.Dots) {
      r(E), g();
    },
    get gap() {
      return o();
    },
    set gap(E = 20) {
      o(E), g();
    },
    get size() {
      return i();
    },
    set size(E) {
      i(E), g();
    },
    get lineWidth() {
      return s();
    },
    set lineWidth(E = 1) {
      s(E), g();
    },
    get bgColor() {
      return a();
    },
    set bgColor(E) {
      a(E), g();
    },
    get patternColor() {
      return l();
    },
    set patternColor(E) {
      l(E), g();
    },
    get patternClass() {
      return c();
    },
    set patternClass(E) {
      c(E), g();
    },
    get class() {
      return d();
    },
    set class(E) {
      d(E), g();
    }
  }, x = ax();
  let O;
  var z = q(x), V = q(z);
  {
    var B = (E) => {
      {
        let M = /* @__PURE__ */ P(() => u(b) / 2);
        Og(E, {
          get radius() {
            return u(M);
          },
          get class() {
            return c();
          }
        });
      }
    }, $ = (E) => {
      Ag(E, {
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
    se(V, (E) => {
      u(h) ? E(B) : E($, !1);
    });
  }
  Y(z);
  var T = F(z);
  return Y(x), Te(() => {
    Gt(x, 0, fr([
      "svelte-flow__background",
      "svelte-flow__container",
      d()
    ])), O = At(x, "", O, {
      "--xy-background-color-props": a(),
      "--xy-background-pattern-color-props": l()
    }), Ne(z, "id", u(y)), Ne(z, "x", u(f).viewport.x % u(w)[0]), Ne(z, "y", u(f).viewport.y % u(w)[1]), Ne(z, "width", u(w)[0]), Ne(z, "height", u(w)[1]), Ne(z, "patternTransform", `translate(-${u(S)[0]},-${u(S)[1]})`), Ne(T, "fill", `url(#${u(y)})`);
  }), A(t, x), ce(_);
}
ie(
  Tg,
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
var lx = /* @__PURE__ */ _e("<rect></rect>");
function Mg(t, e) {
  le(e, !0);
  let n = p(e, "id", 7), r = p(e, "x", 7), o = p(e, "y", 7), i = p(e, "width", 7), s = p(e, "height", 7), a = p(e, "borderRadius", 7, 5), l = p(e, "color", 7), c = p(e, "shapeRendering", 7), d = p(e, "strokeColor", 7), f = p(e, "strokeWidth", 7, 2), h = p(e, "selected", 7), v = p(e, "class", 7), m = p(e, "nodeComponent", 7);
  var y = {
    get id() {
      return n();
    },
    set id(_) {
      n(_), g();
    },
    get x() {
      return r();
    },
    set x(_) {
      r(_), g();
    },
    get y() {
      return o();
    },
    set y(_) {
      o(_), g();
    },
    get width() {
      return i();
    },
    set width(_) {
      i(_), g();
    },
    get height() {
      return s();
    },
    set height(_) {
      s(_), g();
    },
    get borderRadius() {
      return a();
    },
    set borderRadius(_ = 5) {
      a(_), g();
    },
    get color() {
      return l();
    },
    set color(_) {
      l(_), g();
    },
    get shapeRendering() {
      return c();
    },
    set shapeRendering(_) {
      c(_), g();
    },
    get strokeColor() {
      return d();
    },
    set strokeColor(_) {
      d(_), g();
    },
    get strokeWidth() {
      return f();
    },
    set strokeWidth(_ = 2) {
      f(_), g();
    },
    get selected() {
      return h();
    },
    set selected(_) {
      h(_), g();
    },
    get class() {
      return v();
    },
    set class(_) {
      v(_), g();
    },
    get nodeComponent() {
      return m();
    },
    set nodeComponent(_) {
      m(_), g();
    }
  }, w = de(), b = Q(w);
  {
    var k = (_) => {
      const x = /* @__PURE__ */ P(m);
      var O = de(), z = Q(O);
      St(z, () => u(x), (V, B) => {
        B(V, {
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
      }), A(_, O);
    }, S = (_) => {
      var x = lx();
      let O, z;
      Te(() => {
        O = Gt(x, 0, fr(["svelte-flow__minimap-node", v()]), null, O, { selected: h() }), Ne(x, "x", r()), Ne(x, "y", o()), Ne(x, "rx", a()), Ne(x, "ry", a()), Ne(x, "width", i()), Ne(x, "height", s()), Ne(x, "shape-rendering", c()), z = At(x, "", z, {
          fill: l(),
          stroke: d(),
          "stroke-width": f()
        });
      }), A(_, x);
    };
    se(b, (_) => {
      m() ? _(k) : _(S, !1);
    });
  }
  return A(t, w), ce(y);
}
ie(
  Mg,
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
function cx(t, e) {
  const n = Xb({
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
const Va = (t) => t instanceof Function ? t : () => t;
var ux = /* @__PURE__ */ _e("<title> </title>"), dx = /* @__PURE__ */ _e('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>'), fx = /* @__PURE__ */ re('<svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>', 1);
function Dg(t, e) {
  le(e, !0);
  let n = p(e, "position", 7, "bottom-right"), r = p(e, "ariaLabel", 7), o = p(e, "nodeStrokeColor", 7, "transparent"), i = p(e, "nodeColor", 7), s = p(e, "nodeClass", 7, ""), a = p(e, "nodeBorderRadius", 7, 5), l = p(e, "nodeStrokeWidth", 7, 2), c = p(e, "nodeComponent", 7), d = p(e, "bgColor", 7), f = p(e, "maskColor", 7), h = p(e, "maskStrokeColor", 7), v = p(e, "maskStrokeWidth", 7), m = p(e, "width", 7, 200), y = p(e, "height", 7, 150), w = p(e, "pannable", 7, !0), b = p(e, "zoomable", 7, !0), k = p(e, "inversePan", 7), S = p(e, "zoomStep", 7), _ = p(e, "class", 7), x = /* @__PURE__ */ ze(e, [
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
  ]), O = /* @__PURE__ */ P(Sn), z = /* @__PURE__ */ P(() => u(O).ariaLabelConfig);
  const V = i() === void 0 ? void 0 : Va(i()), B = Va(o()), $ = Va(s()), T = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  );
  let E = /* @__PURE__ */ P(() => `svelte-flow__minimap-desc-${u(O).flowId}`), M = /* @__PURE__ */ P(() => ({
    x: -u(O).viewport.x / u(O).viewport.zoom,
    y: -u(O).viewport.y / u(O).viewport.zoom,
    width: u(O).width / u(O).viewport.zoom,
    height: u(O).height / u(O).viewport.zoom
  })), C = /* @__PURE__ */ P(() => Eh(Si(u(O).nodeLookup, { filter: (te) => !te.hidden }), u(M))), N = /* @__PURE__ */ P(() => u(C).width / m()), I = /* @__PURE__ */ P(() => u(C).height / y()), L = /* @__PURE__ */ P(() => Math.max(u(N), u(I))), Z = /* @__PURE__ */ P(() => u(L) * m()), X = /* @__PURE__ */ P(() => u(L) * y()), D = /* @__PURE__ */ P(() => 5 * u(L)), j = /* @__PURE__ */ P(() => u(C).x - (u(Z) - u(C).width) / 2 - u(D)), G = /* @__PURE__ */ P(() => u(C).y - (u(X) - u(C).height) / 2 - u(D)), R = /* @__PURE__ */ P(() => u(Z) + u(D) * 2), ee = /* @__PURE__ */ P(() => u(X) + u(D) * 2);
  const K = () => u(L);
  var U = {
    get position() {
      return n();
    },
    set position(te = "bottom-right") {
      n(te), g();
    },
    get ariaLabel() {
      return r();
    },
    set ariaLabel(te) {
      r(te), g();
    },
    get nodeStrokeColor() {
      return o();
    },
    set nodeStrokeColor(te = "transparent") {
      o(te), g();
    },
    get nodeColor() {
      return i();
    },
    set nodeColor(te) {
      i(te), g();
    },
    get nodeClass() {
      return s();
    },
    set nodeClass(te = "") {
      s(te), g();
    },
    get nodeBorderRadius() {
      return a();
    },
    set nodeBorderRadius(te = 5) {
      a(te), g();
    },
    get nodeStrokeWidth() {
      return l();
    },
    set nodeStrokeWidth(te = 2) {
      l(te), g();
    },
    get nodeComponent() {
      return c();
    },
    set nodeComponent(te) {
      c(te), g();
    },
    get bgColor() {
      return d();
    },
    set bgColor(te) {
      d(te), g();
    },
    get maskColor() {
      return f();
    },
    set maskColor(te) {
      f(te), g();
    },
    get maskStrokeColor() {
      return h();
    },
    set maskStrokeColor(te) {
      h(te), g();
    },
    get maskStrokeWidth() {
      return v();
    },
    set maskStrokeWidth(te) {
      v(te), g();
    },
    get width() {
      return m();
    },
    set width(te = 200) {
      m(te), g();
    },
    get height() {
      return y();
    },
    set height(te = 150) {
      y(te), g();
    },
    get pannable() {
      return w();
    },
    set pannable(te = !0) {
      w(te), g();
    },
    get zoomable() {
      return b();
    },
    set zoomable(te = !0) {
      b(te), g();
    },
    get inversePan() {
      return k();
    },
    set inversePan(te) {
      k(te), g();
    },
    get zoomStep() {
      return S();
    },
    set zoomStep(te) {
      S(te), g();
    },
    get class() {
      return _();
    },
    set class(te) {
      _(te), g();
    }
  }, ne = fx(), H = Q(ne);
  {
    let te = /* @__PURE__ */ P(() => ["svelte-flow__minimap", _()]);
    i1(H, () => ({ "--xy-minimap-background-color-props": d() })), Oi(H.lastChild, Fe(
      {
        get position() {
          return n();
        },
        get class() {
          return u(te);
        },
        "data-testid": "svelte-flow__minimap"
      },
      () => x,
      {
        children: (xe, ue) => {
          var ae = de(), oe = Q(ae);
          {
            var fe = (ye) => {
              var ke = dx();
              let he;
              var me = q(ke);
              {
                var Oe = (Se) => {
                  var We = ux(), Ve = q(We, !0);
                  Y(We), Te(() => {
                    Ne(We, "id", u(E)), rt(Ve, r() ?? u(z)["minimap.ariaLabel"]);
                  }), A(Se, We);
                };
                se(me, (Se) => {
                  (r() ?? u(z)["minimap.ariaLabel"]) && Se(Oe);
                });
              }
              var J = F(me);
              Ct(J, 17, () => u(O).nodes, (Se) => Se.id, (Se, We) => {
                const Ve = /* @__PURE__ */ P(() => u(O).nodeLookup.get(u(We).id));
                var Ue = de(), ot = Q(Ue);
                {
                  var ct = (st) => {
                    const Mt = /* @__PURE__ */ P(() => Tr(u(Ve)));
                    {
                      let pe = /* @__PURE__ */ P(() => V?.(u(Ve))), Me = /* @__PURE__ */ P(() => B(u(Ve))), Ge = /* @__PURE__ */ P(() => $(u(Ve)));
                      Mg(st, Fe(
                        {
                          get id() {
                            return u(Ve).id;
                          },
                          get x() {
                            return u(Ve).internals.positionAbsolute.x;
                          },
                          get y() {
                            return u(Ve).internals.positionAbsolute.y;
                          }
                        },
                        () => u(Mt),
                        {
                          get selected() {
                            return u(Ve).selected;
                          },
                          get nodeComponent() {
                            return c();
                          },
                          get color() {
                            return u(pe);
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
                            return T;
                          },
                          get class() {
                            return u(Ge);
                          }
                        }
                      ));
                    }
                  };
                  se(ot, (st) => {
                    u(Ve) && Ph(u(Ve)) && !u(Ve).hidden && st(ct);
                  });
                }
                A(Se, Ue);
              });
              var Re = F(J);
              Y(ke), It(ke, (Se, We) => cx?.(Se, We), () => ({
                store: u(O),
                panZoom: u(O).panZoom,
                getViewScale: K,
                translateExtent: u(O).translateExtent,
                width: u(O).width,
                height: u(O).height,
                inversePan: k(),
                zoomStep: S(),
                pannable: w(),
                zoomable: b()
              })), Te(() => {
                Ne(ke, "width", m()), Ne(ke, "height", y()), Ne(ke, "viewBox", `${u(j) ?? ""} ${u(G) ?? ""} ${u(R) ?? ""} ${u(ee) ?? ""}`), Ne(ke, "aria-labelledby", u(E)), he = At(ke, "", he, {
                  "--xy-minimap-mask-background-color-props": f(),
                  "--xy-minimap-mask-stroke-color-props": h(),
                  "--xy-minimap-mask-stroke-width-props": v() ? v() * u(L) : void 0
                }), Ne(Re, "d", `M${u(j) - u(D)},${u(G) - u(D)}h${u(R) + u(D) * 2}v${u(ee) + u(D) * 2}h${-u(R) - u(D) * 2}z
      M${u(M).x ?? ""},${u(M).y ?? ""}h${u(M).width ?? ""}v${u(M).height ?? ""}h${-u(M).width}z`);
              }), A(ye, ke);
            };
            se(oe, (ye) => {
              u(O).panZoom && ye(fe);
            });
          }
          A(xe, ae);
        },
        $$slots: { default: !0 }
      }
    )), Y(H);
  }
  return A(t, ne), ce(U);
}
ie(
  Dg,
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
var hx = /* @__PURE__ */ re("<div><!></div>");
function Ig(t, e) {
  le(e, !0);
  let n = p(e, "nodeId", 7), r = p(e, "position", 23, () => Pe.Top), o = p(e, "align", 7, "center"), i = p(e, "offset", 7, 10), s = p(e, "isVisible", 7), a = p(e, "children", 7), l = /* @__PURE__ */ ze(e, [
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
  const c = Sn(), { getNodesBounds: d } = kt(), f = bn("svelteflow__node_id");
  let h = /* @__PURE__ */ P(() => (c.nodes, (Array.isArray(n()) ? n() : [n() ?? f]).reduce(
    (O, z) => {
      const V = c.nodeLookup.get(z);
      return V && O.push(V), O;
    },
    []
  ))), v = /* @__PURE__ */ P(() => {
    const x = d(u(h));
    return x ? Nb(x, c.viewport, r(), i(), o()) : "";
  }), m = /* @__PURE__ */ P(() => u(h).length === 0 ? 1 : Math.max(...u(h).map((x) => (x.internals.z || 5) + 1))), y = /* @__PURE__ */ P(() => c.nodes.filter((x) => x.selected).length), w = /* @__PURE__ */ P(() => typeof s() == "boolean" ? s() : u(h).length === 1 && u(h)[0].selected && u(y) === 1);
  var b = {
    get nodeId() {
      return n();
    },
    set nodeId(x) {
      n(x), g();
    },
    get position() {
      return r();
    },
    set position(x = Pe.Top) {
      r(x), g();
    },
    get align() {
      return o();
    },
    set align(x = "center") {
      o(x), g();
    },
    get offset() {
      return i();
    },
    set offset(x = 10) {
      i(x), g();
    },
    get isVisible() {
      return s();
    },
    set isVisible(x) {
      s(x), g();
    },
    get children() {
      return a();
    },
    set children(x) {
      a(x), g();
    }
  }, k = de(), S = Q(k);
  {
    var _ = (x) => {
      var O = hx();
      Je(
        O,
        (V, B) => ({
          class: "svelte-flow__node-toolbar",
          "data-id": V,
          ...l,
          [An]: B
        }),
        [
          () => u(h).reduce((V, B) => `${V}${B.id} `, "").trim(),
          () => ({
            display: jh().value ? "none" : void 0,
            position: "absolute",
            transform: u(v),
            "z-index": u(m)
          })
        ]
      );
      var z = q(O);
      Ae(z, () => a() ?? Be), Y(O), It(O, (V, B) => qh?.(V, B), () => "root"), A(x, O);
    };
    se(S, (x) => {
      c.domNode && u(w) && u(h) && x(_);
    });
  }
  return A(t, k), ce(b);
}
ie(
  Ig,
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
  const e = /* @__PURE__ */ P(Sn), n = /* @__PURE__ */ P(() => u(e).nodes), r = /* @__PURE__ */ P(() => u(e).nodeLookup);
  let o = [], i = !0;
  const s = /* @__PURE__ */ P(() => {
    u(n);
    const a = [], l = Array.isArray(t), c = l ? t : [t];
    for (const d of c) {
      const f = u(r).get(d)?.internals.userNode;
      f && a.push({ id: f.id, type: f.type, data: f.data });
    }
    return (!Fb(a, o) || i) && (o = a, i = !1), l ? o : o[0] ?? null;
  });
  return {
    get current() {
      return u(s);
    }
  };
}
const Qu = "tinyflow-component", gx = [
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
], px = [
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
], xc = [
  { label: "文字", value: "text" },
  { label: "图片", value: "image" },
  { label: "视频", value: "video" },
  { label: "音频", value: "audio" },
  { label: "文件", value: "file" },
  { label: "其他", value: "other" }
], vx = [
  { label: "单行输入框", value: "input" },
  { label: "多行输入框", value: "textarea" },
  { label: "下拉菜单", value: "select" },
  { label: "单选", value: "radio" },
  { label: "多选", value: "checkbox" }
], mx = [
  { label: "单选", value: "radio" },
  { label: "多选", value: "checkbox" }
];
class ES {
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
    const e = document.createElement(Qu);
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
    const n = document.createElement(Qu);
    n.style.display = "block", n.style.width = "100%", n.style.height = "100%", n.classList.add("tf-theme-light"), n.options = this.options, n.onInit = (r) => {
      this.svelteFlowInstance = r;
    }, this.destroy(), this.rootEl.appendChild(n);
  }
  destroy() {
    for (; this.rootEl.firstChild; )
      this.rootEl.removeChild(this.rootEl.firstChild);
  }
}
const yx = () => {
  let t = /* @__PURE__ */ ve([]), e = /* @__PURE__ */ ve([]), n = /* @__PURE__ */ ve({ x: 250, y: 100, zoom: 1 });
  return {
    // nodes: nodesInternal,
    // edges: edgesInternal,
    // viewport,
    init: (r, o) => {
      W(t, r), W(e, o);
    },
    getNodes: () => u(t),
    setNodes: (r) => {
      W(t, r);
    },
    getEdges: () => u(e),
    setEdges: (r) => {
      W(e, r);
    },
    getViewport: () => u(n),
    setViewport: (r) => {
      W(n, r);
    },
    getNode: (r) => u(t).find((o) => o.id === r),
    addNode: (r) => {
      W(t, [...u(t), r]);
    },
    removeNode: (r) => {
      W(t, u(t).filter((o) => o.id !== r));
    },
    updateNode: (r, o) => {
      W(t, u(t).map((i) => i.id === r ? { ...i, ...o } : i));
    },
    updateNodes: (r) => {
      W(t, r(u(t)));
    },
    updateNodeData: (r, o) => {
      W(t, u(t).map((i) => i.id === r ? { ...i, data: { ...i.data, ...o } } : i));
    },
    selectNodeOnly: (r) => {
      W(t, u(t).map((o) => o.id === r ? { ...o, selected: !0 } : { ...o, selected: !1 }));
    },
    getEdge: (r) => u(e).find((o) => o.id === r),
    addEdge: (r) => {
      W(e, [...u(e), r]);
    },
    removeEdge: (r) => {
      W(e, u(e).filter((o) => o.id !== r));
    },
    updateEdge: (r, o) => {
      W(e, u(e).map((i) => i.id === r ? { ...i, ...o } : i));
    },
    updateEdges: (r) => {
      W(e, r(u(e)));
    },
    updateEdgeData: (r, o) => {
      W(e, u(e).map((i) => i.id === r ? { ...i, data: { ...i.data, ...o } } : i));
    }
  };
}, Ye = yx(), wx = (t, e) => {
  const n = new Array(t.length + e.length);
  for (let r = 0; r < t.length; r++)
    n[r] = t[r];
  for (let r = 0; r < e.length; r++)
    n[t.length + r] = e[r];
  return n;
}, bx = (t, e) => ({
  classGroupId: t,
  validator: e
}), Vg = (t = /* @__PURE__ */ new Map(), e = null, n) => ({
  nextPart: t,
  validators: e,
  classGroupId: n
}), Ts = "-", ed = [], xx = "arbitrary..", _x = (t) => {
  const e = kx(t), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = t;
  return {
    getClassGroupId: (s) => {
      if (s.startsWith("[") && s.endsWith("]"))
        return Cx(s);
      const a = s.split(Ts), l = a[0] === "" && a.length > 1 ? 1 : 0;
      return zg(a, l, e);
    },
    getConflictingClassGroupIds: (s, a) => {
      if (a) {
        const l = r[s], c = n[s];
        return l ? c ? wx(c, l) : l : c || ed;
      }
      return n[s] || ed;
    }
  };
}, zg = (t, e, n) => {
  if (t.length - e === 0)
    return n.classGroupId;
  const o = t[e], i = n.nextPart.get(o);
  if (i) {
    const c = zg(t, e + 1, i);
    if (c) return c;
  }
  const s = n.validators;
  if (s === null)
    return;
  const a = e === 0 ? t.join(Ts) : t.slice(e).join(Ts), l = s.length;
  for (let c = 0; c < l; c++) {
    const d = s[c];
    if (d.validator(a))
      return d.classGroupId;
  }
}, Cx = (t) => t.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const e = t.slice(1, -1), n = e.indexOf(":"), r = e.slice(0, n);
  return r ? xx + r : void 0;
})(), kx = (t) => {
  const {
    theme: e,
    classGroups: n
  } = t;
  return Sx(n, e);
}, Sx = (t, e) => {
  const n = Vg();
  for (const r in t) {
    const o = t[r];
    _c(o, n, r, e);
  }
  return n;
}, _c = (t, e, n, r) => {
  const o = t.length;
  for (let i = 0; i < o; i++) {
    const s = t[i];
    Ex(s, e, n, r);
  }
}, Ex = (t, e, n, r) => {
  if (typeof t == "string") {
    Px(t, e, n);
    return;
  }
  if (typeof t == "function") {
    Nx(t, e, n, r);
    return;
  }
  Ox(t, e, n, r);
}, Px = (t, e, n) => {
  const r = t === "" ? e : Lg(e, t);
  r.classGroupId = n;
}, Nx = (t, e, n, r) => {
  if (Ax(t)) {
    _c(t(r), e, n, r);
    return;
  }
  e.validators === null && (e.validators = []), e.validators.push(bx(n, t));
}, Ox = (t, e, n, r) => {
  const o = Object.entries(t), i = o.length;
  for (let s = 0; s < i; s++) {
    const [a, l] = o[s];
    _c(l, Lg(e, a), n, r);
  }
}, Lg = (t, e) => {
  let n = t;
  const r = e.split(Ts), o = r.length;
  for (let i = 0; i < o; i++) {
    const s = r[i];
    let a = n.nextPart.get(s);
    a || (a = Vg(), n.nextPart.set(s, a)), n = a;
  }
  return n;
}, Ax = (t) => "isThemeGetter" in t && t.isThemeGetter === !0, Tx = (t) => {
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
}, cl = "!", td = ":", Mx = [], nd = (t, e, n, r, o) => ({
  modifiers: t,
  hasImportantModifier: e,
  baseClassName: n,
  maybePostfixModifierPosition: r,
  isExternal: o
}), Dx = (t) => {
  const {
    prefix: e,
    experimentalParseClassName: n
  } = t;
  let r = (o) => {
    const i = [];
    let s = 0, a = 0, l = 0, c;
    const d = o.length;
    for (let y = 0; y < d; y++) {
      const w = o[y];
      if (s === 0 && a === 0) {
        if (w === td) {
          i.push(o.slice(l, y)), l = y + 1;
          continue;
        }
        if (w === "/") {
          c = y;
          continue;
        }
      }
      w === "[" ? s++ : w === "]" ? s-- : w === "(" ? a++ : w === ")" && a--;
    }
    const f = i.length === 0 ? o : o.slice(l);
    let h = f, v = !1;
    f.endsWith(cl) ? (h = f.slice(0, -1), v = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      f.startsWith(cl) && (h = f.slice(1), v = !0)
    );
    const m = c && c > l ? c - l : void 0;
    return nd(i, v, h, m);
  };
  if (e) {
    const o = e + td, i = r;
    r = (s) => s.startsWith(o) ? i(s.slice(o.length)) : nd(Mx, !1, s, void 0, !0);
  }
  if (n) {
    const o = r;
    r = (i) => n({
      className: i,
      parseClassName: o
    });
  }
  return r;
}, Ix = (t) => {
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
}, Vx = (t) => ({
  cache: Tx(t.cacheSize),
  parseClassName: Dx(t),
  sortModifiers: Ix(t),
  ..._x(t)
}), zx = /\s+/, Lx = (t, e) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o,
    sortModifiers: i
  } = e, s = [], a = t.trim().split(zx);
  let l = "";
  for (let c = a.length - 1; c >= 0; c -= 1) {
    const d = a[c], {
      isExternal: f,
      modifiers: h,
      hasImportantModifier: v,
      baseClassName: m,
      maybePostfixModifierPosition: y
    } = n(d);
    if (f) {
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
    const k = h.length === 0 ? "" : h.length === 1 ? h[0] : i(h).join(":"), S = v ? k + cl : k, _ = S + b;
    if (s.indexOf(_) > -1)
      continue;
    s.push(_);
    const x = o(b, w);
    for (let O = 0; O < x.length; ++O) {
      const z = x[O];
      s.push(S + z);
    }
    l = d + (l.length > 0 ? " " + l : l);
  }
  return l;
}, Hx = (...t) => {
  let e = 0, n, r, o = "";
  for (; e < t.length; )
    (n = t[e++]) && (r = Hg(n)) && (o && (o += " "), o += r);
  return o;
}, Hg = (t) => {
  if (typeof t == "string")
    return t;
  let e, n = "";
  for (let r = 0; r < t.length; r++)
    t[r] && (e = Hg(t[r])) && (n && (n += " "), n += e);
  return n;
}, ul = (t, ...e) => {
  let n, r, o, i;
  const s = (l) => {
    const c = e.reduce((d, f) => f(d), t());
    return n = Vx(c), r = n.cache.get, o = n.cache.set, i = a, a(l);
  }, a = (l) => {
    const c = r(l);
    if (c)
      return c;
    const d = Lx(l, n);
    return o(l, d), d;
  };
  return i = s, (...l) => i(Hx(...l));
}, Rx = [], _t = (t) => {
  const e = (n) => n[t] || Rx;
  return e.isThemeGetter = !0, e;
}, Rg = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Fg = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Fx = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, Bx = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, $x = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Kx = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Wx = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Zx = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, pr = (t) => Fx.test(t), Le = (t) => !!t && !Number.isNaN(Number(t)), vr = (t) => !!t && Number.isInteger(Number(t)), za = (t) => t.endsWith("%") && Le(t.slice(0, -1)), Zn = (t) => Bx.test(t), Bg = () => !0, Yx = (t) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  $x.test(t) && !Kx.test(t)
), Cc = () => !1, qx = (t) => Wx.test(t), jx = (t) => Zx.test(t), Xx = (t) => !we(t) && !be(t), Ux = (t) => Mr(t, Wg, Cc), we = (t) => Rg.test(t), Vr = (t) => Mr(t, Zg, Yx), rd = (t) => Mr(t, o_, Le), Gx = (t) => Mr(t, qg, Bg), Jx = (t) => Mr(t, Yg, Cc), od = (t) => Mr(t, $g, Cc), Qx = (t) => Mr(t, Kg, jx), Zi = (t) => Mr(t, jg, qx), be = (t) => Fg.test(t), Fo = (t) => so(t, Zg), e_ = (t) => so(t, Yg), id = (t) => so(t, $g), t_ = (t) => so(t, Wg), n_ = (t) => so(t, Kg), Yi = (t) => so(t, jg, !0), r_ = (t) => so(t, qg, !0), Mr = (t, e, n) => {
  const r = Rg.exec(t);
  return r ? r[1] ? e(r[1]) : n(r[2]) : !1;
}, so = (t, e, n = !1) => {
  const r = Fg.exec(t);
  return r ? r[1] ? e(r[1]) : n : !1;
}, $g = (t) => t === "position" || t === "percentage", Kg = (t) => t === "image" || t === "url", Wg = (t) => t === "length" || t === "size" || t === "bg-size", Zg = (t) => t === "length", o_ = (t) => t === "number", Yg = (t) => t === "family-name", qg = (t) => t === "number" || t === "weight", jg = (t) => t === "shadow", dl = () => {
  const t = _t("color"), e = _t("font"), n = _t("text"), r = _t("font-weight"), o = _t("tracking"), i = _t("leading"), s = _t("breakpoint"), a = _t("container"), l = _t("spacing"), c = _t("radius"), d = _t("shadow"), f = _t("inset-shadow"), h = _t("text-shadow"), v = _t("drop-shadow"), m = _t("blur"), y = _t("perspective"), w = _t("aspect"), b = _t("ease"), k = _t("animate"), S = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], _ = () => [
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
  ], x = () => [..._(), be, we], O = () => ["auto", "hidden", "clip", "visible", "scroll"], z = () => ["auto", "contain", "none"], V = () => [be, we, l], B = () => [pr, "full", "auto", ...V()], $ = () => [vr, "none", "subgrid", be, we], T = () => ["auto", {
    span: ["full", vr, be, we]
  }, vr, be, we], E = () => [vr, "auto", be, we], M = () => ["auto", "min", "max", "fr", be, we], C = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], N = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], I = () => ["auto", ...V()], L = () => [pr, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...V()], Z = () => [pr, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...V()], X = () => [pr, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...V()], D = () => [t, be, we], j = () => [..._(), id, od, {
    position: [be, we]
  }], G = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], R = () => ["auto", "cover", "contain", t_, Ux, {
    size: [be, we]
  }], ee = () => [za, Fo, Vr], K = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    c,
    be,
    we
  ], U = () => ["", Le, Fo, Vr], ne = () => ["solid", "dashed", "dotted", "double"], H = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], te = () => [Le, za, id, od], xe = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    m,
    be,
    we
  ], ue = () => ["none", Le, be, we], ae = () => ["none", Le, be, we], oe = () => [Le, be, we], fe = () => [pr, "full", ...V()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Zn],
      breakpoint: [Zn],
      color: [Bg],
      container: [Zn],
      "drop-shadow": [Zn],
      ease: ["in", "out", "in-out"],
      font: [Xx],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [Zn],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [Zn],
      shadow: [Zn],
      spacing: ["px", Le],
      text: [Zn],
      "text-shadow": [Zn],
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
        aspect: ["auto", "square", pr, we, be, w]
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
        columns: [Le, we, be, a]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": S()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": S()
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
        overflow: O()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": O()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": O()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: z()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": z()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": z()
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
        inset: B()
      }],
      /**
       * Inset Inline
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": B()
      }],
      /**
       * Inset Block
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": B()
      }],
      /**
       * Inset Inline Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-s` in next major release
       */
      start: [{
        "inset-s": B(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-s-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        start: B()
      }],
      /**
       * Inset Inline End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-e` in next major release
       */
      end: [{
        "inset-e": B(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-e-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        end: B()
      }],
      /**
       * Inset Block Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-bs": [{
        "inset-bs": B()
      }],
      /**
       * Inset Block End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-be": [{
        "inset-be": B()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: B()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: B()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: B()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: B()
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
        z: [vr, "auto", be, we]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [pr, "full", "auto", a, ...V()]
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
        flex: [Le, pr, "auto", "initial", "none", we]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", Le, be, we]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", Le, be, we]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [vr, "first", "last", "none", be, we]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": $()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: T()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": E()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": E()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": $()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: T()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": E()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": E()
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
        gap: V()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": V()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": V()
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
        "justify-items": [...N(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...N()]
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
        items: [...N(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...N(), {
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
        "place-items": [...N(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...N()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: V()
      }],
      /**
       * Padding Inline
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: V()
      }],
      /**
       * Padding Block
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: V()
      }],
      /**
       * Padding Inline Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: V()
      }],
      /**
       * Padding Inline End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: V()
      }],
      /**
       * Padding Block Start
       * @see https://tailwindcss.com/docs/padding
       */
      pbs: [{
        pbs: V()
      }],
      /**
       * Padding Block End
       * @see https://tailwindcss.com/docs/padding
       */
      pbe: [{
        pbe: V()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: V()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: V()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: V()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: V()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: I()
      }],
      /**
       * Margin Inline
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: I()
      }],
      /**
       * Margin Block
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: I()
      }],
      /**
       * Margin Inline Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: I()
      }],
      /**
       * Margin Inline End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: I()
      }],
      /**
       * Margin Block Start
       * @see https://tailwindcss.com/docs/margin
       */
      mbs: [{
        mbs: I()
      }],
      /**
       * Margin Block End
       * @see https://tailwindcss.com/docs/margin
       */
      mbe: [{
        mbe: I()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: I()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: I()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: I()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: I()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": V()
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
        "space-y": V()
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
        size: L()
      }],
      /**
       * Inline Size
       * @see https://tailwindcss.com/docs/width
       */
      "inline-size": [{
        inline: ["auto", ...Z()]
      }],
      /**
       * Min-Inline Size
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-inline-size": [{
        "min-inline": ["auto", ...Z()]
      }],
      /**
       * Max-Inline Size
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-inline-size": [{
        "max-inline": ["none", ...Z()]
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
        w: [a, "screen", ...L()]
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
          ...L()
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
          ...L()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...L()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...L()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...L()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", n, Fo, Vr]
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
        font: [r, r_, Gx]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", za, we]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [e_, Jx, e]
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
        "line-clamp": [Le, "none", be, rd]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          i,
          ...V()
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
        placeholder: D()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: D()
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
        decoration: [Le, "from-font", "auto", be, Vr]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: D()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [Le, "auto", be, we]
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
        indent: V()
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
        bg: j()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: G()
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
          }, vr, be, we],
          radial: ["", be, we],
          conic: [vr, be, we]
        }, n_, Qx]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: D()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: ee()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: ee()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: ee()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: D()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: D()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: D()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: K()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": K()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": K()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": K()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": K()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": K()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": K()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": K()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": K()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": K()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": K()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": K()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": K()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": K()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": K()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: U()
      }],
      /**
       * Border Width Inline
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": U()
      }],
      /**
       * Border Width Block
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": U()
      }],
      /**
       * Border Width Inline Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": U()
      }],
      /**
       * Border Width Inline End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": U()
      }],
      /**
       * Border Width Block Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-bs": [{
        "border-bs": U()
      }],
      /**
       * Border Width Block End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-be": [{
        "border-be": U()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": U()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": U()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": U()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": U()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": U()
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
        "divide-y": U()
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
        border: D()
      }],
      /**
       * Border Color Inline
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": D()
      }],
      /**
       * Border Color Block
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": D()
      }],
      /**
       * Border Color Inline Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": D()
      }],
      /**
       * Border Color Inline End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": D()
      }],
      /**
       * Border Color Block Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-bs": [{
        "border-bs": D()
      }],
      /**
       * Border Color Block End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-be": [{
        "border-be": D()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": D()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": D()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": D()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": D()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: D()
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
        "outline-offset": [Le, be, we]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", Le, Fo, Vr]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: D()
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
          Yi,
          Zi
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: D()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", f, Yi, Zi]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": D()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: U()
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
        ring: D()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [Le, Vr]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": D()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": U()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": D()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", h, Yi, Zi]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": D()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [Le, be, we]
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
        "mask-linear": [Le]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": te()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": te()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": D()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": D()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": te()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": te()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": D()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": D()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": te()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": te()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": D()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": D()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": te()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": te()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": D()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": D()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": te()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": te()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": D()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": D()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": te()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": te()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": D()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": D()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": te()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": te()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": D()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": D()
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
        "mask-radial-from": D()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": D()
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
        "mask-conic": [Le]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": te()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": te()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": D()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": D()
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
        mask: j()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: G()
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
        blur: xe()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [Le, be, we]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [Le, be, we]
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
          Yi,
          Zi
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": D()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", Le, be, we]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [Le, be, we]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", Le, be, we]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [Le, be, we]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", Le, be, we]
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
        "backdrop-blur": xe()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [Le, be, we]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [Le, be, we]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", Le, be, we]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [Le, be, we]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", Le, be, we]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [Le, be, we]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [Le, be, we]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", Le, be, we]
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
        "border-spacing": V()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": V()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": V()
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
        duration: [Le, "initial", be, we]
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
        delay: [Le, be, we]
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
        scale: ae()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": ae()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": ae()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": ae()
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
        skew: oe()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": oe()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": oe()
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
        accent: D()
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
        caret: D()
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
        "scroll-m": V()
      }],
      /**
       * Scroll Margin Inline
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": V()
      }],
      /**
       * Scroll Margin Block
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": V()
      }],
      /**
       * Scroll Margin Inline Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": V()
      }],
      /**
       * Scroll Margin Inline End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": V()
      }],
      /**
       * Scroll Margin Block Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mbs": [{
        "scroll-mbs": V()
      }],
      /**
       * Scroll Margin Block End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mbe": [{
        "scroll-mbe": V()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": V()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": V()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": V()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": V()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": V()
      }],
      /**
       * Scroll Padding Inline
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": V()
      }],
      /**
       * Scroll Padding Block
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": V()
      }],
      /**
       * Scroll Padding Inline Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": V()
      }],
      /**
       * Scroll Padding Inline End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": V()
      }],
      /**
       * Scroll Padding Block Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pbs": [{
        "scroll-pbs": V()
      }],
      /**
       * Scroll Padding Block End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pbe": [{
        "scroll-pbe": V()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": V()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": V()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": V()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": V()
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
        fill: ["none", ...D()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [Le, Fo, Vr, rd]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...D()]
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
}, i_ = (t, {
  cacheSize: e,
  prefix: n,
  experimentalParseClassName: r,
  extend: o = {},
  override: i = {}
}) => (jo(t, "cacheSize", e), jo(t, "prefix", n), jo(t, "experimentalParseClassName", r), qi(t.theme, i.theme), qi(t.classGroups, i.classGroups), qi(t.conflictingClassGroups, i.conflictingClassGroups), qi(t.conflictingClassGroupModifiers, i.conflictingClassGroupModifiers), jo(t, "orderSensitiveModifiers", i.orderSensitiveModifiers), ji(t.theme, o.theme), ji(t.classGroups, o.classGroups), ji(t.conflictingClassGroups, o.conflictingClassGroups), ji(t.conflictingClassGroupModifiers, o.conflictingClassGroupModifiers), Xg(t, o, "orderSensitiveModifiers"), t), jo = (t, e, n) => {
  n !== void 0 && (t[e] = n);
}, qi = (t, e) => {
  if (e)
    for (const n in e)
      jo(t, n, e[n]);
}, ji = (t, e) => {
  if (e)
    for (const n in e)
      Xg(t, e, n);
}, Xg = (t, e, n) => {
  const r = e[n];
  r !== void 0 && (t[n] = t[n] ? t[n].concat(r) : r);
}, s_ = (t, ...e) => typeof t == "function" ? ul(dl, t, ...e) : ul(() => i_(dl(), t), ...e), Ug = /* @__PURE__ */ ul(dl);
function mn(...t) {
  return Ug(Jo(t));
}
var a_ = /\s+/g, l_ = (t) => typeof t != "string" || !t ? t : t.replace(a_, " ").trim(), Ms = (...t) => {
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
  return e.length > 0 ? l_(e.join(" ")) : void 0;
}, sd = (t) => t === !1 ? "false" : t === !0 ? "true" : t === 0 ? "0" : t, Kt = (t) => {
  if (!t || typeof t != "object") return !0;
  for (const e in t) return !1;
  return !0;
}, c_ = (t, e) => {
  if (t === e) return !0;
  if (!t || !e) return !1;
  const n = Object.keys(t), r = Object.keys(e);
  if (n.length !== r.length) return !1;
  for (let o = 0; o < n.length; o++) {
    const i = n[o];
    if (!r.includes(i) || t[i] !== e[i]) return !1;
  }
  return !0;
}, u_ = (t, e) => {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      const r = e[n];
      n in t ? t[n] = Ms(t[n], r) : t[n] = r;
    }
  return t;
}, Gg = (t, e) => {
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    Array.isArray(r) ? Gg(r, e) : r && e.push(r);
  }
}, Jg = (...t) => {
  const e = [];
  Gg(t, e);
  const n = [];
  for (let r = 0; r < e.length; r++)
    e[r] && n.push(e[r]);
  return n;
}, fl = (t, e) => {
  const n = {};
  for (const r in t) {
    const o = t[r];
    if (r in e) {
      const i = e[r];
      Array.isArray(o) || Array.isArray(i) ? n[r] = Jg(i, o) : typeof o == "object" && typeof i == "object" && o && i ? n[r] = fl(o, i) : n[r] = i + " " + o;
    } else
      n[r] = o;
  }
  for (const r in e)
    r in t || (n[r] = e[r]);
  return n;
}, d_ = {
  twMerge: !0,
  twMergeConfig: {}
};
function f_() {
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
var qn = f_(), h_ = (t) => {
  const e = (r, o) => {
    const {
      extend: i = null,
      slots: s = {},
      variants: a = {},
      compoundVariants: l = [],
      compoundSlots: c = [],
      defaultVariants: d = {}
    } = r, f = { ...d_, ...o }, h = i?.base ? Ms(i.base, r?.base) : r?.base, v = i?.variants && !Kt(i.variants) ? fl(a, i.variants) : a, m = i?.defaultVariants && !Kt(i.defaultVariants) ? { ...i.defaultVariants, ...d } : d;
    !Kt(f.twMergeConfig) && !c_(f.twMergeConfig, qn.cachedTwMergeConfig) && (qn.didTwMergeConfigChange = !0, qn.cachedTwMergeConfig = f.twMergeConfig);
    const y = Kt(i?.slots), w = Kt(s) ? {} : {
      // add "base" to the slots object
      base: Ms(r?.base, y && i?.base),
      ...s
    }, b = y ? w : u_(
      { ...i?.slots },
      Kt(w) ? { base: r?.base } : w
    ), k = Kt(i?.compoundVariants) ? l : Jg(i?.compoundVariants, l), S = (x) => {
      if (Kt(v) && Kt(s) && y)
        return t(h, x?.class, x?.className)(f);
      if (k && !Array.isArray(k))
        throw new TypeError(
          `The "compoundVariants" prop must be an array. Received: ${typeof k}`
        );
      if (c && !Array.isArray(c))
        throw new TypeError(
          `The "compoundSlots" prop must be an array. Received: ${typeof c}`
        );
      const O = (C, N = v, I = null, L = null) => {
        const Z = N[C];
        if (!Z || Kt(Z))
          return null;
        const X = L?.[C] ?? x?.[C];
        if (X === null) return null;
        const D = sd(X);
        if (typeof D == "object")
          return null;
        const j = m?.[C], G = D ?? sd(j);
        return Z[G || "false"];
      }, z = () => {
        if (!v) return null;
        const C = Object.keys(v), N = [];
        for (let I = 0; I < C.length; I++) {
          const L = O(C[I], v);
          L && N.push(L);
        }
        return N;
      }, V = (C, N) => {
        if (!v || typeof v != "object") return null;
        const I = [];
        for (const L in v) {
          const Z = O(L, v, C, N), X = C === "base" && typeof Z == "string" ? Z : Z && Z[C];
          X && I.push(X);
        }
        return I;
      }, B = {};
      for (const C in x) {
        const N = x[C];
        N !== void 0 && (B[C] = N);
      }
      const $ = (C, N) => {
        const I = typeof x?.[C] == "object" ? {
          [C]: x[C]?.initial
        } : {};
        return {
          ...m,
          ...B,
          ...I,
          ...N
        };
      }, T = (C = [], N) => {
        const I = [], L = C.length;
        for (let Z = 0; Z < L; Z++) {
          const { class: X, className: D, ...j } = C[Z];
          let G = !0;
          const R = $(null, N);
          for (const ee in j) {
            const K = j[ee], U = R[ee];
            if (Array.isArray(K)) {
              if (!K.includes(U)) {
                G = !1;
                break;
              }
            } else {
              if ((K == null || K === !1) && (U == null || U === !1))
                continue;
              if (U !== K) {
                G = !1;
                break;
              }
            }
          }
          G && (X && I.push(X), D && I.push(D));
        }
        return I;
      }, E = (C) => {
        const N = T(k, C);
        if (!Array.isArray(N)) return N;
        const I = {}, L = t;
        for (let Z = 0; Z < N.length; Z++) {
          const X = N[Z];
          if (typeof X == "string")
            I.base = L(I.base, X)(f);
          else if (typeof X == "object")
            for (const D in X)
              I[D] = L(I[D], X[D])(f);
        }
        return I;
      }, M = (C) => {
        if (c.length < 1) return null;
        const N = {}, I = $(null, C);
        for (let L = 0; L < c.length; L++) {
          const {
            slots: Z = [],
            class: X,
            className: D,
            ...j
          } = c[L];
          if (!Kt(j)) {
            let G = !0;
            for (const R in j) {
              const ee = I[R], K = j[R];
              if (ee === void 0 || (Array.isArray(K) ? !K.includes(ee) : K !== ee)) {
                G = !1;
                break;
              }
            }
            if (!G) continue;
          }
          for (let G = 0; G < Z.length; G++) {
            const R = Z[G];
            N[R] || (N[R] = []), N[R].push([X, D]);
          }
        }
        return N;
      };
      if (!Kt(s) || !y) {
        const C = {};
        if (typeof b == "object" && !Kt(b)) {
          const N = t;
          for (const I in b)
            C[I] = (L) => {
              const Z = E(L), X = M(L);
              return N(
                b[I],
                V(I, L),
                Z ? Z[I] : void 0,
                X ? X[I] : void 0,
                L?.class,
                L?.className
              )(f);
            };
        }
        return C;
      }
      return t(
        h,
        z(),
        T(k),
        x?.class,
        x?.className
      )(f);
    }, _ = () => {
      if (!(!v || typeof v != "object"))
        return Object.keys(v);
    };
    return S.variantKeys = _(), S.extend = i, S.base = h, S.slots = b, S.variants = v, S.defaultVariants = m, S.compoundSlots = c, S.compoundVariants = k, S;
  };
  return {
    tv: e,
    createTV: (r) => (o, i) => e(o, i ? fl(r, i) : r)
  };
}, g_ = (t) => Kt(t) ? Ug : s_({
  ...t,
  extend: {
    theme: t.theme,
    classGroups: t.classGroups,
    conflictingClassGroupModifiers: t.conflictingClassGroupModifiers,
    conflictingClassGroups: t.conflictingClassGroups,
    ...t.extend
  }
}), p_ = (t, e) => {
  const n = Ms(t);
  return !n || !(e?.twMerge ?? !0) ? n : ((!qn.cachedTwMerge || qn.didTwMergeConfigChange) && (qn.didTwMergeConfigChange = !1, qn.cachedTwMerge = g_(qn.cachedTwMergeConfig)), qn.cachedTwMerge(n) || void 0);
}, v_ = (...t) => (e) => p_(t, e), { tv: m_ } = h_(v_);
const ad = m_({
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
var y_ = /* @__PURE__ */ re("<a><!></a>"), w_ = /* @__PURE__ */ re("<button><!></button>");
function qe(t, e) {
  le(e, !0);
  let n = p(e, "class", 7), r = p(e, "variant", 7, "outline"), o = p(e, "size", 7, "default"), i = p(e, "ref", 15, null), s = p(e, "href", 23, () => {
  }), a = p(e, "type", 7, "button"), l = p(e, "disabled", 7), c = p(e, "children", 7), d = p(e, "primary", 7), f = /* @__PURE__ */ ze(e, [
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
      n(b), g();
    },
    get variant() {
      return r();
    },
    set variant(b = "outline") {
      r(b), g();
    },
    get size() {
      return o();
    },
    set size(b = "default") {
      o(b), g();
    },
    get ref() {
      return i();
    },
    set ref(b = null) {
      i(b), g();
    },
    get href() {
      return s();
    },
    set href(b = void 0) {
      s(b), g();
    },
    get type() {
      return a();
    },
    set type(b = "button") {
      a(b), g();
    },
    get disabled() {
      return l();
    },
    set disabled(b) {
      l(b), g();
    },
    get children() {
      return c();
    },
    set children(b) {
      c(b), g();
    },
    get primary() {
      return d();
    },
    set primary(b) {
      d(b), g();
    }
  }, v = de(), m = Q(v);
  {
    var y = (b) => {
      var k = y_();
      Je(
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
          () => mn(ad({ variant: r(), size: o() }), n())
        ]
      );
      var S = q(k);
      Ae(S, () => c() ?? Be), Y(k), Tt(k, (_) => i(_), () => i()), A(b, k);
    }, w = (b) => {
      var k = w_();
      Je(
        k,
        (_) => ({
          "data-slot": "button",
          class: _,
          type: a(),
          disabled: l(),
          ...f
        }),
        [
          () => mn(ad({ variant: r(), size: o() }), n())
        ]
      );
      var S = q(k);
      Ae(S, () => c() ?? Be), Y(k), Tt(k, (_) => i(_), () => i()), A(b, k);
    };
    se(m, (b) => {
      s() ? b(y) : b(w, !1);
    });
  }
  return A(t, v), ce(h);
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
function b_(t) {
  return typeof t == "function";
}
function Ai(t) {
  return t !== null && typeof t == "object";
}
const x_ = ["string", "number", "bigint", "boolean"];
function hl(t) {
  return t == null || x_.includes(typeof t) ? !0 : Array.isArray(t) ? t.every((e) => hl(e)) : typeof t == "object" ? Object.getPrototypeOf(t) === Object.prototype : !1;
}
const Ds = Symbol("box"), Qg = Symbol("is-writable");
function ge(t, e) {
  const n = /* @__PURE__ */ P(t);
  return e ? {
    [Ds]: !0,
    [Qg]: !0,
    get current() {
      return u(n);
    },
    set current(r) {
      e(r);
    }
  } : {
    [Ds]: !0,
    get current() {
      return t();
    }
  };
}
function ep(t) {
  return Ai(t) && Ds in t;
}
function __(t) {
  return ep(t) ? t : b_(t) ? ge(t) : Mn(t);
}
function Mn(t) {
  let e = /* @__PURE__ */ ve(ht(t));
  return {
    [Ds]: !0,
    [Qg]: !0,
    get current() {
      return u(e);
    },
    set current(n) {
      W(e, n, !0);
    }
  };
}
function tp(...t) {
  return function(e) {
    for (const n of t)
      if (n) {
        if (e.defaultPrevented)
          return;
        typeof n == "function" ? n.call(this, e) : n.current?.call(this, e);
      }
  };
}
var ld = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, C_ = /\n/g, k_ = /^\s*/, S_ = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, E_ = /^:\s*/, P_ = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, N_ = /^[;\s]*/, O_ = /^\s+|\s+$/g, A_ = `
`, cd = "/", ud = "*", Lr = "", T_ = "comment", M_ = "declaration";
function D_(t, e) {
  if (typeof t != "string")
    throw new TypeError("First argument must be a string");
  if (!t) return [];
  e = e || {};
  var n = 1, r = 1;
  function o(m) {
    var y = m.match(C_);
    y && (n += y.length);
    var w = m.lastIndexOf(A_);
    r = ~w ? m.length - w : r + m.length;
  }
  function i() {
    var m = { line: n, column: r };
    return function(y) {
      return y.position = new s(m), c(), y;
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
  function c() {
    l(k_);
  }
  function d(m) {
    var y;
    for (m = m || []; y = f(); )
      y !== !1 && m.push(y);
    return m;
  }
  function f() {
    var m = i();
    if (!(cd != t.charAt(0) || ud != t.charAt(1))) {
      for (var y = 2; Lr != t.charAt(y) && (ud != t.charAt(y) || cd != t.charAt(y + 1)); )
        ++y;
      if (y += 2, Lr === t.charAt(y - 1))
        return a("End of comment missing");
      var w = t.slice(2, y - 2);
      return r += 2, o(w), t = t.slice(y), r += 2, m({
        type: T_,
        comment: w
      });
    }
  }
  function h() {
    var m = i(), y = l(S_);
    if (y) {
      if (f(), !l(E_)) return a("property missing ':'");
      var w = l(P_), b = m({
        type: M_,
        property: dd(y[0].replace(ld, Lr)),
        value: w ? dd(w[0].replace(ld, Lr)) : Lr
      });
      return l(N_), b;
    }
  }
  function v() {
    var m = [];
    d(m);
    for (var y; y = h(); )
      y !== !1 && (m.push(y), d(m));
    return m;
  }
  return c(), v();
}
function dd(t) {
  return t ? t.replace(O_, Lr) : Lr;
}
function I_(t, e) {
  let n = null;
  if (!t || typeof t != "string")
    return n;
  const r = D_(t), o = typeof e == "function";
  return r.forEach((i) => {
    if (i.type !== "declaration")
      return;
    const { property: s, value: a } = i;
    o ? e(s, a, i) : a && (n = n || {}, n[s] = a);
  }), n;
}
const V_ = /\d/, z_ = ["-", "_", "/", "."];
function L_(t = "") {
  if (!V_.test(t))
    return t !== t.toLowerCase();
}
function H_(t) {
  const e = [];
  let n = "", r, o;
  for (const i of t) {
    const s = z_.includes(i);
    if (s === !0) {
      e.push(n), n = "", r = void 0;
      continue;
    }
    const a = L_(i);
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
function np(t) {
  return t ? H_(t).map((e) => F_(e)).join("") : "";
}
function R_(t) {
  return B_(np(t || ""));
}
function F_(t) {
  return t ? t[0].toUpperCase() + t.slice(1) : "";
}
function B_(t) {
  return t ? t[0].toLowerCase() + t.slice(1) : "";
}
function Xo(t) {
  if (!t)
    return {};
  const e = {};
  function n(r, o) {
    if (r.startsWith("-moz-") || r.startsWith("-webkit-") || r.startsWith("-ms-") || r.startsWith("-o-")) {
      e[np(r)] = o;
      return;
    }
    if (r.startsWith("--")) {
      e[r] = o;
      return;
    }
    e[R_(r)] = o;
  }
  return I_(t, n), e;
}
function ei(...t) {
  return (...e) => {
    for (const n of t)
      typeof n == "function" && n(...e);
  };
}
function $_(t, e) {
  const n = RegExp(t, "g");
  return (r) => {
    if (typeof r != "string")
      throw new TypeError(`expected an argument of type string, but got ${typeof r}`);
    return r.match(n) ? r.replace(n, e) : r;
  };
}
const K_ = $_(/[A-Z]/, (t) => `-${t.toLowerCase()}`);
function W_(t) {
  if (!t || typeof t != "object" || Array.isArray(t))
    throw new TypeError(`expected an argument of type object, but got ${typeof t}`);
  return Object.keys(t).map((e) => `${K_(e)}: ${t[e]};`).join(`
`);
}
function kc(t = {}) {
  return W_(t).replace(`
`, " ");
}
const Z_ = [
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
], Y_ = new Set(Z_);
function q_(t) {
  return Y_.has(t);
}
function zn(...t) {
  const e = { ...t[0] };
  for (let n = 1; n < t.length; n++) {
    const r = t[n];
    if (r) {
      for (const o of Object.keys(r)) {
        const i = e[o], s = r[o], a = typeof i == "function", l = typeof s == "function";
        if (a && q_(o)) {
          const c = i, d = s;
          e[o] = tp(c, d);
        } else if (a && l)
          e[o] = ei(i, s);
        else if (o === "class") {
          const c = hl(i), d = hl(s);
          c && d ? e[o] = Jo(i, s) : c ? e[o] = Jo(i) : d && (e[o] = Jo(s));
        } else if (o === "style") {
          const c = typeof i == "object", d = typeof s == "object", f = typeof i == "string", h = typeof s == "string";
          if (c && d)
            e[o] = { ...i, ...s };
          else if (c && h) {
            const v = Xo(s);
            e[o] = { ...i, ...v };
          } else if (f && d) {
            const v = Xo(i);
            e[o] = { ...v, ...s };
          } else if (f && h) {
            const v = Xo(i), m = Xo(s);
            e[o] = { ...v, ...m };
          } else c ? e[o] = i : d ? e[o] = s : f ? e[o] = i : h && (e[o] = s);
        } else
          e[o] = s !== void 0 ? s : i;
      }
      for (const o of Object.getOwnPropertySymbols(r)) {
        const i = e[o], s = r[o];
        e[o] = s !== void 0 ? s : i;
      }
    }
  }
  return typeof e.style == "object" && (e.style = kc(e.style).replaceAll(`
`, " ")), e.hidden === !1 && (e.hidden = void 0, delete e.hidden), e.disabled === !1 && (e.disabled = void 0, delete e.disabled), e;
}
const j_ = {
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
}, X_ = kc(j_), rp = typeof window < "u" ? window : void 0;
function U_(t) {
  let e = t.activeElement;
  for (; e?.shadowRoot; ) {
    const n = e.shadowRoot.activeElement;
    if (n === e)
      break;
    e = n;
  }
  return e;
}
let G_ = class {
  #e;
  #t;
  constructor(e = {}) {
    const { window: n = rp, document: r = n?.document } = e;
    n !== void 0 && (this.#e = r, this.#t = to((o) => {
      const i = gt(n, "focusin", o), s = gt(n, "focusout", o);
      return () => {
        i(), s();
      };
    }));
  }
  get current() {
    return this.#t?.(), this.#e ? U_(this.#e) : null;
  }
};
new G_();
function J_(t) {
  return typeof t == "function";
}
class Dr {
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
    return wm(this.#t);
  }
  /**
   * Retrieves the context that belongs to the closest parent component.
   *
   * Must be called during component initialisation.
   *
   * @throws An error if the context does not exist.
   */
  get() {
    const e = bn(this.#t);
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
    const n = bn(this.#t);
    return n === void 0 ? e : n;
  }
  /**
   * Associates the given value with the current component and returns it.
   *
   * Must be called during component initialisation.
   */
  set(e) {
    return qr(this.#t, e);
  }
}
function Q_(t, e) {
  switch (t) {
    case "post":
      He(e);
      break;
    case "pre":
      Zt(e);
      break;
  }
}
function op(t, e, n, r = {}) {
  const { lazy: o = !1 } = r;
  let i = !o, s = Array.isArray(t) ? [] : void 0;
  Q_(e, () => {
    const a = Array.isArray(t) ? t.map((c) => c()) : t();
    if (!i) {
      i = !0, s = a;
      return;
    }
    const l = at(() => n(a, s));
    return s = a, l;
  });
}
function xt(t, e, n) {
  op(t, "post", e, n);
}
function e7(t, e, n) {
  op(t, "pre", e, n);
}
xt.pre = e7;
function fd(t) {
  return J_(t) ? t() : t;
}
class t7 {
  // no need to use `$state` here since we are using createSubscriber
  #e = { width: 0, height: 0 };
  #t = !1;
  #n;
  #r;
  #o;
  // we use a derived here to extract the width so that if the width doesn't change we don't get a state update
  // which we would get if we would just use a getter since the version of the subscriber will be changing
  #i = /* @__PURE__ */ P(() => (u(this.#s)?.(), this.getSize().width));
  // we use a derived here to extract the height so that if the height doesn't change we don't get a state update
  // which we would get if we would just use a getter since the version of the subscriber will be changing
  #a = /* @__PURE__ */ P(() => (u(this.#s)?.(), this.getSize().height));
  // we need to use a derived here because the class will be created before the node is bound to the ref
  #s = /* @__PURE__ */ P(() => {
    const e = fd(this.#r);
    if (e)
      return to((n) => {
        if (!this.#o) return;
        const r = new this.#o.ResizeObserver((o) => {
          this.#t = !0;
          for (const i of o) {
            const s = this.#n.box === "content-box" ? i.contentBoxSize : i.borderBoxSize, a = Array.isArray(s) ? s : [s];
            this.#e.width = a.reduce((l, c) => Math.max(l, c.inlineSize), 0), this.#e.height = a.reduce((l, c) => Math.max(l, c.blockSize), 0);
          }
          n();
        });
        return r.observe(e), () => {
          this.#t = !1, r.disconnect();
        };
      });
  });
  constructor(e, n = { box: "border-box" }) {
    this.#o = n.window ?? rp, this.#n = n, this.#r = e, this.#e = { width: 0, height: 0 };
  }
  calculateSize() {
    const e = fd(this.#r);
    if (!e || !this.#o)
      return;
    const n = e.offsetWidth, r = e.offsetHeight;
    if (this.#n.box === "border-box")
      return { width: n, height: r };
    const o = this.#o.getComputedStyle(e), i = parseFloat(o.paddingLeft) + parseFloat(o.paddingRight), s = parseFloat(o.paddingTop) + parseFloat(o.paddingBottom), a = parseFloat(o.borderLeftWidth) + parseFloat(o.borderRightWidth), l = parseFloat(o.borderTopWidth) + parseFloat(o.borderBottomWidth), c = n - i - a, d = r - s - l;
    return { width: c, height: d };
  }
  getSize() {
    return this.#t ? this.#e : this.calculateSize() ?? this.#e;
  }
  get current() {
    return u(this.#s)?.(), this.getSize();
  }
  get width() {
    return u(this.#i);
  }
  get height() {
    return u(this.#a);
  }
}
class n7 {
  #e = () => {
  };
  #t = /* @__PURE__ */ P(() => this.#e());
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
    return u(this.#t);
  }
}
function Do(t) {
  He(() => () => {
    t();
  });
}
function r7(t) {
  He(() => at(() => t()));
}
function o7(t, e) {
  return setTimeout(e, t);
}
function Ti(t) {
  If().then(t);
}
const i7 = 1, s7 = 9, a7 = 11;
function gl(t) {
  return Ai(t) && t.nodeType === i7 && typeof t.nodeName == "string";
}
function ip(t) {
  return Ai(t) && t.nodeType === s7;
}
function l7(t) {
  return Ai(t) && t.constructor?.name === "VisualViewport";
}
function c7(t) {
  return Ai(t) && t.nodeType !== void 0;
}
function sp(t) {
  return c7(t) && t.nodeType === a7 && "host" in t;
}
function u7(t, e) {
  if (!t || !e || !gl(t) || !gl(e))
    return !1;
  const n = e.getRootNode?.();
  if (t === e || t.contains(e))
    return !0;
  if (n && sp(n)) {
    let r = e;
    for (; r; ) {
      if (t === r)
        return !0;
      r = r.parentNode || r.host;
    }
  }
  return !1;
}
function d7(t) {
  return ip(t) ? t : l7(t) ? t.document : t?.ownerDocument ?? document;
}
function ap(t) {
  return sp(t) ? ap(t.host) : ip(t) ? t.defaultView ?? window : gl(t) ? t.ownerDocument?.defaultView ?? window : window;
}
function f7(t) {
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
  #e = /* @__PURE__ */ P(() => this.element.current ? this.element.current.getRootNode() ?? document : document);
  get root() {
    return u(this.#e);
  }
  set root(e) {
    W(this.#e, e);
  }
  constructor(e) {
    typeof e == "function" ? this.element = ge(e) : this.element = e;
  }
  getDocument = () => d7(this.root);
  getWindow = () => this.getDocument().defaultView ?? window;
  getActiveElement = () => f7(this.root);
  isActiveElement = (e) => e === this.getActiveElement();
  getElementById(e) {
    return this.root.getElementById(e);
  }
  querySelector = (e) => this.root ? this.root.querySelector(e) : null;
  querySelectorAll = (e) => this.root ? this.root.querySelectorAll(e) : [];
  setTimeout = (e, n) => this.getWindow().setTimeout(e, n);
  clearTimeout = (e) => this.getWindow().clearTimeout(e);
}
function Cr(t, e) {
  return {
    [r1()]: (n) => ep(t) ? (t.current = n, at(() => e?.(n)), () => {
      "isConnected" in n && n.isConnected || (t.current = null, e?.(null));
    }) : (t(n), at(() => e?.(n)), () => {
      "isConnected" in n && n.isConnected || (t(null), e?.(null));
    })
  };
}
function pl(t) {
  return t ? "true" : "false";
}
function Is(t) {
  return t ? "" : void 0;
}
function hd(t) {
  return t ? !0 : void 0;
}
function lp(t) {
  return t ? "open" : "closed";
}
function h7(t, e) {
  return e ? "mixed" : t ? "true" : "false";
}
class g7 {
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
function Sc(t) {
  const e = new g7(t);
  return {
    ...e.attrs,
    selector: e.selector,
    getAttr: e.getAttr
  };
}
const Uo = "ArrowDown", uo = "ArrowUp", cp = "End", vl = "Enter", p7 = "Escape", up = "Home", dp = "PageDown", fp = "PageUp", as = " ", gd = "Tab", hp = typeof document < "u", ml = v7();
function v7() {
  return hp && window?.navigator?.userAgent && (/iP(ad|hone|od)/.test(window.navigator.userAgent) || // The new iPad Pro Gen3 does not identify itself as iPad, but as Macintosh.
  window?.navigator?.maxTouchPoints > 2 && /iPad|Macintosh/.test(window?.navigator.userAgent));
}
function yl(t) {
  return t instanceof HTMLElement;
}
function m7(t) {
  return t instanceof Element || t instanceof SVGElement;
}
function y7(t) {
  return t !== null;
}
class w7 {
  #e;
  #t = null;
  constructor(e) {
    this.#e = e, Do(() => this.#n());
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
    this.#e.afterTick ? Ti(n) : n();
  }
}
class b7 {
  #e;
  #t;
  #n;
  #r = /* @__PURE__ */ ve(!1);
  constructor(e) {
    this.#e = e, W(this.#r, e.open.current, !0), this.#t = e.enabled ?? !0, this.#n = new w7({ ref: this.#e.ref, afterTick: this.#e.open }), xt(() => this.#e.open.current, (n) => {
      n && W(this.#r, !0), this.#t && this.#n.run(() => {
        n === this.#e.open.current && (this.#e.open.current || W(this.#r, !1), this.#e.onComplete?.());
      });
    });
  }
  get shouldRender() {
    return u(this.#r);
  }
}
function Ke() {
}
function Rn(t, e) {
  return `bits-${t}`;
}
function gp(t, e) {
  le(e, !0);
  const n = p(e, "children", 7);
  var r = {
    get children() {
      return n();
    },
    set children(s) {
      n(s), g();
    }
  }, o = de(), i = Q(o);
  return o1(i, n, (s) => {
    var a = de(), l = Q(a);
    Ae(l, () => n() ?? Be), A(s, a);
  }), A(t, o), ce(r);
}
ie(gp, { children: {} }, [], [], !0);
const x7 = new Dr("BitsConfig");
function _7() {
  const t = new C7(null, {});
  return x7.getOr(t).opts;
}
class C7 {
  opts;
  constructor(e, n) {
    const r = k7(e, n);
    this.opts = {
      defaultPortalTo: r((o) => o.defaultPortalTo),
      defaultLocale: r((o) => o.defaultLocale)
    };
  }
}
function k7(t, e) {
  return (n) => ge(() => {
    const o = n(e)?.current;
    if (o !== void 0)
      return o;
    if (t !== null)
      return n(t.opts)?.current;
  });
}
function S7(t, e) {
  return (n) => {
    const r = _7();
    return ge(() => {
      const o = n();
      if (o !== void 0)
        return o;
      const i = t(r).current;
      return i !== void 0 ? i : e;
    });
  };
}
const E7 = S7((t) => t.defaultPortalTo, "body");
function wl(t, e) {
  le(e, !0);
  let n = p(e, "to", 7), r = p(e, "children", 7), o = p(e, "disabled", 7);
  const i = E7(() => n()), s = bm();
  let a = /* @__PURE__ */ P(l);
  function l() {
    if (!hp || o()) return null;
    let y = null;
    return typeof i.current == "string" ? y = document.querySelector(i.current) : y = i.current, y;
  }
  let c;
  function d() {
    c && (Rf(c), c = null);
  }
  xt([() => u(a), () => o()], ([y, w]) => {
    if (!y || w) {
      d();
      return;
    }
    return c = tc(gp, { target: y, props: { children: r() }, context: s }), () => {
      d();
    };
  });
  var f = {
    get to() {
      return n();
    },
    set to(y) {
      n(y), g();
    },
    get children() {
      return r();
    },
    set children(y) {
      r(y), g();
    },
    get disabled() {
      return o();
    },
    set disabled(y) {
      o(y), g();
    }
  }, h = de(), v = Q(h);
  {
    var m = (y) => {
      var w = de(), b = Q(w);
      Ae(b, () => r() ?? Be), A(y, w);
    };
    se(v, (y) => {
      o() && y(m);
    });
  }
  return A(t, h), ce(f);
}
ie(wl, { to: {}, children: {}, disabled: {} }, [], [], !0);
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
function pp(t, e) {
  return t === e || t.contains(e);
}
function vp(t) {
  return t?.ownerDocument ?? document;
}
function P7(t, e) {
  const { clientX: n, clientY: r } = t, o = e.getBoundingClientRect();
  return n < o.left || n > o.right || r < o.top || r > o.bottom;
}
var mp = ["input:not([inert]):not([inert] *)", "select:not([inert]):not([inert] *)", "textarea:not([inert]):not([inert] *)", "a[href]:not([inert]):not([inert] *)", "button:not([inert]):not([inert] *)", "[tabindex]:not(slot):not([inert]):not([inert] *)", "audio[controls]:not([inert]):not([inert] *)", "video[controls]:not([inert]):not([inert] *)", '[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)', "details>summary:first-of-type:not([inert]):not([inert] *)", "details:not([inert]):not([inert] *)"], bl = /* @__PURE__ */ mp.join(","), yp = typeof Element > "u", Po = yp ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, Vs = !yp && Element.prototype.getRootNode ? function(t) {
  var e;
  return t == null || (e = t.getRootNode) === null || e === void 0 ? void 0 : e.call(t);
} : function(t) {
  return t?.ownerDocument;
}, zs = function(e, n) {
  var r;
  n === void 0 && (n = !0);
  var o = e == null || (r = e.getAttribute) === null || r === void 0 ? void 0 : r.call(e, "inert"), i = o === "" || o === "true", s = i || n && e && // closest does not exist on shadow roots, so we fall back to a manual
  // lookup upward, in case it is not defined.
  (typeof e.closest == "function" ? e.closest("[inert]") : zs(e.parentNode));
  return s;
}, N7 = function(e) {
  var n, r = e == null || (n = e.getAttribute) === null || n === void 0 ? void 0 : n.call(e, "contenteditable");
  return r === "" || r === "true";
}, wp = function(e, n, r) {
  if (zs(e))
    return [];
  var o = Array.prototype.slice.apply(e.querySelectorAll(bl));
  return n && Po.call(e, bl) && o.unshift(e), o = o.filter(r), o;
}, Ls = function(e, n, r) {
  for (var o = [], i = Array.from(e); i.length; ) {
    var s = i.shift();
    if (!zs(s, !1))
      if (s.tagName === "SLOT") {
        var a = s.assignedElements(), l = a.length ? a : s.children, c = Ls(l, !0, r);
        r.flatten ? o.push.apply(o, c) : o.push({
          scopeParent: s,
          candidates: c
        });
      } else {
        var d = Po.call(s, bl);
        d && r.filter(s) && (n || !e.includes(s)) && o.push(s);
        var f = s.shadowRoot || // check for an undisclosed shadow
        typeof r.getShadowRoot == "function" && r.getShadowRoot(s), h = !zs(f, !1) && (!r.shadowRootFilter || r.shadowRootFilter(s));
        if (f && h) {
          var v = Ls(f === !0 ? s.children : f.children, !0, r);
          r.flatten ? o.push.apply(o, v) : o.push({
            scopeParent: s,
            candidates: v
          });
        } else
          i.unshift.apply(i, s.children);
      }
  }
  return o;
}, bp = function(e) {
  return !isNaN(parseInt(e.getAttribute("tabindex"), 10));
}, xp = function(e) {
  if (!e)
    throw new Error("No node provided");
  return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || N7(e)) && !bp(e) ? 0 : e.tabIndex;
}, O7 = function(e, n) {
  var r = xp(e);
  return r < 0 && n && !bp(e) ? 0 : r;
}, A7 = function(e, n) {
  return e.tabIndex === n.tabIndex ? e.documentOrder - n.documentOrder : e.tabIndex - n.tabIndex;
}, _p = function(e) {
  return e.tagName === "INPUT";
}, T7 = function(e) {
  return _p(e) && e.type === "hidden";
}, M7 = function(e) {
  var n = e.tagName === "DETAILS" && Array.prototype.slice.apply(e.children).some(function(r) {
    return r.tagName === "SUMMARY";
  });
  return n;
}, D7 = function(e, n) {
  for (var r = 0; r < e.length; r++)
    if (e[r].checked && e[r].form === n)
      return e[r];
}, I7 = function(e) {
  if (!e.name)
    return !0;
  var n = e.form || Vs(e), r = function(a) {
    return n.querySelectorAll('input[type="radio"][name="' + a + '"]');
  }, o;
  if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function")
    o = r(window.CSS.escape(e.name));
  else
    try {
      o = r(e.name);
    } catch (s) {
      return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", s.message), !1;
    }
  var i = D7(o, e.form);
  return !i || i === e;
}, V7 = function(e) {
  return _p(e) && e.type === "radio";
}, z7 = function(e) {
  return V7(e) && !I7(e);
}, L7 = function(e) {
  var n, r = e && Vs(e), o = (n = r) === null || n === void 0 ? void 0 : n.host, i = !1;
  if (r && r !== e) {
    var s, a, l;
    for (i = !!((s = o) !== null && s !== void 0 && (a = s.ownerDocument) !== null && a !== void 0 && a.contains(o) || e != null && (l = e.ownerDocument) !== null && l !== void 0 && l.contains(e)); !i && o; ) {
      var c, d, f;
      r = Vs(o), o = (c = r) === null || c === void 0 ? void 0 : c.host, i = !!((d = o) !== null && d !== void 0 && (f = d.ownerDocument) !== null && f !== void 0 && f.contains(o));
    }
  }
  return i;
}, vd = function(e) {
  var n = e.getBoundingClientRect(), r = n.width, o = n.height;
  return r === 0 && o === 0;
}, H7 = function(e, n) {
  var r = n.displayCheck, o = n.getShadowRoot;
  if (r === "full-native" && "checkVisibility" in e) {
    var i = e.checkVisibility({
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
    return !i;
  }
  if (getComputedStyle(e).visibility === "hidden")
    return !0;
  var s = Po.call(e, "details>summary:first-of-type"), a = s ? e.parentElement : e;
  if (Po.call(a, "details:not([open]) *"))
    return !0;
  if (!r || r === "full" || // full-native can run this branch when it falls through in case
  // Element#checkVisibility is unsupported
  r === "full-native" || r === "legacy-full") {
    if (typeof o == "function") {
      for (var l = e; e; ) {
        var c = e.parentElement, d = Vs(e);
        if (c && !c.shadowRoot && o(c) === !0)
          return vd(e);
        e.assignedSlot ? e = e.assignedSlot : !c && d !== e.ownerDocument ? e = d.host : e = c;
      }
      e = l;
    }
    if (L7(e))
      return !e.getClientRects().length;
    if (r !== "legacy-full")
      return !0;
  } else if (r === "non-zero-area")
    return vd(e);
  return !1;
}, R7 = function(e) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))
    for (var n = e.parentElement; n; ) {
      if (n.tagName === "FIELDSET" && n.disabled) {
        for (var r = 0; r < n.children.length; r++) {
          var o = n.children.item(r);
          if (o.tagName === "LEGEND")
            return Po.call(n, "fieldset[disabled] *") ? !0 : !o.contains(e);
        }
        return !0;
      }
      n = n.parentElement;
    }
  return !1;
}, Hs = function(e, n) {
  return !(n.disabled || T7(n) || H7(n, e) || // For a details element with a summary, the summary element gets the focus
  M7(n) || R7(n));
}, md = function(e, n) {
  return !(z7(n) || xp(n) < 0 || !Hs(e, n));
}, F7 = function(e) {
  var n = parseInt(e.getAttribute("tabindex"), 10);
  return !!(isNaN(n) || n >= 0);
}, Cp = function(e) {
  var n = [], r = [];
  return e.forEach(function(o, i) {
    var s = !!o.scopeParent, a = s ? o.scopeParent : o, l = O7(a, s), c = s ? Cp(o.candidates) : a;
    l === 0 ? s ? n.push.apply(n, c) : n.push(a) : r.push({
      documentOrder: i,
      tabIndex: l,
      item: o,
      isScope: s,
      content: c
    });
  }), r.sort(A7).reduce(function(o, i) {
    return i.isScope ? o.push.apply(o, i.content) : o.push(i.content), o;
  }, []).concat(n);
}, B7 = function(e, n) {
  n = n || {};
  var r;
  return n.getShadowRoot ? r = Ls([e], n.includeContainer, {
    filter: md.bind(null, n),
    flatten: !1,
    getShadowRoot: n.getShadowRoot,
    shadowRootFilter: F7
  }) : r = wp(e, n.includeContainer, md.bind(null, n)), Cp(r);
}, $7 = function(e, n) {
  n = n || {};
  var r;
  return n.getShadowRoot ? r = Ls([e], n.includeContainer, {
    filter: Hs.bind(null, n),
    flatten: !0,
    getShadowRoot: n.getShadowRoot
  }) : r = wp(e, n.includeContainer, Hs.bind(null, n)), r;
}, K7 = /* @__PURE__ */ mp.concat("iframe:not([inert]):not([inert] *)").join(","), W7 = function(e, n) {
  if (n = n || {}, !e)
    throw new Error("No node provided");
  return Po.call(e, K7) === !1 ? !1 : Hs(n, e);
};
function Z7(t, e, n = !0) {
  if (!(t.length === 0 || e < 0 || e >= t.length))
    return t.length === 1 && e === 0 ? t[0] : e === t.length - 1 ? n ? t[0] : void 0 : t[e + 1];
}
function Y7(t, e, n = !0) {
  if (!(t.length === 0 || e < 0 || e >= t.length))
    return t.length === 1 && e === 0 ? t[0] : e === 0 ? n ? t[t.length - 1] : void 0 : t[e - 1];
}
function q7(t, e, n, r = !0) {
  if (t.length === 0 || e < 0 || e >= t.length)
    return;
  let o = e + n;
  return r ? o = (o % t.length + t.length) % t.length : o = Math.max(0, Math.min(o, t.length - 1)), t[o];
}
function j7(t, e, n, r = !0) {
  if (t.length === 0 || e < 0 || e >= t.length)
    return;
  let o = e - n;
  return r ? o = (o % t.length + t.length) % t.length : o = Math.max(0, Math.min(o, t.length - 1)), t[o];
}
function Ec(t, e, n) {
  const r = e.toLowerCase();
  if (r.endsWith(" ")) {
    const f = r.slice(0, -1);
    if (t.filter((y) => y.toLowerCase().startsWith(f)).length <= 1)
      return Ec(t, f, n);
    const v = n?.toLowerCase();
    if (v && v.startsWith(f) && v.charAt(f.length) === " " && e.trim() === f)
      return n;
    const m = t.filter((y) => y.toLowerCase().startsWith(r));
    if (m.length > 0) {
      const y = n ? t.indexOf(n) : -1;
      return yd(m, Math.max(y, 0)).find((k) => k !== n) || n;
    }
  }
  const i = e.length > 1 && Array.from(e).every((f) => f === e[0]) ? e[0] : e, s = i.toLowerCase(), a = n ? t.indexOf(n) : -1;
  let l = yd(t, Math.max(a, 0));
  i.length === 1 && (l = l.filter((f) => f !== n));
  const d = l.find((f) => f?.toLowerCase().startsWith(s));
  return d !== n ? d : void 0;
}
function yd(t, e) {
  return t.map((n, r) => t[(e + r) % t.length]);
}
const X7 = { afterMs: 1e4, onChange: Ke };
function kp(t, e) {
  const { afterMs: n, onChange: r, getWindow: o } = { ...X7, ...e };
  let i = null, s = /* @__PURE__ */ ve(ht(t));
  function a() {
    return o().setTimeout(
      () => {
        W(s, t, !0), r?.(t);
      },
      n
    );
  }
  return He(() => () => {
    i && o().clearTimeout(i);
  }), ge(() => u(s), (l) => {
    W(s, l, !0), r?.(l), i && o().clearTimeout(i), i = a();
  });
}
class U7 {
  #e;
  #t;
  #n = /* @__PURE__ */ P(() => this.#e.onMatch ? this.#e.onMatch : (e) => e.focus());
  #r = /* @__PURE__ */ P(() => this.#e.getCurrentItem ? this.#e.getCurrentItem : this.#e.getActiveElement);
  constructor(e) {
    this.#e = e, this.#t = kp("", { afterMs: 1e3, getWindow: e.getWindow }), this.handleTypeaheadSearch = this.handleTypeaheadSearch.bind(this), this.resetTypeahead = this.resetTypeahead.bind(this);
  }
  handleTypeaheadSearch(e, n) {
    if (!n.length) return;
    this.#t.current = this.#t.current + e;
    const r = u(this.#r)(), o = n.find((l) => l === r)?.textContent?.trim() ?? "", i = n.map((l) => l.textContent?.trim() ?? ""), s = Ec(i, this.#t.current, o), a = n.find((l) => l.textContent?.trim() === s);
    return a && u(this.#n)(a), a;
  }
  resetTypeahead() {
    this.#t.current = "";
  }
  get search() {
    return this.#t.current;
  }
}
const G7 = "data-context-menu-trigger", J7 = "data-context-menu-content";
Sc({
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
class Pc {
  static create(e) {
    return new Pc(e);
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
    this.opts = e, this.#t = e.interactOutsideBehavior, this.#e = e.onInteractOutside, this.#a = e.onFocusOutside, He(() => {
      this.#i = vp(this.opts.ref.current);
    });
    let n = Ke;
    const r = () => {
      this.#v(), globalThis.bitsDismissableLayers.delete(this), this.#d.destroy(), n();
    };
    xt([() => this.opts.enabled.current, () => this.opts.ref.current], () => {
      if (!(!this.opts.enabled.current || !this.opts.ref.current))
        return o7(1, () => {
          this.opts.ref.current && (globalThis.bitsDismissableLayers.set(this, this.#t), n(), n = this.#c());
        }), r;
    }), Do(() => {
      this.#v.destroy(), globalThis.bitsDismissableLayers.delete(this), this.#d.destroy(), this.#s(), n();
    });
  }
  #l = (e) => {
    e.defaultPrevented || this.opts.ref.current && Ti(() => {
      !this.opts.ref.current || this.#y(e.target) || e.target && !this.#o && this.#a.current?.(e);
    });
  };
  #c() {
    return ei(
      /**
       * CAPTURE INTERACTION START
       * mark interaction-start event as intercepted.
       * mark responsible layer during interaction start
       * to avoid checking if is responsible layer during interaction end
       * when a new floating element may have been opened.
       */
      gt(this.#i, "pointerdown", ei(this.#f, this.#h), { capture: !0 }),
      /**
       * BUBBLE INTERACTION START
       * Mark interaction-start event as non-intercepted. Debounce `onInteractOutsideStart`
       * to avoid prematurely checking if other events were intercepted.
       */
      gt(this.#i, "pointerdown", ei(this.#g, this.#d)),
      /**
       * HANDLE FOCUS OUTSIDE
       */
      gt(this.#i, "focusin", this.#l)
    );
  }
  #u = (e) => {
    let n = e;
    n.defaultPrevented && (n = wd(e)), this.#e.current(e);
  };
  #d = pd(
    (e) => {
      if (!this.opts.ref.current) {
        this.#s();
        return;
      }
      const n = this.opts.isValidEvent.current(e, this.opts.ref.current) || tC(e, this.opts.ref.current);
      if (!this.#r || this.#w() || !n) {
        this.#s();
        return;
      }
      let r = e;
      if (r.defaultPrevented && (r = wd(r)), this.#t.current !== "close" && this.#t.current !== "defer-otherwise-close") {
        this.#s();
        return;
      }
      e.pointerType === "touch" ? (this.#s(), this.#s = gt(this.#i, "click", this.#u, { once: !0 })) : this.#e.current(r);
    },
    10
  );
  #f = (e) => {
    this.#n[e.type] = !0;
  };
  #g = (e) => {
    this.#n[e.type] = !1;
  };
  #h = () => {
    this.opts.ref.current && (this.#r = eC(this.opts.ref.current));
  };
  #y = (e) => this.opts.ref.current ? pp(this.opts.ref.current, e) : !1;
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
  #p = () => {
    this.#o = !1;
  };
  props = {
    onfocuscapture: this.#m,
    onblurcapture: this.#p
  };
}
function Q7(t = [...globalThis.bitsDismissableLayers]) {
  return t.findLast(([e, { current: n }]) => n === "close" || n === "ignore");
}
function eC(t) {
  const e = [...globalThis.bitsDismissableLayers], n = Q7(e);
  if (n) return n[0].opts.ref.current === t;
  const [r] = e[0];
  return r.opts.ref.current === t;
}
function tC(t, e) {
  const n = t.target;
  if (!m7(n)) return !1;
  const r = !!n.closest(`[${G7}]`);
  if ("button" in t && t.button > 0 && !r) return !1;
  if ("button" in t && t.button === 0 && r) return !0;
  const o = !!e.closest(`[${J7}]`);
  return r && o ? !1 : vp(n).documentElement.contains(n) && !pp(e, n) && P7(t, e);
}
function wd(t) {
  const e = t.currentTarget, n = t.target;
  let r;
  t instanceof PointerEvent ? r = new PointerEvent(t.type, t) : r = new PointerEvent("pointerdown", t);
  let o = !1;
  return new Proxy(r, {
    get: (s, a) => a === "currentTarget" ? e : a === "target" ? n : a === "preventDefault" ? () => {
      o = !0, typeof s.preventDefault == "function" && s.preventDefault();
    } : a === "defaultPrevented" ? o : a in s ? s[a] : t[a]
  });
}
function Sp(t, e) {
  le(e, !0);
  let n = p(e, "interactOutsideBehavior", 7, "close"), r = p(e, "onInteractOutside", 7, Ke), o = p(e, "onFocusOutside", 7, Ke), i = p(e, "id", 7), s = p(e, "children", 7), a = p(e, "enabled", 7), l = p(e, "isValidEvent", 7, () => !1), c = p(e, "ref", 7);
  const d = Pc.create({
    id: ge(() => i()),
    interactOutsideBehavior: ge(() => n()),
    onInteractOutside: ge(() => r()),
    enabled: ge(() => a()),
    onFocusOutside: ge(() => o()),
    isValidEvent: ge(() => l()),
    ref: c()
  });
  var f = {
    get interactOutsideBehavior() {
      return n();
    },
    set interactOutsideBehavior(m = "close") {
      n(m), g();
    },
    get onInteractOutside() {
      return r();
    },
    set onInteractOutside(m = Ke) {
      r(m), g();
    },
    get onFocusOutside() {
      return o();
    },
    set onFocusOutside(m = Ke) {
      o(m), g();
    },
    get id() {
      return i();
    },
    set id(m) {
      i(m), g();
    },
    get children() {
      return s();
    },
    set children(m) {
      s(m), g();
    },
    get enabled() {
      return a();
    },
    set enabled(m) {
      a(m), g();
    },
    get isValidEvent() {
      return l();
    },
    set isValidEvent(m = () => !1) {
      l(m), g();
    },
    get ref() {
      return c();
    },
    set ref(m) {
      c(m), g();
    }
  }, h = de(), v = Q(h);
  return Ae(v, () => s() ?? Be, () => ({ props: d.props })), A(t, h), ce(f);
}
ie(
  Sp,
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
class Nc {
  static create(e) {
    return new Nc(e);
  }
  opts;
  domContext;
  constructor(e) {
    this.opts = e, this.domContext = new Mi(this.opts.ref);
    let n = Ke;
    xt(() => e.enabled.current, (r) => (r && (globalThis.bitsEscapeLayers.set(this, e.escapeKeydownBehavior), n = this.#e()), () => {
      n(), globalThis.bitsEscapeLayers.delete(this);
    }));
  }
  #e = () => gt(this.domContext.getDocument(), "keydown", this.#t, { passive: !1 });
  #t = (e) => {
    if (e.key !== p7 || !nC(this)) return;
    const n = new KeyboardEvent(e.type, e);
    e.preventDefault();
    const r = this.opts.escapeKeydownBehavior.current;
    r !== "close" && r !== "defer-otherwise-close" || this.opts.onEscapeKeydown.current(n);
  };
}
function nC(t) {
  const e = [...globalThis.bitsEscapeLayers], n = e.findLast(([o, { current: i }]) => i === "close" || i === "ignore");
  if (n) return n[0] === t;
  const [r] = e[0];
  return r === t;
}
function Ep(t, e) {
  le(e, !0);
  let n = p(e, "escapeKeydownBehavior", 7, "close"), r = p(e, "onEscapeKeydown", 7, Ke), o = p(e, "children", 7), i = p(e, "enabled", 7), s = p(e, "ref", 7);
  Nc.create({
    escapeKeydownBehavior: ge(() => n()),
    onEscapeKeydown: ge(() => r()),
    enabled: ge(() => i()),
    ref: s()
  });
  var a = {
    get escapeKeydownBehavior() {
      return n();
    },
    set escapeKeydownBehavior(d = "close") {
      n(d), g();
    },
    get onEscapeKeydown() {
      return r();
    },
    set onEscapeKeydown(d = Ke) {
      r(d), g();
    },
    get children() {
      return o();
    },
    set children(d) {
      o(d), g();
    },
    get enabled() {
      return i();
    },
    set enabled(d) {
      i(d), g();
    },
    get ref() {
      return s();
    },
    set ref(d) {
      s(d), g();
    }
  }, l = de(), c = Q(l);
  return Ae(c, () => o() ?? Be), A(t, l), ce(a);
}
ie(
  Ep,
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
class Oc {
  static instance;
  #e = Mn([]);
  #t = /* @__PURE__ */ new WeakMap();
  #n = /* @__PURE__ */ new WeakMap();
  static getInstance() {
    return this.instance || (this.instance = new Oc()), this.instance;
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
class Ac {
  #e = !1;
  #t = null;
  #n = Oc.getInstance();
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
      const n = this.#u();
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
      if (!a) return;
      if (e.contains(a))
        this.#n.setFocusMemory(this, a);
      else {
        const c = this.#n.getFocusMemory(this);
        if (c && e.contains(c) && W7(c))
          s.preventDefault(), c.focus();
        else {
          const d = this.#u(), f = this.#d()[0];
          (d || f || e).focus();
        }
      }
    }, o = (s) => {
      if (!this.#o.loop || this.#e || s.key !== "Tab" || !this.#n.isActiveScope(this)) return;
      const a = this.#c();
      if (a.length === 0) return;
      const l = a[0], c = a[a.length - 1];
      !s.shiftKey && n.activeElement === c ? (s.preventDefault(), l.focus()) : s.shiftKey && n.activeElement === l && (s.preventDefault(), c.focus());
    };
    this.#r.push(gt(n, "focusin", r, { capture: !0 }), gt(e, "keydown", o));
    const i = new MutationObserver(() => {
      const s = this.#n.getFocusMemory(this);
      if (s && !e.contains(s)) {
        const a = this.#u(), l = this.#d()[0], c = a || l;
        c ? (c.focus(), this.#n.setFocusMemory(this, c)) : e.focus();
      }
    });
    i.observe(e, { childList: !0, subtree: !0 }), this.#r.push(() => i.disconnect());
  }
  #c() {
    return this.#t ? B7(this.#t, { includeContainer: !1, getShadowRoot: !0 }) : [];
  }
  #u() {
    return this.#c()[0] || null;
  }
  #d() {
    return this.#t ? $7(this.#t, { includeContainer: !1, getShadowRoot: !0 }) : [];
  }
  static use(e) {
    let n = null;
    return xt([() => e.ref.current, () => e.enabled.current], ([r, o]) => {
      r && o ? (n || (n = new Ac(e)), n.mount(r)) : n && (n.unmount(), n = null);
    }), Do(() => {
      n?.unmount();
    }), {
      get props() {
        return { tabindex: -1 };
      }
    };
  }
}
function Pp(t, e) {
  le(e, !0);
  let n = p(e, "enabled", 7, !1), r = p(e, "trapFocus", 7, !1), o = p(e, "loop", 7, !1), i = p(e, "onCloseAutoFocus", 7, Ke), s = p(e, "onOpenAutoFocus", 7, Ke), a = p(e, "focusScope", 7), l = p(e, "ref", 7);
  const c = Ac.use({
    enabled: ge(() => n()),
    trap: ge(() => r()),
    loop: o(),
    onCloseAutoFocus: ge(() => i()),
    onOpenAutoFocus: ge(() => s()),
    ref: l()
  });
  var d = {
    get enabled() {
      return n();
    },
    set enabled(v = !1) {
      n(v), g();
    },
    get trapFocus() {
      return r();
    },
    set trapFocus(v = !1) {
      r(v), g();
    },
    get loop() {
      return o();
    },
    set loop(v = !1) {
      o(v), g();
    },
    get onCloseAutoFocus() {
      return i();
    },
    set onCloseAutoFocus(v = Ke) {
      i(v), g();
    },
    get onOpenAutoFocus() {
      return s();
    },
    set onOpenAutoFocus(v = Ke) {
      s(v), g();
    },
    get focusScope() {
      return a();
    },
    set focusScope(v) {
      a(v), g();
    },
    get ref() {
      return l();
    },
    set ref(v) {
      l(v), g();
    }
  }, f = de(), h = Q(f);
  return Ae(h, () => a() ?? Be, () => ({ props: c.props })), A(t, f), ce(d);
}
ie(
  Pp,
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
class Tc {
  static create(e) {
    return new Tc(e);
  }
  opts;
  domContext;
  #e = Ke;
  constructor(e) {
    this.opts = e, this.domContext = new Mi(e.ref);
    let n = Ke;
    xt(() => this.opts.enabled.current, (r) => (r && (globalThis.bitsTextSelectionLayers.set(this, this.opts.enabled), n(), n = this.#t()), () => {
      n(), this.#r(), globalThis.bitsTextSelectionLayers.delete(this);
    }));
  }
  #t() {
    return ei(gt(this.domContext.getDocument(), "pointerdown", this.#n), gt(this.domContext.getDocument(), "pointerup", tp(this.#r, this.opts.onPointerUp.current)));
  }
  #n = (e) => {
    const n = this.opts.ref.current, r = e.target;
    !yl(n) || !yl(r) || !this.opts.enabled.current || !oC(this) || !u7(n, r) || (this.opts.onPointerDown.current(e), !e.defaultPrevented && (this.#e = rC(n, this.domContext.getDocument().body)));
  };
  #r = () => {
    this.#e(), this.#e = Ke;
  };
}
const bd = (t) => t.style.userSelect || t.style.webkitUserSelect;
function rC(t, e) {
  const n = bd(e), r = bd(t);
  return Xi(e, "none"), Xi(t, "text"), () => {
    Xi(e, n), Xi(t, r);
  };
}
function Xi(t, e) {
  t.style.userSelect = e, t.style.webkitUserSelect = e;
}
function oC(t) {
  const e = [...globalThis.bitsTextSelectionLayers];
  if (!e.length) return !1;
  const n = e.at(-1);
  return n ? n[0] === t : !1;
}
function Np(t, e) {
  le(e, !0);
  let n = p(e, "preventOverflowTextSelection", 7, !0), r = p(e, "onPointerDown", 7, Ke), o = p(e, "onPointerUp", 7, Ke), i = p(e, "id", 7), s = p(e, "children", 7), a = p(e, "enabled", 7), l = p(e, "ref", 7);
  Tc.create({
    id: ge(() => i()),
    onPointerDown: ge(() => r()),
    onPointerUp: ge(() => o()),
    enabled: ge(() => a() && n()),
    ref: l()
  });
  var c = {
    get preventOverflowTextSelection() {
      return n();
    },
    set preventOverflowTextSelection(h = !0) {
      n(h), g();
    },
    get onPointerDown() {
      return r();
    },
    set onPointerDown(h = Ke) {
      r(h), g();
    },
    get onPointerUp() {
      return o();
    },
    set onPointerUp(h = Ke) {
      o(h), g();
    },
    get id() {
      return i();
    },
    set id(h) {
      i(h), g();
    },
    get children() {
      return s();
    },
    set children(h) {
      s(h), g();
    },
    get enabled() {
      return a();
    },
    set enabled(h) {
      a(h), g();
    },
    get ref() {
      return l();
    },
    set ref(h) {
      l(h), g();
    }
  }, d = de(), f = Q(d);
  return Ae(f, () => s() ?? Be), A(t, d), ce(c);
}
ie(
  Np,
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
class iC {
  #e;
  #t = 0;
  #n = /* @__PURE__ */ ve();
  #r;
  constructor(e) {
    this.#e = e;
  }
  #o() {
    this.#t -= 1, this.#r && this.#t <= 0 && (this.#r(), W(this.#n, void 0), this.#r = void 0);
  }
  get(...e) {
    return this.#t += 1, u(this.#n) === void 0 && (this.#r = no(() => {
      W(this.#n, this.#e(...e), !0);
    })), He(() => () => {
      this.#o();
    }), u(this.#n);
  }
}
const ls = new h2();
let Ui = /* @__PURE__ */ ve(null), La = null, Bo = null, $o = !1;
const xd = ge(() => {
  for (const t of ls.values())
    if (t) return !0;
  return !1;
});
let Ha = null;
const sC = new iC(() => {
  function t() {
    document.body.setAttribute("style", u(Ui) ?? ""), document.body.style.removeProperty("--scrollbar-width"), ml && La?.(), W(Ui, null);
  }
  function e() {
    Bo !== null && (window.clearTimeout(Bo), Bo = null);
  }
  function n(o, i) {
    e(), $o = !0, Ha = Date.now();
    const s = Ha, a = () => {
      Bo = null, Ha === s && (Op(ls) ? $o = !1 : ($o = !1, i()));
    }, l = o === null ? 24 : o;
    Bo = window.setTimeout(a, l);
  }
  function r() {
    u(Ui) === null && ls.size === 0 && !$o && W(Ui, document.body.getAttribute("style"), !0);
  }
  return xt(() => xd.current, () => {
    if (!xd.current) return;
    r(), $o = !1;
    const o = getComputedStyle(document.documentElement), i = getComputedStyle(document.body), s = o.scrollbarGutter?.includes("stable") || i.scrollbarGutter?.includes("stable"), a = window.innerWidth - document.documentElement.clientWidth, c = {
      padding: Number.parseInt(i.paddingRight ?? "0", 10) + a,
      margin: Number.parseInt(i.marginRight ?? "0", 10)
    };
    a > 0 && !s && (document.body.style.paddingRight = `${c.padding}px`, document.body.style.marginRight = `${c.margin}px`, document.body.style.setProperty("--scrollbar-width", `${a}px`)), document.body.style.overflow = "hidden", ml && (La = gt(
      document,
      "touchmove",
      (d) => {
        d.target === document.documentElement && (d.touches.length > 1 || d.preventDefault());
      },
      { passive: !1 }
    )), Ti(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }), Do(() => () => {
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
class aC {
  #e = Rs();
  #t;
  #n = () => null;
  #r;
  locked;
  constructor(e, n = () => null) {
    this.#t = e, this.#n = n, this.#r = sC.get(), this.#r && (this.#r.cancelPendingCleanup(), this.#r.ensureInitialStyleCaptured(), this.#r.lockMap.set(this.#e, this.#t ?? !1), this.locked = ge(() => this.#r.lockMap.get(this.#e) ?? !1, (r) => this.#r.lockMap.set(this.#e, r)), Do(() => {
      if (this.#r.lockMap.delete(this.#e), Op(this.#r.lockMap)) return;
      const r = this.#n();
      this.#r.scheduleCleanupIfNoNewLocks(r, () => {
        this.#r.resetBodyStyle();
      });
    }));
  }
}
function Op(t) {
  for (const [e, n] of t)
    if (n) return !0;
  return !1;
}
function xl(t, e) {
  le(e, !0);
  let n = p(e, "preventScroll", 7, !0), r = p(e, "restoreScrollDelay", 7, null);
  n() && new aC(n(), () => r());
  var o = {
    get preventScroll() {
      return n();
    },
    set preventScroll(i = !0) {
      n(i), g();
    },
    get restoreScrollDelay() {
      return r();
    },
    set restoreScrollDelay(i = null) {
      r(i), g();
    }
  };
  return ce(o);
}
ie(xl, { preventScroll: {}, restoreScrollDelay: {} }, [], [], !0);
const lC = Sc({
  component: "checkbox",
  parts: ["root", "group", "group-label", "input"]
}), cC = new Dr("Checkbox.Group"), Ap = new Dr("Checkbox.Root");
class Mc {
  static create(e, n = null) {
    return Ap.set(new Mc(e, n));
  }
  opts;
  group;
  #e = /* @__PURE__ */ P(() => this.group && this.group.opts.name.current ? this.group.opts.name.current : this.opts.name.current);
  get trueName() {
    return u(this.#e);
  }
  set trueName(e) {
    W(this.#e, e);
  }
  #t = /* @__PURE__ */ P(() => this.group && this.group.opts.required.current ? !0 : this.opts.required.current);
  get trueRequired() {
    return u(this.#t);
  }
  set trueRequired(e) {
    W(this.#t, e);
  }
  #n = /* @__PURE__ */ P(() => this.group && this.group.opts.disabled.current ? !0 : this.opts.disabled.current);
  get trueDisabled() {
    return u(this.#n);
  }
  set trueDisabled(e) {
    W(this.#n, e);
  }
  #r = /* @__PURE__ */ P(() => this.group && this.group.opts.readonly.current ? !0 : this.opts.readonly.current);
  get trueReadonly() {
    return u(this.#r);
  }
  set trueReadonly(e) {
    W(this.#r, e);
  }
  attachment;
  constructor(e, n) {
    this.opts = e, this.group = n, this.attachment = Cr(this.opts.ref), this.onkeydown = this.onkeydown.bind(this), this.onclick = this.onclick.bind(this), xt.pre(
      [
        () => Yl(this.group?.opts.value.current),
        () => this.opts.value.current
      ],
      ([r, o]) => {
        !r || !o || (this.opts.checked.current = r.includes(o));
      }
    ), xt.pre(() => this.opts.checked.current, (r) => {
      this.group && (r ? this.group?.addValue(this.opts.value.current) : this.group?.removeValue(this.opts.value.current));
    });
  }
  onkeydown(e) {
    if (!(this.trueDisabled || this.trueReadonly)) {
      if (e.key === vl) {
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
  #i = /* @__PURE__ */ P(() => ({
    checked: this.opts.checked.current,
    indeterminate: this.opts.indeterminate.current
  }));
  get snippetProps() {
    return u(this.#i);
  }
  set snippetProps(e) {
    W(this.#i, e);
  }
  #a = /* @__PURE__ */ P(() => ({
    id: this.opts.id.current,
    role: "checkbox",
    type: this.opts.type.current,
    disabled: this.trueDisabled,
    "aria-checked": h7(this.opts.checked.current, this.opts.indeterminate.current),
    "aria-required": pl(this.trueRequired),
    "aria-readonly": pl(this.trueReadonly),
    "data-disabled": Is(this.trueDisabled),
    "data-readonly": Is(this.trueReadonly),
    "data-state": uC(this.opts.checked.current, this.opts.indeterminate.current),
    [lC.root]: "",
    onclick: this.onclick,
    onkeydown: this.onkeydown,
    ...this.attachment
  }));
  get props() {
    return u(this.#a);
  }
  set props(e) {
    W(this.#a, e);
  }
}
class Dc {
  static create() {
    return new Dc(Ap.get());
  }
  root;
  #e = /* @__PURE__ */ P(() => this.root.group ? !!(this.root.opts.value.current !== void 0 && this.root.group.opts.value.current.includes(this.root.opts.value.current)) : this.root.opts.checked.current);
  get trueChecked() {
    return u(this.#e);
  }
  set trueChecked(e) {
    W(this.#e, e);
  }
  #t = /* @__PURE__ */ P(() => !!this.root.trueName);
  get shouldRender() {
    return u(this.#t);
  }
  set shouldRender(e) {
    W(this.#t, e);
  }
  constructor(e) {
    this.root = e, this.onfocus = this.onfocus.bind(this);
  }
  onfocus(e) {
    yl(this.root.opts.ref.current) && this.root.opts.ref.current.focus();
  }
  #n = /* @__PURE__ */ P(() => ({
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
  set props(e) {
    W(this.#n, e);
  }
}
function uC(t, e) {
  return e ? "indeterminate" : t ? "checked" : "unchecked";
}
var dC = /* @__PURE__ */ re("<input/>"), fC = /* @__PURE__ */ re("<input/>");
function Ic(t, e) {
  le(e, !0);
  let n = p(e, "value", 15), r = /* @__PURE__ */ ze(e, ["$$slots", "$$events", "$$legacy", "$$host", "value"]);
  const o = /* @__PURE__ */ P(() => zn(r, {
    "aria-hidden": "true",
    tabindex: -1,
    style: X_
  }));
  var i = {
    get value() {
      return n();
    },
    set value(d) {
      n(d), g();
    }
  }, s = de(), a = Q(s);
  {
    var l = (d) => {
      var f = dC();
      Je(f, () => ({ ...u(o), value: n() }), void 0, void 0, void 0, void 0, !0), A(d, f);
    }, c = (d) => {
      var f = fC();
      Je(f, () => ({ ...u(o) }), void 0, void 0, void 0, void 0, !0), ys(f, n), A(d, f);
    };
    se(a, (d) => {
      u(o).type === "checkbox" ? d(l) : d(c, !1);
    });
  }
  return A(t, s), ce(i);
}
ie(Ic, { value: {} }, [], [], !0);
function Tp(t, e) {
  le(e, !1);
  const n = Dc.create();
  rc();
  var r = de(), o = Q(r);
  {
    var i = (s) => {
      Ic(s, Fe(() => n.props));
    };
    se(o, (s) => {
      n.shouldRender && s(i);
    });
  }
  A(t, r), ce();
}
ie(Tp, {}, [], [], !0);
var hC = /* @__PURE__ */ re("<button><!></button>"), gC = /* @__PURE__ */ re("<!> <!>", 1);
function Mp(t, e) {
  const n = wi();
  le(e, !0);
  let r = p(e, "checked", 15, !1), o = p(e, "ref", 15, null), i = p(e, "onCheckedChange", 7), s = p(e, "children", 7), a = p(e, "disabled", 7, !1), l = p(e, "required", 7, !1), c = p(e, "name", 23, () => {
  }), d = p(e, "value", 7, "on"), f = p(e, "id", 23, () => Rn(n)), h = p(e, "indeterminate", 15, !1), v = p(e, "onIndeterminateChange", 7), m = p(e, "child", 7), y = p(e, "type", 7, "button"), w = p(e, "readonly", 7), b = /* @__PURE__ */ ze(e, [
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
  const k = cC.getOr(null);
  k && d() && (k.opts.value.current.includes(d()) ? r(!0) : r(!1)), xt.pre(() => d(), () => {
    k && d() && (k.opts.value.current.includes(d()) ? r(!0) : r(!1));
  });
  const S = Mc.create(
    {
      checked: ge(() => r(), (T) => {
        r(T), i()?.(T);
      }),
      disabled: ge(() => a() ?? !1),
      required: ge(() => l()),
      name: ge(() => c()),
      value: ge(() => d()),
      id: ge(() => f()),
      ref: ge(() => o(), (T) => o(T)),
      indeterminate: ge(() => h(), (T) => {
        h(T), v()?.(T);
      }),
      type: ge(() => y()),
      readonly: ge(() => !!w())
    },
    k
  ), _ = /* @__PURE__ */ P(() => zn({ ...b }, S.props));
  var x = {
    get checked() {
      return r();
    },
    set checked(T = !1) {
      r(T), g();
    },
    get ref() {
      return o();
    },
    set ref(T = null) {
      o(T), g();
    },
    get onCheckedChange() {
      return i();
    },
    set onCheckedChange(T) {
      i(T), g();
    },
    get children() {
      return s();
    },
    set children(T) {
      s(T), g();
    },
    get disabled() {
      return a();
    },
    set disabled(T = !1) {
      a(T), g();
    },
    get required() {
      return l();
    },
    set required(T = !1) {
      l(T), g();
    },
    get name() {
      return c();
    },
    set name(T = void 0) {
      c(T), g();
    },
    get value() {
      return d();
    },
    set value(T = "on") {
      d(T), g();
    },
    get id() {
      return f();
    },
    set id(T = Rn(n)) {
      f(T), g();
    },
    get indeterminate() {
      return h();
    },
    set indeterminate(T = !1) {
      h(T), g();
    },
    get onIndeterminateChange() {
      return v();
    },
    set onIndeterminateChange(T) {
      v(T), g();
    },
    get child() {
      return m();
    },
    set child(T) {
      m(T), g();
    },
    get type() {
      return y();
    },
    set type(T = "button") {
      y(T), g();
    },
    get readonly() {
      return w();
    },
    set readonly(T) {
      w(T), g();
    }
  }, O = gC(), z = Q(O);
  {
    var V = (T) => {
      var E = de(), M = Q(E);
      {
        let C = /* @__PURE__ */ P(() => ({ props: u(_), ...S.snippetProps }));
        Ae(M, m, () => u(C));
      }
      A(T, E);
    }, B = (T) => {
      var E = hC();
      Je(E, () => ({ ...u(_) }));
      var M = q(E);
      Ae(M, () => s() ?? Be, () => S.snippetProps), Y(E), A(T, E);
    };
    se(z, (T) => {
      m() ? T(V) : T(B, !1);
    });
  }
  var $ = F(z, 2);
  return Tp($, {}), A(t, O), ce(x);
}
ie(
  Mp,
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
const pC = ["top", "right", "bottom", "left"], Sr = Math.min, Qt = Math.max, Fs = Math.round, Gi = Math.floor, Ln = (t) => ({
  x: t,
  y: t
}), vC = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, mC = {
  start: "end",
  end: "start"
};
function _l(t, e, n) {
  return Qt(t, Sr(e, n));
}
function sr(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function ar(t) {
  return t.split("-")[0];
}
function Io(t) {
  return t.split("-")[1];
}
function Vc(t) {
  return t === "x" ? "y" : "x";
}
function zc(t) {
  return t === "y" ? "height" : "width";
}
const yC = /* @__PURE__ */ new Set(["top", "bottom"]);
function Dn(t) {
  return yC.has(ar(t)) ? "y" : "x";
}
function Lc(t) {
  return Vc(Dn(t));
}
function wC(t, e, n) {
  n === void 0 && (n = !1);
  const r = Io(t), o = Lc(t), i = zc(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return e.reference[i] > e.floating[i] && (s = Bs(s)), [s, Bs(s)];
}
function bC(t) {
  const e = Bs(t);
  return [Cl(t), e, Cl(e)];
}
function Cl(t) {
  return t.replace(/start|end/g, (e) => mC[e]);
}
const _d = ["left", "right"], Cd = ["right", "left"], xC = ["top", "bottom"], _C = ["bottom", "top"];
function CC(t, e, n) {
  switch (t) {
    case "top":
    case "bottom":
      return n ? e ? Cd : _d : e ? _d : Cd;
    case "left":
    case "right":
      return e ? xC : _C;
    default:
      return [];
  }
}
function kC(t, e, n, r) {
  const o = Io(t);
  let i = CC(ar(t), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), e && (i = i.concat(i.map(Cl)))), i;
}
function Bs(t) {
  return t.replace(/left|right|bottom|top/g, (e) => vC[e]);
}
function SC(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function Dp(t) {
  return typeof t != "number" ? SC(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function $s(t) {
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
  const i = Dn(e), s = Lc(e), a = zc(s), l = ar(e), c = i === "y", d = r.x + r.width / 2 - o.width / 2, f = r.y + r.height / 2 - o.height / 2, h = r[a] / 2 - o[a] / 2;
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
        y: f
      };
      break;
    case "left":
      v = {
        x: r.x - o.width,
        y: f
      };
      break;
    default:
      v = {
        x: r.x,
        y: r.y
      };
  }
  switch (Io(e)) {
    case "start":
      v[s] -= h * (n && c ? -1 : 1);
      break;
    case "end":
      v[s] += h * (n && c ? -1 : 1);
      break;
  }
  return v;
}
const EC = async (t, e, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: i = [],
    platform: s
  } = n, a = i.filter(Boolean), l = await (s.isRTL == null ? void 0 : s.isRTL(e));
  let c = await s.getElementRects({
    reference: t,
    floating: e,
    strategy: o
  }), {
    x: d,
    y: f
  } = kd(c, r, l), h = r, v = {}, m = 0;
  for (let y = 0; y < a.length; y++) {
    const {
      name: w,
      fn: b
    } = a[y], {
      x: k,
      y: S,
      data: _,
      reset: x
    } = await b({
      x: d,
      y: f,
      initialPlacement: r,
      placement: h,
      strategy: o,
      middlewareData: v,
      rects: c,
      platform: s,
      elements: {
        reference: t,
        floating: e
      }
    });
    d = k ?? d, f = S ?? f, v = {
      ...v,
      [w]: {
        ...v[w],
        ..._
      }
    }, x && m <= 50 && (m++, typeof x == "object" && (x.placement && (h = x.placement), x.rects && (c = x.rects === !0 ? await s.getElementRects({
      reference: t,
      floating: e,
      strategy: o
    }) : x.rects), {
      x: d,
      y: f
    } = kd(c, h, l)), y = -1);
  }
  return {
    x: d,
    y: f,
    placement: h,
    strategy: o,
    middlewareData: v
  };
};
async function fi(t, e) {
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
    boundary: c = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: f = "floating",
    altBoundary: h = !1,
    padding: v = 0
  } = sr(e, t), m = Dp(v), w = a[h ? f === "floating" ? "reference" : "floating" : f], b = $s(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(w))) == null || n ? w : w.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: c,
    rootBoundary: d,
    strategy: l
  })), k = f === "floating" ? {
    x: r,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, S = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)), _ = await (i.isElement == null ? void 0 : i.isElement(S)) ? await (i.getScale == null ? void 0 : i.getScale(S)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, x = $s(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: k,
    offsetParent: S,
    strategy: l
  }) : k);
  return {
    top: (b.top - x.top + m.top) / _.y,
    bottom: (x.bottom - b.bottom + m.bottom) / _.y,
    left: (b.left - x.left + m.left) / _.x,
    right: (x.right - b.right + m.right) / _.x
  };
}
const PC = (t) => ({
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
      element: c,
      padding: d = 0
    } = sr(t, e) || {};
    if (c == null)
      return {};
    const f = Dp(d), h = {
      x: n,
      y: r
    }, v = Lc(o), m = zc(v), y = await s.getDimensions(c), w = v === "y", b = w ? "top" : "left", k = w ? "bottom" : "right", S = w ? "clientHeight" : "clientWidth", _ = i.reference[m] + i.reference[v] - h[v] - i.floating[m], x = h[v] - i.reference[v], O = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c));
    let z = O ? O[S] : 0;
    (!z || !await (s.isElement == null ? void 0 : s.isElement(O))) && (z = a.floating[S] || i.floating[m]);
    const V = _ / 2 - x / 2, B = z / 2 - y[m] / 2 - 1, $ = Sr(f[b], B), T = Sr(f[k], B), E = $, M = z - y[m] - T, C = z / 2 - y[m] / 2 + V, N = _l(E, C, M), I = !l.arrow && Io(o) != null && C !== N && i.reference[m] / 2 - (C < E ? $ : T) - y[m] / 2 < 0, L = I ? C < E ? C - E : C - M : 0;
    return {
      [v]: h[v] + L,
      data: {
        [v]: N,
        centerOffset: C - N - L,
        ...I && {
          alignmentOffset: L
        }
      },
      reset: I
    };
  }
}), NC = function(t) {
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
        elements: c
      } = e, {
        mainAxis: d = !0,
        crossAxis: f = !0,
        fallbackPlacements: h,
        fallbackStrategy: v = "bestFit",
        fallbackAxisSideDirection: m = "none",
        flipAlignment: y = !0,
        ...w
      } = sr(t, e);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const b = ar(o), k = Dn(a), S = ar(a) === a, _ = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), x = h || (S || !y ? [Bs(a)] : bC(a)), O = m !== "none";
      !h && O && x.push(...kC(a, y, m, _));
      const z = [a, ...x], V = await fi(e, w), B = [];
      let $ = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (d && B.push(V[b]), f) {
        const C = wC(o, s, _);
        B.push(V[C[0]], V[C[1]]);
      }
      if ($ = [...$, {
        placement: o,
        overflows: B
      }], !B.every((C) => C <= 0)) {
        var T, E;
        const C = (((T = i.flip) == null ? void 0 : T.index) || 0) + 1, N = z[C];
        if (N && (!(f === "alignment" ? k !== Dn(N) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        $.every((Z) => Dn(Z.placement) === k ? Z.overflows[0] > 0 : !0)))
          return {
            data: {
              index: C,
              overflows: $
            },
            reset: {
              placement: N
            }
          };
        let I = (E = $.filter((L) => L.overflows[0] <= 0).sort((L, Z) => L.overflows[1] - Z.overflows[1])[0]) == null ? void 0 : E.placement;
        if (!I)
          switch (v) {
            case "bestFit": {
              var M;
              const L = (M = $.filter((Z) => {
                if (O) {
                  const X = Dn(Z.placement);
                  return X === k || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  X === "y";
                }
                return !0;
              }).map((Z) => [Z.placement, Z.overflows.filter((X) => X > 0).reduce((X, D) => X + D, 0)]).sort((Z, X) => Z[1] - X[1])[0]) == null ? void 0 : M[0];
              L && (I = L);
              break;
            }
            case "initialPlacement":
              I = a;
              break;
          }
        if (o !== I)
          return {
            reset: {
              placement: I
            }
          };
      }
      return {};
    }
  };
};
function Sd(t, e) {
  return {
    top: t.top - e.height,
    right: t.right - e.width,
    bottom: t.bottom - e.height,
    left: t.left - e.width
  };
}
function Ed(t) {
  return pC.some((e) => t[e] >= 0);
}
const OC = function(t) {
  return t === void 0 && (t = {}), {
    name: "hide",
    options: t,
    async fn(e) {
      const {
        rects: n
      } = e, {
        strategy: r = "referenceHidden",
        ...o
      } = sr(t, e);
      switch (r) {
        case "referenceHidden": {
          const i = await fi(e, {
            ...o,
            elementContext: "reference"
          }), s = Sd(i, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: Ed(s)
            }
          };
        }
        case "escaped": {
          const i = await fi(e, {
            ...o,
            altBoundary: !0
          }), s = Sd(i, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: Ed(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, Ip = /* @__PURE__ */ new Set(["left", "top"]);
async function AC(t, e) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = t, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = ar(n), a = Io(n), l = Dn(n) === "y", c = Ip.has(s) ? -1 : 1, d = i && l ? -1 : 1, f = sr(e, t);
  let {
    mainAxis: h,
    crossAxis: v,
    alignmentAxis: m
  } = typeof f == "number" ? {
    mainAxis: f,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: f.mainAxis || 0,
    crossAxis: f.crossAxis || 0,
    alignmentAxis: f.alignmentAxis
  };
  return a && typeof m == "number" && (v = a === "end" ? m * -1 : m), l ? {
    x: v * d,
    y: h * c
  } : {
    x: h * c,
    y: v * d
  };
}
const TC = function(t) {
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
      } = e, l = await AC(e, t);
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
}, MC = function(t) {
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
      } = sr(t, e), c = {
        x: n,
        y: r
      }, d = await fi(e, l), f = Dn(ar(o)), h = Vc(f);
      let v = c[h], m = c[f];
      if (i) {
        const w = h === "y" ? "top" : "left", b = h === "y" ? "bottom" : "right", k = v + d[w], S = v - d[b];
        v = _l(k, v, S);
      }
      if (s) {
        const w = f === "y" ? "top" : "left", b = f === "y" ? "bottom" : "right", k = m + d[w], S = m - d[b];
        m = _l(k, m, S);
      }
      const y = a.fn({
        ...e,
        [h]: v,
        [f]: m
      });
      return {
        ...y,
        data: {
          x: y.x - n,
          y: y.y - r,
          enabled: {
            [h]: i,
            [f]: s
          }
        }
      };
    }
  };
}, DC = function(t) {
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
        crossAxis: c = !0
      } = sr(t, e), d = {
        x: n,
        y: r
      }, f = Dn(o), h = Vc(f);
      let v = d[h], m = d[f];
      const y = sr(a, e), w = typeof y == "number" ? {
        mainAxis: y,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...y
      };
      if (l) {
        const S = h === "y" ? "height" : "width", _ = i.reference[h] - i.floating[S] + w.mainAxis, x = i.reference[h] + i.reference[S] - w.mainAxis;
        v < _ ? v = _ : v > x && (v = x);
      }
      if (c) {
        var b, k;
        const S = h === "y" ? "width" : "height", _ = Ip.has(ar(o)), x = i.reference[f] - i.floating[S] + (_ && ((b = s.offset) == null ? void 0 : b[f]) || 0) + (_ ? 0 : w.crossAxis), O = i.reference[f] + i.reference[S] + (_ ? 0 : ((k = s.offset) == null ? void 0 : k[f]) || 0) - (_ ? w.crossAxis : 0);
        m < x ? m = x : m > O && (m = O);
      }
      return {
        [h]: v,
        [f]: m
      };
    }
  };
}, IC = function(t) {
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
        ...c
      } = sr(t, e), d = await fi(e, c), f = ar(o), h = Io(o), v = Dn(o) === "y", {
        width: m,
        height: y
      } = i.floating;
      let w, b;
      f === "top" || f === "bottom" ? (w = f, b = h === (await (s.isRTL == null ? void 0 : s.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (b = f, w = h === "end" ? "top" : "bottom");
      const k = y - d.top - d.bottom, S = m - d.left - d.right, _ = Sr(y - d[w], k), x = Sr(m - d[b], S), O = !e.middlewareData.shift;
      let z = _, V = x;
      if ((n = e.middlewareData.shift) != null && n.enabled.x && (V = S), (r = e.middlewareData.shift) != null && r.enabled.y && (z = k), O && !h) {
        const $ = Qt(d.left, 0), T = Qt(d.right, 0), E = Qt(d.top, 0), M = Qt(d.bottom, 0);
        v ? V = m - 2 * ($ !== 0 || T !== 0 ? $ + T : Qt(d.left, d.right)) : z = y - 2 * (E !== 0 || M !== 0 ? E + M : Qt(d.top, d.bottom));
      }
      await l({
        ...e,
        availableWidth: V,
        availableHeight: z
      });
      const B = await s.getDimensions(a.floating);
      return m !== B.width || y !== B.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function pa() {
  return typeof window < "u";
}
function Vo(t) {
  return Vp(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function tn(t) {
  var e;
  return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function Kn(t) {
  var e;
  return (e = (Vp(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
}
function Vp(t) {
  return pa() ? t instanceof Node || t instanceof tn(t).Node : !1;
}
function xn(t) {
  return pa() ? t instanceof Element || t instanceof tn(t).Element : !1;
}
function Fn(t) {
  return pa() ? t instanceof HTMLElement || t instanceof tn(t).HTMLElement : !1;
}
function Pd(t) {
  return !pa() || typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof tn(t).ShadowRoot;
}
const VC = /* @__PURE__ */ new Set(["inline", "contents"]);
function Di(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: r,
    display: o
  } = _n(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + r + n) && !VC.has(o);
}
const zC = /* @__PURE__ */ new Set(["table", "td", "th"]);
function LC(t) {
  return zC.has(Vo(t));
}
const HC = [":popover-open", ":modal"];
function va(t) {
  return HC.some((e) => {
    try {
      return t.matches(e);
    } catch {
      return !1;
    }
  });
}
const RC = ["transform", "translate", "scale", "rotate", "perspective"], FC = ["transform", "translate", "scale", "rotate", "perspective", "filter"], BC = ["paint", "layout", "strict", "content"];
function Hc(t) {
  const e = Rc(), n = xn(t) ? _n(t) : t;
  return RC.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !e && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !e && (n.filter ? n.filter !== "none" : !1) || FC.some((r) => (n.willChange || "").includes(r)) || BC.some((r) => (n.contain || "").includes(r));
}
function $C(t) {
  let e = Er(t);
  for (; Fn(e) && !No(e); ) {
    if (Hc(e))
      return e;
    if (va(e))
      return null;
    e = Er(e);
  }
  return null;
}
function Rc() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const KC = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function No(t) {
  return KC.has(Vo(t));
}
function _n(t) {
  return tn(t).getComputedStyle(t);
}
function ma(t) {
  return xn(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.scrollX,
    scrollTop: t.scrollY
  };
}
function Er(t) {
  if (Vo(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node.
    t.assignedSlot || // DOM Element detected.
    t.parentNode || // ShadowRoot detected.
    Pd(t) && t.host || // Fallback.
    Kn(t)
  );
  return Pd(e) ? e.host : e;
}
function zp(t) {
  const e = Er(t);
  return No(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : Fn(e) && Di(e) ? e : zp(e);
}
function hi(t, e, n) {
  var r;
  e === void 0 && (e = []), n === void 0 && (n = !0);
  const o = zp(t), i = o === ((r = t.ownerDocument) == null ? void 0 : r.body), s = tn(o);
  if (i) {
    const a = kl(s);
    return e.concat(s, s.visualViewport || [], Di(o) ? o : [], a && n ? hi(a) : []);
  }
  return e.concat(o, hi(o, [], n));
}
function kl(t) {
  return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null;
}
function Lp(t) {
  const e = _n(t);
  let n = parseFloat(e.width) || 0, r = parseFloat(e.height) || 0;
  const o = Fn(t), i = o ? t.offsetWidth : n, s = o ? t.offsetHeight : r, a = Fs(n) !== i || Fs(r) !== s;
  return a && (n = i, r = s), {
    width: n,
    height: r,
    $: a
  };
}
function Fc(t) {
  return xn(t) ? t : t.contextElement;
}
function mo(t) {
  const e = Fc(t);
  if (!Fn(e))
    return Ln(1);
  const n = e.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = Lp(e);
  let s = (i ? Fs(n.width) : n.width) / r, a = (i ? Fs(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const WC = /* @__PURE__ */ Ln(0);
function Hp(t) {
  const e = tn(t);
  return !Rc() || !e.visualViewport ? WC : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function ZC(t, e, n) {
  return e === void 0 && (e = !1), !n || e && n !== tn(t) ? !1 : e;
}
function Qr(t, e, n, r) {
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const o = t.getBoundingClientRect(), i = Fc(t);
  let s = Ln(1);
  e && (r ? xn(r) && (s = mo(r)) : s = mo(t));
  const a = ZC(i, n, r) ? Hp(i) : Ln(0);
  let l = (o.left + a.x) / s.x, c = (o.top + a.y) / s.y, d = o.width / s.x, f = o.height / s.y;
  if (i) {
    const h = tn(i), v = r && xn(r) ? tn(r) : r;
    let m = h, y = kl(m);
    for (; y && r && v !== m; ) {
      const w = mo(y), b = y.getBoundingClientRect(), k = _n(y), S = b.left + (y.clientLeft + parseFloat(k.paddingLeft)) * w.x, _ = b.top + (y.clientTop + parseFloat(k.paddingTop)) * w.y;
      l *= w.x, c *= w.y, d *= w.x, f *= w.y, l += S, c += _, m = tn(y), y = kl(m);
    }
  }
  return $s({
    width: d,
    height: f,
    x: l,
    y: c
  });
}
function ya(t, e) {
  const n = ma(t).scrollLeft;
  return e ? e.left + n : Qr(Kn(t)).left + n;
}
function Rp(t, e) {
  const n = t.getBoundingClientRect(), r = n.left + e.scrollLeft - ya(t, n), o = n.top + e.scrollTop;
  return {
    x: r,
    y: o
  };
}
function YC(t) {
  let {
    elements: e,
    rect: n,
    offsetParent: r,
    strategy: o
  } = t;
  const i = o === "fixed", s = Kn(r), a = e ? va(e.floating) : !1;
  if (r === s || a && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = Ln(1);
  const d = Ln(0), f = Fn(r);
  if ((f || !f && !i) && ((Vo(r) !== "body" || Di(s)) && (l = ma(r)), Fn(r))) {
    const v = Qr(r);
    c = mo(r), d.x = v.x + r.clientLeft, d.y = v.y + r.clientTop;
  }
  const h = s && !f && !i ? Rp(s, l) : Ln(0);
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - l.scrollLeft * c.x + d.x + h.x,
    y: n.y * c.y - l.scrollTop * c.y + d.y + h.y
  };
}
function qC(t) {
  return Array.from(t.getClientRects());
}
function jC(t) {
  const e = Kn(t), n = ma(t), r = t.ownerDocument.body, o = Qt(e.scrollWidth, e.clientWidth, r.scrollWidth, r.clientWidth), i = Qt(e.scrollHeight, e.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + ya(t);
  const a = -n.scrollTop;
  return _n(r).direction === "rtl" && (s += Qt(e.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
const Nd = 25;
function XC(t, e) {
  const n = tn(t), r = Kn(t), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, a = 0, l = 0;
  if (o) {
    i = o.width, s = o.height;
    const d = Rc();
    (!d || d && e === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  const c = ya(r);
  if (c <= 0) {
    const d = r.ownerDocument, f = d.body, h = getComputedStyle(f), v = d.compatMode === "CSS1Compat" && parseFloat(h.marginLeft) + parseFloat(h.marginRight) || 0, m = Math.abs(r.clientWidth - f.clientWidth - v);
    m <= Nd && (i -= m);
  } else c <= Nd && (i += c);
  return {
    width: i,
    height: s,
    x: a,
    y: l
  };
}
const UC = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function GC(t, e) {
  const n = Qr(t, !0, e === "fixed"), r = n.top + t.clientTop, o = n.left + t.clientLeft, i = Fn(t) ? mo(t) : Ln(1), s = t.clientWidth * i.x, a = t.clientHeight * i.y, l = o * i.x, c = r * i.y;
  return {
    width: s,
    height: a,
    x: l,
    y: c
  };
}
function Od(t, e, n) {
  let r;
  if (e === "viewport")
    r = XC(t, n);
  else if (e === "document")
    r = jC(Kn(t));
  else if (xn(e))
    r = GC(e, n);
  else {
    const o = Hp(t);
    r = {
      x: e.x - o.x,
      y: e.y - o.y,
      width: e.width,
      height: e.height
    };
  }
  return $s(r);
}
function Fp(t, e) {
  const n = Er(t);
  return n === e || !xn(n) || No(n) ? !1 : _n(n).position === "fixed" || Fp(n, e);
}
function JC(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let r = hi(t, [], !1).filter((a) => xn(a) && Vo(a) !== "body"), o = null;
  const i = _n(t).position === "fixed";
  let s = i ? Er(t) : t;
  for (; xn(s) && !No(s); ) {
    const a = _n(s), l = Hc(s);
    !l && a.position === "fixed" && (o = null), (i ? !l && !o : !l && a.position === "static" && !!o && UC.has(o.position) || Di(s) && !l && Fp(t, s)) ? r = r.filter((d) => d !== s) : o = a, s = Er(s);
  }
  return e.set(t, r), r;
}
function QC(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = t;
  const s = [...n === "clippingAncestors" ? va(e) ? [] : JC(e, this._c) : [].concat(n), r], a = s[0], l = s.reduce((c, d) => {
    const f = Od(e, d, o);
    return c.top = Qt(f.top, c.top), c.right = Sr(f.right, c.right), c.bottom = Sr(f.bottom, c.bottom), c.left = Qt(f.left, c.left), c;
  }, Od(e, a, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function e5(t) {
  const {
    width: e,
    height: n
  } = Lp(t);
  return {
    width: e,
    height: n
  };
}
function t5(t, e, n) {
  const r = Fn(e), o = Kn(e), i = n === "fixed", s = Qr(t, !0, i, e);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Ln(0);
  function c() {
    l.x = ya(o);
  }
  if (r || !r && !i)
    if ((Vo(e) !== "body" || Di(o)) && (a = ma(e)), r) {
      const v = Qr(e, !0, i, e);
      l.x = v.x + e.clientLeft, l.y = v.y + e.clientTop;
    } else o && c();
  i && !r && o && c();
  const d = o && !r && !i ? Rp(o, a) : Ln(0), f = s.left + a.scrollLeft - l.x - d.x, h = s.top + a.scrollTop - l.y - d.y;
  return {
    x: f,
    y: h,
    width: s.width,
    height: s.height
  };
}
function Ra(t) {
  return _n(t).position === "static";
}
function Ad(t, e) {
  if (!Fn(t) || _n(t).position === "fixed")
    return null;
  if (e)
    return e(t);
  let n = t.offsetParent;
  return Kn(t) === n && (n = n.ownerDocument.body), n;
}
function Bp(t, e) {
  const n = tn(t);
  if (va(t))
    return n;
  if (!Fn(t)) {
    let o = Er(t);
    for (; o && !No(o); ) {
      if (xn(o) && !Ra(o))
        return o;
      o = Er(o);
    }
    return n;
  }
  let r = Ad(t, e);
  for (; r && LC(r) && Ra(r); )
    r = Ad(r, e);
  return r && No(r) && Ra(r) && !Hc(r) ? n : r || $C(t) || n;
}
const n5 = async function(t) {
  const e = this.getOffsetParent || Bp, n = this.getDimensions, r = await n(t.floating);
  return {
    reference: t5(t.reference, await e(t.floating), t.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function r5(t) {
  return _n(t).direction === "rtl";
}
const o5 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: YC,
  getDocumentElement: Kn,
  getClippingRect: QC,
  getOffsetParent: Bp,
  getElementRects: n5,
  getClientRects: qC,
  getDimensions: e5,
  getScale: mo,
  isElement: xn,
  isRTL: r5
};
function $p(t, e) {
  return t.x === e.x && t.y === e.y && t.width === e.width && t.height === e.height;
}
function i5(t, e) {
  let n = null, r;
  const o = Kn(t);
  function i() {
    var a;
    clearTimeout(r), (a = n) == null || a.disconnect(), n = null;
  }
  function s(a, l) {
    a === void 0 && (a = !1), l === void 0 && (l = 1), i();
    const c = t.getBoundingClientRect(), {
      left: d,
      top: f,
      width: h,
      height: v
    } = c;
    if (a || e(), !h || !v)
      return;
    const m = Gi(f), y = Gi(o.clientWidth - (d + h)), w = Gi(o.clientHeight - (f + v)), b = Gi(d), S = {
      rootMargin: -m + "px " + -y + "px " + -w + "px " + -b + "px",
      threshold: Qt(0, Sr(1, l)) || 1
    };
    let _ = !0;
    function x(O) {
      const z = O[0].intersectionRatio;
      if (z !== l) {
        if (!_)
          return s();
        z ? s(!1, z) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      z === 1 && !$p(c, t.getBoundingClientRect()) && s(), _ = !1;
    }
    try {
      n = new IntersectionObserver(x, {
        ...S,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(x, S);
    }
    n.observe(t);
  }
  return s(!0), i;
}
function s5(t, e, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, c = Fc(t), d = o || i ? [...c ? hi(c) : [], ...hi(e)] : [];
  d.forEach((b) => {
    o && b.addEventListener("scroll", n, {
      passive: !0
    }), i && b.addEventListener("resize", n);
  });
  const f = c && a ? i5(c, n) : null;
  let h = -1, v = null;
  s && (v = new ResizeObserver((b) => {
    let [k] = b;
    k && k.target === c && v && (v.unobserve(e), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
      var S;
      (S = v) == null || S.observe(e);
    })), n();
  }), c && !l && v.observe(c), v.observe(e));
  let m, y = l ? Qr(t) : null;
  l && w();
  function w() {
    const b = Qr(t);
    y && !$p(y, b) && n(), y = b, m = requestAnimationFrame(w);
  }
  return n(), () => {
    var b;
    d.forEach((k) => {
      o && k.removeEventListener("scroll", n), i && k.removeEventListener("resize", n);
    }), f?.(), (b = v) == null || b.disconnect(), v = null, l && cancelAnimationFrame(m);
  };
}
const Kp = TC, Wp = MC, Zp = NC, a5 = IC, l5 = OC, Yp = PC, c5 = DC, qp = (t, e, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: o5,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return EC(t, e, {
    ...o,
    platform: i
  });
};
function zr(t) {
  return typeof t == "function" ? t() : t;
}
function jp(t) {
  return typeof window > "u" ? 1 : (t.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Td(t, e) {
  const n = jp(t);
  return Math.round(e * n) / n;
}
function u5(t) {
  return {
    [`--bits-${t}-content-transform-origin`]: "var(--bits-floating-transform-origin)",
    [`--bits-${t}-content-available-width`]: "var(--bits-floating-available-width)",
    [`--bits-${t}-content-available-height`]: "var(--bits-floating-available-height)",
    [`--bits-${t}-anchor-width`]: "var(--bits-floating-anchor-width)",
    [`--bits-${t}-anchor-height`]: "var(--bits-floating-anchor-height)"
  };
}
function d5(t) {
  const e = t.whileElementsMounted, n = /* @__PURE__ */ P(() => zr(t.open) ?? !0), r = /* @__PURE__ */ P(() => zr(t.middleware)), o = /* @__PURE__ */ P(() => zr(t.transform) ?? !0), i = /* @__PURE__ */ P(() => zr(t.placement) ?? "bottom"), s = /* @__PURE__ */ P(() => zr(t.strategy) ?? "absolute"), a = /* @__PURE__ */ P(() => zr(t.sideOffset) ?? 0), l = /* @__PURE__ */ P(() => zr(t.alignOffset) ?? 0), c = t.reference;
  let d = /* @__PURE__ */ ve(0), f = /* @__PURE__ */ ve(0);
  const h = Mn(null);
  let v = /* @__PURE__ */ ve(ht(u(s))), m = /* @__PURE__ */ ve(ht(u(i))), y = /* @__PURE__ */ ve(ht({})), w = /* @__PURE__ */ ve(!1), b = !1, k = 0;
  const S = /* @__PURE__ */ P(() => {
    const $ = h.current ? Td(h.current, u(d)) : u(d), T = h.current ? Td(h.current, u(f)) : u(f);
    return u(o) ? {
      position: u(v),
      left: "0",
      top: "0",
      transform: `translate(${$}px, ${T}px)`,
      ...h.current && jp(h.current) >= 1.5 && { willChange: "transform" }
    } : {
      position: u(v),
      left: `${$}px`,
      top: `${T}px`
    };
  });
  let _;
  function x() {
    if (c.current === null || h.current === null) return;
    const $ = c.current, T = h.current, E = ++k;
    qp($, T, {
      middleware: u(r),
      placement: u(i),
      strategy: u(s)
    }).then((M) => {
      if (E !== k || c.current !== $ || h.current !== T) return;
      if (f5($)) {
        W(
          y,
          {
            ...u(y),
            hide: {
              // oxlint-disable-next-line no-explicit-any
              ...u(y).hide,
              referenceHidden: !0
            }
          },
          !0
        );
        return;
      }
      if (!u(n) && u(d) !== 0 && u(f) !== 0) {
        const N = Math.max(Math.abs(u(a)), Math.abs(u(l)), 15);
        if (M.x <= N && M.y <= N) return;
      }
      W(d, M.x, !0), W(f, M.y, !0), W(v, M.strategy, !0), W(m, M.placement, !0), W(y, M.middlewareData, !0), W(w, !0);
    });
  }
  function O() {
    typeof _ == "function" && (_(), _ = void 0), k++;
  }
  function z() {
    if (O(), e === void 0) {
      x();
      return;
    }
    u(n) && (c.current === null || h.current === null || (_ = e(c.current, h.current, x)));
  }
  function V() {
    !u(n) && h.current === null && W(w, !1);
  }
  function B() {
    return [
      u(r),
      u(i),
      u(s),
      u(a),
      u(l),
      u(n)
    ];
  }
  return He(() => {
    e === void 0 && u(n) && x();
  }), He(z), He(() => {
    if (e !== void 0) {
      if (B(), !u(n)) {
        b = !1;
        return;
      }
      if (!u(w)) {
        b = !1;
        return;
      }
      if (!b) {
        b = !0;
        return;
      }
      x();
    }
  }), He(V), He(() => O), {
    floating: h,
    reference: c,
    get strategy() {
      return u(v);
    },
    get placement() {
      return u(m);
    },
    get middlewareData() {
      return u(y);
    },
    get isPositioned() {
      return u(w);
    },
    get floatingStyles() {
      return u(S);
    },
    get update() {
      return x;
    }
  };
}
function f5(t) {
  return t instanceof Element ? !t.isConnected || t instanceof HTMLElement && t.hidden ? !0 : t.getClientRects().length === 0 : !1;
}
const h5 = { top: "bottom", right: "left", bottom: "top", left: "right" }, Bc = new Dr("Floating.Root"), Md = new Dr("Floating.Content"), $c = new Dr("Floating.Root");
class Ks {
  static create(e = !1) {
    return e ? $c.set(new Ks()) : Bc.set(new Ks());
  }
  anchorNode = Mn(null);
  customAnchorNode = Mn(null);
  triggerNode = Mn(null);
  constructor() {
    He(() => {
      this.customAnchorNode.current ? typeof this.customAnchorNode.current == "string" ? this.anchorNode.current = document.querySelector(this.customAnchorNode.current) : this.anchorNode.current = this.customAnchorNode.current : this.anchorNode.current = this.triggerNode.current;
    });
  }
}
class Ws {
  static create(e, n = !1) {
    return n ? Md.set(new Ws(e, $c.get())) : Md.set(new Ws(e, Bc.get()));
  }
  opts;
  root;
  // nodes
  contentRef = Mn(null);
  wrapperRef = Mn(null);
  arrowRef = Mn(null);
  contentAttachment = Cr(this.contentRef);
  wrapperAttachment = Cr(this.wrapperRef);
  arrowAttachment = Cr(this.arrowRef);
  // ids
  arrowId = Mn(Rs());
  #e = /* @__PURE__ */ P(() => {
    if (typeof this.opts.style == "string") return Xo(this.opts.style);
    if (!this.opts.style) return {};
  });
  #t = void 0;
  #n = new t7(() => this.arrowRef.current ?? void 0);
  #r = /* @__PURE__ */ P(() => this.#n?.width ?? 0);
  #o = /* @__PURE__ */ P(() => this.#n?.height ?? 0);
  #i = /* @__PURE__ */ P(() => this.opts.side?.current + (this.opts.align.current !== "center" ? `-${this.opts.align.current}` : ""));
  #a = /* @__PURE__ */ P(() => Array.isArray(this.opts.collisionBoundary.current) ? this.opts.collisionBoundary.current : [this.opts.collisionBoundary.current]);
  #s = /* @__PURE__ */ P(() => u(this.#a).length > 0);
  get hasExplicitBoundaries() {
    return u(this.#s);
  }
  set hasExplicitBoundaries(e) {
    W(this.#s, e);
  }
  #l = /* @__PURE__ */ P(() => ({
    padding: this.opts.collisionPadding.current,
    boundary: u(this.#a).filter(y7),
    altBoundary: this.hasExplicitBoundaries
  }));
  get detectOverflowOptions() {
    return u(this.#l);
  }
  set detectOverflowOptions(e) {
    W(this.#l, e);
  }
  #c = /* @__PURE__ */ ve(void 0);
  #u = /* @__PURE__ */ ve(void 0);
  #d = /* @__PURE__ */ ve(void 0);
  #f = /* @__PURE__ */ ve(void 0);
  #g = /* @__PURE__ */ P(() => [
    Kp({
      mainAxis: this.opts.sideOffset.current + u(this.#o),
      alignmentAxis: this.opts.alignOffset.current
    }),
    this.opts.avoidCollisions.current && Wp({
      mainAxis: !0,
      crossAxis: !1,
      limiter: this.opts.sticky.current === "partial" ? c5() : void 0,
      ...this.detectOverflowOptions
    }),
    this.opts.avoidCollisions.current && Zp({ ...this.detectOverflowOptions }),
    a5({
      ...this.detectOverflowOptions,
      apply: ({ rects: e, availableWidth: n, availableHeight: r }) => {
        const { width: o, height: i } = e.reference;
        W(this.#c, n, !0), W(this.#u, r, !0), W(this.#d, o, !0), W(this.#f, i, !0);
      }
    }),
    this.arrowRef.current && Yp({
      element: this.arrowRef.current,
      padding: this.opts.arrowPadding.current
    }),
    g5({
      arrowWidth: u(this.#r),
      arrowHeight: u(this.#o)
    }),
    this.opts.hideWhenDetached.current && l5({ strategy: "referenceHidden", ...this.detectOverflowOptions })
  ].filter(Boolean));
  get middleware() {
    return u(this.#g);
  }
  set middleware(e) {
    W(this.#g, e);
  }
  floating;
  #h = /* @__PURE__ */ P(() => p5(this.floating.placement));
  get placedSide() {
    return u(this.#h);
  }
  set placedSide(e) {
    W(this.#h, e);
  }
  #y = /* @__PURE__ */ P(() => v5(this.floating.placement));
  get placedAlign() {
    return u(this.#y);
  }
  set placedAlign(e) {
    W(this.#y, e);
  }
  #v = /* @__PURE__ */ P(() => this.floating.middlewareData.arrow?.x ?? 0);
  get arrowX() {
    return u(this.#v);
  }
  set arrowX(e) {
    W(this.#v, e);
  }
  #w = /* @__PURE__ */ P(() => this.floating.middlewareData.arrow?.y ?? 0);
  get arrowY() {
    return u(this.#w);
  }
  set arrowY(e) {
    W(this.#w, e);
  }
  #m = /* @__PURE__ */ P(() => this.floating.middlewareData.arrow?.centerOffset !== 0);
  get cannotCenterArrow() {
    return u(this.#m);
  }
  set cannotCenterArrow(e) {
    W(this.#m, e);
  }
  #p = /* @__PURE__ */ ve();
  get contentZIndex() {
    return u(this.#p);
  }
  set contentZIndex(e) {
    W(this.#p, e, !0);
  }
  #b = /* @__PURE__ */ P(() => h5[this.placedSide]);
  get arrowBaseSide() {
    return u(this.#b);
  }
  set arrowBaseSide(e) {
    W(this.#b, e);
  }
  #x = /* @__PURE__ */ P(() => ({
    id: this.opts.wrapperId.current,
    "data-bits-floating-content-wrapper": "",
    style: {
      ...this.floating.floatingStyles,
      transform: this.floating.isPositioned ? this.floating.floatingStyles.transform : "translate(0, -200%)",
      minWidth: "max-content",
      zIndex: this.contentZIndex,
      "--bits-floating-transform-origin": `${this.floating.middlewareData.transformOrigin?.x} ${this.floating.middlewareData.transformOrigin?.y}`,
      "--bits-floating-available-width": `${u(this.#c)}px`,
      "--bits-floating-available-height": `${u(this.#u)}px`,
      "--bits-floating-anchor-width": `${u(this.#d)}px`,
      "--bits-floating-anchor-height": `${u(this.#f)}px`,
      ...this.floating.middlewareData.hide?.referenceHidden && { visibility: "hidden", "pointer-events": "none" },
      ...u(this.#e)
    },
    dir: this.opts.dir.current,
    ...this.wrapperAttachment
  }));
  get wrapperProps() {
    return u(this.#x);
  }
  set wrapperProps(e) {
    W(this.#x, e);
  }
  #_ = /* @__PURE__ */ P(() => ({
    "data-side": this.placedSide,
    "data-align": this.placedAlign,
    style: kc({ ...u(this.#e) }),
    ...this.contentAttachment
  }));
  get props() {
    return u(this.#_);
  }
  set props(e) {
    W(this.#_, e);
  }
  #C = /* @__PURE__ */ P(() => ({
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
    return u(this.#C);
  }
  set arrowStyle(e) {
    W(this.#C, e);
  }
  constructor(e, n) {
    this.opts = e, this.root = n, this.#t = e.updatePositionStrategy, e.customAnchor && (this.root.customAnchorNode.current = e.customAnchor.current), xt(() => e.customAnchor.current, (r) => {
      this.root.customAnchorNode.current = r;
    }), this.floating = d5({
      strategy: () => this.opts.strategy.current,
      placement: () => u(this.#i),
      middleware: () => this.middleware,
      reference: this.root.anchorNode,
      whileElementsMounted: (...r) => s5(...r, {
        animationFrame: this.#t?.current === "always"
      }),
      open: () => this.opts.enabled.current,
      sideOffset: () => this.opts.sideOffset.current,
      alignOffset: () => this.opts.alignOffset.current
    }), He(() => {
      this.floating.isPositioned && this.opts.onPlaced?.current();
    }), xt(() => this.contentRef.current, (r) => {
      if (!r || !this.opts.enabled.current) return;
      const o = ap(r), i = o.requestAnimationFrame(() => {
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
class Zs {
  static create(e, n = !1) {
    return n ? new Zs(e, $c.get()) : new Zs(e, Bc.get());
  }
  opts;
  root;
  constructor(e, n) {
    this.opts = e, this.root = n, e.virtualEl && e.virtualEl.current ? n.triggerNode = __(e.virtualEl.current) : n.triggerNode = e.ref;
  }
}
function g5(t) {
  return {
    name: "transformOrigin",
    options: t,
    fn(e) {
      const { placement: n, rects: r, middlewareData: o } = e, s = o.arrow?.centerOffset !== 0, a = s ? 0 : t.arrowWidth, l = s ? 0 : t.arrowHeight, [c, d] = Kc(n), f = { start: "0%", center: "50%", end: "100%" }[d], h = (o.arrow?.x ?? 0) + a / 2, v = (o.arrow?.y ?? 0) + l / 2;
      let m = "", y = "";
      return c === "bottom" ? (m = s ? f : `${h}px`, y = `${-l}px`) : c === "top" ? (m = s ? f : `${h}px`, y = `${r.floating.height + l}px`) : c === "right" ? (m = `${-l}px`, y = s ? f : `${v}px`) : c === "left" && (m = `${r.floating.width + l}px`, y = s ? f : `${v}px`), { data: { x: m, y } };
    }
  };
}
function Kc(t) {
  const [e, n = "center"] = t.split("-");
  return [e, n];
}
function p5(t) {
  return Kc(t)[0];
}
function v5(t) {
  return Kc(t)[1];
}
function Xp(t, e) {
  le(e, !0);
  let n = p(e, "children", 7), r = p(e, "tooltip", 7, !1);
  Ks.create(r());
  var o = {
    get children() {
      return n();
    },
    set children(a) {
      n(a), g();
    },
    get tooltip() {
      return r();
    },
    set tooltip(a = !1) {
      r(a), g();
    }
  }, i = de(), s = Q(i);
  return Ae(s, () => n() ?? Be), A(t, i), ce(o);
}
ie(Xp, { children: {}, tooltip: {} }, [], [], !0);
class m5 {
  #e;
  #t = /* @__PURE__ */ P(() => this.#e.candidateValues());
  #n;
  constructor(e) {
    this.#e = e, this.#n = kp("", { afterMs: 1e3, getWindow: this.#e.getWindow }), this.handleTypeaheadSearch = this.handleTypeaheadSearch.bind(this), this.resetTypeahead = this.resetTypeahead.bind(this);
  }
  handleTypeaheadSearch(e) {
    if (!this.#e.enabled() || !u(this.#t).length) return;
    this.#n.current = this.#n.current + e;
    const n = this.#e.getCurrentItem(), r = u(this.#t).find((a) => a === n) ?? "", o = u(this.#t).map((a) => a ?? ""), i = Ec(o, this.#n.current, r), s = u(this.#t).find((a) => a === i);
    return s && this.#e.onMatch(s), s;
  }
  resetTypeahead() {
    this.#n.current = "";
  }
}
const y5 = [Uo, fp, up], w5 = [uo, dp, cp], b5 = [...y5, ...w5], x5 = Sc({
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
}), Ii = new Dr("Select.Root | Combobox.Root"), Up = new Dr("Select.Content | Combobox.Content");
class Gp {
  opts;
  #e = /* @__PURE__ */ ve(!1);
  get touchedInput() {
    return u(this.#e);
  }
  set touchedInput(e) {
    W(this.#e, e, !0);
  }
  #t = /* @__PURE__ */ ve(null);
  get inputNode() {
    return u(this.#t);
  }
  set inputNode(e) {
    W(this.#t, e, !0);
  }
  #n = /* @__PURE__ */ ve(null);
  get contentNode() {
    return u(this.#n);
  }
  set contentNode(e) {
    W(this.#n, e, !0);
  }
  contentPresence;
  #r = /* @__PURE__ */ ve(null);
  get viewportNode() {
    return u(this.#r);
  }
  set viewportNode(e) {
    W(this.#r, e, !0);
  }
  #o = /* @__PURE__ */ ve(null);
  get triggerNode() {
    return u(this.#o);
  }
  set triggerNode(e) {
    W(this.#o, e, !0);
  }
  #i = /* @__PURE__ */ ve("");
  get valueId() {
    return u(this.#i);
  }
  set valueId(e) {
    W(this.#i, e, !0);
  }
  #a = /* @__PURE__ */ ve(null);
  get highlightedNode() {
    return u(this.#a);
  }
  set highlightedNode(e) {
    W(this.#a, e, !0);
  }
  #s = /* @__PURE__ */ P(() => this.highlightedNode ? this.highlightedNode.getAttribute("data-value") : null);
  get highlightedValue() {
    return u(this.#s);
  }
  set highlightedValue(e) {
    W(this.#s, e);
  }
  #l = /* @__PURE__ */ P(() => {
    if (this.highlightedNode)
      return this.highlightedNode.id;
  });
  get highlightedId() {
    return u(this.#l);
  }
  set highlightedId(e) {
    W(this.#l, e);
  }
  #c = /* @__PURE__ */ P(() => this.highlightedNode ? this.highlightedNode.getAttribute("data-label") : null);
  get highlightedLabel() {
    return u(this.#c);
  }
  set highlightedLabel(e) {
    W(this.#c, e);
  }
  #u = /* @__PURE__ */ ve(!1);
  get contentIsPositioned() {
    return u(this.#u);
  }
  set contentIsPositioned(e) {
    W(this.#u, e, !0);
  }
  isUsingKeyboard = !1;
  isCombobox = !1;
  domContext = new Mi(() => null);
  constructor(e) {
    this.opts = e, this.isCombobox = e.isCombobox, this.contentPresence = new b7({
      ref: ge(() => this.contentNode),
      open: this.opts.open,
      onComplete: () => {
        this.opts.onOpenChangeComplete.current(this.opts.open.current);
      }
    }), Zt(() => {
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
    return this.getCandidateNodes().find((r) => r.dataset.value === e) ?? null;
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
  getBitsAttr = (e) => x5.getAttr(e, this.isCombobox ? "combobox" : void 0);
}
class _5 extends Gp {
  opts;
  isMulti = !1;
  #e = /* @__PURE__ */ P(() => this.opts.value.current !== "");
  get hasValue() {
    return u(this.#e);
  }
  set hasValue(e) {
    W(this.#e, e);
  }
  #t = /* @__PURE__ */ P(() => this.opts.items.current.length ? this.opts.items.current.find((e) => e.value === this.opts.value.current)?.label ?? "" : "");
  get currentLabel() {
    return u(this.#t);
  }
  set currentLabel(e) {
    W(this.#t, e);
  }
  #n = /* @__PURE__ */ P(() => this.opts.items.current.length ? this.opts.items.current.filter((n) => !n.disabled).map((n) => n.label) : []);
  get candidateLabels() {
    return u(this.#n);
  }
  set candidateLabels(e) {
    W(this.#n, e);
  }
  #r = /* @__PURE__ */ P(() => !(this.isMulti || this.opts.items.current.length === 0));
  get dataTypeaheadEnabled() {
    return u(this.#r);
  }
  set dataTypeaheadEnabled(e) {
    W(this.#r, e);
  }
  constructor(e) {
    super(e), this.opts = e, He(() => {
      !this.opts.open.current && this.highlightedNode && this.setHighlightedNode(null);
    }), xt(() => this.opts.open.current, () => {
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
    Ti(() => {
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
class C5 extends Gp {
  opts;
  isMulti = !0;
  #e = /* @__PURE__ */ P(() => this.opts.value.current.length > 0);
  get hasValue() {
    return u(this.#e);
  }
  set hasValue(e) {
    W(this.#e, e);
  }
  constructor(e) {
    super(e), this.opts = e, He(() => {
      !this.opts.open.current && this.highlightedNode && this.setHighlightedNode(null);
    }), xt(() => this.opts.open.current, () => {
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
    Ti(() => {
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
class k5 {
  static create(e) {
    const { type: n, ...r } = e, o = n === "single" ? new _5(r) : new C5(r);
    return Ii.set(o);
  }
}
class Wc {
  static create(e) {
    return new Wc(e, Ii.get());
  }
  opts;
  root;
  attachment;
  #e;
  #t;
  constructor(e, n) {
    this.opts = e, this.root = n, this.attachment = Cr(e.ref, (r) => this.root.triggerNode = r), this.root.domContext = new Mi(e.ref), this.#e = new U7({
      getCurrentItem: () => this.root.highlightedNode,
      onMatch: (r) => {
        this.root.setHighlightedNode(r);
      },
      getActiveElement: () => this.root.domContext.getActiveElement(),
      getWindow: () => this.root.domContext.getWindow()
    }), this.#t = new m5({
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
    if (this.root.isUsingKeyboard = !0, (e.key === uo || e.key === Uo) && e.preventDefault(), !this.root.opts.open.current) {
      if (e.key === vl || e.key === as || e.key === Uo || e.key === uo)
        e.preventDefault(), this.root.handleOpen();
      else if (!this.root.isMulti && this.root.dataTypeaheadEnabled) {
        this.#t.handleTypeaheadSearch(e.key);
        return;
      }
      if (this.root.hasValue) return;
      const s = this.root.getCandidateNodes();
      if (!s.length) return;
      if (e.key === Uo) {
        const a = s[0];
        this.root.setHighlightedNode(a);
      } else if (e.key === uo) {
        const a = s[s.length - 1];
        this.root.setHighlightedNode(a);
      }
      return;
    }
    if (e.key === gd) {
      this.root.handleClose();
      return;
    }
    if ((e.key === vl || // if we're currently "typing ahead", we don't want to select the item
    // just yet as the item the user is trying to get to may have a space in it,
    // so we defer handling the close for this case until further down
    e.key === as && this.#e.search === "") && !e.isComposing && (e.preventDefault(), this.#o()))
      return;
    if (e.key === uo && e.altKey && this.root.handleClose(), b5.includes(e.key)) {
      e.preventDefault();
      const s = this.root.getCandidateNodes(), a = this.root.highlightedNode, l = a ? s.indexOf(a) : -1, c = this.root.opts.loop.current;
      let d;
      if (e.key === Uo ? d = Z7(s, l, c) : e.key === uo ? d = Y7(s, l, c) : e.key === dp ? d = q7(s, l, 10, c) : e.key === fp ? d = j7(s, l, 10, c) : e.key === up ? d = s[0] : e.key === cp && (d = s[s.length - 1]), !d) return;
      this.root.setHighlightedNode(d);
      return;
    }
    const n = e.ctrlKey || e.altKey || e.metaKey, r = e.key.length === 1, o = e.key === as, i = this.root.getCandidateNodes();
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
  #i = /* @__PURE__ */ P(() => ({
    id: this.opts.id.current,
    disabled: this.root.opts.disabled.current ? !0 : void 0,
    "aria-haspopup": "listbox",
    "aria-expanded": pl(this.root.opts.open.current),
    "aria-activedescendant": this.root.highlightedId,
    "data-state": lp(this.root.opts.open.current),
    "data-disabled": Is(this.root.opts.disabled.current),
    "data-placeholder": this.root.hasValue ? void 0 : "",
    [this.root.getBitsAttr("trigger")]: "",
    onpointerdown: this.onpointerdown,
    onkeydown: this.onkeydown,
    onclick: this.onclick,
    onpointerup: this.onpointerup,
    ...this.attachment
  }));
  get props() {
    return u(this.#i);
  }
  set props(e) {
    W(this.#i, e);
  }
}
class Zc {
  static create(e) {
    return Up.set(new Zc(e, Ii.get()));
  }
  opts;
  root;
  attachment;
  #e = /* @__PURE__ */ ve(!1);
  get isPositioned() {
    return u(this.#e);
  }
  set isPositioned(e) {
    W(this.#e, e, !0);
  }
  domContext;
  constructor(e, n) {
    this.opts = e, this.root = n, this.attachment = Cr(e.ref, (r) => this.root.contentNode = r), this.domContext = new Mi(this.opts.ref), this.root.domContext === null && (this.root.domContext = this.domContext), Do(() => {
      this.root.contentNode = null, this.root.contentIsPositioned = !1, this.isPositioned = !1;
    }), xt(() => this.root.opts.open.current, () => {
      this.root.opts.open.current || (this.root.contentIsPositioned = !1, this.isPositioned = !1);
    }), xt([() => this.isPositioned, () => this.root.highlightedNode], () => {
      !this.isPositioned || !this.root.highlightedNode || this.root.scrollHighlightedNodeIntoView(this.root.highlightedNode);
    }), this.onpointermove = this.onpointermove.bind(this);
  }
  onpointermove(e) {
    this.root.isUsingKeyboard = !1;
  }
  #t = /* @__PURE__ */ P(() => u5(this.root.isCombobox ? "combobox" : "select"));
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
  #n = /* @__PURE__ */ P(() => ({ open: this.root.opts.open.current }));
  get snippetProps() {
    return u(this.#n);
  }
  set snippetProps(e) {
    W(this.#n, e);
  }
  #r = /* @__PURE__ */ P(() => ({
    id: this.opts.id.current,
    role: "listbox",
    "aria-multiselectable": this.root.isMulti ? "true" : void 0,
    "data-state": lp(this.root.opts.open.current),
    [this.root.getBitsAttr("content")]: "",
    style: {
      display: "flex",
      flexDirection: "column",
      outline: "none",
      boxSizing: "border-box",
      pointerEvents: "auto",
      ...u(this.#t)
    },
    onpointermove: this.onpointermove,
    ...this.attachment
  }));
  get props() {
    return u(this.#r);
  }
  set props(e) {
    W(this.#r, e);
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
class Yc {
  static create(e) {
    return new Yc(e, Ii.get());
  }
  opts;
  root;
  attachment;
  #e = /* @__PURE__ */ P(() => this.root.includesItem(this.opts.value.current));
  get isSelected() {
    return u(this.#e);
  }
  set isSelected(e) {
    W(this.#e, e);
  }
  #t = /* @__PURE__ */ P(() => this.root.highlightedValue === this.opts.value.current);
  get isHighlighted() {
    return u(this.#t);
  }
  set isHighlighted(e) {
    W(this.#t, e);
  }
  prevHighlighted = new n7(() => this.isHighlighted);
  #n = /* @__PURE__ */ ve(!1);
  get mounted() {
    return u(this.#n);
  }
  set mounted(e) {
    W(this.#n, e, !0);
  }
  constructor(e, n) {
    this.opts = e, this.root = n, this.attachment = Cr(e.ref), xt([() => this.isHighlighted, () => this.prevHighlighted.current], () => {
      this.isHighlighted ? this.opts.onHighlight.current() : this.prevHighlighted.current && this.opts.onUnhighlight.current();
    }), xt(() => this.mounted, () => {
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
  #r = /* @__PURE__ */ P(() => ({ selected: this.isSelected, highlighted: this.isHighlighted }));
  get snippetProps() {
    return u(this.#r);
  }
  set snippetProps(e) {
    W(this.#r, e);
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
      if (e.pointerType === "touch" && !ml) {
        gt(
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
  #o = /* @__PURE__ */ P(() => ({
    id: this.opts.id.current,
    role: "option",
    "aria-selected": this.root.includesItem(this.opts.value.current) ? "true" : void 0,
    "data-value": this.opts.value.current,
    "data-disabled": Is(this.opts.disabled.current),
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
    return u(this.#o);
  }
  set props(e) {
    W(this.#o, e);
  }
}
class qc {
  static create(e) {
    return new qc(e, Ii.get());
  }
  opts;
  root;
  #e = /* @__PURE__ */ P(() => this.root.opts.name.current !== "");
  get shouldRender() {
    return u(this.#e);
  }
  set shouldRender(e) {
    W(this.#e, e);
  }
  constructor(e, n) {
    this.opts = e, this.root = n, this.onfocus = this.onfocus.bind(this);
  }
  onfocus(e) {
    e.preventDefault(), this.root.isCombobox ? this.root.inputNode?.focus() : this.root.triggerNode?.focus();
  }
  #t = /* @__PURE__ */ P(() => ({
    disabled: hd(this.root.opts.disabled.current),
    required: hd(this.root.opts.required.current),
    name: this.root.opts.name.current,
    value: this.opts.value.current,
    onfocus: this.onfocus
  }));
  get props() {
    return u(this.#t);
  }
  set props(e) {
    W(this.#t, e);
  }
}
class jc {
  static create(e) {
    return new jc(e, Up.get());
  }
  opts;
  content;
  root;
  attachment;
  #e = /* @__PURE__ */ ve(0);
  get prevScrollTop() {
    return u(this.#e);
  }
  set prevScrollTop(e) {
    W(this.#e, e, !0);
  }
  constructor(e, n) {
    this.opts = e, this.content = n, this.root = n.root, this.attachment = Cr(e.ref, (r) => {
      this.root.viewportNode = r;
    });
  }
  #t = /* @__PURE__ */ P(() => ({
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
    return u(this.#t);
  }
  set props(e) {
    W(this.#t, e);
  }
}
function cs(t, e) {
  le(e, !0);
  let n = p(e, "value", 15), r = p(e, "autocomplete", 7);
  const o = qc.create({ value: ge(() => n()) });
  var i = {
    get value() {
      return n();
    },
    set value(c) {
      n(c), g();
    },
    get autocomplete() {
      return r();
    },
    set autocomplete(c) {
      r(c), g();
    }
  }, s = de(), a = Q(s);
  {
    var l = (c) => {
      Ic(c, Fe(() => o.props, {
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
    se(a, (c) => {
      o.shouldRender && c(l);
    });
  }
  return A(t, s), ce(i);
}
ie(cs, { value: {}, autocomplete: {} }, [], [], !0);
function Jp(t, e) {
  le(e, !0);
  let n = p(e, "id", 7), r = p(e, "children", 7), o = p(e, "virtualEl", 7), i = p(e, "ref", 7), s = p(e, "tooltip", 7, !1);
  Zs.create(
    {
      id: ge(() => n()),
      virtualEl: ge(() => o()),
      ref: i()
    },
    s()
  );
  var a = {
    get id() {
      return n();
    },
    set id(d) {
      n(d), g();
    },
    get children() {
      return r();
    },
    set children(d) {
      r(d), g();
    },
    get virtualEl() {
      return o();
    },
    set virtualEl(d) {
      o(d), g();
    },
    get ref() {
      return i();
    },
    set ref(d) {
      i(d), g();
    },
    get tooltip() {
      return s();
    },
    set tooltip(d = !1) {
      s(d), g();
    }
  }, l = de(), c = Q(l);
  return Ae(c, () => r() ?? Be), A(t, l), ce(a);
}
ie(Jp, { id: {}, children: {}, virtualEl: {}, ref: {}, tooltip: {} }, [], [], !0);
function Qp(t, e) {
  le(e, !0);
  let n = p(e, "content", 7), r = p(e, "side", 7, "bottom"), o = p(e, "sideOffset", 7, 0), i = p(e, "align", 7, "center"), s = p(e, "alignOffset", 7, 0), a = p(e, "id", 7), l = p(e, "arrowPadding", 7, 0), c = p(e, "avoidCollisions", 7, !0), d = p(e, "collisionBoundary", 23, () => []), f = p(e, "collisionPadding", 7, 0), h = p(e, "hideWhenDetached", 7, !1), v = p(e, "onPlaced", 7, () => {
  }), m = p(e, "sticky", 7, "partial"), y = p(e, "updatePositionStrategy", 7, "optimized"), w = p(e, "strategy", 7, "fixed"), b = p(e, "dir", 7, "ltr"), k = p(e, "style", 23, () => ({})), S = p(e, "wrapperId", 23, Rs), _ = p(e, "customAnchor", 7, null), x = p(e, "enabled", 7), O = p(e, "tooltip", 7, !1);
  const z = Ws.create(
    {
      side: ge(() => r()),
      sideOffset: ge(() => o()),
      align: ge(() => i()),
      alignOffset: ge(() => s()),
      id: ge(() => a()),
      arrowPadding: ge(() => l()),
      avoidCollisions: ge(() => c()),
      collisionBoundary: ge(() => d()),
      collisionPadding: ge(() => f()),
      hideWhenDetached: ge(() => h()),
      onPlaced: ge(() => v()),
      sticky: ge(() => m()),
      updatePositionStrategy: ge(() => y()),
      strategy: ge(() => w()),
      dir: ge(() => b()),
      style: ge(() => k()),
      enabled: ge(() => x()),
      wrapperId: ge(() => S()),
      customAnchor: ge(() => _())
    },
    O()
  ), V = /* @__PURE__ */ P(() => zn(z.wrapperProps, { style: { pointerEvents: "auto" } }));
  var B = {
    get content() {
      return n();
    },
    set content(E) {
      n(E), g();
    },
    get side() {
      return r();
    },
    set side(E = "bottom") {
      r(E), g();
    },
    get sideOffset() {
      return o();
    },
    set sideOffset(E = 0) {
      o(E), g();
    },
    get align() {
      return i();
    },
    set align(E = "center") {
      i(E), g();
    },
    get alignOffset() {
      return s();
    },
    set alignOffset(E = 0) {
      s(E), g();
    },
    get id() {
      return a();
    },
    set id(E) {
      a(E), g();
    },
    get arrowPadding() {
      return l();
    },
    set arrowPadding(E = 0) {
      l(E), g();
    },
    get avoidCollisions() {
      return c();
    },
    set avoidCollisions(E = !0) {
      c(E), g();
    },
    get collisionBoundary() {
      return d();
    },
    set collisionBoundary(E = []) {
      d(E), g();
    },
    get collisionPadding() {
      return f();
    },
    set collisionPadding(E = 0) {
      f(E), g();
    },
    get hideWhenDetached() {
      return h();
    },
    set hideWhenDetached(E = !1) {
      h(E), g();
    },
    get onPlaced() {
      return v();
    },
    set onPlaced(E = () => {
    }) {
      v(E), g();
    },
    get sticky() {
      return m();
    },
    set sticky(E = "partial") {
      m(E), g();
    },
    get updatePositionStrategy() {
      return y();
    },
    set updatePositionStrategy(E = "optimized") {
      y(E), g();
    },
    get strategy() {
      return w();
    },
    set strategy(E = "fixed") {
      w(E), g();
    },
    get dir() {
      return b();
    },
    set dir(E = "ltr") {
      b(E), g();
    },
    get style() {
      return k();
    },
    set style(E = {}) {
      k(E), g();
    },
    get wrapperId() {
      return S();
    },
    set wrapperId(E = Rs()) {
      S(E), g();
    },
    get customAnchor() {
      return _();
    },
    set customAnchor(E = null) {
      _(E), g();
    },
    get enabled() {
      return x();
    },
    set enabled(E) {
      x(E), g();
    },
    get tooltip() {
      return O();
    },
    set tooltip(E = !1) {
      O(E), g();
    }
  }, $ = de(), T = Q($);
  return Ae(T, () => n() ?? Be, () => ({ props: z.props, wrapperProps: u(V) })), A(t, $), ce(B);
}
ie(
  Qp,
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
function ev(t, e) {
  le(e, !0);
  let n = p(e, "content", 7), r = p(e, "onPlaced", 7);
  Cn(() => {
    r()?.();
  });
  var o = {
    get content() {
      return n();
    },
    set content(a) {
      n(a), g();
    },
    get onPlaced() {
      return r();
    },
    set onPlaced(a) {
      r(a), g();
    }
  }, i = de(), s = Q(i);
  return Ae(s, () => n() ?? Be, () => ({ props: {}, wrapperProps: {} })), A(t, i), ce(o);
}
ie(ev, { content: {}, onPlaced: {} }, [], [], !0);
function tv(t, e) {
  le(e, !0);
  let n = p(e, "content", 7), r = p(e, "isStatic", 7, !1), o = p(e, "onPlaced", 7), i = /* @__PURE__ */ ze(e, [
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
    set content(f) {
      n(f), g();
    },
    get isStatic() {
      return r();
    },
    set isStatic(f = !1) {
      r(f), g();
    },
    get onPlaced() {
      return o();
    },
    set onPlaced(f) {
      o(f), g();
    }
  }, a = de(), l = Q(a);
  {
    var c = (f) => {
      ev(f, {
        get content() {
          return n();
        },
        get onPlaced() {
          return o();
        }
      });
    }, d = (f) => {
      Qp(f, Fe(
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
    se(l, (f) => {
      r() ? f(c) : f(d, !1);
    });
  }
  return A(t, a), ce(s);
}
ie(tv, { content: {}, isStatic: {}, onPlaced: {} }, [], [], !0);
var S5 = /* @__PURE__ */ re("<!> <!>", 1);
function Xc(t, e) {
  le(e, !0);
  let n = p(e, "popper", 7), r = p(e, "onEscapeKeydown", 7), o = p(e, "escapeKeydownBehavior", 7), i = p(e, "preventOverflowTextSelection", 7), s = p(e, "id", 7), a = p(e, "onPointerDown", 7), l = p(e, "onPointerUp", 7), c = p(e, "side", 7), d = p(e, "sideOffset", 7), f = p(e, "align", 7), h = p(e, "alignOffset", 7), v = p(e, "arrowPadding", 7), m = p(e, "avoidCollisions", 7), y = p(e, "collisionBoundary", 7), w = p(e, "collisionPadding", 7), b = p(e, "sticky", 7), k = p(e, "hideWhenDetached", 7), S = p(e, "updatePositionStrategy", 7), _ = p(e, "strategy", 7), x = p(e, "dir", 7), O = p(e, "preventScroll", 7), z = p(e, "wrapperId", 7), V = p(e, "style", 7), B = p(e, "onPlaced", 7), $ = p(e, "onInteractOutside", 7), T = p(e, "onCloseAutoFocus", 7), E = p(e, "onOpenAutoFocus", 7), M = p(e, "onFocusOutside", 7), C = p(e, "interactOutsideBehavior", 7, "close"), N = p(e, "loop", 7), I = p(e, "trapFocus", 7, !0), L = p(e, "isValidEvent", 7, () => !1), Z = p(e, "customAnchor", 7, null), X = p(e, "isStatic", 7, !1), D = p(e, "enabled", 7), j = p(e, "ref", 7), G = p(e, "tooltip", 7, !1), R = p(e, "contentPointerEvents", 7, "auto"), ee = /* @__PURE__ */ ze(e, [
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
  const K = /* @__PURE__ */ P(() => O() ?? !0), U = /* @__PURE__ */ P(() => _() ?? (u(K) ? "fixed" : "absolute"));
  var ne = {
    get popper() {
      return n();
    },
    set popper(H) {
      n(H), g();
    },
    get onEscapeKeydown() {
      return r();
    },
    set onEscapeKeydown(H) {
      r(H), g();
    },
    get escapeKeydownBehavior() {
      return o();
    },
    set escapeKeydownBehavior(H) {
      o(H), g();
    },
    get preventOverflowTextSelection() {
      return i();
    },
    set preventOverflowTextSelection(H) {
      i(H), g();
    },
    get id() {
      return s();
    },
    set id(H) {
      s(H), g();
    },
    get onPointerDown() {
      return a();
    },
    set onPointerDown(H) {
      a(H), g();
    },
    get onPointerUp() {
      return l();
    },
    set onPointerUp(H) {
      l(H), g();
    },
    get side() {
      return c();
    },
    set side(H) {
      c(H), g();
    },
    get sideOffset() {
      return d();
    },
    set sideOffset(H) {
      d(H), g();
    },
    get align() {
      return f();
    },
    set align(H) {
      f(H), g();
    },
    get alignOffset() {
      return h();
    },
    set alignOffset(H) {
      h(H), g();
    },
    get arrowPadding() {
      return v();
    },
    set arrowPadding(H) {
      v(H), g();
    },
    get avoidCollisions() {
      return m();
    },
    set avoidCollisions(H) {
      m(H), g();
    },
    get collisionBoundary() {
      return y();
    },
    set collisionBoundary(H) {
      y(H), g();
    },
    get collisionPadding() {
      return w();
    },
    set collisionPadding(H) {
      w(H), g();
    },
    get sticky() {
      return b();
    },
    set sticky(H) {
      b(H), g();
    },
    get hideWhenDetached() {
      return k();
    },
    set hideWhenDetached(H) {
      k(H), g();
    },
    get updatePositionStrategy() {
      return S();
    },
    set updatePositionStrategy(H) {
      S(H), g();
    },
    get strategy() {
      return _();
    },
    set strategy(H) {
      _(H), g();
    },
    get dir() {
      return x();
    },
    set dir(H) {
      x(H), g();
    },
    get preventScroll() {
      return O();
    },
    set preventScroll(H) {
      O(H), g();
    },
    get wrapperId() {
      return z();
    },
    set wrapperId(H) {
      z(H), g();
    },
    get style() {
      return V();
    },
    set style(H) {
      V(H), g();
    },
    get onPlaced() {
      return B();
    },
    set onPlaced(H) {
      B(H), g();
    },
    get onInteractOutside() {
      return $();
    },
    set onInteractOutside(H) {
      $(H), g();
    },
    get onCloseAutoFocus() {
      return T();
    },
    set onCloseAutoFocus(H) {
      T(H), g();
    },
    get onOpenAutoFocus() {
      return E();
    },
    set onOpenAutoFocus(H) {
      E(H), g();
    },
    get onFocusOutside() {
      return M();
    },
    set onFocusOutside(H) {
      M(H), g();
    },
    get interactOutsideBehavior() {
      return C();
    },
    set interactOutsideBehavior(H = "close") {
      C(H), g();
    },
    get loop() {
      return N();
    },
    set loop(H) {
      N(H), g();
    },
    get trapFocus() {
      return I();
    },
    set trapFocus(H = !0) {
      I(H), g();
    },
    get isValidEvent() {
      return L();
    },
    set isValidEvent(H = () => !1) {
      L(H), g();
    },
    get customAnchor() {
      return Z();
    },
    set customAnchor(H = null) {
      Z(H), g();
    },
    get isStatic() {
      return X();
    },
    set isStatic(H = !1) {
      X(H), g();
    },
    get enabled() {
      return D();
    },
    set enabled(H) {
      D(H), g();
    },
    get ref() {
      return j();
    },
    set ref(H) {
      j(H), g();
    },
    get tooltip() {
      return G();
    },
    set tooltip(H = !1) {
      G(H), g();
    },
    get contentPointerEvents() {
      return R();
    },
    set contentPointerEvents(H = "auto") {
      R(H), g();
    }
  };
  return tv(t, {
    get isStatic() {
      return X();
    },
    get id() {
      return s();
    },
    get side() {
      return c();
    },
    get sideOffset() {
      return d();
    },
    get align() {
      return f();
    },
    get alignOffset() {
      return h();
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
      return S();
    },
    get strategy() {
      return u(U);
    },
    get dir() {
      return x();
    },
    get wrapperId() {
      return z();
    },
    get style() {
      return V();
    },
    get onPlaced() {
      return B();
    },
    get customAnchor() {
      return Z();
    },
    get enabled() {
      return D();
    },
    get tooltip() {
      return G();
    },
    content: (te, xe) => {
      let ue = () => xe?.().props, ae = () => xe?.().wrapperProps;
      var oe = S5(), fe = Q(oe);
      {
        var ye = (me) => {
          xl(me, {
            get preventScroll() {
              return u(K);
            }
          });
        }, ke = (me) => {
          var Oe = de(), J = Q(Oe);
          {
            var Re = (Se) => {
              xl(Se, {
                get preventScroll() {
                  return u(K);
                }
              });
            };
            se(
              J,
              (Se) => {
                e.forceMount || Se(Re);
              },
              !0
            );
          }
          A(me, Oe);
        };
        se(fe, (me) => {
          e.forceMount && D() ? me(ye) : me(ke, !1);
        });
      }
      var he = F(fe, 2);
      Pp(he, {
        get onOpenAutoFocus() {
          return E();
        },
        get onCloseAutoFocus() {
          return T();
        },
        get loop() {
          return N();
        },
        get enabled() {
          return D();
        },
        get trapFocus() {
          return I();
        },
        get forceMount() {
          return e.forceMount;
        },
        get ref() {
          return j();
        },
        focusScope: (Oe, J) => {
          let Re = () => J?.().props;
          Ep(Oe, {
            get onEscapeKeydown() {
              return r();
            },
            get escapeKeydownBehavior() {
              return o();
            },
            get enabled() {
              return D();
            },
            get ref() {
              return j();
            },
            children: (Se, We) => {
              Sp(Se, {
                get id() {
                  return s();
                },
                get onInteractOutside() {
                  return $();
                },
                get onFocusOutside() {
                  return M();
                },
                get interactOutsideBehavior() {
                  return C();
                },
                get isValidEvent() {
                  return L();
                },
                get enabled() {
                  return D();
                },
                get ref() {
                  return j();
                },
                children: (Ue, ot) => {
                  let ct = () => ot?.().props;
                  Np(Ue, {
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
                      return D();
                    },
                    get ref() {
                      return j();
                    },
                    children: (st, Mt) => {
                      var pe = de(), Me = Q(pe);
                      {
                        let Ge = /* @__PURE__ */ P(() => ({
                          props: zn(ee, ue(), ct(), Re(), { style: { pointerEvents: R() } }),
                          wrapperProps: ae()
                        }));
                        Ae(Me, () => n() ?? Be, () => u(Ge));
                      }
                      A(st, pe);
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
      }), A(te, oe);
    },
    $$slots: { content: !0 }
  }), ce(ne);
}
ie(
  Xc,
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
function nv(t, e) {
  le(e, !0);
  let n = p(e, "popper", 7), r = p(e, "open", 7), o = p(e, "onEscapeKeydown", 7), i = p(e, "escapeKeydownBehavior", 7), s = p(e, "preventOverflowTextSelection", 7), a = p(e, "id", 7), l = p(e, "onPointerDown", 7), c = p(e, "onPointerUp", 7), d = p(e, "side", 7), f = p(e, "sideOffset", 7), h = p(e, "align", 7), v = p(e, "alignOffset", 7), m = p(e, "arrowPadding", 7), y = p(e, "avoidCollisions", 7), w = p(e, "collisionBoundary", 7), b = p(e, "collisionPadding", 7), k = p(e, "sticky", 7), S = p(e, "hideWhenDetached", 7), _ = p(e, "updatePositionStrategy", 7), x = p(e, "strategy", 7), O = p(e, "dir", 7), z = p(e, "preventScroll", 7), V = p(e, "wrapperId", 7), B = p(e, "style", 7), $ = p(e, "onPlaced", 7), T = p(e, "onInteractOutside", 7), E = p(e, "onCloseAutoFocus", 7), M = p(e, "onOpenAutoFocus", 7), C = p(e, "onFocusOutside", 7), N = p(e, "interactOutsideBehavior", 7, "close"), I = p(e, "loop", 7), L = p(e, "trapFocus", 7, !0), Z = p(e, "isValidEvent", 7, () => !1), X = p(e, "customAnchor", 7, null), D = p(e, "isStatic", 7, !1), j = p(e, "ref", 7), G = p(e, "shouldRender", 7), R = /* @__PURE__ */ ze(e, [
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
  var ee = {
    get popper() {
      return n();
    },
    set popper(H) {
      n(H), g();
    },
    get open() {
      return r();
    },
    set open(H) {
      r(H), g();
    },
    get onEscapeKeydown() {
      return o();
    },
    set onEscapeKeydown(H) {
      o(H), g();
    },
    get escapeKeydownBehavior() {
      return i();
    },
    set escapeKeydownBehavior(H) {
      i(H), g();
    },
    get preventOverflowTextSelection() {
      return s();
    },
    set preventOverflowTextSelection(H) {
      s(H), g();
    },
    get id() {
      return a();
    },
    set id(H) {
      a(H), g();
    },
    get onPointerDown() {
      return l();
    },
    set onPointerDown(H) {
      l(H), g();
    },
    get onPointerUp() {
      return c();
    },
    set onPointerUp(H) {
      c(H), g();
    },
    get side() {
      return d();
    },
    set side(H) {
      d(H), g();
    },
    get sideOffset() {
      return f();
    },
    set sideOffset(H) {
      f(H), g();
    },
    get align() {
      return h();
    },
    set align(H) {
      h(H), g();
    },
    get alignOffset() {
      return v();
    },
    set alignOffset(H) {
      v(H), g();
    },
    get arrowPadding() {
      return m();
    },
    set arrowPadding(H) {
      m(H), g();
    },
    get avoidCollisions() {
      return y();
    },
    set avoidCollisions(H) {
      y(H), g();
    },
    get collisionBoundary() {
      return w();
    },
    set collisionBoundary(H) {
      w(H), g();
    },
    get collisionPadding() {
      return b();
    },
    set collisionPadding(H) {
      b(H), g();
    },
    get sticky() {
      return k();
    },
    set sticky(H) {
      k(H), g();
    },
    get hideWhenDetached() {
      return S();
    },
    set hideWhenDetached(H) {
      S(H), g();
    },
    get updatePositionStrategy() {
      return _();
    },
    set updatePositionStrategy(H) {
      _(H), g();
    },
    get strategy() {
      return x();
    },
    set strategy(H) {
      x(H), g();
    },
    get dir() {
      return O();
    },
    set dir(H) {
      O(H), g();
    },
    get preventScroll() {
      return z();
    },
    set preventScroll(H) {
      z(H), g();
    },
    get wrapperId() {
      return V();
    },
    set wrapperId(H) {
      V(H), g();
    },
    get style() {
      return B();
    },
    set style(H) {
      B(H), g();
    },
    get onPlaced() {
      return $();
    },
    set onPlaced(H) {
      $(H), g();
    },
    get onInteractOutside() {
      return T();
    },
    set onInteractOutside(H) {
      T(H), g();
    },
    get onCloseAutoFocus() {
      return E();
    },
    set onCloseAutoFocus(H) {
      E(H), g();
    },
    get onOpenAutoFocus() {
      return M();
    },
    set onOpenAutoFocus(H) {
      M(H), g();
    },
    get onFocusOutside() {
      return C();
    },
    set onFocusOutside(H) {
      C(H), g();
    },
    get interactOutsideBehavior() {
      return N();
    },
    set interactOutsideBehavior(H = "close") {
      N(H), g();
    },
    get loop() {
      return I();
    },
    set loop(H) {
      I(H), g();
    },
    get trapFocus() {
      return L();
    },
    set trapFocus(H = !0) {
      L(H), g();
    },
    get isValidEvent() {
      return Z();
    },
    set isValidEvent(H = () => !1) {
      Z(H), g();
    },
    get customAnchor() {
      return X();
    },
    set customAnchor(H = null) {
      X(H), g();
    },
    get isStatic() {
      return D();
    },
    set isStatic(H = !1) {
      D(H), g();
    },
    get ref() {
      return j();
    },
    set ref(H) {
      j(H), g();
    },
    get shouldRender() {
      return G();
    },
    set shouldRender(H) {
      G(H), g();
    }
  }, K = de(), U = Q(K);
  {
    var ne = (H) => {
      Xc(H, Fe(
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
            return c();
          },
          get side() {
            return d();
          },
          get sideOffset() {
            return f();
          },
          get align() {
            return h();
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
            return S();
          },
          get updatePositionStrategy() {
            return _();
          },
          get strategy() {
            return x();
          },
          get dir() {
            return O();
          },
          get preventScroll() {
            return z();
          },
          get wrapperId() {
            return V();
          },
          get style() {
            return B();
          },
          get onPlaced() {
            return $();
          },
          get customAnchor() {
            return X();
          },
          get isStatic() {
            return D();
          },
          get enabled() {
            return r();
          },
          get onInteractOutside() {
            return T();
          },
          get onCloseAutoFocus() {
            return E();
          },
          get onOpenAutoFocus() {
            return M();
          },
          get interactOutsideBehavior() {
            return N();
          },
          get loop() {
            return I();
          },
          get trapFocus() {
            return L();
          },
          get isValidEvent() {
            return Z();
          },
          get onFocusOutside() {
            return C();
          },
          forceMount: !1,
          get ref() {
            return j();
          }
        },
        () => R
      ));
    };
    se(U, (H) => {
      G() && H(ne);
    });
  }
  return A(t, K), ce(ee);
}
ie(
  nv,
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
function rv(t, e) {
  le(e, !0);
  let n = p(e, "popper", 7), r = p(e, "onEscapeKeydown", 7), o = p(e, "escapeKeydownBehavior", 7), i = p(e, "preventOverflowTextSelection", 7), s = p(e, "id", 7), a = p(e, "onPointerDown", 7), l = p(e, "onPointerUp", 7), c = p(e, "side", 7), d = p(e, "sideOffset", 7), f = p(e, "align", 7), h = p(e, "alignOffset", 7), v = p(e, "arrowPadding", 7), m = p(e, "avoidCollisions", 7), y = p(e, "collisionBoundary", 7), w = p(e, "collisionPadding", 7), b = p(e, "sticky", 7), k = p(e, "hideWhenDetached", 7), S = p(e, "updatePositionStrategy", 7), _ = p(e, "strategy", 7), x = p(e, "dir", 7), O = p(e, "preventScroll", 7), z = p(e, "wrapperId", 7), V = p(e, "style", 7), B = p(e, "onPlaced", 7), $ = p(e, "onInteractOutside", 7), T = p(e, "onCloseAutoFocus", 7), E = p(e, "onOpenAutoFocus", 7), M = p(e, "onFocusOutside", 7), C = p(e, "interactOutsideBehavior", 7, "close"), N = p(e, "loop", 7), I = p(e, "trapFocus", 7, !0), L = p(e, "isValidEvent", 7, () => !1), Z = p(e, "customAnchor", 7, null), X = p(e, "isStatic", 7, !1), D = p(e, "enabled", 7), j = /* @__PURE__ */ ze(e, [
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
  var G = {
    get popper() {
      return n();
    },
    set popper(R) {
      n(R), g();
    },
    get onEscapeKeydown() {
      return r();
    },
    set onEscapeKeydown(R) {
      r(R), g();
    },
    get escapeKeydownBehavior() {
      return o();
    },
    set escapeKeydownBehavior(R) {
      o(R), g();
    },
    get preventOverflowTextSelection() {
      return i();
    },
    set preventOverflowTextSelection(R) {
      i(R), g();
    },
    get id() {
      return s();
    },
    set id(R) {
      s(R), g();
    },
    get onPointerDown() {
      return a();
    },
    set onPointerDown(R) {
      a(R), g();
    },
    get onPointerUp() {
      return l();
    },
    set onPointerUp(R) {
      l(R), g();
    },
    get side() {
      return c();
    },
    set side(R) {
      c(R), g();
    },
    get sideOffset() {
      return d();
    },
    set sideOffset(R) {
      d(R), g();
    },
    get align() {
      return f();
    },
    set align(R) {
      f(R), g();
    },
    get alignOffset() {
      return h();
    },
    set alignOffset(R) {
      h(R), g();
    },
    get arrowPadding() {
      return v();
    },
    set arrowPadding(R) {
      v(R), g();
    },
    get avoidCollisions() {
      return m();
    },
    set avoidCollisions(R) {
      m(R), g();
    },
    get collisionBoundary() {
      return y();
    },
    set collisionBoundary(R) {
      y(R), g();
    },
    get collisionPadding() {
      return w();
    },
    set collisionPadding(R) {
      w(R), g();
    },
    get sticky() {
      return b();
    },
    set sticky(R) {
      b(R), g();
    },
    get hideWhenDetached() {
      return k();
    },
    set hideWhenDetached(R) {
      k(R), g();
    },
    get updatePositionStrategy() {
      return S();
    },
    set updatePositionStrategy(R) {
      S(R), g();
    },
    get strategy() {
      return _();
    },
    set strategy(R) {
      _(R), g();
    },
    get dir() {
      return x();
    },
    set dir(R) {
      x(R), g();
    },
    get preventScroll() {
      return O();
    },
    set preventScroll(R) {
      O(R), g();
    },
    get wrapperId() {
      return z();
    },
    set wrapperId(R) {
      z(R), g();
    },
    get style() {
      return V();
    },
    set style(R) {
      V(R), g();
    },
    get onPlaced() {
      return B();
    },
    set onPlaced(R) {
      B(R), g();
    },
    get onInteractOutside() {
      return $();
    },
    set onInteractOutside(R) {
      $(R), g();
    },
    get onCloseAutoFocus() {
      return T();
    },
    set onCloseAutoFocus(R) {
      T(R), g();
    },
    get onOpenAutoFocus() {
      return E();
    },
    set onOpenAutoFocus(R) {
      E(R), g();
    },
    get onFocusOutside() {
      return M();
    },
    set onFocusOutside(R) {
      M(R), g();
    },
    get interactOutsideBehavior() {
      return C();
    },
    set interactOutsideBehavior(R = "close") {
      C(R), g();
    },
    get loop() {
      return N();
    },
    set loop(R) {
      N(R), g();
    },
    get trapFocus() {
      return I();
    },
    set trapFocus(R = !0) {
      I(R), g();
    },
    get isValidEvent() {
      return L();
    },
    set isValidEvent(R = () => !1) {
      L(R), g();
    },
    get customAnchor() {
      return Z();
    },
    set customAnchor(R = null) {
      Z(R), g();
    },
    get isStatic() {
      return X();
    },
    set isStatic(R = !1) {
      X(R), g();
    },
    get enabled() {
      return D();
    },
    set enabled(R) {
      D(R), g();
    }
  };
  return Xc(t, Fe(
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
        return c();
      },
      get sideOffset() {
        return d();
      },
      get align() {
        return f();
      },
      get alignOffset() {
        return h();
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
        return S();
      },
      get strategy() {
        return _();
      },
      get dir() {
        return x();
      },
      get preventScroll() {
        return O();
      },
      get wrapperId() {
        return z();
      },
      get style() {
        return V();
      },
      get onPlaced() {
        return B();
      },
      get customAnchor() {
        return Z();
      },
      get isStatic() {
        return X();
      },
      get enabled() {
        return D();
      },
      get onInteractOutside() {
        return $();
      },
      get onCloseAutoFocus() {
        return T();
      },
      get onOpenAutoFocus() {
        return E();
      },
      get interactOutsideBehavior() {
        return C();
      },
      get loop() {
        return N();
      },
      get trapFocus() {
        return I();
      },
      get isValidEvent() {
        return L();
      },
      get onFocusOutside() {
        return M();
      }
    },
    () => j,
    { forceMount: !0 }
  )), ce(G);
}
ie(
  rv,
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
var E5 = /* @__PURE__ */ re("<div><div><!></div></div>"), P5 = /* @__PURE__ */ re("<div><div><!></div></div>");
function Sl(t, e) {
  const n = wi();
  le(e, !0);
  let r = p(e, "id", 23, () => Rn(n)), o = p(e, "ref", 15, null), i = p(e, "forceMount", 7, !1), s = p(e, "side", 7, "bottom"), a = p(e, "onInteractOutside", 7, Ke), l = p(e, "onEscapeKeydown", 7, Ke), c = p(e, "children", 7), d = p(e, "child", 7), f = p(e, "preventScroll", 7, !1), h = p(e, "style", 7), v = /* @__PURE__ */ ze(e, [
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
  const m = Zc.create({
    id: ge(() => r()),
    ref: ge(() => o(), (x) => o(x)),
    onInteractOutside: ge(() => a()),
    onEscapeKeydown: ge(() => l())
  }), y = /* @__PURE__ */ P(() => zn(v, m.props));
  var w = {
    get id() {
      return r();
    },
    set id(x = Rn(n)) {
      r(x), g();
    },
    get ref() {
      return o();
    },
    set ref(x = null) {
      o(x), g();
    },
    get forceMount() {
      return i();
    },
    set forceMount(x = !1) {
      i(x), g();
    },
    get side() {
      return s();
    },
    set side(x = "bottom") {
      s(x), g();
    },
    get onInteractOutside() {
      return a();
    },
    set onInteractOutside(x = Ke) {
      a(x), g();
    },
    get onEscapeKeydown() {
      return l();
    },
    set onEscapeKeydown(x = Ke) {
      l(x), g();
    },
    get children() {
      return c();
    },
    set children(x) {
      c(x), g();
    },
    get child() {
      return d();
    },
    set child(x) {
      d(x), g();
    },
    get preventScroll() {
      return f();
    },
    set preventScroll(x = !1) {
      f(x), g();
    },
    get style() {
      return h();
    },
    set style(x) {
      h(x), g();
    }
  }, b = de(), k = Q(b);
  {
    var S = (x) => {
      rv(x, Fe(() => u(y), () => m.popperProps, {
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
          return f();
        },
        forceMount: !0,
        get shouldRender() {
          return m.shouldRender;
        },
        popper: (z, V) => {
          let B = () => V?.().props, $ = () => V?.().wrapperProps;
          const T = /* @__PURE__ */ P(() => zn(B(), { style: m.props.style }, { style: h() }));
          var E = de(), M = Q(E);
          {
            var C = (I) => {
              var L = de(), Z = Q(L);
              {
                let X = /* @__PURE__ */ P(() => ({
                  props: u(T),
                  wrapperProps: $(),
                  ...m.snippetProps
                }));
                Ae(Z, d, () => u(X));
              }
              A(I, L);
            }, N = (I) => {
              var L = E5();
              Je(L, () => ({ ...$() }));
              var Z = q(L);
              Je(Z, () => ({ ...u(T) }));
              var X = q(Z);
              Ae(X, () => c() ?? Be), Y(Z), Y(L), A(I, L);
            };
            se(M, (I) => {
              d() ? I(C) : I(N, !1);
            });
          }
          A(z, E);
        },
        $$slots: { popper: !0 }
      }));
    }, _ = (x) => {
      var O = de(), z = Q(O);
      {
        var V = (B) => {
          nv(B, Fe(() => u(y), () => m.popperProps, {
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
              return f();
            },
            forceMount: !1,
            get shouldRender() {
              return m.shouldRender;
            },
            popper: (T, E) => {
              let M = () => E?.().props, C = () => E?.().wrapperProps;
              const N = /* @__PURE__ */ P(() => zn(M(), { style: m.props.style }, { style: h() }));
              var I = de(), L = Q(I);
              {
                var Z = (D) => {
                  var j = de(), G = Q(j);
                  {
                    let R = /* @__PURE__ */ P(() => ({
                      props: u(N),
                      wrapperProps: C(),
                      ...m.snippetProps
                    }));
                    Ae(G, d, () => u(R));
                  }
                  A(D, j);
                }, X = (D) => {
                  var j = P5();
                  Je(j, () => ({ ...C() }));
                  var G = q(j);
                  Je(G, () => ({ ...u(N) }));
                  var R = q(G);
                  Ae(R, () => c() ?? Be), Y(G), Y(j), A(D, j);
                };
                se(L, (D) => {
                  d() ? D(Z) : D(X, !1);
                });
              }
              A(T, I);
            },
            $$slots: { popper: !0 }
          }));
        };
        se(
          z,
          (B) => {
            i() || B(V);
          },
          !0
        );
      }
      A(x, O);
    };
    se(k, (x) => {
      i() ? x(S) : x(_, !1);
    });
  }
  return A(t, b), ce(w);
}
ie(
  Sl,
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
function ov(t, e) {
  le(e, !0);
  let n = p(e, "mounted", 15, !1), r = p(e, "onMountedChange", 7, Ke);
  r7(() => (n(!0), r()(!0), () => {
    n(!1), r()(!1);
  }));
  var o = {
    get mounted() {
      return n();
    },
    set mounted(i = !1) {
      n(i), g();
    },
    get onMountedChange() {
      return r();
    },
    set onMountedChange(i = Ke) {
      r(i), g();
    }
  };
  return ce(o);
}
ie(ov, { mounted: {}, onMountedChange: {} }, [], [], !0);
var N5 = /* @__PURE__ */ re("<div><!></div>"), O5 = /* @__PURE__ */ re("<!> <!>", 1);
function El(t, e) {
  const n = wi();
  le(e, !0);
  let r = p(e, "id", 23, () => Rn(n)), o = p(e, "ref", 15, null), i = p(e, "value", 7), s = p(e, "label", 23, i), a = p(e, "disabled", 7, !1), l = p(e, "children", 7), c = p(e, "child", 7), d = p(e, "onHighlight", 7, Ke), f = p(e, "onUnhighlight", 7, Ke), h = /* @__PURE__ */ ze(e, [
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
  const v = Yc.create({
    id: ge(() => r()),
    ref: ge(() => o(), (x) => o(x)),
    value: ge(() => i()),
    disabled: ge(() => a()),
    label: ge(() => s()),
    onHighlight: ge(() => d()),
    onUnhighlight: ge(() => f())
  }), m = /* @__PURE__ */ P(() => zn(h, v.props));
  var y = {
    get id() {
      return r();
    },
    set id(x = Rn(n)) {
      r(x), g();
    },
    get ref() {
      return o();
    },
    set ref(x = null) {
      o(x), g();
    },
    get value() {
      return i();
    },
    set value(x) {
      i(x), g();
    },
    get label() {
      return s();
    },
    set label(x = i) {
      s(x), g();
    },
    get disabled() {
      return a();
    },
    set disabled(x = !1) {
      a(x), g();
    },
    get children() {
      return l();
    },
    set children(x) {
      l(x), g();
    },
    get child() {
      return c();
    },
    set child(x) {
      c(x), g();
    },
    get onHighlight() {
      return d();
    },
    set onHighlight(x = Ke) {
      d(x), g();
    },
    get onUnhighlight() {
      return f();
    },
    set onUnhighlight(x = Ke) {
      f(x), g();
    }
  }, w = O5(), b = Q(w);
  {
    var k = (x) => {
      var O = de(), z = Q(O);
      {
        let V = /* @__PURE__ */ P(() => ({ props: u(m), ...v.snippetProps }));
        Ae(z, c, () => u(V));
      }
      A(x, O);
    }, S = (x) => {
      var O = N5();
      Je(O, () => ({ ...u(m) }));
      var z = q(O);
      Ae(z, () => l() ?? Be, () => v.snippetProps), Y(O), A(x, O);
    };
    se(b, (x) => {
      c() ? x(k) : x(S, !1);
    });
  }
  var _ = F(b, 2);
  return ov(_, {
    get mounted() {
      return v.mounted;
    },
    set mounted(x) {
      v.mounted = x;
    }
  }), A(t, w), ce(y);
}
ie(
  El,
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
var A5 = /* @__PURE__ */ re("<div><!></div>");
const T5 = {
  hash: "svelte-1dj2lcd",
  code: `
	/* Hide scrollbars cross browser and enable momentum scroll for touch devices */[data-select-viewport] {scrollbar-width:none !important;-ms-overflow-style:none !important;-webkit-overflow-scrolling:touch !important;}[data-combobox-viewport] {scrollbar-width:none !important;-ms-overflow-style:none !important;-webkit-overflow-scrolling:touch !important;}[data-combobox-viewport]::-webkit-scrollbar {display:none !important;}[data-select-viewport]::-webkit-scrollbar {display:none !important;}`
};
function Pl(t, e) {
  const n = wi();
  le(e, !0), Qe(t, T5);
  let r = p(e, "id", 23, () => Rn(n)), o = p(e, "ref", 15, null), i = p(e, "children", 7), s = p(e, "child", 7), a = /* @__PURE__ */ ze(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "id",
    "ref",
    "children",
    "child"
  ]);
  const l = jc.create({
    id: ge(() => r()),
    ref: ge(() => o(), (y) => o(y))
  }), c = /* @__PURE__ */ P(() => zn(a, l.props));
  var d = {
    get id() {
      return r();
    },
    set id(y = Rn(n)) {
      r(y), g();
    },
    get ref() {
      return o();
    },
    set ref(y = null) {
      o(y), g();
    },
    get children() {
      return i();
    },
    set children(y) {
      i(y), g();
    },
    get child() {
      return s();
    },
    set child(y) {
      s(y), g();
    }
  }, f = de(), h = Q(f);
  {
    var v = (y) => {
      var w = de(), b = Q(w);
      Ae(b, s, () => ({ props: u(c) })), A(y, w);
    }, m = (y) => {
      var w = A5();
      Je(w, () => ({ ...u(c) }));
      var b = q(w);
      Ae(b, () => i() ?? Be), Y(w), A(y, w);
    };
    se(h, (y) => {
      s() ? y(v) : y(m, !1);
    });
  }
  return A(t, f), ce(d);
}
ie(Pl, { id: {}, ref: {}, children: {}, child: {} }, [], [], !0);
var M5 = /* @__PURE__ */ re("<!> <!>", 1);
function Nl(t, e) {
  le(e, !0);
  let n = p(e, "value", 15), r = p(e, "onValueChange", 7, Ke), o = p(e, "name", 7, ""), i = p(e, "disabled", 7, !1), s = p(e, "type", 7), a = p(e, "open", 15, !1), l = p(e, "onOpenChange", 7, Ke), c = p(e, "onOpenChangeComplete", 7, Ke), d = p(e, "loop", 7, !1), f = p(e, "scrollAlignment", 7, "nearest"), h = p(e, "required", 7, !1), v = p(e, "items", 23, () => []), m = p(e, "allowDeselect", 7, !1), y = p(e, "autocomplete", 7), w = p(e, "children", 7);
  function b() {
    n() === void 0 && n(s() === "single" ? "" : []);
  }
  b(), xt.pre(() => n(), () => {
    b();
  });
  let k = /* @__PURE__ */ ve("");
  const S = k5.create({
    type: s(),
    value: ge(() => n(), ($) => {
      n($), r()($);
    }),
    disabled: ge(() => i()),
    required: ge(() => h()),
    open: ge(() => a(), ($) => {
      a($), l()($);
    }),
    loop: ge(() => d()),
    scrollAlignment: ge(() => f()),
    name: ge(() => o()),
    isCombobox: !1,
    items: ge(() => v()),
    allowDeselect: ge(() => m()),
    inputValue: ge(() => u(k), ($) => W(k, $, !0)),
    onOpenChangeComplete: ge(() => c())
  });
  var _ = {
    get value() {
      return n();
    },
    set value($) {
      n($), g();
    },
    get onValueChange() {
      return r();
    },
    set onValueChange($ = Ke) {
      r($), g();
    },
    get name() {
      return o();
    },
    set name($ = "") {
      o($), g();
    },
    get disabled() {
      return i();
    },
    set disabled($ = !1) {
      i($), g();
    },
    get type() {
      return s();
    },
    set type($) {
      s($), g();
    },
    get open() {
      return a();
    },
    set open($ = !1) {
      a($), g();
    },
    get onOpenChange() {
      return l();
    },
    set onOpenChange($ = Ke) {
      l($), g();
    },
    get onOpenChangeComplete() {
      return c();
    },
    set onOpenChangeComplete($ = Ke) {
      c($), g();
    },
    get loop() {
      return d();
    },
    set loop($ = !1) {
      d($), g();
    },
    get scrollAlignment() {
      return f();
    },
    set scrollAlignment($ = "nearest") {
      f($), g();
    },
    get required() {
      return h();
    },
    set required($ = !1) {
      h($), g();
    },
    get items() {
      return v();
    },
    set items($ = []) {
      v($), g();
    },
    get allowDeselect() {
      return m();
    },
    set allowDeselect($ = !1) {
      m($), g();
    },
    get autocomplete() {
      return y();
    },
    set autocomplete($) {
      y($), g();
    },
    get children() {
      return w();
    },
    set children($) {
      w($), g();
    }
  }, x = M5(), O = Q(x);
  Xp(O, {
    children: ($, T) => {
      var E = de(), M = Q(E);
      Ae(M, () => w() ?? Be), A($, E);
    },
    $$slots: { default: !0 }
  });
  var z = F(O, 2);
  {
    var V = ($) => {
      var T = de(), E = Q(T);
      {
        var M = (N) => {
          cs(N, {
            get autocomplete() {
              return y();
            }
          });
        }, C = (N) => {
          var I = de(), L = Q(I);
          Ct(L, 16, () => S.opts.value.current, (Z) => Z, (Z, X) => {
            cs(Z, {
              get value() {
                return X;
              },
              get autocomplete() {
                return y();
              }
            });
          }), A(N, I);
        };
        se(E, (N) => {
          S.opts.value.current.length === 0 ? N(M) : N(C, !1);
        });
      }
      A($, T);
    }, B = ($) => {
      cs($, {
        get autocomplete() {
          return y();
        },
        get value() {
          return S.opts.value.current;
        },
        set value(T) {
          S.opts.value.current = T;
        }
      });
    };
    se(z, ($) => {
      Array.isArray(S.opts.value.current) ? $(V) : $(B, !1);
    });
  }
  return A(t, x), ce(_);
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
var D5 = /* @__PURE__ */ re("<button><!></button>");
function Ol(t, e) {
  const n = wi();
  le(e, !0);
  let r = p(e, "id", 23, () => Rn(n)), o = p(e, "ref", 15, null), i = p(e, "child", 7), s = p(e, "children", 7), a = p(e, "type", 7, "button"), l = /* @__PURE__ */ ze(e, [
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
  const c = Wc.create({
    id: ge(() => r()),
    ref: ge(() => o(), (m) => o(m))
  }), d = /* @__PURE__ */ P(() => zn(l, c.props, { type: a() }));
  var f = {
    get id() {
      return r();
    },
    set id(m = Rn(n)) {
      r(m), g();
    },
    get ref() {
      return o();
    },
    set ref(m = null) {
      o(m), g();
    },
    get child() {
      return i();
    },
    set child(m) {
      i(m), g();
    },
    get children() {
      return s();
    },
    set children(m) {
      s(m), g();
    },
    get type() {
      return a();
    },
    set type(m = "button") {
      a(m), g();
    }
  }, h = de(), v = Q(h);
  return St(v, () => Jp, (m, y) => {
    y(m, {
      get id() {
        return r();
      },
      get ref() {
        return c.opts.ref;
      },
      children: (w, b) => {
        var k = de(), S = Q(k);
        {
          var _ = (O) => {
            var z = de(), V = Q(z);
            Ae(V, i, () => ({ props: u(d) })), A(O, z);
          }, x = (O) => {
            var z = D5();
            Je(z, () => ({ ...u(d) }));
            var V = q(z);
            Ae(V, () => s() ?? Be), Y(z), A(O, z);
          };
          se(S, (O) => {
            i() ? O(_) : O(x, !1);
          });
        }
        A(w, k);
      },
      $$slots: { default: !0 }
    });
  }), A(t, h), ce(f);
}
ie(Ol, { id: {}, ref: {}, child: {}, children: {}, type: {} }, [], [], !0);
const I5 = {
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
const V5 = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
  return !1;
};
const z5 = Symbol("lucide-context"), L5 = () => bn(z5);
var H5 = /* @__PURE__ */ _e("<svg><!><!></svg>");
function wa(t, e) {
  le(e, !0);
  const n = L5() ?? {}, r = p(e, "name", 7), o = p(e, "color", 23, () => n.color ?? "currentColor"), i = p(e, "size", 23, () => n.size ?? 24), s = p(e, "strokeWidth", 23, () => n.strokeWidth ?? 2), a = p(e, "absoluteStrokeWidth", 23, () => n.absoluteStrokeWidth ?? !1), l = p(e, "iconNode", 23, () => []), c = p(e, "children", 7), d = /* @__PURE__ */ ze(e, [
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
  ]), f = /* @__PURE__ */ P(() => a() ? Number(s()) * 24 / Number(i()) : s());
  var h = {
    get name() {
      return r();
    },
    set name(w) {
      r(w), g();
    },
    get color() {
      return o();
    },
    set color(w = n.color ?? "currentColor") {
      o(w), g();
    },
    get size() {
      return i();
    },
    set size(w = n.size ?? 24) {
      i(w), g();
    },
    get strokeWidth() {
      return s();
    },
    set strokeWidth(w = n.strokeWidth ?? 2) {
      s(w), g();
    },
    get absoluteStrokeWidth() {
      return a();
    },
    set absoluteStrokeWidth(w = n.absoluteStrokeWidth ?? !1) {
      a(w), g();
    },
    get iconNode() {
      return l();
    },
    set iconNode(w = []) {
      l(w), g();
    },
    get children() {
      return c();
    },
    set children(w) {
      c(w), g();
    }
  }, v = H5();
  Je(
    v,
    (w) => ({
      ...I5,
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
        e.class
      ]
    }),
    [
      () => !c() && !V5(d) && { "aria-hidden": "true" }
    ]
  );
  var m = q(v);
  Ct(m, 17, l, Xr, (w, b) => {
    var k = /* @__PURE__ */ P(() => Oo(u(b), 2));
    let S = () => u(k)[0], _ = () => u(k)[1];
    var x = de(), O = Q(x);
    Ff(O, S, !0, (z, V) => {
      Je(z, () => ({ ..._() }));
    }), A(w, x);
  });
  var y = F(m);
  return Ae(y, () => c() ?? Be), Y(v), A(t, v), ce(h);
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
function iv(t, e) {
  le(e, !0);
  let n = /* @__PURE__ */ ze(e, ["$$slots", "$$events", "$$legacy", "$$host"]);
  const r = [["path", { d: "M20 6 9 17l-5-5" }]];
  wa(t, Fe({ name: "check" }, () => n, {
    get iconNode() {
      return r;
    },
    children: (o, i) => {
      var s = de(), a = Q(s);
      Ae(a, () => e.children ?? Be), A(o, s);
    },
    $$slots: { default: !0 }
  })), ce();
}
ie(iv, {}, [], [], !0);
function sv(t, e) {
  le(e, !0);
  let n = /* @__PURE__ */ ze(e, ["$$slots", "$$events", "$$legacy", "$$host"]);
  const r = [["path", { d: "M5 12h14" }]];
  wa(t, Fe({ name: "minus" }, () => n, {
    get iconNode() {
      return r;
    },
    children: (o, i) => {
      var s = de(), a = Q(s);
      Ae(a, () => e.children ?? Be), A(o, s);
    },
    $$slots: { default: !0 }
  })), ce();
}
ie(sv, {}, [], [], !0);
var R5 = /* @__PURE__ */ re('<div data-slot="checkbox-indicator" class="[&amp;>svg]:size-3.5 grid place-content-center text-current transition-none"><!></div>');
function av(t, e) {
  le(e, !0);
  let n = p(e, "ref", 15, null), r = p(e, "checked", 15, !1), o = p(e, "indeterminate", 15, !1), i = p(e, "class", 7), s = /* @__PURE__ */ ze(e, [
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
      n(d), g();
    },
    get checked() {
      return r();
    },
    set checked(d = !1) {
      r(d), g();
    },
    get indeterminate() {
      return o();
    },
    set indeterminate(d = !1) {
      o(d), g();
    },
    get class() {
      return i();
    },
    set class(d) {
      i(d), g();
    }
  }, l = de(), c = Q(l);
  {
    const d = (h, v) => {
      let m = () => v?.().checked, y = () => v?.().indeterminate;
      var w = R5(), b = q(w);
      {
        var k = (_) => {
          iv(_, {});
        }, S = (_) => {
          var x = de(), O = Q(x);
          {
            var z = (V) => {
              sv(V, {});
            };
            se(
              O,
              (V) => {
                y() && V(z);
              },
              !0
            );
          }
          A(_, x);
        };
        se(b, (_) => {
          m() ? _(k) : _(S, !1);
        });
      }
      Y(w), A(h, w);
    };
    let f = /* @__PURE__ */ P(() => mn("nopan nodrag border-input dark:bg-input/30 data-checked:bg-primary data-checked:text-primary-foreground dark:data-checked:bg-primary data-checked:border-primary aria-invalid:aria-checked:border-primary aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 flex size-4 items-center justify-center rounded-[4px] border shadow-xs transition-shadow group-has-disabled/field:opacity-50 focus-visible:ring-3 aria-invalid:ring-3 peer relative shrink-0 outline-none after:absolute after:-inset-x-3 after:-inset-y-2 disabled:cursor-not-allowed disabled:opacity-50", i()));
    St(c, () => Mp, (h, v) => {
      v(h, Fe(
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
  return A(t, l), ce(a);
}
ie(av, { ref: {}, checked: {}, indeterminate: {}, class: {} }, [], [], !0);
var F5 = /* @__PURE__ */ re('<div><input type="hidden"/> <!> <!></div>');
const B5 = {
  hash: "svelte-1o3a23c",
  code: ".tf-chosen.svelte-1o3a23c {display:flex;flex-direction:row;align-items:center;justify-content:space-between;gap:5px;}"
};
function lv(t, e) {
  le(e, !0), Qe(t, B5);
  const n = p(e, "placeholder", 7), r = p(e, "label", 7), o = p(e, "value", 7), i = p(e, "buttonText", 7, "选择..."), s = p(e, "onChosen", 7), a = /* @__PURE__ */ ze(e, [
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
      n(v), g();
    },
    get label() {
      return r();
    },
    set label(v) {
      r(v), g();
    },
    get value() {
      return o();
    },
    set value(v) {
      o(v), g();
    },
    get buttonText() {
      return i();
    },
    set buttonText(v = "选择...") {
      i(v), g();
    },
    get onChosen() {
      return s();
    },
    set onChosen(v) {
      s(v), g();
    }
  }, c = F5();
  Je(
    c,
    () => ({
      ...a,
      class: `tf-chosen nopan nodrag ${e.class ?? ""}`
    }),
    void 0,
    void 0,
    void 0,
    "svelte-1o3a23c"
  );
  var d = q(c);
  _r(d);
  var f = F(d, 2);
  yt(f, {
    get value() {
      return r();
    },
    get placeholder() {
      return n();
    },
    style: "flex-grow: 1;",
    disabled: !0
  });
  var h = F(f, 2);
  return qe(h, {
    variant: "outline",
    onclick: (v) => {
      s()?.(o(), r(), v);
    },
    style: "padding: 3px",
    children: (v, m) => {
      Ee();
      var y = De();
      Te(() => rt(y, i())), A(v, y);
    },
    $$slots: { default: !0 }
  }), Y(c), Te(() => es(d, o())), A(t, c), ce(l);
}
ie(
  lv,
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
var $5 = /* @__PURE__ */ re("<input/>"), K5 = /* @__PURE__ */ re("<input/>");
function yt(t, e) {
  le(e, !0);
  let n = p(e, "ref", 15, null), r = p(e, "value", 15), o = p(e, "type", 7), i = p(e, "files", 15), s = p(e, "class", 7), a = p(e, "data-slot", 7, "input"), l = /* @__PURE__ */ ze(e, [
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
    set ref(m = null) {
      n(m), g();
    },
    get value() {
      return r();
    },
    set value(m) {
      r(m), g();
    },
    get type() {
      return o();
    },
    set type(m) {
      o(m), g();
    },
    get files() {
      return i();
    },
    set files(m) {
      i(m), g();
    },
    get class() {
      return s();
    },
    set class(m) {
      s(m), g();
    },
    get "data-slot"() {
      return a();
    },
    set "data-slot"(m = "input") {
      a(m), g();
    }
  }, d = de(), f = Q(d);
  {
    var h = (m) => {
      var y = $5();
      Je(
        y,
        (w) => ({
          "data-slot": a(),
          class: w,
          type: "file",
          ...l
        }),
        [
          () => mn("nopan nodrag dark:bg-input/30 border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 h-9 rounded-md border bg-transparent px-2.5 py-1 text-base shadow-xs transition-[color,box-shadow] file:h-7 file:text-sm file:font-medium focus-visible:ring-3 aria-invalid:ring-3 md:text-sm file:text-foreground placeholder:text-muted-foreground w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50", s())
        ],
        void 0,
        void 0,
        void 0,
        !0
      ), Tt(y, (w) => n(w), () => n()), h1(y, i), ys(y, r), A(m, y);
    }, v = (m) => {
      var y = K5();
      Je(
        y,
        (w) => ({
          "data-slot": a(),
          spellcheck: "false",
          class: w,
          type: o(),
          ...l
        }),
        [
          () => mn("nopan nodrag dark:bg-input/30 border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 h-9 rounded-md border bg-transparent px-2.5 py-1 text-base shadow-xs transition-[color,box-shadow] file:h-7 file:text-sm file:font-medium focus-visible:ring-3 aria-invalid:ring-3 md:text-sm file:text-foreground placeholder:text-muted-foreground w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50", s())
        ],
        void 0,
        void 0,
        void 0,
        !0
      ), Tt(y, (w) => n(w), () => n()), ys(y, r), A(m, y);
    };
    se(f, (m) => {
      o() === "file" ? m(h) : m(v, !1);
    });
  }
  return A(t, d), ce(c);
}
ie(
  yt,
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
var W5 = /* @__PURE__ */ re("<textarea></textarea>");
function tt(t, e) {
  le(e, !0);
  let n = p(e, "ref", 15, null), r = p(e, "value", 15), o = p(e, "class", 7), i = p(e, "data-slot", 7, "textarea"), s = p(e, "height", 7), a = p(e, "autoHeight", 7, !0), l = p(e, "maxHeight", 7), c = p(e, "onHeightChange", 7), d = /* @__PURE__ */ ze(e, [
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
  ]), f, h;
  function v() {
    if (f && a()) {
      if (s() !== void 0) {
        const S = typeof s() == "number" ? `${s()}px` : s();
        f.style.height = S, f.style.overflowY = "hidden", c()?.(S);
        return;
      }
      f.style.height = "auto", f.style.overflowY = "hidden";
      let k = f.scrollHeight;
      if (!h) {
        const S = e.rows || 1, _ = getComputedStyle(f);
        h = parseFloat(_.fontSize) * 1.2 * S + parseFloat(_.paddingTop) + parseFloat(_.paddingBottom) + parseFloat(_.borderTopWidth);
      }
      if (k < h && (k = h), l()) {
        const S = typeof l() == "number" ? `${l()}px` : l();
        k > parseInt(S) ? (f.style.height = S, f.style.overflowY = "auto") : f.style.height = `${k}px`;
      } else
        f.style.height = `${k}px`;
      c()?.(f.style.height);
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
      n(k), g();
    },
    get value() {
      return r();
    },
    set value(k) {
      r(k), g();
    },
    get class() {
      return o();
    },
    set class(k) {
      o(k), g();
    },
    get "data-slot"() {
      return i();
    },
    set "data-slot"(k = "textarea") {
      i(k), g();
    },
    get height() {
      return s();
    },
    set height(k) {
      s(k), g();
    },
    get autoHeight() {
      return a();
    },
    set autoHeight(k = !0) {
      a(k), g();
    },
    get maxHeight() {
      return l();
    },
    set maxHeight(k) {
      l(k), g();
    },
    get onHeightChange() {
      return c();
    },
    set onHeightChange(k) {
      c(k), g();
    }
  }, y = W5();
  zm(y);
  var w = (k) => {
    v(), e.oninput?.(k);
  }, b = (k) => {
    v(), e.onchange?.(k);
  };
  return Je(
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
      () => mn("nodrag nowheel border-input dark:bg-input/30 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 rounded-md border bg-transparent px-2.5 py-2 text-base shadow-xs transition-[color,box-shadow] focus-visible:ring-3 aria-invalid:ring-3 md:text-sm placeholder:text-muted-foreground flex field-sizing-content min-h-16 w-full outline-none disabled:cursor-not-allowed disabled:opacity-50", o())
    ]
  ), Tt(y, (k) => f = k, () => f), ys(y, r), A(t, y), ce(m);
}
ie(
  tt,
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
var Z5 = /* @__PURE__ */ re('<div role="button"><!></div>'), Y5 = /* @__PURE__ */ re("<div></div>");
function cv(t, e) {
  const n = gu(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]), r = gu(n, ["items", "onChange", "activeIndex"]);
  le(e, !1);
  let o = p(e, "items", 28, () => []), i = p(e, "onChange", 12, () => {
  }), s = p(e, "activeIndex", 12, 0);
  function a(d, f) {
    s(f), i()?.(d, f);
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
  rc();
  var c = Y5();
  return Je(c, () => ({
    ...r,
    class: `tf-tabs ${Jl(r), at(() => r.class) ?? ""}`
  })), Ct(c, 5, o, Xr, (d, f, h) => {
    var v = Z5();
    Ne(v, "tabindex", h), v.__click = () => a(u(f), h), v.__keydown = (b) => {
      (b.key === "Enter" || b.key === " ") && (b.preventDefault(), a(u(f), h));
    };
    var m = q(v);
    {
      var y = (b) => {
        var k = De();
        Te(() => rt(k, (u(f), at(() => u(f).label)))), A(b, k);
      }, w = (b) => {
        var k = de(), S = Q(k);
        Ae(S, () => (u(f), at(() => u(f).label) ?? Be)), A(b, k);
      };
      se(m, (b) => {
        u(f), at(() => typeof u(f).label == "string") ? b(y) : b(w, !1);
      });
    }
    Y(v), Te(() => Gt(v, 1, `tf-tabs-item ${h === s() ? "active" : ""}`)), A(d, v);
  }), Y(c), A(t, c), ce(l);
}
io(["click", "keydown"]);
ie(cv, { items: {}, onChange: {}, activeIndex: {} }, [], [], !0);
var q5 = /* @__PURE__ */ re('<span class="tf-collapse-item-title-icon"><!></span>'), j5 = /* @__PURE__ */ re('<div class="tf-collapse-item-description"><!></div>'), X5 = /* @__PURE__ */ re('<div class="tf-collapse-item-content"><!></div>'), U5 = /* @__PURE__ */ re('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><!> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), G5 = /* @__PURE__ */ re("<div></div>");
const J5 = {
  hash: "svelte-ynwjxt",
  code: `\r
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-ynwjxt {transform:rotate(90deg);transition:transform 0.3s ease;}`
};
function uv(t, e) {
  le(e, !0), Qe(t, J5);
  let n = p(e, "items", 7), r = p(e, "onChange", 7), o = p(e, "activeKeys", 31, () => ht([]));
  function i(l) {
    o().includes(l.key) ? o(o().filter((c) => c !== l.key)) : (o().push(l.key), o(o())), r()?.(l, o());
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
  }, a = G5();
  return Ct(a, 21, n, Xr, (l, c, d) => {
    var f = U5(), h = q(f);
    Ne(h, "tabindex", d), h.__click = () => i(u(c)), h.__keydown = (x) => {
      (x.key === "Enter" || x.key === " ") && (x.preventDefault(), i(u(c)));
    };
    var v = q(h);
    {
      var m = (x) => {
        var O = q5(), z = q(O);
        Jn(z, {
          get target() {
            return u(c).icon;
          }
        }), Y(O), A(x, O);
      };
      se(v, (x) => {
        u(c).icon && x(m);
      });
    }
    var y = F(v, 2);
    Jn(y, {
      get target() {
        return u(c).title;
      }
    });
    var w = F(y, 2);
    Y(h);
    var b = F(h, 2);
    {
      var k = (x) => {
        var O = j5(), z = q(O);
        Jn(z, {
          get target() {
            return u(c).description;
          }
        }), Y(O), A(x, O);
      };
      se(b, (x) => {
        u(c).description && x(k);
      });
    }
    var S = F(b, 2);
    {
      var _ = (x) => {
        var O = X5(), z = q(O);
        Jn(z, {
          get target() {
            return u(c).content;
          }
        }), Y(O), A(x, O);
      };
      se(S, (x) => {
        o().includes(u(c).key) && x(_);
      });
    }
    Y(f), Te((x) => Gt(w, 1, `tf-collapse-item-title-arrow ${x ?? ""}`, "svelte-ynwjxt"), [
      () => o().includes(u(c).key) ? "rotate-90" : ""
    ]), A(l, f);
  }), Y(a), Te(() => {
    At(a, e.style), Gt(a, 1, `tf-collapse ${e.class ?? ""}`, "svelte-ynwjxt");
  }), A(t, a), ce(s);
}
io(["click", "keydown"]);
ie(uv, { items: {}, onChange: {}, activeKeys: {} }, [], [], !0);
function Jn(t, e) {
  le(e, !0);
  let n = p(e, "target", 7);
  typeof n() > "u" && n("undefined");
  var r = {
    get target() {
      return n();
    },
    set target(l) {
      n(l), g();
    }
  }, o = de(), i = Q(o);
  {
    var s = (l) => {
      var c = de(), d = Q(c);
      Ae(d, () => n() ?? Be), A(l, c);
    }, a = (l) => {
      var c = de(), d = Q(c);
      ia(d, n), A(l, c);
    };
    se(i, (l) => {
      typeof n() == "function" ? l(s) : l(a, !1);
    });
  }
  return A(t, o), ce(r);
}
ie(Jn, { target: {} }, [], [], !0);
function Al(t, e) {
  le(e, !0);
  let n = /* @__PURE__ */ ze(e, ["$$slots", "$$events", "$$legacy", "$$host"]);
  const r = [["path", { d: "m6 9 6 6 6-6" }]];
  wa(t, Fe({ name: "chevron-down" }, () => n, {
    get iconNode() {
      return r;
    },
    children: (o, i) => {
      var s = de(), a = Q(s);
      Ae(a, () => e.children ?? Be), A(o, s);
    },
    $$slots: { default: !0 }
  })), ce();
}
ie(Al, {}, [], [], !0);
var Q5 = /* @__PURE__ */ re('<span class="mx-1">,</span>'), e3 = /* @__PURE__ */ re("<!> <!>", 1), t3 = /* @__PURE__ */ re('<span class="text-muted-foreground"> </span>'), n3 = /* @__PURE__ */ re('<span class="flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-left"><!></span> <!>', 1), r3 = /* @__PURE__ */ re('<div class="py-6 text-center text-sm text-muted-foreground">暂无数据</div>'), o3 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), i3 = /* @__PURE__ */ re('<span class="absolute right-2 flex size-3.5 items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path></svg></span>'), s3 = /* @__PURE__ */ re('<span class="flex items-center gap-2 whitespace-nowrap"><!> <!></span> <!>', 1), a3 = /* @__PURE__ */ re("<!> <!>", 1), l3 = /* @__PURE__ */ re('<span class="text-muted-foreground"> </span>'), c3 = /* @__PURE__ */ re('<span class="flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-left"><!></span> <!>', 1), u3 = /* @__PURE__ */ re('<div class="py-6 text-center text-sm text-muted-foreground">暂无数据</div>'), d3 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), f3 = /* @__PURE__ */ re('<span class="absolute right-2 flex size-3.5 items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path></svg></span>'), h3 = /* @__PURE__ */ re('<span class="flex items-center gap-2 whitespace-nowrap"><!> <!></span> <!>', 1), g3 = /* @__PURE__ */ re("<!> <!>", 1);
function Nt(t, e) {
  le(e, !0);
  let n = p(e, "items", 7), r = p(e, "onSelect", 7), o = p(e, "value", 23, () => []), i = p(e, "defaultValue", 23, () => []), s = p(e, "expandAll", 7, !0), a = p(e, "multiple", 7, !1), l = p(e, "expandValue", 23, () => []), c = p(e, "placeholder", 7), d = p(e, "disabled", 7, !1), f = p(e, "class", 7), h = /* @__PURE__ */ ze(e, [
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
  ]), v = /* @__PURE__ */ P(() => {
    const T = [], E = (M) => {
      for (const C of M)
        T.push(C), C.children?.length && E(C.children);
    };
    return E(n()), T;
  }), m = /* @__PURE__ */ P(() => {
    const T = [], E = o().length > 0 ? o() : i();
    for (const M of E) {
      if (M == null) continue;
      const C = u(v).find((N) => N.value === M);
      C && T.push(C);
    }
    return T;
  }), y = /* @__PURE__ */ P(() => !a() && u(m).length > 0 ? String(u(m)[0].value) : ""), w = /* @__PURE__ */ P(() => a() ? u(m).map((T) => String(T.value)) : []);
  function b(T, E) {
    T.stopPropagation(), r()?.(E);
  }
  function k(T, E = 0) {
    const M = [];
    for (const C of T) {
      M.push(C);
      const N = s() || l().includes(C.value);
      C.children?.length && N && M.push(...k(C.children, E + 1));
    }
    return M;
  }
  let S = /* @__PURE__ */ P(() => k(n()));
  function _(T) {
    return n().findIndex((M) => M.value === T.value) === -1;
  }
  function x(T) {
    return {
      value: String(T.value),
      label: typeof T.label == "string" ? T.label : String(T.value),
      disabled: !1
    };
  }
  var O = {
    get items() {
      return n();
    },
    set items(T) {
      n(T), g();
    },
    get onSelect() {
      return r();
    },
    set onSelect(T) {
      r(T), g();
    },
    get value() {
      return o();
    },
    set value(T = []) {
      o(T), g();
    },
    get defaultValue() {
      return i();
    },
    set defaultValue(T = []) {
      i(T), g();
    },
    get expandAll() {
      return s();
    },
    set expandAll(T = !0) {
      s(T), g();
    },
    get multiple() {
      return a();
    },
    set multiple(T = !1) {
      a(T), g();
    },
    get expandValue() {
      return l();
    },
    set expandValue(T = []) {
      l(T), g();
    },
    get placeholder() {
      return c();
    },
    set placeholder(T) {
      c(T), g();
    },
    get disabled() {
      return d();
    },
    set disabled(T = !1) {
      d(T), g();
    },
    get class() {
      return f();
    },
    set class(T) {
      f(T), g();
    }
  }, z = de(), V = Q(z);
  {
    var B = (T) => {
      var E = de(), M = Q(E);
      St(M, () => Nl, (C, N) => {
        N(C, Fe(
          {
            type: "multiple",
            get value() {
              return u(w);
            }
          },
          () => h,
          {
            children: (I, L) => {
              var Z = a3(), X = Q(Z);
              {
                let j = /* @__PURE__ */ P(() => mn("nopan nodrag border-input dark:bg-input/30 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 flex h-9 w-full items-center justify-between rounded-md border bg-transparent px-2.5 py-1 text-base shadow-xs transition-[color,box-shadow] focus-visible:ring-3 aria-invalid:ring-3 md:text-sm", d() && "cursor-not-allowed bg-muted/50 text-muted-foreground opacity-60", f()));
                St(X, () => Ol, (G, R) => {
                  R(G, {
                    get class() {
                      return u(j);
                    },
                    get disabled() {
                      return d();
                    },
                    children: (ee, K) => {
                      var U = n3(), ne = Q(U), H = q(ne);
                      {
                        var te = (ae) => {
                          var oe = de(), fe = Q(oe);
                          Ct(fe, 19, () => u(m), (ye) => ye.value, (ye, ke, he) => {
                            var me = e3(), Oe = Q(me);
                            Jn(Oe, {
                              get target() {
                                return u(ke).label;
                              }
                            });
                            var J = F(Oe, 2);
                            {
                              var Re = (Se) => {
                                var We = Q5();
                                A(Se, We);
                              };
                              se(J, (Se) => {
                                u(he) < u(m).length - 1 && Se(Re);
                              });
                            }
                            A(ye, me);
                          }), A(ae, oe);
                        }, xe = (ae) => {
                          var oe = t3(), fe = q(oe, !0);
                          Y(oe), Te(() => rt(fe, c() ?? "")), A(ae, oe);
                        };
                        se(H, (ae) => {
                          u(m).length > 0 ? ae(te) : ae(xe, !1);
                        });
                      }
                      Y(ne);
                      var ue = F(ne, 2);
                      Al(ue, { class: "size-4 opacity-50" }), A(ee, U);
                    },
                    $$slots: { default: !0 }
                  });
                });
              }
              var D = F(X, 2);
              St(D, () => wl, (j, G) => {
                G(j, {
                  children: (R, ee) => {
                    var K = de(), U = Q(K);
                    St(U, () => Sl, (ne, H) => {
                      H(ne, {
                        class: "nopan nodrag nowheel data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-96 min-w-(--bits-select-anchor-width) overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md",
                        children: (te, xe) => {
                          var ue = de(), ae = Q(ue);
                          St(ae, () => Pl, (oe, fe) => {
                            fe(oe, {
                              class: "p-1",
                              children: (ye, ke) => {
                                var he = de(), me = Q(he);
                                {
                                  var Oe = (Re) => {
                                    var Se = r3();
                                    A(Re, Se);
                                  }, J = (Re) => {
                                    var Se = de(), We = Q(Se);
                                    Ct(We, 17, () => u(S), (Ve) => Ve.value, (Ve, Ue) => {
                                      const ot = /* @__PURE__ */ P(() => u(Ue).children && u(Ue).children.length > 0), ct = /* @__PURE__ */ P(() => x(u(Ue)));
                                      var st = de(), Mt = Q(st);
                                      {
                                        const pe = (Ge, $e) => {
                                          let nt = () => $e?.().selected;
                                          var ft = s3(), ut = Q(ft), Dt = q(ut);
                                          {
                                            var vt = (lt) => {
                                              var Ir = o3();
                                              A(lt, Ir);
                                            };
                                            se(Dt, (lt) => {
                                              u(ot) && lt(vt);
                                            });
                                          }
                                          var mt = F(Dt, 2);
                                          Jn(mt, {
                                            get target() {
                                              return u(Ue).label;
                                            }
                                          }), Y(ut);
                                          var $t = F(ut, 2);
                                          {
                                            var zo = (lt) => {
                                              var Ir = i3();
                                              A(lt, Ir);
                                            };
                                            se($t, (lt) => {
                                              nt() && lt(zo);
                                            });
                                          }
                                          A(Ge, ft);
                                        };
                                        let Me = /* @__PURE__ */ P(() => mn("relative flex w-full cursor-pointer select-none items-center rounded-sm py-1.5 pr-8 pl-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50", _(u(Ue)) && "pl-6"));
                                        St(Mt, () => El, (Ge, $e) => {
                                          $e(Ge, {
                                            get value() {
                                              return u(ct).value;
                                            },
                                            get label() {
                                              return u(ct).label;
                                            },
                                            get class() {
                                              return u(Me);
                                            },
                                            onclick: (nt) => b(nt, u(Ue)),
                                            children: pe,
                                            $$slots: { default: !0 }
                                          });
                                        });
                                      }
                                      A(Ve, st);
                                    }), A(Re, Se);
                                  };
                                  se(me, (Re) => {
                                    u(S).length === 0 ? Re(Oe) : Re(J, !1);
                                  });
                                }
                                A(ye, he);
                              },
                              $$slots: { default: !0 }
                            });
                          }), A(te, ue);
                        },
                        $$slots: { default: !0 }
                      });
                    }), A(R, K);
                  },
                  $$slots: { default: !0 }
                });
              }), A(I, Z);
            },
            $$slots: { default: !0 }
          }
        ));
      }), A(T, E);
    }, $ = (T) => {
      var E = de(), M = Q(E);
      St(M, () => Nl, (C, N) => {
        N(C, Fe(
          {
            type: "single",
            get value() {
              return u(y);
            }
          },
          () => h,
          {
            children: (I, L) => {
              var Z = g3(), X = Q(Z);
              {
                let j = /* @__PURE__ */ P(() => mn("nopan nodrag border-input dark:bg-input/30 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 flex h-9 w-full items-center justify-between rounded-md border bg-transparent px-2.5 py-1 text-base shadow-xs transition-[color,box-shadow] focus-visible:ring-3 aria-invalid:ring-3 md:text-sm", d() && "cursor-not-allowed bg-muted/50 text-muted-foreground opacity-60", f()));
                St(X, () => Ol, (G, R) => {
                  R(G, {
                    get class() {
                      return u(j);
                    },
                    get disabled() {
                      return d();
                    },
                    children: (ee, K) => {
                      var U = c3(), ne = Q(U), H = q(ne);
                      {
                        var te = (ae) => {
                          Jn(ae, {
                            get target() {
                              return u(m)[0].label;
                            }
                          });
                        }, xe = (ae) => {
                          var oe = l3(), fe = q(oe, !0);
                          Y(oe), Te(() => rt(fe, c() ?? "")), A(ae, oe);
                        };
                        se(H, (ae) => {
                          u(m).length > 0 ? ae(te) : ae(xe, !1);
                        });
                      }
                      Y(ne);
                      var ue = F(ne, 2);
                      Al(ue, { class: "size-4 opacity-50" }), A(ee, U);
                    },
                    $$slots: { default: !0 }
                  });
                });
              }
              var D = F(X, 2);
              St(D, () => wl, (j, G) => {
                G(j, {
                  children: (R, ee) => {
                    var K = de(), U = Q(K);
                    St(U, () => Sl, (ne, H) => {
                      H(ne, {
                        class: "nopan nodrag nowheel data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-96 min-w-(--bits-select-anchor-width) overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md",
                        children: (te, xe) => {
                          var ue = de(), ae = Q(ue);
                          St(ae, () => Pl, (oe, fe) => {
                            fe(oe, {
                              class: "p-1",
                              children: (ye, ke) => {
                                var he = de(), me = Q(he);
                                {
                                  var Oe = (Re) => {
                                    var Se = u3();
                                    A(Re, Se);
                                  }, J = (Re) => {
                                    var Se = de(), We = Q(Se);
                                    Ct(We, 17, () => u(S), (Ve) => Ve.value, (Ve, Ue) => {
                                      const ot = /* @__PURE__ */ P(() => u(Ue).children && u(Ue).children.length > 0), ct = /* @__PURE__ */ P(() => x(u(Ue)));
                                      var st = de(), Mt = Q(st);
                                      {
                                        const pe = (Ge, $e) => {
                                          let nt = () => $e?.().selected;
                                          var ft = h3(), ut = Q(ft), Dt = q(ut);
                                          {
                                            var vt = (lt) => {
                                              var Ir = d3();
                                              A(lt, Ir);
                                            };
                                            se(Dt, (lt) => {
                                              u(ot) && lt(vt);
                                            });
                                          }
                                          var mt = F(Dt, 2);
                                          Jn(mt, {
                                            get target() {
                                              return u(Ue).label;
                                            }
                                          }), Y(ut);
                                          var $t = F(ut, 2);
                                          {
                                            var zo = (lt) => {
                                              var Ir = f3();
                                              A(lt, Ir);
                                            };
                                            se($t, (lt) => {
                                              nt() && lt(zo);
                                            });
                                          }
                                          A(Ge, ft);
                                        };
                                        let Me = /* @__PURE__ */ P(() => mn("relative flex w-full cursor-pointer select-none items-center rounded-sm py-1.5 pr-8 pl-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50", _(u(Ue)) && "pl-6"));
                                        St(Mt, () => El, (Ge, $e) => {
                                          $e(Ge, {
                                            get value() {
                                              return u(ct).value;
                                            },
                                            get label() {
                                              return u(ct).label;
                                            },
                                            get class() {
                                              return u(Me);
                                            },
                                            onclick: (nt) => b(nt, u(Ue)),
                                            children: pe,
                                            $$slots: { default: !0 }
                                          });
                                        });
                                      }
                                      A(Ve, st);
                                    }), A(Re, Se);
                                  };
                                  se(me, (Re) => {
                                    u(S).length === 0 ? Re(Oe) : Re(J, !1);
                                  });
                                }
                                A(ye, he);
                              },
                              $$slots: { default: !0 }
                            });
                          }), A(te, ue);
                        },
                        $$slots: { default: !0 }
                      });
                    }), A(R, K);
                  },
                  $$slots: { default: !0 }
                });
              }), A(I, Z);
            },
            $$slots: { default: !0 }
          }
        ));
      }), A(T, E);
    };
    se(V, (T) => {
      a() ? T(B) : T($, !1);
    });
  }
  return A(t, z), ce(O);
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
const p3 = ({
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
    qp(t, c, {
      placement: r,
      middleware: [
        Kp(o),
        // 手动偏移配置
        Zp(i),
        //自动翻转
        Wp(s),
        //自动偏移（使得浮动元素能够进入视野）
        ...l ? [Yp({ element: d })] : []
      ]
    }).then(({ x: b, y: k, placement: S, middlewareData: _ }) => {
      if (Object.assign(c.style, {
        left: `${b}px`,
        top: `${k}px`
      }), l) {
        const { x, y: O } = _.arrow, z = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[S.split("-")[0]];
        Object.assign(d.style, {
          zIndex: -1,
          left: x != null ? `${x}px` : "",
          top: O != null ? `${O}px` : "",
          right: "",
          bottom: "",
          [z]: "2px"
        });
      }
    });
  }
  let h = !1;
  function v() {
    c.style.display = "block", c.style.visibility = "block", c.style.position = "absolute", l && (d.style.display = "block"), h = !0, f();
  }
  function m() {
    c.style.display = "none", l && (d.style.display = "none"), h = !1;
  }
  function y(b) {
    b.stopPropagation(), h ? m() : v();
  }
  function w(b) {
    c.contains(b.target) || m();
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
      return h;
    }
  };
};
var v3 = /* @__PURE__ */ re('<div style="position: relative"><div><!></div> <div style="display: none; width: 100%;z-index: 9999"><!></div></div>');
function ao(t, e) {
  le(e, !0);
  const n = p(e, "children", 7), r = p(e, "floating", 7), o = p(e, "placement", 7, "bottom");
  let i, s, a;
  Cn(() => (a = p3({
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
    set children(y) {
      n(y), g();
    },
    get floating() {
      return r();
    },
    set floating(y) {
      r(y), g();
    },
    get placement() {
      return o();
    },
    set placement(y = "bottom") {
      o(y), g();
    }
  }, d = v3(), f = q(d), h = q(f);
  Ae(h, n), Y(f), Tt(f, (y) => i = y, () => i);
  var v = F(f, 2), m = q(v);
  return Ae(m, r), Y(v), Tt(v, (y) => s = y, () => s), Y(d), A(t, d), ce(c);
}
ie(ao, { children: {}, floating: {}, placement: {} }, [], ["hide"], !0);
function je(t, e) {
  le(e, !0);
  const n = p(e, "children", 7), r = p(e, "level", 7, 1), o = p(e, "mt", 7), i = p(e, "mb", 7);
  var s = {
    get children() {
      return n();
    },
    set children(c) {
      n(c), g();
    },
    get level() {
      return r();
    },
    set level(c = 1) {
      r(c), g();
    },
    get mt() {
      return o();
    },
    set mt(c) {
      o(c), g();
    },
    get mb() {
      return i();
    },
    set mb(c) {
      i(c), g();
    }
  }, a = de(), l = Q(a);
  return Ff(l, () => `h${r()}`, !1, (c, d) => {
    Je(c, () => ({
      class: "tf-heading",
      style: `margin-top:${o() || "0"};margin-bottom:${i() || "0"}`
    }));
    var f = de(), h = Q(f);
    Ae(h, () => n() ?? Be), A(d, f);
  }), A(t, a), ce(s);
}
ie(je, { children: {}, level: {}, mt: {}, mb: {} }, [], [], !0);
var m3 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1q3h954"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1q3h954"></path></svg>');
const y3 = {
  hash: "svelte-1q3h954",
  code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:var(--input);border:1px solid transparent;}}"
};
function Vi(t, e) {
  le(e, !0), Qe(t, y3);
  const n = /* @__PURE__ */ ze(e, ["$$slots", "$$events", "$$legacy", "$$host"]);
  {
    let r = /* @__PURE__ */ P(() => mn("input-btn-more", e.class));
    qe(t, Fe(
      {
        size: "icon-xs",
        get class() {
          return u(r);
        }
      },
      () => n,
      {
        children: (o, i) => {
          var s = m3();
          A(o, s);
        },
        $$slots: { default: !0 }
      }
    ));
  }
  ce();
}
ie(Vi, {}, [], [], !0);
const w3 = () => ({ deleteNode: (e) => {
  Ye.removeNode(e), Ye.updateEdges((n) => n.filter((r) => r.source !== e && r.target !== e));
} }), Bn = (t = 16) => {
  const e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = new Uint8Array(t);
  return crypto.getRandomValues(n), Array.from(n, (r) => e[r % e.length]).join("");
}, b3 = () => ({ copyNode: (e) => {
  const n = Ye.getNode(e);
  if (n) {
    const r = Bn(), o = {
      ...n,
      id: r,
      position: { x: n.position.x + 50, y: n.position.y + 50 }
    };
    Ye.updateNodes((i) => [...i.map((a) => ({ ...a, selected: !1 })), o]);
  }
} }), pt = () => bn("svelteflow__node_id"), Pr = () => bn("tinyflow_options");
var x3 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'), _3 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'), C3 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'), k3 = /* @__PURE__ */ re('<div class="input-item svelte-ana6zl">执行条件： <!></div>'), S3 = /* @__PURE__ */ re('<div class="input-item svelte-ana6zl">循环间隔时间（单位：毫秒）： <!></div> <div class="input-item svelte-ana6zl">最大循环次数（0 表示不限制）： <!></div> <div class="input-item svelte-ana6zl">退出条件： <!></div>', 1), E3 = /* @__PURE__ */ re('<div class="input-item svelte-ana6zl">错误重试间隔时间（单位：毫秒）： <!></div> <div class="input-item svelte-ana6zl">最大重试次数： <!></div> <label class="input-item-inline svelte-ana6zl"><span>正常后重置重试次数记录：</span> <input type="checkbox"/></label>', 1), P3 = /* @__PURE__ */ re('<div class="settings svelte-ana6zl"><div class="input-item svelte-ana6zl">节点名称： <!></div> <div class="input-item svelte-ana6zl">参数描述： <!></div> <!> <label class="input-item-inline svelte-ana6zl"><span>循环执行：</span> <input type="checkbox"/></label> <!> <label class="input-item-inline svelte-ana6zl"><span>错误重试：</span> <input type="checkbox"/></label> <!></div>'), N3 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3.33946 17.0002C2.90721 16.2515 2.58277 15.4702 2.36133 14.6741C3.3338 14.1779 3.99972 13.1668 3.99972 12.0002C3.99972 10.8345 3.3348 9.824 2.36353 9.32741C2.81025 7.71651 3.65857 6.21627 4.86474 4.99001C5.7807 5.58416 6.98935 5.65534 7.99972 5.072C9.01009 4.48866 9.55277 3.40635 9.4962 2.31604C11.1613 1.8846 12.8847 1.90004 14.5031 2.31862C14.4475 3.40806 14.9901 4.48912 15.9997 5.072C17.0101 5.65532 18.2187 5.58416 19.1346 4.99007C19.7133 5.57986 20.2277 6.25151 20.66 7.00021C21.0922 7.7489 21.4167 8.53025 21.6381 9.32628C20.6656 9.82247 19.9997 10.8336 19.9997 12.0002C19.9997 13.166 20.6646 14.1764 21.6359 14.673C21.1892 16.2839 20.3409 17.7841 19.1347 19.0104C18.2187 18.4163 17.0101 18.3451 15.9997 18.9284C14.9893 19.5117 14.4467 20.5941 14.5032 21.6844C12.8382 22.1158 11.1148 22.1004 9.49633 21.6818C9.55191 20.5923 9.00929 19.5113 7.99972 18.9284C6.98938 18.3451 5.78079 18.4162 4.86484 19.0103C4.28617 18.4205 3.77172 17.7489 3.33946 17.0002ZM8.99972 17.1964C10.0911 17.8265 10.8749 18.8227 11.2503 19.9659C11.7486 20.0133 12.2502 20.014 12.7486 19.9675C13.1238 18.8237 13.9078 17.8268 14.9997 17.1964C16.0916 16.5659 17.347 16.3855 18.5252 16.6324C18.8146 16.224 19.0648 15.7892 19.2729 15.334C18.4706 14.4373 17.9997 13.2604 17.9997 12.0002C17.9997 10.74 18.4706 9.5632 19.2729 8.6665C19.1688 8.4405 19.0538 8.21822 18.9279 8.00021C18.802 7.78219 18.667 7.57148 18.5233 7.36842C17.3457 7.61476 16.0911 7.43414 14.9997 6.80405C13.9083 6.17395 13.1246 5.17768 12.7491 4.03455C12.2509 3.98714 11.7492 3.98646 11.2509 4.03292C10.8756 5.17671 10.0916 6.17364 8.99972 6.80405C7.9078 7.43447 6.65245 7.61494 5.47428 7.36803C5.18485 7.77641 4.93463 8.21117 4.72656 8.66637C5.52881 9.56311 5.99972 10.74 5.99972 12.0002C5.99972 13.2604 5.52883 14.4372 4.72656 15.3339C4.83067 15.5599 4.94564 15.7822 5.07152 16.0002C5.19739 16.2182 5.3324 16.4289 5.47612 16.632C6.65377 16.3857 7.90838 16.5663 8.99972 17.1964ZM11.9997 15.0002C10.3429 15.0002 8.99972 13.6571 8.99972 12.0002C8.99972 10.3434 10.3429 9.00021 11.9997 9.00021C13.6566 9.00021 14.9997 10.3434 14.9997 12.0002C14.9997 13.6571 13.6566 15.0002 11.9997 15.0002ZM11.9997 13.0002C12.552 13.0002 12.9997 12.5525 12.9997 12.0002C12.9997 11.4479 12.552 11.0002 11.9997 11.0002C11.4474 11.0002 10.9997 11.4479 10.9997 12.0002C10.9997 12.5525 11.4474 13.0002 11.9997 13.0002Z"></path></svg>'), O3 = /* @__PURE__ */ re('<div class="tf-node-toolbar svelte-ana6zl"><!> <!> <!> <!></div>'), A3 = /* @__PURE__ */ re('<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!> <!>', 1);
const T3 = {
  hash: "svelte-ana6zl",
  code: ".tf-node-toolbar.svelte-ana6zl {display:flex;gap:5px;padding:5px;border-radius:5px;background:var(--background);border:1px solid var(--border);box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}.settings.svelte-ana6zl {display:flex;flex-direction:column;gap:10px;padding:10px;background:var(--background);border:1px solid var(--border);border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.settings.svelte-ana6zl .input-item:where(.svelte-ana6zl) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:var(--muted-foreground);}.settings.svelte-ana6zl .input-item-inline:where(.svelte-ana6zl) {display:flex;align-items:center;font-size:12px;color:var(--muted-foreground);}"
};
function dn(t, e) {
  le(e, !0), Qe(t, T3);
  const n = p(e, "data", 7), r = p(e, "id", 7, ""), o = p(e, "icon", 7), i = p(e, "handle", 7), s = p(e, "children", 7), a = p(e, "allowExecute", 7, !0), l = p(e, "allowCopy", 7, !0), c = p(e, "allowDelete", 7, !0), d = p(e, "allowSetting", 7, !0), f = p(e, "allowSettingOfCondition", 7, !0), h = p(e, "showSourceHandle", 7, !0), v = p(e, "showTargetHandle", 7, !0), m = p(e, "onCollapse", 7);
  let y = n().expand ? ["key"] : [];
  const { updateNodeData: w, getNode: b } = kt(), k = /* @__PURE__ */ P(() => [
    {
      key: "key",
      icon: o(),
      title: n().title,
      description: n().description,
      content: s()
    }
  ]), { deleteNode: S } = w3(), { copyNode: _ } = b3(), x = Pr(), O = () => {
    x.onNodeExecute?.(b(r()));
  };
  let z = pt();
  var V = {
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
      return c();
    },
    set allowDelete(D = !0) {
      c(D), g();
    },
    get allowSetting() {
      return d();
    },
    set allowSetting(D = !0) {
      d(D), g();
    },
    get allowSettingOfCondition() {
      return f();
    },
    set allowSettingOfCondition(D = !0) {
      f(D), g();
    },
    get showSourceHandle() {
      return h();
    },
    set showSourceHandle(D = !0) {
      h(D), g();
    },
    get showTargetHandle() {
      return v();
    },
    set showTargetHandle(D = !0) {
      v(D), g();
    },
    get onCollapse() {
      return m();
    },
    set onCollapse(D) {
      m(D), g();
    }
  }, B = A3(), $ = Q(B);
  {
    var T = (D) => {
      Ig(D, {
        get position() {
          return Pe.Top;
        },
        align: "start",
        children: (j, G) => {
          var R = O3(), ee = q(R);
          {
            var K = (ae) => {
              qe(ae, {
                size: "icon",
                class: "tf-node-toolbar-item",
                onclick: () => {
                  S(r());
                },
                children: (oe, fe) => {
                  var ye = x3();
                  A(oe, ye);
                },
                $$slots: { default: !0 }
              });
            };
            se(ee, (ae) => {
              c() && ae(K);
            });
          }
          var U = F(ee, 2);
          {
            var ne = (ae) => {
              qe(ae, {
                size: "icon",
                class: "tf-node-toolbar-item",
                onclick: () => {
                  _(r());
                },
                children: (oe, fe) => {
                  var ye = _3();
                  A(oe, ye);
                },
                $$slots: { default: !0 }
              });
            };
            se(U, (ae) => {
              l() && ae(ne);
            });
          }
          var H = F(U, 2);
          {
            var te = (ae) => {
              qe(ae, {
                size: "icon",
                class: "tf-node-toolbar-item",
                onclick: O,
                children: (oe, fe) => {
                  var ye = C3();
                  A(oe, ye);
                },
                $$slots: { default: !0 }
              });
            };
            se(H, (ae) => {
              a() && ae(te);
            });
          }
          var xe = F(H, 2);
          {
            var ue = (ae) => {
              ao(ae, {
                placement: "bottom",
                floating: (fe) => {
                  var ye = P3(), ke = q(ye), he = F(q(ke));
                  yt(he, {
                    style: "width: 100%;",
                    onchange: (pe) => {
                      const Me = pe.target.value;
                      w(z, { title: Me });
                    },
                    get value() {
                      return n().title;
                    }
                  }), Y(ke);
                  var me = F(ke, 2), Oe = F(q(me));
                  tt(Oe, {
                    rows: 3,
                    style: "width: 100%;",
                    onchange: (pe) => {
                      const Me = pe.target.value;
                      w(z, { description: Me });
                    },
                    get value() {
                      return n().description;
                    }
                  }), Y(me);
                  var J = F(me, 2);
                  {
                    var Re = (pe) => {
                      var Me = k3(), Ge = F(q(Me));
                      tt(Ge, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: ($e) => {
                          const nt = $e.target.value;
                          w(z, { condition: nt });
                        },
                        get value() {
                          return n().condition;
                        }
                      }), Y(Me), A(pe, Me);
                    };
                    se(J, (pe) => {
                      f() && pe(Re);
                    });
                  }
                  var Se = F(J, 2), We = F(q(Se), 2);
                  _r(We), We.__change = (pe) => {
                    const Me = pe.target.checked;
                    w(z, { loopEnable: Me });
                  }, Y(Se);
                  var Ve = F(Se, 2);
                  {
                    var Ue = (pe) => {
                      var Me = S3(), Ge = Q(Me), $e = F(q(Ge));
                      {
                        let vt = /* @__PURE__ */ P(() => n().loopIntervalMs || "1000");
                        tt($e, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (mt) => {
                            const $t = mt.target.value;
                            w(z, { loopIntervalMs: $t });
                          },
                          get value() {
                            return u(vt);
                          }
                        });
                      }
                      Y(Ge);
                      var nt = F(Ge, 2), ft = F(q(nt));
                      {
                        let vt = /* @__PURE__ */ P(() => n().maxLoopCount || "0");
                        tt(ft, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (mt) => {
                            const $t = mt.target.value;
                            w(z, { maxLoopCount: $t });
                          },
                          get value() {
                            return u(vt);
                          }
                        });
                      }
                      Y(nt);
                      var ut = F(nt, 2), Dt = F(q(ut));
                      tt(Dt, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (vt) => {
                          const mt = vt.target.value;
                          w(z, { loopBreakCondition: mt });
                        },
                        get value() {
                          return n().loopBreakCondition;
                        }
                      }), Y(ut), A(pe, Me);
                    };
                    se(Ve, (pe) => {
                      n().loopEnable && pe(Ue);
                    });
                  }
                  var ot = F(Ve, 2), ct = F(q(ot), 2);
                  _r(ct), ct.__change = (pe) => {
                    const Me = pe.target.checked;
                    w(z, { retryEnable: Me });
                  }, Y(ot);
                  var st = F(ot, 2);
                  {
                    var Mt = (pe) => {
                      var Me = E3(), Ge = Q(Me), $e = F(q(Ge));
                      {
                        let vt = /* @__PURE__ */ P(() => n().retryIntervalMs || "1000");
                        tt($e, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (mt) => {
                            const $t = mt.target.value;
                            w(z, { retryIntervalMs: $t });
                          },
                          get value() {
                            return u(vt);
                          }
                        });
                      }
                      Y(Ge);
                      var nt = F(Ge, 2), ft = F(q(nt));
                      {
                        let vt = /* @__PURE__ */ P(() => n().maxRetryCount || "3");
                        tt(ft, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (mt) => {
                            const $t = mt.target.value;
                            w(z, { maxRetryCount: $t });
                          },
                          get value() {
                            return u(vt);
                          }
                        });
                      }
                      Y(nt);
                      var ut = F(nt, 2), Dt = F(q(ut), 2);
                      _r(Dt), Dt.__change = (vt) => {
                        const mt = vt.target.checked;
                        w(z, { resetRetryCountAfterNormal: mt });
                      }, Y(ut), Te(() => Ca(Dt, !!n().resetRetryCountAfterNormal)), A(pe, Me);
                    };
                    se(st, (pe) => {
                      n().retryEnable && pe(Mt);
                    });
                  }
                  Y(ye), Te(() => {
                    Ca(We, !!n().loopEnable), Ca(ct, !!n().retryEnable);
                  }), A(fe, ye);
                },
                children: (fe, ye) => {
                  qe(fe, {
                    size: "icon",
                    class: "tf-node-toolbar-item",
                    children: (ke, he) => {
                      var me = N3();
                      A(ke, me);
                    },
                    $$slots: { default: !0 }
                  });
                },
                $$slots: { floating: !0, default: !0 }
              });
            };
            se(xe, (ae) => {
              d() && ae(ue);
            });
          }
          Y(R), A(j, R);
        },
        $$slots: { default: !0 }
      });
    };
    se($, (D) => {
      (a() || l() || c()) && D(T);
    });
  }
  var E = F($, 2), M = F(q(E), 2), C = q(M);
  uv(C, {
    get items() {
      return u(k);
    },
    get activeKeys() {
      return y;
    },
    onChange: (D, j) => {
      w(r(), { expand: j?.includes("key") }), m()?.(j?.includes("key") ? "key" : "");
    }
  }), Y(M), Y(E);
  var N = F(E, 2);
  {
    var I = (D) => {
      kr(D, {
        type: "target",
        get position() {
          return Pe.Left;
        },
        style: " left: -12px;top: 20px"
      });
    };
    se(N, (D) => {
      v() && D(I);
    });
  }
  var L = F(N, 2);
  {
    var Z = (D) => {
      kr(D, {
        type: "source",
        get position() {
          return Pe.Right;
        },
        style: "right: -12px;top: 20px"
      });
    };
    se(L, (D) => {
      h() && D(Z);
    });
  }
  var X = F(L, 2);
  return Ae(X, () => i() ?? Be), A(t, B), ce(V);
}
io(["change"]);
ie(
  dn,
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
var M3 = /* @__PURE__ */ re('<div class="input-more-item svelte-n5iecj">数据选项： <!></div>'), D3 = /* @__PURE__ */ re('<div class="input-more-setting svelte-n5iecj"><div class="input-more-item svelte-n5iecj">数据内容： <!></div> <div class="input-more-item svelte-n5iecj">输入方式： <!></div> <!> <div class="input-more-item svelte-n5iecj">数据标题： <!></div> <div class="input-more-item svelte-n5iecj">数据描述： <!></div> <div class="input-more-item svelte-n5iecj">占位符： <!></div> <div class="input-more-item svelte-n5iecj"><!></div></div>'), I3 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>'), V3 = /* @__PURE__ */ re('<div class="input-item svelte-n5iecj"><!></div> <div class="input-item svelte-n5iecj"><!></div> <div class="input-item svelte-n5iecj"><!></div>', 1);
const z3 = {
  hash: "svelte-n5iecj",
  code: ".input-item.svelte-n5iecj {display:flex;align-items:center;}.input-more-setting.svelte-n5iecj {display:flex;flex-direction:column;gap:10px;padding:10px;background:var(--background);border:1px solid var(--border);border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-n5iecj .input-more-item:where(.svelte-n5iecj) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:var(--muted-foreground);}"
};
function dv(t, e) {
  le(e, !0), Qe(t, z3);
  const n = p(e, "parameter", 7), r = p(e, "index", 7);
  let o = pt(), i = hr(o), s = /* @__PURE__ */ P(() => ({ ...n(), ...i?.current?.data?.parameters[r()] }));
  const { updateNodeData: a } = kt(), l = (V, B) => {
    a(o, ($) => {
      let T = $.data.parameters;
      return T[r()][V] = B, { parameters: T };
    });
  }, c = (V, B) => {
    const $ = B.target.value;
    l(V, $);
  }, d = (V) => {
    const B = V.target.value;
    l("name", B);
  }, f = (V) => {
    l("required", V);
  }, h = (V) => {
    const B = V.value;
    l("formType", B);
  }, v = (V) => {
    const B = V.value;
    l("contentType", B);
  };
  let m;
  const y = () => {
    a(o, (V) => {
      let B = V.data.parameters;
      return B.splice(r(), 1), { parameters: [...B] };
    }), m?.hide();
  };
  var w = {
    get parameter() {
      return n();
    },
    set parameter(V) {
      n(V), g();
    },
    get index() {
      return r();
    },
    set index(V) {
      r(V), g();
    }
  }, b = V3(), k = Q(b), S = q(k);
  yt(S, {
    style: "width: 100%;",
    get value() {
      return u(s).name;
    },
    placeholder: "请输入参数名称",
    oninput: d
  }), Y(k);
  var _ = F(k, 2), x = q(_);
  av(x, {
    get checked() {
      return u(s).required;
    },
    onCheckedChange: f
  }), Y(_);
  var O = F(_, 2), z = q(O);
  return Tt(
    ao(z, {
      placement: "bottom",
      floating: (B) => {
        var $ = D3(), T = q($), E = F(q(T));
        {
          let K = /* @__PURE__ */ P(() => u(s).contentType ? [u(s).contentType] : []);
          Nt(E, {
            get items() {
              return xc;
            },
            style: "width: 100%",
            defaultValue: ["text"],
            get value() {
              return u(K);
            },
            onSelect: v
          });
        }
        Y(T);
        var M = F(T, 2), C = F(q(M));
        {
          let K = /* @__PURE__ */ P(() => u(s).formType ? [u(s).formType] : []);
          Nt(C, {
            get items() {
              return vx;
            },
            style: "width: 100%",
            defaultValue: ["input"],
            get value() {
              return u(K);
            },
            onSelect: h
          });
        }
        Y(M);
        var N = F(M, 2);
        {
          var I = (K) => {
            var U = M3(), ne = F(q(U));
            {
              let H = /* @__PURE__ */ P(() => u(s).enums?.join(`
`));
              tt(ne, {
                rows: 3,
                style: "width: 100%;",
                onchange: (te) => {
                  l("enums", te.target?.value.trim().split(`
`));
                },
                get value() {
                  return u(H);
                },
                placeholder: "一行一个选项"
              });
            }
            Y(U), A(K, U);
          };
          se(N, (K) => {
            (u(s).formType === "radio" || u(s).formType === "checkbox" || u(s).formType === "select") && K(I);
          });
        }
        var L = F(N, 2), Z = F(q(L));
        tt(Z, {
          rows: 1,
          style: "width: 100%;",
          onchange: (K) => {
            c("formLabel", K);
          },
          get value() {
            return u(s).formLabel;
          }
        }), Y(L);
        var X = F(L, 2), D = F(q(X));
        tt(D, {
          rows: 2,
          style: "width: 100%;",
          onchange: (K) => {
            c("formDescription", K);
          },
          get value() {
            return u(s).formDescription;
          }
        }), Y(X);
        var j = F(X, 2), G = F(q(j));
        tt(G, {
          rows: 2,
          style: "width: 100%;",
          onchange: (K) => {
            c("formPlaceholder", K);
          },
          get value() {
            return u(s).formPlaceholder;
          }
        }), Y(j);
        var R = F(j, 2), ee = q(R);
        qe(ee, {
          variant: "destructive",
          onclick: y,
          children: (K, U) => {
            Ee();
            var ne = De("删除");
            A(K, ne);
          },
          $$slots: { default: !0 }
        }), Y(R), Y($), A(B, $);
      },
      children: (B, $) => {
        qe(B, {
          size: "icon-xs",
          class: "input-btn-more",
          children: (T, E) => {
            var M = I3();
            A(T, M);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (B) => m = B,
    () => m
  ), Y(O), A(t, b), ce(w);
}
ie(dv, { parameter: {}, index: {} }, [], [], !0);
var L3 = /* @__PURE__ */ re('<div class="input-header svelte-1yp5n1k">参数名称</div> <div class="input-header svelte-1yp5n1k">必填</div> <div class="input-header svelte-1yp5n1k"></div>', 1), H3 = /* @__PURE__ */ re('<div class="none-params svelte-1yp5n1k">无输入参数</div>'), R3 = /* @__PURE__ */ re('<div class="input-container svelte-1yp5n1k"><!> <!></div>');
const F3 = {
  hash: "svelte-1yp5n1k",
  code: `.input-container.svelte-1yp5n1k {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1yp5n1k .none-params:where(.svelte-1yp5n1k) {font-size:12px;background:var(--secondary);height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1yp5n1k .input-header:where(.svelte-1yp5n1k) {font-size:12px;color:var(--muted-foreground);}`
};
function fv(t, e) {
  le(e, !0), Qe(t, F3);
  let n = pt(), r = hr(n), o = /* @__PURE__ */ P(() => [...r?.current?.data?.parameters || []]);
  var i = R3(), s = q(i);
  {
    var a = (c) => {
      var d = L3();
      Ee(4), A(c, d);
    };
    se(s, (c) => {
      u(o).length !== 0 && c(a);
    });
  }
  var l = F(s, 2);
  Ct(
    l,
    19,
    () => u(o),
    (c) => c.id,
    (c, d, f) => {
      dv(c, {
        get parameter() {
          return u(d);
        },
        get index() {
          return u(f);
        }
      });
    },
    (c) => {
      var d = H3();
      A(c, d);
    }
  ), Y(i), A(t, i), ce();
}
ie(fv, {}, [], [], !0);
const gi = (t) => (!t || t.length == 0 || t.forEach((e) => {
  e.id || (e.id = Bn()), gi(e.children);
}), t), En = () => {
  const { updateNodeData: t } = kt();
  return {
    addParameter: (e, n = "parameters", r) => {
      Array.isArray(r) ? r.forEach((s) => gi(s?.children)) : gi(r?.children);
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
var B3 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), $3 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), K3 = /* @__PURE__ */ re('<div class="heading svelte-llt1qy"><!> <!></div> <!>', 1);
const W3 = {
  hash: "svelte-llt1qy",
  code: ".heading.svelte-llt1qy {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:var(--muted);border:1px solid transparent;}"
};
function hv(t, e) {
  le(e, !0), Qe(t, W3);
  const n = p(e, "data", 7), r = /* @__PURE__ */ ze(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = pt(), { addParameter: i } = En();
  var s = {
    get data() {
      return n();
    },
    set data(a) {
      n(a), g();
    }
  };
  return dn(t, Fe(() => r, {
    get data() {
      return n();
    },
    allowExecute: !1,
    showTargetHandle: !1,
    allowSettingOfCondition: !1,
    icon: (l) => {
      var c = B3();
      A(l, c);
    },
    children: (l, c) => {
      var d = K3(), f = Q(d), h = q(f);
      je(h, {
        level: 3,
        children: (y, w) => {
          Ee();
          var b = De("输入参数");
          A(y, b);
        },
        $$slots: { default: !0 }
      });
      var v = F(h, 2);
      qe(v, {
        size: "icon-xs",
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: () => {
          i(o, "parameters", { refType: "input", name: "newParam" });
        },
        children: (y, w) => {
          var b = $3();
          A(y, b);
        },
        $$slots: { default: !0 }
      }), Y(f);
      var m = F(f, 2);
      fv(m, {}), A(l, d);
    },
    $$slots: { icon: !0, default: !0 }
  })), ce(s);
}
ie(hv, { data: {} }, [], [], !0);
const gv = (t, e, n) => {
  for (const r of n)
    r.target === e && r.source && (t.push(r.source), gv(t, r.source, n));
}, pv = (t, e, n) => !t || t.length === 0 ? [] : t.map((r) => ({
  label: r.name + (n ? ` (Array<${r.dataType || "String"}>)` : ` (${r.dataType || "String"})`),
  value: e + "." + r.name,
  children: pv(r.children, e + "." + r.name, n)
})), Dd = (t, e, n) => {
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
          children: pv(r, t.id, e)
        };
    }
  }
}, vv = (t = !1) => {
  const e = pt(), n = hr(e), r = /* @__PURE__ */ P(Sn), o = /* @__PURE__ */ P(() => u(r).nodes), i = /* @__PURE__ */ P(() => u(r).edges), s = /* @__PURE__ */ P(() => u(r).nodeLookup);
  let a = /* @__PURE__ */ P(() => {
    const l = [];
    if (!n.current)
      return [];
    const c = u(s).get(e);
    if (t)
      for (const d of u(o)) {
        const f = d.parentId === n.current.id;
        if (f) {
          const h = Dd(d, f, c);
          h && l.push(h);
        }
      }
    else {
      const d = [];
      gv(d, e, u(i));
      for (const f of u(o))
        if (d.includes(f.id)) {
          const h = f.parentId === n.current.id, v = Dd(f, h, c);
          v && l.push(v);
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
var Z3 = /* @__PURE__ */ re('<div class="input-more-item svelte-jmeys3">数据内容： <!></div>'), Y3 = /* @__PURE__ */ re('<div class="input-more-setting svelte-jmeys3"><div class="input-more-item svelte-jmeys3">数据来源： <!></div> <!> <div class="input-more-item svelte-jmeys3">默认值： <!></div> <div class="input-more-item svelte-jmeys3">参数描述： <!></div> <div class="input-more-item svelte-jmeys3"><!></div></div>'), q3 = /* @__PURE__ */ re('<div class="input-item svelte-jmeys3"><!></div> <div class="input-item svelte-jmeys3"><!></div> <div class="input-item svelte-jmeys3"><!></div>', 1);
const j3 = {
  hash: "svelte-jmeys3",
  code: ".input-item.svelte-jmeys3 {display:flex;align-items:center;}.input-more-setting.svelte-jmeys3 {display:flex;flex-direction:column;gap:10px;padding:10px;background:var(--background);border:1px solid var(--border);border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-jmeys3 .input-more-item:where(.svelte-jmeys3) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:var(--muted-foreground);}"
};
function mv(t, e) {
  le(e, !0), Qe(t, j3), Cn(() => {
    u(c).refType || m({ value: "ref" });
  });
  const n = p(e, "parameter", 7), r = p(e, "index", 7), o = p(e, "dataKeyName", 7), i = p(e, "useChildrenOnly", 7), s = p(e, "showContentType", 7, !1);
  let a = pt(), l = hr(a), c = /* @__PURE__ */ P(() => ({
    ...n(),
    ...l?.current?.data?.[o()][r()]
  }));
  const { updateNodeData: d } = kt(), f = (M, C) => {
    d(a, (N) => {
      let I = N.data?.[o()];
      return I[r()] = { ...I[r()], [M]: C }, { [o()]: I };
    });
  }, h = (M, C) => {
    const N = C.target.value;
    f(M, N);
  }, v = (M) => {
    const C = M.value;
    f("ref", C);
  }, m = (M) => {
    const C = M.value;
    f("refType", C);
  }, y = (M) => {
    const C = M.value;
    f("contentType", C);
  };
  let w;
  const b = () => {
    d(a, (M) => {
      let C = M.data?.[o()];
      return C.splice(r(), 1), { [o()]: [...C] };
    }), w?.hide();
  };
  let k = vv(i());
  var S = {
    get parameter() {
      return n();
    },
    set parameter(M) {
      n(M), g();
    },
    get index() {
      return r();
    },
    set index(M) {
      r(M), g();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(M) {
      o(M), g();
    },
    get useChildrenOnly() {
      return i();
    },
    set useChildrenOnly(M) {
      i(M), g();
    },
    get showContentType() {
      return s();
    },
    set showContentType(M = !1) {
      s(M), g();
    }
  }, _ = q3(), x = Q(_), O = q(x);
  {
    let M = /* @__PURE__ */ P(() => u(c).nameDisabled === !0);
    yt(O, {
      style: "width: 100%;",
      get value() {
        return u(c).name;
      },
      placeholder: "请输入参数名称",
      get disabled() {
        return u(M);
      },
      oninput: (C) => h("name", C)
    });
  }
  Y(x);
  var z = F(x, 2), V = q(z);
  {
    var B = (M) => {
      yt(M, {
        get value() {
          return u(c).value;
        },
        placeholder: "请输入参数值",
        oninput: (C) => h("value", C)
      });
    }, $ = (M) => {
      var C = de(), N = Q(C);
      {
        var I = (L) => {
          {
            let Z = /* @__PURE__ */ P(() => [u(c).ref]);
            Nt(L, {
              get items() {
                return k.current;
              },
              style: "width: 100%",
              defaultValue: ["ref"],
              get value() {
                return u(Z);
              },
              expandAll: !0,
              onSelect: v
            });
          }
        };
        se(
          N,
          (L) => {
            u(c).refType !== "input" && L(I);
          },
          !0
        );
      }
      A(M, C);
    };
    se(V, (M) => {
      u(c).refType === "fixed" ? M(B) : M($, !1);
    });
  }
  Y(z);
  var T = F(z, 2), E = q(T);
  return Tt(
    ao(E, {
      placement: "bottom",
      floating: (C) => {
        var N = Y3(), I = q(N), L = F(q(I));
        {
          let U = /* @__PURE__ */ P(() => u(c).refType ? [u(c).refType] : []);
          Nt(L, {
            get items() {
              return px;
            },
            style: "width: 100%",
            defaultValue: ["ref"],
            get value() {
              return u(U);
            },
            onSelect: m
          });
        }
        Y(I);
        var Z = F(I, 2);
        {
          var X = (U) => {
            var ne = Z3(), H = F(q(ne));
            {
              let te = /* @__PURE__ */ P(() => u(c).contentType ? [u(c).contentType] : []);
              Nt(H, {
                get items() {
                  return xc;
                },
                style: "width: 100%",
                defaultValue: ["text"],
                get value() {
                  return u(te);
                },
                onSelect: y
              });
            }
            Y(ne), A(U, ne);
          };
          se(Z, (U) => {
            s() && U(X);
          });
        }
        var D = F(Z, 2), j = F(q(D));
        tt(j, {
          rows: 1,
          style: "width: 100%;",
          onchange: (U) => {
            h("defaultValue", U);
          },
          get value() {
            return u(c).defaultValue;
          },
          placeholder: "请输入参数默认值"
        }), Y(D);
        var G = F(D, 2), R = F(q(G));
        tt(R, {
          rows: 3,
          style: "width: 100%;",
          onchange: (U) => {
            h("description", U);
          },
          get value() {
            return u(c).description;
          },
          placeholder: "请输入参数描述"
        }), Y(G);
        var ee = F(G, 2), K = q(ee);
        qe(K, {
          variant: "destructive",
          onclick: b,
          children: (U, ne) => {
            Ee();
            var H = De("删除");
            A(U, H);
          },
          $$slots: { default: !0 }
        }), Y(ee), Y(N), A(C, N);
      },
      children: (C, N) => {
        Vi(C, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (C) => w = C,
    () => w
  ), Y(T), A(t, _), ce(S);
}
ie(
  mv,
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
var X3 = /* @__PURE__ */ re('<div class="input-header svelte-32f1pk">参数名称</div> <div class="input-header svelte-32f1pk">参数值</div> <div class="input-header svelte-32f1pk"></div>', 1), U3 = /* @__PURE__ */ re('<div class="none-params svelte-32f1pk"> </div>'), G3 = /* @__PURE__ */ re('<div class="input-container svelte-32f1pk"><!> <!></div>');
const J3 = {
  hash: "svelte-32f1pk",
  code: `.input-container.svelte-32f1pk {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-32f1pk .none-params:where(.svelte-32f1pk) {font-size:12px;background:var(--secondary);height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-32f1pk .input-header:where(.svelte-32f1pk) {font-size:12px;color:var(--muted-foreground);}`
};
function Bt(t, e) {
  le(e, !0), Qe(t, J3);
  const n = p(e, "noneParameterText", 7, "无输入参数"), r = p(e, "dataKeyName", 7, "parameters"), o = p(e, "useChildrenOnly", 7), i = p(e, "showContentType", 7, !1);
  let s = pt(), a = hr(s), l = /* @__PURE__ */ P(() => [...a?.current?.data?.[r()] || []]);
  var c = {
    get noneParameterText() {
      return n();
    },
    set noneParameterText(m = "无输入参数") {
      n(m), g();
    },
    get dataKeyName() {
      return r();
    },
    set dataKeyName(m = "parameters") {
      r(m), g();
    },
    get useChildrenOnly() {
      return o();
    },
    set useChildrenOnly(m) {
      o(m), g();
    },
    get showContentType() {
      return i();
    },
    set showContentType(m = !1) {
      i(m), g();
    }
  }, d = G3(), f = q(d);
  {
    var h = (m) => {
      var y = X3();
      Ee(4), A(m, y);
    };
    se(f, (m) => {
      u(l).length !== 0 && m(h);
    });
  }
  var v = F(f, 2);
  return Ct(
    v,
    19,
    () => u(l),
    (m) => m.id,
    (m, y, w) => {
      mv(m, {
        get parameter() {
          return u(y);
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
    (m) => {
      var y = U3(), w = q(y, !0);
      Y(y), Te(() => rt(w, n())), A(m, y);
    }
  ), Y(d), A(t, d), ce(c);
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
var Q3 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), e4 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), t4 = /* @__PURE__ */ re('<div class="heading svelte-1fiuxu3"><!> <!></div> <!>', 1);
const n4 = {
  hash: "svelte-1fiuxu3",
  code: ".heading.svelte-1fiuxu3 {display:flex;margin-bottom:10px;}"
};
function yv(t, e) {
  le(e, !0), Qe(t, n4);
  const n = p(e, "data", 7), r = /* @__PURE__ */ ze(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = pt(), { addParameter: i } = En();
  var s = {
    get data() {
      return n();
    },
    set data(a) {
      n(a), g();
    }
  };
  return dn(t, Fe(
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
        var c = Q3();
        A(l, c);
      },
      children: (l, c) => {
        var d = t4(), f = Q(d), h = q(f);
        je(h, {
          level: 3,
          children: (y, w) => {
            Ee();
            var b = De("输出参数");
            A(y, b);
          },
          $$slots: { default: !0 }
        });
        var v = F(h, 2);
        qe(v, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs", { name: "output" });
          },
          children: (y, w) => {
            var b = e4();
            A(y, b);
          },
          $$slots: { default: !0 }
        }), Y(f);
        var m = F(f, 2);
        Bt(m, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs",
          showContentType: !0
        }), A(l, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ce(s);
}
ie(yv, { data: {} }, [], [], !0);
const Fa = (t) => JSON.parse(JSON.stringify(t));
var r4 = /* @__PURE__ */ _e('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), o4 = /* @__PURE__ */ re('<div class="input-more-item svelte-hwmib9"><!></div>'), i4 = /* @__PURE__ */ re('<div class="input-more-setting svelte-hwmib9"><div class="input-more-item svelte-hwmib9">默认值： <!></div> <div class="input-more-item svelte-hwmib9">参数描述： <!></div> <!></div>'), s4 = /* @__PURE__ */ re('<div class="input-item svelte-hwmib9"><!> <!></div> <div class="input-item svelte-hwmib9"><!> <!></div> <div class="input-item svelte-hwmib9"><!></div>', 1);
const a4 = {
  hash: "svelte-hwmib9",
  code: ".input-item.svelte-hwmib9 {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-hwmib9 {display:flex;flex-direction:column;gap:10px;padding:10px;background:var(--background);border:1px solid var(--border);border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-hwmib9 .input-more-item:where(.svelte-hwmib9) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:var(--muted-foreground);}"
};
function wv(t, e) {
  le(e, !0), Qe(t, a4);
  const n = p(e, "parameter", 7), r = p(e, "position", 7), o = p(e, "dataKeyName", 7), i = p(e, "placeholder", 7, "请输入参数值");
  let s = pt(), a = hr(s), l = /* @__PURE__ */ P(() => {
    let E = a?.current?.data?.[o()], M;
    if (E && r().length > 0) {
      let C = E;
      for (let N = 0; N < r().length; N++) {
        const I = r()[N];
        N == r().length - 1 ? M = C[I] : C = C[I].children;
      }
    }
    return { ...n(), ...M };
  });
  const { updateNodeData: c } = kt(), d = (E, M) => {
    c(s, (C) => {
      const N = C.data?.[o()];
      if (N && r().length > 0) {
        let I = N;
        for (let L = 0; L < r().length; L++) {
          const Z = r()[L];
          L == r().length - 1 ? I[Z] = { ...I[Z], [E]: M } : I = I[Z].children;
        }
      }
      return { [o()]: [...Fa(N)] };
    });
  }, f = (E, M) => {
    const C = M.target.value;
    d(E, C);
  }, h = (E) => {
    const M = E.value;
    d("dataType", M);
  };
  let v;
  const m = () => {
    c(s, (E) => {
      let M = E.data?.[o()];
      if (M && r().length > 0) {
        let C = M;
        for (let N = 0; N < r().length; N++) {
          const I = r()[N];
          N == r().length - 1 ? C.splice(I, 1) : C = C[I].children;
        }
      }
      return { [o()]: [...Fa(M)] };
    }), v?.hide();
  }, y = () => {
    c(s, (E) => {
      let M = E.data?.[o()];
      if (M && r().length > 0) {
        let C = M;
        for (let N = 0; N < r().length; N++) {
          const I = r()[N];
          N == r().length - 1 ? C[I].children ? C[I].children.push({ id: Bn(), name: "newParam", dataType: "String" }) : C[I].children = [{ id: Bn(), name: "newParam", dataType: "String" }] : C = C[I].children;
        }
      }
      return { [o()]: [...Fa(M)] };
    });
  };
  var w = {
    get parameter() {
      return n();
    },
    set parameter(E) {
      n(E), g();
    },
    get position() {
      return r();
    },
    set position(E) {
      r(E), g();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(E) {
      o(E), g();
    },
    get placeholder() {
      return i();
    },
    set placeholder(E = "请输入参数值") {
      i(E), g();
    }
  }, b = s4(), k = Q(b), S = q(k);
  {
    var _ = (E) => {
      var M = de(), C = Q(M);
      Ct(C, 17, r, Xr, (N, I) => {
        Ee();
        var L = De(" ");
        A(N, L);
      }), A(E, M);
    };
    se(S, (E) => {
      r().length > 1 && E(_);
    });
  }
  var x = F(S, 2);
  {
    let E = /* @__PURE__ */ P(() => u(l).nameDisabled === !0);
    yt(x, {
      style: "width: 100%;",
      get value() {
        return u(l).name;
      },
      get placeholder() {
        return i();
      },
      oninput: (M) => {
        f("name", M);
      },
      get disabled() {
        return u(E);
      }
    });
  }
  Y(k);
  var O = F(k, 2), z = q(O);
  {
    let E = /* @__PURE__ */ P(() => u(l).dataTypeItems || gx), M = /* @__PURE__ */ P(() => u(l).dataType ? [u(l).dataType] : []), C = /* @__PURE__ */ P(() => u(l).dataTypeDisabled === !0);
    Nt(z, {
      get items() {
        return u(E);
      },
      style: "width: 100%",
      defaultValue: ["String"],
      get value() {
        return u(M);
      },
      get disabled() {
        return u(C);
      },
      onSelect: h
    });
  }
  var V = F(z, 2);
  {
    var B = (E) => {
      qe(E, {
        size: "icon-xs",
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: y,
        children: (M, C) => {
          var N = r4();
          A(M, N);
        },
        $$slots: { default: !0 }
      });
    };
    se(V, (E) => {
      (u(l).dataType === "Object" || u(l).dataType === "Array") && u(l).addChildDisabled !== !0 && E(B);
    });
  }
  Y(O);
  var $ = F(O, 2), T = q($);
  return Tt(
    ao(T, {
      placement: "bottom",
      floating: (M) => {
        var C = i4(), N = q(C), I = F(q(N));
        {
          let j = /* @__PURE__ */ P(() => u(l).defaultValue || "");
          tt(I, {
            rows: 1,
            style: "width: 100%;",
            get value() {
              return u(j);
            },
            onchange: (G) => {
              f("defaultValue", G);
            }
          });
        }
        Y(N);
        var L = F(N, 2), Z = F(q(L));
        {
          let j = /* @__PURE__ */ P(() => u(l).description || "");
          tt(Z, {
            rows: 3,
            style: "width: 100%;",
            get value() {
              return u(j);
            },
            onchange: (G) => {
              f("description", G);
            }
          });
        }
        Y(L);
        var X = F(L, 2);
        {
          var D = (j) => {
            var G = o4(), R = q(G);
            qe(R, {
              variant: "destructive",
              onclick: m,
              children: (ee, K) => {
                Ee();
                var U = De("删除");
                A(ee, U);
              },
              $$slots: { default: !0 }
            }), Y(G), A(j, G);
          };
          se(X, (j) => {
            u(l).deleteDisabled !== !0 && j(D);
          });
        }
        Y(C), A(M, C);
      },
      children: (M, C) => {
        Vi(M, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (M) => v = M,
    () => v
  ), Y($), A(t, b), ce(w);
}
ie(
  wv,
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
var l4 = /* @__PURE__ */ re("<!> <!>", 1), c4 = /* @__PURE__ */ re('<div class="none-params svelte-1oz5kx0"> </div>'), u4 = /* @__PURE__ */ re('<div class="input-header svelte-1oz5kx0">参数名称</div> <div class="input-header svelte-1oz5kx0">参数类型</div> <div class="input-header svelte-1oz5kx0"></div>', 1), d4 = /* @__PURE__ */ re('<div class="input-container svelte-1oz5kx0"><!> <!></div>');
const f4 = {
  hash: "svelte-1oz5kx0",
  code: `.input-container.svelte-1oz5kx0 {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1oz5kx0 .none-params:where(.svelte-1oz5kx0) {font-size:12px;background:var(--secondary);height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1oz5kx0 .input-header:where(.svelte-1oz5kx0) {font-size:12px;color:var(--muted-foreground);}`
};
function gr(t, e) {
  le(e, !0), Qe(t, f4);
  const n = (m, y = Be, w = Be) => {
    var b = de(), k = Q(b);
    Ct(
      k,
      19,
      y,
      (S) => `${S.id}_${S.children ? S.children.length : 0}`,
      (S, _, x) => {
        var O = l4(), z = Q(O);
        {
          let $ = /* @__PURE__ */ P(() => [...w(), u(x)]);
          wv(z, {
            get parameter() {
              return u(_);
            },
            get position() {
              return u($);
            },
            get dataKeyName() {
              return o();
            },
            get placeholder() {
              return i();
            }
          });
        }
        var V = F(z, 2);
        {
          var B = ($) => {
            {
              let T = /* @__PURE__ */ P(() => [...w(), u(x)]);
              n($, () => u(_).children, () => u(T));
            }
          };
          se(V, ($) => {
            u(_).children && $(B);
          });
        }
        A(S, O);
      },
      (S) => {
        var _ = de(), x = Q(_);
        {
          var O = (z) => {
            var V = c4(), B = q(V, !0);
            Y(V), Te(() => rt(B, r())), A(z, V);
          };
          se(x, (z) => {
            w().length === 0 && z(O);
          });
        }
        A(S, _);
      }
    ), A(m, b);
  }, r = p(e, "noneParameterText", 7, "无输出参数"), o = p(e, "dataKeyName", 7, "outputDefs"), i = p(e, "placeholder", 7, "请输入参数名称");
  let s = pt(), a = hr(s), l = /* @__PURE__ */ P(() => [...a?.current?.data?.[o()] || []]);
  var c = {
    get noneParameterText() {
      return r();
    },
    set noneParameterText(m = "无输出参数") {
      r(m), g();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(m = "outputDefs") {
      o(m), g();
    },
    get placeholder() {
      return i();
    },
    set placeholder(m = "请输入参数名称") {
      i(m), g();
    }
  }, d = d4(), f = q(d);
  {
    var h = (m) => {
      var y = u4();
      Ee(4), A(m, y);
    };
    se(f, (m) => {
      u(l).length !== 0 && m(h);
    });
  }
  var v = F(f, 2);
  return n(v, () => u(l) || [], () => []), Y(d), A(t, d), ce(c);
}
ie(gr, { noneParameterText: {}, dataKeyName: {}, placeholder: {} }, [], [], !0);
var h4 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), g4 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), p4 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), v4 = /* @__PURE__ */ re('<div class="llm-setting svelte-j81vcl"><div class="setting-title svelte-j81vcl">采样参数</div> <div class="setting-item svelte-j81vcl"><div class="slider-container svelte-j81vcl"><span class="svelte-j81vcl"> </span> <input class="nodrag svelte-j81vcl" type="range" min="0" max="1" step="0.1"/></div></div> <div class="setting-item svelte-j81vcl"><div class="slider-container svelte-j81vcl"><span class="svelte-j81vcl"> </span> <input class="nodrag svelte-j81vcl" type="range" min="0" max="1" step="0.1"/></div></div> <div class="setting-item svelte-j81vcl"><div class="slider-container svelte-j81vcl"><span class="svelte-j81vcl"> </span> <input class="nodrag svelte-j81vcl" type="range" min="0" max="100" step="1"/></div></div></div>'), m4 = /* @__PURE__ */ re('<div class="setting-title svelte-j81vcl">JSON Schema</div> <div class="setting-item svelte-j81vcl"><!></div>', 1), y4 = /* @__PURE__ */ re('<div class="heading svelte-j81vcl"><!> <!></div> <!> <div class="heading svelte-j81vcl" style="padding-top: 10px"><!> <!></div> <!> <!> <div class="setting-title svelte-j81vcl">模型</div> <div class="setting-item svelte-j81vcl"><!> <!></div> <div class="setting-title svelte-j81vcl">系统提示词</div> <div class="setting-item svelte-j81vcl"><!></div> <div class="setting-title svelte-j81vcl">用户提示词</div> <div class="setting-item svelte-j81vcl"><!></div> <!> <div class="heading svelte-j81vcl"><!> <!></div> <!>', 1);
const w4 = {
  hash: "svelte-j81vcl",
  code: `.heading.svelte-j81vcl {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-j81vcl {font-size:12px;color:var(--secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-j81vcl {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}\r
\r
    /* 新增样式 */.slider-container.svelte-j81vcl {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-j81vcl span:where(.svelte-j81vcl) {font-size:12px;color:var(--muted-foreground);display:flex;justify-content:space-between;align-items:center;}.llm-setting.svelte-j81vcl {width:200px;background:var(--background);padding:10px;border-radius:5px;box-shadow:0 0 10px rgba(0, 0, 0, 0.1);border:1px solid var(--border);}input[type='range'].svelte-j81vcl {width:100%;height:4px;background:var(--muted);border-radius:2px;outline:none;-webkit-appearance:none;}input[type='range'].svelte-j81vcl::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:var(--primary);border-radius:50%;cursor:pointer;}`
};
function bv(t, e) {
  le(e, !0), Qe(t, w4);
  const n = p(e, "data", 7), r = /* @__PURE__ */ ze(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = pt(), { addParameter: i } = En(), s = Pr();
  let a = /* @__PURE__ */ ve(ht([]));
  Cn(async () => {
    const f = await s.provider?.llm?.();
    u(a).push(...f || []);
  });
  const { updateNodeData: l } = kt(), c = (f) => {
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
  He(() => {
    n().outType || c("text");
  });
  var d = {
    get data() {
      return n();
    },
    set data(f) {
      n(f), g();
    }
  };
  return dn(t, Fe(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (h) => {
        var v = h4();
        A(h, v);
      },
      children: (h, v) => {
        var m = y4(), y = Q(m), w = q(y);
        je(w, {
          level: 3,
          children: (j, G) => {
            Ee();
            var R = De("输入参数");
            A(j, R);
          },
          $$slots: { default: !0 }
        });
        var b = F(w, 2);
        qe(b, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (j, G) => {
            var R = g4();
            A(j, R);
          },
          $$slots: { default: !0 }
        }), Y(y);
        var k = F(y, 2);
        Bt(k, {});
        var S = F(k, 2), _ = q(S);
        je(_, {
          level: 3,
          children: (j, G) => {
            Ee();
            var R = De("图片识别");
            A(j, R);
          },
          $$slots: { default: !0 }
        });
        var x = F(_, 2);
        qe(x, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "images");
          },
          children: (j, G) => {
            var R = p4();
            A(j, R);
          },
          $$slots: { default: !0 }
        }), Y(S);
        var O = F(S, 2);
        Bt(O, { dataKeyName: "images", noneParameterText: "无图片参数" });
        var z = F(O, 2);
        je(z, {
          level: 3,
          mt: "10px",
          children: (j, G) => {
            Ee();
            var R = De("模型设置");
            A(j, R);
          },
          $$slots: { default: !0 }
        });
        var V = F(z, 4), B = q(V);
        {
          let j = /* @__PURE__ */ P(() => n().llmId ? [n().llmId] : []);
          Nt(B, {
            get items() {
              return u(a);
            },
            style: "width: 100%",
            placeholder: "请选择模型",
            onSelect: (G) => {
              const R = G.value;
              l(o, () => ({ llmId: R }));
            },
            get value() {
              return u(j);
            }
          });
        }
        var $ = F(B, 2);
        ao($, {
          placement: "bottom",
          floating: (G) => {
            var R = v4(), ee = F(q(R), 2), K = q(ee), U = q(K), ne = q(U);
            Y(U);
            var H = F(U, 2);
            _r(H), H.__input = (Oe) => l(o, { temperature: parseFloat(Oe.target.value) }), Y(K), Y(ee);
            var te = F(ee, 2), xe = q(te), ue = q(xe), ae = q(ue);
            Y(ue);
            var oe = F(ue, 2);
            _r(oe), oe.__input = (Oe) => l(o, { topP: parseFloat(Oe.target.value) }), Y(xe), Y(te);
            var fe = F(te, 2), ye = q(fe), ke = q(ye), he = q(ke);
            Y(ke);
            var me = F(ke, 2);
            _r(me), me.__input = (Oe) => l(o, { topK: parseInt(Oe.target.value) }), Y(ye), Y(fe), Y(R), Te(() => {
              rt(ne, `Temperature: ${n().temperature ?? 0.5 ?? ""}`), es(H, n().temperature ?? 0.5), rt(ae, `Top P: ${n().topP ?? 0.9 ?? ""}`), es(oe, n().topP ?? 0.9), rt(he, `Top K: ${n().topK ?? 50 ?? ""}`), es(me, n().topK ?? 50);
            }), A(G, R);
          },
          children: (G, R) => {
            Vi(G, {});
          },
          $$slots: { floating: !0, default: !0 }
        }), Y(V);
        var T = F(V, 4), E = q(T);
        {
          let j = /* @__PURE__ */ P(() => n().systemPrompt || "");
          tt(E, {
            rows: 5,
            placeholder: "请输入系统提示词",
            style: "width: 100%",
            get value() {
              return u(j);
            },
            oninput: (G) => {
              l(o, { systemPrompt: G.target.value });
            }
          });
        }
        Y(T);
        var M = F(T, 4), C = q(M);
        {
          let j = /* @__PURE__ */ P(() => n().userPrompt || "");
          tt(C, {
            rows: 5,
            placeholder: "请输入用户提示词",
            style: "width: 100%",
            get value() {
              return u(j);
            },
            oninput: (G) => {
              l(o, { userPrompt: G.target.value });
            }
          });
        }
        Y(M);
        var N = F(M, 2);
        {
          var I = (j) => {
            var G = m4(), R = F(Q(G), 2), ee = q(R);
            {
              let K = /* @__PURE__ */ P(() => n().jsonSchema || "");
              tt(ee, {
                rows: 5,
                placeholder: "请输入 SON Schema",
                style: "width: 100%",
                get value() {
                  return u(K);
                },
                oninput: (U) => {
                  l(o, { jsonSchema: U.target.value });
                }
              });
            }
            Y(R), A(j, G);
          };
          se(N, (j) => {
            n().outType === "json" && j(I);
          });
        }
        var L = F(N, 2), Z = q(L);
        je(Z, {
          level: 3,
          children: (j, G) => {
            Ee();
            var R = De("输出参数");
            A(j, R);
          },
          $$slots: { default: !0 }
        });
        var X = F(Z, 2);
        {
          let j = /* @__PURE__ */ P(() => n().outType ? [n().outType] : []);
          Nt(X, {
            class: "w-25 ml-auto",
            items: [
              { label: "文本", value: "text" },
              { label: "JSON", value: "json" }
            ],
            onSelect: (G) => {
              c(G.value);
            },
            get value() {
              return u(j);
            }
          });
        }
        Y(L);
        var D = F(L, 2);
        gr(D, {}), A(h, m);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ce(d);
}
io(["input"]);
ie(bv, { data: {} }, [], [], !0);
var b4 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), x4 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), _4 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), C4 = /* @__PURE__ */ re('<div class="heading svelte-1wcsayx"><!> <!></div> <!> <!> <div class="setting-title svelte-1wcsayx">执行引擎</div> <div class="setting-item svelte-1wcsayx"><!></div> <div class="setting-title svelte-1wcsayx">执行代码</div> <div class="setting-item svelte-1wcsayx"><!></div> <div class="heading svelte-1wcsayx"><!> <!></div> <!>', 1);
const k4 = {
  hash: "svelte-1wcsayx",
  code: ".heading.svelte-1wcsayx {display:flex;margin-bottom:10px;}.setting-title.svelte-1wcsayx {font-size:12px;color:var(--secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-1wcsayx {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function xv(t, e) {
  le(e, !0), Qe(t, k4);
  const n = p(e, "data", 7), r = /* @__PURE__ */ ze(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]);
  Cn(() => {
    n().engine || s(o, () => ({ engine: "qlexpress" }));
  });
  const o = pt(), { addParameter: i } = En(), { updateNodeData: s } = kt(), a = [
    { label: "JavaScript", value: "js" },
    { label: "Groovy", value: "groovy" },
    { label: "QLExpress", value: "qlexpress" }
  ];
  var l = {
    get data() {
      return n();
    },
    set data(c) {
      n(c), g();
    }
  };
  return dn(t, Fe(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (d) => {
        var f = b4();
        A(d, f);
      },
      children: (d, f) => {
        var h = C4(), v = Q(h), m = q(v);
        je(m, {
          level: 3,
          children: ($, T) => {
            Ee();
            var E = De("输入参数");
            A($, E);
          },
          $$slots: { default: !0 }
        });
        var y = F(m, 2);
        qe(y, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: ($, T) => {
            var E = x4();
            A($, E);
          },
          $$slots: { default: !0 }
        }), Y(v);
        var w = F(v, 2);
        Bt(w, {});
        var b = F(w, 2);
        je(b, {
          level: 3,
          mt: "10px",
          children: ($, T) => {
            Ee();
            var E = De("代码");
            A($, E);
          },
          $$slots: { default: !0 }
        });
        var k = F(b, 4), S = q(k);
        {
          let $ = /* @__PURE__ */ P(() => n().engine ? [n().engine] : ["qlexpress"]);
          Nt(S, {
            get items() {
              return a;
            },
            style: "width: 100%",
            placeholder: "请选择执行引擎",
            onSelect: (T) => {
              const E = T.value;
              s(o, () => ({ engine: E }));
            },
            get value() {
              return u($);
            }
          });
        }
        Y(k);
        var _ = F(k, 4), x = q(_);
        {
          let $ = /* @__PURE__ */ P(() => n().code || "");
          tt(x, {
            rows: 10,
            placeholder: "请输入执行代码，注：输出内容需添加到_result中，如：_result['key'] = value 或者 _result.key = value",
            style: "width: 100%",
            onchange: (T) => {
              s(o, () => ({ code: T.target.value }));
            },
            get value() {
              return u($);
            }
          });
        }
        Y(_);
        var O = F(_, 2), z = q(O);
        je(z, {
          level: 3,
          mt: "10px",
          children: ($, T) => {
            Ee();
            var E = De("输出参数");
            A($, E);
          },
          $$slots: { default: !0 }
        });
        var V = F(z, 2);
        qe(V, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: ($, T) => {
            var E = _4();
            A($, E);
          },
          $$slots: { default: !0 }
        }), Y(O);
        var B = F(O, 2);
        gr(B, {}), A(d, h);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ce(l);
}
ie(xv, { data: {} }, [], [], !0);
var S4 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>'), E4 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), P4 = /* @__PURE__ */ re('<div class="heading svelte-1lcrzpc"><!> <!></div> <!> <!> <div class="setting-item svelte-1lcrzpc"><!></div> <div class="heading svelte-1lcrzpc"><!></div> <!>', 1);
const N4 = {
  hash: "svelte-1lcrzpc",
  code: ".heading.svelte-1lcrzpc {display:flex;margin-bottom:10px;}.setting-item.svelte-1lcrzpc {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function _v(t, e) {
  le(e, !0), Qe(t, N4);
  const n = p(e, "data", 7), r = /* @__PURE__ */ ze(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = pt(), { addParameter: i } = En(), { updateNodeData: s } = kt();
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
      n(l), g();
    }
  };
  return dn(t, Fe(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (c) => {
        var d = S4();
        A(c, d);
      },
      children: (c, d) => {
        var f = P4(), h = Q(f), v = q(h);
        je(v, {
          level: 3,
          children: (O, z) => {
            Ee();
            var V = De("输入参数");
            A(O, V);
          },
          $$slots: { default: !0 }
        });
        var m = F(v, 2);
        qe(m, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (O, z) => {
            var V = E4();
            A(O, V);
          },
          $$slots: { default: !0 }
        }), Y(h);
        var y = F(h, 2);
        Bt(y, {});
        var w = F(y, 2);
        je(w, {
          level: 3,
          mt: "10px",
          mb: "10px",
          children: (O, z) => {
            Ee();
            var V = De("模板内容");
            A(O, V);
          },
          $$slots: { default: !0 }
        });
        var b = F(w, 2), k = q(b);
        {
          let O = /* @__PURE__ */ P(() => n().template || "");
          tt(k, {
            rows: 10,
            placeholder: "请输入模板内容",
            style: "width: 100%",
            onchange: (z) => {
              s(o, () => ({ template: z.target.value }));
            },
            get value() {
              return u(O);
            }
          });
        }
        Y(b);
        var S = F(b, 2), _ = q(S);
        je(_, {
          level: 3,
          mt: "10px",
          children: (O, z) => {
            Ee();
            var V = De("输出参数");
            A(O, V);
          },
          $$slots: { default: !0 }
        }), Y(S);
        var x = F(S, 2);
        gr(x, {}), A(c, f);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ce(a);
}
ie(_v, { data: {} }, [], [], !0);
var O4 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), A4 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), T4 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), M4 = /* @__PURE__ */ re('<!> <div class="radio-group svelte-19uflw6"><label class="svelte-19uflw6"><!>none</label> <label class="svelte-19uflw6"><!>form-data</label> <label class="svelte-19uflw6"><!>x-www-form-urlencoded</label> <label class="svelte-19uflw6"><!>json</label> <label class="svelte-19uflw6"><!>raw</label></div>', 1), D4 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), I4 = /* @__PURE__ */ re('<div class="heading svelte-19uflw6" style="padding-top: 10px"><!> <!></div> <!>', 1), V4 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), z4 = /* @__PURE__ */ re('<div class="heading svelte-19uflw6" style="padding-top: 10px"><!> <!></div> <!>', 1), L4 = /* @__PURE__ */ re('<div style="width: 100%"><!></div>'), H4 = /* @__PURE__ */ re('<div style="width: 100%"><!></div>'), R4 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), F4 = /* @__PURE__ */ re('<div class="heading svelte-19uflw6"><!> <!></div> <!> <!> <div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-19uflw6"><!> <!></div> <!> <!> <!> <!> <!> <!> <div class="heading svelte-19uflw6"><!> <!></div> <!>', 1);
const B4 = {
  hash: "svelte-19uflw6",
  code: ".heading.svelte-19uflw6 {display:flex;margin-bottom:10px;}.radio-group.svelte-19uflw6 {display:flex;margin:10px 0;flex-wrap:wrap;}.radio-group.svelte-19uflw6 label:where(.svelte-19uflw6) {display:flex;font-size:14px;box-sizing:border-box;}"
};
function Cv(t, e) {
  le(e, !0), Qe(t, B4);
  const n = p(e, "data", 7), r = /* @__PURE__ */ ze(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]);
  Cn(() => {
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
  ], i = pt(), { addParameter: s } = En(), { updateNodeData: a } = kt();
  var l = {
    get data() {
      return n();
    },
    set data(c) {
      n(c), g();
    }
  };
  return dn(t, Fe(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (d) => {
        var f = O4();
        A(d, f);
      },
      children: (d, f) => {
        var h = F4(), v = Q(h), m = q(v);
        je(m, {
          level: 3,
          children: (K, U) => {
            Ee();
            var ne = De("输入参数");
            A(K, ne);
          },
          $$slots: { default: !0 }
        });
        var y = F(m, 2);
        qe(y, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i);
          },
          children: (K, U) => {
            var ne = A4();
            A(K, ne);
          },
          $$slots: { default: !0 }
        }), Y(v);
        var w = F(v, 2);
        Bt(w, {});
        var b = F(w, 2);
        je(b, {
          level: 3,
          mt: "10px",
          children: (K, U) => {
            Ee();
            var ne = De("URL 地址");
            A(K, ne);
          },
          $$slots: { default: !0 }
        });
        var k = F(b, 2), S = q(k), _ = q(S);
        {
          let K = /* @__PURE__ */ P(() => n().method ? [n().method] : ["get"]);
          Nt(_, {
            get items() {
              return o;
            },
            style: "width: 100%",
            placeholder: "请选择请求方式",
            onSelect: (U) => {
              const ne = U.value;
              a(i, () => ({ method: ne }));
            },
            get value() {
              return u(K);
            }
          });
        }
        Y(S);
        var x = F(S, 2), O = q(x);
        {
          let K = /* @__PURE__ */ P(() => n().url || "");
          yt(O, {
            placeholder: "请输入url",
            style: "width: 100%",
            onchange: (U) => {
              a(i, () => ({ url: U.target.value }));
            },
            get value() {
              return u(K);
            }
          });
        }
        Y(x), Y(k);
        var z = F(k, 2), V = q(z);
        je(V, {
          level: 3,
          children: (K, U) => {
            Ee();
            var ne = De("Http 头信息");
            A(K, ne);
          },
          $$slots: { default: !0 }
        });
        var B = F(V, 2);
        qe(B, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "headers");
          },
          children: (K, U) => {
            var ne = T4();
            A(K, ne);
          },
          $$slots: { default: !0 }
        }), Y(z);
        var $ = F(z, 2);
        Bt($, { dataKeyName: "headers" });
        var T = F($, 2);
        {
          var E = (K) => {
            var U = M4(), ne = Q(U);
            je(ne, {
              level: 3,
              mt: "10px",
              children: (Oe, J) => {
                Ee();
                var Re = De("Body");
                A(Oe, Re);
              },
              $$slots: { default: !0 }
            });
            var H = F(ne, 2), te = q(H), xe = q(te);
            {
              let Oe = /* @__PURE__ */ P(() => !n().bodyType || n().bodyType === "");
              yt(xe, {
                type: "radio",
                value: "",
                get checked() {
                  return u(Oe);
                },
                onchange: (J) => {
                  J.target?.checked && a(i, { bodyType: "" });
                }
              });
            }
            Ee(), Y(te);
            var ue = F(te, 2), ae = q(ue);
            {
              let Oe = /* @__PURE__ */ P(() => n().bodyType === "form-data");
              yt(ae, {
                type: "radio",
                value: "form-data",
                get checked() {
                  return u(Oe);
                },
                onchange: (J) => {
                  J.target?.checked && a(i, { bodyType: "form-data" });
                }
              });
            }
            Ee(), Y(ue);
            var oe = F(ue, 2), fe = q(oe);
            {
              let Oe = /* @__PURE__ */ P(() => n().bodyType === "x-www-form-urlencoded");
              yt(fe, {
                type: "radio",
                value: "x-www-form-urlencoded",
                get checked() {
                  return u(Oe);
                },
                onchange: (J) => {
                  J.target?.checked && a(i, { bodyType: "x-www-form-urlencoded" });
                }
              });
            }
            Ee(), Y(oe);
            var ye = F(oe, 2), ke = q(ye);
            {
              let Oe = /* @__PURE__ */ P(() => n().bodyType === "json");
              yt(ke, {
                type: "radio",
                value: "json",
                get checked() {
                  return u(Oe);
                },
                onchange: (J) => {
                  J.target?.checked && a(i, { bodyType: "json" });
                }
              });
            }
            Ee(), Y(ye);
            var he = F(ye, 2), me = q(he);
            {
              let Oe = /* @__PURE__ */ P(() => n().bodyType === "raw");
              yt(me, {
                type: "radio",
                value: "raw",
                get checked() {
                  return u(Oe);
                },
                onchange: (J) => {
                  J.target?.checked && a(i, { bodyType: "raw" });
                }
              });
            }
            Ee(), Y(he), Y(H), A(K, U);
          };
          se(T, (K) => {
            (n().method === "post" || n().method === "put" || n().method === "delete" || n().method === "patch") && K(E);
          });
        }
        var M = F(T, 2);
        {
          var C = (K) => {
            var U = I4(), ne = Q(U), H = q(ne);
            je(H, {
              level: 3,
              children: (ue, ae) => {
                Ee();
                var oe = De("参数");
                A(ue, oe);
              },
              $$slots: { default: !0 }
            });
            var te = F(H, 2);
            qe(te, {
              size: "icon-xs",
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formData");
              },
              children: (ue, ae) => {
                var oe = D4();
                A(ue, oe);
              },
              $$slots: { default: !0 }
            }), Y(ne);
            var xe = F(ne, 2);
            Bt(xe, { dataKeyName: "formData" }), A(K, U);
          };
          se(M, (K) => {
            n().bodyType === "form-data" && K(C);
          });
        }
        var N = F(M, 2);
        {
          var I = (K) => {
            var U = z4(), ne = Q(U), H = q(ne);
            je(H, {
              level: 3,
              children: (ue, ae) => {
                Ee();
                var oe = De("Body 参数");
                A(ue, oe);
              },
              $$slots: { default: !0 }
            });
            var te = F(H, 2);
            qe(te, {
              size: "icon-xs",
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formUrlencoded");
              },
              children: (ue, ae) => {
                var oe = V4();
                A(ue, oe);
              },
              $$slots: { default: !0 }
            }), Y(ne);
            var xe = F(ne, 2);
            Bt(xe, { dataKeyName: "formUrlencoded" }), A(K, U);
          };
          se(N, (K) => {
            n().bodyType === "x-www-form-urlencoded" && K(I);
          });
        }
        var L = F(N, 2);
        {
          var Z = (K) => {
            var U = L4(), ne = q(U);
            tt(ne, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入 json 信息",
              get value() {
                return n().bodyJson;
              },
              oninput: (H) => {
                a(i, { bodyJson: H.target.value });
              }
            }), Y(U), A(K, U);
          };
          se(L, (K) => {
            n().bodyType === "json" && K(Z);
          });
        }
        var X = F(L, 2);
        {
          var D = (K) => {
            var U = H4(), ne = q(U);
            tt(ne, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入请求信息",
              get value() {
                return n().bodyRaw;
              },
              oninput: (H) => {
                a(i, { bodyRaw: H.target.value });
              }
            }), Y(U), A(K, U);
          };
          se(X, (K) => {
            n().bodyType === "raw" && K(D);
          });
        }
        var j = F(X, 2), G = q(j);
        je(G, {
          level: 3,
          mt: "10px",
          children: (K, U) => {
            Ee();
            var ne = De("输出参数");
            A(K, ne);
          },
          $$slots: { default: !0 }
        });
        var R = F(G, 2);
        qe(R, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "outputDefs");
          },
          children: (K, U) => {
            var ne = R4();
            A(K, ne);
          },
          $$slots: { default: !0 }
        }), Y(j);
        var ee = F(j, 2);
        gr(ee, {}), A(d, h);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ce(l);
}
ie(Cv, { data: {} }, [], [], !0);
var $4 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>'), K4 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), W4 = /* @__PURE__ */ re('<div class="heading svelte-ddi5i"><!> <!></div> <!> <!> <div class="setting-title svelte-ddi5i">知识库</div> <div class="setting-item svelte-ddi5i"><!></div> <div class="setting-title svelte-ddi5i">关键字</div> <div class="setting-item svelte-ddi5i"><!></div> <div class="setting-title svelte-ddi5i">获取数据量</div> <div class="setting-item svelte-ddi5i"><!></div> <div class="heading svelte-ddi5i"><!></div> <!>', 1);
const Z4 = {
  hash: "svelte-ddi5i",
  code: ".heading.svelte-ddi5i {display:flex;margin-bottom:10px;}.setting-title.svelte-ddi5i {font-size:12px;color:var(--secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-ddi5i {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function kv(t, e) {
  le(e, !0), Qe(t, Z4);
  const n = p(e, "data", 7), r = /* @__PURE__ */ ze(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = pt(), { addParameter: i } = En(), s = Pr();
  let a = /* @__PURE__ */ ve(ht([]));
  Cn(async () => {
    const d = await s.provider?.knowledge?.();
    u(a).push(...d || []);
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
  var c = {
    get data() {
      return n();
    },
    set data(d) {
      n(d), g();
    }
  };
  return dn(t, Fe(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (f) => {
        var h = $4();
        A(f, h);
      },
      children: (f, h) => {
        var v = W4(), m = Q(v), y = q(m);
        je(y, {
          level: 3,
          children: (E, M) => {
            Ee();
            var C = De("输入参数");
            A(E, C);
          },
          $$slots: { default: !0 }
        });
        var w = F(y, 2);
        qe(w, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (E, M) => {
            var C = K4();
            A(E, C);
          },
          $$slots: { default: !0 }
        }), Y(m);
        var b = F(m, 2);
        Bt(b, {});
        var k = F(b, 2);
        je(k, {
          level: 3,
          mt: "10px",
          children: (E, M) => {
            Ee();
            var C = De("知识库设置");
            A(E, C);
          },
          $$slots: { default: !0 }
        });
        var S = F(k, 4), _ = q(S);
        {
          let E = /* @__PURE__ */ P(() => n().knowledgeId ? [n().knowledgeId] : []);
          Nt(_, {
            get items() {
              return u(a);
            },
            style: "width: 100%",
            placeholder: "请选择知识库",
            onSelect: (M) => {
              const C = M.value;
              l(o, () => ({ knowledgeId: C }));
            },
            get value() {
              return u(E);
            }
          });
        }
        Y(S);
        var x = F(S, 4), O = q(x);
        yt(O, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (E) => {
            const M = E.target.value;
            l(o, () => ({ keyword: M }));
          }
        }), Y(x);
        var z = F(x, 4), V = q(z);
        {
          let E = /* @__PURE__ */ P(() => n().limit || "");
          yt(V, {
            placeholder: "搜索的数据条数",
            style: "width: 100%",
            onchange: (M) => {
              const C = M.target.value;
              l(o, () => ({ limit: C }));
            },
            get value() {
              return u(E);
            }
          });
        }
        Y(z);
        var B = F(z, 2), $ = q(B);
        je($, {
          level: 3,
          mt: "10px",
          children: (E, M) => {
            Ee();
            var C = De("输出参数");
            A(E, C);
          },
          $$slots: { default: !0 }
        }), Y(B);
        var T = F(B, 2);
        gr(T, {}), A(f, v);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ce(c);
}
ie(kv, { data: {} }, [], [], !0);
var Y4 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>'), q4 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), j4 = /* @__PURE__ */ re('<div class="heading svelte-1qblm04"><!> <!></div> <!> <!> <div class="setting-title svelte-1qblm04">搜索引擎</div> <div class="setting-item svelte-1qblm04"><!></div> <div class="setting-title svelte-1qblm04">关键字</div> <div class="setting-item svelte-1qblm04"><!></div> <div class="setting-title svelte-1qblm04">搜索数据量</div> <div class="setting-item svelte-1qblm04"><!></div> <div class="heading svelte-1qblm04"><!></div> <!>', 1);
const X4 = {
  hash: "svelte-1qblm04",
  code: ".heading.svelte-1qblm04 {display:flex;margin-bottom:10px;}.setting-title.svelte-1qblm04 {font-size:12px;color:var(--secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-1qblm04 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Sv(t, e) {
  le(e, !0), Qe(t, X4);
  const n = p(e, "data", 7), r = /* @__PURE__ */ ze(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = pt(), { addParameter: i } = En(), s = Pr();
  let a = /* @__PURE__ */ ve(ht([]));
  Cn(async () => {
    const d = await s.provider?.searchEngine?.();
    u(a).push(...d || []);
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
  var c = {
    get data() {
      return n();
    },
    set data(d) {
      n(d), g();
    }
  };
  return dn(t, Fe(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (f) => {
        var h = Y4();
        A(f, h);
      },
      children: (f, h) => {
        var v = j4(), m = Q(v), y = q(m);
        je(y, {
          level: 3,
          children: (E, M) => {
            Ee();
            var C = De("输入参数");
            A(E, C);
          },
          $$slots: { default: !0 }
        });
        var w = F(y, 2);
        qe(w, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (E, M) => {
            var C = q4();
            A(E, C);
          },
          $$slots: { default: !0 }
        }), Y(m);
        var b = F(m, 2);
        Bt(b, {});
        var k = F(b, 2);
        je(k, {
          level: 3,
          mt: "10px",
          children: (E, M) => {
            Ee();
            var C = De("搜索引擎设置");
            A(E, C);
          },
          $$slots: { default: !0 }
        });
        var S = F(k, 4), _ = q(S);
        {
          let E = /* @__PURE__ */ P(() => n().engine ? [n().engine] : []);
          Nt(_, {
            get items() {
              return u(a);
            },
            style: "width: 100%",
            placeholder: "请选择搜索引擎",
            onSelect: (M) => {
              const C = M.value;
              l(o, () => ({ engine: C }));
            },
            get value() {
              return u(E);
            }
          });
        }
        Y(S);
        var x = F(S, 4), O = q(x);
        yt(O, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (E) => {
            const M = E.target.value;
            l(o, () => ({ keyword: M }));
          }
        }), Y(x);
        var z = F(x, 4), V = q(z);
        yt(V, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          get value() {
            return n().limit;
          },
          onchange: (E) => {
            const M = E.target.value;
            l(o, () => ({ limit: M }));
          }
        }), Y(z);
        var B = F(z, 2), $ = q(B);
        je($, {
          level: 3,
          mt: "10px",
          children: (E, M) => {
            Ee();
            var C = De("输出参数");
            A(E, C);
          },
          $$slots: { default: !0 }
        }), Y(B);
        var T = F(B, 2);
        gr(T, {}), A(f, v);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ce(c);
}
ie(Sv, { data: {} }, [], [], !0);
var U4 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>'), G4 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), J4 = /* @__PURE__ */ re('<div class="heading svelte-1o34e8c"><!></div> <!> <div class="heading svelte-1o34e8c"><!> <!></div> <!>', 1);
const Q4 = {
  hash: "svelte-1o34e8c",
  code: ".heading.svelte-1o34e8c {display:flex;margin:10px 0;align-items:center;}.loop_handle_wrapper::after {content:'循环体';width:100px;height:20px;background:var(--primary);color:var(--primary-foreground);display:flex;justify-content:center;align-items:center;}"
};
function Ev(t, e) {
  le(e, !0), Qe(t, Q4);
  const n = p(e, "data", 7), r = /* @__PURE__ */ ze(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = pt(), { addParameter: i } = En();
  He(() => {
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
  return dn(t, Fe(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (c) => {
        var d = U4();
        A(c, d);
      },
      handle: (c) => {
        kr(c, {
          type: "source",
          get position() {
            return Pe.Bottom;
          },
          id: "loop_handle",
          style: "bottom: -12px;width: 100px",
          class: "loop_handle_wrapper"
        });
      },
      children: (c, d) => {
        var f = J4(), h = Q(f), v = q(h);
        je(v, {
          level: 3,
          children: (S, _) => {
            Ee();
            var x = De("循环变量");
            A(S, x);
          },
          $$slots: { default: !0 }
        }), Y(h);
        var m = F(h, 2);
        Bt(m, { dataKeyName: "loopVars" });
        var y = F(m, 2), w = q(y);
        je(w, {
          level: 3,
          children: (S, _) => {
            Ee();
            var x = De("输出参数");
            A(S, x);
          },
          $$slots: { default: !0 }
        });
        var b = F(w, 2);
        qe(b, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (S, _) => {
            var x = G4();
            A(S, x);
          },
          $$slots: { default: !0 }
        }), Y(y);
        var k = F(y, 2);
        Bt(k, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs",
          useChildrenOnly: !0
        }), A(c, f);
      },
      $$slots: { icon: !0, handle: !0, default: !0 }
    }
  )), ce(s);
}
ie(Ev, { data: {} }, [], [], !0);
var ek = /* @__PURE__ */ re('<div class="input-more-setting svelte-5x0hls"><div class="input-more-item svelte-5x0hls">数据内容： <!></div> <div class="input-more-item svelte-5x0hls">确认方式： <!></div> <div class="input-more-item svelte-5x0hls">数据标题： <!></div> <div class="input-more-item svelte-5x0hls">数据描述： <!></div>   <div class="input-more-item svelte-5x0hls"><!></div></div>'), tk = /* @__PURE__ */ re('<div class="input-item svelte-5x0hls"><!></div> <div class="input-item svelte-5x0hls"><!></div> <div class="input-item svelte-5x0hls"><!></div>', 1);
const nk = {
  hash: "svelte-5x0hls",
  code: ".input-item.svelte-5x0hls {display:flex;align-items:center;}.input-more-setting.svelte-5x0hls {display:flex;flex-direction:column;gap:10px;padding:10px;background:var(--background);border:1px solid var(--border);border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-5x0hls .input-more-item:where(.svelte-5x0hls) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:var(--muted-foreground);}"
};
function Pv(t, e) {
  le(e, !0), Qe(t, nk);
  const n = p(e, "parameter", 7), r = p(e, "index", 7), o = p(e, "dataKeyName", 7), i = p(e, "useChildrenOnly", 7);
  let s = pt(), a = hr(s), l = /* @__PURE__ */ P(() => ({
    ...n(),
    ...a?.current?.data?.[o()][r()]
  }));
  const { updateNodeData: c } = kt(), d = (E, M) => {
    c(s, (C) => {
      let N = C.data?.[o()];
      return N[r()] = { ...N[r()], [E]: M }, { [o()]: N };
    });
  }, f = (E, M) => {
    const C = M.target.value;
    d(E, C);
  }, h = (E) => {
    const M = E.value;
    d("ref", M);
  }, v = (E) => {
    const M = E.value;
    d("formType", M);
  }, m = (E) => {
    const M = E.value;
    d("contentType", M);
  };
  let y;
  const w = () => {
    c(s, (E) => {
      let M = E.data?.[o()];
      return M.splice(r(), 1), { [o()]: [...M] };
    }), y?.hide();
  };
  let b = vv(i());
  var k = {
    get parameter() {
      return n();
    },
    set parameter(E) {
      n(E), g();
    },
    get index() {
      return r();
    },
    set index(E) {
      r(E), g();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(E) {
      o(E), g();
    },
    get useChildrenOnly() {
      return i();
    },
    set useChildrenOnly(E) {
      i(E), g();
    }
  }, S = tk(), _ = Q(S), x = q(_);
  {
    let E = /* @__PURE__ */ P(() => u(l).nameDisabled === !0);
    yt(x, {
      style: "width: 100%;",
      get value() {
        return u(l).name;
      },
      placeholder: "请输入参数名称",
      get disabled() {
        return u(E);
      },
      oninput: (M) => f("name", M)
    });
  }
  Y(_);
  var O = F(_, 2), z = q(O);
  {
    var V = (E) => {
      yt(E, {
        get value() {
          return u(l).value;
        },
        placeholder: "请输入参数值",
        oninput: (M) => f("value", M)
      });
    }, B = (E) => {
      var M = de(), C = Q(M);
      {
        var N = (I) => {
          {
            let L = /* @__PURE__ */ P(() => [u(l).ref]);
            Nt(I, {
              get items() {
                return b.current;
              },
              style: "width: 100%",
              defaultValue: ["ref"],
              get value() {
                return u(L);
              },
              expandAll: !0,
              onSelect: h
            });
          }
        };
        se(
          C,
          (I) => {
            u(l).refType !== "input" && I(N);
          },
          !0
        );
      }
      A(E, M);
    };
    se(z, (E) => {
      u(l).refType === "fixed" ? E(V) : E(B, !1);
    });
  }
  Y(O);
  var $ = F(O, 2), T = q($);
  return Tt(
    ao(T, {
      placement: "bottom",
      floating: (M) => {
        var C = ek(), N = q(C), I = F(q(N));
        {
          let K = /* @__PURE__ */ P(() => u(l).contentType ? [u(l).contentType] : []);
          Nt(I, {
            get items() {
              return xc;
            },
            style: "width: 100%",
            defaultValue: ["text"],
            get value() {
              return u(K);
            },
            onSelect: m
          });
        }
        Y(N);
        var L = F(N, 2), Z = F(q(L));
        {
          let K = /* @__PURE__ */ P(() => u(l).formType ? [u(l).formType] : []);
          Nt(Z, {
            get items() {
              return mx;
            },
            style: "width: 100%",
            defaultValue: ["single"],
            get value() {
              return u(K);
            },
            onSelect: v
          });
        }
        Y(L);
        var X = F(L, 2), D = F(q(X));
        tt(D, {
          rows: 1,
          style: "width: 100%;",
          onchange: (K) => {
            f("formLabel", K);
          },
          get value() {
            return u(l).formLabel;
          }
        }), Y(X);
        var j = F(X, 2), G = F(q(j));
        tt(G, {
          rows: 2,
          style: "width: 100%;",
          onchange: (K) => {
            f("formDescription", K);
          },
          get value() {
            return u(l).formDescription;
          }
        }), Y(j);
        var R = F(j, 2), ee = q(R);
        qe(ee, {
          variant: "destructive",
          onclick: w,
          children: (K, U) => {
            Ee();
            var ne = De("删除");
            A(K, ne);
          },
          $$slots: { default: !0 }
        }), Y(R), Y(C), A(M, C);
      },
      children: (M, C) => {
        Vi(M, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (M) => y = M,
    () => y
  ), Y($), A(t, S), ce(k);
}
ie(
  Pv,
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
var rk = /* @__PURE__ */ re('<div class="input-header svelte-1fllp9b">参数名称</div> <div class="input-header svelte-1fllp9b">参数值</div> <div class="input-header svelte-1fllp9b"></div>', 1), ok = /* @__PURE__ */ re('<div class="none-params svelte-1fllp9b"> </div>'), ik = /* @__PURE__ */ re('<div class="input-container svelte-1fllp9b"><!> <!></div>');
const sk = {
  hash: "svelte-1fllp9b",
  code: `.input-container.svelte-1fllp9b {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1fllp9b .none-params:where(.svelte-1fllp9b) {font-size:12px;background:var(--secondary);height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1fllp9b .input-header:where(.svelte-1fllp9b) {font-size:12px;color:var(--muted-foreground);}`
};
function Nv(t, e) {
  le(e, !0), Qe(t, sk);
  const n = p(e, "noneParameterText", 7, "无确认数据"), r = p(e, "dataKeyName", 7, "parameters"), o = p(e, "useChildrenOnly", 7);
  let i = pt(), s = hr(i), a = /* @__PURE__ */ P(() => [...s?.current?.data?.[r()] || []]);
  var l = {
    get noneParameterText() {
      return n();
    },
    set noneParameterText(v = "无确认数据") {
      n(v), g();
    },
    get dataKeyName() {
      return r();
    },
    set dataKeyName(v = "parameters") {
      r(v), g();
    },
    get useChildrenOnly() {
      return o();
    },
    set useChildrenOnly(v) {
      o(v), g();
    }
  }, c = ik(), d = q(c);
  {
    var f = (v) => {
      var m = rk();
      Ee(4), A(v, m);
    };
    se(d, (v) => {
      u(a).length !== 0 && v(f);
    });
  }
  var h = F(d, 2);
  return Ct(
    h,
    19,
    () => u(a),
    (v) => v.id,
    (v, m, y) => {
      Pv(v, {
        get parameter() {
          return u(m);
        },
        get index() {
          return u(y);
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
      var m = ok(), y = q(m, !0);
      Y(m), Te(() => rt(y, n())), A(v, m);
    }
  ), Y(c), A(t, c), ce(l);
}
ie(Nv, { noneParameterText: {}, dataKeyName: {}, useChildrenOnly: {} }, [], [], !0);
const Tl = (t, e) => {
  if (t === e) return !0;
  if (typeof t != "object" || t === null || typeof e != "object" || e === null)
    return !1;
  const n = Array.isArray(t), r = Array.isArray(e);
  if (n !== r) return !1;
  if (n && r) {
    if (t.length !== e.length) return !1;
    for (let o = 0; o < t.length; o++)
      if (!Tl(t[o], e[o])) return !1;
    return !0;
  } else {
    const o = Object.keys(t), i = Object.keys(e);
    if (o.length !== i.length) return !1;
    for (const s of o)
      if (!(s in e) || !Tl(t[s], e[s])) return !1;
    return !0;
  }
};
var ak = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), lk = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), ck = /* @__PURE__ */ re('<div class="heading svelte-8iukvu"><!> <!></div> <!> <!> <div class="setting-title svelte-8iukvu">消息内容</div> <div class="setting-item svelte-8iukvu"><!></div> <div class="heading svelte-8iukvu"><!></div> <!>', 1);
const uk = {
  hash: "svelte-8iukvu",
  code: ".heading.svelte-8iukvu {display:flex;margin-bottom:10px;}.setting-title.svelte-8iukvu {font-size:12px;color:var(--secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-8iukvu {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Ov(t, e) {
  le(e, !0), Qe(t, uk);
  const n = p(e, "data", 7), r = /* @__PURE__ */ ze(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = pt(), { addParameter: i } = En(), { updateNodeData: s } = kt();
  He(() => {
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
      Tl(l, n().outputDefs) || s(o, () => ({ outputDefs: l }));
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
  return dn(t, Fe(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (c) => {
        var d = ak();
        A(c, d);
      },
      children: (c, d) => {
        var f = ck(), h = Q(f), v = q(h);
        je(v, {
          level: 3,
          children: (O, z) => {
            Ee();
            var V = De("确认数据");
            A(O, V);
          },
          $$slots: { default: !0 }
        });
        var m = F(v, 2);
        qe(m, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "confirms");
          },
          children: (O, z) => {
            var V = lk();
            A(O, V);
          },
          $$slots: { default: !0 }
        }), Y(h);
        var y = F(h, 2);
        Nv(y, { dataKeyName: "confirms", noneParameterText: "无确认数据" });
        var w = F(y, 2);
        je(w, {
          level: 3,
          mt: "10px",
          children: (O, z) => {
            Ee();
            var V = De("确认消息");
            A(O, V);
          },
          $$slots: { default: !0 }
        });
        var b = F(w, 4), k = q(b);
        {
          let O = /* @__PURE__ */ P(() => n().message || "");
          tt(k, {
            rows: 5,
            placeholder: "请输入用户需要确认的消息内容",
            style: "width: 100%",
            onchange: (z) => {
              s(o, () => ({ message: z.target.value }));
            },
            get value() {
              return u(O);
            }
          });
        }
        Y(b);
        var S = F(b, 2), _ = q(S);
        je(_, {
          level: 3,
          mt: "10px",
          children: (O, z) => {
            Ee();
            var V = De("输出参数");
            A(O, V);
          },
          $$slots: { default: !0 }
        }), Y(S);
        var x = F(S, 2);
        gr(x, { placeholder: "" }), A(c, f);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ce(a);
}
ie(Ov, { data: {} }, [], [], !0);
const dk = {
  startNode: hv,
  codeNode: xv,
  confirmNode: Ov,
  llmNode: bv,
  templateNode: _v,
  httpNode: Cv,
  knowledgeNode: kv,
  searchEngineNode: Sv,
  loopNode: Ev,
  endNode: yv
};
var fk = /* @__PURE__ */ re("<!> ", 1);
function Ml(t, e) {
  le(e, !0);
  const n = p(e, "icon", 7), r = p(e, "title", 7), o = p(e, "type", 7), i = p(e, "description", 7), s = p(e, "extra", 7), a = kt(), l = (f) => {
    if (!f.dataTransfer)
      return null;
    const h = {
      type: o(),
      data: { title: r(), description: i(), ...s() }
    };
    f.dataTransfer.setData("application/tinyflow", JSON.stringify(h)), f.dataTransfer.effectAllowed = "move";
  }, c = () => {
    const f = window.innerWidth, h = window.innerHeight, v = a.screenToFlowPosition({ x: f / 2, y: h / 2 }), m = {
      id: `node_${Bn()}`,
      type: o(),
      position: v,
      data: { title: r(), description: i(), ...s() }
    };
    Ye.addNode(m), Ye.selectNodeOnly(m.id);
  };
  var d = {
    get icon() {
      return n();
    },
    set icon(f) {
      n(f), g();
    },
    get title() {
      return r();
    },
    set title(f) {
      r(f), g();
    },
    get type() {
      return o();
    },
    set type(f) {
      o(f), g();
    },
    get description() {
      return i();
    },
    set description(f) {
      i(f), g();
    },
    get extra() {
      return s();
    },
    set extra(f) {
      s(f), g();
    }
  };
  return qe(t, {
    draggable: !0,
    ondragstart: l,
    onclick: c,
    get "data-node-type"() {
      return o();
    },
    children: (f, h) => {
      var v = fk(), m = Q(v);
      ia(m, n);
      var y = F(m);
      Te(() => rt(y, ` ${r() ?? ""}`)), A(f, v);
    },
    $$slots: { default: !0 }
  }), ce(d);
}
ie(Ml, { icon: {}, title: {}, type: {}, description: {}, extra: {} }, [], [], !0);
var hk = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), gk = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), pk = /* @__PURE__ */ re('<div><div class="tf-toolbar-container"><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"></div></div></div> <!></div>');
function Av(t, e) {
  le(e, !0);
  let n = /* @__PURE__ */ ve("base"), r = /* @__PURE__ */ ve("show");
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
  ], s = [], a = Pr(), l = a.customNodes;
  if (l) {
    const b = Object.keys(l).sort((k, S) => (l[k].sortNo || 0) - (l[S].sortNo || 0));
    for (let k of b)
      l[k].group === "base" ? o.push({ type: k, ...l[k] }) : s.push({
        icon: l[k].icon,
        title: l[k].title,
        type: k
      });
    o.sort((k, S) => (k.sortNo || 0) - (S.sortNo || 0));
  }
  if (a.hiddenNodes) {
    const b = typeof a.hiddenNodes == "function" ? a.hiddenNodes() : a.hiddenNodes;
    if (Array.isArray(b)) {
      for (let k of b)
        for (let S = 0; S < o.length; S++)
          if (o[S].type === k) {
            o.splice(S, 1);
            break;
          }
    }
  }
  var c = pk(), d = q(c), f = q(d), h = q(f);
  cv(h, {
    style: "width: 100%",
    get items() {
      return i;
    },
    onChange: (b) => {
      W(n, b.value.toString(), !0);
    }
  }), Y(f);
  var v = F(f, 2), m = q(v);
  Ct(m, 21, () => o, Xr, (b, k) => {
    Ml(b, Fe(() => u(k)));
  }), Y(m);
  var y = F(m, 2);
  Ct(y, 21, () => s, Xr, (b, k) => {
    Ml(b, Fe(() => u(k)));
  }), Y(y), Y(v), Y(d);
  var w = F(d, 2);
  qe(w, {
    size: "icon",
    variant: "outline",
    onclick: () => {
      W(r, u(r) ? "" : "show", !0);
    },
    children: (b, k) => {
      var S = de(), _ = Q(S);
      {
        var x = (z) => {
          var V = hk();
          A(z, V);
        }, O = (z) => {
          var V = gk();
          A(z, V);
        };
        se(_, (z) => {
          u(r) === "show" ? z(x) : z(O, !1);
        });
      }
      A(b, S);
    },
    $$slots: { default: !0 }
  }), Y(c), Te(() => {
    Gt(c, 1, `tf-toolbar ${u(r) ?? ""}`), At(m, `display: ${u(n) === "base" ? "flex" : "none"}`), At(y, `display: ${u(n) !== "base" ? "flex" : "none"}`);
  }), A(t, c), ce();
}
ie(Av, {}, [], [], !0);
const vk = () => ({ getNode: (e) => Ye.getNode(e) }), mk = () => ({ ensureParentInNodesBefore: (e, n) => {
  Ye.updateNodes((r) => {
    let o = -1;
    for (let a = 0; a < r.length; a++)
      if (r[a].id === e) {
        o = a;
        break;
      }
    if (o <= 0)
      return r;
    let i = -1;
    for (let a = 0; a < o; a++)
      if (r[a].parentId === e || r[a].id === n) {
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
} }), yk = () => ({ getEdgesByTarget: (e) => Ye.getEdges().filter((r) => r.target === e) });
var wk = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), bk = /* @__PURE__ */ re('<div class="heading svelte-qt4m0r"><!> <!></div> <!>', 1), xk = /* @__PURE__ */ re('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), _k = /* @__PURE__ */ re('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), Ck = /* @__PURE__ */ re('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><div class="slider-container svelte-qt4m0r"><span class="svelte-qt4m0r"> </span> <input/></div></div>', 1), kk = /* @__PURE__ */ re('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), Sk = /* @__PURE__ */ re('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), Ek = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Pk = /* @__PURE__ */ re('<div class="heading svelte-qt4m0r"><!> <!></div> <!>', 1), Nk = /* @__PURE__ */ re("<!> <!> <div></div> <!>", 1);
const Ok = {
  hash: "svelte-qt4m0r",
  code: `.heading.svelte-qt4m0r {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-qt4m0r {font-size:12px;color:var(--secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-qt4m0r {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}\r
\r
    /* 新增样式 */.slider-container.svelte-qt4m0r {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-qt4m0r span:where(.svelte-qt4m0r) {font-size:12px;color:var(--muted-foreground);display:flex;justify-content:space-between;align-items:center;}input[type='range'].svelte-qt4m0r {width:100%;height:4px;background:var(--muted);border-radius:2px;outline:none;-webkit-appearance:none;}input[type='range'].svelte-qt4m0r::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:var(--primary);border-radius:50%;cursor:pointer;}`
};
function Tv(t, e) {
  le(e, !0), Qe(t, Ok);
  const n = p(e, "data", 7), r = /* @__PURE__ */ ze(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = pt(), { addParameter: i } = En(), s = kt(), { updateNodeData: a } = s, l = (b) => {
    a(o, b);
  }, c = (b, k) => {
    l({ [b]: k.target?.value });
  }, d = { ...r, id: o, data: n() }, f = document.createElement("div"), v = Pr().customNodes[e.type];
  v.render?.(f, d, s);
  const m = v.forms;
  let y;
  He(() => {
    n().expand && y && y.append(f);
  }), He(() => {
    n() && v.onUpdate?.(f, { ...d, data: n() });
  }), He(() => {
    !n().parameters && v.parameters && l({
      parameters: gi(JSON.parse(JSON.stringify(v.parameters)))
    });
  }), He(() => {
    !n().outputDefs && v.outputDefs && l({
      outputDefs: gi(JSON.parse(JSON.stringify(v.outputDefs)))
    });
  });
  var w = {
    get data() {
      return n();
    },
    set data(b) {
      n(b), g();
    }
  };
  {
    const b = (S) => {
      var _ = de(), x = Q(_);
      ia(x, () => v.icon), A(S, _);
    };
    let k = /* @__PURE__ */ P(() => ({ ...n(), description: v.description }));
    dn(t, Fe(
      {
        get data() {
          return u(k);
        }
      },
      () => r,
      {
        icon: b,
        children: (S, _) => {
          var x = Nk(), O = Q(x);
          {
            var z = (M) => {
              var C = bk(), N = Q(C), I = q(N);
              je(I, {
                level: 3,
                children: (D, j) => {
                  Ee();
                  var G = De("输入参数");
                  A(D, G);
                },
                $$slots: { default: !0 }
              });
              var L = F(I, 2);
              {
                var Z = (D) => {
                  qe(D, {
                    size: "icon-xs",
                    class: "input-btn-more",
                    style: "margin-left: auto",
                    onclick: () => {
                      i(o);
                    },
                    children: (j, G) => {
                      var R = wk();
                      A(j, R);
                    },
                    $$slots: { default: !0 }
                  });
                };
                se(L, (D) => {
                  v.parametersAddEnable !== !1 && D(Z);
                });
              }
              Y(N);
              var X = F(N, 2);
              Bt(X, {}), A(M, C);
            };
            se(O, (M) => {
              v.parametersEnable !== !1 && M(z);
            });
          }
          var V = F(O, 2);
          {
            var B = (M) => {
              var C = de(), N = Q(C);
              Ct(N, 17, () => m, Xr, (I, L) => {
                var Z = de(), X = Q(Z);
                {
                  var D = (G) => {
                    var R = xk(), ee = Q(R), K = q(ee, !0);
                    Y(ee);
                    var U = F(ee, 2), ne = q(U);
                    {
                      let H = /* @__PURE__ */ P(() => n()[u(L).name] || u(L).defaultValue);
                      yt(ne, Fe(
                        {
                          get placeholder() {
                            return u(L).placeholder;
                          },
                          style: "width: 100%",
                          get value() {
                            return u(H);
                          }
                        },
                        () => u(L).attrs,
                        {
                          onchange: (te) => {
                            c(u(L).name, te);
                          }
                        }
                      ));
                    }
                    Y(U), Te(() => rt(K, u(L).label)), A(G, R);
                  }, j = (G) => {
                    var R = de(), ee = Q(R);
                    {
                      var K = (ne) => {
                        var H = _k(), te = Q(H), xe = q(te, !0);
                        Y(te);
                        var ue = F(te, 2), ae = q(ue);
                        {
                          let oe = /* @__PURE__ */ P(() => n()[u(L).name] || u(L).defaultValue);
                          tt(ae, Fe(
                            {
                              rows: 3,
                              get placeholder() {
                                return u(L).placeholder;
                              },
                              style: "width: 100%",
                              get value() {
                                return u(oe);
                              }
                            },
                            () => u(L).attrs,
                            {
                              onchange: (fe) => {
                                c(u(L).name, fe);
                              }
                            }
                          ));
                        }
                        Y(ue), Te(() => rt(xe, u(L).label)), A(ne, H);
                      }, U = (ne) => {
                        var H = de(), te = Q(H);
                        {
                          var xe = (ae) => {
                            var oe = Ck(), fe = Q(oe), ye = q(fe, !0);
                            Y(fe);
                            var ke = F(fe, 2), he = q(ke), me = q(he), Oe = q(me);
                            Y(me);
                            var J = F(me, 2), Re = (Se) => l({ [u(L).name]: parseFloat(Se.target.value) });
                            Je(
                              J,
                              () => ({
                                class: "nodrag",
                                type: "range",
                                ...u(L).attrs,
                                value: n()[u(L).name] ?? u(L).defaultValue,
                                oninput: Re
                              }),
                              void 0,
                              void 0,
                              void 0,
                              "svelte-qt4m0r",
                              !0
                            ), Y(he), Y(ke), Te(() => {
                              rt(ye, u(L).label), rt(Oe, `${u(L).description ?? ""}: ${n()[u(L).name] ?? u(L).defaultValue ?? ""}`);
                            }), A(ae, oe);
                          }, ue = (ae) => {
                            var oe = de(), fe = Q(oe);
                            {
                              var ye = (he) => {
                                var me = kk(), Oe = Q(me), J = q(Oe, !0);
                                Y(Oe);
                                var Re = F(Oe, 2), Se = q(Re);
                                {
                                  let We = /* @__PURE__ */ P(() => u(L).options || []), Ve = /* @__PURE__ */ P(() => n()[u(L).name] ? [n()[u(L).name]] : [u(L).defaultValue]);
                                  Nt(Se, {
                                    get items() {
                                      return u(We);
                                    },
                                    style: "width: 100%",
                                    get placeholder() {
                                      return u(L).placeholder;
                                    },
                                    onSelect: (Ue) => {
                                      const ot = Ue.value;
                                      l({ [u(L).name]: ot });
                                    },
                                    get value() {
                                      return u(Ve);
                                    }
                                  });
                                }
                                Y(Re), Te(() => rt(J, u(L).label)), A(he, me);
                              }, ke = (he) => {
                                var me = de(), Oe = Q(me);
                                {
                                  var J = (Se) => {
                                    var We = Sk(), Ve = Q(We), Ue = q(Ve, !0);
                                    Y(Ve);
                                    var ot = F(Ve, 2), ct = q(ot);
                                    {
                                      let st = /* @__PURE__ */ P(() => u(L).chosen?.buttonText);
                                      lv(ct, {
                                        style: "width: 100%",
                                        get placeholder() {
                                          return u(L).placeholder;
                                        },
                                        get buttonText() {
                                          return u(st);
                                        },
                                        onChosen: (Mt, pe, Me) => {
                                          u(L).chosen?.onChosen?.(l, Mt, pe, Me);
                                        },
                                        get value() {
                                          return n()[u(L).chosen?.valueDataKey || ""];
                                        },
                                        get label() {
                                          return n()[u(L).chosen?.labelDataKey || ""];
                                        }
                                      });
                                    }
                                    Y(ot), Te(() => rt(Ue, u(L).label)), A(Se, We);
                                  }, Re = (Se) => {
                                    var We = de(), Ve = Q(We);
                                    {
                                      var Ue = (ot) => {
                                        je(ot, Fe({ level: 3, mt: "10px" }, () => u(L).attrs, {
                                          children: (ct, st) => {
                                            Ee();
                                            var Mt = De();
                                            Te(() => rt(Mt, u(L).label)), A(ct, Mt);
                                          },
                                          $$slots: { default: !0 }
                                        }));
                                      };
                                      se(
                                        Ve,
                                        (ot) => {
                                          u(L).type === "heading" && ot(Ue);
                                        },
                                        !0
                                      );
                                    }
                                    A(Se, We);
                                  };
                                  se(
                                    Oe,
                                    (Se) => {
                                      u(L).type === "chosen" ? Se(J) : Se(Re, !1);
                                    },
                                    !0
                                  );
                                }
                                A(he, me);
                              };
                              se(
                                fe,
                                (he) => {
                                  u(L).type === "select" ? he(ye) : he(ke, !1);
                                },
                                !0
                              );
                            }
                            A(ae, oe);
                          };
                          se(
                            te,
                            (ae) => {
                              u(L).type === "slider" ? ae(xe) : ae(ue, !1);
                            },
                            !0
                          );
                        }
                        A(ne, H);
                      };
                      se(
                        ee,
                        (ne) => {
                          u(L).type === "textarea" ? ne(K) : ne(U, !1);
                        },
                        !0
                      );
                    }
                    A(G, R);
                  };
                  se(X, (G) => {
                    u(L).type === "input" ? G(D) : G(j, !1);
                  });
                }
                A(I, Z);
              }), A(M, C);
            };
            se(V, (M) => {
              m && M(B);
            });
          }
          var $ = F(V, 2);
          Tt($, (M) => y = M, () => y);
          var T = F($, 2);
          {
            var E = (M) => {
              var C = Pk(), N = Q(C), I = q(N);
              je(I, {
                level: 3,
                mt: "10px",
                children: (D, j) => {
                  Ee();
                  var G = De("输出参数");
                  A(D, G);
                },
                $$slots: { default: !0 }
              });
              var L = F(I, 2);
              {
                var Z = (D) => {
                  qe(D, {
                    size: "icon-xs",
                    class: "input-btn-more",
                    style: "margin-left: auto",
                    onclick: () => {
                      i(o, "outputDefs");
                    },
                    children: (j, G) => {
                      var R = Ek();
                      A(j, R);
                    },
                    $$slots: { default: !0 }
                  });
                };
                se(L, (D) => {
                  v.outputDefsAddEnable !== !1 && D(Z);
                });
              }
              Y(N);
              var X = F(N, 2);
              gr(X, {}), A(M, C);
            };
            se(T, (M) => {
              v.outputDefsEnable !== !1 && M(E);
            });
          }
          Te(() => {
            At($, v.rootStyle || ""), Gt($, 1, fr(v.rootClass), "svelte-qt4m0r");
          }), A(S, x);
        },
        $$slots: { icon: !0, default: !0 }
      }
    ));
  }
  return ce(w);
}
ie(Tv, { data: {} }, [], [], !0);
const Ak = () => ({ updateEdgeData: (e, n, r) => {
  const o = Ye.getEdge(e);
  if (!o)
    return;
  const i = typeof n == "function" ? n(o) : n;
  o.data = r?.replace ? i : { ...o.data, ...i }, Ye.updateEdges((s) => s.map((a) => a.id === e ? o : a));
} }), Tk = () => ({ deleteEdge: (e) => {
  Ye.removeEdge(e);
} }), Mk = () => {
  const t = (n, r) => r.filter(
    // 排除循环节点的子节点，否则在多层循环嵌套时不正确
    (o) => o.source === n && o.sourceHandle !== "loop_handle"
  );
  return { getNodesFromSource: (n) => {
    const r = Ye.getEdges(), o = [];
    let i = t(n, r);
    for (; i.length > 0; ) {
      const s = [];
      i.forEach((a) => {
        o.push(Ye.getNode(a.target)), s.push(...t(a.target, r));
      }), i = s;
    }
    return o;
  } };
}, Dk = () => ({ getNodeRelativePosition: (e) => {
  let n = Ye.getNode(e);
  const r = { x: 0, y: 0 };
  for (; n; )
    r.x += n.position.x, r.y += n.position.y, n.parentId ? n = Ye.getNode(n.parentId) : n = void 0;
  return r;
} });
function Ik(t) {
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
function Vk(t) {
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
    for (const c of l)
      s.has(c) || o.push(e.get(c));
  }
  for (const a of t)
    s.has(a.id) || i.push(a);
  return i;
}
function zk(t) {
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
function Dl(t, e) {
  if (t == null)
    return t;
  if (Array.isArray(t))
    return t.map((n) => Dl(n, e));
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
      Object.hasOwn(t, r) && (n[r] = Dl(t[r], e));
    return n;
  }
  return t;
}
const Lk = () => (kt(), { copyHandler: async (n) => {
  const r = Ye.getNodes().filter((d) => d.selected);
  if (r.length === 0) return;
  const i = Ye.getEdges().filter((d) => r.some((f) => f.id === d.source) && r.some((f) => f.id === d.target)), s = r.map(Ik), a = i.map(zk), c = JSON.stringify({
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
  const i = Vk(o.tinyflowNodes), s = o.tinyflowEdges || [], a = /* @__PURE__ */ new Map(), l = [];
  for (const d of i) {
    const f = `node_${Bn()}`;
    a.set(d.id, f);
  }
  for (const d of i) {
    const f = a.get(d.id), h = d.parentId !== void 0 ? a.get(d.parentId) : void 0, v = Dl(d.data, a);
    l.push({
      ...d,
      id: f,
      parentId: h,
      data: v,
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
      id: `edge_${Bn()}`,
      source: f,
      target: h
    });
  }
  Ye.updateNodes((d) => [...d.map((h) => ({ ...h, selected: !1 })), ...l]), Ye.updateEdges((d) => [...d.map((h) => ({ ...h, selected: !1 })), ...c]);
} }), Id = () => {
  const t = document.activeElement;
  return !t || !(t instanceof HTMLElement) ? !1 : t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement || t.isContentEditable;
};
var Hk = /* @__PURE__ */ re('<div class="panel-content svelte-woejl3"><div>边属性设置</div> <div class="setting-title svelte-woejl3">边条件设置</div> <div class="setting-item svelte-woejl3"><!></div> <div class="setting-item svelte-woejl3" style="padding: 8px 0"><!> <!></div></div>'), Rk = /* @__PURE__ */ re("<!> <!> <!> <!>", 1), Fk = /* @__PURE__ */ re('<div style="position: relative; height: 100%; width: 100%;overflow: hidden"><!> <!></div>');
const Bk = {
  hash: "svelte-woejl3",
  code: ".panel-content.svelte-woejl3 {padding:10px;background-color:var(--background);border-radius:5px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);width:200px;border:1px solid var(--border);}.setting-title.svelte-woejl3 {margin:10px 0;font-size:12px;color:var(--muted-foreground);}.setting-item.svelte-woejl3 {display:flex;gap:5px;align-items:center;justify-content:end;}"
};
function Mv(t, e) {
  le(e, !0), Qe(t, Bk);
  const n = p(e, "onInit", 7), r = p(e, "colorMode", 7), o = /* @__PURE__ */ ze(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "onInit",
    "colorMode"
  ]), i = kt();
  console.log("props", o), n()(i);
  let s = /* @__PURE__ */ ve(!1), a = /* @__PURE__ */ ve(null);
  const { updateEdgeData: l } = Ak(), c = (R) => {
    R.preventDefault(), R.dataTransfer && (R.dataTransfer.dropEffect = "move");
  }, d = (R) => {
    R.preventDefault();
    const ee = i.screenToFlowPosition({ x: R.clientX - 250, y: R.clientY - 100 }), K = R.dataTransfer?.getData("application/tinyflow");
    if (!K)
      return;
    const U = JSON.parse(K), ne = { id: `node_${Bn()}`, position: ee, data: {}, ...U };
    Ye.addNode(ne), Ye.selectNodeOnly(ne.id);
  }, { getNode: f } = vk(), h = (R) => {
    const ee = f(R.source), K = f(R.target);
    if (R.sourceHandle === "loop_handle" || ee.parentId) {
      const U = i.getEdges();
      for (let ne of U)
        if (ne.target === R.target) {
          const H = f(ne.source);
          if (R.sourceHandle === "loop_handle" && H.parentId !== ee.id || ee.parentId && H.parentId !== ee.parentId)
            return !1;
        }
    }
    return !(!ee.parentId && K.parentId && K.parentId !== ee.id);
  }, { getNodesFromSource: v } = Mk(), { getNodeRelativePosition: m } = Dk(), { ensureParentInNodesBefore: y } = mk(), w = (R, ee) => {
    if (!ee.isValid)
      return;
    const K = ee.toNode;
    if (K.parentId)
      return;
    const U = ee.fromNode, ne = ee.fromHandle, H = { position: { ...K.position } };
    if (ne.id === "loop_handle" ? H.parentId = U.id : U.parentId && (H.parentId = U.parentId), H.parentId) {
      const { x: te, y: xe } = m(H.parentId);
      H.position = { x: K.position.x - te, y: K.position.y - xe }, i.updateNode(K.id, H), v(K.id).forEach((ae) => {
        i.updateNode(ae.id, {
          parentId: H.parentId,
          position: { x: ae.position.x - te, y: ae.position.y - xe }
        });
      }), y(H.parentId, K.id);
    }
    setTimeout(() => {
      Ye.getEdges().forEach((te) => {
        te.target === K.id && te.source == U.id && (W(s, !0), W(a, te, !0));
      });
    });
  }, { getEdgesByTarget: b } = yk(), k = (R) => {
    R.edges.forEach((K) => {
      K.id === u(a)?.id && (W(a, null), W(s, !1));
      const U = f(K.target);
      if (U && U.parentId) {
        const ne = b(K.target), { x: H, y: te } = m(U.parentId);
        if (ne.length === 0)
          i.updateNode(U.id, {
            parentId: void 0,
            position: { x: U.position.x + H, y: U.position.y + te }
          }), v(U.id).forEach((ue) => {
            i.updateNode(ue.id, {
              parentId: void 0,
              position: { x: ue.position.x + H, y: ue.position.y + te }
            });
          });
        else {
          let xe = !1;
          for (let ue = 0; ue < ne.length; ue++) {
            const ae = ne[ue], oe = f(ae.source);
            if (oe.parentId || oe.type === "loopNode") {
              xe = !0;
              break;
            }
          }
          xe || (i.updateNode(U.id, {
            parentId: void 0,
            position: { x: U.position.x + H, y: U.position.y + te }
          }), v(U.id).forEach((ae) => {
            i.updateNode(ae.id, {
              parentId: void 0,
              position: { x: ae.position.x + H, y: ae.position.y + te }
            });
          }));
        }
      }
    });
  }, { deleteEdge: S } = Tk(), _ = (R, ee) => {
  }, x = (R) => {
  }, { copyHandler: O, pasteHandler: z } = Lk(), V = (R) => {
    Id() || ((R.ctrlKey || R.metaKey) && R.key === "c" && (R.preventDefault(), O(R)), (R.ctrlKey || R.metaKey) && R.key === "a" && (R.preventDefault(), Ye.updateNodes((ee) => ee.map((K) => ({ ...K, selected: !0 }))), Ye.updateEdges((ee) => ee.map((K) => ({ ...K, selected: !0 })))));
  }, B = async (R) => {
    Id() || z(R);
  };
  Cn(() => {
    window.addEventListener("keydown", V), window.addEventListener("paste", B);
  }), xi(() => {
    window.removeEventListener("keydown", V), window.removeEventListener("paste", B);
  });
  const $ = {
    // ...nodeTypes
  }, T = Pr().customNodes;
  if (T)
    for (let R of Object.keys(T))
      $[R] = Tv;
  const E = Pr().onDataChange;
  He(() => {
    E?.({
      nodes: Ye.getNodes(),
      edges: Ye.getEdges(),
      viewport: Ye.getViewport()
    });
  });
  var M = {
    get onInit() {
      return n();
    },
    set onInit(R) {
      n(R), g();
    },
    get colorMode() {
      return r();
    },
    set colorMode(R) {
      r(R), g();
    }
  }, C = Fk(), N = q(C), I = Ye.getNodes, L = Ye.setNodes, Z = Ye.getEdges, X = Ye.setEdges, D = Ye.getViewport, j = Ye.setViewport;
  {
    let R = /* @__PURE__ */ P(() => ({ ...dk, ...$ })), ee = /* @__PURE__ */ P(() => ({
      markerEnd: { type: ci.ArrowClosed, width: 20, height: 20 }
    }));
    xg(N, {
      get colorMode() {
        return r();
      },
      get nodeTypes() {
        return u(R);
      },
      get nodes() {
        return I();
      },
      set nodes(K) {
        L(K);
      },
      get edges() {
        return Z();
      },
      set edges(K) {
        X(K);
      },
      get viewport() {
        return D();
      },
      set viewport(K) {
        j(K);
      },
      class: "tinyflow-logo",
      ondrop: d,
      ondragover: c,
      isValidConnection: h,
      onconnectend: w,
      onconnectstart: _,
      onconnect: x,
      connectionRadius: 50,
      onedgeclick: (K) => {
        W(s, !0), W(a, K.edge, !0);
      },
      onbeforeconnect: (K) => ({ ...K, id: Bn() }),
      ondelete: k,
      onclick: (K) => {
        const U = K.target;
        U.classList.contains("svelte-flow__edge-interaction") || U.classList.contains("panel-content") || U.closest(".panel-content") || (W(s, !1), W(a, null));
      },
      get defaultEdgeOptions() {
        return u(ee);
      },
      children: (K, U) => {
        var ne = Rk(), H = Q(ne);
        Tg(H, {});
        var te = F(H, 2);
        Ng(te, {});
        var xe = F(te, 2);
        Dg(xe, {});
        var ue = F(xe, 2);
        {
          var ae = (oe) => {
            Oi(oe, {
              children: (fe, ye) => {
                var ke = Hk(), he = F(q(ke), 4), me = q(he);
                {
                  let Se = /* @__PURE__ */ P(() => u(a)?.data?.condition);
                  tt(me, {
                    rows: 3,
                    placeholder: "请输入边条件",
                    style: "width: 100%",
                    get value() {
                      return u(Se);
                    },
                    onchange: (We) => {
                      u(a) && l(u(a).id, { condition: We.target?.value });
                    }
                  });
                }
                Y(he);
                var Oe = F(he, 2), J = q(Oe);
                qe(J, {
                  variant: "destructive",
                  onclick: () => {
                    S(u(a)?.id), W(s, !1);
                  },
                  children: (Se, We) => {
                    Ee();
                    var Ve = De("删除");
                    A(Se, Ve);
                  },
                  $$slots: { default: !0 }
                });
                var Re = F(J, 2);
                qe(Re, {
                  variant: "default",
                  onclick: () => {
                    W(s, !1);
                  },
                  children: (Se, We) => {
                    Ee();
                    var Ve = De("保存");
                    A(Se, Ve);
                  },
                  $$slots: { default: !0 }
                }), Y(Oe), Y(ke), A(fe, ke);
              },
              $$slots: { default: !0 }
            });
          };
          se(ue, (oe) => {
            u(s) && oe(ae);
          });
        }
        A(K, ne);
      },
      $$slots: { default: !0 }
    });
  }
  var G = F(N, 2);
  return Av(G, {}), Y(C), A(t, C), ce(M);
}
ie(Mv, { onInit: {}, colorMode: {} }, [], [], !0);
const Dv = typeof window < "u" ? window : void 0;
function $k(t) {
  let e = t.activeElement;
  for (; e?.shadowRoot; ) {
    const n = e.shadowRoot.activeElement;
    if (n === e)
      break;
    e = n;
  }
  return e;
}
let Kk = class {
  #e;
  #t;
  constructor(e = {}) {
    const { window: n = Dv, document: r = n?.document } = e;
    n !== void 0 && (this.#e = r, this.#t = to((o) => {
      const i = gt(n, "focusin", o), s = gt(n, "focusout", o);
      return () => {
        i(), s();
      };
    }));
  }
  get current() {
    return this.#t?.(), this.#e ? $k(this.#e) : null;
  }
};
new Kk();
function Wk(t, e) {
  switch (t) {
    case "post":
      He(e);
      break;
    case "pre":
      Zt(e);
      break;
  }
}
function Iv(t, e, n, r = {}) {
  const { lazy: o = !1 } = r;
  let i = !o, s = Array.isArray(t) ? [] : void 0;
  Wk(e, () => {
    const a = Array.isArray(t) ? t.map((c) => c()) : t();
    if (!i) {
      i = !0, s = a;
      return;
    }
    const l = at(() => n(a, s));
    return s = a, l;
  });
}
function Uc(t, e, n) {
  Iv(t, "post", e, n);
}
function Zk(t, e, n) {
  Iv(t, "pre", e, n);
}
Uc.pre = Zk;
function Yk(t, e) {
  switch (t) {
    case "local":
      return e.localStorage;
    case "session":
      return e.sessionStorage;
  }
}
class Vv {
  #e;
  #t;
  #n;
  #r;
  #o;
  #i = /* @__PURE__ */ ve(0);
  constructor(e, n, r = {}) {
    const {
      storage: o = "local",
      serializer: i = { serialize: JSON.stringify, deserialize: JSON.parse },
      syncTabs: s = !0,
      window: a = Dv
    } = r;
    if (this.#e = n, this.#t = e, this.#n = i, a === void 0) return;
    const l = Yk(o, a);
    this.#r = l;
    const c = l.getItem(e);
    c !== null ? this.#e = this.#s(c) : this.#l(n), s && o === "local" && (this.#o = to(() => gt(a, "storage", this.#a)));
  }
  get current() {
    this.#o?.(), u(this.#i);
    const e = this.#s(this.#r?.getItem(this.#t)) ?? this.#e, n = /* @__PURE__ */ new WeakMap(), r = (o) => {
      if (o === null || o?.constructor.name === "Date" || typeof o != "object")
        return o;
      let i = n.get(o);
      return i || (i = new Proxy(o, {
        get: (s, a) => (u(this.#i), r(Reflect.get(s, a))),
        set: (s, a, l) => (W(this.#i, u(this.#i) + 1), Reflect.set(s, a, l), this.#l(e), !0)
      }), n.set(o, i)), i;
    };
    return r(e);
  }
  set current(e) {
    this.#l(e), W(this.#i, u(this.#i) + 1);
  }
  #a = (e) => {
    e.key !== this.#t || e.newValue === null || (this.#e = this.#s(e.newValue), W(this.#i, u(this.#i) + 1));
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
const zv = {
  getItem: (t) => null,
  setItem: (t, e) => {
  }
}, zi = typeof document < "u";
function qk(t) {
  return typeof t == "function";
}
function jk(t) {
  return t !== null && typeof t == "object";
}
const pi = Symbol("box"), Gc = Symbol("is-writable");
function Xk(t) {
  return jk(t) && pi in t;
}
function Uk(t) {
  return bt.isBox(t) && Gc in t;
}
function bt(t) {
  let e = /* @__PURE__ */ ve(ht(t));
  return {
    [pi]: !0,
    [Gc]: !0,
    get current() {
      return u(e);
    },
    set current(n) {
      W(e, n, !0);
    }
  };
}
function Gk(t, e) {
  const n = /* @__PURE__ */ P(t);
  return e ? {
    [pi]: !0,
    [Gc]: !0,
    get current() {
      return u(n);
    },
    set current(r) {
      e(r);
    }
  } : {
    [pi]: !0,
    get current() {
      return t();
    }
  };
}
function Jk(t) {
  return bt.isBox(t) ? t : qk(t) ? bt.with(t) : bt(t);
}
function Qk(t) {
  return Object.entries(t).reduce(
    (e, [n, r]) => bt.isBox(r) ? (bt.isWritableBox(r) ? Object.defineProperty(e, n, {
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
function eS(t) {
  return bt.isWritableBox(t) ? {
    [pi]: !0,
    get current() {
      return t.current;
    }
  } : t;
}
bt.from = Jk;
bt.with = Gk;
bt.flatten = Qk;
bt.readonly = eS;
bt.isBox = Xk;
bt.isWritableBox = Uk;
function tS(t, e) {
  const n = RegExp(t, "g");
  return (r) => {
    if (typeof r != "string")
      throw new TypeError(`expected an argument of type string, but got ${typeof r}`);
    return r.match(n) ? r.replace(n, e) : r;
  };
}
const nS = tS(/[A-Z]/, (t) => `-${t.toLowerCase()}`);
function rS(t) {
  if (!t || typeof t != "object" || Array.isArray(t))
    throw new TypeError(`expected an argument of type object, but got ${typeof t}`);
  return Object.keys(t).map((e) => `${nS(e)}: ${t[e]};`).join(`
`);
}
function oS(t = {}) {
  return rS(t).replace(`
`, " ");
}
const iS = {
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
oS(iS);
const sS = typeof window < "u" ? window : void 0;
function aS(t) {
  let e = t.activeElement;
  for (; e?.shadowRoot; ) {
    const n = e.shadowRoot.activeElement;
    if (n === e)
      break;
    e = n;
  }
  return e;
}
class lS {
  #e;
  #t;
  constructor(e = {}) {
    const { window: n = sS, document: r = n?.document } = e;
    n !== void 0 && (this.#e = r, this.#t = to((o) => {
      const i = gt(n, "focusin", o), s = gt(n, "focusout", o);
      return () => {
        i(), s();
      };
    }));
  }
  get current() {
    return this.#t?.(), this.#e ? aS(this.#e) : null;
  }
}
new lS();
const Br = bt("mode-watcher-mode"), $r = bt("mode-watcher-theme"), cS = ["dark", "light", "system"];
function Il(t) {
  return typeof t != "string" ? !1 : cS.includes(t);
}
class uS {
  #e = "system";
  #t = zi ? localStorage : zv;
  #n = this.#t.getItem(Br.current);
  #r = Il(this.#n) ? this.#n : this.#e;
  #o = /* @__PURE__ */ ve(ht(this.#i()));
  #i(e = this.#r) {
    return new Vv(Br.current, e, {
      serializer: {
        serialize: (n) => n,
        deserialize: (n) => Il(n) ? n : this.#e
      }
    });
  }
  constructor() {
    no(() => Uc.pre(() => Br.current, (e, n) => {
      const r = u(this.#o).current;
      W(this.#o, this.#i(r), !0), n && localStorage.removeItem(n);
    }));
  }
  get current() {
    return u(this.#o).current;
  }
  set current(e) {
    u(this.#o).current = e;
  }
}
class dS {
  #e = void 0;
  #t = !0;
  #n = /* @__PURE__ */ ve(ht(this.#e));
  #r = typeof window < "u" && typeof window.matchMedia == "function" ? new Qh("prefers-color-scheme: light") : { current: !1 };
  query() {
    zi && W(this.#n, this.#r.current ? "light" : "dark", !0);
  }
  tracking(e) {
    this.#t = e;
  }
  constructor() {
    no(() => {
      Zt(() => {
        this.#t && this.query();
      });
    }), this.query = this.query.bind(this), this.tracking = this.tracking.bind(this);
  }
  get current() {
    return u(this.#n);
  }
}
const Vl = new uS(), zl = new dS();
class fS {
  #e = zi ? localStorage : zv;
  #t = this.#e.getItem($r.current);
  #n = this.#t === null || this.#t === void 0 ? "" : this.#t;
  #r = /* @__PURE__ */ ve(ht(this.#o()));
  #o(e = this.#n) {
    return new Vv($r.current, e, {
      serializer: {
        serialize: (n) => typeof n != "string" ? "" : n,
        deserialize: (n) => n
      }
    });
  }
  constructor() {
    no(() => Uc.pre(() => $r.current, (e, n) => {
      const r = u(this.#r).current;
      W(this.#r, this.#o(r), !0), n && localStorage.removeItem(n);
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
  set current(e) {
    u(this.#r).current = e;
  }
}
const us = new fS();
let zd, Ld, Hd = !1, Ko = null;
function hS() {
  return Ko || (Ko = document.createElement("style"), Ko.appendChild(document.createTextNode(`* {
		-webkit-transition: none !important;
		-moz-transition: none !important;
		-o-transition: none !important;
		-ms-transition: none !important;
		transition: none !important;
	}`)), Ko);
}
function Lv(t, e = !1) {
  if (typeof document > "u")
    return;
  if (!Hd) {
    Hd = !0, t();
    return;
  }
  if (typeof process < "u" && process.env?.NODE_ENV === "test" || typeof window < "u" && window.__vitest_worker__) {
    t();
    return;
  }
  clearTimeout(zd), clearTimeout(Ld);
  const r = hS(), o = () => document.head.appendChild(r), i = () => {
    r.parentNode && document.head.removeChild(r);
  };
  function s() {
    t(), window.requestAnimationFrame(i);
  }
  if (typeof window.requestAnimationFrame < "u") {
    o(), e ? s() : window.requestAnimationFrame(() => {
      s();
    });
    return;
  }
  o(), zd = window.setTimeout(() => {
    t(), Ld = window.setTimeout(i, 16);
  }, 16);
}
const yr = bt(void 0), Ys = bt(!0), qs = bt(!1), Ll = bt([]), Hl = bt([]);
function gS() {
  const t = /* @__PURE__ */ P(() => {
    if (!zi) return;
    const e = Vl.current === "system" ? zl.current : Vl.current, n = Vd(Ll.current), r = Vd(Hl.current);
    function o() {
      const i = document.documentElement, s = document.querySelector('meta[name="theme-color"]');
      e === "light" ? (n.length && i.classList.remove(...n), r.length && i.classList.add(...r), i.style.colorScheme = "light", s && yr.current && s.setAttribute("content", yr.current.light)) : (r.length && i.classList.remove(...r), n.length && i.classList.add(...n), i.style.colorScheme = "dark", s && yr.current && s.setAttribute("content", yr.current.dark));
    }
    return Ys.current ? Lv(o, qs.current) : o(), e;
  });
  return {
    get current() {
      return u(t);
    }
  };
}
function pS() {
  const t = /* @__PURE__ */ P(() => {
    if (us.current, !zi) return;
    function e() {
      document.documentElement.setAttribute("data-theme", us.current);
    }
    return Ys.current ? Lv(e, at(() => qs.current)) : e(), us.current;
  });
  return {
    get current() {
      return u(t);
    }
  };
}
const vS = gS(), mS = pS();
function Hv(t) {
  Vl.current = t;
}
function yS(t) {
  us.current = t;
}
function wS({ defaultMode: t = "system", themeColors: e, darkClassNames: n = ["dark"], lightClassNames: r = [], defaultTheme: o = "", modeStorageKey: i = "mode-watcher-mode", themeStorageKey: s = "mode-watcher-theme" }) {
  const a = document.documentElement, l = localStorage.getItem(i) ?? t, c = localStorage.getItem(s) ?? o, d = l === "light" || l === "system" && window.matchMedia("(prefers-color-scheme: light)").matches;
  if (d ? (n.length && a.classList.remove(...n.filter(Boolean)), r.length && a.classList.add(...r.filter(Boolean))) : (r.length && a.classList.remove(...r.filter(Boolean)), n.length && a.classList.add(...n.filter(Boolean))), a.style.colorScheme = d ? "light" : "dark", e) {
    const f = document.querySelector('meta[name="theme-color"]');
    f && f.setAttribute("content", l === "light" ? e.light : e.dark);
  }
  c && (a.setAttribute("data-theme", c), localStorage.setItem(s, c)), localStorage.setItem(i, l);
}
var bS = /* @__PURE__ */ re('<meta name="theme-color"/>');
function Rv(t, e) {
  le(e, !0);
  let n = p(e, "themeColors", 7);
  var r = {
    get themeColors() {
      return n();
    },
    set themeColors(a) {
      n(a), g();
    }
  }, o = de(), i = Q(o);
  {
    var s = (a) => {
      var l = bS();
      Te(() => Ne(l, "content", n().dark)), A(a, l);
    };
    se(i, (a) => {
      n() && a(s);
    });
  }
  return A(t, o), ce(r);
}
ie(Rv, { themeColors: {} }, [], [], !0);
var xS = /* @__PURE__ */ re('<meta name="theme-color"/>'), _S = /* @__PURE__ */ re("<!> <!>", 1);
function Fv(t, e) {
  le(e, !0);
  let n = p(e, "trueNonce", 7, ""), r = p(e, "initConfig", 7), o = p(e, "themeColors", 7);
  var i = {
    get trueNonce() {
      return n();
    },
    set trueNonce(s = "") {
      n(s), g();
    },
    get initConfig() {
      return r();
    },
    set initConfig(s) {
      r(s), g();
    },
    get themeColors() {
      return o();
    },
    set themeColors(s) {
      o(s), g();
    }
  };
  return s1("171tvz2", (s) => {
    var a = _S(), l = Q(a);
    {
      var c = (f) => {
        var h = xS();
        Te(() => Ne(h, "content", o().dark)), A(f, h);
      };
      se(l, (f) => {
        o() && f(c);
      });
    }
    var d = F(l, 2);
    ia(d, () => `<script${n() ? ` nonce=${n()}` : ""}>(` + wS.toString() + ")(" + JSON.stringify(r()) + ");<\/script>"), A(s, a);
  }), ce(i);
}
ie(Fv, { trueNonce: {}, initConfig: {}, themeColors: {} }, [], [], !0);
function Bv(t, e) {
  le(e, !0);
  let n = p(e, "track", 7, !0), r = p(e, "defaultMode", 7, "system"), o = p(e, "themeColors", 7), i = p(e, "disableTransitions", 7, !0), s = p(e, "darkClassNames", 23, () => ["dark"]), a = p(e, "lightClassNames", 23, () => []), l = p(e, "defaultTheme", 7, ""), c = p(e, "nonce", 7, ""), d = p(e, "themeStorageKey", 7, "mode-watcher-theme"), f = p(e, "modeStorageKey", 7, "mode-watcher-mode"), h = p(e, "disableHeadScriptInjection", 7, !1), v = p(e, "synchronousModeChanges", 7, !1);
  Br.current = f(), $r.current = d(), Ll.current = s(), Hl.current = a(), Ys.current = i(), yr.current = o(), qs.current = v(), Zt(() => {
    qs.current = v();
  }), Zt(() => {
    Ys.current = i();
  }), Zt(() => {
    yr.current = o();
  }), Zt(() => {
    Ll.current = s();
  }), Zt(() => {
    Hl.current = a();
  }), Zt(() => {
    Br.current = f();
  }), Zt(() => {
    $r.current = d();
  }), Zt(() => {
    vS.current, Br.current, $r.current, mS.current;
  }), Cn(() => {
    zl.tracking(n()), zl.query();
    const x = localStorage.getItem(Br.current);
    Hv(Il(x) ? x : r());
    const O = localStorage.getItem($r.current);
    yS(O || l());
  });
  const m = {
    defaultMode: r(),
    themeColors: o(),
    darkClassNames: s(),
    lightClassNames: a(),
    defaultTheme: l(),
    modeStorageKey: f(),
    themeStorageKey: d()
  }, y = /* @__PURE__ */ P(() => typeof window > "u" ? c() : "");
  var w = {
    get track() {
      return n();
    },
    set track(x = !0) {
      n(x), g();
    },
    get defaultMode() {
      return r();
    },
    set defaultMode(x = "system") {
      r(x), g();
    },
    get themeColors() {
      return o();
    },
    set themeColors(x) {
      o(x), g();
    },
    get disableTransitions() {
      return i();
    },
    set disableTransitions(x = !0) {
      i(x), g();
    },
    get darkClassNames() {
      return s();
    },
    set darkClassNames(x = ["dark"]) {
      s(x), g();
    },
    get lightClassNames() {
      return a();
    },
    set lightClassNames(x = []) {
      a(x), g();
    },
    get defaultTheme() {
      return l();
    },
    set defaultTheme(x = "") {
      l(x), g();
    },
    get nonce() {
      return c();
    },
    set nonce(x = "") {
      c(x), g();
    },
    get themeStorageKey() {
      return d();
    },
    set themeStorageKey(x = "mode-watcher-theme") {
      d(x), g();
    },
    get modeStorageKey() {
      return f();
    },
    set modeStorageKey(x = "mode-watcher-mode") {
      f(x), g();
    },
    get disableHeadScriptInjection() {
      return h();
    },
    set disableHeadScriptInjection(x = !1) {
      h(x), g();
    },
    get synchronousModeChanges() {
      return v();
    },
    set synchronousModeChanges(x = !1) {
      v(x), g();
    }
  }, b = de(), k = Q(b);
  {
    var S = (x) => {
      Rv(x, {
        get themeColors() {
          return yr.current;
        }
      });
    }, _ = (x) => {
      Fv(x, {
        get trueNonce() {
          return u(y);
        },
        get initConfig() {
          return m;
        },
        get themeColors() {
          return yr.current;
        }
      });
    };
    se(k, (x) => {
      h() ? x(S) : x(_, !1);
    });
  }
  return A(t, b), ce(w);
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
var CS = /* @__PURE__ */ re("<!> <!>", 1);
function kS(t, e) {
  le(e, !0);
  const n = p(e, "options", 7), r = p(e, "onInit", 7);
  let { data: o, theme: i = "system" } = n();
  if (Hv(i), typeof o == "string")
    try {
      o = JSON.parse(o.trim());
    } catch {
      console.error("Invalid JSON data:", o);
    }
  Ye.init(o?.nodes || [], o?.edges || []), qr("tinyflow_options", n());
  var s = {
    get options() {
      return n();
    },
    set options(d) {
      n(d), g();
    },
    get onInit() {
      return r();
    },
    set onInit(d) {
      r(d), g();
    }
  }, a = CS(), l = Q(a);
  Bv(l, {});
  var c = F(l, 2);
  return _g(c, {
    children: (d, f) => {
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
  }), A(t, a), ce(s);
}
customElements.define("tinyflow-component", ie(kS, { options: {}, onInit: {} }, [], [], !1));
export {
  ES as Tinyflow
};
//# sourceMappingURL=index.js.map
