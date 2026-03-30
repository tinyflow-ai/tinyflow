const Zh = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(Zh);
const Ic = 1, Lc = 2, Hc = 4, Wh = 8, Yh = 16, jh = 1, Xh = 2, Rc = 4, qh = 8, Gh = 16, Bc = 1, Uh = 2, Fc = "[", Qi = "[!", ka = "]", Pr = {}, dt = Symbol(), Jh = "http://www.w3.org/1999/xhtml", Qh = "http://www.w3.org/2000/svg", eg = "@attach", Bs = !1;
var es = Array.isArray, tg = Array.prototype.indexOf, Sa = Array.from, Ni = Object.keys, Pi = Object.defineProperty, Vn = Object.getOwnPropertyDescriptor, Kc = Object.getOwnPropertyDescriptors, Zc = Object.prototype, ng = Array.prototype, ts = Object.getPrototypeOf, hl = Object.isExtensible;
function uo(e) {
  return typeof e == "function";
}
const ht = () => {
};
function rg(e) {
  return e();
}
function Fs(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Wc() {
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
function Ho(e, t) {
  if (Array.isArray(e))
    return e;
  if (t === void 0 || !(Symbol.iterator in e))
    return Array.from(e);
  const n = [];
  for (const r of e)
    if (n.push(r), n.length === t) break;
  return n;
}
const gt = 2, Ea = 4, ns = 8, Yc = 1 << 24, Fn = 16, Kn = 32, dr = 64, rs = 128, ln = 512, bt = 1024, Rt = 2048, Zn = 4096, Kt = 8192, zn = 16384, os = 32768, Ln = 65536, gl = 1 << 17, Na = 1 << 18, Vr = 1 << 19, jc = 1 << 20, Tr = 32768, Ks = 1 << 21, Pa = 1 << 22, tr = 1 << 23, bn = Symbol("$state"), Ta = Symbol("legacy props"), og = Symbol(""), Br = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), ig = 1, is = 3, fr = 8;
function $a(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function sg() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function ag(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function lg() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function cg(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function ug() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function dg() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function fg(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function hg() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function gg() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function vg() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function pg() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function Ro(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function mg() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function yg() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let xe = !1;
function $t(e) {
  xe = e;
}
let Me;
function Ge(e) {
  if (e === null)
    throw Ro(), Pr;
  return Me = e;
}
function Hn() {
  return Ge(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Wt(Me)
  );
}
function B(e) {
  if (xe) {
    if (/* @__PURE__ */ Wt(Me) !== null)
      throw Ro(), Pr;
    Me = e;
  }
}
function ye(e = 1) {
  if (xe) {
    for (var t = e, n = Me; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ Wt(n);
    Me = n;
  }
}
function Ti(e = !0) {
  for (var t = 0, n = Me; ; ) {
    if (n.nodeType === fr) {
      var r = (
        /** @type {Comment} */
        n.data
      );
      if (r === ka) {
        if (t === 0) return n;
        t -= 1;
      } else (r === Fc || r === Qi) && (t += 1);
    }
    var o = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Wt(n)
    );
    e && n.remove(), n = o;
  }
}
function Xc(e) {
  if (!e || e.nodeType !== fr)
    throw Ro(), Pr;
  return (
    /** @type {Comment} */
    e.data
  );
}
function qc(e) {
  return e === this.v;
}
function Gc(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Uc(e) {
  return !Gc(e, this.v);
}
let so = !1, wg = !1;
function bg() {
  so = !0;
}
const xg = [];
function Jc(e, t = !1, n = !1) {
  return yi(e, /* @__PURE__ */ new Map(), "", xg, null, n);
}
function yi(e, t, n, r, o = null, i = !1) {
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
    if (es(e)) {
      var a = (
        /** @type {Snapshot<any>} */
        Array(e.length)
      );
      t.set(e, a), o !== null && t.set(o, a);
      for (var l = 0; l < e.length; l += 1) {
        var c = e[l];
        l in e && (a[l] = yi(c, t, n, r, null, i));
      }
      return a;
    }
    if (ts(e) === Zc) {
      a = {}, t.set(e, a), o !== null && t.set(o, a);
      for (var d in e)
        a[d] = yi(
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
      return yi(
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
let je = null;
function Xr(e) {
  je = e;
}
function ir(e) {
  return (
    /** @type {T} */
    Qc().get(e)
  );
}
function qr(e, t) {
  return Qc().set(e, t), t;
}
function ce(e, t = !1, n) {
  je = {
    p: je,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    l: so && !t ? { s: null, u: null, $: [] } : null
  };
}
function ue(e) {
  var t = (
    /** @type {ComponentContext} */
    je
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      pu(r);
  }
  return e !== void 0 && (t.x = e), t.i = !0, je = t.p, e ?? /** @type {T} */
  {};
}
function Bo() {
  return !so || je !== null && je.l === null;
}
function Qc(e) {
  return je === null && $a(), je.c ??= new Map(_g(je) || void 0);
}
function _g(e) {
  let t = e.p;
  for (; t !== null; ) {
    const n = t.c;
    if (n !== null)
      return n;
    t = t.p;
  }
  return null;
}
let br = [];
function eu() {
  var e = br;
  br = [], Fs(e);
}
function hr(e) {
  if (br.length === 0 && !xo) {
    var t = br;
    queueMicrotask(() => {
      t === br && eu();
    });
  }
  br.push(e);
}
function Cg() {
  for (; br.length > 0; )
    eu();
}
function tu(e) {
  var t = De;
  if (t === null)
    return He.f |= tr, e;
  if ((t.f & os) === 0) {
    if ((t.f & rs) === 0)
      throw e;
    t.b.error(e);
  } else
    Gr(e, t);
}
function Gr(e, t) {
  for (; t !== null; ) {
    if ((t.f & rs) !== 0)
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
const si = /* @__PURE__ */ new Set();
let Xe = null, Gt = null, qt = [], ss = null, Zs = !1, xo = !1;
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
  #l = [];
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
    qt = [], this.apply();
    var n = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: [],
      block_effects: []
    };
    for (const r of t)
      this.#s(r, n);
    this.is_fork || this.#u(), this.is_deferred() ? (this.#a(n.effects), this.#a(n.render_effects), this.#a(n.block_effects)) : (Xe = null, vl(n.render_effects), vl(n.effects), this.#i?.resolve()), Gt = null;
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   * @param {EffectTarget} target
   */
  #s(t, n) {
    t.f ^= bt;
    for (var r = t.first; r !== null; ) {
      var o = r.f, i = (o & (Kn | dr)) !== 0, s = i && (o & bt) !== 0, a = s || (o & Kt) !== 0 || this.skipped_effects.has(r);
      if ((r.f & rs) !== 0 && r.b?.is_pending() && (n = {
        parent: n,
        effect: r,
        effects: [],
        render_effects: [],
        block_effects: []
      }), !a && r.fn !== null) {
        i ? r.f ^= bt : (o & Ea) !== 0 ? n.effects.push(r) : Wo(r) && ((r.f & Fn) !== 0 && n.block_effects.push(r), Eo(r));
        var l = r.first;
        if (l !== null) {
          r = l;
          continue;
        }
      }
      var c = r.parent;
      for (r = r.next; r === null && c !== null; )
        c === n.effect && (this.#a(n.effects), this.#a(n.render_effects), this.#a(n.block_effects), n = /** @type {EffectTarget} */
        n.parent), r = c.next, c = c.parent;
    }
  }
  /**
   * @param {Effect[]} effects
   */
  #a(t) {
    for (const n of t)
      ((n.f & Rt) !== 0 ? this.#o : this.#l).push(n), this.#c(n.deps), _t(n, bt);
  }
  /**
   * @param {Value[] | null} deps
   */
  #c(t) {
    if (t !== null)
      for (const n of t)
        (n.f & gt) === 0 || (n.f & Tr) === 0 || (n.f ^= Tr, this.#c(
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
    this.previous.has(t) || this.previous.set(t, n), (t.f & tr) === 0 && (this.current.set(t, t.v), Gt?.set(t, t.v));
  }
  activate() {
    Xe = this, this.apply();
  }
  deactivate() {
    Xe === this && (Xe = null, Gt = null);
  }
  flush() {
    if (this.activate(), qt.length > 0) {
      if (nu(), Xe !== null && Xe !== this)
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
    if (si.size > 1) {
      this.previous.clear();
      var t = Gt, n = !0, r = {
        parent: null,
        effect: null,
        effects: [],
        render_effects: [],
        block_effects: []
      };
      for (const i of si) {
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
            ru(d, a, l, c);
          if (qt.length > 0) {
            Xe = i, i.apply();
            for (const d of qt)
              i.#s(d, r);
            i.deactivate();
          }
          qt = o;
        }
      }
      Xe = null, Gt = t;
    }
    this.committed = !0, si.delete(this);
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
      _t(t, Rt), $r(t);
    for (const t of this.#l)
      _t(t, Zn), $r(t);
    this.#o = [], this.#l = [], this.flush();
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
    return (this.#i ??= Wc()).promise;
  }
  static ensure() {
    if (Xe === null) {
      const t = Xe = new sn();
      si.add(Xe), xo || sn.enqueue(() => {
        Xe === t && t.flush();
      });
    }
    return Xe;
  }
  /** @param {() => void} task */
  static enqueue(t) {
    hr(t);
  }
  apply() {
  }
}
function v(e) {
  var t = xo;
  xo = !0;
  try {
    for (var n; ; ) {
      if (Cg(), qt.length === 0 && (Xe?.flush(), qt.length === 0))
        return ss = null, /** @type {T} */
        n;
      nu();
    }
  } finally {
    xo = t;
  }
}
function nu() {
  var e = rr;
  Zs = !0;
  var t = null;
  try {
    var n = 0;
    for (Mi(!0); qt.length > 0; ) {
      var r = sn.ensure();
      if (n++ > 1e3) {
        var o, i;
        kg();
      }
      r.process(qt), nr.clear();
    }
  } finally {
    Zs = !1, Mi(e), ss = null;
  }
}
function kg() {
  try {
    ug();
  } catch (e) {
    Gr(e, ss);
  }
}
let Tn = null;
function vl(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if ((r.f & (zn | Kt)) === 0 && Wo(r) && (Tn = /* @__PURE__ */ new Set(), Eo(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? xu(r) : r.fn = null), Tn?.size > 0)) {
        nr.clear();
        for (const o of Tn) {
          if ((o.f & (zn | Kt)) !== 0) continue;
          const i = [o];
          let s = o.parent;
          for (; s !== null; )
            Tn.has(s) && (Tn.delete(s), i.push(s)), s = s.parent;
          for (let a = i.length - 1; a >= 0; a--) {
            const l = i[a];
            (l.f & (zn | Kt)) === 0 && Eo(l);
          }
        }
        Tn.clear();
      }
    }
    Tn = null;
  }
}
function ru(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const o of e.reactions) {
      const i = o.f;
      (i & gt) !== 0 ? ru(
        /** @type {Derived} */
        o,
        t,
        n,
        r
      ) : (i & (Pa | Fn)) !== 0 && (i & Rt) === 0 && ou(o, t, r) && (_t(o, Rt), $r(
        /** @type {Effect} */
        o
      ));
    }
}
function ou(e, t, n) {
  const r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null)
    for (const o of e.deps) {
      if (t.includes(o))
        return !0;
      if ((o.f & gt) !== 0 && ou(
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
function $r(e) {
  for (var t = ss = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (Zs && t === De && (n & Fn) !== 0 && (n & Na) === 0)
      return;
    if ((n & (dr | Kn)) !== 0) {
      if ((n & bt) === 0) return;
      t.f ^= bt;
    }
  }
  qt.push(t);
}
function Fo(e) {
  let t = 0, n = sr(0), r;
  return () => {
    ko() && (u(n), Zo(() => (t === 0 && (r = st(() => e(() => _o(n)))), t += 1, () => {
      hr(() => {
        t -= 1, t === 0 && (r?.(), r = void 0, _o(n));
      });
    })));
  };
}
var Sg = Ln | Vr | rs;
function Eg(e, t, n) {
  new Ng(e, t, n);
}
class Ng {
  /** @type {Boundary | null} */
  parent;
  #t = !1;
  /** @type {TemplateNode} */
  #e;
  /** @type {TemplateNode | null} */
  #n = xe ? Me : null;
  /** @type {BoundaryProps} */
  #r;
  /** @type {((anchor: Node) => void)} */
  #i;
  /** @type {Effect} */
  #o;
  /** @type {Effect | null} */
  #l = null;
  /** @type {Effect | null} */
  #s = null;
  /** @type {Effect | null} */
  #a = null;
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
  #w = Fo(() => (this.#h = sr(this.#d), () => {
    this.#h = null;
  }));
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(t, n, r) {
    this.#e = t, this.#r = n, this.#i = r, this.parent = /** @type {Effect} */
    De.b, this.#t = !!this.#r.pending, this.#o = zr(() => {
      if (De.b = this, xe) {
        const i = this.#n;
        Hn(), /** @type {Comment} */
        i.nodeType === fr && /** @type {Comment} */
        i.data === Qi ? this.#x() : this.#b();
      } else {
        var o = this.#m();
        try {
          this.#l = zt(() => r(o));
        } catch (i) {
          this.error(i);
        }
        this.#f > 0 ? this.#p() : this.#t = !1;
      }
      return () => {
        this.#u?.remove();
      };
    }, Sg), xe && (this.#e = Me);
  }
  #b() {
    try {
      this.#l = zt(() => this.#i(this.#e));
    } catch (t) {
      this.error(t);
    }
    this.#t = !1;
  }
  #x() {
    const t = this.#r.pending;
    t && (this.#s = zt(() => t(this.#e)), sn.enqueue(() => {
      var n = this.#m();
      this.#l = this.#v(() => (sn.ensure(), zt(() => this.#i(n)))), this.#f > 0 ? this.#p() : (Kr(
        /** @type {Effect} */
        this.#s,
        () => {
          this.#s = null;
        }
      ), this.#t = !1);
    }));
  }
  #m() {
    var t = this.#e;
    return this.#t && (this.#u = kt(), this.#e.before(this.#u), t = this.#u), t;
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
    var n = De, r = He, o = je;
    Jt(this.#o), It(this.#o), Xr(this.#o.ctx);
    try {
      return t();
    } catch (i) {
      return tu(i), null;
    } finally {
      Jt(n), It(r), Xr(o);
    }
  }
  #p() {
    const t = (
      /** @type {(anchor: Node) => void} */
      this.#r.pending
    );
    this.#l !== null && (this.#c = document.createDocumentFragment(), this.#c.append(
      /** @type {TemplateNode} */
      this.#u
    ), ku(this.#l, this.#c)), this.#s === null && (this.#s = zt(() => t(this.#e)));
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
    this.#f += t, this.#f === 0 && (this.#t = !1, this.#s && Kr(this.#s, () => {
      this.#s = null;
    }), this.#c && (this.#e.before(this.#c), this.#c = null));
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(t) {
    this.#y(t), this.#d += t, this.#h && Jr(this.#h, this.#d);
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
    this.#l && (ct(this.#l), this.#l = null), this.#s && (ct(this.#s), this.#s = null), this.#a && (ct(this.#a), this.#a = null), xe && (Ge(
      /** @type {TemplateNode} */
      this.#n
    ), ye(), Ge(Ti()));
    var o = !1, i = !1;
    const s = () => {
      if (o) {
        yg();
        return;
      }
      o = !0, i && pg(), sn.ensure(), this.#d = 0, this.#a !== null && Kr(this.#a, () => {
        this.#a = null;
      }), this.#t = this.has_pending_snippet(), this.#l = this.#v(() => (this.#g = !1, zt(() => this.#i(this.#e)))), this.#f > 0 ? this.#p() : this.#t = !1;
    };
    var a = He;
    try {
      It(null), i = !0, n?.(t, s), i = !1;
    } catch (l) {
      Gr(l, this.#o && this.#o.parent);
    } finally {
      It(a);
    }
    r && hr(() => {
      this.#a = this.#v(() => {
        sn.ensure(), this.#g = !0;
        try {
          return zt(() => {
            r(
              this.#e,
              () => t,
              () => s
            );
          });
        } catch (l) {
          return Gr(
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
function Ur(e, t) {
  return t;
}
function Pg(e, t, n) {
  for (var r = [], o = t.length, i = 0; i < o; i++)
    Va(t[i].e, r, !0);
  _u(r, () => {
    var s = r.length === 0 && n !== null;
    if (s) {
      var a = (
        /** @type {Element} */
        n
      ), l = (
        /** @type {Element} */
        a.parentNode
      );
      Da(l), l.append(a), e.items.clear(), nn(e, t[0].prev, t[o - 1].next);
    }
    for (var c = 0; c < o; c++) {
      var d = t[c];
      s || (e.items.delete(d.k), nn(e, d.prev, d.next)), ct(d.e, !s);
    }
    e.first === t[0] && (e.first = t[0].prev);
  });
}
function Ct(e, t, n, r, o, i = null) {
  var s = e, a = /* @__PURE__ */ new Map(), l = null, c = (t & Hc) !== 0, d = (t & Ic) !== 0, f = (t & Lc) !== 0;
  if (c) {
    var h = (
      /** @type {Element} */
      e
    );
    s = xe ? Ge(
      /** @type {Comment | Text} */
      /* @__PURE__ */ tt(h)
    ) : h.appendChild(kt());
  }
  xe && Hn();
  var g = null, y = /* @__PURE__ */ Ma(() => {
    var _ = n();
    return es(_) ? _ : _ == null ? [] : Sa(_);
  }), w, b = !0;
  function m() {
    Tg(E, w, s, t, r), g !== null && (w.length === 0 ? (g.fragment ? (s.before(g.fragment), g.fragment = null) : za(g.effect), k.first = g.effect) : Kr(g.effect, () => {
      g = null;
    }));
  }
  var k = zr(() => {
    w = /** @type {V[]} */
    u(y);
    var _ = w.length;
    let S = !1;
    if (xe) {
      var T = Xc(s) === Qi;
      T !== (_ === 0) && (s = Ti(), Ge(s), $t(!1), S = !0);
    }
    for (var z = /* @__PURE__ */ new Set(), V = (
      /** @type {Batch} */
      Xe
    ), L = null, Y = gu(), H = 0; H < _; H += 1) {
      xe && Me.nodeType === fr && /** @type {Comment} */
      Me.data === ka && (s = /** @type {Comment} */
      Me, S = !0, $t(!1));
      var N = w[H], M = r(N, H), x = b ? null : a.get(M);
      x ? (d && Jr(x.v, N), f ? Jr(
        /** @type {Value<number>} */
        x.i,
        H
      ) : x.i = H, Y && V.skipped_effects.delete(x.e)) : (x = $g(
        b ? s : null,
        L,
        N,
        M,
        H,
        o,
        t,
        n
      ), b && (x.o = !0, L === null ? l = x : L.next = x, L = x), a.set(M, x)), z.add(M);
    }
    if (_ === 0 && i && !g)
      if (b)
        g = {
          fragment: null,
          effect: zt(() => i(s))
        };
      else {
        var C = document.createDocumentFragment(), A = kt();
        C.append(A), g = {
          fragment: C,
          effect: zt(() => i(A))
        };
      }
    if (xe && _ > 0 && Ge(Ti()), !b)
      if (Y) {
        for (const [D, K] of a)
          z.has(D) || V.skipped_effects.add(K.e);
        V.oncommit(m), V.ondiscard(() => {
        });
      } else
        m();
    S && $t(!0), u(y);
  }), E = { effect: k, items: a, first: l };
  b = !1, xe && (s = Me);
}
function Tg(e, t, n, r, o) {
  var i = (r & Wh) !== 0, s = t.length, a = e.items, l = e.first, c, d = null, f, h = [], g = [], y, w, b, m;
  if (i)
    for (m = 0; m < s; m += 1)
      y = t[m], w = o(y, m), b = /** @type {EachItem} */
      a.get(w), b.o && (b.a?.measure(), (f ??= /* @__PURE__ */ new Set()).add(b));
  for (m = 0; m < s; m += 1) {
    if (y = t[m], w = o(y, m), b = /** @type {EachItem} */
    a.get(w), e.first ??= b, !b.o) {
      b.o = !0;
      var k = d ? d.next : l;
      nn(e, d, b), nn(e, b, k), ks(b, k, n), d = b, h = [], g = [], l = d.next;
      continue;
    }
    if ((b.e.f & Kt) !== 0 && (za(b.e), i && (b.a?.unfix(), (f ??= /* @__PURE__ */ new Set()).delete(b))), b !== l) {
      if (c !== void 0 && c.has(b)) {
        if (h.length < g.length) {
          var E = g[0], _;
          d = E.prev;
          var S = h[0], T = h[h.length - 1];
          for (_ = 0; _ < h.length; _ += 1)
            ks(h[_], E, n);
          for (_ = 0; _ < g.length; _ += 1)
            c.delete(g[_]);
          nn(e, S.prev, T.next), nn(e, d, S), nn(e, T, E), l = E, d = T, m -= 1, h = [], g = [];
        } else
          c.delete(b), ks(b, l, n), nn(e, b.prev, b.next), nn(e, b, d === null ? e.first : d.next), nn(e, d, b), d = b;
        continue;
      }
      for (h = [], g = []; l !== null && l.k !== w; )
        (l.e.f & Kt) === 0 && (c ??= /* @__PURE__ */ new Set()).add(l), g.push(l), l = l.next;
      if (l === null)
        continue;
      b = l;
    }
    h.push(b), d = b, l = b.next;
  }
  let z = a.size > s;
  if (l !== null || c !== void 0) {
    for (var V = c === void 0 ? [] : Sa(c); l !== null; )
      (l.e.f & Kt) === 0 && V.push(l), l = l.next;
    var L = V.length;
    if (z = a.size - L > s, L > 0) {
      var Y = (r & Hc) !== 0 && s === 0 ? n : null;
      if (i) {
        for (m = 0; m < L; m += 1)
          V[m].a?.measure();
        for (m = 0; m < L; m += 1)
          V[m].a?.fix();
      }
      Pg(e, V, Y);
    }
  }
  if (z)
    for (const H of a.values())
      H.o || (nn(e, d, H), d = H);
  e.effect.last = d && d.e, i && hr(() => {
    if (f !== void 0)
      for (b of f)
        b.a?.apply();
  });
}
function $g(e, t, n, r, o, i, s, a) {
  var l = (s & Ic) !== 0, c = (s & Yh) === 0, d = l ? c ? /* @__PURE__ */ cu(n, !1, !1) : sr(n) : n, f = (s & Lc) === 0 ? o : sr(o), h = {
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
      g.append(e = kt());
    }
    return h.e = zt(() => i(
      /** @type {Node} */
      e,
      d,
      f,
      a
    )), t !== null && (t.next = h), h;
  } finally {
  }
}
function ks(e, t, n) {
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
      /* @__PURE__ */ Wt(i)
    );
    o.before(i), i = s;
  }
}
function nn(e, t, n) {
  t === null ? (e.first = n, e.effect.first = n && n.e) : (t.e.next && (t.e.next.prev = null), t.next = n, t.e.next = n && n.e), n !== null && (n.e.prev && (n.e.prev.next = null), n.prev = t, n.e.prev = t && t.e);
}
function iu(e, t, n, r) {
  const o = Bo() ? Ko : Ma;
  if (n.length === 0 && e.length === 0) {
    r(t.map(o));
    return;
  }
  var i = Xe, s = (
    /** @type {Effect} */
    De
  ), a = Mg();
  function l() {
    Promise.all(n.map((c) => /* @__PURE__ */ Ag(c))).then((c) => {
      a();
      try {
        r([...t.map(o), ...c]);
      } catch (d) {
        (s.f & zn) === 0 && Gr(d, s);
      }
      i?.deactivate(), $i();
    }).catch((c) => {
      Gr(c, s);
    });
  }
  e.length > 0 ? Promise.all(e).then(() => {
    a();
    try {
      return l();
    } finally {
      i?.deactivate(), $i();
    }
  }) : l();
}
function Mg() {
  var e = De, t = He, n = je, r = Xe;
  return function(i = !0) {
    Jt(e), It(t), Xr(n), i && r?.activate();
  };
}
function $i() {
  Jt(null), It(null), Xr(null);
}
// @__NO_SIDE_EFFECTS__
function Ko(e) {
  var t = gt | Rt, n = He !== null && (He.f & gt) !== 0 ? (
    /** @type {Derived} */
    He
  ) : null;
  return De !== null && (De.f |= Vr), {
    ctx: je,
    deps: null,
    effects: null,
    equals: qc,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      dt
    ),
    wv: 0,
    parent: n ?? De,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Ag(e, t) {
  let n = (
    /** @type {Effect | null} */
    De
  );
  n === null && sg();
  var r = (
    /** @type {Boundary} */
    n.b
  ), o = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), i = sr(
    /** @type {V} */
    dt
  ), s = !He, a = /* @__PURE__ */ new Map();
  return Bg(() => {
    var l = Wc();
    o = l.promise;
    try {
      Promise.resolve(e()).then(l.resolve, l.reject).then(() => {
        c === Xe && c.committed && c.deactivate(), $i();
      });
    } catch (h) {
      l.reject(h), $i();
    }
    var c = (
      /** @type {Batch} */
      Xe
    );
    if (s) {
      var d = !r.is_pending();
      r.update_pending_count(1), c.increment(d), a.get(c)?.reject(Br), a.delete(c), a.set(c, l);
    }
    const f = (h, g = void 0) => {
      if (c.activate(), g)
        g !== Br && (i.f |= tr, Jr(i, g));
      else {
        (i.f & tr) !== 0 && (i.f ^= tr), Jr(i, h);
        for (const [y, w] of a) {
          if (a.delete(y), y === c) break;
          w.reject(Br);
        }
      }
      s && (r.update_pending_count(-1), c.decrement(d));
    };
    l.promise.then(f, (h) => f(null, h || "unknown"));
  }), as(() => {
    for (const l of a.values())
      l.reject(Br);
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
function P(e) {
  const t = /* @__PURE__ */ Ko(e);
  return Su(t), t;
}
// @__NO_SIDE_EFFECTS__
function Ma(e) {
  const t = /* @__PURE__ */ Ko(e);
  return t.equals = Uc, t;
}
function su(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      ct(
        /** @type {Effect} */
        t[n]
      );
  }
}
function Dg(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & gt) === 0)
      return (t.f & zn) === 0 ? (
        /** @type {Effect} */
        t
      ) : null;
    t = t.parent;
  }
  return null;
}
function Aa(e) {
  var t, n = De;
  Jt(Dg(e));
  try {
    e.f &= ~Tr, su(e), t = Tu(e);
  } finally {
    Jt(n);
  }
  return t;
}
function au(e) {
  var t = Aa(e);
  if (e.equals(t) || (Xe?.is_fork || (e.v = t), e.wv = Nu()), !Ir)
    if (Gt !== null)
      (ko() || Xe?.is_fork) && Gt.set(e, t);
    else {
      var n = (e.f & ln) === 0 ? Zn : bt;
      _t(e, n);
    }
}
let Ws = /* @__PURE__ */ new Set();
const nr = /* @__PURE__ */ new Map();
let lu = !1;
function sr(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: qc,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function Pe(e, t) {
  const n = sr(e);
  return Su(n), n;
}
// @__NO_SIDE_EFFECTS__
function cu(e, t = !1, n = !0) {
  const r = sr(e);
  return t || (r.equals = Uc), so && n && je !== null && je.l !== null && (je.l.s ??= []).push(r), r;
}
function ee(e, t, n = !1) {
  He !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!wn || (He.f & gl) !== 0) && Bo() && (He.f & (gt | Fn | Pa | gl)) !== 0 && !In?.includes(e) && vg();
  let r = n ? xt(t) : t;
  return Jr(e, r);
}
function Jr(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    Ir ? nr.set(e, t) : nr.set(e, n), e.v = t;
    var r = sn.ensure();
    r.capture(e, n), (e.f & gt) !== 0 && ((e.f & Rt) !== 0 && Aa(
      /** @type {Derived} */
      e
    ), _t(e, (e.f & ln) !== 0 ? bt : Zn)), e.wv = Nu(), uu(e, Rt), Bo() && De !== null && (De.f & bt) !== 0 && (De.f & (Kn | dr)) === 0 && (jt === null ? Kg([e]) : jt.push(e)), !r.is_fork && Ws.size > 0 && !lu && Og();
  }
  return t;
}
function Og() {
  lu = !1;
  var e = rr;
  Mi(!0);
  const t = Array.from(Ws);
  try {
    for (const n of t)
      (n.f & bt) !== 0 && _t(n, Zn), Wo(n) && Eo(n);
  } finally {
    Mi(e);
  }
  Ws.clear();
}
function pl(e, t = 1) {
  var n = u(e), r = t === 1 ? n++ : n--;
  return ee(e, n), r;
}
function _o(e) {
  ee(e, e.v + 1);
}
function uu(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = Bo(), o = n.length, i = 0; i < o; i++) {
      var s = n[i], a = s.f;
      if (!(!r && s === De)) {
        var l = (a & Rt) === 0;
        if (l && _t(s, t), (a & gt) !== 0) {
          var c = (
            /** @type {Derived} */
            s
          );
          Gt?.delete(c), (a & Tr) === 0 && (a & ln && (s.f |= Tr), uu(c, Zn));
        } else l && ((a & Fn) !== 0 && Tn !== null && Tn.add(
          /** @type {Effect} */
          s
        ), $r(
          /** @type {Effect} */
          s
        ));
      }
    }
}
function xt(e) {
  if (typeof e != "object" || e === null || bn in e)
    return e;
  const t = ts(e);
  if (t !== Zc && t !== ng)
    return e;
  var n = /* @__PURE__ */ new Map(), r = es(e), o = /* @__PURE__ */ Pe(0), i = Sr, s = (a) => {
    if (Sr === i)
      return a();
    var l = He, c = Sr;
    It(null), bl(i);
    var d = a();
    return It(l), bl(c), d;
  };
  return r && n.set("length", /* @__PURE__ */ Pe(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(a, l, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && hg();
        var d = n.get(l);
        return d === void 0 ? d = s(() => {
          var f = /* @__PURE__ */ Pe(c.value);
          return n.set(l, f), f;
        }) : ee(d, c.value, !0), !0;
      },
      deleteProperty(a, l) {
        var c = n.get(l);
        if (c === void 0) {
          if (l in a) {
            const d = s(() => /* @__PURE__ */ Pe(dt));
            n.set(l, d), _o(o);
          }
        } else
          ee(c, dt), _o(o);
        return !0;
      },
      get(a, l, c) {
        if (l === bn)
          return e;
        var d = n.get(l), f = l in a;
        if (d === void 0 && (!f || Vn(a, l)?.writable) && (d = s(() => {
          var g = xt(f ? a[l] : dt), y = /* @__PURE__ */ Pe(g);
          return y;
        }), n.set(l, d)), d !== void 0) {
          var h = u(d);
          return h === dt ? void 0 : h;
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
          if (f !== void 0 && h !== dt)
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
        if (l === bn)
          return !0;
        var c = n.get(l), d = c !== void 0 && c.v !== dt || Reflect.has(a, l);
        if (c !== void 0 || De !== null && (!d || Vn(a, l)?.writable)) {
          c === void 0 && (c = s(() => {
            var h = d ? xt(a[l]) : dt, g = /* @__PURE__ */ Pe(h);
            return g;
          }), n.set(l, c));
          var f = u(c);
          if (f === dt)
            return !1;
        }
        return d;
      },
      set(a, l, c, d) {
        var f = n.get(l), h = l in a;
        if (r && l === "length")
          for (var g = c; g < /** @type {Source<number>} */
          f.v; g += 1) {
            var y = n.get(g + "");
            y !== void 0 ? ee(y, dt) : g in a && (y = s(() => /* @__PURE__ */ Pe(dt)), n.set(g + "", y));
          }
        if (f === void 0)
          (!h || Vn(a, l)?.writable) && (f = s(() => /* @__PURE__ */ Pe(void 0)), ee(f, xt(c)), n.set(l, f));
        else {
          h = f.v !== dt;
          var w = s(() => xt(c));
          ee(f, w);
        }
        var b = Reflect.getOwnPropertyDescriptor(a, l);
        if (b?.set && b.set.call(d, c), !h) {
          if (r && typeof l == "string") {
            var m = (
              /** @type {Source<number>} */
              n.get("length")
            ), k = Number(l);
            Number.isInteger(k) && k >= m.v && ee(m, k + 1);
          }
          _o(o);
        }
        return !0;
      },
      ownKeys(a) {
        u(o);
        var l = Reflect.ownKeys(a).filter((f) => {
          var h = n.get(f);
          return h === void 0 || h.v !== dt;
        });
        for (var [c, d] of n)
          d.v !== dt && !(c in a) && l.push(c);
        return l;
      },
      setPrototypeOf() {
        gg();
      }
    }
  );
}
function ml(e) {
  try {
    if (e !== null && typeof e == "object" && bn in e)
      return e[bn];
  } catch {
  }
  return e;
}
function Vg(e, t) {
  return Object.is(ml(e), ml(t));
}
var Vt, du, fu, hu;
function Ys() {
  if (Vt === void 0) {
    Vt = window, du = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    fu = Vn(t, "firstChild").get, hu = Vn(t, "nextSibling").get, hl(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), hl(n) && (n.__t = void 0);
  }
}
function kt(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function tt(e) {
  return fu.call(e);
}
// @__NO_SIDE_EFFECTS__
function Wt(e) {
  return hu.call(e);
}
function F(e, t) {
  if (!xe)
    return /* @__PURE__ */ tt(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ tt(Me)
  );
  if (n === null)
    n = Me.appendChild(kt());
  else if (t && n.nodeType !== is) {
    var r = kt();
    return n?.before(r), Ge(r), r;
  }
  return Ge(n), n;
}
function ie(e, t = !1) {
  if (!xe) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ tt(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Wt(n) : n;
  }
  if (t && Me?.nodeType !== is) {
    var r = kt();
    return Me?.before(r), Ge(r), r;
  }
  return Me;
}
function I(e, t = 1, n = !1) {
  let r = xe ? Me : e;
  for (var o; t--; )
    o = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ Wt(r);
  if (!xe)
    return r;
  if (n && r?.nodeType !== is) {
    var i = kt();
    return r === null ? o?.after(i) : r.before(i), Ge(i), i;
  }
  return Ge(r), /** @type {TemplateNode} */
  r;
}
function Da(e) {
  e.textContent = "";
}
function gu() {
  return !1;
}
function zg(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, hr(() => {
      document.activeElement === n && e.focus();
    });
  }
}
function Ig(e) {
  xe && /* @__PURE__ */ tt(e) !== null && Da(e);
}
let yl = !1;
function Lg() {
  yl || (yl = !0, document.addEventListener(
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
function Oa(e) {
  var t = He, n = De;
  It(null), Jt(null);
  try {
    return e();
  } finally {
    It(t), Jt(n);
  }
}
function vu(e) {
  De === null && (He === null && cg(), lg()), Ir && ag();
}
function Hg(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Qt(e, t, n) {
  var r = De;
  r !== null && (r.f & Kt) !== 0 && (e |= Kt);
  var o = {
    ctx: je,
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
      Eo(o), o.f |= os;
    } catch (a) {
      throw ct(o), a;
    }
  else t !== null && $r(o);
  var i = o;
  if (n && i.deps === null && i.teardown === null && i.nodes_start === null && i.first === i.last && // either `null`, or a singular child
  (i.f & Vr) === 0 && (i = i.first, (e & Fn) !== 0 && (e & Ln) !== 0 && i !== null && (i.f |= Ln)), i !== null && (i.parent = r, r !== null && Hg(i, r), He !== null && (He.f & gt) !== 0 && (e & dr) === 0)) {
    var s = (
      /** @type {Derived} */
      He
    );
    (s.effects ??= []).push(i);
  }
  return o;
}
function ko() {
  return He !== null && !wn;
}
function as(e) {
  const t = Qt(ns, null, !1);
  return _t(t, bt), t.teardown = e, t;
}
function qe(e) {
  vu();
  var t = (
    /** @type {Effect} */
    De.f
  ), n = !He && (t & Kn) !== 0 && (t & os) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      je
    );
    (r.e ??= []).push(e);
  } else
    return pu(e);
}
function pu(e) {
  return Qt(Ea | jc, e, !1);
}
function Xt(e) {
  return vu(), Qt(ns | jc, e, !0);
}
function ao(e) {
  sn.ensure();
  const t = Qt(dr | Vr, e, !0);
  return () => {
    ct(t);
  };
}
function Rg(e) {
  sn.ensure();
  const t = Qt(dr | Vr, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Kr(t, () => {
      ct(t), r(void 0);
    }) : (ct(t), r(void 0));
  });
}
function lo(e) {
  return Qt(Ea, e, !1);
}
function Bg(e) {
  return Qt(Pa | Vr, e, !0);
}
function Zo(e, t = 0) {
  return Qt(ns | t, e, !0);
}
function Se(e, t = [], n = [], r = []) {
  iu(r, t, n, (o) => {
    Qt(ns, () => e(...o.map(u)), !0);
  });
}
function zr(e, t = 0) {
  var n = Qt(Fn | t, e, !0);
  return n;
}
function mu(e, t = 0) {
  var n = Qt(Yc | t, e, !0);
  return n;
}
function zt(e) {
  return Qt(Kn | Vr, e, !0);
}
function yu(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Ir, r = He;
    wl(!0), It(null);
    try {
      t.call(null);
    } finally {
      wl(n), It(r);
    }
  }
}
function wu(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const o = n.ac;
    o !== null && Oa(() => {
      o.abort(Br);
    });
    var r = n.next;
    (n.f & dr) !== 0 ? n.parent = null : ct(n, t), n = r;
  }
}
function Fg(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & Kn) === 0 && ct(t), t = n;
  }
}
function ct(e, t = !0) {
  var n = !1;
  (t || (e.f & Na) !== 0) && e.nodes_start !== null && e.nodes_end !== null && (bu(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), n = !0), wu(e, t && !n), Ai(e, 0), _t(e, zn);
  var r = e.transitions;
  if (r !== null)
    for (const i of r)
      i.stop();
  yu(e);
  var o = e.parent;
  o !== null && o.first !== null && xu(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = e.ac = null;
}
function bu(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Wt(e)
    );
    e.remove(), e = n;
  }
}
function xu(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function Kr(e, t, n = !0) {
  var r = [];
  Va(e, r, !0), _u(r, () => {
    n && ct(e), t && t();
  });
}
function _u(e, t) {
  var n = e.length;
  if (n > 0) {
    var r = () => --n || t();
    for (var o of e)
      o.out(r);
  } else
    t();
}
function Va(e, t, n) {
  if ((e.f & Kt) === 0) {
    if (e.f ^= Kt, e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || n) && t.push(s);
    for (var r = e.first; r !== null; ) {
      var o = r.next, i = (r.f & Ln) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (r.f & Kn) !== 0 && (e.f & Fn) !== 0;
      Va(r, t, i ? n : !1), r = o;
    }
  }
}
function za(e) {
  Cu(e, !0);
}
function Cu(e, t) {
  if ((e.f & Kt) !== 0) {
    e.f ^= Kt, (e.f & bt) === 0 && (_t(e, Rt), $r(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, o = (n.f & Ln) !== 0 || (n.f & Kn) !== 0;
      Cu(n, o ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || t) && i.in();
  }
}
function ku(e, t) {
  for (var n = e.nodes_start, r = e.nodes_end; n !== null; ) {
    var o = n === r ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Wt(n)
    );
    t.append(n), n = o;
  }
}
let rr = !1;
function Mi(e) {
  rr = e;
}
let Ir = !1;
function wl(e) {
  Ir = e;
}
let He = null, wn = !1;
function It(e) {
  He = e;
}
let De = null;
function Jt(e) {
  De = e;
}
let In = null;
function Su(e) {
  He !== null && (In === null ? In = [e] : In.push(e));
}
let Tt = null, Ft = 0, jt = null;
function Kg(e) {
  jt = e;
}
let Eu = 1, So = 0, Sr = So;
function bl(e) {
  Sr = e;
}
function Nu() {
  return ++Eu;
}
function Wo(e) {
  var t = e.f;
  if ((t & Rt) !== 0)
    return !0;
  if (t & gt && (e.f &= ~Tr), (t & Zn) !== 0) {
    var n = e.deps;
    if (n !== null)
      for (var r = n.length, o = 0; o < r; o++) {
        var i = n[o];
        if (Wo(
          /** @type {Derived} */
          i
        ) && au(
          /** @type {Derived} */
          i
        ), i.wv > e.wv)
          return !0;
      }
    (t & ln) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    Gt === null && _t(e, bt);
  }
  return !1;
}
function Pu(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !In?.includes(e))
    for (var o = 0; o < r.length; o++) {
      var i = r[o];
      (i.f & gt) !== 0 ? Pu(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? _t(i, Rt) : (i.f & bt) !== 0 && _t(i, Zn), $r(
        /** @type {Effect} */
        i
      ));
    }
}
function Tu(e) {
  var t = Tt, n = Ft, r = jt, o = He, i = In, s = je, a = wn, l = Sr, c = e.f;
  Tt = /** @type {null | Value[]} */
  null, Ft = 0, jt = null, He = (c & (Kn | dr)) === 0 ? e : null, In = null, Xr(e.ctx), wn = !1, Sr = ++So, e.ac !== null && (Oa(() => {
    e.ac.abort(Br);
  }), e.ac = null);
  try {
    e.f |= Ks;
    var d = (
      /** @type {Function} */
      e.fn
    ), f = d(), h = e.deps;
    if (Tt !== null) {
      var g;
      if (Ai(e, Ft), h !== null && Ft > 0)
        for (h.length = Ft + Tt.length, g = 0; g < Tt.length; g++)
          h[Ft + g] = Tt[g];
      else
        e.deps = h = Tt;
      if (rr && ko() && (e.f & ln) !== 0)
        for (g = Ft; g < h.length; g++)
          (h[g].reactions ??= []).push(e);
    } else h !== null && Ft < h.length && (Ai(e, Ft), h.length = Ft);
    if (Bo() && jt !== null && !wn && h !== null && (e.f & (gt | Zn | Rt)) === 0)
      for (g = 0; g < /** @type {Source[]} */
      jt.length; g++)
        Pu(
          jt[g],
          /** @type {Effect} */
          e
        );
    return o !== null && o !== e && (So++, jt !== null && (r === null ? r = jt : r.push(.../** @type {Source[]} */
    jt))), (e.f & tr) !== 0 && (e.f ^= tr), f;
  } catch (y) {
    return tu(y);
  } finally {
    e.f ^= Ks, Tt = t, Ft = n, jt = r, He = o, In = i, Xr(s), wn = a, Sr = l;
  }
}
function Zg(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = tg.call(n, e);
    if (r !== -1) {
      var o = n.length - 1;
      o === 0 ? n = t.reactions = null : (n[r] = n[o], n.pop());
    }
  }
  n === null && (t.f & gt) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Tt === null || !Tt.includes(t)) && (_t(t, Zn), (t.f & ln) !== 0 && (t.f ^= ln, t.f &= ~Tr), su(
    /** @type {Derived} **/
    t
  ), Ai(
    /** @type {Derived} **/
    t,
    0
  ));
}
function Ai(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      Zg(e, n[r]);
}
function Eo(e) {
  var t = e.f;
  if ((t & zn) === 0) {
    _t(e, bt);
    var n = De, r = rr;
    De = e, rr = !0;
    try {
      (t & (Fn | Yc)) !== 0 ? Fg(e) : wu(e), yu(e);
      var o = Tu(e);
      e.teardown = typeof o == "function" ? o : null, e.wv = Eu;
      var i;
      Bs && wg && (e.f & Rt) !== 0 && e.deps;
    } finally {
      rr = r, De = n;
    }
  }
}
function u(e) {
  var t = e.f, n = (t & gt) !== 0;
  if (He !== null && !wn) {
    var r = De !== null && (De.f & zn) !== 0;
    if (!r && !In?.includes(e)) {
      var o = He.deps;
      if ((He.f & Ks) !== 0)
        e.rv < So && (e.rv = So, Tt === null && o !== null && o[Ft] === e ? Ft++ : Tt === null ? Tt = [e] : Tt.includes(e) || Tt.push(e));
      else {
        (He.deps ??= []).push(e);
        var i = e.reactions;
        i === null ? e.reactions = [He] : i.includes(He) || i.push(He);
      }
    }
  }
  if (Ir) {
    if (nr.has(e))
      return nr.get(e);
    if (n) {
      var s = (
        /** @type {Derived} */
        e
      ), a = s.v;
      return ((s.f & bt) === 0 && s.reactions !== null || Mu(s)) && (a = Aa(s)), nr.set(s, a), a;
    }
  } else n && (!Gt?.has(e) || Xe?.is_fork && !ko()) && (s = /** @type {Derived} */
  e, Wo(s) && au(s), rr && ko() && (s.f & ln) === 0 && $u(s));
  if (Gt?.has(e))
    return Gt.get(e);
  if ((e.f & tr) !== 0)
    throw e.v;
  return e.v;
}
function $u(e) {
  if (e.deps !== null) {
    e.f ^= ln;
    for (const t of e.deps)
      (t.reactions ??= []).push(e), (t.f & gt) !== 0 && (t.f & ln) === 0 && $u(
        /** @type {Derived} */
        t
      );
  }
}
function Mu(e) {
  if (e.v === dt) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (nr.has(t) || (t.f & gt) !== 0 && Mu(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function st(e) {
  var t = wn;
  try {
    return wn = !0, e();
  } finally {
    wn = t;
  }
}
const Wg = -7169;
function _t(e, t) {
  e.f = e.f & Wg | t;
}
function Yg(e, t) {
  var n = {};
  for (var r in e)
    t.includes(r) || (n[r] = e[r]);
  for (var o of Object.getOwnPropertySymbols(e))
    Object.propertyIsEnumerable.call(e, o) && !t.includes(o) && (n[o] = e[o]);
  return n;
}
function Ia(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (bn in e)
      js(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && bn in n && js(n);
      }
  }
}
function js(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e)
      try {
        js(e[r], t);
      } catch {
      }
    const n = ts(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = Kc(n);
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
const Au = /* @__PURE__ */ new Set(), Xs = /* @__PURE__ */ new Set();
function La(e, t, n, r = {}) {
  function o(i) {
    if (r.capture || po.call(t, i), !i.cancelBubble)
      return Oa(() => n?.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? hr(() => {
    t.addEventListener(e, o, r);
  }) : t.addEventListener(e, o, r), o;
}
function ar(e, t, n, r = {}) {
  var o = La(t, e, n, r);
  return () => {
    e.removeEventListener(t, o, r);
  };
}
function Di(e, t, n, r, o) {
  var i = { capture: r, passive: o }, s = La(e, t, n, i);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && as(() => {
    t.removeEventListener(e, s, i);
  });
}
function gr(e) {
  for (var t = 0; t < e.length; t++)
    Au.add(e[t]);
  for (var n of Xs)
    n(e);
}
let xl = null;
function po(e) {
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, o = e.composedPath?.() || [], i = (
    /** @type {null | Element} */
    o[0] || e.target
  );
  xl = e;
  var s = 0, a = xl === e && e.__root;
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
    Pi(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    var d = He, f = De;
    It(null), Jt(null);
    try {
      for (var h, g = []; i !== null; ) {
        var y = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var w = i["__" + r];
          w != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i) && w.call(i, e);
        } catch (b) {
          h ? g.push(b) : h = b;
        }
        if (e.cancelBubble || y === t || y === null)
          break;
        i = y;
      }
      if (h) {
        for (let b of g)
          queueMicrotask(() => {
            throw b;
          });
        throw h;
      }
    } finally {
      e.__root = t, delete e.currentTarget, It(d), Jt(f);
    }
  }
}
function Ha(e) {
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
  var n = (t & Bc) !== 0, r = (t & Uh) !== 0, o, i = !e.startsWith("<!>");
  return () => {
    if (xe)
      return Ht(Me, null), Me;
    o === void 0 && (o = Ha(i ? e : "<!>" + e), n || (o = /** @type {Node} */
    /* @__PURE__ */ tt(o)));
    var s = (
      /** @type {TemplateNode} */
      r || du ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ tt(s)
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
function jg(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), o = (t & Bc) !== 0, i = `<${n}>${r ? e : "<!>" + e}</${n}>`, s;
  return () => {
    if (xe)
      return Ht(Me, null), Me;
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        Ha(i)
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
    var c = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    if (o) {
      var d = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ tt(c)
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
  return /* @__PURE__ */ jg(e, t, "svg");
}
function Ne(e = "") {
  if (!xe) {
    var t = kt(e + "");
    return Ht(t, t), t;
  }
  var n = Me;
  return n.nodeType !== is && (n.before(n = kt()), Ge(n)), Ht(n, n), n;
}
function Ee() {
  if (xe)
    return Ht(Me, null), Me;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = kt();
  return e.append(t, n), Ht(t, n), e;
}
function O(e, t) {
  if (xe) {
    var n = (
      /** @type {Effect} */
      De
    );
    ((n.f & os) === 0 || n.nodes_end === null) && (n.nodes_end = Me), Hn();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function Xg(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const qg = [
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
function Gg(e) {
  return qg.includes(e);
}
const Ug = {
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
function Jg(e) {
  return e = e.toLowerCase(), Ug[e] ?? e;
}
const Qg = ["touchstart", "touchmove"];
function ev(e) {
  return Qg.includes(e);
}
const tv = (
  /** @type {const} */
  ["textarea", "script", "style", "title"]
);
function nv(e) {
  return tv.includes(
    /** @type {typeof RAW_TEXT_ELEMENTS[number]} */
    e
  );
}
function We(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = n + "");
}
function Du(e, t) {
  return Ou(e, t);
}
function rv(e, t) {
  Ys(), t.intro = t.intro ?? !1;
  const n = t.target, r = xe, o = Me;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ tt(n)
    ); i && (i.nodeType !== fr || /** @type {Comment} */
    i.data !== Fc); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ Wt(i);
    if (!i)
      throw Pr;
    $t(!0), Ge(
      /** @type {Comment} */
      i
    );
    const s = Ou(e, { ...t, anchor: i });
    return $t(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s instanceof Error && s.message.split(`
`).some((a) => a.startsWith("https://svelte.dev/e/")))
      throw s;
    return s !== Pr && console.warn("Failed to hydrate: ", s), t.recover === !1 && dg(), Ys(), Da(n), $t(!1), Du(e, t);
  } finally {
    $t(r), Ge(o);
  }
}
const Hr = /* @__PURE__ */ new Map();
function Ou(e, { target: t, anchor: n, props: r = {}, events: o, context: i, intro: s = !0 }) {
  Ys();
  var a = /* @__PURE__ */ new Set(), l = (f) => {
    for (var h = 0; h < f.length; h++) {
      var g = f[h];
      if (!a.has(g)) {
        a.add(g);
        var y = ev(g);
        t.addEventListener(g, po, { passive: y });
        var w = Hr.get(g);
        w === void 0 ? (document.addEventListener(g, po, { passive: y }), Hr.set(g, 1)) : Hr.set(g, w + 1);
      }
    }
  };
  l(Sa(Au)), Xs.add(l);
  var c = void 0, d = Rg(() => {
    var f = n ?? t.appendChild(kt());
    return Eg(
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
            je
          );
          g.c = i;
        }
        if (o && (r.$$events = o), xe && Ht(
          /** @type {TemplateNode} */
          h,
          null
        ), c = e(h, r) || {}, xe && (De.nodes_end = Me, Me === null || Me.nodeType !== fr || /** @type {Comment} */
        Me.data !== ka))
          throw Ro(), Pr;
        i && ue();
      }
    ), () => {
      for (var h of a) {
        t.removeEventListener(h, po);
        var g = (
          /** @type {number} */
          Hr.get(h)
        );
        --g === 0 ? (document.removeEventListener(h, po), Hr.delete(h)) : Hr.set(h, g);
      }
      Xs.delete(l), f !== n && f.parentNode?.removeChild(f);
    };
  });
  return qs.set(c, d), c;
}
let qs = /* @__PURE__ */ new WeakMap();
function ov(e, t) {
  const n = qs.get(e);
  return n ? (qs.delete(e), n(t)) : Promise.resolve();
}
class ls {
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
      Xe
    );
    if (this.#t.has(t)) {
      var n = (
        /** @type {Key} */
        this.#t.get(t)
      ), r = this.#e.get(n);
      if (r)
        za(r), this.#r.delete(n);
      else {
        var o = this.#n.get(n);
        o && (this.#e.set(n, o.effect), this.#n.delete(n), o.fragment.lastChild.remove(), this.anchor.before(o.fragment), r = o.effect);
      }
      for (const [i, s] of this.#t) {
        if (this.#t.delete(i), i === t)
          break;
        const a = this.#n.get(s);
        a && (ct(a.effect), this.#n.delete(s));
      }
      for (const [i, s] of this.#e) {
        if (i === n || this.#r.has(i)) continue;
        const a = () => {
          if (Array.from(this.#t.values()).includes(i)) {
            var c = document.createDocumentFragment();
            ku(s, c), c.append(kt()), this.#n.set(i, { effect: s, fragment: c });
          } else
            ct(s);
          this.#r.delete(i), this.#e.delete(i);
        };
        this.#i || !r ? (this.#r.add(i), Kr(s, a, !1)) : a();
      }
    }
  };
  /**
   * @param {Batch} batch
   */
  #l = (t) => {
    this.#t.delete(t);
    const n = Array.from(this.#t.values());
    for (const [r, o] of this.#n)
      n.includes(r) || (ct(o.effect), this.#n.delete(r));
  };
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, n) {
    var r = (
      /** @type {Batch} */
      Xe
    ), o = gu();
    if (n && !this.#e.has(t) && !this.#n.has(t))
      if (o) {
        var i = document.createDocumentFragment(), s = kt();
        i.append(s), this.#n.set(t, {
          effect: zt(() => n(s)),
          fragment: i
        });
      } else
        this.#e.set(
          t,
          zt(() => n(this.anchor))
        );
    if (this.#t.set(r, t), o) {
      for (const [a, l] of this.#e)
        a === t ? r.skipped_effects.delete(l) : r.skipped_effects.add(l);
      for (const [a, l] of this.#n)
        a === t ? r.skipped_effects.delete(l.effect) : r.skipped_effects.add(l.effect);
      r.oncommit(this.#o), r.ondiscard(this.#l);
    } else
      xe && (this.anchor = Me), this.#o();
  }
}
function Ue(e, t, ...n) {
  var r = new ls(e);
  zr(() => {
    const o = t() ?? null;
    r.ensure(o, o && ((i) => o(i, ...n)));
  }, Ln);
}
function Sn(e) {
  je === null && $a(), so && je.l !== null ? iv(je).m.push(e) : qe(() => {
    const t = st(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Yo(e) {
  je === null && $a(), Sn(() => () => st(e));
}
function iv(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ??= { a: [], b: [], m: [] };
}
function ae(e, t, n = !1) {
  xe && Hn();
  var r = new ls(e), o = n ? Ln : 0;
  function i(s, a) {
    if (xe) {
      const c = Xc(e) === Qi;
      if (s === c) {
        var l = Ti();
        Ge(l), r.anchor = l, $t(!1), r.ensure(s, a), $t(!0);
        return;
      }
    }
    r.ensure(s, a);
  }
  zr(() => {
    var s = !1;
    t((a, l = !0) => {
      s = !0, i(l, a);
    }), s || i(!1, null);
  }, o);
}
function sv(e, t) {
  xe && Ge(
    /** @type {TemplateNode} */
    /* @__PURE__ */ tt(e)
  ), Zo(() => {
    var n = t();
    for (var r in n) {
      var o = n[r];
      o ? e.style.setProperty(r, o) : e.style.removeProperty(r);
    }
  });
}
function cs(e, t, n = !1, r = !1, o = !1) {
  var i = e, s = "";
  Se(() => {
    var a = (
      /** @type {Effect} */
      De
    );
    if (s === (s = t() ?? "")) {
      xe && Hn();
      return;
    }
    if (a.nodes_start !== null && (bu(
      a.nodes_start,
      /** @type {TemplateNode} */
      a.nodes_end
    ), a.nodes_start = a.nodes_end = null), s !== "") {
      if (xe) {
        Me.data;
        for (var l = Hn(), c = l; l !== null && (l.nodeType !== fr || /** @type {Comment} */
        l.data !== ""); )
          c = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ Wt(l);
        if (l === null)
          throw Ro(), Pr;
        Ht(Me, c), i = Ge(l);
        return;
      }
      var d = s + "";
      n ? d = `<svg>${d}</svg>` : r && (d = `<math>${d}</math>`);
      var f = Ha(d);
      if ((n || r) && (f = /** @type {Element} */
      /* @__PURE__ */ tt(f)), Ht(
        /** @type {TemplateNode} */
        /* @__PURE__ */ tt(f),
        /** @type {TemplateNode} */
        f.lastChild
      ), n || r)
        for (; /* @__PURE__ */ tt(f); )
          i.before(
            /** @type {Node} */
            /* @__PURE__ */ tt(f)
          );
      else
        i.before(f);
    }
  });
}
function us(e, t, n) {
  xe && Hn();
  var r = new ls(e);
  zr(() => {
    var o = t() ?? null;
    r.ensure(o, o && ((i) => n(i, o)));
  }, Ln);
}
function av(e, t, n, r, o, i) {
  let s = xe;
  xe && Hn();
  var a = null;
  xe && Me.nodeType === ig && (a = /** @type {Element} */
  Me, Hn());
  var l = (
    /** @type {TemplateNode} */
    xe ? Me : e
  ), c = new ls(l, !1);
  zr(() => {
    const d = t() || null;
    var f = d === "svg" ? Qh : null;
    if (d === null) {
      c.ensure(null, null);
      return;
    }
    return c.ensure(d, (h) => {
      if (d) {
        if (a = xe ? (
          /** @type {Element} */
          a
        ) : f ? document.createElementNS(f, d) : document.createElement(d), Ht(a, a), r) {
          xe && nv(d) && a.append(document.createComment(""));
          var g = (
            /** @type {TemplateNode} */
            xe ? /* @__PURE__ */ tt(a) : a.appendChild(kt())
          );
          xe && (g === null ? $t(!1) : Ge(g)), r(a, g);
        }
        De.nodes_end = a, h.before(a);
      }
      xe && Ge(h);
    }), () => {
    };
  }, Ln), as(() => {
  }), s && ($t(!0), Ge(l));
}
function lv(e, t) {
  let n = null, r = xe;
  var o;
  if (xe) {
    n = Me;
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ tt(document.head)
    ); i !== null && (i.nodeType !== fr || /** @type {Comment} */
    i.data !== e); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ Wt(i);
    if (i === null)
      $t(!1);
    else {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Wt(i)
      );
      i.remove(), Ge(s);
    }
  }
  xe || (o = document.head.appendChild(kt()));
  try {
    zr(() => t(o), Na);
  } finally {
    r && ($t(!0), Ge(
      /** @type {TemplateNode} */
      n
    ));
  }
}
function Fe(e, t) {
  lo(() => {
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
function wt(e, t, n) {
  lo(() => {
    var r = st(() => t(e, n?.()) || {});
    if (n && r?.update) {
      var o = !1, i = (
        /** @type {any} */
        {}
      );
      Zo(() => {
        var s = n();
        Ia(s), o && Gc(i, s) && (i = s, r.update(s));
      }), o = !0;
    }
    if (r?.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function cv(e, t) {
  var n = void 0, r;
  mu(() => {
    n !== (n = t()) && (r && (ct(r), r = null), n && (r = zt(() => {
      lo(() => (
        /** @type {(node: Element) => void} */
        n(e)
      ));
    })));
  });
}
function Vu(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Vu(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function zu() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Vu(e)) && (r && (r += " "), r += t);
  return r;
}
function Wn(e) {
  return typeof e == "object" ? zu(e) : e ?? "";
}
const _l = [...` 	
\r\f \v\uFEFF`];
function uv(e, t, n) {
  var r = e == null ? "" : "" + e;
  if (t && (r = r ? r + " " + t : t), n) {
    for (var o in n)
      if (n[o])
        r = r ? r + " " + o : o;
      else if (r.length)
        for (var i = o.length, s = 0; (s = r.indexOf(o, s)) >= 0; ) {
          var a = s + i;
          (s === 0 || _l.includes(r[s - 1])) && (a === r.length || _l.includes(r[a])) ? r = (s === 0 ? "" : r.substring(0, s)) + r.substring(a + 1) : s = a;
        }
  }
  return r === "" ? null : r;
}
function Cl(e, t = !1) {
  var n = t ? " !important;" : ";", r = "";
  for (var o in e) {
    var i = e[o];
    i != null && i !== "" && (r += " " + o + ": " + i + n);
  }
  return r;
}
function Ss(e) {
  return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function dv(e, t) {
  if (t) {
    var n = "", r, o;
    if (Array.isArray(t) ? (r = t[0], o = t[1]) : r = t, e) {
      e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var i = !1, s = 0, a = !1, l = [];
      r && l.push(...Object.keys(r).map(Ss)), o && l.push(...Object.keys(o).map(Ss));
      var c = 0, d = -1;
      const w = e.length;
      for (var f = 0; f < w; f++) {
        var h = e[f];
        if (a ? h === "/" && e[f - 1] === "*" && (a = !1) : i ? i === h && (i = !1) : h === "/" && e[f + 1] === "*" ? a = !0 : h === '"' || h === "'" ? i = h : h === "(" ? s++ : h === ")" && s--, !a && i === !1 && s === 0) {
          if (h === ":" && d === -1)
            d = f;
          else if (h === ";" || f === w - 1) {
            if (d !== -1) {
              var g = Ss(e.substring(c, d).trim());
              if (!l.includes(g)) {
                h !== ";" && f++;
                var y = e.substring(c, f).trim();
                n += " " + y + ";";
              }
            }
            c = f + 1, d = -1;
          }
        }
      }
    }
    return r && (n += Cl(r)), o && (n += Cl(o, !0)), n = n.trim(), n === "" ? null : n;
  }
  return e == null ? null : String(e);
}
function Bt(e, t, n, r, o, i) {
  var s = e.__className;
  if (xe || s !== n || s === void 0) {
    var a = uv(n, r, i);
    (!xe || a !== e.getAttribute("class")) && (a == null ? e.removeAttribute("class") : t ? e.className = a : e.setAttribute("class", a)), e.__className = n;
  } else if (i && o !== i)
    for (var l in i) {
      var c = !!i[l];
      (o == null || c !== !!o[l]) && e.classList.toggle(l, c);
    }
  return i;
}
function Es(e, t = {}, n, r) {
  for (var o in n) {
    var i = n[o];
    t[o] !== i && (n[o] == null ? e.style.removeProperty(o) : e.style.setProperty(o, i, r));
  }
}
function vt(e, t, n, r) {
  var o = e.__style;
  if (xe || o !== t) {
    var i = dv(t, r);
    (!xe || i !== e.getAttribute("style")) && (i == null ? e.removeAttribute("style") : e.style.cssText = i), e.__style = t;
  } else r && (Array.isArray(r) ? (Es(e, n?.[0], r[0]), Es(e, n?.[1], r[1], "important")) : Es(e, n, r));
  return r;
}
function Gs(e, t, n = !1) {
  if (e.multiple) {
    if (t == null)
      return;
    if (!es(t))
      return mg();
    for (var r of e.options)
      r.selected = t.includes(kl(r));
    return;
  }
  for (r of e.options) {
    var o = kl(r);
    if (Vg(o, t)) {
      r.selected = !0;
      return;
    }
  }
  (!n || t !== void 0) && (e.selectedIndex = -1);
}
function fv(e) {
  var t = new MutationObserver(() => {
    Gs(e, e.__value);
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
  }), as(() => {
    t.disconnect();
  });
}
function kl(e) {
  return "__value" in e ? e.__value : e.value;
}
const Un = Symbol("class"), yn = Symbol("style"), Iu = Symbol("is custom element"), Lu = Symbol("is html");
function or(e) {
  if (xe) {
    var t = !1, n = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var r = e.value;
          Ce(e, "value", null), e.value = r;
        }
        if (e.hasAttribute("checked")) {
          var o = e.checked;
          Ce(e, "checked", null), e.checked = o;
        }
      }
    };
    e.__on_r = n, hr(n), Lg();
  }
}
function wi(e, t) {
  var n = ds(e);
  n.value === (n.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function Ns(e, t) {
  var n = ds(e);
  n.checked !== (n.checked = // treat null and undefined the same for the initial value
  t ?? void 0) && (e.checked = t);
}
function hv(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function Ce(e, t, n, r) {
  var o = ds(e);
  xe && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = n) && (t === "loading" && (e[og] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Hu(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function gv(e, t, n, r, o = !1, i = !1) {
  if (xe && o && e.tagName === "INPUT") {
    var s = (
      /** @type {HTMLInputElement} */
      e
    ), a = s.type === "checkbox" ? "defaultChecked" : "defaultValue";
    a in n || or(s);
  }
  var l = ds(e), c = l[Iu], d = !l[Lu];
  let f = xe && c;
  f && $t(!1);
  var h = t || {}, g = e.tagName === "OPTION";
  for (var y in t)
    y in n || (n[y] = null);
  n.class ? n.class = Wn(n.class) : (r || n[Un]) && (n.class = null), n[yn] && (n.style ??= null);
  var w = Hu(e);
  for (const T in n) {
    let z = n[T];
    if (g && T === "value" && z == null) {
      e.value = e.__value = "", h[T] = z;
      continue;
    }
    if (T === "class") {
      var b = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      Bt(e, b, z, r, t?.[Un], n[Un]), h[T] = z, h[Un] = n[Un];
      continue;
    }
    if (T === "style") {
      vt(e, z, t?.[yn], n[yn]), h[T] = z, h[yn] = n[yn];
      continue;
    }
    var m = h[T];
    if (!(z === m && !(z === void 0 && e.hasAttribute(T)))) {
      h[T] = z;
      var k = T[0] + T[1];
      if (k !== "$$")
        if (k === "on") {
          const V = {}, L = "$$" + T;
          let Y = T.slice(2);
          var E = Gg(Y);
          if (Xg(Y) && (Y = Y.slice(0, -7), V.capture = !0), !E && m) {
            if (z != null) continue;
            e.removeEventListener(Y, h[L], V), h[L] = null;
          }
          if (z != null)
            if (E)
              e[`__${Y}`] = z, gr([Y]);
            else {
              let H = function(N) {
                h[T].call(this, N);
              };
              h[L] = La(Y, e, H, V);
            }
          else E && (e[`__${Y}`] = void 0);
        } else if (T === "style")
          Ce(e, T, z);
        else if (T === "autofocus")
          zg(
            /** @type {HTMLElement} */
            e,
            !!z
          );
        else if (!c && (T === "__value" || T === "value" && z != null))
          e.value = e.__value = z;
        else if (T === "selected" && g)
          hv(
            /** @type {HTMLOptionElement} */
            e,
            z
          );
        else {
          var _ = T;
          d || (_ = Jg(_));
          var S = _ === "defaultValue" || _ === "defaultChecked";
          if (z == null && !c && !S)
            if (l[T] = null, _ === "value" || _ === "checked") {
              let V = (
                /** @type {HTMLInputElement} */
                e
              );
              const L = t === void 0;
              if (_ === "value") {
                let Y = V.defaultValue;
                V.removeAttribute(_), V.defaultValue = Y, V.value = V.__value = L ? Y : null;
              } else {
                let Y = V.defaultChecked;
                V.removeAttribute(_), V.defaultChecked = Y, V.checked = L ? Y : !1;
              }
            } else
              e.removeAttribute(T);
          else S || w.includes(_) && (c || typeof z != "string") ? (e[_] = z, _ in l && (l[_] = dt)) : typeof z != "function" && Ce(e, _, z);
        }
    }
  }
  return f && $t(!0), h;
}
function rt(e, t, n = [], r = [], o = [], i, s = !1, a = !1) {
  iu(o, n, r, (l) => {
    var c = void 0, d = {}, f = e.nodeName === "SELECT", h = !1;
    if (mu(() => {
      var y = t(...l.map(u)), w = gv(
        e,
        c,
        y,
        i,
        s,
        a
      );
      h && f && "value" in y && Gs(
        /** @type {HTMLSelectElement} */
        e,
        y.value
      );
      for (let m of Object.getOwnPropertySymbols(d))
        y[m] || ct(d[m]);
      for (let m of Object.getOwnPropertySymbols(y)) {
        var b = y[m];
        m.description === eg && (!c || b !== c[m]) && (d[m] && ct(d[m]), d[m] = zt(() => cv(e, () => b))), w[m] = b;
      }
      c = w;
    }), f) {
      var g = (
        /** @type {HTMLSelectElement} */
        e
      );
      lo(() => {
        Gs(
          g,
          /** @type {Record<string | symbol, any>} */
          c.value,
          !0
        ), fv(g);
      });
    }
    h = !0;
  });
}
function ds(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ??= {
      [Iu]: e.nodeName.includes("-"),
      [Lu]: e.namespaceURI === Jh
    }
  );
}
var Sl = /* @__PURE__ */ new Map();
function Hu(e) {
  var t = e.getAttribute("is") || e.nodeName, n = Sl.get(t);
  if (n) return n;
  Sl.set(t, n = []);
  for (var r, o = e, i = Element.prototype; i !== o; ) {
    r = Kc(o);
    for (var s in r)
      r[s].set && n.push(s);
    o = ts(o);
  }
  return n;
}
class Ra {
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
          Ra.entries.set(n.target, n);
          for (var r of this.#t.get(n.target) || [])
            r(n);
        }
      }
    ));
  }
}
var vv = /* @__PURE__ */ new Ra({
  box: "border-box"
});
function El(e, t, n) {
  var r = vv.observe(e, () => n(e[t]));
  lo(() => (st(() => n(e[t])), r));
}
function Nl(e, t) {
  return e === t || e?.[bn] === t;
}
function St(e = {}, t, n, r) {
  return lo(() => {
    var o, i;
    return Zo(() => {
      o = i, i = [], st(() => {
        e !== n(...i) && (t(e, ...i), o && Nl(n(...o), e) && t(null, ...o));
      });
    }), () => {
      hr(() => {
        i && Nl(n(...i), e) && t(null, ...i);
      });
    };
  }), e;
}
function Ru(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    je
  ), n = t.l.u;
  if (!n) return;
  let r = () => Ia(t.s);
  if (e) {
    let o = 0, i = (
      /** @type {Record<string, any>} */
      {}
    );
    const s = /* @__PURE__ */ Ko(() => {
      let a = !1;
      const l = t.s;
      for (const c in l)
        l[c] !== i[c] && (i[c] = l[c], a = !0);
      return a && o++, o;
    });
    r = () => u(s);
  }
  n.b.length && Xt(() => {
    Pl(t, r), Fs(n.b);
  }), qe(() => {
    const o = st(() => n.m.map(rg));
    return () => {
      for (const i of o)
        typeof i == "function" && i();
    };
  }), n.a.length && qe(() => {
    Pl(t, r), Fs(n.a);
  });
}
function Pl(e, t) {
  if (e.l.s)
    for (const n of e.l.s) u(n);
  t();
}
let ai = !1;
function pv(e) {
  var t = ai;
  try {
    return ai = !1, [e(), ai];
  } finally {
    ai = t;
  }
}
const mv = {
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
    mv
  );
}
const yv = {
  get(e, t) {
    if (!e.exclude.includes(t))
      return u(e.version), t in e.special ? e.special[t]() : e.props[t];
  },
  set(e, t, n) {
    if (!(t in e.special)) {
      var r = De;
      try {
        Jt(e.parent_effect), e.special[t] = p(
          {
            get [t]() {
              return e.props[t];
            }
          },
          /** @type {string} */
          t,
          Rc
        );
      } finally {
        Jt(r);
      }
    }
    return e.special[t](n), pl(e.version), !0;
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
    return e.exclude.includes(t) || (e.exclude.push(t), pl(e.version)), !0;
  },
  has(e, t) {
    return e.exclude.includes(t) ? !1 : t in e.props;
  },
  ownKeys(e) {
    return Reflect.ownKeys(e.props).filter((t) => !e.exclude.includes(t));
  }
};
function Tl(e, t) {
  return new Proxy(
    {
      props: e,
      exclude: t,
      special: {},
      version: sr(0),
      // TODO this is only necessary because we need to track component
      // destruction inside `prop`, because of `bind:this`, but it
      // seems likely that we can simplify `bind:this` instead
      parent_effect: (
        /** @type {Effect} */
        De
      )
    },
    yv
  );
}
const wv = {
  get(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (uo(r) && (r = r()), typeof r == "object" && r !== null && t in r) return r[t];
    }
  },
  set(e, t, n) {
    let r = e.props.length;
    for (; r--; ) {
      let o = e.props[r];
      uo(o) && (o = o());
      const i = Vn(o, t);
      if (i && i.set)
        return i.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (uo(r) && (r = r()), typeof r == "object" && r !== null && t in r) {
        const o = Vn(r, t);
        return o && !o.configurable && (o.configurable = !0), o;
      }
    }
  },
  has(e, t) {
    if (t === bn || t === Ta) return !1;
    for (let n of e.props)
      if (uo(n) && (n = n()), n != null && t in n) return !0;
    return !1;
  },
  ownKeys(e) {
    const t = [];
    for (let n of e.props)
      if (uo(n) && (n = n()), !!n) {
        for (const r in n)
          t.includes(r) || t.push(r);
        for (const r of Object.getOwnPropertySymbols(n))
          t.includes(r) || t.push(r);
      }
    return t;
  }
};
function Ye(...e) {
  return new Proxy({ props: e }, wv);
}
function p(e, t, n, r) {
  var o = !so || (n & Xh) !== 0, i = (n & qh) !== 0, s = (n & Gh) !== 0, a = (
    /** @type {V} */
    r
  ), l = !0, c = () => (l && (l = !1, a = s ? st(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), a), d;
  if (i) {
    var f = bn in e || Ta in e;
    d = Vn(e, t)?.set ?? (f && t in e ? (E) => e[t] = E : void 0);
  }
  var h, g = !1;
  i ? [h, g] = pv(() => (
    /** @type {V} */
    e[t]
  )) : h = /** @type {V} */
  e[t], h === void 0 && r !== void 0 && (h = c(), d && (o && fg(), d(h)));
  var y;
  if (o ? y = () => {
    var E = (
      /** @type {V} */
      e[t]
    );
    return E === void 0 ? c() : (l = !0, E);
  } : y = () => {
    var E = (
      /** @type {V} */
      e[t]
    );
    return E !== void 0 && (a = /** @type {V} */
    void 0), E === void 0 ? a : E;
  }, o && (n & Rc) === 0)
    return y;
  if (d) {
    var w = e.$$legacy;
    return (
      /** @type {() => V} */
      function(E, _) {
        return arguments.length > 0 ? ((!o || !_ || w || g) && d(_ ? y() : E), E) : y();
      }
    );
  }
  var b = !1, m = ((n & jh) !== 0 ? Ko : Ma)(() => (b = !1, y()));
  i && u(m);
  var k = (
    /** @type {Effect} */
    De
  );
  return (
    /** @type {() => V} */
    function(E, _) {
      if (arguments.length > 0) {
        const S = _ ? u(m) : o && i ? xt(E) : E;
        return ee(m, S), b = !0, a !== void 0 && (a = S), E;
      }
      return Ir && b || (k.f & zn) !== 0 ? m.v : u(m);
    }
  );
}
function bv(e) {
  return new xv(e);
}
class xv {
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
      var a = /* @__PURE__ */ cu(s, !1, !1);
      return n.set(i, a), a;
    };
    const o = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(i, s) {
          return u(n.get(s) ?? r(s, Reflect.get(i, s)));
        },
        has(i, s) {
          return s === Ta ? !0 : (u(n.get(s) ?? r(s, Reflect.get(i, s))), Reflect.has(i, s));
        },
        set(i, s, a) {
          return ee(n.get(s) ?? r(s, a), a), Reflect.set(i, s, a);
        }
      }
    );
    this.#e = (t.hydrate ? rv : Du)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: o,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    }), (!t?.props?.$$host || t.sync === !1) && v(), this.#t = o.$$events;
    for (const i of Object.keys(this.#e))
      i === "$set" || i === "$destroy" || i === "$on" || Pi(this, i, {
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
      ov(this.#e);
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
let Bu;
typeof HTMLElement == "function" && (Bu = class extends HTMLElement {
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
          r !== "default" && (i.name = r), O(o, i);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const t = {}, n = _v(this);
      for (const r of this.$$s)
        r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = e(r), t.default = !0) : t[r] = e(r));
      for (const r of this.attributes) {
        const o = this.$$g_p(r.name);
        o in this.$$d || (this.$$d[o] = bi(o, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = bv({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: t,
          $$host: this
        }
      }), this.$$me = ao(() => {
        Zo(() => {
          this.$$r = !0;
          for (const r of Ni(this.$$c)) {
            if (!this.$$p_d[r]?.reflect) continue;
            this.$$d[r] = this.$$c[r];
            const o = bi(
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
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = bi(e, n, this.$$p_d, "toProp"), this.$$c?.$set({ [e]: this.$$d[e] }));
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
    return Ni(this.$$p_d).find(
      (t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e
    ) || e;
  }
});
function bi(e, t, n, r) {
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
function _v(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function le(e, t, n, r, o, i) {
  let s = class extends Bu {
    constructor() {
      super(e, n, o), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Ni(t).map(
        (a) => (t[a].attribute || a).toLowerCase()
      );
    }
  };
  return Ni(t).forEach((a) => {
    Pi(s.prototype, a, {
      get() {
        return this.$$c && a in this.$$c ? this.$$c[a] : this.$$d[a];
      },
      set(l) {
        l = bi(a, l, t), this.$$d[a] = l;
        var c = this.$$c;
        if (c) {
          var d = Vn(c, a)?.get;
          d ? c[a] = l : c.$set({ [a]: l });
        }
      }
    });
  }), r.forEach((a) => {
    Pi(s.prototype, a, {
      get() {
        return this.$$c?.[a];
      }
    });
  }), e.element = /** @type {any} */
  s, s;
}
var Cv = { value: () => {
} };
function fs() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new xi(n);
}
function xi(e) {
  this._ = e;
}
function kv(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
xi.prototype = fs.prototype = {
  constructor: xi,
  on: function(e, t) {
    var n = this._, r = kv(e + "", n), o, i = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++i < s; ) if ((o = (e = r[i]).type) && (o = Sv(n[o], e.name))) return o;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++i < s; )
      if (o = (e = r[i]).type) n[o] = $l(n[o], e.name, t);
      else if (t == null) for (o in n) n[o] = $l(n[o], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t) e[n] = t[n].slice();
    return new xi(e);
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
function Sv(e, t) {
  for (var n = 0, r = e.length, o; n < r; ++n)
    if ((o = e[n]).name === t)
      return o.value;
}
function $l(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = Cv, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var Us = "http://www.w3.org/1999/xhtml";
const Ml = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Us,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function hs(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), Ml.hasOwnProperty(t) ? { space: Ml[t], local: e } : e;
}
function Ev(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === Us && t.documentElement.namespaceURI === Us ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function Nv(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function Fu(e) {
  var t = hs(e);
  return (t.local ? Nv : Ev)(t);
}
function Pv() {
}
function Ba(e) {
  return e == null ? Pv : function() {
    return this.querySelector(e);
  };
}
function Tv(e) {
  typeof e != "function" && (e = Ba(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = new Array(s), l, c, d = 0; d < s; ++d)
      (l = i[d]) && (c = e.call(l, l.__data__, d, i)) && ("__data__" in l && (c.__data__ = l.__data__), a[d] = c);
  return new Yt(r, this._parents);
}
function $v(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function Mv() {
  return [];
}
function Ku(e) {
  return e == null ? Mv : function() {
    return this.querySelectorAll(e);
  };
}
function Av(e) {
  return function() {
    return $v(e.apply(this, arguments));
  };
}
function Dv(e) {
  typeof e == "function" ? e = Av(e) : e = Ku(e);
  for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
    for (var s = t[i], a = s.length, l, c = 0; c < a; ++c)
      (l = s[c]) && (r.push(e.call(l, l.__data__, c, s)), o.push(l));
  return new Yt(r, o);
}
function Zu(e) {
  return function() {
    return this.matches(e);
  };
}
function Wu(e) {
  return function(t) {
    return t.matches(e);
  };
}
var Ov = Array.prototype.find;
function Vv(e) {
  return function() {
    return Ov.call(this.children, e);
  };
}
function zv() {
  return this.firstElementChild;
}
function Iv(e) {
  return this.select(e == null ? zv : Vv(typeof e == "function" ? e : Wu(e)));
}
var Lv = Array.prototype.filter;
function Hv() {
  return Array.from(this.children);
}
function Rv(e) {
  return function() {
    return Lv.call(this.children, e);
  };
}
function Bv(e) {
  return this.selectAll(e == null ? Hv : Rv(typeof e == "function" ? e : Wu(e)));
}
function Fv(e) {
  typeof e != "function" && (e = Zu(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, c = 0; c < s; ++c)
      (l = i[c]) && e.call(l, l.__data__, c, i) && a.push(l);
  return new Yt(r, this._parents);
}
function Yu(e) {
  return new Array(e.length);
}
function Kv() {
  return new Yt(this._enter || this._groups.map(Yu), this._parents);
}
function Oi(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
Oi.prototype = {
  constructor: Oi,
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
function Zv(e) {
  return function() {
    return e;
  };
}
function Wv(e, t, n, r, o, i) {
  for (var s = 0, a, l = t.length, c = i.length; s < c; ++s)
    (a = t[s]) ? (a.__data__ = i[s], r[s] = a) : n[s] = new Oi(e, i[s]);
  for (; s < l; ++s)
    (a = t[s]) && (o[s] = a);
}
function Yv(e, t, n, r, o, i, s) {
  var a, l, c = /* @__PURE__ */ new Map(), d = t.length, f = i.length, h = new Array(d), g;
  for (a = 0; a < d; ++a)
    (l = t[a]) && (h[a] = g = s.call(l, l.__data__, a, t) + "", c.has(g) ? o[a] = l : c.set(g, l));
  for (a = 0; a < f; ++a)
    g = s.call(e, i[a], a, i) + "", (l = c.get(g)) ? (r[a] = l, l.__data__ = i[a], c.delete(g)) : n[a] = new Oi(e, i[a]);
  for (a = 0; a < d; ++a)
    (l = t[a]) && c.get(h[a]) === l && (o[a] = l);
}
function jv(e) {
  return e.__data__;
}
function Xv(e, t) {
  if (!arguments.length) return Array.from(this, jv);
  var n = t ? Yv : Wv, r = this._parents, o = this._groups;
  typeof e != "function" && (e = Zv(e));
  for (var i = o.length, s = new Array(i), a = new Array(i), l = new Array(i), c = 0; c < i; ++c) {
    var d = r[c], f = o[c], h = f.length, g = qv(e.call(d, d && d.__data__, c, r)), y = g.length, w = a[c] = new Array(y), b = s[c] = new Array(y), m = l[c] = new Array(h);
    n(d, f, w, b, m, g, t);
    for (var k = 0, E = 0, _, S; k < y; ++k)
      if (_ = w[k]) {
        for (k >= E && (E = k + 1); !(S = b[E]) && ++E < y; ) ;
        _._next = S || null;
      }
  }
  return s = new Yt(s, r), s._enter = a, s._exit = l, s;
}
function qv(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Gv() {
  return new Yt(this._exit || this._groups.map(Yu), this._parents);
}
function Uv(e, t, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function Jv(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, i = r.length, s = Math.min(o, i), a = new Array(o), l = 0; l < s; ++l)
    for (var c = n[l], d = r[l], f = c.length, h = a[l] = new Array(f), g, y = 0; y < f; ++y)
      (g = c[y] || d[y]) && (h[y] = g);
  for (; l < o; ++l)
    a[l] = n[l];
  return new Yt(a, this._parents);
}
function Qv() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, i = r[o], s; --o >= 0; )
      (s = r[o]) && (i && s.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(s, i), i = s);
  return this;
}
function ep(e) {
  e || (e = tp);
  function t(f, h) {
    return f && h ? e(f.__data__, h.__data__) : !f - !h;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), i = 0; i < r; ++i) {
    for (var s = n[i], a = s.length, l = o[i] = new Array(a), c, d = 0; d < a; ++d)
      (c = s[d]) && (l[d] = c);
    l.sort(t);
  }
  return new Yt(o, this._parents).order();
}
function tp(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function np() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function rp() {
  return Array.from(this);
}
function op() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length; o < i; ++o) {
      var s = r[o];
      if (s) return s;
    }
  return null;
}
function ip() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function sp() {
  return !this.node();
}
function ap(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], i = 0, s = o.length, a; i < s; ++i)
      (a = o[i]) && e.call(a, a.__data__, i, o);
  return this;
}
function lp(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function cp(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function up(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function dp(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function fp(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function hp(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function gp(e, t) {
  var n = hs(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? cp : lp : typeof t == "function" ? n.local ? hp : fp : n.local ? dp : up)(n, t));
}
function ju(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function vp(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function pp(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function mp(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function yp(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? vp : typeof t == "function" ? mp : pp)(e, t, n ?? "")) : Qr(this.node(), e);
}
function Qr(e, t) {
  return e.style.getPropertyValue(t) || ju(e).getComputedStyle(e, null).getPropertyValue(t);
}
function wp(e) {
  return function() {
    delete this[e];
  };
}
function bp(e, t) {
  return function() {
    this[e] = t;
  };
}
function xp(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function _p(e, t) {
  return arguments.length > 1 ? this.each((t == null ? wp : typeof t == "function" ? xp : bp)(e, t)) : this.node()[e];
}
function Xu(e) {
  return e.trim().split(/^|\s+/);
}
function Fa(e) {
  return e.classList || new qu(e);
}
function qu(e) {
  this._node = e, this._names = Xu(e.getAttribute("class") || "");
}
qu.prototype = {
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
function Gu(e, t) {
  for (var n = Fa(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function Uu(e, t) {
  for (var n = Fa(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
}
function Cp(e) {
  return function() {
    Gu(this, e);
  };
}
function kp(e) {
  return function() {
    Uu(this, e);
  };
}
function Sp(e, t) {
  return function() {
    (t.apply(this, arguments) ? Gu : Uu)(this, e);
  };
}
function Ep(e, t) {
  var n = Xu(e + "");
  if (arguments.length < 2) {
    for (var r = Fa(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? Sp : t ? Cp : kp)(n, t));
}
function Np() {
  this.textContent = "";
}
function Pp(e) {
  return function() {
    this.textContent = e;
  };
}
function Tp(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function $p(e) {
  return arguments.length ? this.each(e == null ? Np : (typeof e == "function" ? Tp : Pp)(e)) : this.node().textContent;
}
function Mp() {
  this.innerHTML = "";
}
function Ap(e) {
  return function() {
    this.innerHTML = e;
  };
}
function Dp(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function Op(e) {
  return arguments.length ? this.each(e == null ? Mp : (typeof e == "function" ? Dp : Ap)(e)) : this.node().innerHTML;
}
function Vp() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function zp() {
  return this.each(Vp);
}
function Ip() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Lp() {
  return this.each(Ip);
}
function Hp(e) {
  var t = typeof e == "function" ? e : Fu(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function Rp() {
  return null;
}
function Bp(e, t) {
  var n = typeof e == "function" ? e : Fu(e), r = t == null ? Rp : typeof t == "function" ? t : Ba(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Fp() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function Kp() {
  return this.each(Fp);
}
function Zp() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Wp() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Yp(e) {
  return this.select(e ? Wp : Zp);
}
function jp(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function Xp(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function qp(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", r = t.indexOf(".");
    return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n };
  });
}
function Gp(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, o = t.length, i; n < o; ++n)
        i = t[n], (!e.type || i.type === e.type) && i.name === e.name ? this.removeEventListener(i.type, i.listener, i.options) : t[++r] = i;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function Up(e, t, n) {
  return function() {
    var r = this.__on, o, i = Xp(t);
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
function Jp(e, t, n) {
  var r = qp(e + ""), o, i = r.length, s;
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
  for (a = t ? Up : Gp, o = 0; o < i; ++o) this.each(a(r[o], t, n));
  return this;
}
function Ju(e, t, n) {
  var r = ju(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function Qp(e, t) {
  return function() {
    return Ju(this, e, t);
  };
}
function e1(e, t) {
  return function() {
    return Ju(this, e, t.apply(this, arguments));
  };
}
function t1(e, t) {
  return this.each((typeof t == "function" ? e1 : Qp)(e, t));
}
function* n1() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length, s; o < i; ++o)
      (s = r[o]) && (yield s);
}
var Qu = [null];
function Yt(e, t) {
  this._groups = e, this._parents = t;
}
function jo() {
  return new Yt([[document.documentElement]], Qu);
}
function r1() {
  return this;
}
Yt.prototype = jo.prototype = {
  constructor: Yt,
  select: Tv,
  selectAll: Dv,
  selectChild: Iv,
  selectChildren: Bv,
  filter: Fv,
  data: Xv,
  enter: Kv,
  exit: Gv,
  join: Uv,
  merge: Jv,
  selection: r1,
  order: Qv,
  sort: ep,
  call: np,
  nodes: rp,
  node: op,
  size: ip,
  empty: sp,
  each: ap,
  attr: gp,
  style: yp,
  property: _p,
  classed: Ep,
  text: $p,
  html: Op,
  raise: zp,
  lower: Lp,
  append: Hp,
  insert: Bp,
  remove: Kp,
  clone: Yp,
  datum: jp,
  on: Jp,
  dispatch: t1,
  [Symbol.iterator]: n1
};
function Ut(e) {
  return typeof e == "string" ? new Yt([[document.querySelector(e)]], [document.documentElement]) : new Yt([[e]], Qu);
}
function o1(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function rn(e, t) {
  if (e = o1(e), t === void 0 && (t = e.currentTarget), t) {
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
const i1 = { passive: !1 }, No = { capture: !0, passive: !1 };
function Ps(e) {
  e.stopImmediatePropagation();
}
function Zr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function ed(e) {
  var t = e.document.documentElement, n = Ut(e).on("dragstart.drag", Zr, No);
  "onselectstart" in t ? n.on("selectstart.drag", Zr, No) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function td(e, t) {
  var n = e.document.documentElement, r = Ut(e).on("dragstart.drag", null);
  t && (r.on("click.drag", Zr, No), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const li = (e) => () => e;
function Js(e, {
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
Js.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function s1(e) {
  return !e.ctrlKey && !e.button;
}
function a1() {
  return this.parentNode;
}
function l1(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function c1() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function u1() {
  var e = s1, t = a1, n = l1, r = c1, o = {}, i = fs("start", "drag", "end"), s = 0, a, l, c, d, f = 0;
  function h(_) {
    _.on("mousedown.drag", g).filter(r).on("touchstart.drag", b).on("touchmove.drag", m, i1).on("touchend.drag touchcancel.drag", k).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function g(_, S) {
    if (!(d || !e.call(this, _, S))) {
      var T = E(this, t.call(this, _, S), _, S, "mouse");
      T && (Ut(_.view).on("mousemove.drag", y, No).on("mouseup.drag", w, No), ed(_.view), Ps(_), c = !1, a = _.clientX, l = _.clientY, T("start", _));
    }
  }
  function y(_) {
    if (Zr(_), !c) {
      var S = _.clientX - a, T = _.clientY - l;
      c = S * S + T * T > f;
    }
    o.mouse("drag", _);
  }
  function w(_) {
    Ut(_.view).on("mousemove.drag mouseup.drag", null), td(_.view, c), Zr(_), o.mouse("end", _);
  }
  function b(_, S) {
    if (e.call(this, _, S)) {
      var T = _.changedTouches, z = t.call(this, _, S), V = T.length, L, Y;
      for (L = 0; L < V; ++L)
        (Y = E(this, z, _, S, T[L].identifier, T[L])) && (Ps(_), Y("start", _, T[L]));
    }
  }
  function m(_) {
    var S = _.changedTouches, T = S.length, z, V;
    for (z = 0; z < T; ++z)
      (V = o[S[z].identifier]) && (Zr(_), V("drag", _, S[z]));
  }
  function k(_) {
    var S = _.changedTouches, T = S.length, z, V;
    for (d && clearTimeout(d), d = setTimeout(function() {
      d = null;
    }, 500), z = 0; z < T; ++z)
      (V = o[S[z].identifier]) && (Ps(_), V("end", _, S[z]));
  }
  function E(_, S, T, z, V, L) {
    var Y = i.copy(), H = rn(L || T, S), N, M, x;
    if ((x = n.call(_, new Js("beforestart", {
      sourceEvent: T,
      target: h,
      identifier: V,
      active: s,
      x: H[0],
      y: H[1],
      dx: 0,
      dy: 0,
      dispatch: Y
    }), z)) != null)
      return N = x.x - H[0] || 0, M = x.y - H[1] || 0, function C(A, D, K) {
        var X = H, $;
        switch (A) {
          case "start":
            o[V] = C, $ = s++;
            break;
          case "end":
            delete o[V], --s;
          // falls through
          case "drag":
            H = rn(K || D, S), $ = s;
            break;
        }
        Y.call(
          A,
          _,
          new Js(A, {
            sourceEvent: D,
            subject: x,
            target: h,
            identifier: V,
            active: $,
            x: H[0] + N,
            y: H[1] + M,
            dx: H[0] - X[0],
            dy: H[1] - X[1],
            dispatch: Y
          }),
          z
        );
      };
  }
  return h.filter = function(_) {
    return arguments.length ? (e = typeof _ == "function" ? _ : li(!!_), h) : e;
  }, h.container = function(_) {
    return arguments.length ? (t = typeof _ == "function" ? _ : li(_), h) : t;
  }, h.subject = function(_) {
    return arguments.length ? (n = typeof _ == "function" ? _ : li(_), h) : n;
  }, h.touchable = function(_) {
    return arguments.length ? (r = typeof _ == "function" ? _ : li(!!_), h) : r;
  }, h.on = function() {
    var _ = i.on.apply(i, arguments);
    return _ === i ? h : _;
  }, h.clickDistance = function(_) {
    return arguments.length ? (f = (_ = +_) * _, h) : Math.sqrt(f);
  }, h;
}
function Ka(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function nd(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function Xo() {
}
var Po = 0.7, Vi = 1 / Po, Wr = "\\s*([+-]?\\d+)\\s*", To = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", xn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", d1 = /^#([0-9a-f]{3,8})$/, f1 = new RegExp(`^rgb\\(${Wr},${Wr},${Wr}\\)$`), h1 = new RegExp(`^rgb\\(${xn},${xn},${xn}\\)$`), g1 = new RegExp(`^rgba\\(${Wr},${Wr},${Wr},${To}\\)$`), v1 = new RegExp(`^rgba\\(${xn},${xn},${xn},${To}\\)$`), p1 = new RegExp(`^hsl\\(${To},${xn},${xn}\\)$`), m1 = new RegExp(`^hsla\\(${To},${xn},${xn},${To}\\)$`), Al = {
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
Ka(Xo, Mr, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Dl,
  // Deprecated! Use color.formatHex.
  formatHex: Dl,
  formatHex8: y1,
  formatHsl: w1,
  formatRgb: Ol,
  toString: Ol
});
function Dl() {
  return this.rgb().formatHex();
}
function y1() {
  return this.rgb().formatHex8();
}
function w1() {
  return rd(this).formatHsl();
}
function Ol() {
  return this.rgb().formatRgb();
}
function Mr(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = d1.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? Vl(t) : n === 3 ? new Lt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? ci(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? ci(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = f1.exec(e)) ? new Lt(t[1], t[2], t[3], 1) : (t = h1.exec(e)) ? new Lt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = g1.exec(e)) ? ci(t[1], t[2], t[3], t[4]) : (t = v1.exec(e)) ? ci(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = p1.exec(e)) ? Ll(t[1], t[2] / 100, t[3] / 100, 1) : (t = m1.exec(e)) ? Ll(t[1], t[2] / 100, t[3] / 100, t[4]) : Al.hasOwnProperty(e) ? Vl(Al[e]) : e === "transparent" ? new Lt(NaN, NaN, NaN, 0) : null;
}
function Vl(e) {
  return new Lt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function ci(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new Lt(e, t, n, r);
}
function b1(e) {
  return e instanceof Xo || (e = Mr(e)), e ? (e = e.rgb(), new Lt(e.r, e.g, e.b, e.opacity)) : new Lt();
}
function Qs(e, t, n, r) {
  return arguments.length === 1 ? b1(e) : new Lt(e, t, n, r ?? 1);
}
function Lt(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
Ka(Lt, Qs, nd(Xo, {
  brighter(e) {
    return e = e == null ? Vi : Math.pow(Vi, e), new Lt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Po : Math.pow(Po, e), new Lt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Lt(Er(this.r), Er(this.g), Er(this.b), zi(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: zl,
  // Deprecated! Use color.formatHex.
  formatHex: zl,
  formatHex8: x1,
  formatRgb: Il,
  toString: Il
}));
function zl() {
  return `#${xr(this.r)}${xr(this.g)}${xr(this.b)}`;
}
function x1() {
  return `#${xr(this.r)}${xr(this.g)}${xr(this.b)}${xr((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Il() {
  const e = zi(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Er(this.r)}, ${Er(this.g)}, ${Er(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function zi(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Er(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function xr(e) {
  return e = Er(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Ll(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new on(e, t, n, r);
}
function rd(e) {
  if (e instanceof on) return new on(e.h, e.s, e.l, e.opacity);
  if (e instanceof Xo || (e = Mr(e)), !e) return new on();
  if (e instanceof on) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), s = NaN, a = i - o, l = (i + o) / 2;
  return a ? (t === i ? s = (n - r) / a + (n < r) * 6 : n === i ? s = (r - t) / a + 2 : s = (t - n) / a + 4, a /= l < 0.5 ? i + o : 2 - i - o, s *= 60) : a = l > 0 && l < 1 ? 0 : s, new on(s, a, l, e.opacity);
}
function _1(e, t, n, r) {
  return arguments.length === 1 ? rd(e) : new on(e, t, n, r ?? 1);
}
function on(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
Ka(on, _1, nd(Xo, {
  brighter(e) {
    return e = e == null ? Vi : Math.pow(Vi, e), new on(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Po : Math.pow(Po, e), new on(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new Lt(
      Ts(e >= 240 ? e - 240 : e + 120, o, r),
      Ts(e, o, r),
      Ts(e < 120 ? e + 240 : e - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new on(Hl(this.h), ui(this.s), ui(this.l), zi(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = zi(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Hl(this.h)}, ${ui(this.s) * 100}%, ${ui(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Hl(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function ui(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Ts(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const Za = (e) => () => e;
function C1(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function k1(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function S1(e) {
  return (e = +e) == 1 ? od : function(t, n) {
    return n - t ? k1(t, n, e) : Za(isNaN(t) ? n : t);
  };
}
function od(e, t) {
  var n = t - e;
  return n ? C1(e, n) : Za(isNaN(e) ? t : e);
}
const Ii = function e(t) {
  var n = S1(t);
  function r(o, i) {
    var s = n((o = Qs(o)).r, (i = Qs(i)).r), a = n(o.g, i.g), l = n(o.b, i.b), c = od(o.opacity, i.opacity);
    return function(d) {
      return o.r = s(d), o.g = a(d), o.b = l(d), o.opacity = c(d), o + "";
    };
  }
  return r.gamma = e, r;
}(1);
function E1(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, r = t.slice(), o;
  return function(i) {
    for (o = 0; o < n; ++o) r[o] = e[o] * (1 - i) + t[o] * i;
    return r;
  };
}
function N1(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function P1(e, t) {
  var n = t ? t.length : 0, r = e ? Math.min(n, e.length) : 0, o = new Array(r), i = new Array(n), s;
  for (s = 0; s < r; ++s) o[s] = Co(e[s], t[s]);
  for (; s < n; ++s) i[s] = t[s];
  return function(a) {
    for (s = 0; s < r; ++s) i[s] = o[s](a);
    return i;
  };
}
function T1(e, t) {
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
function $1(e, t) {
  var n = {}, r = {}, o;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (o in t)
    o in e ? n[o] = Co(e[o], t[o]) : r[o] = t[o];
  return function(i) {
    for (o in n) r[o] = n[o](i);
    return r;
  };
}
var ea = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, $s = new RegExp(ea.source, "g");
function M1(e) {
  return function() {
    return e;
  };
}
function A1(e) {
  return function(t) {
    return e(t) + "";
  };
}
function id(e, t) {
  var n = ea.lastIndex = $s.lastIndex = 0, r, o, i, s = -1, a = [], l = [];
  for (e = e + "", t = t + ""; (r = ea.exec(e)) && (o = $s.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), a[s] ? a[s] += i : a[++s] = i), (r = r[0]) === (o = o[0]) ? a[s] ? a[s] += o : a[++s] = o : (a[++s] = null, l.push({ i: s, x: mn(r, o) })), n = $s.lastIndex;
  return n < t.length && (i = t.slice(n), a[s] ? a[s] += i : a[++s] = i), a.length < 2 ? l[0] ? A1(l[0].x) : M1(t) : (t = l.length, function(c) {
    for (var d = 0, f; d < t; ++d) a[(f = l[d]).i] = f.x(c);
    return a.join("");
  });
}
function Co(e, t) {
  var n = typeof t, r;
  return t == null || n === "boolean" ? Za(t) : (n === "number" ? mn : n === "string" ? (r = Mr(t)) ? (t = r, Ii) : id : t instanceof Mr ? Ii : t instanceof Date ? T1 : N1(t) ? E1 : Array.isArray(t) ? P1 : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? $1 : mn)(e, t);
}
var Rl = 180 / Math.PI, ta = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function sd(e, t, n, r, o, i) {
  var s, a, l;
  return (s = Math.sqrt(e * e + t * t)) && (e /= s, t /= s), (l = e * n + t * r) && (n -= e * l, r -= t * l), (a = Math.sqrt(n * n + r * r)) && (n /= a, r /= a, l /= a), e * r < t * n && (e = -e, t = -t, l = -l, s = -s), {
    translateX: o,
    translateY: i,
    rotate: Math.atan2(t, e) * Rl,
    skewX: Math.atan(l) * Rl,
    scaleX: s,
    scaleY: a
  };
}
var di;
function D1(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? ta : sd(t.a, t.b, t.c, t.d, t.e, t.f);
}
function O1(e) {
  return e == null || (di || (di = document.createElementNS("http://www.w3.org/2000/svg", "g")), di.setAttribute("transform", e), !(e = di.transform.baseVal.consolidate())) ? ta : (e = e.matrix, sd(e.a, e.b, e.c, e.d, e.e, e.f));
}
function ad(e, t, n, r) {
  function o(c) {
    return c.length ? c.pop() + " " : "";
  }
  function i(c, d, f, h, g, y) {
    if (c !== f || d !== h) {
      var w = g.push("translate(", null, t, null, n);
      y.push({ i: w - 4, x: mn(c, f) }, { i: w - 2, x: mn(d, h) });
    } else (f || h) && g.push("translate(" + f + t + h + n);
  }
  function s(c, d, f, h) {
    c !== d ? (c - d > 180 ? d += 360 : d - c > 180 && (c += 360), h.push({ i: f.push(o(f) + "rotate(", null, r) - 2, x: mn(c, d) })) : d && f.push(o(f) + "rotate(" + d + r);
  }
  function a(c, d, f, h) {
    c !== d ? h.push({ i: f.push(o(f) + "skewX(", null, r) - 2, x: mn(c, d) }) : d && f.push(o(f) + "skewX(" + d + r);
  }
  function l(c, d, f, h, g, y) {
    if (c !== f || d !== h) {
      var w = g.push(o(g) + "scale(", null, ",", null, ")");
      y.push({ i: w - 4, x: mn(c, f) }, { i: w - 2, x: mn(d, h) });
    } else (f !== 1 || h !== 1) && g.push(o(g) + "scale(" + f + "," + h + ")");
  }
  return function(c, d) {
    var f = [], h = [];
    return c = e(c), d = e(d), i(c.translateX, c.translateY, d.translateX, d.translateY, f, h), s(c.rotate, d.rotate, f, h), a(c.skewX, d.skewX, f, h), l(c.scaleX, c.scaleY, d.scaleX, d.scaleY, f, h), c = d = null, function(g) {
      for (var y = -1, w = h.length, b; ++y < w; ) f[(b = h[y]).i] = b.x(g);
      return f.join("");
    };
  };
}
var V1 = ad(D1, "px, ", "px)", "deg)"), z1 = ad(O1, ", ", ")", ")"), I1 = 1e-12;
function Bl(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function L1(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function H1(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const _i = function e(t, n, r) {
  function o(i, s) {
    var a = i[0], l = i[1], c = i[2], d = s[0], f = s[1], h = s[2], g = d - a, y = f - l, w = g * g + y * y, b, m;
    if (w < I1)
      m = Math.log(h / c) / t, b = function(z) {
        return [
          a + z * g,
          l + z * y,
          c * Math.exp(t * z * m)
        ];
      };
    else {
      var k = Math.sqrt(w), E = (h * h - c * c + r * w) / (2 * c * n * k), _ = (h * h - c * c - r * w) / (2 * h * n * k), S = Math.log(Math.sqrt(E * E + 1) - E), T = Math.log(Math.sqrt(_ * _ + 1) - _);
      m = (T - S) / t, b = function(z) {
        var V = z * m, L = Bl(S), Y = c / (n * k) * (L * H1(t * V + S) - L1(S));
        return [
          a + Y * g,
          l + Y * y,
          c * L / Bl(t * V + S)
        ];
      };
    }
    return b.duration = m * 1e3 * t / Math.SQRT2, b;
  }
  return o.rho = function(i) {
    var s = Math.max(1e-3, +i), a = s * s, l = a * a;
    return e(s, a, l);
  }, o;
}(Math.SQRT2, 2, 4);
var eo = 0, mo = 0, fo = 0, ld = 1e3, Li, yo, Hi = 0, Ar = 0, gs = 0, $o = typeof performance == "object" && performance.now ? performance : Date, cd = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function Wa() {
  return Ar || (cd(R1), Ar = $o.now() + gs);
}
function R1() {
  Ar = 0;
}
function Ri() {
  this._call = this._time = this._next = null;
}
Ri.prototype = ud.prototype = {
  constructor: Ri,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? Wa() : +n) + (t == null ? 0 : +t), !this._next && yo !== this && (yo ? yo._next = this : Li = this, yo = this), this._call = e, this._time = n, na();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, na());
  }
};
function ud(e, t, n) {
  var r = new Ri();
  return r.restart(e, t, n), r;
}
function B1() {
  Wa(), ++eo;
  for (var e = Li, t; e; )
    (t = Ar - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --eo;
}
function Fl() {
  Ar = (Hi = $o.now()) + gs, eo = mo = 0;
  try {
    B1();
  } finally {
    eo = 0, K1(), Ar = 0;
  }
}
function F1() {
  var e = $o.now(), t = e - Hi;
  t > ld && (gs -= t, Hi = e);
}
function K1() {
  for (var e, t = Li, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : Li = n);
  yo = e, na(r);
}
function na(e) {
  if (!eo) {
    mo && (mo = clearTimeout(mo));
    var t = e - Ar;
    t > 24 ? (e < 1 / 0 && (mo = setTimeout(Fl, e - $o.now() - gs)), fo && (fo = clearInterval(fo))) : (fo || (Hi = $o.now(), fo = setInterval(F1, ld)), eo = 1, cd(Fl));
  }
}
function Kl(e, t, n) {
  var r = new Ri();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var Z1 = fs("start", "end", "cancel", "interrupt"), W1 = [], dd = 0, Zl = 1, ra = 2, Ci = 3, Wl = 4, oa = 5, ki = 6;
function vs(e, t, n, r, o, i) {
  var s = e.__transition;
  if (!s) e.__transition = {};
  else if (n in s) return;
  Y1(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: Z1,
    tween: W1,
    time: i.time,
    delay: i.delay,
    duration: i.duration,
    ease: i.ease,
    timer: null,
    state: dd
  });
}
function Ya(e, t) {
  var n = dn(e, t);
  if (n.state > dd) throw new Error("too late; already scheduled");
  return n;
}
function En(e, t) {
  var n = dn(e, t);
  if (n.state > Ci) throw new Error("too late; already running");
  return n;
}
function dn(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function Y1(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = ud(i, 0, n.time);
  function i(c) {
    n.state = Zl, n.timer.restart(s, n.delay, n.time), n.delay <= c && s(c - n.delay);
  }
  function s(c) {
    var d, f, h, g;
    if (n.state !== Zl) return l();
    for (d in r)
      if (g = r[d], g.name === n.name) {
        if (g.state === Ci) return Kl(s);
        g.state === Wl ? (g.state = ki, g.timer.stop(), g.on.call("interrupt", e, e.__data__, g.index, g.group), delete r[d]) : +d < t && (g.state = ki, g.timer.stop(), g.on.call("cancel", e, e.__data__, g.index, g.group), delete r[d]);
      }
    if (Kl(function() {
      n.state === Ci && (n.state = Wl, n.timer.restart(a, n.delay, n.time), a(c));
    }), n.state = ra, n.on.call("start", e, e.__data__, n.index, n.group), n.state === ra) {
      for (n.state = Ci, o = new Array(h = n.tween.length), d = 0, f = -1; d < h; ++d)
        (g = n.tween[d].value.call(e, e.__data__, n.index, n.group)) && (o[++f] = g);
      o.length = f + 1;
    }
  }
  function a(c) {
    for (var d = c < n.duration ? n.ease.call(null, c / n.duration) : (n.timer.restart(l), n.state = oa, 1), f = -1, h = o.length; ++f < h; )
      o[f].call(e, d);
    n.state === oa && (n.on.call("end", e, e.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = ki, n.timer.stop(), delete r[t];
    for (var c in r) return;
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
      o = r.state > ra && r.state < oa, r.state = ki, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[s];
    }
    i && delete e.__transition;
  }
}
function j1(e) {
  return this.each(function() {
    Si(this, e);
  });
}
function X1(e, t) {
  var n, r;
  return function() {
    var o = En(this, e), i = o.tween;
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
function q1(e, t, n) {
  var r, o;
  if (typeof n != "function") throw new Error();
  return function() {
    var i = En(this, e), s = i.tween;
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
function G1(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = dn(this.node(), n).tween, o = 0, i = r.length, s; o < i; ++o)
      if ((s = r[o]).name === e)
        return s.value;
    return null;
  }
  return this.each((t == null ? X1 : q1)(n, e, t));
}
function ja(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = En(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return dn(o, r).value[t];
  };
}
function fd(e, t) {
  var n;
  return (typeof t == "number" ? mn : t instanceof Mr ? Ii : (n = Mr(t)) ? (t = n, Ii) : id)(e, t);
}
function U1(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function J1(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Q1(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttribute(e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function em(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttributeNS(e.space, e.local);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function tm(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttribute(e) : (s = this.getAttribute(e), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a)));
  };
}
function nm(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttributeNS(e.space, e.local) : (s = this.getAttributeNS(e.space, e.local), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a)));
  };
}
function rm(e, t) {
  var n = hs(e), r = n === "transform" ? z1 : fd;
  return this.attrTween(e, typeof t == "function" ? (n.local ? nm : tm)(n, r, ja(this, "attr." + e, t)) : t == null ? (n.local ? J1 : U1)(n) : (n.local ? em : Q1)(n, r, t));
}
function om(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function im(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function sm(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && im(e, i)), n;
  }
  return o._value = t, o;
}
function am(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && om(e, i)), n;
  }
  return o._value = t, o;
}
function lm(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = hs(e);
  return this.tween(n, (r.local ? sm : am)(r, t));
}
function cm(e, t) {
  return function() {
    Ya(this, e).delay = +t.apply(this, arguments);
  };
}
function um(e, t) {
  return t = +t, function() {
    Ya(this, e).delay = t;
  };
}
function dm(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? cm : um)(t, e)) : dn(this.node(), t).delay;
}
function fm(e, t) {
  return function() {
    En(this, e).duration = +t.apply(this, arguments);
  };
}
function hm(e, t) {
  return t = +t, function() {
    En(this, e).duration = t;
  };
}
function gm(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? fm : hm)(t, e)) : dn(this.node(), t).duration;
}
function vm(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    En(this, e).ease = t;
  };
}
function pm(e) {
  var t = this._id;
  return arguments.length ? this.each(vm(t, e)) : dn(this.node(), t).ease;
}
function mm(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    En(this, e).ease = n;
  };
}
function ym(e) {
  if (typeof e != "function") throw new Error();
  return this.each(mm(this._id, e));
}
function wm(e) {
  typeof e != "function" && (e = Zu(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, c = 0; c < s; ++c)
      (l = i[c]) && e.call(l, l.__data__, c, i) && a.push(l);
  return new Rn(r, this._parents, this._name, this._id);
}
function bm(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), s = new Array(r), a = 0; a < i; ++a)
    for (var l = t[a], c = n[a], d = l.length, f = s[a] = new Array(d), h, g = 0; g < d; ++g)
      (h = l[g] || c[g]) && (f[g] = h);
  for (; a < r; ++a)
    s[a] = t[a];
  return new Rn(s, this._parents, this._name, this._id);
}
function xm(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function _m(e, t, n) {
  var r, o, i = xm(t) ? Ya : En;
  return function() {
    var s = i(this, e), a = s.on;
    a !== r && (o = (r = a).copy()).on(t, n), s.on = o;
  };
}
function Cm(e, t) {
  var n = this._id;
  return arguments.length < 2 ? dn(this.node(), n).on.on(e) : this.each(_m(n, e, t));
}
function km(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function Sm() {
  return this.on("end.remove", km(this._id));
}
function Em(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Ba(e));
  for (var r = this._groups, o = r.length, i = new Array(o), s = 0; s < o; ++s)
    for (var a = r[s], l = a.length, c = i[s] = new Array(l), d, f, h = 0; h < l; ++h)
      (d = a[h]) && (f = e.call(d, d.__data__, h, a)) && ("__data__" in d && (f.__data__ = d.__data__), c[h] = f, vs(c[h], t, n, h, c, dn(d, n)));
  return new Rn(i, this._parents, t, n);
}
function Nm(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Ku(e));
  for (var r = this._groups, o = r.length, i = [], s = [], a = 0; a < o; ++a)
    for (var l = r[a], c = l.length, d, f = 0; f < c; ++f)
      if (d = l[f]) {
        for (var h = e.call(d, d.__data__, f, l), g, y = dn(d, n), w = 0, b = h.length; w < b; ++w)
          (g = h[w]) && vs(g, t, n, w, h, y);
        i.push(h), s.push(d);
      }
  return new Rn(i, s, t, n);
}
var Pm = jo.prototype.constructor;
function Tm() {
  return new Pm(this._groups, this._parents);
}
function $m(e, t) {
  var n, r, o;
  return function() {
    var i = Qr(this, e), s = (this.style.removeProperty(e), Qr(this, e));
    return i === s ? null : i === n && s === r ? o : o = t(n = i, r = s);
  };
}
function hd(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Mm(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = Qr(this, e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function Am(e, t, n) {
  var r, o, i;
  return function() {
    var s = Qr(this, e), a = n(this), l = a + "";
    return a == null && (l = a = (this.style.removeProperty(e), Qr(this, e))), s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a));
  };
}
function Dm(e, t) {
  var n, r, o, i = "style." + t, s = "end." + i, a;
  return function() {
    var l = En(this, e), c = l.on, d = l.value[i] == null ? a || (a = hd(t)) : void 0;
    (c !== n || o !== d) && (r = (n = c).copy()).on(s, o = d), l.on = r;
  };
}
function Om(e, t, n) {
  var r = (e += "") == "transform" ? V1 : fd;
  return t == null ? this.styleTween(e, $m(e, r)).on("end.style." + e, hd(e)) : typeof t == "function" ? this.styleTween(e, Am(e, r, ja(this, "style." + e, t))).each(Dm(this._id, e)) : this.styleTween(e, Mm(e, r, t), n).on("end.style." + e, null);
}
function Vm(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function zm(e, t, n) {
  var r, o;
  function i() {
    var s = t.apply(this, arguments);
    return s !== o && (r = (o = s) && Vm(e, s, n)), r;
  }
  return i._value = t, i;
}
function Im(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  return this.tween(r, zm(e, t, n ?? ""));
}
function Lm(e) {
  return function() {
    this.textContent = e;
  };
}
function Hm(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function Rm(e) {
  return this.tween("text", typeof e == "function" ? Hm(ja(this, "text", e)) : Lm(e == null ? "" : e + ""));
}
function Bm(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function Fm(e) {
  var t, n;
  function r() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && Bm(o)), t;
  }
  return r._value = e, r;
}
function Km(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, Fm(e));
}
function Zm() {
  for (var e = this._name, t = this._id, n = gd(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, c = 0; c < a; ++c)
      if (l = s[c]) {
        var d = dn(l, t);
        vs(l, e, n, c, s, {
          time: d.time + d.delay + d.duration,
          delay: 0,
          duration: d.duration,
          ease: d.ease
        });
      }
  return new Rn(r, this._parents, e, n);
}
function Wm() {
  var e, t, n = this, r = n._id, o = n.size();
  return new Promise(function(i, s) {
    var a = { value: s }, l = { value: function() {
      --o === 0 && i();
    } };
    n.each(function() {
      var c = En(this, r), d = c.on;
      d !== e && (t = (e = d).copy(), t._.cancel.push(a), t._.interrupt.push(a), t._.end.push(l)), c.on = t;
    }), o === 0 && i();
  });
}
var Ym = 0;
function Rn(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function gd() {
  return ++Ym;
}
var Nn = jo.prototype;
Rn.prototype = {
  constructor: Rn,
  select: Em,
  selectAll: Nm,
  selectChild: Nn.selectChild,
  selectChildren: Nn.selectChildren,
  filter: wm,
  merge: bm,
  selection: Tm,
  transition: Zm,
  call: Nn.call,
  nodes: Nn.nodes,
  node: Nn.node,
  size: Nn.size,
  empty: Nn.empty,
  each: Nn.each,
  on: Cm,
  attr: rm,
  attrTween: lm,
  style: Om,
  styleTween: Im,
  text: Rm,
  textTween: Km,
  remove: Sm,
  tween: G1,
  delay: dm,
  duration: gm,
  ease: pm,
  easeVarying: ym,
  end: Wm,
  [Symbol.iterator]: Nn[Symbol.iterator]
};
function jm(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var Xm = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: jm
};
function qm(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function Gm(e) {
  var t, n;
  e instanceof Rn ? (t = e._id, e = e._name) : (t = gd(), (n = Xm).time = Wa(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, c = 0; c < a; ++c)
      (l = s[c]) && vs(l, e, t, c, s, n || qm(l, t));
  return new Rn(r, this._parents, e, t);
}
jo.prototype.interrupt = j1;
jo.prototype.transition = Gm;
const fi = (e) => () => e;
function Um(e, {
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
function An(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
An.prototype = {
  constructor: An,
  scale: function(e) {
    return e === 1 ? this : new An(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new An(this.k, this.x + this.k * e, this.y + this.k * t);
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
var ps = new An(1, 0, 0);
vd.prototype = An.prototype;
function vd(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return ps;
  return e.__zoom;
}
function Ms(e) {
  e.stopImmediatePropagation();
}
function ho(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Jm(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function Qm() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function Yl() {
  return this.__zoom || ps;
}
function e0(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function t0() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function n0(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0], o = e.invertX(t[1][0]) - n[1][0], i = e.invertY(t[0][1]) - n[0][1], s = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    s > i ? (i + s) / 2 : Math.min(0, i) || Math.max(0, s)
  );
}
function pd() {
  var e = Jm, t = Qm, n = n0, r = e0, o = t0, i = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], a = 250, l = _i, c = fs("start", "zoom", "end"), d, f, h, g = 500, y = 150, w = 0, b = 10;
  function m(x) {
    x.property("__zoom", Yl).on("wheel.zoom", V, { passive: !1 }).on("mousedown.zoom", L).on("dblclick.zoom", Y).filter(o).on("touchstart.zoom", H).on("touchmove.zoom", N).on("touchend.zoom touchcancel.zoom", M).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  m.transform = function(x, C, A, D) {
    var K = x.selection ? x.selection() : x;
    K.property("__zoom", Yl), x !== K ? S(x, C, A, D) : K.interrupt().each(function() {
      T(this, arguments).event(D).start().zoom(null, typeof C == "function" ? C.apply(this, arguments) : C).end();
    });
  }, m.scaleBy = function(x, C, A, D) {
    m.scaleTo(x, function() {
      var K = this.__zoom.k, X = typeof C == "function" ? C.apply(this, arguments) : C;
      return K * X;
    }, A, D);
  }, m.scaleTo = function(x, C, A, D) {
    m.transform(x, function() {
      var K = t.apply(this, arguments), X = this.__zoom, $ = A == null ? _(K) : typeof A == "function" ? A.apply(this, arguments) : A, W = X.invert($), U = typeof C == "function" ? C.apply(this, arguments) : C;
      return n(E(k(X, U), $, W), K, s);
    }, A, D);
  }, m.translateBy = function(x, C, A, D) {
    m.transform(x, function() {
      return n(this.__zoom.translate(
        typeof C == "function" ? C.apply(this, arguments) : C,
        typeof A == "function" ? A.apply(this, arguments) : A
      ), t.apply(this, arguments), s);
    }, null, D);
  }, m.translateTo = function(x, C, A, D, K) {
    m.transform(x, function() {
      var X = t.apply(this, arguments), $ = this.__zoom, W = D == null ? _(X) : typeof D == "function" ? D.apply(this, arguments) : D;
      return n(ps.translate(W[0], W[1]).scale($.k).translate(
        typeof C == "function" ? -C.apply(this, arguments) : -C,
        typeof A == "function" ? -A.apply(this, arguments) : -A
      ), X, s);
    }, D, K);
  };
  function k(x, C) {
    return C = Math.max(i[0], Math.min(i[1], C)), C === x.k ? x : new An(C, x.x, x.y);
  }
  function E(x, C, A) {
    var D = C[0] - A[0] * x.k, K = C[1] - A[1] * x.k;
    return D === x.x && K === x.y ? x : new An(x.k, D, K);
  }
  function _(x) {
    return [(+x[0][0] + +x[1][0]) / 2, (+x[0][1] + +x[1][1]) / 2];
  }
  function S(x, C, A, D) {
    x.on("start.zoom", function() {
      T(this, arguments).event(D).start();
    }).on("interrupt.zoom end.zoom", function() {
      T(this, arguments).event(D).end();
    }).tween("zoom", function() {
      var K = this, X = arguments, $ = T(K, X).event(D), W = t.apply(K, X), U = A == null ? _(W) : typeof A == "function" ? A.apply(K, X) : A, Z = Math.max(W[1][0] - W[0][0], W[1][1] - W[0][1]), G = K.__zoom, R = typeof C == "function" ? C.apply(K, X) : C, j = l(G.invert(U).concat(Z / G.k), R.invert(U).concat(Z / R.k));
      return function(Q) {
        if (Q === 1) Q = R;
        else {
          var ne = j(Q), J = Z / ne[2];
          Q = new An(J, U[0] - ne[0] * J, U[1] - ne[1] * J);
        }
        $.zoom(null, Q);
      };
    });
  }
  function T(x, C, A) {
    return !A && x.__zooming || new z(x, C);
  }
  function z(x, C) {
    this.that = x, this.args = C, this.active = 0, this.sourceEvent = null, this.extent = t.apply(x, C), this.taps = 0;
  }
  z.prototype = {
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
        new Um(x, {
          sourceEvent: this.sourceEvent,
          target: m,
          transform: this.that.__zoom,
          dispatch: c
        }),
        C
      );
    }
  };
  function V(x, ...C) {
    if (!e.apply(this, arguments)) return;
    var A = T(this, C).event(x), D = this.__zoom, K = Math.max(i[0], Math.min(i[1], D.k * Math.pow(2, r.apply(this, arguments)))), X = rn(x);
    if (A.wheel)
      (A.mouse[0][0] !== X[0] || A.mouse[0][1] !== X[1]) && (A.mouse[1] = D.invert(A.mouse[0] = X)), clearTimeout(A.wheel);
    else {
      if (D.k === K) return;
      A.mouse = [X, D.invert(X)], Si(this), A.start();
    }
    ho(x), A.wheel = setTimeout($, y), A.zoom("mouse", n(E(k(D, K), A.mouse[0], A.mouse[1]), A.extent, s));
    function $() {
      A.wheel = null, A.end();
    }
  }
  function L(x, ...C) {
    if (h || !e.apply(this, arguments)) return;
    var A = x.currentTarget, D = T(this, C, !0).event(x), K = Ut(x.view).on("mousemove.zoom", U, !0).on("mouseup.zoom", Z, !0), X = rn(x, A), $ = x.clientX, W = x.clientY;
    ed(x.view), Ms(x), D.mouse = [X, this.__zoom.invert(X)], Si(this), D.start();
    function U(G) {
      if (ho(G), !D.moved) {
        var R = G.clientX - $, j = G.clientY - W;
        D.moved = R * R + j * j > w;
      }
      D.event(G).zoom("mouse", n(E(D.that.__zoom, D.mouse[0] = rn(G, A), D.mouse[1]), D.extent, s));
    }
    function Z(G) {
      K.on("mousemove.zoom mouseup.zoom", null), td(G.view, D.moved), ho(G), D.event(G).end();
    }
  }
  function Y(x, ...C) {
    if (e.apply(this, arguments)) {
      var A = this.__zoom, D = rn(x.changedTouches ? x.changedTouches[0] : x, this), K = A.invert(D), X = A.k * (x.shiftKey ? 0.5 : 2), $ = n(E(k(A, X), D, K), t.apply(this, C), s);
      ho(x), a > 0 ? Ut(this).transition().duration(a).call(S, $, D, x) : Ut(this).call(m.transform, $, D, x);
    }
  }
  function H(x, ...C) {
    if (e.apply(this, arguments)) {
      var A = x.touches, D = A.length, K = T(this, C, x.changedTouches.length === D).event(x), X, $, W, U;
      for (Ms(x), $ = 0; $ < D; ++$)
        W = A[$], U = rn(W, this), U = [U, this.__zoom.invert(U), W.identifier], K.touch0 ? !K.touch1 && K.touch0[2] !== U[2] && (K.touch1 = U, K.taps = 0) : (K.touch0 = U, X = !0, K.taps = 1 + !!d);
      d && (d = clearTimeout(d)), X && (K.taps < 2 && (f = U[0], d = setTimeout(function() {
        d = null;
      }, g)), Si(this), K.start());
    }
  }
  function N(x, ...C) {
    if (this.__zooming) {
      var A = T(this, C).event(x), D = x.changedTouches, K = D.length, X, $, W, U;
      for (ho(x), X = 0; X < K; ++X)
        $ = D[X], W = rn($, this), A.touch0 && A.touch0[2] === $.identifier ? A.touch0[0] = W : A.touch1 && A.touch1[2] === $.identifier && (A.touch1[0] = W);
      if ($ = A.that.__zoom, A.touch1) {
        var Z = A.touch0[0], G = A.touch0[1], R = A.touch1[0], j = A.touch1[1], Q = (Q = R[0] - Z[0]) * Q + (Q = R[1] - Z[1]) * Q, ne = (ne = j[0] - G[0]) * ne + (ne = j[1] - G[1]) * ne;
        $ = k($, Math.sqrt(Q / ne)), W = [(Z[0] + R[0]) / 2, (Z[1] + R[1]) / 2], U = [(G[0] + j[0]) / 2, (G[1] + j[1]) / 2];
      } else if (A.touch0) W = A.touch0[0], U = A.touch0[1];
      else return;
      A.zoom("touch", n(E($, W, U), A.extent, s));
    }
  }
  function M(x, ...C) {
    if (this.__zooming) {
      var A = T(this, C).event(x), D = x.changedTouches, K = D.length, X, $;
      for (Ms(x), h && clearTimeout(h), h = setTimeout(function() {
        h = null;
      }, g), X = 0; X < K; ++X)
        $ = D[X], A.touch0 && A.touch0[2] === $.identifier ? delete A.touch0 : A.touch1 && A.touch1[2] === $.identifier && delete A.touch1;
      if (A.touch1 && !A.touch0 && (A.touch0 = A.touch1, delete A.touch1), A.touch0) A.touch0[1] = this.__zoom.invert(A.touch0[0]);
      else if (A.end(), A.taps === 2 && ($ = rn($, this), Math.hypot(f[0] - $[0], f[1] - $[1]) < b)) {
        var W = Ut(this).on("dblclick.zoom");
        W && W.apply(this, arguments);
      }
    }
  }
  return m.wheelDelta = function(x) {
    return arguments.length ? (r = typeof x == "function" ? x : fi(+x), m) : r;
  }, m.filter = function(x) {
    return arguments.length ? (e = typeof x == "function" ? x : fi(!!x), m) : e;
  }, m.touchable = function(x) {
    return arguments.length ? (o = typeof x == "function" ? x : fi(!!x), m) : o;
  }, m.extent = function(x) {
    return arguments.length ? (t = typeof x == "function" ? x : fi([[+x[0][0], +x[0][1]], [+x[1][0], +x[1][1]]]), m) : t;
  }, m.scaleExtent = function(x) {
    return arguments.length ? (i[0] = +x[0], i[1] = +x[1], m) : [i[0], i[1]];
  }, m.translateExtent = function(x) {
    return arguments.length ? (s[0][0] = +x[0][0], s[1][0] = +x[1][0], s[0][1] = +x[0][1], s[1][1] = +x[1][1], m) : [[s[0][0], s[0][1]], [s[1][0], s[1][1]]];
  }, m.constrain = function(x) {
    return arguments.length ? (n = x, m) : n;
  }, m.duration = function(x) {
    return arguments.length ? (a = +x, m) : a;
  }, m.interpolate = function(x) {
    return arguments.length ? (l = x, m) : l;
  }, m.on = function() {
    var x = c.on.apply(c, arguments);
    return x === c ? m : x;
  }, m.clickDistance = function(x) {
    return arguments.length ? (w = (x = +x) * x, m) : Math.sqrt(w);
  }, m.tapDistance = function(x) {
    return arguments.length ? (b = +x, m) : b;
  }, m;
}
const Mo = {
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
}, ia = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
], md = ["Enter", " ", "Escape"], r0 = {
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
var to;
(function(e) {
  e.Strict = "strict", e.Loose = "loose";
})(to || (to = {}));
var Nr;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(Nr || (Nr = {}));
var Bi;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(Bi || (Bi = {}));
const sa = {
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
var Mn;
(function(e) {
  e.Bezier = "default", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e.SimpleBezier = "simplebezier";
})(Mn || (Mn = {}));
var Ao;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(Ao || (Ao = {}));
var we;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(we || (we = {}));
const jl = {
  [we.Left]: we.Right,
  [we.Right]: we.Left,
  [we.Top]: we.Bottom,
  [we.Bottom]: we.Top
};
function o0(e, t) {
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
function Xl(e, t, n) {
  if (!n)
    return;
  const r = [];
  e.forEach((o, i) => {
    t?.has(i) || r.push(o);
  }), r.length && n(r);
}
function i0(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const yd = (e) => "id" in e && "source" in e && "target" in e, s0 = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), Xa = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), qo = (e, t = [0, 0]) => {
  const { width: n, height: r } = vr(e), o = e.origin ?? t, i = n * o[0], s = r * o[1];
  return {
    x: e.position.x - i,
    y: e.position.y - s
  };
}, a0 = (e, t = { nodeOrigin: [0, 0] }) => {
  if (e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = e.reduce((r, o) => {
    const i = typeof o == "string";
    let s = !t.nodeLookup && !i ? o : void 0;
    t.nodeLookup && (s = i ? t.nodeLookup.get(o) : Xa(o) ? o : t.nodeLookup.get(o.id));
    const a = s ? Fi(s, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return ms(r, a);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return ys(n);
}, Go = (e, t = {}) => {
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 }, r = !1;
  return e.forEach((o) => {
    (t.filter === void 0 || t.filter(o)) && (n = ms(n, Fi(o)), r = !0);
  }), r ? ys(n) : { x: 0, y: 0, width: 0, height: 0 };
}, qa = (e, t, [n, r, o] = [0, 0, 1], i = !1, s = !1) => {
  const a = {
    ...Jo(t, [n, r, o]),
    width: t.width / o,
    height: t.height / o
  }, l = [];
  for (const c of e.values()) {
    const { measured: d, selectable: f = !0, hidden: h = !1 } = c;
    if (s && !f || h)
      continue;
    const g = d.width ?? c.width ?? c.initialWidth ?? null, y = d.height ?? c.height ?? c.initialHeight ?? null, w = Do(a, ro(c)), b = (g ?? 0) * (y ?? 0), m = i && w > 0;
    (!c.internals.handleBounds || m || w >= b || c.dragging) && l.push(c);
  }
  return l;
}, l0 = (e, t) => {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    n.add(r.id);
  }), t.filter((r) => n.has(r.source) || n.has(r.target));
};
function c0(e, t) {
  const n = /* @__PURE__ */ new Map(), r = t?.nodes ? new Set(t.nodes.map((o) => o.id)) : null;
  return e.forEach((o) => {
    o.measured.width && o.measured.height && (t?.includeHiddenNodes || !o.hidden) && (!r || r.has(o.id)) && n.set(o.id, o);
  }), n;
}
async function u0({ nodes: e, width: t, height: n, panZoom: r, minZoom: o, maxZoom: i }, s) {
  if (e.size === 0)
    return Promise.resolve(!0);
  const a = c0(e, s), l = Go(a), c = Ga(l, t, n, s?.minZoom ?? o, s?.maxZoom ?? i, s?.padding ?? 0.1);
  return await r.setViewport(c, {
    duration: s?.duration,
    ease: s?.ease,
    interpolate: s?.interpolate
  }), Promise.resolve(!0);
}
function wd({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
  const s = n.get(e), a = s.parentId ? n.get(s.parentId) : void 0, { x: l, y: c } = a ? a.internals.positionAbsolute : { x: 0, y: 0 }, d = s.origin ?? r;
  let f = s.extent || o;
  if (s.extent === "parent" && !s.expandParent)
    if (!a)
      i?.("005", Mo.error005());
    else {
      const g = a.measured.width, y = a.measured.height;
      g && y && (f = [
        [l, c],
        [l + g, c + y]
      ]);
    }
  else a && oo(s.extent) && (f = [
    [s.extent[0][0] + l, s.extent[0][1] + c],
    [s.extent[1][0] + l, s.extent[1][1] + c]
  ]);
  const h = oo(f) ? Dr(t, f, s.measured) : t;
  return (s.measured.width === void 0 || s.measured.height === void 0) && i?.("015", Mo.error015()), {
    position: {
      x: h.x - l + (s.measured.width ?? 0) * d[0],
      y: h.y - c + (s.measured.height ?? 0) * d[1]
    },
    positionAbsolute: h
  };
}
async function d0({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: r, onBeforeDelete: o }) {
  const i = new Set(e.map((h) => h.id)), s = [];
  for (const h of n) {
    if (h.deletable === !1)
      continue;
    const g = i.has(h.id), y = !g && h.parentId && s.find((w) => w.id === h.parentId);
    (g || y) && s.push(h);
  }
  const a = new Set(t.map((h) => h.id)), l = r.filter((h) => h.deletable !== !1), d = l0(s, l);
  for (const h of l)
    a.has(h.id) && !d.find((y) => y.id === h.id) && d.push(h);
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
const no = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), Dr = (e = { x: 0, y: 0 }, t, n) => ({
  x: no(e.x, t[0][0], t[1][0] - (n?.width ?? 0)),
  y: no(e.y, t[0][1], t[1][1] - (n?.height ?? 0))
});
function bd(e, t, n) {
  const { width: r, height: o } = vr(n), { x: i, y: s } = n.internals.positionAbsolute;
  return Dr(e, [
    [i, s],
    [i + r, s + o]
  ], t);
}
const ql = (e, t, n) => e < t ? no(Math.abs(e - t), 1, t) / t : e > n ? -no(Math.abs(e - n), 1, t) / t : 0, xd = (e, t, n = 15, r = 40) => {
  const o = ql(e.x, r, t.width - r) * n, i = ql(e.y, r, t.height - r) * n;
  return [o, i];
}, ms = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), aa = ({ x: e, y: t, width: n, height: r }) => ({
  x: e,
  y: t,
  x2: e + n,
  y2: t + r
}), ys = ({ x: e, y: t, x2: n, y2: r }) => ({
  x: e,
  y: t,
  width: n - e,
  height: r - t
}), ro = (e, t = [0, 0]) => {
  const { x: n, y: r } = Xa(e) ? e.internals.positionAbsolute : qo(e, t);
  return {
    x: n,
    y: r,
    width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
    height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
  };
}, Fi = (e, t = [0, 0]) => {
  const { x: n, y: r } = Xa(e) ? e.internals.positionAbsolute : qo(e, t);
  return {
    x: n,
    y: r,
    x2: n + (e.measured?.width ?? e.width ?? e.initialWidth ?? 0),
    y2: r + (e.measured?.height ?? e.height ?? e.initialHeight ?? 0)
  };
}, _d = (e, t) => ys(ms(aa(e), aa(t))), Do = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, Gl = (e) => Dn(e.width) && Dn(e.height) && Dn(e.x) && Dn(e.y), Dn = (e) => !isNaN(e) && isFinite(e), f0 = (e, t) => {
}, Uo = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), Jo = ({ x: e, y: t }, [n, r, o], i = !1, s = [1, 1]) => {
  const a = {
    x: (e - n) / o,
    y: (t - r) / o
  };
  return i ? Uo(a, s) : a;
}, Ki = ({ x: e, y: t }, [n, r, o]) => ({
  x: e * o + n,
  y: t * o + r
});
function Rr(e, t) {
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
function h0(e, t, n) {
  if (typeof e == "string" || typeof e == "number") {
    const r = Rr(e, n), o = Rr(e, t);
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
    const r = Rr(e.top ?? e.y ?? 0, n), o = Rr(e.bottom ?? e.y ?? 0, n), i = Rr(e.left ?? e.x ?? 0, t), s = Rr(e.right ?? e.x ?? 0, t);
    return { top: r, right: s, bottom: o, left: i, x: i + s, y: r + o };
  }
  return { top: 0, right: 0, bottom: 0, left: 0, x: 0, y: 0 };
}
function g0(e, t, n, r, o, i) {
  const { x: s, y: a } = Ki(e, [t, n, r]), { x: l, y: c } = Ki({ x: e.x + e.width, y: e.y + e.height }, [t, n, r]), d = o - l, f = i - c;
  return {
    left: Math.floor(s),
    top: Math.floor(a),
    right: Math.floor(d),
    bottom: Math.floor(f)
  };
}
const Ga = (e, t, n, r, o, i) => {
  const s = h0(i, t, n), a = (t - s.x) / e.width, l = (n - s.y) / e.height, c = Math.min(a, l), d = no(c, r, o), f = e.x + e.width / 2, h = e.y + e.height / 2, g = t / 2 - f * d, y = n / 2 - h * d, w = g0(e, g, y, d, t, n), b = {
    left: Math.min(w.left - s.left, 0),
    top: Math.min(w.top - s.top, 0),
    right: Math.min(w.right - s.right, 0),
    bottom: Math.min(w.bottom - s.bottom, 0)
  };
  return {
    x: g - b.left + b.right,
    y: y - b.top + b.bottom,
    zoom: d
  };
}, _r = () => typeof navigator < "u" && navigator?.userAgent?.indexOf("Mac") >= 0;
function oo(e) {
  return e != null && e !== "parent";
}
function vr(e) {
  return {
    width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
    height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
  };
}
function Cd(e) {
  return (e.measured?.width ?? e.width ?? e.initialWidth) !== void 0 && (e.measured?.height ?? e.height ?? e.initialHeight) !== void 0;
}
function v0(e, t = { width: 0, height: 0 }, n, r, o) {
  const i = { ...e }, s = r.get(n);
  if (s) {
    const a = s.origin || o;
    i.x += s.internals.positionAbsolute.x - (t.width ?? 0) * a[0], i.y += s.internals.positionAbsolute.y - (t.height ?? 0) * a[1];
  }
  return i;
}
function p0(e) {
  return { ...r0, ...e || {} };
}
function As(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: i, y: s } = an(e), a = Jo({ x: i - (o?.left ?? 0), y: s - (o?.top ?? 0) }, r), { x: l, y: c } = n ? Uo(a, t) : a;
  return {
    xSnapped: l,
    ySnapped: c,
    ...a
  };
}
const kd = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), Sd = (e) => e?.getRootNode?.() || window?.document, m0 = ["INPUT", "SELECT", "TEXTAREA"];
function Ed(e) {
  const t = e.composedPath?.()?.[0] || e.target;
  return t?.nodeType !== 1 ? !1 : m0.includes(t.nodeName) || t.hasAttribute("contenteditable") || !!t.closest(".nokey");
}
const Nd = (e) => "clientX" in e, an = (e, t) => {
  const n = Nd(e), r = n ? e.clientX : e.touches?.[0].clientX, o = n ? e.clientY : e.touches?.[0].clientY;
  return {
    x: r - (t?.left ?? 0),
    y: o - (t?.top ?? 0)
  };
}, Ul = (e, t, n, r, o) => {
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
      ...kd(s)
    };
  });
};
function y0({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: o, sourceControlY: i, targetControlX: s, targetControlY: a }) {
  const l = e * 0.125 + o * 0.375 + s * 0.375 + n * 0.125, c = t * 0.125 + i * 0.375 + a * 0.375 + r * 0.125, d = Math.abs(l - e), f = Math.abs(c - t);
  return [l, c, d, f];
}
function hi(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function Jl({ pos: e, x1: t, y1: n, x2: r, y2: o, c: i }) {
  switch (e) {
    case we.Left:
      return [t - hi(t - r, i), n];
    case we.Right:
      return [t + hi(r - t, i), n];
    case we.Top:
      return [t, n - hi(n - o, i)];
    case we.Bottom:
      return [t, n + hi(o - n, i)];
  }
}
function Pd({ sourceX: e, sourceY: t, sourcePosition: n = we.Bottom, targetX: r, targetY: o, targetPosition: i = we.Top, curvature: s = 0.25 }) {
  const [a, l] = Jl({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: o,
    c: s
  }), [c, d] = Jl({
    pos: i,
    x1: r,
    y1: o,
    x2: e,
    y2: t,
    c: s
  }), [f, h, g, y] = y0({
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
    y
  ];
}
function Td({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const o = Math.abs(n - e) / 2, i = n < e ? n + o : n - o, s = Math.abs(r - t) / 2, a = r < t ? r + s : r - s;
  return [i, a, o, s];
}
function w0({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r, elevateOnSelect: o = !1 }) {
  if (r !== void 0)
    return r;
  const i = o && n ? 1e3 : 0, s = Math.max(e.parentId || o && e.selected ? e.internals.z : 0, t.parentId || o && t.selected ? t.internals.z : 0);
  return i + s;
}
function b0({ sourceNode: e, targetNode: t, width: n, height: r, transform: o }) {
  const i = ms(Fi(e), Fi(t));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const s = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return Do(s, ys(i)) > 0;
}
const x0 = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, _0 = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), C0 = (e, t) => {
  if (!e.source || !e.target)
    return t;
  let n;
  return yd(e) ? n = { ...e } : n = {
    ...e,
    id: x0(e)
  }, _0(n, t) ? t : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, t.concat(n));
};
function $d({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const [o, i, s, a] = Td({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: r
  });
  return [`M ${e},${t}L ${n},${r}`, o, i, s, a];
}
const Ql = {
  [we.Left]: { x: -1, y: 0 },
  [we.Right]: { x: 1, y: 0 },
  [we.Top]: { x: 0, y: -1 },
  [we.Bottom]: { x: 0, y: 1 }
}, k0 = ({ source: e, sourcePosition: t = we.Bottom, target: n }) => t === we.Left || t === we.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, ec = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function S0({ source: e, sourcePosition: t = we.Bottom, target: n, targetPosition: r = we.Top, center: o, offset: i, stepPosition: s }) {
  const a = Ql[t], l = Ql[r], c = { x: e.x + a.x * i, y: e.y + a.y * i }, d = { x: n.x + l.x * i, y: n.y + l.y * i }, f = k0({
    source: c,
    sourcePosition: t,
    target: d
  }), h = f.x !== 0 ? "x" : "y", g = f[h];
  let y = [], w, b;
  const m = { x: 0, y: 0 }, k = { x: 0, y: 0 }, [, , E, _] = Td({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (a[h] * l[h] === -1) {
    h === "x" ? (w = o.x ?? c.x + (d.x - c.x) * s, b = o.y ?? (c.y + d.y) / 2) : (w = o.x ?? (c.x + d.x) / 2, b = o.y ?? c.y + (d.y - c.y) * s);
    const T = [
      { x: w, y: c.y },
      { x: w, y: d.y }
    ], z = [
      { x: c.x, y: b },
      { x: d.x, y: b }
    ];
    a[h] === g ? y = h === "x" ? T : z : y = h === "x" ? z : T;
  } else {
    const T = [{ x: c.x, y: d.y }], z = [{ x: d.x, y: c.y }];
    if (h === "x" ? y = a.x === g ? z : T : y = a.y === g ? T : z, t === r) {
      const N = Math.abs(e[h] - n[h]);
      if (N <= i) {
        const M = Math.min(i - 1, i - N);
        a[h] === g ? m[h] = (c[h] > e[h] ? -1 : 1) * M : k[h] = (d[h] > n[h] ? -1 : 1) * M;
      }
    }
    if (t !== r) {
      const N = h === "x" ? "y" : "x", M = a[h] === l[N], x = c[N] > d[N], C = c[N] < d[N];
      (a[h] === 1 && (!M && x || M && C) || a[h] !== 1 && (!M && C || M && x)) && (y = h === "x" ? T : z);
    }
    const V = { x: c.x + m.x, y: c.y + m.y }, L = { x: d.x + k.x, y: d.y + k.y }, Y = Math.max(Math.abs(V.x - y[0].x), Math.abs(L.x - y[0].x)), H = Math.max(Math.abs(V.y - y[0].y), Math.abs(L.y - y[0].y));
    Y >= H ? (w = (V.x + L.x) / 2, b = y[0].y) : (w = y[0].x, b = (V.y + L.y) / 2);
  }
  return [[
    e,
    { x: c.x + m.x, y: c.y + m.y },
    ...y,
    { x: d.x + k.x, y: d.y + k.y },
    n
  ], w, b, E, _];
}
function E0(e, t, n, r) {
  const o = Math.min(ec(e, t) / 2, ec(t, n) / 2, r), { x: i, y: s } = t;
  if (e.x === i && i === n.x || e.y === s && s === n.y)
    return `L${i} ${s}`;
  if (e.y === s) {
    const c = e.x < n.x ? -1 : 1, d = e.y < n.y ? 1 : -1;
    return `L ${i + o * c},${s}Q ${i},${s} ${i},${s + o * d}`;
  }
  const a = e.x < n.x ? 1 : -1, l = e.y < n.y ? -1 : 1;
  return `L ${i},${s + o * l}Q ${i},${s} ${i + o * a},${s}`;
}
function Ua({ sourceX: e, sourceY: t, sourcePosition: n = we.Bottom, targetX: r, targetY: o, targetPosition: i = we.Top, borderRadius: s = 5, centerX: a, centerY: l, offset: c = 20, stepPosition: d = 0.5 }) {
  const [f, h, g, y, w] = S0({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: a, y: l },
    offset: c,
    stepPosition: d
  });
  return [f.reduce((m, k, E) => {
    let _ = "";
    return E > 0 && E < f.length - 1 ? _ = E0(f[E - 1], k, f[E + 1], s) : _ = `${E === 0 ? "M" : "L"}${k.x} ${k.y}`, m += _, m;
  }, ""), h, g, y, w];
}
function tc(e) {
  return e && !!(e.internals.handleBounds || e.handles?.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function N0(e) {
  const { sourceNode: t, targetNode: n } = e;
  if (!tc(t) || !tc(n))
    return null;
  const r = t.internals.handleBounds || nc(t.handles), o = n.internals.handleBounds || nc(n.handles), i = rc(r?.source ?? [], e.sourceHandle), s = rc(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === to.Strict ? o?.target ?? [] : (o?.target ?? []).concat(o?.source ?? []),
    e.targetHandle
  );
  if (!i || !s)
    return e.onError?.("008", Mo.error008(i ? "target" : "source", {
      id: e.id,
      sourceHandle: e.sourceHandle,
      targetHandle: e.targetHandle
    })), null;
  const a = i?.position || we.Bottom, l = s?.position || we.Top, c = Oo(t, i, a), d = Oo(n, s, l);
  return {
    sourceX: c.x,
    sourceY: c.y,
    targetX: d.x,
    targetY: d.y,
    sourcePosition: a,
    targetPosition: l
  };
}
function nc(e) {
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
function Oo(e, t, n = we.Left, r = !1) {
  const o = (t?.x ?? 0) + e.internals.positionAbsolute.x, i = (t?.y ?? 0) + e.internals.positionAbsolute.y, { width: s, height: a } = t ?? vr(e);
  if (r)
    return { x: o + s / 2, y: i + a / 2 };
  switch (t?.position ?? n) {
    case we.Top:
      return { x: o + s / 2, y: i };
    case we.Right:
      return { x: o + s, y: i + a / 2 };
    case we.Bottom:
      return { x: o + s / 2, y: i + a };
    case we.Left:
      return { x: o, y: i + a / 2 };
  }
}
function rc(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function la(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((r) => `${r}=${e[r]}`).join("&")}` : "";
}
function P0(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const i = /* @__PURE__ */ new Set();
  return e.reduce((s, a) => ([a.markerStart || r, a.markerEnd || o].forEach((l) => {
    if (l && typeof l == "object") {
      const c = la(l, t);
      i.has(c) || (s.push({ id: c, color: l.color || n, ...l }), i.add(c));
    }
  }), s), []).sort((s, a) => s.id.localeCompare(a.id));
}
function T0(e, t, n, r, o) {
  let i = 0.5;
  o === "start" ? i = 0 : o === "end" && (i = 1);
  let s = [
    (e.x + e.width * i) * t.zoom + t.x,
    e.y * t.zoom + t.y - r
  ], a = [-100 * i, -100];
  switch (n) {
    case we.Right:
      s = [
        (e.x + e.width) * t.zoom + t.x + r,
        (e.y + e.height * i) * t.zoom + t.y
      ], a = [0, -100 * i];
      break;
    case we.Bottom:
      s[1] = (e.y + e.height) * t.zoom + t.y + r, a[1] = 0;
      break;
    case we.Left:
      s = [
        e.x * t.zoom + t.x - r,
        (e.y + e.height * i) * t.zoom + t.y
      ], a = [-100, -100 * i];
      break;
  }
  return `translate(${s[0]}px, ${s[1]}px) translate(${a[0]}%, ${a[1]}%)`;
}
const Md = 1e3, $0 = 10, Ja = {
  nodeOrigin: [0, 0],
  nodeExtent: ia,
  elevateNodesOnSelect: !0,
  defaults: {}
}, M0 = {
  ...Ja,
  checkEquality: !0
};
function Qa(e, t) {
  const n = { ...e };
  for (const r in t)
    t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function A0(e, t, n) {
  const r = Qa(Ja, n);
  for (const o of e.values())
    if (o.parentId)
      el(o, e, t, r);
    else {
      const i = qo(o, r.nodeOrigin), s = oo(o.extent) ? o.extent : r.nodeExtent, a = Dr(i, s, vr(o));
      o.internals.positionAbsolute = a;
    }
}
function D0(e, t) {
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
function O0(e, t, n, r) {
  const o = Qa(M0, r);
  let i = { i: -1 }, s = e.length > 0;
  const a = new Map(t), l = o?.elevateNodesOnSelect ? Md : 0;
  t.clear(), n.clear();
  for (const c of e) {
    let d = a.get(c.id);
    if (o.checkEquality && c === d?.internals.userNode)
      t.set(c.id, d);
    else {
      const f = qo(c, o.nodeOrigin), h = oo(c.extent) ? c.extent : o.nodeExtent, g = Dr(f, h, vr(c));
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
          handleBounds: D0(c, d),
          z: Ad(c, l),
          userNode: c
        }
      }, t.set(c.id, d);
    }
    (d.measured === void 0 || d.measured.width === void 0 || d.measured.height === void 0) && !d.hidden && (s = !1), c.parentId && el(d, t, n, r, i);
  }
  return s;
}
function V0(e, t) {
  if (!e.parentId)
    return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function el(e, t, n, r, o) {
  const { elevateNodesOnSelect: i, nodeOrigin: s, nodeExtent: a } = Qa(Ja, r), l = e.parentId, c = t.get(l);
  if (!c) {
    console.warn(`Parent node ${l} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  V0(e, n), o && !c.parentId && c.internals.rootParentIndex === void 0 && (c.internals.rootParentIndex = ++o.i, c.internals.z = c.internals.z + o.i * $0), o && c.internals.rootParentIndex !== void 0 && (o.i = c.internals.rootParentIndex);
  const d = i ? Md : 0, { x: f, y: h, z: g } = z0(e, c, s, a, d), { positionAbsolute: y } = e.internals, w = f !== y.x || h !== y.y;
  (w || g !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: w ? { x: f, y: h } : y,
      z: g
    }
  });
}
function Ad(e, t) {
  return (Dn(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function z0(e, t, n, r, o) {
  const { x: i, y: s } = t.internals.positionAbsolute, a = vr(e), l = qo(e, n), c = oo(e.extent) ? Dr(l, e.extent, a) : l;
  let d = Dr({ x: i + c.x, y: s + c.y }, r, a);
  e.extent === "parent" && (d = bd(d, a, t));
  const f = Ad(e, o), h = t.internals.z ?? 0;
  return {
    x: d.x,
    y: d.y,
    z: h >= f ? h + 1 : f
  };
}
function I0(e, t, n, r = [0, 0]) {
  const o = [], i = /* @__PURE__ */ new Map();
  for (const s of e) {
    const a = t.get(s.parentId);
    if (!a)
      continue;
    const l = i.get(s.parentId)?.expandedRect ?? ro(a), c = _d(l, s.rect);
    i.set(s.parentId, { expandedRect: c, parent: a });
  }
  return i.size > 0 && i.forEach(({ expandedRect: s, parent: a }, l) => {
    const c = a.internals.positionAbsolute, d = vr(a), f = a.origin ?? r, h = s.x < c.x ? Math.round(Math.abs(c.x - s.x)) : 0, g = s.y < c.y ? Math.round(Math.abs(c.y - s.y)) : 0, y = Math.max(d.width, Math.round(s.width)), w = Math.max(d.height, Math.round(s.height)), b = (y - d.width) * f[0], m = (w - d.height) * f[1];
    (h > 0 || g > 0 || b || m) && (o.push({
      id: l,
      type: "position",
      position: {
        x: a.position.x - h + b,
        y: a.position.y - g + m
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
        width: y + (h ? f[0] * h - b : 0),
        height: w + (g ? f[1] * g - m : 0)
      }
    });
  }), o;
}
function L0(e, t, n, r, o, i) {
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
    const y = kd(h.nodeElement), w = g.measured.width !== y.width || g.measured.height !== y.height;
    if (!!(y.width && y.height && (w || !g.internals.handleBounds || h.force))) {
      const m = h.nodeElement.getBoundingClientRect(), k = oo(g.extent) ? g.extent : i;
      let { positionAbsolute: E } = g.internals;
      g.parentId && g.extent === "parent" ? E = bd(E, y, t.get(g.parentId)) : k && (E = Dr(E, k, y));
      const _ = {
        ...g,
        measured: y,
        internals: {
          ...g.internals,
          positionAbsolute: E,
          handleBounds: {
            source: Ul("source", h.nodeElement, m, d, g.id),
            target: Ul("target", h.nodeElement, m, d, g.id)
          }
        }
      };
      t.set(g.id, _), g.parentId && el(_, t, n, { nodeOrigin: o }), a = !0, w && (l.push({
        id: g.id,
        type: "dimensions",
        dimensions: y
      }), g.expandParent && g.parentId && f.push({
        id: g.id,
        parentId: g.parentId,
        rect: ro(_, o)
      }));
    }
  }
  if (f.length > 0) {
    const h = I0(f, t, n, o);
    l.push(...h);
  }
  return { changes: l, updatedInternals: a };
}
async function H0({ delta: e, panZoom: t, transform: n, translateExtent: r, width: o, height: i }) {
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
function oc(e, t, n, r, o, i) {
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
function R0(e, t, n) {
  e.clear(), t.clear();
  for (const r of n) {
    const { source: o, target: i, sourceHandle: s = null, targetHandle: a = null } = r, l = { edgeId: r.id, source: o, target: i, sourceHandle: s, targetHandle: a }, c = `${o}-${s}--${i}-${a}`, d = `${i}-${a}--${o}-${s}`;
    oc("source", l, d, e, o, s), oc("target", l, c, e, i, a), t.set(r.id, r);
  }
}
function B0(e, t) {
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
function Dd(e, t) {
  if (!e.parentId)
    return !1;
  const n = t.get(e.parentId);
  return n ? n.selected ? !0 : Dd(n, t) : !1;
}
function ic(e, t, n) {
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
function F0(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  for (const [i, s] of e)
    if ((s.selected || s.id === r) && (!s.parentId || !Dd(s, e)) && (s.draggable || t && typeof s.draggable > "u")) {
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
function Ds({ nodeId: e, dragItems: t, nodeLookup: n, dragging: r = !0 }) {
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
function K0({ dragItems: e, snapGrid: t, x: n, y: r }) {
  const o = e.values().next().value;
  if (!o)
    return null;
  const i = {
    x: n - o.distance.x,
    y: r - o.distance.y
  }, s = Uo(i, t);
  return {
    x: s.x - i.x,
    y: s.y - i.y
  };
}
function Z0({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: o }) {
  let i = { x: null, y: null }, s = 0, a = /* @__PURE__ */ new Map(), l = !1, c = { x: 0, y: 0 }, d = null, f = !1, h = null, g = !1, y = !1, w = null;
  function b({ noDragClassName: k, handleSelector: E, domNode: _, isSelectable: S, nodeId: T, nodeClickDistance: z = 0 }) {
    h = Ut(_);
    function V({ x: N, y: M }) {
      const { nodeLookup: x, nodeExtent: C, snapGrid: A, snapToGrid: D, nodeOrigin: K, onNodeDrag: X, onSelectionDrag: $, onError: W, updateNodePositions: U } = t();
      i = { x: N, y: M };
      let Z = !1;
      const G = a.size > 1, R = G && C ? aa(Go(a)) : null, j = G && D ? K0({
        dragItems: a,
        snapGrid: A,
        x: N,
        y: M
      }) : null;
      for (const [Q, ne] of a) {
        if (!x.has(Q))
          continue;
        let J = { x: N - ne.distance.x, y: M - ne.distance.y };
        D && (J = j ? {
          x: Math.round(J.x + j.x),
          y: Math.round(J.y + j.y)
        } : Uo(J, A));
        let _e = null;
        if (G && C && !ne.extent && R) {
          const { positionAbsolute: re } = ne.internals, he = re.x - R.x + C[0][0], me = re.x + ne.measured.width - R.x2 + C[1][0], ke = re.y - R.y + C[0][1], fe = re.y + ne.measured.height - R.y2 + C[1][1];
          _e = [
            [he, ke],
            [me, fe]
          ];
        }
        const { position: oe, positionAbsolute: se } = wd({
          nodeId: Q,
          nextPosition: J,
          nodeLookup: x,
          nodeExtent: _e || C,
          nodeOrigin: K,
          onError: W
        });
        Z = Z || ne.position.x !== oe.x || ne.position.y !== oe.y, ne.position = oe, ne.internals.positionAbsolute = se;
      }
      if (y = y || Z, !!Z && (U(a, !0), w && (r || X || !T && $))) {
        const [Q, ne] = Ds({
          nodeId: T,
          dragItems: a,
          nodeLookup: x
        });
        r?.(w, a, Q, ne), X?.(w, Q, ne), T || $?.(w, ne);
      }
    }
    async function L() {
      if (!d)
        return;
      const { transform: N, panBy: M, autoPanSpeed: x, autoPanOnNodeDrag: C } = t();
      if (!C) {
        l = !1, cancelAnimationFrame(s);
        return;
      }
      const [A, D] = xd(c, d, x);
      (A !== 0 || D !== 0) && (i.x = (i.x ?? 0) - A / N[2], i.y = (i.y ?? 0) - D / N[2], await M({ x: A, y: D }) && V(i)), s = requestAnimationFrame(L);
    }
    function Y(N) {
      const { nodeLookup: M, multiSelectionActive: x, nodesDraggable: C, transform: A, snapGrid: D, snapToGrid: K, selectNodesOnDrag: X, onNodeDragStart: $, onSelectionDragStart: W, unselectNodesAndEdges: U } = t();
      f = !0, (!X || !S) && !x && T && (M.get(T)?.selected || U()), S && X && T && e?.(T);
      const Z = As(N.sourceEvent, { transform: A, snapGrid: D, snapToGrid: K, containerBounds: d });
      if (i = Z, a = F0(M, C, Z, T), a.size > 0 && (n || $ || !T && W)) {
        const [G, R] = Ds({
          nodeId: T,
          dragItems: a,
          nodeLookup: M
        });
        n?.(N.sourceEvent, a, G, R), $?.(N.sourceEvent, G, R), T || W?.(N.sourceEvent, R);
      }
    }
    const H = u1().clickDistance(z).on("start", (N) => {
      const { domNode: M, nodeDragThreshold: x, transform: C, snapGrid: A, snapToGrid: D } = t();
      d = M?.getBoundingClientRect() || null, g = !1, y = !1, w = N.sourceEvent, x === 0 && Y(N), i = As(N.sourceEvent, { transform: C, snapGrid: A, snapToGrid: D, containerBounds: d }), c = an(N.sourceEvent, d);
    }).on("drag", (N) => {
      const { autoPanOnNodeDrag: M, transform: x, snapGrid: C, snapToGrid: A, nodeDragThreshold: D, nodeLookup: K } = t(), X = As(N.sourceEvent, { transform: x, snapGrid: C, snapToGrid: A, containerBounds: d });
      if (w = N.sourceEvent, (N.sourceEvent.type === "touchmove" && N.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      T && !K.has(T)) && (g = !0), !g) {
        if (!l && M && f && (l = !0, L()), !f) {
          const $ = an(N.sourceEvent, d), W = $.x - c.x, U = $.y - c.y;
          Math.sqrt(W * W + U * U) > D && Y(N);
        }
        (i.x !== X.xSnapped || i.y !== X.ySnapped) && a && f && (c = an(N.sourceEvent, d), V(X));
      }
    }).on("end", (N) => {
      if (!(!f || g) && (l = !1, f = !1, cancelAnimationFrame(s), a.size > 0)) {
        const { nodeLookup: M, updateNodePositions: x, onNodeDragStop: C, onSelectionDragStop: A } = t();
        if (y && (x(a, !1), y = !1), o || C || !T && A) {
          const [D, K] = Ds({
            nodeId: T,
            dragItems: a,
            nodeLookup: M,
            dragging: !1
          });
          o?.(N.sourceEvent, a, D, K), C?.(N.sourceEvent, D, K), T || A?.(N.sourceEvent, K);
        }
      }
    }).filter((N) => {
      const M = N.target;
      return !N.button && (!k || !ic(M, `.${k}`, _)) && (!E || ic(M, E, _));
    });
    h.call(H);
  }
  function m() {
    h?.on(".drag", null);
  }
  return {
    update: b,
    destroy: m
  };
}
function W0(e, t, n) {
  const r = [], o = {
    x: e.x - n,
    y: e.y - n,
    width: n * 2,
    height: n * 2
  };
  for (const i of t.values())
    Do(o, ro(i)) > 0 && r.push(i);
  return r;
}
const Y0 = 250;
function j0(e, t, n, r) {
  let o = [], i = 1 / 0;
  const s = W0(e, n, t + Y0);
  for (const a of s) {
    const l = [...a.internals.handleBounds?.source ?? [], ...a.internals.handleBounds?.target ?? []];
    for (const c of l) {
      if (r.nodeId === c.nodeId && r.type === c.type && r.id === c.id)
        continue;
      const { x: d, y: f } = Oo(a, c, c.position, !0), h = Math.sqrt(Math.pow(d - e.x, 2) + Math.pow(f - e.y, 2));
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
function Od(e, t, n, r, o, i = !1) {
  const s = r.get(e);
  if (!s)
    return null;
  const a = o === "strict" ? s.internals.handleBounds?.[t] : [...s.internals.handleBounds?.source ?? [], ...s.internals.handleBounds?.target ?? []], l = (n ? a?.find((c) => c.id === n) : a?.[0]) ?? null;
  return l && i ? { ...l, ...Oo(s, l, l.position, !0) } : l;
}
function Vd(e, t) {
  return e || (t?.classList.contains("target") ? "target" : t?.classList.contains("source") ? "source" : null);
}
function X0(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const zd = () => !0;
function q0(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: s, domNode: a, nodeLookup: l, lib: c, autoPanOnConnect: d, flowId: f, panBy: h, cancelConnection: g, onConnectStart: y, onConnect: w, onConnectEnd: b, isValidConnection: m = zd, onReconnectEnd: k, updateConnection: E, getTransform: _, getFromHandle: S, autoPanSpeed: T, dragThreshold: z = 1, handleDomNode: V }) {
  const L = Sd(e.target);
  let Y = 0, H;
  const { x: N, y: M } = an(e), x = Vd(i, V), C = a?.getBoundingClientRect();
  let A = !1;
  if (!C || !x)
    return;
  const D = Od(o, x, r, l, t);
  if (!D)
    return;
  let K = an(e, C), X = !1, $ = null, W = !1, U = null;
  function Z() {
    if (!d || !C)
      return;
    const [oe, se] = xd(K, C, T);
    h({ x: oe, y: se }), Y = requestAnimationFrame(Z);
  }
  const G = {
    ...D,
    nodeId: o,
    type: x,
    position: D.position
  }, R = l.get(o);
  let Q = {
    inProgress: !0,
    isValid: null,
    from: Oo(R, G, we.Left, !0),
    fromHandle: G,
    fromPosition: G.position,
    fromNode: R,
    to: K,
    toHandle: null,
    toPosition: jl[G.position],
    toNode: null,
    pointer: K
  };
  function ne() {
    A = !0, E(Q), y?.(e, { nodeId: o, handleId: r, handleType: x });
  }
  z === 0 && ne();
  function J(oe) {
    if (!A) {
      const { x: me, y: ke } = an(oe), fe = me - N, be = ke - M;
      if (!(fe * fe + be * be > z * z))
        return;
      ne();
    }
    if (!S() || !G) {
      _e(oe);
      return;
    }
    const se = _();
    K = an(oe, C), H = j0(Jo(K, se, !1, [1, 1]), n, l, G), X || (Z(), X = !0);
    const re = Id(oe, {
      handle: H,
      connectionMode: t,
      fromNodeId: o,
      fromHandleId: r,
      fromType: s ? "target" : "source",
      isValidConnection: m,
      doc: L,
      lib: c,
      flowId: f,
      nodeLookup: l
    });
    U = re.handleDomNode, $ = re.connection, W = X0(!!H, re.isValid);
    const he = {
      // from stays the same
      ...Q,
      isValid: W,
      to: re.toHandle && W ? Ki({ x: re.toHandle.x, y: re.toHandle.y }, se) : K,
      toHandle: re.toHandle,
      toPosition: W && re.toHandle ? re.toHandle.position : jl[G.position],
      toNode: re.toHandle ? l.get(re.toHandle.nodeId) : null,
      pointer: K
    };
    E(he), Q = he;
  }
  function _e(oe) {
    if (!("touches" in oe && oe.touches.length > 0)) {
      if (A) {
        (H || U) && $ && W && w?.($);
        const { inProgress: se, ...re } = Q, he = {
          ...re,
          toPosition: Q.toHandle ? Q.toPosition : null
        };
        b?.(oe, he), i && k?.(oe, he);
      }
      g(), cancelAnimationFrame(Y), X = !1, W = !1, $ = null, U = null, L.removeEventListener("mousemove", J), L.removeEventListener("mouseup", _e), L.removeEventListener("touchmove", J), L.removeEventListener("touchend", _e);
    }
  }
  L.addEventListener("mousemove", J), L.addEventListener("mouseup", _e), L.addEventListener("touchmove", J), L.addEventListener("touchend", _e);
}
function Id(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: s, lib: a, flowId: l, isValidConnection: c = zd, nodeLookup: d }) {
  const f = i === "target", h = t ? s.querySelector(`.${a}-flow__handle[data-id="${l}-${t?.nodeId}-${t?.id}-${t?.type}"]`) : null, { x: g, y } = an(e), w = s.elementFromPoint(g, y), b = w?.classList.contains(`${a}-flow__handle`) ? w : h, m = {
    handleDomNode: b,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (b) {
    const k = Vd(void 0, b), E = b.getAttribute("data-nodeid"), _ = b.getAttribute("data-handleid"), S = b.classList.contains("connectable"), T = b.classList.contains("connectableend");
    if (!E || !k)
      return m;
    const z = {
      source: f ? E : r,
      sourceHandle: f ? _ : o,
      target: f ? r : E,
      targetHandle: f ? o : _
    };
    m.connection = z;
    const L = S && T && (n === to.Strict ? f && k === "source" || !f && k === "target" : E !== r || _ !== o);
    m.isValid = L && c(z), m.toHandle = Od(E, k, _, d, n, !0);
  }
  return m;
}
const sc = {
  onPointerDown: q0,
  isValid: Id
};
function G0({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = Ut(e);
  function i({ translateExtent: a, width: l, height: c, zoomStep: d = 1, pannable: f = !0, zoomable: h = !0, inversePan: g = !1 }) {
    const y = (E) => {
      if (E.sourceEvent.type !== "wheel" || !t)
        return;
      const _ = n(), S = E.sourceEvent.ctrlKey && _r() ? 10 : 1, T = -E.sourceEvent.deltaY * (E.sourceEvent.deltaMode === 1 ? 0.05 : E.sourceEvent.deltaMode ? 1 : 2e-3) * d, z = _[2] * Math.pow(2, T * S);
      t.scaleTo(z);
    };
    let w = [0, 0];
    const b = (E) => {
      (E.sourceEvent.type === "mousedown" || E.sourceEvent.type === "touchstart") && (w = [
        E.sourceEvent.clientX ?? E.sourceEvent.touches[0].clientX,
        E.sourceEvent.clientY ?? E.sourceEvent.touches[0].clientY
      ]);
    }, m = (E) => {
      const _ = n();
      if (E.sourceEvent.type !== "mousemove" && E.sourceEvent.type !== "touchmove" || !t)
        return;
      const S = [
        E.sourceEvent.clientX ?? E.sourceEvent.touches[0].clientX,
        E.sourceEvent.clientY ?? E.sourceEvent.touches[0].clientY
      ], T = [S[0] - w[0], S[1] - w[1]];
      w = S;
      const z = r() * Math.max(_[2], Math.log(_[2])) * (g ? -1 : 1), V = {
        x: _[0] - T[0] * z,
        y: _[1] - T[1] * z
      }, L = [
        [0, 0],
        [l, c]
      ];
      t.setViewportConstrained({
        x: V.x,
        y: V.y,
        zoom: _[2]
      }, L, a);
    }, k = pd().on("start", b).on("zoom", f ? m : null).on("zoom.wheel", h ? y : null);
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
const ws = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), Os = ({ x: e, y: t, zoom: n }) => ps.translate(e, t).scale(n), Fr = (e, t) => e.target.closest(`.${t}`), Ld = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), U0 = (e) => ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2, Vs = (e, t = 0, n = U0, r = () => {
}) => {
  const o = typeof t == "number" && t > 0;
  return o || r(), o ? e.transition().duration(t).ease(n).on("end", r) : e;
}, Hd = (e) => {
  const t = e.ctrlKey && _r() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function J0({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: s, onPanZoomStart: a, onPanZoom: l, onPanZoomEnd: c }) {
  return (d) => {
    if (Fr(d, t))
      return d.ctrlKey && d.preventDefault(), !1;
    d.preventDefault(), d.stopImmediatePropagation();
    const f = n.property("__zoom").k || 1;
    if (d.ctrlKey && s) {
      const b = rn(d), m = Hd(d), k = f * Math.pow(2, m);
      r.scaleTo(n, k, b, d);
      return;
    }
    const h = d.deltaMode === 1 ? 20 : 1;
    let g = o === Nr.Vertical ? 0 : d.deltaX * h, y = o === Nr.Horizontal ? 0 : d.deltaY * h;
    !_r() && d.shiftKey && o !== Nr.Vertical && (g = d.deltaY * h, y = 0), r.translateBy(
      n,
      -(g / f) * i,
      -(y / f) * i,
      // @ts-ignore
      { internal: !0 }
    );
    const w = ws(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling ? (l?.(d, w), e.panScrollTimeout = setTimeout(() => {
      c?.(d, w), e.isPanScrolling = !1;
    }, 150)) : (e.isPanScrolling = !0, a?.(d, w));
  };
}
function Q0({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(r, o) {
    const i = r.type === "wheel", s = !t && i && !r.ctrlKey, a = Fr(r, e);
    if (r.ctrlKey && i && a && r.preventDefault(), s || a)
      return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function ey({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (r) => {
    if (r.sourceEvent?.internal)
      return;
    const o = ws(r.transform);
    e.mouseButton = r.sourceEvent?.button || 0, e.isZoomingOrPanning = !0, e.prevViewport = o, r.sourceEvent?.type === "mousedown" && t(!0), n && n?.(r.sourceEvent, o);
  };
}
function ty({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (i) => {
    e.usedRightMouseButton = !!(n && Ld(t, e.mouseButton ?? 0)), i.sourceEvent?.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !i.sourceEvent?.internal && o?.(i.sourceEvent, ws(i.transform));
  };
}
function ny({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (s) => {
    if (!s.sourceEvent?.internal && (e.isZoomingOrPanning = !1, i && Ld(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && s.sourceEvent && i(s.sourceEvent), e.usedRightMouseButton = !1, r(!1), o)) {
      const a = ws(s.transform);
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
function ry({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: r, panOnScroll: o, zoomOnDoubleClick: i, userSelectionActive: s, noWheelClassName: a, noPanClassName: l, lib: c, connectionInProgress: d }) {
  return (f) => {
    const h = e || t, g = n && f.ctrlKey, y = f.type === "wheel";
    if (f.button === 1 && f.type === "mousedown" && (Fr(f, `${c}-flow__node`) || Fr(f, `${c}-flow__edge`)))
      return !0;
    if (!r && !h && !o && !i && !n || s || d && !y || Fr(f, a) && y || Fr(f, l) && (!y || o && y && !e) || !n && f.ctrlKey && y)
      return !1;
    if (!n && f.type === "touchstart" && f.touches?.length > 1)
      return f.preventDefault(), !1;
    if (!h && !o && !g && y || !r && (f.type === "mousedown" || f.type === "touchstart") || Array.isArray(r) && !r.includes(f.button) && f.type === "mousedown")
      return !1;
    const w = Array.isArray(r) && r.includes(f.button) || !f.button || f.button <= 1;
    return (!f.ctrlKey || y) && w;
  };
}
function oy({ domNode: e, minZoom: t, maxZoom: n, translateExtent: r, viewport: o, onPanZoom: i, onPanZoomStart: s, onPanZoomEnd: a, onDraggingChange: l }) {
  const c = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: {},
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, d = e.getBoundingClientRect(), f = pd().scaleExtent([t, n]).translateExtent(r), h = Ut(e).call(f);
  k({
    x: o.x,
    y: o.y,
    zoom: no(o.zoom, t, n)
  }, [
    [0, 0],
    [d.width, d.height]
  ], r);
  const g = h.on("wheel.zoom"), y = h.on("dblclick.zoom");
  f.wheelDelta(Hd);
  function w(H, N) {
    return h ? new Promise((M) => {
      f?.interpolate(N?.interpolate === "linear" ? Co : _i).transform(Vs(h, N?.duration, N?.ease, () => M(!0)), H);
    }) : Promise.resolve(!1);
  }
  function b({ noWheelClassName: H, noPanClassName: N, onPaneContextMenu: M, userSelectionActive: x, panOnScroll: C, panOnDrag: A, panOnScrollMode: D, panOnScrollSpeed: K, preventScrolling: X, zoomOnPinch: $, zoomOnScroll: W, zoomOnDoubleClick: U, zoomActivationKeyPressed: Z, lib: G, onTransformChange: R, connectionInProgress: j, paneClickDistance: Q, selectionOnDrag: ne }) {
    x && !c.isZoomingOrPanning && m();
    const J = C && !Z && !x;
    f.clickDistance(ne ? 1 / 0 : !Dn(Q) || Q < 0 ? 0 : Q);
    const _e = J ? J0({
      zoomPanValues: c,
      noWheelClassName: H,
      d3Selection: h,
      d3Zoom: f,
      panOnScrollMode: D,
      panOnScrollSpeed: K,
      zoomOnPinch: $,
      onPanZoomStart: s,
      onPanZoom: i,
      onPanZoomEnd: a
    }) : Q0({
      noWheelClassName: H,
      preventScrolling: X,
      d3ZoomHandler: g
    });
    if (h.on("wheel.zoom", _e, { passive: !1 }), !x) {
      const se = ey({
        zoomPanValues: c,
        onDraggingChange: l,
        onPanZoomStart: s
      });
      f.on("start", se);
      const re = ty({
        zoomPanValues: c,
        panOnDrag: A,
        onPaneContextMenu: !!M,
        onPanZoom: i,
        onTransformChange: R
      });
      f.on("zoom", re);
      const he = ny({
        zoomPanValues: c,
        panOnDrag: A,
        panOnScroll: C,
        onPaneContextMenu: M,
        onPanZoomEnd: a,
        onDraggingChange: l
      });
      f.on("end", he);
    }
    const oe = ry({
      zoomActivationKeyPressed: Z,
      panOnDrag: A,
      zoomOnScroll: W,
      panOnScroll: C,
      zoomOnDoubleClick: U,
      zoomOnPinch: $,
      userSelectionActive: x,
      noPanClassName: N,
      noWheelClassName: H,
      lib: G,
      connectionInProgress: j
    });
    f.filter(oe), U ? h.on("dblclick.zoom", y) : h.on("dblclick.zoom", null);
  }
  function m() {
    f.on("zoom", null);
  }
  async function k(H, N, M) {
    const x = Os(H), C = f?.constrain()(x, N, M);
    return C && await w(C), new Promise((A) => A(C));
  }
  async function E(H, N) {
    const M = Os(H);
    return await w(M, N), new Promise((x) => x(M));
  }
  function _(H) {
    if (h) {
      const N = Os(H), M = h.property("__zoom");
      (M.k !== H.zoom || M.x !== H.x || M.y !== H.y) && f?.transform(h, N, null, { sync: !0 });
    }
  }
  function S() {
    const H = h ? vd(h.node()) : { x: 0, y: 0, k: 1 };
    return { x: H.x, y: H.y, zoom: H.k };
  }
  function T(H, N) {
    return h ? new Promise((M) => {
      f?.interpolate(N?.interpolate === "linear" ? Co : _i).scaleTo(Vs(h, N?.duration, N?.ease, () => M(!0)), H);
    }) : Promise.resolve(!1);
  }
  function z(H, N) {
    return h ? new Promise((M) => {
      f?.interpolate(N?.interpolate === "linear" ? Co : _i).scaleBy(Vs(h, N?.duration, N?.ease, () => M(!0)), H);
    }) : Promise.resolve(!1);
  }
  function V(H) {
    f?.scaleExtent(H);
  }
  function L(H) {
    f?.translateExtent(H);
  }
  function Y(H) {
    const N = !Dn(H) || H < 0 ? 0 : H;
    f?.clickDistance(N);
  }
  return {
    update: b,
    destroy: m,
    setViewport: E,
    setViewportConstrained: k,
    getViewport: S,
    scaleTo: T,
    scaleBy: z,
    setScaleExtent: V,
    setTranslateExtent: L,
    syncViewport: _,
    setClickDistance: Y
  };
}
var ac;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(ac || (ac = {}));
var iy = /* @__PURE__ */ te("<div><!></div>");
function lr(e, t) {
  ce(t, !0);
  let n = p(t, "id", 7, null), r = p(t, "type", 7, "source"), o = p(t, "position", 23, () => we.Top), i = p(t, "style", 7), s = p(t, "class", 7), a = p(t, "isConnectable", 7), l = p(t, "isConnectableStart", 7, !0), c = p(t, "isConnectableEnd", 7, !0), d = p(t, "isValidConnection", 7), f = p(t, "onconnect", 7), h = p(t, "ondisconnect", 7), g = p(t, "children", 7), y = /* @__PURE__ */ Ze(t, [
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
  const w = ir("svelteflow__node_id"), b = ir("svelteflow__node_connectable");
  let m = /* @__PURE__ */ P(() => r() === "target"), k = /* @__PURE__ */ P(() => a() !== void 0 ? a() : b.value), E = fn(), _ = /* @__PURE__ */ P(() => E.ariaLabelConfig), S = null;
  Xt(() => {
    if (f() || h()) {
      E.edges;
      let $ = E.connectionLookup.get(`${w}-${r()}${n() ? `-${n()}` : ""}`);
      if (S && !o0($, S)) {
        const W = $ ?? /* @__PURE__ */ new Map();
        Xl(S, W, h()), Xl(W, S, f());
      }
      S = new Map($);
    }
  });
  let T = /* @__PURE__ */ P(() => {
    if (!E.connection.inProgress)
      return [!1, !1, !1, !1, null];
    const { fromHandle: $, toHandle: W, isValid: U } = E.connection, Z = $ && $.nodeId === w && $.type === r() && $.id === n(), G = W && W.nodeId === w && W.type === r() && W.id === n(), R = E.connectionMode === to.Strict ? $?.type !== r() : w !== $?.nodeId || n() !== $?.id;
    return [
      !0,
      Z,
      G,
      R,
      G && U
    ];
  }), z = /* @__PURE__ */ P(() => Ho(u(T), 5)), V = /* @__PURE__ */ P(() => u(z)[0]), L = /* @__PURE__ */ P(() => u(z)[1]), Y = /* @__PURE__ */ P(() => u(z)[2]), H = /* @__PURE__ */ P(() => u(z)[3]), N = /* @__PURE__ */ P(() => u(z)[4]);
  function M($) {
    const W = E.onbeforeconnect ? E.onbeforeconnect($) : $;
    W && (E.addEdge(W), E.onconnect?.($));
  }
  function x($) {
    const W = Nd($);
    $.currentTarget && (W && $.button === 0 || !W) && sc.onPointerDown($, {
      handleId: n(),
      nodeId: w,
      isTarget: u(m),
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
      onConnect: M,
      onConnectStart: (U, Z) => {
        E.onconnectstart?.(U, {
          nodeId: Z.nodeId,
          handleId: Z.handleId,
          handleType: Z.handleType
        });
      },
      onConnectEnd: (U, Z) => {
        E.onconnectend?.(U, Z);
      },
      getTransform: () => [E.viewport.x, E.viewport.y, E.viewport.zoom],
      getFromHandle: () => E.connection.fromHandle,
      dragThreshold: E.connectionDragThreshold,
      handleDomNode: $.currentTarget
    });
  }
  function C($) {
    if (!w || !E.clickConnectStartHandle && !l())
      return;
    if (!E.clickConnectStartHandle) {
      E.onclickconnectstart?.($, { nodeId: w, handleId: n(), handleType: r() }), E.clickConnectStartHandle = { nodeId: w, type: r(), id: n() };
      return;
    }
    const W = Sd($.target), U = d() ?? E.isValidConnection, { connectionMode: Z, clickConnectStartHandle: G, flowId: R, nodeLookup: j } = E, { connection: Q, isValid: ne } = sc.isValid($, {
      handle: { nodeId: w, id: n(), type: r() },
      connectionMode: Z,
      fromNodeId: G.nodeId,
      fromHandleId: G.id ?? null,
      fromType: G.type,
      isValidConnection: U,
      flowId: R,
      doc: W,
      lib: "svelte",
      nodeLookup: j
    });
    ne && Q && M(Q);
    const J = structuredClone(Jc(E.connection));
    delete J.inProgress, J.toPosition = J.toHandle ? J.toHandle.position : null, E.onclickconnectend?.($, J), E.clickConnectStartHandle = null;
  }
  var A = {
    get id() {
      return n();
    },
    set id($ = null) {
      n($), v();
    },
    get type() {
      return r();
    },
    set type($ = "source") {
      r($), v();
    },
    get position() {
      return o();
    },
    set position($ = we.Top) {
      o($), v();
    },
    get style() {
      return i();
    },
    set style($) {
      i($), v();
    },
    get class() {
      return s();
    },
    set class($) {
      s($), v();
    },
    get isConnectable() {
      return a();
    },
    set isConnectable($) {
      a($), v();
    },
    get isConnectableStart() {
      return l();
    },
    set isConnectableStart($ = !0) {
      l($), v();
    },
    get isConnectableEnd() {
      return c();
    },
    set isConnectableEnd($ = !0) {
      c($), v();
    },
    get isValidConnection() {
      return d();
    },
    set isValidConnection($) {
      d($), v();
    },
    get onconnect() {
      return f();
    },
    set onconnect($) {
      f($), v();
    },
    get ondisconnect() {
      return h();
    },
    set ondisconnect($) {
      h($), v();
    },
    get children() {
      return g();
    },
    set children($) {
      g($), v();
    }
  }, D = iy(), K = () => {
  };
  rt(D, () => ({
    "data-handleid": n(),
    "data-nodeid": w,
    "data-handlepos": o(),
    "data-id": `${E.flowId ?? ""}-${w ?? ""}-${n() ?? "null" ?? ""}-${r() ?? ""}`,
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
    ...y,
    [Un]: {
      valid: u(N),
      connectingto: u(Y),
      connectingfrom: u(L),
      source: !u(m),
      target: u(m),
      connectablestart: l(),
      connectableend: c(),
      connectable: u(k),
      connectionindicator: u(k) && (!u(V) || u(H)) && (u(V) || E.clickConnectStartHandle ? c() : l())
    }
  }));
  var X = F(D);
  return Ue(X, () => g() ?? ht), B(D), O(e, D), ue(A);
}
le(
  lr,
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
var sy = /* @__PURE__ */ te("<!> <!>", 1);
function tl(e, t) {
  ce(t, !0);
  let n = p(t, "data", 7), r = p(t, "targetPosition", 23, () => we.Top), o = p(t, "sourcePosition", 23, () => we.Bottom);
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
    set targetPosition(d = we.Top) {
      r(d), v();
    },
    get sourcePosition() {
      return o();
    },
    set sourcePosition(d = we.Bottom) {
      o(d), v();
    }
  }, s = sy(), a = ie(s);
  lr(a, {
    type: "target",
    get position() {
      return r();
    }
  });
  var l = I(a), c = I(l);
  return lr(c, {
    type: "source",
    get position() {
      return o();
    }
  }), Se(() => We(l, ` ${n()?.label ?? ""} `)), O(e, s), ue(i);
}
le(tl, { data: {}, targetPosition: {}, sourcePosition: {} }, [], [], !0);
var ay = /* @__PURE__ */ te(" <!>", 1);
function Rd(e, t) {
  ce(t, !0);
  let n = p(t, "data", 23, () => ({ label: "Node" })), r = p(t, "sourcePosition", 23, () => we.Bottom);
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
    set sourcePosition(l = we.Bottom) {
      r(l), v();
    }
  };
  ye();
  var i = ay(), s = ie(i), a = I(s);
  return lr(a, {
    type: "source",
    get position() {
      return r();
    }
  }), Se(() => We(s, `${n()?.label ?? ""} `)), O(e, i), ue(o);
}
le(Rd, { data: {}, sourcePosition: {} }, [], [], !0);
var ly = /* @__PURE__ */ te(" <!>", 1);
function Bd(e, t) {
  ce(t, !0);
  let n = p(t, "data", 23, () => ({ label: "Node" })), r = p(t, "targetPosition", 23, () => we.Top);
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
    set targetPosition(l = we.Top) {
      r(l), v();
    }
  };
  ye();
  var i = ly(), s = ie(i), a = I(s);
  return lr(a, {
    type: "target",
    get position() {
      return r();
    }
  }), Se(() => We(s, `${n()?.label ?? ""} `)), O(e, i), ue(o);
}
le(Bd, { data: {}, targetPosition: {} }, [], [], !0);
function Fd(e, t) {
}
le(Fd, {}, [], [], !0);
function zs(e, t, n) {
  if (!n || !t)
    return;
  const r = n === "root" ? t : t.querySelector(`.svelte-flow__${n}`);
  r && r.appendChild(e);
}
function Kd(e, t) {
  const n = /* @__PURE__ */ P(fn), r = /* @__PURE__ */ P(() => u(n).domNode);
  let o;
  return u(r) ? zs(e, u(r), t) : o = ao(() => {
    qe(() => {
      zs(e, u(r), t), o?.();
    });
  }), {
    async update(i) {
      zs(e, u(r), i);
    },
    destroy() {
      e.parentNode && e.parentNode.removeChild(e), o?.();
    }
  };
}
function Zd() {
  let e = /* @__PURE__ */ Pe(typeof window > "u");
  if (u(e)) {
    const t = ao(() => {
      qe(() => {
        ee(e, !1), t?.();
      });
    });
  }
  return {
    get value() {
      return u(e);
    }
  };
}
const lc = (e) => s0(e), cy = (e) => yd(e);
function Cn(e) {
  return e === void 0 ? void 0 : `${e}px`;
}
const Zi = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
};
var uy = /* @__PURE__ */ te("<div><!></div>");
const dy = {
  hash: "svelte-herprs",
  code: ".transparent.svelte-herprs {background:transparent;}"
};
function Wd(e, t) {
  ce(t, !0), Fe(e, dy);
  let n = p(t, "x", 7, 0), r = p(t, "y", 7, 0), o = p(t, "width", 7), i = p(t, "height", 7), s = p(t, "selectEdgeOnClick", 7, !1), a = p(t, "transparent", 7, !1), l = p(t, "class", 7), c = p(t, "children", 7), d = /* @__PURE__ */ Ze(t, [
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
  const f = fn(), h = ir("svelteflow__edge_id");
  if (!h)
    throw new Error("EdgeLabel must be used within an edge");
  let g = /* @__PURE__ */ P(() => f.visible.edges.get(h)?.zIndex);
  var y = {
    get x() {
      return n();
    },
    set x(k = 0) {
      n(k), v();
    },
    get y() {
      return r();
    },
    set y(k = 0) {
      r(k), v();
    },
    get width() {
      return o();
    },
    set width(k) {
      o(k), v();
    },
    get height() {
      return i();
    },
    set height(k) {
      i(k), v();
    },
    get selectEdgeOnClick() {
      return s();
    },
    set selectEdgeOnClick(k = !1) {
      s(k), v();
    },
    get transparent() {
      return a();
    },
    set transparent(k = !1) {
      a(k), v();
    },
    get class() {
      return l();
    },
    set class(k) {
      l(k), v();
    },
    get children() {
      return c();
    },
    set children(k) {
      c(k), v();
    }
  }, w = uy(), b = () => {
    s() && f.handleEdgeSelection(h);
  };
  rt(
    w,
    (k) => ({
      class: [
        "svelte-flow__edge-label",
        { transparent: a() },
        l()
      ],
      tabindex: "-1",
      onclick: b,
      ...d,
      [yn]: k
    }),
    [
      () => ({
        display: Zd().value ? "none" : void 0,
        cursor: s() ? "pointer" : void 0,
        transform: `translate(-50%, -50%) translate(${n() ?? ""}px,${r() ?? ""}px)`,
        "pointer-events": "all",
        width: Cn(o()),
        height: Cn(i()),
        "z-index": u(g)
      })
    ],
    void 0,
    void 0,
    "svelte-herprs"
  );
  var m = F(w);
  return Ue(m, () => c() ?? ht), B(w), wt(w, (k, E) => Kd?.(k, E), () => "edge-labels"), O(e, w), ue(y);
}
le(
  Wd,
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
var fy = /* @__PURE__ */ pe("<path></path>"), hy = /* @__PURE__ */ pe('<path fill="none"></path><!><!>', 1);
function Qo(e, t) {
  ce(t, !0);
  let n = p(t, "id", 7), r = p(t, "path", 7), o = p(t, "label", 7), i = p(t, "labelX", 7), s = p(t, "labelY", 7), a = p(t, "labelStyle", 7), l = p(t, "markerStart", 7), c = p(t, "markerEnd", 7), d = p(t, "style", 7), f = p(t, "interactionWidth", 7, 20), h = p(t, "class", 7), g = /* @__PURE__ */ Ze(t, [
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
    set id(S) {
      n(S), v();
    },
    get path() {
      return r();
    },
    set path(S) {
      r(S), v();
    },
    get label() {
      return o();
    },
    set label(S) {
      o(S), v();
    },
    get labelX() {
      return i();
    },
    set labelX(S) {
      i(S), v();
    },
    get labelY() {
      return s();
    },
    set labelY(S) {
      s(S), v();
    },
    get labelStyle() {
      return a();
    },
    set labelStyle(S) {
      a(S), v();
    },
    get markerStart() {
      return l();
    },
    set markerStart(S) {
      l(S), v();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(S) {
      c(S), v();
    },
    get style() {
      return d();
    },
    set style(S) {
      d(S), v();
    },
    get interactionWidth() {
      return f();
    },
    set interactionWidth(S = 20) {
      f(S), v();
    },
    get class() {
      return h();
    },
    set class(S) {
      h(S), v();
    }
  }, w = hy(), b = ie(w), m = I(b);
  {
    var k = (S) => {
      var T = fy();
      rt(T, () => ({
        d: r(),
        "stroke-opacity": 0,
        "stroke-width": f(),
        fill: "none",
        class: "svelte-flow__edge-interaction",
        ...g
      })), O(S, T);
    };
    ae(m, (S) => {
      f() > 0 && S(k);
    });
  }
  var E = I(m);
  {
    var _ = (S) => {
      Wd(S, {
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
        children: (T, z) => {
          ye();
          var V = Ne();
          Se(() => We(V, o())), O(T, V);
        },
        $$slots: { default: !0 }
      });
    };
    ae(E, (S) => {
      o() && S(_);
    });
  }
  return Se(() => {
    Ce(b, "id", n()), Ce(b, "d", r()), Bt(b, 0, Wn(["svelte-flow__edge-path", h()])), Ce(b, "marker-start", l()), Ce(b, "marker-end", c()), vt(b, d());
  }), O(e, w), ue(y);
}
le(
  Qo,
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
function nl(e, t) {
  ce(t, !0);
  let n = p(t, "id", 7), r = p(t, "interactionWidth", 7), o = p(t, "label", 7), i = p(t, "labelStyle", 7), s = p(t, "markerEnd", 7), a = p(t, "markerStart", 7), l = p(t, "pathOptions", 7), c = p(t, "sourcePosition", 7), d = p(t, "sourceX", 7), f = p(t, "sourceY", 7), h = p(t, "style", 7), g = p(t, "targetPosition", 7), y = p(t, "targetX", 7), w = p(t, "targetY", 7), b = /* @__PURE__ */ P(() => Pd({
    sourceX: d(),
    sourceY: f(),
    targetX: y(),
    targetY: w(),
    sourcePosition: c(),
    targetPosition: g(),
    curvature: l()?.curvature
  })), m = /* @__PURE__ */ P(() => Ho(u(b), 3)), k = /* @__PURE__ */ P(() => u(m)[0]), E = /* @__PURE__ */ P(() => u(m)[1]), _ = /* @__PURE__ */ P(() => u(m)[2]);
  var S = {
    get id() {
      return n();
    },
    set id(T) {
      n(T), v();
    },
    get interactionWidth() {
      return r();
    },
    set interactionWidth(T) {
      r(T), v();
    },
    get label() {
      return o();
    },
    set label(T) {
      o(T), v();
    },
    get labelStyle() {
      return i();
    },
    set labelStyle(T) {
      i(T), v();
    },
    get markerEnd() {
      return s();
    },
    set markerEnd(T) {
      s(T), v();
    },
    get markerStart() {
      return a();
    },
    set markerStart(T) {
      a(T), v();
    },
    get pathOptions() {
      return l();
    },
    set pathOptions(T) {
      l(T), v();
    },
    get sourcePosition() {
      return c();
    },
    set sourcePosition(T) {
      c(T), v();
    },
    get sourceX() {
      return d();
    },
    set sourceX(T) {
      d(T), v();
    },
    get sourceY() {
      return f();
    },
    set sourceY(T) {
      f(T), v();
    },
    get style() {
      return h();
    },
    set style(T) {
      h(T), v();
    },
    get targetPosition() {
      return g();
    },
    set targetPosition(T) {
      g(T), v();
    },
    get targetX() {
      return y();
    },
    set targetX(T) {
      y(T), v();
    },
    get targetY() {
      return w();
    },
    set targetY(T) {
      w(T), v();
    }
  };
  return Qo(e, {
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
le(
  nl,
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
function Yd(e, t) {
  ce(t, !0);
  let n = p(t, "interactionWidth", 7), r = p(t, "label", 7), o = p(t, "labelStyle", 7), i = p(t, "style", 7), s = p(t, "markerEnd", 7), a = p(t, "markerStart", 7), l = p(t, "sourcePosition", 7), c = p(t, "sourceX", 7), d = p(t, "sourceY", 7), f = p(t, "targetPosition", 7), h = p(t, "targetX", 7), g = p(t, "targetY", 7), y = /* @__PURE__ */ P(() => Ua({
    sourceX: c(),
    sourceY: d(),
    targetX: h(),
    targetY: g(),
    sourcePosition: l(),
    targetPosition: f()
  })), w = /* @__PURE__ */ P(() => Ho(u(y), 3)), b = /* @__PURE__ */ P(() => u(w)[0]), m = /* @__PURE__ */ P(() => u(w)[1]), k = /* @__PURE__ */ P(() => u(w)[2]);
  var E = {
    get interactionWidth() {
      return n();
    },
    set interactionWidth(_) {
      n(_), v();
    },
    get label() {
      return r();
    },
    set label(_) {
      r(_), v();
    },
    get labelStyle() {
      return o();
    },
    set labelStyle(_) {
      o(_), v();
    },
    get style() {
      return i();
    },
    set style(_) {
      i(_), v();
    },
    get markerEnd() {
      return s();
    },
    set markerEnd(_) {
      s(_), v();
    },
    get markerStart() {
      return a();
    },
    set markerStart(_) {
      a(_), v();
    },
    get sourcePosition() {
      return l();
    },
    set sourcePosition(_) {
      l(_), v();
    },
    get sourceX() {
      return c();
    },
    set sourceX(_) {
      c(_), v();
    },
    get sourceY() {
      return d();
    },
    set sourceY(_) {
      d(_), v();
    },
    get targetPosition() {
      return f();
    },
    set targetPosition(_) {
      f(_), v();
    },
    get targetX() {
      return h();
    },
    set targetX(_) {
      h(_), v();
    },
    get targetY() {
      return g();
    },
    set targetY(_) {
      g(_), v();
    }
  };
  return Qo(e, {
    get path() {
      return u(b);
    },
    get labelX() {
      return u(m);
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
le(
  Yd,
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
function jd(e, t) {
  ce(t, !0);
  let n = p(t, "sourceX", 7), r = p(t, "sourceY", 7), o = p(t, "targetX", 7), i = p(t, "targetY", 7), s = p(t, "label", 7), a = p(t, "labelStyle", 7), l = p(t, "markerStart", 7), c = p(t, "markerEnd", 7), d = p(t, "interactionWidth", 7), f = p(t, "style", 7), h = /* @__PURE__ */ P(() => $d({
    sourceX: n(),
    sourceY: r(),
    targetX: o(),
    targetY: i()
  })), g = /* @__PURE__ */ P(() => Ho(u(h), 3)), y = /* @__PURE__ */ P(() => u(g)[0]), w = /* @__PURE__ */ P(() => u(g)[1]), b = /* @__PURE__ */ P(() => u(g)[2]);
  var m = {
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
    get targetX() {
      return o();
    },
    set targetX(k) {
      o(k), v();
    },
    get targetY() {
      return i();
    },
    set targetY(k) {
      i(k), v();
    },
    get label() {
      return s();
    },
    set label(k) {
      s(k), v();
    },
    get labelStyle() {
      return a();
    },
    set labelStyle(k) {
      a(k), v();
    },
    get markerStart() {
      return l();
    },
    set markerStart(k) {
      l(k), v();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(k) {
      c(k), v();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(k) {
      d(k), v();
    },
    get style() {
      return f();
    },
    set style(k) {
      f(k), v();
    }
  };
  return Qo(e, {
    get path() {
      return u(y);
    },
    get labelX() {
      return u(w);
    },
    get labelY() {
      return u(b);
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
  }), ue(m);
}
le(
  jd,
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
function Xd(e, t) {
  ce(t, !0);
  let n = p(t, "sourceX", 7), r = p(t, "sourceY", 7), o = p(t, "sourcePosition", 7), i = p(t, "targetX", 7), s = p(t, "targetY", 7), a = p(t, "targetPosition", 7), l = p(t, "label", 7), c = p(t, "labelStyle", 7), d = p(t, "markerStart", 7), f = p(t, "markerEnd", 7), h = p(t, "interactionWidth", 7), g = p(t, "style", 7), y = /* @__PURE__ */ P(() => Ua({
    sourceX: n(),
    sourceY: r(),
    targetX: i(),
    targetY: s(),
    sourcePosition: o(),
    targetPosition: a(),
    borderRadius: 0
  })), w = /* @__PURE__ */ P(() => Ho(u(y), 3)), b = /* @__PURE__ */ P(() => u(w)[0]), m = /* @__PURE__ */ P(() => u(w)[1]), k = /* @__PURE__ */ P(() => u(w)[2]);
  var E = {
    get sourceX() {
      return n();
    },
    set sourceX(_) {
      n(_), v();
    },
    get sourceY() {
      return r();
    },
    set sourceY(_) {
      r(_), v();
    },
    get sourcePosition() {
      return o();
    },
    set sourcePosition(_) {
      o(_), v();
    },
    get targetX() {
      return i();
    },
    set targetX(_) {
      i(_), v();
    },
    get targetY() {
      return s();
    },
    set targetY(_) {
      s(_), v();
    },
    get targetPosition() {
      return a();
    },
    set targetPosition(_) {
      a(_), v();
    },
    get label() {
      return l();
    },
    set label(_) {
      l(_), v();
    },
    get labelStyle() {
      return c();
    },
    set labelStyle(_) {
      c(_), v();
    },
    get markerStart() {
      return d();
    },
    set markerStart(_) {
      d(_), v();
    },
    get markerEnd() {
      return f();
    },
    set markerEnd(_) {
      f(_), v();
    },
    get interactionWidth() {
      return h();
    },
    set interactionWidth(_) {
      h(_), v();
    },
    get style() {
      return g();
    },
    set style(_) {
      g(_), v();
    }
  };
  return Qo(e, {
    get path() {
      return u(b);
    },
    get labelX() {
      return u(m);
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
le(
  Xd,
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
class gy {
  #t;
  #e;
  /**
   *
   * @param {() => T} fn
   * @param {(update: () => void) => void} onsubscribe
   */
  constructor(t, n) {
    this.#t = t, this.#e = Fo(n);
  }
  get current() {
    return this.#e(), this.#t();
  }
}
const vy = /\(.+\)/, py = /* @__PURE__ */ new Set(["all", "print", "screen", "and", "or", "not", "only"]);
class qd extends gy {
  /**
   * @param {string} query A media query string
   * @param {boolean} [fallback] Fallback value for the server
   */
  constructor(t, n) {
    let r = vy.test(t) || // we need to use `some` here because technically this `window.matchMedia('random,screen')` still returns true
    t.split(/[\s,]+/).some((i) => py.has(i.trim())) ? t : `(${t})`;
    const o = window.matchMedia(r);
    super(
      () => o.matches,
      (i) => ar(o, "change", i)
    );
  }
}
function my(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  return qa(e, { x: 0, y: 0, width: n, height: r }, t, !0).forEach((i) => {
    o.set(i.id, i);
  }), o;
}
function cc(e) {
  const { edges: t, defaultEdgeOptions: n, nodeLookup: r, previousEdges: o, connectionMode: i, onerror: s, onlyRenderVisible: a, elevateEdgesOnSelect: l } = e, c = /* @__PURE__ */ new Map();
  for (const d of t) {
    const f = r.get(d.source), h = r.get(d.target);
    if (!f || !h)
      continue;
    if (a) {
      const { visibleNodes: w, transform: b, width: m, height: k } = e;
      if (b0({
        sourceNode: f,
        targetNode: h,
        width: m,
        height: k,
        transform: b
      }))
        w.set(f.id, f), w.set(h.id, h);
      else
        continue;
    }
    const g = o.get(d.id);
    if (g && d === g.edge && f == g.sourceNode && h == g.targetNode) {
      c.set(d.id, g);
      continue;
    }
    const y = N0({
      id: d.id,
      sourceNode: f,
      targetNode: h,
      sourceHandle: d.sourceHandle || null,
      targetHandle: d.targetHandle || null,
      connectionMode: i,
      onError: s
    });
    y && c.set(d.id, {
      ...n,
      ...d,
      ...y,
      zIndex: w0({
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
const Gd = {
  input: Rd,
  output: Bd,
  default: tl,
  group: Fd
}, Ud = {
  straight: jd,
  smoothstep: Yd,
  default: nl,
  step: Xd
};
function yy(e, t, n, r, o, i) {
  if (t && !n && r && o) {
    const s = Go(i, {
      filter: (a) => !!((a.width || a.initialWidth) && (a.height || a.initialHeight))
    });
    return Ga(s, r, o, 0.5, 2, 0.1);
  } else
    return n ?? { x: 0, y: 0, zoom: 1 };
}
function wy(e) {
  class t {
    #t = /* @__PURE__ */ P(() => e.props.id ?? "1");
    get flowId() {
      return u(this.#t);
    }
    set flowId(r) {
      ee(this.#t, r);
    }
    #e = /* @__PURE__ */ Pe(null);
    get domNode() {
      return u(this.#e);
    }
    set domNode(r) {
      ee(this.#e, r);
    }
    #n = /* @__PURE__ */ Pe(null);
    get panZoom() {
      return u(this.#n);
    }
    set panZoom(r) {
      ee(this.#n, r);
    }
    #r = /* @__PURE__ */ Pe(e.width ?? 0);
    get width() {
      return u(this.#r);
    }
    set width(r) {
      ee(this.#r, r);
    }
    #i = /* @__PURE__ */ Pe(e.height ?? 0);
    get height() {
      return u(this.#i);
    }
    set height(r) {
      ee(this.#i, r);
    }
    #o = /* @__PURE__ */ P(() => {
      const r = O0(e.nodes, this.nodeLookup, this.parentLookup, {
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
      ee(this.#o, r);
    }
    #l = /* @__PURE__ */ P(() => this.panZoom !== null);
    get viewportInitialized() {
      return u(this.#l);
    }
    set viewportInitialized(r) {
      ee(this.#l, r);
    }
    #s = /* @__PURE__ */ P(() => (R0(this.connectionLookup, this.edgeLookup, e.edges), e.edges));
    get _edges() {
      return u(this.#s);
    }
    set _edges(r) {
      ee(this.#s, r);
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
    #a = /* @__PURE__ */ P(() => {
      const r = this._prevSelectedNodeIds.size, o = /* @__PURE__ */ new Set(), i = this.nodes.filter((s) => (s.selected && (o.add(s.id), this._prevSelectedNodeIds.delete(s.id)), s.selected));
      return (r !== o.size || this._prevSelectedNodeIds.size > 0) && (this._prevSelectedNodes = i), this._prevSelectedNodeIds = o, this._prevSelectedNodes;
    });
    get selectedNodes() {
      return u(this.#a);
    }
    set selectedNodes(r) {
      ee(this.#a, r);
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
      ee(this.#c, r);
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
        const { viewport: y, width: w, height: b } = this, m = [y.x, y.y, y.zoom];
        f = my(s, m, w, b), h = cc({
          ...g,
          onlyRenderVisible: !0,
          visibleNodes: f,
          transform: m,
          width: w,
          height: b
        });
      } else
        f = this.nodeLookup, h = cc(g);
      return { nodes: f, edges: h };
    });
    get visible() {
      return u(this.#u);
    }
    set visible(r) {
      ee(this.#u, r);
    }
    #d = /* @__PURE__ */ P(() => e.props.nodesDraggable ?? !0);
    get nodesDraggable() {
      return u(this.#d);
    }
    set nodesDraggable(r) {
      ee(this.#d, r);
    }
    #f = /* @__PURE__ */ P(() => e.props.nodesConnectable ?? !0);
    get nodesConnectable() {
      return u(this.#f);
    }
    set nodesConnectable(r) {
      ee(this.#f, r);
    }
    #g = /* @__PURE__ */ P(() => e.props.elementsSelectable ?? !0);
    get elementsSelectable() {
      return u(this.#g);
    }
    set elementsSelectable(r) {
      ee(this.#g, r);
    }
    #h = /* @__PURE__ */ P(() => e.props.nodesFocusable ?? !0);
    get nodesFocusable() {
      return u(this.#h);
    }
    set nodesFocusable(r) {
      ee(this.#h, r);
    }
    #w = /* @__PURE__ */ P(() => e.props.edgesFocusable ?? !0);
    get edgesFocusable() {
      return u(this.#w);
    }
    set edgesFocusable(r) {
      ee(this.#w, r);
    }
    #b = /* @__PURE__ */ P(() => e.props.disableKeyboardA11y ?? !1);
    get disableKeyboardA11y() {
      return u(this.#b);
    }
    set disableKeyboardA11y(r) {
      ee(this.#b, r);
    }
    #x = /* @__PURE__ */ P(() => e.props.minZoom ?? 0.5);
    get minZoom() {
      return u(this.#x);
    }
    set minZoom(r) {
      ee(this.#x, r);
    }
    #m = /* @__PURE__ */ P(() => e.props.maxZoom ?? 2);
    get maxZoom() {
      return u(this.#m);
    }
    set maxZoom(r) {
      ee(this.#m, r);
    }
    #v = /* @__PURE__ */ P(() => e.props.nodeOrigin ?? [0, 0]);
    get nodeOrigin() {
      return u(this.#v);
    }
    set nodeOrigin(r) {
      ee(this.#v, r);
    }
    #p = /* @__PURE__ */ P(() => e.props.nodeExtent ?? ia);
    get nodeExtent() {
      return u(this.#p);
    }
    set nodeExtent(r) {
      ee(this.#p, r);
    }
    #y = /* @__PURE__ */ P(() => e.props.translateExtent ?? ia);
    get translateExtent() {
      return u(this.#y);
    }
    set translateExtent(r) {
      ee(this.#y, r);
    }
    #_ = /* @__PURE__ */ P(() => e.props.defaultEdgeOptions ?? {});
    get defaultEdgeOptions() {
      return u(this.#_);
    }
    set defaultEdgeOptions(r) {
      ee(this.#_, r);
    }
    #C = /* @__PURE__ */ P(() => e.props.nodeDragThreshold ?? 1);
    get nodeDragThreshold() {
      return u(this.#C);
    }
    set nodeDragThreshold(r) {
      ee(this.#C, r);
    }
    #k = /* @__PURE__ */ P(() => e.props.autoPanOnNodeDrag ?? !0);
    get autoPanOnNodeDrag() {
      return u(this.#k);
    }
    set autoPanOnNodeDrag(r) {
      ee(this.#k, r);
    }
    #S = /* @__PURE__ */ P(() => e.props.autoPanOnConnect ?? !0);
    get autoPanOnConnect() {
      return u(this.#S);
    }
    set autoPanOnConnect(r) {
      ee(this.#S, r);
    }
    #E = /* @__PURE__ */ P(() => e.props.autoPanOnNodeFocus ?? !0);
    get autoPanOnNodeFocus() {
      return u(this.#E);
    }
    set autoPanOnNodeFocus(r) {
      ee(this.#E, r);
    }
    #N = /* @__PURE__ */ P(() => e.props.autoPanSpeed ?? 15);
    get autoPanSpeed() {
      return u(this.#N);
    }
    set autoPanSpeed(r) {
      ee(this.#N, r);
    }
    #P = /* @__PURE__ */ P(() => e.props.connectionDragThreshold ?? 1);
    get connectionDragThreshold() {
      return u(this.#P);
    }
    set connectionDragThreshold(r) {
      ee(this.#P, r);
    }
    fitViewQueued = e.props.fitView ?? !1;
    fitViewOptions = e.props.fitViewOptions;
    fitViewResolver = null;
    #T = /* @__PURE__ */ P(() => e.props.snapGrid ?? null);
    get snapGrid() {
      return u(this.#T);
    }
    set snapGrid(r) {
      ee(this.#T, r);
    }
    #$ = /* @__PURE__ */ Pe(!1);
    get dragging() {
      return u(this.#$);
    }
    set dragging(r) {
      ee(this.#$, r);
    }
    #M = /* @__PURE__ */ Pe(null);
    get selectionRect() {
      return u(this.#M);
    }
    set selectionRect(r) {
      ee(this.#M, r);
    }
    #A = /* @__PURE__ */ Pe(!1);
    get selectionKeyPressed() {
      return u(this.#A);
    }
    set selectionKeyPressed(r) {
      ee(this.#A, r);
    }
    #D = /* @__PURE__ */ Pe(!1);
    get multiselectionKeyPressed() {
      return u(this.#D);
    }
    set multiselectionKeyPressed(r) {
      ee(this.#D, r);
    }
    #O = /* @__PURE__ */ Pe(!1);
    get deleteKeyPressed() {
      return u(this.#O);
    }
    set deleteKeyPressed(r) {
      ee(this.#O, r);
    }
    #V = /* @__PURE__ */ Pe(!1);
    get panActivationKeyPressed() {
      return u(this.#V);
    }
    set panActivationKeyPressed(r) {
      ee(this.#V, r);
    }
    #z = /* @__PURE__ */ Pe(!1);
    get zoomActivationKeyPressed() {
      return u(this.#z);
    }
    set zoomActivationKeyPressed(r) {
      ee(this.#z, r);
    }
    #I = /* @__PURE__ */ Pe(null);
    get selectionRectMode() {
      return u(this.#I);
    }
    set selectionRectMode(r) {
      ee(this.#I, r);
    }
    #L = /* @__PURE__ */ Pe("");
    get ariaLiveMessage() {
      return u(this.#L);
    }
    set ariaLiveMessage(r) {
      ee(this.#L, r);
    }
    #H = /* @__PURE__ */ P(() => e.props.selectionMode ?? Bi.Partial);
    get selectionMode() {
      return u(this.#H);
    }
    set selectionMode(r) {
      ee(this.#H, r);
    }
    #R = /* @__PURE__ */ P(() => ({ ...Gd, ...e.props.nodeTypes }));
    get nodeTypes() {
      return u(this.#R);
    }
    set nodeTypes(r) {
      ee(this.#R, r);
    }
    #B = /* @__PURE__ */ P(() => ({ ...Ud, ...e.props.edgeTypes }));
    get edgeTypes() {
      return u(this.#B);
    }
    set edgeTypes(r) {
      ee(this.#B, r);
    }
    #F = /* @__PURE__ */ P(() => e.props.noPanClass ?? "nopan");
    get noPanClass() {
      return u(this.#F);
    }
    set noPanClass(r) {
      ee(this.#F, r);
    }
    #K = /* @__PURE__ */ P(() => e.props.noDragClass ?? "nodrag");
    get noDragClass() {
      return u(this.#K);
    }
    set noDragClass(r) {
      ee(this.#K, r);
    }
    #Z = /* @__PURE__ */ P(() => e.props.noWheelClass ?? "nowheel");
    get noWheelClass() {
      return u(this.#Z);
    }
    set noWheelClass(r) {
      ee(this.#Z, r);
    }
    #W = /* @__PURE__ */ P(() => p0(e.props.ariaLabelConfig));
    get ariaLabelConfig() {
      return u(this.#W);
    }
    set ariaLabelConfig(r) {
      ee(this.#W, r);
    }
    #Y = /* @__PURE__ */ Pe(yy(this.nodesInitialized, e.props.fitView, e.props.initialViewport, this.width, this.height, this.nodeLookup));
    get _viewport() {
      return u(this.#Y);
    }
    set _viewport(r) {
      ee(this.#Y, r);
    }
    get viewport() {
      return e.viewport ?? this._viewport;
    }
    set viewport(r) {
      e.viewport && (e.viewport = r), this._viewport = r;
    }
    #j = /* @__PURE__ */ Pe(
      // _connection is viewport independent and originating from XYHandle
      sa
    );
    get _connection() {
      return u(this.#j);
    }
    set _connection(r) {
      ee(this.#j, r);
    }
    #X = /* @__PURE__ */ P(() => this._connection.inProgress ? {
      ...this._connection,
      to: Jo(this._connection.to, [this.viewport.x, this.viewport.y, this.viewport.zoom])
    } : this._connection);
    get connection() {
      return u(this.#X);
    }
    set connection(r) {
      ee(this.#X, r);
    }
    #q = /* @__PURE__ */ P(() => e.props.connectionMode ?? to.Strict);
    get connectionMode() {
      return u(this.#q);
    }
    set connectionMode(r) {
      ee(this.#q, r);
    }
    #G = /* @__PURE__ */ P(() => e.props.connectionRadius ?? 20);
    get connectionRadius() {
      return u(this.#G);
    }
    set connectionRadius(r) {
      ee(this.#G, r);
    }
    #U = /* @__PURE__ */ P(() => e.props.isValidConnection ?? (() => !0));
    get isValidConnection() {
      return u(this.#U);
    }
    set isValidConnection(r) {
      ee(this.#U, r);
    }
    #J = /* @__PURE__ */ P(() => e.props.selectNodesOnDrag ?? !0);
    get selectNodesOnDrag() {
      return u(this.#J);
    }
    set selectNodesOnDrag(r) {
      ee(this.#J, r);
    }
    #Q = /* @__PURE__ */ P(() => e.props.defaultMarkerColor === void 0 ? "#b1b1b7" : e.props.defaultMarkerColor);
    get defaultMarkerColor() {
      return u(this.#Q);
    }
    set defaultMarkerColor(r) {
      ee(this.#Q, r);
    }
    #ee = /* @__PURE__ */ P(() => P0(e.edges, {
      defaultColor: this.defaultMarkerColor,
      id: this.flowId,
      defaultMarkerStart: this.defaultEdgeOptions.markerStart,
      defaultMarkerEnd: this.defaultEdgeOptions.markerEnd
    }));
    get markers() {
      return u(this.#ee);
    }
    set markers(r) {
      ee(this.#ee, r);
    }
    #te = /* @__PURE__ */ P(() => e.props.onlyRenderVisibleElements ?? !1);
    get onlyRenderVisibleElements() {
      return u(this.#te);
    }
    set onlyRenderVisibleElements(r) {
      ee(this.#te, r);
    }
    #ne = /* @__PURE__ */ P(() => e.props.onflowerror ?? f0);
    get onerror() {
      return u(this.#ne);
    }
    set onerror(r) {
      ee(this.#ne, r);
    }
    #re = /* @__PURE__ */ P(() => e.props.ondelete);
    get ondelete() {
      return u(this.#re);
    }
    set ondelete(r) {
      ee(this.#re, r);
    }
    #oe = /* @__PURE__ */ P(() => e.props.onbeforedelete);
    get onbeforedelete() {
      return u(this.#oe);
    }
    set onbeforedelete(r) {
      ee(this.#oe, r);
    }
    #ie = /* @__PURE__ */ P(() => e.props.onbeforeconnect);
    get onbeforeconnect() {
      return u(this.#ie);
    }
    set onbeforeconnect(r) {
      ee(this.#ie, r);
    }
    #se = /* @__PURE__ */ P(() => e.props.onconnect);
    get onconnect() {
      return u(this.#se);
    }
    set onconnect(r) {
      ee(this.#se, r);
    }
    #ae = /* @__PURE__ */ P(() => e.props.onconnectstart);
    get onconnectstart() {
      return u(this.#ae);
    }
    set onconnectstart(r) {
      ee(this.#ae, r);
    }
    #le = /* @__PURE__ */ P(() => e.props.onconnectend);
    get onconnectend() {
      return u(this.#le);
    }
    set onconnectend(r) {
      ee(this.#le, r);
    }
    #ce = /* @__PURE__ */ P(() => e.props.onbeforereconnect);
    get onbeforereconnect() {
      return u(this.#ce);
    }
    set onbeforereconnect(r) {
      ee(this.#ce, r);
    }
    #ue = /* @__PURE__ */ P(() => e.props.onreconnect);
    get onreconnect() {
      return u(this.#ue);
    }
    set onreconnect(r) {
      ee(this.#ue, r);
    }
    #de = /* @__PURE__ */ P(() => e.props.onreconnectstart);
    get onreconnectstart() {
      return u(this.#de);
    }
    set onreconnectstart(r) {
      ee(this.#de, r);
    }
    #fe = /* @__PURE__ */ P(() => e.props.onreconnectend);
    get onreconnectend() {
      return u(this.#fe);
    }
    set onreconnectend(r) {
      ee(this.#fe, r);
    }
    #he = /* @__PURE__ */ P(() => e.props.clickConnect ?? !0);
    get clickConnect() {
      return u(this.#he);
    }
    set clickConnect(r) {
      ee(this.#he, r);
    }
    #ge = /* @__PURE__ */ P(() => e.props.onclickconnectstart);
    get onclickconnectstart() {
      return u(this.#ge);
    }
    set onclickconnectstart(r) {
      ee(this.#ge, r);
    }
    #ve = /* @__PURE__ */ P(() => e.props.onclickconnectend);
    get onclickconnectend() {
      return u(this.#ve);
    }
    set onclickconnectend(r) {
      ee(this.#ve, r);
    }
    #pe = /* @__PURE__ */ Pe(null);
    get clickConnectStartHandle() {
      return u(this.#pe);
    }
    set clickConnectStartHandle(r) {
      ee(this.#pe, r);
    }
    #me = /* @__PURE__ */ P(() => e.props.onselectiondrag);
    get onselectiondrag() {
      return u(this.#me);
    }
    set onselectiondrag(r) {
      ee(this.#me, r);
    }
    #ye = /* @__PURE__ */ P(() => e.props.onselectiondragstart);
    get onselectiondragstart() {
      return u(this.#ye);
    }
    set onselectiondragstart(r) {
      ee(this.#ye, r);
    }
    #we = /* @__PURE__ */ P(() => e.props.onselectiondragstop);
    get onselectiondragstop() {
      return u(this.#we);
    }
    set onselectiondragstop(r) {
      ee(this.#we, r);
    }
    resolveFitView = async () => {
      this.panZoom && (await u0(
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
    _prefersDark = new qd("(prefers-color-scheme: dark)", e.props.colorModeSSR === "dark");
    #be = /* @__PURE__ */ P(() => e.props.colorMode === "system" ? this._prefersDark.current ? "dark" : "light" : e.props.colorMode ?? "light");
    get colorMode() {
      return u(this.#be);
    }
    set colorMode(r) {
      ee(this.#be, r);
    }
    constructor() {
    }
    resetStoreValues() {
      this.dragging = !1, this.selectionRect = null, this.selectionRectMode = null, this.selectionKeyPressed = !1, this.multiselectionKeyPressed = !1, this.deleteKeyPressed = !1, this.panActivationKeyPressed = !1, this.zoomActivationKeyPressed = !1, this._connection = sa, this.clickConnectStartHandle = null, this.viewport = e.props.initialViewport ?? { x: 0, y: 0, zoom: 1 }, this.ariaLiveMessage = "";
    }
  }
  return new t();
}
function fn() {
  const e = ir(Wi);
  if (!e)
    throw new Error("To call useStore outside of <SvelteFlow /> you need to wrap your component in a <SvelteFlowProvider />");
  return e.getStore();
}
const Wi = Symbol();
function Jd(e) {
  const t = wy(e);
  function n(H) {
    t.nodeTypes = {
      ...Gd,
      ...H
    };
  }
  function r(H) {
    t.edgeTypes = {
      ...Ud,
      ...H
    };
  }
  function o(H) {
    t.edges = C0(H, t.edges);
  }
  const i = (H, N = !1) => {
    t.nodes = t.nodes.map((M) => {
      const x = H.get(M.id);
      return x ? { ...M, position: x.position, dragging: N } : M;
    });
  };
  function s(H) {
    const { changes: N, updatedInternals: M } = L0(H, t.nodeLookup, t.parentLookup, t.domNode, t.nodeOrigin);
    if (!M)
      return;
    A0(t.nodeLookup, t.parentLookup, {
      nodeOrigin: t.nodeOrigin,
      nodeExtent: t.nodeExtent
    }), t.fitViewQueued && t.resolveFitView();
    const x = /* @__PURE__ */ new Map();
    for (const C of N) {
      const A = t.nodeLookup.get(C.id)?.internals.userNode;
      if (!A)
        continue;
      const D = { ...A };
      switch (C.type) {
        case "dimensions": {
          const K = { ...D.measured, ...C.dimensions };
          C.setAttributes && (D.width = C.dimensions?.width ?? D.width, D.height = C.dimensions?.height ?? D.height), D.measured = K;
          break;
        }
        case "position":
          D.position = C.position ?? D.position;
          break;
      }
      x.set(C.id, D);
    }
    t.nodes = t.nodes.map((C) => x.get(C.id) ?? C);
  }
  function a(H) {
    const N = t.fitViewResolver ?? Promise.withResolvers();
    return t.fitViewQueued = !0, t.fitViewOptions = H, t.fitViewResolver = N, t.nodes = [...t.nodes], N.promise;
  }
  async function l(H, N, M) {
    const x = typeof M?.zoom < "u" ? M.zoom : t.maxZoom, C = t.panZoom;
    return C ? (await C.setViewport({
      x: t.width / 2 - H * x,
      y: t.height / 2 - N * x,
      zoom: x
    }, { duration: M?.duration, ease: M?.ease, interpolate: M?.interpolate }), Promise.resolve(!0)) : Promise.resolve(!1);
  }
  function c(H, N) {
    const M = t.panZoom;
    return M ? M.scaleBy(H, N) : Promise.resolve(!1);
  }
  function d(H) {
    return c(1.2, H);
  }
  function f(H) {
    return c(1 / 1.2, H);
  }
  function h(H) {
    const N = t.panZoom;
    N && (N.setScaleExtent([H, t.maxZoom]), t.minZoom = H);
  }
  function g(H) {
    const N = t.panZoom;
    N && (N.setScaleExtent([t.minZoom, H]), t.maxZoom = H);
  }
  function y(H) {
    const N = t.panZoom;
    N && (N.setTranslateExtent(H), t.translateExtent = H);
  }
  function w(H, N = null) {
    let M = !1;
    const x = H.map((C) => (N ? N.has(C.id) : !0) && C.selected ? (M = !0, { ...C, selected: !1 }) : C);
    return [M, x];
  }
  function b(H) {
    const N = H?.nodes ? new Set(H.nodes.map((K) => K.id)) : null, [M, x] = w(t.nodes, N);
    M && (t.nodes = x);
    const C = H?.edges ? new Set(H.edges.map((K) => K.id)) : null, [A, D] = w(t.edges, C);
    A && (t.edges = D);
  }
  function m(H) {
    const N = t.multiselectionKeyPressed;
    t.nodes = t.nodes.map((M) => {
      const x = H.includes(M.id), C = N && M.selected || x;
      return !!M.selected !== C ? { ...M, selected: C } : M;
    }), N || b({ nodes: [] });
  }
  function k(H) {
    const N = t.multiselectionKeyPressed;
    t.edges = t.edges.map((M) => {
      const x = H.includes(M.id), C = N && M.selected || x;
      return !!M.selected !== C ? { ...M, selected: C } : M;
    }), N || b({ edges: [] });
  }
  function E(H, N, M) {
    const x = t.nodeLookup.get(H);
    if (!x) {
      console.warn("012", Mo.error012(H));
      return;
    }
    t.selectionRect = null, t.selectionRectMode = null, x.selected ? (N || x.selected && t.multiselectionKeyPressed) && (b({ nodes: [x], edges: [] }), requestAnimationFrame(() => M?.blur())) : m([H]);
  }
  function _(H) {
    const N = t.edgeLookup.get(H);
    if (!N) {
      console.warn("012", Mo.error012(H));
      return;
    }
    (N.selectable || t.elementsSelectable && typeof N.selectable > "u") && (t.selectionRect = null, t.selectionRectMode = null, N.selected ? N.selected && t.multiselectionKeyPressed && b({ nodes: [], edges: [N] }) : k([H]));
  }
  function S(H, N) {
    const { nodeExtent: M, snapGrid: x, nodeOrigin: C, nodeLookup: A, nodesDraggable: D, onerror: K } = t, X = /* @__PURE__ */ new Map(), $ = x?.[0] ?? 5, W = x?.[1] ?? 5, U = H.x * $ * N, Z = H.y * W * N;
    for (const G of A.values()) {
      if (!(G.selected && (G.draggable || D && typeof G.draggable > "u")))
        continue;
      let j = {
        x: G.internals.positionAbsolute.x + U,
        y: G.internals.positionAbsolute.y + Z
      };
      x && (j = Uo(j, x));
      const { position: Q, positionAbsolute: ne } = wd({
        nodeId: G.id,
        nextPosition: j,
        nodeLookup: A,
        nodeExtent: M,
        nodeOrigin: C,
        onError: K
      });
      G.position = Q, G.internals.positionAbsolute = ne, X.set(G.id, G);
    }
    i(X);
  }
  function T(H) {
    return H0({
      delta: H,
      panZoom: t.panZoom,
      transform: [t.viewport.x, t.viewport.y, t.viewport.zoom],
      translateExtent: t.translateExtent,
      width: t.width,
      height: t.height
    });
  }
  const z = (H) => {
    t._connection = { ...H };
  };
  function V() {
    t._connection = sa;
  }
  function L() {
    t.resetStoreValues(), b();
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
    setTranslateExtent: y,
    unselectNodesAndEdges: b,
    addSelectedNodes: m,
    addSelectedEdges: k,
    handleNodeSelection: E,
    handleEdgeSelection: _,
    moveSelectedNodes: S,
    panBy: T,
    updateConnection: z,
    cancelConnection: V,
    reset: L
  });
}
function by(e, t) {
  const { minZoom: n, maxZoom: r, initialViewport: o, onPanZoomStart: i, onPanZoom: s, onPanZoomEnd: a, translateExtent: l, setPanZoomInstance: c, onDraggingChange: d, onTransformChange: f } = t, h = oy({
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
    update(y) {
      h.update(y);
    }
  };
}
var xy = /* @__PURE__ */ te('<div class="svelte-flow__zoom svelte-flow__container"><!></div>');
function Qd(e, t) {
  ce(t, !0);
  let n = p(t, "store", 15), r = p(t, "panOnScrollMode", 7), o = p(t, "preventScrolling", 7), i = p(t, "zoomOnScroll", 7), s = p(t, "zoomOnDoubleClick", 7), a = p(t, "zoomOnPinch", 7), l = p(t, "panOnDrag", 7), c = p(t, "panOnScroll", 7), d = p(t, "panOnScrollSpeed", 7), f = p(t, "paneClickDistance", 7), h = p(t, "selectionOnDrag", 7), g = p(t, "onmovestart", 7), y = p(t, "onmove", 7), w = p(t, "onmoveend", 7), b = p(t, "oninit", 7), m = p(t, "children", 7), k = /* @__PURE__ */ P(() => n().panActivationKeyPressed || l()), E = /* @__PURE__ */ P(() => n().panActivationKeyPressed || c());
  const { viewport: _ } = n();
  let S = !1;
  qe(() => {
    !S && n().viewportInitialized && (b()?.(), S = !0);
  });
  var T = {
    get store() {
      return n();
    },
    set store(L) {
      n(L), v();
    },
    get panOnScrollMode() {
      return r();
    },
    set panOnScrollMode(L) {
      r(L), v();
    },
    get preventScrolling() {
      return o();
    },
    set preventScrolling(L) {
      o(L), v();
    },
    get zoomOnScroll() {
      return i();
    },
    set zoomOnScroll(L) {
      i(L), v();
    },
    get zoomOnDoubleClick() {
      return s();
    },
    set zoomOnDoubleClick(L) {
      s(L), v();
    },
    get zoomOnPinch() {
      return a();
    },
    set zoomOnPinch(L) {
      a(L), v();
    },
    get panOnDrag() {
      return l();
    },
    set panOnDrag(L) {
      l(L), v();
    },
    get panOnScroll() {
      return c();
    },
    set panOnScroll(L) {
      c(L), v();
    },
    get panOnScrollSpeed() {
      return d();
    },
    set panOnScrollSpeed(L) {
      d(L), v();
    },
    get paneClickDistance() {
      return f();
    },
    set paneClickDistance(L) {
      f(L), v();
    },
    get selectionOnDrag() {
      return h();
    },
    set selectionOnDrag(L) {
      h(L), v();
    },
    get onmovestart() {
      return g();
    },
    set onmovestart(L) {
      g(L), v();
    },
    get onmove() {
      return y();
    },
    set onmove(L) {
      y(L), v();
    },
    get onmoveend() {
      return w();
    },
    set onmoveend(L) {
      w(L), v();
    },
    get oninit() {
      return b();
    },
    set oninit(L) {
      b(L), v();
    },
    get children() {
      return m();
    },
    set children(L) {
      m(L), v();
    }
  }, z = xy(), V = F(z);
  return Ue(V, m), B(z), wt(z, (L, Y) => by?.(L, Y), () => ({
    viewport: n().viewport,
    minZoom: n().minZoom,
    maxZoom: n().maxZoom,
    initialViewport: _,
    onDraggingChange: (L) => {
      n(n().dragging = L, !0);
    },
    setPanZoomInstance: (L) => {
      n(n().panZoom = L, !0);
    },
    onPanZoomStart: g(),
    onPanZoom: y(),
    onPanZoomEnd: w(),
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
    onTransformChange: (L) => {
      n(n().viewport = { x: L[0], y: L[1], zoom: L[2] }, !0);
    },
    connectionInProgress: n().connection.inProgress
  })), O(e, z), ue(T);
}
le(
  Qd,
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
function uc(e, t) {
  return (n) => {
    n.target === t && e?.(n);
  };
}
function dc(e) {
  return (t) => {
    const n = e.has(t.id);
    return !!t.selected !== n ? { ...t, selected: n } : t;
  };
}
function fc(e, t) {
  if (e.size !== t.size)
    return !1;
  for (const n of e)
    if (!t.has(n))
      return !1;
  return !0;
}
var _y = /* @__PURE__ */ te("<div><!></div>");
function ef(e, t) {
  ce(t, !0);
  let n = p(t, "store", 15), r = p(t, "panOnDrag", 7, !0), o = p(t, "paneClickDistance", 7, 1), i = p(t, "selectionOnDrag", 7), s = p(t, "onpaneclick", 7), a = p(t, "onpanecontextmenu", 7), l = p(t, "onselectionstart", 7), c = p(t, "onselectionend", 7), d = p(t, "children", 7), f, h = null, g = /* @__PURE__ */ new Set(), y = /* @__PURE__ */ new Set(), w = /* @__PURE__ */ P(() => n().panActivationKeyPressed || r()), b = /* @__PURE__ */ P(() => n().selectionKeyPressed || !!n().selectionRect || i() && u(w) !== !0), m = /* @__PURE__ */ P(() => n().elementsSelectable && (u(b) || n().selectionRectMode === "user")), k = !1;
  function E(C) {
    if (h = f?.getBoundingClientRect(), !h) return;
    const A = C.target === f, D = !A && !!C.target.closest(".nokey"), K = i() && A || n().selectionKeyPressed;
    if (D || !u(b) || !K || C.button !== 0 || !C.isPrimary)
      return;
    C.target?.setPointerCapture?.(C.pointerId), k = !1;
    const { x: X, y: $ } = an(C, h);
    n(n().selectionRect = { width: 0, height: 0, startX: X, startY: $, x: X, y: $ }, !0), A || (C.stopPropagation(), C.preventDefault());
  }
  function _(C) {
    if (!u(b) || !h || !n().selectionRect)
      return;
    const A = an(C, h), { startX: D = 0, startY: K = 0 } = n().selectionRect;
    if (!k) {
      const Z = n().selectionKeyPressed ? 0 : o();
      if (Math.hypot(A.x - D, A.y - K) <= Z)
        return;
      n().unselectNodesAndEdges(), l()?.(C);
    }
    k = !0;
    const X = {
      ...n().selectionRect,
      x: A.x < D ? A.x : D,
      y: A.y < K ? A.y : K,
      width: Math.abs(A.x - D),
      height: Math.abs(A.y - K)
    }, $ = g, W = y;
    g = new Set(qa(
      n().nodeLookup,
      X,
      [
        n().viewport.x,
        n().viewport.y,
        n().viewport.zoom
      ],
      n().selectionMode === Bi.Partial,
      !0
    ).map((Z) => Z.id));
    const U = n().defaultEdgeOptions.selectable ?? !0;
    y = /* @__PURE__ */ new Set();
    for (const Z of g) {
      const G = n().connectionLookup.get(Z);
      if (G)
        for (const { edgeId: R } of G.values()) {
          const j = n().edgeLookup.get(R);
          j && (j.selectable ?? U) && y.add(R);
        }
    }
    fc($, g) || n(n().nodes = n().nodes.map(dc(g)), !0), fc(W, y) || n(n().edges = n().edges.map(dc(y)), !0), n(n().selectionRectMode = "user", !0), n(n().selectionRect = X, !0);
  }
  function S(C) {
    C.button === 0 && (C.target?.releasePointerCapture?.(C.pointerId), !k && C.target === f && V?.(C), n(n().selectionRect = null, !0), k && n(n().selectionRectMode = g.size > 0 ? "nodes" : null, !0), k && c()?.(C));
  }
  const T = (C) => {
    if (Array.isArray(u(w)) && u(w).includes(2)) {
      C.preventDefault();
      return;
    }
    a()?.({ event: C });
  }, z = (C) => {
    k && (C.stopPropagation(), k = !1);
  };
  function V(C) {
    if (k || n().connection.inProgress) {
      k = !1;
      return;
    }
    s()?.({ event: C }), n().unselectNodesAndEdges(), n(n().selectionRectMode = null, !0), n(n().selectionRect = null, !0);
  }
  var L = {
    get store() {
      return n();
    },
    set store(C) {
      n(C), v();
    },
    get panOnDrag() {
      return r();
    },
    set panOnDrag(C = !0) {
      r(C), v();
    },
    get paneClickDistance() {
      return o();
    },
    set paneClickDistance(C = 1) {
      o(C), v();
    },
    get selectionOnDrag() {
      return i();
    },
    set selectionOnDrag(C) {
      i(C), v();
    },
    get onpaneclick() {
      return s();
    },
    set onpaneclick(C) {
      s(C), v();
    },
    get onpanecontextmenu() {
      return a();
    },
    set onpanecontextmenu(C) {
      a(C), v();
    },
    get onselectionstart() {
      return l();
    },
    set onselectionstart(C) {
      l(C), v();
    },
    get onselectionend() {
      return c();
    },
    set onselectionend(C) {
      c(C), v();
    },
    get children() {
      return d();
    },
    set children(C) {
      d(C), v();
    }
  }, Y = _y();
  let H;
  var N = /* @__PURE__ */ P(() => u(m) ? void 0 : uc(V, f));
  Y.__click = function(...C) {
    u(N)?.apply(this, C);
  }, Y.__pointermove = function(...C) {
    (u(m) ? _ : void 0)?.apply(this, C);
  }, Y.__pointerup = function(...C) {
    (u(m) ? S : void 0)?.apply(this, C);
  };
  var M = /* @__PURE__ */ P(() => uc(T, f));
  Y.__contextmenu = function(...C) {
    u(M)?.apply(this, C);
  };
  var x = F(Y);
  return Ue(x, d), B(Y), St(Y, (C) => f = C, () => f), Se((C) => H = Bt(Y, 1, "svelte-flow__pane svelte-flow__container", null, H, C), [
    () => ({
      draggable: r() === !0 || Array.isArray(r()) && r().includes(0),
      dragging: n().dragging,
      selection: u(b)
    })
  ]), Di(
    "pointerdown",
    Y,
    function(...C) {
      (u(m) ? E : void 0)?.apply(this, C);
    },
    !0
  ), Di(
    "click",
    Y,
    function(...C) {
      (u(m) ? z : void 0)?.apply(this, C);
    },
    !0
  ), O(e, Y), ue(L);
}
gr(["click", "pointermove", "pointerup", "contextmenu"]);
le(
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
var Cy = /* @__PURE__ */ te('<div class="svelte-flow__viewport xyflow__viewport svelte-flow__container"><!></div>');
function tf(e, t) {
  ce(t, !0);
  let n = p(t, "store", 15), r = p(t, "children", 7);
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
  }, i = Cy();
  let s;
  var a = F(i);
  return Ue(a, r), B(i), Se(() => s = vt(i, "", s, {
    transform: `translate(${n().viewport.x ?? ""}px, ${n().viewport.y ?? ""}px) scale(${n().viewport.zoom ?? ""})`
  })), O(e, i), ue(o);
}
le(tf, { store: {}, children: {} }, [], [], !0);
function nf(e, t) {
  const { store: n, onDrag: r, onDragStart: o, onDragStop: i, onNodeMouseDown: s } = t, a = Z0({
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
var ky = /* @__PURE__ */ te('<div aria-live="assertive" aria-atomic="true" class="a11y-live-msg svelte-wlt670"> </div>'), Sy = /* @__PURE__ */ te('<div class="a11y-hidden svelte-wlt670"> </div> <div class="a11y-hidden svelte-wlt670"> </div> <!>', 1);
const Ey = {
  hash: "svelte-wlt670",
  code: ".a11y-hidden.svelte-wlt670 {display:none;}.a11y-live-msg.svelte-wlt670 {position:absolute;width:1px;height:1px;margin:-1px;border:0;padding:0;overflow:hidden;clip:rect(0px, 0px, 0px, 0px);clip-path:inset(100%);}"
};
function rf(e, t) {
  ce(t, !0), Fe(e, Ey);
  let n = p(t, "store", 7);
  var r = {
    get store() {
      return n();
    },
    set store(f) {
      n(f), v();
    }
  }, o = Sy(), i = ie(o), s = F(i, !0);
  B(i);
  var a = I(i, 2), l = F(a, !0);
  B(a);
  var c = I(a, 2);
  {
    var d = (f) => {
      var h = ky(), g = F(h, !0);
      B(h), Se(() => {
        Ce(h, "id", `${Ny}-${n().flowId}`), We(g, n().ariaLiveMessage);
      }), O(f, h);
    };
    ae(c, (f) => {
      n().disableKeyboardA11y || f(d);
    });
  }
  return Se(() => {
    Ce(i, "id", `${of}-${n().flowId}`), We(s, n().disableKeyboardA11y ? n().ariaLabelConfig["node.a11yDescription.default"] : n().ariaLabelConfig["node.a11yDescription.keyboardDisabled"]), Ce(a, "id", `${sf}-${n().flowId}`), We(l, n().ariaLabelConfig["edge.a11yDescription.default"]);
  }), O(e, o), ue(r);
}
le(rf, { store: {} }, [], [], !0);
const of = "svelte-flow__node-desc", sf = "svelte-flow__edge-desc", Ny = "svelte-flow__aria-live";
var Py = /* @__PURE__ */ te("<div><!></div>");
function af(e, t) {
  ce(t, !0);
  let n = p(t, "store", 15), r = p(t, "node", 7), o = p(t, "resizeObserver", 7), i = p(t, "nodeClickDistance", 7), s = p(t, "onnodeclick", 7), a = p(t, "onnodedrag", 7), l = p(t, "onnodedragstart", 7), c = p(t, "onnodedragstop", 7), d = p(t, "onnodepointerenter", 7), f = p(t, "onnodepointerleave", 7), h = p(t, "onnodepointermove", 7), g = p(t, "onnodecontextmenu", 7), y = /* @__PURE__ */ P(() => Pt(r().data, () => ({}), !0)), w = /* @__PURE__ */ P(() => Pt(r().selected, !1)), b = /* @__PURE__ */ P(() => r().draggable), m = /* @__PURE__ */ P(() => r().selectable), k = /* @__PURE__ */ P(() => Pt(r().deletable, !0)), E = /* @__PURE__ */ P(() => r().connectable), _ = /* @__PURE__ */ P(() => r().focusable), S = /* @__PURE__ */ P(() => Pt(r().hidden, !1)), T = /* @__PURE__ */ P(() => Pt(r().dragging, !1)), z = /* @__PURE__ */ P(() => Pt(r().style, "")), V = /* @__PURE__ */ P(() => r().class), L = /* @__PURE__ */ P(() => Pt(r().type, "default")), Y = /* @__PURE__ */ P(() => r().parentId), H = /* @__PURE__ */ P(() => r().sourcePosition), N = /* @__PURE__ */ P(() => r().targetPosition), M = /* @__PURE__ */ P(() => Pt(r().measured, () => ({ width: 0, height: 0 }), !0).width), x = /* @__PURE__ */ P(() => Pt(r().measured, () => ({ width: 0, height: 0 }), !0).height), C = /* @__PURE__ */ P(() => r().initialWidth), A = /* @__PURE__ */ P(() => r().initialHeight), D = /* @__PURE__ */ P(() => r().width), K = /* @__PURE__ */ P(() => r().height), X = /* @__PURE__ */ P(() => r().dragHandle), $ = /* @__PURE__ */ P(() => Pt(r().internals.z, 0)), W = /* @__PURE__ */ P(() => r().internals.positionAbsolute.x), U = /* @__PURE__ */ P(() => r().internals.positionAbsolute.y), Z = /* @__PURE__ */ P(() => r().internals.userNode), { id: G } = r(), R = /* @__PURE__ */ P(() => u(b) ?? n().nodesDraggable), j = /* @__PURE__ */ P(() => u(m) ?? n().elementsSelectable), Q = /* @__PURE__ */ P(() => u(E) ?? n().nodesConnectable), ne = /* @__PURE__ */ P(() => Cd(r())), J = /* @__PURE__ */ P(() => !!r().internals.handleBounds), _e = /* @__PURE__ */ P(() => u(ne) && u(J)), oe = /* @__PURE__ */ P(() => u(_) ?? n().nodesFocusable);
  function se(de) {
    return n().parentLookup.has(de);
  }
  let re = /* @__PURE__ */ P(() => se(G)), he = /* @__PURE__ */ Pe(null), me = null, ke = u(L), fe = u(H), be = u(N), Te = /* @__PURE__ */ P(() => n().nodeTypes[u(L)] ?? tl), q = /* @__PURE__ */ P(() => n().ariaLabelConfig);
  qr("svelteflow__node_connectable", {
    get value() {
      return u(Q);
    }
  }), qr("svelteflow__node_id", G);
  let Oe = /* @__PURE__ */ P(() => {
    const de = u(M) === void 0 ? u(D) ?? u(C) : u(D), Ae = u(x) === void 0 ? u(K) ?? u(A) : u(K);
    if (!(de === void 0 && Ae === void 0 && u(z) === void 0))
      return `${u(z)};${de ? `width:${Cn(de)};` : ""}${Ae ? `height:${Cn(Ae)};` : ""}`;
  });
  qe(() => {
    (u(L) !== ke || u(H) !== fe || u(N) !== be) && u(he) !== null && requestAnimationFrame(() => {
      u(he) !== null && n().updateNodeInternals(/* @__PURE__ */ new Map([[G, { id: G, nodeElement: u(he), force: !0 }]]));
    }), ke = u(L), fe = u(H), be = u(N);
  }), qe(() => {
    o() && (!u(_e) || u(he) !== me) && (me && o().unobserve(me), u(he) && o().observe(u(he)), me = u(he));
  }), Yo(() => {
    me && o()?.unobserve(me);
  });
  function Re(de) {
    u(j) && (!n().selectNodesOnDrag || !u(R) || n().nodeDragThreshold > 0) && n().handleNodeSelection(G), s()?.({ node: u(Z), event: de });
  }
  function Ie(de) {
    if (!(Ed(de) || n().disableKeyboardA11y))
      if (md.includes(de.key) && u(j)) {
        const Ae = de.key === "Escape";
        n().handleNodeSelection(G, Ae, u(he));
      } else u(R) && r().selected && Object.prototype.hasOwnProperty.call(Zi, de.key) && (de.preventDefault(), n(
        n().ariaLiveMessage = u(q)["node.a11yDescription.ariaLiveMessage"]({
          direction: de.key.replace("Arrow", "").toLowerCase(),
          x: ~~r().internals.positionAbsolute.x,
          y: ~~r().internals.positionAbsolute.y
        }),
        !0
      ), n().moveSelectedNodes(Zi[de.key], de.shiftKey ? 4 : 1));
  }
  const Et = () => {
    if (n().disableKeyboardA11y || !n().autoPanOnNodeFocus || !u(he)?.matches(":focus-visible"))
      return;
    const { width: de, height: Ae, viewport: Je } = n();
    qa(/* @__PURE__ */ new Map([[G, r()]]), { x: 0, y: 0, width: de, height: Ae }, [Je.x, Je.y, Je.zoom], !0).length > 0 || n().setCenter(r().position.x + (r().measured.width ?? 0) / 2, r().position.y + (r().measured.height ?? 0) / 2, { zoom: Je.zoom });
  };
  var ot = {
    get store() {
      return n();
    },
    set store(de) {
      n(de), v();
    },
    get node() {
      return r();
    },
    set node(de) {
      r(de), v();
    },
    get resizeObserver() {
      return o();
    },
    set resizeObserver(de) {
      o(de), v();
    },
    get nodeClickDistance() {
      return i();
    },
    set nodeClickDistance(de) {
      i(de), v();
    },
    get onnodeclick() {
      return s();
    },
    set onnodeclick(de) {
      s(de), v();
    },
    get onnodedrag() {
      return a();
    },
    set onnodedrag(de) {
      a(de), v();
    },
    get onnodedragstart() {
      return l();
    },
    set onnodedragstart(de) {
      l(de), v();
    },
    get onnodedragstop() {
      return c();
    },
    set onnodedragstop(de) {
      c(de), v();
    },
    get onnodepointerenter() {
      return d();
    },
    set onnodepointerenter(de) {
      d(de), v();
    },
    get onnodepointerleave() {
      return f();
    },
    set onnodepointerleave(de) {
      f(de), v();
    },
    get onnodepointermove() {
      return h();
    },
    set onnodepointermove(de) {
      h(de), v();
    },
    get onnodecontextmenu() {
      return g();
    },
    set onnodecontextmenu(de) {
      g(de), v();
    }
  }, At = Ee(), pt = ie(At);
  {
    var tn = (de) => {
      var Ae = Py();
      rt(Ae, () => ({
        "data-id": G,
        class: [
          "svelte-flow__node",
          `svelte-flow__node-${u(L)}`,
          u(V)
        ],
        style: u(Oe),
        onclick: Re,
        onpointerenter: d() ? (Be) => d()({ node: u(Z), event: Be }) : void 0,
        onpointerleave: f() ? (Be) => f()({ node: u(Z), event: Be }) : void 0,
        onpointermove: h() ? (Be) => h()({ node: u(Z), event: Be }) : void 0,
        oncontextmenu: g() ? (Be) => g()({ node: u(Z), event: Be }) : void 0,
        onkeydown: u(oe) ? Ie : void 0,
        onfocus: u(oe) ? Et : void 0,
        tabIndex: u(oe) ? 0 : void 0,
        role: r().ariaRole ?? (u(oe) ? "group" : void 0),
        "aria-roledescription": "node",
        "aria-describedby": n().disableKeyboardA11y ? void 0 : `${of}-${n().flowId}`,
        ...r().domAttributes,
        [Un]: {
          dragging: u(T),
          selected: u(w),
          draggable: u(R),
          connectable: u(Q),
          selectable: u(j),
          nopan: u(R),
          parent: u(re)
        },
        [yn]: {
          "z-index": u($),
          transform: `translate(${u(W) ?? ""}px, ${u(U) ?? ""}px)`,
          visibility: u(ne) ? "visible" : "hidden"
        }
      }));
      var Je = F(Ae);
      us(Je, () => u(Te), (Be, lt) => {
        lt(Be, {
          get data() {
            return u(y);
          },
          get id() {
            return G;
          },
          get selected() {
            return u(w);
          },
          get selectable() {
            return u(j);
          },
          get deletable() {
            return u(k);
          },
          get sourcePosition() {
            return u(H);
          },
          get targetPosition() {
            return u(N);
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
            return u(Y);
          },
          get type() {
            return u(L);
          },
          get isConnectable() {
            return u(Q);
          },
          get positionAbsoluteX() {
            return u(W);
          },
          get positionAbsoluteY() {
            return u(U);
          },
          get width() {
            return u(D);
          },
          get height() {
            return u(K);
          }
        });
      }), B(Ae), wt(Ae, (Be, lt) => nf?.(Be, lt), () => ({
        nodeId: G,
        isSelectable: u(j),
        disabled: !u(R),
        handleSelector: u(X),
        noDragClass: n().noDragClass,
        nodeClickDistance: i(),
        onNodeMouseDown: n().handleNodeSelection,
        onDrag: (Be, lt, Nt, Dt) => {
          a()?.({ event: Be, targetNode: Nt, nodes: Dt });
        },
        onDragStart: (Be, lt, Nt, Dt) => {
          l()?.({ event: Be, targetNode: Nt, nodes: Dt });
        },
        onDragStop: (Be, lt, Nt, Dt) => {
          c()?.({ event: Be, targetNode: Nt, nodes: Dt });
        },
        store: n()
      })), St(Ae, (Be) => ee(he, Be), () => u(he)), O(de, Ae);
    };
    ae(pt, (de) => {
      u(S) || de(tn);
    });
  }
  return O(e, At), ue(ot);
}
le(
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
var Ty = /* @__PURE__ */ te('<div class="svelte-flow__nodes"></div>');
function lf(e, t) {
  ce(t, !0);
  let n = p(t, "store", 15), r = p(t, "nodeClickDistance", 7), o = p(t, "onnodeclick", 7), i = p(t, "onnodecontextmenu", 7), s = p(t, "onnodepointerenter", 7), a = p(t, "onnodepointermove", 7), l = p(t, "onnodepointerleave", 7), c = p(t, "onnodedrag", 7), d = p(t, "onnodedragstart", 7), f = p(t, "onnodedragstop", 7);
  const h = typeof ResizeObserver > "u" ? null : new ResizeObserver((w) => {
    const b = /* @__PURE__ */ new Map();
    w.forEach((m) => {
      const k = m.target.getAttribute("data-id");
      b.set(k, { id: k, nodeElement: m.target, force: !0 });
    }), n().updateNodeInternals(b);
  });
  Yo(() => {
    h?.disconnect();
  });
  var g = {
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
      return c();
    },
    set onnodedrag(w) {
      c(w), v();
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
  }, y = Ty();
  return Ct(y, 21, () => n().visible.nodes.values(), (w) => w.id, (w, b) => {
    af(w, {
      get node() {
        return u(b);
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
      set store(m) {
        n(m);
      }
    });
  }), B(y), O(e, y), ue(g);
}
le(
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
var $y = /* @__PURE__ */ pe('<svg class="svelte-flow__edge-wrapper"><g><!></g></svg>');
function cf(e, t) {
  ce(t, !0);
  const n = p(t, "edge", 7), r = p(t, "store", 15), o = p(t, "onedgeclick", 7), i = p(t, "onedgecontextmenu", 7), s = p(t, "onedgepointerenter", 7), a = p(t, "onedgepointerleave", 7);
  let l = /* @__PURE__ */ P(() => n().source), c = /* @__PURE__ */ P(() => n().target), d = /* @__PURE__ */ P(() => n().sourceX), f = /* @__PURE__ */ P(() => n().sourceY), h = /* @__PURE__ */ P(() => n().targetX), g = /* @__PURE__ */ P(() => n().targetY), y = /* @__PURE__ */ P(() => n().sourcePosition), w = /* @__PURE__ */ P(() => n().targetPosition), b = /* @__PURE__ */ P(() => Pt(n().animated, !1)), m = /* @__PURE__ */ P(() => Pt(n().selected, !1)), k = /* @__PURE__ */ P(() => n().label), E = /* @__PURE__ */ P(() => n().labelStyle), _ = /* @__PURE__ */ P(() => Pt(n().data, () => ({}), !0)), S = /* @__PURE__ */ P(() => n().style), T = /* @__PURE__ */ P(() => n().interactionWidth), z = /* @__PURE__ */ P(() => Pt(n().type, "default")), V = /* @__PURE__ */ P(() => n().sourceHandle), L = /* @__PURE__ */ P(() => n().targetHandle), Y = /* @__PURE__ */ P(() => n().markerStart), H = /* @__PURE__ */ P(() => n().markerEnd), N = /* @__PURE__ */ P(() => n().selectable), M = /* @__PURE__ */ P(() => n().focusable), x = /* @__PURE__ */ P(() => Pt(n().deletable, !0)), C = /* @__PURE__ */ P(() => n().hidden), A = /* @__PURE__ */ P(() => n().zIndex), D = /* @__PURE__ */ P(() => n().class), K = /* @__PURE__ */ P(() => n().ariaLabel), X = null;
  const { id: $ } = n();
  qr("svelteflow__edge_id", $);
  let W = /* @__PURE__ */ P(() => u(N) ?? r().elementsSelectable), U = /* @__PURE__ */ P(() => u(M) ?? r().edgesFocusable), Z = /* @__PURE__ */ P(() => r().edgeTypes[u(z)] ?? nl), G = /* @__PURE__ */ P(() => u(Y) ? `url('#${la(u(Y), r().flowId)}')` : void 0), R = /* @__PURE__ */ P(() => u(H) ? `url('#${la(u(H), r().flowId)}')` : void 0);
  function j(re) {
    const he = r().edgeLookup.get($);
    he && (u(W) && r().handleEdgeSelection($), o()?.({ event: re, edge: he }));
  }
  function Q(re, he) {
    const me = r().edgeLookup.get($);
    me && he({ event: re, edge: me });
  }
  function ne(re) {
    if (!r().disableKeyboardA11y && md.includes(re.key) && u(W)) {
      const { unselectNodesAndEdges: he, addSelectedEdges: me } = r();
      re.key === "Escape" ? (X?.blur(), he({ edges: [n()] })) : me([$]);
    }
  }
  var J = {
    get edge() {
      return n();
    },
    set edge(re) {
      n(re), v();
    },
    get store() {
      return r();
    },
    set store(re) {
      r(re), v();
    },
    get onedgeclick() {
      return o();
    },
    set onedgeclick(re) {
      o(re), v();
    },
    get onedgecontextmenu() {
      return i();
    },
    set onedgecontextmenu(re) {
      i(re), v();
    },
    get onedgepointerenter() {
      return s();
    },
    set onedgepointerenter(re) {
      s(re), v();
    },
    get onedgepointerleave() {
      return a();
    },
    set onedgepointerleave(re) {
      a(re), v();
    }
  }, _e = Ee(), oe = ie(_e);
  {
    var se = (re) => {
      var he = $y();
      let me;
      var ke = F(he);
      rt(ke, () => ({
        class: ["svelte-flow__edge", u(D)],
        "data-id": $,
        onclick: j,
        oncontextmenu: i() ? (be) => {
          Q(be, i());
        } : void 0,
        onpointerenter: s() ? (be) => {
          Q(be, s());
        } : void 0,
        onpointerleave: a() ? (be) => {
          Q(be, a());
        } : void 0,
        "aria-label": u(K) === null ? void 0 : u(K) ? u(K) : `Edge from ${u(l)} to ${u(c)}`,
        "aria-describedby": u(U) ? `${sf}-${r().flowId}` : void 0,
        role: n().ariaRole ?? (u(U) ? "group" : "img"),
        "aria-roledescription": "edge",
        onkeydown: u(U) ? ne : void 0,
        tabindex: u(U) ? 0 : void 0,
        ...n().domAttributes,
        [Un]: {
          animated: u(b),
          selected: u(m),
          selectable: u(W)
        }
      }));
      var fe = F(ke);
      us(fe, () => u(Z), (be, Te) => {
        Te(be, {
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
            return u(y);
          },
          get targetPosition() {
            return u(w);
          },
          get animated() {
            return u(b);
          },
          get selected() {
            return u(m);
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
            return u(W);
          },
          get deletable() {
            return u(x);
          },
          get type() {
            return u(z);
          },
          get sourceHandleId() {
            return u(V);
          },
          get targetHandleId() {
            return u(L);
          },
          get markerStart() {
            return u(G);
          },
          get markerEnd() {
            return u(R);
          }
        });
      }), B(ke), St(ke, (be) => X = be, () => X), B(he), Se(() => me = vt(he, "", me, { "z-index": u(A) })), O(re, he);
    };
    ae(oe, (re) => {
      u(C) || re(se);
    });
  }
  return O(e, _e), ue(J);
}
le(
  cf,
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
bg();
var My = /* @__PURE__ */ pe("<defs></defs>");
function uf(e, t) {
  ce(t, !1);
  const n = fn();
  Ru();
  var r = My();
  Ct(r, 5, () => n.markers, (o) => o.id, (o, i) => {
    df(o, Ye(() => u(i)));
  }), B(r), O(e, r), ue();
}
le(uf, {}, [], [], !0);
var Ay = /* @__PURE__ */ pe('<polyline class="arrow" fill="none" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4"></polyline>'), Dy = /* @__PURE__ */ pe('<polyline class="arrowclosed" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), Oy = /* @__PURE__ */ pe('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function df(e, t) {
  ce(t, !0);
  let n = p(t, "id", 7), r = p(t, "type", 7), o = p(t, "width", 7, 12.5), i = p(t, "height", 7, 12.5), s = p(t, "markerUnits", 7, "strokeWidth"), a = p(t, "orient", 7, "auto-start-reverse"), l = p(t, "color", 7, "none"), c = p(t, "strokeWidth", 7);
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
      return c();
    },
    set strokeWidth(w) {
      c(w), v();
    }
  }, f = Oy(), h = F(f);
  {
    var g = (w) => {
      var b = Ay();
      let m;
      Se(() => {
        Ce(b, "stroke-width", c()), m = vt(b, "", m, { stroke: l() });
      }), O(w, b);
    }, y = (w) => {
      var b = Ee(), m = ie(b);
      {
        var k = (E) => {
          var _ = Dy();
          let S;
          Se(() => {
            Ce(_, "stroke-width", c()), S = vt(_, "", S, { stroke: l(), fill: l() });
          }), O(E, _);
        };
        ae(
          m,
          (E) => {
            r() === Ao.ArrowClosed && E(k);
          },
          !0
        );
      }
      O(w, b);
    };
    ae(h, (w) => {
      r() === Ao.Arrow ? w(g) : w(y, !1);
    });
  }
  return B(f), Se(() => {
    Ce(f, "id", n()), Ce(f, "markerWidth", `${o()}`), Ce(f, "markerHeight", `${i()}`), Ce(f, "markerUnits", s()), Ce(f, "orient", a());
  }), O(e, f), ue(d);
}
le(
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
var Vy = /* @__PURE__ */ te('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!></div>');
function ff(e, t) {
  ce(t, !0);
  let n = p(t, "store", 15), r = p(t, "onedgeclick", 7), o = p(t, "onedgecontextmenu", 7), i = p(t, "onedgepointerenter", 7), s = p(t, "onedgepointerleave", 7);
  var a = {
    get store() {
      return n();
    },
    set store(h) {
      n(h), v();
    },
    get onedgeclick() {
      return r();
    },
    set onedgeclick(h) {
      r(h), v();
    },
    get onedgecontextmenu() {
      return o();
    },
    set onedgecontextmenu(h) {
      o(h), v();
    },
    get onedgepointerenter() {
      return i();
    },
    set onedgepointerenter(h) {
      i(h), v();
    },
    get onedgepointerleave() {
      return s();
    },
    set onedgepointerleave(h) {
      s(h), v();
    }
  }, l = Vy(), c = F(l), d = F(c);
  uf(d, {}), B(c);
  var f = I(c, 2);
  return Ct(f, 17, () => n().visible.edges.values(), (h) => h.id, (h, g) => {
    cf(h, {
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
      set store(y) {
        n(y);
      }
    });
  }), B(l), O(e, l), ue(a);
}
le(
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
var zy = /* @__PURE__ */ te('<div class="svelte-flow__selection svelte-1rrpn9s"></div>');
const Iy = {
  hash: "svelte-1rrpn9s",
  code: ".svelte-flow__selection.svelte-1rrpn9s {position:absolute;top:0;left:0;}"
};
function rl(e, t) {
  ce(t, !0), Fe(e, Iy);
  let n = p(t, "x", 7, 0), r = p(t, "y", 7, 0), o = p(t, "width", 7, 0), i = p(t, "height", 7, 0), s = p(t, "isVisible", 7, !0);
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
  }, l = Ee(), c = ie(l);
  {
    var d = (f) => {
      var h = zy();
      let g;
      Se((y) => g = vt(h, "", g, y), [
        () => ({
          width: typeof o() == "string" ? o() : Cn(o()),
          height: typeof i() == "string" ? i() : Cn(i()),
          transform: `translate(${n()}px, ${r()}px)`
        })
      ]), O(f, h);
    };
    ae(c, (f) => {
      s() && f(d);
    });
  }
  return O(e, l), ue(a);
}
le(rl, { x: {}, y: {}, width: {}, height: {}, isVisible: {} }, [], [], !0);
var Ly = /* @__PURE__ */ te("<div><!></div>");
const Hy = {
  hash: "svelte-ceq0zw",
  code: `.svelte-flow__selection-wrapper.svelte-ceq0zw {position:absolute;top:0;left:0;z-index:2000;pointer-events:all;}.svelte-flow__selection-wrapper.svelte-ceq0zw:focus,
  .svelte-flow__selection-wrapper.svelte-ceq0zw:focus-visible {outline:none;}`
};
function hf(e, t) {
  ce(t, !0), Fe(e, Hy);
  let n = p(t, "store", 15), r = p(t, "onnodedrag", 7), o = p(t, "onnodedragstart", 7), i = p(t, "onnodedragstop", 7), s = p(t, "onselectionclick", 7), a = p(t, "onselectioncontextmenu", 7), l = /* @__PURE__ */ Pe(void 0);
  qe(() => {
    n().disableKeyboardA11y || u(l)?.focus({ preventScroll: !0 });
  });
  let c = /* @__PURE__ */ P(() => {
    if (n().selectionRectMode === "nodes") {
      n().nodes;
      const m = Go(n().nodeLookup, { filter: (k) => !!k.selected });
      if (m.width > 0 && m.height > 0)
        return m;
    }
    return null;
  });
  function d(m) {
    const k = n().nodes.filter((E) => E.selected);
    a()?.({ nodes: k, event: m });
  }
  function f(m) {
    const k = n().nodes.filter((E) => E.selected);
    s()?.({ nodes: k, event: m });
  }
  function h(m) {
    Object.prototype.hasOwnProperty.call(Zi, m.key) && (m.preventDefault(), n().moveSelectedNodes(Zi[m.key], m.shiftKey ? 4 : 1));
  }
  var g = {
    get store() {
      return n();
    },
    set store(m) {
      n(m), v();
    },
    get onnodedrag() {
      return r();
    },
    set onnodedrag(m) {
      r(m), v();
    },
    get onnodedragstart() {
      return o();
    },
    set onnodedragstart(m) {
      o(m), v();
    },
    get onnodedragstop() {
      return i();
    },
    set onnodedragstop(m) {
      i(m), v();
    },
    get onselectionclick() {
      return s();
    },
    set onselectionclick(m) {
      s(m), v();
    },
    get onselectioncontextmenu() {
      return a();
    },
    set onselectioncontextmenu(m) {
      a(m), v();
    }
  }, y = Ee(), w = ie(y);
  {
    var b = (m) => {
      var k = Ly();
      k.__contextmenu = d, k.__click = f, k.__keydown = function(...S) {
        (n().disableKeyboardA11y ? void 0 : h)?.apply(this, S);
      };
      let E;
      var _ = F(k);
      rl(_, { width: "100%", height: "100%", x: 0, y: 0 }), B(k), wt(k, (S, T) => nf?.(S, T), () => ({
        disabled: !1,
        store: n(),
        onDrag: (S, T, z, V) => {
          r()?.({ event: S, targetNode: null, nodes: V });
        },
        onDragStart: (S, T, z, V) => {
          o()?.({ event: S, targetNode: null, nodes: V });
        },
        onDragStop: (S, T, z, V) => {
          i()?.({ event: S, targetNode: null, nodes: V });
        }
      })), St(k, (S) => ee(l, S), () => u(l)), Se(
        (S) => {
          Bt(k, 1, Wn(["svelte-flow__selection-wrapper", n().noPanClass]), "svelte-ceq0zw"), Ce(k, "role", n().disableKeyboardA11y ? void 0 : "button"), Ce(k, "tabindex", n().disableKeyboardA11y ? void 0 : -1), E = vt(k, "", E, S);
        },
        [
          () => ({
            width: Cn(u(c).width),
            height: Cn(u(c).height),
            transform: `translate(${u(c).x ?? ""}px, ${u(c).y ?? ""}px)`
          })
        ]
      ), O(m, k);
    };
    ae(w, (m) => {
      n().selectionRectMode === "nodes" && u(c) && Dn(u(c).x) && Dn(u(c).y) && m(b);
    });
  }
  return O(e, y), ue(g);
}
gr(["contextmenu", "click", "keydown"]);
le(
  hf,
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
function Ry(e) {
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
function pn(e, t) {
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
      }, { modifier: h, key: g, callback: y, preventDefault: w, enabled: b } = f;
      if (b) {
        if (a.key !== g) continue;
        if (h === null || h === !1) {
          if (c !== 0) continue;
        } else if (h !== void 0 && h?.[0]?.length > 0) {
          const k = Array.isArray(h) ? h : [h];
          let E = !1;
          for (const _ of k)
            if ((Array.isArray(_) ? _ : [_]).reduce(
              (T, z) => T | Ry(z),
              0
            ) === c) {
              E = !0;
              break;
            }
          if (!E) continue;
        }
        w && a.preventDefault();
        const m = {
          node: e,
          trigger: f,
          originalEvent: a
        };
        e.dispatchEvent(new CustomEvent("shortcut", { detail: m })), y?.(m);
      }
    }
  }
  let s;
  return n && (s = ar(e, o, i)), {
    update: (a) => {
      const { enabled: l = !0, type: c = "keydown" } = a;
      n && (!l || o !== c) ? s?.() : !n && l && (s = ar(e, c, i)), n = l, o = c, r = a.trigger;
    },
    destroy: () => {
      s?.();
    }
  };
}
function ut() {
  const e = /* @__PURE__ */ P(fn), t = (i) => {
    const s = lc(i) ? i : u(e).nodeLookup.get(i.id), a = s.parentId ? v0(s.position, s.measured, s.parentId, u(e).nodeLookup, u(e).nodeOrigin) : s.position, l = {
      ...s,
      position: a,
      width: s.measured?.width ?? s.width,
      height: s.measured?.height ?? s.height
    };
    return ro(l);
  };
  function n(i, s, a = { replace: !1 }) {
    u(e).nodes = st(() => u(e).nodes).map((l) => {
      if (l.id === i) {
        const c = typeof s == "function" ? s(l) : s;
        return a?.replace && lc(c) ? c : { ...l, ...c };
      }
      return l;
    });
  }
  function r(i, s, a = { replace: !1 }) {
    u(e).edges = st(() => u(e).edges).map((l) => {
      if (l.id === i) {
        const c = typeof s == "function" ? s(l) : s;
        return a.replace && cy(c) ? c : { ...l, ...c };
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
    getNodes: (i) => i === void 0 ? u(e).nodes : hc(u(e).nodeLookup, i),
    getEdge: (i) => u(e).edgeLookup.get(i),
    getEdges: (i) => i === void 0 ? u(e).edges : hc(u(e).edgeLookup, i),
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
    getViewport: () => Jc(u(e).viewport),
    setCenter: async (i, s, a) => u(e).setCenter(i, s, a),
    fitView: (i) => u(e).fitView(i),
    fitBounds: async (i, s) => {
      if (!u(e).panZoom)
        return Promise.resolve(!1);
      const a = Ga(i, u(e).width, u(e).height, u(e).minZoom, u(e).maxZoom, s?.padding ?? 0.1);
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
      const l = Gl(i), c = l ? i : t(i);
      return c ? (a || u(e).nodes).filter((d) => {
        const f = u(e).nodeLookup.get(d.id);
        if (!f || !l && d.id === i.id)
          return !1;
        const h = ro(f), g = Do(h, c);
        return s && g > 0 || g >= h.width * h.height || g >= c.width * c.height;
      }) : [];
    },
    isNodeIntersecting: (i, s, a = !0) => {
      const c = Gl(i) ? i : t(i);
      if (!c)
        return !1;
      const d = Do(c, s);
      return a && d > 0 || d >= s.width * s.height || d >= c.width * c.height;
    },
    deleteElements: async ({ nodes: i = [], edges: s = [] }) => {
      const { nodes: a, edges: l } = await d0({
        nodesToRemove: i,
        edgesToRemove: s,
        nodes: u(e).nodes,
        edges: u(e).edges,
        onBeforeDelete: u(e).onbeforedelete
      });
      return a && (u(e).nodes = st(() => u(e).nodes).filter((c) => !a.some(({ id: d }) => d === c.id))), l && (u(e).edges = st(() => u(e).edges).filter((c) => !l.some(({ id: d }) => d === c.id))), (a.length > 0 || l.length > 0) && u(e).ondelete?.({ nodes: a, edges: l }), { deletedNodes: a, deletedEdges: l };
    },
    screenToFlowPosition: (i, s = { snapToGrid: !0 }) => {
      if (!u(e).domNode)
        return i;
      const a = s.snapToGrid ? u(e).snapGrid : !1, { x: l, y: c, zoom: d } = u(e).viewport, { x: f, y: h } = u(e).domNode.getBoundingClientRect(), g = { x: i.x - f, y: i.y - h };
      return Jo(g, [l, c, d], a !== null, a || [1, 1]);
    },
    /**
     *
     * @param position
     * @returns
     */
    flowToScreenPosition: (i) => {
      if (!u(e).domNode)
        return i;
      const { x: s, y: a, zoom: l } = u(e).viewport, { x: c, y: d } = u(e).domNode.getBoundingClientRect(), f = Ki(i, [s, a, l]);
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
    getNodesBounds: (i) => a0(i, {
      nodeLookup: u(e).nodeLookup,
      nodeOrigin: u(e).nodeOrigin
    }),
    getHandleConnections: ({ type: i, id: s, nodeId: a }) => Array.from(u(e).connectionLookup.get(`${a}-${i}-${s ?? null}`)?.values() ?? [])
  };
}
function hc(e, t) {
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
function gf(e, t) {
  ce(t, !0);
  let n = p(t, "store", 15), r = p(t, "selectionKey", 7, "Shift"), o = p(t, "multiSelectionKey", 23, () => _r() ? "Meta" : "Control"), i = p(t, "deleteKey", 7, "Backspace"), s = p(t, "panActivationKey", 7, " "), a = p(t, "zoomActivationKey", 23, () => _r() ? "Meta" : "Control"), { deleteElements: l } = ut();
  function c(b) {
    return b !== null && typeof b == "object";
  }
  function d(b) {
    return c(b) ? b.modifier || [] : [];
  }
  function f(b) {
    return b == null ? "" : c(b) ? b.key : b;
  }
  function h(b, m) {
    return (Array.isArray(b) ? b : [b]).map((E) => {
      const _ = f(E);
      return {
        key: _,
        modifier: d(E),
        enabled: _ !== null,
        callback: m
      };
    });
  }
  function g() {
    n(n().selectionRect = null, !0), n(n().selectionKeyPressed = !1, !0), n(n().multiselectionKeyPressed = !1, !0), n(n().deleteKeyPressed = !1, !0), n(n().panActivationKeyPressed = !1, !0), n(n().zoomActivationKeyPressed = !1, !0);
  }
  function y() {
    const b = n().nodes.filter((k) => k.selected), m = n().edges.filter((k) => k.selected);
    l({ nodes: b, edges: m });
  }
  var w = {
    get store() {
      return n();
    },
    set store(b) {
      n(b), v();
    },
    get selectionKey() {
      return r();
    },
    set selectionKey(b = "Shift") {
      r(b), v();
    },
    get multiSelectionKey() {
      return o();
    },
    set multiSelectionKey(b = _r() ? "Meta" : "Control") {
      o(b), v();
    },
    get deleteKey() {
      return i();
    },
    set deleteKey(b = "Backspace") {
      i(b), v();
    },
    get panActivationKey() {
      return s();
    },
    set panActivationKey(b = " ") {
      s(b), v();
    },
    get zoomActivationKey() {
      return a();
    },
    set zoomActivationKey(b = _r() ? "Meta" : "Control") {
      a(b), v();
    }
  };
  return Di("blur", Vt, g), Di("contextmenu", Vt, g), wt(Vt, (b, m) => pn?.(b, m), () => ({
    trigger: h(r(), () => n(n().selectionKeyPressed = !0, !0)),
    type: "keydown"
  })), wt(Vt, (b, m) => pn?.(b, m), () => ({
    trigger: h(r(), () => n(n().selectionKeyPressed = !1, !0)),
    type: "keyup"
  })), wt(Vt, (b, m) => pn?.(b, m), () => ({
    trigger: h(o(), () => {
      n(n().multiselectionKeyPressed = !0, !0);
    }),
    type: "keydown"
  })), wt(Vt, (b, m) => pn?.(b, m), () => ({
    trigger: h(o(), () => n(n().multiselectionKeyPressed = !1, !0)),
    type: "keyup"
  })), wt(Vt, (b, m) => pn?.(b, m), () => ({
    trigger: h(i(), (b) => {
      !(b.originalEvent.ctrlKey || b.originalEvent.metaKey || b.originalEvent.shiftKey) && !Ed(b.originalEvent) && (n(n().deleteKeyPressed = !0, !0), y());
    }),
    type: "keydown"
  })), wt(Vt, (b, m) => pn?.(b, m), () => ({
    trigger: h(i(), () => n(n().deleteKeyPressed = !1, !0)),
    type: "keyup"
  })), wt(Vt, (b, m) => pn?.(b, m), () => ({
    trigger: h(s(), () => n(n().panActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), wt(Vt, (b, m) => pn?.(b, m), () => ({
    trigger: h(s(), () => n(n().panActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), wt(Vt, (b, m) => pn?.(b, m), () => ({
    trigger: h(a(), () => n(n().zoomActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), wt(Vt, (b, m) => pn?.(b, m), () => ({
    trigger: h(a(), () => n(n().zoomActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), ue(w);
}
le(
  gf,
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
var By = /* @__PURE__ */ pe('<path fill="none" class="svelte-flow__connection-path"></path>'), Fy = /* @__PURE__ */ pe('<svg class="svelte-flow__connectionline"><g><!></g></svg>');
function vf(e, t) {
  ce(t, !0);
  let n = p(t, "store", 15), r = p(t, "type", 7), o = p(t, "containerStyle", 7), i = p(t, "style", 7), s = p(t, "LineComponent", 7), a = /* @__PURE__ */ P(() => {
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
      case Mn.Bezier: {
        const [g] = Pd(h);
        return g;
      }
      case Mn.Straight: {
        const [g] = $d(h);
        return g;
      }
      case Mn.Step:
      case Mn.SmoothStep: {
        const [g] = Ua({
          ...h,
          borderRadius: r() === Mn.Step ? 0 : void 0
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
      n(h), v();
    },
    get type() {
      return r();
    },
    set type(h) {
      r(h), v();
    },
    get containerStyle() {
      return o();
    },
    set containerStyle(h) {
      o(h), v();
    },
    get style() {
      return i();
    },
    set style(h) {
      i(h), v();
    },
    get LineComponent() {
      return s();
    },
    set LineComponent(h) {
      s(h), v();
    }
  }, c = Ee(), d = ie(c);
  {
    var f = (h) => {
      var g = Fy(), y = F(g), w = F(y);
      {
        var b = (k) => {
          var E = Ee(), _ = ie(E);
          us(_, s, (S, T) => {
            T(S, {});
          }), O(k, E);
        }, m = (k) => {
          var E = By();
          Se(() => {
            Ce(E, "d", u(a)), vt(E, i());
          }), O(k, E);
        };
        ae(w, (k) => {
          s() ? k(b) : k(m, !1);
        });
      }
      B(y), B(g), Se(
        (k) => {
          Ce(g, "width", n().width), Ce(g, "height", n().height), vt(g, o()), Bt(y, 0, k);
        },
        [
          () => Wn([
            "svelte-flow__connection",
            i0(n().connection.isValid)
          ])
        ]
      ), O(h, g);
    };
    ae(d, (h) => {
      n().connection.inProgress && h(f);
    });
  }
  return O(e, c), ue(l);
}
le(
  vf,
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
var Ky = /* @__PURE__ */ te("<div><!></div>");
function ei(e, t) {
  ce(t, !0);
  let n = p(t, "position", 7, "top-right"), r = p(t, "style", 7), o = p(t, "class", 7), i = p(t, "children", 7), s = /* @__PURE__ */ Ze(t, [
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
  }, c = Ky();
  rt(c, (f) => ({ class: f, style: r(), ...s }), [
    () => ["svelte-flow__panel", o(), ...u(a)]
  ]);
  var d = F(c);
  return Ue(d, () => i() ?? ht), B(c), O(e, c), ue(l);
}
le(ei, { position: {}, style: {}, class: {}, children: {} }, [], [], !0);
var Zy = /* @__PURE__ */ te('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function pf(e, t) {
  ce(t, !0);
  let n = p(t, "proOptions", 7), r = p(t, "position", 7, "bottom-right");
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
  }, i = Ee(), s = ie(i);
  {
    var a = (l) => {
      ei(l, {
        get position() {
          return r();
        },
        class: "svelte-flow__attribution",
        "data-message": "Feel free to remove the attribution or check out how you could support us: https://svelteflow.dev/support-us",
        children: (c, d) => {
          var f = Zy();
          O(c, f);
        },
        $$slots: { default: !0 }
      });
    };
    ae(s, (l) => {
      n()?.hideAttribution || l(a);
    });
  }
  return O(e, i), ue(o);
}
le(pf, { proOptions: {}, position: {} }, [], [], !0);
var Wy = /* @__PURE__ */ te("<div><!></div>");
const Yy = {
  hash: "svelte-152mfj7",
  code: ".svelte-flow.svelte-152mfj7 {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;background-color:var(--background-color, var(--background-color-default));}:root {--background-color-default: #fff;--background-pattern-color-default: #ddd;--minimap-mask-color-default: rgb(240, 240, 240, 0.6);--minimap-mask-stroke-color-default: none;--minimap-mask-stroke-width-default: 1;--controls-button-background-color-default: #fefefe;--controls-button-background-color-hover-default: #f4f4f4;--controls-button-color-default: inherit;--controls-button-color-hover-default: inherit;--controls-button-border-color-default: #eee;}"
};
function mf(e, t) {
  ce(t, !0), Fe(e, Yy);
  let n = p(t, "width", 7), r = p(t, "height", 7), o = p(t, "colorMode", 7), i = p(t, "domNode", 15), s = p(t, "clientWidth", 15), a = p(t, "clientHeight", 15), l = p(t, "children", 7), c = p(t, "rest", 7), d = /* @__PURE__ */ P(() => c().class), f = /* @__PURE__ */ P(() => Yg(c(), [
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
  function h(b) {
    b.currentTarget.scrollTo({ top: 0, left: 0, behavior: "auto" }), c().onscroll && c().onscroll(b);
  }
  var g = {
    get width() {
      return n();
    },
    set width(b) {
      n(b), v();
    },
    get height() {
      return r();
    },
    set height(b) {
      r(b), v();
    },
    get colorMode() {
      return o();
    },
    set colorMode(b) {
      o(b), v();
    },
    get domNode() {
      return i();
    },
    set domNode(b) {
      i(b), v();
    },
    get clientWidth() {
      return s();
    },
    set clientWidth(b) {
      s(b), v();
    },
    get clientHeight() {
      return a();
    },
    set clientHeight(b) {
      a(b), v();
    },
    get children() {
      return l();
    },
    set children(b) {
      l(b), v();
    },
    get rest() {
      return c();
    },
    set rest(b) {
      c(b), v();
    }
  }, y = Wy();
  rt(
    y,
    (b) => ({
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
      [yn]: b
    }),
    [
      () => ({ width: Cn(n()), height: Cn(r()) })
    ],
    void 0,
    void 0,
    "svelte-152mfj7"
  );
  var w = F(y);
  return Ue(w, () => l() ?? ht), B(y), St(y, (b) => i(b), () => i()), El(y, "clientHeight", a), El(y, "clientWidth", s), O(e, y), ue(g);
}
le(
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
var jy = /* @__PURE__ */ te('<div class="svelte-flow__viewport-back svelte-flow__container"></div> <!> <div class="svelte-flow__edge-labels svelte-flow__container"></div> <!> <!> <!> <div class="svelte-flow__viewport-front svelte-flow__container"></div>', 1), Xy = /* @__PURE__ */ te("<!> <!>", 1), qy = /* @__PURE__ */ te("<!> <!> <!> <!> <!>", 1);
function yf(e, t) {
  ce(t, !0);
  let n = p(t, "width", 7), r = p(t, "height", 7), o = p(t, "proOptions", 7), i = p(t, "selectionKey", 7), s = p(t, "deleteKey", 7), a = p(t, "panActivationKey", 7), l = p(t, "multiSelectionKey", 7), c = p(t, "zoomActivationKey", 7), d = p(t, "paneClickDistance", 7, 1), f = p(t, "nodeClickDistance", 7, 1), h = p(t, "onmovestart", 7), g = p(t, "onmoveend", 7), y = p(t, "onmove", 7), w = p(t, "oninit", 7), b = p(t, "onnodeclick", 7), m = p(t, "onnodecontextmenu", 7), k = p(t, "onnodedrag", 7), E = p(t, "onnodedragstart", 7), _ = p(t, "onnodedragstop", 7), S = p(t, "onnodepointerenter", 7), T = p(t, "onnodepointermove", 7), z = p(t, "onnodepointerleave", 7), V = p(t, "onselectionclick", 7), L = p(t, "onselectioncontextmenu", 7), Y = p(t, "onselectionstart", 7), H = p(t, "onselectionend", 7), N = p(t, "onedgeclick", 7), M = p(t, "onedgecontextmenu", 7), x = p(t, "onedgepointerenter", 7), C = p(t, "onedgepointerleave", 7), A = p(t, "onpaneclick", 7), D = p(t, "onpanecontextmenu", 7), K = p(t, "panOnScrollMode", 23, () => Nr.Free), X = p(t, "preventScrolling", 7, !0), $ = p(t, "zoomOnScroll", 7, !0), W = p(t, "zoomOnDoubleClick", 7, !0), U = p(t, "zoomOnPinch", 7, !0), Z = p(t, "panOnScroll", 7, !1), G = p(t, "panOnScrollSpeed", 7, 0.5), R = p(t, "panOnDrag", 7, !0), j = p(t, "selectionOnDrag", 7, !1), Q = p(t, "connectionLineComponent", 7), ne = p(t, "connectionLineStyle", 7), J = p(t, "connectionLineContainerStyle", 7), _e = p(t, "connectionLineType", 23, () => Mn.Bezier), oe = p(t, "attributionPosition", 7), se = p(t, "children", 7), re = p(t, "nodes", 31, () => xt([])), he = p(t, "edges", 31, () => xt([])), me = p(t, "viewport", 31, () => {
  }), ke = /* @__PURE__ */ Ze(t, [
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
  ]), fe = Jd({
    props: ke,
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
  const be = ir(Wi);
  be && be.setStore && be.setStore(fe), qr(Wi, {
    provider: !1,
    getStore() {
      return fe;
    }
  }), qe(() => {
    const q = { nodes: fe.selectedNodes, edges: fe.selectedEdges };
    st(() => t.onselectionchange)?.(q);
    for (const at of fe.selectionChangeHandlers.values())
      at(q);
  }), Yo(() => {
    fe.reset();
  });
  var Te = {
    get width() {
      return n();
    },
    set width(q) {
      n(q), v();
    },
    get height() {
      return r();
    },
    set height(q) {
      r(q), v();
    },
    get proOptions() {
      return o();
    },
    set proOptions(q) {
      o(q), v();
    },
    get selectionKey() {
      return i();
    },
    set selectionKey(q) {
      i(q), v();
    },
    get deleteKey() {
      return s();
    },
    set deleteKey(q) {
      s(q), v();
    },
    get panActivationKey() {
      return a();
    },
    set panActivationKey(q) {
      a(q), v();
    },
    get multiSelectionKey() {
      return l();
    },
    set multiSelectionKey(q) {
      l(q), v();
    },
    get zoomActivationKey() {
      return c();
    },
    set zoomActivationKey(q) {
      c(q), v();
    },
    get paneClickDistance() {
      return d();
    },
    set paneClickDistance(q = 1) {
      d(q), v();
    },
    get nodeClickDistance() {
      return f();
    },
    set nodeClickDistance(q = 1) {
      f(q), v();
    },
    get onmovestart() {
      return h();
    },
    set onmovestart(q) {
      h(q), v();
    },
    get onmoveend() {
      return g();
    },
    set onmoveend(q) {
      g(q), v();
    },
    get onmove() {
      return y();
    },
    set onmove(q) {
      y(q), v();
    },
    get oninit() {
      return w();
    },
    set oninit(q) {
      w(q), v();
    },
    get onnodeclick() {
      return b();
    },
    set onnodeclick(q) {
      b(q), v();
    },
    get onnodecontextmenu() {
      return m();
    },
    set onnodecontextmenu(q) {
      m(q), v();
    },
    get onnodedrag() {
      return k();
    },
    set onnodedrag(q) {
      k(q), v();
    },
    get onnodedragstart() {
      return E();
    },
    set onnodedragstart(q) {
      E(q), v();
    },
    get onnodedragstop() {
      return _();
    },
    set onnodedragstop(q) {
      _(q), v();
    },
    get onnodepointerenter() {
      return S();
    },
    set onnodepointerenter(q) {
      S(q), v();
    },
    get onnodepointermove() {
      return T();
    },
    set onnodepointermove(q) {
      T(q), v();
    },
    get onnodepointerleave() {
      return z();
    },
    set onnodepointerleave(q) {
      z(q), v();
    },
    get onselectionclick() {
      return V();
    },
    set onselectionclick(q) {
      V(q), v();
    },
    get onselectioncontextmenu() {
      return L();
    },
    set onselectioncontextmenu(q) {
      L(q), v();
    },
    get onselectionstart() {
      return Y();
    },
    set onselectionstart(q) {
      Y(q), v();
    },
    get onselectionend() {
      return H();
    },
    set onselectionend(q) {
      H(q), v();
    },
    get onedgeclick() {
      return N();
    },
    set onedgeclick(q) {
      N(q), v();
    },
    get onedgecontextmenu() {
      return M();
    },
    set onedgecontextmenu(q) {
      M(q), v();
    },
    get onedgepointerenter() {
      return x();
    },
    set onedgepointerenter(q) {
      x(q), v();
    },
    get onedgepointerleave() {
      return C();
    },
    set onedgepointerleave(q) {
      C(q), v();
    },
    get onpaneclick() {
      return A();
    },
    set onpaneclick(q) {
      A(q), v();
    },
    get onpanecontextmenu() {
      return D();
    },
    set onpanecontextmenu(q) {
      D(q), v();
    },
    get panOnScrollMode() {
      return K();
    },
    set panOnScrollMode(q = Nr.Free) {
      K(q), v();
    },
    get preventScrolling() {
      return X();
    },
    set preventScrolling(q = !0) {
      X(q), v();
    },
    get zoomOnScroll() {
      return $();
    },
    set zoomOnScroll(q = !0) {
      $(q), v();
    },
    get zoomOnDoubleClick() {
      return W();
    },
    set zoomOnDoubleClick(q = !0) {
      W(q), v();
    },
    get zoomOnPinch() {
      return U();
    },
    set zoomOnPinch(q = !0) {
      U(q), v();
    },
    get panOnScroll() {
      return Z();
    },
    set panOnScroll(q = !1) {
      Z(q), v();
    },
    get panOnScrollSpeed() {
      return G();
    },
    set panOnScrollSpeed(q = 0.5) {
      G(q), v();
    },
    get panOnDrag() {
      return R();
    },
    set panOnDrag(q = !0) {
      R(q), v();
    },
    get selectionOnDrag() {
      return j();
    },
    set selectionOnDrag(q = !1) {
      j(q), v();
    },
    get connectionLineComponent() {
      return Q();
    },
    set connectionLineComponent(q) {
      Q(q), v();
    },
    get connectionLineStyle() {
      return ne();
    },
    set connectionLineStyle(q) {
      ne(q), v();
    },
    get connectionLineContainerStyle() {
      return J();
    },
    set connectionLineContainerStyle(q) {
      J(q), v();
    },
    get connectionLineType() {
      return _e();
    },
    set connectionLineType(q = Mn.Bezier) {
      _e(q), v();
    },
    get attributionPosition() {
      return oe();
    },
    set attributionPosition(q) {
      oe(q), v();
    },
    get children() {
      return se();
    },
    set children(q) {
      se(q), v();
    },
    get nodes() {
      return re();
    },
    set nodes(q = []) {
      re(q), v();
    },
    get edges() {
      return he();
    },
    set edges(q = []) {
      he(q), v();
    },
    get viewport() {
      return me();
    },
    set viewport(q = void 0) {
      me(q), v();
    }
  };
  return mf(e, {
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
      return ke;
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
    children: (q, at) => {
      var Oe = qy(), Re = ie(Oe);
      gf(Re, {
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
        set store(pt) {
          fe = pt;
        }
      });
      var Ie = I(Re, 2);
      Qd(Ie, {
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
          return W();
        },
        get zoomOnPinch() {
          return U();
        },
        get panOnScroll() {
          return Z();
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
          return y();
        },
        get onmoveend() {
          return g();
        },
        get oninit() {
          return w();
        },
        get store() {
          return fe;
        },
        set store(pt) {
          fe = pt;
        },
        children: (pt, tn) => {
          ef(pt, {
            get onpaneclick() {
              return A();
            },
            get onpanecontextmenu() {
              return D();
            },
            get onselectionstart() {
              return Y();
            },
            get onselectionend() {
              return H();
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
            children: (de, Ae) => {
              var Je = Xy(), Be = ie(Je);
              tf(Be, {
                get store() {
                  return fe;
                },
                set store(Nt) {
                  fe = Nt;
                },
                children: (Nt, Dt) => {
                  var gn = jy(), mt = I(ie(gn), 2);
                  ff(mt, {
                    get onedgeclick() {
                      return N();
                    },
                    get onedgecontextmenu() {
                      return M();
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
                    set store(yr) {
                      fe = yr;
                    }
                  });
                  var yt = I(mt, 4);
                  vf(yt, {
                    get type() {
                      return _e();
                    },
                    get LineComponent() {
                      return Q();
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
                    set store(yr) {
                      fe = yr;
                    }
                  });
                  var vn = I(yt, 2);
                  lf(vn, {
                    get nodeClickDistance() {
                      return f();
                    },
                    get onnodeclick() {
                      return b();
                    },
                    get onnodecontextmenu() {
                      return m();
                    },
                    get onnodepointerenter() {
                      return S();
                    },
                    get onnodepointermove() {
                      return T();
                    },
                    get onnodepointerleave() {
                      return z();
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
                    set store(yr) {
                      fe = yr;
                    }
                  });
                  var Kh = I(vn, 2);
                  hf(Kh, {
                    get onselectionclick() {
                      return V();
                    },
                    get onselectioncontextmenu() {
                      return L();
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
                    set store(yr) {
                      fe = yr;
                    }
                  }), ye(2), O(Nt, gn);
                },
                $$slots: { default: !0 }
              });
              var lt = I(Be, 2);
              {
                let Nt = /* @__PURE__ */ P(() => !!(fe.selectionRect && fe.selectionRectMode === "user")), Dt = /* @__PURE__ */ P(() => fe.selectionRect?.width), gn = /* @__PURE__ */ P(() => fe.selectionRect?.height), mt = /* @__PURE__ */ P(() => fe.selectionRect?.x), yt = /* @__PURE__ */ P(() => fe.selectionRect?.y);
                rl(lt, {
                  get isVisible() {
                    return u(Nt);
                  },
                  get width() {
                    return u(Dt);
                  },
                  get height() {
                    return u(gn);
                  },
                  get x() {
                    return u(mt);
                  },
                  get y() {
                    return u(yt);
                  }
                });
              }
              O(de, Je);
            },
            $$slots: { default: !0 }
          });
        },
        $$slots: { default: !0 }
      });
      var Et = I(Ie, 2);
      pf(Et, {
        get proOptions() {
          return o();
        },
        get position() {
          return oe();
        }
      });
      var ot = I(Et, 2);
      rf(ot, {
        get store() {
          return fe;
        }
      });
      var At = I(ot, 2);
      Ue(At, () => se() ?? ht), O(q, Oe);
    },
    $$slots: { default: !0 }
  }), ue(Te);
}
le(
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
function wf(e, t) {
  ce(t, !0);
  let n = p(t, "children", 7), r = /* @__PURE__ */ Pe(Jd({ props: {}, nodes: [], edges: [] }));
  qr(Wi, {
    provider: !0,
    getStore() {
      return u(r);
    },
    setStore: (a) => {
      ee(r, a);
    }
  }), Yo(() => {
    u(r).reset();
  });
  var o = {
    get children() {
      return n();
    },
    set children(a) {
      n(a), v();
    }
  }, i = Ee(), s = ie(i);
  return Ue(s, () => n() ?? ht), O(e, i), ue(o);
}
le(wf, { children: {} }, [], [], !0);
var Gy = /* @__PURE__ */ te("<button><!></button>");
function wo(e, t) {
  ce(t, !0);
  let n = p(t, "class", 7), r = p(t, "bgColor", 7), o = p(t, "bgColorHover", 7), i = p(t, "color", 7), s = p(t, "colorHover", 7), a = p(t, "borderColor", 7), l = p(t, "onclick", 7), c = p(t, "children", 7), d = /* @__PURE__ */ Ze(t, [
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
    set class(y) {
      n(y), v();
    },
    get bgColor() {
      return r();
    },
    set bgColor(y) {
      r(y), v();
    },
    get bgColorHover() {
      return o();
    },
    set bgColorHover(y) {
      o(y), v();
    },
    get color() {
      return i();
    },
    set color(y) {
      i(y), v();
    },
    get colorHover() {
      return s();
    },
    set colorHover(y) {
      s(y), v();
    },
    get borderColor() {
      return a();
    },
    set borderColor(y) {
      a(y), v();
    },
    get onclick() {
      return l();
    },
    set onclick(y) {
      l(y), v();
    },
    get children() {
      return c();
    },
    set children(y) {
      c(y), v();
    }
  }, h = Gy();
  rt(h, () => ({
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
  var g = F(h);
  return Ue(g, () => c() ?? ht), B(h), O(e, h), ue(f);
}
le(
  wo,
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
var Uy = /* @__PURE__ */ pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function bf(e) {
  var t = Uy();
  O(e, t);
}
le(bf, {}, [], [], !0);
var Jy = /* @__PURE__ */ pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function xf(e) {
  var t = Jy();
  O(e, t);
}
le(xf, {}, [], [], !0);
var Qy = /* @__PURE__ */ pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function _f(e) {
  var t = Qy();
  O(e, t);
}
le(_f, {}, [], [], !0);
var e2 = /* @__PURE__ */ pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function Cf(e) {
  var t = e2();
  O(e, t);
}
le(Cf, {}, [], [], !0);
var t2 = /* @__PURE__ */ pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function kf(e) {
  var t = t2();
  O(e, t);
}
le(kf, {}, [], [], !0);
var n2 = /* @__PURE__ */ te("<!> <!>", 1), r2 = /* @__PURE__ */ te("<!> <!> <!> <!> <!> <!>", 1);
function Sf(e, t) {
  ce(t, !0);
  let n = p(t, "position", 7, "bottom-left"), r = p(t, "orientation", 7, "vertical"), o = p(t, "showZoom", 7, !0), i = p(t, "showFitView", 7, !0), s = p(t, "showLock", 7, !0), a = p(t, "style", 7), l = p(t, "class", 7), c = p(t, "buttonBgColor", 7), d = p(t, "buttonBgColorHover", 7), f = p(t, "buttonColor", 7), h = p(t, "buttonColorHover", 7), g = p(t, "buttonBorderColor", 7), y = p(t, "fitViewOptions", 7), w = p(t, "children", 7), b = p(t, "before", 7), m = p(t, "after", 7), k = /* @__PURE__ */ Ze(t, [
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
  ]), E = /* @__PURE__ */ P(fn);
  const _ = {
    bgColor: c(),
    bgColorHover: d(),
    color: f(),
    colorHover: h(),
    borderColor: g()
  };
  let S = /* @__PURE__ */ P(() => u(E).nodesDraggable || u(E).nodesConnectable || u(E).elementsSelectable), T = /* @__PURE__ */ P(() => u(E).viewport.zoom <= u(E).minZoom), z = /* @__PURE__ */ P(() => u(E).viewport.zoom >= u(E).maxZoom), V = /* @__PURE__ */ P(() => u(E).ariaLabelConfig), L = /* @__PURE__ */ P(() => r() === "horizontal" ? "horizontal" : "vertical");
  const Y = () => {
    u(E).zoomIn();
  }, H = () => {
    u(E).zoomOut();
  }, N = () => {
    u(E).fitView(y());
  }, M = () => {
    let C = !u(S);
    u(E).nodesDraggable = C, u(E).nodesConnectable = C, u(E).elementsSelectable = C;
  };
  var x = {
    get position() {
      return n();
    },
    set position(C = "bottom-left") {
      n(C), v();
    },
    get orientation() {
      return r();
    },
    set orientation(C = "vertical") {
      r(C), v();
    },
    get showZoom() {
      return o();
    },
    set showZoom(C = !0) {
      o(C), v();
    },
    get showFitView() {
      return i();
    },
    set showFitView(C = !0) {
      i(C), v();
    },
    get showLock() {
      return s();
    },
    set showLock(C = !0) {
      s(C), v();
    },
    get style() {
      return a();
    },
    set style(C) {
      a(C), v();
    },
    get class() {
      return l();
    },
    set class(C) {
      l(C), v();
    },
    get buttonBgColor() {
      return c();
    },
    set buttonBgColor(C) {
      c(C), v();
    },
    get buttonBgColorHover() {
      return d();
    },
    set buttonBgColorHover(C) {
      d(C), v();
    },
    get buttonColor() {
      return f();
    },
    set buttonColor(C) {
      f(C), v();
    },
    get buttonColorHover() {
      return h();
    },
    set buttonColorHover(C) {
      h(C), v();
    },
    get buttonBorderColor() {
      return g();
    },
    set buttonBorderColor(C) {
      g(C), v();
    },
    get fitViewOptions() {
      return y();
    },
    set fitViewOptions(C) {
      y(C), v();
    },
    get children() {
      return w();
    },
    set children(C) {
      w(C), v();
    },
    get before() {
      return b();
    },
    set before(C) {
      b(C), v();
    },
    get after() {
      return m();
    },
    set after(C) {
      m(C), v();
    }
  };
  {
    let C = /* @__PURE__ */ P(() => [
      "svelte-flow__controls",
      u(L),
      l()
    ]);
    ei(e, Ye(
      {
        get class() {
          return u(C);
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
        children: (A, D) => {
          var K = r2(), X = ie(K);
          {
            var $ = (oe) => {
              var se = Ee(), re = ie(se);
              Ue(re, b), O(oe, se);
            };
            ae(X, (oe) => {
              b() && oe($);
            });
          }
          var W = I(X, 2);
          {
            var U = (oe) => {
              var se = n2(), re = ie(se);
              wo(re, Ye(
                {
                  onclick: Y,
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
                  children: (me, ke) => {
                    bf(me);
                  },
                  $$slots: { default: !0 }
                }
              ));
              var he = I(re, 2);
              wo(he, Ye(
                {
                  onclick: H,
                  class: "svelte-flow__controls-zoomout",
                  get title() {
                    return u(V)["controls.zoomOut.ariaLabel"];
                  },
                  get "aria-label"() {
                    return u(V)["controls.zoomOut.ariaLabel"];
                  },
                  get disabled() {
                    return u(T);
                  }
                },
                () => _,
                {
                  children: (me, ke) => {
                    xf(me);
                  },
                  $$slots: { default: !0 }
                }
              )), O(oe, se);
            };
            ae(W, (oe) => {
              o() && oe(U);
            });
          }
          var Z = I(W, 2);
          {
            var G = (oe) => {
              wo(oe, Ye(
                {
                  class: "svelte-flow__controls-fitview",
                  onclick: N,
                  get title() {
                    return u(V)["controls.fitView.ariaLabel"];
                  },
                  get "aria-label"() {
                    return u(V)["controls.fitView.ariaLabel"];
                  }
                },
                () => _,
                {
                  children: (se, re) => {
                    _f(se);
                  },
                  $$slots: { default: !0 }
                }
              ));
            };
            ae(Z, (oe) => {
              i() && oe(G);
            });
          }
          var R = I(Z, 2);
          {
            var j = (oe) => {
              wo(oe, Ye(
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
                  children: (se, re) => {
                    var he = Ee(), me = ie(he);
                    {
                      var ke = (be) => {
                        kf(be);
                      }, fe = (be) => {
                        Cf(be);
                      };
                      ae(me, (be) => {
                        u(S) ? be(ke) : be(fe, !1);
                      });
                    }
                    O(se, he);
                  },
                  $$slots: { default: !0 }
                }
              ));
            };
            ae(R, (oe) => {
              s() && oe(j);
            });
          }
          var Q = I(R, 2);
          {
            var ne = (oe) => {
              var se = Ee(), re = ie(se);
              Ue(re, w), O(oe, se);
            };
            ae(Q, (oe) => {
              w() && oe(ne);
            });
          }
          var J = I(Q, 2);
          {
            var _e = (oe) => {
              var se = Ee(), re = ie(se);
              Ue(re, m), O(oe, se);
            };
            ae(J, (oe) => {
              m() && oe(_e);
            });
          }
          O(A, K);
        },
        $$slots: { default: !0 }
      }
    ));
  }
  return ue(x);
}
le(
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
var On;
(function(e) {
  e.Lines = "lines", e.Dots = "dots", e.Cross = "cross";
})(On || (On = {}));
var o2 = /* @__PURE__ */ pe("<circle></circle>");
function Ef(e, t) {
  ce(t, !0);
  let n = p(t, "radius", 7), r = p(t, "class", 7);
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
  }, i = o2();
  return Se(() => {
    Ce(i, "cx", n()), Ce(i, "cy", n()), Ce(i, "r", n()), Bt(i, 0, Wn(["svelte-flow__background-pattern", "dots", r()]));
  }), O(e, i), ue(o);
}
le(Ef, { radius: {}, class: {} }, [], [], !0);
var i2 = /* @__PURE__ */ pe("<path></path>");
function Nf(e, t) {
  ce(t, !0);
  let n = p(t, "lineWidth", 7), r = p(t, "dimensions", 7), o = p(t, "variant", 7), i = p(t, "class", 7);
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
  }, a = i2();
  return Se(() => {
    Ce(a, "stroke-width", n()), Ce(a, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), Bt(a, 0, Wn(["svelte-flow__background-pattern", o(), i()]));
  }), O(e, a), ue(s);
}
le(Nf, { lineWidth: {}, dimensions: {}, variant: {}, class: {} }, [], [], !0);
const s2 = {
  [On.Dots]: 1,
  [On.Lines]: 1,
  [On.Cross]: 6
};
var a2 = /* @__PURE__ */ pe('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
function Pf(e, t) {
  ce(t, !0);
  let n = p(t, "id", 7), r = p(t, "variant", 23, () => On.Dots), o = p(t, "gap", 7, 20), i = p(t, "size", 7), s = p(t, "lineWidth", 7, 1), a = p(t, "bgColor", 7), l = p(t, "patternColor", 7), c = p(t, "patternClass", 7), d = p(t, "class", 7), f = /* @__PURE__ */ P(fn), h = /* @__PURE__ */ P(() => r() === On.Dots), g = /* @__PURE__ */ P(() => r() === On.Cross), y = /* @__PURE__ */ P(() => Array.isArray(o()) ? o() : [o(), o()]), w = /* @__PURE__ */ P(() => `background-pattern-${u(f).flowId}-${n() ?? ""}`), b = /* @__PURE__ */ P(() => [
    u(y)[0] * u(f).viewport.zoom || 1,
    u(y)[1] * u(f).viewport.zoom || 1
  ]), m = /* @__PURE__ */ P(() => (i() ?? s2[r()]) * u(f).viewport.zoom), k = /* @__PURE__ */ P(() => u(g) ? [u(m), u(m)] : u(b)), E = /* @__PURE__ */ P(() => u(h) ? [u(m) / 2, u(m) / 2] : [
    u(k)[0] / 2,
    u(k)[1] / 2
  ]);
  var _ = {
    get id() {
      return n();
    },
    set id(N) {
      n(N), v();
    },
    get variant() {
      return r();
    },
    set variant(N = On.Dots) {
      r(N), v();
    },
    get gap() {
      return o();
    },
    set gap(N = 20) {
      o(N), v();
    },
    get size() {
      return i();
    },
    set size(N) {
      i(N), v();
    },
    get lineWidth() {
      return s();
    },
    set lineWidth(N = 1) {
      s(N), v();
    },
    get bgColor() {
      return a();
    },
    set bgColor(N) {
      a(N), v();
    },
    get patternColor() {
      return l();
    },
    set patternColor(N) {
      l(N), v();
    },
    get patternClass() {
      return c();
    },
    set patternClass(N) {
      c(N), v();
    },
    get class() {
      return d();
    },
    set class(N) {
      d(N), v();
    }
  }, S = a2();
  let T;
  var z = F(S), V = F(z);
  {
    var L = (N) => {
      {
        let M = /* @__PURE__ */ P(() => u(m) / 2);
        Ef(N, {
          get radius() {
            return u(M);
          },
          get class() {
            return c();
          }
        });
      }
    }, Y = (N) => {
      Nf(N, {
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
    ae(V, (N) => {
      u(h) ? N(L) : N(Y, !1);
    });
  }
  B(z);
  var H = I(z);
  return B(S), Se(() => {
    Bt(S, 0, Wn([
      "svelte-flow__background",
      "svelte-flow__container",
      d()
    ])), T = vt(S, "", T, {
      "--xy-background-color-props": a(),
      "--xy-background-pattern-color-props": l()
    }), Ce(z, "id", u(w)), Ce(z, "x", u(f).viewport.x % u(b)[0]), Ce(z, "y", u(f).viewport.y % u(b)[1]), Ce(z, "width", u(b)[0]), Ce(z, "height", u(b)[1]), Ce(z, "patternTransform", `translate(-${u(E)[0]},-${u(E)[1]})`), Ce(H, "fill", `url(#${u(w)})`);
  }), O(e, S), ue(_);
}
le(
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
var l2 = /* @__PURE__ */ pe("<rect></rect>");
function Tf(e, t) {
  ce(t, !0);
  let n = p(t, "id", 7), r = p(t, "x", 7), o = p(t, "y", 7), i = p(t, "width", 7), s = p(t, "height", 7), a = p(t, "borderRadius", 7, 5), l = p(t, "color", 7), c = p(t, "shapeRendering", 7), d = p(t, "strokeColor", 7), f = p(t, "strokeWidth", 7, 2), h = p(t, "selected", 7), g = p(t, "class", 7), y = p(t, "nodeComponent", 7);
  var w = {
    get id() {
      return n();
    },
    set id(_) {
      n(_), v();
    },
    get x() {
      return r();
    },
    set x(_) {
      r(_), v();
    },
    get y() {
      return o();
    },
    set y(_) {
      o(_), v();
    },
    get width() {
      return i();
    },
    set width(_) {
      i(_), v();
    },
    get height() {
      return s();
    },
    set height(_) {
      s(_), v();
    },
    get borderRadius() {
      return a();
    },
    set borderRadius(_ = 5) {
      a(_), v();
    },
    get color() {
      return l();
    },
    set color(_) {
      l(_), v();
    },
    get shapeRendering() {
      return c();
    },
    set shapeRendering(_) {
      c(_), v();
    },
    get strokeColor() {
      return d();
    },
    set strokeColor(_) {
      d(_), v();
    },
    get strokeWidth() {
      return f();
    },
    set strokeWidth(_ = 2) {
      f(_), v();
    },
    get selected() {
      return h();
    },
    set selected(_) {
      h(_), v();
    },
    get class() {
      return g();
    },
    set class(_) {
      g(_), v();
    },
    get nodeComponent() {
      return y();
    },
    set nodeComponent(_) {
      y(_), v();
    }
  }, b = Ee(), m = ie(b);
  {
    var k = (_) => {
      const S = /* @__PURE__ */ P(y);
      var T = Ee(), z = ie(T);
      us(z, () => u(S), (V, L) => {
        L(V, {
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
      }), O(_, T);
    }, E = (_) => {
      var S = l2();
      let T, z;
      Se(() => {
        T = Bt(S, 0, Wn(["svelte-flow__minimap-node", g()]), null, T, { selected: h() }), Ce(S, "x", r()), Ce(S, "y", o()), Ce(S, "rx", a()), Ce(S, "ry", a()), Ce(S, "width", i()), Ce(S, "height", s()), Ce(S, "shape-rendering", c()), z = vt(S, "", z, {
          fill: l(),
          stroke: d(),
          "stroke-width": f()
        });
      }), O(_, S);
    };
    ae(m, (_) => {
      y() ? _(k) : _(E, !1);
    });
  }
  return O(e, b), ue(w);
}
le(
  Tf,
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
function c2(e, t) {
  const n = G0({
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
const Is = (e) => e instanceof Function ? e : () => e;
var u2 = /* @__PURE__ */ pe("<title> </title>"), d2 = /* @__PURE__ */ pe('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>'), f2 = /* @__PURE__ */ te('<svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>', 1);
function $f(e, t) {
  ce(t, !0);
  let n = p(t, "position", 7, "bottom-right"), r = p(t, "ariaLabel", 7), o = p(t, "nodeStrokeColor", 7, "transparent"), i = p(t, "nodeColor", 7), s = p(t, "nodeClass", 7, ""), a = p(t, "nodeBorderRadius", 7, 5), l = p(t, "nodeStrokeWidth", 7, 2), c = p(t, "nodeComponent", 7), d = p(t, "bgColor", 7), f = p(t, "maskColor", 7), h = p(t, "maskStrokeColor", 7), g = p(t, "maskStrokeWidth", 7), y = p(t, "width", 7, 200), w = p(t, "height", 7, 150), b = p(t, "pannable", 7, !0), m = p(t, "zoomable", 7, !0), k = p(t, "inversePan", 7), E = p(t, "zoomStep", 7), _ = p(t, "class", 7), S = /* @__PURE__ */ Ze(t, [
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
  ]), T = /* @__PURE__ */ P(fn), z = /* @__PURE__ */ P(() => u(T).ariaLabelConfig);
  const V = i() === void 0 ? void 0 : Is(i()), L = Is(o()), Y = Is(s()), H = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  );
  let N = /* @__PURE__ */ P(() => `svelte-flow__minimap-desc-${u(T).flowId}`), M = /* @__PURE__ */ P(() => ({
    x: -u(T).viewport.x / u(T).viewport.zoom,
    y: -u(T).viewport.y / u(T).viewport.zoom,
    width: u(T).width / u(T).viewport.zoom,
    height: u(T).height / u(T).viewport.zoom
  })), x = /* @__PURE__ */ P(() => _d(Go(u(T).nodeLookup, { filter: (J) => !J.hidden }), u(M))), C = /* @__PURE__ */ P(() => u(x).width / y()), A = /* @__PURE__ */ P(() => u(x).height / w()), D = /* @__PURE__ */ P(() => Math.max(u(C), u(A))), K = /* @__PURE__ */ P(() => u(D) * y()), X = /* @__PURE__ */ P(() => u(D) * w()), $ = /* @__PURE__ */ P(() => 5 * u(D)), W = /* @__PURE__ */ P(() => u(x).x - (u(K) - u(x).width) / 2 - u($)), U = /* @__PURE__ */ P(() => u(x).y - (u(X) - u(x).height) / 2 - u($)), Z = /* @__PURE__ */ P(() => u(K) + u($) * 2), G = /* @__PURE__ */ P(() => u(X) + u($) * 2);
  const R = () => u(D);
  var j = {
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
      return c();
    },
    set nodeComponent(J) {
      c(J), v();
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
      return h();
    },
    set maskStrokeColor(J) {
      h(J), v();
    },
    get maskStrokeWidth() {
      return g();
    },
    set maskStrokeWidth(J) {
      g(J), v();
    },
    get width() {
      return y();
    },
    set width(J = 200) {
      y(J), v();
    },
    get height() {
      return w();
    },
    set height(J = 150) {
      w(J), v();
    },
    get pannable() {
      return b();
    },
    set pannable(J = !0) {
      b(J), v();
    },
    get zoomable() {
      return m();
    },
    set zoomable(J = !0) {
      m(J), v();
    },
    get inversePan() {
      return k();
    },
    set inversePan(J) {
      k(J), v();
    },
    get zoomStep() {
      return E();
    },
    set zoomStep(J) {
      E(J), v();
    },
    get class() {
      return _();
    },
    set class(J) {
      _(J), v();
    }
  }, Q = f2(), ne = ie(Q);
  {
    let J = /* @__PURE__ */ P(() => ["svelte-flow__minimap", _()]);
    sv(ne, () => ({ "--xy-minimap-background-color-props": d() })), ei(ne.lastChild, Ye(
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
        children: (_e, oe) => {
          var se = Ee(), re = ie(se);
          {
            var he = (me) => {
              var ke = d2();
              let fe;
              var be = F(ke);
              {
                var Te = (Oe) => {
                  var Re = u2(), Ie = F(Re, !0);
                  B(Re), Se(() => {
                    Ce(Re, "id", u(N)), We(Ie, r() ?? u(z)["minimap.ariaLabel"]);
                  }), O(Oe, Re);
                };
                ae(be, (Oe) => {
                  (r() ?? u(z)["minimap.ariaLabel"]) && Oe(Te);
                });
              }
              var q = I(be);
              Ct(q, 17, () => u(T).nodes, (Oe) => Oe.id, (Oe, Re) => {
                const Ie = /* @__PURE__ */ P(() => u(T).nodeLookup.get(u(Re).id));
                var Et = Ee(), ot = ie(Et);
                {
                  var At = (pt) => {
                    const tn = /* @__PURE__ */ P(() => vr(u(Ie)));
                    {
                      let de = /* @__PURE__ */ P(() => V?.(u(Ie))), Ae = /* @__PURE__ */ P(() => L(u(Ie))), Je = /* @__PURE__ */ P(() => Y(u(Ie)));
                      Tf(pt, Ye(
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
                            return u(Ae);
                          },
                          get strokeWidth() {
                            return l();
                          },
                          get shapeRendering() {
                            return H;
                          },
                          get class() {
                            return u(Je);
                          }
                        }
                      ));
                    }
                  };
                  ae(ot, (pt) => {
                    u(Ie) && Cd(u(Ie)) && !u(Ie).hidden && pt(At);
                  });
                }
                O(Oe, Et);
              });
              var at = I(q);
              B(ke), wt(ke, (Oe, Re) => c2?.(Oe, Re), () => ({
                store: u(T),
                panZoom: u(T).panZoom,
                getViewScale: R,
                translateExtent: u(T).translateExtent,
                width: u(T).width,
                height: u(T).height,
                inversePan: k(),
                zoomStep: E(),
                pannable: b(),
                zoomable: m()
              })), Se(() => {
                Ce(ke, "width", y()), Ce(ke, "height", w()), Ce(ke, "viewBox", `${u(W) ?? ""} ${u(U) ?? ""} ${u(Z) ?? ""} ${u(G) ?? ""}`), Ce(ke, "aria-labelledby", u(N)), fe = vt(ke, "", fe, {
                  "--xy-minimap-mask-background-color-props": f(),
                  "--xy-minimap-mask-stroke-color-props": h(),
                  "--xy-minimap-mask-stroke-width-props": g() ? g() * u(D) : void 0
                }), Ce(at, "d", `M${u(W) - u($)},${u(U) - u($)}h${u(Z) + u($) * 2}v${u(G) + u($) * 2}h${-u(Z) - u($) * 2}z
      M${u(M).x ?? ""},${u(M).y ?? ""}h${u(M).width ?? ""}v${u(M).height ?? ""}h${-u(M).width}z`);
              }), O(me, ke);
            };
            ae(re, (me) => {
              u(T).panZoom && me(he);
            });
          }
          O(_e, se);
        },
        $$slots: { default: !0 }
      }
    )), B(ne);
  }
  return O(e, Q), ue(j);
}
le(
  $f,
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
var h2 = /* @__PURE__ */ te("<div><!></div>");
function Mf(e, t) {
  ce(t, !0);
  let n = p(t, "nodeId", 7), r = p(t, "position", 23, () => we.Top), o = p(t, "align", 7, "center"), i = p(t, "offset", 7, 10), s = p(t, "isVisible", 7), a = p(t, "children", 7), l = /* @__PURE__ */ Ze(t, [
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
  const c = fn(), { getNodesBounds: d } = ut(), f = ir("svelteflow__node_id");
  let h = /* @__PURE__ */ P(() => (c.nodes, (Array.isArray(n()) ? n() : [n() ?? f]).reduce(
    (T, z) => {
      const V = c.nodeLookup.get(z);
      return V && T.push(V), T;
    },
    []
  ))), g = /* @__PURE__ */ P(() => {
    const S = d(u(h));
    return S ? T0(S, c.viewport, r(), i(), o()) : "";
  }), y = /* @__PURE__ */ P(() => u(h).length === 0 ? 1 : Math.max(...u(h).map((S) => (S.internals.z || 5) + 1))), w = /* @__PURE__ */ P(() => c.nodes.filter((S) => S.selected).length), b = /* @__PURE__ */ P(() => typeof s() == "boolean" ? s() : u(h).length === 1 && u(h)[0].selected && u(w) === 1);
  var m = {
    get nodeId() {
      return n();
    },
    set nodeId(S) {
      n(S), v();
    },
    get position() {
      return r();
    },
    set position(S = we.Top) {
      r(S), v();
    },
    get align() {
      return o();
    },
    set align(S = "center") {
      o(S), v();
    },
    get offset() {
      return i();
    },
    set offset(S = 10) {
      i(S), v();
    },
    get isVisible() {
      return s();
    },
    set isVisible(S) {
      s(S), v();
    },
    get children() {
      return a();
    },
    set children(S) {
      a(S), v();
    }
  }, k = Ee(), E = ie(k);
  {
    var _ = (S) => {
      var T = h2();
      rt(
        T,
        (V, L) => ({
          class: "svelte-flow__node-toolbar",
          "data-id": V,
          ...l,
          [yn]: L
        }),
        [
          () => u(h).reduce((V, L) => `${V}${L.id} `, "").trim(),
          () => ({
            display: Zd().value ? "none" : void 0,
            position: "absolute",
            transform: u(g),
            "z-index": u(y)
          })
        ]
      );
      var z = F(T);
      Ue(z, () => a() ?? ht), B(T), wt(T, (V, L) => Kd?.(V, L), () => "root"), O(S, T);
    };
    ae(E, (S) => {
      c.domNode && u(b) && u(h) && S(_);
    });
  }
  return O(e, k), ue(m);
}
le(
  Mf,
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
function Yn(e) {
  const t = /* @__PURE__ */ P(fn), n = /* @__PURE__ */ P(() => u(t).nodes), r = /* @__PURE__ */ P(() => u(t).nodeLookup);
  let o = [], i = !0;
  const s = /* @__PURE__ */ P(() => {
    u(n);
    const a = [], l = Array.isArray(e), c = l ? e : [e];
    for (const d of c) {
      const f = u(r).get(d)?.internals.userNode;
      f && a.push({ id: f.id, type: f.type, data: f.data });
    }
    return (!B0(a, o) || i) && (o = a, i = !1), l ? o : o[0] ?? null;
  });
  return {
    get current() {
      return u(s);
    }
  };
}
const gc = "tinyflow-component", g2 = [
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
], v2 = [
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
], ol = [
  { label: "文字", value: "text" },
  { label: "图片", value: "image" },
  { label: "视频", value: "video" },
  { label: "音频", value: "audio" },
  { label: "文件", value: "file" },
  { label: "其他", value: "other" }
], p2 = [
  { label: "单行输入框", value: "input" },
  { label: "多行输入框", value: "textarea" },
  { label: "下拉菜单", value: "select" },
  { label: "单选", value: "radio" },
  { label: "多选", value: "checkbox" }
], m2 = [
  { label: "单选", value: "radio" },
  { label: "多选", value: "checkbox" }
];
class Z5 {
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
    const t = document.createElement(gc);
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
    const n = document.createElement(gc);
    n.style.display = "block", n.style.width = "100%", n.style.height = "100%", n.classList.add("tf-theme-light"), n.options = this.options, n.onInit = (r) => {
      this.svelteFlowInstance = r;
    }, this.destroy(), this.rootEl.appendChild(n);
  }
  destroy() {
    for (; this.rootEl.firstChild; )
      this.rootEl.removeChild(this.rootEl.firstChild);
  }
}
const y2 = () => {
  let e = /* @__PURE__ */ Pe([]), t = /* @__PURE__ */ Pe([]), n = /* @__PURE__ */ Pe({ x: 250, y: 100, zoom: 1 });
  return {
    // nodes: nodesInternal,
    // edges: edgesInternal,
    // viewport,
    init: (r, o) => {
      ee(e, r), ee(t, o);
    },
    getNodes: () => u(e),
    setNodes: (r) => {
      ee(e, r);
    },
    getEdges: () => u(t),
    setEdges: (r) => {
      ee(t, r);
    },
    getViewport: () => u(n),
    setViewport: (r) => {
      ee(n, r);
    },
    getNode: (r) => u(e).find((o) => o.id === r),
    addNode: (r) => {
      ee(e, [...u(e), r]);
    },
    removeNode: (r) => {
      ee(e, u(e).filter((o) => o.id !== r));
    },
    updateNode: (r, o) => {
      ee(e, u(e).map((i) => i.id === r ? { ...i, ...o } : i));
    },
    updateNodes: (r) => {
      ee(e, r(u(e)));
    },
    updateNodeData: (r, o) => {
      ee(e, u(e).map((i) => i.id === r ? { ...i, data: { ...i.data, ...o } } : i));
    },
    selectNodeOnly: (r) => {
      ee(e, u(e).map((o) => o.id === r ? { ...o, selected: !0 } : { ...o, selected: !1 }));
    },
    getEdge: (r) => u(t).find((o) => o.id === r),
    addEdge: (r) => {
      ee(t, [...u(t), r]);
    },
    removeEdge: (r) => {
      ee(t, u(t).filter((o) => o.id !== r));
    },
    updateEdge: (r, o) => {
      ee(t, u(t).map((i) => i.id === r ? { ...i, ...o } : i));
    },
    updateEdges: (r) => {
      ee(t, r(u(t)));
    },
    updateEdgeData: (r, o) => {
      ee(t, u(t).map((i) => i.id === r ? { ...i, data: { ...i.data, ...o } } : i));
    }
  };
}, Le = y2(), w2 = (e, t) => {
  const n = new Array(e.length + t.length);
  for (let r = 0; r < e.length; r++)
    n[r] = e[r];
  for (let r = 0; r < t.length; r++)
    n[e.length + r] = t[r];
  return n;
}, b2 = (e, t) => ({
  classGroupId: e,
  validator: t
}), Af = (e = /* @__PURE__ */ new Map(), t = null, n) => ({
  nextPart: e,
  validators: t,
  classGroupId: n
}), Yi = "-", vc = [], x2 = "arbitrary..", _2 = (e) => {
  const t = k2(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (s) => {
      if (s.startsWith("[") && s.endsWith("]"))
        return C2(s);
      const a = s.split(Yi), l = a[0] === "" && a.length > 1 ? 1 : 0;
      return Df(a, l, t);
    },
    getConflictingClassGroupIds: (s, a) => {
      if (a) {
        const l = r[s], c = n[s];
        return l ? c ? w2(c, l) : l : c || vc;
      }
      return n[s] || vc;
    }
  };
}, Df = (e, t, n) => {
  if (e.length - t === 0)
    return n.classGroupId;
  const o = e[t], i = n.nextPart.get(o);
  if (i) {
    const c = Df(e, t + 1, i);
    if (c) return c;
  }
  const s = n.validators;
  if (s === null)
    return;
  const a = t === 0 ? e.join(Yi) : e.slice(t).join(Yi), l = s.length;
  for (let c = 0; c < l; c++) {
    const d = s[c];
    if (d.validator(a))
      return d.classGroupId;
  }
}, C2 = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const t = e.slice(1, -1), n = t.indexOf(":"), r = t.slice(0, n);
  return r ? x2 + r : void 0;
})(), k2 = (e) => {
  const {
    theme: t,
    classGroups: n
  } = e;
  return S2(n, t);
}, S2 = (e, t) => {
  const n = Af();
  for (const r in e) {
    const o = e[r];
    il(o, n, r, t);
  }
  return n;
}, il = (e, t, n, r) => {
  const o = e.length;
  for (let i = 0; i < o; i++) {
    const s = e[i];
    E2(s, t, n, r);
  }
}, E2 = (e, t, n, r) => {
  if (typeof e == "string") {
    N2(e, t, n);
    return;
  }
  if (typeof e == "function") {
    P2(e, t, n, r);
    return;
  }
  T2(e, t, n, r);
}, N2 = (e, t, n) => {
  const r = e === "" ? t : Of(t, e);
  r.classGroupId = n;
}, P2 = (e, t, n, r) => {
  if ($2(e)) {
    il(e(r), t, n, r);
    return;
  }
  t.validators === null && (t.validators = []), t.validators.push(b2(n, e));
}, T2 = (e, t, n, r) => {
  const o = Object.entries(e), i = o.length;
  for (let s = 0; s < i; s++) {
    const [a, l] = o[s];
    il(l, Of(t, a), n, r);
  }
}, Of = (e, t) => {
  let n = e;
  const r = t.split(Yi), o = r.length;
  for (let i = 0; i < o; i++) {
    const s = r[i];
    let a = n.nextPart.get(s);
    a || (a = Af(), n.nextPart.set(s, a)), n = a;
  }
  return n;
}, $2 = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, M2 = (e) => {
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
}, ca = "!", pc = ":", A2 = [], mc = (e, t, n, r, o) => ({
  modifiers: e,
  hasImportantModifier: t,
  baseClassName: n,
  maybePostfixModifierPosition: r,
  isExternal: o
}), D2 = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: n
  } = e;
  let r = (o) => {
    const i = [];
    let s = 0, a = 0, l = 0, c;
    const d = o.length;
    for (let w = 0; w < d; w++) {
      const b = o[w];
      if (s === 0 && a === 0) {
        if (b === pc) {
          i.push(o.slice(l, w)), l = w + 1;
          continue;
        }
        if (b === "/") {
          c = w;
          continue;
        }
      }
      b === "[" ? s++ : b === "]" ? s-- : b === "(" ? a++ : b === ")" && a--;
    }
    const f = i.length === 0 ? o : o.slice(l);
    let h = f, g = !1;
    f.endsWith(ca) ? (h = f.slice(0, -1), g = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      f.startsWith(ca) && (h = f.slice(1), g = !0)
    );
    const y = c && c > l ? c - l : void 0;
    return mc(i, g, h, y);
  };
  if (t) {
    const o = t + pc, i = r;
    r = (s) => s.startsWith(o) ? i(s.slice(o.length)) : mc(A2, !1, s, void 0, !0);
  }
  if (n) {
    const o = r;
    r = (i) => n({
      className: i,
      parseClassName: o
    });
  }
  return r;
}, O2 = (e) => {
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
}, V2 = (e) => ({
  cache: M2(e.cacheSize),
  parseClassName: D2(e),
  sortModifiers: O2(e),
  ..._2(e)
}), z2 = /\s+/, I2 = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o,
    sortModifiers: i
  } = t, s = [], a = e.trim().split(z2);
  let l = "";
  for (let c = a.length - 1; c >= 0; c -= 1) {
    const d = a[c], {
      isExternal: f,
      modifiers: h,
      hasImportantModifier: g,
      baseClassName: y,
      maybePostfixModifierPosition: w
    } = n(d);
    if (f) {
      l = d + (l.length > 0 ? " " + l : l);
      continue;
    }
    let b = !!w, m = r(b ? y.substring(0, w) : y);
    if (!m) {
      if (!b) {
        l = d + (l.length > 0 ? " " + l : l);
        continue;
      }
      if (m = r(y), !m) {
        l = d + (l.length > 0 ? " " + l : l);
        continue;
      }
      b = !1;
    }
    const k = h.length === 0 ? "" : h.length === 1 ? h[0] : i(h).join(":"), E = g ? k + ca : k, _ = E + m;
    if (s.indexOf(_) > -1)
      continue;
    s.push(_);
    const S = o(m, b);
    for (let T = 0; T < S.length; ++T) {
      const z = S[T];
      s.push(E + z);
    }
    l = d + (l.length > 0 ? " " + l : l);
  }
  return l;
}, L2 = (...e) => {
  let t = 0, n, r, o = "";
  for (; t < e.length; )
    (n = e[t++]) && (r = Vf(n)) && (o && (o += " "), o += r);
  return o;
}, Vf = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Vf(e[r])) && (n && (n += " "), n += t);
  return n;
}, ua = (e, ...t) => {
  let n, r, o, i;
  const s = (l) => {
    const c = t.reduce((d, f) => f(d), e());
    return n = V2(c), r = n.cache.get, o = n.cache.set, i = a, a(l);
  }, a = (l) => {
    const c = r(l);
    if (c)
      return c;
    const d = I2(l, n);
    return o(l, d), d;
  };
  return i = s, (...l) => i(L2(...l));
}, H2 = [], it = (e) => {
  const t = (n) => n[e] || H2;
  return t.isThemeGetter = !0, t;
}, zf = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, If = /^\((?:(\w[\w-]*):)?(.+)\)$/i, R2 = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, B2 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, F2 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, K2 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Z2 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, W2 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, qn = (e) => R2.test(e), $e = (e) => !!e && !Number.isNaN(Number(e)), Gn = (e) => !!e && Number.isInteger(Number(e)), Ls = (e) => e.endsWith("%") && $e(e.slice(0, -1)), Pn = (e) => B2.test(e), Lf = () => !0, Y2 = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  F2.test(e) && !K2.test(e)
), sl = () => !1, j2 = (e) => Z2.test(e), X2 = (e) => W2.test(e), q2 = (e) => !ge(e) && !ve(e), G2 = (e) => pr(e, Bf, sl), ge = (e) => zf.test(e), wr = (e) => pr(e, Ff, Y2), yc = (e) => pr(e, ow, $e), U2 = (e) => pr(e, Zf, Lf), J2 = (e) => pr(e, Kf, sl), wc = (e) => pr(e, Hf, sl), Q2 = (e) => pr(e, Rf, X2), gi = (e) => pr(e, Wf, j2), ve = (e) => If.test(e), go = (e) => Lr(e, Ff), ew = (e) => Lr(e, Kf), bc = (e) => Lr(e, Hf), tw = (e) => Lr(e, Bf), nw = (e) => Lr(e, Rf), vi = (e) => Lr(e, Wf, !0), rw = (e) => Lr(e, Zf, !0), pr = (e, t, n) => {
  const r = zf.exec(e);
  return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, Lr = (e, t, n = !1) => {
  const r = If.exec(e);
  return r ? r[1] ? t(r[1]) : n : !1;
}, Hf = (e) => e === "position" || e === "percentage", Rf = (e) => e === "image" || e === "url", Bf = (e) => e === "length" || e === "size" || e === "bg-size", Ff = (e) => e === "length", ow = (e) => e === "number", Kf = (e) => e === "family-name", Zf = (e) => e === "number" || e === "weight", Wf = (e) => e === "shadow", da = () => {
  const e = it("color"), t = it("font"), n = it("text"), r = it("font-weight"), o = it("tracking"), i = it("leading"), s = it("breakpoint"), a = it("container"), l = it("spacing"), c = it("radius"), d = it("shadow"), f = it("inset-shadow"), h = it("text-shadow"), g = it("drop-shadow"), y = it("blur"), w = it("perspective"), b = it("aspect"), m = it("ease"), k = it("animate"), E = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], _ = () => [
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
  ], S = () => [..._(), ve, ge], T = () => ["auto", "hidden", "clip", "visible", "scroll"], z = () => ["auto", "contain", "none"], V = () => [ve, ge, l], L = () => [qn, "full", "auto", ...V()], Y = () => [Gn, "none", "subgrid", ve, ge], H = () => ["auto", {
    span: ["full", Gn, ve, ge]
  }, Gn, ve, ge], N = () => [Gn, "auto", ve, ge], M = () => ["auto", "min", "max", "fr", ve, ge], x = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], C = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], A = () => ["auto", ...V()], D = () => [qn, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...V()], K = () => [qn, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...V()], X = () => [qn, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...V()], $ = () => [e, ve, ge], W = () => [..._(), bc, wc, {
    position: [ve, ge]
  }], U = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], Z = () => ["auto", "cover", "contain", tw, G2, {
    size: [ve, ge]
  }], G = () => [Ls, go, wr], R = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    c,
    ve,
    ge
  ], j = () => ["", $e, go, wr], Q = () => ["solid", "dashed", "dotted", "double"], ne = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], J = () => [$e, Ls, bc, wc], _e = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    y,
    ve,
    ge
  ], oe = () => ["none", $e, ve, ge], se = () => ["none", $e, ve, ge], re = () => [$e, ve, ge], he = () => [qn, "full", ...V()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Pn],
      breakpoint: [Pn],
      color: [Lf],
      container: [Pn],
      "drop-shadow": [Pn],
      ease: ["in", "out", "in-out"],
      font: [q2],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [Pn],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [Pn],
      shadow: [Pn],
      spacing: ["px", $e],
      text: [Pn],
      "text-shadow": [Pn],
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
        aspect: ["auto", "square", qn, ge, ve, b]
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
        inset: L()
      }],
      /**
       * Inset Inline
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": L()
      }],
      /**
       * Inset Block
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": L()
      }],
      /**
       * Inset Inline Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-s` in next major release
       */
      start: [{
        "inset-s": L(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-s-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        start: L()
      }],
      /**
       * Inset Inline End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-e` in next major release
       */
      end: [{
        "inset-e": L(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-e-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        end: L()
      }],
      /**
       * Inset Block Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-bs": [{
        "inset-bs": L()
      }],
      /**
       * Inset Block End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-be": [{
        "inset-be": L()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: L()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: L()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: L()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: L()
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
        z: [Gn, "auto", ve, ge]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [qn, "full", "auto", a, ...V()]
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
        flex: [$e, qn, "auto", "initial", "none", ge]
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
        order: [Gn, "first", "last", "none", ve, ge]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": Y()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: H()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": N()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": N()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": Y()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: H()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": N()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": N()
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
        m: A()
      }],
      /**
       * Margin Inline
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: A()
      }],
      /**
       * Margin Block
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: A()
      }],
      /**
       * Margin Inline Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: A()
      }],
      /**
       * Margin Inline End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: A()
      }],
      /**
       * Margin Block Start
       * @see https://tailwindcss.com/docs/margin
       */
      mbs: [{
        mbs: A()
      }],
      /**
       * Margin Block End
       * @see https://tailwindcss.com/docs/margin
       */
      mbe: [{
        mbe: A()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: A()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: A()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: A()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: A()
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
        size: D()
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
        w: [a, "screen", ...D()]
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
          ...D()
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
          ...D()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...D()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...D()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...D()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", n, go, wr]
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
        font: [r, rw, U2]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Ls, ge]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [ew, J2, t]
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
        "line-clamp": [$e, "none", ve, yc]
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
        decoration: [...Q(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [$e, "from-font", "auto", ve, wr]
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
        indent: V()
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
        bg: W()
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
        bg: Z()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, Gn, ve, ge],
          radial: ["", ve, ge],
          conic: [Gn, ve, ge]
        }, nw, Q2]
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
        border: [...Q(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...Q(), "hidden", "none"]
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
        outline: [...Q(), "none", "hidden"]
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
        outline: ["", $e, go, wr]
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
          vi,
          gi
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
        "inset-shadow": ["none", f, vi, gi]
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
        "ring-offset": [$e, wr]
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
        "text-shadow": ["none", h, vi, gi]
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
        mask: W()
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
        mask: Z()
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
        blur: _e()
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
          vi,
          gi
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
        "backdrop-blur": _e()
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
        ease: ["linear", "initial", m, ve, ge]
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
        perspective: [w, ve, ge]
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
        rotate: oe()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": oe()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": oe()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": oe()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: se()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": se()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": se()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": se()
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
        stroke: [$e, go, wr, yc]
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
}, iw = (e, {
  cacheSize: t,
  prefix: n,
  experimentalParseClassName: r,
  extend: o = {},
  override: i = {}
}) => (bo(e, "cacheSize", t), bo(e, "prefix", n), bo(e, "experimentalParseClassName", r), pi(e.theme, i.theme), pi(e.classGroups, i.classGroups), pi(e.conflictingClassGroups, i.conflictingClassGroups), pi(e.conflictingClassGroupModifiers, i.conflictingClassGroupModifiers), bo(e, "orderSensitiveModifiers", i.orderSensitiveModifiers), mi(e.theme, o.theme), mi(e.classGroups, o.classGroups), mi(e.conflictingClassGroups, o.conflictingClassGroups), mi(e.conflictingClassGroupModifiers, o.conflictingClassGroupModifiers), Yf(e, o, "orderSensitiveModifiers"), e), bo = (e, t, n) => {
  n !== void 0 && (e[t] = n);
}, pi = (e, t) => {
  if (t)
    for (const n in t)
      bo(e, n, t[n]);
}, mi = (e, t) => {
  if (t)
    for (const n in t)
      Yf(e, t, n);
}, Yf = (e, t, n) => {
  const r = t[n];
  r !== void 0 && (e[n] = e[n] ? e[n].concat(r) : r);
}, sw = (e, ...t) => typeof e == "function" ? ua(da, e, ...t) : ua(() => iw(da(), e), ...t), jf = /* @__PURE__ */ ua(da);
function xc(...e) {
  return jf(zu(e));
}
var aw = /\s+/g, lw = (e) => typeof e != "string" || !e ? e : e.replace(aw, " ").trim(), ji = (...e) => {
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
  return t.length > 0 ? lw(t.join(" ")) : void 0;
}, _c = (e) => e === !1 ? "false" : e === !0 ? "true" : e === 0 ? "0" : e, Ot = (e) => {
  if (!e || typeof e != "object") return !0;
  for (const t in e) return !1;
  return !0;
}, cw = (e, t) => {
  if (e === t) return !0;
  if (!e || !t) return !1;
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (let o = 0; o < n.length; o++) {
    const i = n[o];
    if (!r.includes(i) || e[i] !== t[i]) return !1;
  }
  return !0;
}, uw = (e, t) => {
  for (const n in t)
    if (Object.prototype.hasOwnProperty.call(t, n)) {
      const r = t[n];
      n in e ? e[n] = ji(e[n], r) : e[n] = r;
    }
  return e;
}, Xf = (e, t) => {
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    Array.isArray(r) ? Xf(r, t) : r && t.push(r);
  }
}, qf = (...e) => {
  const t = [];
  Xf(e, t);
  const n = [];
  for (let r = 0; r < t.length; r++)
    t[r] && n.push(t[r]);
  return n;
}, fa = (e, t) => {
  const n = {};
  for (const r in e) {
    const o = e[r];
    if (r in t) {
      const i = t[r];
      Array.isArray(o) || Array.isArray(i) ? n[r] = qf(i, o) : typeof o == "object" && typeof i == "object" && o && i ? n[r] = fa(o, i) : n[r] = i + " " + o;
    } else
      n[r] = o;
  }
  for (const r in t)
    r in e || (n[r] = t[r]);
  return n;
}, dw = {
  twMerge: !0,
  twMergeConfig: {}
};
function fw() {
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
var $n = fw(), hw = (e) => {
  const t = (r, o) => {
    const {
      extend: i = null,
      slots: s = {},
      variants: a = {},
      compoundVariants: l = [],
      compoundSlots: c = [],
      defaultVariants: d = {}
    } = r, f = { ...dw, ...o }, h = i?.base ? ji(i.base, r?.base) : r?.base, g = i?.variants && !Ot(i.variants) ? fa(a, i.variants) : a, y = i?.defaultVariants && !Ot(i.defaultVariants) ? { ...i.defaultVariants, ...d } : d;
    !Ot(f.twMergeConfig) && !cw(f.twMergeConfig, $n.cachedTwMergeConfig) && ($n.didTwMergeConfigChange = !0, $n.cachedTwMergeConfig = f.twMergeConfig);
    const w = Ot(i?.slots), b = Ot(s) ? {} : {
      // add "base" to the slots object
      base: ji(r?.base, w && i?.base),
      ...s
    }, m = w ? b : uw(
      { ...i?.slots },
      Ot(b) ? { base: r?.base } : b
    ), k = Ot(i?.compoundVariants) ? l : qf(i?.compoundVariants, l), E = (S) => {
      if (Ot(g) && Ot(s) && w)
        return e(h, S?.class, S?.className)(f);
      if (k && !Array.isArray(k))
        throw new TypeError(
          `The "compoundVariants" prop must be an array. Received: ${typeof k}`
        );
      if (c && !Array.isArray(c))
        throw new TypeError(
          `The "compoundSlots" prop must be an array. Received: ${typeof c}`
        );
      const T = (x, C = g, A = null, D = null) => {
        const K = C[x];
        if (!K || Ot(K))
          return null;
        const X = D?.[x] ?? S?.[x];
        if (X === null) return null;
        const $ = _c(X);
        if (typeof $ == "object")
          return null;
        const W = y?.[x], U = $ ?? _c(W);
        return K[U || "false"];
      }, z = () => {
        if (!g) return null;
        const x = Object.keys(g), C = [];
        for (let A = 0; A < x.length; A++) {
          const D = T(x[A], g);
          D && C.push(D);
        }
        return C;
      }, V = (x, C) => {
        if (!g || typeof g != "object") return null;
        const A = [];
        for (const D in g) {
          const K = T(D, g, x, C), X = x === "base" && typeof K == "string" ? K : K && K[x];
          X && A.push(X);
        }
        return A;
      }, L = {};
      for (const x in S) {
        const C = S[x];
        C !== void 0 && (L[x] = C);
      }
      const Y = (x, C) => {
        const A = typeof S?.[x] == "object" ? {
          [x]: S[x]?.initial
        } : {};
        return {
          ...y,
          ...L,
          ...A,
          ...C
        };
      }, H = (x = [], C) => {
        const A = [], D = x.length;
        for (let K = 0; K < D; K++) {
          const { class: X, className: $, ...W } = x[K];
          let U = !0;
          const Z = Y(null, C);
          for (const G in W) {
            const R = W[G], j = Z[G];
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
          U && (X && A.push(X), $ && A.push($));
        }
        return A;
      }, N = (x) => {
        const C = H(k, x);
        if (!Array.isArray(C)) return C;
        const A = {}, D = e;
        for (let K = 0; K < C.length; K++) {
          const X = C[K];
          if (typeof X == "string")
            A.base = D(A.base, X)(f);
          else if (typeof X == "object")
            for (const $ in X)
              A[$] = D(A[$], X[$])(f);
        }
        return A;
      }, M = (x) => {
        if (c.length < 1) return null;
        const C = {}, A = Y(null, x);
        for (let D = 0; D < c.length; D++) {
          const {
            slots: K = [],
            class: X,
            className: $,
            ...W
          } = c[D];
          if (!Ot(W)) {
            let U = !0;
            for (const Z in W) {
              const G = A[Z], R = W[Z];
              if (G === void 0 || (Array.isArray(R) ? !R.includes(G) : R !== G)) {
                U = !1;
                break;
              }
            }
            if (!U) continue;
          }
          for (let U = 0; U < K.length; U++) {
            const Z = K[U];
            C[Z] || (C[Z] = []), C[Z].push([X, $]);
          }
        }
        return C;
      };
      if (!Ot(s) || !w) {
        const x = {};
        if (typeof m == "object" && !Ot(m)) {
          const C = e;
          for (const A in m)
            x[A] = (D) => {
              const K = N(D), X = M(D);
              return C(
                m[A],
                V(A, D),
                K ? K[A] : void 0,
                X ? X[A] : void 0,
                D?.class,
                D?.className
              )(f);
            };
        }
        return x;
      }
      return e(
        h,
        z(),
        H(k),
        S?.class,
        S?.className
      )(f);
    }, _ = () => {
      if (!(!g || typeof g != "object"))
        return Object.keys(g);
    };
    return E.variantKeys = _(), E.extend = i, E.base = h, E.slots = m, E.variants = g, E.defaultVariants = y, E.compoundSlots = c, E.compoundVariants = k, E;
  };
  return {
    tv: t,
    createTV: (r) => (o, i) => t(o, i ? fa(r, i) : r)
  };
}, gw = (e) => Ot(e) ? jf : sw({
  ...e,
  extend: {
    theme: e.theme,
    classGroups: e.classGroups,
    conflictingClassGroupModifiers: e.conflictingClassGroupModifiers,
    conflictingClassGroups: e.conflictingClassGroups,
    ...e.extend
  }
}), vw = (e, t) => {
  const n = ji(e);
  return !n || !(t?.twMerge ?? !0) ? n : ((!$n.cachedTwMerge || $n.didTwMergeConfigChange) && ($n.didTwMergeConfigChange = !1, $n.cachedTwMerge = gw($n.cachedTwMergeConfig)), $n.cachedTwMerge(n) || void 0);
}, pw = (...e) => (t) => vw(e, t), { tv: mw } = hw(pw);
const Cc = mw({
  base: "focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 rounded-sm border border-transparent bg-clip-padding text-sm font-medium focus-visible:ring-3 active:translate-y-px aria-invalid:ring-3 [&_svg:not([class*='size-'])]:size-4 group/button inline-flex shrink-0 items-center justify-center whitespace-nowrap transition-all outline-none select-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
      outline: "border-border bg-background hover:bg-muted hover:text-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 aria-expanded:bg-muted aria-expanded:text-foreground",
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
      "icon-xs": "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
      "icon-sm": "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
      "icon-lg": "size-9"
    }
  },
  defaultVariants: { variant: "default", size: "default" }
});
var yw = /* @__PURE__ */ te("<a><!></a>"), ww = /* @__PURE__ */ te("<button><!></button>");
function Ve(e, t) {
  ce(t, !0);
  let n = p(t, "class", 7), r = p(t, "variant", 7, "outline"), o = p(t, "size", 7, "default"), i = p(t, "ref", 15, null), s = p(t, "href", 23, () => {
  }), a = p(t, "type", 7, "button"), l = p(t, "disabled", 7), c = p(t, "children", 7), d = p(t, "primary", 7), f = /* @__PURE__ */ Ze(t, [
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
    set class(m) {
      n(m), v();
    },
    get variant() {
      return r();
    },
    set variant(m = "outline") {
      r(m), v();
    },
    get size() {
      return o();
    },
    set size(m = "default") {
      o(m), v();
    },
    get ref() {
      return i();
    },
    set ref(m = null) {
      i(m), v();
    },
    get href() {
      return s();
    },
    set href(m = void 0) {
      s(m), v();
    },
    get type() {
      return a();
    },
    set type(m = "button") {
      a(m), v();
    },
    get disabled() {
      return l();
    },
    set disabled(m) {
      l(m), v();
    },
    get children() {
      return c();
    },
    set children(m) {
      c(m), v();
    },
    get primary() {
      return d();
    },
    set primary(m) {
      d(m), v();
    }
  }, g = Ee(), y = ie(g);
  {
    var w = (m) => {
      var k = yw();
      rt(
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
          () => xc(Cc({ variant: r(), size: o() }), n())
        ]
      );
      var E = F(k);
      Ue(E, () => c() ?? ht), B(k), St(k, (_) => i(_), () => i()), O(m, k);
    }, b = (m) => {
      var k = ww();
      rt(
        k,
        (_) => ({
          "data-slot": "button",
          class: _,
          type: a(),
          disabled: l(),
          ...f
        }),
        [
          () => xc(Cc({ variant: r(), size: o() }), n())
        ]
      );
      var E = F(k);
      Ue(E, () => c() ?? ht), B(k), St(k, (_) => i(_), () => i()), O(m, k);
    };
    ae(y, (m) => {
      s() ? m(w) : m(b, !1);
    });
  }
  return O(e, g), ue(h);
}
le(
  Ve,
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
var bw = /* @__PURE__ */ te("<input/>");
function Gf(e, t) {
  ce(t, !0);
  const n = /* @__PURE__ */ Ze(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = bw();
  rt(
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
  ), O(e, r), ue();
}
le(Gf, {}, [], [], !0);
var xw = /* @__PURE__ */ te('<div><input type="hidden"/> <!> <!></div>');
const _w = {
  hash: "svelte-1o3a23c",
  code: ".tf-chosen.svelte-1o3a23c {display:flex;flex-direction:row;align-items:center;justify-content:space-between;gap:5px;}"
};
function Uf(e, t) {
  ce(t, !0), Fe(e, _w);
  const n = p(t, "placeholder", 7), r = p(t, "label", 7), o = p(t, "value", 7), i = p(t, "buttonText", 7, "选择..."), s = p(t, "onChosen", 7), a = /* @__PURE__ */ Ze(t, [
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
      n(g), v();
    },
    get label() {
      return r();
    },
    set label(g) {
      r(g), v();
    },
    get value() {
      return o();
    },
    set value(g) {
      o(g), v();
    },
    get buttonText() {
      return i();
    },
    set buttonText(g = "选择...") {
      i(g), v();
    },
    get onChosen() {
      return s();
    },
    set onChosen(g) {
      s(g), v();
    }
  }, c = xw();
  rt(
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
  or(d);
  var f = I(d, 2);
  et(f, {
    get value() {
      return r();
    },
    get placeholder() {
      return n();
    },
    style: "flex-grow: 1;",
    disabled: !0
  });
  var h = I(f, 2);
  return Ve(h, {
    onclick: (g) => {
      s()?.(o(), r(), g);
    },
    style: "padding: 3px",
    children: (g, y) => {
      ye();
      var w = Ne();
      Se(() => We(w, i())), O(g, w);
    },
    $$slots: { default: !0 }
  }), B(c), Se(() => wi(d, o())), O(e, c), ue(l);
}
le(
  Uf,
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
var Cw = /* @__PURE__ */ te("<input/>");
function et(e, t) {
  ce(t, !0);
  const n = /* @__PURE__ */ Ze(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = Cw();
  rt(
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
  ), O(e, r), ue();
}
le(et, {}, [], [], !0);
var kw = /* @__PURE__ */ te("<textarea></textarea>");
function Ke(e, t) {
  ce(t, !0);
  const n = p(t, "value", 7), r = p(t, "height", 7), o = p(t, "autoHeight", 7, !0), i = p(t, "maxHeight", 7), s = p(t, "onHeightChange", 7), a = /* @__PURE__ */ Ze(t, [
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
        const b = typeof r() == "number" ? `${r()}px` : r();
        l.style.height = b, l.style.overflowY = "hidden", s()?.(b);
        return;
      }
      l.style.height = "auto", l.style.overflowY = "hidden";
      let w = l.scrollHeight;
      if (!c) {
        const b = t.rows || 1, m = getComputedStyle(l);
        c = parseFloat(m.fontSize) * 1.2 * b + parseFloat(m.paddingTop) + parseFloat(m.paddingBottom) + parseFloat(m.borderTopWidth);
      }
      if (w < c && (w = c), i()) {
        const b = typeof i() == "number" ? `${i()}px` : i();
        w > parseInt(b) ? (l.style.height = b, l.style.overflowY = "auto") : l.style.height = `${w}px`;
      } else
        l.style.height = `${w}px`;
      s()?.(l.style.height);
    }
  }
  qe(() => {
    d();
  });
  var f = {
    get value() {
      return n();
    },
    set value(w) {
      n(w), v();
    },
    get height() {
      return r();
    },
    set height(w) {
      r(w), v();
    },
    get autoHeight() {
      return o();
    },
    set autoHeight(w = !0) {
      o(w), v();
    },
    get maxHeight() {
      return i();
    },
    set maxHeight(w) {
      i(w), v();
    },
    get onHeightChange() {
      return s();
    },
    set onHeightChange(w) {
      s(w), v();
    }
  }, h = kw();
  Ig(h);
  var g = (w) => {
    d(), t.oninput?.(w);
  }, y = (w) => {
    d(), t.onchange?.(w);
  };
  return rt(h, () => ({
    spellcheck: "false",
    ...a,
    oninput: g,
    onchange: y,
    class: `tf-textarea nodrag nowheel ${t.class ?? ""}`,
    value: n() || ""
  })), St(h, (w) => l = w, () => l), O(e, h), ue(f);
}
le(
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
var Sw = /* @__PURE__ */ te('<div role="button"><!></div>'), Ew = /* @__PURE__ */ te("<div></div>");
function Jf(e, t) {
  const n = Tl(t, ["children", "$$slots", "$$events", "$$legacy", "$$host"]), r = Tl(n, ["items", "onChange", "activeIndex"]);
  ce(t, !1);
  let o = p(t, "items", 28, () => []), i = p(t, "onChange", 12, () => {
  }), s = p(t, "activeIndex", 12, 0);
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
  Ru();
  var c = Ew();
  return rt(c, () => ({
    ...r,
    class: `tf-tabs ${Ia(r), st(() => r.class) ?? ""}`
  })), Ct(c, 5, o, Ur, (d, f, h) => {
    var g = Sw();
    Ce(g, "tabindex", h), g.__click = () => a(u(f), h), g.__keydown = (m) => {
      (m.key === "Enter" || m.key === " ") && (m.preventDefault(), a(u(f), h));
    };
    var y = F(g);
    {
      var w = (m) => {
        var k = Ne();
        Se(() => We(k, (u(f), st(() => u(f).label)))), O(m, k);
      }, b = (m) => {
        var k = Ee(), E = ie(k);
        Ue(E, () => (u(f), st(() => u(f).label) ?? ht)), O(m, k);
      };
      ae(y, (m) => {
        u(f), st(() => typeof u(f).label == "string") ? m(w) : m(b, !1);
      });
    }
    B(g), Se(() => Bt(g, 1, `tf-tabs-item ${h === s() ? "active" : ""}`)), O(d, g);
  }), B(c), O(e, c), ue(l);
}
gr(["click", "keydown"]);
le(Jf, { items: {}, onChange: {}, activeIndex: {} }, [], [], !0);
var Nw = /* @__PURE__ */ te('<span class="tf-collapse-item-title-icon"><!></span>'), Pw = /* @__PURE__ */ te('<div class="tf-collapse-item-description"><!></div>'), Tw = /* @__PURE__ */ te('<div class="tf-collapse-item-content"><!></div>'), $w = /* @__PURE__ */ te('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><!> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), Mw = /* @__PURE__ */ te("<div></div>");
const Aw = {
  hash: "svelte-ynwjxt",
  code: `\r
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-ynwjxt {transform:rotate(90deg);transition:transform 0.3s ease;}`
};
function Qf(e, t) {
  ce(t, !0), Fe(e, Aw);
  let n = p(t, "items", 7), r = p(t, "onChange", 7), o = p(t, "activeKeys", 31, () => xt([]));
  function i(l) {
    o().includes(l.key) ? o(o().filter((c) => c !== l.key)) : (o().push(l.key), o(o())), r()?.(l, o());
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
  }, a = Mw();
  return Ct(a, 21, n, Ur, (l, c, d) => {
    var f = $w(), h = F(f);
    Ce(h, "tabindex", d), h.__click = () => i(u(c)), h.__keydown = (S) => {
      (S.key === "Enter" || S.key === " ") && (S.preventDefault(), i(u(c)));
    };
    var g = F(h);
    {
      var y = (S) => {
        var T = Nw(), z = F(T);
        Jn(z, {
          get target() {
            return u(c).icon;
          }
        }), B(T), O(S, T);
      };
      ae(g, (S) => {
        u(c).icon && S(y);
      });
    }
    var w = I(g, 2);
    Jn(w, {
      get target() {
        return u(c).title;
      }
    });
    var b = I(w, 2);
    B(h);
    var m = I(h, 2);
    {
      var k = (S) => {
        var T = Pw(), z = F(T);
        Jn(z, {
          get target() {
            return u(c).description;
          }
        }), B(T), O(S, T);
      };
      ae(m, (S) => {
        u(c).description && S(k);
      });
    }
    var E = I(m, 2);
    {
      var _ = (S) => {
        var T = Tw(), z = F(T);
        Jn(z, {
          get target() {
            return u(c).content;
          }
        }), B(T), O(S, T);
      };
      ae(E, (S) => {
        o().includes(u(c).key) && S(_);
      });
    }
    B(f), Se((S) => Bt(b, 1, `tf-collapse-item-title-arrow ${S ?? ""}`, "svelte-ynwjxt"), [
      () => o().includes(u(c).key) ? "rotate-90" : ""
    ]), O(l, f);
  }), B(a), Se(() => {
    vt(a, t.style), Bt(a, 1, `tf-collapse ${t.class ?? ""}`, "svelte-ynwjxt");
  }), O(e, a), ue(s);
}
gr(["click", "keydown"]);
le(Qf, { items: {}, onChange: {}, activeKeys: {} }, [], [], !0);
function Jn(e, t) {
  ce(t, !0);
  let n = p(t, "target", 7);
  typeof n() > "u" && n("undefined");
  var r = {
    get target() {
      return n();
    },
    set target(l) {
      n(l), v();
    }
  }, o = Ee(), i = ie(o);
  {
    var s = (l) => {
      var c = Ee(), d = ie(c);
      Ue(d, () => n() ?? ht), O(l, c);
    }, a = (l) => {
      var c = Ee(), d = ie(c);
      cs(d, n), O(l, c);
    };
    ae(i, (l) => {
      typeof n() == "function" ? l(s) : l(a, !1);
    });
  }
  return O(e, o), ue(r);
}
le(Jn, { target: {} }, [], [], !0);
var Dw = /* @__PURE__ */ pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), Ow = /* @__PURE__ */ te('<div class="tf-select-content-children"><!></div>'), Vw = /* @__PURE__ */ te('<button class="tf-select-content-item"><span><!></span> <!></button> <!>', 1), zw = /* @__PURE__ */ te('<div class="tf-select-content nopan nodrag nowheel "><!></div>'), Iw = /* @__PURE__ */ te("<!> <!>", 1), Lw = /* @__PURE__ */ te('<div class="tf-select-input-placeholder"> </div>'), Hw = /* @__PURE__ */ te('<button><div class="tf-select-input-value"></div> <div class="tf-select-input-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></div></button>'), Rw = /* @__PURE__ */ te("<div><!></div>");
function ft(e, t) {
  ce(t, !0);
  const n = (k, E = ht) => {
    var _ = Ee(), S = ie(_);
    Ct(S, 19, E, (T, z) => `${z}_${T.value}`, (T, z) => {
      var V = Vw(), L = ie(V);
      L.__click = () => y(u(z));
      var Y = F(L), H = F(Y);
      {
        var N = (A) => {
          var D = Dw();
          O(A, D);
        };
        ae(H, (A) => {
          u(z).children && u(z).children.length > 0 && A(N);
        });
      }
      B(Y);
      var M = I(Y, 2);
      Jn(M, {
        get target() {
          return u(z).label;
        }
      }), B(L);
      var x = I(L, 2);
      {
        var C = (A) => {
          var D = Ow(), K = F(D);
          n(K, () => u(z).children), B(D), O(A, D);
        };
        ae(x, (A) => {
          u(z).children && u(z).children.length > 0 && (a() || c().includes(u(z).value)) && A(C);
        });
      }
      O(T, V);
    }), O(k, _);
  };
  let r = p(t, "items", 7), o = p(t, "onSelect", 7), i = p(t, "value", 23, () => []), s = p(t, "defaultValue", 23, () => []), a = p(t, "expandAll", 7, !0), l = p(t, "multiple", 7, !1), c = p(t, "expandValue", 23, () => []), d = p(t, "placeholder", 7), f = /* @__PURE__ */ Ze(t, [
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
  ]), h = /* @__PURE__ */ P(() => {
    const k = [], E = (_) => {
      for (let S of _)
        i().length > 0 ? i().includes(S.value) && k.push(S) : s().includes(S.value) && k.push(S), S.children && S.children.length > 0 && E(S.children);
    };
    return E(r()), k;
  }), g;
  function y(k) {
    g?.hide(), o()?.(k);
  }
  var w = {
    get items() {
      return r();
    },
    set items(k) {
      r(k), v();
    },
    get onSelect() {
      return o();
    },
    set onSelect(k) {
      o(k), v();
    },
    get value() {
      return i();
    },
    set value(k = []) {
      i(k), v();
    },
    get defaultValue() {
      return s();
    },
    set defaultValue(k = []) {
      s(k), v();
    },
    get expandAll() {
      return a();
    },
    set expandAll(k = !0) {
      a(k), v();
    },
    get multiple() {
      return l();
    },
    set multiple(k = !1) {
      l(k), v();
    },
    get expandValue() {
      return c();
    },
    set expandValue(k = []) {
      c(k), v();
    },
    get placeholder() {
      return d();
    },
    set placeholder(k) {
      d(k), v();
    }
  }, b = Rw();
  rt(b, () => ({ ...f, class: `tf-select ${f.class ?? ""}` }));
  var m = F(b);
  return St(
    mr(m, {
      floating: (E) => {
        var _ = zw(), S = F(_);
        n(S, r), B(_), O(E, _);
      },
      children: (E, _) => {
        var S = Hw();
        rt(S, () => ({ class: "tf-select-input nopan nodrag", ...f }));
        var T = F(S);
        Ct(
          T,
          23,
          () => u(h),
          (z, V) => `${V}_${z.value}`,
          (z, V, L) => {
            var Y = Ee(), H = ie(Y);
            {
              var N = (x) => {
                var C = Ee(), A = ie(C);
                {
                  var D = (K) => {
                    Jn(K, {
                      get target() {
                        return u(V).label;
                      }
                    });
                  };
                  ae(A, (K) => {
                    u(L) === 0 && K(D);
                  });
                }
                O(x, C);
              }, M = (x) => {
                var C = Iw(), A = ie(C);
                Jn(A, {
                  get target() {
                    return u(V).label;
                  }
                });
                var D = I(A, 2);
                {
                  var K = (X) => {
                    var $ = Ne(",");
                    O(X, $);
                  };
                  ae(D, (X) => {
                    u(L) < u(h).length - 1 && X(K);
                  });
                }
                O(x, C);
              };
              ae(H, (x) => {
                l() ? x(M, !1) : x(N);
              });
            }
            O(z, Y);
          },
          (z) => {
            var V = Lw(), L = F(V, !0);
            B(V), Se(() => We(L, d())), O(z, V);
          }
        ), B(T), ye(2), B(S), O(E, S);
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (E) => g = E,
    () => g
  ), B(b), O(e, b), ue(w);
}
gr(["click"]);
le(
  ft,
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
const Vo = Math.min, Yr = Math.max, Xi = Math.round, _n = (e) => ({
  x: e,
  y: e
}), Bw = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Fw = {
  start: "end",
  end: "start"
};
function ha(e, t, n) {
  return Yr(e, Vo(t, n));
}
function ti(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Or(e) {
  return e.split("-")[0];
}
function ni(e) {
  return e.split("-")[1];
}
function eh(e) {
  return e === "x" ? "y" : "x";
}
function al(e) {
  return e === "y" ? "height" : "width";
}
const Kw = /* @__PURE__ */ new Set(["top", "bottom"]);
function Qn(e) {
  return Kw.has(Or(e)) ? "y" : "x";
}
function ll(e) {
  return eh(Qn(e));
}
function Zw(e, t, n) {
  n === void 0 && (n = !1);
  const r = ni(e), o = ll(e), i = al(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = qi(s)), [s, qi(s)];
}
function Ww(e) {
  const t = qi(e);
  return [ga(e), t, ga(t)];
}
function ga(e) {
  return e.replace(/start|end/g, (t) => Fw[t]);
}
const kc = ["left", "right"], Sc = ["right", "left"], Yw = ["top", "bottom"], jw = ["bottom", "top"];
function Xw(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Sc : kc : t ? kc : Sc;
    case "left":
    case "right":
      return t ? Yw : jw;
    default:
      return [];
  }
}
function qw(e, t, n, r) {
  const o = ni(e);
  let i = Xw(Or(e), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map(ga)))), i;
}
function qi(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Bw[t]);
}
function Gw(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function th(e) {
  return typeof e != "number" ? Gw(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Gi(e) {
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
function Ec(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = Qn(t), s = ll(t), a = al(s), l = Or(t), c = i === "y", d = r.x + r.width / 2 - o.width / 2, f = r.y + r.height / 2 - o.height / 2, h = r[a] / 2 - o[a] / 2;
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
  switch (ni(t)) {
    case "start":
      g[s] -= h * (n && c ? -1 : 1);
      break;
    case "end":
      g[s] += h * (n && c ? -1 : 1);
      break;
  }
  return g;
}
const Uw = async (e, t, n) => {
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
  } = Ec(c, r, l), h = r, g = {}, y = 0;
  for (let w = 0; w < a.length; w++) {
    const {
      name: b,
      fn: m
    } = a[w], {
      x: k,
      y: E,
      data: _,
      reset: S
    } = await m({
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
      [b]: {
        ...g[b],
        ..._
      }
    }, S && y <= 50 && (y++, typeof S == "object" && (S.placement && (h = S.placement), S.rects && (c = S.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : S.rects), {
      x: d,
      y: f
    } = Ec(c, h, l)), w = -1);
  }
  return {
    x: d,
    y: f,
    placement: h,
    strategy: o,
    middlewareData: g
  };
};
async function nh(e, t) {
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
  } = ti(t, e), y = th(g), b = a[h ? f === "floating" ? "reference" : "floating" : f], m = Gi(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(b))) == null || n ? b : b.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
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
  }, S = Gi(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: k,
    offsetParent: E,
    strategy: l
  }) : k);
  return {
    top: (m.top - S.top + y.top) / _.y,
    bottom: (S.bottom - m.bottom + y.bottom) / _.y,
    left: (m.left - S.left + y.left) / _.x,
    right: (S.right - m.right + y.right) / _.x
  };
}
const Jw = (e) => ({
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
    } = ti(e, t) || {};
    if (c == null)
      return {};
    const f = th(d), h = {
      x: n,
      y: r
    }, g = ll(o), y = al(g), w = await s.getDimensions(c), b = g === "y", m = b ? "top" : "left", k = b ? "bottom" : "right", E = b ? "clientHeight" : "clientWidth", _ = i.reference[y] + i.reference[g] - h[g] - i.floating[y], S = h[g] - i.reference[g], T = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c));
    let z = T ? T[E] : 0;
    (!z || !await (s.isElement == null ? void 0 : s.isElement(T))) && (z = a.floating[E] || i.floating[y]);
    const V = _ / 2 - S / 2, L = z / 2 - w[y] / 2 - 1, Y = Vo(f[m], L), H = Vo(f[k], L), N = Y, M = z - w[y] - H, x = z / 2 - w[y] / 2 + V, C = ha(N, x, M), A = !l.arrow && ni(o) != null && x !== C && i.reference[y] / 2 - (x < N ? Y : H) - w[y] / 2 < 0, D = A ? x < N ? x - N : x - M : 0;
    return {
      [g]: h[g] + D,
      data: {
        [g]: C,
        centerOffset: x - C - D,
        ...A && {
          alignmentOffset: D
        }
      },
      reset: A
    };
  }
}), Qw = function(e) {
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
        fallbackAxisSideDirection: y = "none",
        flipAlignment: w = !0,
        ...b
      } = ti(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const m = Or(o), k = Qn(a), E = Or(a) === a, _ = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), S = h || (E || !w ? [qi(a)] : Ww(a)), T = y !== "none";
      !h && T && S.push(...qw(a, w, y, _));
      const z = [a, ...S], V = await nh(t, b), L = [];
      let Y = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (d && L.push(V[m]), f) {
        const x = Zw(o, s, _);
        L.push(V[x[0]], V[x[1]]);
      }
      if (Y = [...Y, {
        placement: o,
        overflows: L
      }], !L.every((x) => x <= 0)) {
        var H, N;
        const x = (((H = i.flip) == null ? void 0 : H.index) || 0) + 1, C = z[x];
        if (C && (!(f === "alignment" ? k !== Qn(C) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        Y.every((K) => Qn(K.placement) === k ? K.overflows[0] > 0 : !0)))
          return {
            data: {
              index: x,
              overflows: Y
            },
            reset: {
              placement: C
            }
          };
        let A = (N = Y.filter((D) => D.overflows[0] <= 0).sort((D, K) => D.overflows[1] - K.overflows[1])[0]) == null ? void 0 : N.placement;
        if (!A)
          switch (g) {
            case "bestFit": {
              var M;
              const D = (M = Y.filter((K) => {
                if (T) {
                  const X = Qn(K.placement);
                  return X === k || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  X === "y";
                }
                return !0;
              }).map((K) => [K.placement, K.overflows.filter((X) => X > 0).reduce((X, $) => X + $, 0)]).sort((K, X) => K[1] - X[1])[0]) == null ? void 0 : M[0];
              D && (A = D);
              break;
            }
            case "initialPlacement":
              A = a;
              break;
          }
        if (o !== A)
          return {
            reset: {
              placement: A
            }
          };
      }
      return {};
    }
  };
}, eb = /* @__PURE__ */ new Set(["left", "top"]);
async function tb(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = Or(n), a = ni(n), l = Qn(n) === "y", c = eb.has(s) ? -1 : 1, d = i && l ? -1 : 1, f = ti(t, e);
  let {
    mainAxis: h,
    crossAxis: g,
    alignmentAxis: y
  } = typeof f == "number" ? {
    mainAxis: f,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: f.mainAxis || 0,
    crossAxis: f.crossAxis || 0,
    alignmentAxis: f.alignmentAxis
  };
  return a && typeof y == "number" && (g = a === "end" ? y * -1 : y), l ? {
    x: g * d,
    y: h * c
  } : {
    x: h * c,
    y: g * d
  };
}
const nb = function(e) {
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
      } = t, l = await tb(t, e);
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
}, rb = function(e) {
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
          fn: (b) => {
            let {
              x: m,
              y: k
            } = b;
            return {
              x: m,
              y: k
            };
          }
        },
        ...l
      } = ti(e, t), c = {
        x: n,
        y: r
      }, d = await nh(t, l), f = Qn(Or(o)), h = eh(f);
      let g = c[h], y = c[f];
      if (i) {
        const b = h === "y" ? "top" : "left", m = h === "y" ? "bottom" : "right", k = g + d[b], E = g - d[m];
        g = ha(k, g, E);
      }
      if (s) {
        const b = f === "y" ? "top" : "left", m = f === "y" ? "bottom" : "right", k = y + d[b], E = y - d[m];
        y = ha(k, y, E);
      }
      const w = a.fn({
        ...t,
        [h]: g,
        [f]: y
      });
      return {
        ...w,
        data: {
          x: w.x - n,
          y: w.y - r,
          enabled: {
            [h]: i,
            [f]: s
          }
        }
      };
    }
  };
};
function bs() {
  return typeof window < "u";
}
function co(e) {
  return rh(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Zt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function jn(e) {
  var t;
  return (t = (rh(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function rh(e) {
  return bs() ? e instanceof Node || e instanceof Zt(e).Node : !1;
}
function cn(e) {
  return bs() ? e instanceof Element || e instanceof Zt(e).Element : !1;
}
function kn(e) {
  return bs() ? e instanceof HTMLElement || e instanceof Zt(e).HTMLElement : !1;
}
function Nc(e) {
  return !bs() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Zt(e).ShadowRoot;
}
const ob = /* @__PURE__ */ new Set(["inline", "contents"]);
function ri(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = un(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !ob.has(o);
}
const ib = /* @__PURE__ */ new Set(["table", "td", "th"]);
function sb(e) {
  return ib.has(co(e));
}
const ab = [":popover-open", ":modal"];
function xs(e) {
  return ab.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const lb = ["transform", "translate", "scale", "rotate", "perspective"], cb = ["transform", "translate", "scale", "rotate", "perspective", "filter"], ub = ["paint", "layout", "strict", "content"];
function cl(e) {
  const t = ul(), n = cn(e) ? un(e) : e;
  return lb.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || cb.some((r) => (n.willChange || "").includes(r)) || ub.some((r) => (n.contain || "").includes(r));
}
function db(e) {
  let t = cr(e);
  for (; kn(t) && !io(t); ) {
    if (cl(t))
      return t;
    if (xs(t))
      return null;
    t = cr(t);
  }
  return null;
}
function ul() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const fb = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function io(e) {
  return fb.has(co(e));
}
function un(e) {
  return Zt(e).getComputedStyle(e);
}
function _s(e) {
  return cn(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function cr(e) {
  if (co(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Nc(e) && e.host || // Fallback.
    jn(e)
  );
  return Nc(t) ? t.host : t;
}
function oh(e) {
  const t = cr(e);
  return io(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : kn(t) && ri(t) ? t : oh(t);
}
function ih(e, t, n) {
  var r;
  t === void 0 && (t = []);
  const o = oh(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = Zt(o);
  return i ? (va(s), t.concat(s, s.visualViewport || [], ri(o) ? o : [], [])) : t.concat(o, ih(o, []));
}
function va(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function sh(e) {
  const t = un(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = kn(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, a = Xi(n) !== i || Xi(r) !== s;
  return a && (n = i, r = s), {
    width: n,
    height: r,
    $: a
  };
}
function ah(e) {
  return cn(e) ? e : e.contextElement;
}
function jr(e) {
  const t = ah(e);
  if (!kn(t))
    return _n(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = sh(t);
  let s = (i ? Xi(n.width) : n.width) / r, a = (i ? Xi(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const hb = /* @__PURE__ */ _n(0);
function lh(e) {
  const t = Zt(e);
  return !ul() || !t.visualViewport ? hb : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function gb(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Zt(e) ? !1 : t;
}
function zo(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = ah(e);
  let s = _n(1);
  t && (r ? cn(r) && (s = jr(r)) : s = jr(e));
  const a = gb(i, n, r) ? lh(i) : _n(0);
  let l = (o.left + a.x) / s.x, c = (o.top + a.y) / s.y, d = o.width / s.x, f = o.height / s.y;
  if (i) {
    const h = Zt(i), g = r && cn(r) ? Zt(r) : r;
    let y = h, w = va(y);
    for (; w && r && g !== y; ) {
      const b = jr(w), m = w.getBoundingClientRect(), k = un(w), E = m.left + (w.clientLeft + parseFloat(k.paddingLeft)) * b.x, _ = m.top + (w.clientTop + parseFloat(k.paddingTop)) * b.y;
      l *= b.x, c *= b.y, d *= b.x, f *= b.y, l += E, c += _, y = Zt(w), w = va(y);
    }
  }
  return Gi({
    width: d,
    height: f,
    x: l,
    y: c
  });
}
function Cs(e, t) {
  const n = _s(e).scrollLeft;
  return t ? t.left + n : zo(jn(e)).left + n;
}
function ch(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - Cs(e, n), o = n.top + t.scrollTop;
  return {
    x: r,
    y: o
  };
}
function vb(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", s = jn(r), a = t ? xs(t.floating) : !1;
  if (r === s || a && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = _n(1);
  const d = _n(0), f = kn(r);
  if ((f || !f && !i) && ((co(r) !== "body" || ri(s)) && (l = _s(r)), kn(r))) {
    const g = zo(r);
    c = jr(r), d.x = g.x + r.clientLeft, d.y = g.y + r.clientTop;
  }
  const h = s && !f && !i ? ch(s, l) : _n(0);
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - l.scrollLeft * c.x + d.x + h.x,
    y: n.y * c.y - l.scrollTop * c.y + d.y + h.y
  };
}
function pb(e) {
  return Array.from(e.getClientRects());
}
function mb(e) {
  const t = jn(e), n = _s(e), r = e.ownerDocument.body, o = Yr(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = Yr(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + Cs(e);
  const a = -n.scrollTop;
  return un(r).direction === "rtl" && (s += Yr(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
const Pc = 25;
function yb(e, t) {
  const n = Zt(e), r = jn(e), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, a = 0, l = 0;
  if (o) {
    i = o.width, s = o.height;
    const d = ul();
    (!d || d && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  const c = Cs(r);
  if (c <= 0) {
    const d = r.ownerDocument, f = d.body, h = getComputedStyle(f), g = d.compatMode === "CSS1Compat" && parseFloat(h.marginLeft) + parseFloat(h.marginRight) || 0, y = Math.abs(r.clientWidth - f.clientWidth - g);
    y <= Pc && (i -= y);
  } else c <= Pc && (i += c);
  return {
    width: i,
    height: s,
    x: a,
    y: l
  };
}
const wb = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function bb(e, t) {
  const n = zo(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = kn(e) ? jr(e) : _n(1), s = e.clientWidth * i.x, a = e.clientHeight * i.y, l = o * i.x, c = r * i.y;
  return {
    width: s,
    height: a,
    x: l,
    y: c
  };
}
function Tc(e, t, n) {
  let r;
  if (t === "viewport")
    r = yb(e, n);
  else if (t === "document")
    r = mb(jn(e));
  else if (cn(t))
    r = bb(t, n);
  else {
    const o = lh(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Gi(r);
}
function uh(e, t) {
  const n = cr(e);
  return n === t || !cn(n) || io(n) ? !1 : un(n).position === "fixed" || uh(n, t);
}
function xb(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = ih(e, []).filter((a) => cn(a) && co(a) !== "body"), o = null;
  const i = un(e).position === "fixed";
  let s = i ? cr(e) : e;
  for (; cn(s) && !io(s); ) {
    const a = un(s), l = cl(s);
    !l && a.position === "fixed" && (o = null), (i ? !l && !o : !l && a.position === "static" && !!o && wb.has(o.position) || ri(s) && !l && uh(e, s)) ? r = r.filter((d) => d !== s) : o = a, s = cr(s);
  }
  return t.set(e, r), r;
}
function _b(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? xs(t) ? [] : xb(t, this._c) : [].concat(n), r], a = s[0], l = s.reduce((c, d) => {
    const f = Tc(t, d, o);
    return c.top = Yr(f.top, c.top), c.right = Vo(f.right, c.right), c.bottom = Vo(f.bottom, c.bottom), c.left = Yr(f.left, c.left), c;
  }, Tc(t, a, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function Cb(e) {
  const {
    width: t,
    height: n
  } = sh(e);
  return {
    width: t,
    height: n
  };
}
function kb(e, t, n) {
  const r = kn(t), o = jn(t), i = n === "fixed", s = zo(e, !0, i, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = _n(0);
  function c() {
    l.x = Cs(o);
  }
  if (r || !r && !i)
    if ((co(t) !== "body" || ri(o)) && (a = _s(t)), r) {
      const g = zo(t, !0, i, t);
      l.x = g.x + t.clientLeft, l.y = g.y + t.clientTop;
    } else o && c();
  i && !r && o && c();
  const d = o && !r && !i ? ch(o, a) : _n(0), f = s.left + a.scrollLeft - l.x - d.x, h = s.top + a.scrollTop - l.y - d.y;
  return {
    x: f,
    y: h,
    width: s.width,
    height: s.height
  };
}
function Hs(e) {
  return un(e).position === "static";
}
function $c(e, t) {
  if (!kn(e) || un(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return jn(e) === n && (n = n.ownerDocument.body), n;
}
function dh(e, t) {
  const n = Zt(e);
  if (xs(e))
    return n;
  if (!kn(e)) {
    let o = cr(e);
    for (; o && !io(o); ) {
      if (cn(o) && !Hs(o))
        return o;
      o = cr(o);
    }
    return n;
  }
  let r = $c(e, t);
  for (; r && sb(r) && Hs(r); )
    r = $c(r, t);
  return r && io(r) && Hs(r) && !cl(r) ? n : r || db(e) || n;
}
const Sb = async function(e) {
  const t = this.getOffsetParent || dh, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: kb(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function Eb(e) {
  return un(e).direction === "rtl";
}
const Nb = {
  convertOffsetParentRelativeRectToViewportRelativeRect: vb,
  getDocumentElement: jn,
  getClippingRect: _b,
  getOffsetParent: dh,
  getElementRects: Sb,
  getClientRects: pb,
  getDimensions: Cb,
  getScale: jr,
  isElement: cn,
  isRTL: Eb
}, Pb = nb, Tb = rb, $b = Qw, Mb = Jw, Ab = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: Nb,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return Uw(e, t, {
    ...o,
    platform: i
  });
}, Db = ({
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
    const m = document.querySelector(e);
    if (m)
      e = m;
    else
      throw new Error("element not found by document.querySelector('" + e + "')");
  }
  let c;
  if (typeof n == "string") {
    const m = document.querySelector(n);
    if (m)
      c = m;
    else
      throw new Error("element not found by document.querySelector('" + n + "')");
  } else
    c = n;
  let d;
  l && (d = document.createElement("div"), d.style.position = "absolute", d.style.backgroundColor = "#222", d.style.width = "8px", d.style.height = "8px", d.style.transform = "rotate(45deg)", d.style.display = "none", c.firstElementChild.before(d));
  function f() {
    Ab(e, c, {
      placement: r,
      middleware: [
        Pb(o),
        // 手动偏移配置
        $b(i),
        //自动翻转
        Tb(s),
        //自动偏移（使得浮动元素能够进入视野）
        ...l ? [Mb({ element: d })] : []
      ]
    }).then(({ x: m, y: k, placement: E, middlewareData: _ }) => {
      if (Object.assign(c.style, {
        left: `${m}px`,
        top: `${k}px`
      }), l) {
        const { x: S, y: T } = _.arrow, z = {
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
          [z]: "2px"
        });
      }
    });
  }
  let h = !1;
  function g() {
    c.style.display = "block", c.style.visibility = "block", c.style.position = "absolute", l && (d.style.display = "block"), h = !0, f();
  }
  function y() {
    c.style.display = "none", l && (d.style.display = "none"), h = !1;
  }
  function w(m) {
    m.stopPropagation(), h ? y() : g();
  }
  function b(m) {
    c.contains(m.target) || y();
  }
  return (!t || t.length == 0) && (t = ["click"]), t.forEach((m) => {
    e.addEventListener(m, w);
  }), document.addEventListener("click", b), {
    destroy() {
      t.forEach((m) => {
        e.removeEventListener(m, w);
      }), document.removeEventListener("click", b);
    },
    hide() {
      y();
    },
    isVisible() {
      return h;
    }
  };
};
var Ob = /* @__PURE__ */ te('<div style="position: relative"><div><!></div> <div style="display: none; width: 100%;z-index: 9999"><!></div></div>');
function mr(e, t) {
  ce(t, !0);
  const n = p(t, "children", 7), r = p(t, "floating", 7), o = p(t, "placement", 7, "bottom");
  let i, s, a;
  Sn(() => (a = Db({
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
  }, d = Ob(), f = F(d), h = F(f);
  Ue(h, n), B(f), St(f, (w) => i = w, () => i);
  var g = I(f, 2), y = F(g);
  return Ue(y, r), B(g), St(g, (w) => s = w, () => s), B(d), O(e, d), ue(c);
}
le(mr, { children: {}, floating: {}, placement: {} }, [], ["hide"], !0);
function ze(e, t) {
  ce(t, !0);
  const n = p(t, "children", 7), r = p(t, "level", 7, 1), o = p(t, "mt", 7), i = p(t, "mb", 7);
  var s = {
    get children() {
      return n();
    },
    set children(c) {
      n(c), v();
    },
    get level() {
      return r();
    },
    set level(c = 1) {
      r(c), v();
    },
    get mt() {
      return o();
    },
    set mt(c) {
      o(c), v();
    },
    get mb() {
      return i();
    },
    set mb(c) {
      i(c), v();
    }
  }, a = Ee(), l = ie(a);
  return av(l, () => `h${r()}`, !1, (c, d) => {
    rt(c, () => ({
      class: "tf-heading",
      style: `margin-top:${o() || "0"};margin-bottom:${i() || "0"}`
    }));
    var f = Ee(), h = ie(f);
    Ue(h, () => n() ?? ht), O(d, f);
  }), O(e, a), ue(s);
}
le(ze, { children: {}, level: {}, mt: {}, mb: {} }, [], [], !0);
var Vb = /* @__PURE__ */ pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1q3h954"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1q3h954"></path></svg>');
const zb = {
  hash: "svelte-1q3h954",
  code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:#eee;border:1px solid transparent;}}"
};
function oi(e, t) {
  ce(t, !0), Fe(e, zb);
  const n = /* @__PURE__ */ Ze(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  Ve(e, Ye(() => n, {
    get class() {
      return `input-btn-more ${t.class ?? ""}`;
    },
    children: (r, o) => {
      var i = Vb();
      O(r, i);
    },
    $$slots: { default: !0 }
  })), ue();
}
le(oi, {}, [], [], !0);
const Ib = () => ({ deleteNode: (t) => {
  Le.removeNode(t), Le.updateEdges((n) => n.filter((r) => r.source !== t && r.target !== t));
} }), Bn = (e = 16) => {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = new Uint8Array(e);
  return crypto.getRandomValues(n), Array.from(n, (r) => t[r % t.length]).join("");
}, Lb = () => ({ copyNode: (t) => {
  const n = Le.getNode(t);
  if (n) {
    const r = Bn(), o = {
      ...n,
      id: r,
      position: { x: n.position.x + 50, y: n.position.y + 50 }
    };
    Le.updateNodes((i) => [...i.map((a) => ({ ...a, selected: !1 })), o]);
  }
} }), Qe = () => ir("svelteflow__node_id"), ur = () => ir("tinyflow_options");
var Hb = /* @__PURE__ */ pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'), Rb = /* @__PURE__ */ pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'), Bb = /* @__PURE__ */ pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'), Fb = /* @__PURE__ */ te('<div class="input-item svelte-ana6zl">执行条件： <!></div>'), Kb = /* @__PURE__ */ te('<div class="input-item svelte-ana6zl">循环间隔时间（单位：毫秒）： <!></div> <div class="input-item svelte-ana6zl">最大循环次数（0 表示不限制）： <!></div> <div class="input-item svelte-ana6zl">退出条件： <!></div>', 1), Zb = /* @__PURE__ */ te('<div class="input-item svelte-ana6zl">错误重试间隔时间（单位：毫秒）： <!></div> <div class="input-item svelte-ana6zl">最大重试次数： <!></div> <label class="input-item-inline svelte-ana6zl"><span>正常后重置重试次数记录：</span> <input type="checkbox"/></label>', 1), Wb = /* @__PURE__ */ te('<div class="settings svelte-ana6zl"><div class="input-item svelte-ana6zl">节点名称： <!></div> <div class="input-item svelte-ana6zl">参数描述： <!></div> <!> <label class="input-item-inline svelte-ana6zl"><span>循环执行：</span> <input type="checkbox"/></label> <!> <label class="input-item-inline svelte-ana6zl"><span>错误重试：</span> <input type="checkbox"/></label> <!></div>'), Yb = /* @__PURE__ */ pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3.33946 17.0002C2.90721 16.2515 2.58277 15.4702 2.36133 14.6741C3.3338 14.1779 3.99972 13.1668 3.99972 12.0002C3.99972 10.8345 3.3348 9.824 2.36353 9.32741C2.81025 7.71651 3.65857 6.21627 4.86474 4.99001C5.7807 5.58416 6.98935 5.65534 7.99972 5.072C9.01009 4.48866 9.55277 3.40635 9.4962 2.31604C11.1613 1.8846 12.8847 1.90004 14.5031 2.31862C14.4475 3.40806 14.9901 4.48912 15.9997 5.072C17.0101 5.65532 18.2187 5.58416 19.1346 4.99007C19.7133 5.57986 20.2277 6.25151 20.66 7.00021C21.0922 7.7489 21.4167 8.53025 21.6381 9.32628C20.6656 9.82247 19.9997 10.8336 19.9997 12.0002C19.9997 13.166 20.6646 14.1764 21.6359 14.673C21.1892 16.2839 20.3409 17.7841 19.1347 19.0104C18.2187 18.4163 17.0101 18.3451 15.9997 18.9284C14.9893 19.5117 14.4467 20.5941 14.5032 21.6844C12.8382 22.1158 11.1148 22.1004 9.49633 21.6818C9.55191 20.5923 9.00929 19.5113 7.99972 18.9284C6.98938 18.3451 5.78079 18.4162 4.86484 19.0103C4.28617 18.4205 3.77172 17.7489 3.33946 17.0002ZM8.99972 17.1964C10.0911 17.8265 10.8749 18.8227 11.2503 19.9659C11.7486 20.0133 12.2502 20.014 12.7486 19.9675C13.1238 18.8237 13.9078 17.8268 14.9997 17.1964C16.0916 16.5659 17.347 16.3855 18.5252 16.6324C18.8146 16.224 19.0648 15.7892 19.2729 15.334C18.4706 14.4373 17.9997 13.2604 17.9997 12.0002C17.9997 10.74 18.4706 9.5632 19.2729 8.6665C19.1688 8.4405 19.0538 8.21822 18.9279 8.00021C18.802 7.78219 18.667 7.57148 18.5233 7.36842C17.3457 7.61476 16.0911 7.43414 14.9997 6.80405C13.9083 6.17395 13.1246 5.17768 12.7491 4.03455C12.2509 3.98714 11.7492 3.98646 11.2509 4.03292C10.8756 5.17671 10.0916 6.17364 8.99972 6.80405C7.9078 7.43447 6.65245 7.61494 5.47428 7.36803C5.18485 7.77641 4.93463 8.21117 4.72656 8.66637C5.52881 9.56311 5.99972 10.74 5.99972 12.0002C5.99972 13.2604 5.52883 14.4372 4.72656 15.3339C4.83067 15.5599 4.94564 15.7822 5.07152 16.0002C5.19739 16.2182 5.3324 16.4289 5.47612 16.632C6.65377 16.3857 7.90838 16.5663 8.99972 17.1964ZM11.9997 15.0002C10.3429 15.0002 8.99972 13.6571 8.99972 12.0002C8.99972 10.3434 10.3429 9.00021 11.9997 9.00021C13.6566 9.00021 14.9997 10.3434 14.9997 12.0002C14.9997 13.6571 13.6566 15.0002 11.9997 15.0002ZM11.9997 13.0002C12.552 13.0002 12.9997 12.5525 12.9997 12.0002C12.9997 11.4479 12.552 11.0002 11.9997 11.0002C11.4474 11.0002 10.9997 11.4479 10.9997 12.0002C10.9997 12.5525 11.4474 13.0002 11.9997 13.0002Z"></path></svg>'), jb = /* @__PURE__ */ te('<div class="tf-node-toolbar svelte-ana6zl"><!> <!> <!> <!></div>'), Xb = /* @__PURE__ */ te('<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!> <!>', 1);
const qb = {
  hash: "svelte-ana6zl",
  code: ".tf-node-toolbar.svelte-ana6zl {display:flex;gap:5px;padding:5px;border-radius:5px;background:var(--background);border:1px solid var(--border);box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}.settings.svelte-ana6zl {display:flex;flex-direction:column;gap:10px;padding:10px;background:var(--background);border:1px solid var(--border);border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.settings.svelte-ana6zl .input-item:where(.svelte-ana6zl) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:var(--muted-foreground);}.settings.svelte-ana6zl .input-item-inline:where(.svelte-ana6zl) {display:flex;align-items:center;font-size:12px;color:var(--muted-foreground);}"
};
function en(e, t) {
  ce(t, !0), Fe(e, qb);
  const n = p(t, "data", 7), r = p(t, "id", 7, ""), o = p(t, "icon", 7), i = p(t, "handle", 7), s = p(t, "children", 7), a = p(t, "allowExecute", 7, !0), l = p(t, "allowCopy", 7, !0), c = p(t, "allowDelete", 7, !0), d = p(t, "allowSetting", 7, !0), f = p(t, "allowSettingOfCondition", 7, !0), h = p(t, "showSourceHandle", 7, !0), g = p(t, "showTargetHandle", 7, !0), y = p(t, "onCollapse", 7);
  let w = n().expand ? ["key"] : [];
  const { updateNodeData: b, getNode: m } = ut(), k = /* @__PURE__ */ P(() => [
    {
      key: "key",
      icon: o(),
      title: n().title,
      description: n().description,
      content: s()
    }
  ]), { deleteNode: E } = Ib(), { copyNode: _ } = Lb(), S = ur(), T = () => {
    S.onNodeExecute?.(m(r()));
  };
  let z = Qe();
  var V = {
    get data() {
      return n();
    },
    set data($) {
      n($), v();
    },
    get id() {
      return r();
    },
    set id($ = "") {
      r($), v();
    },
    get icon() {
      return o();
    },
    set icon($) {
      o($), v();
    },
    get handle() {
      return i();
    },
    set handle($) {
      i($), v();
    },
    get children() {
      return s();
    },
    set children($) {
      s($), v();
    },
    get allowExecute() {
      return a();
    },
    set allowExecute($ = !0) {
      a($), v();
    },
    get allowCopy() {
      return l();
    },
    set allowCopy($ = !0) {
      l($), v();
    },
    get allowDelete() {
      return c();
    },
    set allowDelete($ = !0) {
      c($), v();
    },
    get allowSetting() {
      return d();
    },
    set allowSetting($ = !0) {
      d($), v();
    },
    get allowSettingOfCondition() {
      return f();
    },
    set allowSettingOfCondition($ = !0) {
      f($), v();
    },
    get showSourceHandle() {
      return h();
    },
    set showSourceHandle($ = !0) {
      h($), v();
    },
    get showTargetHandle() {
      return g();
    },
    set showTargetHandle($ = !0) {
      g($), v();
    },
    get onCollapse() {
      return y();
    },
    set onCollapse($) {
      y($), v();
    }
  }, L = Xb(), Y = ie(L);
  {
    var H = ($) => {
      Mf($, {
        get position() {
          return we.Top;
        },
        align: "start",
        children: (W, U) => {
          var Z = jb(), G = F(Z);
          {
            var R = (se) => {
              Ve(se, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  E(r());
                },
                children: (re, he) => {
                  var me = Hb();
                  O(re, me);
                },
                $$slots: { default: !0 }
              });
            };
            ae(G, (se) => {
              c() && se(R);
            });
          }
          var j = I(G, 2);
          {
            var Q = (se) => {
              Ve(se, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  _(r());
                },
                children: (re, he) => {
                  var me = Rb();
                  O(re, me);
                },
                $$slots: { default: !0 }
              });
            };
            ae(j, (se) => {
              l() && se(Q);
            });
          }
          var ne = I(j, 2);
          {
            var J = (se) => {
              Ve(se, {
                class: "tf-node-toolbar-item",
                onclick: T,
                children: (re, he) => {
                  var me = Bb();
                  O(re, me);
                },
                $$slots: { default: !0 }
              });
            };
            ae(ne, (se) => {
              a() && se(J);
            });
          }
          var _e = I(ne, 2);
          {
            var oe = (se) => {
              mr(se, {
                placement: "bottom",
                floating: (he) => {
                  var me = Wb(), ke = F(me), fe = I(F(ke));
                  et(fe, {
                    style: "width: 100%;",
                    onchange: (de) => {
                      const Ae = de.target.value;
                      b(z, { title: Ae });
                    },
                    get value() {
                      return n().title;
                    }
                  }), B(ke);
                  var be = I(ke, 2), Te = I(F(be));
                  Ke(Te, {
                    rows: 3,
                    style: "width: 100%;",
                    onchange: (de) => {
                      const Ae = de.target.value;
                      b(z, { description: Ae });
                    },
                    get value() {
                      return n().description;
                    }
                  }), B(be);
                  var q = I(be, 2);
                  {
                    var at = (de) => {
                      var Ae = Fb(), Je = I(F(Ae));
                      Ke(Je, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (Be) => {
                          const lt = Be.target.value;
                          b(z, { condition: lt });
                        },
                        get value() {
                          return n().condition;
                        }
                      }), B(Ae), O(de, Ae);
                    };
                    ae(q, (de) => {
                      f() && de(at);
                    });
                  }
                  var Oe = I(q, 2), Re = I(F(Oe), 2);
                  or(Re), Re.__change = (de) => {
                    const Ae = de.target.checked;
                    b(z, { loopEnable: Ae });
                  }, B(Oe);
                  var Ie = I(Oe, 2);
                  {
                    var Et = (de) => {
                      var Ae = Kb(), Je = ie(Ae), Be = I(F(Je));
                      {
                        let mt = /* @__PURE__ */ P(() => n().loopIntervalMs || "1000");
                        Ke(Be, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (yt) => {
                            const vn = yt.target.value;
                            b(z, { loopIntervalMs: vn });
                          },
                          get value() {
                            return u(mt);
                          }
                        });
                      }
                      B(Je);
                      var lt = I(Je, 2), Nt = I(F(lt));
                      {
                        let mt = /* @__PURE__ */ P(() => n().maxLoopCount || "0");
                        Ke(Nt, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (yt) => {
                            const vn = yt.target.value;
                            b(z, { maxLoopCount: vn });
                          },
                          get value() {
                            return u(mt);
                          }
                        });
                      }
                      B(lt);
                      var Dt = I(lt, 2), gn = I(F(Dt));
                      Ke(gn, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (mt) => {
                          const yt = mt.target.value;
                          b(z, { loopBreakCondition: yt });
                        },
                        get value() {
                          return n().loopBreakCondition;
                        }
                      }), B(Dt), O(de, Ae);
                    };
                    ae(Ie, (de) => {
                      n().loopEnable && de(Et);
                    });
                  }
                  var ot = I(Ie, 2), At = I(F(ot), 2);
                  or(At), At.__change = (de) => {
                    const Ae = de.target.checked;
                    b(z, { retryEnable: Ae });
                  }, B(ot);
                  var pt = I(ot, 2);
                  {
                    var tn = (de) => {
                      var Ae = Zb(), Je = ie(Ae), Be = I(F(Je));
                      {
                        let mt = /* @__PURE__ */ P(() => n().retryIntervalMs || "1000");
                        Ke(Be, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (yt) => {
                            const vn = yt.target.value;
                            b(z, { retryIntervalMs: vn });
                          },
                          get value() {
                            return u(mt);
                          }
                        });
                      }
                      B(Je);
                      var lt = I(Je, 2), Nt = I(F(lt));
                      {
                        let mt = /* @__PURE__ */ P(() => n().maxRetryCount || "3");
                        Ke(Nt, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (yt) => {
                            const vn = yt.target.value;
                            b(z, { maxRetryCount: vn });
                          },
                          get value() {
                            return u(mt);
                          }
                        });
                      }
                      B(lt);
                      var Dt = I(lt, 2), gn = I(F(Dt), 2);
                      or(gn), gn.__change = (mt) => {
                        const yt = mt.target.checked;
                        b(z, { resetRetryCountAfterNormal: yt });
                      }, B(Dt), Se(() => Ns(gn, !!n().resetRetryCountAfterNormal)), O(de, Ae);
                    };
                    ae(pt, (de) => {
                      n().retryEnable && de(tn);
                    });
                  }
                  B(me), Se(() => {
                    Ns(Re, !!n().loopEnable), Ns(At, !!n().retryEnable);
                  }), O(he, me);
                },
                children: (he, me) => {
                  Ve(he, {
                    class: "tf-node-toolbar-item",
                    children: (ke, fe) => {
                      var be = Yb();
                      O(ke, be);
                    },
                    $$slots: { default: !0 }
                  });
                },
                $$slots: { floating: !0, default: !0 }
              });
            };
            ae(_e, (se) => {
              d() && se(oe);
            });
          }
          B(Z), O(W, Z);
        },
        $$slots: { default: !0 }
      });
    };
    ae(Y, ($) => {
      (a() || l() || c()) && $(H);
    });
  }
  var N = I(Y, 2), M = I(F(N), 2), x = F(M);
  Qf(x, {
    get items() {
      return u(k);
    },
    get activeKeys() {
      return w;
    },
    onChange: ($, W) => {
      b(r(), { expand: W?.includes("key") }), y()?.(W?.includes("key") ? "key" : "");
    }
  }), B(M), B(N);
  var C = I(N, 2);
  {
    var A = ($) => {
      lr($, {
        type: "target",
        get position() {
          return we.Left;
        },
        style: " left: -12px;top: 20px"
      });
    };
    ae(C, ($) => {
      g() && $(A);
    });
  }
  var D = I(C, 2);
  {
    var K = ($) => {
      lr($, {
        type: "source",
        get position() {
          return we.Right;
        },
        style: "right: -12px;top: 20px"
      });
    };
    ae(D, ($) => {
      h() && $(K);
    });
  }
  var X = I(D, 2);
  return Ue(X, () => i() ?? ht), O(e, L), ue(V);
}
gr(["change"]);
le(
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
var Gb = /* @__PURE__ */ te('<div class="input-more-item svelte-n5iecj">数据选项： <!></div>'), Ub = /* @__PURE__ */ te('<div class="input-more-setting svelte-n5iecj"><div class="input-more-item svelte-n5iecj">数据内容： <!></div> <div class="input-more-item svelte-n5iecj">输入方式： <!></div> <!> <div class="input-more-item svelte-n5iecj">数据标题： <!></div> <div class="input-more-item svelte-n5iecj">数据描述： <!></div> <div class="input-more-item svelte-n5iecj">占位符： <!></div> <div class="input-more-item svelte-n5iecj"><!></div></div>'), Jb = /* @__PURE__ */ pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>'), Qb = /* @__PURE__ */ te('<div class="input-item svelte-n5iecj"><!></div> <div class="input-item svelte-n5iecj"><!></div> <div class="input-item svelte-n5iecj"><!></div>', 1);
const ex = {
  hash: "svelte-n5iecj",
  code: ".input-item.svelte-n5iecj {display:flex;align-items:center;}.input-more-setting.svelte-n5iecj {display:flex;flex-direction:column;gap:10px;padding:10px;background:var(--background);border:1px solid var(--border);border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-n5iecj .input-more-item:where(.svelte-n5iecj) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:var(--muted-foreground);}"
};
function fh(e, t) {
  ce(t, !0), Fe(e, ex);
  const n = p(t, "parameter", 7), r = p(t, "index", 7);
  let o = Qe(), i = Yn(o), s = /* @__PURE__ */ P(() => ({ ...n(), ...i?.current?.data?.parameters[r()] }));
  const { updateNodeData: a } = ut(), l = (V, L) => {
    a(o, (Y) => {
      let H = Y.data.parameters;
      return H[r()][V] = L, { parameters: H };
    });
  }, c = (V, L) => {
    const Y = L.target.value;
    l(V, Y);
  }, d = (V) => {
    const L = V.target.value;
    l("name", L);
  }, f = (V) => {
    const L = V.target.checked;
    l("required", L);
  }, h = (V) => {
    const L = V.value;
    l("formType", L);
  }, g = (V) => {
    const L = V.value;
    l("contentType", L);
  };
  let y;
  const w = () => {
    a(o, (V) => {
      let L = V.data.parameters;
      return L.splice(r(), 1), { parameters: [...L] };
    }), y?.hide();
  };
  var b = {
    get parameter() {
      return n();
    },
    set parameter(V) {
      n(V), v();
    },
    get index() {
      return r();
    },
    set index(V) {
      r(V), v();
    }
  }, m = Qb(), k = ie(m), E = F(k);
  et(E, {
    style: "width: 100%;",
    get value() {
      return u(s).name;
    },
    placeholder: "请输入参数名称",
    oninput: d
  }), B(k);
  var _ = I(k, 2), S = F(_);
  Gf(S, {
    get checked() {
      return u(s).required;
    },
    onchange: f
  }), B(_);
  var T = I(_, 2), z = F(T);
  return St(
    mr(z, {
      placement: "bottom",
      floating: (L) => {
        var Y = Ub(), H = F(Y), N = I(F(H));
        {
          let R = /* @__PURE__ */ P(() => u(s).contentType ? [u(s).contentType] : []);
          ft(N, {
            get items() {
              return ol;
            },
            style: "width: 100%",
            defaultValue: ["text"],
            get value() {
              return u(R);
            },
            onSelect: g
          });
        }
        B(H);
        var M = I(H, 2), x = I(F(M));
        {
          let R = /* @__PURE__ */ P(() => u(s).formType ? [u(s).formType] : []);
          ft(x, {
            get items() {
              return p2;
            },
            style: "width: 100%",
            defaultValue: ["input"],
            get value() {
              return u(R);
            },
            onSelect: h
          });
        }
        B(M);
        var C = I(M, 2);
        {
          var A = (R) => {
            var j = Gb(), Q = I(F(j));
            {
              let ne = /* @__PURE__ */ P(() => u(s).enums?.join(`
`));
              Ke(Q, {
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
            B(j), O(R, j);
          };
          ae(C, (R) => {
            (u(s).formType === "radio" || u(s).formType === "checkbox" || u(s).formType === "select") && R(A);
          });
        }
        var D = I(C, 2), K = I(F(D));
        Ke(K, {
          rows: 1,
          style: "width: 100%;",
          onchange: (R) => {
            c("formLabel", R);
          },
          get value() {
            return u(s).formLabel;
          }
        }), B(D);
        var X = I(D, 2), $ = I(F(X));
        Ke($, {
          rows: 2,
          style: "width: 100%;",
          onchange: (R) => {
            c("formDescription", R);
          },
          get value() {
            return u(s).formDescription;
          }
        }), B(X);
        var W = I(X, 2), U = I(F(W));
        Ke(U, {
          rows: 2,
          style: "width: 100%;",
          onchange: (R) => {
            c("formPlaceholder", R);
          },
          get value() {
            return u(s).formPlaceholder;
          }
        }), B(W);
        var Z = I(W, 2), G = F(Z);
        Ve(G, {
          onclick: w,
          children: (R, j) => {
            ye();
            var Q = Ne("删除");
            O(R, Q);
          },
          $$slots: { default: !0 }
        }), B(Z), B(Y), O(L, Y);
      },
      children: (L, Y) => {
        Ve(L, {
          class: "input-btn-more",
          children: (H, N) => {
            var M = Jb();
            O(H, M);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (L) => y = L,
    () => y
  ), B(T), O(e, m), ue(b);
}
le(fh, { parameter: {}, index: {} }, [], [], !0);
var tx = /* @__PURE__ */ te('<div class="input-header svelte-1yp5n1k">参数名称</div> <div class="input-header svelte-1yp5n1k">必填</div> <div class="input-header svelte-1yp5n1k"></div>', 1), nx = /* @__PURE__ */ te('<div class="none-params svelte-1yp5n1k">无输入参数</div>'), rx = /* @__PURE__ */ te('<div class="input-container svelte-1yp5n1k"><!> <!></div>');
const ox = {
  hash: "svelte-1yp5n1k",
  code: `.input-container.svelte-1yp5n1k {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1yp5n1k .none-params:where(.svelte-1yp5n1k) {font-size:12px;background:var(--secondary);height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1yp5n1k .input-header:where(.svelte-1yp5n1k) {font-size:12px;color:var(--muted-foreground);}`
};
function hh(e, t) {
  ce(t, !0), Fe(e, ox);
  let n = Qe(), r = Yn(n), o = /* @__PURE__ */ P(() => [...r?.current?.data?.parameters || []]);
  var i = rx(), s = F(i);
  {
    var a = (c) => {
      var d = tx();
      ye(4), O(c, d);
    };
    ae(s, (c) => {
      u(o).length !== 0 && c(a);
    });
  }
  var l = I(s, 2);
  Ct(
    l,
    19,
    () => u(o),
    (c) => c.id,
    (c, d, f) => {
      fh(c, {
        get parameter() {
          return u(d);
        },
        get index() {
          return u(f);
        }
      });
    },
    (c) => {
      var d = nx();
      O(c, d);
    }
  ), B(i), O(e, i), ue();
}
le(hh, {}, [], [], !0);
const Io = (e) => (!e || e.length == 0 || e.forEach((t) => {
  t.id || (t.id = Bn()), Io(t.children);
}), e), hn = () => {
  const { updateNodeData: e } = ut();
  return {
    addParameter: (t, n = "parameters", r) => {
      Array.isArray(r) ? r.forEach((s) => Io(s?.children)) : Io(r?.children);
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
      Array.isArray(r) ? i.push(...r.map(o)) : i.push(o(r)), e(t, (s) => {
        let a = s.data[n];
        return a ? a.push(...i) : a = [...i], { [n]: [...a] };
      });
    }
  };
};
var ix = /* @__PURE__ */ pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), sx = /* @__PURE__ */ pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), ax = /* @__PURE__ */ te('<div class="heading svelte-llt1qy"><!> <!></div> <!>', 1);
const lx = {
  hash: "svelte-llt1qy",
  code: ".heading.svelte-llt1qy {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:var(--muted);border:1px solid transparent;}"
};
function gh(e, t) {
  ce(t, !0), Fe(e, lx);
  const n = p(t, "data", 7), r = /* @__PURE__ */ Ze(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Qe(), { addParameter: i } = hn();
  var s = {
    get data() {
      return n();
    },
    set data(a) {
      n(a), v();
    }
  };
  return en(e, Ye(() => r, {
    get data() {
      return n();
    },
    allowExecute: !1,
    showTargetHandle: !1,
    allowSettingOfCondition: !1,
    icon: (l) => {
      var c = ix();
      O(l, c);
    },
    children: (l, c) => {
      var d = ax(), f = ie(d), h = F(f);
      ze(h, {
        level: 3,
        children: (w, b) => {
          ye();
          var m = Ne("输入参数");
          O(w, m);
        },
        $$slots: { default: !0 }
      });
      var g = I(h, 2);
      Ve(g, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: () => {
          i(o, "parameters", { refType: "input", name: "newParam" });
        },
        children: (w, b) => {
          var m = sx();
          O(w, m);
        },
        $$slots: { default: !0 }
      }), B(f);
      var y = I(f, 2);
      hh(y, {}), O(l, d);
    },
    $$slots: { icon: !0, default: !0 }
  })), ue(s);
}
le(gh, { data: {} }, [], [], !0);
const vh = (e, t, n) => {
  for (const r of n)
    r.target === t && r.source && (e.push(r.source), vh(e, r.source, n));
}, ph = (e, t, n) => !e || e.length === 0 ? [] : e.map((r) => ({
  label: r.name + (n ? ` (Array<${r.dataType || "String"}>)` : ` (${r.dataType || "String"})`),
  value: t + "." + r.name,
  children: ph(r.children, t + "." + r.name, n)
})), Mc = (e, t, n) => {
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
          children: ph(r, e.id, t)
        };
    }
  }
}, mh = (e = !1) => {
  const t = Qe(), n = Yn(t), r = /* @__PURE__ */ P(fn), o = /* @__PURE__ */ P(() => u(r).nodes), i = /* @__PURE__ */ P(() => u(r).edges), s = /* @__PURE__ */ P(() => u(r).nodeLookup);
  let a = /* @__PURE__ */ P(() => {
    const l = [];
    if (!n.current)
      return [];
    const c = u(s).get(t);
    if (e)
      for (const d of u(o)) {
        const f = d.parentId === n.current.id;
        if (f) {
          const h = Mc(d, f, c);
          h && l.push(h);
        }
      }
    else {
      const d = [];
      vh(d, t, u(i));
      for (const f of u(o))
        if (d.includes(f.id)) {
          const h = f.parentId === n.current.id, g = Mc(f, h, c);
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
var cx = /* @__PURE__ */ te('<div class="input-more-item svelte-jmeys3">数据内容： <!></div>'), ux = /* @__PURE__ */ te('<div class="input-more-setting svelte-jmeys3"><div class="input-more-item svelte-jmeys3">数据来源： <!></div> <!> <div class="input-more-item svelte-jmeys3">默认值： <!></div> <div class="input-more-item svelte-jmeys3">参数描述： <!></div> <div class="input-more-item svelte-jmeys3"><!></div></div>'), dx = /* @__PURE__ */ te('<div class="input-item svelte-jmeys3"><!></div> <div class="input-item svelte-jmeys3"><!></div> <div class="input-item svelte-jmeys3"><!></div>', 1);
const fx = {
  hash: "svelte-jmeys3",
  code: ".input-item.svelte-jmeys3 {display:flex;align-items:center;}.input-more-setting.svelte-jmeys3 {display:flex;flex-direction:column;gap:10px;padding:10px;background:var(--background);border:1px solid var(--border);border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-jmeys3 .input-more-item:where(.svelte-jmeys3) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:var(--muted-foreground);}"
};
function yh(e, t) {
  ce(t, !0), Fe(e, fx), Sn(() => {
    u(c).refType || y({ value: "ref" });
  });
  const n = p(t, "parameter", 7), r = p(t, "index", 7), o = p(t, "dataKeyName", 7), i = p(t, "useChildrenOnly", 7), s = p(t, "showContentType", 7, !1);
  let a = Qe(), l = Yn(a), c = /* @__PURE__ */ P(() => ({
    ...n(),
    ...l?.current?.data?.[o()][r()]
  }));
  const { updateNodeData: d } = ut(), f = (M, x) => {
    d(a, (C) => {
      let A = C.data?.[o()];
      return A[r()] = { ...A[r()], [M]: x }, { [o()]: A };
    });
  }, h = (M, x) => {
    const C = x.target.value;
    f(M, C);
  }, g = (M) => {
    const x = M.value;
    f("ref", x);
  }, y = (M) => {
    const x = M.value;
    f("refType", x);
  }, w = (M) => {
    const x = M.value;
    f("contentType", x);
  };
  let b;
  const m = () => {
    d(a, (M) => {
      let x = M.data?.[o()];
      return x.splice(r(), 1), { [o()]: [...x] };
    }), b?.hide();
  };
  let k = mh(i());
  var E = {
    get parameter() {
      return n();
    },
    set parameter(M) {
      n(M), v();
    },
    get index() {
      return r();
    },
    set index(M) {
      r(M), v();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(M) {
      o(M), v();
    },
    get useChildrenOnly() {
      return i();
    },
    set useChildrenOnly(M) {
      i(M), v();
    },
    get showContentType() {
      return s();
    },
    set showContentType(M = !1) {
      s(M), v();
    }
  }, _ = dx(), S = ie(_), T = F(S);
  {
    let M = /* @__PURE__ */ P(() => u(c).nameDisabled === !0);
    et(T, {
      style: "width: 100%;",
      get value() {
        return u(c).name;
      },
      placeholder: "请输入参数名称",
      get disabled() {
        return u(M);
      },
      oninput: (x) => h("name", x)
    });
  }
  B(S);
  var z = I(S, 2), V = F(z);
  {
    var L = (M) => {
      et(M, {
        get value() {
          return u(c).value;
        },
        placeholder: "请输入参数值",
        oninput: (x) => h("value", x)
      });
    }, Y = (M) => {
      var x = Ee(), C = ie(x);
      {
        var A = (D) => {
          {
            let K = /* @__PURE__ */ P(() => [u(c).ref]);
            ft(D, {
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
        ae(
          C,
          (D) => {
            u(c).refType !== "input" && D(A);
          },
          !0
        );
      }
      O(M, x);
    };
    ae(V, (M) => {
      u(c).refType === "fixed" ? M(L) : M(Y, !1);
    });
  }
  B(z);
  var H = I(z, 2), N = F(H);
  return St(
    mr(N, {
      placement: "bottom",
      floating: (x) => {
        var C = ux(), A = F(C), D = I(F(A));
        {
          let j = /* @__PURE__ */ P(() => u(c).refType ? [u(c).refType] : []);
          ft(D, {
            get items() {
              return v2;
            },
            style: "width: 100%",
            defaultValue: ["ref"],
            get value() {
              return u(j);
            },
            onSelect: y
          });
        }
        B(A);
        var K = I(A, 2);
        {
          var X = (j) => {
            var Q = cx(), ne = I(F(Q));
            {
              let J = /* @__PURE__ */ P(() => u(c).contentType ? [u(c).contentType] : []);
              ft(ne, {
                get items() {
                  return ol;
                },
                style: "width: 100%",
                defaultValue: ["text"],
                get value() {
                  return u(J);
                },
                onSelect: w
              });
            }
            B(Q), O(j, Q);
          };
          ae(K, (j) => {
            s() && j(X);
          });
        }
        var $ = I(K, 2), W = I(F($));
        Ke(W, {
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
        var U = I($, 2), Z = I(F(U));
        Ke(Z, {
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
        var G = I(U, 2), R = F(G);
        Ve(R, {
          onclick: m,
          children: (j, Q) => {
            ye();
            var ne = Ne("删除");
            O(j, ne);
          },
          $$slots: { default: !0 }
        }), B(G), B(C), O(x, C);
      },
      children: (x, C) => {
        oi(x, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (x) => b = x,
    () => b
  ), B(H), O(e, _), ue(E);
}
le(
  yh,
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
var hx = /* @__PURE__ */ te('<div class="input-header svelte-32f1pk">参数名称</div> <div class="input-header svelte-32f1pk">参数值</div> <div class="input-header svelte-32f1pk"></div>', 1), gx = /* @__PURE__ */ te('<div class="none-params svelte-32f1pk"> </div>'), vx = /* @__PURE__ */ te('<div class="input-container svelte-32f1pk"><!> <!></div>');
const px = {
  hash: "svelte-32f1pk",
  code: `.input-container.svelte-32f1pk {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-32f1pk .none-params:where(.svelte-32f1pk) {font-size:12px;background:var(--secondary);height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-32f1pk .input-header:where(.svelte-32f1pk) {font-size:12px;color:var(--muted-foreground);}`
};
function Mt(e, t) {
  ce(t, !0), Fe(e, px);
  const n = p(t, "noneParameterText", 7, "无输入参数"), r = p(t, "dataKeyName", 7, "parameters"), o = p(t, "useChildrenOnly", 7), i = p(t, "showContentType", 7, !1);
  let s = Qe(), a = Yn(s), l = /* @__PURE__ */ P(() => [...a?.current?.data?.[r()] || []]);
  var c = {
    get noneParameterText() {
      return n();
    },
    set noneParameterText(y = "无输入参数") {
      n(y), v();
    },
    get dataKeyName() {
      return r();
    },
    set dataKeyName(y = "parameters") {
      r(y), v();
    },
    get useChildrenOnly() {
      return o();
    },
    set useChildrenOnly(y) {
      o(y), v();
    },
    get showContentType() {
      return i();
    },
    set showContentType(y = !1) {
      i(y), v();
    }
  }, d = vx(), f = F(d);
  {
    var h = (y) => {
      var w = hx();
      ye(4), O(y, w);
    };
    ae(f, (y) => {
      u(l).length !== 0 && y(h);
    });
  }
  var g = I(f, 2);
  return Ct(
    g,
    19,
    () => u(l),
    (y) => y.id,
    (y, w, b) => {
      yh(y, {
        get parameter() {
          return u(w);
        },
        get index() {
          return u(b);
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
      var w = gx(), b = F(w, !0);
      B(w), Se(() => We(b, n())), O(y, w);
    }
  ), B(d), O(e, d), ue(c);
}
le(
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
var mx = /* @__PURE__ */ pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), yx = /* @__PURE__ */ pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), wx = /* @__PURE__ */ te('<div class="heading svelte-1fiuxu3"><!> <!></div> <!>', 1);
const bx = {
  hash: "svelte-1fiuxu3",
  code: ".heading.svelte-1fiuxu3 {display:flex;margin-bottom:10px;}"
};
function wh(e, t) {
  ce(t, !0), Fe(e, bx);
  const n = p(t, "data", 7), r = /* @__PURE__ */ Ze(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Qe(), { addParameter: i } = hn();
  var s = {
    get data() {
      return n();
    },
    set data(a) {
      n(a), v();
    }
  };
  return en(e, Ye(
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
        var c = mx();
        O(l, c);
      },
      children: (l, c) => {
        var d = wx(), f = ie(d), h = F(f);
        ze(h, {
          level: 3,
          children: (w, b) => {
            ye();
            var m = Ne("输出参数");
            O(w, m);
          },
          $$slots: { default: !0 }
        });
        var g = I(h, 2);
        Ve(g, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs", { name: "output" });
          },
          children: (w, b) => {
            var m = yx();
            O(w, m);
          },
          $$slots: { default: !0 }
        }), B(f);
        var y = I(f, 2);
        Mt(y, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs",
          showContentType: !0
        }), O(l, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(s);
}
le(wh, { data: {} }, [], [], !0);
const Rs = (e) => JSON.parse(JSON.stringify(e));
var xx = /* @__PURE__ */ pe('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), _x = /* @__PURE__ */ te('<div class="input-more-item svelte-hwmib9"><!></div>'), Cx = /* @__PURE__ */ te('<div class="input-more-setting svelte-hwmib9"><div class="input-more-item svelte-hwmib9">默认值： <!></div> <div class="input-more-item svelte-hwmib9">参数描述： <!></div> <!></div>'), kx = /* @__PURE__ */ te('<div class="input-item svelte-hwmib9"><!> <!></div> <div class="input-item svelte-hwmib9"><!> <!></div> <div class="input-item svelte-hwmib9"><!></div>', 1);
const Sx = {
  hash: "svelte-hwmib9",
  code: ".input-item.svelte-hwmib9 {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-hwmib9 {display:flex;flex-direction:column;gap:10px;padding:10px;background:var(--background);border:1px solid var(--border);border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-hwmib9 .input-more-item:where(.svelte-hwmib9) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:var(--muted-foreground);}"
};
function bh(e, t) {
  ce(t, !0), Fe(e, Sx);
  const n = p(t, "parameter", 7), r = p(t, "position", 7), o = p(t, "dataKeyName", 7), i = p(t, "placeholder", 7, "请输入参数值");
  let s = Qe(), a = Yn(s), l = /* @__PURE__ */ P(() => {
    let N = a?.current?.data?.[o()], M;
    if (N && r().length > 0) {
      let x = N;
      for (let C = 0; C < r().length; C++) {
        const A = r()[C];
        C == r().length - 1 ? M = x[A] : x = x[A].children;
      }
    }
    return { ...n(), ...M };
  });
  const { updateNodeData: c } = ut(), d = (N, M) => {
    c(s, (x) => {
      const C = x.data?.[o()];
      if (C && r().length > 0) {
        let A = C;
        for (let D = 0; D < r().length; D++) {
          const K = r()[D];
          D == r().length - 1 ? A[K] = { ...A[K], [N]: M } : A = A[K].children;
        }
      }
      return { [o()]: [...Rs(C)] };
    });
  }, f = (N, M) => {
    const x = M.target.value;
    d(N, x);
  }, h = (N) => {
    const M = N.value;
    d("dataType", M);
  };
  let g;
  const y = () => {
    c(s, (N) => {
      let M = N.data?.[o()];
      if (M && r().length > 0) {
        let x = M;
        for (let C = 0; C < r().length; C++) {
          const A = r()[C];
          C == r().length - 1 ? x.splice(A, 1) : x = x[A].children;
        }
      }
      return { [o()]: [...Rs(M)] };
    }), g?.hide();
  }, w = () => {
    c(s, (N) => {
      let M = N.data?.[o()];
      if (M && r().length > 0) {
        let x = M;
        for (let C = 0; C < r().length; C++) {
          const A = r()[C];
          C == r().length - 1 ? x[A].children ? x[A].children.push({ id: Bn(), name: "newParam", dataType: "String" }) : x[A].children = [{ id: Bn(), name: "newParam", dataType: "String" }] : x = x[A].children;
        }
      }
      return { [o()]: [...Rs(M)] };
    });
  };
  var b = {
    get parameter() {
      return n();
    },
    set parameter(N) {
      n(N), v();
    },
    get position() {
      return r();
    },
    set position(N) {
      r(N), v();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(N) {
      o(N), v();
    },
    get placeholder() {
      return i();
    },
    set placeholder(N = "请输入参数值") {
      i(N), v();
    }
  }, m = kx(), k = ie(m), E = F(k);
  {
    var _ = (N) => {
      var M = Ee(), x = ie(M);
      Ct(x, 17, r, Ur, (C, A) => {
        ye();
        var D = Ne(" ");
        O(C, D);
      }), O(N, M);
    };
    ae(E, (N) => {
      r().length > 1 && N(_);
    });
  }
  var S = I(E, 2);
  {
    let N = /* @__PURE__ */ P(() => u(l).nameDisabled === !0);
    et(S, {
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
        return u(N);
      }
    });
  }
  B(k);
  var T = I(k, 2), z = F(T);
  {
    let N = /* @__PURE__ */ P(() => u(l).dataTypeItems || g2), M = /* @__PURE__ */ P(() => u(l).dataType ? [u(l).dataType] : []), x = /* @__PURE__ */ P(() => u(l).dataTypeDisabled === !0);
    ft(z, {
      get items() {
        return u(N);
      },
      style: "width: 100%",
      defaultValue: ["String"],
      get value() {
        return u(M);
      },
      get disabled() {
        return u(x);
      },
      onSelect: h
    });
  }
  var V = I(z, 2);
  {
    var L = (N) => {
      Ve(N, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: w,
        children: (M, x) => {
          var C = xx();
          O(M, C);
        },
        $$slots: { default: !0 }
      });
    };
    ae(V, (N) => {
      (u(l).dataType === "Object" || u(l).dataType === "Array") && u(l).addChildDisabled !== !0 && N(L);
    });
  }
  B(T);
  var Y = I(T, 2), H = F(Y);
  return St(
    mr(H, {
      placement: "bottom",
      floating: (M) => {
        var x = Cx(), C = F(x), A = I(F(C));
        {
          let W = /* @__PURE__ */ P(() => u(l).defaultValue || "");
          Ke(A, {
            rows: 1,
            style: "width: 100%;",
            get value() {
              return u(W);
            },
            onchange: (U) => {
              f("defaultValue", U);
            }
          });
        }
        B(C);
        var D = I(C, 2), K = I(F(D));
        {
          let W = /* @__PURE__ */ P(() => u(l).description || "");
          Ke(K, {
            rows: 3,
            style: "width: 100%;",
            get value() {
              return u(W);
            },
            onchange: (U) => {
              f("description", U);
            }
          });
        }
        B(D);
        var X = I(D, 2);
        {
          var $ = (W) => {
            var U = _x(), Z = F(U);
            Ve(Z, {
              onclick: y,
              children: (G, R) => {
                ye();
                var j = Ne("删除");
                O(G, j);
              },
              $$slots: { default: !0 }
            }), B(U), O(W, U);
          };
          ae(X, (W) => {
            u(l).deleteDisabled !== !0 && W($);
          });
        }
        B(x), O(M, x);
      },
      children: (M, x) => {
        oi(M, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (M) => g = M,
    () => g
  ), B(Y), O(e, m), ue(b);
}
le(
  bh,
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
var Ex = /* @__PURE__ */ te("<!> <!>", 1), Nx = /* @__PURE__ */ te('<div class="none-params svelte-1oz5kx0"> </div>'), Px = /* @__PURE__ */ te('<div class="input-header svelte-1oz5kx0">参数名称</div> <div class="input-header svelte-1oz5kx0">参数类型</div> <div class="input-header svelte-1oz5kx0"></div>', 1), Tx = /* @__PURE__ */ te('<div class="input-container svelte-1oz5kx0"><!> <!></div>');
const $x = {
  hash: "svelte-1oz5kx0",
  code: `.input-container.svelte-1oz5kx0 {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1oz5kx0 .none-params:where(.svelte-1oz5kx0) {font-size:12px;background:var(--secondary);height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1oz5kx0 .input-header:where(.svelte-1oz5kx0) {font-size:12px;color:var(--muted-foreground);}`
};
function Xn(e, t) {
  ce(t, !0), Fe(e, $x);
  const n = (y, w = ht, b = ht) => {
    var m = Ee(), k = ie(m);
    Ct(
      k,
      19,
      w,
      (E) => `${E.id}_${E.children ? E.children.length : 0}`,
      (E, _, S) => {
        var T = Ex(), z = ie(T);
        {
          let Y = /* @__PURE__ */ P(() => [...b(), u(S)]);
          bh(z, {
            get parameter() {
              return u(_);
            },
            get position() {
              return u(Y);
            },
            get dataKeyName() {
              return o();
            },
            get placeholder() {
              return i();
            }
          });
        }
        var V = I(z, 2);
        {
          var L = (Y) => {
            {
              let H = /* @__PURE__ */ P(() => [...b(), u(S)]);
              n(Y, () => u(_).children, () => u(H));
            }
          };
          ae(V, (Y) => {
            u(_).children && Y(L);
          });
        }
        O(E, T);
      },
      (E) => {
        var _ = Ee(), S = ie(_);
        {
          var T = (z) => {
            var V = Nx(), L = F(V, !0);
            B(V), Se(() => We(L, r())), O(z, V);
          };
          ae(S, (z) => {
            b().length === 0 && z(T);
          });
        }
        O(E, _);
      }
    ), O(y, m);
  }, r = p(t, "noneParameterText", 7, "无输出参数"), o = p(t, "dataKeyName", 7, "outputDefs"), i = p(t, "placeholder", 7, "请输入参数名称");
  let s = Qe(), a = Yn(s), l = /* @__PURE__ */ P(() => [...a?.current?.data?.[o()] || []]);
  var c = {
    get noneParameterText() {
      return r();
    },
    set noneParameterText(y = "无输出参数") {
      r(y), v();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(y = "outputDefs") {
      o(y), v();
    },
    get placeholder() {
      return i();
    },
    set placeholder(y = "请输入参数名称") {
      i(y), v();
    }
  }, d = Tx(), f = F(d);
  {
    var h = (y) => {
      var w = Px();
      ye(4), O(y, w);
    };
    ae(f, (y) => {
      u(l).length !== 0 && y(h);
    });
  }
  var g = I(f, 2);
  return n(g, () => u(l) || [], () => []), B(d), O(e, d), ue(c);
}
le(Xn, { noneParameterText: {}, dataKeyName: {}, placeholder: {} }, [], [], !0);
var Mx = /* @__PURE__ */ pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), Ax = /* @__PURE__ */ pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Dx = /* @__PURE__ */ pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ox = /* @__PURE__ */ te('<div class="llm-setting svelte-j81vcl"><div class="setting-title svelte-j81vcl">采样参数</div> <div class="setting-item svelte-j81vcl"><div class="slider-container svelte-j81vcl"><span class="svelte-j81vcl"> </span> <input class="nodrag svelte-j81vcl" type="range" min="0" max="1" step="0.1"/></div></div> <div class="setting-item svelte-j81vcl"><div class="slider-container svelte-j81vcl"><span class="svelte-j81vcl"> </span> <input class="nodrag svelte-j81vcl" type="range" min="0" max="1" step="0.1"/></div></div> <div class="setting-item svelte-j81vcl"><div class="slider-container svelte-j81vcl"><span class="svelte-j81vcl"> </span> <input class="nodrag svelte-j81vcl" type="range" min="0" max="100" step="1"/></div></div></div>'), Vx = /* @__PURE__ */ te('<div class="setting-title svelte-j81vcl">JSON Schema</div> <div class="setting-item svelte-j81vcl"><!></div>', 1), zx = /* @__PURE__ */ te('<div class="heading svelte-j81vcl"><!> <!></div> <!> <div class="heading svelte-j81vcl" style="padding-top: 10px"><!> <!></div> <!> <!> <div class="setting-title svelte-j81vcl">模型</div> <div class="setting-item svelte-j81vcl"><!> <!></div> <div class="setting-title svelte-j81vcl">系统提示词</div> <div class="setting-item svelte-j81vcl"><!></div> <div class="setting-title svelte-j81vcl">用户提示词</div> <div class="setting-item svelte-j81vcl"><!></div> <!> <div class="heading svelte-j81vcl"><!> <!></div> <!>', 1);
const Ix = {
  hash: "svelte-j81vcl",
  code: `.heading.svelte-j81vcl {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-j81vcl {font-size:12px;color:var(--secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-j81vcl {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}\r
\r
    /* 新增样式 */.slider-container.svelte-j81vcl {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-j81vcl span:where(.svelte-j81vcl) {font-size:12px;color:var(--muted-foreground);display:flex;justify-content:space-between;align-items:center;}.llm-setting.svelte-j81vcl {width:200px;background:var(--background);padding:10px;border-radius:5px;box-shadow:0 0 10px rgba(0, 0, 0, 0.1);border:1px solid var(--border);}input[type='range'].svelte-j81vcl {width:100%;height:4px;background:var(--muted);border-radius:2px;outline:none;-webkit-appearance:none;}input[type='range'].svelte-j81vcl::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:var(--primary);border-radius:50%;cursor:pointer;}`
};
function xh(e, t) {
  ce(t, !0), Fe(e, Ix);
  const n = p(t, "data", 7), r = /* @__PURE__ */ Ze(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Qe(), { addParameter: i } = hn(), s = ur();
  let a = /* @__PURE__ */ Pe(xt([]));
  Sn(async () => {
    const f = await s.provider?.llm?.();
    u(a).push(...f || []);
  });
  const { updateNodeData: l } = ut(), c = (f) => {
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
  qe(() => {
    n().outType || c("text");
  });
  var d = {
    get data() {
      return n();
    },
    set data(f) {
      n(f), v();
    }
  };
  return en(e, Ye(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (h) => {
        var g = Mx();
        O(h, g);
      },
      children: (h, g) => {
        var y = zx(), w = ie(y), b = F(w);
        ze(b, {
          level: 3,
          children: (W, U) => {
            ye();
            var Z = Ne("输入参数");
            O(W, Z);
          },
          $$slots: { default: !0 }
        });
        var m = I(b, 2);
        Ve(m, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (W, U) => {
            var Z = Ax();
            O(W, Z);
          },
          $$slots: { default: !0 }
        }), B(w);
        var k = I(w, 2);
        Mt(k, {});
        var E = I(k, 2), _ = F(E);
        ze(_, {
          level: 3,
          children: (W, U) => {
            ye();
            var Z = Ne("图片识别");
            O(W, Z);
          },
          $$slots: { default: !0 }
        });
        var S = I(_, 2);
        Ve(S, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "images");
          },
          children: (W, U) => {
            var Z = Dx();
            O(W, Z);
          },
          $$slots: { default: !0 }
        }), B(E);
        var T = I(E, 2);
        Mt(T, { dataKeyName: "images", noneParameterText: "无图片参数" });
        var z = I(T, 2);
        ze(z, {
          level: 3,
          mt: "10px",
          children: (W, U) => {
            ye();
            var Z = Ne("模型设置");
            O(W, Z);
          },
          $$slots: { default: !0 }
        });
        var V = I(z, 4), L = F(V);
        {
          let W = /* @__PURE__ */ P(() => n().llmId ? [n().llmId] : []);
          ft(L, {
            get items() {
              return u(a);
            },
            style: "width: 100%",
            placeholder: "请选择模型",
            onSelect: (U) => {
              const Z = U.value;
              l(o, () => ({ llmId: Z }));
            },
            get value() {
              return u(W);
            }
          });
        }
        var Y = I(L, 2);
        mr(Y, {
          placement: "bottom",
          floating: (U) => {
            var Z = Ox(), G = I(F(Z), 2), R = F(G), j = F(R), Q = F(j);
            B(j);
            var ne = I(j, 2);
            or(ne), ne.__input = (Te) => l(o, { temperature: parseFloat(Te.target.value) }), B(R), B(G);
            var J = I(G, 2), _e = F(J), oe = F(_e), se = F(oe);
            B(oe);
            var re = I(oe, 2);
            or(re), re.__input = (Te) => l(o, { topP: parseFloat(Te.target.value) }), B(_e), B(J);
            var he = I(J, 2), me = F(he), ke = F(me), fe = F(ke);
            B(ke);
            var be = I(ke, 2);
            or(be), be.__input = (Te) => l(o, { topK: parseInt(Te.target.value) }), B(me), B(he), B(Z), Se(() => {
              We(Q, `Temperature: ${n().temperature ?? 0.5 ?? ""}`), wi(ne, n().temperature ?? 0.5), We(se, `Top P: ${n().topP ?? 0.9 ?? ""}`), wi(re, n().topP ?? 0.9), We(fe, `Top K: ${n().topK ?? 50 ?? ""}`), wi(be, n().topK ?? 50);
            }), O(U, Z);
          },
          children: (U, Z) => {
            oi(U, {});
          },
          $$slots: { floating: !0, default: !0 }
        }), B(V);
        var H = I(V, 4), N = F(H);
        {
          let W = /* @__PURE__ */ P(() => n().systemPrompt || "");
          Ke(N, {
            rows: 5,
            placeholder: "请输入系统提示词",
            style: "width: 100%",
            get value() {
              return u(W);
            },
            oninput: (U) => {
              l(o, { systemPrompt: U.target.value });
            }
          });
        }
        B(H);
        var M = I(H, 4), x = F(M);
        {
          let W = /* @__PURE__ */ P(() => n().userPrompt || "");
          Ke(x, {
            rows: 5,
            placeholder: "请输入用户提示词",
            style: "width: 100%",
            get value() {
              return u(W);
            },
            oninput: (U) => {
              l(o, { userPrompt: U.target.value });
            }
          });
        }
        B(M);
        var C = I(M, 2);
        {
          var A = (W) => {
            var U = Vx(), Z = I(ie(U), 2), G = F(Z);
            {
              let R = /* @__PURE__ */ P(() => n().jsonSchema || "");
              Ke(G, {
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
            B(Z), O(W, U);
          };
          ae(C, (W) => {
            n().outType === "json" && W(A);
          });
        }
        var D = I(C, 2), K = F(D);
        ze(K, {
          level: 3,
          children: (W, U) => {
            ye();
            var Z = Ne("输出参数");
            O(W, Z);
          },
          $$slots: { default: !0 }
        });
        var X = I(K, 2);
        {
          let W = /* @__PURE__ */ P(() => n().outType ? [n().outType] : []);
          ft(X, {
            items: [
              { label: "文本", value: "text" },
              { label: "JSON", value: "json" }
            ],
            style: "width: 100px;margin-left: auto",
            onSelect: (U) => {
              c(U.value);
            },
            get value() {
              return u(W);
            }
          });
        }
        B(D);
        var $ = I(D, 2);
        Xn($, {}), O(h, y);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(d);
}
gr(["input"]);
le(xh, { data: {} }, [], [], !0);
var Lx = /* @__PURE__ */ pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), Hx = /* @__PURE__ */ pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Rx = /* @__PURE__ */ pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Bx = /* @__PURE__ */ te('<div class="heading svelte-1wcsayx"><!> <!></div> <!> <!> <div class="setting-title svelte-1wcsayx">执行引擎</div> <div class="setting-item svelte-1wcsayx"><!></div> <div class="setting-title svelte-1wcsayx">执行代码</div> <div class="setting-item svelte-1wcsayx"><!></div> <div class="heading svelte-1wcsayx"><!> <!></div> <!>', 1);
const Fx = {
  hash: "svelte-1wcsayx",
  code: ".heading.svelte-1wcsayx {display:flex;margin-bottom:10px;}.setting-title.svelte-1wcsayx {font-size:12px;color:var(--secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-1wcsayx {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function _h(e, t) {
  ce(t, !0), Fe(e, Fx);
  const n = p(t, "data", 7), r = /* @__PURE__ */ Ze(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]);
  Sn(() => {
    n().engine || s(o, () => ({ engine: "qlexpress" }));
  });
  const o = Qe(), { addParameter: i } = hn(), { updateNodeData: s } = ut(), a = [
    { label: "JavaScript", value: "js" },
    { label: "Groovy", value: "groovy" },
    { label: "QLExpress", value: "qlexpress" }
  ];
  var l = {
    get data() {
      return n();
    },
    set data(c) {
      n(c), v();
    }
  };
  return en(e, Ye(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (d) => {
        var f = Lx();
        O(d, f);
      },
      children: (d, f) => {
        var h = Bx(), g = ie(h), y = F(g);
        ze(y, {
          level: 3,
          children: (Y, H) => {
            ye();
            var N = Ne("输入参数");
            O(Y, N);
          },
          $$slots: { default: !0 }
        });
        var w = I(y, 2);
        Ve(w, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (Y, H) => {
            var N = Hx();
            O(Y, N);
          },
          $$slots: { default: !0 }
        }), B(g);
        var b = I(g, 2);
        Mt(b, {});
        var m = I(b, 2);
        ze(m, {
          level: 3,
          mt: "10px",
          children: (Y, H) => {
            ye();
            var N = Ne("代码");
            O(Y, N);
          },
          $$slots: { default: !0 }
        });
        var k = I(m, 4), E = F(k);
        {
          let Y = /* @__PURE__ */ P(() => n().engine ? [n().engine] : ["qlexpress"]);
          ft(E, {
            get items() {
              return a;
            },
            style: "width: 100%",
            placeholder: "请选择执行引擎",
            onSelect: (H) => {
              const N = H.value;
              s(o, () => ({ engine: N }));
            },
            get value() {
              return u(Y);
            }
          });
        }
        B(k);
        var _ = I(k, 4), S = F(_);
        {
          let Y = /* @__PURE__ */ P(() => n().code || "");
          Ke(S, {
            rows: 10,
            placeholder: "请输入执行代码，注：输出内容需添加到_result中，如：_result['key'] = value 或者 _result.key = value",
            style: "width: 100%",
            onchange: (H) => {
              s(o, () => ({ code: H.target.value }));
            },
            get value() {
              return u(Y);
            }
          });
        }
        B(_);
        var T = I(_, 2), z = F(T);
        ze(z, {
          level: 3,
          mt: "10px",
          children: (Y, H) => {
            ye();
            var N = Ne("输出参数");
            O(Y, N);
          },
          $$slots: { default: !0 }
        });
        var V = I(z, 2);
        Ve(V, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (Y, H) => {
            var N = Rx();
            O(Y, N);
          },
          $$slots: { default: !0 }
        }), B(T);
        var L = I(T, 2);
        Xn(L, {}), O(d, h);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(l);
}
le(_h, { data: {} }, [], [], !0);
var Kx = /* @__PURE__ */ pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>'), Zx = /* @__PURE__ */ pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Wx = /* @__PURE__ */ te('<div class="heading svelte-1lcrzpc"><!> <!></div> <!> <!> <div class="setting-item svelte-1lcrzpc"><!></div> <div class="heading svelte-1lcrzpc"><!></div> <!>', 1);
const Yx = {
  hash: "svelte-1lcrzpc",
  code: ".heading.svelte-1lcrzpc {display:flex;margin-bottom:10px;}.setting-item.svelte-1lcrzpc {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Ch(e, t) {
  ce(t, !0), Fe(e, Yx);
  const n = p(t, "data", 7), r = /* @__PURE__ */ Ze(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Qe(), { addParameter: i } = hn(), { updateNodeData: s } = ut();
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
      n(l), v();
    }
  };
  return en(e, Ye(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (c) => {
        var d = Kx();
        O(c, d);
      },
      children: (c, d) => {
        var f = Wx(), h = ie(f), g = F(h);
        ze(g, {
          level: 3,
          children: (T, z) => {
            ye();
            var V = Ne("输入参数");
            O(T, V);
          },
          $$slots: { default: !0 }
        });
        var y = I(g, 2);
        Ve(y, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (T, z) => {
            var V = Zx();
            O(T, V);
          },
          $$slots: { default: !0 }
        }), B(h);
        var w = I(h, 2);
        Mt(w, {});
        var b = I(w, 2);
        ze(b, {
          level: 3,
          mt: "10px",
          mb: "10px",
          children: (T, z) => {
            ye();
            var V = Ne("模板内容");
            O(T, V);
          },
          $$slots: { default: !0 }
        });
        var m = I(b, 2), k = F(m);
        {
          let T = /* @__PURE__ */ P(() => n().template || "");
          Ke(k, {
            rows: 10,
            placeholder: "请输入模板内容",
            style: "width: 100%",
            onchange: (z) => {
              s(o, () => ({ template: z.target.value }));
            },
            get value() {
              return u(T);
            }
          });
        }
        B(m);
        var E = I(m, 2), _ = F(E);
        ze(_, {
          level: 3,
          mt: "10px",
          children: (T, z) => {
            ye();
            var V = Ne("输出参数");
            O(T, V);
          },
          $$slots: { default: !0 }
        }), B(E);
        var S = I(E, 2);
        Xn(S, {}), O(c, f);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(a);
}
le(Ch, { data: {} }, [], [], !0);
var jx = /* @__PURE__ */ pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), Xx = /* @__PURE__ */ pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), qx = /* @__PURE__ */ pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Gx = /* @__PURE__ */ te('<!> <div class="radio-group svelte-19uflw6"><label class="svelte-19uflw6"><!>none</label> <label class="svelte-19uflw6"><!>form-data</label> <label class="svelte-19uflw6"><!>x-www-form-urlencoded</label> <label class="svelte-19uflw6"><!>json</label> <label class="svelte-19uflw6"><!>raw</label></div>', 1), Ux = /* @__PURE__ */ pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Jx = /* @__PURE__ */ te('<div class="heading svelte-19uflw6" style="padding-top: 10px"><!> <!></div> <!>', 1), Qx = /* @__PURE__ */ pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), e_ = /* @__PURE__ */ te('<div class="heading svelte-19uflw6" style="padding-top: 10px"><!> <!></div> <!>', 1), t_ = /* @__PURE__ */ te('<div style="width: 100%"><!></div>'), n_ = /* @__PURE__ */ te('<div style="width: 100%"><!></div>'), r_ = /* @__PURE__ */ pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), o_ = /* @__PURE__ */ te('<div class="heading svelte-19uflw6"><!> <!></div> <!> <!> <div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-19uflw6"><!> <!></div> <!> <!> <!> <!> <!> <!> <div class="heading svelte-19uflw6"><!> <!></div> <!>', 1);
const i_ = {
  hash: "svelte-19uflw6",
  code: ".heading.svelte-19uflw6 {display:flex;margin-bottom:10px;}.radio-group.svelte-19uflw6 {display:flex;margin:10px 0;flex-wrap:wrap;}.radio-group.svelte-19uflw6 label:where(.svelte-19uflw6) {display:flex;font-size:14px;box-sizing:border-box;}"
};
function kh(e, t) {
  ce(t, !0), Fe(e, i_);
  const n = p(t, "data", 7), r = /* @__PURE__ */ Ze(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]);
  Sn(() => {
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
  ], i = Qe(), { addParameter: s } = hn(), { updateNodeData: a } = ut();
  var l = {
    get data() {
      return n();
    },
    set data(c) {
      n(c), v();
    }
  };
  return en(e, Ye(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (d) => {
        var f = jx();
        O(d, f);
      },
      children: (d, f) => {
        var h = o_(), g = ie(h), y = F(g);
        ze(y, {
          level: 3,
          children: (R, j) => {
            ye();
            var Q = Ne("输入参数");
            O(R, Q);
          },
          $$slots: { default: !0 }
        });
        var w = I(y, 2);
        Ve(w, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i);
          },
          children: (R, j) => {
            var Q = Xx();
            O(R, Q);
          },
          $$slots: { default: !0 }
        }), B(g);
        var b = I(g, 2);
        Mt(b, {});
        var m = I(b, 2);
        ze(m, {
          level: 3,
          mt: "10px",
          children: (R, j) => {
            ye();
            var Q = Ne("URL 地址");
            O(R, Q);
          },
          $$slots: { default: !0 }
        });
        var k = I(m, 2), E = F(k), _ = F(E);
        {
          let R = /* @__PURE__ */ P(() => n().method ? [n().method] : ["get"]);
          ft(_, {
            get items() {
              return o;
            },
            style: "width: 100%",
            placeholder: "请选择请求方式",
            onSelect: (j) => {
              const Q = j.value;
              a(i, () => ({ method: Q }));
            },
            get value() {
              return u(R);
            }
          });
        }
        B(E);
        var S = I(E, 2), T = F(S);
        {
          let R = /* @__PURE__ */ P(() => n().url || "");
          et(T, {
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
        var z = I(k, 2), V = F(z);
        ze(V, {
          level: 3,
          children: (R, j) => {
            ye();
            var Q = Ne("Http 头信息");
            O(R, Q);
          },
          $$slots: { default: !0 }
        });
        var L = I(V, 2);
        Ve(L, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "headers");
          },
          children: (R, j) => {
            var Q = qx();
            O(R, Q);
          },
          $$slots: { default: !0 }
        }), B(z);
        var Y = I(z, 2);
        Mt(Y, { dataKeyName: "headers" });
        var H = I(Y, 2);
        {
          var N = (R) => {
            var j = Gx(), Q = ie(j);
            ze(Q, {
              level: 3,
              mt: "10px",
              children: (Te, q) => {
                ye();
                var at = Ne("Body");
                O(Te, at);
              },
              $$slots: { default: !0 }
            });
            var ne = I(Q, 2), J = F(ne), _e = F(J);
            {
              let Te = /* @__PURE__ */ P(() => !n().bodyType || n().bodyType === "");
              et(_e, {
                type: "radio",
                value: "",
                get checked() {
                  return u(Te);
                },
                onchange: (q) => {
                  q.target?.checked && a(i, { bodyType: "" });
                }
              });
            }
            ye(), B(J);
            var oe = I(J, 2), se = F(oe);
            {
              let Te = /* @__PURE__ */ P(() => n().bodyType === "form-data");
              et(se, {
                type: "radio",
                value: "form-data",
                get checked() {
                  return u(Te);
                },
                onchange: (q) => {
                  q.target?.checked && a(i, { bodyType: "form-data" });
                }
              });
            }
            ye(), B(oe);
            var re = I(oe, 2), he = F(re);
            {
              let Te = /* @__PURE__ */ P(() => n().bodyType === "x-www-form-urlencoded");
              et(he, {
                type: "radio",
                value: "x-www-form-urlencoded",
                get checked() {
                  return u(Te);
                },
                onchange: (q) => {
                  q.target?.checked && a(i, { bodyType: "x-www-form-urlencoded" });
                }
              });
            }
            ye(), B(re);
            var me = I(re, 2), ke = F(me);
            {
              let Te = /* @__PURE__ */ P(() => n().bodyType === "json");
              et(ke, {
                type: "radio",
                value: "json",
                get checked() {
                  return u(Te);
                },
                onchange: (q) => {
                  q.target?.checked && a(i, { bodyType: "json" });
                }
              });
            }
            ye(), B(me);
            var fe = I(me, 2), be = F(fe);
            {
              let Te = /* @__PURE__ */ P(() => n().bodyType === "raw");
              et(be, {
                type: "radio",
                value: "raw",
                get checked() {
                  return u(Te);
                },
                onchange: (q) => {
                  q.target?.checked && a(i, { bodyType: "raw" });
                }
              });
            }
            ye(), B(fe), B(ne), O(R, j);
          };
          ae(H, (R) => {
            (n().method === "post" || n().method === "put" || n().method === "delete" || n().method === "patch") && R(N);
          });
        }
        var M = I(H, 2);
        {
          var x = (R) => {
            var j = Jx(), Q = ie(j), ne = F(Q);
            ze(ne, {
              level: 3,
              children: (oe, se) => {
                ye();
                var re = Ne("参数");
                O(oe, re);
              },
              $$slots: { default: !0 }
            });
            var J = I(ne, 2);
            Ve(J, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formData");
              },
              children: (oe, se) => {
                var re = Ux();
                O(oe, re);
              },
              $$slots: { default: !0 }
            }), B(Q);
            var _e = I(Q, 2);
            Mt(_e, { dataKeyName: "formData" }), O(R, j);
          };
          ae(M, (R) => {
            n().bodyType === "form-data" && R(x);
          });
        }
        var C = I(M, 2);
        {
          var A = (R) => {
            var j = e_(), Q = ie(j), ne = F(Q);
            ze(ne, {
              level: 3,
              children: (oe, se) => {
                ye();
                var re = Ne("Body 参数");
                O(oe, re);
              },
              $$slots: { default: !0 }
            });
            var J = I(ne, 2);
            Ve(J, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formUrlencoded");
              },
              children: (oe, se) => {
                var re = Qx();
                O(oe, re);
              },
              $$slots: { default: !0 }
            }), B(Q);
            var _e = I(Q, 2);
            Mt(_e, { dataKeyName: "formUrlencoded" }), O(R, j);
          };
          ae(C, (R) => {
            n().bodyType === "x-www-form-urlencoded" && R(A);
          });
        }
        var D = I(C, 2);
        {
          var K = (R) => {
            var j = t_(), Q = F(j);
            Ke(Q, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入 json 信息",
              get value() {
                return n().bodyJson;
              },
              oninput: (ne) => {
                a(i, { bodyJson: ne.target.value });
              }
            }), B(j), O(R, j);
          };
          ae(D, (R) => {
            n().bodyType === "json" && R(K);
          });
        }
        var X = I(D, 2);
        {
          var $ = (R) => {
            var j = n_(), Q = F(j);
            Ke(Q, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入请求信息",
              get value() {
                return n().bodyRaw;
              },
              oninput: (ne) => {
                a(i, { bodyRaw: ne.target.value });
              }
            }), B(j), O(R, j);
          };
          ae(X, (R) => {
            n().bodyType === "raw" && R($);
          });
        }
        var W = I(X, 2), U = F(W);
        ze(U, {
          level: 3,
          mt: "10px",
          children: (R, j) => {
            ye();
            var Q = Ne("输出参数");
            O(R, Q);
          },
          $$slots: { default: !0 }
        });
        var Z = I(U, 2);
        Ve(Z, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "outputDefs");
          },
          children: (R, j) => {
            var Q = r_();
            O(R, Q);
          },
          $$slots: { default: !0 }
        }), B(W);
        var G = I(W, 2);
        Xn(G, {}), O(d, h);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(l);
}
le(kh, { data: {} }, [], [], !0);
var s_ = /* @__PURE__ */ pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>'), a_ = /* @__PURE__ */ pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), l_ = /* @__PURE__ */ te('<div class="heading svelte-ddi5i"><!> <!></div> <!> <!> <div class="setting-title svelte-ddi5i">知识库</div> <div class="setting-item svelte-ddi5i"><!></div> <div class="setting-title svelte-ddi5i">关键字</div> <div class="setting-item svelte-ddi5i"><!></div> <div class="setting-title svelte-ddi5i">获取数据量</div> <div class="setting-item svelte-ddi5i"><!></div> <div class="heading svelte-ddi5i"><!></div> <!>', 1);
const c_ = {
  hash: "svelte-ddi5i",
  code: ".heading.svelte-ddi5i {display:flex;margin-bottom:10px;}.setting-title.svelte-ddi5i {font-size:12px;color:var(--secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-ddi5i {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Sh(e, t) {
  ce(t, !0), Fe(e, c_);
  const n = p(t, "data", 7), r = /* @__PURE__ */ Ze(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Qe(), { addParameter: i } = hn(), s = ur();
  let a = /* @__PURE__ */ Pe(xt([]));
  Sn(async () => {
    const d = await s.provider?.knowledge?.();
    u(a).push(...d || []);
  });
  const { updateNodeData: l } = ut();
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
  var c = {
    get data() {
      return n();
    },
    set data(d) {
      n(d), v();
    }
  };
  return en(e, Ye(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (f) => {
        var h = s_();
        O(f, h);
      },
      children: (f, h) => {
        var g = l_(), y = ie(g), w = F(y);
        ze(w, {
          level: 3,
          children: (N, M) => {
            ye();
            var x = Ne("输入参数");
            O(N, x);
          },
          $$slots: { default: !0 }
        });
        var b = I(w, 2);
        Ve(b, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (N, M) => {
            var x = a_();
            O(N, x);
          },
          $$slots: { default: !0 }
        }), B(y);
        var m = I(y, 2);
        Mt(m, {});
        var k = I(m, 2);
        ze(k, {
          level: 3,
          mt: "10px",
          children: (N, M) => {
            ye();
            var x = Ne("知识库设置");
            O(N, x);
          },
          $$slots: { default: !0 }
        });
        var E = I(k, 4), _ = F(E);
        {
          let N = /* @__PURE__ */ P(() => n().knowledgeId ? [n().knowledgeId] : []);
          ft(_, {
            get items() {
              return u(a);
            },
            style: "width: 100%",
            placeholder: "请选择知识库",
            onSelect: (M) => {
              const x = M.value;
              l(o, () => ({ knowledgeId: x }));
            },
            get value() {
              return u(N);
            }
          });
        }
        B(E);
        var S = I(E, 4), T = F(S);
        et(T, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (N) => {
            const M = N.target.value;
            l(o, () => ({ keyword: M }));
          }
        }), B(S);
        var z = I(S, 4), V = F(z);
        {
          let N = /* @__PURE__ */ P(() => n().limit || "");
          et(V, {
            placeholder: "搜索的数据条数",
            style: "width: 100%",
            onchange: (M) => {
              const x = M.target.value;
              l(o, () => ({ limit: x }));
            },
            get value() {
              return u(N);
            }
          });
        }
        B(z);
        var L = I(z, 2), Y = F(L);
        ze(Y, {
          level: 3,
          mt: "10px",
          children: (N, M) => {
            ye();
            var x = Ne("输出参数");
            O(N, x);
          },
          $$slots: { default: !0 }
        }), B(L);
        var H = I(L, 2);
        Xn(H, {}), O(f, g);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(c);
}
le(Sh, { data: {} }, [], [], !0);
var u_ = /* @__PURE__ */ pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>'), d_ = /* @__PURE__ */ pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), f_ = /* @__PURE__ */ te('<div class="heading svelte-1qblm04"><!> <!></div> <!> <!> <div class="setting-title svelte-1qblm04">搜索引擎</div> <div class="setting-item svelte-1qblm04"><!></div> <div class="setting-title svelte-1qblm04">关键字</div> <div class="setting-item svelte-1qblm04"><!></div> <div class="setting-title svelte-1qblm04">搜索数据量</div> <div class="setting-item svelte-1qblm04"><!></div> <div class="heading svelte-1qblm04"><!></div> <!>', 1);
const h_ = {
  hash: "svelte-1qblm04",
  code: ".heading.svelte-1qblm04 {display:flex;margin-bottom:10px;}.setting-title.svelte-1qblm04 {font-size:12px;color:var(--secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-1qblm04 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Eh(e, t) {
  ce(t, !0), Fe(e, h_);
  const n = p(t, "data", 7), r = /* @__PURE__ */ Ze(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Qe(), { addParameter: i } = hn(), s = ur();
  let a = /* @__PURE__ */ Pe(xt([]));
  Sn(async () => {
    const d = await s.provider?.searchEngine?.();
    u(a).push(...d || []);
  });
  const { updateNodeData: l } = ut();
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
  var c = {
    get data() {
      return n();
    },
    set data(d) {
      n(d), v();
    }
  };
  return en(e, Ye(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (f) => {
        var h = u_();
        O(f, h);
      },
      children: (f, h) => {
        var g = f_(), y = ie(g), w = F(y);
        ze(w, {
          level: 3,
          children: (N, M) => {
            ye();
            var x = Ne("输入参数");
            O(N, x);
          },
          $$slots: { default: !0 }
        });
        var b = I(w, 2);
        Ve(b, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (N, M) => {
            var x = d_();
            O(N, x);
          },
          $$slots: { default: !0 }
        }), B(y);
        var m = I(y, 2);
        Mt(m, {});
        var k = I(m, 2);
        ze(k, {
          level: 3,
          mt: "10px",
          children: (N, M) => {
            ye();
            var x = Ne("搜索引擎设置");
            O(N, x);
          },
          $$slots: { default: !0 }
        });
        var E = I(k, 4), _ = F(E);
        {
          let N = /* @__PURE__ */ P(() => n().engine ? [n().engine] : []);
          ft(_, {
            get items() {
              return u(a);
            },
            style: "width: 100%",
            placeholder: "请选择搜索引擎",
            onSelect: (M) => {
              const x = M.value;
              l(o, () => ({ engine: x }));
            },
            get value() {
              return u(N);
            }
          });
        }
        B(E);
        var S = I(E, 4), T = F(S);
        et(T, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (N) => {
            const M = N.target.value;
            l(o, () => ({ keyword: M }));
          }
        }), B(S);
        var z = I(S, 4), V = F(z);
        et(V, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          get value() {
            return n().limit;
          },
          onchange: (N) => {
            const M = N.target.value;
            l(o, () => ({ limit: M }));
          }
        }), B(z);
        var L = I(z, 2), Y = F(L);
        ze(Y, {
          level: 3,
          mt: "10px",
          children: (N, M) => {
            ye();
            var x = Ne("输出参数");
            O(N, x);
          },
          $$slots: { default: !0 }
        }), B(L);
        var H = I(L, 2);
        Xn(H, {}), O(f, g);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(c);
}
le(Eh, { data: {} }, [], [], !0);
var g_ = /* @__PURE__ */ pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>'), v_ = /* @__PURE__ */ pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), p_ = /* @__PURE__ */ te('<div class="heading svelte-1o34e8c"><!></div> <!> <div class="heading svelte-1o34e8c"><!> <!></div> <!>', 1);
const m_ = {
  hash: "svelte-1o34e8c",
  code: ".heading.svelte-1o34e8c {display:flex;margin:10px 0;align-items:center;}.loop_handle_wrapper::after {content:'循环体';width:100px;height:20px;background:var(--primary);color:var(--primary-foreground);display:flex;justify-content:center;align-items:center;}"
};
function Nh(e, t) {
  ce(t, !0), Fe(e, m_);
  const n = p(t, "data", 7), r = /* @__PURE__ */ Ze(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Qe(), { addParameter: i } = hn();
  qe(() => {
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
  return en(e, Ye(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (c) => {
        var d = g_();
        O(c, d);
      },
      handle: (c) => {
        lr(c, {
          type: "source",
          get position() {
            return we.Bottom;
          },
          id: "loop_handle",
          style: "bottom: -12px;width: 100px",
          class: "loop_handle_wrapper"
        });
      },
      children: (c, d) => {
        var f = p_(), h = ie(f), g = F(h);
        ze(g, {
          level: 3,
          children: (E, _) => {
            ye();
            var S = Ne("循环变量");
            O(E, S);
          },
          $$slots: { default: !0 }
        }), B(h);
        var y = I(h, 2);
        Mt(y, { dataKeyName: "loopVars" });
        var w = I(y, 2), b = F(w);
        ze(b, {
          level: 3,
          children: (E, _) => {
            ye();
            var S = Ne("输出参数");
            O(E, S);
          },
          $$slots: { default: !0 }
        });
        var m = I(b, 2);
        Ve(m, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (E, _) => {
            var S = v_();
            O(E, S);
          },
          $$slots: { default: !0 }
        }), B(w);
        var k = I(w, 2);
        Mt(k, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs",
          useChildrenOnly: !0
        }), O(c, f);
      },
      $$slots: { icon: !0, handle: !0, default: !0 }
    }
  )), ue(s);
}
le(Nh, { data: {} }, [], [], !0);
var y_ = /* @__PURE__ */ te('<div class="input-more-setting svelte-5x0hls"><div class="input-more-item svelte-5x0hls">数据内容： <!></div> <div class="input-more-item svelte-5x0hls">确认方式： <!></div> <div class="input-more-item svelte-5x0hls">数据标题： <!></div> <div class="input-more-item svelte-5x0hls">数据描述： <!></div>   <div class="input-more-item svelte-5x0hls"><!></div></div>'), w_ = /* @__PURE__ */ te('<div class="input-item svelte-5x0hls"><!></div> <div class="input-item svelte-5x0hls"><!></div> <div class="input-item svelte-5x0hls"><!></div>', 1);
const b_ = {
  hash: "svelte-5x0hls",
  code: ".input-item.svelte-5x0hls {display:flex;align-items:center;}.input-more-setting.svelte-5x0hls {display:flex;flex-direction:column;gap:10px;padding:10px;background:var(--background);border:1px solid var(--border);border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-5x0hls .input-more-item:where(.svelte-5x0hls) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:var(--muted-foreground);}"
};
function Ph(e, t) {
  ce(t, !0), Fe(e, b_);
  const n = p(t, "parameter", 7), r = p(t, "index", 7), o = p(t, "dataKeyName", 7), i = p(t, "useChildrenOnly", 7);
  let s = Qe(), a = Yn(s), l = /* @__PURE__ */ P(() => ({
    ...n(),
    ...a?.current?.data?.[o()][r()]
  }));
  const { updateNodeData: c } = ut(), d = (N, M) => {
    c(s, (x) => {
      let C = x.data?.[o()];
      return C[r()] = { ...C[r()], [N]: M }, { [o()]: C };
    });
  }, f = (N, M) => {
    const x = M.target.value;
    d(N, x);
  }, h = (N) => {
    const M = N.value;
    d("ref", M);
  }, g = (N) => {
    const M = N.value;
    d("formType", M);
  }, y = (N) => {
    const M = N.value;
    d("contentType", M);
  };
  let w;
  const b = () => {
    c(s, (N) => {
      let M = N.data?.[o()];
      return M.splice(r(), 1), { [o()]: [...M] };
    }), w?.hide();
  };
  let m = mh(i());
  var k = {
    get parameter() {
      return n();
    },
    set parameter(N) {
      n(N), v();
    },
    get index() {
      return r();
    },
    set index(N) {
      r(N), v();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(N) {
      o(N), v();
    },
    get useChildrenOnly() {
      return i();
    },
    set useChildrenOnly(N) {
      i(N), v();
    }
  }, E = w_(), _ = ie(E), S = F(_);
  {
    let N = /* @__PURE__ */ P(() => u(l).nameDisabled === !0);
    et(S, {
      style: "width: 100%;",
      get value() {
        return u(l).name;
      },
      placeholder: "请输入参数名称",
      get disabled() {
        return u(N);
      },
      oninput: (M) => f("name", M)
    });
  }
  B(_);
  var T = I(_, 2), z = F(T);
  {
    var V = (N) => {
      et(N, {
        get value() {
          return u(l).value;
        },
        placeholder: "请输入参数值",
        oninput: (M) => f("value", M)
      });
    }, L = (N) => {
      var M = Ee(), x = ie(M);
      {
        var C = (A) => {
          {
            let D = /* @__PURE__ */ P(() => [u(l).ref]);
            ft(A, {
              get items() {
                return m.current;
              },
              style: "width: 100%",
              defaultValue: ["ref"],
              get value() {
                return u(D);
              },
              expandAll: !0,
              onSelect: h
            });
          }
        };
        ae(
          x,
          (A) => {
            u(l).refType !== "input" && A(C);
          },
          !0
        );
      }
      O(N, M);
    };
    ae(z, (N) => {
      u(l).refType === "fixed" ? N(V) : N(L, !1);
    });
  }
  B(T);
  var Y = I(T, 2), H = F(Y);
  return St(
    mr(H, {
      placement: "bottom",
      floating: (M) => {
        var x = y_(), C = F(x), A = I(F(C));
        {
          let R = /* @__PURE__ */ P(() => u(l).contentType ? [u(l).contentType] : []);
          ft(A, {
            get items() {
              return ol;
            },
            style: "width: 100%",
            defaultValue: ["text"],
            get value() {
              return u(R);
            },
            onSelect: y
          });
        }
        B(C);
        var D = I(C, 2), K = I(F(D));
        {
          let R = /* @__PURE__ */ P(() => u(l).formType ? [u(l).formType] : []);
          ft(K, {
            get items() {
              return m2;
            },
            style: "width: 100%",
            defaultValue: ["single"],
            get value() {
              return u(R);
            },
            onSelect: g
          });
        }
        B(D);
        var X = I(D, 2), $ = I(F(X));
        Ke($, {
          rows: 1,
          style: "width: 100%;",
          onchange: (R) => {
            f("formLabel", R);
          },
          get value() {
            return u(l).formLabel;
          }
        }), B(X);
        var W = I(X, 2), U = I(F(W));
        Ke(U, {
          rows: 2,
          style: "width: 100%;",
          onchange: (R) => {
            f("formDescription", R);
          },
          get value() {
            return u(l).formDescription;
          }
        }), B(W);
        var Z = I(W, 2), G = F(Z);
        Ve(G, {
          onclick: b,
          children: (R, j) => {
            ye();
            var Q = Ne("删除");
            O(R, Q);
          },
          $$slots: { default: !0 }
        }), B(Z), B(x), O(M, x);
      },
      children: (M, x) => {
        oi(M, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (M) => w = M,
    () => w
  ), B(Y), O(e, E), ue(k);
}
le(
  Ph,
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
var x_ = /* @__PURE__ */ te('<div class="input-header svelte-1fllp9b">参数名称</div> <div class="input-header svelte-1fllp9b">参数值</div> <div class="input-header svelte-1fllp9b"></div>', 1), __ = /* @__PURE__ */ te('<div class="none-params svelte-1fllp9b"> </div>'), C_ = /* @__PURE__ */ te('<div class="input-container svelte-1fllp9b"><!> <!></div>');
const k_ = {
  hash: "svelte-1fllp9b",
  code: `.input-container.svelte-1fllp9b {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1fllp9b .none-params:where(.svelte-1fllp9b) {font-size:12px;background:var(--secondary);height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1fllp9b .input-header:where(.svelte-1fllp9b) {font-size:12px;color:var(--muted-foreground);}`
};
function Th(e, t) {
  ce(t, !0), Fe(e, k_);
  const n = p(t, "noneParameterText", 7, "无确认数据"), r = p(t, "dataKeyName", 7, "parameters"), o = p(t, "useChildrenOnly", 7);
  let i = Qe(), s = Yn(i), a = /* @__PURE__ */ P(() => [...s?.current?.data?.[r()] || []]);
  var l = {
    get noneParameterText() {
      return n();
    },
    set noneParameterText(g = "无确认数据") {
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
    }
  }, c = C_(), d = F(c);
  {
    var f = (g) => {
      var y = x_();
      ye(4), O(g, y);
    };
    ae(d, (g) => {
      u(a).length !== 0 && g(f);
    });
  }
  var h = I(d, 2);
  return Ct(
    h,
    19,
    () => u(a),
    (g) => g.id,
    (g, y, w) => {
      Ph(g, {
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
        }
      });
    },
    (g) => {
      var y = __(), w = F(y, !0);
      B(y), Se(() => We(w, n())), O(g, y);
    }
  ), B(c), O(e, c), ue(l);
}
le(Th, { noneParameterText: {}, dataKeyName: {}, useChildrenOnly: {} }, [], [], !0);
const pa = (e, t) => {
  if (e === t) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const n = Array.isArray(e), r = Array.isArray(t);
  if (n !== r) return !1;
  if (n && r) {
    if (e.length !== t.length) return !1;
    for (let o = 0; o < e.length; o++)
      if (!pa(e[o], t[o])) return !1;
    return !0;
  } else {
    const o = Object.keys(e), i = Object.keys(t);
    if (o.length !== i.length) return !1;
    for (const s of o)
      if (!(s in t) || !pa(e[s], t[s])) return !1;
    return !0;
  }
};
var S_ = /* @__PURE__ */ pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), E_ = /* @__PURE__ */ pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), N_ = /* @__PURE__ */ te('<div class="heading svelte-8iukvu"><!> <!></div> <!> <!> <div class="setting-title svelte-8iukvu">消息内容</div> <div class="setting-item svelte-8iukvu"><!></div> <div class="heading svelte-8iukvu"><!></div> <!>', 1);
const P_ = {
  hash: "svelte-8iukvu",
  code: ".heading.svelte-8iukvu {display:flex;margin-bottom:10px;}.setting-title.svelte-8iukvu {font-size:12px;color:var(--secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-8iukvu {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function $h(e, t) {
  ce(t, !0), Fe(e, P_);
  const n = p(t, "data", 7), r = /* @__PURE__ */ Ze(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Qe(), { addParameter: i } = hn(), { updateNodeData: s } = ut();
  qe(() => {
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
      pa(l, n().outputDefs) || s(o, () => ({ outputDefs: l }));
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
  return en(e, Ye(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (c) => {
        var d = S_();
        O(c, d);
      },
      children: (c, d) => {
        var f = N_(), h = ie(f), g = F(h);
        ze(g, {
          level: 3,
          children: (T, z) => {
            ye();
            var V = Ne("确认数据");
            O(T, V);
          },
          $$slots: { default: !0 }
        });
        var y = I(g, 2);
        Ve(y, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "confirms");
          },
          children: (T, z) => {
            var V = E_();
            O(T, V);
          },
          $$slots: { default: !0 }
        }), B(h);
        var w = I(h, 2);
        Th(w, { dataKeyName: "confirms", noneParameterText: "无确认数据" });
        var b = I(w, 2);
        ze(b, {
          level: 3,
          mt: "10px",
          children: (T, z) => {
            ye();
            var V = Ne("确认消息");
            O(T, V);
          },
          $$slots: { default: !0 }
        });
        var m = I(b, 4), k = F(m);
        {
          let T = /* @__PURE__ */ P(() => n().message || "");
          Ke(k, {
            rows: 5,
            placeholder: "请输入用户需要确认的消息内容",
            style: "width: 100%",
            onchange: (z) => {
              s(o, () => ({ message: z.target.value }));
            },
            get value() {
              return u(T);
            }
          });
        }
        B(m);
        var E = I(m, 2), _ = F(E);
        ze(_, {
          level: 3,
          mt: "10px",
          children: (T, z) => {
            ye();
            var V = Ne("输出参数");
            O(T, V);
          },
          $$slots: { default: !0 }
        }), B(E);
        var S = I(E, 2);
        Xn(S, { placeholder: "" }), O(c, f);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(a);
}
le($h, { data: {} }, [], [], !0);
const T_ = {
  startNode: gh,
  codeNode: _h,
  confirmNode: $h,
  llmNode: xh,
  templateNode: Ch,
  httpNode: kh,
  knowledgeNode: Sh,
  searchEngineNode: Eh,
  loopNode: Nh,
  endNode: wh
};
var $_ = /* @__PURE__ */ te("<!> ", 1);
function ma(e, t) {
  ce(t, !0);
  const n = p(t, "icon", 7), r = p(t, "title", 7), o = p(t, "type", 7), i = p(t, "description", 7), s = p(t, "extra", 7), a = (c) => {
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
      n(c), v();
    },
    get title() {
      return r();
    },
    set title(c) {
      r(c), v();
    },
    get type() {
      return o();
    },
    set type(c) {
      o(c), v();
    },
    get description() {
      return i();
    },
    set description(c) {
      i(c), v();
    },
    get extra() {
      return s();
    },
    set extra(c) {
      s(c), v();
    }
  };
  return Ve(e, {
    draggable: !0,
    ondragstart: a,
    get "data-node-type"() {
      return o();
    },
    children: (c, d) => {
      var f = $_(), h = ie(f);
      cs(h, n);
      var g = I(h);
      Se(() => We(g, ` ${r() ?? ""}`)), O(c, f);
    },
    $$slots: { default: !0 }
  }), ue(l);
}
le(ma, { icon: {}, title: {}, type: {}, description: {}, extra: {} }, [], [], !0);
var M_ = /* @__PURE__ */ pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), A_ = /* @__PURE__ */ pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), D_ = /* @__PURE__ */ te('<div><div class="tf-toolbar-container "><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"></div></div></div> <!></div>');
function Mh(e, t) {
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
  ], s = [], a = ur(), l = a.customNodes;
  if (l) {
    const m = Object.keys(l).sort((k, E) => (l[k].sortNo || 0) - (l[E].sortNo || 0));
    for (let k of m)
      l[k].group === "base" ? o.push({ type: k, ...l[k] }) : s.push({
        icon: l[k].icon,
        title: l[k].title,
        type: k
      });
    o.sort((k, E) => (k.sortNo || 0) - (E.sortNo || 0));
  }
  if (a.hiddenNodes) {
    const m = typeof a.hiddenNodes == "function" ? a.hiddenNodes() : a.hiddenNodes;
    if (Array.isArray(m)) {
      for (let k of m)
        for (let E = 0; E < o.length; E++)
          if (o[E].type === k) {
            o.splice(E, 1);
            break;
          }
    }
  }
  var c = D_(), d = F(c), f = F(d), h = F(f);
  Jf(h, {
    style: "width: 100%",
    get items() {
      return i;
    },
    onChange: (m) => {
      ee(n, m.value.toString(), !0);
    }
  }), B(f);
  var g = I(f, 2), y = F(g);
  Ct(y, 21, () => o, Ur, (m, k) => {
    ma(m, Ye(() => u(k)));
  }), B(y);
  var w = I(y, 2);
  Ct(w, 21, () => s, Ur, (m, k) => {
    ma(m, Ye(() => u(k)));
  }), B(w), B(g), B(d);
  var b = I(d, 2);
  Ve(b, {
    onclick: () => {
      ee(r, u(r) ? "" : "show", !0);
    },
    children: (m, k) => {
      var E = Ee(), _ = ie(E);
      {
        var S = (z) => {
          var V = M_();
          O(z, V);
        }, T = (z) => {
          var V = A_();
          O(z, V);
        };
        ae(_, (z) => {
          u(r) === "show" ? z(S) : z(T, !1);
        });
      }
      O(m, E);
    },
    $$slots: { default: !0 }
  }), B(c), Se(() => {
    Bt(c, 1, `tf-toolbar ${u(r) ?? ""}`), vt(y, `display: ${u(n) === "base" ? "flex" : "none"}`), vt(w, `display: ${u(n) !== "base" ? "flex" : "none"}`);
  }), O(e, c), ue();
}
le(Mh, {}, [], [], !0);
const O_ = () => ({ getNode: (t) => Le.getNode(t) }), V_ = () => ({ ensureParentInNodesBefore: (t, n) => {
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
} }), z_ = () => ({ getEdgesByTarget: (t) => Le.getEdges().filter((r) => r.target === t) });
var I_ = /* @__PURE__ */ pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), L_ = /* @__PURE__ */ te('<div class="heading svelte-qt4m0r"><!> <!></div> <!>', 1), H_ = /* @__PURE__ */ te('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), R_ = /* @__PURE__ */ te('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), B_ = /* @__PURE__ */ te('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><div class="slider-container svelte-qt4m0r"><span class="svelte-qt4m0r"> </span> <input/></div></div>', 1), F_ = /* @__PURE__ */ te('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), K_ = /* @__PURE__ */ te('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), Z_ = /* @__PURE__ */ pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), W_ = /* @__PURE__ */ te('<div class="heading svelte-qt4m0r"><!> <!></div> <!>', 1), Y_ = /* @__PURE__ */ te("<!> <!> <div></div> <!>", 1);
const j_ = {
  hash: "svelte-qt4m0r",
  code: `.heading.svelte-qt4m0r {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-qt4m0r {font-size:12px;color:var(--secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-qt4m0r {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}\r
\r
    /* 新增样式 */.slider-container.svelte-qt4m0r {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-qt4m0r span:where(.svelte-qt4m0r) {font-size:12px;color:var(--muted-foreground);display:flex;justify-content:space-between;align-items:center;}input[type='range'].svelte-qt4m0r {width:100%;height:4px;background:var(--muted);border-radius:2px;outline:none;-webkit-appearance:none;}input[type='range'].svelte-qt4m0r::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:var(--primary);border-radius:50%;cursor:pointer;}`
};
function Ah(e, t) {
  ce(t, !0), Fe(e, j_);
  const n = p(t, "data", 7), r = /* @__PURE__ */ Ze(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Qe(), { addParameter: i } = hn(), s = ut(), { updateNodeData: a } = s, l = (m) => {
    a(o, m);
  }, c = (m, k) => {
    l({ [m]: k.target?.value });
  }, d = { ...r, id: o, data: n() }, f = document.createElement("div"), g = ur().customNodes[t.type];
  g.render?.(f, d, s);
  const y = g.forms;
  let w;
  qe(() => {
    n().expand && w && w.append(f);
  }), qe(() => {
    n() && g.onUpdate?.(f, { ...d, data: n() });
  }), qe(() => {
    !n().parameters && g.parameters && l({
      parameters: Io(JSON.parse(JSON.stringify(g.parameters)))
    });
  }), qe(() => {
    !n().outputDefs && g.outputDefs && l({
      outputDefs: Io(JSON.parse(JSON.stringify(g.outputDefs)))
    });
  });
  var b = {
    get data() {
      return n();
    },
    set data(m) {
      n(m), v();
    }
  };
  {
    const m = (E) => {
      var _ = Ee(), S = ie(_);
      cs(S, () => g.icon), O(E, _);
    };
    let k = /* @__PURE__ */ P(() => ({ ...n(), description: g.description }));
    en(e, Ye(
      {
        get data() {
          return u(k);
        }
      },
      () => r,
      {
        icon: m,
        children: (E, _) => {
          var S = Y_(), T = ie(S);
          {
            var z = (M) => {
              var x = L_(), C = ie(x), A = F(C);
              ze(A, {
                level: 3,
                children: ($, W) => {
                  ye();
                  var U = Ne("输入参数");
                  O($, U);
                },
                $$slots: { default: !0 }
              });
              var D = I(A, 2);
              {
                var K = ($) => {
                  Ve($, {
                    class: "input-btn-more",
                    style: "margin-left: auto",
                    onclick: () => {
                      i(o);
                    },
                    children: (W, U) => {
                      var Z = I_();
                      O(W, Z);
                    },
                    $$slots: { default: !0 }
                  });
                };
                ae(D, ($) => {
                  g.parametersAddEnable !== !1 && $(K);
                });
              }
              B(C);
              var X = I(C, 2);
              Mt(X, {}), O(M, x);
            };
            ae(T, (M) => {
              g.parametersEnable !== !1 && M(z);
            });
          }
          var V = I(T, 2);
          {
            var L = (M) => {
              var x = Ee(), C = ie(x);
              Ct(C, 17, () => y, Ur, (A, D) => {
                var K = Ee(), X = ie(K);
                {
                  var $ = (U) => {
                    var Z = H_(), G = ie(Z), R = F(G, !0);
                    B(G);
                    var j = I(G, 2), Q = F(j);
                    {
                      let ne = /* @__PURE__ */ P(() => n()[u(D).name] || u(D).defaultValue);
                      et(Q, Ye(
                        {
                          get placeholder() {
                            return u(D).placeholder;
                          },
                          style: "width: 100%",
                          get value() {
                            return u(ne);
                          }
                        },
                        () => u(D).attrs,
                        {
                          onchange: (J) => {
                            c(u(D).name, J);
                          }
                        }
                      ));
                    }
                    B(j), Se(() => We(R, u(D).label)), O(U, Z);
                  }, W = (U) => {
                    var Z = Ee(), G = ie(Z);
                    {
                      var R = (Q) => {
                        var ne = R_(), J = ie(ne), _e = F(J, !0);
                        B(J);
                        var oe = I(J, 2), se = F(oe);
                        {
                          let re = /* @__PURE__ */ P(() => n()[u(D).name] || u(D).defaultValue);
                          Ke(se, Ye(
                            {
                              rows: 3,
                              get placeholder() {
                                return u(D).placeholder;
                              },
                              style: "width: 100%",
                              get value() {
                                return u(re);
                              }
                            },
                            () => u(D).attrs,
                            {
                              onchange: (he) => {
                                c(u(D).name, he);
                              }
                            }
                          ));
                        }
                        B(oe), Se(() => We(_e, u(D).label)), O(Q, ne);
                      }, j = (Q) => {
                        var ne = Ee(), J = ie(ne);
                        {
                          var _e = (se) => {
                            var re = B_(), he = ie(re), me = F(he, !0);
                            B(he);
                            var ke = I(he, 2), fe = F(ke), be = F(fe), Te = F(be);
                            B(be);
                            var q = I(be, 2), at = (Oe) => l({ [u(D).name]: parseFloat(Oe.target.value) });
                            rt(
                              q,
                              () => ({
                                class: "nodrag",
                                type: "range",
                                ...u(D).attrs,
                                value: n()[u(D).name] ?? u(D).defaultValue,
                                oninput: at
                              }),
                              void 0,
                              void 0,
                              void 0,
                              "svelte-qt4m0r",
                              !0
                            ), B(fe), B(ke), Se(() => {
                              We(me, u(D).label), We(Te, `${u(D).description ?? ""}: ${n()[u(D).name] ?? u(D).defaultValue ?? ""}`);
                            }), O(se, re);
                          }, oe = (se) => {
                            var re = Ee(), he = ie(re);
                            {
                              var me = (fe) => {
                                var be = F_(), Te = ie(be), q = F(Te, !0);
                                B(Te);
                                var at = I(Te, 2), Oe = F(at);
                                {
                                  let Re = /* @__PURE__ */ P(() => u(D).options || []), Ie = /* @__PURE__ */ P(() => n()[u(D).name] ? [n()[u(D).name]] : [u(D).defaultValue]);
                                  ft(Oe, {
                                    get items() {
                                      return u(Re);
                                    },
                                    style: "width: 100%",
                                    get placeholder() {
                                      return u(D).placeholder;
                                    },
                                    onSelect: (Et) => {
                                      const ot = Et.value;
                                      l({ [u(D).name]: ot });
                                    },
                                    get value() {
                                      return u(Ie);
                                    }
                                  });
                                }
                                B(at), Se(() => We(q, u(D).label)), O(fe, be);
                              }, ke = (fe) => {
                                var be = Ee(), Te = ie(be);
                                {
                                  var q = (Oe) => {
                                    var Re = K_(), Ie = ie(Re), Et = F(Ie, !0);
                                    B(Ie);
                                    var ot = I(Ie, 2), At = F(ot);
                                    {
                                      let pt = /* @__PURE__ */ P(() => u(D).chosen?.buttonText);
                                      Uf(At, {
                                        style: "width: 100%",
                                        get placeholder() {
                                          return u(D).placeholder;
                                        },
                                        get buttonText() {
                                          return u(pt);
                                        },
                                        onChosen: (tn, de, Ae) => {
                                          u(D).chosen?.onChosen?.(l, tn, de, Ae);
                                        },
                                        get value() {
                                          return n()[u(D).chosen?.valueDataKey || ""];
                                        },
                                        get label() {
                                          return n()[u(D).chosen?.labelDataKey || ""];
                                        }
                                      });
                                    }
                                    B(ot), Se(() => We(Et, u(D).label)), O(Oe, Re);
                                  }, at = (Oe) => {
                                    var Re = Ee(), Ie = ie(Re);
                                    {
                                      var Et = (ot) => {
                                        ze(ot, Ye({ level: 3, mt: "10px" }, () => u(D).attrs, {
                                          children: (At, pt) => {
                                            ye();
                                            var tn = Ne();
                                            Se(() => We(tn, u(D).label)), O(At, tn);
                                          },
                                          $$slots: { default: !0 }
                                        }));
                                      };
                                      ae(
                                        Ie,
                                        (ot) => {
                                          u(D).type === "heading" && ot(Et);
                                        },
                                        !0
                                      );
                                    }
                                    O(Oe, Re);
                                  };
                                  ae(
                                    Te,
                                    (Oe) => {
                                      u(D).type === "chosen" ? Oe(q) : Oe(at, !1);
                                    },
                                    !0
                                  );
                                }
                                O(fe, be);
                              };
                              ae(
                                he,
                                (fe) => {
                                  u(D).type === "select" ? fe(me) : fe(ke, !1);
                                },
                                !0
                              );
                            }
                            O(se, re);
                          };
                          ae(
                            J,
                            (se) => {
                              u(D).type === "slider" ? se(_e) : se(oe, !1);
                            },
                            !0
                          );
                        }
                        O(Q, ne);
                      };
                      ae(
                        G,
                        (Q) => {
                          u(D).type === "textarea" ? Q(R) : Q(j, !1);
                        },
                        !0
                      );
                    }
                    O(U, Z);
                  };
                  ae(X, (U) => {
                    u(D).type === "input" ? U($) : U(W, !1);
                  });
                }
                O(A, K);
              }), O(M, x);
            };
            ae(V, (M) => {
              y && M(L);
            });
          }
          var Y = I(V, 2);
          St(Y, (M) => w = M, () => w);
          var H = I(Y, 2);
          {
            var N = (M) => {
              var x = W_(), C = ie(x), A = F(C);
              ze(A, {
                level: 3,
                mt: "10px",
                children: ($, W) => {
                  ye();
                  var U = Ne("输出参数");
                  O($, U);
                },
                $$slots: { default: !0 }
              });
              var D = I(A, 2);
              {
                var K = ($) => {
                  Ve($, {
                    class: "input-btn-more",
                    style: "margin-left: auto",
                    onclick: () => {
                      i(o, "outputDefs");
                    },
                    children: (W, U) => {
                      var Z = Z_();
                      O(W, Z);
                    },
                    $$slots: { default: !0 }
                  });
                };
                ae(D, ($) => {
                  g.outputDefsAddEnable !== !1 && $(K);
                });
              }
              B(C);
              var X = I(C, 2);
              Xn(X, {}), O(M, x);
            };
            ae(H, (M) => {
              g.outputDefsEnable !== !1 && M(N);
            });
          }
          Se(() => {
            vt(Y, g.rootStyle || ""), Bt(Y, 1, Wn(g.rootClass), "svelte-qt4m0r");
          }), O(E, S);
        },
        $$slots: { icon: !0, default: !0 }
      }
    ));
  }
  return ue(b);
}
le(Ah, { data: {} }, [], [], !0);
const X_ = () => ({ updateEdgeData: (t, n, r) => {
  const o = Le.getEdge(t);
  if (!o)
    return;
  const i = typeof n == "function" ? n(o) : n;
  o.data = r?.replace ? i : { ...o.data, ...i }, Le.updateEdges((s) => s.map((a) => a.id === t ? o : a));
} }), q_ = () => ({ deleteEdge: (t) => {
  Le.removeEdge(t);
} }), G_ = () => {
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
}, U_ = () => ({ getNodeRelativePosition: (t) => {
  let n = Le.getNode(t);
  const r = { x: 0, y: 0 };
  for (; n; )
    r.x += n.position.x, r.y += n.position.y, n.parentId ? n = Le.getNode(n.parentId) : n = void 0;
  return r;
} });
function J_(e) {
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
function Q_(e) {
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
function e5(e) {
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
function ya(e, t) {
  if (e == null)
    return e;
  if (Array.isArray(e))
    return e.map((n) => ya(n, t));
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
      Object.hasOwn(e, r) && (n[r] = ya(e[r], t));
    return n;
  }
  return e;
}
const t5 = () => (ut(), { copyHandler: async (n) => {
  const r = Le.getNodes().filter((d) => d.selected);
  if (r.length === 0) return;
  const i = Le.getEdges().filter((d) => r.some((f) => f.id === d.source) && r.some((f) => f.id === d.target)), s = r.map(J_), a = i.map(e5), c = JSON.stringify({
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
  const i = Q_(o.tinyflowNodes), s = o.tinyflowEdges || [], a = /* @__PURE__ */ new Map(), l = [];
  for (const d of i) {
    const f = `node_${Bn()}`;
    a.set(d.id, f);
  }
  for (const d of i) {
    const f = a.get(d.id), h = d.parentId !== void 0 ? a.get(d.parentId) : void 0, g = ya(d.data, a);
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
      id: `edge_${Bn()}`,
      source: f,
      target: h
    });
  }
  Le.updateNodes((d) => [...d.map((h) => ({ ...h, selected: !1 })), ...l]), Le.updateEdges((d) => [...d.map((h) => ({ ...h, selected: !1 })), ...c]);
} }), Ac = () => {
  const e = document.activeElement;
  return !e || !(e instanceof HTMLElement) ? !1 : e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement || e.isContentEditable;
};
var n5 = /* @__PURE__ */ te('<div class="panel-content svelte-woejl3"><div>边属性设置</div> <div class="setting-title svelte-woejl3">边条件设置</div> <div class="setting-item svelte-woejl3"><!></div> <div class="setting-item svelte-woejl3" style="padding: 8px 0"><!> <!></div></div>'), r5 = /* @__PURE__ */ te("<!> <!> <!> <!>", 1), o5 = /* @__PURE__ */ te('<div style="position: relative; height: 100%; width: 100%;overflow: hidden"><!> <!></div>');
const i5 = {
  hash: "svelte-woejl3",
  code: ".panel-content.svelte-woejl3 {padding:10px;background-color:var(--background);border-radius:5px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);width:200px;border:1px solid var(--border);}.setting-title.svelte-woejl3 {margin:10px 0;font-size:12px;color:var(--muted-foreground);}.setting-item.svelte-woejl3 {display:flex;gap:5px;align-items:center;justify-content:end;}"
};
function Dh(e, t) {
  ce(t, !0), Fe(e, i5);
  const n = p(t, "onInit", 7), r = p(t, "colorMode", 7), o = /* @__PURE__ */ Ze(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "onInit",
    "colorMode"
  ]), i = ut();
  console.log("props", o), n()(i);
  let s = /* @__PURE__ */ Pe(!1), a = /* @__PURE__ */ Pe(null);
  const { updateEdgeData: l } = X_(), c = (Z) => {
    Z.preventDefault(), Z.dataTransfer && (Z.dataTransfer.dropEffect = "move");
  }, d = (Z) => {
    Z.preventDefault();
    const G = i.screenToFlowPosition({ x: Z.clientX - 250, y: Z.clientY - 100 }), R = Z.dataTransfer?.getData("application/tinyflow");
    if (!R)
      return;
    const j = JSON.parse(R), Q = { id: `node_${Bn()}`, position: G, data: {}, ...j };
    Le.addNode(Q), Le.selectNodeOnly(Q.id);
  }, { getNode: f } = O_(), h = (Z) => {
    const G = f(Z.source), R = f(Z.target);
    if (Z.sourceHandle === "loop_handle" || G.parentId) {
      const j = i.getEdges();
      for (let Q of j)
        if (Q.target === Z.target) {
          const ne = f(Q.source);
          if (Z.sourceHandle === "loop_handle" && ne.parentId !== G.id || G.parentId && ne.parentId !== G.parentId)
            return !1;
        }
    }
    return !(!G.parentId && R.parentId && R.parentId !== G.id);
  }, { getNodesFromSource: g } = G_(), { getNodeRelativePosition: y } = U_(), { ensureParentInNodesBefore: w } = V_(), b = (Z, G) => {
    if (!G.isValid)
      return;
    const R = G.toNode;
    if (R.parentId)
      return;
    const j = G.fromNode, Q = G.fromHandle, ne = { position: { ...R.position } };
    if (Q.id === "loop_handle" ? ne.parentId = j.id : j.parentId && (ne.parentId = j.parentId), ne.parentId) {
      const { x: J, y: _e } = y(ne.parentId);
      ne.position = { x: R.position.x - J, y: R.position.y - _e }, i.updateNode(R.id, ne), g(R.id).forEach((se) => {
        i.updateNode(se.id, {
          parentId: ne.parentId,
          position: { x: se.position.x - J, y: se.position.y - _e }
        });
      }), w(ne.parentId, R.id);
    }
    setTimeout(() => {
      Le.getEdges().forEach((J) => {
        J.target === R.id && J.source == j.id && (ee(s, !0), ee(a, J, !0));
      });
    });
  }, { getEdgesByTarget: m } = z_(), k = (Z) => {
    Z.edges.forEach((R) => {
      R.id === u(a)?.id && (ee(a, null), ee(s, !1));
      const j = f(R.target);
      if (j && j.parentId) {
        const Q = m(R.target), { x: ne, y: J } = y(j.parentId);
        if (Q.length === 0)
          i.updateNode(j.id, {
            parentId: void 0,
            position: { x: j.position.x + ne, y: j.position.y + J }
          }), g(j.id).forEach((oe) => {
            i.updateNode(oe.id, {
              parentId: void 0,
              position: { x: oe.position.x + ne, y: oe.position.y + J }
            });
          });
        else {
          let _e = !1;
          for (let oe = 0; oe < Q.length; oe++) {
            const se = Q[oe], re = f(se.source);
            if (re.parentId || re.type === "loopNode") {
              _e = !0;
              break;
            }
          }
          _e || (i.updateNode(j.id, {
            parentId: void 0,
            position: { x: j.position.x + ne, y: j.position.y + J }
          }), g(j.id).forEach((se) => {
            i.updateNode(se.id, {
              parentId: void 0,
              position: { x: se.position.x + ne, y: se.position.y + J }
            });
          }));
        }
      }
    });
  }, { deleteEdge: E } = q_(), _ = (Z, G) => {
  }, S = (Z) => {
  }, { copyHandler: T, pasteHandler: z } = t5(), V = (Z) => {
    Ac() || ((Z.ctrlKey || Z.metaKey) && Z.key === "c" && (Z.preventDefault(), T(Z)), (Z.ctrlKey || Z.metaKey) && Z.key === "a" && (Z.preventDefault(), Le.updateNodes((G) => G.map((R) => ({ ...R, selected: !0 }))), Le.updateEdges((G) => G.map((R) => ({ ...R, selected: !0 })))));
  }, L = async (Z) => {
    Ac() || z(Z);
  };
  Sn(() => {
    window.addEventListener("keydown", V), window.addEventListener("paste", L);
  }), Yo(() => {
    window.removeEventListener("keydown", V), window.removeEventListener("paste", L);
  });
  const Y = {
    // ...nodeTypes
  }, H = ur().customNodes;
  if (H)
    for (let Z of Object.keys(H))
      Y[Z] = Ah;
  const N = ur().onDataChange;
  qe(() => {
    N?.({
      nodes: Le.getNodes(),
      edges: Le.getEdges(),
      viewport: Le.getViewport()
    });
  });
  var M = {
    get onInit() {
      return n();
    },
    set onInit(Z) {
      n(Z), v();
    },
    get colorMode() {
      return r();
    },
    set colorMode(Z) {
      r(Z), v();
    }
  }, x = o5(), C = F(x), A = Le.getNodes, D = Le.setNodes, K = Le.getEdges, X = Le.setEdges, $ = Le.getViewport, W = Le.setViewport;
  {
    let Z = /* @__PURE__ */ P(() => ({ ...T_, ...Y })), G = /* @__PURE__ */ P(() => ({
      markerEnd: { type: Ao.ArrowClosed, width: 20, height: 20 }
    }));
    yf(C, {
      get colorMode() {
        return r();
      },
      get nodeTypes() {
        return u(Z);
      },
      get nodes() {
        return A();
      },
      set nodes(R) {
        D(R);
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
        W(R);
      },
      class: "tinyflow-logo",
      ondrop: d,
      ondragover: c,
      isValidConnection: h,
      onconnectend: b,
      onconnectstart: _,
      onconnect: S,
      connectionRadius: 50,
      onedgeclick: (R) => {
        ee(s, !0), ee(a, R.edge, !0);
      },
      onbeforeconnect: (R) => ({ ...R, id: Bn() }),
      ondelete: k,
      onclick: (R) => {
        const j = R.target;
        j.classList.contains("svelte-flow__edge-interaction") || j.classList.contains("panel-content") || j.closest(".panel-content") || (ee(s, !1), ee(a, null));
      },
      get defaultEdgeOptions() {
        return u(G);
      },
      children: (R, j) => {
        var Q = r5(), ne = ie(Q);
        Pf(ne, {});
        var J = I(ne, 2);
        Sf(J, {});
        var _e = I(J, 2);
        $f(_e, {});
        var oe = I(_e, 2);
        {
          var se = (re) => {
            ei(re, {
              children: (he, me) => {
                var ke = n5(), fe = I(F(ke), 4), be = F(fe);
                {
                  let Oe = /* @__PURE__ */ P(() => u(a)?.data?.condition);
                  Ke(be, {
                    rows: 3,
                    placeholder: "请输入边条件",
                    style: "width: 100%",
                    get value() {
                      return u(Oe);
                    },
                    onchange: (Re) => {
                      u(a) && l(u(a).id, { condition: Re.target?.value });
                    }
                  });
                }
                B(fe);
                var Te = I(fe, 2), q = F(Te);
                Ve(q, {
                  onclick: () => {
                    E(u(a)?.id), ee(s, !1);
                  },
                  children: (Oe, Re) => {
                    ye();
                    var Ie = Ne("删除");
                    O(Oe, Ie);
                  },
                  $$slots: { default: !0 }
                });
                var at = I(q, 2);
                Ve(at, {
                  primary: !0,
                  onclick: () => {
                    ee(s, !1);
                  },
                  children: (Oe, Re) => {
                    ye();
                    var Ie = Ne("保存");
                    O(Oe, Ie);
                  },
                  $$slots: { default: !0 }
                }), B(Te), B(ke), O(he, ke);
              },
              $$slots: { default: !0 }
            });
          };
          ae(oe, (re) => {
            u(s) && re(se);
          });
        }
        O(R, Q);
      },
      $$slots: { default: !0 }
    });
  }
  var U = I(C, 2);
  return Mh(U, {}), B(x), O(e, x), ue(M);
}
le(Dh, { onInit: {}, colorMode: {} }, [], [], !0);
const Oh = typeof window < "u" ? window : void 0;
function s5(e) {
  let t = e.activeElement;
  for (; t?.shadowRoot; ) {
    const n = t.shadowRoot.activeElement;
    if (n === t)
      break;
    t = n;
  }
  return t;
}
let a5 = class {
  #t;
  #e;
  constructor(t = {}) {
    const { window: n = Oh, document: r = n?.document } = t;
    n !== void 0 && (this.#t = r, this.#e = Fo((o) => {
      const i = ar(n, "focusin", o), s = ar(n, "focusout", o);
      return () => {
        i(), s();
      };
    }));
  }
  get current() {
    return this.#e?.(), this.#t ? s5(this.#t) : null;
  }
};
new a5();
function l5(e, t) {
  switch (e) {
    case "post":
      qe(t);
      break;
    case "pre":
      Xt(t);
      break;
  }
}
function Vh(e, t, n, r = {}) {
  const { lazy: o = !1 } = r;
  let i = !o, s = Array.isArray(e) ? [] : void 0;
  l5(t, () => {
    const a = Array.isArray(e) ? e.map((c) => c()) : e();
    if (!i) {
      i = !0, s = a;
      return;
    }
    const l = st(() => n(a, s));
    return s = a, l;
  });
}
function dl(e, t, n) {
  Vh(e, "post", t, n);
}
function c5(e, t, n) {
  Vh(e, "pre", t, n);
}
dl.pre = c5;
function u5(e, t) {
  switch (e) {
    case "local":
      return t.localStorage;
    case "session":
      return t.sessionStorage;
  }
}
class zh {
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
      window: a = Oh
    } = r;
    if (this.#t = n, this.#e = t, this.#n = i, a === void 0) return;
    const l = u5(o, a);
    this.#r = l;
    const c = l.getItem(t);
    c !== null ? this.#t = this.#s(c) : this.#a(n), s && o === "local" && (this.#i = Fo(() => ar(a, "storage", this.#l)));
  }
  get current() {
    this.#i?.(), u(this.#o);
    const t = this.#s(this.#r?.getItem(this.#e)) ?? this.#t, n = /* @__PURE__ */ new WeakMap(), r = (o) => {
      if (o === null || o?.constructor.name === "Date" || typeof o != "object")
        return o;
      let i = n.get(o);
      return i || (i = new Proxy(o, {
        get: (s, a) => (u(this.#o), r(Reflect.get(s, a))),
        set: (s, a, l) => (ee(this.#o, u(this.#o) + 1), Reflect.set(s, a, l), this.#a(t), !0)
      }), n.set(o, i)), i;
    };
    return r(t);
  }
  set current(t) {
    this.#a(t), ee(this.#o, u(this.#o) + 1);
  }
  #l = (t) => {
    t.key !== this.#e || t.newValue === null || (this.#t = this.#s(t.newValue), ee(this.#o, u(this.#o) + 1));
  };
  #s(t) {
    try {
      return this.#n.deserialize(t);
    } catch (n) {
      console.error(`Error when parsing "${t}" from persisted store "${this.#e}"`, n);
      return;
    }
  }
  #a(t) {
    try {
      t != null && this.#r?.setItem(this.#e, this.#n.serialize(t));
    } catch (n) {
      console.error(`Error when writing value from persisted store "${this.#e}" to ${this.#r}`, n);
    }
  }
}
function Dc(e) {
  return e.filter((t) => t.length > 0);
}
const Ih = {
  getItem: (e) => null,
  setItem: (e, t) => {
  }
}, ii = typeof document < "u";
function d5(e) {
  return typeof e == "function";
}
function f5(e) {
  return e !== null && typeof e == "object";
}
const Lo = Symbol("box"), fl = Symbol("is-writable");
function h5(e) {
  return f5(e) && Lo in e;
}
function g5(e) {
  return nt.isBox(e) && fl in e;
}
function nt(e) {
  let t = /* @__PURE__ */ Pe(xt(e));
  return {
    [Lo]: !0,
    [fl]: !0,
    get current() {
      return u(t);
    },
    set current(n) {
      ee(t, n, !0);
    }
  };
}
function v5(e, t) {
  const n = /* @__PURE__ */ P(e);
  return t ? {
    [Lo]: !0,
    [fl]: !0,
    get current() {
      return u(n);
    },
    set current(r) {
      t(r);
    }
  } : {
    [Lo]: !0,
    get current() {
      return e();
    }
  };
}
function p5(e) {
  return nt.isBox(e) ? e : d5(e) ? nt.with(e) : nt(e);
}
function m5(e) {
  return Object.entries(e).reduce(
    (t, [n, r]) => nt.isBox(r) ? (nt.isWritableBox(r) ? Object.defineProperty(t, n, {
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
function y5(e) {
  return nt.isWritableBox(e) ? {
    [Lo]: !0,
    get current() {
      return e.current;
    }
  } : e;
}
nt.from = p5;
nt.with = v5;
nt.flatten = m5;
nt.readonly = y5;
nt.isBox = h5;
nt.isWritableBox = g5;
function w5(e, t) {
  const n = RegExp(e, "g");
  return (r) => {
    if (typeof r != "string")
      throw new TypeError(`expected an argument of type string, but got ${typeof r}`);
    return r.match(n) ? r.replace(n, t) : r;
  };
}
const b5 = w5(/[A-Z]/, (e) => `-${e.toLowerCase()}`);
function x5(e) {
  if (!e || typeof e != "object" || Array.isArray(e))
    throw new TypeError(`expected an argument of type object, but got ${typeof e}`);
  return Object.keys(e).map((t) => `${b5(t)}: ${e[t]};`).join(`
`);
}
function _5(e = {}) {
  return x5(e).replace(`
`, " ");
}
const C5 = {
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
_5(C5);
const k5 = typeof window < "u" ? window : void 0;
function S5(e) {
  let t = e.activeElement;
  for (; t?.shadowRoot; ) {
    const n = t.shadowRoot.activeElement;
    if (n === t)
      break;
    t = n;
  }
  return t;
}
class E5 {
  #t;
  #e;
  constructor(t = {}) {
    const { window: n = k5, document: r = n?.document } = t;
    n !== void 0 && (this.#t = r, this.#e = Fo((o) => {
      const i = ar(n, "focusin", o), s = ar(n, "focusout", o);
      return () => {
        i(), s();
      };
    }));
  }
  get current() {
    return this.#e?.(), this.#t ? S5(this.#t) : null;
  }
}
new E5();
const Cr = nt("mode-watcher-mode"), kr = nt("mode-watcher-theme"), N5 = ["dark", "light", "system"];
function wa(e) {
  return typeof e != "string" ? !1 : N5.includes(e);
}
class P5 {
  #t = "system";
  #e = ii ? localStorage : Ih;
  #n = this.#e.getItem(Cr.current);
  #r = wa(this.#n) ? this.#n : this.#t;
  #i = /* @__PURE__ */ Pe(xt(this.#o()));
  #o(t = this.#r) {
    return new zh(Cr.current, t, {
      serializer: {
        serialize: (n) => n,
        deserialize: (n) => wa(n) ? n : this.#t
      }
    });
  }
  constructor() {
    ao(() => dl.pre(() => Cr.current, (t, n) => {
      const r = u(this.#i).current;
      ee(this.#i, this.#o(r), !0), n && localStorage.removeItem(n);
    }));
  }
  get current() {
    return u(this.#i).current;
  }
  set current(t) {
    u(this.#i).current = t;
  }
}
class T5 {
  #t = void 0;
  #e = !0;
  #n = /* @__PURE__ */ Pe(xt(this.#t));
  #r = typeof window < "u" && typeof window.matchMedia == "function" ? new qd("prefers-color-scheme: light") : { current: !1 };
  query() {
    ii && ee(this.#n, this.#r.current ? "light" : "dark", !0);
  }
  tracking(t) {
    this.#e = t;
  }
  constructor() {
    ao(() => {
      Xt(() => {
        this.#e && this.query();
      });
    }), this.query = this.query.bind(this), this.tracking = this.tracking.bind(this);
  }
  get current() {
    return u(this.#n);
  }
}
const ba = new P5(), xa = new T5();
class $5 {
  #t = ii ? localStorage : Ih;
  #e = this.#t.getItem(kr.current);
  #n = this.#e === null || this.#e === void 0 ? "" : this.#e;
  #r = /* @__PURE__ */ Pe(xt(this.#i()));
  #i(t = this.#n) {
    return new zh(kr.current, t, {
      serializer: {
        serialize: (n) => typeof n != "string" ? "" : n,
        deserialize: (n) => n
      }
    });
  }
  constructor() {
    ao(() => dl.pre(() => kr.current, (t, n) => {
      const r = u(this.#r).current;
      ee(this.#r, this.#i(r), !0), n && localStorage.removeItem(n);
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
const Ei = new $5();
let Oc, Vc, zc = !1, vo = null;
function M5() {
  return vo || (vo = document.createElement("style"), vo.appendChild(document.createTextNode(`* {
		-webkit-transition: none !important;
		-moz-transition: none !important;
		-o-transition: none !important;
		-ms-transition: none !important;
		transition: none !important;
	}`)), vo);
}
function Lh(e, t = !1) {
  if (typeof document > "u")
    return;
  if (!zc) {
    zc = !0, e();
    return;
  }
  if (typeof process < "u" && process.env?.NODE_ENV === "test" || typeof window < "u" && window.__vitest_worker__) {
    e();
    return;
  }
  clearTimeout(Oc), clearTimeout(Vc);
  const r = M5(), o = () => document.head.appendChild(r), i = () => {
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
  o(), Oc = window.setTimeout(() => {
    e(), Vc = window.setTimeout(i, 16);
  }, 16);
}
const er = nt(void 0), Ui = nt(!0), Ji = nt(!1), _a = nt([]), Ca = nt([]);
function A5() {
  const e = /* @__PURE__ */ P(() => {
    if (!ii) return;
    const t = ba.current === "system" ? xa.current : ba.current, n = Dc(_a.current), r = Dc(Ca.current);
    function o() {
      const i = document.documentElement, s = document.querySelector('meta[name="theme-color"]');
      t === "light" ? (n.length && i.classList.remove(...n), r.length && i.classList.add(...r), i.style.colorScheme = "light", s && er.current && s.setAttribute("content", er.current.light)) : (r.length && i.classList.remove(...r), n.length && i.classList.add(...n), i.style.colorScheme = "dark", s && er.current && s.setAttribute("content", er.current.dark));
    }
    return Ui.current ? Lh(o, Ji.current) : o(), t;
  });
  return {
    get current() {
      return u(e);
    }
  };
}
function D5() {
  const e = /* @__PURE__ */ P(() => {
    if (Ei.current, !ii) return;
    function t() {
      document.documentElement.setAttribute("data-theme", Ei.current);
    }
    return Ui.current ? Lh(t, st(() => Ji.current)) : t(), Ei.current;
  });
  return {
    get current() {
      return u(e);
    }
  };
}
const O5 = A5(), V5 = D5();
function Hh(e) {
  ba.current = e;
}
function z5(e) {
  Ei.current = e;
}
function I5({ defaultMode: e = "system", themeColors: t, darkClassNames: n = ["dark"], lightClassNames: r = [], defaultTheme: o = "", modeStorageKey: i = "mode-watcher-mode", themeStorageKey: s = "mode-watcher-theme" }) {
  const a = document.documentElement, l = localStorage.getItem(i) ?? e, c = localStorage.getItem(s) ?? o, d = l === "light" || l === "system" && window.matchMedia("(prefers-color-scheme: light)").matches;
  if (d ? (n.length && a.classList.remove(...n.filter(Boolean)), r.length && a.classList.add(...r.filter(Boolean))) : (r.length && a.classList.remove(...r.filter(Boolean)), n.length && a.classList.add(...n.filter(Boolean))), a.style.colorScheme = d ? "light" : "dark", t) {
    const f = document.querySelector('meta[name="theme-color"]');
    f && f.setAttribute("content", l === "light" ? t.light : t.dark);
  }
  c && (a.setAttribute("data-theme", c), localStorage.setItem(s, c)), localStorage.setItem(i, l);
}
var L5 = /* @__PURE__ */ te('<meta name="theme-color"/>');
function Rh(e, t) {
  ce(t, !0);
  let n = p(t, "themeColors", 7);
  var r = {
    get themeColors() {
      return n();
    },
    set themeColors(a) {
      n(a), v();
    }
  }, o = Ee(), i = ie(o);
  {
    var s = (a) => {
      var l = L5();
      Se(() => Ce(l, "content", n().dark)), O(a, l);
    };
    ae(i, (a) => {
      n() && a(s);
    });
  }
  return O(e, o), ue(r);
}
le(Rh, { themeColors: {} }, [], [], !0);
var H5 = /* @__PURE__ */ te('<meta name="theme-color"/>'), R5 = /* @__PURE__ */ te("<!> <!>", 1);
function Bh(e, t) {
  ce(t, !0);
  let n = p(t, "trueNonce", 7, ""), r = p(t, "initConfig", 7), o = p(t, "themeColors", 7);
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
  return lv("171tvz2", (s) => {
    var a = R5(), l = ie(a);
    {
      var c = (f) => {
        var h = H5();
        Se(() => Ce(h, "content", o().dark)), O(f, h);
      };
      ae(l, (f) => {
        o() && f(c);
      });
    }
    var d = I(l, 2);
    cs(d, () => `<script${n() ? ` nonce=${n()}` : ""}>(` + I5.toString() + ")(" + JSON.stringify(r()) + ");<\/script>"), O(s, a);
  }), ue(i);
}
le(Bh, { trueNonce: {}, initConfig: {}, themeColors: {} }, [], [], !0);
function Fh(e, t) {
  ce(t, !0);
  let n = p(t, "track", 7, !0), r = p(t, "defaultMode", 7, "system"), o = p(t, "themeColors", 7), i = p(t, "disableTransitions", 7, !0), s = p(t, "darkClassNames", 23, () => ["dark"]), a = p(t, "lightClassNames", 23, () => []), l = p(t, "defaultTheme", 7, ""), c = p(t, "nonce", 7, ""), d = p(t, "themeStorageKey", 7, "mode-watcher-theme"), f = p(t, "modeStorageKey", 7, "mode-watcher-mode"), h = p(t, "disableHeadScriptInjection", 7, !1), g = p(t, "synchronousModeChanges", 7, !1);
  Cr.current = f(), kr.current = d(), _a.current = s(), Ca.current = a(), Ui.current = i(), er.current = o(), Ji.current = g(), Xt(() => {
    Ji.current = g();
  }), Xt(() => {
    Ui.current = i();
  }), Xt(() => {
    er.current = o();
  }), Xt(() => {
    _a.current = s();
  }), Xt(() => {
    Ca.current = a();
  }), Xt(() => {
    Cr.current = f();
  }), Xt(() => {
    kr.current = d();
  }), Xt(() => {
    O5.current, Cr.current, kr.current, V5.current;
  }), Sn(() => {
    xa.tracking(n()), xa.query();
    const S = localStorage.getItem(Cr.current);
    Hh(wa(S) ? S : r());
    const T = localStorage.getItem(kr.current);
    z5(T || l());
  });
  const y = {
    defaultMode: r(),
    themeColors: o(),
    darkClassNames: s(),
    lightClassNames: a(),
    defaultTheme: l(),
    modeStorageKey: f(),
    themeStorageKey: d()
  }, w = /* @__PURE__ */ P(() => typeof window > "u" ? c() : "");
  var b = {
    get track() {
      return n();
    },
    set track(S = !0) {
      n(S), v();
    },
    get defaultMode() {
      return r();
    },
    set defaultMode(S = "system") {
      r(S), v();
    },
    get themeColors() {
      return o();
    },
    set themeColors(S) {
      o(S), v();
    },
    get disableTransitions() {
      return i();
    },
    set disableTransitions(S = !0) {
      i(S), v();
    },
    get darkClassNames() {
      return s();
    },
    set darkClassNames(S = ["dark"]) {
      s(S), v();
    },
    get lightClassNames() {
      return a();
    },
    set lightClassNames(S = []) {
      a(S), v();
    },
    get defaultTheme() {
      return l();
    },
    set defaultTheme(S = "") {
      l(S), v();
    },
    get nonce() {
      return c();
    },
    set nonce(S = "") {
      c(S), v();
    },
    get themeStorageKey() {
      return d();
    },
    set themeStorageKey(S = "mode-watcher-theme") {
      d(S), v();
    },
    get modeStorageKey() {
      return f();
    },
    set modeStorageKey(S = "mode-watcher-mode") {
      f(S), v();
    },
    get disableHeadScriptInjection() {
      return h();
    },
    set disableHeadScriptInjection(S = !1) {
      h(S), v();
    },
    get synchronousModeChanges() {
      return g();
    },
    set synchronousModeChanges(S = !1) {
      g(S), v();
    }
  }, m = Ee(), k = ie(m);
  {
    var E = (S) => {
      Rh(S, {
        get themeColors() {
          return er.current;
        }
      });
    }, _ = (S) => {
      Bh(S, {
        get trueNonce() {
          return u(w);
        },
        get initConfig() {
          return y;
        },
        get themeColors() {
          return er.current;
        }
      });
    };
    ae(k, (S) => {
      h() ? S(E) : S(_, !1);
    });
  }
  return O(e, m), ue(b);
}
le(
  Fh,
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
var B5 = /* @__PURE__ */ te("<!> <!>", 1);
function F5(e, t) {
  ce(t, !0);
  const n = p(t, "options", 7), r = p(t, "onInit", 7);
  let { data: o, theme: i = "system" } = n();
  if (Hh(i), typeof o == "string")
    try {
      o = JSON.parse(o.trim());
    } catch {
      console.error("Invalid JSON data:", o);
    }
  Le.init(o?.nodes || [], o?.edges || []), qr("tinyflow_options", n());
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
  }, a = B5(), l = ie(a);
  Fh(l, {});
  var c = I(l, 2);
  return wf(c, {
    children: (d, f) => {
      Dh(d, {
        get onInit() {
          return r();
        },
        get colorMode() {
          return i;
        }
      });
    },
    $$slots: { default: !0 }
  }), O(e, a), ue(s);
}
customElements.define("tinyflow-component", le(F5, { options: {}, onInit: {} }, [], [], !1));
export {
  Z5 as Tinyflow
};
//# sourceMappingURL=index.js.map
