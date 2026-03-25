const ff = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(ff);
const Dl = 1, Al = 2, Ol = 4, hf = 8, gf = 16, vf = 1, pf = 2, Ml = 4, mf = 8, yf = 16, Hl = 1, wf = 2, Ll = "[", wi = "[!", Ms = "]", ur = {}, it = Symbol(), _f = "http://www.w3.org/1999/xhtml", xf = "http://www.w3.org/2000/svg", bf = "@attach", is = !1;
var _i = Array.isArray, Cf = Array.prototype.indexOf, Hs = Array.from, Uo = Object.keys, Jo = Object.defineProperty, En = Object.getOwnPropertyDescriptor, Vl = Object.getOwnPropertyDescriptors, Il = Object.prototype, kf = Array.prototype, xi = Object.getPrototypeOf, _a = Object.isExtensible;
function Yr(e) {
  return typeof e == "function";
}
const pt = () => {
};
function Ef(e) {
  return e();
}
function ss(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function zl() {
  var e, t, n = new Promise((r, o) => {
    e = r, t = o;
  });
  return { promise: n, resolve: e, reject: t };
}
function _t(e, t, n = !1) {
  return e === void 0 ? n ? (
    /** @type {() => V} */
    t()
  ) : (
    /** @type {V} */
    t
  ) : e;
}
function po(e, t) {
  if (Array.isArray(e))
    return e;
  if (t === void 0 || !(Symbol.iterator in e))
    return Array.from(e);
  const n = [];
  for (const r of e)
    if (n.push(r), n.length === t) break;
  return n;
}
const lt = 2, Ls = 4, bi = 8, Rl = 1 << 24, An = 16, On = 32, Jn = 64, Ci = 128, Qt = 512, gt = 1024, Dt = 2048, Mn = 4096, Lt = 8192, Sn = 16384, ki = 32768, Pn = 65536, xa = 1 << 17, Bl = 1 << 18, mr = 1 << 19, Fl = 1 << 20, dr = 32768, as = 1 << 21, Vs = 1 << 22, Kn = 1 << 23, hn = Symbol("$state"), Is = Symbol("legacy props"), Sf = Symbol(""), br = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), Nf = 1, Ei = 3, yr = 8;
function zs(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Pf() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function $f(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Tf() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Df(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Af() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Of() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Mf(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Hf() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Lf() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Vf() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function If() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function mo(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function zf() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function Rf() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let xe = !1;
function Ht(e) {
  xe = e;
}
let Pe;
function Je(e) {
  if (e === null)
    throw mo(), ur;
  return Pe = e;
}
function $n() {
  return Je(
    /** @type {TemplateNode} */
    /* @__PURE__ */ nn(Pe)
  );
}
function R(e) {
  if (xe) {
    if (/* @__PURE__ */ nn(Pe) !== null)
      throw mo(), ur;
    Pe = e;
  }
}
function pe(e = 1) {
  if (xe) {
    for (var t = e, n = Pe; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ nn(n);
    Pe = n;
  }
}
function Qo(e = !0) {
  for (var t = 0, n = Pe; ; ) {
    if (n.nodeType === yr) {
      var r = (
        /** @type {Comment} */
        n.data
      );
      if (r === Ms) {
        if (t === 0) return n;
        t -= 1;
      } else (r === Ll || r === wi) && (t += 1);
    }
    var o = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ nn(n)
    );
    e && n.remove(), n = o;
  }
}
function Kl(e) {
  if (!e || e.nodeType !== yr)
    throw mo(), ur;
  return (
    /** @type {Comment} */
    e.data
  );
}
function Zl(e) {
  return e === this.v;
}
function Yl(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Wl(e) {
  return !Yl(e, this.v);
}
let Br = !1, Bf = !1;
function Ff() {
  Br = !0;
}
const Kf = [];
function Xl(e, t = !1, n = !1) {
  return Ko(e, /* @__PURE__ */ new Map(), "", Kf, null, n);
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
    if (_i(e)) {
      var a = (
        /** @type {Snapshot<any>} */
        Array(e.length)
      );
      t.set(e, a), o !== null && t.set(o, a);
      for (var l = 0; l < e.length; l += 1) {
        var c = e[l];
        l in e && (a[l] = Ko(c, t, n, r, null, i));
      }
      return a;
    }
    if (xi(e) === Il) {
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
let Ze = null;
function $r(e) {
  Ze = e;
}
function Xn(e) {
  return (
    /** @type {T} */
    jl().get(e)
  );
}
function Tr(e, t) {
  return jl().set(e, t), t;
}
function ue(e, t = !1, n) {
  Ze = {
    p: Ze,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    l: Br && !t ? { s: null, u: null, $: [] } : null
  };
}
function de(e) {
  var t = (
    /** @type {ComponentContext} */
    Ze
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      fc(r);
  }
  return e !== void 0 && (t.x = e), t.i = !0, Ze = t.p, e ?? /** @type {T} */
  {};
}
function yo() {
  return !Br || Ze !== null && Ze.l === null;
}
function jl(e) {
  return Ze === null && zs(), Ze.c ??= new Map(Zf(Ze) || void 0);
}
function Zf(e) {
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
function Qn(e) {
  if (or.length === 0 && !Jr) {
    var t = or;
    queueMicrotask(() => {
      t === or && ql();
    });
  }
  or.push(e);
}
function Yf() {
  for (; or.length > 0; )
    ql();
}
function Gl(e) {
  var t = Te;
  if (t === null)
    return He.f |= Kn, e;
  if ((t.f & ki) === 0) {
    if ((t.f & Ci) === 0)
      throw e;
    t.b.error(e);
  } else
    Dr(e, t);
}
function Dr(e, t) {
  for (; t !== null; ) {
    if ((t.f & Ci) !== 0)
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
const Ho = /* @__PURE__ */ new Set();
let Ye = null, Bt = null, Rt = [], Si = null, ls = !1, Jr = !1;
class Ut {
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
  #l = null;
  /**
   * Deferred effects (which run after async work has completed) that are DIRTY
   * @type {Effect[]}
   */
  #i = [];
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
    Rt = [], this.apply();
    var n = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: [],
      block_effects: []
    };
    for (const r of t)
      this.#s(r, n);
    this.is_fork || this.#u(), this.is_deferred() ? (this.#a(n.effects), this.#a(n.render_effects), this.#a(n.block_effects)) : (Ye = null, ba(n.render_effects), ba(n.effects), this.#l?.resolve()), Bt = null;
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   * @param {EffectTarget} target
   */
  #s(t, n) {
    t.f ^= gt;
    for (var r = t.first; r !== null; ) {
      var o = r.f, i = (o & (On | Jn)) !== 0, s = i && (o & gt) !== 0, a = s || (o & Lt) !== 0 || this.skipped_effects.has(r);
      if ((r.f & Ci) !== 0 && r.b?.is_pending() && (n = {
        parent: n,
        effect: r,
        effects: [],
        render_effects: [],
        block_effects: []
      }), !a && r.fn !== null) {
        i ? r.f ^= gt : (o & Ls) !== 0 ? n.effects.push(r) : xo(r) && ((r.f & An) !== 0 && n.block_effects.push(r), ro(r));
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
      ((n.f & Dt) !== 0 ? this.#i : this.#o).push(n), this.#c(n.deps), vt(n, gt);
  }
  /**
   * @param {Value[] | null} deps
   */
  #c(t) {
    if (t !== null)
      for (const n of t)
        (n.f & lt) === 0 || (n.f & dr) === 0 || (n.f ^= dr, this.#c(
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
    this.previous.has(t) || this.previous.set(t, n), (t.f & Kn) === 0 && (this.current.set(t, t.v), Bt?.set(t, t.v));
  }
  activate() {
    Ye = this, this.apply();
  }
  deactivate() {
    Ye === this && (Ye = null, Bt = null);
  }
  flush() {
    if (this.activate(), Rt.length > 0) {
      if (Ul(), Ye !== null && Ye !== this)
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
    if (Ho.size > 1) {
      this.previous.clear();
      var t = Bt, n = !0, r = {
        parent: null,
        effect: null,
        effects: [],
        render_effects: [],
        block_effects: []
      };
      for (const i of Ho) {
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
          var o = Rt;
          Rt = [];
          const l = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Map();
          for (const d of s)
            Jl(d, a, l, c);
          if (Rt.length > 0) {
            Ye = i, i.apply();
            for (const d of Rt)
              i.#s(d, r);
            i.deactivate();
          }
          Rt = o;
        }
      }
      Ye = null, Bt = t;
    }
    this.committed = !0, Ho.delete(this);
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
    for (const t of this.#i)
      vt(t, Dt), fr(t);
    for (const t of this.#o)
      vt(t, Mn), fr(t);
    this.#i = [], this.#o = [], this.flush();
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
    return (this.#l ??= zl()).promise;
  }
  static ensure() {
    if (Ye === null) {
      const t = Ye = new Ut();
      Ho.add(Ye), Jr || Ut.enqueue(() => {
        Ye === t && t.flush();
      });
    }
    return Ye;
  }
  /** @param {() => void} task */
  static enqueue(t) {
    Qn(t);
  }
  apply() {
  }
}
function v(e) {
  var t = Jr;
  Jr = !0;
  try {
    for (var n; ; ) {
      if (Yf(), Rt.length === 0 && (Ye?.flush(), Rt.length === 0))
        return Si = null, /** @type {T} */
        n;
      Ul();
    }
  } finally {
    Jr = t;
  }
}
function Ul() {
  var e = Yn;
  ls = !0;
  var t = null;
  try {
    var n = 0;
    for (ti(!0); Rt.length > 0; ) {
      var r = Ut.ensure();
      if (n++ > 1e3) {
        var o, i;
        Wf();
      }
      r.process(Rt), Zn.clear();
    }
  } finally {
    ls = !1, ti(e), Si = null;
  }
}
function Wf() {
  try {
    Af();
  } catch (e) {
    Dr(e, Si);
  }
}
let _n = null;
function ba(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if ((r.f & (Sn | Lt)) === 0 && xo(r) && (_n = /* @__PURE__ */ new Set(), ro(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? yc(r) : r.fn = null), _n?.size > 0)) {
        Zn.clear();
        for (const o of _n) {
          if ((o.f & (Sn | Lt)) !== 0) continue;
          const i = [o];
          let s = o.parent;
          for (; s !== null; )
            _n.has(s) && (_n.delete(s), i.push(s)), s = s.parent;
          for (let a = i.length - 1; a >= 0; a--) {
            const l = i[a];
            (l.f & (Sn | Lt)) === 0 && ro(l);
          }
        }
        _n.clear();
      }
    }
    _n = null;
  }
}
function Jl(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const o of e.reactions) {
      const i = o.f;
      (i & lt) !== 0 ? Jl(
        /** @type {Derived} */
        o,
        t,
        n,
        r
      ) : (i & (Vs | An)) !== 0 && (i & Dt) === 0 && Ql(o, t, r) && (vt(o, Dt), fr(
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
      if ((o.f & lt) !== 0 && Ql(
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
function fr(e) {
  for (var t = Si = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (ls && t === Te && (n & An) !== 0 && (n & Bl) === 0)
      return;
    if ((n & (Jn | On)) !== 0) {
      if ((n & gt) === 0) return;
      t.f ^= gt;
    }
  }
  Rt.push(t);
}
function ec(e) {
  let t = 0, n = jn(0), r;
  return () => {
    to() && (u(n), _o(() => (t === 0 && (r = st(() => e(() => Qr(n)))), t += 1, () => {
      Qn(() => {
        t -= 1, t === 0 && (r?.(), r = void 0, Qr(n));
      });
    })));
  };
}
var Xf = Pn | mr | Ci;
function jf(e, t, n) {
  new qf(e, t, n);
}
class qf {
  /** @type {Boundary | null} */
  parent;
  #t = !1;
  /** @type {TemplateNode} */
  #e;
  /** @type {TemplateNode | null} */
  #n = xe ? Pe : null;
  /** @type {BoundaryProps} */
  #r;
  /** @type {((anchor: Node) => void)} */
  #l;
  /** @type {Effect} */
  #i;
  /** @type {Effect | null} */
  #o = null;
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
  #w = ec(() => (this.#h = jn(this.#d), () => {
    this.#h = null;
  }));
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(t, n, r) {
    this.#e = t, this.#r = n, this.#l = r, this.parent = /** @type {Effect} */
    Te.b, this.#t = !!this.#r.pending, this.#i = Kr(() => {
      if (Te.b = this, xe) {
        const i = this.#n;
        $n(), /** @type {Comment} */
        i.nodeType === yr && /** @type {Comment} */
        i.data === wi ? this.#x() : this.#_();
      } else {
        var o = this.#m();
        try {
          this.#o = Nt(() => r(o));
        } catch (i) {
          this.error(i);
        }
        this.#f > 0 ? this.#p() : this.#t = !1;
      }
      return () => {
        this.#u?.remove();
      };
    }, Xf), xe && (this.#e = Pe);
  }
  #_() {
    try {
      this.#o = Nt(() => this.#l(this.#e));
    } catch (t) {
      this.error(t);
    }
    this.#t = !1;
  }
  #x() {
    const t = this.#r.pending;
    t && (this.#s = Nt(() => t(this.#e)), Ut.enqueue(() => {
      var n = this.#m();
      this.#o = this.#v(() => (Ut.ensure(), Nt(() => this.#l(n)))), this.#f > 0 ? this.#p() : (kr(
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
    return this.#t && (this.#u = Ct(), this.#e.before(this.#u), t = this.#u), t;
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
    var n = Te, r = He, o = Ze;
    Zt(this.#i), Pt(this.#i), $r(this.#i.ctx);
    try {
      return t();
    } catch (i) {
      return Gl(i), null;
    } finally {
      Zt(n), Pt(r), $r(o);
    }
  }
  #p() {
    const t = (
      /** @type {(anchor: Node) => void} */
      this.#r.pending
    );
    this.#o !== null && (this.#c = document.createDocumentFragment(), this.#c.append(
      /** @type {TemplateNode} */
      this.#u
    ), xc(this.#o, this.#c)), this.#s === null && (this.#s = Nt(() => t(this.#e)));
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
    this.#f += t, this.#f === 0 && (this.#t = !1, this.#s && kr(this.#s, () => {
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
    this.#y(t), this.#d += t, this.#h && Or(this.#h, this.#d);
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
    this.#o && (rt(this.#o), this.#o = null), this.#s && (rt(this.#s), this.#s = null), this.#a && (rt(this.#a), this.#a = null), xe && (Je(
      /** @type {TemplateNode} */
      this.#n
    ), pe(), Je(Qo()));
    var o = !1, i = !1;
    const s = () => {
      if (o) {
        Rf();
        return;
      }
      o = !0, i && If(), Ut.ensure(), this.#d = 0, this.#a !== null && kr(this.#a, () => {
        this.#a = null;
      }), this.#t = this.has_pending_snippet(), this.#o = this.#v(() => (this.#g = !1, Nt(() => this.#l(this.#e)))), this.#f > 0 ? this.#p() : this.#t = !1;
    };
    var a = He;
    try {
      Pt(null), i = !0, n?.(t, s), i = !1;
    } catch (l) {
      Dr(l, this.#i && this.#i.parent);
    } finally {
      Pt(a);
    }
    r && Qn(() => {
      this.#a = this.#v(() => {
        Ut.ensure(), this.#g = !0;
        try {
          return Nt(() => {
            r(
              this.#e,
              () => t,
              () => s
            );
          });
        } catch (l) {
          return Dr(
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
function Ar(e, t) {
  return t;
}
function Gf(e, t, n) {
  for (var r = [], o = t.length, i = 0; i < o; i++)
    Ys(t[i].e, r, !0);
  wc(r, () => {
    var s = r.length === 0 && n !== null;
    if (s) {
      var a = (
        /** @type {Element} */
        n
      ), l = (
        /** @type {Element} */
        a.parentNode
      );
      Fs(l), l.append(a), e.items.clear(), jt(e, t[0].prev, t[o - 1].next);
    }
    for (var c = 0; c < o; c++) {
      var d = t[c];
      s || (e.items.delete(d.k), jt(e, d.prev, d.next)), rt(d.e, !s);
    }
    e.first === t[0] && (e.first = t[0].prev);
  });
}
function mt(e, t, n, r, o, i = null) {
  var s = e, a = /* @__PURE__ */ new Map(), l = null, c = (t & Ol) !== 0, d = (t & Dl) !== 0, h = (t & Al) !== 0;
  if (c) {
    var f = (
      /** @type {Element} */
      e
    );
    s = xe ? Je(
      /** @type {Comment | Text} */
      /* @__PURE__ */ et(f)
    ) : f.appendChild(Ct());
  }
  xe && $n();
  var g = null, m = /* @__PURE__ */ Rs(() => {
    var b = n();
    return _i(b) ? b : b == null ? [] : Hs(b);
  }), y, w = !0;
  function _() {
    Uf(E, y, s, t, r), g !== null && (y.length === 0 ? (g.fragment ? (s.before(g.fragment), g.fragment = null) : Ws(g.effect), k.first = g.effect) : kr(g.effect, () => {
      g = null;
    }));
  }
  var k = Kr(() => {
    y = /** @type {V[]} */
    u(m);
    var b = y.length;
    let P = !1;
    if (xe) {
      var $ = Kl(s) === wi;
      $ !== (b === 0) && (s = Qo(), Je(s), Ht(!1), P = !0);
    }
    for (var A = /* @__PURE__ */ new Set(), I = (
      /** @type {Batch} */
      Ye
    ), V = null, Y = uc(), z = 0; z < b; z += 1) {
      xe && Pe.nodeType === yr && /** @type {Comment} */
      Pe.data === Ms && (s = /** @type {Comment} */
      Pe, P = !0, Ht(!1));
      var S = y[z], T = r(S, z), x = w ? null : a.get(T);
      x ? (d && Or(x.v, S), h ? Or(
        /** @type {Value<number>} */
        x.i,
        z
      ) : x.i = z, Y && I.skipped_effects.delete(x.e)) : (x = Jf(
        w ? s : null,
        V,
        S,
        T,
        z,
        o,
        t,
        n
      ), w && (x.o = !0, V === null ? l = x : V.next = x, V = x), a.set(T, x)), A.add(T);
    }
    if (b === 0 && i && !g)
      if (w)
        g = {
          fragment: null,
          effect: Nt(() => i(s))
        };
      else {
        var C = document.createDocumentFragment(), O = Ct();
        C.append(O), g = {
          fragment: C,
          effect: Nt(() => i(O))
        };
      }
    if (xe && b > 0 && Je(Qo()), !w)
      if (Y) {
        for (const [M, Z] of a)
          A.has(M) || I.skipped_effects.add(Z.e);
        I.oncommit(_), I.ondiscard(() => {
        });
      } else
        _();
    P && Ht(!0), u(m);
  }), E = { effect: k, items: a, first: l };
  w = !1, xe && (s = Pe);
}
function Uf(e, t, n, r, o) {
  var i = (r & hf) !== 0, s = t.length, a = e.items, l = e.first, c, d = null, h, f = [], g = [], m, y, w, _;
  if (i)
    for (_ = 0; _ < s; _ += 1)
      m = t[_], y = o(m, _), w = /** @type {EachItem} */
      a.get(y), w.o && (w.a?.measure(), (h ??= /* @__PURE__ */ new Set()).add(w));
  for (_ = 0; _ < s; _ += 1) {
    if (m = t[_], y = o(m, _), w = /** @type {EachItem} */
    a.get(y), e.first ??= w, !w.o) {
      w.o = !0;
      var k = d ? d.next : l;
      jt(e, d, w), jt(e, w, k), Ki(w, k, n), d = w, f = [], g = [], l = d.next;
      continue;
    }
    if ((w.e.f & Lt) !== 0 && (Ws(w.e), i && (w.a?.unfix(), (h ??= /* @__PURE__ */ new Set()).delete(w))), w !== l) {
      if (c !== void 0 && c.has(w)) {
        if (f.length < g.length) {
          var E = g[0], b;
          d = E.prev;
          var P = f[0], $ = f[f.length - 1];
          for (b = 0; b < f.length; b += 1)
            Ki(f[b], E, n);
          for (b = 0; b < g.length; b += 1)
            c.delete(g[b]);
          jt(e, P.prev, $.next), jt(e, d, P), jt(e, $, E), l = E, d = $, _ -= 1, f = [], g = [];
        } else
          c.delete(w), Ki(w, l, n), jt(e, w.prev, w.next), jt(e, w, d === null ? e.first : d.next), jt(e, d, w), d = w;
        continue;
      }
      for (f = [], g = []; l !== null && l.k !== y; )
        (l.e.f & Lt) === 0 && (c ??= /* @__PURE__ */ new Set()).add(l), g.push(l), l = l.next;
      if (l === null)
        continue;
      w = l;
    }
    f.push(w), d = w, l = w.next;
  }
  let A = a.size > s;
  if (l !== null || c !== void 0) {
    for (var I = c === void 0 ? [] : Hs(c); l !== null; )
      (l.e.f & Lt) === 0 && I.push(l), l = l.next;
    var V = I.length;
    if (A = a.size - V > s, V > 0) {
      var Y = (r & Ol) !== 0 && s === 0 ? n : null;
      if (i) {
        for (_ = 0; _ < V; _ += 1)
          I[_].a?.measure();
        for (_ = 0; _ < V; _ += 1)
          I[_].a?.fix();
      }
      Gf(e, I, Y);
    }
  }
  if (A)
    for (const z of a.values())
      z.o || (jt(e, d, z), d = z);
  e.effect.last = d && d.e, i && Qn(() => {
    if (h !== void 0)
      for (w of h)
        w.a?.apply();
  });
}
function Jf(e, t, n, r, o, i, s, a) {
  var l = (s & Dl) !== 0, c = (s & gf) === 0, d = l ? c ? /* @__PURE__ */ ic(n, !1, !1) : jn(n) : n, h = (s & Al) === 0 ? o : jn(o), f = {
    i: h,
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
      g.append(e = Ct());
    }
    return f.e = Nt(() => i(
      /** @type {Node} */
      e,
      d,
      h,
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
      /* @__PURE__ */ nn(i)
    );
    o.before(i), i = s;
  }
}
function jt(e, t, n) {
  t === null ? (e.first = n, e.effect.first = n && n.e) : (t.e.next && (t.e.next.prev = null), t.next = n, t.e.next = n && n.e), n !== null && (n.e.prev && (n.e.prev.next = null), n.prev = t, n.e.prev = t && t.e);
}
function tc(e, t, n, r) {
  const o = yo() ? wo : Rs;
  if (n.length === 0 && e.length === 0) {
    r(t.map(o));
    return;
  }
  var i = Ye, s = (
    /** @type {Effect} */
    Te
  ), a = Qf();
  function l() {
    Promise.all(n.map((c) => /* @__PURE__ */ eh(c))).then((c) => {
      a();
      try {
        r([...t.map(o), ...c]);
      } catch (d) {
        (s.f & Sn) === 0 && Dr(d, s);
      }
      i?.deactivate(), ei();
    }).catch((c) => {
      Dr(c, s);
    });
  }
  e.length > 0 ? Promise.all(e).then(() => {
    a();
    try {
      return l();
    } finally {
      i?.deactivate(), ei();
    }
  }) : l();
}
function Qf() {
  var e = Te, t = He, n = Ze, r = Ye;
  return function(i = !0) {
    Zt(e), Pt(t), $r(n), i && r?.activate();
  };
}
function ei() {
  Zt(null), Pt(null), $r(null);
}
// @__NO_SIDE_EFFECTS__
function wo(e) {
  var t = lt | Dt, n = He !== null && (He.f & lt) !== 0 ? (
    /** @type {Derived} */
    He
  ) : null;
  return Te !== null && (Te.f |= mr), {
    ctx: Ze,
    deps: null,
    effects: null,
    equals: Zl,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      it
    ),
    wv: 0,
    parent: n ?? Te,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function eh(e, t) {
  let n = (
    /** @type {Effect | null} */
    Te
  );
  n === null && Pf();
  var r = (
    /** @type {Boundary} */
    n.b
  ), o = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), i = jn(
    /** @type {V} */
    it
  ), s = !He, a = /* @__PURE__ */ new Map();
  return ch(() => {
    var l = zl();
    o = l.promise;
    try {
      Promise.resolve(e()).then(l.resolve, l.reject).then(() => {
        c === Ye && c.committed && c.deactivate(), ei();
      });
    } catch (f) {
      l.reject(f), ei();
    }
    var c = (
      /** @type {Batch} */
      Ye
    );
    if (s) {
      var d = !r.is_pending();
      r.update_pending_count(1), c.increment(d), a.get(c)?.reject(br), a.delete(c), a.set(c, l);
    }
    const h = (f, g = void 0) => {
      if (c.activate(), g)
        g !== br && (i.f |= Kn, Or(i, g));
      else {
        (i.f & Kn) !== 0 && (i.f ^= Kn), Or(i, f);
        for (const [m, y] of a) {
          if (a.delete(m), m === c) break;
          y.reject(br);
        }
      }
      s && (r.update_pending_count(-1), c.decrement(d));
    };
    l.promise.then(h, (f) => h(null, f || "unknown"));
  }), Ni(() => {
    for (const l of a.values())
      l.reject(br);
  }), new Promise((l) => {
    function c(d) {
      function h() {
        d === o ? l(i) : c(o);
      }
      d.then(h, h);
    }
    c(o);
  });
}
// @__NO_SIDE_EFFECTS__
function N(e) {
  const t = /* @__PURE__ */ wo(e);
  return bc(t), t;
}
// @__NO_SIDE_EFFECTS__
function Rs(e) {
  const t = /* @__PURE__ */ wo(e);
  return t.equals = Wl, t;
}
function nc(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      rt(
        /** @type {Effect} */
        t[n]
      );
  }
}
function th(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & lt) === 0)
      return (t.f & Sn) === 0 ? (
        /** @type {Effect} */
        t
      ) : null;
    t = t.parent;
  }
  return null;
}
function Bs(e) {
  var t, n = Te;
  Zt(th(e));
  try {
    e.f &= ~dr, nc(e), t = Sc(e);
  } finally {
    Zt(n);
  }
  return t;
}
function rc(e) {
  var t = Bs(e);
  if (e.equals(t) || (Ye?.is_fork || (e.v = t), e.wv = kc()), !wr)
    if (Bt !== null)
      (to() || Ye?.is_fork) && Bt.set(e, t);
    else {
      var n = (e.f & Qt) === 0 ? Mn : gt;
      vt(e, n);
    }
}
let cs = /* @__PURE__ */ new Set();
const Zn = /* @__PURE__ */ new Map();
let oc = !1;
function jn(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Zl,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function Ne(e, t) {
  const n = jn(e);
  return bc(n), n;
}
// @__NO_SIDE_EFFECTS__
function ic(e, t = !1, n = !0) {
  const r = jn(e);
  return t || (r.equals = Wl), Br && n && Ze !== null && Ze.l !== null && (Ze.l.s ??= []).push(r), r;
}
function Q(e, t, n = !1) {
  He !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!fn || (He.f & xa) !== 0) && yo() && (He.f & (lt | An | Vs | xa)) !== 0 && !Nn?.includes(e) && Vf();
  let r = n ? Kt(t) : t;
  return Or(e, r);
}
function Or(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    wr ? Zn.set(e, t) : Zn.set(e, n), e.v = t;
    var r = Ut.ensure();
    r.capture(e, n), (e.f & lt) !== 0 && ((e.f & Dt) !== 0 && Bs(
      /** @type {Derived} */
      e
    ), vt(e, (e.f & Qt) !== 0 ? gt : Mn)), e.wv = kc(), sc(e, Dt), yo() && Te !== null && (Te.f & gt) !== 0 && (Te.f & (On | Jn)) === 0 && (zt === null ? dh([e]) : zt.push(e)), !r.is_fork && cs.size > 0 && !oc && nh();
  }
  return t;
}
function nh() {
  oc = !1;
  var e = Yn;
  ti(!0);
  const t = Array.from(cs);
  try {
    for (const n of t)
      (n.f & gt) !== 0 && vt(n, Mn), xo(n) && ro(n);
  } finally {
    ti(e);
  }
  cs.clear();
}
function Ca(e, t = 1) {
  var n = u(e), r = t === 1 ? n++ : n--;
  return Q(e, n), r;
}
function Qr(e) {
  Q(e, e.v + 1);
}
function sc(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = yo(), o = n.length, i = 0; i < o; i++) {
      var s = n[i], a = s.f;
      if (!(!r && s === Te)) {
        var l = (a & Dt) === 0;
        if (l && vt(s, t), (a & lt) !== 0) {
          var c = (
            /** @type {Derived} */
            s
          );
          Bt?.delete(c), (a & dr) === 0 && (a & Qt && (s.f |= dr), sc(c, Mn));
        } else l && ((a & An) !== 0 && _n !== null && _n.add(
          /** @type {Effect} */
          s
        ), fr(
          /** @type {Effect} */
          s
        ));
      }
    }
}
function Kt(e) {
  if (typeof e != "object" || e === null || hn in e)
    return e;
  const t = xi(e);
  if (t !== Il && t !== kf)
    return e;
  var n = /* @__PURE__ */ new Map(), r = _i(e), o = /* @__PURE__ */ Ne(0), i = ar, s = (a) => {
    if (ar === i)
      return a();
    var l = He, c = ar;
    Pt(null), Na(i);
    var d = a();
    return Pt(l), Na(c), d;
  };
  return r && n.set("length", /* @__PURE__ */ Ne(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(a, l, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && Hf();
        var d = n.get(l);
        return d === void 0 ? d = s(() => {
          var h = /* @__PURE__ */ Ne(c.value);
          return n.set(l, h), h;
        }) : Q(d, c.value, !0), !0;
      },
      deleteProperty(a, l) {
        var c = n.get(l);
        if (c === void 0) {
          if (l in a) {
            const d = s(() => /* @__PURE__ */ Ne(it));
            n.set(l, d), Qr(o);
          }
        } else
          Q(c, it), Qr(o);
        return !0;
      },
      get(a, l, c) {
        if (l === hn)
          return e;
        var d = n.get(l), h = l in a;
        if (d === void 0 && (!h || En(a, l)?.writable) && (d = s(() => {
          var g = Kt(h ? a[l] : it), m = /* @__PURE__ */ Ne(g);
          return m;
        }), n.set(l, d)), d !== void 0) {
          var f = u(d);
          return f === it ? void 0 : f;
        }
        return Reflect.get(a, l, c);
      },
      getOwnPropertyDescriptor(a, l) {
        var c = Reflect.getOwnPropertyDescriptor(a, l);
        if (c && "value" in c) {
          var d = n.get(l);
          d && (c.value = u(d));
        } else if (c === void 0) {
          var h = n.get(l), f = h?.v;
          if (h !== void 0 && f !== it)
            return {
              enumerable: !0,
              configurable: !0,
              value: f,
              writable: !0
            };
        }
        return c;
      },
      has(a, l) {
        if (l === hn)
          return !0;
        var c = n.get(l), d = c !== void 0 && c.v !== it || Reflect.has(a, l);
        if (c !== void 0 || Te !== null && (!d || En(a, l)?.writable)) {
          c === void 0 && (c = s(() => {
            var f = d ? Kt(a[l]) : it, g = /* @__PURE__ */ Ne(f);
            return g;
          }), n.set(l, c));
          var h = u(c);
          if (h === it)
            return !1;
        }
        return d;
      },
      set(a, l, c, d) {
        var h = n.get(l), f = l in a;
        if (r && l === "length")
          for (var g = c; g < /** @type {Source<number>} */
          h.v; g += 1) {
            var m = n.get(g + "");
            m !== void 0 ? Q(m, it) : g in a && (m = s(() => /* @__PURE__ */ Ne(it)), n.set(g + "", m));
          }
        if (h === void 0)
          (!f || En(a, l)?.writable) && (h = s(() => /* @__PURE__ */ Ne(void 0)), Q(h, Kt(c)), n.set(l, h));
        else {
          f = h.v !== it;
          var y = s(() => Kt(c));
          Q(h, y);
        }
        var w = Reflect.getOwnPropertyDescriptor(a, l);
        if (w?.set && w.set.call(d, c), !f) {
          if (r && typeof l == "string") {
            var _ = (
              /** @type {Source<number>} */
              n.get("length")
            ), k = Number(l);
            Number.isInteger(k) && k >= _.v && Q(_, k + 1);
          }
          Qr(o);
        }
        return !0;
      },
      ownKeys(a) {
        u(o);
        var l = Reflect.ownKeys(a).filter((h) => {
          var f = n.get(h);
          return f === void 0 || f.v !== it;
        });
        for (var [c, d] of n)
          d.v !== it && !(c in a) && l.push(c);
        return l;
      },
      setPrototypeOf() {
        Lf();
      }
    }
  );
}
function ka(e) {
  try {
    if (e !== null && typeof e == "object" && hn in e)
      return e[hn];
  } catch {
  }
  return e;
}
function rh(e, t) {
  return Object.is(ka(e), ka(t));
}
var St, ac, lc, cc;
function us() {
  if (St === void 0) {
    St = window, ac = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    lc = En(t, "firstChild").get, cc = En(t, "nextSibling").get, _a(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), _a(n) && (n.__t = void 0);
  }
}
function Ct(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function et(e) {
  return lc.call(e);
}
// @__NO_SIDE_EFFECTS__
function nn(e) {
  return cc.call(e);
}
function B(e, t) {
  if (!xe)
    return /* @__PURE__ */ et(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ et(Pe)
  );
  if (n === null)
    n = Pe.appendChild(Ct());
  else if (t && n.nodeType !== Ei) {
    var r = Ct();
    return n?.before(r), Je(r), r;
  }
  return Je(n), n;
}
function ie(e, t = !1) {
  if (!xe) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ et(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ nn(n) : n;
  }
  if (t && Pe?.nodeType !== Ei) {
    var r = Ct();
    return Pe?.before(r), Je(r), r;
  }
  return Pe;
}
function H(e, t = 1, n = !1) {
  let r = xe ? Pe : e;
  for (var o; t--; )
    o = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ nn(r);
  if (!xe)
    return r;
  if (n && r?.nodeType !== Ei) {
    var i = Ct();
    return r === null ? o?.after(i) : r.before(i), Je(i), i;
  }
  return Je(r), /** @type {TemplateNode} */
  r;
}
function Fs(e) {
  e.textContent = "";
}
function uc() {
  return !1;
}
function oh(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, Qn(() => {
      document.activeElement === n && e.focus();
    });
  }
}
function ih(e) {
  xe && /* @__PURE__ */ et(e) !== null && Fs(e);
}
let Ea = !1;
function sh() {
  Ea || (Ea = !0, document.addEventListener(
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
  var t = He, n = Te;
  Pt(null), Zt(null);
  try {
    return e();
  } finally {
    Pt(t), Zt(n);
  }
}
function dc(e) {
  Te === null && (He === null && Df(), Tf()), wr && $f();
}
function ah(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Yt(e, t, n) {
  var r = Te;
  r !== null && (r.f & Lt) !== 0 && (e |= Lt);
  var o = {
    ctx: Ze,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Dt | Qt,
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
      ro(o), o.f |= ki;
    } catch (a) {
      throw rt(o), a;
    }
  else t !== null && fr(o);
  var i = o;
  if (n && i.deps === null && i.teardown === null && i.nodes_start === null && i.first === i.last && // either `null`, or a singular child
  (i.f & mr) === 0 && (i = i.first, (e & An) !== 0 && (e & Pn) !== 0 && i !== null && (i.f |= Pn)), i !== null && (i.parent = r, r !== null && ah(i, r), He !== null && (He.f & lt) !== 0 && (e & Jn) === 0)) {
    var s = (
      /** @type {Derived} */
      He
    );
    (s.effects ??= []).push(i);
  }
  return o;
}
function to() {
  return He !== null && !fn;
}
function Ni(e) {
  const t = Yt(bi, null, !1);
  return vt(t, gt), t.teardown = e, t;
}
function Xe(e) {
  dc();
  var t = (
    /** @type {Effect} */
    Te.f
  ), n = !He && (t & On) !== 0 && (t & ki) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      Ze
    );
    (r.e ??= []).push(e);
  } else
    return fc(e);
}
function fc(e) {
  return Yt(Ls | Fl, e, !1);
}
function hc(e) {
  return dc(), Yt(bi | Fl, e, !0);
}
function Zs(e) {
  Ut.ensure();
  const t = Yt(Jn | mr, e, !0);
  return () => {
    rt(t);
  };
}
function lh(e) {
  Ut.ensure();
  const t = Yt(Jn | mr, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? kr(t, () => {
      rt(t), r(void 0);
    }) : (rt(t), r(void 0));
  });
}
function Fr(e) {
  return Yt(Ls, e, !1);
}
function ch(e) {
  return Yt(Vs | mr, e, !0);
}
function _o(e, t = 0) {
  return Yt(bi | t, e, !0);
}
function Ce(e, t = [], n = [], r = []) {
  tc(r, t, n, (o) => {
    Yt(bi, () => e(...o.map(u)), !0);
  });
}
function Kr(e, t = 0) {
  var n = Yt(An | t, e, !0);
  return n;
}
function gc(e, t = 0) {
  var n = Yt(Rl | t, e, !0);
  return n;
}
function Nt(e) {
  return Yt(On | mr, e, !0);
}
function vc(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = wr, r = He;
    Sa(!0), Pt(null);
    try {
      t.call(null);
    } finally {
      Sa(n), Pt(r);
    }
  }
}
function pc(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const o = n.ac;
    o !== null && Ks(() => {
      o.abort(br);
    });
    var r = n.next;
    (n.f & Jn) !== 0 ? n.parent = null : rt(n, t), n = r;
  }
}
function uh(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & On) === 0 && rt(t), t = n;
  }
}
function rt(e, t = !0) {
  var n = !1;
  (t || (e.f & Bl) !== 0) && e.nodes_start !== null && e.nodes_end !== null && (mc(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), n = !0), pc(e, t && !n), ni(e, 0), vt(e, Sn);
  var r = e.transitions;
  if (r !== null)
    for (const i of r)
      i.stop();
  vc(e);
  var o = e.parent;
  o !== null && o.first !== null && yc(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = e.ac = null;
}
function mc(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ nn(e)
    );
    e.remove(), e = n;
  }
}
function yc(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function kr(e, t, n = !0) {
  var r = [];
  Ys(e, r, !0), wc(r, () => {
    n && rt(e), t && t();
  });
}
function wc(e, t) {
  var n = e.length;
  if (n > 0) {
    var r = () => --n || t();
    for (var o of e)
      o.out(r);
  } else
    t();
}
function Ys(e, t, n) {
  if ((e.f & Lt) === 0) {
    if (e.f ^= Lt, e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || n) && t.push(s);
    for (var r = e.first; r !== null; ) {
      var o = r.next, i = (r.f & Pn) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (r.f & On) !== 0 && (e.f & An) !== 0;
      Ys(r, t, i ? n : !1), r = o;
    }
  }
}
function Ws(e) {
  _c(e, !0);
}
function _c(e, t) {
  if ((e.f & Lt) !== 0) {
    e.f ^= Lt, (e.f & gt) === 0 && (vt(e, Dt), fr(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, o = (n.f & Pn) !== 0 || (n.f & On) !== 0;
      _c(n, o ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || t) && i.in();
  }
}
function xc(e, t) {
  for (var n = e.nodes_start, r = e.nodes_end; n !== null; ) {
    var o = n === r ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ nn(n)
    );
    t.append(n), n = o;
  }
}
let Yn = !1;
function ti(e) {
  Yn = e;
}
let wr = !1;
function Sa(e) {
  wr = e;
}
let He = null, fn = !1;
function Pt(e) {
  He = e;
}
let Te = null;
function Zt(e) {
  Te = e;
}
let Nn = null;
function bc(e) {
  He !== null && (Nn === null ? Nn = [e] : Nn.push(e));
}
let xt = null, Mt = 0, zt = null;
function dh(e) {
  zt = e;
}
let Cc = 1, no = 0, ar = no;
function Na(e) {
  ar = e;
}
function kc() {
  return ++Cc;
}
function xo(e) {
  var t = e.f;
  if ((t & Dt) !== 0)
    return !0;
  if (t & lt && (e.f &= ~dr), (t & Mn) !== 0) {
    var n = e.deps;
    if (n !== null)
      for (var r = n.length, o = 0; o < r; o++) {
        var i = n[o];
        if (xo(
          /** @type {Derived} */
          i
        ) && rc(
          /** @type {Derived} */
          i
        ), i.wv > e.wv)
          return !0;
      }
    (t & Qt) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    Bt === null && vt(e, gt);
  }
  return !1;
}
function Ec(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !Nn?.includes(e))
    for (var o = 0; o < r.length; o++) {
      var i = r[o];
      (i.f & lt) !== 0 ? Ec(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? vt(i, Dt) : (i.f & gt) !== 0 && vt(i, Mn), fr(
        /** @type {Effect} */
        i
      ));
    }
}
function Sc(e) {
  var t = xt, n = Mt, r = zt, o = He, i = Nn, s = Ze, a = fn, l = ar, c = e.f;
  xt = /** @type {null | Value[]} */
  null, Mt = 0, zt = null, He = (c & (On | Jn)) === 0 ? e : null, Nn = null, $r(e.ctx), fn = !1, ar = ++no, e.ac !== null && (Ks(() => {
    e.ac.abort(br);
  }), e.ac = null);
  try {
    e.f |= as;
    var d = (
      /** @type {Function} */
      e.fn
    ), h = d(), f = e.deps;
    if (xt !== null) {
      var g;
      if (ni(e, Mt), f !== null && Mt > 0)
        for (f.length = Mt + xt.length, g = 0; g < xt.length; g++)
          f[Mt + g] = xt[g];
      else
        e.deps = f = xt;
      if (Yn && to() && (e.f & Qt) !== 0)
        for (g = Mt; g < f.length; g++)
          (f[g].reactions ??= []).push(e);
    } else f !== null && Mt < f.length && (ni(e, Mt), f.length = Mt);
    if (yo() && zt !== null && !fn && f !== null && (e.f & (lt | Mn | Dt)) === 0)
      for (g = 0; g < /** @type {Source[]} */
      zt.length; g++)
        Ec(
          zt[g],
          /** @type {Effect} */
          e
        );
    return o !== null && o !== e && (no++, zt !== null && (r === null ? r = zt : r.push(.../** @type {Source[]} */
    zt))), (e.f & Kn) !== 0 && (e.f ^= Kn), h;
  } catch (m) {
    return Gl(m);
  } finally {
    e.f ^= as, xt = t, Mt = n, zt = r, He = o, Nn = i, $r(s), fn = a, ar = l;
  }
}
function fh(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Cf.call(n, e);
    if (r !== -1) {
      var o = n.length - 1;
      o === 0 ? n = t.reactions = null : (n[r] = n[o], n.pop());
    }
  }
  n === null && (t.f & lt) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (xt === null || !xt.includes(t)) && (vt(t, Mn), (t.f & Qt) !== 0 && (t.f ^= Qt, t.f &= ~dr), nc(
    /** @type {Derived} **/
    t
  ), ni(
    /** @type {Derived} **/
    t,
    0
  ));
}
function ni(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      fh(e, n[r]);
}
function ro(e) {
  var t = e.f;
  if ((t & Sn) === 0) {
    vt(e, gt);
    var n = Te, r = Yn;
    Te = e, Yn = !0;
    try {
      (t & (An | Rl)) !== 0 ? uh(e) : pc(e), vc(e);
      var o = Sc(e);
      e.teardown = typeof o == "function" ? o : null, e.wv = Cc;
      var i;
      is && Bf && (e.f & Dt) !== 0 && e.deps;
    } finally {
      Yn = r, Te = n;
    }
  }
}
function u(e) {
  var t = e.f, n = (t & lt) !== 0;
  if (He !== null && !fn) {
    var r = Te !== null && (Te.f & Sn) !== 0;
    if (!r && !Nn?.includes(e)) {
      var o = He.deps;
      if ((He.f & as) !== 0)
        e.rv < no && (e.rv = no, xt === null && o !== null && o[Mt] === e ? Mt++ : xt === null ? xt = [e] : xt.includes(e) || xt.push(e));
      else {
        (He.deps ??= []).push(e);
        var i = e.reactions;
        i === null ? e.reactions = [He] : i.includes(He) || i.push(He);
      }
    }
  }
  if (wr) {
    if (Zn.has(e))
      return Zn.get(e);
    if (n) {
      var s = (
        /** @type {Derived} */
        e
      ), a = s.v;
      return ((s.f & gt) === 0 && s.reactions !== null || Pc(s)) && (a = Bs(s)), Zn.set(s, a), a;
    }
  } else n && (!Bt?.has(e) || Ye?.is_fork && !to()) && (s = /** @type {Derived} */
  e, xo(s) && rc(s), Yn && to() && (s.f & Qt) === 0 && Nc(s));
  if (Bt?.has(e))
    return Bt.get(e);
  if ((e.f & Kn) !== 0)
    throw e.v;
  return e.v;
}
function Nc(e) {
  if (e.deps !== null) {
    e.f ^= Qt;
    for (const t of e.deps)
      (t.reactions ??= []).push(e), (t.f & lt) !== 0 && (t.f & Qt) === 0 && Nc(
        /** @type {Derived} */
        t
      );
  }
}
function Pc(e) {
  if (e.v === it) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Zn.has(t) || (t.f & lt) !== 0 && Pc(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function st(e) {
  var t = fn;
  try {
    return fn = !0, e();
  } finally {
    fn = t;
  }
}
const hh = -7169;
function vt(e, t) {
  e.f = e.f & hh | t;
}
function gh(e, t) {
  var n = {};
  for (var r in e)
    t.includes(r) || (n[r] = e[r]);
  for (var o of Object.getOwnPropertySymbols(e))
    Object.propertyIsEnumerable.call(e, o) && !t.includes(o) && (n[o] = e[o]);
  return n;
}
function Xs(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (hn in e)
      ds(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && hn in n && ds(n);
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
    const n = xi(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = Vl(n);
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
const $c = /* @__PURE__ */ new Set(), fs = /* @__PURE__ */ new Set();
function js(e, t, n, r = {}) {
  function o(i) {
    if (r.capture || jr.call(t, i), !i.cancelBubble)
      return Ks(() => n?.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Qn(() => {
    t.addEventListener(e, o, r);
  }) : t.addEventListener(e, o, r), o;
}
function hs(e, t, n, r = {}) {
  var o = js(t, e, n, r);
  return () => {
    e.removeEventListener(t, o, r);
  };
}
function ri(e, t, n, r, o) {
  var i = { capture: r, passive: o }, s = js(e, t, n, i);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && Ni(() => {
    t.removeEventListener(e, s, i);
  });
}
function er(e) {
  for (var t = 0; t < e.length; t++)
    $c.add(e[t]);
  for (var n of fs)
    n(e);
}
let Pa = null;
function jr(e) {
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, o = e.composedPath?.() || [], i = (
    /** @type {null | Element} */
    o[0] || e.target
  );
  Pa = e;
  var s = 0, a = Pa === e && e.__root;
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
    Jo(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    var d = He, h = Te;
    Pt(null), Zt(null);
    try {
      for (var f, g = []; i !== null; ) {
        var m = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var y = i["__" + r];
          y != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i) && y.call(i, e);
        } catch (w) {
          f ? g.push(w) : f = w;
        }
        if (e.cancelBubble || m === t || m === null)
          break;
        i = m;
      }
      if (f) {
        for (let w of g)
          queueMicrotask(() => {
            throw w;
          });
        throw f;
      }
    } finally {
      e.__root = t, delete e.currentTarget, Pt(d), Zt(h);
    }
  }
}
function qs(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
function Tt(e, t) {
  var n = (
    /** @type {Effect} */
    Te
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function te(e, t) {
  var n = (t & Hl) !== 0, r = (t & wf) !== 0, o, i = !e.startsWith("<!>");
  return () => {
    if (xe)
      return Tt(Pe, null), Pe;
    o === void 0 && (o = qs(i ? e : "<!>" + e), n || (o = /** @type {Node} */
    /* @__PURE__ */ et(o)));
    var s = (
      /** @type {TemplateNode} */
      r || ac ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ et(s)
      ), l = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      Tt(a, l);
    } else
      Tt(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function vh(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), o = (t & Hl) !== 0, i = `<${n}>${r ? e : "<!>" + e}</${n}>`, s;
  return () => {
    if (xe)
      return Tt(Pe, null), Pe;
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        qs(i)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ et(a)
      );
      if (o)
        for (s = document.createDocumentFragment(); /* @__PURE__ */ et(l); )
          s.appendChild(
            /** @type {Node} */
            /* @__PURE__ */ et(l)
          );
      else
        s = /** @type {Element} */
        /* @__PURE__ */ et(l);
    }
    var c = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    if (o) {
      var d = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ et(c)
      ), h = (
        /** @type {TemplateNode} */
        c.lastChild
      );
      Tt(d, h);
    } else
      Tt(c, c);
    return c;
  };
}
// @__NO_SIDE_EFFECTS__
function ve(e, t) {
  return /* @__PURE__ */ vh(e, t, "svg");
}
function ke(e = "") {
  if (!xe) {
    var t = Ct(e + "");
    return Tt(t, t), t;
  }
  var n = Pe;
  return n.nodeType !== Ei && (n.before(n = Ct()), Je(n)), Tt(n, n), n;
}
function Ee() {
  if (xe)
    return Tt(Pe, null), Pe;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = Ct();
  return e.append(t, n), Tt(t, n), e;
}
function D(e, t) {
  if (xe) {
    var n = (
      /** @type {Effect} */
      Te
    );
    ((n.f & ki) === 0 || n.nodes_end === null) && (n.nodes_end = Pe), $n();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function ph(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const mh = [
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
function yh(e) {
  return mh.includes(e);
}
const wh = {
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
function _h(e) {
  return e = e.toLowerCase(), wh[e] ?? e;
}
const xh = ["touchstart", "touchmove"];
function bh(e) {
  return xh.includes(e);
}
const Ch = (
  /** @type {const} */
  ["textarea", "script", "style", "title"]
);
function kh(e) {
  return Ch.includes(
    /** @type {typeof RAW_TEXT_ELEMENTS[number]} */
    e
  );
}
function Fe(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = n + "");
}
function Tc(e, t) {
  return Dc(e, t);
}
function Eh(e, t) {
  us(), t.intro = t.intro ?? !1;
  const n = t.target, r = xe, o = Pe;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ et(n)
    ); i && (i.nodeType !== yr || /** @type {Comment} */
    i.data !== Ll); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ nn(i);
    if (!i)
      throw ur;
    Ht(!0), Je(
      /** @type {Comment} */
      i
    );
    const s = Dc(e, { ...t, anchor: i });
    return Ht(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s instanceof Error && s.message.split(`
`).some((a) => a.startsWith("https://svelte.dev/e/")))
      throw s;
    return s !== ur && console.warn("Failed to hydrate: ", s), t.recover === !1 && Of(), us(), Fs(n), Ht(!1), Tc(e, t);
  } finally {
    Ht(r), Je(o);
  }
}
const _r = /* @__PURE__ */ new Map();
function Dc(e, { target: t, anchor: n, props: r = {}, events: o, context: i, intro: s = !0 }) {
  us();
  var a = /* @__PURE__ */ new Set(), l = (h) => {
    for (var f = 0; f < h.length; f++) {
      var g = h[f];
      if (!a.has(g)) {
        a.add(g);
        var m = bh(g);
        t.addEventListener(g, jr, { passive: m });
        var y = _r.get(g);
        y === void 0 ? (document.addEventListener(g, jr, { passive: m }), _r.set(g, 1)) : _r.set(g, y + 1);
      }
    }
  };
  l(Hs($c)), fs.add(l);
  var c = void 0, d = lh(() => {
    var h = n ?? t.appendChild(Ct());
    return jf(
      /** @type {TemplateNode} */
      h,
      {
        pending: () => {
        }
      },
      (f) => {
        if (i) {
          ue({});
          var g = (
            /** @type {ComponentContext} */
            Ze
          );
          g.c = i;
        }
        if (o && (r.$$events = o), xe && Tt(
          /** @type {TemplateNode} */
          f,
          null
        ), c = e(f, r) || {}, xe && (Te.nodes_end = Pe, Pe === null || Pe.nodeType !== yr || /** @type {Comment} */
        Pe.data !== Ms))
          throw mo(), ur;
        i && de();
      }
    ), () => {
      for (var f of a) {
        t.removeEventListener(f, jr);
        var g = (
          /** @type {number} */
          _r.get(f)
        );
        --g === 0 ? (document.removeEventListener(f, jr), _r.delete(f)) : _r.set(f, g);
      }
      fs.delete(l), h !== n && h.parentNode?.removeChild(h);
    };
  });
  return gs.set(c, d), c;
}
let gs = /* @__PURE__ */ new WeakMap();
function Sh(e, t) {
  const n = gs.get(e);
  return n ? (gs.delete(e), n(t)) : Promise.resolve();
}
class Pi {
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
  #l = !0;
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, n = !0) {
    this.anchor = t, this.#l = n;
  }
  #i = () => {
    var t = (
      /** @type {Batch} */
      Ye
    );
    if (this.#t.has(t)) {
      var n = (
        /** @type {Key} */
        this.#t.get(t)
      ), r = this.#e.get(n);
      if (r)
        Ws(r), this.#r.delete(n);
      else {
        var o = this.#n.get(n);
        o && (this.#e.set(n, o.effect), this.#n.delete(n), o.fragment.lastChild.remove(), this.anchor.before(o.fragment), r = o.effect);
      }
      for (const [i, s] of this.#t) {
        if (this.#t.delete(i), i === t)
          break;
        const a = this.#n.get(s);
        a && (rt(a.effect), this.#n.delete(s));
      }
      for (const [i, s] of this.#e) {
        if (i === n || this.#r.has(i)) continue;
        const a = () => {
          if (Array.from(this.#t.values()).includes(i)) {
            var c = document.createDocumentFragment();
            xc(s, c), c.append(Ct()), this.#n.set(i, { effect: s, fragment: c });
          } else
            rt(s);
          this.#r.delete(i), this.#e.delete(i);
        };
        this.#l || !r ? (this.#r.add(i), kr(s, a, !1)) : a();
      }
    }
  };
  /**
   * @param {Batch} batch
   */
  #o = (t) => {
    this.#t.delete(t);
    const n = Array.from(this.#t.values());
    for (const [r, o] of this.#n)
      n.includes(r) || (rt(o.effect), this.#n.delete(r));
  };
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, n) {
    var r = (
      /** @type {Batch} */
      Ye
    ), o = uc();
    if (n && !this.#e.has(t) && !this.#n.has(t))
      if (o) {
        var i = document.createDocumentFragment(), s = Ct();
        i.append(s), this.#n.set(t, {
          effect: Nt(() => n(s)),
          fragment: i
        });
      } else
        this.#e.set(
          t,
          Nt(() => n(this.anchor))
        );
    if (this.#t.set(r, t), o) {
      for (const [a, l] of this.#e)
        a === t ? r.skipped_effects.delete(l) : r.skipped_effects.add(l);
      for (const [a, l] of this.#n)
        a === t ? r.skipped_effects.delete(l.effect) : r.skipped_effects.add(l.effect);
      r.oncommit(this.#i), r.ondiscard(this.#o);
    } else
      xe && (this.anchor = Pe), this.#i();
  }
}
function qe(e, t, ...n) {
  var r = new Pi(e);
  Kr(() => {
    const o = t() ?? null;
    r.ensure(o, o && ((i) => o(i, ...n)));
  }, Pn);
}
function Hn(e) {
  Ze === null && zs(), Br && Ze.l !== null ? Nh(Ze).m.push(e) : Xe(() => {
    const t = st(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function bo(e) {
  Ze === null && zs(), Hn(() => () => st(e));
}
function Nh(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ??= { a: [], b: [], m: [] };
}
function se(e, t, n = !1) {
  xe && $n();
  var r = new Pi(e), o = n ? Pn : 0;
  function i(s, a) {
    if (xe) {
      const c = Kl(e) === wi;
      if (s === c) {
        var l = Qo();
        Je(l), r.anchor = l, Ht(!1), r.ensure(s, a), Ht(!0);
        return;
      }
    }
    r.ensure(s, a);
  }
  Kr(() => {
    var s = !1;
    t((a, l = !0) => {
      s = !0, i(l, a);
    }), s || i(!1, null);
  }, o);
}
function Ph(e, t) {
  xe && Je(
    /** @type {TemplateNode} */
    /* @__PURE__ */ et(e)
  ), _o(() => {
    var n = t();
    for (var r in n) {
      var o = n[r];
      o ? e.style.setProperty(r, o) : e.style.removeProperty(r);
    }
  });
}
function Gs(e, t, n = !1, r = !1, o = !1) {
  var i = e, s = "";
  Ce(() => {
    var a = (
      /** @type {Effect} */
      Te
    );
    if (s === (s = t() ?? "")) {
      xe && $n();
      return;
    }
    if (a.nodes_start !== null && (mc(
      a.nodes_start,
      /** @type {TemplateNode} */
      a.nodes_end
    ), a.nodes_start = a.nodes_end = null), s !== "") {
      if (xe) {
        Pe.data;
        for (var l = $n(), c = l; l !== null && (l.nodeType !== yr || /** @type {Comment} */
        l.data !== ""); )
          c = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ nn(l);
        if (l === null)
          throw mo(), ur;
        Tt(Pe, c), i = Je(l);
        return;
      }
      var d = s + "";
      n ? d = `<svg>${d}</svg>` : r && (d = `<math>${d}</math>`);
      var h = qs(d);
      if ((n || r) && (h = /** @type {Element} */
      /* @__PURE__ */ et(h)), Tt(
        /** @type {TemplateNode} */
        /* @__PURE__ */ et(h),
        /** @type {TemplateNode} */
        h.lastChild
      ), n || r)
        for (; /* @__PURE__ */ et(h); )
          i.before(
            /** @type {Node} */
            /* @__PURE__ */ et(h)
          );
      else
        i.before(h);
    }
  });
}
function $i(e, t, n) {
  xe && $n();
  var r = new Pi(e);
  Kr(() => {
    var o = t() ?? null;
    r.ensure(o, o && ((i) => n(i, o)));
  }, Pn);
}
function $h(e, t, n, r, o, i) {
  let s = xe;
  xe && $n();
  var a = null;
  xe && Pe.nodeType === Nf && (a = /** @type {Element} */
  Pe, $n());
  var l = (
    /** @type {TemplateNode} */
    xe ? Pe : e
  ), c = new Pi(l, !1);
  Kr(() => {
    const d = t() || null;
    var h = d === "svg" ? xf : null;
    if (d === null) {
      c.ensure(null, null);
      return;
    }
    return c.ensure(d, (f) => {
      if (d) {
        if (a = xe ? (
          /** @type {Element} */
          a
        ) : h ? document.createElementNS(h, d) : document.createElement(d), Tt(a, a), r) {
          xe && kh(d) && a.append(document.createComment(""));
          var g = (
            /** @type {TemplateNode} */
            xe ? /* @__PURE__ */ et(a) : a.appendChild(Ct())
          );
          xe && (g === null ? Ht(!1) : Je(g)), r(a, g);
        }
        Te.nodes_end = a, f.before(a);
      }
      xe && Je(f);
    }), () => {
    };
  }, Pn), Ni(() => {
  }), s && (Ht(!0), Je(l));
}
function ze(e, t) {
  Fr(() => {
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
  Fr(() => {
    var r = st(() => t(e, n?.()) || {});
    if (n && r?.update) {
      var o = !1, i = (
        /** @type {any} */
        {}
      );
      _o(() => {
        var s = n();
        Xs(s), o && Yl(i, s) && (i = s, r.update(s));
      }), o = !0;
    }
    if (r?.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function Th(e, t) {
  var n = void 0, r;
  gc(() => {
    n !== (n = t()) && (r && (rt(r), r = null), n && (r = Nt(() => {
      Fr(() => (
        /** @type {(node: Element) => void} */
        n(e)
      ));
    })));
  });
}
function Ac(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Ac(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Dh() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Ac(e)) && (r && (r += " "), r += t);
  return r;
}
function Ln(e) {
  return typeof e == "object" ? Dh(e) : e ?? "";
}
const $a = [...` 	
\r\f \v\uFEFF`];
function Ah(e, t, n) {
  var r = e == null ? "" : "" + e;
  if (t && (r = r ? r + " " + t : t), n) {
    for (var o in n)
      if (n[o])
        r = r ? r + " " + o : o;
      else if (r.length)
        for (var i = o.length, s = 0; (s = r.indexOf(o, s)) >= 0; ) {
          var a = s + i;
          (s === 0 || $a.includes(r[s - 1])) && (a === r.length || $a.includes(r[a])) ? r = (s === 0 ? "" : r.substring(0, s)) + r.substring(a + 1) : s = a;
        }
  }
  return r === "" ? null : r;
}
function Ta(e, t = !1) {
  var n = t ? " !important;" : ";", r = "";
  for (var o in e) {
    var i = e[o];
    i != null && i !== "" && (r += " " + o + ": " + i + n);
  }
  return r;
}
function Zi(e) {
  return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function Oh(e, t) {
  if (t) {
    var n = "", r, o;
    if (Array.isArray(t) ? (r = t[0], o = t[1]) : r = t, e) {
      e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var i = !1, s = 0, a = !1, l = [];
      r && l.push(...Object.keys(r).map(Zi)), o && l.push(...Object.keys(o).map(Zi));
      var c = 0, d = -1;
      const y = e.length;
      for (var h = 0; h < y; h++) {
        var f = e[h];
        if (a ? f === "/" && e[h - 1] === "*" && (a = !1) : i ? i === f && (i = !1) : f === "/" && e[h + 1] === "*" ? a = !0 : f === '"' || f === "'" ? i = f : f === "(" ? s++ : f === ")" && s--, !a && i === !1 && s === 0) {
          if (f === ":" && d === -1)
            d = h;
          else if (f === ";" || h === y - 1) {
            if (d !== -1) {
              var g = Zi(e.substring(c, d).trim());
              if (!l.includes(g)) {
                f !== ";" && h++;
                var m = e.substring(c, h).trim();
                n += " " + m + ";";
              }
            }
            c = h + 1, d = -1;
          }
        }
      }
    }
    return r && (n += Ta(r)), o && (n += Ta(o, !0)), n = n.trim(), n === "" ? null : n;
  }
  return e == null ? null : String(e);
}
function At(e, t, n, r, o, i) {
  var s = e.__className;
  if (xe || s !== n || s === void 0) {
    var a = Ah(n, r, i);
    (!xe || a !== e.getAttribute("class")) && (a == null ? e.removeAttribute("class") : t ? e.className = a : e.setAttribute("class", a)), e.__className = n;
  } else if (i && o !== i)
    for (var l in i) {
      var c = !!i[l];
      (o == null || c !== !!o[l]) && e.classList.toggle(l, c);
    }
  return i;
}
function Yi(e, t = {}, n, r) {
  for (var o in n) {
    var i = n[o];
    t[o] !== i && (n[o] == null ? e.style.removeProperty(o) : e.style.setProperty(o, i, r));
  }
}
function ct(e, t, n, r) {
  var o = e.__style;
  if (xe || o !== t) {
    var i = Oh(t, r);
    (!xe || i !== e.getAttribute("style")) && (i == null ? e.removeAttribute("style") : e.style.cssText = i), e.__style = t;
  } else r && (Array.isArray(r) ? (Yi(e, n?.[0], r[0]), Yi(e, n?.[1], r[1], "important")) : Yi(e, n, r));
  return r;
}
function vs(e, t, n = !1) {
  if (e.multiple) {
    if (t == null)
      return;
    if (!_i(t))
      return zf();
    for (var r of e.options)
      r.selected = t.includes(Da(r));
    return;
  }
  for (r of e.options) {
    var o = Da(r);
    if (rh(o, t)) {
      r.selected = !0;
      return;
    }
  }
  (!n || t !== void 0) && (e.selectedIndex = -1);
}
function Mh(e) {
  var t = new MutationObserver(() => {
    vs(e, e.__value);
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
function Da(e) {
  return "__value" in e ? e.__value : e.value;
}
const Rn = Symbol("class"), dn = Symbol("style"), Oc = Symbol("is custom element"), Mc = Symbol("is html");
function Wn(e) {
  if (xe) {
    var t = !1, n = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var r = e.value;
          be(e, "value", null), e.value = r;
        }
        if (e.hasAttribute("checked")) {
          var o = e.checked;
          be(e, "checked", null), e.checked = o;
        }
      }
    };
    e.__on_r = n, Qn(n), sh();
  }
}
function Zo(e, t) {
  var n = Ti(e);
  n.value === (n.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function Wi(e, t) {
  var n = Ti(e);
  n.checked !== (n.checked = // treat null and undefined the same for the initial value
  t ?? void 0) && (e.checked = t);
}
function Hh(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function be(e, t, n, r) {
  var o = Ti(e);
  xe && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = n) && (t === "loading" && (e[Sf] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Hc(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function Lh(e, t, n, r, o = !1, i = !1) {
  if (xe && o && e.tagName === "INPUT") {
    var s = (
      /** @type {HTMLInputElement} */
      e
    ), a = s.type === "checkbox" ? "defaultChecked" : "defaultValue";
    a in n || Wn(s);
  }
  var l = Ti(e), c = l[Oc], d = !l[Mc];
  let h = xe && c;
  h && Ht(!1);
  var f = t || {}, g = e.tagName === "OPTION";
  for (var m in t)
    m in n || (n[m] = null);
  n.class ? n.class = Ln(n.class) : (r || n[Rn]) && (n.class = null), n[dn] && (n.style ??= null);
  var y = Hc(e);
  for (const $ in n) {
    let A = n[$];
    if (g && $ === "value" && A == null) {
      e.value = e.__value = "", f[$] = A;
      continue;
    }
    if ($ === "class") {
      var w = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      At(e, w, A, r, t?.[Rn], n[Rn]), f[$] = A, f[Rn] = n[Rn];
      continue;
    }
    if ($ === "style") {
      ct(e, A, t?.[dn], n[dn]), f[$] = A, f[dn] = n[dn];
      continue;
    }
    var _ = f[$];
    if (!(A === _ && !(A === void 0 && e.hasAttribute($)))) {
      f[$] = A;
      var k = $[0] + $[1];
      if (k !== "$$")
        if (k === "on") {
          const I = {}, V = "$$" + $;
          let Y = $.slice(2);
          var E = yh(Y);
          if (ph(Y) && (Y = Y.slice(0, -7), I.capture = !0), !E && _) {
            if (A != null) continue;
            e.removeEventListener(Y, f[V], I), f[V] = null;
          }
          if (A != null)
            if (E)
              e[`__${Y}`] = A, er([Y]);
            else {
              let z = function(S) {
                f[$].call(this, S);
              };
              f[V] = js(Y, e, z, I);
            }
          else E && (e[`__${Y}`] = void 0);
        } else if ($ === "style")
          be(e, $, A);
        else if ($ === "autofocus")
          oh(
            /** @type {HTMLElement} */
            e,
            !!A
          );
        else if (!c && ($ === "__value" || $ === "value" && A != null))
          e.value = e.__value = A;
        else if ($ === "selected" && g)
          Hh(
            /** @type {HTMLOptionElement} */
            e,
            A
          );
        else {
          var b = $;
          d || (b = _h(b));
          var P = b === "defaultValue" || b === "defaultChecked";
          if (A == null && !c && !P)
            if (l[$] = null, b === "value" || b === "checked") {
              let I = (
                /** @type {HTMLInputElement} */
                e
              );
              const V = t === void 0;
              if (b === "value") {
                let Y = I.defaultValue;
                I.removeAttribute(b), I.defaultValue = Y, I.value = I.__value = V ? Y : null;
              } else {
                let Y = I.defaultChecked;
                I.removeAttribute(b), I.defaultChecked = Y, I.checked = V ? Y : !1;
              }
            } else
              e.removeAttribute($);
          else P || y.includes(b) && (c || typeof A != "string") ? (e[b] = A, b in l && (l[b] = it)) : typeof A != "function" && be(e, b, A);
        }
    }
  }
  return h && Ht(!0), f;
}
function tt(e, t, n = [], r = [], o = [], i, s = !1, a = !1) {
  tc(o, n, r, (l) => {
    var c = void 0, d = {}, h = e.nodeName === "SELECT", f = !1;
    if (gc(() => {
      var m = t(...l.map(u)), y = Lh(
        e,
        c,
        m,
        i,
        s,
        a
      );
      f && h && "value" in m && vs(
        /** @type {HTMLSelectElement} */
        e,
        m.value
      );
      for (let _ of Object.getOwnPropertySymbols(d))
        m[_] || rt(d[_]);
      for (let _ of Object.getOwnPropertySymbols(m)) {
        var w = m[_];
        _.description === bf && (!c || w !== c[_]) && (d[_] && rt(d[_]), d[_] = Nt(() => Th(e, () => w))), y[_] = w;
      }
      c = y;
    }), h) {
      var g = (
        /** @type {HTMLSelectElement} */
        e
      );
      Fr(() => {
        vs(
          g,
          /** @type {Record<string | symbol, any>} */
          c.value,
          !0
        ), Mh(g);
      });
    }
    f = !0;
  });
}
function Ti(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ??= {
      [Oc]: e.nodeName.includes("-"),
      [Mc]: e.namespaceURI === _f
    }
  );
}
var Aa = /* @__PURE__ */ new Map();
function Hc(e) {
  var t = e.getAttribute("is") || e.nodeName, n = Aa.get(t);
  if (n) return n;
  Aa.set(t, n = []);
  for (var r, o = e, i = Element.prototype; i !== o; ) {
    r = Vl(o);
    for (var s in r)
      r[s].set && n.push(s);
    o = xi(o);
  }
  return n;
}
class Us {
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
          Us.entries.set(n.target, n);
          for (var r of this.#t.get(n.target) || [])
            r(n);
        }
      }
    ));
  }
}
var Vh = /* @__PURE__ */ new Us({
  box: "border-box"
});
function Oa(e, t, n) {
  var r = Vh.observe(e, () => n(e[t]));
  Fr(() => (st(() => n(e[t])), r));
}
function Ma(e, t) {
  return e === t || e?.[hn] === t;
}
function Ot(e = {}, t, n, r) {
  return Fr(() => {
    var o, i;
    return _o(() => {
      o = i, i = [], st(() => {
        e !== n(...i) && (t(e, ...i), o && Ma(n(...o), e) && t(null, ...o));
      });
    }), () => {
      Qn(() => {
        i && Ma(n(...i), e) && t(null, ...i);
      });
    };
  }), e;
}
function Lc(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    Ze
  ), n = t.l.u;
  if (!n) return;
  let r = () => Xs(t.s);
  if (e) {
    let o = 0, i = (
      /** @type {Record<string, any>} */
      {}
    );
    const s = /* @__PURE__ */ wo(() => {
      let a = !1;
      const l = t.s;
      for (const c in l)
        l[c] !== i[c] && (i[c] = l[c], a = !0);
      return a && o++, o;
    });
    r = () => u(s);
  }
  n.b.length && hc(() => {
    Ha(t, r), ss(n.b);
  }), Xe(() => {
    const o = st(() => n.m.map(Ef));
    return () => {
      for (const i of o)
        typeof i == "function" && i();
    };
  }), n.a.length && Xe(() => {
    Ha(t, r), ss(n.a);
  });
}
function Ha(e, t) {
  if (e.l.s)
    for (const n of e.l.s) u(n);
  t();
}
let Lo = !1;
function Ih(e) {
  var t = Lo;
  try {
    return Lo = !1, [e(), Lo];
  } finally {
    Lo = t;
  }
}
const zh = {
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
function Be(e, t, n) {
  return new Proxy(
    { props: e, exclude: t },
    zh
  );
}
const Rh = {
  get(e, t) {
    if (!e.exclude.includes(t))
      return u(e.version), t in e.special ? e.special[t]() : e.props[t];
  },
  set(e, t, n) {
    if (!(t in e.special)) {
      var r = Te;
      try {
        Zt(e.parent_effect), e.special[t] = p(
          {
            get [t]() {
              return e.props[t];
            }
          },
          /** @type {string} */
          t,
          Ml
        );
      } finally {
        Zt(r);
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
function La(e, t) {
  return new Proxy(
    {
      props: e,
      exclude: t,
      special: {},
      version: jn(0),
      // TODO this is only necessary because we need to track component
      // destruction inside `prop`, because of `bind:this`, but it
      // seems likely that we can simplify `bind:this` instead
      parent_effect: (
        /** @type {Effect} */
        Te
      )
    },
    Rh
  );
}
const Bh = {
  get(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (Yr(r) && (r = r()), typeof r == "object" && r !== null && t in r) return r[t];
    }
  },
  set(e, t, n) {
    let r = e.props.length;
    for (; r--; ) {
      let o = e.props[r];
      Yr(o) && (o = o());
      const i = En(o, t);
      if (i && i.set)
        return i.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (Yr(r) && (r = r()), typeof r == "object" && r !== null && t in r) {
        const o = En(r, t);
        return o && !o.configurable && (o.configurable = !0), o;
      }
    }
  },
  has(e, t) {
    if (t === hn || t === Is) return !1;
    for (let n of e.props)
      if (Yr(n) && (n = n()), n != null && t in n) return !0;
    return !1;
  },
  ownKeys(e) {
    const t = [];
    for (let n of e.props)
      if (Yr(n) && (n = n()), !!n) {
        for (const r in n)
          t.includes(r) || t.push(r);
        for (const r of Object.getOwnPropertySymbols(n))
          t.includes(r) || t.push(r);
      }
    return t;
  }
};
function Ke(...e) {
  return new Proxy({ props: e }, Bh);
}
function p(e, t, n, r) {
  var o = !Br || (n & pf) !== 0, i = (n & mf) !== 0, s = (n & yf) !== 0, a = (
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
    var h = hn in e || Is in e;
    d = En(e, t)?.set ?? (h && t in e ? (E) => e[t] = E : void 0);
  }
  var f, g = !1;
  i ? [f, g] = Ih(() => (
    /** @type {V} */
    e[t]
  )) : f = /** @type {V} */
  e[t], f === void 0 && r !== void 0 && (f = c(), d && (o && Mf(), d(f)));
  var m;
  if (o ? m = () => {
    var E = (
      /** @type {V} */
      e[t]
    );
    return E === void 0 ? c() : (l = !0, E);
  } : m = () => {
    var E = (
      /** @type {V} */
      e[t]
    );
    return E !== void 0 && (a = /** @type {V} */
    void 0), E === void 0 ? a : E;
  }, o && (n & Ml) === 0)
    return m;
  if (d) {
    var y = e.$$legacy;
    return (
      /** @type {() => V} */
      function(E, b) {
        return arguments.length > 0 ? ((!o || !b || y || g) && d(b ? m() : E), E) : m();
      }
    );
  }
  var w = !1, _ = ((n & vf) !== 0 ? wo : Rs)(() => (w = !1, m()));
  i && u(_);
  var k = (
    /** @type {Effect} */
    Te
  );
  return (
    /** @type {() => V} */
    function(E, b) {
      if (arguments.length > 0) {
        const P = b ? u(_) : o && i ? Kt(E) : E;
        return Q(_, P), w = !0, a !== void 0 && (a = P), E;
      }
      return wr && w || (k.f & Sn) !== 0 ? _.v : u(_);
    }
  );
}
function Fh(e) {
  return new Kh(e);
}
class Kh {
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
      var a = /* @__PURE__ */ ic(s, !1, !1);
      return n.set(i, a), a;
    };
    const o = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(i, s) {
          return u(n.get(s) ?? r(s, Reflect.get(i, s)));
        },
        has(i, s) {
          return s === Is ? !0 : (u(n.get(s) ?? r(s, Reflect.get(i, s))), Reflect.has(i, s));
        },
        set(i, s, a) {
          return Q(n.get(s) ?? r(s, a), a), Reflect.set(i, s, a);
        }
      }
    );
    this.#e = (t.hydrate ? Eh : Tc)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: o,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    }), (!t?.props?.$$host || t.sync === !1) && v(), this.#t = o.$$events;
    for (const i of Object.keys(this.#e))
      i === "$set" || i === "$destroy" || i === "$on" || Jo(this, i, {
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
      Sh(this.#e);
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
let Vc;
typeof HTMLElement == "function" && (Vc = class extends HTMLElement {
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
      const t = {}, n = Zh(this);
      for (const r of this.$$s)
        r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = e(r), t.default = !0) : t[r] = e(r));
      for (const r of this.attributes) {
        const o = this.$$g_p(r.name);
        o in this.$$d || (this.$$d[o] = Yo(o, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = Fh({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: t,
          $$host: this
        }
      }), this.$$me = Zs(() => {
        _o(() => {
          this.$$r = !0;
          for (const r of Uo(this.$$c)) {
            if (!this.$$p_d[r]?.reflect) continue;
            this.$$d[r] = this.$$c[r];
            const o = Yo(
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
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = Yo(e, n, this.$$p_d, "toProp"), this.$$c?.$set({ [e]: this.$$d[e] }));
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
    return Uo(this.$$p_d).find(
      (t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e
    ) || e;
  }
});
function Yo(e, t, n, r) {
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
function Zh(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function ae(e, t, n, r, o, i) {
  let s = class extends Vc {
    constructor() {
      super(e, n, o), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Uo(t).map(
        (a) => (t[a].attribute || a).toLowerCase()
      );
    }
  };
  return Uo(t).forEach((a) => {
    Jo(s.prototype, a, {
      get() {
        return this.$$c && a in this.$$c ? this.$$c[a] : this.$$d[a];
      },
      set(l) {
        l = Yo(a, l, t), this.$$d[a] = l;
        var c = this.$$c;
        if (c) {
          var d = En(c, a)?.get;
          d ? c[a] = l : c.$set({ [a]: l });
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
var Yh = { value: () => {
} };
function Di() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new Wo(n);
}
function Wo(e) {
  this._ = e;
}
function Wh(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
Wo.prototype = Di.prototype = {
  constructor: Wo,
  on: function(e, t) {
    var n = this._, r = Wh(e + "", n), o, i = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++i < s; ) if ((o = (e = r[i]).type) && (o = Xh(n[o], e.name))) return o;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++i < s; )
      if (o = (e = r[i]).type) n[o] = Va(n[o], e.name, t);
      else if (t == null) for (o in n) n[o] = Va(n[o], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t) e[n] = t[n].slice();
    return new Wo(e);
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
function Xh(e, t) {
  for (var n = 0, r = e.length, o; n < r; ++n)
    if ((o = e[n]).name === t)
      return o.value;
}
function Va(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = Yh, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var ps = "http://www.w3.org/1999/xhtml";
const Ia = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: ps,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Ai(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), Ia.hasOwnProperty(t) ? { space: Ia[t], local: e } : e;
}
function jh(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === ps && t.documentElement.namespaceURI === ps ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function qh(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function Ic(e) {
  var t = Ai(e);
  return (t.local ? qh : jh)(t);
}
function Gh() {
}
function Js(e) {
  return e == null ? Gh : function() {
    return this.querySelector(e);
  };
}
function Uh(e) {
  typeof e != "function" && (e = Js(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = new Array(s), l, c, d = 0; d < s; ++d)
      (l = i[d]) && (c = e.call(l, l.__data__, d, i)) && ("__data__" in l && (c.__data__ = l.__data__), a[d] = c);
  return new It(r, this._parents);
}
function Jh(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function Qh() {
  return [];
}
function zc(e) {
  return e == null ? Qh : function() {
    return this.querySelectorAll(e);
  };
}
function eg(e) {
  return function() {
    return Jh(e.apply(this, arguments));
  };
}
function tg(e) {
  typeof e == "function" ? e = eg(e) : e = zc(e);
  for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
    for (var s = t[i], a = s.length, l, c = 0; c < a; ++c)
      (l = s[c]) && (r.push(e.call(l, l.__data__, c, s)), o.push(l));
  return new It(r, o);
}
function Rc(e) {
  return function() {
    return this.matches(e);
  };
}
function Bc(e) {
  return function(t) {
    return t.matches(e);
  };
}
var ng = Array.prototype.find;
function rg(e) {
  return function() {
    return ng.call(this.children, e);
  };
}
function og() {
  return this.firstElementChild;
}
function ig(e) {
  return this.select(e == null ? og : rg(typeof e == "function" ? e : Bc(e)));
}
var sg = Array.prototype.filter;
function ag() {
  return Array.from(this.children);
}
function lg(e) {
  return function() {
    return sg.call(this.children, e);
  };
}
function cg(e) {
  return this.selectAll(e == null ? ag : lg(typeof e == "function" ? e : Bc(e)));
}
function ug(e) {
  typeof e != "function" && (e = Rc(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, c = 0; c < s; ++c)
      (l = i[c]) && e.call(l, l.__data__, c, i) && a.push(l);
  return new It(r, this._parents);
}
function Fc(e) {
  return new Array(e.length);
}
function dg() {
  return new It(this._enter || this._groups.map(Fc), this._parents);
}
function oi(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
oi.prototype = {
  constructor: oi,
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
function fg(e) {
  return function() {
    return e;
  };
}
function hg(e, t, n, r, o, i) {
  for (var s = 0, a, l = t.length, c = i.length; s < c; ++s)
    (a = t[s]) ? (a.__data__ = i[s], r[s] = a) : n[s] = new oi(e, i[s]);
  for (; s < l; ++s)
    (a = t[s]) && (o[s] = a);
}
function gg(e, t, n, r, o, i, s) {
  var a, l, c = /* @__PURE__ */ new Map(), d = t.length, h = i.length, f = new Array(d), g;
  for (a = 0; a < d; ++a)
    (l = t[a]) && (f[a] = g = s.call(l, l.__data__, a, t) + "", c.has(g) ? o[a] = l : c.set(g, l));
  for (a = 0; a < h; ++a)
    g = s.call(e, i[a], a, i) + "", (l = c.get(g)) ? (r[a] = l, l.__data__ = i[a], c.delete(g)) : n[a] = new oi(e, i[a]);
  for (a = 0; a < d; ++a)
    (l = t[a]) && c.get(f[a]) === l && (o[a] = l);
}
function vg(e) {
  return e.__data__;
}
function pg(e, t) {
  if (!arguments.length) return Array.from(this, vg);
  var n = t ? gg : hg, r = this._parents, o = this._groups;
  typeof e != "function" && (e = fg(e));
  for (var i = o.length, s = new Array(i), a = new Array(i), l = new Array(i), c = 0; c < i; ++c) {
    var d = r[c], h = o[c], f = h.length, g = mg(e.call(d, d && d.__data__, c, r)), m = g.length, y = a[c] = new Array(m), w = s[c] = new Array(m), _ = l[c] = new Array(f);
    n(d, h, y, w, _, g, t);
    for (var k = 0, E = 0, b, P; k < m; ++k)
      if (b = y[k]) {
        for (k >= E && (E = k + 1); !(P = w[E]) && ++E < m; ) ;
        b._next = P || null;
      }
  }
  return s = new It(s, r), s._enter = a, s._exit = l, s;
}
function mg(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function yg() {
  return new It(this._exit || this._groups.map(Fc), this._parents);
}
function wg(e, t, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function _g(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, i = r.length, s = Math.min(o, i), a = new Array(o), l = 0; l < s; ++l)
    for (var c = n[l], d = r[l], h = c.length, f = a[l] = new Array(h), g, m = 0; m < h; ++m)
      (g = c[m] || d[m]) && (f[m] = g);
  for (; l < o; ++l)
    a[l] = n[l];
  return new It(a, this._parents);
}
function xg() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, i = r[o], s; --o >= 0; )
      (s = r[o]) && (i && s.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(s, i), i = s);
  return this;
}
function bg(e) {
  e || (e = Cg);
  function t(h, f) {
    return h && f ? e(h.__data__, f.__data__) : !h - !f;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), i = 0; i < r; ++i) {
    for (var s = n[i], a = s.length, l = o[i] = new Array(a), c, d = 0; d < a; ++d)
      (c = s[d]) && (l[d] = c);
    l.sort(t);
  }
  return new It(o, this._parents).order();
}
function Cg(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function kg() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function Eg() {
  return Array.from(this);
}
function Sg() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length; o < i; ++o) {
      var s = r[o];
      if (s) return s;
    }
  return null;
}
function Ng() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function Pg() {
  return !this.node();
}
function $g(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], i = 0, s = o.length, a; i < s; ++i)
      (a = o[i]) && e.call(a, a.__data__, i, o);
  return this;
}
function Tg(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Dg(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Ag(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function Og(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function Mg(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function Hg(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function Lg(e, t) {
  var n = Ai(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? Dg : Tg : typeof t == "function" ? n.local ? Hg : Mg : n.local ? Og : Ag)(n, t));
}
function Kc(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function Vg(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Ig(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function zg(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function Rg(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? Vg : typeof t == "function" ? zg : Ig)(e, t, n ?? "")) : Mr(this.node(), e);
}
function Mr(e, t) {
  return e.style.getPropertyValue(t) || Kc(e).getComputedStyle(e, null).getPropertyValue(t);
}
function Bg(e) {
  return function() {
    delete this[e];
  };
}
function Fg(e, t) {
  return function() {
    this[e] = t;
  };
}
function Kg(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function Zg(e, t) {
  return arguments.length > 1 ? this.each((t == null ? Bg : typeof t == "function" ? Kg : Fg)(e, t)) : this.node()[e];
}
function Zc(e) {
  return e.trim().split(/^|\s+/);
}
function Qs(e) {
  return e.classList || new Yc(e);
}
function Yc(e) {
  this._node = e, this._names = Zc(e.getAttribute("class") || "");
}
Yc.prototype = {
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
function Wc(e, t) {
  for (var n = Qs(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function Xc(e, t) {
  for (var n = Qs(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
}
function Yg(e) {
  return function() {
    Wc(this, e);
  };
}
function Wg(e) {
  return function() {
    Xc(this, e);
  };
}
function Xg(e, t) {
  return function() {
    (t.apply(this, arguments) ? Wc : Xc)(this, e);
  };
}
function jg(e, t) {
  var n = Zc(e + "");
  if (arguments.length < 2) {
    for (var r = Qs(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? Xg : t ? Yg : Wg)(n, t));
}
function qg() {
  this.textContent = "";
}
function Gg(e) {
  return function() {
    this.textContent = e;
  };
}
function Ug(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function Jg(e) {
  return arguments.length ? this.each(e == null ? qg : (typeof e == "function" ? Ug : Gg)(e)) : this.node().textContent;
}
function Qg() {
  this.innerHTML = "";
}
function ev(e) {
  return function() {
    this.innerHTML = e;
  };
}
function tv(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function nv(e) {
  return arguments.length ? this.each(e == null ? Qg : (typeof e == "function" ? tv : ev)(e)) : this.node().innerHTML;
}
function rv() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function ov() {
  return this.each(rv);
}
function iv() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function sv() {
  return this.each(iv);
}
function av(e) {
  var t = typeof e == "function" ? e : Ic(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function lv() {
  return null;
}
function cv(e, t) {
  var n = typeof e == "function" ? e : Ic(e), r = t == null ? lv : typeof t == "function" ? t : Js(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function uv() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function dv() {
  return this.each(uv);
}
function fv() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function hv() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function gv(e) {
  return this.select(e ? hv : fv);
}
function vv(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function pv(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function mv(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", r = t.indexOf(".");
    return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n };
  });
}
function yv(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, o = t.length, i; n < o; ++n)
        i = t[n], (!e.type || i.type === e.type) && i.name === e.name ? this.removeEventListener(i.type, i.listener, i.options) : t[++r] = i;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function wv(e, t, n) {
  return function() {
    var r = this.__on, o, i = pv(t);
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
function _v(e, t, n) {
  var r = mv(e + ""), o, i = r.length, s;
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
  for (a = t ? wv : yv, o = 0; o < i; ++o) this.each(a(r[o], t, n));
  return this;
}
function jc(e, t, n) {
  var r = Kc(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function xv(e, t) {
  return function() {
    return jc(this, e, t);
  };
}
function bv(e, t) {
  return function() {
    return jc(this, e, t.apply(this, arguments));
  };
}
function Cv(e, t) {
  return this.each((typeof t == "function" ? bv : xv)(e, t));
}
function* kv() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length, s; o < i; ++o)
      (s = r[o]) && (yield s);
}
var qc = [null];
function It(e, t) {
  this._groups = e, this._parents = t;
}
function Co() {
  return new It([[document.documentElement]], qc);
}
function Ev() {
  return this;
}
It.prototype = Co.prototype = {
  constructor: It,
  select: Uh,
  selectAll: tg,
  selectChild: ig,
  selectChildren: cg,
  filter: ug,
  data: pg,
  enter: dg,
  exit: yg,
  join: wg,
  merge: _g,
  selection: Ev,
  order: xg,
  sort: bg,
  call: kg,
  nodes: Eg,
  node: Sg,
  size: Ng,
  empty: Pg,
  each: $g,
  attr: Lg,
  style: Rg,
  property: Zg,
  classed: jg,
  text: Jg,
  html: nv,
  raise: ov,
  lower: sv,
  append: av,
  insert: cv,
  remove: dv,
  clone: gv,
  datum: vv,
  on: _v,
  dispatch: Cv,
  [Symbol.iterator]: kv
};
function Ft(e) {
  return typeof e == "string" ? new It([[document.querySelector(e)]], [document.documentElement]) : new It([[e]], qc);
}
function Sv(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function qt(e, t) {
  if (e = Sv(e), t === void 0 && (t = e.currentTarget), t) {
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
const Nv = { passive: !1 }, oo = { capture: !0, passive: !1 };
function Xi(e) {
  e.stopImmediatePropagation();
}
function Er(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Gc(e) {
  var t = e.document.documentElement, n = Ft(e).on("dragstart.drag", Er, oo);
  "onselectstart" in t ? n.on("selectstart.drag", Er, oo) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function Uc(e, t) {
  var n = e.document.documentElement, r = Ft(e).on("dragstart.drag", null);
  t && (r.on("click.drag", Er, oo), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const Vo = (e) => () => e;
function ms(e, {
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
ms.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function Pv(e) {
  return !e.ctrlKey && !e.button;
}
function $v() {
  return this.parentNode;
}
function Tv(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function Dv() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Av() {
  var e = Pv, t = $v, n = Tv, r = Dv, o = {}, i = Di("start", "drag", "end"), s = 0, a, l, c, d, h = 0;
  function f(b) {
    b.on("mousedown.drag", g).filter(r).on("touchstart.drag", w).on("touchmove.drag", _, Nv).on("touchend.drag touchcancel.drag", k).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function g(b, P) {
    if (!(d || !e.call(this, b, P))) {
      var $ = E(this, t.call(this, b, P), b, P, "mouse");
      $ && (Ft(b.view).on("mousemove.drag", m, oo).on("mouseup.drag", y, oo), Gc(b.view), Xi(b), c = !1, a = b.clientX, l = b.clientY, $("start", b));
    }
  }
  function m(b) {
    if (Er(b), !c) {
      var P = b.clientX - a, $ = b.clientY - l;
      c = P * P + $ * $ > h;
    }
    o.mouse("drag", b);
  }
  function y(b) {
    Ft(b.view).on("mousemove.drag mouseup.drag", null), Uc(b.view, c), Er(b), o.mouse("end", b);
  }
  function w(b, P) {
    if (e.call(this, b, P)) {
      var $ = b.changedTouches, A = t.call(this, b, P), I = $.length, V, Y;
      for (V = 0; V < I; ++V)
        (Y = E(this, A, b, P, $[V].identifier, $[V])) && (Xi(b), Y("start", b, $[V]));
    }
  }
  function _(b) {
    var P = b.changedTouches, $ = P.length, A, I;
    for (A = 0; A < $; ++A)
      (I = o[P[A].identifier]) && (Er(b), I("drag", b, P[A]));
  }
  function k(b) {
    var P = b.changedTouches, $ = P.length, A, I;
    for (d && clearTimeout(d), d = setTimeout(function() {
      d = null;
    }, 500), A = 0; A < $; ++A)
      (I = o[P[A].identifier]) && (Xi(b), I("end", b, P[A]));
  }
  function E(b, P, $, A, I, V) {
    var Y = i.copy(), z = qt(V || $, P), S, T, x;
    if ((x = n.call(b, new ms("beforestart", {
      sourceEvent: $,
      target: f,
      identifier: I,
      active: s,
      x: z[0],
      y: z[1],
      dx: 0,
      dy: 0,
      dispatch: Y
    }), A)) != null)
      return S = x.x - z[0] || 0, T = x.y - z[1] || 0, function C(O, M, Z) {
        var U = z, L;
        switch (O) {
          case "start":
            o[I] = C, L = s++;
            break;
          case "end":
            delete o[I], --s;
          // falls through
          case "drag":
            z = qt(Z || M, P), L = s;
            break;
        }
        Y.call(
          O,
          b,
          new ms(O, {
            sourceEvent: M,
            subject: x,
            target: f,
            identifier: I,
            active: L,
            x: z[0] + S,
            y: z[1] + T,
            dx: z[0] - U[0],
            dy: z[1] - U[1],
            dispatch: Y
          }),
          A
        );
      };
  }
  return f.filter = function(b) {
    return arguments.length ? (e = typeof b == "function" ? b : Vo(!!b), f) : e;
  }, f.container = function(b) {
    return arguments.length ? (t = typeof b == "function" ? b : Vo(b), f) : t;
  }, f.subject = function(b) {
    return arguments.length ? (n = typeof b == "function" ? b : Vo(b), f) : n;
  }, f.touchable = function(b) {
    return arguments.length ? (r = typeof b == "function" ? b : Vo(!!b), f) : r;
  }, f.on = function() {
    var b = i.on.apply(i, arguments);
    return b === i ? f : b;
  }, f.clickDistance = function(b) {
    return arguments.length ? (h = (b = +b) * b, f) : Math.sqrt(h);
  }, f;
}
function ea(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function Jc(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function ko() {
}
var io = 0.7, ii = 1 / io, Sr = "\\s*([+-]?\\d+)\\s*", so = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", gn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Ov = /^#([0-9a-f]{3,8})$/, Mv = new RegExp(`^rgb\\(${Sr},${Sr},${Sr}\\)$`), Hv = new RegExp(`^rgb\\(${gn},${gn},${gn}\\)$`), Lv = new RegExp(`^rgba\\(${Sr},${Sr},${Sr},${so}\\)$`), Vv = new RegExp(`^rgba\\(${gn},${gn},${gn},${so}\\)$`), Iv = new RegExp(`^hsl\\(${so},${gn},${gn}\\)$`), zv = new RegExp(`^hsla\\(${so},${gn},${gn},${so}\\)$`), za = {
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
ea(ko, hr, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Ra,
  // Deprecated! Use color.formatHex.
  formatHex: Ra,
  formatHex8: Rv,
  formatHsl: Bv,
  formatRgb: Ba,
  toString: Ba
});
function Ra() {
  return this.rgb().formatHex();
}
function Rv() {
  return this.rgb().formatHex8();
}
function Bv() {
  return Qc(this).formatHsl();
}
function Ba() {
  return this.rgb().formatRgb();
}
function hr(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = Ov.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? Fa(t) : n === 3 ? new $t(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Io(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Io(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Mv.exec(e)) ? new $t(t[1], t[2], t[3], 1) : (t = Hv.exec(e)) ? new $t(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Lv.exec(e)) ? Io(t[1], t[2], t[3], t[4]) : (t = Vv.exec(e)) ? Io(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Iv.exec(e)) ? Ya(t[1], t[2] / 100, t[3] / 100, 1) : (t = zv.exec(e)) ? Ya(t[1], t[2] / 100, t[3] / 100, t[4]) : za.hasOwnProperty(e) ? Fa(za[e]) : e === "transparent" ? new $t(NaN, NaN, NaN, 0) : null;
}
function Fa(e) {
  return new $t(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Io(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new $t(e, t, n, r);
}
function Fv(e) {
  return e instanceof ko || (e = hr(e)), e ? (e = e.rgb(), new $t(e.r, e.g, e.b, e.opacity)) : new $t();
}
function ys(e, t, n, r) {
  return arguments.length === 1 ? Fv(e) : new $t(e, t, n, r ?? 1);
}
function $t(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
ea($t, ys, Jc(ko, {
  brighter(e) {
    return e = e == null ? ii : Math.pow(ii, e), new $t(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? io : Math.pow(io, e), new $t(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new $t(lr(this.r), lr(this.g), lr(this.b), si(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Ka,
  // Deprecated! Use color.formatHex.
  formatHex: Ka,
  formatHex8: Kv,
  formatRgb: Za,
  toString: Za
}));
function Ka() {
  return `#${ir(this.r)}${ir(this.g)}${ir(this.b)}`;
}
function Kv() {
  return `#${ir(this.r)}${ir(this.g)}${ir(this.b)}${ir((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Za() {
  const e = si(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${lr(this.r)}, ${lr(this.g)}, ${lr(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function si(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function lr(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function ir(e) {
  return e = lr(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Ya(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Gt(e, t, n, r);
}
function Qc(e) {
  if (e instanceof Gt) return new Gt(e.h, e.s, e.l, e.opacity);
  if (e instanceof ko || (e = hr(e)), !e) return new Gt();
  if (e instanceof Gt) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), s = NaN, a = i - o, l = (i + o) / 2;
  return a ? (t === i ? s = (n - r) / a + (n < r) * 6 : n === i ? s = (r - t) / a + 2 : s = (t - n) / a + 4, a /= l < 0.5 ? i + o : 2 - i - o, s *= 60) : a = l > 0 && l < 1 ? 0 : s, new Gt(s, a, l, e.opacity);
}
function Zv(e, t, n, r) {
  return arguments.length === 1 ? Qc(e) : new Gt(e, t, n, r ?? 1);
}
function Gt(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
ea(Gt, Zv, Jc(ko, {
  brighter(e) {
    return e = e == null ? ii : Math.pow(ii, e), new Gt(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? io : Math.pow(io, e), new Gt(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new $t(
      ji(e >= 240 ? e - 240 : e + 120, o, r),
      ji(e, o, r),
      ji(e < 120 ? e + 240 : e - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new Gt(Wa(this.h), zo(this.s), zo(this.l), si(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = si(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Wa(this.h)}, ${zo(this.s) * 100}%, ${zo(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Wa(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function zo(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function ji(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const ta = (e) => () => e;
function Yv(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function Wv(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function Xv(e) {
  return (e = +e) == 1 ? eu : function(t, n) {
    return n - t ? Wv(t, n, e) : ta(isNaN(t) ? n : t);
  };
}
function eu(e, t) {
  var n = t - e;
  return n ? Yv(e, n) : ta(isNaN(e) ? t : e);
}
const ai = function e(t) {
  var n = Xv(t);
  function r(o, i) {
    var s = n((o = ys(o)).r, (i = ys(i)).r), a = n(o.g, i.g), l = n(o.b, i.b), c = eu(o.opacity, i.opacity);
    return function(d) {
      return o.r = s(d), o.g = a(d), o.b = l(d), o.opacity = c(d), o + "";
    };
  }
  return r.gamma = e, r;
}(1);
function jv(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, r = t.slice(), o;
  return function(i) {
    for (o = 0; o < n; ++o) r[o] = e[o] * (1 - i) + t[o] * i;
    return r;
  };
}
function qv(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Gv(e, t) {
  var n = t ? t.length : 0, r = e ? Math.min(n, e.length) : 0, o = new Array(r), i = new Array(n), s;
  for (s = 0; s < r; ++s) o[s] = eo(e[s], t[s]);
  for (; s < n; ++s) i[s] = t[s];
  return function(a) {
    for (s = 0; s < r; ++s) i[s] = o[s](a);
    return i;
  };
}
function Uv(e, t) {
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
function Jv(e, t) {
  var n = {}, r = {}, o;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (o in t)
    o in e ? n[o] = eo(e[o], t[o]) : r[o] = t[o];
  return function(i) {
    for (o in n) r[o] = n[o](i);
    return r;
  };
}
var ws = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, qi = new RegExp(ws.source, "g");
function Qv(e) {
  return function() {
    return e;
  };
}
function e1(e) {
  return function(t) {
    return e(t) + "";
  };
}
function tu(e, t) {
  var n = ws.lastIndex = qi.lastIndex = 0, r, o, i, s = -1, a = [], l = [];
  for (e = e + "", t = t + ""; (r = ws.exec(e)) && (o = qi.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), a[s] ? a[s] += i : a[++s] = i), (r = r[0]) === (o = o[0]) ? a[s] ? a[s] += o : a[++s] = o : (a[++s] = null, l.push({ i: s, x: un(r, o) })), n = qi.lastIndex;
  return n < t.length && (i = t.slice(n), a[s] ? a[s] += i : a[++s] = i), a.length < 2 ? l[0] ? e1(l[0].x) : Qv(t) : (t = l.length, function(c) {
    for (var d = 0, h; d < t; ++d) a[(h = l[d]).i] = h.x(c);
    return a.join("");
  });
}
function eo(e, t) {
  var n = typeof t, r;
  return t == null || n === "boolean" ? ta(t) : (n === "number" ? un : n === "string" ? (r = hr(t)) ? (t = r, ai) : tu : t instanceof hr ? ai : t instanceof Date ? Uv : qv(t) ? jv : Array.isArray(t) ? Gv : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? Jv : un)(e, t);
}
var Xa = 180 / Math.PI, _s = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function nu(e, t, n, r, o, i) {
  var s, a, l;
  return (s = Math.sqrt(e * e + t * t)) && (e /= s, t /= s), (l = e * n + t * r) && (n -= e * l, r -= t * l), (a = Math.sqrt(n * n + r * r)) && (n /= a, r /= a, l /= a), e * r < t * n && (e = -e, t = -t, l = -l, s = -s), {
    translateX: o,
    translateY: i,
    rotate: Math.atan2(t, e) * Xa,
    skewX: Math.atan(l) * Xa,
    scaleX: s,
    scaleY: a
  };
}
var Ro;
function t1(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? _s : nu(t.a, t.b, t.c, t.d, t.e, t.f);
}
function n1(e) {
  return e == null || (Ro || (Ro = document.createElementNS("http://www.w3.org/2000/svg", "g")), Ro.setAttribute("transform", e), !(e = Ro.transform.baseVal.consolidate())) ? _s : (e = e.matrix, nu(e.a, e.b, e.c, e.d, e.e, e.f));
}
function ru(e, t, n, r) {
  function o(c) {
    return c.length ? c.pop() + " " : "";
  }
  function i(c, d, h, f, g, m) {
    if (c !== h || d !== f) {
      var y = g.push("translate(", null, t, null, n);
      m.push({ i: y - 4, x: un(c, h) }, { i: y - 2, x: un(d, f) });
    } else (h || f) && g.push("translate(" + h + t + f + n);
  }
  function s(c, d, h, f) {
    c !== d ? (c - d > 180 ? d += 360 : d - c > 180 && (c += 360), f.push({ i: h.push(o(h) + "rotate(", null, r) - 2, x: un(c, d) })) : d && h.push(o(h) + "rotate(" + d + r);
  }
  function a(c, d, h, f) {
    c !== d ? f.push({ i: h.push(o(h) + "skewX(", null, r) - 2, x: un(c, d) }) : d && h.push(o(h) + "skewX(" + d + r);
  }
  function l(c, d, h, f, g, m) {
    if (c !== h || d !== f) {
      var y = g.push(o(g) + "scale(", null, ",", null, ")");
      m.push({ i: y - 4, x: un(c, h) }, { i: y - 2, x: un(d, f) });
    } else (h !== 1 || f !== 1) && g.push(o(g) + "scale(" + h + "," + f + ")");
  }
  return function(c, d) {
    var h = [], f = [];
    return c = e(c), d = e(d), i(c.translateX, c.translateY, d.translateX, d.translateY, h, f), s(c.rotate, d.rotate, h, f), a(c.skewX, d.skewX, h, f), l(c.scaleX, c.scaleY, d.scaleX, d.scaleY, h, f), c = d = null, function(g) {
      for (var m = -1, y = f.length, w; ++m < y; ) h[(w = f[m]).i] = w.x(g);
      return h.join("");
    };
  };
}
var r1 = ru(t1, "px, ", "px)", "deg)"), o1 = ru(n1, ", ", ")", ")"), i1 = 1e-12;
function ja(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function s1(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function a1(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const Xo = function e(t, n, r) {
  function o(i, s) {
    var a = i[0], l = i[1], c = i[2], d = s[0], h = s[1], f = s[2], g = d - a, m = h - l, y = g * g + m * m, w, _;
    if (y < i1)
      _ = Math.log(f / c) / t, w = function(A) {
        return [
          a + A * g,
          l + A * m,
          c * Math.exp(t * A * _)
        ];
      };
    else {
      var k = Math.sqrt(y), E = (f * f - c * c + r * y) / (2 * c * n * k), b = (f * f - c * c - r * y) / (2 * f * n * k), P = Math.log(Math.sqrt(E * E + 1) - E), $ = Math.log(Math.sqrt(b * b + 1) - b);
      _ = ($ - P) / t, w = function(A) {
        var I = A * _, V = ja(P), Y = c / (n * k) * (V * a1(t * I + P) - s1(P));
        return [
          a + Y * g,
          l + Y * m,
          c * V / ja(t * I + P)
        ];
      };
    }
    return w.duration = _ * 1e3 * t / Math.SQRT2, w;
  }
  return o.rho = function(i) {
    var s = Math.max(1e-3, +i), a = s * s, l = a * a;
    return e(s, a, l);
  }, o;
}(Math.SQRT2, 2, 4);
var Hr = 0, qr = 0, Wr = 0, ou = 1e3, li, Gr, ci = 0, gr = 0, Oi = 0, ao = typeof performance == "object" && performance.now ? performance : Date, iu = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function na() {
  return gr || (iu(l1), gr = ao.now() + Oi);
}
function l1() {
  gr = 0;
}
function ui() {
  this._call = this._time = this._next = null;
}
ui.prototype = su.prototype = {
  constructor: ui,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? na() : +n) + (t == null ? 0 : +t), !this._next && Gr !== this && (Gr ? Gr._next = this : li = this, Gr = this), this._call = e, this._time = n, xs();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, xs());
  }
};
function su(e, t, n) {
  var r = new ui();
  return r.restart(e, t, n), r;
}
function c1() {
  na(), ++Hr;
  for (var e = li, t; e; )
    (t = gr - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --Hr;
}
function qa() {
  gr = (ci = ao.now()) + Oi, Hr = qr = 0;
  try {
    c1();
  } finally {
    Hr = 0, d1(), gr = 0;
  }
}
function u1() {
  var e = ao.now(), t = e - ci;
  t > ou && (Oi -= t, ci = e);
}
function d1() {
  for (var e, t = li, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : li = n);
  Gr = e, xs(r);
}
function xs(e) {
  if (!Hr) {
    qr && (qr = clearTimeout(qr));
    var t = e - gr;
    t > 24 ? (e < 1 / 0 && (qr = setTimeout(qa, e - ao.now() - Oi)), Wr && (Wr = clearInterval(Wr))) : (Wr || (ci = ao.now(), Wr = setInterval(u1, ou)), Hr = 1, iu(qa));
  }
}
function Ga(e, t, n) {
  var r = new ui();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var f1 = Di("start", "end", "cancel", "interrupt"), h1 = [], au = 0, Ua = 1, bs = 2, jo = 3, Ja = 4, Cs = 5, qo = 6;
function Mi(e, t, n, r, o, i) {
  var s = e.__transition;
  if (!s) e.__transition = {};
  else if (n in s) return;
  g1(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: f1,
    tween: h1,
    time: i.time,
    delay: i.delay,
    duration: i.duration,
    ease: i.ease,
    timer: null,
    state: au
  });
}
function ra(e, t) {
  var n = rn(e, t);
  if (n.state > au) throw new Error("too late; already scheduled");
  return n;
}
function yn(e, t) {
  var n = rn(e, t);
  if (n.state > jo) throw new Error("too late; already running");
  return n;
}
function rn(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function g1(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = su(i, 0, n.time);
  function i(c) {
    n.state = Ua, n.timer.restart(s, n.delay, n.time), n.delay <= c && s(c - n.delay);
  }
  function s(c) {
    var d, h, f, g;
    if (n.state !== Ua) return l();
    for (d in r)
      if (g = r[d], g.name === n.name) {
        if (g.state === jo) return Ga(s);
        g.state === Ja ? (g.state = qo, g.timer.stop(), g.on.call("interrupt", e, e.__data__, g.index, g.group), delete r[d]) : +d < t && (g.state = qo, g.timer.stop(), g.on.call("cancel", e, e.__data__, g.index, g.group), delete r[d]);
      }
    if (Ga(function() {
      n.state === jo && (n.state = Ja, n.timer.restart(a, n.delay, n.time), a(c));
    }), n.state = bs, n.on.call("start", e, e.__data__, n.index, n.group), n.state === bs) {
      for (n.state = jo, o = new Array(f = n.tween.length), d = 0, h = -1; d < f; ++d)
        (g = n.tween[d].value.call(e, e.__data__, n.index, n.group)) && (o[++h] = g);
      o.length = h + 1;
    }
  }
  function a(c) {
    for (var d = c < n.duration ? n.ease.call(null, c / n.duration) : (n.timer.restart(l), n.state = Cs, 1), h = -1, f = o.length; ++h < f; )
      o[h].call(e, d);
    n.state === Cs && (n.on.call("end", e, e.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = qo, n.timer.stop(), delete r[t];
    for (var c in r) return;
    delete e.__transition;
  }
}
function Go(e, t) {
  var n = e.__transition, r, o, i = !0, s;
  if (n) {
    t = t == null ? null : t + "";
    for (s in n) {
      if ((r = n[s]).name !== t) {
        i = !1;
        continue;
      }
      o = r.state > bs && r.state < Cs, r.state = qo, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[s];
    }
    i && delete e.__transition;
  }
}
function v1(e) {
  return this.each(function() {
    Go(this, e);
  });
}
function p1(e, t) {
  var n, r;
  return function() {
    var o = yn(this, e), i = o.tween;
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
function m1(e, t, n) {
  var r, o;
  if (typeof n != "function") throw new Error();
  return function() {
    var i = yn(this, e), s = i.tween;
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
function y1(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = rn(this.node(), n).tween, o = 0, i = r.length, s; o < i; ++o)
      if ((s = r[o]).name === e)
        return s.value;
    return null;
  }
  return this.each((t == null ? p1 : m1)(n, e, t));
}
function oa(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = yn(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return rn(o, r).value[t];
  };
}
function lu(e, t) {
  var n;
  return (typeof t == "number" ? un : t instanceof hr ? ai : (n = hr(t)) ? (t = n, ai) : tu)(e, t);
}
function w1(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function _1(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function x1(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttribute(e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function b1(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttributeNS(e.space, e.local);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function C1(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttribute(e) : (s = this.getAttribute(e), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a)));
  };
}
function k1(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttributeNS(e.space, e.local) : (s = this.getAttributeNS(e.space, e.local), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a)));
  };
}
function E1(e, t) {
  var n = Ai(e), r = n === "transform" ? o1 : lu;
  return this.attrTween(e, typeof t == "function" ? (n.local ? k1 : C1)(n, r, oa(this, "attr." + e, t)) : t == null ? (n.local ? _1 : w1)(n) : (n.local ? b1 : x1)(n, r, t));
}
function S1(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function N1(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function P1(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && N1(e, i)), n;
  }
  return o._value = t, o;
}
function $1(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && S1(e, i)), n;
  }
  return o._value = t, o;
}
function T1(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = Ai(e);
  return this.tween(n, (r.local ? P1 : $1)(r, t));
}
function D1(e, t) {
  return function() {
    ra(this, e).delay = +t.apply(this, arguments);
  };
}
function A1(e, t) {
  return t = +t, function() {
    ra(this, e).delay = t;
  };
}
function O1(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? D1 : A1)(t, e)) : rn(this.node(), t).delay;
}
function M1(e, t) {
  return function() {
    yn(this, e).duration = +t.apply(this, arguments);
  };
}
function H1(e, t) {
  return t = +t, function() {
    yn(this, e).duration = t;
  };
}
function L1(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? M1 : H1)(t, e)) : rn(this.node(), t).duration;
}
function V1(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    yn(this, e).ease = t;
  };
}
function I1(e) {
  var t = this._id;
  return arguments.length ? this.each(V1(t, e)) : rn(this.node(), t).ease;
}
function z1(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    yn(this, e).ease = n;
  };
}
function R1(e) {
  if (typeof e != "function") throw new Error();
  return this.each(z1(this._id, e));
}
function B1(e) {
  typeof e != "function" && (e = Rc(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, c = 0; c < s; ++c)
      (l = i[c]) && e.call(l, l.__data__, c, i) && a.push(l);
  return new Tn(r, this._parents, this._name, this._id);
}
function F1(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), s = new Array(r), a = 0; a < i; ++a)
    for (var l = t[a], c = n[a], d = l.length, h = s[a] = new Array(d), f, g = 0; g < d; ++g)
      (f = l[g] || c[g]) && (h[g] = f);
  for (; a < r; ++a)
    s[a] = t[a];
  return new Tn(s, this._parents, this._name, this._id);
}
function K1(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function Z1(e, t, n) {
  var r, o, i = K1(t) ? ra : yn;
  return function() {
    var s = i(this, e), a = s.on;
    a !== r && (o = (r = a).copy()).on(t, n), s.on = o;
  };
}
function Y1(e, t) {
  var n = this._id;
  return arguments.length < 2 ? rn(this.node(), n).on.on(e) : this.each(Z1(n, e, t));
}
function W1(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function X1() {
  return this.on("end.remove", W1(this._id));
}
function j1(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Js(e));
  for (var r = this._groups, o = r.length, i = new Array(o), s = 0; s < o; ++s)
    for (var a = r[s], l = a.length, c = i[s] = new Array(l), d, h, f = 0; f < l; ++f)
      (d = a[f]) && (h = e.call(d, d.__data__, f, a)) && ("__data__" in d && (h.__data__ = d.__data__), c[f] = h, Mi(c[f], t, n, f, c, rn(d, n)));
  return new Tn(i, this._parents, t, n);
}
function q1(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = zc(e));
  for (var r = this._groups, o = r.length, i = [], s = [], a = 0; a < o; ++a)
    for (var l = r[a], c = l.length, d, h = 0; h < c; ++h)
      if (d = l[h]) {
        for (var f = e.call(d, d.__data__, h, l), g, m = rn(d, n), y = 0, w = f.length; y < w; ++y)
          (g = f[y]) && Mi(g, t, n, y, f, m);
        i.push(f), s.push(d);
      }
  return new Tn(i, s, t, n);
}
var G1 = Co.prototype.constructor;
function U1() {
  return new G1(this._groups, this._parents);
}
function J1(e, t) {
  var n, r, o;
  return function() {
    var i = Mr(this, e), s = (this.style.removeProperty(e), Mr(this, e));
    return i === s ? null : i === n && s === r ? o : o = t(n = i, r = s);
  };
}
function cu(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Q1(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = Mr(this, e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function ep(e, t, n) {
  var r, o, i;
  return function() {
    var s = Mr(this, e), a = n(this), l = a + "";
    return a == null && (l = a = (this.style.removeProperty(e), Mr(this, e))), s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a));
  };
}
function tp(e, t) {
  var n, r, o, i = "style." + t, s = "end." + i, a;
  return function() {
    var l = yn(this, e), c = l.on, d = l.value[i] == null ? a || (a = cu(t)) : void 0;
    (c !== n || o !== d) && (r = (n = c).copy()).on(s, o = d), l.on = r;
  };
}
function np(e, t, n) {
  var r = (e += "") == "transform" ? r1 : lu;
  return t == null ? this.styleTween(e, J1(e, r)).on("end.style." + e, cu(e)) : typeof t == "function" ? this.styleTween(e, ep(e, r, oa(this, "style." + e, t))).each(tp(this._id, e)) : this.styleTween(e, Q1(e, r, t), n).on("end.style." + e, null);
}
function rp(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function op(e, t, n) {
  var r, o;
  function i() {
    var s = t.apply(this, arguments);
    return s !== o && (r = (o = s) && rp(e, s, n)), r;
  }
  return i._value = t, i;
}
function ip(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  return this.tween(r, op(e, t, n ?? ""));
}
function sp(e) {
  return function() {
    this.textContent = e;
  };
}
function ap(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function lp(e) {
  return this.tween("text", typeof e == "function" ? ap(oa(this, "text", e)) : sp(e == null ? "" : e + ""));
}
function cp(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function up(e) {
  var t, n;
  function r() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && cp(o)), t;
  }
  return r._value = e, r;
}
function dp(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, up(e));
}
function fp() {
  for (var e = this._name, t = this._id, n = uu(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, c = 0; c < a; ++c)
      if (l = s[c]) {
        var d = rn(l, t);
        Mi(l, e, n, c, s, {
          time: d.time + d.delay + d.duration,
          delay: 0,
          duration: d.duration,
          ease: d.ease
        });
      }
  return new Tn(r, this._parents, e, n);
}
function hp() {
  var e, t, n = this, r = n._id, o = n.size();
  return new Promise(function(i, s) {
    var a = { value: s }, l = { value: function() {
      --o === 0 && i();
    } };
    n.each(function() {
      var c = yn(this, r), d = c.on;
      d !== e && (t = (e = d).copy(), t._.cancel.push(a), t._.interrupt.push(a), t._.end.push(l)), c.on = t;
    }), o === 0 && i();
  });
}
var gp = 0;
function Tn(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function uu() {
  return ++gp;
}
var wn = Co.prototype;
Tn.prototype = {
  constructor: Tn,
  select: j1,
  selectAll: q1,
  selectChild: wn.selectChild,
  selectChildren: wn.selectChildren,
  filter: B1,
  merge: F1,
  selection: U1,
  transition: fp,
  call: wn.call,
  nodes: wn.nodes,
  node: wn.node,
  size: wn.size,
  empty: wn.empty,
  each: wn.each,
  on: Y1,
  attr: E1,
  attrTween: T1,
  style: np,
  styleTween: ip,
  text: lp,
  textTween: dp,
  remove: X1,
  tween: y1,
  delay: O1,
  duration: L1,
  ease: I1,
  easeVarying: R1,
  end: hp,
  [Symbol.iterator]: wn[Symbol.iterator]
};
function vp(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var pp = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: vp
};
function mp(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function yp(e) {
  var t, n;
  e instanceof Tn ? (t = e._id, e = e._name) : (t = uu(), (n = pp).time = na(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, c = 0; c < a; ++c)
      (l = s[c]) && Mi(l, e, t, c, s, n || mp(l, t));
  return new Tn(r, this._parents, e, t);
}
Co.prototype.interrupt = v1;
Co.prototype.transition = yp;
const Bo = (e) => () => e;
function wp(e, {
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
var Hi = new bn(1, 0, 0);
du.prototype = bn.prototype;
function du(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return Hi;
  return e.__zoom;
}
function Gi(e) {
  e.stopImmediatePropagation();
}
function Xr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function _p(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function xp() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function Qa() {
  return this.__zoom || Hi;
}
function bp(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function Cp() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function kp(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0], o = e.invertX(t[1][0]) - n[1][0], i = e.invertY(t[0][1]) - n[0][1], s = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    s > i ? (i + s) / 2 : Math.min(0, i) || Math.max(0, s)
  );
}
function fu() {
  var e = _p, t = xp, n = kp, r = bp, o = Cp, i = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], a = 250, l = Xo, c = Di("start", "zoom", "end"), d, h, f, g = 500, m = 150, y = 0, w = 10;
  function _(x) {
    x.property("__zoom", Qa).on("wheel.zoom", I, { passive: !1 }).on("mousedown.zoom", V).on("dblclick.zoom", Y).filter(o).on("touchstart.zoom", z).on("touchmove.zoom", S).on("touchend.zoom touchcancel.zoom", T).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  _.transform = function(x, C, O, M) {
    var Z = x.selection ? x.selection() : x;
    Z.property("__zoom", Qa), x !== Z ? P(x, C, O, M) : Z.interrupt().each(function() {
      $(this, arguments).event(M).start().zoom(null, typeof C == "function" ? C.apply(this, arguments) : C).end();
    });
  }, _.scaleBy = function(x, C, O, M) {
    _.scaleTo(x, function() {
      var Z = this.__zoom.k, U = typeof C == "function" ? C.apply(this, arguments) : C;
      return Z * U;
    }, O, M);
  }, _.scaleTo = function(x, C, O, M) {
    _.transform(x, function() {
      var Z = t.apply(this, arguments), U = this.__zoom, L = O == null ? b(Z) : typeof O == "function" ? O.apply(this, arguments) : O, W = U.invert(L), K = typeof C == "function" ? C.apply(this, arguments) : C;
      return n(E(k(U, K), L, W), Z, s);
    }, O, M);
  }, _.translateBy = function(x, C, O, M) {
    _.transform(x, function() {
      return n(this.__zoom.translate(
        typeof C == "function" ? C.apply(this, arguments) : C,
        typeof O == "function" ? O.apply(this, arguments) : O
      ), t.apply(this, arguments), s);
    }, null, M);
  }, _.translateTo = function(x, C, O, M, Z) {
    _.transform(x, function() {
      var U = t.apply(this, arguments), L = this.__zoom, W = M == null ? b(U) : typeof M == "function" ? M.apply(this, arguments) : M;
      return n(Hi.translate(W[0], W[1]).scale(L.k).translate(
        typeof C == "function" ? -C.apply(this, arguments) : -C,
        typeof O == "function" ? -O.apply(this, arguments) : -O
      ), U, s);
    }, M, Z);
  };
  function k(x, C) {
    return C = Math.max(i[0], Math.min(i[1], C)), C === x.k ? x : new bn(C, x.x, x.y);
  }
  function E(x, C, O) {
    var M = C[0] - O[0] * x.k, Z = C[1] - O[1] * x.k;
    return M === x.x && Z === x.y ? x : new bn(x.k, M, Z);
  }
  function b(x) {
    return [(+x[0][0] + +x[1][0]) / 2, (+x[0][1] + +x[1][1]) / 2];
  }
  function P(x, C, O, M) {
    x.on("start.zoom", function() {
      $(this, arguments).event(M).start();
    }).on("interrupt.zoom end.zoom", function() {
      $(this, arguments).event(M).end();
    }).tween("zoom", function() {
      var Z = this, U = arguments, L = $(Z, U).event(M), W = t.apply(Z, U), K = O == null ? b(W) : typeof O == "function" ? O.apply(Z, U) : O, q = Math.max(W[1][0] - W[0][0], W[1][1] - W[0][1]), j = Z.__zoom, F = typeof C == "function" ? C.apply(Z, U) : C, J = l(j.invert(K).concat(q / j.k), F.invert(K).concat(q / F.k));
      return function(G) {
        if (G === 1) G = F;
        else {
          var ne = J(G), ee = q / ne[2];
          G = new bn(ee, K[0] - ne[0] * ee, K[1] - ne[1] * ee);
        }
        L.zoom(null, G);
      };
    });
  }
  function $(x, C, O) {
    return !O && x.__zooming || new A(x, C);
  }
  function A(x, C) {
    this.that = x, this.args = C, this.active = 0, this.sourceEvent = null, this.extent = t.apply(x, C), this.taps = 0;
  }
  A.prototype = {
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
      var C = Ft(this.that).datum();
      c.call(
        x,
        this.that,
        new wp(x, {
          sourceEvent: this.sourceEvent,
          target: _,
          transform: this.that.__zoom,
          dispatch: c
        }),
        C
      );
    }
  };
  function I(x, ...C) {
    if (!e.apply(this, arguments)) return;
    var O = $(this, C).event(x), M = this.__zoom, Z = Math.max(i[0], Math.min(i[1], M.k * Math.pow(2, r.apply(this, arguments)))), U = qt(x);
    if (O.wheel)
      (O.mouse[0][0] !== U[0] || O.mouse[0][1] !== U[1]) && (O.mouse[1] = M.invert(O.mouse[0] = U)), clearTimeout(O.wheel);
    else {
      if (M.k === Z) return;
      O.mouse = [U, M.invert(U)], Go(this), O.start();
    }
    Xr(x), O.wheel = setTimeout(L, m), O.zoom("mouse", n(E(k(M, Z), O.mouse[0], O.mouse[1]), O.extent, s));
    function L() {
      O.wheel = null, O.end();
    }
  }
  function V(x, ...C) {
    if (f || !e.apply(this, arguments)) return;
    var O = x.currentTarget, M = $(this, C, !0).event(x), Z = Ft(x.view).on("mousemove.zoom", K, !0).on("mouseup.zoom", q, !0), U = qt(x, O), L = x.clientX, W = x.clientY;
    Gc(x.view), Gi(x), M.mouse = [U, this.__zoom.invert(U)], Go(this), M.start();
    function K(j) {
      if (Xr(j), !M.moved) {
        var F = j.clientX - L, J = j.clientY - W;
        M.moved = F * F + J * J > y;
      }
      M.event(j).zoom("mouse", n(E(M.that.__zoom, M.mouse[0] = qt(j, O), M.mouse[1]), M.extent, s));
    }
    function q(j) {
      Z.on("mousemove.zoom mouseup.zoom", null), Uc(j.view, M.moved), Xr(j), M.event(j).end();
    }
  }
  function Y(x, ...C) {
    if (e.apply(this, arguments)) {
      var O = this.__zoom, M = qt(x.changedTouches ? x.changedTouches[0] : x, this), Z = O.invert(M), U = O.k * (x.shiftKey ? 0.5 : 2), L = n(E(k(O, U), M, Z), t.apply(this, C), s);
      Xr(x), a > 0 ? Ft(this).transition().duration(a).call(P, L, M, x) : Ft(this).call(_.transform, L, M, x);
    }
  }
  function z(x, ...C) {
    if (e.apply(this, arguments)) {
      var O = x.touches, M = O.length, Z = $(this, C, x.changedTouches.length === M).event(x), U, L, W, K;
      for (Gi(x), L = 0; L < M; ++L)
        W = O[L], K = qt(W, this), K = [K, this.__zoom.invert(K), W.identifier], Z.touch0 ? !Z.touch1 && Z.touch0[2] !== K[2] && (Z.touch1 = K, Z.taps = 0) : (Z.touch0 = K, U = !0, Z.taps = 1 + !!d);
      d && (d = clearTimeout(d)), U && (Z.taps < 2 && (h = K[0], d = setTimeout(function() {
        d = null;
      }, g)), Go(this), Z.start());
    }
  }
  function S(x, ...C) {
    if (this.__zooming) {
      var O = $(this, C).event(x), M = x.changedTouches, Z = M.length, U, L, W, K;
      for (Xr(x), U = 0; U < Z; ++U)
        L = M[U], W = qt(L, this), O.touch0 && O.touch0[2] === L.identifier ? O.touch0[0] = W : O.touch1 && O.touch1[2] === L.identifier && (O.touch1[0] = W);
      if (L = O.that.__zoom, O.touch1) {
        var q = O.touch0[0], j = O.touch0[1], F = O.touch1[0], J = O.touch1[1], G = (G = F[0] - q[0]) * G + (G = F[1] - q[1]) * G, ne = (ne = J[0] - j[0]) * ne + (ne = J[1] - j[1]) * ne;
        L = k(L, Math.sqrt(G / ne)), W = [(q[0] + F[0]) / 2, (q[1] + F[1]) / 2], K = [(j[0] + J[0]) / 2, (j[1] + J[1]) / 2];
      } else if (O.touch0) W = O.touch0[0], K = O.touch0[1];
      else return;
      O.zoom("touch", n(E(L, W, K), O.extent, s));
    }
  }
  function T(x, ...C) {
    if (this.__zooming) {
      var O = $(this, C).event(x), M = x.changedTouches, Z = M.length, U, L;
      for (Gi(x), f && clearTimeout(f), f = setTimeout(function() {
        f = null;
      }, g), U = 0; U < Z; ++U)
        L = M[U], O.touch0 && O.touch0[2] === L.identifier ? delete O.touch0 : O.touch1 && O.touch1[2] === L.identifier && delete O.touch1;
      if (O.touch1 && !O.touch0 && (O.touch0 = O.touch1, delete O.touch1), O.touch0) O.touch0[1] = this.__zoom.invert(O.touch0[0]);
      else if (O.end(), O.taps === 2 && (L = qt(L, this), Math.hypot(h[0] - L[0], h[1] - L[1]) < w)) {
        var W = Ft(this).on("dblclick.zoom");
        W && W.apply(this, arguments);
      }
    }
  }
  return _.wheelDelta = function(x) {
    return arguments.length ? (r = typeof x == "function" ? x : Bo(+x), _) : r;
  }, _.filter = function(x) {
    return arguments.length ? (e = typeof x == "function" ? x : Bo(!!x), _) : e;
  }, _.touchable = function(x) {
    return arguments.length ? (o = typeof x == "function" ? x : Bo(!!x), _) : o;
  }, _.extent = function(x) {
    return arguments.length ? (t = typeof x == "function" ? x : Bo([[+x[0][0], +x[0][1]], [+x[1][0], +x[1][1]]]), _) : t;
  }, _.scaleExtent = function(x) {
    return arguments.length ? (i[0] = +x[0], i[1] = +x[1], _) : [i[0], i[1]];
  }, _.translateExtent = function(x) {
    return arguments.length ? (s[0][0] = +x[0][0], s[1][0] = +x[1][0], s[0][1] = +x[0][1], s[1][1] = +x[1][1], _) : [[s[0][0], s[0][1]], [s[1][0], s[1][1]]];
  }, _.constrain = function(x) {
    return arguments.length ? (n = x, _) : n;
  }, _.duration = function(x) {
    return arguments.length ? (a = +x, _) : a;
  }, _.interpolate = function(x) {
    return arguments.length ? (l = x, _) : l;
  }, _.on = function() {
    var x = c.on.apply(c, arguments);
    return x === c ? _ : x;
  }, _.clickDistance = function(x) {
    return arguments.length ? (y = (x = +x) * x, _) : Math.sqrt(y);
  }, _.tapDistance = function(x) {
    return arguments.length ? (w = +x, _) : w;
  }, _;
}
const lo = {
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
}, ks = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
], hu = ["Enter", " ", "Escape"], Ep = {
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
var Lr;
(function(e) {
  e.Strict = "strict", e.Loose = "loose";
})(Lr || (Lr = {}));
var cr;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(cr || (cr = {}));
var di;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(di || (di = {}));
const Es = {
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
var ye;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(ye || (ye = {}));
const el = {
  [ye.Left]: ye.Right,
  [ye.Right]: ye.Left,
  [ye.Top]: ye.Bottom,
  [ye.Bottom]: ye.Top
};
function Sp(e, t) {
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
function tl(e, t, n) {
  if (!n)
    return;
  const r = [];
  e.forEach((o, i) => {
    t?.has(i) || r.push(o);
  }), r.length && n(r);
}
function Np(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const gu = (e) => "id" in e && "source" in e && "target" in e, Pp = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), ia = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), Eo = (e, t = [0, 0]) => {
  const { width: n, height: r } = tr(e), o = e.origin ?? t, i = n * o[0], s = r * o[1];
  return {
    x: e.position.x - i,
    y: e.position.y - s
  };
}, $p = (e, t = { nodeOrigin: [0, 0] }) => {
  if (e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = e.reduce((r, o) => {
    const i = typeof o == "string";
    let s = !t.nodeLookup && !i ? o : void 0;
    t.nodeLookup && (s = i ? t.nodeLookup.get(o) : ia(o) ? o : t.nodeLookup.get(o.id));
    const a = s ? fi(s, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return Li(r, a);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return Vi(n);
}, So = (e, t = {}) => {
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 }, r = !1;
  return e.forEach((o) => {
    (t.filter === void 0 || t.filter(o)) && (n = Li(n, fi(o)), r = !0);
  }), r ? Vi(n) : { x: 0, y: 0, width: 0, height: 0 };
}, sa = (e, t, [n, r, o] = [0, 0, 1], i = !1, s = !1) => {
  const a = {
    ...Po(t, [n, r, o]),
    width: t.width / o,
    height: t.height / o
  }, l = [];
  for (const c of e.values()) {
    const { measured: d, selectable: h = !0, hidden: f = !1 } = c;
    if (s && !h || f)
      continue;
    const g = d.width ?? c.width ?? c.initialWidth ?? null, m = d.height ?? c.height ?? c.initialHeight ?? null, y = uo(a, Ir(c)), w = (g ?? 0) * (m ?? 0), _ = i && y > 0;
    (!c.internals.handleBounds || _ || y >= w || c.dragging) && l.push(c);
  }
  return l;
}, Tp = (e, t) => {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    n.add(r.id);
  }), t.filter((r) => n.has(r.source) || n.has(r.target));
};
function Dp(e, t) {
  const n = /* @__PURE__ */ new Map(), r = t?.nodes ? new Set(t.nodes.map((o) => o.id)) : null;
  return e.forEach((o) => {
    o.measured.width && o.measured.height && (t?.includeHiddenNodes || !o.hidden) && (!r || r.has(o.id)) && n.set(o.id, o);
  }), n;
}
async function Ap({ nodes: e, width: t, height: n, panZoom: r, minZoom: o, maxZoom: i }, s) {
  if (e.size === 0)
    return Promise.resolve(!0);
  const a = Dp(e, s), l = So(a), c = aa(l, t, n, s?.minZoom ?? o, s?.maxZoom ?? i, s?.padding ?? 0.1);
  return await r.setViewport(c, {
    duration: s?.duration,
    ease: s?.ease,
    interpolate: s?.interpolate
  }), Promise.resolve(!0);
}
function vu({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
  const s = n.get(e), a = s.parentId ? n.get(s.parentId) : void 0, { x: l, y: c } = a ? a.internals.positionAbsolute : { x: 0, y: 0 }, d = s.origin ?? r;
  let h = s.extent || o;
  if (s.extent === "parent" && !s.expandParent)
    if (!a)
      i?.("005", lo.error005());
    else {
      const g = a.measured.width, m = a.measured.height;
      g && m && (h = [
        [l, c],
        [l + g, c + m]
      ]);
    }
  else a && zr(s.extent) && (h = [
    [s.extent[0][0] + l, s.extent[0][1] + c],
    [s.extent[1][0] + l, s.extent[1][1] + c]
  ]);
  const f = zr(h) ? vr(t, h, s.measured) : t;
  return (s.measured.width === void 0 || s.measured.height === void 0) && i?.("015", lo.error015()), {
    position: {
      x: f.x - l + (s.measured.width ?? 0) * d[0],
      y: f.y - c + (s.measured.height ?? 0) * d[1]
    },
    positionAbsolute: f
  };
}
async function Op({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: r, onBeforeDelete: o }) {
  const i = new Set(e.map((f) => f.id)), s = [];
  for (const f of n) {
    if (f.deletable === !1)
      continue;
    const g = i.has(f.id), m = !g && f.parentId && s.find((y) => y.id === f.parentId);
    (g || m) && s.push(f);
  }
  const a = new Set(t.map((f) => f.id)), l = r.filter((f) => f.deletable !== !1), d = Tp(s, l);
  for (const f of l)
    a.has(f.id) && !d.find((m) => m.id === f.id) && d.push(f);
  if (!o)
    return {
      edges: d,
      nodes: s
    };
  const h = await o({
    nodes: s,
    edges: d
  });
  return typeof h == "boolean" ? h ? { edges: d, nodes: s } : { edges: [], nodes: [] } : h;
}
const Vr = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), vr = (e = { x: 0, y: 0 }, t, n) => ({
  x: Vr(e.x, t[0][0], t[1][0] - (n?.width ?? 0)),
  y: Vr(e.y, t[0][1], t[1][1] - (n?.height ?? 0))
});
function pu(e, t, n) {
  const { width: r, height: o } = tr(n), { x: i, y: s } = n.internals.positionAbsolute;
  return vr(e, [
    [i, s],
    [i + r, s + o]
  ], t);
}
const nl = (e, t, n) => e < t ? Vr(Math.abs(e - t), 1, t) / t : e > n ? -Vr(Math.abs(e - n), 1, t) / t : 0, mu = (e, t, n = 15, r = 40) => {
  const o = nl(e.x, r, t.width - r) * n, i = nl(e.y, r, t.height - r) * n;
  return [o, i];
}, Li = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), Ss = ({ x: e, y: t, width: n, height: r }) => ({
  x: e,
  y: t,
  x2: e + n,
  y2: t + r
}), Vi = ({ x: e, y: t, x2: n, y2: r }) => ({
  x: e,
  y: t,
  width: n - e,
  height: r - t
}), Ir = (e, t = [0, 0]) => {
  const { x: n, y: r } = ia(e) ? e.internals.positionAbsolute : Eo(e, t);
  return {
    x: n,
    y: r,
    width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
    height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
  };
}, fi = (e, t = [0, 0]) => {
  const { x: n, y: r } = ia(e) ? e.internals.positionAbsolute : Eo(e, t);
  return {
    x: n,
    y: r,
    x2: n + (e.measured?.width ?? e.width ?? e.initialWidth ?? 0),
    y2: r + (e.measured?.height ?? e.height ?? e.initialHeight ?? 0)
  };
}, yu = (e, t) => Vi(Li(Ss(e), Ss(t))), uo = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, rl = (e) => Cn(e.width) && Cn(e.height) && Cn(e.x) && Cn(e.y), Cn = (e) => !isNaN(e) && isFinite(e), Mp = (e, t) => {
}, No = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), Po = ({ x: e, y: t }, [n, r, o], i = !1, s = [1, 1]) => {
  const a = {
    x: (e - n) / o,
    y: (t - r) / o
  };
  return i ? No(a, s) : a;
}, hi = ({ x: e, y: t }, [n, r, o]) => ({
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
function Hp(e, t, n) {
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
function Lp(e, t, n, r, o, i) {
  const { x: s, y: a } = hi(e, [t, n, r]), { x: l, y: c } = hi({ x: e.x + e.width, y: e.y + e.height }, [t, n, r]), d = o - l, h = i - c;
  return {
    left: Math.floor(s),
    top: Math.floor(a),
    right: Math.floor(d),
    bottom: Math.floor(h)
  };
}
const aa = (e, t, n, r, o, i) => {
  const s = Hp(i, t, n), a = (t - s.x) / e.width, l = (n - s.y) / e.height, c = Math.min(a, l), d = Vr(c, r, o), h = e.x + e.width / 2, f = e.y + e.height / 2, g = t / 2 - h * d, m = n / 2 - f * d, y = Lp(e, g, m, d, t, n), w = {
    left: Math.min(y.left - s.left, 0),
    top: Math.min(y.top - s.top, 0),
    right: Math.min(y.right - s.right, 0),
    bottom: Math.min(y.bottom - s.bottom, 0)
  };
  return {
    x: g - w.left + w.right,
    y: m - w.top + w.bottom,
    zoom: d
  };
}, sr = () => typeof navigator < "u" && navigator?.userAgent?.indexOf("Mac") >= 0;
function zr(e) {
  return e != null && e !== "parent";
}
function tr(e) {
  return {
    width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
    height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
  };
}
function wu(e) {
  return (e.measured?.width ?? e.width ?? e.initialWidth) !== void 0 && (e.measured?.height ?? e.height ?? e.initialHeight) !== void 0;
}
function Vp(e, t = { width: 0, height: 0 }, n, r, o) {
  const i = { ...e }, s = r.get(n);
  if (s) {
    const a = s.origin || o;
    i.x += s.internals.positionAbsolute.x - (t.width ?? 0) * a[0], i.y += s.internals.positionAbsolute.y - (t.height ?? 0) * a[1];
  }
  return i;
}
function Ip(e) {
  return { ...Ep, ...e || {} };
}
function Ui(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: i, y: s } = Jt(e), a = Po({ x: i - (o?.left ?? 0), y: s - (o?.top ?? 0) }, r), { x: l, y: c } = n ? No(a, t) : a;
  return {
    xSnapped: l,
    ySnapped: c,
    ...a
  };
}
const _u = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), xu = (e) => e?.getRootNode?.() || window?.document, zp = ["INPUT", "SELECT", "TEXTAREA"];
function bu(e) {
  const t = e.composedPath?.()?.[0] || e.target;
  return t?.nodeType !== 1 ? !1 : zp.includes(t.nodeName) || t.hasAttribute("contenteditable") || !!t.closest(".nokey");
}
const Cu = (e) => "clientX" in e, Jt = (e, t) => {
  const n = Cu(e), r = n ? e.clientX : e.touches?.[0].clientX, o = n ? e.clientY : e.touches?.[0].clientY;
  return {
    x: r - (t?.left ?? 0),
    y: o - (t?.top ?? 0)
  };
}, ol = (e, t, n, r, o) => {
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
      ..._u(s)
    };
  });
};
function Rp({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: o, sourceControlY: i, targetControlX: s, targetControlY: a }) {
  const l = e * 0.125 + o * 0.375 + s * 0.375 + n * 0.125, c = t * 0.125 + i * 0.375 + a * 0.375 + r * 0.125, d = Math.abs(l - e), h = Math.abs(c - t);
  return [l, c, d, h];
}
function Fo(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function il({ pos: e, x1: t, y1: n, x2: r, y2: o, c: i }) {
  switch (e) {
    case ye.Left:
      return [t - Fo(t - r, i), n];
    case ye.Right:
      return [t + Fo(r - t, i), n];
    case ye.Top:
      return [t, n - Fo(n - o, i)];
    case ye.Bottom:
      return [t, n + Fo(o - n, i)];
  }
}
function ku({ sourceX: e, sourceY: t, sourcePosition: n = ye.Bottom, targetX: r, targetY: o, targetPosition: i = ye.Top, curvature: s = 0.25 }) {
  const [a, l] = il({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: o,
    c: s
  }), [c, d] = il({
    pos: i,
    x1: r,
    y1: o,
    x2: e,
    y2: t,
    c: s
  }), [h, f, g, m] = Rp({
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
    h,
    f,
    g,
    m
  ];
}
function Eu({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const o = Math.abs(n - e) / 2, i = n < e ? n + o : n - o, s = Math.abs(r - t) / 2, a = r < t ? r + s : r - s;
  return [i, a, o, s];
}
function Bp({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r, elevateOnSelect: o = !1 }) {
  if (r !== void 0)
    return r;
  const i = o && n ? 1e3 : 0, s = Math.max(e.parentId || o && e.selected ? e.internals.z : 0, t.parentId || o && t.selected ? t.internals.z : 0);
  return i + s;
}
function Fp({ sourceNode: e, targetNode: t, width: n, height: r, transform: o }) {
  const i = Li(fi(e), fi(t));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const s = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return uo(s, Vi(i)) > 0;
}
const Kp = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, Zp = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), Yp = (e, t) => {
  if (!e.source || !e.target)
    return t;
  let n;
  return gu(e) ? n = { ...e } : n = {
    ...e,
    id: Kp(e)
  }, Zp(n, t) ? t : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, t.concat(n));
};
function Su({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const [o, i, s, a] = Eu({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: r
  });
  return [`M ${e},${t}L ${n},${r}`, o, i, s, a];
}
const sl = {
  [ye.Left]: { x: -1, y: 0 },
  [ye.Right]: { x: 1, y: 0 },
  [ye.Top]: { x: 0, y: -1 },
  [ye.Bottom]: { x: 0, y: 1 }
}, Wp = ({ source: e, sourcePosition: t = ye.Bottom, target: n }) => t === ye.Left || t === ye.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, al = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function Xp({ source: e, sourcePosition: t = ye.Bottom, target: n, targetPosition: r = ye.Top, center: o, offset: i, stepPosition: s }) {
  const a = sl[t], l = sl[r], c = { x: e.x + a.x * i, y: e.y + a.y * i }, d = { x: n.x + l.x * i, y: n.y + l.y * i }, h = Wp({
    source: c,
    sourcePosition: t,
    target: d
  }), f = h.x !== 0 ? "x" : "y", g = h[f];
  let m = [], y, w;
  const _ = { x: 0, y: 0 }, k = { x: 0, y: 0 }, [, , E, b] = Eu({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (a[f] * l[f] === -1) {
    f === "x" ? (y = o.x ?? c.x + (d.x - c.x) * s, w = o.y ?? (c.y + d.y) / 2) : (y = o.x ?? (c.x + d.x) / 2, w = o.y ?? c.y + (d.y - c.y) * s);
    const $ = [
      { x: y, y: c.y },
      { x: y, y: d.y }
    ], A = [
      { x: c.x, y: w },
      { x: d.x, y: w }
    ];
    a[f] === g ? m = f === "x" ? $ : A : m = f === "x" ? A : $;
  } else {
    const $ = [{ x: c.x, y: d.y }], A = [{ x: d.x, y: c.y }];
    if (f === "x" ? m = a.x === g ? A : $ : m = a.y === g ? $ : A, t === r) {
      const S = Math.abs(e[f] - n[f]);
      if (S <= i) {
        const T = Math.min(i - 1, i - S);
        a[f] === g ? _[f] = (c[f] > e[f] ? -1 : 1) * T : k[f] = (d[f] > n[f] ? -1 : 1) * T;
      }
    }
    if (t !== r) {
      const S = f === "x" ? "y" : "x", T = a[f] === l[S], x = c[S] > d[S], C = c[S] < d[S];
      (a[f] === 1 && (!T && x || T && C) || a[f] !== 1 && (!T && C || T && x)) && (m = f === "x" ? $ : A);
    }
    const I = { x: c.x + _.x, y: c.y + _.y }, V = { x: d.x + k.x, y: d.y + k.y }, Y = Math.max(Math.abs(I.x - m[0].x), Math.abs(V.x - m[0].x)), z = Math.max(Math.abs(I.y - m[0].y), Math.abs(V.y - m[0].y));
    Y >= z ? (y = (I.x + V.x) / 2, w = m[0].y) : (y = m[0].x, w = (I.y + V.y) / 2);
  }
  return [[
    e,
    { x: c.x + _.x, y: c.y + _.y },
    ...m,
    { x: d.x + k.x, y: d.y + k.y },
    n
  ], y, w, E, b];
}
function jp(e, t, n, r) {
  const o = Math.min(al(e, t) / 2, al(t, n) / 2, r), { x: i, y: s } = t;
  if (e.x === i && i === n.x || e.y === s && s === n.y)
    return `L${i} ${s}`;
  if (e.y === s) {
    const c = e.x < n.x ? -1 : 1, d = e.y < n.y ? 1 : -1;
    return `L ${i + o * c},${s}Q ${i},${s} ${i},${s + o * d}`;
  }
  const a = e.x < n.x ? 1 : -1, l = e.y < n.y ? -1 : 1;
  return `L ${i},${s + o * l}Q ${i},${s} ${i + o * a},${s}`;
}
function la({ sourceX: e, sourceY: t, sourcePosition: n = ye.Bottom, targetX: r, targetY: o, targetPosition: i = ye.Top, borderRadius: s = 5, centerX: a, centerY: l, offset: c = 20, stepPosition: d = 0.5 }) {
  const [h, f, g, m, y] = Xp({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: a, y: l },
    offset: c,
    stepPosition: d
  });
  return [h.reduce((_, k, E) => {
    let b = "";
    return E > 0 && E < h.length - 1 ? b = jp(h[E - 1], k, h[E + 1], s) : b = `${E === 0 ? "M" : "L"}${k.x} ${k.y}`, _ += b, _;
  }, ""), f, g, m, y];
}
function ll(e) {
  return e && !!(e.internals.handleBounds || e.handles?.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function qp(e) {
  const { sourceNode: t, targetNode: n } = e;
  if (!ll(t) || !ll(n))
    return null;
  const r = t.internals.handleBounds || cl(t.handles), o = n.internals.handleBounds || cl(n.handles), i = ul(r?.source ?? [], e.sourceHandle), s = ul(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === Lr.Strict ? o?.target ?? [] : (o?.target ?? []).concat(o?.source ?? []),
    e.targetHandle
  );
  if (!i || !s)
    return e.onError?.("008", lo.error008(i ? "target" : "source", {
      id: e.id,
      sourceHandle: e.sourceHandle,
      targetHandle: e.targetHandle
    })), null;
  const a = i?.position || ye.Bottom, l = s?.position || ye.Top, c = fo(t, i, a), d = fo(n, s, l);
  return {
    sourceX: c.x,
    sourceY: c.y,
    targetX: d.x,
    targetY: d.y,
    sourcePosition: a,
    targetPosition: l
  };
}
function cl(e) {
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
function fo(e, t, n = ye.Left, r = !1) {
  const o = (t?.x ?? 0) + e.internals.positionAbsolute.x, i = (t?.y ?? 0) + e.internals.positionAbsolute.y, { width: s, height: a } = t ?? tr(e);
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
function ul(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function Ns(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((r) => `${r}=${e[r]}`).join("&")}` : "";
}
function Gp(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const i = /* @__PURE__ */ new Set();
  return e.reduce((s, a) => ([a.markerStart || r, a.markerEnd || o].forEach((l) => {
    if (l && typeof l == "object") {
      const c = Ns(l, t);
      i.has(c) || (s.push({ id: c, color: l.color || n, ...l }), i.add(c));
    }
  }), s), []).sort((s, a) => s.id.localeCompare(a.id));
}
function Up(e, t, n, r, o) {
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
const Nu = 1e3, Jp = 10, ca = {
  nodeOrigin: [0, 0],
  nodeExtent: ks,
  elevateNodesOnSelect: !0,
  defaults: {}
}, Qp = {
  ...ca,
  checkEquality: !0
};
function ua(e, t) {
  const n = { ...e };
  for (const r in t)
    t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function e0(e, t, n) {
  const r = ua(ca, n);
  for (const o of e.values())
    if (o.parentId)
      da(o, e, t, r);
    else {
      const i = Eo(o, r.nodeOrigin), s = zr(o.extent) ? o.extent : r.nodeExtent, a = vr(i, s, tr(o));
      o.internals.positionAbsolute = a;
    }
}
function t0(e, t) {
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
function n0(e, t, n, r) {
  const o = ua(Qp, r);
  let i = { i: -1 }, s = e.length > 0;
  const a = new Map(t), l = o?.elevateNodesOnSelect ? Nu : 0;
  t.clear(), n.clear();
  for (const c of e) {
    let d = a.get(c.id);
    if (o.checkEquality && c === d?.internals.userNode)
      t.set(c.id, d);
    else {
      const h = Eo(c, o.nodeOrigin), f = zr(c.extent) ? c.extent : o.nodeExtent, g = vr(h, f, tr(c));
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
          handleBounds: t0(c, d),
          z: Pu(c, l),
          userNode: c
        }
      }, t.set(c.id, d);
    }
    (d.measured === void 0 || d.measured.width === void 0 || d.measured.height === void 0) && !d.hidden && (s = !1), c.parentId && da(d, t, n, r, i);
  }
  return s;
}
function r0(e, t) {
  if (!e.parentId)
    return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function da(e, t, n, r, o) {
  const { elevateNodesOnSelect: i, nodeOrigin: s, nodeExtent: a } = ua(ca, r), l = e.parentId, c = t.get(l);
  if (!c) {
    console.warn(`Parent node ${l} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  r0(e, n), o && !c.parentId && c.internals.rootParentIndex === void 0 && (c.internals.rootParentIndex = ++o.i, c.internals.z = c.internals.z + o.i * Jp), o && c.internals.rootParentIndex !== void 0 && (o.i = c.internals.rootParentIndex);
  const d = i ? Nu : 0, { x: h, y: f, z: g } = o0(e, c, s, a, d), { positionAbsolute: m } = e.internals, y = h !== m.x || f !== m.y;
  (y || g !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: y ? { x: h, y: f } : m,
      z: g
    }
  });
}
function Pu(e, t) {
  return (Cn(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function o0(e, t, n, r, o) {
  const { x: i, y: s } = t.internals.positionAbsolute, a = tr(e), l = Eo(e, n), c = zr(e.extent) ? vr(l, e.extent, a) : l;
  let d = vr({ x: i + c.x, y: s + c.y }, r, a);
  e.extent === "parent" && (d = pu(d, a, t));
  const h = Pu(e, o), f = t.internals.z ?? 0;
  return {
    x: d.x,
    y: d.y,
    z: f >= h ? f + 1 : h
  };
}
function i0(e, t, n, r = [0, 0]) {
  const o = [], i = /* @__PURE__ */ new Map();
  for (const s of e) {
    const a = t.get(s.parentId);
    if (!a)
      continue;
    const l = i.get(s.parentId)?.expandedRect ?? Ir(a), c = yu(l, s.rect);
    i.set(s.parentId, { expandedRect: c, parent: a });
  }
  return i.size > 0 && i.forEach(({ expandedRect: s, parent: a }, l) => {
    const c = a.internals.positionAbsolute, d = tr(a), h = a.origin ?? r, f = s.x < c.x ? Math.round(Math.abs(c.x - s.x)) : 0, g = s.y < c.y ? Math.round(Math.abs(c.y - s.y)) : 0, m = Math.max(d.width, Math.round(s.width)), y = Math.max(d.height, Math.round(s.height)), w = (m - d.width) * h[0], _ = (y - d.height) * h[1];
    (f > 0 || g > 0 || w || _) && (o.push({
      id: l,
      type: "position",
      position: {
        x: a.position.x - f + w,
        y: a.position.y - g + _
      }
    }), n.get(l)?.forEach((k) => {
      e.some((E) => E.id === k.id) || o.push({
        id: k.id,
        type: "position",
        position: {
          x: k.position.x + f,
          y: k.position.y + g
        }
      });
    })), (d.width < s.width || d.height < s.height || f || g) && o.push({
      id: l,
      type: "dimensions",
      setAttributes: !0,
      dimensions: {
        width: m + (f ? h[0] * f - w : 0),
        height: y + (g ? h[1] * g - _ : 0)
      }
    });
  }), o;
}
function s0(e, t, n, r, o, i) {
  const s = r?.querySelector(".xyflow__viewport");
  let a = !1;
  if (!s)
    return { changes: [], updatedInternals: a };
  const l = [], c = window.getComputedStyle(s), { m22: d } = new window.DOMMatrixReadOnly(c.transform), h = [];
  for (const f of e.values()) {
    const g = t.get(f.id);
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
    const m = _u(f.nodeElement), y = g.measured.width !== m.width || g.measured.height !== m.height;
    if (!!(m.width && m.height && (y || !g.internals.handleBounds || f.force))) {
      const _ = f.nodeElement.getBoundingClientRect(), k = zr(g.extent) ? g.extent : i;
      let { positionAbsolute: E } = g.internals;
      g.parentId && g.extent === "parent" ? E = pu(E, m, t.get(g.parentId)) : k && (E = vr(E, k, m));
      const b = {
        ...g,
        measured: m,
        internals: {
          ...g.internals,
          positionAbsolute: E,
          handleBounds: {
            source: ol("source", f.nodeElement, _, d, g.id),
            target: ol("target", f.nodeElement, _, d, g.id)
          }
        }
      };
      t.set(g.id, b), g.parentId && da(b, t, n, { nodeOrigin: o }), a = !0, y && (l.push({
        id: g.id,
        type: "dimensions",
        dimensions: m
      }), g.expandParent && g.parentId && h.push({
        id: g.id,
        parentId: g.parentId,
        rect: Ir(b, o)
      }));
    }
  }
  if (h.length > 0) {
    const f = i0(h, t, n, o);
    l.push(...f);
  }
  return { changes: l, updatedInternals: a };
}
async function a0({ delta: e, panZoom: t, transform: n, translateExtent: r, width: o, height: i }) {
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
function dl(e, t, n, r, o, i) {
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
function l0(e, t, n) {
  e.clear(), t.clear();
  for (const r of n) {
    const { source: o, target: i, sourceHandle: s = null, targetHandle: a = null } = r, l = { edgeId: r.id, source: o, target: i, sourceHandle: s, targetHandle: a }, c = `${o}-${s}--${i}-${a}`, d = `${i}-${a}--${o}-${s}`;
    dl("source", l, d, e, o, s), dl("target", l, c, e, i, a), t.set(r.id, r);
  }
}
function c0(e, t) {
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
function $u(e, t) {
  if (!e.parentId)
    return !1;
  const n = t.get(e.parentId);
  return n ? n.selected ? !0 : $u(n, t) : !1;
}
function fl(e, t, n) {
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
function u0(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  for (const [i, s] of e)
    if ((s.selected || s.id === r) && (!s.parentId || !$u(s, e)) && (s.draggable || t && typeof s.draggable > "u")) {
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
function d0({ dragItems: e, snapGrid: t, x: n, y: r }) {
  const o = e.values().next().value;
  if (!o)
    return null;
  const i = {
    x: n - o.distance.x,
    y: r - o.distance.y
  }, s = No(i, t);
  return {
    x: s.x - i.x,
    y: s.y - i.y
  };
}
function f0({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: o }) {
  let i = { x: null, y: null }, s = 0, a = /* @__PURE__ */ new Map(), l = !1, c = { x: 0, y: 0 }, d = null, h = !1, f = null, g = !1, m = !1, y = null;
  function w({ noDragClassName: k, handleSelector: E, domNode: b, isSelectable: P, nodeId: $, nodeClickDistance: A = 0 }) {
    f = Ft(b);
    function I({ x: S, y: T }) {
      const { nodeLookup: x, nodeExtent: C, snapGrid: O, snapToGrid: M, nodeOrigin: Z, onNodeDrag: U, onSelectionDrag: L, onError: W, updateNodePositions: K } = t();
      i = { x: S, y: T };
      let q = !1;
      const j = a.size > 1, F = j && C ? Ss(So(a)) : null, J = j && M ? d0({
        dragItems: a,
        snapGrid: O,
        x: S,
        y: T
      }) : null;
      for (const [G, ne] of a) {
        if (!x.has(G))
          continue;
        let ee = { x: S - ne.distance.x, y: T - ne.distance.y };
        M && (ee = J ? {
          x: Math.round(ee.x + J.x),
          y: Math.round(ee.y + J.y)
        } : No(ee, O));
        let we = null;
        if (j && C && !ne.extent && F) {
          const { positionAbsolute: re } = ne.internals, he = re.x - F.x + C[0][0], ge = re.x + ne.measured.width - F.x2 + C[1][0], _e = re.y - F.y + C[0][1], fe = re.y + ne.measured.height - F.y2 + C[1][1];
          we = [
            [he, _e],
            [ge, fe]
          ];
        }
        const { position: oe, positionAbsolute: le } = vu({
          nodeId: G,
          nextPosition: ee,
          nodeLookup: x,
          nodeExtent: we || C,
          nodeOrigin: Z,
          onError: W
        });
        q = q || ne.position.x !== oe.x || ne.position.y !== oe.y, ne.position = oe, ne.internals.positionAbsolute = le;
      }
      if (m = m || q, !!q && (K(a, !0), y && (r || U || !$ && L))) {
        const [G, ne] = Ji({
          nodeId: $,
          dragItems: a,
          nodeLookup: x
        });
        r?.(y, a, G, ne), U?.(y, G, ne), $ || L?.(y, ne);
      }
    }
    async function V() {
      if (!d)
        return;
      const { transform: S, panBy: T, autoPanSpeed: x, autoPanOnNodeDrag: C } = t();
      if (!C) {
        l = !1, cancelAnimationFrame(s);
        return;
      }
      const [O, M] = mu(c, d, x);
      (O !== 0 || M !== 0) && (i.x = (i.x ?? 0) - O / S[2], i.y = (i.y ?? 0) - M / S[2], await T({ x: O, y: M }) && I(i)), s = requestAnimationFrame(V);
    }
    function Y(S) {
      const { nodeLookup: T, multiSelectionActive: x, nodesDraggable: C, transform: O, snapGrid: M, snapToGrid: Z, selectNodesOnDrag: U, onNodeDragStart: L, onSelectionDragStart: W, unselectNodesAndEdges: K } = t();
      h = !0, (!U || !P) && !x && $ && (T.get($)?.selected || K()), P && U && $ && e?.($);
      const q = Ui(S.sourceEvent, { transform: O, snapGrid: M, snapToGrid: Z, containerBounds: d });
      if (i = q, a = u0(T, C, q, $), a.size > 0 && (n || L || !$ && W)) {
        const [j, F] = Ji({
          nodeId: $,
          dragItems: a,
          nodeLookup: T
        });
        n?.(S.sourceEvent, a, j, F), L?.(S.sourceEvent, j, F), $ || W?.(S.sourceEvent, F);
      }
    }
    const z = Av().clickDistance(A).on("start", (S) => {
      const { domNode: T, nodeDragThreshold: x, transform: C, snapGrid: O, snapToGrid: M } = t();
      d = T?.getBoundingClientRect() || null, g = !1, m = !1, y = S.sourceEvent, x === 0 && Y(S), i = Ui(S.sourceEvent, { transform: C, snapGrid: O, snapToGrid: M, containerBounds: d }), c = Jt(S.sourceEvent, d);
    }).on("drag", (S) => {
      const { autoPanOnNodeDrag: T, transform: x, snapGrid: C, snapToGrid: O, nodeDragThreshold: M, nodeLookup: Z } = t(), U = Ui(S.sourceEvent, { transform: x, snapGrid: C, snapToGrid: O, containerBounds: d });
      if (y = S.sourceEvent, (S.sourceEvent.type === "touchmove" && S.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      $ && !Z.has($)) && (g = !0), !g) {
        if (!l && T && h && (l = !0, V()), !h) {
          const L = Jt(S.sourceEvent, d), W = L.x - c.x, K = L.y - c.y;
          Math.sqrt(W * W + K * K) > M && Y(S);
        }
        (i.x !== U.xSnapped || i.y !== U.ySnapped) && a && h && (c = Jt(S.sourceEvent, d), I(U));
      }
    }).on("end", (S) => {
      if (!(!h || g) && (l = !1, h = !1, cancelAnimationFrame(s), a.size > 0)) {
        const { nodeLookup: T, updateNodePositions: x, onNodeDragStop: C, onSelectionDragStop: O } = t();
        if (m && (x(a, !1), m = !1), o || C || !$ && O) {
          const [M, Z] = Ji({
            nodeId: $,
            dragItems: a,
            nodeLookup: T,
            dragging: !1
          });
          o?.(S.sourceEvent, a, M, Z), C?.(S.sourceEvent, M, Z), $ || O?.(S.sourceEvent, Z);
        }
      }
    }).filter((S) => {
      const T = S.target;
      return !S.button && (!k || !fl(T, `.${k}`, b)) && (!E || fl(T, E, b));
    });
    f.call(z);
  }
  function _() {
    f?.on(".drag", null);
  }
  return {
    update: w,
    destroy: _
  };
}
function h0(e, t, n) {
  const r = [], o = {
    x: e.x - n,
    y: e.y - n,
    width: n * 2,
    height: n * 2
  };
  for (const i of t.values())
    uo(o, Ir(i)) > 0 && r.push(i);
  return r;
}
const g0 = 250;
function v0(e, t, n, r) {
  let o = [], i = 1 / 0;
  const s = h0(e, n, t + g0);
  for (const a of s) {
    const l = [...a.internals.handleBounds?.source ?? [], ...a.internals.handleBounds?.target ?? []];
    for (const c of l) {
      if (r.nodeId === c.nodeId && r.type === c.type && r.id === c.id)
        continue;
      const { x: d, y: h } = fo(a, c, c.position, !0), f = Math.sqrt(Math.pow(d - e.x, 2) + Math.pow(h - e.y, 2));
      f > t || (f < i ? (o = [{ ...c, x: d, y: h }], i = f) : f === i && o.push({ ...c, x: d, y: h }));
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
function Tu(e, t, n, r, o, i = !1) {
  const s = r.get(e);
  if (!s)
    return null;
  const a = o === "strict" ? s.internals.handleBounds?.[t] : [...s.internals.handleBounds?.source ?? [], ...s.internals.handleBounds?.target ?? []], l = (n ? a?.find((c) => c.id === n) : a?.[0]) ?? null;
  return l && i ? { ...l, ...fo(s, l, l.position, !0) } : l;
}
function Du(e, t) {
  return e || (t?.classList.contains("target") ? "target" : t?.classList.contains("source") ? "source" : null);
}
function p0(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const Au = () => !0;
function m0(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: s, domNode: a, nodeLookup: l, lib: c, autoPanOnConnect: d, flowId: h, panBy: f, cancelConnection: g, onConnectStart: m, onConnect: y, onConnectEnd: w, isValidConnection: _ = Au, onReconnectEnd: k, updateConnection: E, getTransform: b, getFromHandle: P, autoPanSpeed: $, dragThreshold: A = 1, handleDomNode: I }) {
  const V = xu(e.target);
  let Y = 0, z;
  const { x: S, y: T } = Jt(e), x = Du(i, I), C = a?.getBoundingClientRect();
  let O = !1;
  if (!C || !x)
    return;
  const M = Tu(o, x, r, l, t);
  if (!M)
    return;
  let Z = Jt(e, C), U = !1, L = null, W = !1, K = null;
  function q() {
    if (!d || !C)
      return;
    const [oe, le] = mu(Z, C, $);
    f({ x: oe, y: le }), Y = requestAnimationFrame(q);
  }
  const j = {
    ...M,
    nodeId: o,
    type: x,
    position: M.position
  }, F = l.get(o);
  let G = {
    inProgress: !0,
    isValid: null,
    from: fo(F, j, ye.Left, !0),
    fromHandle: j,
    fromPosition: j.position,
    fromNode: F,
    to: Z,
    toHandle: null,
    toPosition: el[j.position],
    toNode: null,
    pointer: Z
  };
  function ne() {
    O = !0, E(G), m?.(e, { nodeId: o, handleId: r, handleType: x });
  }
  A === 0 && ne();
  function ee(oe) {
    if (!O) {
      const { x: ge, y: _e } = Jt(oe), fe = ge - S, me = _e - T;
      if (!(fe * fe + me * me > A * A))
        return;
      ne();
    }
    if (!P() || !j) {
      we(oe);
      return;
    }
    const le = b();
    Z = Jt(oe, C), z = v0(Po(Z, le, !1, [1, 1]), n, l, j), U || (q(), U = !0);
    const re = Ou(oe, {
      handle: z,
      connectionMode: t,
      fromNodeId: o,
      fromHandleId: r,
      fromType: s ? "target" : "source",
      isValidConnection: _,
      doc: V,
      lib: c,
      flowId: h,
      nodeLookup: l
    });
    K = re.handleDomNode, L = re.connection, W = p0(!!z, re.isValid);
    const he = {
      // from stays the same
      ...G,
      isValid: W,
      to: re.toHandle && W ? hi({ x: re.toHandle.x, y: re.toHandle.y }, le) : Z,
      toHandle: re.toHandle,
      toPosition: W && re.toHandle ? re.toHandle.position : el[j.position],
      toNode: re.toHandle ? l.get(re.toHandle.nodeId) : null,
      pointer: Z
    };
    E(he), G = he;
  }
  function we(oe) {
    if (!("touches" in oe && oe.touches.length > 0)) {
      if (O) {
        (z || K) && L && W && y?.(L);
        const { inProgress: le, ...re } = G, he = {
          ...re,
          toPosition: G.toHandle ? G.toPosition : null
        };
        w?.(oe, he), i && k?.(oe, he);
      }
      g(), cancelAnimationFrame(Y), U = !1, W = !1, L = null, K = null, V.removeEventListener("mousemove", ee), V.removeEventListener("mouseup", we), V.removeEventListener("touchmove", ee), V.removeEventListener("touchend", we);
    }
  }
  V.addEventListener("mousemove", ee), V.addEventListener("mouseup", we), V.addEventListener("touchmove", ee), V.addEventListener("touchend", we);
}
function Ou(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: s, lib: a, flowId: l, isValidConnection: c = Au, nodeLookup: d }) {
  const h = i === "target", f = t ? s.querySelector(`.${a}-flow__handle[data-id="${l}-${t?.nodeId}-${t?.id}-${t?.type}"]`) : null, { x: g, y: m } = Jt(e), y = s.elementFromPoint(g, m), w = y?.classList.contains(`${a}-flow__handle`) ? y : f, _ = {
    handleDomNode: w,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (w) {
    const k = Du(void 0, w), E = w.getAttribute("data-nodeid"), b = w.getAttribute("data-handleid"), P = w.classList.contains("connectable"), $ = w.classList.contains("connectableend");
    if (!E || !k)
      return _;
    const A = {
      source: h ? E : r,
      sourceHandle: h ? b : o,
      target: h ? r : E,
      targetHandle: h ? o : b
    };
    _.connection = A;
    const V = P && $ && (n === Lr.Strict ? h && k === "source" || !h && k === "target" : E !== r || b !== o);
    _.isValid = V && c(A), _.toHandle = Tu(E, k, b, d, n, !0);
  }
  return _;
}
const hl = {
  onPointerDown: m0,
  isValid: Ou
};
function y0({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = Ft(e);
  function i({ translateExtent: a, width: l, height: c, zoomStep: d = 1, pannable: h = !0, zoomable: f = !0, inversePan: g = !1 }) {
    const m = (E) => {
      if (E.sourceEvent.type !== "wheel" || !t)
        return;
      const b = n(), P = E.sourceEvent.ctrlKey && sr() ? 10 : 1, $ = -E.sourceEvent.deltaY * (E.sourceEvent.deltaMode === 1 ? 0.05 : E.sourceEvent.deltaMode ? 1 : 2e-3) * d, A = b[2] * Math.pow(2, $ * P);
      t.scaleTo(A);
    };
    let y = [0, 0];
    const w = (E) => {
      (E.sourceEvent.type === "mousedown" || E.sourceEvent.type === "touchstart") && (y = [
        E.sourceEvent.clientX ?? E.sourceEvent.touches[0].clientX,
        E.sourceEvent.clientY ?? E.sourceEvent.touches[0].clientY
      ]);
    }, _ = (E) => {
      const b = n();
      if (E.sourceEvent.type !== "mousemove" && E.sourceEvent.type !== "touchmove" || !t)
        return;
      const P = [
        E.sourceEvent.clientX ?? E.sourceEvent.touches[0].clientX,
        E.sourceEvent.clientY ?? E.sourceEvent.touches[0].clientY
      ], $ = [P[0] - y[0], P[1] - y[1]];
      y = P;
      const A = r() * Math.max(b[2], Math.log(b[2])) * (g ? -1 : 1), I = {
        x: b[0] - $[0] * A,
        y: b[1] - $[1] * A
      }, V = [
        [0, 0],
        [l, c]
      ];
      t.setViewportConstrained({
        x: I.x,
        y: I.y,
        zoom: b[2]
      }, V, a);
    }, k = fu().on("start", w).on("zoom", h ? _ : null).on("zoom.wheel", f ? m : null);
    o.call(k, {});
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
const Ii = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), Qi = ({ x: e, y: t, zoom: n }) => Hi.translate(e, t).scale(n), Cr = (e, t) => e.target.closest(`.${t}`), Mu = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), w0 = (e) => ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2, es = (e, t = 0, n = w0, r = () => {
}) => {
  const o = typeof t == "number" && t > 0;
  return o || r(), o ? e.transition().duration(t).ease(n).on("end", r) : e;
}, Hu = (e) => {
  const t = e.ctrlKey && sr() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function _0({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: s, onPanZoomStart: a, onPanZoom: l, onPanZoomEnd: c }) {
  return (d) => {
    if (Cr(d, t))
      return d.ctrlKey && d.preventDefault(), !1;
    d.preventDefault(), d.stopImmediatePropagation();
    const h = n.property("__zoom").k || 1;
    if (d.ctrlKey && s) {
      const w = qt(d), _ = Hu(d), k = h * Math.pow(2, _);
      r.scaleTo(n, k, w, d);
      return;
    }
    const f = d.deltaMode === 1 ? 20 : 1;
    let g = o === cr.Vertical ? 0 : d.deltaX * f, m = o === cr.Horizontal ? 0 : d.deltaY * f;
    !sr() && d.shiftKey && o !== cr.Vertical && (g = d.deltaY * f, m = 0), r.translateBy(
      n,
      -(g / h) * i,
      -(m / h) * i,
      // @ts-ignore
      { internal: !0 }
    );
    const y = Ii(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling ? (l?.(d, y), e.panScrollTimeout = setTimeout(() => {
      c?.(d, y), e.isPanScrolling = !1;
    }, 150)) : (e.isPanScrolling = !0, a?.(d, y));
  };
}
function x0({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(r, o) {
    const i = r.type === "wheel", s = !t && i && !r.ctrlKey, a = Cr(r, e);
    if (r.ctrlKey && i && a && r.preventDefault(), s || a)
      return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function b0({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (r) => {
    if (r.sourceEvent?.internal)
      return;
    const o = Ii(r.transform);
    e.mouseButton = r.sourceEvent?.button || 0, e.isZoomingOrPanning = !0, e.prevViewport = o, r.sourceEvent?.type === "mousedown" && t(!0), n && n?.(r.sourceEvent, o);
  };
}
function C0({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (i) => {
    e.usedRightMouseButton = !!(n && Mu(t, e.mouseButton ?? 0)), i.sourceEvent?.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !i.sourceEvent?.internal && o?.(i.sourceEvent, Ii(i.transform));
  };
}
function k0({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (s) => {
    if (!s.sourceEvent?.internal && (e.isZoomingOrPanning = !1, i && Mu(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && s.sourceEvent && i(s.sourceEvent), e.usedRightMouseButton = !1, r(!1), o)) {
      const a = Ii(s.transform);
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
function E0({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: r, panOnScroll: o, zoomOnDoubleClick: i, userSelectionActive: s, noWheelClassName: a, noPanClassName: l, lib: c, connectionInProgress: d }) {
  return (h) => {
    const f = e || t, g = n && h.ctrlKey, m = h.type === "wheel";
    if (h.button === 1 && h.type === "mousedown" && (Cr(h, `${c}-flow__node`) || Cr(h, `${c}-flow__edge`)))
      return !0;
    if (!r && !f && !o && !i && !n || s || d && !m || Cr(h, a) && m || Cr(h, l) && (!m || o && m && !e) || !n && h.ctrlKey && m)
      return !1;
    if (!n && h.type === "touchstart" && h.touches?.length > 1)
      return h.preventDefault(), !1;
    if (!f && !o && !g && m || !r && (h.type === "mousedown" || h.type === "touchstart") || Array.isArray(r) && !r.includes(h.button) && h.type === "mousedown")
      return !1;
    const y = Array.isArray(r) && r.includes(h.button) || !h.button || h.button <= 1;
    return (!h.ctrlKey || m) && y;
  };
}
function S0({ domNode: e, minZoom: t, maxZoom: n, translateExtent: r, viewport: o, onPanZoom: i, onPanZoomStart: s, onPanZoomEnd: a, onDraggingChange: l }) {
  const c = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: {},
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, d = e.getBoundingClientRect(), h = fu().scaleExtent([t, n]).translateExtent(r), f = Ft(e).call(h);
  k({
    x: o.x,
    y: o.y,
    zoom: Vr(o.zoom, t, n)
  }, [
    [0, 0],
    [d.width, d.height]
  ], r);
  const g = f.on("wheel.zoom"), m = f.on("dblclick.zoom");
  h.wheelDelta(Hu);
  function y(z, S) {
    return f ? new Promise((T) => {
      h?.interpolate(S?.interpolate === "linear" ? eo : Xo).transform(es(f, S?.duration, S?.ease, () => T(!0)), z);
    }) : Promise.resolve(!1);
  }
  function w({ noWheelClassName: z, noPanClassName: S, onPaneContextMenu: T, userSelectionActive: x, panOnScroll: C, panOnDrag: O, panOnScrollMode: M, panOnScrollSpeed: Z, preventScrolling: U, zoomOnPinch: L, zoomOnScroll: W, zoomOnDoubleClick: K, zoomActivationKeyPressed: q, lib: j, onTransformChange: F, connectionInProgress: J, paneClickDistance: G, selectionOnDrag: ne }) {
    x && !c.isZoomingOrPanning && _();
    const ee = C && !q && !x;
    h.clickDistance(ne ? 1 / 0 : !Cn(G) || G < 0 ? 0 : G);
    const we = ee ? _0({
      zoomPanValues: c,
      noWheelClassName: z,
      d3Selection: f,
      d3Zoom: h,
      panOnScrollMode: M,
      panOnScrollSpeed: Z,
      zoomOnPinch: L,
      onPanZoomStart: s,
      onPanZoom: i,
      onPanZoomEnd: a
    }) : x0({
      noWheelClassName: z,
      preventScrolling: U,
      d3ZoomHandler: g
    });
    if (f.on("wheel.zoom", we, { passive: !1 }), !x) {
      const le = b0({
        zoomPanValues: c,
        onDraggingChange: l,
        onPanZoomStart: s
      });
      h.on("start", le);
      const re = C0({
        zoomPanValues: c,
        panOnDrag: O,
        onPaneContextMenu: !!T,
        onPanZoom: i,
        onTransformChange: F
      });
      h.on("zoom", re);
      const he = k0({
        zoomPanValues: c,
        panOnDrag: O,
        panOnScroll: C,
        onPaneContextMenu: T,
        onPanZoomEnd: a,
        onDraggingChange: l
      });
      h.on("end", he);
    }
    const oe = E0({
      zoomActivationKeyPressed: q,
      panOnDrag: O,
      zoomOnScroll: W,
      panOnScroll: C,
      zoomOnDoubleClick: K,
      zoomOnPinch: L,
      userSelectionActive: x,
      noPanClassName: S,
      noWheelClassName: z,
      lib: j,
      connectionInProgress: J
    });
    h.filter(oe), K ? f.on("dblclick.zoom", m) : f.on("dblclick.zoom", null);
  }
  function _() {
    h.on("zoom", null);
  }
  async function k(z, S, T) {
    const x = Qi(z), C = h?.constrain()(x, S, T);
    return C && await y(C), new Promise((O) => O(C));
  }
  async function E(z, S) {
    const T = Qi(z);
    return await y(T, S), new Promise((x) => x(T));
  }
  function b(z) {
    if (f) {
      const S = Qi(z), T = f.property("__zoom");
      (T.k !== z.zoom || T.x !== z.x || T.y !== z.y) && h?.transform(f, S, null, { sync: !0 });
    }
  }
  function P() {
    const z = f ? du(f.node()) : { x: 0, y: 0, k: 1 };
    return { x: z.x, y: z.y, zoom: z.k };
  }
  function $(z, S) {
    return f ? new Promise((T) => {
      h?.interpolate(S?.interpolate === "linear" ? eo : Xo).scaleTo(es(f, S?.duration, S?.ease, () => T(!0)), z);
    }) : Promise.resolve(!1);
  }
  function A(z, S) {
    return f ? new Promise((T) => {
      h?.interpolate(S?.interpolate === "linear" ? eo : Xo).scaleBy(es(f, S?.duration, S?.ease, () => T(!0)), z);
    }) : Promise.resolve(!1);
  }
  function I(z) {
    h?.scaleExtent(z);
  }
  function V(z) {
    h?.translateExtent(z);
  }
  function Y(z) {
    const S = !Cn(z) || z < 0 ? 0 : z;
    h?.clickDistance(S);
  }
  return {
    update: w,
    destroy: _,
    setViewport: E,
    setViewportConstrained: k,
    getViewport: P,
    scaleTo: $,
    scaleBy: A,
    setScaleExtent: I,
    setTranslateExtent: V,
    syncViewport: b,
    setClickDistance: Y
  };
}
var gl;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(gl || (gl = {}));
var N0 = /* @__PURE__ */ te("<div><!></div>");
function qn(e, t) {
  ue(t, !0);
  let n = p(t, "id", 7, null), r = p(t, "type", 7, "source"), o = p(t, "position", 23, () => ye.Top), i = p(t, "style", 7), s = p(t, "class", 7), a = p(t, "isConnectable", 7), l = p(t, "isConnectableStart", 7, !0), c = p(t, "isConnectableEnd", 7, !0), d = p(t, "isValidConnection", 7), h = p(t, "onconnect", 7), f = p(t, "ondisconnect", 7), g = p(t, "children", 7), m = /* @__PURE__ */ Be(t, [
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
  const y = Xn("svelteflow__node_id"), w = Xn("svelteflow__node_connectable");
  let _ = /* @__PURE__ */ N(() => r() === "target"), k = /* @__PURE__ */ N(() => a() !== void 0 ? a() : w.value), E = on(), b = /* @__PURE__ */ N(() => E.ariaLabelConfig), P = null;
  hc(() => {
    if (h() || f()) {
      E.edges;
      let L = E.connectionLookup.get(`${y}-${r()}${n() ? `-${n()}` : ""}`);
      if (P && !Sp(L, P)) {
        const W = L ?? /* @__PURE__ */ new Map();
        tl(P, W, f()), tl(W, P, h());
      }
      P = new Map(L);
    }
  });
  let $ = /* @__PURE__ */ N(() => {
    if (!E.connection.inProgress)
      return [!1, !1, !1, !1, null];
    const { fromHandle: L, toHandle: W, isValid: K } = E.connection, q = L && L.nodeId === y && L.type === r() && L.id === n(), j = W && W.nodeId === y && W.type === r() && W.id === n(), F = E.connectionMode === Lr.Strict ? L?.type !== r() : y !== L?.nodeId || n() !== L?.id;
    return [
      !0,
      q,
      j,
      F,
      j && K
    ];
  }), A = /* @__PURE__ */ N(() => po(u($), 5)), I = /* @__PURE__ */ N(() => u(A)[0]), V = /* @__PURE__ */ N(() => u(A)[1]), Y = /* @__PURE__ */ N(() => u(A)[2]), z = /* @__PURE__ */ N(() => u(A)[3]), S = /* @__PURE__ */ N(() => u(A)[4]);
  function T(L) {
    const W = E.onbeforeconnect ? E.onbeforeconnect(L) : L;
    W && (E.addEdge(W), E.onconnect?.(L));
  }
  function x(L) {
    const W = Cu(L);
    L.currentTarget && (W && L.button === 0 || !W) && hl.onPointerDown(L, {
      handleId: n(),
      nodeId: y,
      isTarget: u(_),
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
      onConnect: T,
      onConnectStart: (K, q) => {
        E.onconnectstart?.(K, {
          nodeId: q.nodeId,
          handleId: q.handleId,
          handleType: q.handleType
        });
      },
      onConnectEnd: (K, q) => {
        E.onconnectend?.(K, q);
      },
      getTransform: () => [E.viewport.x, E.viewport.y, E.viewport.zoom],
      getFromHandle: () => E.connection.fromHandle,
      dragThreshold: E.connectionDragThreshold,
      handleDomNode: L.currentTarget
    });
  }
  function C(L) {
    if (!y || !E.clickConnectStartHandle && !l())
      return;
    if (!E.clickConnectStartHandle) {
      E.onclickconnectstart?.(L, { nodeId: y, handleId: n(), handleType: r() }), E.clickConnectStartHandle = { nodeId: y, type: r(), id: n() };
      return;
    }
    const W = xu(L.target), K = d() ?? E.isValidConnection, { connectionMode: q, clickConnectStartHandle: j, flowId: F, nodeLookup: J } = E, { connection: G, isValid: ne } = hl.isValid(L, {
      handle: { nodeId: y, id: n(), type: r() },
      connectionMode: q,
      fromNodeId: j.nodeId,
      fromHandleId: j.id ?? null,
      fromType: j.type,
      isValidConnection: K,
      flowId: F,
      doc: W,
      lib: "svelte",
      nodeLookup: J
    });
    ne && G && T(G);
    const ee = structuredClone(Xl(E.connection));
    delete ee.inProgress, ee.toPosition = ee.toHandle ? ee.toHandle.position : null, E.onclickconnectend?.(L, ee), E.clickConnectStartHandle = null;
  }
  var O = {
    get id() {
      return n();
    },
    set id(L = null) {
      n(L), v();
    },
    get type() {
      return r();
    },
    set type(L = "source") {
      r(L), v();
    },
    get position() {
      return o();
    },
    set position(L = ye.Top) {
      o(L), v();
    },
    get style() {
      return i();
    },
    set style(L) {
      i(L), v();
    },
    get class() {
      return s();
    },
    set class(L) {
      s(L), v();
    },
    get isConnectable() {
      return a();
    },
    set isConnectable(L) {
      a(L), v();
    },
    get isConnectableStart() {
      return l();
    },
    set isConnectableStart(L = !0) {
      l(L), v();
    },
    get isConnectableEnd() {
      return c();
    },
    set isConnectableEnd(L = !0) {
      c(L), v();
    },
    get isValidConnection() {
      return d();
    },
    set isValidConnection(L) {
      d(L), v();
    },
    get onconnect() {
      return h();
    },
    set onconnect(L) {
      h(L), v();
    },
    get ondisconnect() {
      return f();
    },
    set ondisconnect(L) {
      f(L), v();
    },
    get children() {
      return g();
    },
    set children(L) {
      g(L), v();
    }
  }, M = N0(), Z = () => {
  };
  tt(M, () => ({
    "data-handleid": n(),
    "data-nodeid": y,
    "data-handlepos": o(),
    "data-id": `${E.flowId ?? ""}-${y ?? ""}-${n() ?? "null" ?? ""}-${r() ?? ""}`,
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
    onkeypress: Z,
    style: i(),
    role: "button",
    "aria-label": u(b)["handle.ariaLabel"],
    tabindex: "-1",
    ...m,
    [Rn]: {
      valid: u(S),
      connectingto: u(Y),
      connectingfrom: u(V),
      source: !u(_),
      target: u(_),
      connectablestart: l(),
      connectableend: c(),
      connectable: u(k),
      connectionindicator: u(k) && (!u(I) || u(z)) && (u(I) || E.clickConnectStartHandle ? c() : l())
    }
  }));
  var U = B(M);
  return qe(U, () => g() ?? pt), R(M), D(e, M), de(O);
}
ae(
  qn,
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
var P0 = /* @__PURE__ */ te("<!> <!>", 1);
function fa(e, t) {
  ue(t, !0);
  let n = p(t, "data", 7), r = p(t, "targetPosition", 23, () => ye.Top), o = p(t, "sourcePosition", 23, () => ye.Bottom);
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
    set targetPosition(d = ye.Top) {
      r(d), v();
    },
    get sourcePosition() {
      return o();
    },
    set sourcePosition(d = ye.Bottom) {
      o(d), v();
    }
  }, s = P0(), a = ie(s);
  qn(a, {
    type: "target",
    get position() {
      return r();
    }
  });
  var l = H(a), c = H(l);
  return qn(c, {
    type: "source",
    get position() {
      return o();
    }
  }), Ce(() => Fe(l, ` ${n()?.label ?? ""} `)), D(e, s), de(i);
}
ae(fa, { data: {}, targetPosition: {}, sourcePosition: {} }, [], [], !0);
var $0 = /* @__PURE__ */ te(" <!>", 1);
function Lu(e, t) {
  ue(t, !0);
  let n = p(t, "data", 23, () => ({ label: "Node" })), r = p(t, "sourcePosition", 23, () => ye.Bottom);
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
    set sourcePosition(l = ye.Bottom) {
      r(l), v();
    }
  };
  pe();
  var i = $0(), s = ie(i), a = H(s);
  return qn(a, {
    type: "source",
    get position() {
      return r();
    }
  }), Ce(() => Fe(s, `${n()?.label ?? ""} `)), D(e, i), de(o);
}
ae(Lu, { data: {}, sourcePosition: {} }, [], [], !0);
var T0 = /* @__PURE__ */ te(" <!>", 1);
function Vu(e, t) {
  ue(t, !0);
  let n = p(t, "data", 23, () => ({ label: "Node" })), r = p(t, "targetPosition", 23, () => ye.Top);
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
    set targetPosition(l = ye.Top) {
      r(l), v();
    }
  };
  pe();
  var i = T0(), s = ie(i), a = H(s);
  return qn(a, {
    type: "target",
    get position() {
      return r();
    }
  }), Ce(() => Fe(s, `${n()?.label ?? ""} `)), D(e, i), de(o);
}
ae(Vu, { data: {}, targetPosition: {} }, [], [], !0);
function Iu(e, t) {
}
ae(Iu, {}, [], [], !0);
function ts(e, t, n) {
  if (!n || !t)
    return;
  const r = n === "root" ? t : t.querySelector(`.svelte-flow__${n}`);
  r && r.appendChild(e);
}
function zu(e, t) {
  const n = /* @__PURE__ */ N(on), r = /* @__PURE__ */ N(() => u(n).domNode);
  let o;
  return u(r) ? ts(e, u(r), t) : o = Zs(() => {
    Xe(() => {
      ts(e, u(r), t), o?.();
    });
  }), {
    async update(i) {
      ts(e, u(r), i);
    },
    destroy() {
      e.parentNode && e.parentNode.removeChild(e), o?.();
    }
  };
}
function Ru() {
  let e = /* @__PURE__ */ Ne(typeof window > "u");
  if (u(e)) {
    const t = Zs(() => {
      Xe(() => {
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
const vl = (e) => Pp(e), D0 = (e) => gu(e);
function pn(e) {
  return e === void 0 ? void 0 : `${e}px`;
}
const gi = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
};
var A0 = /* @__PURE__ */ te("<div><!></div>");
const O0 = {
  hash: "svelte-1ix3cbb",
  code: ".transparent.svelte-1ix3cbb {background:transparent;}"
};
function Bu(e, t) {
  ue(t, !0), ze(e, O0);
  let n = p(t, "x", 7, 0), r = p(t, "y", 7, 0), o = p(t, "width", 7), i = p(t, "height", 7), s = p(t, "selectEdgeOnClick", 7, !1), a = p(t, "transparent", 7, !1), l = p(t, "class", 7), c = p(t, "children", 7), d = /* @__PURE__ */ Be(t, [
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
  const h = on(), f = Xn("svelteflow__edge_id");
  if (!f)
    throw new Error("EdgeLabel must be used within an edge");
  let g = /* @__PURE__ */ N(() => h.visible.edges.get(f)?.zIndex);
  var m = {
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
  }, y = A0(), w = () => {
    s() && h.handleEdgeSelection(f);
  };
  tt(
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
      [dn]: k
    }),
    [
      () => ({
        display: Ru().value ? "none" : void 0,
        cursor: s() ? "pointer" : void 0,
        transform: `translate(-50%, -50%) translate(${n() ?? ""}px,${r() ?? ""}px)`,
        "pointer-events": "all",
        width: pn(o()),
        height: pn(i()),
        "z-index": u(g)
      })
    ],
    void 0,
    void 0,
    "svelte-1ix3cbb"
  );
  var _ = B(y);
  return qe(_, () => c() ?? pt), R(y), ht(y, (k, E) => zu?.(k, E), () => "edge-labels"), D(e, y), de(m);
}
ae(
  Bu,
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
var M0 = /* @__PURE__ */ ve("<path></path>"), H0 = /* @__PURE__ */ ve('<path fill="none"></path><!><!>', 1);
function $o(e, t) {
  ue(t, !0);
  let n = p(t, "id", 7), r = p(t, "path", 7), o = p(t, "label", 7), i = p(t, "labelX", 7), s = p(t, "labelY", 7), a = p(t, "labelStyle", 7), l = p(t, "markerStart", 7), c = p(t, "markerEnd", 7), d = p(t, "style", 7), h = p(t, "interactionWidth", 7, 20), f = p(t, "class", 7), g = /* @__PURE__ */ Be(t, [
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
    set id(P) {
      n(P), v();
    },
    get path() {
      return r();
    },
    set path(P) {
      r(P), v();
    },
    get label() {
      return o();
    },
    set label(P) {
      o(P), v();
    },
    get labelX() {
      return i();
    },
    set labelX(P) {
      i(P), v();
    },
    get labelY() {
      return s();
    },
    set labelY(P) {
      s(P), v();
    },
    get labelStyle() {
      return a();
    },
    set labelStyle(P) {
      a(P), v();
    },
    get markerStart() {
      return l();
    },
    set markerStart(P) {
      l(P), v();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(P) {
      c(P), v();
    },
    get style() {
      return d();
    },
    set style(P) {
      d(P), v();
    },
    get interactionWidth() {
      return h();
    },
    set interactionWidth(P = 20) {
      h(P), v();
    },
    get class() {
      return f();
    },
    set class(P) {
      f(P), v();
    }
  }, y = H0(), w = ie(y), _ = H(w);
  {
    var k = (P) => {
      var $ = M0();
      tt($, () => ({
        d: r(),
        "stroke-opacity": 0,
        "stroke-width": h(),
        fill: "none",
        class: "svelte-flow__edge-interaction",
        ...g
      })), D(P, $);
    };
    se(_, (P) => {
      h() > 0 && P(k);
    });
  }
  var E = H(_);
  {
    var b = (P) => {
      Bu(P, {
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
        children: ($, A) => {
          pe();
          var I = ke();
          Ce(() => Fe(I, o())), D($, I);
        },
        $$slots: { default: !0 }
      });
    };
    se(E, (P) => {
      o() && P(b);
    });
  }
  return Ce(() => {
    be(w, "id", n()), be(w, "d", r()), At(w, 0, Ln(["svelte-flow__edge-path", f()])), be(w, "marker-start", l()), be(w, "marker-end", c()), ct(w, d());
  }), D(e, y), de(m);
}
ae(
  $o,
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
function ha(e, t) {
  ue(t, !0);
  let n = p(t, "id", 7), r = p(t, "interactionWidth", 7), o = p(t, "label", 7), i = p(t, "labelStyle", 7), s = p(t, "markerEnd", 7), a = p(t, "markerStart", 7), l = p(t, "pathOptions", 7), c = p(t, "sourcePosition", 7), d = p(t, "sourceX", 7), h = p(t, "sourceY", 7), f = p(t, "style", 7), g = p(t, "targetPosition", 7), m = p(t, "targetX", 7), y = p(t, "targetY", 7), w = /* @__PURE__ */ N(() => ku({
    sourceX: d(),
    sourceY: h(),
    targetX: m(),
    targetY: y(),
    sourcePosition: c(),
    targetPosition: g(),
    curvature: l()?.curvature
  })), _ = /* @__PURE__ */ N(() => po(u(w), 3)), k = /* @__PURE__ */ N(() => u(_)[0]), E = /* @__PURE__ */ N(() => u(_)[1]), b = /* @__PURE__ */ N(() => u(_)[2]);
  var P = {
    get id() {
      return n();
    },
    set id($) {
      n($), v();
    },
    get interactionWidth() {
      return r();
    },
    set interactionWidth($) {
      r($), v();
    },
    get label() {
      return o();
    },
    set label($) {
      o($), v();
    },
    get labelStyle() {
      return i();
    },
    set labelStyle($) {
      i($), v();
    },
    get markerEnd() {
      return s();
    },
    set markerEnd($) {
      s($), v();
    },
    get markerStart() {
      return a();
    },
    set markerStart($) {
      a($), v();
    },
    get pathOptions() {
      return l();
    },
    set pathOptions($) {
      l($), v();
    },
    get sourcePosition() {
      return c();
    },
    set sourcePosition($) {
      c($), v();
    },
    get sourceX() {
      return d();
    },
    set sourceX($) {
      d($), v();
    },
    get sourceY() {
      return h();
    },
    set sourceY($) {
      h($), v();
    },
    get style() {
      return f();
    },
    set style($) {
      f($), v();
    },
    get targetPosition() {
      return g();
    },
    set targetPosition($) {
      g($), v();
    },
    get targetX() {
      return m();
    },
    set targetX($) {
      m($), v();
    },
    get targetY() {
      return y();
    },
    set targetY($) {
      y($), v();
    }
  };
  return $o(e, {
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
      return u(b);
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
  }), de(P);
}
ae(
  ha,
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
function Fu(e, t) {
  ue(t, !0);
  let n = p(t, "interactionWidth", 7), r = p(t, "label", 7), o = p(t, "labelStyle", 7), i = p(t, "style", 7), s = p(t, "markerEnd", 7), a = p(t, "markerStart", 7), l = p(t, "sourcePosition", 7), c = p(t, "sourceX", 7), d = p(t, "sourceY", 7), h = p(t, "targetPosition", 7), f = p(t, "targetX", 7), g = p(t, "targetY", 7), m = /* @__PURE__ */ N(() => la({
    sourceX: c(),
    sourceY: d(),
    targetX: f(),
    targetY: g(),
    sourcePosition: l(),
    targetPosition: h()
  })), y = /* @__PURE__ */ N(() => po(u(m), 3)), w = /* @__PURE__ */ N(() => u(y)[0]), _ = /* @__PURE__ */ N(() => u(y)[1]), k = /* @__PURE__ */ N(() => u(y)[2]);
  var E = {
    get interactionWidth() {
      return n();
    },
    set interactionWidth(b) {
      n(b), v();
    },
    get label() {
      return r();
    },
    set label(b) {
      r(b), v();
    },
    get labelStyle() {
      return o();
    },
    set labelStyle(b) {
      o(b), v();
    },
    get style() {
      return i();
    },
    set style(b) {
      i(b), v();
    },
    get markerEnd() {
      return s();
    },
    set markerEnd(b) {
      s(b), v();
    },
    get markerStart() {
      return a();
    },
    set markerStart(b) {
      a(b), v();
    },
    get sourcePosition() {
      return l();
    },
    set sourcePosition(b) {
      l(b), v();
    },
    get sourceX() {
      return c();
    },
    set sourceX(b) {
      c(b), v();
    },
    get sourceY() {
      return d();
    },
    set sourceY(b) {
      d(b), v();
    },
    get targetPosition() {
      return h();
    },
    set targetPosition(b) {
      h(b), v();
    },
    get targetX() {
      return f();
    },
    set targetX(b) {
      f(b), v();
    },
    get targetY() {
      return g();
    },
    set targetY(b) {
      g(b), v();
    }
  };
  return $o(e, {
    get path() {
      return u(w);
    },
    get labelX() {
      return u(_);
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
  }), de(E);
}
ae(
  Fu,
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
function Ku(e, t) {
  ue(t, !0);
  let n = p(t, "sourceX", 7), r = p(t, "sourceY", 7), o = p(t, "targetX", 7), i = p(t, "targetY", 7), s = p(t, "label", 7), a = p(t, "labelStyle", 7), l = p(t, "markerStart", 7), c = p(t, "markerEnd", 7), d = p(t, "interactionWidth", 7), h = p(t, "style", 7), f = /* @__PURE__ */ N(() => Su({
    sourceX: n(),
    sourceY: r(),
    targetX: o(),
    targetY: i()
  })), g = /* @__PURE__ */ N(() => po(u(f), 3)), m = /* @__PURE__ */ N(() => u(g)[0]), y = /* @__PURE__ */ N(() => u(g)[1]), w = /* @__PURE__ */ N(() => u(g)[2]);
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
      return h();
    },
    set style(k) {
      h(k), v();
    }
  };
  return $o(e, {
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
      return h();
    }
  }), de(_);
}
ae(
  Ku,
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
function Zu(e, t) {
  ue(t, !0);
  let n = p(t, "sourceX", 7), r = p(t, "sourceY", 7), o = p(t, "sourcePosition", 7), i = p(t, "targetX", 7), s = p(t, "targetY", 7), a = p(t, "targetPosition", 7), l = p(t, "label", 7), c = p(t, "labelStyle", 7), d = p(t, "markerStart", 7), h = p(t, "markerEnd", 7), f = p(t, "interactionWidth", 7), g = p(t, "style", 7), m = /* @__PURE__ */ N(() => la({
    sourceX: n(),
    sourceY: r(),
    targetX: i(),
    targetY: s(),
    sourcePosition: o(),
    targetPosition: a(),
    borderRadius: 0
  })), y = /* @__PURE__ */ N(() => po(u(m), 3)), w = /* @__PURE__ */ N(() => u(y)[0]), _ = /* @__PURE__ */ N(() => u(y)[1]), k = /* @__PURE__ */ N(() => u(y)[2]);
  var E = {
    get sourceX() {
      return n();
    },
    set sourceX(b) {
      n(b), v();
    },
    get sourceY() {
      return r();
    },
    set sourceY(b) {
      r(b), v();
    },
    get sourcePosition() {
      return o();
    },
    set sourcePosition(b) {
      o(b), v();
    },
    get targetX() {
      return i();
    },
    set targetX(b) {
      i(b), v();
    },
    get targetY() {
      return s();
    },
    set targetY(b) {
      s(b), v();
    },
    get targetPosition() {
      return a();
    },
    set targetPosition(b) {
      a(b), v();
    },
    get label() {
      return l();
    },
    set label(b) {
      l(b), v();
    },
    get labelStyle() {
      return c();
    },
    set labelStyle(b) {
      c(b), v();
    },
    get markerStart() {
      return d();
    },
    set markerStart(b) {
      d(b), v();
    },
    get markerEnd() {
      return h();
    },
    set markerEnd(b) {
      h(b), v();
    },
    get interactionWidth() {
      return f();
    },
    set interactionWidth(b) {
      f(b), v();
    },
    get style() {
      return g();
    },
    set style(b) {
      g(b), v();
    }
  };
  return $o(e, {
    get path() {
      return u(w);
    },
    get labelX() {
      return u(_);
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
      return h();
    },
    get interactionWidth() {
      return f();
    },
    get style() {
      return g();
    }
  }), de(E);
}
ae(
  Zu,
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
class L0 {
  #t;
  #e;
  /**
   *
   * @param {() => T} fn
   * @param {(update: () => void) => void} onsubscribe
   */
  constructor(t, n) {
    this.#t = t, this.#e = ec(n);
  }
  get current() {
    return this.#e(), this.#t();
  }
}
const V0 = /\(.+\)/, I0 = /* @__PURE__ */ new Set(["all", "print", "screen", "and", "or", "not", "only"]);
class z0 extends L0 {
  /**
   * @param {string} query A media query string
   * @param {boolean} [fallback] Fallback value for the server
   */
  constructor(t, n) {
    let r = V0.test(t) || // we need to use `some` here because technically this `window.matchMedia('random,screen')` still returns true
    t.split(/[\s,]+/).some((i) => I0.has(i.trim())) ? t : `(${t})`;
    const o = window.matchMedia(r);
    super(
      () => o.matches,
      (i) => hs(o, "change", i)
    );
  }
}
function R0(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  return sa(e, { x: 0, y: 0, width: n, height: r }, t, !0).forEach((i) => {
    o.set(i.id, i);
  }), o;
}
function pl(e) {
  const { edges: t, defaultEdgeOptions: n, nodeLookup: r, previousEdges: o, connectionMode: i, onerror: s, onlyRenderVisible: a, elevateEdgesOnSelect: l } = e, c = /* @__PURE__ */ new Map();
  for (const d of t) {
    const h = r.get(d.source), f = r.get(d.target);
    if (!h || !f)
      continue;
    if (a) {
      const { visibleNodes: y, transform: w, width: _, height: k } = e;
      if (Fp({
        sourceNode: h,
        targetNode: f,
        width: _,
        height: k,
        transform: w
      }))
        y.set(h.id, h), y.set(f.id, f);
      else
        continue;
    }
    const g = o.get(d.id);
    if (g && d === g.edge && h == g.sourceNode && f == g.targetNode) {
      c.set(d.id, g);
      continue;
    }
    const m = qp({
      id: d.id,
      sourceNode: h,
      targetNode: f,
      sourceHandle: d.sourceHandle || null,
      targetHandle: d.targetHandle || null,
      connectionMode: i,
      onError: s
    });
    m && c.set(d.id, {
      ...n,
      ...d,
      ...m,
      zIndex: Bp({
        selected: d.selected,
        zIndex: d.zIndex ?? n.zIndex,
        sourceNode: h,
        targetNode: f,
        elevateOnSelect: l
      }),
      sourceNode: h,
      targetNode: f,
      edge: d
    });
  }
  return c;
}
const Yu = {
  input: Lu,
  output: Vu,
  default: fa,
  group: Iu
}, Wu = {
  straight: Ku,
  smoothstep: Fu,
  default: ha,
  step: Zu
};
function B0(e, t, n, r, o, i) {
  if (t && !n && r && o) {
    const s = So(i, {
      filter: (a) => !!((a.width || a.initialWidth) && (a.height || a.initialHeight))
    });
    return aa(s, r, o, 0.5, 2, 0.1);
  } else
    return n ?? { x: 0, y: 0, zoom: 1 };
}
function F0(e) {
  class t {
    #t = /* @__PURE__ */ N(() => e.props.id ?? "1");
    get flowId() {
      return u(this.#t);
    }
    set flowId(r) {
      Q(this.#t, r);
    }
    #e = /* @__PURE__ */ Ne(null);
    get domNode() {
      return u(this.#e);
    }
    set domNode(r) {
      Q(this.#e, r);
    }
    #n = /* @__PURE__ */ Ne(null);
    get panZoom() {
      return u(this.#n);
    }
    set panZoom(r) {
      Q(this.#n, r);
    }
    #r = /* @__PURE__ */ Ne(e.width ?? 0);
    get width() {
      return u(this.#r);
    }
    set width(r) {
      Q(this.#r, r);
    }
    #l = /* @__PURE__ */ Ne(e.height ?? 0);
    get height() {
      return u(this.#l);
    }
    set height(r) {
      Q(this.#l, r);
    }
    #i = /* @__PURE__ */ N(() => {
      const r = n0(e.nodes, this.nodeLookup, this.parentLookup, {
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
      return u(this.#i);
    }
    set nodesInitialized(r) {
      Q(this.#i, r);
    }
    #o = /* @__PURE__ */ N(() => this.panZoom !== null);
    get viewportInitialized() {
      return u(this.#o);
    }
    set viewportInitialized(r) {
      Q(this.#o, r);
    }
    #s = /* @__PURE__ */ N(() => (l0(this.connectionLookup, this.edgeLookup, e.edges), e.edges));
    get _edges() {
      return u(this.#s);
    }
    set _edges(r) {
      Q(this.#s, r);
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
    #a = /* @__PURE__ */ N(() => {
      const r = this._prevSelectedNodeIds.size, o = /* @__PURE__ */ new Set(), i = this.nodes.filter((s) => (s.selected && (o.add(s.id), this._prevSelectedNodeIds.delete(s.id)), s.selected));
      return (r !== o.size || this._prevSelectedNodeIds.size > 0) && (this._prevSelectedNodes = i), this._prevSelectedNodeIds = o, this._prevSelectedNodes;
    });
    get selectedNodes() {
      return u(this.#a);
    }
    set selectedNodes(r) {
      Q(this.#a, r);
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
      let h, f;
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
        const { viewport: m, width: y, height: w } = this, _ = [m.x, m.y, m.zoom];
        h = R0(s, _, y, w), f = pl({
          ...g,
          onlyRenderVisible: !0,
          visibleNodes: h,
          transform: _,
          width: y,
          height: w
        });
      } else
        h = this.nodeLookup, f = pl(g);
      return { nodes: h, edges: f };
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
    #_ = /* @__PURE__ */ N(() => e.props.disableKeyboardA11y ?? !1);
    get disableKeyboardA11y() {
      return u(this.#_);
    }
    set disableKeyboardA11y(r) {
      Q(this.#_, r);
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
    #p = /* @__PURE__ */ N(() => e.props.nodeExtent ?? ks);
    get nodeExtent() {
      return u(this.#p);
    }
    set nodeExtent(r) {
      Q(this.#p, r);
    }
    #y = /* @__PURE__ */ N(() => e.props.translateExtent ?? ks);
    get translateExtent() {
      return u(this.#y);
    }
    set translateExtent(r) {
      Q(this.#y, r);
    }
    #b = /* @__PURE__ */ N(() => e.props.defaultEdgeOptions ?? {});
    get defaultEdgeOptions() {
      return u(this.#b);
    }
    set defaultEdgeOptions(r) {
      Q(this.#b, r);
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
    #E = /* @__PURE__ */ N(() => e.props.autoPanOnConnect ?? !0);
    get autoPanOnConnect() {
      return u(this.#E);
    }
    set autoPanOnConnect(r) {
      Q(this.#E, r);
    }
    #S = /* @__PURE__ */ N(() => e.props.autoPanOnNodeFocus ?? !0);
    get autoPanOnNodeFocus() {
      return u(this.#S);
    }
    set autoPanOnNodeFocus(r) {
      Q(this.#S, r);
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
    #$ = /* @__PURE__ */ N(() => e.props.snapGrid ?? null);
    get snapGrid() {
      return u(this.#$);
    }
    set snapGrid(r) {
      Q(this.#$, r);
    }
    #T = /* @__PURE__ */ Ne(!1);
    get dragging() {
      return u(this.#T);
    }
    set dragging(r) {
      Q(this.#T, r);
    }
    #D = /* @__PURE__ */ Ne(null);
    get selectionRect() {
      return u(this.#D);
    }
    set selectionRect(r) {
      Q(this.#D, r);
    }
    #A = /* @__PURE__ */ Ne(!1);
    get selectionKeyPressed() {
      return u(this.#A);
    }
    set selectionKeyPressed(r) {
      Q(this.#A, r);
    }
    #O = /* @__PURE__ */ Ne(!1);
    get multiselectionKeyPressed() {
      return u(this.#O);
    }
    set multiselectionKeyPressed(r) {
      Q(this.#O, r);
    }
    #M = /* @__PURE__ */ Ne(!1);
    get deleteKeyPressed() {
      return u(this.#M);
    }
    set deleteKeyPressed(r) {
      Q(this.#M, r);
    }
    #H = /* @__PURE__ */ Ne(!1);
    get panActivationKeyPressed() {
      return u(this.#H);
    }
    set panActivationKeyPressed(r) {
      Q(this.#H, r);
    }
    #L = /* @__PURE__ */ Ne(!1);
    get zoomActivationKeyPressed() {
      return u(this.#L);
    }
    set zoomActivationKeyPressed(r) {
      Q(this.#L, r);
    }
    #V = /* @__PURE__ */ Ne(null);
    get selectionRectMode() {
      return u(this.#V);
    }
    set selectionRectMode(r) {
      Q(this.#V, r);
    }
    #I = /* @__PURE__ */ Ne("");
    get ariaLiveMessage() {
      return u(this.#I);
    }
    set ariaLiveMessage(r) {
      Q(this.#I, r);
    }
    #z = /* @__PURE__ */ N(() => e.props.selectionMode ?? di.Partial);
    get selectionMode() {
      return u(this.#z);
    }
    set selectionMode(r) {
      Q(this.#z, r);
    }
    #R = /* @__PURE__ */ N(() => ({ ...Yu, ...e.props.nodeTypes }));
    get nodeTypes() {
      return u(this.#R);
    }
    set nodeTypes(r) {
      Q(this.#R, r);
    }
    #B = /* @__PURE__ */ N(() => ({ ...Wu, ...e.props.edgeTypes }));
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
    #Z = /* @__PURE__ */ N(() => e.props.noWheelClass ?? "nowheel");
    get noWheelClass() {
      return u(this.#Z);
    }
    set noWheelClass(r) {
      Q(this.#Z, r);
    }
    #Y = /* @__PURE__ */ N(() => Ip(e.props.ariaLabelConfig));
    get ariaLabelConfig() {
      return u(this.#Y);
    }
    set ariaLabelConfig(r) {
      Q(this.#Y, r);
    }
    #W = /* @__PURE__ */ Ne(B0(this.nodesInitialized, e.props.fitView, e.props.initialViewport, this.width, this.height, this.nodeLookup));
    get _viewport() {
      return u(this.#W);
    }
    set _viewport(r) {
      Q(this.#W, r);
    }
    get viewport() {
      return e.viewport ?? this._viewport;
    }
    set viewport(r) {
      e.viewport && (e.viewport = r), this._viewport = r;
    }
    #X = /* @__PURE__ */ Ne(
      // _connection is viewport independent and originating from XYHandle
      Es
    );
    get _connection() {
      return u(this.#X);
    }
    set _connection(r) {
      Q(this.#X, r);
    }
    #j = /* @__PURE__ */ N(() => this._connection.inProgress ? {
      ...this._connection,
      to: Po(this._connection.to, [this.viewport.x, this.viewport.y, this.viewport.zoom])
    } : this._connection);
    get connection() {
      return u(this.#j);
    }
    set connection(r) {
      Q(this.#j, r);
    }
    #q = /* @__PURE__ */ N(() => e.props.connectionMode ?? Lr.Strict);
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
    #ee = /* @__PURE__ */ N(() => Gp(e.edges, {
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
    #ne = /* @__PURE__ */ N(() => e.props.onflowerror ?? Mp);
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
    #pe = /* @__PURE__ */ Ne(null);
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
      this.panZoom && (await Ap(
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
    _prefersDark = new z0("(prefers-color-scheme: dark)", e.props.colorModeSSR === "dark");
    #_e = /* @__PURE__ */ N(() => e.props.colorMode === "system" ? this._prefersDark.current ? "dark" : "light" : e.props.colorMode ?? "light");
    get colorMode() {
      return u(this.#_e);
    }
    set colorMode(r) {
      Q(this.#_e, r);
    }
    constructor() {
    }
    resetStoreValues() {
      this.dragging = !1, this.selectionRect = null, this.selectionRectMode = null, this.selectionKeyPressed = !1, this.multiselectionKeyPressed = !1, this.deleteKeyPressed = !1, this.panActivationKeyPressed = !1, this.zoomActivationKeyPressed = !1, this._connection = Es, this.clickConnectStartHandle = null, this.viewport = e.props.initialViewport ?? { x: 0, y: 0, zoom: 1 }, this.ariaLiveMessage = "";
    }
  }
  return new t();
}
function on() {
  const e = Xn(vi);
  if (!e)
    throw new Error("To call useStore outside of <SvelteFlow /> you need to wrap your component in a <SvelteFlowProvider />");
  return e.getStore();
}
const vi = Symbol();
function Xu(e) {
  const t = F0(e);
  function n(z) {
    t.nodeTypes = {
      ...Yu,
      ...z
    };
  }
  function r(z) {
    t.edgeTypes = {
      ...Wu,
      ...z
    };
  }
  function o(z) {
    t.edges = Yp(z, t.edges);
  }
  const i = (z, S = !1) => {
    t.nodes = t.nodes.map((T) => {
      const x = z.get(T.id);
      return x ? { ...T, position: x.position, dragging: S } : T;
    });
  };
  function s(z) {
    const { changes: S, updatedInternals: T } = s0(z, t.nodeLookup, t.parentLookup, t.domNode, t.nodeOrigin);
    if (!T)
      return;
    e0(t.nodeLookup, t.parentLookup, {
      nodeOrigin: t.nodeOrigin,
      nodeExtent: t.nodeExtent
    }), t.fitViewQueued && t.resolveFitView();
    const x = /* @__PURE__ */ new Map();
    for (const C of S) {
      const O = t.nodeLookup.get(C.id)?.internals.userNode;
      if (!O)
        continue;
      const M = { ...O };
      switch (C.type) {
        case "dimensions": {
          const Z = { ...M.measured, ...C.dimensions };
          C.setAttributes && (M.width = C.dimensions?.width ?? M.width, M.height = C.dimensions?.height ?? M.height), M.measured = Z;
          break;
        }
        case "position":
          M.position = C.position ?? M.position;
          break;
      }
      x.set(C.id, M);
    }
    t.nodes = t.nodes.map((C) => x.get(C.id) ?? C);
  }
  function a(z) {
    const S = t.fitViewResolver ?? Promise.withResolvers();
    return t.fitViewQueued = !0, t.fitViewOptions = z, t.fitViewResolver = S, t.nodes = [...t.nodes], S.promise;
  }
  async function l(z, S, T) {
    const x = typeof T?.zoom < "u" ? T.zoom : t.maxZoom, C = t.panZoom;
    return C ? (await C.setViewport({
      x: t.width / 2 - z * x,
      y: t.height / 2 - S * x,
      zoom: x
    }, { duration: T?.duration, ease: T?.ease, interpolate: T?.interpolate }), Promise.resolve(!0)) : Promise.resolve(!1);
  }
  function c(z, S) {
    const T = t.panZoom;
    return T ? T.scaleBy(z, S) : Promise.resolve(!1);
  }
  function d(z) {
    return c(1.2, z);
  }
  function h(z) {
    return c(1 / 1.2, z);
  }
  function f(z) {
    const S = t.panZoom;
    S && (S.setScaleExtent([z, t.maxZoom]), t.minZoom = z);
  }
  function g(z) {
    const S = t.panZoom;
    S && (S.setScaleExtent([t.minZoom, z]), t.maxZoom = z);
  }
  function m(z) {
    const S = t.panZoom;
    S && (S.setTranslateExtent(z), t.translateExtent = z);
  }
  function y(z, S = null) {
    let T = !1;
    const x = z.map((C) => (S ? S.has(C.id) : !0) && C.selected ? (T = !0, { ...C, selected: !1 }) : C);
    return [T, x];
  }
  function w(z) {
    const S = z?.nodes ? new Set(z.nodes.map((Z) => Z.id)) : null, [T, x] = y(t.nodes, S);
    T && (t.nodes = x);
    const C = z?.edges ? new Set(z.edges.map((Z) => Z.id)) : null, [O, M] = y(t.edges, C);
    O && (t.edges = M);
  }
  function _(z) {
    const S = t.multiselectionKeyPressed;
    t.nodes = t.nodes.map((T) => {
      const x = z.includes(T.id), C = S && T.selected || x;
      return !!T.selected !== C ? { ...T, selected: C } : T;
    }), S || w({ nodes: [] });
  }
  function k(z) {
    const S = t.multiselectionKeyPressed;
    t.edges = t.edges.map((T) => {
      const x = z.includes(T.id), C = S && T.selected || x;
      return !!T.selected !== C ? { ...T, selected: C } : T;
    }), S || w({ edges: [] });
  }
  function E(z, S, T) {
    const x = t.nodeLookup.get(z);
    if (!x) {
      console.warn("012", lo.error012(z));
      return;
    }
    t.selectionRect = null, t.selectionRectMode = null, x.selected ? (S || x.selected && t.multiselectionKeyPressed) && (w({ nodes: [x], edges: [] }), requestAnimationFrame(() => T?.blur())) : _([z]);
  }
  function b(z) {
    const S = t.edgeLookup.get(z);
    if (!S) {
      console.warn("012", lo.error012(z));
      return;
    }
    (S.selectable || t.elementsSelectable && typeof S.selectable > "u") && (t.selectionRect = null, t.selectionRectMode = null, S.selected ? S.selected && t.multiselectionKeyPressed && w({ nodes: [], edges: [S] }) : k([z]));
  }
  function P(z, S) {
    const { nodeExtent: T, snapGrid: x, nodeOrigin: C, nodeLookup: O, nodesDraggable: M, onerror: Z } = t, U = /* @__PURE__ */ new Map(), L = x?.[0] ?? 5, W = x?.[1] ?? 5, K = z.x * L * S, q = z.y * W * S;
    for (const j of O.values()) {
      if (!(j.selected && (j.draggable || M && typeof j.draggable > "u")))
        continue;
      let J = {
        x: j.internals.positionAbsolute.x + K,
        y: j.internals.positionAbsolute.y + q
      };
      x && (J = No(J, x));
      const { position: G, positionAbsolute: ne } = vu({
        nodeId: j.id,
        nextPosition: J,
        nodeLookup: O,
        nodeExtent: T,
        nodeOrigin: C,
        onError: Z
      });
      j.position = G, j.internals.positionAbsolute = ne, U.set(j.id, j);
    }
    i(U);
  }
  function $(z) {
    return a0({
      delta: z,
      panZoom: t.panZoom,
      transform: [t.viewport.x, t.viewport.y, t.viewport.zoom],
      translateExtent: t.translateExtent,
      width: t.width,
      height: t.height
    });
  }
  const A = (z) => {
    t._connection = { ...z };
  };
  function I() {
    t._connection = Es;
  }
  function V() {
    t.resetStoreValues(), w();
  }
  return Object.assign(t, {
    setNodeTypes: n,
    setEdgeTypes: r,
    addEdge: o,
    updateNodePositions: i,
    updateNodeInternals: s,
    zoomIn: d,
    zoomOut: h,
    fitView: a,
    setCenter: l,
    setMinZoom: f,
    setMaxZoom: g,
    setTranslateExtent: m,
    unselectNodesAndEdges: w,
    addSelectedNodes: _,
    addSelectedEdges: k,
    handleNodeSelection: E,
    handleEdgeSelection: b,
    moveSelectedNodes: P,
    panBy: $,
    updateConnection: A,
    cancelConnection: I,
    reset: V
  });
}
function K0(e, t) {
  const { minZoom: n, maxZoom: r, initialViewport: o, onPanZoomStart: i, onPanZoom: s, onPanZoomEnd: a, translateExtent: l, setPanZoomInstance: c, onDraggingChange: d, onTransformChange: h } = t, f = S0({
    domNode: e,
    minZoom: n,
    maxZoom: r,
    translateExtent: l,
    viewport: o,
    onPanZoom: s,
    onPanZoomStart: i,
    onPanZoomEnd: a,
    onDraggingChange: d
  }), g = f.getViewport();
  return (o.x !== g.x || o.y !== g.y || o.zoom !== g.zoom) && h([g.x, g.y, g.zoom]), c(f), f.update(t), {
    update(m) {
      f.update(m);
    }
  };
}
var Z0 = /* @__PURE__ */ te('<div class="svelte-flow__zoom svelte-flow__container"><!></div>');
function ju(e, t) {
  ue(t, !0);
  let n = p(t, "store", 15), r = p(t, "panOnScrollMode", 7), o = p(t, "preventScrolling", 7), i = p(t, "zoomOnScroll", 7), s = p(t, "zoomOnDoubleClick", 7), a = p(t, "zoomOnPinch", 7), l = p(t, "panOnDrag", 7), c = p(t, "panOnScroll", 7), d = p(t, "panOnScrollSpeed", 7), h = p(t, "paneClickDistance", 7), f = p(t, "selectionOnDrag", 7), g = p(t, "onmovestart", 7), m = p(t, "onmove", 7), y = p(t, "onmoveend", 7), w = p(t, "oninit", 7), _ = p(t, "children", 7), k = /* @__PURE__ */ N(() => n().panActivationKeyPressed || l()), E = /* @__PURE__ */ N(() => n().panActivationKeyPressed || c());
  const { viewport: b } = n();
  let P = !1;
  Xe(() => {
    !P && n().viewportInitialized && (w()?.(), P = !0);
  });
  var $ = {
    get store() {
      return n();
    },
    set store(V) {
      n(V), v();
    },
    get panOnScrollMode() {
      return r();
    },
    set panOnScrollMode(V) {
      r(V), v();
    },
    get preventScrolling() {
      return o();
    },
    set preventScrolling(V) {
      o(V), v();
    },
    get zoomOnScroll() {
      return i();
    },
    set zoomOnScroll(V) {
      i(V), v();
    },
    get zoomOnDoubleClick() {
      return s();
    },
    set zoomOnDoubleClick(V) {
      s(V), v();
    },
    get zoomOnPinch() {
      return a();
    },
    set zoomOnPinch(V) {
      a(V), v();
    },
    get panOnDrag() {
      return l();
    },
    set panOnDrag(V) {
      l(V), v();
    },
    get panOnScroll() {
      return c();
    },
    set panOnScroll(V) {
      c(V), v();
    },
    get panOnScrollSpeed() {
      return d();
    },
    set panOnScrollSpeed(V) {
      d(V), v();
    },
    get paneClickDistance() {
      return h();
    },
    set paneClickDistance(V) {
      h(V), v();
    },
    get selectionOnDrag() {
      return f();
    },
    set selectionOnDrag(V) {
      f(V), v();
    },
    get onmovestart() {
      return g();
    },
    set onmovestart(V) {
      g(V), v();
    },
    get onmove() {
      return m();
    },
    set onmove(V) {
      m(V), v();
    },
    get onmoveend() {
      return y();
    },
    set onmoveend(V) {
      y(V), v();
    },
    get oninit() {
      return w();
    },
    set oninit(V) {
      w(V), v();
    },
    get children() {
      return _();
    },
    set children(V) {
      _(V), v();
    }
  }, A = Z0(), I = B(A);
  return qe(I, _), R(A), ht(A, (V, Y) => K0?.(V, Y), () => ({
    viewport: n().viewport,
    minZoom: n().minZoom,
    maxZoom: n().maxZoom,
    initialViewport: b,
    onDraggingChange: (V) => {
      n(n().dragging = V, !0);
    },
    setPanZoomInstance: (V) => {
      n(n().panZoom = V, !0);
    },
    onPanZoomStart: g(),
    onPanZoom: m(),
    onPanZoomEnd: y(),
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
    paneClickDistance: h(),
    selectionOnDrag: f(),
    onTransformChange: (V) => {
      n(n().viewport = { x: V[0], y: V[1], zoom: V[2] }, !0);
    },
    connectionInProgress: n().connection.inProgress
  })), D(e, A), de($);
}
ae(
  ju,
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
function ml(e, t) {
  return (n) => {
    n.target === t && e?.(n);
  };
}
function yl(e) {
  return (t) => {
    const n = e.has(t.id);
    return !!t.selected !== n ? { ...t, selected: n } : t;
  };
}
function wl(e, t) {
  if (e.size !== t.size)
    return !1;
  for (const n of e)
    if (!t.has(n))
      return !1;
  return !0;
}
var Y0 = /* @__PURE__ */ te("<div><!></div>");
function qu(e, t) {
  ue(t, !0);
  let n = p(t, "store", 15), r = p(t, "panOnDrag", 7, !0), o = p(t, "paneClickDistance", 7, 1), i = p(t, "selectionOnDrag", 7), s = p(t, "onpaneclick", 7), a = p(t, "onpanecontextmenu", 7), l = p(t, "onselectionstart", 7), c = p(t, "onselectionend", 7), d = p(t, "children", 7), h, f = null, g = /* @__PURE__ */ new Set(), m = /* @__PURE__ */ new Set(), y = /* @__PURE__ */ N(() => n().panActivationKeyPressed || r()), w = /* @__PURE__ */ N(() => n().selectionKeyPressed || !!n().selectionRect || i() && u(y) !== !0), _ = /* @__PURE__ */ N(() => n().elementsSelectable && (u(w) || n().selectionRectMode === "user")), k = !1;
  function E(C) {
    if (f = h?.getBoundingClientRect(), !f) return;
    const O = C.target === h, M = !O && !!C.target.closest(".nokey"), Z = i() && O || n().selectionKeyPressed;
    if (M || !u(w) || !Z || C.button !== 0 || !C.isPrimary)
      return;
    C.target?.setPointerCapture?.(C.pointerId), k = !1;
    const { x: U, y: L } = Jt(C, f);
    n(n().selectionRect = { width: 0, height: 0, startX: U, startY: L, x: U, y: L }, !0), O || (C.stopPropagation(), C.preventDefault());
  }
  function b(C) {
    if (!u(w) || !f || !n().selectionRect)
      return;
    const O = Jt(C, f), { startX: M = 0, startY: Z = 0 } = n().selectionRect;
    if (!k) {
      const q = n().selectionKeyPressed ? 0 : o();
      if (Math.hypot(O.x - M, O.y - Z) <= q)
        return;
      n().unselectNodesAndEdges(), l()?.(C);
    }
    k = !0;
    const U = {
      ...n().selectionRect,
      x: O.x < M ? O.x : M,
      y: O.y < Z ? O.y : Z,
      width: Math.abs(O.x - M),
      height: Math.abs(O.y - Z)
    }, L = g, W = m;
    g = new Set(sa(
      n().nodeLookup,
      U,
      [
        n().viewport.x,
        n().viewport.y,
        n().viewport.zoom
      ],
      n().selectionMode === di.Partial,
      !0
    ).map((q) => q.id));
    const K = n().defaultEdgeOptions.selectable ?? !0;
    m = /* @__PURE__ */ new Set();
    for (const q of g) {
      const j = n().connectionLookup.get(q);
      if (j)
        for (const { edgeId: F } of j.values()) {
          const J = n().edgeLookup.get(F);
          J && (J.selectable ?? K) && m.add(F);
        }
    }
    wl(L, g) || n(n().nodes = n().nodes.map(yl(g)), !0), wl(W, m) || n(n().edges = n().edges.map(yl(m)), !0), n(n().selectionRectMode = "user", !0), n(n().selectionRect = U, !0);
  }
  function P(C) {
    C.button === 0 && (C.target?.releasePointerCapture?.(C.pointerId), !k && C.target === h && I?.(C), n(n().selectionRect = null, !0), k && n(n().selectionRectMode = g.size > 0 ? "nodes" : null, !0), k && c()?.(C));
  }
  const $ = (C) => {
    if (Array.isArray(u(y)) && u(y).includes(2)) {
      C.preventDefault();
      return;
    }
    a()?.({ event: C });
  }, A = (C) => {
    k && (C.stopPropagation(), k = !1);
  };
  function I(C) {
    if (k || n().connection.inProgress) {
      k = !1;
      return;
    }
    s()?.({ event: C }), n().unselectNodesAndEdges(), n(n().selectionRectMode = null, !0), n(n().selectionRect = null, !0);
  }
  var V = {
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
  }, Y = Y0();
  let z;
  var S = /* @__PURE__ */ N(() => u(_) ? void 0 : ml(I, h));
  Y.__click = function(...C) {
    u(S)?.apply(this, C);
  }, Y.__pointermove = function(...C) {
    (u(_) ? b : void 0)?.apply(this, C);
  }, Y.__pointerup = function(...C) {
    (u(_) ? P : void 0)?.apply(this, C);
  };
  var T = /* @__PURE__ */ N(() => ml($, h));
  Y.__contextmenu = function(...C) {
    u(T)?.apply(this, C);
  };
  var x = B(Y);
  return qe(x, d), R(Y), Ot(Y, (C) => h = C, () => h), Ce((C) => z = At(Y, 1, "svelte-flow__pane svelte-flow__container", null, z, C), [
    () => ({
      draggable: r() === !0 || Array.isArray(r()) && r().includes(0),
      dragging: n().dragging,
      selection: u(w)
    })
  ]), ri(
    "pointerdown",
    Y,
    function(...C) {
      (u(_) ? E : void 0)?.apply(this, C);
    },
    !0
  ), ri(
    "click",
    Y,
    function(...C) {
      (u(_) ? A : void 0)?.apply(this, C);
    },
    !0
  ), D(e, Y), de(V);
}
er(["click", "pointermove", "pointerup", "contextmenu"]);
ae(
  qu,
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
var W0 = /* @__PURE__ */ te('<div class="svelte-flow__viewport xyflow__viewport svelte-flow__container"><!></div>');
function Gu(e, t) {
  ue(t, !0);
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
  }, i = W0();
  let s;
  var a = B(i);
  return qe(a, r), R(i), Ce(() => s = ct(i, "", s, {
    transform: `translate(${n().viewport.x ?? ""}px, ${n().viewport.y ?? ""}px) scale(${n().viewport.zoom ?? ""})`
  })), D(e, i), de(o);
}
ae(Gu, { store: {}, children: {} }, [], [], !0);
function Uu(e, t) {
  const { store: n, onDrag: r, onDragStart: o, onDragStop: i, onNodeMouseDown: s } = t, a = f0({
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
var X0 = /* @__PURE__ */ te('<div aria-live="assertive" aria-atomic="true" class="a11y-live-msg svelte-1u4lacj"> </div>'), j0 = /* @__PURE__ */ te('<div class="a11y-hidden svelte-1u4lacj"> </div> <div class="a11y-hidden svelte-1u4lacj"> </div> <!>', 1);
const q0 = {
  hash: "svelte-1u4lacj",
  code: ".a11y-hidden.svelte-1u4lacj {display:none;}.a11y-live-msg.svelte-1u4lacj {position:absolute;width:1px;height:1px;margin:-1px;border:0;padding:0;overflow:hidden;clip:rect(0px, 0px, 0px, 0px);clip-path:inset(100%);}"
};
function Ju(e, t) {
  ue(t, !0), ze(e, q0);
  let n = p(t, "store", 7);
  var r = {
    get store() {
      return n();
    },
    set store(h) {
      n(h), v();
    }
  }, o = j0(), i = ie(o), s = B(i, !0);
  R(i);
  var a = H(i, 2), l = B(a, !0);
  R(a);
  var c = H(a, 2);
  {
    var d = (h) => {
      var f = X0(), g = B(f, !0);
      R(f), Ce(() => {
        be(f, "id", `${G0}-${n().flowId}`), Fe(g, n().ariaLiveMessage);
      }), D(h, f);
    };
    se(c, (h) => {
      n().disableKeyboardA11y || h(d);
    });
  }
  return Ce(() => {
    be(i, "id", `${Qu}-${n().flowId}`), Fe(s, n().disableKeyboardA11y ? n().ariaLabelConfig["node.a11yDescription.default"] : n().ariaLabelConfig["node.a11yDescription.keyboardDisabled"]), be(a, "id", `${ed}-${n().flowId}`), Fe(l, n().ariaLabelConfig["edge.a11yDescription.default"]);
  }), D(e, o), de(r);
}
ae(Ju, { store: {} }, [], [], !0);
const Qu = "svelte-flow__node-desc", ed = "svelte-flow__edge-desc", G0 = "svelte-flow__aria-live";
var U0 = /* @__PURE__ */ te("<div><!></div>");
function td(e, t) {
  ue(t, !0);
  let n = p(t, "store", 15), r = p(t, "node", 7), o = p(t, "resizeObserver", 7), i = p(t, "nodeClickDistance", 7), s = p(t, "onnodeclick", 7), a = p(t, "onnodedrag", 7), l = p(t, "onnodedragstart", 7), c = p(t, "onnodedragstop", 7), d = p(t, "onnodepointerenter", 7), h = p(t, "onnodepointerleave", 7), f = p(t, "onnodepointermove", 7), g = p(t, "onnodecontextmenu", 7), m = /* @__PURE__ */ N(() => _t(r().data, () => ({}), !0)), y = /* @__PURE__ */ N(() => _t(r().selected, !1)), w = /* @__PURE__ */ N(() => r().draggable), _ = /* @__PURE__ */ N(() => r().selectable), k = /* @__PURE__ */ N(() => _t(r().deletable, !0)), E = /* @__PURE__ */ N(() => r().connectable), b = /* @__PURE__ */ N(() => r().focusable), P = /* @__PURE__ */ N(() => _t(r().hidden, !1)), $ = /* @__PURE__ */ N(() => _t(r().dragging, !1)), A = /* @__PURE__ */ N(() => _t(r().style, "")), I = /* @__PURE__ */ N(() => r().class), V = /* @__PURE__ */ N(() => _t(r().type, "default")), Y = /* @__PURE__ */ N(() => r().parentId), z = /* @__PURE__ */ N(() => r().sourcePosition), S = /* @__PURE__ */ N(() => r().targetPosition), T = /* @__PURE__ */ N(() => _t(r().measured, () => ({ width: 0, height: 0 }), !0).width), x = /* @__PURE__ */ N(() => _t(r().measured, () => ({ width: 0, height: 0 }), !0).height), C = /* @__PURE__ */ N(() => r().initialWidth), O = /* @__PURE__ */ N(() => r().initialHeight), M = /* @__PURE__ */ N(() => r().width), Z = /* @__PURE__ */ N(() => r().height), U = /* @__PURE__ */ N(() => r().dragHandle), L = /* @__PURE__ */ N(() => _t(r().internals.z, 0)), W = /* @__PURE__ */ N(() => r().internals.positionAbsolute.x), K = /* @__PURE__ */ N(() => r().internals.positionAbsolute.y), q = /* @__PURE__ */ N(() => r().internals.userNode), { id: j } = r(), F = /* @__PURE__ */ N(() => u(w) ?? n().nodesDraggable), J = /* @__PURE__ */ N(() => u(_) ?? n().elementsSelectable), G = /* @__PURE__ */ N(() => u(E) ?? n().nodesConnectable), ne = /* @__PURE__ */ N(() => wu(r())), ee = /* @__PURE__ */ N(() => !!r().internals.handleBounds), we = /* @__PURE__ */ N(() => u(ne) && u(ee)), oe = /* @__PURE__ */ N(() => u(b) ?? n().nodesFocusable);
  function le(ce) {
    return n().parentLookup.has(ce);
  }
  let re = /* @__PURE__ */ N(() => le(j)), he = /* @__PURE__ */ Ne(null), ge = null, _e = u(V), fe = u(z), me = u(S), Se = /* @__PURE__ */ N(() => n().nodeTypes[u(V)] ?? fa), X = /* @__PURE__ */ N(() => n().ariaLabelConfig);
  Tr("svelteflow__node_connectable", {
    get value() {
      return u(G);
    }
  }), Tr("svelteflow__node_id", j);
  let Oe = /* @__PURE__ */ N(() => {
    const ce = u(T) === void 0 ? u(M) ?? u(C) : u(M), $e = u(x) === void 0 ? u(Z) ?? u(O) : u(Z);
    if (!(ce === void 0 && $e === void 0 && u(A) === void 0))
      return `${u(A)};${ce ? `width:${pn(ce)};` : ""}${$e ? `height:${pn($e)};` : ""}`;
  });
  Xe(() => {
    (u(V) !== _e || u(z) !== fe || u(S) !== me) && u(he) !== null && requestAnimationFrame(() => {
      u(he) !== null && n().updateNodeInternals(/* @__PURE__ */ new Map([[j, { id: j, nodeElement: u(he), force: !0 }]]));
    }), _e = u(V), fe = u(z), me = u(S);
  }), Xe(() => {
    o() && (!u(we) || u(he) !== ge) && (ge && o().unobserve(ge), u(he) && o().observe(u(he)), ge = u(he));
  }), bo(() => {
    ge && o()?.unobserve(ge);
  });
  function Le(ce) {
    u(J) && (!n().selectNodesOnDrag || !u(F) || n().nodeDragThreshold > 0) && n().handleNodeSelection(j), s()?.({ node: u(q), event: ce });
  }
  function Ve(ce) {
    if (!(bu(ce) || n().disableKeyboardA11y))
      if (hu.includes(ce.key) && u(J)) {
        const $e = ce.key === "Escape";
        n().handleNodeSelection(j, $e, u(he));
      } else u(F) && r().selected && Object.prototype.hasOwnProperty.call(gi, ce.key) && (ce.preventDefault(), n(
        n().ariaLiveMessage = u(X)["node.a11yDescription.ariaLiveMessage"]({
          direction: ce.key.replace("Arrow", "").toLowerCase(),
          x: ~~r().internals.positionAbsolute.x,
          y: ~~r().internals.positionAbsolute.y
        }),
        !0
      ), n().moveSelectedNodes(gi[ce.key], ce.shiftKey ? 4 : 1));
  }
  const yt = () => {
    if (n().disableKeyboardA11y || !n().autoPanOnNodeFocus || !u(he)?.matches(":focus-visible"))
      return;
    const { width: ce, height: $e, viewport: je } = n();
    sa(/* @__PURE__ */ new Map([[j, r()]]), { x: 0, y: 0, width: ce, height: $e }, [je.x, je.y, je.zoom], !0).length > 0 || n().setCenter(r().position.x + (r().measured.width ?? 0) / 2, r().position.y + (r().measured.height ?? 0) / 2, { zoom: je.zoom });
  };
  var Qe = {
    get store() {
      return n();
    },
    set store(ce) {
      n(ce), v();
    },
    get node() {
      return r();
    },
    set node(ce) {
      r(ce), v();
    },
    get resizeObserver() {
      return o();
    },
    set resizeObserver(ce) {
      o(ce), v();
    },
    get nodeClickDistance() {
      return i();
    },
    set nodeClickDistance(ce) {
      i(ce), v();
    },
    get onnodeclick() {
      return s();
    },
    set onnodeclick(ce) {
      s(ce), v();
    },
    get onnodedrag() {
      return a();
    },
    set onnodedrag(ce) {
      a(ce), v();
    },
    get onnodedragstart() {
      return l();
    },
    set onnodedragstart(ce) {
      l(ce), v();
    },
    get onnodedragstop() {
      return c();
    },
    set onnodedragstop(ce) {
      c(ce), v();
    },
    get onnodepointerenter() {
      return d();
    },
    set onnodepointerenter(ce) {
      d(ce), v();
    },
    get onnodepointerleave() {
      return h();
    },
    set onnodepointerleave(ce) {
      h(ce), v();
    },
    get onnodepointermove() {
      return f();
    },
    set onnodepointermove(ce) {
      f(ce), v();
    },
    get onnodecontextmenu() {
      return g();
    },
    set onnodecontextmenu(ce) {
      g(ce), v();
    }
  }, kt = Ee(), ut = ie(kt);
  {
    var Xt = (ce) => {
      var $e = U0();
      tt($e, () => ({
        "data-id": j,
        class: [
          "svelte-flow__node",
          `svelte-flow__node-${u(V)}`,
          u(I)
        ],
        style: u(Oe),
        onclick: Le,
        onpointerenter: d() ? (Ie) => d()({ node: u(q), event: Ie }) : void 0,
        onpointerleave: h() ? (Ie) => h()({ node: u(q), event: Ie }) : void 0,
        onpointermove: f() ? (Ie) => f()({ node: u(q), event: Ie }) : void 0,
        oncontextmenu: g() ? (Ie) => g()({ node: u(q), event: Ie }) : void 0,
        onkeydown: u(oe) ? Ve : void 0,
        onfocus: u(oe) ? yt : void 0,
        tabIndex: u(oe) ? 0 : void 0,
        role: r().ariaRole ?? (u(oe) ? "group" : void 0),
        "aria-roledescription": "node",
        "aria-describedby": n().disableKeyboardA11y ? void 0 : `${Qu}-${n().flowId}`,
        ...r().domAttributes,
        [Rn]: {
          dragging: u($),
          selected: u(y),
          draggable: u(F),
          connectable: u(G),
          selectable: u(J),
          nopan: u(F),
          parent: u(re)
        },
        [dn]: {
          "z-index": u(L),
          transform: `translate(${u(W) ?? ""}px, ${u(K) ?? ""}px)`,
          visibility: u(ne) ? "visible" : "hidden"
        }
      }));
      var je = B($e);
      $i(je, () => u(Se), (Ie, nt) => {
        nt(Ie, {
          get data() {
            return u(m);
          },
          get id() {
            return j;
          },
          get selected() {
            return u(y);
          },
          get selectable() {
            return u(J);
          },
          get deletable() {
            return u(k);
          },
          get sourcePosition() {
            return u(z);
          },
          get targetPosition() {
            return u(S);
          },
          get zIndex() {
            return u(L);
          },
          get dragging() {
            return u($);
          },
          get draggable() {
            return u(F);
          },
          get dragHandle() {
            return u(U);
          },
          get parentId() {
            return u(Y);
          },
          get type() {
            return u(V);
          },
          get isConnectable() {
            return u(G);
          },
          get positionAbsoluteX() {
            return u(W);
          },
          get positionAbsoluteY() {
            return u(K);
          },
          get width() {
            return u(M);
          },
          get height() {
            return u(Z);
          }
        });
      }), R($e), ht($e, (Ie, nt) => Uu?.(Ie, nt), () => ({
        nodeId: j,
        isSelectable: u(J),
        disabled: !u(F),
        handleSelector: u(U),
        noDragClass: n().noDragClass,
        nodeClickDistance: i(),
        onNodeMouseDown: n().handleNodeSelection,
        onDrag: (Ie, nt, wt, Et) => {
          a()?.({ event: Ie, targetNode: wt, nodes: Et });
        },
        onDragStart: (Ie, nt, wt, Et) => {
          l()?.({ event: Ie, targetNode: wt, nodes: Et });
        },
        onDragStop: (Ie, nt, wt, Et) => {
          c()?.({ event: Ie, targetNode: wt, nodes: Et });
        },
        store: n()
      })), Ot($e, (Ie) => Q(he, Ie), () => u(he)), D(ce, $e);
    };
    se(ut, (ce) => {
      u(P) || ce(Xt);
    });
  }
  return D(e, kt), de(Qe);
}
ae(
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
var J0 = /* @__PURE__ */ te('<div class="svelte-flow__nodes"></div>');
function nd(e, t) {
  ue(t, !0);
  let n = p(t, "store", 15), r = p(t, "nodeClickDistance", 7), o = p(t, "onnodeclick", 7), i = p(t, "onnodecontextmenu", 7), s = p(t, "onnodepointerenter", 7), a = p(t, "onnodepointermove", 7), l = p(t, "onnodepointerleave", 7), c = p(t, "onnodedrag", 7), d = p(t, "onnodedragstart", 7), h = p(t, "onnodedragstop", 7);
  const f = typeof ResizeObserver > "u" ? null : new ResizeObserver((y) => {
    const w = /* @__PURE__ */ new Map();
    y.forEach((_) => {
      const k = _.target.getAttribute("data-id");
      w.set(k, { id: k, nodeElement: _.target, force: !0 });
    }), n().updateNodeInternals(w);
  });
  bo(() => {
    f?.disconnect();
  });
  var g = {
    get store() {
      return n();
    },
    set store(y) {
      n(y), v();
    },
    get nodeClickDistance() {
      return r();
    },
    set nodeClickDistance(y) {
      r(y), v();
    },
    get onnodeclick() {
      return o();
    },
    set onnodeclick(y) {
      o(y), v();
    },
    get onnodecontextmenu() {
      return i();
    },
    set onnodecontextmenu(y) {
      i(y), v();
    },
    get onnodepointerenter() {
      return s();
    },
    set onnodepointerenter(y) {
      s(y), v();
    },
    get onnodepointermove() {
      return a();
    },
    set onnodepointermove(y) {
      a(y), v();
    },
    get onnodepointerleave() {
      return l();
    },
    set onnodepointerleave(y) {
      l(y), v();
    },
    get onnodedrag() {
      return c();
    },
    set onnodedrag(y) {
      c(y), v();
    },
    get onnodedragstart() {
      return d();
    },
    set onnodedragstart(y) {
      d(y), v();
    },
    get onnodedragstop() {
      return h();
    },
    set onnodedragstop(y) {
      h(y), v();
    }
  }, m = J0();
  return mt(m, 21, () => n().visible.nodes.values(), (y) => y.id, (y, w) => {
    td(y, {
      get node() {
        return u(w);
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
        return c();
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
      set store(_) {
        n(_);
      }
    });
  }), R(m), D(e, m), de(g);
}
ae(
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
var Q0 = /* @__PURE__ */ ve('<svg class="svelte-flow__edge-wrapper"><g><!></g></svg>');
function rd(e, t) {
  ue(t, !0);
  const n = p(t, "edge", 7), r = p(t, "store", 15), o = p(t, "onedgeclick", 7), i = p(t, "onedgecontextmenu", 7), s = p(t, "onedgepointerenter", 7), a = p(t, "onedgepointerleave", 7);
  let l = /* @__PURE__ */ N(() => n().source), c = /* @__PURE__ */ N(() => n().target), d = /* @__PURE__ */ N(() => n().sourceX), h = /* @__PURE__ */ N(() => n().sourceY), f = /* @__PURE__ */ N(() => n().targetX), g = /* @__PURE__ */ N(() => n().targetY), m = /* @__PURE__ */ N(() => n().sourcePosition), y = /* @__PURE__ */ N(() => n().targetPosition), w = /* @__PURE__ */ N(() => _t(n().animated, !1)), _ = /* @__PURE__ */ N(() => _t(n().selected, !1)), k = /* @__PURE__ */ N(() => n().label), E = /* @__PURE__ */ N(() => n().labelStyle), b = /* @__PURE__ */ N(() => _t(n().data, () => ({}), !0)), P = /* @__PURE__ */ N(() => n().style), $ = /* @__PURE__ */ N(() => n().interactionWidth), A = /* @__PURE__ */ N(() => _t(n().type, "default")), I = /* @__PURE__ */ N(() => n().sourceHandle), V = /* @__PURE__ */ N(() => n().targetHandle), Y = /* @__PURE__ */ N(() => n().markerStart), z = /* @__PURE__ */ N(() => n().markerEnd), S = /* @__PURE__ */ N(() => n().selectable), T = /* @__PURE__ */ N(() => n().focusable), x = /* @__PURE__ */ N(() => _t(n().deletable, !0)), C = /* @__PURE__ */ N(() => n().hidden), O = /* @__PURE__ */ N(() => n().zIndex), M = /* @__PURE__ */ N(() => n().class), Z = /* @__PURE__ */ N(() => n().ariaLabel), U = null;
  const { id: L } = n();
  Tr("svelteflow__edge_id", L);
  let W = /* @__PURE__ */ N(() => u(S) ?? r().elementsSelectable), K = /* @__PURE__ */ N(() => u(T) ?? r().edgesFocusable), q = /* @__PURE__ */ N(() => r().edgeTypes[u(A)] ?? ha), j = /* @__PURE__ */ N(() => u(Y) ? `url('#${Ns(u(Y), r().flowId)}')` : void 0), F = /* @__PURE__ */ N(() => u(z) ? `url('#${Ns(u(z), r().flowId)}')` : void 0);
  function J(re) {
    const he = r().edgeLookup.get(L);
    he && (u(W) && r().handleEdgeSelection(L), o()?.({ event: re, edge: he }));
  }
  function G(re, he) {
    const ge = r().edgeLookup.get(L);
    ge && he({ event: re, edge: ge });
  }
  function ne(re) {
    if (!r().disableKeyboardA11y && hu.includes(re.key) && u(W)) {
      const { unselectNodesAndEdges: he, addSelectedEdges: ge } = r();
      re.key === "Escape" ? (U?.blur(), he({ edges: [n()] })) : ge([L]);
    }
  }
  var ee = {
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
  }, we = Ee(), oe = ie(we);
  {
    var le = (re) => {
      var he = Q0();
      let ge;
      var _e = B(he);
      tt(_e, () => ({
        class: ["svelte-flow__edge", u(M)],
        "data-id": L,
        onclick: J,
        oncontextmenu: i() ? (me) => {
          G(me, i());
        } : void 0,
        onpointerenter: s() ? (me) => {
          G(me, s());
        } : void 0,
        onpointerleave: a() ? (me) => {
          G(me, a());
        } : void 0,
        "aria-label": u(Z) === null ? void 0 : u(Z) ? u(Z) : `Edge from ${u(l)} to ${u(c)}`,
        "aria-describedby": u(K) ? `${ed}-${r().flowId}` : void 0,
        role: n().ariaRole ?? (u(K) ? "group" : "img"),
        "aria-roledescription": "edge",
        onkeydown: u(K) ? ne : void 0,
        tabindex: u(K) ? 0 : void 0,
        ...n().domAttributes,
        [Rn]: {
          animated: u(w),
          selected: u(_),
          selectable: u(W)
        }
      }));
      var fe = B(_e);
      $i(fe, () => u(q), (me, Se) => {
        Se(me, {
          get id() {
            return L;
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
            return u(h);
          },
          get targetX() {
            return u(f);
          },
          get targetY() {
            return u(g);
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
            return u(_);
          },
          get label() {
            return u(k);
          },
          get labelStyle() {
            return u(E);
          },
          get data() {
            return u(b);
          },
          get style() {
            return u(P);
          },
          get interactionWidth() {
            return u($);
          },
          get selectable() {
            return u(W);
          },
          get deletable() {
            return u(x);
          },
          get type() {
            return u(A);
          },
          get sourceHandleId() {
            return u(I);
          },
          get targetHandleId() {
            return u(V);
          },
          get markerStart() {
            return u(j);
          },
          get markerEnd() {
            return u(F);
          }
        });
      }), R(_e), Ot(_e, (me) => U = me, () => U), R(he), Ce(() => ge = ct(he, "", ge, { "z-index": u(O) })), D(re, he);
    };
    se(oe, (re) => {
      u(C) || re(le);
    });
  }
  return D(e, we), de(ee);
}
ae(
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
Ff();
var em = /* @__PURE__ */ ve("<defs></defs>");
function od(e, t) {
  ue(t, !1);
  const n = on();
  Lc();
  var r = em();
  mt(r, 5, () => n.markers, (o) => o.id, (o, i) => {
    id(o, Ke(() => u(i)));
  }), R(r), D(e, r), de();
}
ae(od, {}, [], [], !0);
var tm = /* @__PURE__ */ ve('<polyline class="arrow" fill="none" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4"></polyline>'), nm = /* @__PURE__ */ ve('<polyline class="arrowclosed" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), rm = /* @__PURE__ */ ve('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function id(e, t) {
  ue(t, !0);
  let n = p(t, "id", 7), r = p(t, "type", 7), o = p(t, "width", 7, 12.5), i = p(t, "height", 7, 12.5), s = p(t, "markerUnits", 7, "strokeWidth"), a = p(t, "orient", 7, "auto-start-reverse"), l = p(t, "color", 7, "none"), c = p(t, "strokeWidth", 7);
  var d = {
    get id() {
      return n();
    },
    set id(y) {
      n(y), v();
    },
    get type() {
      return r();
    },
    set type(y) {
      r(y), v();
    },
    get width() {
      return o();
    },
    set width(y = 12.5) {
      o(y), v();
    },
    get height() {
      return i();
    },
    set height(y = 12.5) {
      i(y), v();
    },
    get markerUnits() {
      return s();
    },
    set markerUnits(y = "strokeWidth") {
      s(y), v();
    },
    get orient() {
      return a();
    },
    set orient(y = "auto-start-reverse") {
      a(y), v();
    },
    get color() {
      return l();
    },
    set color(y = "none") {
      l(y), v();
    },
    get strokeWidth() {
      return c();
    },
    set strokeWidth(y) {
      c(y), v();
    }
  }, h = rm(), f = B(h);
  {
    var g = (y) => {
      var w = tm();
      let _;
      Ce(() => {
        be(w, "stroke-width", c()), _ = ct(w, "", _, { stroke: l() });
      }), D(y, w);
    }, m = (y) => {
      var w = Ee(), _ = ie(w);
      {
        var k = (E) => {
          var b = nm();
          let P;
          Ce(() => {
            be(b, "stroke-width", c()), P = ct(b, "", P, { stroke: l(), fill: l() });
          }), D(E, b);
        };
        se(
          _,
          (E) => {
            r() === co.ArrowClosed && E(k);
          },
          !0
        );
      }
      D(y, w);
    };
    se(f, (y) => {
      r() === co.Arrow ? y(g) : y(m, !1);
    });
  }
  return R(h), Ce(() => {
    be(h, "id", n()), be(h, "markerWidth", `${o()}`), be(h, "markerHeight", `${i()}`), be(h, "markerUnits", s()), be(h, "orient", a());
  }), D(e, h), de(d);
}
ae(
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
var om = /* @__PURE__ */ te('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!></div>');
function sd(e, t) {
  ue(t, !0);
  let n = p(t, "store", 15), r = p(t, "onedgeclick", 7), o = p(t, "onedgecontextmenu", 7), i = p(t, "onedgepointerenter", 7), s = p(t, "onedgepointerleave", 7);
  var a = {
    get store() {
      return n();
    },
    set store(f) {
      n(f), v();
    },
    get onedgeclick() {
      return r();
    },
    set onedgeclick(f) {
      r(f), v();
    },
    get onedgecontextmenu() {
      return o();
    },
    set onedgecontextmenu(f) {
      o(f), v();
    },
    get onedgepointerenter() {
      return i();
    },
    set onedgepointerenter(f) {
      i(f), v();
    },
    get onedgepointerleave() {
      return s();
    },
    set onedgepointerleave(f) {
      s(f), v();
    }
  }, l = om(), c = B(l), d = B(c);
  od(d, {}), R(c);
  var h = H(c, 2);
  return mt(h, 17, () => n().visible.edges.values(), (f) => f.id, (f, g) => {
    rd(f, {
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
      set store(m) {
        n(m);
      }
    });
  }), R(l), D(e, l), de(a);
}
ae(
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
var im = /* @__PURE__ */ te('<div class="svelte-flow__selection svelte-qtk83j"></div>');
const sm = {
  hash: "svelte-qtk83j",
  code: ".svelte-flow__selection.svelte-qtk83j {position:absolute;top:0;left:0;}"
};
function ga(e, t) {
  ue(t, !0), ze(e, sm);
  let n = p(t, "x", 7, 0), r = p(t, "y", 7, 0), o = p(t, "width", 7, 0), i = p(t, "height", 7, 0), s = p(t, "isVisible", 7, !0);
  var a = {
    get x() {
      return n();
    },
    set x(h = 0) {
      n(h), v();
    },
    get y() {
      return r();
    },
    set y(h = 0) {
      r(h), v();
    },
    get width() {
      return o();
    },
    set width(h = 0) {
      o(h), v();
    },
    get height() {
      return i();
    },
    set height(h = 0) {
      i(h), v();
    },
    get isVisible() {
      return s();
    },
    set isVisible(h = !0) {
      s(h), v();
    }
  }, l = Ee(), c = ie(l);
  {
    var d = (h) => {
      var f = im();
      let g;
      Ce((m) => g = ct(f, "", g, m), [
        () => ({
          width: typeof o() == "string" ? o() : pn(o()),
          height: typeof i() == "string" ? i() : pn(i()),
          transform: `translate(${n()}px, ${r()}px)`
        })
      ]), D(h, f);
    };
    se(c, (h) => {
      s() && h(d);
    });
  }
  return D(e, l), de(a);
}
ae(ga, { x: {}, y: {}, width: {}, height: {}, isVisible: {} }, [], [], !0);
var am = /* @__PURE__ */ te("<div><!></div>");
const lm = {
  hash: "svelte-c7g5lf",
  code: `.svelte-flow__selection-wrapper.svelte-c7g5lf {position:absolute;top:0;left:0;z-index:2000;pointer-events:all;}.svelte-flow__selection-wrapper.svelte-c7g5lf:focus,
  .svelte-flow__selection-wrapper.svelte-c7g5lf:focus-visible {outline:none;}`
};
function ad(e, t) {
  ue(t, !0), ze(e, lm);
  let n = p(t, "store", 15), r = p(t, "onnodedrag", 7), o = p(t, "onnodedragstart", 7), i = p(t, "onnodedragstop", 7), s = p(t, "onselectionclick", 7), a = p(t, "onselectioncontextmenu", 7), l = /* @__PURE__ */ Ne(void 0);
  Xe(() => {
    n().disableKeyboardA11y || u(l)?.focus({ preventScroll: !0 });
  });
  let c = /* @__PURE__ */ N(() => {
    if (n().selectionRectMode === "nodes") {
      n().nodes;
      const _ = So(n().nodeLookup, { filter: (k) => !!k.selected });
      if (_.width > 0 && _.height > 0)
        return _;
    }
    return null;
  });
  function d(_) {
    const k = n().nodes.filter((E) => E.selected);
    a()?.({ nodes: k, event: _ });
  }
  function h(_) {
    const k = n().nodes.filter((E) => E.selected);
    s()?.({ nodes: k, event: _ });
  }
  function f(_) {
    Object.prototype.hasOwnProperty.call(gi, _.key) && (_.preventDefault(), n().moveSelectedNodes(gi[_.key], _.shiftKey ? 4 : 1));
  }
  var g = {
    get store() {
      return n();
    },
    set store(_) {
      n(_), v();
    },
    get onnodedrag() {
      return r();
    },
    set onnodedrag(_) {
      r(_), v();
    },
    get onnodedragstart() {
      return o();
    },
    set onnodedragstart(_) {
      o(_), v();
    },
    get onnodedragstop() {
      return i();
    },
    set onnodedragstop(_) {
      i(_), v();
    },
    get onselectionclick() {
      return s();
    },
    set onselectionclick(_) {
      s(_), v();
    },
    get onselectioncontextmenu() {
      return a();
    },
    set onselectioncontextmenu(_) {
      a(_), v();
    }
  }, m = Ee(), y = ie(m);
  {
    var w = (_) => {
      var k = am();
      k.__contextmenu = d, k.__click = h, k.__keydown = function(...P) {
        (n().disableKeyboardA11y ? void 0 : f)?.apply(this, P);
      };
      let E;
      var b = B(k);
      ga(b, { width: "100%", height: "100%", x: 0, y: 0 }), R(k), ht(k, (P, $) => Uu?.(P, $), () => ({
        disabled: !1,
        store: n(),
        onDrag: (P, $, A, I) => {
          r()?.({ event: P, targetNode: null, nodes: I });
        },
        onDragStart: (P, $, A, I) => {
          o()?.({ event: P, targetNode: null, nodes: I });
        },
        onDragStop: (P, $, A, I) => {
          i()?.({ event: P, targetNode: null, nodes: I });
        }
      })), Ot(k, (P) => Q(l, P), () => u(l)), Ce(
        (P) => {
          At(k, 1, Ln(["svelte-flow__selection-wrapper", n().noPanClass]), "svelte-c7g5lf"), be(k, "role", n().disableKeyboardA11y ? void 0 : "button"), be(k, "tabindex", n().disableKeyboardA11y ? void 0 : -1), E = ct(k, "", E, P);
        },
        [
          () => ({
            width: pn(u(c).width),
            height: pn(u(c).height),
            transform: `translate(${u(c).x ?? ""}px, ${u(c).y ?? ""}px)`
          })
        ]
      ), D(_, k);
    };
    se(y, (_) => {
      n().selectionRectMode === "nodes" && u(c) && Cn(u(c).x) && Cn(u(c).y) && _(w);
    });
  }
  return D(e, m), de(g);
}
er(["contextmenu", "click", "keydown"]);
ae(
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
function cm(e) {
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
function cn(e, t) {
  let { enabled: n = !0, trigger: r, type: o = "keydown" } = t;
  function i(a) {
    const l = Array.isArray(r) ? r : [r], c = [a.metaKey, a.altKey, a.shiftKey, a.ctrlKey].reduce(
      (d, h, f) => h ? d | 1 << f : d,
      0
    );
    for (const d of l) {
      const h = {
        preventDefault: !1,
        enabled: !0,
        ...d
      }, { modifier: f, key: g, callback: m, preventDefault: y, enabled: w } = h;
      if (w) {
        if (a.key !== g) continue;
        if (f === null || f === !1) {
          if (c !== 0) continue;
        } else if (f !== void 0 && f?.[0]?.length > 0) {
          const k = Array.isArray(f) ? f : [f];
          let E = !1;
          for (const b of k)
            if ((Array.isArray(b) ? b : [b]).reduce(
              ($, A) => $ | cm(A),
              0
            ) === c) {
              E = !0;
              break;
            }
          if (!E) continue;
        }
        y && a.preventDefault();
        const _ = {
          node: e,
          trigger: h,
          originalEvent: a
        };
        e.dispatchEvent(new CustomEvent("shortcut", { detail: _ })), m?.(_);
      }
    }
  }
  let s;
  return n && (s = hs(e, o, i)), {
    update: (a) => {
      const { enabled: l = !0, type: c = "keydown" } = a;
      n && (!l || o !== c) ? s?.() : !n && l && (s = hs(e, c, i)), n = l, o = c, r = a.trigger;
    },
    destroy: () => {
      s?.();
    }
  };
}
function ot() {
  const e = /* @__PURE__ */ N(on), t = (i) => {
    const s = vl(i) ? i : u(e).nodeLookup.get(i.id), a = s.parentId ? Vp(s.position, s.measured, s.parentId, u(e).nodeLookup, u(e).nodeOrigin) : s.position, l = {
      ...s,
      position: a,
      width: s.measured?.width ?? s.width,
      height: s.measured?.height ?? s.height
    };
    return Ir(l);
  };
  function n(i, s, a = { replace: !1 }) {
    u(e).nodes = st(() => u(e).nodes).map((l) => {
      if (l.id === i) {
        const c = typeof s == "function" ? s(l) : s;
        return a?.replace && vl(c) ? c : { ...l, ...c };
      }
      return l;
    });
  }
  function r(i, s, a = { replace: !1 }) {
    u(e).edges = st(() => u(e).edges).map((l) => {
      if (l.id === i) {
        const c = typeof s == "function" ? s(l) : s;
        return a.replace && D0(c) ? c : { ...l, ...c };
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
    getNodes: (i) => i === void 0 ? u(e).nodes : _l(u(e).nodeLookup, i),
    getEdge: (i) => u(e).edgeLookup.get(i),
    getEdges: (i) => i === void 0 ? u(e).edges : _l(u(e).edgeLookup, i),
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
    getViewport: () => Xl(u(e).viewport),
    setCenter: async (i, s, a) => u(e).setCenter(i, s, a),
    fitView: (i) => u(e).fitView(i),
    fitBounds: async (i, s) => {
      if (!u(e).panZoom)
        return Promise.resolve(!1);
      const a = aa(i, u(e).width, u(e).height, u(e).minZoom, u(e).maxZoom, s?.padding ?? 0.1);
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
      const l = rl(i), c = l ? i : t(i);
      return c ? (a || u(e).nodes).filter((d) => {
        const h = u(e).nodeLookup.get(d.id);
        if (!h || !l && d.id === i.id)
          return !1;
        const f = Ir(h), g = uo(f, c);
        return s && g > 0 || g >= f.width * f.height || g >= c.width * c.height;
      }) : [];
    },
    isNodeIntersecting: (i, s, a = !0) => {
      const c = rl(i) ? i : t(i);
      if (!c)
        return !1;
      const d = uo(c, s);
      return a && d > 0 || d >= s.width * s.height || d >= c.width * c.height;
    },
    deleteElements: async ({ nodes: i = [], edges: s = [] }) => {
      const { nodes: a, edges: l } = await Op({
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
      const a = s.snapToGrid ? u(e).snapGrid : !1, { x: l, y: c, zoom: d } = u(e).viewport, { x: h, y: f } = u(e).domNode.getBoundingClientRect(), g = { x: i.x - h, y: i.y - f };
      return Po(g, [l, c, d], a !== null, a || [1, 1]);
    },
    /**
     *
     * @param position
     * @returns
     */
    flowToScreenPosition: (i) => {
      if (!u(e).domNode)
        return i;
      const { x: s, y: a, zoom: l } = u(e).viewport, { x: c, y: d } = u(e).domNode.getBoundingClientRect(), h = hi(i, [s, a, l]);
      return { x: h.x + c, y: h.y + d };
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
    getNodesBounds: (i) => $p(i, {
      nodeLookup: u(e).nodeLookup,
      nodeOrigin: u(e).nodeOrigin
    }),
    getHandleConnections: ({ type: i, id: s, nodeId: a }) => Array.from(u(e).connectionLookup.get(`${a}-${i}-${s ?? null}`)?.values() ?? [])
  };
}
function _l(e, t) {
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
  ue(t, !0);
  let n = p(t, "store", 15), r = p(t, "selectionKey", 7, "Shift"), o = p(t, "multiSelectionKey", 23, () => sr() ? "Meta" : "Control"), i = p(t, "deleteKey", 7, "Backspace"), s = p(t, "panActivationKey", 7, " "), a = p(t, "zoomActivationKey", 23, () => sr() ? "Meta" : "Control"), { deleteElements: l } = ot();
  function c(w) {
    return w !== null && typeof w == "object";
  }
  function d(w) {
    return c(w) ? w.modifier || [] : [];
  }
  function h(w) {
    return w == null ? "" : c(w) ? w.key : w;
  }
  function f(w, _) {
    return (Array.isArray(w) ? w : [w]).map((E) => {
      const b = h(E);
      return {
        key: b,
        modifier: d(E),
        enabled: b !== null,
        callback: _
      };
    });
  }
  function g() {
    n(n().selectionRect = null, !0), n(n().selectionKeyPressed = !1, !0), n(n().multiselectionKeyPressed = !1, !0), n(n().deleteKeyPressed = !1, !0), n(n().panActivationKeyPressed = !1, !0), n(n().zoomActivationKeyPressed = !1, !0);
  }
  function m() {
    const w = n().nodes.filter((k) => k.selected), _ = n().edges.filter((k) => k.selected);
    l({ nodes: w, edges: _ });
  }
  var y = {
    get store() {
      return n();
    },
    set store(w) {
      n(w), v();
    },
    get selectionKey() {
      return r();
    },
    set selectionKey(w = "Shift") {
      r(w), v();
    },
    get multiSelectionKey() {
      return o();
    },
    set multiSelectionKey(w = sr() ? "Meta" : "Control") {
      o(w), v();
    },
    get deleteKey() {
      return i();
    },
    set deleteKey(w = "Backspace") {
      i(w), v();
    },
    get panActivationKey() {
      return s();
    },
    set panActivationKey(w = " ") {
      s(w), v();
    },
    get zoomActivationKey() {
      return a();
    },
    set zoomActivationKey(w = sr() ? "Meta" : "Control") {
      a(w), v();
    }
  };
  return ri("blur", St, g), ri("contextmenu", St, g), ht(St, (w, _) => cn?.(w, _), () => ({
    trigger: f(r(), () => n(n().selectionKeyPressed = !0, !0)),
    type: "keydown"
  })), ht(St, (w, _) => cn?.(w, _), () => ({
    trigger: f(r(), () => n(n().selectionKeyPressed = !1, !0)),
    type: "keyup"
  })), ht(St, (w, _) => cn?.(w, _), () => ({
    trigger: f(o(), () => {
      n(n().multiselectionKeyPressed = !0, !0);
    }),
    type: "keydown"
  })), ht(St, (w, _) => cn?.(w, _), () => ({
    trigger: f(o(), () => n(n().multiselectionKeyPressed = !1, !0)),
    type: "keyup"
  })), ht(St, (w, _) => cn?.(w, _), () => ({
    trigger: f(i(), (w) => {
      !(w.originalEvent.ctrlKey || w.originalEvent.metaKey || w.originalEvent.shiftKey) && !bu(w.originalEvent) && (n(n().deleteKeyPressed = !0, !0), m());
    }),
    type: "keydown"
  })), ht(St, (w, _) => cn?.(w, _), () => ({
    trigger: f(i(), () => n(n().deleteKeyPressed = !1, !0)),
    type: "keyup"
  })), ht(St, (w, _) => cn?.(w, _), () => ({
    trigger: f(s(), () => n(n().panActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), ht(St, (w, _) => cn?.(w, _), () => ({
    trigger: f(s(), () => n(n().panActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), ht(St, (w, _) => cn?.(w, _), () => ({
    trigger: f(a(), () => n(n().zoomActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), ht(St, (w, _) => cn?.(w, _), () => ({
    trigger: f(a(), () => n(n().zoomActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), de(y);
}
ae(
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
var um = /* @__PURE__ */ ve('<path fill="none" class="svelte-flow__connection-path"></path>'), dm = /* @__PURE__ */ ve('<svg class="svelte-flow__connectionline"><g><!></g></svg>');
function cd(e, t) {
  ue(t, !0);
  let n = p(t, "store", 15), r = p(t, "type", 7), o = p(t, "containerStyle", 7), i = p(t, "style", 7), s = p(t, "LineComponent", 7), a = /* @__PURE__ */ N(() => {
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
        const [g] = ku(f);
        return g;
      }
      case xn.Straight: {
        const [g] = Su(f);
        return g;
      }
      case xn.Step:
      case xn.SmoothStep: {
        const [g] = la({
          ...f,
          borderRadius: r() === xn.Step ? 0 : void 0
        });
        return g;
      }
    }
  });
  var l = {
    get store() {
      return n();
    },
    set store(f) {
      n(f), v();
    },
    get type() {
      return r();
    },
    set type(f) {
      r(f), v();
    },
    get containerStyle() {
      return o();
    },
    set containerStyle(f) {
      o(f), v();
    },
    get style() {
      return i();
    },
    set style(f) {
      i(f), v();
    },
    get LineComponent() {
      return s();
    },
    set LineComponent(f) {
      s(f), v();
    }
  }, c = Ee(), d = ie(c);
  {
    var h = (f) => {
      var g = dm(), m = B(g), y = B(m);
      {
        var w = (k) => {
          var E = Ee(), b = ie(E);
          $i(b, s, (P, $) => {
            $(P, {});
          }), D(k, E);
        }, _ = (k) => {
          var E = um();
          Ce(() => {
            be(E, "d", u(a)), ct(E, i());
          }), D(k, E);
        };
        se(y, (k) => {
          s() ? k(w) : k(_, !1);
        });
      }
      R(m), R(g), Ce(
        (k) => {
          be(g, "width", n().width), be(g, "height", n().height), ct(g, o()), At(m, 0, k);
        },
        [
          () => Ln([
            "svelte-flow__connection",
            Np(n().connection.isValid)
          ])
        ]
      ), D(f, g);
    };
    se(d, (f) => {
      n().connection.inProgress && f(h);
    });
  }
  return D(e, c), de(l);
}
ae(
  cd,
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
var fm = /* @__PURE__ */ te("<div><!></div>");
function To(e, t) {
  ue(t, !0);
  let n = p(t, "position", 7, "top-right"), r = p(t, "style", 7), o = p(t, "class", 7), i = p(t, "children", 7), s = /* @__PURE__ */ Be(t, [
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
    set position(h = "top-right") {
      n(h), v();
    },
    get style() {
      return r();
    },
    set style(h) {
      r(h), v();
    },
    get class() {
      return o();
    },
    set class(h) {
      o(h), v();
    },
    get children() {
      return i();
    },
    set children(h) {
      i(h), v();
    }
  }, c = fm();
  tt(c, (h) => ({ class: h, style: r(), ...s }), [
    () => ["svelte-flow__panel", o(), ...u(a)]
  ]);
  var d = B(c);
  return qe(d, () => i() ?? pt), R(c), D(e, c), de(l);
}
ae(To, { position: {}, style: {}, class: {}, children: {} }, [], [], !0);
var hm = /* @__PURE__ */ te('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function ud(e, t) {
  ue(t, !0);
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
      To(l, {
        get position() {
          return r();
        },
        class: "svelte-flow__attribution",
        "data-message": "Feel free to remove the attribution or check out how you could support us: https://svelteflow.dev/support-us",
        children: (c, d) => {
          var h = hm();
          D(c, h);
        },
        $$slots: { default: !0 }
      });
    };
    se(s, (l) => {
      n()?.hideAttribution || l(a);
    });
  }
  return D(e, i), de(o);
}
ae(ud, { proOptions: {}, position: {} }, [], [], !0);
var gm = /* @__PURE__ */ te("<div><!></div>");
const vm = {
  hash: "svelte-15m40wc",
  code: ".svelte-flow.svelte-15m40wc {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;background-color:var(--background-color, var(--background-color-default));}:root {--background-color-default: #fff;--background-pattern-color-default: #ddd;--minimap-mask-color-default: rgb(240, 240, 240, 0.6);--minimap-mask-stroke-color-default: none;--minimap-mask-stroke-width-default: 1;--controls-button-background-color-default: #fefefe;--controls-button-background-color-hover-default: #f4f4f4;--controls-button-color-default: inherit;--controls-button-color-hover-default: inherit;--controls-button-border-color-default: #eee;}"
};
function dd(e, t) {
  ue(t, !0), ze(e, vm);
  let n = p(t, "width", 7), r = p(t, "height", 7), o = p(t, "colorMode", 7), i = p(t, "domNode", 15), s = p(t, "clientWidth", 15), a = p(t, "clientHeight", 15), l = p(t, "children", 7), c = p(t, "rest", 7), d = /* @__PURE__ */ N(() => c().class), h = /* @__PURE__ */ N(() => gh(c(), [
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
  function f(w) {
    w.currentTarget.scrollTo({ top: 0, left: 0, behavior: "auto" }), c().onscroll && c().onscroll(w);
  }
  var g = {
    get width() {
      return n();
    },
    set width(w) {
      n(w), v();
    },
    get height() {
      return r();
    },
    set height(w) {
      r(w), v();
    },
    get colorMode() {
      return o();
    },
    set colorMode(w) {
      o(w), v();
    },
    get domNode() {
      return i();
    },
    set domNode(w) {
      i(w), v();
    },
    get clientWidth() {
      return s();
    },
    set clientWidth(w) {
      s(w), v();
    },
    get clientHeight() {
      return a();
    },
    set clientHeight(w) {
      a(w), v();
    },
    get children() {
      return l();
    },
    set children(w) {
      l(w), v();
    },
    get rest() {
      return c();
    },
    set rest(w) {
      c(w), v();
    }
  }, m = gm();
  tt(
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
      onscroll: f,
      ...u(h),
      [dn]: w
    }),
    [
      () => ({ width: pn(n()), height: pn(r()) })
    ],
    void 0,
    void 0,
    "svelte-15m40wc"
  );
  var y = B(m);
  return qe(y, () => l() ?? pt), R(m), Ot(m, (w) => i(w), () => i()), Oa(m, "clientHeight", a), Oa(m, "clientWidth", s), D(e, m), de(g);
}
ae(
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
var pm = /* @__PURE__ */ te('<div class="svelte-flow__viewport-back svelte-flow__container"></div> <!> <div class="svelte-flow__edge-labels svelte-flow__container"></div> <!> <!> <!> <div class="svelte-flow__viewport-front svelte-flow__container"></div>', 1), mm = /* @__PURE__ */ te("<!> <!>", 1), ym = /* @__PURE__ */ te("<!> <!> <!> <!> <!>", 1);
function fd(e, t) {
  ue(t, !0);
  let n = p(t, "width", 7), r = p(t, "height", 7), o = p(t, "proOptions", 7), i = p(t, "selectionKey", 7), s = p(t, "deleteKey", 7), a = p(t, "panActivationKey", 7), l = p(t, "multiSelectionKey", 7), c = p(t, "zoomActivationKey", 7), d = p(t, "paneClickDistance", 7, 1), h = p(t, "nodeClickDistance", 7, 1), f = p(t, "onmovestart", 7), g = p(t, "onmoveend", 7), m = p(t, "onmove", 7), y = p(t, "oninit", 7), w = p(t, "onnodeclick", 7), _ = p(t, "onnodecontextmenu", 7), k = p(t, "onnodedrag", 7), E = p(t, "onnodedragstart", 7), b = p(t, "onnodedragstop", 7), P = p(t, "onnodepointerenter", 7), $ = p(t, "onnodepointermove", 7), A = p(t, "onnodepointerleave", 7), I = p(t, "onselectionclick", 7), V = p(t, "onselectioncontextmenu", 7), Y = p(t, "onselectionstart", 7), z = p(t, "onselectionend", 7), S = p(t, "onedgeclick", 7), T = p(t, "onedgecontextmenu", 7), x = p(t, "onedgepointerenter", 7), C = p(t, "onedgepointerleave", 7), O = p(t, "onpaneclick", 7), M = p(t, "onpanecontextmenu", 7), Z = p(t, "panOnScrollMode", 23, () => cr.Free), U = p(t, "preventScrolling", 7, !0), L = p(t, "zoomOnScroll", 7, !0), W = p(t, "zoomOnDoubleClick", 7, !0), K = p(t, "zoomOnPinch", 7, !0), q = p(t, "panOnScroll", 7, !1), j = p(t, "panOnScrollSpeed", 7, 0.5), F = p(t, "panOnDrag", 7, !0), J = p(t, "selectionOnDrag", 7, !1), G = p(t, "connectionLineComponent", 7), ne = p(t, "connectionLineStyle", 7), ee = p(t, "connectionLineContainerStyle", 7), we = p(t, "connectionLineType", 23, () => xn.Bezier), oe = p(t, "attributionPosition", 7), le = p(t, "children", 7), re = p(t, "nodes", 31, () => Kt([])), he = p(t, "edges", 31, () => Kt([])), ge = p(t, "viewport", 31, () => {
  }), _e = /* @__PURE__ */ Be(t, [
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
  ]), fe = Xu({
    props: _e,
    width: n(),
    height: r(),
    get nodes() {
      return re();
    },
    set nodes(X) {
      re(X);
    },
    get edges() {
      return he();
    },
    set edges(X) {
      he(X);
    },
    get viewport() {
      return ge();
    },
    set viewport(X) {
      ge(X);
    }
  });
  const me = Xn(vi);
  me && me.setStore && me.setStore(fe), Tr(vi, {
    provider: !1,
    getStore() {
      return fe;
    }
  }), Xe(() => {
    const X = { nodes: fe.selectedNodes, edges: fe.selectedEdges };
    st(() => t.onselectionchange)?.(X);
    for (const We of fe.selectionChangeHandlers.values())
      We(X);
  }), bo(() => {
    fe.reset();
  });
  var Se = {
    get width() {
      return n();
    },
    set width(X) {
      n(X), v();
    },
    get height() {
      return r();
    },
    set height(X) {
      r(X), v();
    },
    get proOptions() {
      return o();
    },
    set proOptions(X) {
      o(X), v();
    },
    get selectionKey() {
      return i();
    },
    set selectionKey(X) {
      i(X), v();
    },
    get deleteKey() {
      return s();
    },
    set deleteKey(X) {
      s(X), v();
    },
    get panActivationKey() {
      return a();
    },
    set panActivationKey(X) {
      a(X), v();
    },
    get multiSelectionKey() {
      return l();
    },
    set multiSelectionKey(X) {
      l(X), v();
    },
    get zoomActivationKey() {
      return c();
    },
    set zoomActivationKey(X) {
      c(X), v();
    },
    get paneClickDistance() {
      return d();
    },
    set paneClickDistance(X = 1) {
      d(X), v();
    },
    get nodeClickDistance() {
      return h();
    },
    set nodeClickDistance(X = 1) {
      h(X), v();
    },
    get onmovestart() {
      return f();
    },
    set onmovestart(X) {
      f(X), v();
    },
    get onmoveend() {
      return g();
    },
    set onmoveend(X) {
      g(X), v();
    },
    get onmove() {
      return m();
    },
    set onmove(X) {
      m(X), v();
    },
    get oninit() {
      return y();
    },
    set oninit(X) {
      y(X), v();
    },
    get onnodeclick() {
      return w();
    },
    set onnodeclick(X) {
      w(X), v();
    },
    get onnodecontextmenu() {
      return _();
    },
    set onnodecontextmenu(X) {
      _(X), v();
    },
    get onnodedrag() {
      return k();
    },
    set onnodedrag(X) {
      k(X), v();
    },
    get onnodedragstart() {
      return E();
    },
    set onnodedragstart(X) {
      E(X), v();
    },
    get onnodedragstop() {
      return b();
    },
    set onnodedragstop(X) {
      b(X), v();
    },
    get onnodepointerenter() {
      return P();
    },
    set onnodepointerenter(X) {
      P(X), v();
    },
    get onnodepointermove() {
      return $();
    },
    set onnodepointermove(X) {
      $(X), v();
    },
    get onnodepointerleave() {
      return A();
    },
    set onnodepointerleave(X) {
      A(X), v();
    },
    get onselectionclick() {
      return I();
    },
    set onselectionclick(X) {
      I(X), v();
    },
    get onselectioncontextmenu() {
      return V();
    },
    set onselectioncontextmenu(X) {
      V(X), v();
    },
    get onselectionstart() {
      return Y();
    },
    set onselectionstart(X) {
      Y(X), v();
    },
    get onselectionend() {
      return z();
    },
    set onselectionend(X) {
      z(X), v();
    },
    get onedgeclick() {
      return S();
    },
    set onedgeclick(X) {
      S(X), v();
    },
    get onedgecontextmenu() {
      return T();
    },
    set onedgecontextmenu(X) {
      T(X), v();
    },
    get onedgepointerenter() {
      return x();
    },
    set onedgepointerenter(X) {
      x(X), v();
    },
    get onedgepointerleave() {
      return C();
    },
    set onedgepointerleave(X) {
      C(X), v();
    },
    get onpaneclick() {
      return O();
    },
    set onpaneclick(X) {
      O(X), v();
    },
    get onpanecontextmenu() {
      return M();
    },
    set onpanecontextmenu(X) {
      M(X), v();
    },
    get panOnScrollMode() {
      return Z();
    },
    set panOnScrollMode(X = cr.Free) {
      Z(X), v();
    },
    get preventScrolling() {
      return U();
    },
    set preventScrolling(X = !0) {
      U(X), v();
    },
    get zoomOnScroll() {
      return L();
    },
    set zoomOnScroll(X = !0) {
      L(X), v();
    },
    get zoomOnDoubleClick() {
      return W();
    },
    set zoomOnDoubleClick(X = !0) {
      W(X), v();
    },
    get zoomOnPinch() {
      return K();
    },
    set zoomOnPinch(X = !0) {
      K(X), v();
    },
    get panOnScroll() {
      return q();
    },
    set panOnScroll(X = !1) {
      q(X), v();
    },
    get panOnScrollSpeed() {
      return j();
    },
    set panOnScrollSpeed(X = 0.5) {
      j(X), v();
    },
    get panOnDrag() {
      return F();
    },
    set panOnDrag(X = !0) {
      F(X), v();
    },
    get selectionOnDrag() {
      return J();
    },
    set selectionOnDrag(X = !1) {
      J(X), v();
    },
    get connectionLineComponent() {
      return G();
    },
    set connectionLineComponent(X) {
      G(X), v();
    },
    get connectionLineStyle() {
      return ne();
    },
    set connectionLineStyle(X) {
      ne(X), v();
    },
    get connectionLineContainerStyle() {
      return ee();
    },
    set connectionLineContainerStyle(X) {
      ee(X), v();
    },
    get connectionLineType() {
      return we();
    },
    set connectionLineType(X = xn.Bezier) {
      we(X), v();
    },
    get attributionPosition() {
      return oe();
    },
    set attributionPosition(X) {
      oe(X), v();
    },
    get children() {
      return le();
    },
    set children(X) {
      le(X), v();
    },
    get nodes() {
      return re();
    },
    set nodes(X = []) {
      re(X), v();
    },
    get edges() {
      return he();
    },
    set edges(X = []) {
      he(X), v();
    },
    get viewport() {
      return ge();
    },
    set viewport(X = void 0) {
      ge(X), v();
    }
  };
  return dd(e, {
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
      return _e;
    },
    get domNode() {
      return fe.domNode;
    },
    set domNode(X) {
      fe.domNode = X;
    },
    get clientWidth() {
      return fe.width;
    },
    set clientWidth(X) {
      fe.width = X;
    },
    get clientHeight() {
      return fe.height;
    },
    set clientHeight(X) {
      fe.height = X;
    },
    children: (X, We) => {
      var Oe = ym(), Le = ie(Oe);
      ld(Le, {
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
        set store(ut) {
          fe = ut;
        }
      });
      var Ve = H(Le, 2);
      ju(Ve, {
        get panOnScrollMode() {
          return Z();
        },
        get preventScrolling() {
          return U();
        },
        get zoomOnScroll() {
          return L();
        },
        get zoomOnDoubleClick() {
          return W();
        },
        get zoomOnPinch() {
          return K();
        },
        get panOnScroll() {
          return q();
        },
        get panOnScrollSpeed() {
          return j();
        },
        get panOnDrag() {
          return F();
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
          return m();
        },
        get onmoveend() {
          return g();
        },
        get oninit() {
          return y();
        },
        get store() {
          return fe;
        },
        set store(ut) {
          fe = ut;
        },
        children: (ut, Xt) => {
          qu(ut, {
            get onpaneclick() {
              return O();
            },
            get onpanecontextmenu() {
              return M();
            },
            get onselectionstart() {
              return Y();
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
              return J();
            },
            get store() {
              return fe;
            },
            set store(ce) {
              fe = ce;
            },
            children: (ce, $e) => {
              var je = mm(), Ie = ie(je);
              Gu(Ie, {
                get store() {
                  return fe;
                },
                set store(wt) {
                  fe = wt;
                },
                children: (wt, Et) => {
                  var an = pm(), dt = H(ie(an), 2);
                  sd(dt, {
                    get onedgeclick() {
                      return S();
                    },
                    get onedgecontextmenu() {
                      return T();
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
                    set store(rr) {
                      fe = rr;
                    }
                  });
                  var ft = H(dt, 4);
                  cd(ft, {
                    get type() {
                      return we();
                    },
                    get LineComponent() {
                      return G();
                    },
                    get containerStyle() {
                      return ee();
                    },
                    get style() {
                      return ne();
                    },
                    get store() {
                      return fe;
                    },
                    set store(rr) {
                      fe = rr;
                    }
                  });
                  var ln = H(ft, 2);
                  nd(ln, {
                    get nodeClickDistance() {
                      return h();
                    },
                    get onnodeclick() {
                      return w();
                    },
                    get onnodecontextmenu() {
                      return _();
                    },
                    get onnodepointerenter() {
                      return P();
                    },
                    get onnodepointermove() {
                      return $();
                    },
                    get onnodepointerleave() {
                      return A();
                    },
                    get onnodedrag() {
                      return k();
                    },
                    get onnodedragstart() {
                      return E();
                    },
                    get onnodedragstop() {
                      return b();
                    },
                    get store() {
                      return fe;
                    },
                    set store(rr) {
                      fe = rr;
                    }
                  });
                  var df = H(ln, 2);
                  ad(df, {
                    get onselectionclick() {
                      return I();
                    },
                    get onselectioncontextmenu() {
                      return V();
                    },
                    get onnodedrag() {
                      return k();
                    },
                    get onnodedragstart() {
                      return E();
                    },
                    get onnodedragstop() {
                      return b();
                    },
                    get store() {
                      return fe;
                    },
                    set store(rr) {
                      fe = rr;
                    }
                  }), pe(2), D(wt, an);
                },
                $$slots: { default: !0 }
              });
              var nt = H(Ie, 2);
              {
                let wt = /* @__PURE__ */ N(() => !!(fe.selectionRect && fe.selectionRectMode === "user")), Et = /* @__PURE__ */ N(() => fe.selectionRect?.width), an = /* @__PURE__ */ N(() => fe.selectionRect?.height), dt = /* @__PURE__ */ N(() => fe.selectionRect?.x), ft = /* @__PURE__ */ N(() => fe.selectionRect?.y);
                ga(nt, {
                  get isVisible() {
                    return u(wt);
                  },
                  get width() {
                    return u(Et);
                  },
                  get height() {
                    return u(an);
                  },
                  get x() {
                    return u(dt);
                  },
                  get y() {
                    return u(ft);
                  }
                });
              }
              D(ce, je);
            },
            $$slots: { default: !0 }
          });
        },
        $$slots: { default: !0 }
      });
      var yt = H(Ve, 2);
      ud(yt, {
        get proOptions() {
          return o();
        },
        get position() {
          return oe();
        }
      });
      var Qe = H(yt, 2);
      Ju(Qe, {
        get store() {
          return fe;
        }
      });
      var kt = H(Qe, 2);
      qe(kt, () => le() ?? pt), D(X, Oe);
    },
    $$slots: { default: !0 }
  }), de(Se);
}
ae(
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
function hd(e, t) {
  ue(t, !0);
  let n = p(t, "children", 7), r = /* @__PURE__ */ Ne(Xu({ props: {}, nodes: [], edges: [] }));
  Tr(vi, {
    provider: !0,
    getStore() {
      return u(r);
    },
    setStore: (a) => {
      Q(r, a);
    }
  }), bo(() => {
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
  return qe(s, () => n() ?? pt), D(e, i), de(o);
}
ae(hd, { children: {} }, [], [], !0);
var wm = /* @__PURE__ */ te("<button><!></button>");
function Ur(e, t) {
  ue(t, !0);
  let n = p(t, "class", 7), r = p(t, "bgColor", 7), o = p(t, "bgColorHover", 7), i = p(t, "color", 7), s = p(t, "colorHover", 7), a = p(t, "borderColor", 7), l = p(t, "onclick", 7), c = p(t, "children", 7), d = /* @__PURE__ */ Be(t, [
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
      n(m), v();
    },
    get bgColor() {
      return r();
    },
    set bgColor(m) {
      r(m), v();
    },
    get bgColorHover() {
      return o();
    },
    set bgColorHover(m) {
      o(m), v();
    },
    get color() {
      return i();
    },
    set color(m) {
      i(m), v();
    },
    get colorHover() {
      return s();
    },
    set colorHover(m) {
      s(m), v();
    },
    get borderColor() {
      return a();
    },
    set borderColor(m) {
      a(m), v();
    },
    get onclick() {
      return l();
    },
    set onclick(m) {
      l(m), v();
    },
    get children() {
      return c();
    },
    set children(m) {
      c(m), v();
    }
  }, f = wm();
  tt(f, () => ({
    type: "button",
    onclick: l(),
    class: ["svelte-flow__controls-button", n()],
    ...d,
    [dn]: {
      "--xy-controls-button-background-color-props": r(),
      "--xy-controls-button-background-color-hover-props": o(),
      "--xy-controls-button-color-props": i(),
      "--xy-controls-button-color-hover-props": s(),
      "--xy-controls-button-border-color-props": a()
    }
  }));
  var g = B(f);
  return qe(g, () => c() ?? pt), R(f), D(e, f), de(h);
}
ae(
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
var _m = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function gd(e) {
  var t = _m();
  D(e, t);
}
ae(gd, {}, [], [], !0);
var xm = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function vd(e) {
  var t = xm();
  D(e, t);
}
ae(vd, {}, [], [], !0);
var bm = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function pd(e) {
  var t = bm();
  D(e, t);
}
ae(pd, {}, [], [], !0);
var Cm = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function md(e) {
  var t = Cm();
  D(e, t);
}
ae(md, {}, [], [], !0);
var km = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function yd(e) {
  var t = km();
  D(e, t);
}
ae(yd, {}, [], [], !0);
var Em = /* @__PURE__ */ te("<!> <!>", 1), Sm = /* @__PURE__ */ te("<!> <!> <!> <!> <!> <!>", 1);
function wd(e, t) {
  ue(t, !0);
  let n = p(t, "position", 7, "bottom-left"), r = p(t, "orientation", 7, "vertical"), o = p(t, "showZoom", 7, !0), i = p(t, "showFitView", 7, !0), s = p(t, "showLock", 7, !0), a = p(t, "style", 7), l = p(t, "class", 7), c = p(t, "buttonBgColor", 7), d = p(t, "buttonBgColorHover", 7), h = p(t, "buttonColor", 7), f = p(t, "buttonColorHover", 7), g = p(t, "buttonBorderColor", 7), m = p(t, "fitViewOptions", 7), y = p(t, "children", 7), w = p(t, "before", 7), _ = p(t, "after", 7), k = /* @__PURE__ */ Be(t, [
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
  ]), E = /* @__PURE__ */ N(on);
  const b = {
    bgColor: c(),
    bgColorHover: d(),
    color: h(),
    colorHover: f(),
    borderColor: g()
  };
  let P = /* @__PURE__ */ N(() => u(E).nodesDraggable || u(E).nodesConnectable || u(E).elementsSelectable), $ = /* @__PURE__ */ N(() => u(E).viewport.zoom <= u(E).minZoom), A = /* @__PURE__ */ N(() => u(E).viewport.zoom >= u(E).maxZoom), I = /* @__PURE__ */ N(() => u(E).ariaLabelConfig), V = /* @__PURE__ */ N(() => r() === "horizontal" ? "horizontal" : "vertical");
  const Y = () => {
    u(E).zoomIn();
  }, z = () => {
    u(E).zoomOut();
  }, S = () => {
    u(E).fitView(m());
  }, T = () => {
    let C = !u(P);
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
      return h();
    },
    set buttonColor(C) {
      h(C), v();
    },
    get buttonColorHover() {
      return f();
    },
    set buttonColorHover(C) {
      f(C), v();
    },
    get buttonBorderColor() {
      return g();
    },
    set buttonBorderColor(C) {
      g(C), v();
    },
    get fitViewOptions() {
      return m();
    },
    set fitViewOptions(C) {
      m(C), v();
    },
    get children() {
      return y();
    },
    set children(C) {
      y(C), v();
    },
    get before() {
      return w();
    },
    set before(C) {
      w(C), v();
    },
    get after() {
      return _();
    },
    set after(C) {
      _(C), v();
    }
  };
  {
    let C = /* @__PURE__ */ N(() => [
      "svelte-flow__controls",
      u(V),
      l()
    ]);
    To(e, Ke(
      {
        get class() {
          return u(C);
        },
        get position() {
          return n();
        },
        "data-testid": "svelte-flow__controls",
        get "aria-label"() {
          return u(I)["controls.ariaLabel"];
        },
        get style() {
          return a();
        }
      },
      () => k,
      {
        children: (O, M) => {
          var Z = Sm(), U = ie(Z);
          {
            var L = (oe) => {
              var le = Ee(), re = ie(le);
              qe(re, w), D(oe, le);
            };
            se(U, (oe) => {
              w() && oe(L);
            });
          }
          var W = H(U, 2);
          {
            var K = (oe) => {
              var le = Em(), re = ie(le);
              Ur(re, Ke(
                {
                  onclick: Y,
                  class: "svelte-flow__controls-zoomin",
                  get title() {
                    return u(I)["controls.zoomIn.ariaLabel"];
                  },
                  get "aria-label"() {
                    return u(I)["controls.zoomIn.ariaLabel"];
                  },
                  get disabled() {
                    return u(A);
                  }
                },
                () => b,
                {
                  children: (ge, _e) => {
                    gd(ge);
                  },
                  $$slots: { default: !0 }
                }
              ));
              var he = H(re, 2);
              Ur(he, Ke(
                {
                  onclick: z,
                  class: "svelte-flow__controls-zoomout",
                  get title() {
                    return u(I)["controls.zoomOut.ariaLabel"];
                  },
                  get "aria-label"() {
                    return u(I)["controls.zoomOut.ariaLabel"];
                  },
                  get disabled() {
                    return u($);
                  }
                },
                () => b,
                {
                  children: (ge, _e) => {
                    vd(ge);
                  },
                  $$slots: { default: !0 }
                }
              )), D(oe, le);
            };
            se(W, (oe) => {
              o() && oe(K);
            });
          }
          var q = H(W, 2);
          {
            var j = (oe) => {
              Ur(oe, Ke(
                {
                  class: "svelte-flow__controls-fitview",
                  onclick: S,
                  get title() {
                    return u(I)["controls.fitView.ariaLabel"];
                  },
                  get "aria-label"() {
                    return u(I)["controls.fitView.ariaLabel"];
                  }
                },
                () => b,
                {
                  children: (le, re) => {
                    pd(le);
                  },
                  $$slots: { default: !0 }
                }
              ));
            };
            se(q, (oe) => {
              i() && oe(j);
            });
          }
          var F = H(q, 2);
          {
            var J = (oe) => {
              Ur(oe, Ke(
                {
                  class: "svelte-flow__controls-interactive",
                  onclick: T,
                  get title() {
                    return u(I)["controls.interactive.ariaLabel"];
                  },
                  get "aria-label"() {
                    return u(I)["controls.interactive.ariaLabel"];
                  }
                },
                () => b,
                {
                  children: (le, re) => {
                    var he = Ee(), ge = ie(he);
                    {
                      var _e = (me) => {
                        yd(me);
                      }, fe = (me) => {
                        md(me);
                      };
                      se(ge, (me) => {
                        u(P) ? me(_e) : me(fe, !1);
                      });
                    }
                    D(le, he);
                  },
                  $$slots: { default: !0 }
                }
              ));
            };
            se(F, (oe) => {
              s() && oe(J);
            });
          }
          var G = H(F, 2);
          {
            var ne = (oe) => {
              var le = Ee(), re = ie(le);
              qe(re, y), D(oe, le);
            };
            se(G, (oe) => {
              y() && oe(ne);
            });
          }
          var ee = H(G, 2);
          {
            var we = (oe) => {
              var le = Ee(), re = ie(le);
              qe(re, _), D(oe, le);
            };
            se(ee, (oe) => {
              _() && oe(we);
            });
          }
          D(O, Z);
        },
        $$slots: { default: !0 }
      }
    ));
  }
  return de(x);
}
ae(
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
var Nm = /* @__PURE__ */ ve("<circle></circle>");
function _d(e, t) {
  ue(t, !0);
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
  }, i = Nm();
  return Ce(() => {
    be(i, "cx", n()), be(i, "cy", n()), be(i, "r", n()), At(i, 0, Ln(["svelte-flow__background-pattern", "dots", r()]));
  }), D(e, i), de(o);
}
ae(_d, { radius: {}, class: {} }, [], [], !0);
var Pm = /* @__PURE__ */ ve("<path></path>");
function xd(e, t) {
  ue(t, !0);
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
  }, a = Pm();
  return Ce(() => {
    be(a, "stroke-width", n()), be(a, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), At(a, 0, Ln(["svelte-flow__background-pattern", o(), i()]));
  }), D(e, a), de(s);
}
ae(xd, { lineWidth: {}, dimensions: {}, variant: {}, class: {} }, [], [], !0);
const $m = {
  [kn.Dots]: 1,
  [kn.Lines]: 1,
  [kn.Cross]: 6
};
var Tm = /* @__PURE__ */ ve('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
function bd(e, t) {
  ue(t, !0);
  let n = p(t, "id", 7), r = p(t, "variant", 23, () => kn.Dots), o = p(t, "gap", 7, 20), i = p(t, "size", 7), s = p(t, "lineWidth", 7, 1), a = p(t, "bgColor", 7), l = p(t, "patternColor", 7), c = p(t, "patternClass", 7), d = p(t, "class", 7), h = /* @__PURE__ */ N(on), f = /* @__PURE__ */ N(() => r() === kn.Dots), g = /* @__PURE__ */ N(() => r() === kn.Cross), m = /* @__PURE__ */ N(() => Array.isArray(o()) ? o() : [o(), o()]), y = /* @__PURE__ */ N(() => `background-pattern-${u(h).flowId}-${n() ?? ""}`), w = /* @__PURE__ */ N(() => [
    u(m)[0] * u(h).viewport.zoom || 1,
    u(m)[1] * u(h).viewport.zoom || 1
  ]), _ = /* @__PURE__ */ N(() => (i() ?? $m[r()]) * u(h).viewport.zoom), k = /* @__PURE__ */ N(() => u(g) ? [u(_), u(_)] : u(w)), E = /* @__PURE__ */ N(() => u(f) ? [u(_) / 2, u(_) / 2] : [
    u(k)[0] / 2,
    u(k)[1] / 2
  ]);
  var b = {
    get id() {
      return n();
    },
    set id(S) {
      n(S), v();
    },
    get variant() {
      return r();
    },
    set variant(S = kn.Dots) {
      r(S), v();
    },
    get gap() {
      return o();
    },
    set gap(S = 20) {
      o(S), v();
    },
    get size() {
      return i();
    },
    set size(S) {
      i(S), v();
    },
    get lineWidth() {
      return s();
    },
    set lineWidth(S = 1) {
      s(S), v();
    },
    get bgColor() {
      return a();
    },
    set bgColor(S) {
      a(S), v();
    },
    get patternColor() {
      return l();
    },
    set patternColor(S) {
      l(S), v();
    },
    get patternClass() {
      return c();
    },
    set patternClass(S) {
      c(S), v();
    },
    get class() {
      return d();
    },
    set class(S) {
      d(S), v();
    }
  }, P = Tm();
  let $;
  var A = B(P), I = B(A);
  {
    var V = (S) => {
      {
        let T = /* @__PURE__ */ N(() => u(_) / 2);
        _d(S, {
          get radius() {
            return u(T);
          },
          get class() {
            return c();
          }
        });
      }
    }, Y = (S) => {
      xd(S, {
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
    se(I, (S) => {
      u(f) ? S(V) : S(Y, !1);
    });
  }
  R(A);
  var z = H(A);
  return R(P), Ce(() => {
    At(P, 0, Ln([
      "svelte-flow__background",
      "svelte-flow__container",
      d()
    ])), $ = ct(P, "", $, {
      "--xy-background-color-props": a(),
      "--xy-background-pattern-color-props": l()
    }), be(A, "id", u(y)), be(A, "x", u(h).viewport.x % u(w)[0]), be(A, "y", u(h).viewport.y % u(w)[1]), be(A, "width", u(w)[0]), be(A, "height", u(w)[1]), be(A, "patternTransform", `translate(-${u(E)[0]},-${u(E)[1]})`), be(z, "fill", `url(#${u(y)})`);
  }), D(e, P), de(b);
}
ae(
  bd,
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
var Dm = /* @__PURE__ */ ve("<rect></rect>");
function Cd(e, t) {
  ue(t, !0);
  let n = p(t, "id", 7), r = p(t, "x", 7), o = p(t, "y", 7), i = p(t, "width", 7), s = p(t, "height", 7), a = p(t, "borderRadius", 7, 5), l = p(t, "color", 7), c = p(t, "shapeRendering", 7), d = p(t, "strokeColor", 7), h = p(t, "strokeWidth", 7, 2), f = p(t, "selected", 7), g = p(t, "class", 7), m = p(t, "nodeComponent", 7);
  var y = {
    get id() {
      return n();
    },
    set id(b) {
      n(b), v();
    },
    get x() {
      return r();
    },
    set x(b) {
      r(b), v();
    },
    get y() {
      return o();
    },
    set y(b) {
      o(b), v();
    },
    get width() {
      return i();
    },
    set width(b) {
      i(b), v();
    },
    get height() {
      return s();
    },
    set height(b) {
      s(b), v();
    },
    get borderRadius() {
      return a();
    },
    set borderRadius(b = 5) {
      a(b), v();
    },
    get color() {
      return l();
    },
    set color(b) {
      l(b), v();
    },
    get shapeRendering() {
      return c();
    },
    set shapeRendering(b) {
      c(b), v();
    },
    get strokeColor() {
      return d();
    },
    set strokeColor(b) {
      d(b), v();
    },
    get strokeWidth() {
      return h();
    },
    set strokeWidth(b = 2) {
      h(b), v();
    },
    get selected() {
      return f();
    },
    set selected(b) {
      f(b), v();
    },
    get class() {
      return g();
    },
    set class(b) {
      g(b), v();
    },
    get nodeComponent() {
      return m();
    },
    set nodeComponent(b) {
      m(b), v();
    }
  }, w = Ee(), _ = ie(w);
  {
    var k = (b) => {
      const P = /* @__PURE__ */ N(m);
      var $ = Ee(), A = ie($);
      $i(A, () => u(P), (I, V) => {
        V(I, {
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
            return h();
          },
          get selected() {
            return f();
          }
        });
      }), D(b, $);
    }, E = (b) => {
      var P = Dm();
      let $, A;
      Ce(() => {
        $ = At(P, 0, Ln(["svelte-flow__minimap-node", g()]), null, $, { selected: f() }), be(P, "x", r()), be(P, "y", o()), be(P, "rx", a()), be(P, "ry", a()), be(P, "width", i()), be(P, "height", s()), be(P, "shape-rendering", c()), A = ct(P, "", A, {
          fill: l(),
          stroke: d(),
          "stroke-width": h()
        });
      }), D(b, P);
    };
    se(_, (b) => {
      m() ? b(k) : b(E, !1);
    });
  }
  return D(e, w), de(y);
}
ae(
  Cd,
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
function Am(e, t) {
  const n = y0({
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
const ns = (e) => e instanceof Function ? e : () => e;
var Om = /* @__PURE__ */ ve("<title> </title>"), Mm = /* @__PURE__ */ ve('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>'), Hm = /* @__PURE__ */ te('<svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>', 1);
function kd(e, t) {
  ue(t, !0);
  let n = p(t, "position", 7, "bottom-right"), r = p(t, "ariaLabel", 7), o = p(t, "nodeStrokeColor", 7, "transparent"), i = p(t, "nodeColor", 7), s = p(t, "nodeClass", 7, ""), a = p(t, "nodeBorderRadius", 7, 5), l = p(t, "nodeStrokeWidth", 7, 2), c = p(t, "nodeComponent", 7), d = p(t, "bgColor", 7), h = p(t, "maskColor", 7), f = p(t, "maskStrokeColor", 7), g = p(t, "maskStrokeWidth", 7), m = p(t, "width", 7, 200), y = p(t, "height", 7, 150), w = p(t, "pannable", 7, !0), _ = p(t, "zoomable", 7, !0), k = p(t, "inversePan", 7), E = p(t, "zoomStep", 7), b = p(t, "class", 7), P = /* @__PURE__ */ Be(t, [
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
  ]), $ = /* @__PURE__ */ N(on), A = /* @__PURE__ */ N(() => u($).ariaLabelConfig);
  const I = i() === void 0 ? void 0 : ns(i()), V = ns(o()), Y = ns(s()), z = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  );
  let S = /* @__PURE__ */ N(() => `svelte-flow__minimap-desc-${u($).flowId}`), T = /* @__PURE__ */ N(() => ({
    x: -u($).viewport.x / u($).viewport.zoom,
    y: -u($).viewport.y / u($).viewport.zoom,
    width: u($).width / u($).viewport.zoom,
    height: u($).height / u($).viewport.zoom
  })), x = /* @__PURE__ */ N(() => yu(So(u($).nodeLookup, { filter: (ee) => !ee.hidden }), u(T))), C = /* @__PURE__ */ N(() => u(x).width / m()), O = /* @__PURE__ */ N(() => u(x).height / y()), M = /* @__PURE__ */ N(() => Math.max(u(C), u(O))), Z = /* @__PURE__ */ N(() => u(M) * m()), U = /* @__PURE__ */ N(() => u(M) * y()), L = /* @__PURE__ */ N(() => 5 * u(M)), W = /* @__PURE__ */ N(() => u(x).x - (u(Z) - u(x).width) / 2 - u(L)), K = /* @__PURE__ */ N(() => u(x).y - (u(U) - u(x).height) / 2 - u(L)), q = /* @__PURE__ */ N(() => u(Z) + u(L) * 2), j = /* @__PURE__ */ N(() => u(U) + u(L) * 2);
  const F = () => u(M);
  var J = {
    get position() {
      return n();
    },
    set position(ee = "bottom-right") {
      n(ee), v();
    },
    get ariaLabel() {
      return r();
    },
    set ariaLabel(ee) {
      r(ee), v();
    },
    get nodeStrokeColor() {
      return o();
    },
    set nodeStrokeColor(ee = "transparent") {
      o(ee), v();
    },
    get nodeColor() {
      return i();
    },
    set nodeColor(ee) {
      i(ee), v();
    },
    get nodeClass() {
      return s();
    },
    set nodeClass(ee = "") {
      s(ee), v();
    },
    get nodeBorderRadius() {
      return a();
    },
    set nodeBorderRadius(ee = 5) {
      a(ee), v();
    },
    get nodeStrokeWidth() {
      return l();
    },
    set nodeStrokeWidth(ee = 2) {
      l(ee), v();
    },
    get nodeComponent() {
      return c();
    },
    set nodeComponent(ee) {
      c(ee), v();
    },
    get bgColor() {
      return d();
    },
    set bgColor(ee) {
      d(ee), v();
    },
    get maskColor() {
      return h();
    },
    set maskColor(ee) {
      h(ee), v();
    },
    get maskStrokeColor() {
      return f();
    },
    set maskStrokeColor(ee) {
      f(ee), v();
    },
    get maskStrokeWidth() {
      return g();
    },
    set maskStrokeWidth(ee) {
      g(ee), v();
    },
    get width() {
      return m();
    },
    set width(ee = 200) {
      m(ee), v();
    },
    get height() {
      return y();
    },
    set height(ee = 150) {
      y(ee), v();
    },
    get pannable() {
      return w();
    },
    set pannable(ee = !0) {
      w(ee), v();
    },
    get zoomable() {
      return _();
    },
    set zoomable(ee = !0) {
      _(ee), v();
    },
    get inversePan() {
      return k();
    },
    set inversePan(ee) {
      k(ee), v();
    },
    get zoomStep() {
      return E();
    },
    set zoomStep(ee) {
      E(ee), v();
    },
    get class() {
      return b();
    },
    set class(ee) {
      b(ee), v();
    }
  }, G = Hm(), ne = ie(G);
  {
    let ee = /* @__PURE__ */ N(() => ["svelte-flow__minimap", b()]);
    Ph(ne, () => ({ "--xy-minimap-background-color-props": d() })), To(ne.lastChild, Ke(
      {
        get position() {
          return n();
        },
        get class() {
          return u(ee);
        },
        "data-testid": "svelte-flow__minimap"
      },
      () => P,
      {
        children: (we, oe) => {
          var le = Ee(), re = ie(le);
          {
            var he = (ge) => {
              var _e = Mm();
              let fe;
              var me = B(_e);
              {
                var Se = (Oe) => {
                  var Le = Om(), Ve = B(Le, !0);
                  R(Le), Ce(() => {
                    be(Le, "id", u(S)), Fe(Ve, r() ?? u(A)["minimap.ariaLabel"]);
                  }), D(Oe, Le);
                };
                se(me, (Oe) => {
                  (r() ?? u(A)["minimap.ariaLabel"]) && Oe(Se);
                });
              }
              var X = H(me);
              mt(X, 17, () => u($).nodes, (Oe) => Oe.id, (Oe, Le) => {
                const Ve = /* @__PURE__ */ N(() => u($).nodeLookup.get(u(Le).id));
                var yt = Ee(), Qe = ie(yt);
                {
                  var kt = (ut) => {
                    const Xt = /* @__PURE__ */ N(() => tr(u(Ve)));
                    {
                      let ce = /* @__PURE__ */ N(() => I?.(u(Ve))), $e = /* @__PURE__ */ N(() => V(u(Ve))), je = /* @__PURE__ */ N(() => Y(u(Ve)));
                      Cd(ut, Ke(
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
                        () => u(Xt),
                        {
                          get selected() {
                            return u(Ve).selected;
                          },
                          get nodeComponent() {
                            return c();
                          },
                          get color() {
                            return u(ce);
                          },
                          get borderRadius() {
                            return a();
                          },
                          get strokeColor() {
                            return u($e);
                          },
                          get strokeWidth() {
                            return l();
                          },
                          get shapeRendering() {
                            return z;
                          },
                          get class() {
                            return u(je);
                          }
                        }
                      ));
                    }
                  };
                  se(Qe, (ut) => {
                    u(Ve) && wu(u(Ve)) && !u(Ve).hidden && ut(kt);
                  });
                }
                D(Oe, yt);
              });
              var We = H(X);
              R(_e), ht(_e, (Oe, Le) => Am?.(Oe, Le), () => ({
                store: u($),
                panZoom: u($).panZoom,
                getViewScale: F,
                translateExtent: u($).translateExtent,
                width: u($).width,
                height: u($).height,
                inversePan: k(),
                zoomStep: E(),
                pannable: w(),
                zoomable: _()
              })), Ce(() => {
                be(_e, "width", m()), be(_e, "height", y()), be(_e, "viewBox", `${u(W) ?? ""} ${u(K) ?? ""} ${u(q) ?? ""} ${u(j) ?? ""}`), be(_e, "aria-labelledby", u(S)), fe = ct(_e, "", fe, {
                  "--xy-minimap-mask-background-color-props": h(),
                  "--xy-minimap-mask-stroke-color-props": f(),
                  "--xy-minimap-mask-stroke-width-props": g() ? g() * u(M) : void 0
                }), be(We, "d", `M${u(W) - u(L)},${u(K) - u(L)}h${u(q) + u(L) * 2}v${u(j) + u(L) * 2}h${-u(q) - u(L) * 2}z
      M${u(T).x ?? ""},${u(T).y ?? ""}h${u(T).width ?? ""}v${u(T).height ?? ""}h${-u(T).width}z`);
              }), D(ge, _e);
            };
            se(re, (ge) => {
              u($).panZoom && ge(he);
            });
          }
          D(we, le);
        },
        $$slots: { default: !0 }
      }
    )), R(ne);
  }
  return D(e, G), de(J);
}
ae(
  kd,
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
var Lm = /* @__PURE__ */ te("<div><!></div>");
function Ed(e, t) {
  ue(t, !0);
  let n = p(t, "nodeId", 7), r = p(t, "position", 23, () => ye.Top), o = p(t, "align", 7, "center"), i = p(t, "offset", 7, 10), s = p(t, "isVisible", 7), a = p(t, "children", 7), l = /* @__PURE__ */ Be(t, [
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
  const c = on(), { getNodesBounds: d } = ot(), h = Xn("svelteflow__node_id");
  let f = /* @__PURE__ */ N(() => (c.nodes, (Array.isArray(n()) ? n() : [n() ?? h]).reduce(
    ($, A) => {
      const I = c.nodeLookup.get(A);
      return I && $.push(I), $;
    },
    []
  ))), g = /* @__PURE__ */ N(() => {
    const P = d(u(f));
    return P ? Up(P, c.viewport, r(), i(), o()) : "";
  }), m = /* @__PURE__ */ N(() => u(f).length === 0 ? 1 : Math.max(...u(f).map((P) => (P.internals.z || 5) + 1))), y = /* @__PURE__ */ N(() => c.nodes.filter((P) => P.selected).length), w = /* @__PURE__ */ N(() => typeof s() == "boolean" ? s() : u(f).length === 1 && u(f)[0].selected && u(y) === 1);
  var _ = {
    get nodeId() {
      return n();
    },
    set nodeId(P) {
      n(P), v();
    },
    get position() {
      return r();
    },
    set position(P = ye.Top) {
      r(P), v();
    },
    get align() {
      return o();
    },
    set align(P = "center") {
      o(P), v();
    },
    get offset() {
      return i();
    },
    set offset(P = 10) {
      i(P), v();
    },
    get isVisible() {
      return s();
    },
    set isVisible(P) {
      s(P), v();
    },
    get children() {
      return a();
    },
    set children(P) {
      a(P), v();
    }
  }, k = Ee(), E = ie(k);
  {
    var b = (P) => {
      var $ = Lm();
      tt(
        $,
        (I, V) => ({
          class: "svelte-flow__node-toolbar",
          "data-id": I,
          ...l,
          [dn]: V
        }),
        [
          () => u(f).reduce((I, V) => `${I}${V.id} `, "").trim(),
          () => ({
            display: Ru().value ? "none" : void 0,
            position: "absolute",
            transform: u(g),
            "z-index": u(m)
          })
        ]
      );
      var A = B($);
      qe(A, () => a() ?? pt), R($), ht($, (I, V) => zu?.(I, V), () => "root"), D(P, $);
    };
    se(E, (P) => {
      c.domNode && u(w) && u(f) && P(b);
    });
  }
  return D(e, k), de(_);
}
ae(
  Ed,
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
function Vn(e) {
  const t = /* @__PURE__ */ N(on), n = /* @__PURE__ */ N(() => u(t).nodes), r = /* @__PURE__ */ N(() => u(t).nodeLookup);
  let o = [], i = !0;
  const s = /* @__PURE__ */ N(() => {
    u(n);
    const a = [], l = Array.isArray(e), c = l ? e : [e];
    for (const d of c) {
      const h = u(r).get(d)?.internals.userNode;
      h && a.push({ id: h.id, type: h.type, data: h.data });
    }
    return (!c0(a, o) || i) && (o = a, i = !1), l ? o : o[0] ?? null;
  });
  return {
    get current() {
      return u(s);
    }
  };
}
const xl = "tinyflow-component", Vm = [
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
], Im = [
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
], va = [
  { label: "文字", value: "text" },
  { label: "图片", value: "image" },
  { label: "视频", value: "video" },
  { label: "音频", value: "audio" },
  { label: "文件", value: "file" },
  { label: "其他", value: "other" }
], zm = [
  { label: "单行输入框", value: "input" },
  { label: "多行输入框", value: "textarea" },
  { label: "下拉菜单", value: "select" },
  { label: "单选", value: "radio" },
  { label: "多选", value: "checkbox" }
], Rm = [
  { label: "单选", value: "radio" },
  { label: "多选", value: "checkbox" }
];
class D_ {
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
    const t = document.createElement(xl);
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
    const n = document.createElement(xl);
    n.style.display = "block", n.style.width = "100%", n.style.height = "100%", n.classList.add("tf-theme-light"), n.options = this.options, n.onInit = (r) => {
      this.svelteFlowInstance = r;
    }, this.destroy(), this.rootEl.appendChild(n);
  }
  destroy() {
    for (; this.rootEl.firstChild; )
      this.rootEl.removeChild(this.rootEl.firstChild);
  }
}
const Bm = () => {
  let e = /* @__PURE__ */ Ne([]), t = /* @__PURE__ */ Ne([]), n = /* @__PURE__ */ Ne({ x: 250, y: 100, zoom: 1 });
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
}, Me = Bm();
var Fm = /* @__PURE__ */ te("<button><!></button>");
function De(e, t) {
  ue(t, !0);
  const n = p(t, "children", 7), r = p(t, "primary", 7), o = /* @__PURE__ */ Be(t, [
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
      n(l), v();
    },
    get primary() {
      return r();
    },
    set primary(l) {
      r(l), v();
    }
  }, s = Fm();
  tt(s, () => ({
    type: "button",
    ...o,
    class: `tf-btn ${r() ? "tf-btn-primary" : ""} nopan nodrag ${t.class ?? ""}`
  }));
  var a = B(s);
  return qe(a, () => n() ?? pt), R(s), D(e, s), de(i);
}
ae(De, { children: {}, primary: {} }, [], [], !0);
var Km = /* @__PURE__ */ te("<input/>");
function Sd(e, t) {
  ue(t, !0);
  const n = /* @__PURE__ */ Be(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = Km();
  tt(
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
  ), D(e, r), de();
}
ae(Sd, {}, [], [], !0);
var Zm = /* @__PURE__ */ te('<div><input type="hidden"/> <!> <!></div>');
const Ym = {
  hash: "svelte-1o3a23c",
  code: ".tf-chosen.svelte-1o3a23c {display:flex;flex-direction:row;align-items:center;justify-content:space-between;gap:5px;}"
};
function Nd(e, t) {
  ue(t, !0), ze(e, Ym);
  const n = p(t, "placeholder", 7), r = p(t, "label", 7), o = p(t, "value", 7), i = p(t, "buttonText", 7, "选择..."), s = p(t, "onChosen", 7), a = /* @__PURE__ */ Be(t, [
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
  }, c = Zm();
  tt(
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
  var d = B(c);
  Wn(d);
  var h = H(d, 2);
  Ue(h, {
    get value() {
      return r();
    },
    get placeholder() {
      return n();
    },
    style: "flex-grow: 1;",
    disabled: !0
  });
  var f = H(h, 2);
  return De(f, {
    onclick: (g) => {
      s()?.(o(), r(), g);
    },
    style: "padding: 3px",
    children: (g, m) => {
      pe();
      var y = ke();
      Ce(() => Fe(y, i())), D(g, y);
    },
    $$slots: { default: !0 }
  }), R(c), Ce(() => Zo(d, o())), D(e, c), de(l);
}
ae(
  Nd,
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
var Wm = /* @__PURE__ */ te("<input/>");
function Ue(e, t) {
  ue(t, !0);
  const n = /* @__PURE__ */ Be(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = Wm();
  tt(
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
  ), D(e, r), de();
}
ae(Ue, {}, [], [], !0);
var Xm = /* @__PURE__ */ te("<textarea></textarea>");
function Re(e, t) {
  ue(t, !0);
  const n = p(t, "value", 7), r = p(t, "height", 7), o = p(t, "autoHeight", 7, !0), i = p(t, "maxHeight", 7), s = p(t, "onHeightChange", 7), a = /* @__PURE__ */ Be(t, [
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
      let y = l.scrollHeight;
      if (!c) {
        const w = t.rows || 1, _ = getComputedStyle(l);
        c = parseFloat(_.fontSize) * 1.2 * w + parseFloat(_.paddingTop) + parseFloat(_.paddingBottom) + parseFloat(_.borderTopWidth);
      }
      if (y < c && (y = c), i()) {
        const w = typeof i() == "number" ? `${i()}px` : i();
        y > parseInt(w) ? (l.style.height = w, l.style.overflowY = "auto") : l.style.height = `${y}px`;
      } else
        l.style.height = `${y}px`;
      s()?.(l.style.height);
    }
  }
  Xe(() => {
    d();
  });
  var h = {
    get value() {
      return n();
    },
    set value(y) {
      n(y), v();
    },
    get height() {
      return r();
    },
    set height(y) {
      r(y), v();
    },
    get autoHeight() {
      return o();
    },
    set autoHeight(y = !0) {
      o(y), v();
    },
    get maxHeight() {
      return i();
    },
    set maxHeight(y) {
      i(y), v();
    },
    get onHeightChange() {
      return s();
    },
    set onHeightChange(y) {
      s(y), v();
    }
  }, f = Xm();
  ih(f);
  var g = (y) => {
    d(), t.oninput?.(y);
  }, m = (y) => {
    d(), t.onchange?.(y);
  };
  return tt(f, () => ({
    spellcheck: "false",
    ...a,
    oninput: g,
    onchange: m,
    class: `tf-textarea nodrag nowheel ${t.class ?? ""}`,
    value: n() || ""
  })), Ot(f, (y) => l = y, () => l), D(e, f), de(h);
}
ae(
  Re,
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
var jm = /* @__PURE__ */ te('<div role="button"><!></div>'), qm = /* @__PURE__ */ te("<div></div>");
function Pd(e, t) {
  const n = La(t, ["children", "$$slots", "$$events", "$$legacy", "$$host"]), r = La(n, ["items", "onChange", "activeIndex"]);
  ue(t, !1);
  let o = p(t, "items", 28, () => []), i = p(t, "onChange", 12, () => {
  }), s = p(t, "activeIndex", 12, 0);
  function a(d, h) {
    s(h), i()?.(d, h);
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
  Lc();
  var c = qm();
  return tt(c, () => ({
    ...r,
    class: `tf-tabs ${Xs(r), st(() => r.class) ?? ""}`
  })), mt(c, 5, o, Ar, (d, h, f) => {
    var g = jm();
    be(g, "tabindex", f), g.__click = () => a(u(h), f), g.__keydown = (_) => {
      (_.key === "Enter" || _.key === " ") && (_.preventDefault(), a(u(h), f));
    };
    var m = B(g);
    {
      var y = (_) => {
        var k = ke();
        Ce(() => Fe(k, (u(h), st(() => u(h).label)))), D(_, k);
      }, w = (_) => {
        var k = Ee(), E = ie(k);
        qe(E, () => (u(h), st(() => u(h).label) ?? pt)), D(_, k);
      };
      se(m, (_) => {
        u(h), st(() => typeof u(h).label == "string") ? _(y) : _(w, !1);
      });
    }
    R(g), Ce(() => At(g, 1, `tf-tabs-item ${f === s() ? "active" : ""}`)), D(d, g);
  }), R(c), D(e, c), de(l);
}
er(["click", "keydown"]);
ae(Pd, { items: {}, onChange: {}, activeIndex: {} }, [], [], !0);
var Gm = /* @__PURE__ */ te('<span class="tf-collapse-item-title-icon"><!></span>'), Um = /* @__PURE__ */ te('<div class="tf-collapse-item-description"><!></div>'), Jm = /* @__PURE__ */ te('<div class="tf-collapse-item-content"><!></div>'), Qm = /* @__PURE__ */ te('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><!> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), e2 = /* @__PURE__ */ te("<div></div>");
const t2 = {
  hash: "svelte-ynwjxt",
  code: `
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-ynwjxt {transform:rotate(90deg);transition:transform 0.3s ease;}`
};
function $d(e, t) {
  ue(t, !0), ze(e, t2);
  let n = p(t, "items", 7), r = p(t, "onChange", 7), o = p(t, "activeKeys", 31, () => Kt([]));
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
  }, a = e2();
  return mt(a, 21, n, Ar, (l, c, d) => {
    var h = Qm(), f = B(h);
    be(f, "tabindex", d), f.__click = () => i(u(c)), f.__keydown = (P) => {
      (P.key === "Enter" || P.key === " ") && (P.preventDefault(), i(u(c)));
    };
    var g = B(f);
    {
      var m = (P) => {
        var $ = Gm(), A = B($);
        Bn(A, {
          get target() {
            return u(c).icon;
          }
        }), R($), D(P, $);
      };
      se(g, (P) => {
        u(c).icon && P(m);
      });
    }
    var y = H(g, 2);
    Bn(y, {
      get target() {
        return u(c).title;
      }
    });
    var w = H(y, 2);
    R(f);
    var _ = H(f, 2);
    {
      var k = (P) => {
        var $ = Um(), A = B($);
        Bn(A, {
          get target() {
            return u(c).description;
          }
        }), R($), D(P, $);
      };
      se(_, (P) => {
        u(c).description && P(k);
      });
    }
    var E = H(_, 2);
    {
      var b = (P) => {
        var $ = Jm(), A = B($);
        Bn(A, {
          get target() {
            return u(c).content;
          }
        }), R($), D(P, $);
      };
      se(E, (P) => {
        o().includes(u(c).key) && P(b);
      });
    }
    R(h), Ce((P) => At(w, 1, `tf-collapse-item-title-arrow ${P ?? ""}`, "svelte-ynwjxt"), [
      () => o().includes(u(c).key) ? "rotate-90" : ""
    ]), D(l, h);
  }), R(a), Ce(() => {
    ct(a, t.style), At(a, 1, `tf-collapse ${t.class ?? ""}`, "svelte-ynwjxt");
  }), D(e, a), de(s);
}
er(["click", "keydown"]);
ae($d, { items: {}, onChange: {}, activeKeys: {} }, [], [], !0);
function Bn(e, t) {
  ue(t, !0);
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
      qe(d, () => n() ?? pt), D(l, c);
    }, a = (l) => {
      var c = Ee(), d = ie(c);
      Gs(d, n), D(l, c);
    };
    se(i, (l) => {
      typeof n() == "function" ? l(s) : l(a, !1);
    });
  }
  return D(e, o), de(r);
}
ae(Bn, { target: {} }, [], [], !0);
var n2 = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), r2 = /* @__PURE__ */ te('<div class="tf-select-content-children"><!></div>'), o2 = /* @__PURE__ */ te('<button class="tf-select-content-item"><span><!></span> <!></button> <!>', 1), i2 = /* @__PURE__ */ te('<div class="tf-select-content nopan nodrag nowheel "><!></div>'), s2 = /* @__PURE__ */ te("<!> <!>", 1), a2 = /* @__PURE__ */ te('<div class="tf-select-input-placeholder"> </div>'), l2 = /* @__PURE__ */ te('<button><div class="tf-select-input-value"></div> <div class="tf-select-input-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></div></button>'), c2 = /* @__PURE__ */ te("<div><!></div>");
function at(e, t) {
  ue(t, !0);
  const n = (k, E = pt) => {
    var b = Ee(), P = ie(b);
    mt(P, 19, E, ($, A) => `${A}_${$.value}`, ($, A) => {
      var I = o2(), V = ie(I);
      V.__click = () => m(u(A));
      var Y = B(V), z = B(Y);
      {
        var S = (O) => {
          var M = n2();
          D(O, M);
        };
        se(z, (O) => {
          u(A).children && u(A).children.length > 0 && O(S);
        });
      }
      R(Y);
      var T = H(Y, 2);
      Bn(T, {
        get target() {
          return u(A).label;
        }
      }), R(V);
      var x = H(V, 2);
      {
        var C = (O) => {
          var M = r2(), Z = B(M);
          n(Z, () => u(A).children), R(M), D(O, M);
        };
        se(x, (O) => {
          u(A).children && u(A).children.length > 0 && (a() || c().includes(u(A).value)) && O(C);
        });
      }
      D($, I);
    }), D(k, b);
  };
  let r = p(t, "items", 7), o = p(t, "onSelect", 7), i = p(t, "value", 23, () => []), s = p(t, "defaultValue", 23, () => []), a = p(t, "expandAll", 7, !0), l = p(t, "multiple", 7, !1), c = p(t, "expandValue", 23, () => []), d = p(t, "placeholder", 7), h = /* @__PURE__ */ Be(t, [
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
  ]), f = /* @__PURE__ */ N(() => {
    const k = [], E = (b) => {
      for (let P of b)
        i().length > 0 ? i().includes(P.value) && k.push(P) : s().includes(P.value) && k.push(P), P.children && P.children.length > 0 && E(P.children);
    };
    return E(r()), k;
  }), g;
  function m(k) {
    g?.hide(), o()?.(k);
  }
  var y = {
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
  }, w = c2();
  tt(w, () => ({ ...h, class: `tf-select ${h.class ?? ""}` }));
  var _ = B(w);
  return Ot(
    nr(_, {
      floating: (E) => {
        var b = i2(), P = B(b);
        n(P, r), R(b), D(E, b);
      },
      children: (E, b) => {
        var P = l2();
        tt(P, () => ({ class: "tf-select-input nopan nodrag", ...h }));
        var $ = B(P);
        mt(
          $,
          23,
          () => u(f),
          (A, I) => `${I}_${A.value}`,
          (A, I, V) => {
            var Y = Ee(), z = ie(Y);
            {
              var S = (x) => {
                var C = Ee(), O = ie(C);
                {
                  var M = (Z) => {
                    Bn(Z, {
                      get target() {
                        return u(I).label;
                      }
                    });
                  };
                  se(O, (Z) => {
                    u(V) === 0 && Z(M);
                  });
                }
                D(x, C);
              }, T = (x) => {
                var C = s2(), O = ie(C);
                Bn(O, {
                  get target() {
                    return u(I).label;
                  }
                });
                var M = H(O, 2);
                {
                  var Z = (U) => {
                    var L = ke(",");
                    D(U, L);
                  };
                  se(M, (U) => {
                    u(V) < u(f).length - 1 && U(Z);
                  });
                }
                D(x, C);
              };
              se(z, (x) => {
                l() ? x(T, !1) : x(S);
              });
            }
            D(A, Y);
          },
          (A) => {
            var I = a2(), V = B(I, !0);
            R(I), Ce(() => Fe(V, d())), D(A, I);
          }
        ), R($), pe(2), R(P), D(E, P);
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (E) => g = E,
    () => g
  ), R(w), D(e, w), de(y);
}
er(["click"]);
ae(
  at,
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
const ho = Math.min, Nr = Math.max, pi = Math.round, vn = (e) => ({
  x: e,
  y: e
}), u2 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, d2 = {
  start: "end",
  end: "start"
};
function Ps(e, t, n) {
  return Nr(e, ho(t, n));
}
function Do(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function pr(e) {
  return e.split("-")[0];
}
function Ao(e) {
  return e.split("-")[1];
}
function Td(e) {
  return e === "x" ? "y" : "x";
}
function pa(e) {
  return e === "y" ? "height" : "width";
}
const f2 = /* @__PURE__ */ new Set(["top", "bottom"]);
function Fn(e) {
  return f2.has(pr(e)) ? "y" : "x";
}
function ma(e) {
  return Td(Fn(e));
}
function h2(e, t, n) {
  n === void 0 && (n = !1);
  const r = Ao(e), o = ma(e), i = pa(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = mi(s)), [s, mi(s)];
}
function g2(e) {
  const t = mi(e);
  return [$s(e), t, $s(t)];
}
function $s(e) {
  return e.replace(/start|end/g, (t) => d2[t]);
}
const bl = ["left", "right"], Cl = ["right", "left"], v2 = ["top", "bottom"], p2 = ["bottom", "top"];
function m2(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Cl : bl : t ? bl : Cl;
    case "left":
    case "right":
      return t ? v2 : p2;
    default:
      return [];
  }
}
function y2(e, t, n, r) {
  const o = Ao(e);
  let i = m2(pr(e), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map($s)))), i;
}
function mi(e) {
  return e.replace(/left|right|bottom|top/g, (t) => u2[t]);
}
function w2(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Dd(e) {
  return typeof e != "number" ? w2(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function yi(e) {
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
function kl(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = Fn(t), s = ma(t), a = pa(s), l = pr(t), c = i === "y", d = r.x + r.width / 2 - o.width / 2, h = r.y + r.height / 2 - o.height / 2, f = r[a] / 2 - o[a] / 2;
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
        y: h
      };
      break;
    case "left":
      g = {
        x: r.x - o.width,
        y: h
      };
      break;
    default:
      g = {
        x: r.x,
        y: r.y
      };
  }
  switch (Ao(t)) {
    case "start":
      g[s] -= f * (n && c ? -1 : 1);
      break;
    case "end":
      g[s] += f * (n && c ? -1 : 1);
      break;
  }
  return g;
}
const _2 = async (e, t, n) => {
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
    y: h
  } = kl(c, r, l), f = r, g = {}, m = 0;
  for (let y = 0; y < a.length; y++) {
    const {
      name: w,
      fn: _
    } = a[y], {
      x: k,
      y: E,
      data: b,
      reset: P
    } = await _({
      x: d,
      y: h,
      initialPlacement: r,
      placement: f,
      strategy: o,
      middlewareData: g,
      rects: c,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    d = k ?? d, h = E ?? h, g = {
      ...g,
      [w]: {
        ...g[w],
        ...b
      }
    }, P && m <= 50 && (m++, typeof P == "object" && (P.placement && (f = P.placement), P.rects && (c = P.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : P.rects), {
      x: d,
      y: h
    } = kl(c, f, l)), y = -1);
  }
  return {
    x: d,
    y: h,
    placement: f,
    strategy: o,
    middlewareData: g
  };
};
async function Ad(e, t) {
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
    elementContext: h = "floating",
    altBoundary: f = !1,
    padding: g = 0
  } = Do(t, e), m = Dd(g), w = a[f ? h === "floating" ? "reference" : "floating" : h], _ = yi(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(w))) == null || n ? w : w.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: c,
    rootBoundary: d,
    strategy: l
  })), k = h === "floating" ? {
    x: r,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, E = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)), b = await (i.isElement == null ? void 0 : i.isElement(E)) ? await (i.getScale == null ? void 0 : i.getScale(E)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, P = yi(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: k,
    offsetParent: E,
    strategy: l
  }) : k);
  return {
    top: (_.top - P.top + m.top) / b.y,
    bottom: (P.bottom - _.bottom + m.bottom) / b.y,
    left: (_.left - P.left + m.left) / b.x,
    right: (P.right - _.right + m.right) / b.x
  };
}
const x2 = (e) => ({
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
    } = Do(e, t) || {};
    if (c == null)
      return {};
    const h = Dd(d), f = {
      x: n,
      y: r
    }, g = ma(o), m = pa(g), y = await s.getDimensions(c), w = g === "y", _ = w ? "top" : "left", k = w ? "bottom" : "right", E = w ? "clientHeight" : "clientWidth", b = i.reference[m] + i.reference[g] - f[g] - i.floating[m], P = f[g] - i.reference[g], $ = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c));
    let A = $ ? $[E] : 0;
    (!A || !await (s.isElement == null ? void 0 : s.isElement($))) && (A = a.floating[E] || i.floating[m]);
    const I = b / 2 - P / 2, V = A / 2 - y[m] / 2 - 1, Y = ho(h[_], V), z = ho(h[k], V), S = Y, T = A - y[m] - z, x = A / 2 - y[m] / 2 + I, C = Ps(S, x, T), O = !l.arrow && Ao(o) != null && x !== C && i.reference[m] / 2 - (x < S ? Y : z) - y[m] / 2 < 0, M = O ? x < S ? x - S : x - T : 0;
    return {
      [g]: f[g] + M,
      data: {
        [g]: C,
        centerOffset: x - C - M,
        ...O && {
          alignmentOffset: M
        }
      },
      reset: O
    };
  }
}), b2 = function(e) {
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
        crossAxis: h = !0,
        fallbackPlacements: f,
        fallbackStrategy: g = "bestFit",
        fallbackAxisSideDirection: m = "none",
        flipAlignment: y = !0,
        ...w
      } = Do(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const _ = pr(o), k = Fn(a), E = pr(a) === a, b = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), P = f || (E || !y ? [mi(a)] : g2(a)), $ = m !== "none";
      !f && $ && P.push(...y2(a, y, m, b));
      const A = [a, ...P], I = await Ad(t, w), V = [];
      let Y = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (d && V.push(I[_]), h) {
        const x = h2(o, s, b);
        V.push(I[x[0]], I[x[1]]);
      }
      if (Y = [...Y, {
        placement: o,
        overflows: V
      }], !V.every((x) => x <= 0)) {
        var z, S;
        const x = (((z = i.flip) == null ? void 0 : z.index) || 0) + 1, C = A[x];
        if (C && (!(h === "alignment" ? k !== Fn(C) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        Y.every((Z) => Fn(Z.placement) === k ? Z.overflows[0] > 0 : !0)))
          return {
            data: {
              index: x,
              overflows: Y
            },
            reset: {
              placement: C
            }
          };
        let O = (S = Y.filter((M) => M.overflows[0] <= 0).sort((M, Z) => M.overflows[1] - Z.overflows[1])[0]) == null ? void 0 : S.placement;
        if (!O)
          switch (g) {
            case "bestFit": {
              var T;
              const M = (T = Y.filter((Z) => {
                if ($) {
                  const U = Fn(Z.placement);
                  return U === k || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  U === "y";
                }
                return !0;
              }).map((Z) => [Z.placement, Z.overflows.filter((U) => U > 0).reduce((U, L) => U + L, 0)]).sort((Z, U) => Z[1] - U[1])[0]) == null ? void 0 : T[0];
              M && (O = M);
              break;
            }
            case "initialPlacement":
              O = a;
              break;
          }
        if (o !== O)
          return {
            reset: {
              placement: O
            }
          };
      }
      return {};
    }
  };
}, C2 = /* @__PURE__ */ new Set(["left", "top"]);
async function k2(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = pr(n), a = Ao(n), l = Fn(n) === "y", c = C2.has(s) ? -1 : 1, d = i && l ? -1 : 1, h = Do(t, e);
  let {
    mainAxis: f,
    crossAxis: g,
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
  return a && typeof m == "number" && (g = a === "end" ? m * -1 : m), l ? {
    x: g * d,
    y: f * c
  } : {
    x: f * c,
    y: g * d
  };
}
const E2 = function(e) {
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
      } = t, l = await k2(t, e);
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
}, S2 = function(e) {
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
              x: _,
              y: k
            } = w;
            return {
              x: _,
              y: k
            };
          }
        },
        ...l
      } = Do(e, t), c = {
        x: n,
        y: r
      }, d = await Ad(t, l), h = Fn(pr(o)), f = Td(h);
      let g = c[f], m = c[h];
      if (i) {
        const w = f === "y" ? "top" : "left", _ = f === "y" ? "bottom" : "right", k = g + d[w], E = g - d[_];
        g = Ps(k, g, E);
      }
      if (s) {
        const w = h === "y" ? "top" : "left", _ = h === "y" ? "bottom" : "right", k = m + d[w], E = m - d[_];
        m = Ps(k, m, E);
      }
      const y = a.fn({
        ...t,
        [f]: g,
        [h]: m
      });
      return {
        ...y,
        data: {
          x: y.x - n,
          y: y.y - r,
          enabled: {
            [f]: i,
            [h]: s
          }
        }
      };
    }
  };
};
function zi() {
  return typeof window < "u";
}
function Zr(e) {
  return Od(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Vt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function In(e) {
  var t;
  return (t = (Od(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Od(e) {
  return zi() ? e instanceof Node || e instanceof Vt(e).Node : !1;
}
function en(e) {
  return zi() ? e instanceof Element || e instanceof Vt(e).Element : !1;
}
function mn(e) {
  return zi() ? e instanceof HTMLElement || e instanceof Vt(e).HTMLElement : !1;
}
function El(e) {
  return !zi() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Vt(e).ShadowRoot;
}
const N2 = /* @__PURE__ */ new Set(["inline", "contents"]);
function Oo(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = tn(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !N2.has(o);
}
const P2 = /* @__PURE__ */ new Set(["table", "td", "th"]);
function $2(e) {
  return P2.has(Zr(e));
}
const T2 = [":popover-open", ":modal"];
function Ri(e) {
  return T2.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const D2 = ["transform", "translate", "scale", "rotate", "perspective"], A2 = ["transform", "translate", "scale", "rotate", "perspective", "filter"], O2 = ["paint", "layout", "strict", "content"];
function ya(e) {
  const t = wa(), n = en(e) ? tn(e) : e;
  return D2.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || A2.some((r) => (n.willChange || "").includes(r)) || O2.some((r) => (n.contain || "").includes(r));
}
function M2(e) {
  let t = Gn(e);
  for (; mn(t) && !Rr(t); ) {
    if (ya(t))
      return t;
    if (Ri(t))
      return null;
    t = Gn(t);
  }
  return null;
}
function wa() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const H2 = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function Rr(e) {
  return H2.has(Zr(e));
}
function tn(e) {
  return Vt(e).getComputedStyle(e);
}
function Bi(e) {
  return en(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Gn(e) {
  if (Zr(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    El(e) && e.host || // Fallback.
    In(e)
  );
  return El(t) ? t.host : t;
}
function Md(e) {
  const t = Gn(e);
  return Rr(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : mn(t) && Oo(t) ? t : Md(t);
}
function Hd(e, t, n) {
  var r;
  t === void 0 && (t = []);
  const o = Md(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = Vt(o);
  return i ? (Ts(s), t.concat(s, s.visualViewport || [], Oo(o) ? o : [], [])) : t.concat(o, Hd(o, []));
}
function Ts(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Ld(e) {
  const t = tn(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = mn(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, a = pi(n) !== i || pi(r) !== s;
  return a && (n = i, r = s), {
    width: n,
    height: r,
    $: a
  };
}
function Vd(e) {
  return en(e) ? e : e.contextElement;
}
function Pr(e) {
  const t = Vd(e);
  if (!mn(t))
    return vn(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = Ld(t);
  let s = (i ? pi(n.width) : n.width) / r, a = (i ? pi(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const L2 = /* @__PURE__ */ vn(0);
function Id(e) {
  const t = Vt(e);
  return !wa() || !t.visualViewport ? L2 : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function V2(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Vt(e) ? !1 : t;
}
function go(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = Vd(e);
  let s = vn(1);
  t && (r ? en(r) && (s = Pr(r)) : s = Pr(e));
  const a = V2(i, n, r) ? Id(i) : vn(0);
  let l = (o.left + a.x) / s.x, c = (o.top + a.y) / s.y, d = o.width / s.x, h = o.height / s.y;
  if (i) {
    const f = Vt(i), g = r && en(r) ? Vt(r) : r;
    let m = f, y = Ts(m);
    for (; y && r && g !== m; ) {
      const w = Pr(y), _ = y.getBoundingClientRect(), k = tn(y), E = _.left + (y.clientLeft + parseFloat(k.paddingLeft)) * w.x, b = _.top + (y.clientTop + parseFloat(k.paddingTop)) * w.y;
      l *= w.x, c *= w.y, d *= w.x, h *= w.y, l += E, c += b, m = Vt(y), y = Ts(m);
    }
  }
  return yi({
    width: d,
    height: h,
    x: l,
    y: c
  });
}
function Fi(e, t) {
  const n = Bi(e).scrollLeft;
  return t ? t.left + n : go(In(e)).left + n;
}
function zd(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - Fi(e, n), o = n.top + t.scrollTop;
  return {
    x: r,
    y: o
  };
}
function I2(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", s = In(r), a = t ? Ri(t.floating) : !1;
  if (r === s || a && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = vn(1);
  const d = vn(0), h = mn(r);
  if ((h || !h && !i) && ((Zr(r) !== "body" || Oo(s)) && (l = Bi(r)), mn(r))) {
    const g = go(r);
    c = Pr(r), d.x = g.x + r.clientLeft, d.y = g.y + r.clientTop;
  }
  const f = s && !h && !i ? zd(s, l) : vn(0);
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - l.scrollLeft * c.x + d.x + f.x,
    y: n.y * c.y - l.scrollTop * c.y + d.y + f.y
  };
}
function z2(e) {
  return Array.from(e.getClientRects());
}
function R2(e) {
  const t = In(e), n = Bi(e), r = e.ownerDocument.body, o = Nr(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = Nr(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + Fi(e);
  const a = -n.scrollTop;
  return tn(r).direction === "rtl" && (s += Nr(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
const Sl = 25;
function B2(e, t) {
  const n = Vt(e), r = In(e), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, a = 0, l = 0;
  if (o) {
    i = o.width, s = o.height;
    const d = wa();
    (!d || d && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  const c = Fi(r);
  if (c <= 0) {
    const d = r.ownerDocument, h = d.body, f = getComputedStyle(h), g = d.compatMode === "CSS1Compat" && parseFloat(f.marginLeft) + parseFloat(f.marginRight) || 0, m = Math.abs(r.clientWidth - h.clientWidth - g);
    m <= Sl && (i -= m);
  } else c <= Sl && (i += c);
  return {
    width: i,
    height: s,
    x: a,
    y: l
  };
}
const F2 = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function K2(e, t) {
  const n = go(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = mn(e) ? Pr(e) : vn(1), s = e.clientWidth * i.x, a = e.clientHeight * i.y, l = o * i.x, c = r * i.y;
  return {
    width: s,
    height: a,
    x: l,
    y: c
  };
}
function Nl(e, t, n) {
  let r;
  if (t === "viewport")
    r = B2(e, n);
  else if (t === "document")
    r = R2(In(e));
  else if (en(t))
    r = K2(t, n);
  else {
    const o = Id(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return yi(r);
}
function Rd(e, t) {
  const n = Gn(e);
  return n === t || !en(n) || Rr(n) ? !1 : tn(n).position === "fixed" || Rd(n, t);
}
function Z2(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Hd(e, []).filter((a) => en(a) && Zr(a) !== "body"), o = null;
  const i = tn(e).position === "fixed";
  let s = i ? Gn(e) : e;
  for (; en(s) && !Rr(s); ) {
    const a = tn(s), l = ya(s);
    !l && a.position === "fixed" && (o = null), (i ? !l && !o : !l && a.position === "static" && !!o && F2.has(o.position) || Oo(s) && !l && Rd(e, s)) ? r = r.filter((d) => d !== s) : o = a, s = Gn(s);
  }
  return t.set(e, r), r;
}
function Y2(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? Ri(t) ? [] : Z2(t, this._c) : [].concat(n), r], a = s[0], l = s.reduce((c, d) => {
    const h = Nl(t, d, o);
    return c.top = Nr(h.top, c.top), c.right = ho(h.right, c.right), c.bottom = ho(h.bottom, c.bottom), c.left = Nr(h.left, c.left), c;
  }, Nl(t, a, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function W2(e) {
  const {
    width: t,
    height: n
  } = Ld(e);
  return {
    width: t,
    height: n
  };
}
function X2(e, t, n) {
  const r = mn(t), o = In(t), i = n === "fixed", s = go(e, !0, i, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = vn(0);
  function c() {
    l.x = Fi(o);
  }
  if (r || !r && !i)
    if ((Zr(t) !== "body" || Oo(o)) && (a = Bi(t)), r) {
      const g = go(t, !0, i, t);
      l.x = g.x + t.clientLeft, l.y = g.y + t.clientTop;
    } else o && c();
  i && !r && o && c();
  const d = o && !r && !i ? zd(o, a) : vn(0), h = s.left + a.scrollLeft - l.x - d.x, f = s.top + a.scrollTop - l.y - d.y;
  return {
    x: h,
    y: f,
    width: s.width,
    height: s.height
  };
}
function rs(e) {
  return tn(e).position === "static";
}
function Pl(e, t) {
  if (!mn(e) || tn(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return In(e) === n && (n = n.ownerDocument.body), n;
}
function Bd(e, t) {
  const n = Vt(e);
  if (Ri(e))
    return n;
  if (!mn(e)) {
    let o = Gn(e);
    for (; o && !Rr(o); ) {
      if (en(o) && !rs(o))
        return o;
      o = Gn(o);
    }
    return n;
  }
  let r = Pl(e, t);
  for (; r && $2(r) && rs(r); )
    r = Pl(r, t);
  return r && Rr(r) && rs(r) && !ya(r) ? n : r || M2(e) || n;
}
const j2 = async function(e) {
  const t = this.getOffsetParent || Bd, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: X2(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function q2(e) {
  return tn(e).direction === "rtl";
}
const G2 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: I2,
  getDocumentElement: In,
  getClippingRect: Y2,
  getOffsetParent: Bd,
  getElementRects: j2,
  getClientRects: z2,
  getDimensions: W2,
  getScale: Pr,
  isElement: en,
  isRTL: q2
}, U2 = E2, J2 = S2, Q2 = b2, ey = x2, ty = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: G2,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return _2(e, t, {
    ...o,
    platform: i
  });
}, ny = ({
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
    const _ = document.querySelector(e);
    if (_)
      e = _;
    else
      throw new Error("element not found by document.querySelector('" + e + "')");
  }
  let c;
  if (typeof n == "string") {
    const _ = document.querySelector(n);
    if (_)
      c = _;
    else
      throw new Error("element not found by document.querySelector('" + n + "')");
  } else
    c = n;
  let d;
  l && (d = document.createElement("div"), d.style.position = "absolute", d.style.backgroundColor = "#222", d.style.width = "8px", d.style.height = "8px", d.style.transform = "rotate(45deg)", d.style.display = "none", c.firstElementChild.before(d));
  function h() {
    ty(e, c, {
      placement: r,
      middleware: [
        U2(o),
        // 手动偏移配置
        Q2(i),
        //自动翻转
        J2(s),
        //自动偏移（使得浮动元素能够进入视野）
        ...l ? [ey({ element: d })] : []
      ]
    }).then(({ x: _, y: k, placement: E, middlewareData: b }) => {
      if (Object.assign(c.style, {
        left: `${_}px`,
        top: `${k}px`
      }), l) {
        const { x: P, y: $ } = b.arrow, A = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[E.split("-")[0]];
        Object.assign(d.style, {
          zIndex: -1,
          left: P != null ? `${P}px` : "",
          top: $ != null ? `${$}px` : "",
          right: "",
          bottom: "",
          [A]: "2px"
        });
      }
    });
  }
  let f = !1;
  function g() {
    c.style.display = "block", c.style.visibility = "block", c.style.position = "absolute", l && (d.style.display = "block"), f = !0, h();
  }
  function m() {
    c.style.display = "none", l && (d.style.display = "none"), f = !1;
  }
  function y(_) {
    _.stopPropagation(), f ? m() : g();
  }
  function w(_) {
    c.contains(_.target) || m();
  }
  return (!t || t.length == 0) && (t = ["click"]), t.forEach((_) => {
    e.addEventListener(_, y);
  }), document.addEventListener("click", w), {
    destroy() {
      t.forEach((_) => {
        e.removeEventListener(_, y);
      }), document.removeEventListener("click", w);
    },
    hide() {
      m();
    },
    isVisible() {
      return f;
    }
  };
};
var ry = /* @__PURE__ */ te('<div style="position: relative"><div><!></div> <div style="display: none; width: 100%;z-index: 9999"><!></div></div>');
function nr(e, t) {
  ue(t, !0);
  const n = p(t, "children", 7), r = p(t, "floating", 7), o = p(t, "placement", 7, "bottom");
  let i, s, a;
  Hn(() => (a = ny({
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
      n(y), v();
    },
    get floating() {
      return r();
    },
    set floating(y) {
      r(y), v();
    },
    get placement() {
      return o();
    },
    set placement(y = "bottom") {
      o(y), v();
    }
  }, d = ry(), h = B(d), f = B(h);
  qe(f, n), R(h), Ot(h, (y) => i = y, () => i);
  var g = H(h, 2), m = B(g);
  return qe(m, r), R(g), Ot(g, (y) => s = y, () => s), R(d), D(e, d), de(c);
}
ae(nr, { children: {}, floating: {}, placement: {} }, [], ["hide"], !0);
function Ae(e, t) {
  ue(t, !0);
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
  return $h(l, () => `h${r()}`, !1, (c, d) => {
    tt(c, () => ({
      class: "tf-heading",
      style: `margin-top:${o() || "0"};margin-bottom:${i() || "0"}`
    }));
    var h = Ee(), f = ie(h);
    qe(f, () => n() ?? pt), D(d, h);
  }), D(e, a), de(s);
}
ae(Ae, { children: {}, level: {}, mt: {}, mb: {} }, [], [], !0);
var oy = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1q3h954"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1q3h954"></path></svg>');
const iy = {
  hash: "svelte-1q3h954",
  code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:#eee;border:1px solid transparent;}}"
};
function Mo(e, t) {
  ue(t, !0), ze(e, iy);
  const n = /* @__PURE__ */ Be(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  De(e, Ke(() => n, {
    get class() {
      return `input-btn-more ${t.class ?? ""}`;
    },
    children: (r, o) => {
      var i = oy();
      D(r, i);
    },
    $$slots: { default: !0 }
  })), de();
}
ae(Mo, {}, [], [], !0);
const sy = () => ({ deleteNode: (t) => {
  Me.removeNode(t), Me.updateEdges((n) => n.filter((r) => r.source !== t && r.target !== t));
} }), Dn = (e = 16) => {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = new Uint8Array(e);
  return crypto.getRandomValues(n), Array.from(n, (r) => t[r % t.length]).join("");
}, ay = () => ({ copyNode: (t) => {
  const n = Me.getNode(t);
  if (n) {
    const r = Dn(), o = {
      ...n,
      id: r,
      position: { x: n.position.x + 50, y: n.position.y + 50 }
    };
    Me.updateNodes((i) => [...i.map((a) => ({ ...a, selected: !1 })), o]);
  }
} }), Ge = () => Xn("svelteflow__node_id"), Un = () => Xn("tinyflow_options");
var ly = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'), cy = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'), uy = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'), dy = /* @__PURE__ */ te('<div class="input-item svelte-ana6zl">执行条件： <!></div>'), fy = /* @__PURE__ */ te('<div class="input-item svelte-ana6zl">循环间隔时间（单位：毫秒）： <!></div> <div class="input-item svelte-ana6zl">最大循环次数（0 表示不限制）： <!></div> <div class="input-item svelte-ana6zl">退出条件： <!></div>', 1), hy = /* @__PURE__ */ te('<div class="input-item svelte-ana6zl">错误重试间隔时间（单位：毫秒）： <!></div> <div class="input-item svelte-ana6zl">最大重试次数： <!></div> <label class="input-item-inline svelte-ana6zl"><span>正常后重置重试次数记录：</span> <input type="checkbox"/></label>', 1), gy = /* @__PURE__ */ te('<div class="settings svelte-ana6zl"><div class="input-item svelte-ana6zl">节点名称： <!></div> <div class="input-item svelte-ana6zl">参数描述： <!></div> <!> <label class="input-item-inline svelte-ana6zl"><span>循环执行：</span> <input type="checkbox"/></label> <!> <label class="input-item-inline svelte-ana6zl"><span>错误重试：</span> <input type="checkbox"/></label> <!></div>'), vy = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3.33946 17.0002C2.90721 16.2515 2.58277 15.4702 2.36133 14.6741C3.3338 14.1779 3.99972 13.1668 3.99972 12.0002C3.99972 10.8345 3.3348 9.824 2.36353 9.32741C2.81025 7.71651 3.65857 6.21627 4.86474 4.99001C5.7807 5.58416 6.98935 5.65534 7.99972 5.072C9.01009 4.48866 9.55277 3.40635 9.4962 2.31604C11.1613 1.8846 12.8847 1.90004 14.5031 2.31862C14.4475 3.40806 14.9901 4.48912 15.9997 5.072C17.0101 5.65532 18.2187 5.58416 19.1346 4.99007C19.7133 5.57986 20.2277 6.25151 20.66 7.00021C21.0922 7.7489 21.4167 8.53025 21.6381 9.32628C20.6656 9.82247 19.9997 10.8336 19.9997 12.0002C19.9997 13.166 20.6646 14.1764 21.6359 14.673C21.1892 16.2839 20.3409 17.7841 19.1347 19.0104C18.2187 18.4163 17.0101 18.3451 15.9997 18.9284C14.9893 19.5117 14.4467 20.5941 14.5032 21.6844C12.8382 22.1158 11.1148 22.1004 9.49633 21.6818C9.55191 20.5923 9.00929 19.5113 7.99972 18.9284C6.98938 18.3451 5.78079 18.4162 4.86484 19.0103C4.28617 18.4205 3.77172 17.7489 3.33946 17.0002ZM8.99972 17.1964C10.0911 17.8265 10.8749 18.8227 11.2503 19.9659C11.7486 20.0133 12.2502 20.014 12.7486 19.9675C13.1238 18.8237 13.9078 17.8268 14.9997 17.1964C16.0916 16.5659 17.347 16.3855 18.5252 16.6324C18.8146 16.224 19.0648 15.7892 19.2729 15.334C18.4706 14.4373 17.9997 13.2604 17.9997 12.0002C17.9997 10.74 18.4706 9.5632 19.2729 8.6665C19.1688 8.4405 19.0538 8.21822 18.9279 8.00021C18.802 7.78219 18.667 7.57148 18.5233 7.36842C17.3457 7.61476 16.0911 7.43414 14.9997 6.80405C13.9083 6.17395 13.1246 5.17768 12.7491 4.03455C12.2509 3.98714 11.7492 3.98646 11.2509 4.03292C10.8756 5.17671 10.0916 6.17364 8.99972 6.80405C7.9078 7.43447 6.65245 7.61494 5.47428 7.36803C5.18485 7.77641 4.93463 8.21117 4.72656 8.66637C5.52881 9.56311 5.99972 10.74 5.99972 12.0002C5.99972 13.2604 5.52883 14.4372 4.72656 15.3339C4.83067 15.5599 4.94564 15.7822 5.07152 16.0002C5.19739 16.2182 5.3324 16.4289 5.47612 16.632C6.65377 16.3857 7.90838 16.5663 8.99972 17.1964ZM11.9997 15.0002C10.3429 15.0002 8.99972 13.6571 8.99972 12.0002C8.99972 10.3434 10.3429 9.00021 11.9997 9.00021C13.6566 9.00021 14.9997 10.3434 14.9997 12.0002C14.9997 13.6571 13.6566 15.0002 11.9997 15.0002ZM11.9997 13.0002C12.552 13.0002 12.9997 12.5525 12.9997 12.0002C12.9997 11.4479 12.552 11.0002 11.9997 11.0002C11.4474 11.0002 10.9997 11.4479 10.9997 12.0002C10.9997 12.5525 11.4474 13.0002 11.9997 13.0002Z"></path></svg>'), py = /* @__PURE__ */ te('<div class="tf-node-toolbar svelte-ana6zl"><!> <!> <!> <!></div>'), my = /* @__PURE__ */ te('<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!> <!>', 1);
const yy = {
  hash: "svelte-ana6zl",
  code: ".tf-node-toolbar.svelte-ana6zl {display:flex;gap:5px;padding:5px;border-radius:5px;background:#fff;border:1px solid #eee;box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}.settings.svelte-ana6zl {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.settings.svelte-ana6zl .input-item:where(.svelte-ana6zl) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}.settings.svelte-ana6zl .input-item-inline:where(.svelte-ana6zl) {display:flex;align-items:center;font-size:12px;color:#666;}"
};
function Wt(e, t) {
  ue(t, !0), ze(e, yy);
  const n = p(t, "data", 7), r = p(t, "id", 7, ""), o = p(t, "icon", 7), i = p(t, "handle", 7), s = p(t, "children", 7), a = p(t, "allowExecute", 7, !0), l = p(t, "allowCopy", 7, !0), c = p(t, "allowDelete", 7, !0), d = p(t, "allowSetting", 7, !0), h = p(t, "allowSettingOfCondition", 7, !0), f = p(t, "showSourceHandle", 7, !0), g = p(t, "showTargetHandle", 7, !0), m = p(t, "onCollapse", 7);
  let y = n().expand ? ["key"] : [];
  const { updateNodeData: w, getNode: _ } = ot(), k = /* @__PURE__ */ N(() => [
    {
      key: "key",
      icon: o(),
      title: n().title,
      description: n().description,
      content: s()
    }
  ]), { deleteNode: E } = sy(), { copyNode: b } = ay(), P = Un(), $ = () => {
    P.onNodeExecute?.(_(r()));
  };
  let A = Ge();
  var I = {
    get data() {
      return n();
    },
    set data(L) {
      n(L), v();
    },
    get id() {
      return r();
    },
    set id(L = "") {
      r(L), v();
    },
    get icon() {
      return o();
    },
    set icon(L) {
      o(L), v();
    },
    get handle() {
      return i();
    },
    set handle(L) {
      i(L), v();
    },
    get children() {
      return s();
    },
    set children(L) {
      s(L), v();
    },
    get allowExecute() {
      return a();
    },
    set allowExecute(L = !0) {
      a(L), v();
    },
    get allowCopy() {
      return l();
    },
    set allowCopy(L = !0) {
      l(L), v();
    },
    get allowDelete() {
      return c();
    },
    set allowDelete(L = !0) {
      c(L), v();
    },
    get allowSetting() {
      return d();
    },
    set allowSetting(L = !0) {
      d(L), v();
    },
    get allowSettingOfCondition() {
      return h();
    },
    set allowSettingOfCondition(L = !0) {
      h(L), v();
    },
    get showSourceHandle() {
      return f();
    },
    set showSourceHandle(L = !0) {
      f(L), v();
    },
    get showTargetHandle() {
      return g();
    },
    set showTargetHandle(L = !0) {
      g(L), v();
    },
    get onCollapse() {
      return m();
    },
    set onCollapse(L) {
      m(L), v();
    }
  }, V = my(), Y = ie(V);
  {
    var z = (L) => {
      Ed(L, {
        get position() {
          return ye.Top;
        },
        align: "start",
        children: (W, K) => {
          var q = py(), j = B(q);
          {
            var F = (le) => {
              De(le, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  E(r());
                },
                children: (re, he) => {
                  var ge = ly();
                  D(re, ge);
                },
                $$slots: { default: !0 }
              });
            };
            se(j, (le) => {
              c() && le(F);
            });
          }
          var J = H(j, 2);
          {
            var G = (le) => {
              De(le, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  b(r());
                },
                children: (re, he) => {
                  var ge = cy();
                  D(re, ge);
                },
                $$slots: { default: !0 }
              });
            };
            se(J, (le) => {
              l() && le(G);
            });
          }
          var ne = H(J, 2);
          {
            var ee = (le) => {
              De(le, {
                class: "tf-node-toolbar-item",
                onclick: $,
                children: (re, he) => {
                  var ge = uy();
                  D(re, ge);
                },
                $$slots: { default: !0 }
              });
            };
            se(ne, (le) => {
              a() && le(ee);
            });
          }
          var we = H(ne, 2);
          {
            var oe = (le) => {
              nr(le, {
                placement: "bottom",
                floating: (he) => {
                  var ge = gy(), _e = B(ge), fe = H(B(_e));
                  Ue(fe, {
                    style: "width: 100%;",
                    onchange: (ce) => {
                      const $e = ce.target.value;
                      w(A, { title: $e });
                    },
                    get value() {
                      return n().title;
                    }
                  }), R(_e);
                  var me = H(_e, 2), Se = H(B(me));
                  Re(Se, {
                    rows: 3,
                    style: "width: 100%;",
                    onchange: (ce) => {
                      const $e = ce.target.value;
                      w(A, { description: $e });
                    },
                    get value() {
                      return n().description;
                    }
                  }), R(me);
                  var X = H(me, 2);
                  {
                    var We = (ce) => {
                      var $e = dy(), je = H(B($e));
                      Re(je, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (Ie) => {
                          const nt = Ie.target.value;
                          w(A, { condition: nt });
                        },
                        get value() {
                          return n().condition;
                        }
                      }), R($e), D(ce, $e);
                    };
                    se(X, (ce) => {
                      h() && ce(We);
                    });
                  }
                  var Oe = H(X, 2), Le = H(B(Oe), 2);
                  Wn(Le), Le.__change = (ce) => {
                    const $e = ce.target.checked;
                    w(A, { loopEnable: $e });
                  }, R(Oe);
                  var Ve = H(Oe, 2);
                  {
                    var yt = (ce) => {
                      var $e = fy(), je = ie($e), Ie = H(B(je));
                      {
                        let dt = /* @__PURE__ */ N(() => n().loopIntervalMs || "1000");
                        Re(Ie, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (ft) => {
                            const ln = ft.target.value;
                            w(A, { loopIntervalMs: ln });
                          },
                          get value() {
                            return u(dt);
                          }
                        });
                      }
                      R(je);
                      var nt = H(je, 2), wt = H(B(nt));
                      {
                        let dt = /* @__PURE__ */ N(() => n().maxLoopCount || "0");
                        Re(wt, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (ft) => {
                            const ln = ft.target.value;
                            w(A, { maxLoopCount: ln });
                          },
                          get value() {
                            return u(dt);
                          }
                        });
                      }
                      R(nt);
                      var Et = H(nt, 2), an = H(B(Et));
                      Re(an, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (dt) => {
                          const ft = dt.target.value;
                          w(A, { loopBreakCondition: ft });
                        },
                        get value() {
                          return n().loopBreakCondition;
                        }
                      }), R(Et), D(ce, $e);
                    };
                    se(Ve, (ce) => {
                      n().loopEnable && ce(yt);
                    });
                  }
                  var Qe = H(Ve, 2), kt = H(B(Qe), 2);
                  Wn(kt), kt.__change = (ce) => {
                    const $e = ce.target.checked;
                    w(A, { retryEnable: $e });
                  }, R(Qe);
                  var ut = H(Qe, 2);
                  {
                    var Xt = (ce) => {
                      var $e = hy(), je = ie($e), Ie = H(B(je));
                      {
                        let dt = /* @__PURE__ */ N(() => n().retryIntervalMs || "1000");
                        Re(Ie, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (ft) => {
                            const ln = ft.target.value;
                            w(A, { retryIntervalMs: ln });
                          },
                          get value() {
                            return u(dt);
                          }
                        });
                      }
                      R(je);
                      var nt = H(je, 2), wt = H(B(nt));
                      {
                        let dt = /* @__PURE__ */ N(() => n().maxRetryCount || "3");
                        Re(wt, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (ft) => {
                            const ln = ft.target.value;
                            w(A, { maxRetryCount: ln });
                          },
                          get value() {
                            return u(dt);
                          }
                        });
                      }
                      R(nt);
                      var Et = H(nt, 2), an = H(B(Et), 2);
                      Wn(an), an.__change = (dt) => {
                        const ft = dt.target.checked;
                        w(A, { resetRetryCountAfterNormal: ft });
                      }, R(Et), Ce(() => Wi(an, !!n().resetRetryCountAfterNormal)), D(ce, $e);
                    };
                    se(ut, (ce) => {
                      n().retryEnable && ce(Xt);
                    });
                  }
                  R(ge), Ce(() => {
                    Wi(Le, !!n().loopEnable), Wi(kt, !!n().retryEnable);
                  }), D(he, ge);
                },
                children: (he, ge) => {
                  De(he, {
                    class: "tf-node-toolbar-item",
                    children: (_e, fe) => {
                      var me = vy();
                      D(_e, me);
                    },
                    $$slots: { default: !0 }
                  });
                },
                $$slots: { floating: !0, default: !0 }
              });
            };
            se(we, (le) => {
              d() && le(oe);
            });
          }
          R(q), D(W, q);
        },
        $$slots: { default: !0 }
      });
    };
    se(Y, (L) => {
      (a() || l() || c()) && L(z);
    });
  }
  var S = H(Y, 2), T = H(B(S), 2), x = B(T);
  $d(x, {
    get items() {
      return u(k);
    },
    get activeKeys() {
      return y;
    },
    onChange: (L, W) => {
      w(r(), { expand: W?.includes("key") }), m()?.(W?.includes("key") ? "key" : "");
    }
  }), R(T), R(S);
  var C = H(S, 2);
  {
    var O = (L) => {
      qn(L, {
        type: "target",
        get position() {
          return ye.Left;
        },
        style: " left: -12px;top: 20px"
      });
    };
    se(C, (L) => {
      g() && L(O);
    });
  }
  var M = H(C, 2);
  {
    var Z = (L) => {
      qn(L, {
        type: "source",
        get position() {
          return ye.Right;
        },
        style: "right: -12px;top: 20px"
      });
    };
    se(M, (L) => {
      f() && L(Z);
    });
  }
  var U = H(M, 2);
  return qe(U, () => i() ?? pt), D(e, V), de(I);
}
er(["change"]);
ae(
  Wt,
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
var wy = /* @__PURE__ */ te('<div class="input-more-item svelte-n5iecj">数据选项： <!></div>'), _y = /* @__PURE__ */ te('<div class="input-more-setting svelte-n5iecj"><div class="input-more-item svelte-n5iecj">数据内容： <!></div> <div class="input-more-item svelte-n5iecj">输入方式： <!></div> <!> <div class="input-more-item svelte-n5iecj">数据标题： <!></div> <div class="input-more-item svelte-n5iecj">数据描述： <!></div> <div class="input-more-item svelte-n5iecj">占位符： <!></div> <div class="input-more-item svelte-n5iecj"><!></div></div>'), xy = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>'), by = /* @__PURE__ */ te('<div class="input-item svelte-n5iecj"><!></div> <div class="input-item svelte-n5iecj"><!></div> <div class="input-item svelte-n5iecj"><!></div>', 1);
const Cy = {
  hash: "svelte-n5iecj",
  code: ".input-item.svelte-n5iecj {display:flex;align-items:center;}.input-more-setting.svelte-n5iecj {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-n5iecj .input-more-item:where(.svelte-n5iecj) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Fd(e, t) {
  ue(t, !0), ze(e, Cy);
  const n = p(t, "parameter", 7), r = p(t, "index", 7);
  let o = Ge(), i = Vn(o), s = /* @__PURE__ */ N(() => ({ ...n(), ...i?.current?.data?.parameters[r()] }));
  const { updateNodeData: a } = ot(), l = (I, V) => {
    a(o, (Y) => {
      let z = Y.data.parameters;
      return z[r()][I] = V, { parameters: z };
    });
  }, c = (I, V) => {
    const Y = V.target.value;
    l(I, Y);
  }, d = (I) => {
    const V = I.target.value;
    l("name", V);
  }, h = (I) => {
    const V = I.target.checked;
    l("required", V);
  }, f = (I) => {
    const V = I.value;
    l("formType", V);
  }, g = (I) => {
    const V = I.value;
    l("contentType", V);
  };
  let m;
  const y = () => {
    a(o, (I) => {
      let V = I.data.parameters;
      return V.splice(r(), 1), { parameters: [...V] };
    }), m?.hide();
  };
  var w = {
    get parameter() {
      return n();
    },
    set parameter(I) {
      n(I), v();
    },
    get index() {
      return r();
    },
    set index(I) {
      r(I), v();
    }
  }, _ = by(), k = ie(_), E = B(k);
  Ue(E, {
    style: "width: 100%;",
    get value() {
      return u(s).name;
    },
    placeholder: "请输入参数名称",
    oninput: d
  }), R(k);
  var b = H(k, 2), P = B(b);
  Sd(P, {
    get checked() {
      return u(s).required;
    },
    onchange: h
  }), R(b);
  var $ = H(b, 2), A = B($);
  return Ot(
    nr(A, {
      placement: "bottom",
      floating: (V) => {
        var Y = _y(), z = B(Y), S = H(B(z));
        {
          let F = /* @__PURE__ */ N(() => u(s).contentType ? [u(s).contentType] : []);
          at(S, {
            get items() {
              return va;
            },
            style: "width: 100%",
            defaultValue: ["text"],
            get value() {
              return u(F);
            },
            onSelect: g
          });
        }
        R(z);
        var T = H(z, 2), x = H(B(T));
        {
          let F = /* @__PURE__ */ N(() => u(s).formType ? [u(s).formType] : []);
          at(x, {
            get items() {
              return zm;
            },
            style: "width: 100%",
            defaultValue: ["input"],
            get value() {
              return u(F);
            },
            onSelect: f
          });
        }
        R(T);
        var C = H(T, 2);
        {
          var O = (F) => {
            var J = wy(), G = H(B(J));
            {
              let ne = /* @__PURE__ */ N(() => u(s).enums?.join(`
`));
              Re(G, {
                rows: 3,
                style: "width: 100%;",
                onchange: (ee) => {
                  l("enums", ee.target?.value.trim().split(`
`));
                },
                get value() {
                  return u(ne);
                },
                placeholder: "一行一个选项"
              });
            }
            R(J), D(F, J);
          };
          se(C, (F) => {
            (u(s).formType === "radio" || u(s).formType === "checkbox" || u(s).formType === "select") && F(O);
          });
        }
        var M = H(C, 2), Z = H(B(M));
        Re(Z, {
          rows: 1,
          style: "width: 100%;",
          onchange: (F) => {
            c("formLabel", F);
          },
          get value() {
            return u(s).formLabel;
          }
        }), R(M);
        var U = H(M, 2), L = H(B(U));
        Re(L, {
          rows: 2,
          style: "width: 100%;",
          onchange: (F) => {
            c("formDescription", F);
          },
          get value() {
            return u(s).formDescription;
          }
        }), R(U);
        var W = H(U, 2), K = H(B(W));
        Re(K, {
          rows: 2,
          style: "width: 100%;",
          onchange: (F) => {
            c("formPlaceholder", F);
          },
          get value() {
            return u(s).formPlaceholder;
          }
        }), R(W);
        var q = H(W, 2), j = B(q);
        De(j, {
          onclick: y,
          children: (F, J) => {
            pe();
            var G = ke("删除");
            D(F, G);
          },
          $$slots: { default: !0 }
        }), R(q), R(Y), D(V, Y);
      },
      children: (V, Y) => {
        De(V, {
          class: "input-btn-more",
          children: (z, S) => {
            var T = xy();
            D(z, T);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (V) => m = V,
    () => m
  ), R($), D(e, _), de(w);
}
ae(Fd, { parameter: {}, index: {} }, [], [], !0);
var ky = /* @__PURE__ */ te('<div class="input-header svelte-1yp5n1k">参数名称</div> <div class="input-header svelte-1yp5n1k">必填</div> <div class="input-header svelte-1yp5n1k"></div>', 1), Ey = /* @__PURE__ */ te('<div class="none-params svelte-1yp5n1k">无输入参数</div>'), Sy = /* @__PURE__ */ te('<div class="input-container svelte-1yp5n1k"><!> <!></div>');
const Ny = {
  hash: "svelte-1yp5n1k",
  code: `.input-container.svelte-1yp5n1k {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1yp5n1k .none-params:where(.svelte-1yp5n1k) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1yp5n1k .input-header:where(.svelte-1yp5n1k) {font-size:12px;color:#666;}`
};
function Kd(e, t) {
  ue(t, !0), ze(e, Ny);
  let n = Ge(), r = Vn(n), o = /* @__PURE__ */ N(() => [...r?.current?.data?.parameters || []]);
  var i = Sy(), s = B(i);
  {
    var a = (c) => {
      var d = ky();
      pe(4), D(c, d);
    };
    se(s, (c) => {
      u(o).length !== 0 && c(a);
    });
  }
  var l = H(s, 2);
  mt(
    l,
    19,
    () => u(o),
    (c) => c.id,
    (c, d, h) => {
      Fd(c, {
        get parameter() {
          return u(d);
        },
        get index() {
          return u(h);
        }
      });
    },
    (c) => {
      var d = Ey();
      D(c, d);
    }
  ), R(i), D(e, i), de();
}
ae(Kd, {}, [], [], !0);
const vo = (e) => (!e || e.length == 0 || e.forEach((t) => {
  t.id || (t.id = Dn()), vo(t.children);
}), e), sn = () => {
  const { updateNodeData: e } = ot();
  return {
    addParameter: (t, n = "parameters", r) => {
      Array.isArray(r) ? r.forEach((s) => vo(s?.children)) : vo(r?.children);
      function o(s) {
        return {
          name: "",
          dataType: "String",
          refType: "ref",
          ...s,
          id: Dn()
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
var Py = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), $y = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ty = /* @__PURE__ */ te('<div class="heading svelte-llt1qy"><!> <!></div> <!>', 1);
const Dy = {
  hash: "svelte-llt1qy",
  code: ".heading.svelte-llt1qy {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:#eee;border:1px solid transparent;}"
};
function Zd(e, t) {
  ue(t, !0), ze(e, Dy);
  const n = p(t, "data", 7), r = /* @__PURE__ */ Be(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Ge(), { addParameter: i } = sn();
  var s = {
    get data() {
      return n();
    },
    set data(a) {
      n(a), v();
    }
  };
  return Wt(e, Ke(() => r, {
    get data() {
      return n();
    },
    allowExecute: !1,
    showTargetHandle: !1,
    allowSettingOfCondition: !1,
    icon: (l) => {
      var c = Py();
      D(l, c);
    },
    children: (l, c) => {
      var d = Ty(), h = ie(d), f = B(h);
      Ae(f, {
        level: 3,
        children: (y, w) => {
          pe();
          var _ = ke("输入参数");
          D(y, _);
        },
        $$slots: { default: !0 }
      });
      var g = H(f, 2);
      De(g, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: () => {
          i(o, "parameters", { refType: "input", name: "newParam" });
        },
        children: (y, w) => {
          var _ = $y();
          D(y, _);
        },
        $$slots: { default: !0 }
      }), R(h);
      var m = H(h, 2);
      Kd(m, {}), D(l, d);
    },
    $$slots: { icon: !0, default: !0 }
  })), de(s);
}
ae(Zd, { data: {} }, [], [], !0);
const Yd = (e, t, n) => {
  for (const r of n)
    r.target === t && r.source && (e.push(r.source), Yd(e, r.source, n));
}, Wd = (e, t, n) => !e || e.length === 0 ? [] : e.map((r) => ({
  label: r.name + (n ? ` (Array<${r.dataType || "String"}>)` : ` (${r.dataType || "String"})`),
  value: t + "." + r.name,
  children: Wd(r.children, t + "." + r.name, n)
})), $l = (e, t, n) => {
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
          children: Wd(r, e.id, t)
        };
    }
  }
}, Xd = (e = !1) => {
  const t = Ge(), n = Vn(t), r = /* @__PURE__ */ N(on), o = /* @__PURE__ */ N(() => u(r).nodes), i = /* @__PURE__ */ N(() => u(r).edges), s = /* @__PURE__ */ N(() => u(r).nodeLookup);
  let a = /* @__PURE__ */ N(() => {
    const l = [];
    if (!n.current)
      return [];
    const c = u(s).get(t);
    if (e)
      for (const d of u(o)) {
        const h = d.parentId === n.current.id;
        if (h) {
          const f = $l(d, h, c);
          f && l.push(f);
        }
      }
    else {
      const d = [];
      Yd(d, t, u(i));
      for (const h of u(o))
        if (d.includes(h.id)) {
          const f = h.parentId === n.current.id, g = $l(h, f, c);
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
var Ay = /* @__PURE__ */ te('<div class="input-more-item svelte-jmeys3">数据内容： <!></div>'), Oy = /* @__PURE__ */ te('<div class="input-more-setting svelte-jmeys3"><div class="input-more-item svelte-jmeys3">数据来源： <!></div> <!> <div class="input-more-item svelte-jmeys3">默认值： <!></div> <div class="input-more-item svelte-jmeys3">参数描述： <!></div> <div class="input-more-item svelte-jmeys3"><!></div></div>'), My = /* @__PURE__ */ te('<div class="input-item svelte-jmeys3"><!></div> <div class="input-item svelte-jmeys3"><!></div> <div class="input-item svelte-jmeys3"><!></div>', 1);
const Hy = {
  hash: "svelte-jmeys3",
  code: ".input-item.svelte-jmeys3 {display:flex;align-items:center;}.input-more-setting.svelte-jmeys3 {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-jmeys3 .input-more-item:where(.svelte-jmeys3) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function jd(e, t) {
  ue(t, !0), ze(e, Hy), Hn(() => {
    u(c).refType || m({ value: "ref" });
  });
  const n = p(t, "parameter", 7), r = p(t, "index", 7), o = p(t, "dataKeyName", 7), i = p(t, "useChildrenOnly", 7), s = p(t, "showContentType", 7, !1);
  let a = Ge(), l = Vn(a), c = /* @__PURE__ */ N(() => ({
    ...n(),
    ...l?.current?.data?.[o()][r()]
  }));
  const { updateNodeData: d } = ot(), h = (T, x) => {
    d(a, (C) => {
      let O = C.data?.[o()];
      return O[r()] = { ...O[r()], [T]: x }, { [o()]: O };
    });
  }, f = (T, x) => {
    const C = x.target.value;
    h(T, C);
  }, g = (T) => {
    const x = T.value;
    h("ref", x);
  }, m = (T) => {
    const x = T.value;
    h("refType", x);
  }, y = (T) => {
    const x = T.value;
    h("contentType", x);
  };
  let w;
  const _ = () => {
    d(a, (T) => {
      let x = T.data?.[o()];
      return x.splice(r(), 1), { [o()]: [...x] };
    }), w?.hide();
  };
  let k = Xd(i());
  var E = {
    get parameter() {
      return n();
    },
    set parameter(T) {
      n(T), v();
    },
    get index() {
      return r();
    },
    set index(T) {
      r(T), v();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(T) {
      o(T), v();
    },
    get useChildrenOnly() {
      return i();
    },
    set useChildrenOnly(T) {
      i(T), v();
    },
    get showContentType() {
      return s();
    },
    set showContentType(T = !1) {
      s(T), v();
    }
  }, b = My(), P = ie(b), $ = B(P);
  {
    let T = /* @__PURE__ */ N(() => u(c).nameDisabled === !0);
    Ue($, {
      style: "width: 100%;",
      get value() {
        return u(c).name;
      },
      placeholder: "请输入参数名称",
      get disabled() {
        return u(T);
      },
      oninput: (x) => f("name", x)
    });
  }
  R(P);
  var A = H(P, 2), I = B(A);
  {
    var V = (T) => {
      Ue(T, {
        get value() {
          return u(c).value;
        },
        placeholder: "请输入参数值",
        oninput: (x) => f("value", x)
      });
    }, Y = (T) => {
      var x = Ee(), C = ie(x);
      {
        var O = (M) => {
          {
            let Z = /* @__PURE__ */ N(() => [u(c).ref]);
            at(M, {
              get items() {
                return k.current;
              },
              style: "width: 100%",
              defaultValue: ["ref"],
              get value() {
                return u(Z);
              },
              expandAll: !0,
              onSelect: g
            });
          }
        };
        se(
          C,
          (M) => {
            u(c).refType !== "input" && M(O);
          },
          !0
        );
      }
      D(T, x);
    };
    se(I, (T) => {
      u(c).refType === "fixed" ? T(V) : T(Y, !1);
    });
  }
  R(A);
  var z = H(A, 2), S = B(z);
  return Ot(
    nr(S, {
      placement: "bottom",
      floating: (x) => {
        var C = Oy(), O = B(C), M = H(B(O));
        {
          let J = /* @__PURE__ */ N(() => u(c).refType ? [u(c).refType] : []);
          at(M, {
            get items() {
              return Im;
            },
            style: "width: 100%",
            defaultValue: ["ref"],
            get value() {
              return u(J);
            },
            onSelect: m
          });
        }
        R(O);
        var Z = H(O, 2);
        {
          var U = (J) => {
            var G = Ay(), ne = H(B(G));
            {
              let ee = /* @__PURE__ */ N(() => u(c).contentType ? [u(c).contentType] : []);
              at(ne, {
                get items() {
                  return va;
                },
                style: "width: 100%",
                defaultValue: ["text"],
                get value() {
                  return u(ee);
                },
                onSelect: y
              });
            }
            R(G), D(J, G);
          };
          se(Z, (J) => {
            s() && J(U);
          });
        }
        var L = H(Z, 2), W = H(B(L));
        Re(W, {
          rows: 1,
          style: "width: 100%;",
          onchange: (J) => {
            f("defaultValue", J);
          },
          get value() {
            return u(c).defaultValue;
          },
          placeholder: "请输入参数默认值"
        }), R(L);
        var K = H(L, 2), q = H(B(K));
        Re(q, {
          rows: 3,
          style: "width: 100%;",
          onchange: (J) => {
            f("description", J);
          },
          get value() {
            return u(c).description;
          },
          placeholder: "请输入参数描述"
        }), R(K);
        var j = H(K, 2), F = B(j);
        De(F, {
          onclick: _,
          children: (J, G) => {
            pe();
            var ne = ke("删除");
            D(J, ne);
          },
          $$slots: { default: !0 }
        }), R(j), R(C), D(x, C);
      },
      children: (x, C) => {
        Mo(x, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (x) => w = x,
    () => w
  ), R(z), D(e, b), de(E);
}
ae(
  jd,
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
var Ly = /* @__PURE__ */ te('<div class="input-header svelte-32f1pk">参数名称</div> <div class="input-header svelte-32f1pk">参数值</div> <div class="input-header svelte-32f1pk"></div>', 1), Vy = /* @__PURE__ */ te('<div class="none-params svelte-32f1pk"> </div>'), Iy = /* @__PURE__ */ te('<div class="input-container svelte-32f1pk"><!> <!></div>');
const zy = {
  hash: "svelte-32f1pk",
  code: `.input-container.svelte-32f1pk {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-32f1pk .none-params:where(.svelte-32f1pk) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-32f1pk .input-header:where(.svelte-32f1pk) {font-size:12px;color:#666;}`
};
function bt(e, t) {
  ue(t, !0), ze(e, zy);
  const n = p(t, "noneParameterText", 7, "无输入参数"), r = p(t, "dataKeyName", 7, "parameters"), o = p(t, "useChildrenOnly", 7), i = p(t, "showContentType", 7, !1);
  let s = Ge(), a = Vn(s), l = /* @__PURE__ */ N(() => [...a?.current?.data?.[r()] || []]);
  var c = {
    get noneParameterText() {
      return n();
    },
    set noneParameterText(m = "无输入参数") {
      n(m), v();
    },
    get dataKeyName() {
      return r();
    },
    set dataKeyName(m = "parameters") {
      r(m), v();
    },
    get useChildrenOnly() {
      return o();
    },
    set useChildrenOnly(m) {
      o(m), v();
    },
    get showContentType() {
      return i();
    },
    set showContentType(m = !1) {
      i(m), v();
    }
  }, d = Iy(), h = B(d);
  {
    var f = (m) => {
      var y = Ly();
      pe(4), D(m, y);
    };
    se(h, (m) => {
      u(l).length !== 0 && m(f);
    });
  }
  var g = H(h, 2);
  return mt(
    g,
    19,
    () => u(l),
    (m) => m.id,
    (m, y, w) => {
      jd(m, {
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
      var y = Vy(), w = B(y, !0);
      R(y), Ce(() => Fe(w, n())), D(m, y);
    }
  ), R(d), D(e, d), de(c);
}
ae(
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
var Ry = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), By = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Fy = /* @__PURE__ */ te('<div class="heading svelte-1fiuxu3"><!> <!></div> <!>', 1);
const Ky = {
  hash: "svelte-1fiuxu3",
  code: ".heading.svelte-1fiuxu3 {display:flex;margin-bottom:10px;}"
};
function qd(e, t) {
  ue(t, !0), ze(e, Ky);
  const n = p(t, "data", 7), r = /* @__PURE__ */ Be(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Ge(), { addParameter: i } = sn();
  var s = {
    get data() {
      return n();
    },
    set data(a) {
      n(a), v();
    }
  };
  return Wt(e, Ke(
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
        var c = Ry();
        D(l, c);
      },
      children: (l, c) => {
        var d = Fy(), h = ie(d), f = B(h);
        Ae(f, {
          level: 3,
          children: (y, w) => {
            pe();
            var _ = ke("输出参数");
            D(y, _);
          },
          $$slots: { default: !0 }
        });
        var g = H(f, 2);
        De(g, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs", { name: "output" });
          },
          children: (y, w) => {
            var _ = By();
            D(y, _);
          },
          $$slots: { default: !0 }
        }), R(h);
        var m = H(h, 2);
        bt(m, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs",
          showContentType: !0
        }), D(l, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), de(s);
}
ae(qd, { data: {} }, [], [], !0);
const os = (e) => JSON.parse(JSON.stringify(e));
var Zy = /* @__PURE__ */ ve('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), Yy = /* @__PURE__ */ te('<div class="input-more-item svelte-hwmib9"><!></div>'), Wy = /* @__PURE__ */ te('<div class="input-more-setting svelte-hwmib9"><div class="input-more-item svelte-hwmib9">默认值： <!></div> <div class="input-more-item svelte-hwmib9">参数描述： <!></div> <!></div>'), Xy = /* @__PURE__ */ te('<div class="input-item svelte-hwmib9"><!> <!></div> <div class="input-item svelte-hwmib9"><!> <!></div> <div class="input-item svelte-hwmib9"><!></div>', 1);
const jy = {
  hash: "svelte-hwmib9",
  code: ".input-item.svelte-hwmib9 {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-hwmib9 {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-hwmib9 .input-more-item:where(.svelte-hwmib9) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Gd(e, t) {
  ue(t, !0), ze(e, jy);
  const n = p(t, "parameter", 7), r = p(t, "position", 7), o = p(t, "dataKeyName", 7), i = p(t, "placeholder", 7, "请输入参数值");
  let s = Ge(), a = Vn(s), l = /* @__PURE__ */ N(() => {
    let S = a?.current?.data?.[o()], T;
    if (S && r().length > 0) {
      let x = S;
      for (let C = 0; C < r().length; C++) {
        const O = r()[C];
        C == r().length - 1 ? T = x[O] : x = x[O].children;
      }
    }
    return { ...n(), ...T };
  });
  const { updateNodeData: c } = ot(), d = (S, T) => {
    c(s, (x) => {
      const C = x.data?.[o()];
      if (C && r().length > 0) {
        let O = C;
        for (let M = 0; M < r().length; M++) {
          const Z = r()[M];
          M == r().length - 1 ? O[Z] = { ...O[Z], [S]: T } : O = O[Z].children;
        }
      }
      return { [o()]: [...os(C)] };
    });
  }, h = (S, T) => {
    const x = T.target.value;
    d(S, x);
  }, f = (S) => {
    const T = S.value;
    d("dataType", T);
  };
  let g;
  const m = () => {
    c(s, (S) => {
      let T = S.data?.[o()];
      if (T && r().length > 0) {
        let x = T;
        for (let C = 0; C < r().length; C++) {
          const O = r()[C];
          C == r().length - 1 ? x.splice(O, 1) : x = x[O].children;
        }
      }
      return { [o()]: [...os(T)] };
    }), g?.hide();
  }, y = () => {
    c(s, (S) => {
      let T = S.data?.[o()];
      if (T && r().length > 0) {
        let x = T;
        for (let C = 0; C < r().length; C++) {
          const O = r()[C];
          C == r().length - 1 ? x[O].children ? x[O].children.push({ id: Dn(), name: "newParam", dataType: "String" }) : x[O].children = [{ id: Dn(), name: "newParam", dataType: "String" }] : x = x[O].children;
        }
      }
      return { [o()]: [...os(T)] };
    });
  };
  var w = {
    get parameter() {
      return n();
    },
    set parameter(S) {
      n(S), v();
    },
    get position() {
      return r();
    },
    set position(S) {
      r(S), v();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(S) {
      o(S), v();
    },
    get placeholder() {
      return i();
    },
    set placeholder(S = "请输入参数值") {
      i(S), v();
    }
  }, _ = Xy(), k = ie(_), E = B(k);
  {
    var b = (S) => {
      var T = Ee(), x = ie(T);
      mt(x, 17, r, Ar, (C, O) => {
        pe();
        var M = ke(" ");
        D(C, M);
      }), D(S, T);
    };
    se(E, (S) => {
      r().length > 1 && S(b);
    });
  }
  var P = H(E, 2);
  {
    let S = /* @__PURE__ */ N(() => u(l).nameDisabled === !0);
    Ue(P, {
      style: "width: 100%;",
      get value() {
        return u(l).name;
      },
      get placeholder() {
        return i();
      },
      oninput: (T) => {
        h("name", T);
      },
      get disabled() {
        return u(S);
      }
    });
  }
  R(k);
  var $ = H(k, 2), A = B($);
  {
    let S = /* @__PURE__ */ N(() => u(l).dataTypeItems || Vm), T = /* @__PURE__ */ N(() => u(l).dataType ? [u(l).dataType] : []), x = /* @__PURE__ */ N(() => u(l).dataTypeDisabled === !0);
    at(A, {
      get items() {
        return u(S);
      },
      style: "width: 100%",
      defaultValue: ["String"],
      get value() {
        return u(T);
      },
      get disabled() {
        return u(x);
      },
      onSelect: f
    });
  }
  var I = H(A, 2);
  {
    var V = (S) => {
      De(S, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: y,
        children: (T, x) => {
          var C = Zy();
          D(T, C);
        },
        $$slots: { default: !0 }
      });
    };
    se(I, (S) => {
      (u(l).dataType === "Object" || u(l).dataType === "Array") && u(l).addChildDisabled !== !0 && S(V);
    });
  }
  R($);
  var Y = H($, 2), z = B(Y);
  return Ot(
    nr(z, {
      placement: "bottom",
      floating: (T) => {
        var x = Wy(), C = B(x), O = H(B(C));
        {
          let W = /* @__PURE__ */ N(() => u(l).defaultValue || "");
          Re(O, {
            rows: 1,
            style: "width: 100%;",
            get value() {
              return u(W);
            },
            onchange: (K) => {
              h("defaultValue", K);
            }
          });
        }
        R(C);
        var M = H(C, 2), Z = H(B(M));
        {
          let W = /* @__PURE__ */ N(() => u(l).description || "");
          Re(Z, {
            rows: 3,
            style: "width: 100%;",
            get value() {
              return u(W);
            },
            onchange: (K) => {
              h("description", K);
            }
          });
        }
        R(M);
        var U = H(M, 2);
        {
          var L = (W) => {
            var K = Yy(), q = B(K);
            De(q, {
              onclick: m,
              children: (j, F) => {
                pe();
                var J = ke("删除");
                D(j, J);
              },
              $$slots: { default: !0 }
            }), R(K), D(W, K);
          };
          se(U, (W) => {
            u(l).deleteDisabled !== !0 && W(L);
          });
        }
        R(x), D(T, x);
      },
      children: (T, x) => {
        Mo(T, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (T) => g = T,
    () => g
  ), R(Y), D(e, _), de(w);
}
ae(
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
var qy = /* @__PURE__ */ te("<!> <!>", 1), Gy = /* @__PURE__ */ te('<div class="none-params svelte-1oz5kx0"> </div>'), Uy = /* @__PURE__ */ te('<div class="input-header svelte-1oz5kx0">参数名称</div> <div class="input-header svelte-1oz5kx0">参数类型</div> <div class="input-header svelte-1oz5kx0"></div>', 1), Jy = /* @__PURE__ */ te('<div class="input-container svelte-1oz5kx0"><!> <!></div>');
const Qy = {
  hash: "svelte-1oz5kx0",
  code: `.input-container.svelte-1oz5kx0 {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1oz5kx0 .none-params:where(.svelte-1oz5kx0) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1oz5kx0 .input-header:where(.svelte-1oz5kx0) {font-size:12px;color:#666;}`
};
function zn(e, t) {
  ue(t, !0), ze(e, Qy);
  const n = (m, y = pt, w = pt) => {
    var _ = Ee(), k = ie(_);
    mt(
      k,
      19,
      y,
      (E) => `${E.id}_${E.children ? E.children.length : 0}`,
      (E, b, P) => {
        var $ = qy(), A = ie($);
        {
          let Y = /* @__PURE__ */ N(() => [...w(), u(P)]);
          Gd(A, {
            get parameter() {
              return u(b);
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
        var I = H(A, 2);
        {
          var V = (Y) => {
            {
              let z = /* @__PURE__ */ N(() => [...w(), u(P)]);
              n(Y, () => u(b).children, () => u(z));
            }
          };
          se(I, (Y) => {
            u(b).children && Y(V);
          });
        }
        D(E, $);
      },
      (E) => {
        var b = Ee(), P = ie(b);
        {
          var $ = (A) => {
            var I = Gy(), V = B(I, !0);
            R(I), Ce(() => Fe(V, r())), D(A, I);
          };
          se(P, (A) => {
            w().length === 0 && A($);
          });
        }
        D(E, b);
      }
    ), D(m, _);
  }, r = p(t, "noneParameterText", 7, "无输出参数"), o = p(t, "dataKeyName", 7, "outputDefs"), i = p(t, "placeholder", 7, "请输入参数名称");
  let s = Ge(), a = Vn(s), l = /* @__PURE__ */ N(() => [...a?.current?.data?.[o()] || []]);
  var c = {
    get noneParameterText() {
      return r();
    },
    set noneParameterText(m = "无输出参数") {
      r(m), v();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(m = "outputDefs") {
      o(m), v();
    },
    get placeholder() {
      return i();
    },
    set placeholder(m = "请输入参数名称") {
      i(m), v();
    }
  }, d = Jy(), h = B(d);
  {
    var f = (m) => {
      var y = Uy();
      pe(4), D(m, y);
    };
    se(h, (m) => {
      u(l).length !== 0 && m(f);
    });
  }
  var g = H(h, 2);
  return n(g, () => u(l) || [], () => []), R(d), D(e, d), de(c);
}
ae(zn, { noneParameterText: {}, dataKeyName: {}, placeholder: {} }, [], [], !0);
var ew = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), tw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), nw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), rw = /* @__PURE__ */ te('<div class="llm-setting svelte-j81vcl"><div class="setting-title svelte-j81vcl">采样参数</div> <div class="setting-item svelte-j81vcl"><div class="slider-container svelte-j81vcl"><span class="svelte-j81vcl"> </span> <input class="nodrag svelte-j81vcl" type="range" min="0" max="1" step="0.1"/></div></div> <div class="setting-item svelte-j81vcl"><div class="slider-container svelte-j81vcl"><span class="svelte-j81vcl"> </span> <input class="nodrag svelte-j81vcl" type="range" min="0" max="1" step="0.1"/></div></div> <div class="setting-item svelte-j81vcl"><div class="slider-container svelte-j81vcl"><span class="svelte-j81vcl"> </span> <input class="nodrag svelte-j81vcl" type="range" min="0" max="100" step="1"/></div></div></div>'), ow = /* @__PURE__ */ te('<div class="setting-title svelte-j81vcl">JSON Schema</div> <div class="setting-item svelte-j81vcl"><!></div>', 1), iw = /* @__PURE__ */ te('<div class="heading svelte-j81vcl"><!> <!></div> <!> <div class="heading svelte-j81vcl" style="padding-top: 10px"><!> <!></div> <!> <!> <div class="setting-title svelte-j81vcl">模型</div> <div class="setting-item svelte-j81vcl"><!> <!></div> <div class="setting-title svelte-j81vcl">系统提示词</div> <div class="setting-item svelte-j81vcl"><!></div> <div class="setting-title svelte-j81vcl">用户提示词</div> <div class="setting-item svelte-j81vcl"><!></div> <!> <div class="heading svelte-j81vcl"><!> <!></div> <!>', 1);
const sw = {
  hash: "svelte-j81vcl",
  code: `.heading.svelte-j81vcl {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-j81vcl {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-j81vcl {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-j81vcl {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-j81vcl span:where(.svelte-j81vcl) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}.llm-setting.svelte-j81vcl {width:200px;background:#fff;padding:10px;border-radius:5px;box-shadow:0 0 10px rgba(0, 0, 0, 0.1);border:1px solid #ddd;}input[type="range"].svelte-j81vcl {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-j81vcl::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function Ud(e, t) {
  ue(t, !0), ze(e, sw);
  const n = p(t, "data", 7), r = /* @__PURE__ */ Be(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Ge(), { addParameter: i } = sn(), s = Un();
  let a = /* @__PURE__ */ Ne(Kt([]));
  Hn(async () => {
    const h = await s.provider?.llm?.();
    u(a).push(...h || []);
  });
  const { updateNodeData: l } = ot(), c = (h) => {
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
  Xe(() => {
    n().outType || c("text");
  });
  var d = {
    get data() {
      return n();
    },
    set data(h) {
      n(h), v();
    }
  };
  return Wt(e, Ke(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (f) => {
        var g = ew();
        D(f, g);
      },
      children: (f, g) => {
        var m = iw(), y = ie(m), w = B(y);
        Ae(w, {
          level: 3,
          children: (W, K) => {
            pe();
            var q = ke("输入参数");
            D(W, q);
          },
          $$slots: { default: !0 }
        });
        var _ = H(w, 2);
        De(_, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (W, K) => {
            var q = tw();
            D(W, q);
          },
          $$slots: { default: !0 }
        }), R(y);
        var k = H(y, 2);
        bt(k, {});
        var E = H(k, 2), b = B(E);
        Ae(b, {
          level: 3,
          children: (W, K) => {
            pe();
            var q = ke("图片识别");
            D(W, q);
          },
          $$slots: { default: !0 }
        });
        var P = H(b, 2);
        De(P, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "images");
          },
          children: (W, K) => {
            var q = nw();
            D(W, q);
          },
          $$slots: { default: !0 }
        }), R(E);
        var $ = H(E, 2);
        bt($, { dataKeyName: "images", noneParameterText: "无图片参数" });
        var A = H($, 2);
        Ae(A, {
          level: 3,
          mt: "10px",
          children: (W, K) => {
            pe();
            var q = ke("模型设置");
            D(W, q);
          },
          $$slots: { default: !0 }
        });
        var I = H(A, 4), V = B(I);
        {
          let W = /* @__PURE__ */ N(() => n().llmId ? [n().llmId] : []);
          at(V, {
            get items() {
              return u(a);
            },
            style: "width: 100%",
            placeholder: "请选择模型",
            onSelect: (K) => {
              const q = K.value;
              l(o, () => ({ llmId: q }));
            },
            get value() {
              return u(W);
            }
          });
        }
        var Y = H(V, 2);
        nr(Y, {
          placement: "bottom",
          floating: (K) => {
            var q = rw(), j = H(B(q), 2), F = B(j), J = B(F), G = B(J);
            R(J);
            var ne = H(J, 2);
            Wn(ne), ne.__input = (Se) => l(o, { temperature: parseFloat(Se.target.value) }), R(F), R(j);
            var ee = H(j, 2), we = B(ee), oe = B(we), le = B(oe);
            R(oe);
            var re = H(oe, 2);
            Wn(re), re.__input = (Se) => l(o, { topP: parseFloat(Se.target.value) }), R(we), R(ee);
            var he = H(ee, 2), ge = B(he), _e = B(ge), fe = B(_e);
            R(_e);
            var me = H(_e, 2);
            Wn(me), me.__input = (Se) => l(o, { topK: parseInt(Se.target.value) }), R(ge), R(he), R(q), Ce(() => {
              Fe(G, `Temperature: ${n().temperature ?? 0.5 ?? ""}`), Zo(ne, n().temperature ?? 0.5), Fe(le, `Top P: ${n().topP ?? 0.9 ?? ""}`), Zo(re, n().topP ?? 0.9), Fe(fe, `Top K: ${n().topK ?? 50 ?? ""}`), Zo(me, n().topK ?? 50);
            }), D(K, q);
          },
          children: (K, q) => {
            Mo(K, {});
          },
          $$slots: { floating: !0, default: !0 }
        }), R(I);
        var z = H(I, 4), S = B(z);
        {
          let W = /* @__PURE__ */ N(() => n().systemPrompt || "");
          Re(S, {
            rows: 5,
            placeholder: "请输入系统提示词",
            style: "width: 100%",
            get value() {
              return u(W);
            },
            oninput: (K) => {
              l(o, { systemPrompt: K.target.value });
            }
          });
        }
        R(z);
        var T = H(z, 4), x = B(T);
        {
          let W = /* @__PURE__ */ N(() => n().userPrompt || "");
          Re(x, {
            rows: 5,
            placeholder: "请输入用户提示词",
            style: "width: 100%",
            get value() {
              return u(W);
            },
            oninput: (K) => {
              l(o, { userPrompt: K.target.value });
            }
          });
        }
        R(T);
        var C = H(T, 2);
        {
          var O = (W) => {
            var K = ow(), q = H(ie(K), 2), j = B(q);
            {
              let F = /* @__PURE__ */ N(() => n().jsonSchema || "");
              Re(j, {
                rows: 5,
                placeholder: "请输入 SON Schema",
                style: "width: 100%",
                get value() {
                  return u(F);
                },
                oninput: (J) => {
                  l(o, { jsonSchema: J.target.value });
                }
              });
            }
            R(q), D(W, K);
          };
          se(C, (W) => {
            n().outType === "json" && W(O);
          });
        }
        var M = H(C, 2), Z = B(M);
        Ae(Z, {
          level: 3,
          children: (W, K) => {
            pe();
            var q = ke("输出参数");
            D(W, q);
          },
          $$slots: { default: !0 }
        });
        var U = H(Z, 2);
        {
          let W = /* @__PURE__ */ N(() => n().outType ? [n().outType] : []);
          at(U, {
            items: [
              { label: "文本", value: "text" },
              { label: "JSON", value: "json" }
            ],
            style: "width: 100px;margin-left: auto",
            onSelect: (K) => {
              c(K.value);
            },
            get value() {
              return u(W);
            }
          });
        }
        R(M);
        var L = H(M, 2);
        zn(L, {}), D(f, m);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), de(d);
}
er(["input"]);
ae(Ud, { data: {} }, [], [], !0);
var aw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), lw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), cw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), uw = /* @__PURE__ */ te('<div class="heading svelte-1wcsayx"><!> <!></div> <!> <!> <div class="setting-title svelte-1wcsayx">执行引擎</div> <div class="setting-item svelte-1wcsayx"><!></div> <div class="setting-title svelte-1wcsayx">执行代码</div> <div class="setting-item svelte-1wcsayx"><!></div> <div class="heading svelte-1wcsayx"><!> <!></div> <!>', 1);
const dw = {
  hash: "svelte-1wcsayx",
  code: ".heading.svelte-1wcsayx {display:flex;margin-bottom:10px;}.setting-title.svelte-1wcsayx {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-1wcsayx {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Jd(e, t) {
  ue(t, !0), ze(e, dw);
  const n = p(t, "data", 7), r = /* @__PURE__ */ Be(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]);
  Hn(() => {
    n().engine || s(o, () => ({ engine: "qlexpress" }));
  });
  const o = Ge(), { addParameter: i } = sn(), { updateNodeData: s } = ot(), a = [
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
  return Wt(e, Ke(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (d) => {
        var h = aw();
        D(d, h);
      },
      children: (d, h) => {
        var f = uw(), g = ie(f), m = B(g);
        Ae(m, {
          level: 3,
          children: (Y, z) => {
            pe();
            var S = ke("输入参数");
            D(Y, S);
          },
          $$slots: { default: !0 }
        });
        var y = H(m, 2);
        De(y, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (Y, z) => {
            var S = lw();
            D(Y, S);
          },
          $$slots: { default: !0 }
        }), R(g);
        var w = H(g, 2);
        bt(w, {});
        var _ = H(w, 2);
        Ae(_, {
          level: 3,
          mt: "10px",
          children: (Y, z) => {
            pe();
            var S = ke("代码");
            D(Y, S);
          },
          $$slots: { default: !0 }
        });
        var k = H(_, 4), E = B(k);
        {
          let Y = /* @__PURE__ */ N(() => n().engine ? [n().engine] : ["qlexpress"]);
          at(E, {
            get items() {
              return a;
            },
            style: "width: 100%",
            placeholder: "请选择执行引擎",
            onSelect: (z) => {
              const S = z.value;
              s(o, () => ({ engine: S }));
            },
            get value() {
              return u(Y);
            }
          });
        }
        R(k);
        var b = H(k, 4), P = B(b);
        {
          let Y = /* @__PURE__ */ N(() => n().code || "");
          Re(P, {
            rows: 10,
            placeholder: "请输入执行代码，注：输出内容需添加到_result中，如：_result['key'] = value 或者 _result.key = value",
            style: "width: 100%",
            onchange: (z) => {
              s(o, () => ({ code: z.target.value }));
            },
            get value() {
              return u(Y);
            }
          });
        }
        R(b);
        var $ = H(b, 2), A = B($);
        Ae(A, {
          level: 3,
          mt: "10px",
          children: (Y, z) => {
            pe();
            var S = ke("输出参数");
            D(Y, S);
          },
          $$slots: { default: !0 }
        });
        var I = H(A, 2);
        De(I, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (Y, z) => {
            var S = cw();
            D(Y, S);
          },
          $$slots: { default: !0 }
        }), R($);
        var V = H($, 2);
        zn(V, {}), D(d, f);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), de(l);
}
ae(Jd, { data: {} }, [], [], !0);
var fw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>'), hw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), gw = /* @__PURE__ */ te('<div class="heading svelte-1lcrzpc"><!> <!></div> <!> <!> <div class="setting-item svelte-1lcrzpc"><!></div> <div class="heading svelte-1lcrzpc"><!></div> <!>', 1);
const vw = {
  hash: "svelte-1lcrzpc",
  code: ".heading.svelte-1lcrzpc {display:flex;margin-bottom:10px;}.setting-item.svelte-1lcrzpc {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Qd(e, t) {
  ue(t, !0), ze(e, vw);
  const n = p(t, "data", 7), r = /* @__PURE__ */ Be(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Ge(), { addParameter: i } = sn(), { updateNodeData: s } = ot();
  Xe(() => {
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
  return Wt(e, Ke(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (c) => {
        var d = fw();
        D(c, d);
      },
      children: (c, d) => {
        var h = gw(), f = ie(h), g = B(f);
        Ae(g, {
          level: 3,
          children: ($, A) => {
            pe();
            var I = ke("输入参数");
            D($, I);
          },
          $$slots: { default: !0 }
        });
        var m = H(g, 2);
        De(m, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: ($, A) => {
            var I = hw();
            D($, I);
          },
          $$slots: { default: !0 }
        }), R(f);
        var y = H(f, 2);
        bt(y, {});
        var w = H(y, 2);
        Ae(w, {
          level: 3,
          mt: "10px",
          mb: "10px",
          children: ($, A) => {
            pe();
            var I = ke("模板内容");
            D($, I);
          },
          $$slots: { default: !0 }
        });
        var _ = H(w, 2), k = B(_);
        {
          let $ = /* @__PURE__ */ N(() => n().template || "");
          Re(k, {
            rows: 10,
            placeholder: "请输入模板内容",
            style: "width: 100%",
            onchange: (A) => {
              s(o, () => ({ template: A.target.value }));
            },
            get value() {
              return u($);
            }
          });
        }
        R(_);
        var E = H(_, 2), b = B(E);
        Ae(b, {
          level: 3,
          mt: "10px",
          children: ($, A) => {
            pe();
            var I = ke("输出参数");
            D($, I);
          },
          $$slots: { default: !0 }
        }), R(E);
        var P = H(E, 2);
        zn(P, {}), D(c, h);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), de(a);
}
ae(Qd, { data: {} }, [], [], !0);
var pw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), mw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), yw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), ww = /* @__PURE__ */ te('<!> <div class="radio-group svelte-19uflw6"><label class="svelte-19uflw6"><!>none</label> <label class="svelte-19uflw6"><!>form-data</label> <label class="svelte-19uflw6"><!>x-www-form-urlencoded</label> <label class="svelte-19uflw6"><!>json</label> <label class="svelte-19uflw6"><!>raw</label></div>', 1), _w = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), xw = /* @__PURE__ */ te('<div class="heading svelte-19uflw6" style="padding-top: 10px"><!> <!></div> <!>', 1), bw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Cw = /* @__PURE__ */ te('<div class="heading svelte-19uflw6" style="padding-top: 10px"><!> <!></div> <!>', 1), kw = /* @__PURE__ */ te('<div style="width: 100%"><!></div>'), Ew = /* @__PURE__ */ te('<div style="width: 100%"><!></div>'), Sw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Nw = /* @__PURE__ */ te('<div class="heading svelte-19uflw6"><!> <!></div> <!> <!> <div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-19uflw6"><!> <!></div> <!> <!> <!> <!> <!> <!> <div class="heading svelte-19uflw6"><!> <!></div> <!>', 1);
const Pw = {
  hash: "svelte-19uflw6",
  code: ".heading.svelte-19uflw6 {display:flex;margin-bottom:10px;}.radio-group.svelte-19uflw6 {display:flex;margin:10px 0;flex-wrap:wrap;}.radio-group.svelte-19uflw6 label:where(.svelte-19uflw6) {display:flex;font-size:14px;box-sizing:border-box;}"
};
function ef(e, t) {
  ue(t, !0), ze(e, Pw);
  const n = p(t, "data", 7), r = /* @__PURE__ */ Be(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]);
  Hn(() => {
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
  ], i = Ge(), { addParameter: s } = sn(), { updateNodeData: a } = ot();
  var l = {
    get data() {
      return n();
    },
    set data(c) {
      n(c), v();
    }
  };
  return Wt(e, Ke(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (d) => {
        var h = pw();
        D(d, h);
      },
      children: (d, h) => {
        var f = Nw(), g = ie(f), m = B(g);
        Ae(m, {
          level: 3,
          children: (F, J) => {
            pe();
            var G = ke("输入参数");
            D(F, G);
          },
          $$slots: { default: !0 }
        });
        var y = H(m, 2);
        De(y, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i);
          },
          children: (F, J) => {
            var G = mw();
            D(F, G);
          },
          $$slots: { default: !0 }
        }), R(g);
        var w = H(g, 2);
        bt(w, {});
        var _ = H(w, 2);
        Ae(_, {
          level: 3,
          mt: "10px",
          children: (F, J) => {
            pe();
            var G = ke("URL 地址");
            D(F, G);
          },
          $$slots: { default: !0 }
        });
        var k = H(_, 2), E = B(k), b = B(E);
        {
          let F = /* @__PURE__ */ N(() => n().method ? [n().method] : ["get"]);
          at(b, {
            get items() {
              return o;
            },
            style: "width: 100%",
            placeholder: "请选择请求方式",
            onSelect: (J) => {
              const G = J.value;
              a(i, () => ({ method: G }));
            },
            get value() {
              return u(F);
            }
          });
        }
        R(E);
        var P = H(E, 2), $ = B(P);
        {
          let F = /* @__PURE__ */ N(() => n().url || "");
          Ue($, {
            placeholder: "请输入url",
            style: "width: 100%",
            onchange: (J) => {
              a(i, () => ({ url: J.target.value }));
            },
            get value() {
              return u(F);
            }
          });
        }
        R(P), R(k);
        var A = H(k, 2), I = B(A);
        Ae(I, {
          level: 3,
          children: (F, J) => {
            pe();
            var G = ke("Http 头信息");
            D(F, G);
          },
          $$slots: { default: !0 }
        });
        var V = H(I, 2);
        De(V, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "headers");
          },
          children: (F, J) => {
            var G = yw();
            D(F, G);
          },
          $$slots: { default: !0 }
        }), R(A);
        var Y = H(A, 2);
        bt(Y, { dataKeyName: "headers" });
        var z = H(Y, 2);
        {
          var S = (F) => {
            var J = ww(), G = ie(J);
            Ae(G, {
              level: 3,
              mt: "10px",
              children: (Se, X) => {
                pe();
                var We = ke("Body");
                D(Se, We);
              },
              $$slots: { default: !0 }
            });
            var ne = H(G, 2), ee = B(ne), we = B(ee);
            {
              let Se = /* @__PURE__ */ N(() => !n().bodyType || n().bodyType === "");
              Ue(we, {
                type: "radio",
                value: "",
                get checked() {
                  return u(Se);
                },
                onchange: (X) => {
                  X.target?.checked && a(i, { bodyType: "" });
                }
              });
            }
            pe(), R(ee);
            var oe = H(ee, 2), le = B(oe);
            {
              let Se = /* @__PURE__ */ N(() => n().bodyType === "form-data");
              Ue(le, {
                type: "radio",
                value: "form-data",
                get checked() {
                  return u(Se);
                },
                onchange: (X) => {
                  X.target?.checked && a(i, { bodyType: "form-data" });
                }
              });
            }
            pe(), R(oe);
            var re = H(oe, 2), he = B(re);
            {
              let Se = /* @__PURE__ */ N(() => n().bodyType === "x-www-form-urlencoded");
              Ue(he, {
                type: "radio",
                value: "x-www-form-urlencoded",
                get checked() {
                  return u(Se);
                },
                onchange: (X) => {
                  X.target?.checked && a(i, { bodyType: "x-www-form-urlencoded" });
                }
              });
            }
            pe(), R(re);
            var ge = H(re, 2), _e = B(ge);
            {
              let Se = /* @__PURE__ */ N(() => n().bodyType === "json");
              Ue(_e, {
                type: "radio",
                value: "json",
                get checked() {
                  return u(Se);
                },
                onchange: (X) => {
                  X.target?.checked && a(i, { bodyType: "json" });
                }
              });
            }
            pe(), R(ge);
            var fe = H(ge, 2), me = B(fe);
            {
              let Se = /* @__PURE__ */ N(() => n().bodyType === "raw");
              Ue(me, {
                type: "radio",
                value: "raw",
                get checked() {
                  return u(Se);
                },
                onchange: (X) => {
                  X.target?.checked && a(i, { bodyType: "raw" });
                }
              });
            }
            pe(), R(fe), R(ne), D(F, J);
          };
          se(z, (F) => {
            (n().method === "post" || n().method === "put" || n().method === "delete" || n().method === "patch") && F(S);
          });
        }
        var T = H(z, 2);
        {
          var x = (F) => {
            var J = xw(), G = ie(J), ne = B(G);
            Ae(ne, {
              level: 3,
              children: (oe, le) => {
                pe();
                var re = ke("参数");
                D(oe, re);
              },
              $$slots: { default: !0 }
            });
            var ee = H(ne, 2);
            De(ee, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formData");
              },
              children: (oe, le) => {
                var re = _w();
                D(oe, re);
              },
              $$slots: { default: !0 }
            }), R(G);
            var we = H(G, 2);
            bt(we, { dataKeyName: "formData" }), D(F, J);
          };
          se(T, (F) => {
            n().bodyType === "form-data" && F(x);
          });
        }
        var C = H(T, 2);
        {
          var O = (F) => {
            var J = Cw(), G = ie(J), ne = B(G);
            Ae(ne, {
              level: 3,
              children: (oe, le) => {
                pe();
                var re = ke("Body 参数");
                D(oe, re);
              },
              $$slots: { default: !0 }
            });
            var ee = H(ne, 2);
            De(ee, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formUrlencoded");
              },
              children: (oe, le) => {
                var re = bw();
                D(oe, re);
              },
              $$slots: { default: !0 }
            }), R(G);
            var we = H(G, 2);
            bt(we, { dataKeyName: "formUrlencoded" }), D(F, J);
          };
          se(C, (F) => {
            n().bodyType === "x-www-form-urlencoded" && F(O);
          });
        }
        var M = H(C, 2);
        {
          var Z = (F) => {
            var J = kw(), G = B(J);
            Re(G, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入 json 信息",
              get value() {
                return n().bodyJson;
              },
              oninput: (ne) => {
                a(i, { bodyJson: ne.target.value });
              }
            }), R(J), D(F, J);
          };
          se(M, (F) => {
            n().bodyType === "json" && F(Z);
          });
        }
        var U = H(M, 2);
        {
          var L = (F) => {
            var J = Ew(), G = B(J);
            Re(G, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入请求信息",
              get value() {
                return n().bodyRaw;
              },
              oninput: (ne) => {
                a(i, { bodyRaw: ne.target.value });
              }
            }), R(J), D(F, J);
          };
          se(U, (F) => {
            n().bodyType === "raw" && F(L);
          });
        }
        var W = H(U, 2), K = B(W);
        Ae(K, {
          level: 3,
          mt: "10px",
          children: (F, J) => {
            pe();
            var G = ke("输出参数");
            D(F, G);
          },
          $$slots: { default: !0 }
        });
        var q = H(K, 2);
        De(q, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "outputDefs");
          },
          children: (F, J) => {
            var G = Sw();
            D(F, G);
          },
          $$slots: { default: !0 }
        }), R(W);
        var j = H(W, 2);
        zn(j, {}), D(d, f);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), de(l);
}
ae(ef, { data: {} }, [], [], !0);
var $w = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>'), Tw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Dw = /* @__PURE__ */ te('<div class="heading svelte-ddi5i"><!> <!></div> <!> <!> <div class="setting-title svelte-ddi5i">知识库</div> <div class="setting-item svelte-ddi5i"><!></div> <div class="setting-title svelte-ddi5i">关键字</div> <div class="setting-item svelte-ddi5i"><!></div> <div class="setting-title svelte-ddi5i">获取数据量</div> <div class="setting-item svelte-ddi5i"><!></div> <div class="heading svelte-ddi5i"><!></div> <!>', 1);
const Aw = {
  hash: "svelte-ddi5i",
  code: ".heading.svelte-ddi5i {display:flex;margin-bottom:10px;}.setting-title.svelte-ddi5i {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-ddi5i {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function tf(e, t) {
  ue(t, !0), ze(e, Aw);
  const n = p(t, "data", 7), r = /* @__PURE__ */ Be(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Ge(), { addParameter: i } = sn(), s = Un();
  let a = /* @__PURE__ */ Ne(Kt([]));
  Hn(async () => {
    const d = await s.provider?.knowledge?.();
    u(a).push(...d || []);
  });
  const { updateNodeData: l } = ot();
  Xe(() => {
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
  return Wt(e, Ke(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (h) => {
        var f = $w();
        D(h, f);
      },
      children: (h, f) => {
        var g = Dw(), m = ie(g), y = B(m);
        Ae(y, {
          level: 3,
          children: (S, T) => {
            pe();
            var x = ke("输入参数");
            D(S, x);
          },
          $$slots: { default: !0 }
        });
        var w = H(y, 2);
        De(w, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (S, T) => {
            var x = Tw();
            D(S, x);
          },
          $$slots: { default: !0 }
        }), R(m);
        var _ = H(m, 2);
        bt(_, {});
        var k = H(_, 2);
        Ae(k, {
          level: 3,
          mt: "10px",
          children: (S, T) => {
            pe();
            var x = ke("知识库设置");
            D(S, x);
          },
          $$slots: { default: !0 }
        });
        var E = H(k, 4), b = B(E);
        {
          let S = /* @__PURE__ */ N(() => n().knowledgeId ? [n().knowledgeId] : []);
          at(b, {
            get items() {
              return u(a);
            },
            style: "width: 100%",
            placeholder: "请选择知识库",
            onSelect: (T) => {
              const x = T.value;
              l(o, () => ({ knowledgeId: x }));
            },
            get value() {
              return u(S);
            }
          });
        }
        R(E);
        var P = H(E, 4), $ = B(P);
        Ue($, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (S) => {
            const T = S.target.value;
            l(o, () => ({ keyword: T }));
          }
        }), R(P);
        var A = H(P, 4), I = B(A);
        {
          let S = /* @__PURE__ */ N(() => n().limit || "");
          Ue(I, {
            placeholder: "搜索的数据条数",
            style: "width: 100%",
            onchange: (T) => {
              const x = T.target.value;
              l(o, () => ({ limit: x }));
            },
            get value() {
              return u(S);
            }
          });
        }
        R(A);
        var V = H(A, 2), Y = B(V);
        Ae(Y, {
          level: 3,
          mt: "10px",
          children: (S, T) => {
            pe();
            var x = ke("输出参数");
            D(S, x);
          },
          $$slots: { default: !0 }
        }), R(V);
        var z = H(V, 2);
        zn(z, {}), D(h, g);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), de(c);
}
ae(tf, { data: {} }, [], [], !0);
var Ow = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>'), Mw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Hw = /* @__PURE__ */ te('<div class="heading svelte-1qblm04"><!> <!></div> <!> <!> <div class="setting-title svelte-1qblm04">搜索引擎</div> <div class="setting-item svelte-1qblm04"><!></div> <div class="setting-title svelte-1qblm04">关键字</div> <div class="setting-item svelte-1qblm04"><!></div> <div class="setting-title svelte-1qblm04">搜索数据量</div> <div class="setting-item svelte-1qblm04"><!></div> <div class="heading svelte-1qblm04"><!></div> <!>', 1);
const Lw = {
  hash: "svelte-1qblm04",
  code: ".heading.svelte-1qblm04 {display:flex;margin-bottom:10px;}.setting-title.svelte-1qblm04 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-1qblm04 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function nf(e, t) {
  ue(t, !0), ze(e, Lw);
  const n = p(t, "data", 7), r = /* @__PURE__ */ Be(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Ge(), { addParameter: i } = sn(), s = Un();
  let a = /* @__PURE__ */ Ne(Kt([]));
  Hn(async () => {
    const d = await s.provider?.searchEngine?.();
    u(a).push(...d || []);
  });
  const { updateNodeData: l } = ot();
  Xe(() => {
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
  return Wt(e, Ke(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (h) => {
        var f = Ow();
        D(h, f);
      },
      children: (h, f) => {
        var g = Hw(), m = ie(g), y = B(m);
        Ae(y, {
          level: 3,
          children: (S, T) => {
            pe();
            var x = ke("输入参数");
            D(S, x);
          },
          $$slots: { default: !0 }
        });
        var w = H(y, 2);
        De(w, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (S, T) => {
            var x = Mw();
            D(S, x);
          },
          $$slots: { default: !0 }
        }), R(m);
        var _ = H(m, 2);
        bt(_, {});
        var k = H(_, 2);
        Ae(k, {
          level: 3,
          mt: "10px",
          children: (S, T) => {
            pe();
            var x = ke("搜索引擎设置");
            D(S, x);
          },
          $$slots: { default: !0 }
        });
        var E = H(k, 4), b = B(E);
        {
          let S = /* @__PURE__ */ N(() => n().engine ? [n().engine] : []);
          at(b, {
            get items() {
              return u(a);
            },
            style: "width: 100%",
            placeholder: "请选择搜索引擎",
            onSelect: (T) => {
              const x = T.value;
              l(o, () => ({ engine: x }));
            },
            get value() {
              return u(S);
            }
          });
        }
        R(E);
        var P = H(E, 4), $ = B(P);
        Ue($, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (S) => {
            const T = S.target.value;
            l(o, () => ({ keyword: T }));
          }
        }), R(P);
        var A = H(P, 4), I = B(A);
        Ue(I, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          get value() {
            return n().limit;
          },
          onchange: (S) => {
            const T = S.target.value;
            l(o, () => ({ limit: T }));
          }
        }), R(A);
        var V = H(A, 2), Y = B(V);
        Ae(Y, {
          level: 3,
          mt: "10px",
          children: (S, T) => {
            pe();
            var x = ke("输出参数");
            D(S, x);
          },
          $$slots: { default: !0 }
        }), R(V);
        var z = H(V, 2);
        zn(z, {}), D(h, g);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), de(c);
}
ae(nf, { data: {} }, [], [], !0);
var Vw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>'), Iw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), zw = /* @__PURE__ */ te('<div class="heading svelte-1o34e8c"><!></div> <!> <div class="heading svelte-1o34e8c"><!> <!></div> <!>', 1);
const Rw = {
  hash: "svelte-1o34e8c",
  code: ".heading.svelte-1o34e8c {display:flex;margin:10px 0;align-items:center;}.loop_handle_wrapper ::after {content:'循环体';width:100px;height:20px;background:#000;color:#fff;display:flex;justify-content:center;align-items:center;}"
};
function rf(e, t) {
  ue(t, !0), ze(e, Rw);
  const n = p(t, "data", 7), r = /* @__PURE__ */ Be(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Ge(), { addParameter: i } = sn();
  Xe(() => {
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
  return Wt(e, Ke(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (c) => {
        var d = Vw();
        D(c, d);
      },
      handle: (c) => {
        qn(c, {
          type: "source",
          get position() {
            return ye.Bottom;
          },
          id: "loop_handle",
          style: "bottom: -12px;width: 100px",
          class: "loop_handle_wrapper"
        });
      },
      children: (c, d) => {
        var h = zw(), f = ie(h), g = B(f);
        Ae(g, {
          level: 3,
          children: (E, b) => {
            pe();
            var P = ke("循环变量");
            D(E, P);
          },
          $$slots: { default: !0 }
        }), R(f);
        var m = H(f, 2);
        bt(m, { dataKeyName: "loopVars" });
        var y = H(m, 2), w = B(y);
        Ae(w, {
          level: 3,
          children: (E, b) => {
            pe();
            var P = ke("输出参数");
            D(E, P);
          },
          $$slots: { default: !0 }
        });
        var _ = H(w, 2);
        De(_, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (E, b) => {
            var P = Iw();
            D(E, P);
          },
          $$slots: { default: !0 }
        }), R(y);
        var k = H(y, 2);
        bt(k, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs",
          useChildrenOnly: !0
        }), D(c, h);
      },
      $$slots: { icon: !0, handle: !0, default: !0 }
    }
  )), de(s);
}
ae(rf, { data: {} }, [], [], !0);
var Bw = /* @__PURE__ */ te('<div class="input-more-setting svelte-5x0hls"><div class="input-more-item svelte-5x0hls">数据内容： <!></div> <div class="input-more-item svelte-5x0hls">确认方式： <!></div> <div class="input-more-item svelte-5x0hls">数据标题： <!></div> <div class="input-more-item svelte-5x0hls">数据描述： <!></div>   <div class="input-more-item svelte-5x0hls"><!></div></div>'), Fw = /* @__PURE__ */ te('<div class="input-item svelte-5x0hls"><!></div> <div class="input-item svelte-5x0hls"><!></div> <div class="input-item svelte-5x0hls"><!></div>', 1);
const Kw = {
  hash: "svelte-5x0hls",
  code: ".input-item.svelte-5x0hls {display:flex;align-items:center;}.input-more-setting.svelte-5x0hls {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-5x0hls .input-more-item:where(.svelte-5x0hls) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function of(e, t) {
  ue(t, !0), ze(e, Kw);
  const n = p(t, "parameter", 7), r = p(t, "index", 7), o = p(t, "dataKeyName", 7), i = p(t, "useChildrenOnly", 7);
  let s = Ge(), a = Vn(s), l = /* @__PURE__ */ N(() => ({
    ...n(),
    ...a?.current?.data?.[o()][r()]
  }));
  const { updateNodeData: c } = ot(), d = (S, T) => {
    c(s, (x) => {
      let C = x.data?.[o()];
      return C[r()] = { ...C[r()], [S]: T }, { [o()]: C };
    });
  }, h = (S, T) => {
    const x = T.target.value;
    d(S, x);
  }, f = (S) => {
    const T = S.value;
    d("ref", T);
  }, g = (S) => {
    const T = S.value;
    d("formType", T);
  }, m = (S) => {
    const T = S.value;
    d("contentType", T);
  };
  let y;
  const w = () => {
    c(s, (S) => {
      let T = S.data?.[o()];
      return T.splice(r(), 1), { [o()]: [...T] };
    }), y?.hide();
  };
  let _ = Xd(i());
  var k = {
    get parameter() {
      return n();
    },
    set parameter(S) {
      n(S), v();
    },
    get index() {
      return r();
    },
    set index(S) {
      r(S), v();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(S) {
      o(S), v();
    },
    get useChildrenOnly() {
      return i();
    },
    set useChildrenOnly(S) {
      i(S), v();
    }
  }, E = Fw(), b = ie(E), P = B(b);
  {
    let S = /* @__PURE__ */ N(() => u(l).nameDisabled === !0);
    Ue(P, {
      style: "width: 100%;",
      get value() {
        return u(l).name;
      },
      placeholder: "请输入参数名称",
      get disabled() {
        return u(S);
      },
      oninput: (T) => h("name", T)
    });
  }
  R(b);
  var $ = H(b, 2), A = B($);
  {
    var I = (S) => {
      Ue(S, {
        get value() {
          return u(l).value;
        },
        placeholder: "请输入参数值",
        oninput: (T) => h("value", T)
      });
    }, V = (S) => {
      var T = Ee(), x = ie(T);
      {
        var C = (O) => {
          {
            let M = /* @__PURE__ */ N(() => [u(l).ref]);
            at(O, {
              get items() {
                return _.current;
              },
              style: "width: 100%",
              defaultValue: ["ref"],
              get value() {
                return u(M);
              },
              expandAll: !0,
              onSelect: f
            });
          }
        };
        se(
          x,
          (O) => {
            u(l).refType !== "input" && O(C);
          },
          !0
        );
      }
      D(S, T);
    };
    se(A, (S) => {
      u(l).refType === "fixed" ? S(I) : S(V, !1);
    });
  }
  R($);
  var Y = H($, 2), z = B(Y);
  return Ot(
    nr(z, {
      placement: "bottom",
      floating: (T) => {
        var x = Bw(), C = B(x), O = H(B(C));
        {
          let F = /* @__PURE__ */ N(() => u(l).contentType ? [u(l).contentType] : []);
          at(O, {
            get items() {
              return va;
            },
            style: "width: 100%",
            defaultValue: ["text"],
            get value() {
              return u(F);
            },
            onSelect: m
          });
        }
        R(C);
        var M = H(C, 2), Z = H(B(M));
        {
          let F = /* @__PURE__ */ N(() => u(l).formType ? [u(l).formType] : []);
          at(Z, {
            get items() {
              return Rm;
            },
            style: "width: 100%",
            defaultValue: ["single"],
            get value() {
              return u(F);
            },
            onSelect: g
          });
        }
        R(M);
        var U = H(M, 2), L = H(B(U));
        Re(L, {
          rows: 1,
          style: "width: 100%;",
          onchange: (F) => {
            h("formLabel", F);
          },
          get value() {
            return u(l).formLabel;
          }
        }), R(U);
        var W = H(U, 2), K = H(B(W));
        Re(K, {
          rows: 2,
          style: "width: 100%;",
          onchange: (F) => {
            h("formDescription", F);
          },
          get value() {
            return u(l).formDescription;
          }
        }), R(W);
        var q = H(W, 2), j = B(q);
        De(j, {
          onclick: w,
          children: (F, J) => {
            pe();
            var G = ke("删除");
            D(F, G);
          },
          $$slots: { default: !0 }
        }), R(q), R(x), D(T, x);
      },
      children: (T, x) => {
        Mo(T, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (T) => y = T,
    () => y
  ), R(Y), D(e, E), de(k);
}
ae(
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
var Zw = /* @__PURE__ */ te('<div class="input-header svelte-1fllp9b">参数名称</div> <div class="input-header svelte-1fllp9b">参数值</div> <div class="input-header svelte-1fllp9b"></div>', 1), Yw = /* @__PURE__ */ te('<div class="none-params svelte-1fllp9b"> </div>'), Ww = /* @__PURE__ */ te('<div class="input-container svelte-1fllp9b"><!> <!></div>');
const Xw = {
  hash: "svelte-1fllp9b",
  code: `.input-container.svelte-1fllp9b {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1fllp9b .none-params:where(.svelte-1fllp9b) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1fllp9b .input-header:where(.svelte-1fllp9b) {font-size:12px;color:#666;}`
};
function sf(e, t) {
  ue(t, !0), ze(e, Xw);
  const n = p(t, "noneParameterText", 7, "无确认数据"), r = p(t, "dataKeyName", 7, "parameters"), o = p(t, "useChildrenOnly", 7);
  let i = Ge(), s = Vn(i), a = /* @__PURE__ */ N(() => [...s?.current?.data?.[r()] || []]);
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
  }, c = Ww(), d = B(c);
  {
    var h = (g) => {
      var m = Zw();
      pe(4), D(g, m);
    };
    se(d, (g) => {
      u(a).length !== 0 && g(h);
    });
  }
  var f = H(d, 2);
  return mt(
    f,
    19,
    () => u(a),
    (g) => g.id,
    (g, m, y) => {
      of(g, {
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
    (g) => {
      var m = Yw(), y = B(m, !0);
      R(m), Ce(() => Fe(y, n())), D(g, m);
    }
  ), R(c), D(e, c), de(l);
}
ae(sf, { noneParameterText: {}, dataKeyName: {}, useChildrenOnly: {} }, [], [], !0);
const Ds = (e, t) => {
  if (e === t) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const n = Array.isArray(e), r = Array.isArray(t);
  if (n !== r) return !1;
  if (n && r) {
    if (e.length !== t.length) return !1;
    for (let o = 0; o < e.length; o++)
      if (!Ds(e[o], t[o])) return !1;
    return !0;
  } else {
    const o = Object.keys(e), i = Object.keys(t);
    if (o.length !== i.length) return !1;
    for (const s of o)
      if (!(s in t) || !Ds(e[s], t[s])) return !1;
    return !0;
  }
};
var jw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), qw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Gw = /* @__PURE__ */ te('<div class="heading svelte-8iukvu"><!> <!></div> <!> <!> <div class="setting-title svelte-8iukvu">消息内容</div> <div class="setting-item svelte-8iukvu"><!></div> <div class="heading svelte-8iukvu"><!></div> <!>', 1);
const Uw = {
  hash: "svelte-8iukvu",
  code: ".heading.svelte-8iukvu {display:flex;margin-bottom:10px;}.setting-title.svelte-8iukvu {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-8iukvu {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function af(e, t) {
  ue(t, !0), ze(e, Uw);
  const n = p(t, "data", 7), r = /* @__PURE__ */ Be(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Ge(), { addParameter: i } = sn(), { updateNodeData: s } = ot();
  Xe(() => {
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
      Ds(l, n().outputDefs) || s(o, () => ({ outputDefs: l }));
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
  return Wt(e, Ke(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (c) => {
        var d = jw();
        D(c, d);
      },
      children: (c, d) => {
        var h = Gw(), f = ie(h), g = B(f);
        Ae(g, {
          level: 3,
          children: ($, A) => {
            pe();
            var I = ke("确认数据");
            D($, I);
          },
          $$slots: { default: !0 }
        });
        var m = H(g, 2);
        De(m, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "confirms");
          },
          children: ($, A) => {
            var I = qw();
            D($, I);
          },
          $$slots: { default: !0 }
        }), R(f);
        var y = H(f, 2);
        sf(y, { dataKeyName: "confirms", noneParameterText: "无确认数据" });
        var w = H(y, 2);
        Ae(w, {
          level: 3,
          mt: "10px",
          children: ($, A) => {
            pe();
            var I = ke("确认消息");
            D($, I);
          },
          $$slots: { default: !0 }
        });
        var _ = H(w, 4), k = B(_);
        {
          let $ = /* @__PURE__ */ N(() => n().message || "");
          Re(k, {
            rows: 5,
            placeholder: "请输入用户需要确认的消息内容",
            style: "width: 100%",
            onchange: (A) => {
              s(o, () => ({ message: A.target.value }));
            },
            get value() {
              return u($);
            }
          });
        }
        R(_);
        var E = H(_, 2), b = B(E);
        Ae(b, {
          level: 3,
          mt: "10px",
          children: ($, A) => {
            pe();
            var I = ke("输出参数");
            D($, I);
          },
          $$slots: { default: !0 }
        }), R(E);
        var P = H(E, 2);
        zn(P, { placeholder: "" }), D(c, h);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), de(a);
}
ae(af, { data: {} }, [], [], !0);
const Jw = {
  startNode: Zd,
  codeNode: Jd,
  confirmNode: af,
  llmNode: Ud,
  templateNode: Qd,
  httpNode: ef,
  knowledgeNode: tf,
  searchEngineNode: nf,
  loopNode: rf,
  endNode: qd
};
var Qw = /* @__PURE__ */ te("<!> ", 1);
function As(e, t) {
  ue(t, !0);
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
  return De(e, {
    draggable: !0,
    ondragstart: a,
    get "data-node-type"() {
      return o();
    },
    children: (c, d) => {
      var h = Qw(), f = ie(h);
      Gs(f, n);
      var g = H(f);
      Ce(() => Fe(g, ` ${r() ?? ""}`)), D(c, h);
    },
    $$slots: { default: !0 }
  }), de(l);
}
ae(As, { icon: {}, title: {}, type: {}, description: {}, extra: {} }, [], [], !0);
var e_ = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), t_ = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), n_ = /* @__PURE__ */ te('<div><div class="tf-toolbar-container "><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"></div></div></div> <!></div>');
function lf(e, t) {
  ue(t, !0);
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
  ], s = [], a = Un(), l = a.customNodes;
  if (l) {
    const _ = Object.keys(l).sort((k, E) => (l[k].sortNo || 0) - (l[E].sortNo || 0));
    for (let k of _)
      l[k].group === "base" ? o.push({ type: k, ...l[k] }) : s.push({
        icon: l[k].icon,
        title: l[k].title,
        type: k
      });
    o.sort((k, E) => (k.sortNo || 0) - (E.sortNo || 0));
  }
  if (a.hiddenNodes) {
    const _ = typeof a.hiddenNodes == "function" ? a.hiddenNodes() : a.hiddenNodes;
    if (Array.isArray(_)) {
      for (let k of _)
        for (let E = 0; E < o.length; E++)
          if (o[E].type === k) {
            o.splice(E, 1);
            break;
          }
    }
  }
  var c = n_(), d = B(c), h = B(d), f = B(h);
  Pd(f, {
    style: "width: 100%",
    get items() {
      return i;
    },
    onChange: (_) => {
      Q(n, _.value.toString(), !0);
    }
  }), R(h);
  var g = H(h, 2), m = B(g);
  mt(m, 21, () => o, Ar, (_, k) => {
    As(_, Ke(() => u(k)));
  }), R(m);
  var y = H(m, 2);
  mt(y, 21, () => s, Ar, (_, k) => {
    As(_, Ke(() => u(k)));
  }), R(y), R(g), R(d);
  var w = H(d, 2);
  De(w, {
    onclick: () => {
      Q(r, u(r) ? "" : "show", !0);
    },
    children: (_, k) => {
      var E = Ee(), b = ie(E);
      {
        var P = (A) => {
          var I = e_();
          D(A, I);
        }, $ = (A) => {
          var I = t_();
          D(A, I);
        };
        se(b, (A) => {
          u(r) === "show" ? A(P) : A($, !1);
        });
      }
      D(_, E);
    },
    $$slots: { default: !0 }
  }), R(c), Ce(() => {
    At(c, 1, `tf-toolbar ${u(r) ?? ""}`), ct(m, `display: ${u(n) === "base" ? "flex" : "none"}`), ct(y, `display: ${u(n) !== "base" ? "flex" : "none"}`);
  }), D(e, c), de();
}
ae(lf, {}, [], [], !0);
const r_ = () => ({ getNode: (t) => Me.getNode(t) }), o_ = () => ({ ensureParentInNodesBefore: (t, n) => {
  Me.updateNodes((r) => {
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
} }), i_ = () => ({ getEdgesByTarget: (t) => Me.getEdges().filter((r) => r.target === t) });
var s_ = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), a_ = /* @__PURE__ */ te('<div class="heading svelte-qt4m0r"><!> <!></div> <!>', 1), l_ = /* @__PURE__ */ te('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), c_ = /* @__PURE__ */ te('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), u_ = /* @__PURE__ */ te('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><div class="slider-container svelte-qt4m0r"><span class="svelte-qt4m0r"> </span> <input/></div></div>', 1), d_ = /* @__PURE__ */ te('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), f_ = /* @__PURE__ */ te('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), h_ = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), g_ = /* @__PURE__ */ te('<div class="heading svelte-qt4m0r"><!> <!></div> <!>', 1), v_ = /* @__PURE__ */ te("<!> <!> <div></div> <!>", 1);
const p_ = {
  hash: "svelte-qt4m0r",
  code: `.heading.svelte-qt4m0r {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-qt4m0r {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-qt4m0r {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-qt4m0r {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-qt4m0r span:where(.svelte-qt4m0r) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-qt4m0r {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-qt4m0r::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function cf(e, t) {
  ue(t, !0), ze(e, p_);
  const n = p(t, "data", 7), r = /* @__PURE__ */ Be(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Ge(), { addParameter: i } = sn(), s = ot(), { updateNodeData: a } = s, l = (_) => {
    a(o, _);
  }, c = (_, k) => {
    l({ [_]: k.target?.value });
  }, d = { ...r, id: o, data: n() }, h = document.createElement("div"), g = Un().customNodes[t.type];
  g.render?.(h, d, s);
  const m = g.forms;
  let y;
  Xe(() => {
    n().expand && y && y.append(h);
  }), Xe(() => {
    n() && g.onUpdate?.(h, { ...d, data: n() });
  }), Xe(() => {
    !n().parameters && g.parameters && l({
      parameters: vo(JSON.parse(JSON.stringify(g.parameters)))
    });
  }), Xe(() => {
    !n().outputDefs && g.outputDefs && l({
      outputDefs: vo(JSON.parse(JSON.stringify(g.outputDefs)))
    });
  });
  var w = {
    get data() {
      return n();
    },
    set data(_) {
      n(_), v();
    }
  };
  {
    const _ = (E) => {
      var b = Ee(), P = ie(b);
      Gs(P, () => g.icon), D(E, b);
    };
    let k = /* @__PURE__ */ N(() => ({ ...n(), description: g.description }));
    Wt(e, Ke(
      {
        get data() {
          return u(k);
        }
      },
      () => r,
      {
        icon: _,
        children: (E, b) => {
          var P = v_(), $ = ie(P);
          {
            var A = (T) => {
              var x = a_(), C = ie(x), O = B(C);
              Ae(O, {
                level: 3,
                children: (L, W) => {
                  pe();
                  var K = ke("输入参数");
                  D(L, K);
                },
                $$slots: { default: !0 }
              });
              var M = H(O, 2);
              {
                var Z = (L) => {
                  De(L, {
                    class: "input-btn-more",
                    style: "margin-left: auto",
                    onclick: () => {
                      i(o);
                    },
                    children: (W, K) => {
                      var q = s_();
                      D(W, q);
                    },
                    $$slots: { default: !0 }
                  });
                };
                se(M, (L) => {
                  g.parametersAddEnable !== !1 && L(Z);
                });
              }
              R(C);
              var U = H(C, 2);
              bt(U, {}), D(T, x);
            };
            se($, (T) => {
              g.parametersEnable !== !1 && T(A);
            });
          }
          var I = H($, 2);
          {
            var V = (T) => {
              var x = Ee(), C = ie(x);
              mt(C, 17, () => m, Ar, (O, M) => {
                var Z = Ee(), U = ie(Z);
                {
                  var L = (K) => {
                    var q = l_(), j = ie(q), F = B(j, !0);
                    R(j);
                    var J = H(j, 2), G = B(J);
                    {
                      let ne = /* @__PURE__ */ N(() => n()[u(M).name] || u(M).defaultValue);
                      Ue(G, Ke(
                        {
                          get placeholder() {
                            return u(M).placeholder;
                          },
                          style: "width: 100%",
                          get value() {
                            return u(ne);
                          }
                        },
                        () => u(M).attrs,
                        {
                          onchange: (ee) => {
                            c(u(M).name, ee);
                          }
                        }
                      ));
                    }
                    R(J), Ce(() => Fe(F, u(M).label)), D(K, q);
                  }, W = (K) => {
                    var q = Ee(), j = ie(q);
                    {
                      var F = (G) => {
                        var ne = c_(), ee = ie(ne), we = B(ee, !0);
                        R(ee);
                        var oe = H(ee, 2), le = B(oe);
                        {
                          let re = /* @__PURE__ */ N(() => n()[u(M).name] || u(M).defaultValue);
                          Re(le, Ke(
                            {
                              rows: 3,
                              get placeholder() {
                                return u(M).placeholder;
                              },
                              style: "width: 100%",
                              get value() {
                                return u(re);
                              }
                            },
                            () => u(M).attrs,
                            {
                              onchange: (he) => {
                                c(u(M).name, he);
                              }
                            }
                          ));
                        }
                        R(oe), Ce(() => Fe(we, u(M).label)), D(G, ne);
                      }, J = (G) => {
                        var ne = Ee(), ee = ie(ne);
                        {
                          var we = (le) => {
                            var re = u_(), he = ie(re), ge = B(he, !0);
                            R(he);
                            var _e = H(he, 2), fe = B(_e), me = B(fe), Se = B(me);
                            R(me);
                            var X = H(me, 2), We = (Oe) => l({ [u(M).name]: parseFloat(Oe.target.value) });
                            tt(
                              X,
                              () => ({
                                class: "nodrag",
                                type: "range",
                                ...u(M).attrs,
                                value: n()[u(M).name] ?? u(M).defaultValue,
                                oninput: We
                              }),
                              void 0,
                              void 0,
                              void 0,
                              "svelte-qt4m0r",
                              !0
                            ), R(fe), R(_e), Ce(() => {
                              Fe(ge, u(M).label), Fe(Se, `${u(M).description ?? ""}: ${n()[u(M).name] ?? u(M).defaultValue ?? ""}`);
                            }), D(le, re);
                          }, oe = (le) => {
                            var re = Ee(), he = ie(re);
                            {
                              var ge = (fe) => {
                                var me = d_(), Se = ie(me), X = B(Se, !0);
                                R(Se);
                                var We = H(Se, 2), Oe = B(We);
                                {
                                  let Le = /* @__PURE__ */ N(() => u(M).options || []), Ve = /* @__PURE__ */ N(() => n()[u(M).name] ? [n()[u(M).name]] : [u(M).defaultValue]);
                                  at(Oe, {
                                    get items() {
                                      return u(Le);
                                    },
                                    style: "width: 100%",
                                    get placeholder() {
                                      return u(M).placeholder;
                                    },
                                    onSelect: (yt) => {
                                      const Qe = yt.value;
                                      l({ [u(M).name]: Qe });
                                    },
                                    get value() {
                                      return u(Ve);
                                    }
                                  });
                                }
                                R(We), Ce(() => Fe(X, u(M).label)), D(fe, me);
                              }, _e = (fe) => {
                                var me = Ee(), Se = ie(me);
                                {
                                  var X = (Oe) => {
                                    var Le = f_(), Ve = ie(Le), yt = B(Ve, !0);
                                    R(Ve);
                                    var Qe = H(Ve, 2), kt = B(Qe);
                                    {
                                      let ut = /* @__PURE__ */ N(() => u(M).chosen?.buttonText);
                                      Nd(kt, {
                                        style: "width: 100%",
                                        get placeholder() {
                                          return u(M).placeholder;
                                        },
                                        get buttonText() {
                                          return u(ut);
                                        },
                                        onChosen: (Xt, ce, $e) => {
                                          u(M).chosen?.onChosen?.(l, Xt, ce, $e);
                                        },
                                        get value() {
                                          return n()[u(M).chosen?.valueDataKey || ""];
                                        },
                                        get label() {
                                          return n()[u(M).chosen?.labelDataKey || ""];
                                        }
                                      });
                                    }
                                    R(Qe), Ce(() => Fe(yt, u(M).label)), D(Oe, Le);
                                  }, We = (Oe) => {
                                    var Le = Ee(), Ve = ie(Le);
                                    {
                                      var yt = (Qe) => {
                                        Ae(Qe, Ke({ level: 3, mt: "10px" }, () => u(M).attrs, {
                                          children: (kt, ut) => {
                                            pe();
                                            var Xt = ke();
                                            Ce(() => Fe(Xt, u(M).label)), D(kt, Xt);
                                          },
                                          $$slots: { default: !0 }
                                        }));
                                      };
                                      se(
                                        Ve,
                                        (Qe) => {
                                          u(M).type === "heading" && Qe(yt);
                                        },
                                        !0
                                      );
                                    }
                                    D(Oe, Le);
                                  };
                                  se(
                                    Se,
                                    (Oe) => {
                                      u(M).type === "chosen" ? Oe(X) : Oe(We, !1);
                                    },
                                    !0
                                  );
                                }
                                D(fe, me);
                              };
                              se(
                                he,
                                (fe) => {
                                  u(M).type === "select" ? fe(ge) : fe(_e, !1);
                                },
                                !0
                              );
                            }
                            D(le, re);
                          };
                          se(
                            ee,
                            (le) => {
                              u(M).type === "slider" ? le(we) : le(oe, !1);
                            },
                            !0
                          );
                        }
                        D(G, ne);
                      };
                      se(
                        j,
                        (G) => {
                          u(M).type === "textarea" ? G(F) : G(J, !1);
                        },
                        !0
                      );
                    }
                    D(K, q);
                  };
                  se(U, (K) => {
                    u(M).type === "input" ? K(L) : K(W, !1);
                  });
                }
                D(O, Z);
              }), D(T, x);
            };
            se(I, (T) => {
              m && T(V);
            });
          }
          var Y = H(I, 2);
          Ot(Y, (T) => y = T, () => y);
          var z = H(Y, 2);
          {
            var S = (T) => {
              var x = g_(), C = ie(x), O = B(C);
              Ae(O, {
                level: 3,
                mt: "10px",
                children: (L, W) => {
                  pe();
                  var K = ke("输出参数");
                  D(L, K);
                },
                $$slots: { default: !0 }
              });
              var M = H(O, 2);
              {
                var Z = (L) => {
                  De(L, {
                    class: "input-btn-more",
                    style: "margin-left: auto",
                    onclick: () => {
                      i(o, "outputDefs");
                    },
                    children: (W, K) => {
                      var q = h_();
                      D(W, q);
                    },
                    $$slots: { default: !0 }
                  });
                };
                se(M, (L) => {
                  g.outputDefsAddEnable !== !1 && L(Z);
                });
              }
              R(C);
              var U = H(C, 2);
              zn(U, {}), D(T, x);
            };
            se(z, (T) => {
              g.outputDefsEnable !== !1 && T(S);
            });
          }
          Ce(() => {
            ct(Y, g.rootStyle || ""), At(Y, 1, Ln(g.rootClass), "svelte-qt4m0r");
          }), D(E, P);
        },
        $$slots: { icon: !0, default: !0 }
      }
    ));
  }
  return de(w);
}
ae(cf, { data: {} }, [], [], !0);
const m_ = () => ({ updateEdgeData: (t, n, r) => {
  const o = Me.getEdge(t);
  if (!o)
    return;
  const i = typeof n == "function" ? n(o) : n;
  o.data = r?.replace ? i : { ...o.data, ...i }, Me.updateEdges((s) => s.map((a) => a.id === t ? o : a));
} }), y_ = () => ({ deleteEdge: (t) => {
  Me.removeEdge(t);
} }), w_ = () => {
  const e = (n, r) => r.filter(
    // 排除循环节点的子节点，否则在多层循环嵌套时不正确
    (o) => o.source === n && o.sourceHandle !== "loop_handle"
  );
  return { getNodesFromSource: (n) => {
    const r = Me.getEdges(), o = [];
    let i = e(n, r);
    for (; i.length > 0; ) {
      const s = [];
      i.forEach((a) => {
        o.push(Me.getNode(a.target)), s.push(...e(a.target, r));
      }), i = s;
    }
    return o;
  } };
}, __ = () => ({ getNodeRelativePosition: (t) => {
  let n = Me.getNode(t);
  const r = { x: 0, y: 0 };
  for (; n; )
    r.x += n.position.x, r.y += n.position.y, n.parentId ? n = Me.getNode(n.parentId) : n = void 0;
  return r;
} });
function x_(e) {
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
function b_(e) {
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
function C_(e) {
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
function Os(e, t) {
  if (e == null)
    return e;
  if (Array.isArray(e))
    return e.map((n) => Os(n, t));
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
      Object.hasOwn(e, r) && (n[r] = Os(e[r], t));
    return n;
  }
  return e;
}
const k_ = () => (ot(), { copyHandler: async (n) => {
  const r = Me.getNodes().filter((d) => d.selected);
  if (r.length === 0) return;
  const i = Me.getEdges().filter((d) => r.some((h) => h.id === d.source) && r.some((h) => h.id === d.target)), s = r.map(x_), a = i.map(C_), c = JSON.stringify({
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
  const i = b_(o.tinyflowNodes), s = o.tinyflowEdges || [], a = /* @__PURE__ */ new Map(), l = [];
  for (const d of i) {
    const h = `node_${Dn()}`;
    a.set(d.id, h);
  }
  for (const d of i) {
    const h = a.get(d.id), f = d.parentId !== void 0 ? a.get(d.parentId) : void 0, g = Os(d.data, a);
    l.push({
      ...d,
      id: h,
      parentId: f,
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
    const h = a.get(d.source), f = a.get(d.target);
    h && f && c.push({
      ...d,
      id: `edge_${Dn()}`,
      source: h,
      target: f
    });
  }
  Me.updateNodes((d) => [...d.map((f) => ({ ...f, selected: !1 })), ...l]), Me.updateEdges((d) => [...d.map((f) => ({ ...f, selected: !1 })), ...c]);
} }), Tl = () => {
  const e = document.activeElement;
  return !e || !(e instanceof HTMLElement) ? !1 : e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement || e.isContentEditable;
};
var E_ = /* @__PURE__ */ te('<div class="panel-content svelte-woejl3"><div>边属性设置</div> <div class="setting-title svelte-woejl3">边条件设置</div> <div class="setting-item svelte-woejl3"><!></div> <div class="setting-item svelte-woejl3" style="padding: 8px 0"><!> <!></div></div>'), S_ = /* @__PURE__ */ te("<!> <!> <!> <!>", 1), N_ = /* @__PURE__ */ te('<div style="position: relative; height: 100%; width: 100%;overflow: hidden"><!> <!></div>');
const P_ = {
  hash: "svelte-woejl3",
  code: ".panel-content.svelte-woejl3 {padding:10px;background-color:#fff;border-radius:5px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);width:200px;border:1px solid #efefef;}.setting-title.svelte-woejl3 {margin:10px 0;font-size:12px;color:#999;}.setting-item.svelte-woejl3 {display:flex;gap:5px;align-items:center;justify-content:end;}"
};
function uf(e, t) {
  ue(t, !0), ze(e, P_);
  const n = p(t, "onInit", 7), r = /* @__PURE__ */ Be(t, ["$$slots", "$$events", "$$legacy", "$$host", "onInit"]), o = ot();
  console.log("props", r), n()(o);
  let i = /* @__PURE__ */ Ne(!1), s = /* @__PURE__ */ Ne(null);
  const { updateEdgeData: a } = m_(), l = (K) => {
    K.preventDefault(), K.dataTransfer && (K.dataTransfer.dropEffect = "move");
  }, c = (K) => {
    K.preventDefault();
    const q = o.screenToFlowPosition({ x: K.clientX - 250, y: K.clientY - 100 }), j = K.dataTransfer?.getData("application/tinyflow");
    if (!j)
      return;
    const F = JSON.parse(j), J = { id: `node_${Dn()}`, position: q, data: {}, ...F };
    Me.addNode(J), Me.selectNodeOnly(J.id);
  }, { getNode: d } = r_(), h = (K) => {
    const q = d(K.source), j = d(K.target);
    if (K.sourceHandle === "loop_handle" || q.parentId) {
      const F = o.getEdges();
      for (let J of F)
        if (J.target === K.target) {
          const G = d(J.source);
          if (K.sourceHandle === "loop_handle" && G.parentId !== q.id || q.parentId && G.parentId !== q.parentId)
            return !1;
        }
    }
    return !(!q.parentId && j.parentId && j.parentId !== q.id);
  }, { getNodesFromSource: f } = w_(), { getNodeRelativePosition: g } = __(), { ensureParentInNodesBefore: m } = o_(), y = (K, q) => {
    if (!q.isValid)
      return;
    const j = q.toNode;
    if (j.parentId)
      return;
    const F = q.fromNode, J = q.fromHandle, G = { position: { ...j.position } };
    if (J.id === "loop_handle" ? G.parentId = F.id : F.parentId && (G.parentId = F.parentId), G.parentId) {
      const { x: ne, y: ee } = g(G.parentId);
      G.position = { x: j.position.x - ne, y: j.position.y - ee }, o.updateNode(j.id, G), f(j.id).forEach((oe) => {
        o.updateNode(oe.id, {
          parentId: G.parentId,
          position: { x: oe.position.x - ne, y: oe.position.y - ee }
        });
      }), m(G.parentId, j.id);
    }
    setTimeout(() => {
      Me.getEdges().forEach((ne) => {
        ne.target === j.id && ne.source == F.id && (Q(i, !0), Q(s, ne, !0));
      });
    });
  }, { getEdgesByTarget: w } = i_(), _ = (K) => {
    K.edges.forEach((j) => {
      j.id === u(s)?.id && (Q(s, null), Q(i, !1));
      const F = d(j.target);
      if (F && F.parentId) {
        const J = w(j.target), { x: G, y: ne } = g(F.parentId);
        if (J.length === 0)
          o.updateNode(F.id, {
            parentId: void 0,
            position: { x: F.position.x + G, y: F.position.y + ne }
          }), f(F.id).forEach((we) => {
            o.updateNode(we.id, {
              parentId: void 0,
              position: { x: we.position.x + G, y: we.position.y + ne }
            });
          });
        else {
          let ee = !1;
          for (let we = 0; we < J.length; we++) {
            const oe = J[we], le = d(oe.source);
            if (le.parentId || le.type === "loopNode") {
              ee = !0;
              break;
            }
          }
          ee || (o.updateNode(F.id, {
            parentId: void 0,
            position: { x: F.position.x + G, y: F.position.y + ne }
          }), f(F.id).forEach((oe) => {
            o.updateNode(oe.id, {
              parentId: void 0,
              position: { x: oe.position.x + G, y: oe.position.y + ne }
            });
          }));
        }
      }
    });
  }, { deleteEdge: k } = y_(), E = (K, q) => {
  }, b = (K) => {
  }, { copyHandler: P, pasteHandler: $ } = k_(), A = (K) => {
    Tl() || ((K.ctrlKey || K.metaKey) && K.key === "c" && (K.preventDefault(), P(K)), (K.ctrlKey || K.metaKey) && K.key === "a" && (K.preventDefault(), Me.updateNodes((q) => q.map((j) => ({ ...j, selected: !0 }))), Me.updateEdges((q) => q.map((j) => ({ ...j, selected: !0 })))));
  }, I = async (K) => {
    Tl() || $(K);
  };
  Hn(() => {
    window.addEventListener("keydown", A), window.addEventListener("paste", I);
  }), bo(() => {
    window.removeEventListener("keydown", A), window.removeEventListener("paste", I);
  });
  const V = {
    // ...nodeTypes
  }, Y = Un().customNodes;
  if (Y)
    for (let K of Object.keys(Y))
      V[K] = cf;
  const z = Un().onDataChange;
  Xe(() => {
    z?.({
      nodes: Me.getNodes(),
      edges: Me.getEdges(),
      viewport: Me.getViewport()
    });
  });
  var S = {
    get onInit() {
      return n();
    },
    set onInit(K) {
      n(K), v();
    }
  }, T = N_(), x = B(T), C = Me.getNodes, O = Me.setNodes, M = Me.getEdges, Z = Me.setEdges, U = Me.getViewport, L = Me.setViewport;
  {
    let K = /* @__PURE__ */ N(() => ({ ...Jw, ...V })), q = /* @__PURE__ */ N(() => ({
      markerEnd: { type: co.ArrowClosed, width: 20, height: 20 }
    }));
    fd(x, {
      get nodeTypes() {
        return u(K);
      },
      get nodes() {
        return C();
      },
      set nodes(j) {
        O(j);
      },
      get edges() {
        return M();
      },
      set edges(j) {
        Z(j);
      },
      get viewport() {
        return U();
      },
      set viewport(j) {
        L(j);
      },
      class: "tinyflow-logo",
      ondrop: c,
      ondragover: l,
      isValidConnection: h,
      onconnectend: y,
      onconnectstart: E,
      onconnect: b,
      connectionRadius: 50,
      onedgeclick: (j) => {
        Q(i, !0), Q(s, j.edge, !0);
      },
      onbeforeconnect: (j) => ({ ...j, id: Dn() }),
      ondelete: _,
      onclick: (j) => {
        const F = j.target;
        F.classList.contains("svelte-flow__edge-interaction") || F.classList.contains("panel-content") || F.closest(".panel-content") || (Q(i, !1), Q(s, null));
      },
      get defaultEdgeOptions() {
        return u(q);
      },
      children: (j, F) => {
        var J = S_(), G = ie(J);
        bd(G, {});
        var ne = H(G, 2);
        wd(ne, {});
        var ee = H(ne, 2);
        kd(ee, {});
        var we = H(ee, 2);
        {
          var oe = (le) => {
            To(le, {
              children: (re, he) => {
                var ge = E_(), _e = H(B(ge), 4), fe = B(_e);
                {
                  let We = /* @__PURE__ */ N(() => u(s)?.data?.condition);
                  Re(fe, {
                    rows: 3,
                    placeholder: "请输入边条件",
                    style: "width: 100%",
                    get value() {
                      return u(We);
                    },
                    onchange: (Oe) => {
                      u(s) && a(u(s).id, { condition: Oe.target?.value });
                    }
                  });
                }
                R(_e);
                var me = H(_e, 2), Se = B(me);
                De(Se, {
                  onclick: () => {
                    k(u(s)?.id), Q(i, !1);
                  },
                  children: (We, Oe) => {
                    pe();
                    var Le = ke("删除");
                    D(We, Le);
                  },
                  $$slots: { default: !0 }
                });
                var X = H(Se, 2);
                De(X, {
                  primary: !0,
                  onclick: () => {
                    Q(i, !1);
                  },
                  children: (We, Oe) => {
                    pe();
                    var Le = ke("保存");
                    D(We, Le);
                  },
                  $$slots: { default: !0 }
                }), R(me), R(ge), D(re, ge);
              },
              $$slots: { default: !0 }
            });
          };
          se(we, (le) => {
            u(i) && le(oe);
          });
        }
        D(j, J);
      },
      $$slots: { default: !0 }
    });
  }
  var W = H(x, 2);
  return lf(W, {}), R(T), D(e, T), de(S);
}
ae(uf, { onInit: {} }, [], [], !0);
function $_(e, t) {
  ue(t, !0);
  const n = p(t, "options", 7), r = p(t, "onInit", 7);
  let { data: o } = n();
  if (typeof o == "string")
    try {
      o = JSON.parse(o.trim());
    } catch {
      console.error("Invalid JSON data:", o);
    }
  Me.init(o?.nodes || [], o?.edges || []), Tr("tinyflow_options", n());
  var i = {
    get options() {
      return n();
    },
    set options(s) {
      n(s), v();
    },
    get onInit() {
      return r();
    },
    set onInit(s) {
      r(s), v();
    }
  };
  return hd(e, {
    children: (s, a) => {
      uf(s, {
        get onInit() {
          return r();
        }
      });
    },
    $$slots: { default: !0 }
  }), de(i);
}
customElements.define("tinyflow-component", ae($_, { options: {}, onInit: {} }, [], [], !1));
export {
  D_ as Tinyflow
};
//# sourceMappingURL=index.js.map
