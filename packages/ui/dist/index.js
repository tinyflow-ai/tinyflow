const Uv = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(Uv);
const dd = 1, fd = 2, hd = 4, Gv = 8, Jv = 16, Qv = 1, ep = 2, gd = 4, tp = 8, np = 16, vd = 1, rp = 2, pd = "[", As = "[!", yl = "]", Hr = {}, kt = Symbol(), op = "http://www.w3.org/1999/xhtml", ip = "http://www.w3.org/2000/svg", md = "@attach", ka = !1;
var Ds = Array.isArray, sp = Array.prototype.indexOf, wl = Array.from, Ui = Object.keys, Gi = Object.defineProperty, jn = Object.getOwnPropertyDescriptor, yd = Object.getOwnPropertyDescriptors, wd = Object.prototype, ap = Array.prototype, Is = Object.getPrototypeOf, Tu = Object.isExtensible;
function Eo(t) {
  return typeof t == "function";
}
const ze = () => {
};
function lp(t) {
  return t();
}
function Ea(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
function bd() {
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
function yo(t, e) {
  if (Array.isArray(t))
    return t;
  if (e === void 0 || !(Symbol.iterator in t))
    return Array.from(t);
  const n = [];
  for (const r of t)
    if (n.push(r), n.length === e) break;
  return n;
}
const Et = 2, bl = 4, Ms = 8, xd = 1 << 24, ir = 16, sr = 32, xr = 64, Ls = 128, pn = 512, Dt = 1024, Zt = 2048, ar = 4096, jt = 8192, Un = 16384, Hs = 32768, er = 65536, Ou = 1 << 17, xl = 1 << 18, Wr = 1 << 19, _d = 1 << 20, Vr = 32768, Pa = 1 << 21, _l = 1 << 22, gr = 1 << 23, Dn = Symbol("$state"), Cl = Symbol("legacy props"), up = Symbol(""), Qr = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), cp = 1, Vs = 3, lr = 8;
function Sl(t) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function dp() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function fp(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function hp() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function gp(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function vp() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function pp() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function mp(t) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function yp() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function wp() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function bp() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function xp() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function oi(t) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function _p() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function Cp() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let Ce = !1;
function Vt(t) {
  Ce = t;
}
let Ie;
function ct(t) {
  if (t === null)
    throw oi(), Hr;
  return Ie = t;
}
function mn() {
  return ct(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Gt(Ie)
  );
}
function W(t) {
  if (Ce) {
    if (/* @__PURE__ */ Gt(Ie) !== null)
      throw oi(), Hr;
    Ie = t;
  }
}
function Se(t = 1) {
  if (Ce) {
    for (var e = t, n = Ie; e--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ Gt(n);
    Ie = n;
  }
}
function Ji(t = !0) {
  for (var e = 0, n = Ie; ; ) {
    if (n.nodeType === lr) {
      var r = (
        /** @type {Comment} */
        n.data
      );
      if (r === yl) {
        if (e === 0) return n;
        e -= 1;
      } else (r === pd || r === As) && (e += 1);
    }
    var o = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Gt(n)
    );
    t && n.remove(), n = o;
  }
}
function Cd(t) {
  if (!t || t.nodeType !== lr)
    throw oi(), Hr;
  return (
    /** @type {Comment} */
    t.data
  );
}
function Sd(t) {
  return t === this.v;
}
function kd(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function Ed(t) {
  return !kd(t, this.v);
}
let wo = !1, Sp = !1;
function kp() {
  wo = !0;
}
const Ep = [];
function kl(t, e = !1, n = !1) {
  return Hi(t, /* @__PURE__ */ new Map(), "", Ep, null, n);
}
function Hi(t, e, n, r, o = null, i = !1) {
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
    if (Ds(t)) {
      var a = (
        /** @type {Snapshot<any>} */
        Array(t.length)
      );
      e.set(t, a), o !== null && e.set(o, a);
      for (var u = 0; u < t.length; u += 1) {
        var l = t[u];
        u in t && (a[u] = Hi(l, e, n, r, null, i));
      }
      return a;
    }
    if (Is(t) === wd) {
      a = {}, e.set(t, a), o !== null && e.set(o, a);
      for (var d in t)
        a[d] = Hi(
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
      return Hi(
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
let nt = null;
function io(t) {
  nt = t;
}
function yn(t) {
  return (
    /** @type {T} */
    zs().get(t)
  );
}
function zr(t, e) {
  return zs().set(t, e), e;
}
function Pp(t) {
  return zs().has(t);
}
function Np() {
  return zs();
}
function ue(t, e = !1, n) {
  nt = {
    p: nt,
    i: !1,
    c: null,
    e: null,
    s: t,
    x: null,
    l: wo && !e ? { s: null, u: null, $: [] } : null
  };
}
function ce(t) {
  var e = (
    /** @type {ComponentContext} */
    nt
  ), n = e.e;
  if (n !== null) {
    e.e = null;
    for (var r of n)
      Zd(r);
  }
  return t !== void 0 && (e.x = t), e.i = !0, nt = e.p, t ?? /** @type {T} */
  {};
}
function bo() {
  return !wo || nt !== null && nt.l === null;
}
function zs(t) {
  return nt === null && Sl(), nt.c ??= new Map(Tp(nt) || void 0);
}
function Tp(t) {
  let e = t.p;
  for (; e !== null; ) {
    const n = e.c;
    if (n !== null)
      return n;
    e = e.p;
  }
  return null;
}
let Tr = [];
function Pd() {
  var t = Tr;
  Tr = [], Ea(t);
}
function _r(t) {
  if (Tr.length === 0 && !zo) {
    var e = Tr;
    queueMicrotask(() => {
      e === Tr && Pd();
    });
  }
  Tr.push(t);
}
function Op() {
  for (; Tr.length > 0; )
    Pd();
}
function Nd(t) {
  var e = Fe;
  if (e === null)
    return Ye.f |= gr, t;
  if ((e.f & Hs) === 0) {
    if ((e.f & Ls) === 0)
      throw t;
    e.b.error(t);
  } else
    so(t, e);
}
function so(t, e) {
  for (; e !== null; ) {
    if ((e.f & Ls) !== 0)
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
const ki = /* @__PURE__ */ new Set();
let Qe = null, Vi = null, tn = null, en = [], Rs = null, Na = !1, zo = !1;
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
    en = [], Vi = null, this.apply();
    var n = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: [],
      block_effects: []
    };
    for (const r of e)
      this.#s(r, n);
    this.is_fork || this.#c(), this.is_deferred() ? (this.#l(n.effects), this.#l(n.render_effects), this.#l(n.block_effects)) : (Vi = this, Qe = null, Au(n.render_effects), Au(n.effects), Vi = null, this.#o?.resolve()), tn = null;
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
      var o = r.f, i = (o & (sr | xr)) !== 0, s = i && (o & Dt) !== 0, a = s || (o & jt) !== 0 || this.skipped_effects.has(r);
      if ((r.f & Ls) !== 0 && r.b?.is_pending() && (n = {
        parent: n,
        effect: r,
        effects: [],
        render_effects: [],
        block_effects: []
      }), !a && r.fn !== null) {
        i ? r.f ^= Dt : (o & bl) !== 0 ? n.effects.push(r) : si(r) && ((r.f & ir) !== 0 && n.block_effects.push(r), Wo(r));
        var u = r.first;
        if (u !== null) {
          r = u;
          continue;
        }
      }
      var l = r.parent;
      for (r = r.next; r === null && l !== null; )
        l === n.effect && (this.#l(n.effects), this.#l(n.render_effects), this.#l(n.block_effects), n = /** @type {EffectTarget} */
        n.parent), r = l.next, l = l.parent;
    }
  }
  /**
   * @param {Effect[]} effects
   */
  #l(e) {
    for (const n of e)
      ((n.f & Zt) !== 0 ? this.#i : this.#a).push(n), this.#u(n.deps), It(n, Dt);
  }
  /**
   * @param {Value[] | null} deps
   */
  #u(e) {
    if (e !== null)
      for (const n of e)
        (n.f & Et) === 0 || (n.f & Vr) === 0 || (n.f ^= Vr, this.#u(
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
    this.previous.has(e) || this.previous.set(e, n), (e.f & gr) === 0 && (this.current.set(e, e.v), tn?.set(e, e.v));
  }
  activate() {
    Qe = this, this.apply();
  }
  deactivate() {
    Qe === this && (Qe = null, tn = null);
  }
  flush() {
    if (this.activate(), en.length > 0) {
      if (Td(), Qe !== null && Qe !== this)
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
    if (ki.size > 1) {
      this.previous.clear();
      var e = tn, n = !0, r = {
        parent: null,
        effect: null,
        effects: [],
        render_effects: [],
        block_effects: []
      };
      for (const i of ki) {
        if (i === this) {
          n = !1;
          continue;
        }
        const s = [];
        for (const [u, l] of this.current) {
          if (i.current.has(u))
            if (n && l !== i.current.get(u))
              i.current.set(u, l);
            else
              continue;
          s.push(u);
        }
        if (s.length === 0)
          continue;
        const a = [...i.current.keys()].filter((u) => !this.current.has(u));
        if (a.length > 0) {
          var o = en;
          en = [];
          const u = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Map();
          for (const d of s)
            Od(d, a, u, l);
          if (en.length > 0) {
            Qe = i, i.apply();
            for (const d of en)
              i.#s(d, r);
            i.deactivate();
          }
          en = o;
        }
      }
      Qe = null, tn = e;
    }
    this.committed = !0, ki.delete(this);
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
      It(e, Zt), Rr(e);
    for (const e of this.#a)
      It(e, ar), Rr(e);
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
    return (this.#o ??= bd()).promise;
  }
  static ensure() {
    if (Qe === null) {
      const e = Qe = new fn();
      ki.add(Qe), zo || fn.enqueue(() => {
        Qe === e && e.flush();
      });
    }
    return Qe;
  }
  /** @param {() => void} task */
  static enqueue(e) {
    _r(e);
  }
  apply() {
  }
}
function g(t) {
  var e = zo;
  zo = !0;
  try {
    for (var n; ; ) {
      if (Op(), en.length === 0 && (Qe?.flush(), en.length === 0))
        return Rs = null, /** @type {T} */
        n;
      Td();
    }
  } finally {
    zo = e;
  }
}
function Td() {
  var t = pr;
  Na = !0;
  var e = null;
  try {
    var n = 0;
    for (es(!0); en.length > 0; ) {
      var r = fn.ensure();
      if (n++ > 1e3) {
        var o, i;
        Ap();
      }
      r.process(en), vr.clear();
    }
  } finally {
    Na = !1, es(t), Rs = null;
  }
}
function Ap() {
  try {
    vp();
  } catch (t) {
    so(t, Rs);
  }
}
let Kn = null;
function Au(t) {
  var e = t.length;
  if (e !== 0) {
    for (var n = 0; n < e; ) {
      var r = t[n++];
      if ((r.f & (Un | jt)) === 0 && si(r) && (Kn = /* @__PURE__ */ new Set(), Wo(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? Ud(r) : r.fn = null), Kn?.size > 0)) {
        vr.clear();
        for (const o of Kn) {
          if ((o.f & (Un | jt)) !== 0) continue;
          const i = [o];
          let s = o.parent;
          for (; s !== null; )
            Kn.has(s) && (Kn.delete(s), i.push(s)), s = s.parent;
          for (let a = i.length - 1; a >= 0; a--) {
            const u = i[a];
            (u.f & (Un | jt)) === 0 && Wo(u);
          }
        }
        Kn.clear();
      }
    }
    Kn = null;
  }
}
function Od(t, e, n, r) {
  if (!n.has(t) && (n.add(t), t.reactions !== null))
    for (const o of t.reactions) {
      const i = o.f;
      (i & Et) !== 0 ? Od(
        /** @type {Derived} */
        o,
        e,
        n,
        r
      ) : (i & (_l | ir)) !== 0 && (i & Zt) === 0 && Ad(o, e, r) && (It(o, Zt), Rr(
        /** @type {Effect} */
        o
      ));
    }
}
function Ad(t, e, n) {
  const r = n.get(t);
  if (r !== void 0) return r;
  if (t.deps !== null)
    for (const o of t.deps) {
      if (e.includes(o))
        return !0;
      if ((o.f & Et) !== 0 && Ad(
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
function Rr(t) {
  for (var e = Rs = t; e.parent !== null; ) {
    e = e.parent;
    var n = e.f;
    if (Na && e === Fe && (n & ir) !== 0 && (n & xl) === 0)
      return;
    if ((n & (xr | sr)) !== 0) {
      if ((n & Dt) === 0) return;
      e.f ^= Dt;
    }
  }
  en.push(e);
}
function Zr(t) {
  let e = 0, n = tr(0), r;
  return () => {
    $o() && (c(n), qr(() => (e === 0 && (r = it(() => t(() => Pn(n)))), e += 1, () => {
      _r(() => {
        e -= 1, e === 0 && (r?.(), r = void 0, Pn(n));
      });
    })));
  };
}
var Dp = er | Wr | Ls;
function Ip(t, e, n) {
  new Mp(t, e, n);
}
class Mp {
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
  #u = null;
  /** @type {TemplateNode | null} */
  #c = null;
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
  #y = Zr(() => (this.#h = tr(this.#d), () => {
    this.#h = null;
  }));
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(e, n, r) {
    this.#t = e, this.#r = n, this.#o = r, this.parent = /** @type {Effect} */
    Fe.b, this.#e = !!this.#r.pending, this.#i = Cr(() => {
      if (Fe.b = this, Ce) {
        const i = this.#n;
        mn(), /** @type {Comment} */
        i.nodeType === lr && /** @type {Comment} */
        i.data === As ? this.#w() : this.#p();
      } else {
        var o = this.#m();
        try {
          this.#a = Bt(() => r(o));
        } catch (i) {
          this.error(i);
        }
        this.#f > 0 ? this.#b() : this.#e = !1;
      }
      return () => {
        this.#c?.remove();
      };
    }, Dp), Ce && (this.#t = Ie);
  }
  #p() {
    try {
      this.#a = Bt(() => this.#o(this.#t));
    } catch (e) {
      this.error(e);
    }
    this.#e = !1;
  }
  #w() {
    const e = this.#r.pending;
    e && (this.#s = Bt(() => e(this.#t)), fn.enqueue(() => {
      var n = this.#m();
      this.#a = this.#v(() => (fn.ensure(), Bt(() => this.#o(n)))), this.#f > 0 ? this.#b() : (to(
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
    return this.#e && (this.#c = Mt(), this.#t.before(this.#c), e = this.#c), e;
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
  #v(e) {
    var n = Fe, r = Ye, o = nt;
    rn(this.#i), $t(this.#i), io(this.#i.ctx);
    try {
      return e();
    } catch (i) {
      return Nd(i), null;
    } finally {
      rn(n), $t(r), io(o);
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
    ), Qd(this.#a, this.#u)), this.#s === null && (this.#s = Bt(() => e(this.#t)));
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
    this.#f += e, this.#f === 0 && (this.#e = !1, this.#s && to(this.#s, () => {
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
    this.#x(e), this.#d += e, this.#h && lo(this.#h, this.#d);
  }
  get_effect_pending() {
    return this.#y(), c(
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
    this.#a && (St(this.#a), this.#a = null), this.#s && (St(this.#s), this.#s = null), this.#l && (St(this.#l), this.#l = null), Ce && (ct(
      /** @type {TemplateNode} */
      this.#n
    ), Se(), ct(Ji()));
    var o = !1, i = !1;
    const s = () => {
      if (o) {
        Cp();
        return;
      }
      o = !0, i && xp(), fn.ensure(), this.#d = 0, this.#l !== null && to(this.#l, () => {
        this.#l = null;
      }), this.#e = this.has_pending_snippet(), this.#a = this.#v(() => (this.#g = !1, Bt(() => this.#o(this.#t)))), this.#f > 0 ? this.#b() : this.#e = !1;
    };
    var a = Ye;
    try {
      $t(null), i = !0, n?.(e, s), i = !1;
    } catch (u) {
      so(u, this.#i && this.#i.parent);
    } finally {
      $t(a);
    }
    r && _r(() => {
      this.#l = this.#v(() => {
        fn.ensure(), this.#g = !0;
        try {
          return Bt(() => {
            r(
              this.#t,
              () => e,
              () => s
            );
          });
        } catch (u) {
          return so(
            u,
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
function ao(t, e) {
  return e;
}
function Lp(t, e, n) {
  for (var r = [], o = e.length, i = 0; i < o; i++)
    Tl(e[i].e, r, !0);
  Gd(r, () => {
    var s = r.length === 0 && n !== null;
    if (s) {
      var a = (
        /** @type {Element} */
        n
      ), u = (
        /** @type {Element} */
        a.parentNode
      );
      Nl(u), u.append(a), t.items.clear(), un(t, e[0].prev, e[o - 1].next);
    }
    for (var l = 0; l < o; l++) {
      var d = e[l];
      s || (t.items.delete(d.k), un(t, d.prev, d.next)), St(d.e, !s);
    }
    t.first === e[0] && (t.first = e[0].prev);
  });
}
function Ct(t, e, n, r, o, i = null) {
  var s = t, a = /* @__PURE__ */ new Map(), u = null, l = (e & hd) !== 0, d = (e & dd) !== 0, f = (e & fd) !== 0;
  if (l) {
    var h = (
      /** @type {Element} */
      t
    );
    s = Ce ? ct(
      /** @type {Comment | Text} */
      /* @__PURE__ */ pt(h)
    ) : h.appendChild(Mt());
  }
  Ce && mn();
  var p = null, m = /* @__PURE__ */ El(() => {
    var x = n();
    return Ds(x) ? x : x == null ? [] : wl(x);
  }), y, w = !0;
  function b() {
    Hp(E, y, s, e, r), p !== null && (y.length === 0 ? (p.fragment ? (s.before(p.fragment), p.fragment = null) : Ol(p.effect), S.first = p.effect) : to(p.effect, () => {
      p = null;
    }));
  }
  var S = Cr(() => {
    y = /** @type {V[]} */
    c(m);
    var x = y.length;
    let _ = !1;
    if (Ce) {
      var T = Cd(s) === As;
      T !== (x === 0) && (s = Ji(), ct(s), Vt(!1), _ = !0);
    }
    for (var I = /* @__PURE__ */ new Set(), B = (
      /** @type {Batch} */
      Qe
    ), $ = null, H = Bd(), N = 0; N < x; N += 1) {
      Ce && Ie.nodeType === lr && /** @type {Comment} */
      Ie.data === yl && (s = /** @type {Comment} */
      Ie, _ = !0, Vt(!1));
      var k = y[N], D = r(k, N), P = w ? null : a.get(D);
      P ? (d && lo(P.v, k), f ? lo(
        /** @type {Value<number>} */
        P.i,
        N
      ) : P.i = N, H && B.skipped_effects.delete(P.e)) : (P = Vp(
        w ? s : null,
        $,
        k,
        D,
        N,
        o,
        e,
        n
      ), w && (P.o = !0, $ === null ? u = P : $.next = P, $ = P), a.set(D, P)), I.add(D);
    }
    if (x === 0 && i && !p)
      if (w)
        p = {
          fragment: null,
          effect: Bt(() => i(s))
        };
      else {
        var A = document.createDocumentFragment(), R = Mt();
        A.append(R), p = {
          fragment: A,
          effect: Bt(() => i(R))
        };
      }
    if (Ce && x > 0 && ct(Ji()), !w)
      if (H) {
        for (const [M, Y] of a)
          I.has(M) || B.skipped_effects.add(Y.e);
        B.oncommit(b), B.ondiscard(() => {
        });
      } else
        b();
    _ && Vt(!0), c(m);
  }), E = { effect: S, items: a, first: u };
  w = !1, Ce && (s = Ie);
}
function Hp(t, e, n, r, o) {
  var i = (r & Gv) !== 0, s = e.length, a = t.items, u = t.first, l, d = null, f, h = [], p = [], m, y, w, b;
  if (i)
    for (b = 0; b < s; b += 1)
      m = e[b], y = o(m, b), w = /** @type {EachItem} */
      a.get(y), w.o && (w.a?.measure(), (f ??= /* @__PURE__ */ new Set()).add(w));
  for (b = 0; b < s; b += 1) {
    if (m = e[b], y = o(m, b), w = /** @type {EachItem} */
    a.get(y), t.first ??= w, !w.o) {
      w.o = !0;
      var S = d ? d.next : u;
      un(t, d, w), un(t, w, S), sa(w, S, n), d = w, h = [], p = [], u = d.next;
      continue;
    }
    if ((w.e.f & jt) !== 0 && (Ol(w.e), i && (w.a?.unfix(), (f ??= /* @__PURE__ */ new Set()).delete(w))), w !== u) {
      if (l !== void 0 && l.has(w)) {
        if (h.length < p.length) {
          var E = p[0], x;
          d = E.prev;
          var _ = h[0], T = h[h.length - 1];
          for (x = 0; x < h.length; x += 1)
            sa(h[x], E, n);
          for (x = 0; x < p.length; x += 1)
            l.delete(p[x]);
          un(t, _.prev, T.next), un(t, d, _), un(t, T, E), u = E, d = T, b -= 1, h = [], p = [];
        } else
          l.delete(w), sa(w, u, n), un(t, w.prev, w.next), un(t, w, d === null ? t.first : d.next), un(t, d, w), d = w;
        continue;
      }
      for (h = [], p = []; u !== null && u.k !== y; )
        (u.e.f & jt) === 0 && (l ??= /* @__PURE__ */ new Set()).add(u), p.push(u), u = u.next;
      if (u === null)
        continue;
      w = u;
    }
    h.push(w), d = w, u = w.next;
  }
  let I = a.size > s;
  if (u !== null || l !== void 0) {
    for (var B = l === void 0 ? [] : wl(l); u !== null; )
      (u.e.f & jt) === 0 && B.push(u), u = u.next;
    var $ = B.length;
    if (I = a.size - $ > s, $ > 0) {
      var H = (r & hd) !== 0 && s === 0 ? n : null;
      if (i) {
        for (b = 0; b < $; b += 1)
          B[b].a?.measure();
        for (b = 0; b < $; b += 1)
          B[b].a?.fix();
      }
      Lp(t, B, H);
    }
  }
  if (I)
    for (const N of a.values())
      N.o || (un(t, d, N), d = N);
  t.effect.last = d && d.e, i && _r(() => {
    if (f !== void 0)
      for (w of f)
        w.a?.apply();
  });
}
function Vp(t, e, n, r, o, i, s, a) {
  var u = (s & dd) !== 0, l = (s & Jv) === 0, d = u ? l ? /* @__PURE__ */ Hd(n, !1, !1) : tr(n) : n, f = (s & fd) === 0 ? o : tr(o), h = {
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
      var p = document.createDocumentFragment();
      p.append(t = Mt());
    }
    return h.e = Bt(() => i(
      /** @type {Node} */
      t,
      d,
      f,
      a
    )), e !== null && (e.next = h), h;
  } finally {
  }
}
function sa(t, e, n) {
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
      /* @__PURE__ */ Gt(i)
    );
    o.before(i), i = s;
  }
}
function un(t, e, n) {
  e === null ? (t.first = n, t.effect.first = n && n.e) : (e.e.next && (e.e.next.prev = null), e.next = n, e.e.next = n && n.e), n !== null && (n.e.prev && (n.e.prev.next = null), n.prev = e, n.e.prev = e && e.e);
}
function Dd(t, e, n, r) {
  const o = bo() ? ii : El;
  if (n.length === 0 && t.length === 0) {
    r(e.map(o));
    return;
  }
  var i = Qe, s = (
    /** @type {Effect} */
    Fe
  ), a = zp();
  function u() {
    Promise.all(n.map((l) => /* @__PURE__ */ Rp(l))).then((l) => {
      a();
      try {
        r([...e.map(o), ...l]);
      } catch (d) {
        (s.f & Un) === 0 && so(d, s);
      }
      i?.deactivate(), Qi();
    }).catch((l) => {
      so(l, s);
    });
  }
  t.length > 0 ? Promise.all(t).then(() => {
    a();
    try {
      return u();
    } finally {
      i?.deactivate(), Qi();
    }
  }) : u();
}
function zp() {
  var t = Fe, e = Ye, n = nt, r = Qe;
  return function(i = !0) {
    rn(t), $t(e), io(n), i && r?.activate();
  };
}
function Qi() {
  rn(null), $t(null), io(null);
}
// @__NO_SIDE_EFFECTS__
function ii(t) {
  var e = Et | Zt, n = Ye !== null && (Ye.f & Et) !== 0 ? (
    /** @type {Derived} */
    Ye
  ) : null;
  return Fe !== null && (Fe.f |= Wr), {
    ctx: nt,
    deps: null,
    effects: null,
    equals: Sd,
    f: e,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      kt
    ),
    wv: 0,
    parent: n ?? Fe,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Rp(t, e) {
  let n = (
    /** @type {Effect | null} */
    Fe
  );
  n === null && dp();
  var r = (
    /** @type {Boundary} */
    n.b
  ), o = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), i = tr(
    /** @type {V} */
    kt
  ), s = !Ye, a = /* @__PURE__ */ new Map();
  return qp(() => {
    var u = bd();
    o = u.promise;
    try {
      Promise.resolve(t()).then(u.resolve, u.reject).then(() => {
        l === Qe && l.committed && l.deactivate(), Qi();
      });
    } catch (h) {
      u.reject(h), Qi();
    }
    var l = (
      /** @type {Batch} */
      Qe
    );
    if (s) {
      var d = !r.is_pending();
      r.update_pending_count(1), l.increment(d), a.get(l)?.reject(Qr), a.delete(l), a.set(l, u);
    }
    const f = (h, p = void 0) => {
      if (l.activate(), p)
        p !== Qr && (i.f |= gr, lo(i, p));
      else {
        (i.f & gr) !== 0 && (i.f ^= gr), lo(i, h);
        for (const [m, y] of a) {
          if (a.delete(m), m === l) break;
          y.reject(Qr);
        }
      }
      s && (r.update_pending_count(-1), l.decrement(d));
    };
    u.promise.then(f, (h) => f(null, h || "unknown"));
  }), Bs(() => {
    for (const u of a.values())
      u.reject(Qr);
  }), new Promise((u) => {
    function l(d) {
      function f() {
        d === o ? u(i) : l(o);
      }
      d.then(f, f);
    }
    l(o);
  });
}
// @__NO_SIDE_EFFECTS__
function C(t) {
  const e = /* @__PURE__ */ ii(t);
  return ef(e), e;
}
// @__NO_SIDE_EFFECTS__
function El(t) {
  const e = /* @__PURE__ */ ii(t);
  return e.equals = Ed, e;
}
function Id(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var n = 0; n < e.length; n += 1)
      St(
        /** @type {Effect} */
        e[n]
      );
  }
}
function Fp(t) {
  for (var e = t.parent; e !== null; ) {
    if ((e.f & Et) === 0)
      return (e.f & Un) === 0 ? (
        /** @type {Effect} */
        e
      ) : null;
    e = e.parent;
  }
  return null;
}
function Pl(t) {
  var e, n = Fe;
  rn(Fp(t));
  try {
    t.f &= ~Vr, Id(t), e = of(t);
  } finally {
    rn(n);
  }
  return e;
}
function Md(t) {
  var e = Pl(t);
  if (t.equals(e) || (Qe?.is_fork || (t.v = e), t.wv = nf()), !Xr)
    if (tn !== null)
      ($o() || Qe?.is_fork) && tn.set(t, e);
    else {
      var n = (t.f & pn) === 0 ? ar : Dt;
      It(t, n);
    }
}
let Ta = /* @__PURE__ */ new Set();
const vr = /* @__PURE__ */ new Map();
let Ld = !1;
function tr(t, e) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: Sd,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function ye(t, e) {
  const n = tr(t);
  return ef(n), n;
}
// @__NO_SIDE_EFFECTS__
function Hd(t, e = !1, n = !0) {
  const r = tr(t);
  return e || (r.equals = Ed), wo && n && nt !== null && nt.l !== null && (nt.l.s ??= []).push(r), r;
}
function K(t, e, n = !1) {
  Ye !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Tn || (Ye.f & Ou) !== 0) && bo() && (Ye.f & (Et | ir | _l | Ou)) !== 0 && !Gn?.includes(t) && bp();
  let r = n ? ht(e) : e;
  return lo(t, r);
}
function lo(t, e) {
  if (!t.equals(e)) {
    var n = t.v;
    Xr ? vr.set(t, e) : vr.set(t, n), t.v = e;
    var r = fn.ensure();
    r.capture(t, n), (t.f & Et) !== 0 && ((t.f & Zt) !== 0 && Pl(
      /** @type {Derived} */
      t
    ), It(t, (t.f & pn) !== 0 ? Dt : ar)), t.wv = nf(), Vd(t, Zt), bo() && Fe !== null && (Fe.f & Dt) !== 0 && (Fe.f & (sr | xr)) === 0 && (Qt === null ? jp([t]) : Qt.push(t)), !r.is_fork && Ta.size > 0 && !Ld && Bp();
  }
  return e;
}
function Bp() {
  Ld = !1;
  var t = pr;
  es(!0);
  const e = Array.from(Ta);
  try {
    for (const n of e)
      (n.f & Dt) !== 0 && It(n, ar), si(n) && Wo(n);
  } finally {
    es(t);
  }
  Ta.clear();
}
function Du(t, e = 1) {
  var n = c(t), r = e === 1 ? n++ : n--;
  return K(t, n), r;
}
function Pn(t) {
  K(t, t.v + 1);
}
function Vd(t, e) {
  var n = t.reactions;
  if (n !== null)
    for (var r = bo(), o = n.length, i = 0; i < o; i++) {
      var s = n[i], a = s.f;
      if (!(!r && s === Fe)) {
        var u = (a & Zt) === 0;
        if (u && It(s, e), (a & Et) !== 0) {
          var l = (
            /** @type {Derived} */
            s
          );
          tn?.delete(l), (a & Vr) === 0 && (a & pn && (s.f |= Vr), Vd(l, ar));
        } else u && ((a & ir) !== 0 && Kn !== null && Kn.add(
          /** @type {Effect} */
          s
        ), Rr(
          /** @type {Effect} */
          s
        ));
      }
    }
}
function ht(t) {
  if (typeof t != "object" || t === null || Dn in t)
    return t;
  const e = Is(t);
  if (e !== wd && e !== ap)
    return t;
  var n = /* @__PURE__ */ new Map(), r = Ds(t), o = /* @__PURE__ */ ye(0), i = Jn, s = (a) => {
    if (Jn === i)
      return a();
    var u = Ye, l = Jn;
    $t(null), Hu(i);
    var d = a();
    return $t(u), Hu(l), d;
  };
  return r && n.set("length", /* @__PURE__ */ ye(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(a, u, l) {
        (!("value" in l) || l.configurable === !1 || l.enumerable === !1 || l.writable === !1) && yp();
        var d = n.get(u);
        return d === void 0 ? d = s(() => {
          var f = /* @__PURE__ */ ye(l.value);
          return n.set(u, f), f;
        }) : K(d, l.value, !0), !0;
      },
      deleteProperty(a, u) {
        var l = n.get(u);
        if (l === void 0) {
          if (u in a) {
            const d = s(() => /* @__PURE__ */ ye(kt));
            n.set(u, d), Pn(o);
          }
        } else
          K(l, kt), Pn(o);
        return !0;
      },
      get(a, u, l) {
        if (u === Dn)
          return t;
        var d = n.get(u), f = u in a;
        if (d === void 0 && (!f || jn(a, u)?.writable) && (d = s(() => {
          var p = ht(f ? a[u] : kt), m = /* @__PURE__ */ ye(p);
          return m;
        }), n.set(u, d)), d !== void 0) {
          var h = c(d);
          return h === kt ? void 0 : h;
        }
        return Reflect.get(a, u, l);
      },
      getOwnPropertyDescriptor(a, u) {
        var l = Reflect.getOwnPropertyDescriptor(a, u);
        if (l && "value" in l) {
          var d = n.get(u);
          d && (l.value = c(d));
        } else if (l === void 0) {
          var f = n.get(u), h = f?.v;
          if (f !== void 0 && h !== kt)
            return {
              enumerable: !0,
              configurable: !0,
              value: h,
              writable: !0
            };
        }
        return l;
      },
      has(a, u) {
        if (u === Dn)
          return !0;
        var l = n.get(u), d = l !== void 0 && l.v !== kt || Reflect.has(a, u);
        if (l !== void 0 || Fe !== null && (!d || jn(a, u)?.writable)) {
          l === void 0 && (l = s(() => {
            var h = d ? ht(a[u]) : kt, p = /* @__PURE__ */ ye(h);
            return p;
          }), n.set(u, l));
          var f = c(l);
          if (f === kt)
            return !1;
        }
        return d;
      },
      set(a, u, l, d) {
        var f = n.get(u), h = u in a;
        if (r && u === "length")
          for (var p = l; p < /** @type {Source<number>} */
          f.v; p += 1) {
            var m = n.get(p + "");
            m !== void 0 ? K(m, kt) : p in a && (m = s(() => /* @__PURE__ */ ye(kt)), n.set(p + "", m));
          }
        if (f === void 0)
          (!h || jn(a, u)?.writable) && (f = s(() => /* @__PURE__ */ ye(void 0)), K(f, ht(l)), n.set(u, f));
        else {
          h = f.v !== kt;
          var y = s(() => ht(l));
          K(f, y);
        }
        var w = Reflect.getOwnPropertyDescriptor(a, u);
        if (w?.set && w.set.call(d, l), !h) {
          if (r && typeof u == "string") {
            var b = (
              /** @type {Source<number>} */
              n.get("length")
            ), S = Number(u);
            Number.isInteger(S) && S >= b.v && K(b, S + 1);
          }
          Pn(o);
        }
        return !0;
      },
      ownKeys(a) {
        c(o);
        var u = Reflect.ownKeys(a).filter((f) => {
          var h = n.get(f);
          return h === void 0 || h.v !== kt;
        });
        for (var [l, d] of n)
          d.v !== kt && !(l in a) && u.push(l);
        return u;
      },
      setPrototypeOf() {
        wp();
      }
    }
  );
}
function Iu(t) {
  try {
    if (t !== null && typeof t == "object" && Dn in t)
      return t[Dn];
  } catch {
  }
  return t;
}
function $p(t, e) {
  return Object.is(Iu(t), Iu(e));
}
var Rt, zd, Rd, Fd;
function Oa() {
  if (Rt === void 0) {
    Rt = window, zd = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype, n = Text.prototype;
    Rd = jn(e, "firstChild").get, Fd = jn(e, "nextSibling").get, Tu(t) && (t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__style = void 0, t.__e = void 0), Tu(n) && (n.__t = void 0);
  }
}
function Mt(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function pt(t) {
  return Rd.call(t);
}
// @__NO_SIDE_EFFECTS__
function Gt(t) {
  return Fd.call(t);
}
function Z(t, e) {
  if (!Ce)
    return /* @__PURE__ */ pt(t);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ pt(Ie)
  );
  if (n === null)
    n = Ie.appendChild(Mt());
  else if (e && n.nodeType !== Vs) {
    var r = Mt();
    return n?.before(r), ct(r), r;
  }
  return ct(n), n;
}
function J(t, e = !1) {
  if (!Ce) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ pt(
        /** @type {Node} */
        t
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Gt(n) : n;
  }
  if (e && Ie?.nodeType !== Vs) {
    var r = Mt();
    return Ie?.before(r), ct(r), r;
  }
  return Ie;
}
function z(t, e = 1, n = !1) {
  let r = Ce ? Ie : t;
  for (var o; e--; )
    o = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ Gt(r);
  if (!Ce)
    return r;
  if (n && r?.nodeType !== Vs) {
    var i = Mt();
    return r === null ? o?.after(i) : r.before(i), ct(i), i;
  }
  return ct(r), /** @type {TemplateNode} */
  r;
}
function Nl(t) {
  t.textContent = "";
}
function Bd() {
  return !1;
}
function Kp(t, e) {
  if (e) {
    const n = document.body;
    t.autofocus = !0, _r(() => {
      document.activeElement === n && t.focus();
    });
  }
}
function Wp(t) {
  Ce && /* @__PURE__ */ pt(t) !== null && Nl(t);
}
let Mu = !1;
function $d() {
  Mu || (Mu = !0, document.addEventListener(
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
function Fs(t) {
  var e = Ye, n = Fe;
  $t(null), rn(null);
  try {
    return t();
  } finally {
    $t(e), rn(n);
  }
}
function Kd(t, e, n, r = n) {
  t.addEventListener(e, () => Fs(n));
  const o = t.__on_r;
  o ? t.__on_r = () => {
    o(), r(!0);
  } : t.__on_r = () => r(!0), $d();
}
function Wd(t) {
  Fe === null && (Ye === null && gp(), hp()), Xr && fp();
}
function Zp(t, e) {
  var n = e.last;
  n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t);
}
function on(t, e, n) {
  var r = Fe;
  r !== null && (r.f & jt) !== 0 && (t |= jt);
  var o = {
    ctx: nt,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: t | Zt | pn,
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
      Wo(o), o.f |= Hs;
    } catch (a) {
      throw St(o), a;
    }
  else e !== null && Rr(o);
  var i = o;
  if (n && i.deps === null && i.teardown === null && i.nodes_start === null && i.first === i.last && // either `null`, or a singular child
  (i.f & Wr) === 0 && (i = i.first, (t & ir) !== 0 && (t & er) !== 0 && i !== null && (i.f |= er)), i !== null && (i.parent = r, r !== null && Zp(i, r), Ye !== null && (Ye.f & Et) !== 0 && (t & xr) === 0)) {
    var s = (
      /** @type {Derived} */
      Ye
    );
    (s.effects ??= []).push(i);
  }
  return o;
}
function $o() {
  return Ye !== null && !Tn;
}
function Bs(t) {
  const e = on(Ms, null, !1);
  return It(e, Dt), e.teardown = t, e;
}
function He(t) {
  Wd();
  var e = (
    /** @type {Effect} */
    Fe.f
  ), n = !Ye && (e & sr) !== 0 && (e & Hs) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      nt
    );
    (r.e ??= []).push(t);
  } else
    return Zd(t);
}
function Zd(t) {
  return on(bl | _d, t, !1);
}
function Ft(t) {
  return Wd(), on(Ms | _d, t, !0);
}
function Yr(t) {
  fn.ensure();
  const e = on(xr | Wr, t, !0);
  return () => {
    St(e);
  };
}
function Yp(t) {
  fn.ensure();
  const e = on(xr | Wr, t, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? to(e, () => {
      St(e), r(void 0);
    }) : (St(e), r(void 0));
  });
}
function xo(t) {
  return on(bl, t, !1);
}
function qp(t) {
  return on(_l | Wr, t, !0);
}
function qr(t, e = 0) {
  return on(Ms | e, t, !0);
}
function Te(t, e = [], n = [], r = []) {
  Dd(r, e, n, (o) => {
    on(Ms, () => t(...o.map(c)), !0);
  });
}
function Cr(t, e = 0) {
  var n = on(ir | e, t, !0);
  return n;
}
function Yd(t, e = 0) {
  var n = on(xd | e, t, !0);
  return n;
}
function Bt(t) {
  return on(sr | Wr, t, !0);
}
function qd(t) {
  var e = t.teardown;
  if (e !== null) {
    const n = Xr, r = Ye;
    Lu(!0), $t(null);
    try {
      e.call(null);
    } finally {
      Lu(n), $t(r);
    }
  }
}
function Xd(t, e = !1) {
  var n = t.first;
  for (t.first = t.last = null; n !== null; ) {
    const o = n.ac;
    o !== null && Fs(() => {
      o.abort(Qr);
    });
    var r = n.next;
    (n.f & xr) !== 0 ? n.parent = null : St(n, e), n = r;
  }
}
function Xp(t) {
  for (var e = t.first; e !== null; ) {
    var n = e.next;
    (e.f & sr) === 0 && St(e), e = n;
  }
}
function St(t, e = !0) {
  var n = !1;
  (e || (t.f & xl) !== 0) && t.nodes_start !== null && t.nodes_end !== null && (jd(
    t.nodes_start,
    /** @type {TemplateNode} */
    t.nodes_end
  ), n = !0), Xd(t, e && !n), ts(t, 0), It(t, Un);
  var r = t.transitions;
  if (r !== null)
    for (const i of r)
      i.stop();
  qd(t);
  var o = t.parent;
  o !== null && o.first !== null && Ud(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes_start = t.nodes_end = t.ac = null;
}
function jd(t, e) {
  for (; t !== null; ) {
    var n = t === e ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Gt(t)
    );
    t.remove(), t = n;
  }
}
function Ud(t) {
  var e = t.parent, n = t.prev, r = t.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), e !== null && (e.first === t && (e.first = r), e.last === t && (e.last = n));
}
function to(t, e, n = !0) {
  var r = [];
  Tl(t, r, !0), Gd(r, () => {
    n && St(t), e && e();
  });
}
function Gd(t, e) {
  var n = t.length;
  if (n > 0) {
    var r = () => --n || e();
    for (var o of t)
      o.out(r);
  } else
    e();
}
function Tl(t, e, n) {
  if ((t.f & jt) === 0) {
    if (t.f ^= jt, t.transitions !== null)
      for (const s of t.transitions)
        (s.is_global || n) && e.push(s);
    for (var r = t.first; r !== null; ) {
      var o = r.next, i = (r.f & er) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (r.f & sr) !== 0 && (t.f & ir) !== 0;
      Tl(r, e, i ? n : !1), r = o;
    }
  }
}
function Ol(t) {
  Jd(t, !0);
}
function Jd(t, e) {
  if ((t.f & jt) !== 0) {
    t.f ^= jt, (t.f & Dt) === 0 && (It(t, Zt), Rr(t));
    for (var n = t.first; n !== null; ) {
      var r = n.next, o = (n.f & er) !== 0 || (n.f & sr) !== 0;
      Jd(n, o ? e : !1), n = r;
    }
    if (t.transitions !== null)
      for (const i of t.transitions)
        (i.is_global || e) && i.in();
  }
}
function Qd(t, e) {
  for (var n = t.nodes_start, r = t.nodes_end; n !== null; ) {
    var o = n === r ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Gt(n)
    );
    e.append(n), n = o;
  }
}
let pr = !1;
function es(t) {
  pr = t;
}
let Xr = !1;
function Lu(t) {
  Xr = t;
}
let Ye = null, Tn = !1;
function $t(t) {
  Ye = t;
}
let Fe = null;
function rn(t) {
  Fe = t;
}
let Gn = null;
function ef(t) {
  Ye !== null && (Gn === null ? Gn = [t] : Gn.push(t));
}
let Ht = null, qt = 0, Qt = null;
function jp(t) {
  Qt = t;
}
let tf = 1, Ko = 0, Jn = Ko;
function Hu(t) {
  Jn = t;
}
function nf() {
  return ++tf;
}
function si(t) {
  var e = t.f;
  if ((e & Zt) !== 0)
    return !0;
  if (e & Et && (t.f &= ~Vr), (e & ar) !== 0) {
    var n = t.deps;
    if (n !== null)
      for (var r = n.length, o = 0; o < r; o++) {
        var i = n[o];
        if (si(
          /** @type {Derived} */
          i
        ) && Md(
          /** @type {Derived} */
          i
        ), i.wv > t.wv)
          return !0;
      }
    (e & pn) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    tn === null && It(t, Dt);
  }
  return !1;
}
function rf(t, e, n = !0) {
  var r = t.reactions;
  if (r !== null && !Gn?.includes(t))
    for (var o = 0; o < r.length; o++) {
      var i = r[o];
      (i.f & Et) !== 0 ? rf(
        /** @type {Derived} */
        i,
        e,
        !1
      ) : e === i && (n ? It(i, Zt) : (i.f & Dt) !== 0 && It(i, ar), Rr(
        /** @type {Effect} */
        i
      ));
    }
}
function of(t) {
  var e = Ht, n = qt, r = Qt, o = Ye, i = Gn, s = nt, a = Tn, u = Jn, l = t.f;
  Ht = /** @type {null | Value[]} */
  null, qt = 0, Qt = null, Ye = (l & (sr | xr)) === 0 ? t : null, Gn = null, io(t.ctx), Tn = !1, Jn = ++Ko, t.ac !== null && (Fs(() => {
    t.ac.abort(Qr);
  }), t.ac = null);
  try {
    t.f |= Pa;
    var d = (
      /** @type {Function} */
      t.fn
    ), f = d(), h = t.deps;
    if (Ht !== null) {
      var p;
      if (ts(t, qt), h !== null && qt > 0)
        for (h.length = qt + Ht.length, p = 0; p < Ht.length; p++)
          h[qt + p] = Ht[p];
      else
        t.deps = h = Ht;
      if (pr && $o() && (t.f & pn) !== 0)
        for (p = qt; p < h.length; p++)
          (h[p].reactions ??= []).push(t);
    } else h !== null && qt < h.length && (ts(t, qt), h.length = qt);
    if (bo() && Qt !== null && !Tn && h !== null && (t.f & (Et | ar | Zt)) === 0)
      for (p = 0; p < /** @type {Source[]} */
      Qt.length; p++)
        rf(
          Qt[p],
          /** @type {Effect} */
          t
        );
    return o !== null && o !== t && (Ko++, Qt !== null && (r === null ? r = Qt : r.push(.../** @type {Source[]} */
    Qt))), (t.f & gr) !== 0 && (t.f ^= gr), f;
  } catch (m) {
    return Nd(m);
  } finally {
    t.f ^= Pa, Ht = e, qt = n, Qt = r, Ye = o, Gn = i, io(s), Tn = a, Jn = u;
  }
}
function Up(t, e) {
  let n = e.reactions;
  if (n !== null) {
    var r = sp.call(n, t);
    if (r !== -1) {
      var o = n.length - 1;
      o === 0 ? n = e.reactions = null : (n[r] = n[o], n.pop());
    }
  }
  n === null && (e.f & Et) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Ht === null || !Ht.includes(e)) && (It(e, ar), (e.f & pn) !== 0 && (e.f ^= pn, e.f &= ~Vr), Id(
    /** @type {Derived} **/
    e
  ), ts(
    /** @type {Derived} **/
    e,
    0
  ));
}
function ts(t, e) {
  var n = t.deps;
  if (n !== null)
    for (var r = e; r < n.length; r++)
      Up(t, n[r]);
}
function Wo(t) {
  var e = t.f;
  if ((e & Un) === 0) {
    It(t, Dt);
    var n = Fe, r = pr;
    Fe = t, pr = !0;
    try {
      (e & (ir | xd)) !== 0 ? Xp(t) : Xd(t), qd(t);
      var o = of(t);
      t.teardown = typeof o == "function" ? o : null, t.wv = tf;
      var i;
      ka && Sp && (t.f & Zt) !== 0 && t.deps;
    } finally {
      pr = r, Fe = n;
    }
  }
}
async function sf() {
  await Promise.resolve(), g();
}
function c(t) {
  var e = t.f, n = (e & Et) !== 0;
  if (Ye !== null && !Tn) {
    var r = Fe !== null && (Fe.f & Un) !== 0;
    if (!r && !Gn?.includes(t)) {
      var o = Ye.deps;
      if ((Ye.f & Pa) !== 0)
        t.rv < Ko && (t.rv = Ko, Ht === null && o !== null && o[qt] === t ? qt++ : Ht === null ? Ht = [t] : Ht.includes(t) || Ht.push(t));
      else {
        (Ye.deps ??= []).push(t);
        var i = t.reactions;
        i === null ? t.reactions = [Ye] : i.includes(Ye) || i.push(Ye);
      }
    }
  }
  if (Xr) {
    if (vr.has(t))
      return vr.get(t);
    if (n) {
      var s = (
        /** @type {Derived} */
        t
      ), a = s.v;
      return ((s.f & Dt) === 0 && s.reactions !== null || lf(s)) && (a = Pl(s)), vr.set(s, a), a;
    }
  } else n && (!tn?.has(t) || Qe?.is_fork && !$o()) && (s = /** @type {Derived} */
  t, si(s) && Md(s), pr && $o() && (s.f & pn) === 0 && af(s));
  if (tn?.has(t))
    return tn.get(t);
  if ((t.f & gr) !== 0)
    throw t.v;
  return t.v;
}
function af(t) {
  if (t.deps !== null) {
    t.f ^= pn;
    for (const e of t.deps)
      (e.reactions ??= []).push(t), (e.f & Et) !== 0 && (e.f & pn) === 0 && af(
        /** @type {Derived} */
        e
      );
  }
}
function lf(t) {
  if (t.v === kt) return !0;
  if (t.deps === null) return !1;
  for (const e of t.deps)
    if (vr.has(e) || (e.f & Et) !== 0 && lf(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function it(t) {
  var e = Tn;
  try {
    return Tn = !0, t();
  } finally {
    Tn = e;
  }
}
const Gp = -7169;
function It(t, e) {
  t.f = t.f & Gp | e;
}
function Jp(t, e) {
  var n = {};
  for (var r in t)
    e.includes(r) || (n[r] = t[r]);
  for (var o of Object.getOwnPropertySymbols(t))
    Object.propertyIsEnumerable.call(t, o) && !e.includes(o) && (n[o] = t[o]);
  return n;
}
function Al(t) {
  if (!(typeof t != "object" || !t || t instanceof EventTarget)) {
    if (Dn in t)
      Aa(t);
    else if (!Array.isArray(t))
      for (let e in t) {
        const n = t[e];
        typeof n == "object" && n && Dn in n && Aa(n);
      }
  }
}
function Aa(t, e = /* @__PURE__ */ new Set()) {
  if (typeof t == "object" && t !== null && // We don't want to traverse DOM elements
  !(t instanceof EventTarget) && !e.has(t)) {
    e.add(t), t instanceof Date && t.getTime();
    for (let r in t)
      try {
        Aa(t[r], e);
      } catch {
      }
    const n = Is(t);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = yd(n);
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
const uf = /* @__PURE__ */ new Set(), Da = /* @__PURE__ */ new Set();
function Dl(t, e, n, r = {}) {
  function o(i) {
    if (r.capture || Do.call(e, i), !i.cancelBubble)
      return Fs(() => n?.call(this, i));
  }
  return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? _r(() => {
    e.addEventListener(t, o, r);
  }) : e.addEventListener(t, o, r), o;
}
function gt(t, e, n, r = {}) {
  var o = Dl(e, t, n, r);
  return () => {
    t.removeEventListener(e, o, r);
  };
}
function ns(t, e, n, r, o) {
  var i = { capture: r, passive: o }, s = Dl(t, e, n, i);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && Bs(() => {
    e.removeEventListener(t, s, i);
  });
}
function Sr(t) {
  for (var e = 0; e < t.length; e++)
    uf.add(t[e]);
  for (var n of Da)
    n(t);
}
let Vu = null;
function Do(t) {
  var e = this, n = (
    /** @type {Node} */
    e.ownerDocument
  ), r = t.type, o = t.composedPath?.() || [], i = (
    /** @type {null | Element} */
    o[0] || t.target
  );
  Vu = t;
  var s = 0, a = Vu === t && t.__root;
  if (a) {
    var u = o.indexOf(a);
    if (u !== -1 && (e === document || e === /** @type {any} */
    window)) {
      t.__root = e;
      return;
    }
    var l = o.indexOf(e);
    if (l === -1)
      return;
    u <= l && (s = u);
  }
  if (i = /** @type {Element} */
  o[s] || t.target, i !== e) {
    Gi(t, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    var d = Ye, f = Fe;
    $t(null), rn(null);
    try {
      for (var h, p = []; i !== null; ) {
        var m = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var y = i["__" + r];
          y != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          t.target === i) && y.call(i, t);
        } catch (w) {
          h ? p.push(w) : h = w;
        }
        if (t.cancelBubble || m === e || m === null)
          break;
        i = m;
      }
      if (h) {
        for (let w of p)
          queueMicrotask(() => {
            throw w;
          });
        throw h;
      }
    } finally {
      t.__root = e, delete t.currentTarget, $t(d), rn(f);
    }
  }
}
function Il(t) {
  var e = document.createElement("template");
  return e.innerHTML = t.replaceAll("<!>", "<!---->"), e.content;
}
function Wt(t, e) {
  var n = (
    /** @type {Effect} */
    Fe
  );
  n.nodes_start === null && (n.nodes_start = t, n.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function ne(t, e) {
  var n = (e & vd) !== 0, r = (e & rp) !== 0, o, i = !t.startsWith("<!>");
  return () => {
    if (Ce)
      return Wt(Ie, null), Ie;
    o === void 0 && (o = Il(i ? t : "<!>" + t), n || (o = /** @type {Node} */
    /* @__PURE__ */ pt(o)));
    var s = (
      /** @type {TemplateNode} */
      r || zd ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ pt(s)
      ), u = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      Wt(a, u);
    } else
      Wt(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function Qp(t, e, n = "svg") {
  var r = !t.startsWith("<!>"), o = (e & vd) !== 0, i = `<${n}>${r ? t : "<!>" + t}</${n}>`, s;
  return () => {
    if (Ce)
      return Wt(Ie, null), Ie;
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        Il(i)
      ), u = (
        /** @type {Element} */
        /* @__PURE__ */ pt(a)
      );
      if (o)
        for (s = document.createDocumentFragment(); /* @__PURE__ */ pt(u); )
          s.appendChild(
            /** @type {Node} */
            /* @__PURE__ */ pt(u)
          );
      else
        s = /** @type {Element} */
        /* @__PURE__ */ pt(u);
    }
    var l = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    if (o) {
      var d = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ pt(l)
      ), f = (
        /** @type {TemplateNode} */
        l.lastChild
      );
      Wt(d, f);
    } else
      Wt(l, l);
    return l;
  };
}
// @__NO_SIDE_EFFECTS__
function _e(t, e) {
  return /* @__PURE__ */ Qp(t, e, "svg");
}
function Me(t = "") {
  if (!Ce) {
    var e = Mt(t + "");
    return Wt(e, e), e;
  }
  var n = Ie;
  return n.nodeType !== Vs && (n.before(n = Mt()), ct(n)), Wt(n, n), n;
}
function de() {
  if (Ce)
    return Wt(Ie, null), Ie;
  var t = document.createDocumentFragment(), e = document.createComment(""), n = Mt();
  return t.append(e, n), Wt(e, n), t;
}
function O(t, e) {
  if (Ce) {
    var n = (
      /** @type {Effect} */
      Fe
    );
    ((n.f & Hs) === 0 || n.nodes_end === null) && (n.nodes_end = Ie), mn();
    return;
  }
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
function ai() {
  if (Ce && Ie && Ie.nodeType === lr && Ie.textContent?.startsWith("$")) {
    const t = Ie.textContent.substring(1);
    return mn(), t;
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
function tt(t, e) {
  var n = e == null ? "" : typeof e == "object" ? e + "" : e;
  n !== (t.__t ??= t.nodeValue) && (t.__t = n, t.nodeValue = n + "");
}
function Ml(t, e) {
  return cf(t, e);
}
function u1(t, e) {
  Oa(), e.intro = e.intro ?? !1;
  const n = e.target, r = Ce, o = Ie;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ pt(n)
    ); i && (i.nodeType !== lr || /** @type {Comment} */
    i.data !== pd); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ Gt(i);
    if (!i)
      throw Hr;
    Vt(!0), ct(
      /** @type {Comment} */
      i
    );
    const s = cf(t, { ...e, anchor: i });
    return Vt(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s instanceof Error && s.message.split(`
`).some((a) => a.startsWith("https://svelte.dev/e/")))
      throw s;
    return s !== Hr && console.warn("Failed to hydrate: ", s), e.recover === !1 && pp(), Oa(), Nl(n), Vt(!1), Ml(t, e);
  } finally {
    Vt(r), ct(o);
  }
}
const Ur = /* @__PURE__ */ new Map();
function cf(t, { target: e, anchor: n, props: r = {}, events: o, context: i, intro: s = !0 }) {
  Oa();
  var a = /* @__PURE__ */ new Set(), u = (f) => {
    for (var h = 0; h < f.length; h++) {
      var p = f[h];
      if (!a.has(p)) {
        a.add(p);
        var m = s1(p);
        e.addEventListener(p, Do, { passive: m });
        var y = Ur.get(p);
        y === void 0 ? (document.addEventListener(p, Do, { passive: m }), Ur.set(p, 1)) : Ur.set(p, y + 1);
      }
    }
  };
  u(wl(uf)), Da.add(u);
  var l = void 0, d = Yp(() => {
    var f = n ?? e.appendChild(Mt());
    return Ip(
      /** @type {TemplateNode} */
      f,
      {
        pending: () => {
        }
      },
      (h) => {
        if (i) {
          ue({});
          var p = (
            /** @type {ComponentContext} */
            nt
          );
          p.c = i;
        }
        if (o && (r.$$events = o), Ce && Wt(
          /** @type {TemplateNode} */
          h,
          null
        ), l = t(h, r) || {}, Ce && (Fe.nodes_end = Ie, Ie === null || Ie.nodeType !== lr || /** @type {Comment} */
        Ie.data !== yl))
          throw oi(), Hr;
        i && ce();
      }
    ), () => {
      for (var h of a) {
        e.removeEventListener(h, Do);
        var p = (
          /** @type {number} */
          Ur.get(h)
        );
        --p === 0 ? (document.removeEventListener(h, Do), Ur.delete(h)) : Ur.set(h, p);
      }
      Da.delete(u), f !== n && f.parentNode?.removeChild(f);
    };
  });
  return Ia.set(l, d), l;
}
let Ia = /* @__PURE__ */ new WeakMap();
function df(t, e) {
  const n = Ia.get(t);
  return n ? (Ia.delete(t), n(e)) : Promise.resolve();
}
class li {
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
        Ol(r), this.#r.delete(n);
      else {
        var o = this.#n.get(n);
        o && (this.#t.set(n, o.effect), this.#n.delete(n), o.fragment.lastChild.remove(), this.anchor.before(o.fragment), r = o.effect);
      }
      for (const [i, s] of this.#e) {
        if (this.#e.delete(i), i === e)
          break;
        const a = this.#n.get(s);
        a && (St(a.effect), this.#n.delete(s));
      }
      for (const [i, s] of this.#t) {
        if (i === n || this.#r.has(i)) continue;
        const a = () => {
          if (Array.from(this.#e.values()).includes(i)) {
            var l = document.createDocumentFragment();
            Qd(s, l), l.append(Mt()), this.#n.set(i, { effect: s, fragment: l });
          } else
            St(s);
          this.#r.delete(i), this.#t.delete(i);
        };
        this.#o || !r ? (this.#r.add(i), to(s, a, !1)) : a();
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
      n.includes(r) || (St(o.effect), this.#n.delete(r));
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
    ), o = Bd();
    if (n && !this.#t.has(e) && !this.#n.has(e))
      if (o) {
        var i = document.createDocumentFragment(), s = Mt();
        i.append(s), this.#n.set(e, {
          effect: Bt(() => n(s)),
          fragment: i
        });
      } else
        this.#t.set(
          e,
          Bt(() => n(this.anchor))
        );
    if (this.#e.set(r, e), o) {
      for (const [a, u] of this.#t)
        a === e ? r.skipped_effects.delete(u) : r.skipped_effects.add(u);
      for (const [a, u] of this.#n)
        a === e ? r.skipped_effects.delete(u.effect) : r.skipped_effects.add(u.effect);
      r.oncommit(this.#i), r.ondiscard(this.#a);
    } else
      Ce && (this.anchor = Ie), this.#i();
  }
}
function Oe(t, e, ...n) {
  var r = new li(t);
  Cr(() => {
    const o = e() ?? null;
    r.ensure(o, o && ((i) => o(i, ...n)));
  }, er);
}
function xn(t) {
  nt === null && Sl(), wo && nt.l !== null ? c1(nt).m.push(t) : He(() => {
    const e = it(t);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function ui(t) {
  nt === null && Sl(), xn(() => () => it(t));
}
function c1(t) {
  var e = (
    /** @type {ComponentContextLegacy} */
    t.l
  );
  return e.u ??= { a: [], b: [], m: [] };
}
function d1() {
  return Symbol(md);
}
function ie(t, e, n = !1) {
  Ce && mn();
  var r = new li(t), o = n ? er : 0;
  function i(s, a) {
    if (Ce) {
      const l = Cd(t) === As;
      if (s === l) {
        var u = Ji();
        ct(u), r.anchor = u, Vt(!1), r.ensure(s, a), Vt(!0);
        return;
      }
    }
    r.ensure(s, a);
  }
  Cr(() => {
    var s = !1;
    e((a, u = !0) => {
      s = !0, i(u, a);
    }), s || i(!1, null);
  }, o);
}
function f1(t, e, n) {
  Ce && mn();
  var r = new li(t), o = !bo();
  Cr(() => {
    var i = e();
    o && i !== null && typeof i == "object" && (i = /** @type {V} */
    {}), r.ensure(i, n);
  });
}
function h1(t, e) {
  Ce && ct(
    /** @type {TemplateNode} */
    /* @__PURE__ */ pt(t)
  ), qr(() => {
    var n = e();
    for (var r in n) {
      var o = n[r];
      o ? t.style.setProperty(r, o) : t.style.removeProperty(r);
    }
  });
}
function $s(t, e, n = !1, r = !1, o = !1) {
  var i = t, s = "";
  Te(() => {
    var a = (
      /** @type {Effect} */
      Fe
    );
    if (s === (s = e() ?? "")) {
      Ce && mn();
      return;
    }
    if (a.nodes_start !== null && (jd(
      a.nodes_start,
      /** @type {TemplateNode} */
      a.nodes_end
    ), a.nodes_start = a.nodes_end = null), s !== "") {
      if (Ce) {
        Ie.data;
        for (var u = mn(), l = u; u !== null && (u.nodeType !== lr || /** @type {Comment} */
        u.data !== ""); )
          l = u, u = /** @type {TemplateNode} */
          /* @__PURE__ */ Gt(u);
        if (u === null)
          throw oi(), Hr;
        Wt(Ie, l), i = ct(u);
        return;
      }
      var d = s + "";
      n ? d = `<svg>${d}</svg>` : r && (d = `<math>${d}</math>`);
      var f = Il(d);
      if ((n || r) && (f = /** @type {Element} */
      /* @__PURE__ */ pt(f)), Wt(
        /** @type {TemplateNode} */
        /* @__PURE__ */ pt(f),
        /** @type {TemplateNode} */
        f.lastChild
      ), n || r)
        for (; /* @__PURE__ */ pt(f); )
          i.before(
            /** @type {Node} */
            /* @__PURE__ */ pt(f)
          );
      else
        i.before(f);
    }
  });
}
function xt(t, e, n) {
  Ce && mn();
  var r = new li(t);
  Cr(() => {
    var o = e() ?? null;
    r.ensure(o, o && ((i) => n(i, o)));
  }, er);
}
function ff(t, e, n, r, o, i) {
  let s = Ce;
  Ce && mn();
  var a = null;
  Ce && Ie.nodeType === cp && (a = /** @type {Element} */
  Ie, mn());
  var u = (
    /** @type {TemplateNode} */
    Ce ? Ie : t
  ), l = new li(u, !1);
  Cr(() => {
    const d = e() || null;
    var f = n || d === "svg" ? ip : null;
    if (d === null) {
      l.ensure(null, null);
      return;
    }
    return l.ensure(d, (h) => {
      if (d) {
        if (a = Ce ? (
          /** @type {Element} */
          a
        ) : f ? document.createElementNS(f, d) : document.createElement(d), Wt(a, a), r) {
          Ce && l1(d) && a.append(document.createComment(""));
          var p = (
            /** @type {TemplateNode} */
            Ce ? /* @__PURE__ */ pt(a) : a.appendChild(Mt())
          );
          Ce && (p === null ? Vt(!1) : ct(p)), r(a, p);
        }
        Fe.nodes_end = a, h.before(a);
      }
      Ce && ct(h);
    }), () => {
    };
  }, er), Bs(() => {
  }), s && (Vt(!0), ct(u));
}
function g1(t, e) {
  let n = null, r = Ce;
  var o;
  if (Ce) {
    n = Ie;
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ pt(document.head)
    ); i !== null && (i.nodeType !== lr || /** @type {Comment} */
    i.data !== t); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ Gt(i);
    if (i === null)
      Vt(!1);
    else {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Gt(i)
      );
      i.remove(), ct(s);
    }
  }
  Ce || (o = document.head.appendChild(Mt()));
  try {
    Cr(() => e(o), xl);
  } finally {
    r && (Vt(!0), ct(
      /** @type {TemplateNode} */
      n
    ));
  }
}
function Je(t, e) {
  xo(() => {
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
  xo(() => {
    var r = it(() => e(t, n?.()) || {});
    if (n && r?.update) {
      var o = !1, i = (
        /** @type {any} */
        {}
      );
      qr(() => {
        var s = n();
        Al(s), o && kd(i, s) && (i = s, r.update(s));
      }), o = !0;
    }
    if (r?.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function v1(t, e) {
  var n = void 0, r;
  Yd(() => {
    n !== (n = e()) && (r && (St(r), r = null), n && (r = Bt(() => {
      xo(() => (
        /** @type {(node: Element) => void} */
        n(t)
      ));
    })));
  });
}
function hf(t) {
  var e, n, r = "";
  if (typeof t == "string" || typeof t == "number") r += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var o = t.length;
    for (e = 0; e < o; e++) t[e] && (n = hf(t[e])) && (r && (r += " "), r += n);
  } else for (n in t) t[n] && (r && (r += " "), r += n);
  return r;
}
function Ro() {
  for (var t, e, n = 0, r = "", o = arguments.length; n < o; n++) (t = arguments[n]) && (e = hf(t)) && (r && (r += " "), r += e);
  return r;
}
function ur(t) {
  return typeof t == "object" ? Ro(t) : t ?? "";
}
const zu = [...` 	
\r\f \v\uFEFF`];
function p1(t, e, n) {
  var r = t == null ? "" : "" + t;
  if (e && (r = r ? r + " " + e : e), n) {
    for (var o in n)
      if (n[o])
        r = r ? r + " " + o : o;
      else if (r.length)
        for (var i = o.length, s = 0; (s = r.indexOf(o, s)) >= 0; ) {
          var a = s + i;
          (s === 0 || zu.includes(r[s - 1])) && (a === r.length || zu.includes(r[a])) ? r = (s === 0 ? "" : r.substring(0, s)) + r.substring(a + 1) : s = a;
        }
  }
  return r === "" ? null : r;
}
function Ru(t, e = !1) {
  var n = e ? " !important;" : ";", r = "";
  for (var o in t) {
    var i = t[o];
    i != null && i !== "" && (r += " " + o + ": " + i + n);
  }
  return r;
}
function aa(t) {
  return t[0] !== "-" || t[1] !== "-" ? t.toLowerCase() : t;
}
function m1(t, e) {
  if (e) {
    var n = "", r, o;
    if (Array.isArray(e) ? (r = e[0], o = e[1]) : r = e, t) {
      t = String(t).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var i = !1, s = 0, a = !1, u = [];
      r && u.push(...Object.keys(r).map(aa)), o && u.push(...Object.keys(o).map(aa));
      var l = 0, d = -1;
      const y = t.length;
      for (var f = 0; f < y; f++) {
        var h = t[f];
        if (a ? h === "/" && t[f - 1] === "*" && (a = !1) : i ? i === h && (i = !1) : h === "/" && t[f + 1] === "*" ? a = !0 : h === '"' || h === "'" ? i = h : h === "(" ? s++ : h === ")" && s--, !a && i === !1 && s === 0) {
          if (h === ":" && d === -1)
            d = f;
          else if (h === ";" || f === y - 1) {
            if (d !== -1) {
              var p = aa(t.substring(l, d).trim());
              if (!u.includes(p)) {
                h !== ";" && f++;
                var m = t.substring(l, f).trim();
                n += " " + m + ";";
              }
            }
            l = f + 1, d = -1;
          }
        }
      }
    }
    return r && (n += Ru(r)), o && (n += Ru(o, !0)), n = n.trim(), n === "" ? null : n;
  }
  return t == null ? null : String(t);
}
function Yt(t, e, n, r, o, i) {
  var s = t.__className;
  if (Ce || s !== n || s === void 0) {
    var a = p1(n, r, i);
    (!Ce || a !== t.getAttribute("class")) && (a == null ? t.removeAttribute("class") : e ? t.className = a : t.setAttribute("class", a)), t.__className = n;
  } else if (i && o !== i)
    for (var u in i) {
      var l = !!i[u];
      (o == null || l !== !!o[u]) && t.classList.toggle(u, l);
    }
  return i;
}
function la(t, e = {}, n, r) {
  for (var o in n) {
    var i = n[o];
    e[o] !== i && (n[o] == null ? t.style.removeProperty(o) : t.style.setProperty(o, i, r));
  }
}
function Pt(t, e, n, r) {
  var o = t.__style;
  if (Ce || o !== e) {
    var i = m1(e, r);
    (!Ce || i !== t.getAttribute("style")) && (i == null ? t.removeAttribute("style") : t.style.cssText = i), t.__style = e;
  } else r && (Array.isArray(r) ? (la(t, n?.[0], r[0]), la(t, n?.[1], r[1], "important")) : la(t, n, r));
  return r;
}
function Ma(t, e, n = !1) {
  if (t.multiple) {
    if (e == null)
      return;
    if (!Ds(e))
      return _p();
    for (var r of t.options)
      r.selected = e.includes(Fu(r));
    return;
  }
  for (r of t.options) {
    var o = Fu(r);
    if ($p(o, e)) {
      r.selected = !0;
      return;
    }
  }
  (!n || e !== void 0) && (t.selectedIndex = -1);
}
function y1(t) {
  var e = new MutationObserver(() => {
    Ma(t, t.__value);
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
  }), Bs(() => {
    e.disconnect();
  });
}
function Fu(t) {
  return "__value" in t ? t.__value : t.value;
}
const fr = Symbol("class"), Nn = Symbol("style"), gf = Symbol("is custom element"), vf = Symbol("is html");
function Qn(t) {
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
    t.__on_r = n, _r(n), $d();
  }
}
function zi(t, e) {
  var n = Ks(t);
  n.value === (n.value = // treat null and undefined the same for the initial value
  e ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  t.value === e && (e !== 0 || t.nodeName !== "PROGRESS") || (t.value = e ?? "");
}
function Ri(t, e) {
  var n = Ks(t);
  n.checked !== (n.checked = // treat null and undefined the same for the initial value
  e ?? void 0) && (t.checked = e);
}
function w1(t, e) {
  e ? t.hasAttribute("selected") || t.setAttribute("selected", "") : t.removeAttribute("selected");
}
function Ne(t, e, n, r) {
  var o = Ks(t);
  Ce && (o[e] = t.getAttribute(e), e === "src" || e === "srcset" || e === "href" && t.nodeName === "LINK") || o[e] !== (o[e] = n) && (e === "loading" && (t[up] = n), n == null ? t.removeAttribute(e) : typeof n != "string" && pf(t).includes(e) ? t[e] = n : t.setAttribute(e, n));
}
function b1(t, e, n, r, o = !1, i = !1) {
  if (Ce && o && t.tagName === "INPUT") {
    var s = (
      /** @type {HTMLInputElement} */
      t
    ), a = s.type === "checkbox" ? "defaultChecked" : "defaultValue";
    a in n || Qn(s);
  }
  var u = Ks(t), l = u[gf], d = !u[vf];
  let f = Ce && l;
  f && Vt(!1);
  var h = e || {}, p = t.tagName === "OPTION";
  for (var m in e)
    m in n || (n[m] = null);
  n.class ? n.class = ur(n.class) : (r || n[fr]) && (n.class = null), n[Nn] && (n.style ??= null);
  var y = pf(t);
  for (const T in n) {
    let I = n[T];
    if (p && T === "value" && I == null) {
      t.value = t.__value = "", h[T] = I;
      continue;
    }
    if (T === "class") {
      var w = t.namespaceURI === "http://www.w3.org/1999/xhtml";
      Yt(t, w, I, r, e?.[fr], n[fr]), h[T] = I, h[fr] = n[fr];
      continue;
    }
    if (T === "style") {
      Pt(t, I, e?.[Nn], n[Nn]), h[T] = I, h[Nn] = n[Nn];
      continue;
    }
    var b = h[T];
    if (!(I === b && !(I === void 0 && t.hasAttribute(T)))) {
      h[T] = I;
      var S = T[0] + T[1];
      if (S !== "$$")
        if (S === "on") {
          const B = {}, $ = "$$" + T;
          let H = T.slice(2);
          var E = n1(H);
          if (e1(H) && (H = H.slice(0, -7), B.capture = !0), !E && b) {
            if (I != null) continue;
            t.removeEventListener(H, h[$], B), h[$] = null;
          }
          if (I != null)
            if (E)
              t[`__${H}`] = I, Sr([H]);
            else {
              let N = function(k) {
                h[T].call(this, k);
              };
              h[$] = Dl(H, t, N, B);
            }
          else E && (t[`__${H}`] = void 0);
        } else if (T === "style")
          Ne(t, T, I);
        else if (T === "autofocus")
          Kp(
            /** @type {HTMLElement} */
            t,
            !!I
          );
        else if (!l && (T === "__value" || T === "value" && I != null))
          t.value = t.__value = I;
        else if (T === "selected" && p)
          w1(
            /** @type {HTMLOptionElement} */
            t,
            I
          );
        else {
          var x = T;
          d || (x = o1(x));
          var _ = x === "defaultValue" || x === "defaultChecked";
          if (I == null && !l && !_)
            if (u[T] = null, x === "value" || x === "checked") {
              let B = (
                /** @type {HTMLInputElement} */
                t
              );
              const $ = e === void 0;
              if (x === "value") {
                let H = B.defaultValue;
                B.removeAttribute(x), B.defaultValue = H, B.value = B.__value = $ ? H : null;
              } else {
                let H = B.defaultChecked;
                B.removeAttribute(x), B.defaultChecked = H, B.checked = $ ? H : !1;
              }
            } else
              t.removeAttribute(T);
          else _ || y.includes(x) && (l || typeof I != "string") ? (t[x] = I, x in u && (u[x] = kt)) : typeof I != "function" && Ne(t, x, I);
        }
    }
  }
  return f && Vt(!0), h;
}
function Ge(t, e, n = [], r = [], o = [], i, s = !1, a = !1) {
  Dd(o, n, r, (u) => {
    var l = void 0, d = {}, f = t.nodeName === "SELECT", h = !1;
    if (Yd(() => {
      var m = e(...u.map(c)), y = b1(
        t,
        l,
        m,
        i,
        s,
        a
      );
      h && f && "value" in m && Ma(
        /** @type {HTMLSelectElement} */
        t,
        m.value
      );
      for (let b of Object.getOwnPropertySymbols(d))
        m[b] || St(d[b]);
      for (let b of Object.getOwnPropertySymbols(m)) {
        var w = m[b];
        b.description === md && (!l || w !== l[b]) && (d[b] && St(d[b]), d[b] = Bt(() => v1(t, () => w))), y[b] = w;
      }
      l = y;
    }), f) {
      var p = (
        /** @type {HTMLSelectElement} */
        t
      );
      xo(() => {
        Ma(
          p,
          /** @type {Record<string | symbol, any>} */
          l.value,
          !0
        ), y1(p);
      });
    }
    h = !0;
  });
}
function Ks(t) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    t.__attributes ??= {
      [gf]: t.nodeName.includes("-"),
      [vf]: t.namespaceURI === op
    }
  );
}
var Bu = /* @__PURE__ */ new Map();
function pf(t) {
  var e = t.getAttribute("is") || t.nodeName, n = Bu.get(e);
  if (n) return n;
  Bu.set(e, n = []);
  for (var r, o = t, i = Element.prototype; i !== o; ) {
    r = yd(o);
    for (var s in r)
      r[s].set && n.push(s);
    o = Is(o);
  }
  return n;
}
function rs(t, e, n = e) {
  var r = /* @__PURE__ */ new WeakSet();
  Kd(t, "input", async (o) => {
    var i = o ? t.defaultValue : t.value;
    if (i = ua(t) ? ca(i) : i, n(i), Qe !== null && r.add(Qe), await sf(), i !== (i = e())) {
      var s = t.selectionStart, a = t.selectionEnd, u = t.value.length;
      if (t.value = i ?? "", a !== null) {
        var l = t.value.length;
        s === a && a === u && l > u ? (t.selectionStart = l, t.selectionEnd = l) : (t.selectionStart = s, t.selectionEnd = Math.min(a, l));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  (Ce && t.defaultValue !== t.value || // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  it(e) == null && t.value) && (n(ua(t) ? ca(t.value) : t.value), Qe !== null && r.add(Qe)), qr(() => {
    var o = e();
    if (t === document.activeElement) {
      var i = (
        /** @type {Batch} */
        Vi ?? Qe
      );
      if (r.has(i))
        return;
    }
    ua(t) && o === ca(t.value) || t.type === "date" && !o && !t.value || o !== t.value && (t.value = o ?? "");
  });
}
function ua(t) {
  var e = t.type;
  return e === "number" || e === "range";
}
function ca(t) {
  return t === "" ? null : +t;
}
function x1(t, e, n = e) {
  Kd(t, "change", () => {
    n(t.files);
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  Ce && t.files && n(t.files), qr(() => {
    t.files = e();
  });
}
class Ll {
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
          Ll.entries.set(n.target, n);
          for (var r of this.#e.get(n.target) || [])
            r(n);
        }
      }
    ));
  }
}
var _1 = /* @__PURE__ */ new Ll({
  box: "border-box"
});
function $u(t, e, n) {
  var r = _1.observe(t, () => n(t[e]));
  xo(() => (it(() => n(t[e])), r));
}
function Ku(t, e) {
  return t === e || t?.[Dn] === e;
}
function Nt(t = {}, e, n, r) {
  return xo(() => {
    var o, i;
    return qr(() => {
      o = i, i = [], it(() => {
        t !== n(...i) && (e(t, ...i), o && Ku(n(...o), t) && e(null, ...o));
      });
    }), () => {
      _r(() => {
        i && Ku(n(...i), t) && e(null, ...i);
      });
    };
  }), t;
}
function Hl(t = !1) {
  const e = (
    /** @type {ComponentContextLegacy} */
    nt
  ), n = e.l.u;
  if (!n) return;
  let r = () => Al(e.s);
  if (t) {
    let o = 0, i = (
      /** @type {Record<string, any>} */
      {}
    );
    const s = /* @__PURE__ */ ii(() => {
      let a = !1;
      const u = e.s;
      for (const l in u)
        u[l] !== i[l] && (i[l] = u[l], a = !0);
      return a && o++, o;
    });
    r = () => c(s);
  }
  n.b.length && Ft(() => {
    Wu(e, r), Ea(n.b);
  }), He(() => {
    const o = it(() => n.m.map(lp));
    return () => {
      for (const i of o)
        typeof i == "function" && i();
    };
  }), n.a.length && He(() => {
    Wu(e, r), Ea(n.a);
  });
}
function Wu(t, e) {
  if (t.l.s)
    for (const n of t.l.s) c(n);
  e();
}
let Ei = !1;
function C1(t) {
  var e = Ei;
  try {
    return Ei = !1, [t(), Ei];
  } finally {
    Ei = e;
  }
}
const S1 = {
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
function Le(t, e, n) {
  return new Proxy(
    { props: t, exclude: e },
    S1
  );
}
const k1 = {
  get(t, e) {
    if (!t.exclude.includes(e))
      return c(t.version), e in t.special ? t.special[e]() : t.props[e];
  },
  set(t, e, n) {
    if (!(e in t.special)) {
      var r = Fe;
      try {
        rn(t.parent_effect), t.special[e] = v(
          {
            get [e]() {
              return t.props[e];
            }
          },
          /** @type {string} */
          e,
          gd
        );
      } finally {
        rn(r);
      }
    }
    return t.special[e](n), Du(t.version), !0;
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
    return t.exclude.includes(e) || (t.exclude.push(e), Du(t.version)), !0;
  },
  has(t, e) {
    return t.exclude.includes(e) ? !1 : e in t.props;
  },
  ownKeys(t) {
    return Reflect.ownKeys(t.props).filter((e) => !t.exclude.includes(e));
  }
};
function Zu(t, e) {
  return new Proxy(
    {
      props: t,
      exclude: e,
      special: {},
      version: tr(0),
      // TODO this is only necessary because we need to track component
      // destruction inside `prop`, because of `bind:this`, but it
      // seems likely that we can simplify `bind:this` instead
      parent_effect: (
        /** @type {Effect} */
        Fe
      )
    },
    k1
  );
}
const E1 = {
  get(t, e) {
    let n = t.props.length;
    for (; n--; ) {
      let r = t.props[n];
      if (Eo(r) && (r = r()), typeof r == "object" && r !== null && e in r) return r[e];
    }
  },
  set(t, e, n) {
    let r = t.props.length;
    for (; r--; ) {
      let o = t.props[r];
      Eo(o) && (o = o());
      const i = jn(o, e);
      if (i && i.set)
        return i.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(t, e) {
    let n = t.props.length;
    for (; n--; ) {
      let r = t.props[n];
      if (Eo(r) && (r = r()), typeof r == "object" && r !== null && e in r) {
        const o = jn(r, e);
        return o && !o.configurable && (o.configurable = !0), o;
      }
    }
  },
  has(t, e) {
    if (e === Dn || e === Cl) return !1;
    for (let n of t.props)
      if (Eo(n) && (n = n()), n != null && e in n) return !0;
    return !1;
  },
  ownKeys(t) {
    const e = [];
    for (let n of t.props)
      if (Eo(n) && (n = n()), !!n) {
        for (const r in n)
          e.includes(r) || e.push(r);
        for (const r of Object.getOwnPropertySymbols(n))
          e.includes(r) || e.push(r);
      }
    return e;
  }
};
function Ve(...t) {
  return new Proxy({ props: t }, E1);
}
function v(t, e, n, r) {
  var o = !wo || (n & ep) !== 0, i = (n & tp) !== 0, s = (n & np) !== 0, a = (
    /** @type {V} */
    r
  ), u = !0, l = () => (u && (u = !1, a = s ? it(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), a), d;
  if (i) {
    var f = Dn in t || Cl in t;
    d = jn(t, e)?.set ?? (f && e in t ? (E) => t[e] = E : void 0);
  }
  var h, p = !1;
  i ? [h, p] = C1(() => (
    /** @type {V} */
    t[e]
  )) : h = /** @type {V} */
  t[e], h === void 0 && r !== void 0 && (h = l(), d && (o && mp(), d(h)));
  var m;
  if (o ? m = () => {
    var E = (
      /** @type {V} */
      t[e]
    );
    return E === void 0 ? l() : (u = !0, E);
  } : m = () => {
    var E = (
      /** @type {V} */
      t[e]
    );
    return E !== void 0 && (a = /** @type {V} */
    void 0), E === void 0 ? a : E;
  }, o && (n & gd) === 0)
    return m;
  if (d) {
    var y = t.$$legacy;
    return (
      /** @type {() => V} */
      function(E, x) {
        return arguments.length > 0 ? ((!o || !x || y || p) && d(x ? m() : E), E) : m();
      }
    );
  }
  var w = !1, b = ((n & Qv) !== 0 ? ii : El)(() => (w = !1, m()));
  i && c(b);
  var S = (
    /** @type {Effect} */
    Fe
  );
  return (
    /** @type {() => V} */
    function(E, x) {
      if (arguments.length > 0) {
        const _ = x ? c(b) : o && i ? ht(E) : E;
        return K(b, _), w = !0, a !== void 0 && (a = _), E;
      }
      return Xr && w || (S.f & Un) !== 0 ? b.v : c(b);
    }
  );
}
function P1(t) {
  return new N1(t);
}
class N1 {
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
      var a = /* @__PURE__ */ Hd(s, !1, !1);
      return n.set(i, a), a;
    };
    const o = new Proxy(
      { ...e.props || {}, $$events: {} },
      {
        get(i, s) {
          return c(n.get(s) ?? r(s, Reflect.get(i, s)));
        },
        has(i, s) {
          return s === Cl ? !0 : (c(n.get(s) ?? r(s, Reflect.get(i, s))), Reflect.has(i, s));
        },
        set(i, s, a) {
          return K(n.get(s) ?? r(s, a), a), Reflect.set(i, s, a);
        }
      }
    );
    this.#t = (e.hydrate ? u1 : Ml)(e.component, {
      target: e.target,
      anchor: e.anchor,
      props: o,
      context: e.context,
      intro: e.intro ?? !1,
      recover: e.recover
    }), (!e?.props?.$$host || e.sync === !1) && g(), this.#e = o.$$events;
    for (const i of Object.keys(this.#t))
      i === "$set" || i === "$destroy" || i === "$on" || Gi(this, i, {
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
      df(this.#t);
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
let mf;
typeof HTMLElement == "function" && (mf = class extends HTMLElement {
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
          r !== "default" && (i.name = r), O(o, i);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const e = {}, n = T1(this);
      for (const r of this.$$s)
        r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = t(r), e.default = !0) : e[r] = t(r));
      for (const r of this.attributes) {
        const o = this.$$g_p(r.name);
        o in this.$$d || (this.$$d[o] = Fi(o, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = P1({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: e,
          $$host: this
        }
      }), this.$$me = Yr(() => {
        qr(() => {
          this.$$r = !0;
          for (const r of Ui(this.$$c)) {
            if (!this.$$p_d[r]?.reflect) continue;
            this.$$d[r] = this.$$c[r];
            const o = Fi(
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
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = Fi(t, n, this.$$p_d, "toProp"), this.$$c?.$set({ [t]: this.$$d[t] }));
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
    return Ui(this.$$p_d).find(
      (e) => this.$$p_d[e].attribute === t || !this.$$p_d[e].attribute && e.toLowerCase() === t
    ) || t;
  }
});
function Fi(t, e, n, r) {
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
function T1(t) {
  const e = {};
  return t.childNodes.forEach((n) => {
    e[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), e;
}
function se(t, e, n, r, o, i) {
  let s = class extends mf {
    constructor() {
      super(t, n, o), this.$$p_d = e;
    }
    static get observedAttributes() {
      return Ui(e).map(
        (a) => (e[a].attribute || a).toLowerCase()
      );
    }
  };
  return Ui(e).forEach((a) => {
    Gi(s.prototype, a, {
      get() {
        return this.$$c && a in this.$$c ? this.$$c[a] : this.$$d[a];
      },
      set(u) {
        u = Fi(a, u, e), this.$$d[a] = u;
        var l = this.$$c;
        if (l) {
          var d = jn(l, a)?.get;
          d ? l[a] = u : l.$set({ [a]: u });
        }
      }
    });
  }), r.forEach((a) => {
    Gi(s.prototype, a, {
      get() {
        return this.$$c?.[a];
      }
    });
  }), t.element = /** @type {any} */
  s, s;
}
var O1 = { value: () => {
} };
function Ws() {
  for (var t = 0, e = arguments.length, n = {}, r; t < e; ++t) {
    if (!(r = arguments[t] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new Bi(n);
}
function Bi(t) {
  this._ = t;
}
function A1(t, e) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !e.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
Bi.prototype = Ws.prototype = {
  constructor: Bi,
  on: function(t, e) {
    var n = this._, r = A1(t + "", n), o, i = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++i < s; ) if ((o = (t = r[i]).type) && (o = D1(n[o], t.name))) return o;
      return;
    }
    if (e != null && typeof e != "function") throw new Error("invalid callback: " + e);
    for (; ++i < s; )
      if (o = (t = r[i]).type) n[o] = Yu(n[o], t.name, e);
      else if (e == null) for (o in n) n[o] = Yu(n[o], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, e = this._;
    for (var n in e) t[n] = e[n].slice();
    return new Bi(t);
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
function Yu(t, e, n) {
  for (var r = 0, o = t.length; r < o; ++r)
    if (t[r].name === e) {
      t[r] = O1, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return n != null && t.push({ name: e, value: n }), t;
}
var La = "http://www.w3.org/1999/xhtml";
const qu = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: La,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Zs(t) {
  var e = t += "", n = e.indexOf(":");
  return n >= 0 && (e = t.slice(0, n)) !== "xmlns" && (t = t.slice(n + 1)), qu.hasOwnProperty(e) ? { space: qu[e], local: t } : t;
}
function I1(t) {
  return function() {
    var e = this.ownerDocument, n = this.namespaceURI;
    return n === La && e.documentElement.namespaceURI === La ? e.createElement(t) : e.createElementNS(n, t);
  };
}
function M1(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function yf(t) {
  var e = Zs(t);
  return (e.local ? M1 : I1)(e);
}
function L1() {
}
function Vl(t) {
  return t == null ? L1 : function() {
    return this.querySelector(t);
  };
}
function H1(t) {
  typeof t != "function" && (t = Vl(t));
  for (var e = this._groups, n = e.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = e[o], s = i.length, a = r[o] = new Array(s), u, l, d = 0; d < s; ++d)
      (u = i[d]) && (l = t.call(u, u.__data__, d, i)) && ("__data__" in u && (l.__data__ = u.__data__), a[d] = l);
  return new Jt(r, this._parents);
}
function V1(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function z1() {
  return [];
}
function wf(t) {
  return t == null ? z1 : function() {
    return this.querySelectorAll(t);
  };
}
function R1(t) {
  return function() {
    return V1(t.apply(this, arguments));
  };
}
function F1(t) {
  typeof t == "function" ? t = R1(t) : t = wf(t);
  for (var e = this._groups, n = e.length, r = [], o = [], i = 0; i < n; ++i)
    for (var s = e[i], a = s.length, u, l = 0; l < a; ++l)
      (u = s[l]) && (r.push(t.call(u, u.__data__, l, s)), o.push(u));
  return new Jt(r, o);
}
function bf(t) {
  return function() {
    return this.matches(t);
  };
}
function xf(t) {
  return function(e) {
    return e.matches(t);
  };
}
var B1 = Array.prototype.find;
function $1(t) {
  return function() {
    return B1.call(this.children, t);
  };
}
function K1() {
  return this.firstElementChild;
}
function W1(t) {
  return this.select(t == null ? K1 : $1(typeof t == "function" ? t : xf(t)));
}
var Z1 = Array.prototype.filter;
function Y1() {
  return Array.from(this.children);
}
function q1(t) {
  return function() {
    return Z1.call(this.children, t);
  };
}
function X1(t) {
  return this.selectAll(t == null ? Y1 : q1(typeof t == "function" ? t : xf(t)));
}
function j1(t) {
  typeof t != "function" && (t = bf(t));
  for (var e = this._groups, n = e.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = e[o], s = i.length, a = r[o] = [], u, l = 0; l < s; ++l)
      (u = i[l]) && t.call(u, u.__data__, l, i) && a.push(u);
  return new Jt(r, this._parents);
}
function _f(t) {
  return new Array(t.length);
}
function U1() {
  return new Jt(this._enter || this._groups.map(_f), this._parents);
}
function os(t, e) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
}
os.prototype = {
  constructor: os,
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
function G1(t) {
  return function() {
    return t;
  };
}
function J1(t, e, n, r, o, i) {
  for (var s = 0, a, u = e.length, l = i.length; s < l; ++s)
    (a = e[s]) ? (a.__data__ = i[s], r[s] = a) : n[s] = new os(t, i[s]);
  for (; s < u; ++s)
    (a = e[s]) && (o[s] = a);
}
function Q1(t, e, n, r, o, i, s) {
  var a, u, l = /* @__PURE__ */ new Map(), d = e.length, f = i.length, h = new Array(d), p;
  for (a = 0; a < d; ++a)
    (u = e[a]) && (h[a] = p = s.call(u, u.__data__, a, e) + "", l.has(p) ? o[a] = u : l.set(p, u));
  for (a = 0; a < f; ++a)
    p = s.call(t, i[a], a, i) + "", (u = l.get(p)) ? (r[a] = u, u.__data__ = i[a], l.delete(p)) : n[a] = new os(t, i[a]);
  for (a = 0; a < d; ++a)
    (u = e[a]) && l.get(h[a]) === u && (o[a] = u);
}
function em(t) {
  return t.__data__;
}
function tm(t, e) {
  if (!arguments.length) return Array.from(this, em);
  var n = e ? Q1 : J1, r = this._parents, o = this._groups;
  typeof t != "function" && (t = G1(t));
  for (var i = o.length, s = new Array(i), a = new Array(i), u = new Array(i), l = 0; l < i; ++l) {
    var d = r[l], f = o[l], h = f.length, p = nm(t.call(d, d && d.__data__, l, r)), m = p.length, y = a[l] = new Array(m), w = s[l] = new Array(m), b = u[l] = new Array(h);
    n(d, f, y, w, b, p, e);
    for (var S = 0, E = 0, x, _; S < m; ++S)
      if (x = y[S]) {
        for (S >= E && (E = S + 1); !(_ = w[E]) && ++E < m; ) ;
        x._next = _ || null;
      }
  }
  return s = new Jt(s, r), s._enter = a, s._exit = u, s;
}
function nm(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function rm() {
  return new Jt(this._exit || this._groups.map(_f), this._parents);
}
function om(t, e, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), e != null && (o = e(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function im(t) {
  for (var e = t.selection ? t.selection() : t, n = this._groups, r = e._groups, o = n.length, i = r.length, s = Math.min(o, i), a = new Array(o), u = 0; u < s; ++u)
    for (var l = n[u], d = r[u], f = l.length, h = a[u] = new Array(f), p, m = 0; m < f; ++m)
      (p = l[m] || d[m]) && (h[m] = p);
  for (; u < o; ++u)
    a[u] = n[u];
  return new Jt(a, this._parents);
}
function sm() {
  for (var t = this._groups, e = -1, n = t.length; ++e < n; )
    for (var r = t[e], o = r.length - 1, i = r[o], s; --o >= 0; )
      (s = r[o]) && (i && s.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(s, i), i = s);
  return this;
}
function am(t) {
  t || (t = lm);
  function e(f, h) {
    return f && h ? t(f.__data__, h.__data__) : !f - !h;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), i = 0; i < r; ++i) {
    for (var s = n[i], a = s.length, u = o[i] = new Array(a), l, d = 0; d < a; ++d)
      (l = s[d]) && (u[d] = l);
    u.sort(e);
  }
  return new Jt(o, this._parents).order();
}
function lm(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function um() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function cm() {
  return Array.from(this);
}
function dm() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], o = 0, i = r.length; o < i; ++o) {
      var s = r[o];
      if (s) return s;
    }
  return null;
}
function fm() {
  let t = 0;
  for (const e of this) ++t;
  return t;
}
function hm() {
  return !this.node();
}
function gm(t) {
  for (var e = this._groups, n = 0, r = e.length; n < r; ++n)
    for (var o = e[n], i = 0, s = o.length, a; i < s; ++i)
      (a = o[i]) && t.call(a, a.__data__, i, o);
  return this;
}
function vm(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function pm(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function mm(t, e) {
  return function() {
    this.setAttribute(t, e);
  };
}
function ym(t, e) {
  return function() {
    this.setAttributeNS(t.space, t.local, e);
  };
}
function wm(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttribute(t) : this.setAttribute(t, n);
  };
}
function bm(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n);
  };
}
function xm(t, e) {
  var n = Zs(t);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((e == null ? n.local ? pm : vm : typeof e == "function" ? n.local ? bm : wm : n.local ? ym : mm)(n, e));
}
function Cf(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function _m(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Cm(t, e, n) {
  return function() {
    this.style.setProperty(t, e, n);
  };
}
function Sm(t, e, n) {
  return function() {
    var r = e.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, n);
  };
}
function km(t, e, n) {
  return arguments.length > 1 ? this.each((e == null ? _m : typeof e == "function" ? Sm : Cm)(t, e, n ?? "")) : uo(this.node(), t);
}
function uo(t, e) {
  return t.style.getPropertyValue(e) || Cf(t).getComputedStyle(t, null).getPropertyValue(e);
}
function Em(t) {
  return function() {
    delete this[t];
  };
}
function Pm(t, e) {
  return function() {
    this[t] = e;
  };
}
function Nm(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? delete this[t] : this[t] = n;
  };
}
function Tm(t, e) {
  return arguments.length > 1 ? this.each((e == null ? Em : typeof e == "function" ? Nm : Pm)(t, e)) : this.node()[t];
}
function Sf(t) {
  return t.trim().split(/^|\s+/);
}
function zl(t) {
  return t.classList || new kf(t);
}
function kf(t) {
  this._node = t, this._names = Sf(t.getAttribute("class") || "");
}
kf.prototype = {
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
function Ef(t, e) {
  for (var n = zl(t), r = -1, o = e.length; ++r < o; ) n.add(e[r]);
}
function Pf(t, e) {
  for (var n = zl(t), r = -1, o = e.length; ++r < o; ) n.remove(e[r]);
}
function Om(t) {
  return function() {
    Ef(this, t);
  };
}
function Am(t) {
  return function() {
    Pf(this, t);
  };
}
function Dm(t, e) {
  return function() {
    (e.apply(this, arguments) ? Ef : Pf)(this, t);
  };
}
function Im(t, e) {
  var n = Sf(t + "");
  if (arguments.length < 2) {
    for (var r = zl(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof e == "function" ? Dm : e ? Om : Am)(n, e));
}
function Mm() {
  this.textContent = "";
}
function Lm(t) {
  return function() {
    this.textContent = t;
  };
}
function Hm(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
function Vm(t) {
  return arguments.length ? this.each(t == null ? Mm : (typeof t == "function" ? Hm : Lm)(t)) : this.node().textContent;
}
function zm() {
  this.innerHTML = "";
}
function Rm(t) {
  return function() {
    this.innerHTML = t;
  };
}
function Fm(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function Bm(t) {
  return arguments.length ? this.each(t == null ? zm : (typeof t == "function" ? Fm : Rm)(t)) : this.node().innerHTML;
}
function $m() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Km() {
  return this.each($m);
}
function Wm() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Zm() {
  return this.each(Wm);
}
function Ym(t) {
  var e = typeof t == "function" ? t : yf(t);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function qm() {
  return null;
}
function Xm(t, e) {
  var n = typeof t == "function" ? t : yf(t), r = e == null ? qm : typeof e == "function" ? e : Vl(e);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function jm() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function Um() {
  return this.each(jm);
}
function Gm() {
  var t = this.cloneNode(!1), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function Jm() {
  var t = this.cloneNode(!0), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function Qm(t) {
  return this.select(t ? Jm : Gm);
}
function e0(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function t0(t) {
  return function(e) {
    t.call(this, e, this.__data__);
  };
}
function n0(t) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var n = "", r = e.indexOf(".");
    return r >= 0 && (n = e.slice(r + 1), e = e.slice(0, r)), { type: e, name: n };
  });
}
function r0(t) {
  return function() {
    var e = this.__on;
    if (e) {
      for (var n = 0, r = -1, o = e.length, i; n < o; ++n)
        i = e[n], (!t.type || i.type === t.type) && i.name === t.name ? this.removeEventListener(i.type, i.listener, i.options) : e[++r] = i;
      ++r ? e.length = r : delete this.__on;
    }
  };
}
function o0(t, e, n) {
  return function() {
    var r = this.__on, o, i = t0(e);
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
function i0(t, e, n) {
  var r = n0(t + ""), o, i = r.length, s;
  if (arguments.length < 2) {
    var a = this.node().__on;
    if (a) {
      for (var u = 0, l = a.length, d; u < l; ++u)
        for (o = 0, d = a[u]; o < i; ++o)
          if ((s = r[o]).type === d.type && s.name === d.name)
            return d.value;
    }
    return;
  }
  for (a = e ? o0 : r0, o = 0; o < i; ++o) this.each(a(r[o], e, n));
  return this;
}
function Nf(t, e, n) {
  var r = Cf(t), o = r.CustomEvent;
  typeof o == "function" ? o = new o(e, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(e, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(e, !1, !1)), t.dispatchEvent(o);
}
function s0(t, e) {
  return function() {
    return Nf(this, t, e);
  };
}
function a0(t, e) {
  return function() {
    return Nf(this, t, e.apply(this, arguments));
  };
}
function l0(t, e) {
  return this.each((typeof e == "function" ? a0 : s0)(t, e));
}
function* u0() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], o = 0, i = r.length, s; o < i; ++o)
      (s = r[o]) && (yield s);
}
var Tf = [null];
function Jt(t, e) {
  this._groups = t, this._parents = e;
}
function ci() {
  return new Jt([[document.documentElement]], Tf);
}
function c0() {
  return this;
}
Jt.prototype = ci.prototype = {
  constructor: Jt,
  select: H1,
  selectAll: F1,
  selectChild: W1,
  selectChildren: X1,
  filter: j1,
  data: tm,
  enter: U1,
  exit: rm,
  join: om,
  merge: im,
  selection: c0,
  order: sm,
  sort: am,
  call: um,
  nodes: cm,
  node: dm,
  size: fm,
  empty: hm,
  each: gm,
  attr: xm,
  style: km,
  property: Tm,
  classed: Im,
  text: Vm,
  html: Bm,
  raise: Km,
  lower: Zm,
  append: Ym,
  insert: Xm,
  remove: Um,
  clone: Qm,
  datum: e0,
  on: i0,
  dispatch: l0,
  [Symbol.iterator]: u0
};
function nn(t) {
  return typeof t == "string" ? new Jt([[document.querySelector(t)]], [document.documentElement]) : new Jt([[t]], Tf);
}
function d0(t) {
  let e;
  for (; e = t.sourceEvent; ) t = e;
  return t;
}
function cn(t, e) {
  if (t = d0(t), e === void 0 && (e = t.currentTarget), e) {
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
const f0 = { passive: !1 }, Zo = { capture: !0, passive: !1 };
function da(t) {
  t.stopImmediatePropagation();
}
function no(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function Of(t) {
  var e = t.document.documentElement, n = nn(t).on("dragstart.drag", no, Zo);
  "onselectstart" in e ? n.on("selectstart.drag", no, Zo) : (e.__noselect = e.style.MozUserSelect, e.style.MozUserSelect = "none");
}
function Af(t, e) {
  var n = t.document.documentElement, r = nn(t).on("dragstart.drag", null);
  e && (r.on("click.drag", no, Zo), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const Pi = (t) => () => t;
function Ha(t, {
  sourceEvent: e,
  subject: n,
  target: r,
  identifier: o,
  active: i,
  x: s,
  y: a,
  dx: u,
  dy: l,
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
    dx: { value: u, enumerable: !0, configurable: !0 },
    dy: { value: l, enumerable: !0, configurable: !0 },
    _: { value: d }
  });
}
Ha.prototype.on = function() {
  var t = this._.on.apply(this._, arguments);
  return t === this._ ? this : t;
};
function h0(t) {
  return !t.ctrlKey && !t.button;
}
function g0() {
  return this.parentNode;
}
function v0(t, e) {
  return e ?? { x: t.x, y: t.y };
}
function p0() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function m0() {
  var t = h0, e = g0, n = v0, r = p0, o = {}, i = Ws("start", "drag", "end"), s = 0, a, u, l, d, f = 0;
  function h(x) {
    x.on("mousedown.drag", p).filter(r).on("touchstart.drag", w).on("touchmove.drag", b, f0).on("touchend.drag touchcancel.drag", S).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function p(x, _) {
    if (!(d || !t.call(this, x, _))) {
      var T = E(this, e.call(this, x, _), x, _, "mouse");
      T && (nn(x.view).on("mousemove.drag", m, Zo).on("mouseup.drag", y, Zo), Of(x.view), da(x), l = !1, a = x.clientX, u = x.clientY, T("start", x));
    }
  }
  function m(x) {
    if (no(x), !l) {
      var _ = x.clientX - a, T = x.clientY - u;
      l = _ * _ + T * T > f;
    }
    o.mouse("drag", x);
  }
  function y(x) {
    nn(x.view).on("mousemove.drag mouseup.drag", null), Af(x.view, l), no(x), o.mouse("end", x);
  }
  function w(x, _) {
    if (t.call(this, x, _)) {
      var T = x.changedTouches, I = e.call(this, x, _), B = T.length, $, H;
      for ($ = 0; $ < B; ++$)
        (H = E(this, I, x, _, T[$].identifier, T[$])) && (da(x), H("start", x, T[$]));
    }
  }
  function b(x) {
    var _ = x.changedTouches, T = _.length, I, B;
    for (I = 0; I < T; ++I)
      (B = o[_[I].identifier]) && (no(x), B("drag", x, _[I]));
  }
  function S(x) {
    var _ = x.changedTouches, T = _.length, I, B;
    for (d && clearTimeout(d), d = setTimeout(function() {
      d = null;
    }, 500), I = 0; I < T; ++I)
      (B = o[_[I].identifier]) && (da(x), B("end", x, _[I]));
  }
  function E(x, _, T, I, B, $) {
    var H = i.copy(), N = cn($ || T, _), k, D, P;
    if ((P = n.call(x, new Ha("beforestart", {
      sourceEvent: T,
      target: h,
      identifier: B,
      active: s,
      x: N[0],
      y: N[1],
      dx: 0,
      dy: 0,
      dispatch: H
    }), I)) != null)
      return k = P.x - N[0] || 0, D = P.y - N[1] || 0, function A(R, M, Y) {
        var U = N, V;
        switch (R) {
          case "start":
            o[B] = A, V = s++;
            break;
          case "end":
            delete o[B], --s;
          // falls through
          case "drag":
            N = cn(Y || M, _), V = s;
            break;
        }
        H.call(
          R,
          x,
          new Ha(R, {
            sourceEvent: M,
            subject: P,
            target: h,
            identifier: B,
            active: V,
            x: N[0] + k,
            y: N[1] + D,
            dx: N[0] - U[0],
            dy: N[1] - U[1],
            dispatch: H
          }),
          I
        );
      };
  }
  return h.filter = function(x) {
    return arguments.length ? (t = typeof x == "function" ? x : Pi(!!x), h) : t;
  }, h.container = function(x) {
    return arguments.length ? (e = typeof x == "function" ? x : Pi(x), h) : e;
  }, h.subject = function(x) {
    return arguments.length ? (n = typeof x == "function" ? x : Pi(x), h) : n;
  }, h.touchable = function(x) {
    return arguments.length ? (r = typeof x == "function" ? x : Pi(!!x), h) : r;
  }, h.on = function() {
    var x = i.on.apply(i, arguments);
    return x === i ? h : x;
  }, h.clickDistance = function(x) {
    return arguments.length ? (f = (x = +x) * x, h) : Math.sqrt(f);
  }, h;
}
function Rl(t, e, n) {
  t.prototype = e.prototype = n, n.constructor = t;
}
function Df(t, e) {
  var n = Object.create(t.prototype);
  for (var r in e) n[r] = e[r];
  return n;
}
function di() {
}
var Yo = 0.7, is = 1 / Yo, ro = "\\s*([+-]?\\d+)\\s*", qo = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", In = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", y0 = /^#([0-9a-f]{3,8})$/, w0 = new RegExp(`^rgb\\(${ro},${ro},${ro}\\)$`), b0 = new RegExp(`^rgb\\(${In},${In},${In}\\)$`), x0 = new RegExp(`^rgba\\(${ro},${ro},${ro},${qo}\\)$`), _0 = new RegExp(`^rgba\\(${In},${In},${In},${qo}\\)$`), C0 = new RegExp(`^hsl\\(${qo},${In},${In}\\)$`), S0 = new RegExp(`^hsla\\(${qo},${In},${In},${qo}\\)$`), Xu = {
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
Rl(di, Fr, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: ju,
  // Deprecated! Use color.formatHex.
  formatHex: ju,
  formatHex8: k0,
  formatHsl: E0,
  formatRgb: Uu,
  toString: Uu
});
function ju() {
  return this.rgb().formatHex();
}
function k0() {
  return this.rgb().formatHex8();
}
function E0() {
  return If(this).formatHsl();
}
function Uu() {
  return this.rgb().formatRgb();
}
function Fr(t) {
  var e, n;
  return t = (t + "").trim().toLowerCase(), (e = y0.exec(t)) ? (n = e[1].length, e = parseInt(e[1], 16), n === 6 ? Gu(e) : n === 3 ? new Kt(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : n === 8 ? Ni(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : n === 4 ? Ni(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = w0.exec(t)) ? new Kt(e[1], e[2], e[3], 1) : (e = b0.exec(t)) ? new Kt(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = x0.exec(t)) ? Ni(e[1], e[2], e[3], e[4]) : (e = _0.exec(t)) ? Ni(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = C0.exec(t)) ? ec(e[1], e[2] / 100, e[3] / 100, 1) : (e = S0.exec(t)) ? ec(e[1], e[2] / 100, e[3] / 100, e[4]) : Xu.hasOwnProperty(t) ? Gu(Xu[t]) : t === "transparent" ? new Kt(NaN, NaN, NaN, 0) : null;
}
function Gu(t) {
  return new Kt(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function Ni(t, e, n, r) {
  return r <= 0 && (t = e = n = NaN), new Kt(t, e, n, r);
}
function P0(t) {
  return t instanceof di || (t = Fr(t)), t ? (t = t.rgb(), new Kt(t.r, t.g, t.b, t.opacity)) : new Kt();
}
function Va(t, e, n, r) {
  return arguments.length === 1 ? P0(t) : new Kt(t, e, n, r ?? 1);
}
function Kt(t, e, n, r) {
  this.r = +t, this.g = +e, this.b = +n, this.opacity = +r;
}
Rl(Kt, Va, Df(di, {
  brighter(t) {
    return t = t == null ? is : Math.pow(is, t), new Kt(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Yo : Math.pow(Yo, t), new Kt(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Kt(Mr(this.r), Mr(this.g), Mr(this.b), ss(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Ju,
  // Deprecated! Use color.formatHex.
  formatHex: Ju,
  formatHex8: N0,
  formatRgb: Qu,
  toString: Qu
}));
function Ju() {
  return `#${Or(this.r)}${Or(this.g)}${Or(this.b)}`;
}
function N0() {
  return `#${Or(this.r)}${Or(this.g)}${Or(this.b)}${Or((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Qu() {
  const t = ss(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${Mr(this.r)}, ${Mr(this.g)}, ${Mr(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function ss(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function Mr(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function Or(t) {
  return t = Mr(t), (t < 16 ? "0" : "") + t.toString(16);
}
function ec(t, e, n, r) {
  return r <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new dn(t, e, n, r);
}
function If(t) {
  if (t instanceof dn) return new dn(t.h, t.s, t.l, t.opacity);
  if (t instanceof di || (t = Fr(t)), !t) return new dn();
  if (t instanceof dn) return t;
  t = t.rgb();
  var e = t.r / 255, n = t.g / 255, r = t.b / 255, o = Math.min(e, n, r), i = Math.max(e, n, r), s = NaN, a = i - o, u = (i + o) / 2;
  return a ? (e === i ? s = (n - r) / a + (n < r) * 6 : n === i ? s = (r - e) / a + 2 : s = (e - n) / a + 4, a /= u < 0.5 ? i + o : 2 - i - o, s *= 60) : a = u > 0 && u < 1 ? 0 : s, new dn(s, a, u, t.opacity);
}
function T0(t, e, n, r) {
  return arguments.length === 1 ? If(t) : new dn(t, e, n, r ?? 1);
}
function dn(t, e, n, r) {
  this.h = +t, this.s = +e, this.l = +n, this.opacity = +r;
}
Rl(dn, T0, Df(di, {
  brighter(t) {
    return t = t == null ? is : Math.pow(is, t), new dn(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Yo : Math.pow(Yo, t), new dn(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, e = isNaN(t) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * e, o = 2 * n - r;
    return new Kt(
      fa(t >= 240 ? t - 240 : t + 120, o, r),
      fa(t, o, r),
      fa(t < 120 ? t + 240 : t - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new dn(tc(this.h), Ti(this.s), Ti(this.l), ss(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = ss(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${tc(this.h)}, ${Ti(this.s) * 100}%, ${Ti(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function tc(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function Ti(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function fa(t, e, n) {
  return (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e) * 255;
}
const Fl = (t) => () => t;
function O0(t, e) {
  return function(n) {
    return t + n * e;
  };
}
function A0(t, e, n) {
  return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function(r) {
    return Math.pow(t + r * e, n);
  };
}
function D0(t) {
  return (t = +t) == 1 ? Mf : function(e, n) {
    return n - e ? A0(e, n, t) : Fl(isNaN(e) ? n : e);
  };
}
function Mf(t, e) {
  var n = e - t;
  return n ? O0(t, n) : Fl(isNaN(t) ? e : t);
}
const as = function t(e) {
  var n = D0(e);
  function r(o, i) {
    var s = n((o = Va(o)).r, (i = Va(i)).r), a = n(o.g, i.g), u = n(o.b, i.b), l = Mf(o.opacity, i.opacity);
    return function(d) {
      return o.r = s(d), o.g = a(d), o.b = u(d), o.opacity = l(d), o + "";
    };
  }
  return r.gamma = t, r;
}(1);
function I0(t, e) {
  e || (e = []);
  var n = t ? Math.min(e.length, t.length) : 0, r = e.slice(), o;
  return function(i) {
    for (o = 0; o < n; ++o) r[o] = t[o] * (1 - i) + e[o] * i;
    return r;
  };
}
function M0(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function L0(t, e) {
  var n = e ? e.length : 0, r = t ? Math.min(n, t.length) : 0, o = new Array(r), i = new Array(n), s;
  for (s = 0; s < r; ++s) o[s] = Fo(t[s], e[s]);
  for (; s < n; ++s) i[s] = e[s];
  return function(a) {
    for (s = 0; s < r; ++s) i[s] = o[s](a);
    return i;
  };
}
function H0(t, e) {
  var n = /* @__PURE__ */ new Date();
  return t = +t, e = +e, function(r) {
    return n.setTime(t * (1 - r) + e * r), n;
  };
}
function En(t, e) {
  return t = +t, e = +e, function(n) {
    return t * (1 - n) + e * n;
  };
}
function V0(t, e) {
  var n = {}, r = {}, o;
  (t === null || typeof t != "object") && (t = {}), (e === null || typeof e != "object") && (e = {});
  for (o in e)
    o in t ? n[o] = Fo(t[o], e[o]) : r[o] = e[o];
  return function(i) {
    for (o in n) r[o] = n[o](i);
    return r;
  };
}
var za = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, ha = new RegExp(za.source, "g");
function z0(t) {
  return function() {
    return t;
  };
}
function R0(t) {
  return function(e) {
    return t(e) + "";
  };
}
function Lf(t, e) {
  var n = za.lastIndex = ha.lastIndex = 0, r, o, i, s = -1, a = [], u = [];
  for (t = t + "", e = e + ""; (r = za.exec(t)) && (o = ha.exec(e)); )
    (i = o.index) > n && (i = e.slice(n, i), a[s] ? a[s] += i : a[++s] = i), (r = r[0]) === (o = o[0]) ? a[s] ? a[s] += o : a[++s] = o : (a[++s] = null, u.push({ i: s, x: En(r, o) })), n = ha.lastIndex;
  return n < e.length && (i = e.slice(n), a[s] ? a[s] += i : a[++s] = i), a.length < 2 ? u[0] ? R0(u[0].x) : z0(e) : (e = u.length, function(l) {
    for (var d = 0, f; d < e; ++d) a[(f = u[d]).i] = f.x(l);
    return a.join("");
  });
}
function Fo(t, e) {
  var n = typeof e, r;
  return e == null || n === "boolean" ? Fl(e) : (n === "number" ? En : n === "string" ? (r = Fr(e)) ? (e = r, as) : Lf : e instanceof Fr ? as : e instanceof Date ? H0 : M0(e) ? I0 : Array.isArray(e) ? L0 : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? V0 : En)(t, e);
}
var nc = 180 / Math.PI, Ra = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Hf(t, e, n, r, o, i) {
  var s, a, u;
  return (s = Math.sqrt(t * t + e * e)) && (t /= s, e /= s), (u = t * n + e * r) && (n -= t * u, r -= e * u), (a = Math.sqrt(n * n + r * r)) && (n /= a, r /= a, u /= a), t * r < e * n && (t = -t, e = -e, u = -u, s = -s), {
    translateX: o,
    translateY: i,
    rotate: Math.atan2(e, t) * nc,
    skewX: Math.atan(u) * nc,
    scaleX: s,
    scaleY: a
  };
}
var Oi;
function F0(t) {
  const e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return e.isIdentity ? Ra : Hf(e.a, e.b, e.c, e.d, e.e, e.f);
}
function B0(t) {
  return t == null || (Oi || (Oi = document.createElementNS("http://www.w3.org/2000/svg", "g")), Oi.setAttribute("transform", t), !(t = Oi.transform.baseVal.consolidate())) ? Ra : (t = t.matrix, Hf(t.a, t.b, t.c, t.d, t.e, t.f));
}
function Vf(t, e, n, r) {
  function o(l) {
    return l.length ? l.pop() + " " : "";
  }
  function i(l, d, f, h, p, m) {
    if (l !== f || d !== h) {
      var y = p.push("translate(", null, e, null, n);
      m.push({ i: y - 4, x: En(l, f) }, { i: y - 2, x: En(d, h) });
    } else (f || h) && p.push("translate(" + f + e + h + n);
  }
  function s(l, d, f, h) {
    l !== d ? (l - d > 180 ? d += 360 : d - l > 180 && (l += 360), h.push({ i: f.push(o(f) + "rotate(", null, r) - 2, x: En(l, d) })) : d && f.push(o(f) + "rotate(" + d + r);
  }
  function a(l, d, f, h) {
    l !== d ? h.push({ i: f.push(o(f) + "skewX(", null, r) - 2, x: En(l, d) }) : d && f.push(o(f) + "skewX(" + d + r);
  }
  function u(l, d, f, h, p, m) {
    if (l !== f || d !== h) {
      var y = p.push(o(p) + "scale(", null, ",", null, ")");
      m.push({ i: y - 4, x: En(l, f) }, { i: y - 2, x: En(d, h) });
    } else (f !== 1 || h !== 1) && p.push(o(p) + "scale(" + f + "," + h + ")");
  }
  return function(l, d) {
    var f = [], h = [];
    return l = t(l), d = t(d), i(l.translateX, l.translateY, d.translateX, d.translateY, f, h), s(l.rotate, d.rotate, f, h), a(l.skewX, d.skewX, f, h), u(l.scaleX, l.scaleY, d.scaleX, d.scaleY, f, h), l = d = null, function(p) {
      for (var m = -1, y = h.length, w; ++m < y; ) f[(w = h[m]).i] = w.x(p);
      return f.join("");
    };
  };
}
var $0 = Vf(F0, "px, ", "px)", "deg)"), K0 = Vf(B0, ", ", ")", ")"), W0 = 1e-12;
function rc(t) {
  return ((t = Math.exp(t)) + 1 / t) / 2;
}
function Z0(t) {
  return ((t = Math.exp(t)) - 1 / t) / 2;
}
function Y0(t) {
  return ((t = Math.exp(2 * t)) - 1) / (t + 1);
}
const $i = function t(e, n, r) {
  function o(i, s) {
    var a = i[0], u = i[1], l = i[2], d = s[0], f = s[1], h = s[2], p = d - a, m = f - u, y = p * p + m * m, w, b;
    if (y < W0)
      b = Math.log(h / l) / e, w = function(I) {
        return [
          a + I * p,
          u + I * m,
          l * Math.exp(e * I * b)
        ];
      };
    else {
      var S = Math.sqrt(y), E = (h * h - l * l + r * y) / (2 * l * n * S), x = (h * h - l * l - r * y) / (2 * h * n * S), _ = Math.log(Math.sqrt(E * E + 1) - E), T = Math.log(Math.sqrt(x * x + 1) - x);
      b = (T - _) / e, w = function(I) {
        var B = I * b, $ = rc(_), H = l / (n * S) * ($ * Y0(e * B + _) - Z0(_));
        return [
          a + H * p,
          u + H * m,
          l * $ / rc(e * B + _)
        ];
      };
    }
    return w.duration = b * 1e3 * e / Math.SQRT2, w;
  }
  return o.rho = function(i) {
    var s = Math.max(1e-3, +i), a = s * s, u = a * a;
    return t(s, a, u);
  }, o;
}(Math.SQRT2, 2, 4);
var co = 0, Io = 0, Po = 0, zf = 1e3, ls, Mo, us = 0, Br = 0, Ys = 0, Xo = typeof performance == "object" && performance.now ? performance : Date, Rf = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function Bl() {
  return Br || (Rf(q0), Br = Xo.now() + Ys);
}
function q0() {
  Br = 0;
}
function cs() {
  this._call = this._time = this._next = null;
}
cs.prototype = Ff.prototype = {
  constructor: cs,
  restart: function(t, e, n) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    n = (n == null ? Bl() : +n) + (e == null ? 0 : +e), !this._next && Mo !== this && (Mo ? Mo._next = this : ls = this, Mo = this), this._call = t, this._time = n, Fa();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Fa());
  }
};
function Ff(t, e, n) {
  var r = new cs();
  return r.restart(t, e, n), r;
}
function X0() {
  Bl(), ++co;
  for (var t = ls, e; t; )
    (e = Br - t._time) >= 0 && t._call.call(void 0, e), t = t._next;
  --co;
}
function oc() {
  Br = (us = Xo.now()) + Ys, co = Io = 0;
  try {
    X0();
  } finally {
    co = 0, U0(), Br = 0;
  }
}
function j0() {
  var t = Xo.now(), e = t - us;
  e > zf && (Ys -= e, us = t);
}
function U0() {
  for (var t, e = ls, n, r = 1 / 0; e; )
    e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : ls = n);
  Mo = t, Fa(r);
}
function Fa(t) {
  if (!co) {
    Io && (Io = clearTimeout(Io));
    var e = t - Br;
    e > 24 ? (t < 1 / 0 && (Io = setTimeout(oc, t - Xo.now() - Ys)), Po && (Po = clearInterval(Po))) : (Po || (us = Xo.now(), Po = setInterval(j0, zf)), co = 1, Rf(oc));
  }
}
function ic(t, e, n) {
  var r = new cs();
  return e = e == null ? 0 : +e, r.restart((o) => {
    r.stop(), t(o + e);
  }, e, n), r;
}
var G0 = Ws("start", "end", "cancel", "interrupt"), J0 = [], Bf = 0, sc = 1, Ba = 2, Ki = 3, ac = 4, $a = 5, Wi = 6;
function qs(t, e, n, r, o, i) {
  var s = t.__transition;
  if (!s) t.__transition = {};
  else if (n in s) return;
  Q0(t, n, {
    name: e,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: G0,
    tween: J0,
    time: i.time,
    delay: i.delay,
    duration: i.duration,
    ease: i.ease,
    timer: null,
    state: Bf
  });
}
function $l(t, e) {
  var n = _n(t, e);
  if (n.state > Bf) throw new Error("too late; already scheduled");
  return n;
}
function Fn(t, e) {
  var n = _n(t, e);
  if (n.state > Ki) throw new Error("too late; already running");
  return n;
}
function _n(t, e) {
  var n = t.__transition;
  if (!n || !(n = n[e])) throw new Error("transition not found");
  return n;
}
function Q0(t, e, n) {
  var r = t.__transition, o;
  r[e] = n, n.timer = Ff(i, 0, n.time);
  function i(l) {
    n.state = sc, n.timer.restart(s, n.delay, n.time), n.delay <= l && s(l - n.delay);
  }
  function s(l) {
    var d, f, h, p;
    if (n.state !== sc) return u();
    for (d in r)
      if (p = r[d], p.name === n.name) {
        if (p.state === Ki) return ic(s);
        p.state === ac ? (p.state = Wi, p.timer.stop(), p.on.call("interrupt", t, t.__data__, p.index, p.group), delete r[d]) : +d < e && (p.state = Wi, p.timer.stop(), p.on.call("cancel", t, t.__data__, p.index, p.group), delete r[d]);
      }
    if (ic(function() {
      n.state === Ki && (n.state = ac, n.timer.restart(a, n.delay, n.time), a(l));
    }), n.state = Ba, n.on.call("start", t, t.__data__, n.index, n.group), n.state === Ba) {
      for (n.state = Ki, o = new Array(h = n.tween.length), d = 0, f = -1; d < h; ++d)
        (p = n.tween[d].value.call(t, t.__data__, n.index, n.group)) && (o[++f] = p);
      o.length = f + 1;
    }
  }
  function a(l) {
    for (var d = l < n.duration ? n.ease.call(null, l / n.duration) : (n.timer.restart(u), n.state = $a, 1), f = -1, h = o.length; ++f < h; )
      o[f].call(t, d);
    n.state === $a && (n.on.call("end", t, t.__data__, n.index, n.group), u());
  }
  function u() {
    n.state = Wi, n.timer.stop(), delete r[e];
    for (var l in r) return;
    delete t.__transition;
  }
}
function Zi(t, e) {
  var n = t.__transition, r, o, i = !0, s;
  if (n) {
    e = e == null ? null : e + "";
    for (s in n) {
      if ((r = n[s]).name !== e) {
        i = !1;
        continue;
      }
      o = r.state > Ba && r.state < $a, r.state = Wi, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete n[s];
    }
    i && delete t.__transition;
  }
}
function ey(t) {
  return this.each(function() {
    Zi(this, t);
  });
}
function ty(t, e) {
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
function ny(t, e, n) {
  var r, o;
  if (typeof n != "function") throw new Error();
  return function() {
    var i = Fn(this, t), s = i.tween;
    if (s !== r) {
      o = (r = s).slice();
      for (var a = { name: e, value: n }, u = 0, l = o.length; u < l; ++u)
        if (o[u].name === e) {
          o[u] = a;
          break;
        }
      u === l && o.push(a);
    }
    i.tween = o;
  };
}
function ry(t, e) {
  var n = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = _n(this.node(), n).tween, o = 0, i = r.length, s; o < i; ++o)
      if ((s = r[o]).name === t)
        return s.value;
    return null;
  }
  return this.each((e == null ? ty : ny)(n, t, e));
}
function Kl(t, e, n) {
  var r = t._id;
  return t.each(function() {
    var o = Fn(this, r);
    (o.value || (o.value = {}))[e] = n.apply(this, arguments);
  }), function(o) {
    return _n(o, r).value[e];
  };
}
function $f(t, e) {
  var n;
  return (typeof e == "number" ? En : e instanceof Fr ? as : (n = Fr(e)) ? (e = n, as) : Lf)(t, e);
}
function oy(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function iy(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function sy(t, e, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttribute(t);
    return s === o ? null : s === r ? i : i = e(r = s, n);
  };
}
function ay(t, e, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttributeNS(t.space, t.local);
    return s === o ? null : s === r ? i : i = e(r = s, n);
  };
}
function ly(t, e, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), u;
    return a == null ? void this.removeAttribute(t) : (s = this.getAttribute(t), u = a + "", s === u ? null : s === r && u === o ? i : (o = u, i = e(r = s, a)));
  };
}
function uy(t, e, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), u;
    return a == null ? void this.removeAttributeNS(t.space, t.local) : (s = this.getAttributeNS(t.space, t.local), u = a + "", s === u ? null : s === r && u === o ? i : (o = u, i = e(r = s, a)));
  };
}
function cy(t, e) {
  var n = Zs(t), r = n === "transform" ? K0 : $f;
  return this.attrTween(t, typeof e == "function" ? (n.local ? uy : ly)(n, r, Kl(this, "attr." + t, e)) : e == null ? (n.local ? iy : oy)(n) : (n.local ? ay : sy)(n, r, e));
}
function dy(t, e) {
  return function(n) {
    this.setAttribute(t, e.call(this, n));
  };
}
function fy(t, e) {
  return function(n) {
    this.setAttributeNS(t.space, t.local, e.call(this, n));
  };
}
function hy(t, e) {
  var n, r;
  function o() {
    var i = e.apply(this, arguments);
    return i !== r && (n = (r = i) && fy(t, i)), n;
  }
  return o._value = e, o;
}
function gy(t, e) {
  var n, r;
  function o() {
    var i = e.apply(this, arguments);
    return i !== r && (n = (r = i) && dy(t, i)), n;
  }
  return o._value = e, o;
}
function vy(t, e) {
  var n = "attr." + t;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (e == null) return this.tween(n, null);
  if (typeof e != "function") throw new Error();
  var r = Zs(t);
  return this.tween(n, (r.local ? hy : gy)(r, e));
}
function py(t, e) {
  return function() {
    $l(this, t).delay = +e.apply(this, arguments);
  };
}
function my(t, e) {
  return e = +e, function() {
    $l(this, t).delay = e;
  };
}
function yy(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? py : my)(e, t)) : _n(this.node(), e).delay;
}
function wy(t, e) {
  return function() {
    Fn(this, t).duration = +e.apply(this, arguments);
  };
}
function by(t, e) {
  return e = +e, function() {
    Fn(this, t).duration = e;
  };
}
function xy(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? wy : by)(e, t)) : _n(this.node(), e).duration;
}
function _y(t, e) {
  if (typeof e != "function") throw new Error();
  return function() {
    Fn(this, t).ease = e;
  };
}
function Cy(t) {
  var e = this._id;
  return arguments.length ? this.each(_y(e, t)) : _n(this.node(), e).ease;
}
function Sy(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    Fn(this, t).ease = n;
  };
}
function ky(t) {
  if (typeof t != "function") throw new Error();
  return this.each(Sy(this._id, t));
}
function Ey(t) {
  typeof t != "function" && (t = bf(t));
  for (var e = this._groups, n = e.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = e[o], s = i.length, a = r[o] = [], u, l = 0; l < s; ++l)
      (u = i[l]) && t.call(u, u.__data__, l, i) && a.push(u);
  return new nr(r, this._parents, this._name, this._id);
}
function Py(t) {
  if (t._id !== this._id) throw new Error();
  for (var e = this._groups, n = t._groups, r = e.length, o = n.length, i = Math.min(r, o), s = new Array(r), a = 0; a < i; ++a)
    for (var u = e[a], l = n[a], d = u.length, f = s[a] = new Array(d), h, p = 0; p < d; ++p)
      (h = u[p] || l[p]) && (f[p] = h);
  for (; a < r; ++a)
    s[a] = e[a];
  return new nr(s, this._parents, this._name, this._id);
}
function Ny(t) {
  return (t + "").trim().split(/^|\s+/).every(function(e) {
    var n = e.indexOf(".");
    return n >= 0 && (e = e.slice(0, n)), !e || e === "start";
  });
}
function Ty(t, e, n) {
  var r, o, i = Ny(e) ? $l : Fn;
  return function() {
    var s = i(this, t), a = s.on;
    a !== r && (o = (r = a).copy()).on(e, n), s.on = o;
  };
}
function Oy(t, e) {
  var n = this._id;
  return arguments.length < 2 ? _n(this.node(), n).on.on(t) : this.each(Ty(n, t, e));
}
function Ay(t) {
  return function() {
    var e = this.parentNode;
    for (var n in this.__transition) if (+n !== t) return;
    e && e.removeChild(this);
  };
}
function Dy() {
  return this.on("end.remove", Ay(this._id));
}
function Iy(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = Vl(t));
  for (var r = this._groups, o = r.length, i = new Array(o), s = 0; s < o; ++s)
    for (var a = r[s], u = a.length, l = i[s] = new Array(u), d, f, h = 0; h < u; ++h)
      (d = a[h]) && (f = t.call(d, d.__data__, h, a)) && ("__data__" in d && (f.__data__ = d.__data__), l[h] = f, qs(l[h], e, n, h, l, _n(d, n)));
  return new nr(i, this._parents, e, n);
}
function My(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = wf(t));
  for (var r = this._groups, o = r.length, i = [], s = [], a = 0; a < o; ++a)
    for (var u = r[a], l = u.length, d, f = 0; f < l; ++f)
      if (d = u[f]) {
        for (var h = t.call(d, d.__data__, f, u), p, m = _n(d, n), y = 0, w = h.length; y < w; ++y)
          (p = h[y]) && qs(p, e, n, y, h, m);
        i.push(h), s.push(d);
      }
  return new nr(i, s, e, n);
}
var Ly = ci.prototype.constructor;
function Hy() {
  return new Ly(this._groups, this._parents);
}
function Vy(t, e) {
  var n, r, o;
  return function() {
    var i = uo(this, t), s = (this.style.removeProperty(t), uo(this, t));
    return i === s ? null : i === n && s === r ? o : o = e(n = i, r = s);
  };
}
function Kf(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function zy(t, e, n) {
  var r, o = n + "", i;
  return function() {
    var s = uo(this, t);
    return s === o ? null : s === r ? i : i = e(r = s, n);
  };
}
function Ry(t, e, n) {
  var r, o, i;
  return function() {
    var s = uo(this, t), a = n(this), u = a + "";
    return a == null && (u = a = (this.style.removeProperty(t), uo(this, t))), s === u ? null : s === r && u === o ? i : (o = u, i = e(r = s, a));
  };
}
function Fy(t, e) {
  var n, r, o, i = "style." + e, s = "end." + i, a;
  return function() {
    var u = Fn(this, t), l = u.on, d = u.value[i] == null ? a || (a = Kf(e)) : void 0;
    (l !== n || o !== d) && (r = (n = l).copy()).on(s, o = d), u.on = r;
  };
}
function By(t, e, n) {
  var r = (t += "") == "transform" ? $0 : $f;
  return e == null ? this.styleTween(t, Vy(t, r)).on("end.style." + t, Kf(t)) : typeof e == "function" ? this.styleTween(t, Ry(t, r, Kl(this, "style." + t, e))).each(Fy(this._id, t)) : this.styleTween(t, zy(t, r, e), n).on("end.style." + t, null);
}
function $y(t, e, n) {
  return function(r) {
    this.style.setProperty(t, e.call(this, r), n);
  };
}
function Ky(t, e, n) {
  var r, o;
  function i() {
    var s = e.apply(this, arguments);
    return s !== o && (r = (o = s) && $y(t, s, n)), r;
  }
  return i._value = e, i;
}
function Wy(t, e, n) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (e == null) return this.tween(r, null);
  if (typeof e != "function") throw new Error();
  return this.tween(r, Ky(t, e, n ?? ""));
}
function Zy(t) {
  return function() {
    this.textContent = t;
  };
}
function Yy(t) {
  return function() {
    var e = t(this);
    this.textContent = e ?? "";
  };
}
function qy(t) {
  return this.tween("text", typeof t == "function" ? Yy(Kl(this, "text", t)) : Zy(t == null ? "" : t + ""));
}
function Xy(t) {
  return function(e) {
    this.textContent = t.call(this, e);
  };
}
function jy(t) {
  var e, n;
  function r() {
    var o = t.apply(this, arguments);
    return o !== n && (e = (n = o) && Xy(o)), e;
  }
  return r._value = t, r;
}
function Uy(t) {
  var e = "text";
  if (arguments.length < 1) return (e = this.tween(e)) && e._value;
  if (t == null) return this.tween(e, null);
  if (typeof t != "function") throw new Error();
  return this.tween(e, jy(t));
}
function Gy() {
  for (var t = this._name, e = this._id, n = Wf(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, u, l = 0; l < a; ++l)
      if (u = s[l]) {
        var d = _n(u, e);
        qs(u, t, n, l, s, {
          time: d.time + d.delay + d.duration,
          delay: 0,
          duration: d.duration,
          ease: d.ease
        });
      }
  return new nr(r, this._parents, t, n);
}
function Jy() {
  var t, e, n = this, r = n._id, o = n.size();
  return new Promise(function(i, s) {
    var a = { value: s }, u = { value: function() {
      --o === 0 && i();
    } };
    n.each(function() {
      var l = Fn(this, r), d = l.on;
      d !== t && (e = (t = d).copy(), e._.cancel.push(a), e._.interrupt.push(a), e._.end.push(u)), l.on = e;
    }), o === 0 && i();
  });
}
var Qy = 0;
function nr(t, e, n, r) {
  this._groups = t, this._parents = e, this._name = n, this._id = r;
}
function Wf() {
  return ++Qy;
}
var $n = ci.prototype;
nr.prototype = {
  constructor: nr,
  select: Iy,
  selectAll: My,
  selectChild: $n.selectChild,
  selectChildren: $n.selectChildren,
  filter: Ey,
  merge: Py,
  selection: Hy,
  transition: Gy,
  call: $n.call,
  nodes: $n.nodes,
  node: $n.node,
  size: $n.size,
  empty: $n.empty,
  each: $n.each,
  on: Oy,
  attr: cy,
  attrTween: vy,
  style: By,
  styleTween: Wy,
  text: qy,
  textTween: Uy,
  remove: Dy,
  tween: ry,
  delay: yy,
  duration: xy,
  ease: Cy,
  easeVarying: ky,
  end: Jy,
  [Symbol.iterator]: $n[Symbol.iterator]
};
function ew(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var tw = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: ew
};
function nw(t, e) {
  for (var n; !(n = t.__transition) || !(n = n[e]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${e} not found`);
  return n;
}
function rw(t) {
  var e, n;
  t instanceof nr ? (e = t._id, t = t._name) : (e = Wf(), (n = tw).time = Bl(), t = t == null ? null : t + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, u, l = 0; l < a; ++l)
      (u = s[l]) && qs(u, t, e, l, s, n || nw(u, e));
  return new nr(r, this._parents, t, e);
}
ci.prototype.interrupt = ey;
ci.prototype.transition = rw;
const Ai = (t) => () => t;
function ow(t, {
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
function Zn(t, e, n) {
  this.k = t, this.x = e, this.y = n;
}
Zn.prototype = {
  constructor: Zn,
  scale: function(t) {
    return t === 1 ? this : new Zn(this.k * t, this.x, this.y);
  },
  translate: function(t, e) {
    return t === 0 & e === 0 ? this : new Zn(this.k, this.x + this.k * t, this.y + this.k * e);
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
var Xs = new Zn(1, 0, 0);
Zf.prototype = Zn.prototype;
function Zf(t) {
  for (; !t.__zoom; ) if (!(t = t.parentNode)) return Xs;
  return t.__zoom;
}
function ga(t) {
  t.stopImmediatePropagation();
}
function No(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function iw(t) {
  return (!t.ctrlKey || t.type === "wheel") && !t.button;
}
function sw() {
  var t = this;
  return t instanceof SVGElement ? (t = t.ownerSVGElement || t, t.hasAttribute("viewBox") ? (t = t.viewBox.baseVal, [[t.x, t.y], [t.x + t.width, t.y + t.height]]) : [[0, 0], [t.width.baseVal.value, t.height.baseVal.value]]) : [[0, 0], [t.clientWidth, t.clientHeight]];
}
function lc() {
  return this.__zoom || Xs;
}
function aw(t) {
  return -t.deltaY * (t.deltaMode === 1 ? 0.05 : t.deltaMode ? 1 : 2e-3) * (t.ctrlKey ? 10 : 1);
}
function lw() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function uw(t, e, n) {
  var r = t.invertX(e[0][0]) - n[0][0], o = t.invertX(e[1][0]) - n[1][0], i = t.invertY(e[0][1]) - n[0][1], s = t.invertY(e[1][1]) - n[1][1];
  return t.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    s > i ? (i + s) / 2 : Math.min(0, i) || Math.max(0, s)
  );
}
function Yf() {
  var t = iw, e = sw, n = uw, r = aw, o = lw, i = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], a = 250, u = $i, l = Ws("start", "zoom", "end"), d, f, h, p = 500, m = 150, y = 0, w = 10;
  function b(P) {
    P.property("__zoom", lc).on("wheel.zoom", B, { passive: !1 }).on("mousedown.zoom", $).on("dblclick.zoom", H).filter(o).on("touchstart.zoom", N).on("touchmove.zoom", k).on("touchend.zoom touchcancel.zoom", D).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  b.transform = function(P, A, R, M) {
    var Y = P.selection ? P.selection() : P;
    Y.property("__zoom", lc), P !== Y ? _(P, A, R, M) : Y.interrupt().each(function() {
      T(this, arguments).event(M).start().zoom(null, typeof A == "function" ? A.apply(this, arguments) : A).end();
    });
  }, b.scaleBy = function(P, A, R, M) {
    b.scaleTo(P, function() {
      var Y = this.__zoom.k, U = typeof A == "function" ? A.apply(this, arguments) : A;
      return Y * U;
    }, R, M);
  }, b.scaleTo = function(P, A, R, M) {
    b.transform(P, function() {
      var Y = e.apply(this, arguments), U = this.__zoom, V = R == null ? x(Y) : typeof R == "function" ? R.apply(this, arguments) : R, j = U.invert(V), q = typeof A == "function" ? A.apply(this, arguments) : A;
      return n(E(S(U, q), V, j), Y, s);
    }, R, M);
  }, b.translateBy = function(P, A, R, M) {
    b.transform(P, function() {
      return n(this.__zoom.translate(
        typeof A == "function" ? A.apply(this, arguments) : A,
        typeof R == "function" ? R.apply(this, arguments) : R
      ), e.apply(this, arguments), s);
    }, null, M);
  }, b.translateTo = function(P, A, R, M, Y) {
    b.transform(P, function() {
      var U = e.apply(this, arguments), V = this.__zoom, j = M == null ? x(U) : typeof M == "function" ? M.apply(this, arguments) : M;
      return n(Xs.translate(j[0], j[1]).scale(V.k).translate(
        typeof A == "function" ? -A.apply(this, arguments) : -A,
        typeof R == "function" ? -R.apply(this, arguments) : -R
      ), U, s);
    }, M, Y);
  };
  function S(P, A) {
    return A = Math.max(i[0], Math.min(i[1], A)), A === P.k ? P : new Zn(A, P.x, P.y);
  }
  function E(P, A, R) {
    var M = A[0] - R[0] * P.k, Y = A[1] - R[1] * P.k;
    return M === P.x && Y === P.y ? P : new Zn(P.k, M, Y);
  }
  function x(P) {
    return [(+P[0][0] + +P[1][0]) / 2, (+P[0][1] + +P[1][1]) / 2];
  }
  function _(P, A, R, M) {
    P.on("start.zoom", function() {
      T(this, arguments).event(M).start();
    }).on("interrupt.zoom end.zoom", function() {
      T(this, arguments).event(M).end();
    }).tween("zoom", function() {
      var Y = this, U = arguments, V = T(Y, U).event(M), j = e.apply(Y, U), q = R == null ? x(j) : typeof R == "function" ? R.apply(Y, U) : R, F = Math.max(j[1][0] - j[0][0], j[1][1] - j[0][1]), Q = Y.__zoom, X = typeof A == "function" ? A.apply(Y, U) : A, re = u(Q.invert(q).concat(F / Q.k), X.invert(q).concat(F / X.k));
      return function(ee) {
        if (ee === 1) ee = X;
        else {
          var L = re(ee), te = F / L[2];
          ee = new Zn(te, q[0] - L[0] * te, q[1] - L[1] * te);
        }
        V.zoom(null, ee);
      };
    });
  }
  function T(P, A, R) {
    return !R && P.__zooming || new I(P, A);
  }
  function I(P, A) {
    this.that = P, this.args = A, this.active = 0, this.sourceEvent = null, this.extent = e.apply(P, A), this.taps = 0;
  }
  I.prototype = {
    event: function(P) {
      return P && (this.sourceEvent = P), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(P, A) {
      return this.mouse && P !== "mouse" && (this.mouse[1] = A.invert(this.mouse[0])), this.touch0 && P !== "touch" && (this.touch0[1] = A.invert(this.touch0[0])), this.touch1 && P !== "touch" && (this.touch1[1] = A.invert(this.touch1[0])), this.that.__zoom = A, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(P) {
      var A = nn(this.that).datum();
      l.call(
        P,
        this.that,
        new ow(P, {
          sourceEvent: this.sourceEvent,
          target: b,
          transform: this.that.__zoom,
          dispatch: l
        }),
        A
      );
    }
  };
  function B(P, ...A) {
    if (!t.apply(this, arguments)) return;
    var R = T(this, A).event(P), M = this.__zoom, Y = Math.max(i[0], Math.min(i[1], M.k * Math.pow(2, r.apply(this, arguments)))), U = cn(P);
    if (R.wheel)
      (R.mouse[0][0] !== U[0] || R.mouse[0][1] !== U[1]) && (R.mouse[1] = M.invert(R.mouse[0] = U)), clearTimeout(R.wheel);
    else {
      if (M.k === Y) return;
      R.mouse = [U, M.invert(U)], Zi(this), R.start();
    }
    No(P), R.wheel = setTimeout(V, m), R.zoom("mouse", n(E(S(M, Y), R.mouse[0], R.mouse[1]), R.extent, s));
    function V() {
      R.wheel = null, R.end();
    }
  }
  function $(P, ...A) {
    if (h || !t.apply(this, arguments)) return;
    var R = P.currentTarget, M = T(this, A, !0).event(P), Y = nn(P.view).on("mousemove.zoom", q, !0).on("mouseup.zoom", F, !0), U = cn(P, R), V = P.clientX, j = P.clientY;
    Of(P.view), ga(P), M.mouse = [U, this.__zoom.invert(U)], Zi(this), M.start();
    function q(Q) {
      if (No(Q), !M.moved) {
        var X = Q.clientX - V, re = Q.clientY - j;
        M.moved = X * X + re * re > y;
      }
      M.event(Q).zoom("mouse", n(E(M.that.__zoom, M.mouse[0] = cn(Q, R), M.mouse[1]), M.extent, s));
    }
    function F(Q) {
      Y.on("mousemove.zoom mouseup.zoom", null), Af(Q.view, M.moved), No(Q), M.event(Q).end();
    }
  }
  function H(P, ...A) {
    if (t.apply(this, arguments)) {
      var R = this.__zoom, M = cn(P.changedTouches ? P.changedTouches[0] : P, this), Y = R.invert(M), U = R.k * (P.shiftKey ? 0.5 : 2), V = n(E(S(R, U), M, Y), e.apply(this, A), s);
      No(P), a > 0 ? nn(this).transition().duration(a).call(_, V, M, P) : nn(this).call(b.transform, V, M, P);
    }
  }
  function N(P, ...A) {
    if (t.apply(this, arguments)) {
      var R = P.touches, M = R.length, Y = T(this, A, P.changedTouches.length === M).event(P), U, V, j, q;
      for (ga(P), V = 0; V < M; ++V)
        j = R[V], q = cn(j, this), q = [q, this.__zoom.invert(q), j.identifier], Y.touch0 ? !Y.touch1 && Y.touch0[2] !== q[2] && (Y.touch1 = q, Y.taps = 0) : (Y.touch0 = q, U = !0, Y.taps = 1 + !!d);
      d && (d = clearTimeout(d)), U && (Y.taps < 2 && (f = q[0], d = setTimeout(function() {
        d = null;
      }, p)), Zi(this), Y.start());
    }
  }
  function k(P, ...A) {
    if (this.__zooming) {
      var R = T(this, A).event(P), M = P.changedTouches, Y = M.length, U, V, j, q;
      for (No(P), U = 0; U < Y; ++U)
        V = M[U], j = cn(V, this), R.touch0 && R.touch0[2] === V.identifier ? R.touch0[0] = j : R.touch1 && R.touch1[2] === V.identifier && (R.touch1[0] = j);
      if (V = R.that.__zoom, R.touch1) {
        var F = R.touch0[0], Q = R.touch0[1], X = R.touch1[0], re = R.touch1[1], ee = (ee = X[0] - F[0]) * ee + (ee = X[1] - F[1]) * ee, L = (L = re[0] - Q[0]) * L + (L = re[1] - Q[1]) * L;
        V = S(V, Math.sqrt(ee / L)), j = [(F[0] + X[0]) / 2, (F[1] + X[1]) / 2], q = [(Q[0] + re[0]) / 2, (Q[1] + re[1]) / 2];
      } else if (R.touch0) j = R.touch0[0], q = R.touch0[1];
      else return;
      R.zoom("touch", n(E(V, j, q), R.extent, s));
    }
  }
  function D(P, ...A) {
    if (this.__zooming) {
      var R = T(this, A).event(P), M = P.changedTouches, Y = M.length, U, V;
      for (ga(P), h && clearTimeout(h), h = setTimeout(function() {
        h = null;
      }, p), U = 0; U < Y; ++U)
        V = M[U], R.touch0 && R.touch0[2] === V.identifier ? delete R.touch0 : R.touch1 && R.touch1[2] === V.identifier && delete R.touch1;
      if (R.touch1 && !R.touch0 && (R.touch0 = R.touch1, delete R.touch1), R.touch0) R.touch0[1] = this.__zoom.invert(R.touch0[0]);
      else if (R.end(), R.taps === 2 && (V = cn(V, this), Math.hypot(f[0] - V[0], f[1] - V[1]) < w)) {
        var j = nn(this).on("dblclick.zoom");
        j && j.apply(this, arguments);
      }
    }
  }
  return b.wheelDelta = function(P) {
    return arguments.length ? (r = typeof P == "function" ? P : Ai(+P), b) : r;
  }, b.filter = function(P) {
    return arguments.length ? (t = typeof P == "function" ? P : Ai(!!P), b) : t;
  }, b.touchable = function(P) {
    return arguments.length ? (o = typeof P == "function" ? P : Ai(!!P), b) : o;
  }, b.extent = function(P) {
    return arguments.length ? (e = typeof P == "function" ? P : Ai([[+P[0][0], +P[0][1]], [+P[1][0], +P[1][1]]]), b) : e;
  }, b.scaleExtent = function(P) {
    return arguments.length ? (i[0] = +P[0], i[1] = +P[1], b) : [i[0], i[1]];
  }, b.translateExtent = function(P) {
    return arguments.length ? (s[0][0] = +P[0][0], s[1][0] = +P[1][0], s[0][1] = +P[0][1], s[1][1] = +P[1][1], b) : [[s[0][0], s[0][1]], [s[1][0], s[1][1]]];
  }, b.constrain = function(P) {
    return arguments.length ? (n = P, b) : n;
  }, b.duration = function(P) {
    return arguments.length ? (a = +P, b) : a;
  }, b.interpolate = function(P) {
    return arguments.length ? (u = P, b) : u;
  }, b.on = function() {
    var P = l.on.apply(l, arguments);
    return P === l ? b : P;
  }, b.clickDistance = function(P) {
    return arguments.length ? (y = (P = +P) * P, b) : Math.sqrt(y);
  }, b.tapDistance = function(P) {
    return arguments.length ? (w = +P, b) : w;
  }, b;
}
const jo = {
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
}, Ka = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
], qf = ["Enter", " ", "Escape"], cw = {
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
var fo;
(function(t) {
  t.Strict = "strict", t.Loose = "loose";
})(fo || (fo = {}));
var Lr;
(function(t) {
  t.Free = "free", t.Vertical = "vertical", t.Horizontal = "horizontal";
})(Lr || (Lr = {}));
var ds;
(function(t) {
  t.Partial = "partial", t.Full = "full";
})(ds || (ds = {}));
const Wa = {
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
var Uo;
(function(t) {
  t.Arrow = "arrow", t.ArrowClosed = "arrowclosed";
})(Uo || (Uo = {}));
var ke;
(function(t) {
  t.Left = "left", t.Top = "top", t.Right = "right", t.Bottom = "bottom";
})(ke || (ke = {}));
const uc = {
  [ke.Left]: ke.Right,
  [ke.Right]: ke.Left,
  [ke.Top]: ke.Bottom,
  [ke.Bottom]: ke.Top
};
function dw(t, e) {
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
function cc(t, e, n) {
  if (!n)
    return;
  const r = [];
  t.forEach((o, i) => {
    e?.has(i) || r.push(o);
  }), r.length && n(r);
}
function fw(t) {
  return t === null ? null : t ? "valid" : "invalid";
}
const Xf = (t) => "id" in t && "source" in t && "target" in t, hw = (t) => "id" in t && "position" in t && !("source" in t) && !("target" in t), Wl = (t) => "id" in t && "internals" in t && !("source" in t) && !("target" in t), fi = (t, e = [0, 0]) => {
  const { width: n, height: r } = kr(t), o = t.origin ?? e, i = n * o[0], s = r * o[1];
  return {
    x: t.position.x - i,
    y: t.position.y - s
  };
}, gw = (t, e = { nodeOrigin: [0, 0] }) => {
  if (t.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = t.reduce((r, o) => {
    const i = typeof o == "string";
    let s = !e.nodeLookup && !i ? o : void 0;
    e.nodeLookup && (s = i ? e.nodeLookup.get(o) : Wl(o) ? o : e.nodeLookup.get(o.id));
    const a = s ? fs(s, e.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return js(r, a);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return Us(n);
}, hi = (t, e = {}) => {
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 }, r = !1;
  return t.forEach((o) => {
    (e.filter === void 0 || e.filter(o)) && (n = js(n, fs(o)), r = !0);
  }), r ? Us(n) : { x: 0, y: 0, width: 0, height: 0 };
}, Zl = (t, e, [n, r, o] = [0, 0, 1], i = !1, s = !1) => {
  const a = {
    ...vi(e, [n, r, o]),
    width: e.width / o,
    height: e.height / o
  }, u = [];
  for (const l of t.values()) {
    const { measured: d, selectable: f = !0, hidden: h = !1 } = l;
    if (s && !f || h)
      continue;
    const p = d.width ?? l.width ?? l.initialWidth ?? null, m = d.height ?? l.height ?? l.initialHeight ?? null, y = Go(a, go(l)), w = (p ?? 0) * (m ?? 0), b = i && y > 0;
    (!l.internals.handleBounds || b || y >= w || l.dragging) && u.push(l);
  }
  return u;
}, vw = (t, e) => {
  const n = /* @__PURE__ */ new Set();
  return t.forEach((r) => {
    n.add(r.id);
  }), e.filter((r) => n.has(r.source) || n.has(r.target));
};
function pw(t, e) {
  const n = /* @__PURE__ */ new Map(), r = e?.nodes ? new Set(e.nodes.map((o) => o.id)) : null;
  return t.forEach((o) => {
    o.measured.width && o.measured.height && (e?.includeHiddenNodes || !o.hidden) && (!r || r.has(o.id)) && n.set(o.id, o);
  }), n;
}
async function mw({ nodes: t, width: e, height: n, panZoom: r, minZoom: o, maxZoom: i }, s) {
  if (t.size === 0)
    return Promise.resolve(!0);
  const a = pw(t, s), u = hi(a), l = Yl(u, e, n, s?.minZoom ?? o, s?.maxZoom ?? i, s?.padding ?? 0.1);
  return await r.setViewport(l, {
    duration: s?.duration,
    ease: s?.ease,
    interpolate: s?.interpolate
  }), Promise.resolve(!0);
}
function jf({ nodeId: t, nextPosition: e, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
  const s = n.get(t), a = s.parentId ? n.get(s.parentId) : void 0, { x: u, y: l } = a ? a.internals.positionAbsolute : { x: 0, y: 0 }, d = s.origin ?? r;
  let f = s.extent || o;
  if (s.extent === "parent" && !s.expandParent)
    if (!a)
      i?.("005", jo.error005());
    else {
      const p = a.measured.width, m = a.measured.height;
      p && m && (f = [
        [u, l],
        [u + p, l + m]
      ]);
    }
  else a && vo(s.extent) && (f = [
    [s.extent[0][0] + u, s.extent[0][1] + l],
    [s.extent[1][0] + u, s.extent[1][1] + l]
  ]);
  const h = vo(f) ? $r(e, f, s.measured) : e;
  return (s.measured.width === void 0 || s.measured.height === void 0) && i?.("015", jo.error015()), {
    position: {
      x: h.x - u + (s.measured.width ?? 0) * d[0],
      y: h.y - l + (s.measured.height ?? 0) * d[1]
    },
    positionAbsolute: h
  };
}
async function yw({ nodesToRemove: t = [], edgesToRemove: e = [], nodes: n, edges: r, onBeforeDelete: o }) {
  const i = new Set(t.map((h) => h.id)), s = [];
  for (const h of n) {
    if (h.deletable === !1)
      continue;
    const p = i.has(h.id), m = !p && h.parentId && s.find((y) => y.id === h.parentId);
    (p || m) && s.push(h);
  }
  const a = new Set(e.map((h) => h.id)), u = r.filter((h) => h.deletable !== !1), d = vw(s, u);
  for (const h of u)
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
const ho = (t, e = 0, n = 1) => Math.min(Math.max(t, e), n), $r = (t = { x: 0, y: 0 }, e, n) => ({
  x: ho(t.x, e[0][0], e[1][0] - (n?.width ?? 0)),
  y: ho(t.y, e[0][1], e[1][1] - (n?.height ?? 0))
});
function Uf(t, e, n) {
  const { width: r, height: o } = kr(n), { x: i, y: s } = n.internals.positionAbsolute;
  return $r(t, [
    [i, s],
    [i + r, s + o]
  ], e);
}
const dc = (t, e, n) => t < e ? ho(Math.abs(t - e), 1, e) / e : t > n ? -ho(Math.abs(t - n), 1, e) / e : 0, Gf = (t, e, n = 15, r = 40) => {
  const o = dc(t.x, r, e.width - r) * n, i = dc(t.y, r, e.height - r) * n;
  return [o, i];
}, js = (t, e) => ({
  x: Math.min(t.x, e.x),
  y: Math.min(t.y, e.y),
  x2: Math.max(t.x2, e.x2),
  y2: Math.max(t.y2, e.y2)
}), Za = ({ x: t, y: e, width: n, height: r }) => ({
  x: t,
  y: e,
  x2: t + n,
  y2: e + r
}), Us = ({ x: t, y: e, x2: n, y2: r }) => ({
  x: t,
  y: e,
  width: n - t,
  height: r - e
}), go = (t, e = [0, 0]) => {
  const { x: n, y: r } = Wl(t) ? t.internals.positionAbsolute : fi(t, e);
  return {
    x: n,
    y: r,
    width: t.measured?.width ?? t.width ?? t.initialWidth ?? 0,
    height: t.measured?.height ?? t.height ?? t.initialHeight ?? 0
  };
}, fs = (t, e = [0, 0]) => {
  const { x: n, y: r } = Wl(t) ? t.internals.positionAbsolute : fi(t, e);
  return {
    x: n,
    y: r,
    x2: n + (t.measured?.width ?? t.width ?? t.initialWidth ?? 0),
    y2: r + (t.measured?.height ?? t.height ?? t.initialHeight ?? 0)
  };
}, Jf = (t, e) => Us(js(Za(t), Za(e))), Go = (t, e) => {
  const n = Math.max(0, Math.min(t.x + t.width, e.x + e.width) - Math.max(t.x, e.x)), r = Math.max(0, Math.min(t.y + t.height, e.y + e.height) - Math.max(t.y, e.y));
  return Math.ceil(n * r);
}, fc = (t) => Yn(t.width) && Yn(t.height) && Yn(t.x) && Yn(t.y), Yn = (t) => !isNaN(t) && isFinite(t), ww = (t, e) => {
}, gi = (t, e = [1, 1]) => ({
  x: e[0] * Math.round(t.x / e[0]),
  y: e[1] * Math.round(t.y / e[1])
}), vi = ({ x: t, y: e }, [n, r, o], i = !1, s = [1, 1]) => {
  const a = {
    x: (t - n) / o,
    y: (e - r) / o
  };
  return i ? gi(a, s) : a;
}, hs = ({ x: t, y: e }, [n, r, o]) => ({
  x: t * o + n,
  y: e * o + r
});
function Gr(t, e) {
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
function bw(t, e, n) {
  if (typeof t == "string" || typeof t == "number") {
    const r = Gr(t, n), o = Gr(t, e);
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
    const r = Gr(t.top ?? t.y ?? 0, n), o = Gr(t.bottom ?? t.y ?? 0, n), i = Gr(t.left ?? t.x ?? 0, e), s = Gr(t.right ?? t.x ?? 0, e);
    return { top: r, right: s, bottom: o, left: i, x: i + s, y: r + o };
  }
  return { top: 0, right: 0, bottom: 0, left: 0, x: 0, y: 0 };
}
function xw(t, e, n, r, o, i) {
  const { x: s, y: a } = hs(t, [e, n, r]), { x: u, y: l } = hs({ x: t.x + t.width, y: t.y + t.height }, [e, n, r]), d = o - u, f = i - l;
  return {
    left: Math.floor(s),
    top: Math.floor(a),
    right: Math.floor(d),
    bottom: Math.floor(f)
  };
}
const Yl = (t, e, n, r, o, i) => {
  const s = bw(i, e, n), a = (e - s.x) / t.width, u = (n - s.y) / t.height, l = Math.min(a, u), d = ho(l, r, o), f = t.x + t.width / 2, h = t.y + t.height / 2, p = e / 2 - f * d, m = n / 2 - h * d, y = xw(t, p, m, d, e, n), w = {
    left: Math.min(y.left - s.left, 0),
    top: Math.min(y.top - s.top, 0),
    right: Math.min(y.right - s.right, 0),
    bottom: Math.min(y.bottom - s.bottom, 0)
  };
  return {
    x: p - w.left + w.right,
    y: m - w.top + w.bottom,
    zoom: d
  };
}, Ar = () => typeof navigator < "u" && navigator?.userAgent?.indexOf("Mac") >= 0;
function vo(t) {
  return t != null && t !== "parent";
}
function kr(t) {
  return {
    width: t.measured?.width ?? t.width ?? t.initialWidth ?? 0,
    height: t.measured?.height ?? t.height ?? t.initialHeight ?? 0
  };
}
function Qf(t) {
  return (t.measured?.width ?? t.width ?? t.initialWidth) !== void 0 && (t.measured?.height ?? t.height ?? t.initialHeight) !== void 0;
}
function _w(t, e = { width: 0, height: 0 }, n, r, o) {
  const i = { ...t }, s = r.get(n);
  if (s) {
    const a = s.origin || o;
    i.x += s.internals.positionAbsolute.x - (e.width ?? 0) * a[0], i.y += s.internals.positionAbsolute.y - (e.height ?? 0) * a[1];
  }
  return i;
}
function Cw(t) {
  return { ...cw, ...t || {} };
}
function va(t, { snapGrid: e = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: i, y: s } = hn(t), a = vi({ x: i - (o?.left ?? 0), y: s - (o?.top ?? 0) }, r), { x: u, y: l } = n ? gi(a, e) : a;
  return {
    xSnapped: u,
    ySnapped: l,
    ...a
  };
}
const eh = (t) => ({
  width: t.offsetWidth,
  height: t.offsetHeight
}), th = (t) => t?.getRootNode?.() || window?.document, Sw = ["INPUT", "SELECT", "TEXTAREA"];
function nh(t) {
  const e = t.composedPath?.()?.[0] || t.target;
  return e?.nodeType !== 1 ? !1 : Sw.includes(e.nodeName) || e.hasAttribute("contenteditable") || !!e.closest(".nokey");
}
const rh = (t) => "clientX" in t, hn = (t, e) => {
  const n = rh(t), r = n ? t.clientX : t.touches?.[0].clientX, o = n ? t.clientY : t.touches?.[0].clientY;
  return {
    x: r - (e?.left ?? 0),
    y: o - (e?.top ?? 0)
  };
}, hc = (t, e, n, r, o) => {
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
      ...eh(s)
    };
  });
};
function kw({ sourceX: t, sourceY: e, targetX: n, targetY: r, sourceControlX: o, sourceControlY: i, targetControlX: s, targetControlY: a }) {
  const u = t * 0.125 + o * 0.375 + s * 0.375 + n * 0.125, l = e * 0.125 + i * 0.375 + a * 0.375 + r * 0.125, d = Math.abs(u - t), f = Math.abs(l - e);
  return [u, l, d, f];
}
function Di(t, e) {
  return t >= 0 ? 0.5 * t : e * 25 * Math.sqrt(-t);
}
function gc({ pos: t, x1: e, y1: n, x2: r, y2: o, c: i }) {
  switch (t) {
    case ke.Left:
      return [e - Di(e - r, i), n];
    case ke.Right:
      return [e + Di(r - e, i), n];
    case ke.Top:
      return [e, n - Di(n - o, i)];
    case ke.Bottom:
      return [e, n + Di(o - n, i)];
  }
}
function oh({ sourceX: t, sourceY: e, sourcePosition: n = ke.Bottom, targetX: r, targetY: o, targetPosition: i = ke.Top, curvature: s = 0.25 }) {
  const [a, u] = gc({
    pos: n,
    x1: t,
    y1: e,
    x2: r,
    y2: o,
    c: s
  }), [l, d] = gc({
    pos: i,
    x1: r,
    y1: o,
    x2: t,
    y2: e,
    c: s
  }), [f, h, p, m] = kw({
    sourceX: t,
    sourceY: e,
    targetX: r,
    targetY: o,
    sourceControlX: a,
    sourceControlY: u,
    targetControlX: l,
    targetControlY: d
  });
  return [
    `M${t},${e} C${a},${u} ${l},${d} ${r},${o}`,
    f,
    h,
    p,
    m
  ];
}
function ih({ sourceX: t, sourceY: e, targetX: n, targetY: r }) {
  const o = Math.abs(n - t) / 2, i = n < t ? n + o : n - o, s = Math.abs(r - e) / 2, a = r < e ? r + s : r - s;
  return [i, a, o, s];
}
function Ew({ sourceNode: t, targetNode: e, selected: n = !1, zIndex: r, elevateOnSelect: o = !1 }) {
  if (r !== void 0)
    return r;
  const i = o && n ? 1e3 : 0, s = Math.max(t.parentId || o && t.selected ? t.internals.z : 0, e.parentId || o && e.selected ? e.internals.z : 0);
  return i + s;
}
function Pw({ sourceNode: t, targetNode: e, width: n, height: r, transform: o }) {
  const i = js(fs(t), fs(e));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const s = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return Go(s, Us(i)) > 0;
}
const Nw = ({ source: t, sourceHandle: e, target: n, targetHandle: r }) => `xy-edge__${t}${e || ""}-${n}${r || ""}`, Tw = (t, e) => e.some((n) => n.source === t.source && n.target === t.target && (n.sourceHandle === t.sourceHandle || !n.sourceHandle && !t.sourceHandle) && (n.targetHandle === t.targetHandle || !n.targetHandle && !t.targetHandle)), Ow = (t, e) => {
  if (!t.source || !t.target)
    return e;
  let n;
  return Xf(t) ? n = { ...t } : n = {
    ...t,
    id: Nw(t)
  }, Tw(n, e) ? e : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, e.concat(n));
};
function sh({ sourceX: t, sourceY: e, targetX: n, targetY: r }) {
  const [o, i, s, a] = ih({
    sourceX: t,
    sourceY: e,
    targetX: n,
    targetY: r
  });
  return [`M ${t},${e}L ${n},${r}`, o, i, s, a];
}
const vc = {
  [ke.Left]: { x: -1, y: 0 },
  [ke.Right]: { x: 1, y: 0 },
  [ke.Top]: { x: 0, y: -1 },
  [ke.Bottom]: { x: 0, y: 1 }
}, Aw = ({ source: t, sourcePosition: e = ke.Bottom, target: n }) => e === ke.Left || e === ke.Right ? t.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : t.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, pc = (t, e) => Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
function Dw({ source: t, sourcePosition: e = ke.Bottom, target: n, targetPosition: r = ke.Top, center: o, offset: i, stepPosition: s }) {
  const a = vc[e], u = vc[r], l = { x: t.x + a.x * i, y: t.y + a.y * i }, d = { x: n.x + u.x * i, y: n.y + u.y * i }, f = Aw({
    source: l,
    sourcePosition: e,
    target: d
  }), h = f.x !== 0 ? "x" : "y", p = f[h];
  let m = [], y, w;
  const b = { x: 0, y: 0 }, S = { x: 0, y: 0 }, [, , E, x] = ih({
    sourceX: t.x,
    sourceY: t.y,
    targetX: n.x,
    targetY: n.y
  });
  if (a[h] * u[h] === -1) {
    h === "x" ? (y = o.x ?? l.x + (d.x - l.x) * s, w = o.y ?? (l.y + d.y) / 2) : (y = o.x ?? (l.x + d.x) / 2, w = o.y ?? l.y + (d.y - l.y) * s);
    const T = [
      { x: y, y: l.y },
      { x: y, y: d.y }
    ], I = [
      { x: l.x, y: w },
      { x: d.x, y: w }
    ];
    a[h] === p ? m = h === "x" ? T : I : m = h === "x" ? I : T;
  } else {
    const T = [{ x: l.x, y: d.y }], I = [{ x: d.x, y: l.y }];
    if (h === "x" ? m = a.x === p ? I : T : m = a.y === p ? T : I, e === r) {
      const k = Math.abs(t[h] - n[h]);
      if (k <= i) {
        const D = Math.min(i - 1, i - k);
        a[h] === p ? b[h] = (l[h] > t[h] ? -1 : 1) * D : S[h] = (d[h] > n[h] ? -1 : 1) * D;
      }
    }
    if (e !== r) {
      const k = h === "x" ? "y" : "x", D = a[h] === u[k], P = l[k] > d[k], A = l[k] < d[k];
      (a[h] === 1 && (!D && P || D && A) || a[h] !== 1 && (!D && A || D && P)) && (m = h === "x" ? T : I);
    }
    const B = { x: l.x + b.x, y: l.y + b.y }, $ = { x: d.x + S.x, y: d.y + S.y }, H = Math.max(Math.abs(B.x - m[0].x), Math.abs($.x - m[0].x)), N = Math.max(Math.abs(B.y - m[0].y), Math.abs($.y - m[0].y));
    H >= N ? (y = (B.x + $.x) / 2, w = m[0].y) : (y = m[0].x, w = (B.y + $.y) / 2);
  }
  return [[
    t,
    { x: l.x + b.x, y: l.y + b.y },
    ...m,
    { x: d.x + S.x, y: d.y + S.y },
    n
  ], y, w, E, x];
}
function Iw(t, e, n, r) {
  const o = Math.min(pc(t, e) / 2, pc(e, n) / 2, r), { x: i, y: s } = e;
  if (t.x === i && i === n.x || t.y === s && s === n.y)
    return `L${i} ${s}`;
  if (t.y === s) {
    const l = t.x < n.x ? -1 : 1, d = t.y < n.y ? 1 : -1;
    return `L ${i + o * l},${s}Q ${i},${s} ${i},${s + o * d}`;
  }
  const a = t.x < n.x ? 1 : -1, u = t.y < n.y ? -1 : 1;
  return `L ${i},${s + o * u}Q ${i},${s} ${i + o * a},${s}`;
}
function ql({ sourceX: t, sourceY: e, sourcePosition: n = ke.Bottom, targetX: r, targetY: o, targetPosition: i = ke.Top, borderRadius: s = 5, centerX: a, centerY: u, offset: l = 20, stepPosition: d = 0.5 }) {
  const [f, h, p, m, y] = Dw({
    source: { x: t, y: e },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: a, y: u },
    offset: l,
    stepPosition: d
  });
  return [f.reduce((b, S, E) => {
    let x = "";
    return E > 0 && E < f.length - 1 ? x = Iw(f[E - 1], S, f[E + 1], s) : x = `${E === 0 ? "M" : "L"}${S.x} ${S.y}`, b += x, b;
  }, ""), h, p, m, y];
}
function mc(t) {
  return t && !!(t.internals.handleBounds || t.handles?.length) && !!(t.measured.width || t.width || t.initialWidth);
}
function Mw(t) {
  const { sourceNode: e, targetNode: n } = t;
  if (!mc(e) || !mc(n))
    return null;
  const r = e.internals.handleBounds || yc(e.handles), o = n.internals.handleBounds || yc(n.handles), i = wc(r?.source ?? [], t.sourceHandle), s = wc(
    // when connection type is loose we can define all handles as sources and connect source -> source
    t.connectionMode === fo.Strict ? o?.target ?? [] : (o?.target ?? []).concat(o?.source ?? []),
    t.targetHandle
  );
  if (!i || !s)
    return t.onError?.("008", jo.error008(i ? "target" : "source", {
      id: t.id,
      sourceHandle: t.sourceHandle,
      targetHandle: t.targetHandle
    })), null;
  const a = i?.position || ke.Bottom, u = s?.position || ke.Top, l = Jo(e, i, a), d = Jo(n, s, u);
  return {
    sourceX: l.x,
    sourceY: l.y,
    targetX: d.x,
    targetY: d.y,
    sourcePosition: a,
    targetPosition: u
  };
}
function yc(t) {
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
function Jo(t, e, n = ke.Left, r = !1) {
  const o = (e?.x ?? 0) + t.internals.positionAbsolute.x, i = (e?.y ?? 0) + t.internals.positionAbsolute.y, { width: s, height: a } = e ?? kr(t);
  if (r)
    return { x: o + s / 2, y: i + a / 2 };
  switch (e?.position ?? n) {
    case ke.Top:
      return { x: o + s / 2, y: i };
    case ke.Right:
      return { x: o + s, y: i + a / 2 };
    case ke.Bottom:
      return { x: o + s / 2, y: i + a };
    case ke.Left:
      return { x: o, y: i + a / 2 };
  }
}
function wc(t, e) {
  return t && (e ? t.find((n) => n.id === e) : t[0]) || null;
}
function Ya(t, e) {
  return t ? typeof t == "string" ? t : `${e ? `${e}__` : ""}${Object.keys(t).sort().map((r) => `${r}=${t[r]}`).join("&")}` : "";
}
function Lw(t, { id: e, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const i = /* @__PURE__ */ new Set();
  return t.reduce((s, a) => ([a.markerStart || r, a.markerEnd || o].forEach((u) => {
    if (u && typeof u == "object") {
      const l = Ya(u, e);
      i.has(l) || (s.push({ id: l, color: u.color || n, ...u }), i.add(l));
    }
  }), s), []).sort((s, a) => s.id.localeCompare(a.id));
}
function Hw(t, e, n, r, o) {
  let i = 0.5;
  o === "start" ? i = 0 : o === "end" && (i = 1);
  let s = [
    (t.x + t.width * i) * e.zoom + e.x,
    t.y * e.zoom + e.y - r
  ], a = [-100 * i, -100];
  switch (n) {
    case ke.Right:
      s = [
        (t.x + t.width) * e.zoom + e.x + r,
        (t.y + t.height * i) * e.zoom + e.y
      ], a = [0, -100 * i];
      break;
    case ke.Bottom:
      s[1] = (t.y + t.height) * e.zoom + e.y + r, a[1] = 0;
      break;
    case ke.Left:
      s = [
        t.x * e.zoom + e.x - r,
        (t.y + t.height * i) * e.zoom + e.y
      ], a = [-100, -100 * i];
      break;
  }
  return `translate(${s[0]}px, ${s[1]}px) translate(${a[0]}%, ${a[1]}%)`;
}
const ah = 1e3, Vw = 10, Xl = {
  nodeOrigin: [0, 0],
  nodeExtent: Ka,
  elevateNodesOnSelect: !0,
  defaults: {}
}, zw = {
  ...Xl,
  checkEquality: !0
};
function jl(t, e) {
  const n = { ...t };
  for (const r in e)
    e[r] !== void 0 && (n[r] = e[r]);
  return n;
}
function Rw(t, e, n) {
  const r = jl(Xl, n);
  for (const o of t.values())
    if (o.parentId)
      Ul(o, t, e, r);
    else {
      const i = fi(o, r.nodeOrigin), s = vo(o.extent) ? o.extent : r.nodeExtent, a = $r(i, s, kr(o));
      o.internals.positionAbsolute = a;
    }
}
function Fw(t, e) {
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
function Bw(t, e, n, r) {
  const o = jl(zw, r);
  let i = { i: -1 }, s = t.length > 0;
  const a = new Map(e), u = o?.elevateNodesOnSelect ? ah : 0;
  e.clear(), n.clear();
  for (const l of t) {
    let d = a.get(l.id);
    if (o.checkEquality && l === d?.internals.userNode)
      e.set(l.id, d);
    else {
      const f = fi(l, o.nodeOrigin), h = vo(l.extent) ? l.extent : o.nodeExtent, p = $r(f, h, kr(l));
      d = {
        ...o.defaults,
        ...l,
        measured: {
          width: l.measured?.width,
          height: l.measured?.height
        },
        internals: {
          positionAbsolute: p,
          // if user re-initializes the node or removes `measured` for whatever reason, we reset the handleBounds so that the node gets re-measured
          handleBounds: Fw(l, d),
          z: lh(l, u),
          userNode: l
        }
      }, e.set(l.id, d);
    }
    (d.measured === void 0 || d.measured.width === void 0 || d.measured.height === void 0) && !d.hidden && (s = !1), l.parentId && Ul(d, e, n, r, i);
  }
  return s;
}
function $w(t, e) {
  if (!t.parentId)
    return;
  const n = e.get(t.parentId);
  n ? n.set(t.id, t) : e.set(t.parentId, /* @__PURE__ */ new Map([[t.id, t]]));
}
function Ul(t, e, n, r, o) {
  const { elevateNodesOnSelect: i, nodeOrigin: s, nodeExtent: a } = jl(Xl, r), u = t.parentId, l = e.get(u);
  if (!l) {
    console.warn(`Parent node ${u} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  $w(t, n), o && !l.parentId && l.internals.rootParentIndex === void 0 && (l.internals.rootParentIndex = ++o.i, l.internals.z = l.internals.z + o.i * Vw), o && l.internals.rootParentIndex !== void 0 && (o.i = l.internals.rootParentIndex);
  const d = i ? ah : 0, { x: f, y: h, z: p } = Kw(t, l, s, a, d), { positionAbsolute: m } = t.internals, y = f !== m.x || h !== m.y;
  (y || p !== t.internals.z) && e.set(t.id, {
    ...t,
    internals: {
      ...t.internals,
      positionAbsolute: y ? { x: f, y: h } : m,
      z: p
    }
  });
}
function lh(t, e) {
  return (Yn(t.zIndex) ? t.zIndex : 0) + (t.selected ? e : 0);
}
function Kw(t, e, n, r, o) {
  const { x: i, y: s } = e.internals.positionAbsolute, a = kr(t), u = fi(t, n), l = vo(t.extent) ? $r(u, t.extent, a) : u;
  let d = $r({ x: i + l.x, y: s + l.y }, r, a);
  t.extent === "parent" && (d = Uf(d, a, e));
  const f = lh(t, o), h = e.internals.z ?? 0;
  return {
    x: d.x,
    y: d.y,
    z: h >= f ? h + 1 : f
  };
}
function Ww(t, e, n, r = [0, 0]) {
  const o = [], i = /* @__PURE__ */ new Map();
  for (const s of t) {
    const a = e.get(s.parentId);
    if (!a)
      continue;
    const u = i.get(s.parentId)?.expandedRect ?? go(a), l = Jf(u, s.rect);
    i.set(s.parentId, { expandedRect: l, parent: a });
  }
  return i.size > 0 && i.forEach(({ expandedRect: s, parent: a }, u) => {
    const l = a.internals.positionAbsolute, d = kr(a), f = a.origin ?? r, h = s.x < l.x ? Math.round(Math.abs(l.x - s.x)) : 0, p = s.y < l.y ? Math.round(Math.abs(l.y - s.y)) : 0, m = Math.max(d.width, Math.round(s.width)), y = Math.max(d.height, Math.round(s.height)), w = (m - d.width) * f[0], b = (y - d.height) * f[1];
    (h > 0 || p > 0 || w || b) && (o.push({
      id: u,
      type: "position",
      position: {
        x: a.position.x - h + w,
        y: a.position.y - p + b
      }
    }), n.get(u)?.forEach((S) => {
      t.some((E) => E.id === S.id) || o.push({
        id: S.id,
        type: "position",
        position: {
          x: S.position.x + h,
          y: S.position.y + p
        }
      });
    })), (d.width < s.width || d.height < s.height || h || p) && o.push({
      id: u,
      type: "dimensions",
      setAttributes: !0,
      dimensions: {
        width: m + (h ? f[0] * h - w : 0),
        height: y + (p ? f[1] * p - b : 0)
      }
    });
  }), o;
}
function Zw(t, e, n, r, o, i) {
  const s = r?.querySelector(".xyflow__viewport");
  let a = !1;
  if (!s)
    return { changes: [], updatedInternals: a };
  const u = [], l = window.getComputedStyle(s), { m22: d } = new window.DOMMatrixReadOnly(l.transform), f = [];
  for (const h of t.values()) {
    const p = e.get(h.id);
    if (!p)
      continue;
    if (p.hidden) {
      e.set(p.id, {
        ...p,
        internals: {
          ...p.internals,
          handleBounds: void 0
        }
      }), a = !0;
      continue;
    }
    const m = eh(h.nodeElement), y = p.measured.width !== m.width || p.measured.height !== m.height;
    if (!!(m.width && m.height && (y || !p.internals.handleBounds || h.force))) {
      const b = h.nodeElement.getBoundingClientRect(), S = vo(p.extent) ? p.extent : i;
      let { positionAbsolute: E } = p.internals;
      p.parentId && p.extent === "parent" ? E = Uf(E, m, e.get(p.parentId)) : S && (E = $r(E, S, m));
      const x = {
        ...p,
        measured: m,
        internals: {
          ...p.internals,
          positionAbsolute: E,
          handleBounds: {
            source: hc("source", h.nodeElement, b, d, p.id),
            target: hc("target", h.nodeElement, b, d, p.id)
          }
        }
      };
      e.set(p.id, x), p.parentId && Ul(x, e, n, { nodeOrigin: o }), a = !0, y && (u.push({
        id: p.id,
        type: "dimensions",
        dimensions: m
      }), p.expandParent && p.parentId && f.push({
        id: p.id,
        parentId: p.parentId,
        rect: go(x, o)
      }));
    }
  }
  if (f.length > 0) {
    const h = Ww(f, e, n, o);
    u.push(...h);
  }
  return { changes: u, updatedInternals: a };
}
async function Yw({ delta: t, panZoom: e, transform: n, translateExtent: r, width: o, height: i }) {
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
function bc(t, e, n, r, o, i) {
  let s = o;
  const a = r.get(s) || /* @__PURE__ */ new Map();
  r.set(s, a.set(n, e)), s = `${o}-${t}`;
  const u = r.get(s) || /* @__PURE__ */ new Map();
  if (r.set(s, u.set(n, e)), i) {
    s = `${o}-${t}-${i}`;
    const l = r.get(s) || /* @__PURE__ */ new Map();
    r.set(s, l.set(n, e));
  }
}
function qw(t, e, n) {
  t.clear(), e.clear();
  for (const r of n) {
    const { source: o, target: i, sourceHandle: s = null, targetHandle: a = null } = r, u = { edgeId: r.id, source: o, target: i, sourceHandle: s, targetHandle: a }, l = `${o}-${s}--${i}-${a}`, d = `${i}-${a}--${o}-${s}`;
    bc("source", u, d, t, o, s), bc("target", u, l, t, i, a), e.set(r.id, r);
  }
}
function Xw(t, e) {
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
function uh(t, e) {
  if (!t.parentId)
    return !1;
  const n = e.get(t.parentId);
  return n ? n.selected ? !0 : uh(n, e) : !1;
}
function xc(t, e, n) {
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
function jw(t, e, n, r) {
  const o = /* @__PURE__ */ new Map();
  for (const [i, s] of t)
    if ((s.selected || s.id === r) && (!s.parentId || !uh(s, t)) && (s.draggable || e && typeof s.draggable > "u")) {
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
function pa({ nodeId: t, dragItems: e, nodeLookup: n, dragging: r = !0 }) {
  const o = [];
  for (const [s, a] of e) {
    const u = n.get(s)?.internals.userNode;
    u && o.push({
      ...u,
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
function Uw({ dragItems: t, snapGrid: e, x: n, y: r }) {
  const o = t.values().next().value;
  if (!o)
    return null;
  const i = {
    x: n - o.distance.x,
    y: r - o.distance.y
  }, s = gi(i, e);
  return {
    x: s.x - i.x,
    y: s.y - i.y
  };
}
function Gw({ onNodeMouseDown: t, getStoreItems: e, onDragStart: n, onDrag: r, onDragStop: o }) {
  let i = { x: null, y: null }, s = 0, a = /* @__PURE__ */ new Map(), u = !1, l = { x: 0, y: 0 }, d = null, f = !1, h = null, p = !1, m = !1, y = null;
  function w({ noDragClassName: S, handleSelector: E, domNode: x, isSelectable: _, nodeId: T, nodeClickDistance: I = 0 }) {
    h = nn(x);
    function B({ x: k, y: D }) {
      const { nodeLookup: P, nodeExtent: A, snapGrid: R, snapToGrid: M, nodeOrigin: Y, onNodeDrag: U, onSelectionDrag: V, onError: j, updateNodePositions: q } = e();
      i = { x: k, y: D };
      let F = !1;
      const Q = a.size > 1, X = Q && A ? Za(hi(a)) : null, re = Q && M ? Uw({
        dragItems: a,
        snapGrid: R,
        x: k,
        y: D
      }) : null;
      for (const [ee, L] of a) {
        if (!P.has(ee))
          continue;
        let te = { x: k - L.distance.x, y: D - L.distance.y };
        M && (te = re ? {
          x: Math.round(te.x + re.x),
          y: Math.round(te.y + re.y)
        } : gi(te, R));
        let ve = null;
        if (Q && A && !L.extent && X) {
          const { positionAbsolute: oe } = L.internals, fe = oe.x - X.x + A[0][0], we = oe.x + L.measured.width - X.x2 + A[1][0], xe = oe.y - X.y + A[0][1], pe = oe.y + L.measured.height - X.y2 + A[1][1];
          ve = [
            [fe, xe],
            [we, pe]
          ];
        }
        const { position: ae, positionAbsolute: le } = jf({
          nodeId: ee,
          nextPosition: te,
          nodeLookup: P,
          nodeExtent: ve || A,
          nodeOrigin: Y,
          onError: j
        });
        F = F || L.position.x !== ae.x || L.position.y !== ae.y, L.position = ae, L.internals.positionAbsolute = le;
      }
      if (m = m || F, !!F && (q(a, !0), y && (r || U || !T && V))) {
        const [ee, L] = pa({
          nodeId: T,
          dragItems: a,
          nodeLookup: P
        });
        r?.(y, a, ee, L), U?.(y, ee, L), T || V?.(y, L);
      }
    }
    async function $() {
      if (!d)
        return;
      const { transform: k, panBy: D, autoPanSpeed: P, autoPanOnNodeDrag: A } = e();
      if (!A) {
        u = !1, cancelAnimationFrame(s);
        return;
      }
      const [R, M] = Gf(l, d, P);
      (R !== 0 || M !== 0) && (i.x = (i.x ?? 0) - R / k[2], i.y = (i.y ?? 0) - M / k[2], await D({ x: R, y: M }) && B(i)), s = requestAnimationFrame($);
    }
    function H(k) {
      const { nodeLookup: D, multiSelectionActive: P, nodesDraggable: A, transform: R, snapGrid: M, snapToGrid: Y, selectNodesOnDrag: U, onNodeDragStart: V, onSelectionDragStart: j, unselectNodesAndEdges: q } = e();
      f = !0, (!U || !_) && !P && T && (D.get(T)?.selected || q()), _ && U && T && t?.(T);
      const F = va(k.sourceEvent, { transform: R, snapGrid: M, snapToGrid: Y, containerBounds: d });
      if (i = F, a = jw(D, A, F, T), a.size > 0 && (n || V || !T && j)) {
        const [Q, X] = pa({
          nodeId: T,
          dragItems: a,
          nodeLookup: D
        });
        n?.(k.sourceEvent, a, Q, X), V?.(k.sourceEvent, Q, X), T || j?.(k.sourceEvent, X);
      }
    }
    const N = m0().clickDistance(I).on("start", (k) => {
      const { domNode: D, nodeDragThreshold: P, transform: A, snapGrid: R, snapToGrid: M } = e();
      d = D?.getBoundingClientRect() || null, p = !1, m = !1, y = k.sourceEvent, P === 0 && H(k), i = va(k.sourceEvent, { transform: A, snapGrid: R, snapToGrid: M, containerBounds: d }), l = hn(k.sourceEvent, d);
    }).on("drag", (k) => {
      const { autoPanOnNodeDrag: D, transform: P, snapGrid: A, snapToGrid: R, nodeDragThreshold: M, nodeLookup: Y } = e(), U = va(k.sourceEvent, { transform: P, snapGrid: A, snapToGrid: R, containerBounds: d });
      if (y = k.sourceEvent, (k.sourceEvent.type === "touchmove" && k.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      T && !Y.has(T)) && (p = !0), !p) {
        if (!u && D && f && (u = !0, $()), !f) {
          const V = hn(k.sourceEvent, d), j = V.x - l.x, q = V.y - l.y;
          Math.sqrt(j * j + q * q) > M && H(k);
        }
        (i.x !== U.xSnapped || i.y !== U.ySnapped) && a && f && (l = hn(k.sourceEvent, d), B(U));
      }
    }).on("end", (k) => {
      if (!(!f || p) && (u = !1, f = !1, cancelAnimationFrame(s), a.size > 0)) {
        const { nodeLookup: D, updateNodePositions: P, onNodeDragStop: A, onSelectionDragStop: R } = e();
        if (m && (P(a, !1), m = !1), o || A || !T && R) {
          const [M, Y] = pa({
            nodeId: T,
            dragItems: a,
            nodeLookup: D,
            dragging: !1
          });
          o?.(k.sourceEvent, a, M, Y), A?.(k.sourceEvent, M, Y), T || R?.(k.sourceEvent, Y);
        }
      }
    }).filter((k) => {
      const D = k.target;
      return !k.button && (!S || !xc(D, `.${S}`, x)) && (!E || xc(D, E, x));
    });
    h.call(N);
  }
  function b() {
    h?.on(".drag", null);
  }
  return {
    update: w,
    destroy: b
  };
}
function Jw(t, e, n) {
  const r = [], o = {
    x: t.x - n,
    y: t.y - n,
    width: n * 2,
    height: n * 2
  };
  for (const i of e.values())
    Go(o, go(i)) > 0 && r.push(i);
  return r;
}
const Qw = 250;
function e2(t, e, n, r) {
  let o = [], i = 1 / 0;
  const s = Jw(t, n, e + Qw);
  for (const a of s) {
    const u = [...a.internals.handleBounds?.source ?? [], ...a.internals.handleBounds?.target ?? []];
    for (const l of u) {
      if (r.nodeId === l.nodeId && r.type === l.type && r.id === l.id)
        continue;
      const { x: d, y: f } = Jo(a, l, l.position, !0), h = Math.sqrt(Math.pow(d - t.x, 2) + Math.pow(f - t.y, 2));
      h > e || (h < i ? (o = [{ ...l, x: d, y: f }], i = h) : h === i && o.push({ ...l, x: d, y: f }));
    }
  }
  if (!o.length)
    return null;
  if (o.length > 1) {
    const a = r.type === "source" ? "target" : "source";
    return o.find((u) => u.type === a) ?? o[0];
  }
  return o[0];
}
function ch(t, e, n, r, o, i = !1) {
  const s = r.get(t);
  if (!s)
    return null;
  const a = o === "strict" ? s.internals.handleBounds?.[e] : [...s.internals.handleBounds?.source ?? [], ...s.internals.handleBounds?.target ?? []], u = (n ? a?.find((l) => l.id === n) : a?.[0]) ?? null;
  return u && i ? { ...u, ...Jo(s, u, u.position, !0) } : u;
}
function dh(t, e) {
  return t || (e?.classList.contains("target") ? "target" : e?.classList.contains("source") ? "source" : null);
}
function t2(t, e) {
  let n = null;
  return e ? n = !0 : t && !e && (n = !1), n;
}
const fh = () => !0;
function n2(t, { connectionMode: e, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: s, domNode: a, nodeLookup: u, lib: l, autoPanOnConnect: d, flowId: f, panBy: h, cancelConnection: p, onConnectStart: m, onConnect: y, onConnectEnd: w, isValidConnection: b = fh, onReconnectEnd: S, updateConnection: E, getTransform: x, getFromHandle: _, autoPanSpeed: T, dragThreshold: I = 1, handleDomNode: B }) {
  const $ = th(t.target);
  let H = 0, N;
  const { x: k, y: D } = hn(t), P = dh(i, B), A = a?.getBoundingClientRect();
  let R = !1;
  if (!A || !P)
    return;
  const M = ch(o, P, r, u, e);
  if (!M)
    return;
  let Y = hn(t, A), U = !1, V = null, j = !1, q = null;
  function F() {
    if (!d || !A)
      return;
    const [ae, le] = Gf(Y, A, T);
    h({ x: ae, y: le }), H = requestAnimationFrame(F);
  }
  const Q = {
    ...M,
    nodeId: o,
    type: P,
    position: M.position
  }, X = u.get(o);
  let ee = {
    inProgress: !0,
    isValid: null,
    from: Jo(X, Q, ke.Left, !0),
    fromHandle: Q,
    fromPosition: Q.position,
    fromNode: X,
    to: Y,
    toHandle: null,
    toPosition: uc[Q.position],
    toNode: null,
    pointer: Y
  };
  function L() {
    R = !0, E(ee), m?.(t, { nodeId: o, handleId: r, handleType: P });
  }
  I === 0 && L();
  function te(ae) {
    if (!R) {
      const { x: we, y: xe } = hn(ae), pe = we - k, me = xe - D;
      if (!(pe * pe + me * me > I * I))
        return;
      L();
    }
    if (!_() || !Q) {
      ve(ae);
      return;
    }
    const le = x();
    Y = hn(ae, A), N = e2(vi(Y, le, !1, [1, 1]), n, u, Q), U || (F(), U = !0);
    const oe = hh(ae, {
      handle: N,
      connectionMode: e,
      fromNodeId: o,
      fromHandleId: r,
      fromType: s ? "target" : "source",
      isValidConnection: b,
      doc: $,
      lib: l,
      flowId: f,
      nodeLookup: u
    });
    q = oe.handleDomNode, V = oe.connection, j = t2(!!N, oe.isValid);
    const fe = {
      // from stays the same
      ...ee,
      isValid: j,
      to: oe.toHandle && j ? hs({ x: oe.toHandle.x, y: oe.toHandle.y }, le) : Y,
      toHandle: oe.toHandle,
      toPosition: j && oe.toHandle ? oe.toHandle.position : uc[Q.position],
      toNode: oe.toHandle ? u.get(oe.toHandle.nodeId) : null,
      pointer: Y
    };
    E(fe), ee = fe;
  }
  function ve(ae) {
    if (!("touches" in ae && ae.touches.length > 0)) {
      if (R) {
        (N || q) && V && j && y?.(V);
        const { inProgress: le, ...oe } = ee, fe = {
          ...oe,
          toPosition: ee.toHandle ? ee.toPosition : null
        };
        w?.(ae, fe), i && S?.(ae, fe);
      }
      p(), cancelAnimationFrame(H), U = !1, j = !1, V = null, q = null, $.removeEventListener("mousemove", te), $.removeEventListener("mouseup", ve), $.removeEventListener("touchmove", te), $.removeEventListener("touchend", ve);
    }
  }
  $.addEventListener("mousemove", te), $.addEventListener("mouseup", ve), $.addEventListener("touchmove", te), $.addEventListener("touchend", ve);
}
function hh(t, { handle: e, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: s, lib: a, flowId: u, isValidConnection: l = fh, nodeLookup: d }) {
  const f = i === "target", h = e ? s.querySelector(`.${a}-flow__handle[data-id="${u}-${e?.nodeId}-${e?.id}-${e?.type}"]`) : null, { x: p, y: m } = hn(t), y = s.elementFromPoint(p, m), w = y?.classList.contains(`${a}-flow__handle`) ? y : h, b = {
    handleDomNode: w,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (w) {
    const S = dh(void 0, w), E = w.getAttribute("data-nodeid"), x = w.getAttribute("data-handleid"), _ = w.classList.contains("connectable"), T = w.classList.contains("connectableend");
    if (!E || !S)
      return b;
    const I = {
      source: f ? E : r,
      sourceHandle: f ? x : o,
      target: f ? r : E,
      targetHandle: f ? o : x
    };
    b.connection = I;
    const $ = _ && T && (n === fo.Strict ? f && S === "source" || !f && S === "target" : E !== r || x !== o);
    b.isValid = $ && l(I), b.toHandle = ch(E, S, x, d, n, !0);
  }
  return b;
}
const _c = {
  onPointerDown: n2,
  isValid: hh
};
function r2({ domNode: t, panZoom: e, getTransform: n, getViewScale: r }) {
  const o = nn(t);
  function i({ translateExtent: a, width: u, height: l, zoomStep: d = 1, pannable: f = !0, zoomable: h = !0, inversePan: p = !1 }) {
    const m = (E) => {
      if (E.sourceEvent.type !== "wheel" || !e)
        return;
      const x = n(), _ = E.sourceEvent.ctrlKey && Ar() ? 10 : 1, T = -E.sourceEvent.deltaY * (E.sourceEvent.deltaMode === 1 ? 0.05 : E.sourceEvent.deltaMode ? 1 : 2e-3) * d, I = x[2] * Math.pow(2, T * _);
      e.scaleTo(I);
    };
    let y = [0, 0];
    const w = (E) => {
      (E.sourceEvent.type === "mousedown" || E.sourceEvent.type === "touchstart") && (y = [
        E.sourceEvent.clientX ?? E.sourceEvent.touches[0].clientX,
        E.sourceEvent.clientY ?? E.sourceEvent.touches[0].clientY
      ]);
    }, b = (E) => {
      const x = n();
      if (E.sourceEvent.type !== "mousemove" && E.sourceEvent.type !== "touchmove" || !e)
        return;
      const _ = [
        E.sourceEvent.clientX ?? E.sourceEvent.touches[0].clientX,
        E.sourceEvent.clientY ?? E.sourceEvent.touches[0].clientY
      ], T = [_[0] - y[0], _[1] - y[1]];
      y = _;
      const I = r() * Math.max(x[2], Math.log(x[2])) * (p ? -1 : 1), B = {
        x: x[0] - T[0] * I,
        y: x[1] - T[1] * I
      }, $ = [
        [0, 0],
        [u, l]
      ];
      e.setViewportConstrained({
        x: B.x,
        y: B.y,
        zoom: x[2]
      }, $, a);
    }, S = Yf().on("start", w).on("zoom", f ? b : null).on("zoom.wheel", h ? m : null);
    o.call(S, {});
  }
  function s() {
    o.on("zoom", null);
  }
  return {
    update: i,
    destroy: s,
    pointer: cn
  };
}
const Gs = (t) => ({
  x: t.x,
  y: t.y,
  zoom: t.k
}), ma = ({ x: t, y: e, zoom: n }) => Xs.translate(t, e).scale(n), eo = (t, e) => t.target.closest(`.${e}`), gh = (t, e) => e === 2 && Array.isArray(t) && t.includes(2), o2 = (t) => ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2, ya = (t, e = 0, n = o2, r = () => {
}) => {
  const o = typeof e == "number" && e > 0;
  return o || r(), o ? t.transition().duration(e).ease(n).on("end", r) : t;
}, vh = (t) => {
  const e = t.ctrlKey && Ar() ? 10 : 1;
  return -t.deltaY * (t.deltaMode === 1 ? 0.05 : t.deltaMode ? 1 : 2e-3) * e;
};
function i2({ zoomPanValues: t, noWheelClassName: e, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: s, onPanZoomStart: a, onPanZoom: u, onPanZoomEnd: l }) {
  return (d) => {
    if (eo(d, e))
      return d.ctrlKey && d.preventDefault(), !1;
    d.preventDefault(), d.stopImmediatePropagation();
    const f = n.property("__zoom").k || 1;
    if (d.ctrlKey && s) {
      const w = cn(d), b = vh(d), S = f * Math.pow(2, b);
      r.scaleTo(n, S, w, d);
      return;
    }
    const h = d.deltaMode === 1 ? 20 : 1;
    let p = o === Lr.Vertical ? 0 : d.deltaX * h, m = o === Lr.Horizontal ? 0 : d.deltaY * h;
    !Ar() && d.shiftKey && o !== Lr.Vertical && (p = d.deltaY * h, m = 0), r.translateBy(
      n,
      -(p / f) * i,
      -(m / f) * i,
      // @ts-ignore
      { internal: !0 }
    );
    const y = Gs(n.property("__zoom"));
    clearTimeout(t.panScrollTimeout), t.isPanScrolling ? (u?.(d, y), t.panScrollTimeout = setTimeout(() => {
      l?.(d, y), t.isPanScrolling = !1;
    }, 150)) : (t.isPanScrolling = !0, a?.(d, y));
  };
}
function s2({ noWheelClassName: t, preventScrolling: e, d3ZoomHandler: n }) {
  return function(r, o) {
    const i = r.type === "wheel", s = !e && i && !r.ctrlKey, a = eo(r, t);
    if (r.ctrlKey && i && a && r.preventDefault(), s || a)
      return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function a2({ zoomPanValues: t, onDraggingChange: e, onPanZoomStart: n }) {
  return (r) => {
    if (r.sourceEvent?.internal)
      return;
    const o = Gs(r.transform);
    t.mouseButton = r.sourceEvent?.button || 0, t.isZoomingOrPanning = !0, t.prevViewport = o, r.sourceEvent?.type === "mousedown" && e(!0), n && n?.(r.sourceEvent, o);
  };
}
function l2({ zoomPanValues: t, panOnDrag: e, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (i) => {
    t.usedRightMouseButton = !!(n && gh(e, t.mouseButton ?? 0)), i.sourceEvent?.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !i.sourceEvent?.internal && o?.(i.sourceEvent, Gs(i.transform));
  };
}
function u2({ zoomPanValues: t, panOnDrag: e, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (s) => {
    if (!s.sourceEvent?.internal && (t.isZoomingOrPanning = !1, i && gh(e, t.mouseButton ?? 0) && !t.usedRightMouseButton && s.sourceEvent && i(s.sourceEvent), t.usedRightMouseButton = !1, r(!1), o)) {
      const a = Gs(s.transform);
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
function c2({ zoomActivationKeyPressed: t, zoomOnScroll: e, zoomOnPinch: n, panOnDrag: r, panOnScroll: o, zoomOnDoubleClick: i, userSelectionActive: s, noWheelClassName: a, noPanClassName: u, lib: l, connectionInProgress: d }) {
  return (f) => {
    const h = t || e, p = n && f.ctrlKey, m = f.type === "wheel";
    if (f.button === 1 && f.type === "mousedown" && (eo(f, `${l}-flow__node`) || eo(f, `${l}-flow__edge`)))
      return !0;
    if (!r && !h && !o && !i && !n || s || d && !m || eo(f, a) && m || eo(f, u) && (!m || o && m && !t) || !n && f.ctrlKey && m)
      return !1;
    if (!n && f.type === "touchstart" && f.touches?.length > 1)
      return f.preventDefault(), !1;
    if (!h && !o && !p && m || !r && (f.type === "mousedown" || f.type === "touchstart") || Array.isArray(r) && !r.includes(f.button) && f.type === "mousedown")
      return !1;
    const y = Array.isArray(r) && r.includes(f.button) || !f.button || f.button <= 1;
    return (!f.ctrlKey || m) && y;
  };
}
function d2({ domNode: t, minZoom: e, maxZoom: n, translateExtent: r, viewport: o, onPanZoom: i, onPanZoomStart: s, onPanZoomEnd: a, onDraggingChange: u }) {
  const l = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: {},
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, d = t.getBoundingClientRect(), f = Yf().scaleExtent([e, n]).translateExtent(r), h = nn(t).call(f);
  S({
    x: o.x,
    y: o.y,
    zoom: ho(o.zoom, e, n)
  }, [
    [0, 0],
    [d.width, d.height]
  ], r);
  const p = h.on("wheel.zoom"), m = h.on("dblclick.zoom");
  f.wheelDelta(vh);
  function y(N, k) {
    return h ? new Promise((D) => {
      f?.interpolate(k?.interpolate === "linear" ? Fo : $i).transform(ya(h, k?.duration, k?.ease, () => D(!0)), N);
    }) : Promise.resolve(!1);
  }
  function w({ noWheelClassName: N, noPanClassName: k, onPaneContextMenu: D, userSelectionActive: P, panOnScroll: A, panOnDrag: R, panOnScrollMode: M, panOnScrollSpeed: Y, preventScrolling: U, zoomOnPinch: V, zoomOnScroll: j, zoomOnDoubleClick: q, zoomActivationKeyPressed: F, lib: Q, onTransformChange: X, connectionInProgress: re, paneClickDistance: ee, selectionOnDrag: L }) {
    P && !l.isZoomingOrPanning && b();
    const te = A && !F && !P;
    f.clickDistance(L ? 1 / 0 : !Yn(ee) || ee < 0 ? 0 : ee);
    const ve = te ? i2({
      zoomPanValues: l,
      noWheelClassName: N,
      d3Selection: h,
      d3Zoom: f,
      panOnScrollMode: M,
      panOnScrollSpeed: Y,
      zoomOnPinch: V,
      onPanZoomStart: s,
      onPanZoom: i,
      onPanZoomEnd: a
    }) : s2({
      noWheelClassName: N,
      preventScrolling: U,
      d3ZoomHandler: p
    });
    if (h.on("wheel.zoom", ve, { passive: !1 }), !P) {
      const le = a2({
        zoomPanValues: l,
        onDraggingChange: u,
        onPanZoomStart: s
      });
      f.on("start", le);
      const oe = l2({
        zoomPanValues: l,
        panOnDrag: R,
        onPaneContextMenu: !!D,
        onPanZoom: i,
        onTransformChange: X
      });
      f.on("zoom", oe);
      const fe = u2({
        zoomPanValues: l,
        panOnDrag: R,
        panOnScroll: A,
        onPaneContextMenu: D,
        onPanZoomEnd: a,
        onDraggingChange: u
      });
      f.on("end", fe);
    }
    const ae = c2({
      zoomActivationKeyPressed: F,
      panOnDrag: R,
      zoomOnScroll: j,
      panOnScroll: A,
      zoomOnDoubleClick: q,
      zoomOnPinch: V,
      userSelectionActive: P,
      noPanClassName: k,
      noWheelClassName: N,
      lib: Q,
      connectionInProgress: re
    });
    f.filter(ae), q ? h.on("dblclick.zoom", m) : h.on("dblclick.zoom", null);
  }
  function b() {
    f.on("zoom", null);
  }
  async function S(N, k, D) {
    const P = ma(N), A = f?.constrain()(P, k, D);
    return A && await y(A), new Promise((R) => R(A));
  }
  async function E(N, k) {
    const D = ma(N);
    return await y(D, k), new Promise((P) => P(D));
  }
  function x(N) {
    if (h) {
      const k = ma(N), D = h.property("__zoom");
      (D.k !== N.zoom || D.x !== N.x || D.y !== N.y) && f?.transform(h, k, null, { sync: !0 });
    }
  }
  function _() {
    const N = h ? Zf(h.node()) : { x: 0, y: 0, k: 1 };
    return { x: N.x, y: N.y, zoom: N.k };
  }
  function T(N, k) {
    return h ? new Promise((D) => {
      f?.interpolate(k?.interpolate === "linear" ? Fo : $i).scaleTo(ya(h, k?.duration, k?.ease, () => D(!0)), N);
    }) : Promise.resolve(!1);
  }
  function I(N, k) {
    return h ? new Promise((D) => {
      f?.interpolate(k?.interpolate === "linear" ? Fo : $i).scaleBy(ya(h, k?.duration, k?.ease, () => D(!0)), N);
    }) : Promise.resolve(!1);
  }
  function B(N) {
    f?.scaleExtent(N);
  }
  function $(N) {
    f?.translateExtent(N);
  }
  function H(N) {
    const k = !Yn(N) || N < 0 ? 0 : N;
    f?.clickDistance(k);
  }
  return {
    update: w,
    destroy: b,
    setViewport: E,
    setViewportConstrained: S,
    getViewport: _,
    scaleTo: T,
    scaleBy: I,
    setScaleExtent: B,
    setTranslateExtent: $,
    syncViewport: x,
    setClickDistance: H
  };
}
var Cc;
(function(t) {
  t.Line = "line", t.Handle = "handle";
})(Cc || (Cc = {}));
var f2 = /* @__PURE__ */ ne("<div><!></div>");
function yr(t, e) {
  ue(e, !0);
  let n = v(e, "id", 7, null), r = v(e, "type", 7, "source"), o = v(e, "position", 23, () => ke.Top), i = v(e, "style", 7), s = v(e, "class", 7), a = v(e, "isConnectable", 7), u = v(e, "isConnectableStart", 7, !0), l = v(e, "isConnectableEnd", 7, !0), d = v(e, "isValidConnection", 7), f = v(e, "onconnect", 7), h = v(e, "ondisconnect", 7), p = v(e, "children", 7), m = /* @__PURE__ */ Le(e, [
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
  let b = /* @__PURE__ */ C(() => r() === "target"), S = /* @__PURE__ */ C(() => a() !== void 0 ? a() : w.value), E = Cn(), x = /* @__PURE__ */ C(() => E.ariaLabelConfig), _ = null;
  Ft(() => {
    if (f() || h()) {
      E.edges;
      let V = E.connectionLookup.get(`${y}-${r()}${n() ? `-${n()}` : ""}`);
      if (_ && !dw(V, _)) {
        const j = V ?? /* @__PURE__ */ new Map();
        cc(_, j, h()), cc(j, _, f());
      }
      _ = new Map(V);
    }
  });
  let T = /* @__PURE__ */ C(() => {
    if (!E.connection.inProgress)
      return [!1, !1, !1, !1, null];
    const { fromHandle: V, toHandle: j, isValid: q } = E.connection, F = V && V.nodeId === y && V.type === r() && V.id === n(), Q = j && j.nodeId === y && j.type === r() && j.id === n(), X = E.connectionMode === fo.Strict ? V?.type !== r() : y !== V?.nodeId || n() !== V?.id;
    return [
      !0,
      F,
      Q,
      X,
      Q && q
    ];
  }), I = /* @__PURE__ */ C(() => yo(c(T), 5)), B = /* @__PURE__ */ C(() => c(I)[0]), $ = /* @__PURE__ */ C(() => c(I)[1]), H = /* @__PURE__ */ C(() => c(I)[2]), N = /* @__PURE__ */ C(() => c(I)[3]), k = /* @__PURE__ */ C(() => c(I)[4]);
  function D(V) {
    const j = E.onbeforeconnect ? E.onbeforeconnect(V) : V;
    j && (E.addEdge(j), E.onconnect?.(V));
  }
  function P(V) {
    const j = rh(V);
    V.currentTarget && (j && V.button === 0 || !j) && _c.onPointerDown(V, {
      handleId: n(),
      nodeId: y,
      isTarget: c(b),
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
      onConnect: D,
      onConnectStart: (q, F) => {
        E.onconnectstart?.(q, {
          nodeId: F.nodeId,
          handleId: F.handleId,
          handleType: F.handleType
        });
      },
      onConnectEnd: (q, F) => {
        E.onconnectend?.(q, F);
      },
      getTransform: () => [E.viewport.x, E.viewport.y, E.viewport.zoom],
      getFromHandle: () => E.connection.fromHandle,
      dragThreshold: E.connectionDragThreshold,
      handleDomNode: V.currentTarget
    });
  }
  function A(V) {
    if (!y || !E.clickConnectStartHandle && !u())
      return;
    if (!E.clickConnectStartHandle) {
      E.onclickconnectstart?.(V, { nodeId: y, handleId: n(), handleType: r() }), E.clickConnectStartHandle = { nodeId: y, type: r(), id: n() };
      return;
    }
    const j = th(V.target), q = d() ?? E.isValidConnection, { connectionMode: F, clickConnectStartHandle: Q, flowId: X, nodeLookup: re } = E, { connection: ee, isValid: L } = _c.isValid(V, {
      handle: { nodeId: y, id: n(), type: r() },
      connectionMode: F,
      fromNodeId: Q.nodeId,
      fromHandleId: Q.id ?? null,
      fromType: Q.type,
      isValidConnection: q,
      flowId: X,
      doc: j,
      lib: "svelte",
      nodeLookup: re
    });
    L && ee && D(ee);
    const te = structuredClone(kl(E.connection));
    delete te.inProgress, te.toPosition = te.toHandle ? te.toHandle.position : null, E.onclickconnectend?.(V, te), E.clickConnectStartHandle = null;
  }
  var R = {
    get id() {
      return n();
    },
    set id(V = null) {
      n(V), g();
    },
    get type() {
      return r();
    },
    set type(V = "source") {
      r(V), g();
    },
    get position() {
      return o();
    },
    set position(V = ke.Top) {
      o(V), g();
    },
    get style() {
      return i();
    },
    set style(V) {
      i(V), g();
    },
    get class() {
      return s();
    },
    set class(V) {
      s(V), g();
    },
    get isConnectable() {
      return a();
    },
    set isConnectable(V) {
      a(V), g();
    },
    get isConnectableStart() {
      return u();
    },
    set isConnectableStart(V = !0) {
      u(V), g();
    },
    get isConnectableEnd() {
      return l();
    },
    set isConnectableEnd(V = !0) {
      l(V), g();
    },
    get isValidConnection() {
      return d();
    },
    set isValidConnection(V) {
      d(V), g();
    },
    get onconnect() {
      return f();
    },
    set onconnect(V) {
      f(V), g();
    },
    get ondisconnect() {
      return h();
    },
    set ondisconnect(V) {
      h(V), g();
    },
    get children() {
      return p();
    },
    set children(V) {
      p(V), g();
    }
  }, M = f2(), Y = () => {
  };
  Ge(M, () => ({
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
    onmousedown: P,
    ontouchstart: P,
    onclick: E.clickConnect ? A : void 0,
    onkeypress: Y,
    style: i(),
    role: "button",
    "aria-label": c(x)["handle.ariaLabel"],
    tabindex: "-1",
    ...m,
    [fr]: {
      valid: c(k),
      connectingto: c(H),
      connectingfrom: c($),
      source: !c(b),
      target: c(b),
      connectablestart: u(),
      connectableend: l(),
      connectable: c(S),
      connectionindicator: c(S) && (!c(B) || c(N)) && (c(B) || E.clickConnectStartHandle ? l() : u())
    }
  }));
  var U = Z(M);
  return Oe(U, () => p() ?? ze), W(M), O(t, M), ce(R);
}
se(
  yr,
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
function Gl(t, e) {
  ue(e, !0);
  let n = v(e, "data", 7), r = v(e, "targetPosition", 23, () => ke.Top), o = v(e, "sourcePosition", 23, () => ke.Bottom);
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
    set targetPosition(d = ke.Top) {
      r(d), g();
    },
    get sourcePosition() {
      return o();
    },
    set sourcePosition(d = ke.Bottom) {
      o(d), g();
    }
  }, s = h2(), a = J(s);
  yr(a, {
    type: "target",
    get position() {
      return r();
    }
  });
  var u = z(a), l = z(u);
  return yr(l, {
    type: "source",
    get position() {
      return o();
    }
  }), Te(() => tt(u, ` ${n()?.label ?? ""} `)), O(t, s), ce(i);
}
se(Gl, { data: {}, targetPosition: {}, sourcePosition: {} }, [], [], !0);
var g2 = /* @__PURE__ */ ne(" <!>", 1);
function ph(t, e) {
  ue(e, !0);
  let n = v(e, "data", 23, () => ({ label: "Node" })), r = v(e, "sourcePosition", 23, () => ke.Bottom);
  var o = {
    get data() {
      return n();
    },
    set data(u = { label: "Node" }) {
      n(u), g();
    },
    get sourcePosition() {
      return r();
    },
    set sourcePosition(u = ke.Bottom) {
      r(u), g();
    }
  };
  Se();
  var i = g2(), s = J(i), a = z(s);
  return yr(a, {
    type: "source",
    get position() {
      return r();
    }
  }), Te(() => tt(s, `${n()?.label ?? ""} `)), O(t, i), ce(o);
}
se(ph, { data: {}, sourcePosition: {} }, [], [], !0);
var v2 = /* @__PURE__ */ ne(" <!>", 1);
function mh(t, e) {
  ue(e, !0);
  let n = v(e, "data", 23, () => ({ label: "Node" })), r = v(e, "targetPosition", 23, () => ke.Top);
  var o = {
    get data() {
      return n();
    },
    set data(u = { label: "Node" }) {
      n(u), g();
    },
    get targetPosition() {
      return r();
    },
    set targetPosition(u = ke.Top) {
      r(u), g();
    }
  };
  Se();
  var i = v2(), s = J(i), a = z(s);
  return yr(a, {
    type: "target",
    get position() {
      return r();
    }
  }), Te(() => tt(s, `${n()?.label ?? ""} `)), O(t, i), ce(o);
}
se(mh, { data: {}, targetPosition: {} }, [], [], !0);
function yh(t, e) {
}
se(yh, {}, [], [], !0);
function wa(t, e, n) {
  if (!n || !e)
    return;
  const r = n === "root" ? e : e.querySelector(`.svelte-flow__${n}`);
  r && r.appendChild(t);
}
function wh(t, e) {
  const n = /* @__PURE__ */ C(Cn), r = /* @__PURE__ */ C(() => c(n).domNode);
  let o;
  return c(r) ? wa(t, c(r), e) : o = Yr(() => {
    He(() => {
      wa(t, c(r), e), o?.();
    });
  }), {
    async update(i) {
      wa(t, c(r), i);
    },
    destroy() {
      t.parentNode && t.parentNode.removeChild(t), o?.();
    }
  };
}
function bh() {
  let t = /* @__PURE__ */ ye(typeof window > "u");
  if (c(t)) {
    const e = Yr(() => {
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
const Sc = (t) => hw(t), p2 = (t) => Xf(t);
function Hn(t) {
  return t === void 0 ? void 0 : `${t}px`;
}
const gs = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
};
var m2 = /* @__PURE__ */ ne("<div><!></div>");
const y2 = {
  hash: "svelte-1ix3cbb",
  code: ".transparent.svelte-1ix3cbb {background:transparent;}"
};
function xh(t, e) {
  ue(e, !0), Je(t, y2);
  let n = v(e, "x", 7, 0), r = v(e, "y", 7, 0), o = v(e, "width", 7), i = v(e, "height", 7), s = v(e, "selectEdgeOnClick", 7, !1), a = v(e, "transparent", 7, !1), u = v(e, "class", 7), l = v(e, "children", 7), d = /* @__PURE__ */ Le(e, [
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
  const f = Cn(), h = yn("svelteflow__edge_id");
  if (!h)
    throw new Error("EdgeLabel must be used within an edge");
  let p = /* @__PURE__ */ C(() => f.visible.edges.get(h)?.zIndex);
  var m = {
    get x() {
      return n();
    },
    set x(S = 0) {
      n(S), g();
    },
    get y() {
      return r();
    },
    set y(S = 0) {
      r(S), g();
    },
    get width() {
      return o();
    },
    set width(S) {
      o(S), g();
    },
    get height() {
      return i();
    },
    set height(S) {
      i(S), g();
    },
    get selectEdgeOnClick() {
      return s();
    },
    set selectEdgeOnClick(S = !1) {
      s(S), g();
    },
    get transparent() {
      return a();
    },
    set transparent(S = !1) {
      a(S), g();
    },
    get class() {
      return u();
    },
    set class(S) {
      u(S), g();
    },
    get children() {
      return l();
    },
    set children(S) {
      l(S), g();
    }
  }, y = m2(), w = () => {
    s() && f.handleEdgeSelection(h);
  };
  Ge(
    y,
    (S) => ({
      class: [
        "svelte-flow__edge-label",
        { transparent: a() },
        u()
      ],
      tabindex: "-1",
      onclick: w,
      ...d,
      [Nn]: S
    }),
    [
      () => ({
        display: bh().value ? "none" : void 0,
        cursor: s() ? "pointer" : void 0,
        transform: `translate(-50%, -50%) translate(${n() ?? ""}px,${r() ?? ""}px)`,
        "pointer-events": "all",
        width: Hn(o()),
        height: Hn(i()),
        "z-index": c(p)
      })
    ],
    void 0,
    void 0,
    "svelte-1ix3cbb"
  );
  var b = Z(y);
  return Oe(b, () => l() ?? ze), W(y), At(y, (S, E) => wh?.(S, E), () => "edge-labels"), O(t, y), ce(m);
}
se(
  xh,
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
var w2 = /* @__PURE__ */ _e("<path></path>"), b2 = /* @__PURE__ */ _e('<path fill="none"></path><!><!>', 1);
function pi(t, e) {
  ue(e, !0);
  let n = v(e, "id", 7), r = v(e, "path", 7), o = v(e, "label", 7), i = v(e, "labelX", 7), s = v(e, "labelY", 7), a = v(e, "labelStyle", 7), u = v(e, "markerStart", 7), l = v(e, "markerEnd", 7), d = v(e, "style", 7), f = v(e, "interactionWidth", 7, 20), h = v(e, "class", 7), p = /* @__PURE__ */ Le(e, [
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
    set id(_) {
      n(_), g();
    },
    get path() {
      return r();
    },
    set path(_) {
      r(_), g();
    },
    get label() {
      return o();
    },
    set label(_) {
      o(_), g();
    },
    get labelX() {
      return i();
    },
    set labelX(_) {
      i(_), g();
    },
    get labelY() {
      return s();
    },
    set labelY(_) {
      s(_), g();
    },
    get labelStyle() {
      return a();
    },
    set labelStyle(_) {
      a(_), g();
    },
    get markerStart() {
      return u();
    },
    set markerStart(_) {
      u(_), g();
    },
    get markerEnd() {
      return l();
    },
    set markerEnd(_) {
      l(_), g();
    },
    get style() {
      return d();
    },
    set style(_) {
      d(_), g();
    },
    get interactionWidth() {
      return f();
    },
    set interactionWidth(_ = 20) {
      f(_), g();
    },
    get class() {
      return h();
    },
    set class(_) {
      h(_), g();
    }
  }, y = b2(), w = J(y), b = z(w);
  {
    var S = (_) => {
      var T = w2();
      Ge(T, () => ({
        d: r(),
        "stroke-opacity": 0,
        "stroke-width": f(),
        fill: "none",
        class: "svelte-flow__edge-interaction",
        ...p
      })), O(_, T);
    };
    ie(b, (_) => {
      f() > 0 && _(S);
    });
  }
  var E = z(b);
  {
    var x = (_) => {
      xh(_, {
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
        children: (T, I) => {
          Se();
          var B = Me();
          Te(() => tt(B, o())), O(T, B);
        },
        $$slots: { default: !0 }
      });
    };
    ie(E, (_) => {
      o() && _(x);
    });
  }
  return Te(() => {
    Ne(w, "id", n()), Ne(w, "d", r()), Yt(w, 0, ur(["svelte-flow__edge-path", h()])), Ne(w, "marker-start", u()), Ne(w, "marker-end", l()), Pt(w, d());
  }), O(t, y), ce(m);
}
se(
  pi,
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
function Jl(t, e) {
  ue(e, !0);
  let n = v(e, "id", 7), r = v(e, "interactionWidth", 7), o = v(e, "label", 7), i = v(e, "labelStyle", 7), s = v(e, "markerEnd", 7), a = v(e, "markerStart", 7), u = v(e, "pathOptions", 7), l = v(e, "sourcePosition", 7), d = v(e, "sourceX", 7), f = v(e, "sourceY", 7), h = v(e, "style", 7), p = v(e, "targetPosition", 7), m = v(e, "targetX", 7), y = v(e, "targetY", 7), w = /* @__PURE__ */ C(() => oh({
    sourceX: d(),
    sourceY: f(),
    targetX: m(),
    targetY: y(),
    sourcePosition: l(),
    targetPosition: p(),
    curvature: u()?.curvature
  })), b = /* @__PURE__ */ C(() => yo(c(w), 3)), S = /* @__PURE__ */ C(() => c(b)[0]), E = /* @__PURE__ */ C(() => c(b)[1]), x = /* @__PURE__ */ C(() => c(b)[2]);
  var _ = {
    get id() {
      return n();
    },
    set id(T) {
      n(T), g();
    },
    get interactionWidth() {
      return r();
    },
    set interactionWidth(T) {
      r(T), g();
    },
    get label() {
      return o();
    },
    set label(T) {
      o(T), g();
    },
    get labelStyle() {
      return i();
    },
    set labelStyle(T) {
      i(T), g();
    },
    get markerEnd() {
      return s();
    },
    set markerEnd(T) {
      s(T), g();
    },
    get markerStart() {
      return a();
    },
    set markerStart(T) {
      a(T), g();
    },
    get pathOptions() {
      return u();
    },
    set pathOptions(T) {
      u(T), g();
    },
    get sourcePosition() {
      return l();
    },
    set sourcePosition(T) {
      l(T), g();
    },
    get sourceX() {
      return d();
    },
    set sourceX(T) {
      d(T), g();
    },
    get sourceY() {
      return f();
    },
    set sourceY(T) {
      f(T), g();
    },
    get style() {
      return h();
    },
    set style(T) {
      h(T), g();
    },
    get targetPosition() {
      return p();
    },
    set targetPosition(T) {
      p(T), g();
    },
    get targetX() {
      return m();
    },
    set targetX(T) {
      m(T), g();
    },
    get targetY() {
      return y();
    },
    set targetY(T) {
      y(T), g();
    }
  };
  return pi(t, {
    get id() {
      return n();
    },
    get path() {
      return c(S);
    },
    get labelX() {
      return c(E);
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
      return h();
    }
  }), ce(_);
}
se(
  Jl,
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
function _h(t, e) {
  ue(e, !0);
  let n = v(e, "interactionWidth", 7), r = v(e, "label", 7), o = v(e, "labelStyle", 7), i = v(e, "style", 7), s = v(e, "markerEnd", 7), a = v(e, "markerStart", 7), u = v(e, "sourcePosition", 7), l = v(e, "sourceX", 7), d = v(e, "sourceY", 7), f = v(e, "targetPosition", 7), h = v(e, "targetX", 7), p = v(e, "targetY", 7), m = /* @__PURE__ */ C(() => ql({
    sourceX: l(),
    sourceY: d(),
    targetX: h(),
    targetY: p(),
    sourcePosition: u(),
    targetPosition: f()
  })), y = /* @__PURE__ */ C(() => yo(c(m), 3)), w = /* @__PURE__ */ C(() => c(y)[0]), b = /* @__PURE__ */ C(() => c(y)[1]), S = /* @__PURE__ */ C(() => c(y)[2]);
  var E = {
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
      return u();
    },
    set sourcePosition(x) {
      u(x), g();
    },
    get sourceX() {
      return l();
    },
    set sourceX(x) {
      l(x), g();
    },
    get sourceY() {
      return d();
    },
    set sourceY(x) {
      d(x), g();
    },
    get targetPosition() {
      return f();
    },
    set targetPosition(x) {
      f(x), g();
    },
    get targetX() {
      return h();
    },
    set targetX(x) {
      h(x), g();
    },
    get targetY() {
      return p();
    },
    set targetY(x) {
      p(x), g();
    }
  };
  return pi(t, {
    get path() {
      return c(w);
    },
    get labelX() {
      return c(b);
    },
    get labelY() {
      return c(S);
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
  }), ce(E);
}
se(
  _h,
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
function Ch(t, e) {
  ue(e, !0);
  let n = v(e, "sourceX", 7), r = v(e, "sourceY", 7), o = v(e, "targetX", 7), i = v(e, "targetY", 7), s = v(e, "label", 7), a = v(e, "labelStyle", 7), u = v(e, "markerStart", 7), l = v(e, "markerEnd", 7), d = v(e, "interactionWidth", 7), f = v(e, "style", 7), h = /* @__PURE__ */ C(() => sh({
    sourceX: n(),
    sourceY: r(),
    targetX: o(),
    targetY: i()
  })), p = /* @__PURE__ */ C(() => yo(c(h), 3)), m = /* @__PURE__ */ C(() => c(p)[0]), y = /* @__PURE__ */ C(() => c(p)[1]), w = /* @__PURE__ */ C(() => c(p)[2]);
  var b = {
    get sourceX() {
      return n();
    },
    set sourceX(S) {
      n(S), g();
    },
    get sourceY() {
      return r();
    },
    set sourceY(S) {
      r(S), g();
    },
    get targetX() {
      return o();
    },
    set targetX(S) {
      o(S), g();
    },
    get targetY() {
      return i();
    },
    set targetY(S) {
      i(S), g();
    },
    get label() {
      return s();
    },
    set label(S) {
      s(S), g();
    },
    get labelStyle() {
      return a();
    },
    set labelStyle(S) {
      a(S), g();
    },
    get markerStart() {
      return u();
    },
    set markerStart(S) {
      u(S), g();
    },
    get markerEnd() {
      return l();
    },
    set markerEnd(S) {
      l(S), g();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(S) {
      d(S), g();
    },
    get style() {
      return f();
    },
    set style(S) {
      f(S), g();
    }
  };
  return pi(t, {
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
      return u();
    },
    get markerEnd() {
      return l();
    },
    get interactionWidth() {
      return d();
    },
    get style() {
      return f();
    }
  }), ce(b);
}
se(
  Ch,
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
function Sh(t, e) {
  ue(e, !0);
  let n = v(e, "sourceX", 7), r = v(e, "sourceY", 7), o = v(e, "sourcePosition", 7), i = v(e, "targetX", 7), s = v(e, "targetY", 7), a = v(e, "targetPosition", 7), u = v(e, "label", 7), l = v(e, "labelStyle", 7), d = v(e, "markerStart", 7), f = v(e, "markerEnd", 7), h = v(e, "interactionWidth", 7), p = v(e, "style", 7), m = /* @__PURE__ */ C(() => ql({
    sourceX: n(),
    sourceY: r(),
    targetX: i(),
    targetY: s(),
    sourcePosition: o(),
    targetPosition: a(),
    borderRadius: 0
  })), y = /* @__PURE__ */ C(() => yo(c(m), 3)), w = /* @__PURE__ */ C(() => c(y)[0]), b = /* @__PURE__ */ C(() => c(y)[1]), S = /* @__PURE__ */ C(() => c(y)[2]);
  var E = {
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
      return u();
    },
    set label(x) {
      u(x), g();
    },
    get labelStyle() {
      return l();
    },
    set labelStyle(x) {
      l(x), g();
    },
    get markerStart() {
      return d();
    },
    set markerStart(x) {
      d(x), g();
    },
    get markerEnd() {
      return f();
    },
    set markerEnd(x) {
      f(x), g();
    },
    get interactionWidth() {
      return h();
    },
    set interactionWidth(x) {
      h(x), g();
    },
    get style() {
      return p();
    },
    set style(x) {
      p(x), g();
    }
  };
  return pi(t, {
    get path() {
      return c(w);
    },
    get labelX() {
      return c(b);
    },
    get labelY() {
      return c(S);
    },
    get label() {
      return u();
    },
    get labelStyle() {
      return l();
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
      return p();
    }
  }), ce(E);
}
se(
  Sh,
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
  #t = /* @__PURE__ */ ye(0);
  #n = /* @__PURE__ */ ye(0);
  #r = Jn || -1;
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
    return Jn === this.#r ? /* @__PURE__ */ ye(e) : tr(e);
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
      var u = a.reactions === null ? null : new Set(a.reactions), l = u === null || !o.reactions?.every(
        (d) => (
          /** @type {NonNullable<typeof v_reactions>} */
          u.has(d)
        )
      );
      l && Pn(a);
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
class _2 {
  #e;
  #t;
  /**
   *
   * @param {() => T} fn
   * @param {(update: () => void) => void} onsubscribe
   */
  constructor(e, n) {
    this.#e = e, this.#t = Zr(n);
  }
  get current() {
    return this.#t(), this.#e();
  }
}
const C2 = /\(.+\)/, S2 = /* @__PURE__ */ new Set(["all", "print", "screen", "and", "or", "not", "only"]);
class kh extends _2 {
  /**
   * @param {string} query A media query string
   * @param {boolean} [fallback] Fallback value for the server
   */
  constructor(e, n) {
    let r = C2.test(e) || // we need to use `some` here because technically this `window.matchMedia('random,screen')` still returns true
    e.split(/[\s,]+/).some((i) => S2.has(i.trim())) ? e : `(${e})`;
    const o = window.matchMedia(r);
    super(
      () => o.matches,
      (i) => gt(o, "change", i)
    );
  }
}
function k2(t, e, n, r) {
  const o = /* @__PURE__ */ new Map();
  return Zl(t, { x: 0, y: 0, width: n, height: r }, e, !0).forEach((i) => {
    o.set(i.id, i);
  }), o;
}
function kc(t) {
  const { edges: e, defaultEdgeOptions: n, nodeLookup: r, previousEdges: o, connectionMode: i, onerror: s, onlyRenderVisible: a, elevateEdgesOnSelect: u } = t, l = /* @__PURE__ */ new Map();
  for (const d of e) {
    const f = r.get(d.source), h = r.get(d.target);
    if (!f || !h)
      continue;
    if (a) {
      const { visibleNodes: y, transform: w, width: b, height: S } = t;
      if (Pw({
        sourceNode: f,
        targetNode: h,
        width: b,
        height: S,
        transform: w
      }))
        y.set(f.id, f), y.set(h.id, h);
      else
        continue;
    }
    const p = o.get(d.id);
    if (p && d === p.edge && f == p.sourceNode && h == p.targetNode) {
      l.set(d.id, p);
      continue;
    }
    const m = Mw({
      id: d.id,
      sourceNode: f,
      targetNode: h,
      sourceHandle: d.sourceHandle || null,
      targetHandle: d.targetHandle || null,
      connectionMode: i,
      onError: s
    });
    m && l.set(d.id, {
      ...n,
      ...d,
      ...m,
      zIndex: Ew({
        selected: d.selected,
        zIndex: d.zIndex ?? n.zIndex,
        sourceNode: f,
        targetNode: h,
        elevateOnSelect: u
      }),
      sourceNode: f,
      targetNode: h,
      edge: d
    });
  }
  return l;
}
const Eh = {
  input: ph,
  output: mh,
  default: Gl,
  group: yh
}, Ph = {
  straight: Ch,
  smoothstep: _h,
  default: Jl,
  step: Sh
};
function E2(t, e, n, r, o, i) {
  if (e && !n && r && o) {
    const s = hi(i, {
      filter: (a) => !!((a.width || a.initialWidth) && (a.height || a.initialHeight))
    });
    return Yl(s, r, o, 0.5, 2, 0.1);
  } else
    return n ?? { x: 0, y: 0, zoom: 1 };
}
function P2(t) {
  class e {
    #e = /* @__PURE__ */ C(() => t.props.id ?? "1");
    get flowId() {
      return c(this.#e);
    }
    set flowId(r) {
      K(this.#e, r);
    }
    #t = /* @__PURE__ */ ye(null);
    get domNode() {
      return c(this.#t);
    }
    set domNode(r) {
      K(this.#t, r);
    }
    #n = /* @__PURE__ */ ye(null);
    get panZoom() {
      return c(this.#n);
    }
    set panZoom(r) {
      K(this.#n, r);
    }
    #r = /* @__PURE__ */ ye(t.width ?? 0);
    get width() {
      return c(this.#r);
    }
    set width(r) {
      K(this.#r, r);
    }
    #o = /* @__PURE__ */ ye(t.height ?? 0);
    get height() {
      return c(this.#o);
    }
    set height(r) {
      K(this.#o, r);
    }
    #i = /* @__PURE__ */ C(() => {
      const r = Bw(t.nodes, this.nodeLookup, this.parentLookup, {
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
    #a = /* @__PURE__ */ C(() => this.panZoom !== null);
    get viewportInitialized() {
      return c(this.#a);
    }
    set viewportInitialized(r) {
      K(this.#a, r);
    }
    #s = /* @__PURE__ */ C(() => (qw(this.connectionLookup, this.edgeLookup, t.edges), t.edges));
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
    #l = /* @__PURE__ */ C(() => {
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
    #u = /* @__PURE__ */ C(() => {
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
    #c = /* @__PURE__ */ C(() => {
      const {
        // We need to access this._nodes to trigger on changes
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        nodes: r,
        _edges: o,
        _prevVisibleEdges: i,
        nodeLookup: s,
        connectionMode: a,
        onerror: u,
        onlyRenderVisibleElements: l,
        defaultEdgeOptions: d
      } = this;
      let f, h;
      const p = {
        edges: o,
        defaultEdgeOptions: d,
        previousEdges: i,
        nodeLookup: s,
        connectionMode: a,
        elevateEdgesOnSelect: t.props.elevateEdgesOnSelect ?? !0,
        onerror: u
      };
      if (l) {
        const { viewport: m, width: y, height: w } = this, b = [m.x, m.y, m.zoom];
        f = k2(s, b, y, w), h = kc({
          ...p,
          onlyRenderVisible: !0,
          visibleNodes: f,
          transform: b,
          width: y,
          height: w
        });
      } else
        f = this.nodeLookup, h = kc(p);
      return { nodes: f, edges: h };
    });
    get visible() {
      return c(this.#c);
    }
    set visible(r) {
      K(this.#c, r);
    }
    #d = /* @__PURE__ */ C(() => t.props.nodesDraggable ?? !0);
    get nodesDraggable() {
      return c(this.#d);
    }
    set nodesDraggable(r) {
      K(this.#d, r);
    }
    #f = /* @__PURE__ */ C(() => t.props.nodesConnectable ?? !0);
    get nodesConnectable() {
      return c(this.#f);
    }
    set nodesConnectable(r) {
      K(this.#f, r);
    }
    #g = /* @__PURE__ */ C(() => t.props.elementsSelectable ?? !0);
    get elementsSelectable() {
      return c(this.#g);
    }
    set elementsSelectable(r) {
      K(this.#g, r);
    }
    #h = /* @__PURE__ */ C(() => t.props.nodesFocusable ?? !0);
    get nodesFocusable() {
      return c(this.#h);
    }
    set nodesFocusable(r) {
      K(this.#h, r);
    }
    #y = /* @__PURE__ */ C(() => t.props.edgesFocusable ?? !0);
    get edgesFocusable() {
      return c(this.#y);
    }
    set edgesFocusable(r) {
      K(this.#y, r);
    }
    #p = /* @__PURE__ */ C(() => t.props.disableKeyboardA11y ?? !1);
    get disableKeyboardA11y() {
      return c(this.#p);
    }
    set disableKeyboardA11y(r) {
      K(this.#p, r);
    }
    #w = /* @__PURE__ */ C(() => t.props.minZoom ?? 0.5);
    get minZoom() {
      return c(this.#w);
    }
    set minZoom(r) {
      K(this.#w, r);
    }
    #m = /* @__PURE__ */ C(() => t.props.maxZoom ?? 2);
    get maxZoom() {
      return c(this.#m);
    }
    set maxZoom(r) {
      K(this.#m, r);
    }
    #v = /* @__PURE__ */ C(() => t.props.nodeOrigin ?? [0, 0]);
    get nodeOrigin() {
      return c(this.#v);
    }
    set nodeOrigin(r) {
      K(this.#v, r);
    }
    #b = /* @__PURE__ */ C(() => t.props.nodeExtent ?? Ka);
    get nodeExtent() {
      return c(this.#b);
    }
    set nodeExtent(r) {
      K(this.#b, r);
    }
    #x = /* @__PURE__ */ C(() => t.props.translateExtent ?? Ka);
    get translateExtent() {
      return c(this.#x);
    }
    set translateExtent(r) {
      K(this.#x, r);
    }
    #_ = /* @__PURE__ */ C(() => t.props.defaultEdgeOptions ?? {});
    get defaultEdgeOptions() {
      return c(this.#_);
    }
    set defaultEdgeOptions(r) {
      K(this.#_, r);
    }
    #C = /* @__PURE__ */ C(() => t.props.nodeDragThreshold ?? 1);
    get nodeDragThreshold() {
      return c(this.#C);
    }
    set nodeDragThreshold(r) {
      K(this.#C, r);
    }
    #S = /* @__PURE__ */ C(() => t.props.autoPanOnNodeDrag ?? !0);
    get autoPanOnNodeDrag() {
      return c(this.#S);
    }
    set autoPanOnNodeDrag(r) {
      K(this.#S, r);
    }
    #k = /* @__PURE__ */ C(() => t.props.autoPanOnConnect ?? !0);
    get autoPanOnConnect() {
      return c(this.#k);
    }
    set autoPanOnConnect(r) {
      K(this.#k, r);
    }
    #E = /* @__PURE__ */ C(() => t.props.autoPanOnNodeFocus ?? !0);
    get autoPanOnNodeFocus() {
      return c(this.#E);
    }
    set autoPanOnNodeFocus(r) {
      K(this.#E, r);
    }
    #P = /* @__PURE__ */ C(() => t.props.autoPanSpeed ?? 15);
    get autoPanSpeed() {
      return c(this.#P);
    }
    set autoPanSpeed(r) {
      K(this.#P, r);
    }
    #N = /* @__PURE__ */ C(() => t.props.connectionDragThreshold ?? 1);
    get connectionDragThreshold() {
      return c(this.#N);
    }
    set connectionDragThreshold(r) {
      K(this.#N, r);
    }
    fitViewQueued = t.props.fitView ?? !1;
    fitViewOptions = t.props.fitViewOptions;
    fitViewResolver = null;
    #T = /* @__PURE__ */ C(() => t.props.snapGrid ?? null);
    get snapGrid() {
      return c(this.#T);
    }
    set snapGrid(r) {
      K(this.#T, r);
    }
    #O = /* @__PURE__ */ ye(!1);
    get dragging() {
      return c(this.#O);
    }
    set dragging(r) {
      K(this.#O, r);
    }
    #A = /* @__PURE__ */ ye(null);
    get selectionRect() {
      return c(this.#A);
    }
    set selectionRect(r) {
      K(this.#A, r);
    }
    #D = /* @__PURE__ */ ye(!1);
    get selectionKeyPressed() {
      return c(this.#D);
    }
    set selectionKeyPressed(r) {
      K(this.#D, r);
    }
    #I = /* @__PURE__ */ ye(!1);
    get multiselectionKeyPressed() {
      return c(this.#I);
    }
    set multiselectionKeyPressed(r) {
      K(this.#I, r);
    }
    #M = /* @__PURE__ */ ye(!1);
    get deleteKeyPressed() {
      return c(this.#M);
    }
    set deleteKeyPressed(r) {
      K(this.#M, r);
    }
    #L = /* @__PURE__ */ ye(!1);
    get panActivationKeyPressed() {
      return c(this.#L);
    }
    set panActivationKeyPressed(r) {
      K(this.#L, r);
    }
    #H = /* @__PURE__ */ ye(!1);
    get zoomActivationKeyPressed() {
      return c(this.#H);
    }
    set zoomActivationKeyPressed(r) {
      K(this.#H, r);
    }
    #V = /* @__PURE__ */ ye(null);
    get selectionRectMode() {
      return c(this.#V);
    }
    set selectionRectMode(r) {
      K(this.#V, r);
    }
    #z = /* @__PURE__ */ ye("");
    get ariaLiveMessage() {
      return c(this.#z);
    }
    set ariaLiveMessage(r) {
      K(this.#z, r);
    }
    #R = /* @__PURE__ */ C(() => t.props.selectionMode ?? ds.Partial);
    get selectionMode() {
      return c(this.#R);
    }
    set selectionMode(r) {
      K(this.#R, r);
    }
    #F = /* @__PURE__ */ C(() => ({ ...Eh, ...t.props.nodeTypes }));
    get nodeTypes() {
      return c(this.#F);
    }
    set nodeTypes(r) {
      K(this.#F, r);
    }
    #B = /* @__PURE__ */ C(() => ({ ...Ph, ...t.props.edgeTypes }));
    get edgeTypes() {
      return c(this.#B);
    }
    set edgeTypes(r) {
      K(this.#B, r);
    }
    #$ = /* @__PURE__ */ C(() => t.props.noPanClass ?? "nopan");
    get noPanClass() {
      return c(this.#$);
    }
    set noPanClass(r) {
      K(this.#$, r);
    }
    #K = /* @__PURE__ */ C(() => t.props.noDragClass ?? "nodrag");
    get noDragClass() {
      return c(this.#K);
    }
    set noDragClass(r) {
      K(this.#K, r);
    }
    #W = /* @__PURE__ */ C(() => t.props.noWheelClass ?? "nowheel");
    get noWheelClass() {
      return c(this.#W);
    }
    set noWheelClass(r) {
      K(this.#W, r);
    }
    #Z = /* @__PURE__ */ C(() => Cw(t.props.ariaLabelConfig));
    get ariaLabelConfig() {
      return c(this.#Z);
    }
    set ariaLabelConfig(r) {
      K(this.#Z, r);
    }
    #Y = /* @__PURE__ */ ye(E2(this.nodesInitialized, t.props.fitView, t.props.initialViewport, this.width, this.height, this.nodeLookup));
    get _viewport() {
      return c(this.#Y);
    }
    set _viewport(r) {
      K(this.#Y, r);
    }
    get viewport() {
      return t.viewport ?? this._viewport;
    }
    set viewport(r) {
      t.viewport && (t.viewport = r), this._viewport = r;
    }
    #q = /* @__PURE__ */ ye(
      // _connection is viewport independent and originating from XYHandle
      Wa
    );
    get _connection() {
      return c(this.#q);
    }
    set _connection(r) {
      K(this.#q, r);
    }
    #X = /* @__PURE__ */ C(() => this._connection.inProgress ? {
      ...this._connection,
      to: vi(this._connection.to, [this.viewport.x, this.viewport.y, this.viewport.zoom])
    } : this._connection);
    get connection() {
      return c(this.#X);
    }
    set connection(r) {
      K(this.#X, r);
    }
    #j = /* @__PURE__ */ C(() => t.props.connectionMode ?? fo.Strict);
    get connectionMode() {
      return c(this.#j);
    }
    set connectionMode(r) {
      K(this.#j, r);
    }
    #U = /* @__PURE__ */ C(() => t.props.connectionRadius ?? 20);
    get connectionRadius() {
      return c(this.#U);
    }
    set connectionRadius(r) {
      K(this.#U, r);
    }
    #G = /* @__PURE__ */ C(() => t.props.isValidConnection ?? (() => !0));
    get isValidConnection() {
      return c(this.#G);
    }
    set isValidConnection(r) {
      K(this.#G, r);
    }
    #J = /* @__PURE__ */ C(() => t.props.selectNodesOnDrag ?? !0);
    get selectNodesOnDrag() {
      return c(this.#J);
    }
    set selectNodesOnDrag(r) {
      K(this.#J, r);
    }
    #Q = /* @__PURE__ */ C(() => t.props.defaultMarkerColor === void 0 ? "#b1b1b7" : t.props.defaultMarkerColor);
    get defaultMarkerColor() {
      return c(this.#Q);
    }
    set defaultMarkerColor(r) {
      K(this.#Q, r);
    }
    #ee = /* @__PURE__ */ C(() => Lw(t.edges, {
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
    #te = /* @__PURE__ */ C(() => t.props.onlyRenderVisibleElements ?? !1);
    get onlyRenderVisibleElements() {
      return c(this.#te);
    }
    set onlyRenderVisibleElements(r) {
      K(this.#te, r);
    }
    #ne = /* @__PURE__ */ C(() => t.props.onflowerror ?? ww);
    get onerror() {
      return c(this.#ne);
    }
    set onerror(r) {
      K(this.#ne, r);
    }
    #re = /* @__PURE__ */ C(() => t.props.ondelete);
    get ondelete() {
      return c(this.#re);
    }
    set ondelete(r) {
      K(this.#re, r);
    }
    #oe = /* @__PURE__ */ C(() => t.props.onbeforedelete);
    get onbeforedelete() {
      return c(this.#oe);
    }
    set onbeforedelete(r) {
      K(this.#oe, r);
    }
    #ie = /* @__PURE__ */ C(() => t.props.onbeforeconnect);
    get onbeforeconnect() {
      return c(this.#ie);
    }
    set onbeforeconnect(r) {
      K(this.#ie, r);
    }
    #se = /* @__PURE__ */ C(() => t.props.onconnect);
    get onconnect() {
      return c(this.#se);
    }
    set onconnect(r) {
      K(this.#se, r);
    }
    #ae = /* @__PURE__ */ C(() => t.props.onconnectstart);
    get onconnectstart() {
      return c(this.#ae);
    }
    set onconnectstart(r) {
      K(this.#ae, r);
    }
    #le = /* @__PURE__ */ C(() => t.props.onconnectend);
    get onconnectend() {
      return c(this.#le);
    }
    set onconnectend(r) {
      K(this.#le, r);
    }
    #ue = /* @__PURE__ */ C(() => t.props.onbeforereconnect);
    get onbeforereconnect() {
      return c(this.#ue);
    }
    set onbeforereconnect(r) {
      K(this.#ue, r);
    }
    #ce = /* @__PURE__ */ C(() => t.props.onreconnect);
    get onreconnect() {
      return c(this.#ce);
    }
    set onreconnect(r) {
      K(this.#ce, r);
    }
    #de = /* @__PURE__ */ C(() => t.props.onreconnectstart);
    get onreconnectstart() {
      return c(this.#de);
    }
    set onreconnectstart(r) {
      K(this.#de, r);
    }
    #fe = /* @__PURE__ */ C(() => t.props.onreconnectend);
    get onreconnectend() {
      return c(this.#fe);
    }
    set onreconnectend(r) {
      K(this.#fe, r);
    }
    #he = /* @__PURE__ */ C(() => t.props.clickConnect ?? !0);
    get clickConnect() {
      return c(this.#he);
    }
    set clickConnect(r) {
      K(this.#he, r);
    }
    #ge = /* @__PURE__ */ C(() => t.props.onclickconnectstart);
    get onclickconnectstart() {
      return c(this.#ge);
    }
    set onclickconnectstart(r) {
      K(this.#ge, r);
    }
    #ve = /* @__PURE__ */ C(() => t.props.onclickconnectend);
    get onclickconnectend() {
      return c(this.#ve);
    }
    set onclickconnectend(r) {
      K(this.#ve, r);
    }
    #pe = /* @__PURE__ */ ye(null);
    get clickConnectStartHandle() {
      return c(this.#pe);
    }
    set clickConnectStartHandle(r) {
      K(this.#pe, r);
    }
    #me = /* @__PURE__ */ C(() => t.props.onselectiondrag);
    get onselectiondrag() {
      return c(this.#me);
    }
    set onselectiondrag(r) {
      K(this.#me, r);
    }
    #ye = /* @__PURE__ */ C(() => t.props.onselectiondragstart);
    get onselectiondragstart() {
      return c(this.#ye);
    }
    set onselectiondragstart(r) {
      K(this.#ye, r);
    }
    #we = /* @__PURE__ */ C(() => t.props.onselectiondragstop);
    get onselectiondragstop() {
      return c(this.#we);
    }
    set onselectiondragstop(r) {
      K(this.#we, r);
    }
    resolveFitView = async () => {
      this.panZoom && (await mw(
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
    _prefersDark = new kh("(prefers-color-scheme: dark)", t.props.colorModeSSR === "dark");
    #be = /* @__PURE__ */ C(() => t.props.colorMode === "system" ? this._prefersDark.current ? "dark" : "light" : t.props.colorMode ?? "light");
    get colorMode() {
      return c(this.#be);
    }
    set colorMode(r) {
      K(this.#be, r);
    }
    constructor() {
    }
    resetStoreValues() {
      this.dragging = !1, this.selectionRect = null, this.selectionRectMode = null, this.selectionKeyPressed = !1, this.multiselectionKeyPressed = !1, this.deleteKeyPressed = !1, this.panActivationKeyPressed = !1, this.zoomActivationKeyPressed = !1, this._connection = Wa, this.clickConnectStartHandle = null, this.viewport = t.props.initialViewport ?? { x: 0, y: 0, zoom: 1 }, this.ariaLiveMessage = "";
    }
  }
  return new e();
}
function Cn() {
  const t = yn(vs);
  if (!t)
    throw new Error("To call useStore outside of <SvelteFlow /> you need to wrap your component in a <SvelteFlowProvider />");
  return t.getStore();
}
const vs = Symbol();
function Nh(t) {
  const e = P2(t);
  function n(N) {
    e.nodeTypes = {
      ...Eh,
      ...N
    };
  }
  function r(N) {
    e.edgeTypes = {
      ...Ph,
      ...N
    };
  }
  function o(N) {
    e.edges = Ow(N, e.edges);
  }
  const i = (N, k = !1) => {
    e.nodes = e.nodes.map((D) => {
      const P = N.get(D.id);
      return P ? { ...D, position: P.position, dragging: k } : D;
    });
  };
  function s(N) {
    const { changes: k, updatedInternals: D } = Zw(N, e.nodeLookup, e.parentLookup, e.domNode, e.nodeOrigin);
    if (!D)
      return;
    Rw(e.nodeLookup, e.parentLookup, {
      nodeOrigin: e.nodeOrigin,
      nodeExtent: e.nodeExtent
    }), e.fitViewQueued && e.resolveFitView();
    const P = /* @__PURE__ */ new Map();
    for (const A of k) {
      const R = e.nodeLookup.get(A.id)?.internals.userNode;
      if (!R)
        continue;
      const M = { ...R };
      switch (A.type) {
        case "dimensions": {
          const Y = { ...M.measured, ...A.dimensions };
          A.setAttributes && (M.width = A.dimensions?.width ?? M.width, M.height = A.dimensions?.height ?? M.height), M.measured = Y;
          break;
        }
        case "position":
          M.position = A.position ?? M.position;
          break;
      }
      P.set(A.id, M);
    }
    e.nodes = e.nodes.map((A) => P.get(A.id) ?? A);
  }
  function a(N) {
    const k = e.fitViewResolver ?? Promise.withResolvers();
    return e.fitViewQueued = !0, e.fitViewOptions = N, e.fitViewResolver = k, e.nodes = [...e.nodes], k.promise;
  }
  async function u(N, k, D) {
    const P = typeof D?.zoom < "u" ? D.zoom : e.maxZoom, A = e.panZoom;
    return A ? (await A.setViewport({
      x: e.width / 2 - N * P,
      y: e.height / 2 - k * P,
      zoom: P
    }, { duration: D?.duration, ease: D?.ease, interpolate: D?.interpolate }), Promise.resolve(!0)) : Promise.resolve(!1);
  }
  function l(N, k) {
    const D = e.panZoom;
    return D ? D.scaleBy(N, k) : Promise.resolve(!1);
  }
  function d(N) {
    return l(1.2, N);
  }
  function f(N) {
    return l(1 / 1.2, N);
  }
  function h(N) {
    const k = e.panZoom;
    k && (k.setScaleExtent([N, e.maxZoom]), e.minZoom = N);
  }
  function p(N) {
    const k = e.panZoom;
    k && (k.setScaleExtent([e.minZoom, N]), e.maxZoom = N);
  }
  function m(N) {
    const k = e.panZoom;
    k && (k.setTranslateExtent(N), e.translateExtent = N);
  }
  function y(N, k = null) {
    let D = !1;
    const P = N.map((A) => (k ? k.has(A.id) : !0) && A.selected ? (D = !0, { ...A, selected: !1 }) : A);
    return [D, P];
  }
  function w(N) {
    const k = N?.nodes ? new Set(N.nodes.map((Y) => Y.id)) : null, [D, P] = y(e.nodes, k);
    D && (e.nodes = P);
    const A = N?.edges ? new Set(N.edges.map((Y) => Y.id)) : null, [R, M] = y(e.edges, A);
    R && (e.edges = M);
  }
  function b(N) {
    const k = e.multiselectionKeyPressed;
    e.nodes = e.nodes.map((D) => {
      const P = N.includes(D.id), A = k && D.selected || P;
      return !!D.selected !== A ? { ...D, selected: A } : D;
    }), k || w({ nodes: [] });
  }
  function S(N) {
    const k = e.multiselectionKeyPressed;
    e.edges = e.edges.map((D) => {
      const P = N.includes(D.id), A = k && D.selected || P;
      return !!D.selected !== A ? { ...D, selected: A } : D;
    }), k || w({ edges: [] });
  }
  function E(N, k, D) {
    const P = e.nodeLookup.get(N);
    if (!P) {
      console.warn("012", jo.error012(N));
      return;
    }
    e.selectionRect = null, e.selectionRectMode = null, P.selected ? (k || P.selected && e.multiselectionKeyPressed) && (w({ nodes: [P], edges: [] }), requestAnimationFrame(() => D?.blur())) : b([N]);
  }
  function x(N) {
    const k = e.edgeLookup.get(N);
    if (!k) {
      console.warn("012", jo.error012(N));
      return;
    }
    (k.selectable || e.elementsSelectable && typeof k.selectable > "u") && (e.selectionRect = null, e.selectionRectMode = null, k.selected ? k.selected && e.multiselectionKeyPressed && w({ nodes: [], edges: [k] }) : S([N]));
  }
  function _(N, k) {
    const { nodeExtent: D, snapGrid: P, nodeOrigin: A, nodeLookup: R, nodesDraggable: M, onerror: Y } = e, U = /* @__PURE__ */ new Map(), V = P?.[0] ?? 5, j = P?.[1] ?? 5, q = N.x * V * k, F = N.y * j * k;
    for (const Q of R.values()) {
      if (!(Q.selected && (Q.draggable || M && typeof Q.draggable > "u")))
        continue;
      let re = {
        x: Q.internals.positionAbsolute.x + q,
        y: Q.internals.positionAbsolute.y + F
      };
      P && (re = gi(re, P));
      const { position: ee, positionAbsolute: L } = jf({
        nodeId: Q.id,
        nextPosition: re,
        nodeLookup: R,
        nodeExtent: D,
        nodeOrigin: A,
        onError: Y
      });
      Q.position = ee, Q.internals.positionAbsolute = L, U.set(Q.id, Q);
    }
    i(U);
  }
  function T(N) {
    return Yw({
      delta: N,
      panZoom: e.panZoom,
      transform: [e.viewport.x, e.viewport.y, e.viewport.zoom],
      translateExtent: e.translateExtent,
      width: e.width,
      height: e.height
    });
  }
  const I = (N) => {
    e._connection = { ...N };
  };
  function B() {
    e._connection = Wa;
  }
  function $() {
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
    setCenter: u,
    setMinZoom: h,
    setMaxZoom: p,
    setTranslateExtent: m,
    unselectNodesAndEdges: w,
    addSelectedNodes: b,
    addSelectedEdges: S,
    handleNodeSelection: E,
    handleEdgeSelection: x,
    moveSelectedNodes: _,
    panBy: T,
    updateConnection: I,
    cancelConnection: B,
    reset: $
  });
}
function N2(t, e) {
  const { minZoom: n, maxZoom: r, initialViewport: o, onPanZoomStart: i, onPanZoom: s, onPanZoomEnd: a, translateExtent: u, setPanZoomInstance: l, onDraggingChange: d, onTransformChange: f } = e, h = d2({
    domNode: t,
    minZoom: n,
    maxZoom: r,
    translateExtent: u,
    viewport: o,
    onPanZoom: s,
    onPanZoomStart: i,
    onPanZoomEnd: a,
    onDraggingChange: d
  }), p = h.getViewport();
  return (o.x !== p.x || o.y !== p.y || o.zoom !== p.zoom) && f([p.x, p.y, p.zoom]), l(h), h.update(e), {
    update(m) {
      h.update(m);
    }
  };
}
var T2 = /* @__PURE__ */ ne('<div class="svelte-flow__zoom svelte-flow__container"><!></div>');
function Th(t, e) {
  ue(e, !0);
  let n = v(e, "store", 15), r = v(e, "panOnScrollMode", 7), o = v(e, "preventScrolling", 7), i = v(e, "zoomOnScroll", 7), s = v(e, "zoomOnDoubleClick", 7), a = v(e, "zoomOnPinch", 7), u = v(e, "panOnDrag", 7), l = v(e, "panOnScroll", 7), d = v(e, "panOnScrollSpeed", 7), f = v(e, "paneClickDistance", 7), h = v(e, "selectionOnDrag", 7), p = v(e, "onmovestart", 7), m = v(e, "onmove", 7), y = v(e, "onmoveend", 7), w = v(e, "oninit", 7), b = v(e, "children", 7), S = /* @__PURE__ */ C(() => n().panActivationKeyPressed || u()), E = /* @__PURE__ */ C(() => n().panActivationKeyPressed || l());
  const { viewport: x } = n();
  let _ = !1;
  He(() => {
    !_ && n().viewportInitialized && (w()?.(), _ = !0);
  });
  var T = {
    get store() {
      return n();
    },
    set store($) {
      n($), g();
    },
    get panOnScrollMode() {
      return r();
    },
    set panOnScrollMode($) {
      r($), g();
    },
    get preventScrolling() {
      return o();
    },
    set preventScrolling($) {
      o($), g();
    },
    get zoomOnScroll() {
      return i();
    },
    set zoomOnScroll($) {
      i($), g();
    },
    get zoomOnDoubleClick() {
      return s();
    },
    set zoomOnDoubleClick($) {
      s($), g();
    },
    get zoomOnPinch() {
      return a();
    },
    set zoomOnPinch($) {
      a($), g();
    },
    get panOnDrag() {
      return u();
    },
    set panOnDrag($) {
      u($), g();
    },
    get panOnScroll() {
      return l();
    },
    set panOnScroll($) {
      l($), g();
    },
    get panOnScrollSpeed() {
      return d();
    },
    set panOnScrollSpeed($) {
      d($), g();
    },
    get paneClickDistance() {
      return f();
    },
    set paneClickDistance($) {
      f($), g();
    },
    get selectionOnDrag() {
      return h();
    },
    set selectionOnDrag($) {
      h($), g();
    },
    get onmovestart() {
      return p();
    },
    set onmovestart($) {
      p($), g();
    },
    get onmove() {
      return m();
    },
    set onmove($) {
      m($), g();
    },
    get onmoveend() {
      return y();
    },
    set onmoveend($) {
      y($), g();
    },
    get oninit() {
      return w();
    },
    set oninit($) {
      w($), g();
    },
    get children() {
      return b();
    },
    set children($) {
      b($), g();
    }
  }, I = T2(), B = Z(I);
  return Oe(B, b), W(I), At(I, ($, H) => N2?.($, H), () => ({
    viewport: n().viewport,
    minZoom: n().minZoom,
    maxZoom: n().maxZoom,
    initialViewport: x,
    onDraggingChange: ($) => {
      n(n().dragging = $, !0);
    },
    setPanZoomInstance: ($) => {
      n(n().panZoom = $, !0);
    },
    onPanZoomStart: p(),
    onPanZoom: m(),
    onPanZoomEnd: y(),
    zoomOnScroll: i(),
    zoomOnDoubleClick: s(),
    zoomOnPinch: a(),
    panOnScroll: c(E),
    panOnDrag: c(S),
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
    onTransformChange: ($) => {
      n(n().viewport = { x: $[0], y: $[1], zoom: $[2] }, !0);
    },
    connectionInProgress: n().connection.inProgress
  })), O(t, I), ce(T);
}
se(
  Th,
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
function Ec(t, e) {
  return (n) => {
    n.target === e && t?.(n);
  };
}
function Pc(t) {
  return (e) => {
    const n = t.has(e.id);
    return !!e.selected !== n ? { ...e, selected: n } : e;
  };
}
function Nc(t, e) {
  if (t.size !== e.size)
    return !1;
  for (const n of t)
    if (!e.has(n))
      return !1;
  return !0;
}
var O2 = /* @__PURE__ */ ne("<div><!></div>");
function Oh(t, e) {
  ue(e, !0);
  let n = v(e, "store", 15), r = v(e, "panOnDrag", 7, !0), o = v(e, "paneClickDistance", 7, 1), i = v(e, "selectionOnDrag", 7), s = v(e, "onpaneclick", 7), a = v(e, "onpanecontextmenu", 7), u = v(e, "onselectionstart", 7), l = v(e, "onselectionend", 7), d = v(e, "children", 7), f, h = null, p = /* @__PURE__ */ new Set(), m = /* @__PURE__ */ new Set(), y = /* @__PURE__ */ C(() => n().panActivationKeyPressed || r()), w = /* @__PURE__ */ C(() => n().selectionKeyPressed || !!n().selectionRect || i() && c(y) !== !0), b = /* @__PURE__ */ C(() => n().elementsSelectable && (c(w) || n().selectionRectMode === "user")), S = !1;
  function E(A) {
    if (h = f?.getBoundingClientRect(), !h) return;
    const R = A.target === f, M = !R && !!A.target.closest(".nokey"), Y = i() && R || n().selectionKeyPressed;
    if (M || !c(w) || !Y || A.button !== 0 || !A.isPrimary)
      return;
    A.target?.setPointerCapture?.(A.pointerId), S = !1;
    const { x: U, y: V } = hn(A, h);
    n(n().selectionRect = { width: 0, height: 0, startX: U, startY: V, x: U, y: V }, !0), R || (A.stopPropagation(), A.preventDefault());
  }
  function x(A) {
    if (!c(w) || !h || !n().selectionRect)
      return;
    const R = hn(A, h), { startX: M = 0, startY: Y = 0 } = n().selectionRect;
    if (!S) {
      const F = n().selectionKeyPressed ? 0 : o();
      if (Math.hypot(R.x - M, R.y - Y) <= F)
        return;
      n().unselectNodesAndEdges(), u()?.(A);
    }
    S = !0;
    const U = {
      ...n().selectionRect,
      x: R.x < M ? R.x : M,
      y: R.y < Y ? R.y : Y,
      width: Math.abs(R.x - M),
      height: Math.abs(R.y - Y)
    }, V = p, j = m;
    p = new Set(Zl(
      n().nodeLookup,
      U,
      [
        n().viewport.x,
        n().viewport.y,
        n().viewport.zoom
      ],
      n().selectionMode === ds.Partial,
      !0
    ).map((F) => F.id));
    const q = n().defaultEdgeOptions.selectable ?? !0;
    m = /* @__PURE__ */ new Set();
    for (const F of p) {
      const Q = n().connectionLookup.get(F);
      if (Q)
        for (const { edgeId: X } of Q.values()) {
          const re = n().edgeLookup.get(X);
          re && (re.selectable ?? q) && m.add(X);
        }
    }
    Nc(V, p) || n(n().nodes = n().nodes.map(Pc(p)), !0), Nc(j, m) || n(n().edges = n().edges.map(Pc(m)), !0), n(n().selectionRectMode = "user", !0), n(n().selectionRect = U, !0);
  }
  function _(A) {
    A.button === 0 && (A.target?.releasePointerCapture?.(A.pointerId), !S && A.target === f && B?.(A), n(n().selectionRect = null, !0), S && n(n().selectionRectMode = p.size > 0 ? "nodes" : null, !0), S && l()?.(A));
  }
  const T = (A) => {
    if (Array.isArray(c(y)) && c(y).includes(2)) {
      A.preventDefault();
      return;
    }
    a()?.({ event: A });
  }, I = (A) => {
    S && (A.stopPropagation(), S = !1);
  };
  function B(A) {
    if (S || n().connection.inProgress) {
      S = !1;
      return;
    }
    s()?.({ event: A }), n().unselectNodesAndEdges(), n(n().selectionRectMode = null, !0), n(n().selectionRect = null, !0);
  }
  var $ = {
    get store() {
      return n();
    },
    set store(A) {
      n(A), g();
    },
    get panOnDrag() {
      return r();
    },
    set panOnDrag(A = !0) {
      r(A), g();
    },
    get paneClickDistance() {
      return o();
    },
    set paneClickDistance(A = 1) {
      o(A), g();
    },
    get selectionOnDrag() {
      return i();
    },
    set selectionOnDrag(A) {
      i(A), g();
    },
    get onpaneclick() {
      return s();
    },
    set onpaneclick(A) {
      s(A), g();
    },
    get onpanecontextmenu() {
      return a();
    },
    set onpanecontextmenu(A) {
      a(A), g();
    },
    get onselectionstart() {
      return u();
    },
    set onselectionstart(A) {
      u(A), g();
    },
    get onselectionend() {
      return l();
    },
    set onselectionend(A) {
      l(A), g();
    },
    get children() {
      return d();
    },
    set children(A) {
      d(A), g();
    }
  }, H = O2();
  let N;
  var k = /* @__PURE__ */ C(() => c(b) ? void 0 : Ec(B, f));
  H.__click = function(...A) {
    c(k)?.apply(this, A);
  }, H.__pointermove = function(...A) {
    (c(b) ? x : void 0)?.apply(this, A);
  }, H.__pointerup = function(...A) {
    (c(b) ? _ : void 0)?.apply(this, A);
  };
  var D = /* @__PURE__ */ C(() => Ec(T, f));
  H.__contextmenu = function(...A) {
    c(D)?.apply(this, A);
  };
  var P = Z(H);
  return Oe(P, d), W(H), Nt(H, (A) => f = A, () => f), Te((A) => N = Yt(H, 1, "svelte-flow__pane svelte-flow__container", null, N, A), [
    () => ({
      draggable: r() === !0 || Array.isArray(r()) && r().includes(0),
      dragging: n().dragging,
      selection: c(w)
    })
  ]), ns(
    "pointerdown",
    H,
    function(...A) {
      (c(b) ? E : void 0)?.apply(this, A);
    },
    !0
  ), ns(
    "click",
    H,
    function(...A) {
      (c(b) ? I : void 0)?.apply(this, A);
    },
    !0
  ), O(t, H), ce($);
}
Sr(["click", "pointermove", "pointerup", "contextmenu"]);
se(
  Oh,
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
function Ah(t, e) {
  ue(e, !0);
  let n = v(e, "store", 15), r = v(e, "children", 7);
  var o = {
    get store() {
      return n();
    },
    set store(u) {
      n(u), g();
    },
    get children() {
      return r();
    },
    set children(u) {
      r(u), g();
    }
  }, i = A2();
  let s;
  var a = Z(i);
  return Oe(a, r), W(i), Te(() => s = Pt(i, "", s, {
    transform: `translate(${n().viewport.x ?? ""}px, ${n().viewport.y ?? ""}px) scale(${n().viewport.zoom ?? ""})`
  })), O(t, i), ce(o);
}
se(Ah, { store: {}, children: {} }, [], [], !0);
function Dh(t, e) {
  const { store: n, onDrag: r, onDragStart: o, onDragStop: i, onNodeMouseDown: s } = e, a = Gw({
    onDrag: r,
    onDragStart: o,
    onDragStop: i,
    onNodeMouseDown: s,
    getStoreItems: () => {
      const { snapGrid: l, viewport: d } = n;
      return {
        nodes: n.nodes,
        nodeLookup: n.nodeLookup,
        edges: n.edges,
        nodeExtent: n.nodeExtent,
        snapGrid: l || [0, 0],
        snapToGrid: !!l,
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
  function u(l, d) {
    if (d.disabled) {
      a.destroy();
      return;
    }
    a.update({
      domNode: l,
      noDragClassName: d.noDragClass,
      handleSelector: d.handleSelector,
      nodeId: d.nodeId,
      isSelectable: d.isSelectable,
      nodeClickDistance: d.nodeClickDistance
    });
  }
  return u(t, e), {
    update(l) {
      u(t, l);
    },
    destroy() {
      a.destroy();
    }
  };
}
var D2 = /* @__PURE__ */ ne('<div aria-live="assertive" aria-atomic="true" class="a11y-live-msg svelte-1u4lacj"> </div>'), I2 = /* @__PURE__ */ ne('<div class="a11y-hidden svelte-1u4lacj"> </div> <div class="a11y-hidden svelte-1u4lacj"> </div> <!>', 1);
const M2 = {
  hash: "svelte-1u4lacj",
  code: ".a11y-hidden.svelte-1u4lacj {display:none;}.a11y-live-msg.svelte-1u4lacj {position:absolute;width:1px;height:1px;margin:-1px;border:0;padding:0;overflow:hidden;clip:rect(0px, 0px, 0px, 0px);clip-path:inset(100%);}"
};
function Ih(t, e) {
  ue(e, !0), Je(t, M2);
  let n = v(e, "store", 7);
  var r = {
    get store() {
      return n();
    },
    set store(f) {
      n(f), g();
    }
  }, o = I2(), i = J(o), s = Z(i, !0);
  W(i);
  var a = z(i, 2), u = Z(a, !0);
  W(a);
  var l = z(a, 2);
  {
    var d = (f) => {
      var h = D2(), p = Z(h, !0);
      W(h), Te(() => {
        Ne(h, "id", `${L2}-${n().flowId}`), tt(p, n().ariaLiveMessage);
      }), O(f, h);
    };
    ie(l, (f) => {
      n().disableKeyboardA11y || f(d);
    });
  }
  return Te(() => {
    Ne(i, "id", `${Mh}-${n().flowId}`), tt(s, n().disableKeyboardA11y ? n().ariaLabelConfig["node.a11yDescription.default"] : n().ariaLabelConfig["node.a11yDescription.keyboardDisabled"]), Ne(a, "id", `${Lh}-${n().flowId}`), tt(u, n().ariaLabelConfig["edge.a11yDescription.default"]);
  }), O(t, o), ce(r);
}
se(Ih, { store: {} }, [], [], !0);
const Mh = "svelte-flow__node-desc", Lh = "svelte-flow__edge-desc", L2 = "svelte-flow__aria-live";
var H2 = /* @__PURE__ */ ne("<div><!></div>");
function Hh(t, e) {
  ue(e, !0);
  let n = v(e, "store", 15), r = v(e, "node", 7), o = v(e, "resizeObserver", 7), i = v(e, "nodeClickDistance", 7), s = v(e, "onnodeclick", 7), a = v(e, "onnodedrag", 7), u = v(e, "onnodedragstart", 7), l = v(e, "onnodedragstop", 7), d = v(e, "onnodepointerenter", 7), f = v(e, "onnodepointerleave", 7), h = v(e, "onnodepointermove", 7), p = v(e, "onnodecontextmenu", 7), m = /* @__PURE__ */ C(() => Lt(r().data, () => ({}), !0)), y = /* @__PURE__ */ C(() => Lt(r().selected, !1)), w = /* @__PURE__ */ C(() => r().draggable), b = /* @__PURE__ */ C(() => r().selectable), S = /* @__PURE__ */ C(() => Lt(r().deletable, !0)), E = /* @__PURE__ */ C(() => r().connectable), x = /* @__PURE__ */ C(() => r().focusable), _ = /* @__PURE__ */ C(() => Lt(r().hidden, !1)), T = /* @__PURE__ */ C(() => Lt(r().dragging, !1)), I = /* @__PURE__ */ C(() => Lt(r().style, "")), B = /* @__PURE__ */ C(() => r().class), $ = /* @__PURE__ */ C(() => Lt(r().type, "default")), H = /* @__PURE__ */ C(() => r().parentId), N = /* @__PURE__ */ C(() => r().sourcePosition), k = /* @__PURE__ */ C(() => r().targetPosition), D = /* @__PURE__ */ C(() => Lt(r().measured, () => ({ width: 0, height: 0 }), !0).width), P = /* @__PURE__ */ C(() => Lt(r().measured, () => ({ width: 0, height: 0 }), !0).height), A = /* @__PURE__ */ C(() => r().initialWidth), R = /* @__PURE__ */ C(() => r().initialHeight), M = /* @__PURE__ */ C(() => r().width), Y = /* @__PURE__ */ C(() => r().height), U = /* @__PURE__ */ C(() => r().dragHandle), V = /* @__PURE__ */ C(() => Lt(r().internals.z, 0)), j = /* @__PURE__ */ C(() => r().internals.positionAbsolute.x), q = /* @__PURE__ */ C(() => r().internals.positionAbsolute.y), F = /* @__PURE__ */ C(() => r().internals.userNode), { id: Q } = r(), X = /* @__PURE__ */ C(() => c(w) ?? n().nodesDraggable), re = /* @__PURE__ */ C(() => c(b) ?? n().elementsSelectable), ee = /* @__PURE__ */ C(() => c(E) ?? n().nodesConnectable), L = /* @__PURE__ */ C(() => Qf(r())), te = /* @__PURE__ */ C(() => !!r().internals.handleBounds), ve = /* @__PURE__ */ C(() => c(L) && c(te)), ae = /* @__PURE__ */ C(() => c(x) ?? n().nodesFocusable);
  function le(he) {
    return n().parentLookup.has(he);
  }
  let oe = /* @__PURE__ */ C(() => le(Q)), fe = /* @__PURE__ */ ye(null), we = null, xe = c($), pe = c(N), me = c(k), Ee = /* @__PURE__ */ C(() => n().nodeTypes[c($)] ?? Gl), G = /* @__PURE__ */ C(() => n().ariaLabelConfig);
  zr("svelteflow__node_connectable", {
    get value() {
      return c(ee);
    }
  }), zr("svelteflow__node_id", Q);
  let be = /* @__PURE__ */ C(() => {
    const he = c(D) === void 0 ? c(M) ?? c(A) : c(M), Ae = c(P) === void 0 ? c(Y) ?? c(R) : c(Y);
    if (!(he === void 0 && Ae === void 0 && c(I) === void 0))
      return `${c(I)};${he ? `width:${Hn(he)};` : ""}${Ae ? `height:${Hn(Ae)};` : ""}`;
  });
  He(() => {
    (c($) !== xe || c(N) !== pe || c(k) !== me) && c(fe) !== null && requestAnimationFrame(() => {
      c(fe) !== null && n().updateNodeInternals(/* @__PURE__ */ new Map([[Q, { id: Q, nodeElement: c(fe), force: !0 }]]));
    }), xe = c($), pe = c(N), me = c(k);
  }), He(() => {
    o() && (!c(ve) || c(fe) !== we) && (we && o().unobserve(we), c(fe) && o().observe(c(fe)), we = c(fe));
  }), ui(() => {
    we && o()?.unobserve(we);
  });
  function De(he) {
    c(re) && (!n().selectNodesOnDrag || !c(X) || n().nodeDragThreshold > 0) && n().handleNodeSelection(Q), s()?.({ node: c(F), event: he });
  }
  function Pe(he) {
    if (!(nh(he) || n().disableKeyboardA11y))
      if (qf.includes(he.key) && c(re)) {
        const Ae = he.key === "Escape";
        n().handleNodeSelection(Q, Ae, c(fe));
      } else c(X) && r().selected && Object.prototype.hasOwnProperty.call(gs, he.key) && (he.preventDefault(), n(
        n().ariaLiveMessage = c(G)["node.a11yDescription.ariaLiveMessage"]({
          direction: he.key.replace("Arrow", "").toLowerCase(),
          x: ~~r().internals.positionAbsolute.x,
          y: ~~r().internals.positionAbsolute.y
        }),
        !0
      ), n().moveSelectedNodes(gs[he.key], he.shiftKey ? 4 : 1));
  }
  const Xe = () => {
    if (n().disableKeyboardA11y || !n().autoPanOnNodeFocus || !c(fe)?.matches(":focus-visible"))
      return;
    const { width: he, height: Ae, viewport: et } = n();
    Zl(/* @__PURE__ */ new Map([[Q, r()]]), { x: 0, y: 0, width: he, height: Ae }, [et.x, et.y, et.zoom], !0).length > 0 || n().setCenter(r().position.x + (r().measured.width ?? 0) / 2, r().position.y + (r().measured.height ?? 0) / 2, { zoom: et.zoom });
  };
  var je = {
    get store() {
      return n();
    },
    set store(he) {
      n(he), g();
    },
    get node() {
      return r();
    },
    set node(he) {
      r(he), g();
    },
    get resizeObserver() {
      return o();
    },
    set resizeObserver(he) {
      o(he), g();
    },
    get nodeClickDistance() {
      return i();
    },
    set nodeClickDistance(he) {
      i(he), g();
    },
    get onnodeclick() {
      return s();
    },
    set onnodeclick(he) {
      s(he), g();
    },
    get onnodedrag() {
      return a();
    },
    set onnodedrag(he) {
      a(he), g();
    },
    get onnodedragstart() {
      return u();
    },
    set onnodedragstart(he) {
      u(he), g();
    },
    get onnodedragstop() {
      return l();
    },
    set onnodedragstop(he) {
      l(he), g();
    },
    get onnodepointerenter() {
      return d();
    },
    set onnodepointerenter(he) {
      d(he), g();
    },
    get onnodepointerleave() {
      return f();
    },
    set onnodepointerleave(he) {
      f(he), g();
    },
    get onnodepointermove() {
      return h();
    },
    set onnodepointermove(he) {
      h(he), g();
    },
    get onnodecontextmenu() {
      return p();
    },
    set onnodecontextmenu(he) {
      p(he), g();
    }
  }, Ke = de(), rt = J(Ke);
  {
    var Tt = (he) => {
      var Ae = H2();
      Ge(Ae, () => ({
        "data-id": Q,
        class: [
          "svelte-flow__node",
          `svelte-flow__node-${c($)}`,
          c(B)
        ],
        style: c(be),
        onclick: De,
        onpointerenter: d() ? (Ze) => d()({ node: c(F), event: Ze }) : void 0,
        onpointerleave: f() ? (Ze) => f()({ node: c(F), event: Ze }) : void 0,
        onpointermove: h() ? (Ze) => h()({ node: c(F), event: Ze }) : void 0,
        oncontextmenu: p() ? (Ze) => p()({ node: c(F), event: Ze }) : void 0,
        onkeydown: c(ae) ? Pe : void 0,
        onfocus: c(ae) ? Xe : void 0,
        tabIndex: c(ae) ? 0 : void 0,
        role: r().ariaRole ?? (c(ae) ? "group" : void 0),
        "aria-roledescription": "node",
        "aria-describedby": n().disableKeyboardA11y ? void 0 : `${Mh}-${n().flowId}`,
        ...r().domAttributes,
        [fr]: {
          dragging: c(T),
          selected: c(y),
          draggable: c(X),
          connectable: c(ee),
          selectable: c(re),
          nopan: c(X),
          parent: c(oe)
        },
        [Nn]: {
          "z-index": c(V),
          transform: `translate(${c(j) ?? ""}px, ${c(q) ?? ""}px)`,
          visibility: c(L) ? "visible" : "hidden"
        }
      }));
      var et = Z(Ae);
      xt(et, () => c(Ee), (Ze, at) => {
        at(Ze, {
          get data() {
            return c(m);
          },
          get id() {
            return Q;
          },
          get selected() {
            return c(y);
          },
          get selectable() {
            return c(re);
          },
          get deletable() {
            return c(S);
          },
          get sourcePosition() {
            return c(N);
          },
          get targetPosition() {
            return c(k);
          },
          get zIndex() {
            return c(V);
          },
          get dragging() {
            return c(T);
          },
          get draggable() {
            return c(X);
          },
          get dragHandle() {
            return c(U);
          },
          get parentId() {
            return c(H);
          },
          get type() {
            return c($);
          },
          get isConnectable() {
            return c(ee);
          },
          get positionAbsoluteX() {
            return c(j);
          },
          get positionAbsoluteY() {
            return c(q);
          },
          get width() {
            return c(M);
          },
          get height() {
            return c(Y);
          }
        });
      }), W(Ae), At(Ae, (Ze, at) => Dh?.(Ze, at), () => ({
        nodeId: Q,
        isSelectable: c(re),
        disabled: !c(X),
        handleSelector: c(U),
        noDragClass: n().noDragClass,
        nodeClickDistance: i(),
        onNodeMouseDown: n().handleNodeSelection,
        onDrag: (Ze, at, st, lt) => {
          a()?.({ event: Ze, targetNode: st, nodes: lt });
        },
        onDragStart: (Ze, at, st, lt) => {
          u()?.({ event: Ze, targetNode: st, nodes: lt });
        },
        onDragStop: (Ze, at, st, lt) => {
          l()?.({ event: Ze, targetNode: st, nodes: lt });
        },
        store: n()
      })), Nt(Ae, (Ze) => K(fe, Ze), () => c(fe)), O(he, Ae);
    };
    ie(rt, (he) => {
      c(_) || he(Tt);
    });
  }
  return O(t, Ke), ce(je);
}
se(
  Hh,
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
function Vh(t, e) {
  ue(e, !0);
  let n = v(e, "store", 15), r = v(e, "nodeClickDistance", 7), o = v(e, "onnodeclick", 7), i = v(e, "onnodecontextmenu", 7), s = v(e, "onnodepointerenter", 7), a = v(e, "onnodepointermove", 7), u = v(e, "onnodepointerleave", 7), l = v(e, "onnodedrag", 7), d = v(e, "onnodedragstart", 7), f = v(e, "onnodedragstop", 7);
  const h = typeof ResizeObserver > "u" ? null : new ResizeObserver((y) => {
    const w = /* @__PURE__ */ new Map();
    y.forEach((b) => {
      const S = b.target.getAttribute("data-id");
      w.set(S, { id: S, nodeElement: b.target, force: !0 });
    }), n().updateNodeInternals(w);
  });
  ui(() => {
    h?.disconnect();
  });
  var p = {
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
      return u();
    },
    set onnodepointerleave(y) {
      u(y), g();
    },
    get onnodedrag() {
      return l();
    },
    set onnodedrag(y) {
      l(y), g();
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
  }, m = V2();
  return Ct(m, 21, () => n().visible.nodes.values(), (y) => y.id, (y, w) => {
    Hh(y, {
      get node() {
        return c(w);
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
        return u();
      },
      get onnodedrag() {
        return l();
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
  }), W(m), O(t, m), ce(p);
}
se(
  Vh,
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
var z2 = /* @__PURE__ */ _e('<svg class="svelte-flow__edge-wrapper"><g><!></g></svg>');
function zh(t, e) {
  ue(e, !0);
  const n = v(e, "edge", 7), r = v(e, "store", 15), o = v(e, "onedgeclick", 7), i = v(e, "onedgecontextmenu", 7), s = v(e, "onedgepointerenter", 7), a = v(e, "onedgepointerleave", 7);
  let u = /* @__PURE__ */ C(() => n().source), l = /* @__PURE__ */ C(() => n().target), d = /* @__PURE__ */ C(() => n().sourceX), f = /* @__PURE__ */ C(() => n().sourceY), h = /* @__PURE__ */ C(() => n().targetX), p = /* @__PURE__ */ C(() => n().targetY), m = /* @__PURE__ */ C(() => n().sourcePosition), y = /* @__PURE__ */ C(() => n().targetPosition), w = /* @__PURE__ */ C(() => Lt(n().animated, !1)), b = /* @__PURE__ */ C(() => Lt(n().selected, !1)), S = /* @__PURE__ */ C(() => n().label), E = /* @__PURE__ */ C(() => n().labelStyle), x = /* @__PURE__ */ C(() => Lt(n().data, () => ({}), !0)), _ = /* @__PURE__ */ C(() => n().style), T = /* @__PURE__ */ C(() => n().interactionWidth), I = /* @__PURE__ */ C(() => Lt(n().type, "default")), B = /* @__PURE__ */ C(() => n().sourceHandle), $ = /* @__PURE__ */ C(() => n().targetHandle), H = /* @__PURE__ */ C(() => n().markerStart), N = /* @__PURE__ */ C(() => n().markerEnd), k = /* @__PURE__ */ C(() => n().selectable), D = /* @__PURE__ */ C(() => n().focusable), P = /* @__PURE__ */ C(() => Lt(n().deletable, !0)), A = /* @__PURE__ */ C(() => n().hidden), R = /* @__PURE__ */ C(() => n().zIndex), M = /* @__PURE__ */ C(() => n().class), Y = /* @__PURE__ */ C(() => n().ariaLabel), U = null;
  const { id: V } = n();
  zr("svelteflow__edge_id", V);
  let j = /* @__PURE__ */ C(() => c(k) ?? r().elementsSelectable), q = /* @__PURE__ */ C(() => c(D) ?? r().edgesFocusable), F = /* @__PURE__ */ C(() => r().edgeTypes[c(I)] ?? Jl), Q = /* @__PURE__ */ C(() => c(H) ? `url('#${Ya(c(H), r().flowId)}')` : void 0), X = /* @__PURE__ */ C(() => c(N) ? `url('#${Ya(c(N), r().flowId)}')` : void 0);
  function re(oe) {
    const fe = r().edgeLookup.get(V);
    fe && (c(j) && r().handleEdgeSelection(V), o()?.({ event: oe, edge: fe }));
  }
  function ee(oe, fe) {
    const we = r().edgeLookup.get(V);
    we && fe({ event: oe, edge: we });
  }
  function L(oe) {
    if (!r().disableKeyboardA11y && qf.includes(oe.key) && c(j)) {
      const { unselectNodesAndEdges: fe, addSelectedEdges: we } = r();
      oe.key === "Escape" ? (U?.blur(), fe({ edges: [n()] })) : we([V]);
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
  }, ve = de(), ae = J(ve);
  {
    var le = (oe) => {
      var fe = z2();
      let we;
      var xe = Z(fe);
      Ge(xe, () => ({
        class: ["svelte-flow__edge", c(M)],
        "data-id": V,
        onclick: re,
        oncontextmenu: i() ? (me) => {
          ee(me, i());
        } : void 0,
        onpointerenter: s() ? (me) => {
          ee(me, s());
        } : void 0,
        onpointerleave: a() ? (me) => {
          ee(me, a());
        } : void 0,
        "aria-label": c(Y) === null ? void 0 : c(Y) ? c(Y) : `Edge from ${c(u)} to ${c(l)}`,
        "aria-describedby": c(q) ? `${Lh}-${r().flowId}` : void 0,
        role: n().ariaRole ?? (c(q) ? "group" : "img"),
        "aria-roledescription": "edge",
        onkeydown: c(q) ? L : void 0,
        tabindex: c(q) ? 0 : void 0,
        ...n().domAttributes,
        [fr]: {
          animated: c(w),
          selected: c(b),
          selectable: c(j)
        }
      }));
      var pe = Z(xe);
      xt(pe, () => c(F), (me, Ee) => {
        Ee(me, {
          get id() {
            return V;
          },
          get source() {
            return c(u);
          },
          get target() {
            return c(l);
          },
          get sourceX() {
            return c(d);
          },
          get sourceY() {
            return c(f);
          },
          get targetX() {
            return c(h);
          },
          get targetY() {
            return c(p);
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
            return c(S);
          },
          get labelStyle() {
            return c(E);
          },
          get data() {
            return c(x);
          },
          get style() {
            return c(_);
          },
          get interactionWidth() {
            return c(T);
          },
          get selectable() {
            return c(j);
          },
          get deletable() {
            return c(P);
          },
          get type() {
            return c(I);
          },
          get sourceHandleId() {
            return c(B);
          },
          get targetHandleId() {
            return c($);
          },
          get markerStart() {
            return c(Q);
          },
          get markerEnd() {
            return c(X);
          }
        });
      }), W(xe), Nt(xe, (me) => U = me, () => U), W(fe), Te(() => we = Pt(fe, "", we, { "z-index": c(R) })), O(oe, fe);
    };
    ie(ae, (oe) => {
      c(A) || oe(le);
    });
  }
  return O(t, ve), ce(te);
}
se(
  zh,
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
kp();
var R2 = /* @__PURE__ */ _e("<defs></defs>");
function Rh(t, e) {
  ue(e, !1);
  const n = Cn();
  Hl();
  var r = R2();
  Ct(r, 5, () => n.markers, (o) => o.id, (o, i) => {
    Fh(o, Ve(() => c(i)));
  }), W(r), O(t, r), ce();
}
se(Rh, {}, [], [], !0);
var F2 = /* @__PURE__ */ _e('<polyline class="arrow" fill="none" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4"></polyline>'), B2 = /* @__PURE__ */ _e('<polyline class="arrowclosed" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), $2 = /* @__PURE__ */ _e('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function Fh(t, e) {
  ue(e, !0);
  let n = v(e, "id", 7), r = v(e, "type", 7), o = v(e, "width", 7, 12.5), i = v(e, "height", 7, 12.5), s = v(e, "markerUnits", 7, "strokeWidth"), a = v(e, "orient", 7, "auto-start-reverse"), u = v(e, "color", 7, "none"), l = v(e, "strokeWidth", 7);
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
      return u();
    },
    set color(y = "none") {
      u(y), g();
    },
    get strokeWidth() {
      return l();
    },
    set strokeWidth(y) {
      l(y), g();
    }
  }, f = $2(), h = Z(f);
  {
    var p = (y) => {
      var w = F2();
      let b;
      Te(() => {
        Ne(w, "stroke-width", l()), b = Pt(w, "", b, { stroke: u() });
      }), O(y, w);
    }, m = (y) => {
      var w = de(), b = J(w);
      {
        var S = (E) => {
          var x = B2();
          let _;
          Te(() => {
            Ne(x, "stroke-width", l()), _ = Pt(x, "", _, { stroke: u(), fill: u() });
          }), O(E, x);
        };
        ie(
          b,
          (E) => {
            r() === Uo.ArrowClosed && E(S);
          },
          !0
        );
      }
      O(y, w);
    };
    ie(h, (y) => {
      r() === Uo.Arrow ? y(p) : y(m, !1);
    });
  }
  return W(f), Te(() => {
    Ne(f, "id", n()), Ne(f, "markerWidth", `${o()}`), Ne(f, "markerHeight", `${i()}`), Ne(f, "markerUnits", s()), Ne(f, "orient", a());
  }), O(t, f), ce(d);
}
se(
  Fh,
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
function Bh(t, e) {
  ue(e, !0);
  let n = v(e, "store", 15), r = v(e, "onedgeclick", 7), o = v(e, "onedgecontextmenu", 7), i = v(e, "onedgepointerenter", 7), s = v(e, "onedgepointerleave", 7);
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
  }, u = K2(), l = Z(u), d = Z(l);
  Rh(d, {}), W(l);
  var f = z(l, 2);
  return Ct(f, 17, () => n().visible.edges.values(), (h) => h.id, (h, p) => {
    zh(h, {
      get edge() {
        return c(p);
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
  }), W(u), O(t, u), ce(a);
}
se(
  Bh,
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
var W2 = /* @__PURE__ */ ne('<div class="svelte-flow__selection svelte-qtk83j"></div>');
const Z2 = {
  hash: "svelte-qtk83j",
  code: ".svelte-flow__selection.svelte-qtk83j {position:absolute;top:0;left:0;}"
};
function Ql(t, e) {
  ue(e, !0), Je(t, Z2);
  let n = v(e, "x", 7, 0), r = v(e, "y", 7, 0), o = v(e, "width", 7, 0), i = v(e, "height", 7, 0), s = v(e, "isVisible", 7, !0);
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
  }, u = de(), l = J(u);
  {
    var d = (f) => {
      var h = W2();
      let p;
      Te((m) => p = Pt(h, "", p, m), [
        () => ({
          width: typeof o() == "string" ? o() : Hn(o()),
          height: typeof i() == "string" ? i() : Hn(i()),
          transform: `translate(${n()}px, ${r()}px)`
        })
      ]), O(f, h);
    };
    ie(l, (f) => {
      s() && f(d);
    });
  }
  return O(t, u), ce(a);
}
se(Ql, { x: {}, y: {}, width: {}, height: {}, isVisible: {} }, [], [], !0);
var Y2 = /* @__PURE__ */ ne("<div><!></div>");
const q2 = {
  hash: "svelte-c7g5lf",
  code: `.svelte-flow__selection-wrapper.svelte-c7g5lf {position:absolute;top:0;left:0;z-index:2000;pointer-events:all;}.svelte-flow__selection-wrapper.svelte-c7g5lf:focus,
  .svelte-flow__selection-wrapper.svelte-c7g5lf:focus-visible {outline:none;}`
};
function $h(t, e) {
  ue(e, !0), Je(t, q2);
  let n = v(e, "store", 15), r = v(e, "onnodedrag", 7), o = v(e, "onnodedragstart", 7), i = v(e, "onnodedragstop", 7), s = v(e, "onselectionclick", 7), a = v(e, "onselectioncontextmenu", 7), u = /* @__PURE__ */ ye(void 0);
  He(() => {
    n().disableKeyboardA11y || c(u)?.focus({ preventScroll: !0 });
  });
  let l = /* @__PURE__ */ C(() => {
    if (n().selectionRectMode === "nodes") {
      n().nodes;
      const b = hi(n().nodeLookup, { filter: (S) => !!S.selected });
      if (b.width > 0 && b.height > 0)
        return b;
    }
    return null;
  });
  function d(b) {
    const S = n().nodes.filter((E) => E.selected);
    a()?.({ nodes: S, event: b });
  }
  function f(b) {
    const S = n().nodes.filter((E) => E.selected);
    s()?.({ nodes: S, event: b });
  }
  function h(b) {
    Object.prototype.hasOwnProperty.call(gs, b.key) && (b.preventDefault(), n().moveSelectedNodes(gs[b.key], b.shiftKey ? 4 : 1));
  }
  var p = {
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
  }, m = de(), y = J(m);
  {
    var w = (b) => {
      var S = Y2();
      S.__contextmenu = d, S.__click = f, S.__keydown = function(..._) {
        (n().disableKeyboardA11y ? void 0 : h)?.apply(this, _);
      };
      let E;
      var x = Z(S);
      Ql(x, { width: "100%", height: "100%", x: 0, y: 0 }), W(S), At(S, (_, T) => Dh?.(_, T), () => ({
        disabled: !1,
        store: n(),
        onDrag: (_, T, I, B) => {
          r()?.({ event: _, targetNode: null, nodes: B });
        },
        onDragStart: (_, T, I, B) => {
          o()?.({ event: _, targetNode: null, nodes: B });
        },
        onDragStop: (_, T, I, B) => {
          i()?.({ event: _, targetNode: null, nodes: B });
        }
      })), Nt(S, (_) => K(u, _), () => c(u)), Te(
        (_) => {
          Yt(S, 1, ur(["svelte-flow__selection-wrapper", n().noPanClass]), "svelte-c7g5lf"), Ne(S, "role", n().disableKeyboardA11y ? void 0 : "button"), Ne(S, "tabindex", n().disableKeyboardA11y ? void 0 : -1), E = Pt(S, "", E, _);
        },
        [
          () => ({
            width: Hn(c(l).width),
            height: Hn(c(l).height),
            transform: `translate(${c(l).x ?? ""}px, ${c(l).y ?? ""}px)`
          })
        ]
      ), O(b, S);
    };
    ie(y, (b) => {
      n().selectionRectMode === "nodes" && c(l) && Yn(c(l).x) && Yn(c(l).y) && b(w);
    });
  }
  return O(t, m), ce(p);
}
Sr(["contextmenu", "click", "keydown"]);
se(
  $h,
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
function kn(t, e) {
  let { enabled: n = !0, trigger: r, type: o = "keydown" } = e;
  function i(a) {
    const u = Array.isArray(r) ? r : [r], l = [a.metaKey, a.altKey, a.shiftKey, a.ctrlKey].reduce(
      (d, f, h) => f ? d | 1 << h : d,
      0
    );
    for (const d of u) {
      const f = {
        preventDefault: !1,
        enabled: !0,
        ...d
      }, { modifier: h, key: p, callback: m, preventDefault: y, enabled: w } = f;
      if (w) {
        if (a.key !== p) continue;
        if (h === null || h === !1) {
          if (l !== 0) continue;
        } else if (h !== void 0 && h?.[0]?.length > 0) {
          const S = Array.isArray(h) ? h : [h];
          let E = !1;
          for (const x of S)
            if ((Array.isArray(x) ? x : [x]).reduce(
              (T, I) => T | X2(I),
              0
            ) === l) {
              E = !0;
              break;
            }
          if (!E) continue;
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
      const { enabled: u = !0, type: l = "keydown" } = a;
      n && (!u || o !== l) ? s?.() : !n && u && (s = gt(t, l, i)), n = u, o = l, r = a.trigger;
    },
    destroy: () => {
      s?.();
    }
  };
}
function wt() {
  const t = /* @__PURE__ */ C(Cn), e = (i) => {
    const s = Sc(i) ? i : c(t).nodeLookup.get(i.id), a = s.parentId ? _w(s.position, s.measured, s.parentId, c(t).nodeLookup, c(t).nodeOrigin) : s.position, u = {
      ...s,
      position: a,
      width: s.measured?.width ?? s.width,
      height: s.measured?.height ?? s.height
    };
    return go(u);
  };
  function n(i, s, a = { replace: !1 }) {
    c(t).nodes = it(() => c(t).nodes).map((u) => {
      if (u.id === i) {
        const l = typeof s == "function" ? s(u) : s;
        return a?.replace && Sc(l) ? l : { ...u, ...l };
      }
      return u;
    });
  }
  function r(i, s, a = { replace: !1 }) {
    c(t).edges = it(() => c(t).edges).map((u) => {
      if (u.id === i) {
        const l = typeof s == "function" ? s(u) : s;
        return a.replace && p2(l) ? l : { ...u, ...l };
      }
      return u;
    });
  }
  const o = (i) => c(t).nodeLookup.get(i);
  return {
    zoomIn: c(t).zoomIn,
    zoomOut: c(t).zoomOut,
    getInternalNode: o,
    getNode: (i) => o(i)?.internals.userNode,
    getNodes: (i) => i === void 0 ? c(t).nodes : Tc(c(t).nodeLookup, i),
    getEdge: (i) => c(t).edgeLookup.get(i),
    getEdges: (i) => i === void 0 ? c(t).edges : Tc(c(t).edgeLookup, i),
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
    getViewport: () => kl(c(t).viewport),
    setCenter: async (i, s, a) => c(t).setCenter(i, s, a),
    fitView: (i) => c(t).fitView(i),
    fitBounds: async (i, s) => {
      if (!c(t).panZoom)
        return Promise.resolve(!1);
      const a = Yl(i, c(t).width, c(t).height, c(t).minZoom, c(t).maxZoom, s?.padding ?? 0.1);
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
      const u = fc(i), l = u ? i : e(i);
      return l ? (a || c(t).nodes).filter((d) => {
        const f = c(t).nodeLookup.get(d.id);
        if (!f || !u && d.id === i.id)
          return !1;
        const h = go(f), p = Go(h, l);
        return s && p > 0 || p >= h.width * h.height || p >= l.width * l.height;
      }) : [];
    },
    isNodeIntersecting: (i, s, a = !0) => {
      const l = fc(i) ? i : e(i);
      if (!l)
        return !1;
      const d = Go(l, s);
      return a && d > 0 || d >= s.width * s.height || d >= l.width * l.height;
    },
    deleteElements: async ({ nodes: i = [], edges: s = [] }) => {
      const { nodes: a, edges: u } = await yw({
        nodesToRemove: i,
        edgesToRemove: s,
        nodes: c(t).nodes,
        edges: c(t).edges,
        onBeforeDelete: c(t).onbeforedelete
      });
      return a && (c(t).nodes = it(() => c(t).nodes).filter((l) => !a.some(({ id: d }) => d === l.id))), u && (c(t).edges = it(() => c(t).edges).filter((l) => !u.some(({ id: d }) => d === l.id))), (a.length > 0 || u.length > 0) && c(t).ondelete?.({ nodes: a, edges: u }), { deletedNodes: a, deletedEdges: u };
    },
    screenToFlowPosition: (i, s = { snapToGrid: !0 }) => {
      if (!c(t).domNode)
        return i;
      const a = s.snapToGrid ? c(t).snapGrid : !1, { x: u, y: l, zoom: d } = c(t).viewport, { x: f, y: h } = c(t).domNode.getBoundingClientRect(), p = { x: i.x - f, y: i.y - h };
      return vi(p, [u, l, d], a !== null, a || [1, 1]);
    },
    /**
     *
     * @param position
     * @returns
     */
    flowToScreenPosition: (i) => {
      if (!c(t).domNode)
        return i;
      const { x: s, y: a, zoom: u } = c(t).viewport, { x: l, y: d } = c(t).domNode.getBoundingClientRect(), f = hs(i, [s, a, u]);
      return { x: f.x + l, y: f.y + d };
    },
    toObject: () => structuredClone({
      nodes: [...c(t).nodes],
      edges: [...c(t).edges],
      viewport: { ...c(t).viewport }
    }),
    updateNode: n,
    updateNodeData: (i, s, a) => {
      const u = c(t).nodeLookup.get(i)?.internals.userNode;
      if (!u)
        return;
      const l = typeof s == "function" ? s(u) : s;
      n(i, (d) => ({
        ...d,
        data: a?.replace ? l : { ...d.data, ...l }
      }));
    },
    updateEdge: r,
    getNodesBounds: (i) => gw(i, {
      nodeLookup: c(t).nodeLookup,
      nodeOrigin: c(t).nodeOrigin
    }),
    getHandleConnections: ({ type: i, id: s, nodeId: a }) => Array.from(c(t).connectionLookup.get(`${a}-${i}-${s ?? null}`)?.values() ?? [])
  };
}
function Tc(t, e) {
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
function Kh(t, e) {
  ue(e, !0);
  let n = v(e, "store", 15), r = v(e, "selectionKey", 7, "Shift"), o = v(e, "multiSelectionKey", 23, () => Ar() ? "Meta" : "Control"), i = v(e, "deleteKey", 7, "Backspace"), s = v(e, "panActivationKey", 7, " "), a = v(e, "zoomActivationKey", 23, () => Ar() ? "Meta" : "Control"), { deleteElements: u } = wt();
  function l(w) {
    return w !== null && typeof w == "object";
  }
  function d(w) {
    return l(w) ? w.modifier || [] : [];
  }
  function f(w) {
    return w == null ? "" : l(w) ? w.key : w;
  }
  function h(w, b) {
    return (Array.isArray(w) ? w : [w]).map((E) => {
      const x = f(E);
      return {
        key: x,
        modifier: d(E),
        enabled: x !== null,
        callback: b
      };
    });
  }
  function p() {
    n(n().selectionRect = null, !0), n(n().selectionKeyPressed = !1, !0), n(n().multiselectionKeyPressed = !1, !0), n(n().deleteKeyPressed = !1, !0), n(n().panActivationKeyPressed = !1, !0), n(n().zoomActivationKeyPressed = !1, !0);
  }
  function m() {
    const w = n().nodes.filter((S) => S.selected), b = n().edges.filter((S) => S.selected);
    u({ nodes: w, edges: b });
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
    set multiSelectionKey(w = Ar() ? "Meta" : "Control") {
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
    set zoomActivationKey(w = Ar() ? "Meta" : "Control") {
      a(w), g();
    }
  };
  return ns("blur", Rt, p), ns("contextmenu", Rt, p), At(Rt, (w, b) => kn?.(w, b), () => ({
    trigger: h(r(), () => n(n().selectionKeyPressed = !0, !0)),
    type: "keydown"
  })), At(Rt, (w, b) => kn?.(w, b), () => ({
    trigger: h(r(), () => n(n().selectionKeyPressed = !1, !0)),
    type: "keyup"
  })), At(Rt, (w, b) => kn?.(w, b), () => ({
    trigger: h(o(), () => {
      n(n().multiselectionKeyPressed = !0, !0);
    }),
    type: "keydown"
  })), At(Rt, (w, b) => kn?.(w, b), () => ({
    trigger: h(o(), () => n(n().multiselectionKeyPressed = !1, !0)),
    type: "keyup"
  })), At(Rt, (w, b) => kn?.(w, b), () => ({
    trigger: h(i(), (w) => {
      !(w.originalEvent.ctrlKey || w.originalEvent.metaKey || w.originalEvent.shiftKey) && !nh(w.originalEvent) && (n(n().deleteKeyPressed = !0, !0), m());
    }),
    type: "keydown"
  })), At(Rt, (w, b) => kn?.(w, b), () => ({
    trigger: h(i(), () => n(n().deleteKeyPressed = !1, !0)),
    type: "keyup"
  })), At(Rt, (w, b) => kn?.(w, b), () => ({
    trigger: h(s(), () => n(n().panActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), At(Rt, (w, b) => kn?.(w, b), () => ({
    trigger: h(s(), () => n(n().panActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), At(Rt, (w, b) => kn?.(w, b), () => ({
    trigger: h(a(), () => n(n().zoomActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), At(Rt, (w, b) => kn?.(w, b), () => ({
    trigger: h(a(), () => n(n().zoomActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), ce(y);
}
se(
  Kh,
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
var j2 = /* @__PURE__ */ _e('<path fill="none" class="svelte-flow__connection-path"></path>'), U2 = /* @__PURE__ */ _e('<svg class="svelte-flow__connectionline"><g><!></g></svg>');
function Wh(t, e) {
  ue(e, !0);
  let n = v(e, "store", 15), r = v(e, "type", 7), o = v(e, "containerStyle", 7), i = v(e, "style", 7), s = v(e, "LineComponent", 7), a = /* @__PURE__ */ C(() => {
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
      case Wn.Bezier: {
        const [p] = oh(h);
        return p;
      }
      case Wn.Straight: {
        const [p] = sh(h);
        return p;
      }
      case Wn.Step:
      case Wn.SmoothStep: {
        const [p] = ql({
          ...h,
          borderRadius: r() === Wn.Step ? 0 : void 0
        });
        return p;
      }
    }
  });
  var u = {
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
  }, l = de(), d = J(l);
  {
    var f = (h) => {
      var p = U2(), m = Z(p), y = Z(m);
      {
        var w = (S) => {
          var E = de(), x = J(E);
          xt(x, s, (_, T) => {
            T(_, {});
          }), O(S, E);
        }, b = (S) => {
          var E = j2();
          Te(() => {
            Ne(E, "d", c(a)), Pt(E, i());
          }), O(S, E);
        };
        ie(y, (S) => {
          s() ? S(w) : S(b, !1);
        });
      }
      W(m), W(p), Te(
        (S) => {
          Ne(p, "width", n().width), Ne(p, "height", n().height), Pt(p, o()), Yt(m, 0, S);
        },
        [
          () => ur([
            "svelte-flow__connection",
            fw(n().connection.isValid)
          ])
        ]
      ), O(h, p);
    };
    ie(d, (h) => {
      n().connection.inProgress && h(f);
    });
  }
  return O(t, l), ce(u);
}
se(
  Wh,
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
var G2 = /* @__PURE__ */ ne("<div><!></div>");
function mi(t, e) {
  ue(e, !0);
  let n = v(e, "position", 7, "top-right"), r = v(e, "style", 7), o = v(e, "class", 7), i = v(e, "children", 7), s = /* @__PURE__ */ Le(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "position",
    "style",
    "class",
    "children"
  ]), a = /* @__PURE__ */ C(() => `${n()}`.split("-"));
  var u = {
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
  }, l = G2();
  Ge(l, (f) => ({ class: f, style: r(), ...s }), [
    () => ["svelte-flow__panel", o(), ...c(a)]
  ]);
  var d = Z(l);
  return Oe(d, () => i() ?? ze), W(l), O(t, l), ce(u);
}
se(mi, { position: {}, style: {}, class: {}, children: {} }, [], [], !0);
var J2 = /* @__PURE__ */ ne('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function Zh(t, e) {
  ue(e, !0);
  let n = v(e, "proOptions", 7), r = v(e, "position", 7, "bottom-right");
  var o = {
    get proOptions() {
      return n();
    },
    set proOptions(u) {
      n(u), g();
    },
    get position() {
      return r();
    },
    set position(u = "bottom-right") {
      r(u), g();
    }
  }, i = de(), s = J(i);
  {
    var a = (u) => {
      mi(u, {
        get position() {
          return r();
        },
        class: "svelte-flow__attribution",
        "data-message": "Feel free to remove the attribution or check out how you could support us: https://svelteflow.dev/support-us",
        children: (l, d) => {
          var f = J2();
          O(l, f);
        },
        $$slots: { default: !0 }
      });
    };
    ie(s, (u) => {
      n()?.hideAttribution || u(a);
    });
  }
  return O(t, i), ce(o);
}
se(Zh, { proOptions: {}, position: {} }, [], [], !0);
var Q2 = /* @__PURE__ */ ne("<div><!></div>");
const eb = {
  hash: "svelte-15m40wc",
  code: ".svelte-flow.svelte-15m40wc {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;background-color:var(--background-color, var(--background-color-default));}:root {--background-color-default: #fff;--background-pattern-color-default: #ddd;--minimap-mask-color-default: rgb(240, 240, 240, 0.6);--minimap-mask-stroke-color-default: none;--minimap-mask-stroke-width-default: 1;--controls-button-background-color-default: #fefefe;--controls-button-background-color-hover-default: #f4f4f4;--controls-button-color-default: inherit;--controls-button-color-hover-default: inherit;--controls-button-border-color-default: #eee;}"
};
function Yh(t, e) {
  ue(e, !0), Je(t, eb);
  let n = v(e, "width", 7), r = v(e, "height", 7), o = v(e, "colorMode", 7), i = v(e, "domNode", 15), s = v(e, "clientWidth", 15), a = v(e, "clientHeight", 15), u = v(e, "children", 7), l = v(e, "rest", 7), d = /* @__PURE__ */ C(() => l().class), f = /* @__PURE__ */ C(() => Jp(l(), [
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
    w.currentTarget.scrollTo({ top: 0, left: 0, behavior: "auto" }), l().onscroll && l().onscroll(w);
  }
  var p = {
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
      return u();
    },
    set children(w) {
      u(w), g();
    },
    get rest() {
      return l();
    },
    set rest(w) {
      l(w), g();
    }
  }, m = Q2();
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
      onscroll: h,
      ...c(f),
      [Nn]: w
    }),
    [
      () => ({ width: Hn(n()), height: Hn(r()) })
    ],
    void 0,
    void 0,
    "svelte-15m40wc"
  );
  var y = Z(m);
  return Oe(y, () => u() ?? ze), W(m), Nt(m, (w) => i(w), () => i()), $u(m, "clientHeight", a), $u(m, "clientWidth", s), O(t, m), ce(p);
}
se(
  Yh,
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
var tb = /* @__PURE__ */ ne('<div class="svelte-flow__viewport-back svelte-flow__container"></div> <!> <div class="svelte-flow__edge-labels svelte-flow__container"></div> <!> <!> <!> <div class="svelte-flow__viewport-front svelte-flow__container"></div>', 1), nb = /* @__PURE__ */ ne("<!> <!>", 1), rb = /* @__PURE__ */ ne("<!> <!> <!> <!> <!>", 1);
function qh(t, e) {
  ue(e, !0);
  let n = v(e, "width", 7), r = v(e, "height", 7), o = v(e, "proOptions", 7), i = v(e, "selectionKey", 7), s = v(e, "deleteKey", 7), a = v(e, "panActivationKey", 7), u = v(e, "multiSelectionKey", 7), l = v(e, "zoomActivationKey", 7), d = v(e, "paneClickDistance", 7, 1), f = v(e, "nodeClickDistance", 7, 1), h = v(e, "onmovestart", 7), p = v(e, "onmoveend", 7), m = v(e, "onmove", 7), y = v(e, "oninit", 7), w = v(e, "onnodeclick", 7), b = v(e, "onnodecontextmenu", 7), S = v(e, "onnodedrag", 7), E = v(e, "onnodedragstart", 7), x = v(e, "onnodedragstop", 7), _ = v(e, "onnodepointerenter", 7), T = v(e, "onnodepointermove", 7), I = v(e, "onnodepointerleave", 7), B = v(e, "onselectionclick", 7), $ = v(e, "onselectioncontextmenu", 7), H = v(e, "onselectionstart", 7), N = v(e, "onselectionend", 7), k = v(e, "onedgeclick", 7), D = v(e, "onedgecontextmenu", 7), P = v(e, "onedgepointerenter", 7), A = v(e, "onedgepointerleave", 7), R = v(e, "onpaneclick", 7), M = v(e, "onpanecontextmenu", 7), Y = v(e, "panOnScrollMode", 23, () => Lr.Free), U = v(e, "preventScrolling", 7, !0), V = v(e, "zoomOnScroll", 7, !0), j = v(e, "zoomOnDoubleClick", 7, !0), q = v(e, "zoomOnPinch", 7, !0), F = v(e, "panOnScroll", 7, !1), Q = v(e, "panOnScrollSpeed", 7, 0.5), X = v(e, "panOnDrag", 7, !0), re = v(e, "selectionOnDrag", 7, !1), ee = v(e, "connectionLineComponent", 7), L = v(e, "connectionLineStyle", 7), te = v(e, "connectionLineContainerStyle", 7), ve = v(e, "connectionLineType", 23, () => Wn.Bezier), ae = v(e, "attributionPosition", 7), le = v(e, "children", 7), oe = v(e, "nodes", 31, () => ht([])), fe = v(e, "edges", 31, () => ht([])), we = v(e, "viewport", 31, () => {
  }), xe = /* @__PURE__ */ Le(e, [
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
  ]), pe = Nh({
    props: xe,
    width: n(),
    height: r(),
    get nodes() {
      return oe();
    },
    set nodes(G) {
      oe(G);
    },
    get edges() {
      return fe();
    },
    set edges(G) {
      fe(G);
    },
    get viewport() {
      return we();
    },
    set viewport(G) {
      we(G);
    }
  });
  const me = yn(vs);
  me && me.setStore && me.setStore(pe), zr(vs, {
    provider: !1,
    getStore() {
      return pe;
    }
  }), He(() => {
    const G = { nodes: pe.selectedNodes, edges: pe.selectedEdges };
    it(() => e.onselectionchange)?.(G);
    for (const Ue of pe.selectionChangeHandlers.values())
      Ue(G);
  }), ui(() => {
    pe.reset();
  });
  var Ee = {
    get width() {
      return n();
    },
    set width(G) {
      n(G), g();
    },
    get height() {
      return r();
    },
    set height(G) {
      r(G), g();
    },
    get proOptions() {
      return o();
    },
    set proOptions(G) {
      o(G), g();
    },
    get selectionKey() {
      return i();
    },
    set selectionKey(G) {
      i(G), g();
    },
    get deleteKey() {
      return s();
    },
    set deleteKey(G) {
      s(G), g();
    },
    get panActivationKey() {
      return a();
    },
    set panActivationKey(G) {
      a(G), g();
    },
    get multiSelectionKey() {
      return u();
    },
    set multiSelectionKey(G) {
      u(G), g();
    },
    get zoomActivationKey() {
      return l();
    },
    set zoomActivationKey(G) {
      l(G), g();
    },
    get paneClickDistance() {
      return d();
    },
    set paneClickDistance(G = 1) {
      d(G), g();
    },
    get nodeClickDistance() {
      return f();
    },
    set nodeClickDistance(G = 1) {
      f(G), g();
    },
    get onmovestart() {
      return h();
    },
    set onmovestart(G) {
      h(G), g();
    },
    get onmoveend() {
      return p();
    },
    set onmoveend(G) {
      p(G), g();
    },
    get onmove() {
      return m();
    },
    set onmove(G) {
      m(G), g();
    },
    get oninit() {
      return y();
    },
    set oninit(G) {
      y(G), g();
    },
    get onnodeclick() {
      return w();
    },
    set onnodeclick(G) {
      w(G), g();
    },
    get onnodecontextmenu() {
      return b();
    },
    set onnodecontextmenu(G) {
      b(G), g();
    },
    get onnodedrag() {
      return S();
    },
    set onnodedrag(G) {
      S(G), g();
    },
    get onnodedragstart() {
      return E();
    },
    set onnodedragstart(G) {
      E(G), g();
    },
    get onnodedragstop() {
      return x();
    },
    set onnodedragstop(G) {
      x(G), g();
    },
    get onnodepointerenter() {
      return _();
    },
    set onnodepointerenter(G) {
      _(G), g();
    },
    get onnodepointermove() {
      return T();
    },
    set onnodepointermove(G) {
      T(G), g();
    },
    get onnodepointerleave() {
      return I();
    },
    set onnodepointerleave(G) {
      I(G), g();
    },
    get onselectionclick() {
      return B();
    },
    set onselectionclick(G) {
      B(G), g();
    },
    get onselectioncontextmenu() {
      return $();
    },
    set onselectioncontextmenu(G) {
      $(G), g();
    },
    get onselectionstart() {
      return H();
    },
    set onselectionstart(G) {
      H(G), g();
    },
    get onselectionend() {
      return N();
    },
    set onselectionend(G) {
      N(G), g();
    },
    get onedgeclick() {
      return k();
    },
    set onedgeclick(G) {
      k(G), g();
    },
    get onedgecontextmenu() {
      return D();
    },
    set onedgecontextmenu(G) {
      D(G), g();
    },
    get onedgepointerenter() {
      return P();
    },
    set onedgepointerenter(G) {
      P(G), g();
    },
    get onedgepointerleave() {
      return A();
    },
    set onedgepointerleave(G) {
      A(G), g();
    },
    get onpaneclick() {
      return R();
    },
    set onpaneclick(G) {
      R(G), g();
    },
    get onpanecontextmenu() {
      return M();
    },
    set onpanecontextmenu(G) {
      M(G), g();
    },
    get panOnScrollMode() {
      return Y();
    },
    set panOnScrollMode(G = Lr.Free) {
      Y(G), g();
    },
    get preventScrolling() {
      return U();
    },
    set preventScrolling(G = !0) {
      U(G), g();
    },
    get zoomOnScroll() {
      return V();
    },
    set zoomOnScroll(G = !0) {
      V(G), g();
    },
    get zoomOnDoubleClick() {
      return j();
    },
    set zoomOnDoubleClick(G = !0) {
      j(G), g();
    },
    get zoomOnPinch() {
      return q();
    },
    set zoomOnPinch(G = !0) {
      q(G), g();
    },
    get panOnScroll() {
      return F();
    },
    set panOnScroll(G = !1) {
      F(G), g();
    },
    get panOnScrollSpeed() {
      return Q();
    },
    set panOnScrollSpeed(G = 0.5) {
      Q(G), g();
    },
    get panOnDrag() {
      return X();
    },
    set panOnDrag(G = !0) {
      X(G), g();
    },
    get selectionOnDrag() {
      return re();
    },
    set selectionOnDrag(G = !1) {
      re(G), g();
    },
    get connectionLineComponent() {
      return ee();
    },
    set connectionLineComponent(G) {
      ee(G), g();
    },
    get connectionLineStyle() {
      return L();
    },
    set connectionLineStyle(G) {
      L(G), g();
    },
    get connectionLineContainerStyle() {
      return te();
    },
    set connectionLineContainerStyle(G) {
      te(G), g();
    },
    get connectionLineType() {
      return ve();
    },
    set connectionLineType(G = Wn.Bezier) {
      ve(G), g();
    },
    get attributionPosition() {
      return ae();
    },
    set attributionPosition(G) {
      ae(G), g();
    },
    get children() {
      return le();
    },
    set children(G) {
      le(G), g();
    },
    get nodes() {
      return oe();
    },
    set nodes(G = []) {
      oe(G), g();
    },
    get edges() {
      return fe();
    },
    set edges(G = []) {
      fe(G), g();
    },
    get viewport() {
      return we();
    },
    set viewport(G = void 0) {
      we(G), g();
    }
  };
  return Yh(t, {
    get colorMode() {
      return pe.colorMode;
    },
    get width() {
      return n();
    },
    get height() {
      return r();
    },
    get rest() {
      return xe;
    },
    get domNode() {
      return pe.domNode;
    },
    set domNode(G) {
      pe.domNode = G;
    },
    get clientWidth() {
      return pe.width;
    },
    set clientWidth(G) {
      pe.width = G;
    },
    get clientHeight() {
      return pe.height;
    },
    set clientHeight(G) {
      pe.height = G;
    },
    children: (G, Ue) => {
      var be = rb(), De = J(be);
      Kh(De, {
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
          return u();
        },
        get zoomActivationKey() {
          return l();
        },
        get store() {
          return pe;
        },
        set store(rt) {
          pe = rt;
        }
      });
      var Pe = z(De, 2);
      Th(Pe, {
        get panOnScrollMode() {
          return Y();
        },
        get preventScrolling() {
          return U();
        },
        get zoomOnScroll() {
          return V();
        },
        get zoomOnDoubleClick() {
          return j();
        },
        get zoomOnPinch() {
          return q();
        },
        get panOnScroll() {
          return F();
        },
        get panOnScrollSpeed() {
          return Q();
        },
        get panOnDrag() {
          return X();
        },
        get paneClickDistance() {
          return d();
        },
        get selectionOnDrag() {
          return re();
        },
        get onmovestart() {
          return h();
        },
        get onmove() {
          return m();
        },
        get onmoveend() {
          return p();
        },
        get oninit() {
          return y();
        },
        get store() {
          return pe;
        },
        set store(rt) {
          pe = rt;
        },
        children: (rt, Tt) => {
          Oh(rt, {
            get onpaneclick() {
              return R();
            },
            get onpanecontextmenu() {
              return M();
            },
            get onselectionstart() {
              return H();
            },
            get onselectionend() {
              return N();
            },
            get panOnDrag() {
              return X();
            },
            get paneClickDistance() {
              return d();
            },
            get selectionOnDrag() {
              return re();
            },
            get store() {
              return pe;
            },
            set store(he) {
              pe = he;
            },
            children: (he, Ae) => {
              var et = nb(), Ze = J(et);
              Ah(Ze, {
                get store() {
                  return pe;
                },
                set store(st) {
                  pe = st;
                },
                children: (st, lt) => {
                  var bt = tb(), ut = z(J(bt), 2);
                  Bh(ut, {
                    get onedgeclick() {
                      return k();
                    },
                    get onedgecontextmenu() {
                      return D();
                    },
                    get onedgepointerenter() {
                      return P();
                    },
                    get onedgepointerleave() {
                      return A();
                    },
                    get store() {
                      return pe;
                    },
                    set store(an) {
                      pe = an;
                    }
                  });
                  var ot = z(ut, 4);
                  Wh(ot, {
                    get type() {
                      return ve();
                    },
                    get LineComponent() {
                      return ee();
                    },
                    get containerStyle() {
                      return te();
                    },
                    get style() {
                      return L();
                    },
                    get store() {
                      return pe;
                    },
                    set store(an) {
                      pe = an;
                    }
                  });
                  var Ot = z(ot, 2);
                  Vh(Ot, {
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
                      return _();
                    },
                    get onnodepointermove() {
                      return T();
                    },
                    get onnodepointerleave() {
                      return I();
                    },
                    get onnodedrag() {
                      return S();
                    },
                    get onnodedragstart() {
                      return E();
                    },
                    get onnodedragstop() {
                      return x();
                    },
                    get store() {
                      return pe;
                    },
                    set store(an) {
                      pe = an;
                    }
                  });
                  var ko = z(Ot, 2);
                  $h(ko, {
                    get onselectionclick() {
                      return B();
                    },
                    get onselectioncontextmenu() {
                      return $();
                    },
                    get onnodedrag() {
                      return S();
                    },
                    get onnodedragstart() {
                      return E();
                    },
                    get onnodedragstop() {
                      return x();
                    },
                    get store() {
                      return pe;
                    },
                    set store(an) {
                      pe = an;
                    }
                  }), Se(2), O(st, bt);
                },
                $$slots: { default: !0 }
              });
              var at = z(Ze, 2);
              {
                let st = /* @__PURE__ */ C(() => !!(pe.selectionRect && pe.selectionRectMode === "user")), lt = /* @__PURE__ */ C(() => pe.selectionRect?.width), bt = /* @__PURE__ */ C(() => pe.selectionRect?.height), ut = /* @__PURE__ */ C(() => pe.selectionRect?.x), ot = /* @__PURE__ */ C(() => pe.selectionRect?.y);
                Ql(at, {
                  get isVisible() {
                    return c(st);
                  },
                  get width() {
                    return c(lt);
                  },
                  get height() {
                    return c(bt);
                  },
                  get x() {
                    return c(ut);
                  },
                  get y() {
                    return c(ot);
                  }
                });
              }
              O(he, et);
            },
            $$slots: { default: !0 }
          });
        },
        $$slots: { default: !0 }
      });
      var Xe = z(Pe, 2);
      Zh(Xe, {
        get proOptions() {
          return o();
        },
        get position() {
          return ae();
        }
      });
      var je = z(Xe, 2);
      Ih(je, {
        get store() {
          return pe;
        }
      });
      var Ke = z(je, 2);
      Oe(Ke, () => le() ?? ze), O(G, be);
    },
    $$slots: { default: !0 }
  }), ce(Ee);
}
se(
  qh,
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
function Xh(t, e) {
  ue(e, !0);
  let n = v(e, "children", 7), r = /* @__PURE__ */ ye(Nh({ props: {}, nodes: [], edges: [] }));
  zr(vs, {
    provider: !0,
    getStore() {
      return c(r);
    },
    setStore: (a) => {
      K(r, a);
    }
  }), ui(() => {
    c(r).reset();
  });
  var o = {
    get children() {
      return n();
    },
    set children(a) {
      n(a), g();
    }
  }, i = de(), s = J(i);
  return Oe(s, () => n() ?? ze), O(t, i), ce(o);
}
se(Xh, { children: {} }, [], [], !0);
var ob = /* @__PURE__ */ ne("<button><!></button>");
function Lo(t, e) {
  ue(e, !0);
  let n = v(e, "class", 7), r = v(e, "bgColor", 7), o = v(e, "bgColorHover", 7), i = v(e, "color", 7), s = v(e, "colorHover", 7), a = v(e, "borderColor", 7), u = v(e, "onclick", 7), l = v(e, "children", 7), d = /* @__PURE__ */ Le(e, [
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
      return u();
    },
    set onclick(m) {
      u(m), g();
    },
    get children() {
      return l();
    },
    set children(m) {
      l(m), g();
    }
  }, h = ob();
  Ge(h, () => ({
    type: "button",
    onclick: u(),
    class: ["svelte-flow__controls-button", n()],
    ...d,
    [Nn]: {
      "--xy-controls-button-background-color-props": r(),
      "--xy-controls-button-background-color-hover-props": o(),
      "--xy-controls-button-color-props": i(),
      "--xy-controls-button-color-hover-props": s(),
      "--xy-controls-button-border-color-props": a()
    }
  }));
  var p = Z(h);
  return Oe(p, () => l() ?? ze), W(h), O(t, h), ce(f);
}
se(
  Lo,
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
var ib = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function jh(t) {
  var e = ib();
  O(t, e);
}
se(jh, {}, [], [], !0);
var sb = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function Uh(t) {
  var e = sb();
  O(t, e);
}
se(Uh, {}, [], [], !0);
var ab = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function Gh(t) {
  var e = ab();
  O(t, e);
}
se(Gh, {}, [], [], !0);
var lb = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function Jh(t) {
  var e = lb();
  O(t, e);
}
se(Jh, {}, [], [], !0);
var ub = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function Qh(t) {
  var e = ub();
  O(t, e);
}
se(Qh, {}, [], [], !0);
var cb = /* @__PURE__ */ ne("<!> <!>", 1), db = /* @__PURE__ */ ne("<!> <!> <!> <!> <!> <!>", 1);
function eg(t, e) {
  ue(e, !0);
  let n = v(e, "position", 7, "bottom-left"), r = v(e, "orientation", 7, "vertical"), o = v(e, "showZoom", 7, !0), i = v(e, "showFitView", 7, !0), s = v(e, "showLock", 7, !0), a = v(e, "style", 7), u = v(e, "class", 7), l = v(e, "buttonBgColor", 7), d = v(e, "buttonBgColorHover", 7), f = v(e, "buttonColor", 7), h = v(e, "buttonColorHover", 7), p = v(e, "buttonBorderColor", 7), m = v(e, "fitViewOptions", 7), y = v(e, "children", 7), w = v(e, "before", 7), b = v(e, "after", 7), S = /* @__PURE__ */ Le(e, [
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
  ]), E = /* @__PURE__ */ C(Cn);
  const x = {
    bgColor: l(),
    bgColorHover: d(),
    color: f(),
    colorHover: h(),
    borderColor: p()
  };
  let _ = /* @__PURE__ */ C(() => c(E).nodesDraggable || c(E).nodesConnectable || c(E).elementsSelectable), T = /* @__PURE__ */ C(() => c(E).viewport.zoom <= c(E).minZoom), I = /* @__PURE__ */ C(() => c(E).viewport.zoom >= c(E).maxZoom), B = /* @__PURE__ */ C(() => c(E).ariaLabelConfig), $ = /* @__PURE__ */ C(() => r() === "horizontal" ? "horizontal" : "vertical");
  const H = () => {
    c(E).zoomIn();
  }, N = () => {
    c(E).zoomOut();
  }, k = () => {
    c(E).fitView(m());
  }, D = () => {
    let A = !c(_);
    c(E).nodesDraggable = A, c(E).nodesConnectable = A, c(E).elementsSelectable = A;
  };
  var P = {
    get position() {
      return n();
    },
    set position(A = "bottom-left") {
      n(A), g();
    },
    get orientation() {
      return r();
    },
    set orientation(A = "vertical") {
      r(A), g();
    },
    get showZoom() {
      return o();
    },
    set showZoom(A = !0) {
      o(A), g();
    },
    get showFitView() {
      return i();
    },
    set showFitView(A = !0) {
      i(A), g();
    },
    get showLock() {
      return s();
    },
    set showLock(A = !0) {
      s(A), g();
    },
    get style() {
      return a();
    },
    set style(A) {
      a(A), g();
    },
    get class() {
      return u();
    },
    set class(A) {
      u(A), g();
    },
    get buttonBgColor() {
      return l();
    },
    set buttonBgColor(A) {
      l(A), g();
    },
    get buttonBgColorHover() {
      return d();
    },
    set buttonBgColorHover(A) {
      d(A), g();
    },
    get buttonColor() {
      return f();
    },
    set buttonColor(A) {
      f(A), g();
    },
    get buttonColorHover() {
      return h();
    },
    set buttonColorHover(A) {
      h(A), g();
    },
    get buttonBorderColor() {
      return p();
    },
    set buttonBorderColor(A) {
      p(A), g();
    },
    get fitViewOptions() {
      return m();
    },
    set fitViewOptions(A) {
      m(A), g();
    },
    get children() {
      return y();
    },
    set children(A) {
      y(A), g();
    },
    get before() {
      return w();
    },
    set before(A) {
      w(A), g();
    },
    get after() {
      return b();
    },
    set after(A) {
      b(A), g();
    }
  };
  {
    let A = /* @__PURE__ */ C(() => [
      "svelte-flow__controls",
      c($),
      u()
    ]);
    mi(t, Ve(
      {
        get class() {
          return c(A);
        },
        get position() {
          return n();
        },
        "data-testid": "svelte-flow__controls",
        get "aria-label"() {
          return c(B)["controls.ariaLabel"];
        },
        get style() {
          return a();
        }
      },
      () => S,
      {
        children: (R, M) => {
          var Y = db(), U = J(Y);
          {
            var V = (ae) => {
              var le = de(), oe = J(le);
              Oe(oe, w), O(ae, le);
            };
            ie(U, (ae) => {
              w() && ae(V);
            });
          }
          var j = z(U, 2);
          {
            var q = (ae) => {
              var le = cb(), oe = J(le);
              Lo(oe, Ve(
                {
                  onclick: H,
                  class: "svelte-flow__controls-zoomin",
                  get title() {
                    return c(B)["controls.zoomIn.ariaLabel"];
                  },
                  get "aria-label"() {
                    return c(B)["controls.zoomIn.ariaLabel"];
                  },
                  get disabled() {
                    return c(I);
                  }
                },
                () => x,
                {
                  children: (we, xe) => {
                    jh(we);
                  },
                  $$slots: { default: !0 }
                }
              ));
              var fe = z(oe, 2);
              Lo(fe, Ve(
                {
                  onclick: N,
                  class: "svelte-flow__controls-zoomout",
                  get title() {
                    return c(B)["controls.zoomOut.ariaLabel"];
                  },
                  get "aria-label"() {
                    return c(B)["controls.zoomOut.ariaLabel"];
                  },
                  get disabled() {
                    return c(T);
                  }
                },
                () => x,
                {
                  children: (we, xe) => {
                    Uh(we);
                  },
                  $$slots: { default: !0 }
                }
              )), O(ae, le);
            };
            ie(j, (ae) => {
              o() && ae(q);
            });
          }
          var F = z(j, 2);
          {
            var Q = (ae) => {
              Lo(ae, Ve(
                {
                  class: "svelte-flow__controls-fitview",
                  onclick: k,
                  get title() {
                    return c(B)["controls.fitView.ariaLabel"];
                  },
                  get "aria-label"() {
                    return c(B)["controls.fitView.ariaLabel"];
                  }
                },
                () => x,
                {
                  children: (le, oe) => {
                    Gh(le);
                  },
                  $$slots: { default: !0 }
                }
              ));
            };
            ie(F, (ae) => {
              i() && ae(Q);
            });
          }
          var X = z(F, 2);
          {
            var re = (ae) => {
              Lo(ae, Ve(
                {
                  class: "svelte-flow__controls-interactive",
                  onclick: D,
                  get title() {
                    return c(B)["controls.interactive.ariaLabel"];
                  },
                  get "aria-label"() {
                    return c(B)["controls.interactive.ariaLabel"];
                  }
                },
                () => x,
                {
                  children: (le, oe) => {
                    var fe = de(), we = J(fe);
                    {
                      var xe = (me) => {
                        Qh(me);
                      }, pe = (me) => {
                        Jh(me);
                      };
                      ie(we, (me) => {
                        c(_) ? me(xe) : me(pe, !1);
                      });
                    }
                    O(le, fe);
                  },
                  $$slots: { default: !0 }
                }
              ));
            };
            ie(X, (ae) => {
              s() && ae(re);
            });
          }
          var ee = z(X, 2);
          {
            var L = (ae) => {
              var le = de(), oe = J(le);
              Oe(oe, y), O(ae, le);
            };
            ie(ee, (ae) => {
              y() && ae(L);
            });
          }
          var te = z(ee, 2);
          {
            var ve = (ae) => {
              var le = de(), oe = J(le);
              Oe(oe, b), O(ae, le);
            };
            ie(te, (ae) => {
              b() && ae(ve);
            });
          }
          O(R, Y);
        },
        $$slots: { default: !0 }
      }
    ));
  }
  return ce(P);
}
se(
  eg,
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
var qn;
(function(t) {
  t.Lines = "lines", t.Dots = "dots", t.Cross = "cross";
})(qn || (qn = {}));
var fb = /* @__PURE__ */ _e("<circle></circle>");
function tg(t, e) {
  ue(e, !0);
  let n = v(e, "radius", 7), r = v(e, "class", 7);
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
  }, i = fb();
  return Te(() => {
    Ne(i, "cx", n()), Ne(i, "cy", n()), Ne(i, "r", n()), Yt(i, 0, ur(["svelte-flow__background-pattern", "dots", r()]));
  }), O(t, i), ce(o);
}
se(tg, { radius: {}, class: {} }, [], [], !0);
var hb = /* @__PURE__ */ _e("<path></path>");
function ng(t, e) {
  ue(e, !0);
  let n = v(e, "lineWidth", 7), r = v(e, "dimensions", 7), o = v(e, "variant", 7), i = v(e, "class", 7);
  var s = {
    get lineWidth() {
      return n();
    },
    set lineWidth(u) {
      n(u), g();
    },
    get dimensions() {
      return r();
    },
    set dimensions(u) {
      r(u), g();
    },
    get variant() {
      return o();
    },
    set variant(u) {
      o(u), g();
    },
    get class() {
      return i();
    },
    set class(u) {
      i(u), g();
    }
  }, a = hb();
  return Te(() => {
    Ne(a, "stroke-width", n()), Ne(a, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), Yt(a, 0, ur(["svelte-flow__background-pattern", o(), i()]));
  }), O(t, a), ce(s);
}
se(ng, { lineWidth: {}, dimensions: {}, variant: {}, class: {} }, [], [], !0);
const gb = {
  [qn.Dots]: 1,
  [qn.Lines]: 1,
  [qn.Cross]: 6
};
var vb = /* @__PURE__ */ _e('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
function rg(t, e) {
  ue(e, !0);
  let n = v(e, "id", 7), r = v(e, "variant", 23, () => qn.Dots), o = v(e, "gap", 7, 20), i = v(e, "size", 7), s = v(e, "lineWidth", 7, 1), a = v(e, "bgColor", 7), u = v(e, "patternColor", 7), l = v(e, "patternClass", 7), d = v(e, "class", 7), f = /* @__PURE__ */ C(Cn), h = /* @__PURE__ */ C(() => r() === qn.Dots), p = /* @__PURE__ */ C(() => r() === qn.Cross), m = /* @__PURE__ */ C(() => Array.isArray(o()) ? o() : [o(), o()]), y = /* @__PURE__ */ C(() => `background-pattern-${c(f).flowId}-${n() ?? ""}`), w = /* @__PURE__ */ C(() => [
    c(m)[0] * c(f).viewport.zoom || 1,
    c(m)[1] * c(f).viewport.zoom || 1
  ]), b = /* @__PURE__ */ C(() => (i() ?? gb[r()]) * c(f).viewport.zoom), S = /* @__PURE__ */ C(() => c(p) ? [c(b), c(b)] : c(w)), E = /* @__PURE__ */ C(() => c(h) ? [c(b) / 2, c(b) / 2] : [
    c(S)[0] / 2,
    c(S)[1] / 2
  ]);
  var x = {
    get id() {
      return n();
    },
    set id(k) {
      n(k), g();
    },
    get variant() {
      return r();
    },
    set variant(k = qn.Dots) {
      r(k), g();
    },
    get gap() {
      return o();
    },
    set gap(k = 20) {
      o(k), g();
    },
    get size() {
      return i();
    },
    set size(k) {
      i(k), g();
    },
    get lineWidth() {
      return s();
    },
    set lineWidth(k = 1) {
      s(k), g();
    },
    get bgColor() {
      return a();
    },
    set bgColor(k) {
      a(k), g();
    },
    get patternColor() {
      return u();
    },
    set patternColor(k) {
      u(k), g();
    },
    get patternClass() {
      return l();
    },
    set patternClass(k) {
      l(k), g();
    },
    get class() {
      return d();
    },
    set class(k) {
      d(k), g();
    }
  }, _ = vb();
  let T;
  var I = Z(_), B = Z(I);
  {
    var $ = (k) => {
      {
        let D = /* @__PURE__ */ C(() => c(b) / 2);
        tg(k, {
          get radius() {
            return c(D);
          },
          get class() {
            return l();
          }
        });
      }
    }, H = (k) => {
      ng(k, {
        get dimensions() {
          return c(S);
        },
        get variant() {
          return r();
        },
        get lineWidth() {
          return s();
        },
        get class() {
          return l();
        }
      });
    };
    ie(B, (k) => {
      c(h) ? k($) : k(H, !1);
    });
  }
  W(I);
  var N = z(I);
  return W(_), Te(() => {
    Yt(_, 0, ur([
      "svelte-flow__background",
      "svelte-flow__container",
      d()
    ])), T = Pt(_, "", T, {
      "--xy-background-color-props": a(),
      "--xy-background-pattern-color-props": u()
    }), Ne(I, "id", c(y)), Ne(I, "x", c(f).viewport.x % c(w)[0]), Ne(I, "y", c(f).viewport.y % c(w)[1]), Ne(I, "width", c(w)[0]), Ne(I, "height", c(w)[1]), Ne(I, "patternTransform", `translate(-${c(E)[0]},-${c(E)[1]})`), Ne(N, "fill", `url(#${c(y)})`);
  }), O(t, _), ce(x);
}
se(
  rg,
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
var pb = /* @__PURE__ */ _e("<rect></rect>");
function og(t, e) {
  ue(e, !0);
  let n = v(e, "id", 7), r = v(e, "x", 7), o = v(e, "y", 7), i = v(e, "width", 7), s = v(e, "height", 7), a = v(e, "borderRadius", 7, 5), u = v(e, "color", 7), l = v(e, "shapeRendering", 7), d = v(e, "strokeColor", 7), f = v(e, "strokeWidth", 7, 2), h = v(e, "selected", 7), p = v(e, "class", 7), m = v(e, "nodeComponent", 7);
  var y = {
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
      return u();
    },
    set color(x) {
      u(x), g();
    },
    get shapeRendering() {
      return l();
    },
    set shapeRendering(x) {
      l(x), g();
    },
    get strokeColor() {
      return d();
    },
    set strokeColor(x) {
      d(x), g();
    },
    get strokeWidth() {
      return f();
    },
    set strokeWidth(x = 2) {
      f(x), g();
    },
    get selected() {
      return h();
    },
    set selected(x) {
      h(x), g();
    },
    get class() {
      return p();
    },
    set class(x) {
      p(x), g();
    },
    get nodeComponent() {
      return m();
    },
    set nodeComponent(x) {
      m(x), g();
    }
  }, w = de(), b = J(w);
  {
    var S = (x) => {
      const _ = /* @__PURE__ */ C(m);
      var T = de(), I = J(T);
      xt(I, () => c(_), (B, $) => {
        $(B, {
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
            return p();
          },
          get color() {
            return u();
          },
          get shapeRendering() {
            return l();
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
      }), O(x, T);
    }, E = (x) => {
      var _ = pb();
      let T, I;
      Te(() => {
        T = Yt(_, 0, ur(["svelte-flow__minimap-node", p()]), null, T, { selected: h() }), Ne(_, "x", r()), Ne(_, "y", o()), Ne(_, "rx", a()), Ne(_, "ry", a()), Ne(_, "width", i()), Ne(_, "height", s()), Ne(_, "shape-rendering", l()), I = Pt(_, "", I, {
          fill: u(),
          stroke: d(),
          "stroke-width": f()
        });
      }), O(x, _);
    };
    ie(b, (x) => {
      m() ? x(S) : x(E, !1);
    });
  }
  return O(t, w), ce(y);
}
se(
  og,
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
function mb(t, e) {
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
const ba = (t) => t instanceof Function ? t : () => t;
var yb = /* @__PURE__ */ _e("<title> </title>"), wb = /* @__PURE__ */ _e('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>'), bb = /* @__PURE__ */ ne('<svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>', 1);
function ig(t, e) {
  ue(e, !0);
  let n = v(e, "position", 7, "bottom-right"), r = v(e, "ariaLabel", 7), o = v(e, "nodeStrokeColor", 7, "transparent"), i = v(e, "nodeColor", 7), s = v(e, "nodeClass", 7, ""), a = v(e, "nodeBorderRadius", 7, 5), u = v(e, "nodeStrokeWidth", 7, 2), l = v(e, "nodeComponent", 7), d = v(e, "bgColor", 7), f = v(e, "maskColor", 7), h = v(e, "maskStrokeColor", 7), p = v(e, "maskStrokeWidth", 7), m = v(e, "width", 7, 200), y = v(e, "height", 7, 150), w = v(e, "pannable", 7, !0), b = v(e, "zoomable", 7, !0), S = v(e, "inversePan", 7), E = v(e, "zoomStep", 7), x = v(e, "class", 7), _ = /* @__PURE__ */ Le(e, [
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
  ]), T = /* @__PURE__ */ C(Cn), I = /* @__PURE__ */ C(() => c(T).ariaLabelConfig);
  const B = i() === void 0 ? void 0 : ba(i()), $ = ba(o()), H = ba(s()), N = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  );
  let k = /* @__PURE__ */ C(() => `svelte-flow__minimap-desc-${c(T).flowId}`), D = /* @__PURE__ */ C(() => ({
    x: -c(T).viewport.x / c(T).viewport.zoom,
    y: -c(T).viewport.y / c(T).viewport.zoom,
    width: c(T).width / c(T).viewport.zoom,
    height: c(T).height / c(T).viewport.zoom
  })), P = /* @__PURE__ */ C(() => Jf(hi(c(T).nodeLookup, { filter: (te) => !te.hidden }), c(D))), A = /* @__PURE__ */ C(() => c(P).width / m()), R = /* @__PURE__ */ C(() => c(P).height / y()), M = /* @__PURE__ */ C(() => Math.max(c(A), c(R))), Y = /* @__PURE__ */ C(() => c(M) * m()), U = /* @__PURE__ */ C(() => c(M) * y()), V = /* @__PURE__ */ C(() => 5 * c(M)), j = /* @__PURE__ */ C(() => c(P).x - (c(Y) - c(P).width) / 2 - c(V)), q = /* @__PURE__ */ C(() => c(P).y - (c(U) - c(P).height) / 2 - c(V)), F = /* @__PURE__ */ C(() => c(Y) + c(V) * 2), Q = /* @__PURE__ */ C(() => c(U) + c(V) * 2);
  const X = () => c(M);
  var re = {
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
      return u();
    },
    set nodeStrokeWidth(te = 2) {
      u(te), g();
    },
    get nodeComponent() {
      return l();
    },
    set nodeComponent(te) {
      l(te), g();
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
      return p();
    },
    set maskStrokeWidth(te) {
      p(te), g();
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
      return S();
    },
    set inversePan(te) {
      S(te), g();
    },
    get zoomStep() {
      return E();
    },
    set zoomStep(te) {
      E(te), g();
    },
    get class() {
      return x();
    },
    set class(te) {
      x(te), g();
    }
  }, ee = bb(), L = J(ee);
  {
    let te = /* @__PURE__ */ C(() => ["svelte-flow__minimap", x()]);
    h1(L, () => ({ "--xy-minimap-background-color-props": d() })), mi(L.lastChild, Ve(
      {
        get position() {
          return n();
        },
        get class() {
          return c(te);
        },
        "data-testid": "svelte-flow__minimap"
      },
      () => _,
      {
        children: (ve, ae) => {
          var le = de(), oe = J(le);
          {
            var fe = (we) => {
              var xe = wb();
              let pe;
              var me = Z(xe);
              {
                var Ee = (be) => {
                  var De = yb(), Pe = Z(De, !0);
                  W(De), Te(() => {
                    Ne(De, "id", c(k)), tt(Pe, r() ?? c(I)["minimap.ariaLabel"]);
                  }), O(be, De);
                };
                ie(me, (be) => {
                  (r() ?? c(I)["minimap.ariaLabel"]) && be(Ee);
                });
              }
              var G = z(me);
              Ct(G, 17, () => c(T).nodes, (be) => be.id, (be, De) => {
                const Pe = /* @__PURE__ */ C(() => c(T).nodeLookup.get(c(De).id));
                var Xe = de(), je = J(Xe);
                {
                  var Ke = (rt) => {
                    const Tt = /* @__PURE__ */ C(() => kr(c(Pe)));
                    {
                      let he = /* @__PURE__ */ C(() => B?.(c(Pe))), Ae = /* @__PURE__ */ C(() => $(c(Pe))), et = /* @__PURE__ */ C(() => H(c(Pe)));
                      og(rt, Ve(
                        {
                          get id() {
                            return c(Pe).id;
                          },
                          get x() {
                            return c(Pe).internals.positionAbsolute.x;
                          },
                          get y() {
                            return c(Pe).internals.positionAbsolute.y;
                          }
                        },
                        () => c(Tt),
                        {
                          get selected() {
                            return c(Pe).selected;
                          },
                          get nodeComponent() {
                            return l();
                          },
                          get color() {
                            return c(he);
                          },
                          get borderRadius() {
                            return a();
                          },
                          get strokeColor() {
                            return c(Ae);
                          },
                          get strokeWidth() {
                            return u();
                          },
                          get shapeRendering() {
                            return N;
                          },
                          get class() {
                            return c(et);
                          }
                        }
                      ));
                    }
                  };
                  ie(je, (rt) => {
                    c(Pe) && Qf(c(Pe)) && !c(Pe).hidden && rt(Ke);
                  });
                }
                O(be, Xe);
              });
              var Ue = z(G);
              W(xe), At(xe, (be, De) => mb?.(be, De), () => ({
                store: c(T),
                panZoom: c(T).panZoom,
                getViewScale: X,
                translateExtent: c(T).translateExtent,
                width: c(T).width,
                height: c(T).height,
                inversePan: S(),
                zoomStep: E(),
                pannable: w(),
                zoomable: b()
              })), Te(() => {
                Ne(xe, "width", m()), Ne(xe, "height", y()), Ne(xe, "viewBox", `${c(j) ?? ""} ${c(q) ?? ""} ${c(F) ?? ""} ${c(Q) ?? ""}`), Ne(xe, "aria-labelledby", c(k)), pe = Pt(xe, "", pe, {
                  "--xy-minimap-mask-background-color-props": f(),
                  "--xy-minimap-mask-stroke-color-props": h(),
                  "--xy-minimap-mask-stroke-width-props": p() ? p() * c(M) : void 0
                }), Ne(Ue, "d", `M${c(j) - c(V)},${c(q) - c(V)}h${c(F) + c(V) * 2}v${c(Q) + c(V) * 2}h${-c(F) - c(V) * 2}z
      M${c(D).x ?? ""},${c(D).y ?? ""}h${c(D).width ?? ""}v${c(D).height ?? ""}h${-c(D).width}z`);
              }), O(we, xe);
            };
            ie(oe, (we) => {
              c(T).panZoom && we(fe);
            });
          }
          O(ve, le);
        },
        $$slots: { default: !0 }
      }
    )), W(L);
  }
  return O(t, ee), ce(re);
}
se(
  ig,
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
var xb = /* @__PURE__ */ ne("<div><!></div>");
function sg(t, e) {
  ue(e, !0);
  let n = v(e, "nodeId", 7), r = v(e, "position", 23, () => ke.Top), o = v(e, "align", 7, "center"), i = v(e, "offset", 7, 10), s = v(e, "isVisible", 7), a = v(e, "children", 7), u = /* @__PURE__ */ Le(e, [
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
  const l = Cn(), { getNodesBounds: d } = wt(), f = yn("svelteflow__node_id");
  let h = /* @__PURE__ */ C(() => (l.nodes, (Array.isArray(n()) ? n() : [n() ?? f]).reduce(
    (T, I) => {
      const B = l.nodeLookup.get(I);
      return B && T.push(B), T;
    },
    []
  ))), p = /* @__PURE__ */ C(() => {
    const _ = d(c(h));
    return _ ? Hw(_, l.viewport, r(), i(), o()) : "";
  }), m = /* @__PURE__ */ C(() => c(h).length === 0 ? 1 : Math.max(...c(h).map((_) => (_.internals.z || 5) + 1))), y = /* @__PURE__ */ C(() => l.nodes.filter((_) => _.selected).length), w = /* @__PURE__ */ C(() => typeof s() == "boolean" ? s() : c(h).length === 1 && c(h)[0].selected && c(y) === 1);
  var b = {
    get nodeId() {
      return n();
    },
    set nodeId(_) {
      n(_), g();
    },
    get position() {
      return r();
    },
    set position(_ = ke.Top) {
      r(_), g();
    },
    get align() {
      return o();
    },
    set align(_ = "center") {
      o(_), g();
    },
    get offset() {
      return i();
    },
    set offset(_ = 10) {
      i(_), g();
    },
    get isVisible() {
      return s();
    },
    set isVisible(_) {
      s(_), g();
    },
    get children() {
      return a();
    },
    set children(_) {
      a(_), g();
    }
  }, S = de(), E = J(S);
  {
    var x = (_) => {
      var T = xb();
      Ge(
        T,
        (B, $) => ({
          class: "svelte-flow__node-toolbar",
          "data-id": B,
          ...u,
          [Nn]: $
        }),
        [
          () => c(h).reduce((B, $) => `${B}${$.id} `, "").trim(),
          () => ({
            display: bh().value ? "none" : void 0,
            position: "absolute",
            transform: c(p),
            "z-index": c(m)
          })
        ]
      );
      var I = Z(T);
      Oe(I, () => a() ?? ze), W(T), At(T, (B, $) => wh?.(B, $), () => "root"), O(_, T);
    };
    ie(E, (_) => {
      l.domNode && c(w) && c(h) && _(x);
    });
  }
  return O(t, S), ce(b);
}
se(
  sg,
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
function cr(t) {
  const e = /* @__PURE__ */ C(Cn), n = /* @__PURE__ */ C(() => c(e).nodes), r = /* @__PURE__ */ C(() => c(e).nodeLookup);
  let o = [], i = !0;
  const s = /* @__PURE__ */ C(() => {
    c(n);
    const a = [], u = Array.isArray(t), l = u ? t : [t];
    for (const d of l) {
      const f = c(r).get(d)?.internals.userNode;
      f && a.push({ id: f.id, type: f.type, data: f.data });
    }
    return (!Xw(a, o) || i) && (o = a, i = !1), u ? o : o[0] ?? null;
  });
  return {
    get current() {
      return c(s);
    }
  };
}
const Oc = "tinyflow-component", _b = [
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
], Ac = [
  {
    value: "ref",
    label: "引用"
  },
  {
    value: "fixed",
    label: "固定值"
  },
  {
    value: "form",
    label: "表单输入"
  }
], eu = [
  { label: "文字", value: "text" },
  { label: "图片", value: "image" },
  { label: "视频", value: "video" },
  { label: "音频", value: "audio" },
  { label: "文件", value: "file" },
  { label: "其他", value: "other" }
], ag = [
  { label: "单行输入框", value: "input" },
  { label: "多行输入框", value: "textarea" },
  { label: "下拉菜单", value: "select" },
  { label: "单选", value: "radio" },
  { label: "多选", value: "checkbox" }
], lg = [
  // { label: '单行输入框', value: 'input' },
  // { label: '多行输入框', value: 'textarea' },
  // { label: '下拉菜单', value: 'select' },
  { label: "单选", value: "radio" },
  { label: "多选", value: "checkbox" }
], Cb = [
  { label: "单选", value: "radio" },
  { label: "多选", value: "checkbox" }
], ug = typeof window < "u" ? window : void 0;
function Sb(t) {
  let e = t.activeElement;
  for (; e?.shadowRoot; ) {
    const n = e.shadowRoot.activeElement;
    if (n === e)
      break;
    e = n;
  }
  return e;
}
let kb = class {
  #e;
  #t;
  constructor(e = {}) {
    const { window: n = ug, document: r = n?.document } = e;
    n !== void 0 && (this.#e = r, this.#t = Zr((o) => {
      const i = gt(n, "focusin", o), s = gt(n, "focusout", o);
      return () => {
        i(), s();
      };
    }));
  }
  get current() {
    return this.#t?.(), this.#e ? Sb(this.#e) : null;
  }
};
new kb();
function Eb(t, e) {
  switch (t) {
    case "post":
      He(e);
      break;
    case "pre":
      Ft(e);
      break;
  }
}
function cg(t, e, n, r = {}) {
  const { lazy: o = !1 } = r;
  let i = !o, s = Array.isArray(t) ? [] : void 0;
  Eb(e, () => {
    const a = Array.isArray(t) ? t.map((l) => l()) : t();
    if (!i) {
      i = !0, s = a;
      return;
    }
    const u = it(() => n(a, s));
    return s = a, u;
  });
}
function tu(t, e, n) {
  cg(t, "post", e, n);
}
function Pb(t, e, n) {
  cg(t, "pre", e, n);
}
tu.pre = Pb;
function Nb(t, e) {
  switch (t) {
    case "local":
      return e.localStorage;
    case "session":
      return e.sessionStorage;
  }
}
class dg {
  #e;
  #t;
  #n;
  #r;
  #o;
  #i = /* @__PURE__ */ ye(0);
  constructor(e, n, r = {}) {
    const {
      storage: o = "local",
      serializer: i = { serialize: JSON.stringify, deserialize: JSON.parse },
      syncTabs: s = !0,
      window: a = ug
    } = r;
    if (this.#e = n, this.#t = e, this.#n = i, a === void 0) return;
    const u = Nb(o, a);
    this.#r = u;
    const l = u.getItem(e);
    l !== null ? this.#e = this.#s(l) : this.#l(n), s && o === "local" && (this.#o = Zr(() => gt(a, "storage", this.#a)));
  }
  get current() {
    this.#o?.(), c(this.#i);
    const e = this.#s(this.#r?.getItem(this.#t)) ?? this.#e, n = /* @__PURE__ */ new WeakMap(), r = (o) => {
      if (o === null || o?.constructor.name === "Date" || typeof o != "object")
        return o;
      let i = n.get(o);
      return i || (i = new Proxy(o, {
        get: (s, a) => (c(this.#i), r(Reflect.get(s, a))),
        set: (s, a, u) => (K(this.#i, c(this.#i) + 1), Reflect.set(s, a, u), this.#l(e), !0)
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
function Dc(t) {
  return t.filter((e) => e.length > 0);
}
const fg = {
  getItem: (t) => null,
  setItem: (t, e) => {
  }
}, yi = typeof document < "u";
function Tb(t) {
  return typeof t == "function";
}
function Ob(t) {
  return t !== null && typeof t == "object";
}
const Qo = Symbol("box"), nu = Symbol("is-writable");
function Ab(t) {
  return Ob(t) && Qo in t;
}
function Db(t) {
  return mt.isBox(t) && nu in t;
}
function mt(t) {
  let e = /* @__PURE__ */ ye(ht(t));
  return {
    [Qo]: !0,
    [nu]: !0,
    get current() {
      return c(e);
    },
    set current(n) {
      K(e, n, !0);
    }
  };
}
function Ib(t, e) {
  const n = /* @__PURE__ */ C(t);
  return e ? {
    [Qo]: !0,
    [nu]: !0,
    get current() {
      return c(n);
    },
    set current(r) {
      e(r);
    }
  } : {
    [Qo]: !0,
    get current() {
      return t();
    }
  };
}
function Mb(t) {
  return mt.isBox(t) ? t : Tb(t) ? mt.with(t) : mt(t);
}
function Lb(t) {
  return Object.entries(t).reduce(
    (e, [n, r]) => mt.isBox(r) ? (mt.isWritableBox(r) ? Object.defineProperty(e, n, {
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
function Hb(t) {
  return mt.isWritableBox(t) ? {
    [Qo]: !0,
    get current() {
      return t.current;
    }
  } : t;
}
mt.from = Mb;
mt.with = Ib;
mt.flatten = Lb;
mt.readonly = Hb;
mt.isBox = Ab;
mt.isWritableBox = Db;
var Ic = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, Vb = /\n/g, zb = /^\s*/, Rb = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, Fb = /^:\s*/, Bb = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, $b = /^[;\s]*/, Kb = /^\s+|\s+$/g, Wb = `
`, Mc = "/", Lc = "*", Nr = "", Zb = "comment", Yb = "declaration";
function qb(t, e) {
  if (typeof t != "string")
    throw new TypeError("First argument must be a string");
  if (!t) return [];
  e = e || {};
  var n = 1, r = 1;
  function o(m) {
    var y = m.match(Vb);
    y && (n += y.length);
    var w = m.lastIndexOf(Wb);
    r = ~w ? m.length - w : r + m.length;
  }
  function i() {
    var m = { line: n, column: r };
    return function(y) {
      return y.position = new s(m), l(), y;
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
  function u(m) {
    var y = m.exec(t);
    if (y) {
      var w = y[0];
      return o(w), t = t.slice(w.length), y;
    }
  }
  function l() {
    u(zb);
  }
  function d(m) {
    var y;
    for (m = m || []; y = f(); )
      y !== !1 && m.push(y);
    return m;
  }
  function f() {
    var m = i();
    if (!(Mc != t.charAt(0) || Lc != t.charAt(1))) {
      for (var y = 2; Nr != t.charAt(y) && (Lc != t.charAt(y) || Mc != t.charAt(y + 1)); )
        ++y;
      if (y += 2, Nr === t.charAt(y - 1))
        return a("End of comment missing");
      var w = t.slice(2, y - 2);
      return r += 2, o(w), t = t.slice(y), r += 2, m({
        type: Zb,
        comment: w
      });
    }
  }
  function h() {
    var m = i(), y = u(Rb);
    if (y) {
      if (f(), !u(Fb)) return a("property missing ':'");
      var w = u(Bb), b = m({
        type: Yb,
        property: Hc(y[0].replace(Ic, Nr)),
        value: w ? Hc(w[0].replace(Ic, Nr)) : Nr
      });
      return u($b), b;
    }
  }
  function p() {
    var m = [];
    d(m);
    for (var y; y = h(); )
      y !== !1 && (m.push(y), d(m));
    return m;
  }
  return l(), p();
}
function Hc(t) {
  return t ? t.replace(Kb, Nr) : Nr;
}
function Xb(t, e) {
  let n = null;
  if (!t || typeof t != "string")
    return n;
  const r = qb(t), o = typeof e == "function";
  return r.forEach((i) => {
    if (i.type !== "declaration")
      return;
    const { property: s, value: a } = i;
    o ? e(s, a, i) : a && (n = n || {}, n[s] = a);
  }), n;
}
function jb(t, e) {
  const n = RegExp(t, "g");
  return (r) => {
    if (typeof r != "string")
      throw new TypeError(`expected an argument of type string, but got ${typeof r}`);
    return r.match(n) ? r.replace(n, e) : r;
  };
}
const Ub = jb(/[A-Z]/, (t) => `-${t.toLowerCase()}`);
function Gb(t) {
  if (!t || typeof t != "object" || Array.isArray(t))
    throw new TypeError(`expected an argument of type object, but got ${typeof t}`);
  return Object.keys(t).map((e) => `${Ub(e)}: ${t[e]};`).join(`
`);
}
function Jb(t = {}) {
  return Gb(t).replace(`
`, " ");
}
const Qb = {
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
Jb(Qb);
const ex = typeof window < "u" ? window : void 0;
function tx(t) {
  let e = t.activeElement;
  for (; e?.shadowRoot; ) {
    const n = e.shadowRoot.activeElement;
    if (n === e)
      break;
    e = n;
  }
  return e;
}
let nx = class {
  #e;
  #t;
  constructor(e = {}) {
    const { window: n = ex, document: r = n?.document } = e;
    n !== void 0 && (this.#e = r, this.#t = Zr((o) => {
      const i = gt(n, "focusin", o), s = gt(n, "focusout", o);
      return () => {
        i(), s();
      };
    }));
  }
  get current() {
    return this.#t?.(), this.#e ? tx(this.#e) : null;
  }
};
new nx();
const Dr = mt("mode-watcher-mode"), Ir = mt("mode-watcher-theme"), rx = ["dark", "light", "system"];
function qa(t) {
  return typeof t != "string" ? !1 : rx.includes(t);
}
class ox {
  #e = "system";
  #t = yi ? localStorage : fg;
  #n = this.#t.getItem(Dr.current);
  #r = qa(this.#n) ? this.#n : this.#e;
  #o = /* @__PURE__ */ ye(ht(this.#i()));
  #i(e = this.#r) {
    return new dg(Dr.current, e, {
      serializer: {
        serialize: (n) => n,
        deserialize: (n) => qa(n) ? n : this.#e
      }
    });
  }
  constructor() {
    Yr(() => tu.pre(() => Dr.current, (e, n) => {
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
class ix {
  #e = void 0;
  #t = !0;
  #n = /* @__PURE__ */ ye(ht(this.#e));
  #r = typeof window < "u" && typeof window.matchMedia == "function" ? new kh("prefers-color-scheme: light") : { current: !1 };
  query() {
    yi && K(this.#n, this.#r.current ? "light" : "dark", !0);
  }
  tracking(e) {
    this.#t = e;
  }
  constructor() {
    Yr(() => {
      Ft(() => {
        this.#t && this.query();
      });
    }), this.query = this.query.bind(this), this.tracking = this.tracking.bind(this);
  }
  get current() {
    return c(this.#n);
  }
}
const Xa = new ox(), ei = new ix();
class sx {
  #e = yi ? localStorage : fg;
  #t = this.#e.getItem(Ir.current);
  #n = this.#t === null || this.#t === void 0 ? "" : this.#t;
  #r = /* @__PURE__ */ ye(ht(this.#o()));
  #o(e = this.#n) {
    return new dg(Ir.current, e, {
      serializer: {
        serialize: (n) => typeof n != "string" ? "" : n,
        deserialize: (n) => n
      }
    });
  }
  constructor() {
    Yr(() => tu.pre(() => Ir.current, (e, n) => {
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
const Yi = new sx();
let Vc, zc, Rc = !1, To = null;
function ax() {
  return To || (To = document.createElement("style"), To.appendChild(document.createTextNode(`* {
		-webkit-transition: none !important;
		-moz-transition: none !important;
		-o-transition: none !important;
		-ms-transition: none !important;
		transition: none !important;
	}`)), To);
}
function hg(t, e = !1) {
  if (typeof document > "u")
    return;
  if (!Rc) {
    Rc = !0, t();
    return;
  }
  if (typeof process < "u" && process.env?.NODE_ENV === "test" || typeof window < "u" && window.__vitest_worker__) {
    t();
    return;
  }
  clearTimeout(Vc), clearTimeout(zc);
  const r = ax(), o = () => document.head.appendChild(r), i = () => {
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
  o(), Vc = window.setTimeout(() => {
    t(), zc = window.setTimeout(i, 16);
  }, 16);
}
const hr = mt(void 0), ps = mt(!0), ms = mt(!1), ja = mt([]), Ua = mt([]);
function lx() {
  const t = /* @__PURE__ */ C(() => {
    if (!yi) return;
    const e = Xa.current === "system" ? ei.current : Xa.current, n = Dc(ja.current), r = Dc(Ua.current);
    function o() {
      const i = document.documentElement, s = document.querySelector('meta[name="theme-color"]');
      e === "light" ? (n.length && i.classList.remove(...n), r.length && i.classList.add(...r), i.style.colorScheme = "light", s && hr.current && s.setAttribute("content", hr.current.light)) : (r.length && i.classList.remove(...r), n.length && i.classList.add(...n), i.style.colorScheme = "dark", s && hr.current && s.setAttribute("content", hr.current.dark));
    }
    return ps.current ? hg(o, ms.current) : o(), e;
  });
  return {
    get current() {
      return c(t);
    }
  };
}
function ux() {
  const t = /* @__PURE__ */ C(() => {
    if (Yi.current, !yi) return;
    function e() {
      document.documentElement.setAttribute("data-theme", Yi.current);
    }
    return ps.current ? hg(e, it(() => ms.current)) : e(), Yi.current;
  });
  return {
    get current() {
      return c(t);
    }
  };
}
const cx = lx(), dx = ux();
function fx(t) {
  Xa.current = t;
}
function hx(t) {
  Yi.current = t;
}
function gx({ defaultMode: t = "system", themeColors: e, darkClassNames: n = ["dark"], lightClassNames: r = [], defaultTheme: o = "", modeStorageKey: i = "mode-watcher-mode", themeStorageKey: s = "mode-watcher-theme" }) {
  const a = document.documentElement, u = localStorage.getItem(i) ?? t, l = localStorage.getItem(s) ?? o, d = u === "light" || u === "system" && window.matchMedia("(prefers-color-scheme: light)").matches;
  if (d ? (n.length && a.classList.remove(...n.filter(Boolean)), r.length && a.classList.add(...r.filter(Boolean))) : (r.length && a.classList.remove(...r.filter(Boolean)), n.length && a.classList.add(...n.filter(Boolean))), a.style.colorScheme = d ? "light" : "dark", e) {
    const f = document.querySelector('meta[name="theme-color"]');
    f && f.setAttribute("content", u === "light" ? e.light : e.dark);
  }
  l && (a.setAttribute("data-theme", l), localStorage.setItem(s, l)), localStorage.setItem(i, u);
}
var vx = /* @__PURE__ */ ne('<meta name="theme-color"/>');
function gg(t, e) {
  ue(e, !0);
  let n = v(e, "themeColors", 7);
  var r = {
    get themeColors() {
      return n();
    },
    set themeColors(a) {
      n(a), g();
    }
  }, o = de(), i = J(o);
  {
    var s = (a) => {
      var u = vx();
      Te(() => Ne(u, "content", n().dark)), O(a, u);
    };
    ie(i, (a) => {
      n() && a(s);
    });
  }
  return O(t, o), ce(r);
}
se(gg, { themeColors: {} }, [], [], !0);
var px = /* @__PURE__ */ ne('<meta name="theme-color"/>'), mx = /* @__PURE__ */ ne("<!> <!>", 1);
function vg(t, e) {
  ue(e, !0);
  let n = v(e, "trueNonce", 7, ""), r = v(e, "initConfig", 7), o = v(e, "themeColors", 7);
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
  return g1("1lz8xnp", (s) => {
    var a = mx(), u = J(a);
    {
      var l = (f) => {
        var h = px();
        Te(() => Ne(h, "content", o().dark)), O(f, h);
      };
      ie(u, (f) => {
        o() && f(l);
      });
    }
    var d = z(u, 2);
    $s(d, () => `<script${n() ? ` nonce=${n()}` : ""}>(` + gx.toString() + ")(" + JSON.stringify(r()) + ");<\/script>"), O(s, a);
  }), ce(i);
}
se(vg, { trueNonce: {}, initConfig: {}, themeColors: {} }, [], [], !0);
function yx(t, e) {
  ue(e, !0);
  let n = v(e, "track", 7, !0), r = v(e, "defaultMode", 7, "system"), o = v(e, "themeColors", 7), i = v(e, "disableTransitions", 7, !0), s = v(e, "darkClassNames", 23, () => ["dark"]), a = v(e, "lightClassNames", 23, () => []), u = v(e, "defaultTheme", 7, ""), l = v(e, "nonce", 7, ""), d = v(e, "themeStorageKey", 7, "mode-watcher-theme"), f = v(e, "modeStorageKey", 7, "mode-watcher-mode"), h = v(e, "disableHeadScriptInjection", 7, !1), p = v(e, "synchronousModeChanges", 7, !1);
  Dr.current = f(), Ir.current = d(), ja.current = s(), Ua.current = a(), ps.current = i(), hr.current = o(), ms.current = p(), Ft(() => {
    ms.current = p();
  }), Ft(() => {
    ps.current = i();
  }), Ft(() => {
    hr.current = o();
  }), Ft(() => {
    ja.current = s();
  }), Ft(() => {
    Ua.current = a();
  }), Ft(() => {
    Dr.current = f();
  }), Ft(() => {
    Ir.current = d();
  }), Ft(() => {
    cx.current, Dr.current, Ir.current, dx.current;
  }), xn(() => {
    ei.tracking(n()), ei.query();
    const _ = localStorage.getItem(Dr.current);
    fx(qa(_) ? _ : r());
    const T = localStorage.getItem(Ir.current);
    hx(T || u());
  });
  const m = {
    defaultMode: r(),
    themeColors: o(),
    darkClassNames: s(),
    lightClassNames: a(),
    defaultTheme: u(),
    modeStorageKey: f(),
    themeStorageKey: d()
  }, y = /* @__PURE__ */ C(() => typeof window > "u" ? l() : "");
  var w = {
    get track() {
      return n();
    },
    set track(_ = !0) {
      n(_), g();
    },
    get defaultMode() {
      return r();
    },
    set defaultMode(_ = "system") {
      r(_), g();
    },
    get themeColors() {
      return o();
    },
    set themeColors(_) {
      o(_), g();
    },
    get disableTransitions() {
      return i();
    },
    set disableTransitions(_ = !0) {
      i(_), g();
    },
    get darkClassNames() {
      return s();
    },
    set darkClassNames(_ = ["dark"]) {
      s(_), g();
    },
    get lightClassNames() {
      return a();
    },
    set lightClassNames(_ = []) {
      a(_), g();
    },
    get defaultTheme() {
      return u();
    },
    set defaultTheme(_ = "") {
      u(_), g();
    },
    get nonce() {
      return l();
    },
    set nonce(_ = "") {
      l(_), g();
    },
    get themeStorageKey() {
      return d();
    },
    set themeStorageKey(_ = "mode-watcher-theme") {
      d(_), g();
    },
    get modeStorageKey() {
      return f();
    },
    set modeStorageKey(_ = "mode-watcher-mode") {
      f(_), g();
    },
    get disableHeadScriptInjection() {
      return h();
    },
    set disableHeadScriptInjection(_ = !1) {
      h(_), g();
    },
    get synchronousModeChanges() {
      return p();
    },
    set synchronousModeChanges(_ = !1) {
      p(_), g();
    }
  }, b = de(), S = J(b);
  {
    var E = (_) => {
      gg(_, {
        get themeColors() {
          return hr.current;
        }
      });
    }, x = (_) => {
      vg(_, {
        get trueNonce() {
          return c(y);
        },
        get initConfig() {
          return m;
        },
        get themeColors() {
          return hr.current;
        }
      });
    };
    ie(S, (_) => {
      h() ? _(E) : _(x, !1);
    });
  }
  return O(t, b), ce(w);
}
se(
  yx,
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
class B4 {
  options;
  rootEl;
  svelteFlowInstance;
  constructor(e) {
    if (typeof e.element != "string" && !(e.element instanceof Element))
      throw new Error("element must be a string or Element");
    (!e.defaultTheme || e.defaultTheme === "system") && (e.defaultTheme = ei.current), this._setOptions(e), this._init();
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
    const e = document.createElement(Oc);
    e.style.display = "block", e.style.width = "100%", e.style.height = "100%", e.classList.add(
      ...this.options.defaultTheme === "dark" ? ["tf-root", "dark"] : ["tf-root"]
    ), e.options = this.options, e.onInit = (n) => {
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
    const n = document.createElement(Oc);
    n.style.display = "block", n.style.width = "100%", n.style.height = "100%", n.classList.add(
      ...this.options.defaultTheme === "dark" ? ["tf-root", "dark"] : ["tf-root"]
    ), n.options = this.options, n.onInit = (r) => {
      this.svelteFlowInstance = r;
    }, this.destroy(), this.rootEl.appendChild(n);
  }
  setTheme(e) {
    e === "system" ? this.options.defaultTheme = ei.current : this.options.defaultTheme = e, this.destroy(), this._init();
  }
  destroy() {
    for (; this.rootEl.firstChild; )
      this.rootEl.removeChild(this.rootEl.firstChild);
  }
}
const wx = () => {
  let t = /* @__PURE__ */ ye([]), e = /* @__PURE__ */ ye([]), n = /* @__PURE__ */ ye({ x: 250, y: 100, zoom: 1 });
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
}, Be = wx();
function gn(...t) {
  return Ro(t);
}
const Fc = {
  default: "tf-btn-default",
  outline: "tf-btn-outline",
  secondary: "tf-btn-secondary",
  ghost: "tf-btn-ghost",
  destructive: "tf-btn-destructive",
  link: "tf-btn-link"
}, Bc = {
  default: "tf-btn-size-default",
  xs: "tf-btn-xs",
  sm: "tf-btn-sm",
  lg: "tf-btn-lg",
  icon: "tf-btn-icon",
  "icon-xs": "tf-btn-icon-xs",
  "icon-sm": "tf-btn-icon-sm",
  "icon-lg": "tf-btn-icon-lg"
};
var bx = /* @__PURE__ */ ne("<a><!></a>"), xx = /* @__PURE__ */ ne("<button><!></button>");
function $e(t, e) {
  ue(e, !0);
  let n = v(e, "class", 7), r = v(e, "variant", 7, "outline"), o = v(e, "size", 7, "default"), i = v(e, "ref", 15, null), s = v(e, "href", 23, () => {
  }), a = v(e, "type", 7, "button"), u = v(e, "disabled", 7), l = v(e, "children", 7), d = v(e, "primary", 7), f = /* @__PURE__ */ Le(e, [
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
      return u();
    },
    set disabled(b) {
      u(b), g();
    },
    get children() {
      return l();
    },
    set children(b) {
      l(b), g();
    },
    get primary() {
      return d();
    },
    set primary(b) {
      d(b), g();
    }
  }, p = de(), m = J(p);
  {
    var y = (b) => {
      var S = bx();
      Ge(
        S,
        (x) => ({
          "data-slot": "button",
          class: x,
          href: u() ? void 0 : s(),
          "aria-disabled": u(),
          role: u() ? "link" : void 0,
          tabindex: u() ? -1 : void 0,
          ...f
        }),
        [
          () => gn("nopan nodrag tf-btn", Fc[r()], Bc[o()], n())
        ]
      );
      var E = Z(S);
      Oe(E, () => l() ?? ze), W(S), Nt(S, (x) => i(x), () => i()), O(b, S);
    }, w = (b) => {
      var S = xx();
      Ge(
        S,
        (x) => ({
          "data-slot": "button",
          class: x,
          type: a(),
          disabled: u(),
          ...f
        }),
        [
          () => gn("nopan nodrag tf-btn", Fc[r()], Bc[o()], n())
        ]
      );
      var E = Z(S);
      Oe(E, () => l() ?? ze), W(S), Nt(S, (x) => i(x), () => i()), O(b, S);
    };
    ie(m, (b) => {
      s() ? b(y) : b(w, !1);
    });
  }
  return O(t, p), ce(h);
}
se(
  $e,
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
function _x(t) {
  return typeof t == "function";
}
function wi(t) {
  return t !== null && typeof t == "object";
}
const Cx = ["string", "number", "bigint", "boolean"];
function Ga(t) {
  return t == null || Cx.includes(typeof t) ? !0 : Array.isArray(t) ? t.every((e) => Ga(e)) : typeof t == "object" ? Object.getPrototypeOf(t) === Object.prototype : !1;
}
const ys = Symbol("box"), pg = Symbol("is-writable");
function ge(t, e) {
  const n = /* @__PURE__ */ C(t);
  return e ? {
    [ys]: !0,
    [pg]: !0,
    get current() {
      return c(n);
    },
    set current(r) {
      e(r);
    }
  } : {
    [ys]: !0,
    get current() {
      return t();
    }
  };
}
function mg(t) {
  return wi(t) && ys in t;
}
function Sx(t) {
  return mg(t) ? t : _x(t) ? ge(t) : On(t);
}
function On(t) {
  let e = /* @__PURE__ */ ye(ht(t));
  return {
    [ys]: !0,
    [pg]: !0,
    get current() {
      return c(e);
    },
    set current(n) {
      K(e, n, !0);
    }
  };
}
function yg(...t) {
  return function(e) {
    for (const n of t)
      if (n) {
        if (e.defaultPrevented)
          return;
        typeof n == "function" ? n.call(this, e) : n.current?.call(this, e);
      }
  };
}
const kx = /\d/, Ex = ["-", "_", "/", "."];
function Px(t = "") {
  if (!kx.test(t))
    return t !== t.toLowerCase();
}
function Nx(t) {
  const e = [];
  let n = "", r, o;
  for (const i of t) {
    const s = Ex.includes(i);
    if (s === !0) {
      e.push(n), n = "", r = void 0;
      continue;
    }
    const a = Px(i);
    if (o === !1) {
      if (r === !1 && a === !0) {
        e.push(n), n = i, r = a;
        continue;
      }
      if (r === !0 && a === !1 && n.length > 1) {
        const u = n.at(-1);
        e.push(n.slice(0, Math.max(0, n.length - 1))), n = u + i, r = a;
        continue;
      }
    }
    n += i, r = a, o = s;
  }
  return e.push(n), e;
}
function wg(t) {
  return t ? Nx(t).map((e) => Ox(e)).join("") : "";
}
function Tx(t) {
  return Ax(wg(t || ""));
}
function Ox(t) {
  return t ? t[0].toUpperCase() + t.slice(1) : "";
}
function Ax(t) {
  return t ? t[0].toLowerCase() + t.slice(1) : "";
}
function Ho(t) {
  if (!t)
    return {};
  const e = {};
  function n(r, o) {
    if (r.startsWith("-moz-") || r.startsWith("-webkit-") || r.startsWith("-ms-") || r.startsWith("-o-")) {
      e[wg(r)] = o;
      return;
    }
    if (r.startsWith("--")) {
      e[r] = o;
      return;
    }
    e[Tx(r)] = o;
  }
  return Xb(t, n), e;
}
function Bo(...t) {
  return (...e) => {
    for (const n of t)
      typeof n == "function" && n(...e);
  };
}
function Dx(t, e) {
  const n = RegExp(t, "g");
  return (r) => {
    if (typeof r != "string")
      throw new TypeError(`expected an argument of type string, but got ${typeof r}`);
    return r.match(n) ? r.replace(n, e) : r;
  };
}
const Ix = Dx(/[A-Z]/, (t) => `-${t.toLowerCase()}`);
function Mx(t) {
  if (!t || typeof t != "object" || Array.isArray(t))
    throw new TypeError(`expected an argument of type object, but got ${typeof t}`);
  return Object.keys(t).map((e) => `${Ix(e)}: ${t[e]};`).join(`
`);
}
function ru(t = {}) {
  return Mx(t).replace(`
`, " ");
}
const Lx = [
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
], Hx = new Set(Lx);
function Vx(t) {
  return Hx.has(t);
}
function Mn(...t) {
  const e = { ...t[0] };
  for (let n = 1; n < t.length; n++) {
    const r = t[n];
    if (r) {
      for (const o of Object.keys(r)) {
        const i = e[o], s = r[o], a = typeof i == "function", u = typeof s == "function";
        if (a && Vx(o)) {
          const l = i, d = s;
          e[o] = yg(l, d);
        } else if (a && u)
          e[o] = Bo(i, s);
        else if (o === "class") {
          const l = Ga(i), d = Ga(s);
          l && d ? e[o] = Ro(i, s) : l ? e[o] = Ro(i) : d && (e[o] = Ro(s));
        } else if (o === "style") {
          const l = typeof i == "object", d = typeof s == "object", f = typeof i == "string", h = typeof s == "string";
          if (l && d)
            e[o] = { ...i, ...s };
          else if (l && h) {
            const p = Ho(s);
            e[o] = { ...i, ...p };
          } else if (f && d) {
            const p = Ho(i);
            e[o] = { ...p, ...s };
          } else if (f && h) {
            const p = Ho(i), m = Ho(s);
            e[o] = { ...p, ...m };
          } else l ? e[o] = i : d ? e[o] = s : f ? e[o] = i : h && (e[o] = s);
        } else
          e[o] = s !== void 0 ? s : i;
      }
      for (const o of Object.getOwnPropertySymbols(r)) {
        const i = e[o], s = r[o];
        e[o] = s !== void 0 ? s : i;
      }
    }
  }
  return typeof e.style == "object" && (e.style = ru(e.style).replaceAll(`
`, " ")), e.hidden === !1 && (e.hidden = void 0, delete e.hidden), e.disabled === !1 && (e.disabled = void 0, delete e.disabled), e;
}
const zx = {
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
}, Rx = ru(zx), bg = typeof window < "u" ? window : void 0;
function Fx(t) {
  let e = t.activeElement;
  for (; e?.shadowRoot; ) {
    const n = e.shadowRoot.activeElement;
    if (n === e)
      break;
    e = n;
  }
  return e;
}
class Bx {
  #e;
  #t;
  constructor(e = {}) {
    const { window: n = bg, document: r = n?.document } = e;
    n !== void 0 && (this.#e = r, this.#t = Zr((o) => {
      const i = gt(n, "focusin", o), s = gt(n, "focusout", o);
      return () => {
        i(), s();
      };
    }));
  }
  get current() {
    return this.#t?.(), this.#e ? Fx(this.#e) : null;
  }
}
new Bx();
function $x(t) {
  return typeof t == "function";
}
class Er {
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
    return Pp(this.#t);
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
    return zr(this.#t, e);
  }
}
function Kx(t, e) {
  switch (t) {
    case "post":
      He(e);
      break;
    case "pre":
      Ft(e);
      break;
  }
}
function xg(t, e, n, r = {}) {
  const { lazy: o = !1 } = r;
  let i = !o, s = Array.isArray(t) ? [] : void 0;
  Kx(e, () => {
    const a = Array.isArray(t) ? t.map((l) => l()) : t();
    if (!i) {
      i = !0, s = a;
      return;
    }
    const u = it(() => n(a, s));
    return s = a, u;
  });
}
function yt(t, e, n) {
  xg(t, "post", e, n);
}
function Wx(t, e, n) {
  xg(t, "pre", e, n);
}
yt.pre = Wx;
function $c(t) {
  return $x(t) ? t() : t;
}
class Zx {
  // no need to use `$state` here since we are using createSubscriber
  #e = { width: 0, height: 0 };
  #t = !1;
  #n;
  #r;
  #o;
  // we use a derived here to extract the width so that if the width doesn't change we don't get a state update
  // which we would get if we would just use a getter since the version of the subscriber will be changing
  #i = /* @__PURE__ */ C(() => (c(this.#s)?.(), this.getSize().width));
  // we use a derived here to extract the height so that if the height doesn't change we don't get a state update
  // which we would get if we would just use a getter since the version of the subscriber will be changing
  #a = /* @__PURE__ */ C(() => (c(this.#s)?.(), this.getSize().height));
  // we need to use a derived here because the class will be created before the node is bound to the ref
  #s = /* @__PURE__ */ C(() => {
    const e = $c(this.#r);
    if (e)
      return Zr((n) => {
        if (!this.#o) return;
        const r = new this.#o.ResizeObserver((o) => {
          this.#t = !0;
          for (const i of o) {
            const s = this.#n.box === "content-box" ? i.contentBoxSize : i.borderBoxSize, a = Array.isArray(s) ? s : [s];
            this.#e.width = a.reduce((u, l) => Math.max(u, l.inlineSize), 0), this.#e.height = a.reduce((u, l) => Math.max(u, l.blockSize), 0);
          }
          n();
        });
        return r.observe(e), () => {
          this.#t = !1, r.disconnect();
        };
      });
  });
  constructor(e, n = { box: "border-box" }) {
    this.#o = n.window ?? bg, this.#n = n, this.#r = e, this.#e = { width: 0, height: 0 };
  }
  calculateSize() {
    const e = $c(this.#r);
    if (!e || !this.#o)
      return;
    const n = e.offsetWidth, r = e.offsetHeight;
    if (this.#n.box === "border-box")
      return { width: n, height: r };
    const o = this.#o.getComputedStyle(e), i = parseFloat(o.paddingLeft) + parseFloat(o.paddingRight), s = parseFloat(o.paddingTop) + parseFloat(o.paddingBottom), a = parseFloat(o.borderLeftWidth) + parseFloat(o.borderRightWidth), u = parseFloat(o.borderTopWidth) + parseFloat(o.borderBottomWidth), l = n - i - a, d = r - s - u;
    return { width: l, height: d };
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
class Yx {
  #e = () => {
  };
  #t = /* @__PURE__ */ C(() => this.#e());
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
function _o(t) {
  He(() => () => {
    t();
  });
}
function qx(t) {
  He(() => it(() => t()));
}
function Xx(t, e) {
  return setTimeout(e, t);
}
function bi(t) {
  sf().then(t);
}
const jx = 1, Ux = 9, Gx = 11;
function Ja(t) {
  return wi(t) && t.nodeType === jx && typeof t.nodeName == "string";
}
function _g(t) {
  return wi(t) && t.nodeType === Ux;
}
function Jx(t) {
  return wi(t) && t.constructor?.name === "VisualViewport";
}
function Qx(t) {
  return wi(t) && t.nodeType !== void 0;
}
function Cg(t) {
  return Qx(t) && t.nodeType === Gx && "host" in t;
}
function e_(t, e) {
  if (!t || !e || !Ja(t) || !Ja(e))
    return !1;
  const n = e.getRootNode?.();
  if (t === e || t.contains(e))
    return !0;
  if (n && Cg(n)) {
    let r = e;
    for (; r; ) {
      if (t === r)
        return !0;
      r = r.parentNode || r.host;
    }
  }
  return !1;
}
function t_(t) {
  return _g(t) ? t : Jx(t) ? t.document : t?.ownerDocument ?? document;
}
function Sg(t) {
  return Cg(t) ? Sg(t.host) : _g(t) ? t.defaultView ?? window : Ja(t) ? t.ownerDocument?.defaultView ?? window : window;
}
function n_(t) {
  let e = t.activeElement;
  for (; e?.shadowRoot; ) {
    const n = e.shadowRoot.activeElement;
    if (n === e)
      break;
    e = n;
  }
  return e;
}
class xi {
  element;
  #e = /* @__PURE__ */ C(() => this.element.current ? this.element.current.getRootNode() ?? document : document);
  get root() {
    return c(this.#e);
  }
  set root(e) {
    K(this.#e, e);
  }
  constructor(e) {
    typeof e == "function" ? this.element = ge(e) : this.element = e;
  }
  getDocument = () => t_(this.root);
  getWindow = () => this.getDocument().defaultView ?? window;
  getActiveElement = () => n_(this.root);
  isActiveElement = (e) => e === this.getActiveElement();
  getElementById(e) {
    return this.root.getElementById(e);
  }
  querySelector = (e) => this.root ? this.root.querySelector(e) : null;
  querySelectorAll = (e) => this.root ? this.root.querySelectorAll(e) : [];
  setTimeout = (e, n) => this.getWindow().setTimeout(e, n);
  clearTimeout = (e) => this.getWindow().clearTimeout(e);
}
function mr(t, e) {
  return {
    [d1()]: (n) => mg(t) ? (t.current = n, it(() => e?.(n)), () => {
      "isConnected" in n && n.isConnected || (t.current = null, e?.(null));
    }) : (t(n), it(() => e?.(n)), () => {
      "isConnected" in n && n.isConnected || (t(null), e?.(null));
    })
  };
}
function Qa(t) {
  return t ? "true" : "false";
}
function ws(t) {
  return t ? "" : void 0;
}
function Kc(t) {
  return t ? !0 : void 0;
}
function kg(t) {
  return t ? "open" : "closed";
}
function r_(t, e) {
  return e ? "mixed" : t ? "true" : "false";
}
class o_ {
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
function ou(t) {
  const e = new o_(t);
  return {
    ...e.attrs,
    selector: e.selector,
    getAttr: e.getAttr
  };
}
const Vo = "ArrowDown", Jr = "ArrowUp", Eg = "End", el = "Enter", i_ = "Escape", Pg = "Home", Ng = "PageDown", Tg = "PageUp", qi = " ", Wc = "Tab", Og = typeof document < "u", tl = s_();
function s_() {
  return Og && window?.navigator?.userAgent && (/iP(ad|hone|od)/.test(window.navigator.userAgent) || // The new iPad Pro Gen3 does not identify itself as iPad, but as Macintosh.
  window?.navigator?.maxTouchPoints > 2 && /iPad|Macintosh/.test(window?.navigator.userAgent));
}
function nl(t) {
  return t instanceof HTMLElement;
}
function a_(t) {
  return t instanceof Element || t instanceof SVGElement;
}
function l_(t) {
  return t !== null;
}
class u_ {
  #e;
  #t = null;
  constructor(e) {
    this.#e = e, _o(() => this.#n());
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
    this.#e.afterTick ? bi(n) : n();
  }
}
class c_ {
  #e;
  #t;
  #n;
  #r = /* @__PURE__ */ ye(!1);
  constructor(e) {
    this.#e = e, K(this.#r, e.open.current, !0), this.#t = e.enabled ?? !0, this.#n = new u_({ ref: this.#e.ref, afterTick: this.#e.open }), yt(() => this.#e.open.current, (n) => {
      n && K(this.#r, !0), this.#t && this.#n.run(() => {
        n === this.#e.open.current && (this.#e.open.current || K(this.#r, !1), this.#e.onComplete?.());
      });
    });
  }
  get shouldRender() {
    return c(this.#r);
  }
}
function Re() {
}
function Vn(t, e) {
  return `bits-${t}`;
}
function Ag(t, e) {
  ue(e, !0);
  const n = v(e, "children", 7);
  var r = {
    get children() {
      return n();
    },
    set children(s) {
      n(s), g();
    }
  }, o = de(), i = J(o);
  return f1(i, n, (s) => {
    var a = de(), u = J(a);
    Oe(u, () => n() ?? ze), O(s, a);
  }), O(t, o), ce(r);
}
se(Ag, { children: {} }, [], [], !0);
const d_ = new Er("BitsConfig");
function f_() {
  const t = new h_(null, {});
  return d_.getOr(t).opts;
}
class h_ {
  opts;
  constructor(e, n) {
    const r = g_(e, n);
    this.opts = {
      defaultPortalTo: r((o) => o.defaultPortalTo),
      defaultLocale: r((o) => o.defaultLocale)
    };
  }
}
function g_(t, e) {
  return (n) => ge(() => {
    const o = n(e)?.current;
    if (o !== void 0)
      return o;
    if (t !== null)
      return n(t.opts)?.current;
  });
}
function v_(t, e) {
  return (n) => {
    const r = f_();
    return ge(() => {
      const o = n();
      if (o !== void 0)
        return o;
      const i = t(r).current;
      return i !== void 0 ? i : e;
    });
  };
}
const p_ = v_((t) => t.defaultPortalTo, "body");
function rl(t, e) {
  ue(e, !0);
  let n = v(e, "to", 7), r = v(e, "children", 7), o = v(e, "disabled", 7);
  const i = p_(() => n()), s = Np();
  let a = /* @__PURE__ */ C(u);
  function u() {
    if (!Og || o()) return null;
    let y = null;
    return typeof i.current == "string" ? y = document.querySelector(i.current) : y = i.current, y;
  }
  let l;
  function d() {
    l && (df(l), l = null);
  }
  yt([() => c(a), () => o()], ([y, w]) => {
    if (!y || w) {
      d();
      return;
    }
    return l = Ml(Ag, { target: y, props: { children: r() }, context: s }), () => {
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
  }, h = de(), p = J(h);
  {
    var m = (y) => {
      var w = de(), b = J(w);
      Oe(b, () => r() ?? ze), O(y, w);
    };
    ie(p, (y) => {
      o() && y(m);
    });
  }
  return O(t, h), ce(f);
}
se(rl, { to: {}, children: {}, disabled: {} }, [], [], !0);
function Zc(t, e = 500) {
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
function Dg(t, e) {
  return t === e || t.contains(e);
}
function Ig(t) {
  return t?.ownerDocument ?? document;
}
function m_(t, e) {
  const { clientX: n, clientY: r } = t, o = e.getBoundingClientRect();
  return n < o.left || n > o.right || r < o.top || r > o.bottom;
}
var Mg = ["input:not([inert]):not([inert] *)", "select:not([inert]):not([inert] *)", "textarea:not([inert]):not([inert] *)", "a[href]:not([inert]):not([inert] *)", "button:not([inert]):not([inert] *)", "[tabindex]:not(slot):not([inert]):not([inert] *)", "audio[controls]:not([inert]):not([inert] *)", "video[controls]:not([inert]):not([inert] *)", '[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)', "details>summary:first-of-type:not([inert]):not([inert] *)", "details:not([inert]):not([inert] *)"], ol = /* @__PURE__ */ Mg.join(","), Lg = typeof Element > "u", po = Lg ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, bs = !Lg && Element.prototype.getRootNode ? function(t) {
  var e;
  return t == null || (e = t.getRootNode) === null || e === void 0 ? void 0 : e.call(t);
} : function(t) {
  return t?.ownerDocument;
}, xs = function(e, n) {
  var r;
  n === void 0 && (n = !0);
  var o = e == null || (r = e.getAttribute) === null || r === void 0 ? void 0 : r.call(e, "inert"), i = o === "" || o === "true", s = i || n && e && // closest does not exist on shadow roots, so we fall back to a manual
  // lookup upward, in case it is not defined.
  (typeof e.closest == "function" ? e.closest("[inert]") : xs(e.parentNode));
  return s;
}, y_ = function(e) {
  var n, r = e == null || (n = e.getAttribute) === null || n === void 0 ? void 0 : n.call(e, "contenteditable");
  return r === "" || r === "true";
}, Hg = function(e, n, r) {
  if (xs(e))
    return [];
  var o = Array.prototype.slice.apply(e.querySelectorAll(ol));
  return n && po.call(e, ol) && o.unshift(e), o = o.filter(r), o;
}, _s = function(e, n, r) {
  for (var o = [], i = Array.from(e); i.length; ) {
    var s = i.shift();
    if (!xs(s, !1))
      if (s.tagName === "SLOT") {
        var a = s.assignedElements(), u = a.length ? a : s.children, l = _s(u, !0, r);
        r.flatten ? o.push.apply(o, l) : o.push({
          scopeParent: s,
          candidates: l
        });
      } else {
        var d = po.call(s, ol);
        d && r.filter(s) && (n || !e.includes(s)) && o.push(s);
        var f = s.shadowRoot || // check for an undisclosed shadow
        typeof r.getShadowRoot == "function" && r.getShadowRoot(s), h = !xs(f, !1) && (!r.shadowRootFilter || r.shadowRootFilter(s));
        if (f && h) {
          var p = _s(f === !0 ? s.children : f.children, !0, r);
          r.flatten ? o.push.apply(o, p) : o.push({
            scopeParent: s,
            candidates: p
          });
        } else
          i.unshift.apply(i, s.children);
      }
  }
  return o;
}, Vg = function(e) {
  return !isNaN(parseInt(e.getAttribute("tabindex"), 10));
}, zg = function(e) {
  if (!e)
    throw new Error("No node provided");
  return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || y_(e)) && !Vg(e) ? 0 : e.tabIndex;
}, w_ = function(e, n) {
  var r = zg(e);
  return r < 0 && n && !Vg(e) ? 0 : r;
}, b_ = function(e, n) {
  return e.tabIndex === n.tabIndex ? e.documentOrder - n.documentOrder : e.tabIndex - n.tabIndex;
}, Rg = function(e) {
  return e.tagName === "INPUT";
}, x_ = function(e) {
  return Rg(e) && e.type === "hidden";
}, __ = function(e) {
  var n = e.tagName === "DETAILS" && Array.prototype.slice.apply(e.children).some(function(r) {
    return r.tagName === "SUMMARY";
  });
  return n;
}, C_ = function(e, n) {
  for (var r = 0; r < e.length; r++)
    if (e[r].checked && e[r].form === n)
      return e[r];
}, S_ = function(e) {
  if (!e.name)
    return !0;
  var n = e.form || bs(e), r = function(a) {
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
  var i = C_(o, e.form);
  return !i || i === e;
}, k_ = function(e) {
  return Rg(e) && e.type === "radio";
}, E_ = function(e) {
  return k_(e) && !S_(e);
}, P_ = function(e) {
  var n, r = e && bs(e), o = (n = r) === null || n === void 0 ? void 0 : n.host, i = !1;
  if (r && r !== e) {
    var s, a, u;
    for (i = !!((s = o) !== null && s !== void 0 && (a = s.ownerDocument) !== null && a !== void 0 && a.contains(o) || e != null && (u = e.ownerDocument) !== null && u !== void 0 && u.contains(e)); !i && o; ) {
      var l, d, f;
      r = bs(o), o = (l = r) === null || l === void 0 ? void 0 : l.host, i = !!((d = o) !== null && d !== void 0 && (f = d.ownerDocument) !== null && f !== void 0 && f.contains(o));
    }
  }
  return i;
}, Yc = function(e) {
  var n = e.getBoundingClientRect(), r = n.width, o = n.height;
  return r === 0 && o === 0;
}, N_ = function(e, n) {
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
  var s = po.call(e, "details>summary:first-of-type"), a = s ? e.parentElement : e;
  if (po.call(a, "details:not([open]) *"))
    return !0;
  if (!r || r === "full" || // full-native can run this branch when it falls through in case
  // Element#checkVisibility is unsupported
  r === "full-native" || r === "legacy-full") {
    if (typeof o == "function") {
      for (var u = e; e; ) {
        var l = e.parentElement, d = bs(e);
        if (l && !l.shadowRoot && o(l) === !0)
          return Yc(e);
        e.assignedSlot ? e = e.assignedSlot : !l && d !== e.ownerDocument ? e = d.host : e = l;
      }
      e = u;
    }
    if (P_(e))
      return !e.getClientRects().length;
    if (r !== "legacy-full")
      return !0;
  } else if (r === "non-zero-area")
    return Yc(e);
  return !1;
}, T_ = function(e) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))
    for (var n = e.parentElement; n; ) {
      if (n.tagName === "FIELDSET" && n.disabled) {
        for (var r = 0; r < n.children.length; r++) {
          var o = n.children.item(r);
          if (o.tagName === "LEGEND")
            return po.call(n, "fieldset[disabled] *") ? !0 : !o.contains(e);
        }
        return !0;
      }
      n = n.parentElement;
    }
  return !1;
}, Cs = function(e, n) {
  return !(n.disabled || x_(n) || N_(n, e) || // For a details element with a summary, the summary element gets the focus
  __(n) || T_(n));
}, qc = function(e, n) {
  return !(E_(n) || zg(n) < 0 || !Cs(e, n));
}, O_ = function(e) {
  var n = parseInt(e.getAttribute("tabindex"), 10);
  return !!(isNaN(n) || n >= 0);
}, Fg = function(e) {
  var n = [], r = [];
  return e.forEach(function(o, i) {
    var s = !!o.scopeParent, a = s ? o.scopeParent : o, u = w_(a, s), l = s ? Fg(o.candidates) : a;
    u === 0 ? s ? n.push.apply(n, l) : n.push(a) : r.push({
      documentOrder: i,
      tabIndex: u,
      item: o,
      isScope: s,
      content: l
    });
  }), r.sort(b_).reduce(function(o, i) {
    return i.isScope ? o.push.apply(o, i.content) : o.push(i.content), o;
  }, []).concat(n);
}, A_ = function(e, n) {
  n = n || {};
  var r;
  return n.getShadowRoot ? r = _s([e], n.includeContainer, {
    filter: qc.bind(null, n),
    flatten: !1,
    getShadowRoot: n.getShadowRoot,
    shadowRootFilter: O_
  }) : r = Hg(e, n.includeContainer, qc.bind(null, n)), Fg(r);
}, D_ = function(e, n) {
  n = n || {};
  var r;
  return n.getShadowRoot ? r = _s([e], n.includeContainer, {
    filter: Cs.bind(null, n),
    flatten: !0,
    getShadowRoot: n.getShadowRoot
  }) : r = Hg(e, n.includeContainer, Cs.bind(null, n)), r;
}, I_ = /* @__PURE__ */ Mg.concat("iframe:not([inert]):not([inert] *)").join(","), M_ = function(e, n) {
  if (n = n || {}, !e)
    throw new Error("No node provided");
  return po.call(e, I_) === !1 ? !1 : Cs(n, e);
};
function L_(t, e, n = !0) {
  if (!(t.length === 0 || e < 0 || e >= t.length))
    return t.length === 1 && e === 0 ? t[0] : e === t.length - 1 ? n ? t[0] : void 0 : t[e + 1];
}
function H_(t, e, n = !0) {
  if (!(t.length === 0 || e < 0 || e >= t.length))
    return t.length === 1 && e === 0 ? t[0] : e === 0 ? n ? t[t.length - 1] : void 0 : t[e - 1];
}
function V_(t, e, n, r = !0) {
  if (t.length === 0 || e < 0 || e >= t.length)
    return;
  let o = e + n;
  return r ? o = (o % t.length + t.length) % t.length : o = Math.max(0, Math.min(o, t.length - 1)), t[o];
}
function z_(t, e, n, r = !0) {
  if (t.length === 0 || e < 0 || e >= t.length)
    return;
  let o = e - n;
  return r ? o = (o % t.length + t.length) % t.length : o = Math.max(0, Math.min(o, t.length - 1)), t[o];
}
function iu(t, e, n) {
  const r = e.toLowerCase();
  if (r.endsWith(" ")) {
    const f = r.slice(0, -1);
    if (t.filter((y) => y.toLowerCase().startsWith(f)).length <= 1)
      return iu(t, f, n);
    const p = n?.toLowerCase();
    if (p && p.startsWith(f) && p.charAt(f.length) === " " && e.trim() === f)
      return n;
    const m = t.filter((y) => y.toLowerCase().startsWith(r));
    if (m.length > 0) {
      const y = n ? t.indexOf(n) : -1;
      return Xc(m, Math.max(y, 0)).find((S) => S !== n) || n;
    }
  }
  const i = e.length > 1 && Array.from(e).every((f) => f === e[0]) ? e[0] : e, s = i.toLowerCase(), a = n ? t.indexOf(n) : -1;
  let u = Xc(t, Math.max(a, 0));
  i.length === 1 && (u = u.filter((f) => f !== n));
  const d = u.find((f) => f?.toLowerCase().startsWith(s));
  return d !== n ? d : void 0;
}
function Xc(t, e) {
  return t.map((n, r) => t[(e + r) % t.length]);
}
const R_ = { afterMs: 1e4, onChange: Re };
function Bg(t, e) {
  const { afterMs: n, onChange: r, getWindow: o } = { ...R_, ...e };
  let i = null, s = /* @__PURE__ */ ye(ht(t));
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
  }), ge(() => c(s), (u) => {
    K(s, u, !0), r?.(u), i && o().clearTimeout(i), i = a();
  });
}
class F_ {
  #e;
  #t;
  #n = /* @__PURE__ */ C(() => this.#e.onMatch ? this.#e.onMatch : (e) => e.focus());
  #r = /* @__PURE__ */ C(() => this.#e.getCurrentItem ? this.#e.getCurrentItem : this.#e.getActiveElement);
  constructor(e) {
    this.#e = e, this.#t = Bg("", { afterMs: 1e3, getWindow: e.getWindow }), this.handleTypeaheadSearch = this.handleTypeaheadSearch.bind(this), this.resetTypeahead = this.resetTypeahead.bind(this);
  }
  handleTypeaheadSearch(e, n) {
    if (!n.length) return;
    this.#t.current = this.#t.current + e;
    const r = c(this.#r)(), o = n.find((u) => u === r)?.textContent?.trim() ?? "", i = n.map((u) => u.textContent?.trim() ?? ""), s = iu(i, this.#t.current, o), a = n.find((u) => u.textContent?.trim() === s);
    return a && c(this.#n)(a), a;
  }
  resetTypeahead() {
    this.#t.current = "";
  }
  get search() {
    return this.#t.current;
  }
}
const B_ = "data-context-menu-trigger", $_ = "data-context-menu-content";
ou({
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
class su {
  static create(e) {
    return new su(e);
  }
  opts;
  #e;
  #t;
  #n = { pointerdown: !1 };
  #r = !1;
  #o = !1;
  #i = void 0;
  #a;
  #s = Re;
  constructor(e) {
    this.opts = e, this.#t = e.interactOutsideBehavior, this.#e = e.onInteractOutside, this.#a = e.onFocusOutside, He(() => {
      this.#i = Ig(this.opts.ref.current);
    });
    let n = Re;
    const r = () => {
      this.#p(), globalThis.bitsDismissableLayers.delete(this), this.#d.destroy(), n();
    };
    yt([() => this.opts.enabled.current, () => this.opts.ref.current], () => {
      if (!(!this.opts.enabled.current || !this.opts.ref.current))
        return Xx(1, () => {
          this.opts.ref.current && (globalThis.bitsDismissableLayers.set(this, this.#t), n(), n = this.#u());
        }), r;
    }), _o(() => {
      this.#p.destroy(), globalThis.bitsDismissableLayers.delete(this), this.#d.destroy(), this.#s(), n();
    });
  }
  #l = (e) => {
    e.defaultPrevented || this.opts.ref.current && bi(() => {
      !this.opts.ref.current || this.#y(e.target) || e.target && !this.#o && this.#a.current?.(e);
    });
  };
  #u() {
    return Bo(
      /**
       * CAPTURE INTERACTION START
       * mark interaction-start event as intercepted.
       * mark responsible layer during interaction start
       * to avoid checking if is responsible layer during interaction end
       * when a new floating element may have been opened.
       */
      gt(this.#i, "pointerdown", Bo(this.#f, this.#h), { capture: !0 }),
      /**
       * BUBBLE INTERACTION START
       * Mark interaction-start event as non-intercepted. Debounce `onInteractOutsideStart`
       * to avoid prematurely checking if other events were intercepted.
       */
      gt(this.#i, "pointerdown", Bo(this.#g, this.#d)),
      /**
       * HANDLE FOCUS OUTSIDE
       */
      gt(this.#i, "focusin", this.#l)
    );
  }
  #c = (e) => {
    let n = e;
    n.defaultPrevented && (n = jc(e)), this.#e.current(e);
  };
  #d = Zc(
    (e) => {
      if (!this.opts.ref.current) {
        this.#s();
        return;
      }
      const n = this.opts.isValidEvent.current(e, this.opts.ref.current) || Z_(e, this.opts.ref.current);
      if (!this.#r || this.#w() || !n) {
        this.#s();
        return;
      }
      let r = e;
      if (r.defaultPrevented && (r = jc(r)), this.#t.current !== "close" && this.#t.current !== "defer-otherwise-close") {
        this.#s();
        return;
      }
      e.pointerType === "touch" ? (this.#s(), this.#s = gt(this.#i, "click", this.#c, { once: !0 })) : this.#e.current(r);
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
    this.opts.ref.current && (this.#r = W_(this.opts.ref.current));
  };
  #y = (e) => this.opts.ref.current ? Dg(this.opts.ref.current, e) : !1;
  #p = Zc(
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
  #v = () => {
    this.#o = !1;
  };
  props = {
    onfocuscapture: this.#m,
    onblurcapture: this.#v
  };
}
function K_(t = [...globalThis.bitsDismissableLayers]) {
  return t.findLast(([e, { current: n }]) => n === "close" || n === "ignore");
}
function W_(t) {
  const e = [...globalThis.bitsDismissableLayers], n = K_(e);
  if (n) return n[0].opts.ref.current === t;
  const [r] = e[0];
  return r.opts.ref.current === t;
}
function Z_(t, e) {
  const n = t.target;
  if (!a_(n)) return !1;
  const r = !!n.closest(`[${B_}]`);
  if ("button" in t && t.button > 0 && !r) return !1;
  if ("button" in t && t.button === 0 && r) return !0;
  const o = !!e.closest(`[${$_}]`);
  return r && o ? !1 : Ig(n).documentElement.contains(n) && !Dg(e, n) && m_(t, e);
}
function jc(t) {
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
function $g(t, e) {
  ue(e, !0);
  let n = v(e, "interactOutsideBehavior", 7, "close"), r = v(e, "onInteractOutside", 7, Re), o = v(e, "onFocusOutside", 7, Re), i = v(e, "id", 7), s = v(e, "children", 7), a = v(e, "enabled", 7), u = v(e, "isValidEvent", 7, () => !1), l = v(e, "ref", 7);
  const d = su.create({
    id: ge(() => i()),
    interactOutsideBehavior: ge(() => n()),
    onInteractOutside: ge(() => r()),
    enabled: ge(() => a()),
    onFocusOutside: ge(() => o()),
    isValidEvent: ge(() => u()),
    ref: l()
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
    set onInteractOutside(m = Re) {
      r(m), g();
    },
    get onFocusOutside() {
      return o();
    },
    set onFocusOutside(m = Re) {
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
      return u();
    },
    set isValidEvent(m = () => !1) {
      u(m), g();
    },
    get ref() {
      return l();
    },
    set ref(m) {
      l(m), g();
    }
  }, h = de(), p = J(h);
  return Oe(p, () => s() ?? ze, () => ({ props: d.props })), O(t, h), ce(f);
}
se(
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
class au {
  static create(e) {
    return new au(e);
  }
  opts;
  domContext;
  constructor(e) {
    this.opts = e, this.domContext = new xi(this.opts.ref);
    let n = Re;
    yt(() => e.enabled.current, (r) => (r && (globalThis.bitsEscapeLayers.set(this, e.escapeKeydownBehavior), n = this.#e()), () => {
      n(), globalThis.bitsEscapeLayers.delete(this);
    }));
  }
  #e = () => gt(this.domContext.getDocument(), "keydown", this.#t, { passive: !1 });
  #t = (e) => {
    if (e.key !== i_ || !Y_(this)) return;
    const n = new KeyboardEvent(e.type, e);
    e.preventDefault();
    const r = this.opts.escapeKeydownBehavior.current;
    r !== "close" && r !== "defer-otherwise-close" || this.opts.onEscapeKeydown.current(n);
  };
}
function Y_(t) {
  const e = [...globalThis.bitsEscapeLayers], n = e.findLast(([o, { current: i }]) => i === "close" || i === "ignore");
  if (n) return n[0] === t;
  const [r] = e[0];
  return r === t;
}
function Kg(t, e) {
  ue(e, !0);
  let n = v(e, "escapeKeydownBehavior", 7, "close"), r = v(e, "onEscapeKeydown", 7, Re), o = v(e, "children", 7), i = v(e, "enabled", 7), s = v(e, "ref", 7);
  au.create({
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
    set onEscapeKeydown(d = Re) {
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
  }, u = de(), l = J(u);
  return Oe(l, () => o() ?? ze), O(t, u), ce(a);
}
se(
  Kg,
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
class lu {
  static instance;
  #e = On([]);
  #t = /* @__PURE__ */ new WeakMap();
  #n = /* @__PURE__ */ new WeakMap();
  static getInstance() {
    return this.instance || (this.instance = new lu()), this.instance;
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
class uu {
  #e = !1;
  #t = null;
  #n = lu.getInstance();
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
      if (!a) return;
      if (e.contains(a))
        this.#n.setFocusMemory(this, a);
      else {
        const l = this.#n.getFocusMemory(this);
        if (l && e.contains(l) && M_(l))
          s.preventDefault(), l.focus();
        else {
          const d = this.#c(), f = this.#d()[0];
          (d || f || e).focus();
        }
      }
    }, o = (s) => {
      if (!this.#o.loop || this.#e || s.key !== "Tab" || !this.#n.isActiveScope(this)) return;
      const a = this.#u();
      if (a.length === 0) return;
      const u = a[0], l = a[a.length - 1];
      !s.shiftKey && n.activeElement === l ? (s.preventDefault(), u.focus()) : s.shiftKey && n.activeElement === u && (s.preventDefault(), l.focus());
    };
    this.#r.push(gt(n, "focusin", r, { capture: !0 }), gt(e, "keydown", o));
    const i = new MutationObserver(() => {
      const s = this.#n.getFocusMemory(this);
      if (s && !e.contains(s)) {
        const a = this.#c(), u = this.#d()[0], l = a || u;
        l ? (l.focus(), this.#n.setFocusMemory(this, l)) : e.focus();
      }
    });
    i.observe(e, { childList: !0, subtree: !0 }), this.#r.push(() => i.disconnect());
  }
  #u() {
    return this.#t ? A_(this.#t, { includeContainer: !1, getShadowRoot: !0 }) : [];
  }
  #c() {
    return this.#u()[0] || null;
  }
  #d() {
    return this.#t ? D_(this.#t, { includeContainer: !1, getShadowRoot: !0 }) : [];
  }
  static use(e) {
    let n = null;
    return yt([() => e.ref.current, () => e.enabled.current], ([r, o]) => {
      r && o ? (n || (n = new uu(e)), n.mount(r)) : n && (n.unmount(), n = null);
    }), _o(() => {
      n?.unmount();
    }), {
      get props() {
        return { tabindex: -1 };
      }
    };
  }
}
function Wg(t, e) {
  ue(e, !0);
  let n = v(e, "enabled", 7, !1), r = v(e, "trapFocus", 7, !1), o = v(e, "loop", 7, !1), i = v(e, "onCloseAutoFocus", 7, Re), s = v(e, "onOpenAutoFocus", 7, Re), a = v(e, "focusScope", 7), u = v(e, "ref", 7);
  const l = uu.use({
    enabled: ge(() => n()),
    trap: ge(() => r()),
    loop: o(),
    onCloseAutoFocus: ge(() => i()),
    onOpenAutoFocus: ge(() => s()),
    ref: u()
  });
  var d = {
    get enabled() {
      return n();
    },
    set enabled(p = !1) {
      n(p), g();
    },
    get trapFocus() {
      return r();
    },
    set trapFocus(p = !1) {
      r(p), g();
    },
    get loop() {
      return o();
    },
    set loop(p = !1) {
      o(p), g();
    },
    get onCloseAutoFocus() {
      return i();
    },
    set onCloseAutoFocus(p = Re) {
      i(p), g();
    },
    get onOpenAutoFocus() {
      return s();
    },
    set onOpenAutoFocus(p = Re) {
      s(p), g();
    },
    get focusScope() {
      return a();
    },
    set focusScope(p) {
      a(p), g();
    },
    get ref() {
      return u();
    },
    set ref(p) {
      u(p), g();
    }
  }, f = de(), h = J(f);
  return Oe(h, () => a() ?? ze, () => ({ props: l.props })), O(t, f), ce(d);
}
se(
  Wg,
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
class cu {
  static create(e) {
    return new cu(e);
  }
  opts;
  domContext;
  #e = Re;
  constructor(e) {
    this.opts = e, this.domContext = new xi(e.ref);
    let n = Re;
    yt(() => this.opts.enabled.current, (r) => (r && (globalThis.bitsTextSelectionLayers.set(this, this.opts.enabled), n(), n = this.#t()), () => {
      n(), this.#r(), globalThis.bitsTextSelectionLayers.delete(this);
    }));
  }
  #t() {
    return Bo(gt(this.domContext.getDocument(), "pointerdown", this.#n), gt(this.domContext.getDocument(), "pointerup", yg(this.#r, this.opts.onPointerUp.current)));
  }
  #n = (e) => {
    const n = this.opts.ref.current, r = e.target;
    !nl(n) || !nl(r) || !this.opts.enabled.current || !X_(this) || !e_(n, r) || (this.opts.onPointerDown.current(e), !e.defaultPrevented && (this.#e = q_(n, this.domContext.getDocument().body)));
  };
  #r = () => {
    this.#e(), this.#e = Re;
  };
}
const Uc = (t) => t.style.userSelect || t.style.webkitUserSelect;
function q_(t, e) {
  const n = Uc(e), r = Uc(t);
  return Ii(e, "none"), Ii(t, "text"), () => {
    Ii(e, n), Ii(t, r);
  };
}
function Ii(t, e) {
  t.style.userSelect = e, t.style.webkitUserSelect = e;
}
function X_(t) {
  const e = [...globalThis.bitsTextSelectionLayers];
  if (!e.length) return !1;
  const n = e.at(-1);
  return n ? n[0] === t : !1;
}
function Zg(t, e) {
  ue(e, !0);
  let n = v(e, "preventOverflowTextSelection", 7, !0), r = v(e, "onPointerDown", 7, Re), o = v(e, "onPointerUp", 7, Re), i = v(e, "id", 7), s = v(e, "children", 7), a = v(e, "enabled", 7), u = v(e, "ref", 7);
  cu.create({
    id: ge(() => i()),
    onPointerDown: ge(() => r()),
    onPointerUp: ge(() => o()),
    enabled: ge(() => a() && n()),
    ref: u()
  });
  var l = {
    get preventOverflowTextSelection() {
      return n();
    },
    set preventOverflowTextSelection(h = !0) {
      n(h), g();
    },
    get onPointerDown() {
      return r();
    },
    set onPointerDown(h = Re) {
      r(h), g();
    },
    get onPointerUp() {
      return o();
    },
    set onPointerUp(h = Re) {
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
      return u();
    },
    set ref(h) {
      u(h), g();
    }
  }, d = de(), f = J(d);
  return Oe(f, () => s() ?? ze), O(t, d), ce(l);
}
se(
  Zg,
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
function Ss(t = "bits") {
  return globalThis.bitsIdCounter.current++, `${t}-${globalThis.bitsIdCounter.current}`;
}
class j_ {
  #e;
  #t = 0;
  #n = /* @__PURE__ */ ye();
  #r;
  constructor(e) {
    this.#e = e;
  }
  #o() {
    this.#t -= 1, this.#r && this.#t <= 0 && (this.#r(), K(this.#n, void 0), this.#r = void 0);
  }
  get(...e) {
    return this.#t += 1, c(this.#n) === void 0 && (this.#r = Yr(() => {
      K(this.#n, this.#e(...e), !0);
    })), He(() => () => {
      this.#o();
    }), c(this.#n);
  }
}
const Xi = new x2();
let Mi = /* @__PURE__ */ ye(null), xa = null, Oo = null, Ao = !1;
const Gc = ge(() => {
  for (const t of Xi.values())
    if (t) return !0;
  return !1;
});
let _a = null;
const U_ = new j_(() => {
  function t() {
    document.body.setAttribute("style", c(Mi) ?? ""), document.body.style.removeProperty("--scrollbar-width"), tl && xa?.(), K(Mi, null);
  }
  function e() {
    Oo !== null && (window.clearTimeout(Oo), Oo = null);
  }
  function n(o, i) {
    e(), Ao = !0, _a = Date.now();
    const s = _a, a = () => {
      Oo = null, _a === s && (Yg(Xi) ? Ao = !1 : (Ao = !1, i()));
    }, u = o === null ? 24 : o;
    Oo = window.setTimeout(a, u);
  }
  function r() {
    c(Mi) === null && Xi.size === 0 && !Ao && K(Mi, document.body.getAttribute("style"), !0);
  }
  return yt(() => Gc.current, () => {
    if (!Gc.current) return;
    r(), Ao = !1;
    const o = getComputedStyle(document.documentElement), i = getComputedStyle(document.body), s = o.scrollbarGutter?.includes("stable") || i.scrollbarGutter?.includes("stable"), a = window.innerWidth - document.documentElement.clientWidth, l = {
      padding: Number.parseInt(i.paddingRight ?? "0", 10) + a,
      margin: Number.parseInt(i.marginRight ?? "0", 10)
    };
    a > 0 && !s && (document.body.style.paddingRight = `${l.padding}px`, document.body.style.marginRight = `${l.margin}px`, document.body.style.setProperty("--scrollbar-width", `${a}px`)), document.body.style.overflow = "hidden", tl && (xa = gt(
      document,
      "touchmove",
      (d) => {
        d.target === document.documentElement && (d.touches.length > 1 || d.preventDefault());
      },
      { passive: !1 }
    )), bi(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }), _o(() => () => {
    xa?.();
  }), {
    get lockMap() {
      return Xi;
    },
    resetBodyStyle: t,
    scheduleCleanupIfNoNewLocks: n,
    cancelPendingCleanup: e,
    ensureInitialStyleCaptured: r
  };
});
class G_ {
  #e = Ss();
  #t;
  #n = () => null;
  #r;
  locked;
  constructor(e, n = () => null) {
    this.#t = e, this.#n = n, this.#r = U_.get(), this.#r && (this.#r.cancelPendingCleanup(), this.#r.ensureInitialStyleCaptured(), this.#r.lockMap.set(this.#e, this.#t ?? !1), this.locked = ge(() => this.#r.lockMap.get(this.#e) ?? !1, (r) => this.#r.lockMap.set(this.#e, r)), _o(() => {
      if (this.#r.lockMap.delete(this.#e), Yg(this.#r.lockMap)) return;
      const r = this.#n();
      this.#r.scheduleCleanupIfNoNewLocks(r, () => {
        this.#r.resetBodyStyle();
      });
    }));
  }
}
function Yg(t) {
  for (const [e, n] of t)
    if (n) return !0;
  return !1;
}
function il(t, e) {
  ue(e, !0);
  let n = v(e, "preventScroll", 7, !0), r = v(e, "restoreScrollDelay", 7, null);
  n() && new G_(n(), () => r());
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
se(il, { preventScroll: {}, restoreScrollDelay: {} }, [], [], !0);
const J_ = ou({
  component: "checkbox",
  parts: ["root", "group", "group-label", "input"]
}), Q_ = new Er("Checkbox.Group"), qg = new Er("Checkbox.Root");
class du {
  static create(e, n = null) {
    return qg.set(new du(e, n));
  }
  opts;
  group;
  #e = /* @__PURE__ */ C(() => this.group && this.group.opts.name.current ? this.group.opts.name.current : this.opts.name.current);
  get trueName() {
    return c(this.#e);
  }
  set trueName(e) {
    K(this.#e, e);
  }
  #t = /* @__PURE__ */ C(() => this.group && this.group.opts.required.current ? !0 : this.opts.required.current);
  get trueRequired() {
    return c(this.#t);
  }
  set trueRequired(e) {
    K(this.#t, e);
  }
  #n = /* @__PURE__ */ C(() => this.group && this.group.opts.disabled.current ? !0 : this.opts.disabled.current);
  get trueDisabled() {
    return c(this.#n);
  }
  set trueDisabled(e) {
    K(this.#n, e);
  }
  #r = /* @__PURE__ */ C(() => this.group && this.group.opts.readonly.current ? !0 : this.opts.readonly.current);
  get trueReadonly() {
    return c(this.#r);
  }
  set trueReadonly(e) {
    K(this.#r, e);
  }
  attachment;
  constructor(e, n) {
    this.opts = e, this.group = n, this.attachment = mr(this.opts.ref), this.onkeydown = this.onkeydown.bind(this), this.onclick = this.onclick.bind(this), yt.pre(
      [
        () => kl(this.group?.opts.value.current),
        () => this.opts.value.current
      ],
      ([r, o]) => {
        !r || !o || (this.opts.checked.current = r.includes(o));
      }
    ), yt.pre(() => this.opts.checked.current, (r) => {
      this.group && (r ? this.group?.addValue(this.opts.value.current) : this.group?.removeValue(this.opts.value.current));
    });
  }
  onkeydown(e) {
    if (!(this.trueDisabled || this.trueReadonly)) {
      if (e.key === el) {
        e.preventDefault(), this.opts.type.current === "submit" && e.currentTarget.closest("form")?.requestSubmit();
        return;
      }
      e.key === qi && (e.preventDefault(), this.#o());
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
  #i = /* @__PURE__ */ C(() => ({
    checked: this.opts.checked.current,
    indeterminate: this.opts.indeterminate.current
  }));
  get snippetProps() {
    return c(this.#i);
  }
  set snippetProps(e) {
    K(this.#i, e);
  }
  #a = /* @__PURE__ */ C(() => ({
    id: this.opts.id.current,
    role: "checkbox",
    type: this.opts.type.current,
    disabled: this.trueDisabled,
    "aria-checked": r_(this.opts.checked.current, this.opts.indeterminate.current),
    "aria-required": Qa(this.trueRequired),
    "aria-readonly": Qa(this.trueReadonly),
    "data-disabled": ws(this.trueDisabled),
    "data-readonly": ws(this.trueReadonly),
    "data-state": e7(this.opts.checked.current, this.opts.indeterminate.current),
    [J_.root]: "",
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
class fu {
  static create() {
    return new fu(qg.get());
  }
  root;
  #e = /* @__PURE__ */ C(() => this.root.group ? !!(this.root.opts.value.current !== void 0 && this.root.group.opts.value.current.includes(this.root.opts.value.current)) : this.root.opts.checked.current);
  get trueChecked() {
    return c(this.#e);
  }
  set trueChecked(e) {
    K(this.#e, e);
  }
  #t = /* @__PURE__ */ C(() => !!this.root.trueName);
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
    nl(this.root.opts.ref.current) && this.root.opts.ref.current.focus();
  }
  #n = /* @__PURE__ */ C(() => ({
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
function e7(t, e) {
  return e ? "indeterminate" : t ? "checked" : "unchecked";
}
var t7 = /* @__PURE__ */ ne("<input/>"), n7 = /* @__PURE__ */ ne("<input/>");
function hu(t, e) {
  ue(e, !0);
  let n = v(e, "value", 15), r = /* @__PURE__ */ Le(e, ["$$slots", "$$events", "$$legacy", "$$host", "value"]);
  const o = /* @__PURE__ */ C(() => Mn(r, {
    "aria-hidden": "true",
    tabindex: -1,
    style: Rx
  }));
  var i = {
    get value() {
      return n();
    },
    set value(d) {
      n(d), g();
    }
  }, s = de(), a = J(s);
  {
    var u = (d) => {
      var f = t7();
      Ge(f, () => ({ ...c(o), value: n() }), void 0, void 0, void 0, void 0, !0), O(d, f);
    }, l = (d) => {
      var f = n7();
      Ge(f, () => ({ ...c(o) }), void 0, void 0, void 0, void 0, !0), rs(f, n), O(d, f);
    };
    ie(a, (d) => {
      c(o).type === "checkbox" ? d(u) : d(l, !1);
    });
  }
  return O(t, s), ce(i);
}
se(hu, { value: {} }, [], [], !0);
function Xg(t, e) {
  ue(e, !1);
  const n = fu.create();
  Hl();
  var r = de(), o = J(r);
  {
    var i = (s) => {
      hu(s, Ve(() => n.props));
    };
    ie(o, (s) => {
      n.shouldRender && s(i);
    });
  }
  O(t, r), ce();
}
se(Xg, {}, [], [], !0);
var r7 = /* @__PURE__ */ ne("<button><!></button>"), o7 = /* @__PURE__ */ ne("<!> <!>", 1);
function jg(t, e) {
  const n = ai();
  ue(e, !0);
  let r = v(e, "checked", 15, !1), o = v(e, "ref", 15, null), i = v(e, "onCheckedChange", 7), s = v(e, "children", 7), a = v(e, "disabled", 7, !1), u = v(e, "required", 7, !1), l = v(e, "name", 23, () => {
  }), d = v(e, "value", 7, "on"), f = v(e, "id", 23, () => Vn(n)), h = v(e, "indeterminate", 15, !1), p = v(e, "onIndeterminateChange", 7), m = v(e, "child", 7), y = v(e, "type", 7, "button"), w = v(e, "readonly", 7), b = /* @__PURE__ */ Le(e, [
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
  const S = Q_.getOr(null);
  S && d() && (S.opts.value.current.includes(d()) ? r(!0) : r(!1)), yt.pre(() => d(), () => {
    S && d() && (S.opts.value.current.includes(d()) ? r(!0) : r(!1));
  });
  const E = du.create(
    {
      checked: ge(() => r(), (N) => {
        r(N), i()?.(N);
      }),
      disabled: ge(() => a() ?? !1),
      required: ge(() => u()),
      name: ge(() => l()),
      value: ge(() => d()),
      id: ge(() => f()),
      ref: ge(() => o(), (N) => o(N)),
      indeterminate: ge(() => h(), (N) => {
        h(N), p()?.(N);
      }),
      type: ge(() => y()),
      readonly: ge(() => !!w())
    },
    S
  ), x = /* @__PURE__ */ C(() => Mn({ ...b }, E.props));
  var _ = {
    get checked() {
      return r();
    },
    set checked(N = !1) {
      r(N), g();
    },
    get ref() {
      return o();
    },
    set ref(N = null) {
      o(N), g();
    },
    get onCheckedChange() {
      return i();
    },
    set onCheckedChange(N) {
      i(N), g();
    },
    get children() {
      return s();
    },
    set children(N) {
      s(N), g();
    },
    get disabled() {
      return a();
    },
    set disabled(N = !1) {
      a(N), g();
    },
    get required() {
      return u();
    },
    set required(N = !1) {
      u(N), g();
    },
    get name() {
      return l();
    },
    set name(N = void 0) {
      l(N), g();
    },
    get value() {
      return d();
    },
    set value(N = "on") {
      d(N), g();
    },
    get id() {
      return f();
    },
    set id(N = Vn(n)) {
      f(N), g();
    },
    get indeterminate() {
      return h();
    },
    set indeterminate(N = !1) {
      h(N), g();
    },
    get onIndeterminateChange() {
      return p();
    },
    set onIndeterminateChange(N) {
      p(N), g();
    },
    get child() {
      return m();
    },
    set child(N) {
      m(N), g();
    },
    get type() {
      return y();
    },
    set type(N = "button") {
      y(N), g();
    },
    get readonly() {
      return w();
    },
    set readonly(N) {
      w(N), g();
    }
  }, T = o7(), I = J(T);
  {
    var B = (N) => {
      var k = de(), D = J(k);
      {
        let P = /* @__PURE__ */ C(() => ({ props: c(x), ...E.snippetProps }));
        Oe(D, m, () => c(P));
      }
      O(N, k);
    }, $ = (N) => {
      var k = r7();
      Ge(k, () => ({ ...c(x) }));
      var D = Z(k);
      Oe(D, () => s() ?? ze, () => E.snippetProps), W(k), O(N, k);
    };
    ie(I, (N) => {
      m() ? N(B) : N($, !1);
    });
  }
  var H = z(I, 2);
  return Xg(H, {}), O(t, T), ce(_);
}
se(
  jg,
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
const i7 = ["top", "right", "bottom", "left"], wr = Math.min, Xt = Math.max, ks = Math.round, Li = Math.floor, Ln = (t) => ({
  x: t,
  y: t
}), s7 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, a7 = {
  start: "end",
  end: "start"
};
function sl(t, e, n) {
  return Xt(t, wr(e, n));
}
function rr(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function or(t) {
  return t.split("-")[0];
}
function Co(t) {
  return t.split("-")[1];
}
function gu(t) {
  return t === "x" ? "y" : "x";
}
function vu(t) {
  return t === "y" ? "height" : "width";
}
const l7 = /* @__PURE__ */ new Set(["top", "bottom"]);
function An(t) {
  return l7.has(or(t)) ? "y" : "x";
}
function pu(t) {
  return gu(An(t));
}
function u7(t, e, n) {
  n === void 0 && (n = !1);
  const r = Co(t), o = pu(t), i = vu(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return e.reference[i] > e.floating[i] && (s = Es(s)), [s, Es(s)];
}
function c7(t) {
  const e = Es(t);
  return [al(t), e, al(e)];
}
function al(t) {
  return t.replace(/start|end/g, (e) => a7[e]);
}
const Jc = ["left", "right"], Qc = ["right", "left"], d7 = ["top", "bottom"], f7 = ["bottom", "top"];
function h7(t, e, n) {
  switch (t) {
    case "top":
    case "bottom":
      return n ? e ? Qc : Jc : e ? Jc : Qc;
    case "left":
    case "right":
      return e ? d7 : f7;
    default:
      return [];
  }
}
function g7(t, e, n, r) {
  const o = Co(t);
  let i = h7(or(t), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), e && (i = i.concat(i.map(al)))), i;
}
function Es(t) {
  return t.replace(/left|right|bottom|top/g, (e) => s7[e]);
}
function v7(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function Ug(t) {
  return typeof t != "number" ? v7(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function Ps(t) {
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
function ed(t, e, n) {
  let {
    reference: r,
    floating: o
  } = t;
  const i = An(e), s = pu(e), a = vu(s), u = or(e), l = i === "y", d = r.x + r.width / 2 - o.width / 2, f = r.y + r.height / 2 - o.height / 2, h = r[a] / 2 - o[a] / 2;
  let p;
  switch (u) {
    case "top":
      p = {
        x: d,
        y: r.y - o.height
      };
      break;
    case "bottom":
      p = {
        x: d,
        y: r.y + r.height
      };
      break;
    case "right":
      p = {
        x: r.x + r.width,
        y: f
      };
      break;
    case "left":
      p = {
        x: r.x - o.width,
        y: f
      };
      break;
    default:
      p = {
        x: r.x,
        y: r.y
      };
  }
  switch (Co(e)) {
    case "start":
      p[s] -= h * (n && l ? -1 : 1);
      break;
    case "end":
      p[s] += h * (n && l ? -1 : 1);
      break;
  }
  return p;
}
const p7 = async (t, e, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: i = [],
    platform: s
  } = n, a = i.filter(Boolean), u = await (s.isRTL == null ? void 0 : s.isRTL(e));
  let l = await s.getElementRects({
    reference: t,
    floating: e,
    strategy: o
  }), {
    x: d,
    y: f
  } = ed(l, r, u), h = r, p = {}, m = 0;
  for (let y = 0; y < a.length; y++) {
    const {
      name: w,
      fn: b
    } = a[y], {
      x: S,
      y: E,
      data: x,
      reset: _
    } = await b({
      x: d,
      y: f,
      initialPlacement: r,
      placement: h,
      strategy: o,
      middlewareData: p,
      rects: l,
      platform: s,
      elements: {
        reference: t,
        floating: e
      }
    });
    d = S ?? d, f = E ?? f, p = {
      ...p,
      [w]: {
        ...p[w],
        ...x
      }
    }, _ && m <= 50 && (m++, typeof _ == "object" && (_.placement && (h = _.placement), _.rects && (l = _.rects === !0 ? await s.getElementRects({
      reference: t,
      floating: e,
      strategy: o
    }) : _.rects), {
      x: d,
      y: f
    } = ed(l, h, u)), y = -1);
  }
  return {
    x: d,
    y: f,
    placement: h,
    strategy: o,
    middlewareData: p
  };
};
async function ti(t, e) {
  var n;
  e === void 0 && (e = {});
  const {
    x: r,
    y: o,
    platform: i,
    rects: s,
    elements: a,
    strategy: u
  } = t, {
    boundary: l = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: f = "floating",
    altBoundary: h = !1,
    padding: p = 0
  } = rr(e, t), m = Ug(p), w = a[h ? f === "floating" ? "reference" : "floating" : f], b = Ps(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(w))) == null || n ? w : w.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: l,
    rootBoundary: d,
    strategy: u
  })), S = f === "floating" ? {
    x: r,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, E = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)), x = await (i.isElement == null ? void 0 : i.isElement(E)) ? await (i.getScale == null ? void 0 : i.getScale(E)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, _ = Ps(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: S,
    offsetParent: E,
    strategy: u
  }) : S);
  return {
    top: (b.top - _.top + m.top) / x.y,
    bottom: (_.bottom - b.bottom + m.bottom) / x.y,
    left: (b.left - _.left + m.left) / x.x,
    right: (_.right - b.right + m.right) / x.x
  };
}
const m7 = (t) => ({
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
      middlewareData: u
    } = e, {
      element: l,
      padding: d = 0
    } = rr(t, e) || {};
    if (l == null)
      return {};
    const f = Ug(d), h = {
      x: n,
      y: r
    }, p = pu(o), m = vu(p), y = await s.getDimensions(l), w = p === "y", b = w ? "top" : "left", S = w ? "bottom" : "right", E = w ? "clientHeight" : "clientWidth", x = i.reference[m] + i.reference[p] - h[p] - i.floating[m], _ = h[p] - i.reference[p], T = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(l));
    let I = T ? T[E] : 0;
    (!I || !await (s.isElement == null ? void 0 : s.isElement(T))) && (I = a.floating[E] || i.floating[m]);
    const B = x / 2 - _ / 2, $ = I / 2 - y[m] / 2 - 1, H = wr(f[b], $), N = wr(f[S], $), k = H, D = I - y[m] - N, P = I / 2 - y[m] / 2 + B, A = sl(k, P, D), R = !u.arrow && Co(o) != null && P !== A && i.reference[m] / 2 - (P < k ? H : N) - y[m] / 2 < 0, M = R ? P < k ? P - k : P - D : 0;
    return {
      [p]: h[p] + M,
      data: {
        [p]: A,
        centerOffset: P - A - M,
        ...R && {
          alignmentOffset: M
        }
      },
      reset: R
    };
  }
}), y7 = function(t) {
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
        platform: u,
        elements: l
      } = e, {
        mainAxis: d = !0,
        crossAxis: f = !0,
        fallbackPlacements: h,
        fallbackStrategy: p = "bestFit",
        fallbackAxisSideDirection: m = "none",
        flipAlignment: y = !0,
        ...w
      } = rr(t, e);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const b = or(o), S = An(a), E = or(a) === a, x = await (u.isRTL == null ? void 0 : u.isRTL(l.floating)), _ = h || (E || !y ? [Es(a)] : c7(a)), T = m !== "none";
      !h && T && _.push(...g7(a, y, m, x));
      const I = [a, ..._], B = await ti(e, w), $ = [];
      let H = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (d && $.push(B[b]), f) {
        const P = u7(o, s, x);
        $.push(B[P[0]], B[P[1]]);
      }
      if (H = [...H, {
        placement: o,
        overflows: $
      }], !$.every((P) => P <= 0)) {
        var N, k;
        const P = (((N = i.flip) == null ? void 0 : N.index) || 0) + 1, A = I[P];
        if (A && (!(f === "alignment" ? S !== An(A) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        H.every((Y) => An(Y.placement) === S ? Y.overflows[0] > 0 : !0)))
          return {
            data: {
              index: P,
              overflows: H
            },
            reset: {
              placement: A
            }
          };
        let R = (k = H.filter((M) => M.overflows[0] <= 0).sort((M, Y) => M.overflows[1] - Y.overflows[1])[0]) == null ? void 0 : k.placement;
        if (!R)
          switch (p) {
            case "bestFit": {
              var D;
              const M = (D = H.filter((Y) => {
                if (T) {
                  const U = An(Y.placement);
                  return U === S || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  U === "y";
                }
                return !0;
              }).map((Y) => [Y.placement, Y.overflows.filter((U) => U > 0).reduce((U, V) => U + V, 0)]).sort((Y, U) => Y[1] - U[1])[0]) == null ? void 0 : D[0];
              M && (R = M);
              break;
            }
            case "initialPlacement":
              R = a;
              break;
          }
        if (o !== R)
          return {
            reset: {
              placement: R
            }
          };
      }
      return {};
    }
  };
};
function td(t, e) {
  return {
    top: t.top - e.height,
    right: t.right - e.width,
    bottom: t.bottom - e.height,
    left: t.left - e.width
  };
}
function nd(t) {
  return i7.some((e) => t[e] >= 0);
}
const w7 = function(t) {
  return t === void 0 && (t = {}), {
    name: "hide",
    options: t,
    async fn(e) {
      const {
        rects: n
      } = e, {
        strategy: r = "referenceHidden",
        ...o
      } = rr(t, e);
      switch (r) {
        case "referenceHidden": {
          const i = await ti(e, {
            ...o,
            elementContext: "reference"
          }), s = td(i, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: nd(s)
            }
          };
        }
        case "escaped": {
          const i = await ti(e, {
            ...o,
            altBoundary: !0
          }), s = td(i, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: nd(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, Gg = /* @__PURE__ */ new Set(["left", "top"]);
async function b7(t, e) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = t, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = or(n), a = Co(n), u = An(n) === "y", l = Gg.has(s) ? -1 : 1, d = i && u ? -1 : 1, f = rr(e, t);
  let {
    mainAxis: h,
    crossAxis: p,
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
  return a && typeof m == "number" && (p = a === "end" ? m * -1 : m), u ? {
    x: p * d,
    y: h * l
  } : {
    x: h * l,
    y: p * d
  };
}
const x7 = function(t) {
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
      } = e, u = await b7(e, t);
      return s === ((n = a.offset) == null ? void 0 : n.placement) && (r = a.arrow) != null && r.alignmentOffset ? {} : {
        x: o + u.x,
        y: i + u.y,
        data: {
          ...u,
          placement: s
        }
      };
    }
  };
}, _7 = function(t) {
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
              y: S
            } = w;
            return {
              x: b,
              y: S
            };
          }
        },
        ...u
      } = rr(t, e), l = {
        x: n,
        y: r
      }, d = await ti(e, u), f = An(or(o)), h = gu(f);
      let p = l[h], m = l[f];
      if (i) {
        const w = h === "y" ? "top" : "left", b = h === "y" ? "bottom" : "right", S = p + d[w], E = p - d[b];
        p = sl(S, p, E);
      }
      if (s) {
        const w = f === "y" ? "top" : "left", b = f === "y" ? "bottom" : "right", S = m + d[w], E = m - d[b];
        m = sl(S, m, E);
      }
      const y = a.fn({
        ...e,
        [h]: p,
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
}, C7 = function(t) {
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
        mainAxis: u = !0,
        crossAxis: l = !0
      } = rr(t, e), d = {
        x: n,
        y: r
      }, f = An(o), h = gu(f);
      let p = d[h], m = d[f];
      const y = rr(a, e), w = typeof y == "number" ? {
        mainAxis: y,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...y
      };
      if (u) {
        const E = h === "y" ? "height" : "width", x = i.reference[h] - i.floating[E] + w.mainAxis, _ = i.reference[h] + i.reference[E] - w.mainAxis;
        p < x ? p = x : p > _ && (p = _);
      }
      if (l) {
        var b, S;
        const E = h === "y" ? "width" : "height", x = Gg.has(or(o)), _ = i.reference[f] - i.floating[E] + (x && ((b = s.offset) == null ? void 0 : b[f]) || 0) + (x ? 0 : w.crossAxis), T = i.reference[f] + i.reference[E] + (x ? 0 : ((S = s.offset) == null ? void 0 : S[f]) || 0) - (x ? w.crossAxis : 0);
        m < _ ? m = _ : m > T && (m = T);
      }
      return {
        [h]: p,
        [f]: m
      };
    }
  };
}, S7 = function(t) {
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
        apply: u = () => {
        },
        ...l
      } = rr(t, e), d = await ti(e, l), f = or(o), h = Co(o), p = An(o) === "y", {
        width: m,
        height: y
      } = i.floating;
      let w, b;
      f === "top" || f === "bottom" ? (w = f, b = h === (await (s.isRTL == null ? void 0 : s.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (b = f, w = h === "end" ? "top" : "bottom");
      const S = y - d.top - d.bottom, E = m - d.left - d.right, x = wr(y - d[w], S), _ = wr(m - d[b], E), T = !e.middlewareData.shift;
      let I = x, B = _;
      if ((n = e.middlewareData.shift) != null && n.enabled.x && (B = E), (r = e.middlewareData.shift) != null && r.enabled.y && (I = S), T && !h) {
        const H = Xt(d.left, 0), N = Xt(d.right, 0), k = Xt(d.top, 0), D = Xt(d.bottom, 0);
        p ? B = m - 2 * (H !== 0 || N !== 0 ? H + N : Xt(d.left, d.right)) : I = y - 2 * (k !== 0 || D !== 0 ? k + D : Xt(d.top, d.bottom));
      }
      await u({
        ...e,
        availableWidth: B,
        availableHeight: I
      });
      const $ = await s.getDimensions(a.floating);
      return m !== $.width || y !== $.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Js() {
  return typeof window < "u";
}
function So(t) {
  return Jg(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function Ut(t) {
  var e;
  return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function Bn(t) {
  var e;
  return (e = (Jg(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
}
function Jg(t) {
  return Js() ? t instanceof Node || t instanceof Ut(t).Node : !1;
}
function wn(t) {
  return Js() ? t instanceof Element || t instanceof Ut(t).Element : !1;
}
function zn(t) {
  return Js() ? t instanceof HTMLElement || t instanceof Ut(t).HTMLElement : !1;
}
function rd(t) {
  return !Js() || typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof Ut(t).ShadowRoot;
}
const k7 = /* @__PURE__ */ new Set(["inline", "contents"]);
function _i(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: r,
    display: o
  } = bn(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + r + n) && !k7.has(o);
}
const E7 = /* @__PURE__ */ new Set(["table", "td", "th"]);
function P7(t) {
  return E7.has(So(t));
}
const N7 = [":popover-open", ":modal"];
function Qs(t) {
  return N7.some((e) => {
    try {
      return t.matches(e);
    } catch {
      return !1;
    }
  });
}
const T7 = ["transform", "translate", "scale", "rotate", "perspective"], O7 = ["transform", "translate", "scale", "rotate", "perspective", "filter"], A7 = ["paint", "layout", "strict", "content"];
function mu(t) {
  const e = yu(), n = wn(t) ? bn(t) : t;
  return T7.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !e && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !e && (n.filter ? n.filter !== "none" : !1) || O7.some((r) => (n.willChange || "").includes(r)) || A7.some((r) => (n.contain || "").includes(r));
}
function D7(t) {
  let e = br(t);
  for (; zn(e) && !mo(e); ) {
    if (mu(e))
      return e;
    if (Qs(e))
      return null;
    e = br(e);
  }
  return null;
}
function yu() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const I7 = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function mo(t) {
  return I7.has(So(t));
}
function bn(t) {
  return Ut(t).getComputedStyle(t);
}
function ea(t) {
  return wn(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.scrollX,
    scrollTop: t.scrollY
  };
}
function br(t) {
  if (So(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node.
    t.assignedSlot || // DOM Element detected.
    t.parentNode || // ShadowRoot detected.
    rd(t) && t.host || // Fallback.
    Bn(t)
  );
  return rd(e) ? e.host : e;
}
function Qg(t) {
  const e = br(t);
  return mo(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : zn(e) && _i(e) ? e : Qg(e);
}
function ni(t, e, n) {
  var r;
  e === void 0 && (e = []), n === void 0 && (n = !0);
  const o = Qg(t), i = o === ((r = t.ownerDocument) == null ? void 0 : r.body), s = Ut(o);
  if (i) {
    const a = ll(s);
    return e.concat(s, s.visualViewport || [], _i(o) ? o : [], a && n ? ni(a) : []);
  }
  return e.concat(o, ni(o, [], n));
}
function ll(t) {
  return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null;
}
function ev(t) {
  const e = bn(t);
  let n = parseFloat(e.width) || 0, r = parseFloat(e.height) || 0;
  const o = zn(t), i = o ? t.offsetWidth : n, s = o ? t.offsetHeight : r, a = ks(n) !== i || ks(r) !== s;
  return a && (n = i, r = s), {
    width: n,
    height: r,
    $: a
  };
}
function wu(t) {
  return wn(t) ? t : t.contextElement;
}
function oo(t) {
  const e = wu(t);
  if (!zn(e))
    return Ln(1);
  const n = e.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = ev(e);
  let s = (i ? ks(n.width) : n.width) / r, a = (i ? ks(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const M7 = /* @__PURE__ */ Ln(0);
function tv(t) {
  const e = Ut(t);
  return !yu() || !e.visualViewport ? M7 : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function L7(t, e, n) {
  return e === void 0 && (e = !1), !n || e && n !== Ut(t) ? !1 : e;
}
function Kr(t, e, n, r) {
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const o = t.getBoundingClientRect(), i = wu(t);
  let s = Ln(1);
  e && (r ? wn(r) && (s = oo(r)) : s = oo(t));
  const a = L7(i, n, r) ? tv(i) : Ln(0);
  let u = (o.left + a.x) / s.x, l = (o.top + a.y) / s.y, d = o.width / s.x, f = o.height / s.y;
  if (i) {
    const h = Ut(i), p = r && wn(r) ? Ut(r) : r;
    let m = h, y = ll(m);
    for (; y && r && p !== m; ) {
      const w = oo(y), b = y.getBoundingClientRect(), S = bn(y), E = b.left + (y.clientLeft + parseFloat(S.paddingLeft)) * w.x, x = b.top + (y.clientTop + parseFloat(S.paddingTop)) * w.y;
      u *= w.x, l *= w.y, d *= w.x, f *= w.y, u += E, l += x, m = Ut(y), y = ll(m);
    }
  }
  return Ps({
    width: d,
    height: f,
    x: u,
    y: l
  });
}
function ta(t, e) {
  const n = ea(t).scrollLeft;
  return e ? e.left + n : Kr(Bn(t)).left + n;
}
function nv(t, e) {
  const n = t.getBoundingClientRect(), r = n.left + e.scrollLeft - ta(t, n), o = n.top + e.scrollTop;
  return {
    x: r,
    y: o
  };
}
function H7(t) {
  let {
    elements: e,
    rect: n,
    offsetParent: r,
    strategy: o
  } = t;
  const i = o === "fixed", s = Bn(r), a = e ? Qs(e.floating) : !1;
  if (r === s || a && i)
    return n;
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = Ln(1);
  const d = Ln(0), f = zn(r);
  if ((f || !f && !i) && ((So(r) !== "body" || _i(s)) && (u = ea(r)), zn(r))) {
    const p = Kr(r);
    l = oo(r), d.x = p.x + r.clientLeft, d.y = p.y + r.clientTop;
  }
  const h = s && !f && !i ? nv(s, u) : Ln(0);
  return {
    width: n.width * l.x,
    height: n.height * l.y,
    x: n.x * l.x - u.scrollLeft * l.x + d.x + h.x,
    y: n.y * l.y - u.scrollTop * l.y + d.y + h.y
  };
}
function V7(t) {
  return Array.from(t.getClientRects());
}
function z7(t) {
  const e = Bn(t), n = ea(t), r = t.ownerDocument.body, o = Xt(e.scrollWidth, e.clientWidth, r.scrollWidth, r.clientWidth), i = Xt(e.scrollHeight, e.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + ta(t);
  const a = -n.scrollTop;
  return bn(r).direction === "rtl" && (s += Xt(e.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
const od = 25;
function R7(t, e) {
  const n = Ut(t), r = Bn(t), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, a = 0, u = 0;
  if (o) {
    i = o.width, s = o.height;
    const d = yu();
    (!d || d && e === "fixed") && (a = o.offsetLeft, u = o.offsetTop);
  }
  const l = ta(r);
  if (l <= 0) {
    const d = r.ownerDocument, f = d.body, h = getComputedStyle(f), p = d.compatMode === "CSS1Compat" && parseFloat(h.marginLeft) + parseFloat(h.marginRight) || 0, m = Math.abs(r.clientWidth - f.clientWidth - p);
    m <= od && (i -= m);
  } else l <= od && (i += l);
  return {
    width: i,
    height: s,
    x: a,
    y: u
  };
}
const F7 = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function B7(t, e) {
  const n = Kr(t, !0, e === "fixed"), r = n.top + t.clientTop, o = n.left + t.clientLeft, i = zn(t) ? oo(t) : Ln(1), s = t.clientWidth * i.x, a = t.clientHeight * i.y, u = o * i.x, l = r * i.y;
  return {
    width: s,
    height: a,
    x: u,
    y: l
  };
}
function id(t, e, n) {
  let r;
  if (e === "viewport")
    r = R7(t, n);
  else if (e === "document")
    r = z7(Bn(t));
  else if (wn(e))
    r = B7(e, n);
  else {
    const o = tv(t);
    r = {
      x: e.x - o.x,
      y: e.y - o.y,
      width: e.width,
      height: e.height
    };
  }
  return Ps(r);
}
function rv(t, e) {
  const n = br(t);
  return n === e || !wn(n) || mo(n) ? !1 : bn(n).position === "fixed" || rv(n, e);
}
function $7(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let r = ni(t, [], !1).filter((a) => wn(a) && So(a) !== "body"), o = null;
  const i = bn(t).position === "fixed";
  let s = i ? br(t) : t;
  for (; wn(s) && !mo(s); ) {
    const a = bn(s), u = mu(s);
    !u && a.position === "fixed" && (o = null), (i ? !u && !o : !u && a.position === "static" && !!o && F7.has(o.position) || _i(s) && !u && rv(t, s)) ? r = r.filter((d) => d !== s) : o = a, s = br(s);
  }
  return e.set(t, r), r;
}
function K7(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = t;
  const s = [...n === "clippingAncestors" ? Qs(e) ? [] : $7(e, this._c) : [].concat(n), r], a = s[0], u = s.reduce((l, d) => {
    const f = id(e, d, o);
    return l.top = Xt(f.top, l.top), l.right = wr(f.right, l.right), l.bottom = wr(f.bottom, l.bottom), l.left = Xt(f.left, l.left), l;
  }, id(e, a, o));
  return {
    width: u.right - u.left,
    height: u.bottom - u.top,
    x: u.left,
    y: u.top
  };
}
function W7(t) {
  const {
    width: e,
    height: n
  } = ev(t);
  return {
    width: e,
    height: n
  };
}
function Z7(t, e, n) {
  const r = zn(e), o = Bn(e), i = n === "fixed", s = Kr(t, !0, i, e);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const u = Ln(0);
  function l() {
    u.x = ta(o);
  }
  if (r || !r && !i)
    if ((So(e) !== "body" || _i(o)) && (a = ea(e)), r) {
      const p = Kr(e, !0, i, e);
      u.x = p.x + e.clientLeft, u.y = p.y + e.clientTop;
    } else o && l();
  i && !r && o && l();
  const d = o && !r && !i ? nv(o, a) : Ln(0), f = s.left + a.scrollLeft - u.x - d.x, h = s.top + a.scrollTop - u.y - d.y;
  return {
    x: f,
    y: h,
    width: s.width,
    height: s.height
  };
}
function Ca(t) {
  return bn(t).position === "static";
}
function sd(t, e) {
  if (!zn(t) || bn(t).position === "fixed")
    return null;
  if (e)
    return e(t);
  let n = t.offsetParent;
  return Bn(t) === n && (n = n.ownerDocument.body), n;
}
function ov(t, e) {
  const n = Ut(t);
  if (Qs(t))
    return n;
  if (!zn(t)) {
    let o = br(t);
    for (; o && !mo(o); ) {
      if (wn(o) && !Ca(o))
        return o;
      o = br(o);
    }
    return n;
  }
  let r = sd(t, e);
  for (; r && P7(r) && Ca(r); )
    r = sd(r, e);
  return r && mo(r) && Ca(r) && !mu(r) ? n : r || D7(t) || n;
}
const Y7 = async function(t) {
  const e = this.getOffsetParent || ov, n = this.getDimensions, r = await n(t.floating);
  return {
    reference: Z7(t.reference, await e(t.floating), t.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function q7(t) {
  return bn(t).direction === "rtl";
}
const X7 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: H7,
  getDocumentElement: Bn,
  getClippingRect: K7,
  getOffsetParent: ov,
  getElementRects: Y7,
  getClientRects: V7,
  getDimensions: W7,
  getScale: oo,
  isElement: wn,
  isRTL: q7
};
function iv(t, e) {
  return t.x === e.x && t.y === e.y && t.width === e.width && t.height === e.height;
}
function j7(t, e) {
  let n = null, r;
  const o = Bn(t);
  function i() {
    var a;
    clearTimeout(r), (a = n) == null || a.disconnect(), n = null;
  }
  function s(a, u) {
    a === void 0 && (a = !1), u === void 0 && (u = 1), i();
    const l = t.getBoundingClientRect(), {
      left: d,
      top: f,
      width: h,
      height: p
    } = l;
    if (a || e(), !h || !p)
      return;
    const m = Li(f), y = Li(o.clientWidth - (d + h)), w = Li(o.clientHeight - (f + p)), b = Li(d), E = {
      rootMargin: -m + "px " + -y + "px " + -w + "px " + -b + "px",
      threshold: Xt(0, wr(1, u)) || 1
    };
    let x = !0;
    function _(T) {
      const I = T[0].intersectionRatio;
      if (I !== u) {
        if (!x)
          return s();
        I ? s(!1, I) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      I === 1 && !iv(l, t.getBoundingClientRect()) && s(), x = !1;
    }
    try {
      n = new IntersectionObserver(_, {
        ...E,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(_, E);
    }
    n.observe(t);
  }
  return s(!0), i;
}
function U7(t, e, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: u = !1
  } = r, l = wu(t), d = o || i ? [...l ? ni(l) : [], ...ni(e)] : [];
  d.forEach((b) => {
    o && b.addEventListener("scroll", n, {
      passive: !0
    }), i && b.addEventListener("resize", n);
  });
  const f = l && a ? j7(l, n) : null;
  let h = -1, p = null;
  s && (p = new ResizeObserver((b) => {
    let [S] = b;
    S && S.target === l && p && (p.unobserve(e), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
      var E;
      (E = p) == null || E.observe(e);
    })), n();
  }), l && !u && p.observe(l), p.observe(e));
  let m, y = u ? Kr(t) : null;
  u && w();
  function w() {
    const b = Kr(t);
    y && !iv(y, b) && n(), y = b, m = requestAnimationFrame(w);
  }
  return n(), () => {
    var b;
    d.forEach((S) => {
      o && S.removeEventListener("scroll", n), i && S.removeEventListener("resize", n);
    }), f?.(), (b = p) == null || b.disconnect(), p = null, u && cancelAnimationFrame(m);
  };
}
const sv = x7, av = _7, lv = y7, G7 = S7, J7 = w7, uv = m7, Q7 = C7, cv = (t, e, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: X7,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return p7(t, e, {
    ...o,
    platform: i
  });
};
function Pr(t) {
  return typeof t == "function" ? t() : t;
}
function dv(t) {
  return typeof window > "u" ? 1 : (t.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function ad(t, e) {
  const n = dv(t);
  return Math.round(e * n) / n;
}
function e5(t) {
  return {
    [`--bits-${t}-content-transform-origin`]: "var(--bits-floating-transform-origin)",
    [`--bits-${t}-content-available-width`]: "var(--bits-floating-available-width)",
    [`--bits-${t}-content-available-height`]: "var(--bits-floating-available-height)",
    [`--bits-${t}-anchor-width`]: "var(--bits-floating-anchor-width)",
    [`--bits-${t}-anchor-height`]: "var(--bits-floating-anchor-height)"
  };
}
function t5(t) {
  const e = t.whileElementsMounted, n = /* @__PURE__ */ C(() => Pr(t.open) ?? !0), r = /* @__PURE__ */ C(() => Pr(t.middleware)), o = /* @__PURE__ */ C(() => Pr(t.transform) ?? !0), i = /* @__PURE__ */ C(() => Pr(t.placement) ?? "bottom"), s = /* @__PURE__ */ C(() => Pr(t.strategy) ?? "absolute"), a = /* @__PURE__ */ C(() => Pr(t.sideOffset) ?? 0), u = /* @__PURE__ */ C(() => Pr(t.alignOffset) ?? 0), l = t.reference;
  let d = /* @__PURE__ */ ye(0), f = /* @__PURE__ */ ye(0);
  const h = On(null);
  let p = /* @__PURE__ */ ye(ht(c(s))), m = /* @__PURE__ */ ye(ht(c(i))), y = /* @__PURE__ */ ye(ht({})), w = /* @__PURE__ */ ye(!1), b = !1, S = 0;
  const E = /* @__PURE__ */ C(() => {
    const H = h.current ? ad(h.current, c(d)) : c(d), N = h.current ? ad(h.current, c(f)) : c(f);
    return c(o) ? {
      position: c(p),
      left: "0",
      top: "0",
      transform: `translate(${H}px, ${N}px)`,
      ...h.current && dv(h.current) >= 1.5 && { willChange: "transform" }
    } : {
      position: c(p),
      left: `${H}px`,
      top: `${N}px`
    };
  });
  let x;
  function _() {
    if (l.current === null || h.current === null) return;
    const H = l.current, N = h.current, k = ++S;
    cv(H, N, {
      middleware: c(r),
      placement: c(i),
      strategy: c(s)
    }).then((D) => {
      if (k !== S || l.current !== H || h.current !== N) return;
      if (n5(H)) {
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
      if (!c(n) && c(d) !== 0 && c(f) !== 0) {
        const A = Math.max(Math.abs(c(a)), Math.abs(c(u)), 15);
        if (D.x <= A && D.y <= A) return;
      }
      K(d, D.x, !0), K(f, D.y, !0), K(p, D.strategy, !0), K(m, D.placement, !0), K(y, D.middlewareData, !0), K(w, !0);
    });
  }
  function T() {
    typeof x == "function" && (x(), x = void 0), S++;
  }
  function I() {
    if (T(), e === void 0) {
      _();
      return;
    }
    c(n) && (l.current === null || h.current === null || (x = e(l.current, h.current, _)));
  }
  function B() {
    !c(n) && h.current === null && K(w, !1);
  }
  function $() {
    return [
      c(r),
      c(i),
      c(s),
      c(a),
      c(u),
      c(n)
    ];
  }
  return He(() => {
    e === void 0 && c(n) && _();
  }), He(I), He(() => {
    if (e !== void 0) {
      if ($(), !c(n)) {
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
      _();
    }
  }), He(B), He(() => T), {
    floating: h,
    reference: l,
    get strategy() {
      return c(p);
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
      return c(E);
    },
    get update() {
      return _;
    }
  };
}
function n5(t) {
  return t instanceof Element ? !t.isConnected || t instanceof HTMLElement && t.hidden ? !0 : t.getClientRects().length === 0 : !1;
}
const r5 = { top: "bottom", right: "left", bottom: "top", left: "right" }, bu = new Er("Floating.Root"), ld = new Er("Floating.Content"), xu = new Er("Floating.Root");
class Ns {
  static create(e = !1) {
    return e ? xu.set(new Ns()) : bu.set(new Ns());
  }
  anchorNode = On(null);
  customAnchorNode = On(null);
  triggerNode = On(null);
  constructor() {
    He(() => {
      this.customAnchorNode.current ? typeof this.customAnchorNode.current == "string" ? this.anchorNode.current = document.querySelector(this.customAnchorNode.current) : this.anchorNode.current = this.customAnchorNode.current : this.anchorNode.current = this.triggerNode.current;
    });
  }
}
class Ts {
  static create(e, n = !1) {
    return n ? ld.set(new Ts(e, xu.get())) : ld.set(new Ts(e, bu.get()));
  }
  opts;
  root;
  // nodes
  contentRef = On(null);
  wrapperRef = On(null);
  arrowRef = On(null);
  contentAttachment = mr(this.contentRef);
  wrapperAttachment = mr(this.wrapperRef);
  arrowAttachment = mr(this.arrowRef);
  // ids
  arrowId = On(Ss());
  #e = /* @__PURE__ */ C(() => {
    if (typeof this.opts.style == "string") return Ho(this.opts.style);
    if (!this.opts.style) return {};
  });
  #t = void 0;
  #n = new Zx(() => this.arrowRef.current ?? void 0);
  #r = /* @__PURE__ */ C(() => this.#n?.width ?? 0);
  #o = /* @__PURE__ */ C(() => this.#n?.height ?? 0);
  #i = /* @__PURE__ */ C(() => this.opts.side?.current + (this.opts.align.current !== "center" ? `-${this.opts.align.current}` : ""));
  #a = /* @__PURE__ */ C(() => Array.isArray(this.opts.collisionBoundary.current) ? this.opts.collisionBoundary.current : [this.opts.collisionBoundary.current]);
  #s = /* @__PURE__ */ C(() => c(this.#a).length > 0);
  get hasExplicitBoundaries() {
    return c(this.#s);
  }
  set hasExplicitBoundaries(e) {
    K(this.#s, e);
  }
  #l = /* @__PURE__ */ C(() => ({
    padding: this.opts.collisionPadding.current,
    boundary: c(this.#a).filter(l_),
    altBoundary: this.hasExplicitBoundaries
  }));
  get detectOverflowOptions() {
    return c(this.#l);
  }
  set detectOverflowOptions(e) {
    K(this.#l, e);
  }
  #u = /* @__PURE__ */ ye(void 0);
  #c = /* @__PURE__ */ ye(void 0);
  #d = /* @__PURE__ */ ye(void 0);
  #f = /* @__PURE__ */ ye(void 0);
  #g = /* @__PURE__ */ C(() => [
    sv({
      mainAxis: this.opts.sideOffset.current + c(this.#o),
      alignmentAxis: this.opts.alignOffset.current
    }),
    this.opts.avoidCollisions.current && av({
      mainAxis: !0,
      crossAxis: !1,
      limiter: this.opts.sticky.current === "partial" ? Q7() : void 0,
      ...this.detectOverflowOptions
    }),
    this.opts.avoidCollisions.current && lv({ ...this.detectOverflowOptions }),
    G7({
      ...this.detectOverflowOptions,
      apply: ({ rects: e, availableWidth: n, availableHeight: r }) => {
        const { width: o, height: i } = e.reference;
        K(this.#u, n, !0), K(this.#c, r, !0), K(this.#d, o, !0), K(this.#f, i, !0);
      }
    }),
    this.arrowRef.current && uv({
      element: this.arrowRef.current,
      padding: this.opts.arrowPadding.current
    }),
    o5({
      arrowWidth: c(this.#r),
      arrowHeight: c(this.#o)
    }),
    this.opts.hideWhenDetached.current && J7({ strategy: "referenceHidden", ...this.detectOverflowOptions })
  ].filter(Boolean));
  get middleware() {
    return c(this.#g);
  }
  set middleware(e) {
    K(this.#g, e);
  }
  floating;
  #h = /* @__PURE__ */ C(() => i5(this.floating.placement));
  get placedSide() {
    return c(this.#h);
  }
  set placedSide(e) {
    K(this.#h, e);
  }
  #y = /* @__PURE__ */ C(() => s5(this.floating.placement));
  get placedAlign() {
    return c(this.#y);
  }
  set placedAlign(e) {
    K(this.#y, e);
  }
  #p = /* @__PURE__ */ C(() => this.floating.middlewareData.arrow?.x ?? 0);
  get arrowX() {
    return c(this.#p);
  }
  set arrowX(e) {
    K(this.#p, e);
  }
  #w = /* @__PURE__ */ C(() => this.floating.middlewareData.arrow?.y ?? 0);
  get arrowY() {
    return c(this.#w);
  }
  set arrowY(e) {
    K(this.#w, e);
  }
  #m = /* @__PURE__ */ C(() => this.floating.middlewareData.arrow?.centerOffset !== 0);
  get cannotCenterArrow() {
    return c(this.#m);
  }
  set cannotCenterArrow(e) {
    K(this.#m, e);
  }
  #v = /* @__PURE__ */ ye();
  get contentZIndex() {
    return c(this.#v);
  }
  set contentZIndex(e) {
    K(this.#v, e, !0);
  }
  #b = /* @__PURE__ */ C(() => r5[this.placedSide]);
  get arrowBaseSide() {
    return c(this.#b);
  }
  set arrowBaseSide(e) {
    K(this.#b, e);
  }
  #x = /* @__PURE__ */ C(() => ({
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
      "--bits-floating-anchor-height": `${c(this.#f)}px`,
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
  #_ = /* @__PURE__ */ C(() => ({
    "data-side": this.placedSide,
    "data-align": this.placedAlign,
    style: ru({ ...c(this.#e) }),
    ...this.contentAttachment
  }));
  get props() {
    return c(this.#_);
  }
  set props(e) {
    K(this.#_, e);
  }
  #C = /* @__PURE__ */ C(() => ({
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
    this.opts = e, this.root = n, this.#t = e.updatePositionStrategy, e.customAnchor && (this.root.customAnchorNode.current = e.customAnchor.current), yt(() => e.customAnchor.current, (r) => {
      this.root.customAnchorNode.current = r;
    }), this.floating = t5({
      strategy: () => this.opts.strategy.current,
      placement: () => c(this.#i),
      middleware: () => this.middleware,
      reference: this.root.anchorNode,
      whileElementsMounted: (...r) => U7(...r, {
        animationFrame: this.#t?.current === "always"
      }),
      open: () => this.opts.enabled.current,
      sideOffset: () => this.opts.sideOffset.current,
      alignOffset: () => this.opts.alignOffset.current
    }), He(() => {
      this.floating.isPositioned && this.opts.onPlaced?.current();
    }), yt(() => this.contentRef.current, (r) => {
      if (!r || !this.opts.enabled.current) return;
      const o = Sg(r), i = o.requestAnimationFrame(() => {
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
class Os {
  static create(e, n = !1) {
    return n ? new Os(e, xu.get()) : new Os(e, bu.get());
  }
  opts;
  root;
  constructor(e, n) {
    this.opts = e, this.root = n, e.virtualEl && e.virtualEl.current ? n.triggerNode = Sx(e.virtualEl.current) : n.triggerNode = e.ref;
  }
}
function o5(t) {
  return {
    name: "transformOrigin",
    options: t,
    fn(e) {
      const { placement: n, rects: r, middlewareData: o } = e, s = o.arrow?.centerOffset !== 0, a = s ? 0 : t.arrowWidth, u = s ? 0 : t.arrowHeight, [l, d] = _u(n), f = { start: "0%", center: "50%", end: "100%" }[d], h = (o.arrow?.x ?? 0) + a / 2, p = (o.arrow?.y ?? 0) + u / 2;
      let m = "", y = "";
      return l === "bottom" ? (m = s ? f : `${h}px`, y = `${-u}px`) : l === "top" ? (m = s ? f : `${h}px`, y = `${r.floating.height + u}px`) : l === "right" ? (m = `${-u}px`, y = s ? f : `${p}px`) : l === "left" && (m = `${r.floating.width + u}px`, y = s ? f : `${p}px`), { data: { x: m, y } };
    }
  };
}
function _u(t) {
  const [e, n = "center"] = t.split("-");
  return [e, n];
}
function i5(t) {
  return _u(t)[0];
}
function s5(t) {
  return _u(t)[1];
}
function fv(t, e) {
  ue(e, !0);
  let n = v(e, "children", 7), r = v(e, "tooltip", 7, !1);
  Ns.create(r());
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
  }, i = de(), s = J(i);
  return Oe(s, () => n() ?? ze), O(t, i), ce(o);
}
se(fv, { children: {}, tooltip: {} }, [], [], !0);
class a5 {
  #e;
  #t = /* @__PURE__ */ C(() => this.#e.candidateValues());
  #n;
  constructor(e) {
    this.#e = e, this.#n = Bg("", { afterMs: 1e3, getWindow: this.#e.getWindow }), this.handleTypeaheadSearch = this.handleTypeaheadSearch.bind(this), this.resetTypeahead = this.resetTypeahead.bind(this);
  }
  handleTypeaheadSearch(e) {
    if (!this.#e.enabled() || !c(this.#t).length) return;
    this.#n.current = this.#n.current + e;
    const n = this.#e.getCurrentItem(), r = c(this.#t).find((a) => a === n) ?? "", o = c(this.#t).map((a) => a ?? ""), i = iu(o, this.#n.current, r), s = c(this.#t).find((a) => a === i);
    return s && this.#e.onMatch(s), s;
  }
  resetTypeahead() {
    this.#n.current = "";
  }
}
const l5 = [Vo, Tg, Pg], u5 = [Jr, Ng, Eg], c5 = [...l5, ...u5], d5 = ou({
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
}), Ci = new Er("Select.Root | Combobox.Root"), hv = new Er("Select.Content | Combobox.Content");
class gv {
  opts;
  #e = /* @__PURE__ */ ye(!1);
  get touchedInput() {
    return c(this.#e);
  }
  set touchedInput(e) {
    K(this.#e, e, !0);
  }
  #t = /* @__PURE__ */ ye(null);
  get inputNode() {
    return c(this.#t);
  }
  set inputNode(e) {
    K(this.#t, e, !0);
  }
  #n = /* @__PURE__ */ ye(null);
  get contentNode() {
    return c(this.#n);
  }
  set contentNode(e) {
    K(this.#n, e, !0);
  }
  contentPresence;
  #r = /* @__PURE__ */ ye(null);
  get viewportNode() {
    return c(this.#r);
  }
  set viewportNode(e) {
    K(this.#r, e, !0);
  }
  #o = /* @__PURE__ */ ye(null);
  get triggerNode() {
    return c(this.#o);
  }
  set triggerNode(e) {
    K(this.#o, e, !0);
  }
  #i = /* @__PURE__ */ ye("");
  get valueId() {
    return c(this.#i);
  }
  set valueId(e) {
    K(this.#i, e, !0);
  }
  #a = /* @__PURE__ */ ye(null);
  get highlightedNode() {
    return c(this.#a);
  }
  set highlightedNode(e) {
    K(this.#a, e, !0);
  }
  #s = /* @__PURE__ */ C(() => this.highlightedNode ? this.highlightedNode.getAttribute("data-value") : null);
  get highlightedValue() {
    return c(this.#s);
  }
  set highlightedValue(e) {
    K(this.#s, e);
  }
  #l = /* @__PURE__ */ C(() => {
    if (this.highlightedNode)
      return this.highlightedNode.id;
  });
  get highlightedId() {
    return c(this.#l);
  }
  set highlightedId(e) {
    K(this.#l, e);
  }
  #u = /* @__PURE__ */ C(() => this.highlightedNode ? this.highlightedNode.getAttribute("data-label") : null);
  get highlightedLabel() {
    return c(this.#u);
  }
  set highlightedLabel(e) {
    K(this.#u, e);
  }
  #c = /* @__PURE__ */ ye(!1);
  get contentIsPositioned() {
    return c(this.#c);
  }
  set contentIsPositioned(e) {
    K(this.#c, e, !0);
  }
  isUsingKeyboard = !1;
  isCombobox = !1;
  domContext = new xi(() => null);
  constructor(e) {
    this.opts = e, this.isCombobox = e.isCombobox, this.contentPresence = new c_({
      ref: ge(() => this.contentNode),
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
  getBitsAttr = (e) => d5.getAttr(e, this.isCombobox ? "combobox" : void 0);
}
class f5 extends gv {
  opts;
  isMulti = !1;
  #e = /* @__PURE__ */ C(() => this.opts.value.current !== "");
  get hasValue() {
    return c(this.#e);
  }
  set hasValue(e) {
    K(this.#e, e);
  }
  #t = /* @__PURE__ */ C(() => this.opts.items.current.length ? this.opts.items.current.find((e) => e.value === this.opts.value.current)?.label ?? "" : "");
  get currentLabel() {
    return c(this.#t);
  }
  set currentLabel(e) {
    K(this.#t, e);
  }
  #n = /* @__PURE__ */ C(() => this.opts.items.current.length ? this.opts.items.current.filter((n) => !n.disabled).map((n) => n.label) : []);
  get candidateLabels() {
    return c(this.#n);
  }
  set candidateLabels(e) {
    K(this.#n, e);
  }
  #r = /* @__PURE__ */ C(() => !(this.isMulti || this.opts.items.current.length === 0));
  get dataTypeaheadEnabled() {
    return c(this.#r);
  }
  set dataTypeaheadEnabled(e) {
    K(this.#r, e);
  }
  constructor(e) {
    super(e), this.opts = e, He(() => {
      !this.opts.open.current && this.highlightedNode && this.setHighlightedNode(null);
    }), yt(() => this.opts.open.current, () => {
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
    bi(() => {
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
class h5 extends gv {
  opts;
  isMulti = !0;
  #e = /* @__PURE__ */ C(() => this.opts.value.current.length > 0);
  get hasValue() {
    return c(this.#e);
  }
  set hasValue(e) {
    K(this.#e, e);
  }
  constructor(e) {
    super(e), this.opts = e, He(() => {
      !this.opts.open.current && this.highlightedNode && this.setHighlightedNode(null);
    }), yt(() => this.opts.open.current, () => {
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
    bi(() => {
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
class g5 {
  static create(e) {
    const { type: n, ...r } = e, o = n === "single" ? new f5(r) : new h5(r);
    return Ci.set(o);
  }
}
class Cu {
  static create(e) {
    return new Cu(e, Ci.get());
  }
  opts;
  root;
  attachment;
  #e;
  #t;
  constructor(e, n) {
    this.opts = e, this.root = n, this.attachment = mr(e.ref, (r) => this.root.triggerNode = r), this.root.domContext = new xi(e.ref), this.#e = new F_({
      getCurrentItem: () => this.root.highlightedNode,
      onMatch: (r) => {
        this.root.setHighlightedNode(r);
      },
      getActiveElement: () => this.root.domContext.getActiveElement(),
      getWindow: () => this.root.domContext.getWindow()
    }), this.#t = new a5({
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
    if (this.root.isUsingKeyboard = !0, (e.key === Jr || e.key === Vo) && e.preventDefault(), !this.root.opts.open.current) {
      if (e.key === el || e.key === qi || e.key === Vo || e.key === Jr)
        e.preventDefault(), this.root.handleOpen();
      else if (!this.root.isMulti && this.root.dataTypeaheadEnabled) {
        this.#t.handleTypeaheadSearch(e.key);
        return;
      }
      if (this.root.hasValue) return;
      const s = this.root.getCandidateNodes();
      if (!s.length) return;
      if (e.key === Vo) {
        const a = s[0];
        this.root.setHighlightedNode(a);
      } else if (e.key === Jr) {
        const a = s[s.length - 1];
        this.root.setHighlightedNode(a);
      }
      return;
    }
    if (e.key === Wc) {
      this.root.handleClose();
      return;
    }
    if ((e.key === el || // if we're currently "typing ahead", we don't want to select the item
    // just yet as the item the user is trying to get to may have a space in it,
    // so we defer handling the close for this case until further down
    e.key === qi && this.#e.search === "") && !e.isComposing && (e.preventDefault(), this.#o()))
      return;
    if (e.key === Jr && e.altKey && this.root.handleClose(), c5.includes(e.key)) {
      e.preventDefault();
      const s = this.root.getCandidateNodes(), a = this.root.highlightedNode, u = a ? s.indexOf(a) : -1, l = this.root.opts.loop.current;
      let d;
      if (e.key === Vo ? d = L_(s, u, l) : e.key === Jr ? d = H_(s, u, l) : e.key === Ng ? d = V_(s, u, 10, l) : e.key === Tg ? d = z_(s, u, 10, l) : e.key === Pg ? d = s[0] : e.key === Eg && (d = s[s.length - 1]), !d) return;
      this.root.setHighlightedNode(d);
      return;
    }
    const n = e.ctrlKey || e.altKey || e.metaKey, r = e.key.length === 1, o = e.key === qi, i = this.root.getCandidateNodes();
    if (e.key !== Wc) {
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
  #i = /* @__PURE__ */ C(() => ({
    id: this.opts.id.current,
    disabled: this.root.opts.disabled.current ? !0 : void 0,
    "aria-haspopup": "listbox",
    "aria-expanded": Qa(this.root.opts.open.current),
    "aria-activedescendant": this.root.highlightedId,
    "data-state": kg(this.root.opts.open.current),
    "data-disabled": ws(this.root.opts.disabled.current),
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
class Su {
  static create(e) {
    return hv.set(new Su(e, Ci.get()));
  }
  opts;
  root;
  attachment;
  #e = /* @__PURE__ */ ye(!1);
  get isPositioned() {
    return c(this.#e);
  }
  set isPositioned(e) {
    K(this.#e, e, !0);
  }
  domContext;
  constructor(e, n) {
    this.opts = e, this.root = n, this.attachment = mr(e.ref, (r) => this.root.contentNode = r), this.domContext = new xi(this.opts.ref), this.root.domContext === null && (this.root.domContext = this.domContext), _o(() => {
      this.root.contentNode = null, this.root.contentIsPositioned = !1, this.isPositioned = !1;
    }), yt(() => this.root.opts.open.current, () => {
      this.root.opts.open.current || (this.root.contentIsPositioned = !1, this.isPositioned = !1);
    }), yt([() => this.isPositioned, () => this.root.highlightedNode], () => {
      !this.isPositioned || !this.root.highlightedNode || this.root.scrollHighlightedNodeIntoView(this.root.highlightedNode);
    }), this.onpointermove = this.onpointermove.bind(this);
  }
  onpointermove(e) {
    this.root.isUsingKeyboard = !1;
  }
  #t = /* @__PURE__ */ C(() => e5(this.root.isCombobox ? "combobox" : "select"));
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
  #n = /* @__PURE__ */ C(() => ({ open: this.root.opts.open.current }));
  get snippetProps() {
    return c(this.#n);
  }
  set snippetProps(e) {
    K(this.#n, e);
  }
  #r = /* @__PURE__ */ C(() => ({
    id: this.opts.id.current,
    role: "listbox",
    "aria-multiselectable": this.root.isMulti ? "true" : void 0,
    "data-state": kg(this.root.opts.open.current),
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
class ku {
  static create(e) {
    return new ku(e, Ci.get());
  }
  opts;
  root;
  attachment;
  #e = /* @__PURE__ */ C(() => this.root.includesItem(this.opts.value.current));
  get isSelected() {
    return c(this.#e);
  }
  set isSelected(e) {
    K(this.#e, e);
  }
  #t = /* @__PURE__ */ C(() => this.root.highlightedValue === this.opts.value.current);
  get isHighlighted() {
    return c(this.#t);
  }
  set isHighlighted(e) {
    K(this.#t, e);
  }
  prevHighlighted = new Yx(() => this.isHighlighted);
  #n = /* @__PURE__ */ ye(!1);
  get mounted() {
    return c(this.#n);
  }
  set mounted(e) {
    K(this.#n, e, !0);
  }
  constructor(e, n) {
    this.opts = e, this.root = n, this.attachment = mr(e.ref), yt([() => this.isHighlighted, () => this.prevHighlighted.current], () => {
      this.isHighlighted ? this.opts.onHighlight.current() : this.prevHighlighted.current && this.opts.onUnhighlight.current();
    }), yt(() => this.mounted, () => {
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
  #r = /* @__PURE__ */ C(() => ({ selected: this.isSelected, highlighted: this.isHighlighted }));
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
      if (e.pointerType === "touch" && !tl) {
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
  #o = /* @__PURE__ */ C(() => ({
    id: this.opts.id.current,
    role: "option",
    "aria-selected": this.root.includesItem(this.opts.value.current) ? "true" : void 0,
    "data-value": this.opts.value.current,
    "data-disabled": ws(this.opts.disabled.current),
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
class Eu {
  static create(e) {
    return new Eu(e, Ci.get());
  }
  opts;
  root;
  #e = /* @__PURE__ */ C(() => this.root.opts.name.current !== "");
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
  #t = /* @__PURE__ */ C(() => ({
    disabled: Kc(this.root.opts.disabled.current),
    required: Kc(this.root.opts.required.current),
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
class Pu {
  static create(e) {
    return new Pu(e, hv.get());
  }
  opts;
  content;
  root;
  attachment;
  #e = /* @__PURE__ */ ye(0);
  get prevScrollTop() {
    return c(this.#e);
  }
  set prevScrollTop(e) {
    K(this.#e, e, !0);
  }
  constructor(e, n) {
    this.opts = e, this.content = n, this.root = n.root, this.attachment = mr(e.ref, (r) => {
      this.root.viewportNode = r;
    });
  }
  #t = /* @__PURE__ */ C(() => ({
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
function ji(t, e) {
  ue(e, !0);
  let n = v(e, "value", 15), r = v(e, "autocomplete", 7);
  const o = Eu.create({ value: ge(() => n()) });
  var i = {
    get value() {
      return n();
    },
    set value(l) {
      n(l), g();
    },
    get autocomplete() {
      return r();
    },
    set autocomplete(l) {
      r(l), g();
    }
  }, s = de(), a = J(s);
  {
    var u = (l) => {
      hu(l, Ve(() => o.props, {
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
    ie(a, (l) => {
      o.shouldRender && l(u);
    });
  }
  return O(t, s), ce(i);
}
se(ji, { value: {}, autocomplete: {} }, [], [], !0);
function vv(t, e) {
  ue(e, !0);
  let n = v(e, "id", 7), r = v(e, "children", 7), o = v(e, "virtualEl", 7), i = v(e, "ref", 7), s = v(e, "tooltip", 7, !1);
  Os.create(
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
  }, u = de(), l = J(u);
  return Oe(l, () => r() ?? ze), O(t, u), ce(a);
}
se(vv, { id: {}, children: {}, virtualEl: {}, ref: {}, tooltip: {} }, [], [], !0);
function pv(t, e) {
  ue(e, !0);
  let n = v(e, "content", 7), r = v(e, "side", 7, "bottom"), o = v(e, "sideOffset", 7, 0), i = v(e, "align", 7, "center"), s = v(e, "alignOffset", 7, 0), a = v(e, "id", 7), u = v(e, "arrowPadding", 7, 0), l = v(e, "avoidCollisions", 7, !0), d = v(e, "collisionBoundary", 23, () => []), f = v(e, "collisionPadding", 7, 0), h = v(e, "hideWhenDetached", 7, !1), p = v(e, "onPlaced", 7, () => {
  }), m = v(e, "sticky", 7, "partial"), y = v(e, "updatePositionStrategy", 7, "optimized"), w = v(e, "strategy", 7, "fixed"), b = v(e, "dir", 7, "ltr"), S = v(e, "style", 23, () => ({})), E = v(e, "wrapperId", 23, Ss), x = v(e, "customAnchor", 7, null), _ = v(e, "enabled", 7), T = v(e, "tooltip", 7, !1);
  const I = Ts.create(
    {
      side: ge(() => r()),
      sideOffset: ge(() => o()),
      align: ge(() => i()),
      alignOffset: ge(() => s()),
      id: ge(() => a()),
      arrowPadding: ge(() => u()),
      avoidCollisions: ge(() => l()),
      collisionBoundary: ge(() => d()),
      collisionPadding: ge(() => f()),
      hideWhenDetached: ge(() => h()),
      onPlaced: ge(() => p()),
      sticky: ge(() => m()),
      updatePositionStrategy: ge(() => y()),
      strategy: ge(() => w()),
      dir: ge(() => b()),
      style: ge(() => S()),
      enabled: ge(() => _()),
      wrapperId: ge(() => E()),
      customAnchor: ge(() => x())
    },
    T()
  ), B = /* @__PURE__ */ C(() => Mn(I.wrapperProps, { style: { pointerEvents: "auto" } }));
  var $ = {
    get content() {
      return n();
    },
    set content(k) {
      n(k), g();
    },
    get side() {
      return r();
    },
    set side(k = "bottom") {
      r(k), g();
    },
    get sideOffset() {
      return o();
    },
    set sideOffset(k = 0) {
      o(k), g();
    },
    get align() {
      return i();
    },
    set align(k = "center") {
      i(k), g();
    },
    get alignOffset() {
      return s();
    },
    set alignOffset(k = 0) {
      s(k), g();
    },
    get id() {
      return a();
    },
    set id(k) {
      a(k), g();
    },
    get arrowPadding() {
      return u();
    },
    set arrowPadding(k = 0) {
      u(k), g();
    },
    get avoidCollisions() {
      return l();
    },
    set avoidCollisions(k = !0) {
      l(k), g();
    },
    get collisionBoundary() {
      return d();
    },
    set collisionBoundary(k = []) {
      d(k), g();
    },
    get collisionPadding() {
      return f();
    },
    set collisionPadding(k = 0) {
      f(k), g();
    },
    get hideWhenDetached() {
      return h();
    },
    set hideWhenDetached(k = !1) {
      h(k), g();
    },
    get onPlaced() {
      return p();
    },
    set onPlaced(k = () => {
    }) {
      p(k), g();
    },
    get sticky() {
      return m();
    },
    set sticky(k = "partial") {
      m(k), g();
    },
    get updatePositionStrategy() {
      return y();
    },
    set updatePositionStrategy(k = "optimized") {
      y(k), g();
    },
    get strategy() {
      return w();
    },
    set strategy(k = "fixed") {
      w(k), g();
    },
    get dir() {
      return b();
    },
    set dir(k = "ltr") {
      b(k), g();
    },
    get style() {
      return S();
    },
    set style(k = {}) {
      S(k), g();
    },
    get wrapperId() {
      return E();
    },
    set wrapperId(k = Ss()) {
      E(k), g();
    },
    get customAnchor() {
      return x();
    },
    set customAnchor(k = null) {
      x(k), g();
    },
    get enabled() {
      return _();
    },
    set enabled(k) {
      _(k), g();
    },
    get tooltip() {
      return T();
    },
    set tooltip(k = !1) {
      T(k), g();
    }
  }, H = de(), N = J(H);
  return Oe(N, () => n() ?? ze, () => ({ props: I.props, wrapperProps: c(B) })), O(t, H), ce($);
}
se(
  pv,
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
function mv(t, e) {
  ue(e, !0);
  let n = v(e, "content", 7), r = v(e, "onPlaced", 7);
  xn(() => {
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
  }, i = de(), s = J(i);
  return Oe(s, () => n() ?? ze, () => ({ props: {}, wrapperProps: {} })), O(t, i), ce(o);
}
se(mv, { content: {}, onPlaced: {} }, [], [], !0);
function yv(t, e) {
  ue(e, !0);
  let n = v(e, "content", 7), r = v(e, "isStatic", 7, !1), o = v(e, "onPlaced", 7), i = /* @__PURE__ */ Le(e, [
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
  }, a = de(), u = J(a);
  {
    var l = (f) => {
      mv(f, {
        get content() {
          return n();
        },
        get onPlaced() {
          return o();
        }
      });
    }, d = (f) => {
      pv(f, Ve(
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
    ie(u, (f) => {
      r() ? f(l) : f(d, !1);
    });
  }
  return O(t, a), ce(s);
}
se(yv, { content: {}, isStatic: {}, onPlaced: {} }, [], [], !0);
var v5 = /* @__PURE__ */ ne("<!> <!>", 1);
function Nu(t, e) {
  ue(e, !0);
  let n = v(e, "popper", 7), r = v(e, "onEscapeKeydown", 7), o = v(e, "escapeKeydownBehavior", 7), i = v(e, "preventOverflowTextSelection", 7), s = v(e, "id", 7), a = v(e, "onPointerDown", 7), u = v(e, "onPointerUp", 7), l = v(e, "side", 7), d = v(e, "sideOffset", 7), f = v(e, "align", 7), h = v(e, "alignOffset", 7), p = v(e, "arrowPadding", 7), m = v(e, "avoidCollisions", 7), y = v(e, "collisionBoundary", 7), w = v(e, "collisionPadding", 7), b = v(e, "sticky", 7), S = v(e, "hideWhenDetached", 7), E = v(e, "updatePositionStrategy", 7), x = v(e, "strategy", 7), _ = v(e, "dir", 7), T = v(e, "preventScroll", 7), I = v(e, "wrapperId", 7), B = v(e, "style", 7), $ = v(e, "onPlaced", 7), H = v(e, "onInteractOutside", 7), N = v(e, "onCloseAutoFocus", 7), k = v(e, "onOpenAutoFocus", 7), D = v(e, "onFocusOutside", 7), P = v(e, "interactOutsideBehavior", 7, "close"), A = v(e, "loop", 7), R = v(e, "trapFocus", 7, !0), M = v(e, "isValidEvent", 7, () => !1), Y = v(e, "customAnchor", 7, null), U = v(e, "isStatic", 7, !1), V = v(e, "enabled", 7), j = v(e, "ref", 7), q = v(e, "tooltip", 7, !1), F = v(e, "contentPointerEvents", 7, "auto"), Q = /* @__PURE__ */ Le(e, [
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
  const X = /* @__PURE__ */ C(() => T() ?? !0), re = /* @__PURE__ */ C(() => x() ?? (c(X) ? "fixed" : "absolute"));
  var ee = {
    get popper() {
      return n();
    },
    set popper(L) {
      n(L), g();
    },
    get onEscapeKeydown() {
      return r();
    },
    set onEscapeKeydown(L) {
      r(L), g();
    },
    get escapeKeydownBehavior() {
      return o();
    },
    set escapeKeydownBehavior(L) {
      o(L), g();
    },
    get preventOverflowTextSelection() {
      return i();
    },
    set preventOverflowTextSelection(L) {
      i(L), g();
    },
    get id() {
      return s();
    },
    set id(L) {
      s(L), g();
    },
    get onPointerDown() {
      return a();
    },
    set onPointerDown(L) {
      a(L), g();
    },
    get onPointerUp() {
      return u();
    },
    set onPointerUp(L) {
      u(L), g();
    },
    get side() {
      return l();
    },
    set side(L) {
      l(L), g();
    },
    get sideOffset() {
      return d();
    },
    set sideOffset(L) {
      d(L), g();
    },
    get align() {
      return f();
    },
    set align(L) {
      f(L), g();
    },
    get alignOffset() {
      return h();
    },
    set alignOffset(L) {
      h(L), g();
    },
    get arrowPadding() {
      return p();
    },
    set arrowPadding(L) {
      p(L), g();
    },
    get avoidCollisions() {
      return m();
    },
    set avoidCollisions(L) {
      m(L), g();
    },
    get collisionBoundary() {
      return y();
    },
    set collisionBoundary(L) {
      y(L), g();
    },
    get collisionPadding() {
      return w();
    },
    set collisionPadding(L) {
      w(L), g();
    },
    get sticky() {
      return b();
    },
    set sticky(L) {
      b(L), g();
    },
    get hideWhenDetached() {
      return S();
    },
    set hideWhenDetached(L) {
      S(L), g();
    },
    get updatePositionStrategy() {
      return E();
    },
    set updatePositionStrategy(L) {
      E(L), g();
    },
    get strategy() {
      return x();
    },
    set strategy(L) {
      x(L), g();
    },
    get dir() {
      return _();
    },
    set dir(L) {
      _(L), g();
    },
    get preventScroll() {
      return T();
    },
    set preventScroll(L) {
      T(L), g();
    },
    get wrapperId() {
      return I();
    },
    set wrapperId(L) {
      I(L), g();
    },
    get style() {
      return B();
    },
    set style(L) {
      B(L), g();
    },
    get onPlaced() {
      return $();
    },
    set onPlaced(L) {
      $(L), g();
    },
    get onInteractOutside() {
      return H();
    },
    set onInteractOutside(L) {
      H(L), g();
    },
    get onCloseAutoFocus() {
      return N();
    },
    set onCloseAutoFocus(L) {
      N(L), g();
    },
    get onOpenAutoFocus() {
      return k();
    },
    set onOpenAutoFocus(L) {
      k(L), g();
    },
    get onFocusOutside() {
      return D();
    },
    set onFocusOutside(L) {
      D(L), g();
    },
    get interactOutsideBehavior() {
      return P();
    },
    set interactOutsideBehavior(L = "close") {
      P(L), g();
    },
    get loop() {
      return A();
    },
    set loop(L) {
      A(L), g();
    },
    get trapFocus() {
      return R();
    },
    set trapFocus(L = !0) {
      R(L), g();
    },
    get isValidEvent() {
      return M();
    },
    set isValidEvent(L = () => !1) {
      M(L), g();
    },
    get customAnchor() {
      return Y();
    },
    set customAnchor(L = null) {
      Y(L), g();
    },
    get isStatic() {
      return U();
    },
    set isStatic(L = !1) {
      U(L), g();
    },
    get enabled() {
      return V();
    },
    set enabled(L) {
      V(L), g();
    },
    get ref() {
      return j();
    },
    set ref(L) {
      j(L), g();
    },
    get tooltip() {
      return q();
    },
    set tooltip(L = !1) {
      q(L), g();
    },
    get contentPointerEvents() {
      return F();
    },
    set contentPointerEvents(L = "auto") {
      F(L), g();
    }
  };
  return yv(t, {
    get isStatic() {
      return U();
    },
    get id() {
      return s();
    },
    get side() {
      return l();
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
      return p();
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
      return S();
    },
    get updatePositionStrategy() {
      return E();
    },
    get strategy() {
      return c(re);
    },
    get dir() {
      return _();
    },
    get wrapperId() {
      return I();
    },
    get style() {
      return B();
    },
    get onPlaced() {
      return $();
    },
    get customAnchor() {
      return Y();
    },
    get enabled() {
      return V();
    },
    get tooltip() {
      return q();
    },
    content: (te, ve) => {
      let ae = () => ve?.().props, le = () => ve?.().wrapperProps;
      var oe = v5(), fe = J(oe);
      {
        var we = (me) => {
          il(me, {
            get preventScroll() {
              return c(X);
            }
          });
        }, xe = (me) => {
          var Ee = de(), G = J(Ee);
          {
            var Ue = (be) => {
              il(be, {
                get preventScroll() {
                  return c(X);
                }
              });
            };
            ie(
              G,
              (be) => {
                e.forceMount || be(Ue);
              },
              !0
            );
          }
          O(me, Ee);
        };
        ie(fe, (me) => {
          e.forceMount && V() ? me(we) : me(xe, !1);
        });
      }
      var pe = z(fe, 2);
      Wg(pe, {
        get onOpenAutoFocus() {
          return k();
        },
        get onCloseAutoFocus() {
          return N();
        },
        get loop() {
          return A();
        },
        get enabled() {
          return V();
        },
        get trapFocus() {
          return R();
        },
        get forceMount() {
          return e.forceMount;
        },
        get ref() {
          return j();
        },
        focusScope: (Ee, G) => {
          let Ue = () => G?.().props;
          Kg(Ee, {
            get onEscapeKeydown() {
              return r();
            },
            get escapeKeydownBehavior() {
              return o();
            },
            get enabled() {
              return V();
            },
            get ref() {
              return j();
            },
            children: (be, De) => {
              $g(be, {
                get id() {
                  return s();
                },
                get onInteractOutside() {
                  return H();
                },
                get onFocusOutside() {
                  return D();
                },
                get interactOutsideBehavior() {
                  return P();
                },
                get isValidEvent() {
                  return M();
                },
                get enabled() {
                  return V();
                },
                get ref() {
                  return j();
                },
                children: (Xe, je) => {
                  let Ke = () => je?.().props;
                  Zg(Xe, {
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
                      return u();
                    },
                    get enabled() {
                      return V();
                    },
                    get ref() {
                      return j();
                    },
                    children: (rt, Tt) => {
                      var he = de(), Ae = J(he);
                      {
                        let et = /* @__PURE__ */ C(() => ({
                          props: Mn(Q, ae(), Ke(), Ue(), { style: { pointerEvents: F() } }),
                          wrapperProps: le()
                        }));
                        Oe(Ae, () => n() ?? ze, () => c(et));
                      }
                      O(rt, he);
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
      }), O(te, oe);
    },
    $$slots: { content: !0 }
  }), ce(ee);
}
se(
  Nu,
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
function wv(t, e) {
  ue(e, !0);
  let n = v(e, "popper", 7), r = v(e, "open", 7), o = v(e, "onEscapeKeydown", 7), i = v(e, "escapeKeydownBehavior", 7), s = v(e, "preventOverflowTextSelection", 7), a = v(e, "id", 7), u = v(e, "onPointerDown", 7), l = v(e, "onPointerUp", 7), d = v(e, "side", 7), f = v(e, "sideOffset", 7), h = v(e, "align", 7), p = v(e, "alignOffset", 7), m = v(e, "arrowPadding", 7), y = v(e, "avoidCollisions", 7), w = v(e, "collisionBoundary", 7), b = v(e, "collisionPadding", 7), S = v(e, "sticky", 7), E = v(e, "hideWhenDetached", 7), x = v(e, "updatePositionStrategy", 7), _ = v(e, "strategy", 7), T = v(e, "dir", 7), I = v(e, "preventScroll", 7), B = v(e, "wrapperId", 7), $ = v(e, "style", 7), H = v(e, "onPlaced", 7), N = v(e, "onInteractOutside", 7), k = v(e, "onCloseAutoFocus", 7), D = v(e, "onOpenAutoFocus", 7), P = v(e, "onFocusOutside", 7), A = v(e, "interactOutsideBehavior", 7, "close"), R = v(e, "loop", 7), M = v(e, "trapFocus", 7, !0), Y = v(e, "isValidEvent", 7, () => !1), U = v(e, "customAnchor", 7, null), V = v(e, "isStatic", 7, !1), j = v(e, "ref", 7), q = v(e, "shouldRender", 7), F = /* @__PURE__ */ Le(e, [
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
  var Q = {
    get popper() {
      return n();
    },
    set popper(L) {
      n(L), g();
    },
    get open() {
      return r();
    },
    set open(L) {
      r(L), g();
    },
    get onEscapeKeydown() {
      return o();
    },
    set onEscapeKeydown(L) {
      o(L), g();
    },
    get escapeKeydownBehavior() {
      return i();
    },
    set escapeKeydownBehavior(L) {
      i(L), g();
    },
    get preventOverflowTextSelection() {
      return s();
    },
    set preventOverflowTextSelection(L) {
      s(L), g();
    },
    get id() {
      return a();
    },
    set id(L) {
      a(L), g();
    },
    get onPointerDown() {
      return u();
    },
    set onPointerDown(L) {
      u(L), g();
    },
    get onPointerUp() {
      return l();
    },
    set onPointerUp(L) {
      l(L), g();
    },
    get side() {
      return d();
    },
    set side(L) {
      d(L), g();
    },
    get sideOffset() {
      return f();
    },
    set sideOffset(L) {
      f(L), g();
    },
    get align() {
      return h();
    },
    set align(L) {
      h(L), g();
    },
    get alignOffset() {
      return p();
    },
    set alignOffset(L) {
      p(L), g();
    },
    get arrowPadding() {
      return m();
    },
    set arrowPadding(L) {
      m(L), g();
    },
    get avoidCollisions() {
      return y();
    },
    set avoidCollisions(L) {
      y(L), g();
    },
    get collisionBoundary() {
      return w();
    },
    set collisionBoundary(L) {
      w(L), g();
    },
    get collisionPadding() {
      return b();
    },
    set collisionPadding(L) {
      b(L), g();
    },
    get sticky() {
      return S();
    },
    set sticky(L) {
      S(L), g();
    },
    get hideWhenDetached() {
      return E();
    },
    set hideWhenDetached(L) {
      E(L), g();
    },
    get updatePositionStrategy() {
      return x();
    },
    set updatePositionStrategy(L) {
      x(L), g();
    },
    get strategy() {
      return _();
    },
    set strategy(L) {
      _(L), g();
    },
    get dir() {
      return T();
    },
    set dir(L) {
      T(L), g();
    },
    get preventScroll() {
      return I();
    },
    set preventScroll(L) {
      I(L), g();
    },
    get wrapperId() {
      return B();
    },
    set wrapperId(L) {
      B(L), g();
    },
    get style() {
      return $();
    },
    set style(L) {
      $(L), g();
    },
    get onPlaced() {
      return H();
    },
    set onPlaced(L) {
      H(L), g();
    },
    get onInteractOutside() {
      return N();
    },
    set onInteractOutside(L) {
      N(L), g();
    },
    get onCloseAutoFocus() {
      return k();
    },
    set onCloseAutoFocus(L) {
      k(L), g();
    },
    get onOpenAutoFocus() {
      return D();
    },
    set onOpenAutoFocus(L) {
      D(L), g();
    },
    get onFocusOutside() {
      return P();
    },
    set onFocusOutside(L) {
      P(L), g();
    },
    get interactOutsideBehavior() {
      return A();
    },
    set interactOutsideBehavior(L = "close") {
      A(L), g();
    },
    get loop() {
      return R();
    },
    set loop(L) {
      R(L), g();
    },
    get trapFocus() {
      return M();
    },
    set trapFocus(L = !0) {
      M(L), g();
    },
    get isValidEvent() {
      return Y();
    },
    set isValidEvent(L = () => !1) {
      Y(L), g();
    },
    get customAnchor() {
      return U();
    },
    set customAnchor(L = null) {
      U(L), g();
    },
    get isStatic() {
      return V();
    },
    set isStatic(L = !1) {
      V(L), g();
    },
    get ref() {
      return j();
    },
    set ref(L) {
      j(L), g();
    },
    get shouldRender() {
      return q();
    },
    set shouldRender(L) {
      q(L), g();
    }
  }, X = de(), re = J(X);
  {
    var ee = (L) => {
      Nu(L, Ve(
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
            return u();
          },
          get onPointerUp() {
            return l();
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
            return p();
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
            return S();
          },
          get hideWhenDetached() {
            return E();
          },
          get updatePositionStrategy() {
            return x();
          },
          get strategy() {
            return _();
          },
          get dir() {
            return T();
          },
          get preventScroll() {
            return I();
          },
          get wrapperId() {
            return B();
          },
          get style() {
            return $();
          },
          get onPlaced() {
            return H();
          },
          get customAnchor() {
            return U();
          },
          get isStatic() {
            return V();
          },
          get enabled() {
            return r();
          },
          get onInteractOutside() {
            return N();
          },
          get onCloseAutoFocus() {
            return k();
          },
          get onOpenAutoFocus() {
            return D();
          },
          get interactOutsideBehavior() {
            return A();
          },
          get loop() {
            return R();
          },
          get trapFocus() {
            return M();
          },
          get isValidEvent() {
            return Y();
          },
          get onFocusOutside() {
            return P();
          },
          forceMount: !1,
          get ref() {
            return j();
          }
        },
        () => F
      ));
    };
    ie(re, (L) => {
      q() && L(ee);
    });
  }
  return O(t, X), ce(Q);
}
se(
  wv,
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
function bv(t, e) {
  ue(e, !0);
  let n = v(e, "popper", 7), r = v(e, "onEscapeKeydown", 7), o = v(e, "escapeKeydownBehavior", 7), i = v(e, "preventOverflowTextSelection", 7), s = v(e, "id", 7), a = v(e, "onPointerDown", 7), u = v(e, "onPointerUp", 7), l = v(e, "side", 7), d = v(e, "sideOffset", 7), f = v(e, "align", 7), h = v(e, "alignOffset", 7), p = v(e, "arrowPadding", 7), m = v(e, "avoidCollisions", 7), y = v(e, "collisionBoundary", 7), w = v(e, "collisionPadding", 7), b = v(e, "sticky", 7), S = v(e, "hideWhenDetached", 7), E = v(e, "updatePositionStrategy", 7), x = v(e, "strategy", 7), _ = v(e, "dir", 7), T = v(e, "preventScroll", 7), I = v(e, "wrapperId", 7), B = v(e, "style", 7), $ = v(e, "onPlaced", 7), H = v(e, "onInteractOutside", 7), N = v(e, "onCloseAutoFocus", 7), k = v(e, "onOpenAutoFocus", 7), D = v(e, "onFocusOutside", 7), P = v(e, "interactOutsideBehavior", 7, "close"), A = v(e, "loop", 7), R = v(e, "trapFocus", 7, !0), M = v(e, "isValidEvent", 7, () => !1), Y = v(e, "customAnchor", 7, null), U = v(e, "isStatic", 7, !1), V = v(e, "enabled", 7), j = /* @__PURE__ */ Le(e, [
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
  var q = {
    get popper() {
      return n();
    },
    set popper(F) {
      n(F), g();
    },
    get onEscapeKeydown() {
      return r();
    },
    set onEscapeKeydown(F) {
      r(F), g();
    },
    get escapeKeydownBehavior() {
      return o();
    },
    set escapeKeydownBehavior(F) {
      o(F), g();
    },
    get preventOverflowTextSelection() {
      return i();
    },
    set preventOverflowTextSelection(F) {
      i(F), g();
    },
    get id() {
      return s();
    },
    set id(F) {
      s(F), g();
    },
    get onPointerDown() {
      return a();
    },
    set onPointerDown(F) {
      a(F), g();
    },
    get onPointerUp() {
      return u();
    },
    set onPointerUp(F) {
      u(F), g();
    },
    get side() {
      return l();
    },
    set side(F) {
      l(F), g();
    },
    get sideOffset() {
      return d();
    },
    set sideOffset(F) {
      d(F), g();
    },
    get align() {
      return f();
    },
    set align(F) {
      f(F), g();
    },
    get alignOffset() {
      return h();
    },
    set alignOffset(F) {
      h(F), g();
    },
    get arrowPadding() {
      return p();
    },
    set arrowPadding(F) {
      p(F), g();
    },
    get avoidCollisions() {
      return m();
    },
    set avoidCollisions(F) {
      m(F), g();
    },
    get collisionBoundary() {
      return y();
    },
    set collisionBoundary(F) {
      y(F), g();
    },
    get collisionPadding() {
      return w();
    },
    set collisionPadding(F) {
      w(F), g();
    },
    get sticky() {
      return b();
    },
    set sticky(F) {
      b(F), g();
    },
    get hideWhenDetached() {
      return S();
    },
    set hideWhenDetached(F) {
      S(F), g();
    },
    get updatePositionStrategy() {
      return E();
    },
    set updatePositionStrategy(F) {
      E(F), g();
    },
    get strategy() {
      return x();
    },
    set strategy(F) {
      x(F), g();
    },
    get dir() {
      return _();
    },
    set dir(F) {
      _(F), g();
    },
    get preventScroll() {
      return T();
    },
    set preventScroll(F) {
      T(F), g();
    },
    get wrapperId() {
      return I();
    },
    set wrapperId(F) {
      I(F), g();
    },
    get style() {
      return B();
    },
    set style(F) {
      B(F), g();
    },
    get onPlaced() {
      return $();
    },
    set onPlaced(F) {
      $(F), g();
    },
    get onInteractOutside() {
      return H();
    },
    set onInteractOutside(F) {
      H(F), g();
    },
    get onCloseAutoFocus() {
      return N();
    },
    set onCloseAutoFocus(F) {
      N(F), g();
    },
    get onOpenAutoFocus() {
      return k();
    },
    set onOpenAutoFocus(F) {
      k(F), g();
    },
    get onFocusOutside() {
      return D();
    },
    set onFocusOutside(F) {
      D(F), g();
    },
    get interactOutsideBehavior() {
      return P();
    },
    set interactOutsideBehavior(F = "close") {
      P(F), g();
    },
    get loop() {
      return A();
    },
    set loop(F) {
      A(F), g();
    },
    get trapFocus() {
      return R();
    },
    set trapFocus(F = !0) {
      R(F), g();
    },
    get isValidEvent() {
      return M();
    },
    set isValidEvent(F = () => !1) {
      M(F), g();
    },
    get customAnchor() {
      return Y();
    },
    set customAnchor(F = null) {
      Y(F), g();
    },
    get isStatic() {
      return U();
    },
    set isStatic(F = !1) {
      U(F), g();
    },
    get enabled() {
      return V();
    },
    set enabled(F) {
      V(F), g();
    }
  };
  return Nu(t, Ve(
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
        return u();
      },
      get side() {
        return l();
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
        return p();
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
        return S();
      },
      get updatePositionStrategy() {
        return E();
      },
      get strategy() {
        return x();
      },
      get dir() {
        return _();
      },
      get preventScroll() {
        return T();
      },
      get wrapperId() {
        return I();
      },
      get style() {
        return B();
      },
      get onPlaced() {
        return $();
      },
      get customAnchor() {
        return Y();
      },
      get isStatic() {
        return U();
      },
      get enabled() {
        return V();
      },
      get onInteractOutside() {
        return H();
      },
      get onCloseAutoFocus() {
        return N();
      },
      get onOpenAutoFocus() {
        return k();
      },
      get interactOutsideBehavior() {
        return P();
      },
      get loop() {
        return A();
      },
      get trapFocus() {
        return R();
      },
      get isValidEvent() {
        return M();
      },
      get onFocusOutside() {
        return D();
      }
    },
    () => j,
    { forceMount: !0 }
  )), ce(q);
}
se(
  bv,
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
var p5 = /* @__PURE__ */ ne("<div><div><!></div></div>"), m5 = /* @__PURE__ */ ne("<div><div><!></div></div>");
function ul(t, e) {
  const n = ai();
  ue(e, !0);
  let r = v(e, "id", 23, () => Vn(n)), o = v(e, "ref", 15, null), i = v(e, "forceMount", 7, !1), s = v(e, "side", 7, "bottom"), a = v(e, "onInteractOutside", 7, Re), u = v(e, "onEscapeKeydown", 7, Re), l = v(e, "children", 7), d = v(e, "child", 7), f = v(e, "preventScroll", 7, !1), h = v(e, "style", 7), p = /* @__PURE__ */ Le(e, [
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
  const m = Su.create({
    id: ge(() => r()),
    ref: ge(() => o(), (_) => o(_)),
    onInteractOutside: ge(() => a()),
    onEscapeKeydown: ge(() => u())
  }), y = /* @__PURE__ */ C(() => Mn(p, m.props));
  var w = {
    get id() {
      return r();
    },
    set id(_ = Vn(n)) {
      r(_), g();
    },
    get ref() {
      return o();
    },
    set ref(_ = null) {
      o(_), g();
    },
    get forceMount() {
      return i();
    },
    set forceMount(_ = !1) {
      i(_), g();
    },
    get side() {
      return s();
    },
    set side(_ = "bottom") {
      s(_), g();
    },
    get onInteractOutside() {
      return a();
    },
    set onInteractOutside(_ = Re) {
      a(_), g();
    },
    get onEscapeKeydown() {
      return u();
    },
    set onEscapeKeydown(_ = Re) {
      u(_), g();
    },
    get children() {
      return l();
    },
    set children(_) {
      l(_), g();
    },
    get child() {
      return d();
    },
    set child(_) {
      d(_), g();
    },
    get preventScroll() {
      return f();
    },
    set preventScroll(_ = !1) {
      f(_), g();
    },
    get style() {
      return h();
    },
    set style(_) {
      h(_), g();
    }
  }, b = de(), S = J(b);
  {
    var E = (_) => {
      bv(_, Ve(() => c(y), () => m.popperProps, {
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
        popper: (I, B) => {
          let $ = () => B?.().props, H = () => B?.().wrapperProps;
          const N = /* @__PURE__ */ C(() => Mn($(), { style: m.props.style }, { style: h() }));
          var k = de(), D = J(k);
          {
            var P = (R) => {
              var M = de(), Y = J(M);
              {
                let U = /* @__PURE__ */ C(() => ({
                  props: c(N),
                  wrapperProps: H(),
                  ...m.snippetProps
                }));
                Oe(Y, d, () => c(U));
              }
              O(R, M);
            }, A = (R) => {
              var M = p5();
              Ge(M, () => ({ ...H() }));
              var Y = Z(M);
              Ge(Y, () => ({ ...c(N) }));
              var U = Z(Y);
              Oe(U, () => l() ?? ze), W(Y), W(M), O(R, M);
            };
            ie(D, (R) => {
              d() ? R(P) : R(A, !1);
            });
          }
          O(I, k);
        },
        $$slots: { popper: !0 }
      }));
    }, x = (_) => {
      var T = de(), I = J(T);
      {
        var B = ($) => {
          wv($, Ve(() => c(y), () => m.popperProps, {
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
            popper: (N, k) => {
              let D = () => k?.().props, P = () => k?.().wrapperProps;
              const A = /* @__PURE__ */ C(() => Mn(D(), { style: m.props.style }, { style: h() }));
              var R = de(), M = J(R);
              {
                var Y = (V) => {
                  var j = de(), q = J(j);
                  {
                    let F = /* @__PURE__ */ C(() => ({
                      props: c(A),
                      wrapperProps: P(),
                      ...m.snippetProps
                    }));
                    Oe(q, d, () => c(F));
                  }
                  O(V, j);
                }, U = (V) => {
                  var j = m5();
                  Ge(j, () => ({ ...P() }));
                  var q = Z(j);
                  Ge(q, () => ({ ...c(A) }));
                  var F = Z(q);
                  Oe(F, () => l() ?? ze), W(q), W(j), O(V, j);
                };
                ie(M, (V) => {
                  d() ? V(Y) : V(U, !1);
                });
              }
              O(N, R);
            },
            $$slots: { popper: !0 }
          }));
        };
        ie(
          I,
          ($) => {
            i() || $(B);
          },
          !0
        );
      }
      O(_, T);
    };
    ie(S, (_) => {
      i() ? _(E) : _(x, !1);
    });
  }
  return O(t, b), ce(w);
}
se(
  ul,
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
function xv(t, e) {
  ue(e, !0);
  let n = v(e, "mounted", 15, !1), r = v(e, "onMountedChange", 7, Re);
  qx(() => (n(!0), r()(!0), () => {
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
    set onMountedChange(i = Re) {
      r(i), g();
    }
  };
  return ce(o);
}
se(xv, { mounted: {}, onMountedChange: {} }, [], [], !0);
var y5 = /* @__PURE__ */ ne("<div><!></div>"), w5 = /* @__PURE__ */ ne("<!> <!>", 1);
function cl(t, e) {
  const n = ai();
  ue(e, !0);
  let r = v(e, "id", 23, () => Vn(n)), o = v(e, "ref", 15, null), i = v(e, "value", 7), s = v(e, "label", 23, i), a = v(e, "disabled", 7, !1), u = v(e, "children", 7), l = v(e, "child", 7), d = v(e, "onHighlight", 7, Re), f = v(e, "onUnhighlight", 7, Re), h = /* @__PURE__ */ Le(e, [
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
  const p = ku.create({
    id: ge(() => r()),
    ref: ge(() => o(), (_) => o(_)),
    value: ge(() => i()),
    disabled: ge(() => a()),
    label: ge(() => s()),
    onHighlight: ge(() => d()),
    onUnhighlight: ge(() => f())
  }), m = /* @__PURE__ */ C(() => Mn(h, p.props));
  var y = {
    get id() {
      return r();
    },
    set id(_ = Vn(n)) {
      r(_), g();
    },
    get ref() {
      return o();
    },
    set ref(_ = null) {
      o(_), g();
    },
    get value() {
      return i();
    },
    set value(_) {
      i(_), g();
    },
    get label() {
      return s();
    },
    set label(_ = i) {
      s(_), g();
    },
    get disabled() {
      return a();
    },
    set disabled(_ = !1) {
      a(_), g();
    },
    get children() {
      return u();
    },
    set children(_) {
      u(_), g();
    },
    get child() {
      return l();
    },
    set child(_) {
      l(_), g();
    },
    get onHighlight() {
      return d();
    },
    set onHighlight(_ = Re) {
      d(_), g();
    },
    get onUnhighlight() {
      return f();
    },
    set onUnhighlight(_ = Re) {
      f(_), g();
    }
  }, w = w5(), b = J(w);
  {
    var S = (_) => {
      var T = de(), I = J(T);
      {
        let B = /* @__PURE__ */ C(() => ({ props: c(m), ...p.snippetProps }));
        Oe(I, l, () => c(B));
      }
      O(_, T);
    }, E = (_) => {
      var T = y5();
      Ge(T, () => ({ ...c(m) }));
      var I = Z(T);
      Oe(I, () => u() ?? ze, () => p.snippetProps), W(T), O(_, T);
    };
    ie(b, (_) => {
      l() ? _(S) : _(E, !1);
    });
  }
  var x = z(b, 2);
  return xv(x, {
    get mounted() {
      return p.mounted;
    },
    set mounted(_) {
      p.mounted = _;
    }
  }), O(t, w), ce(y);
}
se(
  cl,
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
var b5 = /* @__PURE__ */ ne("<div><!></div>");
const x5 = {
  hash: "svelte-z03me6",
  code: `
	/* Hide scrollbars cross browser and enable momentum scroll for touch devices */[data-select-viewport] {scrollbar-width:none !important;-ms-overflow-style:none !important;-webkit-overflow-scrolling:touch !important;}[data-combobox-viewport] {scrollbar-width:none !important;-ms-overflow-style:none !important;-webkit-overflow-scrolling:touch !important;}[data-combobox-viewport]::-webkit-scrollbar {display:none !important;}[data-select-viewport]::-webkit-scrollbar {display:none !important;}`
};
function dl(t, e) {
  const n = ai();
  ue(e, !0), Je(t, x5);
  let r = v(e, "id", 23, () => Vn(n)), o = v(e, "ref", 15, null), i = v(e, "children", 7), s = v(e, "child", 7), a = /* @__PURE__ */ Le(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "id",
    "ref",
    "children",
    "child"
  ]);
  const u = Pu.create({
    id: ge(() => r()),
    ref: ge(() => o(), (y) => o(y))
  }), l = /* @__PURE__ */ C(() => Mn(a, u.props));
  var d = {
    get id() {
      return r();
    },
    set id(y = Vn(n)) {
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
  }, f = de(), h = J(f);
  {
    var p = (y) => {
      var w = de(), b = J(w);
      Oe(b, s, () => ({ props: c(l) })), O(y, w);
    }, m = (y) => {
      var w = b5();
      Ge(w, () => ({ ...c(l) }));
      var b = Z(w);
      Oe(b, () => i() ?? ze), W(w), O(y, w);
    };
    ie(h, (y) => {
      s() ? y(p) : y(m, !1);
    });
  }
  return O(t, f), ce(d);
}
se(dl, { id: {}, ref: {}, children: {}, child: {} }, [], [], !0);
var _5 = /* @__PURE__ */ ne("<!> <!>", 1);
function fl(t, e) {
  ue(e, !0);
  let n = v(e, "value", 15), r = v(e, "onValueChange", 7, Re), o = v(e, "name", 7, ""), i = v(e, "disabled", 7, !1), s = v(e, "type", 7), a = v(e, "open", 15, !1), u = v(e, "onOpenChange", 7, Re), l = v(e, "onOpenChangeComplete", 7, Re), d = v(e, "loop", 7, !1), f = v(e, "scrollAlignment", 7, "nearest"), h = v(e, "required", 7, !1), p = v(e, "items", 23, () => []), m = v(e, "allowDeselect", 7, !1), y = v(e, "autocomplete", 7), w = v(e, "children", 7);
  function b() {
    n() === void 0 && n(s() === "single" ? "" : []);
  }
  b(), yt.pre(() => n(), () => {
    b();
  });
  let S = /* @__PURE__ */ ye("");
  const E = g5.create({
    type: s(),
    value: ge(() => n(), (H) => {
      n(H), r()(H);
    }),
    disabled: ge(() => i()),
    required: ge(() => h()),
    open: ge(() => a(), (H) => {
      a(H), u()(H);
    }),
    loop: ge(() => d()),
    scrollAlignment: ge(() => f()),
    name: ge(() => o()),
    isCombobox: !1,
    items: ge(() => p()),
    allowDeselect: ge(() => m()),
    inputValue: ge(() => c(S), (H) => K(S, H, !0)),
    onOpenChangeComplete: ge(() => l())
  });
  var x = {
    get value() {
      return n();
    },
    set value(H) {
      n(H), g();
    },
    get onValueChange() {
      return r();
    },
    set onValueChange(H = Re) {
      r(H), g();
    },
    get name() {
      return o();
    },
    set name(H = "") {
      o(H), g();
    },
    get disabled() {
      return i();
    },
    set disabled(H = !1) {
      i(H), g();
    },
    get type() {
      return s();
    },
    set type(H) {
      s(H), g();
    },
    get open() {
      return a();
    },
    set open(H = !1) {
      a(H), g();
    },
    get onOpenChange() {
      return u();
    },
    set onOpenChange(H = Re) {
      u(H), g();
    },
    get onOpenChangeComplete() {
      return l();
    },
    set onOpenChangeComplete(H = Re) {
      l(H), g();
    },
    get loop() {
      return d();
    },
    set loop(H = !1) {
      d(H), g();
    },
    get scrollAlignment() {
      return f();
    },
    set scrollAlignment(H = "nearest") {
      f(H), g();
    },
    get required() {
      return h();
    },
    set required(H = !1) {
      h(H), g();
    },
    get items() {
      return p();
    },
    set items(H = []) {
      p(H), g();
    },
    get allowDeselect() {
      return m();
    },
    set allowDeselect(H = !1) {
      m(H), g();
    },
    get autocomplete() {
      return y();
    },
    set autocomplete(H) {
      y(H), g();
    },
    get children() {
      return w();
    },
    set children(H) {
      w(H), g();
    }
  }, _ = _5(), T = J(_);
  fv(T, {
    children: (H, N) => {
      var k = de(), D = J(k);
      Oe(D, () => w() ?? ze), O(H, k);
    },
    $$slots: { default: !0 }
  });
  var I = z(T, 2);
  {
    var B = (H) => {
      var N = de(), k = J(N);
      {
        var D = (A) => {
          ji(A, {
            get autocomplete() {
              return y();
            }
          });
        }, P = (A) => {
          var R = de(), M = J(R);
          Ct(M, 16, () => E.opts.value.current, (Y) => Y, (Y, U) => {
            ji(Y, {
              get value() {
                return U;
              },
              get autocomplete() {
                return y();
              }
            });
          }), O(A, R);
        };
        ie(k, (A) => {
          E.opts.value.current.length === 0 ? A(D) : A(P, !1);
        });
      }
      O(H, N);
    }, $ = (H) => {
      ji(H, {
        get autocomplete() {
          return y();
        },
        get value() {
          return E.opts.value.current;
        },
        set value(N) {
          E.opts.value.current = N;
        }
      });
    };
    ie(I, (H) => {
      Array.isArray(E.opts.value.current) ? H(B) : H($, !1);
    });
  }
  return O(t, _), ce(x);
}
se(
  fl,
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
var C5 = /* @__PURE__ */ ne("<button><!></button>");
function hl(t, e) {
  const n = ai();
  ue(e, !0);
  let r = v(e, "id", 23, () => Vn(n)), o = v(e, "ref", 15, null), i = v(e, "child", 7), s = v(e, "children", 7), a = v(e, "type", 7, "button"), u = /* @__PURE__ */ Le(e, [
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
  const l = Cu.create({
    id: ge(() => r()),
    ref: ge(() => o(), (m) => o(m))
  }), d = /* @__PURE__ */ C(() => Mn(u, l.props, { type: a() }));
  var f = {
    get id() {
      return r();
    },
    set id(m = Vn(n)) {
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
  }, h = de(), p = J(h);
  return xt(p, () => vv, (m, y) => {
    y(m, {
      get id() {
        return r();
      },
      get ref() {
        return l.opts.ref;
      },
      children: (w, b) => {
        var S = de(), E = J(S);
        {
          var x = (T) => {
            var I = de(), B = J(I);
            Oe(B, i, () => ({ props: c(d) })), O(T, I);
          }, _ = (T) => {
            var I = C5();
            Ge(I, () => ({ ...c(d) }));
            var B = Z(I);
            Oe(B, () => s() ?? ze), W(I), O(T, I);
          };
          ie(E, (T) => {
            i() ? T(x) : T(_, !1);
          });
        }
        O(w, S);
      },
      $$slots: { default: !0 }
    });
  }), O(t, h), ce(f);
}
se(hl, { id: {}, ref: {}, child: {}, children: {}, type: {} }, [], [], !0);
const S5 = {
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
const k5 = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
  return !1;
};
const E5 = Symbol("lucide-context"), P5 = () => yn(E5);
var N5 = /* @__PURE__ */ _e("<svg><!><!></svg>");
function na(t, e) {
  ue(e, !0);
  const n = P5() ?? {}, r = v(e, "name", 7), o = v(e, "color", 23, () => n.color ?? "currentColor"), i = v(e, "size", 23, () => n.size ?? 24), s = v(e, "strokeWidth", 23, () => n.strokeWidth ?? 2), a = v(e, "absoluteStrokeWidth", 23, () => n.absoluteStrokeWidth ?? !1), u = v(e, "iconNode", 23, () => []), l = v(e, "children", 7), d = /* @__PURE__ */ Le(e, [
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
  ]), f = /* @__PURE__ */ C(() => a() ? Number(s()) * 24 / Number(i()) : s());
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
      return u();
    },
    set iconNode(w = []) {
      u(w), g();
    },
    get children() {
      return l();
    },
    set children(w) {
      l(w), g();
    }
  }, p = N5();
  Ge(
    p,
    (w) => ({
      ...S5,
      ...w,
      ...d,
      width: i(),
      height: i(),
      stroke: o(),
      "stroke-width": c(f),
      class: [
        "lucide-icon lucide",
        n.class,
        r() && `lucide-${r()}`,
        e.class
      ]
    }),
    [
      () => !l() && !k5(d) && { "aria-hidden": "true" }
    ]
  );
  var m = Z(p);
  Ct(m, 17, u, ao, (w, b) => {
    var S = /* @__PURE__ */ C(() => yo(c(b), 2));
    let E = () => c(S)[0], x = () => c(S)[1];
    var _ = de(), T = J(_);
    ff(T, E, !0, (I, B) => {
      Ge(I, () => ({ ...x() }));
    }), O(w, _);
  });
  var y = z(m);
  return Oe(y, () => l() ?? ze), W(p), O(t, p), ce(h);
}
se(
  na,
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
function _v(t, e) {
  ue(e, !0);
  let n = /* @__PURE__ */ Le(e, ["$$slots", "$$events", "$$legacy", "$$host"]);
  const r = [["path", { d: "M20 6 9 17l-5-5" }]];
  na(t, Ve({ name: "check" }, () => n, {
    get iconNode() {
      return r;
    },
    children: (o, i) => {
      var s = de(), a = J(s);
      Oe(a, () => e.children ?? ze), O(o, s);
    },
    $$slots: { default: !0 }
  })), ce();
}
se(_v, {}, [], [], !0);
function Cv(t, e) {
  ue(e, !0);
  let n = /* @__PURE__ */ Le(e, ["$$slots", "$$events", "$$legacy", "$$host"]);
  const r = [["path", { d: "M5 12h14" }]];
  na(t, Ve({ name: "minus" }, () => n, {
    get iconNode() {
      return r;
    },
    children: (o, i) => {
      var s = de(), a = J(s);
      Oe(a, () => e.children ?? ze), O(o, s);
    },
    $$slots: { default: !0 }
  })), ce();
}
se(Cv, {}, [], [], !0);
var T5 = /* @__PURE__ */ ne('<div data-slot="checkbox-indicator" class="tf-checkbox-indicator"><!></div>');
function Sv(t, e) {
  ue(e, !0);
  let n = v(e, "ref", 15, null), r = v(e, "checked", 15, !1), o = v(e, "indeterminate", 15, !1), i = v(e, "class", 7), s = /* @__PURE__ */ Le(e, [
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
  }, u = de(), l = J(u);
  {
    const d = (h, p) => {
      let m = () => p?.().checked, y = () => p?.().indeterminate;
      var w = T5(), b = Z(w);
      {
        var S = (x) => {
          _v(x, {});
        }, E = (x) => {
          var _ = de(), T = J(_);
          {
            var I = (B) => {
              Cv(B, {});
            };
            ie(
              T,
              (B) => {
                y() && B(I);
              },
              !0
            );
          }
          O(x, _);
        };
        ie(b, (x) => {
          m() ? x(S) : x(E, !1);
        });
      }
      W(w), O(h, w);
    };
    let f = /* @__PURE__ */ C(() => gn("nopan nodrag tf-checkbox peer", i()));
    xt(l, () => jg, (h, p) => {
      p(h, Ve(
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
  return O(t, u), ce(a);
}
se(Sv, { ref: {}, checked: {}, indeterminate: {}, class: {} }, [], [], !0);
var O5 = /* @__PURE__ */ ne('<div><input type="hidden"/> <!> <!></div>');
const A5 = {
  hash: "svelte-1o3a23c",
  code: ".tf-chosen.svelte-1o3a23c {display:flex;flex-direction:row;align-items:center;justify-content:space-between;gap:5px;}"
};
function kv(t, e) {
  ue(e, !0), Je(t, A5);
  const n = v(e, "placeholder", 7), r = v(e, "label", 7), o = v(e, "value", 7), i = v(e, "buttonText", 7, "选择..."), s = v(e, "onChosen", 7), a = /* @__PURE__ */ Le(e, [
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
  var u = {
    get placeholder() {
      return n();
    },
    set placeholder(p) {
      n(p), g();
    },
    get label() {
      return r();
    },
    set label(p) {
      r(p), g();
    },
    get value() {
      return o();
    },
    set value(p) {
      o(p), g();
    },
    get buttonText() {
      return i();
    },
    set buttonText(p = "选择...") {
      i(p), g();
    },
    get onChosen() {
      return s();
    },
    set onChosen(p) {
      s(p), g();
    }
  }, l = O5();
  Ge(
    l,
    () => ({
      ...a,
      class: `tf-chosen nopan nodrag ${e.class ?? ""}`
    }),
    void 0,
    void 0,
    void 0,
    "svelte-1o3a23c"
  );
  var d = Z(l);
  Qn(d);
  var f = z(d, 2);
  ft(f, {
    get value() {
      return r();
    },
    get placeholder() {
      return n();
    },
    style: "flex-grow: 1;",
    disabled: !0
  });
  var h = z(f, 2);
  return $e(h, {
    variant: "outline",
    onclick: (p) => {
      s()?.(o(), r(), p);
    },
    style: "padding: 3px",
    children: (p, m) => {
      Se();
      var y = Me();
      Te(() => tt(y, i())), O(p, y);
    },
    $$slots: { default: !0 }
  }), W(l), Te(() => zi(d, o())), O(t, l), ce(u);
}
se(
  kv,
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
var D5 = /* @__PURE__ */ ne("<input/>"), I5 = /* @__PURE__ */ ne("<input/>");
function ft(t, e) {
  ue(e, !0);
  let n = v(e, "ref", 15, null), r = v(e, "value", 15), o = v(e, "type", 7), i = v(e, "files", 15), s = v(e, "class", 7), a = v(e, "data-slot", 7, "input"), u = /* @__PURE__ */ Le(e, [
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
  var l = {
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
  }, d = de(), f = J(d);
  {
    var h = (m) => {
      var y = D5();
      Ge(
        y,
        (w) => ({
          "data-slot": a(),
          class: w,
          type: "file",
          ...u
        }),
        [() => gn("nopan nodrag tf-input", s())],
        void 0,
        void 0,
        void 0,
        !0
      ), Nt(y, (w) => n(w), () => n()), x1(y, i), rs(y, r), O(m, y);
    }, p = (m) => {
      var y = I5();
      Ge(
        y,
        (w) => ({
          "data-slot": a(),
          spellcheck: "false",
          class: w,
          type: o(),
          ...u
        }),
        [() => gn("nopan nodrag tf-input", s())],
        void 0,
        void 0,
        void 0,
        !0
      ), Nt(y, (w) => n(w), () => n()), rs(y, r), O(m, y);
    };
    ie(f, (m) => {
      o() === "file" ? m(h) : m(p, !1);
    });
  }
  return O(t, d), ce(l);
}
se(
  ft,
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
var M5 = /* @__PURE__ */ ne("<textarea></textarea>");
function qe(t, e) {
  ue(e, !0);
  let n = v(e, "ref", 15, null), r = v(e, "value", 15), o = v(e, "class", 7), i = v(e, "data-slot", 7, "textarea"), s = v(e, "height", 7), a = v(e, "autoHeight", 7, !0), u = v(e, "maxHeight", 7), l = v(e, "onHeightChange", 7), d = /* @__PURE__ */ Le(e, [
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
  function p() {
    if (f && a()) {
      if (s() !== void 0) {
        const E = typeof s() == "number" ? `${s()}px` : s();
        f.style.height = E, f.style.overflowY = "hidden", l()?.(E);
        return;
      }
      f.style.height = "auto", f.style.overflowY = "hidden";
      let S = f.scrollHeight;
      if (!h) {
        const E = e.rows || 1, x = getComputedStyle(f);
        h = parseFloat(x.fontSize) * 1.2 * E + parseFloat(x.paddingTop) + parseFloat(x.paddingBottom) + parseFloat(x.borderTopWidth);
      }
      if (S < h && (S = h), u()) {
        const E = typeof u() == "number" ? `${u()}px` : u();
        S > parseInt(E) ? (f.style.height = E, f.style.overflowY = "auto") : f.style.height = `${S}px`;
      } else
        f.style.height = `${S}px`;
      l()?.(f.style.height);
    }
  }
  He(() => {
    p();
  });
  var m = {
    get ref() {
      return n();
    },
    set ref(S = null) {
      n(S), g();
    },
    get value() {
      return r();
    },
    set value(S) {
      r(S), g();
    },
    get class() {
      return o();
    },
    set class(S) {
      o(S), g();
    },
    get "data-slot"() {
      return i();
    },
    set "data-slot"(S = "textarea") {
      i(S), g();
    },
    get height() {
      return s();
    },
    set height(S) {
      s(S), g();
    },
    get autoHeight() {
      return a();
    },
    set autoHeight(S = !0) {
      a(S), g();
    },
    get maxHeight() {
      return u();
    },
    set maxHeight(S) {
      u(S), g();
    },
    get onHeightChange() {
      return l();
    },
    set onHeightChange(S) {
      l(S), g();
    }
  }, y = M5();
  Wp(y);
  var w = (S) => {
    p(), e.oninput?.(S);
  }, b = (S) => {
    p(), e.onchange?.(S);
  };
  return Ge(
    y,
    (S) => ({
      spellcheck: "false",
      ...d,
      "data-slot": i(),
      oninput: w,
      onchange: b,
      class: S
    }),
    [() => gn("nodrag nowheel tf-textarea", o())]
  ), Nt(y, (S) => f = S, () => f), rs(y, r), O(t, y), ce(m);
}
se(
  qe,
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
var L5 = /* @__PURE__ */ ne('<div role="button"><!></div>'), H5 = /* @__PURE__ */ ne("<div></div>");
function Ev(t, e) {
  const n = Zu(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]), r = Zu(n, ["items", "onChange", "activeIndex"]);
  ue(e, !1);
  let o = v(e, "items", 28, () => []), i = v(e, "onChange", 12, () => {
  }), s = v(e, "activeIndex", 12, 0);
  function a(d, f) {
    s(f), i()?.(d, f);
  }
  var u = {
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
  Hl();
  var l = H5();
  return Ge(l, () => ({
    ...r,
    class: `tf-tabs ${Al(r), it(() => r.class) ?? ""}`
  })), Ct(l, 5, o, ao, (d, f, h) => {
    var p = L5();
    Ne(p, "tabindex", h), p.__click = () => a(c(f), h), p.__keydown = (b) => {
      (b.key === "Enter" || b.key === " ") && (b.preventDefault(), a(c(f), h));
    };
    var m = Z(p);
    {
      var y = (b) => {
        var S = Me();
        Te(() => tt(S, (c(f), it(() => c(f).label)))), O(b, S);
      }, w = (b) => {
        var S = de(), E = J(S);
        Oe(E, () => (c(f), it(() => c(f).label) ?? ze)), O(b, S);
      };
      ie(m, (b) => {
        c(f), it(() => typeof c(f).label == "string") ? b(y) : b(w, !1);
      });
    }
    W(p), Te(() => Yt(p, 1, `tf-tabs-item ${h === s() ? "active" : ""}`)), O(d, p);
  }), W(l), O(t, l), ce(u);
}
Sr(["click", "keydown"]);
se(Ev, { items: {}, onChange: {}, activeIndex: {} }, [], [], !0);
var V5 = /* @__PURE__ */ ne('<span class="tf-collapse-item-title-icon"><!></span>'), z5 = /* @__PURE__ */ ne('<div class="tf-collapse-item-description"><!></div>'), R5 = /* @__PURE__ */ ne('<div class="tf-collapse-item-content"><!></div>'), F5 = /* @__PURE__ */ ne('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><!> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), B5 = /* @__PURE__ */ ne("<div></div>");
const $5 = {
  hash: "svelte-ynwjxt",
  code: `
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-ynwjxt {transform:rotate(90deg);transition:transform 0.3s ease;}`
};
function Pv(t, e) {
  ue(e, !0), Je(t, $5);
  let n = v(e, "items", 7), r = v(e, "onChange", 7), o = v(e, "activeKeys", 31, () => ht([]));
  function i(u) {
    o().includes(u.key) ? o(o().filter((l) => l !== u.key)) : (o().push(u.key), o(o())), r()?.(u, o());
  }
  var s = {
    get items() {
      return n();
    },
    set items(u) {
      n(u), g();
    },
    get onChange() {
      return r();
    },
    set onChange(u) {
      r(u), g();
    },
    get activeKeys() {
      return o();
    },
    set activeKeys(u = []) {
      o(u), g();
    }
  }, a = B5();
  return Ct(a, 21, n, ao, (u, l, d) => {
    var f = F5(), h = Z(f);
    Ne(h, "tabindex", d), h.__click = () => i(c(l)), h.__keydown = (_) => {
      (_.key === "Enter" || _.key === " ") && (_.preventDefault(), i(c(l)));
    };
    var p = Z(h);
    {
      var m = (_) => {
        var T = V5(), I = Z(T);
        Xn(I, {
          get target() {
            return c(l).icon;
          }
        }), W(T), O(_, T);
      };
      ie(p, (_) => {
        c(l).icon && _(m);
      });
    }
    var y = z(p, 2);
    Xn(y, {
      get target() {
        return c(l).title;
      }
    });
    var w = z(y, 2);
    W(h);
    var b = z(h, 2);
    {
      var S = (_) => {
        var T = z5(), I = Z(T);
        Xn(I, {
          get target() {
            return c(l).description;
          }
        }), W(T), O(_, T);
      };
      ie(b, (_) => {
        c(l).description && _(S);
      });
    }
    var E = z(b, 2);
    {
      var x = (_) => {
        var T = R5(), I = Z(T);
        Xn(I, {
          get target() {
            return c(l).content;
          }
        }), W(T), O(_, T);
      };
      ie(E, (_) => {
        o().includes(c(l).key) && _(x);
      });
    }
    W(f), Te((_) => Yt(w, 1, `tf-collapse-item-title-arrow ${_ ?? ""}`, "svelte-ynwjxt"), [
      () => o().includes(c(l).key) ? "rotate-90" : ""
    ]), O(u, f);
  }), W(a), Te(() => {
    Pt(a, e.style), Yt(a, 1, `tf-collapse ${e.class ?? ""}`, "svelte-ynwjxt");
  }), O(t, a), ce(s);
}
Sr(["click", "keydown"]);
se(Pv, { items: {}, onChange: {}, activeKeys: {} }, [], [], !0);
function Xn(t, e) {
  ue(e, !0);
  let n = v(e, "target", 7);
  typeof n() > "u" && n("undefined");
  var r = {
    get target() {
      return n();
    },
    set target(u) {
      n(u), g();
    }
  }, o = de(), i = J(o);
  {
    var s = (u) => {
      var l = de(), d = J(l);
      Oe(d, () => n() ?? ze), O(u, l);
    }, a = (u) => {
      var l = de(), d = J(l);
      $s(d, n), O(u, l);
    };
    ie(i, (u) => {
      typeof n() == "function" ? u(s) : u(a, !1);
    });
  }
  return O(t, o), ce(r);
}
se(Xn, { target: {} }, [], [], !0);
function gl(t, e) {
  ue(e, !0);
  let n = /* @__PURE__ */ Le(e, ["$$slots", "$$events", "$$legacy", "$$host"]);
  const r = [["path", { d: "m6 9 6 6 6-6" }]];
  na(t, Ve({ name: "chevron-down" }, () => n, {
    get iconNode() {
      return r;
    },
    children: (o, i) => {
      var s = de(), a = J(s);
      Oe(a, () => e.children ?? ze), O(o, s);
    },
    $$slots: { default: !0 }
  })), ce();
}
se(gl, {}, [], [], !0);
const vt = () => yn("svelteflow__node_id"), vn = () => yn("tinyflow_options");
var K5 = /* @__PURE__ */ ne('<span class="tf-select-heading-item">,</span>'), W5 = /* @__PURE__ */ ne("<!> <!>", 1), Z5 = /* @__PURE__ */ ne('<span class="tf-select-heading-span"> </span>'), Y5 = /* @__PURE__ */ ne('<span class="tf-select-heading"><!></span> <!>', 1), q5 = /* @__PURE__ */ ne('<div class="tf-select-empty">暂无数据</div>'), X5 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style="width: 16px;height: 16px;"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), j5 = /* @__PURE__ */ ne('<span style="width: 16px;height: 16px;"></span>'), U5 = /* @__PURE__ */ ne('<span class="tf-select-option-selected"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style="width: 16px;height: 16px;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path></svg></span>'), G5 = /* @__PURE__ */ ne('<span class="tf-select-option-content"><!> <!></span> <!>', 1), J5 = /* @__PURE__ */ ne("<!> <!>", 1), Q5 = /* @__PURE__ */ ne('<span class="tf-select-heading-span"> </span>'), eC = /* @__PURE__ */ ne('<span class="tf-select-heading"><!></span> <!>', 1), tC = /* @__PURE__ */ ne('<div class="tf-select-empty">暂无数据</div>'), nC = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style="width: 16px;height: 16px;"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), rC = /* @__PURE__ */ ne('<span style="width: 16px;height: 16px;"></span>'), oC = /* @__PURE__ */ ne('<span class="tf-select-option-selected"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style="width: 16px;height: 16px;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path></svg></span>'), iC = /* @__PURE__ */ ne('<span class="tf-select-option-content"><!> <!></span> <!>', 1), sC = /* @__PURE__ */ ne("<!> <!>", 1);
function _t(t, e) {
  ue(e, !0);
  let n = v(e, "items", 7), r = v(e, "onSelect", 7), o = v(e, "value", 23, () => []), i = v(e, "defaultValue", 23, () => []), s = v(e, "expandAll", 7, !0), a = v(e, "multiple", 7, !1), u = v(e, "expandValue", 23, () => []), l = v(e, "placeholder", 7), d = v(e, "disabled", 7, !1), f = v(e, "class", 7), h = /* @__PURE__ */ Le(e, [
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
  ]), p = vn().defaultTheme, m = /* @__PURE__ */ C(() => {
    const N = [], k = (D) => {
      for (const P of D)
        N.push(P), P.children?.length && k(P.children);
    };
    return k(n()), N;
  }), y = /* @__PURE__ */ C(() => {
    const N = [], k = o().length > 0 ? o() : i();
    for (const D of k) {
      if (D == null) continue;
      const P = c(m).find((A) => A.value === D);
      P && N.push(P);
    }
    return N;
  }), w = /* @__PURE__ */ C(() => !a() && c(y).length > 0 ? String(c(y)[0].value) : ""), b = /* @__PURE__ */ C(() => a() ? c(y).map((N) => String(N.value)) : []);
  function S(N, k) {
    N.stopPropagation(), r()?.(k);
  }
  function E(N, k = 0) {
    const D = [];
    if (N)
      for (const P of N) {
        D.push({ item: P, level: k });
        const A = s() || u().includes(P.value);
        P.children?.length && A && D.push(...E(P.children, k + 1));
      }
    return D;
  }
  let x = /* @__PURE__ */ C(() => E(n()));
  function _(N) {
    return {
      value: String(N.value),
      label: typeof N.label == "string" ? N.label : String(N.value),
      disabled: !1
    };
  }
  var T = {
    get items() {
      return n();
    },
    set items(N) {
      n(N), g();
    },
    get onSelect() {
      return r();
    },
    set onSelect(N) {
      r(N), g();
    },
    get value() {
      return o();
    },
    set value(N = []) {
      o(N), g();
    },
    get defaultValue() {
      return i();
    },
    set defaultValue(N = []) {
      i(N), g();
    },
    get expandAll() {
      return s();
    },
    set expandAll(N = !0) {
      s(N), g();
    },
    get multiple() {
      return a();
    },
    set multiple(N = !1) {
      a(N), g();
    },
    get expandValue() {
      return u();
    },
    set expandValue(N = []) {
      u(N), g();
    },
    get placeholder() {
      return l();
    },
    set placeholder(N) {
      l(N), g();
    },
    get disabled() {
      return d();
    },
    set disabled(N = !1) {
      d(N), g();
    },
    get class() {
      return f();
    },
    set class(N) {
      f(N), g();
    }
  }, I = de(), B = J(I);
  {
    var $ = (N) => {
      var k = de(), D = J(k);
      xt(D, () => fl, (P, A) => {
        A(P, Ve(
          {
            type: "multiple",
            get value() {
              return c(b);
            },
            get disabled() {
              return d();
            }
          },
          () => h,
          {
            children: (R, M) => {
              var Y = J5(), U = J(Y);
              {
                let j = /* @__PURE__ */ C(() => gn("nopan nodrag tf-select", d() && "tf-select-disabled", f()));
                xt(U, () => hl, (q, F) => {
                  F(q, {
                    get class() {
                      return c(j);
                    },
                    get disabled() {
                      return d();
                    },
                    children: (Q, X) => {
                      var re = Y5(), ee = J(re), L = Z(ee);
                      {
                        var te = (le) => {
                          var oe = de(), fe = J(oe);
                          Ct(fe, 19, () => c(y), (we) => we.value, (we, xe, pe) => {
                            var me = W5(), Ee = J(me);
                            Xn(Ee, {
                              get target() {
                                return c(xe).label;
                              }
                            });
                            var G = z(Ee, 2);
                            {
                              var Ue = (be) => {
                                var De = K5();
                                O(be, De);
                              };
                              ie(G, (be) => {
                                c(pe) < c(y).length - 1 && be(Ue);
                              });
                            }
                            O(we, me);
                          }), O(le, oe);
                        }, ve = (le) => {
                          var oe = Z5(), fe = Z(oe, !0);
                          W(oe), Te(() => tt(fe, l() ?? "")), O(le, oe);
                        };
                        ie(L, (le) => {
                          c(y).length > 0 ? le(te) : le(ve, !1);
                        });
                      }
                      W(ee);
                      var ae = z(ee, 2);
                      gl(ae, { class: "tf-select-heading-icon" }), O(Q, re);
                    },
                    $$slots: { default: !0 }
                  });
                });
              }
              var V = z(U, 2);
              xt(V, () => rl, (j, q) => {
                q(j, {
                  children: (F, Q) => {
                    var X = de(), re = J(X);
                    {
                      let ee = /* @__PURE__ */ C(() => gn("nopan nodrag nowheel tf-root tf-select-content", p === "dark" && "dark"));
                      xt(re, () => ul, (L, te) => {
                        te(L, {
                          get class() {
                            return c(ee);
                          },
                          children: (ve, ae) => {
                            var le = de(), oe = J(le);
                            xt(oe, () => dl, (fe, we) => {
                              we(fe, {
                                style: "padding: 4px;",
                                children: (xe, pe) => {
                                  var me = de(), Ee = J(me);
                                  {
                                    var G = (be) => {
                                      var De = q5();
                                      O(be, De);
                                    }, Ue = (be) => {
                                      var De = de(), Pe = J(De);
                                      Ct(Pe, 19, () => c(x), ({ item: Xe, level: je }, Ke) => `${Ke}_${Xe.value}`, (Xe, je) => {
                                        let Ke = () => c(je).item, rt = () => c(je).level;
                                        const Tt = /* @__PURE__ */ C(() => Ke().children && Ke().children.length > 0), he = /* @__PURE__ */ C(() => _(Ke()));
                                        var Ae = de(), et = J(Ae);
                                        {
                                          const Ze = (st, lt) => {
                                            let bt = () => lt?.().selected;
                                            var ut = G5(), ot = J(ut), Ot = Z(ot);
                                            {
                                              var ko = (dt) => {
                                                var ln = X5();
                                                O(dt, ln);
                                              }, an = (dt) => {
                                                var ln = j5();
                                                O(dt, ln);
                                              };
                                              ie(Ot, (dt) => {
                                                c(Tt) ? dt(ko) : dt(an, !1);
                                              });
                                            }
                                            var ra = z(Ot, 2);
                                            Xn(ra, {
                                              get target() {
                                                return Ke().label;
                                              }
                                            }), W(ot);
                                            var oa = z(ot, 2);
                                            {
                                              var ia = (dt) => {
                                                var ln = U5();
                                                O(dt, ln);
                                              };
                                              ie(oa, (dt) => {
                                                bt() && dt(ia);
                                              });
                                            }
                                            O(st, ut);
                                          };
                                          let at = /* @__PURE__ */ C(() => rt() * 12);
                                          xt(et, () => cl, (st, lt) => {
                                            lt(st, {
                                              get value() {
                                                return c(he).value;
                                              },
                                              get label() {
                                                return c(he).label;
                                              },
                                              class: "tf-select-option",
                                              get style() {
                                                return `padding-left: ${c(at) ?? ""}px`;
                                              },
                                              onclick: (bt) => S(bt, Ke()),
                                              children: Ze,
                                              $$slots: { default: !0 }
                                            });
                                          });
                                        }
                                        O(Xe, Ae);
                                      }), O(be, De);
                                    };
                                    ie(Ee, (be) => {
                                      c(x).length === 0 ? be(G) : be(Ue, !1);
                                    });
                                  }
                                  O(xe, me);
                                },
                                $$slots: { default: !0 }
                              });
                            }), O(ve, le);
                          },
                          $$slots: { default: !0 }
                        });
                      });
                    }
                    O(F, X);
                  },
                  $$slots: { default: !0 }
                });
              }), O(R, Y);
            },
            $$slots: { default: !0 }
          }
        ));
      }), O(N, k);
    }, H = (N) => {
      var k = de(), D = J(k);
      xt(D, () => fl, (P, A) => {
        A(P, Ve(
          {
            type: "single",
            get value() {
              return c(w);
            },
            get disabled() {
              return d();
            }
          },
          () => h,
          {
            children: (R, M) => {
              var Y = sC(), U = J(Y);
              {
                let j = /* @__PURE__ */ C(() => gn("nopan nodrag tf-select", d() && " tf-select-disabled", f()));
                xt(U, () => hl, (q, F) => {
                  F(q, {
                    get class() {
                      return c(j);
                    },
                    get disabled() {
                      return d();
                    },
                    children: (Q, X) => {
                      var re = eC(), ee = J(re), L = Z(ee);
                      {
                        var te = (le) => {
                          Xn(le, {
                            get target() {
                              return c(y)[0].label;
                            }
                          });
                        }, ve = (le) => {
                          var oe = Q5(), fe = Z(oe, !0);
                          W(oe), Te(() => tt(fe, l() ?? "")), O(le, oe);
                        };
                        ie(L, (le) => {
                          c(y).length > 0 ? le(te) : le(ve, !1);
                        });
                      }
                      W(ee);
                      var ae = z(ee, 2);
                      gl(ae, { class: "tf-select-icon" }), O(Q, re);
                    },
                    $$slots: { default: !0 }
                  });
                });
              }
              var V = z(U, 2);
              xt(V, () => rl, (j, q) => {
                q(j, {
                  children: (F, Q) => {
                    var X = de(), re = J(X);
                    {
                      let ee = /* @__PURE__ */ C(() => gn("nopan nodrag nowheel tf-root tf-select-content", p === "dark" && "dark"));
                      xt(re, () => ul, (L, te) => {
                        te(L, {
                          get class() {
                            return c(ee);
                          },
                          children: (ve, ae) => {
                            var le = de(), oe = J(le);
                            xt(oe, () => dl, (fe, we) => {
                              we(fe, {
                                style: "padding: 4px;",
                                children: (xe, pe) => {
                                  var me = de(), Ee = J(me);
                                  {
                                    var G = (be) => {
                                      var De = tC();
                                      O(be, De);
                                    }, Ue = (be) => {
                                      var De = de(), Pe = J(De);
                                      Ct(Pe, 19, () => c(x), ({ item: Xe, level: je }, Ke) => `${Ke}_${Xe.value}`, (Xe, je) => {
                                        let Ke = () => c(je).item, rt = () => c(je).level;
                                        const Tt = /* @__PURE__ */ C(() => Ke().children && Ke().children.length > 0), he = /* @__PURE__ */ C(() => _(Ke()));
                                        var Ae = de(), et = J(Ae);
                                        {
                                          const Ze = (st, lt) => {
                                            let bt = () => lt?.().selected;
                                            var ut = iC(), ot = J(ut), Ot = Z(ot);
                                            {
                                              var ko = (dt) => {
                                                var ln = nC();
                                                O(dt, ln);
                                              }, an = (dt) => {
                                                var ln = rC();
                                                O(dt, ln);
                                              };
                                              ie(Ot, (dt) => {
                                                c(Tt) ? dt(ko) : dt(an, !1);
                                              });
                                            }
                                            var ra = z(Ot, 2);
                                            Xn(ra, {
                                              get target() {
                                                return Ke().label;
                                              }
                                            }), W(ot);
                                            var oa = z(ot, 2);
                                            {
                                              var ia = (dt) => {
                                                var ln = oC();
                                                O(dt, ln);
                                              };
                                              ie(oa, (dt) => {
                                                bt() && dt(ia);
                                              });
                                            }
                                            O(st, ut);
                                          };
                                          let at = /* @__PURE__ */ C(() => rt() * 12);
                                          xt(et, () => cl, (st, lt) => {
                                            lt(st, {
                                              get value() {
                                                return c(he).value;
                                              },
                                              get label() {
                                                return c(he).label;
                                              },
                                              class: "tf-select-option",
                                              get style() {
                                                return `padding-left: ${c(at) ?? ""}px`;
                                              },
                                              onclick: (bt) => S(bt, Ke()),
                                              children: Ze,
                                              $$slots: { default: !0 }
                                            });
                                          });
                                        }
                                        O(Xe, Ae);
                                      }), O(be, De);
                                    };
                                    ie(Ee, (be) => {
                                      c(x).length === 0 ? be(G) : be(Ue, !1);
                                    });
                                  }
                                  O(xe, me);
                                },
                                $$slots: { default: !0 }
                              });
                            }), O(ve, le);
                          },
                          $$slots: { default: !0 }
                        });
                      });
                    }
                    O(F, X);
                  },
                  $$slots: { default: !0 }
                });
              }), O(R, Y);
            },
            $$slots: { default: !0 }
          }
        ));
      }), O(N, k);
    };
    ie(B, (N) => {
      a() ? N($) : N(H, !1);
    });
  }
  return O(t, I), ce(T);
}
se(
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
    disabled: {},
    class: {}
  },
  [],
  [],
  !0
);
const aC = ({
  trigger: t,
  triggerEvent: e,
  floatContent: n,
  placement: r = "bottom",
  offsetOptions: o,
  flipOptions: i,
  shiftOptions: s,
  interactive: a,
  showArrow: u
}) => {
  if (typeof t == "string") {
    const b = document.querySelector(t);
    if (b)
      t = b;
    else
      throw new Error("element not found by document.querySelector('" + t + "')");
  }
  let l;
  if (typeof n == "string") {
    const b = document.querySelector(n);
    if (b)
      l = b;
    else
      throw new Error("element not found by document.querySelector('" + n + "')");
  } else
    l = n;
  let d;
  u && (d = document.createElement("div"), d.style.position = "absolute", d.style.backgroundColor = "#222", d.style.width = "8px", d.style.height = "8px", d.style.transform = "rotate(45deg)", d.style.display = "none", l.firstElementChild.before(d));
  function f() {
    cv(t, l, {
      placement: r,
      middleware: [
        sv(o),
        // 手动偏移配置
        lv(i),
        //自动翻转
        av(s),
        //自动偏移（使得浮动元素能够进入视野）
        ...u ? [uv({ element: d })] : []
      ]
    }).then(({ x: b, y: S, placement: E, middlewareData: x }) => {
      if (Object.assign(l.style, {
        left: `${b}px`,
        top: `${S}px`
      }), u) {
        const { x: _, y: T } = x.arrow, I = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[E.split("-")[0]];
        Object.assign(d.style, {
          zIndex: -1,
          left: _ != null ? `${_}px` : "",
          top: T != null ? `${T}px` : "",
          right: "",
          bottom: "",
          [I]: "2px"
        });
      }
    });
  }
  let h = !1;
  function p() {
    l.style.display = "block", l.style.visibility = "block", l.style.position = "absolute", u && (d.style.display = "block"), h = !0, f();
  }
  function m() {
    l.style.display = "none", u && (d.style.display = "none"), h = !1;
  }
  function y(b) {
    b.stopPropagation(), h ? m() : p();
  }
  function w(b) {
    l.contains(b.target) || m();
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
var lC = /* @__PURE__ */ ne('<div style="position: relative"><div><!></div> <div style="display: none; width: 100%;z-index: 9999"><!></div></div>');
function jr(t, e) {
  ue(e, !0);
  const n = v(e, "children", 7), r = v(e, "floating", 7), o = v(e, "placement", 7, "bottom");
  let i, s, a;
  xn(() => (a = aC({
    trigger: i,
    floatContent: s,
    interactive: !0,
    placement: o()
  }), () => {
    a.destroy();
  }));
  function u() {
    a.hide();
  }
  var l = {
    hide: u,
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
  }, d = lC(), f = Z(d), h = Z(f);
  Oe(h, n), W(f), Nt(f, (y) => i = y, () => i);
  var p = z(f, 2), m = Z(p);
  return Oe(m, r), W(p), Nt(p, (y) => s = y, () => s), W(d), O(t, d), ce(l);
}
se(jr, { children: {}, floating: {}, placement: {} }, [], ["hide"], !0);
function We(t, e) {
  ue(e, !0);
  const n = v(e, "children", 7), r = v(e, "level", 7, 1), o = v(e, "mt", 7), i = v(e, "mb", 7);
  var s = {
    get children() {
      return n();
    },
    set children(l) {
      n(l), g();
    },
    get level() {
      return r();
    },
    set level(l = 1) {
      r(l), g();
    },
    get mt() {
      return o();
    },
    set mt(l) {
      o(l), g();
    },
    get mb() {
      return i();
    },
    set mb(l) {
      i(l), g();
    }
  }, a = de(), u = J(a);
  return ff(u, () => `h${r()}`, !1, (l, d) => {
    Ge(l, () => ({
      class: "tf-heading",
      style: `margin-top:${o() || "0"};margin-bottom:${i() || "0"}`
    }));
    var f = de(), h = J(f);
    Oe(h, () => n() ?? ze), O(d, f);
  }), O(t, a), ce(s);
}
se(We, { children: {}, level: {}, mt: {}, mb: {} }, [], [], !0);
var uC = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1q3h954"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1q3h954"></path></svg>');
const cC = {
  hash: "svelte-1q3h954",
  code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:var(--tf-input);border:1px solid transparent;}}"
};
function Si(t, e) {
  ue(e, !0), Je(t, cC);
  const n = /* @__PURE__ */ Le(e, ["$$slots", "$$events", "$$legacy", "$$host"]);
  {
    let r = /* @__PURE__ */ C(() => gn("input-btn-more", e.class));
    $e(t, Ve(
      {
        size: "icon-xs",
        get class() {
          return c(r);
        }
      },
      () => n,
      {
        children: (o, i) => {
          var s = uC();
          O(o, s);
        },
        $$slots: { default: !0 }
      }
    ));
  }
  ce();
}
se(Si, {}, [], [], !0);
const dC = () => ({ deleteNode: (e) => {
  Be.removeNode(e), Be.updateEdges((n) => n.filter((r) => r.source !== e && r.target !== e));
} }), Rn = (t = 16) => {
  const e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = new Uint8Array(t);
  return crypto.getRandomValues(n), Array.from(n, (r) => e[r % e.length]).join("");
}, fC = () => ({ copyNode: (e) => {
  const n = Be.getNode(e);
  if (n) {
    const r = Rn(), o = {
      ...n,
      id: r,
      position: { x: n.position.x + 50, y: n.position.y + 50 }
    };
    Be.updateNodes((i) => [...i.map((a) => ({ ...a, selected: !1 })), o]);
  }
} });
var hC = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'), gC = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'), vC = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'), pC = /* @__PURE__ */ ne('<div class="input-item svelte-ana6zl">执行条件： <!></div>'), mC = /* @__PURE__ */ ne('<div class="input-item svelte-ana6zl">循环间隔时间（单位：毫秒）： <!></div> <div class="input-item svelte-ana6zl">最大循环次数（0 表示不限制）： <!></div> <div class="input-item svelte-ana6zl">退出条件： <!></div>', 1), yC = /* @__PURE__ */ ne('<div class="input-item svelte-ana6zl">错误重试间隔时间（单位：毫秒）： <!></div> <div class="input-item svelte-ana6zl">最大重试次数： <!></div> <label class="input-item-inline svelte-ana6zl"><span>正常后重置重试次数记录：</span> <input type="checkbox"/></label>', 1), wC = /* @__PURE__ */ ne('<div class="settings svelte-ana6zl"><div class="input-item svelte-ana6zl">节点名称： <!></div> <div class="input-item svelte-ana6zl">参数描述： <!></div> <!> <label class="input-item-inline svelte-ana6zl"><span>循环执行：</span> <input type="checkbox"/></label> <!> <label class="input-item-inline svelte-ana6zl"><span>错误重试：</span> <input type="checkbox"/></label> <!></div>'), bC = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3.33946 17.0002C2.90721 16.2515 2.58277 15.4702 2.36133 14.6741C3.3338 14.1779 3.99972 13.1668 3.99972 12.0002C3.99972 10.8345 3.3348 9.824 2.36353 9.32741C2.81025 7.71651 3.65857 6.21627 4.86474 4.99001C5.7807 5.58416 6.98935 5.65534 7.99972 5.072C9.01009 4.48866 9.55277 3.40635 9.4962 2.31604C11.1613 1.8846 12.8847 1.90004 14.5031 2.31862C14.4475 3.40806 14.9901 4.48912 15.9997 5.072C17.0101 5.65532 18.2187 5.58416 19.1346 4.99007C19.7133 5.57986 20.2277 6.25151 20.66 7.00021C21.0922 7.7489 21.4167 8.53025 21.6381 9.32628C20.6656 9.82247 19.9997 10.8336 19.9997 12.0002C19.9997 13.166 20.6646 14.1764 21.6359 14.673C21.1892 16.2839 20.3409 17.7841 19.1347 19.0104C18.2187 18.4163 17.0101 18.3451 15.9997 18.9284C14.9893 19.5117 14.4467 20.5941 14.5032 21.6844C12.8382 22.1158 11.1148 22.1004 9.49633 21.6818C9.55191 20.5923 9.00929 19.5113 7.99972 18.9284C6.98938 18.3451 5.78079 18.4162 4.86484 19.0103C4.28617 18.4205 3.77172 17.7489 3.33946 17.0002ZM8.99972 17.1964C10.0911 17.8265 10.8749 18.8227 11.2503 19.9659C11.7486 20.0133 12.2502 20.014 12.7486 19.9675C13.1238 18.8237 13.9078 17.8268 14.9997 17.1964C16.0916 16.5659 17.347 16.3855 18.5252 16.6324C18.8146 16.224 19.0648 15.7892 19.2729 15.334C18.4706 14.4373 17.9997 13.2604 17.9997 12.0002C17.9997 10.74 18.4706 9.5632 19.2729 8.6665C19.1688 8.4405 19.0538 8.21822 18.9279 8.00021C18.802 7.78219 18.667 7.57148 18.5233 7.36842C17.3457 7.61476 16.0911 7.43414 14.9997 6.80405C13.9083 6.17395 13.1246 5.17768 12.7491 4.03455C12.2509 3.98714 11.7492 3.98646 11.2509 4.03292C10.8756 5.17671 10.0916 6.17364 8.99972 6.80405C7.9078 7.43447 6.65245 7.61494 5.47428 7.36803C5.18485 7.77641 4.93463 8.21117 4.72656 8.66637C5.52881 9.56311 5.99972 10.74 5.99972 12.0002C5.99972 13.2604 5.52883 14.4372 4.72656 15.3339C4.83067 15.5599 4.94564 15.7822 5.07152 16.0002C5.19739 16.2182 5.3324 16.4289 5.47612 16.632C6.65377 16.3857 7.90838 16.5663 8.99972 17.1964ZM11.9997 15.0002C10.3429 15.0002 8.99972 13.6571 8.99972 12.0002C8.99972 10.3434 10.3429 9.00021 11.9997 9.00021C13.6566 9.00021 14.9997 10.3434 14.9997 12.0002C14.9997 13.6571 13.6566 15.0002 11.9997 15.0002ZM11.9997 13.0002C12.552 13.0002 12.9997 12.5525 12.9997 12.0002C12.9997 11.4479 12.552 11.0002 11.9997 11.0002C11.4474 11.0002 10.9997 11.4479 10.9997 12.0002C10.9997 12.5525 11.4474 13.0002 11.9997 13.0002Z"></path></svg>'), xC = /* @__PURE__ */ ne('<div class="tf-node-toolbar svelte-ana6zl"><!> <!> <!> <!></div>'), _C = /* @__PURE__ */ ne('<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!> <!>', 1);
const CC = {
  hash: "svelte-ana6zl",
  code: ".tf-node-toolbar.svelte-ana6zl {display:flex;gap:5px;padding:5px;border-radius:5px;background:var(--tf-background);border:1px solid var(--tf-border);box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}.settings.svelte-ana6zl {display:flex;flex-direction:column;gap:10px;padding:10px;background:var(--tf-background);border:1px solid var(--tf-border);border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.settings.svelte-ana6zl .input-item:where(.svelte-ana6zl) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:var(--tf-muted-foreground);}.settings.svelte-ana6zl .input-item-inline:where(.svelte-ana6zl) {display:flex;align-items:center;font-size:12px;color:var(--tf-muted-foreground);}"
};
function sn(t, e) {
  ue(e, !0), Je(t, CC);
  const n = v(e, "data", 7), r = v(e, "id", 7, ""), o = v(e, "icon", 7), i = v(e, "handle", 7), s = v(e, "children", 7), a = v(e, "allowExecute", 7, !0), u = v(e, "allowCopy", 7, !0), l = v(e, "allowDelete", 7, !0), d = v(e, "allowSetting", 7, !0), f = v(e, "allowSettingOfCondition", 7, !0), h = v(e, "showSourceHandle", 7, !0), p = v(e, "showTargetHandle", 7, !0), m = v(e, "onCollapse", 7);
  let y = n().expand ? ["key"] : [];
  const { updateNodeData: w, getNode: b } = wt(), S = /* @__PURE__ */ C(() => [
    {
      key: "key",
      icon: o(),
      title: n().title,
      description: n().description,
      content: s()
    }
  ]), { deleteNode: E } = dC(), { copyNode: x } = fC(), _ = vn(), T = () => {
    _.onNodeExecute?.(b(r()));
  };
  let I = vt();
  var B = {
    get data() {
      return n();
    },
    set data(V) {
      n(V), g();
    },
    get id() {
      return r();
    },
    set id(V = "") {
      r(V), g();
    },
    get icon() {
      return o();
    },
    set icon(V) {
      o(V), g();
    },
    get handle() {
      return i();
    },
    set handle(V) {
      i(V), g();
    },
    get children() {
      return s();
    },
    set children(V) {
      s(V), g();
    },
    get allowExecute() {
      return a();
    },
    set allowExecute(V = !0) {
      a(V), g();
    },
    get allowCopy() {
      return u();
    },
    set allowCopy(V = !0) {
      u(V), g();
    },
    get allowDelete() {
      return l();
    },
    set allowDelete(V = !0) {
      l(V), g();
    },
    get allowSetting() {
      return d();
    },
    set allowSetting(V = !0) {
      d(V), g();
    },
    get allowSettingOfCondition() {
      return f();
    },
    set allowSettingOfCondition(V = !0) {
      f(V), g();
    },
    get showSourceHandle() {
      return h();
    },
    set showSourceHandle(V = !0) {
      h(V), g();
    },
    get showTargetHandle() {
      return p();
    },
    set showTargetHandle(V = !0) {
      p(V), g();
    },
    get onCollapse() {
      return m();
    },
    set onCollapse(V) {
      m(V), g();
    }
  }, $ = _C(), H = J($);
  {
    var N = (V) => {
      sg(V, {
        get position() {
          return ke.Top;
        },
        align: "start",
        children: (j, q) => {
          var F = xC(), Q = Z(F);
          {
            var X = (le) => {
              $e(le, {
                size: "icon",
                class: "tf-node-toolbar-item",
                onclick: () => {
                  E(r());
                },
                children: (oe, fe) => {
                  var we = hC();
                  O(oe, we);
                },
                $$slots: { default: !0 }
              });
            };
            ie(Q, (le) => {
              l() && le(X);
            });
          }
          var re = z(Q, 2);
          {
            var ee = (le) => {
              $e(le, {
                size: "icon",
                class: "tf-node-toolbar-item",
                onclick: () => {
                  x(r());
                },
                children: (oe, fe) => {
                  var we = gC();
                  O(oe, we);
                },
                $$slots: { default: !0 }
              });
            };
            ie(re, (le) => {
              u() && le(ee);
            });
          }
          var L = z(re, 2);
          {
            var te = (le) => {
              $e(le, {
                size: "icon",
                class: "tf-node-toolbar-item",
                onclick: T,
                children: (oe, fe) => {
                  var we = vC();
                  O(oe, we);
                },
                $$slots: { default: !0 }
              });
            };
            ie(L, (le) => {
              a() && le(te);
            });
          }
          var ve = z(L, 2);
          {
            var ae = (le) => {
              jr(le, {
                placement: "bottom",
                floating: (fe) => {
                  var we = wC(), xe = Z(we), pe = z(Z(xe));
                  ft(pe, {
                    style: "width: 100%;",
                    onchange: (he) => {
                      const Ae = he.target.value;
                      w(I, { title: Ae });
                    },
                    get value() {
                      return n().title;
                    }
                  }), W(xe);
                  var me = z(xe, 2), Ee = z(Z(me));
                  qe(Ee, {
                    rows: 3,
                    style: "width: 100%;",
                    onchange: (he) => {
                      const Ae = he.target.value;
                      w(I, { description: Ae });
                    },
                    get value() {
                      return n().description;
                    }
                  }), W(me);
                  var G = z(me, 2);
                  {
                    var Ue = (he) => {
                      var Ae = pC(), et = z(Z(Ae));
                      qe(et, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (Ze) => {
                          const at = Ze.target.value;
                          w(I, { condition: at });
                        },
                        get value() {
                          return n().condition;
                        }
                      }), W(Ae), O(he, Ae);
                    };
                    ie(G, (he) => {
                      f() && he(Ue);
                    });
                  }
                  var be = z(G, 2), De = z(Z(be), 2);
                  Qn(De), De.__change = (he) => {
                    const Ae = he.target.checked;
                    w(I, { loopEnable: Ae });
                  }, W(be);
                  var Pe = z(be, 2);
                  {
                    var Xe = (he) => {
                      var Ae = mC(), et = J(Ae), Ze = z(Z(et));
                      {
                        let ut = /* @__PURE__ */ C(() => n().loopIntervalMs || "1000");
                        qe(Ze, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (ot) => {
                            const Ot = ot.target.value;
                            w(I, { loopIntervalMs: Ot });
                          },
                          get value() {
                            return c(ut);
                          }
                        });
                      }
                      W(et);
                      var at = z(et, 2), st = z(Z(at));
                      {
                        let ut = /* @__PURE__ */ C(() => n().maxLoopCount || "0");
                        qe(st, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (ot) => {
                            const Ot = ot.target.value;
                            w(I, { maxLoopCount: Ot });
                          },
                          get value() {
                            return c(ut);
                          }
                        });
                      }
                      W(at);
                      var lt = z(at, 2), bt = z(Z(lt));
                      qe(bt, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (ut) => {
                          const ot = ut.target.value;
                          w(I, { loopBreakCondition: ot });
                        },
                        get value() {
                          return n().loopBreakCondition;
                        }
                      }), W(lt), O(he, Ae);
                    };
                    ie(Pe, (he) => {
                      n().loopEnable && he(Xe);
                    });
                  }
                  var je = z(Pe, 2), Ke = z(Z(je), 2);
                  Qn(Ke), Ke.__change = (he) => {
                    const Ae = he.target.checked;
                    w(I, { retryEnable: Ae });
                  }, W(je);
                  var rt = z(je, 2);
                  {
                    var Tt = (he) => {
                      var Ae = yC(), et = J(Ae), Ze = z(Z(et));
                      {
                        let ut = /* @__PURE__ */ C(() => n().retryIntervalMs || "1000");
                        qe(Ze, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (ot) => {
                            const Ot = ot.target.value;
                            w(I, { retryIntervalMs: Ot });
                          },
                          get value() {
                            return c(ut);
                          }
                        });
                      }
                      W(et);
                      var at = z(et, 2), st = z(Z(at));
                      {
                        let ut = /* @__PURE__ */ C(() => n().maxRetryCount || "3");
                        qe(st, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (ot) => {
                            const Ot = ot.target.value;
                            w(I, { maxRetryCount: Ot });
                          },
                          get value() {
                            return c(ut);
                          }
                        });
                      }
                      W(at);
                      var lt = z(at, 2), bt = z(Z(lt), 2);
                      Qn(bt), bt.__change = (ut) => {
                        const ot = ut.target.checked;
                        w(I, { resetRetryCountAfterNormal: ot });
                      }, W(lt), Te(() => Ri(bt, !!n().resetRetryCountAfterNormal)), O(he, Ae);
                    };
                    ie(rt, (he) => {
                      n().retryEnable && he(Tt);
                    });
                  }
                  W(we), Te(() => {
                    Ri(De, !!n().loopEnable), Ri(Ke, !!n().retryEnable);
                  }), O(fe, we);
                },
                children: (fe, we) => {
                  $e(fe, {
                    size: "icon",
                    class: "tf-node-toolbar-item",
                    children: (xe, pe) => {
                      var me = bC();
                      O(xe, me);
                    },
                    $$slots: { default: !0 }
                  });
                },
                $$slots: { floating: !0, default: !0 }
              });
            };
            ie(ve, (le) => {
              d() && le(ae);
            });
          }
          W(F), O(j, F);
        },
        $$slots: { default: !0 }
      });
    };
    ie(H, (V) => {
      (a() || u() || l()) && V(N);
    });
  }
  var k = z(H, 2), D = z(Z(k), 2), P = Z(D);
  Pv(P, {
    get items() {
      return c(S);
    },
    get activeKeys() {
      return y;
    },
    onChange: (V, j) => {
      w(r(), { expand: j?.includes("key") }), m()?.(j?.includes("key") ? "key" : "");
    }
  }), W(D), W(k);
  var A = z(k, 2);
  {
    var R = (V) => {
      yr(V, {
        type: "target",
        get position() {
          return ke.Left;
        },
        style: " left: -12px;top: 20px"
      });
    };
    ie(A, (V) => {
      p() && V(R);
    });
  }
  var M = z(A, 2);
  {
    var Y = (V) => {
      yr(V, {
        type: "source",
        get position() {
          return ke.Right;
        },
        style: "right: -12px;top: 20px"
      });
    };
    ie(M, (V) => {
      h() && V(Y);
    });
  }
  var U = z(M, 2);
  return Oe(U, () => i() ?? ze), O(t, $), ce(B);
}
Sr(["change"]);
se(
  sn,
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
var SC = /* @__PURE__ */ ne('<div class="input-more-item svelte-n5iecj">数据选项： <!></div>'), kC = /* @__PURE__ */ ne('<div class="input-more-setting svelte-n5iecj"><div class="input-more-item svelte-n5iecj">数据类型： <!></div> <div class="input-more-item svelte-n5iecj">输入方式： <!></div> <!> <div class="input-more-item svelte-n5iecj">数据标题： <!></div> <div class="input-more-item svelte-n5iecj">数据描述： <!></div> <div class="input-more-item svelte-n5iecj">占位符： <!></div> <div class="input-more-item svelte-n5iecj">参数描述： <!></div> <div class="input-more-item svelte-n5iecj"><!></div></div>'), EC = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>'), PC = /* @__PURE__ */ ne('<div class="input-item svelte-n5iecj"><!></div> <div class="input-item svelte-n5iecj"><!></div> <div class="input-item svelte-n5iecj"><!></div>', 1);
const NC = {
  hash: "svelte-n5iecj",
  code: ".input-item.svelte-n5iecj {display:flex;align-items:center;}.input-more-setting.svelte-n5iecj {display:flex;flex-direction:column;gap:10px;padding:10px;background:var(--tf-background);border:1px solid var(--tf-border);border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-n5iecj .input-more-item:where(.svelte-n5iecj) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:var(--tf-muted-foreground);}"
};
function Nv(t, e) {
  ue(e, !0), Je(t, NC);
  const n = v(e, "parameter", 7), r = v(e, "index", 7);
  let o = vt(), i = cr(o), s = /* @__PURE__ */ C(() => ({ ...n(), ...i?.current?.data?.parameters[r()] })), a = /* @__PURE__ */ C(() => ["text", "other"].includes(c(s).contentType || "text") ? ag : lg), u = /* @__PURE__ */ C(() => c(s).contentType === "text" || !c(s).contentType);
  const { updateNodeData: l } = wt(), d = (H, N) => {
    l(o, (k) => {
      let D = k.data.parameters;
      return D[r()][H] = N, { parameters: D };
    });
  }, f = (H, N) => {
    const k = N.target.value;
    d(H, k);
  }, h = (H) => {
    const N = H.target.value;
    d("name", N);
  }, p = (H) => {
    d("required", H);
  }, m = (H) => {
    const N = H.value;
    d("formType", N);
  }, y = (H) => {
    const N = H.value;
    d("contentType", N);
  };
  let w;
  const b = () => {
    l(o, (H) => {
      let N = H.data.parameters;
      return N.splice(r(), 1), { parameters: [...N] };
    }), w?.hide();
  };
  var S = {
    get parameter() {
      return n();
    },
    set parameter(H) {
      n(H), g();
    },
    get index() {
      return r();
    },
    set index(H) {
      r(H), g();
    }
  }, E = PC(), x = J(E), _ = Z(x);
  ft(_, {
    style: "width: 100%;",
    get value() {
      return c(s).name;
    },
    placeholder: "请输入参数",
    oninput: h
  }), W(x);
  var T = z(x, 2), I = Z(T);
  Sv(I, {
    get checked() {
      return c(s).required;
    },
    onCheckedChange: p
  }), W(T);
  var B = z(T, 2), $ = Z(B);
  return Nt(
    jr($, {
      placement: "bottom",
      floating: (N) => {
        var k = kC(), D = Z(k), P = z(Z(D));
        {
          let te = /* @__PURE__ */ C(() => c(s).contentType ? [c(s).contentType] : []);
          _t(P, {
            get items() {
              return eu;
            },
            style: "width: 100%",
            defaultValue: ["text"],
            get value() {
              return c(te);
            },
            onSelect: y
          });
        }
        W(D);
        var A = z(D, 2), R = z(Z(A));
        {
          let te = /* @__PURE__ */ C(() => c(s).formType ? [c(s).formType] : []);
          _t(R, {
            get items() {
              return c(a);
            },
            style: "width: 100%",
            defaultValue: ["input"],
            get value() {
              return c(te);
            },
            onSelect: m
          });
        }
        W(A);
        var M = z(A, 2);
        {
          var Y = (te) => {
            var ve = SC(), ae = z(Z(ve));
            {
              let le = /* @__PURE__ */ C(() => c(s).enums?.join(`
`));
              qe(ae, {
                rows: 3,
                style: "width: 100%;",
                onchange: (oe) => {
                  d("enums", oe.target?.value.trim().split(`
`));
                },
                get value() {
                  return c(le);
                },
                placeholder: "一行一个选项"
              });
            }
            W(ve), O(te, ve);
          };
          ie(M, (te) => {
            c(u) && (c(s).formType === "radio" || c(s).formType === "checkbox" || c(s).formType === "select") && te(Y);
          });
        }
        var U = z(M, 2), V = z(Z(U));
        qe(V, {
          rows: 1,
          style: "width: 100%;",
          onchange: (te) => {
            f("formLabel", te);
          },
          get value() {
            return c(s).formLabel;
          },
          placeholder: "请输入数据标题"
        }), W(U);
        var j = z(U, 2), q = z(Z(j));
        qe(q, {
          rows: 2,
          style: "width: 100%;",
          onchange: (te) => {
            f("formDescription", te);
          },
          get value() {
            return c(s).formDescription;
          },
          placeholder: "请输入数据描述"
        }), W(j);
        var F = z(j, 2), Q = z(Z(F));
        qe(Q, {
          rows: 2,
          style: "width: 100%;",
          onchange: (te) => {
            f("formPlaceholder", te);
          },
          get value() {
            return c(s).formPlaceholder;
          },
          placeholder: "请输入占位符"
        }), W(F);
        var X = z(F, 2), re = z(Z(X));
        qe(re, {
          rows: 3,
          style: "width: 100%;",
          onchange: (te) => {
            f("description", te);
          },
          get value() {
            return c(s).description;
          },
          placeholder: "请输入参数描述"
        }), W(X);
        var ee = z(X, 2), L = Z(ee);
        $e(L, {
          variant: "destructive",
          onclick: b,
          children: (te, ve) => {
            Se();
            var ae = Me("删除");
            O(te, ae);
          },
          $$slots: { default: !0 }
        }), W(ee), W(k), O(N, k);
      },
      children: (N, k) => {
        $e(N, {
          size: "icon-xs",
          class: "input-btn-more",
          children: (D, P) => {
            var A = EC();
            O(D, A);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (N) => w = N,
    () => w
  ), W(B), O(t, E), ce(S);
}
se(Nv, { parameter: {}, index: {} }, [], [], !0);
var TC = /* @__PURE__ */ ne('<div class="input-header svelte-1yp5n1k">参数名称</div> <div class="input-header svelte-1yp5n1k">必填</div> <div class="input-header svelte-1yp5n1k"></div>', 1), OC = /* @__PURE__ */ ne('<div class="none-params svelte-1yp5n1k">无输入参数</div>'), AC = /* @__PURE__ */ ne('<div class="input-container svelte-1yp5n1k"><!> <!></div>');
const DC = {
  hash: "svelte-1yp5n1k",
  code: `.input-container.svelte-1yp5n1k {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1yp5n1k .none-params:where(.svelte-1yp5n1k) {font-size:12px;background:var(--tf-secondary);height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1yp5n1k .input-header:where(.svelte-1yp5n1k) {font-size:12px;color:var(--tf-muted-foreground);}`
};
function Tv(t, e) {
  ue(e, !0), Je(t, DC);
  let n = vt(), r = cr(n), o = /* @__PURE__ */ C(() => [...r?.current?.data?.parameters || []]);
  var i = AC(), s = Z(i);
  {
    var a = (l) => {
      var d = TC();
      Se(4), O(l, d);
    };
    ie(s, (l) => {
      c(o).length !== 0 && l(a);
    });
  }
  var u = z(s, 2);
  Ct(
    u,
    19,
    () => c(o),
    (l) => l.id,
    (l, d, f) => {
      Nv(l, {
        get parameter() {
          return c(d);
        },
        get index() {
          return c(f);
        }
      });
    },
    (l) => {
      var d = OC();
      O(l, d);
    }
  ), W(i), O(t, i), ce();
}
se(Tv, {}, [], [], !0);
const ri = (t) => (!t || t.length == 0 || t.forEach((e) => {
  e.id || (e.id = Rn()), ri(e.children);
}), t), Sn = () => {
  const { updateNodeData: t } = wt();
  return {
    addParameter: (e, n = "parameters", r) => {
      Array.isArray(r) ? r.forEach((s) => ri(s?.children)) : ri(r?.children);
      function o(s) {
        return {
          name: "",
          // dataType: 'String',
          refType: "ref",
          ...s,
          id: Rn()
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
var IC = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), MC = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), LC = /* @__PURE__ */ ne('<div class="heading svelte-llt1qy"><!> <!></div> <!>', 1);
const HC = {
  hash: "svelte-llt1qy",
  code: ".heading.svelte-llt1qy {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:var(--tf-muted);border:1px solid transparent;}"
};
function Ov(t, e) {
  ue(e, !0), Je(t, HC);
  const n = v(e, "data", 7), r = /* @__PURE__ */ Le(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = vt(), { addParameter: i } = Sn();
  var s = {
    get data() {
      return n();
    },
    set data(a) {
      n(a), g();
    }
  };
  return sn(t, Ve(() => r, {
    get data() {
      return n();
    },
    allowExecute: !1,
    showTargetHandle: !1,
    allowSettingOfCondition: !1,
    icon: (u) => {
      var l = IC();
      O(u, l);
    },
    children: (u, l) => {
      var d = LC(), f = J(d), h = Z(f);
      We(h, {
        level: 3,
        children: (y, w) => {
          Se();
          var b = Me("输入参数");
          O(y, b);
        },
        $$slots: { default: !0 }
      });
      var p = z(h, 2);
      $e(p, {
        size: "icon-xs",
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: () => {
          i(o, "parameters", { refType: "input", name: "newParam" });
        },
        children: (y, w) => {
          var b = MC();
          O(y, b);
        },
        $$slots: { default: !0 }
      }), W(f);
      var m = z(f, 2);
      Tv(m, {}), O(u, d);
    },
    $$slots: { icon: !0, default: !0 }
  })), ce(s);
}
se(Ov, { data: {} }, [], [], !0);
const Av = (t, e, n) => {
  for (const r of n)
    r.target === e && r.source && !t.includes(r.source) && (t.push(r.source), Av(t, r.source, n));
}, Dv = (t, e, n, r) => !t || t.length === 0 ? [] : t.map((o) => ({
  label: o.name + r(o, n),
  value: e + "." + o.name,
  children: Dv(o.children, e + "." + o.name, n, r)
})), VC = (t) => t.contentType === "text" || !t.contentType, ud = (t, e, n, r) => {
  if (t.type === "startNode") {
    const o = t.data.parameters, i = [];
    if (o) for (const s of o)
      i.push({
        label: s.name + r(s, e || !VC(s) && s.formType === "checkbox"),
        value: t.id + "." + s.name
      });
    return { label: t.data.title, value: t.id, children: i };
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
      const o = t.data.outputDefs;
      if (o)
        return {
          label: t.data.title,
          value: t.id,
          children: Dv(o, t.id, e || t.type === "loopNode", r)
        };
    }
  }
}, Iv = (t = !1) => {
  const e = vt(), n = cr(e), r = /* @__PURE__ */ C(Cn), o = /* @__PURE__ */ C(() => c(r).nodes), i = /* @__PURE__ */ C(() => c(r).edges), s = /* @__PURE__ */ C(() => c(r).nodeLookup);
  let a = /* @__PURE__ */ C(() => {
    const u = [];
    if (!n.current)
      return [];
    const l = c(s).get(e), d = (h, p) => {
      if (h?.dataType)
        return f(h.dataType, p);
      if (h?.ref) {
        const m = h?.ref?.split(".");
        for (const y of c(o))
          if (y.id === m[0]) {
            if (y.data.parameters) {
              for (let w of y.data.parameters)
                if (w.name === m[1]) {
                  if (w.dataType)
                    return f(w.dataType, p);
                  if (!w.ref)
                    return d(w, p);
                }
            }
            if (y.data.outputDefs) {
              for (let w of y.data.outputDefs)
                if (w.name === m[1]) {
                  if (w.dataType)
                    return f(w.dataType, p);
                  if (!w.ref)
                    return d(w, p);
                }
            }
          }
      }
      return f("", p);
    }, f = (h, p) => (console.log("dataType", h), p ? h ? ` (Array&lt;${h}&gt;)` : " (Array&lt;&gt;)" : ` (${h})`);
    if (t)
      for (const h of c(o)) {
        const p = h.parentId === n.current.id;
        if (p) {
          const m = ud(h, p, l, d);
          m && u.push(m);
        }
      }
    else {
      const h = [];
      Av(h, e, c(i));
      for (const p of c(o))
        if (h.includes(p.id)) {
          const m = p.parentId === n.current.id, y = ud(p, m, l, d);
          y && u.push(y);
        }
    }
    return u;
  });
  return {
    get current() {
      return c(a);
    }
  };
};
var zC = /* @__PURE__ */ ne('<div class="input-more-item svelte-jmeys3">数据类型： <!></div>'), RC = /* @__PURE__ */ ne('<div class="input-more-item svelte-jmeys3">数据选项： <!></div>'), FC = /* @__PURE__ */ ne('<div class="input-more-item svelte-jmeys3">输入方式： <!></div> <label class="input-more-item svelte-jmeys3" style="display: flex;flex-direction: row;align-items: center">是否必填: <input type="checkbox"/></label> <!> <div class="input-more-item svelte-jmeys3">数据标题： <!></div> <div class="input-more-item svelte-jmeys3">数据描述： <!></div> <div class="input-more-item svelte-jmeys3">占位符： <!></div>', 1), BC = /* @__PURE__ */ ne('<div class="input-more-setting svelte-jmeys3"><div class="input-more-item svelte-jmeys3">数据来源： <!></div> <!> <!> <div class="input-more-item svelte-jmeys3">默认值： <!></div> <div class="input-more-item svelte-jmeys3"><!></div></div>'), $C = /* @__PURE__ */ ne('<div class="input-item svelte-jmeys3"><!></div> <div class="input-item svelte-jmeys3"><!></div> <div class="input-item svelte-jmeys3"><!></div>', 1);
const KC = {
  hash: "svelte-jmeys3",
  code: ".input-item.svelte-jmeys3 {display:flex;align-items:center;}.input-more-setting.svelte-jmeys3 {display:flex;flex-direction:column;gap:10px;padding:10px;background:var(--tf-background);border:1px solid var(--tf-border);border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-jmeys3 .input-more-item:where(.svelte-jmeys3) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:var(--tf-muted-foreground);}"
};
function Mv(t, e) {
  ue(e, !0), Je(t, KC), xn(() => {
    c(l).refType || w({ value: "ref" });
  });
  const n = v(e, "parameter", 7), r = v(e, "index", 7), o = v(e, "dataKeyName", 7), i = v(e, "useChildrenOnly", 7), s = v(e, "showContentType", 7, !1);
  let a = vt(), u = cr(a), l = /* @__PURE__ */ C(() => ({
    ...n(),
    ...u?.current?.data?.[o()][r()]
  })), d = /* @__PURE__ */ C(() => ["text", "other"].includes(c(l).contentType || "text") ? ag : lg), f = /* @__PURE__ */ C(() => c(l).contentType === "text" || !c(l).contentType);
  const { updateNodeData: h } = wt(), p = (M, Y) => {
    h(a, (U) => {
      let V = U.data?.[o()];
      return V[r()] = { ...V[r()], [M]: Y }, { [o()]: V };
    });
  }, m = (M, Y) => {
    const U = Y.target.value;
    p(M, U);
  }, y = (M) => {
    const Y = M.value;
    p("ref", Y);
  }, w = (M) => {
    const Y = M.value;
    p("refType", Y), Y === "form" && (p("contentType", c(l).contentType || "text"), p("formType", c(l).formType || "input"));
  }, b = (M) => {
    const Y = M.value;
    p("contentType", Y);
  }, S = (M) => {
    const Y = M.value;
    p("formType", Y);
  };
  let E;
  const x = () => {
    h(a, (M) => {
      let Y = M.data?.[o()];
      return Y.splice(r(), 1), { [o()]: [...Y] };
    }), E?.hide();
  };
  let _ = Iv(i());
  const T = vn().formRefTypeEnable ? Ac : Ac.filter((M) => M.value !== "form");
  var I = {
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
  }, B = $C(), $ = J(B), H = Z($);
  {
    let M = /* @__PURE__ */ C(() => c(l).nameDisabled === !0);
    ft(H, {
      style: "width: 100%;",
      get value() {
        return c(l).name;
      },
      placeholder: "请输入参数",
      get disabled() {
        return c(M);
      },
      oninput: (Y) => m("name", Y)
    });
  }
  W($);
  var N = z($, 2), k = Z(N);
  {
    var D = (M) => {
      ft(M, {
        get value() {
          return c(l).value;
        },
        placeholder: "请输入参数值",
        oninput: (Y) => m("value", Y)
      });
    }, P = (M) => {
      var Y = de(), U = J(Y);
      {
        var V = (q) => {
          {
            let F = /* @__PURE__ */ C(() => [c(l).ref]);
            _t(q, {
              get items() {
                return _.current;
              },
              style: "width: 100%",
              defaultValue: ["ref"],
              get value() {
                return c(F);
              },
              expandAll: !0,
              onSelect: y
            });
          }
        }, j = (q) => {
          var F = de(), Q = J(F);
          {
            var X = (re) => {
              ft(re, { placeholder: "在执行期间，由用户输入", disabled: !0 });
            };
            ie(
              Q,
              (re) => {
                c(l).refType === "form" && re(X);
              },
              !0
            );
          }
          O(q, F);
        };
        ie(
          U,
          (q) => {
            c(l).refType === "ref" ? q(V) : q(j, !1);
          },
          !0
        );
      }
      O(M, Y);
    };
    ie(k, (M) => {
      c(l).refType === "fixed" ? M(D) : M(P, !1);
    });
  }
  W(N);
  var A = z(N, 2), R = Z(A);
  return Nt(
    jr(R, {
      placement: "bottom",
      floating: (Y) => {
        var U = BC(), V = Z(U), j = z(Z(V));
        {
          let ve = /* @__PURE__ */ C(() => c(l).refType ? [c(l).refType] : []);
          _t(j, {
            get items() {
              return T;
            },
            style: "width: 100%",
            defaultValue: ["ref"],
            get value() {
              return c(ve);
            },
            onSelect: w
          });
        }
        W(V);
        var q = z(V, 2);
        {
          var F = (ve) => {
            var ae = zC(), le = z(Z(ae));
            {
              let oe = /* @__PURE__ */ C(() => c(l).contentType ? [c(l).contentType] : []);
              _t(le, {
                get items() {
                  return eu;
                },
                style: "width: 100%",
                defaultValue: ["text"],
                get value() {
                  return c(oe);
                },
                onSelect: b
              });
            }
            W(ae), O(ve, ae);
          };
          ie(q, (ve) => {
            (s() || c(l).refType === "form") && ve(F);
          });
        }
        var Q = z(q, 2);
        {
          var X = (ve) => {
            var ae = FC(), le = J(ae), oe = z(Z(le));
            {
              let Pe = /* @__PURE__ */ C(() => c(l).formType ? [c(l).formType] : []);
              _t(oe, {
                get items() {
                  return c(d);
                },
                style: "width: 100%",
                defaultValue: ["input"],
                get value() {
                  return c(Pe);
                },
                onSelect: S
              });
            }
            W(le);
            var fe = z(le, 2), we = z(Z(fe));
            Qn(we), we.__change = (Pe) => {
              const Xe = Pe.target.checked;
              p("required", Xe);
            }, W(fe);
            var xe = z(fe, 2);
            {
              var pe = (Pe) => {
                var Xe = RC(), je = z(Z(Xe));
                {
                  let Ke = /* @__PURE__ */ C(() => c(l).enums?.join(`
`));
                  qe(je, {
                    rows: 3,
                    style: "width: 100%;",
                    onchange: (rt) => {
                      p("enums", rt.target?.value.trim().split(`
`));
                    },
                    get value() {
                      return c(Ke);
                    },
                    placeholder: "一行一个选项"
                  });
                }
                W(Xe), O(Pe, Xe);
              };
              ie(xe, (Pe) => {
                c(f) && (c(l).formType === "radio" || c(l).formType === "checkbox" || c(l).formType === "select") && Pe(pe);
              });
            }
            var me = z(xe, 2), Ee = z(Z(me));
            qe(Ee, {
              rows: 1,
              placeholder: "请输入数据标题",
              style: "width: 100%;",
              onchange: (Pe) => {
                m("formLabel", Pe);
              },
              get value() {
                return c(l).formLabel;
              }
            }), W(me);
            var G = z(me, 2), Ue = z(Z(G));
            qe(Ue, {
              rows: 2,
              placeholder: "请输入数据描述",
              style: "width: 100%;",
              onchange: (Pe) => {
                m("formDescription", Pe);
              },
              get value() {
                return c(l).formDescription;
              }
            }), W(G);
            var be = z(G, 2), De = z(Z(be));
            qe(De, {
              rows: 2,
              placeholder: "请输入占位符内容",
              style: "width: 100%;",
              onchange: (Pe) => {
                m("formPlaceholder", Pe);
              },
              get value() {
                return c(l).formPlaceholder;
              }
            }), W(be), Te(() => Ri(we, !!c(l).required)), O(ve, ae);
          };
          ie(Q, (ve) => {
            c(l).refType === "form" && ve(X);
          });
        }
        var re = z(Q, 2), ee = z(Z(re));
        qe(ee, {
          rows: 1,
          style: "width: 100%;",
          onchange: (ve) => {
            m("defaultValue", ve);
          },
          get value() {
            return c(l).defaultValue;
          },
          placeholder: "请输入参数默认值"
        }), W(re);
        var L = z(re, 2), te = Z(L);
        $e(te, {
          variant: "destructive",
          onclick: x,
          children: (ve, ae) => {
            Se();
            var le = Me("删除");
            O(ve, le);
          },
          $$slots: { default: !0 }
        }), W(L), W(U), O(Y, U);
      },
      children: (Y, U) => {
        Si(Y, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (Y) => E = Y,
    () => E
  ), W(A), O(t, B), ce(I);
}
Sr(["change"]);
se(
  Mv,
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
var WC = /* @__PURE__ */ ne('<div class="input-header svelte-32f1pk">参数名称</div> <div class="input-header svelte-32f1pk">参数值</div> <div class="input-header svelte-32f1pk"></div>', 1), ZC = /* @__PURE__ */ ne('<div class="none-params svelte-32f1pk"> </div>'), YC = /* @__PURE__ */ ne('<div class="input-container svelte-32f1pk"><!> <!></div>');
const qC = {
  hash: "svelte-32f1pk",
  code: `.input-container.svelte-32f1pk {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-32f1pk .none-params:where(.svelte-32f1pk) {font-size:12px;background:var(--tf-secondary);height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-32f1pk .input-header:where(.svelte-32f1pk) {font-size:12px;color:var(--tf-muted-foreground);}`
};
function zt(t, e) {
  ue(e, !0), Je(t, qC);
  const n = v(e, "noneParameterText", 7, "无输入参数"), r = v(e, "dataKeyName", 7, "parameters"), o = v(e, "useChildrenOnly", 7), i = v(e, "showContentType", 7, !1);
  let s = vt(), a = cr(s), u = /* @__PURE__ */ C(() => [...a?.current?.data?.[r()] || []]);
  var l = {
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
  }, d = YC(), f = Z(d);
  {
    var h = (m) => {
      var y = WC();
      Se(4), O(m, y);
    };
    ie(f, (m) => {
      c(u).length !== 0 && m(h);
    });
  }
  var p = z(f, 2);
  return Ct(
    p,
    19,
    () => c(u),
    (m) => m.id,
    (m, y, w) => {
      Mv(m, {
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
      var y = ZC(), w = Z(y, !0);
      W(y), Te(() => tt(w, n())), O(m, y);
    }
  ), W(d), O(t, d), ce(l);
}
se(
  zt,
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
var XC = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), jC = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), UC = /* @__PURE__ */ ne('<div class="heading svelte-1fiuxu3"><!> <!></div> <!>', 1);
const GC = {
  hash: "svelte-1fiuxu3",
  code: ".heading.svelte-1fiuxu3 {display:flex;margin-bottom:10px;}"
};
function Lv(t, e) {
  ue(e, !0), Je(t, GC);
  const n = v(e, "data", 7), r = /* @__PURE__ */ Le(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = vt(), { addParameter: i } = Sn();
  var s = {
    get data() {
      return n();
    },
    set data(a) {
      n(a), g();
    }
  };
  return sn(t, Ve(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      allowExecute: !1,
      showSourceHandle: !1,
      icon: (u) => {
        var l = XC();
        O(u, l);
      },
      children: (u, l) => {
        var d = UC(), f = J(d), h = Z(f);
        We(h, {
          level: 3,
          children: (y, w) => {
            Se();
            var b = Me("输出参数");
            O(y, b);
          },
          $$slots: { default: !0 }
        });
        var p = z(h, 2);
        $e(p, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs", { name: "output" });
          },
          children: (y, w) => {
            var b = jC();
            O(y, b);
          },
          $$slots: { default: !0 }
        }), W(f);
        var m = z(f, 2);
        zt(m, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs",
          showContentType: !0
        }), O(u, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ce(s);
}
se(Lv, { data: {} }, [], [], !0);
const Sa = (t) => JSON.parse(JSON.stringify(t));
var JC = /* @__PURE__ */ _e('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), QC = /* @__PURE__ */ ne('<div class="input-more-item svelte-hwmib9"><!></div>'), e3 = /* @__PURE__ */ ne('<div class="input-more-setting svelte-hwmib9"><div class="input-more-item svelte-hwmib9">默认值： <!></div> <div class="input-more-item svelte-hwmib9">参数描述： <!></div> <!></div>'), t3 = /* @__PURE__ */ ne('<div class="input-item svelte-hwmib9"><!></div> <div class="input-item svelte-hwmib9"><!> <!></div> <div class="input-item svelte-hwmib9"><!></div>', 1);
const n3 = {
  hash: "svelte-hwmib9",
  code: ".input-item.svelte-hwmib9 {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-hwmib9 {display:flex;flex-direction:column;gap:10px;padding:10px;background:var(--tf-background);border:1px solid var(--tf-border);border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-hwmib9 .input-more-item:where(.svelte-hwmib9) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:var(--tf-muted-foreground);}"
};
function Hv(t, e) {
  ue(e, !0), Je(t, n3);
  const n = v(e, "parameter", 7), r = v(e, "position", 7), o = v(e, "dataKeyName", 7), i = v(e, "placeholder", 7, "请输入参数值");
  let s = vt(), a = cr(s), u = /* @__PURE__ */ C(() => {
    let H = a?.current?.data?.[o()], N;
    if (H && r().length > 0) {
      let k = H;
      for (let D = 0; D < r().length; D++) {
        const P = r()[D];
        D == r().length - 1 ? N = k[P] : k = k[P].children;
      }
    }
    return { ...n(), ...N };
  });
  const { updateNodeData: l } = wt(), d = (H, N) => {
    l(s, (k) => {
      const D = k.data?.[o()];
      if (D && r().length > 0) {
        let P = D;
        for (let A = 0; A < r().length; A++) {
          const R = r()[A];
          A == r().length - 1 ? P[R] = { ...P[R], [H]: N } : P = P[R].children;
        }
      }
      return { [o()]: [...Sa(D)] };
    });
  }, f = (H, N) => {
    const k = N.target.value;
    d(H, k);
  }, h = (H) => {
    const N = H.value;
    d("dataType", N);
  };
  let p;
  const m = () => {
    l(s, (H) => {
      let N = H.data?.[o()];
      if (N && r().length > 0) {
        let k = N;
        for (let D = 0; D < r().length; D++) {
          const P = r()[D];
          D == r().length - 1 ? k.splice(P, 1) : k = k[P].children;
        }
      }
      return { [o()]: [...Sa(N)] };
    }), p?.hide();
  }, y = () => {
    l(s, (H) => {
      let N = H.data?.[o()];
      if (N && r().length > 0) {
        let k = N;
        for (let D = 0; D < r().length; D++) {
          const P = r()[D];
          D == r().length - 1 ? k[P].children ? k[P].children.push({ id: Rn(), name: "newParam", dataType: "String" }) : k[P].children = [{ id: Rn(), name: "newParam", dataType: "String" }] : k = k[P].children;
        }
      }
      return { [o()]: [...Sa(N)] };
    });
  };
  var w = {
    get parameter() {
      return n();
    },
    set parameter(H) {
      n(H), g();
    },
    get position() {
      return r();
    },
    set position(H) {
      r(H), g();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(H) {
      o(H), g();
    },
    get placeholder() {
      return i();
    },
    set placeholder(H = "请输入参数值") {
      i(H), g();
    }
  }, b = t3(), S = J(b), E = Z(S);
  {
    let H = /* @__PURE__ */ C(() => (r().length - 1) * 12), N = /* @__PURE__ */ C(() => c(u).nameDisabled === !0);
    ft(E, {
      get style() {
        return `width: 100%;  margin-left: ${c(H) ?? ""}px;`;
      },
      get value() {
        return c(u).name;
      },
      get placeholder() {
        return i();
      },
      oninput: (k) => {
        f("name", k);
      },
      get disabled() {
        return c(N);
      }
    });
  }
  W(S);
  var x = z(S, 2), _ = Z(x);
  {
    let H = /* @__PURE__ */ C(() => c(u).dataTypeItems || _b), N = /* @__PURE__ */ C(() => c(u).dataType ? [c(u).dataType] : []), k = /* @__PURE__ */ C(() => c(u).dataTypeDisabled === !0);
    _t(_, {
      get items() {
        return c(H);
      },
      style: "width: 100%",
      defaultValue: ["String"],
      get value() {
        return c(N);
      },
      get disabled() {
        return c(k);
      },
      onSelect: h
    });
  }
  var T = z(_, 2);
  {
    var I = (H) => {
      $e(H, {
        size: "icon-xs",
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: y,
        children: (N, k) => {
          var D = JC();
          O(N, D);
        },
        $$slots: { default: !0 }
      });
    };
    ie(T, (H) => {
      (c(u).dataType === "Object" || c(u).dataType === "Array") && c(u).addChildDisabled !== !0 && H(I);
    });
  }
  W(x);
  var B = z(x, 2), $ = Z(B);
  return Nt(
    jr($, {
      placement: "bottom",
      floating: (N) => {
        var k = e3(), D = Z(k), P = z(Z(D));
        {
          let U = /* @__PURE__ */ C(() => c(u).defaultValue || "");
          qe(P, {
            rows: 1,
            style: "width: 100%;",
            get value() {
              return c(U);
            },
            onchange: (V) => {
              f("defaultValue", V);
            }
          });
        }
        W(D);
        var A = z(D, 2), R = z(Z(A));
        {
          let U = /* @__PURE__ */ C(() => c(u).description || "");
          qe(R, {
            rows: 3,
            style: "width: 100%;",
            get value() {
              return c(U);
            },
            onchange: (V) => {
              f("description", V);
            }
          });
        }
        W(A);
        var M = z(A, 2);
        {
          var Y = (U) => {
            var V = QC(), j = Z(V);
            $e(j, {
              variant: "destructive",
              onclick: m,
              children: (q, F) => {
                Se();
                var Q = Me("删除");
                O(q, Q);
              },
              $$slots: { default: !0 }
            }), W(V), O(U, V);
          };
          ie(M, (U) => {
            c(u).deleteDisabled !== !0 && U(Y);
          });
        }
        W(k), O(N, k);
      },
      children: (N, k) => {
        Si(N, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (N) => p = N,
    () => p
  ), W(B), O(t, b), ce(w);
}
se(
  Hv,
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
var r3 = /* @__PURE__ */ ne("<!> <!>", 1), o3 = /* @__PURE__ */ ne('<div class="none-params svelte-1oz5kx0"> </div>'), i3 = /* @__PURE__ */ ne('<div class="input-header svelte-1oz5kx0">参数名称</div> <div class="input-header svelte-1oz5kx0">参数类型</div> <div class="input-header svelte-1oz5kx0"></div>', 1), s3 = /* @__PURE__ */ ne('<div class="input-container svelte-1oz5kx0"><!> <!></div>');
const a3 = {
  hash: "svelte-1oz5kx0",
  code: `.input-container.svelte-1oz5kx0 {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1oz5kx0 .none-params:where(.svelte-1oz5kx0) {font-size:12px;background:var(--tf-secondary);height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1oz5kx0 .input-header:where(.svelte-1oz5kx0) {font-size:12px;color:var(--tf-muted-foreground);}`
};
function dr(t, e) {
  ue(e, !0), Je(t, a3);
  const n = (m, y = ze, w = ze) => {
    var b = de(), S = J(b);
    Ct(
      S,
      19,
      y,
      (E) => `${E.id}_${E.children ? E.children.length : 0}`,
      (E, x, _) => {
        var T = r3(), I = J(T);
        {
          let H = /* @__PURE__ */ C(() => [...w(), c(_)]);
          Hv(I, {
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
        var B = z(I, 2);
        {
          var $ = (H) => {
            {
              let N = /* @__PURE__ */ C(() => [...w(), c(_)]);
              n(H, () => c(x).children, () => c(N));
            }
          };
          ie(B, (H) => {
            c(x).children && H($);
          });
        }
        O(E, T);
      },
      (E) => {
        var x = de(), _ = J(x);
        {
          var T = (I) => {
            var B = o3(), $ = Z(B, !0);
            W(B), Te(() => tt($, r())), O(I, B);
          };
          ie(_, (I) => {
            w().length === 0 && I(T);
          });
        }
        O(E, x);
      }
    ), O(m, b);
  }, r = v(e, "noneParameterText", 7, "无输出参数"), o = v(e, "dataKeyName", 7, "outputDefs"), i = v(e, "placeholder", 7, "请输入参数");
  let s = vt(), a = cr(s), u = /* @__PURE__ */ C(() => [...a?.current?.data?.[o()] || []]);
  var l = {
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
    set placeholder(m = "请输入参数") {
      i(m), g();
    }
  }, d = s3(), f = Z(d);
  {
    var h = (m) => {
      var y = i3();
      Se(4), O(m, y);
    };
    ie(f, (m) => {
      c(u).length !== 0 && m(h);
    });
  }
  var p = z(f, 2);
  return n(p, () => c(u) || [], () => []), W(d), O(t, d), ce(l);
}
se(dr, { noneParameterText: {}, dataKeyName: {}, placeholder: {} }, [], [], !0);
var l3 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), u3 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), c3 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), d3 = /* @__PURE__ */ ne('<div class="llm-setting svelte-j81vcl"><div class="setting-title svelte-j81vcl">采样参数</div> <div class="setting-item svelte-j81vcl"><div class="slider-container svelte-j81vcl"><span class="svelte-j81vcl"> </span> <input class="nodrag svelte-j81vcl" type="range" min="0" max="1" step="0.1"/></div></div> <div class="setting-item svelte-j81vcl"><div class="slider-container svelte-j81vcl"><span class="svelte-j81vcl"> </span> <input class="nodrag svelte-j81vcl" type="range" min="0" max="1" step="0.1"/></div></div> <div class="setting-item svelte-j81vcl"><div class="slider-container svelte-j81vcl"><span class="svelte-j81vcl"> </span> <input class="nodrag svelte-j81vcl" type="range" min="0" max="100" step="1"/></div></div></div>'), f3 = /* @__PURE__ */ ne('<div class="setting-title svelte-j81vcl">JSON Schema</div> <div class="setting-item svelte-j81vcl"><!></div>', 1), h3 = /* @__PURE__ */ ne('<div class="heading svelte-j81vcl"><!> <!></div> <!> <div class="heading svelte-j81vcl" style="padding-top: 10px"><!> <!></div> <!> <!> <div class="setting-title svelte-j81vcl">模型</div> <div class="setting-item svelte-j81vcl"><!> <!></div> <div class="setting-title svelte-j81vcl">系统提示词</div> <div class="setting-item svelte-j81vcl"><!></div> <div class="setting-title svelte-j81vcl">用户提示词</div> <div class="setting-item svelte-j81vcl"><!></div> <!> <div class="heading svelte-j81vcl"><!> <!></div> <!>', 1);
const g3 = {
  hash: "svelte-j81vcl",
  code: `.heading.svelte-j81vcl {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-j81vcl {font-size:12px;color:var(--tf-secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-j81vcl {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-j81vcl {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-j81vcl span:where(.svelte-j81vcl) {font-size:12px;color:var(--tf-muted-foreground);display:flex;justify-content:space-between;align-items:center;}.llm-setting.svelte-j81vcl {width:200px;background:var(--tf-background);padding:10px;border-radius:5px;box-shadow:0 0 10px rgba(0, 0, 0, 0.1);border:1px solid var(--tf-border);}input[type='range'].svelte-j81vcl {width:100%;height:4px;background:var(--tf-muted);border-radius:2px;outline:none;-webkit-appearance:none;}input[type='range'].svelte-j81vcl::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:var(--tf-primary);border-radius:50%;cursor:pointer;}`
};
function Vv(t, e) {
  ue(e, !0), Je(t, g3);
  const n = v(e, "data", 7), r = /* @__PURE__ */ Le(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = vt(), { addParameter: i } = Sn(), s = vn();
  let a = /* @__PURE__ */ ye(ht([]));
  xn(async () => {
    const f = await s.provider?.llm?.();
    c(a).push(...f || []);
  });
  const { updateNodeData: u } = wt(), l = (f) => {
    u(o, () => ({ outType: f })), f === "text" ? u(o, {
      outputDefs: [
        {
          name: "output",
          dataType: "String",
          dataTypeDisabled: !0,
          deleteDisabled: !0
        }
      ]
    }) : u(o, {
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
    n().outType || l("text");
  });
  var d = {
    get data() {
      return n();
    },
    set data(f) {
      n(f), g();
    }
  };
  return sn(t, Ve(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (h) => {
        var p = l3();
        O(h, p);
      },
      children: (h, p) => {
        var m = h3(), y = J(m), w = Z(y);
        We(w, {
          level: 3,
          children: (j, q) => {
            Se();
            var F = Me("输入参数");
            O(j, F);
          },
          $$slots: { default: !0 }
        });
        var b = z(w, 2);
        $e(b, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (j, q) => {
            var F = u3();
            O(j, F);
          },
          $$slots: { default: !0 }
        }), W(y);
        var S = z(y, 2);
        zt(S, {});
        var E = z(S, 2), x = Z(E);
        We(x, {
          level: 3,
          children: (j, q) => {
            Se();
            var F = Me("图片识别");
            O(j, F);
          },
          $$slots: { default: !0 }
        });
        var _ = z(x, 2);
        $e(_, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "images");
          },
          children: (j, q) => {
            var F = c3();
            O(j, F);
          },
          $$slots: { default: !0 }
        }), W(E);
        var T = z(E, 2);
        zt(T, { dataKeyName: "images", noneParameterText: "无图片参数" });
        var I = z(T, 2);
        We(I, {
          level: 3,
          mt: "10px",
          children: (j, q) => {
            Se();
            var F = Me("模型设置");
            O(j, F);
          },
          $$slots: { default: !0 }
        });
        var B = z(I, 4), $ = Z(B);
        {
          let j = /* @__PURE__ */ C(() => n().llmId ? [n().llmId] : []);
          _t($, {
            get items() {
              return c(a);
            },
            style: "width: 100%",
            placeholder: "请选择模型",
            onSelect: (q) => {
              const F = q.value;
              u(o, () => ({ llmId: F }));
            },
            get value() {
              return c(j);
            }
          });
        }
        var H = z($, 2);
        jr(H, {
          placement: "bottom",
          floating: (q) => {
            var F = d3(), Q = z(Z(F), 2), X = Z(Q), re = Z(X), ee = Z(re);
            W(re);
            var L = z(re, 2);
            Qn(L), L.__input = (Ee) => u(o, { temperature: parseFloat(Ee.target.value) }), W(X), W(Q);
            var te = z(Q, 2), ve = Z(te), ae = Z(ve), le = Z(ae);
            W(ae);
            var oe = z(ae, 2);
            Qn(oe), oe.__input = (Ee) => u(o, { topP: parseFloat(Ee.target.value) }), W(ve), W(te);
            var fe = z(te, 2), we = Z(fe), xe = Z(we), pe = Z(xe);
            W(xe);
            var me = z(xe, 2);
            Qn(me), me.__input = (Ee) => u(o, { topK: parseInt(Ee.target.value) }), W(we), W(fe), W(F), Te(() => {
              tt(ee, `Temperature: ${n().temperature ?? 0.5 ?? ""}`), zi(L, n().temperature ?? 0.5), tt(le, `Top P: ${n().topP ?? 0.9 ?? ""}`), zi(oe, n().topP ?? 0.9), tt(pe, `Top K: ${n().topK ?? 50 ?? ""}`), zi(me, n().topK ?? 50);
            }), O(q, F);
          },
          children: (q, F) => {
            Si(q, {});
          },
          $$slots: { floating: !0, default: !0 }
        }), W(B);
        var N = z(B, 4), k = Z(N);
        {
          let j = /* @__PURE__ */ C(() => n().systemPrompt || "");
          qe(k, {
            rows: 5,
            placeholder: "请输入系统提示词",
            style: "width: 100%",
            get value() {
              return c(j);
            },
            oninput: (q) => {
              u(o, { systemPrompt: q.target.value });
            }
          });
        }
        W(N);
        var D = z(N, 4), P = Z(D);
        {
          let j = /* @__PURE__ */ C(() => n().userPrompt || "");
          qe(P, {
            rows: 5,
            placeholder: "请输入用户提示词",
            style: "width: 100%",
            get value() {
              return c(j);
            },
            oninput: (q) => {
              u(o, { userPrompt: q.target.value });
            }
          });
        }
        W(D);
        var A = z(D, 2);
        {
          var R = (j) => {
            var q = f3(), F = z(J(q), 2), Q = Z(F);
            {
              let X = /* @__PURE__ */ C(() => n().jsonSchema || "");
              qe(Q, {
                rows: 5,
                placeholder: "请输入 SON Schema",
                style: "width: 100%",
                get value() {
                  return c(X);
                },
                oninput: (re) => {
                  u(o, { jsonSchema: re.target.value });
                }
              });
            }
            W(F), O(j, q);
          };
          ie(A, (j) => {
            n().outType === "json" && j(R);
          });
        }
        var M = z(A, 2), Y = Z(M);
        We(Y, {
          level: 3,
          children: (j, q) => {
            Se();
            var F = Me("输出参数");
            O(j, F);
          },
          $$slots: { default: !0 }
        });
        var U = z(Y, 2);
        {
          let j = /* @__PURE__ */ C(() => n().outType ? [n().outType] : []);
          _t(U, {
            class: "tf-select-xs",
            items: [
              { label: "文本", value: "text" },
              { label: "JSON", value: "json" }
            ],
            onSelect: (q) => {
              l(q.value);
            },
            get value() {
              return c(j);
            }
          });
        }
        W(M);
        var V = z(M, 2);
        dr(V, {}), O(h, m);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ce(d);
}
Sr(["input"]);
se(Vv, { data: {} }, [], [], !0);
var v3 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), p3 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), m3 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), y3 = /* @__PURE__ */ ne('<div class="heading svelte-1wcsayx"><!> <!></div> <!> <!> <div class="setting-title svelte-1wcsayx">执行引擎</div> <div class="setting-item svelte-1wcsayx"><!></div> <div class="setting-title svelte-1wcsayx">执行代码</div> <div class="setting-item svelte-1wcsayx"><!></div> <div class="heading svelte-1wcsayx"><!> <!></div> <!>', 1);
const w3 = {
  hash: "svelte-1wcsayx",
  code: ".heading.svelte-1wcsayx {display:flex;margin-bottom:10px;}.setting-title.svelte-1wcsayx {font-size:12px;color:var(--tf-secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-1wcsayx {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function zv(t, e) {
  ue(e, !0), Je(t, w3);
  const n = v(e, "data", 7), r = /* @__PURE__ */ Le(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]);
  xn(() => {
    n().engine || s(o, () => ({ engine: "qlexpress" }));
  });
  const o = vt(), { addParameter: i } = Sn(), { updateNodeData: s } = wt(), a = [
    { label: "JavaScript", value: "js" },
    { label: "Groovy", value: "groovy" },
    { label: "QLExpress", value: "qlexpress" }
  ];
  var u = {
    get data() {
      return n();
    },
    set data(l) {
      n(l), g();
    }
  };
  return sn(t, Ve(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (d) => {
        var f = v3();
        O(d, f);
      },
      children: (d, f) => {
        var h = y3(), p = J(h), m = Z(p);
        We(m, {
          level: 3,
          children: (H, N) => {
            Se();
            var k = Me("输入参数");
            O(H, k);
          },
          $$slots: { default: !0 }
        });
        var y = z(m, 2);
        $e(y, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (H, N) => {
            var k = p3();
            O(H, k);
          },
          $$slots: { default: !0 }
        }), W(p);
        var w = z(p, 2);
        zt(w, {});
        var b = z(w, 2);
        We(b, {
          level: 3,
          mt: "10px",
          children: (H, N) => {
            Se();
            var k = Me("代码");
            O(H, k);
          },
          $$slots: { default: !0 }
        });
        var S = z(b, 4), E = Z(S);
        {
          let H = /* @__PURE__ */ C(() => n().engine ? [n().engine] : ["qlexpress"]);
          _t(E, {
            get items() {
              return a;
            },
            style: "width: 100%",
            placeholder: "请选择执行引擎",
            onSelect: (N) => {
              const k = N.value;
              s(o, () => ({ engine: k }));
            },
            get value() {
              return c(H);
            }
          });
        }
        W(S);
        var x = z(S, 4), _ = Z(x);
        {
          let H = /* @__PURE__ */ C(() => n().code || "");
          qe(_, {
            rows: 10,
            placeholder: "请输入执行代码，注：输出内容需添加到_result中，如：_result['key'] = value 或者 _result.key = value",
            style: "width: 100%",
            onchange: (N) => {
              s(o, () => ({ code: N.target.value }));
            },
            get value() {
              return c(H);
            }
          });
        }
        W(x);
        var T = z(x, 2), I = Z(T);
        We(I, {
          level: 3,
          mt: "10px",
          children: (H, N) => {
            Se();
            var k = Me("输出参数");
            O(H, k);
          },
          $$slots: { default: !0 }
        });
        var B = z(I, 2);
        $e(B, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (H, N) => {
            var k = m3();
            O(H, k);
          },
          $$slots: { default: !0 }
        }), W(T);
        var $ = z(T, 2);
        dr($, {}), O(d, h);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ce(u);
}
se(zv, { data: {} }, [], [], !0);
var b3 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>'), x3 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), _3 = /* @__PURE__ */ ne('<div class="heading svelte-1lcrzpc"><!> <!></div> <!> <!> <div class="setting-item svelte-1lcrzpc"><!></div> <div class="heading svelte-1lcrzpc"><!></div> <!>', 1);
const C3 = {
  hash: "svelte-1lcrzpc",
  code: ".heading.svelte-1lcrzpc {display:flex;margin-bottom:10px;}.setting-item.svelte-1lcrzpc {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Rv(t, e) {
  ue(e, !0), Je(t, C3);
  const n = v(e, "data", 7), r = /* @__PURE__ */ Le(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = vt(), { addParameter: i } = Sn(), { updateNodeData: s } = wt();
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
    set data(u) {
      n(u), g();
    }
  };
  return sn(t, Ve(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var d = b3();
        O(l, d);
      },
      children: (l, d) => {
        var f = _3(), h = J(f), p = Z(h);
        We(p, {
          level: 3,
          children: (T, I) => {
            Se();
            var B = Me("输入参数");
            O(T, B);
          },
          $$slots: { default: !0 }
        });
        var m = z(p, 2);
        $e(m, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (T, I) => {
            var B = x3();
            O(T, B);
          },
          $$slots: { default: !0 }
        }), W(h);
        var y = z(h, 2);
        zt(y, {});
        var w = z(y, 2);
        We(w, {
          level: 3,
          mt: "10px",
          mb: "10px",
          children: (T, I) => {
            Se();
            var B = Me("模板内容");
            O(T, B);
          },
          $$slots: { default: !0 }
        });
        var b = z(w, 2), S = Z(b);
        {
          let T = /* @__PURE__ */ C(() => n().template || "");
          qe(S, {
            rows: 10,
            placeholder: "请输入模板内容",
            style: "width: 100%",
            onchange: (I) => {
              s(o, () => ({ template: I.target.value }));
            },
            get value() {
              return c(T);
            }
          });
        }
        W(b);
        var E = z(b, 2), x = Z(E);
        We(x, {
          level: 3,
          mt: "10px",
          children: (T, I) => {
            Se();
            var B = Me("输出参数");
            O(T, B);
          },
          $$slots: { default: !0 }
        }), W(E);
        var _ = z(E, 2);
        dr(_, {}), O(l, f);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ce(a);
}
se(Rv, { data: {} }, [], [], !0);
var S3 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), k3 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), E3 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), P3 = /* @__PURE__ */ ne('<!> <div class="radio-group svelte-19uflw6"><label class="svelte-19uflw6"><!>none</label> <label class="svelte-19uflw6"><!>form-data</label> <label class="svelte-19uflw6"><!>x-www-form-urlencoded</label> <label class="svelte-19uflw6"><!>json</label> <label class="svelte-19uflw6"><!>raw</label></div>', 1), N3 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), T3 = /* @__PURE__ */ ne('<div class="heading svelte-19uflw6" style="padding-top: 10px"><!> <!></div> <!>', 1), O3 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), A3 = /* @__PURE__ */ ne('<div class="heading svelte-19uflw6" style="padding-top: 10px"><!> <!></div> <!>', 1), D3 = /* @__PURE__ */ ne('<div style="width: 100%"><!></div>'), I3 = /* @__PURE__ */ ne('<div style="width: 100%"><!></div>'), M3 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), L3 = /* @__PURE__ */ ne('<div class="heading svelte-19uflw6"><!> <!></div> <!> <!> <div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-19uflw6"><!> <!></div> <!> <!> <!> <!> <!> <!> <div class="heading svelte-19uflw6"><!> <!></div> <!>', 1);
const H3 = {
  hash: "svelte-19uflw6",
  code: ".heading.svelte-19uflw6 {display:flex;margin-bottom:10px;}.radio-group.svelte-19uflw6 {display:flex;margin:10px 0;flex-wrap:wrap;gap:8px;}.radio-group.svelte-19uflw6 label:where(.svelte-19uflw6) {display:flex;font-size:14px;box-sizing:border-box;gap:4px;}"
};
function Fv(t, e) {
  ue(e, !0), Je(t, H3);
  const n = v(e, "data", 7), r = /* @__PURE__ */ Le(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]);
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
  ], i = vt(), { addParameter: s } = Sn(), { updateNodeData: a } = wt();
  var u = {
    get data() {
      return n();
    },
    set data(l) {
      n(l), g();
    }
  };
  return sn(t, Ve(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (d) => {
        var f = S3();
        O(d, f);
      },
      children: (d, f) => {
        var h = L3(), p = J(h), m = Z(p);
        We(m, {
          level: 3,
          children: (X, re) => {
            Se();
            var ee = Me("输入参数");
            O(X, ee);
          },
          $$slots: { default: !0 }
        });
        var y = z(m, 2);
        $e(y, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i);
          },
          children: (X, re) => {
            var ee = k3();
            O(X, ee);
          },
          $$slots: { default: !0 }
        }), W(p);
        var w = z(p, 2);
        zt(w, {});
        var b = z(w, 2);
        We(b, {
          level: 3,
          mt: "10px",
          children: (X, re) => {
            Se();
            var ee = Me("URL 地址");
            O(X, ee);
          },
          $$slots: { default: !0 }
        });
        var S = z(b, 2), E = Z(S), x = Z(E);
        {
          let X = /* @__PURE__ */ C(() => n().method ? [n().method] : ["get"]);
          _t(x, {
            get items() {
              return o;
            },
            style: "width: 100%",
            placeholder: "请选择请求方式",
            onSelect: (re) => {
              const ee = re.value;
              a(i, () => ({ method: ee }));
            },
            get value() {
              return c(X);
            }
          });
        }
        W(E);
        var _ = z(E, 2), T = Z(_);
        {
          let X = /* @__PURE__ */ C(() => n().url || "");
          ft(T, {
            placeholder: "请输入url",
            style: "width: 100%",
            onchange: (re) => {
              a(i, () => ({ url: re.target.value }));
            },
            get value() {
              return c(X);
            }
          });
        }
        W(_), W(S);
        var I = z(S, 2), B = Z(I);
        We(B, {
          level: 3,
          children: (X, re) => {
            Se();
            var ee = Me("Http 头信息");
            O(X, ee);
          },
          $$slots: { default: !0 }
        });
        var $ = z(B, 2);
        $e($, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "headers");
          },
          children: (X, re) => {
            var ee = E3();
            O(X, ee);
          },
          $$slots: { default: !0 }
        }), W(I);
        var H = z(I, 2);
        zt(H, { dataKeyName: "headers" });
        var N = z(H, 2);
        {
          var k = (X) => {
            var re = P3(), ee = J(re);
            We(ee, {
              level: 3,
              mt: "10px",
              children: (Ee, G) => {
                Se();
                var Ue = Me("Body");
                O(Ee, Ue);
              },
              $$slots: { default: !0 }
            });
            var L = z(ee, 2), te = Z(L), ve = Z(te);
            {
              let Ee = /* @__PURE__ */ C(() => !n().bodyType || n().bodyType === "");
              ft(ve, {
                type: "radio",
                value: "",
                get checked() {
                  return c(Ee);
                },
                onchange: (G) => {
                  G.target?.checked && a(i, { bodyType: "" });
                }
              });
            }
            Se(), W(te);
            var ae = z(te, 2), le = Z(ae);
            {
              let Ee = /* @__PURE__ */ C(() => n().bodyType === "form-data");
              ft(le, {
                type: "radio",
                value: "form-data",
                get checked() {
                  return c(Ee);
                },
                onchange: (G) => {
                  G.target?.checked && a(i, { bodyType: "form-data" });
                }
              });
            }
            Se(), W(ae);
            var oe = z(ae, 2), fe = Z(oe);
            {
              let Ee = /* @__PURE__ */ C(() => n().bodyType === "x-www-form-urlencoded");
              ft(fe, {
                type: "radio",
                value: "x-www-form-urlencoded",
                get checked() {
                  return c(Ee);
                },
                onchange: (G) => {
                  G.target?.checked && a(i, { bodyType: "x-www-form-urlencoded" });
                }
              });
            }
            Se(), W(oe);
            var we = z(oe, 2), xe = Z(we);
            {
              let Ee = /* @__PURE__ */ C(() => n().bodyType === "json");
              ft(xe, {
                type: "radio",
                value: "json",
                get checked() {
                  return c(Ee);
                },
                onchange: (G) => {
                  G.target?.checked && a(i, { bodyType: "json" });
                }
              });
            }
            Se(), W(we);
            var pe = z(we, 2), me = Z(pe);
            {
              let Ee = /* @__PURE__ */ C(() => n().bodyType === "raw");
              ft(me, {
                type: "radio",
                value: "raw",
                get checked() {
                  return c(Ee);
                },
                onchange: (G) => {
                  G.target?.checked && a(i, { bodyType: "raw" });
                }
              });
            }
            Se(), W(pe), W(L), O(X, re);
          };
          ie(N, (X) => {
            (n().method === "post" || n().method === "put" || n().method === "delete" || n().method === "patch") && X(k);
          });
        }
        var D = z(N, 2);
        {
          var P = (X) => {
            var re = T3(), ee = J(re), L = Z(ee);
            We(L, {
              level: 3,
              children: (ae, le) => {
                Se();
                var oe = Me("参数");
                O(ae, oe);
              },
              $$slots: { default: !0 }
            });
            var te = z(L, 2);
            $e(te, {
              size: "icon-xs",
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formData");
              },
              children: (ae, le) => {
                var oe = N3();
                O(ae, oe);
              },
              $$slots: { default: !0 }
            }), W(ee);
            var ve = z(ee, 2);
            zt(ve, { dataKeyName: "formData" }), O(X, re);
          };
          ie(D, (X) => {
            n().bodyType === "form-data" && X(P);
          });
        }
        var A = z(D, 2);
        {
          var R = (X) => {
            var re = A3(), ee = J(re), L = Z(ee);
            We(L, {
              level: 3,
              children: (ae, le) => {
                Se();
                var oe = Me("Body 参数");
                O(ae, oe);
              },
              $$slots: { default: !0 }
            });
            var te = z(L, 2);
            $e(te, {
              size: "icon-xs",
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formUrlencoded");
              },
              children: (ae, le) => {
                var oe = O3();
                O(ae, oe);
              },
              $$slots: { default: !0 }
            }), W(ee);
            var ve = z(ee, 2);
            zt(ve, { dataKeyName: "formUrlencoded" }), O(X, re);
          };
          ie(A, (X) => {
            n().bodyType === "x-www-form-urlencoded" && X(R);
          });
        }
        var M = z(A, 2);
        {
          var Y = (X) => {
            var re = D3(), ee = Z(re);
            qe(ee, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入 json 信息",
              get value() {
                return n().bodyJson;
              },
              oninput: (L) => {
                a(i, { bodyJson: L.target.value });
              }
            }), W(re), O(X, re);
          };
          ie(M, (X) => {
            n().bodyType === "json" && X(Y);
          });
        }
        var U = z(M, 2);
        {
          var V = (X) => {
            var re = I3(), ee = Z(re);
            qe(ee, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入请求信息",
              get value() {
                return n().bodyRaw;
              },
              oninput: (L) => {
                a(i, { bodyRaw: L.target.value });
              }
            }), W(re), O(X, re);
          };
          ie(U, (X) => {
            n().bodyType === "raw" && X(V);
          });
        }
        var j = z(U, 2), q = Z(j);
        We(q, {
          level: 3,
          mt: "10px",
          children: (X, re) => {
            Se();
            var ee = Me("输出参数");
            O(X, ee);
          },
          $$slots: { default: !0 }
        });
        var F = z(q, 2);
        $e(F, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "outputDefs");
          },
          children: (X, re) => {
            var ee = M3();
            O(X, ee);
          },
          $$slots: { default: !0 }
        }), W(j);
        var Q = z(j, 2);
        dr(Q, {}), O(d, h);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ce(u);
}
se(Fv, { data: {} }, [], [], !0);
var V3 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>'), z3 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), R3 = /* @__PURE__ */ ne('<div class="heading svelte-ddi5i"><!> <!></div> <!> <!> <div class="setting-title svelte-ddi5i">知识库</div> <div class="setting-item svelte-ddi5i"><!></div> <div class="setting-title svelte-ddi5i">关键字</div> <div class="setting-item svelte-ddi5i"><!></div> <div class="setting-title svelte-ddi5i">获取数据量</div> <div class="setting-item svelte-ddi5i"><!></div> <div class="heading svelte-ddi5i"><!></div> <!>', 1);
const F3 = {
  hash: "svelte-ddi5i",
  code: ".heading.svelte-ddi5i {display:flex;margin-bottom:10px;}.setting-title.svelte-ddi5i {font-size:12px;color:var(--tf-secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-ddi5i {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Bv(t, e) {
  ue(e, !0), Je(t, F3);
  const n = v(e, "data", 7), r = /* @__PURE__ */ Le(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = vt(), { addParameter: i } = Sn(), s = vn();
  let a = /* @__PURE__ */ ye(ht([]));
  xn(async () => {
    const d = await s.provider?.knowledge?.();
    c(a).push(...d || []);
  });
  const { updateNodeData: u } = wt();
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
  var l = {
    get data() {
      return n();
    },
    set data(d) {
      n(d), g();
    }
  };
  return sn(t, Ve(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (f) => {
        var h = V3();
        O(f, h);
      },
      children: (f, h) => {
        var p = R3(), m = J(p), y = Z(m);
        We(y, {
          level: 3,
          children: (k, D) => {
            Se();
            var P = Me("输入参数");
            O(k, P);
          },
          $$slots: { default: !0 }
        });
        var w = z(y, 2);
        $e(w, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (k, D) => {
            var P = z3();
            O(k, P);
          },
          $$slots: { default: !0 }
        }), W(m);
        var b = z(m, 2);
        zt(b, {});
        var S = z(b, 2);
        We(S, {
          level: 3,
          mt: "10px",
          children: (k, D) => {
            Se();
            var P = Me("知识库设置");
            O(k, P);
          },
          $$slots: { default: !0 }
        });
        var E = z(S, 4), x = Z(E);
        {
          let k = /* @__PURE__ */ C(() => n().knowledgeId ? [n().knowledgeId] : []);
          _t(x, {
            get items() {
              return c(a);
            },
            style: "width: 100%",
            placeholder: "请选择知识库",
            onSelect: (D) => {
              const P = D.value;
              u(o, () => ({ knowledgeId: P }));
            },
            get value() {
              return c(k);
            }
          });
        }
        W(E);
        var _ = z(E, 4), T = Z(_);
        ft(T, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (k) => {
            const D = k.target.value;
            u(o, () => ({ keyword: D }));
          }
        }), W(_);
        var I = z(_, 4), B = Z(I);
        {
          let k = /* @__PURE__ */ C(() => n().limit || "");
          ft(B, {
            placeholder: "搜索的数据条数",
            style: "width: 100%",
            onchange: (D) => {
              const P = D.target.value;
              u(o, () => ({ limit: P }));
            },
            get value() {
              return c(k);
            }
          });
        }
        W(I);
        var $ = z(I, 2), H = Z($);
        We(H, {
          level: 3,
          mt: "10px",
          children: (k, D) => {
            Se();
            var P = Me("输出参数");
            O(k, P);
          },
          $$slots: { default: !0 }
        }), W($);
        var N = z($, 2);
        dr(N, {}), O(f, p);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ce(l);
}
se(Bv, { data: {} }, [], [], !0);
var B3 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>'), $3 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), K3 = /* @__PURE__ */ ne('<div class="heading svelte-1qblm04"><!> <!></div> <!> <!> <div class="setting-title svelte-1qblm04">搜索引擎</div> <div class="setting-item svelte-1qblm04"><!></div> <div class="setting-title svelte-1qblm04">关键字</div> <div class="setting-item svelte-1qblm04"><!></div> <div class="setting-title svelte-1qblm04">搜索数据量</div> <div class="setting-item svelte-1qblm04"><!></div> <div class="heading svelte-1qblm04"><!></div> <!>', 1);
const W3 = {
  hash: "svelte-1qblm04",
  code: ".heading.svelte-1qblm04 {display:flex;margin-bottom:10px;}.setting-title.svelte-1qblm04 {font-size:12px;color:var(--tf-secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-1qblm04 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function $v(t, e) {
  ue(e, !0), Je(t, W3);
  const n = v(e, "data", 7), r = /* @__PURE__ */ Le(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = vt(), { addParameter: i } = Sn(), s = vn();
  let a = /* @__PURE__ */ ye(ht([]));
  xn(async () => {
    const d = await s.provider?.searchEngine?.();
    c(a).push(...d || []);
  });
  const { updateNodeData: u } = wt();
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
  var l = {
    get data() {
      return n();
    },
    set data(d) {
      n(d), g();
    }
  };
  return sn(t, Ve(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (f) => {
        var h = B3();
        O(f, h);
      },
      children: (f, h) => {
        var p = K3(), m = J(p), y = Z(m);
        We(y, {
          level: 3,
          children: (k, D) => {
            Se();
            var P = Me("输入参数");
            O(k, P);
          },
          $$slots: { default: !0 }
        });
        var w = z(y, 2);
        $e(w, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (k, D) => {
            var P = $3();
            O(k, P);
          },
          $$slots: { default: !0 }
        }), W(m);
        var b = z(m, 2);
        zt(b, {});
        var S = z(b, 2);
        We(S, {
          level: 3,
          mt: "10px",
          children: (k, D) => {
            Se();
            var P = Me("搜索引擎设置");
            O(k, P);
          },
          $$slots: { default: !0 }
        });
        var E = z(S, 4), x = Z(E);
        {
          let k = /* @__PURE__ */ C(() => n().engine ? [n().engine] : []);
          _t(x, {
            get items() {
              return c(a);
            },
            style: "width: 100%",
            placeholder: "请选择搜索引擎",
            onSelect: (D) => {
              const P = D.value;
              u(o, () => ({ engine: P }));
            },
            get value() {
              return c(k);
            }
          });
        }
        W(E);
        var _ = z(E, 4), T = Z(_);
        ft(T, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (k) => {
            const D = k.target.value;
            u(o, () => ({ keyword: D }));
          }
        }), W(_);
        var I = z(_, 4), B = Z(I);
        ft(B, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          get value() {
            return n().limit;
          },
          onchange: (k) => {
            const D = k.target.value;
            u(o, () => ({ limit: D }));
          }
        }), W(I);
        var $ = z(I, 2), H = Z($);
        We(H, {
          level: 3,
          mt: "10px",
          children: (k, D) => {
            Se();
            var P = Me("输出参数");
            O(k, P);
          },
          $$slots: { default: !0 }
        }), W($);
        var N = z($, 2);
        dr(N, {}), O(f, p);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ce(l);
}
se($v, { data: {} }, [], [], !0);
var Z3 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>'), Y3 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), q3 = /* @__PURE__ */ ne('<div class="heading svelte-1o34e8c"><!></div> <!> <div class="heading svelte-1o34e8c"><!> <!></div> <!>', 1);
const X3 = {
  hash: "svelte-1o34e8c",
  code: ".heading.svelte-1o34e8c {display:flex;margin:10px 0;align-items:center;}.loop_handle_wrapper::after {content:'循环体';width:100px;height:20px;background:var(--tf-primary);color:var(--tf-primary-foreground);display:flex;justify-content:center;align-items:center;}"
};
function Kv(t, e) {
  ue(e, !0), Je(t, X3);
  const n = v(e, "data", 7), r = /* @__PURE__ */ Le(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = vt(), { addParameter: i } = Sn();
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
  return sn(t, Ve(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var d = Z3();
        O(l, d);
      },
      handle: (l) => {
        yr(l, {
          type: "source",
          get position() {
            return ke.Bottom;
          },
          id: "loop_handle",
          style: "bottom: -12px;width: 100px",
          class: "loop_handle_wrapper"
        });
      },
      children: (l, d) => {
        var f = q3(), h = J(f), p = Z(h);
        We(p, {
          level: 3,
          children: (E, x) => {
            Se();
            var _ = Me("循环变量");
            O(E, _);
          },
          $$slots: { default: !0 }
        }), W(h);
        var m = z(h, 2);
        zt(m, { dataKeyName: "loopVars" });
        var y = z(m, 2), w = Z(y);
        We(w, {
          level: 3,
          children: (E, x) => {
            Se();
            var _ = Me("输出参数");
            O(E, _);
          },
          $$slots: { default: !0 }
        });
        var b = z(w, 2);
        $e(b, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (E, x) => {
            var _ = Y3();
            O(E, _);
          },
          $$slots: { default: !0 }
        }), W(y);
        var S = z(y, 2);
        zt(S, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs",
          useChildrenOnly: !0
        }), O(l, f);
      },
      $$slots: { icon: !0, handle: !0, default: !0 }
    }
  )), ce(s);
}
se(Kv, { data: {} }, [], [], !0);
var j3 = /* @__PURE__ */ ne('<div class="input-more-setting svelte-5x0hls"><div class="input-more-item svelte-5x0hls">数据类型： <!></div> <div class="input-more-item svelte-5x0hls">确认方式： <!></div> <div class="input-more-item svelte-5x0hls">数据标题： <!></div> <div class="input-more-item svelte-5x0hls">数据描述： <!></div>   <div class="input-more-item svelte-5x0hls"><!></div></div>'), U3 = /* @__PURE__ */ ne('<div class="input-item svelte-5x0hls"><!></div> <div class="input-item svelte-5x0hls"><!></div> <div class="input-item svelte-5x0hls"><!></div>', 1);
const G3 = {
  hash: "svelte-5x0hls",
  code: ".input-item.svelte-5x0hls {display:flex;align-items:center;}.input-more-setting.svelte-5x0hls {display:flex;flex-direction:column;gap:10px;padding:10px;background:var(--tf-background);border:1px solid var(--tf-border);border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-5x0hls .input-more-item:where(.svelte-5x0hls) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:var(--tf-muted-foreground);}"
};
function Wv(t, e) {
  ue(e, !0), Je(t, G3);
  const n = v(e, "parameter", 7), r = v(e, "index", 7), o = v(e, "dataKeyName", 7), i = v(e, "useChildrenOnly", 7);
  let s = vt(), a = cr(s), u = /* @__PURE__ */ C(() => ({
    ...n(),
    ...a?.current?.data?.[o()][r()]
  }));
  const { updateNodeData: l } = wt(), d = (k, D) => {
    l(s, (P) => {
      let A = P.data?.[o()];
      return A[r()] = { ...A[r()], [k]: D }, { [o()]: A };
    });
  }, f = (k, D) => {
    const P = D.target.value;
    d(k, P);
  }, h = (k) => {
    const D = k.value;
    d("ref", D);
  }, p = (k) => {
    const D = k.value;
    d("formType", D);
  }, m = (k) => {
    const D = k.value;
    d("contentType", D);
  };
  let y;
  const w = () => {
    l(s, (k) => {
      let D = k.data?.[o()];
      return D.splice(r(), 1), { [o()]: [...D] };
    }), y?.hide();
  };
  let b = Iv(i());
  var S = {
    get parameter() {
      return n();
    },
    set parameter(k) {
      n(k), g();
    },
    get index() {
      return r();
    },
    set index(k) {
      r(k), g();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(k) {
      o(k), g();
    },
    get useChildrenOnly() {
      return i();
    },
    set useChildrenOnly(k) {
      i(k), g();
    }
  }, E = U3(), x = J(E), _ = Z(x);
  {
    let k = /* @__PURE__ */ C(() => c(u).nameDisabled === !0);
    ft(_, {
      style: "width: 100%;",
      get value() {
        return c(u).name;
      },
      placeholder: "请输入参数",
      get disabled() {
        return c(k);
      },
      oninput: (D) => f("name", D)
    });
  }
  W(x);
  var T = z(x, 2), I = Z(T);
  {
    var B = (k) => {
      ft(k, {
        get value() {
          return c(u).value;
        },
        placeholder: "请输入参数值",
        oninput: (D) => f("value", D)
      });
    }, $ = (k) => {
      var D = de(), P = J(D);
      {
        var A = (R) => {
          {
            let M = /* @__PURE__ */ C(() => [c(u).ref]);
            _t(R, {
              get items() {
                return b.current;
              },
              style: "width: 100%",
              defaultValue: ["ref"],
              get value() {
                return c(M);
              },
              expandAll: !0,
              onSelect: h
            });
          }
        };
        ie(
          P,
          (R) => {
            c(u).refType !== "input" && R(A);
          },
          !0
        );
      }
      O(k, D);
    };
    ie(I, (k) => {
      c(u).refType === "fixed" ? k(B) : k($, !1);
    });
  }
  W(T);
  var H = z(T, 2), N = Z(H);
  return Nt(
    jr(N, {
      placement: "bottom",
      floating: (D) => {
        var P = j3(), A = Z(P), R = z(Z(A));
        {
          let X = /* @__PURE__ */ C(() => c(u).contentType ? [c(u).contentType] : []);
          _t(R, {
            get items() {
              return eu;
            },
            style: "width: 100%",
            defaultValue: ["text"],
            get value() {
              return c(X);
            },
            onSelect: m
          });
        }
        W(A);
        var M = z(A, 2), Y = z(Z(M));
        {
          let X = /* @__PURE__ */ C(() => c(u).formType ? [c(u).formType] : []);
          _t(Y, {
            get items() {
              return Cb;
            },
            style: "width: 100%",
            defaultValue: ["single"],
            get value() {
              return c(X);
            },
            onSelect: p
          });
        }
        W(M);
        var U = z(M, 2), V = z(Z(U));
        qe(V, {
          rows: 1,
          style: "width: 100%;",
          onchange: (X) => {
            f("formLabel", X);
          },
          get value() {
            return c(u).formLabel;
          }
        }), W(U);
        var j = z(U, 2), q = z(Z(j));
        qe(q, {
          rows: 2,
          style: "width: 100%;",
          onchange: (X) => {
            f("formDescription", X);
          },
          get value() {
            return c(u).formDescription;
          }
        }), W(j);
        var F = z(j, 2), Q = Z(F);
        $e(Q, {
          variant: "destructive",
          onclick: w,
          children: (X, re) => {
            Se();
            var ee = Me("删除");
            O(X, ee);
          },
          $$slots: { default: !0 }
        }), W(F), W(P), O(D, P);
      },
      children: (D, P) => {
        Si(D, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (D) => y = D,
    () => y
  ), W(H), O(t, E), ce(S);
}
se(
  Wv,
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
var J3 = /* @__PURE__ */ ne('<div class="input-header svelte-1fllp9b">参数名称</div> <div class="input-header svelte-1fllp9b">参数值</div> <div class="input-header svelte-1fllp9b"></div>', 1), Q3 = /* @__PURE__ */ ne('<div class="none-params svelte-1fllp9b"> </div>'), e4 = /* @__PURE__ */ ne('<div class="input-container svelte-1fllp9b"><!> <!></div>');
const t4 = {
  hash: "svelte-1fllp9b",
  code: `.input-container.svelte-1fllp9b {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1fllp9b .none-params:where(.svelte-1fllp9b) {font-size:12px;background:var(--tf-secondary);height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1fllp9b .input-header:where(.svelte-1fllp9b) {font-size:12px;color:var(--tf-muted-foreground);}`
};
function Zv(t, e) {
  ue(e, !0), Je(t, t4);
  const n = v(e, "noneParameterText", 7, "无确认数据"), r = v(e, "dataKeyName", 7, "parameters"), o = v(e, "useChildrenOnly", 7);
  let i = vt(), s = cr(i), a = /* @__PURE__ */ C(() => [...s?.current?.data?.[r()] || []]);
  var u = {
    get noneParameterText() {
      return n();
    },
    set noneParameterText(p = "无确认数据") {
      n(p), g();
    },
    get dataKeyName() {
      return r();
    },
    set dataKeyName(p = "parameters") {
      r(p), g();
    },
    get useChildrenOnly() {
      return o();
    },
    set useChildrenOnly(p) {
      o(p), g();
    }
  }, l = e4(), d = Z(l);
  {
    var f = (p) => {
      var m = J3();
      Se(4), O(p, m);
    };
    ie(d, (p) => {
      c(a).length !== 0 && p(f);
    });
  }
  var h = z(d, 2);
  return Ct(
    h,
    19,
    () => c(a),
    (p) => p.id,
    (p, m, y) => {
      Wv(p, {
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
    (p) => {
      var m = Q3(), y = Z(m, !0);
      W(m), Te(() => tt(y, n())), O(p, m);
    }
  ), W(l), O(t, l), ce(u);
}
se(Zv, { noneParameterText: {}, dataKeyName: {}, useChildrenOnly: {} }, [], [], !0);
const vl = (t, e) => {
  if (t === e) return !0;
  if (typeof t != "object" || t === null || typeof e != "object" || e === null)
    return !1;
  const n = Array.isArray(t), r = Array.isArray(e);
  if (n !== r) return !1;
  if (n && r) {
    if (t.length !== e.length) return !1;
    for (let o = 0; o < t.length; o++)
      if (!vl(t[o], e[o])) return !1;
    return !0;
  } else {
    const o = Object.keys(t), i = Object.keys(e);
    if (o.length !== i.length) return !1;
    for (const s of o)
      if (!(s in e) || !vl(t[s], e[s])) return !1;
    return !0;
  }
};
var n4 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), r4 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), o4 = /* @__PURE__ */ ne('<div class="heading svelte-8iukvu"><!> <!></div> <!> <!> <div class="setting-title svelte-8iukvu">消息内容</div> <div class="setting-item svelte-8iukvu"><!></div> <div class="heading svelte-8iukvu"><!></div> <!>', 1);
const i4 = {
  hash: "svelte-8iukvu",
  code: ".heading.svelte-8iukvu {display:flex;margin-bottom:10px;}.setting-title.svelte-8iukvu {font-size:12px;color:var(--tf-secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-8iukvu {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Yv(t, e) {
  ue(e, !0), Je(t, i4);
  const n = v(e, "data", 7), r = /* @__PURE__ */ Le(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = vt(), { addParameter: i } = Sn(), { updateNodeData: s } = wt();
  He(() => {
    if (n().confirms) {
      const u = n().confirms.map((l) => ({
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
        ...l,
        nameDisabled: !0,
        dataTypeDisabled: !0,
        dataType: l.formType === "checkbox" || l.formType === "select" ? "Array" : "String",
        addChildDisabled: !0
      }));
      vl(u, n().outputDefs) || s(o, () => ({ outputDefs: u }));
    }
  });
  var a = {
    get data() {
      return n();
    },
    set data(u) {
      n(u), g();
    }
  };
  return sn(t, Ve(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var d = n4();
        O(l, d);
      },
      children: (l, d) => {
        var f = o4(), h = J(f), p = Z(h);
        We(p, {
          level: 3,
          children: (T, I) => {
            Se();
            var B = Me("确认数据");
            O(T, B);
          },
          $$slots: { default: !0 }
        });
        var m = z(p, 2);
        $e(m, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "confirms");
          },
          children: (T, I) => {
            var B = r4();
            O(T, B);
          },
          $$slots: { default: !0 }
        }), W(h);
        var y = z(h, 2);
        Zv(y, { dataKeyName: "confirms", noneParameterText: "无确认数据" });
        var w = z(y, 2);
        We(w, {
          level: 3,
          mt: "10px",
          children: (T, I) => {
            Se();
            var B = Me("确认消息");
            O(T, B);
          },
          $$slots: { default: !0 }
        });
        var b = z(w, 4), S = Z(b);
        {
          let T = /* @__PURE__ */ C(() => n().message || "");
          qe(S, {
            rows: 5,
            placeholder: "请输入用户需要确认的消息内容",
            style: "width: 100%",
            onchange: (I) => {
              s(o, () => ({ message: I.target.value }));
            },
            get value() {
              return c(T);
            }
          });
        }
        W(b);
        var E = z(b, 2), x = Z(E);
        We(x, {
          level: 3,
          mt: "10px",
          children: (T, I) => {
            Se();
            var B = Me("输出参数");
            O(T, B);
          },
          $$slots: { default: !0 }
        }), W(E);
        var _ = z(E, 2);
        dr(_, { placeholder: "" }), O(l, f);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ce(a);
}
se(Yv, { data: {} }, [], [], !0);
const s4 = {
  startNode: Ov,
  codeNode: zv,
  confirmNode: Yv,
  llmNode: Vv,
  templateNode: Rv,
  httpNode: Fv,
  knowledgeNode: Bv,
  searchEngineNode: $v,
  loopNode: Kv,
  endNode: Lv
};
var a4 = /* @__PURE__ */ ne("<!> ", 1);
function pl(t, e) {
  ue(e, !0);
  const n = v(e, "icon", 7), r = v(e, "title", 7), o = v(e, "type", 7), i = v(e, "description", 7), s = v(e, "extra", 7), a = wt(), u = (f) => {
    if (!f.dataTransfer)
      return null;
    const h = {
      type: o(),
      data: { title: r(), description: i(), ...s() }
    };
    f.dataTransfer.setData("application/tinyflow", JSON.stringify(h)), f.dataTransfer.effectAllowed = "move";
  }, l = () => {
    const f = window.innerWidth, h = window.innerHeight, p = a.screenToFlowPosition({ x: f / 2, y: h / 2 }), m = {
      id: `node_${Rn()}`,
      type: o(),
      position: p,
      data: { title: r(), description: i(), ...s() }
    };
    Be.addNode(m), Be.selectNodeOnly(m.id);
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
  return $e(t, {
    draggable: !0,
    ondragstart: u,
    onclick: l,
    get "data-node-type"() {
      return o();
    },
    children: (f, h) => {
      var p = a4(), m = J(p);
      $s(m, n);
      var y = z(m);
      Te(() => tt(y, ` ${r() ?? ""}`)), O(f, p);
    },
    $$slots: { default: !0 }
  }), ce(d);
}
se(pl, { icon: {}, title: {}, type: {}, description: {}, extra: {} }, [], [], !0);
var l4 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), u4 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), c4 = /* @__PURE__ */ ne('<div><div class="tf-toolbar-container"><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"></div></div></div> <!></div>');
function qv(t, e) {
  ue(e, !0);
  let n = /* @__PURE__ */ ye("base"), r = /* @__PURE__ */ ye("show");
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
  ], s = [], a = vn(), u = a.customNodes;
  if (u) {
    const b = Object.keys(u).sort((S, E) => (u[S].sortNo || 0) - (u[E].sortNo || 0));
    for (let S of b)
      u[S].group === "base" ? o.push({ type: S, ...u[S] }) : s.push({
        icon: u[S].icon,
        title: u[S].title,
        type: S
      });
    o.sort((S, E) => (S.sortNo || 0) - (E.sortNo || 0));
  }
  if (a.hiddenNodes) {
    const b = typeof a.hiddenNodes == "function" ? a.hiddenNodes() : a.hiddenNodes;
    if (Array.isArray(b)) {
      for (let S of b)
        for (let E = 0; E < o.length; E++)
          if (o[E].type === S) {
            o.splice(E, 1);
            break;
          }
    }
  }
  var l = c4(), d = Z(l), f = Z(d), h = Z(f);
  Ev(h, {
    style: "width: 100%",
    get items() {
      return i;
    },
    onChange: (b) => {
      K(n, b.value.toString(), !0);
    }
  }), W(f);
  var p = z(f, 2), m = Z(p);
  Ct(m, 21, () => o, ao, (b, S) => {
    pl(b, Ve(() => c(S)));
  }), W(m);
  var y = z(m, 2);
  Ct(y, 21, () => s, ao, (b, S) => {
    pl(b, Ve(() => c(S)));
  }), W(y), W(p), W(d);
  var w = z(d, 2);
  $e(w, {
    size: "icon",
    variant: "outline",
    onclick: () => {
      K(r, c(r) ? "" : "show", !0);
    },
    children: (b, S) => {
      var E = de(), x = J(E);
      {
        var _ = (I) => {
          var B = l4();
          O(I, B);
        }, T = (I) => {
          var B = u4();
          O(I, B);
        };
        ie(x, (I) => {
          c(r) === "show" ? I(_) : I(T, !1);
        });
      }
      O(b, E);
    },
    $$slots: { default: !0 }
  }), W(l), Te(() => {
    Yt(l, 1, `tf-toolbar ${c(r) ?? ""}`), Pt(m, `display: ${c(n) === "base" ? "flex" : "none"}`), Pt(y, `display: ${c(n) !== "base" ? "flex" : "none"}`);
  }), O(t, l), ce();
}
se(qv, {}, [], [], !0);
const d4 = () => ({ getNode: (e) => Be.getNode(e) }), f4 = () => ({ ensureParentInNodesBefore: (e, n) => {
  Be.updateNodes((r) => {
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
} }), h4 = () => ({ getEdgesByTarget: (e) => Be.getEdges().filter((r) => r.target === e) });
var g4 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), v4 = /* @__PURE__ */ ne('<div class="heading svelte-qt4m0r"><!> <!></div> <!>', 1), p4 = /* @__PURE__ */ ne('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), m4 = /* @__PURE__ */ ne('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), y4 = /* @__PURE__ */ ne('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><div class="slider-container svelte-qt4m0r"><span class="svelte-qt4m0r"> </span> <input/></div></div>', 1), w4 = /* @__PURE__ */ ne('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), b4 = /* @__PURE__ */ ne('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), x4 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), _4 = /* @__PURE__ */ ne('<div class="heading svelte-qt4m0r"><!> <!></div> <!>', 1), C4 = /* @__PURE__ */ ne("<!> <!> <div></div> <!>", 1);
const S4 = {
  hash: "svelte-qt4m0r",
  code: `.heading.svelte-qt4m0r {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-qt4m0r {font-size:12px;color:var(--tf-secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-qt4m0r {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-qt4m0r {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-qt4m0r span:where(.svelte-qt4m0r) {font-size:12px;color:var(--tf-muted-foreground);display:flex;justify-content:space-between;align-items:center;}input[type='range'].svelte-qt4m0r {width:100%;height:4px;background:var(--tf-muted);border-radius:2px;outline:none;-webkit-appearance:none;}input[type='range'].svelte-qt4m0r::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:var(--tf-primary);border-radius:50%;cursor:pointer;}`
};
function Xv(t, e) {
  ue(e, !0), Je(t, S4);
  const n = v(e, "data", 7), r = /* @__PURE__ */ Le(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = vt(), { addParameter: i } = Sn(), s = wt(), { updateNodeData: a } = s, u = (b) => {
    a(o, b);
  }, l = (b, S) => {
    u({ [b]: S.target?.value });
  }, d = { ...r, id: o, data: n() }, f = document.createElement("div"), p = vn().customNodes[e.type];
  p.render?.(f, d, s);
  const m = p.forms;
  let y;
  He(() => {
    n().expand && y && y.append(f);
  }), He(() => {
    n() && p.onUpdate?.(f, { ...d, data: n() });
  }), He(() => {
    !n().parameters && p.parameters && u({
      parameters: ri(JSON.parse(JSON.stringify(p.parameters)))
    });
  }), He(() => {
    !n().outputDefs && p.outputDefs && u({
      outputDefs: ri(JSON.parse(JSON.stringify(p.outputDefs)))
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
    const b = (E) => {
      var x = de(), _ = J(x);
      $s(_, () => p.icon), O(E, x);
    };
    let S = /* @__PURE__ */ C(() => ({ ...n(), description: p.description }));
    sn(t, Ve(
      {
        get data() {
          return c(S);
        }
      },
      () => r,
      {
        icon: b,
        children: (E, x) => {
          var _ = C4(), T = J(_);
          {
            var I = (D) => {
              var P = v4(), A = J(P), R = Z(A);
              We(R, {
                level: 3,
                children: (V, j) => {
                  Se();
                  var q = Me("输入参数");
                  O(V, q);
                },
                $$slots: { default: !0 }
              });
              var M = z(R, 2);
              {
                var Y = (V) => {
                  $e(V, {
                    size: "icon-xs",
                    class: "input-btn-more",
                    style: "margin-left: auto",
                    onclick: () => {
                      i(o);
                    },
                    children: (j, q) => {
                      var F = g4();
                      O(j, F);
                    },
                    $$slots: { default: !0 }
                  });
                };
                ie(M, (V) => {
                  p.parametersAddEnable !== !1 && V(Y);
                });
              }
              W(A);
              var U = z(A, 2);
              zt(U, {}), O(D, P);
            };
            ie(T, (D) => {
              p.parametersEnable !== !1 && D(I);
            });
          }
          var B = z(T, 2);
          {
            var $ = (D) => {
              var P = de(), A = J(P);
              Ct(A, 17, () => m, ao, (R, M) => {
                var Y = de(), U = J(Y);
                {
                  var V = (q) => {
                    var F = p4(), Q = J(F), X = Z(Q, !0);
                    W(Q);
                    var re = z(Q, 2), ee = Z(re);
                    {
                      let L = /* @__PURE__ */ C(() => n()[c(M).name] || c(M).defaultValue);
                      ft(ee, Ve(
                        {
                          get placeholder() {
                            return c(M).placeholder;
                          },
                          style: "width: 100%",
                          get value() {
                            return c(L);
                          }
                        },
                        () => c(M).attrs,
                        {
                          onchange: (te) => {
                            l(c(M).name, te);
                          }
                        }
                      ));
                    }
                    W(re), Te(() => tt(X, c(M).label)), O(q, F);
                  }, j = (q) => {
                    var F = de(), Q = J(F);
                    {
                      var X = (ee) => {
                        var L = m4(), te = J(L), ve = Z(te, !0);
                        W(te);
                        var ae = z(te, 2), le = Z(ae);
                        {
                          let oe = /* @__PURE__ */ C(() => n()[c(M).name] || c(M).defaultValue);
                          qe(le, Ve(
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
                              onchange: (fe) => {
                                l(c(M).name, fe);
                              }
                            }
                          ));
                        }
                        W(ae), Te(() => tt(ve, c(M).label)), O(ee, L);
                      }, re = (ee) => {
                        var L = de(), te = J(L);
                        {
                          var ve = (le) => {
                            var oe = y4(), fe = J(oe), we = Z(fe, !0);
                            W(fe);
                            var xe = z(fe, 2), pe = Z(xe), me = Z(pe), Ee = Z(me);
                            W(me);
                            var G = z(me, 2), Ue = (be) => u({ [c(M).name]: parseFloat(be.target.value) });
                            Ge(
                              G,
                              () => ({
                                class: "nodrag",
                                type: "range",
                                ...c(M).attrs,
                                value: n()[c(M).name] ?? c(M).defaultValue,
                                oninput: Ue
                              }),
                              void 0,
                              void 0,
                              void 0,
                              "svelte-qt4m0r",
                              !0
                            ), W(pe), W(xe), Te(() => {
                              tt(we, c(M).label), tt(Ee, `${c(M).description ?? ""}: ${n()[c(M).name] ?? c(M).defaultValue ?? ""}`);
                            }), O(le, oe);
                          }, ae = (le) => {
                            var oe = de(), fe = J(oe);
                            {
                              var we = (pe) => {
                                var me = w4(), Ee = J(me), G = Z(Ee, !0);
                                W(Ee);
                                var Ue = z(Ee, 2), be = Z(Ue);
                                {
                                  let De = /* @__PURE__ */ C(() => c(M).options || []), Pe = /* @__PURE__ */ C(() => n()[c(M).name] ? [n()[c(M).name]] : [c(M).defaultValue]);
                                  _t(be, {
                                    get items() {
                                      return c(De);
                                    },
                                    style: "width: 100%",
                                    get placeholder() {
                                      return c(M).placeholder;
                                    },
                                    onSelect: (Xe) => {
                                      const je = Xe.value;
                                      u({ [c(M).name]: je });
                                    },
                                    get value() {
                                      return c(Pe);
                                    }
                                  });
                                }
                                W(Ue), Te(() => tt(G, c(M).label)), O(pe, me);
                              }, xe = (pe) => {
                                var me = de(), Ee = J(me);
                                {
                                  var G = (be) => {
                                    var De = b4(), Pe = J(De), Xe = Z(Pe, !0);
                                    W(Pe);
                                    var je = z(Pe, 2), Ke = Z(je);
                                    {
                                      let rt = /* @__PURE__ */ C(() => c(M).chosen?.buttonText);
                                      kv(Ke, {
                                        style: "width: 100%",
                                        get placeholder() {
                                          return c(M).placeholder;
                                        },
                                        get buttonText() {
                                          return c(rt);
                                        },
                                        onChosen: (Tt, he, Ae) => {
                                          c(M).chosen?.onChosen?.(u, Tt, he, Ae);
                                        },
                                        get value() {
                                          return n()[c(M).chosen?.valueDataKey || ""];
                                        },
                                        get label() {
                                          return n()[c(M).chosen?.labelDataKey || ""];
                                        }
                                      });
                                    }
                                    W(je), Te(() => tt(Xe, c(M).label)), O(be, De);
                                  }, Ue = (be) => {
                                    var De = de(), Pe = J(De);
                                    {
                                      var Xe = (je) => {
                                        We(je, Ve({ level: 3, mt: "10px" }, () => c(M).attrs, {
                                          children: (Ke, rt) => {
                                            Se();
                                            var Tt = Me();
                                            Te(() => tt(Tt, c(M).label)), O(Ke, Tt);
                                          },
                                          $$slots: { default: !0 }
                                        }));
                                      };
                                      ie(
                                        Pe,
                                        (je) => {
                                          c(M).type === "heading" && je(Xe);
                                        },
                                        !0
                                      );
                                    }
                                    O(be, De);
                                  };
                                  ie(
                                    Ee,
                                    (be) => {
                                      c(M).type === "chosen" ? be(G) : be(Ue, !1);
                                    },
                                    !0
                                  );
                                }
                                O(pe, me);
                              };
                              ie(
                                fe,
                                (pe) => {
                                  c(M).type === "select" ? pe(we) : pe(xe, !1);
                                },
                                !0
                              );
                            }
                            O(le, oe);
                          };
                          ie(
                            te,
                            (le) => {
                              c(M).type === "slider" ? le(ve) : le(ae, !1);
                            },
                            !0
                          );
                        }
                        O(ee, L);
                      };
                      ie(
                        Q,
                        (ee) => {
                          c(M).type === "textarea" ? ee(X) : ee(re, !1);
                        },
                        !0
                      );
                    }
                    O(q, F);
                  };
                  ie(U, (q) => {
                    c(M).type === "input" ? q(V) : q(j, !1);
                  });
                }
                O(R, Y);
              }), O(D, P);
            };
            ie(B, (D) => {
              m && D($);
            });
          }
          var H = z(B, 2);
          Nt(H, (D) => y = D, () => y);
          var N = z(H, 2);
          {
            var k = (D) => {
              var P = _4(), A = J(P), R = Z(A);
              We(R, {
                level: 3,
                mt: "10px",
                children: (V, j) => {
                  Se();
                  var q = Me("输出参数");
                  O(V, q);
                },
                $$slots: { default: !0 }
              });
              var M = z(R, 2);
              {
                var Y = (V) => {
                  $e(V, {
                    size: "icon-xs",
                    class: "input-btn-more",
                    style: "margin-left: auto",
                    onclick: () => {
                      i(o, "outputDefs");
                    },
                    children: (j, q) => {
                      var F = x4();
                      O(j, F);
                    },
                    $$slots: { default: !0 }
                  });
                };
                ie(M, (V) => {
                  p.outputDefsAddEnable !== !1 && V(Y);
                });
              }
              W(A);
              var U = z(A, 2);
              dr(U, {}), O(D, P);
            };
            ie(N, (D) => {
              p.outputDefsEnable !== !1 && D(k);
            });
          }
          Te(() => {
            Pt(H, p.rootStyle || ""), Yt(H, 1, ur(p.rootClass), "svelte-qt4m0r");
          }), O(E, _);
        },
        $$slots: { icon: !0, default: !0 }
      }
    ));
  }
  return ce(w);
}
se(Xv, { data: {} }, [], [], !0);
const k4 = () => ({ updateEdgeData: (e, n, r) => {
  const o = Be.getEdge(e);
  if (!o)
    return;
  const i = typeof n == "function" ? n(o) : n;
  o.data = r?.replace ? i : { ...o.data, ...i }, Be.updateEdges((s) => s.map((a) => a.id === e ? o : a));
} }), E4 = () => ({ deleteEdge: (e) => {
  Be.removeEdge(e);
} }), P4 = () => {
  const t = (n, r) => r.filter(
    // 排除循环节点的子节点，否则在多层循环嵌套时不正确
    (o) => o.source === n && o.sourceHandle !== "loop_handle"
  );
  return { getNodesFromSource: (n) => {
    const r = Be.getEdges(), o = [];
    let i = t(n, r);
    for (; i.length > 0; ) {
      const s = [];
      i.forEach((a) => {
        o.push(Be.getNode(a.target)), s.push(...t(a.target, r));
      }), i = s;
    }
    return o;
  } };
}, N4 = () => ({ getNodeRelativePosition: (e) => {
  let n = Be.getNode(e);
  const r = { x: 0, y: 0 };
  for (; n; )
    r.x += n.position.x, r.y += n.position.y, n.parentId ? n = Be.getNode(n.parentId) : n = void 0;
  return r;
} });
function T4(t) {
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
function O4(t) {
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
    const u = r.get(a.id) || [];
    for (const l of u)
      s.has(l) || o.push(e.get(l));
  }
  for (const a of t)
    s.has(a.id) || i.push(a);
  return i;
}
function A4(t) {
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
function ml(t, e) {
  if (t == null)
    return t;
  if (Array.isArray(t))
    return t.map((n) => ml(n, e));
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
      Object.hasOwn(t, r) && (n[r] = ml(t[r], e));
    return n;
  }
  return t;
}
const D4 = () => (wt(), { copyHandler: async (n) => {
  const r = Be.getNodes().filter((d) => d.selected);
  if (r.length === 0) return;
  const i = Be.getEdges().filter((d) => r.some((f) => f.id === d.source) && r.some((f) => f.id === d.target)), s = r.map(T4), a = i.map(A4), l = JSON.stringify({
    tinyflowNodes: s,
    tinyflowEdges: a,
    version: "1.0"
  }, null, 0);
  try {
    "clipboardData" in n && n.clipboardData ? (n.clipboardData.setData("text/plain", l), n instanceof ClipboardEvent && n.preventDefault()) : await navigator.clipboard.writeText(l), console.log("Copied nodes and edges to clipboard");
  } catch (d) {
    console.error("Failed to copy:", d);
    try {
      sessionStorage.setItem("tinyflow_clipboard", l);
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
  const i = O4(o.tinyflowNodes), s = o.tinyflowEdges || [], a = /* @__PURE__ */ new Map(), u = [];
  for (const d of i) {
    const f = `node_${Rn()}`;
    a.set(d.id, f);
  }
  for (const d of i) {
    const f = a.get(d.id), h = d.parentId !== void 0 ? a.get(d.parentId) : void 0, p = ml(d.data, a);
    u.push({
      ...d,
      id: f,
      parentId: h,
      data: p,
      position: {
        x: (d.position?.x ?? 0) + 50,
        y: (d.position?.y ?? 0) + 50
      },
      selected: !0
    });
  }
  const l = [];
  for (const d of s) {
    const f = a.get(d.source), h = a.get(d.target);
    f && h && l.push({
      ...d,
      id: `edge_${Rn()}`,
      source: f,
      target: h
    });
  }
  Be.updateNodes((d) => [...d.map((h) => ({ ...h, selected: !1 })), ...u]), Be.updateEdges((d) => [...d.map((h) => ({ ...h, selected: !1 })), ...l]);
} }), cd = () => {
  const t = document.activeElement;
  return !t || !(t instanceof HTMLElement) ? !1 : t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement || t.isContentEditable;
};
var I4 = /* @__PURE__ */ ne('<div class="panel-content svelte-woejl3"><div>边属性设置</div> <div class="setting-title svelte-woejl3">边条件设置</div> <div class="setting-item svelte-woejl3"><!></div> <div class="setting-item svelte-woejl3" style="padding: 8px 0"><!> <!></div></div>'), M4 = /* @__PURE__ */ ne("<!> <!> <!> <!>", 1), L4 = /* @__PURE__ */ ne('<div style="position: relative; height: 100%; width: 100%;overflow: hidden"><!> <!></div>');
const H4 = {
  hash: "svelte-woejl3",
  code: ".panel-content.svelte-woejl3 {padding:10px;background-color:var(--tf-background);border-radius:5px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);width:200px;border:1px solid var(--tf-border);}.setting-title.svelte-woejl3 {margin:10px 0;font-size:12px;color:var(--tf-muted-foreground);}.setting-item.svelte-woejl3 {display:flex;gap:5px;align-items:center;justify-content:end;}"
};
function jv(t, e) {
  ue(e, !0), Je(t, H4);
  const n = v(e, "onInit", 7), r = wt();
  n()(r);
  let o = /* @__PURE__ */ ye(!1), i = /* @__PURE__ */ ye(null);
  const { updateEdgeData: s } = k4(), a = (q) => {
    q.preventDefault(), q.dataTransfer && (q.dataTransfer.dropEffect = "move");
  }, u = (q) => {
    q.preventDefault();
    const F = r.screenToFlowPosition({ x: q.clientX - 250, y: q.clientY - 100 }), Q = q.dataTransfer?.getData("application/tinyflow");
    if (!Q)
      return;
    const X = JSON.parse(Q), re = { id: `node_${Rn()}`, position: F, data: {}, ...X };
    Be.addNode(re), Be.selectNodeOnly(re.id);
  }, { getNode: l } = d4(), d = (q) => {
    const F = l(q.source), Q = l(q.target);
    if (q.sourceHandle === "loop_handle" || F.parentId) {
      const X = r.getEdges();
      for (let re of X)
        if (re.target === q.target) {
          const ee = l(re.source);
          if (q.sourceHandle === "loop_handle" && ee.parentId !== F.id || F.parentId && ee.parentId !== F.parentId)
            return !1;
        }
    }
    return !(!F.parentId && Q.parentId && Q.parentId !== F.id);
  }, { getNodesFromSource: f } = P4(), { getNodeRelativePosition: h } = N4(), { ensureParentInNodesBefore: p } = f4(), m = (q, F) => {
    if (!F.isValid)
      return;
    const Q = F.toNode;
    if (Q.parentId)
      return;
    const X = F.fromNode, re = F.fromHandle, ee = { position: { ...Q.position } };
    if (re.id === "loop_handle" ? ee.parentId = X.id : X.parentId && (ee.parentId = X.parentId), ee.parentId) {
      const { x: L, y: te } = h(ee.parentId);
      ee.position = { x: Q.position.x - L, y: Q.position.y - te }, r.updateNode(Q.id, ee), f(Q.id).forEach((ae) => {
        r.updateNode(ae.id, {
          parentId: ee.parentId,
          position: { x: ae.position.x - L, y: ae.position.y - te }
        });
      }), p(ee.parentId, Q.id);
    }
    setTimeout(() => {
      Be.getEdges().forEach((L) => {
        L.target === Q.id && L.source == X.id && (K(o, !0), K(i, L, !0));
      });
    });
  }, { getEdgesByTarget: y } = h4(), w = (q) => {
    q.edges.forEach((Q) => {
      Q.id === c(i)?.id && (K(i, null), K(o, !1));
      const X = l(Q.target);
      if (X && X.parentId) {
        const re = y(Q.target), { x: ee, y: L } = h(X.parentId);
        if (re.length === 0)
          r.updateNode(X.id, {
            parentId: void 0,
            position: { x: X.position.x + ee, y: X.position.y + L }
          }), f(X.id).forEach((ve) => {
            r.updateNode(ve.id, {
              parentId: void 0,
              position: { x: ve.position.x + ee, y: ve.position.y + L }
            });
          });
        else {
          let te = !1;
          for (let ve = 0; ve < re.length; ve++) {
            const ae = re[ve], le = l(ae.source);
            if (le.parentId || le.type === "loopNode") {
              te = !0;
              break;
            }
          }
          te || (r.updateNode(X.id, {
            parentId: void 0,
            position: { x: X.position.x + ee, y: X.position.y + L }
          }), f(X.id).forEach((ae) => {
            r.updateNode(ae.id, {
              parentId: void 0,
              position: { x: ae.position.x + ee, y: ae.position.y + L }
            });
          }));
        }
      }
    });
  }, { deleteEdge: b } = E4(), S = (q, F) => {
  }, E = (q) => {
  }, { copyHandler: x, pasteHandler: _ } = D4(), T = (q) => {
    cd() || document.getSelection()?.type !== "Range" && ((q.ctrlKey || q.metaKey) && q.key === "c" ? (q.preventDefault(), x(q)) : (q.ctrlKey || q.metaKey) && q.key === "a" && (q.preventDefault(), Be.updateNodes((F) => F.map((Q) => ({ ...Q, selected: !0 }))), Be.updateEdges((F) => F.map((Q) => ({ ...Q, selected: !0 })))));
  }, I = async (q) => {
    cd() || _(q);
  };
  xn(() => {
    window.addEventListener("keydown", T), window.addEventListener("paste", I);
  }), ui(() => {
    window.removeEventListener("keydown", T), window.removeEventListener("paste", I);
  });
  const B = () => {
    const q = document.getSelection();
    q && q.removeAllRanges();
  }, $ = {
    // ...nodeTypes
  }, H = vn().customNodes;
  if (H)
    for (let q of Object.keys(H))
      $[q] = Xv;
  const N = vn().onDataChange;
  He(() => {
    N?.({
      nodes: Be.getNodes(),
      edges: Be.getEdges(),
      viewport: Be.getViewport()
    });
  });
  var k = {
    get onInit() {
      return n();
    },
    set onInit(q) {
      n(q), g();
    }
  }, D = L4(), P = Z(D), A = Be.getNodes, R = Be.setNodes, M = Be.getEdges, Y = Be.setEdges, U = Be.getViewport, V = Be.setViewport;
  {
    let q = /* @__PURE__ */ C(() => vn().defaultTheme ?? "system"), F = /* @__PURE__ */ C(() => ({ ...s4, ...$ })), Q = /* @__PURE__ */ C(() => ({
      markerEnd: { type: Uo.ArrowClosed, width: 20, height: 20 }
    }));
    qh(P, {
      get colorMode() {
        return c(q);
      },
      get nodeTypes() {
        return c(F);
      },
      get nodes() {
        return A();
      },
      set nodes(X) {
        R(X);
      },
      get edges() {
        return M();
      },
      set edges(X) {
        Y(X);
      },
      get viewport() {
        return U();
      },
      set viewport(X) {
        V(X);
      },
      class: "tinyflow-logo",
      ondrop: u,
      ondragover: a,
      isValidConnection: d,
      onconnectend: m,
      onconnectstart: S,
      onconnect: E,
      connectionRadius: 50,
      onpaneclick: B,
      onedgeclick: (X) => {
        K(o, !0), K(i, X.edge, !0);
      },
      onbeforeconnect: (X) => ({ ...X, id: Rn() }),
      ondelete: w,
      onclick: (X) => {
        const re = X.target;
        re.classList.contains("svelte-flow__edge-interaction") || re.classList.contains("panel-content") || re.closest(".panel-content") || (K(o, !1), K(i, null));
      },
      get defaultEdgeOptions() {
        return c(Q);
      },
      children: (X, re) => {
        var ee = M4(), L = J(ee);
        rg(L, {});
        var te = z(L, 2);
        eg(te, {});
        var ve = z(te, 2);
        ig(ve, {});
        var ae = z(ve, 2);
        {
          var le = (oe) => {
            mi(oe, {
              children: (fe, we) => {
                var xe = I4(), pe = z(Z(xe), 4), me = Z(pe);
                {
                  let be = /* @__PURE__ */ C(() => c(i)?.data?.condition);
                  qe(me, {
                    rows: 3,
                    placeholder: "请输入边条件",
                    style: "width: 100%",
                    get value() {
                      return c(be);
                    },
                    onchange: (De) => {
                      c(i) && s(c(i).id, { condition: De.target?.value });
                    }
                  });
                }
                W(pe);
                var Ee = z(pe, 2), G = Z(Ee);
                $e(G, {
                  variant: "destructive",
                  onclick: () => {
                    b(c(i)?.id), K(o, !1);
                  },
                  children: (be, De) => {
                    Se();
                    var Pe = Me("删除");
                    O(be, Pe);
                  },
                  $$slots: { default: !0 }
                });
                var Ue = z(G, 2);
                $e(Ue, {
                  variant: "default",
                  onclick: () => {
                    K(o, !1);
                  },
                  children: (be, De) => {
                    Se();
                    var Pe = Me("保存");
                    O(be, Pe);
                  },
                  $$slots: { default: !0 }
                }), W(Ee), W(xe), O(fe, xe);
              },
              $$slots: { default: !0 }
            });
          };
          ie(ae, (oe) => {
            c(o) && oe(le);
          });
        }
        O(X, ee);
      },
      $$slots: { default: !0 }
    });
  }
  var j = z(P, 2);
  return qv(j, {}), W(D), O(t, D), ce(k);
}
se(jv, { onInit: {} }, [], [], !0);
function V4(t, e) {
  ue(e, !0);
  const n = v(e, "options", 7), r = v(e, "onInit", 7);
  let { data: o } = n();
  if (typeof o == "string")
    try {
      o = JSON.parse(o.trim());
    } catch {
      console.error("Invalid JSON data:", o);
    }
  Be.init(o?.nodes || [], o?.edges || []), zr("tinyflow_options", n());
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
  return Xh(t, {
    children: (s, a) => {
      jv(s, {
        get onInit() {
          return r();
        }
      });
    },
    $$slots: { default: !0 }
  }), ce(i);
}
customElements.define("tinyflow-component", se(V4, { options: {}, onInit: {} }, [], [], !1));
export {
  B4 as Tinyflow
};
//# sourceMappingURL=index.js.map
